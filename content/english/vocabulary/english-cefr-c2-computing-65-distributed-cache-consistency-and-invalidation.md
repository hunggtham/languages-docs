# C2 Vocabulary — Distributed cache consistency and invalidation

This lesson follows cached data from admission and freshness through invalidation, hot-key protection, repair, and cross-region behavior.

Flow: **cache invalidation storm → negative cache entry → cache coherence window → stale-while-revalidate → write-through barrier → read-repair path → distributed cache namespace → cache stampede guard → hot-key replication → admission cache policy → eviction hysteresis → cache consistency token → invalidation fanout → origin shield → cache warming plan → cache resurrection → versioned cache key → cache freshness budget → cross-region cache lag → cache failure mode**.

## 1. cache invalidation storm /kæʃ ɪnˌvæləˈdeɪʃən stɔrm/
**Part of speech:** noun
**Core meaning (English):** a surge of coordinated invalidations that causes many cached entries to expire and overload the origin.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều cache hết hiệu lực cùng lúc làm origin quá tải.
**Grammar & collocations:** `cache-invalidation-storm detector` — detector; `stagger expiry events` — giãn.
**Examples:** `The cache invalidation storm followed a bulk permission update across every tenant.` → Storm xảy ra sau cập nhật quyền hàng loạt.
**Liên kết tiếng Hàn:** `캐시 무효화 폭풍`.

## 2. negative cache entry /ˈnɛɡətɪv kæʃ ˈɛntri/
**Part of speech:** noun
**Core meaning (English):** a cached record that a requested object or lookup result does not exist.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cache cả kết quả “không tồn tại”.
**Grammar & collocations:** `negative-cache-entry TTL` — TTL; `avoid repeated missing-key lookup` — tránh.
**Examples:** `The negative cache entry prevented a typo in the URL from reaching the database on every request.` → Entry âm ngăn query lặp.
**Liên kết tiếng Hàn:** `부정 캐시 항목`.

## 3. cache coherence window /kæʃ koʊˈhɪrəns ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the interval during which different cache locations may temporarily hold different values for the same object.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian các cache giữ value khác nhau.
**Grammar & collocations:** `cache-coherence-window guarantee` — guarantee; `bound stale visibility` — giới hạn.
**Examples:** `The cache coherence window was acceptable for product descriptions but not for account balances.` → Window chấp nhận cho mô tả, không cho số dư.
**Liên kết tiếng Hàn:** `캐시 일관성 창`.

## 4. stale-while-revalidate /steɪl waɪl riːˈvæləˌdeɪt/
**Part of speech:** noun
**Core meaning (English):** serving an expired value briefly while a background request fetches a fresh value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trả value cũ trong lúc nền lấy value mới.
**Grammar & collocations:** `stale-while-revalidate policy` — policy; `refresh asynchronously` — refresh nền.
**Examples:** `Stale-while-revalidate kept the catalog responsive during a slow origin refresh.` → Policy giữ catalog responsive.
**Liên kết tiếng Hàn:** `오래된 데이터 제공 후 재검증`.

## 5. write-through barrier /raɪt θruː ˈbæriər/
**Part of speech:** noun
**Core meaning (English):** a write step that ensures the authoritative store is updated before a cache write is considered visible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi origin trước khi coi cache đã visible.
**Grammar & collocations:** `write-through-barrier ordering` — ordering; `commit the origin write` — commit.
**Examples:** `The write-through barrier prevented a newly cached value from surviving a failed database transaction.` → Barrier ngăn cache sống sau transaction fail.
**Liên kết tiếng Hàn:** `쓰기 통과 장벽`.

## 6. read-repair path /riːd rɪˈpɛr pæθ/
**Part of speech:** noun
**Core meaning (English):** a read operation that detects stale or divergent replicas and repairs them while returning data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đọc phát hiện lệch và sửa replica.
**Grammar & collocations:** `read-repair-path latency` — latency; `heal a stale replica` — sửa.
**Examples:** `The read-repair path updated the regional cache after discovering an older version.` → Path sửa cache vùng sau phát hiện version cũ.
**Liên kết tiếng Hàn:** `읽기 복구 경로`.

