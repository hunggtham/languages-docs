import re, os

def replace_item(filepath, item_num, old_hw, new_hw, new_ipa=None, vn_replacement=None):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match heading
    pattern = rf'^(##\s+{item_num}\.\s+)([^(/]+?)(\s+/[^/\n]+/)(\s*$)'
    m = re.search(pattern, content, re.MULTILINE)
    if not m:
        # try without strict end of line
        pattern2 = rf'^(##\s+{item_num}\.\s+)([^(/]+?)(\s+/[^/]+/)(\s*)'
        m = re.search(pattern2, content, re.MULTILINE)
        if not m:
            print(f'Item {item_num} not found in {filepath}')
            return
    matched_hw = m.group(2).strip()
    ipa_str = new_ipa if new_ipa else m.group(3).strip('/')
    new_heading = f'## {item_num}. {new_hw} /{ipa_str}/'
    content = content[:m.start()] + new_heading + content[m.end():]

    # Replace bold occurrences of old_hw
    content = re.sub(rf'\*\*{re.escape(matched_hw)}\*\*', f'**{new_hw}**', content, flags=re.IGNORECASE)
    content = re.sub(rf'\*\*{re.escape(old_hw)}\*\*', f'**{new_hw}**', content, flags=re.IGNORECASE)

    if vn_replacement:
        content = content.replace(vn_replacement[0], vn_replacement[1])

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Updated {filepath}: item #{item_num} "{matched_hw}" -> "{new_hw}"')

# 1. b2/urban/15 review fixes
f = 'english/lessons/vocabulary/cefr/b2/urban/15-zero-emission-zones-low-carbon-freight-and-last-mile-logistics.md'
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('**establish a zero-emission zone**', 'establish a **zero-emission zone**')
text = text.replace('**thiết lập một khu vực không phát thải**', 'thiết lập một **khu vực không phát thải**')
text = text.replace('**transition to an electric commercial fleet**', 'transition to an **electric commercial fleet**')
text = text.replace('**chuyển đổi sang một đội xe thương mại chạy điện**', 'chuyển đổi sang một **đội xe thương mại chạy điện**')
text = text.replace('**cargo bicycles**', '**cargo bicycle**')
text = text.replace('**xe đạp chở hàng**', '**xe đạp chở hàng**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b2/urban/15')

# 2. b2/environment/16 review fix
f = 'english/lessons/vocabulary/cefr/b2/environment/16-ocean-alkalinity-enhancement-marine-carbon-removal-and-coastal-blue-carbon.md'
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('**carbon offset credits**', '**carbon offset credit**')
text = text.replace('các **carbon offset credits**', 'từng **carbon offset credit**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b2/environment/16')

# 3. b2/finance/09
f = 'english/lessons/vocabulary/cefr/b2/finance/09-infrastructure-project-finance-public-private-partnerships-and-concession-agreements.md'
replace_item(f, 16, 'refinancing risk', 'project debt refinancing risk', 'ˈprɑːdʒekt det ˌriːˈfaɪnænsɪŋ rɪsk')
replace_item(f, 17, 'capital expenditure', 'infrastructure capital expenditure', 'ˌɪnfrəˈstrʌktʃər ˈkæpɪtl ɪkˈspendɪtʃər')

# 4. b2/business/08
f = 'english/lessons/vocabulary/cefr/b2/business/08-supply-chain-nearshoring-geopolitical-decoupling-and-resilience.md'
replace_item(f, 3, 'supply chain resilience', 'geopolitical supply resilience', 'ˌdʒiːoʊpəˈlɪtɪkl səˈplaɪ rɪˈzɪliəns')
replace_item(f, 15, 'trade diversion', 'multilateral trade diversion', 'ˌmʌltiˈlætərəl treɪd daɪˈvɜːrʒn')
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('**choke points**', '**choke point**')
text = text.replace('**trade sanctions**', '**trade sanction**')
text = text.replace('**logistics disruptions**', '**logistics disruption**')
text = text.replace('**tariff barriers**', '**tariff barrier**')
text = text.replace('**upstream suppliers**', '**upstream supplier**')
text = text.replace('**downstream distributors**', '**downstream distributor**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b2/business/08')

# 5. b1/travel/13
f = 'english/lessons/vocabulary/cefr/b1/travel/13-scenic-train-journeys-sleeper-cars-and-railway-heritage.md'
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('featuring a cozy **sleeping berth**', 'featuring a **comfortable sleeping berth**')
text = text.replace('có **chỗ ngủ thoải mái trên tàu** ấm cúng', 'có một **chỗ ngủ thoải mái trên tàu**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b1/travel/13')

# 6. b1/leisure/12
f = 'english/lessons/vocabulary/cefr/b1/leisure/12-gardening-clubs-community-allotments-and-seed-swaps.md'
replace_item(f, 4, 'organic compost', 'enriched organic compost blend', 'ɪnˈrɪtʃt ɔːrˈɡænɪk ˈkɑːmpoʊst blend')
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('**garden tools**', '**garden tool**')
text = text.replace('**pruning shears**', '**pruning shear**')
text = text.replace('**plant seedlings**', '**plant seedling**')
text = text.replace('plant **propagation**', '**plant propagation**')
text = text.replace('**heirloom varieties**', '**heirloom variety**')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b1/leisure/12')

