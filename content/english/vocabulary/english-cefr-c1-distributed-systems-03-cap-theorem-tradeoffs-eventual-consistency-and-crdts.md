# C1 Vocabulary 03 — CAP theorem trade-offs, eventual consistency models, and conflict-free replicated data types (CRDTs)

Bài học C1 này đi sâu vào kiến trúc hệ thống phân tán nâng cao: từ các định luật giới hạn cơ bản như Định lý CAP (CAP theorem) và Định lý PACELC, mô hình hội tụ dữ liệu (eventual consistency), kiểu dữ liệu sao chép không xung đột (CRDTs), cho đến cơ chế giải quyết tranh chấp đồng thời, đồng hồ véc-tơ (vector clocks) và khả năng phục hồi khi chia cắt mạng.

---

## 1. CAP theorem partition tolerance /kæp ˈθɪərəm pɑːrˈtɪʃən ˈtɑːlərəns/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ chi phối thiết kế hệ thống hoặc tân ngữ sau `analyze`, `reconcile`, `violate`, `apply`.

**Core meaning — English:** The fundamental distributed systems theorem stating that a networked data store can simultaneously provide at most two of three guarantees: Consistency, Availability, and Partition Tolerance.

**Core meaning & mental image — Tiếng Việt:** Định lý CAP về khả năng chịu phân vùng mạng; nguyên lý đánh đổi trong hệ thống phân tán. Hãy hình dung một chiếc kiềng ba chân gồm Nhất quán (Consistency), Khả dụng (Availability) và Chịu phân vùng (Partition Tolerance): khi cáp mạng đứt đôi giữa các trung tâm dữ liệu, hệ thống buộc phải hy sinh một trong ba chân để giữ cho phần còn lại không sụp đổ hoàn toàn.

**Grammar & collocations:** `analyze CAP theorem trade-offs` — phân tích các sự đánh đổi theo định lý CAP; `satisfy CAP theorem constraints` — thỏa mãn các ràng buộc của định lý CAP; `partition tolerance guarantee` — bảo đảm khả năng chịu phân vùng mạng.

**Register & nuance:** Thuật ngữ kinh điển trong khoa học máy tính phân tán (*distributed systems architecture*). Do phân vùng mạng (*network partition*) là điều kiện thực tế không thể tránh khỏi trên internet, sự lựa chọn thực tế luôn là giữa CP (Consistency + Partition Tolerance) hoặc AP (Availability + Partition Tolerance).

**Examples:** `During network partitions, distributed databases must choose between availability and consistency, as dictated by the CAP theorem partition tolerance constraints.` → Trong các đợt phân vùng mạng, cơ sở dữ liệu phân tán phải lựa chọn giữa tính khả dụng và tính nhất quán, đúng theo các ràng buộc về khả năng chịu phân vùng của định lý CAP.

**Liên kết tiếng Hàn:** `CAP 정리 파티션 허용성` (CAP 定理 partition 許容性) — tính dung thứ phân vùng trong định lý CAP.

---

## 2. eventual consistency convergence /ɪˈvɛntʃuəl kənˈsɪstənsi kənˈvɜːrdʒəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ định hướng đồng bộ dữ liệu hoặc tân ngữ sau `achieve`, `guarantee`, `accelerate`, `monitor`.

**Core meaning — English:** A consistency model in distributed data stores in whichologically replicated data items will automatically converge to the same value across all nodes given enough time without further updates.

**Core meaning & mental image — Tiếng Việt:** Sự hội tụ tính nhất quán cuối cùng; mô hình đồng bộ trễ. Hãy hình dung hai chi nhánh cửa hàng ở hai đầu thế giới cùng bán hàng khi đứt cáp: mỗi bên ghi nhận số lượng hàng tồn kho khác nhau trên máy cục bộ, nhưng ngay khi mạng internet phục hồi, hệ thống ngầm tự động đối chiếu và đồng bộ để cả hai kho cuối cùng đều có chung một con số chính xác.

**Grammar & collocations:** `guarantee eventual consistency convergence` — bảo đảm sự hội tụ nhất quán cuối cùng; `achieve data convergence` — đạt được sự hội tụ dữ liệu; `eventual consistency model` — mô hình nhất quán cuối cùng.

**Register & nuance:** Trọng tâm của kiến trúc NoSQL và các hệ thống phân tán hiệu năng cao (*high-performance distributed systems*). Đánh đổi độ trễ thấp và tính khả dụng cao bằng việc chấp nhận dữ liệu tạm thời không đồng bộ (*stale reads*).

**Examples:** `By adopting an asynchronous replication strategy, the multi-region database ensures eventual consistency convergence across all replica nodes within seconds.` → Bằng cách áp dụng chiến lược sao chép bất đồng bộ, cơ sở dữ liệu đa khu vực đảm bảo sự hội tụ nhất quán cuối cùng trên tất cả các nút bản sao trong vòng vài giây.

**Liên kết tiếng Hàn:** `결과적 일관성 수렴` (結果적 一貫性 收斂) — sự hội tụ tính nhất quán kết quả (eventual consistency).

---

## 3. conflict-free replicated data type /ˈkɑːnflɪkt friː ˈrɛplɪkeɪtɪd ˈdeɪtə taɪp/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường viết tắt là CRDT). Thường làm chủ ngữ tự động đồng bộ dữ liệu hoặc tân ngữ sau `implement`, `design`, `utilize`, `deploy`.

**Core meaning — English:** A data structure implemented in distributed systems that can be replicated across multiple nodes, updated independently and concurrently without coordination, and mathematically guaranteed to resolve all conflicts automatically.

**Core meaning & mental image — Tiếng Việt:** Kiểu dữ liệu sao chép không xung đột (CRDT); cấu trúc tự hòa giải dữ liệu. Hãy hình dung hai người cùng viết chung một văn bản trên Google Docs khi ngoại tuyến: mỗi người gõ một đoạn khác nhau, và khi kết nối lại, thuật toán toán học bên dưới tự động ghép nối các ký tự lại hoàn hảo mà không cần máy chủ trung tâm phân xử tranh chấp.

**Grammar & collocations:** `implement a conflict-free replicated data type` — triển khai kiểu dữ liệu sao chép không xung đột; `state-based CRDT design` — thiết kế CRDT dựa trên trạng thái; `conflict-free data synchronization` — đồng bộ dữ liệu không xung đột.

**Register & nuance:** Công nghệ đột phá trong hệ thống cộng tác thời gian thực và cơ sở dữ liệu biên (*edge computing*). Dựa trên nền tảng toán học đại số trừu tượng (*join-semilattices*).

**Examples:** `Collaborative editing applications heavily rely on conflict-free replicated data types to allow seamless offline typing and automatic merge convergence.` → Các ứng dụng chỉnh sửa cộng tác phụ thuộc rất nhiều vào các kiểu dữ liệu sao chép không xung đột để cho phép gõ ngoại tuyến mượt mà và tự động hội tụ hợp nhất.

**Liên kết tiếng Hàn:** `무충돌 복제 데이터 타입` (無衝突 複製 data type / CRDT) — kiểu dữ liệu sao chép không xung đột.

---

## 4. strong eventual consistency model /strɔːŋ ɪˈvɛntʃuəl kənˈsɪstənsi ˈmɑːdəl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ định hình bảo đảm hệ thống hoặc tân ngữ sau `implement`, `satisfy`, `verify`, `guarantee`.

**Core meaning — English:** A robust distributed consistency guarantee ensuring that any replica nodes that have received the same set of updates will eventually arrive at an identical system state, regardless of message delivery order or network delays.

**Core meaning & mental image — Tiếng Việt:** Mô hình nhất quán cuối cùng mạnh; chuẩn hội tụ tuyệt đối qua mọi bản sao. Hãy hình dung một đám đông người đưa thư nhận các bức thư theo những thứ tự hoàn toàn lộn xộn khác nhau trên khắp hành tinh, nhưng nhờ quy tắc toán học ngặt nghèo, cuối cùng ai cũng đọc được một cuốn sổ cái có nội dung chính xác y hệt nhau.

