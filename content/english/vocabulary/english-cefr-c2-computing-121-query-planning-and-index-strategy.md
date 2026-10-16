# C2 Vocabulary — Query planning and index strategy

This lesson follows a query from statistics and index design through join selection, adaptive execution, and plan lifecycle.

Flow: **selectivity estimate → histogram statistic → partial index → expression index → bitmap scan → cardinality estimate → adaptive plan → plan cache → parameter sniffing → statistics refresh → stale statistic → optimizer hint → join spill → sort spill → plan fingerprint → query fragment → scan sharing → materialized predicate → plan invalidation → partitionwise join**.

## 1. selectivity estimate /sɪˌlektɪˈvəti ˈestɪmət/
**Part of speech:** noun
**Core meaning (English):** an estimate of the fraction of rows expected to satisfy a filter or join condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính tỷ lệ row dự kiến match filter hoặc điều kiện join.
**Grammar & collocations:** `selectivity-estimate error` — sai số; `predict a narrow filter` — dự đoán.
**Examples:** `The selectivity estimate was too low, so the planner chose an index for a broad scan.` → Estimate quá thấp nên planner chọn index sai.
**Liên kết tiếng Hàn:** `선택도 추정`.

## 2. histogram statistic /hɪˈstɒɡræm stəˈtɪstɪk/
**Part of speech:** noun
**Core meaning (English):** a summary dividing observed values into ranges so an optimizer can estimate distribution and selectivity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** summary chia value thành range để optimizer ước tính phân phối/selectivity.
**Grammar & collocations:** `histogram-statistic bucket` — bucket; `capture a skewed distribution` — ghi.
**Examples:** `The histogram statistic showed that most customers belonged to a small set of regions.` → Statistic cho thấy customer tập trung vài vùng.
**Liên kết tiếng Hàn:** `히스토그램 통계`.

## 3. partial index /ˈpɑːrʃəl ˈɪndeks/
**Part of speech:** noun
**Core meaning (English):** an index covering only rows that satisfy a defined predicate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** index chỉ bao phủ row thỏa predicate định trước.
**Grammar & collocations:** `partial-index predicate` — predicate; `index active records only` — lập index.
**Examples:** `The partial index covered active orders and stayed much smaller than a full-table index.` → Index một phần chỉ giữ order active.
**Liên kết tiếng Hàn:** `부분 인덱스`.

## 4. expression index /ɪkˈspreʃən ˈɪndeks/
**Part of speech:** noun
**Core meaning (English):** an index built from a computed expression rather than directly from a stored column.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** index xây từ expression tính toán thay vì column lưu trực tiếp.
**Grammar & collocations:** `expression-index key` — key; `index a normalized value` — lập index.
**Examples:** `The expression index accelerated searches that compared lowercase email addresses.` → Index expression tăng tốc tìm email lowercase.
**Liên kết tiếng Hàn:** `표현식 인덱스`.

## 5. bitmap scan /ˈbɪtmæp skæn/
**Part of speech:** noun
**Core meaning (English):** scanning a compact set of row-position bits assembled from one or more indexes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scan tập bit vị trí row gọn, ghép từ một hoặc nhiều index.
**Grammar & collocations:** `bitmap-scan plan` — plan; `combine index predicates` — kết hợp.
**Examples:** `The bitmap scan combined two selective filters before touching the table pages.` → Scan bitmap gộp hai filter trước đọc page.
**Liên kết tiếng Hàn:** `비트맵 스캔`.

## 6. cardinality estimate /ˌkɑːrdɪˈnæləti ˈestɪmət/
**Part of speech:** noun
**Core meaning (English):** a prediction of how many rows an operator will produce.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dự đoán số row một operator sẽ tạo ra.
**Grammar & collocations:** `cardinality-estimate error` — sai số; `predict join output` — dự đoán.
**Examples:** `A bad cardinality estimate made the engine allocate too little memory for the join.` → Estimate sai làm cấp memory thiếu cho join.
**Liên kết tiếng Hàn:** `카디널리티 추정`.

## 7. adaptive plan /əˈdæptɪv plæn/
**Part of speech:** noun
**Core meaning (English):** a query plan that can choose or adjust an execution strategy after observing runtime conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** plan có thể chọn/đổi strategy sau khi thấy điều kiện runtime.
**Grammar & collocations:** `adaptive-plan branch` — nhánh; `switch join strategy` — chuyển.
**Examples:** `The adaptive plan changed from a nested loop after the first batch was much larger than expected.` → Plan đổi strategy khi batch đầu lớn.
**Liên kết tiếng Hàn:** `적응형 계획`.

