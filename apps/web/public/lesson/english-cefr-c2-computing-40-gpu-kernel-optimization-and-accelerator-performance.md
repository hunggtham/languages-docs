# C2 Vocabulary — GPU kernel optimization and accelerator performance

This lesson follows an accelerator kernel from workload characterization through memory behavior, scheduling, and measured throughput.

Flow: **roofline model → arithmetic intensity → occupancy → warp divergence → memory coalescing → shared-memory bank conflict → register spilling → kernel fusion → tiling → loop unrolling → tensor-core utilization → mixed-precision accumulation → launch overhead → stream concurrency → asynchronous copy → persistent kernel → cooperative group → occupancy calculator → throughput ceiling → performance counter**.

## 1. roofline model /ˈruːflaɪn ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a performance model that relates attainable computation to arithmetic intensity and memory-bandwidth or compute ceilings.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình cho biết kernel bị giới hạn bởi compute hay bandwidth.
**Grammar & collocations:** `roofline-model plot` — plot; `classify a kernel as memory-bound` — phân loại.
**Examples:** `The roofline model showed that adding arithmetic would not help a bandwidth-bound kernel.` → Roofline cho thấy thêm phép tính không giúp kernel bị giới hạn bandwidth.
**Liên kết tiếng Hàn:** `루프라인 모델`.

## 2. arithmetic intensity /əˈrɪθmətɪk ɪnˈtɛnsəti/
**Part of speech:** noun
**Core meaning (English):** the amount of computation performed per unit of data moved between memory levels.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bao nhiêu phép tính trên mỗi byte dữ liệu di chuyển.
**Grammar & collocations:** `arithmetic-intensity ratio` — ratio; `increase reuse per byte` — tăng reuse.
**Examples:** `Tiling increased arithmetic intensity by reusing each input tile across several output operations.` → Tiling tăng intensity nhờ tái sử dụng tile.
**Liên kết tiếng Hàn:** `산술 집약도`.

## 3. occupancy /ˌɑkjəˈpænsi/
**Part of speech:** noun
**Core meaning (English):** the proportion of a GPU's available execution resources occupied by active warps or thread blocks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức độ tài nguyên GPU được lấp đầy bởi block đang chạy.
**Grammar & collocations:** `occupancy limit` — limit; `maximize active warps` — tối đa hóa.
**Examples:** `Occupancy fell when each thread required too many registers.` → Occupancy giảm khi mỗi thread cần quá nhiều register.
**Liên kết tiếng Hàn:** `점유율`.

## 4. warp divergence /wɔrp daɪˈvɝdʒəns/
**Part of speech:** noun
**Core meaning (English):** serialized execution caused when threads in one SIMD-like warp take different control-flow paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thread trong cùng warp rẽ nhánh khác nhau nên phải chạy tuần tự.
**Grammar & collocations:** `warp-divergence penalty` — penalty; `reconverge branch paths` — hội tụ.
**Examples:** `Warp divergence doubled the instruction path for pixels near the object boundary.` → Divergence làm path instruction tăng gấp đôi.
**Liên kết tiếng Hàn:** `워프 분기`.

## 5. memory coalescing /ˈmɛməri koʊəˈlɛsɪŋ/
**Part of speech:** noun
**Core meaning (English):** combining neighboring thread memory requests into efficient transactions aligned with the memory system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom request liền kề thành transaction bộ nhớ hiệu quả.
**Grammar & collocations:** `memory-coalescing pattern` — pattern; `coalesce global loads` — gom.
**Examples:** `Memory coalescing improved bandwidth after the kernel changed from strided to contiguous loads.` → Coalescing tăng bandwidth sau đổi load.
**Liên kết tiếng Hàn:** `메모리 병합`.

## 6. shared-memory bank conflict /ʃɛrd ˈmɛməri bæŋk ˈkɑnflɪkt/
**Part of speech:** noun
**Core meaning (English):** a serialization event caused when threads access different addresses mapped to the same shared-memory bank.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều thread đụng cùng bank shared memory nên request bị tuần tự.
**Grammar & collocations:** `shared-memory-bank-conflict rate` — rate; `pad a tile` — đệm.
**Examples:** `A shared-memory bank conflict disappeared after one padding column was added to the tile.` → Conflict biến mất sau thêm cột padding.
**Liên kết tiếng Hàn:** `공유 메모리 뱅크 충돌`.

## 7. register spilling /ˈrɛdʒɪstər ˈspɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** moving register values to slower local or stack memory because a thread's register demand exceeds available allocation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiếu register nên value tràn xuống memory chậm.
**Grammar & collocations:** `register-spilling threshold` — threshold; `reduce per-thread state` — giảm.
**Examples:** `Register spilling erased the speedup from the more aggressive unrolling strategy.` → Spilling xóa lợi ích unrolling.
**Liên kết tiếng Hàn:** `레지스터 스필링`.

