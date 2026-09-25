# C2 Vocabulary — CPU microarchitecture and speculative execution

This lesson follows a modern CPU core from instruction fetch and decoding through dynamic scheduling, speculation, retirement, cache behavior, and address translation.

Flow: **CPU microarchitecture → instruction pipeline → instruction-level parallelism → superscalar execution → out-of-order execution → register renaming → reorder buffer → reservation station → branch predictor → branch target buffer → speculative execution → misprediction penalty → micro-op → decode width → issue width → retirement → cache hierarchy → hardware prefetcher → translation lookaside buffer → page walk**.

## 1. CPU microarchitecture /ˌsiːpiːˈjuː ˌmaɪkroʊˈɑrkəˌtɛktʃər/
**Part of speech:** noun
**Core meaning (English):** the internal organization used by a processor to implement an instruction set, including pipelines, execution units, caches, predictors, and scheduling structures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cách CPU được xây bên trong để thực thi cùng một instruction set; hình dung ISA là “luật bên ngoài”, còn microarchitecture là máy móc thực tế đứng sau luật đó.
**Grammar & collocations:** `processor microarchitecture` — microarchitecture của processor; `microarchitectural feature` — đặc điểm vi kiến trúc.
**Examples:** `Two processors can implement the same instruction set with very different CPU microarchitectures.` → Hai processor có thể dùng cùng instruction set nhưng có microarchitecture rất khác nhau.
**Liên kết tiếng Hàn:** `CPU 마이크로아키텍처`, `미세구조`.

## 2. instruction pipeline /ɪnˈstrʌkʃən ˈpaɪpˌlaɪn/
**Part of speech:** noun
**Core meaning (English):** a staged processing path that lets different instructions occupy different execution stages at the same time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dây chuyền lệnh; fetch, decode, execute và các bước khác chồng lên nhau để CPU không phải hoàn thành xong một lệnh mới bắt đầu lệnh tiếp theo.
**Grammar & collocations:** `deep pipeline` — pipeline sâu; `pipeline stage` — một stage; `pipeline flush` — xóa pipeline.
**Examples:** `A deeper instruction pipeline can support high clock rates but increases the cost of recovering from a wrong branch.` → Pipeline sâu có thể hỗ trợ clock cao nhưng tăng chi phí khi branch đoán sai.
**Liên kết tiếng Hàn:** `명령어 파이프라인`.

## 3. instruction-level parallelism /ɪnˈstrʌkʃən ˈlɛvəl ˈpærəˌlɛlɪzəm/
**Part of speech:** noun
**Core meaning (English):** the ability to execute independent instructions from one program simultaneously or in overlapping hardware stages.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parallelism ngay bên trong một thread; CPU tìm các instruction không phụ thuộc nhau để làm cùng lúc.
**Grammar & collocations:** `exploit instruction-level parallelism` — khai thác ILP; `ILP limit` — giới hạn ILP.
**Examples:** `Independent arithmetic operations exposed enough instruction-level parallelism to keep several execution units busy.` → Các phép toán độc lập tạo đủ ILP để nhiều execution unit cùng bận.
**Liên kết tiếng Hàn:** `명령어 수준 병렬성`, `ILP`.

## 4. superscalar execution /ˌsuːpərˈskeɪlər ˌɛksɪˈkjuːʃən/
**Part of speech:** noun
**Core meaning (English):** execution in which a processor can dispatch or execute multiple instructions during one clock cycle when dependencies permit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi cycle có thể làm nhiều instruction thay vì chỉ một; điều này đòi hỏi nhiều execution unit và logic scheduling phức tạp.
**Grammar & collocations:** `superscalar core` — CPU core superscalar; `multiple-issue design` — thiết kế issue nhiều lệnh.
**Examples:** `Superscalar execution allowed the core to complete several independent operations in the same cycle.` → Superscalar execution cho core hoàn thành nhiều operation độc lập trong cùng cycle.
**Liên kết tiếng Hàn:** `슈퍼스칼라 실행`.

