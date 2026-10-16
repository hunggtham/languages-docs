# C2 Vocabulary — Stream-processing state and delivery semantics

This lesson follows an event through timestamp assignment, stateful operators, recovery, backpressure, and exactly-once delivery.

Flow: **stream-time semantics → event-time watermark → processing-time lag → out-of-order tolerance → stateful operator → operator state snapshot → exactly-once sink → idempotent producer → transactional offset → stream-table join → backpressure propagation → partition rebalance → consumer lag budget → late-data side output → state-store changelog → event-time timer → watermark holdback → operator chaining → barrier alignment → checkpointed state**.

## 1. stream-time semantics /striːm taɪm səˈmæntɪks/
**Part of speech:** noun
**Core meaning (English):** rules defining how a streaming system interprets event time, processing time, and their ordering relationship.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy tắc hiểu event time, processing time và thứ tự.
**Grammar & collocations:** `stream-time-semantics contract` — contract; `interpret an event timestamp` — diễn giải.
**Examples:** `Stream-time semantics determined whether the alert used event arrival or the measurement timestamp.` → Semantics quyết định alert dùng thời điểm nào.
**Liên kết tiếng Hàn:** `스트림 시간 의미론`.

## 2. event-time watermark /ɪˈvɛnt taɪm ˈwɔtərˌmɑrk/
**Part of speech:** noun
**Core meaning (English):** a progress marker indicating that events earlier than a chosen event-time bound are unlikely to arrive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mốc báo event cũ hơn gần như đã tới hết.
**Grammar & collocations:** `event-time-watermark progression` — progression; `advance the completeness bound` — tiến.
**Examples:** `The event-time watermark advanced only after the slow sensor reported its partition status.` → Watermark chỉ tiến sau sensor chậm báo trạng thái.
**Liên kết tiếng Hàn:** `이벤트 시간 워터마크`.

## 3. processing-time lag /ˈprɑsɛsɪŋ taɪm læɡ/
**Part of speech:** noun
**Core meaning (English):** the delay between an event's arrival and the time a processor handles it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trễ từ lúc event tới tới lúc xử lý.
**Grammar & collocations:** `processing-time-lag histogram` — histogram; `measure queue delay` — đo.
**Examples:** `Processing-time lag rose when the enrichment service exhausted its connection pool.` → Lag tăng khi service hết connection.
**Liên kết tiếng Hàn:** `처리 시간 지연`.

## 4. out-of-order tolerance /aʊt əv ˈɔrdər ˈtɑlərəns/
**Part of speech:** noun
**Core meaning (English):** the permitted amount of timestamp disorder that a streaming operator can absorb without misclassifying an event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức lệch thứ tự timestamp mà operator chịu được.
**Grammar & collocations:** `out-of-order-tolerance bound` — bound; `buffer delayed events` — giữ.
**Examples:** `Out-of-order tolerance covered the normal satellite delay but rejected a week-old replay.` → Tolerance đủ cho delay bình thường nhưng loại replay quá cũ.
**Liên kết tiếng Hàn:** `순서 뒤바뀜 허용치`.

## 5. stateful operator /ˈsteɪtfəl ˈɑpəˌreɪtər/
**Part of speech:** noun
**Core meaning (English):** a stream-processing component whose output depends on information retained from earlier events.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operator giữ state từ event trước để xử lý event sau.
**Grammar & collocations:** `stateful-operator instance` — instance; `update a keyed aggregate` — cập nhật.
**Examples:** `The stateful operator kept a rolling balance for each account key.` → Operator giữ balance lũy kế từng account.
**Liên kết tiếng Hàn:** `상태 저장 연산자`.

## 6. operator state snapshot /ˈɑpəˌreɪtər steɪt ˈsnæpˌʃɑt/
**Part of speech:** noun
**Core meaning (English):** a durable capture of an operator's in-memory state used for recovery or migration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** snapshot bền vững của state trong memory.
**Grammar & collocations:** `operator-state-snapshot format` — format; `restore keyed state` — khôi phục.
**Examples:** `The operator state snapshot let the job restart without replaying the entire topic.` → Snapshot cho phép restart không replay toàn topic.
**Liên kết tiếng Hàn:** `연산자 상태 스냅샷`.

