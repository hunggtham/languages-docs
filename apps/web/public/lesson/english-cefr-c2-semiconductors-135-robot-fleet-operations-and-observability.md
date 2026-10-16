# C2 Vocabulary — Robot fleet operations and observability

This lesson follows a fleet from work assignment through shared maps, telemetry, diagnosis, and operator intervention. The network is **robot fleet management → fleet orchestration → mission dispatch → job queue → work order → robot utilization → fleet balancing → traffic management → map versioning → map lifecycle → configuration management → remote diagnostics → telemetry pipeline → health telemetry → performance telemetry → log aggregation → trace correlation → metrics cardinality → runbook automation → remote intervention**.

## 1. robot fleet management /ˈroʊbɑːt fliːt ˈmænɪdʒmənt/
**Part of speech:** noun
**Core meaning (English):** coordinating a group of robots, their missions, configurations, maintenance, and operational status.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều phối group robot, mission, configuration, maintenance và operational status.
**Grammar & collocations:** `robot-fleet-management console` — console; `coordinate a mixed fleet` — điều phối fleet hỗn hợp.
**Examples:** `Robot fleet management assigned the cold-storage route to a vehicle with a sealed chassis.` → Robot fleet management giao route kho lạnh cho vehicle có chassis kín.
**Liên kết tiếng Hàn:** `로봇 함대 관리`.

## 2. fleet orchestration /fliːt ˌɔːrkəˈstreɪʃən/
**Part of speech:** noun
**Core meaning (English):** arranging fleet-wide tasks, dependencies, resources, and timing so many robots work together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sắp xếp task, dependency, resource và timing để nhiều robot cùng làm việc.
**Grammar & collocations:** `fleet-orchestration service` — service; `coordinate cross-robot dependencies` — phối hợp dependency giữa robot.
**Examples:** `Fleet orchestration delayed one lift until the inspection robot cleared the aisle.` → Fleet orchestration trì hoãn một lift tới khi robot inspection dọn lối.
**Liên kết tiếng Hàn:** `함대 오케스트레이션`.

## 3. mission dispatch /ˈmɪʃən dɪˈspætʃ/
**Part of speech:** noun
**Core meaning (English):** sending an approved mission or task to a robot that is ready and eligible to perform it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gửi mission/task đã duyệt cho robot sẵn sàng và đủ điều kiện.
**Grammar & collocations:** `mission-dispatch policy` — policy; `dispatch a priority inspection` — dispatch inspection ưu tiên.
**Examples:** `Mission dispatch waited for the robot to leave its charging dock.` → Mission dispatch đợi robot rời charging dock.
**Liên kết tiếng Hàn:** `임무 디스패치`.

## 4. job queue /dʒɑːb kjuː/
**Part of speech:** noun
**Core meaning (English):** an ordered collection of pending jobs waiting for assignment or execution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** collection job đang chờ assignment hoặc execution theo thứ tự.
**Grammar & collocations:** `job-queue priority` — priority; `pull the next job` — lấy job tiếp theo.
**Examples:** `The job queue promoted the leaking-pipe inspection above routine inventory scans.` → Job queue đẩy inspection ống rò lên trên scan inventory thường lệ.
**Liên kết tiếng Hàn:** `작업 대기열`.

## 5. work order /wɜːrk ˈɔːrdər/
**Part of speech:** noun
**Core meaning (English):** an authorized record describing a task, its location, required resources, and completion conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record được authorize mô tả task, location, resource cần và completion condition.
**Grammar & collocations:** `work-order identifier` — identifier; `close a completed order` — đóng order hoàn thành.
**Examples:** `The work order specified a photo, a torque reading, and a supervisor sign-off.` → Work order yêu cầu photo, torque reading và supervisor sign-off.
**Liên kết tiếng Hàn:** `작업 지시서`.

## 6. robot utilization /ˈroʊbɑːt ˌjuːtələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the proportion of available robot time or capacity spent performing useful work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ time/capacity robot sẵn có được dùng cho useful work.
**Grammar & collocations:** `robot-utilization metric` — metric; `measure idle time` — đo idle time.
**Examples:** `Robot utilization rose after dispatchers grouped nearby deliveries into one route.` → Robot utilization tăng sau khi dispatcher gộp delivery gần nhau vào một route.
**Liên kết tiếng Hàn:** `로봇 가동률`.

## 7. fleet balancing /fliːt ˈbælənsɪŋ/
**Part of speech:** noun
**Core meaning (English):** redistributing work so capacity, battery, wear, and delay remain reasonably balanced across robots.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân bổ lại work để capacity, battery, wear và delay cân bằng giữa robot.
**Grammar & collocations:** `fleet-balancing heuristic` — heuristic; `shift jobs from a busy unit` — chuyển job khỏi unit bận.
**Examples:** `Fleet balancing moved two short jobs away from the robot scheduled for maintenance.` → Fleet balancing chuyển hai job ngắn khỏi robot đã schedule maintenance.
**Liên kết tiếng Hàn:** `함대 균형 조정`.

