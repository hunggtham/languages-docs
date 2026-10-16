# C1 Vocabulary 02 — Inverse kinematics, motion planning algorithms, and simultaneous localization and mapping (SLAM)

This lesson explores advanced concepts in **robotics**, **inverse kinematics**, **motion planning algorithms**, and **simultaneous localization and mapping (SLAM)**. Designed for C1-level learners, these terms examine how roboticists, software engineers, and automation specialists formulate spatial control, path optimization, and real-time mapping for autonomous machines.

---

## 1. inverse kinematics solver
- **Pronunciation:** /ɪnˈvɜrs kɪnəˈmætɪks ˈsɑlvər/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ trong điều khiển cánh tay robot.
- **Core meaning — English:** A computational algorithm that calculates the necessary joint angles and actuator parameters required for a robotic manipulator's end-effector to reach a target spatial coordinate.
- **Core meaning & mental image — Tiếng Việt:** Bộ giải động học ngược; hình ảnh bộ não toán học tính toán cách uốn cong từng khớp vai, khuỷu tay và cổ tay của robot để bàn tay chạm chính xác vào một điểm trong không gian.
- **Grammar & collocations:** 
  - run an inverse kinematics solver (chạy bộ giải động học ngược)
  - real-time inverse kinematics solver (bộ giải động học ngược thời gian thực)
  - numerical inverse kinematics solver (bộ giải động học ngược số)
- **Register & nuance:** Technical robotics and kinematics register; essential for robotic manipulation and animation.
- **Examples:**
  - The robotic arm's internal inverse kinematics solver calculates joint trajectories within milliseconds to grasp moving objects. (Bộ giải động học ngược bên trong cánh tay robot tính toán các quỹ đạo khớp trong vòng vài mili giây để chộp lấy các vật thể đang chuyển động.)
  - Complex redundant manipulators require advanced iterative inverse kinematics solvers to handle multiple valid joint configurations. (Các cánh tay robot dư thừa phức tạp đòi hỏi các bộ giải động học ngược lặp tiên tiến để xử lý nhiều cấu hình khớp hợp lệ.)
- **Liên kết tiếng Hàn:** 역기구학 해법기 (Yeokgiguhak Haebeopgi) — Bộ giải động học ngược.

## 2. motion planning algorithm
- **Pronunciation:** /ˈmoʊʃən ˈplænɪŋ ˈælgəˌrɪðəm/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ trong điều hướng tự động.
- **Core meaning — English:** A computational procedure that determines a feasible, collision-free path for a robot to navigate from a starting configuration to a goal destination.
- **Core meaning & mental image — Tiếng Việt:** Thuật toán lập kế hoạch chuyển động; hình ảnh bản đồ định tuyến vạch ra con đường mượt mà, tránh mọi vật cản để robot di chuyển an toàn từ điểm A đến điểm B.
- **Grammar & collocations:** 
  - develop a motion planning algorithm (phát triển thuật toán lập kế hoạch chuyển động)
  - optimal motion planning algorithm (thuật toán lập kế hoạch chuyển động tối ưu)
  - sampling-based motion planning algorithm (thuật toán lập kế hoạch chuyển động dựa trên mẫu)
- **Register & nuance:** Professional robotics and AI navigation register.
- **Examples:**
  - Autonomous mobile robots rely on a sophisticated motion planning algorithm to navigate crowded warehouse aisles. (Các robot di động tự động phụ thuộc vào thuật toán lập kế hoạch chuyển động tinh vi để điều hướng qua các lối đi nhà kho đông đúc.)
  - Integrating machine learning into the motion planning algorithm significantly reduced transit times for delivery drones. (Việc tích hợp học máy vào thuật toán lập kế hoạch chuyển động đã giảm đáng kể thời gian vận chuyển cho các drone giao hàng.)
- **Liên kết tiếng Hàn:** 모션 플래닝 알고리즘 (Mosyeon Peullaening Arogeorim) — Thuật toán lập kế hoạch chuyển động.

## 3. simultaneous localization and mapping
- **Pronunciation:** /,saɪməlˈteɪniəs loʊˌkəlɪˈzeɪʃən ənd ˈmæpɪŋ/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường viết tắt là SLAM; làm chủ ngữ hoặc tân ngữ trong điều hướng tự trị.
- **Core meaning — English:** The computational process whereby an autonomous vehicle or robot constructs a map of an unknown environment while simultaneously keeping track of its own location within it.
- **Core meaning & mental image — Tiếng Việt:** Định vị và lập bản đồ đồng thời (SLAM); hình ảnh nhà thám hiểm vừa vẽ bản đồ hang động bằng đèn pin vừa xác định chính xác vị trí mình đang đứng trong hang đó.
- **Grammar & collocations:** 
  - perform simultaneous localization and mapping (thực hiện định vị và lập bản đồ đồng thời)
  - visual simultaneous localization and mapping (định vị và lập bản đồ đồng thời thị giác)
  - robust simultaneous localization and mapping system (hệ thống SLAM vững chắc)
- **Register & nuance:** Advanced robotics, autonomous driving, and computer vision register.
- **Examples:**
  - Self-driving cars utilize LiDAR-based simultaneous localization and mapping to navigate GPS-denied environments like underground tunnels. (Xe tự hành sử dụng công nghệ SLAM dựa trên LiDAR để điều hướng qua các môi trường mất tín hiệu GPS như hầm ngầm.)
  - Real-time simultaneous localization and mapping requires immense computational power to process dense sensor streams. (Việc định vị và lập bản đồ đồng thời thời gian thực đòi hỏi sức mạnh tính toán cực lớn để xử lý các luồng cảm biến dày đặc.)
- **Liên kết tiếng Hàn:** 동시적 위치 추정 및 지도 작성 (Dongsi-jeok Wichi Chujeong mit Jido Jakseong) — SLAM (Định vị và lập bản đồ đồng thời).

## 4. end-effector trajectory
- **Pronunciation:** /ɛnd ɪˈfɛktər trəˈdʒɛktəri/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ trong điều khiển cơ điện tử.
- **Core meaning — English:** The predetermined path through three-dimensional space that a robot's terminal tool, gripper, or welding torch must follow during an operation.
- **Core meaning & mental image — Tiếng Việt:** Quỹ đạo phần cuối công tác; hình ảnh đường vạch sáng lơ lửng trong không gian mà đầu mỏ hàn của robot phải bám sát từng milimet.
- **Grammar & collocations:** 
  - track an end-effector trajectory (theo dõi quỹ đạo phần cuối công tác)
  - smooth end-effector trajectory (quỹ đạo phần cuối công tác mượt mà)
  - plan an end-effector trajectory (lập kế hoạch quỹ đạo phần cuối công tác)
