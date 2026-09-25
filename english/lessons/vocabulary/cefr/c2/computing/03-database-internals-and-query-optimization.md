# C2 Vocabulary — Database internals and query optimization

This lesson follows a database request from logical optimization through physical execution, then into the storage and concurrency mechanisms that keep the system fast and correct under load.

Flow: **query optimizer → execution plan → cost model → cardinality estimation → selectivity → predicate pushdown → join ordering → nested-loop join → hash join → sort-merge join → index scan → covering index → materialized view → write-ahead log → multiversion concurrency control → snapshot isolation → deadlock detection → buffer pool → checkpointing → compaction**.

## 1. query optimizer /ˈkwɪri ˈɑptəˌmaɪzər/
**Part of speech:** noun
**Core meaning (English):** the database component that compares possible ways to execute a query and chooses a plan expected to use resources efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ tối ưu truy vấn; hình dung database có nhiều con đường để trả lời cùng một câu SQL và optimizer phải chọn đường có chi phí dự kiến thấp nhất.
**Grammar & collocations:** `cost-based query optimizer` — optimizer dựa trên chi phí; `optimizer decision` — quyết định của optimizer; `optimize a query` — tối ưu truy vấn.
**Examples:** `The query optimizer chose an index-based plan after estimating that only a small fraction of rows would match.` → Query optimizer chọn plan dùng index sau khi ước tính chỉ một phần nhỏ số row sẽ khớp.
**Liên kết tiếng Hàn:** `쿼리 최적화기` (kwori choejeokhwagi) — bộ tối ưu truy vấn.

## 2. execution plan /ˌɛksɪˈkjuːʃən plæn/
**Part of speech:** noun
**Core meaning (English):** a concrete sequence of database operations used to execute a query, including scans, joins, sorts, and aggregations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kế hoạch thực thi; hình dung SQL là yêu cầu ở mức cao, còn execution plan là chuỗi bước thật sự mà engine sẽ chạy để tạo kết quả.
**Grammar & collocations:** `query execution plan` — kế hoạch thực thi truy vấn; `inspect the plan` — xem plan; `plan node` — node trong plan.
**Examples:** `The execution plan revealed that the server was scanning the entire table before joining it with the customer data.` → Execution plan cho thấy server đang quét toàn bộ table trước khi join với dữ liệu khách hàng.
**Liên kết tiếng Hàn:** `실행 계획` (silhaeng gyehoek) — kế hoạch thực thi.

## 3. cost model /kɔst ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a mathematical approximation used by a database optimizer to compare the expected CPU, memory, and input/output work of alternative plans.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình chi phí; hình dung optimizer gắn một “giá dự kiến” cho từng plan dựa trên lượng CPU, memory và I/O cần dùng rồi so sánh chúng.
**Grammar & collocations:** `optimizer cost model` — cost model của optimizer; `estimated cost` — chi phí ước tính; `calibrate the cost model` — hiệu chỉnh mô hình chi phí.
**Examples:** `A poor cost model can prefer a plan that looks cheap mathematically but performs badly on the actual hardware.` → Một cost model kém có thể chọn plan trông rẻ về mặt tính toán nhưng chạy tệ trên phần cứng thực tế.
**Liên kết tiếng Hàn:** `비용 모델` (biyong model) — mô hình chi phí.

## 4. cardinality estimation /ˌkɑrdəˈnæləti ˌɛstəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of predicting how many rows will remain after a query operation such as a filter or join.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước lượng số lượng row; hình dung optimizer phải đoán sau mỗi filter hoặc join còn lại bao nhiêu row, vì một dự đoán sai có thể kéo cả plan đi sai hướng.
**Grammar & collocations:** `cardinality estimate` — ước lượng cardinality; `estimation error` — sai số ước lượng; `estimate join cardinality` — ước lượng số row sau join.
**Examples:** `Cardinality estimation was inaccurate because the two filtered columns were strongly correlated.` → Cardinality estimation không chính xác vì hai column được filter có tương quan mạnh với nhau.
**Liên kết tiếng Hàn:** `카디널리티 추정` (kadineolliti chujeong) — ước lượng cardinality.

