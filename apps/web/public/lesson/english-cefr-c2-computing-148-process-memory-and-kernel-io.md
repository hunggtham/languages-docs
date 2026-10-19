# C2 Vocabulary — Process memory and kernel I/O

This lesson follows a program from process creation through virtual memory, scheduling, synchronization, and asynchronous device access.

Flow: **system call boundary → process image → address space → page table → copy on write → memory mapped file → virtual address → physical frame → kernel stack → user stack → interrupt vector → trap handler → preemption point → deadlock cycle → starvation risk → condition variable → semaphore permit → mutex contention → file descriptor → zero copy**.

## 1. system call boundary /ˈsɪstəm kɔːl ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** the controlled interface where a user program requests a privileged kernel operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interface có kiểm soát nơi program user yêu cầu operation quyền kernel.
**Grammar & collocations:** `system-call-boundary check` — kiểm tra; `cross into kernel mode` — chuyển.
**Examples:** `The system call boundary checked the buffer before the kernel copied it.` → Boundary kiểm tra buffer trước khi kernel copy.
**Liên kết tiếng Hàn:** `시스템 호출 경계`.

## 2. process image /ˈprəʊses ˈɪmɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the memory layout containing a process's code, data, stacks, libraries, and runtime state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** layout memory gồm code, data, stack, library và state runtime của process.
**Grammar & collocations:** `process-image layout` — layout; `replace an image on exec` — thay.
**Examples:** `The loader built a new process image after the shell executed the command.` → Loader dựng image mới sau exec.
**Liên kết tiếng Hàn:** `프로세스 이미지`.

## 3. address space /əˈdres speɪs/
**Part of speech:** noun
**Core meaning (English):** the range of addresses a process can use and the mappings that give those addresses meaning.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** range address process dùng và mapping làm chúng có nghĩa.
**Grammar & collocations:** `address-space layout` — layout; `isolate a process's mappings` — cô lập.
**Examples:** `Each container received an address space isolated from the host process.` → Mỗi container có address space tách khỏi host.
**Liên kết tiếng Hàn:** `주소 공간`.

## 4. page table /peɪdʒ ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** a data structure translating virtual page numbers into physical frames and access permissions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấu trúc map virtual page sang physical frame và quyền truy cập.
**Grammar & collocations:** `page-table entry` — entry; `mark a page read-only` — đánh dấu.
**Examples:** `The page table marked the shared code pages executable but not writable.` → Table đánh dấu code shared được chạy nhưng không ghi.
**Liên kết tiếng Hàn:** `페이지 테이블`.

## 5. copy on write /ˈkɒpi ɒn raɪt/
**Part of speech:** noun
**Core meaning (English):** a sharing strategy that copies a memory page only when one participant attempts to modify it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chiến lược share chỉ copy page khi có bên định sửa.
**Grammar & collocations:** `copy-on-write page` — page; `fork a shared address space` — fork.
**Examples:** `Copy on write let the child process share the parent's pages until it changed a buffer.` → COW cho child share page đến khi sửa buffer.
**Liên kết tiếng Hàn:** `쓰기 시 복사`.

## 6. memory mapped file /ˈmeməri mæpt faɪl/
**Part of speech:** noun
**Core meaning (English):** a file whose contents are exposed as a region of a process's memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** file có nội dung lộ ra như một vùng memory của process.
**Grammar & collocations:** `memory-mapped-file region` — region; `flush modified pages` — ghi.
**Examples:** `The index opened a memory mapped file to inspect records without repeated read calls.` → Index map file để đọc record không gọi read lặp.
**Liên kết tiếng Hàn:** `메모리 매핑 파일`.

## 7. virtual address /ˈvɜːrtʃuəl əˈdres/
**Part of speech:** noun
**Core meaning (English):** an address used by a program that the memory-management unit translates before access.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** address program dùng, MMU translate trước khi access.
**Grammar & collocations:** `virtual-address range` — range; `translate an address` — dịch.
**Examples:** `The debugger converted the virtual address into the mapped file offset.` → Debugger đổi address thành offset file.
**Liên kết tiếng Hàn:** `가상 주소`.

