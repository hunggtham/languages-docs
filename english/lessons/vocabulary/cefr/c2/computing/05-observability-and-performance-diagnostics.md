# C2 Vocabulary — Observability and performance diagnostics

This lesson follows a production system from telemetry collection through tracing and profiling to latency analysis, overload control, and reliability objectives.

Flow: **observability → telemetry → distributed tracing → trace context → span → sampling profiler → flame graph → performance counter → event-loop lag → tail latency → percentile latency → saturation → queue depth → backpressure → load shedding → head-of-line blocking → thundering herd → coordinated omission → service-level objective → error budget**.

## 1. observability /əbˌzɝvəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability to infer the internal state and behavior of a system from the signals it emits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng quan sát hệ thống; hình dung không nhìn trực tiếp vào “bên trong” server nhưng có thể suy ra nó đang làm gì từ log, metric, trace và các tín hiệu khác.
**Grammar & collocations:** `system observability` — khả năng quan sát hệ thống; `observability stack` — bộ công cụ observability; `improve observability` — tăng khả năng quan sát.
**Examples:** `Good observability lets engineers distinguish a slow database call from CPU saturation without reproducing the failure locally.` → Observability tốt giúp kỹ sư phân biệt truy vấn database chậm với CPU quá tải mà không cần tái hiện lỗi ở máy local.
**Liên kết tiếng Hàn:** `관측 가능성`, trong ngành thường dùng `옵저버빌리티`.

## 2. telemetry /təˈlɛmətri/
**Part of speech:** noun
**Core meaning (English):** measurements and event data automatically collected from a running system and transmitted for monitoring or analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dữ liệu đo từ hệ thống đang chạy; hình dung server liên tục gửi “dấu hiệu sinh tồn” như CPU, request count, error, trace và event ra ngoài để phân tích.
**Grammar & collocations:** `telemetry data` — dữ liệu telemetry; `collect telemetry` — thu telemetry; `telemetry pipeline` — pipeline truyền và xử lý telemetry.
**Examples:** `The service emits telemetry for request rate, errors, latency, and resource usage.` → Service phát telemetry về tốc độ request, lỗi, latency và mức sử dụng tài nguyên.
**Liên kết tiếng Hàn:** `텔레메트리`, `원격 측정 데이터`.

## 3. distributed tracing /dɪˈstrɪbjətɪd ˈtreɪsɪŋ/
**Part of speech:** noun
**Core meaning (English):** a technique for reconstructing the path and timing of a request as it crosses multiple services or components.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tracing phân tán; hình dung gắn một “sợi chỉ” theo request khi nó đi qua gateway, service, queue và database để biết thời gian bị tiêu ở đâu.
**Grammar & collocations:** `distributed-tracing system` — hệ thống tracing phân tán; `trace a request` — trace một request; `end-to-end trace` — trace từ đầu đến cuối.
**Examples:** `Distributed tracing showed that most of the request time was spent waiting on a downstream inventory service.` → Distributed tracing cho thấy phần lớn thời gian request bị tiêu trong lúc chờ service inventory phía sau.
**Liên kết tiếng Hàn:** `분산 추적`, `디스트리뷰티드 트레이싱`.

## 4. trace context /treɪs ˈkɑntɛkst/
**Part of speech:** noun
**Core meaning (English):** identifiers and metadata propagated across service boundaries so related operations can be linked into one trace.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** context của trace; hình dung mỗi request mang theo một “mã dây chuyền” để các service khác nhau biết hoạt động nào thuộc cùng một hành trình.
**Grammar & collocations:** `propagate trace context` — truyền trace context; `trace ID` — mã trace; `context propagation` — truyền context.
**Examples:** `If trace context is lost at the message queue, the asynchronous work appears disconnected from the original request.` → Nếu trace context bị mất ở message queue, phần xử lý bất đồng bộ sẽ trông như không liên quan đến request ban đầu.
**Liên kết tiếng Hàn:** `트레이스 컨텍스트`, `추적 컨텍스트`.

