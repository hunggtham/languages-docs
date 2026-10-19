# C1 Vocabulary 02 — Distributed consensus protocols, ACID-to-BASE transitions, and horizontal sharding

Bài học C1 này đi sâu vào kiến trúc cơ sở dữ liệu phân tán quy mô lớn: các thuật toán đồng thuận như Raft, cam kết hai giai đoạn (two-phase commit), mức độ cô lập ảnh chụp (snapshot isolation), cơ chế ghi nhật ký trước khi ghi (write-ahead logging durability), chiến lược phân mảnh dữ liệu theo chiều ngang (horizontal sharding), và các dị thường nhất quán cuối cùng (eventual consistency anomalies) khi chuyển dịch từ mô hình ACID sang BASE.

---

## 1. Raft leader election /ræft ˈliːdər ɪˈlɛkʃən/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm chủ ngữ tái thiết lập quyền điều phối hoặc tân ngữ sau `trigger`, `conclude`, `participate in`.

**Core meaning — English:** The automated algorithmic consensus procedure within a Raft distributed cluster where candidate nodes campaign for votes to establish a single authoritative leader following a heartbeat failure.

**Core meaning & mental image — Tiếng Việt:** Cuộc bầu chọn nút lãnh đạo Raft; quy trình tự động bầu leader trong cụm Raft. Hãy hình dung một dàn nhạc giao hưởng đang biểu diễn mà nhạc trưởng đột ngột ngất xỉu: các nhạc công lập tức dừng lại trong 2 giây, một nhạc công giơ tay ứng cử, các nhạc công khác đồng thanh bỏ phiếu bầu anh ta làm nhạc trưởng mới để tiếp tục chỉ huy bản nhạc đồng bộ.

**Grammar & collocations:** `trigger a Raft leader election` — kích hoạt một cuộc bầu chọn nút lãnh đạo Raft; `Raft leader election term` — nhiệm kỳ bầu cử lãnh đạo Raft; `split votes during a Raft leader election` — chia rẽ số phiếu trong cuộc bầu cử lãnh đạo Raft.

**Register & nuance:** Trọng tâm của thuật toán đồng thuận Raft (được thiết kế để dễ hiểu hơn thuật toán Paxos phức tạp). Được triển khai trong etcd, Kubernetes, CockroachDB và Consul để điều phối trạng thái cụm.

**Examples:** `When network jitter delayed primary heartbeats beyond three hundred milliseconds, follower nodes immediately initiated a Raft leader election to designate a new master.` → Khi hiện tượng chập chờn mạng làm trễ các nhịp tim của máy chủ chính vượt quá ba trăm mili-giây, các nút theo sau đã khởi xướng ngay một cuộc bầu chọn nút lãnh đạo Raft để chỉ định một máy chủ chủ mới.

**Liên kết tiếng Hàn:** `래프트 리더 선출` (Raft leader 選出) — quy trình bầu chọn nút chỉ huy duy nhất trong cụm phân tán theo thuật toán đồng thuận Raft.

---

## 2. quorum consensus /ˈkwɔːrəm kənˈsɛnsəs/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ xác thực cam kết hoặc tân ngữ sau `achieve`, `require`, `maintain`.

**Core meaning — English:** A distributed voting agreement wherein an operation (read or write) is considered durable and authoritative only after receiving acknowledgment from a strict majority (typically $N/2 + 1$) of independent nodes.

**Core meaning & mental image — Tiếng Việt:** Đồng thuận túc số đa số; thỏa thuận đạt ngưỡng tối thiểu. Hãy hình dung một hội đồng quản trị gồm 5 thành viên: một nghị quyết quan trọng chỉ được coi là chính thức thông qua và có hiệu lực thi hành khi có ít nhất 3 thành viên giơ tay biểu quyết tán thành, ngăn chặn việc 1 hay 2 người tự ý ra quyết định riêng rẽ.

**Grammar & collocations:** `achieve quorum consensus` — đạt được sự đồng thuận túc số; `quorum consensus threshold` — ngưỡng đồng thuận túc số; `fail to reach quorum consensus` — không đạt được đồng thuận túc số đa số.

**Register & nuance:** Cơ chế cốt lõi để loại bỏ xung đột dữ liệu và ngăn chặn trạng thái phân rã mạng. Nếu một cụm bị mất liên lạc và không nhóm nào tập hợp đủ số lượng đa số quá bán, cụm đó sẽ từ chối ghi dữ liệu để bảo toàn tính toàn vẹn.

**Examples:** `In a five-node Cassandra ring, achieving strict quorum consensus requires three nodes to acknowledge the write operation before confirming success to the client application.` → Trong một vòng Cassandra gồm năm nút, việc đạt được sự đồng thuận túc số đa số nghiêm ngặt đòi hỏi ba nút phải xác nhận thao tác ghi trước khi xác nhận thành công cho ứng dụng máy khách.

**Liên kết tiếng Hàn:** `정족수 합의` (定足數 合意) — thỏa thuận đồng thuận dựa trên việc đạt đủ số lượng phiếu của đa số quá bán các nút trong cụm.

---

## 3. split-brain scenario /ˈsplɪt breɪn səˈnɛrioʊ/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `prevent`, `experience`, `recover from`, hoặc làm chủ ngữ dẫn đến thảm họa dữ liệu.

**Core meaning — English:** A catastrophic failure mode in a distributed system where a network partition isolates nodes into disconnected groups, leading two or more sub-clusters to believe they are the legitimate master and write divergent, conflicting state updates.

**Core meaning & mental image — Tiếng Việt:** Kịch bản phân liệt não bộ; tình trạng chia cắt cụm dữ liệu đối đầu. Hãy hình dung một vương quốc bị một trận động đất lớn nứt toác đôi bờ sông chia cắt hoàn toàn đường liên lạc: quan đại thần ở bờ bắc tưởng triều đình bờ nam đã diệt vong nên tự lập vua mới, trong khi quan ở bờ nam cũng lập một vua khác; cả hai triều đình cùng ban hành những sắc lệnh mâu thuẫn chan chát.

**Grammar & collocations:** `prevent a fatal split-brain scenario` — ngăn chặn kịch bản phân liệt não bộ chí mạng; `suffer from a split-brain scenario` — chịu đựng tình trạng chia cắt phân liệt não bộ; `split-brain scenario resolution` — giải quyết tình trạng phân liệt não bộ trong cụm.

**Register & nuance:** Cơn ác mộng tồi tệ nhất của các kỹ sư cơ sở dữ liệu phân tán. Nó dẫn đến việc ghi đè dữ liệu không thể hoàn tác (*silent data corruption*) nếu hệ thống không có cơ chế quorum nghiêm ngặt hoặc thiết bị phân xử chứng thực (*fencing token*).

**Examples:** `Engineers configured automated node fencing mechanisms to prevent a split-brain scenario during transient trans-Atlantic fiber cuts.` → Các kỹ sư đã cấu hình các cơ chế rào chắn nút tự động nhằm ngăn chặn một kịch bản phân liệt não bộ trong các đợt đứt cáp quang xuyên Đại Tây Dương tạm thời.

**Liên kết tiếng Hàn:** `스플릿 브레인 상황` / `망 분리 분열` (split-brain 狀況) — hiện tượng cụm phân tán bị chia cắt khiến nhiều nút cùng nhận mình là máy chủ chính gây xung đột dữ liệu trầm trọng.

---

## 4. heartbeat timeout /ˈhɑːrtbiːt ˈtaɪmˌaʊt/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ kích hoạt tái cấu trúc cụm hoặc tân ngữ sau `exceed`, `configure`, `adjust`.

**Core meaning — English:** The predetermined time threshold of silence from an active primary node after which secondary nodes assume the leader has crashed and initiate failover or election procedures.

**Core meaning & mental image — Tiếng Việt:** Thời gian chờ nhịp tim; ngưỡng phát hiện mất tín hiệu sống. Hãy hình dung một chiếc máy theo dõi điện tim trong phòng cấp cứu: nếu tiếng kêu "bíp... bíp..." định kỳ ngưng bặt quá 5 giây mà không có tín hiệu tim đập mới, còi báo động khẩn cấp sẽ lập tức rú lên để đội ngũ bác sĩ lao vào sốc điện cứu nạn.

**Grammar & collocations:** `exceed the heartbeat timeout` — vượt quá ngưỡng thời gian chờ nhịp tim; `tune the heartbeat timeout` — tinh chỉnh ngưỡng thời gian chờ nhịp tim; `trigger failover on heartbeat timeout` — kích hoạt chuyển đổi dự phòng khi hết thời gian chờ nhịp tim.

**Register & nuance:** Tham số định cỡ cực kỳ nhạy cảm. Nếu đặt thời gian quá ngắn, mạng chập chờn nhẹ sẽ gây ra các đợt bầu cử lãnh đạo liên miên (*election storms*); nếu đặt quá dài, hệ thống sẽ bị đóng băng dịch vụ quá lâu khi máy chủ chính thực sự bị sập.

**Examples:** `Tuning the heartbeat timeout from one hundred to eight hundred milliseconds stopped spurious leader re-elections caused by minor background garbage collection pauses.` → Việc tinh chỉnh thời gian chờ nhịp tim từ một trăm lên tám trăm mili-giây đã chấm dứt các đợt bầu lại lãnh đạo giả mạo do các khoảng dừng thu gom rác bộ nhớ nền nhỏ gây ra.

