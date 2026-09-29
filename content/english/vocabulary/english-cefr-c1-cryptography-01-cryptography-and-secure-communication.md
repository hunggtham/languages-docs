# C1 Vocabulary 01 — Cryptography and secure communication

Nhóm từ này mô tả cách biến đổi, xác thực và bảo vệ thông tin trong các hệ thống số. Flow của bài là: **cryptography → decryption → cipher → cryptographic key → public key → private key → digital signature → hash function → entropy → key exchange → zero-knowledge proof → certificate authority → symmetric encryption → asymmetric encryption → cryptanalysis**.

---

## 1. cryptography /krɪpˈtɑɡrəfi/

**Loại từ & vị trí trong câu:** `uncountable noun` — lĩnh vực thiết kế và phân tích các phương pháp bảo vệ thông tin bằng toán học và giao thức.

**Core meaning — English:** The field of designing and analyzing mathematical methods and protocols for protecting information.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một bộ quy tắc biến thông tin thành dạng chỉ người có quyền mới đọc hoặc kiểm tra được.

**Grammar & collocations:** `modern cryptography` — mật mã học hiện đại; `cryptography protocol` — giao thức mật mã; `apply cryptography` — áp dụng mật mã học.

**Register & nuance:** Cryptography bao gồm bí mật, toàn vẹn, xác thực và chống chối bỏ; nó rộng hơn việc “mã hóa” một file.

**Examples:** `Cryptography protects messages exchanged by the app.` → Mật mã học bảo vệ các tin nhắn ứng dụng trao đổi. `The course introduces the mathematics behind cryptography.` → Khóa học giới thiệu toán học đằng sau mật mã học.

**Liên kết tiếng Hàn:** `암호학` — mật mã học.

## 2. decryption /diːˈkrɪpʃən/

**Loại từ & vị trí trong câu:** `uncountable noun` — quá trình biến dữ liệu đã mã hóa trở lại dạng có thể đọc bằng khóa hoặc cơ chế phù hợp.

**Core meaning — English:** The process of converting encrypted data back into readable form with an appropriate key or mechanism.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung dùng đúng chìa khóa để mở hộp dữ liệu và khôi phục thông điệp ban đầu.

**Grammar & collocations:** `decryption key` — khóa giải mã; `decryption process` — quá trình giải mã; `successful decryption` — giải mã thành công.

**Register & nuance:** Decryption là thao tác hợp lệ khi có quyền; cố phá dữ liệu không có khóa thường được gọi là cryptanalysis hoặc tấn công.

**Examples:** `The software performs decryption inside a secure device.` → Phần mềm giải mã bên trong thiết bị an toàn. `Without the key, decryption should be computationally impractical.` → Không có khóa, việc giải mã phải khó đến mức không thực tế về tính toán.

**Liên kết tiếng Hàn:** `복호화` — giải mã.

## 3. cipher /ˈsaɪfɚ/

**Loại từ & vị trí trong câu:** `countable noun` — thuật toán hoặc quy tắc biến đổi dữ liệu rõ thành dữ liệu mã hóa và ngược lại.

**Core meaning — English:** An algorithm or rule for transforming readable data into encrypted data and back.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một máy biến đổi có quy tắc, nhận bản rõ và tạo bản mã dựa trên khóa.

**Grammar & collocations:** `block cipher` — mật mã khối; `stream cipher` — mật mã dòng; `choose a cipher` — chọn một cipher.

**Register & nuance:** Cipher là thuật toán, còn ciphertext là kết quả đã biến đổi; một cipher tốt vẫn cần khóa và cách dùng đúng.

**Examples:** `The protocol negotiates a modern cipher before sending data.` → Giao thức thương lượng một cipher hiện đại trước khi gửi dữ liệu. `A weak cipher can expose an entire archive.` → Một cipher yếu có thể làm lộ cả kho lưu trữ.

**Liên kết tiếng Hàn:** `암호 알고리즘`, `암호` — thuật toán mã hóa, cipher.

## 4. cryptographic key /ˌkrɪptəˈɡræfɪk kiː/

