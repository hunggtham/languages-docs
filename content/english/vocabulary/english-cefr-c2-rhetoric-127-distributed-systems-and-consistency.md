# C2 Vocabulary 127 — Distributed systems and consistency

This lesson follows a distributed service from coordination and replication to failure handling, delivery guarantees, and the latency users actually experience.

Flow: **consensus protocol → leader election → eventual consistency → linearizability → idempotence → vector clock → logical clock → split brain → Byzantine fault → gossip protocol → sharding → replication lag → backpressure → tail latency → cache invalidation → exactly-once semantics → at-least-once delivery → two-phase commit → lease-based coordination → failure detector**.

## 1. consensus protocol /kənˈsɛnsəs ˈproʊtəˌkɔl/
**Part of speech:** noun
**Core meaning (English):** a protocol that enables distributed nodes to agree on a value or decision despite delays or some failures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giao thức đồng thuận; hình dung nhiều máy độc lập phải thống nhất một quyết định dù tin nhắn đến trễ hoặc một số máy hỏng.
**Grammar & collocations:** `distributed consensus protocol` — giao thức đồng thuận phân tán; `consensus-protocol safety` — tính an toàn của giao thức đồng thuận; `implement a consensus protocol` — triển khai giao thức đồng thuận.
**Examples:** `The consensus protocol prevented two replicas from both becoming the authoritative leader.` → Giao thức đồng thuận ngăn hai bản sao cùng trở thành lãnh đạo có thẩm quyền.
**Liên kết tiếng Hàn:** `합의 프로토콜` (habui peurotokol) — giao thức đồng thuận.

## 2. leader election /ˈliːdɚ ɪˈlɛkʃən/
**Part of speech:** noun
**Core meaning (English):** the process by which distributed nodes select one node to coordinate work or serialize decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bầu chọn lãnh đạo; hình dung các máy chọn một điều phối viên tạm thời để tránh nhiều nơi cùng ra lệnh.
**Grammar & collocations:** `leader-election algorithm` — thuật toán bầu chọn lãnh đạo; `trigger a leader election` — kích hoạt bầu chọn lãnh đạo; `leader-election timeout` — thời gian chờ bầu chọn lãnh đạo.
**Examples:** `A missed heartbeat triggered a leader election among the remaining replicas.` → Một nhịp tim bị bỏ lỡ kích hoạt bầu chọn lãnh đạo giữa các bản sao còn lại.
**Liên kết tiếng Hàn:** `리더 선출` (rideo seonchul) — bầu chọn lãnh đạo.

## 3. eventual consistency /ɪˈvɛntʃuəl kənˈsɪstənsi/
**Part of speech:** noun
**Core meaning (English):** a consistency model in which replicas may temporarily disagree but converge to the same value if updates stop.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhất quán cuối cùng; hình dung các bản sao có thể lệch nhau trong chốc lát nhưng dần hội tụ khi không còn cập nhật mới.
**Grammar & collocations:** `eventual-consistency model` — mô hình nhất quán cuối cùng; `eventual-consistency guarantee` — bảo đảm nhất quán cuối cùng; `accept eventual consistency` — chấp nhận nhất quán cuối cùng.
**Examples:** `The social feed used eventual consistency, so a new post appeared on different devices at different times.` → Bảng tin xã hội dùng nhất quán cuối cùng nên bài đăng mới xuất hiện trên các thiết bị vào những thời điểm khác nhau.
**Liên kết tiếng Hàn:** `최종 일관성` (choejong ilgwanseong) — nhất quán cuối cùng.

## 4. linearizability /ˌlɪniərəˈzæbələ ti/
**Part of speech:** noun
**Core meaning (English):** a consistency guarantee that makes each operation appear to take effect atomically at one instant between its invocation and response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính tuyến tính hóa; hình dung mọi thao tác phân tán như diễn ra tại một thời điểm duy nhất trong một trật tự hợp lý.
**Grammar & collocations:** `linearizable register` — thanh ghi tuyến tính hóa được; `linearizability violation` — vi phạm tính tuyến tính hóa; `guarantee linearizability` — bảo đảm tính tuyến tính hóa.
**Examples:** `The payment ledger required linearizability so two withdrawals could not spend the same balance.` → Sổ cái thanh toán cần tính tuyến tính hóa để hai lần rút không cùng tiêu một số dư.
**Liên kết tiếng Hàn:** `선형화 가능성` (seonhyeonghwa ganeungseong) — tính tuyến tính hóa.

