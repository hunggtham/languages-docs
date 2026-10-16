# C2 Vocabulary 199 — Actor model message-passing concurrency, mailbox saturation heuristics, and hierarchical supervision trees

## 1. actor /ˈæktər/

**Loại từ & vị trí trong câu:** `noun [C]` — Subject or object in sentences discussing concurrent primitive processes in distributed systems.

**Core meaning — English:** An autonomous computational entity that encapsulates state, behavior, and a mailbox, communicating exclusively through asynchronous message passing without shared memory.

**Core meaning & mental image — Tiếng Việt:** Tác nhân / Tiến trình độc lập — Thực thể tính toán tự trị gói gọn trạng thái, hành vi và hộp thư, giao tiếp hoàn toàn qua việc gửi tin nhắn bất đồng bộ mà không dùng chung bộ nhớ. Hình dung một nhân viên bưu điện chỉ nhận thư vào hòm thư cá nhân và xử lý từng bức một.

**Grammar & collocations:** `spawn an actor` — khởi tạo một tác nhân; `actor state encapsulation` — sự bao đóng trạng thái tác nhân; `autonomous actor` — tác nhân tự trị.

**Register & nuance:** Highly formal, technical term used in distributed systems architecture and concurrent programming theory. Distinct from object-oriented objects due to strict message isolation.

**Examples:** The distributed orchestration engine spawns a lightweight actor for each connected client session to ensure absolute state isolation. → Động cơ điều phối phân tán khởi tạo một tác nhân nhẹ cho mỗi phiên khách hàng kết nối nhằm đảm bảo sự cách ly trạng thái tuyệt đối.

**Liên kết tiếng Hàn:** `행위자` (行爲者) — Tác nhân / Người thực hiện

---

## 2. mailbox /ˈmeɪlbɑːks/

**Loại từ & vị trí trong câu:** `noun [C]` — Subject, direct object, or prepositional object when discussing message queues in actor systems.

**Core meaning — English:** The unbounded or bounded FIFO message queue attached to an actor where incoming asynchronous messages are buffered before sequential processing.

**Core meaning & mental image — Tiếng Việt:** Hộp thư / Hàng đợi tin nhắn — Hàng đợi FIFO có giới hạn hoặc vô hạn gắn liền với một tác nhân nơi các tin nhắn bất đồng bộ đến được đệm trước khi xử lý tuần tự. Hình dung chiếc hòm thư trước cửa nhà nhận thư từ nhiều người gửi và lưu giữ theo thứ tự thời gian.

**Grammar & collocations:** `mailbox saturation` — sự bão hòa hộp thư; `drain the mailbox` — làm trống hộp thư; `mailbox buffer overflow` — tràn bộ đệm hộp thư.

**Register & nuance:** Technical and specialized in concurrent programming and message-passing architectures.

**Examples:** Rapidly surging telemetry traffic caused severe mailbox saturation in the ingestion actor, triggering backpressure mechanisms. → Lưu lượng viễn trắc tăng vọt đã gây ra tình trạng bão hòa hộp thư nghiêm trọng ở tác nhân tiếp nhận, kích hoạt các cơ chế áp lực ngược.

**Liên kết tiếng Hàn:** `우편함` (郵便函) — Hộp thư

---

## 3. supervisor /ˈsuːpərvaɪzər/

**Loại từ & vị trí trong câu:** `noun [C]` — Subject or object in fault-tolerant architecture discussions.

**Core meaning — English:** A specialized supervising process responsible for monitoring worker actors, detecting failures, and executing predefined recovery strategies according to fault-tolerance policies.

**Core meaning & mental image — Tiếng Việt:** Tiến trình giám sát / Người giám sát — Tiến trình chuyên trách giám sát các tác nhân làm việc, phát hiện sự cố và thực hiện các chiến lược khôi phục đã định trước theo chính sách chịu lỗi. Hình dung một người quản lý xưởng kiểm tra các công nhân và ngay lập tức thay thế người làm hỏng việc.

**Grammar & collocations:** `hierarchical supervisor` — tiến trình giám sát phân cấp; `supervisor tree` — cây giám sát; `fault supervisor` — giám sát sự cố.

**Register & nuance:** Formal architectural terminology in fault-tolerant runtimes like Erlang/OTP and Akka.

**Examples:** The top-level supervisor monitors critical database connection workers and restarts them instantaneously upon unexpected crashes. → Tiến trình giám sát cấp cao nhất giám sát các nhân viên kết nối cơ sở dữ liệu quan trọng và khởi động lại chúng ngay lập tức khi xảy ra sự cố bất ngờ.

**Liên kết tiếng Hàn:** `감독자` (監督者) — Người giám sát / Giám sát viên

---

## 4. supervision /ˈsuːpərvɪʒn/

**Loại từ & vị trí trong câu:** `noun [U]` — Subject, object, or object of preposition in reliability engineering discussions.

**Core meaning — English:** The structural framework and policy governing the monitoring, isolation, and lifecycle management of subordinate worker processes in fault-tolerant systems.

