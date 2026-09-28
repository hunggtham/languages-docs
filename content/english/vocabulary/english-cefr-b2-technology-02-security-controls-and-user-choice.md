# B2 Vocabulary — Security controls and user choice

## 1. encryption at rest /ɪnˈkrɪpʃən ət rɛst/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — thuật ngữ chỉ việc mã hóa dữ liệu khi dữ liệu đang được lưu trên thiết bị hoặc máy chủ.

**Core meaning — English:** The protection of stored data by converting it into a form that unauthorized people cannot easily read.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung dữ liệu đang “nằm yên” trong ổ đĩa nhưng vẫn được khóa bằng mã. Nếu ai lấy được tệp lưu trữ, họ không thể đọc trực tiếp nội dung.

**Grammar & collocations:** `use encryption at rest` — dùng mã hóa khi lưu trữ; `encryption-at-rest standard` — tiêu chuẩn mã hóa dữ liệu lưu.

**Register & nuance:** `At rest` khác `in transit`: in transit bảo vệ dữ liệu khi đang truyền qua mạng, còn at rest bảo vệ bản lưu.

**Linking:** `encryption in transit` — mã hóa khi truyền; `encrypted storage` — kho lưu trữ đã mã hóa; `access control` — kiểm soát ai được truy cập.

**Examples:** `The provider uses encryption at rest for customer records.` → Nhà cung cấp dùng mã hóa khi lưu trữ cho hồ sơ khách hàng.

**Liên kết tiếng Hàn:** `저장 데이터 암호화` — mã hóa dữ liệu khi lưu.

---

## 2. multi-factor authentication /ˌmʌlti ˈfæktər ɔˌθɛntəˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường viết tắt là `MFA` trong tài liệu công nghệ.

**Core meaning — English:** A login method that requires two or more independent types of proof of identity.

**Core meaning & mental image — Tiếng Việt:** Một cánh cửa có nhiều khóa: mật khẩu chỉ là một khóa, còn mã trên điện thoại, ứng dụng xác thực hoặc sinh trắc học là khóa khác.

**Grammar & collocations:** `enable multi-factor authentication` — bật MFA; `MFA requirement` — yêu cầu MFA; `authentication factor` — yếu tố xác thực.

**Register & nuance:** MFA rộng hơn `two-factor authentication`: two-factor luôn có đúng hai yếu tố, còn multi-factor có thể có hai hoặc nhiều hơn.

**Linking:** `password authentication` — xác thực bằng mật khẩu; `biometric authentication` — xác thực sinh trắc học; `one-time code` — mã dùng một lần.

**Examples:** `The bank requires multi-factor authentication for new devices.` → Ngân hàng yêu cầu xác thực đa yếu tố trên thiết bị mới.

**Liên kết tiếng Hàn:** `다중 인증`, `다중 요소 인증` — xác thực đa yếu tố.

---

## 3. credential vault /krəˈdɛnʃəl vɔlt/

**Loại từ & vị trí trong câu:** `countable noun` — kho được bảo vệ để lưu mật khẩu, khóa hoặc thông tin xác thực.

**Core meaning — English:** A protected store for passwords, keys, tokens, or other credentials used to access systems.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một két an toàn số chứa nhiều loại “chìa khóa” truy cập. Người dùng hoặc ứng dụng được cấp quyền lấy đúng credential cần thiết mà không phải để lộ tất cả.

**Grammar & collocations:** `store credentials in a vault` — lưu thông tin xác thực trong kho; `secure credential vault` — kho credential an toàn; `access a vault` — truy cập kho.

**Register & nuance:** `Credential vault` thường xuất hiện trong cloud, DevOps và enterprise security. Nó rộng hơn password manager vì có thể chứa API keys, certificates hoặc service tokens.

**Linking:** `password manager` — công cụ hướng đến mật khẩu người dùng; `secret store` — kho bí mật cho ứng dụng; `credential` — thông tin dùng để xác thực.

**Examples:** `The deployment system retrieves its API key from a credential vault.` → Hệ thống triển khai lấy khóa API từ một kho thông tin xác thực.

**Liên kết tiếng Hàn:** `자격 증명 보관소` — kho lưu thông tin xác thực.

---

