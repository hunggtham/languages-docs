# C1 Vocabulary 01 — Types, runtime, and semantics

Nhóm từ này mô tả cách ngôn ngữ lập trình biểu diễn kiểu, quản lý bộ nhớ và định nghĩa ý nghĩa của chương trình.

## 1. type inference /taɪp ˈɪnfərəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — quá trình hệ thống tự suy ra kiểu dữ liệu từ cách giá trị được dùng.

**Core meaning — English:** The process by which a system infers data types from how values are used.

**Core meaning & mental image — Tiếng Việt:** Trình biên dịch nhìn các phép dùng biến và tự điền nhãn kiểu thay vì bắt lập trình viên viết mọi nhãn.

**Grammar & collocations:** `type-inference algorithm`, `local type inference`, `infer a type`.

**Register & nuance:** Inference tiện dụng nhưng vẫn bị giới hạn bởi quy tắc ngôn ngữ và có thể cần chú thích khi suy luận mơ hồ.

**Example:** `Type inference kept the function signature concise.` → Suy luận kiểu giữ chữ ký hàm gọn hơn.

**Liên kết tiếng Hàn:** `타입 추론` — suy luận kiểu.

## 2. garbage collection /ˈɡɑrbɪdʒ kəˌlekʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — cơ chế tự động tìm và giải phóng vùng nhớ không còn được chương trình dùng.

**Core meaning — English:** An automatic mechanism that finds and frees memory no longer used by a program.

**Core meaning & mental image — Tiếng Việt:** Nhân viên dọn kho thu hồi những hộp không còn ai tham chiếu để tạo chỗ trống.

**Grammar & collocations:** `garbage-collection pause`, `garbage-collection algorithm`, `trigger collection`.

**Register & nuance:** Garbage collection giảm lỗi giải phóng thủ công nhưng có thể tạo pause, chi phí CPU và hành vi khó đoán.

**Example:** `The service experienced long garbage-collection pauses under load.` → Dịch vụ gặp các lần tạm dừng gom rác dài dưới tải.

**Liên kết tiếng Hàn:** `가비지 컬렉션` — thu gom rác.

## 3. memory safety /ˈmeməri ˈseɪfti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — tính chất ngăn chương trình truy cập bộ nhớ ngoài phạm vi hoặc dùng vùng nhớ không hợp lệ.

**Core meaning — English:** The property of preventing programs from accessing memory out of bounds or using invalid memory.

**Core meaning & mental image — Tiếng Việt:** Hàng rào bộ nhớ không cho tay với vào ngăn đã trả lại hoặc ngoài phần được cấp.

**Grammar & collocations:** `memory-safe language`, `memory-safety guarantee`, `preserve memory safety`.

**Register & nuance:** Memory safety là một lớp an toàn quan trọng nhưng không ngăn mọi lỗi logic hay lộ dữ liệu.

**Example:** `Memory safety eliminated an entire class of buffer bugs.` → An toàn bộ nhớ loại bỏ một nhóm lỗi bộ đệm.

**Liên kết tiếng Hàn:** `메모리 안전성` — an toàn bộ nhớ.

## 4. concurrency model /kənˈkɜrənsi ˈmɑdəl/

**Loại từ & vị trí trong câu:** `countable noun phrase` — cách ngôn ngữ hoặc runtime tổ chức nhiều tác vụ tiến triển cùng lúc và giao tiếp với nhau.

**Core meaning — English:** The way a language or runtime organizes multiple tasks that progress concurrently and communicate.

**Core meaning & mental image — Tiếng Việt:** Luật giao thông cho nhiều luồng xe chạy cùng đường mà không đâm nhau.

**Grammar & collocations:** `concurrency-model choice`, `actor concurrency model`, `understand the model`.

**Register & nuance:** Mô hình có thể dựa trên thread, actor, message passing hoặc async task, mỗi loại có lỗi đặc trưng.

**Example:** `The concurrency model favored message passing over shared memory.` → Mô hình đồng thời ưu tiên truyền thông điệp hơn bộ nhớ dùng chung.

