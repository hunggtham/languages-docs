<!-- source_policy: original explanations, examples, and passage; robotics-simultaneous-localization-and-mapping-slam terminology cross-checked conceptually, not copied -->
# 로봇공학 및 동시적 위치추정 및 지도작성 SLAM과 센서 융합의 언어

동시적위치지도작성 및 라이다점군정합 기반 특징점추출추적기와 시각주행계오차누적 로봇공학 및 동시적 위치추정 및 지도작성 SLAM과 센서 융합의 언어

---

### 동시적위치지도작성

- **발음:** [동시정위치지도작썽]
- **품사:** 명사
- **핵심 의미:** 이동 로봇이 사전 정보가 없는 미지의 환경에서 센서를 통해 주변 지도를 그리면서 동시에 그 지도 내에서 자신의 위치를 추정하는 핵심 자율주행 기술.
- **베트남어 뜻:** Định vị và lập bản đồ đồng thời (kỹ thuật SLAM giúp rô-bốt vừa vẽ bản đồ môi trường vừa xác định vị trí của mình)
- **뉘앙스와 사용법:** Nền tảng của toàn bộ ngành robot tự hành; giải quyết bài toán con gà và quả trứng: cần bản đồ để biết vị trí, nhưng cần biết vị trí để vẽ bản đồ.
- **재사용 가능한 콜로케이션·청크:**
  - 실시간 동시적위치지도작성 (định vị và lập bản đồ đồng thời thời gian thực)
  - 동시적위치지도작성 알고리즘 (thuật toán định vị và lập bản đồ đồng thời)
  - 시각 기반 동시적위치지도작성 (định vị và lập bản đồ đồng thời dựa trên thị giác Visual SLAM)
- **자주 쓰는 문형과 성분:**
  - 동시적위치지도작성을(를) 수행하여 자율 비행을 완성하다 (hoàn thành bay tự động nhờ thực hiện định vị và lập bản đồ đồng thời)
  - 동시적위치지도작성에 고성능 프로세서가 요구되다 (bộ xử lý hiệu năng cao được yêu cầu cho định vị và lập bản đồ đồng thời)
- **사회적 관계·주제별 register:** Kỹ thuật robot, thị giác máy tính, điều khiển tự động học.
- **예문:**
  - 위성 항법 신호가 닿지 않는 지하 광산에서 탐사 로봇은 동시적위치지도작성 기술에 전적으로 의존하여 경로를 개척했다.
- **Dịch:**
  - Trong mỏ ngầm nơi tín hiệu định vị vệ tinh không với tới, rô-bốt thám hiểm đã dựa hoàn toàn vào công nghệ định vị và lập bản đồ đồng thời để khai phá đường đi.
- **어휘 연결:**
  - 유의어: `자율주행내비게이션` (điều hướng tự hành navigation)
  - 관련어: `위치인식지도화` (bản đồ hóa và nhận thức vị trí)
- **영어 참고:** `simultaneous localization and mapping` — kỹ thuật SLAM trong robot tự hành

---

### 라이다점군정합

- **발음:** [라이다점군정합]
- **품사:** 명사
- **핵심 의미:** 라이다 센서가 연속적으로 스캔한 3차원 점 구름(Point Cloud) 데이터를 기하학적으로 일치시켜 센서의 상대적 이동 변위를 정밀 계산하는 연산 과정.
- **베트남어 뜻:** Khớp đám mây điểm LiDAR (quá trình tính toán hình học so khớp các đám mây điểm 3D liên tiếp từ cảm biến LiDAR)
- **뉘앙스와 사용법:** Thường dùng thuật toán ICP (Iterative Closest Point) hoặc NDT (Normal Distributions Transform) để ghép nối dữ liệu không gian 3D mà không cần gắn mốc nhân tạo.
- **재사용 가능한 콜로케이션·청크:**
  - 정밀 라이다점군정합 (khớp đám mây điểm LiDAR chuẩn xác)
  - 라이다점군정합 알고리즘 (thuật toán khớp đám mây điểm LiDAR)
  - 실시간 라이다점군정합 (khớp đám mây điểm LiDAR thời gian thực)
- **자주 쓰는 문형과 성분:**
  - 라이다점군정합을(를) 통해 연속 프레임을 결합하다 (ghép các khung hình liên tiếp thông qua khớp đám mây điểm LiDAR)
  - 라이다점군정합의 수렴 속도를 높이다 (nâng cao tốc độ hội tụ của khớp đám mây điểm LiDAR)
- **사회적 관계·주제별 register:** Cảm biến viễn thám, thị giác 3D, phần mềm điều khiển xe tự lái.
- **예문:**
  - 차량 지붕에 장착된 센서는 초당 수십만 개의 펄스를 쏘아 얻은 라이다점군정합 결과를 통해 주변 지형을 즉각 형상화했다.
- **Dịch:**
  - Cảm biến gắn trên nóc xe thông qua kết quả khớp đám mây điểm LiDAR thu được từ hàng trăm nghìn xung mỗi giây đã lập tức tạo hình địa hình xung quanh.
- **어휘 연결:**
  - 유의어: `반복최근접점알고리즘` (thuật toán điểm gần nhất lặp ICP)
  - 관련어: `포인트클라우드정합` (khớp đám mây điểm point cloud registration)
- **영어 참고:** `LiDAR point cloud registration` — quá trình căn chỉnh và khớp nối các đám mây điểm LiDAR 3 chiều

---

### 특징점추출추적기

