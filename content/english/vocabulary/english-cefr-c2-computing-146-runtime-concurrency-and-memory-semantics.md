# C2 Vocabulary — Runtime concurrency and memory semantics

This lesson follows managed memory and asynchronous work from runtime representation through race detection, scheduling, and structured cancellation.

Flow: **garbage collector → arena allocator → memory model → atomic ordering → data race → coroutine frame → continuation → foreign function interface → runtime metadata → stack unwinding → exception table → thread sanitizer → race detector → epoch reclamation → work-stealing queue → thread pool → futures combinator → promise rejection → event loop → structured concurrency**.

## 1. garbage collector /ˈɡɑːrbɪdʒ kəˈlektər/
**Part of speech:** noun
**Core meaning (English):** a runtime system that automatically identifies and reclaims memory no longer reachable by a program.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** runtime tự tìm và thu hồi memory không còn được program reach.
**Grammar & collocations:** `garbage-collector pause` — pause; `trace reachable objects` — trace.
**Examples:** `The garbage collector reclaimed the detached graph after the request completed.` → Collector thu hồi graph đã tách sau request.
**Liên kết tiếng Hàn:** `가비지 컬렉터`.

## 2. arena allocator /əˈriːnə ˈæləkeɪtər/
**Part of speech:** noun
**Core meaning (English):** an allocator that obtains memory in a region and releases many objects together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** allocator lấy memory theo region rồi giải phóng nhiều object cùng lúc.
**Grammar & collocations:** `arena-allocator lifetime` — lifetime; `reset a request arena` — reset.
**Examples:** `The parser used an arena allocator so temporary nodes vanished after one file.` → Parser dùng arena để node tạm mất sau một file.
**Liên kết tiếng Hàn:** `아레나 할당기`.

## 3. memory model /ˈmeməri ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** rules defining when writes by one thread become visible to another and how operations may be reordered.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule về lúc write của thread này visible với thread khác và reorder.
**Grammar & collocations:** `memory-model guarantee` — bảo đảm; `reason about visibility` — suy luận.
**Examples:** `The memory model required an explicit synchronization edge before reading the flag.` → Model yêu cầu edge sync trước khi đọc flag.
**Liên kết tiếng Hàn:** `메모리 모델`.

## 4. atomic ordering /əˈtɒmɪk ˈɔːrdərɪŋ/
**Part of speech:** noun
**Core meaning (English):** the visibility and sequencing guarantee attached to an atomic operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo đảm visibility và thứ tự gắn với operation atomic.
**Grammar & collocations:** `atomic-ordering mode` — mode; `choose acquire semantics` — chọn.
**Examples:** `The release atomic ordering made the initialized buffer visible to the consumer.` → Ordering release làm buffer đã init visible với consumer.
**Liên kết tiếng Hàn:** `원자적 순서`.

## 5. data race /ˈdeɪtə reɪs/
**Part of speech:** noun
**Core meaning (English):** an unsynchronized conflict in which concurrent accesses include a write to the same memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xung đột thiếu sync khi access đồng thời có write cùng memory.
**Grammar & collocations:** `data-race report` — report; `protect a shared counter` — bảo vệ.
**Examples:** `The test exposed a data race between the cache refresh and the eviction path.` → Test lộ race giữa refresh cache và eviction.
**Liên kết tiếng Hàn:** `데이터 경쟁`.

## 6. coroutine frame /ˈkoʊruːtiːn freɪm/
**Part of speech:** noun
**Core meaning (English):** stored state that lets a suspended coroutine resume with its locals and progress point.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** state lưu để coroutine suspend rồi resume với local và điểm chạy.
**Grammar & collocations:** `coroutine-frame allocation` — allocation; `spill a local variable` — lưu.
**Examples:** `The coroutine frame retained the socket handle while the operation awaited I/O.` → Frame giữ socket handle khi chờ I/O.
**Liên kết tiếng Hàn:** `코루틴 프레임`.

## 7. continuation /kənˌtɪnjuˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a representation of the remaining computation that can be resumed later.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** representation của phần computation còn lại để resume sau.
**Grammar & collocations:** `continuation callback` — callback; `capture the pending computation` — giữ.
**Examples:** `The scheduler stored a continuation until the file descriptor became readable.` → Scheduler giữ continuation đến khi descriptor đọc được.
**Liên kết tiếng Hàn:** `계속`.