## 5. span /spæn/
**Part of speech:** noun
**Core meaning (English):** a timed unit of work within a trace, representing one operation such as an HTTP call, database query, or queue action.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một đoạn hoạt động trong trace; hình dung toàn bộ trace là một hành trình, còn mỗi span là một chặng có thời điểm bắt đầu, kết thúc và metadata riêng.
**Grammar & collocations:** `child span` — span con; `span duration` — thời lượng span; `annotate a span` — gắn metadata vào span.
**Examples:** `A long database span immediately revealed which query dominated the endpoint latency.` → Một database span dài lập tức cho thấy truy vấn nào chiếm phần lớn latency của endpoint.
**Liên kết tiếng Hàn:** `스팬`, `추적 구간`.

## 6. sampling profiler /ˈsæmplɪŋ ˈproʊfaɪlər/
**Part of speech:** noun
**Core meaning (English):** a profiler that periodically samples program execution to estimate where CPU time is being spent without recording every event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** profiler lấy mẫu; hình dung cứ mỗi khoảng rất ngắn nó “chụp ảnh” stack hiện tại, rồi cộng nhiều ảnh để suy ra code nào tiêu CPU nhiều nhất.
**Grammar & collocations:** `CPU sampling profiler` — profiler lấy mẫu CPU; `profiling overhead` — overhead của profiling; `sample stack traces` — lấy mẫu stack trace.
**Examples:** `The sampling profiler identified a serialization function that consumed an unexpected share of CPU time.` → Sampling profiler phát hiện một hàm serialization tiêu tốn tỷ lệ CPU lớn ngoài dự kiến.
**Liên kết tiếng Hàn:** `샘플링 프로파일러`.

## 7. flame graph /fleɪm ɡræf/
**Part of speech:** noun
**Core meaning (English):** a visualization that aggregates sampled call stacks so wide blocks indicate code paths consuming more execution time or samples.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu đồ flame graph; hình dung các stack xếp thành “ngọn lửa”, phần càng rộng nghĩa là càng nhiều mẫu CPU rơi vào đường gọi đó.
**Grammar & collocations:** `generate a flame graph` — tạo flame graph; `wide frame` — khung rộng; `CPU flame graph` — flame graph CPU.
**Examples:** `The flame graph made the expensive JSON parsing path visually obvious.` → Flame graph làm đường xử lý JSON tốn CPU hiện ra rất rõ về mặt trực quan.
**Liên kết tiếng Hàn:** `플레임 그래프`.

## 8. performance counter /pərˈfɔrməns ˈkaʊntər/
**Part of speech:** noun
**Core meaning (English):** a hardware or software counter that records low-level execution events such as cycles, cache misses, branch misses, or instructions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ đếm hiệu năng; hình dung CPU có các “đồng hồ đếm” ghi lại bao nhiêu cache miss, branch miss hoặc cycle đã xảy ra để chẩn đoán bottleneck.
**Grammar & collocations:** `hardware performance counter` — counter phần cứng; `cache-miss counter` — counter cache miss; `read performance counters` — đọc các counter hiệu năng.
**Examples:** `Performance counters showed that the workload was limited more by cache misses than by arithmetic throughput.` → Performance counter cho thấy workload bị giới hạn bởi cache miss nhiều hơn là bởi tốc độ tính toán số học.
**Liên kết tiếng Hàn:** `성능 카운터`.

## 9. event-loop lag /ɪˈvɛnt luːp læɡ/
**Part of speech:** noun
**Core meaning (English):** the delay between when an event-loop task is scheduled and when the loop can actually execute it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ trễ event loop; hình dung task đáng lẽ chạy ngay nhưng event loop đang bị block hoặc quá bận nên task phải chờ lâu hơn bình thường.
**Grammar & collocations:** `measure event-loop lag` — đo độ trễ event loop; `event-loop stall` — event loop bị khựng; `blocking operation` — thao tác blocking.
**Examples:** `A synchronous compression step caused event-loop lag to spike during large uploads.` → Một bước nén đồng bộ làm event-loop lag tăng mạnh khi upload file lớn.
**Liên kết tiếng Hàn:** `이벤트 루프 지연`.

