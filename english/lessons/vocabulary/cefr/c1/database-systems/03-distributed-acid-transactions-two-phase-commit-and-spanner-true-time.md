# C1 Vocabulary 03 — Distributed ACID transactions, two-phase commit (2PC), and Google Spanner TrueTime API

## 1. distributed ACID transaction
- **IPA**: /ˈdɪstrɪbjuːtɪd ˈæsɪd trænˈzækʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object, prepositional complement).
- **Core meaning — English**: A database transaction that spans multiple distinct physical nodes or database shards while maintaining atomicity, consistency, isolation, and durability.
- **Core meaning & mental image — Tiếng Việt**: Giao dịch ACID phân tán — Giao dịch cơ sở dữ liệu trải rộng qua nhiều nút mạng khác nhau nhưng vẫn giữ nguyên vẹn tính toàn vẹn tuyệt đối như một khối duy nhất.
- **Grammar & collocations**:
  - execute a distributed ACID transaction (thực thi giao dịch ACID phân tán)
  - coordinate a distributed ACID transaction (điều phối giao dịch ACID phân tán)
  - distributed ACID transaction failure (sự cố giao dịch ACID phân tán)
- **Register & nuance**: Formal, technical. Used in advanced database architecture, systems engineering, and distributed systems design.
- **Examples**:
  - *Example*: Designing a globally scaled e-commerce platform requires executing every checkout as a distributed ACID transaction across multiple regional datacenters.
  - *Translation*: Thiết kế một nền tảng thương mại điện tử quy mô toàn cầu đòi hỏi phải thực thi mọi giao dịch thanh toán dưới dạng một giao dịch ACID phân tán trên nhiều trung tâm dữ liệu khu vực.
- **Liên kết tiếng Hàn**: 분산 ACID 트랜잭션 (Bun-san ACID Teuraen-sak-syeon) — Phân tán (分散) ACID 트랜잭션.

## 2. two-phase commit coordinator
- **IPA**: /ˈtuː-feɪz kəˈmɪt koʊˈɔːrdəneɪtər/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object).
- **Core meaning — English**: The central node or orchestrator in a distributed database system that manages the prepare and commit phases across all participating database partitions.
- **Core meaning & mental image — Tiếng Việt**: Bộ điều phối cam kết hai pha — Nút trung tâm đóng vai trò nhạc trưởng trong hệ thống phân tán, ra lệnh chuẩn bị và chốt giao dịch cho các nút thành phần.
- **Grammar & collocations**:
  - act as a two-phase commit coordinator (đóng vai trò là bộ điều phối cam kết hai pha)
  - failure of the two-phase commit coordinator (sự thất bại của bộ điều phối cam kết hai pha)
  - two-phase commit coordinator log (nhật ký của bộ điều phối cam kết hai pha)
- **Register & nuance**: Technical, highly specific. Essential concept in distributed transaction protocols.
- **Examples**:
  - *Example*: If the two-phase commit coordinator crashes mid-transaction, participating nodes may remain blocked waiting for a resolution.
  - *Translation*: Nếu bộ điều phối cam kết hai pha bị sập giữa chừng giao dịch, các nút tham gia có thể bị treo chờ phương án giải quyết.
- **Liên kết tiếng Hàn**: 2단계 커밋 조정자 (2-dan-gye Keo-mit Jo-jeong-ja) — Nhị giai đoạn (二段階) commit điều phối giả.

## 3. TrueTime API atomic clock
- **IPA**: /ˈtruːtaɪm eɪ-piː-aɪ əˈtɑːmɪk klɑːk/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, noun modifier).
- **Core meaning — English**: Google's timekeeping infrastructure that combines GPS receivers and atomic clocks to expose time with bounded uncertainty across datacenters.
- **Core meaning & mental image — Tiếng Việt**: Đồng hồ nguyên tử TrueTime API — Hệ thống đồng hồ phần cứng kết hợp GPS và nguyên tử của Google cung cấp khoảng thời gian với mức độ bất định được giới hạn rõ ràng.
- **Grammar & collocations**:
  - query the TrueTime API atomic clock (truy vấn đồng hồ nguyên tử TrueTime API)
  - TrueTime API atomic clock synchronization (đồng bộ hóa đồng hồ nguyên tử TrueTime API)
  - rely on the TrueTime API atomic clock (dựa vào đồng hồ nguyên tử TrueTime API)
- **Register & nuance**: Specialized distributed systems terminology, specifically associated with Google Spanner architecture.
- **Examples**:
  - *Example*: By leveraging the TrueTime API atomic clock, Google Spanner achieves globally ordered commits without traditional locking bottlenecks.
  - *Translation*: Bằng cách tận dụng đồng hồ nguyên tử TrueTime API, Google Spanner đạt được các thao tác chốt giao dịch có thứ tự toàn cầu mà không gặp các điểm nghẽn khóa truyền thống.
- **Liên kết tiếng Hàn**: 트루타임 API 원자 시계 (Tru-ta-eɪ-im API Won-ja Si-gye) — Nguyên tử đồng hồ (原子時計) API.

## 4. external consistency linearizability
- **IPA**: /ɪkˈstɜːrnl kənˈsɪstənsi ˌlɪniəlaɪzəˈbɪləti/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object).
- **Core meaning — English**: The strongest consistency model in distributed systems, guaranteeing that if transaction B starts after transaction A commits in real-time, B will observe A's effects.
- **Core meaning & mental image — Tiếng Việt**: Tính nhất quán ngoài / Tính tuyến tính hóa — Mức độ nhất quán mạnh nhất đảm bảo mọi giao dịch xảy ra sau theo thời gian thực đều nhìn thấy kết quả của giao dịch trước.
- **Grammar & collocations**:
  - guarantee external consistency linearizability (đảm bảo tính nhất quán ngoài và tuyến tính hóa)
  - achieve external consistency linearizability (đạt được tính nhất quán ngoài)
  - violation of external consistency linearizability (sự vi phạm tính nhất quán ngoài)
