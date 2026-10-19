# C2 Vocabulary 210 — Fully homomorphic encryption (FHE), torus FHE bootstrapping, and lattice ciphertext noise management

This lesson explores advanced mathematical cryptography, fully homomorphic encryption (FHE), torus-based bootstrapping, and lattice-based post-quantum cryptographic primitives.

---

## 1. fully homomorphic encryption scheme
- **American IPA**: /ˈfʊli ˌhoʊməˈmɔːrfɪk ɪnˈkrɪpʃən skiːm/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: An encryption system that permits arbitrary computations to be performed on ciphertexts without prior decryption, yielding encrypted results.
- **Core meaning & mental image — Tiếng Việt**: Hệ mã hóa đồng hình hoàn toàn (hình ảnh chiếc hộp khóa đặc biệt cho phép người ngoài thực hiện mọi phép tính trên dữ liệu bên trong mà không bao giờ mở được khóa).
- **Grammar & collocations**:
  - implement a fully homomorphic encryption scheme (triển khai hệ mã hóa đồng hình hoàn toàn)
  - deploy a fully homomorphic encryption scheme (áp dụng hệ mã hóa đồng hình hoàn toàn)
  - secure fully homomorphic encryption scheme (hệ mã hóa đồng hình hoàn toàn bảo mật)
- **Register & nuance**: Academic cryptography, privacy-preserving cloud computing, advanced mathematics.
- **Examples**:
  - *Example 1*: Cloud providers can analyze medical records securely by using a fully homomorphic encryption scheme.
  - *Translation 1*: Các nhà cung cấp đám mây có thể phân tích hồ sơ y tế một cách an toàn bằng cách sử dụng hệ mã hóa đồng hình hoàn toàn.
- **Liên kết tiếng Hàn**: 완전 동형 암호 체계 (Wan-jeon Dong-hyeong Am-ho Che-gye) — Hệ thống mã hóa cho phép tính toán trực tiếp trên dữ liệu mã hóa.

---

## 2. TFHE torus bootstrapping
- **American IPA**: /ˈtiː.ɛf.eɪtʃ ˈtɔːrəs ˈbuːtˌstræpɪŋ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The rapid bootstrapping technique used in Torus Fully Homomorphic Encryption (TFHE) to simultaneously reduce ciphertext noise and evaluate non-linear gates.
- **Core meaning & mental image — Tiếng Việt**: Kỹ thuật khởi động lại hình xuyến TFHE (hình ảnh chiếc phao cứu sinh làm sạch nhiễu cho dữ liệu mã hóa trên không gian hình xuyến chỉ trong một bước).
- **Grammar & collocations**:
  - execute TFHE torus bootstrapping (thực hiện khởi động lại hình xuyến TFHE)
  - accelerate TFHE torus bootstrapping (tăng tốc khởi động lại hình xuyến TFHE)
  - TFHE torus bootstrapping latency (độ trễ khởi động lại hình xuyến TFHE)
- **Register & nuance**: Specialized lattice cryptography, high-performance FHE implementation.
- **Examples**:
  - *Example 1*: Hardware acceleration chips reduced TFHE torus bootstrapping times down to mere milliseconds per gate.
  - *Translation 1*: Các chip tăng tốc phần cứng đã giảm thời gian khởi động lại hình xuyến TFHE xuống chỉ còn vài mili giây cho mỗi cổng logic.
- **Liên kết tiếng Hàn**: TFHE 토러스 부트스트래핑 (TFHE To-reo-seu Bu-teu-seu-teu-ra-ping) — Kỹ thuật giảm nhiễu mật mã cực nhanh dựa trên không gian torus.

---

## 3. lattice ciphertext noise growth
- **American IPA**: /ˈlætɪs ˈsaɪfərtɛxt nɔɪz ɡroʊθ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The gradual accumulation of mathematical error terms during homomorphic additions and multiplications that eventually corrupt encrypted data.
- **Core meaning & mental image — Tiếng Việt**: Sự gia tăng nhiễu bản mã trên lưới (hình ảnh tiếng ồn hoặc sai số nhỏ tích tụ lớn dần sau mỗi phép tính cho đến khi làm hỏng hoàn toàn bức thư mã hóa).
- **Grammar & collocations**:
  - control lattice ciphertext noise growth (kiểm soát sự gia tăng nhiễu bản mã trên lưới)
  - mitigate lattice ciphertext noise growth (giảm thiểu sự gia tăng nhiễu bản mã trên lưới)
  - exponential lattice ciphertext noise growth (sự gia tăng nhiễu bản mã trên lưới theo hàm mũ)
- **Register & nuance**: Lattice-based cryptography, mathematical security analysis.
- **Examples**:
  - *Example 1*: Multiplying ciphertexts causes lattice ciphertext noise growth to accelerate quadratically, requiring periodic noise reduction.
  - *Translation 1*: Việc nhân các bản mã làm cho sự gia tăng nhiễu bản mã trên lưới tăng tốc theo bình phương, đòi hỏi phải giảm nhiễu định kỳ.
- **Liên kết tiếng Hàn**: 격자 암호문 노이즈 증가 (Gyeok-ja Am-ho-mun No-i-jeu Jeung-ga) — Hiện tượng tích tụ sai số toán học trong các bản mã dựa trên lưới.

---