## 10. tail latency /teɪl ˈleɪtənsi/
**Part of speech:** noun
**Core meaning (English):** latency experienced by the slowest fraction of requests rather than by the typical request.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** latency ở “đuôi” phân bố; hình dung trung bình có thể tốt nhưng 1% request chậm nhất lại rất tệ, và chính phần đuôi này thường quyết định trải nghiệm người dùng.
**Grammar & collocations:** `reduce tail latency` — giảm tail latency; `long-tail latency` — latency đuôi dài; `tail-latency spike` — đột biến tail latency.
**Examples:** `The cache reduced median latency but barely improved tail latency during traffic bursts.` → Cache làm giảm median latency nhưng hầu như không cải thiện tail latency khi traffic tăng đột biến.
**Liên kết tiếng Hàn:** `꼬리 지연시간`, thường nói `테일 레이턴시`.

## 11. percentile latency /pərˈsɛntaɪl ˈleɪtənsi/
**Part of speech:** noun
**Core meaning (English):** a latency threshold below which a stated percentage of observations fall, such as p95 or p99 latency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** latency theo percentile; ví dụ p99 = 99% request nhanh hơn hoặc bằng mức này, còn 1% chậm hơn.
**Grammar & collocations:** `p95 latency` — latency percentile 95; `p99 latency` — latency percentile 99; `latency percentile` — percentile của latency.
**Examples:** `The p99 latency doubled even though the median changed very little.` → p99 latency tăng gấp đôi dù median gần như không thay đổi.
**Liên kết tiếng Hàn:** `백분위 지연시간`, `p99 레이턴시`.

## 12. saturation /ˌsætʃəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** a state in which a resource is fully utilized and additional demand causes waiting rather than additional throughput.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trạng thái bão hòa; hình dung CPU, connection pool hoặc worker đã kín, nên request mới không làm hệ thống xử lý nhanh hơn mà chỉ xếp hàng.
**Grammar & collocations:** `CPU saturation` — CPU bão hòa; `resource saturation` — tài nguyên bão hòa; `saturation point` — điểm bão hòa.
**Examples:** `Once the connection pool reached saturation, queueing delay rose much faster than throughput.` → Khi connection pool đạt bão hòa, thời gian chờ tăng nhanh hơn nhiều so với throughput.
**Liên kết tiếng Hàn:** `포화`, `자원 포화`.

## 13. queue depth /kjuː dɛpθ/
**Part of speech:** noun
**Core meaning (English):** the number of tasks, requests, or operations currently waiting in a queue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ dài hàng đợi; hình dung có bao nhiêu việc đang đứng chờ phía sau tài nguyên xử lý.
**Grammar & collocations:** `queue-depth metric` — metric độ dài queue; `deep queue` — queue dài; `queue buildup` — queue tích tụ.
**Examples:** `A steadily rising queue depth indicated that incoming work exceeded processing capacity.` → Queue depth tăng đều cho thấy lượng việc vào vượt quá năng lực xử lý.
**Liên kết tiếng Hàn:** `큐 깊이`, `대기열 길이`.

## 14. backpressure /ˈbækˌprɛʃər/
**Part of speech:** noun
**Core meaning (English):** a control mechanism in which a slower downstream component signals upstream producers to reduce or pause the rate of incoming work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế “ép ngược” để giảm tốc độ producer; hình dung downstream sắp nghẽn nên báo upstream: đừng gửi nhanh nữa.
**Grammar & collocations:** `apply backpressure` — áp dụng backpressure; `backpressure signal` — tín hiệu backpressure; `propagate backpressure` — truyền backpressure ngược upstream.
**Examples:** `Without backpressure, the consumer fell behind and memory usage grew with the unbounded queue.` → Không có backpressure, consumer xử lý không kịp và memory tăng theo queue không giới hạn.
**Liên kết tiếng Hàn:** `백프레셔`, `역압 제어`.

