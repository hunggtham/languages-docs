# C2 Vocabulary 204 — Concurrency separation logic, concurrent abstract predicates, and linearizability proofs

## 1. concurrent separation logic
- IPA: /kənˈkɜrənt ˌsɛpəˈreɪʃən ˈlɑdʒɪk/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: An extension of Hoare logic designed for reasoning about concurrent programs that share mutable memory, using separating conjunctions to ensure threads operate on disjoint memory footprints without data races.
- Core meaning & mental image — Tiếng Việt: Logic phân tách đồng thời. Hình dung một kho hàng chia thành nhiều khu vực biệt lập bằng tường ngăn; nhiều nhân viên có thể làm việc song song mà không bao giờ tranh giành cùng một chiếc kệ hàng.
- Grammar & collocations: 
  - apply concurrent separation logic (áp dụng logic phân tách đồng thời)
  - formalize in concurrent separation logic (hình thức hóa trong logic phân tách đồng thời)
  - extend concurrent separation logic (mở rộng logic phân tách đồng thời)
- Register & nuance: Formal verification, academic computer science, programming language theory.
- Examples: 
  - Concurrent separation logic allows engineers to prove the absence of data races in lock-free data structures. (Logic phân tách đồng thời cho phép các kỹ sư chứng minh sự vắng mặt của các cuộc đua dữ liệu trong các cấu trúc dữ liệu không khóa.)
- Liên kết tiếng Hàn: 동시 분리 논리 (同時分離論理) — Hệ thống logic hình thức để kiểm chứng các chương trình đồng thời chia sẻ bộ nhớ.

## 2. concurrent abstract predicate
- IPA: /kənˈkɜrənt ˈæbstrækt ˈprɛdɪkət/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A logical assertion method that encapsulates internal module invariants and allows concurrent clients to reason about abstract states and permissions without knowing low-level memory representations.
- Core meaning & mental image — Tiếng Việt: Vị từ trừu tượng đồng thời. Hình dung một chiếc hộp điều khiển máy móc che đi toàn bộ bánh răng phức tạp bên trong, chỉ cung cấp các nhãn quyền hạn đơn giản cho người vận hành bên ngoài.
- Grammar & collocations: 
  - define a concurrent abstract predicate (định nghĩa một vị từ trừu tượng đồng thời)
  - verify a concurrent abstract predicate (xác minh một vị từ trừu tượng đồng thời)
  - utilize a concurrent abstract predicate (tận dụng một vị từ trừu tượng đồng thời)
- Register & nuance: Advanced program verification, separation logic frameworks (e.g., Iris).
- Examples: 
  - The verification of the concurrent queue relies on a concurrent abstract predicate to hide underlying pointer manipulations. (Việc xác minh hàng đợi đồng thời dựa vào vị từ trừu tượng đồng thời để ẩn đi các thao tác con trỏ bên dưới.)
- Liên kết tiếng Hàn: 동시 추상 술어 (同時抽象述語) — Khái niệm logic giúp đóng gói trạng thái nội bộ và quyền truy cập trong lập trình đồng thời.

## 3. linearizability proof
- IPA: /lɪniəraɪzəˈbɪlɪti pruf/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A formal mathematical demonstration that every concurrent execution of operations on a shared data object appears to take effect instantaneously at a specific point in time between its invocation and its response.
- Core meaning & mental image — Tiếng Việt: Chứng minh tính tuyến tính hóa. Hình dung một thước phim quay chậm ghi nhận hàng ngàn yêu cầu chồng chéo được sắp xếp lại thành một chuỗi thứ tự thời gian thẳng tắp, rạch ròi từng sự kiện.
- Grammar & collocations: 
  - construct a linearizability proof (xây dựng một chứng minh tính tuyến tính hóa)
  - complete a linearizability proof (hoàn thành một chứng minh tính tuyến tính hóa)
  - automate a linearizability proof (tự động hóa một chứng minh tính tuyến tính hóa)
- Register & nuance: Distributed systems, concurrency theory, formal methods.
- Examples: 
  - Writing a linearizability proof for a lock-free stack requires identifying exact linearization points for every atomic operation. (Việc viết chứng minh tính tuyến tính hóa cho một ngăn xếp không khóa đòi hỏi phải xác định các điểm tuyến tính hóa chính xác cho mọi thao tác nguyên tử.)
- Liên kết tiếng Hàn: 선형화 가능성 증명 (線型化可能性證明) — Chứng minh toán học rằng các thao tác đồng thời diễn ra tức thời tại một thời điểm xác định.

## 4. shared memory invariant
- IPA: /ʃɛrd ˈmɛməri ɪnˈvɛriənt/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A structural property or condition over shared memory locations that must always hold true across all threads, temporarily broken only inside atomic update blocks.
- Core meaning & mental image — Tiếng Việt: Bất biến bộ nhớ chia sẻ. Hình dung quy tắc bất di bất dịch của một quỹ tiết kiệm chung: tổng số dư của mọi tài khoản luôn phải khớp với két sắt, dù các thành viên đang liên tục rút và gửi tiền.
- Grammar & collocations: 
  - maintain a shared memory invariant (Duy trì bất biến bộ nhớ chia sẻ)
  - violate a shared memory invariant (Vi phạm bất biến bộ nhớ chia sẻ)
  - establish a shared memory invariant (Thiết lập bất biến bộ nhớ chia sẻ)
