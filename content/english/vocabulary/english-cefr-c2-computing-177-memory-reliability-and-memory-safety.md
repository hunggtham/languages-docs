# C2 Vocabulary — Memory reliability, reclamation, and safety

This lesson connects persistent storage reliability with runtime memory pressure and the defenses that catch unsafe pointer behavior.

Flow: **bad block → scrub cycle → retention loss → erase block → page program → overprovisioning → persistent memory → memory-mapped file → eviction policy → working set → use-after-free → double free → dangling pointer → guard page → red zone → address sanitizer → memory sanitizer → heap quarantine → out-of-memory killer → memory pressure**.

## 1. bad block /ˈbæd blɑːk/
**Part of speech:** noun
**Core meaning (English):** a storage block that can no longer reliably retain or accept data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** block lưu trữ không còn giữ hoặc nhận data đáng tin.
**Grammar & collocations:** `bad-block table` — bảng; `mark a block unusable` — đánh dấu.
**Examples:** `The controller retired a bad block after repeated program failures.` → Controller loại block hỏng sau nhiều lần ghi fail.
**Liên kết tiếng Hàn:** `불량 블록`.

## 2. scrub cycle /ˈskrʌb ˌsaɪkəl/
**Part of speech:** noun
**Core meaning (English):** a maintenance pass that reads stored data, corrects recoverable errors, and rewrites weak locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượt bảo trì đọc data, sửa lỗi khôi phục được và ghi lại vị trí yếu.
**Grammar & collocations:** `scrub-cycle interval` — chu kỳ; `refresh a storage stripe` — làm mới.
**Examples:** `A nightly scrub cycle found a correctable error before it became unreadable.` → Scrub đêm bắt lỗi sửa được trước khi không đọc nổi.
**Liên kết tiếng Hàn:** `스크럽 사이클`.

## 3. retention loss /rɪˈtenʃən lɔːs/
**Part of speech:** noun
**Core meaning (English):** gradual disappearance or distortion of stored information over time without a new write.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data biến mất hoặc méo dần theo thời gian dù không ghi mới.
**Grammar & collocations:** `retention-loss model` — mô hình; `age a memory cell` — làm già.
**Examples:** `High temperature accelerated retention loss in the unpowered storage array.` → Nhiệt cao làm retention loss nhanh hơn trong array tắt nguồn.
**Liên kết tiếng Hàn:** `데이터 보존 손실`.

## 4. erase block /ɪˈreɪs blɑːk/
**Part of speech:** noun
**Core meaning (English):** the smallest region of flash storage that can be erased in one operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng flash nhỏ nhất có thể xóa bằng một operation.
**Grammar & collocations:** `erase-block size` — kích thước; `schedule a block erase` — xếp lịch.
**Examples:** `The allocator grouped updates so an erase block was not rewritten for every small record.` → Allocator gom update để không rewrite block cho từng record nhỏ.
**Liên kết tiếng Hàn:** `소거 블록`.

## 5. page program /ˈpeɪdʒ ˈproʊɡræm/
**Part of speech:** noun
**Core meaning (English):** an operation that writes a page-sized unit into flash after the relevant block has been erased.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operation ghi đơn vị cỡ page vào flash sau khi block được xóa.
**Grammar & collocations:** `page-program latency` — độ trễ; `queue a write` — xếp.
**Examples:** `The driver waited for the page program to finish before issuing the next command.` → Driver chờ ghi page xong trước lệnh tiếp.
**Liên kết tiếng Hàn:** `페이지 프로그램`.

## 6. overprovisioning /ˌoʊvərprəˈvɪʒənɪŋ/
**Part of speech:** noun
**Core meaning (English):** reserving hidden storage capacity so the controller can replace weak blocks and spread writes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chừa capacity ẩn để controller thay block yếu và dàn trải ghi.
**Grammar & collocations:** `overprovisioning ratio` — tỷ lệ; `reserve spare blocks` — dự phòng.
**Examples:** `Extra overprovisioning improved endurance when the log partition received constant writes.` → Chừa capacity tăng endurance khi partition log bị ghi liên tục.
**Liên kết tiếng Hàn:** `오버프로비저닝`.

## 7. persistent memory /pərˈsɪstənt ˈmeməri/
**Part of speech:** noun
**Core meaning (English):** memory that preserves its contents across ordinary power loss while remaining directly addressable by software.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory giữ nội dung qua mất điện bình thường và vẫn address trực tiếp.
**Grammar & collocations:** `persistent-memory region` — vùng; `flush a cache line` — flush.
**Examples:** `The database stored its recovery marker in persistent memory before acknowledging the transaction.` → Database lưu marker phục hồi trước khi ack transaction.
**Liên kết tiếng Hàn:** `영구 메모리`.