**Loại từ & vị trí trong câu:** `countable noun phrase` — giá trị bí mật hoặc được công bố dùng để điều khiển phép mã hóa, giải mã hoặc xác thực.

**Core meaning — English:** A secret or public value used to control encryption, decryption, or authentication operations.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một chuỗi đặc biệt quyết định cùng một thuật toán sẽ tạo hoặc mở dữ liệu thế nào.

**Grammar & collocations:** `generate a cryptographic key` — tạo khóa mật mã; `key management` — quản lý khóa; `key length` — độ dài khóa.

**Register & nuance:** Bảo vệ cryptographic key quan trọng không kém chọn thuật toán; khóa bị lộ có thể vô hiệu hóa thiết kế tốt.

**Examples:** `The device stores the cryptographic key in protected hardware.` → Thiết bị lưu khóa mật mã trong phần cứng được bảo vệ. `Longer key length is not a substitute for sound key management.` → Khóa dài hơn không thay thế được quản lý khóa tốt.

**Liên kết tiếng Hàn:** `암호 키`, `암호화 키` — khóa mật mã, khóa mã hóa.

## 5. public key /ˈpʌblɪk kiː/

**Loại từ & vị trí trong câu:** `countable noun phrase` — khóa được công bố để người khác mã hóa dữ liệu hoặc kiểm tra chữ ký liên quan.

**Core meaning — English:** A key that can be shared publicly to encrypt data for an owner or verify a related signature.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một ổ khóa ai cũng có thể dùng để khóa hộp gửi cho bạn, nhưng chỉ bạn có chìa riêng để mở.

**Grammar & collocations:** `publish a public key` — công bố khóa công khai; `public-key encryption` — mã hóa khóa công khai; `public-key certificate` — chứng chỉ khóa công khai.

**Register & nuance:** Public key không cần giữ bí mật; an toàn phụ thuộc việc gắn đúng khóa với đúng danh tính.

**Examples:** `The server published its public key on the directory.` → Máy chủ công bố khóa công khai trong thư mục. `Anyone can encrypt a message with the recipient's public key.` → Bất kỳ ai cũng có thể mã hóa tin nhắn bằng khóa công khai của người nhận.

**Liên kết tiếng Hàn:** `공개 키` — khóa công khai.

## 6. private key /ˈpraɪvət kiː/

**Loại từ & vị trí trong câu:** `countable noun phrase` — khóa phải được giữ bí mật để giải mã dữ liệu hoặc tạo chữ ký số.

**Core meaning — English:** A key that must remain secret and is used to decrypt data or create a digital signature.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung chìa khóa duy nhất của chủ sở hữu; ai lấy được nó có thể giả danh hoặc đọc dữ liệu.

**Grammar & collocations:** `protect a private key` — bảo vệ khóa riêng; `private-key storage` — lưu trữ khóa riêng; `lose a private key` — mất khóa riêng.

**Register & nuance:** Private key khác “mật khẩu” thông thường; khôi phục hoặc thay thế nó phụ thuộc thiết kế hệ thống.

**Examples:** `The user never sends the private key to the server.` → Người dùng không bao giờ gửi khóa riêng cho máy chủ. `A stolen private key could allow forged signatures.` → Khóa riêng bị đánh cắp có thể cho phép tạo chữ ký giả.

**Liên kết tiếng Hàn:** `개인 키`, `비밀 키` — khóa riêng, khóa bí mật.

## 7. digital signature /ˈdɪdʒɪtəl ˈsɪɡnətʃɚ/

**Loại từ & vị trí trong câu:** `countable noun phrase` — dữ liệu mật mã chứng minh thông điệp đến từ người giữ khóa riêng và chưa bị sửa.

**Core meaning — English:** Cryptographic data showing that a message came from the holder of a private key and was not altered.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một dấu niêm phong toán học: người khác kiểm tra được nguồn và tính toàn vẹn mà không biết khóa riêng.

**Grammar & collocations:** `verify a digital signature` — xác minh chữ ký số; `create a digital signature` — tạo chữ ký số; `digital-signature scheme` — lược đồ chữ ký số.

