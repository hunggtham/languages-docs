# C2 Vocabulary — Distributed object storage and erasure coding

This lesson follows large-scale object storage from object naming and placement through redundancy, failure isolation, repair, and background convergence.

Flow: **object storage → bucket → object key → storage class → replication factor → failure domain → rack awareness → placement policy → erasure coding → data shard → parity shard → Reed-Solomon code → reconstruction → repair traffic → rebalancing → anti-entropy → read repair → hinted handoff → object immutability → lifecycle policy**.

## 1. object storage /ˈɑbdʒɛkt ˈstɔrɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a storage model that manages data as self-contained objects identified by keys and metadata rather than as filesystem blocks or hierarchical files.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lưu data thành object có key + metadata; application không cần biết object nằm block nào hay disk nào.
**Grammar & collocations:** `distributed object storage` — object storage phân tán; `object-store API` — API object store.
**Examples:** `The backup platform used object storage because billions of immutable blobs could be addressed by key.` → Backup platform dùng object storage vì hàng tỷ blob immutable có thể được truy cập bằng key.
**Liên kết tiếng Hàn:** `객체 스토리지`.

## 2. bucket /ˈbʌkɪt/
**Part of speech:** noun
**Core meaning (English):** a logical container that groups objects under common naming, policy, access, or lifecycle rules.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** container logic chứa nhiều object; bucket giống một namespace quản lý policy hơn là folder vật lý.
**Grammar & collocations:** `storage bucket` — bucket lưu trữ; `bucket policy` — policy của bucket.
**Examples:** `The team placed audit archives in a separate bucket with stricter retention rules.` → Nhóm đặt audit archive vào bucket riêng với retention rule nghiêm ngặt hơn.
**Liên kết tiếng Hàn:** `버킷`.

## 3. object key /ˈɑbdʒɛkt kiː/
**Part of speech:** noun
**Core meaning (English):** the identifier used to locate a particular object within an object-storage namespace.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tên/địa chỉ logic của object; key có thể trông như path nhưng thường chỉ là chuỗi identifier trong namespace.
**Grammar & collocations:** `object-key prefix` — prefix key; `key namespace` — namespace key.
**Examples:** `A deterministic object key let the service retry uploads without creating duplicate objects.` → Object key xác định giúp service retry upload mà không tạo object trùng.
**Liên kết tiếng Hàn:** `객체 키`.

## 4. storage class /ˈstɔrɪdʒ klæs/
**Part of speech:** noun
**Core meaning (English):** a category of storage with defined cost, latency, durability, or access-frequency characteristics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “hạng dịch vụ” của storage; data nóng có thể dùng class nhanh, archive dùng class rẻ nhưng restore chậm.
**Grammar & collocations:** `archive storage class` — class archive; `transition storage classes` — chuyển class.
**Examples:** `Old snapshots automatically moved to a cheaper storage class after ninety days.` → Snapshot cũ tự chuyển sang storage class rẻ hơn sau 90 ngày.
**Liên kết tiếng Hàn:** `스토리지 클래스`.

## 5. replication factor /ˌrɛpləˈkeɪʃən ˈfæktər/
**Part of speech:** noun
**Core meaning (English):** the number of separate copies of a data item that a distributed storage system aims to maintain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số bản copy mục tiêu; replication factor 3 nghĩa là system cố giữ ba replica ở các vị trí phù hợp.
**Grammar & collocations:** `replication factor of three` — factor bằng 3; `increase replication` — tăng số replica.
**Examples:** `Raising the replication factor improved fault tolerance but consumed more raw capacity.` → Tăng replication factor cải thiện fault tolerance nhưng tốn raw capacity hơn.
**Liên kết tiếng Hàn:** `복제 계수`.

