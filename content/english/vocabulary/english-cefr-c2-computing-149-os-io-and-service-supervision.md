# C2 Vocabulary — Operating-system I/O and service supervision

This lesson follows a network service from readiness notification and device access through isolation, supervision, failure capture, and shutdown.

Flow: **epoll interest → io uring → direct memory access → device driver → kernel module → syscall shim → capability boundary → sandbox profile → resource quota → process supervisor → service manager → watchdog timer → core dump → crash dump → signal handler → terminal multiplexer → listen backlog → accept queue → nonblocking socket → graceful shutdown**.

## 1. epoll interest /ˈepɒl ˈɪntrəst/
**Part of speech:** noun
**Core meaning (English):** a registration telling an event multiplexer which readiness changes a file descriptor should report.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đăng ký cho event multiplexer biết descriptor cần báo readiness nào.
**Grammar & collocations:** `epoll-interest mask` — mask; `register readable interest` — đăng ký.
**Examples:** `The server removed its epoll interest after closing the client socket.` → Server bỏ interest sau khi đóng socket client.
**Liên kết tiếng Hàn:** `epoll 관심`.

## 2. io uring /ˌaɪ oʊ ˈjʊərɪŋ/
**Part of speech:** noun
**Core meaning (English):** a Linux asynchronous-I/O interface using shared submission and completion rings between an application and the kernel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interface I/O async Linux dùng vòng submission/completion share giữa app và kernel.
**Grammar & collocations:** `io-uring submission queue` — queue; `submit an asynchronous read` — gửi.
**Examples:** `The storage service used io uring to submit many reads without a thread per request.` → Service dùng io uring gửi nhiều read mà không cần mỗi request một thread.
**Liên kết tiếng Hàn:** `io_uring`.

## 3. direct memory access /dəˈrekt ˈmeməri ˈækses/
**Part of speech:** noun
**Core meaning (English):** a transfer in which a device reads or writes main memory without copying each byte through the CPU.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** device đọc/ghi main memory mà CPU không phải copy từng byte.
**Grammar & collocations:** `direct-memory-access descriptor` — descriptor; `map a DMA buffer` — map.
**Examples:** `Direct memory access moved the packet payload into a pinned buffer.` → DMA đưa payload packet vào buffer đã ghim.
**Liên kết tiếng Hàn:** `직접 메모리 접근`.

## 4. device driver /dɪˈvaɪs ˈdraɪvər/
**Part of speech:** noun
**Core meaning (English):** kernel or privileged software that translates general operations into commands for a specific device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần mềm kernel đổi operation chung thành command cho device cụ thể.
**Grammar & collocations:** `device-driver interface` — interface; `submit a hardware command` — gửi.
**Examples:** `The device driver translated the filesystem request into commands for the NVMe controller.` → Driver đổi request filesystem thành command cho controller NVMe.
**Liên kết tiếng Hàn:** `장치 드라이버`.

## 5. kernel module /ˈkɜːrnəl ˈmɒdjuːl/
**Part of speech:** noun
**Core meaning (English):** a loadable component that extends kernel behavior without rebuilding the entire kernel image.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component load được để mở rộng kernel mà không build lại toàn image.
**Grammar & collocations:** `kernel-module symbol` — symbol; `load a module safely` — nạp.
**Examples:** `The administrator loaded a kernel module for the new sensor after checking its signature.` → Admin nạp module sau khi kiểm tra chữ ký.
**Liên kết tiếng Hàn:** `커널 모듈`.

## 6. syscall shim /ˈsɪskɔːl ʃɪm/
**Part of speech:** noun
**Core meaning (English):** a compatibility layer that adapts an application's system-call usage to another kernel or runtime interface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lớp tương thích đổi cách app gọi syscall sang interface kernel/runtime khác.
**Grammar & collocations:** `syscall-shim layer` — layer; `translate an unsupported call` — chuyển.
**Examples:** `The syscall shim translated the legacy flag before forwarding the request to the current kernel.` → Shim đổi flag cũ trước khi chuyển request.
**Liên kết tiếng Hàn:** `시스템 호출 심`.

## 7. capability boundary /ˌkeɪpəˈbɪləti ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** a security boundary limiting which named resources or operations a component is allowed to use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** boundary giới hạn resource/operation mà component được phép dùng.
**Grammar & collocations:** `capability-boundary policy` — policy; `cross a permitted boundary` — vượt.
**Examples:** `The worker's capability boundary allowed queue access but not raw disk access.` → Boundary cho queue nhưng không cho disk thô.
**Liên kết tiếng Hàn:** `능력 경계`.