**Register & nuance:** Digital signature cung cấp xác thực và toàn vẹn, nhưng danh tính thực phụ thuộc cách chứng chỉ hoặc khóa được cấp.

**Examples:** `The client verified the digital signature before installing the update.` → Máy khách xác minh chữ ký số trước khi cài bản cập nhật. `A digital signature revealed that the file had changed.` → Chữ ký số cho thấy file đã bị thay đổi.

**Liên kết tiếng Hàn:** `전자 서명`, `디지털 서명` — chữ ký điện tử, chữ ký số.

## 8. hash function /ˈhæʃ ˌfʌŋkʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase` — hàm biến dữ liệu bất kỳ thành chuỗi đầu ra có độ dài cố định, thường dùng để kiểm tra toàn vẹn.

**Core meaning — English:** A function that maps arbitrary data to a fixed-length output, often for integrity checks.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một “dấu vân tay” ngắn của file: đổi một bit cũng nên tạo dấu khác đáng kể.

**Grammar & collocations:** `cryptographic hash function` — hàm băm mật mã; `hash-function output` — đầu ra hàm băm; `apply a hash function` — áp dụng hàm băm.

**Register & nuance:** Hash function không phải mã hóa vì không được thiết kế để khôi phục dữ liệu; độ an toàn phụ thuộc khả năng chống va chạm và đảo ngược.

**Examples:** `The download page displayed a hash function result for verification.` → Trang tải hiển thị kết quả hàm băm để xác minh. `A cryptographic hash function detects accidental changes.` → Hàm băm mật mã phát hiện thay đổi vô tình.

**Liên kết tiếng Hàn:** `해시 함수` — hàm băm.

## 9. entropy /ˈentrəpi/

**Loại từ & vị trí trong câu:** `uncountable noun` — thước đo mức độ không thể đoán của dữ liệu hoặc nguồn ngẫu nhiên trong mật mã.

**Core meaning — English:** A measure of unpredictability in data or a randomness source used by cryptographic systems.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung mức “khó đoán” của một chuỗi; entropy thấp khiến kẻ tấn công dễ thử hết khả năng.

**Grammar & collocations:** `source of entropy` — nguồn entropy; `high entropy` — entropy cao; `entropy estimate` — ước tính entropy.

**Register & nuance:** Entropy trong mật mã nói về độ không đoán được, không chỉ sự hỗn loạn theo nghĩa vật lý; bộ sinh số giả ngẫu nhiên cần nguồn ban đầu tốt.

**Examples:** `The device collects entropy from hardware noise.` → Thiết bị thu entropy từ nhiễu phần cứng. `Low entropy made the generated keys predictable.` → Entropy thấp khiến các khóa được tạo có thể đoán được.

**Liên kết tiếng Hàn:** `엔트로피` — entropy.

## 10. key exchange /ˈkiː ɪksˌtʃeɪndʒ/

**Loại từ & vị trí trong câu:** `countable noun phrase` — giao thức giúp hai bên tạo hoặc chia sẻ khóa bí mật qua một kênh có thể bị nghe lén.

**Core meaning — English:** A protocol that lets two parties establish or share a secret key over a potentially observed channel.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung hai người thống nhất một màu sơn chung bằng các bước công khai mà người nghe lén không suy ra được màu cuối.

**Grammar & collocations:** `secure key exchange` — trao đổi khóa an toàn; `key-exchange protocol` — giao thức trao đổi khóa; `perform a key exchange` — thực hiện trao đổi khóa.

**Register & nuance:** Key exchange thiết lập bí mật chung nhưng cần chống người đứng giữa và xác minh đúng đối tác.

**Examples:** `The clients performed a key exchange before opening the session.` → Các máy khách trao đổi khóa trước khi mở phiên. `A flawed key exchange can expose later encrypted traffic.` → Trao đổi khóa sai có thể làm lộ lưu lượng mã hóa sau đó.

**Liên kết tiếng Hàn:** `키 교환` — trao đổi khóa.

