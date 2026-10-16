# C2 Vocabulary 184 — Formal verification, temporal logic, and distributed consensus protocols

Ở trình độ C2 trong khoa học máy tính và kỹ thuật hệ thống phân tán, việc viết mã đúng theo cảm tính là hoàn toàn bất khả thi khi đối mặt với độ trễ mạng bất định và sự cố sụp đổ máy chủ. Bài học này đi sâu vào phương pháp kiểm chứng hình thức, logic thời gian và toán học chứng minh cơ chế đồng thuận, cung cấp hệ thống thuật ngữ chuẩn mực giúp bạn đặc tả máy trạng thái, kiểm tra tính bất biến và cơ giới hóa các chứng minh an toàn tuyệt đối.

Flow của bài học: **formal protocol verification** → **temporal logic specifications** → **state-machine replication** → **linearizability verification** → **safety invariants** → **liveness properties** → **protocol model checking** → **mechanized proofs** → **inductive safety proof** → **refinement mapping** → **combinatorial state explosion** → **tla+ specification** → **byzantine consensus verification** → **quorum intersection property** → **fairness constraints** → **interactive proof assistant** → **machine-checked soundness** → **reachability analysis** → **bisimulation equivalence** → **invariant strengthening** → **linearizable execution** → **asynchronous network semantics** → **safety violation trace** → **state space exploration** → **proof obligations**.

---

## 1. formal protocol verification /ˈfɔrməl ˈproʊtəˌkɔl ˌvɛrəfəˈkeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ hoặc tân ngữ trong kỹ nghệ phần mềm tin cậy cao, kiến trúc đám mây và hệ thống nhúng quan trọng (ví dụ: `apply formal protocol verification`, `rigors of formal protocol verification`).

**Core meaning — English:** The mathematical technique of rigorously proving or disproving that a communication or consensus protocol strictly satisfies its formal specification across all possible execution states and failure modes.

**Core meaning & mental image — Tiếng Việt:** Sự kiểm chứng hình thức giao thức; hãy hình dung thay vì cho chạy thử 1.000 ca kiểm thử ngẫu nhiên trên phần mềm, bạn dựng lên một hệ thống phương trình hình học khắt khe quét sạch toàn bộ mọi ngóc ngách logic khả dĩ để khẳng định 100% không một kẽ hở nào có thể tồn tại.

**Grammar & collocations:** `conduct formal protocol verification` — tiến hành kiểm chứng hình thức giao thức; `framework for formal protocol verification` — khuôn khổ kiểm chứng hình thức giao thức; `benefits of formal protocol verification` — lợi ích của việc kiểm chứng hình thức giao thức.

**Register & nuance:** `high-register theoretical computer science & systems engineering` — vượt trội hơn việc kiểm thử phần mềm thông thường (testing/QA) vì phương pháp này đem lại bằng chứng toán học tuyệt đối (mathematical certainty).

**Examples:** `Mission-critical distributed storage engines undergo formal protocol verification to ensure that catastrophic data loss is mathematically impossible under network partitions.` → Các công cụ lưu trữ phân tán tối quan trọng phải trải qua quy trình kiểm chứng hình thức giao thức để bảo đảm rằng tình trạng mất dữ liệu thảm họa là điều bất khả về mặt toán học trong điều kiện phân vùng mạng.

**Liên kết tiếng Hàn:** `정형 프로토콜 검증` (定型的 protocol 檢證) — kiểm chứng hình thức giao thức.

---

## 2. temporal logic specifications /ˈtɛmpərəl ˈlɑdʒɪk ˌspɛsəfəˈkeɪʃənz/

**Loại từ & vị trí trong câu:** `noun phrase` (thường ở số nhiều) — cụm danh từ. Đóng vai trò là ngôn ngữ toán học dùng để định nghĩa hành vi động của hệ thống theo trục thời gian.

**Core meaning — English:** Mathematical formalisms (such as LTL or CTL) using temporal operators (such as "always", "eventually", and "until") to specify how system states must behave over time.

**Core meaning & mental image — Tiếng Việt:** Các đặc tả logic thời gian; hãy hình dung một chiếc đồng hồ thần kỳ với các ký hiệu logic đặc biệt cho phép bạn viết thành luật: "Bất kể tương lai xảy ra chuyện gì, điều tồi tệ X sẽ *không bao giờ* xảy ra; và nếu yêu cầu Y được gửi đi, kết quả Z *chắc chắn sẽ* xảy ra vào một thời điểm nào đó".

**Grammar & collocations:** `encode temporal logic specifications` — mã hóa các đặc tả logic thời gian; `adhere to temporal logic specifications` — tuân thủ các đặc tả logic thời gian; `express via temporal logic specifications` — biểu đạt thông qua các đặc tả logic thời gian.

**Register & nuance:** `mathematical logic & concurrency theory` — công cụ toán học nền tảng do Amir Pnueli đưa vào khoa học máy tính (giải Turing 1996), phân biệt rõ với logic mệnh đề tĩnh (static propositional logic).

**Examples:** `Engineers translated high-level consistency requirements into temporal logic specifications using modal operators to express safety and liveness constraints.` → Các kỹ sư đã dịch các yêu cầu nhất quán cấp cao thành các đặc tả logic thời gian bằng cách sử dụng các toán tử phương thức để biểu đạt các ràng buộc an toàn và tích cực.

**Liên kết tiếng Hàn:** `시제 논리 명세` (時制 論理 明細) — các đặc tả logic thời gian (temporal logic).

---

## 3. state-machine replication /steɪt məˈʃiːn ˌrɛpləˈkeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (thường viết tắt là SMR). Thường làm chủ ngữ hoặc giải pháp kiến trúc trong thiết kế cơ sở dữ liệu phân tán (ví dụ: `implement state-machine replication`).

**Core meaning — English:** A general technique for building fault-tolerant distributed services by running identical deterministic state machines across multiple physical nodes and coordinating inputs via a consensus log.

**Core meaning & mental image — Tiếng Việt:** Sự nhân bản máy trạng thái; hãy hình dung năm viên thư ký mẫn cán ngồi ở năm căn phòng cách biệt, bắt đầu với cùng một cuốn sổ tay trắng; nếu họ cùng nhận được chính xác một thứ tự các mệnh lệnh ghi chép như nhau, thì nội dung trong sổ của cả năm người sẽ vĩnh viễn giống hệt nhau ở từng dấu phẩy.

**Grammar & collocations:** `paradigm of state-machine replication` — hệ hình nhân bản máy trạng thái; `deterministic state-machine replication` — sự nhân bản máy trạng thái tất định; `state-machine replication consensus` — đồng thuận trong nhân bản máy trạng thái.

**Register & nuance:** `core distributed systems theory` — khái niệm kinh điển của Leslie Lamport và Fred Schneider; là nền tảng hoạt động của Paxos, Raft và các blockchain hiện đại.

**Examples:** `Consensus protocols like Raft solve state-machine replication by ensuring that every replica appends identical log entries in strictly the same order.` → Các giao thức đồng thuận như Raft giải quyết bài toán nhân bản máy trạng thái bằng cách bảo đảm rằng mọi bản sao đều nối các mục nhật ký giống hệt nhau theo cùng một thứ tự nghiêm ngặt.

**Liên kết tiếng Hàn:** `상태 머신 복제` (狀態 machine 複製) — sự nhân bản máy trạng thái.

---

## 4. linearizability verification /ˌlɪniərəˈzæbələti ˌvɛrəfəˈkeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường xuất hiện trong kiểm thử mô hình bộ nhớ đồng thời và kiểm định giao thức dữ liệu phân tán.