## 4. learning with errors hardness
- **American IPA**: /ˈlɜːrnɪŋ wɪð ˈɛrərz ˈhɑːrdnəs/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The computational difficulty of solving systems of linear equations perturbed with small random errors, forming the foundation of post-quantum lattice crypto.
- **Core meaning & mental image — Tiếng Việt**: Độ khó của bài toán học có sai số (hình ảnh cố gắng giải một hệ phương trình khổng lồ bị bóp méo bởi các nhiễu ngẫu nhiên khiến siêu máy tính cũng phải bó tay).
- **Grammar & collocations**:
  - rely on learning with errors hardness (dựa vào độ khó của bài toán học có sai số)
  - prove learning with errors hardness (chứng minh độ khó của bài toán học có sai số)
  - learning with errors hardness assumption (giả định độ khó học có sai số)
- **Register & nuance**: Post-quantum cryptography, complexity theory, mathematical hardness.
- **Examples**:
  - *Example 1*: Lattice encryption schemes derive their quantum resistance from the proven worst-case learning with errors hardness.
  - *Translation 1*: Các hệ mã hóa lưới có được khả năng kháng lượng tử từ độ khó học có sai số trong trường hợp xấu nhất đã được chứng minh.
- **Liên kết tiếng Hàn**: 오차가 있는 학습 난도 (O-cha-ga In-neun Hak-seup Nan-do) — Độ khó tính toán của bài toán LWE làm nền tảng cho mật mã kháng lượng tử.

---

## 5. ring learning with errors polynomial
- **American IPA**: /rɪŋ ˈlɜːrnɪŋ wɪð ˈɛrərz ˌpɑːlɪˈnoʊmiəl/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A structured variant of LWE operating over polynomial rings that drastically improves computational efficiency and reduces key sizes.
- **Core meaning & mental image — Tiếng Việt**: Đa thức học có sai số trên vành (hình ảnh thay vì các vector độc lập cồng kềnh, ta dùng cấu trúc vành đa thức thanh lịch để tính toán mã hóa nhanh gấp bội).
- **Grammar & collocations**:
  - evaluate ring learning with errors polynomials (đánh giá các đa thức học có sai số trên vành)
  - ring learning with errors polynomial multiplication (phép nhân đa thức học có sai số trên vành)
  - ring learning with errors polynomial ring (vành đa thức học có sai số)
- **Register & nuance**: Efficient post-quantum cryptography, cryptographic engineering.
- **Examples**:
  - *Example 1*: Using ring learning with errors polynomials allows FHE systems to pack multiple values into a single ciphertext slot.
  - *Translation 1*: Việc sử dụng các đa thức học có sai số trên vành cho phép hệ thống FHE đóng gói nhiều giá trị vào một ô bản mã duy nhất.
- **Liên kết tiếng Hàn**: 링 오차 학습 다항식 (Ring O-cha Hak-seup Da-hang-sik) — Đa thức trên vành cấu trúc giúp tối ưu hóa hiệu suất mật mã dựa trên lưới.

---

## 6. homomorphic cipher multiplication
- **American IPA**: /ˌhoʊmoʊˈmɔːrfɪk ˈsaɪfər ˌmʌltɪplɪˈkeɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The mathematical operation that multiplies two ciphertexts together, resulting in an encrypted product that produces the multiplied plaintext upon decryption.
- **Core meaning & mental image — Tiếng Việt**: Phép nhân bản mã đồng hình (hình ảnh nhân hai chiếc hộp khóa với nhau để tạo ra chiếc hộp mới mà khi mở ra sẽ cho tích của hai con số ban đầu).
- **Grammar & collocations**:
  - perform homomorphic cipher multiplication (thực hiện phép nhân bản mã đồng hình)
  - costly homomorphic cipher multiplication (phép nhân bản mã đồng hình tốn kém tài nguyên)
  - homomorphic cipher multiplication circuit (mạch nhân bản mã đồng hình)
- **Register & nuance**: Homomorphic computation, cryptographic protocol design.
- **Examples**:
  - *Example 1*: Homomorphic cipher multiplication introduces significantly more noise than homomorphic addition, limiting circuit depth.
  - *Translation 1*: Phép nhân bản mã đồng hình tạo ra nhiều nhiễu hơn đáng kể so với phép cộng đồng hình, làm hạn chế độ sâu của mạch.
- **Liên kết tiếng Hàn**: 동형 암호문 곱셈 (Dong-hyeong Am-ho-mun Gop-sem) — Phép tính nhân trực tiếp trên dữ liệu đã được mã hóa.

---

## 7. modulus switching noise reduction
- **American IPA**: /ˈmɑːdjʊləs ˈswɪtʃɪŋ nɔɪz rɪˈdʌkʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A technique that scales down ciphertext moduli to truncate and control accumulated noise without decrypting the data.
- **Core meaning & mental image — Tiếng Việt**: Giảm nhiễu chuyển mạch mô-đun (hình ảnh thu nhỏ không gian số học để gọt giũa bớt phần nhiễu dư thừa mà không làm lộ nội dung bên trong).
- **Grammar & collocations**:
  - apply modulus switching noise reduction (áp dụng giảm nhiễu chuyển mạch mô-đun)
  - modulus switching noise reduction step (bước giảm nhiễu chuyển mạch mô-đun)
  - efficient modulus switching noise reduction (giảm nhiễu chuyển mạch mô-đun hiệu quả)
- **Register & nuance**: Homomorphic encryption optimization, algebraic cryptanalysis.
- **Examples**:
  - *Example 1*: Modulus switching noise reduction scales the ciphertext coefficients down, preventing noise from exceeding the decryption threshold.
  - *Translation 1*: Việc giảm nhiễu chuyển mạch mô-đun thu nhỏ các hệ số bản mã xuống, ngăn không cho nhiễu vượt quá ngưỡng giải mã.
