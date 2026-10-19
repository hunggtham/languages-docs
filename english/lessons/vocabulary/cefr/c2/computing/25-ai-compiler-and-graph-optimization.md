# C2 Vocabulary — AI compiler and graph optimization

This lesson follows a machine-learning graph from high-level operators through lowering, fusion, memory planning, and backend code generation.

Flow: **computational graph → operator fusion → kernel fusion → graph lowering → shape inference → static shape → dynamic shape → constant folding → redundant-operator elimination → quantization calibration → operator decomposition → kernel autotuning → memory planner → layout transform → graph partitioning → backend compiler → schedule primitive → tensor layout → fusion profitability → compiler pass pipeline**.

## 1. computational graph /ˌkɑmpjəˈteɪʃənəl ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph whose nodes represent tensor operations and whose edges represent data dependencies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sơ đồ node là operation, edge là tensor truyền giữa các operation.
**Grammar & collocations:** `computational-graph optimizer` — optimizer; `traverse the graph` — duyệt graph.
**Examples:** `The compiler inspected the computational graph before choosing a device for each operation.` → Compiler xem graph trước khi chọn device cho từng operation.
**Liên kết tiếng Hàn:** `계산 그래프`.

## 2. operator fusion /ˈɑpəˌreɪtər ˈfjuːʒən/
**Part of speech:** noun
**Core meaning (English):** combining adjacent tensor operations so they can execute as a larger optimized unit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghép các operation liền nhau để giảm intermediate và lần gọi kernel.
**Grammar & collocations:** `operator-fusion rule` — rule; `fuse adjacent operators` — ghép.
**Examples:** `Operator fusion removed a materialization between normalization and activation.` → Fusion loại bỏ việc materialize giữa normalization và activation.
**Liên kết tiếng Hàn:** `연산자 융합`.

## 3. kernel fusion /ˈkɝnəl ˈfjuːʒən/
**Part of speech:** noun
**Core meaning (English):** combining multiple device kernels into one launch so intermediate data can remain in fast local memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghép nhiều kernel thành một launch, giảm overhead và đọc/ghi trung gian.
**Grammar & collocations:** `kernel-fusion candidate` — candidate; `fuse kernels` — ghép kernel.
**Examples:** `Kernel fusion cut global-memory traffic in the attention pre-processing step.` → Fusion giảm traffic global memory ở bước tiền xử lý attention.
**Liên kết tiếng Hàn:** `커널 융합`.

## 4. graph lowering /ɡræf ˈloʊərɪŋ/
**Part of speech:** noun
**Core meaning (English):** translating a high-level model graph into progressively more concrete operations understood by a target backend.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hạ graph từ API model xuống operation/backend cụ thể.
**Grammar & collocations:** `graph-lowering pass` — pass; `lower an operator` — hạ operator.
**Examples:** `Graph lowering converted the portable convolution into instructions supported by the accelerator.` → Lowering đổi convolution portable thành instruction accelerator hỗ trợ.
**Liên kết tiếng Hàn:** `그래프 하강`.

## 5. shape inference /ʃeɪp ˈɪnfərəns/
**Part of speech:** noun
**Core meaning (English):** determining tensor dimensions from operation definitions and known input shapes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** compiler suy ra kích thước tensor trước khi chạy.
**Grammar & collocations:** `shape-inference rule` — rule; `infer output dimensions` — suy ra.
**Examples:** `Shape inference detected that the reshape could not preserve the element count.` → Inference phát hiện reshape không giữ được số phần tử.
**Liên kết tiếng Hàn:** `형상 추론`.

## 6. static shape /ˈstætɪk ʃeɪp/
**Part of speech:** noun
**Core meaning (English):** a tensor dimension known at compile time and unchanged for a compiled execution path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** shape cố định, compiler biết trước để tối ưu mạnh hơn.
**Grammar & collocations:** `static-shape specialization` — specialization; `require a static shape` — yêu cầu.
**Examples:** `A static shape let the compiler allocate the activation buffer once.` → Static shape cho phép compiler cấp buffer activation một lần.
**Liên kết tiếng Hàn:** `정적 형상`.

## 7. dynamic shape /daɪˈnæmɪk ʃeɪp/
**Part of speech:** noun
**Core meaning (English):** a tensor dimension that can vary between executions and must be handled at runtime or through specialization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** shape thay đổi theo input, cần code path linh hoạt hoặc nhiều specialization.
**Grammar & collocations:** `dynamic-shape guard` — guard; `support variable sequence lengths` — hỗ trợ.
**Examples:** `Dynamic shape support allowed the server to accept requests with different sequence lengths.` → Dynamic shape cho server nhận sequence dài ngắn khác nhau.
**Liên kết tiếng Hàn:** `동적 형상`.

