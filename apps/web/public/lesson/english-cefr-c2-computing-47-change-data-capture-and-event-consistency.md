# C2 Vocabulary — Change data capture and event consistency

This lesson follows a database mutation from commit ordering through capture, replay, schema evolution, and downstream materialization.

Flow: **change data capture → log-based CDC → snapshot extraction → schema evolution → tombstone record → transaction ordering → commit timestamp → low-water mark → high-water mark → exactly-once delivery → idempotent consumer → outbox pattern → dual-write anomaly → change event envelope → before-image → after-image → source offset → connector checkpoint → backfill replay → downstream materialization**.

## 1. change data capture /tʃeɪndʒ ˈdeɪtə ˈkæptʃər/
**Part of speech:** noun
**Core meaning (English):** recording inserts, updates, and deletes from a source system so downstream systems can react to data changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bắt các thay đổi dữ liệu để hệ thống khác đồng bộ.
**Grammar & collocations:** `change-data-capture pipeline` — pipeline; `capture row mutations` — bắt.
**Examples:** `Change data capture propagated account updates without polling the entire table.` → CDC truyền update mà không quét cả bảng.
**Liên kết tiếng Hàn:** `변경 데이터 캡처`.

## 2. log-based CDC /lɔɡ beɪst siː diː siː/
**Part of speech:** noun
**Core meaning (English):** change capture that reads a database's durable transaction log instead of relying on application-level notifications.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đọc transaction log bền vững để bắt thay đổi.
**Grammar & collocations:** `log-based-CDC connector` — connector; `tail a transaction log` — theo dõi.
**Examples:** `Log-based CDC preserved changes made by legacy clients that emitted no events.` → CDC từ log bắt được thay đổi của client cũ.
**Liên kết tiếng Hàn:** `로그 기반 CDC`.

## 3. snapshot extraction /ˈsnæpˌʃɑt ɪkˈstrækʃən/
**Part of speech:** noun
**Core meaning (English):** an initial copy of existing source data taken before incremental changes are streamed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chụp dữ liệu ban đầu trước khi stream phần thay đổi.
**Grammar & collocations:** `snapshot-extraction phase` — phase; `copy a consistent baseline` — sao chép.
**Examples:** `Snapshot extraction loaded historical orders before the connector began reading new log positions.` → Snapshot nạp order cũ trước khi đọc log mới.
**Liên kết tiếng Hàn:** `스냅샷 추출`.

## 4. schema evolution /ˈskiːmə ˌɛvəˈluːʃən/
**Part of speech:** noun
**Core meaning (English):** controlled change to the fields, types, or structure of data events over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** schema đổi dần nhưng consumer cũ vẫn có thể xử lý.
**Grammar & collocations:** `schema-evolution rule` — rule; `add a backward-compatible field` — thêm.
**Examples:** `Schema evolution added a nullable currency field without breaking older consumers.` → Evolution thêm field nullable không phá consumer cũ.
**Liên kết tiếng Hàn:** `스키마 진화`.

## 5. tombstone record /ˈtuːmstoʊn ˈrɛkərd/
**Part of speech:** noun
**Core meaning (English):** a change event marking that a previously existing key or record has been deleted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record đặc biệt đánh dấu xóa key.
**Grammar & collocations:** `tombstone-record retention` — retention; `propagate a deletion marker` — truyền.
**Examples:** `The tombstone record removed the customer from the downstream materialized view.` → Tombstone xóa customer khỏi view.
**Liên kết tiếng Hàn:** `툼스톤 레코드`.

## 6. transaction ordering /trænˈzækʃən ˈɔrdərɪŋ/
**Part of speech:** noun
**Core meaning (English):** preserving the order in which committed source transactions became visible when their changes are emitted downstream.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ thứ tự commit để consumer thấy state đúng.
**Grammar & collocations:** `transaction-ordering guarantee` — guarantee; `emit changes in commit order` — phát.
**Examples:** `Transaction ordering prevented a balance update from arriving before the account creation.` → Ordering ngăn update đến trước create.
**Liên kết tiếng Hàn:** `트랜잭션 순서화`.

## 7. commit timestamp /kəˈmɪt ˈtaɪmˌstæmp/
**Part of speech:** noun
**Core meaning (English):** the time or logical marker assigned when a transaction becomes durable and visible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mốc transaction commit bền vững.
**Grammar & collocations:** `commit-timestamp ordering` — ordering; `compare transaction visibility` — so sánh.

