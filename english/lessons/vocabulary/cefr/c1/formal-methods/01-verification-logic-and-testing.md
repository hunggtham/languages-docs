# C1 Vocabulary 01 — Verification, logic, and testing

Nhóm từ này mô tả cách dùng toán học, logic và công cụ tự động để chứng minh hoặc tìm lỗi trong phần mềm và hệ thống.

## 1. formal verification /ˈfɔrməl ˌverəfəˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — việc dùng phương pháp toán học để chứng minh hệ thống đáp ứng đặc tả.

**Core meaning — English:** The use of mathematical methods to prove that a system satisfies a specification.

**Core meaning & mental image — Tiếng Việt:** Không chỉ chạy thử vài ca mà kiểm tra bằng lập luận để bảo đảm mọi trường hợp thuộc phạm vi đều đúng.

**Grammar & collocations:** `formal-verification tool`, `apply formal verification`, `verification proof`.

**Register & nuance:** Formal verification mạnh nhưng tốn công; kết quả chỉ chắc trong phạm vi mô hình và đặc tả đã chọn.

**Example:** `Formal verification proved that the protocol preserved secrecy.` → Kiểm chứng hình thức chứng minh giao thức giữ bí mật.

**Liên kết tiếng Hàn:** `형식 검증` — kiểm chứng hình thức.

## 2. model checking /ˈmɑdəl ˌtʃekɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — kỹ thuật tự động duyệt các trạng thái của mô hình để kiểm tra tính chất đã nêu.

**Core meaning — English:** An automated technique that explores a model’s states to check specified properties.

**Core meaning & mental image — Tiếng Việt:** Một máy duyệt mọi ngã rẽ của hệ thống để tìm nhánh dẫn tới trạng thái cấm.

**Grammar & collocations:** `model-checking algorithm`, `model-checking tool`, `state-space explosion`.

**Register & nuance:** Model checking có thể gặp bùng nổ không gian trạng thái và thường cần trừu tượng hóa.

**Example:** `Model checking found a deadlock in the communication protocol.` → Kiểm tra mô hình tìm thấy bế tắc trong giao thức liên lạc.

**Liên kết tiếng Hàn:** `모델 검사` — kiểm tra mô hình.

## 3. invariant /ɪnˈveriənt/

**Loại từ & vị trí trong câu:** `countable noun` — điều kiện phải luôn đúng trước và sau một thao tác hoặc trong suốt quá trình chạy.

**Core meaning — English:** A condition that must remain true before and after an operation or throughout execution.

**Core meaning & mental image — Tiếng Việt:** Một sợi dây căng không được đứt dù trạng thái hệ thống thay đổi.

**Grammar & collocations:** `loop invariant`, `maintain an invariant`, `invariant property`.

**Register & nuance:** Invariant là công cụ lập luận; phải chỉ rõ nó đúng trong trạng thái nào và được bảo toàn bởi thao tác nào.

**Example:** `The loop invariant guaranteed that the processed items were sorted.` → Bất biến vòng lặp bảo đảm các phần tử đã xử lý được sắp xếp.

**Liên kết tiếng Hàn:** `불변식` — bất biến.

## 4. temporal logic /ˈtempərəl ˈlɑdʒɪk/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — hệ logic diễn tả tính chất của hệ thống theo thời gian, thứ tự hoặc khả năng xảy ra.

**Core meaning — English:** A logic for expressing system properties over time, order, or possible future states.

**Core meaning & mental image — Tiếng Việt:** Không chỉ hỏi hệ thống đang đúng mà hỏi cuối cùng nó có phản hồi, luôn an toàn hay có thể mắc kẹt không.

**Grammar & collocations:** `temporal-logic formula`, `temporal-logic specification`, `reason in temporal logic`.

**Register & nuance:** Temporal logic phù hợp hệ thống đồng thời và phản ứng, nhưng công thức có thể khó đọc nếu không có công cụ.

**Example:** `The requirement was expressed in temporal logic.` → Yêu cầu được diễn đạt bằng logic thời gian.

