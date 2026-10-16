# C2 Vocabulary — Service discovery and membership

This lesson follows a service from registration and endpoint resolution through locality, membership convergence, and peer liveness.

Flow: **service registry → health lease → endpoint catalog → discovery TTL → resolver cache → stale endpoint → topology hint → locality preference → zone awareness → ring membership → membership probe → suspicion level → gossip round → convergence delay → quorum membership → bootstrap peer → seed list → endpoint watcher → service alias → discovery namespace**.

## 1. service registry /ˈsɜːrvɪs ˈredʒəstri/
**Part of speech:** noun
**Core meaning (English):** a directory recording service identities, endpoints, health, and metadata for discovery.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** directory ghi identity, endpoint, health và metadata để tìm service.
**Grammar & collocations:** `service-registry entry` — entry; `publish an endpoint` — công bố.
**Examples:** `The service registry published the new payment endpoint after its health check passed.` → Registry công bố endpoint payment sau health check.
**Liên kết tiếng Hàn:** `서비스 레지스트리`.

## 2. health lease /helθ liːs/
**Part of speech:** noun
**Core meaning (English):** a time-limited registration that remains valid while a service continues proving its health.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đăng ký có hạn còn hiệu lực khi service tiếp tục chứng minh health.
**Grammar & collocations:** `health-lease renewal` — gia hạn; `expire an unresponsive endpoint` — hết hạn.
**Examples:** `The health lease expired when the instance stopped sending heartbeats.` → Lease hết hạn khi instance ngừng heartbeat.
**Liên kết tiếng Hàn:** `상태 임대`.

## 3. endpoint catalog /ˈendpɔɪnt ˈkætəlɒɡ/
**Part of speech:** noun
**Core meaning (English):** a structured collection of addresses, capabilities, and status information for reachable service endpoints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập có cấu trúc về address, capability và status của endpoint.
**Grammar & collocations:** `endpoint-catalog entry` — entry; `select a reachable address` — chọn.
**Examples:** `The endpoint catalog listed separate addresses for read and write traffic.` → Catalog liệt kê address riêng cho read/write.
**Liên kết tiếng Hàn:** `엔드포인트 카탈로그`.

## 4. discovery TTL /dɪˈskʌvəri ˌtiː tiː ˈel/
**Part of speech:** noun
**Core meaning (English):** the duration for which a discovered service answer may be treated as current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian câu trả lời discovery được coi là còn mới.
**Grammar & collocations:** `discovery-TTL expiry` — hết hạn; `refresh an endpoint answer` — refresh.
**Examples:** `The discovery TTL was short because the service changed capacity frequently.` → TTL ngắn vì service đổi capacity thường.
**Liên kết tiếng Hàn:** `검색 TTL`.

## 5. resolver cache /rɪˈzɒlvər kæʃ/
**Part of speech:** noun
**Core meaning (English):** local storage of recent discovery answers used to avoid querying the registry for every request.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** storage local của answer discovery để không hỏi registry mỗi request.
**Grammar & collocations:** `resolver-cache entry` — entry; `invalidate a cached address` — vô hiệu.
**Examples:** `The resolver cache reduced registry load but had to honor the discovery TTL.` → Cache giảm tải registry nhưng phải tôn trọng TTL.
**Liên kết tiếng Hàn:** `리졸버 캐시`.

## 6. stale endpoint /steɪl ˈendpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** an address that was once valid but no longer represents a healthy or reachable service instance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** address từng đúng nhưng không còn đại diện instance khỏe/reachable.
**Grammar & collocations:** `stale-endpoint retry` — retry; `remove a dead address` — bỏ.
**Examples:** `A stale endpoint caused the client to retry before refreshing its discovery answer.` → Endpoint cũ khiến client retry trước refresh.
**Liên kết tiếng Hàn:** `오래된 엔드포인트`.

## 7. topology hint /təˈpɒlədʒi hɪnt/
**Part of speech:** noun
**Core meaning (English):** metadata suggesting where an endpoint sits in a network or failure topology.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata gợi endpoint nằm ở đâu trong topology network/failure.
**Grammar & collocations:** `topology-hint field` — field; `prefer a nearby zone` — ưu tiên.
**Examples:** `The topology hint encouraged clients to choose an endpoint in their own region.` → Hint khuyến khích chọn endpoint cùng vùng.
**Liên kết tiếng Hàn:** `토폴로지 힌트`.