- Register & nuance: Systems programming, concurrency verification.
- Examples: 
  - The thread synchronization protocol ensures that the shared memory invariant is never breached during concurrent writes. (Giao thức đồng bộ hóa luồng đảm bảo rằng bất biến bộ nhớ chia sẻ không bao giờ bị vi phạm trong các thao tác ghi đồng thời.)
- Liên kết tiếng Hàn: 공유 메모리 불변식 (共有 memory 不變式) — Điều kiện logic trên bộ nhớ chung luôn phải được duy trì đúng trong suốt quá trình thực thi.

## 5. separating conjunction operator
- IPA: /ˈsɛpəˌreɪtɪŋ kənˈdʌŋkʃən ˈɑpəˌreɪtər/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A foundational connective in separation logic denoted by the asterisk symbol (*), asserting that memory can be split into two disjoint heaps satisfying two separate assertions independently.
- Core meaning & mental image — Tiếng Việt: Toán tử hội phân tách. Hình dung dấu vách ngăn giữa hai căn phòng: khẳng định rằng tài nguyên ở phòng này và phòng kia hoàn toàn tách biệt, không chồng lấn lên nhau.
- Grammar & collocations: 
  - apply the separating conjunction operator (áp dụng toán tử hội phân tách)
  - denote with a separating conjunction operator (ký hiệu bằng toán tử hội phân tách)
  - evaluate a separating conjunction operator (đánh giá toán tử hội phân tách)
- Register & nuance: Mathematical logic, formal proof assistants.
- Examples: 
  - The separating conjunction operator allows proofs to reason about separate pointer structures without fear of aliasing interference. (Toán tử hội phân tách cho phép các chứng minh lập luận về các cấu trúc con trỏ riêng biệt mà không sợ sự can thiệp do trùng lặp bí danh.)
- Liên kết tiếng Hàn: 분리 연언 연산자 (分離連言演算子) — Toán tử dấu sao trong logic phân tách biểu thị các vùng nhớ rời rạc.

## 6. fractional permission token
- IPA: /ˈfrækʃənl pərˈmɪʃən ˈtoʊkən/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A logical permission mechanism in separation logic that splits read and write rights into fractional shares, allowing multiple concurrent threads to hold read-only access while exclusive write access requires a full token.
- Core meaning & mental image — Tiếng Việt: Thẻ quyền hạn phân số. Hình dung việc chia một chiếc bánh quyền sở hữu thành nhiều phần nhỏ: nhiều người có thể giữ phần nhỏ để đọc, nhưng để sửa đổi thì phải gom đủ nguyên một chiếc bánh.
- Grammar & collocations: 
  - split a fractional permission token (chia nhỏ thẻ quyền hạn phân số)
  - transfer a fractional permission token (chuyển giao thẻ quyền hạn phân số)
  - reclaim a fractional permission token (thu hồi thẻ quyền hạn phân số)
- Register & nuance: Advanced verification systems, permission-based reasoning.
- Examples: 
  - Fractional permission tokens enable dynamic reader-writer locking protocols to be verified formally in concurrent code. (Các thẻ quyền hạn phân số cho phép các giao thức khóa đọc-ghi động được xác minh chính thức trong mã đồng thời.)
- Liên kết tiếng Hàn: 분할 권한 토큰 (分割權限 token) — Cơ chế phân chia quyền đọc-ghi thành các phần nhỏ trong logic xác minh.

## 7. ghost state resource
- IPA: /ɡoʊst steɪt rɪˈsɔrs/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: Auxiliary logical state added to formal verification models that exists purely to track permissions, ownership history, and synchronization protocols without affecting actual runtime execution.
- Core meaning & mental image — Tiếng Việt: Tài nguyên trạng thái ma (trạng thái phụ trợ). Hình dung những dòng ghi chép trên sổ tay của trọng tài đứng ngoài sân bóng: giúp theo dõi điểm số và lỗi phạt nhưng hoàn toàn không tác động vật lý lên các cầu thủ đang chạy trên sân.
- Grammar & collocations: 
  - allocate a ghost state resource (cấp phát tài nguyên trạng thái ma)
  - update a ghost state resource (cập nhật tài nguyên trạng thái ma)
  - reason about a ghost state resource (lập luận về tài nguyên trạng thái ma)
- Register & nuance: Formal verification, interactive theorem proving (Coq, Iris).
- Examples: 
  - Verification engineers introduce ghost state resources to track protocol ownership tokens that disappear upon compilation. (Các kỹ sư xác minh giới thiệu các tài nguyên trạng thái ma để theo dõi các token sở hữu giao thức sẽ biến mất khi biên dịch.)
- Liên kết tiếng Hàn: 고스트 상태 자원 (ghost 狀態資源) — Trạng thái logic phụ trợ trong mô hình xác minh dùng để theo dõi quyền hạn mà không ảnh hưởng đến mã thực thi.

## 8. lock coupling protocol
- IPA: /lɑk ˈkʌplɪŋ ˈproʊtəˌkɑl/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A concurrency synchronization pattern where a thread acquires the lock of a child node before releasing the lock of its parent node, commonly used in tree-based data structures.
- Core meaning & mental image — Tiếng Việt: Giao thức khóa móc nối (khóa tay đôi). Hình dung việc leo thang dây: bạn chỉ nhấc tay khỏi sợi dây phía trên (cha) sau khi đã bám chắc vào sợi dây phía dưới (con).
- Grammar & collocations: 
  - implement a lock coupling protocol (triển khai giao thức khóa móc nối)
  - follow a lock coupling protocol (tuân theo giao thức khóa móc nối)
  - verify a lock coupling protocol (xác minh giao thức khóa móc nối)
