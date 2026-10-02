# C2 Vocabulary — JIT optimization and runtime representation

This lesson follows a hot dynamic call from object layout through speculative optimization, profiling, deoptimization, and executable memory.

Flow: **object header → vtable pointer → scalar replacement → bounds check elimination → deoptimization guard → baseline compiler → hot path → monomorphic call site → polymorphic inline cache → guarded optimization → runtime stub → bailout path → profiling counter → heap snapshot → memory leak → weak reference → finalizer queue → on-stack replacement → code cache → jit hardening**.

## 1. object header /ˈɒbdʒɪkt ˈhedər/
**Part of speech:** noun
**Core meaning (English):** metadata stored with a runtime object, often containing type, size, or garbage-collection information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata đi cùng object runtime, thường có type, size hoặc GC data.
**Grammar & collocations:** `object-header layout` — layout; `read a type tag` — đọc.
**Examples:** `The collector inspected the object header before tracing the payload fields.` → Collector đọc header trước khi trace field.
**Liên kết tiếng Hàn:** `객체 헤더`.

## 2. vtable pointer /ˈviːteɪbəl ˈpɔɪntər/
**Part of speech:** noun
**Core meaning (English):** a pointer from an object to a table of virtual method addresses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pointer từ object tới table chứa địa chỉ virtual method.
**Grammar & collocations:** `vtable-pointer load` — load; `dispatch a virtual method` — dispatch.
**Examples:** `The runtime followed the vtable pointer to dispatch the overridden method.` → Runtime theo pointer để dispatch method override.
**Liên kết tiếng Hàn:** `가상 함수 테이블 포인터`.

## 3. scalar replacement /ˈskeɪlər rɪˈpleɪsmənt/
**Part of speech:** noun
**Core meaning (English):** replacing a short-lived object with separate scalar values held directly in registers or locals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay object ngắn hạn bằng các value scalar trong register/local.
**Grammar & collocations:** `scalar-replacement candidate` — candidate; `eliminate an allocation` — xóa.
**Examples:** `Scalar replacement removed the temporary pair allocated inside the loop.` → Replacement xóa pair tạm trong loop.
**Liên kết tiếng Hàn:** `스칼라 치환`.

## 4. bounds check elimination /baʊndz tʃek ɪˌlɪməˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** removing repeated range checks after proving that an index remains valid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xóa check range lặp sau khi chứng minh index luôn hợp lệ.
**Grammar & collocations:** `bounds-check-elimination proof` — proof; `hoist a range check` — đưa lên.
**Examples:** `Bounds check elimination made the verified inner loop cheaper.` → Elimination làm loop trong đã verify rẻ hơn.
**Liên kết tiếng Hàn:** `경계 검사 제거`.

## 5. deoptimization guard /ˌdiːɒptɪmaɪˈzeɪʃən ɡɑːrd/
**Part of speech:** noun
**Core meaning (English):** a runtime condition that checks whether an optimization assumption still holds.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện runtime kiểm tra assumption tối ưu còn đúng không.
**Grammar & collocations:** `deoptimization-guard failure` — failure; `bail out to the interpreter` — thoát.
**Examples:** `The deoptimization guard failed when a value changed from an integer to an object.` → Guard fail khi value đổi từ integer sang object.
**Liên kết tiếng Hàn:** `탈최적화 가드`.

## 6. baseline compiler /ˈbeɪslaɪn kəmˈpaɪlər/
**Part of speech:** noun
**Core meaning (English):** a fast compiler that produces usable code before expensive optimization begins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** compiler nhanh sinh code chạy được trước khi tối ưu sâu.
**Grammar & collocations:** `baseline-compiler output` — output; `compile a function eagerly` — compile.
**Examples:** `The baseline compiler served the function while the optimizing tier collected evidence.` → Compiler baseline chạy function khi tier tối ưu thu evidence.
**Liên kết tiếng Hàn:** `기준 컴파일러`.

## 7. hot path /hɒt pɑːθ/
**Part of speech:** noun
**Core meaning (English):** a frequently executed route that offers a strong target for optimization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường chạy thường xuyên, mục tiêu tốt cho optimization.
**Grammar & collocations:** `hot-path specialization` — chuyên biệt; `identify a dominant branch` — nhận diện.
**Examples:** `The profiler identified the request loop as the hot path.` → Profiler xác định loop request là hot path.
**Liên kết tiếng Hàn:** `핫 패스`.

