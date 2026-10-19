# C2 Vocabulary — Storage integrity and self-healing

This lesson follows stored data from content addressing and checksums through corruption detection, repair scheduling, and reclamation.

Flow: **content-addressed storage → Merkle namespace → chunk locality → deduplication domain → garbage-collection debt → tombstone retention → snapshot ancestry → copy-on-write extent → scrub schedule → silent data corruption → end-to-end checksum → repair bandwidth → rebuild window → erasure stripe → object healing → read-after-repair → filesystem journal replay → metadata hotspot → storage reclamation → durability evidence**.

## 1. content-addressed storage /ˈkɑntɛnt əˈdrɛst ˈstɔrɪdʒ/
**Part of speech:** noun
**Core meaning (English):** storage in which an object's identifier is derived from its content rather than from a mutable location.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ID object lấy từ nội dung, không phải vị trí.
**Grammar & collocations:** `content-addressed-storage layer` — layer; `retrieve by digest` — lấy.
**Examples:** `Content-addressed storage made duplicate backup blocks converge on one immutable object.` → Storage theo content gom block backup trùng thành object bất biến.
**Liên kết tiếng Hàn:** `콘텐츠 주소 지정 스토리지`.

## 2. Merkle namespace /ˈmɝkəl ˈneɪmˌspeɪs/
**Part of speech:** noun
**Core meaning (English):** a hierarchical namespace whose nodes commit cryptographically to the content and descendants below them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** namespace cây mà node cam kết hash nội dung con.
**Grammar & collocations:** `Merkle-namespace root` — root; `verify a subtree digest` — xác minh.
**Examples:** `The Merkle namespace detected a changed block before the index served it.` → Namespace Merkle phát hiện block đổi trước khi index phục vụ.
**Liên kết tiếng Hàn:** `머클 네임스페이스`.

## 3. chunk locality /tʃʌŋk loʊˈkæləti/
**Part of speech:** noun
**Core meaning (English):** the degree to which related chunks are placed near one another for access efficiency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chunk liên quan nằm gần nhau để đọc hiệu quả.
**Grammar & collocations:** `chunk-locality metric` — metric; `co-locate sequential blocks` — đặt gần.
**Examples:** `Chunk locality improved restore throughput for the large training dataset.` → Locality chunk tăng throughput restore.
**Liên kết tiếng Hàn:** `청크 지역성`.

## 4. deduplication domain /diːˌduːpləˈkeɪʃən doʊˈmeɪn/
**Part of speech:** noun
**Core meaning (English):** the scope within which identical data blocks are recognized and stored only once.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phạm vi dedup so sánh block trùng.
**Grammar & collocations:** `deduplication-domain boundary` — boundary; `share blocks across snapshots` — chia sẻ.
**Examples:** `The deduplication domain stopped at the tenant boundary to avoid cross-customer disclosure.` → Domain dedup dừng ở ranh tenant.
**Liên kết tiếng Hàn:** `중복 제거 도메인`.

## 5. garbage-collection debt /ˈɡɑrbɪdʒ kəˈlɛkʃən dɛt/
**Part of speech:** noun
**Core meaning (English):** accumulated obsolete storage work that must eventually be reclaimed or compacted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng dữ liệu rác tích lại chờ thu hồi.
**Grammar & collocations:** `garbage-collection-debt meter` — meter; `repay compaction work` — xử lý.
**Examples:** `Garbage-collection debt grew while snapshot deletion was paused for migration.` → Debt GC tăng khi xóa snapshot bị dừng.
**Liên kết tiếng Hàn:** `가비지 컬렉션 부채`.

## 6. tombstone retention /ˈtuːmstoʊn rɪˈtɛnʃən/
**Part of speech:** noun
**Core meaning (English):** the period for which a deletion marker remains so stale replicas cannot resurrect removed data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ marker xóa đủ lâu để replica cũ không hồi sinh data.
**Grammar & collocations:** `tombstone-retention period` — period; `suppress stale resurrection` — ngăn.
**Examples:** `Tombstone retention exceeded the longest replication outage by a safe margin.` → Retention tombstone dài hơn outage replication dài nhất.
**Liên kết tiếng Hàn:** `툼스톤 보존`.

## 7. snapshot ancestry /ˈsnæpˌʃɑt ˈænsɛstri/
**Part of speech:** noun
**Core meaning (English):** the parent-child history linking snapshots that share data and record successive states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lịch sử cha-con của snapshot.
**Grammar & collocations:** `snapshot-ancestry graph` — graph; `walk a parent chain` — đi theo.
**Examples:** `Snapshot ancestry revealed that a restore point depended on a deleted intermediate layer.` → Ancestry cho thấy restore point phụ thuộc layer đã xóa.
**Liên kết tiếng Hàn:** `스냅샷 계보`.

