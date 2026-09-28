# C2 Vocabulary — GPU architecture and parallel computing

This lesson follows massively parallel execution from the programming model through scheduling, memory behavior, accelerator units, and performance analysis.

Flow: **throughput computing → SIMT → warp → wavefront → thread block → streaming multiprocessor → occupancy → warp divergence → memory coalescing → shared memory → global memory → register pressure → kernel launch → asynchronous copy → CUDA stream → tensor core → parallel reduction → synchronization barrier → arithmetic intensity → roofline model**.

## 1. throughput computing /ˈθruːˌpʊt kəmˈpjuːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** a computing style optimized for completing a very large amount of parallel work over time rather than minimizing the latency of one individual task.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính toán ưu tiên tổng lượng công việc hoàn thành; hình dung hàng nghìn operation cùng chạy để tăng tổng throughput thay vì làm một operation đơn lẻ nhanh nhất.
**Grammar & collocations:** `throughput-oriented architecture` — kiến trúc ưu tiên throughput; `maximize throughput` — tối đa throughput.
**Examples:** `The accelerator favors throughput computing, so thousands of lightweight threads hide long memory delays.` → Accelerator ưu tiên throughput computing nên hàng nghìn thread nhẹ che được memory latency dài.
**Liên kết tiếng Hàn:** `처리량 중심 컴퓨팅`.

## 2. SIMT /ˌɛsˌaɪˌɛmˈtiː/
**Part of speech:** noun
**Core meaning (English):** single instruction, multiple threads; an execution model in which many threads follow one instruction stream while retaining their own registers and control state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều thread cùng đi theo một instruction nhưng mỗi thread vẫn có dữ liệu và state riêng.
**Grammar & collocations:** `SIMT execution` — thực thi SIMT; `SIMT model` — mô hình SIMT.
**Examples:** `SIMT execution is efficient when neighboring threads take the same control-flow path.` → SIMT hiệu quả khi các thread lân cận đi cùng control-flow path.
**Liên kết tiếng Hàn:** `SIMT`, `단일 명령 다중 스레드`.

## 3. warp /wɔrp/
**Part of speech:** noun
**Core meaning (English):** a fixed group of GPU threads scheduled and executed together as one SIMT unit on many GPU architectures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm thread cùng “bước” theo một instruction; nếu thread trong warp rẽ nhánh khác nhau thì hiệu suất giảm.
**Grammar & collocations:** `warp scheduler` — scheduler của warp; `active warp` — warp đang active.
**Examples:** `The branch split the warp into two execution paths that had to run serially.` → Branch tách warp thành hai path phải chạy lần lượt.
**Liên kết tiếng Hàn:** `워프`.

## 4. wavefront /ˈweɪvˌfrʌnt/
**Part of speech:** noun
**Core meaning (English):** a hardware execution group of threads processed together on GPU architectures that use wavefront terminology.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khái niệm tương tự warp trên một số GPU khác; một nhóm thread được schedule và execute cùng nhau.
**Grammar & collocations:** `wavefront size` — số thread trong wavefront; `active wavefront` — wavefront đang hoạt động.
**Examples:** `A larger wavefront can expose more parallelism but may amplify the cost of divergent branches.` → Wavefront lớn có thể tăng parallelism nhưng làm chi phí branch divergence rõ hơn.
**Liên kết tiếng Hàn:** `웨이브프런트`.

## 5. thread block /θrɛd blɑk/
**Part of speech:** noun
**Core meaning (English):** a programmer-defined group of GPU threads that can cooperate through fast local memory and synchronization primitives.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm thread cùng một block; chúng có thể chia shared memory và đồng bộ với nhau.
**Grammar & collocations:** `block dimension` — kích thước block; `launch a thread block` — launch block.
**Examples:** `Each thread block processed one tile of the matrix and reused data in shared memory.` → Mỗi thread block xử lý một tile của matrix và tái sử dụng data trong shared memory.
**Liên kết tiếng Hàn:** `스레드 블록`.

