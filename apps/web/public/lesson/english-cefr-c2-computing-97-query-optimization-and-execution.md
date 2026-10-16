# C2 Vocabulary — Query optimization and execution

This lesson follows a database query from statistics and cost estimation through join planning, materialized rewrites, and adaptive execution.

Flow: **join cardinality estimate → cost model calibration → join reordering → hash join spill → merge join → nested loop join → materialized view rewrite → common subexpression → query decorrelation → adaptive query execution → runtime filter → columnar scan → zone map → data skipping index → plan hint → statistics feedback → join skew → query compilation → plan regression → operator cost**.

## 1. join cardinality estimate /dʒɔɪn ˌkɑːrdɪˈnæləti ˈestəmət/
**Part of speech:** noun
**Core meaning (English):** an estimate of how many rows a join will produce from its input relation statistics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính số row output của join từ statistic input.
**Grammar & collocations:** `join-cardinality-estimate error` — error; `estimate a result size` — ước tính.
**Examples:** `The join cardinality estimate was too low, so the optimizer chose a memory-heavy plan.` → Estimate thấp làm chọn plan tốn memory.
**Liên kết tiếng Hàn:** `조인 카디널리티 추정`.

## 2. cost model calibration /kɒst ˈmɒdəl ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** adjusting optimizer cost assumptions to match measured hardware and workload behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh cost model theo hardware và workload đo thực tế.
**Grammar & collocations:** `cost-model-calibration run` — run; `fit a scan cost` — khớp.
**Examples:** `Cost model calibration corrected the optimizer's underestimate of remote storage latency.` → Calibration sửa estimate latency storage.
**Liên kết tiếng Hàn:** `비용 모델 보정`.

## 3. join reordering /dʒɔɪn riːˈɔːrdərɪŋ/
**Part of speech:** noun
**Core meaning (English):** changing the order in which relations are joined to reduce intermediate results and work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi thứ tự join để giảm intermediate result và công việc.
**Grammar & collocations:** `join-reordering search` — search; `choose a cheaper join tree` — chọn.
**Examples:** `Join reordering put the selective customer filter before the large fact table.` → Reordering đưa filter trước bảng lớn.
**Liên kết tiếng Hàn:** `조인 재정렬`.

## 4. hash join spill /hæʃ dʒɔɪn spɪl/
**Part of speech:** noun
**Core meaning (English):** writing hash-table partitions to temporary storage because they exceed available execution memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi partition hash ra storage khi vượt memory.
**Grammar & collocations:** `hash-join-spill threshold` — threshold; `partition a build side` — chia.
**Examples:** `Hash join spill turned a memory-bound query into a disk-bound query.` → Spill biến query thành disk-bound.
**Liên kết tiếng Hàn:** `해시 조인 스필`.

## 5. merge join /mɜːrdʒ dʒɔɪn/
**Part of speech:** noun
**Core meaning (English):** joining two inputs that are ordered on the join key by advancing through them in sorted order.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** join hai input đã sort bằng cách tiến cùng key.
**Grammar & collocations:** `merge-join input order` — order; `advance a sorted cursor` — tiến.
**Examples:** `The merge join reused existing order from the two clustered indexes.` → Merge join tận dụng index đã sort.
**Liên kết tiếng Hàn:** `병합 조인`.

## 6. nested loop join /ˈnestɪd luːp dʒɔɪn/
**Part of speech:** noun
**Core meaning (English):** joining by scanning one input and repeatedly searching the other for matching rows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scan một input rồi tìm match lặp ở input kia.
**Grammar & collocations:** `nested-loop-join outer input` — input; `probe an inner index` — dò.
**Examples:** `The nested loop join was efficient because the outer input was tiny and indexed.` → Nested loop hiệu quả với input nhỏ.
**Liên kết tiếng Hàn:** `중첩 루프 조인`.

## 7. materialized view rewrite /məˈtɪəriəlaɪzd vjuː ˈriːraɪt/
**Part of speech:** noun
**Core meaning (English):** replacing a query's base-table computation with a compatible precomputed view.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay tính toán bảng gốc bằng view đã tính sẵn.
**Grammar & collocations:** `materialized-view-rewrite rule` — rule; `match a precomputed aggregate` — khớp.
**Examples:** `Materialized view rewrite answered the dashboard query from a daily aggregate.` → Rewrite dùng aggregate ngày.
**Liên kết tiếng Hàn:** `구체화된 뷰 재작성`.

