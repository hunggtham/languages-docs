# C2 Vocabulary — Edge delivery and traffic steering

This lesson follows a request through cache identity, revalidation, origin retrieval, secure naming, and policy-based routing.

Flow: **cache key → cache variant → surrogate key → purge request → background revalidation → stale-if-error → cache bypass → origin fetch → connection pooling → keep-alive reuse → certificate stapling → DNS over HTTPS → DNS over TLS → anycast routing → proximity-based routing → weighted routing → probe-based routing → failover routing → traffic policy → service endpoint**.

## 1. cache key /kæʃ kiː/
**Part of speech:** noun
**Core meaning (English):** the normalized identity used to decide whether a request can reuse a cached response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identity chuẩn hóa để quyết định request dùng response cache được không.
**Grammar & collocations:** `cache-key normalization` — normalization; `include a query parameter` — đưa vào.
**Examples:** `The cache key included the language but ignored an irrelevant tracking parameter.` → Key gồm language nhưng bỏ tracking không cần.
**Liên kết tiếng Hàn:** `캐시 키`.

## 2. cache variant /kæʃ ˈveriənt/
**Part of speech:** noun
**Core meaning (English):** one cached representation selected for a particular content, language, device, or encoding condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một representation cache cho content/language/device/encoding cụ thể.
**Grammar & collocations:** `cache-variant selector` — selector; `serve a compressed variant` — phục vụ.
**Examples:** `The cache variant changed when the client requested a different content language.` → Variant đổi khi client yêu cầu language khác.
**Liên kết tiếng Hàn:** `캐시 변형`.

## 3. surrogate key /ˈsɜːrəɡət kiː/
**Part of speech:** noun
**Core meaning (English):** a label attached to cached objects so a group can be invalidated without naming each URL.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** label gắn object cache để invalidate cả nhóm không cần nêu từng URL.
**Grammar & collocations:** `surrogate-key tag` — tag; `purge a content group` — purge.
**Examples:** `The publisher purged every article with one surrogate key after the category changed.` → Publisher purge cả nhóm article bằng một key.
**Liên kết tiếng Hàn:** `대리 키`.

## 4. purge request /pɜːrdʒ rɪˈkwest/
**Part of speech:** noun
**Core meaning (English):** a request instructing a cache to remove one or more stored representations before normal expiry.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** request yêu cầu cache xóa representation trước khi hết hạn tự nhiên.
**Grammar & collocations:** `purge-request authorization` — authorization; `invalidate a path` — vô hiệu.
**Examples:** `The deployment sent a purge request after changing the product price.` → Deploy gửi request purge sau đổi giá.
**Liên kết tiếng Hàn:** `퍼지 요청`.

## 5. background revalidation /ˈbækgraʊnd ˌriːvælɪˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** refreshing an expired cached representation asynchronously while a request can continue using the old one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** làm mới representation cache hết hạn ở nền trong khi request dùng bản cũ.
**Grammar & collocations:** `background-revalidation task` — task; `refresh asynchronously` — làm mới.
**Examples:** `Background revalidation kept the homepage fast while the edge fetched updated content.` → Revalidation nền giữ homepage nhanh khi edge fetch bản mới.
**Liên kết tiếng Hàn:** `오래된 상태에서 재검증`.

## 6. stale-if-error /steɪl ɪf ˈerər/
**Part of speech:** noun
**Core meaning (English):** a caching rule allowing an old response to be served when the origin returns an error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule cho trả response cũ khi origin trả error.
**Grammar & collocations:** `stale-if-error allowance` — allowance; `serve a last-known response` — phục vụ.
**Examples:** `Stale-if-error showed yesterday's catalog while the origin database was unavailable.` → Rule hiển thị catalog hôm qua khi origin down.
**Liên kết tiếng Hàn:** `오류 시 오래된 상태`.

## 7. cache bypass /kæʃ ˈbaɪpɑːs/
**Part of speech:** noun
**Core meaning (English):** a condition that sends a request directly to the origin instead of using a cached response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện đưa request thẳng origin thay cache.
**Grammar & collocations:** `cache-bypass rule` — rule; `bypass for authenticated requests` — bỏ qua.
**Examples:** `The cache bypass protected personalized billing data from shared storage.` → Bypass bảo vệ billing cá nhân khỏi cache chung.
**Liên kết tiếng Hàn:** `캐시 우회`.