**Core meaning & mental image — Tiếng Việt:** Cơ chế giám sát — Khung cấu trúc và chính sách chi phối việc giám sát, cách ly và quản lý vòng đời của các tiến trình công nhân cấp dưới trong các hệ thống chịu lỗi. Hình dung hệ thống camera và quy trình vận hành giám sát an toàn trong nhà máy hạt nhân.

**Grammar & collocations:** `supervision tree` — cây giám sát; `supervision strategy` — chiến lược giám sát; `hierarchical supervision` — giám sát phân cấp.

**Register & nuance:** Formal, technical terminology in reliable distributed systems.

**Examples:** Strict supervision policies ensure that localized component failures never compromise the integrity of the broader application cluster. → Các chính sách giám sát nghiêm ngặt đảm bảo rằng các lỗi thành phần cục bộ không bao giờ làm tổn hại đến tính toàn vẹn của cụm ứng dụng rộng lớn hơn.

**Liên kết tiếng Hàn:** `감독` (監督) — Sự giám sát / Kiểm soát

---

## 5. backpressure /ˈbækˌprɛʃər/

**Loại từ & vị trí trong câu:** `noun [U]` — Subject or object when discussing flow control in reactive systems.

**Core meaning — English:** A flow control mechanism that signals upstream producers to throttle message generation when downstream consumers or actor mailboxes approach saturation.

**Core meaning & mental image — Tiếng Việt:** Áp lực ngược / Cơ chế kiểm soát dòng chảy — Cơ chế kiểm soát dòng chảy báo hiệu cho các nhà sản xuất thượng nguồn giảm tốc độ tạo tin nhắn khi người tiêu dùng hạ nguồn hoặc hộp thư tác nhân sắp bão hòa. Hình dung hệ thống van nước tự động siết lại khi đường ống phía dưới đã đầy nước.

**Grammar & collocations:** `apply backpressure` — áp dụng áp lực ngược; `backpressure propagation` — sự truyền tải áp lực ngược; `reactive backpressure` — áp lực ngược phản ứng.

**Register & nuance:** Highly technical term in reactive streams, networking, and actor systems.

**Examples:** When consumer mailboxes exceed their capacity thresholds, backpressure propagates upstream to prevent catastrophic out-of-memory errors. → Khi hộp thư người tiêu dùng vượt quá ngưỡng dung lượng, áp lực ngược lan truyền lên thượng nguồn để ngăn ngừa lỗi tràn bộ nhớ thảm khốc.

**Liên kết tiếng Hàn:** `배압` (背壓) — Áp lực ngược

---

## 6. isolation /ˌaɪsəˈleɪʃən/

**Loại từ & vị trí trong câu:** `noun [U, C]` — Subject or object in discussions of state protection and fault containment.

**Core meaning — English:** The architectural guarantee that individual actors maintain exclusive control over their internal state, preventing shared-memory corruption and race conditions.

**Core meaning & mental image — Tiếng Việt:** Sự cách ly (trạng thái / bộ nhớ) — Đảm bảo kiến trúc rằng các tác nhân riêng lẻ duy trì quyền kiểm soát độc quyền đối với trạng thái nội bộ của chúng, ngăn chặn tham nhũng bộ nhớ chung và điều kiện tranh chấp. Hình dung các phòng thí nghiệm sinh học cách ly hoàn toàn để vi khuẩn không lây lan ra ngoài.

**Grammar & collocations:** `memory isolation` — cách ly bộ nhớ; `state isolation` — cách ly trạng thái; `fault isolation` — cách ly lỗi.

**Register & nuance:** Formal software engineering vocabulary crucial for concurrency and security.

**Examples:** Share-nothing memory isolation eliminates the need for explicit mutex locks, drastically simplifying concurrent programming models. → Sự cách ly bộ nhớ không chia sẻ loại trừ sự cần thiết của các khóa mutex tường minh, đơn giản hóa đáng kể các mô hình lập trình đồng thời.

**Liên kết tiếng Hàn:** `고립` (孤立) hoặc `격리` (隔離) — Sự cách ly / Sự cô lập

---

## 7. remoting /ˈriːmoʊtɪŋ/

**Loại từ & vị trí trong câu:** `noun [U]` — Subject or object when discussing distributed actor communication across network nodes.

**Core meaning — English:** The capability of an actor framework to transparently locate and communicate with actor instances running on remote physical nodes across a network.

**Core meaning & mental image — Tiếng Việt:** Khả năng giao tiếp từ xa / Định vị từ xa — Khả năng của một khuôn khổ tác nhân trong việc định vị và giao tiếp một cách minh bạch với các thể hiện tác nhân chạy trên các nút vật lý từ xa qua mạng. Hình dung hệ thống điện thoại nội hạt có thể tự động chuyển cuộc gọi đi các quốc gia khác mà người gọi không cần biết mã vùng phức tạp.

**Grammar & collocations:** `actor remoting` — định vị tác nhân từ xa; `transparent remoting` — định vị từ xa suốt trong suốt; `remoting configuration` — cấu hình từ xa.