## 7. distributed cache namespace /dɪˈstrɪbjətɪd kæʃ ˈneɪmˌspeɪs/
**Part of speech:** noun
**Core meaning (English):** the shared key and ownership space through which multiple cache nodes address and manage objects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không gian key chung của nhiều cache node.
**Grammar & collocations:** `distributed-cache-namespace partition` — partition; `route a key to an owner` — định tuyến.
**Examples:** `The distributed cache namespace separated tenant keys before hashing them to nodes.` → Namespace tách key tenant trước hash.
**Liên kết tiếng Hàn:** `분산 캐시 네임스페이스`.

## 8. cache stampede guard /kæʃ stæmˈpiːd ɡɑrd/
**Part of speech:** noun
**Core meaning (English):** a mechanism that coalesces or limits concurrent refreshes for an item whose cached value has expired.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** guard gom request refresh để tránh nhiều lượt cùng đánh origin.
**Grammar & collocations:** `cache-stampede-guard lock` — lock; `coalesce refresh requests` — gom.
**Examples:** `The cache stampede guard allowed one request to refresh the model while others waited.` → Guard cho một request refresh.
**Liên kết tiếng Hàn:** `캐시 스탬피드 방지`.

## 9. hot-key replication /hɑt kiː ˌrɛpləˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** copying a frequently requested cache object to multiple nodes to spread read load.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhân bản key nóng ra nhiều node.
**Grammar & collocations:** `hot-key-replication factor` — factor; `spread read pressure` — dàn.
**Examples:** `Hot-key replication prevented the campaign banner from overloading one cache owner.` → Replication dàn tải banner.
**Liên kết tiếng Hàn:** `핫 키 복제`.

## 10. admission cache policy /ədˈmɪʃən kæʃ ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** rules deciding which fetched objects deserve space in the cache and which should bypass it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy quyết định object nào được đưa vào cache.
**Grammar & collocations:** `admission-cache-policy threshold` — threshold; `reject a one-hit object` — từ chối.
**Examples:** `The admission cache policy rejected huge objects requested only once.` → Policy từ chối object lớn chỉ dùng một lần.
**Liên kết tiếng Hàn:** `캐시 입장 정책`.

## 11. eviction hysteresis /ɪˈvɪkʃən hɪstəˈriːsɪs/
**Part of speech:** noun
**Core meaning (English):** a gap between thresholds for starting and stopping eviction so cache occupancy does not oscillate rapidly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngưỡng bật/tắt eviction khác nhau để ổn định.
**Grammar & collocations:** `eviction-hysteresis band` — band; `avoid churn near capacity` — tránh.
**Examples:** `Eviction hysteresis reduced churn when the cache hovered near its memory limit.` → Hysteresis giảm churn.
**Liên kết tiếng Hàn:** `축출 히스테리시스`.

## 12. cache consistency token /kæʃ kənˈsɪstənsi ˈtoʊkən/
**Part of speech:** noun
**Core meaning (English):** a version or marker carried with a read or write to detect whether cached data is current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** token version kiểm tra cache có mới không.
**Grammar & collocations:** `cache-consistency-token comparison` — comparison; `reject an older value` — từ chối.
**Examples:** `The cache consistency token stopped a delayed write from overwriting a newer profile.` → Token ngăn write trễ ghi đè profile mới.
**Liên kết tiếng Hàn:** `캐시 일관성 토큰`.

## 13. invalidation fanout /ɪnˌvæləˈdeɪʃən ˈfænˌaʊt/
**Part of speech:** noun
**Core meaning (English):** the number and distribution of cache nodes or consumers receiving one invalidation event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ tỏa của một event invalidation.
**Grammar & collocations:** `invalidation-fanout limit` — limit; `broadcast a version change` — phát.
**Examples:** `In­validation fanout became expensive when one product update touched millions of keys.` → Fanout đắt khi update hàng triệu key.
**Liên kết tiếng Hàn:** `무효화 팬아웃`.

## 14. origin shield /ˈɔrədʒɪn ʃiːld/
**Part of speech:** noun
**Core meaning (English):** an intermediate cache layer that absorbs misses from edge caches before requests reach the authoritative origin.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lớp cache trung gian bảo vệ origin.
**Grammar & collocations:** `origin-shield layer` — layer; `collapse duplicate misses` — gom.
**Examples:** `The origin shield reduced repeated misses from geographically distant edge nodes.` → Shield giảm miss lặp từ edge.
**Liên kết tiếng Hàn:** `오리진 쉴드`.