## 8. sandbox profile /ˈsændbɒks ˈproʊfaɪl/
**Part of speech:** noun
**Core meaning (English):** a policy describing which system resources and operations an isolated process may access.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy nêu process cô lập được access resource và operation nào.
**Grammar & collocations:** `sandbox-profile rule` — rule; `deny an outbound connection` — chặn.
**Examples:** `The sandbox profile denied the plugin access to the user's home directory.` → Profile chặn plugin vào home directory.
**Liên kết tiếng Hàn:** `샌드박스 프로필`.

## 9. resource quota /ˈriːsɔːrs ˈkwoʊtə/
**Part of speech:** noun
**Core meaning (English):** a limit on a measurable resource such as CPU time, memory, storage, or open handles.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn resource đo được như CPU, memory, storage hoặc handle mở.
**Grammar & collocations:** `resource-quota breach` — vi phạm; `enforce a memory quota` — áp dụng.
**Examples:** `The resource quota stopped one tenant from consuming every worker thread.` → Quota ngăn tenant chiếm hết worker thread.
**Liên kết tiếng Hàn:** `리소스 할당량`.

## 10. process supervisor /ˈproʊses ˈsuːpərvaɪzər/
**Part of speech:** noun
**Core meaning (English):** a program that starts, monitors, and restarts other processes according to policy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chương trình start, monitor và restart process theo policy.
**Grammar & collocations:** `process-supervisor state` — state; `restart a failed worker` — restart.
**Examples:** `The process supervisor restarted the worker after its health check timed out.` → Supervisor restart worker sau health check timeout.
**Liên kết tiếng Hàn:** `프로세스 감독자`.

## 11. service manager /ˈsɜːrvɪs ˈmænɪdʒər/
**Part of speech:** noun
**Core meaning (English):** a system component that controls service startup, dependencies, permissions, and lifecycle events.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thành phần hệ thống điều khiển start, dependency, quyền và lifecycle service.
**Grammar & collocations:** `service-manager unit` — unit; `enable a dependency` — bật.
**Examples:** `The service manager started the logging daemon before launching the API.` → Manager start logging daemon trước API.
**Liên kết tiếng Hàn:** `서비스 관리자`.

## 12. watchdog timer /ˈwɒtʃdɒɡ ˈtaɪmər/
**Part of speech:** noun
**Core meaning (English):** a timer that triggers recovery when software fails to report that it is still functioning.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timer kích hoạt recovery khi software không báo còn hoạt động.
**Grammar & collocations:** `watchdog-timer expiry` — hết hạn; `feed the watchdog` — báo sống.
**Examples:** `The watchdog timer rebooted the controller after the main loop stopped responding.` → Watchdog reboot controller khi loop không phản hồi.
**Liên kết tiếng Hàn:** `감시 타이머`.

## 13. core dump /kɔːr dʌmp/
**Part of speech:** noun
**Core meaning (English):** a saved snapshot of a crashed process's memory, registers, and execution state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** snapshot lưu memory, register và execution state của process crash.
**Grammar & collocations:** `core-dump filter` — filter; `inspect a crashed process` — kiểm tra.
**Examples:** `The core dump showed that the parser had dereferenced a null pointer.` → Dump cho thấy parser dereference null pointer.
**Liên kết tiếng Hàn:** `코어 덤프`.

## 14. crash dump /kræʃ dʌmp/
**Part of speech:** noun
**Core meaning (English):** diagnostic data captured when an application or system terminates abnormally.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data chẩn đoán chụp khi app hoặc system kết thúc bất thường.
**Grammar & collocations:** `crash-dump collector` — collector; `upload a sanitized dump` — tải.
**Examples:** `The client uploaded a crash dump after removing credentials from the diagnostic bundle.` → Client upload dump sau khi bỏ credential.
**Liên kết tiếng Hàn:** `크래시 덤프`.

## 15. signal handler /ˈsɪɡnəl ˈhændlər/
**Part of speech:** noun
**Core meaning (English):** code registered to respond when a process receives an asynchronous operating-system signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code đăng ký để xử lý signal async từ OS.
**Grammar & collocations:** `signal-handler safety` — tính an toàn; `handle a termination signal` — xử lý.
**Examples:** `The signal handler set a flag so the main loop could shut down safely.` → Handler set flag để loop tắt an toàn.
**Liên kết tiếng Hàn:** `시그널 처리기`.

