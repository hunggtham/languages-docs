# C2 Vocabulary — Robot real-time hardware and control architecture

This lesson follows data through a robot’s hardware and real-time software stack, from sensing to actuator commands. The network is **robot hardware architecture → real-time control stack → control loop frequency → sensor sampling rate → actuator update rate → time-triggered execution → event-triggered control → worst-case execution time → deterministic scheduling → lock-free buffer → zero-copy transport → shared-memory transport → middleware executor → message serialization → sensor fusion pipeline → actuator command pipeline → software-in-the-loop → processor-in-the-loop → electronic control unit → motor drive interface**.

## 1. robot hardware architecture /ˈroʊbɑːt ˈhɑːrdwer ˈɑːrkətektʃər/
**Part of speech:** noun
**Core meaning (English):** the organized arrangement of processors, sensors, actuators, buses, and power components in a robot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cách sắp xếp processor, sensor, actuator, bus và power component của robot.
**Grammar & collocations:** `robot-hardware-architecture diagram` — sơ đồ; `partition compute and control` — phân tách compute và control.
**Examples:** `The robot hardware architecture separated safety sensing from the high-level planner.` → Robot hardware architecture tách safety sensing khỏi planner cấp cao.
**Liên kết tiếng Hàn:** `로봇 하드웨어 아키텍처`.

## 2. real-time control stack /riːl taɪm kənˈtroʊl stæk/
**Part of speech:** noun
**Core meaning (English):** the layered software and hardware path that senses, computes, and commands within timing deadlines.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường hardware/software nhiều lớp sensing, tính toán và command trong timing deadline.
**Grammar & collocations:** `real-time-control-stack layer` — layer; `meet a control deadline` — đạt deadline control.
**Examples:** `The real-time control stack kept the torque loop isolated from dashboard traffic.` → Real-time control stack giữ torque loop tách khỏi traffic dashboard.
**Liên kết tiếng Hàn:** `실시간 제어 스택`.

## 3. control loop frequency /kənˈtroʊl luːp ˈfriːkwənsi/
**Part of speech:** noun
**Core meaning (English):** the rate at which a feedback controller reads state and updates its command.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ feedback controller đọc state và cập nhật command.
**Grammar & collocations:** `control-loop-frequency target` — target; `raise the servo rate` — tăng servo rate.
**Examples:** `The control loop frequency was increased to track the flexible joint.` → Control loop frequency được tăng để theo dõi joint mềm.
**Liên kết tiếng Hàn:** `제어 루프 주파수`.

## 4. sensor sampling rate /ˈsensər ˈsæmplɪŋ reɪt/
**Part of speech:** noun
**Core meaning (English):** how often a sensor measures and reports a signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sensor đo và báo signal bao nhiêu lần.
**Grammar & collocations:** `sensor-sampling-rate mismatch` — mismatch; `sample an encoder at high rate` — lấy sample encoder rate cao.
**Examples:** `The sensor sampling rate was too low to capture the vibration peak.` → Sensor sampling rate quá thấp để bắt vibration peak.
**Liên kết tiếng Hàn:** `센서 샘플링 속도`.

## 5. actuator update rate /ˈæktʃueɪtər ʌpˈdeɪt reɪt/
**Part of speech:** noun
**Core meaning (English):** how often new commands are sent to an actuator or drive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tần suất command mới được gửi tới actuator hoặc drive.
**Grammar & collocations:** `actuator-update-rate limit` — limit; `refresh a torque command` — refresh torque command.
**Examples:** `The actuator update rate limited how quickly the gripper could change force.` → Actuator update rate giới hạn tốc độ gripper đổi force.
**Liên kết tiếng Hàn:** `구동기 업데이트 속도`.

## 6. time-triggered execution /taɪm ˈtrɪɡərd ˌeksəˈkjuːʃən/
**Part of speech:** noun
**Core meaning (English):** execution scheduled at predetermined times or periodic ticks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** execution được schedule tại time hoặc tick định trước.
**Grammar & collocations:** `time-triggered-execution slot` — slot; `run a periodic task` — chạy task định kỳ.
**Examples:** `Time-triggered execution made the safety check occur at every control tick.` → Time-triggered execution khiến safety check chạy ở mỗi control tick.
**Liên kết tiếng Hàn:** `시간 트리거 실행`.

## 7. event-triggered control /ɪˈvent ˈtrɪɡərd kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** control that sends an update when a measured event or error condition occurs rather than on every periodic tick.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control gửi update khi event hoặc error condition xảy ra thay vì mỗi tick.
**Grammar & collocations:** `event-triggered-control threshold` — threshold; `transmit only on a significant error` — truyền khi error đáng kể.
**Examples:** `Event-triggered control reduced bus traffic while the arm held a steady pose.` → Event-triggered control giảm bus traffic khi arm giữ pose ổn định.
**Liên kết tiếng Hàn:** `이벤트 트리거 제어`.

