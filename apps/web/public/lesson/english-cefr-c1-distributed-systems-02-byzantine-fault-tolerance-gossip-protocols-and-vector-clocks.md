# C1 Vocabulary 02 — Byzantine fault tolerance, gossip protocols, and vector clock causal ordering

Bài học C1 này đi sâu vào nền tảng lý thuyết và kỹ nghệ phân tán cao cấp: khả năng chịu lỗi Byzantine (Byzantine fault tolerance), các giao thức tin đồn (gossip protocols) và lan truyền dịch bệnh (epidemic dissemination), thứ tự quan hệ nhân quả qua đồng hồ vector (vector clocks), sao chép trạng thái theo túc số (quorum-based state replication), phòng ngừa chia cắt não bộ (split-brain mitigation) và sự đánh đổi dung sai phân vùng mạng (network partitioning tolerance).

---

## 1. Byzantine fault tolerance /ˈbɪzənˌtiːn fɔːlt ˈtɑːlərəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (viết tắt là `BFT`). Thường làm chủ ngữ chỉ năng lực của thuật toán hoặc tân ngữ sau `achieve`, `implement`, `guarantee`.

**Core meaning — English:** The dependability property of a distributed computing system to function correctly and reach consensus even when arbitrary nodes crash, drop packets, or act maliciously by broadcasting conflicting messages.

**Core meaning & mental image — Tiếng Việt:** Khả năng chịu lỗi Byzantine; năng lực dung thứ lỗi phản trắc. Hãy hình dung một hội đồng gồm các vị tướng đang vây hãm thành trì: dù trong số họ có vài kẻ phản bội cố tình gửi mật lệnh giả cho người này bảo tấn công, cho người kia bảo rút lui, các tướng trung thành vẫn có thuật toán bỏ phiếu đối chiếu để cùng nhất loạt hành động chuẩn xác.

**Grammar & collocations:** `achieve Byzantine fault tolerance` — đạt được khả năng chịu lỗi Byzantine; `practical Byzantine fault tolerance algorithm` — thuật toán chịu lỗi Byzantine thực tiễn (PBFT); `resilience through Byzantine fault tolerance` — độ kiên cường thông qua khả năng chịu lỗi phản trắc.

**Register & nuance:** Tiêu chuẩn khắt khe nhất trong khoa học máy tính phân tán và công nghệ chuỗi khối (blockchain). Khác với khả năng chịu lỗi sập nguồn thông thường (*crash fault tolerance - CFT* như Raft hay Paxos vốn chỉ giả định node bị chết hoặc mất mạng), BFT xử lý được cả trường hợp node bị hacker chiếm quyền điều khiển hoặc phát tán dữ liệu giả mạo (*arbitrary/malicious behavior*).

**Examples:** `Blockchain networks implement Byzantine fault tolerance protocols to prevent rogue validators from double-spending digital currency tokens.` → Các mạng lưới chuỗi khối triển khai các giao thức chịu lỗi Byzantine để ngăn chặn những nút xác thực bất hảo gian lận chi tiêu hai lần cùng một mã thông báo số.

**Liên kết tiếng Hàn:** `비잔틴 장애 허용` (Byzantine 障碍 許容 / BFT) — khả năng chịu lỗi phản trắc/tùy ý trong hệ thống phân tán.

---

## 2. Byzantine failure /ˈbɪzənˌtiːn ˈfeɪljər/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ gây mất đồng bộ hoặc tân ngữ sau `suffer from`, `exhibit`, `simulate`.

**Core meaning — English:** An arbitrary or malicious fault mode in a distributed system where an erratic node generates inconsistent, corrupted, or conflicting output to different peers.

**Core meaning & mental image — Tiếng Việt:** Lỗi Byzantine; sự cố do nút hành xử tùy ý/phản trắc. Hãy hình dung một nhân viên trực tổng đài bị ảo giác hoặc bị đối thủ mua chuộc: khi khách hàng A gọi đến hỏi giá vé thì anh ta bảo 10 đô, nhưng khi khách hàng B hỏi cùng chuyến bay đó anh ta lại nói 100 đô, khiến hệ thống đặt vé náo loạn vì dữ liệu mâu thuẫn.

**Grammar & collocations:** `exhibit a Byzantine failure` — biểu hiện một sự cố Byzantine; `susceptible to Byzantine failures` — dễ bị tổn thương trước các lỗi hành xử tùy ý; `detect Byzantine failures` — phát hiện các lỗi phản trắc phân tán.

**Register & nuance:** Loại sự cố nguy hiểm và khó gỡ lỗi nhất trong mạng máy tính. Nó không chỉ là việc một máy chủ ngừng hoạt động (*fail-stop*), mà là máy chủ vẫn sống nhưng gửi đi các tín hiệu sai lệch có chủ đích hoặc do lỗi bộ nhớ (*silent data corruption*).

**Examples:** `When cosmic rays flipped bits in memory, the database node suffered a Byzantine failure, sending contradictory transaction receipts to peer replicas.` → Khi tia vũ trụ làm đảo các bit trong bộ nhớ, nút cơ sở dữ liệu đã gặp phải một lỗi Byzantine, gửi các biên lai giao dịch mâu thuẫn tới các bản sao ngang hàng.

**Liên kết tiếng Hàn:** `비잔틴 장애` (Byzantine 障碍) — lỗi hành xử tùy ý hoặc mâu thuẫn của nút phân tán.

---

## 3. gossip protocol /ˈɡɑːsəp ˈproʊtəˌkɑːl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `deploy`, `leverage`, `implement`, hoặc làm chủ ngữ truyền thông tin.

**Core meaning — English:** A decentralized peer-to-peer communication protocol where nodes periodically exchange state information with a randomly chosen subset of neighbors, ensuring probabilistic cluster-wide convergence.

**Core meaning & mental image — Tiếng Việt:** Giao thức tin đồn; cơ chế truyền tin đồn phân tán. Hãy hình dung một bữa tiệc trà: mỗi người khi nghe được một mẩu tin sốt dẻo sẽ ngẫu nhiên thì thầm vào tai hai người bạn đứng cạnh; hai người đó lại thì thầm cho bốn người khác, và chỉ sau vài phút cả căn phòng tiệc đều nắm được tin mà không cần người dẫn chương trình phải cầm loa phát biểu.

**Grammar & collocations:** `disseminate state via a gossip protocol` — phân tán trạng thái thông qua giao thức tin đồn; `gossip protocol overhead` — chi phí băng thông phụ trội của giao thức tin đồn; `decentralized gossip protocol` — giao thức tin đồn phi tập trung.

**Register & nuance:** Được ứng dụng rộng rãi trong các hệ thống lưu trữ phân tán quy mô lớn (như Cassandra, Dynamo, Consul). Giao thức này có khả năng mở rộng cực cao (*highly scalable*) và tự phục hồi (*self-healing*) vì không phụ thuộc vào bất kỳ máy chủ trung tâm nào.

**Examples:** `The monitoring mesh relies on a gossip protocol to detect node membership changes across thousands of server instances within seconds.` → Lưới giám sát dựa vào một giao thức tin đồn để phát hiện các thay đổi về thành viên nút xuyên suốt hàng nghìn phiên bản máy chủ chỉ trong vài giây.

**Liên kết tiếng Hàn:** `가십 프로토콜` (gossip protocol) — giao thức truyền tin đồn ngẫu nhiên giữa các nút mạng.

---

## 4. epidemic dissemination /ˌɛpɪˈdɛmɪk dɪˌsɛməˈneɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ giải thích tốc độ lan truyền hoặc tân ngữ sau `achieve`, `rely on`, `model`.

**Core meaning — English:** The mathematical pattern of information spreading in distributed systems modeled on the contagious spread of an infectious biological virus through a population.

**Core meaning & mental image — Tiếng Việt:** Sự lan truyền dạng dịch bệnh; cơ chế phát tán kiểu lây nhiễm. Hãy hình dung một giọt thuốc nhuộm nhỏ vào bể nước: ban đầu các phân tử màu chỉ va chạm với các phân tử nước lân cận, nhưng tốc độ lây lan nhân lên theo cấp số nhân khiến toàn bộ bể nước chuyển màu nhanh chóng chỉ sau một thời gian ngắn.

**Grammar & collocations:** `exponential epidemic dissemination` — sự lan truyền dạng dịch bệnh theo cấp số nhân; `epidemic dissemination algorithm` — thuật toán lan truyền kiểu dịch bệnh; `speed of epidemic dissemination` — tốc độ phát tán kiểu lây nhiễm.