## 8. origin fetch /ˈɒrɪdʒɪn fetʃ/
**Part of speech:** noun
**Core meaning (English):** a request from a cache or edge layer to the authoritative backend for a representation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** request từ cache/edge tới backend authoritative để lấy representation.
**Grammar & collocations:** `origin-fetch latency` — latency; `coalesce an origin fetch` — gộp.
**Examples:** `The origin fetch took longer after the cache was purged for the release.` → Fetch origin lâu hơn sau purge cache.
**Liên kết tiếng Hàn:** `오리진 가져오기`.

## 9. connection pooling /kəˈnekʃən ˈpuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** reusing a managed set of open connections instead of creating one for every request.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tái sử dụng tập connection mở thay tạo từng request.
**Grammar & collocations:** `connection-pooling limit` — limit; `reuse an idle connection` — tái sử dụng.
**Examples:** `Connection pooling reduced handshake cost between the edge and origin.` → Pooling giảm cost handshake edge-origin.
**Liên kết tiếng Hàn:** `연결 풀링`.

## 10. keep-alive reuse /kiːp əˈlaɪv riˈjuːz/
**Part of speech:** noun
**Core meaning (English):** using an existing persistent connection for another request instead of opening a new one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng connection persistent cho request khác thay mở mới.
**Grammar & collocations:** `keep-alive-reuse ratio` — ratio; `send another request on the socket` — gửi.
**Examples:** `Keep-alive reuse lowered latency for the sequence of small asset requests.` → Reuse giảm latency cho nhiều asset nhỏ.
**Liên kết tiếng Hàn:** `킵얼라이브 재사용`.

## 11. certificate stapling /sərˈtɪfɪkət ˈstæplɪŋ/
**Part of speech:** noun
**Core meaning (English):** attaching a certificate-status response to a TLS handshake so clients need less separate validation traffic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đính kèm status certificate vào TLS handshake để client bớt traffic validation riêng.
**Grammar & collocations:** `certificate-stapling response` — response; `staple a revocation proof` — đính.
**Examples:** `Certificate stapling let the client validate revocation status during the handshake.` → Stapling cho client validate status ngay handshake.
**Liên kết tiếng Hàn:** `인증서 스테이플링`.

## 12. DNS over HTTPS /ˌdiː en ˈes ˌoʊvər eɪtʃ tiː tiː piː/
**Part of speech:** noun
**Core meaning (English):** sending DNS queries through encrypted HTTPS requests rather than traditional plaintext DNS transport.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gửi query DNS qua HTTPS mã hóa thay transport plaintext.
**Grammar & collocations:** `DNS-over-HTTPS resolver` — resolver; `encrypt a name lookup` — mã hóa.
**Examples:** `DNS over HTTPS hid the lookup from networks that could inspect ordinary DNS traffic.` → DoH che lookup khỏi network đọc DNS thường.
**Liên kết tiếng Hàn:** `HTTPS를 통한 DNS`.

## 13. DNS over TLS /ˌdiː en ˈes ˌoʊvər tiː el ˈes/
**Part of speech:** noun
**Core meaning (English):** sending DNS queries through a TLS-protected connection to a resolver.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gửi query DNS qua connection được TLS bảo vệ tới resolver.
**Grammar & collocations:** `DNS-over-TLS endpoint` — endpoint; `negotiate an encrypted channel` — negotiate.
**Examples:** `DNS over TLS protected the resolver connection while preserving the normal DNS protocol.` → DoT bảo vệ connection mà giữ protocol DNS.
**Liên kết tiếng Hàn:** `TLS를 통한 DNS`.

## 14. anycast routing /ˈeniˌkæst ˈraʊtɪŋ/
**Part of speech:** noun
**Core meaning (English):** routing the same address toward a nearby or preferred instance announced from multiple locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** route cùng address tới instance gần/preferred từ nhiều location.
**Grammar & collocations:** `anycast-routing announcement` — announcement; `attract a nearby client` — thu hút.
**Examples:** `Anycast routing sent users to a nearby edge site without changing the public address.` → Anycast đưa user tới edge gần mà không đổi address.
**Liên kết tiếng Hàn:** `애니캐스트 라우팅`.

