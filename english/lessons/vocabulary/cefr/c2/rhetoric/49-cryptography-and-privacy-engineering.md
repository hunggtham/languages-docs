# C2 Vocabulary 49 — Cryptography and privacy engineering

This lesson introduces concepts used to protect data, authenticate systems, and reason about modern privacy risks. It distinguishes secrecy, integrity, identity, and the assumptions that make a security design trustworthy.

Flow: **cryptographic → asymmetric → symmetric → hash → salting → nonce → entropy → ciphertext → plaintext → cryptanalysis → zero-knowledge → homomorphic → differential privacy → federated learning → adversarial → side-channel → air-gapped → threat model → attack surface → exploitability**.

## 1. cryptographic /ˌkrɪptəˈɡræfɪk/
**Part of speech:** adjective
**Core meaning (English):** relating to methods that protect information by transforming it with mathematical procedures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuộc mật mã học; hình ảnh thông tin đi qua một chiếc khóa toán học trước khi truyền.
**Grammar & collocations:** `cryptographic protocol` — giao thức mật mã; `cryptographic key` — khóa mật mã.
**Examples:** `The service uses cryptographic signatures to prove that a message was not altered.` → Dịch vụ dùng chữ ký mật mã để chứng minh tin nhắn không bị sửa.
**Liên kết tiếng Hàn:** `암호학적` (amhohakjeok) — thuộc mật mã học.

## 2. asymmetric /ˌeɪsəˈmɛtrɪk/
**Part of speech:** adjective
**Core meaning (English):** using different but mathematically related keys for encryption and decryption or signing and verification.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bất đối xứng; hình ảnh một khóa công khai để khóa và một khóa riêng để mở.
**Grammar & collocations:** `asymmetric encryption` — mã hóa bất đối xứng; `asymmetric key pair` — cặp khóa bất đối xứng.
**Examples:** `Asymmetric encryption lets a stranger send protected data without receiving the private key.` → Mã hóa bất đối xứng cho phép người lạ gửi dữ liệu bảo vệ mà không nhận khóa riêng.
**Liên kết tiếng Hàn:** `비대칭` (bidaeching) — bất đối xứng.

## 3. symmetric /sɪˈmɛtrɪk/
**Part of speech:** adjective
**Core meaning (English):** using the same secret key for both encryption and decryption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đối xứng; hình ảnh cùng một chìa khóa được dùng ở hai đầu cuộc trao đổi.
**Grammar & collocations:** `symmetric cipher` — mật mã đối xứng; `symmetric-key encryption` — mã hóa khóa đối xứng.
**Examples:** `The application switched to symmetric encryption after the two devices established a shared secret.` → Ứng dụng chuyển sang mã hóa đối xứng sau khi hai thiết bị thiết lập bí mật chung.
**Liên kết tiếng Hàn:** `대칭` (daeching) — đối xứng.

## 4. hash /hæʃ/
**Part of speech:** noun
**Core meaning (English):** a fixed-length value produced from data by a one-way function, useful for checking integrity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã băm; hình ảnh tài liệu được nén thành dấu vân tay khó đảo ngược.
**Grammar & collocations:** `hash function` — hàm băm; `compare a hash` — so sánh mã băm.
**Examples:** `The download page published a hash so users could verify the file.` → Trang tải công bố mã băm để người dùng xác minh tệp.
**Liên kết tiếng Hàn:** `해시` (haesi) — mã băm.

## 5. salting /ˈsɔltɪŋ/
**Part of speech:** noun
**Core meaning (English):** adding a random value to a password before hashing it so that identical passwords receive different stored results.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thêm muối; hình ảnh mỗi mật khẩu được trộn một hạt ngẫu nhiên trước khi băm.
**Grammar & collocations:** `password salting` — thêm muối mật khẩu; `unique salt` — muối riêng biệt.
**Examples:** `Salting makes precomputed password tables less useful to an attacker.` → Thêm muối khiến bảng mật khẩu tính sẵn kém hữu ích với kẻ tấn công.
**Liên kết tiếng Hàn:** `솔팅` (solting) — thêm salt vào mật khẩu.

