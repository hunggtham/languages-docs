# C1 Vocabulary 03 — Distributed state machine consensus, Raft log replication, and split-brain fencing

Bài học C1 này cung cấp vốn từ vựng kỹ thuật chuyên sâu về kiến trúc đồng thuận phân tán (distributed consensus), giải thuật mô hình máy trạng thái (state machine replication), cơ chế bầu cử và đồng bộ nhật ký Raft (Raft log replication), cũng như các chiến lược phòng chống phân mảnh cụm máy chủ và xung đột não đôi (split-brain fencing). Người học sẽ thành thạo ngôn ngữ đàm thoại kỹ thuật cấp cao về hệ phân tán chịu lỗi, tính nhất quán tuyến tính và xác thực mã rào chắn.

---

## 1. distributed consensus /dɪˈstrɪbjətəd kənˈsɛnsəs/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ lý thuyết kiến trúc hoặc tân ngữ sau các động từ như `achieve`, `guarantee`, `coordinate`.

**Core meaning — English:** A fundamental algorithmic process in distributed computing whereby a network of independent computing nodes agree upon a single data value or shared sequence of state transitions, even when some nodes or communication links fail.

**Core meaning & mental image — Tiếng Việt:** Sự đồng thuận phân tán; thỏa thuận trạng thái trên mạng lưới phân tán. Hãy hình dung một hội đồng gồm năm vị thẩm phán ngồi ở năm thành phố khác nhau nối với nhau bằng đường dây điện thoại chập chờn: họ phải cùng ký vào một bản án duy nhất giống hệt nhau, dù có một người bị đứt máy hay mất điện thì bốn người còn lại vẫn phải thống nhất được phán quyết cuối cùng.

**Grammar & collocations:** `reach distributed consensus` — đạt được sự đồng thuận phân tán; `distributed consensus algorithm` — thuật toán đồng thuận phân tán; `guarantee distributed consensus under latency` — bảo đảm sự đồng thuận phân tán trong điều kiện độ trễ mạng cao.

**Register & nuance:** Khái niệm cốt lõi của khoa học máy tính phân tán (Leslie Lamport, Diego Ongaro). Khác với thỏa thuận tập trung (centralized agreement) dựa vào một máy chủ duy nhất dễ sụp đổ, đồng thuận phân tán bảo đảm hệ thống vẫn sống sót khi các mắt xích riêng lẻ gặp sự cố (*fault-tolerant*).

**Examples:** `Modern cloud control planes rely on distributed consensus to ensure that all database replicas execute transactions in the exact same deterministic sequence.` → Các mặt phẳng điều khiển đám mây hiện đại dựa vào sự đồng thuận phân tán để bảo đảm rằng tất cả các bản sao cơ sở dữ liệu đều thực thi giao dịch theo một trình tự tất định hoàn toàn giống nhau.

**Liên kết tiếng Hàn:** `분산 합의` (分散 合意) — sự đồng thuận phân tán, cơ chế đạt thỏa thuận dữ liệu giữa các nút mạng độc lập.

---

## 2. state machine replication /ˈsteɪt məˈʃiːn ˌrɛpləˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (thường viết tắt là `SMR`). Thường làm chủ ngữ định danh phương pháp hoặc bổ ngữ kỹ thuật sau `implement`, `model as`, `rely on`.

**Core meaning — English:** A deterministic architectural design pattern where multiple computing replicas maintain identical internal state by processing an identical sequence of inputs from an ordered log, ensuring high fault-tolerant availability.

**Core meaning & mental image — Tiếng Việt:** Nhân bản máy trạng thái; sao chép trạng thái tất định. Hãy hình dung ba kỳ thủ cờ vua ngồi ở ba phòng cách ly: mỗi khi có nước đi mới (ví dụ "Mã F3"), cả ba người cùng ghi đúng nước đi đó vào sổ và di chuyển quân cờ trên bàn của mình, khiến thế cờ của cả ba phòng luôn luôn giống hệt nhau ở mọi thời điểm.

**Grammar & collocations:** `implement state machine replication` — triển khai nhân bản máy trạng thái; `deterministic state machine replication` — mô hình nhân bản máy trạng thái tất định; `the foundation of state machine replication` — nền tảng của kỹ thuật sao chép máy trạng thái.

**Register & nuance:** Nền tảng toán học của các hệ thống như etcd, ZooKeeper và Chubby. Từ này nhấn mạnh tính tất định (*determinism*): cùng một chuỗi lệnh đầu vào bắt buộc phải tạo ra một kết quả đầu ra giống nhau trên mọi bản sao.

**Examples:** `By implementing state machine replication, the cluster guarantees that even if the primary node crashes, any surviving replica holds an identical state ready to serve reads.` → Bằng cách triển khai nhân bản máy trạng thái, cụm máy chủ bảo đảm rằng ngay cả khi nút chính bị sập, bất kỳ bản sao sống sót nào cũng nắm giữ một trạng thái giống hệt sẵn sàng phục vụ các truy vấn đọc.

**Liên kết tiếng Hàn:** `상태 기계 복제` (狀態 機械 複製) — nhân bản máy trạng thái, kỹ thuật đồng bộ trạng thái giữa các bản sao qua nhật ký lệnh.

---

## 3. Raft consensus protocol /ˈræft kənˈsɛnsəs ˈproʊtəkɔːl/

**Loại từ & vị trí trong câu:** `proper noun phrase`. Thường làm chủ ngữ chỉ cơ chế điều phối hoặc tân ngữ sau `adopt`, `deploy`, `operate under`.

**Core meaning — English:** A widely adopted distributed consensus algorithm designed specifically for understandability and operational manageability, decomposing consensus into leader election, log replication, and safety constraints.

**Core meaning & mental image — Tiếng Việt:** Giao thức đồng thuận Raft; thuật toán Raft. Hãy hình dung một chiếc bè gỗ vượt thác (Raft nghĩa đen là chiếc bè): các thủy thủ trên bè bầu ra một thuyền trưởng để cầm lái; nếu thuyền trưởng ngã xuống nước, các thủy thủ lập tức giơ tay bầu thuyền trưởng mới để giữ cho chiếc bè không bị lật giữa dòng nước xoáy.

**Grammar & collocations:** `adopt the Raft consensus protocol` — áp dụng giao thức đồng thuận Raft; `under the Raft consensus protocol` — dưới sự điều phối của giao thức Raft; `Raft consensus protocol state transitions` — các bước chuyển trạng thái của giao thức đồng thuận Raft.

**Register & nuance:** Được Diego Ongaro và John Ousterhout phát minh tại Đại học Stanford năm 2014 nhằm thay thế thuật toán Paxos khét tiếng phức tạp và khó triển khai. Raft chia nhỏ vấn đề thành các trạng thái tách biệt: Leader (Trưởng cụm), Follower (Nút theo sau) và Candidate (Ứng viên).

**Examples:** `The engineering team migrated their distributed metadata store to the Raft consensus protocol to simplify operational debugging and log inspection.` → Đội ngũ kỹ thuật đã di chuyển kho siêu dữ liệu phân tán của họ sang giao thức đồng thuận Raft để đơn giản hóa việc gỡ lỗi vận hành và kiểm tra nhật ký.

**Liên kết tiếng Hàn:** `라프트 합의 프로토콜` (Raft 合意 protocol) — giao thức đồng thuận Raft, thuật toán đạt đồng thuận phân tán dễ hiểu và quản trị.

---

## 4. leader election heartbeat /ˈliːdər ɪˈlɛkʃən ˈhɑːrtbiːt/

**Loại từ & vị trí trong câu:** `countable noun` (thường dùng số nhiều `leader election heartbeats`). Thường làm chủ ngữ báo hiệu sức khỏe hệ thống hoặc tân ngữ sau `broadcast`, `suppress`, `miss`.

**Core meaning — English:** A periodic signal or empty RPC message continuously broadcast from the designated cluster leader to all follower nodes to assert authority and prevent them from initiating a new election cycle.

**Core meaning & mental image — Tiếng Việt:** Nhịp tim duy trì quyền lãnh đạo; tín hiệu điểm danh trưởng cụm. Hãy hình dung một ngọn hải đăng nhấp nháy ánh sáng đều đặn mỗi hai giây: chừng nào các tàu bè còn nhìn thấy ánh chớp thì họ biết người gác đèn vẫn đang làm việc; nếu ánh đèn tắt ngúm quá mười giây, các thủy thủ sẽ cử người lập tức trèo lên thay thế.

