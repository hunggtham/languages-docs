# C2 Vocabulary 208 — Capability Hardware Enhanced RISC Instructions (CHERI), tagged memory words, and spatial memory safety

## 1. CHERI capability architecture
- **IPA:** /ˈtʃɛri ˌkeɪpəˈbɪlɪti ˈɑːrkɪtɛktʃər/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object, or prepositional object)
- **Core meaning — English:** An extension to conventional instruction set architectures (ISAs) that replaces raw memory addresses with unforgeable, fine-grained capabilities containing precise bounds, permissions, and pointer provenance.
- **Core meaning & mental image — Tiếng Việt:** Kiến trúc năng lực CHERI (phần mở rộng cho tập lệnh truyền thống, thay thế các địa chỉ bộ nhớ thô bằng các năng lực không thể giả mạo, có giới hạn chính xác, quyền hạn và nguồn gốc con trỏ). Hình ảnh giống như việc thay thế những chiếc chìa khóa vạn năng thô sơ bằng những chiếc thẻ từ mã hóa chỉ mở được đúng một ngăn tủ cụ thể với hạn mức thời gian nhất định.
- **Grammar & collocations:**
  - implement CHERI capability architecture (triển khai kiến trúc năng lực CHERI)
  - port software to CHERI capability architecture (chuyển dịch phần mềm sang kiến trúc năng lực CHERI)
  - CHERI capability architecture principles (nguyên tắc kiến trúc năng lực CHERI)
- **Register & nuance:** Highly technical, computer architecture, academic and industry security research (SRI / University of Cambridge).
- **Examples:**
  - *Adopting the CHERI capability architecture fundamentally hardens software against spatial and temporal memory corruption.* -> Việc áp dụng kiến trúc năng lực CHERI làm cứng phần mềm về cơ bản chống lại tình trạng hỏng bộ nhớ không gian và thời gian.
  - *The processor core integrates the CHERI capability architecture directly into its execution pipeline.* -> Nhân bộ xử lý tích hợp kiến trúc năng lực CHERI trực tiếp vào luồng thực thi của nó.
- **Liên kết tiếng Hàn:** CHERI 기능 아키텍처 (CHERI gineung a-ki-tek-cheo) — kiến trúc phần cứng nâng cao tích hợp kiểm soát năng lực con trỏ.

## 2. hardware-enforced tagged memory
- **IPA:** /ˈhɑːrdwɛr ɪnˈfɔːrst tæɡd ˈmɛməri/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A memory architecture where every memory word includes an extra hardware-managed tag bit that distinguishes valid capabilities from ordinary scalar data, preventing unauthorized forging or modification.
- **Core meaning & mental image — Tiếng Việt:** Bộ nhớ gắn thẻ do phần cứng cưỡng bức (kiến trúc bộ nhớ trong đó mỗi từ bộ nhớ bao gồm một bit thẻ phụ do phần cứng quản lý, phân biệt năng lực hợp lệ với dữ liệu thông thường, ngăn chặn việc làm giả). Hình ảnh giống như việc đóng dấu nổi bảo mật không thể tẩy xóa lên từng tờ tiền để phân biệt tiền thật và tiền giả.
- **Grammar & collocations:**
  - utilize hardware-enforced tagged memory (sử dụng bộ nhớ gắn thẻ do phần cứng cưỡng bức)
  - hardware-enforced tagged memory architecture (kiến trúc bộ nhớ gắn thẻ do phần cứng cưỡng bức)
  - manage hardware-enforced tagged memory (quản lý bộ nhớ gắn thẻ do phần cứng cưỡng bức)
- **Register & nuance:** Computer engineering, hardware security, low-level architecture.
- **Examples:**
  - *Hardware-enforced tagged memory ensures that pointers cannot be manipulated through arbitrary arithmetic.* -> Bộ nhớ gắn thẻ do phần cứng cưỡng bức đảm bảo con trỏ không thể bị thao túng thông qua các phép toán số học tùy ý.
  - *The memory controller validates the tag bit on every single load and store operation.* -> Bộ điều khiển bộ nhớ xác thực bit thẻ trên mọi thao tác nạp và lưu trữ.
- **Liên kết tiếng Hàn:** 하드웨어 강제 태그 메모리 (hadeu-we-o gang-je tae-geu me-mo-ri) — bộ nhớ được gắn thẻ bảo mật trực tiếp ở cấp độ phần cứng.

## 3. spatial memory safety bound
- **IPA:** /ˈspeɪʃəl ˈmɛməri ˈseɪfti baʊnd/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The hardware-guaranteed limit associated with a memory pointer that prevents any access outside the allocated buffer boundaries, instantly trapping buffer overflow attempts.
- **Core meaning & mental image — Tiếng Việt:** Giới hạn an toàn bộ nhớ không gian (giới hạn được phần cứng bảo đảm đi kèm với con trỏ bộ nhớ, ngăn chặn bất kỳ sự truy cập nào vượt ra ngoài ranh giới vùng đệm được phân bổ, bẫy ngay lập tức các nỗ lực tràn bộ đệm). Hình ảnh giống như hàng rào điện tự động ngắt dòng điện ngay khi ai đó cố bước chân qua ranh giới khu vực cấm.
- **Grammar & collocations:**
  - enforce spatial memory safety bound (thực thi giới hạn an toàn bộ nhớ không gian)
  - violate spatial memory safety bound (vi phạm giới hạn an toàn bộ nhớ không gian)
  - spatial memory safety bound check (kiểm tra giới hạn an toàn bộ nhớ không gian)
- **Register & nuance:** Systems programming, memory safety, vulnerability mitigation.
- **Examples:**
  - *When a pointer exceeds its spatial memory safety bound, the CPU triggers an architectural fault.* -> Khi một con trỏ vượt quá giới hạn an toàn bộ nhớ không gian của nó, CPU kích hoạt lỗi kiến trúc.
  - *Spatial memory safety bounds eliminate entire classes of buffer overflow vulnerabilities.* -> Giới hạn an toàn bộ nhớ không gian loại bỏ toàn bộ các lớp lỗ hổng tràn bộ đệm.
- **Liên kết tiếng Hàn:** 공간적 메모리 안전성 경계 (gong-gan-jeok me-mo-ri an-jeong-seong gyeong-gye) — ranh giới bảo vệ ngăn chặn việc truy cập vượt quá vùng đệm bộ nhớ.

