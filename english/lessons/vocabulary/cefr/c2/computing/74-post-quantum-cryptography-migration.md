# C2 Vocabulary — Post-quantum cryptography migration

This lesson follows a post-quantum migration from hardness assumptions and signature choices through hybrid deployment, inventory, and long-term cryptographic agility.

Flow: **quantum-resistant cryptography → lattice hardness assumption → learning with errors → polynomial-ring hardness → module-lattice problem → syndrome decoding problem → stateful hash signature → multivariate polynomial trapdoor → isogeny-based cryptography → primitive agility → dual-stack key exchange → harvest-now-decrypt-later attack → quantum-safe transition → algorithm deprecation → implementation profile → KEM interface → ciphertext size overhead → security reduction → parameter set → cryptographic asset inventory**.

## 1. quantum-resistant cryptography /ˈkwɒntəm rɪˈzɪstənt krɪpˈtɒɡrəfi/
**Part of speech:** noun
**Core meaning (English):** cryptography designed to remain secure against attacks from a capable quantum computer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mật mã chống được máy tính thường và lượng tử quy mô lớn.
**Grammar & collocations:** `post-quantum-cryptography standard` — standard; `deploy a quantum-resistant scheme` — triển khai.
**Examples:** `Post-quantum cryptography protects long-lived records against future quantum decryption.` → Mật mã hậu lượng tử bảo vệ hồ sơ dài hạn.
**Liên kết tiếng Hàn:** `양자 이후 암호학`.

## 2. lattice hardness assumption /ˈlætɪs ˈhɑːrdnəs əˈsʌmpʃən/
**Part of speech:** noun
**Core meaning (English):** the claim that selected high-dimensional lattice problems remain computationally infeasible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mật mã dựa trên bài toán lattice nhiều chiều khó giải.
**Grammar & collocations:** `lattice-based-cryptography assumption` — assumption; `solve a shortest-vector problem` — giải.
**Examples:** `Lattice-based cryptography offers both encryption and signature constructions.` → Mật mã lattice cung cấp mã hóa và chữ ký.
**Liên kết tiếng Hàn:** `격자 기반 암호학`.

## 3. learning with errors /ˈlɜːrnɪŋ wɪð ˈerərz/
**Part of speech:** noun
**Core meaning (English):** a computational problem in which an algorithm must recover hidden linear structure from noisy equations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khôi phục cấu trúc tuyến tính ẩn từ phương trình có nhiễu.
**Grammar & collocations:** `learning-with-errors assumption` — assumption; `sample a noisy equation` — lấy mẫu.
**Examples:** `Learning with errors underpins several conservative post-quantum designs.` → LWE làm nền cho nhiều thiết kế hậu lượng tử.
**Liên kết tiếng Hàn:** `오류 학습`.

## 4. polynomial-ring hardness /ˌpɒlɪˈnoʊmiəl rɪŋ ˈhɑːrdnəs/
**Part of speech:** noun
**Core meaning (English):** the presumed difficulty of recovering secrets in a polynomial-ring construction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến thể LWE trên vành, cho triển khai đại số gọn.
**Grammar & collocations:** `ring-LWE hardness` — hardness; `sample a ring-LWE instance` — lấy mẫu.
**Examples:** `Ring-LWE reduces storage overhead by exploiting polynomial structure.` → Ring-LWE giảm overhead lưu trữ nhờ cấu trúc đa thức.
**Liên kết tiếng Hàn:** `환 LWE`.

## 5. module-lattice problem /ˈmɒdjuːl ˈlætɪs ˈprɒbləm/
**Part of speech:** noun
**Core meaning (English):** a structured lattice problem that balances compactness with less algebraic regularity than a single ring.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bài toán lattice module cân bằng độ gọn và ít cấu trúc đại số hơn.
**Grammar & collocations:** `module-LWE parameter` — parameter; `instantiate a module lattice` — khởi tạo.
**Examples:** `Module-LWE gives the implementation a tunable trade-off between size and conservatism.` → Module-LWE cho phép cân bằng kích thước và bảo thủ.
**Liên kết tiếng Hàn:** `모듈 LWE`.

## 6. syndrome decoding problem /ˈsɪndroʊm diːˈkoʊdɪŋ ˈprɒbləm/
**Part of speech:** noun
**Core meaning (English):** the task of finding a low-weight error vector that explains a code syndrome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mật mã dựa trên bài toán giải mã code sửa lỗi tổng quát.
**Grammar & collocations:** `code-based-cryptography scheme` — scheme; `decode a structured code` — giải mã.
**Examples:** `Code-based cryptography has a long history of resistance to classical cryptanalysis.` → Mật mã code có lịch sử chống phân tích lâu dài.
**Liên kết tiếng Hàn:** `코드 기반 암호학`.

## 7. stateful hash signature /ˈsteɪtfəl hæʃ ˈsɪɡnətʃər/
**Part of speech:** noun
**Core meaning (English):** a hash-based signature whose signer must track one-time signing state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chữ ký số xây từ hàm băm một chiều.
**Grammar & collocations:** `hash-based-signature tree` — tree; `sign a stateful message` — ký.
**Examples:** `A hash-based signature avoids relying on factoring or discrete logarithms.` → Chữ ký hash không dựa vào phân tích thừa số.
**Liên kết tiếng Hàn:** `해시 기반 서명`.