## 8. copy-on-write extent /ˈkɑpi ɑn raɪt ɪkˈstɛnt/
**Part of speech:** noun
**Core meaning (English):** a contiguous storage range preserved by writing changed blocks elsewhere instead of overwriting the original.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng dữ liệu giữ bản cũ, bản mới ghi chỗ khác.
**Grammar & collocations:** `copy-on-write-extent map` — map; `split a shared range` — tách.
**Examples:** `The copy-on-write extent preserved the previous database image for point-in-time recovery.` → Extent COW giữ image database cũ.
**Liên kết tiếng Hàn:** `기록 중 복사 익스텐트`.

## 9. scrub schedule /skrʌb ˈskɛdʒuːl/
**Part of speech:** noun
**Core meaning (English):** a planned timetable for reading stored data and checking it for latent corruption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lịch đọc quét dữ liệu để tìm corruption ẩn.
**Grammar & collocations:** `scrub-schedule interval` — interval; `scan cold data` — quét.
**Examples:** `The scrub schedule prioritized rarely read archives before the summer heat peak.` → Lịch scrub ưu tiên archive ít đọc trước mùa nóng.
**Liên kết tiếng Hàn:** `스크럽 일정`.

## 10. silent data corruption /ˈsaɪlənt ˈdeɪtə kəˈrʌpʃən/
**Part of speech:** noun
**Core meaning (English):** incorrect stored or returned data that is not reported by the underlying system as an error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data sai nhưng hệ thống không báo lỗi.
**Grammar & collocations:** `silent-data-corruption detector` — detector; `catch an undetected bit flip` — bắt.
**Examples:** `Silent data corruption changed one model weight without producing an I/O error.` → Corruption âm thầm đổi một weight mà không báo I/O.
**Liên kết tiếng Hàn:** `무음 데이터 손상`.

## 11. end-to-end checksum /ɛnd tə ɛnd ˈtʃɛkˌsʌm/
**Part of speech:** noun
**Core meaning (English):** an integrity value checked from the original producer through storage and retrieval to the final consumer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** checksum kiểm tra toàn tuyến từ producer tới consumer.
**Grammar & collocations:** `end-to-end-checksum field` — field; `verify payload integrity` — xác minh.
**Examples:** `An end-to-end checksum caught corruption introduced after the storage controller acknowledged the write.` → Checksum bắt lỗi sau khi controller ack write.
**Liên kết tiếng Hàn:** `종단 간 체크섬`.

## 12. repair bandwidth /rɪˈpɛr ˈbændwɪθ/
**Part of speech:** noun
**Core meaning (English):** the network or device throughput available for reconstructing damaged or missing storage data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bandwidth dành cho quá trình repair.
**Grammar & collocations:** `repair-bandwidth reservation` — reservation; `throttle background healing` — throttle.
**Examples:** `Repair bandwidth was capped so reconstruction could not starve customer reads.` → Bandwidth repair bị cap để không ảnh hưởng read.
**Liên kết tiếng Hàn:** `복구 대역폭`.

## 13. rebuild window /ˈriːbɪld ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the time available to reconstruct a failed storage component before another failure threatens durability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian rebuild an toàn trước lỗi tiếp theo.
**Grammar & collocations:** `rebuild-window estimate` — estimate; `shorten exposure to a second failure` — rút.
**Examples:** `The rebuild window narrowed when repair bandwidth was shared with replication traffic.` → Window rebuild hẹp khi chia bandwidth với replication.
**Liên kết tiếng Hàn:** `재구축 창`.

## 14. erasure stripe /ɪˈreɪʒər straɪp/
**Part of speech:** noun
**Core meaning (English):** a group of data and parity fragments encoded together for fault-tolerant storage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm fragment data/parity mã hóa cùng nhau.
**Grammar & collocations:** `erasure-stripe width` — width; `reconstruct a missing fragment` — dựng lại.
**Examples:** `The erasure stripe tolerated two missing fragments without losing the object.` → Stripe chịu được hai fragment mất.
**Liên kết tiếng Hàn:** `소거 코딩 스트라이프`.

