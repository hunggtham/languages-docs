# C1 Vocabulary 01 — Computing concepts and systems

Nhóm từ này mô tả cách phần mềm biểu diễn dữ liệu, chạy chương trình và mở rộng hệ thống. Flow của bài là: **abstraction → compiler → recursion → data structure → database schema → normalization → hash → query → cache → distributed → concurrency → containerization → open source → debugging → deployment**.

---

## 1. abstraction /əbˈstrækʃən/

**Loại từ & vị trí trong câu:** `countable/uncountable noun` — cách ẩn chi tiết triển khai để người dùng hoặc lớp phần mềm làm việc với một mô hình đơn giản hơn.

**Core meaning — English:** A simplified representation that hides implementation details and exposes only the features needed for a task.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung nút “in” trên màn hình: người dùng gọi chức năng mà không cần biết máy gửi dữ liệu đến máy in thế nào.

**Grammar & collocations:** `high-level abstraction` — lớp trừu tượng cấp cao; `abstraction layer` — lớp trừu tượng; `use abstraction` — dùng tính trừu tượng.

**Register & nuance:** Abstraction giúp quản lý phức tạp nhưng có thể che mất chi phí hoặc giới hạn quan trọng nếu dùng quá nhiều.

**Examples:** `The API provides an abstraction over the storage system.` → API cung cấp lớp trừu tượng trên hệ thống lưu trữ. `Good abstraction makes the code easier to change.` → Trừu tượng tốt làm code dễ thay đổi hơn.

**Liên kết tiếng Hàn:** `추상화`, `추상화 계층` — tính trừu tượng, lớp trừu tượng.

## 2. compiler /kəmˈpaɪlɚ/

**Loại từ & vị trí trong câu:** `countable noun` — chương trình chuyển mã nguồn thành mã máy hoặc dạng trung gian mà máy tính có thể thực thi.

**Core meaning — English:** A program that translates source code into machine code or an intermediate form that a computer can execute.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung người phiên dịch biến các câu lệnh dễ đọc thành chuỗi chỉ dẫn mà bộ xử lý hiểu được.

**Grammar & collocations:** `compiler error` — lỗi trình biên dịch; `compiler optimization` — tối ưu trình biên dịch; `compile the code` — biên dịch code.

**Register & nuance:** Compiler thường tạo chương trình trước khi chạy; interpreter thường đọc và thực thi mã trong quá trình chạy.

**Examples:** `The compiler reported a type error.` → Trình biên dịch báo lỗi kiểu dữ liệu. `Compiler optimization reduced the program's memory use.` → Tối ưu trình biên dịch giảm mức dùng bộ nhớ của chương trình.

**Liên kết tiếng Hàn:** `컴파일러`, `컴파일러 프로그램` — trình biên dịch.

## 3. recursion /rɪˈkɝʒən/

**Loại từ & vị trí trong câu:** `uncountable noun` — kỹ thuật một hàm gọi lại chính nó để giải quyết phiên bản nhỏ hơn của cùng một bài toán.

**Core meaning — English:** A technique in which a function calls itself to solve smaller versions of the same problem.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung mở một thư mục rồi áp dụng cùng quy tắc cho mọi thư mục con cho đến khi gặp điều kiện dừng.

**Grammar & collocations:** `recursive function` — hàm đệ quy; `recursion depth` — độ sâu đệ quy; `use recursion` — dùng đệ quy.

**Register & nuance:** Recursion cần base case rõ ràng; nếu không, chương trình có thể gọi vô hạn và cạn stack.

**Examples:** `The algorithm uses recursion to traverse the tree.` → Thuật toán dùng đệ quy để duyệt cây. `A missing base case caused infinite recursion.` → Thiếu điều kiện dừng gây đệ quy vô hạn.

**Liên kết tiếng Hàn:** `재귀`, `재귀 호출` — đệ quy, gọi đệ quy.

## 4. data structure /ˈdeɪtə ˌstrʌktʃɚ/

**Loại từ & vị trí trong câu:** `countable noun phrase` — cách tổ chức dữ liệu trong bộ nhớ để truy cập và cập nhật hiệu quả.

**Core meaning — English:** A way of organizing data in memory so that it can be accessed and updated efficiently.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung danh sách, cây, bảng băm hoặc đồ thị là những loại hộp khác nhau cho cùng dữ liệu.

**Grammar & collocations:** `appropriate data structure` — cấu trúc dữ liệu phù hợp; `data-structure design` — thiết kế cấu trúc dữ liệu; `choose a data structure` — chọn cấu trúc dữ liệu.

**Register & nuance:** Data structure ảnh hưởng tốc độ, bộ nhớ và độ phức tạp của thuật toán; không có cấu trúc tốt nhất cho mọi nhiệm vụ.

