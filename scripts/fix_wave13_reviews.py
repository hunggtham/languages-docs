import re

# 1. Fix b2/environment/19
f1 = 'english/lessons/vocabulary/cefr/b2/environment/19-soil-salinization-remediation-halophyte-cultivation-and-dryland-restoration.md'
with open(f1, 'r', encoding='utf-8') as fp:
    c1 = fp.read()

# Insert drought-tolerant crop rotation into Part 1 review
c1 = c1.replace(
    'to improve soil structure, while calculating the precise **leaching fraction**',
    'to improve soil structure and adopted a **drought-tolerant crop rotation**, while calculating the precise **leaching fraction**'
)
c1 = c1.replace(
    'để cải thiện cấu trúc đất, đồng thời tính toán **leaching fraction** chính xác',
    'để cải thiện cấu trúc đất và áp dụng một **drought-tolerant crop rotation**, đồng thời tính toán **leaching fraction** chính xác'
)
c1 = c1.replace(
    'để cải thiện cấu trúc đất, đồng thời tính toán **tỷ lệ rửa trôi** chính xác',
    'để cải thiện cấu trúc đất và áp dụng một **luân canh cây trồng chịu hạn**, đồng thời tính toán **tỷ lệ rửa trôi** chính xác'
)
with open(f1, 'w', encoding='utf-8') as fp:
    fp.write(c1)
print('Fixed b2/environment/19 review')

# 2. Fix b2/finance/12
f2 = 'english/lessons/vocabulary/cefr/b2/finance/12-project-finance-non-recourse-debt-and-infrastructure-concessions.md'
with open(f2, 'r', encoding='utf-8') as fp:
    c2 = fp.read()

# Remove middle review section (between item 13 and item 14)
pattern_mid = r'---\s*\n\s*## Review in Context \(Part 1: Items 1–13\).*?(?=---\s*\n\s*## 14\.)'
c2 = re.sub(pattern_mid, '', c2, flags=re.DOTALL)

