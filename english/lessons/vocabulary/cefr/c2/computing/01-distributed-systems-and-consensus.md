# C2 Vocabulary — Distributed systems and consensus

This lesson follows a distributed service from agreeing on shared state to handling failures, partitioning data, and protecting overloaded components.

Flow: **consensus protocol → quorum → leader election → replicated state machine → linearizability → eventual consistency → vector clock → Lamport timestamp → split-brain → Byzantine fault → failure detector → write-ahead log → log replication → sharding → consistent hashing → gossip protocol → idempotency → backpressure → fencing token → lease**.

## 1. consensus protocol /kənˈsɛnsəs ˈproʊtəˌkɔl/
**Part of speech:** noun
**Core meaning (English):** a set of rules that allows independent machines to agree on one value or sequence of decisions despite delays or failures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giao thức đồng thuận; hình dung nhiều máy không nhìn thấy mọi thứ cùng lúc nhưng vẫn phải thống nhất xem trạng thái nào được coi là chính thức.
**Grammar & collocations:** `distributed consensus protocol` — giao thức đồng thuận phân tán; `run a consensus protocol` — vận hành giao thức đồng thuận; `consensus round` — vòng đồng thuận.
**Examples:** `The cluster uses a consensus protocol so every replica commits configuration changes in the same order.` → Cụm máy dùng giao thức đồng thuận để mọi bản sao xác nhận thay đổi cấu hình theo cùng một thứ tự.
**Liên kết tiếng Hàn:** `합의 프로토콜` (habui peurotokol) — giao thức đồng thuận.

## 2. quorum /ˈkwɔrəm/
**Part of speech:** noun
**Core meaning (English):** the minimum number of participating members whose responses are sufficient for a distributed decision to be accepted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số lượng tối thiểu cần thiết để một quyết định có hiệu lực; hình dung hệ thống không cần chờ tất cả các máy, nhưng phải có đủ số phiếu để tránh hai nhóm tự quyết trái nhau.
**Grammar & collocations:** `reach a quorum` — đạt đủ số lượng cần thiết; `quorum read` — đọc theo quorum; `quorum size` — kích thước quorum.
**Examples:** `The write was delayed because the coordinator could not reach a quorum after two replicas went offline.` → Lần ghi bị trì hoãn vì bộ điều phối không đạt đủ quorum sau khi hai bản sao mất kết nối.
**Liên kết tiếng Hàn:** `정족수` (jeongjoksu) — số lượng tối thiểu để quyết định có hiệu lực.

## 3. leader election /ˈliːdər ɪˈlɛkʃən/
**Part of speech:** noun
**Core meaning (English):** the process by which a group of nodes chooses one member to coordinate a shared task or authoritative sequence of operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quá trình bầu nút lãnh đạo; hình dung nhiều máy ngang hàng chọn một máy tạm thời đứng ra sắp thứ tự công việc chung.
**Grammar & collocations:** `trigger leader election` — kích hoạt bầu leader; `leader-election timeout` — thời gian chờ bầu leader; `win the election` — thắng vòng bầu leader.
**Examples:** `A leader election began automatically when the previous coordinator stopped sending heartbeats.` → Quá trình bầu leader tự động bắt đầu khi bộ điều phối trước đó ngừng gửi tín hiệu heartbeat.
**Liên kết tiếng Hàn:** `리더 선출` (rideo seonchul) — bầu leader.

## 4. replicated state machine /ˈrɛpləˌkeɪtɪd steɪt məˈʃiːn/
**Part of speech:** noun
**Core meaning (English):** a model in which several machines apply the same ordered commands to copies of the same state so they remain logically equivalent.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** máy trạng thái được sao chép; hình dung nhiều bản sao bắt đầu giống nhau và cùng thực hiện chính xác một chuỗi lệnh nên cuối cùng vẫn cho cùng trạng thái.
**Grammar & collocations:** `replicated-state-machine model` — mô hình máy trạng thái sao chép; `apply a command to the state machine` — áp dụng lệnh vào máy trạng thái.
**Examples:** `The metadata service is implemented as a replicated state machine so a single server failure does not erase authoritative state.` → Dịch vụ metadata được triển khai dưới dạng máy trạng thái sao chép để việc một server hỏng không làm mất trạng thái chính thức.
**Liên kết tiếng Hàn:** `복제 상태 머신` (bokje sangtae meosin) — máy trạng thái sao chép.

