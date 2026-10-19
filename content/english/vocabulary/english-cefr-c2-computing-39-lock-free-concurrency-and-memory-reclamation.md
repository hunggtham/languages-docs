# C2 Vocabulary — Lock-free concurrency and memory reclamation

This lesson follows a concurrent data structure from atomic progress guarantees through reclamation safety, contention, and cache behavior.

Flow: **lock-free algorithm → wait-free progress → compare-and-swap → ABA problem → hazard pointer → epoch-based reclamation → read-copy-update → memory reclamation → linearization point → lock convoy → priority inversion → transactional memory → hardware lock elision → optimistic concurrency → seqlock → futex → spinlock backoff → false sharing → cache-line ping-pong → contention profile**.

## 1. lock-free algorithm /lɑk friː ˈælgəˌrɪðəm/
**Part of speech:** noun
**Core meaning (English):** a concurrent algorithm that guarantees system-wide progress even if individual threads can be delayed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không thread nào giữ lock, nhưng luôn có thread tiến triển.
**Grammar & collocations:** `lock-free-algorithm proof` — proof; `design a nonblocking queue` — thiết kế.
**Examples:** `The lock-free algorithm let another consumer make progress when one consumer was descheduled.` → Thuật toán cho consumer khác tiếp tục khi một consumer bị dừng.
**Liên kết tiếng Hàn:** `락 프리 알고리즘`.

## 2. wait-free progress /weɪt friː ˈprɑɡrɛs/
**Part of speech:** noun
**Core meaning (English):** a guarantee that every operation completes within a bounded number of its own steps regardless of other threads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi operation có số bước giới hạn, không bị thread khác chặn vô hạn.
**Grammar & collocations:** `wait-free-progress guarantee` — guarantee; `bound operation steps` — giới hạn.
**Examples:** `Wait-free progress was required for the interrupt path, where indefinite retry was unacceptable.` → Interrupt path cần wait-free vì retry vô hạn không chấp nhận.
**Liên kết tiếng Hàn:** `웨이트 프리 진행`.

## 3. compare-and-swap /kəmˈpɛr ən swɑp/
**Part of speech:** noun
**Core meaning (English):** an atomic operation that replaces a memory value only if it still equals an expected value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ đổi value nếu value hiện tại vẫn bằng expected.
**Grammar & collocations:** `compare-and-swap loop` — loop; `retry after a failed CAS` — retry.
**Examples:** `The stack used compare-and-swap to publish a new head without taking a mutex.` → Stack dùng CAS để publish head mới.
**Liên kết tiếng Hàn:** `비교 후 교환`.

## 4. ABA problem /ˌeɪ biː ˈeɪ ˈprɑbləm/
**Part of speech:** noun
**Core meaning (English):** a concurrency error in which a value changes from A to B and back to A, hiding an intervening modification from a simple comparison.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value quay lại A khiến CAS tưởng không có thay đổi.
**Grammar & collocations:** `ABA-problem mitigation` — mitigation; `tag a pointer with a version` — gắn.
**Examples:** `A version tag prevented the ABA problem when a recycled node reused the same address.` → Version tag ngăn ABA khi node tái sử dụng địa chỉ.
**Liên kết tiếng Hàn:** `ABA 문제`.

## 5. hazard pointer /ˈhæzərd ˈpɔɪntər/
**Part of speech:** noun
**Core meaning (English):** a per-thread published reference showing that a thread may still access an object that another thread wants to reclaim.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pointer công khai báo object chưa được xóa vì thread còn dùng.
**Grammar & collocations:** `hazard-pointer record` — record; `protect a node before dereference` — bảo vệ.
**Examples:** `The hazard pointer kept the queue node alive until the reader finished inspecting it.` → Hazard pointer giữ node tới khi reader xong.
**Liên kết tiếng Hàn:** `위험 포인터`.

## 6. epoch-based reclamation /ˈɛpək beɪst ˌrɪkləˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a reclamation scheme that delays freeing retired objects until all participating threads pass a safe epoch.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ free object sau khi mọi thread qua epoch an toàn.
**Grammar & collocations:** `epoch-based-reclamation grace period` — period; `advance a global epoch` — đẩy.
**Examples:** `Epoch-based reclamation batched retired nodes and freed them after a grace period.` → EBR gom node rồi free sau grace period.
**Liên kết tiếng Hàn:** `에포크 기반 회수`.

## 7. read-copy-update /riːd ˈkɑpi ʌpˈdeɪt/
**Part of speech:** noun
**Core meaning (English):** a synchronization technique in which readers proceed without locks while writers publish a replacement and wait for a grace period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reader không lock, writer tạo bản mới rồi chờ reader cũ rời đi.
**Grammar & collocations:** `read-copy-update grace period` — period; `publish an updated pointer` — publish.
**Examples:** `Read-copy-update let routing lookups run without blocking on configuration writes.` → RCU cho lookup routing không bị block bởi write config.
**Liên kết tiếng Hàn:** `읽기-복사-업데이트`.