## 5. out-of-order execution /aʊt əv ˈɔrdər ˌɛksɪˈkjuːʃən/
**Part of speech:** noun
**Core meaning (English):** a processor technique that executes ready instructions before older stalled instructions while preserving the program's visible architectural behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lệnh sau có thể chạy trước lệnh trước nếu đã sẵn sàng; bên ngoài chương trình vẫn phải thấy kết quả đúng như thứ tự logic.
**Grammar & collocations:** `out-of-order core` — core OoO; `dynamic scheduling` — scheduling động.
**Examples:** `Out-of-order execution let independent arithmetic continue while an older load waited for memory.` → OoO execution cho phép phép toán độc lập tiếp tục khi load cũ đang chờ memory.
**Liên kết tiếng Hàn:** `비순차 실행`.

## 6. register renaming /ˈrɛdʒɪstər ˈriːˌneɪmɪŋ/
**Part of speech:** noun
**Core meaning (English):** mapping architectural register names to a larger set of physical registers so false name dependencies do not block parallel execution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cùng tên register trong code không nhất thiết dùng cùng physical register; rename giúp tách các giá trị độc lập ra.
**Grammar & collocations:** `physical register file` — file physical register; `rename stage` — stage renaming.
**Examples:** `Register renaming removed a false write-after-write dependency between the instructions.` → Register renaming loại dependency giả kiểu write-after-write.
**Liên kết tiếng Hàn:** `레지스터 리네이밍`.

## 7. reorder buffer /riːˈɔrdər ˈbʌfər/
**Part of speech:** noun
**Core meaning (English):** a hardware structure that tracks in-flight instructions and allows completed results to become architecturally visible in program order.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảng theo dõi instruction đang bay; chúng có thể execute lộn thứ tự nhưng phải commit theo thứ tự để giữ state chính xác.
**Grammar & collocations:** `ROB entry` — entry trong reorder buffer; `retire from the ROB` — retire khỏi ROB.
**Examples:** `The reorder buffer held completed instructions until all older operations were safe to retire.` → Reorder buffer giữ instruction đã xong cho tới khi các operation cũ hơn có thể retire an toàn.
**Liên kết tiếng Hàn:** `리오더 버퍼`, `ROB`.

## 8. reservation station /ˌrɛzərˈveɪʃən ˈsteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a hardware queue that holds instructions until their operands and required execution resources are ready.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phòng chờ của instruction; lệnh đứng đó cho đến khi input đủ và execution unit rảnh.
**Grammar & collocations:** `reservation-station entry` — entry trong reservation station; `operand readiness` — trạng thái operand sẵn sàng.
**Examples:** `The multiply remained in a reservation station until its source operands arrived.` → Lệnh multiply ở reservation station cho tới khi source operand sẵn sàng.
**Liên kết tiếng Hàn:** `예약 스테이션`.

## 9. branch predictor /bræntʃ prɪˈdɪktər/
**Part of speech:** noun
**Core meaning (English):** processor hardware that predicts the direction or outcome of control-flow branches before the actual result is known.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** CPU đoán nhánh `if` sẽ đi đâu để không phải đứng chờ; đoán đúng giữ pipeline chạy, đoán sai phải quay lại.
**Grammar & collocations:** `branch-prediction accuracy` — accuracy của predictor; `conditional branch predictor` — predictor cho branch có điều kiện.
**Examples:** `A highly accurate branch predictor kept the front end supplied with useful instructions.` → Branch predictor chính xác giúp front end liên tục nhận instruction hữu ích.
**Liên kết tiếng Hàn:** `분기 예측기`.

## 10. branch target buffer /bræntʃ ˈtɑrɡət ˈbʌfər/
**Part of speech:** noun
**Core meaning (English):** a cache-like structure that predicts the target address of previously observed branches so instruction fetching can continue quickly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cache địa chỉ đích của branch; không chỉ đoán “taken” mà còn phải biết jump tới đâu.
**Grammar & collocations:** `BTB hit` — hit trong BTB; `target prediction` — dự đoán target.
**Examples:** `A branch target buffer hit let the fetch unit redirect immediately to the predicted destination.` → BTB hit cho fetch unit chuyển ngay tới target được dự đoán.
**Liên kết tiếng Hàn:** `분기 대상 버퍼`, `BTB`.

