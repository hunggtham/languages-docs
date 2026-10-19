# C2 Vocabulary — Database storage engines and recovery

This lesson follows a database write from pages and indexes through compaction, visibility, checkpoints, replication, and recovery.

Flow: **page eviction → B-tree split → log-structured merge tree → compaction debt → SSTable → bloom filter → read amplification → write rewrite overhead → storage engine → MVCC visibility → vacuum process → dead tuple → index-only scan → query plan cache → transaction epoch → replication slot → hot partition → checkpoint fence → write stall → page checksum**.

## 1. page eviction /peɪdʒ ɪˈvɪkʃən/
**Part of speech:** noun
**Core meaning (English):** removing a database page from memory to make room for another page.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đẩy page khỏi memory để nhường chỗ page khác.
**Grammar & collocations:** `page-eviction policy` — policy; `evict a cold page` — đẩy ra.
**Examples:** `Page eviction favored clean pages so the engine avoided an immediate disk write.` → Eviction ưu tiên page sạch.
**Liên kết tiếng Hàn:** `페이지 축출`.

## 2. B-tree split /ˈbiː triː splɪt/
**Part of speech:** noun
**Core meaning (English):** dividing a full tree node into smaller nodes while preserving sorted index order.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia node đầy thành node nhỏ mà giữ thứ tự index.
**Grammar & collocations:** `B-tree-split cascade` — cascade; `rebalance an index page` — cân bằng.
**Examples:** `The B-tree split propagated to the parent after a burst of sequential inserts.` → Split lan lên parent.
**Liên kết tiếng Hàn:** `B-트리 분할`.

## 3. log-structured merge tree /lɒɡ ˈstrʌktʃərd mɜːrdʒ triː/
**Part of speech:** noun
**Core meaning (English):** a storage structure that buffers writes and merges sorted immutable files over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấu trúc buffer write rồi merge file sorted bất biến.
**Grammar & collocations:** `log-structured-merge-tree level` — level; `flush a memtable` — ghi.
**Examples:** `The log-structured merge tree absorbed random writes before organizing them into sorted runs.` → LSM hấp thụ write ngẫu nhiên.
**Liên kết tiếng Hàn:** `로그 구조 병합 트리`.

## 4. compaction debt /kəmˈpækʃən det/
**Part of speech:** noun
**Core meaning (English):** accumulated cleanup work caused by obsolete versions and overlapping storage files.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công việc dọn dẹp tích lũy do version cũ và file chồng lấn.
**Grammar & collocations:** `compaction-debt threshold` — threshold; `repay cleanup work` — xử lý.
**Examples:** `Compaction debt increased read latency after the write-heavy import.` → Debt tăng làm read chậm.
**Liên kết tiếng Hàn:** `압축 부채`.

## 5. SSTable /ˈes es ˈtiːeɪbəl/
**Part of speech:** noun
**Core meaning (English):** an immutable sorted table file used by an LSM-style storage engine.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** file table sorted bất biến trong storage LSM.
**Grammar & collocations:** `SSTable index block` — block; `merge sorted tables` — merge.
**Examples:** `The reader opened the newest SSTable whose key range could contain the record.` → Reader mở SSTable phù hợp.
**Liên kết tiếng Hàn:** `SSTable`.

## 6. bloom filter /bluːm ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a compact probabilistic structure that quickly rules out keys that are definitely absent.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấu trúc xác suất nhỏ giúp loại key chắc chắn không có.
**Grammar & collocations:** `bloom-filter false positive` — false positive; `test key membership` — kiểm tra.
**Examples:** `The bloom filter skipped most SSTables that could not contain the requested key.` → Filter bỏ qua nhiều SSTable.
**Liên kết tiếng Hàn:** `블룸 필터`.

## 7. read amplification /riːd ˌæmplɪfɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** extra physical reading required to answer one logical read request.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số đọc vật lý thêm cho một read logic.
**Grammar & collocations:** `read-amplification ratio` — ratio; `reduce scattered reads` — giảm.
**Examples:** `Read amplification rose when a lookup had to inspect many overlapping files.` → Amplification tăng khi đọc nhiều file.
**Liên kết tiếng Hàn:** `읽기 증폭`.