## 8. traffic management /ˈtræfɪk ˈmænɪdʒmənt/
**Part of speech:** noun
**Core meaning (English):** coordinating robot routes and right-of-way so shared spaces remain efficient and collision-free.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều phối route và right-of-way để không gian chung hiệu quả, không va chạm.
**Grammar & collocations:** `traffic-management rule` — rule; `reserve a narrow passage` — giữ chỗ lối hẹp.
**Examples:** `Traffic management reserved the bridge for the loaded vehicle before releasing the empty one.` → Traffic management giữ cầu cho vehicle có tải trước khi thả vehicle rỗng.
**Liên kết tiếng Hàn:** `교통 관리`.

## 9. map versioning /mæp ˈvɜːrʒənɪŋ/
**Part of speech:** noun
**Core meaning (English):** tracking distinct revisions of a map so deployments and decisions can be tied to a specific version.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** theo dõi các revision map để deployment và decision gắn với version cụ thể.
**Grammar & collocations:** `map-versioning scheme` — scheme; `roll out a revised map` — triển khai map sửa.
**Examples:** `Map versioning let the operator compare the route against the layout used during the incident.` → Map versioning cho operator so route với layout dùng lúc incident.
**Liên kết tiếng Hàn:** `지도 버전 관리`.

## 10. map lifecycle /mæp ˈlaɪfsaɪkəl/
**Part of speech:** noun
**Core meaning (English):** the process of creating, validating, deploying, updating, retiring, and auditing a map.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process tạo, validate, deploy, update, retire và audit map.
**Grammar & collocations:** `map-lifecycle policy` — policy; `retire an obsolete map` — retire map lỗi thời.
**Examples:** `The map lifecycle required a validation run before the new warehouse layout became active.` → Map lifecycle yêu cầu validation run trước khi layout warehouse mới active.
**Liên kết tiếng Hàn:** `지도 수명 주기`.

## 11. configuration management /kənˌfɪɡjəˈreɪʃən ˈmænɪdʒmənt/
**Part of speech:** noun
**Core meaning (English):** controlling and recording the exact software, hardware, parameters, and versions used by a system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm soát và ghi chính xác software, hardware, parameter và version system dùng.
**Grammar & collocations:** `configuration-management baseline` — baseline; `compare deployed settings` — so các setting deploy.
**Examples:** `Configuration management showed that one robot still used the older obstacle margin.` → Configuration management cho thấy một robot vẫn dùng obstacle margin cũ.
**Liên kết tiếng Hàn:** `구성 관리`.

## 12. remote diagnostics /rɪˈmoʊt ˌdaɪəɡˈnɑːstɪks/
**Part of speech:** noun
**Core meaning (English):** diagnosing a robot’s condition and faults through remote data and controlled tests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chẩn đoán condition và fault qua data từ xa và test có kiểm soát.
**Grammar & collocations:** `remote-diagnostics session` — session; `run a motor health check` — chạy health check motor.
**Examples:** `Remote diagnostics confirmed a loose connector without sending a technician overnight.` → Remote diagnostics xác nhận connector lỏng mà không cần gửi kỹ thuật viên qua đêm.
**Liên kết tiếng Hàn:** `원격 진단`.

## 13. telemetry pipeline /təˈlemətri ˈpaɪplaɪn/
**Part of speech:** noun
**Core meaning (English):** the stages that collect, transport, transform, store, and expose operational measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các stage collect, transport, transform, store và expose operational measurement.
**Grammar & collocations:** `telemetry-pipeline stage` — stage; `forward a health signal` — forward health signal.
**Examples:** `The telemetry pipeline downsampled high-rate torque data before cloud storage.` → Telemetry pipeline downsample torque data rate cao trước khi lưu cloud.
**Liên kết tiếng Hàn:** `원격 측정 파이프라인`.

## 14. health telemetry /helθ təˈlemətri/
**Part of speech:** noun
**Core meaning (English):** measurements that describe a robot’s component condition, faults, and remaining operating margin.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measurement mô tả condition component, fault và operating margin còn lại.
**Grammar & collocations:** `health-telemetry field` — field; `monitor bearing temperature` — theo dõi bearing temperature.
**Examples:** `Health telemetry showed rising vibration before the joint failed its self-test.` → Health telemetry cho thấy vibration tăng trước khi joint fail self-test.
**Liên kết tiếng Hàn:** `상태 원격 측정`.