## 8. foreign function interface /ˈfɔːrən ˈfʌŋkʃən ˈɪntərfeɪs/
**Part of speech:** noun
**Core meaning (English):** a boundary allowing code in one language or runtime to call code in another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** boundary để code language/runtime này gọi code khác.
**Grammar & collocations:** `foreign-function-interface binding` — binding; `marshal a string` — chuyển.
**Examples:** `The foreign function interface converted the managed string before calling the native library.` → FFI đổi string managed trước khi gọi native.
**Liên kết tiếng Hàn:** `외부 함수 인터페이스`.

## 9. runtime metadata /ˈrʌntaɪm ˈmetədeɪtə/
**Part of speech:** noun
**Core meaning (English):** information retained in a binary so the runtime can inspect types, frames, methods, or managed objects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** information giữ trong binary để runtime xem type, frame, method hoặc object.
**Grammar & collocations:** `runtime-metadata table` — table; `look up a method descriptor` — tra.
**Examples:** `The debugger read runtime metadata to display the generic collection's element type.` → Debugger đọc metadata để hiện element type.
**Liên kết tiếng Hàn:** `런타임 메타데이터`.

## 10. stack unwinding /stæk ʌnˈwaɪndɪŋ/
**Part of speech:** noun
**Core meaning (English):** walking back through call frames while leaving scopes after an exception or nonlocal transfer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đi ngược call frame và rời scope sau exception hoặc transfer.
**Grammar & collocations:** `stack-unwinding routine` — routine; `run a cleanup handler` — chạy.
**Examples:** `Stack unwinding closed the file before control reached the outer handler.` → Unwinding đóng file trước handler ngoài.
**Liên kết tiếng Hàn:** `스택 해제`.

## 11. exception table /ɪkˈsepʃən ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** compiled metadata mapping instruction ranges to handlers and cleanup actions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata compiled map range instruction với handler và cleanup.
**Grammar & collocations:** `exception-table entry` — entry; `select a landing pad` — chọn.
**Examples:** `The exception table directed the runtime to the cleanup block for the failed call.` → Table chỉ runtime tới cleanup block.
**Liên kết tiếng Hàn:** `예외 테이블`.

## 12. thread sanitizer /θred ˈsænɪtaɪzər/
**Part of speech:** noun
**Core meaning (English):** a dynamic analysis tool that instruments execution to detect races and synchronization errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tool phân tích động instrument execution để tìm race và lỗi sync.
**Grammar & collocations:** `thread-sanitizer build` — build; `instrument a test binary` — instrument.
**Examples:** `Thread sanitizer reported conflicting accesses in the metrics exporter.` → Sanitizer báo access xung đột trong exporter.
**Liên kết tiếng Hàn:** `스레드 새니타이저`.

## 13. race detector /reɪs dɪˈtektər/
**Part of speech:** noun
**Core meaning (English):** a tool that observes concurrent execution to identify unsafely ordered accesses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tool quan sát execution đồng thời để tìm access sai thứ tự.
**Grammar & collocations:** `race-detector trace` — trace; `reproduce a scheduling window` — tái hiện.
**Examples:** `The race detector reproduced the warning only when two workers overlapped.` → Detector tái hiện warning khi hai worker overlap.
**Liên kết tiếng Hàn:** `경쟁 탐지기`.

## 14. epoch reclamation /ˈiːpɒk ˌrekləˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a memory-reclamation technique that delays freeing retired objects until readers leave an epoch.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kỹ thuật trì hoãn free object đến khi reader rời epoch.
**Grammar & collocations:** `epoch-reclamation guard` — guard; `retire a node safely` — retire.
**Examples:** `Epoch reclamation kept the removed index node alive for a reader already traversing it.` → Reclamation giữ node cho reader đang duyệt.
**Liên kết tiếng Hàn:** `에포크 회수`.

## 15. work-stealing queue /wɜːrk ˈstiːlɪŋ kjuː/
**Part of speech:** noun
**Core meaning (English):** a queue in which idle workers take tasks from the ends of busy workers' queues.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** queue cho worker rảnh lấy task từ queue worker bận.
**Grammar & collocations:** `work-stealing-queue owner` — owner; `steal a ready task` — lấy.
**Examples:** `The work-stealing queue balanced small rendering jobs across the cores.` → Queue cân bằng job render nhỏ giữa core.
**Liên kết tiếng Hàn:** `작업 훔치기 큐`.