- **Register & nuance:** Technical robotics and manufacturing automation register.
- **Examples:**
  - Precision assembly tasks demand an extremely accurate end-effector trajectory to avoid damaging delicate microchips. (Các tác vụ lắp ráp chính xác đòi hỏi quỹ đạo phần cuối công tác cực kỳ chuẩn xác để tránh làm hỏng các vi mạch mỏng manh.)
  - The engineer programmed a parabolic end-effector trajectory for the dispensing robot to apply glue evenly. (Kỹ sư đã lập trình quỹ đạo phần cuối công tác theo dạng parabol cho robot bơm keo để rải keo đều đặn.)
- **Liên kết tiếng Hàn:** 엔드이펙터 궤적 (Endu-ipekteo Gwejeok) — Quỹ đạo dụng cụ đầu cuối.

## 5. degree of freedom manipulation
- **Pronunciation:** /dɪˈɡri əv ˈfriːdəm məˌnɪpjuˈleɪʃən/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm tân ngữ hoặc bổ ngữ trong thiết kế cơ khí robot.
- **Core meaning — English:** The number of independent parameters or joint movements that define the configuration and spatial positioning capabilities of a robotic arm.
- **Core meaning & mental image — Tiếng Việt:** Khả năng thao tác bậc tự do; hình ảnh khớp cử động linh hoạt theo nhiều hướng xoay, gập, ngửa giống như cánh tay con người.
- **Grammar & collocations:** 
  - six-degree of freedom manipulation (thao tác sáu bậc tự do)
  - multi-degree of freedom manipulation (thao tác đa bậc tự do)
  - enhance degree of freedom manipulation (nâng cao khả năng thao tác bậc tự do)
- **Register & nuance:** Mechanical engineering and robotics register.
- **Examples:**
  - Advanced industrial robots feature seven-degree of freedom manipulation to reach around obstacles inside confined engine compartments. (Các robot công nghiệp tiên tiến có tính năng thao tác bảy bậc tự do để với qua các chướng ngại vật bên trong khoang động cơ chật hẹp.)
  - Increasing the degree of freedom manipulation allows robotic hands to grasp arbitrarily shaped objects with dexterity. (Việc tăng cường khả năng thao tác bậc tự do cho phép bàn tay robot nắm bắt các vật thể hình thù tùy ý một cách khéo léo.)
- **Liên kết tiếng Hàn:** 자유도 조작 (Jayudo Jojak) — Thao tác bậc tự do.

## 6. configuration space obstacle
- **Pronunciation:** /,kɑnfəɡjəˈreɪʃən speɪs ˈɑbstəkəl/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm tân ngữ trong toán học robot và quy hoạch đường đi.
- **Core meaning — English:** The mapped region in a robot's mathematical joint space representing disallowed configurations where collisions occur with physical barriers.
- **Core meaning & mental image — Tiếng Việt:** Vật cản không gian cấu hình; hình ảnh vùng tối bị khóa trong không gian toán học biểu thị những góc xoay khớp bị cấm vì sẽ đâm vào tường.
- **Grammar & collocations:** 
  - avoid configuration space obstacles (tránh các vật cản không gian cấu hình)
  - map configuration space obstacles (lập bản đồ vật cản không gian cấu hình)
  - complex configuration space obstacle (vật cản không gian cấu hình phức tạp)
- **Register & nuance:** Advanced algorithmic robotics and topology register.
- **Examples:**
  - Motion planners transform physical walls into configuration space obstacles to simplify collision detection mathematics. (Các nhà lập kế hoạch chuyển động chuyển đổi các bức tường vật lý thành vật cản không gian cấu hình để đơn giản hóa toán học phát hiện va chạm.)
  - Navigating narrow passages requires the algorithm to thread smoothly through tight gaps between configuration space obstacles. (Việc điều hướng qua các lối đi hẹp đòi hỏi thuật toán phải luồn lách mượt mà qua các khoảng hở chật chội giữa các vật cản không gian cấu hình.)
- **Liên kết tiếng Hàn:** 구성 공간 장애물 (Guseong Gonggan Janghaemul) — Chướng ngại vật không gian cấu hình.

## 7. visual-inertial odometry
- **Pronunciation:** /ˈvɪʒuəl ɪˈnɜrʃəl oʊˈdɑmətri/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường viết tắt là VIO; làm chủ ngữ hoặc tân ngữ trong điều hướng cảm biến.
- **Core meaning — English:** A navigation technique that estimates the position and orientation of a robot by fusing data captured from digital cameras and inertial measurement units (IMUs).
- **Core meaning & milh ảnh — Tiếng Việt:** Phép đo đạc quang - quán tính (VIO); hình ảnh kết hợp giữa đôi mắt máy quay nhìn cảnh vật xung quanh và tai trong cảm biến gia tốc để biết mình đang dịch chuyển thế nào.
- **Grammar & collocations:** 
  - calibrate visual-inertial odometry (hiệu chuẩn phép đo đạc quang - quán tính)
  - robust visual-inertial odometry pipeline (chuỗi đo đạc quang - quán tính vững chắc)
  - real-time visual-inertial odometry (đo đạc quang - quán tính thời gian thực)
- **Register & nuance:** Computer vision, drone navigation, and augmented reality register.
- **Examples:**
  - Micro-drones rely on visual-inertial odometry to maintain stable flight indoors when GPS signals are completely unavailable. (Các vi drone dựa vào phép đo đạc quang - quán tính để duy trì chuyến bay ổn định trong nhà khi hoàn toàn không có tín hiệu GPS.)
  - Integrating wheel encoders with visual-inertial odometry eliminates drift errors in autonomous mobile robots. (Việc tích hợp bộ mã hóa bánh xe với phép đo đạc quang - quán tính giúp loại bỏ các lỗi trôi dạt ở các robot di động tự động.)
- **Liên kết tiếng Hàn:** 시각-관성 오도메트리 (Sigak-gwanseong Odometeuri) — Đo đạc odometry thị giác-quán tính.

