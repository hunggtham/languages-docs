# C2 Vocabulary — Data quality and observability

This lesson follows a dataset from freshness and schema checks through profiling, quality thresholds, and quarantining bad data.

Flow: **data freshness → freshness SLA → completeness check → validity check → uniqueness check → distribution check → range check → null rate → duplicate rate → outlier score → schema drift → quality dimension → quality threshold → quarantine dataset → data contract test → expectation suite → profiling report → column profile → value distribution → top value count**.

## 1. data freshness /ˈdeɪtə ˈfreʃnəs/
**Part of speech:** noun
**Core meaning (English):** how recently a dataset or table has received the updates expected by its consumers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức dataset/table nhận update gần đây đúng như consumer mong đợi.
**Grammar & collocations:** `data-freshness metric` — metric; `measure update delay` — đo.
**Examples:** `Data freshness fell when the upstream export missed its scheduled run.` → Freshness giảm khi export upstream lỡ lịch.
**Liên kết tiếng Hàn:** `데이터 최신성`.

## 2. freshness SLA /ˈfreʃnəs ˌes el ˈeɪ/
**Part of speech:** noun
**Core meaning (English):** a service-level agreement specifying how current data must be for a consumer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** SLA nêu data phải mới đến mức nào cho consumer.
**Grammar & collocations:** `freshness-SLA breach` — breach; `meet a two-hour target` — đạt.
**Examples:** `The dashboard breached its freshness SLA when the partition arrived six hours late.` → Dashboard vi phạm SLA khi partition tới trễ.
**Liên kết tiếng Hàn:** `최신성 SLA`.

## 3. completeness check /kəmˈpliːtnəs tʃek/
**Part of speech:** noun
**Core meaning (English):** a check that required records, fields, or partitions are present rather than missing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** check record, field hoặc partition bắt buộc có đủ, không thiếu.
**Grammar & collocations:** `completeness-check result` — result; `detect a missing partition` — phát hiện.
**Examples:** `The completeness check found that three regional files had not arrived.` → Check thấy ba file vùng chưa tới.
**Liên kết tiếng Hàn:** `완전성 검사`.

## 4. validity check /vəˈlɪdəti tʃek/
**Part of speech:** noun
**Core meaning (English):** a check that values conform to allowed types, formats, domains, or business rules.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** check value khớp type, format, domain hoặc business rule.
**Grammar & collocations:** `validity-check rule` — rule; `reject an invalid date` — từ chối.
**Examples:** `The validity check rejected a negative quantity in the shipment feed.` → Check từ chối quantity âm.
**Liên kết tiếng Hàn:** `유효성 검사`.

## 5. uniqueness check /juːˈniːknəs tʃek/
**Part of speech:** noun
**Core meaning (English):** a check that values expected to identify one entity do not occur more than once.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** check identifier đáng lẽ unique không xuất hiện nhiều lần.
**Grammar & collocations:** `uniqueness-check constraint` — constraint; `flag a repeated key` — báo.
**Examples:** `The uniqueness check flagged two customers with the same external identifier.` → Check báo hai customer cùng external ID.
**Liên kết tiếng Hàn:** `고유성 검사`.

## 6. distribution check /ˌdɪstrɪˈbjuːʃən tʃek/
**Part of speech:** noun
**Core meaning (English):** a check comparing observed value frequencies or shapes with an expected distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** check so frequency/shape value quan sát với distribution mong đợi.
**Grammar & collocations:** `distribution-check baseline` — baseline; `detect a shifted category mix` — phát hiện.
**Examples:** `The distribution check detected an unusual surge in one payment method.` → Check thấy payment method tăng bất thường.
**Liên kết tiếng Hàn:** `분포 검사`.

## 7. range check /reɪndʒ tʃek/
**Part of speech:** noun
**Core meaning (English):** a check that a numeric or temporal value falls between permitted lower and upper bounds.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** check value số/thời gian nằm giữa bound dưới và trên.
**Grammar & collocations:** `range-check failure` — failure; `enforce a valid interval` — áp dụng.
**Examples:** `The range check caught a temperature reading outside the sensor's physical limits.` → Check bắt temperature ngoài giới hạn sensor.
**Liên kết tiếng Hàn:** `범위 검사`.

