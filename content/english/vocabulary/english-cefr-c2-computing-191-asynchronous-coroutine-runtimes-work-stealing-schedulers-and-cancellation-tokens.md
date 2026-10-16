# C2 Vocabulary 191 — Asynchronous coroutine runtimes, work-stealing scheduling heuristics, and cooperative cancellation

Trong kiến trúc phần mềm phân tán và hạ tầng máy chủ hiệu năng cực cao, mô hình đa luồng hệ điều hành truyền thống (kernel threads) thường bộc lộ những giới hạn nghiêm trọng về chi phí hoán chuyển ngữ cảnh (context switch overhead) và tiêu tốn bộ nhớ ngăn xếp khi phải gánh hàng triệu kết nối đồng thời. Để vượt qua nút thắt này, các môi trường thực thi bất đồng bộ hiện đại (như Tokio trong Rust, Go runtime, hay .NET CLR) chuyển dịch sang mô hình coroutine không ngăn xếp (stackless coroutines) kết hợp với các bộ lập lịch trộm việc (work-stealing schedulers) tinh vi. Tại tầng cốt lõi, việc cấp phát khung trạng thái coroutine trên heap, phân chia hàng đợi bằng cấu trúc Chase-Lev deque và phân phối tác vụ tiếp diễn (continuations) cho phép tối ưu hóa triệt để tài nguyên tính toán. Song song đó, để duy trì tính phản hồi và ngăn ngừa tắc nghẽn, runtime phải thiết lập các điểm nhượng quyền thăm dò hợp tác (cooperative polling yield points), cơ chế lan truyền mã thông báo hủy (cancellation tokens) có cấu trúc, và các phỏng đoán giảm thiểu đói luồng (thread-starvation mitigation). Bài học C2 này trang bị trọn bộ 25 thuật ngữ học thuật và kỹ thuật cấp hệ thống, đưa bạn thâm nhập vào cơ chế hoạt động vi mô của các bộ thực thi bất đồng bộ tối tân nhất.

Flow của bài học: **stackless coroutine frame allocation** → **Chase-Lev deque work-stealing** → **cooperative polling yield point** → **cancellation token propagation** → **thread-starvation mitigation** → **continuation task dispatching** → **asynchronous runtime executor** → **tail-resumption coroutine dispatch** → **work-stealing scheduling heuristic** → **structured concurrency lifetime boundary** → **unpinned green thread migration** → **backpressure-driven task throttling** → **non-blocking yield point instrumentation** → **reentrant coroutine state machine** → **cooperative task preemption heuristic** → **atomic task stealing protocol** → **parent-child cancellation cascade** → **worker thread quiescent state** → **continuation stealing scheduler** → **executor queue contention minimization** → **coroutine suspension unwind point** → **thread pool thread-injection heuristic** → **cancellation-aware polling predicate** → **asynchronous promise chain resolution** → **lock-free multi-producer task mailbox**.

---

## 1. stackless coroutine frame allocation /ˈstæk.ləs koʊˈruː.tiːn freɪm ˌæl.əˈkeɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ hoặc tân ngữ chỉ cơ chế phân bổ bộ nhớ cho trạng thái coroutine (ví dụ: `optimize stackless coroutine frame allocation`, `stackless coroutine frame allocation avoids call-stack bloat`).

**Core meaning — English:** The runtime mechanism of provisioning a compact, heap-allocated or arena-managed state record containing local variables and suspension states for a coroutine that lacks an independent execution call stack, transformed by the compiler into an explicit state struct.

**Core meaning & mental image — Tiếng Việt:** Cấp phát khung coroutine không ngăn xếp; hãy hình dung thay vì cấp cho mỗi diễn viên một căn phòng thay đồ khổng lồ riêng biệt với đầy đủ đồ đạc (như ngăn xếp vài megabyte của luồng hệ điều hành), đạo diễn chỉ trao cho diễn viên một chiếc thẻ ghi nhớ nhỏ gọn bỏ túi; chiếc thẻ này lưu chính xác dòng kịch bản họ đang đọc dở và đạo cụ họ đang cầm; khi tạm dừng diễn, họ để lại chiếc thẻ đó lên bàn và nhường sân khấu cho người khác mà hầu như không tốn diện tích lưu trữ.

**Grammar & collocations:** `optimize stackless coroutine frame allocation` — tối ưu hóa việc cấp phát khung coroutine không ngăn xếp; `overhead of stackless coroutine frame allocation` — chi phí phát sinh của việc cấp phát khung coroutine không ngăn xếp; `compiler-driven stackless coroutine frame allocation` — cấp phát khung coroutine không ngăn xếp do trình biên dịch điều khiển.

**Register & nuance:** `systems programming & runtime internals (Rust async, C++20 coroutines)` — phân biệt với coroutine có ngăn xếp (stackful/fibers) vốn phân bổ một call stack độc lập cố định; coroutine không ngăn xếp biến đổi thân hàm thành một máy trạng thái (state machine) và chỉ cấp phát dung lượng tối thiểu đủ để lưu các biến sống qua điểm treo (suspension point).

**Examples:** `By replacing generic heap allocations with custom slab allocators, the runtime reduced the overhead of stackless coroutine frame allocation by sixty percent.` → Bằng cách thay thế các cấp phát heap tổng quát bằng các bộ cấp phát slab tùy chỉnh, môi trường thực thi đã giảm chi phí cấp phát khung coroutine không ngăn xếp đi sáu mươi phần trăm.

**Liên kết tiếng Hàn:** `무스택 코루틴 프레임 할당` (無stack coroutine frame 割當) — cơ chế cấp phát bộ nhớ khung trạng thái cho coroutine không dùng ngăn xếp cuộc gọi riêng biệt.

---

## 2. Chase-Lev deque work-stealing /ˌtʃeɪs ˈlɛv ˌdɛk ˈwɜrk ˌstiː.lɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là giải thuật hoặc cơ chế phân phối tải đa luồng (ví dụ: `implement Chase-Lev deque work-stealing`, `benefit from Chase-Lev deque work-stealing`).

**Core meaning — English:** A lock-free task distribution algorithm utilizing an asymmetric circular double-ended queue, where the owning worker thread pushes and pops tasks from the bottom via LIFO order, while idle thief threads concurrently steal tasks from the top via atomic compare-and-swap in FIFO order.

**Core meaning & mental image — Tiếng Việt:** Trộm việc qua hàng đợi hai đầu Chase-Lev; hãy hình dung một chiếc ống cắm bút hai đầu: người chủ bàn làm việc liên tục cắm việc mới vào đáy ống và rút việc gần nhất ra làm trước (LIFO, để tận dụng bộ nhớ đệm cache nóng); khi một đồng nghiệp ở bàn bên cạnh hết việc, người đó sẽ nhẹ nhàng mở nắp trên cùng của chiếc ống để rút trộm một việc cũ nhất (FIFO) mà không hề chạm vào tay người chủ đang thao tác ở đáy ống, giảm thiểu tối đa sự tranh chấp va chạm.

**Grammar & collocations:** `employ Chase-Lev deque work-stealing` — áp dụng trộm việc qua hàng đợi hai đầu Chase-Lev; `concurrency invariants of Chase-Lev deque work-stealing` — các bất biến đồng thời của cơ chế trộm việc Chase-Lev deque; `throughput of Chase-Lev deque work-stealing` — thông lượng của cơ chế trộm việc Chase-Lev deque.

**Register & nuance:** `concurrent algorithm design & scheduler architectures (Tokio, Go runtime, Java ForkJoinPool)` — chuẩn mực vàng cho việc cân bằng tải đa luồng không khóa (lock-free); phân tách rõ ràng thao tác đơn luồng ở đáy (chủ sở hữu không cần atomic cas trừ khi rỗng) và thao tác đa luồng ở đỉnh (kẻ trộm).

**Examples:** `The scheduler relies on Chase-Lev deque work-stealing to rebalance compute workloads across idle CPU cores without stalling the primary task workers.` → Bộ lập lịch dựa vào cơ chế trộm việc qua hàng đợi hai đầu Chase-Lev để tái cân bằng khối lượng tính toán trên các lõi CPU rảnh rỗi mà không làm đình trệ các luồng công nhân chính.

**Liên kết tiếng Hàn:** `체이스-레브 덱 워크 스틸링` (Chase-Lev deque work-stealing) — giải thuật trộm tác vụ sử dụng cấu trúc hàng đợi hai đầu bất đối xứng không khóa.

---

## 3. cooperative polling yield point /koʊˈɑp.ər.ə.tɪv ˈpoʊ.lɪŋ jiːld pɔɪnt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm vị trí kiểm tra luồng điều khiển trong thân coroutine (ví dụ: `insert a cooperative polling yield point`, `reach a cooperative polling yield point`).

**Core meaning — English:** An explicitly inserted or compiler-injected execution checkpoint within a running coroutine where the task actively inspects preemption flags or cancellation states, voluntarily relinquishing execution control back to the scheduler if requested.

**Core meaning & mental image — Tiếng Việt:** Điểm nhượng quyền thăm dò hợp tác; hãy hình dung một tay đua xe đạp đường trường cứ mỗi khi đi qua một khúc cua (điểm kiểm tra) lại liếc nhìn bảng hiệu của ban tổ chức ven đường: nếu bảng hiệu báo cờ vàng (yêu cầu nhường đường hoặc tạm hoãn), tay đua sẽ chủ động tấp vào lề nhường đường cho xe cứu hộ chạy qua; tay đua không bị ai kéo phanh cưỡng bức, mà tự nguyện dừng lại dựa trên sự phối hợp có ý thức.

**Grammar & collocations:** `evaluate a cooperative polling yield point` — đánh giá điểm nhượng quyền thăm dò hợp tác; `inject cooperative polling yield points into loops` — chèn các điểm nhượng quyền thăm dò hợp tác vào vòng lặp; `latency at cooperative polling yield points` — độ trễ tại các điểm nhượng quyền thăm dò hợp tác.

