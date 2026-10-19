# C2 Vocabulary — Query execution and storage internals

This lesson follows a database query from reusable planning and cardinality evidence through joins, aggregation, sorting, and page maintenance.

Flow: **query cache → prepared statement → statistics histogram → join order → join algorithm → hash aggregate → sort aggregate → external sort → spill to disk → dirty page → checkpoint flush → write-ahead checkpoint → redo log → undo log → vacuum cycle → garbage tuple → visibility map → covering index scan → functional dependency → materialized result**.

## 1. query cache /ˈkwɪəri kæʃ/
**Part of speech:** noun
**Core meaning (English):** stored results or plans that let repeated queries avoid some computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** result hoặc plan lưu sẵn giúp query lặp tránh một phần computation.
**Grammar & collocations:** `query-cache invalidation` — invalidation; `reuse a cached result` — tái sử dụng.
**Examples:** `The query cache served the dashboard until a source table changed.` → Cache phục vụ dashboard đến khi table nguồn đổi.
**Liên kết tiếng Hàn:** `쿼리 캐시`.

## 2. prepared statement /prɪˈperd ˈsteɪtmənt/
**Part of speech:** noun
**Core meaning (English):** a parsed and often planned SQL statement whose values can be supplied repeatedly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** statement SQL đã parse/plan, có thể cấp value nhiều lần.
**Grammar & collocations:** `prepared-statement handle` — handle; `bind a parameter` — bind.
**Examples:** `The service used a prepared statement to insert each event without rebuilding the syntax tree.` → Service dùng statement chuẩn bị để insert từng event.
**Liên kết tiếng Hàn:** `준비된 문장`.

## 3. statistics histogram /stəˈtɪstɪks ˈhɪstəɡræm/
**Part of speech:** noun
**Core meaning (English):** a summary of value distribution used by a query planner to estimate predicate selectivity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** summary distribution value để planner ước lượng selectivity predicate.
**Grammar & collocations:** `statistics-histogram bucket` — bucket; `refresh column statistics` — làm mới.
**Examples:** `The statistics histogram underestimated rows in the newest date range.` → Histogram đánh giá thấp row ở date mới.
**Liên kết tiếng Hàn:** `통계 히스토그램`.

## 4. join order /dʒɔɪn ˈɔːrdər/
**Part of speech:** noun
**Core meaning (English):** the sequence in which a query combines multiple relations or tables.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thứ tự query kết hợp nhiều relation/table.
**Grammar & collocations:** `join-order search` — search; `choose a selective relation first` — chọn.
**Examples:** `The planner changed the join order after new statistics showed that the customer table was small.` → Planner đổi thứ tự sau statistics mới.
**Liên kết tiếng Hàn:** `조인 순서`.

## 5. join algorithm /dʒɔɪn ˈælɡərɪðəm/
**Part of speech:** noun
**Core meaning (English):** a method for finding matching rows between two relations, such as hashing, sorting, or nested iteration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp tìm row khớp giữa hai relation như hash/sort/loop.
**Grammar & collocations:** `join-algorithm choice` — lựa chọn; `build a hash table` — dựng.
**Examples:** `The optimizer selected a join algorithm that streamed the larger input once.` → Optimizer chọn algorithm stream input lớn một lần.
**Liên kết tiếng Hàn:** `조인 알고리즘`.

## 6. hash aggregate /hæʃ ˈæɡrɪɡət/
**Part of speech:** noun
**Core meaning (English):** an aggregation method that stores groups in a hash table as rows are processed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** aggregate lưu group trong hash table khi xử lý row.
**Grammar & collocations:** `hash-aggregate state` — state; `group rows by key` — nhóm.
**Examples:** `The hash aggregate counted events by tenant without sorting the entire input.` → Aggregate hash đếm event theo tenant không sort toàn input.
**Liên kết tiếng Hàn:** `해시 집계`.

## 7. sort aggregate /sɔːrt ˈæɡrɪɡət/
**Part of speech:** noun
**Core meaning (English):** an aggregation method that processes rows ordered by their grouping keys.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** aggregate xử lý row đã order theo key group.
**Grammar & collocations:** `sort-aggregate input` — input; `consume one group at a time` — xử lý.
**Examples:** `The sort aggregate reused the ordering produced by the preceding index scan.` → Aggregate sort dùng thứ tự từ index scan.
**Liên kết tiếng Hàn:** `정렬 집계`.

