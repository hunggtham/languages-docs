# C2 Vocabulary — Service-level objectives and alert policy

This lesson turns user experience into measurable indicators, objectives, budgets, and alerts with clear recovery behavior.

Flow: **service level indicator → service level objective → error budget policy → availability window → latency objective → saturation metric → burn alert → multi-window alert → symptom alert → cause alert → indicator aggregation → request-based SLI → event-based SLI → good-event ratio → invalid event → exclusion rule → objective window → alert hysteresis → recovery threshold → incident threshold**.

## 1. service level indicator /ˈsɜːrvɪs levəl ˈɪndɪkeɪtər/
**Part of speech:** noun
**Core meaning (English):** a measurement representing an aspect of service performance that users care about.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép đo đại diện khía cạnh service mà user quan tâm.
**Grammar & collocations:** `service-level-indicator definition` — định nghĩa; `measure successful requests` — đo.
**Examples:** `The service level indicator measured whether customers received a usable search result.` → Indicator đo customer có nhận kết quả dùng được.
**Liên kết tiếng Hàn:** `서비스 수준 지표`.

## 2. service level objective /ˈsɜːrvɪs levəl əbˈdʒektɪv/
**Part of speech:** noun
**Core meaning (English):** a target value for a service-level indicator over a stated period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị mục tiêu của indicator trong khoảng thời gian xác định.
**Grammar & collocations:** `service-level-objective target` — mục tiêu; `meet a monthly reliability goal` — đạt.
**Examples:** `The service level objective required 99.9 percent of checkout requests to succeed.` → Objective yêu cầu 99,9% checkout thành công.
**Liên kết tiếng Hàn:** `서비스 수준 목표`.

## 3. error budget policy /ˈerər ˈbʌdʒɪt ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** rules describing how a team's tolerated unreliability may be spent, protected, or replenished.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule về cách dùng, bảo vệ hoặc bổ sung mức unreliability được phép.
**Grammar & collocations:** `error-budget-policy action` — action; `pause risky launches` — dừng.
**Examples:** `The error budget policy paused feature launches after repeated availability failures.` → Policy dừng launch sau nhiều lỗi availability.
**Liên kết tiếng Hàn:** `오류 예산 정책`.

## 4. availability window /əˌveɪləˈbɪləti ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the period over which service availability is measured and compared with its objective.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian đo availability và so với objective.
**Grammar & collocations:** `availability-window boundary` — ranh giới; `exclude an announced outage` — loại.
**Examples:** `The availability window reset at the start of each monthly reporting period.` → Window reset đầu mỗi kỳ tháng.
**Liên kết tiếng Hàn:** `가용성 기간`.

## 5. latency objective /ˈleɪtənsi əbˈdʒektɪv/
**Part of speech:** noun
**Core meaning (English):** a target limiting how long a service may take to respond for a defined portion of requests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mục tiêu giới hạn thời gian response cho tỷ lệ request xác định.
**Grammar & collocations:** `latency-objective percentile` — percentile; `respond within two hundred milliseconds` — phản hồi.
**Examples:** `The latency objective covered 99 percent of interactive requests, not only the average.` → Objective bao phủ 99% request, không chỉ trung bình.
**Liên kết tiếng Hàn:** `지연 시간 목표`.

## 6. saturation metric /ˌsætʃəˈreɪʃən ˈmetrɪk/
**Part of speech:** noun
**Core meaning (English):** a measurement showing how close a resource is to exhausting its usable capacity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép đo cho thấy resource gần cạn capacity đến đâu.
**Grammar & collocations:** `saturation-metric trend` — xu hướng; `monitor disk pressure` — theo dõi.
**Examples:** `The saturation metric warned that queue storage would fill before the next deployment.` → Metric báo storage queue sắp đầy.
**Liên kết tiếng Hàn:** `포화도 지표`.

## 7. burn alert /bɜːrn əˈlɜːrt/
**Part of speech:** noun
**Core meaning (English):** an alert fired when reliability budget is being consumed faster than an acceptable rate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cảnh báo khi budget reliability bị tiêu nhanh hơn rate cho phép.
**Grammar & collocations:** `burn-alert threshold` — ngưỡng; `page an on-call engineer` — gọi.
**Examples:** `The burn alert paged the team when errors threatened to exhaust the weekly budget.` → Alert gọi team khi lỗi đe dọa hết budget tuần.
**Liên kết tiếng Hàn:** `소진 경보`.