**Liên kết tiếng Hàn:** `시간 논리` — logic thời gian.

## 5. theorem proving /ˈθiərəm ˌpruːvɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — quá trình xây dựng hoặc kiểm tra chứng minh rằng một mệnh đề suy ra từ các tiên đề và giả định.

**Core meaning — English:** The process of constructing or checking a proof that a proposition follows from axioms and assumptions.

**Core meaning & mental image — Tiếng Việt:** Ghép từng viên gạch logic cho đến khi kết luận đứng vững, không dựa vào ví dụ riêng lẻ.

**Grammar & collocations:** `automated theorem proving`, `theorem-proving system`, `formal proof`.

**Register & nuance:** Theorem proving có thể tự động, tương tác hoặc kết hợp; phần khó thường nằm ở việc tìm chiến lược chứng minh.

**Example:** `Theorem proving verified the arithmetic component.` → Chứng minh định lý kiểm chứng thành phần số học.

**Liên kết tiếng Hàn:** `정리 증명` — chứng minh định lý.

## 6. type safety /ˈtaɪp ˈseɪfti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — khả năng hệ thống ngăn các thao tác dùng dữ liệu sai kiểu theo cách không an toàn.

**Core meaning — English:** The ability of a system to prevent unsafe operations involving incompatible data types.

**Core meaning & mental image — Tiếng Việt:** Ổ khóa kiểu dữ liệu không cho cắm phích số vào ổ dành cho chuỗi văn bản.

**Grammar & collocations:** `static type safety`, `type-safe language`, `preserve type safety`.

**Register & nuance:** Type safety giảm một lớp lỗi nhưng không bảo đảm logic nghiệp vụ, bảo mật hoặc dữ liệu luôn đúng.

**Example:** `Type safety caught the invalid conversion before deployment.` → An toàn kiểu bắt chuyển đổi không hợp lệ trước triển khai.

**Liên kết tiếng Hàn:** `타입 안전성` — an toàn kiểu.

## 7. static analysis /ˈstætɪk əˈnæləsɪs/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — phân tích mã mà không cần chạy chương trình để tìm lỗi, mẫu nguy hiểm hoặc vi phạm quy tắc.

**Core meaning — English:** Analysis of code without executing it to find defects, risky patterns, or rule violations.

**Core meaning & mental image — Tiếng Việt:** Đọc bản đồ đường đi trước khi xe chạy để phát hiện ngõ cụt và biển báo sai.

**Grammar & collocations:** `static-analysis tool`, `static-analysis warning`, `run static analysis`.

**Register & nuance:** Static analysis có thể báo nhầm hoặc bỏ sót; cấu hình quy tắc quyết định tín hiệu hữu ích đến đâu.

**Example:** `Static analysis detected an unchecked input path.` → Phân tích tĩnh phát hiện đường dẫn đầu vào chưa được kiểm tra.

**Liên kết tiếng Hàn:** `정적 분석` — phân tích tĩnh.

## 8. dynamic analysis /daɪˈnæmɪk əˈnæləsɪs/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — phân tích hành vi của chương trình khi nó đang chạy trong môi trường quan sát.

**Core meaning — English:** Analysis of a program’s behavior while it executes in an observed environment.

**Core meaning & mental image — Tiếng Việt:** Theo dõi xe đang chạy để thấy nó rẽ, phanh và va vào đâu thay vì chỉ đọc bản đồ.

**Grammar & collocations:** `dynamic-analysis tool`, `runtime instrumentation`, `perform dynamic analysis`.

**Register & nuance:** Dynamic analysis thấy hành vi thực tế nhưng phụ thuộc dữ liệu, đường chạy và môi trường được thử.

**Example:** `Dynamic analysis revealed a memory leak under heavy load.` → Phân tích động cho thấy rò rỉ bộ nhớ dưới tải nặng.

**Liên kết tiếng Hàn:** `동적 분석` — phân tích động.

