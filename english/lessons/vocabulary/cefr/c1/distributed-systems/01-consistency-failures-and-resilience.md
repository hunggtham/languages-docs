# C1 Vocabulary 01 — Consistency, failures, and resilience

Nhóm từ này mô tả cách hệ thống phân tán đồng bộ dữ liệu, xử lý lỗi và duy trì dịch vụ khi nhiều thành phần hoạt động đồng thời.

## 1. consistency model /kənˈsɪstənsi ˈmɑdəl/

**Loại từ & vị trí trong câu:** `countable noun phrase` — tập hợp quy tắc mô tả khi nào các bản sao dữ liệu phải thấy cùng một giá trị.

**Core meaning — English:** A set of rules describing when replicas of data must observe the same value.

**Core meaning & mental image — Tiếng Việt:** Một lời hứa về việc các bản sao trên nhiều máy sẽ nhìn thấy thay đổi sớm và chắc đến mức nào.

**Grammar & collocations:** `strong consistency model`, `choose a consistency model`, `consistency guarantee`.

**Register & nuance:** Model nhất quán là đánh đổi giữa độ đúng, độ trễ, khả năng sẵn sàng và chi phí.

**Example:** `The database used a weaker consistency model for faster reads.` → Cơ sở dữ liệu dùng mô hình nhất quán yếu hơn để đọc nhanh hơn.

**Liên kết tiếng Hàn:** `일관성 모델` — mô hình nhất quán.

## 2. eventual consistency /ɪˈventʃuəl kənˈsɪstənsi/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — bảo đảm các bản sao cuối cùng sẽ hội tụ nếu không có cập nhật mới, dù tạm thời khác nhau.

**Core meaning — English:** A guarantee that replicas will eventually converge when no new updates occur, despite temporary differences.

**Core meaning & mental image — Tiếng Việt:** Các đồng hồ ở nhiều ga có thể lệch vài giây nhưng sẽ dần về cùng giờ.

**Grammar & collocations:** `eventual-consistency system`, `eventual-consistency guarantee`, `accept eventual consistency`.

**Register & nuance:** Eventual consistency phù hợp một số hệ thống nhưng không đủ cho mọi giao dịch cần kết quả tức thời và duy nhất.

**Example:** `The social feed tolerated eventual consistency.` → Bảng tin xã hội chấp nhận tính nhất quán cuối cùng.

**Liên kết tiếng Hàn:** `최종 일관성` — tính nhất quán cuối cùng.

## 3. consensus algorithm /kənˈsensəs ˈælɡəˌrɪðəm/

**Loại từ & vị trí trong câu:** `countable noun phrase` — thuật toán giúp nhiều nút đồng ý về một trạng thái hoặc thứ tự dù có lỗi hoặc trễ mạng.

**Core meaning — English:** An algorithm that helps multiple nodes agree on a state or order despite failures or network delay.

**Core meaning & mental image — Tiếng Việt:** Một hội đồng máy phải chọn cùng người đại diện dù vài thành viên vắng hoặc nói chậm.

**Grammar & collocations:** `consensus-algorithm design`, `run a consensus algorithm`, `consensus protocol`.

**Register & nuance:** Consensus cần giả định rõ về loại lỗi, số nút và mạng; không có thuật toán phù hợp mọi môi trường.

**Example:** `The consensus algorithm preserved a single order of events.` → Thuật toán đồng thuận giữ một thứ tự sự kiện duy nhất.

**Liên kết tiếng Hàn:** `합의 알고리즘` — thuật toán đồng thuận.

## 4. quorum /ˈkwɔrəm/

**Loại từ & vị trí trong câu:** `countable noun` — số lượng tối thiểu thành viên hoặc bản sao phải tham gia để quyết định được coi là hợp lệ.

**Core meaning — English:** The minimum number of members or replicas required for a decision to be valid.

**Core meaning & mental image — Tiếng Việt:** Phòng họp chỉ được bỏ phiếu khi đủ số ghế có mặt để tránh quyết định của thiểu số quá nhỏ.

**Grammar & collocations:** `reach a quorum`, `quorum read`, `quorum write`.