- **Liên kết tiếng Hàn**: 모듈러스 스위칭 노이즈 감소 (Mo-dyul-reo-seu Seu-wi-ching No-i-jeu Gam-so) — Kỹ thuật cắt bớt sai số trong bản mã bằng cách thay đổi giá trị mô-đun.

---

## 8. key switching matrix transformation
- **American IPA**: /kiː ˈswɪtʃɪŋ ˈmeɪtrɪks ˌtrænsfərˈmeɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A linear transformation using a precomputed public hint matrix that converts a ciphertext encrypted under one key to be decryptable by another key.
- **Core meaning & mental image — Tiếng Việt**: Biến đổi ma trận chuyển khóa (hình ảnh dùng một bảng chuyển đổi đặc biệt để đổi chiếc khóa mã hóa này sang chiếc khóa khác mà không cần giải mã dữ liệu).
- **Grammar & collocations**:
  - compute key switching matrix transformations (tính toán các biến đổi ma trận chuyển khóa)
  - optimize key switching matrix transformation (tối ưu hóa biến đổi ma trận chuyển khóa)
  - key switching matrix transformation overhead (chi phí biến đổi ma trận chuyển khóa)
- **Register & nuance**: Advanced FHE operations, relinearization algorithms.
- **Examples**:
  - *Example 1*: Ciphertext multiplication blows up the key dimension, requiring a key switching matrix transformation to bring it back down.
  - *Translation 1*: Phép nhân bản mã làm phồng chiều khóa, đòi hỏi phải có biến đổi ma trận chuyển khóa để kéo nó trở lại kích thước ban đầu.
- **Liên kết tiếng Hàn**: 키 스위칭 매트릭스 변환 (Ki Seu-wi-ching Mae-teu-rik-seu Byeon-hwan) — Phép biến đổi ma trận giúp chuyển đổi bản mã giữa các khóa khác nhau.

---

## 9. homomorphic evaluate circuit
- **American IPA**: /ˌhoʊmoʊˈmɔːrfɪk ˈɪvæluˌeɪt ˈsɜːrkɪt/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The programmatic representation of arithmetic or boolean gates evaluated entirely over encrypted inputs.
- **Core meaning & mental image — Tiếng Việt**: Mạch đánh giá đồng hình (hình ảnh một cỗ máy gồm các cổng logic chạy hoàn toàn trên các hộp khóa chứa dữ liệu).
- **Grammar & collocations**:
  - design a homomorphic evaluate circuit (thiết kế một mạch đánh giá đồng hình)
  - execute a homomorphic evaluate circuit (thực thi một mạch đánh giá đồng hình)
  - depth of a homomorphic evaluate circuit (độ sâu của một mạch đánh giá đồng hình)
- **Register & nuance**: Homomorphic cryptography, circuit compilation.
- **Examples**:
  - *Example 1*: Compiling a machine learning model into a homomorphic evaluate circuit allows secure private inference on untrusted servers.
  - *Translation 1*: Việc biên dịch một mô hình học máy thành mạch đánh giá đồng hình cho phép suy luận riêng tư an toàn trên các máy chủ không đáng tin cậy.
- **Liên kết tiếng Hàn**: 동형 평가 회로 (Dong-hyeong Pyeong-ga Hoe-ro) — Mạch tính toán xử lý trực tiếp các cổng logic trên dữ liệu mã hóa.

---

## 10. leveled homomorphic computation
- **American IPA**: /ˈlɛvəld ˌhoʊmoʊˈmɔːrfɪk ˌkɑːmpjuˈteɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: Homomorphic encryption restricted to evaluate circuits of a predetermined maximum multiplicative depth without needing full bootstrapping.
- **Core meaning & mental image — Tiếng Việt**: Tính toán đồng hình theo phân cấp tầng (hình ảnh mạch tính toán có giới hạn số tầng nhân nhất định, không cần dùng phao cứu sinh bootstrapping phức tạp).
- **Grammar & collocations**:
  - perform leveled homomorphic computation (thực hiện tính toán đồng hình theo phân cấp tầng)
  - support leveled homomorphic computation (hỗ trợ tính toán đồng hình theo phân cấp tầng)
  - leveled homomorphic computation parameter (tham số tính toán đồng hình theo phân cấp tầng)
- **Register & nuance**: Cryptographic engineering, practical FHE deployment.
- **Examples**:
  - *Example 1*: Leveled homomorphic computation is faster than fully homomorphic encryption when the maximum calculation depth is known in advance.
  - *Translation 1*: Tính toán đồng hình theo phân cấp tầng nhanh hơn mã hóa đồng hình hoàn toàn khi biết trước độ sâu tính toán tối đa.
- **Liên kết tiếng Hàn**: 레벨 동형 연산 (Re-bel Dong-hyeong Yeon-san) — Tính toán đồng hình bị giới hạn số tầng nhân mà không cần bootstrap đầy đủ.

---

## 11. canonical embedding norm
- **American IPA**: /kəˈnɑːnɪkəl ɛmˈbɛdɪŋ nɔːrm/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A mathematical norm that maps elements of number fields into complex space, critical for analyzing security boundaries in lattice cryptography.
- **Core meaning & mental image — Tiếng Việt**: Chuẩn nhúng chuẩn tắc (hình ảnh công cụ toán học đo lường kích thước của các phần tử đa thức trong không gian số phức để đảm bảo an toàn mật mã).
- **Grammar & collocations**:
  - bound the canonical embedding norm (giới hạn chuẩn nhúng chuẩn tắc)
  - compute the canonical embedding norm (tính toán chuẩn nhúng chuẩn tắc)
  - canonical embedding norm inequality (bất đẳng thức chuẩn nhúng chuẩn tắc)
