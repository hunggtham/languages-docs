# C1 Vocabulary 01 — Threats, defense, and testing

Nhóm từ này mô tả cách tổ chức lập mô hình đe dọa, giảm bề mặt tấn công và kiểm tra khả năng phòng thủ của hệ thống số.

## 1. threat modeling /ˈθret ˌmɑdəlɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — quá trình xác định tài sản, kẻ tấn công, đường tấn công và biện pháp giảm rủi ro.

**Core meaning — English:** The process of identifying assets, attackers, attack paths, and ways to reduce risk.

**Core meaning & mental image — Tiếng Việt:** Vẽ bản đồ căn nhà số để biết kẻ xấu có thể vào từ cửa nào và cần khóa nào.

**Grammar & collocations:** `threat-modeling exercise`, `threat-modeling framework`, `perform threat modeling`.

**Register & nuance:** Threat modeling nên diễn ra từ thiết kế và được cập nhật khi kiến trúc hoặc mục tiêu tấn công thay đổi.

**Example:** `Threat modeling exposed a privilege boundary in the new service.` → Lập mô hình đe dọa phơi bày một ranh giới quyền trong dịch vụ mới.

**Liên kết tiếng Hàn:** `위협 모델링` — lập mô hình đe dọa.

## 2. attack surface /əˈtæk ˈsɜrfəs/

**Loại từ & vị trí trong câu:** `countable noun phrase` — toàn bộ điểm tiếp xúc mà kẻ tấn công có thể dùng để vào hoặc gây ảnh hưởng lên hệ thống.

**Core meaning — English:** All the points through which an attacker might enter or affect a system.

**Core meaning & mental image — Tiếng Việt:** Mặt ngoài của pháo đài gồm cổng, cửa sổ, đường ống và mọi kết nối có thể bị chạm tới.

**Grammar & collocations:** `reduce the attack surface`, `expanded attack surface`, `attack-surface analysis`.

**Register & nuance:** Attack surface thay đổi theo tài khoản, API, thiết bị, nhà cung cấp và cấu hình, không chỉ giao diện web.

**Example:** `Remote access expanded the company’s attack surface.` → Truy cập từ xa mở rộng bề mặt tấn công của công ty.

**Liên kết tiếng Hàn:** `공격 표면` — bề mặt tấn công.

## 3. zero trust /ˈzɪroʊ trʌst/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — mô hình không mặc định tin bất kỳ người dùng, thiết bị hoặc mạng nào và luôn kiểm tra quyền truy cập.

**Core meaning — English:** A security model that trusts no user, device, or network by default and continuously verifies access.

**Core meaning & mental image — Tiếng Việt:** Mỗi lần qua cửa đều phải chứng minh danh tính và quyền, kể cả khi đang ở “bên trong”.

**Grammar & collocations:** `zero-trust architecture`, `zero-trust policy`, `adopt zero trust`.

**Register & nuance:** Zero trust là nguyên tắc thiết kế, không phải một sản phẩm duy nhất; triển khai cần danh tính, phân đoạn và giám sát.

**Example:** `Zero trust limited access between internal services.` → Zero trust giới hạn truy cập giữa các dịch vụ nội bộ.

**Liên kết tiếng Hàn:** `제로 트러스트` — zero trust.

## 4. privilege escalation /ˈprɪvəlɪdʒ ˌeskəˈleɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — việc kẻ tấn công nâng quyền từ mức thấp lên quyền truy cập cao hơn.

**Core meaning — English:** The act of gaining higher access privileges than an attacker originally had.

**Core meaning & mental image — Tiếng Việt:** Người chỉ có chìa khóa phòng khách tìm cách lấy chìa khóa kho tiền.

**Grammar & collocations:** `prevent privilege escalation`, `local privilege escalation`, `escalation vulnerability`.

**Register & nuance:** Escalation có thể ngang sang tài khoản tương đương hoặc dọc lên quyền quản trị cao hơn.

**Example:** `The patch fixed a privilege escalation flaw in the driver.` → Bản vá sửa lỗi nâng quyền trong trình điều khiển.

