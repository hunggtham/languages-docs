# C2 Vocabulary — Observability telemetry and signal design

This lesson follows telemetry from instrumentation and context propagation through sampling, aggregation, redaction, and diagnosis.

Flow: **exemplar → cardinality ceiling → sampling policy → tail sampling → baggage field → metric scrape → histogram bucket → quantile approximation → log redaction → correlation context → probe endpoint → signal pipeline → telemetry gap → trace waterfall → clock correction → context propagation → trace identifier → span attribute → metric label → histogram percentile**.

## 1. exemplar /ɪɡˈzɑːmpələr/
**Part of speech:** noun
**Core meaning (English):** a representative measurement that links an aggregate metric to a specific trace or event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép đo đại diện nối metric tổng hợp với trace hoặc event cụ thể.
**Grammar & collocations:** `exemplar reference` — tham chiếu; `jump from a latency sample to a trace` — nhảy.
**Examples:** `The latency chart's exemplar led the engineer to the trace for one slow checkout.` → Exemplar dẫn tới trace của checkout chậm.
**Liên kết tiếng Hàn:** `대표 표본`.

## 2. cardinality ceiling /ˌkɑːrdɪˈnæləti ˈsiːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** a limit on how many distinct label combinations a telemetry system will retain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn số tổ hợp label khác nhau mà hệ telemetry giữ lại.
**Grammar & collocations:** `cardinality-ceiling alert` — cảnh báo; `cap a high-variation label` — giới hạn.
**Examples:** `The cardinality ceiling protected the metrics store from a user-ID label explosion.` → Ceiling bảo vệ metrics store khỏi label user-ID bùng nổ.
**Liên kết tiếng Hàn:** `카디널리티 한계`.

## 3. sampling policy /ˈsæmplɪŋ ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a rule deciding which telemetry records are kept, dropped, or sampled at a particular rate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule quyết định record telemetry nào được giữ, bỏ hoặc lấy mẫu.
**Grammar & collocations:** `sampling-policy rule` — rule; `retain error traces preferentially` — ưu tiên giữ.
**Examples:** `The sampling policy kept every failed payment trace but sampled successful requests.` → Policy giữ trace payment lỗi và lấy mẫu request thành công.
**Liên kết tiếng Hàn:** `샘플링 정책`.

## 4. tail sampling /teɪl ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** choosing whether to retain a trace after seeing its complete outcome and characteristics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyết định giữ trace sau khi đã thấy toàn bộ kết quả và đặc điểm.
**Grammar & collocations:** `tail-sampling decision` — quyết định; `keep a slow trace` — giữ.
**Examples:** `Tail sampling retained traces whose final span showed an unusually long database wait.` → Tail sampling giữ trace có span database chậm.
**Liên kết tiếng Hàn:** `테일 샘플링`.

## 5. baggage field /ˈbæɡɪdʒ fiːld/
**Part of speech:** noun
**Core meaning (English):** propagated request metadata that travels across services without necessarily appearing as a span attribute.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata request lan qua service dù không nhất thiết hiện thành span attribute.
**Grammar & collocations:** `baggage-field propagation` — lan truyền; `carry a tenant hint` — mang.
**Examples:** `A baggage field carried the experiment cohort through several asynchronous services.` → Field mang cohort thử nghiệm qua nhiều service.
**Liên kết tiếng Hàn:** `배기지 필드`.

## 6. metric scrape /ˈmetrɪk skreɪp/
**Part of speech:** noun
**Core meaning (English):** a scheduled collection of exposed metric values from a monitored endpoint.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lần thu thập metric theo lịch từ endpoint được giám sát.
**Grammar & collocations:** `metric-scrape interval` — khoảng; `collect an exposed gauge` — thu thập.
**Examples:** `The metric scrape missed two intervals while the exporter was restarting.` → Scrape bỏ lỡ hai interval khi exporter restart.
**Liên kết tiếng Hàn:** `메트릭 스크레이프`.

## 7. histogram bucket /hɪˈstɒɡræm ˈbʌkɪt/
**Part of speech:** noun
**Core meaning (English):** a range count in a histogram used to summarize the distribution of observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số đếm trong một khoảng của histogram để tóm tắt phân phối.
**Grammar & collocations:** `histogram-bucket boundary` — ranh giới; `record requests below a threshold` — ghi.
**Examples:** `The histogram bucket below two hundred milliseconds contained most API requests.` → Bucket dưới 200 ms chứa đa số request.
**Liên kết tiếng Hàn:** `히스토그램 버킷`.

