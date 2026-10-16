# C1 Vocabulary 02 — Automated model checking, linear temporal logic (LTL), and state space explosion mitigations

Nhóm từ vựng C1 này tập trung vào các kỹ thuật kiểm định mô hình tự động (automated model checking), lý thuyết logic thời gian (linear-time temporal logic & computation tree logic), mô hình hóa hệ thống chuyển trạng thái, giải pháp đối phó với sự bùng nổ không gian trạng thái (state space explosion), giản đồ quyết định nhị phân (binary decision diagrams), phương pháp giảm thứ tự bộ phận (partial order reduction) và phân tích tạo phản ví dụ trong kiểm chứng hình thức cho phần cứng và phần mềm an toàn tối hạn.

---

## 1. linear-time temporal logic /ˈlɪniər taɪm ˈtɛmpərəl ˈlɑdʒɪk/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (viết tắt: LTL). Thường làm chủ ngữ chỉ ngôn ngữ hình thức biểu diễn hành vi hệ thống hoặc tân ngữ sau `specify in`, `translate into`, `verify using`.

**Core meaning — English:** A formal modal temporal logic where time is modeled as a linear sequence of states extending infinitely into the future, enabling the mathematical specification of system execution traces.

**Core meaning & mental image — Tiếng Việt:** Logic thời gian tuyến tính (LTL). Hãy hình dung thời gian như một thước phim duy nhất chạy dài vô tận về tương lai; từng khung hình nối tiếp nhau theo một đường thẳng duy nhất và LTL cho phép bạn đặt ra các mệnh đề khẳng định như “nếu nút này được bấm ở khung hình A, thì đèn báo chắc chắn phải sáng ở một khung hình B nào đó sau đó”.

**Grammar & collocations:** `specify system requirements in linear-time temporal logic` — đặc tả các yêu cầu hệ thống trong logic thời gian tuyến tính; `express liveness properties using linear-time temporal logic` — diễn đạt các tính chất sống động bằng logic thời gian tuyến tính; `linear-time temporal logic model checking` — kiểm tra mô hình logic thời gian tuyến tính.

**Register & nuance:** Ngôn ngữ đặc tả toán học chuẩn mực trong kiểm chứng hình thức (*formal verification*). Phân biệt với *computation tree logic* (CTL xét thời gian dạng cây phân nhánh rẽ nhiều ngả); LTL nhìn hệ thống như một tập hợp các chuỗi đường chạy độc lập (*traces*).

**Examples:** `Engineers formulated safety invariants using linear-time temporal logic to mathematically guarantee that mutual exclusion was never violated across concurrent threads.` → Các kỹ sư đã xây dựng các bất biến an toàn bằng logic thời gian tuyến tính để bảo đảm bằng toán học rằng sự loại trừ tương hỗ không bao giờ bị vi phạm giữa các luồng đồng thời.

**Liên kết tiếng Hàn:** `선형 시간 시제 논리` (線形 時間 時制 論理) — logic thời gian tuyến tính (LTL).

---

## 2. computation tree logic /ˌkɑmpjəˈteɪʃən tri ˈlɑdʒɪk/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (viết tắt: CTL). Thường làm chủ ngữ chỉ hệ logic phân nhánh hoặc tân ngữ sau `formulate in`, `evaluate using`, `support`.

**Core meaning — English:** A branching-time temporal logic where execution structures are represented as infinite rooted trees, allowing assertions across all possible futures (A) or at least one prospective branch (E).

**Core meaning & mental image — Tiếng Việt:** Logic cây tính toán; logic thời gian phân nhánh (CTL). Hãy hình dung tương lai không phải là một con đường thẳng đơn độc mà là một cái cây khổng lồ rẽ ra vô số cành nhánh tại mỗi ngã rẽ; CTL cho phép bạn đặt câu hỏi: “Liệu có tồn tại ít nhất MỘT nhánh rẽ (E) nào đó dẫn tới trạng thái an toàn, hay TẤT CẢ mọi nhánh rẽ (A) đều phải đạt tới đích?”.

**Grammar & collocations:** `formula expressed in computation tree logic` — công thức được biểu diễn trong logic cây tính toán; `computation tree logic model checking algorithm` — thuật toán kiểm tra mô hình logic cây tính toán; `quantify branching paths in computation tree logic` — định lượng các đường phân nhánh trong logic cây tính toán.

**Register & nuance:** Ngôn ngữ nền tảng của các công cụ kiểm chứng mô hình biểu tượng như SMV/NuSMV. Trong khi LTL chỉ có thể nói về các chuỗi đơn lẻ, CTL sử dụng các lượng từ đường dẫn (*path quantifiers* E và A) đi kèm với các toán tử thời gian (X, F, G, U).

**Examples:** `Using computation tree logic, the verification team verified that from every reachable operational state, there always exists an execution path that successfully resets the flight controller.` → Bằng cách sử dụng logic cây tính toán, nhóm kiểm chứng đã xác minh rằng từ mọi trạng thái vận hành có thể đạt tới, luôn luôn tồn tại một đường thực thi có thể thiết lập lại bộ điều khiển bay thành công.

**Liên kết tiếng Hàn:** `계산 트리 논리` (計算 Tree 論理) — logic cây tính toán (CTL).

---

## 3. temporal logic assertion /ˈtɛmpərəl ˈlɑdʒɪk əˈsɜrʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `write`, `validate`, `synthesize` hoặc làm chủ ngữ mô tả yêu cầu hành vi cần chứng minh.

**Core meaning — English:** A mathematically formalized behavioral statement written in temporal logic syntax specifying strict rules that system state transitions must satisfy over time.

**Core meaning & mental image — Tiếng Việt:** Khẳng định logic thời gian; mệnh đề xác nhận logic thời gian. Hãy hình dung một bản hợp đồng điện tử bất di bất dịch được cài sẵn vào bộ vi xử lý: bản hợp đồng này liên tục soi xét từng nhịp xung đồng hồ để bảo đảm rằng chiếc tàu lượn siêu tốc không bao giờ được phép mở chốt an toàn khi đang chạy trên đường ray dốc.

**Grammar & collocations:** `formalize a temporal logic assertion` — hình thức hóa một khẳng định logic thời gian; `synthesize a temporal logic assertion` — tổng hợp một mệnh đề xác nhận logic thời gian; `satisfy every temporal logic assertion` — thỏa mãn mọi khẳng định logic thời gian.

**Register & nuance:** Khái niệm cốt lõi trong quy trình kiểm chứng dựa trên khẳng định (*assertion-based verification - ABV*) theo chuẩn SystemVerilog Assertions (SVA) hoặc PSL. Khác với câu lệnh assert kiểm tra tức thời trong code thông thường, mệnh đề này theo dõi chuỗi hành vi kéo dài qua nhiều chu kỳ xung nhịp (*clock cycles*).

**Examples:** `The hardware designer added a temporal logic assertion stipulating that any bus request signal must receive an acknowledgment within exactly three clock cycles.` → Kỹ sư thiết kế phần cứng đã thêm một khẳng định logic thời gian quy định rằng bất kỳ tín hiệu yêu cầu bus nào cũng phải nhận được tín hiệu xác nhận trong đúng ba chu kỳ xung nhịp.

**Liên kết tiếng Hàn:** `시제 논리 단언` (時制 論理 斷言) — khẳng định/mệnh đề logic thời gian.

---

## 4. state transition system /steɪt trænˈzɪʃən ˈsɪstəm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ mô tả cấu trúc mô hình hoặc tân ngữ sau `model as`, `construct`, `formalize`.

**Core meaning — English:** A formal mathematical structure comprising a set of states, an initial state set, and a transition relation defining permitted instantaneous movements from one system state to another.

**Core meaning & mental image — Tiếng Việt:** Hệ thống chuyển trạng thái. Hãy hình dung một trò chơi cờ bàn khổng lồ: mỗi ô cờ đại diện cho một trạng thái cụ thể của máy tính (giá trị các biến và thanh ghi), và các mũi tên nối giữa các ô cờ là các nước đi hợp lệ mà hệ thống được phép thực hiện khi có một sự kiện kích hoạt.

**Grammar & collocations:** `model the software as a state transition system` — mô hình hóa phần mềm như một hệ thống chuyển trạng thái; `state transition system dynamics` — động lực học của hệ thống chuyển trạng thái; `reachable states in a state transition system` — các trạng thái có thể tiếp cận được trong một hệ thống chuyển trạng thái.