## 4. patch management /ˈpætʃ ˌmænɪdʒmənt/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Quy trình theo dõi, đánh giá, thử nghiệm và cài đặt các bản vá cho hệ thống.

**Core meaning — English:** The organized process of identifying, testing, prioritizing, and applying software fixes.

**Core meaning & mental image — Tiếng Việt:** Không chỉ có một miếng vá; đây là cả lịch bảo dưỡng hàng rào: biết lỗ nào cần vá trước, thử miếng vá và ghi lại hệ thống nào đã được sửa.

**Grammar & collocations:** `follow patch management` — thực hiện quản lý bản vá; `patch-management process` — quy trình; `automate patch management` — tự động hóa.

**Register & nuance:** Patch management bao gồm nhiều loại fix, trong đó có security patch. Trì hoãn hoặc cài không đồng đều có thể để một số hệ thống ở trạng thái dễ bị tấn công.

**Linking:** `security patch` — bản vá bảo mật cụ thể; `software update` — cập nhật nói chung; `vulnerability fix` — việc sửa lỗ hổng.

**Examples:** `Good patch management reduces the time that known vulnerabilities remain open.` → Quản lý bản vá tốt làm giảm thời gian các lỗ hổng đã biết còn bị bỏ ngỏ.

**Liên kết tiếng Hàn:** `패치 관리` — quản lý bản vá.

---

## 5. default setting /dɪˈfɔlt ˈsɛtɪŋ/

**Loại từ & vị trí trong câu:** `countable noun`. Cài đặt được áp dụng nếu người dùng không thay đổi lựa chọn ban đầu.

**Core meaning — English:** A setting automatically used by a system until the user changes it.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung lựa chọn được đặt sẵn trong hộp trước khi bạn mở sản phẩm. Nếu không chú ý, bạn sẽ dùng đúng lựa chọn mặc định đó.

**Grammar & collocations:** `change the default setting` — đổi cài đặt mặc định; `default privacy setting` — cài đặt riêng tư mặc định.

**Register & nuance:** Default setting có ảnh hưởng lớn vì nhiều người không bao giờ xem lại settings. Một lựa chọn “có thể đổi” vẫn có thể gây bất ngờ nếu mặc định không rõ.

**Linking:** `preset` — thiết lập sẵn; `user preference` — lựa chọn của người dùng; `opt-in default` — mặc định đưa người dùng vào trạng thái tham gia.

**Examples:** `The default setting shares activity data with the service.` → Cài đặt mặc định chia sẻ dữ liệu hoạt động với dịch vụ.

**Liên kết tiếng Hàn:** `기본 설정` — cài đặt mặc định.

---

## 6. anonymize data /ˈænəˌmaɪz ˈdeɪtə/

**Loại từ & vị trí trong câu:** `verb phrase`. `anonymize + data/records`; noun là `anonymization`.

**Core meaning — English:** To remove or alter identifying details so that data cannot reasonably be linked to a particular person.

**Core meaning & mental image — Tiếng Việt:** Bạn làm mờ hoặc bỏ tên, email và dấu hiệu nhận dạng để tập dữ liệu không còn chỉ về từng cá nhân cụ thể.

**Grammar & collocations:** `anonymize data before analysis` — ẩn danh dữ liệu trước phân tích; `anonymized dataset` — bộ dữ liệu đã ẩn danh.

**Register & nuance:** Anonymization mạnh hơn chỉ xóa tên. Nếu các mảnh dữ liệu khác vẫn có thể ghép lại để nhận ra người, dữ liệu có thể chưa thực sự anonymous.

**Linking:** `de-identify` — loại thông tin nhận dạng, gần nghĩa trong data governance; `pseudonymize` — thay bằng mã giả nhưng vẫn có thể nối lại bằng khóa riêng.

**Examples:** `The researchers anonymized data before sharing the results.` → Các nhà nghiên cứu ẩn danh dữ liệu trước khi chia sẻ kết quả.

**Liên kết tiếng Hàn:** `데이터를 익명화하다` — ẩn danh dữ liệu.

---

## 7. data minimization /ˈdeɪtə ˌmɪnəməˈzeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Nguyên tắc chỉ thu và giữ lượng dữ liệu cần thiết cho mục đích rõ ràng.

**Core meaning — English:** The practice of collecting and keeping no more personal data than is necessary for a specific purpose.

