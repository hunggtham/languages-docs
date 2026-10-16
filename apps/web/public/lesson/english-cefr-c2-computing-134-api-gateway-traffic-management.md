# C2 Vocabulary — API gateway traffic management

This lesson follows a request through gateway matching, backend selection, transformation, draining, and controlled traffic splitting.

Flow: **weighted route → header transform → traffic mirror → route predicate → gateway policy → backend pool → health-based routing → failover route → sticky session → session affinity → rate-limit scope → connection draining → upstream timeout → header propagation → protocol translation → gateway plugin → route weight → backend selection → request normalization → traffic split**.

## 1. weighted route /ˈweɪtɪd ruːt/
**Part of speech:** noun
**Core meaning (English):** a route choice assigned a proportion of traffic for weighted distribution among destinations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** route được gán tỷ lệ traffic để phân phối giữa các đích.
**Grammar & collocations:** `weighted-route rule` — rule; `send ten percent to a canary` — gửi.
**Examples:** `The weighted route sent most requests to the stable service and a small share to the candidate.` → Route gửi đa số tới stable.
**Liên kết tiếng Hàn:** `가중 라우트`.

## 2. header transform /ˈhedər trænsˈfɔːrm/
**Part of speech:** noun
**Core meaning (English):** adding, removing, renaming, or changing an HTTP header at a gateway boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thêm, bỏ, đổi tên hoặc đổi value header tại gateway.
**Grammar & collocations:** `header-transform rule` — rule; `rewrite a forwarded host` — viết lại.
**Examples:** `The header transform added the original region before forwarding the request upstream.` → Transform thêm region gốc.
**Liên kết tiếng Hàn:** `헤더 변환`.

## 3. traffic mirror /ˈtræfɪk ˈmɪrər/
**Part of speech:** noun
**Core meaning (English):** copying requests to a secondary destination for observation without using its response for the caller.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** copy request sang đích phụ để quan sát nhưng không dùng response.
**Grammar & collocations:** `traffic-mirror target` — target; `replay production requests safely` — replay.
**Examples:** `Traffic mirror sent checkout requests to the new parser without affecting customer responses.` → Mirror gửi request tới parser mới mà không ảnh hưởng customer.
**Liên kết tiếng Hàn:** `트래픽 미러`.

## 4. route predicate /ruːt ˈpredɪkət/
**Part of speech:** noun
**Core meaning (English):** a condition that determines whether a request matches a particular gateway route.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện quyết định request match route gateway nào.
**Grammar & collocations:** `route-predicate expression` — expression; `match a tenant header` — match.
**Examples:** `The route predicate selected the regional backend when the request carried a European tenant tag.` → Predicate chọn backend châu Âu.
**Liên kết tiếng Hàn:** `라우트 술어`.

## 5. gateway policy /ˈɡeɪtweɪ ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a rule governing authentication, routing, transformation, limits, or logging at an API gateway.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule quản lý auth, route, transform, limit hoặc log ở gateway.
**Grammar & collocations:** `gateway-policy bundle` — bundle; `enforce a request requirement` — thực thi.
**Examples:** `The gateway policy rejected requests missing the required tenant assertion.` → Policy từ chối request thiếu tenant assertion.
**Liên kết tiếng Hàn:** `게이트웨이 정책`.

## 6. backend pool /ˈbækend puːl/
**Part of speech:** noun
**Core meaning (English):** a managed collection of service instances eligible to receive gateway traffic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập instance service được quản lý để nhận traffic gateway.
**Grammar & collocations:** `backend-pool member` — member; `remove an unhealthy instance` — bỏ.
**Examples:** `The backend pool removed two instances whose health checks failed repeatedly.` → Pool bỏ hai instance fail health check.
**Liên kết tiếng Hàn:** `백엔드 풀`.

## 7. health-based routing /helθ beɪst ˈraʊtɪŋ/
**Part of speech:** noun
**Core meaning (English):** selecting destinations according to current health, capacity, or readiness signals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn đích theo health, capacity hoặc readiness hiện tại.
**Grammar & collocations:** `health-based-routing decision` — quyết định; `avoid a degraded zone` — tránh.
**Examples:** `Health-based routing moved new requests away from the zone reporting database failures.` → Routing chuyển request khỏi zone lỗi database.
**Liên kết tiếng Hàn:** `상태 기반 라우팅`.

