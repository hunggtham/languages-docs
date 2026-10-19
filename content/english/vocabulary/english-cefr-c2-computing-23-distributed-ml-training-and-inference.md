# C2 Vocabulary — Distributed ML training and inference

This lesson follows a large model from distributed optimization through memory sharding, fault recovery, and high-throughput serving.

Flow: **parameter server → all-reduce collective → gradient bucketing → tensor parallelism → pipeline parallelism → data parallelism → sharded optimizer state → activation checkpointing → gradient accumulation → loss scaling → communication overlap → straggler mitigation → elastic training → checkpoint resumption → fault-tolerant training → inference batching → continuous batching → KV-cache paging → speculative decoding → serving replica**.

## 1. parameter server /pəˈræmətər ˈsɝvər/
**Part of speech:** noun
**Core meaning (English):** a service that stores model parameters and coordinates updates from distributed workers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** server giữ weights chung để nhiều worker đọc và gửi update.
**Grammar & collocations:** `parameter-server architecture` — kiến trúc; `push gradients to the parameter server` — đẩy gradient.
**Examples:** `The parameter server applied worker updates before broadcasting the next model version.` → Parameter server áp dụng update rồi broadcast version model kế tiếp.
**Liên kết tiếng Hàn:** `파라미터 서버`.

## 2. all-reduce collective /ˌɔl rɪˈduːs kəˈlɛktɪv/
**Part of speech:** noun
**Core meaning (English):** a communication operation that combines values from all workers and returns the result to every worker.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mọi worker góp gradient, reduce lại rồi tất cả cùng nhận kết quả.
**Grammar & collocations:** `all-reduce collective operation` — operation; `launch an all-reduce` — khởi chạy.
**Examples:** `The all-reduce collective synchronized gradients after each training step.` → All-reduce đồng bộ gradient sau mỗi bước train.
**Liên kết tiếng Hàn:** `올리듀스 집단 연산`.

## 3. gradient bucketing /ˈɡreɪdiənt ˈbʌkətɪŋ/
**Part of speech:** noun
**Core meaning (English):** grouping gradients into communication buckets so transfers can be scheduled efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom gradient thành bucket để truyền theo lô thay vì gửi từng tensor nhỏ.
**Grammar & collocations:** `gradient-bucketing threshold` — ngưỡng; `bucket gradients` — gom gradient.
**Examples:** `Gradient bucketing reduced the number of small network messages during backpropagation.` → Bucketing giảm số message mạng nhỏ khi backpropagation.
**Liên kết tiếng Hàn:** `그래디언트 버킷화`.

## 4. tensor parallelism /ˈtɛnsər ˈpærəˌlɛlɪzəm/
**Part of speech:** noun
**Core meaning (English):** splitting the computation of a tensor or layer across multiple devices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia phép tính của cùng một tensor/layer lên nhiều accelerator.
**Grammar & collocations:** `tensor-parallel degree` — degree; `partition a tensor` — partition.
**Examples:** `Tensor parallelism let the attention layer fit across four accelerators.` → Tensor parallelism giúp attention layer vừa trên bốn accelerator.
**Liên kết tiếng Hàn:** `텐서 병렬성`.

## 5. pipeline parallelism /ˈpaɪpˌlaɪn ˈpærəˌlɛlɪzəm/
**Part of speech:** noun
**Core meaning (English):** placing successive model stages on different devices so microbatches can flow through them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi device giữ một đoạn model, microbatch đi qua như dây chuyền.
**Grammar & collocations:** `pipeline-parallel stage` — stage; `schedule microbatches` — lập lịch.
**Examples:** `Pipeline parallelism kept later decoder stages busy while earlier stages processed the next microbatch.` → Pipeline parallelism giữ decoder stage sau bận khi stage trước xử lý microbatch kế.
**Liên kết tiếng Hàn:** `파이프라인 병렬성`.

## 6. data parallelism /ˈdeɪtə ˈpærəˌlɛlɪzəm/
**Part of speech:** noun
**Core meaning (English):** replicating a model across workers and giving each worker a different portion of the training data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi worker có bản model, nhưng xử lý shard data khác nhau rồi đồng bộ update.
**Grammar & collocations:** `data-parallel worker` — worker; `replicate the model` — nhân bản.
**Examples:** `Data parallelism increased throughput until gradient communication became the bottleneck.` → Data parallelism tăng throughput cho tới khi communication gradient thành nút thắt.
**Liên kết tiếng Hàn:** `데이터 병렬성`.

## 7. sharded optimizer state /ʃɑrdɪd ˈɑptəˌmaɪzər steɪt/
**Part of speech:** noun
**Core meaning (English):** optimizer statistics partitioned across workers instead of being fully replicated on every device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia state của optimizer để mỗi device giữ một phần, tiết kiệm memory.
**Grammar & collocations:** `sharded-optimizer-state memory` — memory; `partition optimizer states` — partition.
**Examples:** `Sharded optimizer state allowed the model to train with less memory per accelerator.` → Sharded state giúp train model với ít memory mỗi accelerator hơn.
**Liên kết tiếng Hàn:** `샤딩된 옵티마이저 상태`.

