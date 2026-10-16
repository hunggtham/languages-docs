# B2 Vocabulary 06 — Cybersecurity, threat intelligence, and network defense

Trong kỷ nguyên chuyển đổi số và điện toán đám mây toàn diện, an ninh mạng không còn là trách nhiệm riêng của bộ phận kỹ thuật mà là yếu tố sống còn đối với sự liên tục kinh doanh của mọi doanh nghiệp. Để phân tích các cuộc tấn công mạng tinh vi, triển khai kiến trúc phòng thủ chủ động và thiết lập các quy trình ứng phó sự cố theo chuẩn mực quốc tế ở trình độ B2, người học cần làm chủ hệ thống thuật ngữ chuyên môn về tình báo mối đe dọa, phân tích lưu lượng mạng và cơ chế bảo mật zero-trust. Bài học này liên kết 25 khái niệm then chốt thành hai mạng lưới ngữ cảnh tương hỗ: **Threat Vectors & Cyber Attack Detection** (từ `cyber threat intelligence`, `malware payload execution`, `ransomware extortion scheme`, `distributed denial-of-service attack`, `zero-day vulnerability exploit`, `advanced persistent threat`, `intrusion detection sensor`, `security telemetry log correlation`, `network packet inspection`, `endpoint protection platform`, `brute-force credential stuffing`, `man-in-the-middle interception` đến `lateral network movement`) và **Incident Response & Defensive Security Architecture** (từ `zero-trust architecture`, `incident response playbook`, `threat hunting methodology`, `penetration testing assessment`, `security perimeter defense`, `multi-tenant data isolation`, `vulnerability remediation timeline`, `security breach containment`, `forensic digital investigation`, `air-gapped backup repository`, `disaster recovery failover plan` đến `identity and access management framework`).

---

## 1. cyber threat intelligence /ˈsaɪ.bɚ θret ɪnˈtel.ə.dʒəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `gather`, `analyze`, `disseminate`.

**Core meaning — English:** Evidence-based knowledge, indicators of compromise, and contextual mechanisms regarding emerging digital hazards used by organizations to make informed security decisions.

**Core meaning & mental image — Tiếng Việt:** Tình báo mối đe dọa không gian mạng. Đội ngũ chuyên gia an ninh mạng theo dõi các diễn đàn ngầm của tin tặc, thu thập danh sách các địa chỉ IP độc hại và các mẫu mã độc mới xuất hiện trên thế giới, từ đó cấu hình hệ thống tường lửa công ty chặn đứng các cuộc tấn công trước khi chúng kịp xảy ra.

**Grammar & collocations:** `actionable cyber threat intelligence` — tình báo mối đe dọa mạng có thể hành động ngay; `gather cyber threat intelligence` — thu thập tin tức tình báo đe dọa mạng; `cyber threat intelligence feed` — luồng cấp dữ liệu tình báo hiểm họa an ninh mạng.

**Register & nuance:** Thuật ngữ nòng cốt trong trung tâm điều hành an ninh mạng (SOC). Nhấn mạnh thông tin có thể áp dụng ngay vào phòng thủ (*actionable insights*), phân biệt với các báo cáo tin tức thông thường.

**Examples:** `Financial institutions subscribe to specialized feeds to acquire actionable cyber threat intelligence before new banking trojans strike.` → Các tổ chức tài chính đăng ký các luồng dữ liệu chuyên biệt để thu thập tin tức tình báo mối đe dọa mạng có thể hành động ngay trước khi các mã độc ngân hàng mới tấn công.

**Liên kết tiếng Hàn:** `사이버 위협 인텔리전스`, `사이버 보안 정보 분석` — tình báo mối đe dọa không gian mạng.

---

## 2. malware payload execution /ˈmæl.wer ˈpeɪ.loʊd ˌek.səˈkjuː.ʃən/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `prevent`, `detect`, `trigger`.

**Core meaning — English:** The operational phase in a cyberattack where malicious malicious code unpacks and delivers its destructive or intrusive action on a compromised host system.

**Core meaning & mental image — Tiếng Việt:** Sự thực thi tải trọng mã độc. Một nhân viên vô tình bấm vào tệp đính kèm trong email giả mạo; ngay lập tức phần mềm độc hại bung mã nén bên trong ra và bắt đầu hành vi phá hoại: thu thập mật khẩu lưu trong trình duyệt và mở cổng sau cho kẻ tấn công xâm nhập.

**Grammar & collocations:** `prevent malware payload execution` — ngăn chặn việc thực thi tải trọng mã độc; `monitor malware payload execution` — giám sát quá trình kích hoạt tải trọng độc hại; `risk of malware payload execution` — nguy cơ khởi chạy gói mã độc phá hoại.

**Register & nuance:** Giai đoạn quan trọng trong chuỗi tấn công mạng (*cyber kill chain*). Sau giai đoạn xâm nhập (*delivery*), việc tải trọng được thực thi đánh dấu máy tính đã bị kiểm soát hoàn toàn.

**Examples:** `Endpoint security software blocked the malware payload execution before the virus could corrupt system registry files.` → Phần mềm bảo mật thiết bị đầu cuối đã chặn đứng sự thực thi tải trọng mã độc trước khi virus có thể làm hỏng các tệp nhật ký hệ thống.

**Liên kết tiếng Hàn:** `악성코드 페이로드 실행` — sự thực thi tải trọng mã độc.

---

## 3. ransomware extortion scheme /ˈræn.səm.wer ɪkˈstɔːr.ʃən skiːm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `orchestrate`, `fall victim to`, `investigate`.

**Core meaning — English:** A cybercrime campaign in which attackers encrypt a target organization's mission-critical data and demand cryptocurrency payments in exchange for decryption keys or non-disclosure of stolen files.

**Core meaning & mental image — Tiếng Việt:** Kịch bản tống tiền bằng mã độc tống tiền (ransomware). Băng nhóm tội phạm mạng khóa mã hóa toàn bộ máy chủ cơ sở dữ liệu của một bệnh viện, hiển thị thông báo đòi nộp 50 Bitcoin trong vòng 48 giờ, nếu không toàn bộ hồ sơ bệnh án sẽ bị xóa vĩnh viễn và phát tán lên mạng.

**Grammar & collocations:** `fall victim to a ransomware extortion scheme` — trở thành nạn nhân của một kịch bản tống tiền bằng mã độc tống tiền; `uncover a ransomware extortion scheme` — vạch trần âm mưu tống tiền qua ransomware; `combating ransomware extortion schemes` — chống lại các thủ đoạn tống tiền mã độc.

**Register & nuance:** Thường được gọi là tống tiền kép (*double extortion*), khi tin tặc vừa đòi tiền chuộc khóa giải mã vừa đe dọa rò rỉ dữ liệu mật của khách hàng.

**Examples:** `Hospital networks fortified their offline backups after neighboring clinics were crippled by a sophisticated ransomware extortion scheme.` → Mạng lưới bệnh viện đã tăng cường các bản sao lưu ngoại tuyến sau khi các phòng khám lân cận bị tê liệt bởi một kịch bản tống tiền bằng mã độc tống tiền tinh vi.

**Liên kết tiếng Hàn:** `랜섬웨어 협박 계획`, `랜섬웨어 갈취 수법` — kịch bản tống tiền bằng mã độc tống tiền.

---

## 4. distributed denial-of-service attack /dɪˌstrɪb.juː.t̬ɪd dɪˈnaɪ.əl əv ˈsɝː.vɪs əˌtæk/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường viết tắt là DDoS attack). Thường làm chủ ngữ hoặc tân ngữ sau `launch`, `mitigate`, `endure`.

**Core meaning — English:** A coordinated malicious attempt to disrupt regular internet traffic of a targeted server, service, or network by overwhelming the target with a flood of traffic from thousands of compromised devices.

**Core meaning & mental image — Tiếng Việt:** Cuộc tấn công từ chối dịch vụ phân tán (DDoS). Hàng trăm nghìn máy tính và camera bị nhiễm mã độc đồng loạt gửi hàng triệu yêu cầu truy cập giả mạo tới một trang thương mại điện tử vào đúng ngày hội mua sắm, khiến máy chủ quá tải và sập nguồn, khách hàng không thể vào mua sắm được.

