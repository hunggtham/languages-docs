# C2 Vocabulary — Accelerator memory and collective execution

This lesson follows a workload from host preparation and device placement through GPU memory use, precision, and multi-device coordination.

Flow: **device memory → host staging buffer → pinned memory → warp occupancy → shared-memory bank → tensor core path → mixed-precision mode → quantization scale → activation checkpoint → gradient bucket → all-reduce ring → collective barrier → device topology → peer-to-peer transfer → unified memory page fault → stream priority → device queue → shared-memory tile → collective operation → memory residency**.

## 1. device memory /dɪˈvaɪs ˈmeməri/
**Part of speech:** noun
**Core meaning (English):** memory located on an accelerator and directly accessible to its kernels or device operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory trên accelerator, kernel/device operation truy cập trực tiếp.
**Grammar & collocations:** `device-memory allocation` — allocation; `copy weights to an accelerator` — chép.
**Examples:** `Device memory held the model weights while the host prepared the next input batch.` → Memory device giữ weights khi host chuẩn bị batch.
**Liên kết tiếng Hàn:** `디바이스 메모리`.

## 2. host staging buffer /hoʊst ˈsteɪdʒɪŋ ˈbʌfər/
**Part of speech:** noun
**Core meaning (English):** host-side memory temporarily holding data before transfer to or from an accelerator.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory phía host giữ data tạm trước/sau transfer accelerator.
**Grammar & collocations:** `host-staging-buffer reuse` — tái dùng; `prepare a contiguous batch` — chuẩn bị.
**Examples:** `The host staging buffer assembled records before the DMA transfer began.` → Buffer gom record trước DMA.
**Liên kết tiếng Hàn:** `호스트 스테이징 버퍼`.

## 3. pinned memory /pɪnd ˈmeməri/
**Part of speech:** noun
**Core meaning (English):** host memory prevented from paging so an accelerator can transfer it predictably.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory host không bị page để accelerator transfer ổn định.
**Grammar & collocations:** `pinned-memory pool` — pool; `overlap transfer with computation` — chồng.
**Examples:** `Pinned memory allowed the next batch to copy while the current kernel was running.` → Memory pinned cho copy batch kế tiếp song song.
**Liên kết tiếng Hàn:** `고정 메모리`.

## 4. warp occupancy /wɔːrp ˈɒkjəpənsi/
**Part of speech:** noun
**Core meaning (English):** the proportion of hardware execution capacity occupied by active warps on a GPU multiprocessor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ capacity phần cứng được warp active chiếm trên GPU.
**Grammar & collocations:** `warp-occupancy estimate` — estimate; `hide memory latency` — che.
**Examples:** `Warp occupancy fell when each thread required too many registers.` → Occupancy giảm khi thread cần nhiều register.
**Liên kết tiếng Hàn:** `워프 점유율`.

## 5. shared-memory bank /ʃerd ˈmeməri bæŋk/
**Part of speech:** noun
**Core meaning (English):** one independently addressable segment of fast on-chip shared memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một segment có thể address độc lập của shared memory nhanh.
**Grammar & collocations:** `shared-memory-bank conflict` — conflict; `arrange addresses evenly` — sắp.
**Examples:** `The kernel avoided a shared-memory bank conflict by changing the tile layout.` → Kernel tránh conflict bằng đổi layout.
**Liên kết tiếng Hàn:** `공유 메모리 뱅크`.

## 6. tensor core path /ˈtensər kɔːr pɑːθ/
**Part of speech:** noun
**Core meaning (English):** an execution route using specialized matrix hardware for supported tensor operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** route execution dùng hardware matrix chuyên dụng cho tensor operation.
**Grammar & collocations:** `tensor-core-path eligibility` — điều kiện; `select a matrix instruction` — chọn.
**Examples:** `The tensor core path accelerated the matrix multiply after dimensions were aligned.` → Path tăng tốc matrix multiply.
**Liên kết tiếng Hàn:** `텐서 코어 경로`.

## 7. mixed-precision mode /mɪkst prɪˈsɪʒən moʊd/
**Part of speech:** noun
**Core meaning (English):** a computation mode using different numeric precisions for speed, memory, and stability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mode dùng nhiều precision khác nhau để cân bằng tốc độ, memory và ổn định.
**Grammar & collocations:** `mixed-precision-mode policy` — policy; `accumulate in a wider type` — tích lũy.
**Examples:** `Mixed-precision mode stored activations cheaply but accumulated the reduction in higher precision.` → Mode lưu activation rẻ và accumulate precision cao.
**Liên kết tiếng Hàn:** `혼합 정밀도 모드`.

