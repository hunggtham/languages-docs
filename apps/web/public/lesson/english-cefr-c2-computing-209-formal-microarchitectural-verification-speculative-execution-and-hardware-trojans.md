# C2 Vocabulary 209 — Formal microarchitectural verification, speculative execution transients, and hardware Trojan detection

This lesson explores advanced concepts in computer architecture security, formal verification, speculative execution vulnerabilities, and hardware Trojan detection.

---

## 1. microarchitectural formal verification
- **American IPA**: /ˌmaɪkroʊˌɑːrkəˈtɛktʃərəl ˈfɔːrməl ˌvɛrɪfɪˈkeɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The mathematical proof or exhaustive checking of hardware designs against functional and security specifications at the microarchitectural level.
- **Core meaning & mental image — Tiếng Việt**: Kiểm định hình thức vi kiến trúc (hình ảnh dùng toán học kiểm tra từng trạng thái logic của chip để chứng minh không có lỗ hổng thiết kế).
- **Grammar & collocations**:
  - perform microarchitectural formal verification (thực hiện kiểm định hình thức vi kiến trúc)
  - automated microarchitectural formal verification (kiểm định hình thức vi kiến trúc tự động)
  - microarchitectural formal verification framework (khung kiểm định hình thức vi kiến trúc)
- **Register & nuance**: Formal, highly technical, academic and industrial hardware security research.
- **Examples**:
  - *Example 1*: Engineers applied microarchitectural formal verification to prove that the out-of-order execution engine leaks no privileged state.
  - *Translation 1*: Các kỹ sư đã áp dụng kiểm định hình thức vi kiến trúc để chứng minh rằng động cơ thực thi ngoài thứ tự không rò rỉ trạng thái đặc quyền nào.
- **Liên kết tiếng Hàn**: 미세아키텍처 형식 검증 (Mi-se-a-ki-tek-cheo Hyong-sik Geom-jeung) — Sử dụng logic toán học để chứng minh tính đúng đắn của vi kiến trúc phần cứng.

---

## 2. speculative execution side-channel
- **American IPA**: /ˈspɛkjəleɪtɪv ˌɛksəˈkjuːʃən ˈsaɪdˌtʃænəl/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A vulnerability class where speculative execution leaves microarchitectural footprints in shared hardware caches that are later measured to infer secret data.
- **Core meaning & mental image — Tiếng Việt**: Kênh phụ thực thi đầu cơ (hình ảnh CPU đoán trước nhánh rẽ, để lại dấu vết dữ liệu nhạy cảm trong bộ nhớ đệm rồi bị kẻ tấn công đo lường thời gian truy cập).
- **Grammar & collocations**:
  - exploit a speculative execution side-channel (khai thác kênh phụ thực thi đầu cơ)
  - mitigate speculative execution side-channels (giảm thiểu các kênh phụ thực thi đầu cơ)
  - speculative execution side-channel attack (tấn công kênh phụ thực thi đầu cơ)
- **Register & nuance**: Technical, cybersecurity, hardware architecture vulnerability terminology.
- **Examples**:
  - *Example 1*: The security patch introduced serialization barriers to prevent speculative execution side-channels across user and kernel space.
  - *Translation 1*: Bản vá bảo mật đã giới thiệu các rào cản tuần tự hóa để ngăn chặn các kênh phụ thực thi đầu cơ giữa không gian người dùng và nhân hệ thống.
- **Liên kết tiếng Hàn**: 투기적 실행 부채널 (Tu-gi-jeok Sil-haeng Bu-chae-neol) — Lỗ hổng bảo mật khai thác dấu vết bộ nhớ đệm từ quá trình dự đoán lệnh của CPU.

---

## 3. hardware Trojan payload activation
- **American IPA**: /ˈhɑːrdwɛr ˈtroʊdʒən ˈpeɪloʊd ˌæktɪˈveɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or direct object).
- **Core meaning — English**: The triggering mechanism that awakens a malicious, maliciously inserted logic circuit within an integrated circuit during specific operational conditions.
- **Core meaning & mental image — Tiếng Việt**: Kích hoạt tải trọng Trojan phần cứng (hình ảnh đoạn mạch độc hại ngủ ngầm trong chip bỗng được đánh thức khi gặp một chuỗi điều kiện logic cụ thể).
- **Grammar & collocations**:
  - trigger hardware Trojan payload activation (kích hoạt tải trọng Trojan phần cứng)
  - monitor for hardware Trojan payload activation (giám sát việc kích hoạt tải trọng Trojan phần cứng)
  - hardware Trojan payload activation condition (điều kiện kích hoạt tải trọng Trojan phần cứng)
- **Register & nuance**: Highly technical, hardware security, supply chain trust analysis.
- **Examples**:
  - *Example 1*: Rare instruction sequences served as the trigger for the hardware Trojan payload activation during fabrication tests.
  - *Translation 1*: Các chuỗi lệnh hiếm gặp đóng vai trò là tác nhân kích hoạt tải trọng Trojan phần cứng trong các bài kiểm tra chế tạo.
- **Liên kết tiếng Hàn**: 하드웨어 트로이 목마 페이로드 활성화 (Ha-deu-w-eo Teu-ro-i Mok-ma Pei-ro-deu Hwal-seong-hwa) — Quá trình đánh thức mạch điện độc hại được cài cắm sẵn trong chip silicon.

---

## 4. transient execution vulnerability
- **American IPA**: /ˈtrænziənt ˌɛksəˈkjuːʃən ˌvʌlnərəˈbɪləti/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A hardware flaw where instructions executed speculatively before a branch misprediction is resolved leave observable microarchitectural side effects.
- **Core meaning & mental image — Tiếng Việt**: Lỗ hổng thực thi tạm thời (hình ảnh các câu lệnh chạy đoán mò rồi bị hủy bỏ, nhưng kịp để lại dấu vết vật lý trong bộ nhớ cache).
- **Grammar & collocations**:
  - discover a transient execution vulnerability (phát hiện lỗ hổng thực thi tạm thời)
  - patch a transient execution vulnerability (vá lỗ hổng thực thi tạm thời)
  - transient execution vulnerability class (lớp lỗ hổng thực thi tạm thời)