**Register & nuance:** Mô hình toán học cơ sở cho mọi thuật toán kiểm chứng hình thức. Thường được định nghĩa hình thức dưới dạng một bộ 4 yếu tố $(S, S_0, R, L)$, là biểu diễn trừu tượng của toàn bộ hành vi máy móc trước khi áp dụng thuật toán kiểm tra.

**Examples:** `Before initiating verification, the autopilot control firmware was compiled into a discrete state transition system capturing every sensor polling loop.` → Trước khi bắt đầu kiểm chứng, phần sụn điều khiển lái tự động đã được biên dịch thành một hệ thống chuyển trạng thái rời rạc nắm bắt toàn bộ vòng lặp thăm dò cảm biến.

**Liên kết tiếng Hàn:** `상태 전이 시스템` (狀態 轉移 System) — hệ thống chuyển trạng thái.

---

## 5. state space explosion /steɪt speɪs ɪkˈsploʊʒən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ diễn giải trở ngại tính toán hoặc tân ngữ sau `mitigate`, `suffer from`, `combat`.

**Core meaning — English:** The exponential growth in the number of global system states that occurs when multiple concurrent components or state variables are combined, frequently exhausting computer memory during verification.

**Core meaning & mental image — Tiếng Việt:** Sự bùng nổ không gian trạng thái. Hãy hình dung mỗi khi bạn gắn thêm một công tắc bóng đèn 2 chiều vào căn nhà, số lượng kịch bản bật-tắt tăng gấp đôi; nếu bạn ghép 100 công tắc lại với nhau, số lượng kịch bản trạng thái sẽ vọt lên tới $2^{100}$, lớn hơn số nguyên tử trong toàn bộ vũ trụ, khiến máy tính nổ tung bộ nhớ ngay lập tức.

**Grammar & collocations:** `mitigate state space explosion` — giảm thiểu sự bùng nổ không gian trạng thái; `suffer from state space explosion` — chịu ảnh hưởng của sự bùng nổ không gian trạng thái; `state space explosion problem` — bài toán bùng nổ không gian trạng thái.

**Register & nuance:** Thách thức lý thuyết và thực tiễn lớn nhất trong lĩnh vực kiểm chứng mô hình tự động (*model checking*). Đây là lý do tại sao các phương pháp kiểm tra duyệt trạng thái tường minh (*explicit-state*) bị giới hạn nghiêm trọng và đòi hỏi các giải pháp biểu tượng hoặc rút gọn trạng thái.

**Examples:** `When analyzing a twenty-node distributed database, asynchronous message queues triggered severe state space explosion, overwhelming the server's sixty-four gigabytes of RAM.` → Khi phân tích một cơ sở dữ liệu phân tán hai mươi nút, các hàng đợi tin nhắn bất đồng bộ đã kích hoạt sự bùng nổ không gian trạng thái nghiêm trọng, làm tràn ngập sáu mươi tư gigabyte RAM của máy chủ.

**Liên kết tiếng Hàn:** `상태 공간 폭발` (狀態 空間 爆發) — sự bùng nổ không gian trạng thái.

---

## 6. binary decision diagram /ˈbaɪnəri dɪˈsɪʒən ˈdaɪəˌɡræm/

**Loại từ & vị trí trong câu:** `countable noun phrase` (viết tắt: BDD). Thường làm tân ngữ sau `construct`, `manipulate`, `traverse` hoặc làm chủ ngữ biểu thị cấu trúc dữ liệu đồ thị hàm Boolean.

**Core meaning — English:** A directed acyclic graph data structure used to represent and efficiently manipulate Boolean logic functions, consisting of decision nodes and two terminal sinks labeled 0 and 1.

**Core meaning & mental image — Tiếng Việt:** Giản đồ quyết định nhị phân (BDD). Hãy hình dung một sơ đồ dòng chảy hình tháp: ở đỉnh trên cùng bạn hỏi biến X là đúng hay sai; rẽ nhánh sang trái nếu sai (0) và sang phải nếu đúng (1), tiếp tục đi qua các tầng câu hỏi cho đến khi rơi trúng ô kết luận cuối cùng là 0 hoặc 1; sơ đồ này gộp tất cả các nhánh trùng lặp lại để tiết kiệm bộ nhớ tối đa.

**Grammar & collocations:** `construct a binary decision diagram` — xây dựng một giản đồ quyết định nhị phân; `represent Boolean functions with a binary decision diagram` — biểu diễn các hàm Boolean bằng giản đồ quyết định nhị phân; `traverse a binary decision diagram` — duyệt qua một giản đồ quyết định nhị phân.

**Register & nuance:** Cấu trúc dữ liệu mang tính cách mạng trong thiết kế tự động hóa điện tử (EDA) và kiểm định hình thức do Randal Bryant hoàn thiện. Cho phép biểu diễn các hàm logic cực kỳ phức tạp mà các bảng chân trị (*truth tables*) không thể xử lý nổi.

**Examples:** `By encoding the complex transition relations as a compact binary decision diagram, the model checker evaluated trillions of logical combinations in mere seconds.` → Bằng cách mã hóa các quan hệ chuyển đổi phức tạp thành một giản đồ quyết định nhị phân nhỏ gọn, bộ kiểm tra mô hình đã đánh giá hàng nghìn tỷ tổ hợp logic chỉ trong vài giây.

**Liên kết tiếng Hàn:** `이진 결정 다이어그램` (二進 決定 Diagram) — giản đồ quyết định nhị phân (BDD).

---

## 7. reduced ordered binary decision diagram /rɪˈdust ˈɔrdərd ˈbaɪnəri dɪˈsɪʒən ˈdaɪəˌɡræm/

**Loại từ & vị trí trong câu:** `countable noun phrase` (viết tắt: ROBDD). Thường làm chủ ngữ chỉ dạng biểu diễn chuẩn tắc hoặc làm tân ngữ sau `generate`, `canonicalize`, `optimize`.

**Core meaning — English:** A canonical binary decision diagram with a strict variable ordering where redundant nodes and isomorphic subgraphs are systematically eliminated, ensuring a unique mathematical representation for every Boolean function.

**Core meaning & mental image — Tiếng Việt:** Giản đồ quyết định nhị phân có thứ tự thu gọn (ROBDD). Hãy hình dung một chiếc cây pha lê được gọt giũa hoàn hảo theo một thứ tự biến nghiêm ngặt: bất kỳ cành nhánh nào lặp lại y hệt nhau đều bị nhập làm một, và bất kỳ nút nào mà chọn đường nào cũng dẫn tới cùng một kết quả đều bị loại bỏ; kết quả là hai hàm logic giống nhau sẽ luôn tạo ra đúng một hình dạng pha lê duy nhất không thể nhầm lẫn.

**Grammar & collocations:** `generate a reduced ordered binary decision diagram` — tạo một giản đồ quyết định nhị phân có thứ tự thu gọn; `canonical property of a reduced ordered binary decision diagram` — tính chất chuẩn tắc của một giản đồ quyết định nhị phân có thứ tự thu gọn; `variable ordering in a reduced ordered binary decision diagram` — thứ tự biến trong một giản đồ quyết định nhị phân có thứ tự thu gọn.

**Register & nuance:** Tính chuẩn tắc (*canonicity*) là điểm mấu chốt: việc kiểm tra tính tương đương của hai hàm Boolean $(f \equiv g)$ chỉ đơn giản là so sánh con trỏ đỉnh đồ thị trong bộ nhớ $(O(1))$, giải phóng sức mạnh vô song cho kiểm chứng mô hình biểu tượng.

**Examples:** `Because every Boolean formula maps to a unique reduced ordered binary decision diagram under a fixed variable ordering, functional equivalence checking became computationally trivial.` → Vì mọi công thức Boolean đều ánh xạ tới một giản đồ quyết định nhị phân có thứ tự thu gọn duy nhất dưới một thứ tự biến cố định, việc kiểm tra tính tương đương chức năng đã trở nên cực kỳ đơn giản về mặt tính toán.

**Liên kết tiếng Hàn:** `축약 순서화 이진 결정 다이어그램` (縮約 順序化 二進 決定 Diagram) — giản đồ quyết định nhị phân có thứ tự thu gọn (ROBDD).

---