## 15. object healing /ˈɑbdʒɪkt ˈhiːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** reconstructing and restoring a damaged replicated object from surviving copies or parity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dựng lại object hỏng từ bản sống/parity.
**Grammar & collocations:** `object-healing worker` — worker; `heal a degraded replica` — phục hồi.
**Examples:** `Object healing restored the missing shard before the next scrub cycle.` → Healing phục hồi shard trước cycle scrub sau.
**Liên kết tiếng Hàn:** `객체 복구`.

## 16. read-after-repair /riːd ˈæftər rɪˈpɛr/
**Part of speech:** noun
**Core meaning (English):** validation that a repaired object can be read correctly after reconstruction completes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đọc lại sau repair để xác nhận đúng.
**Grammar & collocations:** `read-after-repair check` — check; `validate reconstructed bytes` — xác nhận.
**Examples:** `Read-after-repair failed because the parity reconstruction used a stale manifest.` → Read sau repair fail do manifest cũ.
**Liên kết tiếng Hàn:** `복구 후 읽기`.

## 17. filesystem journal replay /ˈfaɪlˌsɪstəm ˈdʒɝnəl riˈpleɪ/
**Part of speech:** noun
**Core meaning (English):** reapplying recorded filesystem metadata operations after a crash to restore a consistent state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy lại journal sau crash để khôi phục metadata.
**Grammar & collocations:** `filesystem-journal-replay phase` — phase; `replay committed metadata` — chạy lại.
**Examples:** `Filesystem journal replay restored directory links before user data was scanned.` → Replay journal khôi phục link thư mục trước data.
**Liên kết tiếng Hàn:** `파일 시스템 저널 재생`.

## 18. metadata hotspot /ˈmɛtəˌdeɪtə hɑt spɑt/
**Part of speech:** noun
**Core meaning (English):** a concentrated access or update point in metadata that limits storage scalability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm metadata bị truy cập/cập nhật quá nhiều.
**Grammar & collocations:** `metadata-hotspot detector` — detector; `shard namespace updates` — chia.
**Examples:** `A metadata hotspot formed around one directory holding millions of small objects.` → Hotspot metadata hình thành ở thư mục có triệu object nhỏ.
**Liên kết tiếng Hàn:** `메타데이터 핫스팟`.

## 19. storage reclamation /ˈstɔrɪdʒ ˌrɛkləˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** recovering physical capacity occupied by obsolete, deleted, or superseded storage data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thu hồi capacity từ data cũ/xóa.
**Grammar & collocations:** `storage-reclamation queue` — queue; `reclaim unreachable extents` — thu hồi.
**Examples:** `Storage reclamation waited for the retention window before deleting old snapshot blocks.` → Reclamation chờ hết retention rồi xóa block.
**Liên kết tiếng Hàn:** `스토리지 회수`.

## 20. durability evidence /ˌdjʊrəˈbɪləti ˈɛvədəns/
**Part of speech:** noun
**Core meaning (English):** measurements and records demonstrating that data remains recoverable under defined failures and time horizons.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bằng chứng data vẫn phục hồi được khi có lỗi.
**Grammar & collocations:** `durability-evidence package` — package; `demonstrate a failure tolerance` — chứng minh.
**Examples:** `Durability evidence combined scrub results, repair histories, and end-to-end verification.` → Evidence durability ghép kết quả scrub, repair và verify.
**Liên kết tiếng Hàn:** `내구성 증거`.

## Review in context

**Content-addressed storage** and a **Merkle namespace** protect identity, while **chunk locality** and a **deduplication domain** shape placement. **Garbage-collection debt**, **tombstone retention**, **snapshot ancestry**, and a **copy-on-write extent** determine when old data can disappear. A **scrub schedule**, **silent data corruption** detector, and **end-to-end checksum** expose damage. **Repair bandwidth**, a **rebuild window**, and an **erasure stripe** support **object healing**, followed by **read-after-repair** verification. **Filesystem journal replay**, **metadata hotspot** control, **storage reclamation**, and **durability evidence** complete the lifecycle.

**Bản dịch tiếng Việt:** **Content-addressed storage** và **Merkle namespace** bảo vệ identity, còn **chunk locality** và **deduplication domain** định hình placement. **Garbage-collection debt**, **tombstone retention**, **snapshot ancestry** và **copy-on-write extent** quyết định khi nào data cũ được xóa. **Scrub schedule**, detector **silent data corruption** và **end-to-end checksum** lộ hỏng hóc. **Repair bandwidth**, **rebuild window** và **erasure stripe** hỗ trợ **object healing**, sau đó kiểm tra **read-after-repair**. **Filesystem journal replay**, kiểm soát **metadata hotspot**, **storage reclamation** và **durability evidence** hoàn tất vòng đời.