**Register & nuance:** Thuật ngữ học thuật chính xác bắt nguồn từ lý thuyết xác suất và dịch tễ học áp dụng vào điện toán phân tán. Đặc tính nổi bật là phân tán thông tin với độ trễ logarit (*O(log N)*), chịu đựng được việc mất mát gói tin trên diện rộng mà dữ liệu vẫn chạm tới mọi ngóc ngách của cụm.

**Examples:** `Through epidemic dissemination, the distributed cache propagates critical configuration updates to hundreds of regional datacenters with mathematical certainty.` → Thông qua sự lan truyền dạng dịch bệnh, bộ nhớ đệm phân tán phát tán các bản cập nhật cấu hình trọng yếu tới hàng trăm trung tâm dữ liệu khu vực với độ chắc chắn toán học.

**Liên kết tiếng Hàn:** `전염병식 전파` (傳染病式 傳播) — sự lan truyền thông tin kiểu dịch bệnh lây nhiễm trong mạng phân tán.

---

## 5. anti-entropy protocol /ˌæntaɪ ˈɛntrəpi ˈproʊtəˌkɑːl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `run`, `schedule`, `trigger`, hoặc làm chủ ngữ đồng bộ dữ liệu.

**Core meaning — English:** A background synchronization protocol that continuously compares replicas, detects data divergence, and repairs inconsistencies by exchanging state differences.

**Core meaning & mental image — Tiếng Việt:** Giao thức chống hỗn loạn; cơ chế khử dị biệt dữ liệu định kỳ. Hãy hình dung hai người chép kinh cổ sau mỗi buổi tối lại ngồi thắp nến đối chiếu từng dòng chữ trong cuốn sổ của mình với nhau: thấy chỗ nào bạn thiếu thì chép bù, thấy đoạn nào mờ thì bổ sung, để hai cuốn sách luôn hoàn toàn đồng nhất.

**Grammar & collocations:** `run a background anti-entropy protocol` — chạy một giao thức chống hỗn loạn nền; `anti-entropy protocol efficiency` — hiệu suất của giao thức khử dị biệt dữ liệu; `resolve divergences via an anti-entropy protocol` — giải quyết các điểm sai lệch thông qua giao thức chống hỗn loạn.

**Register & nuance:** Thường kết hợp với cấu trúc cây Merkle (*Merkle trees*) trong các hệ cơ sở dữ liệu phân tán (như Riak hay DynamoDB). Khác với việc phát tán tin nhanh (*rumor mongering*), *anti-entropy* chạy âm thầm để quét sạch những sai lệch tồn dư giữa các bản sao dữ liệu.

**Examples:** `The cluster executes an automated anti-entropy protocol every midnight to reconcile drifted replicas and heal data discrepancies caused by temporary packet drops.` → Cụm máy chủ thực thi một giao thức chống hỗn loạn tự động vào mỗi nửa đêm nhằm dung hòa các bản sao bị lệch pha và chữa lành các sai biệt dữ liệu do mất gói tin tạm thời.

**Liên kết tiếng Hàn:** `안티 엔트로피 프로토콜` (anti-entropy protocol) — giao thức đối chiếu và khử sai lệch dữ liệu định kỳ.

---

## 6. vector clock /ˈvɛktər klɑːk/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `attach`, `compare`, `increment`, hoặc làm chủ ngữ xác định mối quan hệ trước-sau.

**Core meaning — English:** A logical data structure consisting of an array of integer counters maintained by every node to capture partial ordering and causal dependencies of events across a distributed network.

**Core meaning & mental image — Tiếng Việt:** Đồng hồ vector; vector nhãn thời gian phân tán. Hãy hình dung mỗi trạm kiểm soát có một bảng điện tử hiển thị danh sách quân số của tất cả các trạm khác: mỗi khi gửi đi một kiện hàng, trạm tự tăng số của mình lên 1 và đính kèm toàn bộ bảng số đó vào kiện hàng, giúp trạm nhận biết chính xác kiện hàng này ra đời trước hay sau các sự kiện khác.

**Grammar & collocations:** `attach a vector clock to the payload` — gắn một đồng hồ vector vào gói tải dữ liệu; `compare two vector clocks` — so sánh hai đồng hồ vector; `vector clock conflict resolution` — giải quyết xung đột bằng đồng hồ vector.

**Register & nuance:** Khái niệm kinh điển của Fidge và Mattern. Vượt trội hơn nhãn thời gian vật lý (*wall-clock timestamps*) vốn dễ bị sai lệch do hiện tượng trôi giờ (*clock drift*), *vector clock* cho phép hệ thống phân biệt chính xác giữa hai sự kiện có quan hệ nhân quả hay xảy ra đồng thời (*concurrent*).

**Examples:** `By appending a vector clock to each shopping cart write, the e-commerce database easily detects whether updates happened sequentially or concurrently.` → Bằng cách đính kèm một đồng hồ vector vào mỗi lượt ghi giỏ hàng, cơ sở dữ liệu thương mại điện tử dễ dàng phát hiện liệu các bản cập nhật diễn ra tuần tự hay đồng thời.

**Liên kết tiếng Hàn:** `벡터 클록` (vector clock) — đồng hồ vector dùng để theo dõi trật tự nhân quả phân tán.

---

## 7. causal ordering /ˈkɔːzəl ˈɔːrdərɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm tân ngữ sau `enforce`, `guarantee`, `preserve`, hoặc làm chủ ngữ quy định trình tự xử lý.

**Core meaning — English:** A message delivery constraint ensuring that if an event A causes or influences an event B, then every participating node in the system must process event A before processing event B.

**Core meaning & mental image — Tiếng Việt:** Trật tự quan hệ nhân quả; thứ tự theo nguyên nhân - kết quả. Hãy hình dung một diễn đàn thảo luận: câu hỏi của người hỏi bắt buộc phải hiển thị trên màn hình trước khi câu trả lời của người giải đáp xuất hiện; nếu câu trả lời lại hiện ra trước câu hỏi thì cuộc hội thoại sẽ hoàn toàn vô nghĩa và hỗn loạn.

**Grammar & collocations:** `guarantee strict causal ordering` — bảo đảm trật tự quan hệ nhân quả nghiêm ngặt; `preserve causal ordering of messages` — bảo toàn trật tự nhân quả của các thông điệp; `violations of causal ordering` — các vi phạm về trật tự quan hệ nhân quả.

**Register & nuance:** Cấp độ nhất quán trung gian quan trọng trong hệ thống phân tán, yếu hơn *linearizability* nhưng mạnh hơn *eventual consistency*. Nó bảo đảm người dùng không bao giờ thấy "kết quả xuất hiện trước nguyên nhân".

**Examples:** `The collaborative chat engine guarantees causal ordering so that replies never appear on a client's screen before the original question has been rendered.` → Công cụ trò chuyện cộng tác bảo đảm trật tự quan hệ nhân quả để các câu trả lời không bao giờ xuất hiện trên màn hình máy khách trước khi câu hỏi gốc được hiển thị.

**Liên kết tiếng Hàn:** `인과적 순서화` (因果的 順序化) — thiết lập trật tự theo quan hệ nhân quả giữa các sự kiện.

---

## 8. Lamport timestamp /ˈlæmpɔːrt ˈtaɪmˌstæmp/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `generate`, `assign`, `increment`, hoặc làm chủ ngữ sắp xếp thứ tự toàn cục.

**Core meaning — English:** A monotonically increasing logical scalar integer counter assigned to an event to establish a total ordering of events across disparate machines without physical clock synchronization.

**Core meaning & mental image — Tiếng Việt:** Nhãn thời gian Lamport; bộ đếm thời gian logic Lamport. Hãy hình dung một người phát số thứ tự ở sảnh chờ: dù đồng hồ đeo tay của mọi người có chạy nhanh hay chậm vài phút, mỗi người khi bước vào cửa chỉ cần nhận một con số tăng dần (1, 2, 3...) để biết ai là người đến trước và ai đến sau.

**Grammar & collocations:** `assign a Lamport timestamp` — gán một nhãn thời gian Lamport; `increment the Lamport timestamp` — tăng bộ đếm nhãn thời gian Lamport; `total order via Lamport timestamps` — trật tự toàn cục thông qua nhãn thời gian Lamport.

