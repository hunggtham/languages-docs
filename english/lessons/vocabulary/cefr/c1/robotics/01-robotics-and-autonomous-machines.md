# C1 Vocabulary 01 — Robotics and autonomous machines

Nhóm từ này mô tả cách robot cảm nhận môi trường, lập kế hoạch và thực hiện hành động trong thế giới thật. Flow của bài là: **robotic → autonomous robot → actuator → sensor fusion → lidar → computer vision → path planning → motion planning → manipulator → end effector → humanoid → cobot → swarm robotics → teleoperation → kinematics**.

---

## 1. robotic /roʊˈbɑtɪk/

**Loại từ & vị trí trong câu:** `adjective` — liên quan đến robot hoặc được thực hiện bằng hệ thống có khả năng cảm nhận, tính toán và hành động tự động.

**Core meaning — English:** Relating to robots or performed by a system that can sense, compute, and act.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung máy móc không chỉ chạy theo một động cơ mà còn nhận tín hiệu và điều khiển hành động theo chương trình.

**Grammar & collocations:** `robotic system` — hệ thống robot; `robotic arm` — cánh tay robot; `robotic platform` — nền tảng robot.

**Register & nuance:** Robotic là tính từ rộng; nó không tự nói hệ thống có tự chủ, trí thông minh hay khả năng học đến mức nào.

**Examples:** `The hospital tested a robotic platform for rehabilitation.` → Bệnh viện thử một nền tảng robot cho phục hồi chức năng. `Robotic grippers handled fragile samples.` → Kẹp robot xử lý các mẫu dễ vỡ.

**Liên kết tiếng Hàn:** `로봇의`, `로봇 공학의` — thuộc robot, thuộc robot học.

## 2. autonomous robot /ɔːˈtɑnəməs ˈroʊbɑt/

**Loại từ & vị trí trong câu:** `countable noun phrase` — robot có thể cảm nhận, ra quyết định và hành động trong giới hạn nhiệm vụ mà không cần điều khiển liên tục.

**Core meaning — English:** A robot that can sense, decide, and act within a task without continuous human control.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung robot nhận bản đồ, tự chọn đường và điều chỉnh hành động khi môi trường thay đổi.

**Grammar & collocations:** `deploy an autonomous robot` — triển khai robot tự chủ; `autonomous-robot navigation` — điều hướng robot tự chủ; `autonomous robot fleet` — đội robot tự chủ.

**Register & nuance:** Autonomous robot vẫn hoạt động trong ranh giới thiết kế và giám sát; “tự chủ” không đồng nghĩa có ý thức hay quyết định không giới hạn.

**Examples:** `An autonomous robot inspected the tunnel overnight.` → Robot tự chủ kiểm tra đường hầm qua đêm. `The team limited the autonomous robot to a mapped area.` → Nhóm giới hạn robot tự chủ trong khu vực đã lập bản đồ.

**Liên kết tiếng Hàn:** `자율 로봇` — robot tự chủ.

## 3. actuator /ˈæktʃuˌeɪtɚ/

**Loại từ & vị trí trong câu:** `countable noun` — bộ phận biến tín hiệu điều khiển thành chuyển động hoặc lực cơ học.

**Core meaning — English:** A component that converts a control signal into mechanical movement or force.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung “cơ bắp” của robot: nhận lệnh điện rồi quay, kéo, nâng hoặc đẩy một bộ phận.

**Grammar & collocations:** `linear actuator` — bộ truyền động tuyến tính; `electric actuator` — bộ truyền động điện; `actuator failure` — hỏng bộ truyền động.

**Register & nuance:** Actuator tạo hành động còn sensor tạo dữ liệu; một hệ thống robot cần phối hợp cả hai với bộ điều khiển.

**Examples:** `The actuator lifted the panel with precise force.` → Bộ truyền động nâng tấm panel bằng lực chính xác. `Engineers replaced a worn actuator in the joint.` → Kỹ sư thay bộ truyền động mòn ở khớp.

