# C2 Vocabulary — Edge computing and serverless delivery

This lesson follows an edge request from routing and authorization through cache behavior, failover, isolation, and regional consistency.

Flow: **edge function → edge runtime → origin failover → cache fill → cache purge → edge compute → request routing policy → geo steering → latency-based routing → health probe → origin pool → connection reuse → TLS session resumption → anycast prefix → edge authorization → distributed rate limiter → serverless isolate → request shadowing → edge consistency → regional affinity**.

## 1. edge function /edʒ ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a short server-side program executed near users at a network edge location.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** program server chạy gần user ở edge.
**Grammar & collocations:** `edge-function trigger` — trigger; `rewrite a request at the edge` — viết lại.
**Examples:** `The edge function removed tracking parameters before forwarding the request.` → Function bỏ tracking trước khi forward.
**Liên kết tiếng Hàn:** `엣지 함수`.

## 2. edge runtime /edʒ ˈrʌntaɪm/
**Part of speech:** noun
**Core meaning (English):** the restricted execution environment that runs code at an edge location.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** môi trường hạn chế chạy code ở edge.
**Grammar & collocations:** `edge-runtime API` — API; `execute without a full server process` — chạy.
**Examples:** `The edge runtime exposed request APIs but not arbitrary native filesystem access.` → Runtime giới hạn filesystem.
**Liên kết tiếng Hàn:** `엣지 런타임`.

## 3. origin failover /ˈɒrɪdʒɪn ˈfeɪloʊvər/
**Part of speech:** noun
**Core meaning (English):** switching requests from an unavailable primary origin to an alternate origin.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển request từ origin chính lỗi sang origin dự phòng.
**Grammar & collocations:** `origin-failover target` — target; `promote a secondary origin` — chuyển.
**Examples:** `Origin failover served the catalog from a standby region during the outage.` → Failover phục vụ từ region dự phòng.
**Liên kết tiếng Hàn:** `원본 장애 조치`.

## 4. cache fill /kæʃ fɪl/
**Part of speech:** noun
**Core meaning (English):** fetching and storing an object at a cache after a miss.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fetch và lưu object vào cache sau miss.
**Grammar & collocations:** `cache-fill request` — request; `populate an edge object` — điền.
**Examples:** `Cache fill fetched the image once and served later users locally.` → Fill fetch ảnh một lần.
**Liên kết tiếng Hàn:** `캐시 채우기`.

## 5. cache purge /kæʃ pɜːrdʒ/
**Part of speech:** noun
**Core meaning (English):** removing cached objects before their normal freshness period expires.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xóa object cache trước khi hết freshness.
**Grammar & collocations:** `cache-purge request` — request; `invalidate a distribution path` — vô hiệu.
**Examples:** `Cache purge removed the compromised JavaScript from every edge location.` → Purge xóa JavaScript lỗi.
**Liên kết tiếng Hàn:** `캐시 제거`.

## 6. edge compute /edʒ kəmˈpjuːt/
**Part of speech:** noun
**Core meaning (English):** computation performed close to data sources or users to reduce latency and backhaul traffic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** compute gần user/data để giảm latency và backhaul.
**Grammar & collocations:** `edge-compute workload` — workload; `process telemetry locally` — xử lý.
**Examples:** `Edge compute filtered sensor events before they crossed the regional link.` → Compute lọc event trước khi gửi xa.
**Liên kết tiếng Hàn:** `엣지 컴퓨팅`.

## 7. request routing policy /rɪˈkwest ˈruːtɪŋ ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** rules deciding which edge or origin should receive a request.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule chọn edge/origin nhận request.
**Grammar & collocations:** `request-routing-policy rule` — rule; `route by tenant region` — định tuyến.
**Examples:** `The request routing policy sent regulated data only to approved regions.` → Policy giữ data trong region đúng.
**Liên kết tiếng Hàn:** `요청 라우팅 정책`.