**Examples:** `The engineer selected a data structure suited to fast lookups.` → Kỹ sư chọn cấu trúc dữ liệu phù hợp tra cứu nhanh. `Changing the data structure improved performance.` → Thay đổi cấu trúc dữ liệu cải thiện hiệu năng.

**Liên kết tiếng Hàn:** `자료 구조` — cấu trúc dữ liệu.

## 5. database schema /ˈdeɪtəˌbeɪs ˈskiːmə/

**Loại từ & vị trí trong câu:** `countable noun phrase` — mô tả cấu trúc logic của cơ sở dữ liệu, gồm bảng, trường, kiểu dữ liệu và quan hệ.

**Core meaning — English:** A description of a database's logical structure, including tables, fields, data types, and relationships.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung bản thiết kế cho biết bảng khách hàng nối với đơn hàng và mỗi cột lưu loại thông tin nào.

**Grammar & collocations:** `relational database schema` — lược đồ cơ sở dữ liệu quan hệ; `schema design` — thiết kế lược đồ; `change the schema` — thay đổi lược đồ.

**Register & nuance:** Schema là cấu trúc và quy tắc của dữ liệu, không phải các bản ghi cụ thể đang nằm trong database.

**Examples:** `The team revised the database schema before launch.` → Nhóm sửa lược đồ cơ sở dữ liệu trước khi ra mắt. `A clear schema prevents inconsistent records.` → Lược đồ rõ ràng ngăn bản ghi không nhất quán.

**Liên kết tiếng Hàn:** `데이터베이스 스키마`, `데이터베이스 구조` — lược đồ, cấu trúc cơ sở dữ liệu.

## 6. normalization /ˌnɔrmələˈzeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun` — quá trình tổ chức bảng dữ liệu để giảm lặp lại và tránh lỗi khi thêm, sửa hoặc xóa bản ghi.

**Core meaning — English:** The process of structuring database tables to reduce duplication and prevent update anomalies.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung tách thông tin khách hàng ra khỏi đơn hàng để mỗi dữ liệu quan trọng chỉ được lưu và sửa ở một nơi.

**Grammar & collocations:** `database normalization` — chuẩn hóa cơ sở dữ liệu; `normalization form` — dạng chuẩn hóa; `normalize a schema` — chuẩn hóa lược đồ.

**Register & nuance:** Normalization giảm dư thừa nhưng có thể làm truy vấn phức tạp hơn; đôi khi hệ thống cố ý denormalize vì hiệu năng.

**Examples:** `Normalization removed duplicate customer addresses.` → Chuẩn hóa loại bỏ địa chỉ khách hàng trùng lặp. `The team stopped at the third normalization form.` → Nhóm dừng ở dạng chuẩn hóa thứ ba.

**Liên kết tiếng Hàn:** `정규화`, `데이터베이스 정규화` — chuẩn hóa, chuẩn hóa cơ sở dữ liệu.

## 7. hash /hæʃ/

**Loại từ & vị trí trong câu:** `countable noun/verb` — giá trị ngắn được tạo từ dữ liệu bằng hàm xác định, thường dùng để tra cứu hoặc kiểm tra toàn vẹn.

**Core meaning — English:** A fixed-size value produced from data by a deterministic function, often used for lookup or integrity checking.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung dấu vân tay kỹ thuật số: dữ liệu thay đổi một chút thì chuỗi hash thường thay đổi mạnh.

**Grammar & collocations:** `cryptographic hash` — hash mật mã; `hash function` — hàm băm; `hash a password` — băm mật khẩu.

**Register & nuance:** Hash không phải encryption: hash thường một chiều, còn encryption được thiết kế để giải mã bằng khóa.

**Examples:** `The system compares the file's hash before installation.` → Hệ thống so sánh hash của file trước khi cài. `Passwords should be stored as salted hashes.` → Mật khẩu nên được lưu dưới dạng hash có salt.

**Liên kết tiếng Hàn:** `해시`, `해시값` — hash, giá trị hash.

## 8. query /ˈkwiəri/

**Loại từ & vị trí trong câu:** `countable noun/verb` — yêu cầu có cấu trúc để tìm, lọc hoặc thay đổi dữ liệu trong hệ thống.

**Core meaning — English:** A structured request to retrieve, filter, or modify data in a system.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung câu hỏi gửi vào cơ sở dữ liệu: lấy tất cả đơn hàng tháng này của khách hàng ở Seoul.

**Grammar & collocations:** `database query` — truy vấn cơ sở dữ liệu; `query language` — ngôn ngữ truy vấn; `run a query` — chạy truy vấn.

**Register & nuance:** Query có thể là yêu cầu dữ liệu hoặc câu hỏi chung; trong kỹ thuật, cấu trúc và hiệu năng của query rất quan trọng.