## 8. quantile approximation /ˈkwɒntaɪl əˌprɒksɪˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** an estimated percentile calculated from a compact summary rather than every raw observation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** percentile ước tính từ summary gọn thay vì toàn bộ observation thô.
**Grammar & collocations:** `quantile-approximation error` — sai số; `estimate a ninety-ninth percentile` — ước tính.
**Examples:** `Quantile approximation kept dashboard storage small while preserving a useful tail-latency estimate.` → Approximation giảm storage mà giữ ước tính latency đuôi.
**Liên kết tiếng Hàn:** `분위수 근사`.

## 9. log redaction /lɒɡ rɪˈdækʃən/
**Part of speech:** noun
**Core meaning (English):** removing or obscuring sensitive content before a log record is stored or exported.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xóa hoặc che nội dung nhạy cảm trước khi lưu/export log.
**Grammar & collocations:** `log-redaction rule` — rule; `mask a credential` — che.
**Examples:** `Log redaction removed the access token before the request body reached central storage.` → Redaction bỏ access token trước khi lưu.
**Liên kết tiếng Hàn:** `로그 삭제`.

## 10. correlation context /ˌkɒrəˈleɪʃən ˈkɒntekst/
**Part of speech:** noun
**Core meaning (English):** shared identifiers and metadata that let operators connect logs, metrics, traces, and events for one operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identifier và metadata chung nối log, metric, trace và event của một operation.
**Grammar & collocations:** `correlation-context field` — field; `link a log to a trace` — nối.
**Examples:** `The correlation context connected the queue warning with the customer-facing request.` → Context nối cảnh báo queue với request khách hàng.
**Liên kết tiếng Hàn:** `상관관계 컨텍스트`.

## 11. probe endpoint /proʊb ˈendpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** an endpoint designed to reveal whether a service is alive, ready, or able to perform a basic operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** endpoint cho biết service sống, sẵn sàng hoặc làm được operation cơ bản.
**Grammar & collocations:** `probe-endpoint response` — phản hồi; `check dependency readiness` — kiểm tra.
**Examples:** `The probe endpoint reported ready only after the service connected to its schema registry.` → Endpoint chỉ báo ready sau khi nối registry.
**Liên kết tiếng Hàn:** `프로브 엔드포인트`.

## 12. signal pipeline /ˈsɪɡnəl ˈpaɪplaɪn/
**Part of speech:** noun
**Core meaning (English):** the sequence that receives, transforms, enriches, routes, and stores observability data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi nhận, biến đổi, enrich, route và lưu data observability.
**Grammar & collocations:** `signal-pipeline stage` — stage; `route a trace to durable storage` — định tuyến.
**Examples:** `The signal pipeline added deployment metadata before forwarding spans to the archive.` → Pipeline thêm metadata deploy trước khi archive span.
**Liên kết tiếng Hàn:** `신호 파이프라인`.

## 13. telemetry gap /təˈlemətri ɡæp/
**Part of speech:** noun
**Core meaning (English):** a missing section of observations that prevents an operator from seeing a system transition or cause.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thiếu observation khiến operator không thấy transition hoặc nguyên nhân.
**Grammar & collocations:** `telemetry-gap investigation` — điều tra; `close an instrumentation blind spot` — lấp.
**Examples:** `A telemetry gap hid the handoff between the gateway and the third-party processor.` → Gap che mất handoff giữa gateway và processor.
**Liên kết tiếng Hàn:** `텔레메트리 공백`.

## 14. trace waterfall /treɪs ˈwɔːtərfɔːl/
**Part of speech:** noun
**Core meaning (English):** a time-ordered visualization of nested spans showing where an operation waits or spends work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu đồ thời gian của span lồng nhau cho thấy operation chờ và làm việc ở đâu.
**Grammar & collocations:** `trace-waterfall view` — view; `spot a serialized call` — phát hiện.
**Examples:** `The trace waterfall revealed that three supposedly parallel calls were serialized.` → Waterfall lộ ba call đáng lẽ song song nhưng bị tuần tự.
**Liên kết tiếng Hàn:** `트레이스 워터폴`.

## 15. clock correction /klɒk kəˈrekʃən/
**Part of speech:** noun
**Core meaning (English):** an adjustment that compensates for clock differences when ordering or comparing telemetry timestamps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiệu chỉnh chênh lệch clock khi sắp thứ tự hoặc so timestamp telemetry.
**Grammar & collocations:** `clock-correction offset` — offset; `adjust a child span timestamp` — điều chỉnh.
**Examples:** `Clock correction prevented a child span from appearing before its parent began.` → Correction ngăn span con hiện trước span cha.
**Liên kết tiếng Hàn:** `시계 보정`.

