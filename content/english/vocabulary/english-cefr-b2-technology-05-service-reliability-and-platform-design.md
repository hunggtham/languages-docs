# B2 Vocabulary — Service reliability and platform design

Chủ đề này đi theo flow: **reliability target → failure detection → capacity and dependencies → recovery → operational readiness**. Các cụm từ mô tả cách một dịch vụ số được thiết kế để hoạt động ổn định khi tải tăng hoặc thành phần gặp lỗi.

## 1. availability target /əˌveɪləˈbɪləti ˈtɑrɡət/

**Loại từ & vị trí trong câu:** `countable noun phrase` — mức độ thời gian một dịch vụ phải sẵn sàng theo mục tiêu đã đặt.

**Core meaning — English:** A defined level of service availability that a system is expected to achieve.

**Core meaning & mental image — Tiếng Việt:** Đây là vạch trên đồng hồ đo: hệ thống cần hoạt động bao nhiêu phần trăm thời gian và chấp nhận bao nhiêu thời gian gián đoạn.

**Grammar & collocations:** `set an availability target` — đặt; `meet the target` — đạt; `annual target` — mục tiêu hằng năm.

**Register & nuance:** `system availability` mô tả trạng thái hoặc thuộc tính. `Availability target` là mức cam kết dùng để lập kế hoạch và đánh giá.

**Examples:** `The team set an availability target for the payment service before launch.` → Nhóm đặt mục tiêu sẵn sàng cho dịch vụ thanh toán trước khi ra mắt.

**Liên kết tiếng Hàn:** `가용성 목표` — mục tiêu độ sẵn sàng.

## 2. incident severity /ˈɪnsədənt səˈverəti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — mức độ nghiêm trọng được gán cho một sự cố dựa trên ảnh hưởng của nó.

**Core meaning — English:** A classification of how seriously an incident affects users, systems, or business operations.

**Core meaning & mental image — Tiếng Việt:** Khi có lỗi, đội không chỉ nói “hệ thống hỏng”; họ xếp mức độ để biết cần gọi ai, phản hồi nhanh đến đâu và ưu tiên sửa gì.

**Grammar & collocations:** `assess incident severity` — đánh giá; `high-severity incident` — sự cố nghiêm trọng; `severity level` — mức độ.

**Register & nuance:** `impact` nói về hậu quả. `Incident severity` là nhãn phân loại được dùng để tổ chức phản ứng.

**Examples:** `The incident severity was raised when customers could no longer place orders.` → Mức độ sự cố được nâng lên khi khách hàng không thể đặt hàng.

**Liên kết tiếng Hàn:** `사고 심각도` — mức độ nghiêm trọng của sự cố.

## 3. service recovery /ˈsɝvɪs rɪˈkʌvəri/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — quá trình đưa dịch vụ trở lại hoạt động bình thường sau gián đoạn.

**Core meaning — English:** The process of restoring a service after a failure and reducing harm to users.

**Core meaning & mental image — Tiếng Việt:** `Service recovery` là cả việc sửa hệ thống, kiểm tra dữ liệu, thông báo cho người dùng và rút kinh nghiệm, không chỉ bật máy lại.

**Grammar & collocations:** `lead service recovery` — dẫn dắt; `recovery process` — quy trình; `recovery time` — thời gian khôi phục.

**Register & nuance:** `disaster recovery` thường tập trung vào sự kiện lớn và hạ tầng dự phòng. `Service recovery` có thể dùng cho cả sự cố nhỏ của một dịch vụ.

**Examples:** `The service recovery team published an update every thirty minutes.` → Nhóm khôi phục dịch vụ công bố cập nhật mỗi ba mươi phút.

**Liên kết tiếng Hàn:** `서비스 복구` — khôi phục dịch vụ.

## 4. observability signal /ˌɑbzərvəˈbɪləti ˈsɪɡnəl/

**Loại từ & vị trí trong câu:** `countable noun phrase` — dữ liệu giúp đội vận hành hiểu hệ thống đang làm gì và có vấn đề ở đâu.

**Core meaning — English:** A measurable piece of telemetry, such as a log, metric, or trace, that reveals a system’s internal behavior.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung cảm biến trên bảng điều khiển. Một `observability signal` cho thấy request chậm, lỗi tăng hoặc một bước trong chuỗi bị nghẽn.

**Grammar & collocations:** `collect observability signals` — thu thập; `signal quality` — chất lượng tín hiệu; `telemetry signal` — tín hiệu đo đạc.

**Register & nuance:** `monitoring` thường theo dõi các chỉ số đã biết. `Observability` nhấn mạnh khả năng suy ra trạng thái bên trong từ nhiều tín hiệu.

**Examples:** `A new observability signal revealed that image processing was slowing down checkout.` → Tín hiệu quan sát mới cho thấy xử lý ảnh làm chậm thanh toán.