## 6. nonce /nɑns/
**Part of speech:** noun
**Core meaning (English):** a number or value used only once in a cryptographic protocol.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số dùng một lần; hình ảnh mỗi thông điệp nhận một vé duy nhất để ngăn phát lại.
**Grammar & collocations:** `random nonce` — nonce ngẫu nhiên; `reuse a nonce` — dùng lại nonce.
**Examples:** `Reusing a nonce exposed enough information to weaken the encryption.` → Dùng lại nonce làm lộ đủ thông tin để làm yếu mã hóa.
**Liên kết tiếng Hàn:** `논스` (nonseu) — giá trị dùng một lần.

## 7. entropy /ˈɛntəpi/
**Part of speech:** noun
**Core meaning (English):** a measure of uncertainty or unpredictability, especially in a source of random data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ hỗn loạn/ngẫu nhiên; hình ảnh khóa mạnh cần đủ bất định để không đoán được.
**Grammar & collocations:** `source of entropy` — nguồn độ ngẫu nhiên; `high entropy` — độ bất định cao.
**Examples:** `The device gathered entropy from physical noise before generating keys.` → Thiết bị thu độ ngẫu nhiên từ nhiễu vật lý trước khi tạo khóa.
**Liên kết tiếng Hàn:** `엔트로피` (enteuropi) — độ bất định, entropy.

## 8. ciphertext /ˈsɪfərˌtɛkst/
**Part of speech:** noun
**Core meaning (English):** data in an encrypted form that cannot be understood without the appropriate key.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản mã; hình ảnh câu chữ biến thành chuỗi vô nghĩa đối với người không có khóa.
**Grammar & collocations:** `transmit ciphertext` — truyền bản mã; `decrypt ciphertext` — giải mã bản mã.
**Examples:** `The server stored ciphertext even when the database was copied.` → Máy chủ lưu bản mã ngay cả khi cơ sở dữ liệu bị sao chép.
**Liên kết tiếng Hàn:** `암호문` (amhomun) — bản mã.

## 9. plaintext /ˈpleɪnˌtɛkst/
**Part of speech:** noun
**Core meaning (English):** data in its original readable form before encryption or after decryption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản rõ; hình ảnh thông tin còn đọc được trước khi đi qua lớp mã hóa.
**Grammar & collocations:** `expose plaintext` — làm lộ bản rõ; `plaintext password` — mật khẩu dạng bản rõ.
**Examples:** `The diagnostic log accidentally recorded a token in plaintext.` → Nhật ký chẩn đoán vô tình ghi token ở dạng bản rõ.
**Liên kết tiếng Hàn:** `평문` (pyeongmun) — bản rõ.

## 10. cryptanalysis /ˌkrɪptəˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** the study of methods for analyzing or breaking cryptographic systems.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích mật mã; hình ảnh nhà nghiên cứu tìm quy luật trong bản mã để suy ra điểm yếu.
**Grammar & collocations:** `cryptanalysis attack` — tấn công phân tích mật mã; `modern cryptanalysis` — phân tích mật mã hiện đại.
**Examples:** `The protocol survived years of public cryptanalysis without a practical break.` → Giao thức vượt qua nhiều năm phân tích mật mã công khai mà không bị phá thực tế.
**Liên kết tiếng Hàn:** `암호 해석` (amho haeseok) — phân tích, giải mã.

## 11. zero-knowledge /ˌzɪroʊ ˈnɑlɪdʒ/
**Part of speech:** adjective
**Core meaning (English):** allowing one party to prove a claim without revealing the underlying secret information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không tiết lộ tri thức; hình ảnh chứng minh biết bí mật mà không đưa bí mật ra.
**Grammar & collocations:** `zero-knowledge proof` — bằng chứng không tiết lộ tri thức; `zero-knowledge protocol` — giao thức không tiết lộ tri thức.
**Examples:** `A zero-knowledge proof confirmed eligibility without exposing the user's identity.` → Bằng chứng zero-knowledge xác nhận đủ điều kiện mà không lộ danh tính người dùng.
**Liên kết tiếng Hàn:** `영지식` (yeongjisik) — không tiết lộ tri thức.

