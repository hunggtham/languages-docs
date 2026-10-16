# B2 Vocabulary 10 — Quantum computing readiness, post-RSA encryption migration, and crypto-agility

Sự trỗi dậy của điện toán lượng tử (*quantum computing*) đang đặt nền tảng an ninh số toàn cầu trước một bước ngoặt lịch sử: hầu như toàn bộ hạ tầng mật mã khóa công khai hiện đại bảo vệ tài chính, quốc phòng và viễn thông (đặc biệt là RSA và đường cong elip ECC) có nguy cơ bị vô hiệu hóa khi các cỗ máy lượng tử thực tế xuất hiện. Để thích ứng với thực tế này, các tổ chức trên thế giới đang gấp rút triển khai quá trình chuyển dịch sang mật mã học hậu lượng tử (*post-quantum cryptography — PQC*) và xây dựng năng lực thích ứng mật mã linh hoạt (*crypto-agility*). Ở trình độ B2, người học cần nắm vững hệ thống thuật ngữ chuyên sâu liên quan đến các mối đe dọa lượng tử, các cấu trúc đại số kháng lượng tử mới và quy trình chuyển đổi thực thi trong hạ tầng CNTT doanh nghiệp. Bài học này kết nối 25 khái niệm then chốt thành hai bức tranh chiến lược hoàn chỉnh: **Quantum Decryption Threats & Algorithmic Transition** (từ `cryptographic agility`, `Shor's algorithm threat`, `harvest now, decrypt later attack`, `elliptic curve vulnerability`, `lattice-based cryptography`, `key encapsulation mechanism`, `module-lattice digital signature`, `stateful hash-based signature`, `hybrid encryption scheme`, `cryptographic bill of materials`, `automated cryptographic discovery` đến `legacy algorithm sunsetting`) và **Implementation, Hardware Security & Quantum Distribution** (từ `post-RSA migration roadmap`, `cipher suite deprecation`, `quantum key distribution`, `photon polarization key exchange`, `quantum random number generator`, `hardware security module firmware`, `tamper-evident key transport`, `root key rollover`, `post-quantum certificate hierarchy`, `key derivation hardening`, `cryptographic compliance audit`, `quantum threat timeline` đến `legacy cipher decommission`).

---

## 1. cryptographic agility /ˌkrɪp.təˈɡræf.ɪk əˈdʒɪl.ə.t̬i/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `achieve`, `build`, `prioritize`.

**Core meaning — English:** The architectural capability of an IT infrastructure or security system to rapidly switch between cryptographic algorithms, keys, and certificates without altering underlying code or disrupting operations.

**Core meaning & mental image — Tiếng Việt:** Tính linh hoạt mật mã (khả năng thay đổi thuật toán mã hóa nhanh chóng mà không làm sập hệ thống). Hãy hình dung một cổng vòm bảo mật có thể tháo lắp ổ khóa modular: hôm nay cắm ổ khóa RSA cổ điển, ngày mai có thể rút ra và cắm ổ khóa lượng tử lattice mới vào chỉ trong tích tắc mà không cần đập bỏ toàn bộ bức tường lâu đài.

**Grammar & collocations:** `achieve cryptographic agility` — đạt được tính linh hoạt mật mã; `crypto-agility assessment` — đánh giá mức độ linh hoạt mật mã; `modular cryptographic agility` — tính linh hoạt mật mã theo cấu trúc module.

**Register & nuance:** Bối cảnh kiến trúc an toàn thông tin doanh nghiệp (*enterprise security architecture & post-quantum preparedness*); nhấn mạnh năng lực thích ứng chủ động trước các lỗ hổng thuật toán.

**Examples:** `Financial institutions must achieve cryptographic agility to replace obsolete encryption algorithms before quantum computers become operational.` → Các định chế tài chính phải đạt được tính linh hoạt mật mã để thay thế các thuật toán mã hóa lỗi thời trước khi máy tính lượng tử đi vào hoạt động thực tế.

**Liên kết tiếng Hàn:** `암호화 민첩성` (暗號化 敏捷性) — tính linh hoạt mật mã.

---

## 2. Shor's algorithm threat /ʃɔːrz ˈæl.ɡə.rɪð.əm θret/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `counter`, `evaluate`, `mitigate`.

**Core meaning — English:** The theoretical and imminent danger posed by a quantum computing algorithm that can solve prime factorization and discrete logarithms in polynomial time, rendering RSA and ECC encryption obsolete.

**Core meaning & mental image — Tiếng Việt:** Mối đe dọa từ thuật toán Shor (nguy cơ thuật toán lượng tử bẻ gãy hoàn toàn các mật mã khóa công khai truyền thống). Một bài toán phân tích thừa số nguyên khổng lồ mà siêu máy tính cổ điển phải mất hàng triệu năm mới giải được, thì thuật toán Shor trên máy tính lượng tử giải quyết xong chỉ trong vài phút, giống như một chiếc chìa khóa vạn năng bẻ gãy mọi ổ khóa cửa điện tử trên hành tinh.

**Grammar & collocations:** `counter the Shor's algorithm threat` — ứng phó với mối đe dọa từ thuật toán Shor; `vulnerability to Shor's algorithm threat` — tính dễ bị tổn thương trước mối đe dọa từ thuật toán Shor; `mitigate the Shor's algorithm threat` — giảm thiểu mối đe dọa từ thuật toán Shor.

**Register & nuance:** Thuật ngữ an toàn mật mã học lượng tử (*quantum cryptanalysis*); mối lo ngại cốt lõi thúc đẩy toàn cầu chuyển đổi sang hậu lượng tử (PQC).

**Examples:** `Cybersecurity leaders are overhauling enterprise infrastructure to counter the Shor's algorithm threat against existing public-key ciphers.` → Các nhà lãnh đạo an ninh mạng đang đại tu cơ sở hạ tầng doanh nghiệp nhằm ứng phó với mối đe dọa từ thuật toán Shor đối với các mật mã khóa công khai hiện tại.

**Liên kết tiếng Hàn:** `쇼어 알고리즘 위협` (Shor 演算 위협) — mối đe dọa từ thuật toán Shor.

---

## 3. harvest now, decrypt later attack /ˈhɑːr.vɪst naʊ dɪˈkrɪpt ˈleɪ.t̬ɚ əˌtæk/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `execute`, `defend against`, `anticipate`.

**Core meaning — English:** A cyber espionage tactic where adversaries intercept and store vast amounts of encrypted sensitive traffic today to decrypt it years later once powerful cryptanalytically relevant quantum computers exist.

**Core meaning & mental image — Tiếng Việt:** Cuộc tấn công thu thập hiện tại, giải mã tương lai (chiến thuật gom dữ liệu mã hóa chờ máy tính lượng tử ra đời để giải mã). Kẻ tấn công âm thầm hút trọn hàng nghìn gigabyte dữ liệu mã hóa tuyệt mật của chính phủ rồi lưu trữ vào các kho ổ cứng lạnh; dù hiện tại không đọc được, họ chỉ kiên nhẫn chờ ngày cỗ máy lượng tử tương lai khởi động để bung toàn bộ tài liệu mật.

**Grammar & collocations:** `defend against a harvest now, decrypt later attack` — phòng thủ trước cuộc tấn công thu thập hiện tại, giải mã tương lai; `susceptible to a harvest now, decrypt later attack` — dễ bị tổn thương trước cuộc tấn công thu thập trước giải mã sau; `intercept data for a harvest now, decrypt later attack` — chặn bắt dữ liệu cho cuộc tấn công thu thập hiện tại, giải mã tương lai.

**Register & nuance:** Bối cảnh an ninh quốc gia và tình báo mạng (*cyber espionage & nation-state threat actors*); lý do tại sao phải nâng cấp mã hóa ngay lập tức dù máy tính lượng tử chưa hoàn thiện.