## 15. load shedding /loʊd ˈʃɛdɪŋ/
**Part of speech:** noun
**Core meaning (English):** deliberately rejecting, dropping, or degrading some work when a system is overloaded so the remaining work can still complete reliably.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chủ động bỏ bớt tải; hình dung hệ thống chấp nhận rằng không thể phục vụ tất cả request, nên loại một phần để tránh toàn bộ hệ thống sụp đổ.
**Grammar & collocations:** `shed load` — loại bớt tải; `load-shedding policy` — chính sách load shedding; `overload protection` — bảo vệ quá tải.
**Examples:** `The API used load shedding to reject low-priority requests before the database became unstable.` → API dùng load shedding để từ chối request ưu tiên thấp trước khi database trở nên mất ổn định.
**Liên kết tiếng Hàn:** `부하 차단`, `로드 셰딩`.

## 16. head-of-line blocking /ˌhɛd əv ˈlaɪn ˈblɑkɪŋ/
**Part of speech:** noun
**Core meaning (English):** a delay pattern in which one slow item at the front of a queue prevents later independent items from progressing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nghẽn do phần tử đầu hàng; hình dung một request chậm đứng đầu queue khiến hàng loạt request phía sau phải chờ dù bản thân chúng có thể xử lý nhanh.
**Grammar & collocations:** `avoid head-of-line blocking` — tránh HOL blocking; `HOL blocking` — viết tắt phổ biến; `queueing bottleneck` — bottleneck do queue.
**Examples:** `A single large response caused head-of-line blocking for smaller responses sharing the same connection.` → Một response lớn gây head-of-line blocking cho các response nhỏ dùng chung connection.
**Liên kết tiếng Hàn:** `HOL 블로킹`, `선두 지연 차단`.

## 17. thundering herd /ˈθʌndərɪŋ hɝd/
**Part of speech:** noun
**Core meaning (English):** a failure or performance pattern in which many waiting workers or clients wake up or retry at the same time and overwhelm a shared resource.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiệu ứng “cả đàn lao tới cùng lúc”; hình dung hàng nghìn client cùng retry ngay khi cache hết hạn hoặc service hồi phục, tạo một spike mới.
**Grammar & collocations:** `thundering-herd problem` — vấn đề thundering herd; `retry storm` — bão retry; `request fan-in` — nhiều request dồn vào một điểm.
**Examples:** `Randomized retry delays prevented a thundering herd when the dependency came back online.` → Retry delay ngẫu nhiên ngăn thundering herd khi dependency hoạt động trở lại.
**Liên kết tiếng Hàn:** `썬더링 허드`, `동시 재시도 폭주`.

## 18. coordinated omission /koʊˈɔrdəˌneɪtɪd əˈmɪʃən/
**Part of speech:** noun
**Core meaning (English):** a measurement error in which a load generator stops issuing new work while waiting for slow responses, causing the worst latency periods to be under-sampled.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi đo bỏ sót có phối hợp; hình dung hệ thống càng chậm thì tool benchmark càng gửi ít request, vô tình “không đo” đúng lúc chậm nhất và làm kết quả đẹp giả tạo.
**Grammar & collocations:** `correct for coordinated omission` — hiệu chỉnh coordinated omission; `load-test bias` — sai lệch load test; `latency under-reporting` — báo latency thấp hơn thực tế.
**Examples:** `The original benchmark hid severe pauses because coordinated omission removed many requests that real users would still have sent.` → Benchmark ban đầu che giấu các khoảng dừng nghiêm trọng vì coordinated omission loại khỏi phép đo nhiều request mà người dùng thực tế vẫn sẽ gửi.
**Liên kết tiếng Hàn:** `코디네이티드 오미션`, `부하 테스트 측정 누락 편향`.