## 12. homomorphic /ˌhoʊmoʊˈmɔrfɪk/
**Part of speech:** adjective
**Core meaning (English):** allowing certain computations to be performed on encrypted data while preserving a relationship to the result on decrypted data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồng cấu; hình ảnh máy chủ tính trên dữ liệu bị khóa mà không cần mở nó.
**Grammar & collocations:** `homomorphic encryption` — mã hóa đồng cấu; `partially homomorphic` — đồng cấu một phần.
**Examples:** `Homomorphic encryption allowed the clinic to analyze records without viewing them.` → Mã hóa đồng cấu cho phép phòng khám phân tích hồ sơ mà không xem nội dung.
**Liên kết tiếng Hàn:** `동형` (donghyeong) — đồng cấu.

## 13. differential privacy /ˌdɪfəˈrɛnʃəl ˈpraɪvəsi/
**Part of speech:** noun phrase
**Core meaning (English):** a formal method of limiting what can be learned about an individual from published statistical results.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** riêng tư vi phân; hình ảnh thêm nhiễu có kiểm soát để dữ liệu tổng hợp không chỉ ngược về một người.
**Grammar & collocations:** `differential-privacy guarantee` — bảo đảm riêng tư vi phân; `apply differential privacy` — áp dụng riêng tư vi phân.
**Examples:** `The census applied differential privacy before releasing detailed tables.` → Điều tra dân số áp dụng riêng tư vi phân trước khi công bố bảng chi tiết.
**Liên kết tiếng Hàn:** `차등 프라이버시` (chadeung peur aibasi) — riêng tư vi phân.

## 14. federated learning /ˈfɛdəreɪtɪd ˈlɝnɪŋ/
**Part of speech:** noun phrase
**Core meaning (English):** a method in which models are trained across distributed devices while raw data remain local.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học liên kết; hình ảnh nhiều điện thoại cùng học nhưng không gửi dữ liệu thô về máy chủ.
**Grammar & collocations:** `federated-learning system` — hệ thống học liên kết; `privacy-preserving federated learning` — học liên kết bảo vệ riêng tư.
**Examples:** `Federated learning improved the keyboard model without centralizing personal messages.` → Học liên kết cải thiện mô hình bàn phím mà không tập trung tin nhắn cá nhân.
**Liên kết tiếng Hàn:** `연합 학습` (yeonhap hakseup) — học liên kết.

## 15. adversarial /ˌædvərˈsɛriəl/
**Part of speech:** adjective
**Core meaning (English):** designed or occurring in a way that deliberately exploits an opponent's weaknesses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mang tính đối kháng; hình ảnh kẻ tấn công tạo đầu vào nhỏ nhưng khiến hệ thống nhận sai.
**Grammar & collocations:** `adversarial example` — ví dụ đối kháng; `adversarial testing` — kiểm thử đối kháng.
**Examples:** `Adversarial testing exposed images that fooled the classifier with tiny changes.` → Kiểm thử đối kháng phát hiện hình ảnh đánh lừa bộ phân loại bằng thay đổi nhỏ.
**Liên kết tiếng Hàn:** `적대적` (jeokdaejeok) — đối kháng, thù địch.

## 16. side-channel /ˈsaɪd ˌtʃænəl/
**Part of speech:** noun
**Core meaning (English):** an unintended source of information, such as timing or power use, that can reveal secrets from a system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kênh bên; hình ảnh bí mật rò qua thời gian chạy hoặc điện năng thay vì qua giao diện chính.
**Grammar & collocations:** `side-channel attack` — tấn công kênh bên; `side-channel leakage` — rò rỉ kênh bên.
**Examples:** `The patch reduced side-channel leakage from the encryption routine.` → Bản vá giảm rò rỉ kênh bên từ quy trình mã hóa.
**Liên kết tiếng Hàn:** `부채널` (buchaeneol) — kênh bên.