## 15. performance telemetry /pərˈfɔːrməns təˈlemətri/
**Part of speech:** noun
**Core meaning (English):** measurements of throughput, latency, utilization, accuracy, and other operational outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measurement về throughput, latency, utilization, accuracy và outcome vận hành khác.
**Grammar & collocations:** `performance-telemetry dashboard` — dashboard; `track route completion time` — theo dõi completion time.
**Examples:** `Performance telemetry revealed that localization latency rose only in the crowded aisle.` → Performance telemetry cho thấy localization latency chỉ tăng ở aisle đông.
**Liên kết tiếng Hàn:** `성능 원격 측정`.

## 16. log aggregation /lɔːɡ ˌæɡrəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** collecting logs from many components into a searchable, time-aligned system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom log từ nhiều component vào system searchable và căn theo time.
**Grammar & collocations:** `log-aggregation index` — index; `correlate messages across robots` — correlate message giữa robot.
**Examples:** `Log aggregation connected the navigation warning to a delayed map update.` → Log aggregation nối navigation warning với map update bị trễ.
**Liên kết tiếng Hàn:** `로그 집계`.

## 17. trace correlation /treɪs ˌkɔːrəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** linking related events across services, processes, and devices by a shared trace or request identity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nối event liên quan giữa service, process và device bằng trace/request identity chung.
**Grammar & collocations:** `trace-correlation identifier` — identifier; `follow a command across services` — theo command qua service.
**Examples:** `Trace correlation showed where the delayed work order spent time in the dispatch service.` → Trace correlation cho thấy work order trễ đã mất time ở đâu trong dispatch service.
**Liên kết tiếng Hàn:** `추적 상관관계`.

## 18. metrics cardinality /ˈmetrɪks ˌkɑːrdəˈnæləti/
**Part of speech:** noun
**Core meaning (English):** the number of distinct label combinations a metrics system must store and process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số tổ hợp label khác nhau metrics system phải lưu và xử lý.
**Grammar & collocations:** `metrics-cardinality explosion` — bùng nổ; `limit high-cardinality labels` — giới hạn label cardinality cao.
**Examples:** `Metrics cardinality exploded when every temporary route received a unique label.` → Metrics cardinality bùng nổ khi mỗi route tạm có label riêng.
**Liên kết tiếng Hàn:** `메트릭 카디널리티`.

## 19. runbook automation /ˈrʌnbʊk ˌɔːtəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** automatically executing approved diagnostic or recovery procedures from an operational runbook.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tự động chạy procedure diagnostic/recovery đã duyệt trong runbook.
**Grammar & collocations:** `runbook-automation step` — step; `restart a failed service safely` — restart service fail an toàn.
**Examples:** `Runbook automation restarted the telemetry agent and verified that data resumed.` → Runbook automation restart telemetry agent và xác minh data chạy lại.
**Liên kết tiếng Hàn:** `런북 자동화`.

## 20. remote intervention /rɪˈmoʊt ˌɪntərˈvenʃən/
**Part of speech:** noun
**Core meaning (English):** a controlled human action performed remotely to guide, pause, repair, or recover a robot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** action có kiểm soát của người từ xa để guide, pause, repair hoặc recover robot.
**Grammar & collocations:** `remote-intervention authorization` — authorization; `take over a stalled mission` — takeover mission bị stall.
**Examples:** `Remote intervention placed the vehicle in a safe bay while the local team prepared a repair.` → Remote intervention đưa vehicle vào bay an toàn khi team local chuẩn bị repair.
**Liên kết tiếng Hàn:** `원격 개입`.

## Review in context

**Robot fleet management** and **fleet orchestration** send work through **mission dispatch**, a **job queue**, and each **work order**. **Robot utilization** and **fleet balancing** improve capacity, while **traffic management** protects shared routes. **Map versioning**, the **map lifecycle**, and **configuration management** keep deployments consistent. **Remote diagnostics** reads a **telemetry pipeline** containing **health telemetry** and **performance telemetry**. **Log aggregation**, **trace correlation**, and **metrics cardinality** make evidence usable; **runbook automation** handles approved recovery, and **remote intervention** gives an operator controlled authority when automation is not enough.

**Bản dịch tiếng Việt:** **Robot fleet management** và **fleet orchestration** đưa work qua **mission dispatch**, **job queue** và từng **work order**. **Robot utilization** và **fleet balancing** cải thiện capacity, còn **traffic management** bảo vệ route chung. **Map versioning**, **map lifecycle** và **configuration management** giữ deployment nhất quán. **Remote diagnostics** đọc **telemetry pipeline** chứa **health telemetry** và **performance telemetry**. **Log aggregation**, **trace correlation** và **metrics cardinality** làm evidence usable; **runbook automation** xử lý recovery đã duyệt, còn **remote intervention** trao cho operator quyền có kiểm soát khi automation chưa đủ.
