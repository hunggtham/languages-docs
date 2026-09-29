# C2 Vocabulary — Post-quantum cryptography and migration

This lesson follows a cryptographic migration from quantum-risk assessment through key encapsulation, interoperability, and certificate deployment.

Flow: **post-quantum cryptography → lattice-based cryptography → module-LWE → ring-LWE → code-based cryptography → hash-based signature → multivariate cryptography → key encapsulation mechanism → encapsulation key → decapsulation failure → hybrid key exchange → cryptographic agility → algorithm identifier → ciphertext expansion → side-channel hardening → harvest-now-decrypt-later → migration inventory → quantum-safe TLS → certificate chain → crypto-agility policy**.

## 1. post-quantum cryptography /poʊst ˈkwɑntəm krɪpˈtɑɡrəfi/
**Part of speech:** noun
**Core meaning (English):** cryptographic techniques designed to resist attacks from both classical computers and large-scale quantum computers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mật mã chống được cả máy hiện tại và máy lượng tử tương lai.
**Grammar & collocations:** `post-quantum-cryptography transition` — transition; `deploy a quantum-resistant scheme` — triển khai.
**Examples:** `Post-quantum cryptography was added before the service began issuing long-lived credentials.` → Mật mã hậu lượng tử được thêm trước khi cấp credential sống lâu.
**Liên kết tiếng Hàn:** `포스트 양자 암호학`.

## 2. lattice-based cryptography /ˈlætɪs beɪst krɪpˈtɑɡrəfi/
**Part of speech:** noun
**Core meaning (English):** cryptography whose security relies on the presumed difficulty of selected problems on high-dimensional mathematical lattices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mật mã dựa trên bài toán khó trong lattice nhiều chiều.
**Grammar & collocations:** `lattice-based-cryptography primitive` — primitive; `instantiate a lattice scheme` — khởi tạo.
**Examples:** `Lattice-based cryptography offered a practical key exchange with conservative security assumptions.` → Mật mã lattice cho key exchange thực dụng.
**Liên kết tiếng Hàn:** `격자 기반 암호학`.

## 3. module-LWE /ˈmɑdʒuːl ɛl dʌbəljuː iː/
**Part of speech:** noun
**Core meaning (English):** a structured learning-with-errors problem over modules that underlies several modern lattice-based schemes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến thể LWE trên module, cân bằng security và kích thước triển khai.
**Grammar & collocations:** `module-LWE assumption` — assumption; `reduce a module-LWE instance` — quy về.
**Examples:** `The proposal based its security argument on the hardness of module-LWE.` → Đề xuất dựa lập luận security vào độ khó module-LWE.
**Liên kết tiếng Hàn:** `모듈 LWE`.

## 4. ring-LWE /rɪŋ ɛl dʌbəljuː iː/
**Part of speech:** noun
**Core meaning (English):** a learning-with-errors problem defined over polynomial rings, enabling compact algebraic implementations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** LWE trên vành đa thức để triển khai đại số gọn hơn.
**Grammar & collocations:** `ring-LWE reduction` — reduction; `operate over a polynomial ring` — hoạt động.
**Examples:** `Ring-LWE enabled fast polynomial arithmetic but required careful parameter selection.` → Ring-LWE cho arithmetic nhanh nhưng cần chọn parameter kỹ.
**Liên kết tiếng Hàn:** `링 LWE`.

## 5. code-based cryptography /koʊd beɪst krɪpˈtɑɡrəfi/
**Part of speech:** noun
**Core meaning (English):** cryptography whose security is tied to decoding difficult error-correcting codes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mật mã dựa trên bài toán giải mã code có lỗi rất khó.
**Grammar & collocations:** `code-based-cryptography scheme` — scheme; `decode a noisy codeword` — giải mã.
**Examples:** `Code-based cryptography avoided lattice assumptions but produced a larger public key.` → Mật mã code-based tránh giả định lattice nhưng key lớn hơn.
**Liên kết tiếng Hàn:** `코드 기반 암호학`.

## 6. hash-based signature /hæʃ beɪst ˈsɪɡnətʃər/
**Part of speech:** noun
**Core meaning (English):** a digital signature built from hash-function security rather than number-theoretic assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chữ ký số dựa trên độ an toàn của hash.
**Grammar & collocations:** `hash-based-signature key` — key; `sign with a one-time leaf` — ký.
**Examples:** `The hash-based signature provided a conservative option for firmware authenticity.` → Chữ ký hash-based là lựa chọn bảo thủ cho firmware.
**Liên kết tiếng Hàn:** `해시 기반 서명`.

## 7. multivariate cryptography /ˌmʌltɪˈvɛəriət krɪpˈtɑɡrəfi/
**Part of speech:** noun
**Core meaning (English):** cryptography based on the difficulty of solving systems of multivariate polynomial equations over finite fields.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mật mã dựa trên hệ phương trình đa thức nhiều biến.
**Grammar & collocations:** `multivariate-cryptography proposal` — proposal; `solve a polynomial system` — giải.
**Examples:** `The review compared multivariate cryptography with schemes having smaller signatures.` → Review so sánh mật mã đa biến với scheme signature nhỏ hơn.
**Liên kết tiếng Hàn:** `다변량 암호학`.