**Register & nuance:** Được sáng tạo bởi nhà khoa học máy tính huyền thoại Leslie Lamport (1978). Nhược điểm so với *vector clock* là nếu nhãn thời gian của A nhỏ hơn B, ta không thể khẳng định chắc chắn A gây ra B; nhưng ưu điểm là nó chỉ tốn 1 số nguyên duy nhất thay vì một mảng dữ liệu cồng kềnh.

**Examples:** `Each node increments its internal counter and attaches a Lamport timestamp to outgoing network RPCs to enforce a deterministic sequence.` → Mỗi nút tự tăng bộ đếm nội bộ của mình và đính kèm một nhãn thời gian Lamport vào các lệnh gọi RPC gửi đi để thực thi một trình tự xác định.

**Liên kết tiếng Hàn:** `램포트 타임스탬프` (Lamport timestamp) — nhãn thời gian logic vô hướng Lamport.

---

## 9. logical clock /ˈlɑːdʒɪkəl klɑːk/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ theo dõi tiến trình hoặc tân ngữ sau `advance`, `synchronize`, `maintain`.

**Core meaning — English:** A mechanism for capturing chronological and causal relationships between distributed events based on event order rather than physical real-world time.

**Core meaning & mental image — Tiếng Việt:** Đồng hồ logic. Hãy hình dung một cuốn nhật ký hành trình không ghi giờ giấc cụ thể mà chỉ ghi: "Sau khi đoàn thuyền vượt qua ghềnh thác, chúng tôi mới dựng trại nấu cơm"; sự kiện trước làm mốc thời gian cho sự kiện sau, độc lập hoàn toàn với việc mặt trời mọc hay lặn.

**Grammar & collocations:** `advance a logical clock` — đẩy tiến một đồng hồ logic; `maintain a distributed logical clock` — duy trì một đồng hồ logic phân tán; `rely on a logical clock instead of NTP` — dựa vào một đồng hồ logic thay vì giao thức thời gian mạng NTP.

**Register & nuance:** Khái niệm bao trùm cả *Lamport timestamps* và *vector clocks*. Ra đời nhằm giải quyết căn bệnh nan y của phần cứng: đồng hồ thạch anh của các máy tính vật lý luôn bị trôi lệch (*hardware clock skew*), khiến việc dựa vào giờ thực để xếp thứ tự giao dịch là bất khả thi.

**Examples:** `Rather than risking errors from server clock drift, the distributed database relies on a logical clock to coordinate sequence numbers across regions.` → Thay vì chấp nhận rủi ro sai lệch do hiện tượng trôi giờ máy chủ, cơ sở dữ liệu phân tán dựa vào một đồng hồ logic để điều phối các số thứ tự xuyên suốt các khu vực.

**Liên kết tiếng Hàn:** `논리 시계` (論理 時計) — đồng hồ logic dựa trên trình tự sự kiện phân tán.

---

## 10. concurrent execution conflict /kənˈkɜːrənt ˌɛksəˈkjuːʃən ˈkɑːnflɪkt/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `resolve`, `trigger`, `prevent`, hoặc làm chủ ngữ gây hỏng dữ liệu.

**Core meaning — English:** A collision that occurs when two or more distributed operations attempt to mutate the exact same data item simultaneously without causal awareness of each other.

**Core meaning & mental image — Tiếng Việt:** Xung đột thực thi đồng thời. Hãy hình dung hai người cùng cầm chìa khóa dự phòng bước vào một căn phòng trống cùng một giây: người A muốn sơn tường màu xanh lam, người B muốn sơn màu đỏ tươi; do không ai biết ý định của người kia, bức tường trở thành một mảng màu loang lổ hỗn loạn.

**Grammar & collocations:** `resolve a concurrent execution conflict` — giải quyết một xung đột thực thi đồng thời; `detect concurrent execution conflicts` — phát hiện các xung đột thực thi đồng thời; `mitigate concurrent execution conflicts` — giảm thiểu các xung đột thực thi đồng thời.

**Register & nuance:** Trọng tâm của các hệ thống cơ sở dữ liệu đa chủ (*multi-master / active-active databases*). Khi xảy ra xung đột, hệ thống phải áp dụng các chiến lược như ghi đè theo thời gian (*Last-Write-Wins* - dễ mất dữ liệu) hoặc lưu giữ cả hai bản để ứng dụng tự giải quyết (*application-level merge*).

**Examples:** `When two regional gateways simultaneously updated a user profile during a network split, the system flagged a concurrent execution conflict.` → Khi hai cổng khu vực cập nhật hồ sơ người dùng cùng một lúc trong đợt chia cắt mạng, hệ thống đã gắn cờ báo một xung đột thực thi đồng thời.

**Liên kết tiếng Hàn:** `동시 실행 충돌` (同時 實行 衝突) — xung đột phát sinh do các tác vụ ghi diễn ra đồng thời mà không biết nhau.

---

## 11. conflict-free replicated data type /ˈkɑːnflɪkt friː ˈrɛpləˌkeɪtəd ˈdeɪtə taɪp/

**Loại từ & vị trí trong câu:** `countable noun phrase` (viết tắt là `CRDT`). Thường làm bổ ngữ hoặc tân ngữ sau `implement as`, `utilize`, `model using`.

**Core meaning — English:** A specialized data structure designed for distributed systems that can be concurrently updated across multiple replicas without central coordination, mathematically guaranteeing automatic convergence without conflicts.

**Core meaning & mental image — Tiếng Việt:** Kiểu dữ liệu sao chép không xung đột. Hãy hình dung một tài liệu soạn thảo trực tuyến nơi hàng nghìn người cùng gõ chữ một lúc mà không cần khóa màn hình: các ký tự tự động ghép nối vào đúng vị trí nhờ các phép toán giao hoán và kết hợp kỳ diệu, không bao giờ làm mất chữ của bất kỳ ai.

**Grammar & collocations:** `implement a state-based conflict-free replicated data type` — triển khai một kiểu dữ liệu sao chép không xung đột dựa trên trạng thái (CvRDT); `converge via a conflict-free replicated data type` — hội tụ dữ liệu thông qua kiểu dữ liệu sao chép không xung đột; `leverage conflict-free replicated data types for collaborative editing` — tận dụng kiểu dữ liệu sao chép không xung đột cho việc chỉnh sửa cộng tác.

**Register & nuance:** Đột phá toán học định hình kỷ nguyên phần mềm cộng tác thời gian thực (như Google Docs, Figma, Apple Notes). Chia thành hai nhánh chính: *State-based CRDTs* (hội tụ bằng hàm tìm cận trên đúng - semilattice join) và *Operation-based CRDTs* (hội tụ bằng truyền phát các phép toán giao hoán).

**Examples:** `The collaborative whiteboard application adopted a conflict-free replicated data type to allow offline users to sketch diagrams that merge seamlessly once reconnected.` → Ứng dụng bảng trắng cộng tác đã áp dụng một kiểu dữ liệu sao chép không xung đột để cho phép người dùng ngoại tuyến vẽ biểu đồ và hợp nhất liền mạch ngay khi kết nối lại mạng.

**Liên kết tiếng Hàn:** `충돌 없는 복제 데이터 타입` (衝突 없는 複製 data type / CRDT) — kiểu dữ liệu sao chép phân tán tự động hội tụ không gây xung đột.

---

## 12. tombstone record /ˈtuːmˌstoʊn ˈrɛkərd/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `insert`, `leave behind`, `purge`, `compact`.

**Core meaning — English:** A marker or deletion sentinel written into a distributed database to represent a deleted record, preventing older out-of-order replicas from mistakenly resurrecting the deleted item.

**Core meaning & mental image — Tiếng Việt:** Bản ghi bia mộ; dấu vết đánh dấu đã xóa. Hãy hình dung một ngôi mộ trong nghĩa trang: sau khi một người qua đời, người ta dựng lên một tấm bia đá để mọi người đi qua đều biết người này đã mất; nếu không có tấm bia, một người đưa thư từ phương xa đến có thể tưởng người đó vẫn còn sống và tiếp tục gửi thư tới.

**Grammar & collocations:** `write a tombstone record` — ghi một bản ghi bia mộ; `purge expired tombstone records` — dọn sạch các bản ghi bia mộ đã hết hạn (garbage collection); `resurrected data due to a missing tombstone record` — dữ liệu bị sống lại do thiếu bản ghi bia mộ.