- **Register & nuance**: Specialized cybersecurity and processor design terminology.
- **Examples**:
  - *Example 1*: Modern CPU architectures require hardware-level redesigns to eliminate deep-seated transient execution vulnerabilities.
  - *Translation 1*: Các kiến trúc CPU hiện đại đòi hỏi phải thiết kế lại ở mức phần cứng để loại bỏ các lỗ hổng thực thi tạm thời bám sâu.
- **Liên kết tiếng Hàn**: 과도적 실행 취약점 (Gwa-do-jeok Sil-haeng Chwi-yak-jeom) — Điểm yếu kiến trúc khi lệnh chạy tạm thời để lại dấu vết trước khi bị hủy bỏ.

---

## 5. silicon golden model equivalence
- **American IPA**: /ˈsɪlɪkən ˈɡoʊldən ˈmɑːdəl ɪˈkwɪvələns/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or direct object).
- **Core meaning — English**: The mathematical property ensuring that a fabricated silicon implementation behaves identically to its verified reference specification model.
- **Core meaning & mental image — Tiếng Việt**: Tính tương đương mô hình chuẩn silicon (hình ảnh đối chiếu từng cổng logic của con chip thực tế với mô hình lý thuyết hoàn hảo để đảm bảo không có sai lệch).
- **Grammar & collocations**:
  - verify silicon golden model equivalence (kiểm chứng tính tương đương mô hình chuẩn silicon)
  - prove silicon golden model equivalence (chứng minh tính tương đương mô hình chuẩn silicon)
  - silicon golden model equivalence checking (kiểm tra tính tương đương mô hình chuẩn silicon)
- **Register & nuance**: Formal verification and semiconductor manufacturing terminology.
- **Examples**:
  - *Example 1*: Ensuring silicon golden model equivalence prevents subtle fabrication discrepancies from introducing security flaws.
  - *Translation 1*: Đảm bảo tính tương đương mô hình chuẩn silicon giúp ngăn chặn các sai lệch chế tạo tinh vi làm phát sinh lỗi bảo mật.
- **Liên kết tiếng Hàn**: 실리콘 골든 모델 동등성 (Sil-i-kon Gol-deun Mo-del Dong-deung-seong) — Sự tương đương chính xác giữa mô hình thiết kế chuẩn và chip silicon thực tế.

---

## 6. register-transfer level model checking
- **American IPA**: /ˈrɛdʒɪstər ˈtrænsfər ˈlɛvəl ˈmɑːdəl ˈtʃɛkɪŋ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: An automated verification technique that explores all possible states of an RTL hardware description to verify safety and liveness properties.
- **Core meaning & mental image — Tiếng Việt**: Kiểm tra mô hình mức chuyển đổi thanh ghi (hình ảnh quét toàn bộ các trạng thái thanh ghi và mạch tổ hợp ở mã nguồn RTL để tìm lỗi logic).
- **Grammar & collocations**:
  - perform register-transfer level model checking (thực hiện kiểm tra mô hình mức chuyển đổi thanh ghi)
  - register-transfer level model checking tool (công cụ kiểm tra mô hình mức chuyển đổi thanh ghi)
  - scalable register-transfer level model checking (kiểm tra mô hình mức chuyển đổi thanh ghi có khả năng mở rộng)
- **Register & nuance**: Hardware description language (HDL) design and formal verification.
- **Examples**:
  - *Example 1*: Register-transfer level model checking uncovered a deadlocked arbitration state in the memory controller.
  - *Translation 1*: Kiểm tra mô hình mức chuyển đổi thanh ghi đã phát hiện một trạng thái phân xử bị kẹt chết trong bộ điều khiển bộ nhớ.
- **Liên kết tiếng Hàn**: 레지스터 전송 레벨 모델 검사 (Re-ji-seu-teo Jeon-song Re-bel Mo-del Geom-sa) — Phương pháp kiểm tra hình thức mã nguồn phần cứng RTL.

---

## 7. speculative taint analysis
- **American IPA**: /ˈspɛkjəleɪtɪv teɪnt əˈnæləsɪs/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or direct object).
- **Core meaning — English**: A formal analysis method that tracks how secret-tainted data propagates through speculative execution paths in hardware pipelines.
- **Core meaning & mental image — Tiếng Việt**: Phân tích nhiễm độc đầu cơ (hình ảnh gắn nhãn "độc hại/bí mật" cho dữ liệu và theo dõi xem nó lan truyền qua các đường ống lệnh dự đoán như thế nào).
- **Grammar & collocations**:
  - conduct speculative taint analysis (tiến hành phân tích nhiễm độc đầu cơ)
  - speculative taint analysis engine (cỗ máy phân tích nhiễm độc đầu cơ)
  - hardware speculative taint analysis (phân tích nhiễm độc đầu cơ phần cứng)
- **Register & nuance**: Advanced academic research and microprocessor security design.
- **Examples**:
  - *Example 1*: Speculative taint analysis revealed that cache state changes could leak unencrypted cryptographic keys.
  - *Translation 1*: Phân tích nhiễm độc đầu cơ tiết lộ rằng các thay đổi trạng thái bộ nhớ đệm có thể làm rò rỉ khóa mã hóa chưa mã hóa.
- **Liên kết tiếng Hàn**: 투기적 오염 분석 (Tu-gi-jeok O-yeom Bun-seok) — Phương pháp theo dõi sự lan truyền dữ liệu bí mật qua các lệnh thực thi đầu cơ.