## 8. failover route /ˈfeɪloʊvər ruːt/
**Part of speech:** noun
**Core meaning (English):** an alternate route used when the preferred destination is unavailable or unsafe.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** route thay thế khi đích chính không khả dụng/an toàn.
**Grammar & collocations:** `failover-route priority` — ưu tiên; `switch to a secondary region` — chuyển.
**Examples:** `The failover route directed reads to the surviving region during the outage.` → Route chuyển read sang vùng còn sống.
**Liên kết tiếng Hàn:** `페일오버 라우트`.

## 9. sticky session /ˈstɪki ˈseʃən/
**Part of speech:** noun
**Core meaning (English):** a routing behavior that repeatedly sends one client's requests to the same backend when possible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hành vi gửi request client về cùng backend nếu có thể.
**Grammar & collocations:** `sticky-session cookie` — cookie; `keep a browser on one instance` — giữ.
**Examples:** `Sticky session kept the browser with the instance holding its temporary upload state.` → Session dính giữ browser ở instance có upload state.
**Liên kết tiếng Hàn:** `스티키 세션`.

## 10. session affinity /ˈseʃən əˈfɪnəti/
**Part of speech:** noun
**Core meaning (English):** the degree to which related requests are directed to a consistent service instance or locality.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức request liên quan được gửi về instance/locality nhất quán.
**Grammar & collocations:** `session-affinity key` — key; `preserve locality for a conversation` — giữ.
**Examples:** `Session affinity reduced cache misses for a long-lived interactive session.` → Affinity giảm cache miss.
**Liên kết tiếng Hàn:** `세션 어피니티`.

## 11. rate-limit scope /ˈreɪt lɪmɪt skoʊp/
**Part of speech:** noun
**Core meaning (English):** the identity or resource boundary to which a rate limit applies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới identity/resource mà rate limit áp dụng.
**Grammar & collocations:** `rate-limit-scope key` — key; `limit one tenant independently` — giới hạn.
**Examples:** `The rate-limit scope isolated one customer's burst from every other customer.` → Scope tách burst một customer.
**Liên kết tiếng Hàn:** `속도 제한 범위`.

## 12. connection draining /kəˈnekʃən ˈdreɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** allowing existing connections to finish while preventing new requests from reaching a retiring backend.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cho connection cũ hoàn tất và chặn request mới tới backend sắp bỏ.
**Grammar & collocations:** `connection-draining timeout` — timeout; `retire an instance gracefully` — ngừng.
**Examples:** `Connection draining let active downloads finish before the server was replaced.` → Draining cho download hoàn tất.
**Liên kết tiếng Hàn:** `연결 드레이닝`.

## 13. upstream timeout /ˈʌpstriːm ˈtaɪmaʊt/
**Part of speech:** noun
**Core meaning (English):** the maximum time a gateway waits for a response from a backend service.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian tối đa gateway chờ backend trả response.
**Grammar & collocations:** `upstream-timeout budget` — budget; `return a gateway error` — trả.
**Examples:** `The upstream timeout protected callers from waiting forever on a stalled report service.` → Timeout bảo vệ caller khỏi chờ vô hạn.
**Liên kết tiếng Hàn:** `업스트림 시간 초과`.

## 14. header propagation /ˈhedər ˌprɒpəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** carrying selected request headers across gateway and backend boundaries.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mang header được chọn qua ranh gateway/backend.
**Grammar & collocations:** `header-propagation allowlist` — allowlist; `forward a trace context` — chuyển.
**Examples:** `Header propagation carried the trace identifier from the edge to the payment service.` → Propagation mang trace ID tới payment.
**Liên kết tiếng Hàn:** `헤더 전파`.

## 15. protocol translation /ˈproʊtəkɒl trænsˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** converting requests or responses between different application protocols at a gateway.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển request/response giữa protocol application khác nhau.
**Grammar & collocations:** `protocol-translation layer` — layer; `bridge HTTP and gRPC` — nối.
**Examples:** `Protocol translation exposed a REST endpoint while the backend spoke a binary RPC protocol.` → Translation cho REST dù backend dùng RPC binary.
**Liên kết tiếng Hàn:** `프로토콜 변환`.