**Grammar & collocations:** `broadcast a leader election heartbeat` — phát tín hiệu nhịp tim duy trì quyền trưởng cụm; `miss consecutive leader election heartbeats` — lỡ các nhịp tim điểm danh liên tiếp từ nút trưởng; `heartbeat interval threshold` — ngưỡng chu kỳ phát nhịp tim.

**Register & nuance:** Cơ chế liveness căn bản trong Raft. Nếu mạng chậm hoặc CPU trưởng cụm bị treo (garbage collection pause), nhịp tim bị trễ sẽ kích hoạt follower nghi ngờ rằng leader đã chết và tự động đứng lên tranh cử.

**Examples:** `If a follower fails to receive a leader election heartbeat before its timer lapses, it assumes the leader has failed and increments its term.` → Nếu một nút cấp dưới không nhận được nhịp tim duy trì quyền lãnh đạo trước khi bộ đếm thời gian hết hạn, nó sẽ giả định rằng trưởng cụm đã hỏng và tự tăng số hiệu nhiệm kỳ của mình lên.

**Liên kết tiếng Hàn:** `리더 선출 하트비트` (leader 選出 heartbeat) — tín hiệu nhịp tim duy trì quyền lãnh đạo, thông điệp điểm danh định kỳ của nút trưởng.

---

## 5. AppendEntries RPC /əˈpɛnd ˈɛntriz ˌɑːr piː ˈsiː/

**Loại từ & vị trí trong câu:** `proper noun phrase`. Thường làm chủ ngữ điều phối truyền dữ liệu hoặc tân ngữ sau `invoke`, `dispatch`, `acknowledge`.

**Core meaning — English:** The primary remote procedure call in the Raft protocol invoked by the leader to replicate log entries across followers and simultaneously serve as the periodic heartbeat mechanism when sent empty.

**Core meaning & mental image — Tiếng Việt:** Lệnh gọi từ xa ghi nối nhật ký AppendEntries; thông điệp RPC nối mục nhật ký. Hãy hình dung một người đưa thư chạy từ tổng hành dinh sang các đồn bốt biên phòng: nếu có mệnh lệnh mới, người này giao tờ lệnh bảo dán thêm vào sổ trực (append entries); nếu không có lệnh gì mới, người này chìa sổ trắng ký tên điểm danh để chứng minh tổng hành dinh vẫn đang hoạt động.

**Grammar & collocations:** `dispatch an AppendEntries RPC` — gửi lệnh RPC ghi nối nhật ký; `replicate entries via AppendEntries RPC` — nhân bản các mục dữ liệu qua RPC AppendEntries; `reject an inconsistent AppendEntries RPC` — từ chối lệnh AppendEntries khi nhật ký không khớp.

**Register & nuance:** Thuật ngữ kỹ thuật nguyên gốc trong tài liệu đặc tả Raft. Một RPC này đảm nhiệm cả hai chức năng cốt tử: đồng bộ dữ liệu (data replication) và xác nhận sự sống (heartbeat ping).

**Examples:** `The leader issues an AppendEntries RPC containing batch transaction logs to all followers, waiting for majority acknowledgment before committing.` → Nút trưởng phát một lệnh gọi từ xa AppendEntries RPC chứa các bản ghi giao dịch theo lô đến tất cả các nút cấp dưới, chờ phản hồi xác nhận từ số đông trước khi xác nhận lưu trữ.

**Liên kết tiếng Hàn:** `로그 추가 원격 프로시저 호출` (log 追加 遠隔 procedure 呼出) / `AppendEntries RPC` — lệnh RPC ghi nối nhật ký và duy trì nhịp tim trong giao thức Raft.

---

## 6. election timeout threshold /ɪˈlɛkʃən ˈtaɪmaʊt ˈθrɛʃhoʊld/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ kiểm soát thời gian hoặc tân ngữ sau `configure`, `exceed`, `tune`.

**Core meaning — English:** The predetermined duration of time that a follower node waits without hearing from the current leader or voting for another candidate before declaring an election and transitioning to candidate state.

**Core meaning & mental image — Tiếng Việt:** Ngưỡng hết hạn thời gian bầu cử; giới hạn chờ trước khi tự ứng cử. Hãy hình dung một nhân viên trực tổng đài: quy định là nếu sau ba trăm giây mà không thấy sếp gọi điện giao việc, nhân viên này tự động bấm còi báo động khẩn cấp và tự phong mình làm quyền trưởng phòng để xử lý công việc ứ đọng.

**Grammar & collocations:** `exceed the election timeout threshold` — vượt quá ngưỡng thời gian bầu cử; `tune the election timeout threshold` — tinh chỉnh ngưỡng thời gian bầu cử phù hợp với độ trễ mạng; `reset the election timeout threshold` — tái lập bộ đếm thời gian bầu cử khi nhận tín hiệu.

**Register & nuance:** Thông số cấu hình sống còn trong hệ thống phân tán. Nếu đặt ngưỡng này quá ngắn, các rung lắc mạng thông thường (*network jitter*) sẽ gây ra các cuộc bầu cử liên miên không cần thiết; nếu đặt quá dài, hệ thống sẽ mất nhiều thời gian để phục hồi sau sự cố sập nút trưởng.

**Examples:** `Setting the election timeout threshold too aggressively can trigger spurious elections whenever a momentary network blip delays a heartbeat.` → Cấu hình ngưỡng hết hạn thời gian bầu cử quá ngắn có thể kích hoạt các cuộc bầu cử giả mạo mỗi khi một trục trặc mạng thoáng qua làm chậm trễ nhịp tim.

**Liên kết tiếng Hàn:** `선출 타임아웃 임계값` (選出 timeout 臨界값) — ngưỡng thời gian chờ bầu cử, thời hạn trước khi một nút chuyển sang trạng thái ứng viên.

---

## 7. monotonic term counter /ˌmɑːnəˈtɑːnɪk ˈtɜːrm ˈkaʊntər/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ định danh thứ tự logic hoặc tân ngữ sau `increment`, `inspect`, `synchronize`.

**Core meaning — English:** A strictly increasing integer value functioning as a logical clock in distributed systems, dividing time into discrete terms that uniquely identify leadership eras and detect obsolete messages.

**Core meaning & mental image — Tiếng Việt:** Bộ đếm nhiệm kỳ đơn điệu tăng; đồng hồ nhiệm kỳ logic chỉ tăng không giảm. Hãy hình dung số thứ tự các đời tổng thống: nhiệm kỳ 45, nhiệm kỳ 46, nhiệm kỳ 47. Không bao giờ có chuyện quay ngược về nhiệm kỳ 44; nếu một ông nhận mình là tổng thống nhiệm kỳ 45 gửi thư ra lệnh cho một người đang ở nhiệm kỳ 47, bức thư đó sẽ lập tức bị vứt vào sọt rác vì đã lỗi thời.

**Grammar & collocations:** `increment the monotonic term counter` — tăng số bộ đếm nhiệm kỳ đơn điệu; `inspect the monotonic term counter` — kiểm tra số hiệu nhiệm kỳ đơn điệu; `ensure term monotonicity` — bảo đảm tính đơn điệu tăng của nhiệm kỳ.

**Register & nuance:** Bắt nguồn từ khái niệm đồng hồ logic (*logical clocks* của Lamport). Trong Raft, nhiệm kỳ (*term*) cho phép các nút phát hiện ngay lập tức thông tin lỗi thời từ các nút trưởng cũ đã bị phế truất nhưng chưa biết mình bị thay thế.

**Examples:** `Each node advances its monotonic term counter upon declaring candidacy, ensuring that votes and log entries from prior terms are instantly recognized as obsolete.` → Mỗi nút sẽ tăng bộ đếm nhiệm kỳ đơn điệu tăng của mình khi tuyên bố ứng cử, bảo đảm rằng các lá phiếu và mục nhật ký từ các nhiệm kỳ trước được nhận diện ngay lập tức là đã lỗi thời.

**Liên kết tiếng Hàn:** `단조 증가 임기 계수기` (單調 增加 任期 計數器) — bộ đếm nhiệm kỳ đơn điệu tăng, đồng hồ logic xác định các triều đại lãnh đạo.

---

## 8. candidate state transition /ˈkændɪdət steɪt trænˈzɪʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ quy trình hoặc tân ngữ sau `trigger`, `undergo`, `initiate`.