**Register & nuance:** Technical jargon in distributed computing and cluster orchestration.

**Examples:** Actor remoting enables seamless scaling across multiple cloud nodes by abstracting network topology into logical addresses. → Định vị tác nhân từ xa cho phép mở rộng quy mô liền mạch trên nhiều nút đám mây bằng cách trừu tượng hóa cấu trúc mạng thành các địa chỉ logic.

**Liên kết tiếng Hàn:** `원격화` (遠隔化) — Sự điều khiển từ xa / Định vị từ xa

---

## 8. transparency /trænsˈpɛrənsi/

**Loại từ & vị trí trong câu:** `noun [U]` — Subject or object in distributed systems design.

**Core meaning — English:** The property of masking the complex underlying network boundaries, serialization overheads, and physical locations so that remote actors are addressed identically to local ones.

**Core meaning & mental image — Tiếng Việt:** Tính trong suốt (vị trí / mạng) — Thuộc tính che giấu ranh giới mạng phức tạp bên dưới, chi phí tuần tự hóa và vị trí vật lý sao cho các tác nhân từ xa được định địa chỉ giống hệt như các tác nhân cục bộ. Hình dung tấm kính trong suốt cho phép nhìn xuyên qua mà không nhận ra khung cửa sổ cản trở.

**Grammar & collocations:** `location transparency` — tính trong suốt về vị trí; `network transparency` — tính trong suốt về mạng; `transparent messaging` — nhắn tin trong suốt.

**Register & nuance:** Formal architectural term denoting abstraction of distribution complexity.

**Examples:** Location transparency allows developers to refactor a monolithic cluster into microservices without rewriting message dispatch logic. → Tính trong suốt về vị trí cho phép các nhà phát triển tái cấu trúc một cụm nguyên khối thành các dịch vụ vi mô mà không cần viết lại logic điều phối tin nhắn.

**Liên kết tiếng Hàn:** `투명성` (透明性) — Tính trong suốt

---

## 9. dispatch /dɪˈspætʃ/

**Loại từ & vị trí trong câu:** `verb [T]` or `noun [C, U]` — Action predicate or process name in scheduling engines.

**Core meaning — English:** To route, assign, or schedule incoming asynchronous messages or tasks from a queue to their corresponding processing worker threads or actors.

**Core meaning & mental image — Tiếng Việt:** Điều phối / Gửi đi — Định tuyến, gán hoặc lên lịch cho các tin nhắn hoặc tác vụ bất đồng bộ đến từ hàng đợi đến các luồng công nhân hoặc tác nhân xử lý tương ứng. Hình dung nhân viên điều phối xe cứu thương nhận cuộc gọi và lập tức phân công xe gần nhất xuất phát.

**Grammar & collocations:** `message dispatch` — điều phối tin nhắn; `dispatch queue` — hàng đợi điều phối; `fair dispatch` — điều phối công bằng.

**Register & nuance:** Professional technical term used across operating systems and concurrent frameworks.

**Examples:** The thread pool scheduler dispatches ready actors to available CPU cores with minimal context-switching overhead. → Bộ lập lịch hồ bơi luồng điều phối các tác nhân sẵn sàng đến các lõi CPU có sẵn với chi phí chuyển đổi ngữ cảnh tối thiểu.

**Liên kết tiếng Hàn:** `발송` (發送) hoặc `배치` (配置) — Sự điều phối / Gửi đi

---

## 10. enqueueing /ɪnˈkjuːɪŋ/

**Loại từ & vị trí trong câu:** `noun [U]` or participle acting as modifier in queue management discussions.

**Core meaning — English:** The programmatic operation of appending a new message or task onto the tail end of a FIFO buffer or mailbox queue.

**Core meaning & mental image — Tiếng Việt:** Thao tác đưa vào hàng đợi — Thao tác lập trình nối thêm một tin nhắn hoặc tác vụ mới vào cuối bộ đệm FIFO hoặc hàng đợi hộp thư. Hình dung việc xếp hàng đứng vào cuối một hàng dài chờ mua vé xem phim.

**Grammar & collocations:** `asynchronous enqueueing` — đưa vào hàng đợi bất đồng bộ; `enqueueing overhead` — chi phí đưa vào hàng đợi; `high-throughput enqueueing` — đưa vào hàng đợi thông lượng cao.

**Register & nuance:** Precise technical computer science vocabulary.

**Examples:** Lock-free concurrent enqueueing algorithms ensure that multiple producer threads can insert messages into the mailbox without blocking. → Các thuật toán đưa vào hàng đợi đồng thời không khóa đảm bảo rằng nhiều luồng nhà sản xuất có thể chèn tin nhắn vào hộp thư mà không bị chặn.

**Liên kết tiếng Hàn:** `큐 넣기` — Đưa vào hàng đợi (Enqueueing)

---

## 11. deqeueuing /ˌdiːˈkjuːɪŋ/ (dequeueing)

**Loại từ & vị trí trong câu:** `noun [U]` or participle in buffer processing contexts.

