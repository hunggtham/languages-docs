# C2 Vocabulary — Distributed storage repair and durability

This lesson follows a distributed object from placement and redundancy through degraded reads, repair, scrubbing, and durability evidence.

Flow: **parity fragment → repair locality → degraded read → reconstruction threshold → durability target → placement group → replica lag → shard handoff → rebalance plan → anti-entropy scan → quorum read → consistency repair → scrubbing pass → bit rot → checksum tree → fragment inventory → rebuild priority → failure correlation → replica set → storage epoch**.

## 1. parity fragment /ˈpærəti ˈfræɡmənt/
**Part of speech:** noun
**Core meaning (English):** a redundant fragment computed from data fragments so missing content can be reconstructed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fragment dư tính từ data fragment để dựng lại phần bị mất.
**Grammar & collocations:** `parity-fragment equation` — phương trình; `recover a missing shard` — phục hồi.
**Examples:** `The parity fragment allowed the service to rebuild a lost data shard without a backup copy.` → Parity giúp dựng shard mất mà không cần backup.
**Liên kết tiếng Hàn:** `패리티 조각`.

## 2. repair locality /rɪˈper loʊˈkæləti/
**Part of speech:** noun
**Core meaning (English):** the degree to which a repair can use nearby fragments or nodes instead of moving data across the whole system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức repair dùng fragment/node gần thay vì chuyển data toàn system.
**Grammar & collocations:** `repair-locality optimization` — tối ưu; `read from a neighboring rack` — đọc.
**Examples:** `Repair locality reduced network traffic by reconstructing the object within one rack.` → Locality giảm traffic bằng repair trong một rack.
**Liên kết tiếng Hàn:** `복구 지역성`.

## 3. degraded read /dɪˈɡreɪdɪd riːd/
**Part of speech:** noun
**Core meaning (English):** a read served while one or more redundant copies or fragments are unavailable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lần đọc khi một hoặc nhiều copy/fragment dư không khả dụng.
**Grammar & collocations:** `degraded-read latency` — độ trễ; `serve from surviving fragments` — phục vụ.
**Examples:** `The degraded read succeeded but took longer because two fragments had to be reconstructed.` → Read thành công nhưng chậm vì dựng hai fragment.
**Liên kết tiếng Hàn:** `저하된 읽기`.

## 4. reconstruction threshold /ˌriːkənˈstrʌkʃən ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** the minimum number or combination of surviving fragments needed to rebuild missing data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số/lựa chọn fragment còn lại tối thiểu để dựng data mất.
**Grammar & collocations:** `reconstruction-threshold check` — kiểm tra; `assemble enough fragments` — tập hợp.
**Examples:** `The reconstruction threshold was met after the fourth healthy fragment responded.` → Threshold đạt khi fragment khỏe thứ tư trả lời.
**Liên kết tiếng Hàn:** `재구성 임계값`.

## 5. durability target /ˌdjʊərəˈbɪləti ˈtɑːrɡɪt/
**Part of speech:** noun
**Core meaning (English):** a required probability or timespan for stored data to remain recoverable despite failures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác suất hoặc khoảng thời gian yêu cầu data vẫn phục hồi được dù có lỗi.
**Grammar & collocations:** `durability-target estimate` — ước tính; `meet a nine-nines objective` — đạt.
**Examples:** `The durability target required the archive to survive simultaneous loss of two zones.` → Target yêu cầu archive chịu mất hai zone.
**Liên kết tiếng Hàn:** `내구성 목표`.

## 6. placement group /ˈpleɪsmənt ɡruːp/
**Part of speech:** noun
**Core meaning (English):** a set of storage locations selected together to hold related replicas or fragments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm location storage được chọn cùng để giữ replica/fragment liên quan.
**Grammar & collocations:** `placement-group policy` — policy; `spread fragments across zones` — rải.
**Examples:** `The placement group kept fragments on separate failure domains.` → Group giữ fragment ở domain lỗi khác nhau.
**Liên kết tiếng Hàn:** `배치 그룹`.

## 7. replica lag /ˈreplɪkə læɡ/
**Part of speech:** noun
**Core meaning (English):** the distance between the newest committed state and the state currently held by a replica.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách giữa state commit mới nhất và state replica đang giữ.
**Grammar & collocations:** `replica-lag monitor` — monitor; `catch up with the leader` — bắt kịp.
**Examples:** `Replica lag made the backup appear healthy even though it was missing the latest objects.` → Lag khiến backup trông khỏe dù thiếu object mới.
**Liên kết tiếng Hàn:** `복제본 지연`.

