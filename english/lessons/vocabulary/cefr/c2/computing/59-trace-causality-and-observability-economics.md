# C2 Vocabulary — Trace causality and observability economics

This lesson follows a distributed trace from context propagation through sampling, causal reconstruction, privacy, and retention cost.

Flow: **trace context propagation → span link → causal trace graph → tail-based sampling → head-based sampling → trace exemplars → service dependency graph → critical path latency → span suppression → trace retention policy → observability cardinality → trace stitching → clock skew correction → trace completeness → sampling priority → root-span attribution → distributed baggage → trace privacy filter → latency breakdown → observability budget**.

## 1. trace context propagation /treɪs ˈkɑntɛkst ˌprɑpəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** carrying trace identity and timing metadata across process, service, or network boundaries.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truyền ID trace và metadata qua nhiều service.
**Grammar & collocations:** `trace-context-propagation header` — header; `carry correlation metadata` — truyền.
**Examples:** `Trace context propagation connected the queue consumer to the request that created the message.` → Propagation nối consumer với request gốc.
**Liên kết tiếng Hàn:** `트레이스 컨텍스트 전파`.

## 2. span link /spæn lɪŋk/
**Part of speech:** noun
**Core meaning (English):** an explicit relationship connecting one span to another when a simple parent-child hierarchy is insufficient.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** liên kết span khi quan hệ không phải cha-con đơn giản.
**Grammar & collocations:** `span-link metadata` — metadata; `associate asynchronous work` — liên kết.
**Examples:** `A span link associated the batch task with every request that contributed an item.` → Link nối task batch với request nguồn.
**Liên kết tiếng Hàn:** `스팬 링크`.

## 3. causal trace graph /ˈkɔzəl treɪs ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph representing causal or dependency relationships among spans and events in a distributed execution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồ thị biểu diễn quan hệ nhân quả giữa span/event.
**Grammar & collocations:** `causal-trace-graph reconstruction` — reconstruction; `infer a dependency edge` — suy ra.
**Examples:** `The causal trace graph showed that a cache miss, not the database, began the latency chain.` → Graph chỉ ra cache miss khởi đầu latency.
**Liên kết tiếng Hàn:** `인과 트레이스 그래프`.

## 4. tail-based sampling /teɪl beɪst ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** selecting traces after seeing their complete or late-stage behavior, such as errors or high latency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ giữ trace sau khi biết kết quả cuối.
**Grammar & collocations:** `tail-based-sampling decision` — decision; `retain an anomalous trace` — giữ.
**Examples:** `Tail-based sampling retained slow traces that head sampling would have discarded early.` → Tail sampling giữ trace chậm.
**Liên kết tiếng Hàn:** `테일 기반 샘플링`.

## 5. head-based sampling /hɛd beɪst ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** deciding whether to retain a trace near its beginning before later outcomes are known.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyết định giữ trace ngay từ đầu.
**Grammar & collocations:** `head-based-sampling rate` — rate; `make an early decision` — quyết định.
**Examples:** `Head-based sampling reduced storage cost but missed rare downstream failures.` → Head sampling giảm cost nhưng bỏ sót fail hiếm.
**Liên kết tiếng Hàn:** `헤드 기반 샘플링`.

## 6. trace exemplars /treɪs ɪɡˈzæmpələrz/
**Part of speech:** noun
**Core meaning (English):** selected trace references attached to metrics or logs to provide concrete examples of observed behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trace mẫu gắn vào metric/log để đào sâu.
**Grammar & collocations:** `trace-exemplar field` — field; `jump from a metric to a trace` — nhảy.
**Examples:** `Trace exemplars let the operator inspect one slow request behind a percentile spike.` → Exemplars cho xem request chậm sau spike.
**Liên kết tiếng Hàn:** `트레이스 예시`.

## 7. service dependency graph /ˈsɝvɪs dɪˈpɛndənsi ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph showing which services call, depend on, or exchange data with one another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồ thị quan hệ phụ thuộc giữa service.
**Grammar & collocations:** `service-dependency-graph edge` — edge; `discover an indirect dependency` — phát hiện.
**Examples:** `The service dependency graph exposed an undocumented call from checkout to the legacy tax service.` → Graph lộ call không tài liệu.
**Liên kết tiếng Hàn:** `서비스 종속성 그래프`.

