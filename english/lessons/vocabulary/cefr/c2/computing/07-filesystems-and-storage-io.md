# C2 Vocabulary — Filesystems and storage I/O

This lesson follows persistent storage from filesystem metadata and block mapping through caching, durability, flash-aware behavior, redundancy, and integrity checking.

Flow: **inode → directory entry → extent → journaling → copy-on-write → page cache → direct I/O → fsync → memory-mapped I/O → block device → I/O scheduler → queue depth → write amplification → TRIM → wear leveling → RAID stripe → parity → degraded mode → data scrubbing → checksumming**.

## 1. inode /ˈaɪˌnoʊd/
**Part of speech:** noun
**Core meaning (English):** a filesystem data structure that stores metadata about a file and references to the storage blocks containing its contents.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấu trúc metadata của file; hình dung tên file nằm ở directory, còn inode giữ “hồ sơ kỹ thuật” như owner, permission, size và vị trí data.
**Grammar & collocations:** `inode table` — bảng inode; `inode number` — số inode; `inode metadata` — metadata của inode.
**Examples:** `Deleting a filename does not immediately erase the inode if another hard link still references it.` → Xóa một tên file chưa chắc xóa inode ngay nếu vẫn còn hard link trỏ tới nó.
**Liên kết tiếng Hàn:** `아이노드`.

## 2. directory entry /dəˈrɛktəri ˈɛntri/
**Part of speech:** noun
**Core meaning (English):** a mapping stored in a directory that associates a human-readable filename with the underlying filesystem object.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mục trong directory; hình dung nó là “bảng tên” nối tên file mà người dùng thấy với inode phía dưới.
**Grammar & collocations:** `directory-entry lookup` — tra cứu entry; `create a directory entry` — tạo entry; `dentry cache` — cache entry thư mục.
**Examples:** `The kernel resolved each path component by looking up the corresponding directory entry.` → Kernel phân giải từng phần của path bằng cách tra directory entry tương ứng.
**Liên kết tiếng Hàn:** `디렉터리 엔트리`.

## 3. extent /ɪkˈstɛnt/
**Part of speech:** noun
**Core meaning (English):** a contiguous range of storage blocks recorded as one unit instead of as many individual block pointers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dải block liên tục; hình dung thay vì ghi từng block riêng lẻ, filesystem ghi một đoạn “từ block A dài N block”.
**Grammar & collocations:** `extent allocation` — cấp phát theo extent; `extent tree` — cây extent; `contiguous extent` — extent liên tục.
**Examples:** `Large sequential files benefit from extent-based allocation because metadata stays compact.` → File tuần tự lớn hưởng lợi từ cấp phát theo extent vì metadata gọn hơn.
**Liên kết tiếng Hàn:** `익스텐트`, `연속 블록 범위`.

## 4. journaling /ˈdʒɝnəlɪŋ/
**Part of speech:** noun
**Core meaning (English):** a filesystem technique that records intended metadata or data changes in a log before committing them to their final locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi nhật ký trước khi sửa filesystem; hình dung viết kế hoạch thay đổi vào journal trước để sau crash có thể phục hồi trạng thái nhất quán.
**Grammar & collocations:** `metadata journaling` — journaling metadata; `journal replay` — phát lại journal; `journaling filesystem` — filesystem có journal.
**Examples:** `After the crash, journaling allowed the filesystem to replay incomplete metadata operations safely.` → Sau crash, journaling cho phép filesystem phát lại các thao tác metadata chưa hoàn tất một cách an toàn.
**Liên kết tiếng Hàn:** `저널링`.

## 5. copy-on-write /ˈkɑpi ɑn raɪt/
**Part of speech:** noun; adjective
**Core meaning (English):** a strategy that leaves existing data untouched and writes modifications to new storage before updating references.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi bản mới thay vì sửa đè; hình dung giữ nguyên block cũ, tạo block mới rồi đổi con trỏ sau khi ghi xong.
**Grammar & collocations:** `copy-on-write filesystem` — filesystem CoW; `CoW snapshot` — snapshot dựa trên CoW; `copy-on-write update` — cập nhật CoW.
**Examples:** `Copy-on-write lets snapshots share unchanged blocks without duplicating the entire volume.` → CoW cho phép snapshot dùng chung các block chưa đổi mà không phải copy cả volume.
**Liên kết tiếng Hàn:** `카피 온 라이트`, `쓰기 시 복사`.

