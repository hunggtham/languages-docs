# C2 Vocabulary — Stream processing and event-time semantics

This lesson follows an unbounded data stream from ingestion timestamps through windows, state, consistency, and elastic recovery.

Flow: **stream-processing topology → event time → processing time → ingestion time → watermark → out-of-order event → lateness bound → window trigger → tumbling window → sliding window → session window → windowed aggregation → state store → changelog stream → exactly-once processing → idempotent sink → backpressure → checkpoint barrier → rescaling → event-time join**.

## 1. stream-processing topology /striːm ˈprɑsɛsɪŋ təˈpɑlədʒi/
**Part of speech:** noun
**Core meaning (English):** the connected graph of operators through which an unbounded stream of records is transformed and delivered.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sơ đồ operator nối thành pipeline xử lý dữ liệu không giới hạn.
**Grammar & collocations:** `stream-processing-topology graph` — graph; `deploy a topology` — triển khai.
**Examples:** `The stream-processing topology joined orders with reference data before enrichment.` → Topology join order với reference trước enrich.
**Liên kết tiếng Hàn:** `스트림 처리 토폴로지`.

## 2. event time /ɪˈvɛnt taɪm/
**Part of speech:** noun
**Core meaning (English):** the timestamp at which an event actually occurred in the domain being modeled.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời điểm sự kiện thật sự xảy ra, không phải lúc hệ thống nhận.
**Grammar & collocations:** `event-time semantics` — semantics; `aggregate by event time` — gộp.
**Examples:** `Event time kept a delayed sensor reading in the correct historical window.` → Event time đưa reading trễ vào đúng window lịch sử.
**Liên kết tiếng Hàn:** `이벤트 시간`.

## 3. processing time /ˈprɑsɛsɪŋ taɪm/
**Part of speech:** noun
**Core meaning (English):** the system clock time at which a stream operator processes a record.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lúc operator thực sự xử lý record.
**Grammar & collocations:** `processing-time trigger` — trigger; `measure processing-time latency` — đo.
**Examples:** `A processing-time report changed when the consumer was paused, even though the events did not.` → Report theo processing time đổi khi consumer pause.
**Liên kết tiếng Hàn:** `처리 시간`.

## 4. ingestion time /ɪnˈdʒɛstʃən taɪm/
**Part of speech:** noun
**Core meaning (English):** the timestamp assigned when a record enters a streaming system or durable log.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lúc record bước vào hệ thống/log.
**Grammar & collocations:** `ingestion-time timestamp` — timestamp; `stamp a record on arrival` — đóng dấu.
**Examples:** `Ingestion time revealed the network delay between the device and the collector.` → Ingestion time lộ độ trễ network.
**Liên kết tiếng Hàn:** `수집 시간`.

## 5. watermark /ˈwɔtərˌmɑrk/
**Part of speech:** noun
**Core meaning (English):** a progress estimate indicating that the system expects few or no events earlier than a particular event-time position.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mốc báo hệ thống gần xử lý xong dữ liệu tới thời điểm nào.
**Grammar & collocations:** `watermark progression` — progression; `advance a watermark` — đẩy.
**Examples:** `The watermark advanced only after the slowest partition reported progress.` → Watermark chỉ tiến khi partition chậm nhất báo.
**Liên kết tiếng Hàn:** `워터마크`.

## 6. out-of-order event /aʊt əv ˈɔrdər ɪˈvɛnt/
**Part of speech:** noun
**Core meaning (English):** a record that arrives after another record with a later event-time timestamp.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event tới muộn dù timestamp cũ hơn event đã thấy.
**Grammar & collocations:** `out-of-order-event handling` — handling; `reorder late records` — sắp xếp.
**Examples:** `The operator kept a short buffer for out-of-order events from mobile clients.` → Operator giữ buffer ngắn cho event mobile tới lệch thứ tự.
**Liên kết tiếng Hàn:** `순서가 뒤바뀐 이벤트`.

## 7. lateness bound /ˈleɪtnəs baʊnd/
**Part of speech:** noun
**Core meaning (English):** the configured amount of event-time delay that a window will tolerate before treating a record as too late.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn trễ chấp nhận được cho event.
**Grammar & collocations:** `lateness-bound configuration` — configuration; `allow bounded lateness` — cho phép.
**Examples:** `A five-minute lateness bound covered normal cellular delays without keeping state forever.` → Bound năm phút phủ delay di động mà không giữ state mãi.
**Liên kết tiếng Hàn:** `지연 허용 한계`.