## 6. streaming multiprocessor /ˈstriːmɪŋ ˌmʌltiˈprɑsɛsər/
**Part of speech:** noun
**Core meaning (English):** a GPU execution unit containing arithmetic pipelines, registers, schedulers, and local resources used to run groups of threads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “cụm xử lý” bên trong GPU nơi warp/thread block thực sự được execute.
**Grammar & collocations:** `SM resources` — tài nguyên SM; `schedule onto an SM` — schedule lên SM.
**Examples:** `Several thread blocks can reside on one streaming multiprocessor if registers and shared memory are sufficient.` → Nhiều thread block có thể cùng resident trên một SM nếu đủ register và shared memory.
**Liên kết tiếng Hàn:** `스트리밍 멀티프로세서`, `SM`.

## 7. occupancy /ˈɑkjəpənsi/
**Part of speech:** noun
**Core meaning (English):** the proportion of a GPU execution unit's maximum resident warps or threads that are actually active at one time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức lấp đầy khả năng resident của SM; occupancy cao thường giúp che latency nhưng không tự động bảo đảm performance cao nhất.
**Grammar & collocations:** `high occupancy` — occupancy cao; `occupancy limit` — giới hạn occupancy.
**Examples:** `Register usage reduced occupancy because fewer warps could remain resident on each multiprocessor.` → Dùng quá nhiều register làm occupancy giảm vì ít warp có thể resident trên mỗi multiprocessor.
**Liên kết tiếng Hàn:** `점유율`, `GPU occupancy`.

## 8. warp divergence /wɔrp daɪˈvɝdʒəns/
**Part of speech:** noun
**Core meaning (English):** loss of parallel efficiency when threads within one warp follow different control-flow paths that must be executed separately.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thread cùng warp rẽ sang nhánh khác nhau; hardware phải chạy từng nhánh nên phần thread không thuộc nhánh đó tạm idle.
**Grammar & collocations:** `branch divergence` — divergence do branch; `avoid warp divergence` — tránh divergence.
**Examples:** `Data-dependent conditionals caused severe warp divergence in the kernel.` → Conditional phụ thuộc data gây warp divergence nghiêm trọng trong kernel.
**Liên kết tiếng Hàn:** `워프 분기`, `워프 다이버전스`.

## 9. memory coalescing /ˈmɛməri ˌkoʊəˈlɛsɪŋ/
**Part of speech:** noun
**Core meaning (English):** combining memory requests from neighboring GPU threads into fewer efficient transactions when their addresses follow suitable access patterns.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều thread đọc vùng memory gần nhau thì hardware gộp request thành ít transaction lớn hơn.
**Grammar & collocations:** `coalesced access` — access đã coalesce; `coalescing pattern` — pattern truy cập thuận lợi.
**Examples:** `Reordering the array layout improved memory coalescing and doubled effective bandwidth.` → Đổi layout array cải thiện memory coalescing và tăng gấp đôi effective bandwidth.
**Liên kết tiếng Hàn:** `메모리 코얼레싱`, `메모리 접근 병합`.

## 10. shared memory /ʃɛrd ˈmɛməri/
**Part of speech:** noun
**Core meaning (English):** fast programmer-managed on-chip memory shared by threads within the same thread block.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng memory nhanh ngay trên chip cho thread cùng block dùng chung, thường dùng để cache tile hoặc trao đổi data.
**Grammar & collocations:** `shared-memory tile` — tile trong shared memory; `shared-memory capacity` — dung lượng shared memory.
**Examples:** `The kernel loaded each matrix tile into shared memory before reusing it across many arithmetic operations.` → Kernel load mỗi matrix tile vào shared memory trước khi tái dùng qua nhiều operation.
**Liên kết tiếng Hàn:** `공유 메모리`.

## 11. global memory /ˈɡloʊbəl ˈmɛməri/
**Part of speech:** noun
**Core meaning (English):** large off-chip GPU memory accessible by many threads but generally much slower than on-chip storage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory lớn ngoài chip GPU; capacity cao nhưng latency lớn nên cần access pattern tốt và reuse data.
**Grammar & collocations:** `global-memory bandwidth` — bandwidth global memory; `global load` — load từ global memory.
**Examples:** `Repeated uncached reads from global memory became the kernel's dominant bottleneck.` → Các lần đọc không cache lặp lại từ global memory trở thành bottleneck chính.
**Liên kết tiếng Hàn:** `글로벌 메모리`, `전역 메모리`.