**Core meaning & mental image — Tiếng Việt:** Thay vì gom mọi thứ “phòng khi cần”, hệ thống chỉ lấy đúng phần nguyên liệu cần cho món ăn đang nấu.

**Grammar & collocations:** `apply data minimization` — áp dụng tối thiểu hóa dữ liệu; `data-minimization principle` — nguyên tắc.

**Register & nuance:** Data minimization giảm rủi ro và chi phí quản lý, nhưng cần xác định mục đích đủ rõ để biết dữ liệu nào thực sự cần.

**Linking:** `purpose limitation` — giới hạn việc dùng dữ liệu theo mục đích; `data reduction` — giảm dữ liệu nói chung.

**Examples:** `Data minimization means the form should not ask for a person's date of birth without a reason.` → Tối thiểu hóa dữ liệu có nghĩa biểu mẫu không nên hỏi ngày sinh nếu không có lý do.

**Liên kết tiếng Hàn:** `데이터 최소화` — tối thiểu hóa dữ liệu.

---

## 8. access log /ˈækˌsɛs lɔɡ/

**Loại từ & vị trí trong câu:** `countable noun`. Bản ghi về các lần người dùng hoặc hệ thống truy cập resource.

**Core meaning — English:** A record showing who or what accessed a system, file, or resource and when.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung sổ khách ra vào: mỗi lần cửa dữ liệu mở đều để lại tên, thời điểm và hành động để có thể kiểm tra sau.

**Grammar & collocations:** `review an access log` — xem log truy cập; `access-log entry` — một mục log; `keep access logs` — lưu log.

**Register & nuance:** Access log không nhất thiết chứng minh truy cập là trái phép; nó cung cấp dấu vết để điều tra và phát hiện bất thường.

**Linking:** `audit trail` — lịch sử thay đổi rộng hơn; `activity log` — log hoạt động nói chung; `login record` — bản ghi đăng nhập.

**Examples:** `The security team found an unusual time in the access log.` → Nhóm bảo mật phát hiện một thời điểm bất thường trong log truy cập.

**Liên kết tiếng Hàn:** `접근 로그` — log truy cập.

---

## 9. control assessment /kənˈtroʊl əˈsɛsmənt/

**Loại từ & vị trí trong câu:** `countable noun`. Việc đánh giá xem một control cụ thể có phù hợp và hoạt động như mong đợi hay không.

**Core meaning — English:** An evaluation of whether a security or privacy control is designed appropriately and works effectively.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung kiểm tra từng lớp cửa: không chỉ hỏi “có khóa không?” mà còn hỏi khóa có đúng loại, có được dùng đúng và có chặn được rủi ro hay không.

**Grammar & collocations:** `conduct a control assessment` — đánh giá control; `control-assessment report` — báo cáo; `assess the effectiveness of a control` — đánh giá hiệu lực.

**Register & nuance:** Control assessment tập trung vào từng biện pháp bảo vệ; một security audit thường có scope rộng hơn và có thể xem cả governance, evidence và compliance.

**Linking:** `security audit` — cuộc audit rộng hơn; `control test` — phép thử một control; `risk assessment` — đánh giá rủi ro cần được kiểm soát.

**Examples:** `The control assessment found that access reviews were not performed regularly.` → Đánh giá control phát hiện việc rà soát quyền truy cập không được thực hiện đều đặn.

**Liên kết tiếng Hàn:** `통제 평가` — đánh giá biện pháp kiểm soát.

---

## 10. vulnerability disclosure /ˌvʌlnərəˈbɪləti dɪˈskloʊʒər/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Quy trình báo cho nhà cung cấp biết về lỗ hổng, thường theo cách có trách nhiệm.

**Core meaning — English:** The process of reporting information about a security weakness to the responsible organization.

**Core meaning & mental image — Tiếng Việt:** Người phát hiện lỗ hổng không công khai ngay mọi chi tiết; họ gửi thông tin cho bên chịu trách nhiệm để có thời gian sửa trước khi công bố.

**Grammar & collocations:** `responsible vulnerability disclosure` — công bố lỗ hổng có trách nhiệm; `vulnerability-disclosure policy` — chính sách báo lỗ hổng.

**Register & nuance:** Disclosure có thể là private report, coordinated disclosure hoặc public disclosure tùy quy trình và mức độ nguy hiểm.

