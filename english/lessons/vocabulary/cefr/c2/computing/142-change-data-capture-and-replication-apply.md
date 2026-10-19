# C2 Vocabulary — Change data capture and replication apply

This lesson follows a source mutation from log capture and initial loading through ordered application, backfill, and sink checkpoints.

Flow: **log miner → snapshot capture → initial load → change event → delete marker → update before image → update after image → transaction boundary → commit watermark → schema envelope → source position → capture lag → tombstone event → merge apply → upsert semantics → backfill stream → capture connector → change table → source log**.

## 1. log miner /lɒɡ ˈmaɪnər/
**Part of speech:** noun
**Core meaning (English):** a component that reads a database or system log and turns low-level records into data changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component đọc log database/system và biến record thấp thành change data.
**Grammar & collocations:** `log-miner checkpoint` — checkpoint; `decode a committed mutation` — giải mã.
**Examples:** `The log miner converted database log records into events for the reporting warehouse.` → Miner đổi log thành event cho warehouse.
**Liên kết tiếng Hàn:** `로그 마이너`.

## 2. snapshot capture /ˈsnæpʃɒt ˈkæptʃər/
**Part of speech:** noun
**Core meaning (English):** recording a consistent source state that seeds replication before incremental changes are applied.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi state source nhất quán làm nền trước khi apply change incremental.
**Grammar & collocations:** `snapshot-capture position` — position; `freeze a source view` — đóng băng.
**Examples:** `Snapshot capture copied the existing customers before the change stream started.` → Capture copy customer cũ trước stream.
**Liên kết tiếng Hàn:** `스냅샷 캡처`.

## 3. initial load /ɪˈnɪʃəl loʊd/
**Part of speech:** noun
**Core meaning (English):** the first bulk transfer of existing source data into a target before ongoing changes are synchronized.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lần chuyển bulk đầu data cũ vào target trước sync change.
**Grammar & collocations:** `initial-load window` — window; `seed a replica table` — seed.
**Examples:** `The initial load filled the target table before new orders were applied incrementally.` → Load đầu điền table trước order mới.
**Liên kết tiếng Hàn:** `초기 로드`.

## 4. change event /tʃeɪndʒ ɪˈvent/
**Part of speech:** noun
**Core meaning (English):** a structured message describing an insert, update, or delete in a source system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** message có cấu trúc mô tả insert, update hoặc delete ở source.
**Grammar & collocations:** `change-event envelope` — envelope; `publish a row mutation` — publish.
**Examples:** `The change event carried the account key and the new billing status.` → Event mang account key và status mới.
**Liên kết tiếng Hàn:** `변경 이벤트`.

## 5. delete marker /dɪˈliːt ˈmɑːrkər/
**Part of speech:** noun
**Core meaning (English):** a durable indication that a source record or object was deleted and should disappear from a replica.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** indication bền cho biết record/object bị xóa và phải biến mất ở replica.
**Grammar & collocations:** `delete-marker propagation` — lan truyền; `remove a replicated row` — xóa.
**Examples:** `The delete marker prevented the downstream index from resurrecting a canceled account.` → Marker ngăn index tái tạo account.
**Liên kết tiếng Hàn:** `삭제 마커`.

## 6. update before image /ˈʌpdeɪt bɪˈfɔːr ˈɪmɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the field values of a record immediately before an update is applied.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value field của record ngay trước update.
**Grammar & collocations:** `update-before-image payload` — payload; `compare old and new values` — so sánh.
**Examples:** `The update before image showed which address fields had actually changed.` → Before image cho thấy field address đổi.
**Liên kết tiếng Hàn:** `업데이트 전 이미지`.

## 7. update after image /ˈʌpdeɪt ˈæftər ˈɪmɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the field values of a record immediately after an update is applied.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value field của record ngay sau update.
**Grammar & collocations:** `update-after-image record` — record; `apply the new state` — áp dụng.
**Examples:** `The update after image gave the search index the customer's new preferred name.` → After image cho index tên mới.
**Liên kết tiếng Hàn:** `업데이트 후 이미지`.

