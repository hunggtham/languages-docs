# C1 Vocabulary 01 — Deployment, resilience, and operations

Nhóm từ này mô tả cách hệ thống cloud được chia nhỏ, triển khai an toàn và duy trì hoạt động khi có lỗi.

## 1. serverless architecture /ˈsɜrvərləs ˈɑrkəˌtektʃər/

**Loại từ & vị trí trong câu:** `countable noun phrase` — kiến trúc trong đó nhà cung cấp chạy hạ tầng máy chủ, còn nhóm tập trung vào mã và sự kiện.

**Core meaning — English:** An architecture in which a provider runs the server infrastructure while teams focus on code and events.

**Core meaning & mental image — Tiếng Việt:** Người phát triển gọi một chức năng khi cần mà không tự quản lý máy chủ luôn bật.

**Grammar & collocations:** `serverless-architecture pattern`, `serverless function`, `adopt serverless architecture`.

**Register & nuance:** Serverless không có nghĩa không có máy chủ; nó chuyển phần vận hành máy chủ sang nhà cung cấp.

**Example:** `Serverless architecture reduced the team’s infrastructure workload.` → Kiến trúc serverless giảm khối lượng hạ tầng đội phải vận hành.

**Liên kết tiếng Hàn:** `서버리스 아키텍처` — kiến trúc serverless.

## 2. microservices /ˈmaɪkroʊˌsɜrvəsɪz/

**Loại từ & vị trí trong câu:** `plural noun` — kiến trúc chia ứng dụng thành các dịch vụ nhỏ, triển khai và phát triển tương đối độc lập.

**Core meaning — English:** An architecture that divides an application into small services developed and deployed relatively independently.

**Core meaning & mental image — Tiếng Việt:** Một tòa nhà lớn tách thành nhiều căn có cửa, chủ và nhịp sửa riêng nhưng vẫn phải nối với nhau.

**Grammar & collocations:** `microservices architecture`, `microservices boundary`, `migrate to microservices`.

**Register & nuance:** Microservices tăng tính độc lập nhưng thêm chi phí mạng, quan sát, dữ liệu phân tán và phối hợp.

**Example:** `Microservices allowed the payments team to release independently.` → Microservices cho phép nhóm thanh toán phát hành độc lập.

**Liên kết tiếng Hàn:** `마이크로서비스` — microservices.

## 3. service mesh /ˈsɜrvəs meʃ/

**Loại từ & vị trí trong câu:** `countable noun phrase` — lớp hạ tầng quản lý giao tiếp giữa các dịch vụ, thường xử lý định tuyến, mã hóa và quan sát.

**Core meaning — English:** An infrastructure layer that manages communication among services, including routing, encryption, and observability.

**Core meaning & mental image — Tiếng Việt:** Một mạng lưới đường và trạm điều phối nằm giữa các dịch vụ thay vì viết mọi điều khiển vào ứng dụng.

**Grammar & collocations:** `service-mesh proxy`, `service-mesh policy`, `deploy a service mesh`.

**Register & nuance:** Mesh giải quyết vấn đề giao tiếp nhưng thêm lớp phức tạp vận hành và chẩn đoán.

**Example:** `The service mesh enforced encryption between internal services.` → Service mesh áp dụng mã hóa giữa các dịch vụ nội bộ.

**Liên kết tiếng Hàn:** `서비스 메시` — service mesh.

## 4. infrastructure as code /ˈɪnfrəˌstrʌktʃər æz koʊd/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — cách định nghĩa và quản lý máy chủ, mạng và quyền truy cập bằng tệp mã có thể kiểm soát phiên bản.

**Core meaning — English:** Managing servers, networks, and access through version-controlled code files.

**Core meaning & mental image — Tiếng Việt:** Hạ tầng trở thành bản thiết kế có thể đọc, xem xét, tái tạo và hoàn nguyên.

**Grammar & collocations:** `infrastructure-as-code tool`, `infrastructure-as-code repository`, `manage infrastructure as code`.

**Register & nuance:** IaC tăng khả năng lặp lại nhưng mã hạ tầng vẫn cần kiểm tra bí mật, quyền và thay đổi nguy hiểm.