**Core meaning — English:** The internal state machine shift where a follower node, upon experiencing an election timeout, increments its term, votes for itself, and broadcasts vote request RPCs to become the new cluster leader.

**Core meaning & mental image — Tiếng Việt:** Bước chuyển sang trạng thái ứng cử viên; sự chuyển cấp từ cấp dưới lên người tranh cử. Hãy hình dung một phó phòng sau nhiều ngày không liên lạc được với giám đốc đã đứng dậy giữa cuộc họp, tự ghi tên mình vào lá phiếu bầu chức giám đốc mới và phát phiếu yêu cầu toàn thể nhân viên bỏ phiếu cho mình.

**Grammar & collocations:** `undergo a candidate state transition` — trải qua bước chuyển sang trạng thái ứng viên; `trigger candidate state transition` — kích hoạt sự chuyển đổi sang trạng thái ứng cử viên; `abort the candidate state transition` — hủy bỏ quá trình ứng cử khi phát hiện nút khác thắng cử.

**Register & nuance:** Một trong ba trạng thái hữu hạn căn bản trong máy trạng thái Raft (Follower -> Candidate -> Leader). Quá trình này đòi hỏi việc bảo vệ bằng khóa bất đồng bộ để tránh tranh chấp tài nguyên cục bộ.

**Examples:** `Following a sudden network cutoff from the primary datacenter, the standby node initiated a candidate state transition to claim leadership.` → Sau khi bị mất kết nối mạng đột ngột với trung tâm dữ liệu chính, nút dự phòng đã khởi tạo bước chuyển sang trạng thái ứng cử viên để giành quyền lãnh đạo.

**Liên kết tiếng Hàn:** `후보자 상태 전이` (候補者 狀態 轉移) — sự chuyển đổi sang trạng thái ứng cử viên trong quy trình bầu cử phân tán.

---

## 9. quorum majority /ˈkwɔːrəm məˈdʒɔːrəti/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng số ít). Thường làm chủ ngữ xác thực điều kiện hoặc tân ngữ sau `require`, `gather`, `satisfy`.

**Core meaning — English:** The strict mathematical majority of active voting cluster members (calculated as `floor(N/2) + 1` in an N-node cluster) required to elect a leader, commit a log entry, or validate a state mutation.

**Core meaning & mental image — Tiếng Việt:** Đa số túc số; số lượng biểu quyết quá bán. Hãy hình dung một hội đồng năm người: để thông qua bất kỳ quyết định nào, bắt buộc phải có ít nhất ba người (5/2 + 1 = 3) đồng ý; nếu chỉ có hai người đồng ý, quyết định đó hoàn toàn vô giá trị và bị hủy bỏ.

**Grammar & collocations:** `reach a quorum majority` — đạt được đa số túc số; `require a quorum majority of nodes` — đòi hỏi đa số túc số các nút trong cụm; `maintain quorum majority during failover` — duy trì đa số túc số trong quá trình chuyển đổi dự phòng.

**Register & nuance:** Nguyên lý bồ câu (*pigeonhole principle*) bảo đảm rằng hai tập con đa số bất kỳ luôn có ít nhất một nút chung (`intersection`). Điều này loại bỏ hoàn toàn khả năng có hai nhóm thiểu số tự ý bầu ra hai người lãnh đạo cùng lúc.

**Examples:** `In a five-node Raft deployment, three participating servers constitute a quorum majority capable of sustaining full read-write consensus.` → Trong một hệ thống triển khai Raft gồm năm nút, ba máy chủ tham gia tạo thành đa số túc số có khả năng duy trì sự đồng thuận đọc-ghi toàn diện.

**Liên kết tiếng Hàn:** `과반 정족수` (過半 定足數) — đa số túc số, số lượng nút tối thiểu quá bán để hợp thức hóa phán quyết.

---

## 10. split-vote condition /ˈsplɪt voʊt kənˈdɪʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ gây tắc nghẽn hoặc tân ngữ sau `encounter`, `resolve`, `lead to`.

**Core meaning — English:** A deadlock scenario during an election cycle where multiple candidate nodes request votes simultaneously and divide the cluster votes equally, preventing any single candidate from securing a strict quorum majority.

**Core meaning & mental image — Tiếng Việt:** Tình trạng phiếu bầu bị phân tán; kịch bản bế tắc do chia rẽ phiếu. Hãy hình dung một cuộc bầu lớp trưởng gồm bốn học sinh: hai bạn tự ứng cử, bạn A được hai phiếu, bạn B được hai phiếu; không ai đạt quá bán, cuộc bầu cử rơi vào thế kẹt cứng và mọi hoạt động của lớp tạm thời tê liệt.

**Grammar & collocations:** `encounter a split-vote condition` — gặp phải tình trạng phiếu bầu bị chia rẽ; `resolve a split-vote condition` — tháo gỡ bế tắc phân tán phiếu bầu; `prolonged split-vote condition` — tình trạng phân rẽ phiếu bầu kéo dài.

**Register & nuance:** Lỗi thiết kế phổ biến nếu thời gian chờ bầu cử là hằng số cố định. Nếu mọi nút cùng hết hạn chờ vào cùng một tích tắc, tất cả sẽ cùng tự ứng cử và bỏ phiếu cho chính mình, gây ra vòng lặp bế tắc vô tận.

**Examples:** `Without asynchronous jitter, synchronized follower nodes repeatedly triggered a split-vote condition, stalling the election process.` → Nếu không có độ lệch ngẫu nhiên bất đồng bộ, các nút cấp dưới đồng nhịp sẽ liên tục kích hoạt tình trạng phiếu bầu bị phân tán, làm đình trệ tiến trình bầu cử.

**Liên kết tiếng Hàn:** `동표 분열 상황` (同票 分裂 狀況) / `표 분산 상태` (票 分散 狀態) — tình trạng chia rẽ phiếu bầu, thế bế tắc bầu cử do không ai đạt quá bán.

---

## 11. randomized election timeout /ˈrændəmaɪzd ɪˈlɛkʃən ˈtaɪmaʊt/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ giải quyết xung đột hoặc tân ngữ sau `introduce`, `configure with`, `leverage`.

**Core meaning — English:** The algorithmic technique of assigning each node a randomly chosen election timeout duration within a specific window (e.g., 150ms to 300ms) to desynchronize candidates and rapidly break split-vote deadlocks.

**Core meaning & mental image — Tiếng Việt:** Thời gian chờ bầu cử ngẫu nhiên hóa; bộ định thời bầu cử lệch pha ngẫu nhiên. Hãy hình dung trong một cuộc thi bấm chuông, mỗi người được ban tổ chức cài đặt chiếc chuông rung sau một khoảng thời gian ngẫu nhiên từ một đến ba giây: người nào chuông rung trước sẽ chạy ra tranh cử trước và xin phiếu của những người chuông chưa rung, tránh được việc mọi người cùng bấm chuông một lúc.

**Grammar & collocations:** `employ a randomized election timeout` — áp dụng thời gian chờ bầu cử ngẫu nhiên hóa; `a spread of randomized election timeouts` — dải giãn cách thời gian chờ bầu cử ngẫu nhiên; `randomized election timeout window` — cửa sổ thời gian chờ bầu cử ngẫu nhiên.

**Register & nuance:** Sáng kiến thiên tài giúp Raft trở nên thanh lịch và đơn giản hơn Paxos. Thay vì phải dùng các thuật toán trọng tài phức tạp, sự ngẫu nhiên hóa bảo đảm gần như chắc chắn một nút sẽ hết hạn trước các nút khác và gom đủ phiếu chiến thắng.

**Examples:** `By enforcing a randomized election timeout between 150 and 300 milliseconds, Raft ensures that one node almost always times out first and gathers the majority.` → Bằng cách áp dụng thời gian chờ bầu cử ngẫu nhiên hóa trong khoảng từ 150 đến 300 mili-giây, Raft bảo đảm rằng hầu như luôn có một nút hết hạn trước và thu thập đủ đa số phiếu.

**Liên kết tiếng Hàn:** `무작위 선출 타임아웃` (無作爲 選出 timeout) — thời gian chờ bầu cử ngẫu nhiên hóa, kỹ thuật phá vỡ thế bế tắc đồng phiếu.

---

## 12. log entry replication /ˈlɔːɡ ˈɛntri ˌrɛpləˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ chỉ tiến trình đồng bộ dữ liệu hoặc tân ngữ sau `manage`, `execute`, `guarantee`.