## 8. key encapsulation mechanism /kiː ɪnˌkæpsəˈleɪʃən ˈmɛkəˌnɪzəm/
**Part of speech:** noun
**Core meaning (English):** a protocol that establishes a shared secret by encapsulating it into a ciphertext and decapsulating it with a private key.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế gói secret vào ciphertext để bên kia mở bằng private key.
**Grammar & collocations:** `key-encapsulation-mechanism API` — API; `encapsulate a shared secret` — đóng gói.
**Examples:** `The key encapsulation mechanism established a session secret before application data flowed.` → KEM tạo session secret trước data app.
**Liên kết tiếng Hàn:** `키 캡슐화 메커니즘`.

## 9. encapsulation key /ɪnˌkæpsəˈleɪʃən kiː/
**Part of speech:** noun
**Core meaning (English):** the public key used to encapsulate a shared secret for a recipient.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** public key dùng để gói secret gửi cho recipient.
**Grammar & collocations:** `encapsulation-key rotation` — rotation; `publish an encapsulation key` — công bố.
**Examples:** `The client fetched the server's encapsulation key from the authenticated directory.` → Client lấy key encapsulation từ directory xác thực.
**Liên kết tiếng Hàn:** `캡슐화 키`.

## 10. decapsulation failure /diːˌkæpsəˈleɪʃən ˈfeɪljər/
**Part of speech:** noun
**Core meaning (English):** an event in which a recipient cannot recover the shared secret from a ciphertext, whether because of tampering or malformed input.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** recipient không mở được secret do ciphertext lỗi hoặc bị sửa.
**Grammar & collocations:** `decapsulation-failure handling` — handling; `return a constant failure path` — trả.
**Examples:** `Decapsulation failure was handled without revealing whether the ciphertext was malformed.` → Failure được xử lý không làm lộ ciphertext sai kiểu gì.
**Liên kết tiếng Hàn:** `디캡슐화 실패`.

## 11. hybrid key exchange /ˈhaɪbrɪd kiː ɪksˈtʃeɪndʒ/
**Part of speech:** noun
**Core meaning (English):** a key exchange that combines a classical algorithm with a post-quantum mechanism so both secrets contribute to the result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghép key exchange cổ điển và hậu lượng tử để chuyển tiếp an toàn.
**Grammar & collocations:** `hybrid-key-exchange transcript` — transcript; `combine two shared secrets` — kết hợp.
**Examples:** `Hybrid key exchange preserved interoperability while the fleet migrated its cryptographic libraries.` → Hybrid giữ tương thích khi migrate library.
**Liên kết tiếng Hàn:** `하이브리드 키 교환`.

## 12. cryptographic agility /ˌkrɪptəˈɡræfɪk əˈdʒɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability to replace cryptographic algorithms, parameters, or keys without redesigning the surrounding system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ thống đổi thuật toán/parameter mà không phải viết lại toàn bộ.
**Grammar & collocations:** `cryptographic-agility requirement` — requirement; `rotate an algorithm choice` — xoay vòng.
**Examples:** `Cryptographic agility let the service disable a weak suite through configuration.` → Agility cho phép tắt suite yếu bằng config.
**Liên kết tiếng Hàn:** `암호 민첩성`.

## 13. algorithm identifier /ˈælgəˌrɪðəm aɪˈdɛntəˌfaɪər/
**Part of speech:** noun
**Core meaning (English):** a protocol or certificate label that unambiguously names the cryptographic algorithm and parameter set in use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhãn xác định chính xác algorithm và parameter.
**Grammar & collocations:** `algorithm-identifier registry` — registry; `parse an algorithm identifier` — parse.
**Examples:** `The algorithm identifier distinguished the hybrid suite from its classical fallback.` → Identifier phân biệt suite hybrid với fallback.
**Liên kết tiếng Hàn:** `알고리즘 식별자`.

## 14. ciphertext expansion /ˈsaɪfərˌtɛkst ɪkˈspænʃən/
**Part of speech:** noun
**Core meaning (English):** the increase in ciphertext size relative to the plaintext or key-exchange input.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ciphertext phình to hơn input, ảnh hưởng bandwidth và packet size.
**Grammar & collocations:** `ciphertext-expansion factor` — factor; `budget handshake bytes` — tính ngân sách.
**Examples:** `Ciphertext expansion required a larger handshake buffer on the constrained device.` → Ciphertext lớn hơn cần buffer handshake lớn.
**Liên kết tiếng Hàn:** `암호문 확장`.

## 15. side-channel hardening /saɪd ˈtʃænəl ˈhɑrdənɪŋ/
**Part of speech:** noun
**Core meaning (English):** implementation measures that reduce information leaked through timing, power, memory access, or other unintended signals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gia cố code để timing/power/cache không làm lộ secret.
**Grammar & collocations:** `side-channel-hardening review` — review; `constant-time implementation` — triển khai hằng thời gian.
**Examples:** `Side-channel hardening removed a secret-dependent branch from decapsulation.` → Gia cố loại branch phụ thuộc secret.
**Liên kết tiếng Hàn:** `사이드 채널 강화`.