## 16. context propagation /ˈkɒntekst ˌprɒpəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** carrying tracing or request context across process, thread, and protocol boundaries.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mang context trace/request qua ranh giới process, thread và protocol.
**Grammar & collocations:** `context-propagation mechanism` — cơ chế; `preserve a parent trace` — giữ.
**Examples:** `Context propagation preserved the trace when work moved from HTTP to a message broker.` → Propagation giữ trace khi chuyển từ HTTP sang broker.
**Liên kết tiếng Hàn:** `컨텍스트 전파`.

## 17. trace identifier /treɪs aɪˈdentɪfaɪər/
**Part of speech:** noun
**Core meaning (English):** a stable identifier shared by all spans belonging to one end-to-end operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identifier ổn định chung cho mọi span của một operation đầu-cuối.
**Grammar & collocations:** `trace-identifier format` — format; `search by an operation ID` — tìm.
**Examples:** `The trace identifier let support staff retrieve the complete checkout path from one log line.` → ID cho support lấy toàn bộ checkout path.
**Liên kết tiếng Hàn:** `트레이스 식별자`.

## 18. span attribute /spæn əˈtrɪbjuːt/
**Part of speech:** noun
**Core meaning (English):** a key-value detail attached to a span to describe its operation, resource, or outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chi tiết key-value gắn vào span mô tả operation, resource hoặc outcome.
**Grammar & collocations:** `span-attribute convention` — quy ước; `record a database table` — ghi.
**Examples:** `The span attribute identified which shard served the slow query.` → Attribute cho biết shard phục vụ query chậm.
**Liên kết tiếng Hàn:** `스팬 속성`.

## 19. metric label /ˈmetrɪk ˈleɪbəl/
**Part of speech:** noun
**Core meaning (English):** a dimension attached to a metric that separates one time series from another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dimension gắn metric để tách các time series.
**Grammar & collocations:** `metric-label value` — value; `group errors by region` — nhóm.
**Examples:** `The metric label grouped request failures by region without exposing customer identity.` → Label nhóm lỗi theo vùng mà không lộ identity.
**Liên kết tiếng Hàn:** `메트릭 레이블`.

## 20. histogram percentile /hɪˈstɒɡræm pərˈsentəl/
**Part of speech:** noun
**Core meaning (English):** a percentile derived from histogram counts to describe an observation boundary in a distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** percentile suy ra từ histogram để mô tả ranh giới observation trong phân phối.
**Grammar & collocations:** `histogram-percentile query` — query; `estimate tail latency` — ước tính.
**Examples:** `The histogram percentile showed that one percent of uploads took longer than five seconds.` → Percentile cho thấy 1% upload lâu hơn 5 giây.
**Liên kết tiếng Hàn:** `히스토그램 백분위수`.

## Review in context

An **exemplar** connects an aggregate to a concrete trace, while a **cardinality ceiling** and **sampling policy** control storage. **Tail sampling** keeps interesting outcomes, a **baggage field** carries request hints, and a **metric scrape** collects exposed values. **Histogram bucket** counts support **quantile approximation**; **log redaction** removes secrets, and **correlation context** connects signals. A **probe endpoint** feeds a **signal pipeline**, but a **telemetry gap** can hide a transition. A **trace waterfall** shows timing, **clock correction** aligns timestamps, and **context propagation** carries identity. A **trace identifier** groups the operation, a **span attribute** describes one step, a **metric label** separates series, and a **histogram percentile** summarizes the tail.

**Bản dịch tiếng Việt:** **Exemplar** nối metric tổng hợp với trace cụ thể, còn **cardinality ceiling** và **sampling policy** kiểm soát storage. **Tail sampling** giữ outcome đáng chú ý, **baggage field** mang hint request, và **metric scrape** thu thập value. **Histogram bucket** hỗ trợ **quantile approximation**; **log redaction** bỏ secret, còn **correlation context** nối các signal. **Probe endpoint** đưa dữ liệu vào **signal pipeline**, nhưng **telemetry gap** có thể che transition. **Trace waterfall** hiển thị timing, **clock correction** căn timestamp, và **context propagation** mang identity. **Trace identifier** gom operation, **span attribute** mô tả một bước, **metric label** tách series, còn **histogram percentile** tóm tắt phần đuôi.
