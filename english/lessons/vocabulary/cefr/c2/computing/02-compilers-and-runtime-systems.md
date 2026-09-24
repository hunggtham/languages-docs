# C2 Vocabulary — Compilers and runtime systems

This lesson follows source code through compiler representation and optimization, then into the runtime mechanisms that execute and adapt the program.

Flow: **lexical analysis → parser → abstract syntax tree → intermediate representation → control-flow graph → static single assignment → data-flow analysis → constant propagation → dead-code elimination → register allocation → instruction scheduling → calling convention → stack frame → dynamic dispatch → just-in-time compilation → inline caching → deoptimization → escape analysis → garbage collection → tail-call optimization**.

## 1. lexical analysis /ˈlɛksɪkəl əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** the compiler stage that converts a stream of source characters into meaningful tokens such as identifiers, keywords, literals, and operators.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích từ vựng của mã nguồn; hình dung compiler đọc chuỗi ký tự thô và cắt nó thành những “mảnh có nghĩa” như tên biến, từ khóa và toán tử trước khi hiểu cấu trúc câu lệnh.
**Grammar & collocations:** `lexical analyzer` — bộ phân tích từ vựng; `token stream` — luồng token; `perform lexical analysis` — thực hiện lexical analysis.
**Examples:** `Lexical analysis turns the characters in a source file into a token stream that the parser can consume.` → Lexical analysis biến các ký tự trong file nguồn thành luồng token để parser xử lý.
**Liên kết tiếng Hàn:** `어휘 분석` (eohwi bunseok), `렉싱` — phân tích từ vựng.

## 2. parser /ˈpɑrsər/
**Part of speech:** noun
**Core meaning (English):** a compiler component that checks how tokens fit a language's grammar and constructs a structural representation of the program.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ phân tích cú pháp; hình dung parser nhận các token rồi kiểm tra chúng có ghép thành cấu trúc hợp lệ theo grammar của ngôn ngữ hay không.
**Grammar & collocations:** `recursive-descent parser` — parser đệ quy đi xuống; `parser error` — lỗi phân tích cú pháp; `parse an expression` — phân tích một biểu thức.
**Examples:** `The parser rejected the expression because a closing parenthesis was missing.` → Parser từ chối biểu thức vì thiếu dấu ngoặc đóng.
**Liên kết tiếng Hàn:** `구문 분석기` (gumun bunseokgi), `파서` — parser.

## 3. abstract syntax tree /ˈæbstrækt ˈsɪnˌtæks triː/
**Part of speech:** noun
**Core meaning (English):** a tree-shaped representation of a program that preserves its meaningful syntactic structure while omitting unnecessary punctuation and surface details.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cây cú pháp trừu tượng; hình dung mã nguồn được chuyển thành cây trong đó node biểu diễn các cấu trúc như phép gọi hàm, phép cộng hoặc câu lệnh điều kiện thay vì giữ nguyên từng ký tự.
**Grammar & collocations:** `AST node` — node của AST; `build an abstract syntax tree` — xây AST; `traverse the AST` — duyệt cây cú pháp.
**Examples:** `The compiler traverses the abstract syntax tree to resolve names and check types.` → Compiler duyệt cây cú pháp trừu tượng để phân giải tên và kiểm tra kiểu.
**Liên kết tiếng Hàn:** `추상 구문 트리` (chusang gumun teuri), `AST` — cây cú pháp trừu tượng.

## 4. intermediate representation /ˌɪntərˈmiːdiət ˌrɛprɪzɛnˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** an internal program form used between source-language parsing and final machine-code generation so analysis and optimization can be performed systematically.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn trung gian; hình dung compiler dịch nhiều ngôn ngữ nguồn khác nhau về một “ngôn ngữ nội bộ” thuận tiện cho tối ưu rồi mới hạ xuống machine code.
**Grammar & collocations:** `compiler IR` — IR của compiler; `lower to an intermediate representation` — hạ xuống IR; `IR instruction` — lệnh trong IR.
**Examples:** `The front end lowered the program into an intermediate representation before architecture-specific optimization began.` → Front end hạ chương trình xuống biểu diễn trung gian trước khi tối ưu theo kiến trúc bắt đầu.
**Liên kết tiếng Hàn:** `중간 표현` (junggan pyohyeon), `IR` — biểu diễn trung gian.