**Grammar & collocations:** `satisfy strong eventual consistency` — thỏa mãn tính nhất quán cuối cùng mạnh; `implement a strong eventual consistency model` — triển khai mô hình nhất quán cuối cùng mạnh; `mathematical convergence guarantee` — bảo đảm hội tụ toán học.

**Register & nuance:** Nâng cấp từ *eventual consistency* thông thường. Yêu cầu tính chất toán học gọi là hội tụ mạnh (*Strong Eventual Consistency* hay SEC), đảm bảo không cần sự can thiệp thủ công hay khóa phân tán.

**Examples:** `The distributed key-value store guarantees a strong eventual consistency model, ensuring all replicas converge to identical states once network partitions heal.` → Kho khóa-giá trị phân tán đảm bảo mô hình nhất quán cuối cùng mạnh, đảm bảo mọi bản sao hội tụ về trạng thái y hệt nhau ngay khi các phân vùng mạng được hàn gắn.

**Liên kết tiếng Hàn:** `강한 결과적 일관성 모델` (強한 結果的 一貫性 model) — mô hình nhất quán kết quả mạnh.

---

## 5. state-based versus operation-based CRDT /steɪt beɪst ˈvɜːrsəs ˈɑːpəˌreɪʃən beɪst kɔːr di ti ti/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `compare`, `evaluate`, `choose`, hoặc làm chủ ngữ phân loại kiến trúc CRDT.

**Core meaning — English:** The architectural classification contrasting CvRDTs (State-based CRDTs that transmit full local states merged via join operations) and CmRDTs (Operation-based CRDTs that broadcast individual mutation operations).

**Core meaning & mental image — Tiếng Việt:** So sánh CRDT dựa trên trạng thái và CRDT dựa trên thao tác. Hãy hình dung hai cách dọn dẹp phòng: một bên gửi toàn bộ bức ảnh chụp căn phòng hiện tại để bên kia tự đè lên (dựa trên trạng thái), còn bên kia chỉ gửi tin nhắn ngắn gọn "vừa nhặt cây bút lên bàn" (dựa trên thao tác).

**Grammar & collocations:** `evaluate state-based versus operation-based CRDT models` — đánh giá các mô hình CRDT dựa trên trạng thái và thao tác; `state-based CvRDT replication` — sự sao chép CvRDT dựa trên trạng thái; `operation-based CmRDT broadcast` — việc phát sóng CmRDT dựa trên thao tác.

**Register & nuance:** Phân loại kiến trúc cốt lõi khi thiết kế hệ thống phân tán chịu lỗi. CvRDT tốn băng thông mạng hơn vì truyền toàn trạng thái nhưng chịu được mất gói tin; CmRDT tiết kiệm băng thông nhưng đòi hỏi hạ tầng mạng bảo đảm giao nhận tin nhắn tin cậy.

**Examples:** `When architecting the peer-to-peer sync engine, engineers carefully weighed state-based versus operation-based CRDT options based on network bandwidth limits.` → Khi kiến trúc hóa công cụ đồng bộ ngang hàng, các kỹ sư đã cân nhắc kỹ lưỡng giữa các tùy chọn CRDT dựa trên trạng thái và thao tác dựa trên giới hạn băng thông mạng.

**Liên kết tiếng Hàn:** `상태 기반 vs 연산 기반 CRDT` (狀態 基盤 vs 演算 基盤 CRDT) — CRDT dựa trên trạng thái so với CRDT dựa trên thao tác.

---

## 6. vector clock causal ordering /ˈvɛktər klɑːk ˈkɔːzəl ˈɔːrdərɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ theo dõi thứ tự sự kiện hoặc tân ngữ sau `maintain`, `implement`, `utilize`, `track`.

**Core meaning — English:** A algorithmic data structure composed of logical node clocks used in distributed systems to determine the causal relationship and partial ordering of concurrent update events across nodes without synchronized physical clocks.

**Core meaning & mental image — Tiếng Việt:** Thứ tự nhân quả bằng đồng hồ véc-tơ; mảng đếm logic theo dõi quan hệ nguyên nhân - kết quả. Hãy hình dung một chuỗi biên bản ghi chép của nhiều thám tử: mỗi người tự đánh số thứ tự hành động của mình, và khi ghép lại thành một vector nhiều con số, họ biết chắc chắn hành động nào xảy ra trước, hành động nào diễn ra đồng thời mà không cần đồng hồ đeo tay bấm giờ chuẩn xác.

**Grammar & collocations:** `maintain vector clock causal ordering` — duy trì thứ tự nhân quả bằng đồng hồ véc-tơ; `detect concurrent updates via vector clocks` — phát hiện các cập nhật đồng thời qua đồng hồ véc-tơ; `causal consistency tracking` — theo dõi tính nhất quán nhân quả.

**Register & nuance:** Kỹ thuật nền tảng trong hệ thống lưu trữ phân tán phi tập trung (*decentralized distributed databases*) như Amazon Dynamo để phát hiện xung đột ghi đè (*write conflicts*).

**Examples:** `The distributed document store utilizes vector clock causal ordering to accurately detect concurrent modifications and prevent silent data loss.` → Kho tài liệu phân tán tận dụng thứ tự nhân quả bằng đồng hồ véc-tơ để phát hiện chính xác các sửa đổi đồng thời và ngăn chặn tình trạng mất dữ liệu âm thầm.

**Liên kết tiếng Hàn:** `벡터 시계 인과적 순서화` (vector 時計 因果的 順序化) — sắp xếp thứ tự nhân quả bằng đồng hồ véc-tơ.

---

## 7. monotonic write consistency guarantee

**American IPA:** /ˌmɑːnəˈtɑːnɪk raɪt kənˈsɪstənsi ˌɡærənˈtiː/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ bảo đảm tuần tự ghi dữ liệu hoặc tân ngữ sau `guarantee`, `enforce`, `require`, `verify`.

**Core meaning — English:** A distributed consistency guarantee ensuring that multiple write operations issued by the same client session are serialized and executed across all cluster replicas in the exact order they were submitted.

**Core meaning & mental image — Tiếng Việt:** Bảo đảm tính nhất quán ghi đơn điệu; quy tắc không bao giờ đảo lộn thứ tự các lệnh ghi dữ liệu của cùng một người dùng. Hãy hình dung bạn gửi lệnh tạo mật khẩu mới rồi gửi tiếp lệnh xác nhận kích hoạt tài khoản; nếu máy chủ sao chép ghi lệnh kích hoạt trước lệnh đổi mật khẩu, tài khoản sẽ hỏng hoàn toàn — *monotonic write consistency guarantee* bảo đảm tuần tự từng bước ghi đúng như ý bạn.

**Grammar & collocations:** `enforce monotonic write consistency guarantees` — ép buộc các bảo đảm tính nhất quán ghi đơn điệu; `preserve update order with monotonic writes` — bảo toàn thứ tự cập nhật với các lệnh ghi đơn điệu; `distributed monotonic write protocol` — giao thức ghi đơn điệu phân tán.

**Register & nuance:** Một trong bốn bảo đảm phiên làm việc (*session guarantees*) nền tảng trong kiến trúc hệ thống phân tán. Giúp ngăn chặn sự xáo trộn thứ tự cập nhật trạng thái khi khách hàng kết nối đến nhiều nút ghi khác nhau.

**Examples:** `To prevent update conflicts when users edit documents rapidly, the cluster enforces a strict monotonic write consistency guarantee across all partitions.` → Để ngăn ngừa xung đột cập nhật khi người dùng chỉnh sửa tài liệu liên tục, cụm máy chủ áp dụng bảo đảm tính nhất quán ghi đơn điệu nghiêm ngặt trên toàn bộ các phân vùng.

**Liên kết tiếng Hàn:** `단조 쓰기 일관성 보증` (單調 쓰기 一貫性 保證 / monotonic write guarantee) — bảo đảm tính nhất quán ghi đơn điệu.

---

