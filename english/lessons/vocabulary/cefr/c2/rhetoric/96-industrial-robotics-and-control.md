# C2 Vocabulary 96 — Industrial robotics and control

This lesson follows a robot from mechanical motion and sensing to programming, safety, and collaboration with human workers on a modern production line.

Flow: **actuator → end effector → kinematics → inverse kinematics → feedback loop → PID controller → servomotor → encoder → torque → degrees of freedom → workspace → trajectory planning → collision avoidance → cobot → machine vision → force-torque sensor → calibration → teach pendant → digital thread → human-in-the-loop**.

## 1. actuator /ˈæktʃuˌeɪtər/
**Part of speech:** noun
**Core meaning (English):** a device that converts energy into controlled physical movement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ cấu chấp hành; hình ảnh bộ phận nhận lệnh điện hoặc khí nén rồi làm khớp máy chuyển động.
**Grammar & collocations:** `linear actuator` — cơ cấu chấp hành tuyến tính; `actuator response` — đáp ứng của cơ cấu chấp hành.
**Examples:** `The actuator moved the gripper smoothly toward the workpiece.` → Cơ cấu chấp hành đưa kẹp máy tiến mượt về phía phôi.
**Liên kết tiếng Hàn:** `액추에이터` (aekchueiteo) — cơ cấu chấp hành.

## 2. end effector /ɛnd ɪˈfɛktər/
**Part of speech:** noun
**Core meaning (English):** the tool or device mounted at the end of a robot arm to perform a task.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đầu công tác; hình ảnh “bàn tay” thay đổi của robot để gắp, hàn, khoan hoặc sơn.
**Grammar & collocations:** `robot end effector` — đầu công tác robot; `change an end effector` — thay đầu công tác.
**Examples:** `The end effector switched from a suction cup to a welding torch.` → Đầu công tác đổi từ cốc hút sang mỏ hàn.
**Liên kết tiếng Hàn:** `말단 장치` (maldan jangchi) — thiết bị đầu cuối, đầu công tác.

## 3. kinematics /kɪnəˈmætɪks/
**Part of speech:** noun
**Core meaning (English):** the study and calculation of motion, position, and velocity without focusing on the forces that cause it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** động học; hình ảnh tính robot đang ở đâu và sẽ di chuyển ra sao mà chưa cần tính lực.
**Grammar & collocations:** `robot kinematics` — động học robot; `forward kinematics` — động học thuận.
**Examples:** `Kinematics calculated the gripper's position from the measured joint angles.` → Động học tính vị trí đầu kẹp từ các góc khớp đo được.
**Liên kết tiếng Hàn:** `기구학` (giguhak) — động học cơ cấu.

## 4. inverse kinematics /ˈɪnvɝs kɪnəˈmætɪks/
**Part of speech:** noun
**Core meaning (English):** the calculation of joint positions and angles needed to place a robot's end effector at a desired location and orientation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** động học nghịch; hình ảnh cho robot biết từng khớp phải xoay bao nhiêu để bàn tay đến đúng điểm.
**Grammar & collocations:** `inverse-kinematics solver` — bộ giải động học nghịch; `solve inverse kinematics` — giải bài toán động học nghịch.
**Examples:** `The inverse-kinematics solver found two safe arm configurations for the same target.` → Bộ giải động học nghịch tìm được hai cấu hình tay an toàn cho cùng một đích.
**Liên kết tiếng Hàn:** `역기구학` (yeokg iuhak) — động học nghịch.

## 5. feedback loop /ˈfiːdˌbæk luːp/
**Part of speech:** noun
**Core meaning (English):** a control cycle in which measured output is compared with a target and the difference is used to adjust the system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vòng phản hồi; hình ảnh máy đo kết quả, so với mục tiêu rồi tự sửa lệnh điều khiển.
**Grammar & collocations:** `closed feedback loop` — vòng phản hồi kín; `feedback-loop stability` — độ ổn định vòng phản hồi.
**Examples:** `The feedback loop corrected small position errors before they became visible defects.` → Vòng phản hồi sửa các lỗi vị trí nhỏ trước khi chúng thành khuyết tật nhìn thấy.
**Liên kết tiếng Hàn:** `피드백 루프` (pideubaek rupeu) — vòng phản hồi.

