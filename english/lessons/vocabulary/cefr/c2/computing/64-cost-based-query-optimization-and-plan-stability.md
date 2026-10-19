# C2 Vocabulary — Cost-based query optimization and plan stability

This lesson follows a query from statistics through plan search, execution feedback, spill behavior, and regression control.

Flow: **cardinality estimator → join order search → histogram selectivity → cost-model calibration → adaptive query plan → plan cache invalidation → parameter-sensitive plan → join spill threshold → vectorized execution → late materialization → index intersection → partition pruning → query compilation cache → optimizer exploration budget → plan regression guard → feedback-directed optimization → statistics staleness → query plan fingerprint → workload-aware optimization → runtime cardinality feedback**.

## 1. cardinality estimator /ˌkɑrdəˈnæləti ˈɛstəˌmeɪtər/
**Part of speech:** noun
**Core meaning (English):** a component that predicts how many rows an operator will produce from available statistics and predicates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ ước tính số row sau filter/join.
**Grammar & collocations:** `cardinality-estimator error` — error; `predict an intermediate relation` — dự đoán.
**Examples:** `The cardinality estimator underpredicted the skewed customer segment by two orders of magnitude.` → Estimator đánh giá thấp segment lệch.
**Liên kết tiếng Hàn:** `카디널리티 추정기`.

## 2. join order search /dʒɔɪn ˈɔrdər sɝtʃ/
**Part of speech:** noun
**Core meaning (English):** exploring alternative sequences in which multiple relations can be joined to minimize cost.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm thứ tự join tốt nhất.
**Grammar & collocations:** `join-order-search space` — space; `prune an expensive arrangement` — cắt.
**Examples:** `Join order search chose the selective customer filter before touching the large event table.` → Search chọn filter chọn lọc trước.
**Liên kết tiếng Hàn:** `조인 순서 탐색`.

## 3. histogram selectivity /ˈhɪstəˌɡræm səˌlɛkˈtɪvəti/
**Part of speech:** noun
**Core meaning (English):** an estimate of predicate filtering power derived from value distribution buckets.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ chọn lọc của predicate từ histogram phân bố value.
**Grammar & collocations:** `histogram-selectivity estimate` — estimate; `model a nonuniform distribution` — mô hình.
**Examples:** `Histogram selectivity missed a hot value concentrated in one recent partition.` → Selectivity bỏ sót value nóng.
**Liên kết tiếng Hàn:** `히스토그램 선택도`.

## 4. cost-model calibration /kɔst ˈmɑdəl ˌkæləˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** adjusting optimizer cost assumptions to match measured hardware and workload behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh cost model theo đo thực tế.
**Grammar & collocations:** `cost-model-calibration run` — run; `fit an I/O penalty` — khớp.
**Examples:** `Cost-model calibration lowered the estimated penalty for compressed column scans.` → Calibration hạ penalty scan nén.
**Liên kết tiếng Hàn:** `비용 모델 보정`.

## 5. adaptive query plan /əˈdæptɪv ˈkwɪri plæn/
**Part of speech:** noun
**Core meaning (English):** a plan that can change operators or execution strategy after observing runtime facts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** plan đổi theo thông tin lúc chạy.
**Grammar & collocations:** `adaptive-query-plan switch` — switch; `reoptimize after sampling` — tối ưu lại.
**Examples:** `The adaptive query plan changed join strategy after the first input batch was larger than expected.` → Plan đổi chiến lược join.
**Liên kết tiếng Hàn:** `적응형 쿼리 계획`.

## 6. plan cache invalidation /plæn kæʃ ɪnˌvæləˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** removing or disabling a cached query plan when schema, statistics, settings, or data conditions make it unsafe.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vô hiệu plan cache khi điều kiện đổi.
**Grammar & collocations:** `plan-cache-invalidation trigger` — trigger; `recompile a statement` — biên dịch lại.
**Examples:** `Plan cache invalidation followed a major statistics refresh on the sales table.` → Invalidation sau refresh statistics lớn.
**Liên kết tiếng Hàn:** `계획 캐시 무효화`.

## 7. parameter-sensitive plan /pəˈræmətər ˈsɛnsətɪv plæn/
**Part of speech:** noun
**Core meaning (English):** a plan whose best strategy changes materially with the values supplied to query parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parameter khác làm plan tối ưu khác.
**Grammar & collocations:** `parameter-sensitive-plan selection` — selection; `choose a value-specific strategy` — chọn.
**Examples:** `A parameter-sensitive plan used an index for small customers and a scan for the largest account.` → Plan chọn index hoặc scan theo customer.
**Liên kết tiếng Hàn:** `매개변수 민감 계획`.