**Grammar & collocations:** `launch a distributed denial-of-service attack` — phát động một cuộc tấn công từ chối dịch vụ phân tán; `mitigate a distributed denial-of-service attack` — giảm thiểu thiệt hại từ cuộc tấn công từ chối dịch vụ phân tán; `succumb to a distributed denial-of-service attack` — bị khuất phục trước một cuộc tấn công DDoS.

**Register & nuance:** Tấn công vào tính sẵn sàng (*availability*) trong bộ ba nguyên tắc an toàn thông tin CIA (Confidentiality, Integrity, Availability).

**Examples:** `Online retail platforms deploy scrubbing centers to absorb massive traffic surges during a distributed denial-of-service attack.` → Các nền tảng bán lẻ trực tuyến triển khai các trung tâm lọc lưu lượng để hấp thụ các đợt tăng vọt lưu lượng khổng lồ trong một cuộc tấn công từ chối dịch vụ phân tán.

**Liên kết tiếng Hàn:** `디도스 공격`, `분산 서비스 거부 공격` — cuộc tấn công từ chối dịch vụ phân tán (DDoS).

---

## 5. zero-day vulnerability exploit /ˈzɪr.oʊ deɪ ˌvʌl.nɚ.əˈbɪl.ə.t̬i ˈek.splɔɪt/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `discover`, `patch`, `deploy`.

**Core meaning — English:** A software flaw unknown to the developer that is actively attacked by hackers before the software vendor has an opportunity to issue a security fix.

**Core meaning & mental image — Tiếng Việt:** Lỗ hổng khai thác ngày số không (zero-day exploit). Kẻ tấn công phát hiện ra một lỗi bảo mật nghiêm trọng trong hệ điều hành máy chủ mà ngay cả công ty sản xuất phần mềm cũng chưa hề biết tới; chúng bí mật khai thác lỗi này để xâm nhập vào các tập đoàn lớn trước khi nhà phát triển kịp tung ra bản vá.

**Grammar & collocations:** `patch a zero-day vulnerability exploit` — vá lỗ hổng khai thác ngày số không; `detect a zero-day vulnerability exploit` — phát hiện việc khai thác lỗ hổng zero-day; `defend against zero-day vulnerability exploits` — phòng thủ trước các đòn khai thác lỗ hổng bảo mật chưa có bản vá.

**Register & nuance:** Mối đe dọa nguy hiểm nhất trong an ninh mạng vì các phần mềm diệt virus thông thường dựa trên mẫu nhận diện (*signature-based*) hoàn toàn bất lực trước nó.

**Examples:** `Cyber analysts discovered that state-sponsored actors infiltrated government servers via a zero-day vulnerability exploit in browser firmware.` → Các nhà phân tích an ninh mạng phát hiện ra rằng các tác nhân do nhà nước tài trợ đã xâm nhập máy chủ chính phủ thông qua một lỗ hổng khai thác ngày số không trong phần mềm điều khiển trình duyệt.

**Liên kết tiếng Hàn:** `제로데이 취약점 공격`, `미공개 취약점 익스플로잇` — lỗ hổng khai thác ngày số không.

---

## 6. advanced persistent threat /ədˈvænst pɚˌsɪs.tənt ˈθret/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường viết tắt là APT). Thường làm chủ ngữ hoặc tân ngữ sau `track`, `attribute`, `counteract`.

**Core meaning — English:** A stealthy, prolonged, and highly targeted cyberattack in which an unauthorized intruder gains access to a network and remains undetected for an extended period to steal sensitive data.

**Core meaning & mental image — Tiếng Việt:** Mối đe dọa dai dẳng nâng cao (APT). Nhóm tin tặc gián điệp tinh vi bí mật cài phần mềm gián điệp vào mạng lưới quốc phòng, ẩn mình suốt 18 tháng mà không phá hoại lộ liễu, chỉ lặng lẽ sao chép các bản thiết kế tàu ngầm và tài liệu tình báo quân sự gửi về máy chủ nước ngoài.

**Grammar & collocations:** `track an advanced persistent threat` — theo dõi một mối đe dọa dai dẳng nâng cao; `counter an advanced persistent threat` — chống lại mối đe dọa tấn công dai dẳng; `characteristics of an advanced persistent threat` — đặc điểm của một mối đe dọa tấn công có chủ đích kéo dài.

**Register & nuance:** Thường do các cơ quan tình báo quốc gia hoặc các tổ chức tội phạm mạng sừng sỏ tài trợ, có nguồn lực dồi dào và mục tiêu chiến lược cụ thể.

**Examples:** `Cyber defense teams monitored lateral network traffic to uncover an advanced persistent threat that had lingered inside military databases for months.` → Các đội phòng thủ mạng đã giám sát lưu lượng mạng nội bộ để phát hiện một mối đe dọa dai dẳng nâng cao đã ẩn nấp bên trong các cơ sở dữ liệu quân sự trong nhiều tháng.

**Liên kết tiếng Hàn:** `지능형 지속 위협`, `APT 공격` — mối đe dọa dai dẳng nâng cao.

---

## 7. intrusion detection sensor /ɪnˈtruː.ʒən dɪˈtek.ʃən ˈsen.sɚ/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `install`, `trigger`, `configure`.

**Core meaning — English:** A dedicated hardware appliance or software agent placed at strategic network junctions to inspect traffic streams for anomalous signatures and unauthorized access attempts.

**Core meaning & mental image — Tiếng Việt:** Cảm biến phát hiện xâm nhập. Một thiết bị phân tích lưu lượng được đặt ngay cổng kết nối giữa mạng nội bộ công ty và Internet; ngay khi có tín hiệu quét cổng trái phép từ một máy tính lạ ở nước ngoài, chiếc cảm biến lập tức phát chuông cảnh báo đỏ cho quản trị viên mạng.

**Grammar & collocations:** `deploy an intrusion detection sensor` — triển khai cảm biến phát hiện xâm nhập; `trigger an intrusion detection sensor` — kích hoạt cảm biến cảnh báo xâm nhập; `calibrate intrusion detection sensors` — hiệu chỉnh các cảm biến phát hiện đột nhập mạng.

**Register & nuance:** Khác với hệ thống ngăn chặn xâm nhập (IPS - Intrusion Prevention System) có quyền tự động chặn gói tin, cảm biến IDS chủ yếu đóng vai trò quan sát, ghi nhận và phát cảnh báo (*monitoring and alerting*).

**Examples:** `Network engineers deployed an intrusion detection sensor at the gateway to flag suspicious outbound data transfers instantly.` → Các kỹ sư mạng đã triển khai một cảm biến phát hiện xâm nhập tại cổng kết nối để gắn cờ các hoạt động truyền dữ liệu đáng ngờ ra ngoài ngay lập tức.

**Liên kết tiếng Hàn:** `침입 탐지 센서` — cảm biến phát hiện xâm nhập mạng.

---

## 8. security telemetry log correlation /səˈkjʊr.ə.t̬i təˈlem.ə.tri lɑːɡ ˌkɔːr.əˈleɪ.ʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm tân ngữ sau `perform`, `automate`, `enhance`.

**Core meaning — English:** The automated algorithmic cross-referencing and contextual analysis of diverse system event records across servers, firewalls, and endpoints to identify coordinated cyber attacks.

**Core meaning & mental image — Tiếng Việt:** Sự đối chiếu tương quan nhật ký dữ liệu an ninh. Một sự cố đăng nhập thất bại ở máy tính lễ tân tưởng chừng bình thường, nhưng khi thuật toán đối chiếu cùng lúc với một lệnh thay đổi quyền quản trị ở máy chủ kế toán và một kết nối ra nước ngoài trên tường lửa, hệ thống nhận ra ngay đây là một cuộc tấn công phối hợp ba mũi nhọn.