**Register & nuance:** Cơ chế bắt buộc trong các cơ sở dữ liệu phân tán kiểu nhật ký nối đuôi (*LSM-tree / distributed key-value stores* như Cassandra hay Dynamo). Vì các thao tác ghi là bất biến (*append-only*), lệnh xóa thực chất là một thao tác ghi đè một dấu hiệu bia mộ (*deletion marker*) kèm nhãn thời gian mới.

**Examples:** `When a user deletes their profile, the distributed storage engine inserts a tombstone record so stale read replicas do not accidentally restore the account.` → Khi người dùng xóa tài khoản, động cơ lưu trữ phân tán sẽ chèn một bản ghi bia mộ để các bản sao đọc cũ không vô tình khôi phục lại tài khoản đó.

**Liên kết tiếng Hàn:** `톰스톤 레코드` (tombstone record / 삭제 표식 / 削除 標識) — bản ghi bia mộ đánh dấu dữ liệu đã bị xóa.

---

## 13. quorum-based state replication /ˈkwɔːrəm beɪst steɪt ˌrɛpləˌkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ quy định độ an toàn dữ liệu hoặc tân ngữ sau `architect`, `implement`, `rely on`.

**Core meaning — English:** A distributed consensus mechanism where state modifications and reads are confirmed only after obtaining acknowledgment from a designated majority subset of server replicas.

**Core meaning & mental image — Tiếng Việt:** Sao chép trạng thái theo túc số; sao chép dữ liệu dựa trên đa số phiếu. Hãy hình dung một hội đồng quản trị gồm 5 thành viên: một nghị quyết chỉ được coi là đã thông qua và ghi vào sổ biên bản khi có ít nhất 3 thành viên ký tên xác nhận; bất kỳ nhóm thiểu số nào (1 hay 2 người) cũng không có quyền tự ý thay đổi quyết định.

**Grammar & collocations:** `rely on quorum-based state replication` — dựa vào cơ chế sao chép trạng thái theo túc số; `guarantee consistency via quorum-based state replication` — bảo đảm tính nhất quán thông qua sao chép trạng thái theo túc số; `latency trade-offs in quorum-based state replication` — sự đánh đổi về độ trễ trong sao chép trạng thái theo túc số.

**Register & nuance:** Nền tảng cốt lõi của các thuật toán đồng thuận như Paxos, Raft và ZooKeeper Zab. Cơ chế này bảo đảm rằng bất kỳ tập hợp đa số đọc nào cũng sẽ chứa ít nhất một nút đã tham gia vào tập hợp đa số ghi gần nhất (*pigeonhole principle*), triệt tiêu nguy cơ đọc phải dữ liệu rác.

**Examples:** `The distributed ledger maintains strict transaction integrity across cloud regions through quorum-based state replication across five validator nodes.` → Sổ cái phân tán duy trì tính toàn vẹn giao dịch nghiêm ngặt xuyên suốt các khu vực đám mây thông qua cơ chế sao chép trạng thái theo túc số trên năm nút xác thực.

**Liên kết tiếng Hàn:** `정족수 기반 상태 복제` (定足數 基盤 狀態 複製) — sao chép trạng thái dựa trên túc số đa số nút mạng.

---

## 14. read-write quorum /ˈriːd raɪt ˈkwɔːrəm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `configure`, `satisfy`, `calculate`.

**Core meaning — English:** The mathematical condition in distributed databases where the number of read replicas (R) plus write replicas (W) strictly exceeds the total replication factor (N), guaranteeing that read operations always observe the latest write.

**Core meaning & mental image — Tiếng Việt:** Túc số đọc-ghi; tỷ lệ số nút đọc và ghi giao nhau. Hãy hình dung một nhóm 5 người: nếu mỗi lần giấu một đồ vật bạn báo cho ít nhất 3 người biết (W=3), và mỗi lần tìm đồ bạn đi hỏi ít nhất 3 người (R=3), thì chắc chắn trong số 3 người bạn hỏi sẽ luôn có ít nhất một người đã tận mắt chứng kiến việc giấu đồ (3 + 3 > 5).

**Grammar & collocations:** `satisfy the read-write quorum condition` — thỏa mãn điều kiện túc số đọc-ghi (R + W > N); `configure a balanced read-write quorum` — cấu hình một túc số đọc-ghi cân bằng; `tune the read-write quorum for faster writes` — tinh chỉnh túc số đọc-ghi để tăng tốc độ ghi.

**Register & nuance:** Công thức vàng của hệ cơ sở dữ liệu Dynamo (*Amazon Dynamo paper*). Cho phép các kiến trúc sư linh hoạt đánh đổi: tăng W để ghi chậm nhưng đọc cực nhanh (R=1), hoặc giảm W để ghi siêu tốc và bắt tiến trình đọc phải đi kiểm tra nhiều nút hơn.

**Examples:** `By configuring a read-write quorum where R=2 and W=2 across a replication factor of 3, the database guarantees strong consistency for banking transactions.` → Bằng cách cấu hình một túc số đọc-ghi với R=2 và W=2 trên hệ số sao chép bằng 3, cơ sở dữ liệu bảo đảm tính nhất quán mạnh mẽ cho các giao dịch ngân hàng.

**Liên kết tiếng Hàn:** `읽기-쓰기 정족수` (read-write 定足數) — túc số đọc-ghi bảo đảm giao nhau giữa tập nút đọc và ghi.

---

## 15. network partitioning tolerance /ˈnɛtwɜːrk pɑːrˈtɪʃənɪŋ ˈtɑːlərəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm tân ngữ sau `guarantee`, `prioritize`, `design for`.

**Core meaning — English:** The architectural capability of a distributed cluster to sustain operations and maintain state guarantees despite arbitrary communication breakdowns that sever connectivity between groups of nodes.

**Core meaning & mental image — Tiếng Việt:** Dung sai phân vùng mạng; khả năng chịu đựng chia cắt mạng. Hãy hình dung hai bờ sông bị lũ cuốn trôi cây cầu liên lạc: hệ thống hai bên bờ vẫn tiếp tục làm việc an toàn mà không phát sinh dữ liệu xung đột hay làm sập toàn bộ guồng máy kinh tế của cả hai vùng.

**Grammar & collocations:** `prioritize network partitioning tolerance` — ưu tiên khả năng chịu đựng chia cắt mạng; `demonstrate high network partitioning tolerance` — thể hiện dung sai phân vùng mạng cao; `test network partitioning tolerance via chaos engineering` — kiểm thử khả năng chịu chia cắt mạng bằng kỹ nghệ hỗn loạn.

**Register & nuance:** Chữ "P" cốt tử trong định lý CAP (*Partition Tolerance*). Trong thế giới mạng thực tế, đường truyền viễn thông xuyên đại dương luôn có xác suất bị đứt hoặc trễ gói tin (*net split*), do đó kỹ sư bắt buộc phải thiết kế hệ thống có dung sai phân vùng và chỉ được chọn đánh đổi giữa C (*Consistency*) hoặc A (*Availability*).

**Examples:** `During submarine cable outages, our cluster exhibited remarkable network partitioning tolerance, isolating affected nodes while preserving transactional safety.` → Trong đợt đứt cáp quang biển, cụm máy chủ của chúng tôi đã thể hiện dung sai phân vùng mạng đáng nể, cô lập các nút bị ảnh hưởng trong khi vẫn bảo toàn an toàn giao dịch.

**Liên kết tiếng Hàn:** `네트워크 분할 감내` (network 分割 堪耐) — khả năng chịu đựng tình trạng chia cắt đường truyền mạng.

---

## 16. split-brain mitigation /ˈsplɪt breɪn ˌmɪtəˈɡeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ ngăn ngừa thảm họa dữ liệu hoặc tân ngữ sau `implement`, `architect`, `enforce`.

**Core meaning — English:** Algorithmic techniques and safeguards designed to prevent an isolated cluster partition from mistakenly believing it is the sole survivor and electing duplicate active leaders simultaneously.

**Core meaning & mental image — Tiếng Việt:** Giảm thiểu sự cố phân liệt hệ thống; phòng ngừa thảm họa chia cắt não bộ. Hãy hình dung một bệnh nhân bị cắt đứt thể chai nối hai bán cầu não: nửa não bên trái tưởng mình là chủ nhân duy nhất và ra lệnh bước sang trái, nửa não bên phải cũng tưởng vậy và ra lệnh bước sang phải, khiến cơ thể bị giằng xé thảm khốc.