## 8. point cloud registration
- **Pronunciation:** /pɔɪnt klaʊd ˌrɛdʒɪˈstreɪʃən/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm tân ngữ trong xử lý điểm không gian 3D và quét laser.
- **Core meaning — English:** The algorithmic process of aligning multiple three-dimensional point clouds acquired from different viewpoints into a single coherent coordinate system.
- **Core meaning & mental image — Tiếng Việt:** Đăng ký đám mây điểm; hình ảnh ghép nối hai chùm tia laser phản xạ từ hai góc nhìn khác nhau khớp khít vào nhau như trò chơi xếp hình 3D.
- **Grammar & collocations:** 
  - perform point cloud registration (thực hiện đăng ký đám mây điểm)
  - iterative point cloud registration (đăng ký đám mây điểm lặp)
  - fast point cloud registration algorithm (thuật toán đăng ký đám mây điểm nhanh)
- **Register & nuance:** Computer graphics, 3D computer vision, and robotics mapping register.
- **Examples:**
  - 3D scanners use point cloud registration to stitch together overlapping scans of heritage statues into a complete digital model. (Các máy quét 3D sử dụng đăng ký đám mây điểm để ghép nối các bản quét chồng chéo của các bức tượng di sản thành một mô hình kỹ thuật số hoàn chỉnh.)
  - Accurate point cloud registration is critical for autonomous vehicles to build high-definition environmental maps. (Đăng ký đám mây điểm chính xác rất quan trọng để xe tự hành xây dựng bản đồ môi trường độ nét cao.)
- **Liên kết tiếng Hàn:** 포인트 클라우드 정합 (Pointeu Keullaudeu Jeonghap) — Đăng ký điểm đám mây.

## 9. collision avoidance envelope
- **Pronunciation:** /kəˈlɪʒən əˈvɔɪdəns ˈɛnvəloʊp/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm tân ngữ trong thiết kế an toàn robot.
- **Core meaning — English:** A safety boundary or protective buffer zone maintained around a robot or vehicle to guarantee that unexpected intrusions trigger immediate braking or path redirection.
- **Core meaning & mental image — Tiếng Việt:** Vỏ bọc tránh va chạm; hình ảnh chiếc lừa vô hình bao quanh robot, hễ có vật thể chạm vào là kích hoạt hệ thống phanh khẩn cấp lập tức.
- **Grammar & collocations:** 
  - configure a collision avoidance envelope (cấu hình vỏ bọc tránh va chạm)
  - dynamic collision avoidance envelope (vỏ bọc tránh va chạm động)
  - breach a collision avoidance envelope (phá vỡ vỏ bọc tránh va chạm)
- **Register & nuance:** Industrial robotics safety and collaborative robotics (cobot) register.
- **Examples:**
  - Collaborative industrial cobots operate within a dynamic collision avoidance envelope to protect human factory workers. (Các cobot công nghiệp hợp tác hoạt động trong một vỏ bọc tránh va chạm động để bảo vệ các công nhân nhà máy là con người.)
  - If a worker steps inside the robot's collision avoidance envelope, the arm halts its motion within milliseconds. (Nếu công nhân bước vào bên trong vỏ bọc tránh va chạm của robot, cánh tay sẽ dừng chuyển động trong vòng vài mili giây.)
- **Liên kết tiếng Hàn:** 충돌 방지 외피 (Chungdol Bangji Oepi) — Lớp bảo vệ tránh va chạm.

## 10. loop closure detection
- **Pronunciation:** /luːp ˈkloʊʒər dɪˈtɛkʃən/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ trong thuật toán SLAM.
- **Core meaning — English:** The capability of a mapping system to recognize when a mobile robot has returned to a previously visited location, enabling drift correction across the map graph.
- **Core meaning & mental image — Tiếng Việt:** Phát hiện đóng vòng lặp; hình ảnh robot nhận ra con phố quen thuộc sau một vòng đi dạo dài, từ đó tự chỉnh lại các sai số tích lũy trên bản đồ.
- **Grammar & collocations:** 
  - perform loop closure detection (thực hiện phát hiện đóng vòng lặp)
  - visual loop closure detection (phát hiện đóng vòng lặp thị giác)
  - robust loop closure detection module (mô-đun phát hiện đóng vòng lặp vững chắc)
- **Register & nuance:** Robotics, simultaneous localization and mapping (SLAM), and computer vision register.
- **Examples:**
  - Successful loop closure detection prevents map distortion as autonomous delivery robots patrol large office complexes. (Việc phát hiện đóng vòng lặp thành công giúp ngăn chặn sự biến dạng bản đồ khi các robot giao hàng tự động tuần tra các khu phức hợp văn phòng lớn.)
  - The SLAM algorithm triggered a loop closure detection event when recognizing the entrance lobby after a full circuit. (Thuật toán SLAM đã kích hoạt sự kiện phát hiện đóng vòng lặp khi nhận ra sảnh ra vào sau một vòng di chuyển trọn vẹn.)
- **Liên kết tiếng Hàn:** 루프 클로저 감지 (Rupeu Keullojeo Gamji) — Phát hiện đóng vòng lặp.

## 11. actuation torque feedback
- **Pronunciation:** /,æktʃuˈeɪʃən tɔrk ˈfiːdbæk/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm tân ngữ hoặc chủ ngữ trong điều khiển cơ điện tử.
- **Core meaning — English:** Real-time sensor data reporting the exact rotational force applied by a motor joint, allowing controllers to detect resistance, payload weight, or sudden impacts.
- **Core meaning & mental image — Tiếng Việt:** Phản hồi mô-men xoắn truyền động; hình ảnh cảm nhận ở cổ tay báo về lực cản nặng nhẹ khi nhấc một vật, giúp robot biết điều chỉnh sức bóp.
- **Grammar & collocations:** 
  - analyze actuation torque feedback (phân tích phản hồi mô-men xoắn truyền động)
  - haptic actuation torque feedback (phản hồi mô-men xoắn truyền động xúc giác)
  - monitor actuation torque feedback (giám sát phản hồi mô-men xoắn truyền động)