**Liên kết tiếng Hàn:** `액추에이터`, `구동기` — bộ truyền động.

## 4. sensor fusion /ˈsensɚ ˌfjuːʒən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — quá trình kết hợp dữ liệu từ nhiều cảm biến để tạo ước tính đáng tin cậy hơn về môi trường hoặc trạng thái robot.

**Core meaning — English:** The process of combining data from multiple sensors to produce a more reliable estimate of an environment or system state.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung robot đối chiếu camera, radar và cảm biến khoảng cách như nhiều nhân chứng trước khi hành động.

**Grammar & collocations:** `multi-sensor fusion` — hợp nhất đa cảm biến; `sensor-fusion algorithm` — thuật toán hợp nhất cảm biến; `real-time sensor fusion` — hợp nhất cảm biến thời gian thực.

**Register & nuance:** Sensor fusion có thể giảm điểm mù và nhiễu, nhưng dữ liệu sai hoặc lệch thời gian vẫn có thể làm ước tính sai.

**Examples:** `Sensor fusion helped the vehicle track a cyclist in rain.` → Hợp nhất cảm biến giúp xe theo dõi người đi xe đạp trong mưa. `The system uses sensor fusion for indoor localization.` → Hệ thống dùng hợp nhất cảm biến để định vị trong nhà.

**Liên kết tiếng Hàn:** `센서 융합` — hợp nhất cảm biến.

## 5. lidar /ˈlaɪdɑr/

**Loại từ & vị trí trong câu:** `uncountable noun, acronym` — công nghệ đo khoảng cách bằng các xung laser phản xạ để tạo bản đồ hoặc đám mây điểm 3D.

**Core meaning — English:** A technology that measures distance with reflected laser pulses to create maps or 3D point clouds.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung robot quét không gian bằng tia laser và tính thời gian tia quay trở lại.

**Grammar & collocations:** `lidar sensor` — cảm biến lidar; `lidar scan` — quét lidar; `lidar point cloud` — đám mây điểm lidar.

**Register & nuance:** Lidar cho hình học không gian tốt nhưng có thể bị ảnh hưởng bởi mưa, sương, bề mặt phản xạ và chi phí thiết bị.

**Examples:** `The drone used lidar to map the forest canopy.` → Drone dùng lidar để lập bản đồ tán rừng. `A lidar scan revealed a narrow passage.` → Quét lidar cho thấy một lối đi hẹp.

**Liên kết tiếng Hàn:** `라이다` — lidar.

## 6. computer vision /kəmˈpjuːtɚ ˌvɪʒən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — lĩnh vực giúp máy tính phân tích hình ảnh hoặc video để nhận diện vật thể, chuyển động và cấu trúc.

**Core meaning — English:** The field of enabling computers to analyze images or video for objects, motion, and structure.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung camera biến cảnh vật thành dữ liệu để hệ thống biết đâu là người, vật cản hoặc điểm cần gắp.

**Grammar & collocations:** `computer-vision model` — mô hình thị giác máy tính; `computer-vision pipeline` — quy trình thị giác máy tính; `apply computer vision` — áp dụng thị giác máy tính.

**Register & nuance:** Computer vision không “nhìn” theo trải nghiệm con người; nó suy luận từ dữ liệu hình ảnh và có thể thất bại khi ánh sáng, góc nhìn hoặc bối cảnh thay đổi.

**Examples:** `Computer vision detected defects on the production line.` → Thị giác máy tính phát hiện lỗi trên dây chuyền. `The robot uses computer vision to locate the package.` → Robot dùng thị giác máy tính để xác định vị trí gói hàng.

**Liên kết tiếng Hàn:** `컴퓨터 비전`, `컴퓨터 시각` — thị giác máy tính.

## 7. path planning /ˈpæθ ˌplænɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — quá trình tính một đường đi khả thi từ vị trí hiện tại đến mục tiêu, thường tránh chướng ngại.