**Core meaning — English:** The process by which a cluster leader appends client write commands into its local write-ahead log and orchestrates the reliable propagation and storage of those exact entries across follower nodes before committing.

**Core meaning & mental image — Tiếng Việt:** Nhân bản mục nhật ký; sao chép dòng ghi nhật ký phân tán. Hãy hình dung một kế toán trưởng nhận hóa đơn từ khách hàng: ông ta viết dòng thu chi đó vào sổ cái của mình, sau đó gửi các bản sao y hệt cho các kế toán viên chi nhánh để họ chép vào sổ của họ trước khi đóng dấu giao dịch hoàn tất.

**Grammar & collocations:** `coordinate log entry replication` — điều phối việc nhân bản mục nhật ký; `the durability of log entry replication` — độ bền vững của quá trình sao chép mục nhật ký; `asynchronous log entry replication` — nhân bản mục nhật ký bất đồng bộ.

**Register & nuance:** Trọng tâm hoạt động của mọi hệ cơ sở dữ liệu dựa trên nhật ký ghi trước (*Write-Ahead Log - WAL*). Việc ghi vào đĩa của các mục nhật ký phải hoàn tất trên đa số túc số trước khi lệnh được coi là an toàn và không thể bị đảo ngược.

**Examples:** `Once log entry replication succeeds across three out of five cluster members, the leader safely commits the mutation to its state machine.` → Một khi việc nhân bản mục nhật ký thành công trên ba trong số năm thành viên của cụm, nút trưởng sẽ an toàn áp dụng biến đổi vào máy trạng thái của mình.

**Liên kết tiếng Hàn:** `로그 항목 복제` (log 項目 複製) — nhân bản mục nhật ký, tiến trình sao chép lệnh ghi từ nút trưởng sang các nút con.

---

## 13. log divergence /ˈlɔːɡ daɪˈvɜːrdʒəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ diễn tả lỗi không nhất quán hoặc tân ngữ sau `reconcile`, `overwrite`, `detect`.

**Core meaning — English:** An inconsistent state in distributed systems where the sequence, terms, or contents of log entries on one or more follower nodes conflict with the authoritative log sequence maintained by the legitimate cluster leader.

**Core meaning & mental image — Tiếng Việt:** Sự phân kỳ nhật ký; tình trạng lệch nhật ký giữa các nút. Hãy hình dung hai cuốn sổ nhật trình tàu biển: trang 10 của thuyền trưởng ghi "rẽ hướng Bắc", nhưng trang 10 của hoa tiêu phụ bị kẹt máy ghi "rẽ hướng Đông": hai cuốn sổ đã bị rẽ nhánh xung đột và cần phải xé bỏ trang của hoa tiêu để chép lại theo thuyền trưởng.

**Grammar & collocations:** `resolve log divergence` — giải quyết sự phân kỳ nhật ký; `detect log divergence during heartbeat` — phát hiện sự lệch nhật ký trong quá trình gửi nhịp tim; `prevent unrecoverable log divergence` — ngăn chặn tình trạng phân kỳ nhật ký không thể phục hồi.

**Register & nuance:** Xảy ra sau các đợt đứt đoạn mạng hoặc khi một nút trưởng cũ bị cô lập vẫn tiếp tục nhận các lệnh ghi chưa được commit. Raft giải quyết bằng cách bắt ép các nút con ghi đè nhật ký của mình bằng các mục từ nút trưởng mới.

**Examples:** `The Raft leader resolves log divergence by forcing followers to overwrite conflicting uncommitted entries with its own authoritative history.` → Nút trưởng Raft giải quyết sự phân kỳ nhật ký bằng cách ép buộc các nút cấp dưới ghi đè các mục chưa commit bị xung đột bằng chính lịch sử có thẩm quyền của mình.

**Liên kết tiếng Hàn:** `로그 불일치` (log 不一致) / `로그 발산` (log 發散) — sự phân kỳ nhật ký, tình trạng sai lệch thứ tự bản ghi giữa nút trưởng và nút con.

---

## 14. commit index /kəˈmɪt ˈɪndɛks/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ theo dõi tiến độ hoặc tân ngữ sau `advance`, `persist`, `track`.

**Core meaning — English:** A monotonically increasing integer pointer stored on each cluster node representing the highest log entry index known to have been safely replicated on a quorum majority and therefore permanently applied to the state machine.

**Core meaning & mental image — Tiếng Việt:** Chỉ số cam kết lưu trữ; con trỏ xác nhận mục nhật ký đã cam kết. Hãy hình dung một chiếc kẹp giấy trên cuốn sổ công tác: các trang nằm trước chiếc kẹp là những quyết định đã đóng dấu đỏ ban hành không thể sửa đổi, còn các trang sau chiếc kẹp mới chỉ là dự thảo đang chờ xin chữ ký.

**Grammar & collocations:** `advance the commit index` — tịnh tiến chỉ số cam kết lưu trữ; `the highest commit index` — chỉ số cam kết cao nhất trong cụm; `replicate up to the commit index` — nhân bản dữ liệu đến đúng chỉ số cam kết.

**Register & nuance:** Khái niệm cốt lõi bảo đảm tính bất biến (*immutability*). Một khi mục nhật ký đạt chỉ số cam kết, hệ thống bảo đảm mục đó sẽ tồn tại vĩnh viễn trong mọi nhiệm kỳ của các đời leader tương lai (*Leader Completeness Property*).

**Examples:** `The leader informs followers of its current commit index in each AppendEntries RPC, instructing them to apply all preceding entries to their local state machines.` → Nút trưởng thông báo cho các nút cấp dưới chỉ số cam kết lưu trữ hiện tại của mình trong mỗi lệnh gọi RPC AppendEntries, chỉ dẫn họ áp dụng tất cả các mục đứng trước vào máy trạng thái cục bộ.

**Liên kết tiếng Hàn:** `커밋 인덱스` (commit index) / `확정 색인` (確定 索引) — chỉ số cam kết lưu trữ, vị trí bản ghi đã được đa số nút ghi nhận vĩnh viễn.

---

## 15. log compaction snapshot /ˈlɔːɡ kəmˈpækʃən ˈsnæpˌʃɑːt/

**Loại từ & vị trí trong câu:** `countable noun`. Thường làm chủ ngữ giải phóng tài nguyên hoặc tân ngữ sau `generate`, `truncate via`, `stream`.

**Core meaning — English:** A frozen image of the current cumulative state machine written to disk, allowing the system to safely discard and truncate historical log entries up to that index to reclaim disk storage and accelerate disaster recovery.

**Core meaning & mental image — Tiếng Việt:** Ảnh chụp nén gọn nhật ký; bản chụp trạng thái thu gọn nhật ký. Hãy hình dung thay vì giữ lại mười vạn hóa đơn mua bán từng mớ rau con cá suốt mười năm, kế toán trưởng chốt lại một dòng tổng kết số dư tài khoản tại ngày hôm nay, rồi đóng thùng tiêu hủy đống hóa đơn cũ để giải phóng diện tích kho lưu trữ.

**Grammar & collocations:** `generate a log compaction snapshot` — tạo một ảnh chụp nén gọn nhật ký; `stream a log compaction snapshot to lagging nodes` — truyền bản chụp trạng thái thu gọn cho các nút bị tụt hậu xa; `log truncation via log compaction snapshot` — cắt tỉa nhật ký thông qua bản chụp nén gọn.

**Register & nuance:** Bắt buộc đối với các hệ thống phân tán thực tế. Nếu không có cơ chế nén nhật ký, dung lượng đĩa sẽ cạn kiệt và việc khởi động lại một nút mới sẽ mất hàng giờ để phát lại hàng triệu dòng lệnh từ thuở khai sinh.

**Examples:** `To prevent unbounded disk consumption, the etcd cluster periodically takes a log compaction snapshot and purges all applied log entries prior to index 500,000.` → Để ngăn chặn việc tiêu thụ đĩa không giới hạn, cụm etcd định kỳ tạo một ảnh chụp nén gọn nhật ký và thanh lọc toàn bộ các mục nhật ký đã áp dụng trước chỉ số 500.000.

**Liên kết tiếng Hàn:** `로그 압축 스냅샷` (log 壓縮 snapshot) — bản chụp nén gọn nhật ký, hình ảnh lưu trạng thái cho phép xóa bớt lịch sử giao dịch cũ.

---