## 5. selectivity /səˌlɛkˈtɪvəti/
**Part of speech:** noun
**Core meaning (English):** the proportion of rows that satisfy a condition, often used to judge whether filtering or an index will reduce the data substantially.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ chọn lọc; hình dung một điều kiện rất selective giống chiếc rây chỉ giữ lại rất ít row, còn điều kiện ít selective giữ lại gần như toàn bộ table.
**Grammar & collocations:** `highly selective predicate` — điều kiện lọc giữ lại rất ít row; `low selectivity` — độ chọn lọc thấp theo cách dùng phổ biến trong database; `estimate selectivity` — ước lượng độ chọn lọc.
**Examples:** `The optimizer favored the index because the predicate had enough selectivity to avoid reading most of the table.` → Optimizer ưu tiên index vì predicate đủ chọn lọc để tránh đọc phần lớn table.
**Liên kết tiếng Hàn:** `선택도` (seontaekdo) — độ chọn lọc.

## 6. predicate pushdown /ˈprɛdɪkət ˈpʊʃˌdaʊn/
**Part of speech:** noun
**Core meaning (English):** an optimization that moves filtering conditions closer to the data source so unnecessary rows are removed earlier.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đẩy điều kiện lọc xuống gần nguồn dữ liệu; hình dung thay vì mang một khối dữ liệu lớn qua nhiều bước rồi mới lọc, engine loại row không cần thiết ngay từ đầu.
**Grammar & collocations:** `push down a predicate` — đẩy predicate xuống; `storage-level filtering` — lọc ở tầng storage; `predicate-pushdown support` — khả năng hỗ trợ pushdown.
**Examples:** `Predicate pushdown reduced network traffic because the remote storage system returned only qualifying rows.` → Predicate pushdown giảm network traffic vì hệ thống lưu trữ từ xa chỉ trả về các row đạt điều kiện.
**Liên kết tiếng Hàn:** `조건절 푸시다운`, `프레디킷 푸시다운` — predicate pushdown.

## 7. join ordering /dʒɔɪn ˈɔrdərɪŋ/
**Part of speech:** noun
**Core meaning (English):** the choice of which tables or intermediate results to join first when a query contains multiple joins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thứ tự join; với nhiều table, cùng một kết quả logic nhưng join table nào trước có thể làm lượng dữ liệu trung gian nhỏ đi hoặc phình lên rất lớn.
**Grammar & collocations:** `join-order search` — quá trình tìm thứ tự join; `reorder joins` — đổi thứ tự join; `optimal join order` — thứ tự join tối ưu.
**Examples:** `Changing the join ordering allowed the engine to filter a small dimension table before touching the largest fact table.` → Thay đổi join ordering giúp engine lọc một dimension table nhỏ trước khi xử lý fact table lớn nhất.
**Liên kết tiếng Hàn:** `조인 순서` (join sunseo) — thứ tự join.

## 8. nested-loop join /ˈnɛstɪd luːp dʒɔɪn/
**Part of speech:** noun
**Core meaning (English):** a join algorithm that takes rows from one input and repeatedly searches the other input for matching rows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** join bằng vòng lặp lồng nhau; hình dung với mỗi row phía ngoài, engine đi tìm row phù hợp ở phía trong, đặc biệt hiệu quả khi phía ngoài nhỏ và phía trong có index tốt.
**Grammar & collocations:** `indexed nested-loop join` — nested-loop join tận dụng index; `outer input` — input phía ngoài; `inner lookup` — lần lookup ở phía trong.
**Examples:** `A nested-loop join worked well because the outer result contained only a few dozen rows and the inner key was indexed.` → Nested-loop join hoạt động tốt vì kết quả phía ngoài chỉ có vài chục row và key phía trong đã được index.
**Liên kết tiếng Hàn:** `중첩 루프 조인` (jungcheop rupeu join) — nested-loop join.

## 9. hash join /hæʃ dʒɔɪn/
**Part of speech:** noun
**Core meaning (English):** a join algorithm that builds a hash table from one input and probes it with rows from the other input to find matches.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** join dùng hash; hình dung engine dựng một bảng tra cứu nhanh từ một phía rồi dùng key của phía còn lại để dò match thay vì so từng cặp row.
**Grammar & collocations:** `build side` — phía dùng để dựng hash table; `probe side` — phía dùng để dò; `hash-table spill` — hash table tràn ra disk khi thiếu memory.
**Examples:** `The hash join became slower after the build side exceeded available memory and spilled to disk.` → Hash join chậm hơn sau khi phía build vượt quá memory khả dụng và phải spill xuống disk.
**Liên kết tiếng Hàn:** `해시 조인` (haesi join) — hash join.