## 8. distributed split-brain recovery /dɪˈstrɪbyʊtɪd ˈsplɪt breɪn rɪˈkʌvəri/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ khôi phục cụm máy chủ hoặc tân ngữ sau `handle`, `automate`, `trigger`, `execute`.

**Core meaning — English:** The automated recovery procedure and algorithmic consensus resolution executed when a distributed cluster fractures into isolated sub-networks that independently mutate data, creating divergent state forks.

**Core meaning & mental image — Tiếng Việt:** Quy trình phục hồi hệ thống phân tán bị chia rẽ não bộ (split-brain); hàn gắn cụm máy chủ phân rã. Hãy hình dung một tổ chức bị cắt đôi đường dây liên lạc, hai phó thủ lĩnh ở hai đầu đều tự nhận mình là vua và ra lệnh trái ngược nhau; khi cầu nối liên lạc vừa khôi phục, hệ thống phải có cơ chế phẫu thuật thần kỳ để hợp nhất hai vương quốc thành một mà không làm loạn quốc pháp.

**Grammar & collocations:** `handle distributed split-brain recovery` — xử lý phục hồi phân rã split-brain phân tán; `automate split-brain resolution protocols` — tự động hóa các giao thức giải quyết chia rẽ não bộ; `split-brain recovery mechanism` — cơ chế khôi phục split-brain.

**Register & nuance:** Tình huống thảm họa kinh điển trong quản lý cụm máy chủ cao cấp (*high-availability cluster management*). Thường được phòng ngừa bằng các thuật toán đồng thuận như Raft hoặc Paxos kết hợp quorum đa số (*majority quorum*).

**Examples:** `When the network bridge severed the datacenter cluster, triggering a classic split-brain scenario, the automated cluster manager initiated distributed split-brain recovery procedures.` → Khi cầu nối mạng cắt đứt cụm trung tâm dữ liệu, kích hoạt kịch bản split-brain kinh điển, trình quản lý cụm tự động đã khởi ố quy trình phục hồi phân rã phân tán.

**Liên kết tiếng Hàn:** `분산 스플릿브레인 복구` (分散 split-brain 復旧) — khôi phục trạng thái phân rã não bộ (split-brain) trong hệ thống phân tán.

---

## 9. PACELC theorem extension /ˈpæsɛlk ˈθɪərəm ɪkˈstɛnʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ mở rộng lý thuyết CAP hoặc tân ngữ sau `formulate`, `apply`, `utilize`, `analyze`.

**Core meaning — English:** An extension of the CAP theorem stating that if there is a Partition (P), a distributed system must choose between Availability (A) and Consistency (C); Else (E), even when the system is running normally without partitions, it must choose between Latency (L) and Consistency (C).

**Core meaning & mental image — Tiếng Việt:** Định lý mở rộng PACELC; hệ quả đánh đổi giữa độ trễ và tính nhất quán khi hệ thống chạy bình thường. Hãy hình dung định lý CAP chỉ xét lúc hệ thống hỏng hóc đứt mạng, còn định lý PACELC tiến thêm một bước: ngay cả khi mạng hoàn hảo không lỗi lóc, bạn vẫn phải trả giá bằng độ trễ chậm hơn nếu muốn dữ liệu lúc nào cũng nhất quán tuyệt đối.

**Grammar & collocations:** `apply the PACELC theorem extension` — áp dụng phần mở rộng định lý PACELC; `analyze database trade-offs using PACELC` — phân tích các sự đánh đổi cơ sở dữ liệu bằng PACELC; `PACELC latency versus consistency trade-off` — sự đánh đổi giữa độ trễ và tính nhất quán theo PACELC.

**Register & nuance:** Khung phân tích nâng cao trong thiết kế cơ sở dữ liệu phân tán hiện đại (ví dụ: hệ thống DynamoDB được xếp loại PA/EL, trong khi Bigtable thuộc PC/EC).

**Examples:** `Database architects use the PACELC theorem extension to classify whether a NoSQL store prioritizes lower latency or higher consistency during normal operations.` → Các kiến trúc sư cơ sở dữ liệu sử dụng phần mở rộng định lý PACELC để phân loại xem kho NoSQL ưu tiên độ trễ thấp hơn hay tính nhất quán cao hơn trong quá trình hoạt động bình thường.

**Liên kết tiếng Hàn:** `PACELC 정리 확장` (PACELC 定理 拡張) — phần mở rộng định lý PACELC.

---

## 10. read-your-writes consistency guarantee /riːd jʊər raɪts kənˈsɪstənsi ˈɡɛrənti/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ bảo đảm trải nghiệm khách hàng hoặc tân ngữ sau `provide`, `guarantee`, `enforce`, `satisfy`.

**Core meaning — English:** A client-centric consistency guarantee ensuring that any data update submitted by a specific user will immediately be visible to all subsequent read operations performed by that same user.

**Core meaning & mental image — Tiếng Việt:** Bảo đảm tính nhất quán "đọc lại những gì mình vừa viết"; quyền nhìn thấy ngay lập tức dữ liệu vừa cập nhật. Hãy hình dung bạn vừa đổi ảnh đại diện cá nhân trên mạng xã hội, bấm F5 làm mới trang và thấy ngay ảnh mới của mình thay vì bức ảnh cũ — đó là bảo đảm *read-your-writes consistency*.

**Grammar & collocations:** `provide read-your-writes consistency` — cung cấp tính nhất quán đọc-sau-khi-ghi; `enforce read-your-writes guarantees` — ép buộc bảo đảm đọc-sau-khi-ghi; `client session consistency model` — mô hình nhất quán phiên khách hàng.

**Register & nuance:** Mô hình nhất quán cực kỳ quan trọng đối với trải nghiệm người dùng trực tuyến (*UX*). Nếu thiếu bảo đảm này, người dùng cập nhật hồ sơ cá nhân xong sẽ thấy trang web vẫn hiển thị thông tin cũ, gây hoang mang và lầm tưởng lỗi hệ thống.

**Examples:** `Modern profile management microservices must enforce a read-your-writes consistency guarantee so users immediately see their saved edits.` → Các microservice quản lý hồ sơ hiện đại phải ép buộc bảo đảm tính nhất quán đọc-sau-khi-ghi để người dùng ngay lập tức nhìn thấy các chỉnh sửa đã lưu của họ.

**Liên kết tiếng Hàn:** `쓰기 자신 읽기 일관성 보장` (쓰기 自身 읽기 一貫性 保障) — bảo đảm tính nhất quán đọc chính những gì mình viết.

---

## 11. gossip protocol epidemic spread /ˈɡɑːsəp ˈproʊtəˌkɑːl ˈɛpɪdɛmɪk sprɛd/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ lan truyền trạng thái nút hoặc tân ngữ sau `implement`, `utilize`, `simulate`, `deploy`.

**Core meaning — English:** A peer-to-peer communication protocol inspired by viral disease epidemics where distributed nodes periodically exchange state information with randomly selected peers until the entire cluster achieves convergence.

**Core meaning & mental image — Tiếng Việt:** Giao thức lan truyền tin đồn (gossip protocol); cơ chế lan truyền dịch bệnh đồng bộ trạng thái. Hãy hình dung một đám đông trong phòng lớn: cứ mỗi phút, mỗi người lại thì thầm một tin tức mới cho ba người bạn ngẫu nhiên nghe thấy; chỉ sau vài phút ngắn ngủi, toàn bộ hàng nghìn người trong phòng đều nắm bắt chính xác thông tin đó mà không cần trung tâm phát loa.

**Grammar & collocations:** `implement a gossip protocol for cluster membership` — triển khai giao thức gossip cho việc quản lý thành viên cụm; `epidemic state propagation` — sự lan truyền trạng thái dịch bệnh; `gossip-based data dissemination` — sự phân phối dữ liệu dựa trên gossip.

**Register & nuance:** Thuật ngữ kinh điển trong kiến trúc phi tập trung (*decentralized architecture*) và cơ sở dữ liệu quy mô lớn (như Cassandra, Consul). Cực kỳ bền vững trước lỗi mạng cục bộ nhờ tính chất ngẫu nhiên.