## 6. page cache /peɪdʒ kæʃ/
**Part of speech:** noun
**Core meaning (English):** memory used by the operating system to cache file data so repeated reads or delayed writes can avoid immediate device access.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cache file trong RAM; hình dung disk data được giữ tạm trong memory để lần đọc sau không phải chạm storage vật lý.
**Grammar & collocations:** `page-cache hit` — hit trong page cache; `dirty page` — page đã sửa chưa flush; `drop the page cache` — xóa cache trang.
**Examples:** `The second read was much faster because the file was already in the page cache.` → Lần đọc thứ hai nhanh hơn nhiều vì file đã nằm trong page cache.
**Liên kết tiếng Hàn:** `페이지 캐시`.

## 7. direct I/O /dəˈrɛkt ˌaɪˈoʊ/
**Part of speech:** noun
**Core meaning (English):** file I/O that bypasses or minimizes the operating system page cache and transfers data more directly between user buffers and storage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** I/O bỏ qua page cache; hình dung database tự quản cache nên muốn data đi trực tiếp giữa buffer của nó và device.
**Grammar & collocations:** `direct-I/O path` — đường direct I/O; `use direct I/O` — dùng direct I/O; `buffer alignment` — căn chỉnh buffer.
**Examples:** `The database used direct I/O to avoid caching the same pages twice.` → Database dùng direct I/O để tránh cache cùng một page ở hai nơi.
**Liên kết tiếng Hàn:** `직접 I/O`.

## 8. fsync /ˈɛf sɪŋk/
**Part of speech:** noun; verb
**Core meaning (English):** a system call that requests dirty file data and required metadata to be made durable on persistent storage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ép dữ liệu xuống storage bền vững; hình dung application nói với OS: “đừng chỉ giữ trong RAM, hãy đảm bảo đã commit xuống device”.
**Grammar & collocations:** `call fsync` — gọi fsync; `fsync latency` — độ trễ fsync; `durability boundary` — ranh giới durability.
**Examples:** `The application called fsync before acknowledging the transaction to the client.` → Application gọi fsync trước khi báo transaction thành công cho client.
**Liên kết tiếng Hàn:** `fsync 호출`, `동기화 기록`.

## 9. memory-mapped I/O /ˈmɛməri mæpt ˌaɪˈoʊ/
**Part of speech:** noun
**Core meaning (English):** file access in which file contents are mapped into a process's virtual address space and accessed through ordinary memory operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** map file vào virtual memory; hình dung chương trình đọc file như đang đọc một vùng memory thay vì gọi read cho từng đoạn.
**Grammar & collocations:** `memory-mapped file` — file được mmap; `mmap region` — vùng mmap; `page fault` — page fault khi dữ liệu chưa resident.
**Examples:** `Memory-mapped I/O simplified random access to a very large index file.` → Memory-mapped I/O đơn giản hóa random access tới file index rất lớn.
**Liên kết tiếng Hàn:** `메모리 매핑 I/O`.

## 10. block device /blɑk dɪˈvaɪs/
**Part of speech:** noun
**Core meaning (English):** a storage device exposed to the operating system as addressable fixed-size blocks rather than as a byte stream.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết bị lưu trữ theo block; hình dung OS làm việc với SSD/HDD bằng các block có địa chỉ.
**Grammar & collocations:** `block-device layer` — tầng block device; `logical block` — block logic; `block-device request` — request tới device.
**Examples:** `The filesystem translated file offsets into requests for blocks on the underlying block device.` → Filesystem chuyển offset của file thành request tới các block trên block device bên dưới.
**Liên kết tiếng Hàn:** `블록 디바이스`.

## 11. I/O scheduler /ˌaɪˈoʊ ˈskɛdʒələr/
**Part of speech:** noun
**Core meaning (English):** an operating-system component that orders, merges, or prioritizes storage requests before they reach a device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ điều phối request storage; hình dung nhiều read/write đang chờ và scheduler quyết định request nào đi trước.
**Grammar & collocations:** `I/O scheduling policy` — chính sách scheduling; `request merging` — gộp request; `latency-sensitive I/O` — I/O nhạy latency.
**Examples:** `The I/O scheduler prioritized interactive reads over background writeback.` → I/O scheduler ưu tiên read tương tác hơn writeback chạy nền.
**Liên kết tiếng Hàn:** `I/O 스케줄러`.