- Register & nuance: Systems programming, concurrent algorithms.
- Examples: 
  - The concurrent B-tree traversal relies on a lock coupling protocol to prevent race conditions during node splits. (Việc duyệt cây B đồng thời dựa vào giao thức khóa móc nối để ngăn ngừa các điều kiện tranh chấp trong quá trình tách nút.)
- Liên kết tiếng Hàn: 락 커플링 프로토콜 (lock coupling protocol) — Giao thức đồng bộ hóa giữ khóa nút con trước khi thả khóa nút cha trong cấu trúc cây.

## 9. atomic transition invariant
- IPA: /əˈtɑmɪk trænˈzɪʃən ɪnˈvɛriənt/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A logical property guaranteeing that state changes across concurrent thread interactions occur indivisibly and preserve system validity invariants at all times.
- Core meaning & mental image — Tiếng Việt: Bất biến chuyển đổi nguyên tử. Hình dung một bước nhảy vọt qua vực sâu: hoặc bạn đứng hoàn toàn ở bờ bên kia, hoặc đứng ở bờ bên này; tuyệt đối không có trạng thái lơ lửng giữa không trung.
- Grammar & collocations: 
  - preserve an atomic transition invariant (bảo tồn bất biến chuyển đổi nguyên tử)
  - establish an atomic transition invariant (thiết lập bất biến chuyển đổi nguyên tử)
  - check an atomic transition invariant (kiểm tra bất biến chuyển đổi nguyên tử)
- Register & nuance: Concurrent systems design, model checking.
- Examples: 
  - Every transaction must maintain the atomic transition invariant to prevent partial state visibility across threads. (Mọi giao dịch phải duy trì bất biến chuyển đổi nguyên tử để ngăn chặn việc nhìn thấy trạng thái một phần giữa các luồng.)
- Liên kết tiếng Hàn: 원자적 전이 불변식 (原子적 轉移不變式) — Bất biến đảm bảo các chuyển đổi trạng thái xảy ra nguyên tử và luôn hợp lệ.

## 10. linearization point identification
- IPA: /ˈlɪniəraɪzɪʃən pɔɪnt aɪˌdɛntɪfɪkˈeɪʃən/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The analytical process of locating the exact operational instant within a concurrent execution trace where a method call takes effect and becomes visible to all other threads.
- Core meaning & mental image — Tiếng Việt: Xác định điểm tuyến tính hóa. Hình dung việc bấm máy chụp ảnh đúng khoảnh khắc chiếc xe đua vượt qua vạch đích trong một cuộc đua nghẹt thở.
- Grammar & collocations: 
  - perform linearization point identification (thực hiện xác định điểm tuyến tính hóa)
  - simplify linearization point identification (đơn giản hóa việc xác định điểm tuyến tính hóa)
  - prove linearization point identification (chứng minh việc xác định điểm tuyến tính hóa)
- Register & nuance: Concurrency proofs, algorithm correctness verification.
- Examples: 
  - linearization point identification is often the most challenging step when verifying lock-free concurrent queues. (Việc xác định điểm tuyến tính hóa thường là bước thử thách nhất khi xác minh các hàng đợi đồng thời không khóa.)
- Liên kết tiếng Hàn: 선형화 지점 식별 (線型化地點識別) — Quá trình xác định thời điểm chính xác mà một thao tác đồng thời có hiệu lực.

## 11. local reasoning guarantee
- IPA: /ˈloʊkl ˈrizənɪŋ ˈɡɛrənti/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The core verification principle allowing proofs to focus solely on the local portion of memory accessed by a thread without needing to analyze the global state of the entire system.
- Core meaning & mental image — Tiếng Việt: Bảo đảm lập luận cục bộ. Hình dung việc sửa chữa một món đồ chơi trong căn phòng nhỏ của bạn mà không cần phải lo lắng hay kiểm tra tình trạng của toàn bộ ngôi nhà lớn.
- Grammar & collocations: 
  - provide a local reasoning guarantee (cung cấp bảo đảm lập luận cục bộ)
  - achieve a local reasoning guarantee (đạt được bảo đảm lập luận cục bộ)
  - rely on a local reasoning guarantee (dựa vào bảo đảm lập luận cục bộ)
- Register & nuance: Separation logic, scalable program verification.
- Examples: 
  - Separation logic scales to large programs because its local reasoning guarantee lets verifiers ignore unaffected memory heaps. (Logic phân tách có thể mở rộng cho các chương trình lớn vì bảo đảm lập luận cục bộ của nó cho phép người kiểm tra bỏ qua các vùng nhớ không bị ảnh hưởng.)
- Liên kết tiếng Hàn: 로컬 추론 보장 (local 推論保障) — Nguyên tắc xác minh cho phép chỉ tập trung vào phần bộ nhớ cục bộ mà luồng đang truy cập.