- **Register & nuance**: Academic and advanced industrial database engineering terminology.
- **Examples**:
  - *Example*: External consistency linearizability ensures that user reads immediately reflect any preceding writes across the entire distributed cluster.
  - *Translation*: Tính nhất quán ngoài đảm bảo các thao tác đọc của người dùng phản ánh ngay lập tức mọi thao tác ghi trước đó trên toàn bộ cụm phân tán.
- **Liên kết tiếng Hàn**: 외부 일관성 선형화 가능성 (Oe-bu Il-gwan-seong Seon-hyeong-hwa Ga-neung-seong) — Ngoại bộ nhất quán tính (外部一貫性) tuyến tính hóa.

## 5. multi-version concurrency control (MVCC)
- **IPA**: /ˈmʌlti-vɜːrʒən kənˈkɜːrənsi kənˈtroʊl/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: A concurrency control method that keeps multiple physical versions of data items so readers do not lock writers and writers do not block readers.
- **Core meaning & mental image — Tiếng Việt**: Kiểm soát đồng tranh chấp đa phiên bản (MVCC) — Kỹ thuật lưu trữ nhiều phiên bản dữ liệu theo thời gian giúp người đọc không chặn người ghi và ngược lại.
- **Grammar & collocations**:
  - implement multi-version concurrency control (triển khai kiểm soát đồng tranh chấp đa phiên bản)
  - multi-version concurrency control engine (cơ chế kiểm soát đa phiên bản)
  - garbage collection in multi-version concurrency control (thu gom rác trong MVCC)
- **Register & nuance**: Core database implementation vocabulary used across relational and distributed data stores.
- **Examples**:
  - *Example*: Modern distributed databases utilize multi-version concurrency control to maintain high read throughput during heavy write workloads.
  - *Translation*: Các cơ sở dữ liệu phân tán hiện đại sử dụng cơ chế kiểm soát đa phiên bản để duy trì thông lượng đọc cao trong lúc tải ghi nặng.
- **Liên kết tiếng Hàn**: 다이버전 동시성 제어 (Da-i-beo-jeon Dong-si-seong Je-eo) — Đa phiên bản (多版本) đồng thời điều khiển.

## 6. distributed deadlock detection
- **IPA**: /dɪˈstrɪbjuːtɪd ˈdedlɑːk dɪˈtekʃn/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object).
- **Core meaning — English**: The algorithmic process of identifying circular wait conditions across multiple autonomous nodes in a distributed locking network.
- **Core meaning & mental image — Tiếng Việt**: Phát hiện bế tắc phân tán — Thuật toán quét và nhận diện vòng lặp chờ khóa giữa các nút độc lập trong hệ thống mạng.
- **Grammar & collocations**:
  - run distributed deadlock detection (chạy thuật toán phát hiện bế tắc phân tán)
  - timeout-based distributed deadlock detection (phát hiện bế tắc phân tán dựa trên thời gian chờ)
  - distributed deadlock detection graph (đồ thị phát hiện bế tắc phân tán)
- **Register & nuance**: Advanced systems programming and database internals terminology.
- **Examples**:
  - *Example*: Because locks are held across different shards, running distributed deadlock detection is crucial to prevent system freezes.
  - *Translation*: Vì các khóa được giữ trên nhiều phân vùng khác nhau, việc chạy thuật toán phát hiện bế tắc phân tán là tối quan trọng để ngăn hệ thống bị đóng băng.
- **Liên결 tiếng Hàn**: 분산 교착 상태 탐지 (Bun-san Gyo-chak Sang-tae Tam-ji) — Phân tán giao trạch trạng thái (分散交錯狀態) thám tri.

## 7. Paxos-replicated state log
- **IPA**: /ˈpæksɑːs ˈrɛplɪkeɪtɪd steɪt lɑːɡ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: An ordered, fault-tolerant transaction log maintained across a quorum of nodes using the Paxos consensus protocol.
- **Core meaning & mental image — Tiếng Việt**: Nhật ký trạng thái nhân bản Paxos — Nhật ký giao dịch có thứ tự, chịu lỗi cao được duy trì trên một nhóm đa số nút bằng thuật toán đồng thuận Paxos.
- **Grammar & collocations**:
  - append to a Paxos-replicated state log (ghi bổ sung vào nhật ký trạng thái nhân bản Paxos)
  - commit via Paxos-replicated state log (chốt thông qua nhật ký trạng thái Paxos)
  - consensus on the Paxos-replicated state log (sự đồng thuận về nhật ký Paxos)
- **Register & nuance**: Highly technical distributed consensus literature and cloud database architecture.
- **Examples**:
  - *Example*: Every write operation in the storage layer is safely appended to a Paxos-replicated state log before being acknowledged.
  - *Translation*: Mọi thao tác ghi ở tầng lưu trữ đều được ghi an toàn vào một nhật ký trạng thái nhân bản Paxos trước khi được xác nhận.
- **Liên kết tiếng Hàn**: 팩소스 복제 상태 로그 (Paek-so-seu Bok-je Sang-tae Logu) — Paxos 복제 (複製) trạng thái log.

## 8. timestamp ordering transaction
- **IPA**: /ˈtaɪmstæmp ˈɔːrdərɪŋ trænˈzækʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: A concurrency control protocol that assigns unique timestamps to transactions and processes conflicting operations strictly in timestamp order.
- **Core meaning & mental image — Tiếng Việt**: Giao dịch sắp xếp theo mốc thời gian — Giao dịch áp dụng nhãn thời gian duy nhất để xử lý các xung đột theo đúng thứ tự thời gian sinh ra.
- **Grammar & collocations**:
  - schedule timestamp ordering transactions (lên lịch các giao dịch sắp xếp theo nhãn thời gian)
  - timestamp ordering transaction validation (kiểm định giao dịch theo mốc thời gian)
  - conflict in timestamp ordering transaction (xung đột trong giao dịch sắp xếp theo thời gian)
