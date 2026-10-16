# C2 Vocabulary — Resource scheduling and orchestration

This lesson follows a unit of work from placement and queueing through reservation, preemption, cancellation, and cleanup.

Flow: **placement constraint → bin packing → work queue → fairness policy → starvation bound → preemption budget → quota envelope → scheduling epoch → reservation token → capacity claim → backoff class → cancellation token → idempotent handoff → orphan cleanup → resource claim → placement score → work-conserving scheduler → queue aging → preemption notice → dispatch cycle**.

## 1. placement constraint /ˈpleɪsmənt kənˈstreɪnt/
**Part of speech:** noun
**Core meaning (English):** a rule limiting where a workload may run because of data, hardware, topology, or policy requirements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule giới hạn nơi workload chạy vì data, hardware, topology hoặc policy.
**Grammar & collocations:** `placement-constraint expression` — biểu thức; `co-locate a dependent service` — đặt cùng.
**Examples:** `The placement constraint kept encrypted workloads on nodes with a hardware security module.` → Constraint giữ workload trên node có HSM.
**Liên kết tiếng Hàn:** `배치 제약`.

## 2. bin packing /bɪn ˈpækɪŋ/
**Part of speech:** noun
**Core meaning (English):** assigning workloads to limited-capacity hosts so that available resources are used efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xếp workload vào host giới hạn để dùng resource hiệu quả.
**Grammar & collocations:** `bin-packing heuristic` — heuristic; `fit a workload into a node` — xếp.
**Examples:** `The bin packing algorithm left enough memory on each host for a failover task.` → Algorithm chừa memory cho failover.
**Liên kết tiếng Hàn:** `빈 패킹`.

## 3. work queue /wɜːrk kjuː/
**Part of speech:** noun
**Core meaning (English):** a queue holding units of work until an executor has the capacity and permission to run them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàng đợi giữ việc đến khi executor đủ capacity và quyền chạy.
**Grammar & collocations:** `work-queue depth` — độ sâu; `dequeue a pending task` — lấy ra.
**Examples:** `The work queue absorbed a traffic spike while workers scaled up gradually.` → Queue hấp thụ spike khi worker tăng dần.
**Liên kết tiếng Hàn:** `작업 큐`.

## 4. fairness policy /ˈfeərnəs ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a rule for sharing scarce scheduling capacity among users, tenants, or classes of work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule chia capacity khan hiếm giữa user, tenant hoặc lớp việc.
**Grammar & collocations:** `fairness-policy weight` — trọng số; `share capacity proportionally` — chia.
**Examples:** `The fairness policy prevented one tenant from consuming every GPU during peak demand.` → Policy ngăn một tenant chiếm hết GPU.
**Liên kết tiếng Hàn:** `공정성 정책`.

## 5. starvation bound /stɑːrˈveɪʃən baʊnd/
**Part of speech:** noun
**Core meaning (English):** a limit on how long an eligible task may wait without receiving service.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn thời gian task đủ điều kiện phải chờ trước khi được phục vụ.
**Grammar & collocations:** `starvation-bound violation` — vi phạm; `guarantee eventual service` — bảo đảm.
**Examples:** `The starvation bound triggered priority aging for a report that had waited too long.` → Bound kích hoạt tăng tuổi ưu tiên.
**Liên kết tiếng Hàn:** `기아 한계`.

## 6. preemption budget /priːˈempʃən ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a limit on how much running work may be interrupted to make room for higher-priority work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn lượng việc đang chạy được phép ngắt để nhường việc ưu tiên.
**Grammar & collocations:** `preemption-budget exhaustion` — cạn; `interrupt a low-priority job` — ngắt.
**Examples:** `The preemption budget stopped the scheduler from repeatedly evicting the same batch job.` → Budget ngăn evict batch lặp lại.
**Liên kết tiếng Hàn:** `선점 예산`.

## 7. quota envelope /ˈkwoʊtə ˈenvəloʊ/
**Part of speech:** noun
**Core meaning (English):** a bounded allowance describing the maximum resource use a workload or tenant may consume.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hạn mức mô tả resource tối đa workload/tenant được dùng.
**Grammar & collocations:** `quota-envelope check` — kiểm tra; `reject an over-limit request` — từ chối.
**Examples:** `The quota envelope capped the team's concurrent training jobs at twelve.` → Envelope giới hạn 12 job training đồng thời.
**Liên kết tiếng Hàn:** `할당량 범위`.