**Liên kết tiếng Hàn:** `하트비트 타임아웃` / `생존 신호 만료 시간` (生存 信號 滿了 時間) — khoảng thời gian tối đa chờ đợi tín hiệu duy trì sự sống từ nút lãnh đạo trước khi kích hoạt quy trình thay thế.

---

## 5. two-phase commit protocol /ˈtuː feɪz kəˈmɪt ˈproʊtəkɑːl/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường viết tắt là 2PC). Thường làm chủ ngữ điều phối giao dịch nguyên tử hoặc tân ngữ sau `execute`, `implement`.

**Core meaning — English:** An atomic commitment protocol across distributed databases that ensures all participating nodes either commit or abort a transaction collectively via a prepare phase followed by a commit phase.

**Core meaning & mental image — Tiếng Việt:** Giao thức cam kết hai giai đoạn. Hãy hình dung một lễ cưới truyền thống: linh mục hỏi chú rể "Con có đồng ý không?" (giai đoạn chuẩn bị 1) và chú rể trả lời "Con đồng ý", rồi linh mục hỏi cô dâu "Con có đồng ý không?" (giai đoạn chuẩn bị 2) và cô dâu trả lời "Con đồng ý"; chỉ khi cả hai cùng nói đồng ý, linh mục mới tuyên bố "Ta tuyên bố hai con chính thức là vợ chồng" (giai đoạn cam kết chốt hạ).

**Grammar & collocations:** `execute a two-phase commit protocol` — thực thi giao thức cam kết hai giai đoạn; `blocking nature of the two-phase commit protocol` — tính chất phong tỏa khóa tài nguyên của giao thức cam kết hai giai đoạn; `distributed transactions via two-phase commit protocol` — các giao dịch phân tán thông qua giao thức cam kết hai giai đoạn.

**Register & nuance:** Tiêu chuẩn cổ điển bảo đảm tính nguyên tử (Atomicity) xuyên suốt nhiều máy chủ độc lập (XA transactions). Điểm yếu chí mạng của nó là mang tính phong tỏa (*blocking*): nếu người điều phối (*coordinator*) bị sập ở giữa hai giai đoạn, tất cả các nút tham gia đều bị treo khóa tài nguyên.

**Examples:** `Although the two-phase commit protocol guarantees complete atomic consistency across banking shards, it introduces significant network latency during peak transaction volumes.` → Mặc dù giao thức cam kết hai giai đoạn bảo đảm tính nhất quán nguyên tử tuyệt đối xuyên suốt các phân mảnh ngân hàng, nó lại tạo ra độ trễ mạng đáng kể trong các đợt cao điểm giao dịch.

**Liên kết tiếng Hàn:** `2단계 커밋 프로토콜` (2段階 commit protocol) — giao thức đồng thuận hai pha (chuẩn bị và cam kết) bảo đảm tính nguyên tử cho giao dịch phân tán.

---

## 6. prepared state /prɪˈpɛrd steɪt/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `enter`, `persist in`, hoặc làm vị ngữ sau `remain in`.

**Core meaning — English:** An intermediate transactional phase where a database participant has successfully executed local operations, acquired locks, written redo logs to disk, and promised the coordinator it can commit indefinitely.

**Core meaning & mental image — Tiếng Việt:** Trạng thái sẵn sàng cam kết; trạng thái chờ lệnh chốt. Hãy hình dung một chiếc máy bay đã nạp đầy đủ nhiên liệu, hành khách đã thắt dây an toàn, cửa máy bay đã đóng chặt và phi cơ đang lăn bánh ra đầu đường băng: máy bay đã ở trạng thái sẵn sàng hoàn hảo, chỉ chờ một tiếng "cho phép cất cánh" duy nhất từ đài kiểm soát không lưu là vút bay lên bầu trời.

**Grammar & collocations:** `enter the prepared state` — bước vào trạng thái sẵn sàng cam kết; `remain locked in a prepared state` — bị khóa cứng trong trạng thái sẵn sàng cam kết; `persist transaction changes in the prepared state` — lưu giữ bền vững các thay đổi giao dịch ở trạng thái sẵn sàng.

**Register & nuance:** Giai đoạn chuyển tiếp nhạy cảm nhất trong giao dịch XA/2PC. Một khi nút con đã trả lời "Prepared", nó đánh mất quyền tự ý hủy bỏ giao dịch và buộc phải giữ nguyên mọi khóa tài nguyên trên các bản ghi cho đến khi nhận được chỉ thị cuối cùng.

**Examples:** `If the transaction coordinator crashes before broadcasting the final commit token, participant databases remain trapped in a prepared state with conflicting record locks held indefinitely.` → Nếu bộ điều phối giao dịch bị sập trước khi phát đi mã thông báo cam kết cuối cùng, các cơ sở dữ liệu tham gia sẽ bị mắc kẹt trong trạng thái sẵn sàng cam kết với các khóa bản ghi xung đột bị giữ vô thời hạn.

**Liên kết tiếng Hàn:** `준비 완료 상태` (準備 完了 狀態) — trạng thái nút con đã hoàn tất ghi nhật ký chuẩn bị và sẵn sàng cam kết theo lệnh điều phối viên.

---

## 7. snapshot isolation level /ˈsnæpˌʃɑːt ˌaɪsəˈleɪʃən ˈlɛvəl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `configure`, `support`, `operate under`, hoặc làm chủ ngữ kiểm soát đồng thời.

**Core meaning — English:** An advanced transaction isolation level where each transaction reads data from an immutable transactional snapshot of the database taken at its start timestamp, preventing dirty reads, non-repeatable reads, and phantom reads.

**Core meaning & mental image — Tiếng Việt:** Mức độ cô lập ảnh chụp; cơ chế đọc dữ liệu theo ảnh chụp thời gian. Hãy hình dung bạn bước vào thư viện và chụp một bức ảnh panorama toàn cảnh mọi giá sách vào đúng 9 giờ sáng: bạn có thể thong thả ngồi đọc và ghi chép dựa trên bức ảnh đó cả buổi sáng mà không hề bị làm phiền bởi những độc giả khác đang chạy đi chạy lại rút sách hay cất sách mới vào kệ.

**Grammar & collocations:** `enforce snapshot isolation level` — thực thi mức độ cô lập ảnh chụp; `trade-offs of snapshot isolation level` — sự đánh đổi của mức độ cô lập ảnh chụp; `prevent phantom reads with snapshot isolation level` — ngăn chặn hiện tượng đọc bóng ma bằng mức độ cô lập ảnh chụp.

**Register & nuance:** Mức độ cô lập rất phổ biến trong PostgreSQL, Oracle và Google Spanner. Ưu điểm lớn nhất là "người đọc không bao giờ chặn người ghi, và người ghi không bao giờ chặn người đọc" (*readers don't block writers, writers don't block readers*).

**Examples:** `Under the database's snapshot isolation level, analytical reporting queries run concurrently for hours against consistent point-in-time snapshots without locking live transactional tables.` → Dưới mức độ cô lập ảnh chụp của cơ sở dữ liệu, các truy vấn báo cáo phân tích có thể chạy đồng thời hàng giờ liền trên các ảnh chụp điểm thời gian nhất quán mà không hề khóa các bảng giao dịch đang hoạt động.

**Liên kết tiếng Hàn:** `스냅샷 격리 수준` (snapshot 隔離 水準) — cấp độ cô lập giao dịch bảo đảm các thao tác đọc luôn nhìn thấy ảnh chụp dữ liệu nhất quán tại thời điểm bắt đầu.

---

## 8. write skew anomaly /raɪt skjuː əˈnɑːməli/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ vi phạm tính toàn vẹn hoặc tân ngữ sau `manifest`, `induce`, `prevent`.

**Core meaning — English:** A concurrency race anomaly occurring under snapshot isolation where two concurrent transactions read overlapping datasets, satisfy a common integrity constraint independently, but make disjoint updates that together violate the constraint.

**Core meaning & mental image — Tiếng Việt:** Dị thường lệch ghi; lỗi xung đột ghi đè bất đối xứng. Hãy hình dung một bệnh viện quy định luôn phải có ít nhất 1 bác sĩ trực đêm: hai bác sĩ A và B cùng mở phần mềm lúc 11 giờ đêm thấy đối phương đang trực; bác sĩ A xin nghỉ trực và hệ thống duyệt vì thấy bác sĩ B vẫn còn; cùng lúc đó bác sĩ B cũng bấm xin nghỉ và hệ thống duyệt vì thấy bác sĩ A vẫn còn; kết quả là cả hai cùng về nhà và bệnh viện không còn bác sĩ nào trực.

**Grammar & collocations:** `prevent a write skew anomaly` — ngăn chặn dị thường lệch ghi; `manifest as a write skew anomaly` — biểu hiện dưới dạng dị thường lệch ghi; `vulnerable to write skew anomaly under snapshot isolation` — dễ bị dị thường lệch ghi dưới mức cô lập ảnh chụp.

**Register & nuance:** Khiếm khuyết tinh vi nhất của *snapshot isolation* khiến nó không đạt được mức *serializability* thực sự. Để khắc phục, lập trình viên buộc phải sử dụng các lệnh khóa tường minh như `SELECT FOR UPDATE` hoặc nâng cấp lên *serializable snapshot isolation* (SSI).