**Grammar & collocations:** `architect split-brain mitigation into the consensus layer` — thiết kế cơ chế phòng ngừa chia cắt não bộ vào tầng đồng thuận; `split-brain mitigation strategies` — các chiến lược giảm thiểu sự cố chia cắt não bộ; `rely on odd node counts for split-brain mitigation` — dựa vào số lượng nút lẻ để phòng ngừa sự cố chia cắt não bộ.

**Register & nuance:** Cơn ác mộng lớn nhất trong quản trị hạ tầng phân tán. Nếu xảy ra *split-brain*, hai máy chủ đầu não (*active-active leaders*) sẽ cùng ghi dữ liệu độc lập vào ổ cứng, dẫn đến sự phân kỳ dữ liệu vĩnh viễn (*irrecoverable data divergence*).

**Examples:** `The database prevents data corruption through automated split-brain mitigation, requiring an absolute majority of votes before any leader node can accept client writes.` → Cơ sở dữ liệu ngăn ngừa hỏng dữ liệu thông qua cơ chế phòng ngừa chia cắt não bộ tự động, đòi hỏi đa số phiếu tuyệt đối trước khi bất kỳ nút lãnh đạo nào có thể tiếp nhận lệnh ghi của máy khách.

**Liên kết tiếng Hàn:** `스플릿 브레인 완화` (split-brain 緩和 / 두뇌 분열 방지) — biện pháp ngăn chặn tình trạng cụm phân tán bị chia đôi thành hai bộ não độc lập.

---

## 17. fencing token /ˈfɛnsɪŋ ˈtoʊkən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `issue`, `validate`, `present`, hoặc làm chủ ngữ chặn đứng yêu cầu lỗi thời.

**Core meaning — English:** A monotonically increasing sequence number issued by a lock service that clients must include with write requests, allowing the storage engine to reject stale commands from demoted zombie leaders.

**Core meaning & mental image — Tiếng Việt:** Thẻ rào chắn; mã xác thực trật tự khóa độc quyền. Hãy hình dung một vị vua bị ốm nằm liệt giường nên triều đình phát thẻ bài số 2 cho vị tân vương nhiếp chính: khi vị vua cũ đột ngột tỉnh lại và cố tình gửi chiếu chỉ mang thẻ bài số 1 cũ kỹ ra chiến trường, các tướng quân lập tức nhìn số thẻ và bác bỏ sắc lệnh lỗi thời đó.

**Grammar & collocations:** `issue an incremental fencing token` — cấp phát một thẻ rào chắn tăng dần; `validate the fencing token at the storage layer` — xác thực thẻ rào chắn tại tầng lưu trữ; `reject zombie writes lacking a valid fencing token` — bác bỏ các lệnh ghi ma quái thiếu thẻ rào chắn hợp lệ.

**Register & nuance:** Khái niệm do Martin Kleppmann phổ biến rộng rãi nhằm giải quyết lỗ hổng của các dịch vụ khóa phân tán (*distributed lock managers*). Việc sở hữu một ổ khóa không bảo đảm nút đó vẫn là chủ nhân hợp lệ nếu tiến trình bị treo tạm thời do dọn rác bộ nhớ (*GC pause*); chỉ có *fencing token* được kiểm tra ở đầu đích mới bảo vệ an toàn dữ liệu.

**Examples:** `The shared file system rejected the disconnected master's delayed write because its fencing token was lower than the newly elected coordinator's sequence number.` → Hệ thống tệp dùng chung đã từ chối lệnh ghi bị trễ của nút chủ bị mất kết nối vì thẻ rào chắn của nó thấp hơn số thứ tự của bộ điều phối vừa mới được bầu.

**Liên kết tiếng Hàn:** `펜싱 토큰` (fencing token / 잠금 보호 토큰) — thẻ rào chắn bảo vệ giao dịch khỏi các nút chủ lỗi thời.

---

## 18. PACELC theorem /ˈpæskɛlk ˈθiːərəm/

**Loại từ & vị trí trong câu:** `noun phrase` (thường có mạo từ `the`). Thường làm tân ngữ sau `reference`, `apply`, `analyze systems under`.

**Core meaning — English:** An extension of the CAP theorem stating that in a distributed computer system, If there is a Partition (P), one must trade off Availability (A) versus Consistency (C); Else (E), one must trade off Latency (L) versus Consistency (C).

**Core meaning & mental image — Tiếng Việt:** Định lý PACELC. Hãy hình dung một chiếc la bàn kiến trúc hai tầng: khi giông bão đứt cáp (P), bạn phải chọn giữa việc tiếp tục phục vụ (A) hay giữ đúng dữ liệu (C); còn khi trời yên biển lặng bình thường (E), bạn vẫn phải chọn giữa việc trả lời siêu tốc (L) hay chờ các máy chủ đồng bộ xong xuôi (C).

**Grammar & collocations:** `evaluate storage engines using the PACELC theorem` — đánh giá các động cơ lưu trữ bằng định lý PACELC; `trade-offs dictated by the PACELC theorem` — những sự đánh đổi bị chi phối bởi định lý PACELC; `classify databases according to the PACELC theorem` — phân loại cơ sở dữ liệu dựa theo định lý PACELC.

**Register & nuance:** Được xây dựng bởi Daniel Abadi (2012). Định lý này thực tế hơn định lý CAP truyền thống vì nó nhắc nhở các kỹ sư rằng ngay cả trong điều kiện mạng chạy hoàn hảo không có sự cố phân vùng (*normal operation*), họ vẫn phải trả giá về độ trễ (*latency*) nếu muốn có tính nhất quán dữ liệu tuyệt đối.

**Examples:** `Under the PACELC theorem, MongoDB is classified as a PC/EC system, favoring consistency both during network partitions and during normal operations.` → Dưới góc nhìn định lý PACELC, MongoDB được phân loại là một hệ thống PC/EC, ưu tiên tính nhất quán cả trong thời gian chia cắt mạng lẫn trong các hoạt động vận hành bình thường.

**Liên kết tiếng Hàn:** `PACELC 정리` (PACELC 定理) — định lý mở rộng của CAP phân tích đánh đổi cả khi có và không có phân vùng mạng.

---

## 19. linearizability /ˌlɪniərəˈzaɪzəˈbɪləti/

**Loại từ & vị trí trong câu:** `uncountable noun`. Thường làm tân ngữ sau `guarantee`, `enforce`, `provide`, hoặc làm chủ ngữ xác định cấp độ nhất quán.

**Core meaning — English:** The strongest consistency model requiring that all distributed read and write operations appear to execute instantaneously at a precise atomic point in time on a single global timeline.

**Core meaning & mental image — Tiếng Việt:** Tính tuyến tính hóa; tính nhất quán nguyên tử toàn cục. Hãy hình dung một chiếc đồng hồ nguyên tử duy nhất của vũ trụ: bất kỳ ai trên thế giới khi nạp tiền vào tài khoản, ngay giây tiếp theo bất kỳ người nào khác ở bất kỳ châu lục nào rút tiền cũng bắt buộc phải nhìn thấy số dư mới nhất đó như thể cả thế giới dùng chung một thanh RAM máy tính.

**Grammar & collocations:** `guarantee strict linearizability` — bảo đảm tính tuyến tính hóa nghiêm ngặt; `linearizability overhead` — chi phí hiệu năng phụ trội để duy trì tính tuyến tính hóa; `verify linearizability using Jepsen tests` — kiểm chứng tính tuyến tính hóa bằng các bài kiểm thử Jepsen.

**Register & nuance:** Khái niệm do Maurice Herlihy và Jeannette Wing định nghĩa (1990). Khác với *serializability* (thuộc tính của các giao dịch đa thao tác trong cơ sở dữ liệu), *linearizability* là thuộc tính thời gian thực của các thao tác đơn lẻ trên từng đối tượng dữ liệu (*real-time constraint on single registers*).

**Examples:** `Financial ledgers demand linearizability to ensure that no account balance can ever be spent twice across concurrent transaction threads.` → Sổ cái tài chính đòi hỏi tính tuyến tính hóa để bảo đảm rằng không có số dư tài khoản nào có thể bị chi tiêu hai lần xuyên suốt các luồng giao dịch đồng thời.

**Liên kết tiếng Hàn:** `선형화 가능성` (線形化 可能性 / linearizability) — tính tuyến tính hóa, mô hình nhất quán mạnh nhất trong hệ phân tán.

---