## 5. idempotence /ˌɪdəˈpoʊtəns/
**Part of speech:** noun
**Core meaning (English):** the property that repeating the same operation produces the same effective result as performing it once.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính lũy đẳng; hình dung gửi lại một yêu cầu do mạng lỗi nhưng trạng thái cuối không bị áp dụng hai lần.
**Grammar & collocations:** `idempotent operation` — thao tác lũy đẳng; `idempotence key` — khóa lũy đẳng; `preserve idempotence` — duy trì tính lũy đẳng.
**Examples:** `The payment endpoint used an idempotence key to make retries safe.` → Endpoint thanh toán dùng khóa lũy đẳng để việc thử lại an toàn.
**Liên kết tiếng Hàn:** `멱등성` (myeokdeungseong) — tính lũy đẳng.

## 6. vector clock /ˈvɛktɚ klɑk/
**Part of speech:** noun
**Core meaning (English):** a set of logical counters used to track causal relationships among events at different nodes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồng hồ vector; hình dung mỗi máy giữ một dãy bộ đếm để biết sự kiện nào xảy ra trước, sau hoặc độc lập với sự kiện khác.
**Grammar & collocations:** `vector-clock timestamp` — dấu thời gian đồng hồ vector; `compare vector clocks` — so sánh các đồng hồ vector; `vector-clock conflict` — xung đột đồng hồ vector.
**Examples:** `The database used a vector clock to detect concurrent edits rather than overwriting one silently.` → Cơ sở dữ liệu dùng đồng hồ vector để phát hiện chỉnh sửa đồng thời thay vì âm thầm ghi đè.
**Liên kết tiếng Hàn:** `벡터 시계` (bekteo sigye) — đồng hồ vector.

## 7. logical clock /ˈlɑdʒɪkəl klɑk/
**Part of speech:** noun
**Core meaning (English):** a counter that orders events in a distributed system without measuring physical time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồng hồ logic; hình dung thứ tự sự kiện được dựng bằng bộ đếm và thông điệp thay vì đồng hồ treo tường.
**Grammar & collocations:** `logical-clock timestamp` — dấu thời gian đồng hồ logic; `Lamport logical clock` — đồng hồ logic Lamport; `advance a logical clock` — tăng đồng hồ logic.
**Examples:** `The service attached a logical clock to every message before replicating it.` → Dịch vụ gắn đồng hồ logic vào mỗi thông điệp trước khi nhân bản.
**Liên kết tiếng Hàn:** `논리 시계` (nonni sigye) — đồng hồ logic.

## 8. split brain /splɪt breɪn/
**Part of speech:** noun
**Core meaning (English):** a failure state in which separated parts of a cluster each believe they are the active authority.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** não tách đôi; hình dung một cụm bị chia mạng và cả hai nửa cùng tưởng mình là hệ thống chính.
**Grammar & collocations:** `split-brain condition` — trạng thái não tách đôi; `split-brain recovery` — phục hồi sau não tách đôi; `avoid split brain` — tránh não tách đôi.
**Examples:** `The fencing mechanism prevented a split brain when the network partition lasted for minutes.` → Cơ chế cô lập ngăn trạng thái não tách đôi khi phân vùng mạng kéo dài vài phút.
**Liên kết tiếng Hàn:** `스플릿 브레인` (seupillit beurein) — não tách đôi.