- **Register & nuance**: Advanced number theory, lattice cryptography security proofs.
- **Examples**:
  - *Example 1*: Security proofs for ideal lattice schemes rely heavily on bounding the canonical embedding norm of short polynomials.
  - *Translation 1*: Các chứng minh bảo mật cho các lược đồ lưới lý tưởng phụ thuộc nhiều vào việc giới hạn chuẩn nhúng chuẩn tắc của các đa thức ngắn.
- **Liên kết tiếng Hàn**: 정수 임베딩 노름 (Jeong-su Im-be-ding No-reum) — Chuẩn toán học dùng để phân tích bảo mật trong không gian trường số.

---

## 12. polynomial ring cyclotomic quotient
- **American IPA**: /ˌpɑːlɪˈnoʊmiəl rɪŋ ˌsaɪkləˈtɑːmɪk ˈkwoʊʃənt/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A quotient ring formed by cyclotomic polynomials, serving as the algebraic ring structure underlying most efficient lattice and FHE schemes.
- **Core meaning & mental image — Tiếng Việt**: Vành thương đa thức phân chia vòng tròn (hình ảnh cấu trúc đại số hình tròn xoắn ốc tạo nên sân chơi toán học cho các thuật toán mã hóa hiện đại).
- **Grammar & collocations**:
  - construct a polynomial ring cyclotomic quotient (xây dựng vành thương đa thức phân chia vòng tròn)
  - arithmetic over a polynomial ring cyclotomic quotient (số học trên vành thương đa thức phân chia vòng tròn)
  - polynomial ring cyclotomic quotient dimension (chiều của vành thương đa thức phân chia vòng tròn)
- **Register & nuance**: Algebraic number theory, lattice cryptography foundations.
- **Examples**:
  - *Example 1*: The security of BFV and CKKS cryptosystems depends on the hardness of problems defined over a polynomial ring cyclotomic quotient.
  - *Translation 1*: Tính bảo mật của hệ thống mật mã BFV và CKKS phụ thuộc vào độ khó của các bài toán được định nghĩa trên vành thương đa thức phân chia vòng tròn.
- **Liên kết tiếng Hàn**: 원분 다항식 몫 링 (Won-bun Da-hang-sik Mok Ring) — Vành đại số cơ sở cho các lược đồ mật mã lưới hiệu quả.

---

## 13. secret key distribution security
- **American IPA**: /ˈsiːkrət kiː ˌdɪstrɪˈbjuːʃən sɪˈkjʊrɪti/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The cryptographic guarantee that secret keys sampled from discrete Gaussian distributions reveal no exploitable statistical bias.
- **Core meaning & mental image — Tiếng Việt**: Bảo mật phân phối khóa bí mật (hình ảnh đảm bảo rằng các khóa mã hóa sinh ra từ phân phối xác suất hình chuông hoàn toàn ngẫu nhiên và không bị lệch lạc).
- **Grammar & collocations**:
  - analyze secret key distribution security (phân tích bảo mật phân phối khóa bí mật)
  - maintain secret key distribution security (Duy trì bảo mật phân phối khóa bí mật)
  - secret key distribution security flaw (lỗi bảo mật phân phối khóa bí mật)
- **Register & nuance**: Cryptographic key generation, side-channel resistance.
- **Examples**:
  - *Example 1*: Flaws in random number generators can compromise secret key distribution security in lattice-based cryptosystems.
  - *Translation 1*: Các lỗi trong bộ tạo số ngẫu nhiên có thể làm tổn hại tính bảo mật phân phối khóa bí mật trong các hệ mã hóa dựa trên lưới.
- **Liên kết tiếng Hàn**: 비밀키 분포 보안 (Bi-mil-ki Bun-po Bo-an) — Đảm bảo an toàn thống kê cho các khóa bí mật sinh ra từ phân phối xác suất.

---

## 14. bootstrapping computational latency
- **American IPA**: /ˈbuːtˌstræpɪŋ ˌkɑːmpjuˈteɪʃənəl ˈleɪtənsi/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The heavy CPU or GPU processing delay incurred when refreshing a noisy ciphertext via homomorphic bootstrapping.
- **Core meaning & mental image — Tiếng Việt**: Độ trễ tính toán của việc khởi động lại (hình ảnh khoảng thời gian chờ đợi nặng nề khi con chip phải "tắm rửa" và làm sạch nhiễu cho bản mã).
- **Grammar & collocations**:
  - reduce bootstrapping computational latency (giảm độ trễ tính toán bootstrapping)
  - bottlenecked by bootstrapping computational latency (bị thắt cổ chai bởi độ trễ tính toán bootstrapping)
  - high bootstrapping computational latency (độ trễ tính toán bootstrapping cao)
- **Register & nuance**: FHE performance optimization, systems engineering.
- **Examples**:
  - *Example 1*: Optimizing polynomial multiplication algorithms successfully slashed bootstrapping computational latency by over fifty percent.
  - *Translation 1*: Việc tối ưu hóa các thuật toán nhân đa thức đã cắt giảm thành công độ trễ tính toán bootstrapping hơn năm mươi phần trăm.
- **Liên kết tiếng Hàn**: 부트스트래핑 연산 지연 (Bu-teu-seu-teu-ra-ping Yeon-san Ji-yeon) — Độ trễ xử lý nặng nề khi làm sạch nhiễu bản mã đồng hình.

---