## 8. counterexample generation /ˈkaʊntərɪɡˌzæmpəl ˌdʒɛnəˈreɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ chỉ tính năng chẩn đoán lỗi hoặc làm tân ngữ sau `provide`, `automate`, `rely on`.

**Core meaning — English:** The automated synthesis of a concrete execution trace produced by a model checker demonstrating precisely how and when a system violates a specified formal property.

**Core meaning & mental image — Tiếng Việt:** Sự tạo phản ví dụ; tạo dấu vết phản chứng lỗi. Hãy hình dung một camera hành trình siêu thông minh: khi hệ thống vi phạm một điều luật an toàn, máy tính không chỉ báo “có lỗi”, mà in ra từng bước đi chi tiết: “Bước 1: cảm biến A gửi tín hiệu; Bước 2: tác vụ B ngắt quãng; Bước 3: bộ nhớ bị tràn”; một kịch bản phạm tội hoàn hảo được tái hiện để lập trình viên gỡ lỗi ngay lập tức.

**Grammar & collocations:** `automate counterexample generation` — tự động hóa việc tạo phản ví dụ; `counterexample generation capability` — năng lực tạo dấu vết phản ví dụ; `debug concurrency bugs using counterexample generation` — gỡ lỗi đồng thời bằng cách sử dụng dấu vết tạo phản ví dụ.

**Register & nuance:** Ưu thế vượt trội lớn nhất của *model checking* so với chứng minh định lý tự động (*theorem proving*). Thay vì chỉ đưa ra kết luận phủ định trừu tượng, nó cung cấp một vết thực thi cụ thể (*execution trace*) có thể nạp thẳng vào trình gỡ lỗi.

**Examples:** `When the verification run failed, the tool's counterexample generation supplied a thirteen-step trace illustrating an elusive race condition in the cache coherence module.` → Khi lượt chạy kiểm chứng thất bại, tính năng tạo phản ví dụ của công cụ đã cung cấp một dấu vết mười ba bước minh họa một điều kiện tranh chấp lắt léo trong mô-đun gắn kết bộ nhớ đệm.

**Liên kết tiếng Hàn:** `반례 생성` (反例 生成) — sự tạo phản ví dụ / tạo chứng cứ phản biện.

---

## 9. counterexample-guided abstraction refinement /ˈkaʊntərɪɡˌzæmpəl ˈɡaɪdɪd æbˈstrækʃən rɪˈfaɪnmənt/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (viết tắt: CEGAR). Thường làm chủ ngữ chỉ phương pháp luận kiểm chứng hoặc tân ngữ sau `implement`, `deploy`, `leverage`.

**Core meaning — English:** An iterative formal verification paradigm that verifies a simplified abstract model, checks whether detected counterexamples are genuine or spurious, and automatically refines the abstraction level until the property is proven or a true defect is found.

**Core meaning & mental image — Tiếng Việt:** Tinh chế trừu tượng hóa dựa trên phản ví dụ (CEGAR). Hãy hình dung một thám tử nhìn vào bản đồ phác thảo thô sơ của một tòa nhà; nếu phát hiện nghi can có thể trốn thoát qua một bức tường giả (phản ví dụ giả mạo - *spurious*), thám tử lập tức vẽ thêm chi tiết các cánh cửa và ổ khóa tại đúng vị trí đó, lặp đi lặp lại cho đến khi tìm ra lỗ hổng trốn thoát thật sự hoặc chứng minh tòa nhà an toàn tuyệt đối.

**Grammar & collocations:** `implement counterexample-guided abstraction refinement` — triển khai tinh chế trừu tượng hóa dựa trên phản ví dụ; `the loop of counterexample-guided abstraction refinement` — vòng lặp tinh chế trừu tượng dựa trên phản ví dụ; `spurious errors eliminated by counterexample-guided abstraction refinement` — các lỗi giả mạo bị loại trừ bởi tinh chế trừu tượng hóa dựa trên phản ví dụ.

**Register & nuance:** Khung thuật ngữ kinh điển do Clarke, Grumberg, Jha, Lu và Veith phát minh (đoạt giải Turing). Giải quyết triệt để vấn đề mất chi tiết khi trừu tượng hóa hệ thống lớn mà không làm bùng nổ không gian trạng thái.

**Examples:** `The software model checker SLAM relied on counterexample-guided abstraction refinement to certify device drivers by progressively adding relevant predicates only when spurious traces arose.` → Bộ kiểm tra mô hình phần mềm SLAM đã dựa vào kỹ thuật tinh chế trừu tượng hóa dựa trên phản ví dụ để chứng nhận các trình điều khiển thiết bị bằng cách dần dần bổ sung các vị từ liên quan chỉ khi các vết lỗi giả xuất hiện.

**Liên kết tiếng Hàn:** `반례 기반 추상화 정제` (反例 基盤 抽象化 精製) — tinh chế trừu tượng hóa dựa trên phản ví dụ (CEGAR).

---

## 10. partial order reduction /ˈpɑrʃəl ˈɔrdər rɪˈdʌkʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ chỉ kỹ thuật tối ưu hóa kiểm tra hoặc làm tân ngữ sau `apply`, `incorporate`, `exploit`.

**Core meaning — English:** An algorithmic state space reduction technique for concurrent systems that ignores irrelevant permutations of independent, non-interfering transitions, verifying only representative execution orders.

**Core meaning & mental image — Tiếng Việt:** Kỹ thuật giảm thứ tự bộ phận. Hãy hình dung hai người bạn ở hai phòng khác nhau, một người thắt dây giày trái còn người kia gọt bút chì; việc ai làm trước ai làm sau hoàn toàn không ảnh hưởng đến kết quả chung; thay vì phải kiểm tra cả 2 trường hợp (A làm trước rồi B, hoặc B làm trước rồi A), máy tính chỉ cần kiểm tra đúng một trật tự đại diện duy nhất, cắt giảm phân nửa khối lượng tính toán.

**Grammar & collocations:** `apply partial order reduction` — áp dụng kỹ thuật giảm thứ tự bộ phận; `partial order reduction algorithms` — các thuật toán giảm thứ tự bộ phận; `explore commutative actions with partial order reduction` — thăm dò các hành vi giao hoán bằng phương pháp giảm thứ tự bộ phận.

**Register & nuance:** Kỹ thuật cứu tinh cho các hệ thống phần mềm đồng thời và đa luồng (*concurrent systems*). Dựa trên quan hệ phụ thuộc (*independence relation*) giữa các hành động để tránh việc hoán vị vô ích các bước chuyển trạng thái độc lập.

**Examples:** `By exploiting partial order reduction, the model checker collapsed millions of interleaved thread executions into a fraction of canonical paths, resolving the concurrency deadlock check.` → Bằng cách khai thác kỹ thuật giảm thứ tự bộ phận, công cụ kiểm tra mô hình đã thu gọn hàng triệu tiến trình thực thi đan xen của các luồng thành một phần nhỏ các đường đi chuẩn tắc, giải quyết xong việc kiểm tra bế tắc đồng thời.

**Liên kết tiếng Hàn:** `부분 순서 감축` (部分 順序 減縮) — kỹ thuật giảm thứ tự bộ phận.

---

## 11. SAT-based model checking /sæt beɪst ˈmɑdəl ˈtʃɛkɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ chỉ phương pháp luận kiểm thử hoặc làm tân ngữ sau `execute`, `transition to`, `accelerate`.

**Core meaning — English:** A verification approach that translates bounded system transition relations and temporal specifications into propositional logic formulas, solving them using high-performance Boolean satisfiability (SAT) solvers.

**Core meaning & mental image — Tiếng Việt:** Kiểm tra mô hình dựa trên giải thuật SAT. Hãy hình dung toàn bộ logic hoạt động của vi xử lý máy tính trong 20 chu kỳ xung nhịp được chuyển đổi thành một câu đố logic khổng lồ gồm hàng triệu mệnh đề AND/OR; sau đó một cỗ máy giải đố SAT siêu thanh sẽ quét qua và tìm xem có tổ hợp công tắc nào có thể khiến hệ thống phát nổ hay không.

**Grammar & collocations:** `employ SAT-based model checking` — sử dụng kiểm tra mô hình dựa trên giải thuật SAT; `scalability of SAT-based model checking` — khả năng mở rộng quy mô của kiểm tra mô hình dựa trên SAT; `unroll transition loops in SAT-based model checking` — mở rộng các vòng lặp chuyển trạng thái trong kiểm tra mô hình dựa trên SAT.

