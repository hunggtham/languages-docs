# C2 Vocabulary — Data quality engineering and assurance

This lesson follows a quality signal from measurable dimensions and constraints through detection, quarantine, reconciliation, remediation, and release gates.

Flow: **data quality dimension → freshness SLO → completeness ratio → validity constraint → uniqueness constraint → nullability contract → duplicate suppression → reconciliation report → reconciliation window → anomaly budget → quality incident → quarantine queue → quarantine table → quality scorecard → quality gate → exception workflow → remediation owner → backfill window → backfill manifest → schema compatibility**.

## 1. data quality dimension /ˈdeɪtə ˈkwɒləti daɪˈmenʃən/
**Part of speech:** noun
**Core meaning (English):** a measurable aspect of dataset fitness, such as accuracy, completeness, timeliness, or consistency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khía cạnh đo được của chất lượng dataset như accuracy, completeness, timeliness hoặc consistency.
**Grammar & collocations:** `data-quality-dimension model` — mô hình; `define a measurable property` — định nghĩa.
**Examples:** `The quality review separated accuracy from completeness instead of treating them as one score.` → Review tách accuracy khỏi completeness.
**Liên kết tiếng Hàn:** `데이터 품질 차원`.

## 2. freshness SLO /ˈfreʃnəs ˌes el ˈoʊ/
**Part of speech:** noun
**Core meaning (English):** a service-level objective stating how recent a dataset must be for its users.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mục tiêu dịch vụ quy định dataset phải mới đến mức nào.
**Grammar & collocations:** `freshness-SLO breach` — vi phạm; `meet a two-hour objective` — đạt.
**Examples:** `The dashboard breached its freshness SLO when the ingestion watermark stopped moving.` → Dashboard vi phạm SLO khi watermark đứng.
**Liên kết tiếng Hàn:** `최신성 SLO`.

## 3. completeness ratio /kəmˈpliːtnəs ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the proportion of expected records or fields that contain usable values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ record/field kỳ vọng có giá trị sử dụng được.
**Grammar & collocations:** `completeness-ratio threshold` — ngưỡng; `calculate a missing-field share` — tính.
**Examples:** `The completeness ratio fell after a mobile release stopped sending postal codes.` → Ratio giảm khi app ngừng gửi mã bưu chính.
**Liên kết tiếng Hàn:** `완전성 비율`.

## 4. validity constraint /vəˈlɪdəti kənˈstreɪnt/
**Part of speech:** noun
**Core meaning (English):** a rule requiring a value to conform to an allowed type, range, format, or semantic set.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule buộc value đúng type, range, format hoặc tập nghĩa cho phép.
**Grammar & collocations:** `validity-constraint violation` — vi phạm; `reject an impossible date` — từ chối.
**Examples:** `A validity constraint rejected invoices whose currency code was not in the approved set.` → Constraint loại invoice có currency code sai.
**Liên kết tiếng Hàn:** `유효성 제약`.

## 5. uniqueness constraint /juːˈniːknəs kənˈstreɪnt/
**Part of speech:** noun
**Core meaning (English):** a rule requiring a key or combination of fields to identify at most one record.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule buộc key hoặc tổ hợp field chỉ định danh tối đa một record.
**Grammar & collocations:** `uniqueness-constraint check` — kiểm tra; `detect a duplicate key` — phát hiện.
**Examples:** `The uniqueness constraint caught two customer profiles sharing the same external identifier.` → Constraint bắt hai profile trùng identifier.
**Liên kết tiếng Hàn:** `고유성 제약`.

## 6. nullability contract /ˌnʌləˈbɪləti ˈkɒntrækt/
**Part of speech:** noun
**Core meaning (English):** an agreement specifying which fields may be absent and what absence means.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thỏa thuận nêu field nào được vắng và sự vắng đó có nghĩa gì.
**Grammar & collocations:** `nullability-contract change` — thay đổi; `distinguish unknown from not-applicable` — phân biệt.
**Examples:** `The nullability contract said a blank discharge date meant that treatment was still active.` → Contract quy định ngày trống nghĩa là đang điều trị.
**Liên kết tiếng Hàn:** `널 허용성 계약`.

## 7. duplicate suppression /ˈdjuːplɪkət səˈpreʃən/
**Part of speech:** noun
**Core meaning (English):** the deliberate removal or neutralization of repeated records according to a matching rule.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loại hoặc vô hiệu record lặp theo quy tắc match.
**Grammar & collocations:** `duplicate-suppression key` — key; `collapse repeated events` — gộp.
**Examples:** `Duplicate suppression collapsed retries so the ledger counted one payment rather than three.` → Suppression gộp retry thành một payment.
**Liên kết tiếng Hàn:** `중복 억제`.

