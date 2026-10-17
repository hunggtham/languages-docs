# 로봇공학 및 동시적 위치추정 및 지도작성 SLAM과 센서 융합의 언어

- 주제 슬러그: `robotics-simultaneous-localization-and-mapping-slam`
- 수록 어휘 수: 15개
- 학습 수준: B2–C2 (고급 한국어 및 전문 학술/사회 영역)
- 목표: 자율주행 로봇 및 무인 이동체 분야에서 환경 지도 작성과 자기 위치 인식을 동시에 수행하는 SLAM 알고리즘, 센서 융합, 기하학적 최적화 이론을 다루는 전문 기술 어휘

## 포함 어휘 목록

1. `동시적위치지도작성` — Định vị và lập bản đồ đồng thời (kỹ thuật SLAM giúp rô-bốt vừa vẽ bản đồ môi trường vừa xác định vị trí của mình)
2. `라이다점군정합` — Khớp đám mây điểm LiDAR (quá trình tính toán hình học so khớp các đám mây điểm 3D liên tiếp từ cảm biến LiDAR)
3. `특징점추출추적기` — Bộ trích xuất và theo dõi điểm đặc trưng (mô-đun phần mềm phát hiện và theo dõi các điểm mốc thị giác nổi bật qua các khung hình camera)
4. `시각주행계오차누적` — Tích lũy sai số đo đạc hành trình thị giác (sự cộng dồn sai số vị trí theo thời gian do tích phân phép đo thị giác Visual Odometry)
5. `루프폐쇄재인식` — Nhận dạng lại đóng vòng lặp (khả năng rô-bốt nhận ra mình đã quay lại địa điểm từng đi qua để đóng kín vòng lặp)
6. `포즈그래프최적화` — Tối ưu hóa đồ thị tư thế (kỹ thuật tối ưu hóa phi tuyến điều chỉnh lại tọa độ và hướng của toàn bộ quỹ đạo di chuyển của rô-bốt)
7. `점유격자지도생성` — Tạo bản đồ lưới chiếm dụng (kỹ thuật chia không gian thành các ô lưới và tính toán xác suất bị vật cản chiếm hữu)
8. `관성측정센서융합` — Dung hợp cảm biến đo quán tính (kết hợp dữ liệu tốc độ cao từ cảm biến IMU với camera hoặc LiDAR để tăng độ chính xác định vị)
9. `확장칼만필터추정` — Ước lượng bộ lọc Kalman mở rộng (thuật toán lọc đệ quy tuyến tính hóa cục bộ để ước lượng trạng thái của hệ thống phi tuyến)
10. `비선형최소제곱최적화` — Tối ưu hóa bình phương tối thiểu phi tuyến (phương pháp số lặp giải bài toán cực tiểu hóa tổng bình phương phần dư phi tuyến)
11. `광학흐름속도추정` — Ước lượng vận tốc dòng quang học (kỹ thuật tính toán vận tốc di chuyển tương đối dựa trên vector chuyển động của các điểm ảnh)
12. `이동로봇자기위치인식` — Nhận thức vị trí bản thân rô-bốt di động (quá trình rô-bốt tự xác định tọa độ không gian và góc hướng của mình trên bản đồ)
13. `동적물체제외필터링` — Lọc loại trừ vật thể động (kỹ thuật lọc bỏ các đối tượng chuyển động như người đi bộ hoặc xe cộ khỏi dữ liệu lập bản đồ tĩnh)
14. `변위오차수렴속도` — Tốc độ hội tụ sai số dịch chuyển (tốc độ mà thuật toán số kéo giảm sai số giữa vị trí thực và vị trí ước lượng về ngưỡng cho phép)
15. `밀집삼차원지도복원` — Phục hồi bản đồ ba chiều đậm đặc (quá trình tái tạo mô hình không gian 3D dày đặc với đầy đủ lưới bề mặt và thông tin màu sắc)

## 학습 안내

본 단원의 상세 어휘 해설과 연관 독해 지문은 [01-simultaneous-localization-and-mapping-slam.md](./01-simultaneous-localization-and-mapping-slam.md) 파일에서 학습하실 수 있습니다.