**Liên kết tiếng Hàn:** `권한 상승` — nâng quyền.

## 5. lateral movement /ˈlætərəl ˈmuːvmənt/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — việc kẻ tấn công di chuyển từ một hệ thống hoặc tài khoản bị xâm nhập sang các hệ thống khác.

**Core meaning — English:** An attacker’s movement from one compromised system or account to others within an environment.

**Core meaning & mental image — Tiếng Việt:** Sau khi vào một phòng, kẻ xấu đi ngang qua hành lang để mở thêm các phòng khác.

**Grammar & collocations:** `detect lateral movement`, `lateral-movement technique`, `limit movement`.

**Register & nuance:** Phân đoạn mạng, quyền tối thiểu và giám sát danh tính làm lateral movement khó hơn.

**Example:** `The logs revealed lateral movement across the finance network.` → Nhật ký cho thấy di chuyển ngang qua mạng tài chính.

**Liên kết tiếng Hàn:** `측면 이동` — di chuyển ngang trong mạng.

## 6. intrusion detection /ɪnˈtruːʒən dɪˈtekʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — quá trình phát hiện dấu hiệu truy cập hoặc hoạt động trái phép trong hệ thống.

**Core meaning — English:** The process of detecting signs of unauthorized access or activity in a system.

**Core meaning & mental image — Tiếng Việt:** Chuông báo động nghe thấy mẫu chuyển động không khớp với người dùng bình thường.

**Grammar & collocations:** `intrusion-detection system`, `intrusion-detection alert`, `improve detection`.

**Register & nuance:** Detection chỉ phát hiện tín hiệu; tổ chức vẫn cần phân loại, điều tra và phản ứng phù hợp.

**Example:** `Intrusion detection flagged an unusual login sequence.` → Phát hiện xâm nhập đánh dấu chuỗi đăng nhập bất thường.

**Liên kết tiếng Hàn:** `침입 탐지` — phát hiện xâm nhập.

## 7. vulnerability disclosure /ˌvʌlnərəˈbɪləti dɪˈskloʊʒər/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — việc báo cáo và công bố lỗ hổng theo quy trình để nhà cung cấp có cơ hội sửa.

**Core meaning — English:** The reporting and publication of a vulnerability through a process that gives the provider time to fix it.

**Core meaning & mental image — Tiếng Việt:** Người tìm lỗi gõ cửa nhà cung cấp trước khi đăng bản đồ lối vào cho mọi người.

**Grammar & collocations:** `coordinated vulnerability disclosure`, `vulnerability-disclosure policy`, `report a vulnerability`.

**Register & nuance:** Disclosure có trách nhiệm cân bằng lợi ích cảnh báo công chúng với thời gian vá và nguy cơ bị khai thác.

**Example:** `The researcher followed the vendor’s vulnerability disclosure policy.` → Nhà nghiên cứu tuân theo chính sách công bố lỗ hổng của nhà cung cấp.

**Liên kết tiếng Hàn:** `취약점 공개` — công bố lỗ hổng.

## 8. patch management /pætʃ ˈmænɪdʒmənt/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — quy trình theo dõi, kiểm thử và triển khai bản cập nhật bảo mật cho hệ thống.

**Core meaning — English:** The process of tracking, testing, and deploying security updates across systems.

**Core meaning & mental image — Tiếng Việt:** Một lịch bảo dưỡng giúp mọi cánh cửa được thay khóa trước khi chìa cũ bị lợi dụng.

**Grammar & collocations:** `automated patch management`, `patch-management policy`, `patch deployment`.

**Register & nuance:** Patch management cần ưu tiên theo mức nguy hiểm, khả năng khai thác và độ quan trọng của tài sản.

**Example:** `Weak patch management left internet-facing servers exposed.` → Quản lý bản vá yếu khiến máy chủ hướng internet bị phơi nhiễm.

**Liên kết tiếng Hàn:** `패치 관리` — quản lý bản vá.

## 9. security control /sɪˈkjʊrəti kənˈtroʊl/

