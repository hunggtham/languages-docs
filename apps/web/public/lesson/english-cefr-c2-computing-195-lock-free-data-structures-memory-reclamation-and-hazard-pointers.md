# C2 Vocabulary 195 — Lock-free concurrent data structures, safe memory reclamation, and hazard pointer protection schemes

Lập trình đồng thời không khóa (lock-free concurrency) và cấu trúc dữ liệu phi khóa đại diện cho đỉnh cao của kỹ nghệ hệ thống tính toán hiệu năng cao. Trong các hệ thống đa luồng quy mô lớn, việc sử dụng khóa truyền thống (mutex, spinlock) thường dẫn đến hiện tượng đảo ngược quyền ưu tiên (priority inversion), tắc nghẽn luồng (deadlock, livelock), và suy giảm thông lượng thảm khốc khi luồng giữ khóa bị hệ điều hành đình chỉ (preempt). Để vượt qua những giới hạn này, các kiến trúc sư phần mềm dựa vào các chỉ thị nguyên tử phần cứng như so sánh và hoán đổi (Compare-And-Swap - CAS) để bảo đảm tính khả tuyến tính hóa (linearizability) mà không cần khóa. Tuy nhiên, lập trình không khóa mở ra hai thách thức sống còn: vấn đề ABA (ABA problem) và hiểm họa thu hồi bộ nhớ không an toàn (safe memory reclamation - SMR). Nếu một luồng giải phóng bộ nhớ của một nút trong khi các luồng đọc khác vẫn đang giải tham chiếu con trỏ trỏ tới nút đó, thảm họa lỗi bộ nhớ (use-after-free, dangling pointer) sẽ xảy ra. Để giải quyết triệt để vấn đề này, các cơ chế bảo vệ tiên tiến như con trỏ rủi ro (hazard pointers), thu hồi dựa trên kỷ nguyên (epoch-based reclamation - EBR) và RCU (Read-Copy-Update) được thiết kế để theo dõi các trạng thái tĩnh (quiescent states) và điều phối việc thu hồi bộ nhớ an toàn. Bài học C2 này trang bị cho bạn 25 thuật ngữ chuyên sâu, sắc sảo nhất về cấu trúc dữ liệu không khóa, trật tự rào cản bộ nhớ phần cứng và cơ chế an toàn bộ nhớ trong môi trường đa lõi hiện đại.

Flow của bài học: **lock-free linearizability** → **compare-and-swap loop** → **ABA problem mitigation** → **safe memory reclamation** → **hazard pointer table** → **epoch-based quiescent reclamation** → **quiescent state detection** → **Michael-Scott queue** → **memory barrier instruction ordering** → **read-copy-update synchronization** → **progress guarantee hierarchy** → **wait-free consensus number** → **non-blocking algorithmic throughput** → **acquire-release semantics** → **sequentially consistent ordering** → **tagged pointer generation** → **thread-local retirement list** → **optimistic concurrent traversal** → **atomic marked reference** → **false sharing cache contention** → **lock-free elimination array** → **hazard pointer thread registration** → **quiescent state epoch advance** → **lock-free memory deallocation hazard** → **lock-free dual stack**.

---

## 1. lock-free linearizability /lɑːk friː ˌlɪn.i.ɚ.aɪ.zəˈbɪl.ə.t̬i/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ hoặc bổ ngữ trong thiết kế hệ thống phân tán và cấu trúc dữ liệu song song (ví dụ: `prove lock-free linearizability`, `guarantee lock-free linearizability`).

**Core meaning — English:** The mathematical property of a concurrent data structure ensuring that every operation appears to take effect instantaneously at a discrete linearization point in time, while guaranteeing system-wide progress without mutual exclusion locks.

**Core meaning & mental image — Tiếng Việt:** Tính khả tuyến tính hóa không khóa; hãy hình dung một quầy giao dịch ngân hàng đông đúc nơi hàng trăm khách hàng nộp và rút tiền đồng thời: thay vì bảo vệ kéo rào sắt chặn từng người một (khóa), mỗi khách hàng thao tác trên một bảng điện tử tốc độ cao; dù các luồng yêu cầu xen kẽ phức tạp ở cấp nano giây, hệ thống vẫn bảo đảm tồn tại một thứ tự thời gian tuyến tính duy nhất, logic và không thể đảo ngược cho mọi giao dịch, và ít nhất một khách hàng luôn hoàn thành công việc của mình trong một khoảng thời gian hữu hạn.

**Grammar & collocations:** `establish lock-free linearizability` — thiết lập tính khả tuyến tính hóa không khóa; `formal verification of lock-free linearizability` — kiểm minh hình thức về tính khả tuyến tính hóa không khóa; `preserve lock-free linearizability` — bảo tồn tính khả tuyến tính hóa không khóa.

**Register & nuance:** `high-performance systems & concurrent programming theory` — tiêu chuẩn vàng cho tính đúng đắn trong lập trình đa luồng hiện đại; kết hợp giữa hai khái niệm: "linearizable" (tính tuần tự tức thời) và "lock-free" (tiến trình toàn cục được bảo đảm mà không phụ thuộc vào trạng thái của luồng khác).

**Examples:** `Engineers established the lock-free linearizability of the concurrent hash map by identifying an atomic CAS instruction that acts as the single linearization point for all updates.` → Các kỹ sư đã xác lập tính khả tuyến tính hóa không khóa của bảng băm đồng thời bằng cách xác định một chỉ thị CAS nguyên tử đóng vai trò như điểm tuyến tính hóa duy nhất cho mọi thao tác cập nhật.

**Liên kết tiếng Hàn:** `락프리 선형화 가능성` (lock-free 線型化 可能性) — đặc tính toán học của cấu trúc dữ liệu đồng thời bảo đảm tiến trình chung của hệ thống mà không dùng khóa và mọi thao tác xuất hiện như diễn ra tức thời tại một thời điểm tuyến tính.

---

## 2. compare-and-swap loop /kəmˈpɛr ənd swɑːp luːp/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm cơ chế cập nhật trạng thái nguyên tử trong các thuật toán không khóa (ví dụ: `execute a compare-and-swap loop`, `retry inside a compare-and-swap loop`).

**Core meaning — English:** A non-blocking programmatic construct that repeatedly reads a shared memory value and attempts an atomic compare-and-swap primitive until the update succeeds without interference from competing threads.

**Core meaning & mental image — Tiếng Việt:** Vòng lặp so sánh và hoán đổi (CAS loop); hãy hình dung một người ném bóng rổ: anh ta quan sát vị trí rổ (đọc giá trị hiện tại), chuẩn bị tư thế ném (tính toán giá trị mới), và tung bóng; nếu trong tích tắc đó có một cơn gió đổi chiều hoặc ai đó chạm vào rổ (giá trị bộ nhớ bị luồng khác đổi), cú ném trượt ngay lập tức; thay vì ngồi chờ hay bực bội, anh ta lập tức nhặt quả bóng lên, quan sát lại rổ và tiếp tục ném liên tục cho đến khi bóng vào rổ hoàn hảo mà không bị ai cản trở.

**Grammar & collocations:** `spin inside a compare-and-swap loop` — quay vòng bên trong vòng lặp so sánh và hoán đổi; `terminate a compare-and-swap loop` — kết thúc một vòng lặp so sánh và hoán đổi; `contention in a compare-and-swap loop` — sự tranh chấp bên trong vòng lặp so sánh và hoán đổi.

**Register & nuance:** `systems programming & hardware concurrency primitives` — cơ chế căn bản nhất của lập trình phi khóa; đối lập với spinlock vì một luồng thất bại sẽ cập nhật lại kỳ vọng của mình và thử lại mà không ngăn cản luồng chiến thắng tiếp tục tiến trình.

**Examples:** `Under heavy write contention, threads spent excessive CPU cycles retrying their updates inside a tight compare-and-swap loop.` → Dưới sự tranh chấp ghi dữ liệu gay gắt, các luồng đã tiêu tốn chu kỳ CPU quá mức khi liên tục thử lại các cập nhật của mình bên trong một vòng lặp so sánh và hoán đổi chật hẹp.

**Liên kết tiếng Hàn:** `비교-교환 루프` (比較-交換 loop) — vòng lặp lập trình không khóa liên tục đọc giá trị và thực hiện chỉ thị nguyên tử CAS cho đến khi cập nhật thành công mà không bị luồng khác can thiệp.

---

## 3. ABA problem mitigation /ˌeɪ.biːˈeɪ ˈprɑː.bləm ˌmɪt̬.əˈɡeɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là giải pháp kỹ thuật ngăn chặn lỗi sai lệch trạng thái bộ nhớ giả mạo trong CAS (ví dụ: `implement ABA problem mitigation`, `require ABA problem mitigation`).

**Core meaning — English:** Engineering techniques, such as version stamping, tagged pointers, or safe memory reclamation, designed to prevent a compare-and-swap operation from mistakenly succeeding when a shared memory location is read as value A, changed to B by another thread, and then reverted to A before the CAS executes.

**Core meaning & mental image — Tiếng Việt:** Giảm thiểu vấn đề ABA; hãy hình dung bạn để một chiếc vali tiền màu đen (A) trong tủ gửi đồ: một tên trộm lén mở tủ lấy chiếc vali đi đổi lấy một chiếc vali chứa tài liệu giả (B), rồi lát sau lại thay bằng một chiếc vali màu đen rỗng không khác (A); khi bạn quay lại kiểm tra chỉ dựa vào màu sắc (địa chỉ con trỏ), bạn thấy vali vẫn là A và tưởng mọi thứ nguyên vẹn; việc giảm thiểu vấn đề ABA giống như đóng một con dấu số sê-ri phiên bản duy nhất (tagged pointer) lên vali mỗi lần chạm vào, khiến mọi sự thay đổi lén lút đều bị phát hiện ngay lập tức.

**Grammar & collocations:** `rigorous ABA problem mitigation` — sự giảm thiểu vấn đề ABA nghiêm ngặt; `achieve ABA problem mitigation` — đạt được sự giảm thiểu vấn đề ABA; `strategy for ABA problem mitigation` — chiến lược giảm thiểu vấn đề ABA.