## 8. multi-window alert /ˌmʌlti ˈwɪndoʊ əˈlɜːrt/
**Part of speech:** noun
**Core meaning (English):** an alert requiring a fast and a slow measurement window to agree before paging.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** alert cần window nhanh và chậm cùng xác nhận trước khi page.
**Grammar & collocations:** `multi-window-alert rule` — rule; `avoid paging on a brief spike` — tránh.
**Examples:** `The multi-window alert ignored a one-minute spike that did not persist over the longer window.` → Alert bỏ qua spike ngắn không kéo dài.
**Liên kết tiếng Hàn:** `다중 기간 경보`.

## 9. symptom alert /ˈsɪmptəm əˈlɜːrt/
**Part of speech:** noun
**Core meaning (English):** an alert based on user-visible failure or degradation rather than an internal cause.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** alert dựa trên lỗi/giảm chất lượng user thấy, không phải nguyên nhân nội bộ.
**Grammar & collocations:** `symptom-alert dashboard` — dashboard; `detect failed checkout` — phát hiện.
**Examples:** `The symptom alert fired when customers could not complete checkout, regardless of the backend cause.` → Alert bật khi customer không checkout được.
**Liên kết tiếng Hàn:** `증상 경보`.

## 10. cause alert /kɔːz əˈlɜːrt/
**Part of speech:** noun
**Core meaning (English):** an alert tied to a suspected technical condition that may explain a user-visible symptom.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** alert gắn với condition kỹ thuật nghi là nguyên nhân symptom.
**Grammar & collocations:** `cause-alert correlation` — correlation; `identify a saturated database` — nhận diện.
**Examples:** `The cause alert identified a saturated connection pool behind the checkout symptom.` → Alert nhận diện pool connection bão hòa.
**Liên kết tiếng Hàn:** `원인 경보`.

## 11. indicator aggregation /ˈɪndɪkeɪtər ˌæɡrəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** combining raw observations into the value used for an SLI or objective comparison.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp observation thô thành value dùng cho SLI/objective.
**Grammar & collocations:** `indicator-aggregation method` — phương pháp; `combine regional measurements` — gộp.
**Examples:** `Indicator aggregation used the worst regional success rate rather than a global average.` → Aggregation dùng rate vùng tệ nhất.
**Liên kết tiếng Hàn:** `지표 집계`.

## 12. request-based SLI /rɪˈkwest beɪst ˌes el ˈaɪ/
**Part of speech:** noun
**Core meaning (English):** an indicator calculated from the number and quality of individual service requests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** indicator tính từ số lượng và chất lượng từng request.
**Grammar & collocations:** `request-based-SLI numerator` — tử số; `count successful calls` — đếm.
**Examples:** `The request-based SLI counted a timeout as a bad event even when the process stayed alive.` → SLI coi timeout là event xấu.
**Liên kết tiếng Hàn:** `요청 기반 SLI`.

## 13. event-based SLI /ɪˈvent beɪst ˌes el ˈaɪ/
**Part of speech:** noun
**Core meaning (English):** an indicator calculated from domain events that represent completed or failed user outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** indicator tính từ event domain đại diện outcome user hoàn tất/thất bại.
**Grammar & collocations:** `event-based-SLI definition` — định nghĩa; `measure completed orders` — đo.
**Examples:** `The event-based SLI treated a fulfilled order as good even if intermediate retries occurred.` → SLI coi order fulfill là tốt dù retry.
**Liên kết tiếng Hàn:** `이벤트 기반 SLI`.

## 14. good-event ratio /ɡʊd ɪˈvent ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the proportion of measured events that satisfy the defined success criteria.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ event đo được thỏa tiêu chí thành công.
**Grammar & collocations:** `good-event-ratio calculation` — tính toán; `compare good and total events` — so sánh.
**Examples:** `The good-event ratio fell when delayed notifications exceeded the user promise.` → Ratio giảm khi notification trễ quá promise.
**Liên kết tiếng Hàn:** `양호 이벤트 비율`.

## 15. invalid event /ɪnˈvælɪd ɪˈvent/
**Part of speech:** noun
**Core meaning (English):** an observation excluded from SLI accounting because it is malformed, duplicated, or outside the measurement contract.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** observation bị loại khỏi SLI vì malformed, duplicate hoặc ngoài contract.
**Grammar & collocations:** `invalid-event reason` — lý do; `exclude a synthetic probe` — loại.
**Examples:** `The pipeline marked a duplicate retry as an invalid event instead of counting it twice.` → Pipeline đánh retry duplicate là invalid.
**Liên kết tiếng Hàn:** `유효하지 않은 이벤트`.

