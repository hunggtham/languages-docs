# C2 Vocabulary — eBPF and kernel observability

This lesson follows safe kernel instrumentation from eBPF program loading through verifier checks, tracing hooks, packet paths, and production observability.

Flow: **eBPF program → BPF verifier → BTF metadata → CO-RE portability → eBPF map → ring buffer → kprobe → tracepoint → uprobe → perf buffer → XDP hook → traffic-control hook → cgroup hook → BPF LSM → helper function → tail call → map-in-map → verifier complexity → kernel observability**.

## 1. eBPF program /ˌiː biː piː ˈproʊɡræm/
**Part of speech:** noun
**Core meaning (English):** a restricted program that runs inside the Linux kernel to observe events or apply fast logic without rebuilding the kernel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chương trình nhỏ chạy trong kernel để quan sát hoặc xử lý mà không sửa kernel.
**Grammar & collocations:** `eBPF-program loader` — loader; `attach an eBPF program` — gắn.
**Examples:** `The eBPF program counted failed system calls without changing the application binary.` → Chương trình đếm system call lỗi mà không đổi binary ứng dụng.
**Liên kết tiếng Hàn:** `eBPF 프로그램`.

## 2. BPF verifier /ˈbiː piː ɛf ˈvɛrəˌfaɪər/
**Part of speech:** noun
**Core meaning (English):** the kernel component that statically checks a BPF program for safety before allowing it to run.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ kiểm tra tĩnh bảo đảm chương trình không truy cập bộ nhớ hay vòng lặp nguy hiểm.
**Grammar & collocations:** `BPF-verifier rejection` — rejection; `pass verifier checks` — vượt kiểm tra.
**Examples:** `The BPF verifier rejected the program because one pointer path was not provably safe.` → Verifier từ chối vì một đường pointer chưa chứng minh an toàn.
**Liên kết tiếng Hàn:** `BPF 검증기`.

## 3. BTF metadata /ˌbiː tiː ˈɛf ˈmɛtəˌdeɪtə/
**Part of speech:** noun
**Core meaning (English):** compact type information that describes kernel and program data structures for BPF tooling.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata mô tả kiểu dữ liệu kernel để tool biết field nằm ở đâu.
**Grammar & collocations:** `BTF-metadata section` — section; `embed type metadata` — nhúng.
**Examples:** `BTF metadata let the tracer identify a kernel field without parsing a full debug image.` → BTF giúp tracer nhận diện field mà không cần debug image đầy đủ.
**Liên kết tiếng Hàn:** `BTF 메타데이터`.

## 4. CO-RE portability /ˌsiː oʊ ɑr iː ˌpɔrtəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability of a compiled BPF program to adapt to compatible kernel type layouts at load time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một binary BPF chạy trên nhiều kernel nhờ điều chỉnh field lúc load.
**Grammar & collocations:** `CO-RE-portable binary` — binary; `relocate a field access` — relocate.
**Examples:** `CO-RE portability reduced the need to ship a separate tracing binary for every kernel release.` → CO-RE giảm số binary phải phát hành.
**Liên kết tiếng Hàn:** `CO-RE 이식성`.

## 5. eBPF map /ˌiː biː piː mæp/
**Part of speech:** noun
**Core meaning (English):** a kernel-managed data structure that lets BPF programs store state and exchange data with user space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấu trúc dữ liệu kernel giữ state và làm cầu nối với user space.
**Grammar & collocations:** `eBPF-map lookup` — lookup; `update a map entry` — cập nhật.
**Examples:** `The eBPF map stored per-process counters until the collector read them.` → Map lưu counter từng process cho collector đọc.
**Liên kết tiếng Hàn:** `eBPF 맵`.

## 6. ring buffer /rɪŋ ˈbʌfər/
**Part of speech:** noun
**Core meaning (English):** a circular shared-memory buffer used to stream BPF events efficiently from the kernel to user space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** buffer vòng cho event chạy liên tục, tránh cấp phát mới mỗi lần.
**Grammar & collocations:** `ring-buffer reservation` — reservation; `consume ring-buffer records` — tiêu thụ.
**Examples:** `The ring buffer delivered file-open events with less overhead than repeated polling.` → Ring buffer chuyển event mở file ít overhead hơn polling.
**Liên kết tiếng Hàn:** `링 버퍼`.

## 7. kprobe /ˈkeɪ proʊb/
**Part of speech:** noun
**Core meaning (English):** a dynamic instrumentation hook that runs a BPF program when a selected kernel function is entered or exited.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm móc động vào function kernel để quan sát lúc vào hoặc ra.
**Grammar & collocations:** `kprobe handler` — handler; `attach a kprobe` — gắn.
**Examples:** `A kprobe recorded which process entered the network allocation path.` → Kprobe ghi process đi vào path cấp phát mạng.
**Liên kết tiếng Hàn:** `kprobe`.