## 12. frame rule application
- IPA: /freɪm rul ˌæplɪˈkeɪʃən/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The practical execution of the separation logic frame rule, which allows specifications of code segments to be safely lifted and reused in larger programs without re-verifying unaffected state.
- Core meaning & mental image — Tiếng Việt: Áp dụng quy tắc khung (frame rule). Hình dung việc đóng khung bức tranh đã vẽ xong lên một bức tường lớn hơn mà không phải vẽ lại nền nhà xung quanh.
- Grammar & collocations: 
  - demonstrate a frame rule application (thể hiện việc áp dụng quy tắc khung)
  - simplify via frame rule application (đơn giản hóa thông qua việc áp dụng quy tắc khung)
  - justify a frame rule application (biện minh cho việc áp dụng quy tắc khung)
- Register & nuance: Formal program verification, Hoare logic extensions.
- Examples: 
  - A successful frame rule application allowed the verification team to reuse module proofs across multiple concurrent client threads. (Việc áp dụng thành công quy tắc khung đã cho phép nhóm xác minh tái sử dụng các chứng minh mô-đun trên nhiều luồng khách hàng đồng thời.)
- Liên kết tiếng Hàn: 프레임 규칙 적용 (frame 規則適用) — Việc sử dụng quy tắc khung trong logic phân tách để tái sử dụng chứng minh cho các phần bộ nhớ không đổi.

## 13. interference relation condition
- IPA: /ˌɪntərˈfɪrəns rɪˈleɪʃən kənˈdɪʃən/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A formal specification condition defining how concurrent threads are permitted to modify shared states and how other threads must tolerate or accommodate those modifications.
- Core meaning & mental image — Tiếng Việt: Điều kiện quan hệ nhiễu loạn. Hình dung thỏa thuận giao thông giữa các làn đường: quy định rõ xe bên cạnh được phép lấn làn ở mức độ nào và bạn phải nhường đường ra sao.
- Grammar & collocations: 
  - satisfy an interference relation condition (thỏa mãn điều kiện quan hệ nhiễu loạn)
  - specify an interference relation condition (đặc tả điều kiện quan hệ nhiễu loạn)
  - check an interference relation condition (kiểm tra điều kiện quan hệ nhiễu loạn)
- Register & nuance: Rely-guarantee reasoning, concurrent program verification.
- Examples: 
  - Rely-guarantee proofs require defining every interference relation condition precisely to ensure thread safety. (Các chứng minh rely-guarantee đòi hỏi phải xác định chính xác mọi điều kiện quan hệ nhiễu loạn để đảm bảo an toàn luồng.)
- Liên kết tiếng Hàn: 간섭 관계 조건 (干涉關係條件) — Điều kiện xác định cách các luồng tương tác và tác động lẫn nhau trên trạng thái chung.

## 14. rely-guarantee reasoning
- IPA: /rɪˈlaɪ ˈɡɛrənti ˈrizənɪŋ/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A verification methodology for concurrent programs where each thread specifies what environmental interference it relies on and what interference guarantees it provides in return.
- Core meaning & mental image — Tiếng Việt: Lập luận dựa-đảm bảo (rely-guarantee). Hình dung hợp đồng công việc nhóm: "Tôi tin tưởng bạn hoàn thành phần A (rely), và tôi cam kết hoàn thành phần B đúng hạn để hỗ trợ bạn (guarantee)."
- Grammar & collocations: 
  - apply rely-guarantee reasoning (áp dụng lập luận rely-guarantee)
  - formalize rely-guarantee reasoning (hình thức hóa lập luận rely-guarantee)
  - extend rely-guarantee reasoning (mở rộng lập luận rely-guarantee)
- Register & nuance: Formal methods, concurrent systems verification.
- Examples: 
  - Rely-guarantee reasoning makes it possible to verify multi-threaded operating system kernels incrementally. (Lập luận rely-guarantee giúp cho việc xác minh nhân hệ điều hành đa luồng trở nên khả thi theo từng bước.)
- Liên kết tiếng Hàn: 신뢰-보장 추론 (信賴-保障推論) — Phương pháp xác minh chương trình đồng thời dựa trên việc định nghĩa điều kiện môi trường tin cậy và cam kết cung cấp.

## 15. race-free execution certificate
- IPA: /reɪs fri ˌɛksəˈkjuʃən sərˈtɪfɪkət/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A formal mathematical proof or tool-generated certificate guaranteeing that a given concurrent program execution is completely free of unintended data races and synchronization hazards.
- Core meaning & mental image — Tiếng Việt: Chứng chỉ thực thi không tranh chấp. Hình dung tấm giấy kiểm định an toàn kỹ thuật cấp cho một cỗ máy công nghiệp, chứng nhận rằng nó vận hành mượt mà không có nguy cơ kẹt máy hay va chạm cơ khí.
- Grammar & collocations: 
  - issue a race-free execution certificate (cấp chứng chỉ thực thi không tranh chấp)
  - generate a race-free execution certificate (tạo chứng chỉ thực thi không tranh chấp)
  - verify a race-free execution certificate (xác minh chứng chỉ thực thi không tranh chấp)
- Register & nuance: Static analysis, formal verification tools, safety-critical systems.
- Examples: 
  - The static analyzer emitted a race-free execution certificate before allowing the concurrent module to compile. (Trình phân tích tĩnh đã phát hành chứng chỉ thực thi không tranh chấp trước khi cho phép mô-đun đồng thời được biên dịch.)