**Register & nuance:** `concurrency engineering & algorithmic safety` — một trong những cạm bẫy kinh điển và nguy hiểm nhất trong lập trình lock-free bằng C/C++; không xảy ra trong môi trường có garbage collection tự động trừ khi lập trình viên tái sử dụng thủ công vùng nhớ nút.

**Examples:** `By appending a 64-bit monotonic counter to each memory pointer, the engineering team achieved robust ABA problem mitigation across their lock-free stack implementation.` → Bằng cách gắn thêm một bộ đếm đơn điệu 64-bit vào mỗi con trỏ bộ nhớ, đội ngũ kỹ thuật đã đạt được sự giảm thiểu vấn đề ABA vững chắc trên toàn bộ cài đặt ngăn xếp không khóa của họ.

**Liên kết tiếng Hàn:** `ABA 문제 완화` (ABA 問題 緩和) — các kỹ thuật như con trỏ gắn nhãn hoặc quản lý phiên bản nhằm ngăn chỉ thị CAS thành công nhầm lẫn khi giá trị bộ nhớ bị đổi sang B rồi quay lại A.

---

## 4. safe memory reclamation /seɪf ˈmɛm.ɚ.i ˌrɛk.ləˈmeɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm giải pháp hoặc phân hệ quản lý vòng đời bộ nhớ trong môi trường không khóa (ví dụ: `integrate safe memory reclamation`, `overhead of safe memory reclamation`).

**Core meaning — English:** Algorithmic strategies and synchronization frameworks that ensure dynamic memory nodes removed from a concurrent data structure are deallocated or reused only when no active thread retains an outstanding reference or pointer to them.

**Core meaning & mental image — Tiếng Việt:** Thu hồi bộ nhớ an toàn; hãy hình dung một chiếc cầu gỗ công cộng: một nhân viên bảo trì muốn tháo dỡ một tấm ván cũ đã bị mục (nút bị xóa khỏi danh sách); nếu anh ta giật tấm ván ra ngay lập tức, những người đi bộ đang bước chân lên tấm ván đó sẽ rơi xuống vực (use-after-free thảm khốc); cơ chế thu hồi bộ nhớ an toàn là người bảo trì đánh dấu tấm ván cần tháo, đứng đợi ở đầu cầu quan sát cho đến khi người cuối cùng bước qua khỏi tấm ván đó rồi mới chính thức gỡ bỏ và tiêu hủy nó.

**Grammar & collocations:** `deploy safe memory reclamation` — triển khai thu hồi bộ nhớ an toàn; `safe memory reclamation latency` — độ trễ của việc thu hồi bộ nhớ an toàn; `benchmark safe memory reclamation algorithms` — đánh giá chuẩn hiệu năng các thuật toán thu hồi bộ nhớ an toàn.

**Register & nuance:** `systems architecture & unmanaged concurrency (C/C++, Rust)` — điều kiện tiên quyết bắt buộc cho mọi thư viện lock-free cấp công nghiệp; giải quyết triệt để bài toán hóc búa nhất của lập trình hệ thống: biết chính xác khi nào một vùng nhớ thực sự "an toàn" để giải phóng mà không dùng garbage collection toàn cục.

**Examples:** `Without safe memory reclamation, lock-free algorithms in unmanaged languages inevitably succumb to catastrophic memory corruption and segmentation faults.` → Nếu không có sự thu hồi bộ nhớ an toàn, các thuật toán không khóa trong các ngôn ngữ không quản lý bộ nhớ chắc chắn sẽ sụp đổ trước hiện tượng hỏng bộ nhớ và lỗi phân đoạn thảm khốc.

**Liên kết tiếng Hàn:** `안전한 메모리 회수` (安全한 memory 回收) — chiến lược thuật toán bảo đảm các nút dữ liệu bị gỡ khỏi cấu trúc dữ liệu đồng thời chỉ được giải phóng khi không còn luồng nào giữ tham chiếu tới chúng.

---

## 5. hazard pointer table /ˈhæz.ɚd ˈpɔɪn.t̬ɚ ˈteɪ.bəl/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là bảng dữ liệu toàn cục lưu trữ các con trỏ đang được các luồng bảo vệ (ví dụ: `scan the hazard pointer table`, `allocate slots in the hazard pointer table`).

**Core meaning — English:** A shared, thread-indexed registry where concurrent worker threads publish the exact memory addresses of nodes they are currently accessing, forbidding any retiring thread from deallocating those protected addresses.

**Core meaning & mental image — Tiếng Việt:** Bảng con trỏ rủi ro (hazard pointer table); hãy hình dung một bảng ghim thông báo tại phòng mượn sách thư viện: mỗi độc giả (luồng) khi cầm một cuốn sách quý hiếm lên đọc sẽ ghim một mẩu giấy ghi rõ tên cuốn sách đó lên bảng ghim cá nhân của mình; thủ thư (luồng muốn xóa sách cũ) trước khi đem sách đi tiêu hủy phải đối chiếu toàn bộ bảng ghim; nếu thấy tên cuốn sách vẫn còn trên bảng ghim của bất kỳ độc giả nào, thủ thư tuyệt đối không được đốt cuốn sách đó mà phải cất vào hộp chờ.

**Grammar & collocations:** `consult the hazard pointer table` — tham vấn bảng con trỏ rủi ro; `publish into the hazard pointer table` — công bố vào bảng con trỏ rủi ro; `size of the hazard pointer table` — kích thước của bảng con trỏ rủi ro.

**Register & nuance:** `Maged Michael hazard pointer paradigm` — phương pháp SMR có giới hạn trên xác định (bounded memory reclamation); bảo đảm số lượng bộ nhớ chưa thu hồi tỷ lệ thuận với số luồng đang chạy, khác với epoch-based có thể bị kẹt vô hạn nếu một luồng bị treo.

**Examples:** `During node retirement, the worker thread scans the hazard pointer table to ensure no active reader is currently dereferencing the targeted memory block.` → Trong quá trình cho nút nghỉ hưu, luồng công nhân quét bảng con trỏ rủi ro để bảo đảm không có luồng đọc nào đang giải tham chiếu khối bộ nhớ mục tiêu.

**Liên kết tiếng Hàn:** `해저드 포인터 테이블` (hazard pointer table) — bảng đăng ký chia sẻ nơi các luồng công bố địa chỉ bộ nhớ mà chúng đang truy cập để ngăn chặn các luồng khác giải phóng vùng nhớ đó.

---

## 6. epoch-based quiescent reclamation /ˈɛp.ək beɪst kwiˈɛs.ənt ˌrɛk.ləˈmeɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm cơ chế thu hồi bộ nhớ theo giai đoạn toàn cục dựa trên trạng thái tĩnh (ví dụ: `implement epoch-based quiescent reclamation`, `throughput of epoch-based quiescent reclamation`).

**Core meaning — English:** A safe memory reclamation technique that groups concurrent operations into discrete temporal epochs and defers memory deallocation until all threads have crossed a quiescent state indicating they have exited previous epochs.

**Core meaning & mental image — Tiếng Việt:** Thu hồi tĩnh dựa trên kỷ nguyên; hãy hình dung một phòng thi cử chia thành các ca thi (kỷ nguyên e, e+1, e+2): thí sinh vào phòng thi ca 1 làm bài; giám thị muốn thu dọn đề thi của ca 1 không cần đi hỏi từng người mà chỉ cần đứng ở cửa; khi tất cả thí sinh ca 1 đã nộp bài và bước ra khỏi phòng (đạt trạng thái tĩnh - quiescent state), toàn bộ tài liệu cũ của ca 1 có thể đem đi tái chế an toàn cùng một mẻ lớn với chi phí cực thấp.

**Grammar & collocations:** `coordinate epoch-based quiescent reclamation` — điều phối thu hồi tĩnh dựa trên kỷ nguyên; `epoch-based quiescent reclamation latency` — độ trễ của thu hồi tĩnh dựa trên kỷ nguyên; `advance under epoch-based quiescent reclamation` — tiến triển dưới cơ chế thu hồi tĩnh dựa trên kỷ nguyên.

**Register & nuance:** `high-throughput concurrent runtimes (e.g., Crossbeam, UrCU)` — vượt trội hazard pointers về tốc độ đọc vì luồng đọc chỉ cần cập nhật một bộ đếm kỷ nguyên luồng cục bộ thay vì phải ghi vào hazard pointer toàn cục kèm hàng rào bộ nhớ đắt đỏ; nhược điểm là một luồng bị tắc có thể làm đình trệ việc thu hồi bộ nhớ của toàn hệ thống.

**Examples:** `By adopting epoch-based quiescent reclamation, the key-value store reduced read-path synchronization overhead to near-zero CPU cycles.` → Bằng cách áp dụng cơ chế thu hồi tĩnh dựa trên kỷ nguyên, kho lưu trữ khóa-giá trị đã giảm chi phí đồng bộ hóa trên đường đọc xuống gần như bằng không chu kỳ CPU.

**Liên kết tiếng Hàn:** `에포크 기반 정지 상태 회수` (epoch 基盤 靜止 狀態 回收) — kỹ thuật thu hồi bộ nhớ an toàn phân chia các thao tác theo từng kỷ nguyên thời gian và trì hoãn giải phóng cho đến khi mọi luồng vượt qua trạng thái tĩnh.

---

## 7. quiescent state detection /kwiˈɛs.ənt steɪt dɪˈtɛk.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là quá trình phát hiện thời điểm một luồng không còn giữ bất kỳ tham chiếu nhạy cảm nào (ví dụ: `trigger quiescent state detection`, `rely on quiescent state detection`).

**Core meaning — English:** The protocol or algorithmic mechanism used by concurrent runtimes to observe and confirm that a worker thread has finished traversing shared data structures and holds zero active references to retiring memory.