## 16. terminal multiplexer /ˈtɜːrmɪnəl ˈmʌltɪpleksər/
**Part of speech:** noun
**Core meaning (English):** a program that keeps multiple terminal sessions inside one connection and lets them detach and reattach.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chương trình giữ nhiều terminal session trong một connection, cho detach/attach.
**Grammar & collocations:** `terminal-multiplexer session` — session; `detach a running shell` — tách.
**Examples:** `The operator used a terminal multiplexer to keep the migration running after disconnecting.` → Operator dùng multiplexer để migration tiếp tục sau disconnect.
**Liên kết tiếng Hàn:** `터미널 멀티플렉서`.

## 17. listen backlog /ˈlɪsən ˈbæklɒɡ/
**Part of speech:** noun
**Core meaning (English):** the bounded queue of incoming connection attempts waiting for a server to accept them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** queue có giới hạn của connection chờ server accept.
**Grammar & collocations:** `listen-backlog limit` — giới hạn; `increase the backlog` — tăng.
**Examples:** `The service raised its listen backlog during the traffic surge.` → Service tăng backlog khi traffic tăng.
**Liên kết tiếng Hàn:** `수신 대기열`.

## 18. accept queue /əkˈsept kjuː/
**Part of speech:** noun
**Core meaning (English):** the queue of completed connection handshakes ready for an application to accept.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** queue connection đã handshake xong, chờ app accept.
**Grammar & collocations:** `accept-queue depth` — độ sâu; `drain pending connections` — rút.
**Examples:** `The accept queue filled because the event loop was blocked by a slow callback.` → Queue đầy vì event loop bị callback chậm block.
**Liên kết tiếng Hàn:** `수락 대기열`.

## 19. nonblocking socket /ˌnɒnˈblɒkɪŋ ˈsɒkɪt/
**Part of speech:** noun
**Core meaning (English):** a socket operation configured to return promptly instead of waiting for data or connection progress.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** socket return ngay thay vì chờ data hoặc connection progress.
**Grammar & collocations:** `nonblocking-socket mode` — mode; `retry after readiness` — thử lại.
**Examples:** `The proxy used a nonblocking socket so one slow peer could not freeze the loop.` → Proxy dùng socket nonblocking để peer chậm không treo loop.
**Liên kết tiếng Hàn:** `비차단 소켓`.

## 20. graceful shutdown /ˈɡreɪsfəl ˈʃʌtdaʊn/
**Part of speech:** noun
**Core meaning (English):** an orderly termination that stops new work, finishes or cancels active work, and releases resources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết thúc có trật tự: ngừng nhận việc, xử lý/hủy việc đang chạy và giải phóng resource.
**Grammar & collocations:** `graceful-shutdown deadline` — deadline; `drain active requests` — làm cạn.
**Examples:** `Graceful shutdown drained active requests before the service closed its listening socket.` → Shutdown xử lý xong request trước khi đóng socket listen.
**Liên kết tiếng Hàn:** `정상 종료`.

## Review in context

An **epoll interest** reports readiness, while **io uring** submits asynchronous operations. **Direct memory access** moves buffers through a **device driver**, which may be extended by a **kernel module** or adapted through a **syscall shim**. A **capability boundary** and **sandbox profile** restrict access, and a **resource quota** limits consumption. A **process supervisor** and **service manager** control lifecycle; a **watchdog timer** triggers recovery. A **core dump** or **crash dump** preserves failure evidence, while a **signal handler** responds safely. A **terminal multiplexer** preserves sessions. The **listen backlog** feeds an **accept queue**; a **nonblocking socket** keeps the loop responsive, and **graceful shutdown** drains work before closing.

**Bản dịch tiếng Việt:** **Epoll interest** báo readiness, còn **io uring** gửi operation bất đồng bộ. **Direct memory access** chuyển buffer qua **device driver**, có thể mở rộng bằng **kernel module** hoặc tương thích qua **syscall shim**. **Capability boundary** và **sandbox profile** hạn chế access, còn **resource quota** giới hạn tiêu thụ. **Process supervisor** và **service manager** điều khiển lifecycle; **watchdog timer** kích hoạt recovery. **Core dump** hoặc **crash dump** giữ bằng chứng lỗi, còn **signal handler** phản hồi an toàn. **Terminal multiplexer** giữ session. **Listen backlog** cấp cho **accept queue**; **nonblocking socket** giữ loop responsive, còn **graceful shutdown** làm cạn công việc trước khi đóng.
