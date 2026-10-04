# C2 Vocabulary — Robotics sensing and motion-planning hardware

This lesson connects inertial and tactile sensing to calibrated kinematics, contact control, collision geometry, and motion execution.

Flow: **inertial sensor fusion → factor-graph optimization → preintegration residual → visual-inertial odometry → loop-closure constraint → pose-graph edge → kinematic calibration → contact-force observer → impedance controller → whole-body coordination → trajectory retiming → jerk limit → collision-distance field → signed-distance query → grasp wrench space → slip detector → tactile feature map → event-camera timestamp → rolling-shutter correction → depth-completion network**.

## 1. inertial sensor fusion /ɪnˈɜːrʃəl ˈsensər ˈfjuːʒən/
**Part of speech:** noun
**Core meaning (English):** combining accelerometer and gyroscope data with other sensors to estimate motion or pose.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp accelerometer, gyroscope và sensor khác để estimate motion hoặc pose.
**Grammar & collocations:** `inertial-sensor-fusion filter` — filter; `combine asynchronous measurements` — gộp measurement asynchronous.
**Examples:** `Inertial sensor fusion stabilized pose during the camera exposure gap.` → Fusion sensor-inertial ổn định pose trong camera exposure gap.
**Liên kết tiếng Hàn:** `관성 센서 융합`.

## 2. factor-graph optimization /ˈfæktər ɡræf ˌɑːptəməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** estimating states by optimizing a graph of variables and measurement factors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimate state bằng optimize graph variable và measurement factor.
**Grammar & collocations:** `factor-graph-optimization residual` — residual; `solve a batch pose problem` — giải pose problem theo batch.
**Examples:** `Factor-graph optimization reconciled inertial drift with the map landmarks.` → Optimization graph-factor reconcile inertial drift với map landmark.
**Liên kết tiếng Hàn:** `팩터 그래프 최적화`.

## 3. preintegration residual /ˌpriːɪntəˈɡreɪʃən rɪˈzɪdʒuəl/
**Part of speech:** noun
**Core meaning (English):** mismatch between an inertial preintegrated measurement and the state transition it predicts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mismatch giữa inertial measurement preintegrated và state transition nó dự đoán.
**Grammar & collocations:** `preintegration-residual Jacobian` — Jacobian; `correct a bias estimate` — sửa bias estimate.
**Examples:** `The preintegration residual grew after the gyro bias changed with temperature.` → Residual preintegration tăng sau khi gyro bias đổi theo temperature.
**Liên kết tiếng Hàn:** `사전 적분 잔차`.

## 4. visual-inertial odometry /ˈvɪʒuəl ɪnˈɜːrʃəl oʊˈdɑːmətri/
**Part of speech:** noun
**Core meaning (English):** estimating motion by combining camera observations with inertial measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimate motion bằng gộp camera observation và inertial measurement.
**Grammar & collocations:** `visual-inertial-odometry scale` — scale; `track motion between frames` — track motion giữa frame.
**Examples:** `Visual-inertial odometry maintained a trajectory through the texture-poor hallway.` → Odometry visual-inertial giữ trajectory qua hallway ít texture.
**Liên kết tiếng Hàn:** `시각 관성 주행거리계`.

## 5. loop-closure constraint /luːp ˈkloʊʒər kənˈstreɪnt/
**Part of speech:** noun
**Core meaning (English):** constraint asserting that a revisited place should have a consistent estimated pose.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** constraint nơi revisit phải có pose estimate nhất quán.
**Grammar & collocations:** `loop-closure-constraint match` — match; `remove accumulated drift` — loại drift tích lũy.
**Examples:** `The loop-closure constraint corrected a slow map warp after several minutes.` → Constraint closure-loop sửa map warp chậm sau vài phút.
**Liên kết tiếng Hàn:** `루프 폐쇄 제약`.

## 6. pose-graph edge /poʊz ɡræf edʒ/
**Part of speech:** noun
**Core meaning (English):** relative-pose relation connecting two nodes in a pose graph.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** relation relative-pose nối hai node trong pose graph.
**Grammar & collocations:** `pose-graph-edge covariance` — covariance; `add a relative transform` — thêm relative transform.
**Examples:** `A bad pose-graph edge pulled the optimized trajectory toward a false landmark.` → Edge graph-pose xấu kéo trajectory optimize về landmark giả.
**Liên kết tiếng Hàn:** `포즈 그래프 에지`.