**Register & nuance:** `asynchronous coroutine semantics & user-space scheduling` — phân biệt với ngắt cưỡng bức (preemptive interrupt) từ kernel; cơ chế này đòi hỏi mã coroutine không được chạy các vòng lặp tính toán vô tận (tight loops) mà không có điểm yield, nếu không sẽ làm tê liệt toàn bộ luồng worker.

**Examples:** `The compiler injects a cooperative polling yield point at each loop backedge to prevent CPU-bound tasks from monopolizing the event loop.` → Trình biên dịch chèn một điểm nhượng quyền thăm dò hợp tác tại mỗi cạnh ngược vòng lặp để ngăn chặn các tác vụ ngốn CPU độc chiếm vòng lặp sự kiện.

**Liên kết tiếng Hàn:** `협력적 폴링 양보 지점` (協力적 polling 讓步 地點) — điểm kiểm tra định kỳ trong coroutine để tự nguyện nhường quyền điều khiển cho bộ lập lịch.

---

## 4. cancellation token propagation /ˌkæn.səˈleɪ.ʃən ˈtoʊ.kən ˌprɑp.əˈɡeɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là quá trình truyền tín hiệu dừng tác vụ (ví dụ: `manage cancellation token propagation`, `cancellation token propagation terminates stale subtasks`).

**Core meaning — English:** The systematic passing and hierarchical forwarding of a shared cancellation notification handle down a task invocation tree, allowing asynchronous child computations to detect termination requests and gracefully abort.

**Core meaning & mental image — Tiếng Việt:** Lan truyền mã thông báo hủy; hãy hình dung một sợi dây pháo hiệu nối từ vị chỉ huy trưởng xuống tất cả các đơn vị thám hiểm con trong rừng sâu: khi chỉ huy giật sợi dây pháo hiệu (kích hoạt hủy), sóng xung kích lập tức truyền dọc theo các nhánh cây con; mọi phân đội cấp dưới khi cảm nhận được tín hiệu này đều lập tức dọn đồ và rút quân an toàn thay vì tiếp tục đào bới vô ích.

**Grammar & collocations:** `facilitate cancellation token propagation` — tạo điều kiện thuận lợi cho việc lan truyền mã thông báo hủy; `tree-structured cancellation token propagation` — lan truyền mã thông báo hủy theo cấu trúc cây; `latency in cancellation token propagation` — độ trễ trong quá trình lan truyền mã thông báo hủy.

**Register & nuance:** `structured concurrency & distributed async systems (.NET CancellationToken, Golang context.Context)` — bảo đảm tài nguyên (bộ nhớ, socket, file descriptor) được dọn dẹp an toàn; ngăn chặn hiện tượng rò rỉ tác vụ mồ côi (orphaned task leakage) khi tác vụ cha bị hủy hoặc quá thời gian chờ (timeout).

**Examples:** `Proper cancellation token propagation ensures that when a client drops an HTTP connection, all downstream database queries are promptly aborted.` → Việc lan truyền mã thông báo hủy đúng đắn bảo đảm rằng khi máy khách ngắt kết nối HTTP, tất cả các truy vấn cơ sở dữ liệu hạ nguồn đều bị hủy bỏ kịp thời.

**Liên kết tiếng Hàn:** `취소 토큰 전파` (取消 token 傳播) — cơ chế truyền tín hiệu hủy tác vụ dọc theo cây thực thi bất đồng bộ.

---

## 5. thread-starvation mitigation /θrɛd stɑrˈveɪ.ʃən ˌmɪt.əˈɡeɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm mục tiêu thiết kế bộ lập lịch hoặc chiến lược chống tắc nghẽn luồng (ví dụ: `design thread-starvation mitigation heuristics`, `achieve thread-starvation mitigation`).

**Core meaning — English:** Algorithmic safeguards in an asynchronous runtime designed to detect and resolve conditions where worker threads are deprived of execution slices or blocked on synchronous operations, typically by dynamically spawning backup threads or forcing task handoffs.

**Core meaning & mental image — Tiếng Việt:** Giảm thiểu sự đói luồng; hãy hình dung một nhà bếp có 4 đầu bếp chuyên nghiệp (luồng thực thi) phục vụ hàng trăm đơn hàng món ăn (tác vụ coroutine): nếu một vị khách bất ngờ yêu cầu một đầu bếp phải đứng canh nồi súp sôi trong 30 phút mà không được rời đi (chặn I/O đồng bộ), nhà bếp sẽ thiếu người nấu nướng; cơ chế giảm thiểu đói luồng lập tức phát hiện sự ngưng trệ này và điều động thêm một đầu bếp dự phòng vào bếp để dòng chảy món ăn không bao giờ bị tắc nghẽn.

**Grammar & collocations:** `enforce thread-starvation mitigation` — thực thi giảm thiểu sự đói luồng; `thread-starvation mitigation algorithms` — các giải thuật giảm thiểu sự đói luồng; `thread-starvation mitigation in thread pools` — giảm thiểu sự đói luồng trong các nhóm luồng.

**Register & nuance:** `high-throughput concurrent runtimes (Tokio blocking pool, CLR Hill Climbing)` — tình trạng đói luồng xảy ra khi lập trình viên vô tình chạy mã chặn đồng bộ (blocking code) trên luồng worker bất đồng bộ; giải pháp mitigation chủ động cứu vãn runtime khỏi việc tê liệt hoàn toàn (deadlock hoặc extreme latency).

**Examples:** `The runtime's thread-starvation mitigation logic injects additional worker threads whenever queued async continuation tasks experience anomalous scheduling delays.` → Logic giảm thiểu sự đói luồng của môi trường thực thi sẽ bổ sung thêm các luồng công nhân bất cứ khi nào các tác vụ tiếp diễn bất đồng bộ trong hàng đợi gặp phải tình trạng trễ lịch trình bất thường.

**Liên kết tiếng Hàn:** `스레드 기아 완화` (thread 飢餓 緩和) — các biện pháp giải thuật nhằm ngăn ngừa và khắc phục tình trạng cạn kiệt tài nguyên thực thi của luồng.

---

## 6. continuation task dispatching /kənˌtɪn.juˈeɪ.ʃən tæsk dɪˈspætʃ.ɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là hành động đưa phần mã tiếp theo vào bộ lập lịch (ví dụ: `streamline continuation task dispatching`, `trigger continuation task dispatching`).

**Core meaning — English:** The process of encapsulating the remaining computation of an asynchronous operation upon resuming from an await point into an executable closure and enqueueing it into a thread scheduler's run queue.

**Core meaning & mental image — Tiếng Việt:** Điều phối tác vụ tiếp diễn; hãy hình dung một tài liệu đang được dịch dở: khi dịch giả gặp một từ cổ cần tra cứu từ điển quốc tế (chờ I/O), dịch giả gấp tài liệu lại, dán một mảnh giấy ghi nhớ "dịch tiếp từ trang 15 sau khi nhận thư hồi âm" và gửi vào hòm thư công việc chung; ngay khi bức thư hồi âm tới, hòm thư lập tức đẩy phần việc tiếp diễn này cho bất kỳ nhân viên nào đang rảnh rỗi xử lý tiếp ngay lập tức.

**Grammar & collocations:** `schedule via continuation task dispatching` — lập lịch thông qua điều phối tác vụ tiếp diễn; `continuation task dispatching overhead` — chi phí điều phối tác vụ tiếp diễn; `inline continuation task dispatching` — điều phối tác vụ tiếp diễn nội dòng.

**Register & nuance:** `continuation-passing style (CPS) & event-driven runtimes` — phân biệt giữa việc thực thi tác vụ ban đầu và việc kích hoạt lại tác vụ sau khi một promise hoặc future đã hoàn thành; quyết định dispatching (trên cùng luồng hay qua queue) ảnh hưởng trực tiếp đến tính cục bộ của bộ nhớ đệm (cache locality).

**Examples:** `Optimized continuation task dispatching schedules the awaiting task directly on the current thread if the underlying asynchronous I/O future completes immediately.` → Cơ chế điều phối tác vụ tiếp diễn được tối ưu hóa sẽ lập lịch tác vụ đang chờ ngay trên luồng hiện tại nếu future I/O bất đồng bộ hoàn thành tức thì.

**Liên kết tiếng Hàn:** `연속 태스크 디스패칭` (連續 task dispatching) — quá trình đóng gói và điều phối phần tính toán tiếp theo của coroutine sau khi có kết quả bất đồng bộ.

---

## 7. asynchronous runtime executor /eɪˈsɪŋ.krə.nəs ˈrʌn.taɪm ɪɡˈzɛk.jə.tər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ tầng kiến trúc điều phối hoặc động cơ thực thi tác vụ (ví dụ: `the asynchronous runtime executor drives`, `initialize the asynchronous runtime executor`).

**Core meaning — English:** The underlying engine and thread management subsystem responsible for polling asynchronous futures, hosting task queues, orchestrating work-stealing, and multiplexing thousands of virtual coroutines onto a limited pool of OS threads.

**Core meaning & mental image — Tiếng Việt:** Bộ thực thi môi trường bất đồng bộ; hãy hình dung một tổng đài điều phối bay tối tân tại một sân bay quốc tế: chỉ với một số ít đường băng thực tế (các lõi CPU vật lý), tổng đài điều phối liên tục cho hàng nghìn chiếc máy bay mô hình (các coroutine) hạ cánh, tiếp nhiên liệu trong tích tắc rồi cất cánh trở lại mà không một chuyến bay nào phải bay vòng chờ đợi lãng phí.