**Example:** `Infrastructure as code made the test environment reproducible.` → Hạ tầng dưới dạng mã khiến môi trường kiểm thử có thể tái tạo.

**Liên kết tiếng Hàn:** `코드형 인프라` — hạ tầng dưới dạng mã.

## 5. autoscaling /ˌɔtoʊˈskeɪlɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun` — việc tự động tăng hoặc giảm tài nguyên theo tải hoặc nhu cầu.

**Core meaning — English:** The automatic increase or decrease of computing resources in response to load or demand.

**Core meaning & mental image — Tiếng Việt:** Hệ thống tự mở thêm quầy khi hàng dài và đóng bớt khi khách vắng.

**Grammar & collocations:** `autoscaling policy`, `horizontal autoscaling`, `configure autoscaling`.

**Register & nuance:** Autoscaling cần tín hiệu, giới hạn và thời gian khởi động phù hợp; tự động không có nghĩa phản ứng tức thời.

**Example:** `Autoscaling handled the traffic spike during the launch.` → Tự động co giãn xử lý đợt tăng lưu lượng khi ra mắt.

**Liên kết tiếng Hàn:** `자동 확장` — tự động co giãn.

## 6. observability /əbˌzɜrvəˈbɪləti/

**Loại từ & vị trí trong câu:** `uncountable noun` — khả năng hiểu trạng thái bên trong hệ thống từ dữ liệu đầu ra như log, metric và trace.

**Core meaning — English:** The ability to understand a system’s internal state from outputs such as logs, metrics, and traces.

**Core meaning & mental image — Tiếng Việt:** Không chỉ thấy đèn báo đỏ mà lần được đường đi của một yêu cầu qua cả hệ thống.

**Grammar & collocations:** `system observability`, `observability platform`, `improve observability`.

**Register & nuance:** Observability rộng hơn monitoring; nó giúp đặt câu hỏi mới về hành vi chưa dự đoán trước.

**Example:** `Better observability shortened the time needed to diagnose failures.` → Quan sát tốt hơn rút ngắn thời gian chẩn đoán lỗi.

**Liên kết tiếng Hàn:** `관측 가능성`, `옵저버빌리티` — khả năng quan sát hệ thống.

## 7. fault tolerance /fɔlt ˈtɑlərəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — khả năng hệ thống tiếp tục cung cấp dịch vụ dù một số thành phần bị lỗi.

**Core meaning — English:** The ability of a system to continue providing service despite failures in some components.

**Core meaning & mental image — Tiếng Việt:** Một chiếc cầu vẫn thông xe khi một làn bị đóng nhờ có đường thay thế.

**Grammar & collocations:** `fault-tolerant design`, `fault-tolerance mechanism`, `improve fault tolerance`.

**Register & nuance:** Fault tolerance khác disaster recovery: nó xử lý lỗi trong khi dịch vụ đang chạy, không chỉ phục hồi sau thảm họa.

**Example:** `Replication improved fault tolerance in the database.` → Nhân bản cải thiện khả năng chịu lỗi của cơ sở dữ liệu.

**Liên kết tiếng Hàn:** `내결함성` — khả năng chịu lỗi.

## 8. availability zone /əˌveɪləˈbɪləti zoʊn/

**Loại từ & vị trí trong câu:** `countable noun phrase` — khu vực hạ tầng độc lập tương đối trong một vùng cloud, được thiết kế để giảm ảnh hưởng lỗi cục bộ.

**Core meaning — English:** A relatively independent infrastructure area within a cloud region, designed to limit local failures.

**Core meaning & mental image — Tiếng Việt:** Nhiều khu nhà có điện và mạng riêng để một khu gặp sự cố không kéo cả thành phố xuống.

**Grammar & collocations:** `multi-zone deployment`, `availability-zone failure`, `spread across zones`.

**Register & nuance:** Zone tăng khả năng sẵn sàng nhưng không thay thế sao lưu hoặc kế hoạch khôi phục khu vực rộng hơn.

**Example:** `The database was replicated across two availability zones.` → Cơ sở dữ liệu được nhân bản qua hai vùng sẵn sàng.

**Liên kết tiếng Hàn:** `가용 영역` — vùng sẵn sàng.