## 6. failure domain /ˈfeɪljər doʊˈmeɪn/
**Part of speech:** noun
**Core meaning (English):** a set of components likely to fail together because they share a common dependency such as a disk enclosure, rack, power feed, or region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm resource có thể “chết chung”; replica phải được tách qua nhiều failure domain để một sự cố không xóa hết copy.
**Grammar & collocations:** `independent failure domain` — domain lỗi độc lập; `failure-domain boundary` — ranh giới domain.
**Examples:** `The placement algorithm avoided storing all replicas in the same failure domain.` → Placement algorithm tránh đặt mọi replica trong cùng failure domain.
**Liên kết tiếng Hàn:** `장애 도메인`.

## 7. rack awareness /ræk əˈwɛrnəs/
**Part of speech:** noun
**Core meaning (English):** the ability of a distributed system to consider physical rack boundaries when placing redundant data or workloads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** system “biết” server nào cùng rack để không đặt tất cả copy sau cùng một top-of-rack switch hoặc nguồn điện.
**Grammar & collocations:** `rack-aware placement` — placement biết rack; `rack-level failure` — lỗi cấp rack.
**Examples:** `Rack awareness kept parity fragments on machines connected through different top-of-rack switches.` → Rack awareness giữ parity fragment trên machine thuộc các rack khác nhau.
**Liên kết tiếng Hàn:** `랙 인식`.

## 8. placement policy /ˈpleɪsmənt ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** the rules a storage system uses to decide where replicas or coded fragments should reside.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ luật chọn vị trí data; policy có thể cân nhắc region, rack, capacity và performance.
**Grammar & collocations:** `data-placement policy` — policy placement data; `policy constraint` — constraint của policy.
**Examples:** `The placement policy required every object to span at least three independent racks.` → Placement policy yêu cầu mỗi object trải qua ít nhất ba rack độc lập.
**Liên kết tiếng Hàn:** `배치 정책`.

## 9. erasure coding /ɪˈreɪʒər ˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** a redundancy technique that transforms data into multiple fragments so the original data can be recovered even when some fragments are unavailable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia data thành nhiều fragment data + parity; mất một số fragment vẫn reconstruct được mà tốn capacity ít hơn full replication.
**Grammar & collocations:** `erasure-coded pool` — pool dùng erasure coding; `coding overhead` — overhead coding.
**Examples:** `Erasure coding reduced storage overhead while still tolerating several simultaneous disk failures.` → Erasure coding giảm storage overhead mà vẫn chịu được nhiều disk failure đồng thời.
**Liên kết tiếng Hàn:** `소거 코딩`, `이레이저 코딩`.

## 10. data shard /ˈdeɪtə ʃɑrd/
**Part of speech:** noun
**Core meaning (English):** one of the original-data fragments produced when an object is divided for erasure coding.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mảnh chứa dữ liệu thật trước khi thêm parity shard.
**Grammar & collocations:** `data-shard count` — số data shard; `missing data shard` — shard data bị mất.
**Examples:** `The encoder split the object into six data shards before calculating parity.` → Encoder chia object thành sáu data shard trước khi tính parity.
**Liên kết tiếng Hàn:** `데이터 샤드`.

## 11. parity shard /ˈpærəti ʃɑrd/
**Part of speech:** noun
**Core meaning (English):** a redundancy fragment computed from data shards and used to reconstruct missing information after failures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mảnh parity không phải copy nguyên data nhưng chứa thông tin toán học đủ để rebuild shard mất.
**Grammar & collocations:** `parity-shard count` — số parity shard; `recompute parity` — tính lại parity.
**Examples:** `Two parity shards allowed the stripe to survive the loss of any two fragments.` → Hai parity shard cho phép stripe chịu mất bất kỳ hai fragment nào.
**Liên kết tiếng Hàn:** `패리티 샤드`.