## 15. proximity-based routing /prɒkˈsɪməti beɪst ˈraʊtɪŋ/
**Part of speech:** noun
**Core meaning (English):** choosing a destination according to the network or geographic closeness of the client.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn destination theo độ gần network hoặc địa lý của client.
**Grammar & collocations:** `proximity-based-routing policy` — policy; `select a nearby region` — chọn.
**Examples:** `Proximity-based routing directed the mobile client to a nearby regional endpoint.` → Routing theo độ gần đưa client tới endpoint vùng gần.
**Liên kết tiếng Hàn:** `지연 시간 기반 라우팅`.

## 16. weighted routing /ˈweɪtɪd ˈraʊtɪŋ/
**Part of speech:** noun
**Core meaning (English):** distributing traffic according to configured proportions among several destinations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia traffic theo tỷ lệ cấu hình giữa nhiều destination.
**Grammar & collocations:** `weighted-routing split` — split; `send ten percent to a canary` — gửi.
**Examples:** `Weighted routing sent a small share of requests to the candidate release.` → Routing weighted gửi phần nhỏ tới release mới.
**Liên kết tiếng Hàn:** `가중 라우팅`.

## 17. probe-based routing /proʊb beɪst ˈraʊtɪŋ/
**Part of speech:** noun
**Core meaning (English):** selecting destinations according to the results of active probes or readiness tests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn destination theo kết quả probe hoặc test readiness chủ động.
**Grammar & collocations:** `probe-based-routing decision` — decision; `exclude a failing region` — loại.
**Examples:** `Probe-based routing removed the region whose storage probe was failing.` → Routing theo probe loại region có storage probe fail.
**Liên kết tiếng Hàn:** `상태 기반 라우팅`.

## 18. failover routing /ˈfeɪloʊvər ˈraʊtɪŋ/
**Part of speech:** noun
**Core meaning (English):** redirecting traffic to a designated alternative when the preferred destination is unavailable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển traffic tới destination thay thế khi destination chính unavailable.
**Grammar & collocations:** `failover-routing target` — target; `redirect after a health failure` — chuyển.
**Examples:** `Failover routing redirected writes to the secondary region during the outage.` → Routing failover chuyển write sang region phụ.
**Liên kết tiếng Hàn:** `장애 조치 라우팅`.

## 19. traffic policy /ˈtræfɪk ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a set of rules controlling how requests are matched, transformed, prioritized, or routed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập rule điều khiển match, transform, ưu tiên hoặc route request.
**Grammar & collocations:** `traffic-policy rule` — rule; `route by hostname` — định tuyến.
**Examples:** `The traffic policy sent administrative requests through a stricter authentication path.` → Policy đưa request admin qua auth chặt hơn.
**Liên kết tiếng Hàn:** `트래픽 정책`.

## 20. service endpoint /ˈsɜːrvɪs ˈendpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a network address through which a client can reach a particular service or capability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** address network để client tới service/capability cụ thể.
**Grammar & collocations:** `service-endpoint address` — address; `publish a regional endpoint` — công bố.
**Examples:** `The catalog exposed a regional service endpoint for low-latency reads.` → Catalog mở endpoint vùng cho read latency thấp.
**Liên kết tiếng Hàn:** `서비스 엔드포인트`.

## Review in context

A **cache key** selects a **cache variant**; a **surrogate key** supports a **purge request**. **Background revalidation** refreshes in the background, while **stale-if-error** serves old content during origin failure; a **cache bypass** forces an **origin fetch**. **Connection pooling** and **keep-alive reuse** reduce setup cost, and **certificate stapling** carries status in TLS. **DNS over HTTPS** and **DNS over TLS** protect lookups. **Anycast routing** finds a nearby edge; **proximity-based routing**, **weighted routing**, **probe-based routing**, and **failover routing** apply different policies. A **traffic policy** chooses behavior, and a **service endpoint** names the destination.

**Bản dịch tiếng Việt:** **Cache key** chọn **cache variant**; **surrogate key** hỗ trợ **purge request**. **Background revalidation** làm mới nền, còn **stale-if-error** trả content cũ khi origin lỗi; **cache bypass** buộc **origin fetch**. **Connection pooling** và **keep-alive reuse** giảm setup, còn **certificate stapling** mang status trong TLS. **DNS over HTTPS** và **DNS over TLS** bảo vệ lookup. **Anycast routing** tìm edge gần; **proximity-based routing**, **weighted routing**, **probe-based routing** và **failover routing** áp policy khác nhau. **Traffic policy** chọn behavior, còn **service endpoint** nêu destination.
