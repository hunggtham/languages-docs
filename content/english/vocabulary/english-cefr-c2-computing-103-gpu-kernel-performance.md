# C2 Vocabulary — GPU kernel performance

This lesson follows a GPU kernel from memory movement and launch behavior through synchronization, occupancy, and accelerator utilization.

Flow: **shared memory bank → coalesced memory access → register tiling → kernel launch overhead → stream multiprocessor → tensor core instruction → memory fence → atomic contention → device synchronization → host-device transfer → unified memory migration → page-locked memory → command buffer → asynchronous execution → double buffering → workgroup size → barrier synchronization → cache line residency → instruction latency hiding → occupancy limiter**.

## 1. shared memory bank /ʃerd ˈmeməri bæŋk/
**Part of speech:** noun
**Core meaning (English):** an independently accessible subdivision of fast on-chip memory used by nearby GPU threads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân vùng memory on-chip nhanh cho thread GPU truy cập.
**Grammar & collocations:** `shared-memory-bank conflict` — conflict; `stripe a tile across banks` — rải.
**Examples:** `The shared memory bank conflict serialized accesses from neighboring threads.` → Conflict làm access tuần tự.
**Liên kết tiếng Hàn:** `공유 메모리 뱅크`.

## 2. coalesced memory access /koʊəˈlest ˈmeməri ˈækses/
**Part of speech:** noun
**Core meaning (English):** a memory pattern in which nearby threads combine their reads or writes into efficient transactions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thread gần nhau gộp read/write thành transaction hiệu quả.
**Grammar & collocations:** `coalesced-memory-access pattern` — pattern; `align a global load` — căn.
**Examples:** `Coalesced memory access raised bandwidth when threads read adjacent pixels.` → Access tăng bandwidth.
**Liên kết tiếng Hàn:** `병합 메모리 접근`.

## 3. register tiling /ˈredʒɪstər ˈtaɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** keeping small matrix tiles in per-thread registers to reuse values during computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ tile matrix nhỏ trong register để tái dùng.
**Grammar & collocations:** `register-tiling strategy` — strategy; `reuse a partial product` — tái dùng.
**Examples:** `Register tiling reduced repeated loads in the matrix multiplication kernel.` → Tiling giảm load lặp.
**Liên kết tiếng Hàn:** `레지스터 타일링`.

## 4. kernel launch overhead /ˈkɜːrnəl lɔːntʃ ˈoʊvərhed/
**Part of speech:** noun
**Core meaning (English):** the fixed cost of dispatching a GPU kernel before its useful work begins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cost cố định khi dispatch kernel trước compute hữu ích.
**Grammar & collocations:** `kernel-launch-overhead measurement` — measurement; `fuse small kernels` — gộp.
**Examples:** `Kernel launch overhead dominated the workload because each operation was tiny.` → Overhead chiếm workload.
**Liên kết tiếng Hàn:** `커널 실행 오버헤드`.

## 5. stream multiprocessor /striːm ˌmʌltɪˈprɒsesər/
**Part of speech:** noun
**Core meaning (English):** a GPU execution unit that schedules thread blocks and contains arithmetic, register, and shared-memory resources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đơn vị GPU schedule block và chứa compute/register/shared memory.
**Grammar & collocations:** `stream-multiprocessor occupancy` — occupancy; `schedule a resident block` — schedule.
**Examples:** `The stream multiprocessor could not admit another block after registers were exhausted.` → SM hết register.
**Liên kết tiếng Hàn:** `스트리밍 멀티프로세서`.

## 6. tensor core instruction /ˈtensər kɔːr ɪnˈstrʌkʃən/
**Part of speech:** noun
**Core meaning (English):** a specialized accelerator instruction for high-throughput matrix or tensor arithmetic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** instruction accelerator cho matrix/tensor throughput cao.
**Grammar & collocations:** `tensor-core-instruction shape` — shape; `multiply a mixed-precision tile` — nhân.
**Examples:** `The tensor core instruction accelerated the mixed-precision convolution.` → Instruction tăng tốc convolution.
**Liên kết tiếng Hàn:** `텐서 코어 명령어`.