**Linking:** `bug report` — báo lỗi rộng hơn; `security advisory` — thông báo bảo mật; `responsible disclosure` — cách gọi rút gọn.

**Examples:** `The researcher followed the company's vulnerability-disclosure policy.` → Nhà nghiên cứu tuân theo chính sách báo lỗ hổng của công ty.

**Liên kết tiếng Hàn:** `취약점 공개`, `취약점 신고` — công bố/báo cáo lỗ hổng.

---

## 11. phishing attempt /ˈfɪʃɪŋ əˌtɛmpt/

**Loại từ & vị trí trong câu:** `countable noun`. Một nỗ lực giả mạo để lừa người dùng cung cấp thông tin hoặc thực hiện hành động nguy hiểm.

**Core meaning — English:** An effort to trick someone into revealing information or clicking a harmful link by pretending to be trustworthy.

**Core meaning & mental image — Tiếng Việt:** Kẻ lừa đảo thả “mồi” giống email ngân hàng hoặc tin nhắn quen thuộc, chờ người dùng cắn câu bằng cách nhập mật khẩu hoặc mở link.

**Grammar & collocations:** `detect a phishing attempt` — phát hiện nỗ lực phishing; `report a phishing attempt` — báo cáo.

**Register & nuance:** Phishing nói về phương thức lừa qua social engineering; link nguy hiểm không nhất thiết luôn là phishing nếu không có yếu tố giả mạo/lừa người.

**Linking:** `scam message` — tin nhắn lừa đảo nói chung; `spoofed email` — email giả mạo người gửi; `social engineering` — thao túng con người để đạt mục tiêu an ninh.

**Examples:** `The employee reported a phishing attempt that looked like a payroll notice.` → Nhân viên báo cáo một nỗ lực phishing trông giống thông báo lương.

**Liên kết tiếng Hàn:** `피싱 시도` — nỗ lực lừa đảo phishing.

---

## 12. identity theft /aɪˈdɛntəti θɛft/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Việc sử dụng thông tin nhận dạng của người khác mà không được phép.

**Core meaning — English:** The crime of using another person's identifying information to commit fraud or gain a benefit.

**Core meaning & mental image — Tiếng Việt:** Kẻ xấu mặc “chiếc mặt nạ dữ liệu” của bạn để mở tài khoản, vay tiền hoặc thực hiện giao dịch như thể là bạn.

**Grammar & collocations:** `protect against identity theft` — bảo vệ khỏi đánh cắp danh tính; `identity-theft risk` — rủi ro.

**Register & nuance:** Identity theft tập trung vào việc mạo danh và sử dụng thông tin cá nhân; data breach có thể là nguyên nhân nhưng không phải mọi breach đều dẫn đến theft.

**Linking:** `fraud` — gian lận rộng hơn; `impersonation` — giả làm người khác; `account takeover` — chiếm quyền tài khoản cụ thể.

**Examples:** `Strong account controls can reduce the risk of identity theft.` → Kiểm soát tài khoản tốt có thể giảm rủi ro đánh cắp danh tính.

**Liên kết tiếng Hàn:** `신원 도용` — đánh cắp danh tính.

---

## 13. account takeover /əˈkaʊnt ˌtoʊkˌoʊvər/

**Loại từ & vị trí trong câu:** `countable noun`. Việc kẻ xấu giành quyền kiểm soát tài khoản của người dùng.

**Core meaning — English:** An incident in which an unauthorized person gains control of someone else's online account.

**Core meaning & mental image — Tiếng Việt:** Chủ tài khoản vẫn còn tên trên cửa, nhưng người khác đã đổi khóa, dùng tiền hoặc đọc dữ liệu bên trong.

**Grammar & collocations:** `prevent account takeover` — ngăn chiếm tài khoản; `account-takeover attempt` — nỗ lực chiếm tài khoản.

**Register & nuance:** Đây là một loại security incident cụ thể. Nó có thể xảy ra sau credential theft, phishing hoặc password reuse.

**Linking:** `unauthorized access` — truy cập trái phép rộng hơn; `identity theft` — mạo danh dùng thông tin nhận dạng; `account recovery` — khôi phục tài khoản.

**Examples:** `Multi-factor authentication makes account takeover more difficult.` → Xác thực đa yếu tố khiến việc chiếm tài khoản khó hơn.