## 8. multivariate polynomial trapdoor /ˌmʌltɪˈveəriət pɒlɪˈnoʊmiəl ˈtræpdɔːr/
**Part of speech:** noun
**Core meaning (English):** a hidden algebraic shortcut that makes a multivariate polynomial system easy for its owner to invert.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mật mã dựa trên hệ phương trình đa thức nhiều biến khó giải.
**Grammar & collocations:** `multivariate-cryptography signature` — signature; `solve a polynomial system` — giải.
**Examples:** `Multivariate cryptography can provide fast verification but may require large keys.` → Mật mã đa biến xác minh nhanh nhưng key lớn.
**Liên kết tiếng Hàn:** `다변수 암호학`.

## 9. isogeny-based cryptography /aɪˈsɒdʒəni beɪst krɪpˈtɒɡrəfi/
**Part of speech:** noun
**Core meaning (English):** cryptography using computational problems about maps between elliptic curves.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mật mã dùng bài toán ánh xạ giữa các đường cong elliptic.
**Grammar & collocations:** `isogeny-based-cryptography proposal` — proposal; `navigate an elliptic-curve graph` — đi.
**Examples:** `Isogeny-based cryptography once promised tiny keys, but cryptanalysis exposed serious weaknesses.` → Mật mã isogeny từng hứa key nhỏ nhưng đã lộ điểm yếu.
**Liên kết tiếng Hàn:** `아이소제니 기반 암호학`.

## 10. primitive agility /ˈprɪmətɪv əˈdʒɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability to swap a cryptographic primitive while preserving surrounding interfaces.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng thay thuật toán mà không thiết kế lại cả hệ thống.
**Grammar & collocations:** `cryptographic-agility plan` — plan; `rotate an algorithm suite` — xoay vòng.
**Examples:** `Cryptographic agility reduced the cost of responding to a newly broken primitive.` → Agility giảm chi phí khi primitive bị phá.
**Liên kết tiếng Hàn:** `암호 민첩성`.

## 11. dual-stack key exchange /ˈduːəl stæk kiː ɪksˈtʃeɪndʒ/
**Part of speech:** noun
**Core meaning (English):** a key exchange that runs two cryptographic stacks in parallel during migration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trao đổi key kết hợp cơ chế cổ điển và hậu lượng tử.
**Grammar & collocations:** `hybrid-key-exchange transcript` — transcript; `combine two shared secrets` — kết hợp.
**Examples:** `The hybrid key exchange preserved interoperability while adding a quantum-resistant component.` → Hybrid giữ tương thích và thêm thành phần chống lượng tử.
**Liên kết tiếng Hàn:** `하이브리드 키 교환`.

## 12. harvest-now-decrypt-later attack /ˈhɑːrvɪst naʊ dɪˈkraɪpt ˈleɪtər əˈtæk/
**Part of speech:** noun
**Core meaning (English):** an attack that records encrypted traffic now and plans to decrypt it after better computing becomes available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi lại traffic mã hóa để giải mã trong tương lai.
**Grammar & collocations:** `harvest-now-decrypt-later-attack risk` — risk; `archive encrypted traffic` — lưu trữ.
**Examples:** `A harvest-now-decrypt-later attack makes present-day confidentiality relevant to future quantum advances.` → Attack khiến bí mật hôm nay liên quan tiến bộ tương lai.
**Liên kết tiếng Hàn:** `지금 수집하고 나중에 복호화하는 공격`.

## 13. quantum-safe transition /ˈkwɒntəm seɪf trænˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** an organizational changeover from vulnerable primitives to algorithms intended to withstand quantum attacks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển đổi tổ chức sang thuật toán chịu tấn công lượng tử.
**Grammar & collocations:** `quantum-safe-transition roadmap` — roadmap; `retire a vulnerable cipher` — loại bỏ.
**Examples:** `The quantum-safe transition began with systems that protect data for decades.` → Chuyển đổi ưu tiên hệ thống giữ dữ liệu nhiều thập kỷ.
**Liên kết tiếng Hàn:** `양자 안전 전환`.

## 14. algorithm deprecation /ˈælɡərɪðəm ˌdepərˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the controlled process of announcing that an algorithm should no longer be used.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy trình kiểm soát để tuyên bố thuật toán không nên dùng nữa.
**Grammar & collocations:** `algorithm-deprecation notice` — notice; `sunset a cipher suite` — ngừng.
**Examples:** `Algorithm deprecation required a deadline, replacement path, and exception process.` → Deprecation cần hạn chót và đường thay thế.
**Liên kết tiếng Hàn:** `알고리즘 폐기`.

