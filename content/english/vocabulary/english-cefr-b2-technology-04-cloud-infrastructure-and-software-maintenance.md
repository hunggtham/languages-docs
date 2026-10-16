# B2 Vocabulary 04 — Cloud infrastructure and software maintenance

B2 technology vocabulary should help learners discuss how modern software is hosted, deployed, scaled, and maintained in the cloud. Flow: **cloud hosting → cloud migration → legacy system → technical debt → backend service → server capacity → traffic spike → load balancer → high availability → data redundancy → data replication → configuration file → software dependency → staging environment → production environment → automated deployment → health check → monitoring tool → system outage → downtime → uptime → failover → rollback → hotfix → scheduled maintenance**.

---

## 1. cloud hosting /ˈklaʊd ˌhoʊstɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ, tân ngữ sau các động từ như `use`, `switch to`, `offer`, `manage`.

**Core meaning — English:** The practice of running websites, applications, and services on virtual servers distributed across a network of physical data centers rather than on a single local server.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung thay vì đặt chiếc máy chủ vật lý kêu rì rầm dưới gầm bàn công ty, bạn thuê một "phần đất ảo" linh hoạt trên mạng lưới máy chủ khổng lồ do nhà cung cấp quản lý. Nếu cần thêm tài nguyên, hệ thống lập tức mở rộng mà bạn không cần mua thêm thiết bị phần cứng.

**Grammar & collocations:** `cloud hosting provider` — nhà cung cấp dịch vụ lưu trữ đám mây; `switch to cloud hosting` — chuyển sang lưu trữ đám mây; `reliable cloud hosting` — dịch vụ lưu trữ đám mây đáng tin cậy.

**Register & nuance:** Khác với `shared hosting` (nhiều trang chia sẻ một máy chủ đơn lẻ) và `dedicated hosting` (thuê nguyên một máy chủ vật lý riêng biệt), `cloud hosting` phân tán tài nguyên qua nhiều máy chủ kết nối với nhau.

**Linking:** `cloud storage` — lưu trữ dữ liệu đám mây; `on-premises hosting` — lưu trữ tại chỗ trên phần cứng của doanh nghiệp; `web host` — đơn vị lưu trữ web.

**Examples:** `The startup chose cloud hosting because it allowed them to scale resources instantly.` → Công ty khởi nghiệp đã chọn lưu trữ đám mây vì nó cho phép họ mở rộng tài nguyên ngay lập tức.

**Liên kết tiếng Hàn:** `클라우드 호스팅` — dịch vụ lưu trữ đám mây.

---

## 2. cloud migration /ˈklaʊd maɪˌɡreɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường đi kèm với các động từ như `plan`, `execute`, `complete`, `accelerate`.

**Core meaning — English:** The process of moving digital assets, databases, workloads, and applications from on-premises servers to cloud-based environments.

**Core meaning & mental image — Tiếng Việt:** Tương tự như một cuộc "chuyển nhà" quy mô lớn của doanh nghiệp: toàn bộ tủ tài liệu số, phần mềm vận hành và cơ sở dữ liệu từ văn phòng được đóng gói cẩn thận và chuyển lên vận hành trên đám mây để tăng tính linh hoạt và cắt giảm chi phí bảo trì.

**Grammar & collocations:** `complete the cloud migration` — hoàn tất chuyển dịch lên đám mây; `cloud migration strategy` — chiến lược di chuyển lên đám mây; `speed up cloud migration` — đẩy nhanh quá trình di chuyển lên đám mây.

**Register & nuance:** `Migration` nhấn mạnh quá trình chuyển đổi toàn diện, phức tạp và có lộ trình kỹ lưỡng từ hệ thống cũ sang môi trường mới; không đơn thuần là sao chép vài tệp dữ liệu.

**Linking:** `digital transformation` — chuyển đổi số; `data migration` — di chuyển dữ liệu; `infrastructure upgrade` — nâng cấp hạ tầng.

**Examples:** `The company completed its cloud migration ahead of schedule without interrupting customer services.` → Công ty đã hoàn tất việc chuyển dịch lên đám mây trước thời hạn mà không làm gián đoạn dịch vụ khách hàng.

**Liên kết tiếng Hàn:** `클라우드 마이그레이션`, `클라우드 이전` — di chuyển/chuyển đổi lên đám mây.

---

## 3. legacy system /ˈleɡəsi ˌsɪstəm/

**Loại từ & vị trí trong câu:** `countable noun`. Thường dùng ở số ít hoặc số nhiều để chỉ hệ thống máy tính, phần mềm hoặc phần cứng lỗi thời vẫn đang được sử dụng.

**Core meaning — English:** An outdated computer system, software application, or hardware technology that remains in use because it performs critical functions and is costly or difficult to replace.

**Core meaning & mental image — Tiếng Việt:** Giống như một chiếc xe tải cổ lỗ sĩ trong xưởng: tiêu tốn nhiều nhiên liệu, phụ tùng thay thế hiếm hoi, dễ hỏng vặt, nhưng vì nó chở cỗ máy nặng nhất phục vụ dây chuyền cốt lõi nên công ty chưa dám thay thế ngay lập tức.

**Grammar & collocations:** `maintain a legacy system` — duy trì hệ thống cũ; `replace the legacy system` — thay thế hệ thống cũ; `legacy system upgrade` — nâng cấp hệ thống kế thừa.

**Register & nuance:** `Legacy` ở đây mang sắc thái tiêu cực nhẹ về sự già cỗi công nghệ và thiếu tính tương thích, nhưng cũng ghi nhận vai trò quan trọng lịch sử mà hệ thống đó nắm giữ.

**Linking:** `outdated software` — phần mềm lỗi thời; `modern infrastructure` — hạ tầng hiện đại; `system migration` — di chuyển hệ thống.

**Examples:** `Maintaining the legacy system became too costly, so the bank decided to rebuild its core platform.` → Việc duy trì hệ thống cũ trở nên quá tốn kém, vì vậy ngân hàng quyết định xây dựng lại nền tảng cốt lõi của mình.

**Liên kết tiếng Hàn:** `레거시 시스템`, `기존 시스템` — hệ thống cũ/kế thừa.

---