**Grammar & collocations:** `initialize the asynchronous runtime executor` — khởi tạo bộ thực thi môi trường bất đồng bộ; `multithreaded asynchronous runtime executor` — bộ thực thi môi trường bất đồng bộ đa luồng; `tune the asynchronous runtime executor` — tinh chỉnh bộ thực thi môi trường bất đồng bộ.

**Register & nuance:** `systems programming & asynchronous architecture` — trái tim của bất kỳ framework async nào (như Tokio, async-std, seastar, Node.js libuv); quyết định cơ chế phân phối tải, latency và throughput của toàn bộ ứng dụng mạng.

**Examples:** `The application achieved sub-millisecond response times under peak load thanks to an asynchronous runtime executor customized for low-latency network I/O.` → Ứng dụng đã đạt được thời gian phản hồi dưới một mili giây dưới tải đỉnh nhờ vào một bộ thực thi môi trường bất đồng bộ được tùy biến riêng cho thao tác I/O mạng độ trễ thấp.

**Liên kết tiếng Hàn:** `비동기 런타임 실행기` (非同期 runtime 實行器) — động cơ điều phối và quản lý việc thực thi các future và coroutine trên các luồng hệ điều hành.

---

## 8. tail-resumption coroutine dispatch /teɪl rɪˈzʌmp.ʃən koʊˈruː.tiːn dɪˈspætʃ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là kỹ thuật chuyển đổi ngữ cảnh coroutine tối ưu ở đuôi hàm (ví dụ: `employ tail-resumption coroutine dispatch`, `tail-resumption coroutine dispatch minimizes stack usage`).

**Core meaning — English:** A specialized optimization where the resumption of a waiting coroutine occurs directly as the terminal tail-call of the suspending coroutine, bypassing scheduler re-enqueueing and reusing the current thread's register state without intervening context hops.

**Core meaning & mental image — Tiếng Việt:** Điều phối phục hồi coroutine ở đuôi; hãy hình dung một cuộc chạy tiếp sức: người chạy thứ nhất khi về đến vạch đích không dừng lại thở rồi gọi trọng tài chỉ định người chạy tiếp theo, mà ngay tại bước chạy cuối cùng, người đó chuyền thẳng chiếc gậy tiếp sức vào tay người chạy thứ hai đang bứt tốc; hai hành động hòa làm một, loại bỏ hoàn toàn khoảng thời gian chết giữa hai lượt chạy.

**Grammar & collocations:** `enable tail-resumption coroutine dispatch` — kích hoạt điều phối phục hồi coroutine ở đuôi; `tail-resumption coroutine dispatch optimization` — tối ưu hóa điều phối phục hồi coroutine ở đuôi; `eliminate context switches via tail-resumption coroutine dispatch` — loại bỏ chuyển đổi ngữ cảnh thông qua điều phối phục hồi coroutine ở đuôi.

**Register & nuance:** `compiler optimization & low-level coroutine ABIs (e.g., C++20 symmetric transfer via std::coroutine_handle)` — giúp ngăn chặn hiện tượng tràn ngăn xếp (stack overflow) trong các chuỗi coroutine đệ quy hoặc chuỗi sự kiện nối tiếp sâu.

**Examples:** `By compiling await expressions into tail-resumption coroutine dispatch, the compiler prevented stack frame accumulation across deeply nested coroutine pipelines.` → Bằng cách biên dịch các biểu thức await thành điều phối phục hồi coroutine ở đuôi, trình biên dịch đã ngăn chặn sự tích lũy khung ngăn xếp qua các đường ống coroutine lồng nhau sâu sắc.

**Liên kết tiếng Hàn:** `꼬리 재개 코루틴 디스패치` (꼬리 再開 coroutine dispatch) — cơ chế chuyển giao quyền thực thi coroutine trực tiếp ở cuối hàm mà không qua hàng đợi lập lịch trung gian.

---

## 9. work-stealing scheduling heuristic /ˈwɜrk ˌstiː.lɪŋ ˈskɛdʒ.uːl.ɪŋ hjuːˈrɪs.tɪk/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tiêu chuẩn phỏng đoán hoặc quy tắc chọn nạn nhân để trộm việc (ví dụ: `refine the work-stealing scheduling heuristic`).

**Core meaning — English:** The set of algorithmic decision rules employed by idle worker threads to determine when, where, and how many tasks to steal from neighboring worker queues, optimizing for load balance while minimizing cross-core cache invalidation.

**Core meaning & mental image — Tiếng Việt:** Phỏng đoán lập lịch trộm việc; hãy hình dung một người cứu hộ tại một trạm cứu hỏa đang rảnh: người đó không thể chạy lăng xăng gõ cửa từng trạm khác một cách ngẫu nhiên vì sẽ gây hỗn loạn; thay vào đó, người đó tuân theo một bộ quy tắc thông minh: ưu tiên nhìn trạm cứu hỏa ngay cạnh khu phố (cùng cụm NUMA), nếu trạm đó có hơn 5 đám cháy thì lập tức lấy đúng một nửa số việc về làm, bảo đảm cân bằng việc mà không tốn công chạy xa.

**Grammar & collocations:** `implement a work-stealing scheduling heuristic` — triển khai một phỏng đoán lập lịch trộm việc; `adaptive work-stealing scheduling heuristic` — phỏng đoán lập lịch trộm việc thích ứng; `evaluate the work-stealing scheduling heuristic` — đánh giá phỏng đoán lập lịch trộm việc.

**Register & nuance:** `distributed scheduling & multicore concurrency` — phỏng đoán tốt phải giải quyết bài toán trade-off: trộm quá thường xuyên sẽ gây tranh chấp bộ nhớ đệm (cache thrashing), trộm quá ít sẽ khiến một số lõi CPU bị bỏ đói trong khi các lõi khác quá tải.

**Examples:** `An adaptive work-stealing scheduling heuristic selects victim queues within the same NUMA node first to prevent expensive cross-socket memory bus transactions.` → Một phỏng đoán lập lịch trộm việc thích ứng sẽ ưu tiên chọn các hàng đợi nạn nhân trong cùng một nút NUMA trước để ngăn chặn các giao dịch bus bộ nhớ xuyên socket đắt đỏ.

**Liên kết tiếng Hàn:** `워크 스틸링 스케줄링 휴리스틱` (work-stealing scheduling heuristic) — quy tắc phỏng đoán thông minh giúp các luồng rảnh rỗi quyết định cách trộm tác vụ hiệu quả nhất.

---

## 10. structured concurrency lifetime boundary /ˈstrʌk.tʃərd kənˈkɜr.ən.si ˈlaɪf.taɪm ˈbaʊn.də.ri/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là ranh giới phạm vi thời gian sống của các tác vụ đồng thời (ví dụ: `enforce a structured concurrency lifetime boundary`).

**Core meaning — English:** A lexical or programmatic scope that strictly encapsulates the entry, concurrent execution, and mandatory termination of child asynchronous tasks, guaranteeing that no spawned task can outlive its enclosing block.

**Core meaning & mental image — Tiếng Việt:** Ranh giới vòng đời đồng thời có cấu trúc; hãy hình dung một chiếc cổng an ninh của một đoàn thám hiểm: khi trưởng đoàn mở cổng cho các nhóm thám hiểm con tỏa đi tìm kiếm dữ liệu, chiếc cổng sẽ không bao giờ đóng lại và đoàn xe không bao giờ xuất phát đi tiếp cho đến khi tất cả các thành viên con đã quay về nguyên vẹn hoặc báo cáo xong nhiệm vụ; không một ai bị bỏ quên lại phía sau như một bóng ma vô định (ngăn chặn task mồ côi).

**Grammar & collocations:** `establish a structured concurrency lifetime boundary` — thiết lập ranh giới vòng đời đồng thời có cấu trúc; `respect the structured concurrency lifetime boundary` — tuân thủ ranh giới vòng đời đồng thời có cấu trúc; `scope within a structured concurrency lifetime boundary` — phạm vi bên trong ranh giới vòng đời đồng thời có cấu trúc.

**Register & nuance:** `programming language design & modern async paradigms (Kotlin coroutines, Swift concurrency, Trio/Curio in Python)` — triết lý biến các luồng đồng thời trở nên có thứ bậc rõ ràng như các cấu trúc lệnh lồng nhau `if/else`, chấm dứt kỷ nguyên lập trình bất đồng bộ tùy tiện "bắn rồi quên" (fire-and-forget).

**Examples:** `By enforcing a structured concurrency lifetime boundary, the application guarantees that all concurrent file reader tasks are fully terminated before the parent function returns.` → Bằng cách thực thi ranh giới vòng đời đồng thời có cấu trúc, ứng dụng bảo đảm rằng tất cả các tác vụ đọc tệp đồng thời đều chấm dứt hoàn toàn trước khi hàm cha trả về.

**Liên kết tiếng Hàn:** `구조화된 동시성 수명 경계` (構造化된 同時性 壽命 境界) — ranh giới phạm vi nghiêm ngặt bảo đảm các tác vụ con không bao giờ tồn tại lâu hơn khối lệnh chứa chúng.

---

## 11. unpinned green thread migration /ˌʌnˈpɪnd ɡriːn θrɛd maɪˈɡreɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ hoặc tân ngữ chỉ sự di chuyển luồng người dùng giữa các lõi CPU (ví dụ: `permit unpinned green thread migration`, `unpinned green thread migration balances CPU utilization`).

**Core meaning — English:** The runtime capability of transferring an unscheduled or resumed user-space lightweight thread (green thread) from one native operating system thread's worker queue to another across different physical CPU cores.

**Core meaning & mental image — Tiếng Việt:** Sự di chuyển luồng xanh không ghim; hãy hình dung những người thợ làm việc tự do mang theo chiếc máy tính xách tay: họ không bị ghim chặt vào một chiếc bàn làm việc cố định nào trong tòa nhà; buổi sáng họ có thể ngồi ở tầng 1 làm việc, khi tầng 1 quá đông đúc ồn ào, họ đứng dậy xách máy lên tầng 3 tiếp tục gõ phím mà không làm mất đi bất kỳ dòng dữ liệu nào đang hiển thị trên màn hình.

