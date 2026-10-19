# C2 Vocabulary — Robotics control and motion planning

This lesson follows a robot from state estimation and coordinate frames through planning, actuator limits, and feedback control.

Flow: **state estimation → odometry drift → visual odometry → coordinate transform → frame convention → costmap layer → path planner → trajectory planner → kinematic constraint → dynamic constraint → collision envelope → safety margin → actuator saturation → control loop → feedback gain → proportional-integral-derivative → feedforward term → state feedback → linear quadratic regulator → system identification**.

## 1. state estimation /steɪt ˌestɪˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** inferring a robot's position, motion, or hidden state from noisy sensor observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy ra position, motion hoặc state ẩn từ sensor nhiễu.
**Grammar & collocations:** `state-estimation uncertainty` — uncertainty; `fuse sensor observations` — gộp.
**Examples:** `State estimation combined wheel speed and camera data to locate the robot.` → Estimation gộp tốc độ bánh và camera.
**Liên kết tiếng Hàn:** `상태 추정`.

## 2. odometry drift /oʊˈdɒmətri drɪft/
**Part of speech:** noun
**Core meaning (English):** accumulated error in a motion estimate that grows as a robot integrates imperfect movement measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi tích lũy trong estimate motion tăng khi tích phân measurement không hoàn hảo.
**Grammar & collocations:** `odometry-drift correction` — correction; `bound accumulated error` — giới hạn.
**Examples:** `Odometry drift moved the estimated pose several meters from the mapped corridor.` → Drift làm pose lệch vài mét.
**Liên kết tiếng Hàn:** `주행 거리계 드리프트`.

## 3. visual odometry /ˈvɪʒuəl oʊˈdɒmətri/
**Part of speech:** noun
**Core meaning (English):** estimating camera motion by tracking visual features across successive images.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước lượng motion camera bằng theo dõi feature qua ảnh liên tiếp.
**Grammar & collocations:** `visual-odometry track` — track; `match image features` — khớp.
**Examples:** `Visual odometry estimated forward motion when the wheel encoder slipped.` → VO estimate motion trước khi encoder trượt.
**Liên kết tiếng Hàn:** `시각 주행 거리계`.

## 4. coordinate transform /koʊˈɔːrdəneɪt trænsˈfɔːrm/
**Part of speech:** noun
**Core meaning (English):** a mathematical operation converting a point or vector between reference coordinate systems.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép toán đổi point/vector giữa hệ tọa độ tham chiếu.
**Grammar & collocations:** `coordinate-transform matrix` — matrix; `map a point into world space` — map.
**Examples:** `The coordinate transform moved the camera measurement into the robot frame.` → Transform đưa measurement camera vào frame robot.
**Liên kết tiếng Hàn:** `좌표 변환`.

## 5. frame convention /freɪm kənˈvenʃən/
**Part of speech:** noun
**Core meaning (English):** an agreed definition of axes, directions, and orientation for a coordinate frame.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy ước axis, direction và orientation của frame tọa độ.
**Grammar & collocations:** `frame-convention document` — document; `define a forward axis` — định nghĩa.
**Examples:** `The frame convention prevented the planner from reversing the vehicle's forward direction.` → Convention ngăn planner đảo hướng xe.
**Liên kết tiếng Hàn:** `좌표계 규약`.

## 6. costmap layer /ˈkɒstˌmæp ˈleɪər/
**Part of speech:** noun
**Core meaning (English):** one layer of a grid assigning traversal costs based on obstacles, inflation, or dynamic information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** layer grid gán cost đi qua theo obstacle, inflation hoặc data động.
**Grammar & collocations:** `costmap-layer update` — update; `inflate an obstacle` — mở rộng.
**Examples:** `The costmap layer marked the wet floor as traversable but expensive.` → Layer đánh dấu sàn ướt đi được nhưng cost cao.
**Liên kết tiếng Hàn:** `코스트맵 레이어`.

## 7. path planner /pɑːθ ˈplænər/
**Part of speech:** noun
**Core meaning (English):** a component that selects a collision-free route from a start state to a goal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component chọn route không va chạm từ start tới goal.
**Grammar & collocations:** `path-planner search` — search; `avoid a blocked corridor` — tránh.
**Examples:** `The path planner routed around the temporary construction barrier.` → Planner route quanh barrier tạm.
**Liên kết tiếng Hàn:** `경로 계획기`.