## 4. temporal memory safety revocation
- **IPA:** /ˈtɛmpərəl ˈmɛməri ˈseɪfti ˌrɛvəˈkeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The mechanism of invalidating all outstanding capability references to an allocated memory region once that region is deallocated, preventing use-after-free vulnerabilities.
- **Core meaning & mental image — Tiếng Việt:** Thu hồi an toàn bộ nhớ thời gian (cơ chế vô hiệu hóa tất cả các tham chiếu năng lực còn lại tới một vùng nhớ sau khi vùng nhớ đó bị giải phóng, ngăn ngừa lỗ hổng sử dụng sau khi giải phóng). Hình ảnh giống như việc thu hồi toàn bộ chìa khóa phụ của một căn phòng ngay sau khi hợp đồng thuê nhà kết thúc.
- **Grammar & collocations:**
  - perform temporal memory safety revocation (thực hiện thu hồi an toàn bộ nhớ thời gian)
  - temporal memory safety revocation latency (độ trễ thu hồi an toàn bộ nhớ thời gian)
  - hardware temporal memory safety revocation (thu hồi an toàn bộ nhớ thời gian bằng phần cứng)
- **Register & nuance:** Advanced memory management, vulnerability prevention, hardware design.
- **Examples:**
  - *Implementing temporal memory safety revocation stops attackers from exploiting dangling pointers.* -> Việc triển khai thu hồi an toàn bộ nhớ thời gian ngăn chặn kẻ tấn công khai thác con trỏ treo.
  - *Hardware-assisted temporal memory safety revocation minimizes the performance overhead typical of software garbage collection.* -> Thu hồi an toàn bộ nhớ thời gian hỗ trợ bằng phần cứng thiểu hóa chi phí hiệu suất vốn có của việc thu gom rác phần mềm.
- **Liên kết tiếng Hàn:** 시간적 메모리 안전성 폐기 (si-gan-jeok me-mo-ri an-jeong-seong pye-gi) — cơ chế vô hiệu hóa tham chiếu bộ nhớ lỗi thời để chống lỗi dùng sau khi giải phóng.

## 5. unforgeable capability pointer
- **IPA:** /ʌnˈfɔːrdʒəbəl ˌkeɪpəˈbɪlɪti ˈpɔɪntər/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A specialized memory reference whose integrity and validity are protected by hardware tags and cryptographic bounds, ensuring that user-mode software cannot arbitrarily fabricate or modify it.
- **Core meaning & mental image — Tiếng Việt:** Con trỏ năng lực không thể giả mạo (một tham chiếu bộ nhớ chuyên biệt có tính toàn vẹn và hợp lệ được bảo vệ bởi các thẻ phần cứng và giới hạn mật mã, đảm bảo phần mềm chế độ người dùng không thể tự ý tạo ra hoặc sửa đổi). Hình ảnh giống như một tấm thẻ căn cước có dấu chìm và vi mạch chống giả mà kẻ gian không thể tự in ấn tại nhà.
- **Grammar & collocations:**
  - dereference an unforgeable capability pointer (giải tham chiếu con trỏ năng lực không thể giả mạo)
  - generate an unforgeable capability pointer (tạo con trỏ năng lực không thể giả mạo)
  - protect with unforgeable capability pointers (bảo vệ bằng các con trỏ năng lực không thể giả mạo)
- **Register & nuance:** Computer security, capability-based addressing, architectural security.
- **Examples:**
  - *Software cannot corrupt memory because every pointer passed around is an unforgeable capability pointer.* -> Phần mềm không thể làm hỏng bộ nhớ vì mọi con trỏ được truyền đi đều là con trỏ năng lực không thể giả mạo.
  - *Attempting to modify the address bits without adjusting the tag clears the valid bit of the unforgeable capability pointer.* -> Cố gắng sửa đổi các bit địa chỉ mà không điều chỉnh thẻ sẽ làm xóa bit hợp lệ của con trỏ năng lực không thể giả mạo.
- **Liên kết tiếng Hàn:** 위조 불가능한 기능 포인터 (wijo bul-gan-neun-han gineung pointeo) — con trỏ bộ nhớ được bảo vệ phần cứng chống mọi hành vi làm giả.

## 6. capability register file
- **IPA:** /ˈkeɪpəˈbɪlɪti ˈrɛdʒɪstər faɪl/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** An expanded set of CPU registers designed to store full capabilities—including base, length, permissions, and tag bits—rather than raw scalar addresses.
- **Core meaning & mental image — Tiếng Việt:** Tệp thanh ghi năng lực (tập hợp các thanh ghi CPU mở rộng được thiết kế để lưu trữ toàn bộ năng lực bao gồm cơ sở, chiều dài, quyền hạn và bit thẻ thay vì chỉ là địa chỉ thô). Hình ảnh giống như một bảng điều khiển gồm các ô khóa chuyên dụng chứa đầy đủ thông tin về quyền hạn thay vì chỉ ghi những con số đơn thuần.
- **Grammar & collocations:**
  - access the capability register file (truy cập tệp thanh ghi năng lực)
  - save capability register file state (lưu trạng thái tệp thanh ghi năng lực)
  - capability register file architecture (kiến trúc tệp thanh ghi năng lực)
- **Register & nuance:** CPU design, microprocessor architecture, ISA specification.
- **Examples:**
  - *Context switching requires saving and restoring the expanded capability register file.* -> Việc chuyển ngữ cảnh yêu cầu lưu và khôi phục tệp thanh ghi năng lực mở rộng.
  - *The processor ALU operates directly on operands fetched from the capability register file.* -> Bộ ALU của bộ xử lý hoạt động trực tiếp trên các toán hạng được lấy từ tệp thanh ghi năng lực.
- **Liên kết tiếng Hàn:** 기능 레지스터 파일 (gineung rejesteo pail) — tập hợp thanh ghi CPU lưu trữ thông tin năng lực và quyền hạn đầy đủ.

## 7. monotonic capability revocation
- **IPA:** /ˌmɒnəˈtɒnɪk ˌkeɪpəˈbɪlɪti ˌrɛvəˈkeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A design principle where capabilities can only be restricted or revoked over time (bounds shrunk, permissions dropped), but never expanded by code holding derivative pointers.
- **Core meaning & mental image — Tiếng Việt:** Thu hồi năng lực đơn điệu (nguyên tắc thiết kế trong đó các năng lực chỉ có thể bị hạn chế hoặc thu hồi theo thời gian — thu hẹp giới hạn, giảm bớt quyền — chứ không bao giờ được mở rộng bởi mã giữ con trỏ phái sinh). Hình ảnh giống như việc một tấm vé vào cửa chỉ có thể bị cắt bớt quyền lợi dần qua từng trạm kiểm soát chứ không thể tự động nâng cấp.
- **Grammar & collocations:**
  - enforce monotonic capability revocation (thực thi thu hồi năng lực đơn điệu)
  - monotonic capability revocation property (đặc tính thu hồi năng lực đơn điệu)
  - rely on monotonic capability revocation (dựa vào việc thu hồi năng lực đơn điệu)
- **Register & nuance:** Security models, capability systems, formal verification.
- **Examples:**
  - *Monotonic capability revocation ensures that child pointers can never grant more privileges than their parent.* -> Thu hồi năng lực đơn điệu đảm bảo các con trỏ con không bao giờ có thể cấp nhiều đặc quyền hơn con trỏ mẹ của chúng.
  - *The hardware enforces monotonic capability revocation during pointer derivation.* -> Phần cứng thực thi việc thu hồi năng lực đơn điệu trong quá trình dẫn xuất con trỏ.