- **Register & nuance:** Mechatronics, advanced robotics, and haptic feedback control register.
- **Examples:**
  - Prosthetic limbs utilize sensitive actuation torque feedback to grant users a natural sense of touch and weight. (Các chi giả sử dụng phản hồi mô-men xoắn truyền động nhạy bén để mang lại cho người dùng cảm giác chạm và trọng lượng tự nhiên.)
  - Anomalous spikes in actuation torque feedback alerted the system to a jammed gear inside the robotic wrist. (Các đỉnh bất thường trong phản hồi mô-men xoắn truyền động đã cảnh báo hệ thống về mộtbánh răng bị kẹt bên trong cổ tay robot.)
- **Liên kết tiếng Hàn:** 구동 토크 피드백 (Gudong Tokeu Pideubaek) — Phản hồi mô-men xoắn truyền động.

## 12. robotic arm Jacobian matrix
- **Pronunciation:** /roʊˈbɑtɪk ɑrm jəˈkoʊbiən ˈmeɪtrɪks/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm tân ngữ hoặc chủ ngữ trong toán học robot.
- **Core meaning — English:** A mathematical matrix of partial derivatives that maps joint velocities to linear and angular velocities of a robotic manipulator's end-effector.
- **Core meaning & mental image — Tiếng Việt:** Ma trận Jacobian của cánh tay robot; hình ảnh bảng công thức toán học dịch chuyển tốc độ quay của các khớp thành tốc độ bay của đầu kẹp.
- **Grammar & collocations:** 
  - calculate the robotic arm Jacobian matrix (tính toán ma trận Jacobian của cánh tay robot)
  - singularities of the Jacobian matrix (các điểm kỳ dị của ma trận Jacobian)
  - geometric Jacobian matrix (ma trận Jacobian hình học)
- **Register & nuance:** Advanced robotics, kinematics, and control theory register.
- **Examples:**
  - Control engineers use the robotic arm Jacobian matrix to compute real-time velocity profiles for smooth painting operations. (Các kỹ sư điều khiển sử dụng ma trận Jacobian của cánh tay robot để tính toán cấu hình vận tốc thời gian thực cho các hoạt động sơn mượt mà.)
  - Near a kinematic singularity, the robotic arm Jacobian matrix becomes non-invertible, causing erratic joint velocity commands. (Gần điểm kỳ dị động học, ma trận Jacobian của cánh tay robot trở nên không khả nghịch, gây ra các lệnh vận tốc khớp thất thường.)
- **Liên kết tiếng Hàn:** 로봇 팔 야코비안 행렬 (Robot Pal Yakobian Haengryeol) — Ma trận Jacobian của cánh tay robot.

## 13. state estimation filter
- **Pronunciation:** /steɪt ˌɛstəˈmeɪʃən ˈfɪltər/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ trong lý thuyết điều khiển và lọc dữ liệu.
- **Core meaning — English:** A mathematical algorithm (such as a Kalman filter) that estimates the true internal state of a dynamic system from a series of noisy sensor measurements over time.
- **Core meaning & mental image — Tiếng Việt:** Bộ lọc ước lượng trạng thái; hình ảnh chiếc sàng lọc sạch sẽ những tín hiệu nhiễu loạn từ cảm biến để chắt lọc ra tọa độ và vận tốc thật chính xác của robot.
- **Grammar & collocations:** 
  - implement a state estimation filter (triển khai bộ lọc ước lượng trạng thái)
  - extended state estimation filter (bộ lọc ước lượng trạng thái mở rộng)
  - optimal state estimation filter (bộ lọc ước lượng trạng thái tối ưu)
- **Register & nuance:** Control theory, aerospace engineering, and robotics register.
- **Examples:**
  - The autonomous rover relies on a robust state estimation filter to merge noisy GPS, IMU, and wheel speed data. (Chiếc xe tự hành phụ thuộc vào bộ lọc ước lượng trạng thái vững chắc để hợp nhất dữ liệu GPS, IMU và tốc độ bánh xe bị nhiễu.)
  - Without a proper state estimation filter, sensor jitter would cause the robotic vehicle to miscalculate its trajectory. (Nếu không có bộ lọc ước lượng trạng thái phù hợp, hiện tượng dao động cảm biến sẽ khiến xe robot tính toán sai quỹ đạo của mình.)
- **Liên kết tiếng Hàn:** 상태 추정 필터 (Sangtae Chujeong Pilteo) — Bộ lọc ước lượng trạng thái.

## 14. lidar point cloud filtering
- **Pronunciation:** /ˈlaɪdɑr pɔɪnt klaʊd ˈfɪltərɪŋ/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm danh động từ chỉ hành động hoặc tân ngữ trong xử lý dữ liệu cảm biến.
- **Core meaning — English:** The computational procedure of removing environmental noise, rain, dust, and outlier points from raw 3D LiDAR laser scans to yield clean spatial datasets.
- **Core meaning & mental image — Tiếng Việt:** Lọc đám mây điểm LiDAR; hình ảnh chiếc chổi quét sạch bụi bẩn, mưa hạt và các điểm phản xạ rác khỏi không gian quét laser 3D.
- **Grammar & collocations:** 
  - perform lidar point cloud filtering (thực hiện lọc đám mây điểm LiDAR)
  - real-time lidar point cloud filtering (lọc đám mây điểm LiDAR thời gian thực)
  - statistical lidar point cloud filtering (lọc đám mây điểm LiDAR thống kê)
- **Register & nuance:** Autonomous driving, remote sensing, and robotics perception register.
- **Examples:**
  - Heavy snowfall severely degrades raw LiDAR data, making aggressive lidar point cloud filtering mandatory for autonomous cars. (Tuyết rơi dày làm suy giảm nghiêm trọng dữ liệu LiDAR thô, khiến việc lọc đám mây điểm LiDAR mạnh mẽ trở thành bắt buộc đối với xe tự hành.)
  - Statistical outlier removal is a common technique used in lidar point cloud filtering to eliminate floating sensor artifacts. (Loại bỏ điểm ngoại lai thống kê là kỹ thuật phổ biến được sử dụng trong việc lọc đám mây điểm LiDAR để loại bỏ các hiện tượng giả trôi nổi của cảm biến.)
- **Liên kết tiếng Hàn:** 라이다 포인트 클라우드 필터링 (Raida Pointeu Keullaudeu Pilteoring) — Lọc đám mây điểm Lidar.