**Examples:** `To track cluster membership and detect failing nodes without a centralized master server, the distributed database relies on a gossip protocol epidemic spread mechanism.` → Để theo dõi thành viên cụm và phát hiện các nút bị lỗi mà không cần máy chủ chủ tập trung, cơ sở dữ liệu phân tán dựa vào cơ chế lan truyền dịch bệnh của giao thức gossip.

**Liên kết tiếng Hàn:** `가십 프로토콜 전파` (gossip protocol 傳播) — sự lan truyền theo giao thức gossip (đồn đại/dịch bệnh).

---

## 12. last-write-wins clock resolution /læst raɪt wɪnz klɑːk ˌrɛzəˈluːʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ giải quyết xung đột ghi hoặc tân ngữ sau `implement`, `employ`, `utilize`, `bypass`.

**Core meaning — English:** A simple conflict resolution strategy in distributed stores where concurrent updates to the same data item are automatically resolved by comparing physical timestamps, retaining only the mutation with the latest timestamp.

**Core meaning & mental image — Tiếng Việt:** Cơ chế giải quyết xung đột theo nguyên tắc "lần ghi sau cùng chiến thắng" (LWW); quy tắc kẻ đến sau lấy hết. Hãy hình dung hai người cùng sửa một file văn bản: hệ thống đơn giản chỉ nhìn vào đồng hồ hệ thống xem ai bấm lưu sau cùng và vô tình vứt bỏ sạch sành sanh bản chỉnh sửa của người bấm lưu trước đó.

**Grammar & collocations:** `employ last-write-wins clock resolution` — sử dụng cơ chế phân giải đồng hồ ghi-sau-thắng-trước; `flaws of last-write-wins strategies` — những khiếm khuyết của chiến lược ghi-sau-thắng-trước; `timestamp-based conflict resolution` — giải quyết xung đột dựa trên dấu thời gian.

**Register & nuance:** Phương pháp giải quyết xung đột dễ cài đặt nhất nhưng tai hại nhất trong hệ thống phân tán vì lỗi lệch đồng hồ vật lý (*clock drift*) có thể khiến dữ liệu mới thực sự bị ghi đè bởi dữ liệu cũ hơn.

**Examples:** `While easy to implement, relying solely on last-write-wins clock resolution can lead to silent data loss when physical server clocks drift out of sync.` → Mặc dù dễ triển khai, việc chỉ dựa vào cơ chế phân giải đồng hồ ghi-sau-thắng-trước có thể dẫn đến việc mất dữ liệu âm thầm khi đồng hồ vật lý của máy chủ bị lệch nhau.

**Liên kết tiếng Hàn:** `마지막 쓰기 승리 시계 해결` (마지막 쓰기 勝利 時計 解決 / LWW) — giải quyết xung đột theo nguyên tắc lần ghi cuối thắng.

---

## 13. concurrent update merge function /kənˈkɜːrənt ˈʌpdeɪt mɜːrʒ ˈfʌŋkʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hợp nhất dữ liệu đồng thời hoặc tân ngữ sau `define`, `implement`, `execute`, `test`.

**Core meaning — English:** A deterministic programmatic function designed to combine conflicting concurrent modifications made to a distributed data object into a single consistent merged state without human intervention.

**Core meaning & mental image — Tiếng Việt:** Hàm hợp nhất cập nhật đồng thời; thuật toán tự động ghép nối xung đột dữ liệu. Hãy hình dung một chiếc máy trộn thông minh nhận vào hai bản vẽ khác nhau được vẽ cùng một thời điểm ở hai chi nhánh: hàm toán học bên trong tự động nhận diện phần tường nào được xây thêm ở cả hai bên và gộp chúng lại thành một bản vẽ hoàn chỉnh duy nhất.

**Grammar & collocations:** `define a custom concurrent update merge function` — định nghĩa một hàm hợp nhất cập nhật đồng thời tùy chỉnh; `deterministic merge operation` — thao tác hợp nhất mang tính tất định; `execute automated state merging` — thực thi việc hợp nhất trạng thái tự động.

**Register & nuance:** Thành phần cốt lõi của các kiểu dữ liệu CRDT và hệ thống điều khiển phiên bản phân tán (*distributed version control*). Yêu cầu tính chất toán học kết hợp (*associative*), giao hoán (*commutative*) và lũy đẳng (*idempotent*).

**Examples:** `The collaborative shopping cart service implements a concurrent update merge function that automatically combines item additions from offline user sessions.` → Dịch vụ giỏ hàng cộng tác triển khai một hàm hợp nhất cập nhật đồng thời để tự động kết hợp các thao tác thêm sản phẩm từ các phiên người dùng ngoại tuyến.

**Liên kết tiếng Hàn:** `동시 업데이트 병합 함수` (同時 update ਼合 函數) — hàm hợp nhất cập nhật đồng thời.

---

## 14. linearizability latency cost /lɪniəraɪzəˈbɪləti ˈleɪtənsi kɔːst/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ đánh đổi hiệu năng hoặc tân ngữ sau `pay`, `measure`, `minimize`, `analyze`.

**Core meaning — English:** The performance overhead and network round-trip penalty incurred by enforcing strict linearizability (external consistency) across distributed database replicas.

**Core meaning & mental image — Tiếng Việt:** Cái giá về độ trễ của tính tuyến tính hóa; chi phí hiệu năng khi bắt mọi nút đồng bộ tuyệt đối từng mili-giây. Hãy hình dung một đội lính diễu hành phải đợi người đi đầu bước xong mới được bước tiếp: tính tuyến tính hóa tuyệt đối đảm bảo mọi người xem cùng một góc nhìn hoàn hảo nhưng cái giá phải trả là đoàn quân đi cực kỳ chậm chạp và ì ạch.

**Grammar & collocations:** `pay the linearizability latency cost` — gánh chịu chi phí độ trễ của tính tuyến tính hóa; `minimize coordination overhead` — giảm thiểu chi phí điều phối; `strict consistency performance penalty` — hình phạt hiệu năng do tính nhất quán nghiêm ngặt.

**Register & nuance:** Định luật sắt đá trong kiến trúc cơ sở dữ liệu: tính nhất quán mạnh nhất (*linearizability*) luôn đánh đổi bằng độ trễ mạng cao nhất (*high latency*) do các nút phải liên tục bỏ phiếu đồng thuận qua mạng trước khi phản hồi.

**Examples:** `Financial ledger databases must willingly pay the linearizability latency cost to guarantee absolute correctness for every atomic account transaction.` → Cơ sở dữ liệu sổ cái tài chính phải sẵn sàng gánh chịu chi phí độ trễ của tính tuyến tính hóa để đảm bảo tính đúng đắn tuyệt đối cho mọi giao dịch tài khoản nguyên tử.

**Liên kết tiếng Hàn:** `선형화 가능성 지연 비용` (線形化 可能性 遲延 費用) — chi phí độ trễ do tính tuyến tính hóa (linearizability).

---

## 15. commutative update operations /kəmˈjuːtətɪv ˈʌpdeɪt ˌɑːpəˈreɪʃənz/

**Loại từ & vị trí trong câu:** `plural noun phrase`. Thường làm chủ ngữ tự do hoán đổi thứ tự hoặc tân ngữ sau `execute`, `design`, `verify`, `implement`.

**Core meaning — English:** Data mutation actions in distributed systems whose final mathematical outcome remains identical regardless of the chronological order in which the operations are executed across nodes.

**Core meaning & mental image — Tiếng Việt:** Các thao tác cập nhật giao hoán; phép toán không màng thứ tự trước sau. Hãy hình dung phép toán cộng dồn tiền vào tài khoản: dù bạn cộng 50 đô la trước rồi cộng 100 đô la sau, hay làm ngược lại thì số dư cuối cùng trong tài khoản vẫn hoàn toàn y hệt nhau.