# Reformat bottom review section to canonical format
pattern_bot = r'---\s*\n\s*## Review in context \(Part 1: Items 1–13\).*'
bot_replacement = """---

## Review in context

### Part 1: Items 1 to 13
Large-scale infrastructure initiatives rely heavily on structured **project financing** utilizing a robust **non-recourse structure** to isolate corporate liabilities. Governments frequently award a long-term **infrastructure concession** to private consortia, which in turn establish a bankruptcy-remote **special purpose vehicle subsidiary**. During the capital allocation phase, a strict **cash flow waterfall** dictates the priority of payouts, supported by a funded **debt service reserve account** for emergency protection. To reassure international lenders against macroeconomic shocks, projects often seek **sovereign credit enhancement** alongside comprehensive **political risk insurance**. Construction is typically managed via a fixed-price **turnkey construction contract** up until the official **commercial operational date**. Furthermore, signing a dependable **offtake agreement** and meeting minimum **sponsor equity contribution** rules satisfy every key **debt service coverage metric** required by the banking syndicate.

### Part 2: Items 14 to 25
Before finalizing capital allocations, experts review the standard **asset depreciation schedule** and evaluate the **commercial viability assessment** to ensure long-term profitability. If macroeconomic conditions shift dramatically, parties may initiate a **concession agreement renegotiation** or agree on a modified **revenue sharing formula**. Throughout development, projects must manage **currency convertibility risk** and submit a comprehensive **project environmental impact assessment** to regulatory boards. To prevent costly construction delays, owners appoint an **independent technical auditor** to monitor milestones and enforce a strict **construction delay penalty** when necessary. If unforeseen hurdles cause a massive **capital expenditure overrun**, sponsors may need to trigger a **mandatory prepayment provision** or seek a temporary **debt restructuring moratorium**. Finally, a robust **performance bond guarantee** protects stakeholders against contractor defaults.

---

### Bản dịch song ngữ (Review in context translation)

### Phần 1: Mục 1 đến 13
Các sáng kiến cơ sở hạ tầng quy mô lớn phụ thuộc rất nhiều vào **project financing** có cấu trúc sử dụng **non-recourse structure** vững chắc nhằm cô lập các khoản nợ của công ty. Các chính phủ thường trao **infrastructure concession** dài hạn cho các tập đoàn tư nhân, và họ lại thành lập một **special purpose vehicle subsidiary** cách ly phá sản. Trong giai đoạn phân bổ vốn, **cash flow waterfall** nghiêm ngặt quy định thứ tự ưu tiên chi trả, được hỗ trợ bởi **debt service reserve account** được tài trợ để bảo vệ khẩn cấp. Để trấn an các chủ cho vay quốc tế trước các cú sốc kinh tế vĩ mô, các dự án thường tìm kiếm **sovereign credit enhancement** bên cạnh **political risk insurance** toàn diện. Quá trình xây dựng thường được quản lý thông qua **turnkey construction contract** giá cố định cho đến ngày **commercial operational date** chính thức. Hơn nữa, việc ký kết **offtake agreement** đáng tin cậy và đáp ứng mọi **debt service coverage metric** tối thiểu do tập đoàn ngân hàng yêu cầu sẽ thỏa mãn mọi quy tắc **sponsor equity contribution**.

### Phần 2: Mục 14 đến 25
Trước khi hoàn tất việc phân bổ vốn, các chuyên gia xem xét **asset depreciation schedule** tiêu chuẩn và đánh giá **commercial viability assessment** để đảm bảo khả năng sinh lời dài hạn. Nếu các điều kiện kinh tế vĩ mô thay đổi kịch tính, các bên có thể khởi xướng **concession agreement renegotiation** hoặc đồng ý về **revenue sharing formula** đã sửa đổi. Trong suốt quá trình phát triển, các dự án phải quản lý **currency convertibility risk** và nộp **project environmental impact assessment** toàn diện cho các ban quản lý. Để ngăn chặn các chậm trễ xây dựng tốn kém, các chủ sở hữu chỉ định **independent technical auditor** để giám sát các mốc quan trọng và thực thi một **construction delay penalty** nghiêm ngặt khi cần thiết. Nếu các rào cản bất ngờ gây ra **capital expenditure overrun** khổng lồ, các nhà tài trợ có thể cần kích hoạt **mandatory prepayment provision** hoặc tìm kiếm **debt restructuring moratorium** tạm thời. Cuối cùng, một **performance bond guarantee** vững chắc bảo vệ các bên liên quan trước các trường hợp nhà thầu vỡ nợ.
"""

c2 = re.sub(pattern_bot, bot_replacement.lstrip(), c2, flags=re.DOTALL)
with open(f2, 'w', encoding='utf-8') as fp:
    fp.write(c2)
print('Fixed b2/finance/12 review')

# 3. Fix b2/business/11
f3 = 'english/lessons/vocabulary/cefr/b2/business/11-corporate-spin-offs-carve-outs-and-divestiture-strategies.md'
with open(f3, 'r', encoding='utf-8') as fp:
    c3 = fp.read()

# Remove middle review section (between item 13 and item 14)
pattern_mid3 = r'---\s*\n\s*## Review in context\s*\n\s*### Part 1: Items 1 to 13.*?(?=---\s*\n\s*## 14\.)'
c3 = re.sub(pattern_mid3, '', c3, flags=re.DOTALL)

