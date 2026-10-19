# C2 Vocabulary — Observability and distributed tracing

This lesson follows an observability signal from context propagation and sampling through service maps, critical paths, SLOs, and synthetic checks.

Flow: **span context → trace propagation → exemplar trace → high-cardinality label → observability pipeline → service map → causal span → traceparent header → baggage header → latency percentile → critical path analysis → log correlation → structured event → error budget burn → SLO violation → synthetic probe → golden signal → request waterfall → dependency graph → adaptive trace sampling**.

## 1. span context /spæn ˈkɒntekst/
**Part of speech:** noun
**Core meaning (English):** metadata identifying a trace segment and linking it to its parent operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata nhận diện một đoạn trace và nối với operation cha.
**Grammar & collocations:** `span-context carrier` — carrier; `attach a parent identifier` — gắn.
**Examples:** `The span context crossed the queue boundary so the worker remained in the same trace.` → Context đi qua queue.
**Liên kết tiếng Hàn:** `스팬 컨텍스트`.

## 2. trace propagation /treɪs ˌprɒpəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** carrying trace identity and timing metadata across process, network, or message boundaries.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truyền identity và timing trace qua process/network/message.
**Grammar & collocations:** `trace-propagation format` — format; `forward a trace identifier` — chuyển.
**Examples:** `Trace propagation connected the API request to a downstream payment call.` → Propagation nối API với payment.
**Liên kết tiếng Hàn:** `트레이스 전파`.

## 3. exemplar trace /ɪɡˈzæmpələr treɪs/
**Part of speech:** noun
**Core meaning (English):** a representative trace attached to an aggregate metric point for detailed investigation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trace đại diện gắn vào metric tổng hợp để điều tra sâu.
**Grammar & collocations:** `exemplar-trace link` — link; `jump from a metric to a trace` — chuyển.
**Examples:** `The exemplar trace explained why one latency spike appeared in the dashboard.` → Trace giải thích spike latency.
**Liên kết tiếng Hàn:** `예시 트레이스`.

## 4. high-cardinality label /haɪ ˌkɑːrdɪˈnæləti ˈleɪbəl/
**Part of speech:** noun
**Core meaning (English):** a label with many possible values, often making metric storage and querying expensive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** label có rất nhiều giá trị, làm lưu và query metric tốn.
**Grammar & collocations:** `high-cardinality-label warning` — warning; `control label growth` — kiểm soát.
**Examples:** `A high-cardinality label containing request IDs overwhelmed the metrics backend.` → Label request ID làm backend quá tải.
**Liên kết tiếng Hàn:** `고카디널리티 레이블`.

## 5. observability pipeline /əbˌzɜːrvəˈbɪləti ˈpaɪplaɪn/
**Part of speech:** noun
**Core meaning (English):** the chain that collects, transforms, routes, stores, and queries telemetry data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi thu, biến đổi, route, lưu và query telemetry.
**Grammar & collocations:** `observability-pipeline stage` — stage; `route a telemetry batch` — định tuyến.
**Examples:** `The observability pipeline redacted credentials before exporting traces.` → Pipeline xóa credential trước export.
**Liên kết tiếng Hàn:** `관측 가능성 파이프라인`.

## 6. service map /ˈsɜːrvɪs mæp/
**Part of speech:** noun
**Core meaning (English):** a visual or structured representation of services and the calls between them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sơ đồ service và các call giữa chúng.
**Grammar & collocations:** `service-map edge` — edge; `discover a downstream dependency` — phát hiện.
**Examples:** `The service map revealed that checkout depended on an unmonitored tax service.` → Map lộ dependency chưa monitor.
**Liên kết tiếng Hàn:** `서비스 맵`.

## 7. causal span /ˈkɔːzəl spæn/
**Part of speech:** noun
**Core meaning (English):** a trace segment whose timing or outcome provides evidence about the cause of a later operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** span cung cấp bằng chứng nguyên nhân cho operation sau.
**Grammar & collocations:** `causal-span analysis` — analysis; `attribute a downstream delay` — quy.
**Examples:** `The database causal span accounted for most of the response slowdown.` → Span database giải thích slowdown.
**Liên kết tiếng Hàn:** `인과적 스팬`.