**Core meaning — English:** The mathematical or algorithmic verification process proving that concurrent execution histories of an object appear to take effect instantaneously at a single linearization point between invocation and response.

**Core meaning & mental image — Tiếng Việt:** Sự kiểm chứng tính tuyến tính hóa; hãy hình dung hàng trăm khách hàng cùng đồng thời rút tiền từ một tài khoản ngân hàng qua ứng dụng điện thoại: việc kiểm chứng này chứng minh bằng toán học rằng hệ thống xử lý các giao dịch đó chuẩn xác như thể tất cả đang đứng xếp thành một hàng dọc trật tự trước một quầy thu ngân duy nhất.

**Grammar & collocations:** `automated linearizability verification` — kiểm chứng tính tuyến tính hóa tự động; `framework for linearizability verification` — khuôn khổ kiểm chứng tính tuyến tính hóa; `guarantee linearizability verification` — bảo đảm việc kiểm chứng tính tuyến tính hóa.

**Register & nuance:** `advanced concurrent algorithms & verification` — tiêu chuẩn nhất quán mạnh nhất (strongest consistency model) dành cho các đối tượng đồng thời (concurrent objects) do Maurice Herlihy và Jeannette Wing định nghĩa.

**Examples:** `Automated linearizability verification tools analyze concurrent traces to detect subtle race conditions that could expose stale reads to distributed clients.` → Các công cụ kiểm chứng tính tuyến tính hóa tự động phân tích các dấu vết thực thi đồng thời để phát hiện các điều kiện chạy đua tinh vi có thể khiến client phân tán đọc phải dữ liệu cũ.

**Liên kết tiếng Hàn:** `선형화 가능성 검증` (線形化 可能性 檢證) — kiểm chứng tính tuyến tính hóa.

---

## 5. safety invariants /ˈseɪfti ɪnˈvɛriənts/

**Loại từ & vị trí trong câu:** `noun phrase` (thường ở số nhiều) — cụm danh từ. Đóng vai trò là các điều kiện tiên quyết không được phép bị phá vỡ trong suốt vòng đời của hệ thống.

**Core meaning — English:** System properties and logical assertions that must evaluate to true across all reachable system states, guaranteeing that "bad things never happen" (e.g., two leaders are never elected in the same term).

**Core meaning & mental image — Tiếng Việt:** Các bất biến an toàn / điều kiện bất biến an toàn; hãy hình dung lan can bảo vệ kiên cố bằng bê tông cốt thép dựng dọc theo rìa vực thẳm: bất kể chiếc xe có cua gấp, trơn trượt hay quay đầu thế nào, nó vĩnh viễn không bao giờ được phép xuyên thủng lan can để rơi xuống vực.

**Grammar & collocations:** `preserve safety invariants` — duy trì các bất biến an toàn; `violate safety invariants` — vi phạm các điều kiện bất biến an toàn; `inductive safety invariants` — các bất biến an toàn mang tính quy nạp.

**Register & nuance:** `formal methods & distributed systems` — phân biệt kinh điển với `liveness properties`: safety khẳng định không có trạng thái xấu nào xảy ra; nếu bị vi phạm, luôn có một dấu vết hữu hạn (finite trace) chỉ ra lỗi.

**Examples:** `The Paxos protocol guarantees safety invariants by ensuring that two conflicting values can never both achieve quorum agreement in the same round.` → Giao thức Paxos bảo đảm các bất biến an toàn bằng cách chắc chắn rằng hai giá trị mâu thuẫn không bao giờ có thể cùng đạt được sự chấp thuận của đa số (quorum) trong cùng một vòng.

**Liên kết tiếng Hàn:** `안전성 불변식` (安全性 不變式) — các bất biến an toàn.

---

## 6. liveness properties /ˈlaɪvnəs ˈprɑpərtiz/

**Loại từ & vị trí trong câu:** `noun phrase` (thường ở số nhiều) — cụm danh từ. Thường song hành cùng `safety invariants` trong các bài nghiên cứu về giao thức mạng.

**Core meaning — English:** Formal specifications asserting that the system will eventually make progress and reach a desired state, stipulating that "something good will eventually happen" (e.g., a pending request is eventually answered).

**Core meaning & mental image — Tiếng Việt:** Các thuộc tính tích cực / đặc tính tiến triển; hãy hình dung bạn bấm nút gọi thang máy: chiếc thang máy không chỉ cần bảo đảm không bao giờ bị rơi tự do (an toàn), mà quan trọng không kém là nó *chắc chắn phải di chuyển* đến đón bạn chứ không thể đứng bất động vĩnh viễn ở tầng một.

**Grammar & collocations:** `verify liveness properties` — kiểm chứng các thuộc tính tích cực; `violation of liveness properties` — sự vi phạm các đặc tính tiến triển; `guarantee liveness properties` — bảo đảm các thuộc tính tích cực.

**Register & nuance:** `temporal logic & distributed algorithms` — khó chứng minh hơn safety vì vi phạm liveness đòi hỏi một chuỗi thực thi vô hạn (infinite execution trace) không bao giờ chạm tới đích (như deadlock hoặc livelock).

**Examples:** `In partially synchronous networks, proving liveness properties requires showing that consensus is guaranteed once message delays fall below a bounded threshold.` → Trong các mạng đồng bộ từng phần, việc chứng minh các thuộc tính tích cực đòi hỏi phải chỉ ra rằng sự đồng thuận được bảo đảm một khi độ trễ thông điệp giảm xuống dưới một ngưỡng giới hạn.

**Liên kết tiếng Hàn:** `활성 속성` (活性 屬性) — các thuộc tính tích cực / đặc tính tiến triển (liveness).

---

## 7. protocol model checking /ˈproʊtəˌkɔl ˈmɑdəl ˈtʃɛkɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ hoặc phương pháp trong các phòng thí nghiệm kiểm định tự động (ví dụ: `employ protocol model checking`).

**Core meaning — English:** An automated formal verification technique that exhaustively explores the discrete state space of a protocol model to verify whether temporal logic properties and invariants hold.

**Core meaning & mental image — Tiếng Việt:** Kiểm tra mô hình giao thức; hãy hình dung một con robot siêu tốc lần mò qua từng nhánh rẽ của một mê cung khổng lồ, thắp sáng từng ngóc ngách để bảo đảm không có bất kỳ con đường nào dẫn tới cái bẫy chết người.

**Grammar & collocations:** `apply protocol model checking` — áp dụng phương pháp kiểm tra mô hình giao thức; `tools for protocol model checking` — các công cụ kiểm tra mô hình giao thức; `explicit-state protocol model checking` — kiểm tra mô hình giao thức theo trạng thái tường minh.

**Register & nuance:** `automated verification technology` — hoàn toàn tự động (algorithmic) và cung cấp phản ví dụ (counterexample) ngay khi phát hiện vi phạm, nhưng dễ vấp phải vấn đề bùng nổ không gian trạng thái.

**Examples:** `By employing protocol model checking via Spin, researchers uncovered a subtle deadlock in the leader reelection logic that human code reviews had missed.` → Bằng cách sử dụng phương pháp kiểm tra mô hình giao thức thông qua Spin, các nhà nghiên cứu đã phát hiện ra một thế bế tắc (deadlock) tinh vi trong logic bầu lại thủ lĩnh mà mắt người soi mã nguồn đã bỏ sót.

**Liên kết tiếng Hàn:** `프로토콜 모델 검사` (protocol model 檢査) — kiểm tra mô hình giao thức.

---

## 8. mechanized proofs /ˈmɛkənaɪzd prufs/