- **Register & nuance**: Database theory and academic literature on transaction processing.
- **Examples**:
  - *Example*: The timestamp ordering transaction mechanism rejects any incoming write operation that attempts to modify data in the past.
  - *Translation*: Cơ chế giao dịch sắp xếp theo mốc thời gian từ chối mọi thao tác ghi đến cố gắng sửa đổi dữ liệu trong quá khứ.
- **Liên kết tiếng Hàn**: 타임스탬프 순서 트랜잭션 (Ta-im-seut-taem-peu Sun-seo Teuraen-sak-syeon) — Timestamp 순서 (順序) 트랜잭션.

## 9. read-write transaction latency
- **IPA**: /ˈriːd-raɪt trænˈzækʃən ˈleɪtənsi/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object).
- **Core meaning — English**: The total round-trip time required to initiate, execute, and successfully commit a transaction that involves both reads and writes.
- **Core meaning & mental image — Tiếng Việt**: Độ trễ giao dịch đọc-ghi — Tổng thời gian khứ hồi cần thiết để khởi tạo, thực thi và chốt thành công một giao dịch kết hợp cả đọc lẫn ghi.
- **Grammar & collocations**:
  - minimize read-write transaction latency (giảm thiểu độ trễ giao dịch đọc-ghi)
  - high read-write transaction latency (độ trễ giao dịch đọc-ghi cao)
  - spike in read-write transaction latency (sự tăng vọt độ trễ giao dịch đọc-ghi)
- **Register & nuance**: Performance engineering, database benchmarking, and system monitoring.
- **Examples**:
  - *Example*: Cross-datacenter consensus rounds significantly increase read-write transaction latency in globally distributed deployments.
  - *Translation*: Các vòng đồng thuận xuyên trung tâm dữ liệu làm tăng đáng kể độ trễ giao dịch đọc-ghi trong các triển khai phân tán toàn cầu.
- **Liên kết tiếng Hàn**: 읽기-쓰기 트랜잭션 지연 시간 (Il-gi-sseu-gi Teuraen-sak-syeon Ji-yeon Si-gan) — Đọc-ghi (讀write) 트랜잭션 지연 (遲延) 시간.

## 10. network partition 2PC stall
- **IPA**: /ˈnɛtwɜːrk pɑːrˈtɪʃn ˈtuː-piː-siː stɔːl/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: A state of suspension where a two-phase commit protocol freezes because a network split isolates the coordinator from essential participant nodes.
- **Core meaning & mental image — Tiếng Việt**: Sự treo 2PC do phân mảnh mạng — Trạng thái đình trệ khi đứt gãy mạng cô lập bộ điều phối khỏi các nút thành phần thiết yếu, khiến giao dịch bị kẹt.
- **Grammar & collocations**:
  - suffer from a network partition 2PC stall (chịu cảnh treo 2PC do phân mảnh mạng)
  - recover from a network partition 2PC stall (phục hồi sau sự cố treo 2PC do phân mảnh mạng)
  - prevent network partition 2PC stall (ngăn chặn tình trạng treo 2PC do chia cắt mạng)
- **Register & nuance**: Distributed systems failure analysis and high-availability architecture.
- **Examples**:
  - *Example*: Without fallback timeout mechanisms, a network partition 2PC stall can leave database tables locked indefinitely.
  - *Translation*: Nếu không có cơ chế thời gian chờ dự phòng, sự cố treo 2PC do phân mảnh mạng có thể khiến các bảng cơ sở dữ liệu bị khóa vô thời hạn.
- **Liên kết tiếng Hàn**: 네트워크 파티션 2PC 정지 (Net-wo-keu Pa-ti-syeon 2PC Jeong-ji) — Network partition 2PC 정지 (停止).

## 11. lock manager distributed lock
- **IPA**: /lɑːk ˈmænɪdʒər dɪˈstrɪbjuːtɪd lɑːk/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: A synchronization subsystem that coordinates exclusive and shared access to database records across clustered nodes.
- **Core meaning & mental image — Tiếng Việt**: Khóa phân tán của trình quản lý khóa — Hệ thống con đồng bộ hóa việc truy cập độc quyền hoặc chia sẻ vào các bản ghi dữ liệu trên toàn cụm nút.
- **Grammar & collocations**:
  - acquire a lock manager distributed lock (chiếm lấy khóa phân tán của trình quản lý khóa)
  - release a lock manager distributed lock (giải phóng khóa phân tán)
  - lock manager distributed lock contention (sự tranh chấp khóa phân tán)
- **Register & nuance**: Technical database internals and concurrency architecture.
- **Examples**:
  - *Example*: The lock manager distributed lock prevents concurrent transactions from modifying the exact same row simultaneously.
  - *Translation*: Khóa phân tán của trình quản lý khóa ngăn cản các giao dịch đồng thời chỉnh sửa chính xác cùng một hàng dữ liệu cùng lúc.
- **Liên kết tiếng Hàn**: 락 관리자 분산 락 (Rak Gwan-ri-ja Bun-san Rak) — Lock 관리자 분산 lock.

## 12. optimistic concurrency abort
- **IPA**: /ˌɑːptɪˈmɪstɪk kənˈkɜːrənsi əˈbɔːrt/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object).
- **Core meaning — English**: The cancellation of a transaction during validation because a conflicting write occurred between its read phase and commit phase.
- **Core meaning & mental image — Tiếng Việt**: Hủy bỏ do đồng tranh chấp lạc quan — Việc hủy giao dịch ở giai đoạn kiểm định vì phát hiện xung đột dữ liệu từ lúc đọc đến lúc chốt.
- **Grammar & collocations**:
  - trigger an optimistic concurrency abort (kích hoạt việc hủy giao dịch do đồng tranh chấp lạc quan)
  - handle optimistic concurrency aborts (xử lý các lệnh hủy giao dịch lạc quan)
  - rate of optimistic concurrency aborts (tỷ lệ hủy giao dịch lạc quan)