- **Liên kết tiếng Hàn:** 단조적 기능 폐기 (dan-jo-jeok gineung pye-gi) — nguyên tắc năng lực chỉ có thể bị thu hẹp quyền hạn theo thời gian chứ không thể mở rộng.

## 8. pointer provenance tracking
- **IPA:** /ˈpɔɪntər ˈprɒvənəns ˈtrækɪŋ/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The hardware mechanism of maintaining the lineage and derivation history of a pointer to ensure it stems from a valid allocation and has not been illegally synthesized.
- **Core meaning & mental image — Tiếng Việt:** Theo dõi nguồn gốc con trỏ (cơ chế phần cứng duy trì dòng dõi và lịch sử dẫn xuất của một con trỏ để đảm bảo nó xuất phát từ một vùng cấp phát hợp lệ và không bị tổng hợp trái phép). Hình ảnh giống như cây gia phả điện tử của từng con trỏ, chứng minh nó thuộc dòng họ bộ nhớ nào.
- **Grammar & collocations:**
  - implement pointer provenance tracking (triển khai theo dõi nguồn gốc con trỏ)
  - pointer provenance tracking mechanism (cơ chế theo dõi nguồn gốc con trỏ)
  - violate pointer provenance tracking (vi phạm việc theo dõi nguồn gốc con trỏ)
- **Register & nuance:** Language semantics (C/C++), compiler design, hardware safety.
- **Examples:**
  - *Pointer provenance tracking prevents undefined behavior arising from integer-to-pointer casts.* -> Theo dõi nguồn gốc con trỏ ngăn chặn hành vi bất định phát sinh từ các phép chuyển đổi số nguyên sang con trỏ.
  - *The compiler and hardware cooperate to maintain strict pointer provenance tracking.* -> Trình biên dịch và phần cứng phối hợp để duy trì việc theo dõi nguồn gốc con trỏ nghiêm ngặt.
- **Liên kết tiếng Hàn:** 포인터 출처 추적 (pointeo chul-cheo chu-jeok) — cơ chế theo dõi nguồn gốc và lịch sử hình thành của con trỏ bộ nhớ.

## 9. fine-grained memory compartmentalization
- **IPA:** /ˈfaɪn ɡreɪnd ˈmɛməri kəmˌpɑːrtməntəlaɪˈzeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The practice of dividing an application into isolated memory sandboxes using capabilities, ensuring that a compromise in one module cannot spread to the rest of the system.
- **Core meaning & mental image — Tiếng Việt:** Phân vùng bộ nhớ mịn (thực tiễn chia ứng dụng thành các hộp cát bộ nhớ cô lập bằng năng lực, đảm bảo sự xâm phạm ở một mô-đun không thể lan sang phần còn lại của hệ thống). Hình ảnh giống như các khoang chống chìm trên tàu thủy, nếu một khoang bị thủng nước thì nước cũng không thể tràn sang các khoang khác.
- **Grammar & collocations:**
  - achieve fine-grained memory compartmentalization (đạt được sự phân vùng bộ nhớ mịn)
  - support fine-grained memory compartmentalization (hỗ trợ phân vùng bộ nhớ mịn)
  - fine-grained memory compartmentalization overhead (chi phí phân vùng bộ nhớ mịn)
- **Register & nuance:** Software engineering, security architecture, fault isolation.
- **Examples:**
  - *CHERI enables efficient fine-grained memory compartmentalization with minimal performance penalty.* -> CHERI cho phép phân vùng bộ nhớ mịn hiệu quả với mức giảm hiệu suất tối thiểu.
  - *Isolating untrusted parser plugins requires strict fine-grained memory compartmentalization.* -> Việc cô lập các trình phân tích cú pháp không đáng tin cậy đòi hỏi sự phân vùng bộ nhớ mịn nghiêm ngặt.
- **Liên kết tiếng Hàn:** 세밀한 메모리 구획화 (semil-han me-mo-ri gu-hoek-hwa) — kỹ thuật chia nhỏ bộ nhớ thành các vùng cô lập an toàn.

## 10. capability bounds reduction
- **IPA:** /ˈkeɪpəˈbɪlɪti baʊndz rɪˈdʌkʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The operation of narrowing the address bounds of a capability pointer before passing it to a substructure or function, restricting access exclusively to that designated sub-buffer.
- **Core meaning & mental image — Tiếng Việt:** Thu hẹp giới hạn năng lực (thao tác thu hẹp ranh giới địa chỉ của một con trỏ năng lực trước khi truyền nó cho một cấu trúc con hoặc hàm, chỉ giới hạn quyền truy cập vào đúng vùng đệm con đó). Hình ảnh giống như việc bạn đưa cho thợ khóa một chiếc chìa chỉ mở được đúng một ngăn kéo nhỏ thay vì đưa cả chùm chìa khóa mở toàn bộ ngôi nhà.
- **Grammar & collocations:**
  - perform capability bounds reduction (thực hiện thu hẹp giới hạn năng lực)
  - capability bounds reduction instruction (lệnh thu hẹp giới hạn năng lực)
  - apply capability bounds reduction (áp dụng thu hẹp giới hạn năng lực)
- **Register & nuance:** Capability manipulation, low-level optimization, security design.
- **Examples:**
  - *The function performs capability bounds reduction before passing the buffer pointer to the library.* -> Hàm thực hiện thu hẹp giới hạn năng lực trước khi truyền con trỏ vùng đệm cho thư viện.
  - *Capability bounds reduction prevents functions from reading outside their designated array parameters.* -> Thu hẹp giới hạn năng lực ngăn các hàm đọc dữ liệu vượt ra ngoài các tham số mảng được chỉ định của chúng.
- **Liên kết tiếng Hàn:** 기능 범위 축소 (gineung beom-wi chuk-so) — thao tác thu hẹp giới hạn quyền hạn của con trỏ trước khi sử dụng.

## 11. buffer overflow hardware interception
- **IPA:** /ˈbʌfər ˈoʊvərˌfloʊ ˈhɑːrdwɛr ˌɪntərˈsɛpʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The automatic hardware-level trapping and halting of buffer overflow exploits the exact moment an out-of-bounds memory access is attempted, prior to any code execution hijacking.
- **Core meaning & mental image — Tiếng Việt:** Chặn tràn bộ đệm bằng phần cứng (việc bẫy và dừng tự động ở cấp độ phần cứng các cuộc khai thác tràn bộ đệm ngay khoảnh khắc một nỗ lực truy cập bộ nhớ ngoài ranh giới diễn ra, trước khi mã thực thi bị chiếm đoạt). Hình ảnh giống như hệ thống phanh khẩn cấp tự động kích hoạt ngay khi xe vừa vượt qua vạch cản nguy hiểm.
- **Grammar & collocations:**
  - achieve buffer overflow hardware interception (đạt được việc chặn tràn bộ đệm bằng phần cứng)
  - buffer overflow hardware interception mechanism (cơ chế chặn tràn bộ đệm bằng phần cứng)
  - rely on buffer overflow hardware interception (dựa vào việc chặn tràn bộ đệm bằng phần cứng)