**Examples:** `The hospital scheduling application suffered a write skew anomaly when two doctors simultaneously checked on-call rosters and both successfully withdrew, leaving the emergency room completely unstaffed.` → Ứng dụng xếp lịch bệnh viện đã chịu một dị thường lệch ghi khi hai bác sĩ cùng lúc kiểm tra danh sách trực và cả hai đều xin rút thành công, khiến phòng cấp cứu hoàn toàn không có ai trực.

**Liên kết tiếng Hàn:** `쓰기 왜곡 현상` (쓰기 歪曲 現象) — lỗi bất thường xuất hiện trong mức cô lập ảnh chụp khi hai giao dịch đồng thời cập nhật các trường khác nhau dẫn đến vi phạm ràng buộc chung.

---

## 9. multi-version concurrency control /ˈmʌlti ˈvɜːrʒən kənˈkɜːrənsi kənˈtroʊl/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (thường viết tắt là MVCC). Thường làm chủ ngữ quản lý dữ liệu đồng thời hoặc tân ngữ sau `implement`, `architect`.

**Core meaning — English:** A concurrency database management method that maintains multiple physical versions of each record with creation and expiration timestamps, allowing concurrent transactions to access consistent historical data without read locks.

**Core meaning & mental image — Tiếng Việt:** Kiểm soát đồng thời đa phiên bản; cơ chế điều phối phiên bản dữ liệu song song. Hãy hình dung một cuốn sổ lưu bút điện tử: khi một người chỉnh sửa bài viết, hệ thống không xóa dòng chữ cũ đi mà tạo một bản sao mới đính kèm dấu thời gian phiên bản 2; những người đang đọc dở vẫn nhìn thấy phiên bản 1 nguyên vẹn cho đến khi bài viết mới được xuất bản.

**Grammar & collocations:** `implement multi-version concurrency control` — triển khai kiểm soát đồng thời đa phiên bản; `garbage collection in multi-version concurrency control` — thu gom rác phiên bản cũ trong MVCC; `multi-version concurrency control engine` — động cơ kiểm soát đồng thời đa phiên bản.

**Register & nuance:** Trái tim của hầu hết các hệ quản trị RDBMS hiện đại (Postgres, MySQL InnoDB, CockroachDB). Nhược điểm là hệ thống cần một tiến trình ngầm định kỳ (như `VACUUM` trong Postgres) để dọn dẹp các phiên bản dữ liệu cũ đã chết (*dead tuples*).

**Examples:** `By relying on multi-version concurrency control, PostgreSQL allows analytical read queries to scan massive tables without ever acquiring table-level locks that could delay high-frequency writes.` → Nhờ dựa vào cơ chế kiểm soát đồng thời đa phiên bản, PostgreSQL cho phép các truy vấn đọc phân tích quét các bảng khổng lồ mà không bao giờ cần chiếm giữ các khóa mức bảng vốn có thể làm chậm các thao tác ghi tần suất cao.

**Liên kết tiếng Hàn:** `다중 버전 동시성 제어` (多重 version 同時性 制御) — phương thức quản lý cơ sở dữ liệu duy trì nhiều phiên bản dữ liệu lịch sử để phục vụ truy cập đồng thời không cần khóa đọc.

---

## 10. write-ahead logging durability /raɪt əˈhɛd ˈlɔːɡɪŋ dʊrəˈbɪləti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (thường viết tắt là WAL durability). Thường làm chủ ngữ bảo vệ tính bền bỉ hoặc tân ngữ sau `guarantee`, `verify`, `rely on`.

**Core meaning — English:** The persistence property of a database engine guaranteeing that data modifications are synchronously appended and flushed to non-volatile disk logs before actual database table pages are updated in memory.

**Core meaning & mental image — Tiếng Việt:** Tính bền bỉ của việc ghi nhật ký trước khi ghi; cơ chế bảo đảm an toàn dữ liệu qua nhật ký WAL. Hãy hình dung một viên kế toán cẩn thận: trước khi cầm tẩy xóa và sửa lại con số trên cuốn sổ cái chính thức bằng da đắt tiền, người đó luôn dùng bút mực vĩnh cửu chép ngay dòng thay đổi vào cuốn sổ nháp nhật ký bỏ túi; nếu đột ngột mất điện hay hỏa hoạn, chỉ cần mở cuốn sổ nháp ra là khôi phục lại trọn vẹn toàn bộ sổ sách.

**Grammar & collocations:** `enforce write-ahead logging durability` — thực thi tính bền bỉ của việc ghi nhật ký trước khi ghi; `compromise write-ahead logging durability for write speed` — thỏa hiệp tính bền bỉ của WAL để đổi lấy tốc độ ghi; `verify write-ahead logging durability during crash recovery` — kiểm tra tính bền bỉ của WAL trong quá trình phục hồi sau sự cố sập nguồn.

**Register & nuance:** Nền móng bảo đảm chữ "D" (Durability) trong thuộc tính ACID. Nếu người quản trị cấu hình tắt chế độ ép ghi đĩa tức thời (`fsync = off`), tốc độ ghi có thể tăng gấp 10 lần nhưng tính bền vững WAL sẽ bị phá hủy hoàn toàn nếu máy chủ bị mất điện đột ngột.

**Examples:** `Strict write-ahead logging durability guarantees that even if power cuts out instantaneously across the data center, uncommitted transactions can be rolled back and committed state restored completely from disk logs.` → Tính bền bỉ của việc ghi nhật ký trước khi ghi nghiêm ngặt bảo đảm rằng ngay cả khi nguồn điện bị cắt đột ngột trên toàn trung tâm dữ liệu, các giao dịch chưa cam kết vẫn có thể được hoàn tác và trạng thái đã cam kết được khôi phục trọn vẹn từ các tệp nhật ký đĩa.

**Liên kết tiếng Hàn:** `로그 선행 기록 지속성` (log 先行 記錄 持續性) — đặc tính bền vững dữ liệu đạt được nhờ việc bắt buộc ghi nhật ký thao tác xuống đĩa trước khi cập nhật dữ liệu bộ nhớ.

---

## 11. log compaction strategy /lɔːɡ kəmˈpækʃən ˈstrætədʒi/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `configure`, `execute`, `optimize`, hoặc làm chủ ngữ kiểm soát dung lượng lưu trữ.

**Core meaning — English:** A maintenance routine in append-only storage engines (such as LSM-trees or Kafka) that systematically merges historical log segments and discards outdated or superseded record keys, retaining only the latest authoritative value.

**Core meaning & mental image — Tiếng Việt:** Chiến lược nén thu gọn nhật ký; phương pháp tinh giản dung lượng bản ghi. Hãy hình dung một cuốn sổ tay cập nhật giá vàng mỗi ngày một trang: sau 5 năm cuốn sổ dày cả mét, người quản lý mở sổ ra và chỉ chép lại mức giá chốt mới nhất của ngày hôm nay vào một cuốn sổ mỏng 10 trang, đốt bỏ các trang nháp biến động cũ để giải phóng giá sách.

**Grammar & collocations:** `configure an aggressive log compaction strategy` — cấu hình một chiến lược nén thu gọn nhật ký quyết liệt; `storage savings from a log compaction strategy` — lượng dung lượng lưu trữ tiết kiệm được từ chiến lược nén nhật ký; `tuning the log compaction strategy` — tinh chỉnh chiến lược nén thu gọn nhật ký.

**Register & nuance:** Tối quan trọng trong các kiến trúc lưu trữ dạng Append-Only như Cây hợp nhất cấu trúc nhật ký (*LSM-Trees* trong RocksDB, Cassandra) hoặc nhật ký sự kiện Kafka. Nếu không nén thu gọn, dung lượng đĩa sẽ cạn kiệt rất nhanh.

**Examples:** `The storage team tuned the log compaction strategy to run during off-peak hours, reclaiming terabytes of fragmented disk capacity while maintaining lightning-fast key lookups.` → Nhóm lưu trữ đã tinh chỉnh chiến lược nén thu gọn nhật ký để chạy vào những giờ thấp điểm, thu hồi hàng terabyte dung lượng đĩa bị phân mảnh trong khi vẫn duy trì tốc độ tra cứu khóa nhanh như chớp.

**Liên kết tiếng Hàn:** `로그 압축 전략` (log 壓縮 戰略) — chiến lược gộp và loại bỏ các bản ghi nhật ký trung gian lỗi thời để tiết kiệm bộ nhớ đĩa và tối ưu hóa tra cứu.

---

## 12. distributed deadlock /dɪˈstrɪbjətəd ˈdɛdˌlɑːk/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm chủ ngữ làm nghẽn hệ thống hoặc tân ngữ sau `detect`, `resolve`, `suffer from`.

**Core meaning — English:** A circular waiting condition across multiple independent database nodes where transaction A on node 1 waits for a resource locked by transaction B on node 2, while transaction B simultaneously waits for a resource held by transaction A.

**Core meaning & mental image — Tiếng Việt:** Tắc nghẽn bế tắc phân tán; kịch bản khóa chéo tài nguyên giữa các nút. Hãy hình dung hai chiếc ô tô đi vào một ngã tư hẹp từ hai hướng đối diện ở hai đầu cầu: tài xế xe 1 nói "Xe 2 phải lùi thì tôi mới tiến", trong khi tài xế xe 2 cũng hét lên "Xe 1 phải lùi thì tôi mới nhường đường"; cả hai xe cùng tắt máy bấm còi inh ỏi và không xe nào chịu nhúc nhích.