## 8. memory reclamation /ˈmɛməri ˌrɛkləˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** safely returning unreachable concurrent objects to an allocator after no thread can still access them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thu hồi object không còn dùng mà không use-after-free.
**Grammar & collocations:** `memory-reclamation scheme` — scheme; `retire an object` — retire.
**Examples:** `Memory reclamation was harder than insertion because readers could hold stale pointers.` → Reclamation khó hơn insert vì reader giữ pointer cũ.
**Liên kết tiếng Hàn:** `메모리 회수`.

## 9. linearization point /ˌlɪniərəˈzeɪʃən pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** the conceptual instant at which a concurrent operation takes effect in a history consistent with a sequential specification.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảnh khắc logic operation “có hiệu lực” dù code chạy nhiều bước.
**Grammar & collocations:** `linearization-point proof` — proof; `identify the atomic effect` — xác định.
**Examples:** `The successful compare-and-swap was the queue's linearization point for the enqueue.` → CAS thành công là điểm tuyến tính của enqueue.
**Liên kết tiếng Hàn:** `선형화 지점`.

## 10. lock convoy /lɑk kənˈvɔɪ/
**Part of speech:** noun
**Core meaning (English):** a performance condition in which delayed lock holders cause a queue of waiting threads and repeated context switching.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thread chậm kéo theo đoàn thread chờ lock.
**Grammar & collocations:** `lock-convoy effect` — effect; `break up lock contention` — phá.
**Examples:** `The lock convoy appeared when a long database call held the mutex inside the request path.` → Convoy xuất hiện khi call database giữ mutex.
**Liên kết tiếng Hàn:** `락 컨보이`.

## 11. priority inversion /praɪˈɔrəti ɪnˈvɝʒən/
**Part of speech:** noun
**Core meaning (English):** a scheduling problem in which a high-priority thread waits for a resource held by a lower-priority thread.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thread ưu tiên cao bị thread thấp giữ resource chặn.
**Grammar & collocations:** `priority-inversion scenario` — scenario; `inherit a lock holder's priority` — kế thừa.
**Examples:** `Priority inversion delayed the control loop when a background logger held the shared lock.` → Inversion làm chậm control loop.
**Liên kết tiếng Hàn:** `우선순위 역전`.

## 12. transactional memory /trænˈzækʃənəl ˈmɛməri/
**Part of speech:** noun
**Core meaning (English):** a mechanism that groups memory operations into speculative transactions that commit together or abort without partial visibility.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều thao tác memory commit cùng nhau hoặc rollback.
**Grammar & collocations:** `transactional-memory region` — region; `abort a conflicting transaction` — hủy.
**Examples:** `Transactional memory aborted when two cores modified the same cache line.` → Transaction abort khi hai core sửa cùng cache line.
**Liên kết tiếng Hàn:** `트랜잭션 메모리`.

## 13. hardware lock elision /ˈhɑrdˌwɛr lɑk ɪˈlɪʒən/
**Part of speech:** noun
**Core meaning (English):** speculative hardware execution that omits taking a lock when conflict detection suggests the critical section can proceed safely.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần cứng bỏ qua lock nếu dự đoán không xung đột.
**Grammar & collocations:** `hardware-lock-elision attempt` — attempt; `fall back after a conflict` — fallback.
**Examples:** `Hardware lock elision improved uncontended throughput but fell back under frequent writes.` → HLE tăng throughput khi ít tranh chấp nhưng fallback khi nhiều write.
**Liên kết tiếng Hàn:** `하드웨어 락 생략`.

## 14. optimistic concurrency /ˌɑptəˈmɪstɪk kənˈkɝənsi/
**Part of speech:** noun
**Core meaning (English):** a concurrency strategy that proceeds without immediate exclusion and validates conflicts before committing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cứ làm trước, kiểm tra conflict lúc commit.
**Grammar & collocations:** `optimistic-concurrency control` — control; `validate a read set` — xác thực.
**Examples:** `Optimistic concurrency worked well because collisions were rare and reads dominated writes.` → OCC hợp khi conflict hiếm và read nhiều.
**Liên kết tiếng Hàn:** `낙관적 동시성`.