## 8. reconciliation report /ˌrekənsɪliˈeɪʃən rɪˈpɔːrt/
**Part of speech:** noun
**Core meaning (English):** a report comparing two representations of data and explaining mismatches between them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** report so sánh hai biểu diễn data và giải thích mismatch.
**Grammar & collocations:** `reconciliation-report detail` — chi tiết; `explain a balance difference` — giải thích.
**Examples:** `The reconciliation report explained why the warehouse total exceeded the payment gateway total.` → Report giải thích chênh lệch tổng.
**Liên kết tiếng Hàn:** `조정 보고서`.

## 9. reconciliation window /ˌrekənsɪliˈeɪʃən ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** a defined period during which related systems are compared and temporary differences are allowed to settle.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian quy định để so sánh hệ thống và chờ lệch tạm thời ổn định.
**Grammar & collocations:** `reconciliation-window close` — đóng; `allow a delayed settlement` — cho phép.
**Examples:** `The reconciliation window stayed open until delayed card settlements arrived.` → Window mở đến khi settlement thẻ đến.
**Liên kết tiếng Hàn:** `조정 기간`.

## 10. anomaly budget /əˈnɒməli ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a tolerated quantity or rate of unusual observations before a quality response is required.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng hoặc tỷ lệ anomaly được chịu trước khi phải phản ứng.
**Grammar & collocations:** `anomaly-budget exhaustion` — cạn; `tolerate a small deviation` — chịu.
**Examples:** `The anomaly budget was exhausted when three regions reported impossible temperatures.` → Budget cạn khi ba vùng có nhiệt độ bất khả.
**Liên kết tiếng Hàn:** `이상치 예산`.

## 11. quality incident /ˈkwɒləti ˈɪnsɪdənt/
**Part of speech:** noun
**Core meaning (English):** a tracked event in which data quality falls below an agreed requirement and affects users or decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sự kiện được theo dõi khi chất lượng dưới yêu cầu và ảnh hưởng user/quyết định.
**Grammar & collocations:** `quality-incident ticket` — ticket; `triage a downstream impact` — phân loại.
**Examples:** `The quality incident delayed the financial close until the corrupted feed was repaired.` → Incident trì hoãn chốt tài chính.
**Liên kết tiếng Hàn:** `품질 사고`.

## 12. quarantine queue /ˈkwɒrəntiːn kjuː/
**Part of speech:** noun
**Core meaning (English):** a holding queue for records that fail validation before a person or process decides their fate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàng đợi giữ record lỗi trước khi quyết định xử lý.
**Grammar & collocations:** `quarantine-queue consumer` — consumer; `release a corrected record` — thả.
**Examples:** `Malformed addresses entered the quarantine queue instead of contaminating the customer table.` → Địa chỉ lỗi vào queue thay vì làm bẩn table.
**Liên kết tiếng Hàn:** `격리 큐`.

## 13. quarantine table /ˈkwɒrəntiːn ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** a separate table storing rejected or suspicious records with diagnostics and original payloads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** table riêng giữ record bị loại/nghi ngờ cùng chẩn đoán và payload gốc.
**Grammar & collocations:** `quarantine-table retention` — lưu giữ; `inspect a rejected payload` — kiểm tra.
**Examples:** `The quarantine table preserved the raw message while engineers repaired the parser.` → Table giữ message thô khi sửa parser.
**Liên kết tiếng Hàn:** `격리 테이블`.

## 14. quality scorecard /ˈkwɒləti ˈskɔːrkɑːrd/
**Part of speech:** noun
**Core meaning (English):** a compact view of quality measures, thresholds, trends, owners, and unresolved weaknesses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảng tóm tắt measure, threshold, trend, owner và điểm yếu chưa giải quyết.
**Grammar & collocations:** `quality-scorecard review` — review; `compare a weekly trend` — so sánh.
**Examples:** `The quality scorecard showed improving completeness but worsening freshness.` → Scorecard cho thấy completeness tăng nhưng freshness giảm.
**Liên kết tiếng Hàn:** `품질 스코어카드`.

## 15. quality gate /ˈkwɒləti ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** an automated or human checkpoint that blocks publication until quality conditions are met.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** checkpoint tự động hoặc thủ công chặn publish đến khi đạt điều kiện chất lượng.
**Grammar & collocations:** `quality-gate failure` — thất bại; `block an unsafe release` — chặn.
**Examples:** `The quality gate blocked the model refresh because its feature table was incomplete.` → Gate chặn refresh model vì feature table thiếu.
**Liên kết tiếng Hàn:** `품질 게이트`.

