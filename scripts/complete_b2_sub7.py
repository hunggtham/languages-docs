import os, re

# Complete b2/law/11
f_law = 'english/lessons/vocabulary/cefr/b2/law/11-maritime-law-salvage-rights-and-admiralty-jurisdiction.md'
with open(f_law, 'r', encoding='utf-8') as fp:
    text = fp.read()

law_items_14_25 = """## 14. general average bond /ˌdʒenərəl ˈævərɪdʒ bɑːnd/
- **Part of speech:** Noun phrase
- **Core meaning (English):** A financial undertaking given by a cargo owner or insurer to pay their proportion of general average losses.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Cam kết tổn thất chung - văn bản bảo lãnh tài chính do chủ hàng hoặc công ty bảo hiểm ký cam kết chi trả phần đóng góp tổn thất chung.
- **Grammar & collocations:**
  - sign a general average bond (ký cam kết tổn thất chung)
  - demand a general average bond (yêu cầu cam kết tổn thất chung)
  - terms of a general average bond (các điều khoản của cam kết tổn thất chung)
- **Examples:**
  - The carrier refused to release the containers until each importer provided a signed **general average bond**. (Hãng tàu từ chối giao container cho đến khi mỗi nhà nhập khẩu cung cấp một cam kết tổn thất chung đã ký.)
  - Insurers typically furnish a **general average bond** on behalf of their policyholders to expedite cargo release. (Các công ty bảo hiểm thường cung cấp cam kết tổn thất chung thay mặt cho người mua bảo hiểm để đẩy nhanh việc giải phóng hàng.)
- **Liên kết tiếng Hàn:** 공동해손 본드 / 분담 보증서 (gongdong-haeson bondeu)

## 15. p&i club insurance /piː ænd aɪ klʌb ɪnˈʃʊrəns/
- **Part of speech:** Noun phrase
- **Core meaning (English):** Mutual marine insurance provided by protection and indemnity associations covering third-party maritime liabilities.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Bảo hiểm hội P&I - hình thức bảo hiểm tương hỗ giữa các chủ tàu bảo vệ trước các trách nhiệm pháp lý đối với bên thứ ba (như ô nhiễm dầu, tổn thương thuyền viên).
- **Grammar & collocations:**
  - enter a vessel into p&i club insurance (đăng ký tàu vào bảo hiểm hội P&I)
  - comprehensive p&i club insurance (bảo hiểm hội P&I toàn diện)
  - claims covered by p&i club insurance (các yêu cầu bồi thường thuộc bảo hiểm hội P&I)
- **Examples:**
  - The shipowner relied on **p&i club insurance** to cover the substantial costs of clean-up after a bunker spill. (Chủ tàu đã dựa vào bảo hiểm hội P&I để chi trả chi phí dọn dẹp đáng kể sau sự cố tràn dầu nhiên liệu.)
  - Most international commercial vessels are required to maintain valid **p&i club insurance** before entering foreign ports. (Hầu hết các tàu thương mại quốc tế đều được yêu cầu duy trì bảo hiểm hội P&I có hiệu lực trước khi vào các cảng nước ngoài.)
- **Liên kết tiếng Hàn:** 선주상호책임보험 (seonju sangho chaekim boheom)

## 16. marine surveyor report /məˈriːn sərˈveɪər rɪˈpɔːrt/
- **Part of speech:** Noun phrase
- **Core meaning (English):** A formal technical inspection document detailing the physical condition, seaworthiness, or casualty damage of a vessel.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Báo cáo giám định hàng hải - biên bản kỹ thuật chi tiết về tình trạng thân vỏ, máy móc hoặc mức độ hư hại của tàu sau tai nạn.
- **Grammar & collocations:**
  - commission a marine surveyor report (ủy thác thực hiện báo cáo giám định hàng hải)
  - findings of the marine surveyor report (các kết luận của báo cáo giám định hàng hải)
  - independent marine surveyor report (báo cáo giám định hàng hải độc lập)
- **Examples:**
  - Admiralty lawyers submitted the **marine surveyor report** as primary evidence regarding hull fractures after the grounding. (Các luật sư hàng hải đã đệ trình báo cáo giám định hàng hải làm bằng chứng chính về các vết nứt thân tàu sau sự cố mắc cạn.)
  - A thorough **marine surveyor report** confirmed that the ship's cargo holds were clean and watertight. (Một báo cáo giám định hàng hải kỹ lưỡng đã xác nhận các khoang hàng của tàu sạch sẽ và kín nước.)
- **Liên kết tiếng Hàn:** 해사 감정 보고서 (haesa gamjeong bogoseo)

## 17. constructive total loss /kənˈstrʌktɪv ˈtoʊtl lɔːs/
- **Part of speech:** Noun phrase
- **Core meaning (English):** A legal situation where the cost of repairing or salvaging a damaged ship exceeds its actual post-repair market value.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Tổn thất toàn bộ ước tính - tình trạng tàu bị hư hỏng mà chi phí sửa chữa hoặc trục vớt vượt quá giá trị thực tế của tàu sau khi phục hồi.
- **Grammar & collocations:**
  - declare a constructive total loss (tuyên bố tổn thất toàn bộ ước tính)
  - settle on a constructive total loss basis (bồi thường trên cơ sở tổn thất toàn bộ ước tính)
  - criteria for constructive total loss (tiêu chí xác định tổn thất toàn bộ ước tính)
- **Examples:**
  - After inspecting the burnt engine room, marine underwriters formally declared the vessel a **constructive total loss**. (Sau khi kiểm tra buồng máy bị cháy, các nhà bảo hiểm hàng hải đã chính thức tuyên bố con tàu là một tổn thất toàn bộ ước tính.)
  - Owners opted to abandon the stranded freighter to insurers once salvage estimates indicated a **constructive total loss**. (Các chủ tàu đã chọn từ bỏ chiếc tàu chở hàng mắc cạn cho các công ty bảo hiểm khi các ước tính cứu hộ chỉ ra tổn thất toàn bộ ước tính.)
- **Liên kết tiếng Hàn:** 추정 전손 (chujeong jeonson)

## 18. unseaworthy vessel condition /ʌnˈsiːwɜːrði ˈvesl kənˈdɪʃn/
- **Part of speech:** Noun phrase
- **Core meaning (English):** The state of a ship being unfit to withstand normal perils of the sea due to structural, mechanical, or crew deficiencies.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Tình trạng tàu không đủ khả năng đi biển - khiếm khuyết về cấu trúc hoặc thủy thủ đoàn khiến tàu không thể chịu đựng được các hiểm nguy thông thường trên biển.
- **Grammar & collocations:**
  - sail in an unseaworthy vessel condition (cho tàu ra khơi trong tình trạng không đủ khả năng đi biển)
  - evidence of unseaworthy vessel condition (bằng chứng về tình trạng tàu không đủ khả năng đi biển)
  - liability for unseaworthy vessel condition (trách nhiệm đối với tình trạng tàu không đủ khả năng đi biển)
- **Examples:**
  - Shipowners lost their statutory limitation defenses after judges found the ship had sailed in an **unseaworthy vessel condition**. (Các chủ tàu đã mất quyền bảo vệ giới hạn trách nhiệm theo luật sau khi các thẩm phán phát hiện tàu đã ra khơi trong tình trạng không đủ khả năng đi biển.)
  - Neglecting radar maintenance directly contributed to the **unseaworthy vessel condition** at the time of the collision. (Việc bỏ bê bảo trì radar đã trực tiếp dẫn đến tình trạng tàu không đủ khả năng đi biển tại thời điểm xảy ra va chạm.)
- **Liên kết tiếng Hàn:** 감항성 결여 상태 (gamhangseong gyeol-yeo sangtae)

## 19. port state control inspection /pɔːrt steɪt kənˈtroʊl ɪnˈspekʃn/
- **Part of speech:** Noun phrase
- **Core meaning (English):** An inspection of foreign ships in national ports to verify compliance with international maritime safety, security, and environmental treaties.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Kiểm tra của chính quyền cảng (PSC) - cuộc thanh tra kỹ thuật đối với tàu treo cờ nước ngoài để đảm bảo tiêu chuẩn an toàn và chống ô nhiễm.
- **Grammar & collocations:**
  - conduct a port state control inspection (tiến hành kiểm tra chính quyền cảng)
  - detain a ship during port state control inspection (lưu giữ tàu trong đợt kiểm tra chính quyền cảng)
  - pass port state control inspection (vượt qua kỳ kiểm tra chính quyền cảng)
- **Examples:**
  - The aging tanker was detained after failing a rigorous **port state control inspection** due to fire pump malfunctions. (Tàu chở dầu cũ kỹ đã bị lưu giữ sau khi không vượt qua đợt kiểm tra chính quyền cảng khắt khe do hỏng bơm cứu hỏa.)
  - Authorities tightened guidelines for each **port state control inspection** to eliminate substandard shipping from local waters. (Nhà chức trách đã siết chặt các hướng dẫn cho mỗi đợt kiểm tra chính quyền cảng nhằm loại bỏ tàu kém chất lượng khỏi vùng biển địa phương.)
- **Liên kết tiếng Hàn:** 항만국 통제 검사 (hangman-guk tongje geomsa)

## 20. marine salvage arbitration /məˈriːn ˈsælvɪdʒ ˌɑːrbɪˈtreɪʃn/
- **Part of speech:** Noun phrase
- **Core meaning (English):** A dispute resolution process through maritime arbitral tribunals to determine fair financial awards for salvage operations.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Trọng tài cứu hộ hàng hải - hội đồng chuyên môn giải quyết tranh chấp về mức thù lao cứu hộ công bằng sau khi cứu nạn tàu.
- **Grammar & collocations:**
  - refer a dispute to marine salvage arbitration (chuyển tranh chấp sang trọng tài cứu hộ hàng hải)
  - clause for marine salvage arbitration (điều khoản trọng tài cứu hộ hàng hải)
  - outcome of marine salvage arbitration (kết quả trọng tài cứu hộ hàng hải)
- **Examples:**
  - The professional salvors and cargo underwriters resolved the compensation dispute through **marine salvage arbitration** in London. (Những người cứu hộ chuyên nghiệp và các nhà bảo hiểm hàng hóa đã giải quyết tranh chấp bồi thường thông qua trọng tài cứu hộ hàng hải tại London.)
  - Standard Lloyd's Open Form contracts provide automatic recourse to **marine salvage arbitration**. (Các hợp đồng Mẫu mở chuẩn của Lloyd's cung cấp quyền truy đòi tự động tới trọng tài cứu hộ hàng hải.)
- **Liên kết tiếng Hàn:** 해난구조 중재 (haenan-gujo jungjae)

## 21. wreck removal obligation /rek rɪˈmuːvl ˌɑːblɪˈɡeɪʃn/
- **Part of speech:** Noun phrase
- **Core meaning (English):** The legal duty of a registered shipowner to raise, remove, or destroy a sunken or stranded vessel that poses a navigational or environmental hazard.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Nghĩa vụ di dời xác tàu đắm - trách nhiệm pháp lý bắt buộc của chủ tàu phải trục vớt hoặc phá dỡ xác tàu gây cản trở luồng hàng hải.
- **Grammar & collocations:**
  - enforce a wreck removal obligation (thực thi nghĩa vụ di dời xác tàu đắm)
  - comply with wreck removal obligation (tuân thủ nghĩa vụ di dời xác tàu đắm)
  - order for wreck removal obligation (lệnh thực hiện nghĩa vụ di dời xác tàu đắm)
- **Examples:**
  - Coastal authorities enforced a strict **wreck removal obligation** after the container vessel ran aground near the coral reef. (Chính quyền ven biển đã thực thi một nghĩa vụ di dời xác tàu đắm nghiêm ngặt sau khi tàu container mắc cạn gần rạn san hô.)
  - Insurers covered the multi-million-dollar operation required to satisfy the government's **wreck removal obligation**. (Các công ty bảo hiểm đã chi trả cho chiến dịch hàng triệu đô la cần thiết để đáp ứng nghĩa vụ di dời xác tàu đắm của chính phủ.)
- **Liên kết tiếng Hàn:** 침몰선 인양 의무 (chimmolseon in-yang uimu)

## 22. marine insurance underwriting /məˈriːn ɪnˈʃʊrəns ˈʌndərraɪtɪŋ/
- **Part of speech:** Noun phrase
- **Core meaning (English):** The process by which maritime insurers evaluate navigation risks, set policy terms, and price coverage for hulls, liabilities, and cargo.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Nghiệp vụ khai thác bảo hiểm hàng hải - quá trình đánh giá rủi ro hải trình, định phí bảo hiểm và xác định phạm vi bảo hiểm thân tàu và hàng hóa.
- **Grammar & collocations:**
  - specialize in marine insurance underwriting (chuyên về nghiệp vụ khai thác bảo hiểm hàng hải)
  - principles of marine insurance underwriting (các nguyên tắc khai thác bảo hiểm hàng hải)
  - prudent marine insurance underwriting (nghiệp vụ khai thác bảo hiểm hàng hải thận trọng)
- **Examples:**
  - Changing geopolitical conditions in shipping straits have substantially altered **marine insurance underwriting** practices. (Các điều kiện địa chính trị thay đổi tại các eo biển vận tải đã làm thay đổi đáng kể thực tiễn nghiệp vụ khai thác bảo hiểm hàng hải.)
  - Sound **marine insurance underwriting** requires in-depth understanding of vessel age, routing, and flag state safety records. (Nghiệp vụ khai thác bảo hiểm hàng hải đúng đắn đòi hỏi sự hiểu biết sâu sắc về tuổi tàu, tuyến đường và hồ sơ an toàn của quốc gia treo cờ.)
- **Liên kết tiếng Hàn:** 해상보험 인수심사 / 해상보험 언더라이팅 (haesang boheom eondeoraiting)

## 23. general average security /ˈdʒenərəl ˈævərɪdʒ sɪˈkjʊrəti/
- **Part of speech:** Noun phrase
- **Core meaning (English):** A cash deposit or insurer's guarantee required before cargo can be delivered following a general average sacrifice.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Biện pháp bảo đảm tổn thất chung - khoản tiền đặt cọc hoặc thư bảo lãnh của bảo hiểm bắt buộc phải nộp trước khi nhận hàng sau tổn thất chung.
- **Grammar & collocations:**
  - provide general average security (cung cấp bảo đảm tổn thất chung)
  - demand general average security (yêu cầu nộp bảo đảm tổn thất chung)
  - release goods upon general average security (giải phóng hàng sau khi có bảo đảm tổn thất chung)
- **Examples:**
  - Average adjusters instructed the carrier to retain cargo until consignees provided sufficient **general average security**. (Các chuyên viên phân bổ tổn thất đã hướng dẫn hãng tàu giữ lại hàng hóa cho đến khi người nhận hàng cung cấp đủ bảo đảm tổn thất chung.)
  - Depositing proper **general average security** ensures cargo owners avoid unnecessary port storage fees during adjustments. (Việc nộp bảo đảm tổn thất chung phù hợp giúp các chủ hàng tránh được phí lưu kho bãi cảng không cần thiết trong quá trình tính toán.)
- **Liên kết tiếng Hàn:** 공동해손 담보 (gongdong-haeson dambo)

## 24. ocean cargo transit insurance /ˈoʊʃn ˈkɑːrɡoʊ ˈtrænzɪt ɪnˈʃʊrəns/
- **Part of speech:** Noun phrase
- **Core meaning (English):** An insurance policy protecting shipped freight against loss or physical damage during transoceanic transit.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Bảo hiểm hàng hóa vận chuyển đường biển - hợp đồng bảo hiểm đền bù thiệt hại hoặc mất mát đối với hàng hóa trong suốt hải trình vượt đại dương.
- **Grammar & collocations:**
  - purchase ocean cargo transit insurance (mua bảo hiểm hàng hóa vận chuyển đường biển)
  - scope of ocean cargo transit insurance (phạm vi bảo hiểm hàng hóa vận chuyển đường biển)
  - claim under ocean cargo transit insurance (khiếu nại theo bảo hiểm hàng hóa vận chuyển đường biển)
- **Examples:**
  - International exporters always secure comprehensive **ocean cargo transit insurance** to protect valuable machinery from rough seas. (Các nhà xuất khẩu quốc tế luôn mua bảo hiểm hàng hóa vận chuyển đường biển toàn diện để bảo vệ máy móc giá trị cao trước biển động.)
  - The settlement covered wet damage to electronic shipments under the **ocean cargo transit insurance** policy. (Khoản bồi thường đã chi trả cho thiệt hại do ẩm ướt đối với lô hàng điện tử theo hợp đồng bảo hiểm hàng hóa vận chuyển đường biển.)
- **Liên kết tiếng Hàn:** 해상 화물 운송 보험 (haesang hwamul unsong boheom)

## 25. maritime arbitration award /ˈmærɪtaɪm ˌɑːrbɪˈtreɪʃn əˈwɔːrd/
- **Part of speech:** Noun phrase
- **Core meaning (English):** The final, legally binding judgment rendered by a specialized maritime arbitration tribunal resolving a commercial shipping dispute.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Phán quyết trọng tài hàng hải - phán quyết có tính ràng buộc pháp lý do hội đồng trọng tài hàng hải đưa ra để phân xử tranh chấp vận tải biển.
- **Grammar & collocations:**
  - enforce a maritime arbitration award (thực thi phán quyết trọng tài hàng hải)
  - appeal against a maritime arbitration award (kháng cáo phán quyết trọng tài hàng hải)
  - comply with a maritime arbitration award (tuân thủ phán quyết trọng tài hàng hải)
- **Examples:**
  - The victorious charterer successfully enforced the **maritime arbitration award** across multiple international jurisdictions. (Bên thuê tàu thắng kiện đã thực thi thành công phán quyết trọng tài hàng hải tại nhiều cơ quan tài phán quốc tế.)
  - Both parties agreed to accept the **maritime arbitration award** as final and definitive, avoiding protracted court battles. (Cả hai bên đã đồng ý chấp nhận phán quyết trọng tài hàng hải là cuối cùng và dứt khoát, tránh các cuộc chiến tòa án kéo dài.)
- **Liên kết tiếng Hàn:** 해사 중재 판정 (haesa jungjae panjeong)
"""

