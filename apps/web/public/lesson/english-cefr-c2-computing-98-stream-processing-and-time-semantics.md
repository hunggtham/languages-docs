# C2 Vocabulary — Stream processing and time semantics

This lesson follows a streaming job from event timestamps and watermarks through windows, state, replay, joins, and backpressure.

Flow: **watermark timestamp → event-time window → processing-time window → late data → stateful stream operator → stream-table duality → log tailing → materialized stream → backpressure signal → watermark propagation → stream compaction → temporal join → replay offset → state snapshot → operator checkpoint → partition watermark → join retention → stream time semantics → event-time skew → window completeness**.

## 1. watermark timestamp /ˈwɔːtərmɑːrk ˈtaɪmstæmp/
**Part of speech:** noun
**Core meaning (English):** a timestamp summarizing how far event time is believed to have advanced for a stream.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timestamp tóm tắt event time đã tiến tới đâu.
**Grammar & collocations:** `watermark-timestamp update` — update; `advance an event frontier` — tiến.
**Examples:** `The watermark timestamp moved forward after all active partitions reported progress.` → Watermark tiến sau khi partition báo.
**Liên kết tiếng Hàn:** `워터마크 타임스탬프`.

## 2. event-time window /ɪˈvent taɪm ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** a window grouping records according to when events actually occurred rather than when they were processed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** window gom record theo lúc event xảy ra thật.
**Grammar & collocations:** `event-time-window boundary` — boundary; `aggregate a five-minute interval` — gộp.
**Examples:** `The event-time window kept a delayed sensor reading with the period it described.` → Window giữ reading trễ đúng period.
**Liên kết tiếng Hàn:** `이벤트 시간 창`.

## 3. processing-time window /ˈprɒsesɪŋ taɪm ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** a window grouping records according to when the streaming system receives or processes them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** window gom record theo lúc system nhận/xử lý.
**Grammar & collocations:** `processing-time-window trigger` — trigger; `close a system interval` — đóng.
**Examples:** `The processing-time window was simple but misordered events from an offline device.` → Window đơn giản nhưng sai thứ tự event.
**Liên kết tiếng Hàn:** `처리 시간 창`.

## 4. late data /leɪt ˈdeɪtə/
**Part of speech:** noun
**Core meaning (English):** an event that arrives after the system has progressed beyond its expected event-time position.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event tới sau khi system đã tiến qua event-time tương ứng.
**Grammar & collocations:** `late-data policy` — policy; `route a tardy event` — định tuyến.
**Examples:** `The late data was sent to a correction stream instead of changing the closed result.` → Data trễ vào stream sửa.
**Liên kết tiếng Hàn:** `지연 데이터`.

## 5. stateful stream operator /ˈsteɪtfəl striːm ˈɒpəreɪtər/
**Part of speech:** noun
**Core meaning (English):** a streaming operator that keeps state across records rather than processing each record independently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operator stream giữ state qua nhiều record.
**Grammar & collocations:** `stateful-stream-operator state` — state; `update a running aggregate` — cập nhật.
**Examples:** `The stateful stream operator tracked each account's rolling balance.` → Operator theo dõi balance lũy kế.
**Liên kết tiếng Hàn:** `상태 저장 스트림 연산자`.

## 6. stream-table duality /striːm ˈteɪbəl djuˈæləti/
**Part of speech:** noun
**Core meaning (English):** the view that a changing table can be represented as a stream of updates and a stream can materialize as a table.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** table đổi là stream update, stream có thể materialize thành table.
**Grammar & collocations:** `stream-table-duality model` — model; `materialize an update stream` — materialize.
**Examples:** `Stream-table duality let the service expose the current account table and its update history.` → Duality cho table hiện tại và history.
**Liên kết tiếng Hàn:** `스트림-테이블 이중성`.

## 7. log tailing /lɒɡ ˈteɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** continuously reading new records appended to a durable log.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** liên tục đọc record mới nối vào log bền.
**Grammar & collocations:** `log-tailing consumer` — consumer; `follow an append position` — theo dõi.
**Examples:** `Log tailing fed database changes into the search index within seconds.` → Tailing đưa change vào index nhanh.
**Liên kết tiếng Hàn:** `로그 테일링`.