## 8. window trigger /ˈwɪndoʊ ˈtrɪɡər/
**Part of speech:** noun
**Core meaning (English):** a rule that decides when a window emits a partial or final result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule quyết định lúc nào window phát kết quả.
**Grammar & collocations:** `window-trigger policy` — policy; `fire a trigger` — kích hoạt.
**Examples:** `The window trigger emitted an early estimate before the watermark finalized the result.` → Trigger phát estimate sớm trước khi watermark chốt.
**Liên kết tiếng Hàn:** `윈도우 트리거`.

## 9. tumbling window /ˈtʌmbəlɪŋ ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** a fixed-size, non-overlapping event-time interval used to group records.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các khoảng cố định không chồng nhau.
**Grammar & collocations:** `tumbling-window count` — count; `partition into fixed windows` — chia.
**Examples:** `The tumbling window produced one independent sales total every five minutes.` → Window tạo một total độc lập mỗi năm phút.
**Liên kết tiếng Hàn:** `텀블링 윈도우`.

## 10. sliding window /ˈslaɪdɪŋ ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** a window that advances by a step smaller than its duration, causing neighboring windows to overlap.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** window trượt và chồng lên nhau.
**Grammar & collocations:** `sliding-window average` — average; `advance a window by one minute` — dịch.
**Examples:** `A sliding window smoothed the error rate over the previous ten minutes.` → Sliding window làm mượt error rate mười phút qua.
**Liên kết tiếng Hàn:** `슬라이딩 윈도우`.

## 11. session window /ˈsɛʃən ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** a dynamic window that groups events separated by no more than a configured period of inactivity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một session kéo dài tới khi có khoảng im lặng đủ lâu.
**Grammar & collocations:** `session-window gap` — gap; `close an inactive session` — đóng.
**Examples:** `The session window ended after the user's device was silent for thirty minutes.` → Session đóng sau ba mươi phút im lặng.
**Liên kết tiếng Hàn:** `세션 윈도우`.

## 12. windowed aggregation /ˈwɪndoʊd ˌæɡrəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** computing a summary such as a count, sum, or percentile separately for each time window.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tổng hợp theo từng khoảng thời gian.
**Grammar & collocations:** `windowed-aggregation state` — state; `compute a per-window percentile` — tính.
**Examples:** `Windowed aggregation calculated the ninety-ninth percentile of request latency.` → Aggregation tính percentile 99 của latency.
**Liên kết tiếng Hàn:** `윈도우 집계`.

## 13. state store /steɪt stɔr/
**Part of speech:** noun
**Core meaning (English):** durable or managed storage that keeps the intermediate state required by a stream operator.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nơi giữ state trung gian để operator tiếp tục và khôi phục.
**Grammar & collocations:** `state-store checkpoint` — checkpoint; `lookup keyed state` — tra.
**Examples:** `The state store retained per-customer totals when the operator restarted.` → State store giữ total khách hàng khi operator restart.
**Liên kết tiếng Hàn:** `상태 저장소`.

## 14. changelog stream /ˈtʃeɪndʒlɔɡ striːm/
**Part of speech:** noun
**Core meaning (English):** a stream of state updates that records how a materialized result changed over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stream ghi từng thay đổi của state/result.
**Grammar & collocations:** `changelog-stream topic` — topic; `replay state updates` — replay.
**Examples:** `The changelog stream rebuilt the materialized table after the local state was lost.` → Changelog dựng lại bảng materialized sau mất state local.
**Liên kết tiếng Hàn:** `변경 로그 스트림`.

## 15. exactly-once processing /ɪɡˈzæktli wʌns ˈprɑsɛsɪŋ/
**Part of speech:** noun
**Core meaning (English):** a processing guarantee that each logical input effect is reflected once in the intended result despite retries.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** retry không làm effect bị tính hai lần.
**Grammar & collocations:** `exactly-once-processing guarantee` — guarantee; `commit an atomic result` — commit.
**Examples:** `Exactly-once processing prevented a retried payment event from doubling the ledger entry.` → Exactly-once ngăn payment retry nhân đôi ledger.
**Liên kết tiếng Hàn:** `정확히 한 번 처리`.