## 8. quantization scale /ˌkwɒntaɪˈzeɪʃən skeɪl/
**Part of speech:** noun
**Core meaning (English):** a parameter mapping real-valued numbers to a limited integer representation and back.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tham số map số thực sang integer giới hạn và ngược lại.
**Grammar & collocations:** `quantization-scale calibration` — calibration; `represent a narrow range` — biểu diễn.
**Examples:** `The quantization scale preserved small activation differences without overflowing the integer range.` → Scale giữ khác biệt nhỏ mà không overflow.
**Liên kết tiếng Hàn:** `양자화 스케일`.

## 9. activation checkpoint /ˌæktəˈveɪʃən ˈtʃekpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a saved subset of intermediate neural activations used to recompute the rest during backward processing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** subset activation trung gian lưu để tính lại phần còn lại lúc backward.
**Grammar & collocations:** `activation-checkpoint interval` — interval; `trade memory for recomputation` — đánh đổi.
**Examples:** `The activation checkpoint reduced device memory at the cost of extra forward computation.` → Checkpoint giảm memory và tăng tính lại.
**Liên kết tiếng Hàn:** `활성화 체크포인트`.

## 10. gradient bucket /ˈɡreɪdiənt ˈbʌkɪt/
**Part of speech:** noun
**Core meaning (English):** a group of gradients collected so communication can begin before the entire model finishes computing them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm gradient gom để communication bắt đầu trước khi model tính xong.
**Grammar & collocations:** `gradient-bucket size` — size; `overlap reduction with backpropagation` — chồng.
**Examples:** `The gradient bucket triggered an all-reduce while later layers were still computing.` → Bucket trigger all-reduce khi layer sau còn tính.
**Liên kết tiếng Hàn:** `그래디언트 버킷`.

## 11. all-reduce ring /ˌɔːl rɪˈduːs rɪŋ/
**Part of speech:** noun
**Core meaning (English):** a ring communication arrangement in which devices collectively reduce and distribute values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấu trúc ring để device cùng reduce và phân phối value.
**Grammar & collocations:** `all-reduce-ring step` — bước; `sum gradients across devices` — cộng.
**Examples:** `The all-reduce ring summed gradients across eight accelerators before the update.` → Ring cộng gradient tám accelerator.
**Liên kết tiếng Hàn:** `올리듀스 링`.

## 12. collective barrier /kəˈlektɪv ˈbæriər/
**Part of speech:** noun
**Core meaning (English):** a synchronization point requiring all participating devices to reach the same collective phase.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm sync buộc device cùng tới một phase collective.
**Grammar & collocations:** `collective-barrier wait` — wait; `prevent a partial update` — ngăn.
**Examples:** `The collective barrier prevented one device from starting the next step with incomplete gradients.` → Barrier ngăn device chạy sớm.
**Liên kết tiếng Hàn:** `집단 장벽`.

## 13. device topology /dɪˈvaɪs təˈpɒlədʒi/
**Part of speech:** noun
**Core meaning (English):** the physical and logical arrangement of accelerators, links, switches, and memory domains.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cách sắp xếp vật lý/logical của accelerator, link, switch và memory domain.
**Grammar & collocations:** `device-topology map` — map; `place communicating ranks nearby` — đặt.
**Examples:** `The device topology favored a ring that kept high-volume transfers on fast links.` → Topology ưu tiên ring trên link nhanh.
**Liên kết tiếng Hàn:** `디바이스 토폴로지`.

## 14. peer-to-peer transfer /pɪər tə pɪər ˈtrænsfər/
**Part of speech:** noun
**Core meaning (English):** moving data directly between devices without staging it through host memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển data trực tiếp giữa device không qua memory host.
**Grammar & collocations:** `peer-to-peer-transfer path` — path; `copy between accelerators` — chép.
**Examples:** `Peer-to-peer transfer moved embeddings between neighboring GPUs without a host round trip.` → Transfer chuyển embedding giữa GPU không qua host.
**Liên kết tiếng Hàn:** `피어 투 피어 전송`.

## 15. unified memory page fault /ˈjuːnɪfaɪd ˈmeməri peɪdʒ fɔːlt/
**Part of speech:** noun
**Core meaning (English):** a fault that occurs when a device accesses a unified-memory page currently resident in another memory domain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fault khi device truy cập page unified memory đang ở domain khác.
**Grammar & collocations:** `unified-memory-page-fault latency` — latency; `migrate a page to the device` — chuyển.
**Examples:** `A unified memory page fault stalled the kernel while a hot tensor migrated to device memory.` → Fault làm kernel dừng khi tensor chuyển.
**Liên kết tiếng Hàn:** `통합 메모리 페이지 폴트`.

