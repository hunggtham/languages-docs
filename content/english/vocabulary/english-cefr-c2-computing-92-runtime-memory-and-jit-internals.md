# C2 Vocabulary — Runtime memory and JIT internals

This lesson follows managed-runtime execution from generational collection and barriers through heap layout, safepoints, and speculative optimization.

Flow: **generational garbage collection → tri-color invariant → read barrier → card marking → remembered set → concurrent collector → incremental collector → compacting collector → heap fragmentation → object promotion → survivor space → stack map → safepoint poll → deoptimization trap → runtime type feedback → inline cache → hidden class → register spill → call-site polymorphism → pointer compression**.

## 1. generational garbage collection /ˌdʒenəˈreɪʃənəl ˈɡɑːrbɪdʒ kəˈlekʃən/
**Part of speech:** noun
**Core meaning (English):** collecting young objects frequently and older objects less often based on the observation that most objects die young.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thu object trẻ thường xuyên, object già ít hơn vì object thường chết sớm.
**Grammar & collocations:** `generational-garbage-collection nursery` — nursery; `promote a surviving object` — thăng cấp.
**Examples:** `Generational garbage collection reclaimed short-lived request objects without scanning the old heap.` → Collection thế hệ thu object ngắn hạn.
**Liên kết tiếng Hàn:** `세대별 가비지 컬렉션`.

## 2. tri-color invariant /ˌtraɪ ˈkʌlər ɪnˈveəriənt/
**Part of speech:** noun
**Core meaning (English):** a tracing invariant that classifies objects as white, gray, or black while preserving reachability during collection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** invariant phân object trắng/xám/đen để giữ reachability.
**Grammar & collocations:** `tri-color-invariant violation` — violation; `shade an object gray` — tô màu.
**Examples:** `The write barrier preserved the tri-color invariant when a black object gained a new reference.` → Barrier giữ invariant khi object đen có reference mới.
**Liên kết tiếng Hàn:** `삼색 불변식`.

## 3. read barrier /riːd ˈbæriər/
**Part of speech:** noun
**Core meaning (English):** a check or transformation performed when a reference is read during concurrent or relocating collection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** check khi đọc reference trong collection đồng thời hoặc di chuyển.
**Grammar & collocations:** `read-barrier slow path` — path; `forward a relocated reference` — chuyển tiếp.
**Examples:** `The read barrier redirected the mutator to the object's new address.` → Barrier chuyển tới địa chỉ mới.
**Liên kết tiếng Hàn:** `읽기 장벽`.

## 4. card marking /kɑːrd ˈmɑːrkɪŋ/
**Part of speech:** noun
**Core meaning (English):** recording which coarse memory regions may contain references that require rescanning.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi vùng memory thô có reference cần scan lại.
**Grammar & collocations:** `card-marking table` — table; `dirty a heap card` — đánh dấu.
**Examples:** `Card marking limited the old-generation scan to regions changed by the mutator.` → Marking giới hạn scan vùng đổi.
**Liên kết tiếng Hàn:** `카드 마킹`.

## 5. remembered set /rɪˈmembərd set/
**Part of speech:** noun
**Core meaning (English):** a collection of references from one heap region to another that a collector must remember.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập reference giữa vùng heap cần collector ghi nhớ.
**Grammar & collocations:** `remembered-set entry` — entry; `track an intergenerational pointer` — theo dõi.
**Examples:** `The remembered set let a young-generation collection avoid scanning the entire old heap.` → Set giúp tránh scan heap già.
**Liên kết tiếng Hàn:** `기억된 집합`.

## 6. concurrent collector /kənˈkɜːrənt kəˈlektər/
**Part of speech:** noun
**Core meaning (English):** a garbage collector that performs substantial tracing or reclamation while application threads continue running.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** collector chạy song song khi application vẫn hoạt động.
**Grammar & collocations:** `concurrent-collector phase` — phase; `coordinate with mutators` — phối hợp.
**Examples:** `The concurrent collector reduced pause time but required careful synchronization with application threads.` → Collector giảm pause nhưng cần sync.
**Liên kết tiếng Hàn:** `동시 수집기`.