**Core meaning & mental image — Tiếng Việt:** Phát hiện trạng thái tĩnh; hãy hình dung một phi hành gia bước ra ngoài không gian làm nhiệm vụ: khi anh ta bước qua cửa buồng kín khí (airlock) trở lại tàu và khóa chốt, hệ thống máy tính của trạm vũ trụ phát tín hiệu "an toàn" (phát hiện trạng thái tĩnh); hệ thống biết chắc rằng bên ngoài khoảng không vũ trụ không còn ai, cho phép kích hoạt quy trình xả khí hoặc sửa chữa bên ngoài tàu mà không gây nguy hiểm cho tính mạng con người.

**Grammar & collocations:** `perform quiescent state detection` — thực hiện phát hiện trạng thái tĩnh; `periodicity of quiescent state detection` — tính định kỳ của việc phát hiện trạng thái tĩnh; `automate quiescent state detection` — tự động hóa việc phát hiện trạng thái tĩnh.

**Register & nuance:** `RCU & operating system kernel mechanics (Linux kernel)` — khái niệm cốt lõi trong cơ chế RCU của nhân Linux; một trạng thái tĩnh xảy ra khi một CPU thực hiện chuyển đổi ngữ cảnh (context switch), chạy vòng lặp nhàn rỗi (idle loop), hoặc quay về chế độ người dùng (user mode).

**Examples:** `The kernel runtime relies on quiescent state detection across all CPU cores before reclaiming memory blocks unlinked from the global routing table.` → Thời gian chạy của hạt nhân dựa vào việc phát hiện trạng thái tĩnh trên tất cả các lõi CPU trước khi thu hồi các khối bộ nhớ đã bị ngắt liên kết khỏi bảng định tuyến toàn cục.

**Liên kết tiếng Hàn:** `정지 상태 감지` (靜止 狀態 感知) — cơ chế phát hiện và xác nhận rằng một luồng công nhân đã hoàn thành việc duyệt dữ liệu chia sẻ và không còn nắm giữ tham chiếu nào đến bộ nhớ đang chờ giải phóng.

---

## 8. Michael-Scott queue /ˈmaɪ.kəl skɑːt kjuː/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tên gọi chuẩn mực của thuật toán hàng đợi không khóa kinh điển (ví dụ: `implement a Michael-Scott queue`, `contention on a Michael-Scott queue`).

**Core meaning — English:** A seminal non-blocking FIFO concurrent queue algorithm, authored by Maged Michael and Michael Scott, that employs linked list nodes with sentinel heads and tail pointers updated via two-phase compare-and-swap operations with cooperative thread helping.

**Core meaning & mental image — Tiếng Việt:** Hàng đợi Michael-Scott; hãy hình dung một hàng người xếp hàng mua vé: đầu hàng có một nhân viên soát vé (head), cuối hàng có một cột mốc báo vị trí đuôi (tail); khi một người mới đến muốn vào hàng, anh ta dùng CAS để móc nối vào người cuối cùng; nếu anh ta thấy người đứng trước mình đã nối vào hàng nhưng cột mốc đuôi chưa kịp di chuyển, anh ta sẽ "giúp một tay" đẩy cột mốc đuôi lên phía trước rồi mới gắn mình vào; sự tương trợ luồng (helping mechanism) này bảo đảm hàng đợi không bao giờ bị nghẽn ngay cả khi có luồng bị ngắt giữa chừng.

**Grammar & collocations:** `enqueue into a Michael-Scott queue` — đưa vào hàng đợi Michael-Scott; `dequeue from a Michael-Scott queue` — lấy ra khỏi hàng đợi Michael-Scott; `Michael-Scott queue invariants` — các bất biến của hàng đợi Michael-Scott.

**Register & nuance:** `algorithmic canon in concurrent data structures` — thuật toán hàng đợi không khóa chuẩn mực nhất trong khoa học máy tính (1996), là nền tảng cho lớp `ConcurrentLinkedQueue` trong Java tiêu chuẩn và nhiều thư viện C++ hiệu năng cao.

**Examples:** `The standard Java ConcurrentLinkedQueue is a direct, battle-tested realization of the classic Michael-Scott queue algorithm.` → Lớp ConcurrentLinkedQueue tiêu chuẩn của Java là một hiện thực hóa trực tiếp, đã qua thử lửa chiến trường của thuật toán hàng đợi Michael-Scott kinh điển.

**Liên kết tiếng Hàn:** `마이클-스콧 큐` (Michael-Scott queue) — thuật toán hàng đợi FIFO đồng thời không khóa kinh điển sử dụng danh sách liên kết và chỉ thị CAS hai giai đoạn với cơ chế hỗ trợ lẫn nhau giữa các luồng.

---

## 9. memory barrier instruction ordering /ˈmɛm.ɚ.i ˈbær.i.ɚ ɪnˈstrʌk.ʃən ˈɔːr.dɚ.ɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là sự sắp xếp trật tự chỉ thị thông qua rào cản bộ nhớ phần cứng (ví dụ: `enforce memory barrier instruction ordering`).

**Core meaning — English:** The hardware-enforced sequencing of read and write operations imposed by memory fence instructions, preventing CPU out-of-order execution pipelines and compiler optimizations from reordering memory accesses across synchronization boundaries.

**Core meaning & mental image — Tiếng Việt:** Trật tự chỉ thị rào cản bộ nhớ; hãy hình dung một dây chuyền đóng gói quà tặng: nhân viên A đặt món quà vào hộp, dán nhãn; nhân viên B đóng nắp và thắt nơ; nếu không có một người giám sát nghiêm khắc (rào cản bộ nhớ - memory fence), bộ vi xử lý siêu nhanh sẽ tự ý đảo lộn thứ tự (out-of-order execution) để tối ưu tốc độ: đóng nắp và thắt nơ trước khi món quà kịp bỏ vào trong hộp, khiến người nhận mở ra một chiếc hộp rỗng; rào cản bộ nhớ đóng vai trò bức tường sắt bắt buộc mọi thao tác trước rào cản phải hoàn tất tuyệt đối trước khi bất kỳ thao tác nào sau rào cản được bắt đầu.

**Grammar & collocations:** `dictate memory barrier instruction ordering` — chi phối trật tự chỉ thị rào cản bộ nhớ; `guarantee memory barrier instruction ordering` — bảo đảm trật tự chỉ thị rào cản bộ nhớ; `hardware memory barrier instruction ordering` — trật tự chỉ thị rào cản bộ nhớ phần cứng.

**Register & nuance:** `hardware architecture & weak memory models (ARM, POWER, x86)` — tối quan trọng trên các kiến trúc bộ nhớ yếu (weakly ordered) như ARM và RISC-V, nơi các thao tác đọc/ghi có thể bị phần cứng xáo trộn nếu lập trình viên không chỉ định rào cản rõ ràng.

**Examples:** `On weakly ordered ARM architectures, explicit memory barrier instruction ordering is mandatory to ensure that newly written node payloads become visible before publishing their pointers.` → Trên các kiến trúc ARM có trật tự yếu, việc xác lập trật tự chỉ thị rào cản bộ nhớ rõ ràng là bắt buộc để bảo đảm tải trọng nút mới ghi trở nên khả kiến trước khi con trỏ của chúng được công bố.

**Liên kết tiếng Hàn:** `메모리 장벽 명령어 순서화` (memory 障壁 命令語 順序化) — việc phần cứng áp đặt trật tự thực thi các lệnh đọc/ghi thông qua rào cản bộ nhớ nhằm ngăn chặn CPU hoặc trình biên dịch đảo lộn trật tự truy cập.

---

## 10. read-copy-update synchronization /riːd ˈkɑː.pi ʌpˈdeɪt ˌsɪŋ.krə.nəˈzeɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm cơ chế đồng bộ hóa bất đối xứng tối ưu hóa cho đọc (ví dụ: `leverage read-copy-update synchronization`).

**Core meaning — English:** A specialized concurrent synchronization mechanism where readers access shared data structures concurrently without locks or atomic overhead, while updaters allocate a modified copy of the data, atomically swap pointers, and defer deallocation of the old copy.

**Core meaning & mental image — Tiếng Việt:** Đồng bộ hóa đọc-sao chép-cập nhật (RCU); hãy hình dung một bảng danh mục menu trong nhà hàng sang trọng: hàng trăm thực khách (luồng đọc) đang thoải mái nhìn menu trên tường mà không bị gián đoạn; khi người đầu bếp muốn thay đổi giá một món ăn, anh ta không xóa hay vẽ đè lên menu đang treo; thay vào đó, anh ta lấy một tấm bảng mới trong bếp, chép lại danh mục và cập nhật giá mới (Copy-Update), rồi nhanh tay tráo tấm bảng mới lên tường chỉ trong một cái chớp mắt (Atomic Swap); tấm bảng cũ được giữ lại cho đến khi vị khách cuối cùng đang xem nó rời đi rồi mới cất vào kho.

**Grammar & collocations:** `employ read-copy-update synchronization` — sử dụng đồng bộ hóa đọc-sao chép-cập nhật; `read-copy-update synchronization paradigm` — mô thức đồng bộ hóa đọc-sao chép-cập nhật; `scalability of read-copy-update synchronization` — khả năng mở rộng của đồng bộ hóa đọc-sao chép-cập nhật.

**Register & nuance:** `OS kernel development (Paul McKenney's Linux RCU)` — vũ khí tối thượng cho các cấu trúc dữ liệu đọc nhiều ghi ít (read-mostly workloads) như bảng định tuyến mạng hoặc bảng quản lý tệp trong nhân hệ điều hành.

**Examples:** `The Linux network routing subsystem leverages read-copy-update synchronization to achieve millions of route lookups per second across 128 cores with zero read-side lock contention.` → Phân hệ định tuyến mạng Linux tận dụng cơ chế đồng bộ hóa đọc-sao chép-cập nhật để đạt được hàng triệu lượt tra cứu lộ trình mỗi giây trên 128 lõi mà hoàn toàn không bị tranh chấp khóa ở phía đọc.

**Liên kết tiếng Hàn:** `RCU 동기화` (Read-Copy-Update 同期化) — cơ chế đồng bộ hóa đồng thời cho phép các luồng đọc truy cập không khóa với chi phí nguyên tử bằng không trong khi luồng ghi tạo bản sao mới và tráo đổi con trỏ nguyên tử.

---