**Liên kết tiếng Hàn:** `관측 가능성 신호` — tín hiệu quan sát hệ thống.

## 5. load testing /ˈloʊd ˌtestɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun` — việc thử hệ thống với lượng truy cập hoặc công việc lớn có kiểm soát.

**Core meaning — English:** Testing how a system performs when it receives an expected or increasing amount of traffic or work.

**Core meaning & mental image — Tiếng Việt:** Đội cho hệ thống “tập chạy” dưới nhiều mức tải trước khi người dùng thật xuất hiện, để thấy tốc độ giảm hoặc điểm nghẽn ở đâu.

**Grammar & collocations:** `run load testing` — thực hiện; `load-testing tool` — công cụ; `peak load` — tải đỉnh.

**Register & nuance:** `stress testing` thường đẩy hệ thống vượt mức bình thường để tìm giới hạn. `Load testing` mô phỏng mức tải dự kiến hoặc tăng dần.

**Examples:** `Load testing showed that the search service needed more memory.` → Kiểm thử tải cho thấy dịch vụ tìm kiếm cần thêm bộ nhớ.

**Liên kết tiếng Hàn:** `부하 테스트` — kiểm thử tải.

## 6. capacity planning /kəˈpæsəti ˌplænɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun` — việc dự đoán và chuẩn bị tài nguyên cần thiết khi nhu cầu tăng.

**Core meaning — English:** The practice of estimating future demand and arranging enough computing, storage, network, or staff capacity.

**Core meaning & mental image — Tiếng Việt:** Đội không đợi đến khi phòng đầy mới mua thêm ghế. `Capacity planning` dự báo số người dùng, dữ liệu và công việc để chuẩn bị trước.

**Grammar & collocations:** `do capacity planning` — lập kế hoạch; `capacity-planning model` — mô hình; `future demand` — nhu cầu tương lai.

**Register & nuance:** `scaling` là hành động tăng hoặc giảm tài nguyên. `Capacity planning` là quá trình dự báo và quyết định cần bao nhiêu tài nguyên.

**Examples:** `Capacity planning became difficult after the product gained users overseas.` → Lập kế hoạch công suất khó hơn sau khi sản phẩm có thêm người dùng ở nước ngoài.

**Liên kết tiếng Hàn:** `용량 계획` — lập kế hoạch công suất.

## 7. backward compatibility /ˈbækwərd kəmˌpætəˈbɪləti/

**Loại từ & vị trí trong câu:** `uncountable noun` — khả năng phiên bản mới vẫn làm việc với dữ liệu hoặc ứng dụng cũ.

**Core meaning — English:** The ability of a new system or version to work with older software, data, or interfaces.

**Core meaning & mental image — Tiếng Việt:** Một cây cầu mới vẫn nối được với con đường cũ. Nếu có `backward compatibility`, người dùng không phải đổi mọi thứ cùng lúc.

**Grammar & collocations:** `maintain backward compatibility` — duy trì; `compatibility requirement` — yêu cầu; `backward-compatible change` — thay đổi tương thích ngược.

**Register & nuance:** `interoperability` nói về khả năng làm việc giữa các hệ thống khác nhau. `Backward compatibility` nhấn mạnh quan hệ giữa phiên bản mới và phiên bản cũ.

**Examples:** `The API team preserved backward compatibility for existing mobile apps.` → Nhóm API giữ tương thích ngược cho các ứng dụng di động hiện có.

**Liên kết tiếng Hàn:** `하위 호환성` — tương thích ngược.

## 8. release rollback /rɪˈliːs ˈroʊlˌbæk/

**Loại từ & vị trí trong câu:** `countable noun phrase` — việc đưa hệ thống về phiên bản trước sau khi bản phát hành mới gây vấn đề.

**Core meaning — English:** The act of returning a service to an earlier software version because a new release is unsafe or faulty.

**Core meaning & mental image — Tiếng Việt:** Khi bản phát hành mới làm hệ thống lỗi, đội kéo cần gạt để quay lại phiên bản ổn định trước đó. Đó là `release rollback`.

**Grammar & collocations:** `perform a release rollback` — thực hiện; `rollback plan` — kế hoạch; `automatic rollback` — quay lui tự động.

**Register & nuance:** `revert` có thể chỉ một thay đổi nhỏ trong mã. `Release rollback` là hành động vận hành đưa cả phiên bản dịch vụ về trạng thái cũ.

**Examples:** `The team initiated a release rollback after error rates doubled.` → Nhóm bắt đầu quay lui bản phát hành sau khi tỷ lệ lỗi tăng gấp đôi.

**Liên kết tiếng Hàn:** `릴리스 롤백` — quay lui bản phát hành.

## 9. maintenance window /ˈmeɪntənəns ˌwɪndoʊ/