## 8. trajectory planner /trəˈdʒektəri ˈplænər/
**Part of speech:** noun
**Core meaning (English):** a component that chooses a time-parameterized motion satisfying vehicle and environment constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component chọn motion có time, thỏa constraint xe và môi trường.
**Grammar & collocations:** `trajectory-planner horizon` — horizon; `generate a smooth motion` — sinh.
**Examples:** `The trajectory planner slowed the arm before it entered the narrow workspace.` → Planner giảm tốc arm trước workspace hẹp.
**Liên kết tiếng Hàn:** `궤적 계획기`.

## 9. kinematic constraint /ˌkɪnəˈmætɪk kənˈstreɪnt/
**Part of speech:** noun
**Core meaning (English):** a restriction on motion arising from geometry, joints, wheels, or allowable positions and velocities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn motion do geometry, joint, bánh hoặc position/velocity cho phép.
**Grammar & collocations:** `kinematic-constraint solver` — solver; `respect a turning radius` — tuân theo.
**Examples:** `The kinematic constraint prevented the car-like robot from moving sideways.` → Constraint ngăn robot kiểu xe đi ngang.
**Liên kết tiếng Hàn:** `기구학적 제약`.

## 10. dynamic constraint /daɪˈnæmɪk kənˈstreɪnt/
**Part of speech:** noun
**Core meaning (English):** a restriction based on forces, acceleration, energy, or actuator capabilities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn dựa trên force, acceleration, energy hoặc actuator.
**Grammar & collocations:** `dynamic-constraint check` — check; `limit acceleration` — giới hạn.
**Examples:** `The dynamic constraint rejected a trajectory that demanded more torque than the motor could supply.` → Constraint từ chối trajectory cần torque quá motor.
**Liên kết tiếng Hàn:** `동역학적 제약`.

## 11. collision envelope /kəˈlɪʒən ˈenvəloʊp/
**Part of speech:** noun
**Core meaning (English):** a geometric region representing the space a robot or object occupies for collision checking.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng hình học đại diện space robot/object chiếm để check collision.
**Grammar & collocations:** `collision-envelope margin` — margin; `inflate the robot footprint` — mở rộng.
**Examples:** `The collision envelope included the camera mast above the vehicle body.` → Envelope gồm mast camera trên thân xe.
**Liên kết tiếng Hàn:** `충돌 포락선`.

## 12. safety margin /ˈseɪfti ˈmɑːrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** extra distance, time, capacity, or tolerance kept between operation and a dangerous limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách/time/capacity dư giữ giữa operation và limit nguy hiểm.
**Grammar & collocations:** `safety-margin requirement` — requirement; `keep clearance from an obstacle` — giữ.
**Examples:** `The planner kept a larger safety margin near the moving forklift.` → Planner giữ margin lớn gần forklift.
**Liên kết tiếng Hàn:** `안전 여유`.

## 13. actuator saturation /ˈæktʃueɪtər ˌsætʃəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** a condition in which an actuator reaches its maximum or minimum output and cannot respond further.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** actuator chạm output max/min nên không đáp ứng thêm.
**Grammar & collocations:** `actuator-saturation limit` — limit; `clamp a motor command` — kẹp.
**Examples:** `Actuator saturation made the controller unable to cancel the sudden lateral force.` → Saturation khiến controller không triệt force ngang.
**Liên kết tiếng Hàn:** `액추에이터 포화`.

## 14. control loop /kənˈtroʊl luːp/
**Part of speech:** noun
**Core meaning (English):** a repeated process that measures a system, compares it with a target, and applies corrective action.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process lặp đo system, so target rồi áp correction.
**Grammar & collocations:** `control-loop frequency` — frequency; `close the loop` — khép.
**Examples:** `The control loop corrected heading error every twenty milliseconds.` → Loop sửa heading mỗi 20 ms.
**Liên kết tiếng Hàn:** `제어 루프`.