- **Register & nuance**: Database transaction processing literature and high-performance system tuning.
- **Examples**:
  - *Example*: Under high write contention, transactions frequently suffer an optimistic concurrency abort, forcing application-level retries.
  - *Translation*: Dưới áp lực tranh chấp ghi cao, các giao dịch thường xuyên bị hủy bỏ theo cơ chế lạc quan, buộc ứng dụng phải thử lại.
- **Liên kết tiếng Hàn**: 낙관적 동시성 중단 (Nak-gwan-jeok Dong-si-seong Jung-dan) — Lạc quan tính (楽観性) đồng thời trung đoạn.

## 13. serializability isolation level
- **IPA**: /ˌsɪriəlaɪzəˈbɪləti ˌaɪsəˈleɪʃn ˈlɛvl/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object).
- **Core meaning — English**: The strictest isolation standard ensuring that concurrent transaction execution yields the exact same outcome as running them completely serially.
- **Core meaning & mental image — Tiếng Việt**: Mức độ cô lập tuần tự hóa — Tiêu chuẩn cô lập khắt khe nhất đảm bảo kết quả thực thi đồng thời y hệt như khi chạy nối tiếp từng cái một.
- **Grammar & collocations**:
  - enforce serializability isolation level (áp dụng mức độ cô lập tuần tự hóa)
  - require serializability isolation level (yêu cầu mức độ cô lập tuần tự hóa)
  - performance cost of serializability isolation level (tốn kém hiệu năng của mức cô lập tuần tự hóa)
- **Register & nuance**: Standard ANSI SQL database terminology and distributed transactional theory.
- **Examples**:
  - *Example*: Financial ledgers demand a serializability isolation level to guarantee zero anomaly occurrences in account balances.
  - *Translation*: Các sổ cái tài chính đòi hỏi mức độ cô lập tuần tự hóa để đảm bảo không có hiện tượng bất thường nào xảy ra với số dư tài khoản.
- **Liên kết tiếng Hàn**: 직렬화 가능성 격리 수준 (Jik-yeol-hwa Ga-neung-seong Gyeok-ri Su-jun) — Trực liệt hóa (直列化) khả năng cách ly thủy chuẩn.

## 14. commit wait duration guarantee
- **IPA**: /kəˈmɪt weɪt dʊˈreɪʃn ˈɡærənti/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: A protocol feature (such as Spanner's commit wait) where the transaction pauses until real time safely passes the maximum clock uncertainty bound.
- **Core meaning & mental image — Tiếng Việt**: Đảm bảo thời gian chờ chốt giao dịch — Tính năng giao thức (như trong Spanner) buộc giao dịch dừng lại cho đến khi thời gian thực vượt qua giới hạn bất định của đồng hồ.
- **Grammar & collocations**:
  - calculate the commit wait duration guarantee (tính toán bảo đảm thời gian chờ chốt)
  - enforce commit wait duration guarantee (tuân thủ bảo đảm thời gian chờ chốt)
  - impact of commit wait duration guarantee on latency (tác động của thời gian chờ chốt lên độ trễ)
- **Register & nuance**: Advanced distributed systems architecture, specifically Google Spanner paper vocabulary.
- **Examples**:
  - *Example*: The commit wait duration guarantee ensures that no subsequent transaction can obtain a lower timestamp than the committed one.
  - *Translation*: Đảm bảo thời gian chờ chốt giao dịch giúp không một giao dịch nào sau đó có thể nhận được nhãn thời gian thấp hơn giao dịch đã chốt.
- **Liên kết tiếng Hàn**: 커밋 대기 시간 보장 (Keo-mit Dae-gi Si-gan Bo-jang) — Commit đại kỳ thời gian bảo chứng.

## 15. cross-shard transactional consistency
- **IPA**: /krɔːs-ʃɑːrd trænˈzækʃənl kənˈsɪstənsi/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: The preservation of database invariants across multiple data partitions or shards during a distributed transaction lifecycle.
- **Core meaning & mental image — Tiếng Việt**: Tính nhất quán giao dịch xuyên phân vùng — Việc duy trì các bất biến cơ sở dữ liệu trên nhiều phân vùng dữ liệu khác nhau trong vòng đời giao dịch phân tán.
- **Grammar & collocations**:
  - maintain cross-shard transactional consistency (Duy trì tính nhất quán giao dịch xuyên phân vùng)
  - challenge of cross-shard transactional consistency (Thách thức về tính nhất quán giao dịch xuyên phân vùng)
  - achieve cross-shard transactional consistency (Đạt được tính nhất quán giao dịch xuyên phân vùng)
- **Register & nuance**: Scalable cloud databases and partitioned storage engine design.
- **Examples**:
  - *Example*: Maintaining cross-shard transactional consistency requires sophisticated coordination protocols to prevent partial updates.
  - *Translation*: Việc duy trì tính nhất quán giao dịch xuyên phân vùng đòi hỏi các giao thức điều phối tinh vi để ngăn ngừa các cập nhật dang dở.
- **Liên kết tiếng Hàn**: 샤드 간 트랜잭션 일관성 (Syadeu Gan Teuraen-sak-syeon Il-gwan-seong) — Shard 간 트랜잭션 일관성 (一貫性).

## 16. distributed database snapshot isolation
- **IPA**: /dɪˈstrɪbjuːtɪd ˈdeɪtəbeɪs ˈsnæpʃɑːt ˌaɪsəˈleɪʃn/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: An isolation guarantee where each transaction reads from a consistent snapshot of the distributed database as of a specific point in time.
- **Core meaning & mental image — Tiếng Việt**: Cô lập ảnh chụp cơ sở dữ liệu phân tán — Mức độ cô lập mà mỗi giao dịch đọc từ một bản sao chụp đồng nhất của cơ sở dữ liệu tại một thời điểm cụ thể.
- **Grammar & collocations**:
  - implement distributed database snapshot isolation (triển khai cô lập ảnh chụp CSDL phân tán)
  - provide distributed database snapshot isolation (cung cấp cô lập ảnh chụp cơ sở dữ liệu phân tán)
  - read anomalies in distributed database snapshot isolation (lỗi đọc trong cô lập ảnh chụp)
- **Register & nuance**: Enterprise database architecture and concurrency models.
- **Examples**:
  - *Example*: Distributed database snapshot isolation allows long-running analytical queries to execute without locking out operational writes.
  - *Translation*: Cô lập ảnh chụp cơ sở dữ liệu phân tán cho phép các truy vấn phân tích chạy dài mà không khóa các thao tác ghi vận hành.
- **Liên kết tiếng Hàn**: 분산 데이터베이스 스냅샷 격리 (Bun-san De-i-ta-베-i-seu Seunaep-s샷 Gyeok-ri) — Phân tán database snapshot cách ly.

## 17. write skew concurrency anomaly
- **IPA**: /raɪt skjuː kənˈkɜːrənsi əˈnɑːməli/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, direct object).
- **Core meaning — English**: A concurrency anomaly where two transactions read overlapping data sets, make disjoint updates based on those reads, and both successfully commit, violating a global constraint.
- **Core meaning & mental image — Tiếng Việt**: Dị thường đồng tranh chấp lệch ghi — Lỗi xảy ra khi hai giao dịch đọc các tập dữ liệu chồng lấn, cập nhật các phần khác nhau dựa trên dữ liệu đó và cùng chốt thành công, vi phạm ràng buộc toàn cục.
- **Grammar & collocations**:
  - prevent write skew concurrency anomaly (ngăn chặn dị thường lệch ghi)
  - vulnerable to write skew concurrency anomaly (dễ bị tổn thương trước dị thường lệch ghi)
  - detect write skew concurrency anomaly (phát hiện dị thường lệch ghi)