## 12. register pressure /ˈrɛdʒɪstər ˈprɛʃər/
**Part of speech:** noun
**Core meaning (English):** demand for more registers per thread than the hardware can provide comfortably, often reducing occupancy or causing spills to slower memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi thread cần quá nhiều register; hậu quả là ít thread resident hơn hoặc data bị spill ra memory chậm.
**Grammar & collocations:** `reduce register pressure` — giảm áp lực register; `register spill` — spill register.
**Examples:** `Inlining the large function increased register pressure enough to lower occupancy.` → Inline function lớn làm register pressure tăng đến mức occupancy giảm.
**Liên kết tiếng Hàn:** `레지스터 압박`.

## 13. kernel launch /ˈkɝnəl lɔntʃ/
**Part of speech:** noun
**Core meaning (English):** the act of submitting a GPU function together with its grid and block configuration for execution on the device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gửi một function song song sang GPU để chạy với cấu hình thread/grid cụ thể.
**Grammar & collocations:** `launch overhead` — overhead launch; `kernel-launch configuration` — cấu hình launch.
**Examples:** `Thousands of tiny kernel launches spent more time on dispatch overhead than on computation.` → Hàng nghìn kernel launch nhỏ tốn nhiều thời gian dispatch hơn computation.
**Liên kết tiếng Hàn:** `커널 실행`, `커널 런치`.

## 14. asynchronous copy /eɪˈsɪŋkrənəs ˈkɑpi/
**Part of speech:** noun
**Core meaning (English):** a data transfer initiated so computation can continue or overlap while the copy proceeds independently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** copy data nhưng không bắt computation đứng chờ; transfer và compute có thể overlap.
**Grammar & collocations:** `async copy` — asynchronous copy; `overlap copy and compute` — chồng transfer với compute.
**Examples:** `Asynchronous copies overlapped data transfer with the previous batch's computation.` → Asynchronous copy overlap transfer data với computation của batch trước.
**Liên kết tiếng Hàn:** `비동기 복사`.

## 15. CUDA stream /ˈkuːdə striːm/
**Part of speech:** noun
**Core meaning (English):** an ordered sequence of GPU operations that can execute independently from operations submitted to other streams when dependencies allow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một hàng lệnh có thứ tự riêng; nhiều stream có thể overlap nếu hardware và dependency cho phép.
**Grammar & collocations:** `default stream` — stream mặc định; `stream synchronization` — đồng bộ stream.
**Examples:** `Separate CUDA streams allowed transfers for one batch to overlap execution of another.` → Các CUDA stream riêng cho phép transfer batch này overlap execution batch khác.
**Liên kết tiếng Hàn:** `CUDA 스트림`.

## 16. tensor core /ˈtɛnsər kɔr/
**Part of speech:** noun
**Core meaning (English):** a specialized GPU arithmetic unit optimized for high-throughput matrix multiply-accumulate operations, often using reduced-precision formats.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** unit chuyên nhân-cộng matrix cực nhanh, đặc biệt hữu ích cho deep learning và dense linear algebra.
**Grammar & collocations:** `tensor-core acceleration` — tăng tốc bằng tensor core; `mixed precision` — mixed precision.
**Examples:** `Using tensor cores greatly increased matrix throughput while preserving acceptable numerical accuracy.` → Dùng tensor core tăng mạnh throughput matrix trong khi vẫn giữ accuracy đủ tốt.
**Liên kết tiếng Hàn:** `텐서 코어`.

## 17. parallel reduction /ˈpærəˌlɛl rɪˈdʌkʃən/
**Part of speech:** noun
**Core meaning (English):** a parallel algorithm that repeatedly combines many values into a smaller set until one aggregate result remains.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom nhiều value thành một result theo hình cây, ví dụ sum hàng triệu phần tử bằng nhiều thread.
**Grammar & collocations:** `tree reduction` — reduction dạng cây; `reduction kernel` — kernel reduction.
**Examples:** `The parallel reduction summed millions of values without forcing one thread to process the entire array.` → Parallel reduction cộng hàng triệu value mà không bắt một thread xử lý cả array.
**Liên kết tiếng Hàn:** `병렬 리덕션`, `병렬 축약`.