## 4. technical debt /ˈteknɪkəl det/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường đi với các động từ như `accumulate`, `accrue`, `pay down`, `reduce`.

**Core meaning — English:** The implied future cost and extra work created by choosing a quick, easy software solution now instead of a better, well-designed approach.

**Core meaning & mental image — Tiếng Việt:** Giống như vay nợ tài chính: bạn chọn cách làm tắt nhanh gọn hôm nay để kịp hạn chót ra mắt, nhưng theo thời gian món nợ kỹ thuật này sinh "tiền lãi", khiến mọi thay đổi về sau trở nên chậm chạp và phức tạp hơn cho đến khi bạn phải dành thời gian dọn dẹp và sửa lại cho đàng hoàng.

**Grammar & collocations:** `accumulate technical debt` — tích lũy nợ kỹ thuật; `pay down technical debt` — trả bớt nợ kỹ thuật; `address technical debt` — giải quyết nợ kỹ thuật.

**Register & nuance:** Rất phổ biến trong quản lý sản phẩm phần mềm và kỹ thuật; thể hiện sự đánh đổi có ý thức giữa tốc độ đưa sản phẩm ra thị trường và chất lượng bền vững dài hạn.

**Linking:** `code refactoring` — tái cấu trúc mã nguồn; `workaround` — giải pháp tình thế; `code quality` — chất lượng mã nguồn.

**Examples:** `Rushing the project to meet the deadline resulted in heavy technical debt that slowed down future development.` → Việc vội vã thúc đẩy dự án để kịp hạn chót đã dẫn đến nợ kỹ thuật nặng nề, làm chậm quá trình phát triển trong tương lai.

**Liên kết tiếng Hàn:** `기술 부채` — nợ kỹ thuật.

---

## 5. backend service /ˈbækˌend ˈsɜrvɪs/

**Loại từ & vị trí trong câu:** `countable noun`. Thường dùng trong kiến trúc phần mềm, đóng vai trò chủ ngữ hoặc tân ngữ sau `build`, `call`, `scale`.

**Core meaning — English:** A server-side software component or program that processes data, handles business logic, and manages database interactions away from the user's direct view.

**Core meaning & mental image — Tiếng Việt:** Giống như gian bếp của một nhà hàng sang trọng: thực khách ở sảnh ngoài (frontend) chỉ thấy thực đơn và các món ăn hoàn chỉnh, còn mọi công việc chế biến phức tạp, quản lý kho nguyên liệu và kiểm soát nhiệt độ diễn ra âm thầm ở gian bếp phía sau (backend).

**Grammar & collocations:** `build a backend service` — xây dựng dịch vụ backend; `connect to a backend service` — kết nối với dịch vụ backend; `backend service latency` — độ trễ của dịch vụ backend.

**Register & nuance:** Phân biệt rõ với `frontend` (giao diện hiển thị trên trình duyệt hoặc điện thoại); backend service chịu trách nhiệm đảm bảo logic tính toán chuẩn xác và an toàn dữ liệu.

**Linking:** `frontend interface` — giao diện người dùng; `application programming interface (API)` — giao diện lập trình ứng dụng; `database query` — truy vấn cơ sở dữ liệu.

**Examples:** `The mobile app communicates with a backend service to verify user payments securely.` → Ứng dụng di động liên lạc với một dịch vụ backend để xác minh thanh toán của người dùng một cách an toàn.

**Liên kết tiếng Hàn:** `백엔드 서비스` — dịch vụ backend/máy chủ.

---

## 6. server capacity /ˈsɜrvər kəˈpæsəti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường đi kèm với `exceed`, `reach`, `expand`, `monitor`.

**Core meaning — English:** The maximum volume of computational workload, network traffic, or data storage that a server infrastructure can handle efficiently without degrading performance.

**Core meaning & mental image — Tiếng Việt:** Sức chứa tối đa của một chiếc thang máy: nếu thang máy chỉ chở tối đa mười người mà hai mươi người cùng ùa vào, hệ thống sẽ báo quá tải hoặc dừng hẳn. Server capacity là giới hạn chịu lực của máy chủ.

**Grammar & collocations:** `reach server capacity` — chạm trần sức tải máy chủ; `expand server capacity` — mở rộng dung lượng máy chủ; `exceed server capacity` — vượt quá sức tải máy chủ.

**Register & nuance:** Thường được đo lường qua năng lực xử lý của bộ vi xử lý (CPU), bộ nhớ RAM, dung lượng đĩa và băng thông mạng; cần tính toán cẩn thận để tránh lãng phí chi phí nhưng vẫn đảm bảo hiệu năng.

**Linking:** `workload limit` — giới hạn khối lượng công việc; `bandwidth limit` — giới hạn băng thông; `resource utilization` — mức độ tận dụng tài nguyên.

**Examples:** `During the flash sale, traffic reached full server capacity and caused slow page loads.` → Trong đợt giảm giá chớp nhoáng, lưu lượng truy cập đã chạm mức tối đa sức tải máy chủ và gây ra tình trạng tải trang chậm.

**Liên kết tiếng Hàn:** `서버 용량`, `서버 처리 능력` — dung lượng/sức tải máy chủ.

---

## 7. traffic spike /ˈtræfɪk spaɪk/

**Loại từ & vị trí trong câu:** `countable noun`. Thường đi với các động từ như `experience`, `handle`, `cause`, `absorb`.

**Core meaning — English:** A sudden, sharp increase in the number of users or network requests visiting a digital platform over a very short period.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung biểu đồ lượt truy cập bình thường là một đường lượn sóng êm ả, đột nhiên nhô vút lên một cái gai nhọn đứng thẳng đứng do hàng triệu người đổ dồn vào website cùng một lúc.

**Grammar & collocations:** `handle a traffic spike` — xử lý lưu lượng tăng đột biến; `sudden traffic spike` — lượng truy cập tăng vọt bất ngờ; `cause a traffic spike` — gây ra đợt tăng vọt lưu lượng.

**Register & nuance:** Rất phổ biến khi nói về các sự kiện mua sắm lớn như Black Friday, các bản tin chấn động hoặc khi một video lan truyền chóng mặt (viral) trên mạng xã hội.