## 7. memory fence /ˈmeməri fens/
**Part of speech:** noun
**Core meaning (English):** an ordering operation that makes selected memory writes visible before later operations proceed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operation bảo đảm write memory thấy được trước bước sau.
**Grammar & collocations:** `memory-fence instruction` — instruction; `order a device write` — sắp thứ tự.
**Examples:** `The memory fence made the flag visible before another block read it.` → Fence làm flag visible.
**Liên kết tiếng Hàn:** `메모리 펜스`.

## 8. atomic contention /əˈtɒmɪk kənˈtenʃən/
**Part of speech:** noun
**Core meaning (English):** competition among threads trying to update the same memory location atomically.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thread tranh nhau update cùng memory location atomic.
**Grammar & collocations:** `atomic-contention hotspot` — hotspot; `serialize an increment` — tuần tự hóa.
**Examples:** `Atomic contention made the global counter slower than a per-block reduction.` → Contention làm counter chậm.
**Liên kết tiếng Hàn:** `원자적 경합`.

## 9. device synchronization /dɪˈvaɪs ˌsɪŋkrənaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** waiting until previously submitted device operations have reached a defined completion point.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chờ operation device trước tới mốc hoàn tất.
**Grammar & collocations:** `device-synchronization barrier` — barrier; `wait for a stream` — chờ.
**Examples:** `Device synchronization exposed the true runtime after asynchronous launches were issued.` → Sync lộ runtime thật.
**Liên kết tiếng Hàn:** `장치 동기화`.

## 10. host-device transfer /hoʊst dɪˈvaɪs ˈtrænsfər/
**Part of speech:** noun
**Core meaning (English):** copying data between host memory and accelerator memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** copy data giữa memory host và accelerator.
**Grammar & collocations:** `host-device-transfer bandwidth` — bandwidth; `stage a tensor` — chuẩn bị.
**Examples:** `Host-device transfer consumed more time than the GPU computation itself.` → Transfer tốn hơn compute.
**Liên kết tiếng Hàn:** `호스트-장치 전송`.

## 11. unified memory migration /ˈjuːnɪfaɪd ˈmeməri maɪˈɡreɪʃən/
**Part of speech:** noun
**Core meaning (English):** moving managed memory pages between host and device as access location changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển page memory managed theo nơi access.
**Grammar & collocations:** `unified-memory-migration fault` — fault; `prefetch a page` — prefetch.
**Examples:** `Unified memory migration caused page faults when the kernel touched host-resident data.` → Migration gây page fault.
**Liên kết tiếng Hàn:** `통합 메모리 마이그레이션`.

## 12. page-locked memory /peɪdʒ lɒkt ˈmeməri/
**Part of speech:** noun
**Core meaning (English):** host memory that cannot be paged out and can therefore support efficient device transfers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory host không bị page out, transfer device nhanh.
**Grammar & collocations:** `page-locked-memory buffer` — buffer; `pin a transfer region` — pin.
**Examples:** `Page-locked memory improved throughput for repeated host-device copies.` → Memory pin tăng throughput.
**Liên kết tiếng Hàn:** `페이지 잠금 메모리`.

## 13. command buffer /kəˈmænd ˈbʌfər/
**Part of speech:** noun
**Core meaning (English):** an encoded sequence of device commands submitted for later execution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi command mã hóa gửi device chạy sau.
**Grammar & collocations:** `command-buffer recording` — recording; `submit a recorded graph` — gửi.
**Examples:** `The command buffer captured the repeated preprocessing and kernel dispatches.` → Buffer ghi lại dispatch lặp.
**Liên kết tiếng Hàn:** `명령 버퍼`.

## 14. asynchronous execution /eɪˈsɪŋkrənəs ˌeksɪˈkjuːʃən/
**Part of speech:** noun
**Core meaning (English):** launching device work without blocking the host until an explicit synchronization is requested.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** launch device mà host không block tới khi sync.
**Grammar & collocations:** `asynchronous-execution stream` — stream; `overlap transfer and compute` — chồng.
**Examples:** `Asynchronous execution overlapped data transfer with the previous kernel's computation.` → Execution chồng transfer và compute.
**Liên kết tiếng Hàn:** `비동기 실행`.