- **발음:** [특칭점추출추적기]
- **품사:** 명사
- **핵심 의미:** 카메라 영상에서 모서리나 질감처럼 구별이 쉬운 고유한 시각적 특징점을 찾아내고 프레임이 바뀔 때마다 이를 지속적으로 추적하는 소프트웨어 모듈.
- **베트남어 뜻:** Bộ trích xuất và theo dõi điểm đặc trưng (mô-đun phần mềm phát hiện và theo dõi các điểm mốc thị giác nổi bật qua các khung hình camera)
- **뉘앙스와 사용법:** Sử dụng các thuật toán như ORB, SIFT, FAST để duy trì mốc không gian; nếu mất dấu mốc này, hệ thống sẽ rơi vào tình trạng mất phương hướng (tracking loss).
- **재사용 가능한 콜로케이션·청크:**
  - 고속 특징점추출추적기 (bộ trích xuất và theo dõi điểm đặc trưng tốc độ cao)
  - 특징점추출추적기 모듈 (mô-đun bộ trích xuất và theo dõi điểm đặc trưng)
  - 강인한 특징점추출추적기 (bộ trích xuất và theo dõi điểm đặc trưng mạnh mẽ)
- **자주 쓰는 문형과 성분:**
  - 특징점추출추적기를(를) 활용하여 카메라 모션을 계산하다 (tính toán chuyển động camera bằng cách tận dụng bộ trích xuất và theo dõi điểm đặc trưng)
  - 특징점추출추적기가(이) 조명 변화에도 안정적으로 작동하다 (bộ trích xuất và theo dõi điểm đặc trưng hoạt động ổn định bất chấp thay đổi ánh sáng)
- **사회적 관계·주제별 register:** Thị giác máy tính, xử lý ảnh số, định vị hình ảnh tự động.
- **예문:**
  - 연구팀이 개발한 특징점추출추적기는 어두운 터널 환경에서도 벽면의 미세한 균열을 랜드마크로 포착하여 안정적으로 위치를 추적했다.
- **Dịch:**
  - Bộ trích xuất và theo dõi điểm đặc trưng do nhóm nghiên cứu phát triển ngay cả trong môi trường hầm tối vẫn bắt trọn các vết nứt nhỏ trên tường làm mốc mốc để theo dõi vị trí ổn định.
- **어휘 연결:**
  - 유의어: `코너검출알고리즘` (thuật toán phát hiện góc corner detection)
  - 관련어: `광학기술추적모듈` (mô-đun theo dõi kỹ thuật quang học)
- **영어 참고:** `feature extraction and tracker` — bộ phát hiện và theo dõi các điểm đặc trưng hình ảnh trong Visual SLAM

---

### 시각주행계오차누적

- **발음:** [시각주행계오차누적]
- **품사:** 명사
- **핵심 의미:** 연속된 카메라 영상 간의 상대 변위를 적분하여 이동 거리를 추정할 때 프레임마다 발생한 미세한 오차가 시간의 흐름에 따라 눈덩이처럼 쌓이는 현상.
- **베트남어 뜻:** Tích lũy sai số đo đạc hành trình thị giác (sự cộng dồn sai số vị trí theo thời gian do tích phân phép đo thị giác Visual Odometry)
- **뉘앙스와 사용법:** Bản chất tất yếu của phương pháp tính toán tương đối (dead reckoning); nếu không có cơ chế sửa sai toàn cục (loop closure), sai số sẽ phân kỳ khiến bản đồ bị bẻ cong.
- **재사용 가능한 콜로케이션·청크:**
  - 시각주행계오차누적 억제 (ức chế tích lũy sai số đo đạc hành trình thị giác)
  - 시각주행계오차누적 문제 (vấn đề tích lũy sai số đo đạc hành trình thị giác)
  - 시각주행계오차누적 보정 (hiệu chỉnh tích lũy sai số đo đạc hành trình thị giác)
- **자주 쓰는 문형과 성분:**
  - 시각주행계오차누적으로(으로) 인해 지도가 뒤틀리다 (bản đồ bị vặn vẹo do tích lũy sai số đo đạc hành trình thị giác)
  - 시각주행계오차누적을(를) 전역 최적화로 상쇄하다 (triệt tiêu tích lũy sai số đo đạc hành trình thị giác bằng tối ưu hóa toàn cục)
- **사회적 관계·주제별 register:** Động lực học định vị, cơ điện tử tử học, phân tích độ chính xác bản đồ số.
- **예문:**
  - 장거리 주행 시 피할 수 없는 시각주행계오차누적 현상을 해결하기 위해 관성 센서와의 융합 필터를 필수적으로 결합해야 한다.
- **Dịch:**
  - Để giải quyết hiện tượng tích lũy sai số đo đạc hành trình thị giác không thể tránh khỏi khi chạy đường dài, bắt buộc phải kết hợp bộ lọc dung hợp với cảm biến quán tính.
- **어휘 연결:**
  - 유의어: `드리프트현상` (hiện tượng trôi dạt drift)
  - 관련어: `누적변위오차` (sai số dịch chuyển lũy kế)
- **영어 참고:** `visual odometry error accumulation` — hiện tượng tích lũy sai số trôi dạt của hệ thống đo hành trình thị giác

---

### 루프폐쇄재인식