## 16. gateway plugin /ˈɡeɪtweɪ ˈplʌɡɪn/
**Part of speech:** noun
**Core meaning (English):** an extension that adds custom gateway behavior such as authentication, transformation, or metrics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** extension thêm behavior gateway như auth, transform hoặc metric.
**Grammar & collocations:** `gateway-plugin lifecycle` — vòng đời; `load a request filter` — nạp.
**Examples:** `The gateway plugin attached a tenant identifier and emitted a policy metric.` → Plugin gắn tenant ID và phát metric.
**Liên kết tiếng Hàn:** `게이트웨이 플러그인`.

## 17. route weight /ruːt weɪt/
**Part of speech:** noun
**Core meaning (English):** a numeric share used to divide matching traffic among alternative routes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ trọng số chia traffic match giữa route thay thế.
**Grammar & collocations:** `route-weight update` — cập nhật; `increase a candidate share` — tăng.
**Examples:** `The operator raised the route weight after the candidate passed its canary checks.` → Operator tăng weight sau canary.
**Liên kết tiếng Hàn:** `라우트 가중치`.

## 18. backend selection /ˈbækend səˈlekʃən/
**Part of speech:** noun
**Core meaning (English):** choosing the specific service instance or destination that will handle a request.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn instance hoặc destination cụ thể xử lý request.
**Grammar & collocations:** `backend-selection algorithm` — algorithm; `choose the least-loaded instance` — chọn.
**Examples:** `Backend selection favored the instance with local cache data and spare capacity.` → Selection ưu tiên instance có cache local.
**Liên kết tiếng Hàn:** `백엔드 선택`.

## 19. request normalization /rɪˈkwest ˌnɔːrməlaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** converting equivalent request forms into a consistent representation before routing or authorization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi các dạng request tương đương thành biểu diễn chung trước route/auth.
**Grammar & collocations:** `request-normalization rule` — rule; `canonicalize a path` — chuẩn hóa.
**Examples:** `Request normalization removed duplicate slashes before the route predicate ran.` → Normalization bỏ slash trùng trước predicate.
**Liên kết tiếng Hàn:** `요청 정규화`.

## 20. traffic split /ˈtræfɪk splɪt/
**Part of speech:** noun
**Core meaning (English):** dividing incoming traffic among versions, regions, or experiments according to configured proportions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia traffic vào version, vùng hoặc experiment theo tỷ lệ config.
**Grammar & collocations:** `traffic-split configuration` — config; `shift exposure gradually` — chuyển.
**Examples:** `The traffic split moved five percent of users to the redesigned checkout.` → Split đưa 5% user sang checkout mới.
**Liên kết tiếng Hàn:** `트래픽 분할`.

## Review in context

A **weighted route** and **route predicate** choose traffic; a **header transform**, **traffic mirror**, and **gateway policy** shape the request. A **backend pool** receives it, **health-based routing** avoids weak instances, and a **failover route** protects availability. **Sticky session** and **session affinity** preserve locality, while **rate-limit scope** controls fairness. **Connection draining** retires instances, an **upstream timeout** bounds waiting, and **header propagation** carries context. **Protocol translation** bridges interfaces, a **gateway plugin** adds behavior, **route weight** tunes exposure, **backend selection** chooses an instance, **request normalization** canonicalizes input, and a **traffic split** stages release.

**Bản dịch tiếng Việt:** **Weighted route** và **route predicate** chọn traffic; **header transform**, **traffic mirror** và **gateway policy** định hình request. **Backend pool** nhận request, **health-based routing** tránh instance yếu, còn **failover route** bảo vệ availability. **Sticky session** và **session affinity** giữ locality, còn **rate-limit scope** kiểm soát fairness. **Connection draining** ngừng instance, **upstream timeout** giới hạn chờ, và **header propagation** mang context. **Protocol translation** nối interface, **gateway plugin** thêm behavior, **route weight** chỉnh exposure, **backend selection** chọn instance, **request normalization** chuẩn hóa input, và **traffic split** triển khai release theo giai đoạn.