## 8. monomorphic call site /ˌmɒnəˈmɔːrfɪk kɔːl saɪt/
**Part of speech:** noun
**Core meaning (English):** a call location that has observed one receiver or target type.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vị trí call chỉ thấy một type receiver/target.
**Grammar & collocations:** `monomorphic-call-site assumption` — assumption; `inline a receiver method` — inline.
**Examples:** `The monomorphic call site let the JIT inline the common implementation.` → Site đơn hình giúp JIT inline implementation thường gặp.
**Liên kết tiếng Hàn:** `단형 호출 지점`.

## 9. polymorphic inline cache /ˌpɒlɪˈmɔːrfɪk ˈɪnlaɪn kæʃ/
**Part of speech:** noun
**Core meaning (English):** a cache storing several observed receiver types and their dispatch targets at one call site.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cache giữ nhiều receiver type và target dispatch tại một call site.
**Grammar & collocations:** `polymorphic-inline-cache entry` — entry; `guard a receiver type` — guard.
**Examples:** `The polymorphic inline cache handled the three message classes seen in production.` → Cache xử lý ba message class trong production.
**Liên kết tiếng Hàn:** `다형 인라인 캐시`.

## 10. guarded optimization /ˈɡɑːrdɪd ˌɒptɪmaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** an optimization that is valid only while explicit runtime assumptions remain true.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tối ưu chỉ hợp lệ khi assumption runtime còn đúng.
**Grammar & collocations:** `guarded-optimization version` — version; `check a class identity` — kiểm tra.
**Examples:** `Guarded optimization removed the virtual call under a stable class assumption.` → Optimization bỏ virtual call khi class ổn định.
**Liên kết tiếng Hàn:** `가드된 최적화`.

## 11. runtime stub /ˈrʌntaɪm stʌb/
**Part of speech:** noun
**Core meaning (English):** a small runtime routine used for a common operation such as allocation, dispatch, or a slow fallback.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** routine runtime nhỏ cho allocation, dispatch hoặc fallback chậm.
**Grammar & collocations:** `runtime-stub call` — call; `enter an allocation helper` — vào.
**Examples:** `The generated code jumped to a runtime stub when the fast allocation path failed.` → Code nhảy stub khi allocation nhanh fail.
**Liên kết tiếng Hàn:** `런타임 스텁`.

## 12. bailout path /ˈbeɪlaʊt pɑːθ/
**Part of speech:** noun
**Core meaning (English):** a fallback route taken when optimized code can no longer continue safely.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường fallback khi code tối ưu không thể chạy an toàn nữa.
**Grammar & collocations:** `bailout-path metadata` — metadata; `restore an interpreter frame` — khôi phục.
**Examples:** `The bailout path reconstructed the interpreter state after a failed type guard.` → Path khôi phục state interpreter sau guard type fail.
**Liên kết tiếng Hàn:** `바이아웃 경로`.

## 13. profiling counter /ˈproʊfaɪlɪŋ ˈkaʊntər/
**Part of speech:** noun
**Core meaning (English):** a counter recording execution frequency or behavior to guide dynamic optimization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** counter ghi tần suất hoặc behavior để dẫn optimization động.
**Grammar & collocations:** `profiling-counter threshold` — ngưỡng; `increment a call count` — tăng.
**Examples:** `The profiling counter crossed its threshold and triggered optimized compilation.` → Counter vượt ngưỡng và kích hoạt compile tối ưu.
**Liên kết tiếng Hàn:** `프로파일링 카운터`.

## 14. heap snapshot /hiːp ˈsnæpʃɒt/
**Part of speech:** noun
**Core meaning (English):** a captured description of allocated objects and references at a particular time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ảnh chụp object đã cấp phát và reference tại một thời điểm.
**Grammar & collocations:** `heap-snapshot dominator` — dominator; `compare retained objects` — so.
**Examples:** `The heap snapshot showed that one cache retained millions of obsolete entries.` → Snapshot cho thấy cache giữ entry cũ rất lớn.
**Liên kết tiếng Hàn:** `힙 스냅샷`.

## 15. memory leak /ˈmeməri liːk/
**Part of speech:** noun
**Core meaning (English):** retained memory that is no longer useful but remains unavailable for reuse.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory không còn hữu ích nhưng vẫn bị giữ, không tái sử dụng được.
**Grammar & collocations:** `memory-leak regression` — regression; `retain an unreachable resource` — giữ.
**Examples:** `The long-running worker developed a memory leak after each failed upload.` → Worker bị leak sau mỗi upload fail.
**Liên kết tiếng Hàn:** `메모리 누수`.