## 8. geo steering /ˈdʒiːoʊ ˈstɪərɪŋ/
**Part of speech:** noun
**Core meaning (English):** directing traffic according to the geographic location of the client or resource.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hướng traffic theo địa lý client/resource.
**Grammar & collocations:** `geo-steering rule` — rule; `select a nearby region` — chọn.
**Examples:** `Geo steering directed European users to the Frankfurt edge cluster.` → Steering đưa user châu Âu tới Frankfurt.
**Liên kết tiếng Hàn:** `지리적 조정`.

## 9. latency-based routing /ˈleɪtənsi beɪst ˈruːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** choosing a destination based on measured network or service latency from the client.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn destination theo latency đo được.
**Grammar & collocations:** `latency-based-routing table` — table; `prefer the fastest region` — ưu tiên.
**Examples:** `Latency-based routing moved the client after the nearest region became congested.` → Routing chuyển khi region nghẽn.
**Liên kết tiếng Hàn:** `지연 시간 기반 라우팅`.

## 10. health probe /helθ proʊb/
**Part of speech:** noun
**Core meaning (English):** a periodic request used to determine whether an endpoint is ready to receive traffic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** request định kỳ kiểm endpoint sẵn sàng.
**Grammar & collocations:** `health-probe interval` — interval; `mark an origin unhealthy` — đánh dấu.
**Examples:** `The health probe detected that the origin could accept connections but not serve data.` → Probe lộ origin không serve được.
**Liên kết tiếng Hàn:** `상태 프로브`.

## 11. origin pool /ˈɒrɪdʒɪn puːl/
**Part of speech:** noun
**Core meaning (English):** a group of origin endpoints available to serve the same edge route.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm origin cùng phục vụ một route edge.
**Grammar & collocations:** `origin-pool member` — member; `remove a degraded endpoint` — loại.
**Examples:** `The origin pool kept two healthy regions available behind the edge.` → Pool giữ hai region khỏe.
**Liên kết tiếng Hàn:** `원본 풀`.

## 12. connection reuse /kəˈnekʃən riːˈjuːs/
**Part of speech:** noun
**Core meaning (English):** sending multiple requests over an existing network connection instead of opening a new one each time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng lại connection cho nhiều request.
**Grammar & collocations:** `connection-reuse ratio` — ratio; `keep a socket alive` — giữ.
**Examples:** `Connection reuse removed repeated handshake cost for the image requests.` → Reuse bỏ cost handshake.
**Liên kết tiếng Hàn:** `연결 재사용`.

## 13. TLS session resumption /ˌtiː el ɛs ˈseʃən rɪˈzʌmpʃən/
**Part of speech:** noun
**Core meaning (English):** reusing negotiated TLS state to establish a secure connection with fewer handshake steps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tái dùng state TLS để handshake ngắn hơn.
**Grammar & collocations:** `TLS-session-resumption ticket` — ticket; `resume a secure session` — tiếp tục.
**Examples:** `TLS session resumption lowered connection latency for returning clients.` → Resumption giảm latency.
**Liên kết tiếng Hàn:** `TLS 세션 재개`.

## 14. anycast prefix /ˈeniˌkæst ˈpriːfɪks/
**Part of speech:** noun
**Core meaning (English):** a network prefix announced from multiple locations so routing can select a nearby instance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prefix quảng bá từ nhiều nơi để route chọn instance gần.
**Grammar & collocations:** `anycast-prefix announcement` — announcement; `withdraw a regional route` — rút.
**Examples:** `The anycast prefix made the service reachable through the nearest healthy point of presence.` → Prefix đưa tới PoP gần.
**Liên kết tiếng Hàn:** `애니캐스트 프리픽스`.

## 15. edge authorization /edʒ ˌɔːθərəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** checking access credentials at the edge before forwarding a request to an origin.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm credential tại edge trước khi forward origin.
**Grammar & collocations:** `edge-authorization policy` — policy; `deny an expired token` — từ chối.
**Examples:** `Edge authorization rejected the request before it consumed origin capacity.` → Authorization chặn trước origin.
**Liên kết tiếng Hàn:** `엣지 권한 부여`.