**Liên kết tiếng Hàn:** `동시성 모델` — mô hình đồng thời.

## 5. functional programming /ˈfʌŋkʃənəl ˈproʊˌɡræmɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — phong cách lập trình coi hàm và biến đổi dữ liệu là trung tâm, hạn chế trạng thái có thể thay đổi.

**Core meaning — English:** A programming style centered on functions and data transformation while limiting mutable state.

**Core meaning & mental image — Tiếng Việt:** Xây chương trình như chuỗi máy biến đổi đầu vào, thay vì nhiều hộp cùng sửa một bảng trạng thái.

**Grammar & collocations:** `functional-programming language`, `functional-programming pattern`, `learn functional programming`.

**Register & nuance:** Functional programming có thể làm đồng thời và kiểm thử dễ hơn nhưng đòi hỏi cách nghĩ khác về trạng thái và I/O.

**Example:** `Functional programming made the data pipeline easier to reason about.` → Lập trình hàm khiến pipeline dữ liệu dễ suy luận hơn.

**Liên kết tiếng Hàn:** `함수형 프로그래밍` — lập trình hàm.

## 6. declarative programming /dɪˈklerətɪv ˈproʊˌɡræmɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — phong cách mô tả kết quả hoặc quy tắc cần đạt thay vì từng bước thực hiện.

**Core meaning — English:** A programming style that describes the desired result or rules rather than each execution step.

**Core meaning & mental image — Tiếng Việt:** Nói “phòng sạch và đủ ghế” thay vì chỉ dẫn từng động tác lau và xếp.

**Grammar & collocations:** `declarative-programming model`, `declarative configuration`, `write declaratively`.

**Register & nuance:** Declarative giúp tách mục tiêu khỏi cơ chế nhưng cần runtime hoặc engine hiểu cách đạt mục tiêu.

**Example:** `The deployment file used declarative programming to describe the desired state.` → Tệp triển khai dùng lập trình khai báo để mô tả trạng thái mong muốn.

**Liên kết tiếng Hàn:** `선언형 프로그래밍` — lập trình khai báo.

## 7. metaprogramming /ˈmetəˌproʊˌɡræmɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun` — kỹ thuật dùng chương trình để tạo, kiểm tra hoặc biến đổi chương trình khác.

**Core meaning — English:** Techniques in which programs generate, inspect, or transform other programs.

**Core meaning & mental image — Tiếng Việt:** Một máy viết hoặc chỉnh bản thiết kế chương trình thay vì chỉ chạy bản thiết kế đã có.

**Grammar & collocations:** `metaprogramming technique`, `compile-time metaprogramming`, `use metaprogramming`.

**Register & nuance:** Metaprogramming tăng khả năng tự động hóa nhưng làm mã khó đọc, gỡ lỗi và theo dõi hơn.

**Example:** `Metaprogramming generated repetitive accessors at build time.` → Lập trình siêu cấp tạo các accessor lặp lại lúc build.

**Liên kết tiếng Hàn:** `메타프로그래밍` — lập trình siêu cấp.

## 8. intermediate representation /ˌɪntərˈmiːdiət ˌreprɪzenˈteɪʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase` — dạng biểu diễn trung gian mà trình biên dịch dùng giữa mã nguồn và mã đích.

**Core meaning — English:** A compiler representation used between source code and target code.

**Core meaning & mental image — Tiếng Việt:** Một ngôn ngữ trung gian giúp nhiều ngôn ngữ nguồn đi qua cùng pipeline tối ưu.

**Grammar & collocations:** `intermediate-representation pass`, `IR transformation`, `lower to an intermediate representation`.

**Register & nuance:** IR là điểm nối cho phân tích và tối ưu, không nhất thiết là định dạng mà lập trình viên viết trực tiếp.

**Example:** `The compiler simplified the intermediate representation before code generation.` → Trình biên dịch đơn giản hóa biểu diễn trung gian trước sinh mã.

**Liên kết tiếng Hàn:** `중간 표현` — biểu diễn trung gian.

