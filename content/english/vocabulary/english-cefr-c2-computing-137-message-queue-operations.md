# C2 Vocabulary — Message queue operations

This lesson follows a message from partitioning and production through consumer progress, retries, retention, and ordering guarantees.

Flow: **queue partition → consumer offset → retention horizon → compaction policy → consumer rebalance → assignment epoch → fetch batch → poll interval → visibility timeout → acknowledgement mode → redelivery count → backpressure threshold → lag alert → offset checkpoint → exactly-once transaction → producer idempotence → message key → ordering guarantee → consumer assignment → delivery retry**.

## 1. queue partition /kjuː pɑːrˈtɪʃən/
**Part of speech:** noun
**Core meaning (English):** an independently ordered slice of a queue that can be stored and consumed in parallel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần queue có thứ tự riêng, lưu và consume song song.
**Grammar & collocations:** `queue-partition leader` — leader; `append an event to a slice` — thêm.
**Examples:** `The queue partition kept account events ordered while other accounts were processed elsewhere.` → Partition giữ thứ tự event account.
**Liên kết tiếng Hàn:** `큐 파티션`.

## 2. consumer offset /kənˈsuːmər ˈɒfset/
**Part of speech:** noun
**Core meaning (English):** the position marking how far a consumer has read or acknowledged within a queue partition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vị trí ghi consumer đã đọc/ack đến đâu trong partition.
**Grammar & collocations:** `consumer-offset commit` — commit; `advance a read position` — tiến.
**Examples:** `The consumer offset advanced only after the invoice had been written to durable storage.` → Offset chỉ tiến sau khi invoice lưu bền.
**Liên kết tiếng Hàn:** `소비자 오프셋`.

## 3. retention horizon /rɪˈtenʃən həˈraɪzən/
**Part of speech:** noun
**Core meaning (English):** the oldest point in a queue's history that remains available for reading or replay.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mốc cũ nhất trong lịch sử queue còn đọc/replay được.
**Grammar & collocations:** `retention-horizon policy` — policy; `replay within ninety days` — replay.
**Examples:** `The retention horizon covered enough history to rebuild a search index after an outage.` → Horizon đủ lịch sử dựng lại index.
**Liên kết tiếng Hàn:** `보존 지평선`.

## 4. compaction policy /kəmˈpækʃən ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** rules deciding when older records for the same key may be removed in favor of a newer value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule quyết định khi bỏ record cũ cùng key và giữ value mới.
**Grammar & collocations:** `compaction-policy threshold` — ngưỡng; `retain the latest state` — giữ.
**Examples:** `The compaction policy kept the latest account status while removing obsolete updates.` → Policy giữ status mới nhất.
**Liên kết tiếng Hàn:** `압축 정책`.

## 5. consumer rebalance /kənˈsuːmər ˌriːˈbæləns/
**Part of speech:** noun
**Core meaning (English):** redistributing queue partitions when consumers join, leave, or change capacity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân phối lại partition khi consumer vào, rời hoặc đổi capacity.
**Grammar & collocations:** `consumer-rebalance pause` — pause; `assign partitions evenly` — gán.
**Examples:** `Consumer rebalance moved two partitions to the newly started worker.` → Rebalance chuyển hai partition cho worker mới.
**Liên kết tiếng Hàn:** `소비자 재균형`.

## 6. assignment epoch /əˈsaɪnmənt ˈiːpɒk/
**Part of speech:** noun
**Core meaning (English):** a generation number identifying the current partition assignment so stale consumers can be fenced.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số thế hệ nhận diện assignment hiện tại để chặn consumer cũ.
**Grammar & collocations:** `assignment-epoch token` — token; `reject a stale fetch` — từ chối.
**Examples:** `The broker rejected the fetch because the consumer's assignment epoch was obsolete.` → Broker từ chối fetch epoch cũ.
**Liên kết tiếng Hàn:** `할당 에포크`.

## 7. fetch batch /fetʃ bætʃ/
**Part of speech:** noun
**Core meaning (English):** a group of messages returned together in one consumer fetch operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm message trả cùng một lần fetch.
**Grammar & collocations:** `fetch-batch size` — kích thước; `amortize request overhead` — phân bổ.
**Examples:** `The fetch batch was increased when network latency became the main bottleneck.` → Batch tăng khi latency network là bottleneck.
**Liên kết tiếng Hàn:** `페치 배치`.