**Liên kết tiếng Hàn:** `계정 탈취` — chiếm đoạt tài khoản.

---

## 14. secure deletion /sɪˈkjʊr dɪˈliːʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Việc xóa dữ liệu theo cách làm giảm khả năng khôi phục trái phép.

**Core meaning — English:** The process of removing data so that it cannot be easily recovered by unauthorized people or tools.

**Core meaning & mental image — Tiếng Việt:** Không chỉ vứt tờ giấy vào thùng rác; bạn xé nhỏ hoặc xử lý đến mức người khác không thể ghép lại nội dung.

**Grammar & collocations:** `perform secure deletion` — thực hiện xóa an toàn; `secure-deletion method` — phương pháp xóa an toàn.

**Register & nuance:** Xóa một file khỏi giao diện không luôn có nghĩa dữ liệu đã biến mất khỏi storage hoặc backup. Secure deletion phụ thuộc loại thiết bị và hệ thống.

**Linking:** `erase` — xóa nói chung; `data destruction` — hủy dữ liệu mạnh hơn; `retention` — việc tiếp tục giữ dữ liệu.

**Examples:** `The service promises secure deletion after the account is closed.` → Dịch vụ hứa xóa an toàn sau khi tài khoản bị đóng.

**Liên kết tiếng Hàn:** `안전한 삭제` — xóa an toàn.

---

## 15. dark pattern /ˈdɑrk ˌpætərn/

**Loại từ & vị trí trong câu:** `countable noun`. Một thiết kế giao diện khiến người dùng dễ làm điều có lợi cho dịch vụ hơn là điều họ thực sự muốn.

**Core meaning — English:** A user-interface design that manipulates people into making choices they might not otherwise make.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một hành lang có biển chỉ đường sáng rõ đến nút “đồng ý”, còn lối từ chối bị giấu hoặc viết mờ. Thiết kế đang dẫn dắt thay vì chỉ hỗ trợ.

**Grammar & collocations:** `use a dark pattern` — dùng thiết kế thao túng; `dark-pattern design` — thiết kế dark pattern; `identify dark patterns` — nhận diện.

**Register & nuance:** Dark pattern đánh giá tác động và sự thiếu cân bằng của interface, không chỉ nói rằng giao diện “khó dùng”.

**Linking:** `manipulative design` — thiết kế mang tính thao túng; `user-friendly design` — thiết kế dễ dùng; `deceptive interface` — giao diện gây hiểu lầm.

**Examples:** `The hidden unsubscribe link is a dark pattern.` → Liên kết hủy đăng ký bị giấu là một dark pattern.

**Liên kết tiếng Hàn:** `다크 패턴` — thiết kế giao diện thao túng.

## Review in context

The security team protected stored records with **encryption at rest**, required **multi-factor authentication**, and stored service keys in a **credential vault**. It followed **patch management**, but the **default setting** still needed review. The company agreed to **anonymize data** where possible and apply **data minimization**. It also checked the **access log**, scheduled a **control assessment**, and published a **vulnerability disclosure** policy. Staff learned to recognize a **phishing attempt**, while customers received advice about **identity theft** and **account takeover**. When accounts closed, the service promised **secure deletion** and redesigned a confusing screen after users identified a **dark pattern**.

**Bản dịch tiếng Việt:**

Nhóm bảo mật bảo vệ hồ sơ đang lưu bằng mã hóa, yêu cầu xác thực đa yếu tố và khuyến nghị dùng trình quản lý mật khẩu. Một bản cập nhật bảo mật được cài đặt thường xuyên, nhưng cài đặt mặc định vẫn cần được xem xét. Công ty đồng ý ẩn danh dữ liệu khi có thể và áp dụng nguyên tắc tối thiểu hóa dữ liệu. Họ cũng kiểm tra log truy cập, lên lịch kiểm toán bảo mật và công bố chính sách báo cáo lỗ hổng. Nhân viên học cách nhận ra một nỗ lực phishing, còn khách hàng nhận lời khuyên về đánh cắp danh tính và chiếm tài khoản. Khi tài khoản đóng, dịch vụ hứa xóa dữ liệu an toàn và thiết kế lại một màn hình khó hiểu sau khi người dùng nhận diện dark pattern.