- **Register & nuance**: Advanced database theory and transaction anomaly classification.
- **Examples**:
  - *Example*: Standard snapshot isolation is vulnerable to the write skew concurrency anomaly, requiring explicit locking statements like SELECT FOR UPDATE.
  - *Translation*: Cô lập ảnh chụp tiêu chuẩn dễ dính dị thường lệch ghi, đòi hỏi các câu lệnh khóa tường minh như SELECT FOR UPDATE.
- **Liên kết tiếng Hàn**: 쓰기 편향 동시성 이상 (Sseu-gi Pyeon-hyang Dong-si-seong I-sang) — Viết (write) thiên hướng (偏向) đồng thời dị thường.

## 18. split-brain recovery transaction
- **IPA**: /splɪt-breɪn rɪˈkʌvəri trænˈzækʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: The transactional reconciliation process executed when a partitioned cluster heals and conflicting changes from isolated sub-clusters must be resolved.
- **Core meaning & mental image — Tiếng Việt**: Giao dịch phục hồi khi chia rẽ não bộ (Split-brain) — Quy trình hòa giải giao dịch diễn ra khi cụm mạng hàn gắn lại và các thay đổi xung đột từ các phân vùng cô lập được xử lý.
- **Grammar & collocations**:
  - handle split-brain recovery transactions (xử lý các giao dịch phục hồi chia rẽ não bộ)
  - automate split-brain recovery transactions (tự động hóa giao dịch phục hồi chia rẽ não bộ)
  - risk during split-brain recovery transactions (rủi ro trong giao dịch phục hồi chia rẽ)
- **Register & nuance**: Distributed systems disaster recovery and high-availability engineering.
- **Examples**:
  - *Example*: A robust split-brain recovery transaction policy is vital to prevent silent data loss during prolonged network outages.
  - *Translation*: Chính sách giao dịch phục hồi chia rẽ não bộ mạnh mẽ là tối quan trọng để ngăn chặn tình trạng mất dữ liệu ngầm trong thời gian mạng mất kết nối kéo dài.
- **Liên kết tiếng Hàn**: 스플릿 브레인 복구 트랜잭션 (Seu-peul-rit Beu-rein Bok-gu Teuraen-sak-syeon) — Split brain phục hồi 트랜잭션.

## 19. globally synchronized time bounds
- **IPA**: /ˈɡloʊbəli ˈsɪŋkrənaɪzt taɪm baʊndz/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: Bounded time intervals guaranteed across geographically dispersed data centers, allowing ordering of events without physical message exchanges.
- **Core meaning & mental image — Tiếng Việt**: Giới hạn thời gian đồng bộ toàn cầu — Khoảng thời gian giới hạn được đảm bảo trên các trung tâm dữ liệu phân tán địa lý, cho phép sắp xếp sự kiện mà không cần trao đổi tin nhắn vật lý.
- **Grammar & collocations**:
  - maintain globally synchronized time bounds (duy trì giới hạn thời gian đồng bộ toàn cầu)
  - rely on globally synchronized time bounds (dựa vào giới hạn thời gian đồng bộ toàn cầu)
  - precision of globally synchronized time bounds (độ chính xác của giới hạn thời gian đồng bộ toàn cầu)
- **Register & nuance**: Advanced distributed database literature (Google Spanner / distributed clock mechanisms).
- **Examples**:
  - *Example*: Globally synchronized time bounds enable Spanner to provide external consistency without chatty locking protocols across oceans.
  - *Translation*: Giới hạn thời gian đồng bộ toàn cầu cho phép Spanner cung cấp tính nhất quán ngoài mà không cần các giao thức khóa rườm rà qua các đại dương.