**Core meaning — English:** The operation of retrieving and removing the front element from a queue or mailbox for sequential execution by a consumer.

**Core meaning & mental image — Tiếng Việt:** Thao tác lấy ra khỏi hàng đợi — Thao tác truy xuất và xóa phần tử ở đầu hàng đợi hoặc hộp thư để người tiêu dùng thực thi tuần tự. Hình dung người phục vụ lấy món ăn đầu tiên ra khỏi cửa sổ nhà bếp để mang cho khách.

**Grammar & collocations:** `efficient dequeueing` — lấy ra hiệu quả; `dequeueing latency` — độ trễ lấy ra khỏi hàng đợi; `concurrent dequeueing` — lấy ra đồng thời.

**Register & nuance:** Standard computer science and data structures terminology.

**Examples:** The worker loop continuously performs dequeueing operations on its local mailbox until no pending messages remain. → Vòng lặp công nhân liên tục thực hiện các thao tác lấy ra khỏi hàng đợi trên hộp thư cục bộ của nó cho đến khi không còn tin nhắn đang chờ xử lý.

**Liên kết tiếng Hàn:** `큐 빼기` — Lấy ra khỏi hàng đợi (Dequeueing)

---

## 12. serialization /ˌsɪriəlaɪˈzeɪʃən/

**Loại từ & vị trí trong câu:** `noun [U]` — Subject or object in network data transmission contexts.

**Core meaning — English:** The process of converting complex in-memory data structures or actor messages into a flat byte stream for network transmission or persistence.

**Core meaning & mental image — Tiếng Việt:** Sự tuần tự hóa (dữ liệu) — Quá trình chuyển đổi các cấu trúc dữ liệu trong bộ nhớ phức tạp hoặc tin nhắn tác nhân thành dòng byte phẳng để truyền qua mạng hoặc lưu trữ bền vững. Hình dung việc gấp gọn một món đồ chơi cồng kềnh thành một dải băng phẳng để dễ dàng đóng gói gửi qua bưu điện.

**Grammar & collocations:** `binary serialization` — tuần tự hóa nhị phân; `serialization overhead` — chi phí tuần tự hóa; `custom serialization` — tuần tự hóa tùy chỉnh.

**Register & nuance:** Essential engineering terminology for distributed systems and inter-process communication.

**Examples:** Minimizing serialization overhead is paramount when passing large payloads between distributed actors across network boundaries. → Giảm thiểu chi phí tuần tự hóa là tối quan trọng khi truyền tải trọng lớn giữa các tác nhân phân tán qua ranh giới mạng.

**Liên kết tiếng Hàn:** `직렬화` (直列化) — Sự tuần tự hóa

---

## 13. deserialization /ˌdiːsɪriəlaɪˈzeɪʃən/

**Loại từ & vị trí trong câu:** `noun [U]` — Subject or object in data ingestion contexts.

**Core meaning — English:** The inverse process of reconstructing original in-memory data structures or actor messages from a received byte stream.

**Core meaning & mental image — Tiếng Việt:** Sự giải tuần tự hóa — Quá trình ngược lại là tái tạo các cấu trúc dữ liệu trong bộ nhớ ban đầu hoặc tin nhắn tác nhân từ dòng byte nhận được. Hình dung việc mở gói dải băng phẳng ra và lắp ráp lại thành món đồ chơi ban đầu.

**Grammar & collocations:** `safe deserialization` — giải tuần tự hóa an toàn; `deserialization vulnerability` — lỗ hổng giải tuần tự hóa; `fast deserialization` — giải tuần tự hóa nhanh.

**Register & nuance:** Critical term in both performance engineering and cybersecurity.

**Examples:** Vulnerabilities in insecure deserialization routines can allow malicious actors to execute arbitrary code upon message receipt. → Các lỗ hổng trong các quy trình giải tuần tự hóa kém an toàn có thể cho phép kẻ độc hại thực thi mã tùy ý khi nhận được tin nhắn.

**Liên kết tiếng Hàn:** `역직렬화` (逆直列化) — Sự giải tuần tự hóa

---

## 14. crash /kræʃ/

**Loại từ & vị trí trong câu:** `noun [C]` or `verb [I]` — Event or action predicate in reliability engineering.

**Core meaning — English:** An abrupt, unintended termination of a process or worker due to unhandled exceptions, memory faults, or invariant violations.

**Core meaning & mental image — Tiếng Việt:** Sự sập / Sự cố dừng đột ngột — Việc chấm dứt đột ngột, không mong muốn của một tiến trình hoặc công nhân do ngoại lệ chưa được xử lý, lỗi bộ nhớ hoặc vi phạm bất biến. Hình dung chiếc xe đang chạy thì đột ngột chết máy giữa đường do hỏng động cơ.

**Grammar & collocations:** `worker crash` — sự cố sập công nhân; `crash isolation` — cách ly sự cố; `let it crash philosophy` — triết lý "để mặc nó sập".

**Register & nuance:** Standard computing term; in actor systems (Erlang style), crashes are expected and handled gracefully by supervisors.