## 7. kinematic calibration /ˌkɪnəˈmætɪk ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** estimating robot geometry and joint parameters from measured poses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimate robot geometry và joint parameter từ pose đo.
**Grammar & collocations:** `kinematic-calibration target` — target; `fit link-length error` — fit link-length error.
**Examples:** `Kinematic calibration reduced tool-tip error at the edge of the workspace.` → Calibration kinematic giảm tool-tip error ở edge workspace.
**Liên kết tiếng Hàn:** `기구학적 보정`.

## 8. contact-force observer /ˈkɑːntækt fɔːrs əbˈzɜːrvər/
**Part of speech:** noun
**Core meaning (English):** estimator that infers contact force from motion, torque, and actuator measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator suy contact force từ motion, torque và actuator measurement.
**Grammar & collocations:** `contact-force-observer residual` — residual; `estimate an unmeasured wrench` — estimate wrench không đo.
**Examples:** `The contact-force observer detected the gripper touching the compliant surface.` → Observer force-contact detect gripper chạm surface compliant.
**Liên kết tiếng Hàn:** `접촉력 관측기`.

## 9. impedance controller /ɪmˈpiːdəns kənˈtroʊlər/
**Part of speech:** noun
**Core meaning (English):** controller that regulates a desired relationship between motion error and applied force.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** controller điều chỉnh quan hệ mong muốn giữa motion error và force áp.
**Grammar & collocations:** `impedance-controller stiffness` — stiffness; `yield under contact` — yield khi contact.
**Examples:** `The impedance controller softened the arm before contact with the fixture.` → Controller impedance làm mềm arm trước contact fixture.
**Liên kết tiếng Hàn:** `임피던스 제어기`.

## 10. whole-body coordination /hoʊl ˈbɑːdi koʊˌɔːrdəˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** coordinating multiple robot joints and tasks under shared balance and contact constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phối hợp nhiều joint và task robot dưới balance/contact constraint chung.
**Grammar & collocations:** `whole-body-coordination priority` — priority; `allocate joint motion` — phân bổ joint motion.
**Examples:** `Whole-body coordination kept the base stable while the arm reached overhead.` → Coordination body-whole giữ base ổn khi arm với overhead.
**Liên kết tiếng Hàn:** `전신 협조 제어`.

## 11. trajectory retiming /trəˈdʒektəri riːˈtaɪmɪŋ/
**Part of speech:** noun
**Core meaning (English):** changing when points along a planned trajectory occur without changing its geometric path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi timing point trên trajectory mà không đổi geometric path.
**Grammar & collocations:** `trajectory-retiming algorithm` — algorithm; `respect actuator limits` — tuân actuator limit.
**Examples:** `Trajectory retiming slowed the motion near the heavy payload segment.` → Retime trajectory làm chậm motion gần payload nặng.
**Liên kết tiếng Hàn:** `궤적 재시간화`.

## 12. jerk limit /dʒɜːrk ˈlɪmət/
**Part of speech:** noun
**Core meaning (English):** maximum allowed rate of change of acceleration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rate tối đa cho phép của acceleration change.
**Grammar & collocations:** `jerk-limit constraint` — constraint; `smooth a trajectory` — smooth trajectory.
**Examples:** `The jerk limit prevented a sharp vibration at the end-effector.` → Limit jerk ngăn vibration sharp ở end-effector.
**Liên kết tiếng Hàn:** `저크 한계`.

## 13. collision-distance field /kəˈlɪʒən ˈdɪstəns fiːld/
**Part of speech:** noun
**Core meaning (English):** spatial field encoding distance from robot geometry to collision obstacles.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** spatial field encode distance từ robot geometry tới obstacle collision.
**Grammar & collocations:** `collision-distance-field gradient` — gradient; `steer away from an obstacle` — steer khỏi obstacle.
**Examples:** `The collision-distance field redirected the wrist before the safety margin vanished.` → Field distance-collision redirect wrist trước safety margin biến mất.
**Liên kết tiếng Hàn:** `충돌 거리장`.

## 14. signed-distance query /saɪnd ˈdɪstəns ˈkwɪəri/
**Part of speech:** noun
**Core meaning (English):** query returning signed distance and often a surface direction relative to a shape.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** query trả signed distance và surface direction so với shape.
**Grammar & collocations:** `signed-distance-query gradient` — gradient; `evaluate collision clearance` — evaluate collision clearance.
**Examples:** `The signed-distance query supplied a normal for the avoidance controller.` → Query distance-signed cung cấp normal cho avoidance controller.
**Liên kết tiếng Hàn:** `부호 거리 질의`.