**Grammar & collocations:** `perform security telemetry log correlation` — thực hiện đối chiếu tương quan nhật ký an ninh; `automated security telemetry log correlation` — đối chiếu tương quan dữ liệu viễn trắc an ninh tự động; `enhance security telemetry log correlation` — nâng cao khả năng liên kết dữ liệu nhật ký bảo mật.

**Register & nuance:** Trái tim vận hành của các nền tảng SIEM hiện đại. Giúp biến hàng triệu dòng nhật ký rời rạc thành bức tranh toàn cảnh về cuộc xâm nhập.

**Examples:** `Security analysts automate security telemetry log correlation to detect stealthy intrusions that isolated server alerts would overlook.` → Các nhà phân tích an ninh tự động hóa việc đối chiếu tương quan nhật ký dữ liệu an ninh để phát hiện các vụ xâm nhập lén lút mà các cảnh báo máy chủ đơn lẻ sẽ bỏ sót.

**Liên kết tiếng Hàn:** `보안 원격측정 로그 상관관계 분석` — phân tích đối chiếu tương quan dữ liệu nhật ký bảo mật.

---

## 9. network packet inspection /ˈnet.wɝːk ˈpæk.ɪt ɪnˈspek.ʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `conduct`, `implement`, `bypass`.

**Core meaning — English:** The technical process of capturing, disassembling, and evaluating the header and payload data within internet communications to detect hidden malware, spyware, or policy infractions.

**Core meaning & mental image — Tiếng Việt:** Sự kiểm tra gói tin mạng. Giống như nhân viên an ninh sân bay soi chiếu từng vali hành khách qua máy quét X-quang, phần mềm bảo mật mở từng gói dữ liệu đang truyền qua dây cáp mạng, kiểm tra từng dòng mã để tìm virus ẩn giấu trước khi cho phép dữ liệu đi vào máy tính nhân viên.

**Grammar & collocations:** `perform deep network packet inspection` — thực hiện kiểm tra sâu các gói tin mạng; `tools for network packet inspection` — các công cụ kiểm tra gói dữ liệu mạng; `bypass network packet inspection` — vượt qua sự kiểm tra gói tin mạng.

**Register & nuance:** Phân biệt giữa kiểm tra nông (*shallow inspection* - chỉ xem địa chỉ gửi/nhận ở phần đầu) và kiểm tra sâu (*Deep Packet Inspection - DPI* - mổ xẻ toàn bộ nội dung dữ liệu bên trong).

**Examples:** `Enterprise firewalls perform deep network packet inspection to ensure encrypted outbound traffic does not harbor stolen corporate records.` → Các tường lửa doanh nghiệp thực hiện việc kiểm tra gói tin mạng chuyên sâu để đảm bảo lưu lượng mã hóa truyền ra ngoài không chứa các hồ sơ doanh nghiệp bị đánh cắp.

**Liên kết tiếng Hàn:** `네트워크 패킷 분석`, `심층 패킷 검사(DPI)` — phân tích gói tin mạng / kiểm tra gói tin chuyên sâu.

---

## 10. endpoint protection platform /ˈend.pɔɪnt prəˈtek.ʃən ˈplæt.fɔːrm/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường viết tắt là EPP). Thường làm tân ngữ sau `deploy`, `manage`, `upgrade`.

**Core meaning — English:** An integrated suite of software installed across end-user devices—such as laptops, smartphones, and servers—to defend against file-based malware, suspicious processes, and remote exploits.

**Core meaning & mental image — Tiếng Việt:** Nền tảng bảo vệ thiết bị đầu cuối. Ban IT công ty cài đặt một chương trình an ninh thống nhất lên toàn bộ 5.000 máy tính xách tay của nhân viên làm việc từ xa; phần mềm này tự động quét virus, chặn USB lạ cắm vào máy và ngắt kết nối Internet ngay lập tức nếu phát hiện máy tính bị nhiễm độc.

**Grammar & collocations:** `deploy an endpoint protection platform` — triển khai nền tảng bảo vệ thiết bị đầu cuối; `manage the corporate endpoint protection platform` — quản lý nền tảng bảo mật thiết bị đầu cuối của doanh nghiệp; `features of an endpoint protection platform` — các tính năng của nền tảng bảo vệ thiết bị đầu cuối.

**Register & nuance:** Tiến hóa vượt bậc so với các phần mềm diệt virus cá nhân (*traditional antivirus*), EPP kết hợp học máy, quản lý tường lửa cá nhân và kiểm soát thiết bị ngoại vi trên quy mô doanh nghiệp.

**Examples:** `IT administrators updated the enterprise endpoint protection platform to isolate infected laptops automatically upon malware detection.` → Các quản trị viên công nghệ thông tin đã cập nhật nền tảng bảo vệ thiết bị đầu cuối của doanh nghiệp để tự động cô lập các máy tính xách tay bị nhiễm độc ngay khi phát hiện mã độc.

**Liên kết tiếng Hàn:** `엔드포인트 보호 플랫폼(EPP)` — nền tảng bảo vệ thiết bị đầu cuối.

---

## 11. brute-force credential stuffing /ˈbruːt fɔːrs krɪˈden.ʃəl ˈstʌf.ɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `launch`, `defend against`, `prevent`.

**Core meaning — English:** An automated cyber attack where bots rapidly test massive lists of previously leaked username-and-password combinations against popular websites to gain unauthorized account access.

**Core meaning & mental image — Tiếng Việt:** Đòn tấn công nhồi thông tin xác thực bằng vét cạn. Tin tặc mua được một tệp chứa 10 triệu tài khoản email và mật khẩu bị rò rỉ từ một diễn đàn game cũ, sau đó dùng hàng nghìn máy tính ảo tự động thử đăng nhập hàng loạt vào ngân hàng trực tuyến, hy vọng những người dùng lười đổi mật khẩu sẽ bị dính bẫy.

**Grammar & collocations:** `defend against brute-force credential stuffing` — phòng thủ trước các đòn tấn công nhồi thông tin xác thực bằng vét cạn; `suffer a brute-force credential stuffing campaign` — hứng chịu một chiến dịch tấn công nhồi thông tin đăng nhập; `prevent brute-force credential stuffing` — ngăn ngừa các vụ nhồi thông tin xác thực tự động.

**Register & nuance:** Khai thác thói quen xấu của người dùng là tái sử dụng mật khẩu trên nhiều dịch vụ (*password reuse*). Thường bị ngăn chặn hiệu quả bằng cơ chế CAPTCHA và xác thực đa yếu tố (MFA).

**Examples:** `E-commerce portals implemented rate limiting and multi-factor authentication to thwart automated brute-force credential stuffing.` → Các cổng thương mại điện tử đã triển khai giới hạn tốc độ yêu cầu và xác thực đa yếu tố để ngăn chặn đòn tấn công nhồi thông tin xác thực bằng vét cạn tự động.

**Liên kết tiếng Hàn:** `크리덴셜 스터핑`, `무차별 대입 계정 탈취 공격` — tấn công nhồi thông tin xác thực / tấn công vét cạn tài khoản.

---

## 12. man-in-the-middle interception /ˌmæn ɪn ðə ˈmɪd.əl ˌɪn.t̬ɚˈsep.ʃən/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase` (thường viết tắt là MitM interception). Thường làm tân ngữ sau `conduct`, `prevent`, `detect`.

**Core meaning — English:** A cyber intrusion where an attacker secretly inserts themselves between two communicating parties, eavesdropping on or altering their exchanged data without either party noticing.

**Core meaning & mental image — Tiếng Việt:** Sự đánh chặn kiểu người đứng giữa (MitM). Kẻ xấu thiết lập một trạm phát Wi-Fi miễn phí giả mạo tại quán cà phê; khi du khách kết nối vào và gửi thông tin thẻ tín dụng để thanh toán khách sạn, tin tặc đứng ở giữa lén lút chặn bắt toàn bộ dãy số thẻ mà cả người mua lẫn khách sạn đều không hề hay biết.

**Grammar & collocations:** `prevent a man-in-the-middle interception` — ngăn chặn sự đánh chặn kiểu người đứng giữa; `vulnerable to man-in-the-middle interception` — dễ bị đánh chặn kiểu người ở giữa; `detect man-in-the-middle interceptions` — phát hiện các cuộc đánh chặn luồng truyền thông trung gian.