## 8. physical frame /ˈfɪzɪkəl freɪm/
**Part of speech:** noun
**Core meaning (English):** a fixed-size unit of physical memory that can hold a virtual page.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đơn vị memory vật lý cố định chứa một virtual page.
**Grammar & collocations:** `physical-frame allocator` — allocator; `pin a frame` — ghim.
**Examples:** `The kernel pinned a physical frame while the device performed DMA.` → Kernel ghim frame khi device DMA.
**Liên kết tiếng Hàn:** `물리 프레임`.

## 9. kernel stack /ˈkɜːrnəl stæk/
**Part of speech:** noun
**Core meaning (English):** a per-thread stack used while executing privileged kernel code.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stack mỗi thread dùng khi chạy code kernel quyền cao.
**Grammar & collocations:** `kernel-stack guard` — guard; `switch to a privileged stack` — chuyển.
**Examples:** `The interrupt entry switched from the user stack to the kernel stack.` → Entry interrupt chuyển sang kernel stack.
**Liên kết tiếng Hàn:** `커널 스택`.

## 10. user stack /ˈjuːzər stæk/
**Part of speech:** noun
**Core meaning (English):** the stack region used by application code for calls, locals, and return state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng stack application dùng cho call, local và return state.
**Grammar & collocations:** `user-stack frame` — frame; `grow a stack downward` — mở rộng.
**Examples:** `The runtime allocated another user stack for the new worker thread.` → Runtime cấp user stack cho worker mới.
**Liên kết tiếng Hàn:** `사용자 스택`.

## 11. interrupt vector /ˈɪntərʌpt ˈvektər/
**Part of speech:** noun
**Core meaning (English):** a table or index that directs each hardware interrupt to its handler.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** table/index chỉ mỗi hardware interrupt tới handler.
**Grammar & collocations:** `interrupt-vector entry` — entry; `dispatch a timer interrupt` — dispatch.
**Examples:** `The interrupt vector routed the network notification to the driver handler.` → Vector route notification mạng tới driver.
**Liên kết tiếng Hàn:** `인터럽트 벡터`.

## 12. trap handler /træp ˈhændlər/
**Part of speech:** noun
**Core meaning (English):** privileged code that handles a processor trap caused by a fault, exception, or system call.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code quyền cao xử lý trap do fault, exception hoặc syscall.
**Grammar & collocations:** `trap-handler entry` — entry; `decode a fault code` — giải mã.
**Examples:** `The trap handler converted the invalid access into a process signal.` → Handler đổi access sai thành signal process.
**Liên kết tiếng Hàn:** `트랩 처리기`.

## 13. preemption point /priːˈempʃən pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a safe location where the scheduler may pause one task and run another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vị trí an toàn scheduler có thể pause task và chạy task khác.
**Grammar & collocations:** `preemption-point check` — check; `yield at a safe boundary` — nhường.
**Examples:** `The runtime inserted a preemption point between two long allocation loops.` → Runtime chèn điểm preempt giữa loop dài.
**Liên kết tiếng Hàn:** `선점 지점`.

## 14. deadlock cycle /ˈdedlɒk ˈsaɪkəl/
**Part of speech:** noun
**Core meaning (English):** a circular wait in which each participant holds a resource needed by another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vòng chờ nơi mỗi bên giữ resource bên khác cần.
**Grammar & collocations:** `deadlock-cycle detector` — detector; `break a lock-order cycle` — phá.
**Examples:** `The deadlock cycle involved the cache lock and the transaction lock.` → Cycle liên quan lock cache và transaction.
**Liên kết tiếng Hàn:** `교착 상태 순환`.

## 15. starvation risk /stɑːrˈveɪʃən rɪsk/
**Part of speech:** noun
**Core meaning (English):** the risk that a task waits indefinitely because other tasks keep receiving service first.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nguy cơ task chờ mãi vì task khác liên tục được phục vụ trước.
**Grammar & collocations:** `starvation-risk metric` — metric; `age a waiting request` — tăng ưu tiên.
**Examples:** `The priority policy reduced starvation risk by aging requests in the queue.` → Policy giảm starvation bằng cách tăng tuổi request.
**Liên kết tiếng Hàn:** `기아 위험`.