## 11. zero-knowledge proof /ˌzɪroʊ ˈnɑlɪdʒ pruːf/

**Loại từ & vị trí trong câu:** `countable noun phrase` — bằng chứng cho phép chứng minh một mệnh đề đúng mà không tiết lộ thông tin bí mật ngoài việc mệnh đề đúng.

**Core meaning — English:** A proof that demonstrates a statement is true without revealing the secret information beyond that fact.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung chứng minh bạn biết mật khẩu bằng một trò thử lặp lại, nhưng không bao giờ nói mật khẩu cho người kiểm tra.

**Grammar & collocations:** `zero-knowledge proof system` — hệ thống bằng chứng không tiết lộ tri thức; `construct a zero-knowledge proof` — xây dựng bằng chứng; `verify a zero-knowledge proof` — xác minh bằng chứng.

**Register & nuance:** Zero-knowledge proof bảo vệ thông tin được chứng minh, nhưng thiết kế giao thức vẫn cần xem xét hiệu năng và giả định tin cậy.

**Examples:** `The wallet used a zero-knowledge proof to show eligibility.` → Ví dùng bằng chứng không tiết lộ tri thức để chứng minh đủ điều kiện. `A verifier checked the zero-knowledge proof without seeing the credential.` → Bên xác minh kiểm tra bằng chứng mà không thấy thông tin xác thực.

**Liên kết tiếng Hàn:** `영지식 증명` — bằng chứng không tiết lộ tri thức.

## 12. certificate authority /sɚˈtɪfɪkət əˈθɔrəti/

**Loại từ & vị trí trong câu:** `countable noun phrase` — tổ chức phát hành và ký chứng chỉ số để liên kết danh tính với khóa công khai.

**Core meaning — English:** An organization that issues and signs digital certificates linking an identity to a public key.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một cơ quan cấp giấy chứng minh rằng khóa công khai thực sự thuộc về website hoặc người được nêu tên.

**Grammar & collocations:** `trusted certificate authority` — cơ quan cấp chứng chỉ đáng tin; `certificate-authority hierarchy` — phân cấp cơ quan chứng chỉ; `certificate authority compromise` — xâm phạm cơ quan chứng chỉ.

**Register & nuance:** Certificate authority tạo niềm tin trong hệ thống phân cấp; nếu bị xâm phạm hoặc cấp nhầm, nhiều kết nối có thể bị giả mạo.

**Examples:** `The browser rejected the certificate authority's expired certificate.` → Trình duyệt từ chối chứng chỉ hết hạn của cơ quan cấp chứng chỉ. `A certificate authority verified the domain before issuing the certificate.` → Cơ quan cấp chứng chỉ xác minh tên miền trước khi cấp chứng chỉ.

**Liên kết tiếng Hàn:** `인증 기관` — cơ quan chứng thực.

## 13. symmetric encryption /sɪˈmetrɪk ɪnˈkrɪpʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — mã hóa trong đó cùng một khóa bí mật được dùng để mã hóa và giải mã.

**Core meaning — English:** Encryption in which the same secret key is used for both encryption and decryption.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung hai bên dùng cùng một chìa khóa để khóa và mở hộp dữ liệu.

**Grammar & collocations:** `symmetric-encryption algorithm` — thuật toán mã hóa đối xứng; `symmetric-encryption key` — khóa mã hóa đối xứng; `use symmetric encryption` — dùng mã hóa đối xứng.

**Register & nuance:** Symmetric encryption thường nhanh và phù hợp dữ liệu lớn, nhưng hai bên phải chia sẻ khóa bí mật an toàn.

**Examples:** `The database uses symmetric encryption for stored files.` → Cơ sở dữ liệu dùng mã hóa đối xứng cho file lưu trữ. `The service rotated its symmetric-encryption keys regularly.` → Dịch vụ thường xuyên thay khóa mã hóa đối xứng.

**Liên kết tiếng Hàn:** `대칭 암호화` — mã hóa đối xứng.