## 8. locality preference /loʊˈkæləti ˈprefərəns/
**Part of speech:** noun
**Core meaning (English):** a routing preference for endpoints near the caller in network, geography, or data placement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ưu tiên route endpoint gần caller về network, geography hoặc data.
**Grammar & collocations:** `locality-preference rule` — rule; `minimize cross-region traffic` — giảm.
**Examples:** `Locality preference kept analytics requests near the data they scanned.` → Preference giữ request gần data.
**Liên kết tiếng Hàn:** `지역성 선호`.

## 9. zone awareness /zoʊn əˈwernəs/
**Part of speech:** noun
**Core meaning (English):** the ability to account for failure or cost differences among availability zones when selecting endpoints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng tính khác biệt lỗi/cost giữa availability zone khi chọn endpoint.
**Grammar & collocations:** `zone-awareness policy` — policy; `avoid a cross-zone hop` — tránh.
**Examples:** `Zone awareness directed reads to a healthy instance in the same availability zone.` → Awareness chọn instance cùng zone.
**Liên kết tiếng Hàn:** `영역 인식`.

## 10. ring membership /rɪŋ ˈmembərʃɪp/
**Part of speech:** noun
**Core meaning (English):** the set of nodes currently assigned positions in a consistent-hashing or ownership ring.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập node có vị trí trong ring hash/ownership.
**Grammar & collocations:** `ring-membership change` — thay đổi; `assign a token range` — gán.
**Examples:** `Ring membership changed when a new storage node joined the cluster.` → Membership đổi khi node storage mới vào.
**Liên kết tiếng Hàn:** `링 멤버십`.

## 11. membership probe /ˈmembərʃɪp proʊb/
**Part of speech:** noun
**Core meaning (English):** a message or check used to determine whether a node still belongs to an active cluster.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** message/check xác định node còn thuộc cluster active không.
**Grammar & collocations:** `membership-probe interval` — interval; `challenge an unresponsive peer` — thăm dò.
**Examples:** `The membership probe marked the silent node as suspect after several missed responses.` → Probe đánh dấu node im lặng là suspect.
**Liên kết tiếng Hàn:** `멤버십 프로브`.

## 12. suspicion level /səˈspɪʃən ˈlevəl/
**Part of speech:** noun
**Core meaning (English):** a graded estimate of how likely a node is to have failed when evidence is incomplete.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức ước tính node có thể fail khi evidence chưa đủ.
**Grammar & collocations:** `suspicion-level threshold` — ngưỡng; `escalate a suspected failure` — nâng.
**Examples:** `The suspicion level rose as the node missed probes from multiple peers.` → Level tăng khi node bỏ probe nhiều peer.
**Liên kết tiếng Hàn:** `의심 수준`.

## 13. gossip round /ˈɡɒsɪp raʊnd/
**Part of speech:** noun
**Core meaning (English):** one exchange cycle in which nodes share membership or state information with selected peers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một vòng node chia sẻ membership/state với peer được chọn.
**Grammar & collocations:** `gossip-round interval` — interval; `spread a membership update` — lan.
**Examples:** `The gossip round spread the new node's address across the cluster.` → Vòng gossip lan address node mới.
**Liên kết tiếng Hàn:** `가십 라운드`.

## 14. convergence delay /kənˈvɜːrdʒəns dɪˈleɪ/
**Part of speech:** noun
**Core meaning (English):** the time between a membership or topology change and all relevant nodes adopting a consistent view.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian từ change đến khi node cùng có view nhất quán.
**Grammar & collocations:** `convergence-delay estimate` — estimate; `wait for a cluster view to settle` — chờ.
**Examples:** `Convergence delay briefly sent requests to an endpoint that had already been removed.` → Delay tạm gửi request tới endpoint đã bỏ.
**Liên kết tiếng Hàn:** `수렴 지연`.

## 15. quorum membership /ˈkwɔːrəm ˈmembərʃɪp/
**Part of speech:** noun
**Core meaning (English):** the minimum participating set required for a cluster to make authoritative membership decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập participant tối thiểu để cluster quyết định membership authoritative.
**Grammar & collocations:** `quorum-membership vote` — vote; `reject a minority view` — từ chối.
**Examples:** `Quorum membership prevented an isolated minority from removing healthy nodes.` → Quorum ngăn minority cô lập xóa node khỏe.
**Liên kết tiếng Hàn:** `쿼럼 멤버십`.