## 16. thread pool /θred puːl/
**Part of speech:** noun
**Core meaning (English):** a managed set of reusable worker threads that execute submitted tasks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập worker thread tái sử dụng để chạy task gửi vào.
**Grammar & collocations:** `thread-pool saturation` — bão hòa; `submit a blocking task` — gửi.
**Examples:** `The thread pool capped concurrency so database connections did not run out.` → Pool giới hạn concurrency để không hết connection.
**Liên kết tiếng Hàn:** `스레드 풀`.

## 17. futures combinator /ˈfjuːtʃərz ˈkɒmbɪneɪtər/
**Part of speech:** noun
**Core meaning (English):** an operation that composes future values into a new asynchronous computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operation ghép future value thành computation async mới.
**Grammar & collocations:** `futures-combinator chain` — chain; `combine independent results` — ghép.
**Examples:** `The futures combinator joined the cache lookup and permission check before rendering.` → Combinator ghép lookup và permission trước render.
**Liên kết tiếng Hàn:** `퓨처 조합자`.

## 18. promise rejection /ˈprɒmɪs rɪˈdʒekʃən/
**Part of speech:** noun
**Core meaning (English):** an asynchronous result indicating that a promised operation failed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết quả async báo operation promised thất bại.
**Grammar & collocations:** `promise-rejection handler` — handler; `propagate an error` — lan.
**Examples:** `The promise rejection reached the boundary because no retry policy accepted the failure.` → Rejection tới boundary vì không policy retry nào nhận.
**Liên kết tiếng Hàn:** `프로미스 거부`.

## 19. event loop /ɪˈvent luːp/
**Part of speech:** noun
**Core meaning (English):** a scheduler that repeatedly processes ready callbacks, I/O completions, and timers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scheduler lặp lại xử lý callback, I/O completion và timer sẵn sàng.
**Grammar & collocations:** `event-loop tick` — tick; `queue a readable callback` — xếp.
**Examples:** `The event loop stayed responsive because the callback never performed blocking work.` → Loop responsive vì callback không block.
**Liên kết tiếng Hàn:** `이벤트 루프`.

## 20. structured concurrency /ˈstrʌktʃərd kənˈkʌrənsɪ/
**Part of speech:** noun
**Core meaning (English):** a concurrency discipline in which child tasks have bounded lifetimes and are joined or cancelled by their scope.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kỷ luật concurrency nơi task con có lifetime giới hạn và scope join/cancel.
**Grammar & collocations:** `structured-concurrency scope` — scope; `cancel child tasks together` — hủy.
**Examples:** `Structured concurrency cancelled the unfinished fetch when the request scope ended.` → Concurrency có cấu trúc hủy fetch khi scope request kết thúc.
**Liên kết tiếng Hàn:** `구조적 동시성`.

## Review in context

A **garbage collector** reclaims unreachable objects, while an **arena allocator** releases a region together. The **memory model** and **atomic ordering** define visibility; a **data race** violates safe access. A suspended **coroutine frame** stores a **continuation**, and a **foreign function interface** crosses runtime boundaries using **runtime metadata**. **Stack unwinding** follows an **exception table**. **Thread sanitizer** and a **race detector** expose concurrency faults; **epoch reclamation** delays unsafe frees. A **work-stealing queue** feeds a **thread pool**; a **futures combinator** joins results, a **promise rejection** carries failure, an **event loop** dispatches readiness, and **structured concurrency** bounds child-task lifetimes.

**Bản dịch tiếng Việt:** **Garbage collector** thu hồi object không reach, còn **arena allocator** giải phóng cả region. **Memory model** và **atomic ordering** quy định visibility; **data race** vi phạm access an toàn. **Coroutine frame** bị suspend lưu **continuation**, còn **foreign function interface** đi qua ranh giới runtime bằng **runtime metadata**. **Stack unwinding** theo **exception table**. **Thread sanitizer** và **race detector** lộ lỗi concurrency; **epoch reclamation** trì hoãn free không an toàn. **Work-stealing queue** cấp task cho **thread pool**; **futures combinator** ghép kết quả, **promise rejection** mang lỗi, **event loop** điều phối readiness, còn **structured concurrency** giới hạn lifetime task con.