## 16. condition variable /kənˈdɪʃən ˈveriəbəl/
**Part of speech:** noun
**Core meaning (English):** a synchronization object that lets threads sleep until a shared condition may be true.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** object sync cho thread ngủ đến khi condition chung có thể đúng.
**Grammar & collocations:** `condition-variable wait` — wait; `signal a waiting consumer` — báo.
**Examples:** `The producer signaled the condition variable after placing work in the queue.` → Producer signal sau khi đưa work vào queue.
**Liên kết tiếng Hàn:** `조건 변수`.

## 17. semaphore permit /ˈseməfɔːr ˈpɜːrmɪt/
**Part of speech:** noun
**Core meaning (English):** one unit of a semaphore's available capacity that a task must acquire before proceeding.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một đơn vị capacity semaphore task phải acquire trước khi chạy.
**Grammar & collocations:** `semaphore-permit count` — count; `release a permit` — trả.
**Examples:** `Each worker acquired a semaphore permit before opening a database connection.` → Worker acquire permit trước khi mở connection.
**Liên kết tiếng Hàn:** `세마포어 허가`.

## 18. mutex contention /ˈmjuːteks kənˈtenʃən/
**Part of speech:** noun
**Core meaning (English):** competition among threads trying to hold the same mutual-exclusion lock.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cạnh tranh giữa thread muốn giữ cùng mutex.
**Grammar & collocations:** `mutex-contention profile` — profile; `shorten a critical section` — rút.
**Examples:** `Mutex contention dominated latency after the cache became globally shared.` → Contention chiếm latency khi cache share toàn cục.
**Liên kết tiếng Hàn:** `뮤텍스 경합`.

## 19. file descriptor /faɪl dɪˈskrɪptər/
**Part of speech:** noun
**Core meaning (English):** a small process-level handle referring to an open file, socket, pipe, or device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** handle cấp process trỏ tới file, socket, pipe hoặc device mở.
**Grammar & collocations:** `file-descriptor table` — table; `close an inherited descriptor` — đóng.
**Examples:** `The child inherited a file descriptor for the listening socket.` → Child kế thừa descriptor của socket listen.
**Liên kết tiếng Hàn:** `파일 디스크립터`.

## 20. zero copy /ˈzɪroʊ ˈkɒpi/
**Part of speech:** noun
**Core meaning (English):** moving data between components without copying its payload through an intermediate buffer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển data giữa component mà không copy payload qua buffer trung gian.
**Grammar & collocations:** `zero-copy path` — path; `send a mapped buffer directly` — gửi.
**Examples:** `The server used zero copy to send the mapped file to the network stack.` → Server dùng zero copy gửi file map tới network stack.
**Liên kết tiếng Hàn:** `제로 카피`.

## Review in context

At the **system call boundary**, the kernel creates a **process image** inside an **address space** described by a **page table**. **Copy on write** shares pages, and a **memory mapped file** exposes storage through a **virtual address** backed by a **physical frame**. An interrupt switches from a **user stack** to a **kernel stack** through an **interrupt vector** and **trap handler**; a **preemption point** lets the scheduler switch safely. A **deadlock cycle** can block progress, while **starvation risk** concerns unfair waiting. A **condition variable**, **semaphore permit**, and **mutex contention** coordinate threads. A **file descriptor** names an open resource, and **zero copy** avoids an unnecessary payload copy.

**Bản dịch tiếng Việt:** Ở **system call boundary**, kernel tạo **process image** trong **address space** do **page table** mô tả. **Copy on write** share page, còn **memory mapped file** đưa storage qua **virtual address** được **physical frame** hỗ trợ. Interrupt chuyển từ **user stack** sang **kernel stack** qua **interrupt vector** và **trap handler**; **preemption point** cho phép scheduler đổi task an toàn. **Deadlock cycle** có thể chặn tiến trình, còn **starvation risk** nói về chờ không công bằng. **Condition variable**, **semaphore permit** và **mutex contention** phối hợp thread. **File descriptor** đặt tên resource mở, còn **zero copy** tránh copy payload thừa.