## 5. linearizability /ˌlɪniərəˈzəbɪləti/
**Part of speech:** noun
**Core meaning (English):** a strong consistency property in which each operation appears to take effect at one instant between its invocation and completion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính tuyến tính hóa; hình dung dù nhiều thao tác xảy ra đồng thời, người dùng vẫn có thể tưởng tượng chúng đã diễn ra theo một thứ tự duy nhất, hợp lý với thời gian thực.
**Grammar & collocations:** `linearizable register` — thanh ghi có tính tuyến tính hóa; `guarantee linearizability` — bảo đảm linearizability; `linearizability violation` — vi phạm tính tuyến tính hóa.
**Examples:** `The lock service requires linearizability because two clients must never both believe they acquired the same exclusive lock first.` → Dịch vụ khóa cần tính tuyến tính hóa vì hai client không bao giờ được đồng thời tin rằng mình là bên đầu tiên lấy cùng một khóa độc quyền.
**Liên kết tiếng Hàn:** `선형화 가능성` (seonhyeonghwa ganeungseong) — tính tuyến tính hóa.

## 6. eventual consistency /ɪˈvɛntʃuəl kənˈsɪstənsi/
**Part of speech:** noun
**Core meaning (English):** a consistency model in which replicas may temporarily disagree but converge if no new updates occur.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhất quán cuối cùng; hình dung các bản sao có thể lệch nhau trong chốc lát nhưng, khi dòng cập nhật dừng lại, chúng dần hội tụ về cùng dữ liệu.
**Grammar & collocations:** `eventually consistent store` — kho dữ liệu nhất quán cuối cùng; `provide eventual consistency` — cung cấp nhất quán cuối cùng; `convergence under eventual consistency` — sự hội tụ trong mô hình này.
**Examples:** `The profile cache accepts eventual consistency because a newly changed avatar may take a few seconds to appear everywhere.` → Bộ nhớ đệm hồ sơ chấp nhận nhất quán cuối cùng vì ảnh đại diện mới có thể mất vài giây mới xuất hiện ở mọi nơi.
**Liên kết tiếng Hàn:** `최종적 일관성` (choejongjeok ilgwanseong) — nhất quán cuối cùng.

## 7. vector clock /ˈvɛktər klɑk/
**Part of speech:** noun
**Core meaning (English):** a collection of logical counters used to track causal relationships between events in different nodes of a distributed system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồng hồ vector; hình dung mỗi node giữ một dãy bộ đếm để hệ thống biết sự kiện nào chắc chắn xảy ra trước sự kiện nào và sự kiện nào thật sự đồng thời.
**Grammar & collocations:** `compare vector clocks` — so sánh đồng hồ vector; `vector-clock entry` — phần tử của vector clock; `causal ordering` — thứ tự nhân quả.
**Examples:** `The database compared vector clocks to determine whether the two updates were concurrent rather than overwriting one blindly.` → Cơ sở dữ liệu so sánh vector clock để xác định hai cập nhật có đồng thời hay không thay vì ghi đè một cách mù quáng.
**Liên kết tiếng Hàn:** `벡터 시계` (bekteo sigye) — đồng hồ vector.

## 8. Lamport timestamp /ˈlæmpɔrt ˈtaɪmˌstæmp/
**Part of speech:** noun
**Core meaning (English):** a logical timestamp that assigns increasing counters to events so causally earlier events receive smaller values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dấu thời gian Lamport; hình dung hệ phân tán không cố đồng bộ đồng hồ vật lý tuyệt đối mà dùng số đếm logic để bảo toàn thứ tự nhân quả quan trọng.
**Grammar & collocations:** `Lamport logical clock` — đồng hồ logic Lamport; `assign a Lamport timestamp` — gán dấu thời gian Lamport; `timestamp ordering` — sắp thứ tự bằng timestamp.
**Examples:** `Each message carries a Lamport timestamp so the receiver can advance its logical clock consistently.` → Mỗi message mang một dấu thời gian Lamport để bên nhận có thể tăng đồng hồ logic một cách nhất quán.
**Liên kết tiếng Hàn:** `램포트 타임스탬프` (raempoteu taimseutaempeu) — dấu thời gian Lamport.