# Insert before ## Review in context
idx = text.find('## Review in context')
if idx != -1:
    new_text = text[:idx] + law_items_14_25 + '\n---\n' + text[idx:]
    # Also update review in law 11 to use ocean cargo transit insurance
    new_text = new_text.replace('**marine cargo insurance**', '**ocean cargo transit insurance**')
    with open(f_law, 'w', encoding='utf-8') as fp:
        fp.write(new_text)
    print('Completed b2/law/11 with items 14-25')

# Complete b2/economics/11
f_econ = 'english/lessons/vocabulary/cefr/b2/economics/11-demographic-transition-dependency-ratios-and-silver-economy.md'
with open(f_econ, 'r', encoding='utf-8') as fp:
    text = fp.read()

econ_items_14_25 = """## 14. workforce shrinkage /ˈwɜːrkfɔːrs ˈʃrɪŋkɪdʒ/
- **Part of speech:** Noun phrase
- **Core meaning (English):** The contraction in the absolute number of working-age individuals within an economy due to low birth rates and aging.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Sự thu hẹp lực lượng lao động - số lượng người trong độ tuổi lao động giảm dần do sinh đẻ ít và dân số già hóa.
- **Grammar & collocations:**
  - combat workforce shrinkage (chống lại sự thu hẹp lực lượng lao động)
  - pace of workforce shrinkage (tốc độ thu hẹp lực lượng lao động)
  - consequences of workforce shrinkage (hậu quả của sự thu hẹp lực lượng lao động)
- **Examples:**
  - Rapid **workforce shrinkage** has forced manufacturers to automate production lines and invest heavily in robotics. (Sự thu hẹp lực lượng lao động nhanh chóng đã buộc các nhà sản xuất phải tự động hóa dây chuyền và đầu tư mạnh vào robot.)
  - Economists warn that persistent **workforce shrinkage** could erode national tax bases over the next two decades. (Các nhà kinh tế cảnh báo rằng sự thu hẹp lực lượng lao động kéo dài có thể làm xói mòn nguồn thu thuế quốc gia trong hai thập kỷ tới.)
- **Liên kết tiếng Hàn:** 노동력 감소 (nodongnyeok gamso)

## 15. generational fiscal imbalance /ˌdʒenəˈreɪʃənl ˈfɪskl ɪmˈbæləns/
- **Part of speech:** Noun phrase
- **Core meaning (English):** A disparity in the distribution of tax burdens and public spending benefits between older and younger cohorts.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Mất cân đối tài khóa giữa các thế hệ - sự chênh lệch bất công khi thế hệ trẻ phải gánh thuế cao để chi trả phúc lợi cho thế hệ đi trước.
- **Grammar & collocations:**
  - reduce generational fiscal imbalance (giảm mất cân đối tài khóa thế hệ)
  - widen generational fiscal imbalance (làm gia tăng mất cân đối tài khóa thế hệ)
  - address generational fiscal imbalance (giải quyết mất cân đối tài khóa thế hệ)
- **Examples:**
  - Ballooning entitlement spending without tax reform worsens the **generational fiscal imbalance** facing future taxpayers. (Chi tiêu phúc lợi phình to mà không cải cách thuế làm trầm trọng thêm sự mất cân đối tài khóa giữa các thế hệ mà người nộp thuế tương lai phải đối mặt.)
  - Independent auditors publish generational accounting reports to highlight growing **generational fiscal imbalance** risks. (Các kiểm toán viên độc lập công bố các báo cáo kế toán thế hệ để nhấn mạnh nguy cơ mất cân đối tài khóa giữa các thế hệ đang gia tăng.)
- **Liên kết tiếng Hàn:** 세대 간 재정 불균형 (sedae gan jaejeong bulgyunhyeong)

## 16. median age progression /ˈmiːdiən eɪdʒ prəˈɡreʃn/
- **Part of speech:** Noun phrase
- **Core meaning (English):** The statistical shift upward of the exact age that divides a population into two numerically equal halves.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Sự gia tăng độ tuổi trung vị - chỉ số độ tuổi chia đều dân số tăng dần theo thời gian, phản ánh dân số ngày càng già đi.
- **Grammar & collocations:**
  - observe median age progression (quan sát sự gia tăng độ tuổi trung vị)
  - rapid median age progression (sự gia tăng độ tuổi trung vị nhanh chóng)
  - trajectory of median age progression (quỹ đạo gia tăng độ tuổi trung vị)
- **Examples:**
  - With a rapid **median age progression** surpassing forty-five years, the country faces critical labor shortages across social care. (Với sự gia tăng độ tuổi trung vị nhanh chóng vượt qua 45 tuổi, đất nước phải đối mặt với tình trạng thiếu hụt lao động nghiêm trọng trong ngành chăm sóc xã hội.)
  - Demographic models map the **median age progression** to anticipate long-term structural shifts in consumer spending. (Các mô hình nhân khẩu học lập bản đồ sự gia tăng độ tuổi trung vị để dự đoán những chuyển dịch cơ cấu dài hạn trong chi tiêu tiêu dùng.)
- **Liên kết tiếng Hàn:** 중위연령 상승 (jungwi-yeonlyeong sangseung)

## 17. dependency burden index /dɪˈpendənsi ˈbɜːrdn ˈɪndeks/
- **Part of speech:** Noun phrase
- **Core meaning (English):** A quantitative composite metric measuring the economic load borne by workers supporting youth and elder populations.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Chỉ số gánh nặng phụ thuộc - thước đo tổng hợp đo lường mức độ áp lực kinh tế mà người đi làm phải gánh để nuôi người già và trẻ em.
- **Grammar & collocations:**
  - calculate the dependency burden index (tính toán chỉ số gánh nặng phụ thuộc)
  - rise in the dependency burden index (sự gia tăng chỉ số gánh nặng phụ thuộc)
  - monitor the dependency burden index (theo dõi chỉ số gánh nặng phụ thuộc)
- **Examples:**
  - Policy analysts use the **dependency burden index** to forecast the fiscal solvency of universal pension systems. (Các nhà phân tích chính sách sử dụng chỉ số gánh nặng phụ thuộc để dự báo khả năng thanh toán tài chính của các hệ thống lương hưu toàn dân.)
  - A sharply increasing **dependency burden index** highlights the urgent need to expand productivity-enhancing capital investments. (Chỉ số gánh nặng phụ thuộc tăng mạnh nhấn mạnh nhu cầu cấp thiết phải mở rộng các khoản đầu tư vốn nâng cao năng suất.)
- **Liên kết tiếng Hàn:** 부양 부담 지수 (buyang budam jisu)

## 18. human capital productivity /ˈhjuːmən ˈkæpɪtl ˌproʊdʌkˈtɪvəti/
- **Part of speech:** Noun phrase
- **Core meaning (English):** The economic efficiency and output generated per unit of knowledge, skill, and health embodied in the workforce.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Năng suất vốn con người - hiệu quả kinh tế và giá trị tạo ra từ kiến thức, kỹ năng và sức khỏe tích lũy trong lực lượng lao động.
- **Grammar & collocations:**
  - enhance human capital productivity (nâng cao năng suất vốn con người)
  - investments in human capital productivity (đầu tư vào năng suất vốn con người)
  - sustain human capital productivity (duy trì năng suất vốn con người)
- **Examples:**
  - High **human capital productivity** allows advanced economies to maintain robust output despite declining overall headcounts. (Năng suất vốn con người cao cho phép các nền kinh tế phát triển duy trì sản lượng mạnh mẽ dù tổng số lượng lao động suy giảm.)
  - Continuous workplace retraining is crucial to sustaining high **human capital productivity** throughout extended careers. (Tái đào tạo liên tục tại nơi làm việc là điều cốt yếu để duy trì năng suất vốn con người cao trong suốt sự nghiệp kéo dài.)
- **Liên kết tiếng Hàn:** 인적 자본 생산성 (injeok jabon saengsanseong)

## 19. senior workforce integration /ˈsiːniər ˈwɜːrkfɔːrs ˌɪntɪˈɡreɪʃn/
- **Part of speech:** Noun phrase
- **Core meaning (English):** The formal policies and workplace practices facilitating continued employment and flexible roles for older employees.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Hòa nhập lực lượng lao động cao tuổi - các chính sách và điều kiện làm việc linh hoạt giúp nhân viên lớn tuổi tiếp tục cống hiến.
- **Grammar & collocations:**
  - promote senior workforce integration (thúc đẩy hòa nhập lực lượng lao động cao tuổi)
  - strategies for senior workforce integration (chiến lược hòa nhập lực lượng lao động cao tuổi)
  - successful senior workforce integration (sự hòa nhập lực lượng lao động cao tuổi thành công)
- **Examples:**
  - Progressive companies champion **senior workforce integration** by offering phased retirement and advisory mentorship contracts. (Các công ty tiến bộ dẫn đầu việc hòa nhập lực lượng lao động cao tuổi bằng cách cung cấp lộ trình nghỉ hưu từng giai đoạn và hợp đồng cố vấn.)
  - Government tax subsidies encourage small businesses toward proactive **senior workforce integration**. (Trợ cấp thuế của chính phủ khuyến khích các doanh nghiệp nhỏ chủ động hòa nhập lực lượng lao động cao tuổi.)
- **Liên kết tiếng Hàn:** 고령 인력 통합 (goryeong inryeok tonghap)

## 20. long-term care insurance /ˌlɔːŋ tɜːrm ker ɪnˈʃʊrəns/
- **Part of speech:** Noun phrase
- **Core meaning (English):** An insurance mechanism designed to defray the chronic medical, nursing, and personal care costs associated with prolonged aging.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Bảo hiểm chăm sóc dài hạn - quỹ bảo hiểm chi trả cho dịch vụ điều dưỡng, chăm sóc y tế mạn tính cho người già trong thời gian dài.
- **Grammar & collocations:**
  - enroll in long-term care insurance (tham gia bảo hiểm chăm sóc dài hạn)
  - premiums for long-term care insurance (phí bảo hiểm chăm sóc dài hạn)
  - coverage under long-term care insurance (phạm vi bảo hiểm chăm sóc dài hạn)
- **Examples:**
  - Many countries introduced mandatory public **long-term care insurance** to prevent families from facing catastrophic medical expenses. (Nhiều quốc gia đã đưa vào áp dụng bảo hiểm chăm sóc dài hạn công bắt buộc để ngăn các gia đình phải đối mặt với chi phí y tế thảm khốc.)
  - Financial advisors strongly recommend securing **long-term care insurance** prior to entering full retirement. (Các cố vấn tài chính khuyến nghị mạnh mẽ việc tham gia bảo hiểm chăm sóc dài hạn trước khi bước vào nghỉ hưu hoàn toàn.)
- **Liên kết tiếng Hàn:** 장기 요양 보험 (janggi yoyang boheom)

## 21. aging-induced deflation /ˈeɪdʒɪŋ ɪnˈduːst dɪˈfleɪʃn/
- **Part of speech:** Noun phrase
- **Core meaning (English):** A sustained downward pressure on prices and consumption caused by an older populace curbing overall expenditure.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Giảm phát do già hóa dân số - áp lực giảm giá và suy giảm tiêu dùng bắt nguồn từ việc người lớn tuổi chi tiêu ít hơn người trẻ.
- **Grammar & collocations:**
  - risk of aging-induced deflation (nguy cơ giảm phát do già hóa)
  - counter aging-induced deflation (chống lại giảm phát do già hóa)
  - dynamics of aging-induced deflation (động lực của giảm phát do già hóa)
- **Examples:**
  - Central bankers revised inflation targets downward after acknowledging the persistent drag of **aging-induced deflation**. (Các thống đốc ngân hàng trung ương đã điều chỉnh giảm mục tiêu lạm phát sau khi thừa nhận lực cản dai dẳng của giảm phát do già hóa.)
  - Sluggish domestic retail sales reflect the growing structural impact of **aging-induced deflation** across rural prefectures. (Doanh số bán lẻ trong nước trì trệ phản ánh tác động cơ cấu ngày càng tăng của giảm phát do già hóa ở các vùng nông thôn.)
- **Liên kết tiếng Hàn:** 고령화 유발 디플레이션 (goryeonghwa yubal dipulleisyeon)

## 22. silver tech innovation /ˈsɪlvər tek ˌɪnəˈveɪʃn/
- **Part of speech:** Noun phrase
- **Core meaning (English):** Technological products and digital platforms specifically engineered to improve autonomy, healthcare, and safety for the elderly.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Đổi mới công nghệ phục vụ người cao tuổi - các thiết bị số, robot và phần mềm hỗ trợ người già sống độc lập và an toàn.
- **Grammar & collocations:**
  - invest in silver tech innovation (đầu tư vào đổi mới công nghệ cho người cao tuổi)
  - market for silver tech innovation (thị trường đổi mới công nghệ cho người cao tuổi)
  - accelerate silver tech innovation (đẩy nhanh đổi mới công nghệ cho người cao tuổi)
- **Examples:**
  - Startups are driving rapid **silver tech innovation**, deploying wearable fall detectors and smart medication dispensers. (Các công ty khởi nghiệp đang thúc đẩy mạnh mẽ đổi mới công nghệ cho người cao tuổi, triển khai thiết bị đeo phát hiện té ngã và máy cấp phát thuốc thông minh.)
  - Venture funds see immense growth potential in funding **silver tech innovation** tailored to aging demographics. (Các quỹ mạo hiểm nhìn thấy tiềm năng tăng trưởng to lớn khi tài trợ cho đổi mới công nghệ cho người cao tuổi phù hợp với cơ cấu dân số già.)
- **Liên kết tiếng Hàn:** 실버 테크 혁신 (silver tech hyeoksin)

## 23. age-friendly urban design /eɪdʒ ˈfrendli ˈɜːrbən dɪˈzaɪn/
- **Part of speech:** Noun phrase
- **Core meaning (English):** City planning and architectural principles prioritizing barrier-free mobility, public benches, accessible transit, and inclusive social infrastructure for older residents.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Thiết kế đô thị thân thiện với người cao tuổi - quy hoạch không rào cản, lối đi bộ êm thuận, xe buýt sàn thấp giúp người già dễ dàng di chuyển.
- **Grammar & collocations:**
  - adopt age-friendly urban design (áp dụng thiết kế đô thị thân thiện với người cao tuổi)
  - principles of age-friendly urban design (các nguyên tắc thiết kế đô thị thân thiện với người cao tuổi)
  - promote age-friendly urban design (thúc đẩy thiết kế đô thị thân thiện với người cao tuổi)
- **Examples:**
  - Widened sidewalks, low-floor transit buses, and frequent resting benches reflect the city's commitment to **age-friendly urban design**. (Vỉa hè mở rộng, xe buýt sàn thấp và nhiều băng ghế nghỉ ngơi phản ánh cam kết của thành phố đối với thiết kế đô thị thân thiện với người cao tuổi.)
  - Implementing **age-friendly urban design** ensures seniors can safely navigate commercial districts without relying on private automobiles. (Việc thực hiện thiết kế đô thị thân thiện với người cao tuổi đảm bảo người cao tuổi có thể đi lại an toàn trong các khu thương mại mà không cần phụ thuộc vào ô tô cá nhân.)
- **Liên kết tiếng Hàn:** 고령 친화적 도시 디자인 (goryeong chinhwajeok dosi dijain)

## 24. demographic stagnation /ˌdeməˈɡræfɪk stæɡˈneɪʃn/
- **Part of speech:** Noun phrase
- **Core meaning (English):** A prolonged period characterized by near-zero population growth, plateauing fertility, and economic inertia.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Sự đình trệ nhân khẩu học - giai đoạn dài dân số không tăng trưởng, mức sinh đi ngang hoặc giảm, gây suy giảm động lực phát triển kinh tế.
- **Grammar & collocations:**
  - slip into demographic stagnation (rơi vào tình trạng đình trệ nhân khẩu học)
  - escape demographic stagnation (thoát khỏi sự đình trệ nhân khẩu học)
  - chronic demographic stagnation (sự đình trệ nhân khẩu học mạn tính)
- **Examples:**
  - Decades of below-replacement birth rates have locked the region into chronic **demographic stagnation**. (Nhiều thập kỷ tỷ lệ sinh dưới mức thay thế đã khiến khu vực này rơi vào tình trạng đình trệ nhân khẩu học mạn tính.)
  - Overcoming **demographic stagnation** requires comprehensive family subsidies, affordable childcare, and inclusive immigration pathways. (Vượt qua sự đình trệ nhân khẩu học đòi hỏi trợ cấp gia đình toàn diện, dịch vụ chăm sóc trẻ em giá cả phải chăng và các lộ trình nhập cư hòa nhập.)
- **Liên kết tiếng Hàn:** 인구 정체 (ingu jeongche)

## 25. generational economic balance /ˌdʒenəˈreɪʃənl ˌiːkəˈnɑːmɪk ˈbæləns/
- **Part of speech:** Noun phrase
- **Core meaning (English):** An equitable equilibrium where public investments and welfare systems fairly serve all age cohorts without overburdening any specific generation.
- **Nghĩa cốt lõi & hình ảnh ghi nhớ:** Cân bằng kinh tế giữa các thế hệ - trạng thái công bằng khi phúc lợi và gánh nặng tài chính được phân bổ hài hòa giữa người trẻ, người đi làm và người nghỉ hưu.
- **Grammar & collocations:**
  - maintain generational economic balance (duy trì cân bằng kinh tế giữa các thế hệ)
  - achieve generational economic balance (đạt được cân bằng kinh tế giữa các thế hệ)
  - restore generational economic balance (khôi phục cân bằng kinh tế giữa các thế hệ)
- **Examples:**
  - Long-term statutory reforms are designed to preserve **generational economic balance** as longevity extends well past eighty. (Các cải cách theo luật định dài hạn được thiết kế để giữ gìn cân bằng kinh tế giữa các thế hệ khi tuổi thọ kéo dài trên 80.)
  - Transparent fiscal governance fosters social harmony by defending **generational economic balance** against partisan short-termism. (Quản trị tài khóa minh bạch thúc đẩy sự hòa hợp xã hội bằng cách bảo vệ sự cân bằng kinh tế giữa các thế hệ trước tư duy ngắn hạn mang tính bè phái.)
- **Liên kết tiếng Hàn:** 세대 간 경제적 균형 (sedae gan gyeongjejeok gyunhyeong)
"""

idx = text.find('## Review in context')
if idx != -1:
    new_text = text[:idx] + econ_items_14_25 + '\n---\n' + text[idx:]
    with open(f_econ, 'w', encoding='utf-8') as fp:
        fp.write(new_text)
    print('Completed b2/economics/11 with items 14-25')