## 8. critical path latency /ˈkrɪtɪkəl pæθ ˈleɪtənsi/
**Part of speech:** noun
**Core meaning (English):** the portion of end-to-end delay contributed by the chain of dependent operations that determines completion time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** latency của chuỗi operation quyết định thời gian cuối.
**Grammar & collocations:** `critical-path-latency analysis` — analysis; `identify the dominant span` — xác định.
**Examples:** `Critical path latency was dominated by one serialized authorization call.` → Latency critical path bị chi phối bởi call auth tuần tự.
**Liên kết tiếng Hàn:** `임계 경로 지연`.

## 9. span suppression /spæn səˈprɛʃən/
**Part of speech:** noun
**Core meaning (English):** intentionally omitting low-value or repetitive spans to reduce trace volume and overhead.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ span ít giá trị để giảm volume.
**Grammar & collocations:** `span-suppression rule` — rule; `drop repetitive instrumentation` — bỏ.
**Examples:** `Span suppression removed health-check children while preserving the request root.` → Suppression bỏ span health check, giữ root.
**Liên kết tiếng Hàn:** `스팬 억제`.

## 10. trace retention policy /treɪs rɪˈtɛnʃən ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** rules determining how long traces are stored, at what detail, and under which access controls.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule giữ trace bao lâu, chi tiết nào và ai được xem.
**Grammar & collocations:** `trace-retention-policy tier` — tier; `retain incident traces longer` — giữ.
**Examples:** `The trace retention policy kept sampled errors longer than ordinary successful requests.` → Policy giữ trace lỗi lâu hơn trace thành công.
**Liên kết tiếng Hàn:** `트레이스 보존 정책`.

## 11. observability cardinality /əbˌzɝvəˈbɪləti ˌkɑrdəˈnæləti/
**Part of speech:** noun
**Core meaning (English):** the number of distinct metric, log, or trace dimensions generated by an observability system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số chiều/series khác nhau trong observability.
**Grammar & collocations:** `observability-cardinality budget` — budget; `bound label dimensions` — giới hạn.
**Examples:** `Observability cardinality exploded when raw customer identifiers became span attributes.` → Cardinality tăng vọt khi thêm ID khách hàng.
**Liên kết tiếng Hàn:** `관측 가능성 카디널리티`.

## 12. trace stitching /treɪs ˈstɪtʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** joining partial traces from different agents, protocols, or collection systems into one execution view.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghép các mảnh trace thành một view.
**Grammar & collocations:** `trace-stitching heuristic` — heuristic; `join compatible identifiers` — ghép.
**Examples:** `Trace stitching recovered the handoff between the browser collector and the backend gateway.` → Stitching khôi phục handoff browser–backend.
**Liên kết tiếng Hàn:** `트레이스 스티칭`.

## 13. clock skew correction /klɑk skjuː kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** adjustment of timestamps to account for differences among clocks on distributed machines.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sửa timestamp do clock các máy lệch.
**Grammar & collocations:** `clock-skew-correction estimate` — estimate; `align span timestamps` — căn.
**Examples:** `Clock skew correction prevented a child span from appearing before its parent started.` → Correction ngăn span con xuất hiện trước cha.
**Liên kết tiếng Hàn:** `시계 스큐 보정`.

## 14. trace completeness /treɪs kəmˈpliːtnəs/
**Part of speech:** noun
**Core meaning (English):** the degree to which a captured trace contains the spans and relationships needed to explain an execution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức trace đủ span và quan hệ để giải thích.
**Grammar & collocations:** `trace-completeness score` — score; `identify a missing segment` — xác định.
**Examples:** `Trace completeness fell when one regional collector dropped asynchronous spans.` → Completeness giảm khi collector bỏ span async.
**Liên kết tiếng Hàn:** `트레이스 완전성`.

