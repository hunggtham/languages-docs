# C2 Vocabulary — RDMA and high-performance networking

This lesson follows low-latency data transfer from direct memory access and queue-based verbs through registered memory, one-sided operations, and datacenter fabrics.

Flow: **remote direct memory access → queue pair → send queue → receive queue → work request → work completion → completion queue → memory registration → memory region → protection domain → local key → remote key → zero-copy → kernel bypass → one-sided operation → two-sided messaging → RDMA read → RDMA write → InfiniBand → RoCE**.

## 1. remote direct memory access /rɪˈmoʊt dəˈrɛkt ˈmɛməri ˈæksɛs/
**Part of speech:** noun
**Core meaning (English):** a networking mechanism that lets one machine transfer data directly to or from another machine's registered memory with minimal CPU and kernel involvement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truy cập memory từ xa gần như trực tiếp; hình dung NIC chuyển data vào vùng RAM đã đăng ký mà không bắt remote CPU copy từng buffer qua network stack thông thường.
**Grammar & collocations:** `RDMA transport` — transport dùng RDMA; `RDMA-capable NIC` — NIC hỗ trợ RDMA; `RDMA path` — đường truyền RDMA.
**Examples:** `The storage service used remote direct memory access to reduce CPU overhead during large block transfers.` → Storage service dùng RDMA để giảm CPU overhead khi truyền block lớn.
**Liên kết tiếng Hàn:** `원격 직접 메모리 접근`, `RDMA`.

## 2. queue pair /kjuː pɛr/
**Part of speech:** noun
**Core meaning (English):** a paired send queue and receive queue used as the fundamental communication endpoint in many RDMA programming models.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cặp queue giao tiếp của một RDMA endpoint; một bên giữ operation gửi, bên kia giữ buffer nhận.
**Grammar & collocations:** `create a queue pair` — tạo QP; `queue-pair state` — state của QP; `QP transition` — chuyển state QP.
**Examples:** `The client created a queue pair before exchanging connection metadata with the server.` → Client tạo queue pair trước khi trao đổi metadata kết nối với server.
**Liên kết tiếng Hàn:** `큐 페어`, `QP`.

## 3. send queue /sɛnd kjuː/
**Part of speech:** noun
**Core meaning (English):** the queue on an RDMA endpoint that holds posted operations initiating sends, reads, writes, or other outbound work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàng operation phía gửi; application post work vào đây rồi NIC xử lý bất đồng bộ.
**Grammar & collocations:** `post to the send queue` — post operation; `send-queue depth` — độ sâu send queue.
**Examples:** `The application kept the send queue populated so the NIC always had work available.` → Application giữ send queue có sẵn work để NIC không bị rỗi.
**Liên kết tiếng Hàn:** `송신 큐`.

## 4. receive queue /rɪˈsiːv kjuː/
**Part of speech:** noun
**Core meaning (English):** the queue containing buffers that an RDMA endpoint has prepared to receive incoming two-sided messages.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàng buffer chờ nhận; nếu peer gửi message nhưng không có receive buffer phù hợp thì communication có thể fail.
**Grammar & collocations:** `post a receive buffer` — đăng buffer nhận; `receive-queue starvation` — thiếu buffer receive.
**Examples:** `The server posted receive buffers in advance to prevent the receive queue from running empty.` → Server post sẵn receive buffer để tránh receive queue bị cạn.
**Liên kết tiếng Hàn:** `수신 큐`.

## 5. work request /wɝk rɪˈkwɛst/
**Part of speech:** noun
**Core meaning (English):** a descriptor submitted by software that tells an RDMA device what communication or memory operation to perform.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “phiếu công việc” giao cho NIC; nó mô tả operation, buffer, length và các flag cần thiết.
**Grammar & collocations:** `post a work request` — submit work request; `work-request chain` — chuỗi request.
**Examples:** `Each work request referenced the buffer and operation type needed for the transfer.` → Mỗi work request trỏ tới buffer và loại operation cần cho transfer.
**Liên kết tiếng Hàn:** `워크 리퀘스트`, `작업 요청`.