## 8. null rate /nʌl reɪt/
**Part of speech:** noun
**Core meaning (English):** the proportion of values in a field that are missing or explicitly null.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ value field bị thiếu hoặc null rõ.
**Grammar & collocations:** `null-rate threshold` — threshold; `monitor missing values` — monitor.
**Examples:** `The null rate doubled after the address enrichment service changed its response.` → Null rate gấp đôi sau khi service đổi response.
**Liên kết tiếng Hàn:** `널 비율`.

## 9. duplicate rate /ˈduːplɪkət reɪt/
**Part of speech:** noun
**Core meaning (English):** the proportion of records or keys repeated when they are expected to be distinct.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ record/key lặp dù đáng lẽ distinct.
**Grammar & collocations:** `duplicate-rate spike` — spike; `measure repeated events` — đo.
**Examples:** `The duplicate rate rose when the queue redelivered an uncommitted batch.` → Rate duplicate tăng khi queue gửi lại batch chưa commit.
**Liên kết tiếng Hàn:** `중복 비율`.

## 10. outlier score /ˈaʊtlaɪər skɔːr/
**Part of speech:** noun
**Core meaning (English):** a value indicating how unusual a record is compared with a reference population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value cho biết record bất thường thế nào so với population tham chiếu.
**Grammar & collocations:** `outlier-score threshold` — threshold; `investigate an extreme record` — điều tra.
**Examples:** `The outlier score sent an unusually large refund to manual review.` → Score đưa refund lớn bất thường tới review tay.
**Liên kết tiếng Hàn:** `이상치 점수`.

## 11. schema drift /ˈskiːmə drɪft/
**Part of speech:** noun
**Core meaning (English):** an unplanned change in fields, types, or structure between data producer and consumer versions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi ngoài kế hoạch về field/type/structure giữa producer và consumer.
**Grammar & collocations:** `schema-drift alert` — alert; `detect a renamed field` — phát hiện.
**Examples:** `Schema drift broke the report when the producer renamed the account field.` → Drift làm report hỏng khi producer đổi tên field.
**Liên kết tiếng Hàn:** `스키마 드리프트`.

## 12. quality dimension /ˈkwɒləti dɪˈmenʃən/
**Part of speech:** noun
**Core meaning (English):** one aspect used to describe data quality, such as accuracy, completeness, timeliness, or consistency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một khía cạnh mô tả quality như accuracy, completeness, timeliness hoặc consistency.
**Grammar & collocations:** `quality-dimension score` — score; `measure timeliness separately` — đo.
**Examples:** `The audit scored each quality dimension instead of hiding all issues in one number.` → Audit chấm từng dimension thay một số chung.
**Liên kết tiếng Hàn:** `품질 차원`.

## 13. quality threshold /ˈkwɒləti ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** a boundary below or above which data is rejected, quarantined, or escalated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** boundary mà vượt/không đạt sẽ reject, quarantine hoặc escalate.
**Grammar & collocations:** `quality-threshold breach` — breach; `block an unreliable batch` — chặn.
**Examples:** `The quality threshold blocked the feed when completeness fell below ninety-nine percent.` → Threshold chặn feed khi completeness dưới 99%.
**Liên kết tiếng Hàn:** `품질 임계값`.

## 14. quarantine dataset /ˈkwɔːrəntiːn ˈdeɪtəset/
**Part of speech:** noun
**Core meaning (English):** a dataset isolated from normal consumers until its suspected quality or security problem is resolved.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dataset tách khỏi consumer cho đến khi xử lý lỗi quality/security.
**Grammar & collocations:** `quarantine-dataset reason` — lý do; `release a repaired partition` — giải phóng.
**Examples:** `The pipeline placed the malformed batch in a quarantine dataset instead of publishing it.` → Pipeline đưa batch hỏng vào dataset quarantine.
**Liên kết tiếng Hàn:** `격리 데이터셋`.