## 10. sort-merge join /sɔrt mɜrdʒ dʒɔɪn/
**Part of speech:** noun
**Core meaning (English):** a join algorithm that orders both inputs by the join key and then advances through them together to match equal keys.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** join theo kiểu sort rồi merge; hình dung hai danh sách được xếp cùng thứ tự theo key, sau đó engine đi dọc hai bên song song để ghép các key giống nhau.
**Grammar & collocations:** `merge phase` — giai đoạn merge; `sorted input` — input đã được sort; `sort-merge strategy` — chiến lược sort-merge.
**Examples:** `The sort-merge join was attractive because both inputs were already ordered on the join key.` → Sort-merge join phù hợp vì cả hai input đã được sắp theo join key.
**Liên kết tiếng Hàn:** `정렬 병합 조인` (jeongnyeol byeonghap join) — sort-merge join.

## 11. index scan /ˈɪndɛks skæn/
**Part of speech:** noun
**Core meaning (English):** an access method that uses an index structure to locate qualifying records instead of reading every row in the underlying table.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quét qua index; hình dung thay vì lật từng trang của cả cuốn sách, database dùng mục lục để đi gần như trực tiếp tới vùng chứa row cần tìm.
**Grammar & collocations:** `index range scan` — scan một khoảng trong index; `index-only access` — truy cập chỉ qua index khi đủ dữ liệu; `choose an index scan` — chọn index scan.
**Examples:** `The index scan touched only the key range for the requested date instead of reading years of historical records.` → Index scan chỉ chạm vào khoảng key của ngày được yêu cầu thay vì đọc dữ liệu lịch sử nhiều năm.
**Liên kết tiếng Hàn:** `인덱스 스캔` (indekseu seukaen) — index scan.

## 12. covering index /ˈkʌvərɪŋ ˈɪndɛks/
**Part of speech:** noun
**Core meaning (English):** an index containing all columns needed by a query, allowing the database to answer it without fetching additional data from the base table.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** index “bao phủ” truy vấn; hình dung mọi dữ liệu query cần đã nằm ngay trong index nên engine không phải quay lại table để lấy thêm column.
**Grammar & collocations:** `create a covering index` — tạo covering index; `included column` — column được thêm để index bao phủ query; `avoid table lookups` — tránh lookup về table.
**Examples:** `A covering index removed thousands of table lookups from the reporting query.` → Covering index loại bỏ hàng nghìn lần lookup về table khỏi truy vấn báo cáo.
**Liên kết tiếng Hàn:** `커버링 인덱스` (keobeoring indekseu) — covering index.

## 13. materialized view /məˈtɪriəˌlaɪzd vjuː/
**Part of speech:** noun
**Core meaning (English):** a stored result of a query that can be refreshed and reused so expensive computation does not have to be repeated for every request.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** view được lưu vật lý; khác view thông thường chỉ giữ logic, materialized view giữ sẵn kết quả để đổi chi phí refresh lấy tốc độ đọc nhanh hơn.
**Grammar & collocations:** `refresh a materialized view` — làm mới materialized view; `incremental refresh` — refresh tăng dần; `stale view` — view có dữ liệu chưa cập nhật.
**Examples:** `The dashboard reads from a materialized view that is refreshed every five minutes.` → Dashboard đọc từ materialized view được refresh mỗi năm phút.
**Liên kết tiếng Hàn:** `구체화 뷰`, `머티리얼라이즈드 뷰` — materialized view.

## 14. write-ahead log /raɪt əˈhɛd lɔɡ/
**Part of speech:** noun
**Core meaning (English):** a durability mechanism in which a database records a change in a sequential log before the corresponding data page is permanently written.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** log ghi trước; hình dung database viết “cam kết thay đổi này phải xảy ra” vào log bền vững trước, nhờ đó có thể phục hồi sau crash ngay cả khi data page chưa kịp ghi xong.
**Grammar & collocations:** `WAL record` — record trong write-ahead log; `flush the log` — flush log xuống storage; `log replay` — phát lại log để phục hồi.
**Examples:** `After the crash, the server replayed the write-ahead log to recover committed changes that had not reached the data files.` → Sau crash, server replay write-ahead log để khôi phục các thay đổi đã commit nhưng chưa được ghi vào data file.
**Liên kết tiếng Hàn:** `선행 기록 로그` (seonhaeng girok logeu), thường gọi `WAL` — write-ahead log.

