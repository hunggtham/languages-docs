# C2 Vocabulary — Distributed filesystem metadata and consistency

This lesson follows a file operation from namespace metadata through caching, snapshots, durability, and stale-handle protection.

Flow: **namespace server → inode record → lease break → close-to-open consistency → writeback cache → file handle → snapshot clone → sparse file → extent map → checksum stripe → metadata quorum → journaling barrier → fsync durability → write ordering → read cache invalidation → stale handle → file lock lease → metadata journal → extent allocation → directory shard**.

## 1. namespace server /ˈneɪmspeɪs ˈsɜːrvər/
**Part of speech:** noun
**Core meaning (English):** a service managing file names, directory structure, and mappings to distributed storage objects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** service quản lý tên file, directory và mapping tới object storage phân tán.
**Grammar & collocations:** `namespace-server lookup` — lookup; `resolve a path component` — resolve.
**Examples:** `The namespace server resolved the project path before the client contacted a data node.` → Server resolve path trước khi client gọi data node.
**Liên kết tiếng Hàn:** `네임스페이스 서버`.

## 2. inode record /ˈaɪnoʊd ˈrekərd/
**Part of speech:** noun
**Core meaning (English):** metadata describing a file's identity, ownership, permissions, size, timestamps, and data references.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata về identity, owner, permission, size, timestamp và reference data.
**Grammar & collocations:** `inode-record update` — update; `read file metadata` — đọc.
**Examples:** `The inode record changed when the file grew and a new extent was allocated.` → Inode đổi khi file lớn và thêm extent.
**Liên kết tiếng Hàn:** `아이노드 레코드`.

## 3. lease break /liːs breɪk/
**Part of speech:** noun
**Core meaning (English):** a notification requiring a client to release or downgrade a cached permission because another operation needs authority.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** notification buộc client nhả/hạ quyền cache vì operation khác cần authority.
**Grammar & collocations:** `lease-break notification` — notification; `flush dirty data` — flush.
**Examples:** `The lease break made the writer flush its cached bytes before another reader opened the file.` → Break buộc writer flush trước reader.
**Liên kết tiếng Hàn:** `리스 해제`.

## 4. close-to-open consistency /kloʊz tə ˈoʊpən kənˈsɪstənsi/
**Part of speech:** noun
**Core meaning (English):** a guarantee that a later opener observes a file's completed writes after a previous writer closes it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo đảm opener sau thấy write hoàn tất sau khi writer trước close.
**Grammar & collocations:** `close-to-open-consistency rule` — rule; `publish a closed file` — công bố.
**Examples:** `Close-to-open consistency made the newly uploaded manifest visible to the next worker.` → Consistency làm manifest visible cho worker sau.
**Liên kết tiếng Hàn:** `닫기-열기 일관성`.

## 5. writeback cache /ˈraɪtbæk kæʃ/
**Part of speech:** noun
**Core meaning (English):** a cache that acknowledges writes before asynchronously sending modified data to durable storage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cache ack write trước rồi gửi data đổi xuống storage bền bất đồng bộ.
**Grammar & collocations:** `writeback-cache flush` — flush; `protect dirty pages` — bảo vệ.
**Examples:** `The writeback cache improved latency but required a durability policy for dirty blocks.` → Cache giảm latency nhưng cần policy durability.
**Liên kết tiếng Hàn:** `쓰기 저장 캐시`.

## 6. file handle /faɪl ˈhændəl/
**Part of speech:** noun
**Core meaning (English):** a stable or opaque reference a client uses to identify an opened file across requests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reference ổn định client dùng nhận diện file đã open qua nhiều request.
**Grammar & collocations:** `file-handle validation` — validation; `reject an unknown handle` — từ chối.
**Examples:** `The server rejected the file handle after the object had been deleted and recreated.` → Server từ chối handle sau delete/recreate.
**Liên kết tiếng Hàn:** `파일 핸들`.

## 7. snapshot clone /ˈsnæpʃɒt kloʊn/
**Part of speech:** noun
**Core meaning (English):** a new logical file or volume initially sharing data with a snapshot until either copy changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** file/volume logic mới chia sẻ data snapshot đến khi một bên đổi.
**Grammar & collocations:** `snapshot-clone lineage` — lineage; `create a point-in-time copy` — tạo.
**Examples:** `The snapshot clone created a test dataset without copying every block immediately.` → Clone tạo dataset test mà không copy ngay mọi block.
**Liên kết tiếng Hàn:** `스냅샷 클론`.