**Core meaning — English:** The process of computing a feasible route from a current position to a goal while often avoiding obstacles.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung robot vẽ nhiều tuyến trên bản đồ rồi chọn tuyến an toàn, ngắn hoặc tiết kiệm năng lượng nhất.

**Grammar & collocations:** `global path planning` — lập đường đi toàn cục; `path-planning algorithm` — thuật toán lập đường đi; `real-time path planning` — lập đường đi thời gian thực.

**Register & nuance:** Path planning thường nói về hình học tuyến đường; nó khác motion planning, vốn còn xét tốc độ, tư thế và giới hạn động lực học.

**Examples:** `Path planning failed when the corridor became blocked.` → Lập đường đi thất bại khi hành lang bị chặn. `The algorithm performs path planning on a changing map.` → Thuật toán lập đường đi trên bản đồ thay đổi.

**Liên kết tiếng Hàn:** `경로 계획` — lập kế hoạch đường đi.

## 8. motion planning /ˈmoʊʃən ˌplænɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — quá trình tính chuỗi chuyển động và tư thế khả thi của robot để đạt mục tiêu mà không va chạm.

**Core meaning — English:** The process of computing feasible movements and poses for a robot to reach a goal without collision.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung không chỉ chọn đường mà còn quyết định từng khớp quay bao nhiêu và vào lúc nào.

**Grammar & collocations:** `motion-planning algorithm` — thuật toán lập chuyển động; `collision-free motion planning` — lập chuyển động không va chạm; `motion-planning problem` — bài toán lập chuyển động.

**Register & nuance:** Motion planning cần xét không gian cấu hình, giới hạn khớp và động lực học; một đường nhìn có vẻ trống chưa chắc robot đi được.

**Examples:** `Motion planning generated a smooth trajectory around the obstacle.` → Lập chuyển động tạo quỹ đạo mượt quanh chướng ngại. `The arm requires fast motion planning for assembly.` → Cánh tay cần lập chuyển động nhanh cho lắp ráp.

**Liên kết tiếng Hàn:** `동작 계획` — lập kế hoạch chuyển động.

## 9. manipulator /məˈnɪpjəˌleɪtɚ/

**Loại từ & vị trí trong câu:** `countable noun` — cơ cấu robot có các khớp và đoạn nối để di chuyển hoặc xử lý vật thể.

**Core meaning — English:** A robot mechanism with joints and links for moving or handling objects.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung cánh tay cơ khí nhiều khớp vươn tới, xoay và đặt vật ở vị trí mong muốn.

**Grammar & collocations:** `robotic manipulator` — cơ cấu thao tác robot; `multi-joint manipulator` — cơ cấu nhiều khớp; `manipulator arm` — cánh tay thao tác.

**Register & nuance:** Manipulator trong robot học là cơ cấu vật lý, không mang nghĩa tiêu cực “người thao túng” trong tâm lý hay xã hội.

**Examples:** `The manipulator moved the sample into the scanner.` → Cơ cấu thao tác đưa mẫu vào máy quét. `A six-joint manipulator reached behind the panel.` → Cơ cấu sáu khớp vươn ra phía sau tấm panel.

**Liên kết tiếng Hàn:** `매니퓰레이터`, `로봇 조작기` — cơ cấu thao tác robot.

## 10. end effector /ˌend ɪˈfektɚ/

**Loại từ & vị trí trong câu:** `countable noun phrase` — bộ phận ở đầu robot trực tiếp tiếp xúc với vật thể để gắp, hàn, khoan hoặc thực hiện nhiệm vụ.

**Core meaning — English:** The device at the end of a robot that directly interacts with an object to perform a task.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung “bàn tay” có thể thay đổi của cánh tay robot: kẹp, giác hút, mũi hàn hoặc dao cắt.

**Grammar & collocations:** `robot end effector` — bộ phận cuối robot; `end-effector design` — thiết kế bộ phận cuối; `change the end effector` — thay bộ phận cuối.

