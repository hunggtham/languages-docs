# C2 Vocabulary — Data lakehouse and open table formats

This lesson follows an analytical table from object storage and manifests through schema evolution, snapshots, pruning, lineage, and refresh.

Flow: **data lakehouse → open table format → manifest file → snapshot isolation table → partition evolution → schema-on-read → schema-on-write → file pruning → small-file problem → compaction strategy → data skipping → column statistics → table snapshot → metadata table → transaction log → catalog federation → object-store consistency → data lineage graph → incremental refresh → change feed**.

## 1. data lakehouse /ˈdeɪtə ˈleɪkhaʊs/
**Part of speech:** noun
**Core meaning (English):** an analytical architecture combining low-cost object storage with warehouse-like table management and transactions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiến trúc gộp object storage rẻ với quản lý table/transaction kiểu warehouse.
**Grammar & collocations:** `data-lakehouse architecture` — architecture; `govern an analytical table` — quản trị.
**Examples:** `The data lakehouse stored raw events and curated tables in the same object store.` → Lakehouse giữ raw và curated chung.
**Liên kết tiếng Hàn:** `데이터 레이크하우스`.

## 2. open table format /ˈoʊpən ˈteɪbəl ˈfɔːrmæt/
**Part of speech:** noun
**Core meaning (English):** a publicly implemented table specification that separates logical table behavior from one storage engine.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** specification công khai tách behavior table khỏi storage engine.
**Grammar & collocations:** `open-table-format reader` — reader; `interoperate across engines` — tương tác.
**Examples:** `The open table format let two query engines read the same governed dataset.` → Format cho hai engine đọc chung.
**Liên kết tiếng Hàn:** `오픈 테이블 형식`.

## 3. manifest file /ˈmæנɪfest faɪl/
**Part of speech:** noun
**Core meaning (English):** metadata listing the data files and statistics that belong to a table snapshot or partition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata liệt kê file data và statistic của snapshot/partition.
**Grammar & collocations:** `manifest-file entry` — entry; `enumerate a data file` — liệt kê.
**Examples:** `The manifest file allowed the planner to skip files outside the requested date range.` → Manifest giúp bỏ file ngoài range.
**Liên kết tiếng Hàn:** `매니페스트 파일`.

## 4. snapshot isolation table /ˈsnæpʃɒt ˌaɪsəˈleɪʃən ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** a table whose readers see a stable committed snapshot while writers create a newer version.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reader thấy snapshot ổn định trong khi writer tạo version mới.
**Grammar & collocations:** `snapshot-isolation-table reader` — reader; `commit a new table state` — commit.
**Examples:** `The snapshot isolation table kept a long report consistent during ingestion.` → Table giữ report nhất quán.
**Liên kết tiếng Hàn:** `스냅샷 격리 테이블`.

## 5. partition evolution /pɑːrˈtɪʃən ˌiːvəˈluːʃən/
**Part of speech:** noun
**Core meaning (English):** changing a table's partitioning scheme over time without rewriting all historical data immediately.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi cách partition theo thời gian mà không rewrite toàn bộ ngay.
**Grammar & collocations:** `partition-evolution rule` — rule; `add a new transform` — thêm.
**Examples:** `Partition evolution moved new data to a finer date transform while old files remained readable.` → Evolution giữ file cũ đọc được.
**Liên kết tiếng Hàn:** `파티션 진화`.

## 6. schema-on-read /ˈskiːmə ɒn riːd/
**Part of speech:** noun
**Core meaning (English):** applying or interpreting a data schema when records are queried rather than when they are written.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** áp dụng schema lúc read thay vì lúc write.
**Grammar & collocations:** `schema-on-read interpretation` — interpretation; `project a field at query time` — chiếu.
**Examples:** `Schema-on-read allowed analysts to explore raw events with different projections.` → Schema lúc đọc cho projection khác nhau.
**Liên kết tiếng Hàn:** `읽기 시 스키마`.