**Loại từ & vị trí trong câu:** `noun phrase` (thường ở số nhiều) — cụm danh từ. Thường xuất hiện trong toán học hình thức, thiết kế hệ điều hành an toàn và trình biên dịch đã xác thực (ví dụ: `construct mechanized proofs`).

**Core meaning — English:** Mathematical proofs formulated in formal logic whose syntactic correctness, deduction steps, and inferences are rigorously verified and checked by a computer program (proof checker).

**Core meaning & mental image — Tiếng Việt:** Các chứng minh được cơ giới hóa / chứng minh kiểm bằng máy tính; hãy hình dung một bản chứng minh toán học dày nghìn trang không được trao cho các giáo sư chấm bằng mắt, mà được đưa qua một chiếc máy quét quang học vi mô kiểm tra từng liên kết logic siêu nhỏ, loại trừ 100% mọi lỗi sơ suất của con người.

**Grammar & collocations:** `develop mechanized proofs` — phát triển các chứng minh được cơ giới hóa; `rely on mechanized proofs` — dựa vào các chứng minh kiểm bằng máy tính; `mechanized proofs of correctness` — các chứng minh đúng đắn được cơ giới hóa.

**Register & nuance:** `formal mathematics & interactive theorem proving` — đỉnh cao của độ tin cậy trong khoa học máy tính; được xây dựng bằng các công cụ như Coq, Isabelle/HOL hay Lean.

**Examples:** `The development team produced mechanized proofs in Coq to establish the complete functional correctness of their distributed transaction manager.` → Nhóm phát triển đã tạo ra các chứng minh được cơ giới hóa bằng Coq để xác lập tính đúng đắn chức năng hoàn chỉnh của bộ quản lý giao dịch phân tán của họ.

**Liên kết tiếng Hàn:** `기계화된 증명` (機械化된 證明) — các chứng minh được cơ giới hóa / kiểm bằng máy.

---

## 9. inductive safety proof /ɪnˈdʌktɪv ˈseɪfti pruf/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là phương pháp cốt lõi để chứng minh một thuộc tính đúng trên không gian trạng thái vô hạn.

**Core meaning — English:** A formal proof demonstrating that an invariant holds in all initial states (base case) and is preserved by every allowable state transition of the system (inductive step).

**Core meaning & mental image — Tiếng Việt:** Chứng minh an toàn bằng quy nạp; hãy hình dung một chuỗi hàng triệu quân cờ domino dựng đứng: bạn chứng minh quân cờ đầu tiên đứng vững (bước cơ sở), và chứng minh nếu quân thứ k đứng vững thì quân thứ k+1 cũng không thể đổ (bước quy nạp), từ đó bảo đảm toàn bộ hàng cờ vĩnh viễn đứng vững.

**Grammar & collocations:** `construct an inductive safety proof` — xây dựng một chứng minh an toàn bằng quy nạp; `steps of an inductive safety proof` — các bước của chứng minh an toàn quy nạp; `inductive safety proof for consensus` — chứng minh an toàn bằng quy nạp cho giao thức đồng thuận.

**Register & nuance:** `formal verification methodology` — nền tảng để vượt qua sự bùng nổ trạng thái; nếu một bất biến có tính quy nạp (inductive), ta không cần phải duyệt qua từng trạng thái cụ thể.

**Examples:** `Writing an inductive safety proof for Raft required specifying auxiliary invariants that constrain how disconnected nodes update their term numbers.` → Việc viết một chứng minh an toàn bằng quy nạp cho Raft đòi hỏi phải chỉ định các bất biến phụ trợ để ràng buộc cách các nút bị ngắt kết nối cập nhật số hiệu nhiệm kỳ của chúng.

**Liên kết tiếng Hàn:** `귀납적 안전성 증명` (歸納的 安全性 證明) — chứng minh an toàn bằng quy nạp.

---

## 10. refinement mapping /rɪˈfaɪnmənt ˈmæpɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường dùng làm công cụ chứng minh bắc cầu giữa đặc tả trừu tượng và hiện thực mã nguồn cụ thể.

**Core meaning — English:** A formal mathematical function that maps concrete, low-level implementation states to abstract specification states, demonstrating that every concrete step simulates a valid abstract step.

**Core meaning & mental image — Tiếng Việt:** Phép ánh xạ làm mịn / ánh xạ cụ thể hóa; hãy hình dung một bản đồ địa lý tỷ lệ lớn (đặc tả trừu tượng) và một bức ảnh vệ tinh chi tiết từng mét vuông (mã nguồn thực tế): phép ánh xạ làm mịn chỉ ra chính xác mỗi tảng đá trên ảnh vệ tinh tương ứng với điểm mốc nào trên bản đồ, chứng minh hệ thống chạy thật không đi lệch bản đồ quy hoạch.

**Grammar & collocations:** `define a refinement mapping` — định nghĩa một phép ánh xạ làm mịn; `prove refinement mapping` — chứng minh phép ánh xạ cụ thể hóa; `refinement mapping between protocol and code` — phép ánh xạ làm mịn giữa giao thức và mã nguồn.

**Register & nuance:** `Abadi-Lamport refinement theory` — phương pháp kinh điển để chứng minh một hệ thống phức tạp đầy rẫy chi tiết tối ưu hóa vẫn trung thực tuyệt đối với mô hình toán học ban đầu.

**Examples:** `The engineers constructed a refinement mapping from their C++ actor implementation to the abstract TLA+ consensus specification.` → Các kỹ sư đã xây dựng một phép ánh xạ làm mịn từ phần triển khai tác tử bằng C++ của họ sang đặc tả đồng thuận trừu tượng bằng TLA+.

**Liên kết tiếng Hàn:** `정제 매핑 / 추상화 사상` (精製 mapping / 寫像) — phép ánh xạ làm mịn / tinh chỉnh.

---

## 11. combinatorial state explosion /kəmˌbaɪnəˈtɔriəl steɪt ɪkˈsploʊʒən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là vật cản thuật toán số một đối với các công cụ kiểm tra mô hình tự động.

**Core meaning — English:** The exponential growth in the number of reachable system states resulting from the interleaving of concurrent processes, message buffers, and failure conditions.

**Core meaning & mental image — Tiếng Việt:** Sự bùng nổ tổ hợp không gian trạng thái; hãy hình dung bàn cờ vua: chỉ sau vài nước đi đầu tiên, số lượng thế cờ khả dĩ đã nhiều hơn số hạt cát trên toàn bộ các sa mạc của Trái Đất, khiến siêu máy tính mạnh nhất cũng bị cạn kiệt bộ nhớ nếu cố duyệt qua từng thế cờ.

**Grammar & collocations:** `suffer from combinatorial state explosion` — chịu sự bùng nổ tổ hợp không gian trạng thái; `mitigate combinatorial state explosion` — giảm thiểu sự bùng nổ tổ hợp trạng thái; `combinatorial state explosion in model checking` — sự bùng nổ trạng thái tổ hợp trong kiểm tra mô hình.

**Register & nuance:** `algorithmic complexity & verification theory` — ranh giới thúc đẩy các nhà nghiên cứu chuyển từ model checking hữu hạn sang các kỹ thuật chứng minh định lý tương tác (interactive theorem proving).

**Examples:** `Exhaustive verification of five consensus replicas failed due to combinatorial state explosion triggered by out-of-order message retransmissions.` → Việc kiểm chứng toàn diện năm bản sao đồng thuận đã thất bại do sự bùng nổ tổ hợp không gian trạng thái bị kích hoạt bởi sự truyền lại thông điệp sai thứ tự.

**Liên kết tiếng Hàn:** `조합론적 상태 폭발` (組合論的 狀態 爆發) — sự bùng nổ tổ hợp không gian trạng thái.