**Examples:** `Intelligence agencies warn that foreign adversaries are actively mounting a harvest now, decrypt later attack against confidential defense communications.` → Các cơ quan tình báo cảnh báo rằng những kẻ đối đầu nước ngoài đang tích cực tiến hành một cuộc tấn công thu thập hiện tại, giải mã tương lai nhắm vào các liên lạc quốc phòng tuyệt mật.

**Liên kết tiếng Hàn:** `선수집 후해독 공격` (先蒐集 後解讀 攻擊) — cuộc tấn công thu thập trước, giải mã sau.

---

## 4. elliptic curve vulnerability /ɪˌlɪp.tɪk kɝːv ˌvʌl.nɚ.əˈbɪl.ə.t̬i/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `expose`, `address`, `remediate`.

**Core meaning — English:** The systemic susceptibility of elliptic-curve cryptography (ECC) algorithms (such as ECDSA and ECDH) to being broken in polynomial time by Shor's quantum algorithm.

**Core meaning & mental image — Tiếng Việt:** Lỗ hổng mật mã đường cong elip (điểm yếu cốt tử của hệ mật mã ECC trước máy tính lượng tử). Đường cong toán học elip uốn lượn vốn bảo vệ hàng tỷ giao dịch tiền điện tử và thẻ ngân hàng tưởng chừng bất khả xâm phạm, bỗng chốc trở nên trong suốt trước các phép tính ma trận lượng tử.

**Grammar & collocations:** `remediate elliptic curve vulnerability` — khắc phục lỗ hổng mật mã đường cong elip; `exposed to elliptic curve vulnerability` — bị lộ trước lỗ hổng đường cong elip; `assess elliptic curve vulnerability` — đánh giá lỗ hổng đường cong elip.

**Register & nuance:** Bối cảnh mật mã toán học (*mathematical cryptography*); giải thích tại sao các chuẩn TLS và chữ ký số hiện tại phải bị thay thế.

**Examples:** `Engineers are expediting the migration because elliptic curve vulnerability leaves critical blockchain networks exposed to future quantum attacks.` → Các kỹ sư đang đẩy nhanh quá trình di chuyển vì lỗ hổng mật mã đường cong elip khiến các mạng lưới chuỗi khối quan trọng bị phơi nhiễm trước các cuộc tấn công lượng tử trong tương lai.

**Liên kết tiếng Hàn:** `타원곡선 취약점` (楕圓曲線 脆弱點) — lỗ hổng mật mã đường cong elip.

---

## 5. lattice-based cryptography /ˈlæt̬.ɪs beɪst krɪpˈtɑː.ɡrə.fi/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `adopt`, `implement`, `standardize`.

**Core meaning — English:** A cryptographic framework built upon the mathematical difficulty of finding the shortest vector in high-dimensional geometric grids (lattices), believed to be resistant to both classical and quantum computers.

**Core meaning & mental image — Tiếng Việt:** Mật mã học dựa trên mạng lưới tinh thể (mật mã lưới đa chiều chống máy tính lượng tử). Một mạng lưới không gian hàng nghìn chiều chằng chịt các giao điểm như tinh thể kim cương; việc tìm điểm nút gần nhất là bài toán mù mịt mà ngay cả thuật toán lượng tử siêu việt cũng không tìm ra đường tắt để giải.

**Grammar & collocations:** `transition to lattice-based cryptography` — chuyển đổi sang mật mã học dựa trên mạng lưới tinh thể; `standardize lattice-based cryptography` — tiêu chuẩn hóa mật mã lưới; `lattice-based cryptography scheme` — sơ đồ mật mã học dựa trên mạng lưới.

**Register & nuance:** Trọng tâm của các chuẩn mã hóa hậu lượng tử (PQC) của NIST như ML-KEM (Kyber) và ML-DSA (Dilithium).

**Examples:** `The National Institute of Standards and Technology selected lattice-based cryptography as the primary foundation for next-generation encryption.` → Viện Tiêu chuẩn và Công nghệ Quốc gia Hoa Kỳ đã chọn mật mã học dựa trên mạng lưới tinh thể làm nền tảng chính cho hệ thống mã hóa thế hệ mới.

**Liên kết tiếng Hàn:** `격자 기반 암호` (格子 基盤 暗號) — mật mã học dựa trên mạng lưới tinh thể.

---

## 6. key encapsulation mechanism /kiː ɪnˌkæp.səˈleɪ.ʃən ˈmek.ə.nɪz.əm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `deploy`, `integrate`, `compute`.

**Core meaning — English:** A public-key encryption technique used to securely establish and transport a shared symmetric key between two parties using asymmetric mathematics (such as ML-KEM).

**Core meaning & mental image — Tiếng Việt:** Cơ chế đóng gói khóa mã hóa (phương thức bảo vệ và chuyển giao khóa đối xứng an toàn qua kênh công khai). Bên gửi tạo ra một chiếc hộp sắt bảo mật chứa khóa bí mật bên trong, khóa chặt bằng chìa khóa công khai của người nhận rồi gửi đi; chỉ người nhận có chìa khóa riêng tương ứng mới mở nắp hộp để lấy khóa đối xứng.

**Grammar & collocations:** `deploy a key encapsulation mechanism` — triển khai cơ chế đóng gói khóa mã hóa; `post-quantum key encapsulation mechanism` — cơ chế đóng gói khóa hậu lượng tử; `key encapsulation mechanism handshake` — cú bắt tay cơ chế đóng gói khóa.

**Register & nuance:** Thuật ngữ kỹ thuật tiêu chuẩn thay thế cho giao thức trao đổi khóa Diffie-Hellman truyền thống trong TLS 1.3.

**Examples:** `Browsers and cloud servers now negotiate secure sessions using a post-quantum key encapsulation mechanism to protect web traffic from eavesdropping.` → Các trình duyệt và máy chủ đám mây hiện đàm phán các phiên kết nối an toàn bằng một cơ chế đóng gói khóa mã hóa hậu lượng tử để bảo vệ lưu lượng web khỏi bị nghe lén.

**Liên kết tiếng Hàn:** `키 캡슐화 메커니즘` (Key 캡슐化 mechanism) — cơ chế đóng gói khóa mã hóa.

---

## 7. module-lattice digital signature /ˈmɑː.dʒuːl ˈlæt̬.ɪs ˈdɪdʒ.ə.t̬əl ˈsɪɡ.nə.tʃɚ/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `verify`, `issue`, `incorporate`.

**Core meaning — English:** A post-quantum digital signature scheme (such as ML-DSA, formerly Crystals-Dilithium) based on the hardness of modular lattice problems, used to verify authentic identity and document integrity.

**Core meaning & mental image — Tiếng Việt:** Chữ ký số dựa trên mạng lưới mô-đun (chữ ký điện tử kháng lượng tử dựa trên cấu trúc mạng tinh thể mô-đun). Con dấu điện tử được tạo từ các phép toán đại số mô-đun đa chiều; bất kỳ ai cũng có thể kiểm chứng dấu triện thật nhưng không một siêu máy tính nào có thể giả mạo được chữ ký này.

**Grammar & collocations:** `verify a module-lattice digital signature` — xác thực chữ ký số dựa trên mạng lưới mô-đun; `generate a module-lattice digital signature` — tạo chữ ký số dựa trên mạng lưới mô-đun; `module-lattice digital signature standard` — tiêu chuẩn chữ ký số dựa trên mạng lưới mô-đun.

**Register & nuance:** Chuẩn chữ ký số hậu lượng tử chính thức (FIPS 204) do NIST công bố năm 2024.

**Examples:** `Software developers sign operating system updates with a module-lattice digital signature to prevent unauthorized tampering by quantum adversaries.` → Các nhà phát triển phần mềm ký các bản cập nhật hệ điều hành bằng một chữ ký số dựa trên mạng lưới mô-đun để ngăn chặn sự can thiệp trái phép của những kẻ tấn công lượng tử.