## 8. common subexpression /ˈkɒmən ˌsʌbɪkˈspreʃən/
**Part of speech:** noun
**Core meaning (English):** an identical expression that appears multiple times and can be computed once and reused.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** expression giống nhau lặp lại, tính một lần rồi dùng lại.
**Grammar & collocations:** `common-subexpression elimination` — elimination; `reuse a computed value` — tái dùng.
**Examples:** `Common subexpression elimination removed three repeated date conversions.` → Elimination bỏ ba conversion lặp.
**Liên kết tiếng Hàn:** `공통 부분식`.

## 9. query decorrelation /ˈkwɪəri diːˌkɒrəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** transforming a correlated subquery into joins or set operations that can be optimized more broadly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi correlated subquery thành join/set operation dễ optimize.
**Grammar & collocations:** `query-decorrelation rewrite` — rewrite; `lift a correlated predicate` — đưa lên.
**Examples:** `Query decorrelation converted a row-by-row subquery into one hash join.` → Decorrelation đổi thành hash join.
**Liên kết tiếng Hàn:** `쿼리 탈상관`.

## 10. adaptive query execution /əˈdæptɪv ˈkwɪəri ˌeksɪˈkjuːʃən/
**Part of speech:** noun
**Core meaning (English):** changing a running query plan after observing actual intermediate data or runtime conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi plan khi đã thấy data trung gian và điều kiện runtime.
**Grammar & collocations:** `adaptive-query-execution decision` — decision; `switch a join strategy` — đổi.
**Examples:** `Adaptive query execution switched from broadcast to repartition after the table exceeded the threshold.` → Execution đổi strategy.
**Liên kết tiếng Hàn:** `적응형 쿼리 실행`.

## 11. runtime filter /ˈrʌntaɪm ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a filter generated from values observed during execution and pushed to another scan or operator.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** filter tạo lúc chạy rồi đẩy sang scan/operator khác.
**Grammar & collocations:** `runtime-filter bloom` — bloom; `prune unmatched rows` — loại.
**Examples:** `The runtime filter removed fact-table rows that could not match the dimension keys.` → Filter bỏ row không match.
**Liên kết tiếng Hàn:** `런타임 필터`.

## 12. columnar scan /kəˈlʌmnər skæn/
**Part of speech:** noun
**Core meaning (English):** reading selected columns from a column-oriented storage format instead of complete rows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đọc column cần thiết thay vì cả row.
**Grammar & collocations:** `columnar-scan projection` — projection; `skip an unused column` — bỏ.
**Examples:** `The columnar scan read only the two measures required by the report.` → Scan chỉ đọc hai measure.
**Liên kết tiếng Hàn:** `열 지향 스캔`.

## 13. zone map /zoʊn mæp/
**Part of speech:** noun
**Core meaning (English):** metadata storing value ranges or summaries for storage regions so irrelevant regions can be skipped.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata range giúp bỏ vùng storage không liên quan.
**Grammar & collocations:** `zone-map predicate` — predicate; `skip a disjoint block` — bỏ qua.
**Examples:** `The zone map skipped blocks whose timestamp range could not satisfy the filter.` → Map bỏ block ngoài range.
**Liên kết tiếng Hàn:** `존 맵`.

## 14. data skipping index /ˈdeɪtə ˈskɪpɪŋ ˈɪndeks/
**Part of speech:** noun
**Core meaning (English):** an auxiliary index that lets a scan avoid data blocks unable to contain qualifying rows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** index phụ giúp scan bỏ block chắc chắn không match.
**Grammar & collocations:** `data-skipping-index granularity` — granularity; `prune a storage block` — cắt.
**Examples:** `The data skipping index reduced I/O for a highly selective time-range query.` → Index giảm I/O.
**Liên kết tiếng Hàn:** `데이터 건너뛰기 인덱스`.

