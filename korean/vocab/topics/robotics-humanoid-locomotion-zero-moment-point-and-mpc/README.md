# 로봇공학 및 휴머노이드 보행 제어와 영모멘트점의 언어

- 주제 슬러그: `robotics-humanoid-locomotion-zero-moment-point-and-mpc`
- 수록 어휘 수: 15개
- 학습 수준: B2–C2 (고급 한국어 및 전문 학술/사회 영역)
- 목표: 로봇공학 및 동역학 제어 분야에서 이족보행 휴머노이드의 영모멘트점(ZMP) 안정성 기준, 모델예측제어(MPC), 지지다각형 접지면, 역동역학 모멘텀 보상과 전신 협응 제어를 규명하는 전문 로봇공학 어휘

## 포함 어휘 목록

1. `휴머노이드보행제어` — Điều khiển bước đi robot dạng người Humanoid Locomotion Control (hệ thống điều khiển tự động điều phối theo thời gian thực góc quay và mô-men xoắn của từng khớp nối để robot hai chân có cấu trúc xương giống con người có thể vượt qua trọng lực, lực quán tính và xung lực mặt đất, bước đi tự nhiên vững vàng trên các địa hình bằng phẳng và gồ ghề mà không bị vấp ngã)
2. `영모멘트점안정성` — Tính ổn định điểm không mô-men ZMP Stability (quy tắc vàng của độ ổn định bước đi động học, khẳng định rằng điểm Zero Moment Point - nơi tổng mô-men quay theo phương nằm ngang sinh ra do lực quán tính và trọng lực tại mặt tiếp xúc giữa bàn chân robot và mặt đất bằng đúng 0 - bắt buộc phải nằm bên trong đa giác chống đỡ của bàn chân thì robot mới không bị lật ngã)
3. `역동역학모멘텀보상` — Bù động lượng động lực học nghịch Inverse Dynamics Momentum Compensation (kỹ thuật điều khiển động lượng theo mô hình động lực học nghịch, trong đó vung tay, xoay lắc xương chậu hoặc uốn thân trên theo hướng ngược lại để triệt tiêu sự thay đổi đột ngột của mô-men động lượng toàn thân phát sinh trong lúc bước đi, qua đó hiệu chỉnh độ nghiêng của thân mình)
4. `모델예측제어알고리즘` — Thuật toán điều khiển dự báo mô hình MPC (kỹ thuật điều khiển cao cấp dựa trên mô hình toán học vật lý của robot để dự báo theo thời gian thực quỹ đạo bước đi và trạng thái khớp nối trong một khoảng chân trời dự báo tương lai, đồng thời giải bài toán tối ưu hóa mỗi chu kỳ để đưa ra tín hiệu điều khiển tối ưu thỏa mãn giới hạn cơ cấu chấp hành và ràng buộc tiếp xúc mặt đất)
5. `지지다각형접지면` — Mặt tiếp địa đa giác chống đỡ Support Polygon (khu vực hình học phẳng được định nghĩa bởi các vùng tiếp xúc riêng lẻ nơi hai lòng bàn chân của robot hai chân chạm đất và lớp bao lồi Convex Hull bao bọc ngoài cùng xung quanh các vùng đó)
6. `동적보행패턴생성` — Tạo mẫu bước đi động học Dynamic Gait Pattern Generation (kỹ thuật tổng hợp toán học theo thời gian thực quỹ đạo di chuyển 3 chiều của khối tâm CoM và vị trí tiếp đất của bàn chân robot phù hợp với các định luật vật lý dựa trên vận tốc bước đi, sải chân và góc quay mục tiêu)
7. `포획점기반자세회복` — Phục hồi tư thế dựa trên điểm bắt Capture Point (công nghệ khôi phục tư thế chống ngã bằng cách tính toán điểm bắt Capture Point - điểm vị trí chính xác mà robot phải đặt bàn chân kế tiếp xuống để tiêu tán toàn bộ động năng và dừng hẳn cơ thể lại khi bị ngoại lực mạnh đẩy chực ngã)
8. `전신협응제어기법` — Kỹ thuật điều khiển phối hợp toàn thân Whole-Body Control WBC (kỹ thuật tối ưu hóa điều khiển tích hợp đồng thời các khớp toàn thân của robot với hàng chục bậc tự do không chỉ gồm phần thân dưới như cổ chân, đầu gối, khớp háng mà cả eo lưng, cánh tay, cổ theo hệ thống nhiệm vụ đa mục tiêu dựa trên thứ tự ưu tiên)
9. `지면반력센서측정` — Đo cảm biến phản lực mặt đất Ground Reaction Force GRF Measurement (quá trình thu thập dữ liệu cảm giác đo lường chuẩn xác theo thời gian thực phản lực pháp tuyến, lực ma sát và mô-men xoắn từ mặt đất tác động lên thông qua cảm biến lực/mô-men 6 trục tích hợp bên trong lòng bàn chân hoặc khớp cổ chân robot)
10. `도립진자단순화모델` — Mô hình con lắc ngược đơn giản hóa Linear Inverted Pendulum Model LIPM (mô hình xấp xỉ vật lý thay thế toàn bộ robot đa khớp phức tạp thành một chất điểm khối lượng duy nhất và một chân ảo đàn hồi không khối lượng, giúp giải phương trình động lực học bước đi phức tạp với tốc độ cực nhanh theo thời gian thực)
11. `유연관절액추에이터` — Cơ cấu chấp hành khớp nối linh hoạt Series Elastic Actuator SEA (bộ truyền động tích hợp lò xo đàn hồi hoặc thanh xoắn giữa động cơ và hộp giảm tốc để hấp thụ xung lực cơ học từ bên ngoài và hoạt động đàn hồi như cơ bắp gân cốt của con người thông qua tích trữ và giải phóng năng lượng)
12. `충격흡수보행적응` — Thích ứng bước đi hấp thụ xung lực (thuật toán thích nghi bước đi phân tán êm dịu xung lực phản lực mặt đất đột ngột cực mạnh phát sinh khoảnh khắc bàn chân chạm đất thông qua khuỵu gối và điều khiển trở kháng chủ động Active Impedance Control nhằm phòng chống lật ngã robot)
13. `질량중심궤적최적화` — Tối ưu hóa quỹ đạo khối tâm CoM Trajectory Optimization (quy trình thiết kế đường cong không gian 3 chiều nơi trọng tâm toàn bộ khối lượng robot CoM di chuyển bằng các kỹ thuật tối ưu hóa số học nhằm thỏa mãn tối thiểu hóa tiêu hao năng lượng, tối đa hóa biên độ an toàn ZMP và giới hạn mô-men xoắn cơ cấu chấp hành)
14. `외란외력극복제어` — Điều khiển khắc phục ngoại lực nhiễu loạn Robust Disturbance Rejection Control (kỹ thuật điều khiển bền vững phòng chống ngã bằng cách sử dụng bộ quan sát nhiễu DOB ước tính nhanh chóng ngoại lực khi xuất hiện các yếu tố quấy rối bên ngoài bất ngờ không có trong mô hình như cú xô ngang bất ngờ, gờ đất đột ngột, gió mạnh và áp đặt mô-men hiệu chỉnh ngược hướng)
15. `발디딤위치보정기` — Bộ hiệu chỉnh vị trí đặt chân Footstep Placement Modifier (mô-đun điều khiển hiệu chỉnh bước đi thực hiện việc vi chỉnh ở đơn vị mili giây ngay trước khi tiếp đất tọa độ 3 chiều của điểm đặt chân trong không trung đang ở pha vung chân Swing Phase, kết hợp giữa vận tốc rung lắc của thân mình và giá trị đo cảm biến thị giác địa hình)

## 학습 안내

본 단원의 상세 어휘 해설과 연관 독해 지문은 [04-humanoid-locomotion-and-zero-moment-point.md](./04-humanoid-locomotion-and-zero-moment-point.md) 파일에서 학습하실 수 있습니다.