## 8. constant folding /ˈkɑnstənt ˈfoʊldɪŋ/
**Part of speech:** noun
**Core meaning (English):** evaluating an expression at compile time when its inputs are known constants.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính trước giá trị hằng để runtime khỏi làm lại.
**Grammar & collocations:** `constant-folding pass` — pass; `fold a constant expression` — fold.
**Examples:** `Constant folding removed the unused scale calculation from every inference request.` → Folding loại phép tính scale không đổi khỏi mỗi request.
**Liên kết tiếng Hàn:** `상수 접기`.

## 9. redundant-operator elimination /rɪˈdʌndənt ˈɑpəˌreɪtər ɪˌlɪməˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** removing an operation whose result is duplicated, unused, or already available from an equivalent computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ operation thừa không tạo thêm giá trị.
**Grammar & collocations:** `redundant-operator-elimination pass` — pass; `remove duplicate computation` — loại bỏ.
**Examples:** `Redundant-operator elimination removed a second cast inserted by the import converter.` → Elimination bỏ cast thứ hai do converter chèn.
**Liên kết tiếng Hàn:** `중복 연산자 제거`.

## 10. quantization calibration /ˌkwɑntəˈzeɪʃən ˌkæləˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** measuring representative activations or weights to choose ranges and scales for reduced-precision quantization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng sample đại diện để chọn scale/range trước khi đổi precision.
**Grammar & collocations:** `quantization-calibration set` — tập dữ liệu; `calibrate activation ranges` — calibrate.
**Examples:** `Quantization calibration used held-out images to estimate safe activation ranges.` → Calibration dùng ảnh hold-out để ước lượng range activation an toàn.
**Liên kết tiếng Hàn:** `양자화 보정`.

## 11. operator decomposition /ˈɑpəˌreɪtər ˌdiːkɑmpəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** rewriting one high-level operation as a sequence of simpler operations supported by a backend.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách operator lớn thành các primitive nhỏ mà backend hiểu được.
**Grammar & collocations:** `operator-decomposition rule` — rule; `decompose an unsupported op` — phân rã.
**Examples:** `Operator decomposition expressed the custom layer with standard matrix and reshape operations.` → Decomposition biểu diễn layer riêng bằng matrix và reshape chuẩn.
**Liên kết tiếng Hàn:** `연산자 분해`.

## 12. kernel autotuning /ˈkɝnəl ˌɔtoʊˈtuːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** trying multiple kernel configurations automatically and selecting one based on measured performance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thử nhiều block/tile/config rồi đo để chọn kernel nhanh nhất.
**Grammar & collocations:** `kernel-autotuning search space` — không gian; `autotune a kernel` — autotune.
**Examples:** `Kernel autotuning selected a tile size that matched the accelerator's memory hierarchy.` → Autotuning chọn tile size hợp với memory hierarchy.
**Liên kết tiếng Hàn:** `커널 자동 튜닝`.

## 13. memory planner /ˈmɛməri ˈplænər/
**Part of speech:** noun
**Core meaning (English):** a compiler component that schedules allocation and reuse of buffers across a graph execution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** planner quyết định buffer nào sống bao lâu và có thể reuse vùng nhớ nào.
**Grammar & collocations:** `memory-planner analysis` — phân tích; `reuse a buffer` — reuse.
**Examples:** `The memory planner reused the encoder buffer after its last consumer finished.` → Planner reuse buffer encoder sau consumer cuối.
**Liên kết tiếng Hàn:** `메모리 계획기`.

## 14. layout transform /ˈleɪˌaʊt trænsˈfɔrm/
**Part of speech:** noun
**Core meaning (English):** changing the arrangement of tensor dimensions in memory to match an operation or device preference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi thứ tự dimension/stride để access pattern hiệu quả hơn.
**Grammar & collocations:** `layout-transform cost` — chi phí; `insert a layout transform` — chèn.
**Examples:** `The compiler avoided a layout transform by keeping the convolution output in channel-major order.` → Compiler tránh transform bằng cách giữ output channel-major.
**Liên kết tiếng Hàn:** `레이아웃 변환`.

## 15. graph partitioning /ɡræf pɑrˈtɪʃənɪŋ/
**Part of speech:** noun
**Core meaning (English):** dividing a computation graph into regions assigned to different devices, runtimes, or execution strategies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia graph thành vùng CPU/GPU/NPU hoặc backend khác nhau.
**Grammar & collocations:** `graph-partitioning heuristic` — heuristic; `partition the graph` — chia graph.
**Examples:** `Graph partitioning kept latency-sensitive preprocessing on the CPU and heavy matrix work on the GPU.` → Partitioning giữ preprocessing nhạy latency trên CPU và matrix nặng trên GPU.
**Liên kết tiếng Hàn:** `그래프 분할`.