## 8. materialized stream /məˈtɪəriəlaɪzd striːm/
**Part of speech:** noun
**Core meaning (English):** a persisted representation of derived stream results that can be queried or replayed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** representation bền của kết quả stream để query/replay.
**Grammar & collocations:** `materialized-stream topic` — topic; `persist a derived view` — ghi bền.
**Examples:** `The materialized stream served a low-latency dashboard without recomputing history.` → Stream phục vụ dashboard nhanh.
**Liên kết tiếng Hàn:** `구체화된 스트림`.

## 9. backpressure signal /ˈbækˌpreʃər ˈsɪɡnəl/
**Part of speech:** noun
**Core meaning (English):** an indication that a downstream component cannot consume records as quickly as they arrive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu downstream không tiêu record kịp tốc độ đến.
**Grammar & collocations:** `backpressure-signal propagation` — propagation; `slow an upstream producer` — làm chậm.
**Examples:** `The backpressure signal reduced ingestion rate before the state store ran out of memory.` → Signal giảm ingest trước khi hết memory.
**Liên kết tiếng Hàn:** `백프레셔 신호`.

## 10. watermark propagation /ˈwɔːtərmɑːrk ˌprɒpəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** carrying event-time progress through connected operators and partitions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truyền tiến độ event-time qua operator/partition.
**Grammar & collocations:** `watermark-propagation delay` — delay; `hold a downstream window` — giữ.
**Examples:** `Watermark propagation stalled because one partition stopped reporting timestamps.` → Propagation kẹt vì partition im.
**Liên kết tiếng Hàn:** `워터마크 전파`.

## 11. stream compaction /striːm kəmˈpækʃən/
**Part of speech:** noun
**Core meaning (English):** retaining only the latest relevant value for each key in an update stream.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ value mới nhất cho mỗi key trong stream update.
**Grammar & collocations:** `stream-compaction topic` — topic; `collapse superseded updates` — gộp.
**Examples:** `Stream compaction removed obsolete profile updates while preserving the latest state.` → Compaction bỏ update cũ.
**Liên kết tiếng Hàn:** `스트림 압축`.

## 12. temporal join /ˈtempərəl dʒɔɪn/
**Part of speech:** noun
**Core meaning (English):** joining records according to both key equality and a time relationship.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** join theo key và quan hệ thời gian.
**Grammar & collocations:** `temporal-join interval` — interval; `match a contemporaneous record` — khớp.
**Examples:** `The temporal join matched each purchase with the exchange rate active at that moment.` → Join khớp rate đúng thời điểm.
**Liên kết tiếng Hàn:** `시간적 조인`.

## 13. replay offset /ˈriːpleɪ ˈɒfset/
**Part of speech:** noun
**Core meaning (English):** a stored log position from which a consumer can resume or reconstruct processing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vị trí log lưu để consumer resume/reconstruct.
**Grammar & collocations:** `replay-offset commit` — commit; `resume from a known position` — tiếp tục.
**Examples:** `The replay offset let the job rebuild the materialized result after a code change.` → Offset giúp rebuild result.
**Liên kết tiếng Hàn:** `재생 오프셋`.

## 14. state snapshot /steɪt ˈsnæpʃɒt/
**Part of speech:** noun
**Core meaning (English):** a durable image of operator state used to restore a streaming job.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ảnh bền của state operator để khôi phục job.
**Grammar & collocations:** `state-snapshot interval` — interval; `restore keyed state` — khôi phục.
**Examples:** `The state snapshot shortened recovery after the worker was replaced.` → Snapshot rút recovery.
**Liên kết tiếng Hàn:** `상태 스냅샷`.

## 15. operator checkpoint /ˈɒpəreɪtər ˈtʃekpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a consistent marker recording operator state and input positions for fault recovery.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** marker nhất quán ghi state và input position để recovery.
**Grammar & collocations:** `operator-checkpoint barrier` — barrier; `commit a consistent cut` — commit.
**Examples:** `The operator checkpoint aligned state files with the corresponding input offsets.` → Checkpoint căn state với offset.
**Liên kết tiếng Hàn:** `연산자 체크포인트`.