## 11. progress guarantee hierarchy /ˈprɑː.ɡrɛs ˌɡær.ənˈtiː ˈhaɪ.rɑːr.ki/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là thang phân cấp phân loại các mức độ bảo đảm tiến trình thuật toán (ví dụ: `analyze the progress guarantee hierarchy`).

**Core meaning — English:** The theoretical taxonomy classifying concurrent algorithms by the strength of their non-blocking guarantees, ascending from obstruction-free, through lock-free (system-wide progress), up to wait-free (per-thread bounded progress).

**Core meaning & mental image — Tiếng Việt:** Hệ phân cấp bảo đảm tiến trình; hãy hình dung một cuộc đua tiếp sức: bậc thấp nhất là "miễn cản trở" (obstruction-free) — một vận động viên chỉ về đích được nếu tất cả các đối thủ khác đứng yên nhường đường; bậc trung là "không khóa" (lock-free) — toàn bộ đoàn đua chắc chắn có người về đích liên tục, bất kể ai đó bị vấp ngã hay bỏ cuộc giữa chừng; bậc cao nhất là "không chờ" (wait-free) — mỗi vận động viên đều được bảo đảm tự mình về đích sau đúng số bước chân hữu hạn được tính toán trước, không ai bị bỏ lại phía sau.

**Grammar & collocations:** `strata of the progress guarantee hierarchy` — các tầng của hệ phân cấp bảo đảm tiến trình; `situate within the progress guarantee hierarchy` — định vị trong hệ phân cấp bảo đảm tiến trình; `adhere to the progress guarantee hierarchy` — tuân thủ hệ phân cấp bảo đảm tiến trình.

**Register & nuance:** `formal concurrent algorithms theory (Herlihy & Shavit)` — thước đo tiêu chuẩn để đánh giá chất lượng học thuật và độ tin cậy thời gian thực (real-time predictability) của một thuật toán phân tán hoặc đồng thời.

**Examples:** `In the formal progress guarantee hierarchy, wait-free algorithms provide strict upper bounds on per-thread operation latency, whereas lock-free algorithms only guarantee aggregate system throughput.` → Trong hệ phân cấp bảo đảm tiến trình hình thức, các thuật toán không chờ cung cấp các giới hạn trên nghiêm ngặt về độ trễ thao tác của từng luồng, trong khi các thuật toán không khóa chỉ bảo đảm thông lượng tổng hợp của toàn hệ thống.

**Liên kết tiếng Hàn:** `진행 보장 계층 구조` (進行 保障 階層 構造) — thang phân loại lý thuyết sắp xếp các thuật toán đồng thời theo độ mạnh của cam kết tiến trình: từ không cản trở (obstruction-free), không khóa (lock-free) đến không chờ (wait-free).

---

## 12. wait-free consensus number /weɪt friː kənˈsɛn.səs ˈnʌm.bɚ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chỉ số năng lực đồng thuận tối đa của một đối tượng chia sẻ nguyên tử (ví dụ: `determine the wait-free consensus number`).

**Core meaning — English:** In Maurice Herlihy's consensus hierarchy, the maximum number of concurrent threads for which a given synchronization primitive can reliably solve the consensus problem in a wait-free manner.

**Core meaning & mental image — Tiếng Việt:** Chỉ số đồng thuận không chờ (consensus number); hãy hình dung một cuộc họp bỏ phiếu bầu trưởng đoàn: nếu bạn chỉ dùng cờ giơ tay đơn giản (read/write registers), bạn chỉ có thể giúp đúng 1 người ra quyết định mà không bao giờ đạt được đồng thuận nếu có từ 2 người trở lên tranh chấp (consensus number = 1); nếu bạn có chuông bấm ưu tiên (test-and-set), bạn giải quyết được cho 2 người (consensus number = 2); nhưng nếu bạn có một chiếc máy điện tử tối tân thực hiện CAS (compare-and-swap), chiếc máy này có thể giải quyết đồng thuận cho vô số luồng bất tận (consensus number = $\infty$).

**Grammar & collocations:** `infinite wait-free consensus number` — chỉ số đồng thuận không chờ vô hạn; `exceed the wait-free consensus number` — vượt quá chỉ số đồng thuận không chờ; `rank by wait-free consensus number` — xếp hạng theo chỉ số đồng thuận không chờ.

**Register & nuance:** `theoretical distributed computing & impossibility proofs` — định lý bất khả thi kinh điển của Herlihy; chứng minh toán học rằng không thể xây dựng cấu trúc dữ liệu wait-free tổng quát chỉ bằng atomic read/write hay fetch-and-add nếu không có các chỉ thị có consensus number vô hạn như CAS.

**Examples:** `Because the compare-and-swap primitive possesses an infinite wait-free consensus number, it can synthesize a universal wait-free implementation for any arbitrary deterministic concurrent object.` → Vì nguyên thủy compare-and-swap sở hữu chỉ số đồng thuận không chờ vô hạn, nó có thể tổng hợp một cài đặt không chờ phổ quát cho bất kỳ đối tượng đồng thời đơn định tùy ý nào.

**Liên kết tiếng Hàn:** `웨이트프리 합의 수` (wait-free 合意 數) — số lượng luồng tối đa mà một nguyên thủy đồng bộ hóa có thể giải quyết bài toán đồng thuận một cách không chờ theo hệ thống phân cấp Herlihy.

---

## 13. non-blocking algorithmic throughput /nɑːn ˈblɑː.kɪŋ ˌæl.ɡəˈrɪð.mɪk ˈθruː.pʊt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là thông lượng xử lý của thuật toán không chặn dưới tải song song (ví dụ: `maximize non-blocking algorithmic throughput`).

**Core meaning — English:** The aggregate operational capacity and transaction processing rate demonstrated by lock-free and wait-free algorithms, particularly as thread counts scale across multiple CPU sockets without mutual exclusion serial bottlenecks.

**Core meaning & mental image — Tiếng Việt:** Thông lượng thuật toán không chặn; hãy hình dung một nút giao thông xa lộ 8 làn xe: thay vì lắp trạm thu phí có barie nâng lên hạ xuống từng chiếc một (blocking bottleneck), người ta lắp hệ thống camera quét biển số tự động tốc độ cao (non-blocking); dù lưu lượng xe cộ tăng vọt từ 100 xe lên 10.000 xe mỗi phút, các phương tiện vẫn lướt qua với vận tốc tối đa, thông lượng tổng thể của tuyến đường tăng tuyến tính theo số làn mà không bị nghẽn tắc.

**Grammar & collocations:** `scale non-blocking algorithmic throughput` — mở rộng thông lượng thuật toán không chặn; `sustain high non-blocking algorithmic throughput` — duy trì thông lượng thuật toán không chặn cao; `measure non-blocking algorithmic throughput` — đo lường thông lượng thuật toán không chặn.

**Register & nuance:** `performance benchmarking & multicore scalability` — chỉ số cốt lõi để thuyết phục doanh nghiệp chuyển đổi từ cấu trúc dùng khóa (synchronized/mutex) sang các kiến trúc phi khóa; thông lượng này thể hiện ưu thế vượt trội khi số lượng lõi phần cứng tăng lên hàng trăm lõi.

**Examples:** `System architects verified that non-blocking algorithmic throughput scaled linearly up to 64 physical cores, whereas mutex-based queues collapsed past 8 cores due to lock convoys.` → Các kiến trúc sư hệ thống đã xác minh rằng thông lượng thuật toán không chặn tăng tỷ lệ thuận tuyến tính lên đến 64 lõi vật lý, trong khi các hàng đợi dùng mutex sụp đổ khi vượt quá 8 lõi do hiện tượng đoàn xe kẹt khóa.

**Liên kết tiếng Hàn:** `비차단 알고리즘 처리량` (非遮斷 algorithm 處理量) — tổng dung lượng vận hành và tốc độ xử lý giao dịch đạt được bởi các thuật toán không khóa khi số luồng mở rộng mà không bị tắc nghẽn tuần tự.

---

## 14. acquire-release semantics /əˈkwaɪ.ɚ rɪˈliːs sɪˈmæn.tɪks/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm mô hình trật tự bộ nhớ nguyên tử trong C++11 và Rust (ví dụ: `enforce acquire-release semantics`, `operate under acquire-release semantics`).

**Core meaning — English:** A relaxed memory consistency model where a load-acquire operation synchronizes with a store-release operation, guaranteeing that all memory writes preceding the release become visible to the acquiring thread without paying the heavy hardware penalty of full sequential consistency.

**Core meaning & mental image — Tiếng Việt:** Ngữ nghĩa chiếm giữ-giải phóng (acquire-release); hãy hình dung một nhân viên đưa thư giao một phong bì niêm phong cho người nhận: người gửi viết thư, cho vào bì và dán tem niêm phong (thao tác store-release); người nhận xé tem niêm phong và mở thư (thao tác load-acquire); khoảnh khắc người nhận mở phong bì (acquire), mọi dòng chữ người gửi đã viết trước khi niêm phong (release) bảo đảm hiển hiện rõ ràng trước mắt anh ta; hai bên đồng bộ hóa hoàn hảo với nhau mà không cần bắt cả bưu điện toàn thành phố phải ngừng hoạt động.

**Grammar & collocations:** `govern via acquire-release semantics` — chi phối thông qua ngữ nghĩa chiếm giữ-giải phóng; `establish acquire-release semantics` — thiết lập ngữ nghĩa chiếm giữ-giải phóng; `efficiency of acquire-release semantics` — hiệu quả của ngữ nghĩa chiếm giữ-giải phóng.

**Register & nuance:** `C++11/C23 memory model (std::memory_order_acquire, std::memory_order_release)` — mô hình trật tự chuẩn mực nhất cho hiệu năng cao; cung cấp bảo đảm nhân quả (causality) đầy đủ mà không cần phát sinh chỉ thị rào cản toàn phần đắt đỏ như `mfence` trên kiến trúc x86 hoặc ARM.