## 8. write rewrite overhead /raɪt ˈriːraɪt ˈoʊvərhed/
**Part of speech:** noun
**Core meaning (English):** extra physical writing caused by repeatedly rewriting data beyond the original logical write.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số write vật lý thêm do rewrite data.
**Grammar & collocations:** `write-rewrite-overhead factor` — factor; `rewrite an immutable run` — ghi lại.
**Examples:** `Write rewrite overhead consumed the SSD endurance budget during aggressive compaction.` → Overhead tiêu hao SSD.
**Liên kết tiếng Hàn:** `쓰기 재작성 오버헤드`.

## 9. storage engine /ˈstɔːrɪdʒ ˈendʒɪn/
**Part of speech:** noun
**Core meaning (English):** the database subsystem that organizes records, indexes, pages, writes, and recovery on persistent storage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** subsystem quản lý record, index, page, write và recovery.
**Grammar & collocations:** `storage-engine format` — format; `persist a record` — ghi bền.
**Examples:** `The storage engine exposed a sequential scan and a transactional key-value interface.` → Engine cung cấp scan và key-value.
**Liên kết tiếng Hàn:** `스토리지 엔진`.

## 10. MVCC visibility /ˌem viː siː ˈsiː vɪˈzɪbɪləti/
**Part of speech:** noun
**Core meaning (English):** the rule deciding which row version a transaction is allowed to see under multi-version concurrency control.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule quyết định transaction thấy version row nào.
**Grammar & collocations:** `MVCC-visibility check` — check; `hide an uncommitted version` — ẩn.
**Examples:** `MVCC visibility let the report read a stable version while another transaction updated the row.` → Visibility giữ report ổn định.
**Liên kết tiếng Hàn:** `MVCC 가시성`.

## 11. vacuum process /ˈvækjuːm ˈprɒses/
**Part of speech:** noun
**Core meaning (English):** background work that reclaims obsolete row versions and updates storage metadata.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process nền thu hồi version row cũ và cập nhật metadata.
**Grammar & collocations:** `vacuum-process lag` — lag; `reclaim dead storage` — thu hồi.
**Examples:** `The vacuum process fell behind after a bulk update created millions of obsolete versions.` → Vacuum không theo kịp.
**Liên kết tiếng Hàn:** `진공 프로세스`.

## 12. dead tuple /ded ˈtuːpəl/
**Part of speech:** noun
**Core meaning (English):** an obsolete row version that no active transaction can still need.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** version row cũ không transaction nào cần nữa.
**Grammar & collocations:** `dead-tuple count` — count; `remove an obsolete version` — xóa.
**Examples:** `Dead tuples occupied space until the cleanup worker reclaimed their pages.` → Tuple cũ chiếm chỗ.
**Liên kết tiếng Hàn:** `죽은 튜플`.

## 13. index-only scan /ˈɪndeks ˈoʊnli skæn/
**Part of speech:** noun
**Core meaning (English):** a query plan that answers from index data without fetching the base table rows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** plan trả lời chỉ từ index, không đọc row gốc.
**Grammar & collocations:** `index-only-scan eligibility` — eligibility; `cover a projected column` — bao phủ.
**Examples:** `The index-only scan avoided heap access for the narrow reporting query.` → Scan tránh đọc heap.
**Liên kết tiếng Hàn:** `인덱스 전용 스캔`.

## 14. query plan cache /ˈkwɪəri plæn kæʃ/
**Part of speech:** noun
**Core meaning (English):** stored compiled query plans that can be reused for later executions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cache lưu plan query đã compile để dùng lại.
**Grammar & collocations:** `query-plan-cache invalidation` — invalidation; `reuse a prepared plan` — dùng lại.
**Examples:** `The query plan cache retained a poor plan after the data distribution changed.` → Cache giữ plan tệ sau data đổi.
**Liên kết tiếng Hàn:** `쿼리 계획 캐시`.

## 15. transaction epoch /trænˈzækʃən ˈiːpɒk/
**Part of speech:** noun
**Core meaning (English):** a monotonically advancing interval or identifier used to order transaction visibility and cleanup.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mốc tăng dần để xếp thứ tự visibility và cleanup.
**Grammar & collocations:** `transaction-epoch boundary` — boundary; `advance a visibility horizon` — tăng.
**Examples:** `The transaction epoch moved forward only after the oldest snapshot closed.` → Epoch chỉ tiến khi snapshot cũ đóng.
**Liên kết tiếng Hàn:** `트랜잭션 에포크`.