**Grammar & collocations:** `resolve a distributed deadlock` — giải quyết một vụ tắc nghẽn bế tắc phân tán; `detect a distributed deadlock using wait-for graphs` — phát hiện bế tắc phân tán bằng đồ thị chờ đợi; `abort transactions involved in a distributed deadlock` — hủy bỏ các giao dịch liên quan trong một vụ bế tắc phân tán.

**Register & nuance:** Khó giải quyết hơn deadlock trên máy chủ đơn lẻ rất nhiều vì không có một bộ nhớ chung để quét vòng lặp khóa. Hệ thống phân tán phải dựa vào thuật toán phát hiện chu trình trên đồ thị phân tán hoặc sử dụng cơ chế hết thời gian chờ (*lock timeout*) để chủ động khai tử một trong hai giao dịch.

**Examples:** `The distributed deadlock detector identified a circular dependency between the payment shard and inventory cluster, instantly aborting the newer transaction to break the freeze.` → Bộ phát hiện tắc nghẽn bế tắc phân tán đã nhận diện một quan hệ phụ thuộc vòng tròn giữa phân mảnh thanh toán và cụm kho hàng, ngay lập tức hủy bỏ giao dịch mới hơn để phá vỡ sự đóng băng hệ thống.

**Liên kết tiếng Hàn:** `분산 교착 상태` (分散 膠着 狀態) — tình trạng bế tắc vòng tròn giữa nhiều giao dịch trên các nút máy chủ phân tán khác nhau do cùng chờ tài nguyên bị khóa.

---

## 13. eventual consistency anomaly /ɪˈvɛntʃuəl kənˈsɪstənsi əˈnɑːməli/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ gây bối rối cho người dùng hoặc tân ngữ sau `encounter`, `mask`, `mitigate`.

**Core meaning — English:** A transient discrepancy or temporal contradiction in data states observed by a client application querying different replica nodes before background replication converges across the cluster.

**Core meaning & mental image — Tiếng Việt:** Dị thường nhất quán cuối cùng; sự sai lệch dữ liệu tạm thời giữa các bản sao. Hãy hình dung bạn vừa chuyển tiền cho bạn mình qua ứng dụng ngân hàng: bạn nhìn vào màn hình điện thoại của bạn thì thấy số dư đã bị trừ 500 nghìn, nhưng bạn mình mở điện thoại lên kiểm tra ngay lúc đó lại thấy tài khoản vẫn chưa nhận được đồng nào; phải mất 10 giây sau hệ thống đồng bộ xong thì số tiền mới hiện lên.

**Grammar & collocations:** `observe an eventual consistency anomaly` — quan sát thấy một dị thường nhất quán cuối cùng; `mask eventual consistency anomalies from end users` — che giấu các dị thường nhất quán cuối cùng trước mắt người dùng cuối; `trade off consistency to eliminate eventual consistency anomalies` — đánh đổi hiệu năng để loại trừ các dị thường nhất quán cuối cùng.

**Register & nuance:** Đặc trưng cố hữu của các hệ thống BASE và NoSQL (như DynamoDB hay Cassandra). Để có được tính sẵn sàng cao (*High Availability*) và độ trễ cực thấp, hệ thống chấp nhận để dữ liệu bị vênh nhau trong một khoảng thời gian ngắn trước khi đạt trạng thái hội tụ.

**Examples:** `Users experienced an annoying eventual consistency anomaly when refreshing the social feed, seeing their posted comment vanish temporarily before reappearing on secondary replica caches.` → Người dùng đã trải qua một dị thường nhất quán cuối cùng khó chịu khi tải lại bảng tin mạng xã hội, nhìn thấy bình luận vừa đăng của mình biến mất tạm thời trước khi xuất hiện trở lại trên bộ nhớ đệm bản sao phụ.

**Liên kết tiếng Hàn:** `최종 일관성 불일치 현상` (最終 一貫性 不一致 現象) — sự sai lệch dữ liệu tạm thời xảy ra giữa các bản sao trước khi hệ thống phân tán hoàn tất việc đồng bộ dữ liệu.

---

## 14. monotonic read consistency /ˌmɑːnəˈtɑːnɪk riːd kənˈsɪstənsi/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ bảo đảm trình tự thời gian hoặc tân ngữ sau `guarantee`, `violate`, `enforce`.

**Core meaning — English:** A distributed client-centric consistency guarantee ensuring that once a user observes a particular data version, any subsequent read requests will never return an older historical version of that data.

**Core meaning & mental image — Tiếng Việt:** Tính nhất quán đọc đơn điệu; cam kết không đọc giật lùi thời gian. Hãy hình dung bạn đang đọc một cuốn tiểu thuyết trinh thám: tính nhất quán đọc đơn điệu bảo đảm bạn luôn lật sang các trang tiếp theo về phía trước; không bao giờ có chuyện bạn vừa đọc xong chương 5, quay sang trang sau lại bị cuốn sách tự động nhảy giật lùi về đọc lại chương 2.

**Grammar & collocations:** `guarantee monotonic read consistency` — bảo đảm tính nhất quán đọc đơn điệu; `violate monotonic read consistency during failover` — vi phạm tính nhất quán đọc đơn điệu trong quá trình chuyển đổi dự phòng; `session-level monotonic read consistency` — tính nhất quán đọc đơn điệu ở cấp độ phiên làm việc.

**Register & nuance:** Mức độ bảo đảm nhất quán trải nghiệm người dùng rất quan trọng. Ngăn chặn hiện tượng người dùng vừa nhìn thấy email mới đến trong hộp thư, bấm F5 làm mới trang thì email đó lại biến mất vì yêu cầu đọc rơi trúng một máy chủ phụ bị chậm nhịp đồng bộ (*lagging replica*).

**Examples:** `By pinning user sessions to sticky gateway nodes, the cloud architect guaranteed monotonic read consistency, ensuring customers never saw their updated shipping addresses revert to old entries.` → Bằng cách ghim các phiên người dùng vào các nút cổng vào cố định, kiến trúc sư đám mây đã bảo đảm tính nhất quán đọc đơn điệu, giúp khách hàng không bao giờ thấy địa chỉ giao hàng vừa cập nhật của mình bị nhảy lùi về mục cũ.

**Liên kết tiếng Hàn:** `단조 읽기 일관성` (單調 읽기 一貫性) — cam kết bảo đảm người dùng một khi đã đọc được dữ liệu mới sẽ không bao giờ nhìn thấy phiên bản cũ hơn trong các lần đọc tiếp theo.

---

## 15. read-your-writes guarantee /riːd jʊər raɪts ˌɡærənˈtiː/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm tân ngữ sau `enforce`, `provide`, `violate`, hoặc làm chủ ngữ bảo vệ trải nghiệm chỉnh sửa.

**Core meaning — English:** A distributed consistency model guaranteeing that immediately after a client successfully completes an update, any subsequent read operation executed by that same client will always reflect the updated value.

**Core meaning & mental image — Tiếng Việt:** Cam kết đọc được chính cập nhật của mình; bảo đảm đọc lại bản ghi vừa sửa. Hãy hình dung bạn vừa đổi ảnh đại diện trên trang cá nhân của mình: ngay khi màn hình hiện thông báo "Lưu thành công", bạn nhìn vào góc trên trang web phải thấy ngay bức ảnh đại diện mới toanh của mình chứ không thể vẫn là bức ảnh cũ từ 5 năm trước.

**Grammar & collocations:** `enforce a read-your-writes guarantee` — thực thi cam kết đọc được chính cập nhật của mình; `lack of a read-your-writes guarantee` — sự thiếu vắng cam kết đọc lại dữ liệu vừa cập nhật; `provide read-your-writes guarantee via primary routing` — cung cấp bảo đảm đọc dữ liệu vừa cập nhật thông qua định tuyến máy chủ chính.

**Register & nuance:** Yếu tố then chốt tạo nên cảm giác phần mềm phản hồi tức thì và chính xác. Để làm được điều này mà không cần đợi toàn bộ cụm đồng bộ, các hệ thống thường tự động định tuyến các lệnh đọc của chính tác giả đó về trực tiếp máy chủ chính (*leader node*) trong vòng vài giây đầu.

**Examples:** `The blogging platform routes user profile lookups directly to the primary writer for sixty seconds, maintaining a seamless read-your-writes guarantee for authors editing their posts.` → Nền tảng viết blog định tuyến các thao tác tra cứu hồ sơ người dùng trực tiếp tới máy chủ ghi chính trong sáu mươi giây, duy trì cam kết đọc được chính cập nhật của mình một cách liền mạch cho các tác giả đang chỉnh sửa bài viết.

**Liên kết tiếng Hàn:** `자신의 쓰기 읽기 보장` (自身의 쓰기 읽기 保障) — cam kết người dùng luôn đọc được ngay những thay đổi hoặc dữ liệu do chính mình vừa cập nhật lên hệ thống.

---

## 16. horizontal sharding architecture /ˌhɔːrəˈzɑːntl ˈʃɑːrdɪŋ ˈɑːrkətɛktʃər/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm chủ ngữ mở rộng lưu trữ vô hạn hoặc tân ngữ sau `adopt`, `implement`, `scale via`.

**Core meaning — English:** A distributed database architectural pattern where massive tabular datasets are broken down into disjoint row subsets distributed across multiple independent database servers sharing no memory or disks.