**Register & nuance:** Được ngăn chặn chủ yếu thông qua mã hóa toàn trình (*end-to-end encryption*) và chứng chỉ số TLS/SSL có xác thực danh tính máy chủ nghiêm ngặt.

**Examples:** `Unsecured public Wi-Fi networks leave remote travelers susceptible to man-in-the-middle interception unless VPN tunnels encrypt all traffic.` → Các mạng Wi-Fi công cộng không an toàn khiến những người đi lại làm việc từ xa dễ bị đánh chặn kiểu người đứng giữa trừ khi các đường hầm VPN mã hóa toàn bộ lưu lượng.

**Liên kết tiếng Hàn:** `중간자 공격 차단`, `중간자 도청 가로채기` — sự đánh chặn kiểu người đứng giữa (MitM).

---

## 13. lateral network movement /ˈlæt̬.ɚ.əl ˈnet.wɝːk ˈmuːv.mənt/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `detect`, `restrict`, `execute`.

**Core meaning — English:** The internal progression techniques used by cyber intruders to extend their reach across connected systems and servers after compromising an initial low-privilege workstation.

**Core meaning & mental image — Tiếng Việt:** Sự di chuyển ngang trong mạng nội bộ. Sau khi lừa được nhân viên lễ tân mở tệp mã độc, kẻ tấn công không dừng lại ở đó mà dùng chiếc máy tính lễ tân này làm bàn đạp, bí mật quét các máy tính khác trong mạng nội bộ, tìm cách xâm nhập sang phòng kế toán và cuối cùng chiếm quyền máy chủ dữ liệu tối mật của ban giám đốc.

**Grammar & collocations:** `detect lateral network movement` — phát hiện sự di chuyển ngang trong mạng; `restrict lateral network movement` — hạn chế sự dịch chuyển ngang trong hệ thống mạng; `prevent lateral network movement` — ngăn chặn các kỹ thuật di chuyển ngang của tin tặc.

**Register & nuance:** Khác với sự leo thang đặc quyền theo chiều dọc (*vertical privilege escalation* - nâng quyền từ user lên admin trên cùng một máy), di chuyển ngang là việc mở rộng địa bàn kiểm soát sang các máy tính khác trong mạng (*pivoting*).

**Examples:** `Network segmentation policies restrict lateral network movement, ensuring a breached marketing workstation cannot connect to banking databases.` → Các chính sách phân đoạn mạng hạn chế sự di chuyển ngang trong mạng nội bộ, đảm bảo một máy trạm tiếp thị bị xâm phạm không thể kết nối tới các cơ sở dữ liệu ngân hàng.

**Liên kết tiếng Hàn:** `네트워크 측면 이동`, `내부 횡적 이동(Lateral Movement)` — sự di chuyển ngang trong mạng nội bộ.

---

## 14. zero-trust architecture /ˈzɪr.oʊ trʌst ˈɑːr.kə.tek.tʃɚ/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm tân ngữ sau `implement`, `adopt`, `transition to`.

**Core meaning — English:** A modern cybersecurity framework predicated on the core operational principle "never trust, always verify," requiring strict identity authentication for every user and device attempting to access network resources.

**Core meaning & mental image — Tiếng Việt:** Kiến trúc an ninh không tin cậy (Zero Trust). Công ty xóa bỏ quan niệm cũ cho rằng "ở trong văn phòng công ty thì an toàn"; giờ đây, dù nhân viên đang ngồi ngay tại trụ sở hay ở nước ngoài, mỗi khi muốn mở một tệp tài liệu nội bộ, hệ thống đều bắt quét vân tay, kiểm tra máy tính có cài bản vá mới nhất không và xác nhận lại quyền hạn từng lần một.

**Grammar & collocations:** `implement a zero-trust architecture` — triển khai kiến trúc an ninh không tin cậy; `transition to zero-trust architecture` — chuyển đổi sang mô hình kiến trúc zero-trust; `pillars of zero-trust architecture` — các trụ cột của kiến trúc an ninh không mặc định tin cậy.

**Register & nuance:** Tiêu chuẩn vàng trong thiết kế an ninh mạng hiện đại của chính phủ Mỹ và các tập đoàn toàn cầu, thay thế hoàn toàn mô hình phòng thủ chu vi truyền thống "lâu đài và hào nước" (*castle-and-moat*).

**Examples:** `Technology enterprises adopted zero-trust architecture to ensure that compromised user credentials alone cannot grant access to mission-critical infrastructure.` → Các doanh nghiệp công nghệ đã áp dụng kiến trúc an ninh không tin cậy để đảm bảo rằng chỉ riêng các thông tin xác thực người dùng bị xâm phạm không thể cấp quyền truy cập vào cơ sở hạ tầng trọng yếu.

**Liên kết tiếng Hàn:** `제로 트러스트 아키텍처`, `무신뢰 보안 구조` — kiến trúc an ninh không tin cậy (Zero Trust).

---

## 15. incident response playbook /ˈɪn.sɪ.dənt rɪˈspɑːns ˈpleɪ.bʊk/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `execute`, `develop`, `rehearse`.

**Core meaning — English:** A comprehensive, documented operational guide outlining step-by-step procedures that security professionals must follow when identifying, containing, and resolving a cyber incident.

**Core meaning & mental image — Tiếng Việt:** Sổ tay kịch bản ứng phó sự cố mạng. Khi còi báo động máy chủ bị tấn công vang lên, đội kỹ thuật không hề hoảng loạn mà mở ngay cuốn sổ tay kịch bản ra: bước 1 ngắt dây mạng ngay lập tức, bước 2 chụp ảnh bộ nhớ RAM để lưu bằng chứng, bước 3 kích hoạt máy chủ dự phòng và bước 4 báo cáo cho cục an ninh mạng theo đúng trình tự pháp luật.

**Grammar & collocations:** `execute an incident response playbook` — thực thi sổ tay kịch bản ứng phó sự cố; `rehearse the incident response playbook` — diễn tập kịch bản ứng phó sự cố an ninh; `update the incident response playbook` — cập nhật sổ tay quy trình xử lý sự cố mạng.

**Register & nuance:** Mang tính bắt buộc trong quản trị rủi ro doanh nghiệp và tuân thủ các tiêu chuẩn bảo mật như ISO 27001 và NIST CSF.

**Examples:** `During the security drill, engineers executed their incident response playbook, isolating breached cloud instances within twelve minutes.` → Trong buổi diễn tập bảo mật, các kỹ sư đã thực thi sổ tay kịch bản ứng phó sự cố của mình, cô lập các thực thể đám mây bị xâm phạm trong vòng mười hai phút.

**Liên kết tiếng Hàn:** `침해사고 대응 플레이북`, `보안 사고 대응 절차서` — sổ tay kịch bản ứng phó sự cố mạng.

---

## 16. threat hunting methodology /ˈθret ˌhʌn.t̬ɪŋ ˌmeθ.əˈdɑː.lə.dʒi/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm tân ngữ sau `apply`, `formalize`, `refine`.

**Core meaning — English:** A proactive security approach where human analysts systematically search through internal networks to detect stealthy threats and malicious actors that bypassed automated defenses.

**Core meaning & mental image — Tiếng Việt:** Phương pháp luận săn lùng mối đe dọa mạng. Thay vì ngồi đợi hệ thống báo chuông, các chuyên gia săn lùng mối đe dọa chủ động đặt giả thuyết: "Nếu tin tặc đã lọt qua cửa ngõ vào mạng nội bộ tuần trước thì chúng đang làm gì?", từ đó họ lục lọi từng bản ghi hệ thống để tóm gọn kẻ xâm nhập đang ẩn mình.

**Grammar & collocations:** `apply a rigorous threat hunting methodology` — áp dụng phương pháp luận săn lùng mối đe dọa nghiêm ngặt; `proactive threat hunting methodology` — phương pháp truy tìm mối đe dọa chủ động; `refine threat hunting methodologies` — hoàn thiện các phương pháp luận săn lùng hiểm họa an ninh mạng.