- Liên kết tiếng Hàn: 경쟁 없는 실행 인증서 (競爭 없는 執行證認書) — Chứng nhận hình thức đảm bảo chương trình không có lỗi tranh chấp dữ liệu.

## 16. abstract memory footprint
- IPA: /ˈæbstrækt ˈmɛməri ˈfʊtˌprɪnt/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The conceptual set of abstract resources and abstract locations that a concurrent module interacts with, hiding concrete memory addresses from client reasoning.
- Core meaning & mental image — Tiếng Việt: Dấu ấn bộ nhớ trừu tượng. Hình dung vùng không gian sở hữu trên bản vẽ sơ đồ khu đất của bạn, che đi các mốc tọa độ trắc địa phức tạp bên dưới.
- Grammar & collocations: 
  - define an abstract memory footprint (định nghĩa dấu ấn bộ nhớ trừu tượng)
  - shrink an abstract memory footprint (thu hẹp dấu ấn bộ nhớ trừu tượng)
  - encapsulate an abstract memory footprint (đóng gói dấu ấn bộ nhớ trừu tượng)
- Register & nuance: Modular verification, separation logic, data abstraction.
- Examples: 
  - Clients reason about concurrent abstract data types using only their declared abstract memory footprint. (Khách hàng lập luận về các kiểu dữ liệu trừu tượng đồng thời chỉ bằng dấu ấn bộ nhớ trừu tượng đã khai báo của chúng.)
- Liên kết tiếng Hàn: 추상 메모리 풋프린트 (抽象 memory footprint) — Tập hợp tài nguyên bộ nhớ trừu tượng mà một mô-đun tương tác.

## 17. ownership transfer protocol
- IPA: /ˈoʊnərʃɪp trænsˈfɜr ˈproʊtəˌkɑl/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A formal protocol mechanism where memory ownership rights are safely handed off from one concurrent thread to another, preventing simultaneous unsafe accesses.
- Core meaning & mental image — Tiếng Việt: Giao thức chuyển giao quyền sở hữu. Hình dung việc trao tay cây gậy tiếp sức trong cuộc thi chạy: người chạy trước buông tay hoàn toàn ngay khi người chạy sau đã nắm chắc lấy gậy.
- Grammar & collocations: 
  - execute an ownership transfer protocol (thực thi giao thức chuyển giao quyền sở hữu)
  - implement an ownership transfer protocol (triển khai giao thức chuyển giao quyền sở hữu)
  - verify an ownership transfer protocol (xác minh giao thức chuyển giao quyền sở hữu)
- Register & nuance: Systems programming, ownership type systems (e.g., Rust), concurrent memory management.
- Examples: 
  - The message passing channel implements a strict ownership transfer protocol to avoid copying heavy memory structures. (Kênh truyền thông điệp thực hiện giao thức chuyển giao quyền sở hữu nghiêm ngặt để tránh việc sao chép các cấu trúc bộ nhớ nặng.)
- Liên kết tiếng Hàn: 소유권 이전 프로토콜 (所有權移轉 protocol) — Giao thức chuyển nhượng quyền sở hữu bộ nhớ an toàn giữa các luồng.

## 18. view shift deduction
- IPA: /vju ʃɪft dɪˈdʌkʃən/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A logical inference rule in advanced concurrent separation logic that allows a verification proof to transition between different logical assertions or resource views atomically.
- Core meaning & mental image — Tiếng Việt: Phép suy diễn chuyển đổi góc nhìn. Hình dung việc xoay ống kính vạn hoa: cấu trúc bên trong thay đổi ngay lập tức sang một góc nhìn mới hoàn toàn hợp lệ và nhất quán.
- Grammar & collocations: 
  - apply a view shift deduction (áp dụng phép suy diễn chuyển đổi góc nhìn)
  - prove a view shift deduction (chứng minh phép suy diễn chuyển đổi góc nhìn)
  - derive a view shift deduction (dẫn xuất phép suy diễn chuyển đổi góc nhìn)
- Register & nuance: Advanced program logics, Iris framework, formal verification.
- Examples: 
  - Using a view shift deduction, the prover converts raw heap resources into abstract concurrent protocol predicates. (Bằng cách sử dụng phép suy diễn chuyển đổi góc nhìn, bên chứng minh chuyển đổi tài nguyên heap thô thành các vị từ giao thức đồng thời trừu tượng.)
- Liên kết tiếng Hàn: 뷰 시프트 연역 (view shift 演繹) — Quy tắc suy luận logic cho phép chuyển đổi giữa các quan điểm tài nguyên khác nhau trong logic phân tách.

## 19. non-blocking synchronization algorithm
- IPA: /nɑn ˈblɑkɪŋ ˌsɪŋkrənaɪˈzeɪʃən ˈɛlɡəˌrɪðəm/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A concurrent algorithm ensuring that some thread always makes progress within a finite number of steps, avoiding thread stalling, deadlocks, and priority inversions caused by traditional mutual exclusion locks.
- Core meaning & mental image — Tiếng Việt: Thuật toán đồng bộ hóa không chặn. Hình dung một ngã tư giao thông dùng vòng xuyến thông minh thay vì đèn đỏ: các xe có thể liên tục di chuyển mà không bị bắt buộc dừng chết một chỗ.
- Grammar & collocations: 
  - design a non-blocking synchronization algorithm (thiết kế thuật toán đồng bộ hóa không chặn)
  - implement a non-blocking synchronization algorithm (triển khai thuật toán đồng bộ hóa không chặn)
  - optimize a non-blocking synchronization algorithm (tối ưu hóa thuật toán đồng bộ hóa không chặn)