**Register & nuance:** Bùng nổ từ đầu những năm 2000, thay thế dần BDDs trong nhiều bài toán kiểm thử phần cứng công nghiệp nhờ sự phát triển vượt bậc của các bộ giải SAT hiện đại (như MiniSat, Z3) có khả năng giải hàng triệu biến.

**Examples:** `Engineers employed SAT-based model checking to unroll the state machine up to fifty cycles, hunting for transient hardware bugs that traditional simulation missed.` → Các kỹ sư đã sử dụng phương pháp kiểm tra mô hình dựa trên giải thuật SAT để mở rộng máy trạng thái lên đến năm mươi chu kỳ, săn lùng các lỗi phần cứng quá độ mà mô phỏng truyền thống đã bỏ sót.

**Liên kết tiếng Hàn:** `SAT 기반 모델 체킹` (SAT 基盤 Model Checking) — kiểm tra mô hình dựa trên giải thuật SAT.

---

## 12. satisfiability modulo theories /sæˌtɪsfəˈbɪləti ˈmɑdʒəloʊ ˈθɪriz/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (viết tắt: SMT). Thường làm tân ngữ sau `leverage`, `encode into`, `solve via` hoặc làm chủ ngữ đứng trước solver.

**Core meaning — English:** A general decision problem and automated reasoning framework that checks the satisfiability of first-order logical formulas with respect to combinations of background theories, such as linear arithmetic, bit-vectors, arrays, and uninterpreted functions.

**Core meaning & mental image — Tiếng Việt:** Tính thỏa mãn theo lý thuyết nền (SMT). Hãy hình dung bộ giải SAT thông thường chỉ biết các giá trị nhị phân đen trắng 0 và 1; nhưng bộ giải SMT giống như một nhà toán học uyên bác, vừa hiểu logic mệnh đề vừa hiểu các phương trình đại số thực, mảng số nguyên, và phép toán số học dấu phẩy động phức tạp.

**Grammar & collocations:** `encode constraints into satisfiability modulo theories` — mã hóa các ràng buộc vào tính thỏa mãn theo lý thuyết nền; `a modern satisfiability modulo theories solver` — một bộ giải SMT hiện đại; `solve complex array bounds with satisfiability modulo theories` — giải quyết các giới hạn mảng phức tạp bằng lý thuyết SMT.

**Register & nuance:** Đỉnh cao của các bộ giải suy luận tự động hiện nay trong kiểm chứng phần mềm. Trong khi SAT thuần túy bị bó hẹp trong biến Boolean, SMT cho phép suy luận trực tiếp trên các cấu trúc dữ liệu thực tế như con trỏ mảng (*arrays*) và số học bit (*bit-vectors*).

**Examples:** `The verification harness leveraged satisfiability modulo theories to formally prove that no possible combination of floating-point sensor inputs could cause an arithmetic divide-by-zero crash.` → Bộ khung kiểm chứng đã tận dụng tính thỏa mãn theo lý thuyết nền (SMT) để chứng minh một cách hình thức rằng không có tổ hợp đầu vào cảm biến dấu phẩy động nào có thể gây ra sự cố chia cho số không.

**Liên kết tiếng Hàn:** `만족도 모듈로 이론` (滿足度 Modulo 理論) / `SMT 이론` — tính thỏa mãn theo lý thuyết nền (SMT).

---

## 13. state reachability analysis /steɪt ˌritʃəˈbɪləti əˈnæləsɪs/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ kiểm chứng tính bất biến hoặc làm tân ngữ sau `conduct`, `perform`, `compute`.

**Core meaning — English:** The systematic graph exploration process of identifying and proving whether a particular target state or set of illegal error states can ever be reached from any designated initial state of the system.

**Core meaning & mental image — Tiếng Việt:** Phân tích khả năng tiếp cận trạng thái; phân tích khả năng đạt tới trạng thái. Hãy hình dung một mê cung khổng lồ với hàng nghìn cánh cửa mở và đóng: phân tích tiếp cận trạng thái giống như việc thả một dòng nước từ cửa vào ban đầu để xem nước có bao giờ rò rỉ tới được “căn phòng nguy hiểm cấm vào” hay không.

**Grammar & collocations:** `perform state reachability analysis` — thực hiện phân tích khả năng tiếp cận trạng thái; `state reachability analysis algorithm` — thuật toán phân tích khả năng đạt tới trạng thái; `exhaustive state reachability analysis` — phân tích tiếp cận trạng thái vét cạn toàn diện.

**Register & nuance:** Trọng tâm của việc chứng minh tính an toàn (*safety property*). Nếu chứng minh được tập hợp trạng thái lỗi nằm hoàn toàn ngoài không gian trạng thái tiếp cận được (*unreachable*), hệ thống được coi là an toàn tuyệt đối trước lớp lỗi đó.

**Examples:** `Through exhaustive state reachability analysis, the avionics architects proved that the landing gear deployment sequence could never enter an unrecoverable locked state.` → Thông qua phân tích khả năng tiếp cận trạng thái toàn diện, các kiến trúc sư điện tử hàng không đã chứng minh rằng chuỗi triển khai càng hạ cánh không bao giờ có thể rơi vào trạng thái khóa cứng không thể phục hồi.

**Liên kết tiếng Hàn:** `상태 도달 가능성 분석` (狀態 到達 可能性 分析) — phân tích khả năng tiếp cận/đạt tới trạng thái.

---

## 14. safety property verification /ˈseɪfti ˈprɑpərti ˌvɛrɪfɪˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ quy định mục tiêu kiểm tra hoặc làm tân ngữ sau `execute`, `guarantee`, `automate`.

**Core meaning — English:** The formal process of proving that a system will never enter an undesirable, hazardous, or erroneous state during its entire execution, informally stated as "nothing bad will ever happen."

**Core meaning & mental image — Tiếng Việt:** Kiểm chứng tính chất an toàn. Hãy hình dung một hàng rào điện cao áp bao quanh một khu vực cấm: kiểm chứng tính chất an toàn là việc chứng minh bằng toán học rằng chiếc xe tự hành sẽ không bao giờ, trong bất kỳ hoàn cảnh nào, được phép đâm thủng hàng rào đó; điều xấu tuyệt đối không bao giờ được phép xảy ra.

**Grammar & collocations:** `prioritize safety property verification` — ưu tiên kiểm chứng tính chất an toàn; `safety property verification in critical infrastructure` — kiểm chứng tính chất an toàn trong hạ tầng trọng yếu; `formal safety property verification algorithms` — các thuật toán kiểm chứng tính chất an toàn hình thức.

**Register & nuance:** Phân biệt kinh điển của Leslie Lamport: *Safety properties* (không có điều xấu nào xảy ra) và *Liveness properties* (điều tốt đẹp cuối cùng sẽ phải xảy ra). Vi phạm an toàn luôn có thể được chứng minh bằng một vết phản ví dụ hữu hạn (*finite trace*).

**Examples:** `Safety property verification ensured that the automated insulin pump would never dispense a dosage exceeding predefined physiological safety thresholds under any sensor error.` → Kiểm chứng tính chất an toàn bảo đảm rằng máy bơm insulin tự động sẽ không bao giờ phân phối liều lượng vượt quá các ngưỡng an toàn sinh lý định trước dưới bất kỳ lỗi cảm biến nào.

**Liên kết tiếng Hàn:** `안전성 속성 검증` (安全性 屬性 檢證) — kiểm chứng tính chất an toàn.

---

## 15. liveness property specification /ˈlaɪvnəs ˈprɑpərti ˌspɛsəfɪˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm tân ngữ sau `define`, `author`, `verify` hoặc làm chủ ngữ mô tả yêu cầu tiến triển của tác vụ.

**Core meaning — English:** The formal articulation of properties asserting that a specific desirable system event or progress milestone will eventually occur in the future, colloquially framed as "something good will eventually happen."

**Core meaning & mental image — Tiếng Việt:** Đặc tả tính chất sống động; đặc tả sự tiến triển không tắc nghẽn. Hãy hình dung bạn xếp hàng mua vé xe buýt: tính chất an toàn bảo đảm bạn không bị xô ngã, nhưng tính chất sống động bảo đảm rằng hàng đợi sẽ tiếp tục nhích lên và cuối cùng chắc chắn sẽ đến lượt bạn mua được vé, bạn không bao giờ bị bỏ quên đứng chờ tới muôn đời.