---

## 12. tla+ specification /ˌtiːˌɛlˈeɪ plʌs ˌspɛsəfəˈkeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ hoặc tân ngữ trong thiết kế kiến trúc hệ thống phân tán cấp công nghiệp.

**Core meaning — English:** A formal mathematical description written in TLA+ (Temporal Logic of Actions), used to model concurrent and distributed algorithms and verify their correctness before implementation.

**Core meaning & mental image — Tiếng Việt:** Đặc tả TLA+ (Đặc tả Logic Thời gian của Hành động); hãy hình dung một bản thiết kế cơ khí cực kỳ tinh vi được vẽ hoàn toàn bằng toán học tập hợp thuần khiết, nơi bạn có thể bấm nút chạy mô phỏng để tìm ra các lỗi kiến trúc chết người trước khi đổ hàng triệu đô la vào việc đúc khuôn kim loại.

**Grammar & collocations:** `author a TLA+ specification` — soạn thảo một bản đặc tả TLA+; `verify via TLA+ specification` — kiểm chứng thông qua đặc tả TLA+; `model check a TLA+ specification` — kiểm tra mô hình một bản đặc tả TLA+.

**Register & nuance:** `industry-standard formal specification language` — do Leslie Lamport sáng tạo; được các hãng công nghệ lớn như Amazon Web Services, Microsoft và Intel sử dụng để thiết kế các dịch vụ cốt lõi (S3, DynamoDB).

**Examples:** `Before writing a single line of production code, the cloud infrastructure team authored a comprehensive TLA+ specification of their replication engine.` → Trước khi viết một dòng mã sản xuất nào, nhóm kỹ thuật hạ tầng đám mây đã soạn thảo một bản đặc tả TLA+ toàn diện cho công cụ sao chép của họ.

**Liên kết tiếng Hàn:** `TLA+ 명세` (TLA+ 明細) — đặc tả bằng ngôn ngữ TLA+.

---

## 13. byzantine consensus verification /ˈbɪzənˌtiːn kənˈsɛnsəs ˌvɛrəfəˈkeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường xuất hiện trong nghiên cứu mật mã học, công nghệ sổ cái phân tán và hệ thống phòng thủ hàng không vũ trụ.

**Core meaning — English:** The formal verification of consensus protocols operating under a Byzantine threat model, where adversarial nodes may crash, delay messages, or actively transmit contradictory, malicious data.

**Core meaning & mental image — Tiếng Việt:** Sự kiểm chứng đồng thuận Byzantine; hãy hình dung hội đồng tướng lĩnh vây hãm một thành trì: trong số họ có những kẻ phản bội cố tình gửi mật thư giả mạo và tung tin đồn thất thiệt để chia rẽ quân đội; sự kiểm chứng này chứng minh rằng các tướng trung thành vẫn chắc chắn thống nhất được giờ tấn công đồng loạt.

**Grammar & collocations:** `framework for Byzantine consensus verification` — khuôn khổ kiểm chứng đồng thuận Byzantine; `challenges of Byzantine consensus verification` — những thách thức trong kiểm chứng đồng thuận Byzantine; `execute Byzantine consensus verification` — thực thi việc kiểm chứng đồng thuận Byzantine.

**Register & nuance:** `adversarial distributed systems & cryptography` — mô hình lỗi khắc nghiệt nhất; đòi hỏi giao thức phải chịu được tối thiểu $f < n/3$ nút độc hại trong điều kiện bất đồng bộ.

**Examples:** `The blockchain consortium mandated Byzantine consensus verification to mathematically eliminate vulnerability to double-spending attacks.` → Hiệp hội chuỗi khối đã ủy quyền kiểm chứng đồng thuận Byzantine để loại bỏ hoàn toàn về mặt toán học nguy cơ bị tấn công chi tiêu kép (double-spending).

**Liên kết tiếng Hàn:** `비잔틴 합의 검증` (Byzantine 合意 檢證) — kiểm chứng giao thức đồng thuận Byzantine.

---

## 14. quorum intersection property /ˈkwɔrəm ˌɪntərˈsɛkʃən ˈprɑpərti/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là hòn đá tảng toán học bảo đảm tính an toàn trong mọi thuật toán đồng thuận đa số.

**Core meaning — English:** The fundamental mathematical invariant stating that any two valid quorums of nodes in a distributed system must share at least one non-faulty node in common ($Q_1 \cap Q_2 \neq \emptyset$).

**Core meaning & mental image — Tiếng Việt:** Đặc tính giao nhau của các tập tề tựu (thuộc tính giao điểm quorum); hãy hình dung một căn phòng bỏ phiếu: bất kỳ hai nhóm đa số nào được lập ra cũng luôn có ít nhất một đại biểu trùng lặp tham gia ở cả hai nhóm, ngăn chặn việc hai nhóm tự ý thông qua hai quyết định mâu thuẫn nhau sau lưng người khác.

**Grammar & collocations:** `rely on the quorum intersection property` — dựa vào đặc tính giao nhau của quorum; `guarantee the quorum intersection property` — bảo đảm thuộc tính giao điểm quorum; `quorum intersection property in Paxos` — đặc tính giao nhau của quorum trong Paxos.

**Register & nuance:** `formal consensus theory` — nguyên lý bất biến cốt tử; nếu đặc tính này bị phá vỡ (ví dụ do cấu hình sai số lượng nút), hệ thống sẽ lập tức rơi vào trạng thái chia cắt não (split-brain).

**Examples:** `Paxos maintains single-leader authority precisely because the quorum intersection property guarantees that any new proposal must intersect with the history of previously accepted values.` → Paxos duy trì thẩm quyền của một thủ lĩnh duy nhất chính là nhờ đặc tính giao nhau của các tập tề tựu bảo đảm rằng bất kỳ đề xuất mới nào cũng phải giao cắt với lịch sử của các giá trị đã được chấp nhận trước đó.

**Liên kết tiếng Hàn:** `쿼럼 교집합 속성` (quorum 交集合 屬性) — đặc tính giao nhau của quorum.

---

## 15. fairness constraints /ˈfɛrnəs kənˈstreɪnts/

**Loại từ & vị trí trong câu:** `noun phrase` (thường ở số nhiều) — cụm danh từ. Thường xuất hiện trong đặc tả logic thời gian (ví dụ: weak fairness, strong fairness) để chứng minh tính tiến triển.

**Core meaning — English:** Axiomatic assumptions in temporal logic models specifying that enabled actions will eventually be scheduled or executed, ruling out unrealistic execution paths where a process is starved indefinitely.

**Core meaning & mental image — Tiếng Việt:** Các ràng buộc công bằng; hãy hình dung biển chỉ dẫn đèn giao thông tại một ngã tư đông đúc: quy tắc công bằng bảo đảm rằng nếu chiếc xe của bạn đã đứng đợi ở làn đèn đỏ đủ lâu, hệ thống đèn *chắc chắn phải* chuyển sang màu xanh để bạn đi, chứ không thể ưu tiên mãi cho làn đường đối diện.

**Grammar & collocations:** `under weak fairness constraints` — dưới các ràng buộc công bằng yếu; `stipulate fairness constraints` — quy định các ràng buộc công bằng; `fairness constraints in temporal logic` — các ràng buộc công bằng trong logic thời gian.

**Register & nuance:** `concurrency semantics & liveness verification` — không thể chứng minh liveness nếu thiếu các giả định công bằng này (như $WF(A)$ hoặc $SF(A)$ trong TLA+), vì về mặt lý thuyết bộ lập lịch luôn có thể bỏ quên một tiến trình.