## 8. memory-mapped file /ˈmeməri mæpt faɪl/
**Part of speech:** noun
**Core meaning (English):** a file exposed as a memory range so reads and writes use ordinary memory access instructions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** file lộ thành vùng memory để đọc/ghi bằng instruction memory thường.
**Grammar & collocations:** `memory-mapped-file view` — view; `map a dataset read-only` — ánh xạ.
**Examples:** `The index opened a memory-mapped file to inspect records without copying the whole dataset.` → Index mở file map memory để xem record không copy cả dataset.
**Liên kết tiếng Hàn:** `메모리 매핑 파일`.

## 9. eviction policy /ɪˈvɪkʃən ˈpɑːləsi/
**Part of speech:** noun
**Core meaning (English):** a rule that chooses which cached or resident item to remove when space is needed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule chọn item cache/resident nào bị loại khi cần chỗ.
**Grammar & collocations:** `eviction-policy decision` — quyết định; `discard the coldest entry` — bỏ.
**Examples:** `The eviction policy protected recently written pages from immediate removal.` → Policy bảo vệ page vừa ghi khỏi bị xóa ngay.
**Liên kết tiếng Hàn:** `축출 정책`.

## 10. working set /ˈwɜːrkɪŋ set/
**Part of speech:** noun
**Core meaning (English):** the collection of memory pages a program actively needs during a period of execution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập page mà program thực sự cần trong một khoảng chạy.
**Grammar & collocations:** `working-set size` — kích thước; `fit the hot data` — chứa.
**Examples:** `The service's working set grew after a new cache feature retained large responses.` → Working set phình sau feature cache giữ response lớn.
**Liên kết tiếng Hàn:** `작업 집합`.

## 11. use-after-free /ˌjuːz æftər ˈfriː/
**Part of speech:** noun
**Core meaning (English):** accessing an object after its memory has already been released for another use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truy cập object sau khi memory của nó đã được giải phóng.
**Grammar & collocations:** `use-after-free bug` — lỗi; `invalidate a pointer` — vô hiệu.
**Examples:** `The race created a use-after-free when the callback outlived the connection object.` → Race tạo lỗi use-after-free khi callback sống lâu hơn object connection.
**Liên kết tiếng Hàn:** `해제 후 사용`.

## 12. double free /ˈdʌbəl friː/
**Part of speech:** noun
**Core meaning (English):** releasing the same memory allocation more than once.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giải phóng cùng allocation nhiều hơn một lần.
**Grammar & collocations:** `double-free check` — kiểm tra; `release ownership exactly once` — giải phóng.
**Examples:** `A double free corrupted the allocator's free list during error cleanup.` → Double free làm hỏng free list khi cleanup lỗi.
**Liên kết tiếng Hàn:** `이중 해제`.

## 13. dangling pointer /ˈdæŋɡəlɪŋ ˈpɔɪntər/
**Part of speech:** noun
**Core meaning (English):** a pointer that still contains an address after the object at that address has ceased to exist.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pointer vẫn giữ address dù object ở đó đã biến mất.
**Grammar & collocations:** `dangling-pointer hazard` — nguy cơ; `null out a handle` — gán null.
**Examples:** `The destructor left a dangling pointer in the registry's callback table.` → Destructor để pointer treo trong bảng callback.
**Liên kết tiếng Hàn:** `댕글링 포인터`.

## 14. guard page /ˈɡɑːrd peɪdʒ/
**Part of speech:** noun
**Core meaning (English):** an intentionally inaccessible memory page placed beside a region to catch overrun or underflow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** page cố ý không truy cập cạnh vùng memory để bắt tràn hoặc hụt.
**Grammar & collocations:** `guard-page fault` — fault; `detect a stack overrun` — phát hiện.
**Examples:** `The guard page turned a silent stack overrun into an immediate crash in testing.` → Guard page biến tràn stack âm thầm thành crash ngay khi test.
**Liên kết tiếng Hàn:** `가드 페이지`.

## 15. red zone /ˈred zoʊn/
**Part of speech:** noun
**Core meaning (English):** a protected area beyond a buffer or stack boundary that helps reveal an out-of-bounds access.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng bảo vệ ngoài boundary buffer/stack để lộ access vượt giới hạn.
**Grammar & collocations:** `red-zone marker` — marker; `poison a boundary` — đánh dấu độc.
**Examples:** `The allocator filled the red zone with a pattern that exposed a one-byte overwrite.` → Allocator điền pattern vào red zone để lộ overwrite một byte.
**Liên kết tiếng Hàn:** `레드 존`.