**Loại từ & vị trí trong câu:** `countable noun phrase` — khoảng thời gian được lên lịch để bảo trì hoặc thay đổi hệ thống.

**Core meaning — English:** A planned period when a service may be interrupted so that maintenance or upgrades can be performed.

**Core meaning & mental image — Tiếng Việt:** Đây là “khung giờ sửa đường” của dịch vụ số: người vận hành chọn lúc ít người dùng hơn và báo trước khả năng gián đoạn.

**Grammar & collocations:** `schedule a maintenance window` — lên lịch; `during the window` — trong khoảng; `planned maintenance` — bảo trì theo kế hoạch.

**Examples:** `The database upgrade is scheduled for a two-hour maintenance window.` → Việc nâng cấp cơ sở dữ liệu được lên lịch trong khung bảo trì hai giờ.

**Liên kết tiếng Hàn:** `유지보수 시간대` — khung thời gian bảo trì.

## 10. dependency mapping /dɪˈpendənsi ˌmæpɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun` — việc ghi lại các thành phần mà một hệ thống hoặc dịch vụ phụ thuộc vào.

**Core meaning — English:** The practice of documenting how systems, services, teams, or data sources rely on one another.

**Core meaning & mental image — Tiếng Việt:** Bản đồ này giống mạng lưới dây nối: nếu một dịch vụ dừng, đội có thể thấy những chức năng nào khác cũng bị ảnh hưởng.

**Grammar & collocations:** `perform dependency mapping` — lập bản đồ; `dependency map` — bản đồ phụ thuộc; `critical dependency` — phụ thuộc quan trọng.

**Register & nuance:** `service dependency` là một quan hệ cụ thể. `Dependency mapping` là hoạt động khám phá và ghi lại nhiều quan hệ đó.

**Examples:** `Dependency mapping exposed an old payment service that no one monitored.` → Lập bản đồ phụ thuộc phát hiện một dịch vụ thanh toán cũ không ai theo dõi.

**Liên kết tiếng Hàn:** `의존성 매핑` — lập bản đồ phụ thuộc.

## 11. reliability review /rɪˌlaɪəˈbɪləti rɪˌvjuː/

**Loại từ & vị trí trong câu:** `countable noun phrase` — buổi đánh giá có hệ thống về khả năng hoạt động ổn định của dịch vụ.

**Core meaning — English:** A structured examination of a service’s failures, risks, performance, and recovery practices.

**Core meaning & mental image — Tiếng Việt:** Sau một giai đoạn vận hành, đội ngồi xem “điểm yếu trên bản đồ”: lỗi lặp lại, cảnh báo thiếu, quy trình khôi phục và việc cần ưu tiên.

**Grammar & collocations:** `conduct a reliability review` — tiến hành; `review findings` — kết quả; `reliability-review meeting` — cuộc họp.

**Register & nuance:** `code review` chỉ kiểm tra mã. `Reliability review` nhìn rộng hơn vào hành vi dịch vụ, hạ tầng và quy trình vận hành.

**Examples:** `The reliability review produced three actions for the next quarter.` → Buổi đánh giá độ tin cậy đưa ra ba hành động cho quý tới.

**Liên kết tiếng Hàn:** `신뢰성 검토` — đánh giá độ tin cậy.

## 12. fault isolation /fɔlt ˌaɪsəˈleɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun` — việc giới hạn lỗi để nó không lan sang các phần khác của hệ thống.

**Core meaning — English:** The practice of containing a failure so that it affects as few components or users as possible.

**Core meaning & mental image — Tiếng Việt:** Khi một khoang tàu bị thủng, cửa kín ngăn nước tràn sang khoang khác. `Fault isolation` tạo “vách ngăn” tương tự trong hệ thống.

**Grammar & collocations:** `improve fault isolation` — cải thiện; `isolate a fault` — cô lập; `failure boundary` — ranh giới lỗi.

**Register & nuance:** `fault tolerance` là khả năng tiếp tục hoạt động dù có lỗi. `Fault isolation` tập trung vào việc giới hạn phạm vi lỗi.

**Examples:** `Separate queues improved fault isolation between image processing and billing.` → Các hàng đợi riêng cải thiện việc cô lập lỗi giữa xử lý ảnh và thanh toán.

**Liên kết tiếng Hàn:** `장애 격리` — cô lập lỗi.

## 13. operational readiness /ˌɑpəˈreɪʃənəl ˈredinəs/

**Loại từ & vị trí trong câu:** `uncountable noun` — mức độ một dịch vụ đã sẵn sàng để vận hành an toàn trong thực tế.

**Core meaning — English:** The state of having the people, procedures, monitoring, documentation, and support needed to run a service.