## 15. multiversion concurrency control /ˌmʌltiˈvɜrʒən kənˈkɜrənsi kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** a concurrency technique that keeps multiple versions of records so readers and writers can proceed with less direct blocking.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm soát đồng thời đa phiên bản; hình dung một row có các phiên bản theo thời gian, nên reader có thể thấy snapshot phù hợp trong khi writer tạo phiên bản mới thay vì bắt mọi bên chờ nhau.
**Grammar & collocations:** `MVCC implementation` — cơ chế triển khai MVCC; `row version` — phiên bản row; `visibility rule` — quy tắc xác định transaction thấy version nào.
**Examples:** `Multiversion concurrency control lets a long-running reader see a stable snapshot while other transactions continue updating rows.` → MVCC cho phép reader chạy lâu nhìn thấy snapshot ổn định trong khi transaction khác vẫn tiếp tục update row.
**Liên kết tiếng Hàn:** `다중 버전 동시성 제어` (dajung beojeon dongsiseong jeeo), `MVCC`.

## 16. snapshot isolation /ˈsnæpˌʃɑt ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** an isolation model in which a transaction reads from a consistent snapshot of committed data while concurrent transactions may continue making changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cô lập theo snapshot; hình dung transaction chụp một “ảnh” nhất quán của database để đọc xuyên suốt, dù bên ngoài ảnh đó dữ liệu vẫn đang thay đổi.
**Grammar & collocations:** `snapshot-isolation transaction` — transaction dùng snapshot isolation; `consistent snapshot` — snapshot nhất quán; `write conflict` — xung đột ghi.
**Examples:** `Snapshot isolation prevented the report from seeing a mixture of old and newly committed rows during its scan.` → Snapshot isolation ngăn báo cáo nhìn thấy hỗn hợp row cũ và row vừa commit trong lúc scan.
**Liên kết tiếng Hàn:** `스냅샷 격리` (seunaepsyat gyeongni) — snapshot isolation.

## 17. deadlock detection /ˈdɛdˌlɑk dɪˈtɛkʃən/
**Part of speech:** noun
**Core meaning (English):** the process of identifying a cycle in which transactions are waiting on one another so none can make progress.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phát hiện deadlock; hình dung transaction A giữ thứ B cần, còn B giữ thứ A cần, tạo thành vòng chờ mà database phải phát hiện và phá bằng cách hủy một transaction.
**Grammar & collocations:** `deadlock detector` — bộ phát hiện deadlock; `wait-for graph` — đồ thị quan hệ chờ; `abort a victim transaction` — hủy transaction được chọn làm victim.
**Examples:** `Deadlock detection found a cycle between two updates and rolled back one transaction so the other could continue.` → Deadlock detection tìm thấy vòng chờ giữa hai update và rollback một transaction để transaction còn lại tiếp tục.
**Liên kết tiếng Hàn:** `교착 상태 탐지` (gyochak sangtae tamji) — phát hiện deadlock.

## 18. buffer pool /ˈbʌfər puːl/
**Part of speech:** noun
**Core meaning (English):** an area of memory used by a database to cache data pages so frequently accessed information does not need to be read repeatedly from slower storage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng cache page trong memory; hình dung database giữ các page hay dùng trên một “bàn làm việc” nhanh thay vì mỗi lần lại đi lấy từ disk.
**Grammar & collocations:** `buffer-pool hit` — lần tìm thấy page ngay trong buffer pool; `evict a page` — đẩy page ra khỏi cache; `dirty page` — page đã thay đổi trong memory nhưng chưa flush.
**Examples:** `A larger buffer pool improved latency because the working set could remain in memory.` → Buffer pool lớn hơn cải thiện latency vì working set có thể ở lại trong memory.
**Liên kết tiếng Hàn:** `버퍼 풀` (beopeo pul) — buffer pool.