## 16. harvest-now-decrypt-later /ˈhɑrvəst naʊ diˈkrɪpt ˈleɪtər/
**Part of speech:** noun
**Core meaning (English):** a threat in which encrypted traffic is collected today for decryption after a future cryptanalytic breakthrough.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kẻ tấn công lưu traffic hiện tại để giải mã về sau.
**Grammar & collocations:** `harvest-now-decrypt-later risk` — risk; `protect long-lived secrets` — bảo vệ.
**Examples:** `Harvest-now-decrypt-later risk mattered for medical archives that must remain confidential for decades.` → Rủi ro quan trọng với hồ sơ y tế dài hạn.
**Liên kết tiếng Hàn:** `지금 수집 후 나중 복호화`.

## 17. migration inventory /maɪˈɡreɪʃən ˈɪnvənˌtɔri/
**Part of speech:** noun
**Core meaning (English):** a catalog of cryptographic uses, keys, protocols, data lifetimes, and dependencies that must be assessed during migration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** danh mục toàn bộ nơi dùng crypto để biết migrate từ đâu.
**Grammar & collocations:** `migration-inventory worksheet` — worksheet; `map cryptographic dependencies` — lập bản đồ.
**Examples:** `The migration inventory revealed an undocumented appliance that terminated old TLS sessions.` → Inventory lộ thiết bị chưa ghi nhận.
**Liên kết tiếng Hàn:** `마이그레이션 목록`.

## 18. quantum-safe TLS /ˈkwɑntəm seɪf tiː ɛl ɛs/
**Part of speech:** noun
**Core meaning (English):** a TLS deployment using post-quantum or hybrid key establishment and signatures suitable for quantum-era threats.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** TLS dùng cơ chế hậu lượng tử hoặc hybrid.
**Grammar & collocations:** `quantum-safe-TLS handshake` — handshake; `negotiate a hybrid suite` — thương lượng.
**Examples:** `Quantum-safe TLS increased the handshake size but protected long-lived API connections.` → TLS an toàn lượng tử làm handshake lớn hơn nhưng bảo vệ kết nối dài hạn.
**Liên kết tiếng Hàn:** `양자 안전 TLS`.

## 19. certificate chain /sərˈtɪfɪkət tʃeɪn/
**Part of speech:** noun
**Core meaning (English):** an ordered sequence of certificates linking an end-entity key to a trusted issuing authority.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi certificate nối key dịch vụ tới CA tin cậy.
**Grammar & collocations:** `certificate-chain validation` — validation; `rotate an intermediate certificate` — xoay.
**Examples:** `The certificate chain failed because one intermediary lacked the new algorithm identifier.` → Chain fail vì intermediate thiếu identifier mới.
**Liên kết tiếng Hàn:** `인증서 체인`.

## 20. crypto-agility policy /ˌkrɪptoʊ əˈdʒɪləti ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** governance rules defining how algorithms are selected, deprecated, tested, and replaced across an organization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy quản trị vòng đời thuật toán và migration.
**Grammar & collocations:** `crypto-agility-policy exception` — exception; `deprecate an algorithm on schedule` — loại bỏ.
**Examples:** `The crypto-agility policy required quarterly tests of the post-quantum fallback path.` → Policy yêu cầu test fallback hậu lượng tử hàng quý.
**Liên kết tiếng Hàn:** `암호 민첩성 정책`.

## Review in context

**Post-quantum cryptography** includes **lattice-based cryptography**, with assumptions such as **module-LWE** and **ring-LWE**, as well as **code-based cryptography**, **hash-based signature**, and **multivariate cryptography**. A **key encapsulation mechanism** uses an **encapsulation key** and must handle **decapsulation failure** safely. A **hybrid key exchange** supports **cryptographic agility**, clear **algorithm identifier** values, and realistic **ciphertext expansion**. **Side-channel hardening** matters against implementation leakage, while **harvest-now-decrypt-later** motivates early planning. A **migration inventory**, **quantum-safe TLS**, a compatible **certificate chain**, and a **crypto-agility policy** support deployment.

**Bản dịch tiếng Việt:** **Post-quantum cryptography** gồm **lattice-based cryptography**, với giả định như **module-LWE** và **ring-LWE**, cùng **code-based cryptography**, **hash-based signature** và **multivariate cryptography**. **Key encapsulation mechanism** dùng **encapsulation key** và phải xử lý **decapsulation failure** an toàn. **Hybrid key exchange** hỗ trợ **cryptographic agility**, giá trị **algorithm identifier** rõ ràng và **ciphertext expansion** thực tế. **Side-channel hardening** quan trọng để giảm rò rỉ implementation, còn **harvest-now-decrypt-later** thúc đẩy chuẩn bị sớm. **Migration inventory**, **quantum-safe TLS**, **certificate chain** tương thích và **crypto-agility policy** hỗ trợ triển khai.