**Grammar & collocations:** `design commutative update operations` — thiết kế các thao tác cập nhật giao hoán; `verify operation commutativity` — xác thực tính giao hoán của phép toán; `order-independent state updates` — các cập nhật trạng thái không phụ thuộc vào thứ tự.

**Register & nuance:** Đặc tính toán học tối quan trọng của các thuật toán CmRDT (Operation-based CRDT). Giúp hệ thống không cần bận tâm đến việc tin nhắn mạng bị trễ hay đến lệch thứ tự (*out-of-order delivery*).

**Examples:** `By formulating the inventory counter mutations as commutative update operations, the warehouse system safely processes out-of-order network messages without state drift.` → Bằng cách xây dựng các phép biến đổi bộ đếm kho hàng thành các thao tác cập nhật giao hoán, hệ thống kho bãi xử lý an toàn các thông điệp mạng đến lệch thứ tự mà không bị trôi dạt trạng thái.

**Liên kết tiếng Hàn:** `교환 법칙 성립 업데이트 연산` (交換 法則 成立 update 演算) — các phép toán cập nhật có tính chất giao hoán.

---

## 16. distributed state reconciliation /dɪˈstrɪbyʊtɪd steɪt ˌrɛkənsɪliˈeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ khôi phục đồng bộ hoặc tân ngữ sau `perform`, `automate`, `trigger`, `execute`.

**Core meaning — English:** The automated algorithmic process of comparing divergent data states across distributed database replicas following a network disruption and merging them back into a single unified truth.

**Core meaning & mental image — Tiếng Việt:** Sự hòa giải trạng thái phân tán; tiến trình đối chiếu và hàn gắn dữ liệu lệch pha giữa các máy chủ. Hãy hình dung hai kế toán trưởng làm việc ở hai vùng mất điện lâu ngày, mỗi người ghi sổ một phách riêng; khi có điện trở lại, một phần mềm thông minh tự động mở hai cuốn sổ ra so từng dòng, khớp lệnh và gộp thành một cuốn sổ cái duy nhất hợp pháp.

**Grammar & collocations:** `perform distributed state reconciliation` — thực hiện việc hòa giải trạng thái phân tán; `automate background state synchronization` — tự động hóa việc đồng bộ trạng thái ngầm; `replica state divergence resolution` — giải quyết sự phân kỳ trạng thái bản sao.

**Register & nuance:** Hoạt động nền tảng trong các hệ thống lưu trữ phân tán phi tập trung (như DynamoDB, Cassandra) khi khôi phục sau sự cố mất kết nối mạng (*anti-entropy repairs*).

**Examples:** `Following the healing of the network split, the background worker initiated distributed state reconciliation to merge conflicting partition branches.` → Sau khi sự phân tách mạng được hàn gắn, tiến trình nền đã khởi động việc hòa giải trạng thái phân tán nhằm hợp nhất các nhánh phân vùng xung đột.

**Liên kết tiếng Hàn:** `분산 상태 조정` (分散 狀態 調整) — sự điều chỉnh và hòa giải trạng thái phân tán.

---

## 17. Byzantine node tolerance limit /ˈbɪzəntiːn noʊd ˈtɑːlərəns ˈlɪmɪt/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ định đoạt giới hạn an ninh hoặc tân ngữ sau `calculate`, `exceed`, `respect`, `verify`.

**Core meaning — English:** The maximum mathematical threshold of malicious, compromised, or arbitrarily failing nodes that a distributed consensus network can sustain before losing its ability to reach correct agreement.

**Core meaning & mental image — Tiếng Việt:** Giới hạn chịu đựng nút Byzantine (phản bội/lỗi tùy ý); ngưỡng an toàn trước kẻ thù bên trong hệ thống. Hãy hình dung một hội đồng thành trì gồm 10 vị tướng: nếu có tối đa 3 kẻ phản bội ngầm âm mưu phá hoại báo cáo sai lệch, thành trì vẫn đứng vững; nhưng nếu số kẻ phản bội vượt ngưỡng 33%, toàn bộ hệ thống sụp đổ hoàn toàn.

**Grammar & collocations:** `exceed the Byzantine node tolerance limit` — vượt quá giới hạn chịu đựng nút Byzantine; `calculate consensus security thresholds` — tính toán các ngưỡng an ninh đồng thuận; `one-third Byzantine failure bound` — giới hạn lỗi Byzantine một phần ba.

**Register & nuance:** Khái niệm cốt lõi trong công nghệ blockchain và hệ thống phân tán không tin cậy (*trustless distributed systems*). Theo định lý tiêu chuẩn, các hệ thống BFT yêu cầu ít nhất $3f + 1$ tổng số nút để chịu đựng $f$ nút lỗi Byzantine.

**Examples:** `If malicious actors compromise more than one-third of the validator cluster, the network breaches its Byzantine node tolerance limit and suffers catastrophic consensus failure.` → Nếu các tác nhân độc hại xâm phạm hơn một phần ba cụm trình xác thực, mạng lưới sẽ vượt quá giới hạn chịu đựng nút Byzantine và gánh chịu thảm họa sụp đổ đồng thuận.

**Liên kết tiếng Hàn:** `비잔틴 노드 허용 한계` (Byzantine node 許容 限界) — giới hạn dung thứ nút Byzantine (lỗi ác ý).

---

## 18. network latency tail jitter /ˈnɛtwɜːrk ˈleɪtənsi teɪl ˈdʒɪtər/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ gây suy giảm hiệu năng hoặc tân ngữ sau `measure`, `mitigate`, `minimize`, `analyze`.

**Core meaning — English:** The unpredictable statistical variance and extreme high-percentile delays (such as p99 or p99.9 latencies) experienced by packet transmissions across distributed network infrastructures.

**Core meaning & mental image — Tiếng Việt:** Độ trễ đuôi và sự dao động thất thường của mạng; hiện tượng nghẽn cổ chai thỉnh thoảng giật cục. Hãy hình dung một xa lộ xe chạy rất mượt mà trong phần lớn thời gian, nhưng thỉnh thoảng lại xuất hiện vài chiếc xe tải chết máy giữa cầu khiến hàng nghìn xe phía sau phải kẹt cứng suốt nửa tiếng — đó chính là độ trễ đuôi tồi tệ nhất ($p99$).

**Grammar & collocations:** `mitigate network latency tail jitter` — giảm thiểu sự dao động độ trễ đuôi mạng; `measure p99 latency percentiles` — đo lường các phân vị độ trễ p99; `unpredictable tail latency spikes` — các đỉnh độ trễ đuôi khó lường.

**Register & nuance:** Kẻ thù số một của các hệ thống phân tán thời gian thực độ trễ thấp (*low-latency systems*). Các kỹ sư hệ thống thường phải tập trung tối ưu hóa các điểm nghẽn *p99.9* thay vì chỉ quan tâm đến độ trễ trung bình (*average latency*).

**Examples:** `High-frequency trading platforms implement aggressive request hedging to bypass network latency tail jitter and guarantee predictable response times.` → Các nền tảng giao dịch tần suất cao triển khai các chiến lược gửi yêu cầu song song hung hãn để vượt qua sự dao động độ trễ đuôi mạng và đảm bảo thời gian phản hồi có thể dự đoán trước.

**Liên kết tiếng Hàn:** `네트워크 지연 테일 지터` (network 遲延 tail jitter) — sự dao động đuôi độ trễ mạng (p99 latency jitter).

---

## 19. partition-resilient architecture /pɑːrˈtɪʃən rɪˈzɪliənt ˈɑːrkəˌtɛktʃər/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ đảm bảo tính sẵn sàng hệ thống hoặc tân ngữ sau `design`, `implement`, `deploy`, `architect`.

**Core meaning — English:** A distributed system design explicitly structured to continue operating, serving read/write requests, and gracefully recovering when unexpected network partitions sever communication links between nodes.