**Loại từ & vị trí trong câu:** `countable noun phrase` — biện pháp kỹ thuật, tổ chức hoặc vật lý được thiết kế để giảm rủi ro an ninh.

**Core meaning — English:** A technical, organizational, or physical measure designed to reduce security risk.

**Core meaning & mental image — Tiếng Việt:** Một lớp khóa, quy trình hoặc camera làm giảm khả năng xảy ra hay tác động của sự cố.

**Grammar & collocations:** `implement a security control`, `preventive security control`, `control effectiveness`.

**Register & nuance:** Control cần gắn với rủi ro cụ thể và được kiểm tra hiệu quả, không chỉ có trên danh sách tuân thủ.

**Example:** `Multi-factor authentication was the strongest security control in the review.` → Xác thực đa yếu tố là biện pháp kiểm soát mạnh nhất trong đánh giá.

**Liên kết tiếng Hàn:** `보안 통제` — kiểm soát an ninh.

## 10. threat intelligence /ˈθret ɪnˈtelədʒəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — thông tin được thu thập và phân tích về kẻ tấn công, chiến thuật, công cụ và mục tiêu.

**Core meaning — English:** Information collected and analyzed about attackers, tactics, tools, and targets.

**Core meaning & mental image — Tiếng Việt:** Tin tình báo biến dấu vết rời rạc thành bức tranh về ai đang nhắm vào mình và bằng cách nào.

**Grammar & collocations:** `threat-intelligence feed`, `threat-intelligence platform`, `share intelligence`.

**Register & nuance:** Intelligence có giá trị khi liên quan đến quyết định phòng thủ, không chỉ là danh sách chỉ dấu.

**Example:** `Threat intelligence helped prioritize the exposed servers.` → Tình báo mối đe dọa giúp ưu tiên các máy chủ bị phơi nhiễm.

**Liên kết tiếng Hàn:** `위협 인텔리전스` — tình báo mối đe dọa.

## 11. supply-chain attack /səˈplaɪ tʃeɪn əˈtæk/

**Loại từ & vị trí trong câu:** `countable noun phrase` — cuộc tấn công xâm nhập phần mềm, dịch vụ hoặc nhà cung cấp để tiếp cận nhiều nạn nhân downstream.

**Core meaning — English:** An attack that compromises software, services, or suppliers in order to reach downstream victims.

**Core meaning & mental image — Tiếng Việt:** Kẻ xấu đầu độc một mắt xích đáng tin để sản phẩm mang độc đi vào nhiều hệ thống.

**Grammar & collocations:** `supply-chain attack vector`, `supply-chain attack risk`, `defend against attacks`.

**Register & nuance:** Attack khai thác quan hệ tin cậy và khó phát hiện vì mã hoặc dịch vụ đã được cho phép.

**Example:** `The breach began with a compromised software update in a supply-chain attack.` → Vụ xâm nhập bắt đầu bằng bản cập nhật phần mềm bị cài mã độc.

**Liên kết tiếng Hàn:** `공급망 공격` — tấn công chuỗi cung ứng.

## 12. ransomware /ˈræn.səmˌwer/

**Loại từ & vị trí trong câu:** `uncountable noun` — phần mềm độc mã hóa hoặc khóa dữ liệu rồi đòi tiền để khôi phục quyền truy cập.

**Core meaning — English:** Malicious software that encrypts or locks data and demands payment for restored access.

**Core meaning & mental image — Tiếng Việt:** Kẻ xấu khóa kho hồ sơ và để lại hóa đơn cho chiếc chìa khóa mở lại.

**Grammar & collocations:** `ransomware attack`, `ransomware group`, `recover from ransomware`.

**Register & nuance:** Trả tiền không bảo đảm dữ liệu được khôi phục hoặc kẻ tấn công không tái phạm.

**Example:** `The hospital isolated systems after a ransomware attack.` → Bệnh viện cô lập hệ thống sau một cuộc tấn công mã độc tống tiền.

**Liên kết tiếng Hàn:** `랜섬웨어` — mã độc tống tiền.