## 15. implementation profile /ˌɪmplɪmenˈteɪʃən ˈproʊfaɪl/
**Part of speech:** noun
**Core meaning (English):** a specified set of algorithms, parameters, message formats, and operational constraints for deployment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ thuật toán, parameter, format và ràng buộc triển khai cụ thể.
**Grammar & collocations:** `implementation-profile requirement` — requirement; `constrain a parameter choice` — ràng buộc.
**Examples:** `The implementation profile prevented two vendors from interpreting the same suite differently.` → Profile ngăn hai vendor hiểu suite khác nhau.
**Liên kết tiếng Hàn:** `구현 프로파일`.

## 16. KEM interface /ˌkeɪ iː ˈem ˈɪntərfeɪs/
**Part of speech:** noun
**Core meaning (English):** the callable contract that exposes key generation, encapsulation, and decapsulation operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế tạo secret chung qua đóng và mở ciphertext ngắn.
**Grammar & collocations:** `key-encapsulation-mechanism API` — API; `encapsulate a session secret` — đóng gói.
**Examples:** `The key-encapsulation mechanism returned a shared secret and a compact ciphertext.` → KEM trả secret chung và ciphertext gọn.
**Liên kết tiếng Hàn:** `키 캡슐화 메커니즘`.

## 17. ciphertext size overhead /ˈsaɪfərtekst saɪz ˈoʊvərhed/
**Part of speech:** noun
**Core meaning (English):** extra bytes added by encryption or encapsulation beyond the protected payload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức ciphertext phình to so với dữ liệu gốc.
**Grammar & collocations:** `ciphertext-expansion overhead` — overhead; `fit a packet budget` — vừa.
**Examples:** `Ciphertext expansion forced the protocol team to revise packet and storage limits.` → Ciphertext phình buộc sửa giới hạn gói.
**Liên kết tiếng Hàn:** `암호문 확장`.

## 18. security reduction /sɪˈkjʊərəti rɪˈdʌkʃən/
**Part of speech:** noun
**Core meaning (English):** a proof that links an attack on a construction to an assumed hard mathematical problem.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chứng minh liên kết attack với bài toán toán học khó giả định.
**Grammar & collocations:** `security-reduction proof` — proof; `reduce an adversary to LWE` — quy về.
**Examples:** `The security reduction clarified which assumptions the proposed parameter set actually needed.` → Reduction làm rõ giả định cần thiết.
**Liên kết tiếng Hàn:** `보안 환원`.

## 19. parameter set /pəˈræmɪtər set/
**Part of speech:** noun
**Core meaning (English):** a concrete collection of dimensions, moduli, noise levels, and limits chosen for a security target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ chiều, modulus, noise và giới hạn cho mục tiêu bảo mật.
**Grammar & collocations:** `parameter-set selection` — selection; `meet a security category` — đạt.
**Examples:** `A larger parameter set improved the margin but increased bandwidth and computation.` → Set lớn tăng biên an toàn nhưng tốn băng thông.
**Liên kết tiếng Hàn:** `매개변수 집합`.

## 20. cryptographic asset inventory /ˌkrɪptəˈɡræfɪk ˈæset ˈɪnvəntəri/
**Part of speech:** noun
**Core meaning (English):** a catalog of cryptographic assets, dependencies, owners, and data lifetimes used to plan replacement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** danh mục hệ thống, key, protocol và tuổi thọ dữ liệu để lập kế hoạch thay thế.
**Grammar & collocations:** `migration-inventory register` — register; `classify a cryptographic dependency` — phân loại.
**Examples:** `The migration inventory exposed forgotten certificates embedded in legacy services.` → Inventory lộ certificate bị quên trong dịch vụ cũ.
**Liên kết tiếng Hàn:** `마이그레이션 목록`.

## Review in context

**Quantum-resistant cryptography** uses a **lattice hardness assumption**, **learning with errors**, **polynomial-ring hardness**, and a **module-lattice problem**, while the **syndrome decoding problem**, a **stateful hash signature**, a **multivariate polynomial trapdoor**, and **isogeny-based cryptography** offer different assumptions. **Primitive agility** supports a **dual-stack key exchange** against a **harvest-now-decrypt-later attack** during the **quantum-safe transition**. Teams plan **algorithm deprecation**, publish an **implementation profile**, and expose a **KEM interface** while measuring **ciphertext size overhead**. A **security reduction** justifies each **parameter set**, and a **cryptographic asset inventory** tracks the remaining work.

**Bản dịch tiếng Việt:** **Mật mã hậu lượng tử** gồm **mật mã lattice**, **bài toán học có lỗi**, **ring-LWE** và **module-LWE**, còn **mật mã dựa trên code**, **chữ ký dựa trên hash**, **mật mã đa biến** và **mật mã dựa trên isogeny** dùng các giả định khác nhau. **Độ linh hoạt mật mã** hỗ trợ **trao đổi khóa lai** trước **tấn công thu thập nay-giải mã sau** trong **chuyển đổi an toàn lượng tử**. Nhóm lập kế hoạch **loại bỏ thuật toán**, công bố **profile triển khai**, triển khai **cơ chế đóng gói khóa** và đo **mức phình ciphertext**. **Chứng minh quy giảm bảo mật** biện minh cho từng **bộ tham số**, còn **inventory chuyển đổi** theo dõi phần việc còn lại.