**Grammar & collocations:** `support unpinned green thread migration` — hỗ trợ sự di chuyển luồng xanh không ghim; `penalties of unpinned green thread migration` — các hình phạt hiệu năng của sự di chuyển luồng xanh không ghim; `restrict unpinned green thread migration` — hạn chế sự di chuyển luồng xanh không ghim.

**Register & nuance:** `M:N threading models & green thread runtimes (Go Goroutines, Erlang BEAM)` — phân biệt với các luồng bị ghim cứng (pinned/CPU affinity); di chuyển luồng xanh tự do mang lại khả năng cân bằng tải tuyệt vời nhưng có thể làm giảm hiệu suất bộ nhớ đệm L1/L2 do cache invalidation nếu di chuyển quá mức.

**Examples:** `Unpinned green thread migration enables the runtime to maintain ninety-percent multi-core utilization even when workloads exhibit severe burstiness.` → Sự di chuyển luồng xanh không ghim cho phép môi trường thực thi duy trì mức sử dụng đa lõi chín mươi phần trăm ngay cả khi khối lượng công việc thể hiện tính chất bùng nổ dữ dội.

**Liên kết tiếng Hàn:** `비고정 그린 스레드 마이그레이션` (非固定 green thread migration) — sự di chuyển luồng nhẹ mức người dùng giữa các luồng hệ điều hành khác nhau nhằm cân bằng tải.

---

## 12. backpressure-driven task throttling /ˈbækˌprɛʃ.ər ˈdrɪv.ən tæsk ˈθrɑt.lɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là cơ chế tự vệ kiểm soát lưu lượng tác vụ (ví dụ: `apply backpressure-driven task throttling`, `trigger backpressure-driven task throttling`).

**Core meaning — English:** A flow-control mechanism where an overloaded executor or consumer signals upstream task producers to slow down or halt task generation, preventing unmanaged task queue expansion and out-of-memory crashes.

**Core meaning & mental image — Tiếng Việt:** Tiết lưu tác vụ do áp lực ngược điều khiển; hãy hình dung một hệ thống ống xả nước: khi bể chứa hạ nguồn bắt đầu đầy ứ và sắp tràn, mực nước dâng cao tác động một lực ép ngược lại van khóa thượng nguồn, buộc van phải tự động khép nhỏ miệng lại; việc này chặn bớt dòng nước đổ về, giúp hệ thống không bao giờ bị vỡ ống hay ngập lụt toàn bộ nhà máy.

**Grammar & collocations:** `enforce backpressure-driven task throttling` — thực thi tiết lưu tác vụ do áp lực ngược điều khiển; `implement backpressure-driven task throttling` — triển khai tiết lưu tác vụ do áp lực ngược điều khiển; `signals for backpressure-driven task throttling` — các tín hiệu cho việc tiết lưu tác vụ do áp lực ngược điều khiển.

**Register & nuance:** `reactive streams & asynchronous pipeline architectures (Akka, Rx, Project Reactor)` — yếu tố sống còn trong các hệ thống truyền tải dữ liệu thời gian thực; nếu thiếu backpressure, các nhà sản xuất tác vụ nhanh sẽ làm cạn kiệt bộ nhớ RAM của các bên tiêu thụ chậm chỉ trong vài giây.

**Examples:** `During ingestion spikes, backpressure-driven task throttling forces incoming TCP sockets to reduce their receive window sizes.` → Trong các đợt tăng đột biến lưu lượng nạp dữ liệu, việc tiết lưu tác vụ do áp lực ngược điều khiển buộc các socket TCP đầu vào phải thu nhỏ kích thước cửa sổ nhận của chúng.

**Liên kết tiếng Hàn:** `배압 기반 태스크 조절` (背壓 基盤 task 調節) — cơ chế giảm tốc độ tiếp nhận tác vụ dựa trên áp lực ngược từ các thành phần xử lý hạ nguồn.

---

## 13. non-blocking yield point instrumentation /nɑn ˈblɑk.ɪŋ jiːld pɔɪnt ˌɪn.strə.mɛnˈteɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm kỹ thuật biên dịch hoặc cơ chế gắn mã kiểm tra nhượng quyền (ví dụ: `perform non-blocking yield point instrumentation`).

**Core meaning — English:** The compiler or bytecode transformation pass that inserts lightweight, instruction-level conditional checks into loop bodies and function prologues to poll for preemption without invoking OS synchronization primitives.

**Core meaning & mental image — Tiếng Việt:** Gắn mã điểm nhượng quyền không chặn; hãy hình dung một người kiểm duyệt sách âm thầm dán một chiếc tem phản quang siêu mỏng vào đầu mỗi trang sách: chiếc tem này không làm cản trở việc lật trang của độc giả (không gây nghẽn dòng thực thi), nhưng khi người đọc lướt qua, ánh sáng laser của camera giám sát có thể đọc được ngay tín hiệu kiểm tra mà không làm người đọc phải dừng tay lại dù chỉ một phần triệu giây.

**Grammar & collocations:** `execute non-blocking yield point instrumentation` — thực hiện gắn mã điểm nhượng quyền không chặn; `compiler passes for non-blocking yield point instrumentation` — các lượt biên dịch dành cho việc gắn mã điểm nhượng quyền không chặn; `overhead of non-blocking yield point instrumentation` — chi phí của việc gắn mã điểm nhượng quyền không chặn.

**Register & nuance:** `runtime compiler internals (Go compiler preemption, Java Loom safepoints)` — là chìa khóa để đạt được khả năng tiền nhiệm hợp tác (cooperative preemption) gần như không tốn chi phí; thay vì gọi các hàm syscall nặng nề, cơ chế này chỉ đọc một cờ bộ nhớ trong thanh ghi hoặc trang nhớ bảo vệ (guard page).

**Examples:** `The JIT compiler performs non-blocking yield point instrumentation at loop headers, ensuring that infinite computational loops remain interruptible by the runtime.` → Trình biên dịch JIT thực hiện gắn mã điểm nhượng quyền không chặn tại các tiêu đề vòng lặp, bảo đảm rằng các vòng lặp tính toán vô hạn vẫn có thể bị ngắt bởi môi trường thực thi.

**Liên kết tiếng Hàn:** `비차단 양보 지점 계측` (非遮斷 讓步 地點 計測) — kỹ thuật chèn các đoạn mã kiểm tra nhượng quyền siêu nhẹ không gây nghẽn vào thân hàm hoặc vòng lặp.

---

## 14. reentrant coroutine state machine /riˈɛn.trənt koʊˈruː.tiːn steɪt məˈʃiːn/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là cấu trúc nội tại của một hàm async sau khi biên dịch (ví dụ: `synthesize a reentrant coroutine state machine`, `the reentrant coroutine state machine executes`).

**Core meaning — English:** A compiler-generated internal discrete automaton representing an asynchronous function, structured so that its execution can be entered, paused at yield points, and safely reentered from arbitrary worker threads while preserving operational invariants.

**Core meaning & mental image — Tiếng Việt:** Máy trạng thái coroutine khả tái nhập; hãy hình dung một chiếc đồng hồ bấm giờ thông minh có nhiều nấc kim: khi người dùng bấm dừng ở giây thứ 10, chiếc đồng hồ khóa chặt vị trí kim; bất kỳ ai nhặt chiếc đồng hồ lên và bấm nút tiếp tục, chiếc đồng hồ sẽ chạy tiếp từ giây thứ 10 một cách hoàn hảo mà không bị nhảy kim hay reset về số không, bất kể người bấm tiếp theo là ai.

**Grammar & collocations:** `lower into a reentrant coroutine state machine` — hạ cấp thành một máy trạng thái coroutine khả tái nhập; `reentrant coroutine state machine transitions` — các bước chuyển đổi của máy trạng thái coroutine khả tái nhập; `verify the reentrant coroutine state machine` — kiểm chứng máy trạng thái coroutine khả tái nhập.

**Register & nuance:** `compiler code generation (async/await lowering in Rust, C#, TypeScript)` — biến một đoạn mã tuần tự giả lập chứa các từ khóa `await` thành một câu lệnh `switch(state)` khổng lồ bên dưới mã máy, lưu trữ tất cả các biến sống vào cấu trúc ngữ cảnh để có thể reenter an toàn.

**Examples:** `When an async function is lowered, the compiler transforms its sequential syntax into a reentrant coroutine state machine driven by an explicit integer state tag.` → Khi một hàm async được hạ cấp, trình biên dịch sẽ chuyển đổi cú pháp tuần tự của nó thành một máy trạng thái coroutine khả tái nhập được điều khiển bởi một nhãn trạng thái số nguyên tường minh.

**Liên kết tiếng Hàn:** `재진입 가능 코루틴 상태 머신` (再進入 可能 coroutine 狀態 machine) — máy trạng thái coroutine cho phép tạm dừng và tái nhập an toàn từ các luồng khác nhau.

---

## 15. cooperative task preemption heuristic /koʊˈɑp.ər.ə.tɪv tæsk priˈɛmp.ʃən hjuːˈrɪs.tɪk/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm quy tắc quyết định tước quyền thực thi của tác vụ (ví dụ: `rely on a cooperative task preemption heuristic`).

**Core meaning — English:** An algorithm used by an asynchronous runtime to decide when a continuously running coroutine has consumed more than its allotted time quantum or operation count, prompting the task to yield execution to ensure scheduler fairness.