## 16. replication slot /ˌreplɪˈkeɪʃən slɒt/
**Part of speech:** noun
**Core meaning (English):** a durable position that prevents a primary from discarding log records needed by a replica or consumer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vị trí bền giữ log để replica/consumer chưa bị bỏ.
**Grammar & collocations:** `replication-slot retention` — retention; `advance a replay position` — tiến.
**Examples:** `The stalled replication slot kept old log segments on disk.` → Slot bị kẹt giữ log cũ.
**Liên kết tiếng Hàn:** `복제 슬롯`.

## 17. hot partition /hɒt pɑːrˈtɪʃən/
**Part of speech:** noun
**Core meaning (English):** a partition receiving disproportionately many reads or writes compared with the others.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** partition nhận quá nhiều request so với partition khác.
**Grammar & collocations:** `hot-partition mitigation` — mitigation; `rebalance a shard` — cân bằng.
**Examples:** `A hot partition formed around the most popular account and limited write throughput.` → Partition nóng giới hạn throughput.
**Liên kết tiếng Hàn:** `핫 파티션`.

## 18. checkpoint fence /ˈtʃekpɔɪnt fens/
**Part of speech:** noun
**Core meaning (English):** an ordering barrier that ensures required writes are durable before a checkpoint is declared complete.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** barrier thứ tự bảo đảm write bền trước khi checkpoint hoàn tất.
**Grammar & collocations:** `checkpoint-fence ordering` — ordering; `flush a durable boundary` — flush.
**Examples:** `The checkpoint fence prevented recovery from observing a half-written index.` → Fence ngăn recovery thấy index dở.
**Liên kết tiếng Hàn:** `체크포인트 펜스`.

## 19. write stall /raɪt stɔːl/
**Part of speech:** noun
**Core meaning (English):** a deliberate pause or slowdown in writes caused by exhausted memory, compaction, or durable-storage limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** write bị dừng/chậm do memory, compaction hoặc storage cạn.
**Grammar & collocations:** `write-stall duration` — duration; `throttle incoming writes` — throttling.
**Examples:** `A write stall gave compaction time to catch up with the import.` → Stall cho compaction bắt kịp.
**Liên kết tiếng Hàn:** `쓰기 정지`.

## 20. page checksum /peɪdʒ ˈtʃeksʌm/
**Part of speech:** noun
**Core meaning (English):** a stored integrity value used to detect corruption in a database page.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị integrity phát hiện page database bị hỏng.
**Grammar & collocations:** `page-checksum mismatch` — mismatch; `detect torn-page corruption` — phát hiện.
**Examples:** `The page checksum exposed storage corruption before the damaged index was served.` → Checksum phát hiện hỏng trước khi dùng.
**Liên kết tiếng Hàn:** `페이지 체크섬`.

## Review in context

**Page eviction** and a **B-tree split** manage memory and indexes, while a **log-structured merge tree** accumulates **compaction debt** across each **SSTable**. A **bloom filter** limits **read amplification**, but **write rewrite overhead** still shapes the **storage engine**. **MVCC visibility**, a **vacuum process**, and each **dead tuple** determine cleanup; an **index-only scan** and **query plan cache** affect reads. A **transaction epoch**, **replication slot**, **hot partition**, **checkpoint fence**, **write stall**, and **page checksum** complete recovery and operations.

**Bản dịch tiếng Việt:** **Page eviction** và **B-tree split** quản lý memory và index, còn **log-structured merge tree** tích lũy **compaction debt** trên từng **SSTable**. **Bloom filter** giảm **read amplification**, nhưng **write rewrite overhead** vẫn định hình **storage engine**. **MVCC visibility**, **vacuum process** và từng **dead tuple** quyết định cleanup; **index-only scan** và **query plan cache** ảnh hưởng read. **Transaction epoch**, **replication slot**, **hot partition**, **checkpoint fence**, **write stall** và **page checksum** hoàn thiện recovery và vận hành.