## 16. exclusion rule /ɪkˈskluːʒən ruːl/
**Part of speech:** noun
**Core meaning (English):** a documented condition specifying which observations do not count toward an indicator or objective.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện tài liệu hóa nêu observation nào không tính vào indicator/objective.
**Grammar & collocations:** `exclusion-rule audit` — audit; `exclude planned maintenance` — loại.
**Examples:** `The exclusion rule removed scheduled maintenance but did not remove an unannounced outage.` → Rule loại maintenance có lịch nhưng không loại outage bất ngờ.
**Liên kết tiếng Hàn:** `제외 규칙`.

## 17. objective window /əbˈdʒektɪv ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the time span over which an objective is evaluated and budget consumption is calculated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian đánh giá objective và tính budget.
**Grammar & collocations:** `objective-window reset` — reset; `review a rolling period` — xem.
**Examples:** `The objective window used a rolling thirty-day period so one quiet week could not hide recent failures.` → Window rolling 30 ngày không che lỗi gần đây.
**Liên kết tiếng Hàn:** `목표 기간`.

## 18. alert hysteresis /əˈlɜːrt ˌhɪstəˈriːsɪs/
**Part of speech:** noun
**Core meaning (English):** different activation and recovery thresholds that prevent an alert from rapidly flapping.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngưỡng bật/tắt khác nhau để alert không bật tắt liên tục.
**Grammar & collocations:** `alert-hysteresis band` — dải; `require sustained recovery` — yêu cầu.
**Examples:** `Alert hysteresis kept the page open until latency stayed below the recovery threshold.` → Hysteresis giữ page đến khi latency ổn định.
**Liên kết tiếng Hàn:** `경보 히스테리시스`.

## 19. recovery threshold /rɪˈkʌvəri ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** the condition that must be met before an active alert or incident is considered recovered.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện phải đạt trước khi alert/incident được coi là recovered.
**Grammar & collocations:** `recovery-threshold duration` — thời lượng; `close an incident automatically` — đóng.
**Examples:** `The recovery threshold required fifteen minutes of successful requests before closure.` → Threshold cần 15 phút request thành công.
**Liên kết tiếng Hàn:** `복구 임계값`.

## 20. incident threshold /ˈɪnsɪdənt ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** the measured boundary at which a service condition becomes an operational incident requiring coordinated response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới đo được khi condition thành incident cần response phối hợp.
**Grammar & collocations:** `incident-threshold breach` — vi phạm; `declare an incident` — tuyên bố.
**Examples:** `The incident threshold was crossed when the error budget burn persisted across both windows.` → Threshold bị vượt khi burn kéo dài cả hai window.
**Liên kết tiếng Hàn:** `사고 임계값`.

## Review in context

A **service level indicator** measures user experience, and a **service level objective** sets its target. An **error budget policy** governs failure, an **availability window** defines measurement, a **latency objective** limits response time, and a **saturation metric** reveals capacity pressure. A **burn alert** can use a **multi-window alert**; a **symptom alert** shows impact while a **cause alert** suggests why. **Indicator aggregation** combines evidence, a **request-based SLI** counts calls, an **event-based SLI** counts outcomes, and a **good-event ratio** summarizes success. An **invalid event** follows an **exclusion rule**; an **objective window** sets scope, **alert hysteresis** prevents flapping, a **recovery threshold** closes safely, and an **incident threshold** starts coordinated response.

**Bản dịch tiếng Việt:** **Service level indicator** đo trải nghiệm user, còn **service level objective** đặt mục tiêu. **Error budget policy** quản lý failure, **availability window** định phạm vi đo, **latency objective** giới hạn response, và **saturation metric** lộ áp lực capacity. **Burn alert** có thể dùng **multi-window alert**; **symptom alert** cho thấy ảnh hưởng, còn **cause alert** gợi nguyên nhân. **Indicator aggregation** gộp evidence, **request-based SLI** đếm call, **event-based SLI** đếm outcome, và **good-event ratio** tóm tắt success. **Invalid event** theo **exclusion rule**; **objective window** đặt scope, **alert hysteresis** ngăn flapping, **recovery threshold** đóng an toàn, còn **incident threshold** khởi động response phối hợp.