## 8. scheduling epoch /ˈskedʒuːlɪŋ ˈiːpɒk/
**Part of speech:** noun
**Core meaning (English):** a numbered scheduling period used to coordinate decisions and identify stale assignments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kỳ scheduling có số để phối hợp quyết định và nhận diện assignment cũ.
**Grammar & collocations:** `scheduling-epoch identifier` — identifier; `invalidate a stale decision` — vô hiệu.
**Examples:** `The worker rejected the assignment because its scheduling epoch was older than the cluster state.` → Worker từ chối assignment epoch cũ.
**Liên kết tiếng Hàn:** `스케줄링 에포크`.

## 9. reservation token /ˌrezərˈveɪʃən ˈtoʊkən/
**Part of speech:** noun
**Core meaning (English):** a temporary credential proving that specific capacity has been reserved for a workload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** credential tạm chứng minh capacity cụ thể đã được giữ cho workload.
**Grammar & collocations:** `reservation-token expiry` — hết hạn; `redeem reserved capacity` — dùng.
**Examples:** `The scheduler issued a reservation token before the large model began downloading weights.` → Scheduler cấp token trước khi tải weights.
**Liên kết tiếng Hàn:** `예약 토큰`.

## 10. capacity claim /kəˈpæsəti kleɪm/
**Part of speech:** noun
**Core meaning (English):** a request asserting that a workload needs a stated amount of a resource.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** yêu cầu nêu workload cần bao nhiêu resource.
**Grammar & collocations:** `capacity-claim validation` — xác thực; `declare a memory requirement` — khai báo.
**Examples:** `The capacity claim requested four accelerators and sixty-four gigabytes of memory.` → Claim yêu cầu 4 accelerator và 64 GB.
**Liên kết tiếng Hàn:** `용량 청구`.

## 11. backoff class /ˈbækɒf klɑːs/
**Part of speech:** noun
**Core meaning (English):** a category determining how long a rejected or retrying task waits before trying again.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** category quyết định task retry chờ bao lâu trước lần thử lại.
**Grammar & collocations:** `backoff-class policy` — policy; `delay a noisy retry` — trì hoãn.
**Examples:** `The backoff class assigned a longer delay to requests rejected for capacity pressure.` → Class cho request thiếu capacity delay dài hơn.
**Liên kết tiếng Hàn:** `백오프 클래스`.

## 12. cancellation token /ˌkænsəˈleɪʃən ˈtoʊkən/
**Part of speech:** noun
**Core meaning (English):** a signal or handle that lets an owner request cooperative termination of ongoing work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu/handle cho phép owner yêu cầu dừng công việc đang chạy một cách hợp tác.
**Grammar & collocations:** `cancellation-token check` — kiểm tra; `honour a shutdown request` — tuân thủ.
**Examples:** `The worker checked the cancellation token before starting another expensive shard scan.` → Worker check token trước scan shard mới.
**Liên kết tiếng Hàn:** `취소 토큰`.

## 13. idempotent handoff /ˌɪdəmpoʊˈtənt ˈhændɒf/
**Part of speech:** noun
**Core meaning (English):** transferring ownership of work in a way that remains safe if the transfer message is repeated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển ownership an toàn dù message handoff bị lặp.
**Grammar & collocations:** `idempotent-handoff protocol` — protocol; `transfer a lease safely` — chuyển.
**Examples:** `The idempotent handoff let a replacement worker claim the task after a network retry.` → Handoff cho worker mới claim sau retry.
**Liên kết tiếng Hàn:** `멱등 핸드오프`.

## 14. orphan cleanup /ˈɔːrfən ˈkliːnʌp/
**Part of speech:** noun
**Core meaning (English):** removing resources or records left behind after their owning workload disappears.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dọn resource/record còn lại sau khi workload owner biến mất.
**Grammar & collocations:** `orphan-cleanup worker` — worker; `reclaim an abandoned volume` — thu hồi.
**Examples:** `Orphan cleanup reclaimed volumes left by jobs that crashed before releasing them.` → Cleanup thu hồi volume của job crash.
**Liên kết tiếng Hàn:** `고아 정리`.

## 15. resource claim /rɪˈsɔːrs kleɪm/
**Part of speech:** noun
**Core meaning (English):** a recorded assertion that a workload currently owns or is entitled to use a resource.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** assertion ghi workload đang sở hữu hoặc có quyền dùng resource.
**Grammar & collocations:** `resource-claim record` — record; `renew an ownership claim` — gia hạn.
**Examples:** `The controller renewed the resource claim while the training job was still healthy.` → Controller gia hạn claim khi job còn khỏe.
**Liên kết tiếng Hàn:** `리소스 청구`.