**Register & nuance:** Chọn quorum ảnh hưởng tính nhất quán, khả năng chịu lỗi và độ sẵn sàng khi nút bị mất.

**Example:** `The cluster lost quorum after several nodes failed.` → Cụm mất quorum sau khi nhiều nút hỏng.

**Liên kết tiếng Hàn:** `정족수` — quorum, số đại biểu tối thiểu.

## 5. idempotency /ˌaɪdəmˈpoʊtənsi/

**Loại từ & vị trí trong câu:** `uncountable noun` — tính chất một thao tác thực hiện nhiều lần cho cùng kết quả như thực hiện một lần.

**Core meaning — English:** The property that repeating an operation produces the same result as performing it once.

**Core meaning & mental image — Tiếng Việt:** Nhấn nút gửi lại vì mạng chập chờn nhưng không tạo thêm đơn hàng thứ hai.

**Grammar & collocations:** `idempotency key`, `idempotent operation`, `ensure idempotency`.

**Register & nuance:** Idempotency đặc biệt quan trọng khi hệ thống tự retry hoặc thông điệp có thể giao lại.

**Example:** `An idempotency key prevented duplicate payments.` → Khóa idempotency ngăn thanh toán trùng.

**Liên kết tiếng Hàn:** `멱등성` — tính lũy đẳng.

## 6. race condition /ˈreɪs kənˌdɪʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase` — lỗi xảy ra khi kết quả phụ thuộc vào thứ tự không dự đoán được của các thao tác đồng thời.

**Core meaning — English:** A bug in which the result depends on the unpredictable order of concurrent operations.

**Core meaning & mental image — Tiếng Việt:** Hai người cùng sửa một bảng; ai ghi sau vô tình xóa thay đổi của người kia.

**Grammar & collocations:** `race-condition bug`, `trigger a race condition`, `avoid concurrent races`.

**Register & nuance:** Race condition có thể hiếm và khó tái hiện vì phụ thuộc thời điểm, tải và lịch chạy.

**Example:** `A race condition allowed two workers to claim the same job.` → Điều kiện đua cho phép hai worker nhận cùng một việc.

**Liên kết tiếng Hàn:** `경쟁 조건` — điều kiện đua.

## 7. deadlock /ˈdedˌlɑk/

**Loại từ & vị trí trong câu:** `countable or uncountable noun` — tình trạng các tác vụ chờ tài nguyên do nhau giữ nên không tác vụ nào tiếp tục được.

**Core meaning — English:** A state in which tasks wait for resources held by one another and none can proceed.

**Core meaning & mental image — Tiếng Việt:** Hai người mỗi người giữ một chìa khóa mà người kia cần, cùng đứng yên mãi.

**Grammar & collocations:** `deadlock detection`, `cause a deadlock`, `resolve a deadlock`.

**Register & nuance:** Deadlock khác chậm đơn thuần; hệ thống bị kẹt cho đến khi có can thiệp hoặc timeout.

**Example:** `The transaction manager detected a deadlock and rolled one operation back.` → Bộ quản lý giao dịch phát hiện bế tắc và hoàn nguyên một thao tác.

**Liên kết tiếng Hàn:** `교착 상태` — trạng thái bế tắc.

## 8. backpressure /ˈbækˌpreʃər/

**Loại từ & vị trí trong câu:** `uncountable noun` — tín hiệu khiến bên sản xuất giảm tốc khi bên nhận không xử lý kịp dữ liệu.

**Core meaning — English:** A signal that makes a producer slow down when a consumer cannot process data quickly enough.

**Core meaning & mental image — Tiếng Việt:** Dòng nước bị nghẽn đẩy áp lực ngược về van đầu vào để tránh tràn bể.

**Grammar & collocations:** `apply backpressure`, `backpressure mechanism`, `handle backpressure`.

**Register & nuance:** Backpressure bảo vệ hệ thống khỏi quá tải nhưng cần chính sách xếp hàng, loại bỏ hoặc giảm tốc rõ.

**Example:** `The stream applied backpressure when the storage service slowed.` → Luồng áp dụng backpressure khi dịch vụ lưu trữ chậm lại.

**Liên kết tiếng Hàn:** `백프레셔`, `역압` — áp lực ngược.