## 16. bootstrap peer /ˈbuːtstræp pɪər/
**Part of speech:** noun
**Core meaning (English):** a known initial peer through which a new node discovers the rest of a cluster.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** peer ban đầu được biết để node mới tìm cluster.
**Grammar & collocations:** `bootstrap-peer address` — address; `join an existing cluster` — tham gia.
**Examples:** `The new node contacted a bootstrap peer before requesting the complete membership view.` → Node mới gọi peer bootstrap trước.
**Liên kết tiếng Hàn:** `부트스트랩 피어`.

## 17. seed list /siːd lɪst/
**Part of speech:** noun
**Core meaning (English):** a configured list of initial addresses used to start discovery or membership synchronization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** danh sách address ban đầu để khởi động discovery/membership sync.
**Grammar & collocations:** `seed-list rotation` — xoay; `try an alternate seed` — thử.
**Examples:** `The seed list contained addresses in three zones so a new node could join after one zone failed.` → List có address ba zone.
**Liên kết tiếng Hàn:** `시드 목록`.

## 18. endpoint watcher /ˈendpɔɪnt ˈwɒtʃər/
**Part of speech:** noun
**Core meaning (English):** a component that observes endpoint changes and notifies clients or routing logic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component theo dõi endpoint đổi và báo client/routing.
**Grammar & collocations:** `endpoint-watcher callback` — callback; `react to a removal event` — phản ứng.
**Examples:** `The endpoint watcher refreshed local routes when the registry removed a failed instance.` → Watcher refresh route khi registry bỏ instance.
**Liên kết tiếng Hàn:** `엔드포인트 감시자`.

## 19. service alias /ˈsɜːrvɪs ˈeɪliəs/
**Part of speech:** noun
**Core meaning (English):** a stable logical name that points to one or more changing service identities or versions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tên logic ổn định trỏ tới identity/version service thay đổi.
**Grammar & collocations:** `service-alias mapping` — mapping; `redirect a legacy name` — chuyển.
**Examples:** `The service alias let clients keep the same name while the implementation moved regions.` → Alias giữ tên client khi implementation đổi vùng.
**Liên kết tiếng Hàn:** `서비스 별칭`.

## 20. discovery namespace /dɪˈskʌvəri ˈneɪmspeɪs/
**Part of speech:** noun
**Core meaning (English):** a scoped naming domain in which service identities and endpoint names are resolved.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** miền tên có scope để resolve identity và endpoint service.
**Grammar & collocations:** `discovery-namespace boundary` — boundary; `resolve an internal name` — resolve.
**Examples:** `The discovery namespace kept test services separate from production services with similar names.` → Namespace tách service test khỏi production.
**Liên kết tiếng Hàn:** `검색 네임스페이스`.

## Review in context

A **service registry** records endpoints, and a **health lease** expires when a service stops proving health. An **endpoint catalog**, **discovery TTL**, and **resolver cache** reduce lookup cost, but a **stale endpoint** must be removed. A **topology hint**, **locality preference**, and **zone awareness** choose nearby capacity. **Ring membership** changes through a **membership probe** and **suspicion level**; a **gossip round** spreads state, while **convergence delay** explains temporary disagreement. **Quorum membership** makes decisions authoritative, a **bootstrap peer** and **seed list** start discovery, an **endpoint watcher** reacts to change, a **service alias** stabilizes names, and a **discovery namespace** scopes them.

**Bản dịch tiếng Việt:** **Service registry** ghi endpoint, còn **health lease** hết hạn khi service ngừng chứng minh health. **Endpoint catalog**, **discovery TTL** và **resolver cache** giảm cost lookup, nhưng **stale endpoint** phải bị bỏ. **Topology hint**, **locality preference** và **zone awareness** chọn capacity gần. **Ring membership** đổi qua **membership probe** và **suspicion level**; **gossip round** lan state, còn **convergence delay** giải thích lệch tạm. **Quorum membership** làm decision authoritative, **bootstrap peer** và **seed list** khởi động discovery, **endpoint watcher** phản ứng change, **service alias** giữ tên ổn định, còn **discovery namespace** giới hạn scope.