## 15. homomorphic table lookup
- **American IPA**: /ˌhoʊmoʊˈmɔːrfɪk ˈteɪbəl ˈlʊkˌʌp/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The evaluation of non-linear functions on encrypted data by performing lookups inside encrypted tables or using functional bootstrapping.
- **Core meaning & mental image — Tiếng Việt**: Tra cứu bảng đồng hình (hình ảnh tìm kiếm kết quả của hàm phi tuyến tính bên trong một bảng dữ liệu đã được mã hóa).
- **Grammar & collocations**:
  - implement a homomorphic table lookup (thực hiện tra cứu bảng đồng hình)
  - accelerate homomorphic table lookups (tăng tốc tra cứu bảng đồng hình)
  - homomorphic table lookup operation (thao tác tra cứu bảng đồng hình)
- **Register & nuance**: Advanced FHE applications, encrypted database queries.
- **Examples**:
  - *Example 1*: TFHE enables efficient homomorphic table lookups, making private neural network activation functions feasible.
  - *Translation 1*: TFHE cho phép tra cứu bảng đồng hình hiệu quả, giúp các hàm kích hoạt mạng nơ-ron riêng tư trở nên khả thi.
- **Liên kết tiếng Hàn**: 동형 테이블 조회 (Dong-hyeong Te-i-beul Jo-hoe) — Thao tác tra cứu hàm phi tuyến trên dữ liệu mã hóa.

---

## 16. blind ciphertext rotation
- **American IPA**: /blaɪnd ˈsaɪfərtɛxt roʊˈteɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A core algorithmic primitive in TFHE that cyclically shifts encrypted vector slots without revealing the rotation amount to the server.
- **Core meaning & mental image — Tiếng Việt**: Xoay bản mã mù (hình ảnh xoay vòng các vị trí dữ liệu bên trong hộp khóa theo một số bước mà máy chủ không hề hay biết số bước đó là gì).
- **Grammar & collocations**:
  - perform blind ciphertext rotation (thực hiện xoay bản mã mù)
  - blind ciphertext rotation primitive (nguyên thủy xoay bản mã mù)
  - efficient blind ciphertext rotation (xoay bản mã mù hiệu quả)
- **Register & nuance**: TFHE bootstrapping internals, homomorphic barrel shifters.
- **Examples**:
  - *Example 1*: Blind ciphertext rotation is the most computationally intensive step during Torus FHE bootstrapping.
  - *Translation 1*: Xoay bản mã mù là bước tốn kém tài nguyên tính toán nhất trong quá trình khởi động lại Torus FHE.
- **Liên kết tiếng Hàn**: 블라인드 암호문 회전 (Blind Am-ho-mun Hoe-jeon) — Phép xoay vòng vị trí bản mã mà không làm lộ giá trị dịch chuyển.

---

## 17. post-quantum lattice parameter
- **American IPA**: /poʊst ˈkwɑːntəm ˈlætɪs pəˈræmɪtər/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The mathematical dimension, modulus, and error variance configurations chosen to guarantee cryptographic security against quantum attacks.
- **Core meaning & mental image — Tiếng Việt**: Tham số lưới hậu lượng tử (hình ảnh các con số cấu hình độ lớn lưới và biên độ nhiễu để đảm bảo máy tính lượng tử không thể phá vỡ).
- **Grammar & collocations**:
  - select post-quantum lattice parameters (chọn tham số lưới hậu lượng tử)
  - optimize post-quantum lattice parameters (tối ưu hóa tham số lưới hậu lượng tử)
  - secure post-quantum lattice parameter set (bộ tham số lưới hậu lượng tử an toàn)
- **Register & nuance**: Cryptographic standardization, NIST post-quantum cryptography.
- **Examples**:
  - *Example 1*: NIST guidelines recommend specific post-quantum lattice parameters to balance security margins against quantum lattice reduction algorithms.
  - *Translation 1*: Các hướng dẫn của NIST khuyến nghị các tham số lưới hậu lượng tử cụ thể để cân bằng biên độ bảo mật chống lại các thuật toán thu gọn lưới lượng tử.
- **Liên kết tiếng Hàn**: 포스트 퀀텀 격자 매개변수 (Post-keon-teom Gyeok-ja Mae-gae-byeon-su) — Cấu hình tham số đảm bảo an toàn trước các cuộc tấn công lượng tử.

---

## 18. relinearization key size overhead
- **American IPA**: /riːˌlɪnɪəraɪˈzeɪʃən kiː saɪz ˈoʊvərˌhɛd/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The significant memory and storage penalty incurred by storing large auxiliary public keys required to reduce ciphertext dimensions after multiplication.
- **Core meaning & mental image — Tiếng Việt**: Chi phí kích thước khóa tái tuyến tính hóa (hình ảnh gánh nặng lưu trữ các bảng khóa phụ trợ khổng lồ phát sinh sau mỗi phép nhân bản mã).
- **Grammar & collocations**:
  - minimize relinearization key size overhead (giảm thiểu chi phí kích thước khóa tái tuyến tính hóa)
  - relinearization key size overhead in FHE (chi phí kích thước khóa tái tuyến tính hóa trong FHE)
  - scale down relinearization key size overhead (thu nhỏ chi phí kích thước khóa tái tuyến tính hóa)
- **Register & nuance**: FHE memory management, cryptographic storage optimization.
- **Examples**:
  - *Example 1*: High relinearization key size overhead makes running fully homomorphic encryption on memory-constrained IoT devices exceptionally difficult.
  - *Translation 1*: Chi phí kích thước khóa tái tuyến tính hóa lớn khiến việc chạy mã hóa đồng hình hoàn toàn trên các thiết bị IoT bị hạn chế bộ nhớ trở nên cực kỳ khó khăn.