**Examples:** The supervisor intercepted the unexpected worker crash and restarted the subsystem within milliseconds without halting the entire node. → Tiến trình giám sát đã chặn sự cố sập công nhân bất ngờ và khởi động lại hệ thống con trong vòng mili giây mà không làm dừng toàn bộ nút.

**Liên kết tiếng Hàn:** `크래시` 또는 `시스템 다운` — Sự cố sập hệ thống

---

## 15. restart /ˌriːˈstɑːrt/

**Loại từ & vị trí trong câu:** `verb [T, I]` or `noun [C]` — Action predicate or recovery event in supervision trees.

**Core meaning — English:** The automated procedure initiated by a supervisor to re-initialize and spawn a fresh instance of a failed worker actor with a clean state.

**Core meaning & mental image — Tiếng Việt:** Khởi động lại — Quy trình tự động do người giám sát khởi xướng nhằm khởi tạo lại và sinh ra một thể hiện mới của tác nhân công nhân bị lỗi với trạng thái sạch sẽ. Hình dung việc rút nguồn máy tính bị đơ rồi cắm lại để nó hoạt động bình thường.

**Grammar & collocations:** `automatic restart` — khởi động lại tự động; `restart intensity` — cường độ khởi động lại; `one-for-one restart` — khởi động lại từng cái một.

**Register & nuance:** Standard operational and fault-tolerance terminology.

**Examples:** Under the one-for-one restart strategy, only the faulted worker actor is re-initialized while sibling actors remain untouched. → Theo chiến lược khởi động lại từng cái một, chỉ có tác nhân công nhân bị lỗi được khởi tạo lại trong khi các tác nhân anh em vẫn không bị ảnh hưởng.

**Liên kết tiếng Hàn:** `재시작` (再始動) — Khởi động lại

---

## 16. strategy /ˈstrætədʒi/

**Loại từ & vị trí trong câu:** `noun [C]` — Subject or object in architectural configuration contexts.

**Core meaning — English:** A predefined policy and algorithmic rule set governing how a supervisor responds to child worker failures, such as restarting single or linked actors.

**Core meaning & mental image — Tiếng Việt:** Chiến lược (giám sát / khôi phục) — Một bộ quy tắc chính sách và thuật toán được xác định trước chi phối cách người giám sát phản ứng với các lỗi của tác nhân con, chẳng hạn như khởi động lại các tác nhân đơn lẻ hoặc liên kết. Hình dung chiến lược quân sự vạch sẵn các bước rút退 và phản công khi tuyến phòng thủ bị chọc thủng.

**Grammar & collocations:** `supervision strategy` — chiến lược giám sát; `restart strategy` — chiến lược khởi động lại; `one-for-all strategy` — chiến lược cho tất cả.

**Register & nuance:** Formal technical term in system design and architecture patterns.

**Examples:** Choosing the appropriate supervision strategy is essential for maintaining high availability in distributed transaction processors. → Việc lựa chọn chiến lược giám sát thích hợp là điều cốt yếu để duy trì độ sẵn sàng cao trong các bộ xử lý giao dịch phân tán.

**Liên kết tiếng Hàn:** `전략` (戰略) — Chiến lược

---

## 17. escalation /ˌɛskəˈleɪʃən/

**Loại từ & vị trí trong câu:** `noun [U, C]` — Subject or object in fault propagation discussions.

**Core meaning — English:** The structural propagation of an unhandled failure or restart limit exhaustion from a lower-level supervisor up to a parent supervisor in a hierarchy.

**Core meaning & mental image — Tiếng Việt:** Sự leo thang (lỗi) — Sự lan truyền cấu trúc của một lỗi chưa được xử lý hoặc việc cạn kiệt giới hạn khởi động lại từ người giám sát cấp dưới lên người giám sát cấp trên trong phân cấp. Hình dung vụ việc cấp cơ sở không giải quyết được nên phải trình lên cấp quản lý cao hơn.

**Grammar & collocations:** `failure escalation` — sự leo thang lỗi; `escalation path` — đường dẫn leo thang; `error escalation` — leo thang lỗi.

**Register & nuance:** Formal engineering and management term for handling cascading failures.

**Examples:** If a worker crashes repeatedly within a tight time window, the supervisor triggers an escalation to its parent supervisor. → Nếu một tác nhân gặp sự cố liên tục trong cửa sổ thời gian ngắn, người giám sát sẽ kích hoạt việc leo thang lên người giám sát cha của nó.

**Liên kết tiếng Hàn:** `에스컬레이션` 또는 `상위 보고` — Sự leo thang / Chuyển lên cấp trên

---

## 18. thread /θrɛd/

**Loại từ & vị trí trong câu:** `noun [C]` — Subject or object in operating system and execution context discussions.

**Core meaning — English:** The smallest sequence of programmed instructions that can be managed independently by an operating system scheduler.

**Core meaning & mental image — Tiếng Việt:** Luồng (thực thi) — Chuỗi lệnh được lập trình nhỏ nhất có thể được quản lý độc lập bởi bộ lập lịch hệ điều hành. Hình dung một sợi chỉ trong cuộn chỉ lớn, nhiều sợi chạy song song dệt thành tấm vải hoàn chỉnh.