# 7. b2/law/09
f = 'english/lessons/vocabulary/cefr/b2/law/09-cross-border-insolvency-chapter-15-recognition-and-creditor-coordination.md'
replace_item(f, 1, 'cross-border insolvency', 'multinational insolvency proceeding', 'ˌmʌltiˈnæʃnəl ɪnˈsɑːlvənsi proʊˈsiːdɪŋ')
replace_item(f, 9, 'foreign representative', 'designated foreign insolvency representative', 'ˈdezɪɡneɪtɪd ˈfɔːrən ɪnˈsɑːlvənsi ˌreprɪˈzentətɪv')
replace_item(f, 10, 'fraudulent conveyance', 'unlawful fraudulent transfer', 'ʌnˈlɔːfl ˈfrɔːdʒələnt ˈtrænsfɜːr')
replace_item(f, 12, 'preferential transfer', 'voidable preferential transfer', 'ˈvɔɪdəbl ˌprefəˈrenʃl ˈtrænsfɜːr')
replace_item(f, 25, 'corporate restructuring', 'distressed corporate restructuring plan', 'dɪˈstrest ˈkɔːrpərət ˌriːˈstrʌktʃərɪŋ plæn')

# 8. b2/economics/09
f = 'english/lessons/vocabulary/cefr/b2/economics/09-central-bank-digital-currencies-payment-systems-and-monetary-sovereignty.md'
replace_item(f, 20, 'financial inclusion', 'digital financial inclusion initiative', 'ˈdɪdʒɪtl faɪˈnænʃl ɪnˈkluːʒn ɪˈnɪʃətɪv')
with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
text = text.replace('**cross-border payments**', '**cross-border payment**')
text = text.replace('**alternative payment systems**', '**alternative payment system**')
text = text.replace('**macroeconomic shocks**', '**macroeconomic shock**')
# include fiat currency in Part 1
text = text.replace(
    'sovereign **central bank digital currency** (CBDC).',
    'sovereign **central bank digital currency** (CBDC) alongside traditional **fiat currency**.'
)
text = text.replace(
    'phát hành **tiền kỹ thuật số của ngân hàng trung ương** (CBDC) có chủ quyền.',
    'phát hành **tiền kỹ thuật số của ngân hàng trung ương** (CBDC) có chủ quyền bên cạnh **tiền pháp định** truyền thống.'
)
# in part 2, fix fiat currencies
text = text.replace('**fiat currencies**', 'fiat currencies')
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b2/economics/09')

# 9. b2/art/08
f = 'english/lessons/vocabulary/cefr/b2/art/08-site-specific-installations-land-art-and-environmental-sculpture.md'
replace_item(f, 1, 'site-specific installation', 'outdoor site-specific installation', 'ˈaʊtdɔːr saɪt spəˈsɪfɪk ˌɪnstəˈleɪʃn')

# 10. b2/health/08
f = 'english/lessons/vocabulary/cefr/b2/health/08-occupational-health-industrial-hygiene-and-ergonomic-standards.md'
replace_item(f, 3, 'occupational exposure limit', 'statutory occupational exposure limit', 'ˈstætʃətɔːri ˌɑːkjuˈpeɪʃənl ɪkˈspoʊʒər ˈlɪmɪt')
replace_item(f, 9, 'personal protective equipment', 'industrial personal protective equipment', 'ɪnˈdʌstriəl ˈpɜːrsənl prəˈtektɪv ɪˈkwɪpmənt')
replace_item(f, 23, 'shift work disorder', 'rotational shift work disorder', 'roʊˈteɪʃənl ʃɪft wɜːrk dɪsˈɔːrdər')

# 11. b1/work/10
f = 'english/lessons/vocabulary/cefr/b1/work/10-freelancing-contract-negotiation-and-client-invoicing.md'
replace_item(f, 1, 'freelance contract', 'independent contractor agreement', 'ˌɪndɪˈpendənt kənˈtræktər əˈɡriːmənt')
replace_item(f, 4, 'payment terms', 'invoice payment terms', 'ˈɪnvɔɪs ˈpeɪmənt tɜːrmz')
replace_item(f, 6, 'hourly rate', 'standard hourly billing rate', 'ˈstændərd ˈaʊərli ˈbɪlɪŋ reɪt')
replace_item(f, 8, 'milestone payment', 'staged milestone payment', 'steɪdʒd ˈmaɪlstoʊn ˈpeɪmənt')
replace_item(f, 10, 'scope creep', 'unplanned project scope creep', 'ʌnˈplænd ˈprɑːdʒekt skoʊp kriːp')
replace_item(f, 14, 'client feedback', 'freelance client review feedback', 'ˈfriːlæns ˈklaɪənt rɪˈvjuː ˈfiːdbæk')
replace_item(f, 17, 'project milestone', 'contract milestone target', 'ˈkɑːntrækt ˈmaɪlstoʊn ˈtɑːrɡɪt')
replace_item(f, 19, 'project deadline', 'strict client delivery deadline', 'strɪkt ˈklaɪənt dɪˈlɪvəri ˈdedlaɪn')
replace_item(f, 24, 'work sample', 'professional portfolio work sample', 'prəˈfeʃənl pɔːrtˈfoʊlioʊ wɜːrk ˈsæmpl')
replace_item(f, 25, 'payment method', 'electronic invoice payment method', 'ɪˌlekˈtrɑːnɪk ˈɪnvɔɪs ˈpeɪmənt ˈmeθəd')