## 9. symbolic execution /sɪmˈbɑlɪk ˌeksəˈkjuːʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — kỹ thuật chạy chương trình với ký hiệu đại diện cho nhiều giá trị đầu vào và suy ra điều kiện đường đi.

**Core meaning — English:** A technique that executes a program with symbolic inputs to derive conditions for its paths.

**Core meaning & mental image — Tiếng Việt:** Một lần chạy đại diện cho cả họ giá trị, ghi lại điều kiện để đi qua từng nhánh.

**Grammar & collocations:** `symbolic-execution engine`, `symbolic-execution path`, `run symbolic execution`.

**Register & nuance:** Symbolic execution mạnh trong tìm lỗi nhưng có thể gặp bùng nổ đường đi và ràng buộc khó giải.

**Example:** `Symbolic execution found an input that bypassed validation.` → Thực thi ký hiệu tìm được đầu vào vượt qua kiểm tra.

**Liên kết tiếng Hàn:** `기호 실행` — thực thi ký hiệu.

## 10. fuzz testing /fʌz ˈtestɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — kiểm thử bằng cách tự động tạo đầu vào bất thường, ngẫu nhiên hoặc hỏng để làm lộ lỗi.

**Core meaning — English:** Testing that automatically generates unusual, random, or malformed inputs to expose failures.

**Core meaning & mental image — Tiếng Việt:** Đổ đủ loại vật thể lạ vào máy để xem nó kẹt, sập hay xử lý an toàn.

**Grammar & collocations:** `fuzz-testing campaign`, `fuzz-testing tool`, `fuzz a parser`.

**Register & nuance:** Fuzzing hiệu quả với parser và giao thức nhưng cần thu gọn ca lỗi để lập trình viên sửa được.

**Example:** `Fuzz testing crashed the parser with a malformed file.` → Kiểm thử fuzz làm bộ phân tích cú pháp sập với tệp hỏng.

**Liên kết tiếng Hàn:** `퍼즈 테스트`, `퍼징` — kiểm thử fuzz.

## 11. property-based testing /ˈprɑpərti beɪst ˈtestɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — kiểm thử các tính chất tổng quát bằng nhiều đầu vào được sinh tự động thay vì chỉ vài ví dụ cố định.

**Core meaning — English:** Testing general properties with many generated inputs rather than only fixed examples.

**Core meaning & mental image — Tiếng Việt:** Nói “sắp xếp không đổi số phần tử” rồi để máy tạo hàng nghìn danh sách kiểm tra lời hứa.

**Grammar & collocations:** `property-based testing framework`, `property-based test`, `define a property`.

**Register & nuance:** Property-based testing tìm trường hợp biên tốt nhưng cần viết thuộc tính chính xác và có nghĩa.

**Example:** `Property-based testing found an ordering bug missed by examples.` → Kiểm thử dựa trên tính chất tìm lỗi thứ tự mà ví dụ bỏ sót.

**Liên kết tiếng Hàn:** `속성 기반 테스트` — kiểm thử dựa trên tính chất.

## 12. proof obligation /ˈpruːf ˌɑbləˈɡeɪʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase` — mệnh đề hoặc điều kiện phải được chứng minh để xác nhận chương trình đáp ứng đặc tả.

**Core meaning — English:** A proposition or condition that must be proved to establish that a program satisfies its specification.

**Core meaning & mental image — Tiếng Việt:** Mỗi cây cầu trong lập luận có một chốt phải kiểm tra trước khi được phép đi qua.

**Grammar & collocations:** `generate proof obligations`, `discharge a proof obligation`, `proof-obligation solver`.

**Register & nuance:** Proof obligation là phần việc trung gian của kiểm chứng, không tự nói phương pháp chứng minh là gì.

**Example:** `The verifier generated a proof obligation for array bounds.` → Bộ kiểm chứng tạo nghĩa vụ chứng minh cho giới hạn mảng.

**Liên kết tiếng Hàn:** `증명 의무` — nghĩa vụ chứng minh.

## 13. specification language /ˌspesəfəˈkeɪʃən ˈlæŋɡwɪdʒ/