## 15. seqlock /ˈsiː lɑk/
**Part of speech:** noun
**Core meaning (English):** a synchronization primitive in which writers update a sequence counter and readers retry if they observe a change during the read.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reader đọc không lock, kiểm sequence trước/sau rồi retry nếu writer chen.
**Grammar & collocations:** `seqlock reader` — reader; `retry on a sequence change` — retry.
**Examples:** `The seqlock protected a small time structure that readers accessed far more often than writers updated.` → Seqlock bảo vệ structure nhỏ, read nhiều hơn write.
**Liên kết tiếng Hàn:** `시퀀스 락`.

## 16. futex /ˈfjuːtɛks/
**Part of speech:** noun
**Core meaning (English):** a Linux synchronization facility that uses a user-space atomic value and enters the kernel only when threads must sleep or wake.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fast path ở user space, kernel chỉ can thiệp khi cần ngủ/thức.
**Grammar & collocations:** `futex wait` — wait; `wake a blocked waiter` — đánh thức.
**Examples:** `The mutex used a futex wait only after the spinning fast path failed.` → Mutex chỉ futex wait sau khi spin thất bại.
**Liên kết tiếng Hàn:** `퓨텍스`.

## 17. spinlock backoff /ˈspɪnˌlɑk ˈbækˌɔf/
**Part of speech:** noun
**Core meaning (English):** delaying or changing repeated lock polling to reduce contention and wasted processor cycles.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** spin có chiến lược chờ tăng dần thay vì đốt CPU liên tục.
**Grammar & collocations:** `spinlock-backoff strategy` — strategy; `insert an exponential delay` — chèn.
**Examples:** `Spinlock backoff reduced cache traffic when many workers competed for a short critical section.` → Backoff giảm traffic cache.
**Liên kết tiếng Hàn:** `스핀락 백오프`.

## 18. false sharing /fɔls ˈʃɛrɪŋ/
**Part of speech:** noun
**Core meaning (English):** performance degradation caused by independent variables occupying one cache line and invalidating each other's copies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến không liên quan nhưng chung cache line làm nhau invalidate.
**Grammar & collocations:** `false-sharing hotspot` — hotspot; `pad a cache line` — đệm.
**Examples:** `False sharing made per-thread counters scale worse than a single protected counter.` → False sharing làm counter từng thread scale tệ hơn.
**Liên kết tiếng Hàn:** `거짓 공유`.

## 19. cache-line ping-pong /kæʃ laɪn ˈpɪŋ pɔŋ/
**Part of speech:** noun
**Core meaning (English):** repeated movement of a modified cache line between cores that alternately write it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cache line chạy qua chạy lại giữa core ghi xen kẽ.
**Grammar & collocations:** `cache-line-ping-pong cost` — cost; `reduce cross-core writes` — giảm.
**Examples:** `Cache-line ping-pong dominated the counter benchmark once the thread count exceeded eight.` → Ping-pong chi phối benchmark khi hơn tám thread.
**Liên kết tiếng Hàn:** `캐시 라인 핑퐁`.

## 20. contention profile /kənˈtɛnʃən ˈproʊfaɪl/
**Part of speech:** noun
**Core meaning (English):** a measured distribution of how often and how long concurrent workers conflict over shared resources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** profile cho biết conflict xảy ra bao nhiêu và kéo dài bao lâu.
**Grammar & collocations:** `contention-profile measurement` — measurement; `characterize hotspot behavior` — đặc tính hóa.
**Examples:** `The contention profile showed that retries clustered around one shared allocator.` → Profile cho thấy retry tập trung ở allocator.
**Liên kết tiếng Hàn:** `경합 프로파일`.

## Review in context

A **lock-free algorithm** may provide **wait-free progress** through **compare-and-swap**, but it must address the **ABA problem** and safe **memory reclamation** with a **hazard pointer**, **epoch-based reclamation**, or **read-copy-update**. A proof identifies a **linearization point**. Blocking designs can suffer a **lock convoy** or **priority inversion**, while **transactional memory**, **hardware lock elision**, and **optimistic concurrency** speculate about conflicts. A **seqlock**, **futex**, or **spinlock backoff** changes waiting behavior. At the cache level, **false sharing** and **cache-line ping-pong** appear in a **contention profile**.

**Bản dịch tiếng Việt:** **Lock-free algorithm** có thể bảo đảm **wait-free progress** qua **compare-and-swap**, nhưng phải xử lý **ABA problem** và **memory reclamation** an toàn bằng **hazard pointer**, **epoch-based reclamation** hoặc **read-copy-update**. Proof xác định **linearization point**. Thiết kế blocking có thể gặp **lock convoy** hoặc **priority inversion**, còn **transactional memory**, **hardware lock elision** và **optimistic concurrency** dự đoán conflict. **Seqlock**, **futex** hoặc **spinlock backoff** thay đổi cách chờ. Ở mức cache, **false sharing** và **cache-line ping-pong** hiện trong **contention profile**.