- **Liên kết tiếng Hàn**: 재선형화 키 크기 오버헤드 (Jae-seon-hyeong-hwa Ki Keu-gi O-beo-he-deu) — Gánh nặng bộ nhớ do lưu trữ các khóa phụ trợ trong FHE.

---

## 19. encrypted inference neural network
- **American IPA**: /ɪnˈkrɪptɪd ˈɪnfərans ˈnʊrəl ˈnɛtwɜːrk/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A deep learning model that executes prediction tasks directly on encrypted input data without exposing user privacy or model weights.
- **Core meaning & mental image — Tiếng Việt**: Mạng nơ-ron suy luận mã hóa (hình ảnh trí tuệ nhân tạo đưa ra chẩn đoán hoặc dự đoán trên những dữ liệu được khóa kín từ đầu đến cuối).
- **Grammar & collocations**:
  - deploy an encrypted inference neural network (triển khai mạng nơ-ron suy luận mã hóa)
  - train an encrypted inference neural network (đào tạo mạng nơ-ron suy luận mã hóa)
  - encrypted inference neural network accuracy (độ chính xác của mạng nơ-ron suy luận mã hóa)
- **Register & nuance**: Privacy-preserving machine learning, AI security.
- **Examples**:
  - *Example 1*: Hospital diagnostic systems used an encrypted inference neural network to analyze patient scans hosted on a public cloud.
  - *Translation 1*: Các hệ thống chẩn đoán bệnh viện đã sử dụng mạng nơ-ron suy luận mã hóa để phân tích các bản quét của bệnh nhân được lưu trữ trên đám mây công cộng.
- **Liên kết tiếng Hàn**: 암호화 추론 신경망 (Am-ho-hwa Chu-ron Sin-yeong-mang) — Mô hình AI thực hiện dự đoán trực tiếp trên dữ liệu đã mã hóa.

---

## 20. ciphertext expansion factor
- **American IPA**: /ˈsaɪfərtɛxt ɪkˈspænʃən ˈfæktər/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The multiplier by which data size increases when plaintext is transformed into lattice ciphertexts containing polynomial coefficients and noise.
- **Core meaning & mental image — Tiếng Việt**: Hệ số phồng bản mã (hình ảnh một tệp dữ liệu nhỏ khi được mã hóa thành các đa thức lưới sẽ phình to gấp hàng trăm hoặc hàng nghìn lần).
- **Grammar & collocations**:
  - calculate the ciphertext expansion factor (tính toán hệ số phồng bản mã)
  - large ciphertext expansion factor (hệ số phồng bản mã lớn)
  - mitigate ciphertext expansion factor penalties (giảm thiểu hình phạt do hệ số phồng bản mã)
- **Register & nuance**: Network bandwidth, data storage in homomorphic cryptography.
- **Examples**:
  - *Example 1*: A high ciphertext expansion factor requires robust network bandwidth compression techniques when streaming encrypted video streams.
  - *Translation 1*: Hệ số phồng bản mã lớn đòi hỏi các kỹ thuật nén băng thông mạng mạnh mẽ khi truyền tải các luồng video được mã hóa.
- **Liên kết tiếng Hàn**: 암호문 확장 계수 (Am-ho-mun Hwak-jang Gye-su) — Tỷ lệ tăng kích thước dữ liệu sau khi mã hóa đồng hình.

---

## 21. homomorphic dot product computation
- **American IPA**: /ˌhoʊmoʊˈmɔːrfɪk dɑːt ˈprʌdʌkt ˌkɑːmpjuˈteɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The evaluation of vector inner products entirely within encrypted domains, serving as the core building block for neural network linear layers.
- **Core meaning & mental image — Tiếng Việt**: Tính toán tích vô hướng đồng hình (hình ảnh nhân và cộng tổng các vector dữ liệu ngay bên trong các hộp khóa mà không cần mở).
- **Grammar & collocations**:
  - accelerate homomorphic dot product computation (tăng tốc tính toán tích vô hướng đồng hình)
  - implement homomorphic dot product computations (thực hiện tính toán tích vô hướng đồng hình)
  - homomorphic dot product computation latency (độ trễ tính toán tích vô hướng đồng hình)
- **Register & nuance**: Homomorphic linear algebra, secure AI workloads.
- **Examples**:
  - *Example 1*: Vector processing units accelerated homomorphic dot product computation by executing SIMD polynomial rotations in parallel.
  - *Translation 1*: Các đơn vị xử lý vector đã tăng tốc tính toán tích vô hướng đồng hình bằng cách thực hiện các phép xoay đa thức SIMD song song.
- **Liên kết tiếng Hàn**: 동형 내적 연산 (Dong-hyeong Nae-jeok Yeon-san) — Phép tính tích vô hướng thực hiện trực tiếp trên các vector mã hóa.

---

## 22. SIMD slot batching encoding
- **American IPA**: /ɛs.aɪ.ɛmˈdiː slɑːt ˈbætʃɪŋ ɪnˈkoʊdɪŋ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: An encoding technique that packs multiple individual plaintext values into parallel slots within a single polynomial ciphertext for SIMD processing.
- **Core meaning & mental image — Tiếng Việt**: Mã hóa gom lô khe cắm SIMD (hình ảnh nhét hàng trăm món hàng nhỏ vào các ngăn khác nhau của cùng một chiếc hộp lớn để vận chuyển đồng loạt).
- **Grammar & collocations**:
  - apply SIMD slot batching encoding (áp dụng mã hóa gom lô khe cắm SIMD)
  - SIMD slot batching encoding efficiency (hiệu quả mã hóa gom lô khe cắm SIMD)
  - leverage SIMD slot batching encoding (tận dụng mã hóa gom lô khe cắm SIMD)