## 16. point-in-time state capture /ˈpɔɪnt ɪn taɪm steɪt ˈkæptʃər/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ bảo toàn dữ liệu hoặc tân ngữ sau `execute`, `serialize`, `archive via`.

**Core meaning — English:** The atomic serialization and freezing of an application's complete in-memory data structures at an exact, discrete logical timestamp, ensuring transactional consistency without halting active throughput.

**Core meaning & mental image — Tiếng Việt:** Chụp bắt trạng thái tại thời điểm cố định; đóng băng dữ liệu tức thời. Hãy hình dung một chiếc máy ảnh chụp tốc độ cao một vũ công đang xoay vòng giữa không trung: bức ảnh ghi lại chính xác từng nếp gấp của váy áo và vị trí cơ thể tại đúng phần nghìn giây đó mà không cần vũ công phải dừng chuyển động.

**Grammar & collocations:** `execute a point-in-time state capture` — thực thi việc chụp bắt trạng thái tại thời điểm cố định; `consistent point-in-time state capture` — bắt giữ trạng thái nhất quán tức thời; `restore from point-in-time state capture` — phục hồi hệ thống từ bản chụp bắt trạng thái tức thời.

**Register & nuance:** Khác với sao lưu gia tăng (*incremental backup*), khái niệm này bảo đảm tính toàn vẹn cách ly cấp độ giao dịch (*snapshot isolation*). Kỹ thuật này thường dựa vào cơ chế sao chép khi ghi (*Copy-on-Write - CoW*) của hệ điều hành.

**Examples:** `Using copy-on-write memory mechanics, the consensus engine performs a point-in-time state capture without pausing concurrent write requests.` → Sử dụng cơ chế bộ nhớ sao chép khi ghi, công cụ đồng thuận thực hiện việc chụp bắt trạng thái tại thời điểm cố định mà không cần tạm dừng các yêu cầu ghi đồng thời.

**Liên kết tiếng Hàn:** `특정 시점 상태 캡처` (特定 時點 狀態 capture) — chụp bắt trạng thái tại thời điểm cố định, đóng băng dữ liệu nguyên tử tại một mốc logic.

---

## 17. cluster reconfiguration /ˈklʌstər ˌriːkənˌfɪɡjəˈreɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ quản trị hệ thống hoặc tân ngữ sau `initiate`, `coordinate`, `safeguard`.

**Core meaning — English:** The operational process of dynamically altering a distributed cluster's membership set (adding new nodes or decommissioning obsolete machines) without halting availability or violating single-leader safety invariants.

**Core meaning & mental image — Tiếng Việt:** Tái cấu hình cụm máy chủ; thay đổi thành viên cụm động. Hãy hình dung một ban nhạc đang biểu diễn trực tiếp trên sân khấu: tay trống cũ xin rút lui và tay trống mới bước lên cầm dùi tiếp quản nhịp gõ mà bản nhạc không hề bị ngắt quãng một giây nào.

**Grammar & collocations:** `initiate cluster reconfiguration` — khởi tạo tiến trình tái cấu hình cụm; `online cluster reconfiguration` — tái cấu hình cụm trực tuyến không ngắt dịch vụ; `safety hazards during cluster reconfiguration` — các hiểm họa an toàn trong quá trình thay đổi thành viên cụm.

**Register & nuance:** Một trong những khía cạnh khó nhất của hệ phân tán. Việc chuyển đổi cấu hình ngây thơ (naive configuration switch) có thể tạo ra khoảnh khắc hai tập hợp độc lập cùng đạt đa số túc số và bầu ra hai leader khác nhau.

**Examples:** `During cluster reconfiguration, the control plane transitioned through an intermediate state to avoid splitting the voting pool into two disjoint quorums.` → Trong quá trình tái cấu hình cụm máy chủ, mặt phẳng điều khiển đã chuyển đổi qua một trạng thái trung gian để tránh việc chia rẽ nhóm cử tri thành hai túc số tách rời.

**Liên kết tiếng Hàn:** `클러스터 재구성` (cluster 再構成) — tái cấu hình cụm máy chủ, quy trình thêm bớt các nút phân tán khi đang chạy.

---

## 18. joint consensus /ˈdʒɔɪnt kənˈsɛnsəs/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ quy tắc an toàn hoặc bổ ngữ sau `transition via`, `operate in`, `require`.

**Core meaning — English:** A specialized two-phase configuration mechanism in Raft where the cluster operates under a hybrid configuration requiring separate majority approvals from both the old configuration group ($C_{old}$) and the new configuration group ($C_{new}$) simultaneously.

**Core meaning & mental image — Tiếng Việt:** Đồng thuận liên tịch; đồng thuận lưỡng viện chuyển tiếp. Hãy hình dung hai công ty đang sáp nhập: trong thời kỳ quá độ, bất kỳ quyết định chi tiêu lớn nào cũng phải được cả hội đồng quản trị công ty cũ VÀ hội đồng quản trị công ty mới cùng bỏ phiếu tán thành; thiếu chữ ký của một bên thì quyết định không có hiệu lực.

**Grammar & collocations:** `transition into joint consensus` — chuyển tiếp vào chế độ đồng thuận liên tịch; `the safety guarantee of joint consensus` — bảo đảm an toàn của cơ chế đồng thuận liên tịch; `commit a joint consensus configuration entry` — ghi nhận mục cấu hình đồng thuận liên tịch vào nhật ký.

**Register & nuance:** Cơ chế kinh điển do Diego Ongaro thiết kế. Nó cho phép thay đổi tùy ý số lượng nút trong cụm (ví dụ từ 3 nút lên 7 nút) mà không bao giờ gặp nguy cơ xuất hiện hai lãnh đạo độc lập cùng lúc.

**Examples:** `By logging a joint consensus entry, the cluster required majorities from both the legacy three-node and upcoming five-node layouts before fully enacting the change.` → Bằng cách ghi nhận mục đồng thuận liên tịch vào nhật ký, cụm máy chủ đòi hỏi đa số phiếu từ cả cấu hình cũ 3 nút lẫn cấu hình mới 5 nút trước khi chính thức áp dụng thay đổi.

**Liên kết tiếng Hàn:** `공동 합의` (共同 合意) — đồng thuận liên tịch, cơ chế yêu cầu sự phê chuẩn đồng thời của cả cấu hình cũ và mới.

---

## 19. network partition /ˈnɛtwɜːrk pɑːrˈtɪʃən/

**Loại từ & vị trí trong câu:** `countable noun`. Thường làm chủ ngữ gây thảm họa hoặc tân ngữ sau `suffer`, `isolate via`, `recover from`.

**Core meaning — English:** A communication failure in a distributed network where nodes are divided into two or more completely disconnected subsets that cannot exchange packets, despite the individual nodes remaining healthy and operational.

**Core meaning & mental image — Tiếng Việt:** Sự phân mảnh mạng; phân vùng mạng cô lập. Hãy hình dung một chiếc cầu nối hai bờ sông bỗng nhiên bị sập trong cơn bão: người dân hai bên bờ sông đều khỏe mạnh bình thường, nhưng không ai có thể gửi thư từ hay nói chuyện được với bờ bên kia, tạo ra hai thế giới bị cắt đứt liên lạc hoàn toàn.

**Grammar & collocations:** `suffer a severe network partition` — chịu sự phân mảnh mạng nghiêm trọng; `a cross-datacenter network partition` — sự phân vùng mạng giữa các trung tâm dữ liệu; `heal after a network partition` — hàn gắn kết nối sau khi hết phân mảnh mạng.

**Register & nuance:** Chữ "P" trong định lý CAP (*Consistency, Availability, Partition tolerance*). Trong điện toán phân tán thực tế, phân mảnh mạng là điều tất yếu không thể tránh khỏi (do đứt cáp quang, cấu hình sai switch, tường lửa lỗi), buộc hệ thống phải lựa chọn giữa tính nhất quán hoặc tính sẵn sàng.

**Examples:** `A catastrophic switch failure induced a network partition that isolated the primary leader from four out of seven cluster members.` → Sự cố hỏng hóc thiết bị chuyển mạch thảm khốc đã gây ra sự phân mảnh mạng cô lập nút trưởng chính khỏi bốn trong số bảy thành viên của cụm.

**Liên kết tiếng Hàn:** `네트워크 분할` (network 分割) / `망 분할` (網 分割) — sự phân mảnh mạng, hiện tượng các nút bị chia cắt kết nối thành các nhóm độc lập.