## 8. kernel fusion /ˈkɝnəl ˈfjuːʒən/
**Part of speech:** noun
**Core meaning (English):** combining multiple GPU kernels so intermediate data can remain on-chip and launch overhead is reduced.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp nhiều kernel để giữ data trên chip và giảm lần launch.
**Grammar & collocations:** `kernel-fusion pass` — pass; `fuse adjacent operators` — gộp.
**Examples:** `Kernel fusion kept the activation in registers instead of writing it to global memory.` → Fusion giữ activation trong register.
**Liên kết tiếng Hàn:** `커널 융합`.

## 9. tiling /ˈtaɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** dividing a large computation into blocks that fit in a faster memory level and can be reused by a thread group.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia computation thành tile vừa cache/shared memory.
**Grammar & collocations:** `tiling strategy` — strategy; `load a matrix tile` — nạp.
**Examples:** `Tiling reduced global-memory traffic in the matrix multiplication kernel.` → Tiling giảm traffic global memory.
**Liên kết tiếng Hàn:** `타일링`.

## 10. loop unrolling /luːp ʌnˈroʊlɪŋ/
**Part of speech:** noun
**Core meaning (English):** replicating loop-body operations to reduce branch and index overhead and expose instruction-level parallelism.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mở vòng lặp để giảm branch và tăng instruction song song.
**Grammar & collocations:** `loop-unrolling factor` — factor; `unroll a fixed trip count` — mở.
**Examples:** `Loop unrolling improved instruction throughput until register pressure became limiting.` → Unrolling tăng throughput tới khi thiếu register.
**Liên kết tiếng Hàn:** `루프 언롤링`.

## 11. tensor-core utilization /ˈtɛnsər kɔr ˌjuːtələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the fraction of available matrix-math accelerator capacity actually used by a workload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tensor core có được dùng đủ công suất hay không.
**Grammar & collocations:** `tensor-core-utilization metric` — metric; `saturate matrix units` — làm đầy.
**Examples:** `Tensor-core utilization stayed low because the matrix dimensions did not match the preferred tile shape.` → Utilization thấp vì kích thước matrix lệch tile.
**Liên kết tiếng Hàn:** `텐서 코어 활용률`.

## 12. mixed-precision accumulation /mɪkst prɪˈsɪʒən əˌkjuːmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** performing part of a computation in lower precision while accumulating results in a wider format to retain numerical quality.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính nhanh bằng precision thấp nhưng cộng dồn bằng format rộng hơn.
**Grammar & collocations:** `mixed-precision-accumulation mode` — mode; `accumulate in FP32` — cộng dồn.
**Examples:** `Mixed-precision accumulation preserved model accuracy while lowering tensor-operation cost.` → Accumulation hỗn hợp giữ accuracy và giảm cost.
**Liên kết tiếng Hàn:** `혼합 정밀도 누적`.

## 13. launch overhead /lɔntʃ ˈoʊvərˌhɛd/
**Part of speech:** noun
**Core meaning (English):** fixed time and coordination cost incurred each time a GPU kernel is dispatched.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chi phí cố định mỗi lần gọi kernel.
**Grammar & collocations:** `kernel-launch overhead` — overhead; `amortize dispatch cost` — phân bổ.
**Examples:** `Launch overhead dominated the runtime of the many tiny elementwise kernels.` → Overhead chi phối khi có nhiều kernel nhỏ.
**Liên kết tiếng Hàn:** `런치 오버헤드`.

## 14. stream concurrency /striːm kənˈkɝənsi/
**Part of speech:** noun
**Core meaning (English):** overlapping execution or transfers from independent GPU streams when resources and dependencies permit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stream độc lập chạy/chuyển data chồng lên nhau.
**Grammar & collocations:** `stream-concurrency limit` — limit; `overlap copy and compute` — chồng.
**Examples:** `Stream concurrency overlapped host-to-device copies with computation on a separate batch.` → Concurrency chồng copy với compute.
**Liên kết tiếng Hàn:** `스트림 동시성`.

## 15. asynchronous copy /eɪˈsɪŋkrənəs ˈkɑpi/
**Part of speech:** noun
**Core meaning (English):** a nonblocking transfer that moves data between memory levels while computation can continue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** copy không chặn, vừa nạp data vừa tính.
**Grammar & collocations:** `asynchronous-copy pipeline` — pipeline; `prefetch the next tile` — prefetch.
**Examples:** `An asynchronous copy prefetched the next tile while the current tile was being multiplied.` → Async copy nạp tile kế tiếp trong lúc tính tile hiện tại.
**Liên kết tiếng Hàn:** `비동기 복사`.