## 7. incremental collector /ˌɪnkrəˈmentəl kəˈlektər/
**Part of speech:** noun
**Core meaning (English):** a collector that divides tracing or reclamation into smaller pieces across multiple pauses or slices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia collection thành nhiều lát nhỏ qua các pause.
**Grammar & collocations:** `incremental-collector slice` — slice; `bound a pause interval` — giới hạn.
**Examples:** `The incremental collector kept each pause below the interactive latency target.` → Collector giữ pause thấp.
**Liên kết tiếng Hàn:** `증분 수집기`.

## 8. compacting collector /kəmˈpæktɪŋ kəˈlektər/
**Part of speech:** noun
**Core meaning (English):** a collector that moves live objects together to reduce holes and improve allocation locality.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** collector di chuyển object sống để giảm lỗ và tăng locality.
**Grammar & collocations:** `compacting-collector pass` — pass; `slide live objects` — trượt.
**Examples:** `The compacting collector restored contiguous space after a burst of variable-size allocations.` → Collector khôi phục space liền.
**Liên kết tiếng Hàn:** `압축 수집기`.

## 9. heap fragmentation /hiːp ˌfræɡmənˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** the condition in which free memory is split into holes too small or scattered for requested allocations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory trống bị chia thành lỗ nhỏ, khó cấp phát.
**Grammar & collocations:** `heap-fragmentation metric` — metric; `coalesce free blocks` — gộp.
**Examples:** `Heap fragmentation caused a large allocation to fail despite sufficient total free memory.` → Fragmentation làm allocation lớn fail.
**Liên kết tiếng Hàn:** `힙 단편화`.

## 10. object promotion /ˈɒbdʒɪkt prəˈmoʊʃən/
**Part of speech:** noun
**Core meaning (English):** moving an object from a young collection region to an older region because it survived enough collections.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển object sống lâu từ vùng trẻ sang vùng già.
**Grammar & collocations:** `object-promotion threshold` — threshold; `promote a survivor` — thăng cấp.
**Examples:** `Object promotion filled the old generation after a cache retained many entries.` → Promotion làm đầy vùng già.
**Liên kết tiếng Hàn:** `객체 승격`.

## 11. survivor space /sərˈvaɪvər speɪs/
**Part of speech:** noun
**Core meaning (English):** a young-heap region that temporarily holds objects surviving a minor collection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng heap trẻ giữ tạm object sống sau minor collection.
**Grammar & collocations:** `survivor-space overflow` — overflow; `copy a live object` — copy.
**Examples:** `Survivor space overflow triggered earlier promotion into the old generation.` → Overflow làm promotion sớm.
**Liên kết tiếng Hàn:** `생존자 공간`.

## 12. stack map /stæk mæp/
**Part of speech:** noun
**Core meaning (English):** metadata identifying which stack locations contain live references at a particular machine-code point.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata chỉ vị trí stack chứa reference sống ở machine point.
**Grammar & collocations:** `stack-map entry` — entry; `enumerate live roots` — liệt kê.
**Examples:** `The stack map let the collector find references inside optimized native frames.` → Map giúp tìm reference trong frame tối ưu.
**Liên kết tiếng Hàn:** `스택 맵`.

## 13. safepoint poll /ˈseɪfˌpɔɪnt poʊl/
**Part of speech:** noun
**Core meaning (English):** a generated check at which a running thread can safely pause for runtime coordination or collection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** check nơi thread có thể pause an toàn cho runtime.
**Grammar & collocations:** `safepoint-poll instruction` — instruction; `request a thread stop` — yêu cầu.
**Examples:** `The safepoint poll allowed the runtime to stop a long-running loop for inspection.` → Poll cho phép dừng loop.
**Liên kết tiếng Hàn:** `세이프포인트 폴`.

## 14. deoptimization trap /diːˌɒptɪməzaɪˈzeɪʃən træp/
**Part of speech:** noun
**Core meaning (English):** a controlled exit from speculative machine code back to a less optimized representation when an assumption fails.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thoát code speculative về representation ít tối ưu khi assumption sai.
**Grammar & collocations:** `deoptimization-trap handler` — handler; `reconstruct interpreter state` — khôi phục.
**Examples:** `The deoptimization trap fired when a value changed from an integer to an object.` → Trap chạy khi type đổi.
**Liên kết tiếng Hàn:** `탈최적화 트랩`.