## 15. sampling priority /ˈsæmplɪŋ praɪˈɔrəti/
**Part of speech:** noun
**Core meaning (English):** a ranking used to decide which traces or events deserve retention when collection capacity is limited.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thứ hạng quyết định trace nào được giữ.
**Grammar & collocations:** `sampling-priority class` — class; `favor security-relevant traces` — ưu tiên.
**Examples:** `Sampling priority favored traces from newly deployed code during the rollout.` → Priority ưu tiên code mới triển khai.
**Liên kết tiếng Hàn:** `샘플링 우선순위`.

## 16. root-span attribution /ruːt spæn ˌætrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** assigning an end-to-end outcome, cost, or error to the root operation that initiated a trace.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy trách nhiệm outcome cho root operation.
**Grammar & collocations:** `root-span-attribution rule` — rule; `assign ownership to an entry point` — gán.
**Examples:** `Root-span attribution linked the timeout to the public search endpoint rather than an internal retry.` → Attribution gán timeout cho endpoint search.
**Liên kết tiếng Hàn:** `루트 스팬 귀속`.

## 17. distributed baggage /dɪˈstrɪbjətɪd ˈbæɡɪdʒ/
**Part of speech:** noun
**Core meaning (English):** request metadata carried across service boundaries for routing, policy, or correlation beyond the trace identifier itself.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata request đi xuyên service ngoài trace ID.
**Grammar & collocations:** `distributed-baggage key` — key; `propagate a tenant hint` — truyền.
**Examples:** `Distributed baggage carried the experiment cohort but was filtered before leaving the trust boundary.` → Baggage mang cohort rồi bị lọc.
**Liên kết tiếng Hàn:** `분산 배기지`.

## 18. trace privacy filter /treɪs ˈpraɪvəsi ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a rule or component that removes, masks, or hashes sensitive data from trace attributes and payloads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lọc dữ liệu nhạy cảm khỏi trace.
**Grammar & collocations:** `trace-privacy-filter rule` — rule; `hash a customer identifier` — băm.
**Examples:** `The trace privacy filter removed raw email addresses before export to the vendor.` → Filter bỏ email thô trước khi export.
**Liên kết tiếng Hàn:** `트레이스 개인정보 필터`.

## 19. latency breakdown /ˈleɪtənsi ˈbreɪkˌdaʊn/
**Part of speech:** noun
**Core meaning (English):** decomposition of total delay into component processing, queueing, network, and waiting contributions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân rã latency thành các thành phần.
**Grammar & collocations:** `latency-breakdown table` — table; `attribute queue delay` — quy.
**Examples:** `The latency breakdown showed that storage waiting, not CPU work, dominated the request.` → Breakdown cho thấy chờ storage chi phối.
**Liên kết tiếng Hàn:** `지연 시간 분석`.

## 20. observability budget /əbˌzɝvəˈbɪləti ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a limit on the storage, network, CPU, privacy, or operational cost assigned to telemetry.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách cost dành cho telemetry.
**Grammar & collocations:** `observability-budget review` — review; `trade detail against cost` — đánh đổi.
**Examples:** `The observability budget favored high-value error traces over exhaustive success traces.` → Budget ưu tiên trace lỗi giá trị cao.
**Liên kết tiếng Hàn:** `관측 가능성 예산`.

## Review in context

**Trace context propagation** and a **span link** support a **causal trace graph**. **Tail-based sampling**, **head-based sampling**, and **trace exemplars** shape a **service dependency graph** and **critical path latency**. **Span suppression**, a **trace retention policy**, and **observability cardinality** control cost, while **trace stitching**, **clock skew correction**, and **trace completeness** affect trust. **Sampling priority**, **root-span attribution**, **distributed baggage**, a **trace privacy filter**, **latency breakdown**, and an **observability budget** complete the operating model.

**Bản dịch tiếng Việt:** **Trace context propagation** và **span link** hỗ trợ **causal trace graph**. **Tail-based sampling**, **head-based sampling** và **trace exemplars** định hình **service dependency graph** cùng **critical path latency**. **Span suppression**, **trace retention policy** và **observability cardinality** kiểm soát cost, còn **trace stitching**, **clock skew correction** và **trace completeness** ảnh hưởng độ tin cậy. **Sampling priority**, **root-span attribution**, **distributed baggage**, **trace privacy filter**, **latency breakdown** và **observability budget** hoàn tất mô hình vận hành.