**Core meaning & mental image — Tiếng Việt:** Một tính năng chưa sẵn sàng chỉ vì mã đã chạy. `Operational readiness` hỏi: ai trực, ai xử lý cảnh báo, có hướng dẫn khôi phục và người dùng được thông báo chưa?

**Grammar & collocations:** `assess operational readiness` — đánh giá; `readiness checklist` — danh sách; `operationally ready` — sẵn sàng vận hành.

**Register & nuance:** `technical readiness` có thể chỉ việc hệ thống chạy được. `Operational readiness` bao gồm cả con người và quy trình sau khi ra mắt.

**Examples:** `The launch was delayed until the support team confirmed operational readiness.` → Việc ra mắt hoãn đến khi đội hỗ trợ xác nhận sẵn sàng vận hành.

**Liên kết tiếng Hàn:** `운영 준비 상태` — trạng thái sẵn sàng vận hành.

## 14. recovery point /rɪˈkʌvəri pɔɪnt/

**Loại từ & vị trí trong câu:** `countable noun phrase` — thời điểm dữ liệu có thể được khôi phục sau sự cố.

**Core meaning — English:** A saved state or time to which data can be restored after a failure or loss.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung các dấu mốc trên dòng thời gian. Khi hệ thống hỏng, đội chọn một `recovery point` gần nhất để quay dữ liệu về đó.

**Grammar & collocations:** `choose a recovery point` — chọn; `recovery-point objective` — mục tiêu điểm khôi phục; `latest point` — điểm mới nhất.

**Register & nuance:** `backup` là bản sao dữ liệu. `Recovery point` là mốc cụ thể dùng trong kế hoạch phục hồi, thường gắn với lượng dữ liệu có thể mất.

**Examples:** `The database was restored to a recovery point from ten minutes before the outage.` → Cơ sở dữ liệu được khôi phục về mốc mười phút trước khi gián đoạn.

**Liên kết tiếng Hàn:** `복구 시점` — điểm khôi phục.

## 15. service recovery drill /ˈsɝvɪs rɪˈkʌvəri drɪl/

**Loại từ & vị trí trong câu:** `countable noun phrase` — buổi diễn tập để kiểm tra cách đội khôi phục một dịch vụ sau lỗi giả định.

**Core meaning — English:** A planned exercise that tests whether a team can detect, communicate, and recover from a simulated service failure.

**Core meaning & mental image — Tiếng Việt:** Giống diễn tập chữa cháy, đội cố ý mô phỏng một sự cố để kiểm tra cảnh báo, vai trò, quyết định và thời gian khôi phục trước khi sự cố thật xảy ra.

**Grammar & collocations:** `run a service recovery drill` — diễn tập; `drill scenario` — kịch bản; `after-action review` — đánh giá sau diễn tập.

**Register & nuance:** `test` có thể kiểm tra một thành phần. `Service recovery drill` kiểm tra cả con người, giao tiếp và quy trình dưới một kịch bản gián đoạn.

**Examples:** `The service recovery drill revealed that the on-call list was outdated.` → Buổi diễn tập khôi phục phát hiện danh sách người trực đã cũ.

**Liên kết tiếng Hàn:** `서비스 복구 훈련` — diễn tập khôi phục dịch vụ.

## Review in context

Before launch, the team set an **availability target**, defined **incident severity** levels, and planned for **service recovery**. A new **observability signal** and **load testing** showed where the platform might slow down. The team used **capacity planning** to prepare for growth, while **backward compatibility** protected older clients. It wrote a **release rollback** plan and reserved a **maintenance window**. The **dependency mapping** exposed a risky connection, so a **reliability review** strengthened **fault isolation**. Before release, leaders checked **operational readiness**, documented a **recovery point**, and ran a **service recovery drill**. These practices made the platform easier to trust when real traffic and unexpected failures arrived.

**Bản dịch tiếng Việt:**

Trước khi ra mắt, nhóm đặt mục tiêu độ sẵn sàng, xác định các mức độ sự cố và lập kế hoạch khôi phục dịch vụ. Các tín hiệu quan sát mới cùng kiểm thử tải cho thấy nền tảng có thể chậm ở đâu. Lập kế hoạch công suất chuẩn bị cho tăng trưởng, còn tương thích ngược bảo vệ các ứng dụng cũ. Nhóm viết kế hoạch quay lui bản phát hành và dành một khung bảo trì. Lập bản đồ phụ thuộc phát hiện một kết nối rủi ro, nên buổi đánh giá độ tin cậy củng cố việc cô lập lỗi. Trước khi phát hành, lãnh đạo kiểm tra độ sẵn sàng vận hành, ghi lại điểm khôi phục và tổ chức diễn tập khôi phục dịch vụ. Những thực hành này làm nền tảng đáng tin hơn khi lưu lượng thật và lỗi bất ngờ xuất hiện.