## 9. disaster recovery /dɪˈzæstər rɪˈkʌvəri/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — kế hoạch và khả năng khôi phục hệ thống, dữ liệu và hoạt động sau sự cố nghiêm trọng.

**Core meaning — English:** The plans and capabilities for restoring systems, data, and operations after a major disruption.

**Core meaning & mental image — Tiếng Việt:** Một bộ sơ đồ và bản sao giúp thành phố số hoạt động lại sau cháy, lũ hoặc tấn công.

**Grammar & collocations:** `disaster-recovery plan`, `disaster-recovery site`, `test disaster recovery`.

**Register & nuance:** Kế hoạch phải được diễn tập; tài liệu chưa bao giờ thử có thể không phục hồi được khi cần.

**Example:** `The team tested disaster recovery after migrating the database.` → Nhóm kiểm thử khôi phục thảm họa sau khi di chuyển cơ sở dữ liệu.

**Liên kết tiếng Hàn:** `재해 복구` — khôi phục thảm họa.

## 10. blue-green deployment /ˌbluː ɡriːn dɪˈplɔɪmənt/

**Loại từ & vị trí trong câu:** `countable noun phrase` — chiến lược duy trì hai môi trường giống nhau để chuyển lưu lượng từ bản cũ sang bản mới.

**Core meaning — English:** A deployment strategy that maintains two similar environments and switches traffic from the old version to the new one.

**Core meaning & mental image — Tiếng Việt:** Có hai sân khấu: bản mới diễn sau rèm, rồi đèn chuyển sang khi đã kiểm tra.

**Grammar & collocations:** `blue-green deployment strategy`, `blue-green release`, `switch traffic`.

**Register & nuance:** Blue-green giúp hoàn nguyên nhanh nhưng cần nhân đôi hoặc gần nhân đôi tài nguyên trong thời gian chuyển đổi.

**Example:** `Blue-green deployment allowed an immediate rollback.` → Triển khai xanh-lam cho phép hoàn nguyên ngay lập tức.

**Liên kết tiếng Hàn:** `블루-그린 배포` — triển khai blue-green.

## 11. canary release /ˈkænəri rɪˈliːs/

**Loại từ & vị trí trong câu:** `countable noun phrase` — phát hành bản mới cho một nhóm nhỏ người dùng trước khi mở rộng.

**Core meaning — English:** A release made available to a small group of users before wider rollout.

**Core meaning & mental image — Tiếng Việt:** Thả một con chim mỏ vàng vào mỏ trước để xem môi trường có an toàn rồi mới đưa cả đoàn vào.

**Grammar & collocations:** `canary-release strategy`, `canary cohort`, `expand a canary release`.

**Register & nuance:** Canary giảm phạm vi sự cố nhưng cần chọn nhóm, chỉ số và điều kiện dừng rõ.

**Example:** `The canary release revealed a latency problem in one region.` → Bản phát hành canary cho thấy vấn đề độ trễ ở một vùng.

**Liên kết tiếng Hàn:** `카나리 릴리스` — phát hành canary.

## 12. immutable infrastructure /ɪˈmjuːtəbəl ˈɪnfrəˌstrʌktʃər/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — cách triển khai thay thế toàn bộ máy hoặc image bằng phiên bản mới thay vì sửa trực tiếp máy đang chạy.

**Core meaning — English:** An approach that replaces running machines or images with new versions instead of modifying them in place.

**Core meaning & mental image — Tiếng Việt:** Không sửa căn phòng đang có người; dựng căn phòng mới từ bản thiết kế chuẩn rồi chuyển vào.

**Grammar & collocations:** `immutable-infrastructure pattern`, `immutable image`, `deploy immutable infrastructure`.

**Register & nuance:** Immutable giảm drift và khác biệt khó thấy nhưng đòi hỏi pipeline, dữ liệu ngoài máy và rollback tốt.

**Example:** `Immutable infrastructure simplified rollback after the failed release.` → Hạ tầng bất biến đơn giản hóa hoàn nguyên sau bản phát hành lỗi.

**Liên kết tiếng Hàn:** `불변 인프라` — hạ tầng bất biến.