- Register & nuance: High-performance computing, concurrent data structures, multi-threading.
- Examples: 
  - Designing a correct non-blocking synchronization algorithm requires careful handling of the ABA problem using atomic primitives. (Việc thiết kế một thuật toán đồng bộ hóa không chặn chính xác đòi hỏi phải xử lý cẩn thận vấn đề ABA bằng các nguyên hàm nguyên tử.)
- Liên kết tiếng Hàn: 락프리 동기화 알고리즘 (lock-free 同期化 algorithm) — Thuật toán đồng bộ hóa đảm bảo tiến trình luôn tiến triển mà không dùng khóa chặn truyền thống.

## 20. read-copy-update barrier
- IPA: /rid ˈkɑpi ˈʌpˌdeɪt ˈbæriər/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A synchronization mechanism allowing readers to access data structures concurrently without locks, while writers make a duplicated copy, modify it, and publish it atomically after existing readers finish.
- Core meaning & mental image — Tiếng Việt: Rào cản đọc-sao chép-cập nhật (RCU). Hình dung việc sửa tài liệu trên bảng tin: người đọc cứ đọc bản hiện tại thoải mái; người viết tạo một bản nháp mới, chỉnh sửa xong rồi thay thế nguyên tấm bảng chỉ trong một nốt nhạc.
- Grammar & collocations: 
  - synchronize via a read-copy-update barrier (đồng bộ hóa thông qua rào cản RCU)
  - implement a read-copy-update barrier (triển khai rào cản RCU)
  - evaluate a read-copy-update barrier (đánh giá rào cản RCU)
- Register & nuance: Operating system kernels (e.g., Linux), high-performance concurrency.
- Examples: 
  - The Linux kernel utilizes a read-copy-update barrier to achieve extremely fast read performance in network routing tables. (Nhân Linux tận dụng rào cản RCU để đạt được hiệu suất đọc cực nhanh trong các bảng định tuyến mạng.)
- Liên kết tiếng Hàn: 읽기-복사-갱신 배리어 (read-copy-update barrier) — Cơ chế đồng bộ hóa cho phép đọc không khóa bằng cách sao chép và cập nhật nguyên tử.

## 21. helping mechanism thread
- IPA: /ˈhɛlpɪŋ ˈmɛkəˌnɪzəm θrɛd/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A concurrency design pattern where helper threads actively assist other threads in completing pending or stalled operations, ensuring lock-free progress guarantees.
- Core meaning & mental image — Tiếng Việt: Luồng cơ chế hỗ trợ. Hình dung một đội cứu hộ khẩn cấp: khi thấy một đồng đội đang bị kẹt xe hay quá tải, các thành viên khác sẽ xông vào hỗ trợ hoàn thành nốt công việc chung.
- Grammar & collocations: 
  - implement a helping mechanism thread (triển khai luồng cơ chế hỗ trợ)
  - coordinate a helping mechanism thread (điều phối luồng cơ chế hỗ trợ)
  - design a helping mechanism thread (thiết kế luồng cơ chế hỗ trợ)
- Register & nuance: Advanced lock-free programming, concurrent data structures.
- Examples: 
  - The lock-free universal construction incorporates a helping mechanism thread to ensure that slow threads are never starved. (Cấu trúc phổ quát không khóa kết hợp luồng cơ chế hỗ trợ để đảm bảo các luồng chậm không bao giờ bị bỏ đói.)
- Liên kết tiếng Hàn: 돕기 메커니즘 스레드 (helping mechanism thread) — Mẫu thiết kế trong lập trình đồng thời nơi các luồng chủ động giúp luồng khác hoàn thành công việc.

## 22. memory safety soundness theorem
- IPA: /ˈmɛməri ˈseɪfti ˈsaʊndnəs ˈθɪrəm/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A formal mathematical theorem proving that a verification system or type checker guarantees the absence of null-pointer dereferences, buffer overflows, and use-after-free errors at runtime.
- Core meaning & mental image — Tiếng Việt: Định lý tính vững chắc về an toàn bộ nhớ. Hình dung chiếc khiên bảo vệ tuyệt đối được chứng nhận bằng toán học, cam kết hệ thống không bao giờ sập vì lỗi truy cập bộ nhớ sai lệch.
- Grammar & collocations: 
  - prove a memory safety soundness theorem (chứng minh định lý tính vững chắc về an toàn bộ nhớ)
  - state a memory safety soundness theorem (phát biểu định lý tính vững chắc về an toàn bộ nhớ)
  - establish a memory safety soundness theorem (thiết lập định lý tính vững chắc về an toàn bộ nhớ)
- Register & nuance: Formal semantics, programming language verification, type theory.
- Examples: 
  - The research paper concludes with the proof of a memory safety soundness theorem for the concurrent programming calculus. (Bài báo nghiên cứu kết thúc bằng việc chứng minh định lý tính vững chắc về an toàn bộ nhớ cho phép tính lập trình đồng thời.)
- Liên kết tiếng Hàn: 메모리 안전성 건전성 정리 (memory 安全性健全性定理) — Định lý toán học chứng minh hệ thống kiểm tra đảm bảo an toàn bộ nhớ tuyệt đối.