**Linking:** `network congestion` — tắc nghẽn mạng; `surge in visitors` — đợt tăng vọt du khách/người xem; `bandwidth consumption` — tiêu thụ băng thông.

**Examples:** `The streaming service scaled up its servers to prepare for the traffic spike during the live sports final.` → Dịch vụ phát trực tuyến đã tăng cường máy chủ để chuẩn bị cho đợt tăng đột biến lưu lượng truy cập trong trận chung kết thể thao trực tiếp.

**Liên kết tiếng Hàn:** `트래픽 급증` — lưu lượng truy cập tăng đột biến.

---

## 8. load balancer /ˈloʊd ˌbælənsər/

**Loại từ & vị trí trong câu:** `countable noun`. Thường đứng sau các động từ như `deploy`, `configure`, `install`.

**Core meaning — English:** A software program or hardware device that distributes incoming network traffic across multiple servers to prevent any single server from becoming overwhelmed.

**Core meaning & mental image — Tiếng Việt:** Giống như một người điều phối dòng xe tại trạm thu phí cao tốc: họ hướng dẫn các xe rải đều vào các cổng mở sẵn thay vì để tất cả dồn cục lại ở một cửa duy nhất gây tắc đường.

**Grammar & collocations:** `configure a load balancer` — cấu hình bộ cân bằng tải; `behind a load balancer` — đứng sau bộ cân bằng tải; `load balancer health check` — kiểm tra trạng thái bộ cân bằng tải.

**Register & nuance:** Là thành phần kiến trúc thiết yếu trong các hệ thống phân tán; bảo đảm lưu lượng được san sẻ nhịp nhàng và tránh hiện tượng nghẽn cục bộ.

**Linking:** `traffic distribution` — phân phối lưu lượng; `reverse proxy` — máy chủ ủy quyền ngược; `server cluster` — cụm máy chủ.

**Examples:** `The load balancer directs incoming requests away from busy servers toward idle ones.` → Bộ cân bằng tải điều hướng các yêu cầu gửi đến rời xa các máy chủ bận rộn để chuyển đến những máy chủ đang rảnh rỗi.

**Liên kết tiếng Hàn:** `로드 밸런서`, `부하 분산기` — bộ cân bằng tải.

---

## 9. high availability /ˌhaɪ əˌveɪləˈbɪləti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường dùng trong cụm `designed for high availability` hoặc `ensure high availability`.

**Core meaning — English:** The operational characteristic of a computer system to remain accessible and functioning without interruption for extended periods, typically achieved through redundant components and automatic recovery mechanisms.

**Core meaning & mental image — Tiếng Việt:** Giống như hệ thống điện trong phòng mổ bệnh viện: luôn có máy phát điện tự động dự phòng sẵn sàng kích hoạt trong một cái chớp mắt nếu nguồn điện lưới gặp sự cố, đảm bảo dịch vụ không bao giờ tắt.

**Grammar & collocations:** `ensure high availability` — đảm bảo tính sẵn sàng cao; `architect for high availability` — thiết kế hướng tới tính sẵn sàng cao; `high availability cluster` — cụm máy chủ sẵn sàng cao.

**Register & nuance:** Thường được đo lường bằng tỷ lệ phần trăm thời gian hoạt động (ví dụ 99.9% hay 99.99%); là chỉ số cốt lõi trong cam kết thỏa thuận mức dịch vụ (SLA) của các nhà cung cấp đám mây.

**Linking:** `system reliability` — độ tin cậy hệ thống; `fault tolerance` — khả năng chịu lỗi; `operational continuity` — tính liên tục trong vận hành.

**Examples:** `Global financial platforms require high availability so clients can make transactions at any hour.` → Các nền tảng tài chính toàn cầu đòi hỏi tính sẵn sàng cao để khách hàng có thể thực hiện giao dịch vào bất kỳ giờ nào.

**Liên kết tiếng Hàn:** `고가용성` — tính sẵn sàng cao.

---

## 10. data redundancy /ˈdeɪtə rɪˌdʌndənsi/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường đi với `ensure`, `provide`, `eliminate`, `introduce`.

**Core meaning — English:** The intentional storage of identical pieces of data across multiple separate locations or devices to prevent data loss in the event of hardware or system failure.

**Core meaning & mental image — Tiếng Việt:** Giống như việc bạn cất hai bản sao của hộ chiếu: một bản để trong vali mang theo người và một bản gửi tại két sắt khách sạn. Nếu chẳng may mất một bản, bạn vẫn còn nguyên bản kia để sử dụng.

**Grammar & collocations:** `ensure data redundancy` — đảm bảo tính dự phòng dữ liệu; `geographic data redundancy` — dự phòng dữ liệu theo vị trí địa lý; `level of data redundancy` — mức độ dự phòng dữ liệu.

**Register & nuance:** Trong thiết kế cơ sở dữ liệu nội bộ, "unintentional data redundancy" có thể gây lãng phí dung lượng, nhưng trong kiến trúc lưu trữ, "intentional redundancy" là tấm đệm an toàn sống còn.

**Linking:** `backup strategy` — chiến lược sao lưu; `data loss prevention` — ngăn ngừa mất dữ liệu; `storage duplication` — nhân đôi lưu trữ.

**Examples:** `By saving records in multiple cloud zones, the architecture ensures data redundancy against hardware failure.` → Bằng cách lưu hồ sơ ở nhiều vùng đám mây, kiến trúc này đảm bảo tính dự phòng dữ liệu trước các lỗi phần cứng.

**Liên kết tiếng Hàn:** `데이터 중복성`, `데이터 이중화` — tính dự phòng/nhân đôi dữ liệu.

---

## 11. data replication /ˈdeɪtə ˌrepləˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường đi với `set up`, `enable`, `synchronous`, `asynchronous`.

**Core meaning — English:** The automated, continuous process of copying and synchronizing data from one database or storage location to another to maintain consistency across systems.

**Core meaning & mental image — Tiếng Việt:** Giống như một thư ký ghi chép sổ cái và ngay lập tức gửi bản sao đồng bộ từng phút cho chi nhánh ở đầu kia thế giới, để cả hai văn phòng luôn nhìn thấy cùng một cuốn sổ nhật ký cập nhật mới nhất.