## 8. worst-case execution time /wɜːrst keɪs ˌeksəˈkjuːʃən taɪm/
**Part of speech:** noun
**Core meaning (English):** the longest time a software task can take under a defined execution model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian dài nhất task software có thể chạy dưới execution model đã định.
**Grammar & collocations:** `worst-case-execution-time analysis` — phân tích; `bound a task duration` — bound thời lượng task.
**Examples:** `The worst-case execution time fit inside the 1-millisecond servo deadline.` → Worst-case execution time nằm trong deadline servo một millisecond.
**Liên kết tiếng Hàn:** `최악 실행 시간`.

## 9. deterministic scheduling /dɪˌtɜːrməˈnɪstɪk ˈskedʒuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** scheduling designed to produce predictable task order and timing under stated conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scheduling tạo task order và timing dự đoán được dưới condition đã nêu.
**Grammar & collocations:** `deterministic-scheduling policy` — policy; `reserve a fixed execution slot` — dành slot cố định.
**Examples:** `Deterministic scheduling reserved processor time for collision monitoring.` → Deterministic scheduling dành processor time cho collision monitoring.
**Liên kết tiếng Hàn:** `결정론적 스케줄링`.

## 10. lock-free buffer /lɑːk friː ˈbʌfər/
**Part of speech:** noun
**Core meaning (English):** a concurrent data buffer designed to exchange information without blocking on a mutual-exclusion lock.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** buffer concurrent trao đổi data mà không block chờ mutual-exclusion lock.
**Grammar & collocations:** `lock-free-buffer queue` — queue; `publish a sensor sample` — publish sensor sample.
**Examples:** `A lock-free buffer passed encoder samples from the interrupt handler to the estimator.` → Lock-free buffer chuyển encoder sample từ interrupt handler tới estimator.
**Liên kết tiếng Hàn:** `락 프리 버퍼`.

## 11. zero-copy transport /ˈzɪroʊ ˈkɑːpi ˈtrænspɔːrt/
**Part of speech:** noun
**Core meaning (English):** data transfer that reuses the same memory rather than copying a message between software components.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truyền data dùng lại cùng memory thay vì copy message giữa component.
**Grammar & collocations:** `zero-copy-transport path` — path; `avoid a serialization copy` — tránh copy khi serialize.
**Examples:** `Zero-copy transport lowered image latency between the camera driver and planner.` → Zero-copy transport giảm image latency giữa camera driver và planner.
**Liên kết tiếng Hàn:** `제로 카피 전송`.

## 12. shared-memory transport /ʃerd ˈmeməri ˈtrænspɔːrt/
**Part of speech:** noun
**Core meaning (English):** communication that exchanges data through a memory region accessible to multiple processes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** communication trao đổi data qua memory region nhiều process cùng truy cập.
**Grammar & collocations:** `shared-memory-transport segment` — segment; `map a sensor buffer` — map sensor buffer.
**Examples:** `Shared-memory transport let the perception process read depth frames without a network hop.` → Shared-memory transport cho perception process đọc depth frame mà không qua network hop.
**Liên kết tiếng Hàn:** `공유 메모리 전송`.

## 13. middleware executor /ˈmɪdlwer ɪɡˈzekjətər/
**Part of speech:** noun
**Core meaning (English):** a runtime component that selects and runs callbacks, messages, or tasks in a middleware system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** runtime component chọn và chạy callback, message hoặc task trong middleware.
**Grammar & collocations:** `middleware-executor thread` — thread; `spin a callback queue` — chạy callback queue.
**Examples:** `The middleware executor assigned the high-rate controller to a dedicated worker.` → Middleware executor gán controller rate cao cho worker riêng.
**Liên kết tiếng Hàn:** `미들웨어 실행기`.

## 14. message serialization /ˈmesɪdʒ ˌsɪəriələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** converting structured data into a transferable byte representation and reconstructing it later.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển structured data thành byte representation để truyền rồi dựng lại.
**Grammar & collocations:** `message-serialization overhead` — overhead; `encode a sensor packet` — encode sensor packet.
**Examples:** `Message serialization consumed more time than the small control calculation.` → Message serialization tốn nhiều time hơn phép tính control nhỏ.
**Liên kết tiếng Hàn:** `메시지 직렬화`.

## 15. sensor fusion pipeline /ˈsensər ˈfjuːʒən ˈpaɪplaɪn/
**Part of speech:** noun
**Core meaning (English):** the ordered processing stages that align, combine, and estimate state from multiple sensors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các stage theo thứ tự để align, gộp sensor và estimate state.
**Grammar & collocations:** `sensor-fusion-pipeline stage` — stage; `propagate and update a state estimate` — propagate và update estimate.
**Examples:** `The sensor fusion pipeline rejected the delayed lidar frame before updating pose.` → Sensor fusion pipeline loại lidar frame trễ trước khi update pose.
**Liên kết tiếng Hàn:** `센서 융합 파이프라인`.