**Liên kết tiếng Hàn:** `모듈 격자 전자서명` (module 格子 電子署名) — chữ ký số dựa trên mạng lưới mô-đun.

---

## 8. stateful hash-based signature /ˈsteɪt.fəl hæʃ beɪst ˈsɪɡ.nə.tʃɚ/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `sign with`, `validate`, `manage`.

**Core meaning — English:** A quantum-secure digital signature algorithm (like XMSS or LMS) relying solely on cryptographic hash functions, requiring strict state management to prevent signing keys from being reused.

**Core meaning & mental image — Tiếng Việt:** Chữ ký dựa trên hàm băm có lưu trạng thái (chữ ký số dùng cây băm đòi hỏi đếm số lần ký nghiêm ngặt). Một quyển sổ séc bảo mật có 1.000 tờ duy nhất: mỗi lần ký một văn bản, bạn phải xé bỏ một tờ và đánh dấu đã dùng; nếu vô tình ký hai lần trên cùng một số thứ tự, toàn bộ tính bảo mật của cây băm sẽ sụp đổ.

**Grammar & collocations:** `implement a stateful hash-based signature` — triển khai chữ ký dựa trên hàm băm có lưu trạng thái; `stateful hash-based signature scheme` — sơ đồ chữ ký dựa trên hàm băm có lưu trạng thái; `track keys in stateful hash-based signature` — theo dõi khóa trong chữ ký dựa trên hàm băm có trạng thái.

**Register & nuance:** Bối cảnh bảo vệ firmware và khởi động an toàn (*secure boot & firmware signing*); cực kỳ an toàn về mặt toán học nhưng đòi hỏi quản lý trạng thái khắt khe.

**Examples:** `Hardware vendors utilize a stateful hash-based signature to authenticate firmware images because its mathematical security does not rely on unproven algebraic assumptions.` → Các nhà cung cấp phần cứng sử dụng một chữ ký dựa trên hàm băm có lưu trạng thái để xác thực các hình ảnh vi chương trình vì độ an toàn toán học của nó không dựa vào các giả định đại số chưa được chứng minh.

**Liên kết tiếng Hàn:** `상태 기반 해시 전자서명` (狀態 基盤 hash 電子署名) — chữ ký dựa trên hàm băm có lưu trạng thái.

---

## 9. hybrid encryption scheme /ˈhaɪ.brɪd ɪnˈkrɪp.ʃən skiːm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `implement`, `configure`, `adopt`.

**Core meaning — English:** A dual-layered security protocol that combines a battle-tested classical algorithm (like RSA or ECDH) with a newly standardized post-quantum algorithm (like ML-KEM) so security is maintained if either fails.

**Core meaning & mental image — Tiếng Việt:** Sơ đồ mã hóa lai ghép (kết hợp đồng thời mật mã truyền thống và mật mã hậu lượng tử). Cánh cửa kho bạc được trang bị song song hai lớp khóa: một ổ khóa cơ kỳ cựu đã dùng 30 năm và một ổ khóa sinh trắc học lượng tử mới tinh; kẻ trộm phải phá được cả hai lớp cửa cùng lúc mới có thể lọt vào bên trong.

**Grammar & collocations:** `adopt a hybrid encryption scheme` — áp dụng sơ đồ mã hóa lai ghép; `configure a hybrid encryption scheme` — định cấu hình sơ đồ mã hóa lai ghép; `resilience of a hybrid encryption scheme` — tính kiên cường của sơ đồ mã hóa lai ghép.

**Register & nuance:** Chiến lược chuyển đổi thực tế được khuyến nghị rộng rãi trong giai đoạn quá độ nhằm chống lại rủi ro thuật toán PQC mới có thể chứa lỗ hổng ẩn.

**Examples:** `Major cloud platforms rolled out a hybrid encryption scheme that binds classical elliptic curves with lattice cryptography to provide immediate defense.` → Các nền tảng đám mây lớn đã triển khai một sơ đồ mã hóa lai ghép liên kết các đường cong elip cổ điển với mật mã lưới để cung cấp khả năng phòng thủ ngay tức thì.

**Liên kết tiếng Hàn:** `하이브리드 암호화 방식` (hybrid 暗號化 方式) — sơ đồ mã hóa lai ghép.

---

## 10. cryptographic bill of materials /ˌkrɪp.təˈɡræf.ɪk bɪl əv məˈtɪr.i.əlz/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `generate`, `audit`, `inspect`.

**Core meaning — English:** A formal, structured inventory detailing every cryptographic asset, algorithm, key length, certificate, and protocol embedded within an organization's software applications and hardware infrastructure.

**Core meaning & mental image — Tiếng Việt:** Bản danh mục tài sản mật mã (bảng kê khai toàn diện các thuật toán, chứng chỉ và độ dài khóa trong hệ thống). Một bản kê khai hải quan chi tiết từng con ốc vít mã hóa trong toàn bộ cỗ máy phần mềm của tập đoàn: từ thuật toán băm trong cơ sở dữ liệu, khóa RSA 2048-bit trên máy chủ đến chữ ký số trong ứng dụng di động.

**Grammar & collocations:** `generate a cryptographic bill of materials` — tạo bản danh mục tài sản mật mã; `export the cryptographic bill of materials` — xuất bản danh mục tài sản mật mã; `inspect the cryptographic bill of materials` — kiểm tra bản danh mục tài sản mật mã.

**Register & nuance:** Thuật ngữ an toàn chuỗi cung ứng phần mềm (*software supply chain security*); viết tắt là CBOM, công cụ tiên quyết để bắt đầu di chuyển PQC.

**Examples:** `Before beginning the quantum transition, the chief information security officer mandated a comprehensive cryptographic bill of materials for all core banking services.` → Trước khi bắt đầu quá trình chuyển đổi lượng tử, giám đốc an toàn thông tin đã bắt buộc phải có một bản danh mục tài sản mật mã toàn diện cho tất cả các dịch vụ ngân hàng lõi.

**Liên kết tiếng Hàn:** `암호화 자산 명세서` (暗號化 資產 明細書) — bản danh mục tài sản mật mã.

---

## 11. automated cryptographic discovery /ˈɑː.t̬ə.meɪ.t̬ɪd ˌkrɪp.təˈɡræf.ɪk dɪˈskʌv.ɚ.i/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `conduct`, `initiate`, `rely on`.

**Core meaning — English:** The algorithmic scanning of source code, network traffic, binaries, and system configurations to identify, catalog, and analyze active cryptographic mechanisms without manual inspection.

**Core meaning & mental image — Tiếng Việt:** Sự rà soát phát hiện mật mã tự động (dùng công cụ quét tự động tìm kiếm mọi vị trí sử dụng mã hóa trong hệ thống). Một chiếc máy quét radar tự động rà quét hàng triệu dòng code và lưu lượng mạng doanh nghiệp; phát hiện ngay lập tức những hàm mã hóa cổ điển bị chôn vùi trong các thư viện lập trình từ mười năm trước.

**Grammar & collocations:** `conduct automated cryptographic discovery` — tiến hành rà soát phát hiện mật mã tự động; `tools for automated cryptographic discovery` — các công cụ rà soát phát hiện mật mã tự động; `continuous automated cryptographic discovery` — quá trình rà soát phát hiện mật mã tự động liên tục.

**Register & nuance:** Bối cảnh quản trị an ninh không gian mạng doanh nghiệp (*cybersecurity posture management*); bước đầu tiên trong lộ trình chuyển đổi PQC.

**Examples:** `Enterprise scanning tools perform automated cryptographic discovery to locate vulnerable RSA certificates hidden across legacy internal networks.` → Các công cụ quét doanh nghiệp thực hiện sự rà soát phát hiện mật mã tự động để định vị các chứng chỉ RSA dễ bị tổn thương đang ẩn náu trên khắp các mạng nội bộ cũ.