## 9. circuit breaker /ˈsɜrkət ˌbreɪkər/

**Loại từ & vị trí trong câu:** `countable noun phrase` — cơ chế tạm ngắt lời gọi đến dịch vụ lỗi để tránh lan truyền sự cố.

**Core meaning — English:** A mechanism that temporarily stops calls to a failing service to prevent cascading failure.

**Core meaning & mental image — Tiếng Việt:** Cầu dao tự ngắt nhánh chập điện để phần còn lại của ngôi nhà vẫn sáng.

**Grammar & collocations:** `circuit-breaker pattern`, `open the circuit breaker`, `circuit-breaker timeout`.

**Register & nuance:** Circuit breaker cần trạng thái đóng, mở và thử lại; đặt ngưỡng sai có thể che lỗi hoặc gây gián đoạn không cần.

**Example:** `The circuit breaker protected checkout from the failing recommendation service.` → Circuit breaker bảo vệ thanh toán khỏi dịch vụ gợi ý đang lỗi.

**Liên kết tiếng Hàn:** `서킷 브레이커` — cơ chế ngắt mạch.

## 10. retry storm /ˈriːˌtraɪ stɔrm/

**Loại từ & vị trí trong câu:** `countable noun phrase` — tình trạng nhiều khách hàng cùng retry sau lỗi, làm dịch vụ quá tải hơn.

**Core meaning — English:** A surge of repeated requests that worsens an outage when many clients retry at once.

**Core meaning & mental image — Tiếng Việt:** Cửa hàng chậm lại khiến mọi người bấm gọi lại cùng lúc, làm hàng đợi càng dài.

**Grammar & collocations:** `trigger a retry storm`, `retry-storm protection`, `exponential backoff`.

**Register & nuance:** Jitter, backoff và giới hạn retry giúp tránh đồng bộ hóa hàng triệu lần thử lại.

**Example:** `A retry storm overwhelmed the service during the partial outage.` → Bão retry làm dịch vụ quá tải trong sự cố một phần.

**Liên kết tiếng Hàn:** `재시도 폭풍` — bão thử lại.

## 11. graceful degradation /ˈɡreɪsfəl ˌdeɡrəˈdeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — thiết kế cho phép hệ thống giảm tính năng hoặc chất lượng có kiểm soát thay vì sập hoàn toàn.

**Core meaning — English:** Designing a system to reduce functionality or quality in a controlled way instead of failing completely.

**Core meaning & mental image — Tiếng Việt:** Khi thang máy hỏng, tòa nhà vẫn dùng cầu thang thay vì mọi hoạt động dừng hết.

**Grammar & collocations:** `graceful-degradation strategy`, `degrade gracefully`, `fallback mode`.

**Register & nuance:** Degradation phải ưu tiên chức năng cốt lõi và truyền đạt rõ cho người dùng điều đã giảm.

**Example:** `Graceful degradation kept search available without personalized ranking.` → Giảm cấp có kiểm soát giữ tìm kiếm hoạt động dù không xếp hạng cá nhân hóa.

**Liên kết tiếng Hàn:** `우아한 성능 저하` — suy giảm có kiểm soát.

## 12. replication lag /ˌrepləˈkeɪʃən læɡ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — khoảng trễ giữa lúc dữ liệu đổi ở bản chính và lúc bản sao nhận được thay đổi.

**Core meaning — English:** The delay between a change on a primary data source and its arrival at a replica.

**Core meaning & mental image — Tiếng Việt:** Bản sao ở xa nhìn thấy trang cũ vài giây sau khi bản chính đã cập nhật.

**Grammar & collocations:** `replication-lag monitor`, `high replication lag`, `reduce replication lag`.

**Register & nuance:** Lag ảnh hưởng quyết định đọc, khả năng failover và trải nghiệm khi người dùng vừa ghi vừa đọc.

**Example:** `Replication lag caused the dashboard to show stale figures.` → Độ trễ nhân bản khiến bảng điều khiển hiển thị số liệu cũ.

**Liên kết tiếng Hàn:** `복제 지연` — độ trễ nhân bản.