## 8. sparse file /spɑːrs faɪl/
**Part of speech:** noun
**Core meaning (English):** a file whose uninitialized regions consume little or no physical storage until written.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** file có vùng chưa ghi gần như không chiếm storage vật lý.
**Grammar & collocations:** `sparse-file hole` — hole; `allocate a written range` — cấp.
**Examples:** `The sparse file reserved a large logical image while storing only the blocks containing data.` → File chỉ lưu block có data.
**Liên kết tiếng Hàn:** `희소 파일`.

## 9. extent map /ɪkˈstent mæp/
**Part of speech:** noun
**Core meaning (English):** metadata mapping logical file ranges to the physical or object-storage extents that hold them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata map range logic của file tới extent vật lý/object.
**Grammar & collocations:** `extent-map lookup` — lookup; `translate a byte range` — chuyển.
**Examples:** `The extent map located the blocks needed for a partial download.` → Map tìm block cần cho download một phần.
**Liên kết tiếng Hàn:** `익스텐트 맵`.

## 10. checksum stripe /ˈtʃeksʌm straɪp/
**Part of speech:** noun
**Core meaning (English):** a group of data blocks protected by coordinated checksums for efficient corruption detection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm block data có checksum phối hợp để phát hiện corruption.
**Grammar & collocations:** `checksum-stripe verification` — verification; `locate a damaged block` — định vị.
**Examples:** `The checksum stripe identified one corrupted block before the file was served.` → Stripe tìm block hỏng trước khi serve.
**Liên kết tiếng Hàn:** `체크섬 스트라이프`.

## 11. metadata quorum /ˈmetədeɪtə ˈkwɔːrəm/
**Part of speech:** noun
**Core meaning (English):** the minimum set of metadata replicas that must agree before a namespace change is accepted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số replica metadata tối thiểu phải đồng ý trước khi namespace đổi được nhận.
**Grammar & collocations:** `metadata-quorum write` — write; `commit a directory update` — commit.
**Examples:** `The metadata quorum accepted the rename after three replicas recorded the new parent.` → Quorum nhận rename sau ba replica ghi.
**Liên kết tiếng Hàn:** `메타데이터 쿼럼`.

## 12. journaling barrier /ˈdʒɜːrnəlɪŋ ˈbæriər/
**Part of speech:** noun
**Core meaning (English):** an ordering point ensuring journal records reach durable media before dependent data is exposed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm thứ tự bảo đảm journal bền trước khi data phụ thuộc được lộ.
**Grammar & collocations:** `journaling-barrier flush` — flush; `order metadata before contents` — sắp.
**Examples:** `The journaling barrier preserved the rename record before the new directory entry became visible.` → Barrier giữ record rename trước entry mới.
**Liên kết tiếng Hàn:** `저널링 장벽`.

## 13. fsync durability /ˈefsaɪŋk djʊərəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the guarantee about which file data and metadata are durable after an fsync-like operation returns.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo đảm data/metadata nào bền sau khi fsync trả về.
**Grammar & collocations:** `fsync-durability contract` — contract; `flush a file to stable media` — flush.
**Examples:** `The fsync durability contract told the application when a completed receipt was safe to acknowledge.` → Contract cho biết lúc receipt an toàn để ack.
**Liên kết tiếng Hàn:** `fsync 내구성`.

## 14. write ordering /raɪt ˈɔːrdərɪŋ/
**Part of speech:** noun
**Core meaning (English):** the enforced sequence in which related writes become durable and visible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thứ tự bắt buộc các write liên quan trở nên bền/visible.
**Grammar & collocations:** `write-ordering rule` — rule; `persist a pointer after its target` — lưu.
**Examples:** `Write ordering persisted the data block before the index pointer referenced it.` → Ordering lưu block trước pointer index.
**Liên kết tiếng Hàn:** `쓰기 순서`.

## 15. read cache invalidation /riːd kæʃ ɪnˌvælɪˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** removing or marking cached read data unusable after another operation changes the underlying file.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ/đánh dấu data đọc cache không dùng được sau khi file đổi.
**Grammar & collocations:** `read-cache-invalidation event` — event; `evict an old page` — loại.
**Examples:** `Read cache invalidation removed the stale directory listing after the rename.` → Invalidation bỏ listing cũ sau rename.
**Liên kết tiếng Hàn:** `읽기 캐시 무효화`.