## 15. runtime type feedback /ˈrʌntaɪm taɪp ˈfiːdbæk/
**Part of speech:** noun
**Core meaning (English):** execution observations about the types and call targets encountered by a running program.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** observation runtime về type và target call thực tế.
**Grammar & collocations:** `runtime-type-feedback profile` — profile; `specialize a hot path` — chuyên biệt.
**Examples:** `Runtime type feedback showed that the hot loop almost always received doubles.` → Feedback cho thấy loop nhận double.
**Liên kết tiếng Hàn:** `런타임 타입 피드백`.

## 16. inline cache /ˈɪnlaɪn kæʃ/
**Part of speech:** noun
**Core meaning (English):** a call-site cache that remembers a receiver type and its previously selected method or property location.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cache tại call-site nhớ type và method/property đã chọn.
**Grammar & collocations:** `inline-cache miss` — miss; `specialize a property access` — chuyên biệt.
**Examples:** `The inline cache turned repeated property lookups into a short guarded sequence.` → Cache rút lookup thành sequence ngắn.
**Liên kết tiếng Hàn:** `인라인 캐시`.

## 17. hidden class /ˈhɪdən klæs/
**Part of speech:** noun
**Core meaning (English):** an internal object-layout descriptor used to optimize property access for objects with similar shapes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** descriptor layout nội bộ tối ưu object có shape giống nhau.
**Grammar & collocations:** `hidden-class transition` — transition; `share an object shape` — chia sẻ.
**Examples:** `The hidden class changed when the program added a property in a different order.` → Class đổi khi thêm property khác thứ tự.
**Liên kết tiếng Hàn:** `숨은 클래스`.

## 18. register spill /ˈredʒɪstər spɪl/
**Part of speech:** noun
**Core meaning (English):** storing a temporary value in memory because the available machine registers are exhausted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi value tạm ra memory khi hết register.
**Grammar & collocations:** `register-spill cost` — cost; `reload a spilled value` — nạp lại.
**Examples:** `Register spill increased the loop's latency after the compiler inlined another function.` → Spill làm loop chậm.
**Liên kết tiếng Hàn:** `레지스터 스필`.

## 19. call-site polymorphism /ˈkɔːl saɪt ˌpɒlɪˈmɔːrfɪzəm/
**Part of speech:** noun
**Core meaning (English):** variation in the receiver types or target methods observed at one dynamic call site.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một call-site gặp nhiều type hoặc method khác nhau.
**Grammar & collocations:** `call-site-polymorphism profile` — profile; `guard multiple receiver shapes` — bảo vệ.
**Examples:** `Call-site polymorphism prevented the JIT from using one unconditional method target.` → Polymorphism ngăn target cố định.
**Liên kết tiếng Hàn:** `호출 지점 다형성`.

## 20. pointer compression /ˈpɔɪntər kəmˈpreʃən/
**Part of speech:** noun
**Core meaning (English):** representing heap references in fewer bits by exploiting a constrained address range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn pointer ít bit nhờ address range giới hạn.
**Grammar & collocations:** `pointer-compression base` — base; `decode a compressed reference` — giải mã.
**Examples:** `Pointer compression reduced object-header size and improved cache locality.` → Compression giảm header và tăng locality.
**Liên kết tiếng Hàn:** `포인터 압축`.

## Review in context

**Generational garbage collection** preserves a **tri-color invariant** with a **read barrier**, **card marking**, and a **remembered set**. A **concurrent collector**, **incremental collector**, and **compacting collector** address **heap fragmentation**, **object promotion**, and **survivor space**. A **stack map** and **safepoint poll** support a **deoptimization trap**; **runtime type feedback**, an **inline cache**, a **hidden class**, **register spill**, **call-site polymorphism**, and **pointer compression** shape JIT performance.

**Bản dịch tiếng Việt:** **Generational garbage collection** giữ **tri-color invariant** bằng **read barrier**, **card marking** và **remembered set**. **Concurrent collector**, **incremental collector** và **compacting collector** xử lý **heap fragmentation**, **object promotion** và **survivor space**. **Stack map** và **safepoint poll** hỗ trợ **deoptimization trap**; **runtime type feedback**, **inline cache**, **hidden class**, **register spill**, **call-site polymorphism** và **pointer compression** định hình hiệu năng JIT.