**Core meaning & mental image — Tiếng Việt:** Kiến trúc phân mảnh theo chiều ngang; cấu trúc chia nhỏ bảng dữ liệu theo hàng. Hãy hình dung một cuốn danh bạ điện thoại toàn cầu dày một triệu trang: thay vì cố in tất cả vào một cuốn sách khổng lồ nặng một tấn không ai nhấc nổi, bạn chia cuốn sách ra thành 26 tập nhỏ từ tập A đến tập Z và giao cho 26 thủ thư độc lập ở 26 bàn khác nhau quản lý.

**Grammar & collocations:** `adopt a horizontal sharding architecture` — áp dụng kiến trúc phân mảnh theo chiều ngang; `scale out via horizontal sharding architecture` — mở rộng quy mô thông qua kiến trúc phân mảnh ngang; `operational overhead of horizontal sharding architecture` — chi phí vận hành phức tạp của kiến trúc phân mảnh ngang.

**Register & nuance:** Giải pháp tối hậu để vượt qua giới hạn mở rộng theo chiều dọc (*vertical scaling / scale-up*). Đòi hỏi tầng ứng dụng hoặc bộ định tuyến proxy (như Vitess hay Citus) phải xử lý định tuyến truy vấn phức tạp.

**Examples:** `Faced with exponential database write volumes, the payment gateway migrated from a single multi-terabyte monolithic server to a robust horizontal sharding architecture spanning twelve distributed nodes.` → Đối mặt với khối lượng ghi cơ sở dữ liệu tăng theo cấp số nhân, cổng thanh toán đã chuyển đổi từ một máy chủ nguyên khối đa terabyte duy nhất sang một kiến trúc phân mảnh theo chiều ngang vững chắc trải rộng trên mười hai nút phân tán.

**Liên kết tiếng Hàn:** `수평 샤딩 아키텍처` (水平 sharding architecture) — kiến trúc cơ sở dữ liệu chia nhỏ các hàng dữ liệu phân tán trên nhiều máy chủ độc lập để mở rộng quy mô.

---

## 17. partition key selection /pɑːrˈtɪʃən kiː sɪˈlɛkʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ quyết định hiệu năng cụm hoặc tân ngữ sau `optimize`, `revisit`, `audit`.

**Core meaning — English:** The critical strategic engineering choice of which column or attribute value is hashed to determine the specific shard on which a given database record will reside.

**Core meaning & mental image — Tiếng Việt:** Lựa chọn khóa phân vùng; chiến lược chọn thuộc tính băm định vị phân mảnh. Hãy hình dung việc phân loại thư tại bưu điện: việc chọn mã bưu điện 5 chữ số làm tiêu chí phân loại giúp chia đều thư vào các giỏ của từng nhân viên đưa thư, thay vì chọn tiêu chí theo "chữ cái đầu của tên người nhận" vốn có thể khiến giỏ chữ "N" hay "T" bị tràn ngập trong khi giỏ chữ "Q" hay "X" trống rỗng.

**Grammar & collocations:** `optimize partition key selection` — tối ưu hóa việc lựa chọn khóa phân vùng; `flawed partition key selection` — việc lựa chọn khóa phân vùng sai lầm; `partition key selection for uniform distribution` — lựa chọn khóa phân vùng để bảo đảm phân bổ đồng đều.

**Register & nuance:** Quyết định kiến trúc quan trọng bậc nhất trong cơ sở dữ liệu NoSQL/NewSQL. Nếu chọn sai thuộc tính (chẳng hạn chọn một trường có giá trị phân loại thấp hoặc phân bổ lệch), hệ thống sẽ lập tức sinh ra các nút bị nghẽn tải (*hot spots*).

**Examples:** `Careful partition key selection using combined tenant and user IDs ensured that transactional workloads remained uniformly balanced across all backend storage nodes.` → Việc lựa chọn khóa phân vùng cẩn thận sử dụng mã định danh khách hàng thuê bao kết hợp với mã người dùng đã bảo đảm rằng khối lượng công việc giao dịch luôn được cân bằng đồng đều trên mọi nút lưu trữ phía sau.

**Liên kết tiếng Hàn:** `파티션 키 선정` (partition key 選定) — quyết định chiến lược trong việc chọn thuộc tính dữ liệu dùng để phân phối các bản ghi vào các phân mảnh.

---

## 18. shard rebalancing /ʃɑːrd ˌriːˈbælənsɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ di chuyển khối lượng dữ liệu hoặc tân ngữ sau `trigger`, `orchestrate`, `automate`.

**Core meaning — English:** The online background migration and redistribution of data shards across a distributed cluster when new hardware nodes are added or decommissioned, maintaining balanced storage utilization.

**Core meaning & mental image — Tiếng Việt:** Tái cân bằng phân mảnh; phân bổ lại các mảnh dữ liệu khi mở rộng cụm. Hãy hình dung một kho hàng đang có 3 nhân viên bốc xếp làm việc hết công suất: khi người quản lý thuê thêm nhân viên thứ 4, cả 3 nhân viên cũ liền chuyển bớt một phần tư số thùng hàng sang cho nhân viên mới để chia đều tải mà không cần dừng hoạt động bốc dỡ hàng của kho.

**Grammar & collocations:** `automate shard rebalancing` — tự động hóa việc tái cân bằng phân mảnh; `shard rebalancing network traffic` — lưu lượng mạng phục vụ tái cân bằng phân mảnh; `throttle shard rebalancing to prevent slowdowns` — hãm tốc độ tái cân bằng phân mảnh để tránh làm chậm hệ thống.

**Register & nuance:** Tính năng cốt lõi của các cơ sở dữ liệu phân tán tự động mở rộng (Elasticsearch, CockroachDB, MongoDB). Cần được điều tiết lưu lượng cẩn thận để các luồng sao chép dữ liệu khổng lồ không làm nghẽn băng thông của các giao dịch trực tiếp.

**Examples:** `When three new storage instances were provisioned in the European zone, the cluster initiated automatic shard rebalancing to shift thirty percent of partitions without incurring application downtime.` → Khi ba phiên bản lưu trữ mới được cấp phát tại khu vực châu Âu, cụm máy chủ đã khởi xướng việc tái cân bằng phân mảnh tự động để dịch chuyển ba mươi phần trăm các phân vùng mà không gây gián đoạn dịch vụ ứng dụng.

**Liên kết tiếng Hàn:** `샤드 재조정` / `샤드 리밸런싱` (shard 再調整 / rebalancing) — quá trình tự động di chuyển và phân bổ lại các phân mảnh dữ liệu khi thay đổi quy mô cụm máy chủ.

---

## 19. consistent hashing ring /kənˈsɪstənt ˈhæʃɪŋ rɪŋ/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ phân bổ khóa hoặc tân ngữ sau `construct`, `traverse`, `map to`.

**Core meaning — English:** A specialized circular hashing topology where both database nodes and data keys are mapped onto a shared mathematical integer ring, minimizing key relocations to only $K/N$ items when nodes join or depart.

**Core meaning & mental image — Tiếng Việt:** Vòng băm nhất quán; cấu trúc vòng tròn phân bổ khóa tối ưu. Hãy hình dung một mặt đồng hồ tròn 360 độ: các máy chủ đặt tại các vị trí 12h, 3h, 6h và 9h; mỗi chiếc chìa khóa dữ liệu được ném lên vòng tròn và trôi thuận chiều kim đồng hồ tới máy chủ đầu tiên nó gặp; khi một máy chủ mới đặt thêm vào vị trí 4h, nó chỉ nhận lại một phần nhỏ chìa khóa từ máy chủ ở vị trí 6h mà không làm xáo trộn các vị trí khác.

**Grammar & collocations:** `map keys onto a consistent hashing ring` — ánh xạ các khóa lên vòng băm nhất quán; `virtual nodes on a consistent hashing ring` — các nút ảo trên vòng băm nhất quán; `traverse the consistent hashing ring` — duyệt qua vòng băm nhất quán.

**Register & nuance:** Thuật toán kinh điển (Karger et al., 1997) được Amazon ứng dụng trong hệ thống Dynamo. Giúp khắc phục nhược điểm chí mạng của phép chia lấy dư truyền thống ($key \pmod N$), vốn làm đảo lộn gần như 100% dữ liệu mỗi khi số lượng máy chủ $N$ thay đổi.

**Examples:** `By organizing partition routing via a consistent hashing ring with virtual nodes, the distributed cache avoided massive cache evictions whenever server nodes joined or crashed.` → Bằng cách tổ chức định tuyến phân vùng thông qua một vòng băm nhất quán với các nút ảo, bộ nhớ đệm phân tán đã tránh được các đợt xóa bộ nhớ đệm hàng loạt bất cứ khi nào các nút máy chủ gia nhập hoặc bị sập.

**Liên kết tiếng Hàn:** `안정 해시 링` / `컨시스턴트 해싱 링` (安定 hash ring) — cấu trúc liên kết băm hình vòng tròn giúp tối thiểu hóa việc di dời dữ liệu khi thêm hoặc bớt máy chủ.

---

## 20. hot spot partition /ˈhɑːt spɑːt pɑːrˈtɪʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ gây nghẽn phần cứng hoặc tân ngữ sau `alleviate`, `identify`, `suffer from`.

**Core meaning — English:** A specific database partition or storage node that receives an overwhelmingly disproportionate share of read or write traffic due to skewed access patterns or poorly chosen partition keys, degrading cluster throughput.