## 16. stale handle /steɪl ˈhændəl/
**Part of speech:** noun
**Core meaning (English):** a file reference that points to an object or generation no longer valid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reference trỏ tới object/generation không còn hợp lệ.
**Grammar & collocations:** `stale-handle error` — lỗi; `reopen a replaced file` — mở lại.
**Examples:** `The client reopened the file after receiving a stale handle from the storage server.` → Client mở lại sau lỗi handle cũ.
**Liên kết tiếng Hàn:** `오래된 핸들`.

## 17. file lock lease /faɪl lɒk liːs/
**Part of speech:** noun
**Core meaning (English):** a time-limited right to hold a file lock before renewal or expiration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyền giữ file lock có hạn trước khi renew/hết.
**Grammar & collocations:** `file-lock-lease renewal` — gia hạn; `release an expired lock` — nhả.
**Examples:** `The file lock lease expired when the editing client lost network access.` → Lease hết khi client mất mạng.
**Liên kết tiếng Hàn:** `파일 잠금 임대`.

## 18. metadata journal /ˈmetədeɪtə ˈdʒɜːrnəl/
**Part of speech:** noun
**Core meaning (English):** an ordered durable record of namespace and file-metadata changes used for recovery.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record có thứ tự, bền về thay đổi namespace/metadata để recovery.
**Grammar & collocations:** `metadata-journal replay` — replay; `recover a directory mutation` — phục hồi.
**Examples:** `The metadata journal replay restored the directory after a namespace server restart.` → Replay khôi phục directory sau restart.
**Liên kết tiếng Hàn:** `메타데이터 저널`.

## 19. extent allocation /ɪkˈstent ˌæləˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** assigning physical or object-storage ranges to hold newly written file data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gán range storage vật lý/object cho data file mới ghi.
**Grammar & collocations:** `extent-allocation policy` — policy; `reserve contiguous blocks` — dự trữ.
**Examples:** `Extent allocation placed the new video blocks near related media for sequential reads.` → Allocation đặt block gần media liên quan.
**Liên kết tiếng Hàn:** `익스텐트 할당`.

## 20. directory shard /dəˈrektəri ʃɑːrd/
**Part of speech:** noun
**Core meaning (English):** a partition of directory metadata used to scale name lookups and updates across servers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** partition metadata directory để scale lookup/update tên qua server.
**Grammar & collocations:** `directory-shard owner` — owner; `route a filename lookup` — định tuyến.
**Examples:** `The directory shard distributed millions of filenames across several metadata workers.` → Shard phân phối hàng triệu filename.
**Liên kết tiếng Hàn:** `디렉터리 샤드`.

## Review in context

A **namespace server** manages an **inode record**, and a **lease break** supports **close-to-open consistency** when a **writeback cache** holds data. A **file handle** identifies the object; a **snapshot clone** shares history, a **sparse file** skips empty space, and an **extent map** locates ranges. A **checksum stripe** detects damage, a **metadata quorum** accepts namespace changes, and a **journaling barrier** orders durability. **Fsync durability** defines safe acknowledgement, **write ordering** protects pointers, and **read cache invalidation** removes stale pages. A **stale handle** signals replacement, a **file lock lease** limits editing, a **metadata journal** supports recovery, **extent allocation** places data, and a **directory shard** scales names.

**Bản dịch tiếng Việt:** **Namespace server** quản lý **inode record**, còn **lease break** hỗ trợ **close-to-open consistency** khi **writeback cache** giữ data. **File handle** nhận diện object; **snapshot clone** chia sẻ lịch sử, **sparse file** bỏ vùng rỗng, và **extent map** tìm range. **Checksum stripe** phát hiện hỏng, **metadata quorum** nhận thay đổi namespace, còn **journaling barrier** sắp durability. **Fsync durability** định nghĩa lúc ack an toàn, **write ordering** bảo vệ pointer, và **read cache invalidation** bỏ page cũ. **Stale handle** báo object thay thế, **file lock lease** giới hạn edit, **metadata journal** hỗ trợ recovery, **extent allocation** đặt data, còn **directory shard** scale tên.