## 9. split-brain /ˈsplɪt ˌbreɪn/
**Part of speech:** noun; often attributive in technical writing
**Core meaning (English):** a failure condition in which separated parts of one cluster each behave as though they are the authoritative active system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trạng thái “chia đôi bộ não”; hình dung mạng bị cắt làm hai và cả hai phía đều nghĩ mình là hệ thống chính, từ đó có thể tạo ra thay đổi xung đột.
**Grammar & collocations:** `split-brain condition` — tình trạng split-brain; `prevent split-brain` — ngăn split-brain; `split-brain recovery` — khôi phục sau split-brain.
**Examples:** `The quorum rule prevents a minority partition from entering a split-brain state and accepting conflicting writes.` → Quy tắc quorum ngăn phân vùng thiểu số rơi vào trạng thái split-brain và nhận các lần ghi xung đột.
**Liên kết tiếng Hàn:** `스플릿 브레인` (seupeullit beurein) — split-brain trong hệ phân tán.

## 10. Byzantine fault /ˈbɪzənˌtiːn fɔlt/
**Part of speech:** noun
**Core meaning (English):** a failure in which a component may behave inconsistently or maliciously, including sending different information to different peers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi Byzantine; hình dung một node không chỉ im lặng hay crash mà còn có thể “nói mỗi người một kiểu”, khiến các node khác khó phân biệt lỗi với gian dối.
**Grammar & collocations:** `Byzantine fault tolerance` — khả năng chịu lỗi Byzantine; `Byzantine node` — node có hành vi Byzantine; `tolerate Byzantine faults` — chịu được lỗi Byzantine.
**Examples:** `The protocol assumes crash failures only, so it does not protect the cluster from a Byzantine fault.` → Giao thức chỉ giả định lỗi crash nên không bảo vệ cụm máy trước lỗi Byzantine.
**Liên kết tiếng Hàn:** `비잔틴 장애` (bijantin jangae) — lỗi Byzantine.

## 11. failure detector /ˈfeɪljər dɪˌtɛktər/
**Part of speech:** noun
**Core meaning (English):** a mechanism that estimates whether another process or node has failed, usually from missing messages or timing evidence rather than certainty.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ phát hiện lỗi; hình dung một node chỉ có thể suy đoán node khác đã chết vì không còn nghe tín hiệu, chứ không thể biết chắc đó là crash hay mạng đang chậm.
**Grammar & collocations:** `heartbeat-based failure detector` — bộ phát hiện lỗi dựa trên heartbeat; `failure suspicion` — nghi ngờ lỗi; `false suspicion` — nghi ngờ nhầm.
**Examples:** `The failure detector raised suspicion after several missed heartbeats, but the node later reappeared.` → Bộ phát hiện lỗi nghi ngờ sau vài heartbeat bị mất, nhưng node sau đó xuất hiện lại.
**Liên kết tiếng Hàn:** `장애 감지기` (jangae gamjigi) — bộ phát hiện lỗi.

## 12. write-ahead log /ˈraɪt əˌhɛd lɔɡ/
**Part of speech:** noun
**Core meaning (English):** a durable log in which a system records a change before applying that change to its main data structures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhật ký ghi trước; hình dung hệ thống viết “biên nhận” bền vững trước rồi mới sửa dữ liệu thật, để nếu crash giữa chừng vẫn có thể phục hồi ý định đã được xác nhận.
**Grammar & collocations:** `append to the write-ahead log` — nối thêm vào WAL; `replay the log` — phát lại log; `WAL record` — bản ghi WAL.
**Examples:** `After the crash, the database replayed its write-ahead log to restore committed changes that had not reached the data files.` → Sau khi crash, cơ sở dữ liệu phát lại write-ahead log để khôi phục các thay đổi đã commit nhưng chưa kịp ghi vào file dữ liệu.
**Liên kết tiếng Hàn:** `선행 기록 로그` (seonhaeng girok rogeu), thường gọi `WAL` — nhật ký ghi trước.

## 13. log replication /lɔɡ ˌrɛpləˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of copying an ordered sequence of operations from an authoritative node to replicas so they can apply the same history.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sao chép nhật ký; hình dung leader gửi cùng một chuỗi lệnh đã được sắp thứ tự cho follower để các máy cùng tái tạo một lịch sử.
**Grammar & collocations:** `replicated log` — log được sao chép; `log-replication stream` — luồng sao chép log; `replicate an entry` — sao chép một entry.
**Examples:** `Log replication keeps followers ready to take over with nearly the same committed history as the leader.` → Sao chép log giữ các follower sẵn sàng tiếp quản với lịch sử commit gần như giống leader.
**Liên kết tiếng Hàn:** `로그 복제` (rogeu bokje) — sao chép log.