## 5. control-flow graph /kənˈtroʊl floʊ ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph whose nodes represent blocks of instructions and whose edges represent possible transfers of execution between those blocks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồ thị luồng điều khiển; hình dung các block mã là điểm trên bản đồ, còn nhánh `if`, vòng lặp và `return` tạo những con đường mà execution có thể đi qua.
**Grammar & collocations:** `CFG edge` — cạnh của CFG; `basic block` — basic block; `construct a control-flow graph` — dựng đồ thị luồng điều khiển.
**Examples:** `The optimizer used the control-flow graph to identify a branch that could never be reached.` → Optimizer dùng control-flow graph để nhận ra một nhánh không bao giờ có thể được thực thi.
**Liên kết tiếng Hàn:** `제어 흐름 그래프` (jeeo heureum geuraepeu), `CFG` — đồ thị luồng điều khiển.

## 6. static single assignment /ˈstætɪk ˈsɪŋɡəl əˈsaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** an intermediate representation property in which each variable name is assigned exactly once, with new versions created for later values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dạng gán đơn tĩnh; hình dung mỗi lần một “biến” đổi giá trị, compiler tạo một phiên bản tên mới thay vì ghi đè, nhờ đó quan hệ dữ liệu trở nên rõ ràng hơn.
**Grammar & collocations:** `SSA form` — dạng SSA; `convert to static single assignment` — chuyển sang SSA; `phi function` — hàm phi dùng khi các luồng điều khiển hợp lại.
**Examples:** `Static single assignment makes it easier to see which definition can reach a particular use of a value.` → Dạng gán đơn tĩnh giúp nhìn rõ định nghĩa nào có thể cung cấp giá trị cho một điểm sử dụng cụ thể.
**Liên kết tiếng Hàn:** `정적 단일 할당` (jeongjeok danil haldang), `SSA` — dạng gán đơn tĩnh.

## 7. data-flow analysis /ˈdeɪtə floʊ əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** a family of compiler analyses that determine how information about values, definitions, or properties propagates through possible execution paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích luồng dữ liệu; hình dung compiler theo dấu thông tin đi qua các nhánh của chương trình để biết giá trị nào có thể tồn tại ở từng điểm.
**Grammar & collocations:** `forward data-flow analysis` — phân tích data-flow xuôi; `backward analysis` — phân tích ngược; `data-flow fact` — thông tin được truyền trong phân tích.
**Examples:** `Data-flow analysis showed that the variable was always initialized before the read operation.` → Data-flow analysis cho thấy biến luôn được khởi tạo trước thao tác đọc.
**Liên kết tiếng Hàn:** `데이터 흐름 분석` (deiteo heureum bunseok) — phân tích luồng dữ liệu.

## 8. constant propagation /ˈkɑnstənt ˌprɑpəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** an optimization that replaces uses of variables with known constant values when the compiler can prove those values cannot change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lan truyền hằng số; hình dung compiler biết `x` chắc chắn bằng `5` nên đưa trực tiếp `5` vào những chỗ dùng `x`, mở đường cho các tối ưu tiếp theo.
**Grammar & collocations:** `perform constant propagation` — thực hiện lan truyền hằng số; `constant-folding opportunity` — cơ hội gấp hằng; `known constant` — hằng số đã biết.
**Examples:** `Constant propagation reduced the condition to a fixed value, allowing the compiler to remove the unused branch.` → Constant propagation rút điều kiện về một giá trị cố định, cho phép compiler loại bỏ nhánh không dùng.
**Liên kết tiếng Hàn:** `상수 전파` (sangsu jeonpa) — lan truyền hằng số.