- **발음:** [루프폐쇄재인식]
- **품사:** 명사
- **핵심 의미:** 로봇이 이전에 방문했던 장소로 다시 돌아왔을 때 현재 센서 데이터를 과거 데이터와 대조하여 동일한 장소임을 스스로 알아차리는 판단 기법.
- **베트남어 뜻:** Nhận dạng lại đóng vòng lặp (khả năng rô-bốt nhận ra mình đã quay lại địa điểm từng đi qua để đóng kín vòng lặp)
- **뉘앙스와 사용법:** Thời khắc quyết định nhất trong SLAM; khi phát hiện vòng lặp, hệ thống sẽ thực hiện kéo phẳng và sửa chữa toàn bộ sai số tích lũy dọc tuyến đường.
- **재사용 가능한 콜로케이션·청크:**
  - 루프폐쇄재인식 성공률 (tỷ lệ thành công của nhận dạng lại đóng vòng lặp)
  - 루프폐쇄재인식 알고리즘 (thuật toán nhận dạng lại đóng vòng lặp)
  - 신속한 루프폐쇄재인식 (nhận dạng lại đóng vòng lặp nhanh chóng)
- **자주 쓰는 문형과 성분:**
  - 루프폐쇄재인식이(가) 성립되는 순간 누적 오차가 제거되다 (sai số tích lũy bị loại bỏ khoảnh khắc nhận dạng lại đóng vòng lặp được xác lập)
  - 루프폐쇄재인식을(를) 위해 이미지 유사도 데이터베이스를 검색하다 (tìm kiếm cơ sở dữ liệu tương đồng hình ảnh để phục vụ nhận dạng lại đóng vòng lặp)
- **사회적 관계·주제별 register:** Trí tuệ nhân tạo nhận thức không gian, xử lý dữ liệu địa lý, thiết kế thuật toán SLAM.
- **예문:**
  - 로봇이 출발 지점으로 복귀하며 루프폐쇄재인식에 성공하자, 왜곡되었던 3차원 빌딩 내부 지도가 원래 형상대로 반듯하게 정렬되었다.
- **Dịch:**
  - Khi rô-bốt quay lại điểm xuất phát và thực hiện thành công nhận dạng lại đóng vòng lặp, bản đồ 3D nội thất tòa nhà vốn bị méo mó đã được căn chỉnh ngay ngắn về đúng hình dạng gốc.
- **어휘 연결:**
  - 유의어: `장소인식기술` (công nghệ nhận dạng địa điểm place recognition)
  - 관련어: `루프결합최적화` (tối ưu hóa ghép vòng lặp loop closure optimization)
- **영어 참고:** `loop closure place re-recognition` — khả năng nhận diện lại địa điểm cũ để đóng kín vòng lặp quỹ đạo di chuyển

---

### 포즈그래프최적화

- **발음:** [포즈그래프최적화]
- **품사:** 명사
- **핵심 의미:** 로봇의 위치와 자세(Pose)를 노드로, 센서 측정값에 의한 상대 변위를 엣지로 구성한 그래프 모델에서 전역 오차를 최소화하도록 노드 위치를 재조정하는 기법.
- **베트남어 뜻:** Tối ưu hóa đồ thị tư thế (kỹ thuật tối ưu hóa phi tuyến điều chỉnh lại tọa độ và hướng của toàn bộ quỹ đạo di chuyển của rô-bốt)
- **뉘앙스와 사용법:** Thường dùng các thư viện như g2o hay GTSAM; giải bài toán bình phương tối thiểu phi tuyến trên không gian Lie manifold $SE(3)$.
- **재사용 가능한 콜로케이션·청크:**
  - 비선형 포즈그래프최적화 (tối ưu hóa đồ thị tư thế phi tuyến)
  - 포즈그래프최적화 엔진 (công cụ tối ưu hóa đồ thị tư thế)
  - 실시간 포즈그래프최적화 (tối ưu hóa đồ thị tư thế thời gian thực)
- **자주 쓰는 문형과 성분:**
  - 포즈그래프최적화를(를) 통해 주행 경로의 뒤틀림을 바로잡다 (nắn chỉnh sự vặn vẹo của lộ trình di chuyển nhờ tối ưu hóa đồ thị tư thế)
  - 포즈그래프최적화에 희소 행렬 연산 기법이 적용되다 (kỹ thuật toán ma trận thưa được áp dụng vào tối ưu hóa đồ thị tư thế)
- **사회적 관계·주제별 register:** Lý thuyết đồ thị ứng dụng, tối ưu hóa toán học, kiến trúc phần mềm robot tự hành.
- **예문:**
  - 루프가 닫히는 즉시 백엔드에서 포즈그래프최적화가 수행되어 수천 개 노드의 오차가 순식간에 최소화되었다.
- **Dịch:**
  - Ngay khi vòng lặp được đóng kín, quá trình tối ưu hóa đồ thị tư thế được thực thi ở phần phụ trợ (back-end), giúp sai số của hàng nghìn nút được giảm thiểu trong chớp mắt.
- **어휘 연결:**
  - 유의어: `희소최소제곱법` (phương pháp bình phương tối thiểu thưa thớt)
  - 관련어: `비선형그래프구조` (cấu trúc đồ thị phi tuyến)
- **영어 참고:** `pose graph optimization` — kỹ thuật tối ưu hóa các nút tư thế trên đồ thị để nắn chỉnh sai số quỹ đạo

---

### 점유격자지도생성