## 9. Byzantine fault /ˈbɪzənˌtiːn fɔlt/
**Part of speech:** noun
**Core meaning (English):** a failure in which a node behaves arbitrarily, inconsistently, or maliciously rather than simply stopping.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi Byzantine; hình dung một máy gửi thông tin khác nhau cho các đồng đội và không thể được xem là thành viên thành thật.
**Grammar & collocations:** `Byzantine-fault tolerance` — khả năng chịu lỗi Byzantine; `Byzantine fault model` — mô hình lỗi Byzantine; `tolerate Byzantine faults` — chịu được lỗi Byzantine.
**Examples:** `The consensus design tolerated one Byzantine fault without accepting a forged block.` → Thiết kế đồng thuận chịu được một lỗi Byzantine mà không chấp nhận block giả.
**Liên kết tiếng Hàn:** `비잔틴 장애` (bijantin jangae) — lỗi Byzantine.

## 10. gossip protocol /ˈɡɑsəp ˈproʊtəˌkɔl/
**Part of speech:** noun
**Core meaning (English):** a protocol in which nodes spread information by repeatedly exchanging it with a small number of peers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giao thức gossip; hình dung thông tin lan trong cụm như lời truyền miệng nhưng có quy tắc và cuối cùng đến hầu hết các máy.
**Grammar & collocations:** `gossip-protocol membership` — thông tin thành viên qua gossip; `gossip dissemination` — phát tán bằng gossip; `run a gossip protocol` — chạy giao thức gossip.
**Examples:** `The gossip protocol spread the new membership list without a central coordinator.` → Giao thức gossip phát tán danh sách thành viên mới mà không cần điều phối viên trung tâm.
**Liên kết tiếng Hàn:** `가십 프로토콜` (gasip peurotokol) — giao thức gossip.

## 11. sharding /ˈʃɑrdɪŋ/
**Part of speech:** noun
**Core meaning (English):** the division of a dataset or workload into partitions that can be stored or processed by different nodes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân mảnh; hình dung chia kho dữ liệu lớn thành các mảnh để nhiều máy xử lý song song.
**Grammar & collocations:** `database sharding` — phân mảnh cơ sở dữ liệu; `shard key` — khóa phân mảnh; `rebalance shards` — cân bằng lại các mảnh.
**Examples:** `Sharding let the service add capacity without placing the entire index on one machine.` → Phân mảnh cho phép dịch vụ tăng năng lực mà không đặt toàn bộ chỉ mục lên một máy.
**Liên kết tiếng Hàn:** `샤딩` (syading) — phân mảnh.

## 12. replication lag /ˌrɛpləˈkeɪʃən læɡ/
**Part of speech:** noun
**Core meaning (English):** the delay between a change being accepted by a primary node and becoming visible at a replica.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ trễ nhân bản; hình dung bản sao đi sau dữ liệu chính một khoảng thời gian có thể ảnh hưởng đến câu trả lời người dùng.
**Grammar & collocations:** `replication-lag monitor` — bộ theo dõi độ trễ nhân bản; `high replication lag` — độ trễ nhân bản cao; `reduce replication lag` — giảm độ trễ nhân bản.
**Examples:** `Replication lag caused the newly created account to appear missing on the read-only page.` → Độ trễ nhân bản khiến tài khoản vừa tạo có vẻ biến mất trên trang chỉ đọc.
**Liên kết tiếng Hàn:** `복제 지연` (bokje jiyeon) — độ trễ nhân bản.

## 13. backpressure /ˈbækˌprɛʃɚ/
**Part of speech:** noun
**Core meaning (English):** a mechanism by which a slower consumer signals a producer to reduce the rate of incoming work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** áp lực ngược; hình dung hệ thống phía sau “đẩy ngược” tín hiệu để nguồn phát chậm lại trước khi hàng đợi tràn.
**Grammar & collocations:** `stream backpressure` — áp lực ngược trong luồng; `backpressure signal` — tín hiệu áp lực ngược; `apply backpressure` — áp dụng áp lực ngược.
**Examples:** `Backpressure kept the message broker from overwhelming the analytics workers.` → Áp lực ngược ngăn môi giới thông điệp làm quá tải các worker phân tích.
**Liên kết tiếng Hàn:** `백프레셔` (baekpeuresyeo) — áp lực ngược.