## 8. poll interval /poʊl ˈɪntərvəl/
**Part of speech:** noun
**Core meaning (English):** the time between successive requests by a consumer asking whether new messages are available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng giữa các lần consumer hỏi message mới.
**Grammar & collocations:** `poll-interval setting` — setting; `avoid an idle busy loop` — tránh.
**Examples:** `The poll interval was shortened for urgent alerts but lengthened for a low-volume audit queue.` → Interval ngắn cho alert, dài cho audit.
**Liên kết tiếng Hàn:** `폴 간격`.

## 9. visibility timeout /ˌvɪzəˈbɪləti ˈtaɪmaʊt/
**Part of speech:** noun
**Core meaning (English):** the period during which a delivered message is hidden from other consumers while one consumer attempts it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian message ẩn với consumer khác khi một consumer đang xử lý.
**Grammar & collocations:** `visibility-timeout renewal` — gia hạn; `prevent concurrent delivery` — ngăn.
**Examples:** `The worker renewed the visibility timeout while processing the large video job.` → Worker gia hạn timeout khi xử lý video.
**Liên kết tiếng Hàn:** `가시성 시간 초과`.

## 10. acknowledgement mode /əkˈnɒlɪdʒmənt moʊd/
**Part of speech:** noun
**Core meaning (English):** the rule defining when a consumer confirms successful handling of a message.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule xác định lúc consumer xác nhận xử lý message thành công.
**Grammar & collocations:** `acknowledgement-mode setting` — setting; `ack after durable write` — ack.
**Examples:** `The acknowledgement mode confirmed messages only after the downstream transaction committed.` → Mode ack sau transaction commit.
**Liên kết tiếng Hàn:** `승인 모드`.

## 11. redelivery count /ˌriːdɪˈlɪvəri kaʊnt/
**Part of speech:** noun
**Core meaning (English):** the number of times a message has been delivered again after unsuccessful or unconfirmed handling.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số lần message được giao lại sau xử lý lỗi/thiếu xác nhận.
**Grammar & collocations:** `redelivery-count limit` — giới hạn; `quarantine a repeatedly failing message` — cách ly.
**Examples:** `The redelivery count exceeded its limit, so the poison payload moved to quarantine.` → Count vượt limit nên payload bị cách ly.
**Liên kết tiếng Hàn:** `재전달 횟수`.

## 12. backpressure threshold /ˈbækpreʃər ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** a measured queue or processing limit at which producers must slow down.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngưỡng queue/processing khiến producer phải chậm lại.
**Grammar & collocations:** `backpressure-threshold signal` — signal; `throttle message production` — throttle.
**Examples:** `The backpressure threshold reduced ingestion before consumer memory was exhausted.` → Threshold giảm ingest trước khi hết memory.
**Liên kết tiếng Hàn:** `백프레셔 임계값`.

## 13. lag alert /læɡ əˈlɜːrt/
**Part of speech:** noun
**Core meaning (English):** an alert fired when a consumer falls too far behind the newest available message.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** alert bật khi consumer tụt quá xa message mới.
**Grammar & collocations:** `lag-alert threshold` — ngưỡng; `page the stream owner` — gọi.
**Examples:** `The lag alert fired when the analytics consumer missed two processing windows.` → Alert bật khi consumer bỏ hai window.
**Liên kết tiếng Hàn:** `지연 경보`.

## 14. offset checkpoint /ˈɒfset ˈtʃekpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a durable saved position from which a consumer can resume after restart or failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vị trí lưu bền để consumer resume sau restart/failure.
**Grammar & collocations:** `offset-checkpoint store` — store; `resume from the last safe position` — tiếp tục.
**Examples:** `The offset checkpoint prevented the restarted worker from rereading the entire partition.` → Checkpoint ngăn đọc lại toàn partition.
**Liên kết tiếng Hàn:** `오프셋 체크포인트`.

## 15. exactly-once transaction /ɪɡˈzæktli wʌns trænˈzækʃən/
**Part of speech:** noun
**Core meaning (English):** a transaction linking message consumption and output so one input has one effective committed result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transaction nối consume và output để mỗi input chỉ có một result commit hiệu lực.
**Grammar & collocations:** `exactly-once-transaction boundary` — boundary; `commit input and output together` — commit.
**Examples:** `The exactly-once transaction committed the offset and the billing update together.` → Transaction commit offset và billing cùng nhau.
**Liên kết tiếng Hàn:** `정확히 한 번 트랜잭션`.