**Examples:** `By replacing sequential consistency with precise acquire-release semantics on the atomic node pointers, the developers achieved a 35% speedup on ARM64 servers.` → Bằng cách thay thế tính tuần tự nhất quán bằng ngữ nghĩa chiếm giữ-giải phóng chính xác trên các con trỏ nút nguyên tử, các nhà phát triển đã đạt được mức tăng tốc 35% trên các máy chủ ARM64.

**Liên kết tiếng Hàn:** `획득-해제 시맨틱` (獲得-解除 semantics) — mô hình nhất quán bộ nhớ nới lỏng trong đó thao tác nạp-chiếm giữ đồng bộ với thao tác lưu-giải phóng, bảo đảm dữ liệu ghi trước đó hiển thị đầy đủ mà không tốn chi phí rào cản toàn phần.

---

## 15. sequentially consistent ordering /sɪˈkwɛn.ʃəl.i kənˈsɪs.tənt ˈɔːr.dɚ.ɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là cấp độ trật tự bộ nhớ nguyên tử nghiêm ngặt nhất (ví dụ: `rely on sequentially consistent ordering`, `cost of sequentially consistent ordering`).

**Core meaning — English:** The strictest memory ordering model, formalized by Leslie Lamport, requiring that the execution of all threads produces the same result as if all memory operations were executed in a single, globally visible sequential order preserving each thread's program order.

**Core meaning & mental image — Tiếng Việt:** Trật tự nhất quán tuần tự; hãy hình dung một cuốn nhật ký chung duy nhất của cả gia đình: bất kỳ ai làm việc gì (đọc sách, rửa bát, đi chợ) đều phải đến ghi vào một trang nhật ký theo đúng thứ tự thời gian vũ trụ tuyệt đối; mọi thành viên trong nhà khi nhìn vào cuốn sổ đều thấy một trình tự các sự kiện giống hệt nhau 100%, không ai có thể thấy sự kiện B xảy ra trước sự kiện A nếu A đã được ghi trước; mô hình này đơn giản nhất cho tư duy con người nhưng đòi hỏi CPU phải phát các chỉ thị khóa rào cản rất tốn kém.

**Grammar & collocations:** `impose sequentially consistent ordering` — áp đặt trật tự nhất quán tuần tự; `violations of sequentially consistent ordering` — các vi phạm trật tự nhất quán tuần tự; `default to sequentially consistent ordering` — mặc định dùng trật tự nhất quán tuần tự.

**Register & nuance:** `foundational memory models (Lamport 1979, std::memory_order_seq_cst)` — chế độ mặc định an toàn tuyệt đối của biến atomic trong C++ và Java; thường được khuyến nghị khi mới viết thuật toán để tránh lỗi tinh vi, sau đó mới tối ưu xuống acquire-release khi cần tối đa hóa hiệu năng.

**Examples:** `Although sequentially consistent ordering simplifies formal reasoning about concurrent invariants, its full memory fences introduce severe pipeline stalls on weakly ordered processors.` → Mặc dù trật tự nhất quán tuần tự đơn giản hóa việc suy luận hình thức về các bất biến đồng thời, các rào cản bộ nhớ toàn phần của nó tạo ra sự đình trệ đường ống nghiêm trọng trên các bộ xử lý có trật tự yếu.

**Liên kết tiếng Hàn:** `순차적 일관성 순서화` (順次的 一貫性 順序化) — mô hình trật tự bộ nhớ nghiêm ngặt nhất bảo đảm mọi thao tác trên tất cả các luồng xuất hiện theo một trật tự tuần tự duy nhất toàn cục được quan sát giống nhau bởi mọi luồng.

---

## 16. tagged pointer generation /tæɡd ˈpɔɪn.t̬ɚ ˌdʒɛn.əˈreɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm phương pháp đóng gói số hiệu phiên bản vào con trỏ bộ nhớ (ví dụ: `embed a tagged pointer generation`, `increment the tagged pointer generation`).

**Core meaning — English:** A technique where an integer counter or generation tag is packed alongside a memory address into a single word or double-word atomic variable, incrementing on each mutation to defeat ABA address re-aliasing.

**Core meaning & mental image — Tiếng Việt:** Số hiệu thế hệ con trỏ gắn thẻ; hãy hình dung một chiếc vé xe buýt: thay vì chỉ in tên trạm đón (địa chỉ vùng nhớ), nhà xe in thêm một con số quay vòng: vé số 1 trạm A, vé số 2 trạm A, vé số 3 trạm A; dù xe buýt có quay lại đúng trạm A mười lần trong ngày, số hiệu thế hệ trên vé luôn khác biệt hoàn toàn; người soát vé chỉ cần nhìn số hiệu thế hệ là biết ngay đây là chuyến xe mới chứ không phải chuyến xe cũ quay lại, loại trừ 100% sự nhầm lẫn.

**Grammar & collocations:** `encode a tagged pointer generation` — mã hóa số hiệu thế hệ con trỏ gắn thẻ; `extract the tagged pointer generation` — trích xuất số hiệu thế hệ con trỏ gắn thẻ; `pack with tagged pointer generation` — đóng gói cùng số hiệu thế hệ con trỏ gắn thẻ.

**Register & nuance:** `low-level bit manipulation & double-width CAS (DWCAS)` — thường tận dụng các bit chưa dùng (unused upper bits) trong con trỏ 64-bit hoặc sử dụng chỉ thị CAS 128-bit (`cmpxchg16b` trên x86_64) để cập nhật đồng thời cả con trỏ và bộ đếm thế hệ.

**Examples:** `By packing a 16-bit tagged pointer generation into the unused high-order bits of the 64-bit address, the queue node successfully neutralized the classic ABA hazards.` → Bằng cách đóng gói số hiệu thế hệ con trỏ gắn thẻ 16-bit vào các bit bậc cao chưa dùng của địa chỉ 64-bit, nút hàng đợi đã vô hiệu hóa thành công các rủi ro ABA kinh điển.

**Liên kết tiếng Hàn:** `태그된 포인터 세대` (tagged pointer 世代) — kỹ thuật nhúng bộ đếm số thế hệ cùng địa chỉ bộ nhớ vào một biến nguyên tử để ngăn chặn sự trùng lặp địa chỉ trong vấn đề ABA.

---

## 17. thread-local retirement list /θrɛd ˈloʊ.kəl rɪˈtaɪ.ɚ.mənt lɪst/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là danh sách vùng nhớ riêng của từng luồng lưu các nút chuẩn bị giải phóng (ví dụ: `append to the thread-local retirement list`, `flush the thread-local retirement list`).

**Core meaning — English:** A per-thread buffer that temporarily accumulates retired memory nodes unlinked from a shared concurrent structure, deferring deallocation until a batch scan confirms they are globally unreachable.

**Core meaning & mental image — Tiếng Việt:** Danh sách nghỉ hưu cục bộ của luồng; hãy hình dung một thợ mộc trong xưởng làm việc có một chiếc giỏ đựng phế liệu riêng bên cạnh bàn của mình: khi anh ta thay một chiếc ốc vít hay thanh gỗ cũ trên bàn làm việc chung, anh ta không chạy ngay ra bãi rác ngoài trời (tránh tranh chấp và tốn thời gian); anh ta bỏ tạm món đồ cũ vào giỏ riêng của mình; đến cuối ngày khi giỏ đầy, anh ta mới kiểm tra một lượt và mang toàn bộ phế liệu đi đổ một mẻ lớn an toàn và tiện lợi.

**Grammar & collocations:** `populate a thread-local retirement list` — lấp đầy danh sách nghỉ hưu cục bộ của luồng; `drain the thread-local retirement list` — làm rỗng danh sách nghỉ hưu cục bộ của luồng; `thread-local retirement list threshold` — ngưỡng của danh sách nghỉ hưu cục bộ của luồng.

**Register & nuance:** `memory management efficiency in SMR frameworks` — giảm thiểu tối đa hiện tượng tranh chấp bộ nhớ bằng cách batching (xử lý theo lô); thay vì gọi hàm `free()` tốn kém liên tục, luồng gom góp các nút và chỉ quét bảng con trỏ rủi ro khi số nút trong danh sách vượt quá ngưỡng quy định.

**Examples:** `When the thread-local retirement list accumulated more than 64 retired nodes, the worker initiated a batch scan against all registered hazard pointers to reclaim safe memory.` → Khi danh sách nghỉ hưu cục bộ của luồng tích lũy hơn 64 nút đã nghỉ hưu, luồng công nhân đã khởi tạo một đợt quét theo lô đối chiếu với mọi con trỏ rủi ro đã đăng ký để thu hồi bộ nhớ an toàn.

**Liên kết tiếng Hàn:** `스레드 로컬 퇴역 목록` (thread local 退役 目錄) — bộ đệm riêng của từng luồng tích lũy các nút đã tách khỏi cấu trúc dữ liệu chia sẻ để trì hoãn giải phóng theo mẻ lớn khi an toàn.

---

## 18. optimistic concurrent traversal /ˌɑːp.təˈmɪs.tɪk kənˈkɝː.ənt trəˈvɝː.səl/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm phương pháp duyệt cây hoặc danh sách liên kết mà không cần đặt khóa bảo vệ trên đường đi (ví dụ: `perform optimistic concurrent traversal`).

**Core meaning — English:** An algorithm where reader threads traverse shared pointer-linked structures without locking intervening nodes, validating post-traversal invariants to detect whether concurrent modifications corrupted the path.

**Core meaning & mental image — Tiếng Việt:** Duyệt đồng thời lạc quan; hãy hình dung một người chạy bộ băng qua một lối mòn trong rừng vào ban đêm: thay vì dừng lại ở từng gốc cây để cắm chốt bảo vệ hay rào đường (pessimistic locking), anh ta cứ tự tin chạy nhanh hết tốc lực theo con đường (lạc quan); khi tới đích, anh ta liếc nhìn lại tấm bản đồ số trên cổ tay để xác nhận rằng cây cầu mình vừa chạy qua chưa bị sập hoặc con đường không bị nắn tuyến giữa chừng; nếu lộ trình hợp lệ, công việc hoàn tất; nếu phát hiện bất thường, anh ta chỉ việc quay lại vạch xuất phát chạy lại từ đầu.