## 8. plan cache /plæn kæʃ/
**Part of speech:** noun
**Core meaning (English):** stored compiled query plans reused for later executions with compatible statements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** plan query đã compile được lưu để tái dùng.
**Grammar & collocations:** `plan-cache entry` — entry; `reuse a compiled plan` — tái dùng.
**Examples:** `The plan cache avoided compilation cost for thousands of identical lookups.` → Cache tránh compile cho hàng nghìn lookup.
**Liên kết tiếng Hàn:** `계획 캐시`.

## 9. parameter sniffing /pəˈræmɪtər ˈsnɪfɪŋ/
**Part of speech:** noun
**Core meaning (English):** choosing a reusable plan based on the first parameter values observed, which may perform poorly for later values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn plan theo parameter đầu, có thể kém với value sau.
**Grammar & collocations:** `parameter-sniffing problem` — vấn đề; `compile for a representative value` — compile.
**Examples:** `Parameter sniffing made a plan tuned for one large customer slow for small customers.` → Sniffing làm plan của customer lớn chậm với customer nhỏ.
**Liên kết tiếng Hàn:** `매개변수 스니핑`.

## 10. statistics refresh /stəˈtɪstɪks rɪˈfreʃ/
**Part of speech:** noun
**Core meaning (English):** recomputing optimizer statistics after data distribution has changed materially.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính lại statistic optimizer khi phân phối data đổi đáng kể.
**Grammar & collocations:** `statistics-refresh job` — job; `sample a changed table` — lấy mẫu.
**Examples:** `The statistics refresh corrected the plan after a seasonal import changed the value distribution.` → Refresh sửa plan sau import mùa vụ.
**Liên kết tiếng Hàn:** `통계 새로 고침`.

## 11. stale statistic /steɪl stəˈtɪstɪk/
**Part of speech:** noun
**Core meaning (English):** an optimizer summary that no longer reflects the current data distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** summary optimizer không còn phản ánh phân phối data hiện tại.
**Grammar & collocations:** `stale-statistic warning` — cảnh báo; `invalidate an old histogram` — vô hiệu.
**Examples:** `A stale statistic caused the optimizer to underestimate the number of recent events.` → Statistic cũ làm đánh giá thấp event mới.
**Liên kết tiếng Hàn:** `오래된 통계`.

## 12. optimizer hint /ˈɒptəmaɪzər hɪnt/
**Part of speech:** noun
**Core meaning (English):** an explicit instruction guiding an optimizer toward or away from a plan choice.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ dẫn rõ cho optimizer chọn hoặc tránh plan.
**Grammar & collocations:** `optimizer-hint comment` — comment; `force a join order` — ép.
**Examples:** `The optimizer hint kept a critical report on the tested hash-join plan.` → Hint giữ report ở hash join đã test.
**Liên kết tiếng Hàn:** `옵티마이저 힌트`.

## 13. join spill /dʒɔɪn spɪl/
**Part of speech:** noun
**Core meaning (English):** writing intermediate join state to slower storage because memory is insufficient.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi state join trung gian ra storage chậm vì memory thiếu.
**Grammar & collocations:** `join-spill volume` — volume; `partition an oversized hash table` — chia.
**Examples:** `The join spill increased latency when the customer table exceeded the memory grant.` → Spill làm latency tăng khi table quá memory.
**Liên kết tiếng Hàn:** `조인 스필`.

## 14. sort spill /sɔːrt spɪl/
**Part of speech:** noun
**Core meaning (English):** writing sorted runs to temporary storage because the requested ordering does not fit in memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi run đã sort ra storage tạm vì không đủ memory.
**Grammar & collocations:** `sort-spill file` — file; `merge external runs` — gộp.
**Examples:** `The sort spill disappeared after the query received a larger memory grant.` → Spill biến mất khi query được cấp thêm memory.
**Liên kết tiếng Hàn:** `정렬 스필`.

## 15. plan fingerprint /plæn ˈfɪŋɡərprɪnt/
**Part of speech:** noun
**Core meaning (English):** a compact identity representing a query's structural execution plan for comparison and monitoring.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identity gọn đại diện cấu trúc plan để so sánh/monitor.
**Grammar & collocations:** `plan-fingerprint change` — thay đổi; `detect a regression` — phát hiện.
**Examples:** `The plan fingerprint changed after a statistics refresh and explained the latency regression.` → Fingerprint đổi sau refresh và giải thích regression.
**Liên kết tiếng Hàn:** `계획 지문`.