## 8. join spill threshold /dʒɔɪn spɪl ˈθrɛʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** the memory or size boundary at which a join begins writing intermediate state to slower storage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngưỡng join phải spill ra disk.
**Grammar & collocations:** `join-spill-threshold alert` — alert; `avoid external hash storage` — tránh.
**Examples:** `The join spill threshold was crossed after a stale estimate allocated too little memory.` → Spill xảy ra do estimate cũ.
**Liên kết tiếng Hàn:** `조인 스필 임계값`.

## 9. vectorized execution /ˈvɛktəˌraɪzd ˌɛksəˈkjuːʃən/
**Part of speech:** noun
**Core meaning (English):** processing multiple values at once using batches and vector instructions rather than one row at a time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xử lý nhiều value cùng lúc bằng vector.
**Grammar & collocations:** `vectorized-execution batch` — batch; `operate on a column vector` — xử lý.
**Examples:** `Vectorized execution reduced interpreter overhead for the aggregation stage.` → Execution vector giảm overhead interpreter.
**Liên kết tiếng Hàn:** `벡터화 실행`.

## 10. late materialization /leɪt məˌtɪriələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** delaying retrieval of full column or row values until filters prove they are needed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ lấy value đầy đủ sau khi filter cần.
**Grammar & collocations:** `late-materialization strategy` — strategy; `defer a wide-column fetch` — trì hoãn.
**Examples:** `Late materialization avoided reading large text fields for rows rejected by the predicate.` → Late materialization tránh đọc field text lớn.
**Liên kết tiếng Hàn:** `지연 구체화`.

## 11. index intersection /ˈɪndɛks ˌɪntərˈsɛkʃən/
**Part of speech:** noun
**Core meaning (English):** combining row locations from multiple indexes to satisfy a query with several selective predicates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giao kết quả nhiều index.
**Grammar & collocations:** `index-intersection plan` — plan; `intersect row identifiers` — giao.
**Examples:** `Index intersection outperformed a composite index for the temporary filter combination.` → Intersection nhanh hơn composite index.
**Liên kết tiếng Hàn:** `인덱스 교집합`.

## 12. partition pruning /pɑrˈtɪʃən ˈpruːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** eliminating partitions that cannot contain rows satisfying a query predicate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ partition chắc chắn không có row cần.
**Grammar & collocations:** `partition-pruning rule` — rule; `skip historical partitions` — bỏ qua.
**Examples:** `Partition pruning reduced the scan from five years of data to one week.` → Pruning giảm scan từ năm năm xuống một tuần.
**Liên kết tiếng Hàn:** `파티션 가지치기`.

## 13. query compilation cache /ˈkwɪri ˌkɑmpəˈleɪʃən kæʃ/
**Part of speech:** noun
**Core meaning (English):** cached compiled or optimized query artifacts reused to avoid repeating planning work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cache kết quả compile/optimize query.
**Grammar & collocations:** `query-compilation-cache hit` — hit; `reuse a compiled operator graph` — tái dùng.
**Examples:** `The query compilation cache reduced startup latency for recurring reports.` → Cache giảm latency khởi động report.
**Liên kết tiếng Hàn:** `쿼리 컴파일 캐시`.

## 14. optimizer exploration budget /ˈɑptəˌmaɪzər ˌɛkspləˈreɪʃən ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a limit on time, memory, or candidate plans the optimizer may examine before choosing one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách search plan của optimizer.
**Grammar & collocations:** `optimizer-exploration-budget limit` — limit; `prune the search space` — cắt.
**Examples:** `The optimizer exploration budget was exhausted by a query with twelve joins.` → Budget hết với query 12 join.
**Liên kết tiếng Hàn:** `옵티마이저 탐색 예산`.

## 15. plan regression guard /plæn rɪˈɡrɛʃən ɡɑrd/
**Part of speech:** noun
**Core meaning (English):** an automated control that detects when a new plan becomes materially slower or more resource-intensive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** guard phát hiện plan mới chậm/xấu hơn.
**Grammar & collocations:** `plan-regression-guard threshold` — threshold; `block a degraded plan` — chặn.
**Examples:** `The plan regression guard blocked deployment after p99 query time doubled.` → Guard chặn deploy khi p99 tăng gấp đôi.
**Liên kết tiếng Hàn:** `쿼리 계획 회귀 방지`.