## 16. idempotent sink /ˌaɪdəmpoʊˈtɛnt sɪŋk/
**Part of speech:** noun
**Core meaning (English):** an output destination where applying the same record more than once produces the same final effect as applying it once.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi lại cùng event nhiều lần nhưng kết quả cuối không đổi.
**Grammar & collocations:** `idempotent-sink key` — key; `deduplicate by event ID` — loại trùng.
**Examples:** `An idempotent sink made retry recovery safe even when the commit acknowledgement was lost.` → Sink idempotent giúp retry an toàn khi mất ack.
**Liên kết tiếng Hàn:** `멱등 싱크`.

## 17. backpressure /ˈbækˌprɛʃər/
**Part of speech:** noun
**Core meaning (English):** a signal that a downstream operator is overloaded and upstream producers must slow their emission.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** downstream quá tải, báo upstream giảm tốc.
**Grammar & collocations:** `backpressure signal` — signal; `propagate backpressure` — lan truyền.
**Examples:** `Backpressure kept the ingestion service from exhausting memory during a traffic burst.` → Backpressure ngăn ingestion hết memory.
**Liên kết tiếng Hàn:** `백프레셔`.

## 18. checkpoint barrier /ˈtʃɛkˌpɔɪnt ˈbæriər/
**Part of speech:** noun
**Core meaning (English):** a marker that flows through stream inputs to align a consistent snapshot of operator state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** marker chạy qua input để chụp state nhất quán.
**Grammar & collocations:** `checkpoint-barrier alignment` — alignment; `inject a barrier` — chèn.
**Examples:** `The checkpoint barrier waited for the slow input before completing the snapshot.` → Barrier chờ input chậm trước khi chụp xong.
**Liên kết tiếng Hàn:** `체크포인트 배리어`.

## 19. rescaling /ˌriːˈskeɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** changing the parallelism of a running stream job while preserving or redistributing its state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tăng/giảm worker mà vẫn chuyển state đúng.
**Grammar & collocations:** `rescaling operation` — operation; `redistribute keyed state` — phân phối.
**Examples:** `Rescaling added operators before the evening traffic peak and redistributed keyed state.` → Rescaling thêm operator trước peak và chia lại state.
**Liên kết tiếng Hàn:** `리 scaling`.

## 20. event-time join /ɪˈvɛnt taɪm dʒɔɪn/
**Part of speech:** noun
**Core meaning (English):** joining streams according to event timestamps and temporal validity rather than arrival order alone.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** join theo thời điểm sự kiện có hiệu lực, không chỉ theo lúc tới.
**Grammar & collocations:** `event-time-join condition` — condition; `match records within a temporal range` — ghép.
**Examples:** `The event-time join matched a delayed shipment update with the order state valid at that moment.` → Join ghép update giao hàng trễ với order state đúng thời điểm.
**Liên kết tiếng Hàn:** `이벤트 시간 조인`.

## Review in context

In a **stream-processing topology**, **event time**, **processing time**, and **ingestion time** answer different questions. A **watermark** estimates progress while an **out-of-order event** is handled within a **lateness bound**. A **window trigger** can emit results for a **tumbling window**, **sliding window**, or **session window**, producing a **windowed aggregation** backed by a **state store** and a **changelog stream**. **Exactly-once processing** often relies on an **idempotent sink**. **Backpressure** protects the pipeline, while a **checkpoint barrier** enables recovery and **rescaling**. An **event-time join** matches records according to when they were valid, not merely when they arrived.

**Bản dịch tiếng Việt:** Trong **stream-processing topology**, **event time**, **processing time** và **ingestion time** trả lời các câu hỏi khác nhau. **Watermark** ước tính tiến độ còn **out-of-order event** được xử lý trong **lateness bound**. **Window trigger** có thể phát kết quả cho **tumbling window**, **sliding window** hoặc **session window**, tạo **windowed aggregation** dựa trên **state store** và **changelog stream**. **Exactly-once processing** thường dựa vào **idempotent sink**. **Backpressure** bảo vệ pipeline, còn **checkpoint barrier** hỗ trợ khôi phục và **rescaling**. **Event-time join** ghép record theo lúc chúng có hiệu lực, không chỉ theo lúc đến.