## 16. weak reference /wiːk ˈrefərəns/
**Part of speech:** noun
**Core meaning (English):** a reference that does not by itself keep an object alive for garbage collection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reference không tự giữ object sống đối với GC.
**Grammar & collocations:** `weak-reference table` — table; `observe a collected key` — quan sát.
**Examples:** `The cache used a weak reference so unused values could be reclaimed.` → Cache dùng weak reference để value không dùng được thu hồi.
**Liên kết tiếng Hàn:** `약한 참조`.

## 17. finalizer queue /ˈfaɪnəlaɪzər kjuː/
**Part of speech:** noun
**Core meaning (English):** a queue of objects awaiting runtime cleanup callbacks after becoming unreachable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** queue object chờ callback cleanup sau khi không còn reach.
**Grammar & collocations:** `finalizer-queue backlog` — backlog; `drain a cleanup callback` — xử lý.
**Examples:** `The finalizer queue grew because cleanup callbacks performed slow network work.` → Queue phình vì callback cleanup gọi network chậm.
**Liên kết tiếng Hàn:** `파이널라이저 큐`.

## 18. on-stack replacement /ɒn stæk rɪˈpleɪsmənt/
**Part of speech:** noun
**Core meaning (English):** replacing currently running baseline code with optimized code without waiting for the function to return.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay code baseline đang chạy bằng code tối ưu ngay giữa function.
**Grammar & collocations:** `on-stack-replacement point` — điểm; `transfer live locals` — chuyển.
**Examples:** `On-stack replacement switched the hot loop to optimized code while it was still active.` → OSR đổi loop nóng khi còn đang chạy.
**Liên kết tiếng Hàn:** `스택 상 교체`.

## 19. code cache /koʊd kæʃ/
**Part of speech:** noun
**Core meaning (English):** memory reserved for compiled machine code that can be reused by the runtime.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory dành cho machine code compiled để runtime tái sử dụng.
**Grammar & collocations:** `code-cache eviction` — eviction; `flush stale compiled code` — xóa.
**Examples:** `The code cache evicted cold methods to make room for a newly optimized loop.` → Cache xóa method lạnh để chừa chỗ loop mới.
**Liên kết tiếng Hàn:** `코드 캐시`.

## 20. jit hardening /dʒɪt ˈhɑːrdənɪŋ/
**Part of speech:** noun
**Core meaning (English):** security measures that protect just-in-time compilation and generated executable memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biện pháp bảo vệ JIT và memory executable được sinh lúc chạy.
**Grammar & collocations:** `JIT-hardening policy` — policy; `restrict writable executable pages` — hạn chế.
**Examples:** `JIT hardening limited writable executable pages and validated generated code.` → Hardening hạn chế page vừa ghi vừa chạy và validate code.
**Liên kết tiếng Hàn:** `JIT 강화`.

## Review in context

An **object header** and **vtable pointer** describe a runtime object; **scalar replacement** can remove its allocation, and **bounds check elimination** removes proven checks. A **deoptimization guard** protects speculative code compiled by a **baseline compiler** as a **hot path** emerges. A **monomorphic call site** may use a **polymorphic inline cache**, while **guarded optimization** falls back through a **runtime stub** and **bailout path**. A **profiling counter** triggers recompilation. A **heap snapshot** exposes a **memory leak**; a **weak reference** avoids retention, but cleanup may wait in a **finalizer queue**. **On-stack replacement** changes active code, the **code cache** stores it, and **JIT hardening** protects executable memory.

**Bản dịch tiếng Việt:** **Object header** và **vtable pointer** mô tả object runtime; **scalar replacement** có thể bỏ allocation, còn **bounds check elimination** xóa check đã chứng minh. **Deoptimization guard** bảo vệ code suy đoán do **baseline compiler** sinh khi **hot path** xuất hiện. **Monomorphic call site** có thể dùng **polymorphic inline cache**, còn **guarded optimization** fallback qua **runtime stub** và **bailout path**. **Profiling counter** kích hoạt compile lại. **Heap snapshot** lộ **memory leak**; **weak reference** tránh giữ object, nhưng cleanup có thể chờ trong **finalizer queue**. **On-stack replacement** đổi code đang chạy, **code cache** lưu code, còn **JIT hardening** bảo vệ memory executable.