**Examples:** `Without asserting strong fairness constraints on network packet delivery, proving that the election algorithm eventually terminates is impossible.` → Nếu không khẳng định các ràng buộc công bằng mạnh đối với việc chuyển giao gói tin mạng, việc chứng minh thuật toán bầu chọn cuối cùng sẽ kết thúc là điều bất khả thi.

**Liên kết tiếng Hàn:** `공정성 제약 조건` (公正性 制約 條件) — các ràng buộc công bằng.

---

## 16. interactive proof assistant /ˌɪntərˈæktɪv pruf əˈsɪstənt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm công cụ phát triển chính trong toán học hình thức và thẩm định phần mềm tối quan trọng.

**Core meaning — English:** A specialized software environment (such as Coq, Isabelle/HOL, or Lean) providing a formal language to express mathematical assertions and an interactive engine that assists humans in constructing machine-verified proofs.

**Core meaning & mental image — Tiếng Việt:** Phần mềm trợ thủ chứng minh tương tác; hãy hình dung một kỳ thủ cờ vua chơi cờ cùng một máy tính trọng tài siêu thông minh: kỳ thủ đưa ra ý tưởng chiến lược lớn, còn chiếc máy lập tức kiểm tra từng nước đi cụ thể để khẳng định không có bất kỳ nước đi sai luật nào được phép thông qua.

**Grammar & collocations:** `utilize an interactive proof assistant` — sử dụng một phần mềm trợ thủ chứng minh tương tác; `mechanize in an interactive proof assistant` — cơ giới hóa bên trong công cụ trợ thủ chứng minh; `features of an interactive proof assistant` — tính năng của phần mềm trợ thủ chứng minh tương tác.

**Register & nuance:** `formal methods toolchain` — khác biệt với các bộ chứng minh tự động (automated theorem provers / SMT solvers); ở đây con người trực tiếp dẫn dắt cấu trúc chứng minh còn máy tính thẩm tra tính đúng đắn chặt chẽ.

**Examples:** `The researchers used the Coq interactive proof assistant to formalize distributed invariants and extract provably correct executable code.` → Các nhà nghiên cứu đã sử dụng phần mềm trợ thủ chứng minh tương tác Coq để hình thức hóa các bất biến phân tán và trích xuất mã thực thi được chứng minh đúng đắn.

**Liên kết tiếng Hàn:** `대화형 증명 보조기` (對話型 證明 補助器) — phần mềm trợ thủ chứng minh tương tác.

---

## 17. machine-checked soundness /məˈʃiːn tʃɛkt ˈsaʊndnəs/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm vị ngữ hoặc tiêu chuẩn nghiệm thu chất lượng trong bảo mật mật mã và kiểm định phần mềm.

**Core meaning — English:** The highest echelon of epistemic rigor wherein every deductive step of a theorem or safety claim has been validated by an algorithmic kernel, leaving zero room for human oversight.

**Core meaning & mental image — Tiếng Việt:** Tính chuẩn xác đã được máy kiểm định / độ vững chắc được máy chứng thực; hãy hình dung một chiếc két sắt ngân hàng được khóa bằng ba lớp mật mã kỹ thuật số tự động kiểm tra, nơi sự an toàn không phụ thuộc vào lòng tin đối với người gác cổng mà phụ thuộc hoàn toàn vào cấu trúc toán học của ổ khóa.

**Grammar & collocations:** `attain machine-checked soundness` — đạt được tính chuẩn xác đã được máy kiểm định; `guarantee of machine-checked soundness` — sự bảo đảm về độ vững chắc được máy chứng thực; `rely on machine-checked soundness` — dựa vào tính chuẩn xác được kiểm định bằng máy tính.

**Register & nuance:** `formal epistemology & verified systems` — tiêu chuẩn cao hơn "peer-reviewed paper proofs" (chứng minh bằng bút chì trên giấy qua bình duyệt của chuyên gia), vì lịch sử đã chứng minh các bài báo học thuật xuất sắc vẫn chứa đựng những kẽ hở logic tinh vi.

**Examples:** `By achieving machine-checked soundness for their consensus engine, the engineers guaranteed that no unhandled edge case could trigger state divergency.` → Bằng cách đạt được tính chuẩn xác đã được máy kiểm định cho công cụ đồng thuận của mình, các kỹ sư đã bảo đảm rằng không một trường hợp biên không được xử lý nào có thể gây ra sự phân kỳ trạng thái.

**Liên kết tiếng Hàn:** `기계 검증된 건전성` (機械 檢證된 健全性) — tính chuẩn xác / độ vững chắc được máy chứng thực.

---

## 18. reachability analysis /ˌriːtʃəˈbɪləti əˈnæləsɪs/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường xuất hiện trong kiểm tra mô hình đồ thị trạng thái, kiểm tra an toàn giao thức mạng và phân tích tĩnh.

**Core meaning — English:** The algorithmic process of traversing a system’s transition graph to determine whether an undesirable or hazardous state can ever be reached from a designated set of initial states.

**Core meaning & mental image — Tiếng Việt:** Phân tích khả năng vươn tới trạng thái / phân tích tính khả đạt; hãy hình dung bạn cầm đuốc đi tìm tất cả các căn phòng trong một hầm mộ bỏ hoang xem có căn phòng nào chứa khí độc mà người ta có thể vô tình bước chân vào từ cửa chính hay không.

**Grammar & collocations:** `perform reachability analysis` — thực hiện phân tích khả năng vươn tới trạng thái; `reachability analysis algorithms` — các thuật toán phân tích tính khả đạt; `symbolic reachability analysis` — phân tích tính khả đạt mang tính ký hiệu.

**Register & nuance:** `graph theory & automated verification` — kỹ thuật cốt lõi trong model checking; nếu trạng thái lỗi (error state) không thể vươn tới được từ trạng thái khởi tạo, bất biến an toàn được xác lập.

**Examples:** `Symbolic reachability analysis confirmed that the protocol’s error recovery state was completely unreachable during normal quorum configurations.` → Phân tích khả năng vươn tới trạng thái mang tính ký hiệu đã xác nhận rằng trạng thái phục hồi lỗi của giao thức là hoàn toàn bất khả tiếp cận trong các cấu hình quorum thông thường.

**Liên kết tiếng Hàn:** `도달 가능성 분석` (到達 可能性 分析) — phân tích tính khả đạt / khả năng vươn tới trạng thái.

---

## 19. bisimulation equivalence /ˌbaɪˌsɪmjuˈleɪʃən ɪˈkwɪvələns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là quan hệ toán học kiểm tra sự tương đồng hành vi giữa hai mô hình hệ thống chuyển trạng thái.

**Core meaning — English:** A rigorous binary relation between state transition systems associating systems that behave identically, such that one system simulates the steps of the other and vice versa.

**Core meaning & mental image — Tiếng Việt:** Tính tương đương mô phỏng lẫn nhau / tương đương song mô phỏng; hãy hình dung hai diễn viên múa rối đứng sau hai bức màn đen khác nhau: bất kể bạn yêu cầu động tác phức tạp nào, cả hai con rối đều thực hiện các cử chỉ tay chân nhịp nhàng y hệt nhau, khiến người xem từ bên ngoài không thể phân biệt được sự khác biệt giữa hai bộ máy điều khiển.

**Grammar & collocations:** `establish bisimulation equivalence` — xác lập tính tương đương mô phỏng lẫn nhau; `weak bisimulation equivalence` — tương đương song mô phỏng yếu; `prove bisimulation equivalence` — chứng minh tính tương đương song mô phỏng.