## 16. backend compiler /ˈbækˌɛnd kəmˈpaɪlər/
**Part of speech:** noun
**Core meaning (English):** the compiler stage that turns lowered operations into code for a particular processor or runtime.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** compiler cuối hiểu instruction và resource của target cụ thể.
**Grammar & collocations:** `backend-compiler target` — target; `invoke the backend compiler` — gọi.
**Examples:** `The backend compiler mapped the fused operation to a tensor-core instruction sequence.` → Backend compiler map operation fused vào sequence tensor-core.
**Liên kết tiếng Hàn:** `백엔드 컴파일러`.

## 17. schedule primitive /ˈskɛdʒuːl ˈprɪmətɪv/
**Part of speech:** noun
**Core meaning (English):** a low-level directive describing tiling, ordering, parallelism, or memory movement for a computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** primitive trong schedule nói loop tile thế nào, parallel ra sao, move memory ở đâu.
**Grammar & collocations:** `schedule-primitive library` — thư viện; `compose schedule primitives` — ghép.
**Examples:** `The autotuner combined schedule primitives for tiling and vectorized loading.` → Autotuner ghép primitive cho tiling và load vector.
**Liên kết tiếng Hàn:** `스케줄 원시 연산`.

## 18. tensor layout /ˈtɛnsər ˈleɪˌaʊt/
**Part of speech:** noun
**Core meaning (English):** the mapping between tensor indices and their physical arrangement in memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy tắc index tensor nằm ở địa chỉ memory nào.
**Grammar & collocations:** `tensor-layout descriptor` — descriptor; `preserve a layout` — giữ layout.
**Examples:** `The tensor layout determined whether neighboring threads could load contiguous values.` → Layout quyết định thread kề nhau có load được giá trị liền nhau không.
**Liên kết tiếng Hàn:** `텐서 레이아웃`.

## 19. fusion profitability /ˈfjuːʒən ˌprɑfɪtəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** an estimate of whether combining operations will improve total performance after considering code size, registers, and memory effects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không phải fusion nào cũng tốt; compiler cân nhắc lợi ích và chi phí.
**Grammar & collocations:** `fusion-profitability heuristic` — heuristic; `estimate fusion benefit` — ước lượng.
**Examples:** `Fusion profitability was negative because the combined kernel would exhaust registers.` → Profitability âm vì kernel ghép sẽ cạn register.
**Liên kết tiếng Hàn:** `융합 수익성`.

## 20. compiler pass pipeline /kəmˈpaɪlər pæs ˈpaɪpˌlaɪn/
**Part of speech:** noun
**Core meaning (English):** an ordered sequence of compiler transformations applied to an intermediate graph or program representation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi pass theo thứ tự, pass sau dùng kết quả pass trước.
**Grammar & collocations:** `compiler-pass-pipeline configuration` — cấu hình; `run a pass pipeline` — chạy.
**Examples:** `The compiler pass pipeline lowered shapes before scheduling fusion and memory reuse.` → Pipeline pass hạ shape trước khi schedule fusion và reuse memory.
**Liên kết tiếng Hàn:** `컴파일러 패스 파이프라인`.

## Review in context

A **computational graph** can benefit from **operator fusion** and **kernel fusion** after **graph lowering**. **Shape inference** distinguishes a **static shape** from a **dynamic shape**, while **constant folding** and **redundant-operator elimination** remove avoidable work. **Quantization calibration** chooses safe ranges, and **operator decomposition** rewrites unsupported operations. **Kernel autotuning** explores configurations; a **memory planner** manages buffers, and a **layout transform** changes tensor storage. **Graph partitioning** assigns regions to devices, after which a **backend compiler** uses **schedule primitives** and a chosen **tensor layout**. The compiler estimates **fusion profitability** across its **compiler pass pipeline** before emitting target code.

**Bản dịch tiếng Việt:** **Computational graph** có thể được tối ưu bằng **operator fusion** và **kernel fusion** sau **graph lowering**. **Shape inference** phân biệt **static shape** với **dynamic shape**, còn **constant folding** và **redundant-operator elimination** loại công việc thừa. **Quantization calibration** chọn range an toàn, còn **operator decomposition** viết lại operation backend chưa hỗ trợ. **Kernel autotuning** thử nhiều cấu hình; **memory planner** quản lý buffer, và **layout transform** đổi cách lưu tensor. **Graph partitioning** gán từng vùng cho device, sau đó **backend compiler** dùng **schedule primitive** và **tensor layout** đã chọn. Compiler ước lượng **fusion profitability** trong **compiler pass pipeline** trước khi sinh code target.