**Register & nuance:** End effector là khái niệm chức năng, không nhất thiết có hình dạng bàn tay và thường được chọn theo nhiệm vụ.

**Examples:** `The end effector switched from a gripper to a welding torch.` → Bộ phận cuối chuyển từ kẹp sang mỏ hàn. `A soft end effector handled fruit without bruising it.` → Bộ phận cuối mềm xử lý trái cây mà không làm bầm.

**Liên kết tiếng Hàn:** `엔드 이펙터`, `말단 장치` — bộ phận cuối, thiết bị đầu cuối.

## 11. humanoid /ˈhjuːməˌnɔɪd/

**Loại từ & vị trí trong câu:** `countable noun/adjective` — robot hoặc thiết kế có hình dạng và tỷ lệ gần giống cơ thể người.

**Core meaning — English:** A robot or design with a form and proportions resembling a human body.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung robot có thân, hai tay và hai chân để dùng không gian hoặc công cụ vốn được thiết kế cho người.

**Grammar & collocations:** `humanoid robot` — robot hình người; `humanoid platform` — nền tảng hình người; `humanoid locomotion` — vận động hình người.

**Register & nuance:** Humanoid mô tả hình thái, không bảo đảm robot có trí tuệ, cảm xúc hay hành vi giống người.

**Examples:** `The humanoid robot climbed stairs slowly.` → Robot hình người leo cầu thang chậm. `A humanoid design may fit existing workplaces.` → Thiết kế hình người có thể phù hợp với nơi làm việc sẵn có.

**Liên kết tiếng Hàn:** `휴머노이드`, `인간형 로봇` — humanoid, robot hình người.

## 12. cobot /ˈkoʊbɑt/

**Loại từ & vị trí trong câu:** `countable noun` — robot cộng tác được thiết kế để làm việc gần và cùng với con người trong một không gian chia sẻ.

**Core meaning — English:** A collaborative robot designed to work near and with people in a shared workspace.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung cánh tay robot hỗ trợ nâng hoặc lắp ráp, có cảm biến để dừng khi người bước vào vùng nguy hiểm.

**Grammar & collocations:** `industrial cobot` — robot cộng tác công nghiệp; `cobot safety` — an toàn cobot; `program a cobot` — lập trình cobot.

**Register & nuance:** Cobot không tự động an toàn trong mọi tình huống; đánh giá rủi ro, tốc độ và công cụ vẫn là bắt buộc.

**Examples:** `The cobot handed parts to workers on the assembly line.` → Cobot đưa linh kiện cho công nhân trên dây chuyền. `Cobot safety depends on the task and end effector.` → An toàn cobot phụ thuộc nhiệm vụ và bộ phận cuối.

**Liên kết tiếng Hàn:** `협동로봇`, `코봇` — robot cộng tác, cobot.

## 13. swarm robotics /ˈswɔrm roʊˌbɑtɪks/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — lĩnh vực thiết kế nhiều robot đơn giản phối hợp theo quy tắc cục bộ để tạo hành vi tập thể.

**Core meaning — English:** The design of many relatively simple robots that coordinate through local rules to produce collective behavior.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung cả đàn robot nhỏ tự phân tán, chia nhiệm vụ và thích nghi mà không cần một bộ chỉ huy trung tâm.

**Grammar & collocations:** `swarm-robotics algorithm` — thuật toán robot bầy đàn; `swarm robotics research` — nghiên cứu robot bầy đàn; `swarm-robotics system` — hệ thống robot bầy đàn.

**Register & nuance:** Swarm robotics dựa vào phân tán và dư thừa; từng robot có thể rất hạn chế nhưng cả nhóm vẫn hoàn thành nhiệm vụ.

**Examples:** `Swarm robotics could help search a collapsed building.` → Robot bầy đàn có thể giúp tìm kiếm tòa nhà sập. `The swarm robotics system redistributed tasks after one unit failed.` → Hệ thống robot bầy đàn phân phối lại nhiệm vụ sau khi một đơn vị hỏng.

