# C2 Vocabulary — Memory allocation and garbage collection

This lesson follows managed-memory runtime behavior from heap allocation and object lifetime through tracing, generational collection, barriers, safepoints, and concurrent collection.

Flow: **heap allocator → allocation fast path → bump-pointer allocation → free list → slab allocator → object lifetime → tracing collector → root set → reachability → mark-and-sweep → mark-and-compact → copying collector → generational collection → young generation → old generation → write barrier → card table → safepoint → stop-the-world pause → concurrent marking**.

## 1. heap allocator /hiːp ˈæləˌkeɪtər/
**Part of speech:** noun
**Core meaning (English):** runtime machinery that obtains and manages memory regions used for dynamically allocated objects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ quản lý vùng heap; nó quyết định object mới sẽ lấy memory ở đâu và cách tái sử dụng vùng đã free.
**Grammar & collocations:** `general-purpose heap allocator` — allocator tổng quát; `allocator metadata` — metadata của allocator.
**Examples:** `The heap allocator grouped small objects separately from very large allocations.` → Heap allocator tách small object khỏi allocation rất lớn.
**Liên kết tiếng Hàn:** `힙 할당기`.

## 2. allocation fast path /ˌæləˈkeɪʃən fæst pæθ/
**Part of speech:** noun
**Core meaning (English):** the common low-overhead path used when memory allocation can be satisfied without expensive runtime work or synchronization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường cấp memory nhanh nhất cho case phổ biến; runtime cố để object nhỏ được allocate bằng vài operation đơn giản.
**Grammar & collocations:** `fast-path allocation` — allocation theo fast path; `fall back to the slow path` — rơi về slow path.
**Examples:** `Most short-lived objects stayed on the allocation fast path and required no global lock.` → Hầu hết object ngắn hạn được allocate qua fast path và không cần global lock.
**Liên kết tiếng Hàn:** `할당 패스트 패스`.

## 3. bump-pointer allocation /bʌmp ˈpɔɪntər ˌæləˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** allocation by advancing a pointer through a contiguous free region, making each allocation extremely cheap.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** có một con trỏ chỉ vị trí trống tiếp theo; allocate object mới bằng cách “đẩy” con trỏ tiến lên.
**Grammar & collocations:** `bump pointer` — con trỏ bump; `contiguous allocation region` — vùng cấp phát liên tục.
**Examples:** `The young generation used bump-pointer allocation because newly created objects occupied contiguous memory.` → Young generation dùng bump-pointer allocation vì object mới nằm trong memory liên tục.
**Liên kết tiếng Hàn:** `범프 포인터 할당`.

## 4. free list /friː lɪst/
**Part of speech:** noun
**Core meaning (English):** a data structure that tracks reusable free memory blocks available for future allocations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** danh sách các “lỗ trống” có thể dùng lại sau khi object bị free.
**Grammar & collocations:** `free-list bin` — nhóm block cùng size; `coalesce free blocks` — gộp block trống.
**Examples:** `The allocator searched a size-appropriate free list before requesting more memory from the operating system.` → Allocator tìm trong free list phù hợp trước khi xin thêm memory từ OS.
**Liên kết tiếng Hàn:** `프리 리스트`, `가용 블록 목록`.

## 5. slab allocator /slæb ˈæləˌkeɪtər/
**Part of speech:** noun
**Core meaning (English):** an allocator that manages caches of fixed-size objects, reducing fragmentation and repeated initialization costs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuẩn bị sẵn các “khay” object cùng loại/kích thước để tái sử dụng rất nhanh.
**Grammar & collocations:** `slab cache` — cache slab; `object cache` — cache object cố định.
**Examples:** `The kernel used a slab allocator for frequently created metadata structures.` → Kernel dùng slab allocator cho metadata structure được tạo thường xuyên.
**Liên kết tiếng Hàn:** `슬랩 할당기`.

## 6. object lifetime /ˈɑbdʒɛkt ˈlaɪfˌtaɪm/
**Part of speech:** noun
**Core meaning (English):** the interval during which an allocated object remains reachable or otherwise considered alive by the runtime.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tuổi đời của object từ lúc tạo tới lúc runtime xác định không còn cần nữa.
**Grammar & collocations:** `short-lived object` — object sống ngắn; `lifetime distribution` — phân bố lifetime.
**Examples:** `The runtime optimized for the observation that most object lifetimes were very short.` → Runtime tối ưu dựa trên việc phần lớn object có lifetime rất ngắn.
**Liên kết tiếng Hàn:** `객체 수명`.

## 7. tracing collector /ˈtreɪsɪŋ kəˈlɛktər/
**Part of speech:** noun
**Core meaning (English):** a garbage collector that discovers live objects by tracing references outward from a set of known roots.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bắt đầu từ root rồi đi theo reference; object nào không được trace tới thì có thể coi là garbage.
**Grammar & collocations:** `trace the object graph` — trace object graph; `tracing phase` — phase tracing.
**Examples:** `The tracing collector followed references from thread stacks into the heap.` → Tracing collector đi theo reference từ thread stack vào heap.
**Liên kết tiếng Hàn:** `추적형 가비지 컬렉터`.