## 19. service-level objective /ˈsɝvɪs ˌlɛvəl əbˈdʒɛktɪv/
**Part of speech:** noun
**Core meaning (English):** a specific reliability or performance target for a service, usually expressed as a measurable threshold over a defined period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mục tiêu mức dịch vụ; hình dung một cam kết kỹ thuật nội bộ có số đo rõ ràng, ví dụ 99.9% request thành công trong 30 ngày.
**Grammar & collocations:** `SLO target` — mục tiêu SLO; `availability SLO` — SLO về availability; `meet an SLO` — đạt SLO.
**Examples:** `The team defined a service-level objective requiring 99.9 percent of requests to complete successfully each month.` → Nhóm đặt SLO yêu cầu 99.9% request hoàn thành thành công mỗi tháng.
**Liên kết tiếng Hàn:** `서비스 수준 목표`, `SLO`.

## 20. error budget /ˈɛrər ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the amount of unreliability a service can tolerate while still meeting its service-level objective.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “ngân sách lỗi”; hình dung nếu SLO cho phép 0.1% thất bại thì phần 0.1% đó là lượng rủi ro có thể “chi tiêu” cho deploy, thử nghiệm hoặc sự cố trước khi phải siết lại độ ổn định.
**Grammar & collocations:** `consume the error budget` — tiêu error budget; `error-budget policy` — chính sách error budget; `budget burn rate` — tốc độ tiêu ngân sách lỗi.
**Examples:** `After the service exhausted its error budget, the team paused risky releases and focused on reliability work.` → Sau khi service dùng hết error budget, nhóm tạm dừng release rủi ro và tập trung vào độ tin cậy.
**Liên kết tiếng Hàn:** `에러 버짓`, `오류 예산`.

## Review in context

Production **observability** begins with useful **telemetry** and often relies on **distributed tracing** to follow requests across services. A propagated **trace context** links every **span**, while a **sampling profiler** and **flame graph** reveal where CPU time goes; low-level **performance counters** can then explain whether cache misses or other hardware events are involved. In event-driven runtimes, **event-loop lag** may expose blocking work. Engineers pay particular attention to **tail latency** and **percentile latency**, because averages can hide the slowest users. As demand rises toward **saturation**, growing **queue depth** indicates that work is waiting. **Backpressure** can slow producers, while **load shedding** deliberately rejects some requests to protect the rest. Poor queue design may create **head-of-line blocking**, and synchronized retries can trigger a **thundering herd**. Even benchmarking can mislead through **coordinated omission**. For reliability management, a **service-level objective** defines the target, and the associated **error budget** quantifies how much failure the system can tolerate before reliability work must take priority.

**Bản dịch tiếng Việt:** **Observability** của hệ thống production bắt đầu từ **telemetry** hữu ích và thường dùng **distributed tracing** để theo request qua nhiều service. **Trace context** được truyền đi để liên kết từng **span**, còn **sampling profiler** và **flame graph** cho biết CPU đang bị tiêu ở đâu; sau đó **performance counter** có thể giải thích liệu cache miss hay sự kiện phần cứng khác có liên quan hay không. Trong runtime hướng event, **event-loop lag** có thể phơi bày các thao tác blocking. Kỹ sư đặc biệt quan tâm **tail latency** và **percentile latency**, vì average có thể che khuất trải nghiệm của nhóm người dùng chậm nhất. Khi tải tiến gần **saturation**, **queue depth** tăng cho thấy công việc đang phải chờ. **Backpressure** có thể làm chậm producer, còn **load shedding** chủ động loại một số request để bảo vệ phần còn lại. Thiết kế queue kém có thể tạo **head-of-line blocking**, và retry đồng bộ có thể gây **thundering herd**. Ngay cả benchmark cũng có thể đánh lừa do **coordinated omission**. Trong quản lý reliability, **service-level objective** định nghĩa mục tiêu, còn **error budget** tương ứng định lượng mức thất bại hệ thống có thể chấp nhận trước khi công việc cải thiện reliability phải được ưu tiên.