**Core meaning & mental image — Tiếng Việt:** Kiến trúc kiên cường trước phân vùng mạng; thiết kế hệ thống miễn nhiễm với sự cố đứt cáp chia cắt. Hãy hình dung một đàn kiến thợ được chia thành nhiều nhóm nhỏ khi một nhành cây gãy rơi xuống: dù bị cô lập hoàn toàn khỏi tổ chính, mỗi nhóm nhỏ vẫn tự xây dựng kho lương thực riêng và tiếp tục sinh tồn kiên cường chờ ngày nối lại nhành cây.

**Grammar & collocations:** `design a partition-resilient architecture` — thiết kế một kiến trúc kiên cường trước phân vùng; `build partition-tolerant microservices` — xây dựng các microservice chịu được phân vùng mạng; `resilient distributed system topology` — cấu trúc hệ thống phân tán kiên cường.

**Register & nuance:** Tiêu chuẩn vàng trong thiết kế hệ thống đám mây hiện đại (*cloud-native system design*). Đảm bảo hệ thống tuân thủ mô hình AP (Availability + Partition Tolerance) trong định luật CAP.

**Examples:** `By embracing decentralized peer-to-peer replication, the storage cluster achieved a partition-resilient architecture capable of surviving multi-datacenter network blackouts.` → Bằng cách áp dụng phương pháp sao chép ngang hàng phi tập trung, cụm lưu trữ đã đạt được kiến trúc kiên cường trước phân vùng mạng có khả năng sống sót qua các đợt cúp mạng đa trung tâm dữ liệu.

**Liên kết tiếng Hàn:** `파티션 복원력 있는 아키텍처` (partition 復元力 있는 architecture) — kiến trúc chịu được sự cố phân vùng mạng.

---

## 20. optimistic local replication /ˌɑːptɪˈmɪstɪk ˈloʊkəl ˌrɛplɪˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ tăng tốc độ ghi dữ liệu hoặc tân ngữ sau `enable`, `deploy`, `utilize`, `configure`.

**Core meaning — English:** A concurrency control strategy where a local database replica immediately accepts write mutations and confirms success to the client before asynchronously propagating updates to remote nodes.

**Core meaning & mental image — Tiếng Việt:** Sự sao chép cục bộ lạc quan; cơ chế ghi nhận trước hỏi sau. Hãy hình dung nhân viên quầy thu ngân nhận tiền của bạn và đưa biên lai ngay lập tức với niềm tin tuyệt đối rằng ngân hàng trung ương ở thủ đô sẽ không từ chối giao dịch đó, giúp bạn không phải đứng chờ dài cổ ở quầy.

**Grammar & collocations:** `enable optimistic local replication` — bật tính năng sao chép cục bộ lạc quan; `optimistic concurrency control` — điều khiển đồng thời lạc quan; `asynchronous replication pipeline` — luồng sao chép bất đồng bộ.

**Register & nuance:** Kỹ thuật tối ưu hóa độ trễ ghi (*write latency*) trong hệ thống phân tán địa lý rộng (*geo-distributed systems*). Đánh đổi bằng rủi ro xảy ra xung đột dữ liệu hoặc mất mát khi nút cục bộ sập trước khi kịp đồng bộ.

**Examples:** `To deliver instantaneous UI responses for mobile users, the backend utilizes optimistic local replication before syncing changes in the background.` → Để mang lại phản hồi giao diện tức thì cho người dùng di động, hệ thống backend tận dụng sự sao chép cục bộ lạc quan trước khi đồng bộ các thay đổi ở chế độ nền.

**Liên kết tiếng Hàn:** `낙관적 로컬 복제` (樂觀的 local 複製 / optimistic replication) — sao chép cục bộ theo phương thức lạc quan.

---

## 21. bounded staleness window /ˈbaʊndɪd ˈsteɪlnəs ˈwɪndoʊ/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ kiểm soát độ cũ dữ liệu hoặc tân ngữ sau `configure`, `define`, `enforce`, `guarantee`.

**Core meaning — English:** A relaxed consistency SLA guaranteeing that any read operation will return data that is stale by no more than a specified maximum time duration or maximum number of missed update versions.

**Core meaning & mental image — Tiếng Việt:** Khoảng thời gian dữ liệu cũ được giới hạn; khung trễ dữ liệu tối đa cho phép. Hãy hình dung một chiếc bảng điện tử hiển thị tỷ giá chứng khoán: quy định cho phép bảng điện tử có thể chậm hơn sàn giao dịch chính tối đa 5 giây hoặc tối đa 3 phiên cập nhật, quá thời hạn đó hệ thống bắt buộc phải khóa lại chờ cập nhật.

**Grammar & collocations:** `configure a bounded staleness window` — cấu hình khoảng thời gian giới hạn dữ liệu cũ; `enforce staleness limits` — ép buộc các giới hạn cũ; `bounded staleness consistency level` — mức độ nhất quán giới hạn độ cũ dữ liệu.

**Register & nuance:** Mô hình nhất quán có thể cấu hình được (*tunable consistency*) rất phổ biến trong các cơ sở dữ liệu toàn cầu hiện đại (như Azure Cosmos DB). Giúp cân bằng hoàn hảo giữa hiệu năng đọc nhanh và tính chính xác tương đối.

**Examples:** `Real-time analytics dashboards are configured with a ten-second bounded staleness window to balance high read throughput with acceptable data freshness.` → Các bảng điều khiển phân tích thời gian thực được cấu hình với khoảng thời gian dữ liệu cũ giới hạn mười giây để cân bằng thông lượng đọc cao với độ tươi mới của dữ liệu có thể chấp nhận được.

**Liên kết tiếng Hàn:** `바운디드 스테일니스 윈도우` (bounded staleness window) — cửa sổ giới hạn độ cũ/lỗi thời của dữ liệu.

---

## 22. peer-to-peer data synchronization /pɪər tuː pɪər ˈdeɪtə ˈsɪŋkrənəˌzeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ đồng bộ mạng phi tập trung hoặc tân ngữ sau `implement`, `facilitate`, `orchestrate`, `manage`.

**Core meaning — English:** The decentralized process whereby networked client nodes directly discover, exchange, and reconcile data sets among themselves without relying on a central coordinating master server.

**Core meaning & mental image — Tiếng Việt:** Đồng bộ dữ liệu ngang hàng (P2P); phương thức trao đổi dữ liệu trực tiếp giữa các máy chủ không cần tổng đài trung tâm. Hãy hình dung một nhóm bạn học ngồi vòng tròn tự truyền tay nhau những cuốn vở ghi chép để bổ sung thiếu sót cho nhau, không cần phải qua lớp trưởng hay thầy giáo thu bài chấm điểm.

**Grammar & collocations:** `orchestrate peer-to-peer data synchronization` — điều phối đồng bộ dữ liệu ngang hàng; `decentralized sync protocol` — giao thức đồng bộ phi tập trung; `direct peer data exchange` — trao đổi dữ liệu trực tiếp giữa các peer.

**Register & nuance:** Kiến trúc cốt lõi của mạng blockchain, hệ thống lưu trữ phi tập trung (IPFS) và các ứng dụng biên cộng tác. Khắc phục triệt để điểm nghẽn và rủi ro điểm đơn lẻ lỗi (*single point of failure*).

**Examples:** `The edge computing nodes utilize peer-to-peer data synchronization to maintain shared state even when disconnected from the central cloud infrastructure.` → Các nút điện toán biên tận dụng đồng bộ dữ liệu ngang hàng để duy trì trạng thái chia sẻ ngay cả khi ngắt kết nối khỏi cơ sở hạ tầng đám mây trung tâm.

**Liên kết tiếng Hàn:** `P2P 데이터 동기화` (peer-to-peer data 同期化) — đồng bộ hóa dữ liệu ngang hàng (P2P).

---

## 23. conflict resolution semantic /ˈkɑːnflɪkt ˌrɛzəˈluːʃən sɪˈmæntɪk/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ định nghĩa cách giải quyết xung đột hoặc tân ngữ sau `define`, `implement`, `specify`, `customize`.

**Core meaning — English:** The logical rules, programmatic semantics, and domain-specific policies applied by a distributed system to interpret and resolve conflicting concurrent data mutations.