## 13. data exfiltration /ˈdeɪtə ˌeksfɪlˈtreɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — việc kẻ tấn công bí mật chuyển dữ liệu từ hệ thống bị xâm nhập ra ngoài.

**Core meaning — English:** The unauthorized transfer of data out of a compromised system.

**Core meaning & mental image — Tiếng Việt:** Hồ sơ bị mang qua một đường hầm nhỏ ra khỏi kho trước khi chuông báo động vang.

**Grammar & collocations:** `detect data exfiltration`, `exfiltration channel`, `prevent unauthorized transfer`.

**Register & nuance:** Exfiltration có thể diễn ra chậm, mã hóa hoặc ẩn trong lưu lượng bình thường để tránh bị phát hiện.

**Example:** `The logs suggested data exfiltration through a cloud account.` → Nhật ký gợi ý dữ liệu bị tuồn ra qua tài khoản đám mây.

**Liên kết tiếng Hàn:** `데이터 유출` — tuồn dữ liệu, trích xuất trái phép.

## 14. endpoint detection /ˈendˌpɔɪnt dɪˈtekʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — việc giám sát máy tính, điện thoại và thiết bị đầu cuối để phát hiện hành vi đáng ngờ.

**Core meaning — English:** Monitoring computers, phones, and other endpoints for suspicious behavior.

**Core meaning & mental image — Tiếng Việt:** Mỗi thiết bị ở rìa mạng có một người gác ghi lại tiến trình, kết nối và thay đổi bất thường.

**Grammar & collocations:** `endpoint-detection platform`, `endpoint-detection alert`, `endpoint telemetry`.

**Register & nuance:** Detection ở endpoint cung cấp tín hiệu chi tiết nhưng cần giảm cảnh báo giả và bảo vệ dữ liệu giám sát.

**Example:** `Endpoint detection identified an unsigned executable.` → Phát hiện đầu cuối xác định một tệp thực thi không có chữ ký.

**Liên kết tiếng Hàn:** `엔드포인트 탐지` — phát hiện đầu cuối.

## 15. penetration testing /ˌpenəˈtreɪʃən ˈtestɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — kiểm thử có ủy quyền mô phỏng tấn công để tìm và xác minh lỗ hổng.

**Core meaning — English:** Authorized testing that simulates attacks to find and verify vulnerabilities.

**Core meaning & mental image — Tiếng Việt:** Đội kiểm thử thử phá khóa theo luật để chủ nhà sửa cửa trước khi kẻ thật đến.

**Grammar & collocations:** `penetration-testing report`, `conduct penetration testing`, `authorized tester`.

**Register & nuance:** Pen testing có phạm vi và luật engagement rõ; nó khác quét tự động ở mức chủ động xác minh tác động.

**Example:** `Penetration testing found an exposed administrative interface.` → Kiểm thử xâm nhập tìm thấy giao diện quản trị bị phơi nhiễm.

**Liên kết tiếng Hàn:** `침투 테스트` — kiểm thử xâm nhập.

## Review in context

**Threat modeling** maps the **attack surface** before a **zero-trust** design limits access. Teams prevent **privilege escalation** and **lateral movement** with **intrusion detection**, timely **vulnerability disclosure**, **patch management**, and layered **security controls**. **Threat intelligence** helps identify a **supply-chain attack** or **ransomware**, while monitoring catches **data exfiltration** through **endpoint detection**. **Penetration testing** verifies whether the defenses work.

**Lập mô hình đe dọa** lập bản đồ **bề mặt tấn công** trước khi thiết kế **zero trust** giới hạn truy cập. Nhóm ngăn **nâng quyền** và **di chuyển ngang** bằng **phát hiện xâm nhập**, **công bố lỗ hổng** kịp thời, **quản lý bản vá** và các **biện pháp kiểm soát an ninh** nhiều lớp. **Tình báo mối đe dọa** giúp nhận diện **tấn công chuỗi cung ứng** hoặc **mã độc tống tiền**, còn giám sát phát hiện **tuồn dữ liệu** qua **phát hiện đầu cuối**. **Kiểm thử xâm nhập** xác minh các lớp phòng thủ có hoạt động không.