- **발음:** [저뮤격짜지도생성]
- **품사:** 명사
- **핵심 의미:** 주변 2차원 또는 3차원 공간을 일정한 크기의 바둑판 격자로 나누고 각 격자 셀이 장애물로 채워져 있을 확률을 베이즈 정리를 통해 계산해 지도를 만드는 기법.
- **베트남어 뜻:** Tạo bản đồ lưới chiếm dụng (kỹ thuật chia không gian thành các ô lưới và tính toán xác suất bị vật cản chiếm hữu)
- **뉘앙스와 사용법:** Khái niệm kinh điển của Moravec & Elfes; mỗi ô (cell) mang giá trị từ 0 (chắc chắn trống) đến 1 (chắc chắn có vật cản), phục vụ trực tiếp cho lập kế hoạch đường đi.
- **재사용 가능한 콜로케이션·청크:**
  - 이차원 점유격자지도생성 (tạo bản đồ lưới chiếm dụng 2 chiều)
  - 점유격자지도생성 알고리즘 (thuật toán tạo bản đồ lưới chiếm dụng)
  - 점유격자지도생성 해상도 (độ phân giải của việc tạo bản đồ lưới chiếm dụng)
- **자주 쓰는 문형과 성분:**
  - 점유격자지도생성을(를) 거쳐 로봇의 충돌 방지 경로를 생성하다 (tạo lộ trình chống va chạm cho rô-bốt thông qua tạo bản đồ lưới chiếm dụng)
  - 점유격자지도생성에 초음파 및 라이다 신호를 반영하다 (phản ánh tín hiệu siêu âm và LiDAR vào việc tạo bản đồ lưới chiếm dụng)
- **사회적 관계·주제별 register:** Quy hoạch đường đi (path planning), robot công nghiệp, xe tự hành trong nhà.
- **예문:**
  - 물류 로봇은 실시간 점유격자지도생성 기능을 바탕으로 이동 통로에 새로 놓인 상자들을 회피하여 안전하게 주행했다.
- **Dịch:**
  - Rô-bốt hậu cần dựa trên tính năng tạo bản đồ lưới chiếm dụng thời gian thực đã tránh các thùng hàng mới đặt trên lối đi để di chuyển an toàn.
- **어휘 연결:**
  - 유의어: `확률적지도모델` (mô hình bản đồ xác suất)
  - 관련어: `장애물셀점유확률` (xác suất ô lưới bị vật cản chiếm giữ)
- **영어 참고:** `occupancy grid mapping` — phương pháp tạo bản đồ lưới xác suất chiếm dụng phục vụ điều hướng rô-bốt

---

### 관성측정센서융합

- **발음:** [관성측쩡센서융합]
- **품사:** 명사
- **핵심 의미:** 가속도계와 자이로스코프로 구성된 관성측정장치(IMU)의 고주파 데이터와 카메라나 라이다의 저주파 기하학적 데이터를 결합하여 정확도를 높이는 기법.
- **베트남어 뜻:** Dung hợp cảm biến đo quán tính (kết hợp dữ liệu tốc độ cao từ cảm biến IMU với camera hoặc LiDAR để tăng độ chính xác định vị)
- **뉘앙스와 사용법:** IMU phản ứng cực nhanh trong các khúc cua gấp nhưng bị trôi dài hạn; camera/LiDAR chậm hơn nhưng chuẩn xác tuyệt đối; dung hợp chúng tạo nên hệ thống VIO/LIO tối ưu.
- **재사용 가능한 콜로케이션·청크:**
  - 밀결합 관성측정센서융합 (dung hợp cảm biến đo quán tính ghép nối chặt (tightly-coupled))
  - 관성측정센서융합 모듈 (mô-đun dung hợp cảm biến đo quán tính)
  - 실시간 관성측정센서융합 (dung hợp cảm biến đo quán tính thời gian thực)
- **자주 쓰는 문형과 성분:**
  - 관성측정센서융합을(를) 통해 빠른 회전 시의 시각 손실을 극복하다 (vượt qua mất dấu thị giác khi quay gấp nhờ dung hợp cảm biến đo quán tính)
  - 관성측정센서융합 필터에 칼만 필터를 적용하다 (áp dụng bộ lọc Kalman vào bộ lọc dung hợp cảm biến đo quán tính)
- **사회적 관계·주제별 register:** Hàng không vũ trụ, thiết bị bay không người lái (drone), robot di động tốc độ cao.
- **예문:**
  - 드론이 급격한 방향 전환을 할 때 카메라 영상이 흔들려도 관성측정센서융합 덕분에 자세 추정의 연속성을 잃지 않았다.
- **Dịch:**
  - Khi drone chuyển hướng đột ngột dù hình ảnh camera bị rung lắc, nhờ có dung hợp cảm biến đo quán tính mà nó không bị mất tính liên tục trong ước lượng tư thế.
- **어휘 연결:**
  - 유의어: `시각관성주행계` (đo hành trình thị giác quán tính VIO)
  - 관련어: `상호보완적센서결합` (kết hợp cảm biến bổ trợ tương hỗ)
- **영어 참고:** `inertial measurement sensor fusion` — kỹ thuật dung hợp cảm biến đo quán tính IMU với các cảm biến quang học

---

### 확장칼만필터추정

- **발음:** [확장칼만필터추정]
- **품사:** 명사
- **핵심 의미:** 비선형 시스템 모델을 테일러 1차 전개로 국소 선형화하여 시스템의 상태 변수와 불확실성(공분산)을 재귀적으로 추정하는 대표적인 확률론적 상태 추정 기법.
- **베트남어 뜻:** Ước lượng bộ lọc Kalman mở rộng (thuật toán lọc đệ quy tuyến tính hóa cục bộ để ước lượng trạng thái của hệ thống phi tuyến)
- **뉘앙스와 사용법:** Thuật toán trụ cột kinh điển (EKF-SLAM); tuy tốn chi phí tính toán bậc hai với số lượng mốc bản đồ ($O(N^2)$), nhưng vẫn cực kỳ phổ biến trong các bộ lọc kết hợp IMU.
- **재사용 가능한 콜로케이션·청크:**
  - 실시간 확장칼만필터추정 (ước lượng bộ lọc Kalman mở rộng thời gian thực)
  - 확장칼만필터추정 오차공분산 (hiệp phương sai sai số ước lượng bộ lọc Kalman mở rộng)
  - 확장칼만필터추정 상태벡터 (vector trạng thái ước lượng bộ lọc Kalman mở rộng)