## 16. exception workflow /ɪkˈsepʃən ˈwɜːrkfloʊ/
**Part of speech:** noun
**Core meaning (English):** a controlled process for reviewing, approving, tracking, and eventually closing a departure from a rule.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy trình kiểm soát để review, duyệt, theo dõi và đóng ngoại lệ khỏi rule.
**Grammar & collocations:** `exception-workflow state` — trạng thái; `approve a time-limited deviation` — duyệt.
**Examples:** `The exception workflow required an expiry date before a team could bypass the quality gate.` → Workflow buộc có ngày hết hạn.
**Liên kết tiếng Hàn:** `예외 워크플로`.

## 17. remediation owner /rɪˌmiːdiˈeɪʃən ˈoʊnər/
**Part of speech:** noun
**Core meaning (English):** the person or team accountable for correcting a quality defect and proving that it is resolved.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** người/team chịu trách nhiệm sửa defect và chứng minh đã giải quyết.
**Grammar & collocations:** `remediation-owner assignment` — phân công; `close a corrective action` — đóng.
**Examples:** `The remediation owner replaced the faulty extractor and attached evidence to the incident.` → Owner thay extractor lỗi và đính bằng chứng.
**Liên kết tiếng Hàn:** `개선 책임자`.

## 18. backfill window /ˈbækfɪl ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** a bounded historical interval selected for recomputing or repairing missing data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng lịch sử giới hạn được chọn để tính lại hoặc sửa data thiếu.
**Grammar & collocations:** `backfill-window estimate` — ước tính; `recompute a historical slice` — tính lại.
**Examples:** `The team chose a backfill window covering the seven days affected by the parser bug.` → Team chọn bảy ngày bị bug.
**Liên kết tiếng Hàn:** `백필 기간`.

## 19. backfill manifest /ˈbækfɪl ˈmænɪfest/
**Part of speech:** noun
**Core meaning (English):** a record listing the partitions, code version, inputs, and outcomes of a historical repair run.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record liệt kê partition, version code, input và kết quả của lần sửa lịch sử.
**Grammar & collocations:** `backfill-manifest entry` — mục; `reproduce a repair run` — tái tạo.
**Examples:** `The backfill manifest let auditors reproduce which partitions were rewritten.` → Manifest cho auditor tái tạo partition đã rewrite.
**Liên kết tiếng Hàn:** `백필 매니페스트`.

## 20. schema compatibility /ˈskiːmə kəmˌpætəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the degree to which a schema change preserves the ability of existing producers and consumers to interoperate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức schema mới vẫn cho producer/consumer cũ tương tác được.
**Grammar & collocations:** `schema-compatibility check` — kiểm tra; `introduce a backward-compatible field` — thêm.
**Examples:** `The registry rejected the deployment because the new schema broke compatibility with an older consumer.` → Registry từ chối vì schema phá compatibility.
**Liên kết tiếng Hàn:** `스키마 호환성`.

## Review in context

A **data quality dimension** turns fitness into a measurable idea: a **freshness SLO**, **completeness ratio**, **validity constraint**, **uniqueness constraint**, and **nullability contract** make expectations testable. **Duplicate suppression**, a **reconciliation report**, and a **reconciliation window** control ordinary mismatches, while an **anomaly budget** identifies when a **quality incident** needs action. Bad records wait in a **quarantine queue** or **quarantine table**; a **quality scorecard** summarizes the trend and a **quality gate** blocks unsafe publication. An **exception workflow** records a justified deviation, a **remediation owner** fixes it, a **backfill window** limits historical repair, a **backfill manifest** preserves evidence, and **schema compatibility** protects existing consumers.

**Bản dịch tiếng Việt:** **Data quality dimension** biến chất lượng thành khái niệm đo được: **freshness SLO**, **completeness ratio**, **validity constraint**, **uniqueness constraint** và **nullability contract** khiến kỳ vọng có thể kiểm tra. **Duplicate suppression**, **reconciliation report** và **reconciliation window** xử lý lệch thông thường, còn **anomaly budget** cho biết khi nào **quality incident** cần hành động. Record lỗi chờ trong **quarantine queue** hoặc **quarantine table**; **quality scorecard** tóm tắt xu hướng và **quality gate** chặn publish không an toàn. **Exception workflow** ghi ngoại lệ có lý do, **remediation owner** sửa lỗi, **backfill window** giới hạn sửa lịch sử, **backfill manifest** giữ bằng chứng, còn **schema compatibility** bảo vệ consumer cũ.
