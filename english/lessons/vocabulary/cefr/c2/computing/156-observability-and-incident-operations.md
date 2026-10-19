# C2 Vocabulary — Observability and incident operations

This lesson follows telemetry from metric design through trace correlation, alert routing, and coordinated incident response.

Flow: **metric cardinality → label explosion → summary quantile → counter reset → gauge scrape → remote write → metric relabeling → log sampling → structured log → correlation identifier → trace parent → sampling decision → dependency map → saturation signal → alert grouping → alert inhibition → notification route → on-call handoff → escalation tier → incident severity**.

## 1. metric cardinality /ˈmetrɪk ˌkɑːrdəˈnæləti/
**Part of speech:** noun
**Core meaning (English):** the number of distinct label combinations represented by a metric.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số tổ hợp label khác nhau mà metric biểu diễn.
**Grammar & collocations:** `metric-cardinality budget` — budget; `limit distinct series` — giới hạn.
**Examples:** `Metric cardinality grew sharply when the request identifier became a label.` → Cardinality tăng mạnh khi request ID thành label.
**Liên kết tiếng Hàn:** `메트릭 카디널리티`.

## 2. label explosion /ˈleɪbəl ɪkˈspləʊʒən/
**Part of speech:** noun
**Core meaning (English):** uncontrolled growth in metric series caused by labels with too many distinct values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** series metric phình không kiểm soát vì label có quá nhiều value khác nhau.
**Grammar & collocations:** `label-explosion risk` — rủi ro; `remove a high-variance label` — bỏ.
**Examples:** `Label explosion exhausted the monitoring store after users were added as dimensions.` → Explosion làm hết storage khi user thành dimension.
**Liên kết tiếng Hàn:** `라벨 폭발`.

## 3. summary quantile /ˈsʌməri ˈkwɒntaɪl/
**Part of speech:** noun
**Core meaning (English):** a percentile estimate calculated from observations, often with limited aggregation across sources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimate percentile từ observation, thường khó aggregate chính xác giữa source.
**Grammar & collocations:** `summary-quantile estimate` — estimate; `report the ninety-ninth percentile` — báo.
**Examples:** `The summary quantile showed that the slowest requests were worsening.` → Quantile cho thấy request chậm nhất xấu đi.
**Liên kết tiếng Hàn:** `요약 분위수`.

## 4. counter reset /ˈkaʊntər riˈset/
**Part of speech:** noun
**Core meaning (English):** a decrease in a cumulative metric because its producing process restarted or recreated the counter.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** counter tích lũy giảm vì process restart hoặc tạo counter mới.
**Grammar & collocations:** `counter-reset detection` — phát hiện; `ignore a restart drop` — bỏ qua.
**Examples:** `The rate calculation handled the counter reset after the exporter restarted.` → Tính rate xử lý reset sau exporter restart.
**Liên kết tiếng Hàn:** `카운터 재설정`.

## 5. gauge scrape /ɡeɪdʒ skreɪp/
**Part of speech:** noun
**Core meaning (English):** one collection of a value that may rise or fall, such as current memory or queue depth.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một lần thu value có thể tăng/giảm như memory hiện tại hoặc queue depth.
**Grammar & collocations:** `gauge-scrape timestamp` — timestamp; `sample current occupancy` — lấy mẫu.
**Examples:** `The gauge scrape captured the queue depth before the autoscaler reacted.` → Scrape gauge chụp queue depth trước autoscaler.
**Liên kết tiếng Hàn:** `게이지 스크랩`.

## 6. remote write /rɪˈmoʊt raɪt/
**Part of speech:** noun
**Core meaning (English):** sending collected telemetry from one monitoring agent to a remote storage system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gửi telemetry đã thu từ agent tới storage monitoring từ xa.
**Grammar & collocations:** `remote-write queue` — queue; `forward compressed samples` — chuyển.
**Examples:** `Remote write buffered samples locally when the central metrics store was unavailable.` → Remote write buffer sample khi store trung tâm down.
**Liên kết tiếng Hàn:** `원격 쓰기`.

## 7. metric relabeling /ˈmetrɪk riˈleɪbəlɪŋ/
**Part of speech:** noun
**Core meaning (English):** changing, dropping, or rewriting metric labels before samples are stored or forwarded.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi, bỏ hoặc viết lại label trước khi lưu/chuyển sample.
**Grammar & collocations:** `metric-relabeling rule` — rule; `drop an unnecessary label` — bỏ.
**Examples:** `Metric relabeling removed the ephemeral pod name from long-term storage.` → Relabeling bỏ pod name tạm khỏi storage dài hạn.
**Liên kết tiếng Hàn:** `메트릭 재라벨링`.