## 11. speculative execution /ˈspɛkjələtɪv ˌɛksɪˈkjuːʃən/
**Part of speech:** noun
**Core meaning (English):** executing instructions before it is certain they belong to the correct control or dependency path, with incorrect work discarded later.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** CPU làm trước theo một giả định; nếu prediction đúng thì tiết kiệm thời gian, nếu sai thì bỏ kết quả và phục hồi.
**Grammar & collocations:** `speculative path` — path suy đoán; `execute speculatively` — execute theo speculation.
**Examples:** `Speculative execution began before the branch condition had been fully resolved.` → Speculative execution bắt đầu trước khi branch condition được resolve hoàn toàn.
**Liên kết tiếng Hàn:** `추측 실행`.

## 12. misprediction penalty /ˌmɪsprɪˈdɪkʃən ˈpɛnəlti/
**Part of speech:** noun
**Core meaning (English):** the performance cost paid when a branch prediction is wrong and incorrectly fetched or executed work must be discarded.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cái giá của đoán branch sai; pipeline phải flush và fetch lại đúng path.
**Grammar & collocations:** `branch-misprediction penalty` — penalty do branch; `reduce the penalty` — giảm penalty.
**Examples:** `A long pipeline made the misprediction penalty especially expensive.` → Pipeline dài làm misprediction penalty đặc biệt lớn.
**Liên kết tiếng Hàn:** `분기 예측 실패 비용`.

## 13. micro-op /ˈmaɪkroʊ ɑp/
**Part of speech:** noun
**Core meaning (English):** an internal low-level operation into which a processor may decode a more complex architectural instruction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** instruction lớn bên ngoài có thể được bẻ thành các operation nhỏ hơn để hardware schedule và execute.
**Grammar & collocations:** `decoded micro-op` — micro-op đã decode; `micro-op cache` — cache micro-op.
**Examples:** `The complex instruction decoded into several micro-ops that used different execution units.` → Instruction phức tạp được decode thành nhiều micro-op dùng execution unit khác nhau.
**Liên kết tiếng Hàn:** `마이크로옵`, `마이크로 연산`.

## 14. decode width /diːˈkoʊd wɪdθ/
**Part of speech:** noun
**Core meaning (English):** the maximum number of instructions or internal operations a processor front end can decode during one cycle.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** front end rộng bao nhiêu; nếu decode width là 4 thì lý tưởng có thể decode tối đa khoảng 4 instruction mỗi cycle.
**Grammar & collocations:** `four-wide decode` — decode 4-wide; `front-end width` — độ rộng front end.
**Examples:** `The workload hit a front-end bottleneck because its instruction stream could not fully use the core's decode width.` → Workload bị bottleneck front end vì instruction stream không tận dụng được decode width.
**Liên kết tiếng Hàn:** `디코드 폭`.

## 15. issue width /ˈɪʃuː wɪdθ/
**Part of speech:** noun
**Core meaning (English):** the maximum number of ready operations a processor can send to execution units in one cycle.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số operation tối đa có thể “phát” sang execution unit mỗi cycle.
**Grammar & collocations:** `wide-issue core` — core issue rộng; `issue bandwidth` — bandwidth issue.
**Examples:** `High instruction-level parallelism mattered only when enough ready operations existed to fill the issue width.` → ILP cao chỉ hữu ích khi có đủ operation ready để lấp issue width.
**Liên kết tiếng Hàn:** `이슈 폭`.

## 16. retirement /rɪˈtaɪərmənt/
**Part of speech:** noun
**Core meaning (English):** the stage at which completed instructions commit their results to architectural state in the correct program order.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** instruction chính thức “được công nhận” là đã hoàn thành; trước đó nó có thể đã execute nhưng vẫn còn speculative.
**Grammar & collocations:** `instruction retirement` — retirement instruction; `retire in order` — retire theo thứ tự.
**Examples:** `An exception prevented younger instructions from reaching retirement even though some had already executed.` → Exception ngăn instruction trẻ hơn retire dù một số đã execute xong.
**Liên kết tiếng Hàn:** `명령어 은퇴`, `리타이어`.

## 17. cache hierarchy /kæʃ ˈhaɪəˌrɑrki/
**Part of speech:** noun
**Core meaning (English):** multiple cache levels arranged by speed, size, and proximity to the processor core, commonly including L1, L2, and last-level cache.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều tầng cache từ nhỏ-rất nhanh tới lớn-chậm hơn trước khi phải ra main memory.
**Grammar & collocations:** `multilevel cache hierarchy` — hierarchy nhiều cấp; `last-level cache` — cache cấp cuối.
**Examples:** `The working set fit in the last-level cache but exceeded the private L2 cache.` → Working set vừa last-level cache nhưng vượt L2 riêng của core.
**Liên kết tiếng Hàn:** `캐시 계층 구조`.