## 8. shard handoff /ʃɑːrd ˈhændɒf/
**Part of speech:** noun
**Core meaning (English):** transferring responsibility for a shard from one storage owner or node to another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển trách nhiệm shard giữa owner/node storage.
**Grammar & collocations:** `shard-handoff protocol` — protocol; `drain writes before transfer` — rút.
**Examples:** `The shard handoff waited for in-flight writes to settle before changing the owner.` → Handoff chờ write đang chạy ổn định.
**Liên kết tiếng Hàn:** `샤드 핸드오프`.

## 9. rebalance plan /ˌriːˈbæləns plæn/
**Part of speech:** noun
**Core meaning (English):** a staged plan for moving partitions or fragments so storage and workload are distributed more evenly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kế hoạch theo giai đoạn chuyển partition/fragment để phân bố đều hơn.
**Grammar & collocations:** `rebalance-plan step` — bước; `move a hot partition` — chuyển.
**Examples:** `The rebalance plan moved hot shards gradually so customer reads stayed available.` → Plan chuyển shard nóng dần để read vẫn available.
**Liên kết tiếng Hàn:** `재균형 계획`.

## 10. anti-entropy scan /ˌænti ˈentropi skæn/
**Part of speech:** noun
**Core meaning (English):** a comparison pass that finds divergent replicas and starts synchronization or repair.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượt so sánh tìm replica lệch và khởi động đồng bộ/repair.
**Grammar & collocations:** `anti-entropy-scan interval` — interval; `compare digest summaries` — so sánh.
**Examples:** `The anti-entropy scan found a stale replica whose checksum differed from the quorum.` → Scan tìm replica cũ có checksum khác quorum.
**Liên kết tiếng Hàn:** `반엔트로피 스캔`.

## 11. quorum read /ˈkwɔːrəm riːd/
**Part of speech:** noun
**Core meaning (English):** a read that consults enough replicas to reach an agreed or sufficiently fresh result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** read hỏi đủ replica để đạt result đồng thuận hoặc đủ mới.
**Grammar & collocations:** `quorum-read threshold` — ngưỡng; `compare replica versions` — so sánh.
**Examples:** `The quorum read ignored one lagging replica and returned the newest value seen by most copies.` → Read bỏ replica lag và trả value mới nhất của đa số.
**Liên kết tiếng Hàn:** `쿼럼 읽기`.

## 12. consistency repair /kənˈsɪstənsi rɪˈper/
**Part of speech:** noun
**Core meaning (English):** correcting replicas or indexes so they again represent the same accepted logical state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sửa replica/index để cùng biểu diễn một logical state được chấp nhận.
**Grammar & collocations:** `consistency-repair job` — job; `copy the authoritative value` — sao chép.
**Examples:** `Consistency repair replaced the stale metadata after the authoritative object was verified.` → Repair thay metadata cũ sau khi verify object chuẩn.
**Liên kết tiếng Hàn:** `일관성 복구`.

## 13. scrubbing pass /ˈskrʌbɪŋ pæs/
**Part of speech:** noun
**Core meaning (English):** a scheduled read-and-verify operation that detects silent corruption in stored data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượt đọc và verify theo lịch để phát hiện corruption im lặng.
**Grammar & collocations:** `scrubbing-pass result` — kết quả; `verify every stored block` — xác minh.
**Examples:** `The scrubbing pass detected a damaged sector before a customer requested the archive.` → Pass phát hiện sector hỏng trước khi customer cần.
**Liên kết tiếng Hàn:** `스크러빙 패스`.

## 14. bit rot /bɪt rɒt/
**Part of speech:** noun
**Core meaning (English):** gradual, unintended corruption of stored bits without an explicit write operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** corruption dần của bit lưu trữ mà không có write rõ ràng.
**Grammar & collocations:** `bit-rot detection` — phát hiện; `repair a silent error` — sửa.
**Examples:** `Checksums exposed bit rot in a rarely read archival object.` → Checksum lộ bit rot trong object ít đọc.
**Liên kết tiếng Hàn:** `비트 부패`.

## 15. checksum tree /ˈtʃeksʌm triː/
**Part of speech:** noun
**Core meaning (English):** a hierarchy of checksums that localizes corruption without rereading every byte of a large object.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cây checksum định vị corruption mà không đọc lại mọi byte.
**Grammar & collocations:** `checksum-tree node` — node; `narrow the damaged range` — thu hẹp.
**Examples:** `The checksum tree isolated the damaged megabyte before repair copied only that range.` → Tree cô lập megabyte hỏng.
**Liên kết tiếng Hàn:** `체크섬 트리`.

