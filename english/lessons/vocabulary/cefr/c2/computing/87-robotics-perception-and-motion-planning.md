# C2 Vocabulary — Robotics perception and motion planning

This lesson follows a robot from geometric representation and perception through planning, control, manipulation, and visual feedback.

Flow: **kinematic chain → configuration space → occupancy grid → signed distance field → motion primitive → trajectory optimization → model predictive control → sampling-based planner → rapidly exploring random tree → forward kinematics → collision checking → grasp pose → visual servoing → robot proprioception → scene graph → object affordance → pose graph → loop closure → sensor calibration → contact-rich manipulation**.

## 1. kinematic chain /ˌkɪnəˈmætɪk tʃeɪn/
**Part of speech:** noun
**Core meaning (English):** a sequence of rigid links and joints whose arrangement determines a robot's pose.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi link cứng và joint quyết định tư thế robot.
**Grammar & collocations:** `kinematic-chain model` — model; `parameterize a joint` — tham số hóa.
**Examples:** `The kinematic chain propagated a wrist movement back to the shoulder joint.` → Chain truyền chuyển động cổ tay về vai.
**Liên kết tiếng Hàn:** `운동학적 체인`.

## 2. configuration space /kənˌfɪɡjəˈreɪʃən speɪs/
**Part of speech:** noun
**Core meaning (English):** a space whose coordinates represent every possible pose or joint configuration of a robot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không gian tọa độ biểu diễn mọi tư thế hoặc cấu hình joint.
**Grammar & collocations:** `configuration-space obstacle` — obstacle; `plan a collision-free path` — lập kế hoạch.
**Examples:** `The planner marked the narrow passage as an obstacle in configuration space.` → Planner đánh dấu passage hẹp.
**Liên kết tiếng Hàn:** `구성 공간`.

## 3. occupancy grid /ˈɒkjəpənsi ɡrɪd/
**Part of speech:** noun
**Core meaning (English):** a discretized map whose cells store the probability that a location is occupied.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản đồ ô rời rạc lưu xác suất vị trí bị chiếm.
**Grammar & collocations:** `occupancy-grid update` — update; `mark a cell as free` — đánh dấu.
**Examples:** `The occupancy grid incorporated a new lidar scan around the doorway.` → Grid cập nhật scan lidar.
**Liên kết tiếng Hàn:** `점유 격자`.

## 4. signed distance field /saɪnd ˈdɪstəns fiːld/
**Part of speech:** noun
**Core meaning (English):** a field that stores signed distance from each point to the nearest surface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** field lưu khoảng cách có dấu tới bề mặt gần nhất.
**Grammar & collocations:** `signed-distance-field gradient` — gradient; `query a surface distance` — truy vấn.
**Examples:** `The signed distance field supplied a smooth collision cost for the optimizer.` → Field cung cấp cost va chạm mượt.
**Liên kết tiếng Hàn:** `부호 거리 필드`.

## 5. motion primitive /ˈmoʊʃən ˈprɪmətɪv/
**Part of speech:** noun
**Core meaning (English):** a short, reusable motion pattern that can be combined into a longer robot trajectory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mẫu chuyển động ngắn có thể ghép thành trajectory dài.
**Grammar & collocations:** `motion-primitive library` — library; `compose a maneuver` — ghép.
**Examples:** `The motion primitive turned the vehicle through a fixed-radius curve.` → Primitive cho xe rẽ theo bán kính cố định.
**Liên kết tiếng Hàn:** `동작 원시`.

## 6. trajectory optimization /trəˈdʒektəri ˌɒptɪməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** optimizing a time-ordered sequence of states and controls subject to dynamics and safety constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tối ưu chuỗi state/control theo thời gian với constraint.
**Grammar & collocations:** `trajectory-optimization cost` — cost; `smooth a control sequence` — làm mượt.
**Examples:** `Trajectory optimization reduced energy while keeping the arm clear of the shelf.` → Optimization giảm energy và tránh kệ.
**Liên kết tiếng Hàn:** `궤적 최적화`.

## 7. model predictive control /ˈmɒdəl prɪˈdɪktɪv kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** control that repeatedly predicts future behavior over a horizon and applies only the first planned action.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dự đoán horizon rồi chỉ thực hiện action đầu, lặp lại.
**Grammar & collocations:** `model-predictive-control horizon` — horizon; `receding-horizon update` — cập nhật.
**Examples:** `Model predictive control corrected the vehicle's course after each new observation.` → MPC sửa course sau mỗi observation.
**Liên kết tiếng Hàn:** `모델 예측 제어`.