- **Register & nuance:** Hardware security, vulnerability mitigation, real-time protection.
- **Examples:**
  - *Buffer overflow hardware interception stops return-oriented programming attacks dead in their tracks.* -> Việc chặn tràn bộ đệm bằng phần cứng chặn đứng các cuộc tấn công lập trình định hướng trả về ngay từ trong trứng nước.
  - *Unlike software-based mitigations, buffer overflow hardware interception incurs negligible runtime latency.* -> Khác với các biện pháp giảm thiểu dựa trên phần mềm, việc chặn tràn bộ đệm bằng phần cứng tạo ra độ trễ thời gian chạy không đáng kể.
- **Liên kết tiếng Hàn:** 버퍼 오버플로우 하드웨어 가로채기 (beopeo obeupeullou hadeu-we-o garo-chae-gi) — cơ chế phần cứng chặn và ngăn chặn sự cố tràn bộ đệm ngay lập tức.

## 12. memory corruption mitigation theorem
- **IPA:** /ˈmɛməri kəˈrʌpʃən ˌmɪtɪˈɡeɪʃən ˈθɪərəm/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A formal or analytical proposition demonstrating that capability-based hardware architectures mathematically eliminate entire classes of memory safety vulnerabilities.
- **Core meaning & mental image — Tiếng Việt:** Định lý giảm thiểu hỏng bộ nhớ (một mệnh đề hình thức hoặc phân tích chứng minh rằng các kiến trúc phần cứng dựa trên năng lực loại bỏ hoàn toàn về mặt toán học các lớp lỗ hổng an toàn bộ nhớ). Hình ảnh giống như một định lý hình học chứng minh chắc chắn rằng tam giác vuông luôn tuân theo định lý Pythagore không có ngoại lệ.
- **Grammar & collocations:**
  - prove memory corruption mitigation theorem (chứng minh định lý giảm thiểu hỏng bộ nhớ)
  - memory corruption mitigation theorem validation (sự xác thực định lý giảm thiểu hỏng bộ nhớ)
  - formal memory corruption mitigation theorem (định lý giảm thiểu hỏng bộ nhớ hình thức)
- **Register & nuance:** Formal verification, computer science theory, academic research.
- **Examples:**
  - *Researchers published a comprehensive memory corruption mitigation theorem for CHERI systems.* -> Các nhà nghiên cứu đã công bố một định lý giảm thiểu hỏng bộ nhớ toàn diện cho các hệ thống CHERI.
  - *The memory corruption mitigation theorem provides formal guarantees for software running in tagged architectures.* -> Định lý giảm thiểu hỏng bộ nhớ cung cấp các đảm bảo hình thức cho phần mềm chạy trong các kiến trúc được gắn thẻ.
- **Liên kết tiếng Hàn:** 메모리 손상 완화 정리 (me-mo-ri son-sang wan-hwa jeong-ri) — định lý toán học chứng minh khả năng loại bỏ lỗi hỏng bộ nhớ của hệ thống.

## 13. capability seal-and-unseal primitive
- **IPA:** /ˈkeɪpəˈbɪlɪti siːl ənd ʌnˈsiːl ˈprɪmɪtɪv/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A hardware primitive that cryptographically "seals" a capability so it cannot be invoked or modified directly, requiring a specific authorization key to "unseal" and use it.
- **Core meaning & mental image — Tiếng Việt:** Nguyên thủy niêm phong và mở niêm phong năng lực (nguyên thủy phần cứng mã hóa niêm phong một năng lực để nó không thể bị gọi hoặc sửa đổi trực tiếp, đòi hỏi một khóa ủy quyền cụ thể để mở niêm phong và sử dụng). Hình ảnh giống như việc đặt một tài liệu quan trọng vào phong bì dán sáp niêm phong hoàng gia, chỉ ai có con dấu phù hợp mới được bóc ra xem.
- **Grammar & collocations:**
  - execute capability seal-and-unseal primitive (thực thi nguyên thủy niêm phong và mở niêm phong năng lực)
  - capability seal-and-unseal primitive operation (thao tác nguyên thủy niêm phong và mở niêm phong năng lực)
  - secure capability seal-and-unseal primitive (nguyên thủy niêm phong và mở niêm phong năng lực an toàn)
- **Register & nuance:** Advanced capability architecture, object-capability models, secure computing.
- **Examples:**
  - *The capability seal-and-unseal primitive underpins protected subsystem invocation in CHERI.* -> Nguyên thủy niêm phong và mở niêm phong năng lực làm nền tảng cho việc gọi hệ thống con được bảo vệ trong CHERI.
  - *Objects are passed securely between compartments using the capability seal-and-unseal primitive.* -> Các đối tượng được truyền an toàn giữa các khoang bằng cách sử dụng nguyên thủy niêm phong và mở niêm phong năng lực.
- **Liên kết tiếng Hàn:** 기능 밀봉 및 밀봉 해제 프리미티브 (gineung mil-bong mit mil-bong hae-je peurim-i-teu) — toán tử phần cứng niêm phong và mở khóa bảo mật đối tượng năng lực.

## 14. kernel address space compartmentalization
- **IPA:** /ˈkɜːrnəl əˈdrɛs speɪs kəmˌpɑːrtməntəlaɪˈzeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The hardware-enforced isolation of kernel subsystems and drivers into distinct protected address domains, preventing a compromised driver from subverting the entire operating system kernel.
- **Core meaning & mental image — Tiếng Việt:** Phân vùng không gian địa chỉ nhân (sự cô lập do phần cứng cưỡng bức đối với các hệ thống con và trình điều khiển của nhân thành các miền địa chỉ được bảo vệ riêng biệt, ngăn chặn một trình điều khiển bị xâm phạm lật đổ toàn bộ nhân hệ điều hành). Hình ảnh giống như việc chia khoang động cơ tàu ngầm thành nhiều lớp cửa chống cháy độc lập để lửa không lan ra toàn tàu.
- **Grammar & collocations:**
  - implement kernel address space compartmentalization (triển khai phân vùng không gian địa chỉ nhân)
  - kernel address space compartmentalization performance (hiệu suất phân vùng không gian địa chỉ nhân)
  - enforce kernel address space compartmentalization (thực thi phân vùng không gian địa chỉ nhân)