- **Liên kết tiếng Hàn**: 전 세계 동기화된 시간 경계 (Jeon Se-gye Dong-gi-hwa-doen Si-gan Gyeong-gye) — Toàn thế giới (全世界) đồng kỳ hóa thời gian cảnh giới.

## 20. durable write write-ahead log
- **IPA**: /ˈdʊrəbl raɪt ˈraɪt-əˈhɛd lɑːɡ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: An append-only log file on persistent storage where transaction modifications are recorded before being applied to the main database tables.
- **Core meaning & mental image — Tiếng Việt**: Nhật ký ghi trước bền vững — Tệp nhật ký chỉ nối thêm trên bộ lưu trữ bền vững nơi các sửa đổi giao dịch được ghi lại trước khi áp dụng vào bảng chính.
- **Grammar & collocations**:
  - flush durable write write-ahead log (xả nhật ký ghi trước bền vững xuống đĩa)
  - append to durable write write-ahead log (ghi bổ sung vào nhật ký ghi trước bền vững)
  - corruption of durable write write-ahead log (sự hỏng hóc nhật ký ghi trước bền vững)
- **Register & nuance**: Database storage engines and low-level durability architecture.
- **Examples**:
  - *Example*: A transaction is deemed successfully committed only after its durable write write-ahead log is safely flushed to non-volatile storage.
  - *Translation*: Một giao dịch chỉ được coi là chốt thành công sau khi nhật ký ghi trước bền vững của nó được xả an toàn xuống bộ nhớ không bay hơi.
- **Liên kết tiếng Hàn**: 영구 쓰기 선행 로그 (Yeong-gu Sseu-gi Seon-haeng Logu) — Vĩnh cửu (永久) viết tiên hành log.

## 21. distributed query execution engine
- **IPA**: /dɪˈstrɪbjuːtɪd ˈkwɪri ˈɛksəˈkjuːʃn ˈɛndʒɪn/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: A software component that parses, optimizes, and parallelizes complex SQL queries across multiple distributed nodes.
- **Core meaning & mental image — Tiếng Việt**: Động cơ thực thi truy vấn phân tán — Thành phần phần mềm phân tích, tối ưu hóa và song song hóa các truy vấn SQL phức tạp trên nhiều nút phân tán.
- **Grammar & collocations**:
  - optimize the distributed query execution engine (tối ưu hóa động cơ thực thi truy vấn phân tán)
  - scale the distributed query execution engine (mở rộng động cơ thực thi truy vấn phân tán)
  - distributed query execution engine bottleneck (điểm nghẽn của động cơ thực thi truy vấn phân tán)
- **Register & nuance**: Distributed SQL database engines and distributed analytical data warehouses.
- **Examples**:
  - *Example*: The distributed query execution engine pushes data processing filters down to storage nodes to minimize network bandwidth consumption.
  - *Translation*: Động cơ thực thi truy vấn phân tán đẩy các bộ lọc xử lý dữ liệu xuống các nút lưu trữ để giảm thiểu mức tiêu thụ băng thông mạng.
- **Liên kết tiếng Hàn**: 분산 쿼리 실행 엔진 (Bun-san Kwo-ri Sil-haeng En-jin) — Phân tán query chấp hành engine.

## 22. multi-datacenter replication quorum
- **IPA**: /ˈmʌlti-deɪtəˌsɛntər ˌrɛplɪˈkeɪʃn ˈkwɔːrəm/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: The minimum number of replica nodes across multiple datacenters that must acknowledge a write for it to be considered successful.
- **Core meaning & mental image — Tiếng Việt**: Túc số nhân bản đa trung tâm dữ liệu — Số lượng nút tối thiểu trên nhiều trung tâm dữ liệu phải xác nhận một thao tác ghi để nó được coi là thành công.
- **Grammar & collocations**:
  - achieve multi-datacenter replication quorum (đạt được túc số nhân bản đa trung tâm dữ liệu)
  - lose multi-datacenter replication quorum (mất túc số nhân bản đa trung tâm dữ liệu)
  - configure multi-datacenter replication quorum (cấu hình túc số nhân bản đa trung tâm dữ liệu)
- **Register & nuance**: High availability, cloud infrastructure, and distributed storage topology.
- **Examples**:
  - *Example*: By distributing replicas across three distinct availability zones, the system maintains a multi-datacenter replication quorum even during a total facility blackout.
  - *Translation*: Bằng cách phân phối các bản sao qua ba vùng sẵn sàng riêng biệt, hệ thống vẫn duy trì được túc số nhân bản đa trung tâm dữ liệu ngay cả khi mất điện toàn bộ cơ sở.
- **Liên kết tiếng Hàn**: 다중 데이터센터 복제 쿼럼 (Da-jung De-i-ta-sen-teo Bok-je Kwo-reom) — Đa trọng (多重) data center phục chế quorum.

## 23. high-throughput transactional database
- **IPA**: /haɪ-ˈθruːpʊt trænˈzækʃənl ˈdeɪtəbeɪs/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: A database system engineered to process tens of thousands of complex write and read transactions per second with minimal latency.
- **Core meaning & mental image — Tiếng Việt**: Cơ sở dữ liệu giao dịch thông lượng cao — Hệ thống CSDL được thiết kế để xử lý hàng chục nghìn giao dịch đọc ghi phức tạp mỗi giây với độ trễ tối thiểu.
- **Grammar & collocations**:
  - deploy a high-throughput transactional database (triển khai cơ sở dữ liệu giao dịch thông lượng cao)
  - benchmark a high-throughput transactional database (đánh giá hiệu năng CSDL giao dịch thông lượng cao)
  - bottleneck in a high-throughput transactional database (điểm nghẽn trong CSDL giao dịch thông lượng cao)