## 13. vendor lock-in /ˈvendər lɑk ɪn/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — tình trạng chuyển sang nhà cung cấp khác trở nên khó, đắt hoặc rủi ro vì phụ thuộc công nghệ.

**Core meaning — English:** Dependence on a provider that makes switching elsewhere difficult, costly, or risky.

**Core meaning & mental image — Tiếng Việt:** Hệ thống vừa xây xong nhưng chìa khóa, ngôn ngữ và đường ống đều chỉ vừa một nhà cung cấp.

**Grammar & collocations:** `avoid vendor lock-in`, `risk of lock-in`, `vendor-lock-in strategy`.

**Register & nuance:** Lock-in có thể đến từ API độc quyền, dữ liệu, kỹ năng, hợp đồng hoặc chi phí di chuyển.

**Example:** `Open standards reduced vendor lock-in.` → Tiêu chuẩn mở giảm phụ thuộc nhà cung cấp.

**Liên kết tiếng Hàn:** `벤더 종속` — phụ thuộc nhà cung cấp.

## 14. cloud-native /ˈklaʊd ˈneɪtɪv/

**Loại từ & vị trí trong câu:** `adjective` — được thiết kế để tận dụng tính đàn hồi, tự động hóa và mô hình phân tán của cloud.

**Core meaning — English:** Designed to exploit cloud elasticity, automation, and distributed operating models.

**Core meaning & mental image — Tiếng Việt:** Ngôi nhà được xây ngay cho địa hình cloud, không phải căn nhà cũ chỉ được đặt lên nền mới.

**Grammar & collocations:** `cloud-native application`, `cloud-native platform`, `cloud-native development`.

**Register & nuance:** Cloud-native là tập hợp nguyên tắc kiến trúc và vận hành, không đồng nghĩa chỉ chạy trên cloud công cộng.

**Example:** `The team rebuilt the service as a cloud-native application.` → Nhóm xây lại dịch vụ như một ứng dụng cloud-native.

**Liên kết tiếng Hàn:** `클라우드 네이티브` — cloud-native.

## 15. edge computing /edʒ kəmˈpjuːtɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — xử lý dữ liệu gần nơi tạo ra dữ liệu thay vì gửi toàn bộ về trung tâm cloud.

**Core meaning — English:** Processing data close to where it is generated rather than sending everything to a central cloud.

**Core meaning & mental image — Tiếng Việt:** Một trạm nhỏ cạnh máy móc xử lý tín hiệu tại chỗ trước khi gửi phần cần thiết đi xa.

**Grammar & collocations:** `edge-computing node`, `edge-computing architecture`, `deploy at the edge`.

**Register & nuance:** Edge giảm độ trễ và băng thông nhưng làm triển khai, bảo mật và cập nhật phân tán khó hơn.

**Example:** `Edge computing allowed the robot to react without a cloud round trip.` → Điện toán biên cho phép robot phản ứng mà không phải đi-về cloud.

**Liên kết tiếng Hàn:** `엣지 컴퓨팅` — điện toán biên.

## Review in context

A **serverless architecture** may use **microservices** and a **service mesh**, managed through **infrastructure as code** and **autoscaling**. Strong **observability** and **fault tolerance** help systems survive an **availability zone** failure, while **disaster recovery** restores operations. **Blue-green deployment** and a **canary release** reduce rollout risk; **immutable infrastructure** limits drift. A **cloud-native** design may still face **vendor lock-in**, and **edge computing** can reduce latency.

Một **kiến trúc serverless** có thể dùng **microservices** và **service mesh**, được quản lý bằng **hạ tầng dưới dạng mã** cùng **tự động co giãn**. **Khả năng quan sát** và **khả năng chịu lỗi** tốt giúp hệ thống sống qua sự cố **vùng sẵn sàng**, còn **khôi phục thảm họa** đưa hoạt động trở lại. **Triển khai blue-green** và **bản phát hành canary** giảm rủi ro phát hành; **hạ tầng bất biến** hạn chế drift. Thiết kế **cloud-native** vẫn có thể gặp **phụ thuộc nhà cung cấp**, còn **điện toán biên** có thể giảm độ trễ.
