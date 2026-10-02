# C2 Vocabulary — Resilient APIs and service contracts

This lesson follows a resilient service call from idempotency and deadlines through overload protection, negotiation, quotas, and consistency.

Flow: **idempotent endpoint → request hedging → deadline propagation → bulkhead isolation → version negotiation → content negotiation → pagination cursor → rate-limit window → quota bucket → distributed lock → consistency token → retry budget → hedged request → cascading cancellation → client-side load balancing → grace period → compatibility envelope → service dependency budget → adaptive timeout → dependency timeout**.

## 1. idempotent endpoint /ˌɪdəmˈpoʊtənt ˈendpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** an API endpoint that produces the same intended effect when a client safely repeats the request.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** endpoint lặp request vẫn tạo cùng effect.
**Grammar & collocations:** `idempotent-endpoint guarantee` — guarantee; `deduplicate a retry` — khử trùng.
**Examples:** `The idempotent endpoint made a payment retry safe after the client lost its response.` → Endpoint làm retry payment an toàn.
**Liên kết tiếng Hàn:** `멱등 엔드포인트`.

## 2. request hedging /rɪˈkwest ˈhedʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** sending a duplicate request after a delay so a slow replica does not determine tail latency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gửi request dự phòng sau delay để tránh replica chậm.
**Grammar & collocations:** `request-hedging threshold` — threshold; `race two replicas` — đua.
**Examples:** `Request hedging improved tail latency but increased duplicate work during an outage.` → Hedging giảm tail latency nhưng tăng work.
**Liên kết tiếng Hàn:** `요청 헤징`.

## 3. deadline propagation /ˈdedlaɪn ˌprɒpəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** carrying a caller's remaining time budget through downstream service calls.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truyền thời gian còn lại của caller xuống service sau.
**Grammar & collocations:** `deadline-propagation header` — header; `honor a remaining budget` — tôn trọng.
**Examples:** `Deadline propagation stopped a downstream query from running after the client had given up.` → Propagation ngăn query chạy thừa.
**Liên kết tiếng Hàn:** `마감 시간 전파`.

## 4. bulkhead isolation /ˈbʌlkhed ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** partitioning resources so failure or saturation in one workload cannot consume all capacity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia resource để workload lỗi không chiếm hết capacity.
**Grammar & collocations:** `bulkhead-isolation pool` — pool; `cap concurrent work` — giới hạn.
**Examples:** `Bulkhead isolation kept image processing from starving the checkout requests.` → Isolation bảo vệ checkout.
**Liên kết tiếng Hàn:** `격벽 격리`.

## 5. version negotiation /ˈvɜːrʒən nɪˌɡoʊʃiˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** agreeing on a protocol or representation version that both client and service support.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** client/service thống nhất version cùng hỗ trợ.
**Grammar & collocations:** `version-negotiation header` — header; `select a compatible dialect` — chọn.
**Examples:** `Version negotiation let old clients continue using the service during the rollout.` → Negotiation giữ client cũ.
**Liên kết tiếng Hàn:** `버전 협상`.

## 6. content negotiation /ˈkɒntent nɪˌɡoʊʃiˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** selecting a response representation such as JSON, binary, or a language based on client capabilities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn format response theo khả năng client.
**Grammar & collocations:** `content-negotiation preference` — preference; `serve a compressed representation` — phục vụ.
**Examples:** `Content negotiation returned a compact binary format to the mobile client.` → Negotiation trả binary gọn.
**Liên kết tiếng Hàn:** `콘텐츠 협상`.

## 7. pagination cursor /ˌpædʒəˈneɪʃən ˈkɜːrsər/
**Part of speech:** noun
**Core meaning (English):** an opaque position token used to request the next stable page of a collection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** token vị trí để lấy trang tiếp theo ổn định.
**Grammar & collocations:** `pagination-cursor expiry` — expiry; `resume a collection scan` — tiếp tục.
**Examples:** `The pagination cursor remained valid even as new records arrived.` → Cursor vẫn ổn định khi record mới tới.
**Liên kết tiếng Hàn:** `페이지 매김 커서`.

