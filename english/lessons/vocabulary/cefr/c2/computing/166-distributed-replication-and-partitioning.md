# C2 Vocabulary — Distributed replication and partitioning

This lesson follows distributed data from replica topology and consistency guarantees through key distribution and coordinator fan-out.

Flow: **replication topology → leaderless replication → multi-leader replication → single-leader replication → digest-based repair → quorum intersection → replica divergence → last-writer-wins → concurrent-value register → session consistency → session write visibility → bounded staleness → clustering key → sort key → hot key → key salting → range partition → hash partition → coordinator node → scatter-gather**.

## 1. replication topology /ˌreplɪˈkeɪʃən təˈpɒlədʒi/
**Part of speech:** noun
**Core meaning (English):** the arrangement of replicas, leaders, regions, and data flows in a distributed system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cách sắp replica, leader, region và flow data trong system phân tán.
**Grammar & collocations:** `replication-topology map` — map; `design a regional layout` — thiết kế.
**Examples:** `The replication topology placed a writable copy near each major customer region.` → Topology đặt bản ghi gần region khách hàng.
**Liên kết tiếng Hàn:** `복제 토폴로지`.

## 2. leaderless replication /ˈliːdərləs ˌreplɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** replication in which clients or coordinators write to multiple peers without one permanent write leader.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** replication client/coordinator ghi nhiều peer mà không có write leader cố định.
**Grammar & collocations:** `leaderless-replication quorum` — quorum; `collect replica acknowledgments` — thu.
**Examples:** `Leaderless replication kept writes available while one replica was unreachable.` → Replication không leader giữ write available khi một replica mất.
**Liên kết tiếng Hàn:** `리더 없는 복제`.

## 3. multi-leader replication /ˌmʌlti ˈliːdər ˌreplɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** replication in which more than one site accepts writes that later have to converge.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều site cùng nhận write rồi phải hội tụ sau.
**Grammar & collocations:** `multi-leader-replication conflict` — conflict; `merge concurrent updates` — gộp.
**Examples:** `Multi-leader replication let both offices update customer preferences during a link outage.` → Replication nhiều leader cho hai office update khi link down.
**Liên kết tiếng Hàn:** `다중 리더 복제`.

## 4. single-leader replication /ˌsɪŋɡəl ˈliːdər ˌreplɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** replication in which one elected or designated leader accepts ordered writes for followers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một leader nhận write có thứ tự cho follower.
**Grammar & collocations:** `single-leader-replication stream` — stream; `forward an ordered change` — chuyển.
**Examples:** `Single-leader replication simplified ordering but made leader failover critical.` → Replication một leader đơn giản order nhưng failover quan trọng.
**Liên kết tiếng Hàn:** `단일 리더 복제`.

## 5. digest-based repair /ˈdaɪdʒest beɪst rɪˈper/
**Part of speech:** noun
**Core meaning (English):** a repair process that compares compact state digests before copying only the differing data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process so digest state gọn trước khi copy phần data khác nhau.
**Grammar & collocations:** `digest-based-repair cycle` — cycle; `exchange state digests` — trao đổi.
**Examples:** `Digest-based repair corrected a forgotten object after a replica missed several updates.` → Repair dựa trên digest sửa object sau khi replica bỏ lỡ update.
**Liên kết tiếng Hàn:** `안티 엔트로피 복구`.

## 6. quorum intersection /ˈkwɔːrəm ˌɪntərˈsekʃən/
**Part of speech:** noun
**Core meaning (English):** the overlap between read and write quorums that ensures they share enough members to observe a decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần giao giữa quorum read/write giúp chúng thấy cùng decision.
**Grammar & collocations:** `quorum-intersection proof` — proof; `ensure a shared replica` — bảo đảm.
**Examples:** `Quorum intersection ensured that a successful read contacted at least one replica with the committed value.` → Giao quorum đảm bảo read thấy replica có value commit.
**Liên kết tiếng Hàn:** `쿼럼 교집합`.

## 7. replica divergence /ˈreplɪkə daɪˈvɜːrdʒəns/
**Part of speech:** noun
**Core meaning (English):** a condition in which replicas hold different values or histories for what should be the same state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** replica giữ value/history khác nhau cho cùng state.
**Grammar & collocations:** `replica-divergence alert` — alert; `detect conflicting versions` — phát hiện.
**Examples:** `Replica divergence appeared after two sites accepted incompatible updates.` → Divergence xuất hiện khi hai site nhận update xung đột.
**Liên kết tiếng Hàn:** `복제본 분기`.