**Grammar & collocations:** `worker thread` — luồng công nhân; `thread pool` — hồ bơi luồng; `thread contention` — sự tranh chấp luồng.

**Register & nuance:** Fundamental computing concept; contrasted with lightweight actors which multiplex over a small pool of OS threads.

**Examples:** Actor runtimes multiplex millions of active actors across a fixed pool of OS threads to maximize CPU utilization. → Các thời gian chạy tác nhân đa hợp hàng triệu tác nhân hoạt động trên một hồ bơi cố định các luồng hệ điều hành để tối đa hóa việc sử dụng CPU.

**Liên kết tiếng Hàn:** `스레드` — Luồng

---

## 19. multiplex /ˈmʌltɪˌplɛks/

**Loại từ & vị trí trong câu:** `verb [T]` — Action predicate in scheduling and networking contexts.

**Core meaning — English:** To share a limited physical resource, such as a CPU thread pool or network port, among a vast number of virtual entities or signals.

**Core meaning & mental image — Tiếng Việt:** Đa hợp / Ghép kênh — Chia sẻ một tài nguyên vật lý hạn chế, chẳng hạn như hồ bơi luồng CPU hoặc cổng mạng, giữa rất nhiều thực thể ảo hoặc tín hiệu. Hình dung một tổng đài điện thoại kết nối nhiều cuộc gọi đồng thời qua một vài đường dây chính.

**Grammar & collocations:** `multiplex actors` — đa hợp các tác nhân; `multiplexing overhead` — chi phí đa hợp; `io multiplexing` — đa hợp đầu vào/đầu ra.

**Register & nuance:** Technical engineering term used across operating systems and telecommunications.

**Examples:** The asynchronous event loop multiplexes thousands of concurrent socket connections onto a single event-handling thread. → Vòng lặp sự kiện bất đồng bộ đa hợp hàng ngàn kết nối ổ cắm đồng thời lên một luồng xử lý sự kiện duy nhất.

**Liên kết tiếng Hàn:** `멀티플렉스` 또는 `다중화` (多重化) — Sự đa hợp / Ghép kênh

---

## 20. saturation /ˌsætʃəˈreɪʃən/

**Loại từ & vị trí trong câu:** `noun [U]` — Subject or object in performance and resource monitoring contexts.

**Core meaning — English:** The state in which a resource, buffer, or mailbox has reached its maximum capacity and can accept no further incoming units without failing or dropping data.

**Core meaning & mental image — Tiếng Việt:** Sự bão hòa (tài nguyên / hộp thư) — Trạng thái mà một tài nguyên, bộ đệm hoặc hộp thư đã đạt đến dung lượng tối đa và không thể nhận thêm bất kỳ đơn vị đến nào mà không bị lỗi hoặc rớt dữ liệu. Hình dung miếng bọt biển hút nước đến mức nước rỉ ra ngoài và không thể thấm thêm.

**Grammar & collocations:** `mailbox saturation` — bão hòa hộp thư; `resource saturation` — bão hòa tài nguyên; `saturation threshold` — ngưỡng bão hòa.

**Register & nuance:** Formal technical vocabulary in performance tuning and capacity planning.

**Examples:** System administrators monitor memory and CPU saturation metrics to proactively scale out cluster nodes before performance degrades. → Các quản trị viên hệ thống theo dõi các chỉ số bão hòa bộ nhớ và CPU để chủ động mở rộng quy mô các nút cụm trước khi hiệu suất suy giảm.

**Liên kết tiếng Hàn:** `포화` (飽和) — Sự bão hòa

---

## 21. throughput /ˈθruːˌpʊt/

**Loại từ & vị trí trong câu:** `noun [U]` — Subject or object in benchmarking and system performance discussions.

**Core meaning — English:** The rate at which a system, actor cluster, or message pipeline successfully processes transactions or messages over a given time interval.

**Core meaning & mental image — Tiếng Việt:** Thông lượng — Tốc độ mà một hệ thống, cụm tác nhân hoặc đường ống tin nhắn xử lý thành công các giao dịch hoặc tin nhắn trong một khoảng thời gian cho trước. Hình dung lượng ô tô đi qua trạm thu phí trong mỗi phút giờ cao điểm.

**Grammar & collocations:** `high throughput` — thông lượng cao; `message throughput` — thông lượng tin nhắn; `throughput benchmark` — chuẩn mực thông lượng.

**Register & nuance:** Standard performance engineering and systems architecture terminology.

**Examples:** Shifting from shared-memory locking to an actor-based concurrency model increased overall system message throughput by threefold. → Việc chuyển từ khóa bộ nhớ chung sang mô hình đồng thời dựa trên tác nhân đã làm tăng thông lượng tin nhắn toàn hệ thống lên gấp ba lần.

**Liên kết tiếng Hàn:** `처리량` (處理量) — Thông lượng / Khối lượng xử lý

---

## 22. latency /ˈleɪtənsi/