**Grammar & collocations:** `draft a liveness property specification` — soạn thảo đặc tả tính chất sống động; `liveness property specification in distributed protocols` — đặc tả tính chất sống động trong các giao thức phân tán; `verify liveness property specifications` — xác minh các đặc tả tính chất sống động.

**Register & nuance:** Khác với an toàn, vi phạm tính chất sống động đòi hỏi một chuỗi thực thi vô hạn chứa một vòng lặp (*infinite lasso/loop*) mà sự kiện mong muốn không bao giờ xuất hiện (như tình trạng đói tài nguyên vĩnh viễn - *starvation*).

**Examples:** `Drafting a precise liveness property specification allowed engineers to guarantee that every network packet entering the buffer would eventually be transmitted to the recipient.` → Việc soạn thảo một đặc tả tính chất sống động chính xác đã cho phép các kỹ sư bảo đảm rằng mọi gói tin mạng đi vào bộ đệm cuối cùng sẽ được truyền tới người nhận.

**Liên kết tiếng Hàn:** `활구성 속성 명세` (活久性 屬性 明細) / `라이브니스 속성 명세` — đặc tả tính chất sống động (liveness property).

---

## 16. strong fairness constraint /strɔŋ ˈfɛrnəs kənˈstreɪnt/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ chi phối việc lọc chuỗi thực thi hoặc làm tân ngữ sau `enforce`, `impose`, `require`.

**Core meaning — English:** A formal fairness condition requiring that if a system action or transition is enabled infinitely often (even if not continuously), it must be executed infinitely often, preventing artificial starvations in model checking.

**Core meaning & mental image — Tiếng Việt:** Ràng buộc công bằng mạnh. Hãy hình dung một ngã tư đèn giao thông: nếu xe từ một nhánh phụ liên tục bật đèn xi-nhan xin qua đường (dù tín hiệu bị gián đoạn ngắt quãng), thì hệ thống đèn bắt buộc phải bật đèn xanh cho nhánh đó đi qua, không thể vin vào cớ ngắt quãng để thiên vị cho nhánh đường chính chạy mãi mãi.

**Grammar & collocations:** `impose a strong fairness constraint` — áp đặt một ràng buộc công bằng mạnh; `distinguish between weak and strong fairness constraints` — phân biệt giữa ràng buộc công bằng yếu và công bằng mạnh; `evaluate liveness under strong fairness constraints` — đánh giá tính sống động dưới các ràng buộc công bằng mạnh.

**Register & nuance:** Khái niệm cốt lõi khi kiểm chứng các giao thức đồng thuận và điều độ tiến trình (*scheduling*). Phân biệt với *weak fairness* (hành động phải được kích hoạt liên tục không ngừng nghỉ); *strong fairness* chỉ yêu cầu hành động được kích hoạt vô hạn lần một cách ngắt quãng.

**Examples:** `Without imposing a strong fairness constraint on thread scheduling, the model checker reported spurious livelocks that could never occur on actual hardware.` → Nếu không áp đặt một ràng buộc công bằng mạnh lên việc điều độ luồng, bộ kiểm tra mô hình sẽ báo cáo các lỗi khóa động giả mạo vốn không bao giờ có thể xảy ra trên phần cứng thực tế.

**Liên kết tiếng Hàn:** `강한 공정성 제약` (強한 公正性 制約) — ràng buộc tính công bằng mạnh (strong fairness).

---

## 17. bisimulation minimization /ˌbaɪˌsɪmjəˈleɪʃən ˌmɪnəməˈzeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ chỉ kỹ thuật tối ưu hóa đồ thị hoặc tân ngữ sau `perform`, `execute`, `apply`.

**Core meaning — English:** A state aggregation technique that computes bisimilar equivalence classes of states exhibiting identical mutual observable behaviors, merging them to produce a minimal quotient transition system.

**Core meaning & mental image — Tiếng Việt:** Tối thiểu hóa bằng tương đương song mô phỏng. Hãy hình dung hai chiếc đồng hồ có bộ bánh răng bên trong hoàn toàn khác nhau nhưng từng tiếng tích tắc và vị trí kim hiển thị ra bên ngoài lại giống hệt nhau ở mọi giây; kỹ thuật song mô phỏng cho phép bạn gộp tất cả các trạng thái có biểu hiện bên ngoài y hệt nhau lại thành một trạng thái duy nhất, thu nhỏ bản đồ hệ thống xuống kích thước tí hon.

**Grammar & collocations:** `perform bisimulation minimization` — thực hiện tối thiểu hóa bằng tương đương song mô phỏng; `quotient graph derived from bisimulation minimization` — đồ thị thương thu được từ tối thiểu hóa song mô phỏng; `bisimulation minimization algorithms for Kripke structures` — các thuật toán tối thiểu hóa song mô phỏng cho cấu trúc Kripke.

**Register & nuance:** Mối quan hệ tương đương mạnh nhất bảo toàn toàn bộ công thức logic CTL* và mu-calculus. Kỹ thuật này giảm kích thước đồ thị trạng thái trước khi thực hiện duyệt kiểm tra, loại bỏ triệt để các trạng thái dư thừa.

**Examples:** `Running bisimulation minimization prior to verification collapsed the ten-thousand-state network protocol model into just forty-two canonical equivalence states.` → Việc chạy thuật toán tối thiểu hóa bằng tương đương song mô phỏng trước khi kiểm chứng đã thu gọn mô hình giao thức mạng mười nghìn trạng thái xuống chỉ còn bốn mươi hai trạng thái tương đương chuẩn tắc.

**Liên kết tiếng Hàn:** `상호 모사 최소화` (相互 模寫 最小化) / `바이시뮬레이션 최소화` — tối thiểu hóa bằng quan hệ song mô phỏng.

---

## 18. kripke structure /ˈkrɪpki ˈstrʌktʃər/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `transform into`, `define as`, `evaluate on` hoặc làm chủ ngữ tiếp nhận phép gán nhãn vị từ.

**Core meaning — English:** A formal variation of a transition system consisting of a set of states, a transition relation, and a labeling function that assigns a set of atomic propositions to each individual state.

**Core meaning & mental image — Tiếng Việt:** Cấu trúc Kripke. Hãy hình dung một bảo tàng gồm các gian phòng nối với nhau bằng các hành lang một chiều; trên mỗi cửa phòng có dán các nhãn ghi chú thông tin như “phòng sáng”, “cửa khóa”, hoặc “nhiệt độ cao”; cấu trúc Kripke chính là bản đồ các căn phòng kèm theo toàn bộ nhãn thuộc tính của từng phòng.

**Grammar & collocations:** `formalize a system as a Kripke structure` — hình thức hóa một hệ thống dưới dạng một cấu trúc Kripke; `labeling function of a Kripke structure` — hàm gán nhãn của một cấu trúc Kripke; `path semantics over a Kripke structure` — ngữ nghĩa đường dẫn trên một cấu trúc Kripke.

**Register & nuance:** Mô hình ngữ nghĩa chuẩn tắc do triết gia Saul Kripke phát triển, được sử dụng phổ biến nhất để định nghĩa ngữ nghĩa toán học của các logic thời gian như LTL, CTL và CTL*.

**Examples:** `The compiler parsed the synchronization protocol and emitted a finite Kripke structure whose atomic labels tracked lock ownership across all worker nodes.` → Trình biên dịch đã phân tích cú pháp giao thức đồng bộ và xuất ra một cấu trúc Kripke hữu hạn có các nhãn nguyên tử theo dõi quyền sở hữu khóa trên tất cả các nút công nhân.

**Liên kết tiếng Hàn:** `크립키 구조` (Kripke 構造) — cấu trúc Kripke.

---

## 19. explicit-state model checking /ɪkˈsplɪsɪt steɪt ˈmɑdəl ˈtʃɛkɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ chỉ trường phái kiểm tra hoặc làm tân ngữ sau `conduct`, `implement`, `rely on`.

**Core meaning — English:** A model checking technique that traverses and stores every individual state of a system directly and concretely in memory during state graph search, exemplified by tools like SPIN.

**Core meaning & mental image — Tiếng Việt:** Kiểm tra mô hình trạng thái tường minh. Hãy hình dung một người kiểm tra từng phòng trong một khách sạn khổng lồ: người đó bước chân vào từng căn phòng một, mở từng ngăn tủ và ghi chép cụ thể từng chi tiết vào một cuốn sổ tay dày cộp; cách làm này cực kỳ trực quan và chính xác nhưng sẽ nhanh chóng hết chỗ ghi nếu khách sạn quá rộng lớn.