## 16. placement score /ˈpleɪsmənt skɔːr/
**Part of speech:** noun
**Core meaning (English):** a calculated value ranking possible hosts for a workload under scheduling criteria.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị xếp hạng host khả dĩ theo tiêu chí scheduling.
**Grammar & collocations:** `placement-score function` — hàm; `rank a candidate node` — xếp hạng.
**Examples:** `The placement score favored the node with local data and spare memory.` → Score ưu tiên node có data cục bộ và memory trống.
**Liên kết tiếng Hàn:** `배치 점수`.

## 17. work-conserving scheduler /wɜːrk kənˈsɜːrvɪŋ ˈskedʒuːlər/
**Part of speech:** noun
**Core meaning (English):** a scheduler that does not leave a usable resource idle while eligible work is waiting.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scheduler không để resource usable rảnh khi có việc đủ điều kiện chờ.
**Grammar & collocations:** `work-conserving-scheduler assumption` — giả định; `dispatch an eligible task` — dispatch.
**Examples:** `The work-conserving scheduler dispatched a small job while a large placement was still blocked.` → Scheduler chạy job nhỏ khi job lớn bị block.
**Liên kết tiếng Hàn:** `작업 보존 스케줄러`.

## 18. queue aging /kjuː ˈeɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** increasing a waiting task's effective priority over time to reduce indefinite delay.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tăng priority hiệu dụng theo thời gian chờ để tránh delay vô hạn.
**Grammar & collocations:** `queue-aging factor` — hệ số; `promote a long-waiting task` — nâng.
**Examples:** `Queue aging promoted the nightly export after interactive jobs had dominated the cluster.` → Aging nâng export sau khi interactive chiếm cluster.
**Liên kết tiếng Hàn:** `큐 에이징`.

## 19. preemption notice /priːˈempʃən ˈnoʊtɪs/
**Part of speech:** noun
**Core meaning (English):** an advance signal that running work will be interrupted or moved to another resource.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu báo trước workload đang chạy sẽ bị ngắt hoặc chuyển.
**Grammar & collocations:** `preemption-notice period` — khoảng báo; `checkpoint before eviction` — checkpoint.
**Examples:** `The preemption notice gave the database time to flush its in-memory index.` → Notice cho database thời gian flush index.
**Liên kết tiếng Hàn:** `선점 통지`.

## 20. dispatch cycle /dɪˈspætʃ ˈsaɪkəl/
**Part of speech:** noun
**Core meaning (English):** one iteration in which a scheduler evaluates waiting work and assigns available resources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một vòng scheduler đánh giá việc chờ và gán resource trống.
**Grammar & collocations:** `dispatch-cycle latency` — độ trễ; `evaluate pending claims` — đánh giá.
**Examples:** `The dispatch cycle placed three short jobs before reconsidering the blocked accelerator request.` → Cycle đặt ba job ngắn trước request accelerator.
**Liên kết tiếng Hàn:** `디스패치 주기`.

## Review in context

A **placement constraint** and **bin packing** choose hosts for a **work queue**, while a **fairness policy**, **starvation bound**, **preemption budget**, and **quota envelope** keep sharing predictable. A **scheduling epoch**, **reservation token**, and **capacity claim** make ownership explicit. A **backoff class** delays retries, a **cancellation token** stops cooperative work, an **idempotent handoff** transfers ownership safely, and **orphan cleanup** reclaims leftovers. A **resource claim** and **placement score** guide decisions; a **work-conserving scheduler** uses available capacity, **queue aging** protects long waiters, a **preemption notice** permits checkpointing, and each **dispatch cycle** turns policy into assignments.

**Bản dịch tiếng Việt:** **Placement constraint** và **bin packing** chọn host cho **work queue**, còn **fairness policy**, **starvation bound**, **preemption budget** và **quota envelope** giữ việc chia sẻ có thể dự đoán. **Scheduling epoch**, **reservation token** và **capacity claim** làm rõ ownership. **Backoff class** trì hoãn retry, **cancellation token** dừng công việc hợp tác, **idempotent handoff** chuyển ownership an toàn, còn **orphan cleanup** thu hồi phần còn lại. **Resource claim** và **placement score** hướng dẫn quyết định; **work-conserving scheduler** dùng capacity trống, **queue aging** bảo vệ task chờ lâu, **preemption notice** cho phép checkpoint, và mỗi **dispatch cycle** biến policy thành assignment.