**Register & nuance:** `process algebra & theoretical computer science` — khái niệm do Robin Milner và David Park định nghĩa; sâu sắc hơn sự tương đương ngôn ngữ (language equivalence) vì nó bảo toàn toàn bộ cấu trúc phân nhánh và quan hệ đồng thời.

**Examples:** `Proving bisimulation equivalence between the optimized network layer and the abstract transition model guarantees identical external communication semantics.` → Việc chứng minh tính tương đương mô phỏng lẫn nhau giữa tầng mạng được tối ưu hóa và mô hình chuyển trạng thái trừu tượng bảo đảm ngữ nghĩa giao tiếp đối ngoại hoàn toàn đồng nhất.

**Liên kết tiếng Hàn:** `상호모사 동치` (相互模寫 同値) — tính tương đương song mô phỏng (bisimulation equivalence).

---

## 20. invariant strengthening /ɪnˈvɛriənt ˈstrɛŋkθənɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là kỹ thuật quyết định trong việc biến một bất biến thông thường thành một bất biến quy nạp (inductive invariant).

**Core meaning — English:** The deductive process of conjoining additional constraints and auxiliary assertions to a target safety property so that the combined invariant becomes fully inductive.

**Core meaning & mental image — Tiếng Việt:** Sự tăng cường bất biến; hãy hình dung một chiếc áo giáp sắt ban đầu chỉ che phần ngực: khi bước vào trận chiến, bạn gắn thêm giáp vai và giáp cổ (các điều kiện phụ trợ) để khép kín toàn bộ các khe hở, khiến đối phương không thể đâm trúng bất kỳ điểm yếu nào trong suốt trận đánh.

**Grammar & collocations:** `technique of invariant strengthening` — kỹ thuật tăng cường bất biến; `require invariant strengthening` — đòi hỏi sự tăng cường bất biến; `automated invariant strengthening` — sự tăng cường bất biến tự động.

**Register & nuance:** `formal proof methodology` — chìa khóa của chứng minh quy nạp; đa phần các thuộc tính an toàn mong muốn ban đầu không thể tự chứng minh bằng quy nạp (not inductive) mà bắt buộc phải qua bước gia cố này.

**Examples:** `The verification engineer achieved an inductive proof through systematic invariant strengthening, ruling out intermediate states where split-brain conditions could emerge.` → Kỹ sư kiểm chứng đã đạt được một chứng minh quy nạp thông qua sự tăng cường bất biến có hệ thống, loại trừ các trạng thái trung gian nơi các điều kiện chia cắt não có thể xuất hiện.

**Liên kết tiếng Hàn:** `불변식 강화` (不變式 强化) — sự gia cố / tăng cường bất biến.

---

## 21. linearizable execution /ˌlɪniərəˈzaɪzəbəl ˌɛksəˈkjuːʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ hoặc bổ ngữ chỉ hành vi thực thi thực tế của cụm máy chủ phân tán.

**Core meaning — English:** An observed history of concurrent read and write operations across multiple nodes that can be mapped to an equivalent, sequential execution conforming to real-time precedence.

**Core meaning & mental image — Tiếng Việt:** Sự thực thi tuyến tính hóa được; hãy hình dung những sợi dây cước câu cá rối rắm đan chéo vào nhau trong làn nước (các lệnh chạy đồng thời): sự thực thi này chứng minh rằng bạn có thể vuốt thẳng toàn bộ các sợi dây đó thành một đường thẳng tắp duy nhất mà không làm đứt bất kỳ nút thắt thời gian nào.

**Grammar & collocations:** `guarantee linearizable execution` — bảo đảm sự thực thi tuyến tính hóa được; `exhibit linearizable execution` — bộc lộ sự thực thi tuyến tính hóa được; `traces of linearizable execution` — các dấu vết của sự thực thi tuyến tính hóa được.

**Register & nuance:** `distributed systems engineering` — bảo đảm rằng người dùng luôn nhìn thấy trạng thái dữ liệu mới nhất ngay khi lệnh ghi vừa báo hoàn tất, ngăn chặn hiện tượng đọc ngược thời gian.

**Examples:** `Even when two network switches failed simultaneously, the distributed key-value store maintained strictly linearizable execution for all client transactions.` → Ngay cả khi hai bộ chuyển mạch mạng bị hỏng đồng thời, kho lưu trữ khóa - giá trị phân tán vẫn duy trì sự thực thi tuyến tính hóa được một cách nghiêm ngặt cho mọi giao dịch của client.

**Liên kết tiếng Hàn:** `선형화 가능한 실행` (線形化 可能한 實行) — sự thực thi tuyến tính hóa được.

---

## 22. asynchronous network semantics /eɪˈsɪŋkrənəs ˈnɛtˌwɜrk sɪˈmæntɪks/

**Loại từ & vị trí trong câu:** `noun phrase` (thường ở số nhiều) — cụm danh từ. Đóng vai trò là mô hình môi trường truyền thông trong các chứng minh đồng thuận kinh điển.

**Core meaning — English:** Formal behavioral rules modeling a network where messages may be arbitrarily delayed, reordered, or duplicated in transit, but are never corrupted and cannot rely on synchronized clocks.

**Core meaning & mental image — Tiếng Việt:** Ngữ nghĩa mạng bất đồng bộ; hãy hình dung việc gửi thư qua đường bưu điện thời trung cổ giữa các vương quốc: một lá thư có thể đến sau một ngày, một tháng, hoặc bị kẹt nửa năm trên núi tuyết, không ai biết trước lúc nào thư sẽ tới và không có bất kỳ chiếc đồng hồ nào được đồng bộ giữa hai nơi.

**Grammar & collocations:** `under asynchronous network semantics` — dưới ngữ nghĩa mạng bất đồng bộ; `model asynchronous network semantics` — mô hình hóa ngữ nghĩa mạng bất đồng bộ; `challenges of asynchronous network semantics` — thách thức từ ngữ nghĩa mạng bất đồng bộ.

**Register & nuance:** `theoretical distributed systems` — nền tảng của định lý FLP bất khả thi (Fischer, Lynch, Paterson 1985), chứng minh rằng không có thuật toán đồng thuận tất định nào vừa an toàn vừa bảo đảm liveness nếu mạng hoàn toàn bất đồng bộ và có dù chỉ một nút bị sập.

**Examples:** `Designing consensus under pure asynchronous network semantics forces protocols to prioritize safety over liveness to avoid terminating on contradictory values.` → Việc thiết kế cơ chế đồng thuận dưới ngữ nghĩa mạng bất đồng bộ thuần túy buộc các giao thức phải ưu tiên tính an toàn hơn tính tiến triển để tránh kết thúc trên các giá trị mâu thuẫn.

**Liên kết tiếng Hàn:** `비동기 네트워크 의미론` (非同期 network 意味論) — ngữ nghĩa mạng bất đồng bộ.

---

## 23. safety violation trace /ˈseɪfti ˌvaɪəˈleɪʃən treɪs/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường do các công cụ model checker xuất ra khi phát hiện lỗi logic (ví dụ: `generate a safety violation trace`, `analyze the safety violation trace`).

**Core meaning — English:** A concrete, step-by-step sequential sequence of states and actions generated by a verification tool demonstrating precisely how an execution reaches a state that breaks a safety invariant.

**Core meaning & mental image — Tiếng Việt:** Dấu vết vi phạm an toàn / chuỗi phản ví dụ vi phạm; hãy hình dung đoạn video ghi lại toàn bộ vụ trộm từ đầu đến cuối: từng bước chân của kẻ trộm, cách mở khóa cửa và khoảnh khắc chiếc bình quý bị đập vỡ được chiếu chậm từng khung hình để bạn thấy chính xác kẽ hở an ninh nằm ở đâu.