## 7. schema-on-write /ˈskiːmə ɒn raɪt/
**Part of speech:** noun
**Core meaning (English):** validating or shaping records against a defined schema before they are stored.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** validate/shape record theo schema trước khi ghi.
**Grammar & collocations:** `schema-on-write validation` — validation; `reject an incompatible field` — từ chối.
**Examples:** `Schema-on-write prevented an unexpected string from entering the numeric column.` → Schema lúc ghi chặn string sai.
**Liên kết tiếng Hàn:** `쓰기 시 스키마`.

## 8. file pruning /faɪl ˈpruːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** eliminating data files from a query plan using partition, manifest, or column statistics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loại file khỏi plan nhờ partition/metadata/statistic.
**Grammar & collocations:** `file-pruning predicate` — predicate; `avoid a remote read` — tránh.
**Examples:** `File pruning reduced a scan from thousands of objects to twelve.` → Pruning giảm scan còn 12 file.
**Liên kết tiếng Hàn:** `파일 가지치기`.

## 9. small-file problem /smɔːl faɪl ˈprɒbləm/
**Part of speech:** noun
**Core meaning (English):** performance and metadata overhead caused by storing a dataset as too many tiny files.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quá nhiều file nhỏ gây overhead metadata/performance.
**Grammar & collocations:** `small-file-problem mitigation` — mitigation; `combine tiny objects` — gộp.
**Examples:** `The small-file problem made listing and planning slower than reading the data.` → File nhỏ làm planning chậm.
**Liên kết tiếng Hàn:** `소형 파일 문제`.

## 10. compaction strategy /kəmˈpækʃən ˈstrætədʒi/
**Part of speech:** noun
**Core meaning (English):** a policy for merging data files, removing obsolete versions, and balancing write cost against read efficiency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy merge file, bỏ version cũ và cân bằng write/read.
**Grammar & collocations:** `compaction-strategy threshold` — threshold; `merge compatible files` — merge.
**Examples:** `The compaction strategy delayed large rewrites until enough small files accumulated.` → Strategy trì hoãn rewrite lớn.
**Liên kết tiếng Hàn:** `압축 전략`.

## 11. data skipping /ˈdeɪtə ˈskɪpɪŋ/
**Part of speech:** noun
**Core meaning (English):** avoiding reads of data regions whose recorded statistics cannot satisfy a query predicate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ vùng data mà statistic chắc chắn không match.
**Grammar & collocations:** `data-skipping metadata` — metadata; `skip a disjoint range` — bỏ.
**Examples:** `Data skipping ignored blocks whose maximum value was below the filter.` → Skipping bỏ block không đạt.
**Liên kết tiếng Hàn:** `데이터 건너뛰기`.

## 12. column statistics /ˈkɒləm stəˈtɪstɪks/
**Part of speech:** noun
**Core meaning (English):** summaries such as minimum, maximum, null count, or distinct count for a stored column region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** summary min/max/null/distinct của vùng column.
**Grammar & collocations:** `column-statistics footer` — footer; `estimate a predicate range` — ước tính.
**Examples:** `Column statistics enabled the engine to skip a file with no matching customer IDs.` → Statistic giúp bỏ file.
**Liên kết tiếng Hàn:** `열 통계`.

## 13. table snapshot /ˈteɪbəl ˈsnæpʃɒt/
**Part of speech:** noun
**Core meaning (English):** a versioned view of the files and metadata that constitute a table at one point in time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** view version của file/metadata tại một thời điểm.
**Grammar & collocations:** `table-snapshot identifier` — identifier; `read an historical version` — đọc.
**Examples:** `The table snapshot let the auditor reproduce last quarter's report.` → Snapshot giúp tái tạo report.
**Liên kết tiếng Hàn:** `테이블 스냅샷`.

## 14. metadata table /ˈmetədeɪtə ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** a queryable table exposing information about files, partitions, snapshots, or changes in another table.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** table query được về file, partition, snapshot và change.
**Grammar & collocations:** `metadata-table query` — query; `inspect a partition record` — kiểm tra.
**Examples:** `The metadata table showed which files were added by the last ingestion job.` → Table lộ file mới.
**Liên kết tiếng Hàn:** `메타데이터 테이블`.