**Examples:** `The commit timestamp let the connector order changes from concurrent writers.` → Commit timestamp giúp connector sắp xếp writer đồng thời.
**Liên kết tiếng Hàn:** `커밋 타임스탬프`.

## 8. low-water mark /loʊ ˈwɔtər mɑrk/
**Part of speech:** noun
**Core meaning (English):** a progress marker below which all relevant source changes are known to have been captured or processed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mốc thấp bảo đảm phần trước đã được xử lý.
**Grammar & collocations:** `low-water-mark advancement` — advancement; `declare a prefix complete` — xác nhận.
**Examples:** `The low-water mark advanced after every partition acknowledged the snapshot boundary.` → Low-water mark tiến sau khi partition xác nhận.
**Liên kết tiếng Hàn:** `로우 워터마크`.

## 9. high-water mark /haɪ ˈwɔtər mɑrk/
**Part of speech:** noun
**Core meaning (English):** the latest source position or event boundary that a capture process has observed or published.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mốc cao nhất connector đã thấy hoặc phát.
**Grammar & collocations:** `high-water-mark offset` — offset; `publish the latest boundary` — công bố.
**Examples:** `The high-water mark showed that the connector was still several minutes behind the source.` → High-water mark cho thấy connector trễ vài phút.
**Liên kết tiếng Hàn:** `하이 워터마크`.

## 10. exactly-once delivery /ɪɡˈzæktli wʌns dɪˈlɪvəri/
**Part of speech:** noun
**Core meaning (English):** a delivery guarantee in which each logical change produces one downstream effect despite retries or recovery.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi change tạo đúng một effect dù retry.
**Grammar & collocations:** `exactly-once-delivery contract` — contract; `commit an output atomically` — commit.
**Examples:** `Exactly-once delivery prevented a replayed update from doubling the inventory count.` → Exactly-once ngăn replay nhân đôi inventory.
**Liên kết tiếng Hàn:** `정확히 한 번 전달`.

## 11. idempotent consumer /ˌaɪdəmpoʊˈtɛnt kənˈsuːmər/
**Part of speech:** noun
**Core meaning (English):** a consumer that can apply the same change repeatedly without changing the final result beyond the first application.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** consumer nhận lại event vẫn cho state cuối giống nhau.
**Grammar & collocations:** `idempotent-consumer key` — key; `deduplicate by event identity` — loại trùng.
**Examples:** `The idempotent consumer used the source offset to ignore a duplicate delivery.` → Consumer dùng offset bỏ delivery trùng.
**Liên kết tiếng Hàn:** `멱등 소비자`.

## 12. outbox pattern /ˈaʊtˌbɑks ˈpætərn/
**Part of speech:** noun
**Core meaning (English):** a design that writes a business change and its pending event to the same local transaction before a relay publishes the event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi data và event chung transaction rồi relay phát.
**Grammar & collocations:** `outbox-pattern relay` — relay; `publish a pending event` — phát.
**Examples:** `The outbox pattern avoided losing an event after the order transaction committed.` → Outbox tránh mất event sau commit order.
**Liên kết tiếng Hàn:** `아웃박스 패턴`.

## 13. dual-write anomaly /ˈduəl raɪt əˈnɑməli/
**Part of speech:** noun
**Core meaning (English):** inconsistency caused when an application writes a database and an external event system separately without an atomic boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi hai nơi riêng có thể một nơi thành công, nơi kia thất bại.
**Grammar & collocations:** `dual-write-anomaly mitigation` — mitigation; `avoid an inconsistent publish` — tránh.
**Examples:** `The dual-write anomaly left the database updated while the notification topic remained empty.` → Anomaly làm database đổi nhưng topic trống.
**Liên kết tiếng Hàn:** `이중 쓰기 이상`.

## 14. change event envelope /tʃeɪndʒ ɪˈvɛnt ˈɛnvəˌloʊp/
**Part of speech:** noun
**Core meaning (English):** the standardized wrapper containing a change payload, source metadata, operation type, and ordering information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vỏ event chứa payload, source, operation và metadata.
**Grammar & collocations:** `change-event-envelope schema` — schema; `deserialize event metadata` — giải mã.
**Examples:** `The change event envelope carried the table name, operation, commit timestamp, and payload.` → Envelope chứa bảng, operation, timestamp và payload.
**Liên kết tiếng Hàn:** `변경 이벤트 봉투`.