**Grammar & collocations:** `execute optimistic concurrent traversal` — thực thi việc duyệt đồng thời lạc quan; `validate an optimistic concurrent traversal` — xác thực việc duyệt đồng thời lạc quan; `optimistic concurrent traversal algorithm` — thuật toán duyệt đồng thời lạc quan.

**Register & nuance:** `high-performance search trees & skip lists` — nền tảng cho các cấu trúc dữ liệu phân cấp như B-link trees, Masstree và skiplists; loại bỏ hoàn toàn hiện tượng nghẽn nút thắt cổ chai ở các nút gốc (root nodes) nơi mọi luồng đều phải đi qua.

**Examples:** `The lock-free binary search tree achieves unmatched read throughput by allowing optimistic concurrent traversal down to the leaf level without acquiring a single read lock.` → Cây tìm kiếm nhị phân không khóa đạt được thông lượng đọc vô song bằng cách cho phép duyệt đồng thời lạc quan xuống tận cấp lá mà không cần chiếm dụng bất kỳ khóa đọc nào.

**Liên kết tiếng Hàn:** `낙관적 동시 순회` (樂觀的 同時 巡廻) — thuật toán duyệt cấu trúc dữ liệu liên kết mà không cần khóa trên đường đi, sau đó kiểm tra tính hợp lệ ở đích để phát hiện can thiệp đồng thời.

---

## 19. atomic marked reference /əˈtɑː.mɪk mɑːrkt ˈrɛf.ɚ.əns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là con trỏ nguyên tử chứa cờ đánh dấu trạng thái logic của nút (ví dụ: `update an atomic marked reference`, `inspect the atomic marked reference`).