## 15. transaction log /trænˈzækʃən lɒɡ/
**Part of speech:** noun
**Core meaning (English):** an ordered record of table changes used to construct snapshots and recover committed state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** log có thứ tự của change để dựng snapshot/recover.
**Grammar & collocations:** `transaction-log entry` — entry; `replay a committed action` — replay.
**Examples:** `The transaction log reconstructed the table after a writer crashed mid-commit.` → Log dựng lại table sau crash.
**Liên kết tiếng Hàn:** `트랜잭션 로그`.

## 16. catalog federation /ˈkætəlɒɡ ˌfedəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** coordinating metadata from multiple catalogs so engines can discover governed tables consistently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phối hợp metadata nhiều catalog để engine thấy table nhất quán.
**Grammar & collocations:** `catalog-federation layer` — layer; `resolve a shared table name` — resolve.
**Examples:** `Catalog federation exposed one governed dataset to both the warehouse and notebook engine.` → Federation cho hai engine thấy table.
**Liên kết tiếng Hàn:** `카탈로그 연합`.

## 17. object-store consistency /ˈɒbdʒɪkt stɔːr kənˈsɪstənsi/
**Part of speech:** noun
**Core meaning (English):** the guarantees governing when writes, listings, and reads become mutually visible in object storage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** guarantee thời điểm write/list/read object store thấy nhau.
**Grammar & collocations:** `object-store-consistency assumption` — assumption; `observe a newly written object` — thấy.
**Examples:** `Object-store consistency determined whether the reader could see the manifest immediately.` → Consistency quyết định manifest visible.
**Liên kết tiếng Hàn:** `객체 저장소 일관성`.

## 18. data lineage graph /ˈdeɪtə ˈlɪniɪdʒ ɡrɑːf/
**Part of speech:** noun
**Core meaning (English):** a graph showing how datasets, transformations, jobs, and reports derive from one another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph cho thấy dataset/report sinh ra từ transform/job nào.
**Grammar & collocations:** `data-lineage-graph edge` — edge; `trace a report dependency` — truy vết.
**Examples:** `The data lineage graph traced the dashboard metric to a raw event table.` → Graph truy metric về raw table.
**Liên kết tiếng Hàn:** `데이터 계보 그래프`.

## 19. incremental refresh /ˌɪnkrəˈmentəl rɪˈfreʃ/
**Part of speech:** noun
**Core meaning (English):** updating only the portion of a derived table or materialized result affected by new data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ update phần result bị data mới ảnh hưởng.
**Grammar & collocations:** `incremental-refresh watermark` — watermark; `recompute an affected partition` — tính lại.
**Examples:** `Incremental refresh updated yesterday's partition without rebuilding the entire report.` → Refresh chỉ tính partition hôm qua.
**Liên kết tiếng Hàn:** `증분 새로 고침`.

## 20. change feed /tʃeɪndʒ fiːd/
**Part of speech:** noun
**Core meaning (English):** a stream describing inserts, updates, and deletes applied to a table or dataset.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stream mô tả insert/update/delete của table.
**Grammar & collocations:** `change-feed consumer` — consumer; `process a deletion event` — xử lý.
**Examples:** `The change feed drove a search index and a downstream notification service.` → Feed cập nhật index và notification.
**Liên kết tiếng Hàn:** `변경 피드`.

## Review in context

A **data lakehouse** uses an **open table format** and a **manifest file** to provide **snapshot isolation table** behavior. **Partition evolution**, **schema-on-read**, and **schema-on-write** shape compatibility; **file pruning**, the **small-file problem**, a **compaction strategy**, **data skipping**, and **column statistics** shape performance. A **table snapshot**, **metadata table**, and **transaction log** support recovery, while **catalog federation** and **object-store consistency** govern discovery. A **data lineage graph**, **incremental refresh**, and **change feed** connect data to downstream users.

**Bản dịch tiếng Việt:** **Data lakehouse** dùng **open table format** và **manifest file** để cung cấp hành vi **snapshot isolation table**. **Partition evolution**, **schema-on-read** và **schema-on-write** định hình tương thích; **file pruning**, **small-file problem**, **compaction strategy**, **data skipping** và **column statistics** định hình performance. **Table snapshot**, **metadata table** và **transaction log** hỗ trợ recovery, còn **catalog federation** và **object-store consistency** quản lý discovery. **Data lineage graph**, **incremental refresh** và **change feed** nối data với người dùng sau.