## 8. rate-limit window /reɪt ˈlɪmɪt ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the interval over which a service counts requests against a permitted rate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian đếm request theo rate cho phép.
**Grammar & collocations:** `rate-limit-window reset` — reset; `admit a request budget` — cấp.
**Examples:** `The rate-limit window reset every minute for each API key.` → Window reset mỗi phút.
**Liên kết tiếng Hàn:** `속도 제한 창`.

## 9. quota bucket /ˈkwoʊtə ˈbʌkɪt/
**Part of speech:** noun
**Core meaning (English):** a counter or token pool tracking how much usage a tenant may still consume.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** counter/token pool theo dõi quota tenant còn dùng.
**Grammar & collocations:** `quota-bucket refill` — refill; `debit a tenant allowance` — trừ.
**Examples:** `The quota bucket emptied before the billing period ended.` → Bucket hết trước kỳ billing.
**Liên kết tiếng Hàn:** `할당량 버킷`.

## 10. distributed lock /dɪˈstrɪbjətɪd lɒk/
**Part of speech:** noun
**Core meaning (English):** a coordination mechanism allowing only one distributed participant to own a resource at a time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế chỉ cho một participant phân tán giữ resource.
**Grammar & collocations:** `distributed-lock lease` — lease; `acquire exclusive ownership` — giành.
**Examples:** `The distributed lock prevented two workers from issuing the same migration.` → Lock ngăn hai worker chạy migration.
**Liên kết tiếng Hàn:** `분산 잠금`.

## 11. consistency token /kənˈsɪstənsi ˈtoʊkən/
**Part of speech:** noun
**Core meaning (English):** a token representing a read position or version that a later request asks the service to respect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** token biểu diễn version/read position cho request sau.
**Grammar & collocations:** `consistency-token header` — header; `read at least through a version` — đọc.
**Examples:** `The consistency token ensured the follow-up read included the user's just-created record.` → Token đảm bảo thấy record mới.
**Liên kết tiếng Hàn:** `일관성 토큰`.

## 12. retry budget /ˈriːtraɪ ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a limit on additional attempts so retries do not multiply load during failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn retry để không nhân tải lúc lỗi.
**Grammar & collocations:** `retry-budget policy` — policy; `spend an attempt` — tiêu.
**Examples:** `The retry budget prevented every layer from retrying the same failed call.` → Budget ngăn retry chồng.
**Liên kết tiếng Hàn:** `재시도 예산`.

## 13. hedged request /hedʒd rɪˈkwest/
**Part of speech:** noun
**Core meaning (English):** a duplicate or alternate request issued to reduce the effect of a slow or uncertain first attempt.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** request thay thế để giảm ảnh hưởng attempt chậm.
**Grammar & collocations:** `hedged-request cancellation` — cancellation; `cancel the losing copy` — hủy.
**Examples:** `The hedged request cancelled its slower copy as soon as one replica responded.` → Request hủy bản chậm.
**Liên kết tiếng Hàn:** `헤지된 요청`.

## 14. cascading cancellation /kəˈskeɪdɪŋ ˌkænsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** propagating cancellation through dependent operations after an upstream request is abandoned.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truyền hủy qua operation phụ thuộc khi request trên bỏ.
**Grammar & collocations:** `cascading-cancellation signal` — signal; `abort a downstream task` — hủy.
**Examples:** `Cascading cancellation freed database work after the browser closed the page.` → Cancellation giải phóng DB work.
**Liên kết tiếng Hàn:** `연쇄 취소`.

## 15. client-side load balancing /ˈklaɪənt saɪd loʊd ˈbælənsɪŋ/
**Part of speech:** noun
**Core meaning (English):** choosing among service instances from the client rather than through a central proxy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** client tự chọn instance thay vì proxy trung tâm.
**Grammar & collocations:** `client-side-load-balancing policy` — policy; `rotate an endpoint choice` — xoay vòng.
**Examples:** `Client-side load balancing avoided a single proxy bottleneck for the internal calls.` → Balancing tránh proxy nghẽn.
**Liên kết tiếng Hàn:** `클라이언트 측 부하 분산`.