## 18. hardware prefetcher /ˈhɑrdˌwɛr ˈpriːˌfɛtʃər/
**Part of speech:** noun
**Core meaning (English):** processor logic that predicts future memory accesses and fetches data into caches before instructions explicitly request it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** CPU đoán data sắp cần rồi kéo vào cache trước để che memory latency.
**Grammar & collocations:** `prefetch stream` — luồng prefetch; `prefetch accuracy` — độ chính xác prefetch.
**Examples:** `The hardware prefetcher recognized the sequential access pattern and brought later cache lines in early.` → Hardware prefetcher nhận ra pattern tuần tự và kéo cache line sau vào sớm.
**Liên kết tiếng Hàn:** `하드웨어 프리페처`.

## 19. translation lookaside buffer /trænzˈleɪʃən ˈlʊkəˌsaɪd ˈbʌfər/
**Part of speech:** noun
**Core meaning (English):** a small cache that stores recent virtual-to-physical address translations so most memory accesses avoid a full page-table lookup.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cache cho address translation; nếu TLB hit thì CPU không phải đi đọc nhiều cấp page table.
**Grammar & collocations:** `TLB miss` — miss TLB; `TLB entry` — entry TLB; `translation cache` — cache translation.
**Examples:** `Random access across a huge address space caused frequent translation lookaside buffer misses.` → Random access trên address space lớn gây nhiều TLB miss.
**Liên kết tiếng Hàn:** `변환 색인 버퍼`, `TLB`.

## 20. page walk /peɪdʒ wɔk/
**Part of speech:** noun
**Core meaning (English):** the process of traversing one or more levels of page-table entries to translate a virtual address after a TLB miss.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khi TLB không có answer, hardware phải “đi qua” page table nhiều cấp để tìm physical address.
**Grammar & collocations:** `hardware page walk` — page walk bằng hardware; `page-walk latency` — latency của page walk.
**Examples:** `Large pages reduced page-walk overhead by covering more memory with each translation entry.` → Large page giảm overhead page walk vì mỗi translation entry bao phủ nhiều memory hơn.
**Liên kết tiếng Hàn:** `페이지 워크`, `페이지 테이블 탐색`.

## Review in context

A modern **CPU microarchitecture** uses an **instruction pipeline** to overlap work and tries to expose **instruction-level parallelism** through **superscalar execution** and **out-of-order execution**. **Register renaming** removes false dependencies, while the **reorder buffer** and each **reservation station** track operations until they can execute and later commit safely. A **branch predictor** and **branch target buffer** keep instruction fetch moving, enabling **speculative execution** but also creating a **misprediction penalty** when the guess is wrong. Complex instructions may decode into a **micro-op**, and front-end throughput depends on **decode width** while back-end dispatch depends on **issue width**. Correct architectural state becomes visible at **retirement**. Performance also depends heavily on the **cache hierarchy**, an effective **hardware prefetcher**, and fast address translation through the **translation lookaside buffer**; when that cache misses, a **page walk** must recover the mapping.

**Bản dịch tiếng Việt:** Một **CPU microarchitecture** hiện đại dùng **instruction pipeline** để chồng các giai đoạn công việc và cố gắng khai thác **instruction-level parallelism** thông qua **superscalar execution** và **out-of-order execution**. **Register renaming** loại dependency giả, còn **reorder buffer** và từng **reservation station** theo dõi operation cho tới khi chúng có thể execute rồi commit an toàn. **Branch predictor** và **branch target buffer** giúp fetch không bị dừng, cho phép **speculative execution**, nhưng khi đoán sai sẽ phát sinh **misprediction penalty**. Instruction phức tạp có thể được decode thành **micro-op**; throughput front end phụ thuộc **decode width**, còn back end phụ thuộc **issue width**. State chính thức chỉ xuất hiện ở **retirement**. Performance còn phụ thuộc mạnh vào **cache hierarchy**, **hardware prefetcher** hiệu quả và address translation nhanh qua **translation lookaside buffer**; khi TLB miss, CPU phải thực hiện **page walk** để tìm mapping.