## 8. log sampling /lɒɡ ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** retaining only a selected subset of log records to reduce volume while preserving useful evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ giữ một phần log để giảm volume nhưng vẫn giữ evidence cần.
**Grammar & collocations:** `log-sampling policy` — policy; `retain all error records` — giữ.
**Examples:** `Log sampling kept every error but retained only a fraction of successful requests.` → Sampling giữ mọi error nhưng bớt request thành công.
**Liên kết tiếng Hàn:** `로그 샘플링`.

## 9. structured log /ˈstrʌktʃərd lɒɡ/
**Part of speech:** noun
**Core meaning (English):** a log record whose fields follow a machine-readable schema rather than free-form text.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** log có field theo schema máy đọc được thay vì text tự do.
**Grammar & collocations:** `structured-log field` — field; `parse a JSON record` — parse.
**Examples:** `The structured log exposed the tenant and correlation identifier as separate fields.` → Log có cấu trúc lộ tenant và ID riêng.
**Liên kết tiếng Hàn:** `구조화 로그`.

## 10. correlation identifier /ˌkɒrəˈleɪʃən aɪˈdentəfaɪər/
**Part of speech:** noun
**Core meaning (English):** a value carried across components so records belonging to one request or workflow can be connected.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value truyền qua component để nối record của cùng request/workflow.
**Grammar & collocations:** `correlation-identifier field` — field; `follow a request across services` — theo dõi.
**Examples:** `The correlation identifier linked the timeout log to the original checkout request.` → ID nối log timeout với request checkout gốc.
**Liên kết tiếng Hàn:** `상관 식별자`.

## 11. trace parent /treɪs ˈperənt/
**Part of speech:** noun
**Core meaning (English):** the span or trace context from which a child operation inherits its causal relationship.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** span/context mà operation con kế thừa quan hệ nhân quả.
**Grammar & collocations:** `trace-parent context` — context; `attach a child span` — gắn.
**Examples:** `The worker preserved the trace parent when it moved the job to another queue.` → Worker giữ parent khi chuyển job sang queue khác.
**Liên kết tiếng Hàn:** `트레이스 부모`.

## 12. sampling decision /ˈsæmplɪŋ dɪˈsɪʒən/
**Part of speech:** noun
**Core meaning (English):** the choice to record or omit a telemetry item according to a sampling policy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyết định ghi hoặc bỏ telemetry theo policy sampling.
**Grammar & collocations:** `sampling-decision flag` — flag; `sample an error trace` — lấy mẫu.
**Examples:** `The sampling decision kept the trace because its latency exceeded the threshold.` → Decision giữ trace vì latency vượt ngưỡng.
**Liên kết tiếng Hàn:** `샘플링 결정`.

## 13. dependency map /dɪˈpendənsi mæp/
**Part of speech:** noun
**Core meaning (English):** a visual or structured representation of services and the relationships between them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn service và quan hệ giữa chúng.
**Grammar & collocations:** `dependency-map edge` — edge; `identify a downstream service` — xác định.
**Examples:** `The dependency map showed that the checkout API relied on an unexpected identity service.` → Map cho thấy API checkout phụ thuộc identity service bất ngờ.
**Liên kết tiếng Hàn:** `종속성 맵`.

## 14. saturation signal /ˌsætʃəˈreɪʃən ˈsɪɡnəl/
**Part of speech:** noun
**Core meaning (English):** telemetry indicating that a resource is nearing or exceeding its usable capacity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** telemetry báo resource gần hoặc vượt capacity dùng được.
**Grammar & collocations:** `saturation-signal threshold` — ngưỡng; `detect CPU exhaustion` — phát hiện.
**Examples:** `The saturation signal warned that the database connection pool was nearly full.` → Signal cảnh báo pool connection gần đầy.
**Liên kết tiếng Hàn:** `포화 신호`.

## 15. alert grouping /əˈlɜːrt ˈɡruːpɪŋ/
**Part of speech:** noun
**Core meaning (English):** combining related alerts into one notification so one incident does not create distracting duplicates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom alert liên quan thành một notification để tránh duplicate gây nhiễu.
**Grammar & collocations:** `alert-grouping key` — key; `group alerts by service` — gom.
**Examples:** `Alert grouping combined hundreds of replica warnings into one database incident.` → Grouping gộp hàng trăm warning thành một incident.
**Liên kết tiếng Hàn:** `경보 그룹화`.