- **Register & nuance**: Enterprise software architecture and high-performance computing.
- **Examples**:
  - *Example*: Modern payment gateways rely on a high-throughput transactional database to handle flash-sale traffic spikes smoothly.
  - *Translation*: Các cổng thanh toán hiện đại dựa vào cơ sở dữ liệu giao dịch thông lượng cao để xử lý mượt mà các đợt bùng nổ lưu lượng mua sắm chớp nhoáng.
- **Liên kết tiếng Hàn**: 고처리량 트랜잭션 데이터베이스 (Go-cheo-ri-ryang Teuraen-sak-syeon De-i-ta-be-i-seu) — Cao xử lượng (高処理量) 트랜잭션 database.

## 24. read-only replica transaction
- **IPA**: /ˈriːd-oʊnli ˈrɛplɪkə trænˈzækʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: A query transaction executed against a secondary replica node that does not modify state, often bypassing heavy consensus overhead.
- **Core meaning & mental image — Tiếng Việt**: Giao dịch bản sao chỉ đọc — Giao dịch truy vấn thực hiện trên nút bản sao phụ không làm thay đổi trạng thái, thường bỏ qua chi phí đồng thuận nặng nề.
- **Grammar & collocations**:
  - execute a read-only replica transaction (thực thi giao dịch bản sao chỉ đọc)
  - route queries to a read-only replica transaction (định tuyến truy vấn tới giao dịch bản sao chỉ đọc)
  - stale reads in read-only replica transactions (đọc cũ trong giao dịch bản sao chỉ đọc)
- **Register & nuance**: Database scaling patterns and read/write splitting architecture.
- **Examples**:
  - *Example*: Offloading reporting queries to a read-only replica transaction preserves primary database resources for critical write workloads.
  - *Translation*: Chuyển tải các truy vấn báo cáo sang giao dịch bản sao chỉ đọc giúp bảo toàn tài nguyên cơ sở dữ liệu chính cho các tác vụ ghi quan trọng.
- **Liên kết tiếng Hàn**: 읽기 전용 복제본 트랜잭션 (Il-gi Jeon-yong Bok-je-bon Teuraen-sak-syeon) — Đọc chuyên dụng (讀專用) 복제본 트랜잭션.

## 25. mission-critical enterprise datastore
- **IPA**: /ˈmɪʃn-krɪtɪkl ˈɛntərpraɪz ˈdeɪtəstɔːr/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object).
- **Core meaning — English**: A core corporate data repository whose continuous availability and absolute data integrity are vital to business survival.
- **Core meaning & mental image — Tiếng Việt**: Kho dữ liệu doanh nghiệp cốt lõi / tối quan trọng — Kho lưu trữ dữ liệu doanh nghiệp mà sự sẵn sàng liên tục và tính toàn vẹn tuyệt đối sống còn đối với sự tồn tại của doanh nghiệp.
- **Grammar & collocations**:
  - protect a mission-critical enterprise datastore (bảo vệ kho dữ liệu doanh nghiệp tối quan trọng)
  - migrate a mission-critical enterprise datastore (di dời kho dữ liệu doanh nghiệp cốt lõi)
  - failure of a mission-critical enterprise datastore (sự cố kho dữ liệu doanh nghiệp tối quan trọng)
- **Register & nuance**: Enterprise IT architecture, executive technology discussions, and system reliability engineering.
- **Examples**:
  - *Example*: Any downtime in the mission-critical enterprise datastore halts global banking operations instantly.
  - *Translation*: Bất kỳ thời gian chết nào trong kho dữ liệu doanh nghiệp tối quan trọng đều lập tức làm đình trệ các hoạt động ngân hàng toàn cầu.
- **Liên kết tiếng Hàn**: 미션 크리티컬 엔터프라이즈 데이터스토어 (Misy-eon Keu-ri-ti-keol En-teo-peu-rai-jeu De-i-ta-seu-to-eo) — Mission critical enterprise datastore.

## Review in context: Part 1 (items 1–12)

Modern cloud architecture relies on robust **distributed ACID transaction** management to ensure financial integrity across multi-region infrastructure. When modifications span independent database shards, a **two-phase commit coordinator** acts as the central orchestrator to manage prepare and commit phases. To eliminate coordination bottlenecks without traditional locking overhead, systems like Google Spanner leverage a **TrueTime API atomic clock** to bound time uncertainty. This precise timekeeping achieves **external consistency linearizability**, ensuring real-time ordering across globally dispersed nodes. Behind the scenes, a **multi-version concurrency control (MVCC)** engine maintains multiple versions of data rows so that readers never block writers. When conflicting locks span multiple shards, a **distributed deadlock detection** algorithm periodically scans for circular wait conditions. Every mutation is safely recorded in a **Paxos-replicated state log** to guarantee fault-tolerant consensus across a quorum. Under older concurrency models, a **timestamp ordering transaction** protocol rejects any operation attempting to modify data out of sequence. Developers monitor **read-write transaction latency** closely to ensure that cross-datacenter round trips do not degrade user experience. However, network partitions can cause a **network partition 2PC stall**, freezing active sessions indefinitely if the coordinator is isolated. To mediate contention, a **lock manager distributed lock** coordinates exclusive record access, though aggressive write workloads can still trigger an **optimistic concurrency abort**, requiring application-level retries.