## 8. tracepoint /ˈtreɪsˌpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a stable, predefined instrumentation point exposed by the kernel for structured event tracing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm trace có schema ổn định, ít phụ thuộc implementation function.
**Grammar & collocations:** `tracepoint format` — format; `subscribe to a tracepoint` — subscribe.
**Examples:** `The scheduler tracepoint exposed task-switch fields consistently across minor kernel updates.` → Tracepoint scheduler giữ field ổn định qua update nhỏ.
**Liên kết tiếng Hàn:** `트레이스포인트`.

## 9. uprobe /ˈjuː proʊb/
**Part of speech:** noun
**Core meaning (English):** a dynamic instrumentation hook that runs when a user-space binary or shared library reaches a selected instruction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kprobe cho user space, móc vào binary hoặc shared library.
**Grammar & collocations:** `uprobe attachment` — attachment; `instrument a library call` — instrument.
**Examples:** `The uprobe measured latency around a database client's serialization routine.` → Uprobe đo latency quanh hàm serialize của client.
**Liên kết tiếng Hàn:** `uprobe`.

## 10. perf buffer /pɝf ˈbʌfər/
**Part of speech:** noun
**Core meaning (English):** a per-CPU event buffer that transfers samples or records from BPF programs to user space through the perf subsystem.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** buffer từng CPU dùng perf subsystem để đẩy sample ra ngoài.
**Grammar & collocations:** `perf-buffer sample` — sample; `poll a perf buffer` — poll.
**Examples:** `The collector drained each perf buffer before a burst of scheduler events overflowed it.` → Collector đọc buffer từng CPU trước khi burst làm tràn.
**Liên kết tiếng Hàn:** `perf 버퍼`.

## 11. XDP hook /ˌɛks diː ˈpiː hʊk/
**Part of speech:** noun
**Core meaning (English):** a BPF attachment point at the earliest receive stage of a network packet, often before the normal socket stack.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hook rất sớm trên đường nhận packet để drop, redirect hoặc đếm nhanh.
**Grammar & collocations:** `XDP-hook action` — action; `redirect a packet at XDP` — redirect.
**Examples:** `The XDP hook dropped malformed packets before they consumed socket-stack resources.` → Hook drop packet lỗi trước khi tốn tài nguyên socket stack.
**Liên kết tiếng Hàn:** `XDP 훅`.

## 12. traffic-control hook /ˈtræfɪk kənˈtroʊl hʊk/
**Part of speech:** noun
**Core meaning (English):** a BPF attachment point in the Linux traffic-control path for classifying, modifying, or redirecting packets.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hook ở lớp traffic control để phân loại hoặc đổi hướng packet.
**Grammar & collocations:** `traffic-control-hook program` — program; `classify ingress traffic` — phân loại.
**Examples:** `The traffic-control hook marked packets that belonged to the latency-sensitive queue.` → Hook đánh dấu packet của queue nhạy latency.
**Liên kết tiếng Hàn:** `트래픽 제어 훅`.

## 13. cgroup hook /ˈsiː ɡruːp hʊk/
**Part of speech:** noun
**Core meaning (English):** a BPF attachment point that applies policy or measurement to processes grouped by a Linux cgroup.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hook áp policy theo nhóm process, hữu ích cho container và tenant.
**Grammar & collocations:** `cgroup-hook policy` — policy; `scope a hook to a cgroup` — giới hạn.
**Examples:** `The cgroup hook counted outbound connections for one tenant without inspecting other workloads.` → Hook đếm connection của một tenant riêng.
**Liên kết tiếng Hàn:** `cgroup 훅`.

## 14. BPF LSM /ˌbiː piː ɛf ˌɛl ɛs ˈɛm/
**Part of speech:** noun
**Core meaning (English):** a Linux Security Module program written in BPF that applies custom security logic at supported kernel security hooks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy bảo mật viết bằng BPF gắn vào hook của LSM.
**Grammar & collocations:** `BPF-LSM policy` — policy; `deny a security operation` — từ chối.
**Examples:** `The BPF LSM denied access to a sensitive path for processes outside the approved cgroup.` → BPF LSM chặn path nhạy cảm ngoài cgroup được phép.
**Liên kết tiếng Hàn:** `BPF LSM`.