## 9. dead-code elimination /dɛd koʊd ɪˌlɪməˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** an optimization that removes instructions whose results cannot affect any observable program behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loại bỏ code chết; hình dung compiler xóa những phép tính vẫn tồn tại trong source nhưng kết quả của chúng không bao giờ được dùng hoặc quan sát.
**Grammar & collocations:** `dead-code-elimination pass` — lượt tối ưu xóa code chết; `eliminate dead stores` — loại bỏ lần ghi vô ích; `unreachable code` — code không thể tới được.
**Examples:** `Dead-code elimination removed the calculation after analysis proved that its result was never consumed.` → Dead-code elimination loại bỏ phép tính sau khi phân tích chứng minh kết quả của nó không bao giờ được sử dụng.
**Liên kết tiếng Hàn:** `죽은 코드 제거` (jugeun kodeu jegeo), `데드 코드 제거` — loại bỏ code chết.

## 10. register allocation /ˈrɛdʒɪstər ˌæləˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the compiler task of deciding which program values should occupy the limited hardware registers available on a processor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân bổ thanh ghi; hình dung compiler phải xếp rất nhiều giá trị tạm vào số ghế register ít ỏi, còn giá trị không đủ chỗ phải chuyển ra memory.
**Grammar & collocations:** `register allocator` — bộ phân bổ register; `register pressure` — áp lực thiếu register; `spill to memory` — đẩy giá trị ra memory.
**Examples:** `Poor register allocation caused frequent spills and increased memory traffic inside the loop.` → Phân bổ register kém làm phát sinh nhiều lần spill và tăng truy cập memory trong vòng lặp.
**Liên kết tiếng Hàn:** `레지스터 할당` (rejiseuteo haldang) — phân bổ register.

## 11. instruction scheduling /ɪnˈstrʌkʃən ˈskɛdʒuəlɪŋ/
**Part of speech:** noun
**Core meaning (English):** the reordering of machine instructions, while preserving program meaning, to use processor execution resources more efficiently and reduce stalls.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sắp lịch lệnh; hình dung compiler đổi thứ tự các lệnh độc lập để CPU luôn có việc làm trong lúc một lệnh khác đang chờ dữ liệu.
**Grammar & collocations:** `instruction scheduler` — bộ sắp lịch lệnh; `schedule around latency` — sắp lệnh để che độ trễ; `pipeline stall` — trạng thái pipeline bị chờ.
**Examples:** `Instruction scheduling moved an independent arithmetic operation between the load and its first dependent use.` → Instruction scheduling đưa một phép toán độc lập vào giữa lệnh load và lần đầu dùng dữ liệu phụ thuộc để che bớt độ trễ.
**Liên kết tiếng Hàn:** `명령어 스케줄링` (myeongnyeongeo seukejulling) — sắp lịch lệnh.

## 12. calling convention /ˈkɔlɪŋ kənˈvɛnʃən/
**Part of speech:** noun
**Core meaning (English):** an agreed set of low-level rules for how functions receive arguments, return values, preserve registers, and manage call-related machine state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy ước gọi hàm; hình dung caller và callee phải cùng “luật giao nhận” để biết argument nằm ở register nào, ai giữ register nào và kết quả được trả về ở đâu.
**Grammar & collocations:** `platform calling convention` — calling convention của nền tảng; `callee-saved register` — register do callee phải bảo toàn; `calling-convention mismatch` — không khớp quy ước gọi.
**Examples:** `The native function failed because the generated code used a different calling convention from the library interface.` → Hàm native thất bại vì code được sinh dùng calling convention khác với interface của thư viện.
**Liên kết tiếng Hàn:** `호출 규약` (hochul gyuyak) — quy ước gọi hàm.

## 13. stack frame /stæk freɪm/
**Part of speech:** noun
**Core meaning (English):** the region of a call stack associated with one active function invocation, holding information such as local storage, saved registers, and return state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khung stack của một lần gọi hàm; hình dung mỗi function call chiếm một tầng riêng trên call stack để giữ dữ liệu cần thiết cho tới khi function trả về.
**Grammar & collocations:** `allocate a stack frame` — cấp stack frame; `frame pointer` — con trỏ frame; `stack-frame layout` — bố cục stack frame.
**Examples:** `The debugger walked each stack frame to reconstruct the sequence of function calls leading to the crash.` → Debugger duyệt từng stack frame để dựng lại chuỗi gọi hàm dẫn tới crash.
**Liên kết tiếng Hàn:** `스택 프레임` (seutaek peureim) — stack frame.