## 8. transaction boundary /trænˈzækʃən ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** the point defining which source changes belong to one atomic transaction and should be applied together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới xác định change nào thuộc cùng transaction atomic.
**Grammar & collocations:** `transaction-boundary marker` — marker; `preserve atomic visibility` — giữ.
**Examples:** `The transaction boundary kept the order and payment changes together in the target.` → Boundary giữ order và payment cùng nhau.
**Liên kết tiếng Hàn:** `트랜잭션 경계`.

## 9. commit watermark /kəˈmɪt ˈwɔːtərmɑːrk/
**Part of speech:** noun
**Core meaning (English):** a source position through which all earlier committed changes are known to be durable or visible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vị trí source mà mọi change commit trước đó đã bền/visible.
**Grammar & collocations:** `commit-watermark advance` — tiến; `declare a safe replication point` — khai báo.
**Examples:** `The commit watermark advanced after the target acknowledged every event in the batch.` → Watermark tiến sau khi target ack batch.
**Liên kết tiếng Hàn:** `커밋 워터마크`.

## 10. schema envelope /ˈskiːmə ˈenvəloʊ/
**Part of speech:** noun
**Core meaning (English):** metadata surrounding a change payload that identifies its schema, version, and source context.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata bọc payload change, nêu schema, version và context source.
**Grammar & collocations:** `schema-envelope field` — field; `route a versioned event` — định tuyến.
**Examples:** `The schema envelope let the sink select the correct decoder for an older event.` → Envelope giúp sink chọn decoder đúng.
**Liên kết tiếng Hàn:** `스키마 봉투`.

## 11. source position /sɔːrs pəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** an offset, sequence, or log coordinate identifying where a capture process is reading in the source.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** offset/sequence/tọa độ log chỉ vị trí capture đang đọc source.
**Grammar & collocations:** `source-position checkpoint` — checkpoint; `resume from a saved offset` — tiếp tục.
**Examples:** `The source position allowed the connector to resume without skipping committed changes.` → Position giúp resume không bỏ change.
**Liên kết tiếng Hàn:** `소스 위치`.

## 12. capture lag /ˈkæptʃər læɡ/
**Part of speech:** noun
**Core meaning (English):** the delay between a source commit and the moment its change is captured and published.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ trễ giữa source commit và lúc change được capture/publish.
**Grammar & collocations:** `capture-lag metric` — metric; `detect a stalled log reader` — phát hiện.
**Examples:** `Capture lag grew when the log miner could not keep up with the write burst.` → Lag tăng khi miner không theo kịp write.
**Liên kết tiếng Hàn:** `캡처 지연`.

## 13. tombstone event /ˈtuːmstoʊn ɪˈvent/
**Part of speech:** noun
**Core meaning (English):** a change event representing deletion so downstream systems can remove a previously replicated value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event đại diện delete để hệ downstream bỏ value đã replicate.
**Grammar & collocations:** `tombstone-event retention` — lưu giữ; `propagate a deletion` — lan.
**Examples:** `The tombstone event remained long enough for every search replica to process the deletion.` → Event giữ đủ lâu cho replica xử lý.
**Liên kết tiếng Hàn:** `툼스톤 이벤트`.

## 14. merge apply /mɜːrd əˈplaɪ/
**Part of speech:** noun
**Core meaning (English):** applying a change by combining it with the target's current row or document state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** apply change bằng cách gộp với state hiện tại của target.
**Grammar & collocations:** `merge-apply rule` — rule; `combine partial updates` — gộp.
**Examples:** `Merge apply updated the phone field without erasing a newer email change.` → Apply gộp update phone mà giữ email mới.
**Liên kết tiếng Hàn:** `병합 적용`.

## 15. upsert semantics /ˈʌpsɜːrt sɪˈmæntɪks/
**Part of speech:** noun
**Core meaning (English):** the defined behavior for inserting a missing record or updating an existing one with the same key.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** behavior định nghĩa insert record thiếu hoặc update record cùng key.
**Grammar & collocations:** `upsert-semantics rule` — rule; `insert or update by key` — áp dụng.
**Examples:** `Upsert semantics created a customer when the first change arrived and updated it thereafter.` → Semantics tạo customer lúc đầu rồi update.
**Liên kết tiếng Hàn:** `업서트 의미`.