## 6. PID controller /ˌpiː aɪ ˈdiː kənˈtroʊlər/
**Part of speech:** noun
**Core meaning (English):** a controller that combines proportional, integral, and derivative responses to reduce error and stabilize a system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ điều khiển PID; hình ảnh ba cách nhìn lỗi hiện tại, lỗi tích lũy và tốc độ đổi lỗi cùng điều chỉnh máy.
**Grammar & collocations:** `tune a PID controller` — tinh chỉnh bộ điều khiển PID; `PID-control gain` — hệ số khuếch đại điều khiển PID.
**Examples:** `Engineers tuned the PID controller to stop the arm from overshooting its target.` → Kỹ sư tinh chỉnh bộ điều khiển PID để tay máy không vượt quá mục tiêu.
**Liên kết tiếng Hàn:** `PID 제어기` (PID jeeogi) — bộ điều khiển PID.

## 7. servomotor /ˈsɝvoʊˌmoʊtər/
**Part of speech:** noun
**Core meaning (English):** a motor used in a feedback-controlled system to produce precise movement or positioning.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** động cơ servo; hình ảnh động cơ liên tục nghe phản hồi để quay đúng góc và tốc độ.
**Grammar & collocations:** `servo motor drive` — bộ truyền động servo; `servomotor precision` — độ chính xác động cơ servo.
**Examples:** `The servomotor held the joint at a precise angle while the tool cut the part.` → Động cơ servo giữ khớp ở góc chính xác khi dụng cụ cắt chi tiết.
**Liên kết tiếng Hàn:** `서보 모터` (seobo moteo) — động cơ servo.

## 8. encoder /ɛnˈkoʊdər/
**Part of speech:** noun
**Core meaning (English):** a sensor that converts the position, speed, or rotation of a mechanical part into an electrical signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ mã hóa; hình ảnh cảm biến báo cho bộ điều khiển khớp đang ở góc nào và quay nhanh ra sao.
**Grammar & collocations:** `rotary encoder` — bộ mã hóa quay; `encoder feedback` — phản hồi từ bộ mã hóa.
**Examples:** `The encoder detected a tiny shift in the conveyor motor's position.` → Bộ mã hóa phát hiện một dịch chuyển nhỏ ở vị trí động cơ băng chuyền.
**Liên kết tiếng Hàn:** `엔코더` (enkodeo) — bộ mã hóa.

## 9. torque /tɔrk/
**Part of speech:** noun
**Core meaning (English):** the turning force produced by a motor or applied to a shaft, joint, or tool.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô-men xoắn; hình ảnh lực vặn làm khớp quay hoặc siết dụng cụ.
**Grammar & collocations:** `motor torque` — mô-men xoắn động cơ; `torque limit` — giới hạn mô-men xoắn.
**Examples:** `The controller reduced torque when the gripper encountered unexpected resistance.` → Bộ điều khiển giảm mô-men xoắn khi kẹp gặp lực cản bất ngờ.
**Liên kết tiếng Hàn:** `토크` (tokeu) — mô-men xoắn.

## 10. degrees of freedom /dɪˈɡriːz əv ˈfriːdəm/
**Part of speech:** noun
**Core meaning (English):** the independent directions or rotations in which a mechanical system can move.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bậc tự do; hình ảnh đếm số cách độc lập mà tay máy có thể dịch chuyển hoặc xoay.
**Grammar & collocations:** `six degrees of freedom` — sáu bậc tự do; `degree-of-freedom analysis` — phân tích bậc tự do.
**Examples:** `The six degrees of freedom allowed the tool to approach the surface from any orientation.` → Sáu bậc tự do cho phép dụng cụ tiếp cận bề mặt từ mọi hướng.
**Liên kết tiếng Hàn:** `자유도` (jayudo) — bậc tự do.

## 11. workspace /ˈwɝkˌspeɪs/
**Part of speech:** noun
**Core meaning (English):** the three-dimensional region that a robot can reach with its end effector.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không gian làm việc; hình ảnh vùng mà bàn tay robot có thể với tới mà không vượt giới hạn khớp.
**Grammar & collocations:** `robot workspace` — không gian làm việc robot; `workspace boundary` — ranh giới không gian làm việc.
**Examples:** `The fixture was moved inside the robot's workspace to avoid an unreachable angle.` → Đồ gá được chuyển vào không gian làm việc của robot để tránh góc không thể với tới.
**Liên kết tiếng Hàn:** `작업 공간` (jageop gonggan) — không gian làm việc.