---

## 20. split-brain anomaly /ˈsplɪt breɪn əˈnɑːməli/

**Loại từ & vị trí trong câu:** `countable noun`. Thường làm chủ ngữ gây phá hoại dữ liệu hoặc tân ngữ sau `prevent`, `suffer from`, `manifest as`.

**Core meaning — English:** A dangerous failure condition arising from a network partition where two disconnected sub-clusters both believe they hold legitimate leadership authority, simultaneously accepting conflicting writes and corrupting data integrity.

**Core meaning & mental image — Tiếng Việt:** Dị thường xung đột não đôi; thảm họa hai đầu phân liệt. Hãy hình dung một cơ thể người nhưng hai bán cầu não bị đứt dây thần kinh kết nối: bán cầu não trái ra lệnh cho tay phải nhặt chiếc bánh mì, còn bán cầu não phải lại ra lệnh cho tay trái vứt chiếc bánh mì vào thùng rác: cơ thể tự đánh nhau và làm hỏng mọi việc.

**Grammar & collocations:** `trigger a split-brain anomaly` — kích hoạt dị thường xung đột não đôi; `mitigate the split-brain anomaly` — giảm thiểu dị thường hai đầu não xung đột; `data corruption caused by split-brain anomaly` — sự hỏng hóc dữ liệu do dị thường não đôi gây ra.

**Register & nuance:** Cơn ác mộng lớn nhất của các kỹ sư kiến trúc đám mây. Nếu xảy ra dị thường này, cả hai phía đều tin mình là chính thống và cùng ghi đè lên kho lưu trữ, gây ra mất mát dữ liệu vĩnh viễn không thể cứu vãn (*unrecoverable corruption*).

**Examples:** `Without strict quorum enforcement, the partitioned replicas suffered a split-brain anomaly, allowing two separate leaders to process contradictory financial transactions.` → Nếu không có sự thực thi túc số nghiêm ngặt, các bản sao bị phân vùng mạng đã mắc phải dị thường xung đột não đôi, cho phép hai nút trưởng riêng biệt cùng xử lý các giao dịch tài chính mâu thuẫn nhau.

**Liên kết tiếng Hàn:** `스플릿 브레인 이상 현상` (split-brain 異常 現象) / `양분 뇌 결함` (兩分 腦 缺陷) — dị thường xung đột não đôi, lỗi hai nút cùng nhận quyền điều hành gây sai lệch dữ liệu.

---

## 21. fencing token validation /ˈfɛnsɪŋ ˈtoʊkən ˌvæləˈdeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ bảo vệ tài nguyên hoặc bổ ngữ sau `enforce`, `rely on`, `implement`.

**Core meaning — English:** The architectural defense mechanism where shared storage or resources verify that every incoming write carries a strictly monotonically increasing authorization token, instantly rejecting commands issued by demoted, zombie leaders.

**Core meaning & mental image — Tiếng Việt:** Xác thực mã rào chắn bảo vệ; kiểm định token chặn cửa tài nguyên. Hãy hình dung một chiếc két sắt ngân hàng chỉ chấp nhận thẻ từ có mã số lớn hơn mã số trước đó: hôm qua giám đốc cũ mang thẻ số 10 đến rút tiền, hôm nay giám đốc mới mang thẻ số 11; lát sau ông giám đốc cũ quay lại dùng thẻ số 10, két sắt lập tức phát còi báo động và khóa chặt cửa từ chối phục vụ.

**Grammar & collocations:** `enforce fencing token validation` — thực thi việc xác thực mã rào chắn; `rely on fencing token validation` — dựa vào sự kiểm định token rào chắn bảo vệ; `pass fencing token validation` — vượt qua bước xác thực token bảo vệ.

**Register & nuance:** Được Martin Kleppmann phân tích sâu sắc trong cuốn *Designing Data-Intensive Applications*. Đây là phương thức duy nhất có thể bảo vệ các tài nguyên lưu trữ dùng chung chống lại các nút "thây ma" (*zombie nodes*) bị tạm dừng do Garbage Collection rồi đột ngột tỉnh dậy ghi đè dữ liệu.

**Examples:** `Shared network storage uses fencing token validation to reject stale write commands originating from an isolated former leader.` → Hệ thống lưu trữ mạng dùng chung sử dụng việc xác thực mã rào chắn bảo vệ để từ chối các lệnh ghi lỗi thời xuất phát từ một cựu nút trưởng đã bị cô lập.

**Liên kết tiếng Hàn:** `펜싱 토큰 검증` (fencing token 檢證) — xác thực mã rào chắn bảo vệ, cơ chế chặn các lệnh ghi từ nút lãnh đạo lỗi thời.

---

## 22. node isolation /ˈnoʊd ˌaɪsəˈleɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ xử lý sự cố hoặc tân ngữ sau `trigger`, `resort to`, `enact`.

**Core meaning — English:** The deliberate administrative or programmatic quarantine of a malfunctioning, unresponsive, or partitioned server node from the active cluster topology to safeguard collective operational integrity.

**Core meaning & mental image — Tiếng Việt:** Cô lập nút mạng; cách ly máy chủ lỗi khỏi cụm. Hãy hình dung một tàu ngầm bị thủng một khoang: thuyền trưởng lập tức hạ cửa thép chống nước đóng chặt khoang đó lại, chấp nhận cách ly khoang ngập nước để giữ cho toàn bộ phần còn lại của con tàu không bị chìm xuống đáy biển.

**Grammar & collocations:** `enact immediate node isolation` — ban hành lệnh cô lập nút mạng ngay lập tức; `automatic node isolation` — sự cô lập nút mạng tự động qua giám sát; `recover following node isolation` — phục hồi hệ thống sau khi cách ly nút hỏng.

**Register & nuance:** Thường được thực hiện thông qua cơ chế cắt nguồn từ xa (*STONITH - Shoot The Other Node In The Head*) hoặc thu hồi quyền truy cập mạng ở cấp độ ảo hóa để ngăn chặn nút lỗi tiếp tục phát tán các thông điệp sai lệch.

**Examples:** `Automated health-checking watchdogs enacted node isolation on the unresponsive database replica to protect the write quorum.` → Các dịch vụ giám sát sức khỏe tự động đã tiến hành cô lập nút mạng trên bản sao cơ sở dữ liệu không phản hồi để bảo vệ túc số ghi.

**Liên kết tiếng Hàn:** `노드 격리` (node 隔離) — cô lập nút mạng, quy trình cách ly một máy chủ gặp sự cố để bảo vệ toàn hệ thống.

---

## 23. Byzantine lease revocation /ˈbɪzəntiːn liːs ˌrɛvəˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ thiết lập trật tự hoặc tân ngữ sau `execute`, `guarantee via`, `mandate`.

**Core meaning — English:** The protocol-driven invalidation and reclamation of time-bounded leadership authorizations (leases) even when rogue, compromised, or arbitrarily malfunctioning (Byzantine) nodes attempt to unlawfully cling to control.

**Core meaning & mental image — Tiếng Việt:** Thu hồi quyền thuê lãnh đạo chống lỗi Byzantine; tước bỏ hợp đồng ủy quyền của nút phản bội. Hãy hình dung một viên quản gia được giao chìa khóa mở kho bạc có giá trị trong đúng 60 phút: hết 60 phút, dù viên quản gia có làm giả chữ ký, nói dối hay tìm mọi cách trì hoãn không chịu trả chìa, ổ khóa điện tử trung tâm cũng tự động đổi mã và vô hiệu hóa chiếc chìa khóa cũ.

**Grammar & collocations:** `execute Byzantine lease revocation` — thực thi việc thu hồi quyền thuê chống lỗi Byzantine; `guarantee safety through Byzantine lease revocation` — bảo đảm an toàn thông qua thu hồi quyền ủy thác Byzantine; `the latency cost of Byzantine lease revocation` — chi phí độ trễ của việc thu hồi hợp đồng thuê Byzantine.

**Register & nuance:** Áp dụng cho các mô hình mạng không tin cậy (*untrusted environments*) hoặc các hệ thống đòi hỏi độ an toàn cực cao. Thuật ngữ này giải quyết triệt để vấn đề đồng hồ trôi dạt (*clock drift*) và hành vi lừa đảo có chủ đích của các nút bị xâm nhập.