**Grammar & collocations:** `produce a safety violation trace` — tạo ra một dấu vết vi phạm an toàn; `inspect the safety violation trace` — kiểm tra chuỗi phản ví dụ vi phạm an toàn; `minimize the safety violation trace` — rút gọn dấu vết vi phạm an toàn.

**Register & nuance:** `automated debugging & model checking` — còn gọi là phản ví dụ (counterexample); là vũ khí chẩn đoán vô giá giúp kỹ sư tái hiện và sửa chữa các lỗi hiếm gặp mà kiểm thử thủ công không bao giờ bắt được.

**Examples:** `The TLC model checker produced a twenty-step safety violation trace revealing that a split-vote condition enabled two leaders to emerge simultaneously.` → Công cụ kiểm tra mô hình TLC đã tạo ra một dấu vết vi phạm an toàn gồm hai mươi bước, tiết lộ rằng tình trạng phiếu bầu bị chia rẽ đã cho phép hai thủ lĩnh cùng xuất hiện đồng thời.

**Liên kết tiếng Hàn:** `안전성 위반 추적 경로` (安全性 違反 追跡 經路) — dấu vết / chuỗi vi phạm an toàn.

---

## 24. state space exploration /steɪt speɪs ˌɛkspləˈreɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là phương pháp cốt lõi trong thuật toán tìm kiếm của các công cụ xác minh hệ thống.

**Core meaning — English:** The systematic, algorithmic traversal (such as breadth-first or depth-first search) of all reachable configurations of a discrete state system to verify properties or locate bugs.

**Core meaning & mental image — Tiếng Việt:** Sự thám hiểm không gian trạng thái; hãy hình dung việc thám hiểm một hang động phân nhánh vô tận: bạn cử hàng nghìn thiết bị bay tự hành quét sạch từng ngách hang, đánh dấu những nơi đã đi qua để vẽ lại toàn bộ bản đồ hang động mà không bỏ sót bất kỳ hốc tối nào.

**Grammar & collocations:** `exhaustive state space exploration` — sự thám hiểm không gian trạng thái toàn diện; `prune state space exploration` — tỉa bớt các nhánh thám hiểm không gian trạng thái; `symbolic state space exploration` — sự thám hiểm không gian trạng thái mang tính ký hiệu.

**Register & nuance:** `computational logic & model checking` — thường kết hợp với các kỹ thuật giảm thứ tự bộ phận (partial order reduction) hoặc đối xứng (symmetry reduction) để kiểm soát tài nguyên tính toán.

**Examples:** `Parallelized state space exploration across a compute cluster allowed engineers to verify the protocol up to a bound of ten concurrent worker nodes.` → Sự thám hiểm không gian trạng thái song song trên một cụm máy tính đã cho phép các kỹ sư kiểm chứng giao thức lên tới giới hạn mười nút xử lý đồng thời.

**Liên kết tiếng Hàn:** `상태 공간 탐색` (狀態 空間 探索) — sự thám hiểm / tìm kiếm không gian trạng thái.

---

## 25. proof obligations /pruf ˌɑbləˈɡeɪʃənz/

**Loại từ & vị trí trong câu:** `noun phrase` (thường ở số nhiều) — cụm danh từ. Thường do các công cụ thẩm định tự động sinh ra khi kiểm tra tính đúng đắn của mã nguồn hoặc đặc tả.

**Core meaning — English:** Specific mathematical lemmas, verification conditions, or logical goals that must be formally discharged to prove that a program or algorithm satisfies its formal specification.

**Core meaning & mental image — Tiếng Việt:** Các trách vụ chứng minh / nghĩa vụ chứng minh; hãy hình dung một bản hợp đồng bảo hiểm quy định rõ mười hai điều khoản loại trừ rủi ro: để được bồi thường, luật sư của bạn bắt buộc phải nộp đủ mười hai tập hồ sơ chứng cứ độc lập để giải tỏa từng nghĩa vụ một, không được phép thiếu sót dù chỉ một văn bản.

**Grammar & collocations:** `discharge proof obligations` — giải tỏa các trách vụ chứng minh; `generate proof obligations` — sinh ra các nghĩa vụ chứng minh; `unresolved proof obligations` — các trách vụ chứng minh chưa được giải quyết.

**Register & nuance:** `formal verification & program correctness` — thuật ngữ kinh điển trong phương pháp B (B-Method), SPARK Ada và Dafny; mỗi điều kiện tiền đề, hậu đề và bất biến vòng lặp đều sinh ra các proof obligations tương ứng.

**Examples:** `The automated verification engine generated over four hundred proof obligations, all of which were successfully discharged by the SMT solver.` → Bộ máy kiểm chứng tự động đã sinh ra hơn bốn trăm trách vụ chứng minh, tất cả đều được bộ giải quyết SMT giải tỏa thành công.

**Liên kết tiếng Hàn:** `증명 책무 / 증명 의무` (證明 責務 / 義務) — các trách vụ / nghĩa vụ chứng minh.

---

## Review in context (Part 1: Mathematical Specification and Invariant Proofs)

In the design of modern distributed systems, relying solely on empirical test suites is insufficient; mission-critical infrastructure mandates rigorous **formal protocol verification**. Engineers specify system dynamics using rigorous **temporal logic specifications**, capturing state transitions through precise temporal operators. A foundational application of this methodology is coordinating fault-tolerant **state-machine replication**, where multiple physical nodes must process inputs in strictly the same order. To guarantee transactional consistency across concurrent operations, architects prioritize automated **linearizability verification**, demonstrating that read and write operations take effect instantaneously. Throughout every possible execution path, the system must rigidly preserve foundational **safety invariants**, ensuring that catastrophic errors, such as split-brain leadership, can never materialize. In tandem with safety guarantees, protocols must satisfy vital **liveness properties**, proving mathematically that client requests will make progress and eventually terminate. For tractable algorithmic models, teams conduct automated **protocol model checking**, exploring reachable configurations to detect edge-case anomalies. Where state spaces are unbounded, mathematicians develop **mechanized proofs**, allowing algorithmic proof checkers to validate logical deductions. A cornerstone of this manual rigor is the **inductive safety proof**, which establishes that system properties hold in the initial state and survive every allowable transition. Bridging high-level mathematical abstractions and concrete software requires establishing a formal **refinement mapping**, proving that production source code strictly simulates the verified specification. Without structured verification, attempting to analyze concurrent architectures triggers a crippling **combinatorial state explosion**, overflowing computational memory. Consequently, distributed systems engineers routinely author an abstract **tla+ specification**, catching critical concurrency flaws prior to writing production code.

**Bản dịch tiếng Việt:**