## 8. sampling-based planner /ˈsæmplɪŋ beɪst ˈplænər/
**Part of speech:** noun
**Core meaning (English):** a planner that searches feasible paths by sampling states or controls rather than enumerating a grid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** planner tìm path bằng sample state/control thay vì duyệt grid.
**Grammar & collocations:** `sampling-based-planner roadmap` — roadmap; `sample a feasible state` — lấy mẫu.
**Examples:** `The sampling-based planner found a route through the cluttered workspace.` → Planner tìm route qua workspace chật.
**Liên kết tiếng Hàn:** `샘플링 기반 플래너`.

## 9. rapidly exploring random tree /ˈræpɪdli ɪkˈsplɔːrɪŋ ˈrændəm triː/
**Part of speech:** noun
**Core meaning (English):** a tree-growing planner that rapidly covers unexplored configuration space with random extensions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** planner mở rộng tree ngẫu nhiên để phủ configuration space chưa khám phá.
**Grammar & collocations:** `rapidly-exploring-random-tree extension` — extension; `grow a feasible branch` — mở rộng.
**Examples:** `The rapidly exploring random tree reached the goal around the obstacle.` → RRT vòng qua obstacle.
**Liên kết tiếng Hàn:** `빠르게 탐색하는 무작위 트리`.

## 10. forward kinematics /ˈfɔːrwərd kɪnəˈmætɪks/
**Part of speech:** noun
**Core meaning (English):** computing a robot's end-effector pose from its joint values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính pose đầu công tác từ giá trị joint.
**Grammar & collocations:** `forward-kinematics transform` — transform; `map joint angles to pose` — ánh xạ.
**Examples:** `Forward kinematics placed the gripper at the predicted shelf coordinate.` → Kinematics đặt gripper đúng tọa độ.
**Liên kết tiếng Hàn:** `순방향 운동학`.

## 11. collision checking /kəˈlɪʒən ˈtʃekɪŋ/
**Part of speech:** noun
**Core meaning (English):** testing whether a proposed robot state or motion intersects an obstacle.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra state hoặc motion có đụng obstacle không.
**Grammar & collocations:** `collision-checking query` — query; `reject an intersecting path` — loại.
**Examples:** `Collision checking rejected the shortcut because the elbow crossed the wall.` → Checking loại shortcut đụng tường.
**Liên kết tiếng Hàn:** `충돌 검사`.

## 12. grasp pose /ɡrɑːsp poʊz/
**Part of speech:** noun
**Core meaning (English):** the position and orientation at which a robot should place its gripper to seize an object.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vị trí và hướng gripper cần để gắp vật.
**Grammar & collocations:** `grasp-pose hypothesis` — hypothesis; `score a stable grasp` — chấm.
**Examples:** `The planner ranked a side grasp above a top grasp because the object was shallow.` → Planner ưu tiên gắp bên.
**Liên kết tiếng Hàn:** `파지 자세`.

## 13. visual servoing /ˈvɪʒuəl ˈsɜːrvoʊɪŋ/
**Part of speech:** noun
**Core meaning (English):** controlling a robot by using camera observations as feedback about the target pose.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều khiển robot dùng camera feedback về pose target.
**Grammar & collocations:** `visual-servoing loop` — loop; `correct an image error` — sửa.
**Examples:** `Visual servoing aligned the gripper while the camera tracked the moving part.` → Servoing căn gripper theo camera.
**Liên kết tiếng Hàn:** `비주얼 서보잉`.

## 14. robot proprioception /ˈroʊbɒt ˌproʊprioʊˈsepʃən/
**Part of speech:** noun
**Core meaning (English):** sensing a robot's own joint positions, velocities, forces, or internal state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cảm nhận joint, velocity, lực và state bên trong robot.
**Grammar & collocations:** `robot-proprioception signal` — signal; `estimate joint torque` — ước tính.
**Examples:** `Robot proprioception detected resistance before the external camera saw contact.` → Proprioception phát hiện lực cản sớm.
**Liên kết tiếng Hàn:** `로봇 고유수용감각`.