## 8. traceparent header /treɪsˈperənt ˈhedər/
**Part of speech:** noun
**Core meaning (English):** a standard request header carrying the identifiers needed to continue a distributed trace.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** header chuẩn mang ID để tiếp tục trace phân tán.
**Grammar & collocations:** `traceparent-header parser` — parser; `forward a parent span` — chuyển.
**Examples:** `The gateway preserved the traceparent header when it retried the request.` → Gateway giữ header khi retry.
**Liên kết tiếng Hàn:** `트레이스부모 헤더`.

## 9. baggage header /ˈbæɡɪdʒ ˈhedər/
**Part of speech:** noun
**Core meaning (English):** a request header carrying application context that can travel with a trace but is not itself a span identity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** header mang context app đi cùng trace nhưng không phải span ID.
**Grammar & collocations:** `baggage-header size` — size; `propagate a tenant tag` — truyền.
**Examples:** `The baggage header carried a tenant region used to interpret the trace.` → Header mang region tenant.
**Liên kết tiếng Hàn:** `배기지 헤더`.

## 10. latency percentile /ˈleɪtənsi pərˈsentəl/
**Part of speech:** noun
**Core meaning (English):** a value below which a stated percentage of observed request times falls.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mốc thời gian mà phần trăm request nằm dưới đó.
**Grammar & collocations:** `latency-percentile chart` — chart; `report the ninety-ninth percentile` — báo cáo.
**Examples:** `The latency percentile rose even though the average remained stable.` → Percentile tăng dù average ổn.
**Liên kết tiếng Hàn:** `지연 시간 백분위수`.

## 11. critical path analysis /ˈkrɪtɪkəl pɑːθ əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** identifying the sequence of dependent operations that determines the minimum or observed completion time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác định chuỗi operation phụ thuộc quyết định thời gian hoàn thành.
**Grammar & collocations:** `critical-path-analysis view` — view; `locate a blocking span` — định vị.
**Examples:** `Critical path analysis showed that cache misses delayed the whole request.` → Analysis cho thấy cache miss chặn request.
**Liên kết tiếng Hàn:** `임계 경로 분석`.

## 12. log correlation /lɒɡ ˌkɒrəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** linking log records to traces, metrics, requests, or users through shared identifiers and timestamps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nối log với trace/metric/request bằng ID và timestamp chung.
**Grammar & collocations:** `log-correlation query` — query; `join records by trace ID` — nối.
**Examples:** `Log correlation exposed the exception that preceded the failed checkout span.` → Correlation lộ exception trước failure.
**Liên kết tiếng Hàn:** `로그 상관관계`.

## 13. structured event /ˈstrʌktʃərd ɪˈvent/
**Part of speech:** noun
**Core meaning (English):** an event encoded as named fields rather than an unstructured text message.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event gồm field có tên thay vì text tự do.
**Grammar & collocations:** `structured-event schema` — schema; `parse a field value` — phân tích.
**Examples:** `The structured event made the deployment version searchable across services.` → Event giúp tìm version deployment.
**Liên kết tiếng Hàn:** `구조화된 이벤트`.

## 14. error budget burn /ˈerər ˈbʌdʒɪt bɜːrn/
**Part of speech:** noun
**Core meaning (English):** the rate at which incidents consume the allowed unreliability in a service objective.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ sự cố tiêu hao mức lỗi cho phép.
**Grammar & collocations:** `error-budget-burn alert` — alert; `consume reliability allowance` — tiêu hao.
**Examples:** `Error budget burn accelerated after the new release increased timeout failures.` → Burn tăng sau release.
**Liên kết tiếng Hàn:** `오류 예산 소진`.

## 15. SLO violation /ˌes el ˈoʊ vaɪəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** a period in which measured service performance fails to meet a stated service-level objective.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian performance không đạt mục tiêu dịch vụ.
**Grammar & collocations:** `SLO-violation window` — window; `breach an availability target` — vi phạm.
**Examples:** `The SLO violation triggered a review of the dependency's retry policy.` → Violation kích hoạt review.
**Liên kết tiếng Hàn:** `SLO 위반`.