## 16. fragment inventory /ˈfræɡmənt ˈɪnvəntɔːri/
**Part of speech:** noun
**Core meaning (English):** an authoritative list of fragments, locations, versions, and health states belonging to an object.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** danh sách authoritative về fragment, location, version và health của object.
**Grammar & collocations:** `fragment-inventory record` — record; `locate a missing parity piece` — định vị.
**Examples:** `The fragment inventory showed that two copies occupied the same rack by mistake.` → Inventory lộ hai copy cùng rack.
**Liên kết tiếng Hàn:** `조각 인벤토리`.

## 17. rebuild priority /ˌriːˈbɪld praɪˈɔːrəti/
**Part of speech:** noun
**Core meaning (English):** an ordering that decides which damaged or under-redundant objects receive repair capacity first.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thứ tự quyết định object hỏng/thiếu redundancy nào được repair trước.
**Grammar & collocations:** `rebuild-priority queue` — queue; `protect a nearly vulnerable object` — bảo vệ.
**Examples:** `Rebuild priority favored objects with one surviving copy over objects that still had full redundancy.` → Priority ưu tiên object chỉ còn một copy.
**Liên kết tiếng Hàn:** `재구축 우선순위`.

## 18. failure correlation /ˈfeɪljər ˌkɒrəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** the degree to which supposedly independent storage failures share a common cause or location.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức các failure tưởng độc lập lại chung cause hoặc location.
**Grammar & collocations:** `failure-correlation model` — mô hình; `avoid a shared power domain` — tránh.
**Examples:** `Failure correlation invalidated the durability estimate because all replicas used one power domain.` → Correlation phá estimate vì replica chung power.
**Liên kết tiếng Hàn:** `장애 상관관계`.

## 19. replica set /ˈreplɪkə set/
**Part of speech:** noun
**Core meaning (English):** the defined collection of copies that together provide redundancy for one logical object or partition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập copy cung cấp redundancy cho một object/partition logic.
**Grammar & collocations:** `replica-set membership` — membership; `remove an unhealthy copy` — loại.
**Examples:** `The replica set kept three copies in separate zones for the customer index.` → Set giữ ba copy ở vùng khác.
**Liên kết tiếng Hàn:** `복제본 세트`.

## 20. storage epoch /ˈstɔːrɪdʒ ˈiːpɒk/
**Part of speech:** noun
**Core meaning (English):** a numbered ownership or layout generation used to reject stale storage actions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thế hệ ownership/layout có số để từ chối action storage cũ.
**Grammar & collocations:** `storage-epoch token` — token; `fence a former owner` — ngăn.
**Examples:** `The node rejected a write carrying an old storage epoch after the shard handoff.` → Node từ chối write epoch cũ sau handoff.
**Liên kết tiếng Hàn:** `스토리지 에포크`.

## Review in context

A **parity fragment** supports repair, while **repair locality**, a **degraded read**, and a **reconstruction threshold** determine cost and survivability. A **durability target** depends on a **placement group**, **replica lag**, and safe **shard handoff**; a **rebalance plan** changes layout gradually. An **anti-entropy scan** finds divergence, a **quorum read** chooses a fresh value, and **consistency repair** restores agreement. A **scrubbing pass** detects **bit rot**, while a **checksum tree** localizes damage. A **fragment inventory** records state, **rebuild priority** allocates repair, **failure correlation** tests assumptions, a **replica set** supplies redundancy, and a **storage epoch** fences stale actions.

**Bản dịch tiếng Việt:** **Parity fragment** hỗ trợ repair, còn **repair locality**, **degraded read** và **reconstruction threshold** quyết định cost và khả năng sống sót. **Durability target** phụ thuộc **placement group**, **replica lag** và **shard handoff** an toàn; **rebalance plan** đổi layout dần. **Anti-entropy scan** tìm lệch, **quorum read** chọn value mới, còn **consistency repair** khôi phục đồng bộ. **Scrubbing pass** phát hiện **bit rot**, **checksum tree** định vị hỏng. **Fragment inventory** ghi state, **rebuild priority** phân bổ repair, **failure correlation** kiểm tra giả định, **replica set** cung cấp redundancy, và **storage epoch** chặn action cũ.