## 15. helper function /ˈhɛlpər ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a kernel-provided operation that a BPF program may call for tasks such as reading time, looking up maps, or redirecting packets.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** API được kernel cho phép để BPF làm việc có kiểm soát.
**Grammar & collocations:** `helper-function availability` — availability; `call a map helper` — gọi.
**Examples:** `The program used a helper function to obtain a monotonic timestamp instead of reading memory directly.` → Program dùng helper lấy timestamp an toàn.
**Liên kết tiếng Hàn:** `헬퍼 함수`.

## 16. tail call /teɪl kɔl/
**Part of speech:** noun
**Core meaning (English):** a BPF mechanism that transfers execution from one program to another through a program array without returning to the caller.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển thẳng từ BPF program này sang program khác để chia pipeline.
**Grammar & collocations:** `tail-call chain` — chain; `dispatch through a program array` — dispatch.
**Examples:** `A tail call selected a protocol-specific parser without making one verifier path enormous.` → Tail call chọn parser theo protocol mà không làm path verifier quá lớn.
**Liên kết tiếng Hàn:** `테일 콜`.

## 17. map-in-map /ˌmæp ɪn ˈmæp/
**Part of speech:** noun
**Core meaning (English):** a BPF map whose values are references to other maps, allowing policies or state tables to be swapped as units.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** map chứa map, giúp thay cả bảng policy mà không sửa từng entry.
**Grammar & collocations:** `map-in-map template` — template; `replace an inner map` — thay.
**Examples:** `The control plane replaced the inner map to publish a new routing policy atomically.` → Control plane thay inner map để publish policy mới nguyên tử.
**Liên kết tiếng Hàn:** `맵 인 맵`.

## 18. verifier complexity /ˈvɛrəˌfaɪər kəmˈplɛksəti/
**Part of speech:** noun
**Core meaning (English):** the amount of branching and state exploration the BPF verifier must analyze before accepting a program.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ phức tạp mà verifier phải duyệt, không chỉ là runtime cost.
**Grammar & collocations:** `verifier-complexity limit` — limit; `reduce branching complexity` — giảm.
**Examples:** `The developer simplified the parser to keep verifier complexity below the kernel limit.` → Developer đơn giản hóa parser để không vượt limit.
**Liên kết tiếng Hàn:** `검증기 복잡도`.

## 19. kernel observability /ˈkɝnəl ˌɑbzərvəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability to infer kernel and system behavior from structured measurements, traces, and events.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhìn thấy kernel đang làm gì qua số liệu và event có cấu trúc.
**Grammar & collocations:** `kernel-observability stack` — stack; `improve system observability` — cải thiện.
**Examples:** `Kernel observability revealed that storage latency came from queue contention rather than disk media.` → Observability cho thấy latency do tranh chấp queue, không phải disk.
**Liên kết tiếng Hàn:** `커널 관측 가능성`.

## 20. syscall tracing /ˈsɪskɔl ˈtreɪsɪŋ/
**Part of speech:** noun
**Core meaning (English):** recording and analyzing system-call activity to understand application behavior, failures, or security events.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** theo dõi syscall để biết process yêu cầu kernel gì.
**Grammar & collocations:** `syscall-tracing session` — session; `trace a process tree` — trace.
**Examples:** `Syscall tracing showed that the service retried an unavailable socket thousands of times.` → Tracing cho thấy service retry socket lỗi hàng nghìn lần.
**Liên kết tiếng Hàn:** `시스템 콜 추적`.

## Review in context

An **eBPF program** must pass the **BPF verifier**, using **BTF metadata** to support **CO-RE portability** across kernel layouts. It can store state in an **eBPF map** and stream events through a **ring buffer** or **perf buffer**. A **kprobe**, **tracepoint**, or **uprobe** observes execution, while an **XDP hook**, **traffic-control hook**, or **cgroup hook** handles packets and workload policy. **BPF LSM** adds security logic through a permitted **helper function**. A **tail call** and **map-in-map** design divide programs and policy tables, but **verifier complexity** remains a hard constraint. Together, **kernel observability** and **syscall tracing** explain behavior that application metrics alone cannot expose.

**Bản dịch tiếng Việt:** Một **eBPF program** phải vượt **BPF verifier**, dùng **BTF metadata** để hỗ trợ **CO-RE portability** giữa các layout kernel. Nó lưu state trong **eBPF map** và stream event qua **ring buffer** hoặc **perf buffer**. **Kprobe**, **tracepoint** hay **uprobe** quan sát execution, còn **XDP hook**, **traffic-control hook** và **cgroup hook** xử lý packet và policy workload. **BPF LSM** thêm logic bảo mật qua **helper function** được phép. **Tail call** và **map-in-map** chia nhỏ program và bảng policy, nhưng **verifier complexity** vẫn là giới hạn cứng. **Kernel observability** cùng **syscall tracing** giải thích những hành vi mà metric ứng dụng không thể tự cho thấy.