**Grammar & collocations:** `real-time data replication` — nhân bản dữ liệu theo thời gian thực; `database replication` — nhân bản cơ sở dữ liệu; `synchronize data replication` — đồng bộ hóa nhân bản dữ liệu.

**Register & nuance:** `Redundancy` là trạng thái có bản sao dự phòng; còn `replication` là tiến trình hoặc cơ chế kỹ thuật liên tục nhân bản và đồng bộ hóa các bản sao đó.

**Linking:** `data synchronization` — đồng bộ hóa dữ liệu; `database mirroring` — nhân chiếu cơ sở dữ liệu; `scheduled backup` — sao lưu định kỳ theo lịch.

**Examples:** `Automated data replication keeps the secondary database in sync with the primary server.` → Quá trình nhân bản dữ liệu tự động giữ cho cơ sở dữ liệu phụ luôn đồng bộ với máy chủ chính.

**Liên kết tiếng Hàn:** `데이터 복제` — nhân bản/sao chép dữ liệu.

---

## 12. configuration file /kənˌfɪɡjəˈreɪʃən faɪl/

**Loại từ & vị trí trong câu:** `countable noun`. Thường đi kèm với `edit`, `parse`, `update`, `store`.

**Core meaning — English:** A text-based file that contains parameters, environment settings, and preferences used to control the behavior and execution of a software application or operating system.

**Core meaning & mental image — Tiếng Việt:** Giống như cuốn sổ tay hướng dẫn cài đặt bảng điều khiển của một cỗ máy: nó ghi rõ điện áp hoạt động, cổng kết nối, chế độ ban ngày hay ban đêm, giúp phần mềm biết cách khởi chạy mà không cần sửa code bên trong.

**Grammar & collocations:** `edit the configuration file` — chỉnh sửa tệp cấu hình; `store in a configuration file` — lưu trong tệp cấu hình; `configuration file syntax` — cú pháp tệp cấu hình.

**Register & nuance:** Thường có định dạng văn bản dễ đọc như JSON, YAML, hoặc INI; tách biệt cấu hình khỏi mã nguồn là nguyên tắc cốt lõi giúp phần mềm dễ thích ứng với các môi trường khác nhau.

**Linking:** `system setting` — cài đặt hệ thống; `environment variable` — biến môi trường; `app manifest` — tệp kê khai ứng dụng.

**Examples:** `Always check the configuration file before deploying an application to avoid using incorrect database credentials.` → Luôn kiểm tra tệp cấu hình trước khi triển khai ứng dụng để tránh sử dụng sai thông tin xác thực cơ sở dữ liệu.

**Liên kết tiếng Hàn:** `설정 파일` — tệp cấu hình.

---

## 13. software dependency /ˈsɔftˌwer dɪˈpendənsi/

**Loại từ & vị trí trong câu:** `countable noun`. Thường dùng số nhiều (`software dependencies`) khi nói về toàn bộ thư viện hoặc gói mã nguồn đi kèm.

**Core meaning — English:** An external software library, package, or module that a program relies on in order to execute its functions properly.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung bạn đang lắp ráp một chiếc bàn thông minh: bạn tự làm mặt bàn gỗ, nhưng các con ốc vít và bản lề lò xo bạn phải mua từ bên ngoài. Nếu con ốc bên ngoài bị gãy hoặc ngừng sản xuất, chiếc bàn của bạn không thể hoạt động được.

**Grammar & collocations:** `manage software dependencies` — quản lý các phần phụ thuộc phần mềm; `update software dependencies` — cập nhật các thư viện phụ thuộc; `outdated software dependency` — phần phụ thuộc phần mềm lỗi thời.

**Register & nuance:** Giúp lập trình viên tiết kiệm thời gian không phải tự viết lại mọi thuật toán từ đầu, nhưng cũng tiềm ẩn rủi ro nếu bên thứ ba phát sinh lỗi hoặc chứa lỗ hổng bảo mật.

**Linking:** `third-party library` — thư viện của bên thứ ba; `package manager` — trình quản lý gói; `framework` — bộ khung làm việc.

**Examples:** `The engineering team audited every software dependency to make sure there were no security vulnerabilities.` → Nhóm kỹ thuật đã kiểm tra từng phần phụ thuộc phần mềm để đảm bảo không có lỗ hổng bảo mật nào.

**Liên kết tiếng Hàn:** `소프트웨어 의존성` — sự phụ thuộc phần mềm.

---

## 14. staging environment /ˈsteɪdʒɪŋ ɪnˌvaɪrənmənt/

**Loại từ & vị trí trong câu:** `countable noun`. Thường đi với giới từ `in`: `in the staging environment`, hoặc sau `test in`, `deploy to`.

**Core meaning — English:** A testing server environment that closely mirrors the real production setup, used to evaluate code, database migrations, and configurations before releasing them to actual customers.

**Core meaning & mental image — Tiếng Việt:** Giống như buổi tổng duyệt trang phục trên sân khấu trước đêm diễn chính thức: ánh sáng, âm thanh, đạo cụ được bày trí giống hệt như thật để diễn viên phát hiện sai sót mà không sợ bị khán giả phán xét.

**Grammar & collocations:** `deploy to the staging environment` — triển khai lên môi trường chạy thử staging; `test in a staging environment` — thử nghiệm trong môi trường staging; `staging environment replication` — việc tái hiện môi trường staging.

**Register & nuance:** Khác với `development environment` (môi trường máy cá nhân của lập trình viên) và `production environment` (môi trường phục vụ khách hàng thực tế); staging là chốt chặn kiểm định chất lượng cuối cùng.

**Linking:** `testing sandbox` — hộp cát thử nghiệm; `QA environment` — môi trường kiểm thử chất lượng; `test environment` — môi trường thử nghiệm.

**Examples:** `Before making the update public, the developers tested the payment feature in the staging environment.` → Trước khi công khai bản cập nhật, các nhà phát triển đã kiểm tra tính năng thanh toán trong môi trường chạy thử staging.

**Liên kết tiếng Hàn:** `스테이징 환경` — môi trường staging/chạy thử.

---

## 15. production environment /prəˈdʌkʃən ɪnˌvaɪrənmənt/

**Loại từ & vị trí trong câu:** `countable noun`. Thường dùng với giới từ `in` hoặc `to`: `in the production environment`, `deploy to production`.