## 16. backfill stream /ˈbækfɪl striːm/
**Part of speech:** noun
**Core meaning (English):** a controlled stream of historical changes used to repair or populate a downstream system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stream change lịch sử có kiểm soát để sửa/điền hệ downstream.
**Grammar & collocations:** `backfill-stream throttle` — throttle; `replay a historical range` — replay.
**Examples:** `The backfill stream repaired the target after a connector outage without blocking new changes.` → Stream sửa target mà không chặn change mới.
**Liên kết tiếng Hàn:** `백필 스트림`.

## 17. capture connector /ˈkæptʃər kəˈnektər/
**Part of speech:** noun
**Core meaning (English):** a component that connects to a source log or change interface and publishes captured mutations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component nối source log/change interface và publish mutation.
**Grammar & collocations:** `capture-connector configuration` — config; `restart from a checkpoint` — restart.
**Examples:** `The capture connector filtered audit tables before publishing the change stream.` → Connector lọc table audit trước publish.
**Liên kết tiếng Hàn:** `캡처 커넥터`.

## 18. change table /tʃeɪndʒ ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** a table storing row-level changes for downstream consumers to read incrementally.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** table lưu change từng row để consumer downstream đọc incremental.
**Grammar & collocations:** `change-table retention` — retention; `query changes after a watermark` — truy.
**Examples:** `The change table retained row mutations until every warehouse consumer advanced.` → Table giữ mutation đến khi warehouse tiến.
**Liên kết tiếng Hàn:** `변경 테이블`.

## 19. source log /sɔːrs lɒɡ/
**Part of speech:** noun
**Core meaning (English):** an ordered record of source operations from which changes can be captured or reconstructed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record có thứ tự operation source để capture/reconstruct change.
**Grammar & collocations:** `source-log retention` — retention; `read committed operations` — đọc.
**Examples:** `The source log retained enough history for a new connector to initialize safely.` → Log đủ lịch sử cho connector mới.
**Liên kết tiếng Hàn:** `소스 로그`.

## 20. apply offset /əˈplaɪ ˈɒfset/
**Part of speech:** noun
**Core meaning (English):** the target position recording how far a replication consumer has successfully applied source changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vị trí target ghi consumer đã apply change source đến đâu.
**Grammar & collocations:** `apply-offset checkpoint` — checkpoint; `resume target application` — tiếp tục.
**Examples:** `The apply offset lagged behind the source position while the target index was rebuilding.` → Apply offset tụt khi target index rebuild.
**Liên kết tiếng Hàn:** `적용 오프셋`.

## Review in context

A **log miner** reads the source after **snapshot capture** and an **initial load**; each **change event** may carry a **delete marker**, an **update before image**, or an **update after image**. A **transaction boundary** preserves atomicity, a **commit watermark** marks safe progress, and a **schema envelope** identifies decoding. A **source position** exposes capture state, **capture lag** reveals delay, and a **tombstone event** propagates deletion. **Merge apply** and **upsert semantics** update the target; a **backfill stream** repairs history, a **capture connector** reads the source, a **change table** stores mutations, a **source log** preserves order, and an **apply offset** records target progress.

**Bản dịch tiếng Việt:** **Log miner** đọc source sau **snapshot capture** và **initial load**; mỗi **change event** có thể mang **delete marker**, **update before image** hoặc **update after image**. **Transaction boundary** giữ tính atomic, **commit watermark** đánh dấu tiến độ an toàn, còn **schema envelope** xác định decode. **Source position** cho biết trạng thái capture, **capture lag** lộ độ trễ, và **tombstone event** lan delete. **Merge apply** và **upsert semantics** update target; **backfill stream** sửa lịch sử, **capture connector** đọc source, **change table** lưu mutation, **source log** giữ thứ tự, còn **apply offset** ghi tiến độ target.