---

## 8. hardware property specification language
- **American IPA**: /ˈhɑːrdwɛr ˈprɑːpərti ˌspɛsɪfɪˈkeɪʃən ˈlæŋɡwɪdʒ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A formal language (such as PSL or SVA) used to assert temporal logic properties and invariants that a hardware design must satisfy.
- **Core meaning & mental image — Tiếng Việt**: Ngôn ngữ đặc tả tính chất phần cứng (hình ảnh viết các mệnh đề logic thời gian chính xác để ép vi mạch phải tuân thủ tuyệt đối).
- **Grammar & collocations**:
  - write hardware property specification language assertions (viết các khẳng định bằng ngôn ngữ đặc tả tính chất phần cứng)
  - standard hardware property specification language (ngôn ngữ đặc tả tính chất phần cứng tiêu chuẩn)
  - hardware property specification language compiler (trình biên dịch ngôn ngữ đặc tả tính chất phần cứng)
- **Register & nuance**: Formal verification standards, IEEE standards (e.g., PSL, SystemVerilog Assertions).
- **Examples**:
  - *Example 1*: Designers wrote rigorous checks in a hardware property specification language to verify bus protocol compliance.
  - *Translation 1*: Các nhà thiết kế đã viết các bài kiểm tra nghiêm ngặt bằng ngôn ngữ đặc tả tính chất phần cứng để xác minh tính tuân thủ giao thức bus.
- **Liên kết tiếng Hàn**: 하드웨어 속성 명세 언어 (Ha-deu-w-eo Sok-seong Myeong-se Eon-eo) — Ngôn ngữ hình thức dùng để định nghĩa các thuộc tính và bất biến của phần cứng.

---

## 9. cache timing attack surface
- **American IPA**: /kæʃ ˈtaɪmɪŋ əˈtæk ˈsɜːrfɪs/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The exposure area in a processor's memory hierarchy where variations in cache access latency can be measured by untrusted code.
- **Core meaning & mental image — Tiếng Việt**: Bề mặt tấn công thời gian bộ nhớ đệm (hình ảnh khoảng hở trong hệ thống cache cho phép kẻ thù đo độ trễ truy xuất để đoán dữ liệu bí mật).
- **Grammar & collocations**:
  - minimize the cache timing attack surface (giảm thiểu bề mặt tấn công thời gian bộ nhớ đệm)
  - expose a cache timing attack surface (để lộ bề mặt tấn công thời gian bộ nhớ đệm)
  - reduce cache timing attack surfaces (thu hẹp các bề mặt tấn công thời gian bộ nhớ đệm)
- **Register & nuance**: Cybersecurity, side-channel analysis, cache architecture.
- **Examples**:
  - *Example 1*: Partitioning the L3 cache effectively reduced the cache timing attack surface in multi-tenant cloud servers.
  - *Translation 1*: Việc phân vùng bộ nhớ đệm L3 đã làm giảm hiệu quả bề mặt tấn công thời gian bộ nhớ đệm trong các máy chủ đám mây đa khách thuê.
- **Liên kết tiếng Hàn**: 캐시 타이밍 공격 표면 (Ka-si Tai-ming Gong-gyeok Pyo-myeon) — Vùng lộ thiên trong hệ thống cache dễ bị khai thác qua độ trễ thời gian.

---

## 10. cryptographic coprocessor leakage
- **American IPA**: /ˌkrɪptəˈɡræfɪk ˈkoʊprɑːsɛsər ˈliːkɪdʒ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or direct object).
- **Core meaning — English**: Unintended electromagnetic, power, or timing emissions from a dedicated crypto accelerator that betray secret keys.
- **Core meaning & mental image — Tiếng Việt**: Sự rò rỉ của bộ đồng xử lý mật mã (hình ảnh bộ tăng tốc mã hóa phát ra các tín hiệu điện từ hoặc dòng điện tiết lộ khóa bí mật bên trong).
- **Grammar & collocations**:
  - measure cryptographic coprocessor leakage (đo lường sự rò rỉ của bộ đồng xử lý mật mã)
  - mitigate cryptographic coprocessor leakage (giảm thiểu rò rỉ từ bộ đồng xử lý mật mã)
  - side-channel cryptographic coprocessor leakage (rò rỉ kênh phụ của bộ đồng xử lý mật mã)
- **Register & nuance**: Hardware security, cryptographic engineering, power analysis.
- **Examples**:
  - *Example 1*: Differential power analysis successfully extracted RSA keys from cryptographic coprocessor leakage during signature generation.
  - *Translation 1*: Phân tích công suất vi sai đã trích xuất thành công các khóa RSA từ sự rò rỉ của bộ đồng xử lý mật mã trong quá trình tạo chữ ký.
- **Liên kết tiếng Hàn**: 암호 보조프로세서 누출 (Am-ho Bo-jo-peu-ro-se-seo Nu-chul) — Hiện tượng rò rỉ thông tin mật từ bộ xử lý mã hóa chuyên dụng.

---

## 11. side-channel timing fence primitive
- **American IPA**: /ˈsaɪdˌtʃænəl ˈtaɪmɪŋ fɛns ˈprɪmɪtɪv/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A low-level hardware or software instruction primitive that forces execution synchronization to prevent timing inference attacks.
- **Core meaning & mental image — Tiếng Việt**: Nguyên thủy hàng rào thời gian kênh phụ (hình ảnh rào chắn kỹ thuật ép các luồng lệnh đồng bộ hóa để kẻ tấn công không thể đo chênh lệch thời gian).
- **Grammar & collocations**:
  - implement a side-channel timing fence primitive (triển khai nguyên thủy hàng rào thời gian kênh phụ)
  - insert a timing fence primitive (chèn nguyên thủy hàng rào thời gian)
  - hardware-backed timing fence primitive (nguyên thủy hàng rào thời gian được hỗ trợ bởi phần cứng)