## 17. air-gapped /ˈɛr ɡæpt/
**Part of speech:** adjective
**Core meaning (English):** physically isolated from external networks to reduce the chance of remote compromise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cách ly mạng; hình ảnh hệ thống quan trọng bị ngăn khỏi internet bằng một khoảng không vật lý.
**Grammar & collocations:** `air-gapped network` — mạng cách ly; `air-gapped system` — hệ thống cách ly mạng.
**Examples:** `The laboratory kept its control computer air-gapped from the public network.` → Phòng thí nghiệm giữ máy điều khiển cách ly khỏi mạng công cộng.
**Liên kết tiếng Hàn:** `망 분리된` (mang bunridoen) — được cách ly mạng.

## 18. threat model /ˈθrɛt ˌmɑdəl/
**Part of speech:** noun phrase
**Core meaning (English):** an explicit description of likely attackers, assets, capabilities, and possible attack paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình mối đe dọa; hình ảnh vẽ kẻ tấn công, tài sản và đường xâm nhập lên cùng một bản đồ.
**Grammar & collocations:** `define a threat model` — xác định mô hình mối đe dọa; `threat-model assumption` — giả định của mô hình mối đe dọa.
**Examples:** `The threat model included a malicious insider as well as an external hacker.` → Mô hình mối đe dọa bao gồm cả người trong nội bộ độc hại và tin tặc bên ngoài.
**Liên kết tiếng Hàn:** `위협 모델` (wi hyeop model) — mô hình mối đe dọa.

## 19. attack surface /əˈtæk ˈsɝfəs/
**Part of speech:** noun phrase
**Core meaning (English):** the total set of interfaces, components, and entry points that an attacker could target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bề mặt tấn công; hình ảnh mọi cánh cửa, API và thiết bị có thể bị thử trong hệ thống.
**Grammar & collocations:** `reduce the attack surface` — thu hẹp bề mặt tấn công; `expand the attack surface` — mở rộng bề mặt tấn công.
**Examples:** `Removing unused services reduced the server's attack surface.` → Gỡ dịch vụ không dùng thu hẹp bề mặt tấn công của máy chủ.
**Liên kết tiếng Hàn:** `공격 표면` (gonggyeok pyomyeon) — bề mặt tấn công.

## 20. exploitability /ɪkˌsplɔɪtəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ease with which a vulnerability can be used to cause harm or gain unauthorized access.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng khai thác; hình ảnh lỗ hổng được chấm điểm theo mức dễ biến thành cuộc tấn công thực tế.
**Grammar & collocations:** `assess exploitability` — đánh giá khả năng khai thác; `high exploitability` — khả năng khai thác cao.
**Examples:** `The report rated exploitability as high because no authentication was required.` → Báo cáo đánh giá khả năng khai thác cao vì không cần xác thực.
**Liên kết tiếng Hàn:** `악용 가능성` (agyong ganeungseong) — khả năng khai thác.

## Review in context

The service used **cryptographic** controls, combining **asymmetric** handshakes with **symmetric** sessions. A **hash**, unique **salting**, and a fresh **nonce** protected credentials, while sufficient **entropy** made keys difficult to guess. Stored records remained **ciphertext** rather than **plaintext**, and independent **cryptanalysis** reviewed the design. A **zero-knowledge** proof and **homomorphic** operation limited exposure; **differential privacy** and **federated learning** protected statistics and models. **Adversarial** testing searched for **side-channel** leaks. The **air-gapped** system's **threat model**, **attack surface**, and **exploitability** were documented before release.

**Bản dịch tiếng Việt:**

Dịch vụ dùng các biện pháp mật mã, kết hợp bắt tay bất đối xứng với các phiên đối xứng. Mã băm, thêm salt riêng và nonce mới bảo vệ thông tin đăng nhập, trong khi entropy đủ cao khiến khóa khó đoán. Hồ sơ lưu trữ vẫn là bản mã chứ không phải bản rõ, và phân tích mật mã độc lập xem xét thiết kế. Bằng chứng zero-knowledge và phép tính đồng cấu hạn chế phơi lộ; riêng tư vi phân và học liên kết bảo vệ thống kê và mô hình. Kiểm thử đối kháng tìm rò rỉ kênh bên. Mô hình mối đe dọa, bề mặt tấn công và khả năng khai thác của hệ thống cách ly mạng được ghi lại trước khi phát hành.