## 14. tail latency /teɪl ˈleɪtənsi/
**Part of speech:** noun
**Core meaning (English):** the high-percentile response time experienced by the slowest portion of requests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ trễ đuôi; hình dung không nhìn thời gian trung bình mà nhìn nhóm yêu cầu chậm nhất, nơi người dùng dễ gặp sự cố.
**Grammar & collocations:** `p99 tail latency` — độ trễ đuôi p99; `tail-latency spike` — đột biến độ trễ đuôi; `reduce tail latency` — giảm độ trễ đuôi.
**Examples:** `The cache reduced average latency but did little for tail latency during regional outages.` → Bộ nhớ đệm giảm độ trễ trung bình nhưng ít giúp độ trễ đuôi trong lúc mất dịch vụ theo vùng.
**Liên kết tiếng Hàn:** `꼬리 지연 시간` (kkori jiyeon sigan) — độ trễ đuôi.

## 15. cache invalidation /kæʃ ɪnˌvæləˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of marking stored data as stale or removing it when the underlying source has changed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vô hiệu hóa cache; hình dung báo cho các bản sao tạm rằng thông tin cũ không còn được tin nữa.
**Grammar & collocations:** `cache-invalidation policy` — chính sách vô hiệu hóa cache; `cache-invalidation event` — sự kiện vô hiệu hóa cache; `handle cache invalidation` — xử lý vô hiệu hóa cache.
**Examples:** `Cache invalidation ran after each profile update so users would not see the old permissions.` → Vô hiệu hóa cache chạy sau mỗi lần cập nhật hồ sơ để người dùng không thấy quyền cũ.
**Liên kết tiếng Hàn:** `캐시 무효화` (kaesi muhyo-hwa) — vô hiệu hóa cache.

## 16. exactly-once semantics /ɪɡˈzæktli wʌns səˈmæntɪks/
**Part of speech:** noun
**Core meaning (English):** a processing guarantee that makes each message's effect occur once despite retries or failures, within the stated system boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngữ nghĩa đúng một lần; hình dung thông điệp được xử lý một lần có hiệu lực, không nhân đôi dù hệ thống thử lại.
**Grammar & collocations:** `exactly-once processing` — xử lý đúng một lần; `exactly-once delivery claim` — tuyên bố phân phối đúng một lần; `provide exactly-once semantics` — cung cấp ngữ nghĩa đúng một lần.
**Examples:** `The billing pipeline advertised exactly-once semantics only after the database and queue shared a transaction boundary.` → Đường ống thanh toán chỉ tuyên bố ngữ nghĩa đúng một lần sau khi cơ sở dữ liệu và hàng đợi dùng chung ranh giới giao dịch.
**Liên kết tiếng Hàn:** `정확히 한 번 의미론` (jeonghwakhi han beon uimilon) — ngữ nghĩa đúng một lần.

## 17. at-least-once delivery /ət liːst wʌns dɪˈlɪvəri/
**Part of speech:** noun
**Core meaning (English):** a delivery guarantee that prevents message loss but may deliver the same message more than once.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân phối ít nhất một lần; hình dung hệ thống thà gửi lại thông điệp hơn là làm mất nó, nên bên nhận phải xử lý trùng.
**Grammar & collocations:** `at-least-once delivery guarantee` — bảo đảm phân phối ít nhất một lần; `at-least-once messaging` — nhắn tin ít nhất một lần; `design for at-least-once delivery` — thiết kế cho phân phối ít nhất một lần.
**Examples:** `At-least-once delivery required the consumer to make its update handler idempotent.` → Phân phối ít nhất một lần đòi hỏi bên nhận làm trình xử lý cập nhật có tính lũy đẳng.
**Liên kết tiếng Hàn:** `최소 한 번 전달` (choeso han beon jeondal) — phân phối ít nhất một lần.

## 18. two-phase commit /tu feɪz kəˈmɪt/
**Part of speech:** noun
**Core meaning (English):** a distributed transaction protocol that first asks participants to prepare and then tells all of them to commit or abort together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** commit hai pha; hình dung tất cả bên tham gia bỏ phiếu sẵn sàng trước rồi cùng xác nhận hoặc hủy như một giao dịch.
**Grammar & collocations:** `two-phase-commit coordinator` — bộ điều phối commit hai pha; `two-phase-commit protocol` — giao thức commit hai pha; `block during two-phase commit` — bị chặn trong commit hai pha.
**Examples:** `Two-phase commit preserved atomicity but could block when the coordinator failed.` → Commit hai pha giữ tính nguyên tử nhưng có thể bị chặn khi bộ điều phối hỏng.
**Liên kết tiếng Hàn:** `2단계 커밋` (idan gye commit) — commit hai pha.