## 12. trajectory planning /trəˈdʒɛktəri ˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** the calculation of a time-dependent path and motion profile for a robot or tool.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lập kế hoạch quỹ đạo; hình ảnh vẽ cả đường đi và tốc độ theo thời gian chứ không chỉ điểm đầu cuối.
**Grammar & collocations:** `robot trajectory planning` — lập kế hoạch quỹ đạo robot; `collision-free trajectory planning` — lập quỹ đạo không va chạm.
**Examples:** `Trajectory planning synchronized the arm with the moving conveyor.` → Lập kế hoạch quỹ đạo đồng bộ tay máy với băng chuyền đang chạy.
**Liên kết tiếng Hàn:** `궤적 계획` (gwaejeok gyehoek) — lập kế hoạch quỹ đạo.

## 13. collision avoidance /kəˈlɪʒən əˈvɔɪdəns/
**Part of speech:** noun
**Core meaning (English):** methods that detect potential impacts and alter motion to keep a robot, person, or object safe.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tránh va chạm; hình ảnh hệ thống nhận ra vật cản và đổi đường trước khi đụng.
**Grammar & collocations:** `real-time collision avoidance` — tránh va chạm thời gian thực; `collision-avoidance algorithm` — thuật toán tránh va chạm.
**Examples:** `Collision avoidance slowed the robot when a worker entered the shared zone.` → Tránh va chạm làm robot chậm lại khi công nhân bước vào vùng dùng chung.
**Liên kết tiếng Hàn:** `충돌 회피` (chungdol hoepi) — tránh va chạm.

## 14. cobot /ˈkoʊˌbɑt/
**Part of speech:** noun
**Core meaning (English):** a collaborative robot designed to work in proximity to people with built-in safety limitations and sensing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** robot cộng tác; hình ảnh robot làm việc cạnh người thay vì bị nhốt sau hàng rào.
**Grammar & collocations:** `collaborative cobot` — robot cộng tác; `cobot workstation` — trạm làm việc với cobot.
**Examples:** `The cobot handed tools to technicians while they performed the delicate alignment.` → Cobot đưa dụng cụ cho kỹ thuật viên khi họ căn chỉnh tinh vi.
**Liên kết tiếng Hàn:** `협동 로봇` (hyeopdong robot) — robot cộng tác.

## 15. machine vision /məˈʃiːn ˈvɪʒən/
**Part of speech:** noun
**Core meaning (English):** the use of cameras, lighting, and algorithms to let a machine inspect or interpret visual information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thị giác máy; hình ảnh camera và thuật toán giúp robot nhìn lỗi, vị trí hoặc hình dạng.
**Grammar & collocations:** `machine-vision inspection` — kiểm tra bằng thị giác máy; `machine-vision camera` — camera thị giác máy.
**Examples:** `Machine vision rejected parts with a hairline crack near the connector.` → Thị giác máy loại những chi tiết có vết nứt nhỏ gần đầu nối.
**Liên kết tiếng Hàn:** `머신 비전` (meosin bijeon) — thị giác máy.

## 16. force-torque sensor /fɔrs tɔrk ˈsɛnsər/
**Part of speech:** noun
**Core meaning (English):** a sensor that measures forces and turning moments acting on a robot tool or joint.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cảm biến lực-mô-men; hình ảnh robot cảm nhận vừa lực đẩy vừa lực xoắn khi chạm vật.
**Grammar & collocations:** `six-axis force-torque sensor` — cảm biến lực-mô-men sáu trục; `force-torque sensing` — cảm nhận lực-mô-men.
**Examples:** `The force-torque sensor let the robot polish the surface without applying excessive pressure.` → Cảm biến lực-mô-men giúp robot đánh bóng mà không ấn quá mạnh.
**Liên kết tiếng Hàn:** `힘-토크 센서` (him-tokeu senseo) — cảm biến lực-mô-men.