**Grammar & collocations:** `rely on explicit-state model checking` — dựa vào phương pháp kiểm tra mô hình trạng thái tường minh; `explicit-state model checking tools` — các công cụ kiểm tra mô hình trạng thái tường minh; `memory constraints in explicit-state model checking` — các hạn chế bộ nhớ trong kiểm tra mô hình trạng thái tường minh.

**Register & nuance:** Đối lập trực tiếp với *symbolic model checking* (kiểm tra mô hình biểu tượng dùng BDD hay SAT). Rất mạnh trong việc kiểm chứng các giao thức truyền thông phức tạp với cấu trúc dữ liệu tường minh nhưng dễ bị quá tải bộ nhớ khi số lượng biến tăng cao.

**Examples:** `While explicit-state model checking effortlessly debugged deep message-passing loops in the transport layer, it faltered when state counts exceeded one hundred million.` → Trong khi phương pháp kiểm tra mô hình trạng thái tường minh gỡ lỗi các vòng lặp truyền tin sâu ở tầng giao vận một cách dễ dàng, nó đã chùn bước khi số lượng trạng thái vượt quá một trăm triệu.

**Liên kết tiếng Hàn:** `명시적 상태 모델 체킹` (明示的 狀態 Model Checking) — kiểm tra mô hình trạng thái tường minh.

---

## 20. symbolic model checking /sɪmˈbɑlɪk ˈmɑdəl ˈtʃɛkɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ chỉ phương pháp biểu tượng hoặc làm tân ngữ sau `pioneer`, `deploy`, `accelerate`.

**Core meaning — English:** A verification technique that represents entire sets of states and transition relations symbolically as Boolean logic formulas (often using BDDs or SAT solvers) rather than enumerating individual states one by one.

**Core meaning & mental image — Tiếng Việt:** Kiểm tra mô hình biểu tượng; kiểm chứng mô hình ký hiệu. Hãy hình dung thay vì đếm từng hạt cát trên bãi biển, một nhà toán học viết một phương trình hình học mô tả toàn bộ thể tích bãi cát đó; kiểm tra mô hình biểu tượng thao tác trên các phương trình đại số đại diện cho hàng tỷ tỷ trạng thái cùng một lúc thay vì phải ghé thăm từng trạng thái đơn lẻ.

**Grammar & collocations:** `pioneer symbolic model checking` — tiên phong phát triển phương pháp kiểm tra mô hình biểu tượng; `efficiency of symbolic model checking` — hiệu quả của kiểm tra mô hình biểu tượng; `symbolic model checking algorithms` — các thuật toán kiểm tra mô hình biểu tượng.

**Register & nuance:** Bột phát đột phá năm 1990 của Ken McMillan giúp nâng khả năng kiểm tra mô hình từ $10^6$ trạng thái lên hơn $10^{20}$ trạng thái, mang lại giải thưởng Turing cho ngành khoa học máy tính.

**Examples:** `By substituting explicit graph searches with symbolic model checking, researchers successfully verified a commercial microprocessor pipeline spanning ten to the twentieth states.` → Bằng cách thay thế việc tìm kiếm đồ thị tường minh bằng phương pháp kiểm tra mô hình biểu tượng, các nhà nghiên cứu đã xác minh thành công đường ống vi xử lý thương mại trải rộng mười mũ hai mươi trạng thái.

**Liên kết tiếng Hàn:** `기호 모델 체킹` (記號 Model Checking) / `심볼릭 모델 체킹` — kiểm tra mô hình biểu tượng.

---

## 21. invariant synthesis /ɪnˈvɛriənt ˈsɪnθəsɪs/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ chỉ kỹ thuật suy luận tự động hoặc làm tân ngữ sau `automate`, `perform`, `accelerate`.

**Core meaning — English:** The automated generation and discovery of inductive mathematical conditions that remain valid across all reachable execution states of a computer program or transition system.

**Core meaning & mental image — Tiếng Việt:** Tổng hợp bất biến tự động. Hãy hình dung một chiếc la bàn tự động hiệu chỉnh: bạn không cần tự tay viết ra quy tắc bảo vệ, cỗ máy tự động phân tích mã nguồn và tự phát hiện ra một định luật bất biến: “giá trị của biến X cộng Y luôn luôn nhỏ hơn 100 tại mọi thời điểm trong chương trình”.

**Grammar & collocations:** `automate invariant synthesis` — tự động hóa việc tổng hợp bất biến; `inductive invariant synthesis` — tổng hợp bất biến quy nạp; `machine learning for invariant synthesis` — học máy phục vụ tổng hợp bất biến.

**Register & nuance:** Trọng tâm nghiên cứu hàng đầu hiện nay trong kiểm chứng phần mềm tự động. Bất biến quy nạp (*inductive invariant*) là chiếc chìa khóa giúp chứng minh tính an toàn vô hạn chu kỳ mà không cần unroll vòng lặp.

**Examples:** `Using template-driven invariant synthesis, the verification engine deduced inductive loop invariants that instantly proved the array sorting routine was immune to buffer overflows.` → Sử dụng kỹ thuật tổng hợp bất biến tự động theo khuôn mẫu, động cơ kiểm chứng đã suy ra các bất biến vòng lặp quy nạp giúp chứng minh ngay lập tức rằng hàm sắp xếp mảng miễn nhiễm với lỗi tràn bộ đệm.

**Liên kết tiếng Hàn:** `불변자 합성` (不變子 合成) — sự tổng hợp bất biến (invariant synthesis).

---

## 22. predicate abstraction /ˈprɛdɪkət æbˈstrækʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ biến đổi không gian trạng thái hoặc làm tân ngữ sau `apply`, `utilize`, `construct via`.

**Core meaning — English:** An abstraction method that maps potentially infinite or vast state spaces into a finite Boolean domain by evaluating a finite set of logical predicates over program variables.

**Core meaning & mental image — Tiếng Việt:** Trừu tượng hóa vị từ. Hãy hình dung bạn muốn theo dõi nhiệt độ của một lò phản ứng hạt nhân có vô số mức nhiệt độ lẻ (như 345.672°C); thay vì theo dõi từng con số thực, bạn chỉ đặt đúng 2 câu hỏi vị từ nhị phân: “Nhiệt độ có vượt quá 500°C không?” và “Áp suất có đang tăng không?”, rút gọn toàn bộ không gian số học phức tạp thành các giá trị đúng/sai đơn giản.

**Grammar & collocations:** `construct an abstract model using predicate abstraction` — xây dựng mô hình trừu tượng bằng trừu tượng hóa vị từ; `predicate abstraction for software verification` — trừu tượng hóa vị từ cho kiểm chứng phần mềm; `refine predicate abstraction dynamically` — tinh chế sự trừu tượng hóa vị từ một cách động.

**Register & nuance:** Trụ cột của các công cụ kiểm chứng phần mềm viết bằng C/C++ (như CPAchecker hay BLAST). Cho phép chuyển đổi các chương trình có miền biến số nguyên vô hạn thành các mô hình Boolean hữu hạn để nạp vào các bộ kiểm tra mô hình.

**Examples:** `By applying predicate abstraction to tracking pointer relationships, the analyzer mapped the memory allocator's infinite integer domain into a compact Boolean verification model.` → Bằng cách áp dụng trừu tượng hóa vị từ để theo dõi các mối quan hệ con trỏ, bộ phân tích đã ánh xạ miền số nguyên vô hạn của trình cấp phát bộ nhớ vào một mô hình kiểm chứng Boolean nhỏ gọn.

**Liên kết tiếng Hàn:** `술어 추상화` (述語 抽象化) — trừu tượng hóa vị từ.

---

## 23. automata-theoretic verification /ɔˌtɑmətə ˌθiəˈrɛtɪk ˌvɛrɪfɪˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ chỉ phương pháp luận kiểm tra hoặc làm tân ngữ sau `employ`, `adopt`, `formalize via`.

**Core meaning — English:** A verification framework where both the system implementation and its formal temporal specification are translated into word automata (such as Büchi automata), reducing verification to language emptiness checking.