**Liên kết tiếng Hàn:** `군집 로보틱스` — robot bầy đàn.

## 14. teleoperation /ˌtelɪˌɑpəˈreɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun` — điều khiển máy hoặc robot từ xa bằng giao diện truyền lệnh và đôi khi phản hồi cảm giác.

**Core meaning — English:** The remote control of a machine or robot through an interface that sends commands and may return sensory feedback.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung người vận hành ở nơi an toàn điều khiển cánh tay robot ở môi trường nguy hiểm qua camera và bộ điều khiển.

**Grammar & collocations:** `remote teleoperation` — điều khiển từ xa; `teleoperation interface` — giao diện điều khiển từ xa; `teleoperation system` — hệ thống điều khiển từ xa.

**Register & nuance:** Teleoperation vẫn cần con người ra lệnh; nó khác autonomy, dù hai chế độ có thể kết hợp trong cùng một hệ thống.

**Examples:** `Teleoperation allowed engineers to inspect the reactor remotely.` → Điều khiển từ xa cho phép kỹ sư kiểm tra lò phản ứng từ xa. `The interface provides force feedback during teleoperation.` → Giao diện cung cấp phản hồi lực khi điều khiển từ xa.

**Liên kết tiếng Hàn:** `원격 조작` — điều khiển từ xa.

## 15. kinematics /ˌkɪnəˈmætɪks/

**Loại từ & vị trí trong câu:** `uncountable noun` — ngành mô tả vị trí, vận tốc và gia tốc của các bộ phận chuyển động mà chưa xét lực gây ra chúng.

**Core meaning — English:** The study of the position, velocity, and acceleration of moving parts without considering the forces causing the motion.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung tính đầu kẹp sẽ ở đâu khi từng khớp quay một góc nhất định, trước khi hỏi động cơ cần lực bao nhiêu.

**Grammar & collocations:** `robot kinematics` — động học robot; `forward kinematics` — động học thuận; `inverse kinematics` — động học ngược.

**Register & nuance:** Kinematics nói hình học của chuyển động; dynamics mới phân tích lực, mô-men và khối lượng tạo ra chuyển động đó.

**Examples:** `The software solved inverse kinematics for the robotic arm.` → Phần mềm giải động học ngược cho cánh tay robot. `Kinematics predicted the end effector's position.` → Động học dự đoán vị trí bộ phận cuối.

**Liên kết tiếng Hàn:** `운동학` — động học.

## Review in context

The laboratory tested a **robotic** inspection system built around an **autonomous robot**. Its **actuator** moved the arm, while **sensor fusion** combined camera data with **lidar**. **Computer vision** identified cracks, and **path planning** selected a safe route before **motion planning** calculated each joint movement. A **manipulator** carried an **end effector** designed for sampling. The team compared a **humanoid** prototype with a **cobot**, then used **swarm robotics** to search a larger area. In a dangerous zone, **teleoperation** provided human oversight, while **kinematics** checked whether the arm could reach the target.

Phòng thí nghiệm thử một hệ thống kiểm tra **robotic** xây dựng quanh một **robot tự chủ**. **Bộ truyền động** di chuyển cánh tay, còn **hợp nhất cảm biến** kết hợp dữ liệu camera với **lidar**. **Thị giác máy tính** nhận diện vết nứt, **lập đường đi** chọn tuyến an toàn trước khi **lập chuyển động** tính từng chuyển động của khớp. Một **cơ cấu thao tác** mang **bộ phận cuối** được thiết kế để lấy mẫu. Nhóm so sánh một nguyên mẫu **hình người** với một **cobot**, rồi dùng **robot bầy đàn** để tìm kiếm khu vực lớn hơn. Trong vùng nguy hiểm, **điều khiển từ xa** cung cấp giám sát của con người, còn **động học** kiểm tra liệu cánh tay có thể với tới mục tiêu hay không.