**Liên kết tiếng Hàn:** `자동화 암호 자산 탐지` (自動化 暗號 資產 探知) — sự phát hiện tài sản mật mã tự động.

---

## 12. legacy algorithm sunsetting /ˈleɡ.ə.si ˈæl.ɡə.rɪð.əm ˈsʌn.setɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `accelerate`, `manage`, `mandate`.

**Core meaning — English:** The planned, phased phase-out and formal retirement of obsolete cryptographic algorithms (such as RSA-2048, 3DES, or SHA-1) that no longer meet security standards.

**Core meaning & mental image — Tiếng Việt:** Việc loại bỏ theo lộ trình các thuật toán cũ (hoạt động cho 'nghỉ hưu' dần các thuật toán mật mã lỗi thời). Mặt trời lặn dần báo hiệu sự kết thúc của một kỷ nguyên: hệ thống đặt ra các mốc thời gian dứt khoát, đến ngày quy định sẽ chính thức khóa cổng và từ chối mọi chứng chỉ sử dụng thuật toán mã hóa cổ xưa.

**Grammar & collocations:** `mandate legacy algorithm sunsetting` — bắt buộc loại bỏ theo lộ trình các thuật toán cũ; `accelerate legacy algorithm sunsetting` — đẩy nhanh việc loại bỏ theo lộ trình các thuật toán cũ; `timeline for legacy algorithm sunsetting` — thời gian biểu cho việc loại bỏ theo lộ trình các thuật toán cũ.

**Register & nuance:** Quản trị tuân thủ tiêu chuẩn an toàn mạng (*governance & regulatory compliance*); liên quan trực tiếp đến các hướng dẫn từ NIST và CISA.

**Examples:** `Regulatory authorities have accelerated legacy algorithm sunsetting, requiring financial institutions to drop RSA-2048 support by 2030.` → Các cơ quan quản lý đã đẩy nhanh việc loại bỏ theo lộ trình các thuật toán cũ, yêu cầu các định chế tài chính phải dừng hỗ trợ RSA-2048 trước năm 2030.

**Liên kết tiếng Hàn:** `구형 알고리즘 단계적 폐기` (舊型 algorithm 段階的 廢棄) — việc loại bỏ theo lộ trình thuật toán cũ.

---

## 13. post-RSA migration roadmap /poʊst ˌɑːr.esˈeɪ maɪˈɡreɪ.ʃən ˈroʊd.mæp/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `draft`, `execute`, `publish`.

**Core meaning — English:** A multi-year strategic and operational transition plan outlining milestones, budgets, and technical requirements for replacing RSA cryptography with post-quantum standards.

**Core meaning & mental image — Tiếng Việt:** Lộ trình di chuyển hậu RSA (kế hoạch chiến lược nhiều năm thay thế toàn diện hệ mật mã RSA). Một bản đồ chỉ đường chi tiết chia theo từng quý: quý 1 rà soát kho mật mã, quý 2 thử nghiệm sơ đồ lai ghép, quý 3 thay thế chứng chỉ gốc, hướng tới việc thay thế hoàn toàn công nghệ RSA cổ điển.

**Grammar & collocations:** `publish a post-RSA migration roadmap` — công bố lộ trình di chuyển hậu RSA; `execute the post-RSA migration roadmap` — thực thi lộ trình di chuyển hậu RSA; `milestones in a post-RSA migration roadmap` — các mốc quan trọng trong lộ trình di chuyển hậu RSA.

**Register & nuance:** Bối cảnh hoạch định chiến lược công nghệ thông tin (*strategic IT planning & cybersecurity roadmap*).

**Examples:** `The agency published a detailed post-RSA migration roadmap outlining exact deadlines for upgrading government data centers to quantum-safe standards.` → Cơ quan này đã công bố một lộ trình di chuyển hậu RSA chi tiết vạch ra các hạn chót chuẩn xác để nâng cấp các trung tâm dữ liệu chính phủ lên các tiêu chuẩn an toàn lượng tử.

**Liên kết tiếng Hàn:** `포스트 RSA 전환 로드맵` (post RSA 轉換 roadmap) — lộ trình chuyển đổi hậu RSA.

---

## 14. cipher suite deprecation /ˈsaɪ.fɚ swiːt ˌdep.rəˈkeɪ.ʃən/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `enforce`, `schedule`, `announce`.

**Core meaning — English:** The formal declaration and technical disabling of specific collections of cryptographic algorithms (ciphers, key exchanges, and hash functions) that are vulnerable to modern attacks.

**Core meaning & mental image — Tiếng Việt:** Sự ngừng dùng bộ mã hóa (việc chính thức vô hiệu hóa các gói thuật toán mã hóa lỗi thời). Bộ phận quản trị máy chủ bấm nút gạt bỏ các bộ mã hóa cũ khỏi danh sách đàm phán TLS; bất kỳ máy khách nào cố gắng sử dụng các gói mã hóa dễ bị tổn thương này sẽ bị máy chủ từ chối kết nối ngay lập tức.

**Grammar & collocations:** `enforce cipher suite deprecation` — thực thi việc ngừng dùng bộ mã hóa; `announce cipher suite deprecation` — thông báo việc ngừng dùng bộ mã hóa; `timeline for cipher suite deprecation` — thời gian biểu ngừng dùng bộ mã hóa.

**Register & nuance:** Bối cảnh cấu hình bảo mật mạng và máy chủ web (*web server administration & network security*).

**Examples:** `Network administrators enforced cipher suite deprecation on public web servers to block incoming traffic using unhardened key exchange protocols.` → Các quản trị viên mạng đã thực thi sự ngừng dùng bộ mã hóa trên các máy chủ web công cộng để chặn lưu lượng truy cập gửi đến sử dụng các giao thức trao đổi khóa chưa được củng cố.

**Liên kết tiếng Hàn:** `암호화 제품군 지원 중단` (暗號化 製品群 支援 中斷) — sự ngừng dùng bộ mã hóa.

---

## 15. quantum key distribution /ˈkwɑːn.t̬əm kiː ˌdɪs.trɪˈbjuː.ʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `deploy`, `leverage`, `establish`.

**Core meaning — English:** A secure communication method that utilizes quantum mechanics (specifically photon states) to generate and distribute secret keys, where any eavesdropping physically alters the signal and is instantly detected.

**Core meaning & mental image — Tiếng Việt:** Phân phối khóa lượng tử (phương pháp truyền khóa bí mật dựa trên hạt ánh sáng lượng tử). Hai bên liên lạc gửi các photon ánh sáng đơn lẻ qua sợi cáp quang; theo nguyên lý bất định Heisenberg, nếu có kẻ thứ ba lén nhìn vào để trộm khóa, trạng thái lượng tử của hạt photon sẽ bị xáo trộn ngay lập tức, làm chuông báo động reo lên và hủy bỏ khóa đó.

**Grammar & collocations:** `deploy quantum key distribution` — triển khai phân phối khóa lượng tử; `fiber-optic quantum key distribution` — phân phối khóa lượng tử qua cáp quang; `quantum key distribution network` — mạng lưới phân phối khóa lượng tử.

**Register & nuance:** Mật mã học vật lý lượng tử (*quantum physics & optical communications*); viết tắt là QKD; phân biệt với mật mã hậu lượng tử toán học (PQC).

**Examples:** `Telecommunications providers deployed quantum key distribution along underground optical fibers to secure cross-city interbank settlement transactions.` → Các nhà cung cấp viễn thông đã triển khai phân phối khóa lượng tử dọc theo các đường cáp quang ngầm để bảo đảm an toàn cho các giao dịch thanh toán liên ngân hàng liên thành phố.

**Liên kết tiếng Hàn:** `양자 암호 키 분배` (量子 暗號 key 分配) — phân phối khóa lượng tử.

---