## 9. bytecode /ˈbaɪtˌkoʊd/

**Loại từ & vị trí trong câu:** `uncountable noun` — mã trung gian được thiết kế để máy ảo diễn giải hoặc biên dịch tiếp.

**Core meaning — English:** Intermediate code intended for interpretation or further compilation by a virtual machine.

**Core meaning & mental image — Tiếng Việt:** Một dạng mã chưa gắn với chip cụ thể, chờ máy ảo đọc hoặc dịch sang mã máy.

**Grammar & collocations:** `compile to bytecode`, `bytecode interpreter`, `bytecode format`.

**Register & nuance:** Bytecode dễ di chuyển giữa nền tảng nhưng cần runtime tương thích và có thể chịu chi phí diễn giải.

**Example:** `The language compiled source files into bytecode.` → Ngôn ngữ biên dịch tệp nguồn thành bytecode.

**Liên kết tiếng Hàn:** `바이트코드` — bytecode.

## 10. runtime system /ˈrʌnˌtaɪm ˈsɪstəm/

**Loại từ & vị trí trong câu:** `countable noun phrase` — phần mềm hỗ trợ chương trình khi chạy, gồm thư viện, bộ nhớ, luồng và xử lý lỗi.

**Core meaning — English:** Software support that operates a program, including libraries, memory, threads, and error handling.

**Core meaning & mental image — Tiếng Việt:** Đội hậu cần phía sau sân khấu giữ chương trình chạy sau khi mã đã được biên dịch.

**Grammar & collocations:** `language runtime system`, `runtime-system error`, `runtime support`.

**Register & nuance:** Runtime ảnh hưởng hiệu năng, tính di động và hành vi mà mã nguồn không thể tự giải thích hết.

**Example:** `The runtime system managed asynchronous tasks and memory.` → Hệ thống runtime quản lý tác vụ bất đồng bộ và bộ nhớ.

**Liên kết tiếng Hàn:** `런타임 시스템` — hệ thống runtime.

## 11. just-in-time compilation /ˌdʒʌst ɪn ˈtaɪm ˌkɑmpəˈleɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — việc biên dịch mã trong lúc chạy dựa trên đường thực thi và dữ liệu thực tế.

**Core meaning — English:** Compiling code during execution based on observed paths and runtime information.

**Core meaning & mental image — Tiếng Việt:** Máy chờ xem đoạn đường nào được đi nhiều rồi mới trải nhựa tối ưu cho đoạn đó.

**Grammar & collocations:** `just-in-time compiler`, `JIT compilation`, `JIT-compiled code`.

**Register & nuance:** JIT có thể tăng tốc mã nóng nhưng cần thời gian khởi động, bộ nhớ và cơ chế hoàn nguyên khi giả định sai.

**Example:** `Just-in-time compilation improved the hot loop after warm-up.` → Biên dịch đúng lúc cải thiện vòng lặp nóng sau giai đoạn khởi động.

**Liên kết tiếng Hàn:** `적시 컴파일` — biên dịch đúng lúc.

## 12. static typing /ˈstætɪk ˈtaɪpɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — hệ thống gán và kiểm tra kiểu trước khi chương trình chạy.

**Core meaning — English:** A type system that assigns and checks types before a program runs.

**Core meaning & mental image — Tiếng Việt:** Người kiểm tra vé xem loại vé hợp lệ trước khi đoàn tàu khởi hành.

**Grammar & collocations:** `static-typing discipline`, `statically typed language`, `static-type checker`.

**Register & nuance:** Static typing bắt nhiều lỗi sớm nhưng mức độ nghiêm ngặt và khả năng suy luận khác nhau giữa ngôn ngữ.

**Example:** `Static typing caught the mismatch during compilation.` → Kiểu tĩnh bắt lỗi không khớp lúc biên dịch.

**Liên kết tiếng Hàn:** `정적 타이핑` — định kiểu tĩnh.