## 16. address sanitizer /əˈdres ˈsænəˌtaɪzər/
**Part of speech:** noun
**Core meaning (English):** a compiler-assisted runtime tool that detects memory access errors such as overflows and use-after-free.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tool runtime hỗ trợ bởi compiler, bắt overflow và use-after-free.
**Grammar & collocations:** `address-sanitizer report` — báo cáo; `instrument a test build` — chèn kiểm tra.
**Examples:** `Address sanitizer identified the overwrite at the exact allocation that had been freed.` → ASan chỉ đúng allocation bị overwrite sau free.
**Liên kết tiếng Hàn:** `주소 새니타이저`.

## 17. memory sanitizer /ˈmeməri ˈsænəˌtaɪzər/
**Part of speech:** noun
**Core meaning (English):** a runtime tool that detects reads of uninitialized memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tool runtime phát hiện đọc memory chưa được khởi tạo.
**Grammar & collocations:** `memory-sanitizer warning` — cảnh báo; `track initialization state` — theo dõi.
**Examples:** `Memory sanitizer found that the response length was copied before initialization.` → MSan thấy length được copy trước init.
**Liên kết tiếng Hàn:** `메모리 새니타이저`.

## 18. heap quarantine /ˈhiːp ˈkwɔːrəntiːn/
**Part of speech:** noun
**Core meaning (English):** temporarily withholding freed heap memory so later invalid accesses are more likely to be detected.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ allocation heap đã free một thời gian để bắt access sai.
**Grammar & collocations:** `heap-quarantine delay` — thời gian; `delay reuse of freed memory` — trì hoãn.
**Examples:** `Heap quarantine made the stale pointer fail near its original release site.` → Quarantine làm pointer cũ fail gần chỗ release.
**Liên kết tiếng Hàn:** `힙 격리`.

## 19. out-of-memory killer /ˌaʊt əv ˈmeməri ˈkɪlər/
**Part of speech:** noun
**Core meaning (English):** an operating-system mechanism that terminates selected processes when memory cannot satisfy further allocation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế OS dừng process được chọn khi memory không đáp ứng allocation.
**Grammar & collocations:** `out-of-memory-killer score` — điểm; `terminate a reclaimable process` — dừng.
**Examples:** `The out-of-memory killer chose the cache worker rather than the database process.` → OOM killer chọn worker cache thay vì database.
**Liên kết tiếng Hàn:** `메모리 부족 종료기`.

## 20. memory pressure /ˈmeməri ˈpreʃər/
**Part of speech:** noun
**Core meaning (English):** a condition in which available memory is low enough to trigger reclamation, swapping, or process termination.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tình trạng memory thấp đến mức phải reclaim, swap hoặc dừng process.
**Grammar & collocations:** `memory-pressure signal` — tín hiệu; `reclaim cold pages` — thu hồi.
**Examples:** `Memory pressure caused the service to evict its least useful cached objects.` → Áp lực memory khiến service đuổi object cache ít hữu ích.
**Liên kết tiếng Hàn:** `메모리 압박`.

## Review in context

Flash maintenance retires a **bad block**, runs a **scrub cycle**, and watches for **retention loss** around each **erase block** and **page program**. **overprovisioning** leaves room for replacement and refresh. A database may place a journal in **persistent memory** or expose records through a **memory-mapped file**, then apply an **eviction policy** to keep its active **working set** small. Runtime defenses target a **use-after-free**, **double free**, or **dangling pointer**: a **guard page**, **red zone**, **address sanitizer**, **memory sanitizer**, and **heap quarantine** make those failures visible. Under **memory pressure**, the **out-of-memory killer** may terminate a reclaimable process rather than let the whole system collapse.

**Bản dịch tiếng Việt:** Bảo trì flash loại **bad block**, chạy **scrub cycle** và theo dõi **retention loss** quanh từng **erase block** và **page program**. **overprovisioning** chừa chỗ để thay và refresh. Database có thể đặt journal trong **persistent memory** hoặc mở record qua **memory-mapped file**, rồi dùng **eviction policy** để giữ **working set** hoạt động nhỏ. Cơ chế runtime nhắm vào **use-after-free**, **double free** và **dangling pointer**: **guard page**, **red zone**, **address sanitizer**, **memory sanitizer** và **heap quarantine** làm các lỗi này lộ ra. Khi có **memory pressure**, **out-of-memory killer** có thể dừng process có thể thu hồi thay vì để cả hệ thống sập.