## 8. last-writer-wins /læst ˈraɪtər wɪnz/
**Part of speech:** noun
**Core meaning (English):** a conflict rule that keeps the value associated with the greatest selected timestamp or version.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule conflict giữ value có timestamp/version lớn nhất.
**Grammar & collocations:** `last-writer-wins policy` — policy; `discard an older update` — bỏ.
**Examples:** `Last-writer-wins resolved the conflict but silently discarded the earlier preference.` → Rule giữ write cuối nhưng bỏ preference trước.
**Liên kết tiếng Hàn:** `최종 기록자 승리`.

## 9. concurrent-value register /kənˈkʌrənt ˈvæljuː ˈredʒɪstər/
**Part of speech:** noun
**Core meaning (English):** a replicated value that preserves alternatives written concurrently until an application resolves them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value replicated giữ alternative ghi đồng thời cho đến khi app giải quyết.
**Grammar & collocations:** `concurrent-value-register conflict` — conflict; `merge concurrent values` — gộp.
**Examples:** `The concurrent-value register exposed both addresses so the application could resolve them.` → Register giữ hai address để app tự giải quyết.
**Liên kết tiếng Hàn:** `다중 값 레지스터`.

## 10. session consistency /ˈseʃən kənˈsɪstənsi/
**Part of speech:** noun
**Core meaning (English):** a guarantee that a client's sequence of reads and writes follows a coherent session-level view.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo đảm chuỗi read/write của client giữ view nhất quán trong session.
**Grammar & collocations:** `session-consistency token` — token; `preserve a client's view` — giữ.
**Examples:** `Session consistency prevented the user from seeing an older profile immediately after editing it.` → Consistency session ngăn thấy profile cũ sau edit.
**Liên kết tiếng Hàn:** `세션 일관성`.

## 11. session write visibility /ˈseʃən raɪt ˌvɪzəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** a guarantee that a session can observe its own completed writes in later requests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** session đọc thấy write mình đã hoàn tất ở request sau.
**Grammar & collocations:** `session-write-visibility guarantee` — guarantee; `route to a current replica` — định tuyến.
**Examples:** `Session write visibility kept the new email address visible after the settings page refreshed.` → Visibility giữ email mới sau refresh.
**Liên kết tiếng Hàn:** `자기 쓰기 읽기`.

## 12. bounded staleness /ˈbaʊndɪd ˈsteɪlnəs/
**Part of speech:** noun
**Core meaning (English):** a consistency guarantee that limits how old a returned value may be.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** guarantee giới hạn độ cũ của value trả về.
**Grammar & collocations:** `bounded-staleness window` — window; `reject an over-old replica` — từ chối.
**Examples:** `The report allowed bounded staleness of five minutes during regional replication.` → Report cho phép data cũ tối đa năm phút.
**Liên kết tiếng Hàn:** `제한된 오래됨`.

## 13. clustering key /ˈklʌstərɪŋ kiː/
**Part of speech:** noun
**Core meaning (English):** a key that orders or groups rows within a partition in a distributed or wide-column store.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** key order/group row bên trong partition.
**Grammar & collocations:** `clustering-key order` — order; `scan a contiguous range` — scan.
**Examples:** `The clustering key placed events in timestamp order inside each customer partition.` → Key sắp event theo timestamp trong partition customer.
**Liên kết tiếng Hàn:** `클러스터링 키`.

## 14. sort key /sɔːrt kiː/
**Part of speech:** noun
**Core meaning (English):** a field or tuple used to determine the physical or logical order of stored records.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** field/tuple quyết định thứ tự record lưu hoặc logic.
**Grammar & collocations:** `sort-key range` — range; `order records by time` — sắp.
**Examples:** `The sort key let the query read recent events without scanning older pages.` → Key giúp đọc event mới không scan page cũ.
**Liên kết tiếng Hàn:** `정렬 키`.

