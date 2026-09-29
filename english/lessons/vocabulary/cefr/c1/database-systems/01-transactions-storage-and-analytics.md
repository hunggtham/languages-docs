# C1 Vocabulary 01 — Transactions, storage, and analytics

Nhóm từ này mô tả cách cơ sở dữ liệu bảo đảm giao dịch, thay đổi schema và phục vụ cả vận hành lẫn phân tích.

## 1. denormalization /diːˌnɔrmələˈzeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun` — việc cố ý lặp một phần dữ liệu để giảm số phép nối và tăng tốc đọc.

**Core meaning — English:** The deliberate duplication of some data to reduce joins and improve read performance.

**Core meaning & mental image — Tiếng Việt:** Chép một thông tin sang vài bảng để người đọc không phải đi qua nhiều cửa, nhưng phải giữ các bản sao đồng bộ.

**Grammar & collocations:** `selective denormalization`, `denormalization strategy`, `denormalize a schema`.

**Register & nuance:** Denormalization là đánh đổi tốc độ đọc với chi phí cập nhật, dung lượng và nguy cơ không nhất quán.

**Example:** `Denormalization improved the dashboard’s response time.` → Phi chuẩn hóa cải thiện thời gian phản hồi của bảng điều khiển.

**Liên kết tiếng Hàn:** `반정규화` — phi chuẩn hóa.

## 2. transaction isolation /trænˈzækʃən ˌaɪsəˈleɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — mức độ một giao dịch được tách khỏi các giao dịch đồng thời.

**Core meaning — English:** The degree to which one transaction is separated from concurrent transactions.

**Core meaning & mental image — Tiếng Việt:** Những người cùng sửa sổ sách có thể thấy thay đổi của nhau sớm đến mức nào mà không làm hỏng kết quả.

**Grammar & collocations:** `transaction-isolation level`, `raise isolation`, `isolation anomaly`.

**Register & nuance:** Mức cô lập cao giảm lỗi đọc nhưng có thể tăng khóa, xung đột và độ trễ.

**Example:** `The service raised transaction isolation for financial transfers.` → Dịch vụ tăng mức cô lập giao dịch cho chuyển tiền.

**Liên kết tiếng Hàn:** `트랜잭션 격리` — cô lập giao dịch.

## 3. atomicity /ˌætəˈmɪsəti/

**Loại từ & vị trí trong câu:** `uncountable noun` — tính chất toàn bộ các bước của giao dịch cùng thành công hoặc cùng được hoàn tác.

**Core meaning — English:** The property that all steps of a transaction succeed together or are all rolled back.

**Core meaning & mental image — Tiếng Việt:** Chuyển tiền và trừ tiền là một gói; không để một nửa giao dịch sống sót.

**Grammar & collocations:** `transaction atomicity`, `preserve atomicity`, `atomic operation`.

**Register & nuance:** Atomicity bảo vệ tính toàn vẹn của giao dịch, không tự bảo đảm các giao dịch khác nhìn thấy kết quả ngay.

**Example:** `Atomicity prevented a partial order from being recorded.` → Tính nguyên tử ngăn một đơn hàng nửa chừng được ghi nhận.

**Liên kết tiếng Hàn:** `원자성` — tính nguyên tử.

## 4. durability /ˌdjʊrəˈbɪləti/

**Loại từ & vị trí trong câu:** `uncountable noun` — tính chất dữ liệu đã giao dịch thành công vẫn tồn tại sau sự cố hoặc khởi động lại.

**Core meaning — English:** The property that committed data survives failures or system restarts.

**Core meaning & mental image — Tiếng Việt:** Khi đèn tắt và máy khởi động lại, giao dịch đã xác nhận vẫn nằm trong sổ.

**Grammar & collocations:** `transaction durability`, `durability guarantee`, `durable write`.

**Register & nuance:** Durability phụ thuộc lưu trữ, nhật ký, bản sao và thời điểm hệ thống xác nhận hoàn tất.

**Example:** `The storage tier offered durability across multiple zones.` → Tầng lưu trữ cung cấp độ bền qua nhiều vùng.