**Register & nuance:** Nhấn mạnh tính chủ động (*proactive*) dựa trên trí tuệ và kinh nghiệm của con người, phân biệt với việc phản ứng bị động (*reactive*) khi sự cố đã xảy ra.

**Examples:** `Specialized defense teams apply a proactive threat hunting methodology to locate dormant malware that automated antivirus scans missed.` → Các đội phòng thủ chuyên trách áp dụng một phương pháp luận săn lùng mối đe dọa chủ động để định vị mã độc đang ngủ yên mà các lượt quét diệt virus tự động đã bỏ sót.

**Liên kết tiếng Hàn:** `위협 사냥 방법론`, `위협 헌팅 방법론` — phương pháp luận săn lùng mối đe dọa mạng.

---

## 17. penetration testing assessment /ˌpen.əˈtreɪ.ʃən ˈtes.tɪŋ əˈses.mənt/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường gọi tắt là pen test assessment). Thường làm tân ngữ sau `conduct`, `commission`, `undergo`.

**Core meaning — English:** An authorized, simulated cyber assault performed by ethical hackers against an organization's digital assets to evaluate system vulnerability and defensive robustness.

**Core meaning & mental image — Tiếng Việt:** Đánh giá kiểm thử xâm nhập (kiểm thử thâm nhập). Ngân hàng thuê một nhóm "tin tặc mũ trắng" thử mọi cách tấn công vào ứng dụng di động của họ suốt một tuần: từ bẻ khóa mật khẩu đến tìm lỗi phần mềm, nhằm phát hiện ra mọi lỗ hổng trước khi tin tặc thật sự kịp lợi dụng.

**Grammar & collocations:** `commission a penetration testing assessment` — ủy thác một cuộc đánh giá kiểm thử xâm nhập; `undergo an annual penetration testing assessment` — trải qua cuộc đánh giá kiểm thử thâm nhập hàng năm; `findings of a penetration testing assessment` — các phát hiện từ cuộc đánh giá kiểm thử xâm nhập.

**Register & nuance:** Khác với việc quét lỗ hổng tự động (*vulnerability scanning*), kiểm thử xâm nhập do con người thực hiện có cố gắng bẻ gãy hệ thống thực tế để kiểm tra mức độ thiệt hại tiềm tàng.

**Examples:** `Before launching its payment app, the fintech firm commissioned an external penetration testing assessment to uncover hidden logic vulnerabilities.` → Trước khi ra mắt ứng dụng thanh toán, công ty công nghệ tài chính đã ủy thác một cuộc đánh giá kiểm thử xâm nhập từ bên ngoài để phát hiện các lỗ hổng logic tiềm ẩn.

**Liên kết tiếng Hàn:** `모의 해킹 평가`, `침투 테스트 평가` — đánh giá kiểm thử xâm nhập / kiểm thử thâm nhập (pen test).

---

## 18. security perimeter defense /səˈkjʊr.ə.t̬i pəˈrɪm.ə.t̬ɚ dɪˈfens/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `establish`, `reinforce`, `breach`.

**Core meaning — English:** The collective defensive boundary comprising firewalls, demilitarized zones (DMZs), and boundary routers designed to safeguard internal networks from outside threats.

**Core meaning & mental image — Tiếng Việt:** Phòng thủ chu vi bảo mật. Giống như bức tường thành kiên cố và hào nước sâu bao quanh một lâu đài cổ, hệ thống tường lửa và bộ định tuyến biên giới được thiết lập để ngăn chặn mọi đợt tấn công từ mạng Internet bên ngoài tràn vào mạng nội bộ của công ty.

**Grammar & collocations:** `breach the security perimeter defense` — chọc thủng phòng thủ chu vi bảo mật; `reinforce security perimeter defense` — củng cố tuyến phòng thủ chu vi an ninh; `limits of security perimeter defense` — những giới hạn của hệ thống phòng thủ chu vi an ninh mạng.

**Register & nuance:** Khái niệm an ninh truyền thống. Dù vẫn cần thiết, ngày nay nó không còn đủ để bảo vệ tổ chức khi nhân viên làm việc từ xa và tài nguyên đã chuyển dịch lên đám mây.

**Examples:** `Organizations acknowledge that while security perimeter defense remains vital, internal access controls must also be strengthened.` → Các tổ chức thừa nhận rằng trong khi phòng thủ chu vi bảo mật vẫn giữ vai trò thiết yếu, các biện pháp kiểm soát truy cập nội bộ cũng phải được củng cố.

**Liên kết tiếng Hàn:** `보안 경계 방어`, `경계선 보안 방어` — phòng thủ chu vi bảo mật.

---

## 19. multi-tenant data isolation /ˈmʌl.ti ˈten.ənt ˈdeɪ.t̬ə ˌaɪ.səˈleɪ.ʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm tân ngữ sau `enforce`, `guarantee`, `verify`.

**Core meaning — English:** The architectural separation mechanisms within cloud environments that ensure one client's databases and compute processes remain strictly inaccessible to other customers sharing the same hardware.

**Core meaning & mental image — Tiếng Việt:** Sự cô lập dữ liệu môi trường đa người thuê. Giống như một tòa chung cư cao cấp nơi nhiều gia đình cùng chia sẻ hệ thống cấp nước và thang máy nhưng mỗi căn hộ đều có cửa khóa vân tay riêng biệt; trên đám mây, dữ liệu của công ty bảo hiểm và ngân hàng cùng chạy trên một máy chủ vật lý nhưng được mã hóa cách ly tuyệt đối, không bên nào xem được dữ liệu của bên nào.

**Grammar & collocations:** `enforce strict multi-tenant data isolation` — thực thi sự cô lập dữ liệu đa người thuê nghiêm ngặt; `verify multi-tenant data isolation` — kiểm tra tính cô lập dữ liệu trong môi trường nhiều bên thuê; `breach of multi-tenant data isolation` — sự xâm phạm cách ly dữ liệu giữa các khách hàng thuê chung máy chủ.

**Register & nuance:** Tiêu chuẩn bắt buộc đối với các nhà cung cấp dịch vụ đám mây công cộng (AWS, Azure, Google Cloud) để đạt chứng nhận an toàn dữ liệu doanh nghiệp.

**Examples:** `Cloud providers leverage hypervisor virtualization and cryptographic keys to guarantee rigorous multi-tenant data isolation for enterprise clients.` → Các nhà cung cấp dịch vụ đám mây tận dụng công nghệ ảo hóa giám sát máy ảo và các khóa mật mã để đảm bảo sự cô lập dữ liệu môi trường đa người thuê nghiêm ngặt cho các khách hàng doanh nghiệp.

**Liên kết tiếng Hàn:** `멀티 테넌트 데이터 격리` — sự cô lập dữ liệu môi trường đa người thuê.

---

## 20. vulnerability remediation timeline /ˌvʌl.nɚ.əˈbɪl.ə.t̬i rɪˌmiː.diˈeɪ.ʃən ˈtaɪm.laɪn/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `establish`, `adhere to`, `accelerate`.

**Core meaning — English:** The mandated operational schedule dictating the maximum allowable timeframe within which newly discovered security bugs and flaws must be tested and patched.

**Core meaning & mental image — Tiếng Việt:** Mốc thời gian khắc phục lỗ hổng bảo mật. Quy chế an ninh quy định rõ: lỗ hổng ở mức độ cực kỳ nguy cấp phải được cài đặt bản vá trong vòng 24 giờ, mức độ cao trong 7 ngày và mức độ trung bình trong 30 ngày; nếu chậm trễ một giờ, quản trị viên sẽ bị kiểm điểm trách nhiệm.

**Grammar & collocations:** `adhere to the vulnerability remediation timeline` — tuân thủ mốc thời gian khắc phục lỗ hổng bảo mật; `accelerate the vulnerability remediation timeline` — đẩy nhanh tiến độ khắc phục lỗ hổng; `miss the vulnerability remediation timeline` — trễ hạn mốc thời gian sửa chữa lỗ hổng bảo mật.