## 15. plan hint /plæn hɪnt/
**Part of speech:** noun
**Core meaning (English):** an explicit instruction or preference supplied to influence the optimizer's plan choice.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ dẫn explicit ảnh hưởng lựa chọn plan.
**Grammar & collocations:** `plan-hint syntax` — syntax; `force a join method` — ép.
**Examples:** `A plan hint kept the optimizer from choosing a broadcast join on a busy cluster.` → Hint ngăn broadcast join.
**Liên kết tiếng Hàn:** `계획 힌트`.

## 16. statistics feedback /stəˈtɪstɪks ˈfiːdbæk/
**Part of speech:** noun
**Core meaning (English):** feeding observed execution statistics back into future cardinality or cost estimates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa statistic thực tế lại vào estimate tương lai.
**Grammar & collocations:** `statistics-feedback cycle` — cycle; `correct an estimate` — sửa.
**Examples:** `Statistics feedback corrected the row-count estimate after the first execution.` → Feedback sửa estimate sau lần đầu.
**Liên kết tiếng Hàn:** `통계 피드백`.

## 17. join skew /dʒɔɪn skjuː/
**Part of speech:** noun
**Core meaning (English):** an uneven distribution of join keys that sends disproportionate work to one worker or partition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** key phân bố lệch khiến một worker/partition quá tải.
**Grammar & collocations:** `join-skew mitigation` — mitigation; `salt a hot key` — rải.
**Examples:** `Join skew made one partition process nearly all rows for the popular account.` → Skew dồn row vào một partition.
**Liên kết tiếng Hàn:** `조인 왜곡`.

## 18. query compilation /ˈkwɪəri kəmˌpɪˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** translating a logical query plan into executable operators or machine code.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển logical plan thành operator hoặc machine code chạy được.
**Grammar & collocations:** `query-compilation cache` — cache; `compile an operator pipeline` — biên dịch.
**Examples:** `Query compilation fused filters and projections into one tight loop.` → Compilation gộp filter/projection.
**Liên kết tiếng Hàn:** `쿼리 컴파일`.

## 19. plan regression /plæn rɪˈɡreʃən/
**Part of speech:** noun
**Core meaning (English):** a performance decline caused when an optimizer chooses a worse plan after data, statistics, or software changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** performance giảm vì optimizer chọn plan tệ sau data/software đổi.
**Grammar & collocations:** `plan-regression test` — test; `pin a known-good plan` — ghim.
**Examples:** `Plan regression doubled report latency after a statistics refresh.` → Regression làm latency gấp đôi.
**Liên kết tiếng Hàn:** `계획 회귀`.

## 20. operator cost /ˈɒpəreɪtər kɒst/
**Part of speech:** noun
**Core meaning (English):** the estimated resource expense of executing one relational or physical operator.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chi phí resource ước tính của một operator.
**Grammar & collocations:** `operator-cost model` — model; `compare CPU and I/O expense` — so sánh.
**Examples:** `Operator cost favored a compressed scan over a random index lookup.` → Cost ưu tiên scan nén.
**Liên kết tiếng Hàn:** `연산자 비용`.

## Review in context

A **join cardinality estimate** and **cost model calibration** guide **join reordering**, while **hash join spill**, **merge join**, and **nested loop join** trade memory, order, and probes. **Materialized view rewrite**, **common subexpression**, and **query decorrelation** remove repeated work; **adaptive query execution** and a **runtime filter** respond to observed data. A **columnar scan**, **zone map**, and **data skipping index** reduce I/O. **Plan hint**, **statistics feedback**, **join skew**, **query compilation**, **plan regression**, and **operator cost** complete tuning.

**Bản dịch tiếng Việt:** **Join cardinality estimate** và **cost model calibration** hướng dẫn **join reordering**, còn **hash join spill**, **merge join** và **nested loop join** cân bằng memory, order và probe. **Materialized view rewrite**, **common subexpression** và **query decorrelation** bỏ việc lặp; **adaptive query execution** và **runtime filter** phản ứng với data thực. **Columnar scan**, **zone map** và **data skipping index** giảm I/O. **Plan hint**, **statistics feedback**, **join skew**, **query compilation**, **plan regression** và **operator cost** hoàn thiện tuning.