## 17. calibration /ˌkæləˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of comparing and adjusting an instrument or robot so that its measurements and movements match a known reference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiệu chuẩn; hình ảnh căn máy theo chuẩn để tọa độ và cảm biến nói đúng.
**Grammar & collocations:** `robot calibration` — hiệu chuẩn robot; `calibration target` — mục tiêu hiệu chuẩn.
**Examples:** `Regular calibration kept the camera coordinates aligned with the robot arm.` → Hiệu chuẩn thường xuyên giữ tọa độ camera khớp với tay robot.
**Liên kết tiếng Hàn:** `교정` (gyojeong) — hiệu chuẩn.

## 18. teach pendant /tiːtʃ ˈpɛndənt/
**Part of speech:** noun
**Core meaning (English):** a handheld control device used to jog, program, and monitor an industrial robot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảng điều khiển dạy robot; hình ảnh kỹ thuật viên cầm thiết bị và chỉ từng điểm robot phải đi qua.
**Grammar & collocations:** `robot teach pendant` — bảng điều khiển dạy robot; `program with a teach pendant` — lập trình bằng bảng điều khiển dạy robot.
**Examples:** `The technician used the teach pendant to record a safe inspection path.` → Kỹ thuật viên dùng bảng điều khiển dạy robot để ghi lại đường kiểm tra an toàn.
**Liên kết tiếng Hàn:** `티치 펜던트` (tichi pend eonteu) — bảng điều khiển dạy robot.

## 19. digital thread /ˈdɪdʒətəl θrɛd/
**Part of speech:** noun
**Core meaning (English):** a connected flow of digital information linking a product's design, manufacture, operation, and maintenance history.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi dữ liệu số; hình ảnh một sợi chỉ nối bản vẽ, sản xuất, vận hành và sửa chữa của cùng sản phẩm.
**Grammar & collocations:** `manufacturing digital thread` — chuỗi dữ liệu số sản xuất; `maintain a digital thread` — duy trì chuỗi dữ liệu số.
**Examples:** `The digital thread linked the robot's inspection result to the part's original design revision.` → Chuỗi dữ liệu số nối kết quả kiểm tra của robot với phiên bản thiết kế gốc của chi tiết.
**Liên kết tiếng Hàn:** `디지털 스레드` (dijiteol seuredeu) — chuỗi dữ liệu số.

## 20. human-in-the-loop /ˌhjuːmən ɪn ðə luːp/
**Part of speech:** adjective
**Core meaning (English):** involving a person who reviews, guides, or can override an automated system during its operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** có con người trong vòng điều khiển; hình ảnh tự động hóa vẫn để người giám sát và can thiệp khi cần.
**Grammar & collocations:** `human-in-the-loop control` — điều khiển có con người trong vòng; `human-in-the-loop review` — rà soát có con người.
**Examples:** `A human-in-the-loop system required an operator to approve unusual welding patterns.` → Hệ thống có con người trong vòng yêu cầu người vận hành duyệt các mẫu hàn bất thường.
**Liên kết tiếng Hàn:** `인간 개입형` (ingan gaeip hyeong) — có sự can thiệp của con người.

## Review in context

An **actuator** moves an **end effector**, and **kinematics** plus **inverse kinematics** describe how the arm reaches a target. A **feedback loop**, **PID controller**, **servomotor**, and **encoder** coordinate precise motion and **torque**. The robot's **degrees of freedom** define its **workspace**, while **trajectory planning** and **collision avoidance** keep movement safe. A **cobot** can work beside people; **machine vision** and a **force-torque sensor** help it perceive the task. **Calibration** aligns the system, a **teach pendant** records paths, a **digital thread** preserves manufacturing information, and **human-in-the-loop** control keeps responsibility visible.

**Bản dịch tiếng Việt:**

Cơ cấu chấp hành di chuyển đầu công tác, còn động học và động học nghịch mô tả cách tay máy đến mục tiêu. Vòng phản hồi, bộ điều khiển PID, động cơ servo và bộ mã hóa phối hợp chuyển động chính xác cùng mô-men xoắn. Các bậc tự do xác định không gian làm việc, trong khi lập kế hoạch quỹ đạo và tránh va chạm giữ chuyển động an toàn. Cobot có thể làm việc cạnh con người; thị giác máy và cảm biến lực-mô-men giúp nó cảm nhận nhiệm vụ. Hiệu chuẩn căn chỉnh hệ thống, bảng điều khiển dạy robot ghi đường đi, chuỗi dữ liệu số lưu thông tin sản xuất, còn điều khiển có con người trong vòng giữ trách nhiệm được nhìn thấy rõ.