**Core meaning & mental image — Tiếng Việt:** Phỏng đoán tước quyền tác vụ hợp tác; hãy hình dung một quy tắc ngầm trong một buổi thảo luận nhóm: mỗi người khi phát biểu được cầm một chiếc đồng hồ cát nhỏ (đo lượng tác vụ); nếu nói quá 3 phút (vượt quá ngưỡng định mức), đồng hồ sẽ rung lên báo hiệu; người phát biểu ý thức được điều đó và sẽ chủ động kết thúc câu nói để nhường micro cho người khác, bảo đảm ai cũng có cơ hội lên tiếng.

**Grammar & collocations:** `trigger a cooperative task preemption heuristic` — kích hoạt phỏng đoán tước quyền tác vụ hợp tác; `cooperative task preemption heuristic parameters` — các tham số phỏng đoán tước quyền tác vụ hợp tác; `fairness under the cooperative task preemption heuristic` — sự công bằng dưới phỏng đoán tước quyền tác vụ hợp tác.

**Register & nuance:** `runtime scheduling & cooperative multitasking` — khác với preemptive scheduling của hệ điều hành vốn sử dụng tín hiệu ngắt timer phần cứng (như SIGALRM); cơ chế này phụ thuộc vào việc tác vụ phối hợp tự kiểm tra hạn mức thời gian chạy (budget tick).

**Examples:** `The Tokio runtime uses a cooperative task preemption heuristic with a default budget of 128 iterations to prevent starvation in tightly nested asynchronous loops.` → Môi trường thực thi Tokio sử dụng một phỏng đoán tước quyền tác vụ hợp tác với ngân sách mặc định là 128 lần lặp để ngăn chặn tình trạng đói tài nguyên trong các vòng lặp bất đồng bộ lồng nhau chặt chẽ.

**Liên kết tiếng Hàn:** `협력적 태스크 선점 휴리스틱` (協力적 task 先占 heuristic) — quy tắc phỏng đoán nhằm thu hồi quyền thực thi một cách tự nguyện khi tác vụ chạy vượt quá thời gian cho phép.

---

## 16. atomic task stealing protocol /əˈtɑm.ɪk tæsk ˈstiː.lɪŋ ˈproʊ.tə.kɑl/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là giao thức đồng bộ hóa phần cứng để trộm tác vụ (ví dụ: `adhere to an atomic task stealing protocol`, `the atomic task stealing protocol resolves race conditions`).

**Core meaning — English:** The hardware-level memory synchronization sequence and memory ordering primitives (such as acquire-release CAS) governing how a thief thread safely extracts a task reference from a victim's work queue without data races.

**Core meaning & mental image — Tiếng Việt:** Giao thức trộm tác vụ nguyên tử; hãy hình dung một chiếc két sắt mở hai phía: hai người cùng đưa tay vào chộp lấy một chiếc phong bì duy nhất bên trong; giao thức nguyên tử giống như một cơ cấu lò xo siêu nhạy: chỉ có bàn tay của người chạm vào chiếc phong bì trước một phần tỷ giây mới khóa được chốt giữ, trong khi bàn tay của người kia lập tức nhận được tín hiệu báo trượt và rút tay về nguyên vẹn mà chiếc phong bì không bao giờ bị xé rách đôi.

**Grammar & collocations:** `enforce an atomic task stealing protocol` — thực thi một giao thức trộm tác vụ nguyên tử; `invariants of the atomic task stealing protocol` — các bất biến của giao thức trộm tác vụ nguyên tử; `atomic task stealing protocol with acquire-release semantics` — giao thức trộm tác vụ nguyên tử với ngữ nghĩa acquire-release.

**Register & nuance:** `low-level lock-free concurrency & memory models (C++11/C23 atomics)` — đòi hỏi sự hiểu biết sâu sắc về các rào cản bộ nhớ (memory fences) để tránh lỗi đọc dữ liệu cũ (stale reads) hoặc trộm trùng lặp tác vụ (double-steal bugs).

**Examples:** `Under the atomic task stealing protocol, simultaneous steal attempts on the final remaining task in a deque are cleanly resolved via a single compare-and-swap instruction.` → Dưới giao thức trộm tác vụ nguyên tử, các nỗ lực trộm đồng thời trên tác vụ duy nhất còn lại trong deque được giải quyết dứt điểm thông qua một chỉ lệnh so sánh-và-hoán-đổi duy nhất.

**Liên kết tiếng Hàn:** `원자적 태스크 스틸링 프로토콜` (原子的 task stealing protocol) — giao thức đồng bộ hóa nguyên tử cấp thấp giúp trộm tác vụ an toàn giữa các luồng.

---

## 17. parent-child cancellation cascade /ˈpɛr.ənt tʃaɪld ˌkæn.səˈleɪ.ʃən kæˈskeɪd/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm cơ chế lan tỏa hủy tác vụ theo phân cấp (ví dụ: `trigger a parent-child cancellation cascade`).

**Core meaning — English:** The deterministic downward propagation of a cancellation event through an entire sub-tree of asynchronous operations, where terminating a parent task automatically and recursively revokes all active child tasks spawned within its scope.

**Core meaning & mental image — Tiếng Việt:** Thác hủy tác vụ cha-con; hãy hình dung một chuỗi quân bài domino được xếp theo hình cành cây: khi quân bài domino gốc ở thân cây chính bị đổ (tác vụ cha bị hủy), lực đẩy lập tức truyền tới tất cả các nhánh con, làm đổ rạp toàn bộ các quân bài con cháu phía sau một cách có trật tự, bảo đảm không một nhánh nhỏ nào còn đứng chơ vơ một mình.

**Grammar & collocations:** `initiate a parent-child cancellation cascade` — khởi xướng một thác hủy tác vụ cha-con; `unwind resources during a parent-child cancellation cascade` — giải phóng tài nguyên trong một thác hủy tác vụ cha-con; `deterministic parent-child cancellation cascade` — thác hủy tác vụ cha-con mang tính tất định.

**Register & nuance:** `structured concurrency invariants` — cốt lõi của tính đúng đắn trong các hệ thống phân tán và ứng dụng mạng; ngăn chặn triệt để tình trạng lãng phí chu kỳ CPU và rò rỉ kết nối mạng cho các công việc mà kết quả của chúng không còn ai cần đến nữa.

**Examples:** `When the master timeout expired, the runtime initiated a parent-child cancellation cascade that instantly severed forty dependent RPC worker tasks.` → Khi thời gian chờ của tác vụ chủ hết hạn, môi trường thực thi đã khởi xướng một thác hủy tác vụ cha-con, lập tức cắt đứt bốn mươi tác vụ công nhân RPC phụ thuộc.

**Liên kết tiếng Hàn:** `부모-자식 취소 연쇄` (父母子息 取消 連鎖) — chuỗi phản ứng dây chuyền tự động hủy bỏ tất cả các tác vụ con khi tác vụ cha bị kết thúc.

---

## 18. worker thread quiescent state /ˈwɜr.kər θrɛd kwiˈɛs.ənt steɪt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là trạng thái nghỉ ngơi tiết kiệm năng lượng của luồng (ví dụ: `enter a worker thread quiescent state`, `transition to a worker thread quiescent state`).

**Core meaning — English:** A low-power or parking condition where a scheduler worker thread, having found no local or stealable tasks across all queues, suspends its execution via a condition variable or futex wait to conserve CPU cycles.

**Core meaning & mental image — Tiếng Việt:** Trạng thái tĩnh của luồng công nhân; hãy hình dung một tài xế taxi tại một bến đỗ: sau khi đã đảo mắt qua tất cả các sảnh đón khách mà không thấy một ai (hết việc để trộm), thay vì tiếp tục lái xe lòng vòng đốt xăng vô ích, người tài xế tắt máy xe, ngả ghế chợp mắt và cài chuông báo; khi có chuyến bay mới hạ cánh, tiếng chuông báo lập tức đánh thức tài xế dậy nổ máy làm việc.

**Grammar & collocations:** `transition into a worker thread quiescent state` — chuyển sang trạng thái tĩnh của luồng công nhân; `awaken from a worker thread quiescent state` — thức tỉnh từ trạng thái tĩnh của luồng công nhân; `duration of the worker thread quiescent state` — khoảng thời gian ở trạng thái tĩnh của luồng công nhân.

**Register & nuance:** `multithreaded engine design & power management` — ngăn chặn hiện tượng lãng phí 100% CPU do luồng chạy vòng lặp bận (busy-waiting / spinning); việc chuyển sang trạng thái quiescent phải được đồng bộ hóa cẩn thận để không bỏ lỡ các thông báo tác vụ mới (missed wakeups).

**Examples:** `To minimize thermal dissipation on idle server nodes, unutilized cores promptly park into a worker thread quiescent state awaiting incoming network events.` → Để giảm thiểu sự tỏa nhiệt trên các nút máy chủ nhàn rỗi, các lõi không được sử dụng lập tức đỗ vào trạng thái tĩnh của luồng công nhân để chờ đợi các sự kiện mạng đến.

**Liên kết tiếng Hàn:** `워커 스레드 정지 상태` (worker thread 靜止 狀態) — trạng thái ngủ yên tiết kiệm tài nguyên của luồng công nhân khi không còn việc để thực thi hoặc trộm.

---

## 19. continuation stealing scheduler /kənˌtɪn.juˈeɪ.ʃən ˈstiː.lɪŋ ˈskɛdʒ.uː.lər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm loại kiến trúc lập lịch bất đồng bộ (ví dụ: `deploy a continuation stealing scheduler`).

**Core meaning — English:** A task scheduler architecture (such as that found in Cilk or Go) where, upon spawning a new parallel subtask, the current thread immediately executes the child task while leaving the continuation (the remainder of the parent function) in the queue to be stolen by other workers.