**Core meaning & mental image — Tiếng Việt:** Ngữ nghĩa giải quyết xung đột; quy tắc logic nghiệp vụ để phân xử khi dữ liệu mâu thuẫn. Hãy hình dung một bộ luật trong trò chơi trực tuyến quy định rõ: nếu hai người cùng nhặt một bảo vật ở cùng một miligiây, hệ thống sẽ theo luật ưu tiên người có tốc độ ping thấp hơn hay người đến trước — đó chính là ngữ nghĩa giải quyết xung đột.

**Grammar & collocations:** `define custom conflict resolution semantics` — định nghĩa ngữ nghĩa giải quyết xung đột tùy chỉnh; `domain-specific merge rules` — các quy tắc hợp nhất theo miền nghiệp vụ; `conflict resolution policy` — chính sách giải quyết xung đột.

**Register & nuance:** Thuật ngữ thiết kế phần mềm quan trọng khi xây dựng các hệ thống phân tán đòi hỏi xử lý nghiệp vụ tinh tế thay vì chỉ dùng các quy tắc thô bạo như LWW (Last-Write-Wins).

**Examples:** `Financial application engineers must carefully define conflict resolution semantics to ensure business invariants are never violated during offline merges.` → Các kỹ sư ứng dụng tài chính phải định nghĩa cẩn thận ngữ nghĩa giải quyết xung đột để đảm bảo các bất biến nghiệp vụ không bao giờ bị vi phạm trong quá trình hợp nhất ngoại tuyến.

**Liên kết tiếng Hàn:** `충돌 해결 시맨틱` (衝突 解決 semantic) — ngữ nghĩa và quy tắc giải quyết xung đột.

---

## 24. CRDT tombstone garbage collection /siː ɑːr di ti ti ˈtuːmˌstoʊn ˈɡɑːrbɪdʒ kəˈlɛkʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ dọn dẹp dữ liệu xóa hoặc tân ngữ sau `implement`, `optimize`, `trigger`, `automate`.

**Core meaning — English:** The background memory management process in CRDT-based data stores that safely removes deletion markers (tombstones) once all cluster replicas have acknowledged the deletion event.

**Core meaning & mental image — Tiếng Việt:** Cơ chế dọn dẹp rác bia mộ (tombstone) trong CRDT; thuật toán thu gom bộ nhớ các mục đã xóa. Hãy hình dung khi bạn xóa một dòng chữ trong tệp chia sẻ, hệ thống cắm một tấm bia mộ nhỏ để báo cho các máy khác biết "dòng này đã bị xóa"; khi tất cả các máy đã nhận được tin, nhân viên dọn dẹp đến nhổ tấm bia mộ đi để giải phóng không gian ổ cứng.

**Grammar & collocations:** `implement CRDT tombstone garbage collection` — triển khai việc thu gom rác bia mộ CRDT; `purge expired deletion markers` — xóa sạch các đánh dấu xóa đã hết hạn; `tombstone accumulation mitigation` — giảm thiểu tình trạng tích tụ bia mộ.

**Register & nuance:** Thách thức kỹ thuật quan trọng trong việc vận hành các cấu trúc dữ liệu CRDT (*State-based CRDTs*). Nếu không có cơ chế dọn dẹp *tombstones*, dung lượng lưu trữ sẽ phình to mãi mãi do các mốc lịch sử xóa bị giữ lại.

**Examples:** `To prevent unbounded memory growth from deleted records, the distributed database runs a background CRDT tombstone garbage collection routine.` → Để ngăn chặn tình trạng tăng trưởng bộ nhớ vô hạn từ các bản ghi đã bị xóa, cơ sở dữ liệu phân tán chạy một quy trình dọn dẹp rác bia mộ CRDT ở chế độ nền.

**Liên kết tiếng Hàn:** `CRDT 묘비 가비지 컬렉션` (CRDT 墓碑 garbage collection) — thu gom rác bia mộ (tombstone) trong CRDT.

---

## 25. highly available distributed store /ˈhaɪli əˈveɪləbəl dɪˈstrɪbyʊtɪd stɔːr/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ cung cấp dịch vụ 24/7 hoặc tân ngữ sau `deploy`, `architect`, `scale`, `configure`.

**Core meaning — English:** A fault-tolerant database architecture engineered to guarantee continuous 24/7 read and write availability, surviving node failures, network splits, and hardware crashes without downtime.

**Core meaning & mental image — Tiếng Việt:** Kho lưu trữ phân tán có tính khả dụng cao; hệ thống cơ sở dữ liệu "không bao giờ chết". Hãy hình dung một hệ thống máy chủ đặt ở khắp năm châu: khi một trung tâm dữ liệu ở châu Âu bị sét đánh sập nguồn hoàn toàn, các máy chủ ở châu Mỹ và châu Á ngay lập tức gánh thay tải mà người dùng hoàn toàn không hề nhận ra sự cố gián đoạn nào.

**Grammar & collocations:** `deploy a highly available distributed store` — triển khai kho lưu trữ phân tán có tính khả dụng cao; `architect fault-tolerant data stores` — kiến trúc hóa các kho dữ liệu chịu lỗi; `high-availability cluster uptime` — thời gian hoạt động liên tục của cụm khả dụng cao.

**Register & nuance:** Mục tiêu tối thượng của các hệ thống quy mô lớn quy mô web (*web-scale systems*). Thường tuân thủ mô hình AP trong định luật CAP, chấp nhận tính nhất quán cuối cùng để đổi lấy sự sống còn 24/7.

**Examples:** `Global e-commerce platforms rely on a highly available distributed store to process millions of concurrent checkout requests without experiencing single points of failure.` → Các nền tảng thương mại điện tử toàn cầu phụ thuộc vào kho lưu trữ phân tán có tính khả dụng cao để xử lý hàng triệu yêu cầu thanh toán đồng thời mà không gặp phải bất kỳ điểm đơn lẻ nào gây lỗi.

**Liên kết tiếng Hàn:** `고가용성 분산 스토어` (高可用性 分散 store) — kho lưu trữ phân tán có tính khả dụng cao (High Availability).

---

## Review in context: Part 1 (items 1–12 bolded **headword**)

When designing modern geo-replicated architectures, system engineers must navigate the rigid boundaries dictated by **CAP theorem partition tolerance**. Because network links inevitably flake, databases often choose availability over strict consistency, relying instead on **eventual consistency convergence** to sync replicas asynchronously. To handle concurrent edits without central coordination, developers increasingly embed a **conflict-free replicated data type** directly into client state management. Under advanced theoretical models, this guarantees a **strong eventual consistency model**, ensuring all nodes reach identical states. When choosing data structures, architects must carefully weigh **state-based versus operation-based CRDT** trade-offs regarding network bandwidth and message delivery assumptions. To track causality across distributed nodes without synchronized physical clocks, systems utilize **vector clock causal ordering** to detect concurrent branch divergences. To protect client sessions from confusing state regressions, read replicas must strictly enforce **monotonic write consistency guarantee** protocols. When catastrophic network splits fracture the cluster into isolated fractions, automated failover scripts execute **distributed split-brain recovery** procedures to restore cluster unity. For normal day-to-day operations, architects apply the **PACELC theorem extension** to analyze whether the system prioritizes lower latency or higher consistency when partitions are absent. To guarantee that users immediately see their own saved modifications, user-facing microservices enforce a **read-your-writes consistency guarantee**. For cluster membership discovery without a master controller, databases leverage a **gossip protocol epidemic spread** mechanism to propagate node states organically. Finally, simplistic systems that employ **last-write-wins clock resolution** often suffer from silent data loss when physical server clocks drift out of synchronization.

**Bản dịch tiếng Việt:**