- **Register & nuance:** Operating system security, kernel architecture, high-assurance systems.
- **Examples:**
  - *Kernel address space compartmentalization limits the blast radius of vulnerable device drivers.* -> Phân vùng không gian địa chỉ nhân giới hạn bán kính vụ nổ của các trình điều khiển thiết bị bị lỗ hổng.
  - *Leveraging CHERI capabilities allows fine-grained kernel address space compartmentalization with low overhead.* -> Việc tận dụng các năng lực CHERI cho phép phân vùng không gian địa chỉ nhân mịn với chi phí thấp.
- **Liên kết tiếng Hàn:** 커널 주소 공간 구획화 (keoneol juso gong-gan gu-hoek-hwa) — kỹ thuật cô lập các thành phần bên trong kernel hệ điều hành.

## 15. legacy C binary portability
- **IPA:** /ˈlɛɡəsi siː ˈbaɪnəri ˌpɔːrtəˈbɪlɪti/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The ability to execute pre-compiled legacy C programs on a capability architecture without requiring complete source code rewriting, thanks to backward-compatibility execution modes.
- **Core meaning & mental image — Tiếng Việt:** Khả năng tương thích nhị phân mã nguồn C cũ (khả năng chạy các chương trình C cũ đã biên dịch sẵn trên kiến trúc năng lực mà không cần viết lại toàn bộ mã nguồn, nhờ các chế độ thực thi tương thích ngược). Hình ảnh giống như việc lắp một cuốn băng cassette cổ vào đầu đĩa hiện đại nhờ có bộ chuyển đổi tương thích tích hợp sẵn.
- **Grammar & collocations:**
  - maintain legacy C binary portability (duy trì khả năng tương thích nhị phân mã nguồn C cũ)
  - legacy C binary portability mode (chế độ tương thích nhị phân mã nguồn C cũ)
  - evaluate legacy C binary portability (đánh giá khả năng tương thích nhị phân mã nguồn C cũ)
- **Register & nuance:** Software migration, systems engineering, adoption strategy.
- **Examples:**
  - *Ensuring legacy C binary portability is crucial for enterprise adoption of capability architectures.* -> Đảm bảo khả năng tương thích nhị phân mã nguồn C cũ là tối quan trọng đối với việc doanh nghiệp áp dụng kiến trúc năng lực.
  - *The hybrid execution model facilitates legacy C binary portability while supporting sandboxed modules.* -> Mô hình thực thi lai tạo thuận lợi cho khả năng tương thích nhị phân mã nguồn C cũ trong khi vẫn hỗ trợ các mô-đun hộp cát.
- **Liên kết tiếng Hàn:** 레거시 C 바이너리 이식성 (regeosi C baineori isik-seong) — khả năng chạy mã nhị phân C cũ trên kiến trúc phần cứng mới.

## 16. use-after-free hardware trapping
- **IPA:** /juːz ˈæftər friː ˈhɑːrdwɛr ˈtræpɪŋ/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The automatic CPU exception triggered when a stale capability pointer is dereferenced after its underlying memory region has been freed and invalidated.
- **Core meaning & mental image — Tiếng Việt:** Bẫy phần cứng lỗi dùng sau khi giải phóng (ngoại lệ CPU tự động kích hoạt khi một con trỏ năng lực cũ bị giải tham chiếu sau khi vùng nhớ cơ sở của nó đã bị giải phóng và vô hiệu hóa). Hình ảnh giống như việc chuông báo động reo lên ngay khi ai đó cố mở cửa bằng chiếc chìa khóa của căn phòng vừa bị thu hồi.
- **Grammar & collocations:**
  - achieve use-after-free hardware trapping (đạt được việc bẫy phần cứng lỗi dùng sau khi giải phóng)
  - use-after-free hardware trapping mechanism (cơ chế bẫy phần cứng lỗi dùng sau khi giải phóng)
  - prevent via use-after-free hardware trapping (phòng ngừa thông qua bẫy phần cứng lỗi dùng sau khi giải phóng)
- **Register & nuance:** Vulnerability eradication, hardware debugging, secure systems.
- **Examples:**
  - *Use-after-free hardware trapping catches subtle pointer reuse bugs instantly at runtime.* -> Bẫy phần cứng lỗi dùng sau khi giải phóng phát hiện các lỗi tái sử dụng con trỏ tinh vi ngay lập tức khi chạy.
  - *The debugger logs the exact instruction causing the use-after-free hardware trapping event.* -> Trình gỡ lỗi ghi lại chính xác lệnh gây ra sự kiện bẫy phần cứng lỗi dùng sau khi giải phóng.
- **Liên kết tiếng Hàn:** 해제 후 사용 하드웨어 트래핑 (hae-je hu sayong hadeu-we-o teurap-ing) — cơ chế phần cứng bắt lỗi truy cập bộ nhớ sau khi đã giải phóng.

## 17. capability tag bit clearing
- **IPA:** /ˈkeɪpəˈbɪlɪti tæɡ bɪt ˈklɪərɪŋ/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The hardware action of resetting a memory word's tag bit to zero whenever raw arithmetic or unauthorized write operations modify the pointer value, instantly invalidating its capability status.
- **Core meaning & mental image — Tiếng Việt:** Xóa bit thẻ năng lực (thao tác phần cứng đặt lại bit thẻ của từ bộ nhớ về không bất cứ khi nào các phép toán số học thô hoặc thao tác ghi trái phép làm thay đổi giá trị con trỏ, lập tức vô hiệu hóa trạng thái năng lực của nó). Hình ảnh giống như việc con dấu mực bảo an trên vé bị nhòe và tự động mất hiệu lực ngay khi ai đó cố cào sửa con số trên vé.
- **Grammar & collocations:**
  - cause capability tag bit clearing (gây ra việc xóa bit thẻ năng lực)
  - capability tag bit clearing logic (logic xóa bit thẻ năng lực)
  - prevent capability tag bit clearing (ngăn chặn việc xóa bit thẻ năng lực)
- **Register & nuance:** Low-level hardware design, security enforcement, memory protection.
- **Examples:**
  - *Any arithmetic operation performed on a capability pointer triggers automatic capability tag bit clearing.* -> Bất kỳ phép toán số học nào thực hiện trên con trỏ năng lực đều kích hoạt việc tự động xóa bit thẻ năng lực.
  - *Capability tag bit clearing ensures that manipulated pointers can never be exploited.* -> Xóa bit thẻ năng lực đảm bảo rằng các con trỏ bị thao túng không bao giờ có thể bị khai thác.
- **Liên kết tiếng Hàn:** 기능 태그 비트 지우기 (gineung tae-geu biteu ji-ugi) — hành động xóa bit thẻ bảo mật của con trỏ khi có sự can thiệp trái phép.