## 19. checkpointing /ˈtʃɛkˌpɔɪntɪŋ/
**Part of speech:** noun
**Core meaning (English):** a recovery process that periodically establishes a durable point from which the database can shorten the amount of log work needed after a crash.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo checkpoint phục hồi; hình dung database định kỳ đánh dấu một mốc đã đưa đủ trạng thái cần thiết xuống storage để sau crash không phải replay log từ quá xa trong quá khứ.
**Grammar & collocations:** `checkpoint interval` — khoảng thời gian giữa các checkpoint; `trigger a checkpoint` — kích hoạt checkpoint; `recovery checkpoint` — mốc phục hồi.
**Examples:** `More frequent checkpointing shortened restart recovery but increased background write activity.` → Checkpointing thường xuyên hơn rút ngắn recovery khi restart nhưng làm tăng hoạt động ghi nền.
**Liên kết tiếng Hàn:** `체크포인팅`, `체크포인트 수행` — checkpointing.

## 20. compaction /kəmˈpækʃən/
**Part of speech:** noun
**Core meaning (English):** a storage-maintenance process that rewrites and combines data structures to remove obsolete versions, reduce fragmentation, or improve future reads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quá trình nén/gom lại cấu trúc lưu trữ theo nghĩa database; hình dung hệ thống thu dọn nhiều mảnh file và version cũ thành ít cấu trúc sạch hơn để giảm rác và cải thiện đọc về sau.
**Grammar & collocations:** `background compaction` — compaction chạy nền; `compaction job` — tác vụ compaction; `write amplification` — lượng ghi vật lý tăng thêm do việc rewrite dữ liệu.
**Examples:** `Heavy compaction reclaimed obsolete data but temporarily consumed substantial disk bandwidth.` → Compaction nặng thu hồi dữ liệu lỗi thời nhưng tạm thời tiêu tốn đáng kể bandwidth của disk.
**Liên kết tiếng Hàn:** `컴팩션` (keompaeksyeon), `데이터 병합 정리` — compaction dữ liệu.

## Review in context

A slow analytical query first reaches the **query optimizer**, which compares more than one **execution plan** through a **cost model**. Its choices depend heavily on **cardinality estimation** and **selectivity**: if those estimates are wrong, even sensible rules such as **predicate pushdown** and careful **join ordering** can lead to poor physical choices. For a small outer input, the engine may favor a **nested-loop join**; for larger unsorted inputs, a **hash join** may be cheaper; and when both sides are already ordered, a **sort-merge join** can become attractive. Access may begin with an **index scan**, and a **covering index** can avoid extra table lookups, while a **materialized view** can bypass repeated computation entirely. Below the query layer, durability depends on the **write-ahead log**, and **multiversion concurrency control** can support **snapshot isolation** so readers see a consistent database state while writers continue. When locking still creates a cycle, **deadlock detection** breaks it. Frequently used pages remain in the **buffer pool**, periodic **checkpointing** limits crash-recovery work, and background **compaction** rewrites fragmented or obsolete storage so future reads remain efficient.

**Bản dịch:** Một truy vấn phân tích chậm trước hết đi tới **query optimizer**, nơi so sánh nhiều **execution plan** thông qua **cost model**. Các lựa chọn phụ thuộc rất nhiều vào **cardinality estimation** và **selectivity**; nếu các ước lượng này sai, ngay cả những kỹ thuật hợp lý như **predicate pushdown** và **join ordering** cẩn thận cũng có thể dẫn tới lựa chọn vật lý kém. Với input phía ngoài nhỏ, engine có thể ưu tiên **nested-loop join**; với input lớn chưa được sắp xếp, **hash join** có thể rẻ hơn; còn khi cả hai phía đã có thứ tự, **sort-merge join** có thể phù hợp. Việc truy cập có thể bắt đầu bằng **index scan**, và **covering index** có thể tránh lookup thêm về table, trong khi **materialized view** có thể loại bỏ hẳn việc tính toán lặp lại. Bên dưới tầng query, độ bền dữ liệu dựa vào **write-ahead log**, còn **multiversion concurrency control** có thể hỗ trợ **snapshot isolation** để reader thấy trạng thái database nhất quán trong khi writer vẫn tiếp tục. Khi locking vẫn tạo thành vòng chờ, **deadlock detection** sẽ phá vòng đó. Các page dùng thường xuyên được giữ trong **buffer pool**, **checkpointing** định kỳ giới hạn lượng công việc khi phục hồi sau crash, và **compaction** chạy nền viết lại storage bị phân mảnh hoặc chứa dữ liệu lỗi thời để các lần đọc sau vẫn hiệu quả.