**Core meaning — English:** An atomic data abstraction that couples an object reference with a boolean flag, commonly used in lock-free linked lists (like Timothy Harris's algorithm) to logically delete a node before physically unlinking it.

**Core meaning & mental image — Tiếng Việt:** Tham chiếu đánh dấu nguyên tử; hãy hình dung một hàng cây xanh bên lề đường: công nhân môi trường muốn chặt bỏ một cây khô (xóa vật lý); nếu đốn cây ngay lập tức, người đi đường có thể va phải cành cây đang rơi; thay vào đó, người công nhân dùng bình sơn xịt một dấu chữ thập đỏ lên thân cây (đánh dấu logic bằng cờ boolean); bất kỳ ai nhìn thấy cây có chữ thập đỏ sẽ biết ngay nó đã bị loại bỏ và không được dựa vào, sau đó đội máy xúc mới tiến hành bứng gốc cây đi một cách an toàn và nhịp nhàng.

**Grammar & collocations:** `manipulate an atomic marked reference` — thao tác một tham chiếu đánh dấu nguyên tử; `state of an atomic marked reference` — trạng thái của một tham chiếu đánh dấu nguyên tử; `logical deletion via atomic marked reference` — xóa logic thông qua tham chiếu đánh dấu nguyên tử.

**Register & nuance:** `Harris lock-free linked list paradigm` — giải quyết bài toán nan giải: làm thế nào để xóa một nút mà không làm hỏng thao tác chèn nút của luồng khác vào ngay bên cạnh; việc đánh dấu logic biến thao tác xóa thành hai giai đoạn độc lập được bảo vệ bằng CAS.

**Examples:** `Timothy Harris introduced the atomic marked reference to split node deletion into a logical marking step followed by a cooperative physical removal.` → Timothy Harris đã giới thiệu tham chiếu đánh dấu nguyên tử để chia việc xóa nút thành bước đánh dấu logic tiếp theo sau là việc gỡ bỏ vật lý có tính hợp tác.

**Liên kết tiếng Hàn:** `원자적 표시 참조` (原子的 表示 參照) — cấu trúc trừu tượng nguyên tử kết hợp con trỏ bộ nhớ với một cờ boolean để đánh dấu xóa logic một nút trước khi ngắt liên kết vật lý.

---

## 20. false sharing cache contention /fɔːls ˈʃɛr.ɪŋ kæʃ kənˈtɛn.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm nguyên nhân gây suy giảm hiệu năng bộ đệm CPU trong hệ thống đa luồng (ví dụ: `mitigate false sharing cache contention`).

**Core meaning — English:** A severe hardware performance degradation occurring when multiple processor cores modify completely independent variables that happen to reside within the same physical cache line (typically 64 bytes), triggering continuous and unnecessary cache line invalidations.

**Core meaning & mental image — Tiếng Việt:** Tranh chấp bộ đệm do chia sẻ giả mạo; hãy hình dung hai người bạn ngồi chung trên một chiếc ghế đôi dài 64cm nhưng mỗi người viết một cuốn sổ hoàn toàn riêng biệt: mỗi lần người bên trái cử động tay để viết một chữ, cả chiếc ghế bị rung lắc mạnh khiến người bên phải bị giật mình, phải tẩy xóa và viết lại từ đầu; dù hai người không hề dùng chung sổ hay bút (biến độc lập), việc ngồi chung trên cùng một chiếc ghế (chung đường bộ đệm 64-byte) khiến cả hai làm việc chậm chạp một cách vô lý.

**Grammar & collocations:** `suffer from false sharing cache contention` — chịu tổn thất do tranh chấp bộ đệm do chia sẻ giả mạo; `eliminate false sharing cache contention` — loại bỏ tranh chấp bộ đệm do chia sẻ giả mạo; `align to avoid false sharing cache contention` — căn chỉnh bộ nhớ để tránh tranh chấp bộ đệm do chia sẻ giả mạo.

**Register & nuance:** `computer architecture & cache coherence protocols (MESI/MOESI)` — kẻ giết chết hiệu năng thầm lặng nhất trong hệ thống đa lõi; giải pháp duy nhất là sử dụng đệm lót (padding) hoặc chỉ thị căn chỉnh cấu trúc dữ liệu (`alignas(64)`).

**Examples:** `Engineers padded each worker's head and tail pointers to 64 bytes, completely eliminating false sharing cache contention between adjacent processor cores.` → Các kỹ sư đã đệm các con trỏ đầu và đuôi của mỗi công nhân lên 64 byte, loại bỏ hoàn toàn sự tranh chấp bộ đệm do chia sẻ giả mạo giữa các lõi bộ xử lý liền kề.

**Liên kết tiếng Hàn:** `거짓 공유 캐시 경합` (거짓 共有 cache 競合) — hiện tượng suy giảm hiệu năng phần cứng nghiêm trọng khi các lõi CPU sửa đổi các biến độc lập nằm chung trên một đường bộ đệm dẫn đến việc vô hiệu hóa bộ đệm liên tục.

---

## 21. lock-free elimination array /lɑːk friː ɪˌlɪm.əˈneɪ.ʃən əˈreɪ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là cấu trúc mảng cho phép các thao tác đối nghịch tự triệt tiêu lẫn nhau (ví dụ: `implement a lock-free elimination array`).

**Core meaning — English:** A backoff structure where concurrent threads attempting complementary operations (such as push and pop on a stack) pair up directly within an array to exchange data without ever accessing the contended central data structure.

**Core meaning & mental image — Tiếng Việt:** Mảng triệt tiêu không khóa; hãy hình dung cửa hàng đổi tiền tại sân bay: 100 người muốn đổi đô la sang euro, và 100 người muốn đổi euro sang đô la: nếu tất cả 200 người đều chen lấn vào duy nhất một quầy thủ quỹ ở giữa sảnh (đỉnh ngăn xếp), cả sảnh sẽ vỡ trận vì giẫm đạp; người ta đặt một dãy các bàn gặp gỡ tự do ở ngoài sảnh (mảng triệt tiêu): một người muốn mua đô la gặp ngay một người muốn bán đô la ở một bàn ngẫu nhiên, hai người tự trao đổi tiền cho nhau rồi cùng ra về; quầy thủ quỹ trung tâm được giải phóng hoàn toàn áp lực.

**Grammar & collocations:** `rendezvous via lock-free elimination array` — hẹn gặp thông qua mảng triệt tiêu không khóa; `throughput of lock-free elimination array` — thông lượng của mảng triệt tiêu không khóa; `size a lock-free elimination array` — định kích thước cho mảng triệt tiêu không khóa.

**Register & nuance:** `scalability enhancement for concurrent stacks (Hendler et al.)` — biến một ngăn xếp LIFO từ một cấu trúc vốn có tính tuần tự cố hữu (mọi thao tác đều tranh chấp con trỏ đỉnh `top`) thành một hệ thống có khả năng mở rộng thông lượng song song cực lớn.

**Examples:** `By routing colliding push and pop requests through a lock-free elimination array, the concurrent stack achieved near-linear scaling under extreme multi-threaded workloads.` → Bằng cách định tuyến các yêu cầu push và pop xung đột qua một mảng triệt tiêu không khóa, ngăn xếp đồng thời đã đạt được mức mở rộng gần như tuyến tính dưới các khối lượng công việc đa luồng khắc nghiệt.

**Liên kết tiếng Hàn:** `락프리 제거 배열` (lock-free 除去 配列) — cấu trúc mảng dự phòng nơi các thao tác bổ trợ lẫn nhau như đẩy vào và lấy ra tự ghép đôi để trao đổi dữ liệu mà không cần chạm vào đỉnh ngăn xếp trung tâm.

---

## 22. hazard pointer thread registration /ˈhæz.ɚd ˈpɔɪn.t̬ɚ θrɛd ˌrɛdʒ.əˈstreɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm quy trình đăng ký danh tính luồng với phân hệ bảo vệ con trỏ rủi ro (ví dụ: `perform hazard pointer thread registration`).

**Core meaning — English:** The initialization handshake wherein a newly spawned worker thread claims an entry slot in the global hazard domain to broadcast its protected pointer slots to all concurrent peers.

**Core meaning & mental image — Tiếng Việt:** Đăng ký luồng con trỏ rủi ro; hãy hình dung một người thợ lặn mới gia nhập đội thám hiểm biển sâu: trước khi nhảy xuống nước, anh ta phải đến bàn chỉ huy ký tên vào sổ điểm danh và nhận một chiếc bộ đàm có kênh tần số riêng (đăng ký luồng); từ lúc này, mọi thợ lặn khác và tàu mẹ đều biết sự hiện diện của anh ta và liên tục theo dõi vị trí anh ta để không bao giờ vô tình kích hoạt lưới nổ mìn ngầm trong khu vực anh ta đang lặn.

**Grammar & collocations:** `execute hazard pointer thread registration` — thực thi việc đăng ký luồng con trỏ rủi ro; `automate hazard pointer thread registration` — tự động hóa việc đăng ký luồng con trỏ rủi ro; `overhead of hazard pointer thread registration` — chi phí của việc đăng ký luồng con trỏ rủi ro.

**Register & nuance:** `lifecycle management in hazard pointer libraries (libcds, Folly)` — thường được trừu tượng hóa bằng biến lưu trữ cục bộ của luồng (thread_local variable) theo mẫu thiết kế RAII để tự động đăng ký khi khởi tạo luồng và tự động hủy đăng ký khi luồng thoát.

**Examples:** `Thread pools perform hazard pointer thread registration upon worker initialization, allocating dedicated hazard slots that persist across millions of dispatched tasks.` → Các nhóm luồng thực hiện đăng ký luồng con trỏ rủi ro khi khởi tạo công nhân, cấp phát các khe rủi ro chuyên dụng tồn tại qua hàng triệu tác vụ được điều phối.

**Liên kết tiếng Hàn:** `해저드 포인터 스레드 등록` (hazard pointer thread 登錄) — quy trình khởi tạo trong đó một luồng công nhân mới đăng ký một vị trí trong miền rủi ro toàn cục để thông báo các con trỏ được bảo vệ cho các luồng khác.

---

## 23. quiescent state epoch advance /kwiˈɛs.ənt steɪt ˈɛp.ək ədˈvæns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là sự nhảy bậc kỷ nguyên toàn cục sau khi tất cả các luồng đã đồng bộ (ví dụ: `trigger a quiescent state epoch advance`).

**Core meaning — English:** The atomic transition incrementing the global epoch counter once all registered threads have reported completion of their active critical sections, enabling the batched destruction of obsolete memory bags.

**Core meaning & mental image — Tiếng Việt:** Tiến bước kỷ nguyên trạng thái tĩnh; hãy hình dung chiếc đồng hồ cát khổng lồ kiểm soát cổng thành: người gác cổng chỉ được phép lật ngược chiếc đồng hồ cát sang chu kỳ tiếp theo (kỷ nguyên e tăng lên e+1) khi toàn bộ các đoàn thương buôn của phiên chợ trước đã hoàn toàn rời khỏi thành; khoảnh khắc đồng hồ cát lật ngược chính là tín hiệu cho phép binh lính dọn sạch toàn bộ rác rưởi của phiên chợ cũ mà không sợ làm hư hại hàng hóa của bất kỳ ai.

**Grammar & collocations:** `orchestrate a quiescent state epoch advance` — điều phối tiến bước kỷ nguyên trạng thái tĩnh; `monitor quiescent state epoch advance` — giám sát tiến bước kỷ nguyên trạng thái tĩnh; `quiescent state epoch advance frequency` — tần suất tiến bước kỷ nguyên trạng thái tĩnh.

**Register & nuance:** `epoch-based memory managers (URCU, Crossbeam-epoch)` — khoảnh khắc then chốt giải phóng bộ nhớ tồn đọng; tần suất tiến bước kỷ nguyên phải được cân đối: tiến bước quá nhanh sẽ tốn chi phí kiểm tra nguyên tử, tiến bước quá chậm sẽ làm phình to dung lượng bộ nhớ chờ thu hồi.

**Examples:** `Once every worker thread acknowledged crossing the grace period boundary, the coordinator triggered a quiescent state epoch advance, deallocating hundreds of retired nodes simultaneously.` → Khi mọi luồng công nhân xác nhận đã vượt qua ranh giới thời gian ân hạn, bộ điều phối đã kích hoạt việc tiến bước kỷ nguyên trạng thái tĩnh, giải phóng đồng thời hàng trăm nút đã nghỉ hưu.

**Liên kết tiếng Hàn:** `정지 상태 에포크 전진` (靜止 狀態 epoch 前進) — sự chuyển đổi nguyên tử tăng bộ đếm kỷ nguyên toàn cục khi tất cả các luồng đã báo cáo hoàn thành đoạn găng, cho phép giải phóng theo lô bộ nhớ cũ.

---

## 24. lock-free memory deallocation hazard /lɑːk friː ˈmɛm.ɚ.i diːˌæl.əˈkeɪ.ʃən ˈhæz.ɚd/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm hiểm họa giải phóng bộ nhớ sớm gây sụp đổ chương trình không khóa (ví dụ: `eliminate lock-free memory deallocation hazard`).

**Core meaning — English:** The perilous concurrency fault where dynamically allocated memory is freed prematurely while concurrent threads are still actively reading its fields or executing atomic operations on its internal pointers.

**Core meaning & mental image — Tiếng Việt:** Hiểm họa giải phóng bộ nhớ không khóa; hãy hình dung bạn đang đứng đọc một cuốn sách đặt trên một chiếc bục gỗ: bỗng nhiên một người dọn dẹp chạy tới giật phắt chiếc bục gỗ mang đi cất (giải phóng vùng nhớ); bạn mất thăng bằng ngã nhào xuống đất (segmentation fault) và bàn tay bạn quờ quạng vào khoảng không vô định (dangling pointer reference); trong hệ thống đa luồng, hiểm họa này xảy ra khi một luồng xóa nút và gọi hàm giải phóng bộ nhớ trong khi một luồng khác chỉ chậm hơn vài nano giây vẫn đang đọc nội dung của nút đó.

**Grammar & collocations:** `guard against lock-free memory deallocation hazard` — phòng vệ trước hiểm họa giải phóng bộ nhớ không khóa; `vulnerability to lock-free memory deallocation hazard` — tính dễ bị tổn thương trước hiểm họa giải phóng bộ nhớ không khóa; `prevent lock-free memory deallocation hazard` — ngăn ngừa hiểm họa giải phóng bộ nhớ không khóa.

**Register & nuance:** `concurrency vulnerability & low-level memory safety` — nguyên nhân gốc rễ dẫn đến sự ra đời của toàn bộ lĩnh vực Safe Memory Reclamation (SMR); phân biệt với rò rỉ bộ nhớ (memory leak) vì đây là giải phóng quá sớm (premature free), gây ra lỗi nghiêm trọng hơn gấp bội.

**Examples:** `Careless pointer reclamation without synchronization exposes the engine to the severe lock-free memory deallocation hazard, leading to unpredictable crashes and data corruption.` → Việc thu hồi con trỏ bất cẩn mà không có đồng bộ hóa đẩy động cơ vào hiểm họa giải phóng bộ nhớ không khóa nghiêm trọng, dẫn đến các vụ sụp đổ không thể dự đoán và làm hỏng dữ liệu.

**Liên kết tiếng Hàn:** `락프리 메모리 해제 위험` (lock-free memory 解除 危險) — lỗi đồng thời nguy hiểm khi vùng nhớ được cấp phát bị giải phóng sớm trong khi các luồng khác vẫn đang tích cực đọc hoặc thực hiện thao tác trên con trỏ của nó.

---

## 25. lock-free dual stack /lɑːk friː ˈduː.əl stæk/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là cấu trúc ngăn xếp kép phối hợp cả dữ liệu và yêu cầu chờ đồng thời (ví dụ: `construct a lock-free dual stack`).

**Core meaning — English:** A symmetric non-blocking concurrent data structure that holds either pending data items or waiting consumer reservation requests, allowing producers and consumers to fulfill each other's operations directly via atomic pointer swaps.

**Core meaning & mental image — Tiếng Việt:** Ngăn xếp kép không khóa; hãy hình dung một chiếc hộp kỳ diệu tại bến tàu: nếu có người đem kiện hàng tới mà chưa có tàu nhận (thừa hàng), kiện hàng được xếp vào ngăn xếp; nếu có tàu tới nhận hàng mà trong kho chưa có hàng (thừa nhu cầu), người thuyền trưởng sẽ đặt một tấm phiếu đặt chỗ vào ngăn xếp; khi một đối tác mang thứ đối ứng tới, hai bên lập tức bắt cặp trao đổi trực tiếp và rút khỏi ngăn xếp; chiếc hộp này không bao giờ chứa lẫn lộn cả hàng và phiếu cùng lúc, mà luôn tự cân bằng một cách hoàn hảo và không bao giờ bị nghẽn tắc.

**Grammar & collocations:** `operate a lock-free dual stack` — vận hành một ngăn xếp kép không khóa; `invariants of a lock-free dual stack` — các bất biến của một ngăn xếp kép không khóa; `lock-free dual stack performance` — hiệu năng của ngăn xếp kép không khóa.

**Register & nuance:** `advanced concurrent algorithmic structures (Scherer, Lea, & Scott)` — cấu trúc nền tảng cho `SynchronousQueue` trong Java Concurrency Utilities; cung cấp cơ chế chuyển giao dữ liệu trực tiếp điểm-điểm (rendezvous handoff) giữa các luồng với độ trễ cực thấp.

**Examples:** `The high-performance message broker employs a lock-free dual stack to match incoming publisher payloads directly with suspended subscriber requests without intermediary locking.` → Trình môi giới thông điệp hiệu năng cao sử dụng một ngăn xếp kép không khóa để khớp trực tiếp tải trọng của bên xuất bản với các yêu cầu đang chờ của bên đăng ký mà không cần cơ chế khóa trung gian.

**Liên kết tiếng Hàn:** `락프리 듀얼 스택` (lock-free dual stack) — cấu trúc dữ liệu đồng thời phi khóa đối xứng chứa hoặc là dữ liệu hoặc là các yêu cầu chờ, cho phép bên sản xuất và bên tiêu thụ hoàn thành thao tác của nhau trực tiếp thông qua hoán đổi con trỏ nguyên tử.

---

## Review in context (Part 1: Linearizability, Reclamation, and Primitives)

Building resilient high-throughput infrastructure demands an uncompromising mastery over concurrent synchronization primitives. When architecting concurrent containers, engineers strive to prove **lock-free linearizability**, guaranteeing that all mutations execute at well-defined temporal boundaries while preserving system-wide progress. Rather than halting competing workers with mutual exclusion locks, threads update shared node state by spinning inside a tightly calibrated **compare-and-swap loop**. To prevent stale pointer addresses from masking concurrent structural modifications, the engine incorporates sophisticated **ABA problem mitigation**, validating generation stamps before accepting an exchange. Because unmanaged runtimes lack built-in garbage collection, they must rely on explicit **safe memory reclamation** to avert disastrous dangling pointer references. Under the hazard pointer paradigm, every thread publishes active traversal targets into a global **hazard pointer table**, blocking deallocation until readers release their claims. Alternatively, systems seeking lower read overhead adopt **epoch-based quiescent reclamation**, grouping operations into distinct temporal intervals. The background reclamation coordinator conducts periodic **quiescent state detection**, confirming that all active cores have exited sensitive traversal regions. For FIFO ordering, developers frequently deploy the canonical **Michael-Scott queue**, relying on auxiliary helping logic to advance dangling tails. On modern relaxed processors, architects must enforce explicit **memory barrier instruction ordering** to keep out-of-order execution units from exposing uninitialized payloads. In read-heavy scenarios, operating systems often choose **read-copy-update synchronization**, permitting readers to traverse shared routing tables with zero atomic locking penalties. These designs sit across well-defined boundaries in the theoretical **progress guarantee hierarchy**, spanning from obstruction-freedom to wait-freedom. Finally, when evaluating the absolute synchronization power of hardware primitives, theorists classify operations by their **wait-free consensus number**, proving that CAS can solve consensus across an arbitrary number of concurrent threads.

**Bản dịch tiếng Việt:**

Xây dựng cơ sở hạ tầng thông lượng cao kiên cường đòi hỏi sự làm chủ tuyệt đối đối với các nguyên thủy đồng bộ hóa đồng thời. Khi kiến trúc các vùng chứa đồng thời, các kỹ sư phấn đấu chứng minh **lock-free linearizability**, bảo đảm rằng mọi biến đổi đều thực thi tại các ranh giới thời gian được xác định rõ ràng trong khi bảo tồn tiến trình của toàn hệ thống. Thay vì làm dừng các luồng công nhân cạnh tranh bằng các khóa loại trừ lẫn nhau, các luồng cập nhật trạng thái nút chia sẻ bằng cách quay vòng bên trong một **compare-and-swap loop** được hiệu chỉnh chặt chẽ. Để ngăn các địa chỉ con trỏ cũ che giấu các sửa đổi cấu trúc đồng thời, động cơ kết hợp sự **ABA problem mitigation** tinh vi, xác thực các con dấu thế hệ trước khi chấp nhận một sự hoán đổi. Vì các môi trường thời gian chạy không được quản lý thiếu tính năng thu gom rác tích hợp, chúng phải dựa vào cơ chế **safe memory reclamation** rõ ràng để ngăn chặn các tham chiếu con trỏ lơ lửng thảm khốc. Dưới mô thức con trỏ rủi ro, mọi luồng công bố các mục tiêu duyệt tích cực vào một **hazard pointer table** toàn cục, ngăn chặn việc giải phóng cho đến khi các luồng đọc từ bỏ yêu cầu của mình. Ngoài ra, các hệ thống tìm kiếm chi phí đọc thấp hơn sẽ áp dụng cơ chế **epoch-based quiescent reclamation**, nhóm các thao tác vào các khoảng thời gian riêng biệt. Bộ điều phối thu hồi nền thực hiện việc **quiescent state detection** định kỳ, xác nhận rằng tất cả các lõi tích cực đã thoát khỏi các vùng duyệt nhạy cảm. Đối với trật tự FIFO, các nhà phát triển thường xuyên triển khai **Michael-Scott queue** chuẩn mực, dựa vào logic trợ giúp bổ trợ để đẩy các đuôi lơ lửng về phía trước. Trên các bộ xử lý nới lỏng hiện đại, các kiến trúc sư phải áp đặt **memory barrier instruction ordering** rõ ràng để ngăn các đơn vị thực thi ngoài trật tự để lộ tải trọng chưa khởi tạo. Trong các kịch bản đọc nhiều, các hệ điều hành thường chọn **read-copy-update synchronization**, cho phép các luồng đọc duyệt các bảng định tuyến chia sẻ với chi phí khóa nguyên tử bằng không. Các thiết kế này nằm trên các ranh giới được xác định rõ ràng trong **progress guarantee hierarchy** lý thuyết, trải dài từ miễn cản trở đến không chờ. Cuối cùng, khi đánh giá sức mạnh đồng bộ hóa tuyệt đối của các nguyên thủy phần cứng, các nhà lý thuyết phân loại các thao tác theo **wait-free consensus number** của chúng, chứng minh rằng CAS có thể giải quyết bài toán đồng thuận trên một số lượng luồng đồng thời tùy ý.

---

## Review in context (Part 2: Hardware Semantics, Memory Hazards, and Scalability)

Maximizing the performance of multi-threaded services requires aligning software algorithms directly with processor memory architectures. When optimizing database indexes across dense multicore nodes, engineers benchmark **non-blocking algorithmic throughput**, observing how elimination techniques remove central serialization bottlenecks. Rather than burdening the hardware with excessive fences, modern runtimes utilize **acquire-release semantics**, establishing causal synchronization between producer releases and consumer loads. In contrast, while **sequentially consistent ordering** provides an intuitive global execution sequence, it incurs substantial hardware pipeline stalls. To maintain pointer uniqueness without allocating external metadata, engineers embed a **tagged pointer generation** directly into spare address bits. Decommissioned memory nodes are queued within a **thread-local retirement list**, postponing deallocation passes until batched thresholds are reached. Traversals avoid locking overhead entirely through **optimistic concurrent traversal**, verifying path integrity after reading node contents. In concurrent linked lists, splitting physical removal from logical marking is accomplished by updating an **atomic marked reference**. When placing thread-local counters on identical cache lines, developers use padding to eliminate **false sharing cache contention**, stopping cores from invalidating each other's caches. To achieve infinite scalability on contended stacks, threads rendezvous inside a **lock-free elimination array**, exchanging complementary push and pop arguments directly. Thread lifecycle coordination begins with **hazard pointer thread registration**, reserving slots in shared domains to advertise protected targets. When epoch managers verify quiescent states across all participating workers, they advance the system via a **quiescent state epoch advance**, triggering safe reclamation of pending batches. Without these rigorous protocols, applications inevitably succumb to the fatal **lock-free memory deallocation hazard**, corrupting internal structures. For balanced producer-consumer handoffs, architectures deploy a **lock-free dual stack**, pairing incoming payloads with waiting reservations instantly.

**Bản dịch tiếng Việt:**

Tối đa hóa hiệu năng của các dịch vụ đa luồng đòi hỏi phải căn chỉnh các thuật toán phần mềm trực tiếp với các kiến trúc bộ nhớ của bộ xử lý. Khi tối ưu hóa các chỉ mục cơ sở dữ liệu trên các nút đa lõi dày đặc, các kỹ sư đánh giá chuẩn **non-blocking algorithmic throughput**, quan sát cách các kỹ thuật triệt tiêu loại bỏ các nút thắt tuần tự hóa trung tâm. Thay vì tạo gánh nặng cho phần cứng bằng các rào cản quá mức, các môi trường thời gian chạy hiện đại sử dụng **acquire-release semantics**, thiết lập sự đồng bộ hóa nhân quả giữa các thao tác release của bên sản xuất và các thao tác acquire của bên tiêu thụ. Ngược lại, mặc dù **sequentially consistent ordering** cung cấp một chuỗi thực thi toàn cục trực quan, nó phải chịu sự đình trệ đường ống phần cứng đáng kể. Để duy trì tính duy nhất của con trỏ mà không cần cấp phát siêu dữ liệu bên ngoài, các kỹ sư nhúng một **tagged pointer generation** trực tiếp vào các bit địa chỉ dự phòng. Các nút bộ nhớ ngừng hoạt động được xếp hàng bên trong một **thread-local retirement list**, trì hoãn các lượt giải phóng cho đến khi đạt được các ngưỡng theo lô. Các lượt duyệt tránh hoàn toàn chi phí khóa thông qua việc **optimistic concurrent traversal**, xác minh tính toàn vẹn của đường đi sau khi đọc nội dung nút. Trong các danh sách liên kết đồng thời, việc tách biệt việc gỡ bỏ vật lý khỏi việc đánh dấu logic được thực hiện bằng cách cập nhật một **atomic marked reference**. Khi đặt các bộ đếm cục bộ của luồng trên các đường bộ đệm giống nhau, các nhà phát triển sử dụng đệm lót để loại bỏ **false sharing cache contention**, ngăn các lõi vô hiệu hóa bộ đệm của nhau. Để đạt được khả năng mở rộng vô hạn trên các ngăn xếp bị tranh chấp, các luồng hẹn gặp bên trong một **lock-free elimination array**, trao đổi trực tiếp các đối số push và pop bổ trợ cho nhau. Việc điều phối vòng đời của luồng bắt đầu bằng **hazard pointer thread registration**, dành riêng các khe trong miền chia sẻ để quảng bá các mục tiêu được bảo vệ. Khi các bộ quản lý kỷ nguyên xác minh các trạng thái tĩnh trên tất cả các công nhân tham gia, họ thúc đẩy hệ thống thông qua một **quiescent state epoch advance**, kích hoạt việc thu hồi an toàn các lô đang chờ xử lý. Nếu không có các giao thức nghiêm ngặt này, các ứng dụng chắc chắn sẽ khuất phục trước **lock-free memory deallocation hazard** chết người, làm hỏng các cấu trúc bên trong. Đối với việc chuyển giao cân bằng giữa bên sản xuất và bên tiêu thụ, các kiến trúc triển khai một **lock-free dual stack**, khớp trực tiếp các tải trọng đến với các đặt chỗ đang chờ ngay tức thì.