**Core meaning & mental image — Tiếng Việt:** Bộ lập lịch trộm phần tiếp diễn; hãy hình dung một thợ mộc đang đóng một chiếc tủ lớn: khi đến công đoạn cần đục 4 chiếc chân tủ, người thợ mộc lập tức bắt tay vào đục ngay chiếc chân tủ thứ nhất (ưu tiên việc con để duy trì tính liên tục và độ sâu đệ quy), đồng thời để lại bản vẽ đóng thân tủ trên bàn cho những người phụ việc khác đến lấy về làm tiếp phần còn lại nếu họ rảnh rỗi.

**Grammar & collocations:** `architecture of a continuation stealing scheduler` — kiến trúc của bộ lập lịch trộm phần tiếp diễn; `continuation stealing scheduler vs child stealing scheduler` — bộ lập lịch trộm phần tiếp diễn so với bộ lập lịch trộm phần con; `cache footprint in a continuation stealing scheduler` — dấu chân bộ nhớ đệm trong một bộ lập lịch trộm phần tiếp diễn.

**Register & nuance:** `parallel runtime systems (Cilk-style work-stealing)` — trái ngược với "child stealing" (nơi luồng tiếp tục chạy hàm cha và đẩy hàm con vào queue); continuation stealing giúp kiểm soát dung lượng bộ nhớ ngăn xếp tỷ lệ thuận với độ sâu cây đệ quy thay vì kích thước bài toán.

**Examples:** `The framework adopts a continuation stealing scheduler, thereby optimizing data locality by running newly spawned child computations immediately on the active core.` → Khung làm việc áp dụng một bộ lập lịch trộm phần tiếp diễn, nhờ đó tối ưu hóa tính cục bộ dữ liệu bằng cách chạy các tính toán con mới sinh ra ngay lập tức trên lõi đang hoạt động.

**Liên kết tiếng Hàn:** `연속 스틸링 스케줄러` (連續 stealing scheduler) — bộ lập lịch ưu tiên thực thi tác vụ con và cho phép các luồng khác trộm phần tính toán tiếp diễn còn lại.

---

## 20. executor queue contention minimization /ɪɡˈzɛk.jə.tər kjuː kənˈtɛn.ʃən ˌmɪn.ə.məˈzeɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là mục tiêu tối ưu hóa hàng đợi trong bộ lập lịch (ví dụ: `aim for executor queue contention minimization`).

**Core meaning — English:** The systematic architectural techniques—such as per-thread local deques, randomized victim selection, and batch task migration—used to minimize atomic lock contention and cache coherence traffic among worker threads.

**Core meaning & mental image — Tiếng Việt:** Giảm thiểu sự tranh chấp hàng đợi của bộ thực thi; hãy hình dung một ngân hàng thay vì chỉ mở một quầy giao dịch duy nhất khiến hàng trăm khách hàng chen lấn xô đẩy nhau (tranh chấp hàng đợi chung), ngân hàng chia nhỏ ra thành mỗi nhân viên một quầy phục vụ riêng; khi một quầy vắng khách, nhân viên đó mới kín đáo bước sang quầy bên cạnh nhận bớt một xấp hồ sơ; việc này loại bỏ hoàn toàn cảnh hỗn loạn chen lấn tại cửa ra vào.

**Grammar & collocations:** `achieve executor queue contention minimization` — đạt được sự giảm thiểu sự tranh chấp hàng đợi của bộ thực thi; `strategies for executor queue contention minimization` — các chiến lược nhằm giảm thiểu sự tranh chấp hàng đợi của bộ thực thi; `impact of executor queue contention minimization` — tác động của việc giảm thiểu sự tranh chấp hàng đợi của bộ thực thi.

**Register & nuance:** `high-performance computing & scale-up systems` — yếu tố quyết định khả năng mở rộng (scalability) trên các máy chủ có 64, 128 hoặc nhiều lõi CPU hơn; nếu hàng đợi bị tranh chấp cao, thông lượng hệ thống sẽ sụp đổ thảm hại do hiện tượng dội ngược đường truyền kết nối bộ nhớ đệm (cache bouncing).

**Examples:** `Through executor queue contention minimization, the runtime scales near-linearly across two hundred and fifty-six logical cores without suffering memory bus saturation.` → Thông qua việc giảm thiểu sự tranh chấp hàng đợi của bộ thực thi, môi trường thực thi mở rộng gần như tuyến tính trên hai trăm năm mươi sáu lõi logic mà không bị bão hòa bus bộ nhớ.

**Liên kết tiếng Hàn:** `실행기 큐 경합 최소화` (實行器 queue 競合 最小化) — kỹ thuật thiết kế hàng đợi cục bộ giúp giảm thiểu tối đa sự xung đột và khóa tranh chấp giữa các luồng.

---

## 21. coroutine suspension unwind point /koʊˈruː.tiːn səˈspɛn.ʃən ˌʌnˈwaɪnd pɔɪnt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm vị trí dọn dẹp ngữ cảnh khi coroutine bị hủy hoặc gặp ngoại lệ (ví dụ: `reach a coroutine suspension unwind point`).

**Core meaning — English:** The dedicated program location within a suspended coroutine's state machine where cleanup routines, destructors, and stack-allocated drop handlers execute when the coroutine is cancelled without ever being resumed.

**Core meaning & mental image — Tiếng Việt:** Điểm tháo cuộn treo coroutine; hãy hình dung một người leo núi đang cắm neo tạm nghỉ giữa vách đá: nếu bất ngờ có lệnh hủy cuộc leo núi do bão tuyết, người đó không nhảy thẳng xuống đất mà phải lần lượt tháo các móc an toàn, thu hồi dây thừng và đóng ba lô tại chính điểm neo đó (điểm tháo cuộn) trước khi được trực thăng kéo lên, bảo đảm không bỏ lại bất kỳ trang thiết bị nguy hiểm nào trên vách núi.

**Grammar & collocations:** `execute destructors at the coroutine suspension unwind point` — thực thi các hàm hủy tại điểm tháo cuộn treo coroutine; `traverse the coroutine suspension unwind point` — duyệt qua điểm tháo cuộn treo coroutine; `compiler-generated coroutine suspension unwind point` — điểm tháo cuộn treo coroutine do trình biên dịch tạo ra.

**Register & nuance:** `resource safety & RAII semantics in async programming (C++ coroutine frame destruction, Rust async Drop)` — nếu thiếu điểm unwind point chuẩn xác, các đối tượng như khóa mutex, socket mạng hay con trỏ tệp đang mở trong coroutine sẽ bị rò rỉ mãi mãi khi coroutine bị hủy bỏ giữa chừng.

**Examples:** `When the cancellation signal fired, execution routed straight to the coroutine suspension unwind point, releasing open file descriptors and shared memory handles safely.` → Khi tín hiệu hủy được kích hoạt, luồng thực thi lập tức chuyển hướng tới điểm tháo cuộn treo coroutine, giải phóng an toàn các bộ mô tả tệp đang mở và các handle bộ nhớ dùng chung.

**Liên kết tiếng Hàn:** `코루틴 중단 해제 지점` (coroutine 中斷 解除 地點) — vị trí trong máy trạng thái coroutine thực hiện dọn dẹp tài nguyên và gọi hàm hủy khi tác vụ bị hủy giữa chừng.

---

## 22. thread pool thread-injection heuristic /θrɛd puːl θrɛd ɪnˈdʒɛk.ʃən hjuːˈrɪs.tɪk/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là quy tắc phỏng đoán bơm thêm luồng mới vào thread pool (ví dụ: `the thread pool thread-injection heuristic governs`, `trigger the thread pool thread-injection heuristic`).

**Core meaning — English:** The dynamic feedback control algorithm that monitors scheduler throughput and task latency, deciding when to instantiate additional OS worker threads to counteract unexpected blocking and restore operational parallelism.

**Core meaning & mental image — Tiếng Việt:** Phỏng đoán bơm luồng vào nhóm luồng; hãy hình dung một trạm thu phí đường cao tốc: bình thường chỉ có 4 làn xe mở cửa; khi camera giám sát thấy hàng xe phía sau bắt đầu ùn ứ kéo dài quá 200 mét và tốc độ qua trạm giảm xuống mức báo động (phát hiện nghẽn), hệ thống quản lý lập tức bật đèn xanh mở thêm làn thu phí thứ 5 và thứ 6 để giải tỏa áp lực giao thông tức thì.

**Grammar & collocations:** `tune the thread pool thread-injection heuristic` — tinh chỉnh phỏng đoán bơm luồng vào nhóm luồng; `thread pool thread-injection heuristic under heavy blocking` — phỏng đoán bơm luồng vào nhóm luồng dưới tình trạng nghẽn nặng; `stability of the thread pool thread-injection heuristic` — độ ổn định của phỏng đoán bơm luồng vào nhóm luồng.

**Register & nuance:** `runtime resource management (.NET CLR ThreadPool Hill-Climbing algorithm)` — giải thuật phải cực kỳ thận trọng: nếu bơm luồng quá nhanh, hệ thống sẽ rơi vào tình trạng quá tải hoán chuyển ngữ cảnh (context switch thrashing); nếu bơm quá chậm, các tác vụ sẽ bị trễ hạn nghiêm trọng.

**Examples:** `A well-calibrated thread pool thread-injection heuristic avoids over-allocating native threads while maintaining adequate throughput during synchronous disk bursts.` → Một phỏng đoán bơm luồng vào nhóm luồng được hiệu chuẩn tốt sẽ tránh việc phân bổ quá mức các luồng bản địa trong khi vẫn duy trì thông lượng thỏa đáng trong suốt các đợt bùng nổ thao tác đĩa đồng bộ.

**Liên kết tiếng Hàn:** `스레드 풀 스레드 주입 휴리스틱` (thread pool thread 注入 heuristic) — thuật toán điều khiển phản hồi quyết định thời điểm tạo thêm luồng công nhân khi phát hiện tắc nghẽn.

---