## 16. photon polarization key exchange /ˈfoʊ.tɑːn ˌpoʊ.lɚ.əˈzeɪ.ʃən kiː ɪksˈtʃeɪndʒ/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `implement`, `measure`, `calibrate`.

**Core meaning — English:** The optical mechanism within QKD (such as the BB84 protocol) where binary bits of a cryptographic key are encoded onto the polarization angles of individual photons.

**Core meaning & mental image — Tiếng Việt:** Sự trao đổi khóa bằng phân cực photon (mã hóa các bit khóa mã hóa vào góc nghiêng của hạt ánh sáng). Một máy phát laser bắn từng hạt ánh sáng đơn lẻ nghiêng theo các góc 0°, 45°, 90° hoặc 135°; mỗi góc nghiêng tượng trưng cho bit 0 hoặc 1, tạo nên một chuỗi khóa bí mật thuần túy vật lý.

**Grammar & collocations:** `calibrate photon polarization key exchange` — hiệu chuẩn sự trao đổi khóa bằng phân cực photon; `photon polarization key exchange protocol` — giao thức trao đổi khóa bằng phân cực photon; `stability of photon polarization key exchange` — độ ổn định của sự trao đổi khóa bằng phân cực photon.

**Register & nuance:** Bối cảnh quang học lượng tử chuyên sâu (*quantum optics & optical physics*).

**Examples:** `Researchers improved the precision of photon polarization key exchange, achieving unprecedented transmission distances over specialized optical links.` → Các nhà nghiên cứu đã cải thiện độ chính xác của sự trao đổi khóa bằng phân cực photon, đạt được khoảng cách truyền tải chưa từng có trên các đường truyền quang học chuyên dụng.

**Liên kết tiếng Hàn:** `광자 편광 키 교환` (光子 偏光 key 交換) — sự trao đổi khóa bằng phân cực photon.

---

## 17. quantum random number generator /ˈkwɑːn.t̬əm ˈræn.dəm ˈnʌm.bɚ ˈdʒen.ə.reɪ.t̬ɚ/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `embed`, `integrate`, `query`.

**Core meaning — English:** A hardware device that harnesses fundamental quantum physical phenomena (such as radioactive decay or photon phase noise) to produce truly unpredictable, non-deterministic random numbers for cryptographic keys.

**Core meaning & mental image — Tiếng Việt:** Bộ tạo số ngẫu nhiên lượng tử (thiết bị sinh số ngẫu nhiên thực sự dựa trên hiện tượng lượng tử). Thay vì dùng các thuật toán toán học giả lập số ngẫu nhiên vốn có thể bị đoán trước, con chip này đo sự nhiễu loạn lượng tử ngẫu nhiên thuần túy của các hạt photon va đập, tạo ra những chuỗi số ngẫu nhiên tuyệt đối không ai có thể dự đoán.

**Grammar & collocations:** `integrate a quantum random number generator` — tích hợp bộ tạo số ngẫu nhiên lượng tử; `chip-scale quantum random number generator` — bộ tạo số ngẫu nhiên lượng tử kích thước vi chip; `entropy from a quantum random number generator` — độ hỗn loạn từ bộ tạo số ngẫu nhiên lượng tử.

**Register & nuance:** Viết tắt là QRNG; linh kiện phần cứng nền tảng trong các thiết bị mật mã cao cấp và điện thoại bảo mật.

**Examples:** `The security chip incorporates a miniature quantum random number generator to harvest pure physical entropy for session key generation.` → Con chip bảo mật tích hợp một bộ tạo số ngẫu nhiên lượng tử thu nhỏ để thu thập độ hỗn loạn vật lý thuần khiết cho việc tạo khóa phiên.

**Liên kết tiếng Hàn:** `양자 난수 생성기` (量子 亂數 生成器) — bộ tạo số ngẫu nhiên lượng tử.

---

## 18. hardware security module firmware /ˈhɑːrd.wer səˈkjʊr.ə.t̬i ˈmɑː.dʒuːl ˈfɝːm.wer/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `flash`, `upgrade`, `validate`.

**Core meaning — English:** The low-level embedded software operating inside tamper-resistant cryptographic coprocessors (HSMs) that executes encryption algorithms and safeguards root keys.

**Core meaning & mental image — Tiếng Việt:** Vi chương trình của mô-đun bảo mật phần cứng (phần mềm nhúng điều khiển thiết bị HSM chống can thiệp). Tầng phần mềm cốt lõi chạy bên trong chiếc két sắt kim loại bọc kín; kiểm soát mọi thao tác mã hóa và ký số, nếu phát hiện có người cạy vỏ thiết bị sẽ lập tức tự hủy toàn bộ dữ liệu khóa.

**Grammar & collocations:** `upgrade hardware security module firmware` — nâng cấp vi chương trình của mô-đun bảo mật phần cứng; `patch hardware security module firmware` — vá lỗi vi chương trình HSM; `certified hardware security module firmware` — vi chương trình mô-đun bảo mật phần cứng đã được chứng nhận.

**Register & nuance:** Bối cảnh an ninh phần cứng ngân hàng và viễn thông (*HSM engineering & cryptographic hardware*).

**Examples:** `Engineers flashed upgraded hardware security module firmware to enable native support for post-quantum lattice signature algorithms.` → Các kỹ sư đã nạp vi chương trình của mô-đun bảo mật phần cứng được nâng cấp để kích hoạt hỗ trợ gốc cho các thuật toán chữ ký mạng lưới hậu lượng tử.

**Liên kết tiếng Hàn:** `하드웨어 보안 모듈 펌웨어` (hardware 保安 module firmware) — vi chương trình của mô-đun bảo mật phần cứng.

---

## 19. tamper-evident key transport /ˈtæm.pɚ ˌev.ə.dənt kiː ˈtræns.pɔːrt/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `ensure`, `establish`, `audit`.

**Core meaning — English:** A secure packaging or transmission protocol for cryptographic keys that provides unmistakable physical or mathematical proof if an unauthorized party has attempted to intercept or inspect the key material.

**Core meaning & mental image — Tiếng Việt:** Sự vận chuyển khóa có bằng chứng chống can thiệp (giao thức chuyển giao khóa bảo mật để lại dấu vết rõ ràng nếu bị xâm nhập). Một chiếc cặp niêm phong đặc biệt có dán tem nhiệt hoặc mã hóa lượng tử; chỉ cần kẻ trộm hé mắt nhìn trộm hay bóc nhẹ góc mép tem, toàn bộ lớp bảo vệ sẽ đổi màu hoặc vỡ vụn, để lại bằng chứng không thể chối cãi.

**Grammar & collocations:** `ensure tamper-evident key transport` — bảo đảm sự vận chuyển khóa có bằng chứng chống can thiệp; `protocols for tamper-evident key transport` — các giao thức vận chuyển khóa có bằng chứng chống can thiệp; `tamper-evident key transport mechanism` — cơ chế vận chuyển khóa có bằng chứng can thiệp.

**Register & nuance:** Bối cảnh quản lý vòng đời khóa mật mã và phân phối khóa quân sự/chính phủ (*key lifecycle management & secure logistics*).

**Examples:** `High-assurance defense networks rely on tamper-evident key transport to guarantee that operational cryptographic seeds remain uncompromised during courier transit.` → Các mạng lưới quốc phòng độ tin cậy cao dựa vào sự vận chuyển khóa có bằng chứng chống can thiệp để bảo đảm rằng các hạt giống mật mã tác chiến không bị xâm phạm trong quá trình vận chuyển bằng giao thông viên.

**Liên kết tiếng Hàn:** `변조 방지 확인 키 전송` (變造 防止 確認 key 傳送) — sự vận chuyển khóa có bằng chứng can thiệp.

---

## 20. root key rollover /ruːt kiː ˈroʊlˌoʊ.vɚ/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `execute`, `orchestrate`, `schedule`.