- **Register & nuance**: Secure coding, microarchitectural mitigation engineering.
- **Examples**:
  - *Example 1*: The compiler inserted a side-channel timing fence primitive after every secret-dependent branch comparison.
  - *Translation 1*: Trình biên dịch đã chèn một nguyên thủy hàng rào thời gian kênh phụ sau mỗi lần so sánh nhánh phụ thuộc vào bí mật.
- **Liên kết tiếng Hàn**: 부채널 타이밍 펜스 프리미티브 (Bu-chae-neol Tai-ming Pen-seu Peu-ri-mi-ti-bu) — Khối lệnh hoặc phần cứng đồng bộ hóa nhằm chống tấn công đo thời gian.

---

## 12. microarchitectural covert channel
- **American IPA**: /ˌmaɪkroʊˌɑːrkəˈtɛktʃərəl ˈkoʊvɜːrt ˈtʃænəl/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: An unauthorized communication channel that transfers data between isolated processes by modulating shared microarchitectural resources like caches or branch predictors.
- **Core meaning & mental image — Tiếng Việt**: Kênh ngầm vi kiến trúc (hình ảnh hai tiến trình biệt lập truyền tin lén lút bằng cách thay đổi trạng thái bộ nhớ đệm hoặc bộ dự đoán nhánh).
- **Grammar & collocations**:
  - establish a microarchitectural covert channel (thiết lập kênh ngầm vi kiến trúc)
  - detect microarchitectural covert channels (phát hiện các kênh ngầm vi kiến trúc)
  - high-bandwidth microarchitectural covert channel (kênh ngầm vi kiến trúc băng thông cao)
- **Register & nuance**: Advanced OS security, threat modeling, hardware isolation.
- **Examples**:
  - *Example 1*: Security analysts demonstrated a microarchitectural covert channel that leaked encryption keys across virtual machine boundaries.
  - *Translation 1*: Các nhà phân tích bảo mật đã chứng minh một kênh ngầm vi kiến trúc làm rò rỉ khóa mã hóa qua các ranh giới máy ảo.
- **Liên kết tiếng Hàn**: 미세아키텍처 은닉 채널 (Mi-se-a-ki-tek-cheo Eun-nik Chae-neol) — Kênh truyền thông lén lút giữa các tiến trình qua tài nguyên vi kiến trúc chia sẻ.

---

## 13. formal bounded model checker
- **American IPA**: /ˈfɔːrməl ˈbaʊndɪd ˈmɑːdəl ˈtʃɛkər/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A verification tool that exhaustively checks system properties up to a specified maximum execution depth or clock cycle limit.
- **Core meaning & mental image — Tiếng Việt**: Bộ kiểm tra mô hình giới hạn hình thức (hình ảnh công cụ toán học quét cạn kiệt các trạng thái của hệ thống trong một giới hạn số bước thời gian cụ thể).
- **Grammar & collocations**:
  - run a formal bounded model checker (chạy bộ kiểm tra mô hình giới hạn hình thức)
  - configure a formal bounded model checker (cấu hình bộ kiểm tra mô hình giới hạn hình thức)
  - formal bounded model checker output (đầu ra của bộ kiểm tra mô hình giới hạn hình thức)
- **Register & nuance**: Formal verification, hardware design debugging, automated theorem proving.
- **Examples**:
  - *Example 1*: The formal bounded model checker verified twenty clock cycles of pipeline transitions without finding counterexamples.
  - *Translation 1*: Bộ kiểm tra mô hình giới hạn hình thức đã xác minh hai mươi chu kỳ xung nhịp của quá trình chuyển đổi ống lệnh mà không tìm thấy ví dụ phản bác nào.
- **Liên kết tiếng Hàn**: 형식적 유계 모델 체커 (Hyeong-sik-jeok Yu-gye Mo-del Che-keo) — Công cụ kiểm tra tính chất hệ thống trong giới hạn số bước cụ thể.

---

## 14. hardware security assertion
- **American IPA**: /ˈhɑːrdwɛr sɪˈkjʊrɪti əˈsɜːrʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A logical statement embedded in hardware designs that monitors for illegal state transitions or security policy violations during simulation or runtime.
- **Core meaning & mental image — Tiếng Việt**: Khẳng định bảo mật phần cứng (hình ảnh các chốt gác logic nhúng trong mạch, lập tức hú còi khi phát hiện trạng thái truy cập trái phép).
- **Grammar & collocations**:
  - embed a hardware security assertion (nhúng một khẳng định bảo mật phần cứng)
  - evaluate hardware security assertions (đánh giá các khẳng định bảo mật phần cứng)
  - violate a hardware security assertion (vi phạm khẳng định bảo mật phần cứng)
- **Register & nuance**: RTL design, SoC security validation, assertion-based verification.
- **Examples**:
  - *Example 1*: A hardware security assertion triggered immediately when unauthenticated DMA requests attempted to access secure memory.
  - *Translation 1*: Một khẳng định bảo mật phần cứng đã kích hoạt ngay lập tức khi các yêu cầu DMA chưa xác thực cố gắng truy cập bộ nhớ bảo mật.
- **Liên kết tiếng Hàn**: 하드웨어 보안 단언 (Ha-deu-w-eo Bo-an Dan-eon) — Tuyên bố logic trong thiết kế phần cứng nhằm giám sát vi phạm bảo mật.

---