## 23. semantic model of state
- IPA: /sɪˈmæntɪk ˈmɑdl ʌv steɪt/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A rigorous mathematical interpretation defining how states, heaps, and resources behave in a formal verification system, giving precise meaning to logical assertions.
- Core meaning & mental image — Tiếng Việt: Mô hình ngữ nghĩa của trạng thái. Hình dung bản đồ toán học chính xác mô tả từng góc ngách và sự chuyển dịch của dòng chảy trạng thái trong một hệ thống phức tạp.
- Grammar & collocations: 
  - construct a semantic model of state (xây dựng mô hình ngữ nghĩa của trạng thái)
  - formalize a semantic model of state (hình thức hóa mô hình ngữ nghĩa của trạng thái)
  - define a semantic model of state (định nghĩa mô hình ngữ nghĩa của trạng thái)
- Register & nuance: Denotational semantics, program verification theory.
- Examples: 
  - Building a semantic model of state for concurrent separation logic requires advanced algebraic structures like resource monoids. (Việc xây dựng mô hình ngữ nghĩa trạng thái cho logic phân tách đồng thời đòi hỏi các cấu trúc đại số tiên tiến như các monoid tài nguyên.)
- Liên kết tiếng Hàn: 상태의 의미론적 모델 (狀態의 意味論的 model) — Mô hình toán học định nghĩa ngữ nghĩa của trạng thái và tài nguyên trong hệ thống xác minh.

## 24. formal axiomatic verification
- IPA: /ˈfɔrməl ˌæksiəˈmætɪk ˌvɛrəfɪˈkeɪʃən/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The rigorous process of proving program correctness by applying mathematical axioms and inference rules mechanically or with proof assistants.
- Core meaning & mental image — Tiếng Việt: Xác minh tiên đề hình thức. Hình dung việc xây dựng một ngôi nhà bằng các khối gạch định luật toán học không thể chối cãi, được kiểm tra từng viên bởi máy tính.
- Grammar & collocations: 
  - perform formal axiomatic verification (thực hiện xác minh tiên đề hình thức)
  - automate formal axiomatic verification (tự động hóa xác minh tiên đề hình thức)
  - apply formal axiomatic verification (áp dụng xác minh tiên đề hình thức)
- Register & nuance: Formal methods, high-assurance software engineering.
- Examples: 
  - Aerospace software systems undergo formal axiomatic verification to ensure absolute operational safety. (Các hệ thống phần mềm hàng không vũ trụ trải qua quá trình xác minh tiên đề hình thức để đảm bảo an toàn vận hành tuyệt đối.)
- Liên kết tiếng Hàn: 형식적 공리적 검증 (形式적 公理적 檢證) — Quá trình chứng minh tính đúng đắn của phần mềm dựa trên các tiên đề toán học hình thức.

## 25. concurrent refinement relation
- IPA: /kənˈkɜrənt rɪˈfaɪnmənt rɪˈleɪʃən/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A formal relation proving that a concrete concurrent implementation correctly refines and behaves according to its high-level abstract specification under all interleaved thread schedules.
- Core meaning & mental image — Tiếng Việt: Quan hệ tinh chỉnh đồng thời. Hình dung việc so sánh bản thiết kế chi tiết dưới xưởng với bản vẽ lý thuyết của kiến trúc sư, chứng minh mọi con ốc đều khớp hoàn hảo theo đúng tiêu chuẩn đề ra.
- Grammar & collocations: 
  - prove a concurrent refinement relation (chứng minh quan hệ tinh chỉnh đồng thời)
  - establish a concurrent refinement relation (thiết lập quan hệ tinh chỉnh đồng thời)
  - define a concurrent refinement relation (định nghĩa quan hệ tinh chỉnh đồng thời)
- Register & nuance: Program refinement, concurrency theory, formal verification.
- Examples: 
  - The compiler proof establishes a concurrent refinement relation between the source program and the target machine assembly. (Chứng minh của trình biên dịch thiết lập quan hệ tinh chỉnh đồng thời giữa chương trình nguồn và mã hợp ngữ máy đích.)
- Liên kết tiếng Hàn: 동시 정교화 관계 (同時精巧化關係) — Quan hệ hình thức chứng minh hiện thực hóa đồng thời tuân thủ đúng đặc tả trừu tượng.

---

## Review in context: Part 1 (items 1–12)
Reasoning about multi-threaded software requires advanced formal techniques to guarantee safety and prevent data races. The foundation of this field is **concurrent separation logic**, which extends traditional program logic using the **separating conjunction operator** to divide memory into disjoint heaps. This enables a powerful **local reasoning guarantee**, allowing verification engineers to apply the **frame rule application** on independent memory chunks. To manage shared variables safely, systems maintain a strict **shared memory invariant**, supported by **fractional permission token** systems that regulate read and write access. When dealing with complex algorithms, verification often introduces an auxiliary **ghost state resource** to track ownership history without affecting runtime code. For structured traversals in data structures like trees, developers implement a **lock coupling protocol**. Furthermore, proving that concurrent data structures behave correctly requires a rigorous **linearizability proof**, which involves **linearization point identification** to pinpoint exact operational moments. Finally, upholding system consistency relies on preserving every **atomic transition invariant**, while **concurrent abstract predicate** definitions hide low-level details.