**Loại từ & vị trí trong câu:** `noun [U, C]` — Subject or object in timing and responsiveness analyses.

**Core meaning — English:** The time delay between the initiation of a request or message enqueueing and its eventual processing and completion by a worker.

**Core meaning & mental image — Tiếng Việt:** Độ trễ — Khoảng thời gian chậm trễ giữa việc khởi tạo yêu cầu hoặc đưa tin nhắn vào hàng đợi cho đến khi nó được xử lý và hoàn thành bởi công nhân. Hình dung khoảng thời gian chờ đợi từ lúc bấm nút thang máy đến khi cửa thang máy mở ra.

**Grammar & collocations:** `dispatch latency` — độ trễ điều phối; `network latency` — độ trễ mạng; `tail latency` — độ trễ đuôi.

**Register & nuance:** Critical performance metric in real-time systems, networking, and distributed software.

**Examples:** Excessive mailbox queuing can introduce unpredictable tail latency spikes in real-time financial trading engines. → Việc xếp hàng hộp thư quá mức có thể gây ra các đỉnh độ trễ đuôi khó lường trong các công cụ giao dịch tài chính thời gian thực.

**Liên kết tiếng Hàn:** `지연 시간` (遲延時間) — Độ trễ

---

## 23. topology /təˈpɑːlədʒi/

**Loại từ & vị trí trong câu:** `noun [U, C]` — Subject or object in network and cluster configuration contexts.

**Core meaning — English:** The structural arrangement and interconnection layout of nodes, actors, and supervisors within a distributed system or network.

**Core meaning & mental image — Tiếng Việt:** Cấu trúc mạng / Hình học mạng — Sự sắp xếp cấu trúc và bố trí kết nối giữa các nút, tác nhân và người giám sát trong một hệ thống phân tán hoặc mạng. Hình dung sơ đồ mạng nhện kết nối các điểm nút liên lạc với nhau trong thành phố.

**Grammar & collocations:** `network topology` — cấu trúc mạng; `cluster topology` — cấu trúc cụm; `actor topology` — cấu trúc tác nhân.

**Register & nuance:** Formal architectural terminology in networking and distributed systems.

**Examples:** Reconfiguring the cluster topology allows the orchestration engine to reroute actor messages around failed physical nodes automatically. → Việc định cấu hình lại cấu trúc cụm cho phép động cơ điều phối tự động định tuyến lại các tin nhắn tác nhân tránh các nút vật lý bị lỗi.

**Liên kết tiếng Hàn:** `토폴로지` 또는 `망 구성` (網構成) — Cấu trúc mạng / Hình học mạng

---

## 24. orchestration /ˌɔːrkɪˈstreɪʃən/

**Loại từ & vị trí trong câu:** `noun [U, C]` — Subject or object in deployment and system management contexts.

**Core meaning — English:** The automated configuration, coordination, and management of complex distributed actor containers, nodes, and lifecycle policies.

**Core meaning & mental image — Tiếng Việt:** Sự điều phối (hệ thống / cụm) — Việc tự động cấu hình, phối hợp và quản lý các vùng chứa tác nhân phân tán phức tạp, các nút và chính sách vòng đời. Hình dung người nhạc trưởng điều khiển dàn nhạc giao hưởng chơi đúng nhịp và hài hòa.

**Grammar & collocations:** `cluster orchestration` — điều phối cụm; `container orchestration` — điều phối vùng chứa; `orchestration engine` — động cơ điều phối.

**Register & nuance:** Modern software engineering and cloud-native architecture terminology.

**Examples:** Automated orchestration frameworks manage the dynamic deployment and scaling of actor-based microservices across multi-region cloud infrastructures. → Các khuôn khổ điều phối tự động quản lý việc triển khai động và mở rộng quy mô của các dịch vụ vi mô dựa trên tác nhân trên cơ sở hạ tầng đám mây đa khu vực.

**Liên kết tiếng Hàn:** `오케스트레이션` — Sự điều phối hệ thống

---

## 25. resilience /rɪˈzɪliəns/

**Loại từ & vị trí trong câu:** `noun [U]` — Subject or object in fault-tolerance and reliability engineering.

**Core meaning — English:** The capacity of a distributed system or actor architecture to recover gracefully from internal component failures, network partitions, and unexpected crashes without total service collapse.

**Core meaning & mental image — Tiếng Việt:** Khả năng phục hồi / Tính kiên cường — Khả năng của hệ thống phân tán hoặc kiến trúc tác nhân phục hồi một cách uyển chuyển từ các lỗi thành phần bên trong, phân vùng mạng và sự cố bất ngờ mà không làm sập toàn bộ dịch vụ. Hình dung cây tre uốn cong theo gió bão nhưng không gãy và phục hồi nguyên vẹn sau cơn bão.

**Grammar & collocations:** `architectural resilience` — khả năng phục hồi kiến trúc; `system resilience` — tính kiên cường của hệ thống; `operational resilience` — khả năng phục hồi vận hành.

**Register & nuance:** Highly valued professional term in system architecture and reliability engineering.