# Reformat bottom review section to canonical format
pattern_bot3 = r'---\s*\n\s*## Review in context.*'
bot_replacement3 = """---

## Review in context

### Part 1: Items 1 to 13
When multi-industry enterprises suffer from a persistent **conglomerate discount**, executives frequently explore a **corporate spin-off** or a **subsidiary equity carve-out** to unlock shareholder value. Designing a successful **divestiture strategy** requires meticulous **asset rationalization** and a clear plan for **parent-subsidiary decoupling**. By structuring the transaction as a **tax-free distribution**, lawyers ensure a fair **pro-rata share distribution** of shares to existing owners. Meanwhile, a rigorous **standalone valuation** reassures the market of the new entity's worth, while the remaining **stub stock** reflects the streamlined enterprise. Companies often embark on **strategic refocusing** following a **non-core asset disposal**, aided by a temporary **commercial transition services agreement** to maintain operational continuity across separated units.

### Part 2: Items 14 to 25
To optimize long-term returns, corporations regularly conduct disciplined **portfolio rationalization** and extensive **portfolio restructuring**. When business units fail to align with core goals, executives may opt for **voluntary liquidation** or prepare a detailed **carve-out financial statement** to facilitate a sale. Every strategic move aims at ultimate **shareholder value creation**, though difficult decisions like recording an **asset impairment charge** are sometimes unavoidable. Managing intricate **operational disentanglement** requires a robust **parent company guarantee**, careful monitoring of each **cross-default covenant**, and an occasional **restructuring debt-for-equity swap**. Finally, addressing complex **strategic alliance termination** issues and finalizing an accurate **working capital adjustment** ensure clean, successful corporate exits.

---

### Bản dịch song ngữ (Review in context translation)

### Phần 1: Mục 1 đến 13
Khi các doanh nghiệp đa ngành chịu đựng **conglomerate discount** dai dẳng, các giám đốc điều hành thường khám phá **corporate spin-off** hoặc một **subsidiary equity carve-out** nhằm mở khóa giá trị cổ đông. Thiết kế **divestiture strategy** thành công đòi hỏi **asset rationalization** tỉ mỉ và kế hoạch rõ ràng cho **parent-subsidiary decoupling**. Bằng cách cấu trúc giao dịch dưới dạng **tax-free distribution**, các luật sư đảm bảo **pro-rata share distribution** công bằng cho các chủ sở hữu hiện hữu. Trong khi đó, **standalone valuation** khắt khe trấn an thị trường về giá trị của thực thể mới, trong khi **stub stock** còn lại phản ánh doanh nghiệp đã được tinh gọn. Các công ty thường dấn thân vào **strategic refocusing** sau **non-core asset disposal**, được hỗ trợ bởi **commercial transition services agreement** tạm thời nhằm duy trì tính liên tục vận hành trên các đơn vị đã tách rời.

### Phần 2: Mục 14 đến 25
Để tối ưu hóa lợi nhuận dài hạn, các tập đoàn thường xuyên tiến hành **portfolio rationalization** kỷ luật và **portfolio restructuring** rộng rãi. Khi các bộ phận kinh doanh không đồng điệu với các mục tiêu cốt lõi, các giám đốc điều hành có thể chọn **voluntary liquidation** hoặc chuẩn bị một **carve-out financial statement** chi tiết để tạo điều kiện thuận lợi cho việc bán. Mọi bước đi chiến lược đều hướng tới mục tiêu tối thượng **shareholder value creation**, mặc dù các quyết định khó khăn như ghi nhận **asset impairment charge** đôi khi là không thể tránh khỏi. Quản lý **operational disentanglement** phức tạp đòi hỏi một **parent company guarantee** vững chắc, theo dõi cẩn thận từng **cross-default covenant** và thỉnh thoảng thực hiện một **restructuring debt-for-equity swap**. Cuối cùng, việc giải quyết các vấn đề **strategic alliance termination** phức tạp và hoàn tất một **working capital adjustment** chính xác đảm bảo các đợt thoái vốn doanh nghiệp trọn vẹn, thành công.
"""

c3 = re.sub(pattern_bot3, bot_replacement3.lstrip(), c3, flags=re.DOTALL)
with open(f3, 'w', encoding='utf-8') as fp:
    fp.write(c3)
print('Fixed b2/business/11 review')