## 15. scene graph /siːn ɡrɑːf/
**Part of speech:** noun
**Core meaning (English):** a structured graph representing objects, attributes, and spatial relations in an observed scene.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph biểu diễn object, thuộc tính và quan hệ không gian.
**Grammar & collocations:** `scene-graph parser` — parser; `infer a spatial relation` — suy ra.
**Examples:** `The scene graph represented the mug as being beside the laptop.` → Graph ghi mug cạnh laptop.
**Liên kết tiếng Hàn:** `장면 그래프`.

## 16. object affordance /ˈɒbdʒɪkt əˈfɔːrdəns/
**Part of speech:** noun
**Core meaning (English):** an action that an object's shape and context make possible for an agent.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** action mà hình dạng và context của vật cho phép.
**Grammar & collocations:** `object-affordance detector` — detector; `infer a graspable handle` — suy ra.
**Examples:** `The object affordance model identified the drawer handle as pullable.` → Model nhận ra tay kéo có thể kéo.
**Liên kết tiếng Hàn:** `객체 행동 가능성`.

## 17. pose graph /poʊz ɡrɑːf/
**Part of speech:** noun
**Core meaning (English):** a graph whose nodes are estimated poses and whose edges encode relative spatial constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph có node là pose và edge là constraint tương đối.
**Grammar & collocations:** `pose-graph optimization` — optimization; `add a relative transform` — thêm.
**Examples:** `The pose graph aligned camera positions collected on separate passes.` → Graph căn pose camera giữa các lượt.
**Liên kết tiếng Hàn:** `포즈 그래프`.

## 18. loop closure /luːp ˈkloʊʒər/
**Part of speech:** noun
**Core meaning (English):** recognizing that a robot has returned to a previously mapped place and correcting accumulated drift.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhận ra quay lại nơi cũ để sửa drift tích lũy.
**Grammar & collocations:** `loop-closure constraint` — constraint; `detect a revisited landmark` — phát hiện.
**Examples:** `Loop closure corrected the map after the robot completed the corridor circuit.` → Closure sửa map sau vòng corridor.
**Liên kết tiếng Hàn:** `루프 폐쇄`.

## 19. sensor calibration /ˈsensər ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** estimating sensor parameters and relative alignments so measurements share a consistent coordinate system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính parameter và alignment để sensor chung hệ tọa độ.
**Grammar & collocations:** `sensor-calibration target` — target; `estimate an extrinsic transform` — ước tính.
**Examples:** `Sensor calibration aligned the camera and lidar before mapping began.` → Calibration căn camera và lidar.
**Liên kết tiếng Hàn:** `센서 보정`.

## 20. contact-rich manipulation /ˈkɒntækt rɪtʃ məˌnɪpjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** manipulation in which forces, friction, and changing contacts are central to successful motion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thao tác mà lực, ma sát và contact thay đổi là trọng tâm.
**Grammar & collocations:** `contact-rich-manipulation policy` — policy; `control a sliding contact` — điều khiển.
**Examples:** `Contact-rich manipulation let the robot slide a key into a tight lock.` → Manipulation giúp trượt chìa vào ổ.
**Liên kết tiếng Hàn:** `접촉이 많은 조작`.

## Review in context

A **kinematic chain** maps into **configuration space**, where an **occupancy grid**, **signed distance field**, and **motion primitive** support **trajectory optimization** and **model predictive control**. A **sampling-based planner** such as a **rapidly exploring random tree** uses **forward kinematics** and **collision checking** to reach a **grasp pose**. **Visual servoing** and **robot proprioception** close the control loop; a **scene graph**, **object affordance**, **pose graph**, **loop closure**, and **sensor calibration** support **contact-rich manipulation**.

**Bản dịch tiếng Việt:** **Kinematic chain** đi vào **configuration space**, nơi **occupancy grid**, **signed distance field** và **motion primitive** hỗ trợ **trajectory optimization** và **model predictive control**. **Sampling-based planner** như **rapidly exploring random tree** dùng **forward kinematics** và **collision checking** để tới **grasp pose**. **Visual servoing** và **robot proprioception** khép vòng điều khiển; **scene graph**, **object affordance**, **pose graph**, **loop closure** và **sensor calibration** hỗ trợ **contact-rich manipulation**.