## 15. path smoothing heuristic
- **Pronunciation:** /pæθ ˈsmuðɪŋ hʊˈrɪstɪk/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm tân ngữ hoặc chủ ngữ trong thuật toán điều hướng.
- **Core meaning — English:** A computational rule of thumb or optimization method applied to raw, jagged navigation waypoint paths to generate continuous, kinematically feasible trajectories.
- **Core meaning & mental image — Tiếng Việt:** Thuật toán làm mượt đường đi kinh nghiệm; hình ảnh uốn nắn những khúc cua gấp khúc, gập ghềnh của robot thành những đường cong trơn tru, dễ lái.
- **Grammar & collocations:** 
  - apply a path smoothing heuristic (áp dụng thuật toán làm mượt đường đi)
  - efficient path smoothing heuristic (thuật toán làm mượt đường đi hiệu quả)
  - spline-based path smoothing heuristic (thuật toán làm mượt đường đi dựa trên đường cong spline)
- **Register & nuance:** Robotics path planning and autonomous vehicle control register.
- **Examples:**
  - Raw grid-based path planners output jagged routes that require a secondary path smoothing heuristic for smooth vehicle movement. (Các trình lập kế hoạch đường đi dựa trên lưới thô xuất ra các tuyến đường gập ghềnh đòi hỏi phải có thuật toán làm mượt đường đi thứ cấp để xe di chuyển mượt mà.)
  - Using a Bezier curve as a path smoothing heuristic ensures that mobile robots do not jerk violently when changing directions. (Sử dụng đường cong Bezier làm thuật toán làm mượt đường đi đảm bảo các robot di động không bị giật cục dữ dội khi đổi hướng.)
- **Liên kết tiếng Hàn:** 경로 스무딩 휴리스틱 (Gyeongro Seumuding Hyuriseutik) — Thuật toán làm mượt đường đi tối ưu.

## 16. compliant robot joint
- **Pronunciation:** /kəmˈplaɪənt roʊˈbɑtɪk dʒɔɪnt/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ trong thiết kế phần cứng robot.
- **Core meaning — English:** A flexible or elastic mechanical joint designed to exhibit controlled compliance or springiness, mimicking biological muscle-tendon systems for safe physical interaction.
- **Core meaning & mental image — Tiếng Việt:** Khớp robot dẻo dai/đàn hồi; hình ảnh khớp nối có gắn lò xo hoặc vật liệu mềm dẻo, có thể uốn cong nhẹ nhàng khi va chạm thay vì cứng đờ như sắt thép.
- **Grammar & collocations:** 
  - design a compliant robot joint (thiết kế khớp robot dẻo dai)
  - series-elastic compliant robot joint (khớp robot dẻo dai đàn hồi chuỗi)
  - variable stiffness compliant robot joint (khớp robot dẻo dai có độ cứng biến đổi)
- **Register & nuance:** Soft robotics, biomechatronics, and collaborative robotics register.
- **Examples:**
  - Humanoid robots equipped with a compliant robot joint can safely absorb the impact of accidental falls without breaking gears. (Robot hình người được trang bị khớp robot dẻo dai có thể hấp thụ an toàn lực va chạm khi vô tình ngã mà không làm hỏng bánh răng.)
  - Compliant robot joints are essential for robotic prosthetics to interact gently with fragile everyday objects. (Các khớp robot dẻo dai rất cần thiết để các chi giả robot tương tác nhẹ nhàng với các vật dụng mỏng manh hàng ngày.)
- **Liên kết tiếng Hàn:** 유연한 로봇 관절 (Yuyeonhan Robot Gwanjeol) — Khớp robot linh hoạt.

## 17. dead reckoning drift
- **Pronunciation:** /dɛd ˈrɛkənɪŋ drɪft/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ trong hệ thống điều hướng.
- **Core meaning — English:** The gradual accumulation of positional errors over time in dead reckoning navigation caused by uncorrected sensor biases and wheel slippage.
- **Core meaning & mental image — Tiếng Việt:** Sai số trôi dạt do định vị ước tính; hình ảnh đi lạc hướng từng chút một theo thời gian do bước chân ban đầu bị lệch mà không có bản đồ đối chiếu.
- **Grammar & collocations:** 
  - mitigate dead reckoning drift (giảm thiểu sai số trôi dạt định vị ước tính)
  - accumulated dead reckoning drift (sai số trôi dạt tích lũy)
  - correct dead reckoning drift (khắc phục sai số trôi dạt định vị ước tính)
- **Register & nuance:** Navigation, marine engineering, and mobile robotics register.
- **Examples:**
  - Without external GPS corrections, autonomous submarines suffer from severe dead reckoning drift due to underwater currents. (Nếu không có sự hiệu chỉnh GPS bên ngoài, các tàu ngầm tự trị phải chịu sai số trôi dạt định vị ước tính nghiêm trọng do các dòng hải lưu.)
  - Frequent landmark observations are necessary to bound and reset dead reckoning drift in long-range robotic missions. (Việc quan sát các mốc định vị thường xuyên là cần thiết để giới hạn và thiết lập lại sai số trôi dạt trong các sứ mệnh robot tầm xa.)
- **Liên kết tiếng Hàn:** 추측 항법 오차 (Chuchuk Hangbeop Ocha) — Sai số trôi dạt tính toán ước lượng.

## 18. spatial pose graph
- **Pronunciation:** /ˈspeɪʃəl poʊz ɡræf/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm tân ngữ hoặc chủ ngữ trong thuật toán ánh xạ SLAM.
- **Core meaning — English:** A mathematical graph structure used in SLAM where nodes represent historical robot poses and edges represent spatial constraints or relative measurements between them.
- **Core meaning & mental image — Tiếng Việt:** Đồ thị tư thế không gian; hình ảnh mạng lưới gồm các nút đánh dấu từng vị trí robot từng đứng và các đường nối đo khoảng cách tương đối giữa chúng.
- **Grammar & collocations:** 
  - optimize a spatial pose graph (tối ưu hóa đồ thị tư thế không gian)
  - construct a spatial pose graph (xây dựng đồ thị tư thế không gian)
  - pose graph optimization algorithm (thuật toán tối ưu hóa đồ thị tư thế)