**Core meaning & mental image — Tiếng Việt:** Phân vùng điểm nóng; nút lưu trữ bị nghẽn tải cục bộ. Hãy hình dung một quầy bán vé xem hòa nhạc có 10 cửa bán vé chia theo tên ca sĩ: cửa bán vé của ca sĩ siêu sao có hàng vạn người chen lấn xô đẩy nghẹt thở đến mức sập rào chắn, trong khi 9 cửa bán vé còn lại của các ca sĩ ít tên tuổi thì nhân viên ngồi ngáp ngủ vắng tanh.

**Grammar & collocations:** `alleviate a severe hot spot partition` — giải tỏa một phân vùng điểm nóng nghiêm trọng; `suffer from a hot spot partition` — chịu cảnh phân vùng điểm nóng quá tải; `hot spot partition mitigation strategies` — các chiến lược giảm thiểu phân vùng điểm nóng.

**Register & nuance:** Vấn đề hiệu năng phổ biến nhất trong các hệ thống Big Data (DynamoDB, Bigtable). Xảy ra khi một người nổi tiếng có hàng chục triệu người theo dõi đăng bài, khiến mọi lượt đọc ghi đều dồn dập đổ vào đúng một phân mảnh duy nhất chứa ID của người đó.

**Examples:** `Celebrity live streams caused an acute hot spot partition on the user comments table, saturating disk I/O on node four while neighboring database servers remained virtually idle.` → Các buổi phát trực tiếp của người nổi tiếng đã gây ra một phân vùng điểm nóng gay gắt trên bảng bình luận người dùng, làm bão hòa I/O đĩa trên nút số bốn trong khi các máy chủ cơ sở dữ liệu lân cận hầu như vẫn hoàn toàn rảnh rỗi.

**Liên kết tiếng Hàn:** `핫스팟 파티션` / `병목 집중 파티션` (bottleneck 集中 partition) — phân vùng dữ liệu phải gánh chịu lưu lượng truy cập dồn dập bất thường gây nghẽn cổ chai cho toàn hệ thống.

---

## 21. cross-shard transaction /krɔːs ʃɑːrd trænˈzækʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `execute`, `minimize`, `coordinate`, hoặc làm chủ ngữ tiêu tốn tài nguyên.

**Core meaning — English:** A complex distributed database transaction that requires reading or updating data records located across two or more physically distinct database shards, necessitating distributed locking protocols.

**Core meaning & mental image — Tiếng Việt:** Giao dịch xuyên phân mảnh; giao dịch liên nút lưu trữ. Hãy hình dung việc chuyển tiền từ tài khoản của bạn mở tại chi nhánh ngân hàng Hà Nội sang tài khoản của bạn bè mở tại chi nhánh ngân hàng TP. Hồ Chí Minh: hai chi nhánh giữ hai cuốn sổ cái độc lập ở hai đầu đất nước, buộc phải gửi điện xác thực hai chiều qua lại để cùng trừ tiền bên này và cộng tiền bên kia một cách đồng bộ.

**Grammar & collocations:** `coordinate a cross-shard transaction` — điều phối một giao dịch xuyên phân mảnh; `overhead of a cross-shard transaction` — chi phí hao tổn tài nguyên của một giao dịch liên phân mảnh; `avoid cross-shard transactions via co-location` — tránh các giao dịch xuyên phân mảnh bằng cách đặt dữ liệu liên quan ở cùng một nút.

**Register & nuance:** Kẻ thù của hiệu năng mở rộng quy mô. Một giao dịch xuyên phân mảnh có thể chậm hơn từ 10 đến 100 lần so với giao dịch trên một phân mảnh đơn lẻ (*single-shard transaction*) do phải chịu độ trễ mạng và chi phí khóa phân tán 2PC.

**Examples:** `The e-commerce data model was deliberately structured to store customer profiles and their active shopping carts on identical physical shards, eliminating expensive cross-shard transactions during checkout.` → Mô hình dữ liệu thương mại điện tử đã được cố tình cấu trúc để lưu trữ hồ sơ khách hàng và giỏ hàng hoạt động của họ trên cùng các phân mảnh vật lý, loại bỏ các giao dịch xuyên phân mảnh tốn kém trong quá trình thanh toán.

**Liên kết tiếng Hàn:** `크로스 샤드 트랜잭션` (cross-shard transaction / 分散 shard 處理) — giao dịch phân tán đòi hỏi truy cập và cập nhật dữ liệu đồng thời trên nhiều phân mảnh khác nhau.

---

## 22. tombstone record cleanup /ˈtuːmstoʊn ˈrɛkərd ˈkliːnˌʌp/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ phục hồi không gian đĩa hoặc tân ngữ sau `schedule`, `trigger`, `monitor`.

**Core meaning — English:** The asynchronous background maintenance procedure in distributed databases that permanently purges deletion markers (tombstones) from storage after sufficient time has elapsed to guarantee deletion propagation across all lagging replicas.

**Core meaning & mental image — Tiếng Việt:** Dọn dẹp bản ghi bia mộ; quy trình xóa vĩnh viễn dấu mốc xóa dữ liệu. Hãy hình dung một khu nghĩa trang cổ: khi một ngôi mộ được chuyển hài cốt đi nơi khác, người ta cắm một tấm bia gỗ ghi "đã dời mộ" trong 30 ngày để người thân đến viếng không bị bối rối; sau khi hết hạn 30 ngày, người quản trang mới chính thức nhổ tấm bia gỗ đi và san phẳng bãi cỏ sạch sẽ.

**Grammar & collocations:** `schedule tombstone record cleanup` — lên lịch dọn dẹp bản ghi bia mộ; `premature tombstone record cleanup` — việc dọn dẹp bản ghi bia mộ quá sớm gây phục sinh dữ liệu lỗi thời; `tombstone record cleanup grace period` — thời gian ân hạn trước khi dọn dẹp bản ghi bia mộ.

**Register & nuance:** Khái niệm sống còn trong cơ sở dữ liệu phân tán (Cassandra, Couchbase). Nếu dọn bia mộ quá sớm khi một bản sao bị mất mạng vừa kết nối lại, bản sao đó sẽ hiểu nhầm bản ghi cũ của nó là dữ liệu mới và vô tình làm "hồi sinh" dữ liệu đã xóa (*zombie data*).

**Examples:** `Configuring a ten-day grace period before tombstone record cleanup ensures that temporarily disconnected mobile nodes do not accidentally revive deleted chat histories upon reconnecting.` → Việc cấu hình thời gian ân hạn mười ngày trước khi dọn dẹp bản ghi bia mộ bảo đảm rằng các nút di động tạm thời bị mất kết nối sẽ không vô tình làm sống lại các lịch sử trò chuyện đã xóa khi kết nối lại.

**Liên kết tiếng Hàn:** `툼스톤 레코드 정리` (tombstone record 整理) — quy trình xóa sạch vĩnh viễn các dấu hiệu đánh dấu xóa dữ liệu sau khi bảo đảm mọi bản sao đã cập nhật.

---

## 23. conflict-free replicated data type /ˈkɑːnflɪkt friː ˈrɛplɪkeɪtəd ˈdeɪtə taɪp/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường viết tắt là CRDT). Thường làm chủ ngữ tự động dung hòa trạng thái hoặc tân ngữ sau `implement`, `utilize`.

**Core meaning — English:** A specialized distributed data structure that can be replicated concurrently across multiple independent nodes without centralized coordination, mathematically guaranteeing that all replicas converge to an identical conflict-free state when merging updates.

**Core meaning & mental image — Tiếng Việt:** Kiểu dữ liệu nhân bản không xung đột; cấu trúc dữ liệu tự động dung hòa phân tán. Hãy hình dung tính năng soạn thảo văn bản cộng tác trên Google Docs: ba người bạn ở ba châu lục khác nhau cùng gõ bàn phím thêm chữ và xóa câu vào cùng một đoạn văn khi đang mất mạng; khi có mạng trở lại, tài liệu tự động hòa trộn các ký tự một cách mượt mà và thông minh mà không bao giờ hiện bảng thông báo lỗi xung đột dữ liệu.

**Grammar & collocations:** `implement a state-based conflict-free replicated data type` — triển khai kiểu dữ liệu nhân bản không xung đột dựa trên trạng thái (CvRDT); `convergent properties of a conflict-free replicated data type` — các đặc tính hội tụ của kiểu dữ liệu nhân bản không xung đột; `collaborative editing via conflict-free replicated data type` — chỉnh sửa cộng tác thông qua kiểu dữ liệu nhân bản không xung đột.

**Register & nuance:** Phát minh toán học xuất sắc của Marc Shapiro (2011). Cho phép các ứng dụng phân tán đạt được khả năng sẵn sàng cao cục bộ (Local-First software) mà không cần đến các thuật toán khóa phân tán hay cam kết hai giai đoạn nặng nề.

**Examples:** `The collaborative design canvas relies on a conflict-free replicated data type so multiple remote architects can modify 3D blueprints offline and achieve instant mathematical consistency upon reconnecting.` → Bảng vẽ thiết kế cộng tác dựa vào một kiểu dữ liệu nhân bản không xung đột để nhiều kiến trúc sư từ xa có thể chỉnh sửa bản thiết kế 3D ngoại tuyến và đạt được sự nhất quán toán học tức thì khi kết nối lại mạng.