**Core meaning — English:** The live, real-time computing environment where software applications are actively executed and accessed by end users and businesses.

**Core meaning & mental image — Tiếng Việt:** Giống như đêm diễn chính thức của một vở kịch trước hàng ngàn khán giả mua vé: mọi thứ phải chạy hoàn hảo, không có chỗ cho việc thử nghiệm hay ngắt quãng đột ngột.

**Grammar & collocations:** `release to the production environment` — phát hành lên môi trường thực tế; `production environment stability` — sự ổn định của môi trường sản xuất; `live production environment` — môi trường vận hành thực tế.

**Register & nuance:** Trong ngành công nghệ thường được gọi ngắn gọn là "production" hoặc "prod" (ví dụ: `break prod`). Việc can thiệp trực tiếp vào production luôn đòi hỏi quy trình phê duyệt nghiêm ngặt.

**Linking:** `live environment` — môi trường trực tiếp; `staging server` — máy chủ thử nghiệm; `production server` — máy chủ vận hành chính.

**Examples:** `A bug in the production environment can instantly disrupt thousands of active customers.` → Một lỗi trong môi trường thực tế có thể ngay lập tức làm gián đoạn hàng ngàn khách hàng đang hoạt động.

**Liên kết tiếng Hàn:** `프로덕션 환경`, `운영 환경` — môi trường vận hành thực tế/sản xuất.

---

## 16. automated deployment /ˈɔtəˌmeɪtəd dɪˈplɔɪmənt/

**Loại từ & vị trí trong câu:** `noun phrase`. Thường đi với `set up`, `trigger`, `implement`, `streamline`.

**Core meaning — English:** The process of releasing software updates to servers using automated scripts and pipelines rather than manual human steps.

**Core meaning & mental image — Tiếng Việt:** Giống như dây chuyền đóng gói tự động trong nhà máy: lập trình viên chỉ cần bấm nút nộp bản vẽ đã hoàn thành, máy móc sẽ tự động kiểm tra chất lượng, đóng hộp và vận chuyển sản phẩm lên kệ hàng mà con người không cần can thiệp từng bước.

**Grammar & collocations:** `trigger automated deployment` — kích hoạt triển khai tự động; `automated deployment pipeline` — quy trình triển khai tự động; `implement automated deployment` — triển khai tự động hóa.

**Register & nuance:** Giảm thiểu sai sót do con người (human error), rút ngắn thời gian phát hành từ vài ngày xuống vài phút, và tăng độ tin cậy của quy trình phân phối sản phẩm số.

**Linking:** `continuous delivery` — phân phối liên tục; `manual release` — phát hành thủ công; `deployment pipeline` — quy trình triển khai.

**Examples:** `By adopting automated deployment, the engineering team can deliver bug fixes multiple times a day.` → Bằng cách áp dụng triển khai tự động, nhóm kỹ thuật có thể bàn giao các bản sửa lỗi nhiều lần mỗi ngày.

**Liên kết tiếng Hàn:** `자동 배포` — triển khai tự động.

---

## 17. health check /ˈhelθ tʃek/

**Loại từ & vị trí trong câu:** `countable noun`. Thường dùng trong kiến trúc mạng, máy chủ và ứng dụng phân tán.

**Core meaning — English:** An automated periodic test or request sent to an application or server to confirm whether it is running correctly and ready to receive traffic.

**Core meaning & mental image — Tiếng Việt:** Tương tự như việc bác sĩ định kỳ bắt mạch cho bệnh nhân: hệ thống tự động gõ cửa máy chủ mỗi 5 giây hỏi "Bạn vẫn khỏe chứ?", nếu máy chủ trả lời bình thường thì lưu lượng tiếp tục được chuyển đến; nếu im lặng, hệ thống sẽ ngắt kết nối ngay.

**Grammar & collocations:** `perform a health check` — thực hiện kiểm tra tình trạng; `health-check endpoint` — điểm cuối kiểm tra trạng thái; `fail a health check` — trượt bài kiểm tra trạng thái.

**Register & nuance:** Là cơ chế cốt lõi giúp các bộ cân bằng tải (load balancers) phát hiện và tự động cách ly các nút máy chủ bị treo hoặc gặp sự cố quá tải.

**Linking:** `ping test` — kiểm tra kết nối mạng đơn giản; `status check` — kiểm tra trạng thái; `liveness test` — kiểm tra mức độ hoạt động.

**Examples:** `If an instance fails its health check three times in a row, the load balancer removes it from service.` → Nếu một máy chủ ảo không vượt qua kiểm tra tình trạng ba lần liên tiếp, bộ cân bằng tải sẽ loại nó khỏi dịch vụ.

**Liên kết tiếng Hàn:** `헬스 체크`, `상태 점검` — kiểm tra tình trạng/sức khỏe hệ thống.

---

## 18. monitoring tool /ˈmɑnɪtərɪŋ tuːl/

**Loại từ & vị trí trong câu:** `countable noun`. Thường dùng ở số nhiều hoặc đi với `configure`, `use`, `alert`.

**Core meaning — English:** A software application that continuously observes system performance, server metrics, network health, and error rates to alert teams to potential problems.

**Core meaning & mental image — Tiếng Việt:** Bảng đồng hồ đo và còi báo động trong buồng lái máy bay: nó liên tục hiển thị tốc độ, độ cao, nhiệt độ động cơ và réo chuông ngay khi có bất kỳ thông số nào vượt quá ngưỡng an toàn.

**Grammar & collocations:** `use a monitoring tool` — dùng công cụ giám sát; `monitoring tool alert` — cảnh báo từ công cụ giám sát; `set up monitoring tools` — thiết lập các công cụ giám sát.

**Register & nuance:** Cung cấp góc nhìn thời gian thực về tình trạng sức khỏe của hạ tầng phần mềm, cho phép đội ngũ kỹ thuật xử lý sự cố trước khi người dùng thực tế phát hiện ra.

**Linking:** `observability platform` — nền tảng quan sát chuyên sâu; `dashboard` — bảng điều khiển dữ liệu; `alerting system` — hệ thống cảnh báo.