- **Register & nuance**: Vectorized FHE performance optimization, CKKS/BFV schemes.
- **Examples**:
  - *Example 1*: SIMD slot batching encoding allows a single encrypted vector to process thousands of database records simultaneously.
  - *Translation 1*: Mã hóa gom lô khe cắm SIMD cho phép một vector mã hóa duy nhất xử lý hàng nghìn bản ghi cơ sở dữ liệu đồng thời.
- **Liên kết tiếng Hàn**: SIMD 슬롯 배치 인코딩 (SIMD Seul-not Bae-chi In-ko-ding) — Kỹ thuật đóng gói nhiều giá trị vào các khe song song của một bản mã duy nhất.

---

## 23. homomorphic database querying
- **American IPA**: /ˌhoʊmoʊˈmɔːrfɪk ˈdeɪtəˌbeɪs ˈkwɪriɪŋ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: Searching and filtering encrypted database records on a remote server without revealing either the query terms or the matching rows to the operator.
- **Core meaning & mental image — Tiếng Việt**: Truy vấn cơ sở dữ liệu đồng hình (hình ảnh gửi từ khóa tìm kiếm được khóa kín vào kho dữ liệu, nhận lại kết quả đúng mà chủ kho không hề biết bạn tìm gì).
- **Grammar & collocations**:
  - support homomorphic database querying (hỗ trợ truy vấn cơ sở dữ liệu đồng hình)
  - secure homomorphic database querying (truy vấn cơ sở dữ liệu đồng hình bảo mật)
  - homomorphic database querying protocol (giao thức truy vấn cơ sở dữ liệu đồng hình)
- **Register & nuance**: Privacy-preserving databases, secure multi-party computation.
- **Examples**:
  - *Example 1*: Financial institutions used homomorphic database querying to check compliance lists without exposing customer account details.
  - *Translation 1*: Các tổ chức tài chính đã sử dụng truy vấn cơ sở dữ liệu đồng hình để kiểm tra danh sách tuân thủ mà không làm lộ chi tiết tài khoản của khách hàng.
- **Liên kết tiếng Hàn**: 동형 데이터베이스 질의 (Dong-hyeong De-i-teo-be-i-seu Jil-ui) — Truy vấn tìm kiếm trên cơ sở dữ liệu mã hóa mà không làm lộ thông tin truy vấn.

---

## 24. zero-knowledge verifiable FHE
- **American IPA**: /ˈzɪroʊ ˈnɑːlɪdʒ ˈvɛrɪfəbəl ɛf.eɪtʃˈiː/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A cryptographic protocol combining zero-knowledge proofs with homomorphic encryption to verify that server computations were executed correctly without tampering.
- **Core meaning & mental image — Tiếng Việt**: FHE có thể xác thực bằng chứng không kiến thức (hình ảnh bằng chứng toán học chứng minh máy chủ đã tính toán đúng bản mã mà không cần hé lộ dữ liệu bên trong).
- **Grammar & collocations**:
  - implement zero-knowledge verifiable FHE (triển khai FHE có thể xác thực bằng chứng không kiến thức)
  - zero-knowledge verifiable FHE protocol (giao thức FHE có thể xác thực bằng chứng không kiến thức)
  - ensure zero-knowledge verifiable FHE (đảm bảo FHE có thể xác thực bằng chứng không kiến thức)
- **Register & nuance**: Cutting-edge cryptographic verification, decentralized trust.
- **Examples**:
  - *Example 1*: Zero-knowledge verifiable FHE ensures that malicious cloud operators cannot return falsified encrypted computation results.
  - *Translation 1*: FHE có thể xác thực bằng chứng không kiến thức đảm bảo rằng các nhà điều hành đám mây độc hại không thể trả về các kết quả tính toán mã hóa bị làm giả.
- **Liên kết tiếng Hàn**: 영지식 검증 가능한 FHE (yeong-ji-sik Geom-jeung Ga-neung-han FHE) — Giao thức kết hợp bằng chứng không lộ thông tin với mã hóa đồng hình.

---

## 25. privacy-preserving cloud computing
- **American IPA**: /ˈprɪvəsi prɪˈzɜːrvɪŋ klaʊd kəmˈpjuːtɪŋ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning & mental image**: Computing paradigms—such as FHE, secure enclaves, and multi-party computation—that process data in the cloud while maintaining complete confidentiality.
- **Core meaning — English**: Điện toán đám mây bảo tồn quyền riêng tư (hình ảnh gửi dữ liệu lên đám mây ở trạng thái khóa kín, mọi tính toán diễn ra bên trong chiếc hộp an toàn mà không ai nhìn thấy).
- **Grammar & collocations**:
  - advance privacy-preserving cloud computing (thúc đẩy điện toán đám mây bảo tồn quyền riêng tư)
  - paradigm of privacy-preserving cloud computing (mô hình điện toán đám mây bảo tồn quyền riêng tư)
  - commercialize privacy-preserving cloud computing (thương mại hóa điện toán đám mây bảo tồn quyền riêng tư)
- **Register & nuance**: Enterprise security, cloud architecture, data privacy regulations (GDPR, HIPAA).
- **Examples**:
  - *Example 1*: Breakthroughs in fully homomorphic encryption are turning privacy-preserving cloud computing into a commercial reality.
  - *Translation 1*: Những đột phá trong mã hóa đồng hình hoàn toàn đang biến điện toán đám mây bảo tồn quyền riêng tư thành hiện thực thương mại.