- **Register & nuance:** Advanced robotics, SLAM backend, and graph theory register.
- **Examples:**
  - Modern graph-based SLAM frameworks rely on efficient spatial pose graph optimization to correct large-scale mapping errors. (Các framework SLAM dựa trên đồ thị hiện đại phụ thuộc vào việc tối ưu hóa đồ thị tư thế không gian hiệu quả để sửa chữa các lỗi lập bản đồ quy mô lớn.)
  - When loop closure occurs, the spatial pose graph redistributes the accumulated error smoothly across all connected nodes. (Khi sự kiện đóng vòng lặp xảy ra, đồ thị tư thế không gian sẽ phân bổ lại lỗi tích lũy một cách mượt mà trên tất cả các nút được kết nối.)
- **Liên kết tiếng Hàn:** 공간 자세 그래프 (Gonggan Jase Geuraepeu) — Đồ thị tư thế không gian.

## 19. occupancy grid mapping
- **Pronunciation:** /ˈɑkjəpənsi ɡrɪd ˈmæpɪŋ/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm tân ngữ hoặc danh động từ trong điều hướng robot.
- **Core meaning — English:** A probabilistic discretization method that divides an environment into a fine grid of cells, estimating the likelihood that each cell is occupied by an obstacle or free space.
- **Core meaning & mental image — Tiếng Việt:** Lập bản đồ lưới chiếm chỗ; hình ảnh tấm bản đồ chia thành hàng ngàn ô vuông nhỏ giống bàn cờ, mỗi ô được tô màu thể hiện xác suất có vật cản hay trống trải.
- **Grammar & collocations:** 
  - generate an occupancy grid map (tạo bản đồ lưới chiếm chỗ)
  - probabilistic occupancy grid mapping (lập bản đồ lưới chiếm chỗ theo xác suất)
  - update an occupancy grid map (cập nhật bản đồ lưới chiếm chỗ)
- **Register & nuance:** Robotics, mobile robot navigation, and sensor fusion register.
- **Examples:**
  - Vacuum cleaning robots rely on real-time occupancy grid mapping to keep track of cleared rooms and furniture barriers. (Các robot hút bụi phụ thuộc vào việc lập bản đồ lưới chiếm chỗ thời gian thực để theo dõi các phòng đã dọn dẹp và chướng ngại vật nội thất.)
  - Bayesian updating formulas are fundamental for calculating cell probabilities during occupancy grid mapping. (Các công thức cập nhật Bayes là nền tảng để tính toán xác suất ô trong quá trình lập bản đồ lưới chiếm chỗ.)
- **Liên kết tiếng Hàn:** 점유 격자 지도 작성 (Jeom-yu Gyeokja Jido Jakseong) — Lập bản đồ lưới chiếm chỗ.

## 20. closed-loop servo controller
- **Pronunciation:** /kloʊzd luːp ˈsɜrvoʊ kənˈtroʊlər/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ trong điều khiển tự động.
- **Core meaning — English:** An automated feedback control mechanism that continuously compares a system's actual output against a desired reference setpoint and adjusts actuator commands to minimize error.
- **Core meaning & mental image — Tiếng Việt:** Bộ điều khiển servo vòng kín; hình ảnh vòng lặp liên tục đo lường kết quả thực tế, so sánh với mục tiêu và tự động vặn chỉnh để sửa sai ngay lập tức.
- **Grammar & collocations:** 
  - tune a closed-loop servo controller (tinh chỉnh bộ điều khiển servo vòng kín)
  - high-bandwidth closed-loop servo controller (bộ điều khiển servo vòng kín băng thông cao)
  - PID closed-loop servo controller (bộ điều khiển servo vòng kín PID)
- **Register & nuance:** Mechatronics, control systems engineering, and robotics register.
- **Examples:**
  - CNC milling machines utilize a high-performance closed-loop servo controller to maintain micron-level cutting accuracy. (Các máy phay CNC sử dụng bộ điều khiển servo vòng kín hiệu suất cao để duy trì độ chính xác cắt ở mức micromet.)
  - Instability in the closed-loop servo controller can cause robotic joints to oscillate violently or vibrate. (Sự bất ổn định trong bộ điều khiển servo vòng kín có thể khiến các khớp robot dao động dữ dội hoặc rung lắc.)
- **Liên kết tiếng Hàn:** 폐루프 서보 제어기 (Pye-ruupeu Seobo Jeeogi) — Bộ điều khiển servo vòng kín.

## 21. teleoperation latency compensation
- **Pronunciation:** /ˈtɛliˌɑpəˈreɪʃən ˈleɪtənsi ˌkɑmpənˈseɪʃən/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm tân ngữ hoặc chủ ngữ trong điều khiển từ xa.
- **Core meaning — English:** Algorithmic techniques used to mitigate the adverse effects of transmission delays when a human operator remotely controls a robot over long distances.
- **Core meaning & mental image — Tiếng Việt:** Bù độ trễ điều khiển từ xa; hình ảnh hệ thống thông minh dự đoán trước thao tác của người điều khiển để bù đắp khoảng thời gian tín hiệu bay qua mạng chậm trễ.
- **Grammar & collocations:** 
  - implement teleoperation latency compensation (triển khai bù độ trễ điều khiển từ xa)
  - predictive teleoperation latency compensation (bù độ trễ điều khiển từ xa dự đoán)
  - network teleoperation latency compensation (bù độ trễ điều khiển từ xa qua mạng)
- **Register & nuance:** Telerobotics, surgical robotics, and space exploration control register.
- **Examples:**
  - Surgeons performing remote operations require advanced teleoperation latency compensation to prevent scalpel overshoots. (Các bác sĩ phẫu thuật thực hiện thao tác từ dao kéo từ xa đòi hỏi phải có bù độ trễ điều khiển từ xa tiên tiến để tránh việc dao mổ vượt quá tầm kiểm soát.)
  - Teleoperation latency compensation algorithms use predictive augmented reality displays to assist operators in real time. (Các thuật toán bù độ trễ điều khiển từ xa sử dụng màn hình thực tế tăng cường dự đoán để hỗ trợ người vận hành trong thời gian thực.)
- **Liên kết tiếng Hàn:** 원격 조작 지연 보상 (Won격 Jokak Jiyeon Bosang) — Bù độ trễ điều khiển từ xa.