## 18. permission bitmask restriction
- **IPA:** /pərˈmɪʃən ˈbɪtmæsk rɪˈstrɪkʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The enforcement of granular access rights—such as load, store, execute, and global derivation permissions—encoded directly within a capability's bitmask field.
- **Core meaning & mental image — Tiếng Việt:** Hạn chế mặt nạ bit quyền hạn (việc thực thi các quyền truy cập chi tiết — như nạp, lưu, thực thi và quyền dẫn xuất toàn cục — được mã hóa trực tiếp trong trường mặt nạ bit của năng lực). Hình ảnh giống như danh sách các quyền hạn được đánh dấu tích chọn rõ ràng trên thẻ nhân viên ra vào từng khu vực.
- **Grammar & collocations:**
  - apply permission bitmask restriction (áp dụng hạn chế mặt nạ bit quyền hạn)
  - permission bitmask restriction check (kiểm tra hạn chế mặt nạ bit quyền hạn)
  - enforce permission bitmask restriction (thực thi hạn chế mặt nạ bit quyền hạn)
- **Register & nuance:** Access control, CPU architecture, fine-grained security.
- **Examples:**
  - *The permission bitmask restriction prevents data pages from being executed as code.* -> Hạn chế mặt nạ bit quyền hạn ngăn cản các trang dữ liệu bị thực thi như mã nguồn.
  - *Developers can strip execute permissions via permission bitmask restriction before passing buffers.* -> Các nhà phát triển có thể loại bỏ quyền thực thi thông qua hạn chế mặt nạ bit quyền hạn trước khi truyền các vùng đệm.
- **Liên kết tiếng Hàn:** 권한 비트마스크 제한 (gwon-han biteu-maseukeu jehan) — giới hạn quyền truy cập chi tiết được mã hóa bằng mặt nạ bit.

## 19. architectural capability fault
- **IPA:** /ˌɑːrkɪˈtɛktʃərəl ˈkeɪpəˈbɪlɪti fɔːlt/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A hardware-generated exception raised when software violates capability rules, such as exceeding bounds, using an untagged pointer, or lacking requisite permissions.
- **Core meaning & mental image — Tiếng Việt:** Lỗi năng lực kiến trúc (ngoại lệ do phần cứng sinh ra khi phần mềm vi phạm các quy tắc năng lực, chẳng hạn như vượt quá giới hạn, sử dụng con trỏ chưa gắn thẻ hoặc thiếu quyền hạn cần thiết). Hình ảnh giống như tiếng còi hú vang lên từ hệ thống kiểm soát khi một nhân viên cố mở cánh cửa không đúng thẩm quyền.
- **Grammar & collocations:**
  - trigger an architectural capability fault (kích hoạt lỗi năng lực kiến trúc)
  - handle an architectural capability fault (xử lý lỗi năng lực kiến trúc)
  - architectural capability fault handler (trình xử lý lỗi năng lực kiến trúc)
- **Register & nuance:** CPU exception handling, operating systems, debugging.
- **Examples:**
  - *Dereferencing a null capability results in an immediate architectural capability fault.* -> Việc giải tham chiếu một con trỏ năng lực rỗng dẫn đến lỗi năng lực kiến trúc ngay lập tức.
  - *The operating system kernel catches the architectural capability fault and terminates the offending process.* -> Nhân hệ điều hành bắt lỗi năng lực kiến trúc và chấm dứt tiến trình gây vi phạm.
- **Liên kết tiếng Hàn:** 아키텍처 기능 결함 (akitek-cheo gineung gyeol-ham) — ngoại lệ phần cứng khi vi phạm quy tắc kiểm soát năng lực.

## 20. domain transition call gate
- **IPA:** /doʊˈmeɪn trænˈzɪʃən kɔːl ɡeɪt/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A secure hardware-controlled mechanism that allows safe, controlled entry into a privileged execution domain while resetting registers and swapping capability contexts.
- **Core meaning & mental image — Tiếng Việt:** Cổng gọi chuyển đổi miền (cơ chế được kiểm soát bằng phần cứng an toàn cho phép bước vào miền thực thi đặc quyền một cách an toàn, có kiểm soát trong khi đặt lại các thanh ghi và hoán đổi ngữ cảnh năng lực). Hình ảnh giống như một trạm kiểm gác an ninh một chiều, nơi bạn phải xuất trình giấy phép đặc biệt mới được bước qua cánh cửa vào khu vực tối mật.
- **Grammar & collocations:**
  - invoke a domain transition call gate (gọi cổng gọi chuyển đổi miền)
  - secure domain transition call gate (cổng gọi chuyển đổi miền an toàn)
  - domain transition call gate mechanism (cơ chế cổng gọi chuyển đổi miền)
- **Register & nuance:** Security domains, privilege separation, microkernel architecture.
- **Examples:**
  - *System calls are executed efficiently via the domain transition call gate without full context switches.* -> Các lệnh gọi hệ thống được thực hiện hiệu quả thông qua cổng gọi chuyển đổi miền mà không cần chuyển ngữ cảnh hoàn toàn.
  - *The domain transition call gate ensures parameters are securely passed across isolation boundaries.* -> Cổng gọi chuyển đổi miền đảm bảo các tham số được truyền an toàn qua các ranh giới cô lập.
- **Liên kết tiếng Hàn:** 도메인 전환 콜 게이트 (domein jeon-hwan kol geiteu) — cổng phần cứng cho phép chuyển đổi miền thực thi đặc quyền an toàn.

## 21. capability-aware memory allocator
- **IPA:** /ˈkeɪpəˈbɪlɪti əˈwɛr ˈmɛməri ˈæləˌkeɪtər/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A specialized heap memory allocator designed to return bounded, correctly tagged capability pointers for allocated chunks rather than raw scalar memory addresses.
- **Core meaning & mental image — Tiếng Việt:** Trình cấp phát bộ nhớ nhận biết năng lực (trình cấp phát bộ nhớ heap chuyên biệt được thiết kế để trả về các con trỏ năng lực có giới hạn, được gắn thẻ chính xác cho các khối được cấp phát thay vì địa chỉ bộ nhớ thô). Hình ảnh giống như thủ kho cấp phát dụng cụ không chỉ đưa vật phẩm mà còn kèm theo thẻ chứng nhận phạm vi sử dụng chính xác cho từng món đồ.
- **Grammar & collocations:**
  - implement a capability-aware memory allocator (triển khai trình cấp phát bộ nhớ nhận biết năng lực)
  - capability-aware memory allocator performance (hiệu suất của trình cấp phát bộ nhớ nhận biết năng lực)
  - utilize a capability-aware memory allocator (sử dụng trình cấp phát bộ nhớ nhận biết năng lực)
- **Register & nuance:** Memory management, runtime systems, systems programming.
- **Examples:**
  - *Porting applications to CHERI requires replacing standard malloc with a capability-aware memory allocator.* -> Việc chuyển dịch ứng dụng sang CHERI đòi hỏi phải thay thế hàm malloc chuẩn bằng trình cấp phát bộ nhớ nhận biết năng lực.
  - *The capability-aware memory allocator enforces strict bounds on every heap allocation.* -> Trình cấp phát bộ nhớ nhận biết năng lực thực thi giới hạn nghiêm ngặt trên mọi phân bổ heap.