## 14. sharding /ˈʃɑrdɪŋ/
**Part of speech:** noun
**Core meaning (English):** the division of a large dataset into separate partitions that can be stored or processed by different machines.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân mảnh ngang dữ liệu; hình dung một kho dữ liệu quá lớn được chia thành nhiều “miếng”, mỗi máy chịu trách nhiệm một phần thay vì mọi máy đều giữ toàn bộ.
**Grammar & collocations:** `database sharding` — sharding cơ sở dữ liệu; `shard key` — khóa dùng để chọn shard; `reshard the dataset` — phân chia lại các shard.
**Examples:** `The team chose customer ID as the shard key to spread accounts across storage nodes.` → Nhóm chọn customer ID làm shard key để phân tán các tài khoản qua nhiều node lưu trữ.
**Liên kết tiếng Hàn:** `샤딩` (syading) — sharding, phân mảnh dữ liệu.

## 15. consistent hashing /kənˈsɪstənt ˈhæʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** a partitioning technique that minimizes how many keys must move when nodes are added to or removed from a distributed set.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** băm nhất quán; hình dung key và node nằm trên một vòng băm, nên khi thêm hoặc bỏ một node chỉ một vùng lân cận phải đổi chủ thay vì xáo trộn toàn bộ dữ liệu.
**Grammar & collocations:** `consistent-hashing ring` — vòng băm nhất quán; `hash-ring position` — vị trí trên vòng băm; `rebalance keys` — cân bằng lại key.
**Examples:** `Consistent hashing limited cache churn when the service added three new nodes.` → Consistent hashing hạn chế việc cache bị xáo trộn khi dịch vụ thêm ba node mới.
**Liên kết tiếng Hàn:** `일관 해싱` (ilgwan haesing) — băm nhất quán.

## 16. gossip protocol /ˈɡɑsəp ˈproʊtəˌkɔl/
**Part of speech:** noun
**Core meaning (English):** a decentralized communication method in which nodes periodically exchange local information with a few peers until updates spread through the system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giao thức gossip; hình dung tin tức lan qua cụm máy giống lời truyền miệng: mỗi node nói với vài hàng xóm và dần dần cả mạng biết thông tin.
**Grammar & collocations:** `gossip-based membership` — quản lý membership bằng gossip; `gossip round` — vòng trao đổi gossip; `propagate through gossip` — lan truyền qua gossip.
**Examples:** `Node-health information spreads through the gossip protocol without requiring one central registry.` → Thông tin sức khỏe của node lan qua giao thức gossip mà không cần một registry trung tâm.
**Liên kết tiếng Hàn:** `가십 프로토콜` (gasip peurotokol) — giao thức gossip.

## 17. idempotency /ˌaɪdəmˈpoʊtənsi/
**Part of speech:** noun
**Core meaning (English):** the property that repeating the same operation produces no additional effect after the first successful application.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính lũy đẳng; hình dung client không biết request trước đã thành công hay chưa nên gửi lại, nhưng hệ thống bảo đảm việc lặp lại không tạo thêm đơn hàng, khoản trừ tiền hoặc trạng thái ngoài ý muốn.
**Grammar & collocations:** `idempotency key` — khóa lũy đẳng; `idempotent operation` — thao tác lũy đẳng; `ensure idempotency` — bảo đảm tính lũy đẳng.
**Examples:** `The payment API uses an idempotency key so retrying a timed-out request cannot charge the card twice.` → API thanh toán dùng idempotency key để việc gửi lại request bị timeout không thể tính phí thẻ hai lần.
**Liên kết tiếng Hàn:** `멱등성` (myeokdeungseong) — tính lũy đẳng.

## 18. backpressure /ˈbækˌprɛʃər/
**Part of speech:** noun
**Core meaning (English):** a flow-control mechanism by which an overloaded downstream component signals upstream producers to slow down or stop temporarily.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** áp lực ngược; hình dung đoạn cuối của đường ống xử lý đang nghẽn và gửi tín hiệu ngược lên để nguồn phát giảm tốc trước khi hàng đợi tràn.
**Grammar & collocations:** `apply backpressure` — áp dụng backpressure; `backpressure signal` — tín hiệu áp lực ngược; `propagate backpressure upstream` — truyền backpressure ngược lên nguồn.
**Examples:** `The stream processor applied backpressure when the database could no longer consume events at the incoming rate.` → Bộ xử lý stream áp dụng backpressure khi cơ sở dữ liệu không còn tiêu thụ sự kiện kịp tốc độ đầu vào.
**Liên kết tiếng Hàn:** `백프레셔` (baekpeuresyeo) — backpressure trong xử lý luồng.