- **자주 쓰는 문형과 성분:**
  - 확장칼만필터추정을(를) 통해 로봇의 6자유도 자세를 계산하다 (tính toán tư thế 6 bậc tự do của rô-bốt thông qua ước lượng bộ lọc Kalman mở rộng)
  - 확장칼만필터추정의 야코비 행렬을 갱신하다 (cập nhật ma trận Jacobian của ước lượng bộ lọc Kalman mở rộng)
- **사회적 관계·주제별 register:** Điều khiển học tối ưu, lý thuyết ước lượng thống kê, phần mềm nhúng định vị.
- **예문:**
  - 센서 노이즈가 심한 환경에서도 확장칼만필터추정 알고리즘은 관측값과 예측값을 조화롭게 결합하여 안정된 궤적을 산출했다.
- **Dịch:**
  - Ngay cả trong môi trường có tạp âm cảm biến nghiêm trọng, thuật toán ước lượng bộ lọc Kalman mở rộng vẫn kết hợp hài hòa giá trị quan sát và giá trị dự đoán để xuất ra quỹ đạo ổn định.
- **어휘 연결:**
  - 유의어: `상태공간방정식` (phương trình không gian trạng thái)
  - 관련어: `공분산행렬갱신` (cập nhật ma trận hiệp phương sai)
- **영어 참고:** `extended Kalman filter estimation` — ước lượng trạng thái hệ thống phi tuyến bằng bộ lọc Kalman mở rộng EKF

---

### 비선형최소제곱최적화

- **발음:** [비선형최소제곱최적화]
- **품사:** 명사
- **핵심 의미:** 센서 관측값과 예측값 사이의 비선형 잔차 제곱합을 최소화하도록 레벤버그-마쿼트나 가우스-뉴턴 알고리즘을 반복 수행하여 최적의 해를 찾는 수치 연산.
- **베트남어 뜻:** Tối ưu hóa bình phương tối thiểu phi tuyến (phương pháp số lặp giải bài toán cực tiểu hóa tổng bình phương phần dư phi tuyến)
- **뉘앙스와 사용법:** Phương pháp cốt lõi của Bundle Adjustment và Graph-SLAM thế hệ mới, thay thế cho cách tiếp cận dựa trên bộ lọc lọc lọc tuyến tính.
- **재사용 가능한 콜로케이션·청크:**
  - 반복 비선형최소제곱최적화 (tối ưu hóa bình phương tối thiểu phi tuyến lặp)
  - 비선형최소제곱최적화 수치해법 (phương pháp giải số tối ưu hóa bình phương tối thiểu phi tuyến)
  - 비선형최소제곱최적화 수렴조건 (điều kiện hội tụ tối ưu hóa bình phương tối thiểu phi tuyến)
- **자주 쓰는 문형과 성분:**
  - 비선형최소제곱최적화를(를) 적용하여 카메라 외부 파라미터를 보정하다 (áp dụng tối ưu hóa bình phương tối thiểu phi tuyến để hiệu chỉnh tham số ngoài camera)
  - 비선형최소제곱최적화 과정에서 이상치를 배제하다 (loại trừ điểm dị biệt ngoại lai trong quá trình tối ưu hóa bình phương tối thiểu phi tuyến)
- **사회적 관계·주제별 register:** Toán học tính toán ứng dụng, thị giác đa góc nhìn (multi-view geometry), lập trình tối ưu hóa.
- **예문:**
  - 수백 장의 연속 사진에서 추출한 랜드마크 위치는 비선형최소제곱최적화 과정을 거치며 정밀한 3차원 공간 좌표로 수렴했다.
- **Dịch:**
  - Tọa độ mốc trích xuất từ hàng trăm bức ảnh liên tiếp trải qua quá trình tối ưu hóa bình phương tối thiểu phi tuyến đã hội tụ thành tọa độ không gian 3 chiều chuẩn xác.
- **어휘 연결:**
  - 유의어: `가우스뉴턴기법` (phương pháp Gauss-Newton)
  - 관련어: `레벤버그마쿼트해법` (giải pháp Levenberg-Marquardt)
- **영어 참고:** `non-linear least squares optimization` — phương pháp tối ưu hóa bình phương tối thiểu cho các hệ phương trình phi tuyến

---

### 광학흐름속도추정

- **발음:** [광학흐름속또추정]
- **품사:** 명사
- **핵심 의미:** 연속된 영상 프레임 사이에서 픽셀 밝기 패턴의 겉보기 움직임 벡터(Optical Flow)를 분석하여 카메라 또는 주변 물체의 상대 이동 속도를 계산하는 기법.
- **베트남어 뜻:** Ước lượng vận tốc dòng quang học (kỹ thuật tính toán vận tốc di chuyển tương đối dựa trên vector chuyển động của các điểm ảnh)
- **뉘앙스와 사용법:** Ứng dụng thuật toán Lucas-Kanade; hoạt động cực nhanh trên chip nhúng của drone giúp giữ thăng bằng và treo lơ lửng (hovering) mà không cần GPS.
- **재사용 가능한 콜로케이션·청크:**
  - 고속 광학흐름속도추정 (ước lượng vận tốc dòng quang học tốc độ cao)
  - 광학흐름속도추정 센서 (cảm biến ước lượng vận tốc dòng quang học)
  - 광학흐름속도추정 벡터장 (trường vector ước lượng vận tốc dòng quang học)