## 16. actuator command pipeline /ˈæktʃueɪtər kəˈmænd ˈpaɪplaɪn/
**Part of speech:** noun
**Core meaning (English):** the ordered path that transforms a high-level command into a drive-level actuator signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** path theo thứ tự biến command cấp cao thành actuator signal cấp drive.
**Grammar & collocations:** `actuator-command-pipeline stage` — stage; `apply a torque limit` — áp torque limit.
**Examples:** `The actuator command pipeline clamped the torque before sending it to the motor drive.` → Actuator command pipeline clamp torque trước khi gửi tới motor drive.
**Liên kết tiếng Hàn:** `구동기 명령 파이프라인`.

## 17. software-in-the-loop /ˈsɔːftwer ɪn ðə luːp/
**Part of speech:** noun
**Core meaning (English):** testing control software against a simulated plant without using the physical hardware.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test control software với plant mô phỏng mà không dùng hardware thật.
**Grammar & collocations:** `software-in-the-loop test` — test; `simulate the plant response` — mô phỏng plant response.
**Examples:** `Software-in-the-loop exposed a sign error before the controller reached the lab robot.` → Software-in-the-loop phát hiện sign error trước khi controller chạy trên robot lab.
**Liên kết tiếng Hàn:** `소프트웨어 인 더 루프`.

## 18. processor-in-the-loop /ˈprɑːsesər ɪn ðə luːp/
**Part of speech:** noun
**Core meaning (English):** testing compiled control code on the target processor while the rest of the system remains simulated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test control code đã compile trên processor mục tiêu còn phần system khác vẫn simulate.
**Grammar & collocations:** `processor-in-the-loop benchmark` — benchmark; `measure target execution time` — đo execution time trên target.
**Examples:** `Processor-in-the-loop revealed that the embedded CPU missed the planned update rate.` → Processor-in-the-loop cho thấy embedded CPU không đạt update rate plan.
**Liên kết tiếng Hàn:** `프로세서 인 더 루프`.

## 19. electronic control unit /ɪˌlekˈtrɑːnɪk kənˈtroʊl ˈjuːnɪt/
**Part of speech:** noun
**Core meaning (English):** an embedded computing unit that runs control, monitoring, or communication functions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** computing unit embedded chạy function control, monitoring hoặc communication.
**Grammar & collocations:** `electronic-control-unit firmware` — firmware; `flash a safety image` — nạp safety image.
**Examples:** `The electronic control unit logged the overcurrent event and entered a safe state.` → Electronic control unit ghi overcurrent event và vào safe state.
**Liên kết tiếng Hàn:** `전자 제어 장치`.

## 20. motor drive interface /ˈmoʊtər draɪv ˈɪntərfeɪs/
**Part of speech:** noun
**Core meaning (English):** the electrical and communication boundary through which a controller commands and reads a motor drive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới electrical/communication nơi controller command và đọc motor drive.
**Grammar & collocations:** `motor-drive-interface signal` — signal; `read drive status` — đọc drive status.
**Examples:** `The motor drive interface reported a current limit before the joint stalled.` → Motor drive interface báo current limit trước khi joint stall.
**Liên kết tiếng Hàn:** `모터 드라이브 인터페이스`.

## Review in context

The **robot hardware architecture** hosts a **real-time control stack** whose **control loop frequency**, **sensor sampling rate**, and **actuator update rate** must agree. **Time-triggered execution** provides periodic work, while **event-triggered control** responds to important changes; **worst-case execution time** and **deterministic scheduling** protect deadlines. A **lock-free buffer**, **zero-copy transport**, **shared-memory transport**, and **middleware executor** move data efficiently, while **message serialization** adds a measurable boundary cost. The **sensor fusion pipeline** produces state for the **actuator command pipeline**. **Software-in-the-loop** and **processor-in-the-loop** test behavior before deployment to an **electronic control unit** and its **motor drive interface**.

**Bản dịch tiếng Việt:** **Robot hardware architecture** chứa **real-time control stack**, nơi **control loop frequency**, **sensor sampling rate** và **actuator update rate** phải khớp. **Time-triggered execution** cung cấp công việc định kỳ, còn **event-triggered control** phản ứng với thay đổi quan trọng; **worst-case execution time** và **deterministic scheduling** bảo vệ deadline. **Lock-free buffer**, **zero-copy transport**, **shared-memory transport** và **middleware executor** chuyển data hiệu quả, trong khi **message serialization** tạo một chi phí biên đo được. **Sensor fusion pipeline** tạo state cho **actuator command pipeline**. **Software-in-the-loop** và **processor-in-the-loop** test behavior trước khi deploy lên **electronic control unit** và **motor drive interface**.