**Examples:** `The query returned thousands of records.` → Truy vấn trả về hàng nghìn bản ghi. `An index made the query much faster.` → Chỉ mục làm truy vấn nhanh hơn nhiều.

**Liên kết tiếng Hàn:** `쿼리`, `질의` — truy vấn.

## 9. cache /kæʃ/

**Loại từ & vị trí trong câu:** `countable/uncountable noun/verb` — vùng lưu tạm dữ liệu thường dùng để giảm thời gian truy cập hoặc tải hệ thống.

**Core meaning — English:** A temporary storage area for frequently used data, or the act of storing data there.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung đặt bản sao dữ liệu gần người dùng để lần sau không phải đi lấy lại từ nguồn chậm hơn.

**Grammar & collocations:** `cache hit` — lần truy cập trúng cache; `cache miss` — lần truy cập trượt cache; `cache invalidation` — vô hiệu hóa cache.

**Register & nuance:** Cache tăng tốc nhưng có thể trả dữ liệu cũ nếu invalidation không đúng.

**Examples:** `The service caches popular images near users.` → Dịch vụ lưu cache hình ảnh phổ biến gần người dùng. `A stale cache displayed the old price.` → Cache cũ hiển thị giá cũ.

**Liên kết tiếng Hàn:** `캐시`, `캐시 저장` — bộ nhớ đệm, lưu cache.

## 10. distributed /dɪˈstrɪbjətɪd/

**Loại từ & vị trí trong câu:** `adjective` — được triển khai trên nhiều máy tính hoặc địa điểm phối hợp qua mạng thay vì một máy đơn.

**Core meaning — English:** Spread across multiple computers or locations that coordinate over a network.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một dịch vụ có nhiều nút cùng xử lý, nên một máy hỏng không nhất thiết làm toàn hệ thống dừng.

**Grammar & collocations:** `distributed system` — hệ thống phân tán; `distributed database` — cơ sở dữ liệu phân tán; `distributed computing` — điện toán phân tán.

**Register & nuance:** Distributed systems tăng khả năng mở rộng nhưng tạo vấn đề đồng bộ, độ trễ và nhất quán dữ liệu.

**Examples:** `The company runs a distributed system across three regions.` → Công ty vận hành hệ thống phân tán ở ba khu vực. `Distributed storage protects data from a single-site failure.` → Lưu trữ phân tán bảo vệ dữ liệu khỏi lỗi một địa điểm.

**Liên kết tiếng Hàn:** `분산형`, `분산 시스템의` — phân tán, thuộc hệ thống phân tán.

## 11. concurrency /kənˈkɝənsi/

**Loại từ & vị trí trong câu:** `uncountable noun` — khả năng nhiều tác vụ tiến triển chồng lấn trong cùng khoảng thời gian.

**Core meaning — English:** The ability of multiple tasks to make progress during overlapping periods of time.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung máy chủ xử lý nhiều yêu cầu xen kẽ, không nhất thiết chạy mọi thứ đúng cùng một khoảnh khắc.

**Grammar & collocations:** `concurrency control` — kiểm soát đồng thời; `concurrent request` — yêu cầu đồng thời; `handle concurrency` — xử lý đồng thời.

**Register & nuance:** Concurrency khác parallelism: concurrency nói tổ chức nhiều tác vụ, còn parallelism nhấn chạy thực sự cùng lúc trên nhiều bộ xử lý.

**Examples:** `The database uses locks for concurrency control.` → Cơ sở dữ liệu dùng khóa để kiểm soát đồng thời. `Poor concurrency handling caused duplicate payments.` → Xử lý đồng thời kém gây thanh toán trùng.

**Liên kết tiếng Hàn:** `동시성`, `동시성 제어` — tính đồng thời, kiểm soát đồng thời.

## 12. containerization /kənˌteɪnəraɪˈzeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun` — cách đóng gói ứng dụng cùng thư viện và cấu hình để chạy nhất quán trong môi trường cô lập.

**Core meaning — English:** The practice of packaging an application with its dependencies and configuration in an isolated, portable unit.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung ứng dụng được đặt trong một “hộp” có mọi thứ cần thiết, nên chuyển từ máy phát triển sang máy chủ ít bất ngờ hơn.

**Grammar & collocations:** `application containerization` — đóng gói ứng dụng bằng container; `containerization platform` — nền tảng container; `containerization strategy` — chiến lược container hóa.

**Register & nuance:** Containerization nhẹ hơn máy ảo vì thường dùng chung kernel của hệ điều hành, nhưng vẫn cần quản lý bảo mật và tài nguyên.

**Examples:** `Containerization simplified deployment across environments.` → Container hóa đơn giản hóa triển khai giữa các môi trường. `The team adopted containerization for its data services.` → Nhóm áp dụng container hóa cho các dịch vụ dữ liệu.