## 20. sequential consistency /sɪˈkwɛnʃəl kənˈsɪstənsi/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm tân ngữ sau `provide`, `satisfy`, `relax to`.

**Core meaning — English:** A consistency model where the execution sequence of distributed operations preserves the program order of each individual process and presents the identical interleaved order to all observers.

**Core meaning & mental image — Tiếng Việt:** Tính nhất quán tuần tự. Hãy hình dung một giải đấu cờ vua luân phiên: các nước cờ của từng kỳ thủ được ghi lại chính xác theo thứ tự họ đã đi, và tất cả khán giả nhìn lên bảng điện tử đều thấy một chuỗi nước cờ khớp nhau hoàn toàn, dù các nước cờ đó không nhất thiết phải diễn ra theo đúng giây thực tế trên đồng hồ treo tường.

**Grammar & collocations:** `guarantee sequential consistency` — bảo đảm tính nhất quán tuần tự; `sequential consistency model` — mô hình nhất quán tuần tự; `relax linearizability to sequential consistency` — nới lỏng tính tuyến tính hóa xuống tính nhất quán tuần tự.

**Register & nuance:** Được định nghĩa bởi Leslie Lamport (1979). Yếu hơn *linearizability* vì nó không áp đặt ràng buộc thời gian thực (*no real-time clock constraint*); chỉ cần mọi nút đồng thuận về một thứ tự xen kẽ hợp lệ duy nhất (*valid interleaved sequence*).

**Examples:** `Shared memory architectures often settle for sequential consistency, ensuring that all processor cores observe memory operations in the exact same order.` → Các kiến trúc bộ nhớ dùng chung thường chấp nhận tính nhất quán tuần tự, bảo đảm rằng mọi lõi vi xử lý đều quan sát các thao tác bộ nhớ theo cùng một thứ tự chính xác.

**Liên kết tiếng Hàn:** `순차적 일관성` (順次的 一貫性) — tính nhất quán tuần tự giữa các tiến trình.

---

## 21. monotonic read consistency /ˌmɑːnəˈtɑːnɪk riːd kənˈsɪstənsi/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ bảo vệ trải nghiệm người dùng hoặc tân ngữ sau `enforce`, `guarantee`.

**Core meaning — English:** A client-centric consistency guarantee ensuring that once a user reads a specific data value, their subsequent queries will never observe an older, stale version of that data.

**Core meaning & mental image — Tiếng Việt:** Tính nhất quán đọc đơn điệu; bảo đảm không bao giờ đọc giật lùi thời gian. Hãy hình dung một độc giả đang đọc truyện tranh trực tuyến: sau khi anh vừa đọc xong chương 5, nếu anh bấm F5 tải lại trang, hệ thống tuyệt đối không bao giờ hiển thị lại chương 3 cũ rích khiến anh tưởng mình bị du hành ngược thời gian.

**Grammar & collocations:** `guarantee monotonic read consistency` — bảo đảm tính nhất quán đọc đơn điệu; `violations of monotonic read consistency` — các vi phạm tính nhất quán đọc đơn điệu; `preserve monotonic read consistency across sessions` — bảo toàn tính nhất quán đọc đơn điệu xuyên suốt các phiên làm việc.

**Register & nuance:** Một trong bốn bảo đảm nhất quán hướng máy khách cốt lõi (*client-centric consistency models*, cùng với *Monotonic Writes*, *Read-Your-Writes*, và *Writes-Follow-Reads*). Rất quan trọng khi máy khách giao tiếp với cơ sở dữ liệu sao chép bất đối xứng có độ trễ (*asynchronous replication lag*).

**Examples:** `By pinning client sessions to sticky replicas, the web portal guarantees monotonic read consistency so users never see updated email inboxes revert to previous states.` → Bằng cách ghim phiên người dùng vào các bản sao cố định, cổng thông tin web bảo đảm tính nhất quán đọc đơn điệu để người dùng không bao giờ thấy hộp thư đã cập nhật bị quay lùi về trạng thái cũ.

**Liên kết tiếng Hàn:** `단조 읽기 일관성` (單調 읽기 一貫性) — tính nhất quán đọc đơn điệu, không cho phép đọc dữ liệu cũ hơn giá trị đã đọc trước đó.

---

## 22. write skew /ˈraɪt skjuː/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ gây sai phạm ràng buộc hoặc tân ngữ sau `prevent`, `suffer from`, `encounter`.

**Core meaning — English:** A concurrency anomaly under snapshot isolation where two concurrent transactions read overlapping datasets, satisfy conflicting premises, and make disjoint updates that together violate a global business invariant.

**Core meaning & mental image — Tiếng Việt:** Lệch pha ghi dữ liệu; hiện tượng ghi sai lệch đồng thời. Hãy hình dung một bệnh viện có quy định luôn phải có ít nhất 1 bác sĩ trực đêm: hai bác sĩ A và B cùng mở điện thoại lên xem thấy người kia đang trực, thế là cả hai cùng đồng thời bấm nút xin nghỉ phép; kết quả là bệnh viện không còn một bác sĩ trực nào, phá vỡ quy định an toàn tối thượng.

**Grammar & collocations:** `suffer from write skew` — mắc phải hiện tượng lệch pha ghi dữ liệu; `prevent write skew via serializable isolation` — ngăn ngừa hiện tượng lệch pha ghi thông qua mức cô lập tuần tự hóa; `write skew anomaly` — dị thường lệch pha ghi dữ liệu.

**Register & nuance:** Lỗ hổng kinh điển của mức cô lập ảnh chụp (*Snapshot Isolation - SI*). Vì hai giao dịch ghi vào hai hàng dữ liệu khác nhau nên khóa độc quyền (*row-level locks*) không phát hiện được xung đột, đòi hỏi hệ thống phải nâng cấp lên mức *Serializable Isolation* để phòng tránh.

**Examples:** `The medical shift roster suffered from write skew when two on-call physicians concurrently resigned, leaving the emergency room completely unstaffed.` → Lịch trực bệnh viện đã mắc phải hiện tượng lệch pha ghi dữ liệu khi hai bác sĩ trực cùng đồng thời nộp đơn xin nghỉ, khiến phòng cấp cứu hoàn toàn không còn ai trực.

**Liên kết tiếng Hàn:** `쓰기 왜곡` (write skew / 쓰기 편향 / 쓰기 歪曲) — dị thường lệch pha ghi dữ liệu trong giao dịch đồng thời.

---

## 23. membership protocol /ˈmɛmbərˌʃɪp ˈproʊtəˌkɑːl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ theo dõi cụm hoặc tân ngữ sau `implement`, `configure`, `join via`.

**Core meaning — English:** A distributed service protocol that maintains an accurate, cluster-wide consensus on which computing nodes are currently alive, active, failing, or permanently expelled.

**Core meaning & mental image — Tiếng Việt:** Giao thức quản lý thành viên cụm. Hãy hình dung một danh sách điểm danh tự động của một đoàn thám hiểm: mỗi người lính mang một thiết bị định vị phát tín hiệu nhấp nháy; nếu ai bị ngã xuống hố hoặc mất tích quá 10 phút, bảng điểm danh của toàn đoàn sẽ tự động gạch tên người đó và phân phối lại hành lý cho những người còn sống.

**Grammar & collocations:** `implement a dynamic membership protocol` — triển khai một giao thức quản lý thành viên động; `cluster membership protocol` — giao thức thành viên cụm máy chủ; `membership protocol heartbeat intervals` — khoảng thời gian nhịp tim của giao thức quản lý thành viên.

**Register & nuance:** Trọng tâm của các hệ thống điều phối cụm (như HashiCorp Serf/Consul dựa trên thuật toán SWIM). Khác với các thuật toán đồng thuận nặng nề, *membership protocol* ưu tiên tốc độ phát hiện lỗi (*failure detection speed*) và chi phí băng thông mạng tối thiểu.

**Examples:** `The cluster relies on the SWIM membership protocol to efficiently track node additions and departures across thousands of microservice instances.` → Cụm máy chủ dựa vào giao thức quản lý thành viên SWIM để theo dõi hiệu quả việc thêm vào và rời đi của các nút xuyên suốt hàng nghìn phiên bản vi dịch vụ.

**Liên kết tiếng Hàn:** `멤버십 프로토콜` (membership protocol / 구성원 관리 규약) — giao thức quản lý thành viên và phát hiện sự sống của nút mạng.

---