## 14. asymmetric encryption /ˌeɪsəˈmetrɪk ɪnˈkrɪpʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — mã hóa dùng một cặp khóa liên quan về toán học: khóa công khai và khóa riêng.

**Core meaning — English:** Encryption that uses a mathematically related public-key and private-key pair.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung ổ khóa công khai cho mọi người dùng và chìa riêng chỉ chủ sở hữu giữ.

**Grammar & collocations:** `asymmetric-encryption scheme` — lược đồ mã hóa bất đối xứng; `asymmetric-encryption key pair` — cặp khóa mã hóa bất đối xứng; `use asymmetric encryption` — dùng mã hóa bất đối xứng.

**Register & nuance:** Asymmetric encryption thuận tiện cho thiết lập tin cậy nhưng thường chậm hơn symmetric encryption; hệ thống thực tế thường kết hợp cả hai.

**Examples:** `Asymmetric encryption established a secure session key.` → Mã hóa bất đối xứng thiết lập khóa phiên an toàn. `The service uses asymmetric encryption for identity verification.` → Dịch vụ dùng mã hóa bất đối xứng để xác minh danh tính.

**Liên kết tiếng Hàn:** `비대칭 암호화` — mã hóa bất đối xứng.

## 15. cryptanalysis /ˌkrɪptəˈnæləsɪs/

**Loại từ & vị trí trong câu:** `uncountable noun` — việc phân tích hệ thống mật mã để tìm điểm yếu hoặc khôi phục thông tin mà không có quyền giải mã thông thường.

**Core meaning — English:** The analysis of cryptographic systems to find weaknesses or recover information without normal decryption access.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung kiểm tra chiếc khóa qua cấu trúc, mẫu lỗi và cách sử dụng để tìm cách mở mà không có chìa.

**Grammar & collocations:** `applied cryptanalysis` — phân tích mật mã ứng dụng; `cryptanalysis attack` — tấn công phân tích mật mã; `resist cryptanalysis` — chống phân tích mật mã.

**Register & nuance:** Cryptanalysis có thể phục vụ kiểm thử phòng thủ hoặc tấn công; mục tiêu và quyền hạn quyết định tính hợp pháp.

**Examples:** `The researchers published a cryptanalysis of the obsolete cipher.` → Các nhà nghiên cứu công bố phân tích mật mã của cipher lỗi thời. `Modern designs are evaluated for resistance to cryptanalysis.` → Thiết kế hiện đại được đánh giá về khả năng chống phân tích mật mã.

**Liên kết tiếng Hàn:** `암호 분석`, `암호해석학` — phân tích mật mã.

## Review in context

The security team reviewed the app's **cryptography** before deployment. A **key exchange** established a session secret, while **symmetric encryption** protected the data stream and **asymmetric encryption** authenticated the parties. Each user stored a **private key** and shared a **public key**; a **digital signature** confirmed the sender, and a **hash function** checked file integrity. The system generated keys from high **entropy** and obtained certificates from a **certificate authority**. For privacy-sensitive claims, it used a **zero-knowledge proof**. Finally, an independent audit used **cryptanalysis** to test the **cipher**, the **cryptographic key**, and the **decryption** process.

Nhóm an ninh xem xét **mật mã học** của ứng dụng trước khi triển khai. Một **trao đổi khóa** thiết lập bí mật phiên, còn **mã hóa đối xứng** bảo vệ luồng dữ liệu và **mã hóa bất đối xứng** xác thực các bên. Mỗi người dùng lưu **khóa riêng** và chia sẻ **khóa công khai**; **chữ ký số** xác nhận người gửi, còn **hàm băm** kiểm tra tính toàn vẹn của file. Hệ thống tạo khóa từ **entropy** cao và nhận chứng chỉ từ một **cơ quan cấp chứng chỉ**. Với các mệnh đề nhạy cảm về quyền riêng tư, hệ thống dùng **bằng chứng không tiết lộ tri thức**. Cuối cùng, một cuộc kiểm toán độc lập dùng **phân tích mật mã** để kiểm tra **cipher**, **khóa mật mã** và quy trình **giải mã**.