## 12. queue depth /kjuː dɛpθ/
**Part of speech:** noun
**Core meaning (English):** the number of storage operations outstanding or waiting in a device or software queue at a given time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số request I/O đang xếp hàng; queue sâu hơn có thể tăng throughput nhưng cũng làm latency tăng.
**Grammar & collocations:** `increase queue depth` — tăng queue depth; `device queue` — queue của device; `outstanding request` — request chưa hoàn tất.
**Examples:** `Throughput improved as queue depth increased, but tail latency became worse.` → Throughput tăng khi queue depth lớn hơn, nhưng tail latency xấu đi.
**Liên kết tiếng Hàn:** `큐 깊이`.

## 13. write amplification /raɪt ˌæmpləfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the phenomenon in which the storage system physically writes more data than the application logically requested.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi vật lý nhiều hơn ghi logic; hình dung app ghi 1 MB nhưng SSD phải di chuyển và rewrite nhiều MB vì erase block hoặc internal housekeeping.
**Grammar & collocations:** `write-amplification factor` — hệ số write amplification; `reduce write amplification` — giảm khuếch đại ghi; `physical writes` — lượng ghi vật lý.
**Examples:** `Small random updates caused severe write amplification on the flash device.` → Các update nhỏ ngẫu nhiên gây write amplification lớn trên flash device.
**Liên kết tiếng Hàn:** `쓰기 증폭`.

## 14. TRIM /trɪm/
**Part of speech:** noun; verb
**Core meaning (English):** a command by which the operating system tells a solid-state drive which logical blocks no longer contain useful data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** báo cho SSD block nào đã bỏ; hình dung filesystem xóa file rồi thông báo để SSD biết vùng đó có thể được reclaim nội bộ.
**Grammar & collocations:** `issue TRIM` — gửi lệnh TRIM; `TRIM support` — hỗ trợ TRIM; `discard unused blocks` — discard block không dùng.
**Examples:** `Periodic TRIM helped the SSD reclaim blocks before later writes needed them.` → TRIM định kỳ giúp SSD reclaim block trước khi các write sau cần chúng.
**Liên kết tiếng Hàn:** `트림 명령`.

## 15. wear leveling /wɛr ˈlɛvəlɪŋ/
**Part of speech:** noun
**Core meaning (English):** a flash-management technique that distributes program and erase activity across memory cells to avoid wearing out a small region prematurely.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dàn đều độ mòn flash; hình dung controller luân chuyển vị trí ghi để không một nhóm cell bị erase quá nhiều lần.
**Grammar & collocations:** `dynamic wear leveling` — wear leveling động; `static wear leveling` — wear leveling tĩnh; `flash endurance` — độ bền flash.
**Examples:** `Wear leveling moved cold data so heavily used blocks would not fail much earlier than the rest of the drive.` → Wear leveling di chuyển cold data để block dùng nhiều không hỏng sớm hơn phần còn lại.
**Liên kết tiếng Hàn:** `웨어 레벨링`.

## 16. RAID stripe /reɪd straɪp/
**Part of speech:** noun
**Core meaning (English):** a group of data units distributed across multiple drives as one horizontal unit in a RAID layout.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một hàng dữ liệu trải trên nhiều disk; hình dung cùng một stripe gồm các chunk nằm song song trên các drive khác nhau.
**Grammar & collocations:** `stripe width` — độ rộng stripe; `full-stripe write` — ghi đủ cả stripe; `stripe unit` — đơn vị stripe.
**Examples:** `A full-stripe write avoided the extra read-modify-write cycle required for a small update.` → Full-stripe write tránh chu trình read-modify-write bổ sung của một update nhỏ.
**Liên kết tiếng Hàn:** `RAID 스트라이프`.

## 17. parity /ˈpærəti/
**Part of speech:** noun
**Core meaning (English):** redundant information computed from data blocks so missing data can be reconstructed after certain drive failures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dữ liệu kiểm tra dư để phục hồi; hình dung hệ thống giữ thêm thông tin toán học đủ để dựng lại block bị mất.
**Grammar & collocations:** `parity block` — block parity; `distributed parity` — parity phân tán; `parity calculation` — tính parity.
**Examples:** `Distributed parity allowed the array to reconstruct data after one drive failed.` → Parity phân tán cho phép array dựng lại data sau khi một drive hỏng.
**Liên kết tiếng Hàn:** `패리티`.