**Core meaning & mental image — Tiếng Việt:** Kiểm chứng theo lý thuyết ôtômat. Hãy hình dung hệ thống của bạn là một nhà máy tạo ra các câu từ hợp lệ, và điều kiện lỗi là một chiếc máy bắt lỗi từ; kiểm chứng ôtômat ghép hai cỗ máy lại với nhau và kiểm tra xem chiếc máy bắt lỗi có thể bắt được bất kỳ câu từ vi phạm nào hay không; nếu ngôn ngữ giao nhau là tập rỗng, hệ thống được chứng nhận hoàn hảo.

**Grammar & collocations:** `employ automata-theoretic verification` — áp dụng phương pháp kiểm chứng theo lý thuyết ôtômat; `automata-theoretic verification of LTL properties` — kiểm chứng các tính chất LTL theo lý thuyết ôtômat; `language emptiness in automata-theoretic verification` — tính rỗng của ngôn ngữ trong kiểm chứng lý thuyết ôtômat.

**Register & nuance:** Khung lý thuyết thanh lịch và tổng quát của Vardi và Wolper (đoạt giải Gödel). Đưa bài toán kiểm tra mô hình LTL phức tạp về bài toán cơ bản của khoa học máy tính: kiểm tra xem ngôn ngữ được chấp nhận bởi tích ôtômat Büchi có rỗng hay không ($\mathcal{L}(M) \cap \mathcal{L}(
eg \phi) = \emptyset$).

**Examples:** `The SPIN tool implements automata-theoretic verification by translating negation formulas into Büchi automata and searching for accepting cycles that denote violations.` → Công cụ SPIN triển khai phương pháp kiểm chứng theo lý thuyết ôtômat bằng cách dịch các công thức phủ định thành ôtômat Büchi và tìm kiếm các chu trình chấp nhận biểu thị sự vi phạm.

**Liên kết tiếng Hàn:** `오토마타 이론적 검증` (Automata 理論的 檢證) — kiểm chứng theo lý thuyết ôtômat.

---

## 24. deadlock freedom /ˈdɛdˌlɑk ˈfridəm/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ diễn giải tính chất hoạt động thông suốt hoặc làm tân ngữ sau `prove`, `guarantee`, `ensure`.

**Core meaning — English:** The formal guarantee that a concurrent system can never enter a terminal execution state where multiple processes are indefinitely blocked waiting for resources held by each other, ensuring at least one valid transition is always enabled.

**Core meaning & mental image — Tiếng Việt:** Tính không bế tắc; sự tự do khỏi bế tắc (deadlock-free). Hãy hình dung 4 chiếc xe hơi cùng tiến vào một ngã tư hẹp từ 4 hướng cùng lúc và chặn đầu xe của nhau; không xe nào nhúc nhích được; tính không bế tắc là sự bảo đảm bằng toán học rằng hệ thống luôn có ít nhất một lối thoát, luôn có một chiếc xe được phép di chuyển để toàn bộ luồng giao thông không bao giờ bị đóng băng vĩnh viễn.

**Grammar & collocations:** `mathematically prove deadlock freedom` — chứng minh bằng toán học tính không bế tắc; `guarantee deadlock freedom in distributed transactions` — bảo đảm không bế tắc trong các giao dịch phân tán; `verification of deadlock freedom` — sự kiểm chứng tính không bế tắc.

**Register & nuance:** Tính chất an toàn cơ bản và bắt buộc phải chứng minh trong mọi hệ thống đồng thời, đa luồng hoặc đa tác nhân (*multi-agent systems*). Thường được kiểm tra đầu tiên trước khi tiến hành xác minh các tính chất chức năng chuyên sâu hơn.

**Examples:** `Before clearing the inter-process communication protocol for production deployment, engineers mathematically proved deadlock freedom across all twenty concurrent message channels.` → Trước khi phê duyệt giao thức giao tiếp liên tiến trình để triển khai sản xuất, các kỹ sư đã chứng minh bằng toán học tính không bế tắc trên tất cả hai mươi kênh tin nhắn đồng thời.

**Liên kết tiếng Hàn:** `교착 상태 자유` (膠着 狀態 自由) / `데드락 방지성` — tính không bế tắc (deadlock freedom).

---

## 25. state compression algorithm /steɪt kəmˈprɛʃən ˈælɡəˌrɪðəm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `design`, `apply`, `implement` hoặc làm chủ ngữ giảm thiểu dung lượng RAM.

**Core meaning — English:** A specialized algorithmic technique—such as state collapsing, bit-state hashing, or run-length encoding—used to minimize the physical memory footprint of individual states stored in a model checker's visited hash table.

**Core meaning & mental image — Tiếng Việt:** Thuật toán nén trạng thái. Hãy hình dung một chiếc vali du lịch: thay vì nhét cả một bộ quần áo cồng kềnh vào vali, bạn dùng máy hút chân không ép bộ quần áo đó lại chỉ còn mỏng như một tờ giấy; thuật toán nén trạng thái nén dữ liệu từng trạng thái từ hàng nghìn byte xuống chỉ còn vài bit hoặc byte trong bộ nhớ RAM của máy tính.

**Grammar & collocations:** `implement a state compression algorithm` — triển khai một thuật toán nén trạng thái; `lossless state compression algorithm` — thuật toán nén trạng thái không mất dữ liệu; `reduce memory footprint via a state compression algorithm` — giảm thiểu mức tiêu hao bộ nhớ thông qua thuật toán nén trạng thái.

**Register & nuance:** Kỹ thuật kỹ thuật phần mềm tối quan trọng trong các bộ kiểm tra trạng thái tường minh (*explicit-state model checkers* như SPIN). Phân biệt giữa nén không mất mát (*lossless compression* như *state collapsing*) và nén xấp xỉ có khả năng bỏ sót trạng thái (*lossy hashing* như *bit-state hashing* của Holzmann).

**Examples:** `By incorporating a run-length state compression algorithm into the hash table, the verification tool reduced memory overhead by seventy percent, enabling complete graph exploration.` → Bằng cách tích hợp một thuật toán nén trạng thái mã hóa độ dài loạt vào bảng băm, công cụ kiểm chứng đã giảm mức tiêu hao bộ nhớ bảy mươi phần trăm, cho phép thăm dò đồ thị hoàn chỉnh.

**Liên kết tiếng Hàn:** `상태 압축 알고리즘` (狀態 壓縮 Algorithm) — thuật toán nén trạng thái.

---

## Review in context (Part 1: Temporal Logics, State Systems & Space Explosion)

In mission-critical software engineering, verifying concurrent systems begins by mathematically formalizing requirements using **linear-time temporal logic**. While trace-based assertions capture sequential histories, branching behaviors across divergent futures require expressive formulas compiled into **computation tree logic**. System architects convert hardware specifications into an unambiguous **temporal logic assertion** that continuously constrains execution paths across time. To simulate real-world operations, the underlying architecture is modeled as an abstract **state transition system** with well-defined guards and initial invariants. However, as independent asynchronous threads multiply, the global model inevitably encounters catastrophic **state space explosion**, exhausting available physical RAM. To circumvent this combinatorial bottleneck, symbolic verification engines encode complex transition relations into a compact **binary decision diagram**. Under a rigorous global variable ordering, this structure is canonicalized into a unique **reduced ordered binary decision diagram**, allowing instant pointer-based equivalence checking. Whenever a property verification check fails, automated **counterexample generation** synthesizes an exact step-by-step diagnostic execution trace for debugging. In sophisticated industrial pipelines, engineers employ **counterexample-guided abstraction refinement** to iteratively eliminate spurious error traces by selectively adding necessary predicates. Concurrently, the exploration engine leverages **partial order reduction** to collapse equivalent interleavings of independent concurrent operations into single canonical paths. To scale verification across vast industrial designs, modern toolsets frequently transition to **SAT-based model checking**, unrolling transition loops into propositional formulas. By combining propositional logic with rich background theories, engineers utilize **satisfiability modulo theories** to evaluate multi-threaded software containing complex integer and bit-vector arithmetic.