## 15. grasp wrench space /ɡræsp rentʃ speɪs/
**Part of speech:** noun
**Core meaning (English):** set of forces and torques an arrangement of contacts can apply to an object.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập force và torque arrangement contact có thể áp lên object.
**Grammar & collocations:** `grasp-wrench-space criterion` — criterion; `test force-closure` — test force-closure.
**Examples:** `The grasp wrench space excluded a lift that would rotate the fragile part.` → Space wrench-grasp loại lift làm part fragile xoay.
**Liên kết tiếng Hàn:** `파지 렌치 공간`.

## 16. slip detector /slɪp dɪˈtektər/
**Part of speech:** noun
**Core meaning (English):** system that identifies relative motion between a gripper and an object.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** system detect relative motion giữa gripper và object.
**Grammar & collocations:** `slip-detector threshold` — threshold; `increase grip force` — tăng grip force.
**Examples:** `The slip detector increased grip force before the package fell.` → Detector slip tăng grip force trước khi package rơi.
**Liên kết tiếng Hàn:** `미끄럼 검출기`.

## 17. tactile feature map /ˈtæktəl ˈfiːtʃər mæp/
**Part of speech:** noun
**Core meaning (English):** spatial representation of contact features measured by a tactile sensor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn spatial của contact feature do tactile sensor đo.
**Grammar & collocations:** `tactile-feature-map registration` — registration; `localize a contact edge` — định vị contact edge.
**Examples:** `The tactile feature map identified the seam before vision found it.` → Map feature-tactile identify seam trước vision.
**Liên kết tiếng Hàn:** `촉각 특징 맵`.

## 18. event-camera timestamp /ɪˈvent ˈkæmrə ˈtaɪmstæmp/
**Part of speech:** noun
**Core meaning (English):** precise time attached to an individual brightness-change event from an event camera.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** time chính xác gắn với brightness-change event của event camera.
**Grammar & collocations:** `event-camera-timestamp alignment` — alignment; `synchronize asynchronous events` — sync asynchronous event.
**Examples:** `Event-camera timestamp alignment reduced motion blur in the pose estimate.` → Alignment timestamp-camera-event giảm motion blur trong pose estimate.
**Liên kết tiếng Hàn:** `이벤트 카메라 타임스탬프`.

## 19. rolling-shutter correction /ˈroʊlɪŋ ˈʃʌtər kəˈrekʃən/
**Part of speech:** noun
**Core meaning (English):** compensation for different exposure times across rows of a rolling-shutter image.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bù exposure time khác nhau giữa row của rolling-shutter image.
**Grammar & collocations:** `rolling-shutter-correction model` — model; `warp rows to a common time` — warp row về cùng time.
**Examples:** `Rolling-shutter correction removed the apparent bend in the fast-moving arm.` → Correction shutter-rolling loại bend apparent của arm chuyển nhanh.
**Liên kết tiếng Hàn:** `롤링 셔터 보정`.

## 20. depth-completion network /depθ kəmˈpliːʃən ˈnetwɜːrk/
**Part of speech:** noun
**Core meaning (English):** model that fills missing depth values using sparse depth and image context.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model fill depth value thiếu bằng sparse depth và image context.
**Grammar & collocations:** `depth-completion-network confidence` — confidence; `densify a sparse depth map` — densify depth map.
**Examples:** `The depth-completion network filled gaps behind the reflective object.` → Network completion-depth fill gap sau object phản xạ.
**Liên kết tiếng Hàn:** `깊이 완성 네트워크`.

## Review in context

**Inertial sensor fusion**, **factor-graph optimization**, **preintegration residual**, and **visual-inertial odometry** use a **loop-closure constraint**, **pose-graph edge**, and **kinematic calibration**. A **contact-force observer**, **impedance controller**, **whole-body coordination**, **trajectory retiming**, and **jerk limit** guide motion through a **collision-distance field** and **signed-distance query**. **Grasp wrench space**, a **slip detector**, **tactile feature map**, **event-camera timestamp**, **rolling-shutter correction**, and **depth-completion network** complete robust perception and manipulation.

**Bản dịch tiếng Việt:** **Inertial sensor fusion**, **factor-graph optimization**, **preintegration residual** và **visual-inertial odometry** dùng **loop-closure constraint**, **pose-graph edge** và **kinematic calibration**. **Contact-force observer**, **impedance controller**, **whole-body coordination**, **trajectory retiming** và **jerk limit** dẫn motion qua **collision-distance field** và **signed-distance query**. **Grasp wrench space**, **slip detector**, **tactile feature map**, **event-camera timestamp**, **rolling-shutter correction** và **depth-completion network** hoàn tất perception và manipulation robust.