## 23. cancellation-aware polling predicate /ˌkæn.səˈleɪ.ʃən əˈwɛr ˈpoʊ.lɪŋ ˈprɛd.ə.kɪt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm điều kiện logic kiểm tra hủy tác vụ (ví dụ: `evaluate the cancellation-aware polling predicate`).

**Core meaning — English:** A boolean condition evaluated during the polling phase of an asynchronous future that checks whether a cancellation token has transitioned to an aborted state before attempting further computational or I/O progress.

**Core meaning & mental image — Tiếng Việt:** Vị từ thăm dò nhận biết hủy; hãy hình dung một nhân viên gác cổng trước khi mở cổng cho một kiện hàng đi qua luôn liếc nhìn một danh sách đen trên màn hình máy tính: nếu mã kiện hàng nằm trong danh sách yêu cầu thu hồi khẩn cấp (vị từ trả về true), nhân viên lập tức giữ kiện hàng lại và chuyển sang quy trình hủy mà không tốn công chuyển hàng lên xe tải nữa.

**Grammar & collocations:** `test a cancellation-aware polling predicate` — kiểm tra vị từ thăm dò nhận biết hủy; `embed a cancellation-aware polling predicate` — nhúng vị từ thăm dò nhận biết hủy; `cancellation-aware polling predicate overhead` — chi phí của vị từ thăm dò nhận biết hủy.

**Register & nuance:** `async future implementations (Rust Future::poll, C# ValueTask)` — phương pháp chuẩn mực để biến các tác vụ tính toán nặng thành các tác vụ có khả năng đáp ứng tín hiệu dừng; giúp tránh việc thực hiện những phép tính tốn kém khi kết quả không còn giá trị.

**Examples:** `Before querying the remote microservice, the task evaluates a cancellation-aware polling predicate to bail out instantly if the client timeout has elapsed.` → Trước khi truy vấn dịch vụ vi mô từ xa, tác vụ sẽ đánh giá một vị từ thăm dò nhận biết hủy để thoát ra ngay lập tức nếu thời gian chờ của máy khách đã trôi qua.

**Liên kết tiếng Hàn:** `취소 인식 폴링 술어` (取消 認識 polling 述語) — điều kiện logic kiểm tra trạng thái hủy tác vụ trước khi tiến hành các bước tính toán tiếp theo.

---

## 24. asynchronous promise chain resolution /eɪˈsɪŋ.krə.nəs ˈprɑm.ɪs tʃeɪn ˌrɛz.əˈluː.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là quá trình giải quyết tuần tự các lời hứa bất đồng bộ (ví dụ: `accelerate asynchronous promise chain resolution`, `asynchronous promise chain resolution propagates the result`).

**Core meaning — English:** The sequential settlement and fulfillment process across a linked series of dependent asynchronous promises, where the outcome or error of each completed stage directly unblocks and triggers the next downstream handler.

**Core meaning & mental image — Tiếng Việt:** Giải quyết chuỗi lời hứa bất đồng bộ; hãy hình dung một dây chuyền sản xuất tự động gồm 5 công đoạn liên tiếp: mỗi khi một robot hoàn thành việc lắp ráp một linh kiện (lời hứa được giải quyết), nó lập tức kích hoạt cánh tay robot ở công đoạn kế tiếp chuyển động; tín hiệu thành công hoặc lỗi chạy thông suốt qua toàn bộ dây chuyền từ đầu đến cuối một cách mượt mà.

**Grammar & collocations:** `unwind during asynchronous promise chain resolution` — giải phóng tài nguyên trong quá trình giải quyết chuỗi lời hứa bất đồng bộ; `pipeline asynchronous promise chain resolution` — xếp ống quá trình giải quyết chuỗi lời hứa bất đồng bộ; `overhead of asynchronous promise chain resolution` — chi phí của quá trình giải quyết chuỗi lời hứa bất đồng bộ.

**Register & nuance:** `JavaScript/TypeScript V8 internals & promise combinators` — cơ chế nền tảng quản lý microtask queue; việc tối ưu hóa chuỗi resolution (ví dụ: flattening promise chains) giúp giảm thiểu số lượng lượt bật nhảy microtask không cần thiết trên vòng lặp sự kiện.

**Examples:** `Engine optimizations compress nested handlers, allowing asynchronous promise chain resolution to occur with minimal microtask queue round-trips.` → Các tối ưu hóa của động cơ nén các bộ xử lý lồng nhau, cho phép việc giải quyết chuỗi lời hứa bất đồng bộ diễn ra với số lượt vòng lặp hàng đợi vi tác vụ tối thiểu.

**Liên kết tiếng Hàn:** `비동기 프로미스 체인 해결` (非同期 promise chain 解決) — quá trình hoàn thành tuần tự và chuyển giao kết quả qua một chuỗi các lời hứa bất đồng bộ liên kết.

---

## 25. lock-free multi-producer task mailbox /ˌlɑk ˈfriː ˈmʌl.ti prəˈduː.sər tæsk ˈmeɪl.bɑks/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm cấu trúc dữ liệu giao tiếp giữa các tác vụ (ví dụ: `implement a lock-free multi-producer task mailbox`).

**Core meaning — English:** A concurrent, non-blocking single-consumer multi-producer queue structure used by actors or coroutine workers to receive incoming messages and work items without acquiring mutual exclusion locks.

**Core meaning & mental image — Tiếng Việt:** Hòm thư tác vụ đa nhà sản xuất không khóa; hãy hình dung một chiếc hòm thư bưu điện ở góc phố: hàng chục người dân (các luồng sản xuất tác vụ) có thể cùng lúc bỏ các lá thư vào khe hòm thư mà không ai phải chờ ai hay tranh nhau chiếc chìa khóa; trong khi đó, chỉ duy nhất người đưa thư (luồng tiêu thụ) giữ chìa khóa đáy hòm thư để mở ra và gom toàn bộ các lá thư đi phát một cách êm thấm, trơn tru.

**Grammar & collocations:** `deposit into a lock-free multi-producer task mailbox` — gửi vào hòm thư tác vụ đa nhà sản xuất không khóa; `drain the lock-free multi-producer task mailbox` — dọn sạch hòm thư tác vụ đa nhà sản xuất không khóa; `throughput of the lock-free multi-producer task mailbox` — thông lượng của hòm thư tác vụ đa nhà sản xuất không khóa.

**Register & nuance:** `actor runtimes & concurrent message passing (Akka, Actix, Erlang)` — dựa trên các giải thuật như MPSC linked list của Dmitry Vyukov; mang lại thông lượng cực cao khi nhiều luồng cùng gửi thông điệp cho một coroutine/actor duy nhất mà không bị hiện tượng lock contention.

**Examples:** `Each actor worker processes events from its dedicated lock-free multi-producer task mailbox, ensuring zero lock contention during high-velocity message ingress.` → Mỗi công nhân tác nhân xử lý các sự kiện từ hòm thư tác vụ đa nhà sản xuất không khóa chuyên dụng của nó, bảo đảm không có tranh chấp khóa trong suốt quá trình nạp thông điệp tốc độ cao.

**Liên kết tiếng Hàn:** `락프리 다중 생산자 태스크 메일함` (lock-free 多重 生産者 task mail函) — cấu trúc hàng đợi không khóa cho phép nhiều luồng cùng gửi thông điệp cho một luồng tiếp nhận duy nhất.

---

## Review in context (Part 1: Coroutine Frame Memory, Work-Stealing, and Lifecycle Management)

Modern asynchronous language runtimes overcome the scalability bottlenecks of operating system threads by transforming asynchronous functions into compact state representations. Central to this efficiency is **stackless coroutine frame allocation**, which provisions minimal heap memory to store live variables across suspension checkpoints rather than allocating contiguous multi-megabyte stacks. To distribute these fine-grained lightweight tasks across available processor cores, high-performance executors rely on **Chase-Lev deque work-stealing**, where each worker thread pushes and pops local tasks from the bottom of its double-ended queue while idle cores steal tasks from the top via atomic operations. To maintain scheduler responsiveness without OS hardware interrupts, compiler backends inject a **cooperative polling yield point** into loops, prompting long-running operations to voluntarily yield execution control. Task lifecycles are controlled cleanly through **cancellation token propagation**, ensuring that abort signals cascade deterministically down asynchronous call hierarchies. When certain worker threads inadvertently encounter synchronous system calls, dynamic **thread-starvation mitigation** safeguards step in to spawn auxiliary workers, preventing the entire execution pool from grinding to a halt. When an awaited I/O future completes, the scheduler carries out **continuation task dispatching**, wrapping the remaining execution closure and queueing it for immediate resumption. All of these subsystems operate under the orchestration of a central **asynchronous runtime executor**, which coordinates task pools, timers, and I/O polling drivers. Latency across chained tasks is significantly curtailed through **tail-resumption coroutine dispatch**, directly handing off CPU registers to the subsequent coroutine as a terminal tail-call. Under unbalanced computational bursts, an adaptive **work-stealing scheduling heuristic** strategically selects donor queues within the same NUMA node to maximize cache reuse. To prevent abandoned background tasks from leaking memory, systems enforce a strict **structured concurrency lifetime boundary**, guaranteeing that no spawned task outlives its enclosing lexical scope. Furthermore, schedulers allow **unpinned green thread migration**, migrating idle lightweight tasks across threads to balance load across cores. Finally, when downstream consumers approach maximum capacity, the pipeline activates **backpressure-driven task throttling**, curbing upstream ingest rates to preserve overall system stability.

**Bản dịch tiếng Việt:**