## 22. kinematic singularity avoidance
- **Pronunciation:** /,kɪnəˈmætɪk ˌsɪŋɡjəˈlærəti əˈvɔɪdəns/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm tân ngữ hoặc chủ ngữ trong quy hoạch chuyển động cánh tay robot.
- **Core meaning — English:** Strategic motion planning techniques designed to prevent a robotic manipulator from passing through or coming too close to singular configurations where degrees of freedom are lost.
- **Core meaning & mental image — Tiếng Việt:** Tránh điểm kỳ dị động học; hình ảnh lập trình viên bẻ lái đường đi của cánh tay robot tránh xa góc duỗi thẳng cứng đơ nơi robot bị mất khả năng xoay trở.
- **Grammar & collocations:** 
  - apply kinematic singularity avoidance (áp dụng phương pháp tránh điểm kỳ dị động học)
  - robust kinematic singularity avoidance algorithm (thuật toán tránh điểm kỳ dị động học vững chắc)
  - active kinematic singularity avoidance (tránh điểm kỳ dị động học chủ động)
- **Register & nuance:** Advanced robotic manipulation and control register.
- **Examples:**
  - Industrial path planners incorporate strict kinematic singularity avoidance to prevent sudden infinite joint velocity commands. (Các trình lập kế hoạch đường đi công nghiệp tích hợp tính năng tránh điểm kỳ dị động học nghiêm ngặt để ngăn chặn các lệnh vận tốc khớp vô hạn đột ngột.)
  - Programmer adjustments during path generation ensured smooth kinematic singularity avoidance throughout the welding arc. (Các điều chỉnh của lập trình viên trong quá trình tạo đường đi đã đảm bảo việc tránh điểm kỳ dị động học mượt mà xuyên suốt vòng cung hàn.)
- **Liên kết tiếng Hàn:** 기구학적 특이점 회피 (Giguhakjeok Teukijeom Hoepi) — Tránh điểm kỳ dị động học.

## 23. dynamic obstacle avoidance
- **Pronunciation:** /daɪˈnæmɪk ˈɑbstəkəl əˈvɔɪdəns/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm tân ngữ hoặc chủ ngữ trong điều hướng di động.
- **Core meaning — English:** The real-time capability of a mobile robot or autonomous vehicle to detect, track, and maneuver around moving obstacles such as pedestrians or other vehicles.
- **Core meaning & mental image — Tiếng Việt:** Tránh vật cản động; hình ảnh xe tự hành thông minh tự động bẻ lái hoặc giảm tốc để né tránh người đi bộ hoặc xe máy đang băng qua đường cắt ngang mặt.
- **Grammar & collocations:** 
  - execute dynamic obstacle avoidance (thực hiện tránh vật cản động)
  - real-time dynamic obstacle avoidance (tránh vật cản động thời gian thực)
  - advanced dynamic obstacle avoidance system (hệ thống tránh vật cản động tiên tiến)
- **Register & nuance:** Autonomous vehicles, mobile robotics, and drone navigation register.
- **Examples:**
  - Delivery robots operating on crowded sidewalks require sophisticated dynamic obstacle avoidance to prevent pedestrian collisions. (Các robot giao hàng hoạt động trên vỉa hè đông đúc đòi hỏi hệ thống tránh vật cản động tinh vi để ngăn ngừa va chạm với người đi bộ.)
  - Integrating machine vision with predictive vector calculus enables reliable dynamic obstacle avoidance at high speeds. (Việc tích hợp thị giác máy tính với tính toán véc-tơ dự đoán cho phép tránh vật cản động đáng tin cậy ở tốc độ cao.)
- **Liên kết tiếng Hàn:** 동적 장애물 회피 (Dongjeok Janghaemul Hoepi) — Tránh chướng ngại vật động.

## 24. robotic manipulation benchmark
- **Pronunciation:** /roʊˈbɑtɪk məˌnɪpjuˈleɪʃən ˈbɛntʃmɑrk/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm tân ngữ hoặc chủ ngữ trong nghiên cứu và phát triển robot.
- **Core meaning — English:** A standardized testing suite and set of physical or simulated tasks used to evaluate and compare the dexterity, speed, and precision of robotic manipulation systems.
- **Core meaning & mental image — Tiếng Việt:** Tiêu chuẩn đánh giá thao tác robot; hình ảnh bộ đề thi chuẩn hóa gồm các bài tập bắp hạt, xếp hình và cầm nắm để chấm điểm tài nghệ của tay robot.
- **Grammar & collocations:** 
  - establish a robotic manipulation benchmark (thiết lập tiêu chuẩn đánh giá thao tác robot)
  - standardized robotic manipulation benchmark (tiêu chuẩn đánh giá thao tác robot tiêu chuẩn hóa)
  - pass a robotic manipulation benchmark (vượt qua bài kiểm tra chuẩn thao tác robot)
- **Register & nuance:** Robotics research, academic benchmarking, and AI evaluation register.
- **Examples:**
  - Academic laboratories worldwide use the new robotic manipulation benchmark to test machine learning dexterity algorithms. (Các phòng thí nghiệm học thuật trên toàn thế giới sử dụng tiêu chuẩn đánh giá thao tác robot mới để kiểm tra các thuật toán sự khéo léo của học máy.)
  - Scoring high on the robotic manipulation benchmark requires precise coordination between vision and force feedback controllers. (Đạt điểm cao trong tiêu chuẩn đánh giá thao tác robot đòi hỏi sự phối hợp chính xác giữa thị giác và bộ điều khiển phản hồi lực.)
- **Liên kết tiếng Hàn:** 로봇 조작 벤치마크 (Robot Jojak Benchimakeu) — Tiêu chuẩn đánh giá thao tác robot.

## 25. autonomous waypoint navigation
- **Pronunciation:** /ɔˈtɑnəməs ˈweɪpɔɪnt ˈnævəɡeɪʃən/
- **Loại từ & vị trí trong câu:** Compound noun (Danh từ ghép); thường làm chủ ngữ hoặc tân ngữ trong điều hướng tự trị.
- **Core meaning — English:** The capability of an unmanned vehicle or mobile robot to travel independently through a pre-programmed sequence of geographic or spatial coordinates without human intervention.
- **Core meaning & mental image — Tiếng Việt:** Điều hướng điểm waypoint tự động; hình ảnh chiếc xe tự lái tự động lần theo chuỗi tọa độ định sẵn trên bản đồ GPS để chạy đến đích mà không cần tài xế.
- **Grammar & collocations:** 
  - program autonomous waypoint navigation (lập trình điều hướng điểm waypoint tự động)
  - GPS-guided autonomous waypoint navigation (điều hướng điểm waypoint tự động dẫn đường bằng GPS)
  - reliable autonomous waypoint navigation (điều hướng điểm waypoint tự động đáng tin cậy)