## 16. query fragment /ˈkwɪəri ˈfræɡmənt/
**Part of speech:** noun
**Core meaning (English):** a separable portion of a query plan or expression that can be optimized or reused independently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần tách được của plan/expression để optimize/reuse riêng.
**Grammar & collocations:** `query-fragment reuse` — tái dùng; `extract a common subexpression` — trích.
**Examples:** `The engine reused a query fragment that filtered active accounts in several reports.` → Engine tái dùng fragment lọc account active.
**Liên kết tiếng Hàn:** `쿼리 조각`.

## 17. scan sharing /skæn ˈʃerɪŋ/
**Part of speech:** noun
**Core meaning (English):** allowing multiple consumers to share one scan of the same data instead of rereading it separately.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều consumer dùng chung một scan thay vì đọc lại data.
**Grammar & collocations:** `scan-sharing opportunity` — cơ hội; `fan results out to consumers` — phân phối.
**Examples:** `Scan sharing reduced storage reads when several dashboards opened together.` → Sharing giảm read khi nhiều dashboard mở.
**Liên kết tiếng Hàn:** `스캔 공유`.

## 18. materialized predicate /məˈtɪəriəlaɪzd ˈpredɪkət/
**Part of speech:** noun
**Core meaning (English):** a filter result computed and stored so later operators can reuse it without reevaluating the condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết quả filter được tính và lưu để operator sau tái dùng.
**Grammar & collocations:** `materialized-predicate bitmap` — bitmap; `reuse a filtered set` — tái dùng.
**Examples:** `The materialized predicate let two joins reuse the same eligibility filter.` → Predicate lưu cho hai join dùng chung.
**Liên kết tiếng Hàn:** `구체화된 술어`.

## 19. plan invalidation /plæn ɪnˌvælɪˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** removing a cached plan because schema, statistics, dependencies, or settings have changed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ plan cache vì schema, statistic, dependency hoặc setting đổi.
**Grammar & collocations:** `plan-invalidation event` — event; `force recompilation` — buộc compile lại.
**Examples:** `Plan invalidation followed the index change so the next query could be optimized again.` → Invalidation xảy ra sau đổi index.
**Liên kết tiếng Hàn:** `계획 무효화`.

## 20. partitionwise join /pɑːrˈtɪʃənwaɪz dʒɔɪn/
**Part of speech:** noun
**Core meaning (English):** joining corresponding partitions independently so each task processes a smaller local subset.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** join các partition tương ứng riêng để mỗi task xử lý subset nhỏ cục bộ.
**Grammar & collocations:** `partitionwise-join plan` — plan; `co-locate matching partitions` — đặt cùng.
**Examples:** `The partitionwise join avoided shuffling all historical rows across the cluster.` → Join tránh shuffle toàn bộ row lịch sử.
**Liên kết tiếng Hàn:** `파티션별 조인`.

## Review in context

A **selectivity estimate** and **histogram statistic** guide whether a **partial index**, **expression index**, or **bitmap scan** is useful; a **cardinality estimate** predicts operator output. An **adaptive plan** may change at runtime, while a **plan cache** enables reuse but invites **parameter sniffing**. A **statistics refresh** replaces a **stale statistic**, and an **optimizer hint** can stabilize a choice. A **join spill** or **sort spill** reveals memory pressure; a **plan fingerprint** tracks change. A **query fragment**, **scan sharing**, and **materialized predicate** enable reuse, **plan invalidation** clears unsafe cache, and a **partitionwise join** keeps work local.

**Bản dịch tiếng Việt:** **Selectivity estimate** và **histogram statistic** hướng dẫn việc dùng **partial index**, **expression index** hoặc **bitmap scan**; **cardinality estimate** dự đoán output operator. **Adaptive plan** có thể đổi lúc chạy, còn **plan cache** tái dùng nhưng có rủi ro **parameter sniffing**. **Statistics refresh** thay **stale statistic**, và **optimizer hint** ổn định lựa chọn. **Join spill** hoặc **sort spill** cho thấy thiếu memory; **plan fingerprint** theo dõi thay đổi. **Query fragment**, **scan sharing** và **materialized predicate** hỗ trợ tái dùng, **plan invalidation** xóa cache không an toàn, còn **partitionwise join** giữ việc xử lý cục bộ.