## 19. fencing token /ˈfɛnsɪŋ ˈtoʊkən/
**Part of speech:** noun
**Core meaning (English):** a monotonically increasing token used by a resource to reject commands from a client whose lock or lease has already become stale.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** token rào chắn; hình dung mỗi lần cấp quyền mới nhận một số lớn hơn, nhờ đó tài nguyên có thể từ chối một client cũ thức dậy muộn và vẫn tưởng mình còn quyền ghi.
**Grammar & collocations:** `issue a fencing token` — cấp fencing token; `stale token` — token đã cũ; `reject stale writes` — từ chối lần ghi lỗi thời.
**Examples:** `The storage service rejected the stale worker because its fencing token was lower than the current one.` → Dịch vụ lưu trữ từ chối worker lỗi thời vì fencing token của nó nhỏ hơn token hiện tại.
**Liên kết tiếng Hàn:** `펜싱 토큰` (pensing token) — token rào chắn.

## 20. lease /liːs/
**Part of speech:** noun
**Core meaning (English):** a time-limited grant of authority that remains valid only until a specified expiration unless it is renewed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyền thuê có thời hạn; hình dung hệ thống không cấp quyền vô thời hạn mà cho một “vé quyền lực” tự hết hiệu lực nếu holder không gia hạn đúng lúc.
**Grammar & collocations:** `acquire a lease` — nhận lease; `renew a lease` — gia hạn lease; `lease expiration` — thời điểm lease hết hạn; `lease holder` — bên đang giữ lease.
**Examples:** `The coordinator renews its lease periodically so another node can safely take over if it becomes unreachable.` → Bộ điều phối định kỳ gia hạn lease để node khác có thể tiếp quản an toàn nếu nó mất liên lạc.
**Liên kết tiếng Hàn:** `리스` (riseu), trong hệ phân tán là quyền tạm thời có thời hạn — lease.

## Review in context

A distributed database may use a **consensus protocol** to reach a **quorum**, perform **leader election**, and maintain a **replicated state machine**. Some operations require **linearizability**, while less critical replicas may use **eventual consistency**. A **vector clock** or **Lamport timestamp** helps describe ordering without relying on perfectly synchronized physical clocks. Network partitions can produce a **split-brain** condition, and stronger threat models must even consider a **Byzantine fault**. A **failure detector** can only infer whether a silent peer is unavailable. For durable recovery, a node may append to a **write-ahead log** and use **log replication** to distribute committed history. At larger scale, **sharding** spreads data, **consistent hashing** reduces remapping, and a **gossip protocol** spreads membership information. Reliable APIs depend on **idempotency**, overloaded pipelines need **backpressure**, and distributed ownership can combine a **fencing token** with a renewable **lease** to keep stale workers from writing.

**Bản dịch tiếng Việt:**

Một cơ sở dữ liệu phân tán có thể dùng giao thức đồng thuận để đạt quorum, bầu leader và duy trì máy trạng thái sao chép. Một số thao tác cần tính tuyến tính hóa, trong khi các bản sao ít quan trọng hơn có thể dùng nhất quán cuối cùng. Vector clock hoặc dấu thời gian Lamport giúp mô tả thứ tự mà không cần đồng hồ vật lý được đồng bộ hoàn hảo. Phân vùng mạng có thể tạo ra trạng thái split-brain, còn mô hình đe dọa mạnh hơn thậm chí phải tính đến lỗi Byzantine. Bộ phát hiện lỗi chỉ có thể suy đoán liệu một peer im lặng có đang không khả dụng hay không. Để phục hồi bền vững, node có thể nối bản ghi vào write-ahead log và dùng sao chép log để phân phối lịch sử đã commit. Khi quy mô lớn hơn, sharding phân tán dữ liệu, consistent hashing giảm lượng dữ liệu phải ánh xạ lại, và giao thức gossip lan truyền thông tin membership. API đáng tin cậy cần tính lũy đẳng, pipeline quá tải cần backpressure, còn quyền sở hữu phân tán có thể kết hợp fencing token với lease có thể gia hạn để ngăn worker lỗi thời tiếp tục ghi.