## 15. out-of-order execution rollback
- **American IPA**: /aʊt əv ˈɔːrdər ˈɛksəˈkjuːʃən ˈroʊlˌbæk/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The processor mechanism that discards speculative results and restores architectural registers to a precise state after a branch misprediction.
- **Core meaning & mental image — Tiếng Việt**: Cơ chế hoàn tác thực thi ngoài thứ tự (hình ảnh tua ngược trạng thái của CPU về thời điểm trước khi đoán sai nhánh, xóa bỏ mọi kết quả tính toán thừa).
- **Grammar & collocations**:
  - trigger an out-of-order execution rollback (kích hoạt cơ chế hoàn tác thực thi ngoài thứ tự)
  - handle out-of-order execution rollbacks (xử lý việc hoàn tác thực thi ngoài thứ tự)
  - out-of-order execution rollback latency (độ trễ hoàn tác thực thi ngoài thứ tự)
- **Register & nuance**: Microarchitecture design, superscalar processor pipeline mechanics.
- **Examples**:
  - *Example 1*: Branch mispredictions force an out-of-order execution rollback that flushes intermediate speculative states from the pipeline.
  - *Translation 1*: Dự đoán nhánh sai buộc phải thực thi cơ chế hoàn tác ngoài thứ tự nhằm xóa sạch các trạng thái đầu cơ trung gian khỏi đường ống lệnh.
- **Liên kết tiếng Hàn**: 비순차적 실행 롤백 (Bi-sun-cha-jeok Sil-haeng Rol-baek) — Cơ chế khôi phục trạng thái CPU khi dự đoán nhánh sai.

---

## 16. side-channel mitigation barrier
- **American IPA**: /ˈsaɪdˌtʃænəl ˌmɪtɪˈɡeɪʃən ˈbæriər/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A hardware instruction barrier designed to stop speculative execution from bypassing security privilege boundaries.
- **Core meaning & mental image — Tiếng Việt**: Rào chắn giảm thiểu kênh phụ (hình ảnh bức tường ngăn cản lệnh đoán mò vượt qua ranh giới bảo mật).
- **Grammar & collocations**:
  - deploy a side-channel mitigation barrier (triển khai rào chắn giảm thiểu kênh phụ)
  - bypass a side-channel mitigation barrier (vượt qua rào chắn giảm thiểu kênh phụ)
  - overhead of side-channel mitigation barriers (chi phí vận hành của các rào chắn giảm thiểu kênh phụ)
- **Register & nuance**: CPU security engineering, OS kernel architecture.
- **Examples**:
  - *Example 1*: Inserting a side-channel mitigation barrier before indirect branches prevents speculative data disclosure.
  - *Translation 1*: Việc chèn rào chắn giảm thiểu kênh phụ trước các nhánh gián tiếp giúp ngăn chặn việc tiết lộ dữ liệu đầu cơ.
- **Liên kết tiếng Hàn**: 부채널 완화 장벽 (Bu-chae-neol Wan-hwa Jang-byeok) — Rào cản phần cứng/phần mềm ngăn chặn rò rỉ kênh phụ.

---

## 17. untrusted silicon foundry audit
- **American IPA**: /ʌnˈtrʌstɪd ˈsɪlɪkən ˈfaʊndri ˈɔːdɪt/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The rigorous inspection and testing process applied to integrated circuits fabricated in third-party semiconductor manufacturing plants.
- **Core meaning & mental image — Tiếng Việt**: Kiểm toán xưởng đúc silicon không tin cậy (hình ảnh kiểm tra gắt gao từng lớp mạch của con chip được sản xuất ở nhà máy bên ngoài để phát hiện tệp tin độc hại).
- **Grammar & collocations**:
  - conduct an untrusted silicon foundry audit (tiến hành kiểm toán xưởng đúc silicon không tin cậy)
  - subject chips to an untrusted silicon foundry audit (đưa các con chip vào quy trình kiểm toán xưởng đúc không tin cậy)
  - untrusted silicon foundry audit protocol (giao thức kiểm toán xưởng đúc silicon không tin cậy)
- **Register & nuance**: Semiconductor supply chain security, defense electronics.
- **Examples**:
  - *Example 1*: High-reliability defense systems mandate an untrusted silicon foundry audit using reverse-engineering and optical inspection.
  - *Translation 1*: Các hệ thống quốc phòng độ tin cậy cao đòi hỏi phải kiểm toán xưởng đúc silicon không tin cậy bằng phương pháp kỹ thuật đảo ngược và kiểm tra quang học.
- **Liên kết tiếng Hàn**: 신뢰할 수 없는 실리콘 파운드리 감사 (Sin-roe-hal Su Eop-neun Sil-i-kon Pa-un-deu-ri Gam-sa) — Quy trình kiểm tra vi mạch chế tạo tại các xưởng bên ngoài.

---

## 18. physical unclonable function verification
- **American IPA**: /ˈfɪzɪkəl ʌnˈkloʊnəbəl ˈfʌŋkʃən ˌvɛrɪfɪˈkeɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The validation process that tests hardware-based unique cryptographic identifiers derived from microscopic physical manufacturing variations.
- **Core meaning & mental image — Tiếng Việt**: Kiểm định hàm không thể sao chép vật lý (hình ảnh xác thực dấu vân tay phần cứng độc nhất dựa trên sai số vi mô trong quá trình đúc silicon).
- **Grammar & collocations**:
  - perform physical unclonable function verification (thực hiện kiểm định hàm không thể sao chép vật lý)
  - robust physical unclonable function verification (kiểm định hàm không thể sao chép vật lý bền vững)
  - physical unclonable function verification scheme (phương án kiểm định hàm không thể sao chép vật lý)
- **Register & nuance**: Hardware security, device authentication, cryptographic root of trust.
- **Examples**:
  - *Example 1*: Physical unclonable function verification ensures that every manufactured chip possesses a tamper-proof hardware fingerprint.
  - *Translation 1*: Kiểm định hàm không thể sao chép vật lý đảm bảo rằng mỗi con chip được sản xuất đều sở hữu một dấu vân tay phần cứng chống giả mạo.