## 6. work completion /wɝk kəmˈpliːʃən/
**Part of speech:** noun
**Core meaning (English):** a completion record produced after an RDMA work request finishes or fails.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record báo kết quả của work request; application đọc nó để biết operation thành công, lỗi hay truyền bao nhiêu byte.
**Grammar & collocations:** `poll a work completion` — poll completion; `completion status` — trạng thái completion.
**Examples:** `The event loop checked each work completion before reusing the corresponding buffer.` → Event loop kiểm tra work completion trước khi tái sử dụng buffer tương ứng.
**Liên kết tiếng Hàn:** `워크 컴플리션`, `작업 완료`.

## 7. completion queue /kəmˈpliːʃən kjuː/
**Part of speech:** noun
**Core meaning (English):** a queue in which an RDMA device reports completed work so software can observe progress asynchronously.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hộp thư completion của NIC; software có thể poll hoặc nhận event để biết operation nào đã xong.
**Grammar & collocations:** `poll the completion queue` — poll CQ; `completion-queue event` — event CQ.
**Examples:** `Busy polling the completion queue reduced latency at the cost of a dedicated CPU core.` → Busy-poll completion queue giảm latency nhưng tốn riêng một CPU core.
**Liên kết tiếng Hàn:** `완료 큐`, `CQ`.

## 8. memory registration /ˈmɛməri ˌrɛdʒəˈstreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of making an application memory buffer available to an RDMA device and establishing the permissions and mappings needed for direct access.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đăng ký buffer với NIC trước khi NIC được phép DMA vào đó; registration thường tương đối expensive nên buffer hay được reuse.
**Grammar & collocations:** `register memory` — đăng ký memory; `registration overhead` — overhead registration.
**Examples:** `The library reused registered buffers because repeated memory registration was expensive.` → Library tái sử dụng registered buffer vì đăng ký memory lặp lại khá tốn kém.
**Liên kết tiếng Hàn:** `메모리 등록`.

## 9. memory region /ˈmɛməri ˈriːdʒən/
**Part of speech:** noun
**Core meaning (English):** a registered range of application memory that an RDMA device may access under defined permissions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng RAM đã được “cấp giấy phép RDMA”; operation chỉ được chạm đúng region và quyền đã đăng ký.
**Grammar & collocations:** `registered memory region` — vùng memory đã register; `region boundary` — biên của region.
**Examples:** `The remote write was rejected because its address fell outside the registered memory region.` → Remote write bị từ chối vì address nằm ngoài memory region đã register.
**Liên kết tiếng Hàn:** `메모리 영역`, `MR`.

## 10. protection domain /prəˈtɛkʃən doʊˈmeɪn/
**Part of speech:** noun
**Core meaning (English):** an RDMA resource namespace that groups queue pairs and memory objects so access relationships can be isolated and validated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới security logic cho resource RDMA; QP và memory khác domain không được tùy ý dùng chung credential.
**Grammar & collocations:** `allocate a protection domain` — tạo PD; `PD-scoped resource` — resource thuộc PD.
**Examples:** `The runtime placed unrelated tenants in separate protection domains to prevent accidental cross-access.` → Runtime đặt tenant khác nhau vào protection domain riêng để tránh cross-access ngoài ý muốn.
**Liên kết tiếng Hàn:** `보호 도메인`, `PD`.

## 11. local key /ˈloʊkəl kiː/
**Part of speech:** noun
**Core meaning (English):** a credential associated with a registered memory region that authorizes local RDMA device access to that memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** key NIC local dùng để chứng minh buffer này đã được register và được phép DMA.
**Grammar & collocations:** `lkey value` — giá trị lkey; `validate the local key` — kiểm tra lkey.
**Examples:** `The descriptor included the local key for every buffer referenced by the work request.` → Descriptor chứa local key cho từng buffer mà work request sử dụng.
**Liên kết tiếng Hàn:** `로컬 키`, `lkey`.