**Register & nuance:** Thường được quy định chặt chẽ trong thỏa thuận mức dịch vụ (SLA) và các tiêu chuẩn kiểm toán tuân thủ an toàn thông tin (như SOC 2 hoặc PCI DSS).

**Examples:** `Compliance auditors penalized the vendor for repeatedly failing to meet the required vulnerability remediation timeline for high-severity flaws.` → Các kiểm toán viên tuân thủ đã xử phạt nhà cung cấp vì liên tục không đáp ứng mốc thời gian khắc phục lỗ hổng bảo mật theo yêu cầu đối với các lỗi có mức độ nghiêm trọng cao.

**Liên kết tiếng Hàn:** `취약점 조치 일정`, `보안 취약점 개선 시한` — mốc thời gian khắc phục lỗ hổng bảo mật / thời hạn xử lý lỗ hổng.

---

## 21. security breach containment /səˈkjʊr.ə.t̬i briːtʃ kənˈteɪn.mənt/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm mục tiêu sau `achieve`, `execute`, `prioritize`.

**Core meaning — English:** The emergency operational measures taken to restrict, isolate, and neutralize unauthorized intrusions, preventing the spread of an attack to other vital network segments.

**Core meaning & mental image — Tiếng Việt:** Sự ngăn chặn khoanh vùng vi phạm an ninh. Khi phát hiện một máy chủ chi nhánh bị nhiễm mã độc tống tiền, đội ứng cứu khẩn cấp lập tức ngắt cầu dao mạng nối về trụ sở chính, khóa tất cả tài khoản liên quan và cô lập phân vùng máy chủ bị nhiễm, không để đám cháy mã độc lây lan sang phần còn lại của hệ thống.

**Grammar & collocations:** `achieve swift security breach containment` — đạt được sự ngăn chặn khoanh vùng vi phạm an ninh nhanh chóng; `procedures for security breach containment` — các quy trình ngăn chặn khoanh vùng sự cố rò rỉ an ninh; `prioritize security breach containment` — ưu tiên việc cô lập ngăn chặn vi phạm an ninh.

**Register & nuance:** Giai đoạn thứ hai trong quy trình xử lý sự cố (sau phát hiện và trước giai đoạn khắc phục/xóa sổ mã độc). Tốc độ khoanh vùng quyết định quy mô thiệt hại tài chính của doanh nghiệp.

**Examples:** `Rapid security breach containment prevented malware from infiltrating customer databases after an employee laptop was compromised.` → Sự ngăn chặn khoanh vùng vi phạm an ninh nhanh chóng đã ngăn chặn mã độc xâm nhập vào các cơ sở dữ liệu khách hàng sau khi máy tính xách tay của một nhân viên bị xâm phạm.

**Liên kết tiếng Hàn:** `보안 침해 사고 격리`, `침해 사고 확산 방지` — sự ngăn chặn khoanh vùng vi phạm an ninh.

---

## 22. forensic digital investigation /fəˈren.zɪk ˈdɪdʒ.ə.t̬əl ɪnˌves.təˈɡeɪ.ʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `launch`, `conduct`, `conclude`.

**Core meaning — English:** The scientific recovery, preservation, and forensic analysis of digital artifacts and system storage devices to reconstruct how a cybercrime occurred for legal or internal accountability.

**Core meaning & mental image — Tiếng Việt:** Cuộc điều tra kỹ thuật số pháp y (giám định số). Giống như các điều tra viên hình sự thu thập dấu vân tay tại hiện trường vụ án, các chuyên gia giám định số niêm phong ổ cứng máy chủ, trích xuất dữ liệu bộ nhớ và truy tìm từng địa chỉ IP để chứng minh chính xác tên tin tặc đã xâm nhập lúc mấy giờ và lấy đi những tài liệu gì.

**Grammar & collocations:** `conduct a forensic digital investigation` — tiến hành một cuộc điều tra kỹ thuật số pháp y; `findings of the forensic digital investigation` — kết quả của cuộc giám định kỹ thuật số pháp y; `evidence for forensic digital investigation` — bằng chứng cho cuộc điều tra pháp y số.

**Register & nuance:** Yêu cầu chuỗi bảo quản chứng cứ (*chain of custody*) nghiêm ngặt để các phát hiện có giá trị pháp lý trước tòa án hoặc cơ quan quản lý nhà nước.

**Examples:** `Law enforcement initiated a forensic digital investigation to recover tampered transaction logs and establish evidentiary proof of the cyber heist.` → Cơ quan thực thi pháp luật đã khởi xướng một cuộc điều tra kỹ thuật số pháp y để khôi phục các nhật ký giao dịch bị giả mạo và thiết lập bằng chứng chứng minh vụ trộm cắp mạng.

**Liên kết tiếng Hàn:** `디지털 포렌식 조사` — cuộc điều tra kỹ thuật số pháp y / giám định số.

---

## 23. air-gapped backup repository /ˈer ɡæpt ˈbæk.ʌp rɪˈpɑː.zə.tɔːr.i/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `maintain`, `store in`, `rely upon`.

**Core meaning — English:** A data storage system physically disconnected from all external computer networks and the internet to guarantee total protection against remote ransomware attacks and unauthorized modifications.

**Core meaning & mental image — Tiếng Việt:** Kho lưu trữ sao lưu cách ly vật lý (kho lưu trữ air-gap). Bản sao lưu dữ liệu toàn bộ tài khoản ngân hàng được ghi vào các cuộn băng từ tính dung lượng lớn, sau đó băng được rút hẳn dây nối mạng, cho vào két sắt chống cháy có bảo vệ canh gác nghiêm ngặt, khiến không một tin tặc nào trên thế giới có thể dùng đường truyền mạng để xóa hay mã hóa được.

**Grammar & collocations:** `maintain an air-gapped backup repository` — duy trì một kho lưu trữ sao lưu cách ly vật lý; `restore data from an air-gapped backup repository` — phục hồi dữ liệu từ kho sao lưu cách ly mạng; `security of an air-gapped backup repository` — tính an toàn của kho lưu trữ sao lưu ngoại tuyến độc lập.

**Register & nuance:** Tuyến phòng thủ cuối cùng chống lại mã độc tống tiền thế hệ mới chuyên tìm diệt các bản sao lưu trực tuyến (*online backups*).

**Examples:** `Because the municipal government maintained an air-gapped backup repository, officials recovered corrupted civic records without paying the ransom.` → Vì chính quyền thành phố duy trì một kho lưu trữ sao lưu cách ly vật lý, các quan chức đã khôi phục lại các hồ sơ công dân bị hư hỏng mà không cần trả tiền chuộc.

**Liên kết tiếng Hàn:** `망 분리 백업 저장소`, `에어갭 백업 저장소` — kho lưu trữ sao lưu cách ly vật lý (air-gap).

---

## 24. disaster recovery failover plan /dɪˈzæs.tɚ rɪˈkʌv.ɚ ˈfeɪl.oʊ.vɚ plæn/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `test`, `implement`, `activate`.

**Core meaning — English:** A pre-engineered operational blueprint detailing automated processes to redirect critical system workloads to secondary redundant infrastructure when primary data centers suffer catastrophic disruption.

**Core meaning & mental image — Tiếng Việt:** Kế hoạch chuyển đổi dự phòng khi có thảm họa. Khi một trận động đất làm đứt toàn bộ đường điện và mạng của trung tâm dữ liệu ở Hà Nội, kế hoạch chuyển đổi tự động kích hoạt trong 30 giây: toàn bộ lưu lượng giao dịch ngân hàng lập tức được chuyển hướng sang trung tâm dữ liệu dự phòng tại Đà Nẵng, giúp người dân rút tiền bình thường không gián đoạn.

**Grammar & collocations:** `activate a disaster recovery failover plan` — kích hoạt kế hoạch chuyển đổi dự phòng khi có thảm họa; `test the disaster recovery failover plan` — kiểm thử kế hoạch chuyển đổi dự phòng thảm họa; `comprehensive disaster recovery failover plan` — kế hoạch chuyển đổi dự phòng thảm họa toàn diện.