**Core meaning — English:** The complex administrative and technical process of retiring a master cryptographic root signing key and activating a newly generated key pair across a trust hierarchy without breaking valid digital certificates.

**Core meaning & mental image — Tiếng Việt:** Sự luân chuyển khóa gốc (quy trình đổi khóa ký gốc tối cao trong hệ thống phân cấp chứng chỉ số). Giống như việc thay đổi con dấu vàng hoàng gia của triều đình: triều đình công bố con dấu mới trước công chúng, đóng dấu ủy quyền đồng thời cả dấu cũ và mới trong thời kỳ chuyển tiếp, rồi chính thức niêm phong dấu cũ vào viện bảo tàng.

**Grammar & collocations:** `execute a root key rollover` — thực hiện sự luân chuyển khóa gốc; `orchestrate a root key rollover` — điều phối sự luân chuyển khóa gốc; `automated root key rollover` — sự luân chuyển khóa gốc tự động.

**Register & nuance:** Thuật ngữ quản trị hạ tầng khóa công khai (PKI) và DNSSEC (*PKI governance & DNSSEC operations*).

**Examples:** `The domain name authority orchestrated a global root key rollover to inject quantum-resistant signature algorithms into the internet's core trust anchor.` → Cơ quan quản lý tên miền đã điều phối một sự luân chuyển khóa gốc toàn cầu để tích hợp các thuật toán chữ ký kháng lượng tử vào điểm neo tin cậy cốt lõi của mạng internet.

**Liên kết tiếng Hàn:** `루트 키 롤오버` (root key rollover) — sự luân chuyển khóa gốc.

---

## 21. post-quantum certificate hierarchy /poʊst ˈkwɑːn.t̬əm sɚˈtɪf.ə.kət ˈhaɪ.rɑːr.ki/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `build`, `establish`, `validate`.

**Core meaning — English:** A multi-tiered structure of Certificate Authorities (Root, Intermediate, and Leaf) whose public certificates and cross-signatures are validated exclusively using quantum-resistant signature schemes.

**Core meaning & mental image — Tiếng Việt:** Hệ thống phân cấp chứng chỉ hậu lượng tử (cây chứng chỉ số nhiều tầng sử dụng hoàn toàn thuật toán kháng lượng tử). Một cây phả hệ số vững chắc: cơ quan chứng thực gốc cấp cao nhất giữ khóa bảo mật lượng tử, ký chứng thực cho các cơ quan trung gian, rồi cơ quan trung gian cấp chứng chỉ xanh cho từng trang web mà không sợ bị máy tính lượng tử làm giả.

**Grammar & collocations:** `establish a post-quantum certificate hierarchy` — thiết lập hệ thống phân cấp chứng chỉ hậu lượng tử; `validate the post-quantum certificate hierarchy` — xác thực hệ thống phân cấp chứng chỉ hậu lượng tử; `trust within the post-quantum certificate hierarchy` — sự tin cậy bên trong hệ thống phân cấp chứng chỉ hậu lượng tử.

**Register & nuance:** Bối cảnh kiến trúc PKI thế hệ mới (*next-generation public-key infrastructure*).

**Examples:** `Enterprise IT established a post-quantum certificate hierarchy to issue quantum-proof credentials for internal microservices.` → Bộ phận CNTT doanh nghiệp đã thiết lập một hệ thống phân cấp chứng chỉ hậu lượng tử để cấp phát các chứng chỉ kháng lượng tử cho các dịch vụ vi mô nội bộ.

**Liên kết tiếng Hàn:** `포스트 양자 인증서 계층 구조` (post 量子 認證書 階層 構造) — hệ thống phân cấp chứng chỉ hậu lượng tử.

---

## 22. key derivation hardening /kiː ˌder.əˈveɪ.ʃən ˈhɑːr.dən.ɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `apply`, `implement`, `strengthen`.

**Core meaning — English:** The reinforcement of key derivation functions (KDFs) through increased iteration counts, memory-hard algorithms (like Argon2), and larger output bit lengths to resist Grover's quantum search algorithm.

**Core meaning & mental image — Tiếng Việt:** Sự củng cố hàm phái sinh khóa (tăng cường độ bền toán học khi tạo khóa phụ từ mật khẩu gốc để chống lượng tử). Biến một chiếc chìa khóa thành một khối mê cung phức tạp bằng cách buộc máy tính phải lặp lại phép biến đổi hàng triệu lần và tốn hàng gigabyte bộ nhớ RAM; khiến cho thuật toán tìm kiếm lượng tử của Grover cũng không thể dò ra khóa gốc.

**Grammar & collocations:** `apply key derivation hardening` — áp dụng sự củng cố hàm phái sinh khóa; `key derivation hardening parameters` — các tham số củng cố hàm phái sinh khóa; `resist quantum attacks through key derivation hardening` — chống lại các cuộc tấn công lượng tử thông qua củng cố hàm phái sinh khóa.

**Register & nuance:** Bối cảnh an toàn mật khẩu và mật mã đối xứng (*symmetric cryptography & password hashing*).

**Examples:** `System architects implemented key derivation hardening by doubling output salt lengths and selecting memory-intensive hash parameters.` → Các kiến trúc sư hệ thống đã thực hiện sự củng cố hàm phái sinh khóa bằng cách nhân đôi độ dài chuỗi muối đầu ra và chọn các tham số băm tiêu tốn nhiều bộ nhớ.

**Liên kết tiếng Hàn:** `키 유도 함수 강화` (key 誘導 函數 强化) — sự củng cố hàm phái sinh khóa.

---

## 23. cryptographic compliance audit /ˌkrɪp.təˈɡræf.ɪk kəmˈplaɪ.əns ˈɑː.dɪt/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `conduct`, `pass`, `require`.

**Core meaning — English:** An independent, systematic review that assesses whether an organization's cryptographic algorithms, key lengths, and storage practices conform to post-quantum regulatory mandates.

**Core meaning & mental image — Tiếng Việt:** Cuộc kiểm toán tuân thủ mật mã (đợt thanh tra độc lập đánh giá mức độ đáp ứng các quy chuẩn mã hóa mới). Một đoàn thanh tra an ninh mạng soi từng dòng lệnh và chứng chỉ số của ngân hàng; lập biên bản kiểm tra xem hệ thống đã loại bỏ hết thuật toán cũ và đáp ứng đúng các quy định an toàn lượng tử của nhà nước hay chưa.

**Grammar & collocations:** `conduct a cryptographic compliance audit` — tiến hành cuộc kiểm toán tuân thủ mật mã; `pass a cryptographic compliance audit` — vượt qua cuộc kiểm toán tuân thủ mật mã; `prepare for a cryptographic compliance audit` — chuẩn bị cho cuộc kiểm toán tuân thủ mật mã.

**Register & nuance:** Quản trị an ninh mạng và kiểm toán doanh nghiệp (*cybersecurity governance, risk & compliance — GRC*).

**Examples:** `The defense contractor passed its cryptographic compliance audit after demonstrating that all export-controlled data was shielded by approved post-quantum ciphers.` → Nhà thầu quốc phòng đã vượt qua cuộc kiểm toán tuân thủ mật mã sau khi chứng minh rằng mọi dữ liệu thuộc diện kiểm soát xuất khẩu đều được che chắn bởi các mật mã hậu lượng tử đã được phê duyệt.

**Liên kết tiếng Hàn:** `암호화 컴플라이언스 감사` (暗號化 compliance 監査) — cuộc kiểm toán tuân thủ mật mã.

---

## 24. quantum threat timeline /ˈkwɑːn.t̬əm θret ˈtaɪm.laɪn/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `track`, `project`, `reassess`.

**Core meaning — English:** The estimated strategic window and projected years within which a cryptanalytically relevant quantum computer (CRQC) will be capable of breaking public-key cryptography.