## 15. data contract test /ˈdeɪtə ˈkɒntrækt test/
**Part of speech:** noun
**Core meaning (English):** a test verifying that a data producer continues to satisfy the schema and behavior promised to consumers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test producer còn đáp ứng schema và behavior đã hứa với consumer không.
**Grammar & collocations:** `data-contract-test fixture` — fixture; `verify a producer promise` — xác minh.
**Examples:** `The data contract test failed before the producer deployed its incompatible change.` → Test fail trước khi producer deploy change incompatible.
**Liên kết tiếng Hàn:** `데이터 계약 테스트`.

## 16. expectation suite /ˌekspekˈteɪʃən swiːt/
**Part of speech:** noun
**Core meaning (English):** a collection of executable expectations describing acceptable data properties.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập expectation executable mô tả property data chấp nhận được.
**Grammar & collocations:** `expectation-suite result` — result; `run checks on a batch` — chạy.
**Examples:** `The expectation suite required a nonempty key and a valid currency code.` → Suite yêu cầu key không rỗng và currency code hợp lệ.
**Liên kết tiếng Hàn:** `기대 사항 모음`.

## 17. profiling report /ˈproʊfaɪlɪŋ rɪˈpɔːrt/
**Part of speech:** noun
**Core meaning (English):** a summary of a dataset's fields, types, distributions, missingness, and notable anomalies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** summary field, type, distribution, missingness và anomaly của dataset.
**Grammar & collocations:** `profiling-report section` — section; `summarize a new extract` — tóm tắt.
**Examples:** `The profiling report showed that the new extract contained an unexpected text column.` → Report cho thấy extract có text column lạ.
**Liên kết tiếng Hàn:** `프로파일링 보고서`.

## 18. column profile /ˈkɒləm ˈproʊfaɪl/
**Part of speech:** noun
**Core meaning (English):** descriptive statistics and metadata collected for one data column.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** statistics và metadata mô tả một column.
**Grammar & collocations:** `column-profile summary` — summary; `inspect a numeric field` — xem.
**Examples:** `The column profile showed a new maximum that exceeded the historical range.` → Profile cho thấy max mới vượt range lịch sử.
**Liên kết tiếng Hàn:** `열 프로필`.

## 19. value distribution /ˈvæljuː ˌdɪstrɪˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** the observed frequency or spread of values in a field.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** frequency hoặc spread value quan sát trong field.
**Grammar & collocations:** `value-distribution chart` — chart; `compare category frequencies` — so.
**Examples:** `The value distribution changed after a new country code was introduced.` → Distribution đổi sau khi thêm country code.
**Liên kết tiếng Hàn:** `값 분포`.

## 20. top value count /tɒp ˈvæljuː kaʊnt/
**Part of speech:** noun
**Core meaning (English):** the frequency of the most common values in a field, often used to spot concentration or unexpected dominance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tần suất value phổ biến nhất, dùng thấy concentration hoặc dominance lạ.
**Grammar & collocations:** `top-value-count table` — table; `inspect dominant categories` — xem.
**Examples:** `The top value count revealed that one default status filled most new records.` → Count lộ một status default chiếm đa số record mới.
**Liên kết tiếng Hàn:** `상위 값 개수`.

## Review in context

**Data freshness** is measured against a **freshness SLA**; a **completeness check**, **validity check**, and **uniqueness check** protect basic integrity. A **distribution check** and **range check** catch shifts, while **null rate**, **duplicate rate**, and **outlier score** quantify problems. **Schema drift** may affect one **quality dimension**, so a **quality threshold** can isolate a **quarantine dataset**. A **data contract test** and **expectation suite** automate promises. A **profiling report**, **column profile**, **value distribution**, and **top value count** explain what changed.

**Bản dịch tiếng Việt:** **Data freshness** được đo theo **freshness SLA**; **completeness check**, **validity check** và **uniqueness check** bảo vệ integrity cơ bản. **Distribution check** và **range check** bắt shift, còn **null rate**, **duplicate rate** và **outlier score** định lượng vấn đề. **Schema drift** có thể ảnh hưởng một **quality dimension**, nên **quality threshold** có thể cô lập **quarantine dataset**. **Data contract test** và **expectation suite** tự động hóa cam kết. **Profiling report**, **column profile**, **value distribution** và **top value count** giải thích thay đổi.