Các môi trường thực thi ngôn ngữ bất đồng bộ hiện đại khắc phục các nút thắt cổ chai về khả năng mở rộng của các luồng hệ điều hành bằng cách chuyển đổi các hàm bất đồng bộ thành các biểu diễn trạng thái nhỏ gọn. Trọng tâm của hiệu quả này là **cấp phát khung coroutine không ngăn xếp**, cấp phát bộ nhớ heap tối thiểu để lưu trữ các biến sống qua các điểm kiểm tra tạm dừng thay vì cấp phát các ngăn xếp nhiều megabyte liền kề. Để phân phối các tác vụ nhẹ chi tiết này trên các lõi vi xử lý khả dụng, các bộ thực thi hiệu năng cao dựa vào cơ chế **trộm việc qua hàng đợi hai đầu Chase-Lev**, nơi mỗi luồng công nhân đẩy và rút các tác vụ cục bộ từ đáy của hàng đợi hai đầu của nó trong khi các lõi nhàn rỗi trộm các tác vụ từ đỉnh thông qua các thao tác nguyên tử. Để duy trì tính phản hồi của bộ lập lịch mà không cần các ngắt phần cứng của hệ điều hành, các phần phụ trợ trình biên dịch chèn một **điểm nhượng quyền thăm dò hợp tác** vào các vòng lặp, thúc đẩy các thao tác chạy dài tự nguyện nhượng lại quyền kiểm soát thực thi. Vòng đời tác vụ được kiểm soát sạch sẽ thông qua sự **lan truyền mã thông báo hủy**, bảo đảm rằng các tín hiệu hủy bỏ được truyền xuống một cách tất định dọc theo các phân cấp gọi bất đồng bộ. Khi một số luồng công nhân vô tình gặp phải các lệnh gọi hệ thống đồng bộ, các biện pháp bảo vệ **giảm thiểu sự đói luồng** động sẽ can thiệp để sinh ra các công nhân phụ trợ, ngăn không cho toàn bộ nhóm thực thi bị đình trệ. Khi một future I/O đang chờ hoàn thành, bộ lập lịch thực hiện **điều phối tác vụ tiếp diễn**, đóng gói bao đóng thực thi còn lại và xếp hàng nó để phục hồi ngay lập tức. Tất cả các hệ thống con này hoạt động dưới sự điều phối của một **bộ thực thi môi trường bất đồng bộ** trung tâm, quản lý các nhóm tác vụ, bộ định thời và các trình điều khiển thăm dò I/O. Độ trễ trên các tác vụ theo chuỗi được cắt giảm đáng kể thông qua **điều phối phục hồi coroutine ở đuôi**, chuyển giao trực tiếp các thanh ghi CPU cho coroutine tiếp theo dưới dạng một lệnh gọi đuôi kết thúc. Dưới các đợt bùng nổ tính toán không cân bằng, một **phỏng đoán lập lịch trộm việc** thích ứng sẽ lựa chọn các hàng đợi cho việc trong cùng một nút NUMA một cách chiến lược để tối đa hóa việc tái sử dụng bộ nhớ đệm. Để ngăn chặn các tác vụ nền bị bỏ rơi làm rò rỉ bộ nhớ, các hệ thống thực thi một **ranh giới vòng đời đồng thời có cấu trúc** nghiêm ngặt, bảo đảm rằng không có tác vụ nào được sinh ra tồn tại lâu hơn phạm vi từ vựng bao bọc nó. Hơn nữa, các bộ lập lịch cho phép **sự di chuyển luồng xanh không ghim**, di chuyển các tác vụ nhẹ nhàn rỗi giữa các luồng để cân bằng tải trên các lõi. Cuối cùng, khi các bên tiêu thụ hạ nguồn tiến gần đến công suất tối đa, đường ống sẽ kích hoạt **tiết lưu tác vụ do áp lực ngược điều khiển**, hạn chế tốc độ nạp thượng nguồn để duy trì sự ổn định tổng thể của hệ thống.

---

## Review in context (Part 2: Preemption Mechanics, State Machines, and Lock-Free Queuing)

At the low-level machine execution tier, robust coroutine runtimes rely on continuous instruction-level oversight and lock-free coordination protocols. Loop bounds and function entrances are transformed via **non-blocking yield point instrumentation**, embedding negligible memory checks that signal when a coroutine should yield. Once lowered by the compiler, each asynchronous logic routine operates as an explicit **reentrant coroutine state machine**, able to freeze its execution context and later resume from arbitrary thread contexts without corrupting internal invariants. When CPU-bound tasks execute extensive uninterrupted sequences, the scheduler's **cooperative task preemption heuristic** decrements an operational quota, prompting the task to yield when its execution budget expires. Multiple worker threads concurrent attempting to rebalance work execute an **atomic task stealing protocol**, ensuring that simultaneous steal attempts on deque nodes are resolved without data races or orphaned references. When user workflows or outer contexts terminate prematurely, an automatic **parent-child cancellation cascade** recursively aborts all nested child tasks, reclaiming allocated memory instantly. When the global task volume recedes, worker threads transition into a **worker thread quiescent state**, parking their execution via OS futex primitives to minimize hardware energy consumption. Certain runtime frameworks prioritize immediate task execution by adopting a **continuation stealing scheduler**, which executes spawned child tasks locally while leaving continuation frames for idle workers to adopt. Across multi-socket servers, architectures emphasize **executor queue contention minimization**, partitioning task queues to prevent inter-core bus saturation. If an asynchronous operation is aborted mid-flight, execution branches to a **coroutine suspension unwind point**, running cleanup destructors to release system resources cleanly. To handle unpredictable synchronous spikes, the runtime continually evaluates its **thread pool thread-injection heuristic**, dynamically expanding worker capacity when latency exceeds defined targets. Prior to initiating remote RPCs, operations evaluate a **cancellation-aware polling predicate**, exiting early if upstream deadlines have already passed. Downstream notifications trigger an **asynchronous promise chain resolution**, sequentially unlocking dependent handlers across execution pipelines. Finally, messages flow concurrently across task boundaries through a dedicated **lock-free multi-producer task mailbox**, providing scalable, uncontended communication for actor-oriented workflows.

**Bản dịch tiếng Việt:**

Ở tầng thực thi máy cấp thấp, các môi trường thực thi coroutine mạnh mẽ dựa vào sự giám sát liên tục ở mức chỉ lệnh và các giao thức điều phối không khóa. Các biên vòng lặp và lối vào hàm được chuyển đổi thông qua việc **gắn mã điểm nhượng quyền không chặn**, nhúng các phép kiểm tra bộ nhớ không đáng kể để báo hiệu khi nào một coroutine nên nhượng bộ. Sau khi được hạ cấp bởi trình biên dịch, mỗi chu trình logic bất đồng bộ hoạt động như một **máy trạng thái coroutine khả tái nhập** tường minh, có thể đóng băng ngữ cảnh thực thi của nó và sau đó tiếp tục từ các ngữ cảnh luồng tùy ý mà không làm hỏng các bất biến nội bộ. Khi các tác vụ ngốn CPU thực thi các chuỗi liên tục kéo dài, **phỏng đoán tước quyền tác vụ hợp tác** của bộ lập lịch sẽ giảm dần một định mức hoạt động, nhắc nhở tác vụ nhượng quyền khi ngân sách thực thi của nó cạn kiệt. Nhiều luồng công nhân cùng lúc cố gắng tái cân bằng công việc sẽ thực thi một **giao thức trộm tác vụ nguyên tử**, bảo đảm rằng các nỗ lực trộm đồng thời trên các nút deque được giải quyết mà không có hiện tượng tương vũ dữ liệu hay các tham chiếu mồ côi. Khi quy trình làm việc của người dùng hoặc các ngữ cảnh bên ngoài kết thúc sớm, một **thác hủy tác vụ cha-con** tự động sẽ đệ quy hủy bỏ tất cả các tác vụ con lồng nhau, thu hồi bộ nhớ đã cấp phát ngay lập tức. Khi khối lượng tác vụ toàn cục giảm bớt, các luồng công nhân chuyển sang một **trạng thái tĩnh của luồng công nhân**, đỗ lại việc thực thi của chúng thông qua các lệnh gốc futex của hệ điều hành để giảm thiểu mức tiêu thụ năng lượng phần cứng. Một số khung làm việc thời gian chạy ưu tiên thực thi tác vụ tức thì bằng cách áp dụng một **bộ lập lịch trộm phần tiếp diễn**, thực thi các tác vụ con mới sinh cục bộ trong khi để lại các khung tiếp diễn cho các công nhân nhàn rỗi tiếp nhận. Trên các máy chủ đa socket, các kiến trúc nhấn mạnh vào việc **giảm thiểu sự tranh chấp hàng đợi của bộ thực thi**, phân vùng các hàng đợi tác vụ để ngăn chặn sự bão hòa bus giữa các lõi. Nếu một thao tác bất đồng bộ bị hủy bỏ giữa chừng, luồng thực thi sẽ rẽ nhánh đến một **điểm tháo cuộn treo coroutine**, chạy các hàm hủy dọn dẹp để giải phóng tài nguyên hệ thống một cách sạch sẽ. Để xử lý các đợt tăng đột biến đồng bộ không thể dự đoán, môi trường thực thi liên tục đánh giá **phỏng đoán bơm luồng vào nhóm luồng** của nó, mở rộng công suất công nhân một cách linh hoạt khi độ trễ vượt quá các mục tiêu xác định. Trước khi khởi tạo các RPC từ xa, các thao tác đánh giá một **vị từ thăm dò nhận biết hủy**, thoát sớm nếu thời hạn chót của thượng nguồn đã trôi qua. Các thông báo hạ nguồn kích hoạt một quá trình **giải quyết chuỗi lời hứa bất đồng bộ**, tuần tự mở khóa các bộ xử lý phụ thuộc qua các đường ống thực thi. Cuối cùng, các thông điệp truyền đồng thời qua các ranh giới tác vụ thông qua một **hòm thư tác vụ đa nhà sản xuất không khóa** chuyên dụng, cung cấp khả năng giao tiếp có thể mở rộng, không tranh chấp cho các quy trình làm việc hướng tác nhân.