- **Liên kết tiếng Hàn**: 물리적 복제 방지 함수 검증 (Mul-li-jeok Bok-je Bang-ji Ham-su Geom-jeung) — Xác thực định danh phần cứng độc nhất dựa trên đặc tính vật lý vi mô.

---

## 19. glitch fault injection analysis
- **American IPA**: /ɡlɪtʃ fɔːlt ɪnˈdɛkʃən əˈnæləsɪs/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The security evaluation technique of intentionally introducing voltage or clock glitches into a chip to test resilience against fault attacks.
- **Core meaning & mental image — Tiếng Việt**: Phân tích tiêm lỗi nhiễu xung (hình ảnh cố tình gây sốc điện áp hoặc xung nhịp ngắn mạch để xem chip có bị lộ khóa bí mật hay không).
- **Grammar & collocations**:
  - perform glitch fault injection analysis (thực hiện phân tích tiêm lỗi nhiễu xung)
  - resistant to glitch fault injection analysis (kháng lại phân tích tiêm lỗi nhiễu xung)
  - glitch fault injection analysis setup (thiết lập phân tích tiêm lỗi nhiễu xung)
- **Register & nuance**: Hardware penetration testing, smart card security, IoT chip validation.
- **Examples**:
  - *Example 1*: Glitch fault injection analysis exposed a flaw where voltage drops bypassed secure boot authentication checks.
  - *Translation 1*: Phân tích tiêm lỗi nhiễu xung đã vạch trần một lỗ hổng trong đó việc sụt áp làm vô hiệu hóa các bài kiểm tra xác thực khởi động bảo mật.
- **Liên kết tiếng Hàn**: 글리치 결함 주입 분석 (Geul-li-chi Gyeol-ham Ju-ip Bun-seok) — Phương pháp đánh giá độ bền phần cứng bằng cách gây sốc điện áp hoặc xung nhịp.

---

## 20. formal information flow tracking
- **American IPA**: /ˈfɔːrməl ˌɪnfərˈmeɪʃən floʊ ˈtrækɪŋ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A static verification technique that proves confidential data never flows to unauthorized public output interfaces within a circuit.
- **Core meaning & mental image — Tiếng Việt**: Theo dõi dòng thông tin hình thức (hình ảnh dùng toán học theo dõi từng đường đi của dữ liệu mật để đảm bảo nó không bao giờ rò ra ngoài các cổng công khai).
- **Grammar & collocations**:
  - implement formal information flow tracking (triển khai theo dõi dòng thông tin hình thức)
  - formal information flow tracking analysis (phân tích theo dõi dòng thông tin hình thức)
  - automated formal information flow tracking (theo dõi dòng thông tin hình thức tự động)
- **Register & nuance**: Advanced formal verification, secure hardware architecture design.
- **Examples**:
  - *Example 1*: Formal information flow tracking mathematically guaranteed that cryptographic keys cannot reach network controller registers.
  - *Translation 1*: Theo dõi dòng thông tin hình thức đã đảm bảo bằng toán học rằng các khóa mã hóa không thể chạm tới các thanh ghi của bộ điều khiển mạng.
- **Liên kết tiếng Hàn**: 형식적 정보 흐름 추적 (Hyeong-sik-jeok Jeong-bo Heureum Chu-jeok) — Kỹ thuật kiểm định toán học đảm bảo dữ liệu mật không bị rò rỉ qua các luồng không được phép.

---

## 21. branch predictor collision leak
- **American IPA**: /bræntʃ prɪˈdɪktər kəˈlɪʒən liːk/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or direct object).
- **Core meaning — English**: A hardware vulnerability where shared branch predictor history states allow an attacker to infer execution paths of other security domains.
- **Core meaning & mental image — Tiếng Việt**: Rò rỉ xung đột bộ dự đoán nhánh (hình ảnh kẻ xấu lợi dụng việc chung đụng bộ nhớ dự đoán hướng rẽ của CPU để đoán nội dung chương trình nạn nhân).
- **Grammar & collocations**:
  - exploit a branch predictor collision leak (khai thác rò rỉ xung đột bộ dự đoán nhánh)
  - mitigate branch predictor collision leaks (giảm thiểu rò rỉ xung đột bộ dự đoán nhánh)
  - branch predictor collision leak vulnerability (lỗ hổng rò rỉ xung đột bộ dự đoán nhánh)
- **Register & nuance**: Microprocessor security, advanced CPU side-channel attacks.
- **Examples**:
  - *Example 1*: The Spectre-v2 variant leverages a branch predictor collision leak to force speculative execution down arbitrary attacker-chosen paths.
  - *Translation 1*: Biến thể Spectre-v2 tận dụng rò rỉ xung đột bộ dự đoán nhánh để ép thực thi đầu cơ đi theo các con đường tùy ý do kẻ tấn công chọn.
- **Liên kết tiếng Hàn**: 분기 예측기 충돌 누출 (Bun-gi Ye-cheuk-gi Chung-dol Nu-chul) — Lỗ hổng bảo mật khai thác trạng thái chia sẻ của bộ dự đoán nhánh CPU.

---

## 22. microcode patch security audit
- **American IPA**: /ˈmaɪkroʊkoʊd pætʃ sɪˈkjʊrɪti ˈɔːdɪt/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The rigorous code review and verification of low-level CPU microcode updates issued to fix hardware vulnerabilities.
- **Core meaning & mental image — Tiếng Việt**: Kiểm toán bảo mật bản vá vi mã (hình ảnh kiểm tra kỹ lưỡng các đoạn mã cấp thấp nạp trực tiếp vào CPU để sửa lỗi phần cứng mà không gây thêm lỗ hổng mới).
- **Grammar & collocations**:
  - conduct a microcode patch security audit (tiến hành kiểm toán bảo mật bản vá vi mã)
  - pass a microcode patch security audit (vượt qua cuộc kiểm toán bảo mật bản vá vi mã)
  - microcode patch security audit guidelines (hướng dẫn kiểm toán bảo mật bản vá vi mã)