## 16. feedback-directed optimization /ˈfiːdˌbæk dɪˈrɛktɪd ˌɑptəməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** optimization guided by measurements collected from prior executions rather than by static assumptions alone.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tối ưu dựa trên feedback runtime.
**Grammar & collocations:** `feedback-directed-optimization loop` — loop; `learn from execution statistics` — học.
**Examples:** `Feedback-directed optimization widened the memory grant after repeated spill observations.` → Optimization tăng memory grant sau spill lặp.
**Liên kết tiếng Hàn:** `피드백 기반 최적화`.

## 17. statistics staleness /stəˈtɪstɪks ˈsteɪlnəs/
**Part of speech:** noun
**Core meaning (English):** the condition in which optimizer statistics no longer represent current data distribution or volume.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** statistics không còn phản ánh data hiện tại.
**Grammar & collocations:** `statistics-staleness detector` — detector; `refresh column histograms` — refresh.
**Examples:** `Statistics staleness caused the optimizer to select a nested loop for a massive result.` → Staleness làm chọn nested loop sai.
**Liên kết tiếng Hàn:** `통계 노후화`.

## 18. query plan fingerprint /ˈkwɪri plæn ˈfɪŋɡərˌprɪnt/
**Part of speech:** noun
**Core meaning (English):** a compact identity derived from a normalized query plan for comparison and monitoring.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ID của plan chuẩn hóa để theo dõi.
**Grammar & collocations:** `query-plan-fingerprint registry` — registry; `compare plan shapes` — so sánh.
**Examples:** `The query plan fingerprint changed after a new index was introduced.` → Fingerprint đổi sau thêm index.
**Liên kết tiếng Hàn:** `쿼리 계획 지문`.

## 19. workload-aware optimization /ˈwɝkˌloʊd əˈwɛr ˌɑptəməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** choosing or tuning plans using observed workload patterns, priorities, and resource contention.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tối ưu theo workload và tranh chấp resource.
**Grammar & collocations:** `workload-aware-optimization policy` — policy; `favor interactive queries` — ưu tiên.
**Examples:** `Workload-aware optimization favored predictable latency during business hours over batch throughput.` → Optimization ưu tiên latency giờ làm.
**Liên kết tiếng Hàn:** `워크로드 인식 최적화`.

## 20. runtime cardinality feedback /ˈrʌnˌtaɪm ˌkɑrdəˈnæləti ˈfiːdˌbæk/
**Part of speech:** noun
**Core meaning (English):** execution measurements used to correct row-count estimates for later executions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số row thật lúc chạy dùng để sửa estimate sau.
**Grammar & collocations:** `runtime-cardinality-feedback update` — update; `correct an estimate` — sửa.
**Examples:** `Runtime cardinality feedback replaced the stale estimate after the first production execution.` → Feedback sửa estimate sau lần chạy thật.
**Liên kết tiếng Hàn:** `런타임 카디널리티 피드백`.

## Review in context

A **cardinality estimator**, **join order search**, **histogram selectivity**, and **cost-model calibration** shape an **adaptive query plan**. **Plan cache invalidation**, a **parameter-sensitive plan**, and a **join spill threshold** affect runtime. **Vectorized execution**, **late materialization**, **index intersection**, and **partition pruning** improve work, while a **query compilation cache** and **optimizer exploration budget** manage cost. A **plan regression guard**, **feedback-directed optimization**, **statistics staleness**, **query plan fingerprint**, **workload-aware optimization**, and **runtime cardinality feedback** preserve stability.

**Bản dịch tiếng Việt:** **Cardinality estimator**, **join order search**, **histogram selectivity** và **cost-model calibration** định hình **adaptive query plan**. **Plan cache invalidation**, **parameter-sensitive plan** và **join spill threshold** ảnh hưởng runtime. **Vectorized execution**, **late materialization**, **index intersection** và **partition pruning** cải thiện xử lý, còn **query compilation cache** và **optimizer exploration budget** quản lý cost. **Plan regression guard**, **feedback-directed optimization**, **statistics staleness**, **query plan fingerprint**, **workload-aware optimization** và **runtime cardinality feedback** giữ ổn định.