Khi thiết kế các kiến trúc sao chép địa lý hiện đại, các kỹ sư hệ thống phải điều hướng các ranh giới cứng nhắc được quy định bởi định lý CAP về khả năng chịu phân vùng mạng (**CAP theorem partition tolerance**). Vì các liên kết mạng chắc chắn sẽ có lúc chập chờn, cơ sở dữ liệu thường ưu tiên tính khả dụng hơn tính nhất quán nghiêm ngặt, thay vào đó dựa vào sự hội tụ nhất quán cuối cùng (**eventual consistency convergence**) để đồng bộ các bản sao một cách bất đồng bộ. Để xử lý các chỉnh sửa đồng thời mà không cần sự điều phối trung tâm, các nhà phát triển ngày càng nhúng một kiểu dữ liệu sao chép không xung đột (**conflict-free replicated data type**) trực tiếp vào quản lý trạng thái máy khách. Dưới các mô hình lý thuyết nâng cao, điều này đảm bảo mô hình nhất quán cuối cùng mạnh (**strong eventual consistency model**), đảm bảo tất cả các nút đều đạt được trạng thái y hệt nhau. Khi lựa chọn các cấu trúc dữ liệu, các kiến trúc sư phải cân nhắc kỹ lưỡng các đánh đổi giữa CRDT dựa trên trạng thái và CRDT dựa trên thao tác (**state-based versus operation-based CRDT**) liên quan đến băng thông mạng và các giả định về việc giao nhận tin nhắn. Để theo dõi quan hệ nhân quả trên các nút phân tán mà không cần đồng hồ vật lý đồng bộ, các hệ thống tận dụng thứ tự nhân quả bằng đồng hồ véc-tơ (**vector clock causal ordering**) để phát hiện sự phân kỳ nhánh đồng thời. Để bảo vệ các phiên khách hàng khỏi tình trạng xáo trộn thứ tự cập nhật, các nút xử lý phải ép buộc nghiêm ngặt các giao thức bảo đảm tính nhất quán ghi đơn điệu (**monotonic write consistency guarantee**). Khi các sự cố chia cắt mạng thảm khốc phân rã cụm thành các phân vùng cô lập, các tập lệnh chuyển đổi dự phòng tự động sẽ thực hiện các quy trình khôi phục phân rã phân tán (**distributed split-brain recovery**) nhằm khôi phục sự thống nhất của cụm. Đối với hoạt động thông thường hàng ngày, các kiến trúc sư áp dụng phần mở rộng định lý PACELC (**PACELC theorem extension**) để phân tích xem hệ thống ưu tiên độ trễ thấp hơn hay tính nhất quán cao hơn khi không có phân vùng. Để đảm bảo người dùng ngay lập tức nhìn thấy các chỉnh sửa đã lưu của chính họ, các microservice hướng người dùng ép buộc bảo đảm tính nhất quán đọc-sau-khi-ghi (**read-your-writes consistency guarantee**). Đối với việc khám phá thành viên cụm mà không cần bộ điều khiển chính, các cơ sở dữ liệu tận dụng cơ chế lan truyền dịch bệnh của giao thức gossip (**gossip protocol epidemic spread**) để truyền bá trạng thái nút một cách hữu cơ. Cuối cùng, các hệ thống đơn giản sử dụng giải quyết đồng hồ ghi-sau-thắng-trước (**last-write-wins clock resolution**) thường gánh chịu tình trạng mất dữ liệu âm thầm khi đồng hồ máy chủ vật lý bị lệch khỏi trạng thái đồng bộ.

---

## Review in context: Part 2 (items 13–25 bolded **headword**)

When conflicts arise from offline edits, CRDTs execute a deterministic **concurrent update merge function** to blend divergent states seamlessly. However, demanding absolute consistency requires paying a heavy **linearizability latency cost** due to constant inter-node network round-trips. To bypass ordering dependencies, distributed systems formulate mutations as **commutative update operations**, ensuring final states match regardless of message arrival sequences. Following network partitions, background maintenance tasks perform **distributed state reconciliation** to heal split branches. In trustless peer networks, developers must respect the strict **Byzantine node tolerance limit** to prevent malicious nodes from subverting consensus. Performance-critical applications must constantly monitor and mitigate **network latency tail jitter** to maintain predictable p99 response times. To survive infrastructure blackouts, engineers build a **partition-resilient architecture** capable of autonomous local operation. For mobile apps requiring instant UI feedback, developers enable **optimistic local replication** before syncing changes in the background. Analytical read replicas are often configured with a **bounded staleness window** to trade absolute freshness for massive read throughput. Decentralized edge nodes rely entirely on **peer-to-peer data synchronization** to maintain shared state without central servers. Business-critical workflows require meticulously defined **conflict resolution semantic** rules to prevent domain invariant violations during merges. To manage storage bloat caused by deletion markers, the database periodically runs a **CRDT tombstone garbage collection** routine. Ultimately, combining these advanced paradigms empowers engineers to deploy a **highly available distributed store** capable of continuous 24/7 operation at global web scale.

**Bản dịch tiếng Việt:**

Khi các xung đột phát sinh từ các chỉnh sửa ngoại tuyến, các CRDT thực hiện hàm hợp nhất cập nhật đồng thời (**concurrent update merge function**) mang tính tất định để hòa trộn các trạng thái phân kỳ một cách mượt mà. Tuy nhiên, việc đòi hỏi tính nhất quán tuyệt đối buộc phải trả giá bằng chi phí độ trễ tuyến tính hóa (**linearizability latency cost**) nặng nề do các vòng lặp mạng liên tục giữa các nút. Để bỏ qua sự phụ thuộc vào thứ tự, các hệ thống phân tán xây dựng các biến đổi thành các thao tác cập nhật giao hoán (**commutative update operations**), đảm bảo trạng thái cuối cùng khớp nhau bất kể trình tự đến của thông điệp. Sau các phân vùng mạng, các tác vụ bảo trì nền thực hiện việc hòa giải trạng thái phân tán (**distributed state reconciliation**) để hàn gắn các nhánh bị chia rẽ. Trong các mạng ngang hàng không tin cậy, các nhà phát triển phải tôn trọng giới hạn chịu đựng nút Byzantine (**Byzantine node tolerance limit**) nghiêm ngặt để ngăn chặn các nút độc hại lật đổ sự đồng thuận. Các ứng dụng đòi hỏi hiệu năng cao phải liên tục theo dõi và giảm thiểu sự dao động độ trễ đuôi mạng (**network latency tail jitter**) nhằm duy trì thời gian phản hồi p99 có thể dự đoán trước. Để sống sót qua các sự cố cúp điện cơ sở hạ tầng, các kỹ sư xây dựng kiến trúc kiên cường trước phân vùng mạng (**partition-resilient architecture**) có khả năng hoạt động cục bộ tự động. Đối với các ứng dụng di động đòi hỏi phản hồi giao diện tức thì, các nhà phát triển bật tính năng sao chép cục bộ lạc quan (**optimistic local replication**) trước khi đồng bộ các thay đổi ở chế độ nền. Các bản sao đọc phân tích thường được cấu hình với khoảng thời gian dữ liệu cũ giới hạn (**bounded staleness window**) nhằm đánh đổi độ tươi mới tuyệt đối để lấy thông lượng đọc khổng lồ. Các nút biên phi tập trung hoàn toàn dựa vào đồng bộ dữ liệu ngang hàng (**peer-to-peer data synchronization**) để duy trì trạng thái chia sẻ mà không cần máy chủ trung tâm. Các quy trình làm việc quan trọng đối với doanh nghiệp đòi hỏi các quy tắc ngữ nghĩa giải quyết xung đột (**conflict resolution semantic**) được định nghĩa tỉ mỉ để ngăn chặn việc vi phạm các bất biến miền trong quá trình hợp nhất. Để quản lý tình trạng phồng rễ bộ nhớ do các đánh dấu xóa gây ra, cơ sở dữ liệu định kỳ chạy quy trình thu gom rác bia mộ CRDT (**CRDT tombstone garbage collection**). Cuối cùng, việc kết hợp các mô hình tiên tiến này trao quyền cho các kỹ sư triển khai kho lưu trữ phân tán có tính khả dụng cao (**highly available distributed store**) có khả năng hoạt động liên tục 24/7 ở quy mô web toàn cầu.