**Liên kết tiếng Hàn:** `충돌 없는 복제 데이터 타입` (衝突 없는 複製 data type) — cấu trúc dữ liệu phân tán có khả năng tự động hợp nhất các bản sao mà không bao giờ xảy ra xung đột.

---

## 24. read repair mechanism /riːd rɪˈpɛr ˈmɛkəˌnɪzəm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ âm thầm vá dữ liệu hoặc tân ngữ sau `trigger`, `rely on`, `disable`.

**Core meaning — English:** An active data healing feature in distributed storage where, upon detecting divergent data versions across replicas during a client read query, the coordinator automatically overwrites outdated replicas with the freshest authoritative value.

**Core meaning & mental image — Tiếng Việt:** Cơ chế tự sửa chữa khi đọc; quy trình tự động vá dữ liệu lạc hậu khi tra cứu. Hãy hình dung bạn đến một văn phòng hành chính xin trích lục giấy tờ: nhân viên đối chiếu 3 cuốn sổ lưu trữ ở 3 kho và thấy cuốn sổ ở kho số 3 ghi thiếu ngày cấp; nhân viên liền lấy bút mực điền ngày cấp mới nhất từ cuốn sổ kho số 1 vào cuốn sổ kho số 3 ngay trong lúc bạn đang đứng chờ lấy giấy tờ.

**Grammar & collocations:** `trigger an asynchronous read repair mechanism` — kích hoạt cơ chế tự sửa chữa khi đọc bất đồng bộ; `overhead of the read repair mechanism` — chi phí tài nguyên của cơ chế tự sửa chữa khi đọc; `rely on the read repair mechanism for cluster convergence` — dựa vào cơ chế tự sửa chữa khi đọc để cụm máy chủ đạt trạng thái hội tụ.

**Register & nuance:** Cơ chế phục hồi dữ liệu thụ động nhưng cực kỳ hiệu quả trong Cassandra và Dynamo. Khác với các tiến trình quét toàn bộ đĩa nền, cơ chế này chỉ sửa chữa các bản ghi đang được truy vấn tích cực, giúp tối ưu hóa tài nguyên mạng.

**Examples:** `When an application queried user preferences, the cluster coordinator noticed node two held a stale timestamp and silently launched a read repair mechanism to sync the outdated replica in the background.` → Khi một ứng dụng truy vấn tùy chọn người dùng, bộ điều phối cụm nhận thấy nút số hai đang giữ một dấu thời gian cũ và đã âm thầm khởi chạy một cơ chế tự sửa chữa khi đọc để đồng bộ bản sao lỗi thời trong nền.

**Liên kết tiếng Hàn:** `읽기 복구 메커니즘` (읽기 復舊 mechanism) — quy trình tự động cập nhật và sửa chữa các bản sao dữ liệu lỗi thời ngay khi phát hiện sự bất nhất trong thao tác đọc.

---

## 25. anti-entropy protocol /ˌænti ˈɛntrəpi ˈproʊtəkɑːl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ đồng bộ toàn diện hoặc tân ngữ sau `execute`, `schedule`, `rely on`.

**Core meaning — English:** A comprehensive background synchronization protocol in distributed databases that continuously compares datasets across all replica nodes using cryptographic hash structures (such as Merkle trees) to resolve undetected silent divergences.

**Core meaning & mental image — Tiếng Việt:** Giao thức chống hỗn loạn phân tán; quy trình quét đồng bộ toàn diện triệt tiêu sai lệch. Hãy hình dung một vị tổng kiểm toán ngân hàng: hàng tuần, vị kiểm toán triệu tập toàn bộ các chi nhánh mang sổ phụ đến đối chiếu từng trang bằng mã niêm phong; bất kỳ con số nào bị chênh lệch hay sai sót nhỏ nhất phát sinh do nhân viên ngủ gật trong tuần đều bị phát hiện và uốn nắn lại cho hoàn hảo.

**Grammar & collocations:** `execute an anti-entropy protocol` — thực thi giao thức chống hỗn loạn; `Merkle-tree based anti-entropy protocol` — giao thức chống hỗn loạn dựa trên cây Merkle; `resource consumption of the anti-entropy protocol` — mức tiêu thụ tài nguyên của giao thức chống hỗn loạn.

**Register & nuance:** Tuyến phòng thủ cuối cùng chống lại sự mục rỗng dữ liệu (*silent entropy*) trong các hệ thống eventual consistency. Trong khi *read repair* chỉ sửa những dữ liệu được đọc tới, thì anti-entropy chủ động rà soát cả những bản ghi "ngủ quên" nhiều năm mà không ai đụng đến.

**Examples:** `The distributed key-value store executes a scheduled anti-entropy protocol every weekend, utilizing Merkle tree exchanges to detect and reconcile silent bit rot across cold storage disks.` → Kho lưu trữ khóa-giá trị phân tán thực thi một giao thức chống hỗn loạn theo lịch trình vào mỗi cuối tuần, sử dụng việc trao đổi cây Merkle để phát hiện và điều hòa hiện tượng mục nát bit âm thầm trên các đĩa lưu trữ lạnh.

**Liên kết tiếng Hàn:** `엔트로피 방지 프로토콜` / `반엔트로피 프로토콜` (反entropy protocol) — giao thức quét và đồng bộ dữ liệu toàn diện chạy ngầm định kỳ nhằm triệt tiêu các sai lệch giữa các bản sao trong cụm.

---

## Review in context (Part 1: Distributed Consensus and Atomic Commit Protocols)

Architecting enterprise databases for mission-critical reliability requires navigating the delicate trade-offs between distributed consensus and transactional durability. Within consensus clusters governed by algorithms like Raft, nodes continuously listen for periodic heartbeat signals from the cluster master. If network partitions or software crashes cause the master to exceed the designated **heartbeat timeout**, follower instances immediately assume the leader has failed and campaign for votes in a rapid **Raft leader election**. To maintain strict consistency and prevent unauthorized writes, the elected coordinator must secure **quorum consensus**, confirming that an absolute majority of active cluster members approve state modifications before acknowledging client requests. Without robust algorithmic quorums and node fencing protections, asymmetric network breaks can precipitate a disastrous **split-brain scenario**, wherein two isolated subsets of servers both believe they are the legitimate master and write mutually irreconcilable transactions to disk. When transactions span heterogeneous databases that cannot rely on a single consensus engine, architectures deploy the classic **two-phase commit protocol**. In this paradigm, coordinator nodes poll participant databases, requiring each node to secure locks and enter an immutable **prepared state** before issuing the final commit directive. To preserve high throughput on read-heavy workloads without table-level locking, modern storage engines enforce a **snapshot isolation level**, enabling long-running analytical queries to inspect a consistent point-in-time view. However, database developers must remain cautious, as snapshot isolation remains vulnerable to a subtle **write skew anomaly**, where concurrent transactions evaluate overlapping constraints independently and commit disjoint updates that collectively corrupt business rules. To support these isolation guarantees, storage engines implement robust **multi-version concurrency control**, storing versioned row representations alongside creation and expiration timestamps. At the physical storage layer, the fundamental bedrock of system safety rests on **write-ahead logging durability**, forcing the engine to flush mutation records to persistent disk logs before touching in-memory buffer pools. Over time, appending millions of log entries necessitates an automated **log compaction strategy**, which consolidates historical journal files and reclaims disk space by purging superseded keys. Finally, distributed transaction managers actively monitor lock dependencies to detect a **distributed deadlock**, automatically terminating younger conflicting operations to resolve circular multi-node dependencies.

**Bản dịch tiếng Việt:**