## 16. partition watermark /pɑːrˈtɪʃən ˈwɔːtərmɑːrk/
**Part of speech:** noun
**Core meaning (English):** the event-time progress reported by one stream partition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tiến độ event-time của một partition.
**Grammar & collocations:** `partition-watermark minimum` — minimum; `merge partition progress` — gộp.
**Examples:** `The global window advanced only to the minimum partition watermark.` → Window theo watermark thấp nhất.
**Liên kết tiếng Hàn:** `파티션 워터마크`.

## 17. join retention /dʒɔɪn rɪˈtenʃən/
**Part of speech:** noun
**Core meaning (English):** the period for which a streaming join keeps unmatched records waiting for a possible partner.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian giữ record chưa match để chờ partner.
**Grammar & collocations:** `join-retention interval` — interval; `expire an unmatched row` — hết hạn.
**Examples:** `Join retention had to cover the maximum expected delay between the two event streams.` → Retention phải bao delay tối đa.
**Liên kết tiếng Hàn:** `조인 보존 기간`.

## 18. stream time semantics /striːm taɪm səˈmæntɪks/
**Part of speech:** noun
**Core meaning (English):** the rules defining how event time, processing time, and arrival order affect a streaming result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule quy định event time, processing time, arrival order ảnh hưởng result.
**Grammar & collocations:** `stream-time-semantics contract` — contract; `define result completeness` — định nghĩa.
**Examples:** `Stream time semantics determined whether a late correction could alter a published metric.` → Semantics quyết định correction trễ.
**Liên kết tiếng Hàn:** `스트림 시간 의미론`.

## 19. event-time skew /ɪˈvent taɪm skjuː/
**Part of speech:** noun
**Core meaning (English):** uneven progress or delay in event timestamps across partitions or sources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event timestamp tiến lệch giữa partition/source.
**Grammar & collocations:** `event-time-skew monitor` — monitor; `detect a lagging source` — phát hiện.
**Examples:** `Event-time skew kept the global window open while one device uploaded old readings.` → Skew giữ window mở.
**Liên kết tiếng Hàn:** `이벤트 시간 왜곡`.

## 20. window completeness /ˈwɪndoʊ kəmˈpliːtnəs/
**Part of speech:** noun
**Core meaning (English):** the system's confidence that a time window has received all records it is expected to contain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức tin rằng window đã nhận đủ record kỳ vọng.
**Grammar & collocations:** `window-completeness criterion` — criterion; `finalize a result` — chốt.
**Examples:** `Window completeness was declared only after the watermark passed the closing boundary.` → Completeness chỉ chốt sau watermark.
**Liên kết tiếng Hàn:** `윈도우 완전성`.

## Review in context

A **watermark timestamp** drives an **event-time window** differently from a **processing-time window**, especially when **late data** reaches a **stateful stream operator**. **Stream-table duality**, **log tailing**, and a **materialized stream** connect updates to queries; a **backpressure signal** and **watermark propagation** control progress. **Stream compaction**, a **temporal join**, and a **replay offset** manage history, while a **state snapshot**, **operator checkpoint**, and **partition watermark** support recovery. **Join retention**, **stream time semantics**, **event-time skew**, and **window completeness** define correctness.

**Bản dịch tiếng Việt:** **Watermark timestamp** điều khiển **event-time window** khác **processing-time window**, nhất là khi có **late data** tới **stateful stream operator**. **Stream-table duality**, **log tailing** và **materialized stream** nối update với query; **backpressure signal** và **watermark propagation** kiểm soát tiến độ. **Stream compaction**, **temporal join** và **replay offset** quản lý history, còn **state snapshot**, **operator checkpoint** và **partition watermark** hỗ trợ recovery. **Join retention**, **stream time semantics**, **event-time skew** và **window completeness** định nghĩa correctness.