## 8. root set /ruːt sɛt/
**Part of speech:** noun
**Core meaning (English):** the collection of references treated as immediately live starting points for a tracing garbage collector.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các điểm bắt đầu chắc chắn còn sống, như local variable trên stack, static reference hoặc runtime handle.
**Grammar & collocations:** `GC root` — root của GC; `scan the root set` — scan root set.
**Examples:** `The collector scanned the root set before traversing objects reachable from those references.` → Collector scan root set trước khi traverse object reachable từ chúng.
**Liên kết tiếng Hàn:** `루트 집합`, `GC 루트`.

## 9. reachability /ˌriːtʃəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the property of an object being accessible through a chain of references from a live root.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** object còn “đường đi tới” từ root thì vẫn sống; mất mọi đường đi thì trở thành candidate cho GC.
**Grammar & collocations:** `object reachability` — reachability object; `reachable object` — object còn reachable.
**Examples:** `Reachability, not whether a variable once pointed to the object, determines whether tracing GC keeps it alive.` → Reachability chứ không phải việc từng có variable trỏ tới quyết định GC giữ object sống hay không.
**Liên kết tiếng Hàn:** `도달 가능성`.

## 10. mark-and-sweep /mɑrk ænd swiːp/
**Part of speech:** noun
**Core meaning (English):** a collection algorithm that first marks reachable objects and then sweeps the heap to reclaim unmarked memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bước 1 đánh dấu object sống; bước 2 quét heap và thu hồi phần không được đánh dấu.
**Grammar & collocations:** `mark phase` — phase mark; `sweep phase` — phase sweep.
**Examples:** `Mark-and-sweep reclaimed unreachable objects without moving the surviving ones.` → Mark-and-sweep reclaim object unreachable mà không di chuyển survivor.
**Liên kết tiếng Hàn:** `마크 앤 스위프`.

## 11. mark-and-compact /mɑrk ænd kəmˈpækt/
**Part of speech:** noun
**Core meaning (English):** a collection strategy that identifies live objects and moves them together to eliminate fragmented free space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đánh dấu object sống rồi dồn chúng sát lại, tạo một vùng free lớn liên tục.
**Grammar & collocations:** `compaction phase` — phase compact; `compact the heap` — dồn heap.
**Examples:** `Mark-and-compact reduced fragmentation at the cost of moving live objects.` → Mark-and-compact giảm fragmentation nhưng phải move object sống.
**Liên kết tiếng Hàn:** `마크 앤 컴팩트`.

## 12. copying collector /ˈkɑpiɪŋ kəˈlɛktər/
**Part of speech:** noun
**Core meaning (English):** a garbage collector that copies live objects from one memory region into another and discards the old region wholesale.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** copy survivor sang vùng mới rồi bỏ cả vùng cũ, rất phù hợp khi phần lớn object chết nhanh.
**Grammar & collocations:** `copying collection` — collection kiểu copy; `to-space` / `from-space` — vùng đích / nguồn.
**Examples:** `The copying collector moved the few surviving young objects into a fresh region.` → Copying collector chuyển số ít young object sống sang vùng mới.
**Liên kết tiếng Hàn:** `복사형 가비지 컬렉터`.

## 13. generational collection /ˌdʒɛnəˈreɪʃənəl kəˈlɛkʃən/
**Part of speech:** noun
**Core meaning (English):** garbage collection that separates objects by age so recently allocated objects can be collected more frequently than long-lived objects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia heap theo “tuổi”; vì phần lớn object chết trẻ nên collect vùng trẻ thường xuyên sẽ hiệu quả hơn.
**Grammar & collocations:** `generational hypothesis` — giả thuyết phần lớn object chết trẻ; `minor collection` — GC vùng trẻ.
**Examples:** `Generational collection focused frequent work on newly allocated objects while scanning older objects less often.` → Generational collection tập trung GC thường xuyên vào object mới và scan object già ít hơn.
**Liên kết tiếng Hàn:** `세대별 가비지 컬렉션`.

## 14. young generation /jʌŋ ˌdʒɛnəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the memory region where newly allocated objects begin life in a generational garbage collector.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “khu trẻ” của heap; object mới vào đây và phần lớn sẽ chết trước khi được promote.
**Grammar & collocations:** `young-generation collection` — GC young gen; `nursery` — tên khác cho vùng object mới.
**Examples:** `The young generation filled quickly because the application allocated many temporary request objects.` → Young generation đầy nhanh vì application tạo nhiều temporary object.
**Liên kết tiếng Hàn:** `젊은 세대`, `영 제너레이션`.

## 15. old generation /oʊld ˌdʒɛnəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** a generational-GC region containing objects that have survived long enough to be treated as relatively long-lived.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** object sống qua nhiều collection được “thăng cấp” sang vùng già và thường collect ít hơn.
**Grammar & collocations:** `old-generation occupancy` — mức đầy old gen; `promote an object` — promote object.
**Examples:** `A cache retaining many objects caused old-generation occupancy to rise steadily.` → Cache giữ nhiều object làm old generation tăng dần.
**Liên kết tiếng Hàn:** `구세대`, `올드 제너레이션`.