## 15. cache warming plan /kæʃ ˈwɔrmɪŋ plæn/
**Part of speech:** noun
**Core meaning (English):** a procedure for populating a cache with likely-needed objects before traffic or a migration arrives.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kế hoạch nạp cache trước khi traffic tới.
**Grammar & collocations:** `cache-warming-plan schedule` — schedule; `preload high-value objects` — nạp trước.
**Examples:** `The cache warming plan loaded the most-used models before the region reopened.` → Plan nạp model trước khi mở region.
**Liên kết tiếng Hàn:** `캐시 워밍 계획`.

## 16. cache resurrection /kæʃ ˌrɛzəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** reappearance of an object that should have been deleted or invalidated because an old replica or delayed write was restored.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value cũ bị xóa lại xuất hiện.
**Grammar & collocations:** `cache-resurrection incident` — incident; `prevent stale replay` — ngăn.
**Examples:** `Cache resurrection restored a revoked permission after a partition healed.` → Resurrection khôi phục quyền đã revoke.
**Liên kết tiếng Hàn:** `캐시 부활`.

## 17. versioned cache key /ˈvɝʒənd kæʃ kiː/
**Part of speech:** noun
**Core meaning (English):** a cache key that includes a data or schema version so incompatible values do not collide.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** key chứa version để tránh value không tương thích.
**Grammar & collocations:** `versioned-cache-key format` — format; `bypass an old representation` — bỏ.
**Examples:** `The versioned cache key isolated the new pricing schema from old mobile clients.` → Key version tách schema giá mới.
**Liên kết tiếng Hàn:** `버전 지정 캐시 키`.

## 18. cache freshness budget /kæʃ ˈfrɛʃnəs ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the maximum age or staleness permitted for a cached value under a particular use case.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tuổi tối đa cache được phép cũ.
**Grammar & collocations:** `cache-freshness-budget policy` — policy; `spend staleness safely` — dùng.
**Examples:** `The cache freshness budget was short for exchange rates and long for help text.` → Budget ngắn cho tỷ giá, dài cho help.
**Liên kết tiếng Hàn:** `캐시 신선도 예산`.

## 19. cross-region cache lag /krɔs ˈriːdʒən kæʃ læɡ/
**Part of speech:** noun
**Core meaning (English):** the delay before a cache update or invalidation becomes visible across geographic regions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ trễ cập nhật cache giữa các vùng.
**Grammar & collocations:** `cross-region-cache-lag histogram` — histogram; `bound regional staleness` — giới hạn.
**Examples:** `Cross-region cache lag delayed the new fraud rule in one market.` → Lag làm rule fraud mới tới chậm.
**Liên kết tiếng Hàn:** `지역 간 캐시 지연`.

## 20. cache failure mode /kæʃ ˈfeɪljər moʊd/
**Part of speech:** noun
**Core meaning (English):** a defined way in which a cache can fail, degrade, return stale data, or increase origin load.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểu lỗi cache và hậu quả của nó.
**Grammar & collocations:** `cache-failure-mode catalog` — catalog; `choose fail-open or fail-closed behavior` — chọn.
**Examples:** `The cache failure mode for identity data was fail-closed, while public content could fail-open.` → Identity fail-closed, content public fail-open.
**Liên kết tiếng Hàn:** `캐시 고장 모드`.

## Review in context

A **cache invalidation storm** can follow a **negative cache entry** and a **cache coherence window**; **stale-while-revalidate** and a **write-through barrier** shape visibility. A **read-repair path**, **distributed cache namespace**, and **cache stampede guard** support consistency, while **hot-key replication**, an **admission cache policy**, and **eviction hysteresis** manage load. A **cache consistency token**, **invalidation fanout**, and **origin shield** control propagation. A **cache warming plan**, **cache resurrection**, **versioned cache key**, **cache freshness budget**, **cross-region cache lag**, and **cache failure mode** complete operations.

**Bản dịch tiếng Việt:** **Cache invalidation storm** có thể xảy ra sau **negative cache entry** và **cache coherence window**; **stale-while-revalidate** và **write-through barrier** định hình visibility. **Read-repair path**, **distributed cache namespace** và **cache stampede guard** hỗ trợ consistency, còn **hot-key replication**, **admission cache policy** và **eviction hysteresis** quản lý tải. **Cache consistency token**, **invalidation fanout** và **origin shield** kiểm soát propagation. **Cache warming plan**, **cache resurrection**, **versioned cache key**, **cache freshness budget**, **cross-region cache lag** và **cache failure mode** hoàn tất vận hành.