## 24. heartbeat mechanism /ˈhɑːrtˌbiːt ˈmɛkəˌnɪzəm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `configure`, `monitor via`, `trigger on`, hoặc làm chủ ngữ duy trì trạng thái kết nối.

**Core meaning — English:** A periodic signal transmitted between distributed nodes to attest to their operational health, allowing peers to detect crashes or network timeouts deterministically.

**Core meaning & mental image — Tiếng Việt:** Cơ chế nhịp tim; tín hiệu duy trì sự sống định kỳ. Hãy hình dung tiếng tích tắc của máy đo điện tim trong bệnh viện: chừng nào máy còn phát ra tiếng bíp đều đặn sau mỗi 2 giây thì bác sĩ biết bệnh nhân còn thở; nếu tiếng bíp im bặt quá 10 giây, còi báo động khẩn cấp sẽ rú vang khắp tầng nhà.

**Grammar & collocations:** `configure a heartbeat mechanism` — cấu hình cơ chế phát tín hiệu nhịp tim; `heartbeat mechanism interval` — khoảng thời gian phát tín hiệu nhịp tim; `loss of heartbeat mechanism signals` — mất tín hiệu từ cơ chế nhịp tim duy trì sự sống.

**Register & nuance:** Kỹ thuật phát hiện lỗi phổ thông nhất trong toàn bộ hệ thống phân tán. Cần tinh chỉnh ngưỡng thời gian chờ (*heartbeat timeout*) khéo léo để tránh báo động giả (*false positive failure detection*) khi mạng chỉ bị nghẽn tức thời.

**Examples:** `When the standby node stopped receiving signals from the heartbeat mechanism for over five seconds, it immediately initiated an automated leader election.` → Khi nút dự phòng ngừng nhận tín hiệu từ cơ chế nhịp tim trong hơn năm giây, nó đã lập tức khởi xướng một cuộc bầu cử nút lãnh đạo tự động.

**Liên kết tiếng Hàn:** `하트비트 메커니즘` (heartbeat mechanism / 생존 신호 기제) — cơ chế phát tín hiệu nhịp tim định kỳ kiểm tra sự sống của máy chủ.

---

## 25. two-phase commit /ˈtuː feɪz kəˈmɪt/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (viết tắt là `2PC`). Thường làm tân ngữ sau `execute`, `orchestrate`, `coordinate`, hoặc làm chủ ngữ khóa tài nguyên.

**Core meaning — English:** An atomic commitment protocol for distributed databases where a coordinator asks all participants to prepare and vote before issuing an irrevocable global commit or rollback command.

**Core meaning & mental image — Tiếng Việt:** Giao thức xác nhận hai pha; cam kết hai giai đoạn. Hãy hình dung một lễ cưới truyền thống: vị chủ hôn bước ra hỏi chú rể "Con có đồng ý không?" (pha 1 - chuẩn bị), rồi quay sang hỏi cô dâu "Con có đồng ý không?"; chỉ khi cả hai cùng nói "Đồng ý", vị chủ hôn mới tuyên bố "Hai con chính thức thành vợ chồng" (pha 2 - xác nhận hoàn tất).

**Grammar & collocations:** `execute a two-phase commit` — thực thi giao thức xác nhận hai pha; `blocking nature of two-phase commit` — bản chất gây nghẽn chờ của giao thức xác nhận hai pha; `two-phase commit coordinator` — bộ điều phối giao thức cam kết hai giai đoạn.

**Register & nuance:** Tiêu chuẩn ACID kinh điển cho các giao dịch phân tán trên nhiều cơ sở dữ liệu quan hệ (tiêu chuẩn XA). Nhược điểm lớn nhất là tính chất gây nghẽn (*blocking*): nếu người điều phối bị sập nguồn giữa hai pha, toàn bộ các nút tham gia sẽ bị treo khóa (*holding locks*) vô thời hạn.

**Examples:** `The banking ledger executed a two-phase commit across international branches to ensure funds were atomically debited from one account and credited to another.` → Sổ cái ngân hàng đã thực thi giao thức xác nhận hai pha xuyên suốt các chi nhánh quốc tế để bảo đảm tiền được trừ nguyên tử từ một tài khoản và cộng vào tài khoản khác.

**Liên kết tiếng Hàn:** `2단계 커밋` (二段階 commit / 2PC) — giao thức xác nhận giao dịch hai pha phân tán.

---

## Review in context (Part 1: Byzantine Fault Tolerance, Gossip Dissemination, and Causal Clock Ordering)

When architecting a resilient planetary-scale distributed ledger, computer scientists must assume that physical infrastructure is inherently unreliable and vulnerable to adversarial subversion. To preserve consensus when untrusted nodes transmit corrupted payloads, the network enforces mathematical **Byzantine fault tolerance** across its cryptographic consensus engine. Without such rigorous defensive mechanisms, a compromised validator could inject a catastrophic **Byzantine failure**, broadcasting contradictory transaction histories to disparate geographical datacenters. To disseminate transactional updates without funneling traffic through centralized bottlenecks, the peer-to-peer mesh deploys a lightweight **gossip protocol** that randomly samples neighboring instances. Through the power of mathematical **epidemic dissemination**, membership pings and ledger state cascade through thousands of global servers in sub-second logarithmic time. To clean up residual inconsistencies caused by transient network disruptions, background daemons routinely execute an **anti-entropy protocol**, comparing cryptographic hashes to heal diverged database partitions. Because relying on physical server quartz crystals introduces unavoidable hardware drift, the architecture stamps each event with an immutable **vector clock** to track causal dependencies across nodes. By doing so, the engine maintains strict **causal ordering**, guaranteeing that dependent responses never display before the original message that initiated them. To establish a total deterministic sequence across independent transactions, the scheduler assigns an incrementing **Lamport timestamp** to every client mutation. The entire distributed cluster coordinates chronological state via this synchronized **logical clock**, abandoning error-prone system wall-time. During peak holiday shopping surges, independent geographic nodes occasionally trigger a **concurrent execution conflict** by mutating identical inventory counts simultaneously. Rather than imposing performance-killing mutex locks, developers modeled shopping carts using a **conflict-free replicated data type**, allowing concurrent edits to converge automatically without manual operational triage. Finally, when users remove obsolete items from shared registries, the storage engine persists a deletion **tombstone record**, preventing out-of-order replication logs from accidentally resurrecting the erased data.

**Bản dịch tiếng Việt:**

Khi thiết kế một sổ cái phân tán quy mô toàn cầu có tính kiên cường cao, các nhà khoa học máy tính phải giả định rằng hạ tầng vật lý vốn dĩ không đáng tin cậy và dễ bị tổn thương trước sự phá hoại của các đối thủ thù địch. Để bảo toàn sự đồng thuận khi các nút không đáng tin cậy truyền đi các gói tải dữ liệu bị hỏng, mạng lưới thực thi khả năng chịu lỗi Byzantine (**Byzantine fault tolerance**) toán học trên toàn bộ động cơ đồng thuận mật mã của mình. Nếu không có các cơ chế phòng thủ nghiêm ngặt như vậy, một nút xác thực bị xâm nhập có thể gieo rắc một lỗi Byzantine (**Byzantine failure**) thảm khốc, phát tán các lịch sử giao dịch mâu thuẫn tới các trung tâm dữ liệu ở các vị trí địa lý khác nhau. Để phân tán các bản cập nhật giao dịch mà không dồn lưu lượng qua các nút thắt cổ chai tập trung, lưới mạng ngang hàng triển khai một giao thức tin đồn (**gossip protocol**) nhẹ nhàng, lấy mẫu ngẫu nhiên các phiên bản lân cận. Thông qua sức mạnh của sự lan truyền dạng dịch bệnh (**epidemic dissemination**) toán học, các tín hiệu kiểm tra thành viên và trạng thái sổ cái lan tỏa qua hàng nghìn máy chủ toàn cầu trong thời gian logarit dưới một giây. Nhằm dọn sạch các sai lệch tồn dư do gián đoạn mạng tạm thời gây ra, các tiến trình chạy nền thường xuyên thực thi một giao thức chống hỗn loạn (**anti-entropy protocol**), so sánh các hàm băm mật mã để chữa lành các phân vùng cơ sở dữ liệu bị lệch pha. Bởi vì việc dựa vào tinh thể thạch anh của máy chủ vật lý luôn tạo ra hiện tượng trôi dạt phần cứng không thể tránh khỏi, kiến trúc đóng dấu mỗi sự kiện bằng một đồng hồ vector (**vector clock**) bất biến để theo dõi các phụ thuộc nhân quả xuyên suốt các nút. Nhờ làm vậy, động cơ duy trì một trật tự quan hệ nhân quả (**causal ordering**) nghiêm ngặt, bảo đảm rằng các phản hồi phụ thuộc không bao giờ hiển thị trước thông điệp gốc đã khởi xướng ra chúng. Để thiết lập một trình tự xác định toàn cục xuyên suốt các giao dịch độc lập, bộ lập lịch gán một nhãn thời gian Lamport (**Lamport timestamp**) tăng dần cho mỗi đột biến từ máy khách. Toàn bộ cụm máy chủ phân tán điều phối trạng thái thời gian thông qua chiếc đồng hồ logic (**logical clock**) được đồng bộ hóa này, từ bỏ thời gian thực hệ thống vốn đầy rẫy lỗi lầm. Trong các đợt mua sắm cao điểm ngày lễ, các nút ở các khu vực địa lý độc lập thỉnh thoảng kích hoạt một xung đột thực thi đồng thời (**concurrent execution conflict**) do cùng lúc thay đổi số lượng hàng tồn kho giống hệt nhau. Thay vì áp đặt các khóa tương hỗ làm triệt tiêu hiệu năng, các nhà phát triển đã mô hình hóa giỏ hàng bằng một kiểu dữ liệu sao chép không xung đột (**conflict-free replicated data type**), cho phép các chỉnh sửa đồng thời tự động hội tụ mà không cần phân loại xử lý thủ công. Cuối cùng, khi người dùng xóa các mục lỗi thời khỏi các sổ đăng ký dùng chung, động cơ lưu trữ sẽ lưu lại một bản ghi bia mộ (**tombstone record**) đánh dấu việc xóa, ngăn các nhật ký sao chép không đúng thứ tự vô tình khôi phục lại dữ liệu đã bị xóa.