**Register & nuance:** Trọng tâm của quản trị tính liên tục kinh doanh (BCP - Business Continuity Planning), đo lường bằng hai chỉ số then chốt: RTO (thời gian phục hồi mục tiêu) và RPO (điểm phục hồi dữ liệu mục tiêu).

**Examples:** `When severe floods disabled the main data facility, the bank activated its disaster recovery failover plan, switching operational loads to a secondary hub.` → Khi lũ lụt nghiêm trọng làm tê liệt cơ sở dữ liệu chính, ngân hàng đã kích hoạt kế hoạch chuyển đổi dự phòng khi có thảm họa của mình, chuyển các tải vận hành sang một trung tâm thứ cấp.

**Liên kết tiếng Hàn:** `재해 복구 페일오버 계획`, `비상 재해 복구 장애 전환 계획` — kế hoạch chuyển đổi dự phòng khi có thảm họa.

---

## 25. identity and access management framework /aɪˈden.t̬ə.t̬i ənd ˈæk.ses ˈmæn.ədʒ.mənt ˈfreɪm.wɝːk/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường viết tắt là IAM framework). Thường làm tân ngữ sau `establish`, `govern`, `integrate`.

**Core meaning — English:** An enterprise organizational and technical structure of policies and technologies ensuring appropriate individuals possess validated access to digital resources based on job roles.

**Core meaning & mental image — Tiếng Việt:** Khung quản lý định danh và quyền truy cập (IAM). Bộ khung quy định toàn diện của công ty: nhân viên mới vào chỉ được cấp quyền xem tài liệu của phòng mình; khi chuyển sang bộ phận khác, các quyền cũ tự động bị thu hồi; và khi nhân viên nghỉ việc, toàn bộ tài khoản email, mạng xã hội và máy chủ lập tức bị khóa tự động chỉ sau một cú nhấp chuột.

**Grammar & collocations:** `establish an identity and access management framework` — thiết lập khung quản lý định danh và quyền truy cập; `integrate with the identity and access management framework` — tích hợp với khung quản lý danh tính và quyền truy cập; `strengthen the identity and access management framework` — tăng cường khung quản lý phân quyền và định danh.

**Register & nuance:** Nền tảng trung tâm của bảo mật thông tin doanh nghiệp, áp dụng nguyên tắc đặc quyền tối thiểu (*least privilege*) và quản lý vòng đời danh tính người dùng (*identity lifecycle*).

**Examples:** `Enterprises audit their identity and access management framework quarterly to revoke privileged credentials formerly granted to departed contractors.` → Các doanh nghiệp kiểm toán khung quản lý định danh và quyền truy cập của họ hàng quý để thu hồi các thông tin xác thực đặc quyền trước đây đã cấp cho các nhà thầu đã rời đi.

**Liên kết tiếng Hàn:** `계정 및 접근 제어 프레임워크(IAM)`, `통합 인증 및 접근 관리 체계` — khung quản lý định danh và quyền truy cập (IAM).

---

## Review in context (Part 1: Threat Vectors & Cyber Attack Detection)

Securing modern corporate enterprises against sophisticated adversaries requires continuous situational awareness and automated detection capabilities. Security operations centers rely on real-time **cyber threat intelligence**, analyzing adversary tactics to anticipate emerging exploits before vulnerabilities are actively probed. Without vigilant gateway controls, a careless click on an unsanctioned attachment can trigger immediate **malware payload execution**, allowing malicious trojans to unpack privileged backdoors within workstations. In recent years, multinational organizations have repeatedly faced a destructive **ransomware extortion scheme**, where criminal syndicates encrypt enterprise file servers and demand multimillion-dollar payouts. Concurrently, public infrastructure operators must defend online portals against a coordinated **distributed denial-of-service attack**, filtering traffic floods across distributed scrubbing nodes to protect site availability. The most formidable operational challenge arises when adversaries weaponize an unpatched **zero-day vulnerability exploit**, circumventing traditional security defenses before software vendors can release emergency patches. State-sponsored adversaries frequently deploy an **advanced persistent threat**, embedding covert surveillance implants inside government networks for prolonged reconnaissance. To detect unauthorized access attempts at network perimeters, engineers deploy an **intrusion detection sensor** at critical gateways, continuously inspecting incoming and outgoing packet headers. Machine learning platforms aggregate telemetry by automating **security telemetry log correlation**, cross-referencing disparate firewall logs and authentication records to uncover subtle coordinated breaches. Inside high-security enclaves, firewalls conduct deep **network packet inspection**, examining application layer payloads to ensure encrypted communications do not harbor unauthorized exfiltration channels. On employee laptops, system administrators manage an enterprise **endpoint protection platform**, isolating suspect processes and blocking malicious file executions. Simultaneously, external login portals require robust defense mechanisms against automated **brute-force credential stuffing**, utilizing adaptive challenges to block stolen password lists. In coffee shops and airports, unencrypted public Wi-Fi exposes remote staff to a **man-in-the-middle interception**, necessitating mandatory VPN tunnels. Finally, when perimeter defenses are breached, defenders monitor internal traffic to stop **lateral network movement**, blocking attackers from pivoting from basic workstations toward mission-critical servers.

**Bản dịch tiếng Việt:**

Bảo đảm an toàn cho các doanh nghiệp đương đại trước các đối thủ tinh vi đòi hỏi nhận thức tình huống liên tục và các năng lực phát hiện tự động. Các trung tâm điều hành an ninh dựa vào tình báo mối đe dọa không gian mạng (**cyber threat intelligence**) theo thời gian thực, phân tích các chiến thuật của đối thủ để dự đoán các đòn khai thác mới xuất hiện trước khi các lỗ hổng bị dò quét tích cực. Nếu thiếu các biện pháp kiểm soát cổng kết nối thận trọng, một cú nhấp chuột bất cẩn vào một tệp đính kèm trái phép có thể kích hoạt sự thực thi tải trọng mã độc (**malware payload execution**) ngay lập tức, cho phép các mã độc trojan nguy hại bung các cổng sau có đặc quyền bên trong các máy trạm. Trong những năm gần đây, các tổ chức đa quốc gia đã nhiều lần phải đối mặt với một kịch bản tống tiền bằng mã độc tống tiền (**ransomware extortion scheme**) mang tính phá hoại, nơi các nghiệp đoàn tội phạm mã hóa các máy chủ tệp doanh nghiệp và đòi các khoản tiền chuộc hàng triệu đô la. Đồng thời, các nhà vận hành cơ sở hạ tầng công cộng phải bảo vệ các cổng thông tin trực tuyến trước một cuộc tấn công từ chối dịch vụ phân tán (**distributed denial-of-service attack**) được phối hợp, lọc các luồng lưu lượng lũ quét qua các nút lọc phân tán để bảo vệ tính sẵn sàng của trang mạng. Thách thức vận hành đáng sợ nhất nảy sinh khi các đối thủ vũ khí hóa một lỗ hổng khai thác ngày số không (**zero-day vulnerability exploit**) chưa có bản vá, vượt qua các biện pháp phòng thủ an ninh truyền thống trước khi các nhà cung cấp phần mềm có thể phát hành các bản vá khẩn cấp. Các đối thủ do nhà nước tài trợ thường xuyên triển khai một mối đe dọa dai dẳng nâng cao (**advanced persistent threat**), cài cắm các phần mềm giám sát bí mật bên trong các mạng lưới chính phủ để thực hiện trinh sát kéo dài. Để phát hiện các nỗ lực truy cập trái phép tại các chu vi mạng, các kỹ sư triển khai một cảm biến phát hiện xâm nhập (**intrusion detection sensor**) tại các cổng trọng yếu, liên tục kiểm tra các tiêu đề gói tin đến và đi. Các nền tảng học máy tổng hợp dữ liệu viễn trắc bằng cách tự động hóa sự đối chiếu tương quan nhật ký dữ liệu an ninh (**security telemetry log correlation**), đối chiếu chéo các nhật ký tường lửa và hồ sơ xác thực rời rạc để vạch trần các vụ vi phạm được phối hợp tinh vi. Bên trong các vùng an ninh cao, các tường lửa tiến hành sự kiểm tra gói tin mạng (**network packet inspection**) chuyên sâu, xem xét các tải trọng tầng ứng dụng để đảm bảo thông tin liên lạc được mã hóa không chứa các kênh đánh cắp dữ liệu trái phép. Trên các máy tính xách tay của nhân viên, các quản trị viên hệ thống quản lý một nền tảng bảo vệ thiết bị đầu cuối (**endpoint protection platform**) doanh nghiệp, cô lập các tiến trình đáng ngờ và chặn các lệnh thực thi tệp độc hại. Đồng thời, các cổng đăng nhập bên ngoài đòi hỏi các cơ chế phòng thủ vững chắc trước đòn tấn công nhồi thông tin xác thực bằng vét cạn (**brute-force credential stuffing**) tự động, sử dụng các thử thách thích ứng để chặn các danh sách mật khẩu bị đánh cắp. Tại các quán cà phê và sân bay, mạng Wi-Fi công cộng không được mã hóa khiến các nhân viên làm việc từ xa dễ bị sự đánh chặn kiểu người đứng giữa (**man-in-the-middle interception**), đòi hỏi bắt buộc phải dùng các đường hầm VPN. Cuối cùng, khi các hệ thống phòng thủ chu vi bị chọc thủng, những người phòng thủ giám sát lưu lượng nội bộ để ngăn chặn sự di chuyển ngang trong mạng nội bộ (**lateral network movement**), chặn đứng việc kẻ tấn công lấy các máy trạm cơ bản làm bàn đạp tiến tới các máy chủ trọng yếu.