## 15. hot key /hɒt kiː/
**Part of speech:** noun
**Core meaning (English):** a key receiving disproportionate traffic and creating a concentrated load on one partition or worker.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** key nhận traffic quá lớn, dồn load vào partition/worker.
**Grammar & collocations:** `hot-key mitigation` — mitigation; `spread a popular key` — phân tán.
**Examples:** `A hot key overloaded one shard even though total traffic was moderate.` → Hot key làm một shard quá tải dù traffic tổng vừa.
**Liên kết tiếng Hàn:** `핫 키`.

## 16. key salting /kiː ˈsɔːltɪŋ/
**Part of speech:** noun
**Core meaning (English):** adding a controlled varying value to a key so one popular logical key spreads across partitions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thêm value thay đổi có kiểm soát để key phổ biến trải ra nhiều partition.
**Grammar & collocations:** `key-salting suffix` — suffix; `spread writes across shards` — phân.
**Examples:** `Key salting distributed writes for the celebrity account across several shards.` → Salting phân write account nổi tiếng qua nhiều shard.
**Liên kết tiếng Hàn:** `키 솔팅`.

## 17. range partition /reɪndʒ pɑːrˈtɪʃən/
**Part of speech:** noun
**Core meaning (English):** a partition containing records whose keys fall within a defined interval.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** partition chứa record có key trong một khoảng định nghĩa.
**Grammar & collocations:** `range-partition boundary` — boundary; `split a growing range` — chia.
**Examples:** `The database split the range partition when recent timestamps grew too large.` → Database chia partition range khi timestamp mới phình.
**Liên kết tiếng Hàn:** `범위 파티션`.

## 18. hash partition /hæʃ pɑːrˈtɪʃən/
**Part of speech:** noun
**Core meaning (English):** a partition selected by hashing a key so records distribute across buckets.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** partition chọn bằng hash key để record phân vào bucket.
**Grammar & collocations:** `hash-partition bucket` — bucket; `map a key to a shard` — map.
**Examples:** `The hash partition balanced customer records better than chronological ranges.` → Partition hash cân bằng record tốt hơn range thời gian.
**Liên kết tiếng Hàn:** `해시 파티션`.

## 19. coordinator node /koʊˈɔːrdəneɪtər noʊd/
**Part of speech:** noun
**Core meaning (English):** a node that receives a distributed request, contacts participants, and combines their responses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** node nhận request phân tán, gọi participant và gộp response.
**Grammar & collocations:** `coordinator-node fan-out` — fan-out; `merge replica responses` — gộp.
**Examples:** `The coordinator node contacted three shards and returned the ordered result.` → Node coordinator gọi ba shard và trả result order.
**Liên kết tiếng Hàn:** `코디네이터 노드`.

## 20. scatter-gather /ˈskætər ˈɡæðər/
**Part of speech:** noun
**Core meaning (English):** a request pattern that sends work to multiple participants and gathers their partial results.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pattern gửi work nhiều participant rồi gom partial result.
**Grammar & collocations:** `scatter-gather query` — query; `combine partial responses` — kết hợp.
**Examples:** `The scatter-gather query searched every regional partition before merging the top results.` → Query tìm mọi partition vùng rồi gộp result đầu.
**Liên kết tiếng Hàn:** `분산 수집`.

## Review in context

A **replication topology** may use **leaderless replication**, **multi-leader replication**, or **single-leader replication**; **digest-based repair** reduces divergence, and **quorum intersection** helps replicas share decisions. **Replica divergence** can be resolved by **last-writer-wins** or a **concurrent-value register**. **Session consistency** includes **session write visibility**, while **bounded staleness** limits age. A **clustering key** and **sort key** organize records; a **hot key** may require **key salting**. **Range partition** and **hash partition** distribute data. A **coordinator node** performs **scatter-gather** across shards.

**Bản dịch tiếng Việt:** **Replication topology** có thể dùng **leaderless replication**, **multi-leader replication** hoặc **single-leader replication**; **digest-based repair** giảm divergence, còn **quorum intersection** giúp replica cùng thấy decision. **Replica divergence** có thể giải quyết bằng **last-writer-wins** hoặc **concurrent-value register**. **Session consistency** gồm **session write visibility**, còn **bounded staleness** giới hạn độ cũ. **Clustering key** và **sort key** sắp record; **hot key** có thể cần **key salting**. **Range partition** và **hash partition** phân data. **Coordinator node** thực hiện **scatter-gather** qua shard.