- **Liên kết tiếng Hàn**: 프라이버시 보존 클라우드 컴퓨팅 (Peu-ra-i-beo-si Bo-jon Keul-la-u-deu Keom-pyu-ting) — Điện toán đám mây xử lý dữ liệu mà vẫn bảo mật tuyệt đối tính riêng tư.

---

## Review in context: Part 1 (items 1–12)

Modern cryptography enables outsourced computations through a robust **1. fully homomorphic encryption scheme**. By leveraging **2. TFHE torus bootstrapping**, systems can rapidly clean accumulated mathematical noise without relying on decryption. However, every homomorphic multiplication triggers **3. lattice ciphertext noise growth**, rooted in the mathematical hardness of the **4. learning with errors hardness** assumption. To make these systems efficient, cryptographers utilize **5. ring learning with errors polynomials** defined over a **6. polynomial ring cyclotomic quotient**. When executing **7. homomorphic cipher multiplication**, noise escalates rapidly, necessitating frequent **8. modulus switching noise reduction** steps. Furthermore, switching between different keys during deep evaluations requires a complex **9. key switching matrix transformation**. When applications are compiled into a **10. leveled homomorphic computation** or a full **11. homomorphic evaluate circuit**, bounding the **12. canonical embedding norm** ensures that algebraic security margins are strictly maintained.

### Bản dịch tiếng Việt phần 1:
Mật mã học hiện đại cho phép thực hiện các phép tính thuê ngoài thông qua một **1. hệ mã hóa đồng hình hoàn toàn** mạnh mẽ. Bằng cách tận dụng **2. khởi động lại hình xuyến TFHE**, các hệ thống có thể nhanh chóng làm sạch nhiễu toán học tích lũy mà không cần dựa vào việc giải mã. Tuy nhiên, mọi phép nhân đồng hình đều châm ngòi cho **3. sự gia tăng nhiễu bản mã trên lưới**, bắt nguồn từ độ khó toán học của giả định **4. độ khó học có sai số**. Để làm cho các hệ thống này hiệu quả, các nhà mật mã học sử dụng các **5. đa thức học có sai số trên vành** được định nghĩa trên một **6. vành thương đa thức phân chia vòng tròn**. Khi thực hiện **7. phép nhân bản mã đồng hình**, nhiễu leo thang nhanh chóng, đòi hỏi các bước **8. giảm nhiễu chuyển mạch mô-đun** thường xuyên. Hơn nữa, việc chuyển đổi giữa các khóa khác nhau trong các quá trình đánh giá sâu đòi hỏi một **9. biến đổi ma trận chuyển khóa** phức tạp. Khi các ứng dụng được biên dịch thành **10. tính toán đồng hình theo phân cấp tầng** hoặc một **11. mạch đánh giá đồng hình** đầy đủ, việc giới hạn **12. chuẩn nhúng chuẩn tắc** đảm bảo rằng các biên độ bảo mật đại số được duy trì nghiêm ngặt.

---

## Review in context: Part 2 (items 13–25)

Ensuring long-term security requires rigorous control over **13. secret key distribution security** and careful selection of **14. bootstrapping computational latency** parameters. Advanced FHE toolchains integrate **15. homomorphic table lookup** and **16. blind ciphertext rotation** to handle non-linear logic efficiently. Selecting the appropriate **17. post-quantum lattice parameter** is vital to counter quantum threats, while engineers must carefully monitor **18. relinearization key size overhead** to prevent memory bottlenecks. These techniques empower secure AI applications, such as an **19. encrypted inference neural network** processing private diagnostics. Because raw data expands drastically during encryption, managing the **20. ciphertext expansion factor** is crucial for network efficiency. By executing a **21. homomorphic dot product computation** via **22. SIMD slot batching encoding**, servers can process massive parallel data streams. Ultimately, this paves the way for secure **23. homomorphic database querying**, bolstered by **24. zero-knowledge verifiable FHE**, culminating in the grand vision of **25. privacy-preserving cloud computing**.

### Bản dịch tiếng Việt phần 2:
Đảm bảo an ninh lâu dài đòi hỏi sự kiểm soát nghiêm ngặt đối với **13. bảo mật phân phối khóa bí mật** và lựa chọn cẩn thận các tham số **14. độ trễ tính toán bootstrapping**. Các chuỗi công cụ FHE nâng cao tích hợp **15. tra cứu bảng đồng hình** và **16. xoay bản mã mù** để xử lý logic phi tuyến tính một cách hiệu quả. Việc lựa chọn **17. tham số lưới hậu lượng tử** phù hợp là yếu tố sống còn để chống lại các mốiis đe dọa lượng tử, trong khi các kỹ sư phải theo dõi cẩn thận **18. chi phí kích thước khóa tái tuyến tính hóa** để ngăn chặn nút thắt cổ chai về bộ nhớ. Các kỹ thuật này trao quyền cho các ứng dụng AI an toàn, chẳng hạn như một **19. mạng nơ-ron suy luận mã hóa** xử lý các chẩn đoán riêng tư. Do dữ liệu thô phình to đáng kể trong quá trình mã hóa, việc quản lý **20. hệ số phồng bản mã** là tối quan trọng đối với hiệu quả mạng. Bằng cách thực hiện **21. tính toán tích vô hướng đồng hình** thông qua **22. mã hóa gom lô khe cắm SIMD**, các máy chủ có thể xử lý các luồng dữ liệu song song khổng lồ. Cuối cùng, điều này mở đường cho **23. truy vấn cơ sở dữ liệu đồng hình** an toàn, được hậu thuẫn bởi **24. FHE có thể xác thực bằng chứng không kiến thức**, hướng tới tầm nhìn lớn lao của **25. điện toán đám mây bảo tồn quyền riêng tư**.