## 16. grace period /ɡreɪs ˈpɪəriəd/
**Part of speech:** noun
**Core meaning (English):** a short extra interval during which an expiring lease, credential, or policy remains temporarily accepted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng đệm ngắn sau expiry vẫn tạm chấp nhận.
**Grammar & collocations:** `grace-period expiry` — expiry; `honor a recently expired lease` — chấp nhận.
**Examples:** `The grace period gave disconnected clients time to renew their credentials.` → Period cho client thời gian renew.
**Liên kết tiếng Hàn:** `유예 기간`.

## 17. compatibility envelope /kəmˌpætəˈbɪləti ˈenvəloʊp/
**Part of speech:** noun
**Core meaning (English):** the set of protocol versions, fields, and behaviors that a service promises to support together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập version, field và behavior service cam kết hỗ trợ.
**Grammar & collocations:** `compatibility-envelope test` — test; `preserve a supported behavior` — giữ.
**Examples:** `The compatibility envelope allowed a client to omit the new optional field.` → Envelope cho bỏ field mới.
**Liên kết tiếng Hàn:** `호환성 범위`.

## 18. service dependency budget /ˈsɜːrvɪs dɪˈpendənsi ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the latency, failure, or resource allowance a service can spend on a downstream dependency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách latency/failure/resource cho dependency sau.
**Grammar & collocations:** `service-dependency-budget allocation` — allocation; `reserve time for a fallback` — dự phòng.
**Examples:** `The service dependency budget left enough time to return a cached response.` → Budget chừa thời gian fallback.
**Liên kết tiếng Hàn:** `서비스 종속성 예산`.

## 19. adaptive timeout /əˈdæptɪv ˈtaɪmaʊt/
**Part of speech:** noun
**Core meaning (English):** a timeout adjusted from observed latency, load, or request characteristics instead of fixed permanently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timeout đổi theo latency/load/request thực tế.
**Grammar & collocations:** `adaptive-timeout estimator` — estimator; `tighten a request deadline` — siết.
**Examples:** `Adaptive timeout shortened idle requests while allowing large exports more time.` → Timeout thích nghi theo loại request.
**Liên kết tiếng Hàn:** `적응형 타임아웃`.

## 20. dependency timeout /dɪˈpendənsi ˈtaɪmaʊt/
**Part of speech:** noun
**Core meaning (English):** a timeout specifically applied to a call made to a downstream service or resource.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timeout riêng cho call tới dependency.
**Grammar & collocations:** `dependency-timeout budget` — budget; `fail a downstream call fast` — fail nhanh.
**Examples:** `The dependency timeout returned a fallback before the user-facing deadline expired.` → Timeout trả fallback sớm.
**Liên kết tiếng Hàn:** `종속성 타임아웃`.

## Review in context

An **idempotent endpoint**, **request hedging**, and **deadline propagation** make calls safer, while **bulkhead isolation** limits failure spread. **Version negotiation**, **content negotiation**, and a **pagination cursor** shape API compatibility; a **rate-limit window** and **quota bucket** control use. A **distributed lock**, **consistency token**, and **retry budget** coordinate state. A **hedged request**, **cascading cancellation**, **client-side load balancing**, **grace period**, **compatibility envelope**, **service dependency budget**, **adaptive timeout**, and **dependency timeout** complete resilience.

**Bản dịch tiếng Việt:** **Idempotent endpoint**, **request hedging** và **deadline propagation** làm call an toàn hơn, còn **bulkhead isolation** giới hạn lan lỗi. **Version negotiation**, **content negotiation** và **pagination cursor** định hình tương thích API; **rate-limit window** và **quota bucket** kiểm soát sử dụng. **Distributed lock**, **consistency token** và **retry budget** phối hợp state. **Hedged request**, **cascading cancellation**, **client-side load balancing**, **grace period**, **compatibility envelope**, **service dependency budget**, **adaptive timeout** và **dependency timeout** hoàn thiện resilience.