## 13. dynamic typing /daɪˈnæmɪk ˈtaɪpɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — hệ thống xác định hoặc kiểm tra kiểu chủ yếu khi chương trình đang chạy.

**Core meaning — English:** A type system that determines or checks types mainly while a program runs.

**Core meaning & mental image — Tiếng Việt:** Nhãn kiểu được quyết định tại thời điểm vật đi qua cửa, không phải lúc vẽ kế hoạch.

**Grammar & collocations:** `dynamic-typing language`, `dynamically typed code`, `dynamic type check`.

**Register & nuance:** Dynamic typing linh hoạt và nhanh thử nghiệm nhưng chuyển một số lỗi kiểu sang runtime.

**Example:** `Dynamic typing made the prototype easy to change.` → Kiểu động khiến prototype dễ thay đổi.

**Liên kết tiếng Hàn:** `동적 타이핑` — định kiểu động.

## 14. language semantics /ˈlæŋɡwɪdʒ səˈmæntɪks/

**Loại từ & vị trí trong câu:** `plural noun phrase` — quy tắc xác định chương trình trong ngôn ngữ có ý nghĩa và hành vi nào.

**Core meaning — English:** The rules that determine what programs in a language mean and how they behave.

**Core meaning & mental image — Tiếng Việt:** Từ điển và luật giao thông của ngôn ngữ, nói câu lệnh thực sự làm gì chứ không chỉ trông ra sao.

**Grammar & collocations:** `language-semantics specification`, `formal semantics`, `define semantics`.

**Register & nuance:** Semantics khác syntax; hai chương trình có thể cùng cú pháp hợp lệ nhưng khác ý nghĩa.

**Example:** `The compiler team clarified the language semantics of evaluation order.` → Nhóm compiler làm rõ ngữ nghĩa ngôn ngữ về thứ tự đánh giá.

**Liên kết tiếng Hàn:** `언어 의미론` — ngữ nghĩa ngôn ngữ.

## 15. lexical scope /ˈleksɪkəl skoʊp/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — quy tắc xác định phạm vi biến dựa trên vị trí văn bản nơi biến được định nghĩa.

**Core meaning — English:** A rule that determines a variable’s visibility from where it is defined in the source text.

**Core meaning & mental image — Tiếng Việt:** Đèn chỉ sáng trong các phòng được bao bởi đường viền của đoạn mã, không theo nơi chương trình tình cờ chạy.

**Grammar & collocations:** `lexical-scope rule`, `lexically scoped language`, `scope resolution`.

**Register & nuance:** Lexical scope giúp đọc mã và suy luận quyền truy cập dễ hơn, nhưng lồng hàm sâu vẫn có thể phức tạp.

**Example:** `Lexical scope kept the helper variable private to the function.` → Phạm vi từ vựng giữ biến trợ giúp riêng trong hàm.

**Liên kết tiếng Hàn:** `어휘적 범위` — phạm vi từ vựng.

## Review in context

**Type inference**, **static typing**, and **dynamic typing** make different promises about errors. **Garbage collection** and **memory safety** shape the runtime, while a **concurrency model** affects how tasks interact. **Functional programming**, **declarative programming**, and **metaprogramming** express different styles. A compiler may use an **intermediate representation**, emit **bytecode**, and rely on a **runtime system** with **just-in-time compilation**. **Language semantics** and **lexical scope** determine what the code means.

**Suy luận kiểu**, **kiểu tĩnh** và **kiểu động** đưa ra những cam kết khác nhau về lỗi. **Thu gom rác** và **an toàn bộ nhớ** định hình runtime, còn **mô hình đồng thời** ảnh hưởng cách các tác vụ tương tác. **Lập trình hàm**, **lập trình khai báo** và **lập trình siêu cấp** thể hiện các phong cách khác nhau. Trình biên dịch có thể dùng **biểu diễn trung gian**, tạo **bytecode** và dựa vào **hệ thống runtime** với **biên dịch đúng lúc**. **Ngữ nghĩa ngôn ngữ** và **phạm vi từ vựng** quyết định mã có nghĩa gì.