Trong thiết kế các hệ thống phân tán hiện đại, việc chỉ dựa vào các bộ kiểm thử thực nghiệm là hoàn toàn không đủ; cơ sở hạ tầng tối quan trọng bắt buộc phải trải qua quy trình **sự kiểm chứng hình thức giao thức** nghiêm ngặt. Các kỹ sư chỉ định các động lực hệ thống bằng cách sử dụng **các đặc tả logic thời gian** chuẩn xác, ghi lại các bước chuyển trạng thái thông qua các toán tử thời gian chính xác. Một ứng dụng nền tảng của phương pháp luận này là điều phối **sự nhân bản máy trạng thái** chịu lỗi, nơi nhiều nút vật lý phải xử lý các đầu vào theo đúng một thứ tự nghiêm ngặt. Để bảo đảm tính nhất quán giao dịch trên các thao tác đồng thời, các kiến trúc sư ưu tiên **sự kiểm chứng tính tuyến tính hóa** tự động, chứng minh rằng các thao tác đọc và ghi có hiệu lực tức thời. Xuyên suốt mọi đường dẫn thực thi khả dĩ, hệ thống phải duy trì một cách cứng rắn **các bất biến an toàn** nền tảng, bảo đảm rằng các lỗi thảm họa, chẳng hạn như tình trạng chia cắt não có hai thủ lĩnh, không bao giờ có thể thành hiện thực. Song hành cùng các bảo đảm an toàn, các giao thức phải đáp ứng **các thuộc tính tích cực** sống còn, chứng minh bằng toán học rằng các yêu cầu của client sẽ đạt được tiến triển và cuối cùng sẽ hoàn tất. Đối với các mô hình thuật toán trong phạm vi xử lý được, các nhóm tiến hành **kiểm tra mô hình giao thức** tự động, thám hiểm các cấu hình khả đạt để phát hiện các dị thường ở trường hợp biên. Ở những nơi không gian trạng thái là vô hạn, các nhà toán học phát triển **các chứng minh được cơ giới hóa**, cho phép các công cụ kiểm tra chứng minh bằng thuật toán thẩm định các suy luận logic. Hòn đá tảng của sự khắt khe thủ công này là **chứng minh an toàn bằng quy nạp**, giúp xác lập rằng các đặc tính hệ thống giữ vững ở trạng thái ban đầu và đứng vững qua mọi bước chuyển dịch hợp lệ. Việc kết nối giữa các trừu tượng toán học cấp cao và phần mềm cụ thể đòi hỏi phải xác lập một **phép ánh xạ làm mịn** hình thức, chứng minh rằng mã nguồn sản xuất mô phỏng một cách nghiêm ngặt đặc tả đã được kiểm chứng. Nếu thiếu đi sự kiểm chứng có cấu trúc, việc cố gắng phân tích các kiến trúc đồng thời sẽ gây ra **sự bùng nổ tổ hợp không gian trạng thái** làm tê liệt hệ thống, tràn ngập bộ nhớ tính toán. Hệ quả là, các kỹ sư hệ thống phân tán thường xuyên soạn thảo một **đặc tả TLA+** trừu tượng, phát hiện sớm các lỗi đồng thời nguy hiểm trước khi bắt tay vào viết mã sản xuất.

---

## Review in context (Part 2: Mechanized Consensus and Liveness Guarantees)

Verifying consensus in adversarial environments introduces extreme complexity, necessitating specialized **byzantine consensus verification** to ensure resilience against malicious nodes. The bedrock of fault-tolerant agreement across partitions is the **quorum intersection property**, which guarantees that any two quorums overlap by at least one non-faulty replica. Proving that an algorithm eventually elects a leader under these conditions requires formalizing axiomatic **fairness constraints**, precluding scenarios where network schedulers perpetually starve honest nodes. To construct airtight mathematical arguments, researchers employ an **interactive proof assistant**, guiding software checkers through complex deductive steps. This painstaking methodology achieves certified **machine-checked soundness**, eliminating human bias and confirming that no edge cases remain unexamined. During earlier phases of model validation, automated tools carry out exhaustive **reachability analysis**, determining whether unhandled failure states are reachable from initial states. Proving behavioral equivalence between optimized network implementations and abstract mathematical specifications relies on establishing strict **bisimulation equivalence**. Because raw safety assertions are rarely inductive on their own, verification engineers engage in systematic **invariant strengthening**, adding auxiliary invariants that rule out unreachable danger zones. This mathematical rigor guarantees **linearizable execution** for all client operations, ensuring that distributed registers behave identically to a single centralized memory cell. These guarantees must hold even when exposed to messy **asynchronous network semantics**, where network delays are unbounded and physical clocks drift arbitrarily. When automated verification detects a violation, the model checker outputs a detailed **safety violation trace**, allowing developers to diagnose the exact sequence of events triggering the defect. Orchestrating distributed clusters enables massive **state space exploration**, systematically validating billions of operational configurations. By methodically discharging all generated **proof obligations**, engineers achieve absolute mathematical confidence in the unshakeable correctness of their distributed consensus systems.

**Bản dịch tiếng Việt:**

Việc kiểm chứng cơ chế đồng thuận trong các môi trường đối kháng đem lại độ phức tạp cực hạn, đòi hỏi **sự kiểm chứng đồng thuận Byzantine** chuyên biệt để bảo đảm khả năng chống chịu trước các nút độc hại. Hòn đá tảng của sự thống nhất chịu lỗi qua các phân vùng là **đặc tính giao nhau của các tập tề tựu**, bảo đảm rằng bất kỳ hai nhóm quorum nào cũng giao nhau ở ít nhất một bản sao không bị lỗi. Việc chứng minh rằng một thuật toán cuối cùng sẽ bầu ra được một thủ lĩnh trong các điều kiện này đòi hỏi phải hình thức hóa **các ràng buộc công bằng** mang tính tiên đề, ngăn chặn các kịch bản nơi các bộ lập lịch mạng vĩnh viễn bỏ đói các nút trung thực. Để xây dựng các lập luận toán học kín kẽ không tì vết, các nhà nghiên cứu sử dụng một **phần mềm trợ thủ chứng minh tương tác**, dẫn dắt các bộ kiểm tra phần mềm đi qua các bước suy luận phức tạp. Phương pháp luận công phu này đạt được **tính chuẩn xác đã được máy kiểm định** được chứng thực, loại bỏ định kiến của con người và xác nhận rằng không có trường hợp biên nào bị bỏ sót không xem xét. Trong các giai đoạn trước đó của việc thẩm định mô hình, các công cụ tự động tiến hành **phân tích khả năng vươn tới trạng thái** toàn diện, xác định xem các trạng thái lỗi không được xử lý có thể vươn tới được từ các trạng thái ban đầu hay không. Việc chứng minh sự tương đương về hành vi giữa các triển khai mạng được tối ưu hóa và các đặc tả toán học trừu tượng dựa vào việc xác lập **tính tương đương mô phỏng lẫn nhau** nghiêm ngặt. Bởi vì các khẳng định an toàn thô hiếm khi tự thân mang tính quy nạp, các kỹ sư kiểm chứng tham gia vào **sự tăng cường bất biến** có hệ thống, bổ sung các bất biến phụ trợ để loại trừ các vùng nguy hiểm bất khả đạt. Sự khắt khe toán học này bảo đảm **sự thực thi tuyến tính hóa được** cho tất cả các thao tác của client, chắc chắn rằng các thanh ghi phân tán hành xử y hệt như một ô nhớ tập trung duy nhất. Những bảo đảm này phải giữ vững ngay cả khi tiếp xúc với **ngữ nghĩa mạng bất đồng bộ** đầy hỗn loạn, nơi độ trễ mạng là không giới hạn và đồng hồ vật lý trôi dạt tùy tiện. Khi quá trình kiểm chứng tự động phát hiện vi phạm, công cụ kiểm tra mô hình sẽ xuất ra một **dấu vết vi phạm an toàn** chi tiết, cho phép các nhà phát triển chẩn đoán chính xác chuỗi sự kiện gây ra khiếm khuyết. Việc điều phối các cụm phân tán cho phép **sự thám hiểm không gian trạng thái** quy mô lớn, xác thực có hệ thống hàng tỷ cấu hình vận hành. Bằng cách giải tỏa có phương pháp tất cả **các trách vụ chứng minh** được sinh ra, các kỹ sư đạt được niềm tin toán học tuyệt đối vào tính đúng đắn không thể lay chuyển của các hệ thống đồng thuận phân tán của mình.