**Examples:** `The DevOps engineers rely on a real-time monitoring tool to detect sudden spikes in CPU usage.` → Các kỹ sư DevOps dựa vào một công cụ giám sát thời gian thực để phát hiện sự tăng đột biến trong mức sử dụng CPU.

**Liên kết tiếng Hàn:** `모니터링 도구` — công cụ giám sát.

---

## 19. system outage /ˈsɪstəm ˈaʊtɪdʒ/

**Loại từ & vị trí trong câu:** `countable noun`. Thường đi với `suffer`, `experience`, `cause`, `investigate`.

**Core meaning — English:** A period during which a computer system, cloud service, or network is completely unavailable or unable to provide its normal functionality.

**Core meaning & mental image — Tiếng Việt:** Giống như sự cố mất điện toàn thành phố: mọi bóng đèn vụt tắt, giao thông đình trệ và mọi hoạt động bình thường đều bị ngắt quãng hoàn toàn cho đến khi nguồn điện được khôi phục.

**Grammar & collocations:** `suffer a system outage` — chịu một đợt ngừng hoạt động hệ thống; `major system outage` — sự cố mất hệ thống nghiêm trọng; `recover from a system outage` — khôi phục sau sự cố mất hệ thống.

**Register & nuance:** Thường mang tính nghiêm trọng và quy mô lớn hơn một lỗi phần mềm nhỏ cục bộ; gây thiệt hại trực tiếp về tài chính, uy tín thương hiệu và sự gián đoạn của khách hàng.

**Linking:** `service disruption` — gián đoạn dịch vụ; `blackout` — mất điện/mất tín hiệu hoàn toàn; `service breakdown` — sự cố hỏng hóc dịch vụ.

**Examples:** `A network hardware failure caused a four-hour system outage that affected millions of users worldwide.` → Lỗi phần cứng mạng đã gây ra sự cố ngừng hệ thống kéo dài bốn giờ, ảnh hưởng đến hàng triệu người dùng trên toàn cầu.

**Liên kết tiếng Hàn:** `시스템 중단`, `시스템 장애` — sự cố gián đoạn/ngừng hệ thống.

---

## 20. downtime /ˈdaʊnˌtaɪm/

**Loại từ & vị trí trong câu:** `uncountable noun`. Thường đi kèm với `reduce`, `minimize`, `prevent`, `unplanned`.

**Core meaning — English:** The period of time during which a computer system, server, or digital service is not functioning or is unavailable for use.

**Core meaning & mental image — Tiếng Việt:** Thời gian mà chiếc máy dừng bánh, kim đồng hồ đứng yên và doanh nghiệp không thể sản xuất hay phục vụ khách hàng. Thời gian ngừng hoạt động càng dài thì thiệt hại kinh tế càng lớn.

**Grammar & collocations:** `minimize downtime` — giảm thiểu thời gian chết; `unplanned downtime` — thời gian ngừng hoạt động ngoài dự kiến; `cost of downtime` — chi phí của thời gian ngừng hoạt động.

**Register & nuance:** Có thể chia thành `planned downtime` (ngừng có kế hoạch để nâng cấp) và `unplanned downtime` (ngừng đột ngột do hỏng hóc); mục tiêu hàng đầu của hạ tầng tin cậy là giảm unplanned downtime về mức tối thiểu.

**Linking:** `idle time` — thời gian rảnh rỗi/chờ đợi; `outage duration` — thời lượng ngừng hệ thống; `business disruption` — gián đoạn kinh doanh.

**Examples:** `The company invested in redundant servers to minimize downtime during database upgrades.` → Công ty đã đầu tư vào các máy chủ dự phòng để giảm thiểu thời gian chết trong quá trình nâng cấp cơ sở dữ liệu.

**Liên kết tiếng Hàn:** `다운타임`, `가동 중단 시간` — thời gian ngừng hoạt động/thời gian chết.

---

## 21. uptime /ˈʌpˌtaɪm/

**Loại từ & vị trí trong câu:** `uncountable noun`. Thường đi với `guarantee`, `measure`, `percentage`, `maintain`.

**Core meaning — English:** The amount or percentage of time that a computer system, server, or cloud service remains continuously operational, accessible, and working properly.

**Core meaning & mental image — Tiếng Việt:** Giống như chỉ số sức bền của một cỗ máy phát điện: cỗ máy hoạt động bền bỉ suốt 99.9% thời gian mà không bị hỏng hóc hay dừng giữa chừng. Uptime càng cao chứng tỏ hệ thống càng bền bỉ và đáng tin cậy.

**Grammar & collocations:** `guarantee 99.9% uptime` — cam kết thời gian hoạt động 99.9%; `high uptime` — thời gian hoạt động liên tục cao; `track server uptime` — theo dõi thời gian hoạt động của máy chủ.

**Register & nuance:** Là đối nghịch trực tiếp của `downtime`; là con số định lượng quan trọng nhất trong các cam kết chất lượng dịch vụ (SLA) giữa khách hàng và nhà cung cấp công nghệ.

**Linking:** `system availability` — tính sẵn sàng của hệ thống; `operational readiness` — mức độ sẵn sàng vận hành; `service reliability` — độ tin cậy của dịch vụ.

**Examples:** `The cloud provider offers a financial credit if their monthly uptime falls below ninety-nine percent.` → Nhà cung cấp đám mây sẽ hoàn lại tiền nếu tỷ lệ thời gian hoạt động hằng tháng của họ giảm xuống dưới 99%.

**Liên kết tiếng Hàn:** `가동 시간`, `업타임` — thời gian vận hành bình thường.

---

## 22. failover /ˈfeɪlˌoʊvər/

**Loại từ & vị trí trong câu:** `uncountable noun` hoặc `countable noun` (cũng dùng như cụm động từ `fail over`).

**Core meaning — English:** An automated backup procedure that immediately switches system operations to a standby server, network, or database when the primary system encounters a failure.

**Core meaning & mental image — Tiếng Việt:** Giống như phi công phụ lập tức nắm lấy cần lái máy bay ngay giây phút cơ trưởng ngất xỉu, máy bay không hề chao đảo hay rơi một mét nào mà vẫn giữ nguyên lộ trình bay ổn định.

**Grammar & collocations:** `automatic failover` — chuyển đổi dự phòng tự động; `failover mechanism` — cơ chế chuyển đổi dự phòng; `trigger a failover` — kích hoạt chuyển đổi dự phòng.