## 16. synthetic probe /sɪnˈθetɪk proʊb/
**Part of speech:** noun
**Core meaning (English):** an automated request that tests a service from a controlled location or environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** request tự động test service từ môi trường kiểm soát.
**Grammar & collocations:** `synthetic-probe schedule` — schedule; `simulate a customer journey` — mô phỏng.
**Examples:** `The synthetic probe detected a regional outage before customers filed tickets.` → Probe phát hiện outage sớm.
**Liên kết tiếng Hàn:** `합성 프로브`.

## 17. golden signal /ˈɡoʊldən ˈsɪɡnəl/
**Part of speech:** noun
**Core meaning (English):** a high-value service-health signal such as latency, traffic, errors, or saturation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu cốt lõi về latency, traffic, error hoặc saturation.
**Grammar & collocations:** `golden-signal dashboard` — dashboard; `monitor saturation` — giám sát.
**Examples:** `The golden signal dashboard separated traffic growth from genuine error growth.` → Dashboard tách traffic tăng và error tăng.
**Liên kết tiếng Hàn:** `골든 시그널`.

## 18. request waterfall /rɪˈkwest ˈwɔːtərfɔːl/
**Part of speech:** noun
**Core meaning (English):** a time-ordered view showing when nested requests start, wait, and finish.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** view theo thời gian của request lồng nhau và thời gian chờ.
**Grammar & collocations:** `request-waterfall chart` — chart; `visualize a blocking call` — trực quan hóa.
**Examples:** `The request waterfall showed that a serial call could have run in parallel.` → Waterfall lộ call serial.
**Liên kết tiếng Hàn:** `요청 워터폴`.

## 19. dependency graph /dɪˈpendənsi ɡrɑːf/
**Part of speech:** noun
**Core meaning (English):** a graph representing which components rely on which other components to function.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph biểu diễn component phụ thuộc component nào.
**Grammar & collocations:** `dependency-graph traversal` — traversal; `identify a failure blast radius` — xác định.
**Examples:** `The dependency graph predicted that a certificate outage would affect three services.` → Graph dự đoán blast radius.
**Liên kết tiếng Hàn:** `의존성 그래프`.

## 20. adaptive trace sampling /əˈdæptɪv treɪs ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** changing trace-collection rates in response to traffic, errors, rarity, or investigative priority.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi rate thu trace theo traffic, error hoặc mức ưu tiên điều tra.
**Grammar & collocations:** `adaptive-trace-sampling policy` — policy; `retain a rare failure` — giữ.
**Examples:** `Adaptive trace sampling retained rare failures while reducing storage for healthy traffic.` → Sampling giữ failure hiếm.
**Liên kết tiếng Hàn:** `적응형 트레이스 샘플링`.

## Review in context

**Span context** enables **trace propagation**, and an **exemplar trace** connects metrics to detail. A **high-cardinality label** can burden the **observability pipeline**, while a **service map** and **causal span** reveal dependencies; the **traceparent header** and **baggage header** carry context. **Latency percentile**, **critical path analysis**, **log correlation**, and a **structured event** explain delay. **Error budget burn** and an **SLO violation** trigger a **synthetic probe**; the **golden signal**, **request waterfall**, **dependency graph**, and **adaptive trace sampling** guide response.

**Bản dịch tiếng Việt:** **Span context** cho phép **trace propagation**, còn **exemplar trace** nối metric với chi tiết. **High-cardinality label** có thể làm nặng **observability pipeline**, trong khi **service map** và **causal span** lộ dependency; **traceparent header** và **baggage header** truyền context. **Latency percentile**, **critical path analysis**, **log correlation** và **structured event** giải thích delay. **Error budget burn** và **SLO violation** kích hoạt **synthetic probe**; **golden signal**, **request waterfall**, **dependency graph** và **adaptive trace sampling** hướng dẫn ứng phó.