## 15. double buffering /ˈdʌbəl ˈbʌfərɪŋ/
**Part of speech:** noun
**Core meaning (English):** alternating between two buffers so one can be processed while the other is filled or transferred.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng hai buffer luân phiên để xử lý và nạp song song.
**Grammar & collocations:** `double-buffering pipeline` — pipeline; `swap a ready buffer` — đổi.
**Examples:** `Double buffering kept the accelerator busy while the next batch arrived.` → Buffer kép giữ accelerator bận.
**Liên kết tiếng Hàn:** `이중 버퍼링`.

## 16. workgroup size /ˈwɜːrkɡruːp saɪz/
**Part of speech:** noun
**Core meaning (English):** the number of cooperating threads launched as one local group for a kernel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số thread phối hợp trong một group local.
**Grammar & collocations:** `workgroup-size selection` — selection; `tile a problem across threads` — chia.
**Examples:** `The workgroup size matched the shared-memory tile and avoided idle lanes.` → Size khớp tile.
**Liên kết tiếng Hàn:** `워크그룹 크기`.

## 17. barrier synchronization /ˈbæriər ˌsɪŋkrənaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** requiring threads in a group to reach a point before any may continue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thread phải tới barrier trước khi tiếp tục.
**Grammar & collocations:** `barrier-synchronization hazard` — hazard; `wait for peer writes` — chờ.
**Examples:** `Barrier synchronization made every thread observe the completed tile before multiplication.` → Barrier bảo đảm tile xong.
**Liên kết tiếng Hàn:** `장벽 동기화`.

## 18. cache line residency /kæʃ laɪn ˈrezɪdənsi/
**Part of speech:** noun
**Core meaning (English):** how long or how reliably data remains in a cache line available to later operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức data ở lại cache line để operation sau dùng.
**Grammar & collocations:** `cache-line-residency profile` — profile; `retain a hot tile` — giữ.
**Examples:** `Cache line residency improved after the kernel reused a contiguous tile.` → Residency tăng nhờ tile liền.
**Liên kết tiếng Hàn:** `캐시 라인 상주`.

## 19. instruction latency hiding /ɪnˈstrʌkʃən ˈleɪtənsi ˈhaɪdɪŋ/
**Part of speech:** noun
**Core meaning (English):** scheduling independent work so arithmetic or memory delay is covered by other active threads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy work độc lập để che delay instruction/memory.
**Grammar & collocations:** `instruction-latency-hiding strategy` — strategy; `occupy a waiting pipeline` — lấp.
**Examples:** `Instruction latency hiding kept the arithmetic units busy during memory waits.` → Hiding giữ unit bận.
**Liên kết tiếng Hàn:** `명령어 지연 숨김`.

## 20. occupancy limiter /ˌɒkjəˈpænsi ˈlɪmɪtər/
**Part of speech:** noun
**Core meaning (English):** the resource constraint that prevents a GPU multiprocessor from hosting more active thread groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** constraint resource giới hạn thread group active trên GPU.
**Grammar & collocations:** `occupancy-limiter analysis` — analysis; `identify a register bottleneck` — xác định.
**Examples:** `The occupancy limiter was register usage rather than shared memory.` → Limiter là register.
**Liên kết tiếng Hàn:** `점유율 제한기`.

## Review in context

**Shared memory bank**, **coalesced memory access**, and **register tiling** shape data movement; **kernel launch overhead**, a **stream multiprocessor**, and a **tensor core instruction** shape compute. A **memory fence**, **atomic contention**, and **device synchronization** control ordering, while **host-device transfer**, **unified memory migration**, and **page-locked memory** affect movement. **Command buffer**, **asynchronous execution**, **double buffering**, **workgroup size**, **barrier synchronization**, **cache line residency**, **instruction latency hiding**, and **occupancy limiter** complete tuning.

**Bản dịch tiếng Việt:** **Shared memory bank**, **coalesced memory access** và **register tiling** định hình data movement; **kernel launch overhead**, **stream multiprocessor** và **tensor core instruction** định hình compute. **Memory fence**, **atomic contention** và **device synchronization** kiểm soát thứ tự, còn **host-device transfer**, **unified memory migration** và **page-locked memory** ảnh hưởng di chuyển. **Command buffer**, **asynchronous execution**, **double buffering**, **workgroup size**, **barrier synchronization**, **cache line residency**, **instruction latency hiding** và **occupancy limiter** hoàn thiện tuning.