- **Liên kết tiếng Hàn:** 기능 인식 메모리 할당자 (gineung insik me-mo-ri hal-dang-ja) — bộ quản lý cấp phát bộ nhớ hiểu và tạo con trỏ năng lực.

## 22. memory safety performance overhead
- **IPA:** /ˈmɛməri ˈseɪfti pərˈfɔːrməns ˈoʊvərˌhɛd/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The execution time and storage penalty incurred by enforcing rigorous spatial and temporal memory safety checks in hardware or software.
- **Core meaning & mental image — Tiếng Việt:** Chi phí hiệu suất an toàn bộ nhớ (phạt về thời gian thực thi và dung lượng lưu trữ do việc thực thi các kiểm tra an toàn bộ nhớ không gian và thời gian nghiêm ngặt trong phần cứng hoặc phần mềm). Hình ảnh giống như trọng lượng bổ sung của chiếc áo giáp chống đạn làm giảm tốc độ di chuyển của người lính nhưng đổi lại sự an toàn tối đa.
- **Grammar & collocations:**
  - minimize memory safety performance overhead (giảm thiểu chi phí hiệu suất an toàn bộ nhớ)
  - measure memory safety performance overhead (đo lường chi phí hiệu suất an toàn bộ nhớ)
  - low memory safety performance overhead (chi phí hiệu suất an toàn bộ nhớ thấp)
- **Register & nuance:** Performance engineering, benchmarking, systems architecture.
- **Examples:**
  - *Thanks to hardware acceleration, CHERI achieves an exceptionally low memory safety performance overhead.* -> Nhờ tăng tốc phần cứng, CHERI đạt được chi phí hiệu suất an toàn bộ nhớ cực kỳ thấp.
  - *Engineers optimized the pipeline to reduce memory safety performance overhead below two percent.* -> Các kỹ sư đã tối ưu hóa đường ống để giảm chi phí hiệu suất an toàn bộ nhớ xuống dưới hai phần trăm.
- **Liên kết tiếng Hàn:** 메모리 안전성 성능 오버헤드 (me-mo-ri an-jeong-seong seong-neung obe-hedu) — tổn thất hiệu năng hệ thống do việc kiểm tra an toàn bộ nhớ.

## 23. formal microarchitectural verification
- **IPA:** /ˈfɔːrməl ˌmaɪkroʊˌɑːrkɪˈtɛktʃərəl ˌvɛrɪfɪˈkeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The mathematical proof and verification of processor hardware designs to ensure that security invariants, tag propagation rules, and capability bounds checks hold without flaw.
- **Core meaning & mental image — Tiếng Việt:** Xác minh vi kiến trúc hình thức (chứng minh và kiểm tra toán học các thiết kế phần cứng bộ xử lý để đảm bảo các bất biến bảo mật, quy tắc lan truyền thẻ và kiểm tra giới hạn năng lực diễn ra không có sơ hở). Hình ảnh giống như việc kiểm tra kỹ lưỡng từng bản vẽ kỹ thuật bằng phần mềm toán học trước khi đưa dây chuyền đúc chip vào hoạt động.
- **Grammar & collocations:**
  - conduct formal microarchitectural verification (tiến hành xác minh vi kiến trúc hình thức)
  - formal microarchitectural verification methods (các phương pháp xác minh vi kiến trúc hình thức)
  - complete formal microarchitectural verification (hoàn thành xác minh vi kiến trúc hình thức)
- **Register & nuance:** Processor verification, formal methods, hardware security.
- **Examples:**
  - *Formal microarchitectural verification ensures that no bypasses exist in the capability enforcement logic.* -> Xác minh vi kiến trúc hình thức đảm bảo không có đường vòng nào tồn tại trong logic thực thi năng lực.
  - *The CPU design team employed theorem provers for formal microarchitectural verification.* -> Nhóm thiết kế CPU đã sử dụng các công cụ chứng minh định lý để xác minh vi kiến trúc hình thức.
- **Liên kết tiếng Hàn:** 형식적 마이크로아키텍처 검증 (hyeong-sik-jeok maikeuro-akitekcheo geom-jeung) — phương pháp chứng minh toán học thiết kế vi kiến trúc phần cứng.

## 24. compartment isolation boundary
- **IPA:** /kəmˈpɑːrtmənt ˌaɪsəˈleɪʃən ˈbaʊndəri/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The hardware-defined dividing line separating isolated execution domains, ensuring that faults or compromises cannot cross into adjacent compartments.
- **Core meaning & mental image — Tiếng Việt:** Ranh giới cô lập khoang (đường ranh giới do phần cứng xác định tách biệt các miền thực thi cô lập, đảm bảo các lỗi hoặc sự xâm phạm không thể vượt qua các khoang liền kề). Hình ảnh giống như bức tường chống cháy kiên cố giữa các tòa nhà chung cư ngăn không cho đám cháy lan sang căn hộ bên cạnh.
- **Grammar & collocations:**
  - establish a compartment isolation boundary (thiết lập ranh giới cô lập khoang)
  - cross a compartment isolation boundary (vượt qua ranh giới cô lập khoang)
  - compartment isolation boundary enforcement (việc thực thi ranh giới cô lập khoang)
- **Register & nuance:** Security boundaries, sandboxing, architectural isolation.
- **Examples:**
  - *Crossing a compartment isolation boundary requires invoking a verified capability call gate.* -> Việc vượt qua ranh giới cô lập khoang đòi hỏi phải gọi một cổng gọi năng lực đã được xác minh.
  - *The compartment isolation boundary successfully contained the zero-day plugin exploit.* -> Ranh giới cô lập khoang đã ngăn chặn thành công cuộc khai thác tiện ích bổ sung zero-day.
- **Liên kết tiếng Hàn:** 구획 격리 경계 (gu-hoek gyeok-ri gyeong-gye) — ranh giới phần cứng phân tách và cô lập các vùng thực thi độc lập.

## 25. provably secure hardware substrate
- **IPA:** /ˈpruːvəbli sɪˈkjʊər ˈhɑːrdwɛr ˈsʌbstrət/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A foundational physical or microarchitectural platform whose security properties are backed by rigorous mathematical proofs rather than empirical testing alone.
- **Core meaning & mental image — Tiếng Việt:** Nền tảng phần cứng bảo mật có thể chứng minh (một nền tảng vật lý hoặc vi kiến trúc nền tảng có các đặc tính bảo mật được hỗ trợ bởi các chứng minh toán học nghiêm ngặt thay vì chỉ dựa vào kiểm thử thực nghiệm). Hình ảnh giống như một móng nhà được tính toán sức chịu lực bằng các phương trình vật lý tuyệt đối trước khi xây dựng tòa tháp chọc trời.
- **Grammar & collocations:**
  - build a provably secure hardware substrate (xây dựng nền tảng phần cứng bảo mật có thể chứng minh)
  - provably secure hardware substrate guarantees (các đảm bảo của nền tảng phần cứng bảo mật có thể chứng minh)
  - develop a provably secure hardware substrate (phát triển nền tảng phần cứng bảo mật có thể chứng minh)