---

## Review in context (Part 2: Quorum State Replication, Split-Brain Mitigation, and Partition Tolerance)

To guarantee ACID durability across globally dispersed cloud regions, the database implements **quorum-based state replication**, requiring explicit affirmations from three out of five storage nodes before returning success. System operators configure an optimal **read-write quorum** where the sum of reading and writing nodes strictly exceeds the replication factor, ensuring zero stale reads. Because deep-sea transatlantic fiber cuts are an inevitable reality of physical networking, infrastructure engineers prioritize **network partitioning tolerance**, designing clusters to isolate failed segments smoothly. To prevent severed sub-clusters from simultaneously electing active master nodes and writing conflicting data, the consensus algorithm enforces rigorous **split-brain mitigation** by halting partitions that lack a strict numerical majority. When a demoted coordinator resumes execution after a garbage-collection freeze, the storage backplane verifies an incrementing **fencing token**, rejecting stale requests from the zombie leader. System designers analyze these architectural trade-offs through the lens of the **PACELC theorem**, acknowledging that even during normal latency conditions without network partitions, they must continually balance response latency against absolute consistency. For mission-critical banking transactions where double debits are legally unacceptable, the engine enforces strict **linearizability**, guaranteeing that all operations appear atomic on a global physical timeline. For less sensitive social media streams, the architecture relaxes consistency constraints down to **sequential consistency**, preserving per-process order while allowing parallel replica interleaving. To maintain a smooth user experience on mobile devices, client libraries enforce **monotonic read consistency**, ensuring that readers never observe their timelines jump backward in time when reconnecting to lagged read replicas. When evaluating complex multi-row medical shift schedules, developers prevent dangerous **write skew** anomalies by upgrading transaction isolation from snapshot isolation to fully serializable execution. At the cluster membership layer, an adaptive **membership protocol** continuously monitors server join and leave events across the fleet. Every node maintains connectivity by publishing a periodic **heartbeat mechanism** packet to neighboring monitors. Finally, for cross-database distributed settlements, the system orchestrates a blocking **two-phase commit**, ensuring that ledger transfers across sovereign payment rails either commit simultaneously or abort cleanly without financial discrepancy.

**Bản dịch tiếng Việt:**

Để bảo đảm độ bền vững ACID xuyên suốt các khu vực đám mây phân tán trên toàn cầu, cơ sở dữ liệu triển khai cơ chế sao chép trạng thái theo túc số (**quorum-based state replication**), đòi hỏi sự xác nhận rõ ràng từ ba trong số năm nút lưu trữ trước khi trả về kết quả thành công. Các nhà vận hành hệ thống cấu hình một túc số đọc-ghi (**read-write quorum**) tối ưu, nơi tổng số nút đọc và ghi vượt quá hệ số sao chép một cách nghiêm ngặt, bảo đảm hoàn toàn không có tình trạng đọc phải dữ liệu cũ. Bởi vì các vụ đứt cáp quang biển xuyên Đại Tây Dương là một thực tế không thể tránh khỏi của mạng vật lý, các kỹ sư hạ tầng ưu tiên dung sai phân vùng mạng (**network partitioning tolerance**), thiết kế các cụm máy chủ để cô lập các phân đoạn gặp sự cố một cách êm ái. Để ngăn các tiểu cụm bị chia cắt đồng thời bầu ra các nút chủ đang hoạt động và ghi dữ liệu mâu thuẫn, thuật toán đồng thuận thực thi cơ chế phòng ngừa chia cắt não bộ (**split-brain mitigation**) nghiêm ngặt bằng cách tạm dừng các phân vùng thiếu đa số thành viên tuyệt đối. Khi một bộ điều phối bị giáng cấp tiếp tục thực thi sau một đợt đóng băng do dọn rác bộ nhớ, bảng mạch lưu trữ sẽ xác thực một thẻ rào chắn (**fencing token**) tăng dần, từ chối các yêu cầu lỗi thời từ nút lãnh đạo ma quái đó. Các nhà thiết kế hệ thống phân tích những sự đánh đổi kiến trúc này qua lăng kính của định lý PACELC (**PACELC theorem**), thừa nhận rằng ngay cả trong điều kiện độ trễ bình thường không có phân vùng mạng, họ vẫn phải liên tục cân bằng giữa độ trễ phản hồi và tính nhất quán tuyệt đối. Đối với các giao dịch ngân hàng trọng yếu nơi việc trừ tiền hai lần là không thể chấp nhận về mặt pháp lý, động cơ thực thi tính tuyến tính hóa (**linearizability**) nghiêm ngặt, bảo đảm rằng mọi thao tác đều xuất hiện nguyên tử trên một dòng thời gian vật lý toàn cầu. Đối với các luồng mạng xã hội ít nhạy cảm hơn, kiến trúc nới lỏng các ràng buộc nhất quán xuống tính nhất quán tuần tự (**sequential consistency**), bảo toàn thứ tự của từng tiến trình trong khi cho phép xen kẽ các bản sao song song. Để duy trì trải nghiệm người dùng mượt mà trên các thiết bị di động, các thư viện máy khách thực thi tính nhất quán đọc đơn điệu (**monotonic read consistency**), bảo đảm rằng người đọc không bao giờ thấy dòng thời gian của mình bị nhảy lùi về quá khứ khi kết nối lại với các bản sao đọc bị trễ. Khi đánh giá các lịch trực y tế nhiều hàng phức tạp, các nhà phát triển ngăn ngừa các dị thường lệch pha ghi dữ liệu (**write skew**) nguy hiểm bằng cách nâng cấp mức cô lập giao dịch từ cô lập ảnh chụp lên thực thi tuần tự hóa hoàn toàn. Tại tầng thành viên cụm, một giao thức quản lý thành viên cụm (**membership protocol**) thích ứng liên tục theo dõi các sự kiện máy chủ tham gia và rời đi trên toàn đội máy bay. Mỗi nút duy trì kết nối bằng cách xuất bản một gói tin theo cơ chế nhịp tim (**heartbeat mechanism**) định kỳ tới các bộ giám sát lân cận. Cuối cùng, đối với các khoản thanh toán phân tán giữa nhiều cơ sở dữ liệu, hệ thống điều phối một giao thức xác nhận hai pha (**two-phase commit**) dạng khóa chờ, bảo đảm rằng các giao dịch chuyển sổ cái xuyên suốt các hệ thống thanh toán độc lập hoặc là cùng hoàn tất đồng thời, hoặc là hủy bỏ sạch sẽ mà không để lại sai lệch tài chính nào.