## 16. producer idempotence /prəˈduːsər ˌɪdəmpoʊˈtəns/
**Part of speech:** noun
**Core meaning (English):** a producer property ensuring retries do not create duplicate records in the queue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** property producer ngăn retry tạo record duplicate.
**Grammar & collocations:** `producer-idempotence setting` — setting; `deduplicate a retried send` — loại.
**Examples:** `Producer idempotence prevented a network timeout from appending the event twice.` → Idempotence ngăn append hai lần.
**Liên kết tiếng Hàn:** `프로듀서 멱등성`.

## 17. message key /ˈmesɪdʒ kiː/
**Part of speech:** noun
**Core meaning (English):** a value used to route related messages to the same partition or preserve their relative order.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value định tuyến message liên quan vào cùng partition và giữ thứ tự.
**Grammar & collocations:** `message-key partitioning` — partition; `route by account` — định tuyến.
**Examples:** `The account ID served as the message key for all balance events.` → Account ID làm key balance.
**Liên kết tiếng Hàn:** `메시지 키`.

## 18. ordering guarantee /ˈɔːrdərɪŋ ˌɡærənˈtiː/
**Part of speech:** noun
**Core meaning (English):** a stated promise about the order in which related messages become visible to a consumer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cam kết thứ tự message liên quan hiện ra với consumer.
**Grammar & collocations:** `ordering-guarantee scope` — scope; `preserve per-key order` — giữ.
**Examples:** `The ordering guarantee applied within one account key, not across the entire queue.` → Guarantee chỉ trong một account.
**Liên kết tiếng Hàn:** `순서 보장`.

## 19. consumer assignment /kənˈsuːmər əˈsaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** the current mapping of queue partitions to a particular consumer or worker.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mapping hiện tại giữa partition và consumer/worker.
**Grammar & collocations:** `consumer-assignment record` — record; `inspect ownership changes` — kiểm tra.
**Examples:** `The consumer assignment gave the fast worker twice as many partitions as the slow worker.` → Assignment gán partition theo năng lực.
**Liên kết tiếng Hàn:** `소비자 할당`.

## 20. delivery retry /dɪˈlɪvəri riˈtraɪ/
**Part of speech:** noun
**Core meaning (English):** another attempt to deliver a message after timeout, failure, or missing acknowledgment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lần giao lại sau timeout, failure hoặc thiếu ack.
**Grammar & collocations:** `delivery-retry schedule` — lịch; `delay a repeated attempt` — trì hoãn.
**Examples:** `The delivery retry used exponential delay before contacting the unavailable consumer again.` → Retry dùng delay lũy thừa.
**Liên kết tiếng Hàn:** `전달 재시도`.

## Review in context

A **queue partition** preserves local order, while a **consumer offset** marks progress and a **retention horizon** limits replay. A **compaction policy** removes obsolete keyed state; **consumer rebalance** changes ownership under an **assignment epoch**. A **fetch batch** and **poll interval** shape throughput, a **visibility timeout** hides work temporarily, and an **acknowledgement mode** confirms success. **Redelivery count** controls failure, a **backpressure threshold** slows producers, and a **lag alert** signals delay. An **offset checkpoint** supports recovery; an **exactly-once transaction** joins input and output, **producer idempotence** prevents duplicates, a **message key** preserves locality, an **ordering guarantee** states scope, **consumer assignment** maps work, and **delivery retry** handles transient failure.

**Bản dịch tiếng Việt:** **Queue partition** giữ thứ tự cục bộ, **consumer offset** ghi tiến độ, còn **retention horizon** giới hạn replay. **Compaction policy** bỏ state cũ theo key; **consumer rebalance** đổi ownership dưới **assignment epoch**. **Fetch batch** và **poll interval** định hình throughput, **visibility timeout** ẩn việc tạm, còn **acknowledgement mode** xác nhận thành công. **Redelivery count** quản lý lỗi, **backpressure threshold** làm producer chậm, và **lag alert** báo trễ. **Offset checkpoint** hỗ trợ recovery; **exactly-once transaction** nối input/output, **producer idempotence** ngăn duplicate, **message key** giữ locality, **ordering guarantee** nêu scope, **consumer assignment** map việc, còn **delivery retry** xử lý lỗi tạm.