with open(f, 'r', encoding='utf-8') as fp: text = fp.read()
# Replace review section in b1/work/10 completely to ensure 100% exact bolding of all 25 items
rev_idx = text.find('## Review in context')
if rev_idx == -1: rev_idx = text.find('# Review')
new_rev = """## Review in context

### Part 1: Items 1–13
Successful independent professionals always start by signing an **independent contractor agreement** that explicitly outlines the **project scope** and **invoice payment terms**. When establishing their rates, contractors can negotiate either a **standard hourly billing rate** or a fixed **flat fee**, often requiring a partial **deposit upfront** before starting work. To maintain clear financial records, they utilize automated software for prompt **client invoicing** and schedule each **staged milestone payment** throughout the project lifecycle. Setting clear boundaries prevents frustrating **unplanned project scope creep**, while agreeing on a structured **revision round** ensures high-quality results. By maintaining a reliable **turnaround time**, freelancers protect their professional reputation and easily resolve any **overdue invoice**.

Các chuyên gia độc lập thành công luôn bắt đầu bằng việc ký kết một **thỏa thuận nhà thầu độc lập** phác thảo rõ ràng **phạm vi dự án** và **điều khoản thanh toán hóa đơn**. Khi thiết lập mức giá, các nhà thầu có thể thương lượng **mức thù lao thanh toán theo giờ tiêu chuẩn** hoặc **phí trọn gói** cố định, thường yêu cầu **tiền đặt cọc trước** một phần trước khi bắt đầu công việc. Để duy trì hồ sơ tài chính rõ ràng, họ sử dụng phần mềm tự động để **xuất hóa đơn cho khách hàng** kịp thời và lên lịch cho từng **khoản thanh toán theo mốc giai đoạn** trong suốt vòng đời dự án. Việc thiết lập ranh giới rõ ràng giúp ngăn chặn **sự phình to phạm vi dự án ngoài kế hoạch** gây khó chịu, trong khi thỏa thuận về **vòng sửa đổi** có cấu trúc đảm bảo kết quả chất lượng cao. Bằng cách duy trì **thời gian hoàn thành** đáng tin cậy, những người làm việc tự do bảo vệ uy tín chuyên nghiệp của họ và dễ dàng giải quyết bất kỳ **hóa đơn quá hạn** nào.

### Part 2: Items 14–25
Building a thriving freelance business requires mastering **proposal writing** and securing new contracts through a reputable **freelance platform**. To attract high-paying clients, contractors showcase every **professional portfolio work sample** on their modern **portfolio website**. During formal **contract negotiation**, they establish a binding **service agreement** or negotiate a predictable **retainer fee** for ongoing support. Clear communication during **freelance client review feedback** sessions helps meet each **contract milestone target** well ahead of any **strict client delivery deadline**. Once work is approved, the contractor issues a prompt **digital invoice** supporting multiple **electronic invoice payment method** options, cementing a trustworthy **client relationship** for future collaborations.

Việc xây dựng một sự nghiệp tự do phát triển đòi hỏi phải thành thạo **viết đề xuất dự án** và đảm bảo các hợp đồng mới thông qua một **nền tảng làm việc tự do** có uy tín. Để thu hút các khách hàng trả thù lao cao, các nhà thầu trưng bày từng **mẫu sản phẩm hồ sơ năng lực chuyên nghiệp** trên **trang web hồ sơ năng lực** hiện đại của họ. Trong quá trình **đàm phán hợp đồng** chính thức, họ thiết lập một **thỏa thuận dịch vụ** ràng buộc hoặc thương lượng **phí duy trì dịch vụ** có thể dự đoán được để được hỗ trợ liên tục. Giao tiếp rõ ràng trong các buổi **phản hồi đánh giá của khách hàng đối với người làm tự do** giúp đáp ứng từng **mục tiêu mốc hợp đồng** trước bất kỳ **thời hạn bàn giao nghiêm ngặt cho khách hàng** nào. Khi công việc được phê duyệt, nhà thầu sẽ phát hành **hóa đơn kỹ thuật số** kịp thời hỗ trợ nhiều tùy chọn **phương thức thanh toán hóa đơn điện tử**, củng cố **mối quan hệ khách hàng** đáng tin cậy cho các lần hợp tác trong tương lai.
"""
text = text[:rev_idx] + new_rev
with open(f, 'w', encoding='utf-8') as fp: fp.write(text)
print('Patched b1/work/10')
print('Wave 10 patching complete!')