**Register & nuance:** Đòi hỏi cấu hình đồng bộ dữ liệu liên tục để quá trình chuyển giao diễn ra mượt mà và không làm mất phiên làm việc của người dùng khi sự cố xảy ra.

**Linking:** `redundancy` — tính dự phòng; `standby server` — máy chủ dự phòng chờ sẵn; `system recovery` — khôi phục hệ thống.

**Examples:** `When the main database crashed, the automatic failover switched all traffic to the secondary server within seconds.` → Khi cơ sở dữ liệu chính bị sập, cơ chế chuyển đổi dự phòng tự động đã chuyển toàn bộ lưu lượng sang máy chủ phụ chỉ trong vài giây.

**Liên kết tiếng Hàn:** `장애 조치`, `페일오버` — chuyển đổi dự phòng khi gặp sự cố.

---

## 23. rollback /ˈroʊlˌbæk/

**Loại từ & vị trí trong câu:** `noun` (countable/uncountable) hoặc `transitive verb` (viết tách thành `roll back`).

**Core meaning — English:** An operation that restores a database, application, or system to a previous stable state, typically after an update introduces critical defects.

**Core meaning & mental image — Tiếng Việt:** Giống như thao tác hoàn tác "Ctrl + Z" trên quy mô toàn hệ thống máy chủ: bản cập nhật mới vừa tung ra bị lỗi nghiêm trọng, bạn lập tức tua ngược thời gian đưa hệ thống trở lại trạng thái hoạt động hoàn hảo trước đó.

**Grammar & collocations:** `initiate a rollback` — khởi động quay lại phiên bản trước; `perform a rollback` — thực hiện tua lại; `rollback plan` — kế hoạch hoàn tác/quay lại.

**Register & nuance:** Luôn là một bước bắt buộc trong mọi kế hoạch triển khai nghiêm túc: trước khi tung bản cập nhật mới, đội ngũ kỹ thuật luôn phải chuẩn bị sẵn đường lùi phòng khi xảy ra rủi ro.

**Linking:** `version revert` — khôi phục phiên bản; `system restore` — khôi phục hệ thống; `undo operation` — thao tác hoàn tác.

**Examples:** `Because the new update caused checkout errors, the engineers decided to initiate an immediate rollback.` → Vì bản cập nhật mới gây lỗi thanh toán, các kỹ sư đã quyết định khởi động việc quay lại phiên bản cũ ngay lập tức.

**Liên kết tiếng Hàn:** `롤백`, `이전 상태로 복원` — hoàn tác/quay lại trạng thái trước.

---

## 24. hotfix /ˈhɑtˌfɪks/

**Loại từ & vị trí trong câu:** `countable noun` (cũng có thể dùng làm `transitive verb`). Thường đi kèm với `deploy`, `release`, `issue`.

**Core meaning — English:** A quick, targeted software patch designed to resolve a critical bug or vulnerability immediately in a live production system without waiting for the next regular release cycle.

**Core meaning & mental image — Tiếng Việt:** Giống như việc đội cứu hộ dán một miếng băng cứu thương đặc biệt lên vết nứt của ống dẫn nước đang phun trào giữa giờ cao điểm: xử lý ngay lập tức tại chỗ sự cố hiểm hóc mà không cần đợi đến lịch đại tu toàn diện vào cuối tháng.

**Grammar & collocations:** `deploy a hotfix` — triển khai bản vá khẩn cấp; `emergency hotfix` — bản vá nóng khẩn cấp; `release a hotfix` — phát hành bản vá nóng.

**Register & nuance:** `Hotfix` khác với bản cập nhật thông thường (`minor release` hay `scheduled update`) ở tính cấp bách và phạm vi hẹp; nó chỉ nhắm trúng một lỗi nguy hiểm cần sửa ngay lập tức để giữ hệ thống chạy ổn định.

**Linking:** `emergency patch` — bản vá khẩn cấp; `bug fix` — sửa lỗi; `quick fix` — cách sửa nhanh tạm thời.

**Examples:** `The security team released an emergency hotfix to close a critical vulnerability discovered in the authentication module.` → Nhóm bảo mật đã phát hành một bản vá khẩn cấp để vá một lỗ hổng nghiêm trọng được phát hiện trong mô-đun xác thực.

**Liên kết tiếng Hàn:** `핫픽스`, `긴급 패치` — bản vá khẩn cấp/nóng.

---

## 25. scheduled maintenance /ˈskedʒuːld ˈmeɪntənəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường đi với `undergo`, `announce`, `perform`, `conduct`.

**Core meaning — English:** Pre-planned service adjustments or temporary system downtime carried out at a specific time to inspect, upgrade, or repair hardware, databases, or software components.

**Core meaning & mental image — Tiếng Việt:** Giống như lịch đóng cửa cây cầu vượt vào lúc 2 giờ sáng Chủ Nhật để thợ sơn và kỹ sư siết lại bu lông: người dân đã được thông báo trước, thời gian thực hiện rơi vào lúc vắng người nhất để giảm thiểu tối đa sự bất tiện.

**Grammar & collocations:** `undergo scheduled maintenance` — trải qua bảo trì theo lịch trình; `scheduled maintenance window` — khung giờ bảo trì định kỳ; `announce scheduled maintenance` — thông báo bảo trì theo lịch.

**Register & nuance:** Khác với sự cố bất ngờ (`unplanned outage`); bảo trì theo lịch được lên kế hoạch cẩn thận, thông báo cho khách hàng từ trước và thường diễn ra vào đêm muộn hoặc cuối tuần khi lưu lượng truy cập thấp nhất.

**Linking:** `routine maintenance` — bảo trì thường kỳ; `maintenance window` — khung giờ bảo trì; `service interruption` — gián đoạn dịch vụ.

**Examples:** `The banking portal will be unavailable this Sunday from 2 AM to 4 AM due to scheduled maintenance.` → Cổng ngân hàng điện tử sẽ tạm ngưng hoạt động vào Chủ Nhật tuần này từ 2 giờ đến 4 giờ sáng để phục vụ việc bảo trì theo lịch trình.