## 12. Reed-Solomon code /riːd ˈsɑləmən koʊd/
**Part of speech:** noun
**Core meaning (English):** an error-correcting code commonly used to generate parity fragments that can recover missing symbols or storage shards.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** family code toán học phổ biến cho erasure coding; nó tạo parity để recover nhiều fragment mất trong giới hạn cấu hình.
**Grammar & collocations:** `Reed-Solomon encoding` — encode Reed-Solomon; `RS code` — cách gọi ngắn.
**Examples:** `The system used a Reed-Solomon code to reconstruct two unavailable shards from the remaining fragments.` → System dùng Reed-Solomon code để reconstruct hai shard unavailable từ các fragment còn lại.
**Liên kết tiếng Hàn:** `리드-솔로몬 코드`.

## 13. reconstruction /ˌriːkənˈstrʌkʃən/
**Part of speech:** noun
**Core meaning (English):** the process of rebuilding missing data or coded fragments from surviving fragments and redundancy information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dựng lại shard mất bằng những shard còn sống; đây là “repair toán học” thay vì copy từ một replica hoàn chỉnh.
**Grammar & collocations:** `shard reconstruction` — reconstruct shard; `reconstruction bandwidth` — bandwidth rebuild.
**Examples:** `Reconstruction began automatically after the controller marked one storage node as failed.` → Reconstruction tự bắt đầu sau khi controller đánh dấu một storage node bị fail.
**Liên kết tiếng Hàn:** `재구성`, `복원`.

## 14. repair traffic /rɪˈpɛr ˈtræfɪk/
**Part of speech:** noun
**Core meaning (English):** network traffic generated when a distributed storage system copies or reconstructs data to restore redundancy after failures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** traffic do system tự chữa lành; nhiều failure cùng lúc có thể khiến repair traffic chiếm phần lớn network bandwidth.
**Grammar & collocations:** `throttle repair traffic` — giới hạn repair traffic; `repair bandwidth` — bandwidth repair.
**Examples:** `The cluster throttled repair traffic so foreground reads would retain predictable latency.` → Cluster throttle repair traffic để foreground read giữ latency ổn định.
**Liên kết tiếng Hàn:** `복구 트래픽`.

## 15. rebalancing /ˌriːˈbælənsɪŋ/
**Part of speech:** noun
**Core meaning (English):** moving stored data among nodes to restore a desired distribution after capacity, membership, or load changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dàn lại data khi thêm/bớt node hoặc capacity lệch; mục tiêu là distribution cân bằng mà vẫn giữ availability.
**Grammar & collocations:** `background rebalancing` — rebalance nền; `rebalance the cluster` — cân lại cluster.
**Examples:** `Adding four nodes triggered background rebalancing across the object-storage pool.` → Thêm bốn node kích hoạt rebalancing nền trên object-storage pool.
**Liên kết tiếng Hàn:** `재균형화`, `리밸런싱`.

## 16. anti-entropy /ˌænti ˈɛntrəpi/
**Part of speech:** noun
**Core meaning (English):** background synchronization that compares replicas or partitions and repairs differences so distributed copies converge over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế “chống lệch dần”; node định kỳ so sánh state rồi sửa difference mà foreground request chưa phát hiện.
**Grammar & collocations:** `anti-entropy process` — process đồng bộ nền; `anti-entropy repair` — repair anti-entropy.
**Examples:** `Anti-entropy eventually repaired replica differences that accumulated during the network partition.` → Anti-entropy cuối cùng sửa các difference giữa replica tích tụ trong network partition.
**Liên kết tiếng Hàn:** `안티엔트로피`, `백그라운드 동기화`.

## 17. read repair /riːd rɪˈpɛr/
**Part of speech:** noun
**Core meaning (English):** a mechanism that fixes stale or inconsistent replicas when a read operation discovers that copies disagree.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đọc data đồng thời phát hiện copy cũ rồi sửa ngay trong hoặc sau read path.
**Grammar & collocations:** `trigger read repair` — kích hoạt repair khi đọc; `stale replica` — replica cũ.
**Examples:** `A read repair updated the stale replica after the coordinator observed conflicting versions.` → Read repair cập nhật stale replica sau khi coordinator thấy các version xung đột.
**Liên kết tiếng Hàn:** `읽기 복구`.