- **Register & nuance**: CPU vendor engineering, firmware security, vulnerability management.
- **Examples**:
  - *Example 1*: Every urgent microcode patch security audit must be completed before microcode updates are pushed to customer systems.
  - *Translation 1*: Mọi cuộc kiểm toán bảo mật bản vá vi mã khẩn cấp đều phải được hoàn thành trước khi các bản cập nhật vi mã được đẩy đến hệ thống của khách hàng.
- **Liên kết tiếng Hàn**: 마이크로코드 패치 보안 감사 (Ma-i-keu-ro-ko-deu Pa-chi Bo-an Gam-sa) — Đánh giá bảo mật cho các bản cập nhật mã vi lệnh của CPU.

---

## 23. hardware state machine invariant
- **American IPA**: /ˈhɑːrdwɛr steɪt məˈʃiːn ɪnˈvɛriənt/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: A logical condition that must remain permanently true across all valid states and transitions of a hardware control finite state machine.
- **Core meaning & mental image — Tiếng Việt**: Bất biến máy trạng thái phần cứng (hình ảnh quy luật bất di bất dịch mà máy trạng thái điều khiển của chip phải tuân thủ trong mọi hoàn cảnh).
- **Grammar & collocations**:
  - define a hardware state machine invariant (định nghĩa bất biến máy trạng thái phần cứng)
  - violate a hardware state machine invariant (vi phạm bất biến máy trạng thái phần cứng)
  - check hardware state machine invariants (kiểm tra các bất biến máy trạng thái phần cứng)
- **Register & nuance**: Digital logic design, formal verification, finite state machine modeling.
- **Examples**:
  - *Example 1*: Formal verification tools checked the hardware state machine invariants to ensure no illegal transition states exist.
  - *Translation 1*: Các công cụ kiểm định hình thức đã kiểm tra các bất biến máy trạng thái phần cứng để đảm bảo không có trạng thái chuyển đổi trái phép nào tồn tại.
- **Liên kết tiếng Hàn**: 하드웨어 상태 기계 불변식 (Ha-deu-w-eo Sang-tae Gi-gye Bul-byeon-sik) — Điều kiện logic luôn đúng trong mọi trạng thái của máy trạng thái phần cứng.

---

## 24. post-silicon security validation
- **American IPA**: /poʊst ˈsɪlɪkən sɪˈkjʊrɪti ˈvælɪˈdeɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, or object of a preposition).
- **Core meaning — English**: The testing and verification procedures performed on physically manufactured silicon chips using specialized test equipment and logic analyzers.
- **Core meaning & mental image — Tiếng Việt**: Xác thực bảo mật hậu silicon (hình ảnh kiểm tra con chip thực tế sau khi đã ra lò tại nhà máy bằng các thiết bị đo đạc chuyên dụng).
- **Grammar & collocations**:
  - perform post-silicon security validation (thực hiện xác thực bảo mật hậu silicon)
  - post-silicon security validation lab (phòng thí nghiệm xác thực bảo mật hậu silicon)
  - automated post-silicon security validation (xác thực bảo mật hậu silicon tự động)
- **Register & nuance**: Semiconductor manufacturing, hardware validation engineering.
- **Examples**:
  - *Example 1*: Post-silicon security validation uncovered physical scan-chain vulnerabilities that pre-silicon simulations failed to catch.
  - *Translation 1*: Xác thực bảo mật hậu silicon đã phát hiện ra các lỗ hổng chuỗi quét vật lý mà mô phỏng trước silicon không tìm ra được.
- **Liên kết tiếng Hàn**: 실리콘 후속 보안 검증 (Sil-i-kon Hu-sok Bo-an Geom-jeung) — Quá trình kiểm tra bảo mật trên các con chip silicon thực tế sau khi sản xuất.

---

## 25. provably secure microarchitecture
- **American IPA**: /ˈprɑːvəbli sɪˈkjʊr ˌmaɪkroʊˌɑːrkəˈtɛktʃər/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or direct object).
- **Core meaning — English**: A processor design accompanied by mathematical proofs demonstrating complete immunity to specific classes of microarchitectural attacks.
- **Core meaning & mental image — Tiếng Việt**: Vi kiến trúc an toàn có thể chứng minh được (hình ảnh bộ vi xử lý đi kèm chứng minh toán học tuyệt đối miễn nhiễm với một số lớp tấn công).
- **Grammar & collocations**:
  - design a provably secure microarchitecture (thiết kế một vi kiến trúc an toàn có thể chứng minh được)
  - achieve a provably secure microarchitecture (đạt được một vi kiến trúc an toàn có thể chứng minh được)
  - foundation for a provably secure microarchitecture (nền tảng cho một vi kiến trúc an toàn có thể chứng minh được)
- **Register & nuance**: Academic hardware security, high-assurance processor research.
- **Examples**:
  - *Example 1*: Researchers are building a provably secure microarchitecture that eliminates covert channels by design.
  - *Translation 1*: Các nhà nghiên cứu đang xây dựng một vi kiến trúc an toàn có thể chứng minh được, loại bỏ các kênh ngầm ngay từ khâu thiết kế.
- **Liên kết tiếng Hàn**: 증명 가능하게 안전한 미세아키텍처 (Jeung-myeong Ga-neung-ha-ge An-jeon-han Mi-se-a-ki-tek-cheo) — Thiết kế vi xử lý được chứng minh toán học là an toàn trước các cuộc tấn công.

---