## 8. activation checkpointing /ˌæktəˈveɪʃən ˈtʃɛkˌpɔɪntɪŋ/
**Part of speech:** noun
**Core meaning (English):** saving only selected activations and recomputing the others during backpropagation to reduce memory use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không lưu mọi activation; khi backward thì tính lại phần đã bỏ.
**Grammar & collocations:** `activation-checkpointing policy` — policy; `recompute activations` — tính lại.
**Examples:** `Activation checkpointing lowered memory pressure at the cost of extra forward computation.` → Checkpointing giảm áp lực memory nhưng tốn thêm forward computation.
**Liên kết tiếng Hàn:** `활성화 체크포인팅`.

## 9. gradient accumulation /ˈɡreɪdiənt əˌkjuːmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** adding gradients from several microbatches before applying one optimizer update.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cộng dồn gradient nhiều microbatch để có effective batch lớn hơn.
**Grammar & collocations:** `gradient-accumulation step` — step; `accumulate over microbatches` — tích lũy.
**Examples:** `Gradient accumulation simulated a larger batch on a device with limited memory.` → Accumulation mô phỏng batch lớn trên device ít memory.
**Liên kết tiếng Hàn:** `그래디언트 누적`.

## 10. loss scaling /lɔs ˈskeɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** multiplying a loss before mixed-precision backpropagation to keep small gradients representable, then correcting the scale.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phóng đại loss để gradient nhỏ không bị biến mất trong precision thấp.
**Grammar & collocations:** `dynamic loss scaling` — scaling động; `unscale gradients` — bỏ scale.
**Examples:** `Dynamic loss scaling skipped an update when the scaled gradients overflowed.` → Loss scaling động bỏ qua update khi gradient bị overflow.
**Liên kết tiếng Hàn:** `손실 스케일링`.

## 11. communication overlap /kəˌmjuːnəˈkeɪʃən ˌoʊvərˈlæp/
**Part of speech:** noun
**Core meaning (English):** performing network communication at the same time as computation to hide transfer latency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vừa compute vừa truyền data, không để accelerator chờ communication.
**Grammar & collocations:** `communication-computation overlap` — overlap; `overlap transfers with compute` — chồng lấp.
**Examples:** `Communication overlap hid part of the gradient exchange behind matrix multiplication.` → Overlap che một phần thời gian exchange gradient sau matrix multiplication.
**Liên kết tiếng Hàn:** `통신 중첩`.

## 12. straggler mitigation /ˈstræɡlər ˌmɪtəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** techniques for limiting the effect of unusually slow workers on a distributed job.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm tác động của worker chậm làm cả cluster phải đợi.
**Grammar & collocations:** `straggler-mitigation policy` — policy; `identify a straggler` — nhận diện.
**Examples:** `Straggler mitigation used backup workers when one machine repeatedly missed the synchronization window.` → Mitigation dùng backup worker khi một máy liên tục trễ cửa sổ sync.
**Liên kết tiếng Hàn:** `지연 작업자 완화`.

## 13. elastic training /ɪˈlæstɪk ˈtreɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** training that can add or remove workers while preserving a coherent distributed job.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** job train co giãn theo số worker available mà vẫn tiếp tục đúng.
**Grammar & collocations:** `elastic-training controller` — controller; `resize the worker pool` — đổi kích thước.
**Examples:** `Elastic training added capacity when a second accelerator pool became available.` → Elastic training thêm capacity khi pool accelerator thứ hai sẵn sàng.
**Liên kết tiếng Hàn:** `탄력적 학습`.

## 14. checkpoint resumption /ˈtʃɛkˌpɔɪnt rɪˈzʌmpʃən/
**Part of speech:** noun
**Core meaning (English):** restarting a training job from a saved model, optimizer, and scheduler state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khởi động lại từ checkpoint với đúng state chứ không train lại từ đầu.
**Grammar & collocations:** `checkpoint-resumption test` — test; `resume from a checkpoint` — tiếp tục.
**Examples:** `Checkpoint resumption restored the learning-rate schedule after a maintenance outage.` → Resumption khôi phục schedule learning-rate sau outage bảo trì.
**Liên kết tiếng Hàn:** `체크포인트 재개`.

## 15. fault-tolerant training /fɔlt ˈtɑlərənt ˈtreɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** training designed to continue or recover when workers, links, or storage components fail.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ train chịu được worker/link/storage hỏng mà không mất toàn bộ tiến trình.
**Grammar & collocations:** `fault-tolerant-training design` — thiết kế; `survive worker failure` — chịu lỗi.
**Examples:** `Fault-tolerant training preserved progress after a node lost its local checkpoint.` → Training chịu lỗi giữ progress sau khi node mất checkpoint local.
**Liên kết tiếng Hàn:** `내결함 학습`.