## 15. feedback gain /ˈfiːdbæk ɡeɪn/
**Part of speech:** noun
**Core meaning (English):** a factor determining how strongly a controller reacts to measured error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ số quyết định controller phản ứng mạnh thế nào với error đo.
**Grammar & collocations:** `feedback-gain tuning` — tuning; `increase corrective response` — tăng.
**Examples:** `The engineer lowered feedback gain to stop the arm from oscillating.` → Engineer giảm gain để arm không dao động.
**Liên kết tiếng Hàn:** `피드백 이득`.

## 16. proportional-integral-derivative /prəˈpɔːrʃənəl ˈɪntɪɡrəl dɪˈrɪvətɪv/
**Part of speech:** noun
**Core meaning (English):** a controller combining present error, accumulated error, and error change to compute an action.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** controller gộp error hiện tại, tích lũy và tốc độ đổi error.
**Grammar & collocations:** `proportional-integral-derivative controller` — controller; `tune derivative action` — chỉnh.
**Examples:** `The proportional-integral-derivative controller held the platform level despite a changing load.` → PID giữ platform cân bằng dù load đổi.
**Liên kết tiếng Hàn:** `비례 적분 미분`.

## 17. feedforward term /ˈfiːdfɔːrd tɜːrm/
**Part of speech:** noun
**Core meaning (English):** a control contribution based on expected demand or system model rather than measured error alone.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần control dựa demand/model dự kiến, không chỉ error đo.
**Grammar & collocations:** `feedforward-term estimate` — estimate; `compensate for known load` — bù.
**Examples:** `The feedforward term countered the known gravity load before feedback corrected the remainder.` → Term bù gravity trước feedback sửa phần còn.
**Liên kết tiếng Hàn:** `피드포워드 항`.

## 18. state feedback /steɪt ˈfiːdbæk/
**Part of speech:** noun
**Core meaning (English):** control based on estimated internal state variables rather than only a single output error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control dựa state nội ước lượng thay chỉ error output.
**Grammar & collocations:** `state-feedback gain` — gain; `stabilize an estimated state` — ổn định.
**Examples:** `State feedback used position and velocity estimates to stabilize the drone.` → Feedback state dùng position và velocity để ổn định drone.
**Liên kết tiếng Hàn:** `상태 피드백`.

## 19. linear quadratic regulator /ˈlɪniər ˈkwɒdrətɪk ˈreɡjəleɪtər/
**Part of speech:** noun
**Core meaning (English):** a controller that minimizes a quadratic cost over linear system dynamics and control effort.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** controller tối ưu cost quadratic trên dynamics tuyến tính và control effort.
**Grammar & collocations:** `linear-quadratic-regulator gain` — gain; `penalize control effort` — phạt.
**Examples:** `The linear quadratic regulator balanced tracking accuracy against battery use.` → LQR cân bằng tracking và pin.
**Liên kết tiếng Hàn:** `선형 이차 조절기`.

## 20. system identification /ˈsɪstəm aɪˌdentɪfɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** learning a mathematical model of a system from measured inputs and outputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học model toán của system từ input/output đo được.
**Grammar & collocations:** `system-identification experiment` — experiment; `fit a plant model` — fit.
**Examples:** `System identification estimated the motor response before the controller was tuned.` → Identification estimate response motor trước tune.
**Liên kết tiếng Hàn:** `시스템 식별`.

## Review in context

**State estimation** combines observations, but **odometry drift** accumulates; **visual odometry** and a **coordinate transform** depend on a clear **frame convention**. A **costmap layer** feeds a **path planner** and **trajectory planner**, which obey a **kinematic constraint**, **dynamic constraint**, **collision envelope**, and **safety margin**. **Actuator saturation** limits a **control loop**; **feedback gain**, a **proportional-integral-derivative** controller, and a **feedforward term** shape correction. **State feedback** can use a **linear quadratic regulator**, while **system identification** learns the model first.

**Bản dịch tiếng Việt:** **State estimation** gộp observation nhưng **odometry drift** tích lũy; **visual odometry** và **coordinate transform** cần **frame convention** rõ. **Costmap layer** cấp cho **path planner** và **trajectory planner**, chúng tuân **kinematic constraint**, **dynamic constraint**, **collision envelope** và **safety margin**. **Actuator saturation** giới hạn **control loop**; **feedback gain**, controller **proportional-integral-derivative** và **feedforward term** định hình correction. **State feedback** có thể dùng **linear quadratic regulator**, còn **system identification** học model trước.