- **자주 쓰는 문형과 성분:**
  - 광학흐름속도추정을(를) 통해 지면과의 상대 속도를 측정하다 (đo vận tốc tương đối so với mặt đất thông qua ước lượng vận tốc dòng quang học)
  - 광학흐름속도추정이(가) 텍스처가 없는 단색 벽면에서는 저하되다 (ước lượng vận tốc dòng quang học bị suy giảm trên tường đơn sắc không có hoa văn)
- **사회적 관계·주제별 register:** Thị giác robot nhúng, điều khiển tự động máy bay không người lái, xử lý luồng video.
- **예문:**
  - 실내 정밀 비행 드론은 하향 카메라를 이용한 광학흐름속도추정을 통해 바람에 밀리지 않고 제자리에 안정적으로 정지 비행했다.
- **Dịch:**
  - Drone bay chuẩn xác trong nhà thông qua ước lượng vận tốc dòng quang học sử dụng camera hướng xuống đã bay dừng tại chỗ ổn định mà không bị gió thổi xô lệch.
- **어휘 연결:**
  - 유의어: `루카스카나데알고리즘` (thuật toán Lucas-Kanade)
  - 관련어: `픽셀변위벡터` (vector dịch chuyển điểm ảnh)
- **영어 참고:** `optical flow velocity estimation` — ước lượng vận tốc di chuyển dựa trên dòng quang học của chuỗi hình ảnh

---

### 이동로봇자기위치인식

- **발음:** [이동로볻자기위치인식]
- **품사:** 명사
- **핵심 의미:** 주행 중인 로봇이 외부 센서와 탑재 센서 데이터를 융합하여 기구축된 지도 좌표계 내에서 자신의 현재 위치와 방위각을 정확히 알아내는 과정.
- **베트남어 뜻:** Nhận thức vị trí bản thân rô-bốt di động (quá trình rô-bốt tự xác định tọa độ không gian và góc hướng của mình trên bản đồ)
- **뉘앙스와 사용법:** Bao gồm cả bài toán khởi động lạnh khi không biết mình đang ở đâu (kidnapped robot problem) và bài toán theo dõi vị trí liên tục trong khi di chuyển.
- **재사용 가능한 콜로케이션·청크:**
  - 정밀 이동로봇자기위치인식 (nhận thức vị trí bản thân rô-bốt di động chuẩn xác)
  - 이동로봇자기위치인식 모듈 (mô-đun nhận thức vị trí bản thân rô-bốt di động)
  - 이동로봇자기위치인식 신뢰도 (độ tin cậy của nhận thức vị trí bản thân rô-bốt di động)
- **자주 쓰는 문형과 성분:**
  - 이동로봇자기위치인식을(를) 몬테카를로 국소화 기법으로 해결하다 (giải quyết nhận thức vị trí bản thân rô-bốt di động bằng kỹ thuật định vị Monte Carlo)
  - 이동로봇자기위치인식의 정확도가 센티미터 수준에 도달하다 (độ chính xác của nhận thức vị trí bản thân rô-bốt di động đạt mức centimet)
- **사회적 관계·주제별 register:** Hệ thống tự hành công nghiệp, rô-bốt dịch vụ thương mại, khoa học điều khiển định vị.
- **예문:**
  - 병원 물류 로봇은 복도의 비상 대피 표지판과 천장 조명을 참조하여 이동로봇자기위치인식 오차를 2센티미터 이내로 제어했다.
- **Dịch:**
  - Rô-bốt hậu cần bệnh viện tham chiếu biển báo thoát hiểm hành lang và đèn trần đã kiểm soát sai số nhận thức vị trí bản thân rô-bốt di động dưới 2 cm.
- **어휘 연결:**
  - 유의어: `몬테카를로위치추정` (ước lượng vị trí Monte Carlo MCL)
  - 관련어: `좌표계정합` (khớp nối hệ tọa độ coordinate alignment)
- **영어 참고:** `mobile robot self-localization` — khả năng tự định vị vị trí và hướng của rô-bốt di động trong không gian bản đồ

---

### 동적물체제외필터링

- **발음:** [동정물체제외필터링]
- **품사:** 명사
- **핵심 의미:** 지도 작성 시 움직이는 보행자나 다른 주행 차량처럼 정적이지 않은 일시적 장애물을 데이터에서 식별하여 걸러내는 전처리 기법.
- **베트남어 뜻:** Lọc loại trừ vật thể động (kỹ thuật lọc bỏ các đối tượng chuyển động như người đi bộ hoặc xe cộ khỏi dữ liệu lập bản đồ tĩnh)
- **뉘앙스와 사용법:** Cực kỳ quan trọng để tránh tạo ra các vết ma (ghost tracks) kéo dài trên bản đồ khiến rô-bốt tưởng nhầm là có tường vĩnh cửu.
- **재사용 가능한 콜로케이션·청크:**
  - 실시간 동적물체제외필터링 (lọc loại trừ vật thể động thời gian thực)
  - 동적물체제외필터링 알고리즘 (thuật toán lọc loại trừ vật thể động)
  - 동적물체제외필터링 정확도 (độ chính xác lọc loại trừ vật thể động)