## 19. lease-based coordination /liːs beɪst koʊˌɔrdəˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** coordination that grants authority for a limited time and requires renewal before the lease expires.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều phối dựa trên lease; hình dung quyền lãnh đạo là giấy thuê có hạn, hết hạn thì máy khác có thể tiếp quản.
**Grammar & collocations:** `lease-based leader coordination` — điều phối lãnh đạo dựa trên lease; `lease-renewal heartbeat` — nhịp tim gia hạn lease; `lease-based lock` — khóa dựa trên lease.
**Examples:** `Lease-based coordination allowed a replacement worker to take over after the old worker stopped renewing.` → Điều phối dựa trên lease cho phép worker thay thế tiếp quản khi worker cũ ngừng gia hạn.
**Liên kết tiếng Hàn:** `리스 기반 조정` (riseu giban jojeong) — điều phối dựa trên lease.

## 20. failure detector /ˈfeɪljɚ dɪˈtɛktɚ/
**Part of speech:** noun
**Core meaning (English):** a mechanism that provides information about which distributed nodes may have failed or become unreachable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ phát hiện lỗi; hình dung hệ thống không biết chắc máy kia đã chết nhưng phát tín hiệu nghi ngờ để các nút còn lại phản ứng.
**Grammar & collocations:** `failure-detector suspicion` — trạng thái nghi ngờ của bộ phát hiện lỗi; `perfect failure detector` — bộ phát hiện lỗi hoàn hảo; `query a failure detector` — truy vấn bộ phát hiện lỗi.
**Examples:** `The failure detector marked the replica as suspected, allowing the leader to reroute traffic.` → Bộ phát hiện lỗi đánh dấu bản sao là đáng nghi, cho phép lãnh đạo định tuyến lại lưu lượng.
**Liên kết tiếng Hàn:** `장애 감지기` (jangae gamjigi) — bộ phát hiện lỗi.

## Review in context

A **consensus protocol** may begin with **leader election**, while a storage service chooses between **eventual consistency** and **linearizability**. **Idempotence** makes retries safe; a **vector clock** and **logical clock** record causality. A network partition can create **split brain**, and a **Byzantine fault** is worse than a simple crash. A **gossip protocol** spreads membership, **sharding** divides data, and **replication lag** exposes stale reads. **Backpressure** protects a slow consumer, while **tail latency** exposes the slowest requests. **Cache invalidation** removes stale copies. Messaging may promise **exactly-once semantics** or **at-least-once delivery**; a **two-phase commit** coordinates a transaction. **Lease-based coordination** limits authority in time, and a **failure detector** reports which nodes may be unreachable.

**Bản dịch tiếng Việt:**

Giao thức đồng thuận có thể bắt đầu bằng bầu chọn lãnh đạo, trong khi dịch vụ lưu trữ chọn giữa nhất quán cuối cùng và tính tuyến tính hóa. Tính lũy đẳng làm việc thử lại an toàn; đồng hồ vector và đồng hồ logic ghi lại quan hệ nhân quả. Phân vùng mạng có thể tạo não tách đôi, còn lỗi Byzantine tệ hơn một vụ dừng đơn giản. Giao thức gossip phát tán thông tin thành viên, phân mảnh chia dữ liệu, còn độ trễ nhân bản làm lộ dữ liệu cũ. Áp lực ngược bảo vệ bên tiêu thụ chậm, trong khi độ trễ đuôi cho thấy các yêu cầu chậm nhất. Vô hiệu hóa cache loại bỏ bản sao cũ. Nhắn tin có thể hứa ngữ nghĩa đúng một lần hoặc phân phối ít nhất một lần; commit hai pha điều phối một giao dịch. Điều phối dựa trên lease giới hạn quyền theo thời gian, còn bộ phát hiện lỗi báo những máy có thể không truy cập được.