## 16. persistent kernel /pərˈsɪstənt ˈkɝnəl/
**Part of speech:** noun
**Core meaning (English):** a long-lived kernel that remains resident and pulls multiple work items instead of being relaunched for each item.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kernel sống lâu, tự lấy nhiều work để giảm launch.
**Grammar & collocations:** `persistent-kernel scheduler` — scheduler; `keep a block resident` — giữ.
**Examples:** `The persistent kernel reduced dispatch overhead for a stream of small irregular tasks.` → Kernel persistent giảm overhead cho task nhỏ.
**Liên kết tiếng Hàn:** `영속 커널`.

## 17. cooperative group /koʊˈɑpərətɪv ɡruːp/
**Part of speech:** noun
**Core meaning (English):** a programmer-defined group of GPU threads that can synchronize and communicate at a specified scope.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm thread có scope đồng bộ và giao tiếp rõ.
**Grammar & collocations:** `cooperative-group barrier` — barrier; `synchronize a tile group` — đồng bộ.
**Examples:** `The cooperative group synchronized producers and consumers within one persistent kernel.` → Group đồng bộ producer/consumer trong kernel persistent.
**Liên kết tiếng Hàn:** `협력 그룹`.

## 18. occupancy calculator /ˌɑkjəˈpænsi ˈkælkjəˌleɪtər/
**Part of speech:** noun
**Core meaning (English):** a tool that predicts active blocks or warps from registers, shared memory, block size, and hardware limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công cụ tính occupancy theo register, shared memory và block.
**Grammar & collocations:** `occupancy-calculator estimate` — estimate; `evaluate a block configuration` — đánh giá.
**Examples:** `The occupancy calculator favored fewer threads per block because shared memory was the bottleneck.` → Calculator chọn ít thread hơn vì shared memory nghẽn.
**Liên kết tiếng Hàn:** `점유율 계산기`.

## 19. throughput ceiling /ˈθruːˌpʊt ˈsiːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** the maximum sustainable processing rate imposed by a dominant compute, memory, or interconnect limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trần throughput do bottleneck chính áp đặt.
**Grammar & collocations:** `throughput-ceiling estimate` — estimate; `approach the hardware ceiling` — tiến tới.
**Examples:** `The kernel approached its throughput ceiling once tensor units and memory pipelines were both saturated.` → Kernel gần chạm trần khi tensor và memory cùng đầy.
**Liên kết tiếng Hàn:** `처리량 상한`.

## 20. performance counter /pərˈfɔrməns ˈkaʊntər/
**Part of speech:** noun
**Core meaning (English):** a hardware or software measurement that records events such as cache misses, instructions, occupancy, or memory transactions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ đếm đo event phần cứng để biết kernel thật sự làm gì.
**Grammar & collocations:** `performance-counter sample` — sample; `read hardware counters` — đọc.
**Examples:** `Performance counters confirmed that memory stalls, not arithmetic throughput, limited the kernel.` → Counter xác nhận stall memory mới là giới hạn.
**Liên kết tiếng Hàn:** `성능 카운터`.

## Review in context

The **roofline model** relates **arithmetic intensity** to a kernel's attainable rate. **Occupancy**, **warp divergence**, **memory coalescing**, **shared-memory bank conflict**, and **register spilling** shape execution efficiency. **Kernel fusion**, **tiling**, and **loop unrolling** can improve reuse, while **tensor-core utilization** and **mixed-precision accumulation** affect accelerator throughput. **Launch overhead**, **stream concurrency**, and **asynchronous copy** govern dispatch and overlap; a **persistent kernel** may coordinate work through a **cooperative group**. An **occupancy calculator**, **throughput ceiling**, and **performance counter** connect the model to measured behavior.

**Bản dịch tiếng Việt:** **Roofline model** nối **arithmetic intensity** với tốc độ kernel có thể đạt. **Occupancy**, **warp divergence**, **memory coalescing**, **shared-memory bank conflict** và **register spilling** quyết định hiệu quả. **Kernel fusion**, **tiling** và **loop unrolling** cải thiện reuse, còn **tensor-core utilization** và **mixed-precision accumulation** ảnh hưởng throughput. **Launch overhead**, **stream concurrency** và **asynchronous copy** chi phối dispatch và overlap; **persistent kernel** có thể điều phối qua **cooperative group**. **Occupancy calculator**, **throughput ceiling** và **performance counter** nối mô hình với hành vi đo được.