## 18. synchronization barrier /ˌsɪŋkrənəˈzeɪʃən ˈbæriər/
**Part of speech:** noun
**Core meaning (English):** a coordination point where participating threads must all arrive before any of them may continue beyond that point.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “cổng chờ” trong parallel code; thread đến sớm phải đợi thread còn lại trước khi đi tiếp.
**Grammar & collocations:** `barrier synchronization` — đồng bộ bằng barrier; `reach a barrier` — tới barrier.
**Examples:** `A synchronization barrier ensured that every thread finished loading the tile before computation began.` → Barrier bảo đảm mọi thread load xong tile trước khi computation bắt đầu.
**Liên kết tiếng Hàn:** `동기화 장벽`.

## 19. arithmetic intensity /ˌærɪθˈmɛtɪk ɪnˈtɛnsəti/
**Part of speech:** noun
**Core meaning (English):** the amount of arithmetic work performed per unit of data moved between memory and a processor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số computation kiếm được từ mỗi byte data; intensity cao nghĩa là data được reuse nhiều trước khi phải đọc thêm memory.
**Grammar & collocations:** `high arithmetic intensity` — intensity cao; `FLOPs per byte` — phép tính trên mỗi byte.
**Examples:** `Tiling increased arithmetic intensity by reusing each loaded matrix element many times.` → Tiling tăng arithmetic intensity bằng cách tái dùng mỗi matrix element đã load nhiều lần.
**Liên kết tiếng Hàn:** `연산 집약도`.

## 20. roofline model /ˈruːfˌlaɪn ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a performance model that relates arithmetic intensity to peak compute throughput and memory bandwidth to identify likely bottlenecks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu đồ “mái nhà” cho biết workload đang bị chặn bởi compute hay bandwidth dựa trên arithmetic intensity.
**Grammar & collocations:** `roofline analysis` — phân tích roofline; `memory-bound region` — vùng bị giới hạn bởi memory.
**Examples:** `The roofline model showed that optimization should target memory traffic rather than additional arithmetic units.` → Roofline model cho thấy nên tối ưu memory traffic thay vì thêm arithmetic unit.
**Liên kết tiếng Hàn:** `루프라인 모델`.

## Review in context

Modern accelerators emphasize **throughput computing** and commonly use **SIMT** execution, where threads run in a **warp** or, on some architectures, a **wavefront**. Programmers organize work into a **thread block**, which is scheduled onto a **streaming multiprocessor**. Performance depends partly on **occupancy**, while **warp divergence** can serialize control paths. Efficient **memory coalescing** improves access to **global memory**, and frequently reused data can move into **shared memory**. Excessive **register pressure** may reduce resident parallelism. Each **kernel launch** submits work to the device, while **asynchronous copy** and multiple **CUDA streams** can overlap transfer and execution. Specialized **tensor cores** accelerate matrix arithmetic. Common algorithms use **parallel reduction** and a **synchronization barrier** for cooperation. Finally, **arithmetic intensity** and the **roofline model** help determine whether a kernel is limited by computation or memory bandwidth.

**Bản dịch tiếng Việt:** Accelerator hiện đại ưu tiên **throughput computing** và thường dùng execution **SIMT**, nơi thread chạy theo **warp** hoặc trên một số architecture là **wavefront**. Programmer tổ chức work thành **thread block**, được schedule lên **streaming multiprocessor**. Performance phụ thuộc một phần vào **occupancy**, trong khi **warp divergence** có thể biến các control path thành chạy tuần tự. **Memory coalescing** tốt cải thiện access vào **global memory**, còn data dùng lại nhiều có thể đưa vào **shared memory**. **Register pressure** quá cao có thể giảm lượng parallel work resident. Mỗi **kernel launch** gửi work sang device, trong khi **asynchronous copy** và nhiều **CUDA stream** có thể overlap transfer với execution. **Tensor core** chuyên dụng tăng tốc matrix arithmetic. Các algorithm phổ biến dùng **parallel reduction** và **synchronization barrier** để phối hợp. Cuối cùng, **arithmetic intensity** và **roofline model** giúp xác định kernel bị giới hạn bởi compute hay memory bandwidth.