**Core meaning & mental image — Tiếng Việt:** Khung thời gian đe dọa lượng tử (dự báo mốc thời gian máy tính lượng tử đủ mạnh để bẻ khóa mật mã toàn cầu). Một chiếc đồng hồ đếm ngược chiến lược do các nhà khoa học vẽ ra: dự báo khoảng năm 2030 đến 2035 cỗ máy lượng tử sẽ chạm ngưỡng hàng nghìn qubit vật lý có khả năng bẻ khóa, thôi thúc các doanh nghiệp phải hoàn thành chuyển đổi trước khi kim đồng hồ chỉ đúng giờ G.

**Grammar & collocations:** `project a quantum threat timeline` — dự báo khung thời gian đe dọa lượng tử; `accelerated quantum threat timeline` — khung thời gian đe dọa lượng tử bị rút ngắn; `adjust to the quantum threat timeline` — điều chỉnh theo khung thời gian đe dọa lượng tử.

**Register & nuance:** Bối cảnh quản trị rủi ro công nghệ và tình báo chiến lược (*strategic risk modeling & quantum intelligence*).

**Examples:** `According to the latest quantum threat timeline, organizations have less than a decade to transition their core transactional systems to post-RSA cryptography.` → Theo khung thời gian đe dọa lượng tử mới nhất, các tổ chức có chưa đầy một thập kỷ để chuyển đổi các hệ thống giao dịch cốt lõi của họ sang mật mã học hậu RSA.

**Liên kết tiếng Hàn:** `양자 위협 타임라인` (量子 威脅 timeline) — khung thời gian đe dọa lượng tử.

---

## 25. legacy cipher decommission /ˈleɡ.ə.si ˈsaɪ.fɚ ˌdiː.kəˈmɪʃ.ən/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `complete`, `finalize`, `verify`.

**Core meaning — English:** The permanent deactivation, removal, and cryptographic destruction of outdated cipher implementations and keys from production environments.

**Core meaning & mental image — Tiếng Việt:** Việc ngừng vận hành hoàn toàn mật mã cũ (quy trình xóa bỏ vĩnh viễn và chấm dứt hoạt động của các thuật toán mã hóa lỗi thời). Trạm biến áp mật mã cũ chính thức bị ngắt cầu dao; các chứng chỉ RSA và 3DES bị thu hồi, mã nguồn cũ bị xóa bỏ khỏi hệ thống sản xuất, khép lại hoàn toàn kỷ nguyên mật mã cổ điển để nhường chỗ cho kỷ nguyên an toàn lượng tử.

**Grammar & collocations:** `finalize legacy cipher decommission` — hoàn tất việc ngừng vận hành hoàn toàn mật mã cũ; `verify legacy cipher decommission` — xác minh việc ngừng vận hành hoàn toàn mật mã cũ; `legacy cipher decommission phase` — giai đoạn ngừng vận hành hoàn toàn mật mã cũ.

**Register & nuance:** Hoạt động kỹ thuật cuối cùng trong vòng đời chuyển đổi công nghệ (*IT decommissioning & lifecycle management*).

**Examples:** `The operations team verified the legacy cipher decommission across all production clusters, ensuring no fallbacks to unhardened algorithms remained.` → Đội ngũ vận hành đã xác minh việc ngừng vận hành hoàn toàn mật mã cũ trên tất cả các cụm máy chủ sản xuất, bảo đảm không còn bất kỳ cơ chế dự phòng nào quay về các thuật toán chưa được củng cố.

**Liên kết tiếng Hàn:** `구형 암호 체계 폐기` (舊型 暗號 體系 廢棄) — việc ngừng vận hành hoàn toàn mật mã cũ.

---

## Review in context (Part 1: Quantum Decryption Threats & Algorithmic Transition)

To maintain long-term digital sovereignty in an era of rapid computing advancements, forward-looking enterprises actively cultivate **cryptographic agility** across their software architectures. IT departments recognize that the imminent **Shor's algorithm threat** poses an existential danger to asymmetric standards that have anchored cybersecurity for decades. Even though cryptanalytically relevant quantum machines are still under development, adversaries are already executing a sophisticated **harvest now, decrypt later attack**, vacuuming up petabytes of encrypted financial transmissions with the intent to unlock them retrospectively. This espionage vulnerability is compounded by acute **elliptic curve vulnerability**, which leaves ubiquitous key exchange handshakes defenseless against future polynomial-time factorization.

In response, national standards institutes have mandated a shift toward robust **lattice-based cryptography**, which relies on multidimensional geometric problems immune to quantum speedup. When establishing transport layer security sessions, systems now configure an advanced **key encapsulation mechanism** to exchange shared secret seeds securely. To guarantee provenance and non-repudiation, enterprise certificate authorities validate system firmware with an authentic **module-lattice digital signature**. For specialized embedded equipment with static flash storage, engineers implement a rigorous **stateful hash-based signature** to guarantee immutable boot integrity without relying on algebraic assumptions. During the delicate transitional period, security teams deploy a resilient **hybrid encryption scheme**, wrapping classical ciphers inside quantum-resistant envelopes to preserve dual-layered defenses. To systematically manage this massive modernization, organizations generate an exhaustive **cryptographic bill of materials**, identifying every deployed cipher and certificate. They support this inventory through continuous **automated cryptographic discovery**, ensuring no uncataloged dependencies remain unnoticed. Finally, compliance frameworks dictate accelerated **legacy algorithm sunsetting**, compelling legacy software vendors to deprecate RSA and Diffie-Hellman protocols before catastrophic breaches occur.

**Bản dịch tiếng Việt:**