## 8. external sort /ɪkˈstɜːrnəl sɔːrt/
**Part of speech:** noun
**Core meaning (English):** sorting that writes intermediate runs to storage when the input does not fit in memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sort ghi run trung gian ra storage khi input không vừa memory.
**Grammar & collocations:** `external-sort run` — run; `merge sorted files` — merge.
**Examples:** `The external sort merged temporary runs after the result exceeded the memory limit.` → Sort external merge run tạm sau khi result vượt memory.
**Liên kết tiếng Hàn:** `외부 정렬`.

## 9. spill to disk /spɪl tu dɪsk/
**Part of speech:** noun
**Core meaning (English):** writing temporary computation state to disk because available memory is insufficient.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi state computation tạm ra disk vì memory không đủ.
**Grammar & collocations:** `spill-to-disk volume` — volume; `spill hash partitions` — ghi tràn.
**Examples:** `The aggregation began to spill to disk when a single customer had millions of events.` → Aggregate spill ra disk khi customer có hàng triệu event.
**Liên kết tiếng Hàn:** `디스크로 스필`.

## 10. dirty page /ˈdɜːrti peɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a memory page whose contents differ from the durable copy on storage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** page memory khác bản durable trên storage.
**Grammar & collocations:** `dirty-page queue` — queue; `flush modified pages` — flush.
**Examples:** `The buffer manager prioritized dirty pages from the oldest transaction.` → Manager ưu tiên page dirty từ transaction cũ.
**Liên kết tiếng Hàn:** `더티 페이지`.

## 11. checkpoint flush /ˈtʃekpɔɪnt flʌʃ/
**Part of speech:** noun
**Core meaning (English):** writing modified database state to durable storage as part of a checkpoint.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi state database đổi ra storage bền trong checkpoint.
**Grammar & collocations:** `checkpoint-flush duration` — duration; `flush dirty buffers` — ghi.
**Examples:** `The checkpoint flush slowed briefly while thousands of dirty pages were written.` → Flush chậm khi ghi hàng nghìn page dirty.
**Liên kết tiếng Hàn:** `체크포인트 플러시`.

## 12. write-ahead checkpoint /raɪt əˈhed ˈtʃekpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a checkpoint protocol that records the necessary recovery position before or alongside page persistence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** protocol checkpoint ghi recovery position trước/cùng lúc persist page.
**Grammar & collocations:** `write-ahead-checkpoint marker` — marker; `record a recovery boundary` — ghi.
**Examples:** `The write-ahead checkpoint marker told recovery which pages could be trusted.` → Marker cho recovery biết page nào tin được.
**Liên kết tiếng Hàn:** `선행 기록 체크포인트`.

## 13. redo log /ˈriːduː lɒɡ/
**Part of speech:** noun
**Core meaning (English):** a durable record of changes that can be applied again to reconstruct updated pages after a crash.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record bền của change có thể áp lại để dựng page sau crash.
**Grammar & collocations:** `redo-log sequence` — sequence; `reapply a committed change` — áp lại.
**Examples:** `Recovery read the redo log before exposing the repaired table.` → Recovery đọc log redo trước khi mở table.
**Liên kết tiếng Hàn:** `리두 로그`.

## 14. undo log /ˈʌnduː lɒɡ/
**Part of speech:** noun
**Core meaning (English):** a record of prior values or actions used to roll back incomplete or abandoned work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record value/action cũ để rollback work chưa hoàn tất.
**Grammar & collocations:** `undo-log record` — record; `restore a previous value` — khôi phục.
**Examples:** `The undo log restored the previous price after the transaction aborted.` → Log undo khôi phục giá cũ sau abort.
**Liên kết tiếng Hàn:** `언두 로그`.

## 15. vacuum cycle /ˈvækjuːm ˈsaɪkəl/
**Part of speech:** noun
**Core meaning (English):** a maintenance pass that reclaims obsolete row versions and updates storage metadata.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượt maintenance thu hồi row version cũ và update metadata storage.
**Grammar & collocations:** `vacuum-cycle cost` — cost; `reclaim dead space` — thu hồi.
**Examples:** `The vacuum cycle reclaimed space after a large archival deletion.` → Cycle thu hồi space sau xóa archive lớn.
**Liên kết tiếng Hàn:** `진공 주기`.