**Liên kết tiếng Hàn:** `지속성` — tính bền, độ bền dữ liệu.

## 5. referential integrity /ˌrefəˈrenʃəl ɪnˈteɡrəti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — yêu cầu các tham chiếu giữa bảng phải trỏ đến bản ghi tồn tại và hợp lệ.

**Core meaning — English:** The requirement that references between tables point to existing and valid records.

**Core meaning & mental image — Tiếng Việt:** Mỗi hóa đơn phải trỏ đến một khách hàng thật, không để mũi tên rơi vào khoảng trống.

**Grammar & collocations:** `enforce referential integrity`, `referential-integrity constraint`, `foreign-key constraint`.

**Register & nuance:** Integrity giúp ngăn dữ liệu mồ côi nhưng cần quy tắc rõ khi bản ghi cha bị xóa hoặc đổi.

**Example:** `The constraint preserved referential integrity between orders and customers.` → Ràng buộc giữ toàn vẹn tham chiếu giữa đơn hàng và khách hàng.

**Liên kết tiếng Hàn:** `참조 무결성` — toàn vẹn tham chiếu.

## 6. schema migration /ˈskiːmə maɪˈɡreɪʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase` — quá trình thay đổi cấu trúc cơ sở dữ liệu theo cách có kế hoạch và kiểm soát.

**Core meaning — English:** The planned and controlled process of changing a database’s structure.

**Core meaning & mental image — Tiếng Việt:** Cải tạo tòa nhà dữ liệu trong khi người dùng vẫn đang ở bên trong.

**Grammar & collocations:** `schema-migration script`, `run a migration`, `backward-compatible migration`.

**Register & nuance:** Migration cần xét dữ liệu cũ, ứng dụng cũ, rollback và thời gian khóa hệ thống.

**Example:** `The team tested the schema migration on a production-sized copy.` → Nhóm thử migration schema trên bản sao có quy mô như production.

**Liên kết tiếng Hàn:** `스키마 마이그레이션` — di chuyển, thay đổi schema.

## 7. index selectivity /ˈɪndeks səˈlektəvəti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — mức độ một chỉ mục lọc ra ít bản ghi khác nhau thay vì khớp quá nhiều dòng.

**Core meaning — English:** The degree to which an index narrows a query to a small and distinct set of records.

**Core meaning & mental image — Tiếng Việt:** Một chiếc rây có lỗ đủ đặc để giữ lại đúng vài hạt cần tìm.

**Grammar & collocations:** `high index selectivity`, `selectivity estimate`, `selective index`.

**Register & nuance:** Selectivity phụ thuộc phân phối dữ liệu và điều kiện truy vấn, không chỉ kiểu cột.

**Example:** `The optimizer chose the index with better selectivity.` → Bộ tối ưu chọn chỉ mục có tính chọn lọc tốt hơn.

**Liên kết tiếng Hàn:** `인덱스 선택도` — tính chọn lọc của chỉ mục.

## 8. query optimization /ˈkwɪri ˌɑptəməˈzeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — quá trình chọn cách thực thi truy vấn ít tốn thời gian, bộ nhớ hoặc I/O hơn.

**Core meaning — English:** The process of choosing an execution strategy that uses less time, memory, or I/O.

**Core meaning & mental image — Tiếng Việt:** Tìm tuyến đường ngắn nhất qua kho dữ liệu thay vì đi qua mọi kệ.

**Grammar & collocations:** `query-optimization engine`, `query-optimization technique`, `optimize a query`.

**Register & nuance:** Tối ưu phải dựa trên dữ liệu và tải thực tế; kế hoạch nhanh hôm nay có thể chậm sau khi dữ liệu đổi.

**Example:** `Query optimization cut the report from minutes to seconds.` → Tối ưu truy vấn rút báo cáo từ vài phút xuống vài giây.

**Liên kết tiếng Hàn:** `쿼리 최적화` — tối ưu truy vấn.

## 9. materialized view /məˈtɪriəˌlaɪzd vjuː/