**Liên kết tiếng Hàn:** `정기 점검`, `예정된 유지보수` — bảo trì định kỳ/theo lịch trình.

---

## Review in Context

### Passage 1: Modernizing the Architecture

When the retail company decided to adopt **cloud hosting**, leadership knew the transition would require a comprehensive **cloud migration** plan. For years, the business had relied on an aging **legacy system** that accumulated massive amounts of **technical debt**, making simple product updates risky and time-consuming. Engineers began separating the monolithic core into modular components, isolating each critical **backend service**. They realized that holiday sales frequently strained existing **server capacity**, creating severe bottlenecks whenever a sudden **traffic spike** occurred. To solve this problem, they installed an intelligent **load balancer** to evenly distribute user requests across multiple availability zones, thereby guaranteeing **high availability** even under peak loads. For storage reliability, the team instituted strict **data redundancy** standards backed by real-time **data replication** to safeguard records against hardware failure. Finally, developers cleaned up every messy **configuration file** and audited each external **software dependency** to eliminate potential security holes before the grand launch.

*Bản dịch tiếng Việt:*

Khi công ty bán lẻ quyết định áp dụng **lưu trữ đám mây (cloud hosting)**, ban lãnh đạo biết rằng quá trình chuyển đổi này sẽ đòi hỏi một kế hoạch **di chuyển lên đám mây (cloud migration)** toàn diện. Trong nhiều năm, doanh nghiệp đã phụ thuộc vào một **hệ thống cũ (legacy system)** tích lũy một lượng lớn **nợ kỹ thuật (technical debt)**, khiến việc cập nhật sản phẩm đơn giản cũng trở nên rủi ro và tốn thời gian. Các kỹ sư bắt đầu chia tách khối kiến trúc nguyên khối thành các mô-đun, cô lập từng **dịch vụ backend (backend service)** quan trọng. Họ nhận thấy rằng các đợt bán hàng dịp lễ thường xuyên làm căng thẳng **sức tải máy chủ (server capacity)** hiện tại, tạo ra các điểm nghẽn nghiêm trọng mỗi khi có một đợt **lưu lượng tăng vọt (traffic spike)** bất ngờ xảy ra. Để giải quyết vấn đề này, họ đã thiết lập một **bộ cân bằng tải (load balancer)** thông minh nhằm phân phối đồng đều các yêu cầu của người dùng qua nhiều vùng khả dụng, nhờ đó đảm bảo **tính sẵn sàng cao (high availability)** ngay cả dưới mức tải đỉnh điểm. Về độ tin cậy lưu trữ, nhóm đã thiết lập các tiêu chuẩn **dự phòng dữ liệu (data redundancy)** nghiêm ngặt được hỗ trợ bởi cơ chế **nhân bản dữ liệu (data replication)** theo thời gian thực để bảo vệ hồ sơ trước sự cố phần cứng. Cuối cùng, các nhà phát triển đã dọn dẹp từng **tệp cấu hình (configuration file)** lộn xộn và kiểm tra từng **phần phụ thuộc phần mềm (software dependency)** bên ngoài để loại bỏ các lỗ hổng bảo mật tiềm ẩn trước ngày ra mắt lớn.

### Passage 2: Resilient Deployment and Operations

To ensure stable operations, engineering teams test every release in an isolated **staging environment** before deploying code to the live **production environment**. Through a modern continuous delivery pipeline, an **automated deployment** workflow pushes updates seamlessly without manual mistakes. As soon as new instances spin up, an automated **health check** verifies that background containers are fully functional. In the operations center, engineers observe metrics using an advanced **monitoring tool** that alerts them long before any minor issue turns into a catastrophic **system outage**. Their primary operational objective is to eliminate unplanned **downtime** and maintain a ninety-nine point nine percent **uptime** agreement for enterprise clients. If a primary server ever fails, an instantaneous **failover** mechanism automatically redirects traffic to a warm standby backup. Should a faulty build slip through quality controls, the team can initiate an immediate **rollback** to restore the previous stable version. For urgent security vulnerabilities, they quickly deploy a targeted **hotfix**, while major infrastructure upgrades are reserved for pre-announced **scheduled maintenance** during off-peak hours.

*Bản dịch tiếng Việt:*

Để đảm bảo vận hành ổn định, các nhóm kỹ thuật kiểm tra mọi bản phát hành trong một **môi trường thử nghiệm (staging environment)** biệt lập trước khi triển khai mã lên **môi trường vận hành thực tế (production environment)**. Thông qua quy trình phân phối liên tục hiện đại, một quy trình **triển khai tự động (automated deployment)** đẩy các bản cập nhật một cách mượt mà mà không có lỗi sai thủ công. Ngay khi các máy chủ ảo mới khởi chạy, một quy trình **kiểm tra tình trạng (health check)** tự động sẽ xác minh rằng các container nền đang hoạt động bình thường. Tại trung tâm vận hành, các kỹ sư quan sát các chỉ số bằng một **công cụ giám sát (monitoring tool)** tiên tiến giúp cảnh báo họ từ rất lâu trước khi bất kỳ vấn đề nhỏ nào biến thành một **sự cố ngừng hoạt động hệ thống (system outage)** thảm khốc. Mục tiêu vận hành hàng đầu của họ là xóa bỏ **thời gian chết (downtime)** ngoài dự kiến và duy trì cam kết **thời gian hoạt động ổn định (uptime)** 99.9% cho các khách hàng doanh nghiệp. Nếu máy chủ chính gặp sự cố, cơ chế **chuyển đổi dự phòng (failover)** tức thời sẽ tự động chuyển hướng lưu lượng truy cập sang máy chủ dự phòng đang chờ sẵn. Nếu một bản dựng lỗi lọt qua khâu kiểm soát chất lượng, nhóm có thể khởi động ngay lập tức một quy trình **quay lại phiên bản trước (rollback)** để khôi phục phiên bản ổn định trước đó. Đối với các lỗ hổng bảo mật cấp bách, họ nhanh chóng triển khai một **bản vá khẩn cấp (hotfix)** trúng đích, trong khi các đợt nâng cấp hạ tầng lớn được dành riêng cho khung giờ **bảo trì theo lịch trình (scheduled maintenance)** đã được thông báo trước vào các khung giờ thấp điểm.