## 12. remote key /rɪˈmoʊt kiː/
**Part of speech:** noun
**Core meaning (English):** a credential that authorizes a remote RDMA peer to access a specific registered memory region for permitted one-sided operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “chìa khóa từ xa”; peer cần đúng rkey cùng remote address để RDMA read/write vào region đó.
**Grammar & collocations:** `exchange an rkey` — trao đổi rkey; `remote-access permission` — quyền remote access.
**Examples:** `The server sent the remote key only after authenticating the client session.` → Server chỉ gửi remote key sau khi xác thực client session.
**Liên kết tiếng Hàn:** `리모트 키`, `rkey`.

## 13. zero-copy /ˈzɪroʊ ˈkɑpi/
**Part of speech:** adjective; noun
**Core meaning (English):** a data-transfer design that avoids unnecessary copying between intermediate buffers, especially between application and kernel memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data đi tới nơi cần đến mà không bị copy qua nhiều buffer trung gian; giảm memory bandwidth và CPU work.
**Grammar & collocations:** `zero-copy transfer` — transfer không copy trung gian; `zero-copy path` — data path zero-copy.
**Examples:** `A zero-copy path kept large messages from being duplicated in both kernel and user buffers.` → Zero-copy tránh việc message lớn bị nhân đôi ở cả kernel buffer và user buffer.
**Liên kết tiếng Hàn:** `제로 카피`.

## 14. kernel bypass /ˈkɝnəl ˈbaɪˌpæs/
**Part of speech:** noun
**Core meaning (English):** a networking technique that lets applications interact with network hardware while avoiding much of the conventional operating-system networking path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ qua phần lớn kernel network stack để giảm syscall, context switch và packet-processing overhead.
**Grammar & collocations:** `kernel-bypass networking` — networking bypass kernel; `userspace datapath` — datapath ở userspace.
**Examples:** `Kernel bypass cut per-message overhead enough to improve small-request latency.` → Kernel bypass giảm overhead mỗi message đủ để cải thiện latency request nhỏ.
**Liên kết tiếng Hàn:** `커널 바이패스`.

## 15. one-sided operation /wʌn ˈsaɪdɪd ˌɑpəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** an RDMA operation initiated by one endpoint that directly accesses remote registered memory without requiring the remote CPU to post a matching receive operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ initiator chủ động; remote CPU không cần chạy handler cho từng transfer.
**Grammar & collocations:** `one-sided read` — read một phía; `one-sided write` — write một phía.
**Examples:** `The cache protocol used one-sided operations so readers could fetch remote values without waking the remote process.` → Cache protocol dùng one-sided operation để reader lấy value từ xa mà không đánh thức remote process.
**Liên kết tiếng Hàn:** `단방향 RDMA 연산`.

## 16. two-sided messaging /tuː ˈsaɪdɪd ˈmɛsɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** communication in which the sender posts a send operation and the receiver prepares a corresponding receive buffer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cả hai phía đều tham gia rõ ràng; sender gửi, receiver phải chuẩn bị receive request.
**Grammar & collocations:** `two-sided send/receive` — send/receive hai phía; `posted receive` — receive đã post.
**Examples:** `Control messages used two-sided messaging because the receiver needed explicit notification of every request.` → Control message dùng two-sided messaging vì receiver cần được báo rõ từng request.
**Liên kết tiếng Hàn:** `양방향 메시징`.

## 17. RDMA read /ˌɑrdiːɛmˈeɪ riːd/
**Part of speech:** noun
**Core meaning (English):** a one-sided operation that copies data from remote registered memory into local registered memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** local NIC kéo data từ RAM của peer về local buffer mà remote CPU không cần copy thủ công.
**Grammar & collocations:** `issue an RDMA read` — phát RDMA read; `read latency` — latency read.
**Examples:** `The client issued an RDMA read to fetch the metadata block directly from the server's registered buffer.` → Client phát RDMA read để lấy metadata block trực tiếp từ registered buffer của server.
**Liên kết tiếng Hàn:** `RDMA 읽기`.