- **자주 쓰는 문형과 성분:**
  - 동적물체제외필터링을(를) 통해 정적 환경 지도만을 보존하다 (chỉ lưu giữ bản đồ môi trường tĩnh nhờ lọc loại trừ vật thể động)
  - 동적물체제외필터링이(가) 혼잡한 쇼핑몰 주행에 필수적이다 (lọc loại trừ vật thể động là thiết yếu khi di chuyển trong trung tâm mua sắm đông đúc)
- **사회적 관계·주제별 register:** Lập bản đồ 3D độ nét cao (HD Map), thị giác máy tính động, an toàn tự hành.
- **예문:**
  - 도심 횡단보도를 지나갈 때 보행자들의 움직임은 동적물체제외필터링 루틴에 의해 깔끔히 제거되어 정적 도로 지도만 생성되었다.
- **Dịch:**
  - Khi đi qua vạch sang đường đô thị, chuyển động của người đi bộ đã được chu trình lọc loại trừ vật thể động loại bỏ sạch sẽ, chỉ tạo ra bản đồ đường tĩnh.
- **어휘 연결:**
  - 유의어: `정적지도복원` (phục hồi bản đồ tĩnh static mapping)
  - 관련어: `유령궤적제거` (loại bỏ vệt ma ghost trace removal)
- **영어 참고:** `dynamic object removal filtering` — kỹ thuật lọc loại trừ các đối tượng chuyển động để tạo bản đồ tĩnh chuẩn xác

---

### 변위오차수렴속도

- **발음:** [변위오차수렴속또]
- **품사:** 명사
- **핵심 의미:** 최적화 알고리즘이 로봇의 실제 위치와 계산된 추정 위치 사이의 차이(오차)를 허용 한계치 이내로 줄여나가는 계산상의 속도.
- **베트남어 뜻:** Tốc độ hội tụ sai số dịch chuyển (tốc độ mà thuật toán số kéo giảm sai số giữa vị trí thực và vị trí ước lượng về ngưỡng cho phép)
- **뉘앙스와 사용법:** Quyết định xem rô-bốt có thể chạy ở tốc độ cao được hay không; nếu hội tụ quá chậm, rô-bốt sẽ phải dừng lại chờ máy tính toán xong.
- **재사용 가능한 콜로케이션·청크:**
  - 빠른 변위오차수렴속도 (tốc độ hội tụ sai số dịch chuyển nhanh chóng)
  - 변위오차수렴속도 개선 (cải thiện tốc độ hội tụ sai số dịch chuyển)
  - 변위오차수렴속도 측정 (đo lường tốc độ hội tụ sai số dịch chuyển)
- **자주 쓰는 문형과 성분:**
  - 변위오차수렴속도를(를) 가속화하여 실시간 제어를 구현하다 (hiện thực hóa điều khiển thời gian thực bằng cách gia tốc tốc độ hội tụ sai số dịch chuyển)
  - 변위오차수렴속도가(이) 초기 추정값 품질에 좌우되다 (tốc độ hội tụ sai số dịch chuyển phụ thuộc vào chất lượng giá trị ước lượng ban đầu)
- **사회적 관계·주제별 register:** Toán học tối ưu số, thuật toán điều khiển thời gian thực, đánh giá hiệu năng robot.
- **예문:**
  - 새로운 희소 행렬 해법을 도입한 덕분에 변위오차수렴속도가 세 배 빨라져 고속 자율주행 차량에도 즉각적인 궤적 수정이 가능해졌다.
- **Dịch:**
  - Nhờ áp dụng phương pháp giải ma trận thưa mới, tốc độ hội tụ sai số dịch chuyển đã nhanh hơn gấp ba lần, cho phép chỉnh sửa quỹ đạo tức thời ngay cả trên xe tự lái tốc độ cao.
- **어휘 연결:**
  - 유의어: `최적화수렴시간` (thời gian hội tụ tối ưu hóa)
  - 관련어: `연산복잡도단축` (rút ngắn độ phức tạp tính toán)
- **영어 참고:** `displacement error convergence rate` — tốc độ giảm thiểu và hội tụ sai số khoảng cách của thuật toán tối ưu định vị

---

### 밀집삼차원지도복원

- **발음:** [밀찝삼차원지도보권]
- **품사:** 명사
- **핵심 의미:** 단순한 몇 개의 특징점 수준을 넘어 공간 내 모든 표면의 점군, 메시(Mesh), 색상 정보까지 빽빽하게 3차원 디지털 모델로 재구성하는 작업.
- **베트남어 뜻:** Phục hồi bản đồ ba chiều đậm đặc (quá trình tái tạo mô hình không gian 3D dày đặc với đầy đủ lưới bề mặt và thông tin màu sắc)
- **뉘앙스와 사용법:** Khác với bản đồ thưa (sparse map) chỉ đủ cho robot định vị, bản đồ đậm đặc (dense reconstruction) cần thiết cho việc tương tác vật lý như gắp thả vật thể.
- **재사용 가능한 콜로케이션·청크:**
  - 고해상도 밀집삼차원지도복원 (phục hồi bản đồ ba chiều đậm đặc độ phân giải cao)
  - 밀집삼차원지도복원 기법 (kỹ thuật phục hồi bản đồ ba chiều đậm đặc)
  - 실시간 밀집삼차원지도복원 (phục hồi bản đồ ba chiều đậm đặc thời gian thực)