**Examples:** `When the master server exhibited arbitrary message corruption, the consensus orchestrator executed a Byzantine lease revocation to strip its authority.` → Khi máy chủ điều hành có biểu hiện làm sai lệch thông điệp một cách tùy tiện, bộ điều phối đồng thuận đã thực thi việc thu hồi quyền thuê lãnh đạo chống lỗi Byzantine để tước bỏ thẩm quyền của nó.

**Liên kết tiếng Hàn:** `비잔틴 임대 철회` (Byzantine 賃貸 撤回) / `비잔틴 리스 회수` (Byzantine lease 回收) — thu hồi hợp đồng thuê quyền lãnh đạo chống lỗi Byzantine, vô hiệu hóa nút bất tuân quy chuẩn.

---

## 24. linearizable read /ˌlɪniəˈraɪzəbəl riːd/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng số nhiều `linearizable reads`). Thường làm tân ngữ sau `guarantee`, `serve`, `enforce`.

**Core meaning — English:** A read operation that guarantees strong consistency by returning the state resulting from the latest committed write in global real time, preventing clients from ever observing stale or retrogressing data states.

**Core meaning & mental image — Tiếng Việt:** Truy vấn đọc tuyến tính hóa; thao tác đọc nhất quán thời gian thực nghiêm ngặt. Hãy hình dung một chiếc đồng hồ điện tử khổng lồ giữa quảng trường: bất kỳ ai ngước lên nhìn cũng thấy đúng một mốc giây chuẩn xác nhất, không bao giờ có chuyện người này nhìn thấy 12:00 mà người đứng cạnh lại thấy 11:59.

**Grammar & collocations:** `serve linearizable reads` — phục vụ các truy vấn đọc tuyến tính hóa; `the overhead of linearizable reads` — chi phí tài nguyên của các truy vấn đọc tuyến tính hóa; `ensure linearizable reads via leader leases` — bảo đảm truy vấn đọc tuyến tính hóa thông qua hợp đồng thuê trưởng cụm.

**Register & nuance:** Tiêu chuẩn vàng của tính nhất quán mạnh (*strong consistency*). Để thực hiện một *linearizable read*, nút trưởng thường phải trao đổi một vòng nhịp tim với đa số túc số để xác minh rằng mình chưa bị phế truất trước khi trả kết quả cho khách hàng.

**Examples:** `To serve a linearizable read without reading stale data from a partitioned former leader, the primary node verifies its current lease with a quorum before responding.` → Để phục vụ một truy vấn đọc tuyến tính hóa mà không đọc phải dữ liệu lỗi thời từ một cựu nút trưởng bị phân vùng mạng, nút chính xác minh hợp đồng thuê hiện tại của mình với túc số trước khi phản hồi.

**Liên kết tiếng Hàn:** `선형화 가능 읽기` (線形化 可能 읽기) / `선형화 독출` (線形化 讀出) — truy vấn đọc tuyến tính hóa, thao tác đọc bảo đảm dữ liệu mới nhất tuyệt đối theo dòng thời gian thực.

---

## 25. epoch fencing /ˈiːpɑːk ˈfɛnsɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ kỹ thuật an toàn hoặc tân ngữ sau `apply`, `mandate`, `protect via`.

**Core meaning — English:** An architectural isolation pattern where all operations and state modifications are tagged with an immutable generation or epoch number, allowing subsystems to unconditionally discard any request stamped with a superseded epoch.

**Core meaning & mental image — Tiếng Việt:** Cơ chế rào chắn kỷ nguyên; bảo vệ bằng số hiệu kỷ nguyên logic. Hãy hình dung một triều đại phong kiến: khi vua mới lên ngôi đặt niên hiệu mới (ví dụ "Kỷ nguyên Vĩnh Lạc"), tất cả các chiếu chỉ đóng dấu niên hiệu cũ ("Kỷ nguyên Hồng Vũ") khi được mang tới cửa khẩu đều bị lính gác lập tức tịch thu và thiêu hủy.

**Grammar & collocations:** `enforce epoch fencing` — thực thi cơ chế rào chắn kỷ nguyên; `protect the storage layer via epoch fencing` — bảo vệ tầng lưu trữ thông qua cơ chế rào chắn kỷ nguyên; `epoch fencing verification` — quy trình kiểm tra rào chắn kỷ nguyên.

**Register & nuance:** Thường được gọi là *Generation Clock* hoặc *Fencing Epoch*. Kỹ thuật này biến việc kiểm tra quyền hạn thành một phép so sánh số nguyên cực nhanh (`request_epoch >= current_epoch`), triệt tiêu hoàn toàn nguy cơ ghi đè dữ liệu từ các tiến trình cũ.

**Examples:** `By incorporating epoch fencing into the disk controller, the database guarantees that delayed write packets from deposed leaders are instantly dropped.` → Bằng cách tích hợp cơ chế rào chắn kỷ nguyên vào bộ điều khiển đĩa, cơ sở dữ liệu bảo đảm rằng các gói tin ghi bị trễ từ các nút trưởng bị phế truất sẽ bị hủy bỏ ngay lập tức.

**Liên kết tiếng Hàn:** `에포크 펜싱` (epoch fencing) / `세대 번호 격리 장벽` (世代 番號 隔離 障壁) — cơ chế rào chắn kỷ nguyên, lá chắn ngăn chặn các tác vụ mang số hiệu thời kỳ lỗi thời.

---

## Review in context (Part 1: Consensus Foundations, Leader Election, and Term Progression)

In enterprise cloud infrastructures, mission-critical databases require rigorous **distributed consensus** to guarantee data integrity across geographically dispersed clusters. At the heart of these architectures lies **state machine replication**, which guarantees that every operational node independently executes identical write operations in an unvarying chronological sequence. Modern distributed platforms increasingly rely on the **Raft consensus protocol**, prized for its structured decomposition of synchronization states and transparent maintainability. Under standard operational conditions, the cluster maintains stability through a continuous **leader election heartbeat**, which suppresses follower rebellion and announces the leader's active vitality. Alongside these empty pings, the leader dispatches the multi-purpose **AppendEntries RPC**, replicating transaction batches across network nodes and updating synchronization watermarks. Each node constantly monitors an **election timeout threshold**, measuring whether the primary server has vanished or suffered a catastrophic hardware failure. When this timer expires, the node increments its **monotonic term counter**, establishing a higher logical era that renders previous commands obsolete. Immediately after this increment, the server initiates a **candidate state transition**, asserting its right to assume control and broadcasting ballot requests across the network. To officially claim the authority of the leader, the applicant must secure a strict **quorum majority**, proving that more than half of active cluster participants validate its log history. However, if multiple peers contest the vacancy at the exact same instant, the system encounters a crippling **split-vote condition**, leaving the cluster leaderless. To bypass this synchronization deadlock, the protocol enforces a **randomized election timeout**, staggering candidate countdowns so that a single contender almost always times out first to secure majority backing. Once firmly in power, the new leader coordinates reliable **log entry replication**, ensuring that all prospective database writes are durably recorded across quorum followers before final execution.

**Bản dịch tiếng Việt:**