- **Register & nuance:** Autonomous drones, rovers, and marine navigation register.
- **Examples:**
  - Agricultural drones utilize autonomous waypoint navigation to spray fertilizer evenly across sprawling crop fields. (Drone nông nghiệp sử dụng điều hướng điểm waypoint tự động để phun phân bón đều khắp các cánh đồng rộng lớn.)
  - Marine research vessels are programmed for autonomous waypoint navigation during long oceanographic mapping expeditions. (Các tàu nghiên cứu biển được lập trình để điều hướng điểm waypoint tự động trong các chuyến thám hiểm lập bản đồ hải dương học dài ngày.)
- **Liên kết tiếng Hàn:** 자율 웨이포인트 내비게이션 (Jayul Weipointeu Nebigeisyeon) — Điều hướng điểm waypoint tự động.

---

## Review in context: Part 1 (items 1–12)

When an engineer designs an advanced robotic system, calculating the correct **inverse kinematics solver** parameters is the first step to ensure smooth physical movement. The robot then utilizes a sophisticated **motion planning algorithm** to compute a collision-free path. For autonomous mobile machines, performing **simultaneous localization and mapping** (SLAM) is vital to understand unfamiliar surroundings. To execute delicate tasks, the system continuously tracks the **end-effector trajectory** governed by its multi-**degree of freedom manipulation** capabilities. Advanced planners translate physical walls into a **configuration space obstacle** map to prevent collisions. By combining camera imagery and inertial sensors, the robot achieves robust **visual-inertial odometry**, while **point cloud registration** merges multiple 3D scans into a unified model. Safety is maintained via a strict **collision avoidance envelope**, and **loop closure detection** corrects accumulated mapping drift. Finally, monitoring **actuation torque feedback** alongside the **robotic arm Jacobian matrix** ensures precise, stable force control across all joints.

**Bản dịch tiếng Việt (Phần 1):**
Khi một kỹ sư thiết kế một hệ thống robot tiên tiến, việc tính toán các tham số của **bộ giải động học ngược** chính xác là bước đầu tiên để đảm bảo chuyển động vật lý mượt mà. Sau đó, robot sử dụng **thuật toán lập kế hoạch chuyển động** tinh vi để tính toán đường đi không có va chạm. Đối với các cỗ máy di động tự động, việc thực hiện **định vị và lập bản đồ đồng thời** (SLAM) là tối quan trọng để hiểu rõ môi trường xung quanh xa lạ. Để thực hiện các tác vụ tinh tế, hệ thống liên tục theo dõi **quỹ đạo phần cuối công tác** được chi phối bởi khả năng **thao tác bậc tự do** của nó. Các nhà lập kế hoạch tiên tiến chuyển đổi các bức tường vật lý thành bản đồ **vật cản không gian cấu hình** để ngăn ngừa va chạm. Bằng cách kết hợp hình ảnh camera và cảm biến quán tính, robot đạt được **phép đo đạc quang - quán tính** vững chắc, trong khi **đăng ký đám mây điểm** hợp nhất nhiều bản quét 3D thành một mô hình thống nhất. An toàn được duy trì thông qua **vỏ bọc tránh va chạm** nghiêm ngặt, và **phát hiện đóng vòng lặp** khắc phục các sai số lập bản đồ tích lũy. Cuối cùng, việc giám sát **phản hồi mô-men xoắn truyền động** bên cạnh **ma trận Jacobian của cánh tay robot** đảm bảo kiểm soát lực chính xác và ổn định trên tất cả các khớp.

## Review in context: Part 2 (items 13–25)

To maintain precise spatial awareness, the control architecture incorporates a reliable **state estimation filter** to eliminate sensor noise. For environmental perception, **lidar point cloud filtering** removes unwanted laser reflections, while a **path smoothing heuristic** turns jagged waypoints into smooth curves. Hardware durability is enhanced through the use of a **compliant robot joint**, which cushions impacts and prevents **dead reckoning drift** from causing catastrophic failures. Backed by an optimized **spatial pose graph** and accurate **occupancy grid mapping**, the robot knows its exact whereabouts. A high-performance **closed-loop servo controller** manages motor outputs, while advanced algorithms provide **teleoperation latency compensation** and **kinematic singularity avoidance**. Furthermore, **dynamic obstacle avoidance** ensures safe operation among moving crowds, validated by passing a strict **robotic manipulation benchmark**. Ultimately, the system executes **autonomous waypoint navigation** to complete missions flawlessly without human intervention.

**Bản dịch tiếng Việt (Phần 2):**
Để duy trì nhận thức không gian chính xác, kiến trúc điều khiển tích hợp một **bộ lọc ước lượng trạng thái** đáng tin cậy để loại bỏ nhiễu cảm biến. Đối với nhận thức môi trường, việc **lọc đám mây điểm LiDAR** loại bỏ các phản xạ laser không mong muốn, trong khi **thuật toán làm mượt đường đi** biến các điểm waypoint gập ghềnh thành các đường cong mượt mà. Độ bền phần cứng được nâng cao thông qua việc sử dụng **khớp robot dẻo dai**, giúp đệm các cú va chạm và ngăn chặn **sai số trôi dạt định vị ước tính** gây ra các sự cố thảm khốc. Được hỗ trợ bởi **đồ thị tư thế không gian** được tối ưu hóa và **lập bản đồ lưới chiếm chỗ** chính xác, robot biết rõ vị trí chính xác của mình. **Bộ điều khiển servo vòng kín** hiệu suất cao quản lý đầu ra của động cơ, trong khi các thuật toán tiên tiến cung cấp tính năng **bù độ trễ điều khiển từ xa** và **tránh điểm kỳ dị động học**. Hơn nữa, việc **tránh vật cản động** đảm bảo vận hành an toàn giữa đám đông đang di chuyển, được kiểm chứng bằng việc vượt qua một **tiêu chuẩn đánh giá thao tác robot** nghiêm ngặt. Cuối cùng, hệ thống thực hiện **điều hướng điểm waypoint tự động** để hoàn thành các sứ mệnh một cách hoàn hảo mà không cần sự can thiệp của con người.