## 18. degraded mode /dɪˈɡreɪdɪd moʊd/
**Part of speech:** noun
**Core meaning (English):** an operating state in which a redundant storage array remains available after a component failure but with reduced protection or performance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chế độ vẫn chạy nhưng đã mất một phần redundancy; hệ thống chưa chết nhưng đang ở trạng thái rủi ro hơn.
**Grammar & collocations:** `run in degraded mode` — chạy degraded; `degraded array` — array suy giảm; `rebuild the array` — rebuild array.
**Examples:** `The RAID set stayed online in degraded mode while the failed drive was being replaced.` → RAID vẫn online ở degraded mode trong lúc drive hỏng được thay.
**Liên kết tiếng Hàn:** `성능 저하 모드`, `디그레이드 모드`.

## 19. data scrubbing /ˈdeɪtə ˈskrʌbɪŋ/
**Part of speech:** noun
**Core meaning (English):** a background process that reads stored data, verifies integrity, and repairs recoverable corruption using redundant copies or parity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quét dữ liệu chủ động để tìm corruption; hình dung định kỳ đọc lại toàn bộ storage trước khi lỗi âm thầm tích tụ.
**Grammar & collocations:** `scrub schedule` — lịch scrub; `background scrubbing` — scrub nền; `repair corruption` — sửa corruption.
**Examples:** `Monthly data scrubbing detected a silent checksum mismatch before another drive failed.` → Data scrubbing hàng tháng phát hiện checksum mismatch âm thầm trước khi drive khác hỏng.
**Liên kết tiếng Hàn:** `데이터 스크러빙`.

## 20. checksumming /ˈtʃɛkˌsʌmɪŋ/
**Part of speech:** noun
**Core meaning (English):** the use of computed digest values to detect whether stored or transmitted data has changed unexpectedly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gắn “dấu kiểm tra” cho data; khi đọc lại, hệ thống tính lại để xem bit có bị đổi ngoài ý muốn không.
**Grammar & collocations:** `end-to-end checksumming` — checksum đầu-cuối; `checksum mismatch` — checksum không khớp; `verify a checksum` — kiểm checksum.
**Examples:** `End-to-end checksumming caught corruption that the storage device itself had not reported.` → Checksumming đầu-cuối phát hiện corruption mà storage device không tự báo.
**Liên kết tiếng Hàn:** `체크섬`, `체크섬 검증`.

## Review in context

A filesystem resolves a filename through a **directory entry** and then uses the file's **inode** to find metadata and mapped storage. Large files may be represented with an **extent**, while **journaling** records changes before they are committed. A **copy-on-write** design can preserve old blocks for snapshots. Normal reads often pass through the **page cache**, whereas databases may choose **direct I/O**; when durability matters, they may call **fsync**. Some applications instead use **memory-mapped I/O**. Beneath the filesystem, requests reach a **block device**, where an **I/O scheduler** and the current **queue depth** influence latency and throughput. Flash storage introduces **write amplification**, so **TRIM** and **wear leveling** help the device manage reclaimed space and cell endurance. Redundant arrays distribute data across a **RAID stripe** and may store **parity** for recovery. After a drive failure the array can remain online in **degraded mode**, while regular **data scrubbing** and **checksumming** help discover and repair silent corruption.

**Bản dịch tiếng Việt:** Filesystem phân giải filename qua **directory entry**, rồi dùng **inode** để tìm metadata và vùng lưu trữ. File lớn có thể được biểu diễn bằng **extent**, còn **journaling** ghi lại thay đổi trước khi commit. Thiết kế **copy-on-write** có thể giữ block cũ cho snapshot. Read thông thường thường đi qua **page cache**, còn database có thể chọn **direct I/O**; khi cần durability, nó có thể gọi **fsync**. Một số application dùng **memory-mapped I/O**. Bên dưới filesystem, request đi tới **block device**, nơi **I/O scheduler** và **queue depth** ảnh hưởng latency và throughput. Flash storage tạo ra **write amplification**, nên **TRIM** và **wear leveling** giúp device quản lý vùng được reclaim và độ bền cell. RAID phân bố data trong **RAID stripe** và có thể lưu **parity** để recovery. Khi một drive hỏng, array vẫn có thể chạy ở **degraded mode**, còn **data scrubbing** và **checksumming** định kỳ giúp phát hiện, sửa corruption âm thầm.