**Loại từ & vị trí trong câu:** `countable noun phrase` — kết quả truy vấn được lưu sẵn và cập nhật theo lịch hoặc sự kiện để đọc nhanh.

**Core meaning — English:** A stored result of a query that is refreshed periodically or when data changes.

**Core meaning & mental image — Tiếng Việt:** Nấu sẵn một phần báo cáo để người dùng không phải nấu lại từ nguyên liệu mỗi lần hỏi.

**Grammar & collocations:** `refresh a materialized view`, `materialized-view index`, `stale view`.

**Register & nuance:** View tăng tốc đọc nhưng phải cân bằng chi phí làm mới và độ cũ chấp nhận được.

**Example:** `The materialized view served the monthly sales dashboard.` → View vật hóa phục vụ bảng điều khiển doanh số tháng.

**Liên kết tiếng Hàn:** `구체화된 뷰` — view vật hóa.

## 10. data warehouse /ˈdeɪtə ˈwerˌhaʊs/

**Loại từ & vị trí trong câu:** `countable noun phrase` — kho dữ liệu được tổ chức để báo cáo, phân tích và truy vấn lịch sử ở quy mô lớn.

**Core meaning — English:** A data store organized for large-scale reporting, analysis, and historical queries.

**Core meaning & mental image — Tiếng Việt:** Một nhà kho gom dữ liệu đã chuẩn hóa từ nhiều hệ thống để người phân tích nhìn toàn cảnh.

**Grammar & collocations:** `enterprise data warehouse`, `load the data warehouse`, `warehouse schema`.

**Register & nuance:** Warehouse tối ưu phân tích có cấu trúc, khác cơ sở dữ liệu giao dịch tối ưu ghi và đọc tức thời.

**Example:** `The data warehouse combined sales and support histories.` → Kho dữ liệu kết hợp lịch sử bán hàng và hỗ trợ.

**Liên kết tiếng Hàn:** `데이터 웨어하우스` — kho dữ liệu.

## 11. data lake /ˈdeɪtə leɪk/

**Loại từ & vị trí trong câu:** `countable noun phrase` — kho lưu trữ lớn giữ dữ liệu thô ở nhiều định dạng để xử lý sau.

**Core meaning — English:** A large repository that stores raw data in many formats for later processing.

**Core meaning & mental image — Tiếng Việt:** Hồ chứa dữ liệu thô, nơi thông tin có thể được lọc và định hình khi có câu hỏi mới.

**Grammar & collocations:** `data-lake architecture`, `ingest data into the lake`, `data-lake governance`.

**Register & nuance:** Lake linh hoạt hơn warehouse nhưng dễ thành “data swamp” nếu thiếu catalog, chất lượng và quyền sở hữu.

**Example:** `The data lake retained raw sensor streams for future research.` → Hồ dữ liệu giữ luồng cảm biến thô cho nghiên cứu sau này.

**Liên kết tiếng Hàn:** `데이터 레이크` — hồ dữ liệu.

## 12. OLAP /ˈoʊlæp/

**Loại từ & vị trí trong câu:** `uncountable noun` — xử lý phân tích trực tuyến, cho phép tổng hợp và khám phá dữ liệu theo nhiều chiều.

**Core meaning — English:** Online analytical processing that supports multidimensional aggregation and exploration of data.

**Core meaning & mental image — Tiếng Việt:** Xoay khối dữ liệu để xem doanh số theo vùng, tháng, sản phẩm hoặc mọi kết hợp.

**Grammar & collocations:** `OLAP cube`, `OLAP query`, `OLAP workload`.

**Register & nuance:** OLAP ưu tiên truy vấn phân tích phức tạp, khác với OLTP ưu tiên giao dịch nhỏ và nhanh.

**Example:** `The OLAP cube let managers compare regions by quarter.` → Khối OLAP cho phép quản lý so sánh các vùng theo quý.

**Liên kết tiếng Hàn:** `온라인 분석 처리` — xử lý phân tích trực tuyến.

## 13. OLTP /ˌoʊ el tiː ˈpiː/