## 7. exactly-once sink /ɪɡˈzæktli wʌns sɪŋk/
**Part of speech:** noun
**Core meaning (English):** an output endpoint that makes each logically committed result visible once despite retries or recovery.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sink đảm bảo kết quả logic chỉ xuất hiện một lần.
**Grammar & collocations:** `exactly-once-sink protocol` — protocol; `commit an output atomically` — commit.
**Examples:** `The exactly-once sink prevented a retry from charging the customer twice.` → Sink exactly-once ngăn thu tiền hai lần.
**Liên kết tiếng Hàn:** `정확히 한 번 싱크`.

## 8. idempotent producer /aɪdəmˈpoʊtənt prəˈduːsər/
**Part of speech:** noun
**Core meaning (English):** a producer whose repeated submission of the same logical message does not create additional effects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gửi lại cùng message không tạo effect mới.
**Grammar & collocations:** `idempotent-producer session` — session; `deduplicate a retry` — khử trùng.
**Examples:** `The idempotent producer retried after a timeout without creating a duplicate event.` → Producer retry không tạo event trùng.
**Liên kết tiếng Hàn:** `멱등 프로듀서`.

## 9. transactional offset /trænˈzækʃənəl ˈɔfˌsɛt/
**Part of speech:** noun
**Core meaning (English):** a consumed-position record committed atomically with the output side effect it represents.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** offset commit cùng transaction với output.
**Grammar & collocations:** `transactional-offset commit` — commit; `bind progress to output` — gắn.
**Examples:** `The transactional offset ensured recovery resumed after the last visible database write.` → Offset transaction đảm bảo resume đúng sau write cuối.
**Liên kết tiếng Hàn:** `트랜잭션 오프셋`.

## 10. stream-table join /striːm ˈteɪbəl dʒɔɪn/
**Part of speech:** noun
**Core meaning (English):** combining an event stream with a table or materialized view that supplies current reference data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghép event stream với bảng tham chiếu hiện tại.
**Grammar & collocations:** `stream-table-join cache` — cache; `enrich an event with account data` — bổ sung.
**Examples:** `The stream-table join attached the customer's risk tier before the alert was emitted.` → Join gắn risk tier trước alert.
**Liên kết tiếng Hàn:** `스트림-테이블 조인`.

## 11. backpressure propagation /ˈbækˌprɛʃər ˌprɑpəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** transmission of downstream capacity limits upstream so producers or operators slow their input.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tắc nghẽn downstream lan ngược để upstream chậm lại.
**Grammar & collocations:** `backpressure-propagation signal` — signal; `throttle an upstream source` — throttle.
**Examples:** `Backpressure propagation kept the broker from accepting data faster than the sink could commit it.` → Backpressure ngăn broker nhận quá nhanh.
**Liên kết tiếng Hàn:** `백프레셔 전파`.

## 12. partition rebalance /pɑrˈtɪʃən riːˈbæləns/
**Part of speech:** noun
**Core meaning (English):** redistribution of stream partitions among consumers after membership or capacity changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia lại partition giữa consumer.
**Grammar & collocations:** `partition-rebalance pause` — pause; `reassign consumer ownership` — phân công lại.
**Examples:** `Partition rebalance paused stateful operators until their snapshots were transferred.` → Rebalance tạm dừng operator stateful.
**Liên kết tiếng Hàn:** `파티션 리밸런스`.

## 13. consumer lag budget /kənˈsuːmər læɡ ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the maximum acceptable delay between the newest available event and a consumer's processed position.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức trễ tối đa consumer được phép.
**Grammar & collocations:** `consumer-lag-budget alert` — alert; `burn the latency budget` — dùng.
**Examples:** `The consumer lag budget was nearly exhausted during the regional failover.` → Budget lag gần hết khi failover vùng.
**Liên kết tiếng Hàn:** `소비자 지연 예산`.

## 14. late-data side output /leɪt ˈdeɪtə saɪd ˈaʊtˌpʊt/
**Part of speech:** noun
**Core meaning (English):** a separate output stream receiving events too late to enter the main window computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stream riêng chứa event đến quá muộn.
**Grammar & collocations:** `late-data-side-output topic` — topic; `reprocess delayed events` — xử lý lại.
**Examples:** `The late-data side output fed a reconciliation job instead of changing closed dashboards.` → Side output đưa event muộn vào reconciliation.
**Liên kết tiếng Hàn:** `지연 데이터 사이드 출력`.