## 16. stream priority /striːm praɪˈɔːrəti/
**Part of speech:** noun
**Core meaning (English):** an ordering preference determining which asynchronous device stream receives scheduling attention first.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ưu tiên quyết định stream async nào được schedule trước.
**Grammar & collocations:** `stream-priority class` — class; `favor latency-sensitive work` — ưu tiên.
**Examples:** `Stream priority let the small response kernel run ahead of a long background transfer.` → Priority cho kernel response nhỏ chạy trước.
**Liên kết tiếng Hàn:** `스트림 우선순위`.

## 17. device queue /dɪˈvaɪs kjuː/
**Part of speech:** noun
**Core meaning (English):** a queue of commands waiting to execute on an accelerator or device engine.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** queue command chờ chạy trên accelerator/device engine.
**Grammar & collocations:** `device-queue depth` — depth; `enqueue an asynchronous kernel` — enqueue.
**Examples:** `The device queue grew when host submission outpaced kernel completion.` → Queue tăng khi host submit nhanh hơn kernel.
**Liên kết tiếng Hàn:** `디바이스 큐`.

## 18. shared-memory tile /ʃerd ˈmeməri taɪl/
**Part of speech:** noun
**Core meaning (English):** a small block of data staged in fast shared memory for reuse by nearby threads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** block data nhỏ đưa vào shared memory nhanh để thread gần tái dùng.
**Grammar & collocations:** `shared-memory-tile shape` — shape; `reuse a matrix block` — tái dùng.
**Examples:** `The shared-memory tile reduced repeated global reads during matrix multiplication.` → Tile giảm đọc global lặp.
**Liên kết tiếng Hàn:** `공유 메모리 타일`.

## 19. collective operation /kəˈlektɪv ˌɒpəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** an operation requiring a defined group of devices to communicate and participate together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operation cần nhóm device giao tiếp và cùng tham gia.
**Grammar & collocations:** `collective-operation schedule` — schedule; `broadcast a parameter` — broadcast.
**Examples:** `The collective operation broadcast the updated scale to every accelerator.` → Operation broadcast scale mới cho mọi accelerator.
**Liên kết tiếng Hàn:** `집단 연산`.

## 20. memory residency /ˈmeməri ˈrezɪdənsi/
**Part of speech:** noun
**Core meaning (English):** the memory domain in which data currently resides and can be accessed with a particular cost.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** domain memory nơi data đang nằm và cost truy cập tương ứng.
**Grammar & collocations:** `memory-residency policy` — policy; `keep weights on device` — giữ.
**Examples:** `Memory residency determined whether the next operation needed a costly transfer.` → Residency quyết định có cần transfer đắt không.
**Liên kết tiếng Hàn:** `메모리 상주`.

## Review in context

**Device memory**, a **host staging buffer**, and **pinned memory** shape transfers; **warp occupancy** and a **shared-memory bank** shape execution. A **tensor core path** and **mixed-precision mode** trade speed and accuracy, while a **quantization scale** controls integer representation. An **activation checkpoint** saves memory, a **gradient bucket** overlaps communication, and an **all-reduce ring** coordinates devices behind a **collective barrier**. **Device topology** guides placement, **peer-to-peer transfer** avoids the host, a **unified memory page fault** exposes migration cost, **stream priority** orders work, a **device queue** holds commands, a **shared-memory tile** enables reuse, a **collective operation** coordinates participants, and **memory residency** determines transfer need.

**Bản dịch tiếng Việt:** **Device memory**, **host staging buffer** và **pinned memory** định hình transfer; **warp occupancy** và **shared-memory bank** định hình execution. **Tensor core path** và **mixed-precision mode** cân bằng tốc độ/độ chính xác, còn **quantization scale** kiểm soát integer. **Activation checkpoint** tiết kiệm memory, **gradient bucket** chồng communication, và **all-reduce ring** phối hợp device qua **collective barrier**. **Device topology** hướng dẫn placement, **peer-to-peer transfer** tránh host, **unified memory page fault** lộ cost migration, **stream priority** sắp thứ tự, **device queue** giữ command, **shared-memory tile** hỗ trợ reuse, **collective operation** phối hợp participant, còn **memory residency** quyết định cần transfer hay không.