## 18. hinted handoff /ˈhɪntɪd ˈhændˌɔf/
**Part of speech:** noun
**Core meaning (English):** a temporary replication technique in which one node stores a write on behalf of an unavailable destination and forwards it later when that destination recovers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** node A tạm “giữ hộ” update cho node B đang down, rồi handoff lại khi B trở về.
**Grammar & collocations:** `store a hint` — lưu hint; `handoff backlog` — backlog handoff.
**Examples:** `Hinted handoff preserved write availability while one replica was temporarily offline.` → Hinted handoff giữ write availability khi một replica tạm offline.
**Liên kết tiếng Hàn:** `힌티드 핸드오프`.

## 19. object immutability /ˈɑbdʒɛkt ˌɪmjəˈtəbɪləti/
**Part of speech:** noun
**Core meaning (English):** a storage property or policy that prevents an object from being modified or deleted for a defined period or permanently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** object đã ghi thì không sửa/xóa được theo rule; hữu ích cho backup chống ransomware và compliance archive.
**Grammar & collocations:** `immutable object` — object immutable; `immutability period` — thời gian khóa.
**Examples:** `Object immutability prevented compromised credentials from deleting recent backups.` → Object immutability ngăn credential bị compromise xóa backup gần đây.
**Liên kết tiếng Hàn:** `객체 불변성`.

## 20. lifecycle policy /ˈlaɪfˌsaɪkəl ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** automated rules that transition, archive, expire, or delete objects according to age, tags, versions, or other conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** luật quản lý vòng đời object; system tự chuyển class hoặc xóa data khi đạt condition.
**Grammar & collocations:** `object-lifecycle policy` — policy vòng đời; `expiration rule` — rule hết hạn.
**Examples:** `The lifecycle policy archived old versions and deleted incomplete multipart uploads after one week.` → Lifecycle policy archive version cũ và xóa multipart upload chưa hoàn tất sau một tuần.
**Liên kết tiếng Hàn:** `수명 주기 정책`.

## Review in context

A large **object storage** service organizes data into a **bucket**, where every item has an **object key** and may belong to a different **storage class**. Reliability can come from a **replication factor** or from **erasure coding**, but either design must respect each **failure domain**. **Rack awareness** feeds a **placement policy** that spreads fragments safely. With coding, an object is divided into each **data shard**, supplemented by a **parity shard**, often generated with a **Reed-Solomon code**. When hardware fails, **reconstruction** creates replacement fragments, although excessive **repair traffic** can interfere with user requests. Adding or removing capacity triggers **rebalancing**. Meanwhile, **anti-entropy**, **read repair**, and **hinted handoff** help replicas converge after temporary failures. For protected archives, **object immutability** prevents destructive changes, while a **lifecycle policy** automatically moves or expires older content.

**Bản dịch tiếng Việt:** Một service **object storage** lớn tổ chức data trong **bucket**, nơi mỗi item có **object key** và có thể thuộc **storage class** khác nhau. Reliability có thể đến từ **replication factor** hoặc **erasure coding**, nhưng cả hai thiết kế đều phải tôn trọng từng **failure domain**. **Rack awareness** cung cấp thông tin cho **placement policy** để phân tán fragment an toàn. Với coding, object được chia thành các **data shard**, bổ sung bằng **parity shard**, thường được tạo bằng **Reed-Solomon code**. Khi hardware fail, **reconstruction** tạo fragment thay thế, dù **repair traffic** quá lớn có thể ảnh hưởng request người dùng. Thêm hoặc bớt capacity sẽ kích hoạt **rebalancing**. Đồng thời, **anti-entropy**, **read repair** và **hinted handoff** giúp replica hội tụ lại sau failure tạm thời. Với archive được bảo vệ, **object immutability** ngăn thay đổi phá hoại, còn **lifecycle policy** tự động chuyển hoặc expire content cũ.