## 15. state-store changelog /steɪt stɔr ˈtʃeɪndʒˌlɔɡ/
**Part of speech:** noun
**Core meaning (English):** an append-only record of updates used to rebuild a materialized state store.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** log append-only để dựng lại state store.
**Grammar & collocations:** `state-store-changelog topic` — topic; `replay state mutations` — replay.
**Examples:** `The state-store changelog rebuilt the account aggregate after the local disk was lost.` → Changelog dựng lại aggregate sau mất disk.
**Liên kết tiếng Hàn:** `상태 저장소 변경 로그`.

## 16. event-time timer /ɪˈvɛnt taɪm ˈtaɪmər/
**Part of speech:** noun
**Core meaning (English):** a timer that fires according to an event timestamp rather than the machine's wall clock.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timer chạy theo event time.
**Grammar & collocations:** `event-time-timer callback` — callback; `fire when a watermark passes` — kích hoạt.
**Examples:** `The event-time timer closed the session after the watermark crossed its inactivity boundary.` → Timer đóng session khi watermark vượt ranh.
**Liên kết tiếng Hàn:** `이벤트 시간 타이머`.

## 17. watermark holdback /ˈwɔtərˌmɑrk ˈhoʊldˌbæk/
**Part of speech:** noun
**Core meaning (English):** deliberate delay in advancing a watermark to allow slower partitions or sources to catch up.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ watermark lại để nguồn chậm bắt kịp.
**Grammar & collocations:** `watermark-holdback interval` — interval; `trade latency for completeness` — đánh đổi.
**Examples:** `Watermark holdback reduced false late-data classifications at the cost of alert latency.` → Holdback giảm phân loại late giả nhưng tăng trễ alert.
**Liên kết tiếng Hàn:** `워터마크 보류`.

## 18. operator chaining /ˈɑpəˌreɪtər ˈtʃeɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** fusing compatible operators into one execution chain to reduce serialization and scheduling overhead.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nối nhiều operator trong một chain chạy chung.
**Grammar & collocations:** `operator-chaining optimization` — optimization; `fuse adjacent stages` — hợp nhất.
**Examples:** `Operator chaining lowered overhead but made one stage's backpressure harder to isolate.` → Chaining giảm overhead nhưng khó cô lập backpressure.
**Liên kết tiếng Hàn:** `연산자 체이닝`.

## 19. barrier alignment /ˈbæriər əˈlaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** coordinating checkpoint barriers across input channels before a consistent snapshot is taken.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** căn barrier giữa các input channel để snapshot nhất quán.
**Grammar & collocations:** `barrier-alignment delay` — delay; `block one input briefly` — chặn.
**Examples:** `Barrier alignment slowed the job when one partition was receiving a burst of large records.` → Alignment chậm khi một partition nhận record lớn.
**Liên kết tiếng Hàn:** `배리어 정렬`.

## 20. checkpointed state /ˈtʃɛkˌpɔɪntɪd steɪt/
**Part of speech:** noun
**Core meaning (English):** operator state durably captured at a consistent point so processing can resume after failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** state được chụp bền vững để resume sau lỗi.
**Grammar & collocations:** `checkpointed-state restore` — restore; `resume from a consistent cut` — tiếp tục.
**Examples:** `Checkpointed state let the pipeline recover without duplicating committed notifications.` → State checkpoint giúp hồi phục không gửi notification trùng.
**Liên kết tiếng Hàn:** `체크포인트된 상태`.

## Review in context

**Stream-time semantics** use an **event-time watermark**, **processing-time lag**, and **out-of-order tolerance** to decide completeness. A **stateful operator** stores an **operator state snapshot** and writes to an **exactly-once sink** through an **idempotent producer** and **transactional offset**. A **stream-table join** enriches events, while **backpressure propagation**, **partition rebalance**, and a **consumer lag budget** shape capacity. Late records go to a **late-data side output**; a **state-store changelog** and **event-time timer** preserve behavior. **Watermark holdback**, **operator chaining**, **barrier alignment**, and **checkpointed state** complete recovery semantics.

**Bản dịch tiếng Việt:** **Stream-time semantics** dùng **event-time watermark**, **processing-time lag** và **out-of-order tolerance** để quyết định độ hoàn chỉnh. **Stateful operator** lưu **operator state snapshot** và ghi vào **exactly-once sink** qua **idempotent producer** cùng **transactional offset**. **Stream-table join** bổ sung dữ liệu, còn **backpressure propagation**, **partition rebalance** và **consumer lag budget** định hình capacity. Event muộn đi vào **late-data side output**; **state-store changelog** và **event-time timer** giữ hành vi. **Watermark holdback**, **operator chaining**, **barrier alignment** và **checkpointed state** hoàn tất semantics hồi phục.