Để duy trì chủ quyền kỹ thuật số lâu dài trong kỷ nguyên tiến bộ máy tính nhanh chóng, các doanh nghiệp có tư duy tiến bộ chủ động trau dồi **tính linh hoạt mật mã** (**cryptographic agility**) trên khắp các kiến trúc phần mềm của họ. Các bộ phận CNTT nhận thức rằng **mối đe dọa từ thuật toán Shor** (**Shor's algorithm threat**) sắp xảy ra mang lại một nguy cơ sinh tồn đối với các tiêu chuẩn bất đối xứng vốn đã neo giữ an ninh mạng trong nhiều thập kỷ. Mặc dù các cỗ máy lượng tử có khả năng phân tích mật mã vẫn đang trong quá trình phát triển, các đối thủ đã và đang thực hiện một **cuộc tấn công thu thập hiện tại, giải mã tương lai** (**harvest now, decrypt later attack**) tinh vi, hút sạch hàng petabyte đường truyền tài chính được mã hóa với ý định giải mã chúng sau này. Lỗ hổng gián điệp này càng trở nên nghiêm trọng bởi **lỗ hổng mật mã đường cong elip** (**elliptic curve vulnerability**) sâu sắc, khiến các cú bắt tay trao đổi khóa phổ biến không còn khả năng phòng thủ trước các phép phân tích đa thức trong tương lai.

Để phản ứng lại, các viện tiêu chuẩn quốc gia đã bắt buộc chuyển dịch sang **mật mã học dựa trên mạng lưới tinh thể** (**lattice-based cryptography**) vững chắc, vốn dựa trên các bài toán hình học đa chiều miễn nhiễm với khả năng tăng tốc lượng tử. Khi thiết lập các phiên bảo mật tầng truyền vận, các hệ thống hiện định cấu hình một **cơ chế đóng gói khóa mã hóa** (**key encapsulation mechanism**) tiên tiến để trao đổi các hạt giống bí mật chung một cách an toàn. Để bảo đảm nguồn gốc và tính không thể chối bỏ, các tổ chức chứng thực chứng chỉ doanh nghiệp xác thực vi chương trình hệ thống bằng một **chữ ký số dựa trên mạng lưới mô-đun** (**module-lattice digital signature**) chân thực. Đối với các thiết bị nhúng chuyên dụng có bộ nhớ flash tĩnh, các kỹ sư triển khai một **chữ ký dựa trên hàm băm có lưu trạng thái** (**stateful hash-based signature**) nghiêm ngặt để bảo đảm tính toàn vẹn khởi động bất biến mà không cần dựa vào các giả định đại số. Trong thời kỳ chuyển tiếp nhạy cảm, các nhóm bảo mật triển khai một **sơ đồ mã hóa lai ghép** (**hybrid encryption scheme**) kiên cường, bọc các mật mã cổ điển bên trong các phong bì kháng lượng tử để bảo tồn các lớp phòng thủ kép. Để quản lý quá trình hiện đại hóa quy mô lớn này một cách có hệ thống, các tổ chức tạo ra một **bản danh mục tài sản mật mã** (**cryptographic bill of materials**) thấu đáo, nhận diện từng mật mã và chứng chỉ được triển khai. Họ hỗ trợ bản kiểm kê này thông qua **sự rà soát phát hiện mật mã tự động** (**automated cryptographic discovery**) liên tục, bảo đảm không có phần phụ thuộc nào chưa được lập danh mục bị bỏ sót. Cuối cùng, các khuôn khổ tuân thủ quy định **việc loại bỏ theo lộ trình các thuật toán cũ** (**legacy algorithm sunsetting**) nhanh hơn, buộc các nhà cung cấp phần mềm cũ phải ngừng sử dụng các giao thức RSA và Diffie-Hellman trước khi các vụ vi phạm thảm khốc xảy ra.

---

## Review in context (Part 2: Implementation, Hardware Security & Quantum Distribution)

Operationalizing post-quantum security across global enterprise infrastructure requires executing a structured **post-RSA migration roadmap** that synchronizes technical upgrades with capital budgets. Cloud architects enforce systematic **cipher suite deprecation**, systematically deactivating outdated cryptographic handshakes across all edge load balancers. For ultra-sensitive financial backbones where mathematical assumptions alone are deemed insufficient, governments deploy physical **quantum key distribution**, utilizing underground fiber cables to transmit cryptographic keys with absolute physical security guarantees. Within these physical links, specialized optics calibrate **photon polarization key exchange**, ensuring that any eavesdropping attempt instantly collapses quantum superpositions and alerts network supervisors. To feed pristine randomness into these cryptographic engines, secure data centers embed a hardware **quantum random number generator**, harvesting quantum noise rather than algorithmic pseudo-random calculations.

At the physical endpoint level, hardware engineers flash upgraded **hardware security module firmware** to enable tamper-resistant microcontrollers to store lattice private keys natively. When exchanging master keys between offline facilities, organizations mandate certified **tamper-evident key transport**, ensuring any physical compromise during transit is immediately revealed. Trust authorities orchestrate an intricate **root key rollover**, replacing legacy master public keys with quantum-proof key pairs without breaking active web certificates. Simultaneously, systems build a robust **post-quantum certificate hierarchy** that chains subordinate intermediate authorities directly to quantum-safe root anchors. In parallel, database administrators enforce rigorous **key derivation hardening**, increasing iteration costs and memory requirements to protect symmetric credentials against quantum brute-forcing. Before granting production clearances, risk officers perform a stringent **cryptographic compliance audit** to verify complete adherence to federal encryption benchmarks. Throughout this multi-year transformation, executive leadership monitors the projected **quantum threat timeline**, adjusting engineering investments to stay ahead of quantum hardware breakthroughs. Finally, systems teams verify the comprehensive **legacy cipher decommission**, permanently expunging obsolete algorithms and cementing an impregnable security baseline.

**Bản dịch tiếng Việt:**

Việc đưa an ninh hậu lượng tử vào hoạt động thực tế trên khắp cơ sở hạ tầng doanh nghiệp toàn cầu đòi hỏi phải thực thi một **lộ trình di chuyển hậu RSA** (**post-RSA migration roadmap**) có cấu trúc, đồng bộ hóa các nâng cấp kỹ thuật với ngân sách vốn. Các kiến trúc sư đám mây thực thi **sự ngừng dùng bộ mã hóa** (**cipher suite deprecation**) có hệ thống, vô hiệu hóa bài bản các cú bắt tay mật mã lỗi thời trên tất cả các bộ cân bằng tải vùng biên. Đối với các mạng lưới tài chính siêu nhạy cảm nơi mà riêng các giả định toán học bị coi là không đủ, các chính phủ triển khai **phân phối khóa lượng tử** (**quantum key distribution**) vật lý, sử dụng các đường cáp quang ngầm để truyền các khóa mật mã với các bảo đảm an ninh vật lý tuyệt đối. Bên trong các liên kết vật lý này, quang học chuyên dụng hiệu chuẩn **sự trao đổi khóa bằng phân cực photon** (**photon polarization key exchange**), bảo đảm rằng bất kỳ nỗ lực nghe lén nào cũng ngay lập tức làm sụp đổ các trạng thái chồng chập lượng tử và cảnh báo cho các giám sát viên mạng. Để cung cấp tính ngẫu nhiên thuần khiết vào các cỗ máy mật mã này, các trung tâm dữ liệu an toàn tích hợp một **bộ tạo số ngẫu nhiên lượng tử** (**quantum random number generator**) phần cứng, thu hoạch tiếng ồn lượng tử thay vì các phép tính giả ngẫu nhiên theo thuật toán.

Tại cấp độ thiết bị đầu cuối vật lý, các kỹ sư phần cứng nạp **vi chương trình của mô-đun bảo mật phần cứng** (**hardware security module firmware**) được nâng cấp để cho phép các vi điều khiển chống can thiệp lưu trữ các khóa riêng tư mạng lưới một cách nguyên bản. Khi trao đổi các khóa chủ giữa các cơ sở ngoại tuyến, các tổ chức bắt buộc phải có **sự vận chuyển khóa có bằng chứng chống can thiệp** (**tamper-evident key transport**) đã được chứng nhận, bảo đảm bất kỳ sự xâm phạm vật lý nào trong quá trình vận chuyển đều bị phát giác ngay lập tức. Các cơ quan quản lý tín nhiệm điều phối một **sự luân chuyển khóa gốc** (**root key rollover**) phức tạp, thay thế các khóa công khai chủ cũ bằng các cặp khóa kháng lượng tử mà không làm hỏng các chứng chỉ web đang hoạt động. Đồng thời, các hệ thống xây dựng một **hệ thống phân cấp chứng chỉ hậu lượng tử** (**post-quantum certificate hierarchy**) vững chắc kết nối các cơ quan trung gian cấp dưới trực tiếp với các điểm neo gốc an toàn lượng tử. Song song với đó, các quản trị viên cơ sở dữ liệu thực thi **sự củng cố hàm phái sinh khóa** (**key derivation hardening**) nghiêm ngặt, tăng chi phí lặp lại và yêu cầu bộ nhớ để bảo vệ các thông tin xác thực đối xứng trước các cuộc tấn công dò tìm lượng tử. Trước khi cấp quyền vận hành sản xuất, các cán bộ quản lý rủi ro thực hiện một **cuộc kiểm toán tuân thủ mật mã** (**cryptographic compliance audit**) nghiêm ngặt để xác minh sự tuân thủ đầy đủ các chuẩn mực mã hóa liên bang. Trong suốt quá trình chuyển đổi kéo dài nhiều năm này, ban lãnh đạo điều hành giám sát **khung thời gian đe dọa lượng tử** (**quantum threat timeline**) được dự báo, điều chỉnh các khoản đầu tư kỹ thuật để luôn đi trước các đột phá phần cứng lượng tử. Cuối cùng, các nhóm hệ thống xác minh **việc ngừng vận hành hoàn toàn mật mã cũ** (**legacy cipher decommission**) toàn diện, xóa bỏ vĩnh viễn các thuật toán lỗi thời và củng cố một đường cơ sở an ninh vững chắc không thể xuyên thủng.