## 18. RDMA write /ˌɑrdiːɛmˈeɪ raɪt/
**Part of speech:** noun
**Core meaning (English):** a one-sided operation that places local data directly into remote registered memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** local NIC đẩy data vào RAM đã đăng ký của peer mà không cần remote receive handler cho từng write.
**Grammar & collocations:** `issue an RDMA write` — phát RDMA write; `write with immediate` — variant có notification bổ sung.
**Examples:** `The replication path used RDMA writes to place log fragments into remote memory with very low CPU overhead.` → Replication path dùng RDMA write để đặt log fragment vào remote memory với CPU overhead rất thấp.
**Liên kết tiếng Hàn:** `RDMA 쓰기`.

## 19. InfiniBand /ɪnˈfɪnəˌbænd/
**Part of speech:** noun
**Core meaning (English):** a high-performance switched interconnect architecture widely used for low-latency RDMA communication in clusters and supercomputers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fabric chuyên cho cluster/HPC, thiết kế cho latency thấp, throughput cao và RDMA-native communication.
**Grammar & collocations:** `InfiniBand fabric` — fabric InfiniBand; `InfiniBand adapter` — adapter InfiniBand.
**Examples:** `The compute cluster used InfiniBand to connect GPU nodes with low-latency collective communication.` → Compute cluster dùng InfiniBand để nối GPU node cho collective communication latency thấp.
**Liên kết tiếng Hàn:** `인피니밴드`.

## 20. RoCE /ˈroʊsiː/
**Part of speech:** noun
**Core meaning (English):** RDMA over Converged Ethernet; a family of mechanisms for carrying RDMA traffic over Ethernet networks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa semantics RDMA lên Ethernet fabric; vẫn muốn latency thấp và CPU overhead thấp nhưng dùng hạ tầng Ethernet.
**Grammar & collocations:** `RoCE network` — mạng RoCE; `RoCEv2 traffic` — traffic RoCEv2; `lossless Ethernet` — Ethernet được cấu hình để hạn chế loss.
**Examples:** `The datacenter deployed RoCE so storage traffic could use RDMA without replacing the Ethernet fabric.` → Datacenter triển khai RoCE để storage traffic dùng RDMA mà không phải thay Ethernet fabric.
**Liên kết tiếng Hàn:** `RoCE`, `이더넷 기반 RDMA`.

## Review in context

A low-latency storage client may use **remote direct memory access** over **RoCE** or **InfiniBand**. It first creates a **queue pair** containing a **send queue** and **receive queue**, then submits each **work request** to the NIC. Finished operations appear as a **work completion** on a **completion queue**. Before any transfer, the application performs **memory registration**, producing a protected **memory region** inside a **protection domain**. The NIC uses a **local key** for local access, while a peer needs the corresponding **remote key** for authorized remote access. Because the datapath can support **zero-copy** and **kernel bypass**, CPU overhead is much lower than in a conventional socket path. For control traffic, the program may use **two-sided messaging**; for direct data movement, it can use a **one-sided operation** such as an **RDMA read** or **RDMA write**.

**Bản dịch tiếng Việt:** Một storage client cần latency thấp có thể dùng **remote direct memory access** qua **RoCE** hoặc **InfiniBand**. Nó tạo **queue pair** gồm **send queue** và **receive queue**, rồi submit từng **work request** cho NIC. Operation hoàn thành xuất hiện dưới dạng **work completion** trong **completion queue**. Trước khi transfer, application thực hiện **memory registration**, tạo **memory region** được bảo vệ bên trong **protection domain**. NIC dùng **local key** cho local access, còn peer cần **remote key** tương ứng để remote access hợp lệ. Vì datapath có thể hỗ trợ **zero-copy** và **kernel bypass**, CPU overhead thấp hơn nhiều so với socket path truyền thống. Với control traffic, chương trình có thể dùng **two-sided messaging**; với direct data movement, nó có thể dùng **one-sided operation** như **RDMA read** hoặc **RDMA write**.