## 15. before-image /bɪˈfɔr ˈɪmɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the values of a record before a captured update or delete occurred.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ảnh chụp row trước khi đổi hoặc xóa.
**Grammar & collocations:** `before-image field` — field; `include prior values` — bao gồm.
**Examples:** `The before-image allowed the audit consumer to reconstruct which address had been replaced.` → Before-image cho biết địa chỉ cũ.
**Liên kết tiếng Hàn:** `변경 전 이미지`.

## 16. after-image /ˈæftər ˈɪmɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the values of a record after a captured update has been applied.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ảnh chụp row sau khi đổi.
**Grammar & collocations:** `after-image payload` — payload; `publish the new state` — phát.
**Examples:** `The after-image let the search index update without querying the source database.` → After-image giúp index đổi mà không query nguồn.
**Liên kết tiếng Hàn:** `변경 후 이미지`.

## 17. source offset /sɔrs ˈɔfˌsɛt/
**Part of speech:** noun
**Core meaning (English):** a position identifying how far a capture reader has consumed a source log or change stream.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vị trí reader đã đọc tới đâu trong log.
**Grammar & collocations:** `source-offset commit` — commit; `resume from an offset` — tiếp tục.
**Examples:** `The connector stored the source offset before acknowledging the downstream batch.` → Connector lưu offset trước khi ack batch.
**Liên kết tiếng Hàn:** `소스 오프셋`.

## 18. connector checkpoint /kəˈnɛktər ˈtʃɛkˌpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** durable state recording the source position and transformation progress needed to resume a capture connector.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** checkpoint để connector resume đúng chỗ sau restart.
**Grammar & collocations:** `connector-checkpoint store` — store; `persist capture progress` — lưu.
**Examples:** `The connector checkpoint prevented the restart from rescanning the entire transaction log.` → Checkpoint tránh đọc lại toàn log.
**Liên kết tiếng Hàn:** `커넥터 체크포인트`.

## 19. backfill replay /ˈbækˌfɪl riˈpleɪ/
**Part of speech:** noun
**Core meaning (English):** replaying historical changes to populate a new consumer or repair a downstream state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phát lại lịch sử để lấp dữ liệu hoặc sửa state.
**Grammar & collocations:** `backfill-replay window` — window; `rebuild a historical projection` — dựng lại.
**Examples:** `Backfill replay rebuilt the analytics table before live events were enabled.` → Replay dựng bảng analytics trước event live.
**Liên kết tiếng Hàn:** `백필 재생`.

## 20. downstream materialization /ˈdaʊnstriːm məˌtɪəriəlaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** constructing a queryable downstream view, index, or store from a stream of source changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến stream change thành view/index/store dùng được.
**Grammar & collocations:** `downstream-materialization job` — job; `materialize a read model` — dựng.
**Examples:** `Downstream materialization produced a search view optimized for customer lookup.` → Materialization tạo view search tối ưu.
**Liên kết tiếng Hàn:** `하류 구체화`.

## Review in context

**Change data capture** may use **log-based CDC** after a **snapshot extraction**, while **schema evolution** and a **tombstone record** preserve meaning as data changes. **Transaction ordering**, a **commit timestamp**, a **low-water mark**, and a **high-water mark** describe progress. **Exactly-once delivery** and an **idempotent consumer** reduce replay risk; the **outbox pattern** avoids a **dual-write anomaly**. A **change event envelope** may contain a **before-image** and **after-image**. The **source offset** and **connector checkpoint** support recovery, while **backfill replay** repairs history before **downstream materialization**.

**Bản dịch tiếng Việt:** **Change data capture** có thể dùng **log-based CDC** sau **snapshot extraction**, còn **schema evolution** và **tombstone record** giữ ý nghĩa khi data đổi. **Transaction ordering**, **commit timestamp**, **low-water mark** và **high-water mark** mô tả tiến độ. **Exactly-once delivery** và **idempotent consumer** giảm rủi ro replay; **outbox pattern** tránh **dual-write anomaly**. **Change event envelope** có thể chứa **before-image** và **after-image**. **Source offset** và **connector checkpoint** hỗ trợ recovery, còn **backfill replay** sửa lịch sử trước **downstream materialization**.