**Loại từ & vị trí trong câu:** `uncountable noun` — xử lý giao dịch trực tuyến, tập trung vào nhiều thao tác nhỏ, nhanh và nhất quán.

**Core meaning — English:** Online transaction processing focused on many small, fast, and consistent operations.

**Core meaning & mental image — Tiếng Việt:** Quầy thu ngân xử lý từng giao dịch ngắn mà không để hàng đợi dừng.

**Grammar & collocations:** `OLTP database`, `OLTP workload`, `OLTP system`.

**Register & nuance:** OLTP thường là nguồn dữ liệu vận hành, có yêu cầu khác với kho phân tích OLAP.

**Example:** `The OLTP system recorded each payment immediately.` → Hệ thống OLTP ghi từng thanh toán ngay lập tức.

**Liên kết tiếng Hàn:** `온라인 트랜잭션 처리` — xử lý giao dịch trực tuyến.

## 14. change data capture /tʃeɪndʒ ˈdeɪtə ˈkæptʃər/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — kỹ thuật ghi nhận các bản ghi được thêm, sửa hoặc xóa để truyền thay đổi sang hệ thống khác.

**Core meaning — English:** A technique that records inserts, updates, and deletes so changes can flow to another system.

**Core meaning & mental image — Tiếng Việt:** Thay vì chụp cả cuốn sổ mỗi lần, chỉ gửi những dòng vừa đổi.

**Grammar & collocations:** `change-data-capture pipeline`, `CDC stream`, `capture database changes`.

**Register & nuance:** CDC giảm tải đồng bộ nhưng cần xử lý thứ tự, xóa, retry và schema thay đổi.

**Example:** `Change data capture fed the analytics platform in near real time.` → Thu nhận thay đổi dữ liệu cấp dữ liệu gần thời gian thực cho nền tảng phân tích.

**Liên kết tiếng Hàn:** `변경 데이터 캡처` — thu nhận thay đổi dữ liệu.

## 15. event sourcing /ɪˈvent ˌsɔrsɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — cách lưu chuỗi sự kiện làm nguồn sự thật và dựng trạng thái hiện tại từ lịch sử đó.

**Core meaning — English:** A design that stores a sequence of events as the source of truth and rebuilds current state from that history.

**Core meaning & mental image — Tiếng Việt:** Giữ toàn bộ nhật ký thay đổi thay vì chỉ giữ ảnh chụp cuối cùng của tài khoản.

**Grammar & collocations:** `event-sourcing pattern`, `event-sourced aggregate`, `replay events`.

**Register & nuance:** Event sourcing hỗ trợ audit và replay nhưng làm schema sự kiện, lưu trữ và sửa lỗi phức tạp hơn.

**Example:** `Event sourcing preserved the history of every account change.` → Event sourcing giữ lịch sử mọi thay đổi tài khoản.

**Liên kết tiếng Hàn:** `이벤트 소싱` — lưu trữ theo sự kiện.

## Review in context

Database design may use **denormalization** for reads, while **transaction isolation**, **atomicity**, **durability**, and **referential integrity** protect writes. A **schema migration**, **index selectivity**, and **query optimization** keep operations efficient. A **materialized view**, **data warehouse**, **data lake**, **OLAP**, and **OLTP** serve different workloads. **Change data capture** and **event sourcing** preserve a useful history of changes.

Thiết kế cơ sở dữ liệu có thể dùng **phi chuẩn hóa** cho việc đọc, trong khi **cô lập giao dịch**, **tính nguyên tử**, **độ bền** và **toàn vẹn tham chiếu** bảo vệ việc ghi. **Thay đổi schema**, **tính chọn lọc chỉ mục** và **tối ưu truy vấn** giữ vận hành hiệu quả. **View vật hóa**, **kho dữ liệu**, **hồ dữ liệu**, **OLAP** và **OLTP** phục vụ các tải khác nhau. **Thu nhận thay đổi dữ liệu** và **lưu trữ theo sự kiện** giữ lịch sử thay đổi hữu ích.