**Bản dịch tiếng Việt:**
Trong kỹ thuật phần mềm an toàn tối hạn, việc kiểm chứng các hệ thống đồng thời bắt đầu bằng việc hình thức hóa các yêu cầu theo phương pháp toán học bằng logic thời gian tuyến tính (**linear-time temporal logic**). Trong khi các khẳng định dựa trên vết nắm bắt các lịch sử tuần tự, các hành vi phân nhánh qua các tương lai rẽ nhánh khác nhau đòi hỏi các công thức biểu đạt được biên dịch thành logic cây tính toán (**computation tree logic**). Các kiến trúc sư hệ thống chuyển đổi các đặc tả phần cứng thành một khẳng định logic thời gian (**temporal logic assertion**) rõ ràng, liên tục ràng buộc các đường thực thi theo thời gian. Để mô phỏng các hoạt động thực tế, kiến trúc nền tảng được mô hình hóa thành một hệ thống chuyển trạng thái (**state transition system**) trừu tượng với các điều kiện bảo vệ và bất biến ban đầu được xác định rõ ràng. Tuy nhiên, khi các luồng bất đồng bộ độc lập nhân lên, mô hình toàn cục chắc chắn sẽ gặp phải sự bùng nổ không gian trạng thái (**state space explosion**) thảm khốc, làm cạn kiệt bộ nhớ RAM vật lý hiện có. Để vượt qua nút thắt cổ chai tổ hợp này, các động cơ kiểm chứng biểu tượng mã hóa các quan hệ chuyển tiếp phức tạp thành một giản đồ quyết định nhị phân (**binary decision diagram**) nhỏ gọn. Dưới một thứ tự biến toàn cục nghiêm ngặt, cấu trúc này được chuẩn tắc hóa thành một giản đồ quyết định nhị phân có thứ tự thu gọn (**reduced ordered binary decision diagram**) duy nhất, cho phép kiểm tra tương đương dựa trên con trỏ ngay lập tức. Bất cứ khi nào một lượt kiểm tra tính chất thất bại, tính năng tạo phản ví dụ (**counterexample generation**) tự động sẽ tổng hợp một dấu vết thực thi chẩn đoán từng bước chính xác để gỡ lỗi. Trong các quy trình công nghiệp phức tạp, các kỹ sư sử dụng phương pháp tinh chế trừu tượng hóa dựa trên phản ví dụ (**counterexample-guided abstraction refinement**) để loại trừ dần các vết lỗi giả mạo bằng cách bổ sung có chọn lọc các vị từ cần thiết. Đồng thời, động cơ thăm dò tận dụng kỹ thuật giảm thứ tự bộ phận (**partial order reduction**) để thu gọn các tiến trình đan xen tương đương của các hoạt động đồng thời độc lập thành các đường chuẩn tắc duy nhất. Để mở rộng quy mô kiểm chứng qua các thiết kế công nghiệp rộng lớn, các bộ công cụ hiện đại thường xuyên chuyển sang kiểm tra mô hình dựa trên giải thuật SAT (**SAT-based model checking**), mở rộng các vòng lặp chuyển đổi thành các công thức mệnh đề. Bằng cách kết hợp logic mệnh đề với các lý thuyết nền phong phú, các kỹ sư sử dụng tính thỏa mãn theo lý thuyết nền (**satisfiability modulo theories**) để đánh giá phần mềm đa luồng chứa số học số nguyên và vector bit phức tạp.

---

## Review in context (Part 2: Reachability, Properties & Reduction Techniques)

To ensure high-integrity systems operate within strictly certified bounds, engineers initiate rigorous **state reachability analysis** to mathematically demonstrate that hazardous error configurations remain permanently unreachable. In life-critical medical devices, rigorous **safety property verification** proves that the firmware can never trigger an uncommanded drug discharge under any permutation of inputs. Concurrently, engineers draft a formal **liveness property specification** guaranteeing that valid user requests will eventually be processed without indefinite postponement. When analyzing multi-threaded arbitration protocols, developers establish a **strong fairness constraint** to prevent scheduler biases from starving low-priority threads. To accelerate model processing, the verification framework executes **bisimulation minimization**, collapsing symmetrically identical internal states into compact behavioral quotient graphs. At the formal semantics layer, the software execution model is strictly defined as a state-labeled **kripke structure** supporting temporal evaluation. While legacy protocols often undergo traditional **explicit-state model checking** to inspect raw packet histories, modern verification suites rely on **symbolic model checking** to evaluate trillions of states concurrently via Boolean formulas. To establish inductive proofs across boundless execution loops, automated engines conduct algorithmic **invariant synthesis**, discovering mathematical invariants without manual annotations. When scaling analysis across software containing vast data domains, compilers implement **predicate abstraction** to project infinite program variables into finite Boolean logic. Deep temporal formulas are verified using classical **automata-theoretic verification**, transforming property negations into Büchi automata to detect accepting violation cycles. Across all concurrent tasks, proving absolute **deadlock freedom** ensures that processes never stall waiting indefinitely for mutual locks. Finally, to fit immense state graphs into physical memory, researchers employ a high-performance **state compression algorithm**, compressing individual visited states into minimal bitwise footprints.

**Bản dịch tiếng Việt:**
Để bảo đảm các hệ thống có độ toàn vẹn cao hoạt động trong các giới hạn được chứng nhận nghiêm ngặt, các kỹ sư khởi xướng phân tích khả năng tiếp cận trạng thái (**state reachability analysis**) nghiêm ngặt để chứng minh bằng toán học rằng các cấu hình lỗi nguy hiểm vĩnh viễn không thể đạt tới. Trong các thiết bị y tế an toàn sinh mạng, quy trình kiểm chứng tính chất an toàn (**safety property verification**) nghiêm ngặt chứng minh rằng phần sụn không bao giờ có thể kích hoạt việc xả thuốc không theo lệnh dưới bất kỳ sự hoán vị đầu vào nào. Đồng thời, các kỹ sư soạn thảo một đặc tả tính chất sống động (**liveness property specification**) hình thức bảo đảm rằng các yêu cầu hợp lệ của người dùng cuối cùng sẽ được xử lý mà không bị trì hoãn vô thời hạn. Khi phân tích các giao thức trọng tài đa luồng, các nhà phát triển thiết lập một ràng buộc công bằng mạnh (**strong fairness constraint**) để ngăn ngừa các thiên vị của bộ điều độ làm đói các luồng ưu tiên thấp. Để tăng tốc độ xử lý mô hình, khung kiểm chứng thực hiện tối thiểu hóa bằng tương đương song mô phỏng (**bisimulation minimization**), thu gọn các trạng thái nội tại giống nhau về mặt đối xứng thành các đồ thị thương hành vi nhỏ gọn. Ở tầng ngữ nghĩa hình thức, mô hình thực thi phần mềm được định nghĩa nghiêm ngặt dưới dạng một cấu trúc Kripke (**kripke structure**) có gắn nhãn trạng thái hỗ trợ đánh giá thời gian. Trong khi các giao thức cũ thường trải qua phương pháp kiểm tra mô hình trạng thái tường minh (**explicit-state model checking**) truyền thống để kiểm tra các lịch sử gói tin thô, các bộ kiểm chứng hiện đại dựa vào phương pháp kiểm tra mô hình biểu tượng (**symbolic model checking**) để đánh giá hàng nghìn tỷ trạng thái đồng thời thông qua các công thức Boolean. Để thiết lập các chứng minh quy nạp qua các vòng lặp thực thi vô tận, các động cơ tự động tiến hành quá trình tổng hợp bất biến tự động (**invariant synthesis**) theo thuật toán, khám phá các bất biến toán học mà không cần chú thích thủ công. Khi mở rộng quy mô phân tích qua phần mềm chứa các miền dữ liệu rộng lớn, các trình biên dịch triển khai trừu tượng hóa vị từ (**predicate abstraction**) để chiếu các biến chương trình vô hạn vào logic Boolean hữu hạn. Các công thức thời gian sâu được kiểm chứng bằng cách sử dụng phương pháp kiểm chứng theo lý thuyết ôtômat (**automata-theoretic verification**) kinh điển, biến đổi các phủ định tính chất thành ôtômat Büchi để phát hiện các chu trình vi phạm chấp nhận. Trên tất cả các tác vụ đồng thời, việc chứng minh tính không bế tắc (**deadlock freedom**) tuyệt đối bảo đảm rằng các tiến trình không bao giờ bị dừng trệ khi chờ đợi vô thời hạn các khóa tương hỗ. Cuối cùng, để đưa các đồ thị trạng thái khổng lồ vào vừa bộ nhớ vật lý, các nhà nghiên cứu sử dụng một thuật toán nén trạng thái (**state compression algorithm**) hiệu suất cao, nén các trạng thái đã ghé thăm riêng lẻ thành các dấu chân nhị phân tối thiểu.