Trong các hạ tầng đám mây doanh nghiệp, các cơ sở dữ liệu tối quan trọng đòi hỏi sự đồng thuận phân tán (**distributed consensus**) nghiêm ngặt để bảo đảm tính toàn vẹn dữ liệu xuyên suốt các cụm máy chủ phân tán về mặt địa lý. Nằm tại trái tim của những kiến trúc này là kỹ thuật nhân bản máy trạng thái (**state machine replication**), bảo đảm rằng mọi nút vận hành đều thực thi độc lập các thao tác ghi giống hệt nhau theo một trình tự biên niên không đổi. Các nền tảng phân tán hiện đại ngày càng tin dùng giao thức đồng thuận Raft (**Raft consensus protocol**), được đánh giá cao nhờ sự phân rã có cấu trúc các trạng thái đồng bộ và tính dễ bảo trì minh bạch. Dưới điều kiện vận hành chuẩn mực, cụm duy trì sự ổn định thông qua một nhịp tim duy trì quyền lãnh đạo (**leader election heartbeat**) liên tục, giúp dập tắt sự nổi dậy của các nút con và thông báo sức sống mãnh liệt của nút trưởng. Song hành với các tín hiệu ping rỗng này, nút trưởng phát đi lệnh gọi từ xa ghi nối nhật ký AppendEntries (**AppendEntries RPC**) đa năng, vừa nhân bản các lô giao dịch qua các nút mạng vừa cập nhật mực nước đồng bộ. Mỗi nút liên tục giám sát một ngưỡng hết hạn thời gian bầu cử (**election timeout threshold**), đong đếm xem máy chủ chính đã biến mất hay gặp sự cố phần cứng thảm khốc. Khi bộ đếm này hết hạn, nút lập tức tăng bộ đếm nhiệm kỳ đơn điệu tăng (**monotonic term counter**) của mình, thiết lập một kỷ nguyên logic cao hơn khiến các lệnh trước đó trở nên lỗi thời. Ngay sau bước tăng này, máy chủ bắt đầu bước chuyển sang trạng thái ứng cử viên (**candidate state transition**), khẳng định quyền tiếp quản quyền điều hành và phát các yêu cầu bỏ phiếu khắp mạng lưới. Để chính thức tuyên bố quyền lực lãnh đạo, người nộp đơn phải bảo đảm đạt được một đa số túc số (**quorum majority**) nghiêm ngặt, chứng minh rằng hơn một nửa số thành viên tham gia cụm xác thực lịch sử nhật ký của nó. Tuy nhiên, nếu nhiều nút mạng cùng tranh giành vị trí khuyết vào cùng một tích tắc, hệ thống sẽ gặp phải tình trạng phiếu bầu bị phân tán (**split-vote condition**) tê liệt, khiến cả cụm rơi vào tình trạng rắn mất đầu. Để vượt qua thế bế tắc đồng bộ này, giao thức thực thi một thời gian chờ bầu cử ngẫu nhiên hóa (**randomized election timeout**), làm lệch pha thời gian đếm ngược của các ứng viên để hầu như luôn có một người hết hạn trước và gom đủ sự ủng hộ của đa số. Một khi đã nắm chắc quyền lực, nút trưởng mới điều phối việc nhân bản mục nhật ký (**log entry replication**) đáng tin cậy, bảo đảm rằng mọi lệnh ghi cơ sở dữ liệu tương lai đều được ghi chép bền vững qua các nút theo sau trong túc số trước khi thực thi chung cuộc.

---

## Review in context (Part 2: Log Consistency, Membership Changes, Split-Brain, and Fencing)

As distributed clusters scale under production write workloads, uncoordinated network anomalies inevitably trigger troublesome **log divergence**, requiring the authoritative leader to forcefully overwrite mismatched follower records. To maintain global transactional consistency, the leader continuously increments its internal **commit index**, signaling to worker nodes which entries are permanently etched into persistent state. Over weeks of sustained throughput, disk volumes become strained, prompting the engine to generate a compact **log compaction snapshot** that discards historic transactions without losing cumulative accuracy. This periodic truncation is powered by a lossless **point-in-time state capture**, serializing in-memory application memory into persistent disk blocks while serving live user queries. When infrastructure engineers add or decommission nodes, they orchestrate an online **cluster reconfiguration**, updating membership parameters without taking critical services offline. To eliminate synchronization hazards where concurrent majorities might emerge, the cluster safely shifts through an intermediate **joint consensus**, mandating joint approval from both incoming and outgoing server configurations. The true resilience of this consensus mechanism is tested when a sudden physical cable severance induces an asymmetrical **network partition**, dividing nodes into isolated enclaves. Left unchecked, such isolation would trigger a catastrophic **split-brain anomaly**, allowing competing partitions to elect independent leaders and permanently corrupt persistent data structures. To counteract this peril, the architecture enforces strict **fencing token validation**, compelling external storage controllers to reject any mutation stamped with an outdated epoch counter. Concurrently, operational watchdogs execute decisive **node isolation**, disconnecting unhealthy or unresponsive nodes to protect cluster stability. In complex zero-trust configurations, the orchestrator triggers immediate **Byzantine lease revocation**, abruptly stripping computational authority from malicious or corrupted participants. Through these multi-layered defensive strategies, the primary engine can reliably serve each incoming **linearizable read**, providing users with absolute certainty that returned data reflects the freshest world state. Anchoring this entire defensive perimeter is immutable **epoch fencing**, guaranteeing that stale writes from deposed historical leaders are discarded before they can compromise persistent storage.

**Bản dịch tiếng Việt:**

Khi các cụm máy chủ phân tán mở rộng dưới khối lượng công việc ghi dữ liệu thực tế, các dị thường mạng không lường trước chắc chắn sẽ kích hoạt sự phân kỳ nhật ký (**log divergence**) rắc rối, đòi hỏi nút trưởng có thẩm quyền phải dùng sức mạnh để ghi đè lên các bản ghi bị lệch của nút con. Để duy trì tính nhất quán giao dịch toàn cục, nút trưởng liên tục tăng chỉ số cam kết lưu trữ (**commit index**) nội bộ của mình, ra tín hiệu cho các nút công nhân biết những mục nào đã được khắc vĩnh viễn vào trạng thái bền vững. Trải qua nhiều tuần lễ hoạt động công suất cao, dung lượng đĩa trở nên quá tải, thôi thúc công cụ tạo ra một ảnh chụp nén gọn nhật ký (**log compaction snapshot**) cô đọng nhằm loại bỏ các giao dịch lịch sử mà không làm mất đi độ chính xác tích lũy. Việc cắt tỉa định kỳ này được tiếp sức bởi kỹ thuật chụp bắt trạng thái tại thời điểm cố định (**point-in-time state capture**) không tổn hao dữ liệu, tuần tự hóa bộ nhớ ứng dụng vào các khối đĩa bền vững trong khi vẫn tiếp tục phục vụ các truy vấn trực tiếp từ người dùng. Khi các kỹ sư hạ tầng bổ sung hoặc ngừng vận hành các nút máy chủ, họ điều phối một cuộc tái cấu hình cụm máy chủ (**cluster reconfiguration**) trực tuyến, cập nhật các thông số thành viên mà không cần ngắt các dịch vụ trọng yếu. Để loại trừ các nguy cơ đồng bộ nơi các nhóm đa số trùng lặp có thể xuất hiện, cụm máy chủ chuyển đổi an toàn qua một cơ chế đồng thuận liên tịch (**joint consensus**) trung gian, bắt buộc phải có sự phê chuẩn chung từ cả cấu hình máy chủ cũ lẫn cấu hình mới. Sức bền thực sự của cơ chế đồng thuận này chỉ được thử thách khi một sự cố đứt cáp vật lý đột ngột gây ra sự phân mảnh mạng (**network partition**) bất đối xứng, chia cắt các nút thành các ốc đảo bị cô lập. Nếu không được kiểm soát, sự cô lập như vậy sẽ kích hoạt một dị thường xung đột não đôi (**split-brain anomaly**) thảm khốc, cho phép các phân vùng cạnh tranh nhau tự bầu ra các lãnh đạo độc lập và làm hỏng vĩnh viễn các cấu trúc dữ liệu bền vững. Để chống lại hiểm họa này, kiến trúc thực thi việc xác thực mã rào chắn bảo vệ (**fencing token validation**) nghiêm ngặt, buộc các bộ điều khiển lưu trữ bên ngoài phải từ chối mọi thay đổi mang con dấu bộ đếm kỷ nguyên đã lỗi thời. Đồng thời, các hệ thống giám sát vận hành thực thi sự cô lập nút mạng (**node isolation**) dứt khoát, ngắt kết nối các nút không khỏe mạnh hoặc không phản hồi để bảo vệ sự ổn định của cụm. Trong các cấu hình không tin cậy phức tạp, bộ điều phối kích hoạt việc thu hồi quyền thuê lãnh đạo chống lỗi Byzantine (**Byzantine lease revocation**) ngay lập tức, tước bỏ thẩm quyền tính toán khỏi các bên tham gia độc hại hoặc bị sai lệch dữ liệu. Thông qua những chiến lược phòng thủ đa tầng này, công cụ chính có thể phục vụ đáng tin cậy từng truy vấn đọc tuyến tính hóa (**linearizable read**) gửi tới, mang lại cho người dùng sự chắc chắn tuyệt đối rằng dữ liệu trả về phản ánh trạng thái thế giới mới nhất. Neo giữ toàn bộ chu vi phòng thủ này là cơ chế rào chắn kỷ nguyên (**epoch fencing**) bất biến, bảo đảm rằng các lệnh ghi cũ kỹ từ các cựu nút trưởng bị phế truất trong lịch sử sẽ bị vứt bỏ trước khi chúng có thể gây tổn hại cho bộ nhớ lưu trữ bền bỉ.