**Examples:** Hierarchical supervision trees and share-nothing state isolation are the foundational pillars of architectural resilience in actor systems. → Các cây giám sát phân cấp và sự cách ly trạng thái không chia sẻ là những trụ cột nền tảng của khả năng phục hồi kiến trúc trong các hệ thống tác nhân.

**Liên kết tiếng Hàn:** `회복력` (回復力) hoặc `탄력성` (彈力性) — Khả năng phục hồi / Tính đàn hồi

---

## Review in context (Part 1: Actor Concurrency and Mailbox Mechanics)
Modern distributed systems often rely on the **actor** model to achieve extreme concurrency and state safety. In this architecture, each autonomous unit processes incoming payloads sequentially through its bounded **mailbox**. When telemetry traffic surges dramatically, high-throughput **enqueueing** fills up the local buffers, eventually causing **saturation**. To prevent catastrophic out-of-memory failures, reactive **backpressure** propagates upstream to throttle producers. Because state is protected by strict memory **isolation**, concurrent **dispatch** threads can **multiplex** millions of active actors across physical CPU **threads** without explicit lock contention. Furthermore, location **transparency** and **remoting** allow developers to address remote instances seamlessly. Before transmission across network boundaries, complex data structures undergo rapid **serialization**, while receiving nodes perform corresponding **deserialization** to reconstruct messages efficiently.

**Bản dịch tiếng Việt:**
Các hệ thống phân tán hiện đại thường dựa vào mô hình **tác nhân** để đạt được mức độ đồng thời cực cao và tính an toàn của trạng thái. Trong kiến trúc này, mỗi đơn vị tự trị xử lý các tải trọng đến một cách tuần tự thông qua **hộp thư** có giới hạn của nó. Khi lưu lượng viễn trắc tăng vọt đáng kể, việc **đưa vào hàng đợi** thông lượng cao làm đầy các bộ đệm cục bộ, cuối cùng gây ra tình trạng **bão hòa**. Để ngăn chặn các lỗi tràn bộ nhớ thảm khốc, **áp lực ngược** phản ứng lan truyền lên thượng nguồn để tiết chế các nhà sản xuất. Vì trạng thái được bảo vệ bằng **sự cách ly** bộ nhớ nghiêm ngặt, các luồng **điều phối** đồng thời có thể **đa hợp** hàng triệu tác nhân hoạt động trên các **luồng** CPU vật lý mà không có sự tranh chấp khóa rõ ràng. Hơn nữa, tính **trong suốt** về vị trí và khả năng **định vị từ xa** cho phép các nhà phát triển giải quyết các thể hiện từ xa một cách liền mạch. Trước khi truyền qua ranh giới mạng, các cấu trúc dữ liệu phức tạp trải qua quá trình **tuần tự hóa** nhanh chóng, trong khi các nút nhận thực hiện **giải tuần tự hóa** tương ứng để tái tạo tin nhắn một cách hiệu quả.

---

## Review in context (Part 2: Fault Tolerance and Supervision Hierarchies)
Despite robust design, worker processes may occasionally encounter unhandled exceptions and **crash**. Rather than letting the entire application collapse, a hierarchical **supervisor** intercepts the failure and executes a predefined recovery **strategy**. Depending on the configured **topology**, a **restart** command is issued to re-initialize the failed worker cleanly while keeping healthy sibling processes untouched. If faults persist repeatedly, the error undergoes **escalation** to higher-level supervisors. This robust **orchestration** framework maximizes overall system **resilience**, ensuring that transient errors incur minimal **latency** while maintaining optimal **throughput**. By treating failure as a normal operational event rather than an anomaly, engineers achieve unprecedented levels of **system** reliability across distributed cloud infrastructures.

**Bản dịch tiếng Việt:**
Bất chấp thiết kế vững chắc, các tiến trình công nhân đôi khi vẫn gặp phải các ngoại lệ chưa được xử lý và **sập**. Thay vì để toàn bộ ứng dụng sụp đổ, một **tiến trình giám sát** phân cấp sẽ chặn sự cố và thực hiện **chiến lược** khôi phục đã định trước. Tùy thuộc vào **cấu trúc** được định cấu hình, lệnh **khởi động lại** được ban hành để khởi tạo lại công nhân bị lỗi một cách sạch sẽ trong khi giữ nguyên các tiến trình anh em khỏe mạnh. Nếu lỗi tiếp tục dai dẳng, lỗi sẽ trải qua quá trình **leo thang** lên các nhà giám sát cấp cao hơn. Khung **điều phối** mạnh mẽ này tối đa hóa **khả năng phục hồi** của toàn hệ thống, đảm bảo rằng các lỗi tạm thời gây ra **độ trễ** tối thiểu trong khi vẫn duy trì **thông lượng** tối ưu. Bằng cách coi lỗi là một sự kiện vận hành bình thường thay vì một điều bất thường, các kỹ sư đạt độ tin cậy **hệ thống** chưa từng có trên khắp các cơ sở hạ tầng đám mây phân tán.