## 16. garbage tuple /ˈɡɑːrbɪdʒ ˈtʌpəl/
**Part of speech:** noun
**Core meaning (English):** an obsolete row version that no active transaction can still need.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** row version cũ không transaction active nào còn cần.
**Grammar & collocations:** `garbage-tuple cleanup` — cleanup; `remove an obsolete version` — xóa.
**Examples:** `The vacuum worker removed garbage tuples left by repeated updates.` → Worker xóa tuple rác từ update lặp.
**Liên kết tiếng Hàn:** `가비지 튜플`.

## 17. visibility map /ˌvɪzəˈbɪləti mæp/
**Part of speech:** noun
**Core meaning (English):** metadata marking pages whose rows are visible to all relevant transactions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata đánh dấu page có row visible với transaction liên quan.
**Grammar & collocations:** `visibility-map bit` — bit; `mark a page all-visible` — đánh dấu.
**Examples:** `The visibility map allowed the engine to skip visiting the table for an index-only scan.` → Map giúp engine bỏ qua table khi index-only scan.
**Liên kết tiếng Hàn:** `가시성 맵`.

## 18. covering index scan /ˈkʌvərɪŋ ˈɪndeks skæn/
**Part of speech:** noun
**Core meaning (English):** a scan that answers a query because the index contains every projected column the query needs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scan trả query vì index chứa mọi column mà query cần.
**Grammar & collocations:** `covering-index-scan plan` — plan; `read projected columns from the index` — đọc.
**Examples:** `The covering index scan avoided table I/O because every selected column was indexed.` → Scan tránh I/O table vì mọi column chọn đều nằm trong index.
**Liên kết tiếng Hàn:** `인덱스 전용 스캔`.

## 19. functional dependency /ˈfʌŋkʃənəl dɪˈpendənsi/
**Part of speech:** noun
**Core meaning (English):** a relationship in which one set of columns determines the value of another set.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ một nhóm column quyết định value nhóm khác.
**Grammar & collocations:** `functional-dependency rule` — rule; `infer a determined column` — suy ra.
**Examples:** `The planner used the functional dependency between account ID and account region.` → Planner dùng dependency giữa account ID và region.
**Liên kết tiếng Hàn:** `함수 종속성`.

## 20. materialized result /məˈtɪəriəlaɪzd rɪˈzʌlt/
**Part of speech:** noun
**Core meaning (English):** a persisted query result stored so later readers can access it without recomputing the query.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** result query được lưu để reader sau dùng mà không tính lại.
**Grammar & collocations:** `materialized-result refresh` — refresh; `serve a precomputed aggregate` — phục vụ.
**Examples:** `The materialized result served the monthly summary until the next refresh completed.` → Result materialized phục vụ summary tháng đến refresh kế.
**Liên kết tiếng Hàn:** `구체화된 결과`.

## Review in context

A **query cache** can reuse work, while a **prepared statement** avoids repeated parsing; a **statistics histogram** informs **join order** and **join algorithm** choice. A **hash aggregate** or **sort aggregate** groups rows; an **external sort** may **spill to disk**. Modified data lives in a **dirty page** until a **checkpoint flush** and **write-ahead checkpoint** establish recovery state. A **redo log** reapplies committed changes, while an **undo log** reverses unfinished work. A **vacuum cycle** removes each **garbage tuple**; a **visibility map** can support a **covering index scan**. A **functional dependency** simplifies reasoning, and a **materialized result** serves precomputed data.

**Bản dịch tiếng Việt:** **Query cache** tái sử dụng work, còn **prepared statement** tránh parse lặp; **statistics histogram** hỗ trợ chọn **join order** và **join algorithm**. **Hash aggregate** hoặc **sort aggregate** nhóm row; **external sort** có thể **spill to disk**. Data đổi nằm trong **dirty page** đến **checkpoint flush** và **write-ahead checkpoint** tạo state recovery. **Redo log** áp lại change commit, còn **undo log** đảo work chưa xong. **Vacuum cycle** xóa **garbage tuple**; **visibility map** có thể hỗ trợ **covering index scan**. **Functional dependency** đơn giản hóa suy luận, còn **materialized result** phục vụ data tính trước.