## 16. write barrier /raɪt ˈbæriər/
**Part of speech:** noun
**Core meaning (English):** runtime code executed when certain references are written so the garbage collector can maintain metadata needed for correctness.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi khi reference thay đổi, runtime ghi thêm “dấu vết” để GC biết quan hệ nào cần chú ý.
**Grammar & collocations:** `reference-write barrier` — barrier khi ghi reference; `barrier overhead` — overhead barrier.
**Examples:** `The write barrier recorded references from old objects into the young generation.` → Write barrier ghi nhận reference từ old object sang young generation.
**Liên kết tiếng Hàn:** `쓰기 장벽`.

## 17. card table /kɑrd ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** a compact metadata table that divides heap memory into regions and records which regions may contain references relevant to a collector.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản đồ heap chia thành các “card”; card bị dirty nghĩa là vùng đó có thể chứa reference mới cần scan.
**Grammar & collocations:** `dirty card` — card đã đánh dấu; `card-table scan` — scan card table.
**Examples:** `The collector scanned only dirty entries in the card table instead of the entire old generation.` → Collector chỉ scan dirty card thay vì toàn old generation.
**Liên kết tiếng Hàn:** `카드 테이블`.

## 18. safepoint /ˈseɪfˌpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a program execution state where the runtime has enough precise information to pause threads safely for operations such as garbage collection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm runtime có thể dừng thread mà vẫn biết chính xác reference/object state nằm ở đâu.
**Grammar & collocations:** `reach a safepoint` — tới safepoint; `safepoint polling` — kiểm tra safepoint.
**Examples:** `The runtime waited for all application threads to reach a safepoint before relocating objects.` → Runtime chờ mọi application thread tới safepoint trước khi move object.
**Liên kết tiếng Hàn:** `세이프포인트`, `안전 지점`.

## 19. stop-the-world pause /stɑp ðə wɝld pɔz/
**Part of speech:** noun
**Core meaning (English):** an interval during which application threads are paused so the runtime can perform a globally coordinated operation such as part of garbage collection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** toàn bộ application bị “đóng băng” tạm thời để GC làm việc cần state ổn định.
**Grammar & collocations:** `pause time` — thời gian pause; `reduce stop-the-world time` — giảm thời gian dừng toàn hệ thống.
**Examples:** `A large heap made the stop-the-world pause visible in tail-latency measurements.` → Heap lớn làm stop-the-world pause hiện rõ trong tail latency.
**Liên kết tiếng Hàn:** `스톱 더 월드 일시정지`.

## 20. concurrent marking /kənˈkɝənt ˈmɑrkɪŋ/
**Part of speech:** noun
**Core meaning (English):** tracing and marking live objects while application threads continue running, with barriers used to account for graph changes during the process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** GC mark object sống song song với application thay vì pause toàn bộ trong suốt phase mark.
**Grammar & collocations:** `concurrent mark phase` — phase mark concurrent; `marking cycle` — chu kỳ marking.
**Examples:** `Concurrent marking shortened pause times but required additional write-barrier bookkeeping.` → Concurrent marking giảm pause time nhưng cần thêm bookkeeping từ write barrier.
**Liên kết tiếng Hàn:** `동시 마킹`.

## Review in context

A managed runtime relies on a **heap allocator** whose **allocation fast path** may use **bump-pointer allocation**, while reusable blocks can be tracked in a **free list** or specialized **slab allocator**. Because **object lifetime** varies, a **tracing collector** begins from the **root set** and determines **reachability** across the object graph. A basic collector may use **mark-and-sweep**, while **mark-and-compact** removes fragmentation and a **copying collector** efficiently moves survivors. **Generational collection** exploits the different behavior of the **young generation** and **old generation**. A **write barrier** and **card table** track important cross-generation references. When global coordination is required, threads reach a **safepoint**, potentially creating a **stop-the-world pause**. Modern collectors reduce that pause by doing work such as **concurrent marking** while the application continues to run.

**Bản dịch tiếng Việt:** Managed runtime dựa vào **heap allocator**, trong đó **allocation fast path** có thể dùng **bump-pointer allocation**, còn block có thể tái sử dụng được quản lý bằng **free list** hoặc **slab allocator** chuyên dụng. Vì **object lifetime** khác nhau, **tracing collector** bắt đầu từ **root set** và xác định **reachability** trong object graph. Collector cơ bản có thể dùng **mark-and-sweep**; **mark-and-compact** giảm fragmentation, còn **copying collector** chuyển survivor hiệu quả. **Generational collection** tận dụng sự khác biệt giữa **young generation** và **old generation**. **Write barrier** cùng **card table** theo dõi reference quan trọng giữa các generation. Khi cần coordination toàn cục, thread tới **safepoint**, có thể tạo **stop-the-world pause**. Collector hiện đại giảm pause bằng cách làm việc như **concurrent marking** trong khi application vẫn chạy.