## 16. inference batching /ˈɪnfərəns ˈbætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** grouping several inference requests into one computation to improve accelerator utilization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom request inference thành batch để dùng accelerator hiệu quả hơn.
**Grammar & collocations:** `inference-batching window` — cửa sổ; `batch requests` — gom request.
**Examples:** `Inference batching improved throughput but added a few milliseconds of waiting.` → Batching tăng throughput nhưng thêm vài millisecond chờ.
**Liên kết tiếng Hàn:** `추론 배칭`.

## 17. continuous batching /kənˈtɪnjuəs ˈbætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** dynamically adding and removing requests from a running inference batch as individual sequences finish or arrive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** batch inference thay đổi liên tục thay vì đợi mọi request kết thúc cùng lúc.
**Grammar & collocations:** `continuous-batching scheduler` — scheduler; `admit a request` — nhận request.
**Examples:** `Continuous batching kept the decoder busy when short requests finished early.` → Continuous batching giữ decoder bận khi request ngắn xong sớm.
**Liên kết tiếng Hàn:** `연속 배칭`.

## 18. KV-cache paging /ˌkeɪ ˈviː kæʃ ˈpeɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** managing attention key-value cache in movable pages so memory can be allocated and reused across requests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia KV cache thành page để cấp phát linh hoạt, tránh lãng phí memory.
**Grammar & collocations:** `KV-cache page table` — page table; `page attention state` — phân trang state.
**Examples:** `KV-cache paging reduced fragmentation when many conversations had different lengths.` → Paging giảm fragmentation khi nhiều conversation có độ dài khác nhau.
**Liên kết tiếng Hàn:** `KV 캐시 페이징`.

## 19. speculative decoding /ˈspɛkjələtɪv diˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** generating candidate tokens with a smaller model and having a larger model verify them in groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model nhỏ đoán trước, model lớn kiểm tra theo cụm để tăng tốc sinh token.
**Grammar & collocations:** `speculative-decoding acceptance rate` — tỷ lệ chấp nhận; `verify draft tokens` — kiểm tra token nháp.
**Examples:** `Speculative decoding reduced latency when the draft model predicted common phrases accurately.` → Decoding suy đoán giảm latency khi model nháp đoán đúng cụm phổ biến.
**Liên kết tiếng Hàn:** `추측 디코딩`.

## 20. serving replica /ˈsɝvɪŋ ˈrɛplɪkə/
**Part of speech:** noun
**Core meaning (English):** an independently running copy of a model-serving process that can receive production requests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản instance model phục vụ traffic; nhiều replica giúp scale và chịu lỗi.
**Grammar & collocations:** `serving-replica pool` — pool; `route traffic to a replica` — route traffic.
**Examples:** `The router drained one serving replica before replacing its accelerator.` → Router rút traffic khỏi một replica trước khi thay accelerator.
**Liên kết tiếng Hàn:** `서빙 복제본`.

## Review in context

A **parameter server** can coordinate workers, but an **all-reduce collective** often synchronizes gradients directly. **Gradient bucketing** prepares transfers, while **tensor parallelism**, **pipeline parallelism**, and **data parallelism** divide computation in different ways. A **sharded optimizer state**, **activation checkpointing**, and **gradient accumulation** reduce memory pressure; **loss scaling** protects small values in low precision. **Communication overlap** hides transfer time, and **straggler mitigation** limits the effect of slow workers. **Elastic training** can resize the job, while **checkpoint resumption** supports **fault-tolerant training** after failure. In production, **inference batching** and **continuous batching** improve utilization, **KV-cache paging** manages memory, **speculative decoding** lowers token latency, and a pool of **serving replicas** handles traffic.

**Bản dịch tiếng Việt:** **Parameter server** có thể điều phối worker, nhưng **all-reduce collective** thường đồng bộ gradient trực tiếp. **Gradient bucketing** chuẩn bị việc truyền, còn **tensor parallelism**, **pipeline parallelism** và **data parallelism** chia computation theo các cách khác nhau. **Sharded optimizer state**, **activation checkpointing** và **gradient accumulation** giảm áp lực memory; **loss scaling** bảo vệ giá trị nhỏ ở precision thấp. **Communication overlap** che thời gian truyền, còn **straggler mitigation** giới hạn tác động của worker chậm. **Elastic training** có thể đổi kích thước job, còn **checkpoint resumption** hỗ trợ **fault-tolerant training** sau sự cố. Trong production, **inference batching** và **continuous batching** cải thiện utilization, **KV-cache paging** quản lý memory, **speculative decoding** giảm latency token, và pool **serving replica** xử lý traffic.