- **Register & nuance:** High-assurance hardware, academic computing, foundational security.
- **Examples:**
  - *CHERI aims to provide a provably secure hardware substrate for future computing infrastructure.* -> CHERI nhằm mục đích cung cấp nền tảng phần cứng bảo mật có thể chứng minh cho cơ sở hạ tầng điện toán tương lai.
  - *Deploying software on a provably secure hardware substrate mitigates entire classes of low-level exploits.* -> Triển khai phần mềm trên nền tảng phần cứng bảo mật có thể chứng minh làm giảm nhẹ toàn bộ các lớp khai thác cấp thấp.
- **Liên kết tiếng Hàn:** 증명 가능한 보안 하드웨어 기판 (jeung-myeong ganeun-han bo-an hadeu-we-o giban) — nền tảng phần cứng có các thuộc tính bảo mật được chứng minh toán học chặt chẽ.

## Review in context: Part 1 (items 1–12)

Modern computer security is undergoing a paradigm shift through the integration of the **CHERI capability architecture**, which replaces raw pointers with unforgeable references. At the heart of this design lies **hardware-enforced tagged memory**, where every memory word includes a dedicated tag bit that validates whether a value is a genuine capability. This enables systems to strictly enforce a **spatial memory safety bound**, halting any out-of-bounds access attempt instantly. Furthermore, advanced mechanisms achieve **temporal memory safety revocation**, neutralizing dangling pointer exploits. Every pointer in this environment functions as an **unforgeable capability pointer**, tracked meticulously through **pointer provenance tracking** across an expanded **capability register file**. Because capabilities are governed by **monotonic capability revocation**, code cannot illegally escalate privileges. This hardware foundation facilitates **fine-grained memory compartmentalization**, allowing developers to apply **capability bounds reduction** when passing pointers to subroutines. Ultimately, these features trigger **buffer overflow hardware interception** the moment a violation occurs, validating the fundamental **memory corruption mitigation theorem**.

### Vietnamese Translation — Phần 1
Bảo mật máy tính hiện đại đang trải qua một bước chuyển dịch mô hình thông qua việc tích hợp **kiến trúc năng lực CHERI**, thay thế các con trỏ thô bằng các tham chiếu không thể giả mạo. Trọng tâm của thiết kế này nằm ở **bộ nhớ gắn thẻ do phần cứng cưỡng bức**, nơi mọi từ bộ nhớ bao gồm một bit thẻ chuyên dụng để xác thực xem một giá trị có phải là năng lực thực sự hay không. Điều này cho phép các hệ thống thực thi nghiêm ngặt **giới hạn an toàn bộ nhớ không gian**, chặn đứng mọi nỗ lực truy cập vượt quá ranh giới ngay lập tức. Hơn nữa, các cơ chế tiên tiến đạt được **thu hồi an toàn bộ nhớ thời gian**, vô hiệu hóa các cuộc khai thác con trỏ treo. Mọi con trỏ trong môi trường này hoạt động như một **con trỏ năng lực không thể giả mạo**, được theo dõi tỉ mỉ thông qua **theo dõi nguồn gốc con trỏ** trên một **tệp thanh ghi năng lực** mở rộng. Do các năng lực được chi phối bởi **thu hồi năng lực đơn điệu**, mã nguồn không thể leo thang đặc quyền trái phép. Nền tảng phần cứng này tạo điều kiện thuận lợi cho **phân vùng bộ nhớ mịn**, cho phép các nhà phát triển áp dụng **thu hẹp giới hạn năng lực** khi truyền con trỏ cho các chương trình con. Cuối cùng, các tính năng này kích hoạt **chặn tràn bộ đệm bằng phần cứng** ngay khoảnh khắc một vi phạm xảy ra, xác thực **định lý giảm thiểu hỏng bộ nhớ** cơ bản.

## Review in context: Part 2 (items 13–25)

Beyond basic memory bounds, secure systems leverage the **capability seal-and-unseal primitive** to hide sensitive data structures and implement **kernel address space compartmentalization** for robust OS isolation. Despite these architectural changes, full **legacy C binary portability** is maintained through compatibility modes, ensuring existing codebases run smoothly. When pointers are stale, **use-after-free hardware trapping** catches bugs on the fly, while automatic **capability tag bit clearing** strips validity whenever raw arithmetic attempts modification. Access rights are strictly controlled via **permission bitmask restriction**, and any infraction immediately triggers an **architectural capability fault**. When crossing security tiers, software invokes a **domain transition call gate**, relying on a **capability-aware memory allocator** for heap management. Although these comprehensive protections introduce a minor **memory safety performance overhead**, rigorous **formal microarchitectural verification** ensures that every **compartment isolation boundary** remains impenetrable. Together, these innovations establish a **provably secure hardware substrate** for next-generation trustworthy computing.

### Vietnamese Translation — Phần 2
Vượt ra ngoài các giới hạn bộ nhớ cơ bản, các hệ thống bảo mật tận dụng **nguyên thủy niêm phong và mở niêm phong năng lực** để ẩn các cấu trúc dữ liệu nhạy cảm và triển khai **phân vùng không gian địa chỉ nhân** nhằm cô lập hệ điều hành mạnh mẽ. Bất chấp những thay đổi kiến trúc này, **khả năng tương thích nhị phân mã nguồn C cũ** toàn diện vẫn được duy trì thông qua các chế độ tương thích, đảm bảo các cơ sở mã hiện có chạy mượt mà. Khi các con trỏ trở nên lỗi thời, **bẫy phần cứng lỗi dùng sau khi giải phóng** phát hiện lỗi ngay tức thì, trong khi **xóa bit thẻ năng lực** tự động tước bỏ tính hợp lệ bất cứ khi nào các phép toán thô cố gắng sửa đổi. Các quyền truy cập được kiểm soát nghiêm ngặt thông qua **hạn chế mặt nạ bit quyền hạn**, và bất kỳ hành vi vi phạm nào ngay lập tức kích hoạt **lỗi năng lực kiến trúc**. Khi vượt qua các tầng bảo mật, phần mềm gọi một **cổng gọi chuyển đổi miền**, dựa vào **trình cấp phát bộ nhớ nhận biết năng lực** để quản lý heap. Mặc dù các bảo vệ toàn diện này giới thiệu một **chi phí hiệu suất an toàn bộ nhớ** nhỏ, **xác minh vi kiến trúc hình thức** nghiêm ngặt đảm bảo mọi **ranh giới cô lập khoang** vẫn không thể xâm nhập. Cùng nhau, những đổi mới này thiết lập một **nền tảng phần cứng bảo mật có thể chứng minh** cho điện toán đáng tin cậy thế hệ tiếp theo.