## 14. dynamic dispatch /daɪˈnæmɪk dɪˈspætʃ/
**Part of speech:** noun
**Core meaning (English):** the runtime selection of which method implementation to call based on the actual type or state of an object rather than only compile-time information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều phối động; hình dung cùng một lời gọi method nhưng runtime phải nhìn object thật là loại nào rồi mới chọn implementation phù hợp.
**Grammar & collocations:** `dynamic method dispatch` — điều phối method động; `dispatch table` — bảng điều phối; `virtual call` — lời gọi virtual.
**Examples:** `Dynamic dispatch selected the subclass implementation even though the variable was declared with the base type.` → Dynamic dispatch chọn implementation của subclass dù biến được khai báo bằng base type.
**Liên kết tiếng Hàn:** `동적 디스패치` (dongjeok diseupaechi) — điều phối động.

## 15. just-in-time compilation /ˌdʒʌst ɪn ˈtaɪm ˌkɑmpəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** the compilation of program code into optimized machine code during execution, often using information collected from the running program.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biên dịch JIT; hình dung runtime quan sát chương trình đang chạy rồi biên dịch những đoạn quan trọng ngay lúc cần, tận dụng dữ liệu thực tế để tối ưu mạnh hơn.
**Grammar & collocations:** `JIT compiler` — compiler JIT; `JIT-compiled code` — code được biên dịch JIT; `runtime profile` — profile thu trong lúc chạy.
**Examples:** `Just-in-time compilation optimized the hot loop after the runtime observed its most common input types.` → JIT compilation tối ưu vòng lặp nóng sau khi runtime quan sát được các kiểu input thường gặp nhất.
**Liên kết tiếng Hàn:** `JIT 컴파일` (JIT keompail), `적시 컴파일` — biên dịch đúng lúc.

## 16. inline caching /ˈɪnˌlaɪn ˈkæʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** a runtime optimization that remembers types or method targets previously observed at a call or property-access site so repeated operations can bypass more expensive lookup.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cache ngay tại điểm gọi; hình dung runtime ghi nhớ “lần trước object kiểu này đã gọi method nào” ngay cạnh call site để lần sau đi đường tắt.
**Grammar & collocations:** `inline cache` — inline cache; `monomorphic call site` — call site thường chỉ thấy một type; `cache miss` — lần tra cứu không khớp cache.
**Examples:** `Inline caching made repeated property access faster because the same object shape appeared at that site almost every time.` → Inline caching làm truy cập property lặp lại nhanh hơn vì gần như lần nào call site đó cũng gặp cùng một object shape.
**Liên kết tiếng Hàn:** `인라인 캐싱` (illain kaesing) — inline caching.

## 17. deoptimization /diːˌɑptəməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of abandoning optimized code and returning execution to a more general representation when assumptions used by the optimizer become invalid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hủy tối ưu động; hình dung JIT đã chọn một đường cực nhanh dựa trên giả định, nhưng khi dữ liệu thật phá vỡ giả định đó runtime phải quay lại đường tổng quát an toàn hơn.
**Grammar & collocations:** `trigger deoptimization` — kích hoạt deoptimization; `deoptimization point` — điểm có thể quay lại code tổng quát; `speculative optimization` — tối ưu suy đoán.
**Examples:** `An unexpected object type triggered deoptimization because the compiled path assumed a single class.` → Một kiểu object bất ngờ kích hoạt deoptimization vì đường code đã compile giả định chỉ có một class.
**Liên kết tiếng Hàn:** `디옵티마이제이션` (dioptimaijeisyeon), `최적화 해제` — hủy tối ưu.

## 18. escape analysis /ɪˈskeɪp əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** an analysis that determines whether an allocated object can be observed outside the function, thread, or scope in which it is created.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích escape; hình dung compiler hỏi “object này có thoát ra ngoài nơi nó được tạo không?” để quyết định có thể cấp phát rẻ hơn hoặc loại bỏ allocation hay không.
**Grammar & collocations:** `perform escape analysis` — thực hiện escape analysis; `non-escaping object` — object không thoát scope; `allocation elimination` — loại bỏ cấp phát.
**Examples:** `Escape analysis proved that the temporary object never left the method, so the compiler eliminated its heap allocation.` → Escape analysis chứng minh object tạm không bao giờ rời method nên compiler loại bỏ việc cấp phát nó trên heap.
**Liên kết tiếng Hàn:** `이스케이프 분석` (iseukeipeu bunseok), `탈출 분석` — phân tích escape.