## 13. single point of failure /ˌsɪŋɡəl pɔɪnt əv ˈfeɪljər/

**Loại từ & vị trí trong câu:** `countable noun phrase` — thành phần mà nếu hỏng sẽ khiến toàn hệ thống hoặc dịch vụ quan trọng ngừng hoạt động.

**Core meaning — English:** A component whose failure would stop an entire system or critical service.

**Core meaning & mental image — Tiếng Việt:** Một chiếc chốt duy nhất giữ cả cây cầu; gãy chốt là mọi người không qua được.

**Grammar & collocations:** `eliminate a single point of failure`, `identify SPOFs`, `single-point-of-failure risk`.

**Register & nuance:** Loại bỏ SPOF thường cần dự phòng, phân vùng và kiểm thử failover, không chỉ mua thêm máy.

**Example:** `The shared database was a single point of failure.` → Cơ sở dữ liệu dùng chung là điểm lỗi đơn.

**Liên kết tiếng Hàn:** `단일 장애점` — điểm lỗi đơn.

## 14. CAP theorem /ˌsiː eɪ ˈpiː ˌθiərəm/

**Loại từ & vị trí trong câu:** `countable noun phrase` — định lý cho rằng hệ thống phân tán không thể đồng thời bảo đảm nhất quán, khả năng sẵn sàng và chịu phân hoạch trong mọi phân hoạch mạng.

**Core meaning — English:** The theorem that a distributed system cannot guarantee consistency, availability, and partition tolerance simultaneously under every network partition.

**Core meaning & mental image — Tiếng Việt:** Khi mạng bị chia đôi, hệ thống phải chọn ưu tiên nào đó thay vì giữ trọn cả ba lời hứa.

**Grammar & collocations:** `CAP-theorem trade-off`, `explain the CAP theorem`, `CAP analysis`.

**Register & nuance:** CAP nói về hành vi khi partition xảy ra; không phải khẩu hiệu đơn giản rằng mọi hệ thống chỉ chọn hai chữ.

**Example:** `The architecture discussion used the CAP theorem to explain the trade-off.` → Thảo luận kiến trúc dùng định lý CAP để giải thích đánh đổi.

**Liên kết tiếng Hàn:** `CAP 정리` — định lý CAP.

## 15. leader election /ˈliːdər ɪˈlekʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase` — quy trình các nút chọn một nút điều phối nhiệm vụ hoặc ghi nhận thay mặt cụm.

**Core meaning — English:** A process by which nodes choose one node to coordinate tasks or act for a cluster.

**Core meaning & mental image — Tiếng Việt:** Một nhóm máy bỏ phiếu chọn người cầm còi, rồi bầu lại nếu người đó biến mất.

**Grammar & collocations:** `leader-election protocol`, `trigger leader election`, `elected leader`.

**Register & nuance:** Election cần tránh hai leader cùng tin mình đang đứng đầu trong cùng thời điểm.

**Example:** `Leader election restored coordination after the primary failed.` → Bầu leader khôi phục phối hợp sau khi nút chính hỏng.

**Liên kết tiếng Hàn:** `리더 선출` — bầu chọn leader.

## Review in context

A distributed **consistency model** may allow **eventual consistency**, while a **consensus algorithm** and **quorum** coordinate replicas. **Idempotency** limits duplicate effects; **race condition**, **deadlock**, and **backpressure** expose concurrency risks. A **circuit breaker** prevents a **retry storm**, and **graceful degradation** keeps core features available. **Replication lag**, a **single point of failure**, the **CAP theorem**, and **leader election** shape resilient design.

Một **mô hình nhất quán** phân tán có thể cho phép **nhất quán cuối cùng**, trong khi **thuật toán đồng thuận** và **quorum** phối hợp các bản sao. **Tính lũy đẳng** hạn chế tác động trùng; **điều kiện đua**, **bế tắc** và **backpressure** bộc lộ rủi ro đồng thời. **Circuit breaker** ngăn **bão retry**, còn **suy giảm có kiểm soát** giữ các tính năng cốt lõi hoạt động. **Độ trễ nhân bản**, **điểm lỗi đơn**, **định lý CAP** và **bầu leader** định hình thiết kế bền vững.