## 16. distributed rate limiter /dɪˈstrɪbjətɪd reɪt ˈlɪmɪtər/
**Part of speech:** noun
**Core meaning (English):** a rate limiter whose counters or decisions are coordinated across multiple edge locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** limiter phối hợp counter/decision giữa nhiều edge.
**Grammar & collocations:** `distributed-rate-limiter state` — state; `enforce a global quota` — áp dụng.
**Examples:** `The distributed rate limiter protected the API even when clients changed regions.` → Limiter giữ quota khi đổi region.
**Liên kết tiếng Hàn:** `분산 속도 제한기`.

## 17. serverless isolate /ˈsɜːrvərləs ˈaɪsəleɪt/
**Part of speech:** noun
**Core meaning (English):** a lightweight sandbox separating one serverless invocation from another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sandbox nhẹ tách invocation serverless.
**Grammar & collocations:** `serverless-isolate boundary` — boundary; `recycle an execution context` — tái tạo.
**Examples:** `The serverless isolate prevented one tenant's memory from appearing in another invocation.` → Isolate ngăn lộ memory.
**Liên kết tiếng Hàn:** `서버리스 격리`.

## 18. request shadowing /rɪˈkwest ˈʃædoʊɪŋ/
**Part of speech:** noun
**Core meaning (English):** copying production requests to a secondary system for testing without using its response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** copy request production sang hệ thống test, không dùng response.
**Grammar & collocations:** `request-shadowing stream` — stream; `replay live traffic safely` — replay.
**Examples:** `Request shadowing tested the new origin without changing customer responses.` → Shadowing test origin mới.
**Liên kết tiếng Hàn:** `요청 섀도잉`.

## 19. edge consistency /edʒ kənˈsɪstənsi/
**Part of speech:** noun
**Core meaning (English):** the guarantee describing how quickly and uniformly edge locations reflect an origin update.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức edge phản ánh update origin nhanh và đồng đều.
**Grammar & collocations:** `edge-consistency window` — window; `propagate an invalidation` — lan.
**Examples:** `Edge consistency was weaker for cached personalization data than for public assets.` → Consistency yếu hơn với data cá nhân.
**Liên kết tiếng Hàn:** `엣지 일관성`.

## 20. regional affinity /ˈriːdʒənəl əˈfɪnəti/
**Part of speech:** noun
**Core meaning (English):** a preference for keeping a client attached to one region to improve cache and session locality.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ưu tiên giữ client ở một region để tăng locality.
**Grammar & collocations:** `regional-affinity cookie` — cookie; `stick a session to a region` — giữ.
**Examples:** `Regional affinity reduced cache misses for a user with repeated requests.` → Affinity giảm cache miss.
**Liên kết tiếng Hàn:** `지역 친화성`.

## Review in context

An **edge function** runs in an **edge runtime**, while **origin failover**, **cache fill**, **cache purge**, and **edge compute** shape delivery. A **request routing policy**, **geo steering**, **latency-based routing**, **health probe**, and **origin pool** select a destination. **Connection reuse**, **TLS session resumption**, an **anycast prefix**, and **edge authorization** reduce cost and risk. A **distributed rate limiter**, **serverless isolate**, **request shadowing**, **edge consistency**, and **regional affinity** complete operations.

**Bản dịch tiếng Việt:** **Edge function** chạy trong **edge runtime**, còn **origin failover**, **cache fill**, **cache purge** và **edge compute** định hình delivery. **Request routing policy**, **geo steering**, **latency-based routing**, **health probe** và **origin pool** chọn destination. **Connection reuse**, **TLS session resumption**, **anycast prefix** và **edge authorization** giảm cost/risk. **Distributed rate limiter**, **serverless isolate**, **request shadowing**, **edge consistency** và **regional affinity** hoàn thiện vận hành.