## Review in context: Part 1 (items 1–12)

Modern processor engineering requires rigorous **1. microarchitectural formal verification** to eliminate subtle flaws before fabrication. When CPUs optimize performance through out-of-order execution, they often create a **2. speculative execution side-channel** that allows unprivileged code to observe confidential data. Concurrently, untrusted supply chains raise fears of malicious circuitry triggering a **3. hardware Trojan payload activation** under rare operating conditions. These flaws often manifest as a broader **4. transient execution vulnerability** class across multiple processor generations. To ensure that physical chips match specification, engineers rely on **5. silicon golden model equivalence** checks and automated **6. register-transfer level model checking**. Advanced research groups also deploy **7. speculative taint analysis** alongside a **8. hardware property specification language** to assert precise safety invariants. Despite these measures, the **9. cache timing attack surface** remains expansive, while **10. cryptographic coprocessor leakage** threatens secure enclaves. Mitigation often requires embedding a **11. side-channel timing fence primitive** into instruction streams or deploying architectural countermeasures against a **12. microarchitectural covert channel**.

### Bản dịch tiếng Việt phần 1:
Kỹ thuật bộ xử lý hiện đại đòi hỏi sự **1. kiểm định hình thức vi kiến trúc** nghiêm ngặt để loại bỏ các lỗi tinh vi trước khi chế tạo. Khi các CPU tối ưu hóa hiệu suất thông qua việc thực thi ngoài thứ tự, chúng thường tạo ra một **2. kênh phụ thực thi đầu cơ** cho phép mã không đặc quyền quan sát dữ liệu bí mật. Đồng thời, chuỗi cung ứng không đáng tin cậy làm dấy lên nỗi sợ hãi về các mạch điện độc hại kích hoạt **3. tải trọng Trojan phần cứng** dưới các điều kiện vận hành hiếm gặp. Những lỗi này thường biểu hiện thành một lớp **4. lỗ hổng thực thi tạm thời** rộng hơn trên nhiều thế hệ bộ xử lý. Để đảm bảo chip vật lý khớp với thông số kỹ thuật, các kỹ sư dựa vào việc kiểm tra **5. tính tương đương mô hình chuẩn silicon** và **6. kiểm tra mô hình mức chuyển đổi thanh ghi** tự động. Các nhóm nghiên cứu tiên tiến cũng triển khai **7. phân tích nhiễm độc đầu cơ** cùng với **8. ngôn ngữ đặc tả tính chất phần cứng** để khẳng định các bất biến an toàn chính xác. Bất chấp các biện pháp này, **9. bề mặt tấn công thời gian bộ nhớ đệm** vẫn rộng lớn, trong khi **10. sự rò rỉ của bộ đồng xử lý mật mã** đe dọa các vùng cô lập an toàn. Việc giảm thiểu thường đòi hỏi phải nhúng một **11. nguyên thủy hàng rào thời gian kênh phụ** vào các luồng lệnh hoặc triển khai các biện pháp đối phó kiến trúc chống lại **12. kênh ngầm vi kiến trúc**.

---

## Review in context: Part 2 (items 13–25)

To catch pipeline violations early, verification teams execute a **13. formal bounded model checker** combined with automated **14. hardware security assertion** checks. When branch mispredictions occur, the processor initiates an **15. out-of-order execution rollback** while relying on a **16. side-channel mitigation barrier** to block unauthorized leakage. For chips manufactured externally, an **17. untrusted silicon foundry audit** uses optical inspection and reverse engineering, complemented by **18. physical unclonable function verification** to authenticate device roots of trust. Security labs also perform **19. glitch fault injection analysis** to test resistance against voltage manipulation, while **20. formal information flow tracking** mathematically proves data isolation. Attackers nevertheless continue probing for a **21. branch predictor collision leak** or analyzing the effectiveness of a recent **22. microcode patch security audit**. Ultimately, enforcing a strict **23. hardware state machine invariant** and conducting thorough **24. post-silicon security validation** pave the way toward building a truly **25. provably secure microarchitecture**.

### Bản dịch tiếng Việt phần 2:
Để phát hiện sớm các vi phạm đường ống lệnh, các đội ngũ kiểm định chạy một **13. bộ kiểm tra mô hình giới hạn hình thức** kết hợp với các bài kiểm tra **14. khẳng định bảo mật phần cứng** tự động. Khi xảy ra dự đoán nhánh sai, bộ xử lý khởi động cơ chế **15. hoàn tác thực thi ngoài thứ tự** trong khi dựa vào **16. rào chắn giảm thiểu kênh phụ** để chặn rò rỉ trái phép. Đối với các con chip được sản xuất bên ngoài, quá trình **17. kiểm toán xưởng đúc silicon không tin cậy** sử dụng kiểm tra quang học và kỹ thuật đảo ngược, được bổ sung bằng **18. kiểm định hàm không thể sao chép vật lý** để xác thực gốc tin cậy của thiết bị. Các phòng thí nghiệm bảo mật cũng thực hiện **19. phân tích tiêm lỗi nhiễu xung** để kiểm tra khả năng chống chịu trước việc thao túng điện áp, trong khi **20. theo dõi dòng thông tin hình thức** chứng minh bằng toán học sự cô lập dữ liệu. Kẻ tấn công tuy nhiên vẫn tiếp tục dò tìm **21. rò rỉ xung đột bộ dự đoán nhánh** hoặc phân tích hiệu quả của một **22. kiểm toán bảo mật bản vá vi mã** gần đây. Cuối cùng, việc thực thi nghiêm ngặt **23. bất biến máy trạng thái phần cứng** và tiến hành **24. xác thực bảo mật hậu silicon** kỹ lưỡng mở đường cho việc xây dựng một **25. vi kiến trúc an toàn có thể chứng minh được** thực sự.