Bản dịch tiếng Việt:
Kiến trúc đám mây hiện đại dựa vào việc quản lý **giao dịch ACID phân tán** mạnh mẽ để đảm bảo tính toàn vẹn tài chính trên cơ sở hạ tầng đa khu vực. Khi các sửa đổi trải dài qua các phân vùng cơ sở dữ liệu độc lập, **bộ điều phối cam kết hai pha** đóng vai trò là nhạc trưởng trung tâm để quản lý các pha chuẩn bị và chốt. Để loại bỏ các điểm nghẽn điều phối mà không cần chi phí khóa truyền thống, các hệ thống như Google Spanner tận dụng **đồng hồ nguyên tử TrueTime API** để giới hạn mức độ bất định về thời gian. Việc giữ thời gian chính xác này đạt được **tính nhất quán ngoài và tuyến tính hóa**, đảm bảo thứ tự thời gian thực trên các nút phân tán toàn cầu. Phía sau hậu trường, động cơ **kiểm soát đồng tranh chấp đa phiên bản (MVCC)** duy trì nhiều phiên bản của các hàng dữ liệu để người đọc không bao giờ chặn người ghi. Khi các khóa xung đột trải rộng qua nhiều phân vùng, thuật toán **phát hiện bế tắc phân tán** sẽ quét định kỳ để tìm các điều kiện chờ vòng tròn. Mọi thay đổi đều được ghi lại an toàn trong **nhật ký trạng thái nhân bản Paxos** nhằm đảm bảo sự đồng thuận chịu lỗi trên toàn bộ số đông nút. Dưới các mô hình đồng tranh chấp cũ, giao thức **giao dịch sắp xếp theo mốc thời gian** từ chối mọi thao tác cố gắng sửa đổi dữ liệu sai thứ tự. Các nhà phát triển theo dõi sát sao **độ trễ giao dịch đọc-ghi** để đảm bảo các chuyến khứ hồi xuyên trung tâm dữ liệu không làm giảm trải nghiệm người dùng. Tuy nhiên, sự cố phân mảnh mạng có thể gây ra **sự treo 2PC do phân mảnh mạng**, đóng băng các phiên hoạt động vô thời hạn nếu bộ điều phối bị cô lập. Để điều tiết tranh chấp, **khóa phân tán của trình quản lý khóa** phối hợp việc truy cập bản ghi độc quyền, mặc dù khối lượng công việc ghi dữ liệu mạnh mẽ vẫn có thể kích hoạt **lệnh hủy do đồng tranh chấp lạc quan**, đòi hỏi ứng dụng phải thử lại.

## Review in context: Part 2 (items 13–25)

Achieving a strict **serializability isolation level** is essential for financial ledgers where concurrency anomalies are unacceptable. To implement this safely without locks, advanced engines utilize a **commit wait duration guarantee**, pausing transactions until real-time uncertainty passes. This mechanism ensures seamless **cross-shard transactional consistency** across a globally partitioned architecture. Furthermore, **distributed database snapshot isolation** allows long-running analytical queries to execute concurrently without interfering with operational updates. Without strict guardrails, however, complex transactions remain vulnerable to a **write skew concurrency anomaly**, where overlapping reads lead to violated global constraints. During catastrophic network failures, automated systems must execute a **split-brain recovery transaction** to reconcile conflicting state updates after the cluster heals. Underpinning these mechanisms are **globally synchronized time bounds** that provide accurate temporal ordering across continents. Every committed mutation is first safely appended to a **durable write write-ahead log** stored on non-volatile media. Incoming queries are then parsed and optimized by a **distributed query execution engine** to maximize parallel throughput. Across storage layers, a **multi-datacenter replication quorum** ensures that data survives regional outages. Designed specifically for enterprise workloads, a **high-throughput transactional database** handles massive traffic spikes while maintaining strict durability. Applications can also offload analytical queries to a **read-only replica transaction**, preserving primary resources for the **mission-critical enterprise datastore**.

Bản dịch tiếng Việt:
Đạt được **mức độ cô lập tuần tự hóa** nghiêm ngặt là điều cần thiết đối với các sổ cái tài chính nơi các dị thường đồng tranh chấp là không thể chấp nhận được. Để thực hiện điều này một cách an toàn mà không cần khóa, các động cơ tiên tiến sử dụng **đảm bảo thời gian chờ chốt giao dịch**, tạm dừng các giao dịch cho đến khi mức bất định thời gian thực qua đi. Cơ chế này đảm bảo **tính nhất quán giao dịch xuyên phân vùng** liền mạch trên một kiến trúc phân toàn cầu. Hơn nữa, **cô lập ảnh chụp cơ sở dữ liệu phân tán** cho phép các truy vấn phân tích chạy dài thực thi đồng thời mà không làm gián đoạn các cập nhật vận hành. Tuy nhiên, nếu không có các hàng rào bảo vệ nghiêm ngặt, các giao dịch phức tạp vẫn dễ bị tổn thương trước **dị thường đồng tranh chấp lệch ghi**, nơi các thao tác đọc chồng lấn dẫn đến việc vi phạm các ràng buộc toàn cục. Trong các sự cố mạng thảm khốc, các hệ thống tự động phải thực hiện **giao dịch phục hồi khi chia rẽ não bộ** để hòa giải các cập nhật trạng thái xung đột sau khi cụm mạng được hàn gắn. Nền tảng cho các cơ chế này là **giới hạn thời gian đồng bộ toàn cầu** cung cấp thứ tự thời gian chính xác trên khắp các châu lục. Mọi thay đổi được chốt đều được ghi bổ sung an toàn vào **nhật ký ghi trước bền vững** được lưu trữ trên phương tiện không bay hơi. Các truy vấn đến sau đó được phân tích và tối ưu hóa bởi **động cơ thực thi truy vấn phân tán** nhằm tối đa hóa thông lượng song song. Trên các tầng lưu trữ, **túc số nhân bản đa trung tâm dữ liệu** đảm bảo dữ liệu sống sót qua các sự cố mất điện khu vực. Được thiết kế dành riêng cho khối lượng công việc doanh nghiệp, **cơ sở dữ liệu giao dịch thông lượng cao** xử lý các đợt bùng nổ lưu lượng khổng lồ mà vẫn duy trì tính bền vững nghiêm ngặt. Các ứng dụng cũng có thể chuyển tải các truy vấn phân tích sang **giao dịch bản sao chỉ đọc**, qua đó bảo toàn tài nguyên chính cho **kho dữ liệu doanh nghiệp tối quan trọng**.