## Bản dịch tiếng Việt phần 1:
Lập luận về phần mềm đa luồng đòi hỏi các kỹ thuật hình thức tiên tiến để đảm bảo an toàn và ngăn ngừa các cuộc đua dữ liệu. Nền tảng của lĩnh vực này là **logic phân tách đồng thời (concurrent separation logic)**, mở rộng logic chương trình truyền thống bằng cách sử dụng **toán tử hội phân tách (separating conjunction operator)** để chia bộ nhớ thành các vùng heap rời rạc. Điều này mang lại **bảo đảm lập luận cục bộ (local reasoning guarantee)** mạnh mẽ, cho phép các kỹ sư xác minh áp dụng **quy tắc khung (frame rule application)** trên các khối bộ nhớ độc lập. Để quản lý các biến chia sẻ một cách an toàn, các hệ thống duy trì **bất biến bộ nhớ chia sẻ (shared memory invariant)** nghiêm ngặt, được hỗ trợ bởi hệ thống **thẻ quyền hạn phân số (fractional permission token)** quản lý quyền đọc và ghi. Khi xử lý các thuật toán phức tạp, việc xác minh thường giới thiệu **tài nguyên trạng thái ma (ghost state resource)** phụ trợ để theo dõi lịch sử sở hữu mà không làm ảnh hưởng đến mã thời gian chạy. Đối với việc duyệt cấu trúc trong các cấu trúc dữ liệu như cây, các nhà phát triển triển khai **giao thức khóa móc nối (lock coupling protocol)**. Hơn nữa, việc chứng minh các cấu trúc dữ liệu đồng thời hoạt động chính xác đòi hỏi **chứng minh tính tuyến tính hóa (linearizability proof)** khắt khe, bao gồm việc **xác định điểm tuyến tính hóa (linearization point identification)** để chỉ định chính xác các thời điểm hoạt động. Cuối cùng, việc duy trì tính nhất quán của hệ thống phụ thuộc vào việc bảo tồn mọi **bất biến chuyển đổi nguyên tử (atomic transition invariant)**, trong khi các định nghĩa **vị từ trừu tượng đồng thời (concurrent abstract predicate)** ẩn đi các chi tiết cấp thấp.

---

## Review in context: Part 2 (items 13–25)
Beyond basic separation logic, verifying large-scale concurrent systems requires sophisticated compositional frameworks. **Rely-guarantee reasoning** achieves this by specifying every **interference relation condition**, detailing how environment threads interact with shared resources. To guarantee that code executes without hazards, static analyzers issue a **race-free execution certificate** based on rigorous type systems. Modular verification is further enhanced by defining an **abstract memory footprint** and executing an **ownership transfer protocol** to hand off resource rights securely between threads. When performance demands lock-free architectures, engineers design a **non-blocking synchronization algorithm** or implement a **read-copy-update barrier**, occasionally assisted by a **helping mechanism thread** to prevent thread starvation. At the foundational level, proving the correctness of these systems involves a **memory safety soundness theorem** built upon a rigorous **semantic model of state**. Through **formal axiomatic verification** and the use of advanced proof assistants, developers establish a sound **concurrent refinement relation**, supported by powerful Iris logic features like **view shift deduction**.

## Bản dịch tiếng Việt phần 2:
Ngoài logic phân tách cơ bản, việc xác minh các hệ thống đồng thời quy mô lớn đòi hỏi các framework thành phần tinh vi. **Lập luận rely-guarantee (rely-guarantee reasoning)** đạt được điều này bằng cách xác định mọi **điều kiện quan hệ nhiễu loạn (interference relation condition)**, chi tiết hóa cách các luồng môi trường tương tác với tài nguyên chia sẻ. Để đảm bảo mã thực thi không có nguy hiểm, các trình phân tích tĩnh phát hành **chứng chỉ thực thi không tranh chấp (race-free execution certificate)** dựa trên các hệ thống kiểu nghiêm ngặt. Việc xác minh mô-đun được nâng cao hơn nữa bằng cách định nghĩa **dấu ấn bộ nhớ trừu tượng (abstract memory footprint)** và thực thi **giao thức chuyển giao quyền sở hữu (ownership transfer protocol)** để chuyển giao quyền tài nguyên an toàn giữa các luồng. Khi hiệu suất đòi hỏi kiến trúc không khóa, các kỹ sư thiết kế **thuật toán đồng bộ hóa không chặn (non-blocking synchronization algorithm)** hoặc triển khai **rào cản đọc-sao chép-cập nhật (read-copy-update barrier)**, đôi khi được hỗ trợ bởi **luồng cơ chế hỗ trợ (helping mechanism thread)** để ngăn chặn tình trạng đói luồng. Ở cấp độ nền tảng, việc chứng minh tính đúng đắn của các hệ thống này liên quan đến **định lý tính vững chắc về an toàn bộ nhớ (memory safety soundness theorem)** được xây dựng trên **mô hình ngữ nghĩa của trạng thái (semantic model of state)** chặt chẽ. Thông qua **xác minh tiên đề hình thức (formal axiomatic verification)** và việc sử dụng các trợ lý chứng minh tiên tiến, các nhà phát triển thiết lập **quan hệ tinh chỉnh đồng thời (concurrent refinement relation)** vững chắc, được hỗ trợ bởi các tính năng logic Iris mạnh mẽ như **phép suy diễn chuyển đổi góc nhìn (view shift deduction)**.