**Loại từ & vị trí trong câu:** `countable noun phrase` — ngôn ngữ hình thức dùng để mô tả hành vi hoặc tính chất hệ thống một cách chính xác.

**Core meaning — English:** A formal language used to describe a system’s behavior or properties precisely.

**Core meaning & mental image — Tiếng Việt:** Bản hợp đồng máy đọc được, nói rõ điều gì phải luôn đúng và điều gì được phép xảy ra.

**Grammar & collocations:** `formal specification language`, `write a specification`, `specification-language construct`.

**Register & nuance:** Đặc tả tốt giúp kiểm chứng nhưng nếu mơ hồ hoặc sai thì công cụ có thể chứng minh điều không đúng mục tiêu.

**Example:** `The team expressed the safety rule in a specification language.` → Nhóm diễn đạt quy tắc an toàn bằng ngôn ngữ đặc tả.

**Liên kết tiếng Hàn:** `명세 언어` — ngôn ngữ đặc tả.

## 14. soundness /ˈsaʊndnəs/

**Loại từ & vị trí trong câu:** `uncountable noun` — tính chất phương pháp không đưa ra kết luận sai: mọi điều nó chứng minh đều đúng trong mô hình.

**Core meaning — English:** The property that a method does not prove false claims; everything it proves is true within the model.

**Core meaning & mental image — Tiếng Việt:** Con dấu kiểm chứng không bao giờ đóng lên một mệnh đề sai, dù có thể bỏ sót mệnh đề đúng.

**Grammar & collocations:** `soundness proof`, `soundness guarantee`, `preserve soundness`.

**Register & nuance:** Soundness khác completeness: phương pháp có thể chắc chắn nhưng không đủ mạnh để chứng minh mọi điều đúng.

**Example:** `The type system’s soundness prevented unsafe casts.` → Tính đúng đắn của hệ kiểu ngăn ép kiểu không an toàn.

**Liên kết tiếng Hàn:** `건전성` — tính đúng đắn, soundness.

## 15. completeness /kəmˈpliːtnəs/

**Loại từ & vị trí trong câu:** `uncountable noun` — tính chất phương pháp có thể chứng minh mọi mệnh đề đúng thuộc phạm vi logic của nó.

**Core meaning — English:** The property that a method can prove every true proposition within the scope of its logic.

**Core meaning & mental image — Tiếng Việt:** Không có viên gạch đúng nào trong khu vực mà hệ thống không thể, về nguyên tắc, chạm tới.

**Grammar & collocations:** `completeness theorem`, `completeness result`, `prove completeness`.

**Register & nuance:** Completeness thường đạt được với logic hoặc mô hình hạn chế; hệ thống thực tế có thể phải đánh đổi khả năng tự động.

**Example:** `The paper discussed the completeness of the decision procedure.` → Bài viết bàn về tính đầy đủ của thủ tục quyết định.

**Liên kết tiếng Hàn:** `완전성` — tính đầy đủ.

## Review in context

**Formal verification** may use **model checking**, an **invariant**, and **temporal logic**, while **theorem proving** produces explicit arguments. **Type safety**, **static analysis**, and **dynamic analysis** catch different classes of defects. **Symbolic execution**, **fuzz testing**, and **property-based testing** explore unusual paths. A **proof obligation** is written in a **specification language**, whose method must balance **soundness** and **completeness**.

**Kiểm chứng hình thức** có thể dùng **kiểm tra mô hình**, **bất biến** và **logic thời gian**, còn **chứng minh định lý** tạo ra lập luận rõ ràng. **An toàn kiểu**, **phân tích tĩnh** và **phân tích động** bắt các loại lỗi khác nhau. **Thực thi ký hiệu**, **kiểm thử fuzz** và **kiểm thử dựa trên tính chất** khám phá các đường đi bất thường. **Nghĩa vụ chứng minh** được viết bằng **ngôn ngữ đặc tả**, trong đó phương pháp phải cân bằng **tính đúng đắn** và **tính đầy đủ**.