Việc thiết kế các cơ sở dữ liệu doanh nghiệp nhằm đạt độ tin cậy sống còn đòi hỏi phải chèo chống qua những sự đánh đổi tinh tế giữa sự đồng thuận phân tán và tính bền bỉ của giao dịch. Bên trong các cụm đồng thuận được chi phối bởi các thuật toán như Raft, các nút liên tục lắng nghe các tín hiệu nhịp tim định kỳ từ máy chủ chính của cụm. Nếu sự phân rã mạng hoặc sự cố sụp đổ phần mềm khiến máy chủ chính vượt quá ngưỡng thời gian chờ nhịp tim (**heartbeat timeout**) đã chỉ định, các phiên bản theo sau sẽ ngay lập tức cho rằng máy chủ lãnh đạo đã bị sập và vận động bỏ phiếu trong một cuộc bầu chọn nút lãnh đạo Raft (**Raft leader election**) chớp nhoáng. Để duy trì tính nhất quán nghiêm ngặt và ngăn chặn các thao tác ghi trái phép, người điều phối được bầu phải bảo đảm sự đồng thuận túc số (**quorum consensus**), xác nhận rằng đa số tuyệt đối các thành viên cụm đang hoạt động tán thành các sửa đổi trạng thái trước khi xác nhận các yêu cầu của máy khách. Nếu thiếu các túc số thuật toán vững chắc và các biện pháp bảo vệ rào chắn nút, các đợt đứt gãy mạng bất đối xứng có thể gây ra một kịch bản phân liệt não bộ (**split-brain scenario**) thảm khốc, nơi hai tập hợp máy chủ bị cô lập đều tin rằng mình là máy chủ chính hợp pháp và ghi các giao dịch mâu thuẫn không thể dung hòa xuống đĩa. Khi các giao dịch trải rộng trên các cơ sở dữ liệu không đồng nhất vốn không thể dựa vào một động cơ đồng thuận đơn lẻ, các kiến trúc sư triển khai giao thức cam kết hai giai đoạn (**two-phase commit protocol**) cổ điển. Trong mô hình này, các nút điều phối thăm dò các cơ sở dữ liệu tham gia, đòi hỏi mỗi nút phải chiếm giữ các khóa và bước vào một trạng thái sẵn sàng cam kết (**prepared state**) bất biến trước khi phát đi chỉ thị cam kết cuối cùng. Để duy trì thông lượng cao trên các khối lượng công việc đọc nặng mà không cần khóa cấp bảng, các động cơ lưu trữ hiện đại thực thi một mức độ cô lập ảnh chụp (**snapshot isolation level**), cho phép các truy vấn phân tích chạy lâu dài có thể kiểm tra một góc nhìn điểm thời gian nhất quán. Tuy nhiên, các nhà phát triển cơ sở dữ liệu phải luôn thận trọng, vì mức độ cô lập ảnh chụp vẫn dễ bị tổn thương trước một dị thường lệch ghi (**write skew anomaly**) tinh vi, nơi các giao dịch đồng thời đánh giá các ràng buộc chồng chéo một cách độc lập và cam kết các cập nhật rời rạc cùng nhau phá vỡ các quy tắc nghiệp vụ. Để hỗ trợ những cam kết cô lập này, các động cơ lưu trữ triển khai cơ chế kiểm soát đồng thời đa phiên bản (**multi-version concurrency control**) vững chắc, lưu trữ các biểu diễn hàng có phiên bản cùng với dấu thời gian tạo lập và hết hạn. Tại tầng lưu trữ vật lý, nền tảng cơ bản của sự an toàn hệ thống dựa trên tính bền bỉ của việc ghi nhật ký trước khi ghi (**write-ahead logging durability**), buộc động cơ phải đẩy các bản ghi biến đổi xuống các tệp nhật ký đĩa bền bỉ trước khi chạm vào các vùng đệm trong bộ nhớ. Theo thời gian, việc nối thêm hàng triệu mục nhật ký đòi hỏi một chiến lược nén thu gọn nhật ký (**log compaction strategy**) tự động, giúp hợp nhất các tệp nhật ký lịch sử và thu hồi dung lượng đĩa bằng cách thanh lọc các khóa lỗi thời. Cuối cùng, các bộ quản lý giao dịch phân tán tích cực giám sát các mối phụ thuộc khóa để phát hiện một vụ tắc nghẽn bế tắc phân tán (**distributed deadlock**), tự động chấm dứt các hoạt động xung đột mới hơn để phá vỡ các mối phụ thuộc vòng tròn đa nút.

---

## Review in context (Part 2: Horizontal Sharding, Eventual Consistency, and Convergence)

Scaling modern distributed data layers to planetary volume demands shifting from single-node ACID guarantees to elastic horizontal partitioning and BASE consistency semantics. When relational monoliths reach their physical hardware ceilings, database architects implement a **horizontal sharding architecture**, distributing database rows across an expansive fleet of commodity servers. The ultimate success of this topology hinges upon rigorous **partition key selection**, ensuring that writes distribute uniformly to prevent any single server from becoming an overloaded **hot spot partition**. Routing incoming queries seamlessly across dynamic server pools is typically achieved by mapping storage nodes onto a **consistent hashing ring**, which guarantees that adding or removing machines requires relocating only a tiny fraction of total partition keys. Whenever new computing capacity is provisioned, the orchestrator triggers automated **shard rebalancing**, streaming partition files across network boundaries without interrupting customer read availability. However, when complex queries demand data spanning multiple physical servers, the cluster must coordinate an expensive **cross-shard transaction**, which incurs multi-round network coordination and distributed locking overhead. In highly available NoSQL stores designed for global reach, applications embrace eventual consistency models; however, poorly architected clients frequently expose users to an **eventual consistency anomaly**, where readers observe temporarily outdated or contradictory data states. To deliver a dependable user experience, front-end gateways implement sticky routing to provide a **read-your-writes guarantee**, ensuring that content creators always see their immediate profile edits. Similarly, systems enforce **monotonic read consistency** across web sessions, preventing users from observing a newer database version only to see the application jump backward to a stale state upon subsequent refreshes. To manage entity deletions without instant distributed locks, databases insert deletion markers; after replica synchronization completes, the engine schedules a background **tombstone record cleanup** to permanently reclaim disk blocks. For collaborative real-time state sharing, developers increasingly embed a **conflict-free replicated data type**, allowing decentralized replicas to merge concurrent offline edits deterministically. During live reads, the coordinator actively invokes a **read repair mechanism** to patch lagging replicas on the fly. Finally, to eliminate latent divergence across rarely accessed partitions, the background scheduler runs a periodic **anti-entropy protocol**, utilizing cryptographic Merkle tree comparisons to ensure total mathematical convergence across the entire planetary cluster.

**Bản dịch tiếng Việt:**

Việc mở rộng quy mô các tầng dữ liệu phân tán hiện đại lên tầm vóc toàn cầu đòi hỏi sự chuyển dịch từ các cam kết ACID nút đơn sang việc phân vùng ngang co giãn và ngữ nghĩa nhất quán BASE. Khi các kiến trúc nguyên khối quan hệ chạm trần phần cứng vật lý, các kiến trúc sư cơ sở dữ liệu triển khai một kiến trúc phân mảnh theo chiều ngang (**horizontal sharding architecture**), phân bổ các hàng cơ sở dữ liệu xuyên suốt một đội tàu máy chủ thương phẩm rộng lớn. Sự thành công tối hậu của cấu trúc liên kết này phụ thuộc vào việc lựa chọn khóa phân vùng (**partition key selection**) khắt khe, bảo đảm các thao tác ghi phân bổ đồng đều để ngăn chặn bất kỳ máy chủ đơn lẻ nào trở thành một phân vùng điểm nóng (**hot spot partition**) bị quá tải. Việc định tuyến các truy vấn thu vào một cách liền mạch xuyên suốt các nhóm máy chủ động thường đạt được bằng cách ánh xạ các nút lưu trữ lên một vòng băm nhất quán (**consistent hashing ring**), cấu trúc này bảo đảm rằng việc thêm hoặc bớt máy móc chỉ đòi hỏi việc di dời một tỷ lệ nhỏ trong tổng số các khóa phân vùng. Bất cứ khi nào năng lực tính toán mới được cấp phát, bộ điều phối kích hoạt việc tái cân bằng phân mảnh (**shard rebalancing**) tự động, truyền phát các tệp phân vùng qua các ranh giới mạng mà không làm gián đoạn tính sẵn sàng đọc của khách hàng. Tuy nhiên, khi các truy vấn phức tạp đòi hỏi dữ liệu trải rộng trên nhiều máy chủ vật lý, cụm máy chủ phải điều phối một giao dịch xuyên phân mảnh (**cross-shard transaction**) tốn kém, gây ra chi phí khóa phân tán và điều phối mạng nhiều vòng. Trong các kho lưu trữ NoSQL có tính sẵn sàng cao được thiết kế cho quy mô toàn cầu, các ứng dụng đón nhận mô hình nhất quán cuối cùng; tuy nhiên, các máy khách có kiến trúc kém thường khiến người dùng phải đối mặt với một dị thường nhất quán cuối cùng (**eventual consistency anomaly**), nơi người đọc quan sát thấy các trạng thái dữ liệu tạm thời lỗi thời hoặc mâu thuẫn nhau. Để mang lại trải nghiệm người dùng đáng tin cậy, các cổng vào phía trước triển khai định tuyến ghim để cung cấp một cam kết đọc được chính cập nhật của mình (**read-your-writes guarantee**), bảo đảm những người sáng tạo nội dung luôn nhìn thấy các chỉnh sửa hồ sơ tức thì của chính họ. Tương tự, các hệ thống thực thi tính nhất quán đọc đơn điệu (**monotonic read consistency**) xuyên suốt các phiên web, ngăn chặn việc người dùng quan sát thấy phiên bản cơ sở dữ liệu mới hơn rồi lại thấy ứng dụng nhảy giật lùi về trạng thái cũ kỹ trong các lần làm mới tiếp theo. Để quản lý việc xóa thực thể mà không cần các khóa phân tán tức thời, cơ sở dữ liệu chèn các dấu mốc xóa; sau khi quá trình đồng bộ bản sao hoàn tất, động cơ lên lịch một quy trình dọn dẹp bản ghi bia mộ (**tombstone record cleanup**) chạy ngầm để thu hồi vĩnh viễn các khối đĩa. Đối với việc chia sẻ trạng thái thời gian thực cộng tác, các nhà phát triển ngày càng tích hợp một kiểu dữ liệu nhân bản không xung đột (**conflict-free replicated data type**), cho phép các bản sao phi tập trung hợp nhất các chỉnh sửa ngoại tuyến đồng thời một cách tất định. Trong các lần đọc trực tiếp, bộ điều phối chủ động kích hoạt một cơ chế tự sửa chữa khi đọc (**read repair mechanism**) để vá các bản sao bị chậm nhịp ngay tức thì. Cuối cùng, để loại bỏ các phân kỳ ngầm trên các phân vùng hiếm khi được truy cập, bộ lập lịch nền chạy một giao thức chống hỗn loạn (**anti-entropy protocol**) định kỳ, sử dụng các phép đối chiếu cây Merkle mật mã để bảo đảm sự hội tụ toán học tuyệt đối trên toàn bộ cụm máy chủ toàn cầu.