---

## Review in context (Part 2: Incident Response, Defensive Architecture & Zero-Trust Governance)

Mitigating contemporary enterprise cyber risks demands transitioning from static perimeter barriers to comprehensive, resilient operational architectures. Organizations increasingly implement a rigorous **zero-trust architecture**, ensuring that no internal or external network actor is automatically trusted without continuous identity verification. When an anomalous intrusion is detected, security teams immediately execute their pre-approved **incident response playbook**, containing infected systems and mitigating operational fallout methodically. Rather than relying solely on automated detection engines, threat analysts utilize a proactive **threat hunting methodology**, formulating hypotheses to discover stealthy implants hidden within system logs. To locate infrastructural weaknesses before malicious syndicates can exploit them, companies commission an annual **penetration testing assessment**, challenging ethical hackers to breach mission-critical services. While modern security postures prioritize micro-segmentation, foundational **security perimeter defense** continues to filter unsanctioned external network requests. Within cloud hosting infrastructures, enterprise architects verify strict **multi-tenant data isolation**, guaranteeing that compute workloads and encrypted storage volumes remain inaccessible across adjacent corporate tenants. Security engineers enforce a strict **vulnerability remediation timeline**, mandating that critical software vulnerabilities be resolved before attackers construct automated exploit kits. During active breach scenarios, incident commanders prioritize rapid **security breach containment**, severing compromised network segments to shield unaffected corporate units. Following containment, forensic analysts launch a comprehensive **forensic digital investigation**, recovering memory dumps and tracking intrusion origins to establish evidentiary proof for regulatory authorities. To survive aggressive ransomware attacks that corrupt primary storage volumes, corporate boards mandate maintaining an offline **air-gapped backup repository**, enabling uncorrupted restoration of enterprise data assets. In the event of catastrophic physical or digital system failures, IT teams activate an automated **disaster recovery failover plan**, rerouting vital transactions to geographically distant secondary cloud clusters. Governing all digital interactions across the enterprise, an enterprise-wide **identity and access management framework** enforces role-based permissions, revoking stale privileges and ensuring least-privilege compliance.

**Bản dịch tiếng Việt:**

Giảm thiểu các rủi ro không gian mạng của doanh nghiệp đương đại đòi hỏi phải chuyển đổi từ các rào cản chu vi tĩnh sang các kiến trúc vận hành toàn diện và có khả năng phục hồi cao. Các tổ chức ngày càng triển khai một kiến trúc an ninh không tin cậy (**zero-trust architecture**) nghiêm ngặt, đảm bảo rằng không một tác nhân mạng nội bộ hay bên ngoài nào được mặc định tin cậy nếu không có sự xác minh danh tính liên tục. Khi một vụ xâm nhập bất thường được phát hiện, các đội an ninh lập tức thực thi sổ tay kịch bản ứng phó sự cố mạng (**incident response playbook**) đã được phê duyệt trước của họ, cô lập các hệ thống bị nhiễm và giảm thiểu hậu quả vận hành một cách có phương pháp. Thay vì chỉ dựa vào các công cụ phát hiện tự động, các nhà phân tích mối đe dọa sử dụng một phương pháp luận săn lùng mối đe dọa mạng (**threat hunting methodology**) chủ động, xây dựng các giả thuyết để phát hiện các phần mềm gián điệp tinh vi ẩn giấu trong các nhật ký hệ thống. Để định vị các điểm yếu cơ sở hạ tầng trước khi các nghiệp đoàn độc hại có thể khai thác chúng, các công ty ủy thác một cuộc đánh giá kiểm thử xâm nhập (**penetration testing assessment**) hàng năm, thách thức các tin tặc mũ trắng đột nhập vào các dịch vụ trọng yếu. Trong khi các tư thế an ninh hiện đại ưu tiên việc vi phân đoạn mạng, thì phòng thủ chu vi bảo mật (**security perimeter defense**) nền tảng vẫn tiếp tục lọc các yêu cầu mạng bên ngoài không được phép. Bên trong các cơ sở hạ tầng lưu trữ đám mây, các kiến trúc sư doanh nghiệp kiểm tra sự cô lập dữ liệu môi trường đa người thuê (**multi-tenant data isolation**) nghiêm ngặt, đảm bảo rằng các tải công việc tính toán và các dung lượng lưu trữ mã hóa không thể bị truy cập chéo giữa các bên thuê doanh nghiệp liền kề. Các kỹ sư bảo mật thực thi một mốc thời gian khắc phục lỗ hổng bảo mật (**vulnerability remediation timeline**) nghiêm ngặt, bắt buộc các lỗ hổng phần mềm nguy cấp phải được giải quyết trước khi kẻ tấn công xây dựng các bộ công cụ khai thác tự động. Trong các kịch bản vi phạm đang diễn ra, các chỉ huy sự cố ưu tiên sự ngăn chặn khoanh vùng vi phạm an ninh (**security breach containment**) nhanh chóng, cắt đứt các phân đoạn mạng bị xâm nhập để bảo vệ các đơn vị doanh nghiệp không bị ảnh hưởng. Sau khi khoanh vùng, các nhà phân tích pháp y khởi xướng một cuộc điều tra kỹ thuật số pháp y (**forensic digital investigation**) toàn diện, khôi phục các bản sao lưu bộ nhớ và theo dõi nguồn gốc xâm nhập để thiết lập bằng chứng xác thực cho các cơ quan quản lý. Để sống sót sau các cuộc tấn công mã độc tống tiền hung hãn làm hỏng các phân vùng lưu trữ chính, các hội đồng quản trị doanh nghiệp bắt buộc duy trì một kho lưu trữ sao lưu cách ly vật lý (**air-gapped backup repository**) ngoại tuyến, cho phép khôi phục nguyên vẹn các tài sản dữ liệu của doanh nghiệp. Trong trường hợp xảy ra các sự cố hệ thống vật lý hoặc kỹ thuật số thảm khốc, các đội công nghệ thông tin kích hoạt một kế hoạch chuyển đổi dự phòng khi có thảm họa (**disaster recovery failover plan**) tự động, chuyển hướng các giao dịch quan trọng đến các cụm đám mây thứ cấp ở xa về mặt địa lý. Chi phối mọi tương tác kỹ thuật số trên toàn doanh nghiệp, một khung quản lý định danh và quyền truy cập (**identity and access management framework**) trên toàn doanh nghiệp thực thi các quyền hạn dựa trên vai trò, thu hồi các đặc quyền cũ kỹ và đảm bảo tuân thủ nguyên tắc đặc quyền tối thiểu.