## 19. garbage collection /ˈɡɑrbɪdʒ kəˈlɛkʃən/
**Part of speech:** noun
**Core meaning (English):** automatic memory management that identifies objects no longer reachable by a program and reclaims their storage for reuse.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thu gom rác bộ nhớ; hình dung runtime định kỳ tìm những object mà chương trình không còn đường nào chạm tới rồi thu hồi vùng nhớ của chúng.
**Grammar & collocations:** `garbage collector` — bộ thu gom rác; `GC pause` — khoảng dừng do GC; `generational garbage collection` — GC theo thế hệ.
**Examples:** `The garbage collector reclaimed short-lived objects but introduced a brief pause in the latency-sensitive service.` → Garbage collector thu hồi các object sống ngắn nhưng gây một khoảng dừng ngắn trong dịch vụ nhạy cảm với latency.
**Liên kết tiếng Hàn:** `가비지 컬렉션` (gabiji keolleksyeon), `GC` — thu gom rác bộ nhớ.

## 20. tail-call optimization /teɪl kɔl ˌɑptəməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** an optimization that allows a function call in final return position to reuse the current call frame instead of adding another frame to the stack.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tối ưu tail call; hình dung function không còn việc gì phải làm sau lời gọi cuối nên runtime có thể tái sử dụng stack frame hiện tại thay vì xếp thêm một tầng mới.
**Grammar & collocations:** `tail-call optimization` — tối ưu tail call; `tail-recursive function` — hàm đệ quy đuôi; `eliminate stack growth` — loại bỏ tăng stack.
**Examples:** `Tail-call optimization lets some recursive algorithms run without growing the call stack on every iteration.` → Tail-call optimization cho phép một số thuật toán đệ quy chạy mà không làm call stack tăng sau mỗi vòng.
**Liên kết tiếng Hàn:** `꼬리 호출 최적화` (kkori hochul choejeokhwa), `TCO` — tối ưu tail call.

## Review in context

A compiler begins with **lexical analysis**, then a **parser** builds an **abstract syntax tree** that can be lowered into an **intermediate representation**. A **control-flow graph** exposes possible execution paths, while **static single assignment** and **data-flow analysis** make relationships between values easier to reason about. Optimization passes may perform **constant propagation** and **dead-code elimination** before **register allocation** and **instruction scheduling** prepare code for the processor. At function boundaries, the **calling convention** defines how each **stack frame** exchanges machine state. Managed or dynamic languages may rely on **dynamic dispatch** and **just-in-time compilation**; the runtime can speed common cases with **inline caching** but fall back through **deoptimization** if its assumptions stop being true. **Escape analysis** can remove unnecessary allocations, **garbage collection** reclaims unreachable objects, and **tail-call optimization** can prevent repeated tail calls from growing the stack.

**Bản dịch tiếng Việt:**

Compiler bắt đầu bằng lexical analysis, sau đó parser xây abstract syntax tree để có thể hạ xuống intermediate representation. Control-flow graph thể hiện các đường execution có thể xảy ra, còn static single assignment và data-flow analysis làm quan hệ giữa các giá trị dễ phân tích hơn. Các pass tối ưu có thể thực hiện constant propagation và dead-code elimination trước khi register allocation và instruction scheduling chuẩn bị code cho processor. Ở ranh giới function, calling convention quy định cách mỗi stack frame trao đổi trạng thái máy. Các ngôn ngữ managed hoặc dynamic có thể dựa vào dynamic dispatch và JIT compilation; runtime tăng tốc trường hợp phổ biến bằng inline caching nhưng có thể quay lại code tổng quát qua deoptimization nếu giả định không còn đúng. Escape analysis có thể loại bỏ allocation không cần thiết, garbage collection thu hồi object không còn reachable, còn tail-call optimization có thể ngăn các tail call lặp lại làm stack tăng liên tục.