- **자주 쓰는 문형과 성분:**
  - 밀집삼차원지도복원을(를) 통해 정밀 지형 모델을 완성하다 (hoàn thành mô hình địa hình chuẩn xác thông qua phục hồi bản đồ ba chiều đậm đặc)
  - 밀집삼차원지도복원에 대규모 그래픽스 가속기가 활용되다 (bộ tăng tốc đồ họa quy mô lớn được tận dụng cho phục hồi bản đồ ba chiều đậm đặc)
- **사회적 관계·주제별 register:** Đồ họa máy tính, trắc địa số, kỹ thuật số sinh đôi (digital twin).
- **예문:**
  - 탐사 로봇은 문화재 내부를 이동하며 1밀리미터 해상도의 밀집삼차원지도복원 과업을 완수하여 디지털 보존 자료를 구축했다.
- **Dịch:**
  - Rô-bốt thám hiểm di chuyển bên trong di sản văn hóa đã hoàn thành nhiệm vụ phục hồi bản đồ ba chiều đậm đặc với độ phân giải 1 mm, xây dựng tư liệu bảo tồn kỹ thuật số.
- **어휘 연결:**
  - 유의어: `서피스메시생성` (tạo lưới bề mặt surface mesh)
  - 관련어: `포인트클라우드밀집화` (làm đậm đặc đám mây điểm point cloud densification)
- **영어 참고:** `dense 3D map reconstruction` — quá trình tái tạo bản đồ số 3 chiều chi tiết và dày đặc

---

## 단원 종합 읽기 자료: 로봇공학 및 동시적 위치추정 및 지도작성 SLAM과 센서 융합의 언어
<!-- passage_word_count: 105 Korean eojeol; target_set: 동시적위치지도작성, 라이다점군정합, 특징점추출추적기, 시각주행계오차누적, 루프폐쇄재인식, 포즈그래프최적화, 점유격자지도생성, 관성측정센서융합, 확장칼만필터추정, 비선형최소제곱최적화, 광학흐름속도추정, 이동로봇자기위치인식, 동적물체제외필터링, 변위오차수렴속도, 밀집삼차원지도복원 -->
첨단 자율주행 연구진은 미지의 가혹한 실내외 환경에서 안정적인 동시적위치지도작성 정밀도를 획기적으로 높이고자 고해상도 라이다점군정합 정합화 알고리즘을 새롭게 개발했다. 실시간 시각 특징점추출추적기 모듈과 고속 광학흐름속도추정 계산 루틴을 유기적으로 연동하고 고도화된 관성측정센서융합 필터링을 거쳐 주행 중 빈번히 발생하는 시각주행계오차누적 현상을 매우 효과적으로 억제했다. 비선형 확장칼만필터추정 기법과 고차원 비선형최소제곱최적화 수치해법을 결합하여 자율 로봇의 변위오차수렴속도 제어 성능을 비약적으로 대폭 향상시켰다. 이전에 탐색했던 주행 궤적과의 루프폐쇄재인식 판정에 성공할 때마다 포즈그래프최적화 연산을 즉각적으로 가동하고 주변 동적물체제외필터링 과정을 완벽히 거쳐 노이즈 없는 점유격자지도생성 작업을 마쳤다. 최종적으로 극한 환경 속에서도 이동로봇자기위치인식 정확도를 센티미터 오차 범위 내로 엄격히 보장하면서 현장 지형의 밀집삼차원지도복원 과업을 완벽하게 완수하여 무인 탐사 플랫폼의 자율 주행 안정성과 신뢰성을 확실히 입증했다.

**베트남어 번역:**
Đội ngũ nghiên cứu lái tự động tiên tiến nhằm nâng cao mang tính bước ngoặt độ chính xác của định vị và lập bản đồ đồng thời mang tính ổn định trong môi trường trong nhà và ngoài trời khắc nghiệt chưa biết đã phát triển mới thuật toán khớp đám mây điểm LiDAR độ phân giải cao. Bằng việc liên kết hữu cơ mô-đun bộ trích xuất theo dõi điểm đặc trưng thị giác thời gian thực và chu trình tính toán ước lượng vận tốc dòng quang học tốc độ cao kết hợp lọc dung hợp cảm biến đo quán tính nâng cao, họ đã ức chế hết sức hiệu quả hiện tượng tích lũy sai số đo đạc hành trình thị giác thường xuyên phát sinh trong lúc chạy. Việc kết hợp kỹ thuật ước lượng bộ lọc Kalman mở rộng phi tuyến cùng phương pháp giải số tối ưu hóa bình phương tối thiểu phi tuyến bậc cao đã cải thiện vượt bậc đáng kể hiệu năng kiểm soát tốc độ hội tụ sai số dịch chuyển của rô-bốt tự hành. Mỗi khi phán đoán thành công nhận dạng lại đóng vòng lặp với quỹ đạo di chuyển đã thám hiểm trước đó, phép tính tối ưu hóa đồ thị tư thế được vận hành tức thì và trải qua trọn vẹn quá trình lọc loại trừ vật thể động xung quanh để kết thúc thao tác tạo bản đồ lưới chiếm dụng không có nhiễu. Cuối cùng, ngay cả trong môi trường cực hạn, việc đảm bảo nghiêm ngặt độ chuẩn xác nhận thức vị trí bản thân rô-bốt di động trong phạm vi sai số centimet đồng thời hoàn thành hoàn hảo nhiệm vụ phục hồi bản đồ ba chiều đậm đặc của địa hình hiện trường đã chứng minh chắc chắn tính ổn định và độ tin cậy tự hành của nền tảng thám hiểm không người lái.