**Liên kết tiếng Hàn:** `컨테이너화` — container hóa.

## 13. open source /ˌoʊpən ˈsɔrs/

**Loại từ & vị trí trong câu:** `adjective/noun` — phần mềm có mã nguồn được cấp phép để người khác xem, sửa và phân phối theo điều kiện cụ thể.

**Core meaning — English:** Software whose source code is available to inspect, modify, and redistribute under a specified license.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung cộng đồng có thể đọc và đóng góp vào mã, nhưng vẫn phải tuân thủ giấy phép của dự án.

**Grammar & collocations:** `open-source project` — dự án mã nguồn mở; `open-source license` — giấy phép mã nguồn mở; `use open source` — dùng mã nguồn mở.

**Register & nuance:** Open source không có nghĩa không có bản quyền hoặc luôn miễn phí; license vẫn quy định quyền và nghĩa vụ.

**Examples:** `The startup built its platform on open-source tools.` → Công ty khởi nghiệp xây nền tảng trên công cụ mã nguồn mở. `The project requires contributors to follow its open-source license.` → Dự án yêu cầu người đóng góp tuân thủ giấy phép mã nguồn mở.

**Liên kết tiếng Hàn:** `오픈 소스`, `공개 소스` — mã nguồn mở.

## 14. debugging /ˌdiːˈbʌɡɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun` — quá trình tìm, hiểu và sửa lỗi khiến phần mềm hoạt động sai hoặc không ổn định.

**Core meaning — English:** The process of finding, understanding, and fixing errors in software.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung lần theo dấu vết từ triệu chứng đến nguyên nhân, tái hiện lỗi rồi kiểm tra bản sửa.

**Grammar & collocations:** `debugging tool` — công cụ gỡ lỗi; `debugging session` — phiên gỡ lỗi; `debug a program` — gỡ lỗi chương trình.

**Register & nuance:** Debugging không chỉ là sửa một dòng code; nó gồm quan sát, giả thuyết, thử nghiệm và xác minh.

**Examples:** `Logging made debugging the intermittent failure easier.` → Log làm việc gỡ lỗi sự cố chập chờn dễ hơn. `The developer spent the afternoon debugging the payment flow.` → Lập trình viên dành cả chiều gỡ lỗi luồng thanh toán.

**Liên kết tiếng Hàn:** `디버깅`, `오류 수정` — gỡ lỗi, sửa lỗi.

## 15. deployment /dɪˈplɔɪmənt/

**Loại từ & vị trí trong câu:** `countable/uncountable noun` — quá trình đưa phần mềm hoặc thay đổi từ môi trường phát triển vào môi trường người dùng thật.

**Core meaning — English:** The process of moving software or a change from development into an environment where users can run it.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung bản build vượt qua kiểm thử, được đưa lên máy chủ và bắt đầu phục vụ người dùng.

**Grammar & collocations:** `automated deployment` — triển khai tự động; `deployment pipeline` — pipeline triển khai; `deploy to production` — triển khai lên production.

**Register & nuance:** Deployment khác release: deployment là hành động đưa code vào môi trường, còn release thường nói phiên bản được công bố cho người dùng.

**Examples:** `The team paused deployment after a failed health check.` → Nhóm tạm dừng triển khai sau kiểm tra sức khỏe thất bại. `Automated deployment reduced manual mistakes.` → Triển khai tự động giảm lỗi thủ công.

**Liên kết tiếng Hàn:** `배포`, `배포 과정` — triển khai, quá trình phân phối.

---

## Review in context

### Moving a data service into production

The engineers designed an **abstraction** over storage, then used a **compiler**, **recursion**, and a suitable **data structure**. A clear **database schema** and careful **normalization** protected records, while a **hash** verified files and a **query** retrieved results. A **cache** reduced delay in the **distributed** service, and **concurrency** controls prevented conflicts. **Containerization** made the **open source** components portable. After **debugging**, the team completed a controlled **deployment**.

### Nghĩa tiếng Việt

Các kỹ sư thiết kế một lớp **trừu tượng** trên lưu trữ, rồi dùng **trình biên dịch**, **đệ quy** và **cấu trúc dữ liệu** phù hợp. **Lược đồ cơ sở dữ liệu** rõ ràng cùng **chuẩn hóa** cẩn thận bảo vệ bản ghi, trong khi **hash** xác minh file và **truy vấn** lấy kết quả. **Cache** giảm độ trễ trong dịch vụ **phân tán**, còn kiểm soát **đồng thời** ngăn xung đột. **Container hóa** làm các thành phần **mã nguồn mở** dễ chuyển đổi. Sau khi **gỡ lỗi**, nhóm hoàn tất **triển khai** có kiểm soát.