## 16. alert inhibition /əˈlɜːrt ˌɪnhəˈbɪʃən/
**Part of speech:** noun
**Core meaning (English):** suppressing a dependent alert when a higher-level alert already explains the underlying failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suppress alert phụ khi alert cấp cao đã giải thích failure gốc.
**Grammar & collocations:** `alert-inhibition rule` — rule; `suppress downstream symptoms` — suppress.
**Examples:** `Alert inhibition muted host symptoms while the regional network outage was active.` → Inhibition mute symptom host khi outage vùng đang xảy ra.
**Liên kết tiếng Hàn:** `경보 억제`.

## 17. notification route /ˌnoʊtɪfɪˈkeɪʃən ruːt/
**Part of speech:** noun
**Core meaning (English):** a rule deciding where and to whom an alert should be delivered.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule quyết định alert gửi tới đâu và ai nhận.
**Grammar & collocations:** `notification-route override` — override; `route a critical alert to paging` — định tuyến.
**Examples:** `The notification route sent database alerts to the storage team's pager.` → Route gửi alert database tới pager đội storage.
**Liên kết tiếng Hàn:** `알림 경로`.

## 18. on-call handoff /ˌɒn kɔːl ˈhændɒf/
**Part of speech:** noun
**Core meaning (English):** the transfer of current incidents, context, and responsibilities from one duty engineer to another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bàn giao incident, context và trách nhiệm giữa engineer trực.
**Grammar & collocations:** `on-call-handoff note` — note; `transfer incident ownership` — bàn giao.
**Examples:** `The on-call handoff included the current hypothesis and the next diagnostic step.` → Handoff ghi hypothesis và bước chẩn đoán kế.
**Liên kết tiếng Hàn:** `온콜 인계`.

## 19. escalation tier /ˌeskəˈleɪʃən tɪər/
**Part of speech:** noun
**Core meaning (English):** a defined level of expertise or authority invoked when an incident exceeds the current team's ability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấp expertise/authority được gọi khi incident vượt khả năng team hiện tại.
**Grammar & collocations:** `escalation-tier policy` — policy; `page the next tier` — gọi.
**Examples:** `The escalation tier brought in a database specialist after replication stopped.` → Tier gọi specialist khi replication dừng.
**Liên kết tiếng Hàn:** `에스컬레이션 단계`.

## 20. incident severity /ˈɪnsɪdənt səˈverəti/
**Part of speech:** noun
**Core meaning (English):** a classification of how seriously an incident affects users, operations, or commitments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân loại mức incident ảnh hưởng user, operation hoặc commitment nghiêm trọng thế nào.
**Grammar & collocations:** `incident-severity level` — level; `reclassify an outage` — phân loại lại.
**Examples:** `The team raised the incident severity when the outage crossed the contractual threshold.` → Team nâng severity khi outage vượt threshold hợp đồng.
**Liên kết tiếng Hàn:** `사고 심각도`.

## Review in context

High **metric cardinality** can cause **label explosion**, so a **summary quantile** and **counter reset** need careful interpretation. A **gauge scrape** captures current state; **remote write** forwards it, and **metric relabeling** controls storage. **Log sampling** reduces volume, while a **structured log** carries a **correlation identifier**. A **trace parent** links causality, and a **sampling decision** chooses evidence. A **dependency map** reveals relationships; a **saturation signal** shows capacity pressure. **Alert grouping** reduces noise, **alert inhibition** suppresses symptoms, and a **notification route** reaches the right team. An **on-call handoff** transfers context, an **escalation tier** adds expertise, and **incident severity** sets response priority.

**Bản dịch tiếng Việt:** **Metric cardinality** cao có thể gây **label explosion**, nên cần diễn giải **summary quantile** và **counter reset** cẩn thận. **Gauge scrape** chụp state hiện tại; **remote write** chuyển nó, còn **metric relabeling** kiểm soát storage. **Log sampling** giảm volume, còn **structured log** mang **correlation identifier**. **Trace parent** nối quan hệ nhân quả, còn **sampling decision** chọn evidence. **Dependency map** lộ quan hệ; **saturation signal** báo áp lực capacity. **Alert grouping** giảm nhiễu, **alert inhibition** suppress symptom, còn **notification route** tới đúng team. **On-call handoff** chuyển context, **escalation tier** thêm expertise, còn **incident severity** đặt ưu tiên response.
