<!-- source_policy: original explanations, examples, and passage; autonomous driving and sensor fusion terminology cross-checked conceptually, not copied -->

# 다중 센서 융합과 실시간 자율주행 인지·판단

자율주행 기술은 도로 위의 수많은 변수를 실시간으로 감지하고 스스로 주행 경로를 결정하여 안전하게 이동하는 첨단 융합 공학의 결정체이다. 차량은 카메라, 라이다, 레이더 등 이종 센서의 데이터를 결합하여 주변 환경을 입체적으로 인지하고, 고정밀 지도와 정밀 측위 기술을 바탕으로 센티미터 단위의 정확한 위치를 확보한다. 인공지능 기반의 판단 알고리즘과 전자식 조향·제동 시스템, 그리고 통신 인프라와 결합된 엣지 컴퓨팅은 예기치 못한 돌발 상황에서도 승객과 보행자의 안전을 지켜내는 핵심 축을 이룬다.

<!-- lexical_basis: advanced_native; register: autonomous driving engineering and sensor integration; source_lane: news_formal; context: advanced-autonomous-driving-and-sensor-fusion/news_formal -->
### 센서퓨전

**품사:** 명사

**핵심 의미:** 카메라, 라이다(LiDAR), 레이더(RADAR), 초음파 센서 등 물리적 원리와 측정 특성이 서로 다른 다수의 센서로부터 획득한 데이터를 소프트웨어 알고리즘으로 결합하여, 단일 센서의 오차와 취약점을 상호 보완하고 신뢰도 높은 통합 환경 정보를 도출하는 기술이다.

**베트남어 뜻:** hợp nhất cảm biến, tích hợp đa cảm biến; công nghệ đồng bộ và kết hợp dữ liệu từ nhiều loại cảm biến khác nhau (camera, lidar, radar, cảm biến siêu âm) để bù trừ điểm yếu của từng thiết bị đơn lẻ, từ đó tạo ra bức tranh môi trường giao thông xung quanh xe chính xác và đáng tin cậy nhất.

**뉘앙스와 사용법:** `센서퓨전` (Sensor Fusion) là nền tảng cốt lõi của xe tự hành Cấp 3 trở lên. Mỗi loại cảm biến đều có giới hạn vật lý riêng: camera cung cấp màu sắc và ngữ nghĩa biển báo phong phú nhưng bị lóa khi ngược sáng hoặc trời tối; radar đo chính xác cự ly và vận tốc tương đối bất chấp mưa gió nhưng độ phân giải góc rất thấp; lidar tạo đám mây điểm 3D (포인트 클라우드) cực kỳ chuẩn xác về hình khối nhưng giá thành cao và suy hao trong mưa lớn. `센서퓨전` giải bài toán này bằng cách kết hợp dữ liệu ở cấp độ thô (raw data fusion — 저수준 융합) hoặc cấp độ đối tượng (object-level fusion — 고수준 융합) thông qua các bộ lọc tối ưu (như 칼만 필터 — bộ lọc Kalman) và mạng nơ-ron học sâu, giúp xe không bị "mù" khi một cảm biến gặp sự cố.

**재사용 가능한 콜로케이션·청크:** `센서퓨전 기술` (công nghệ hợp nhất cảm biến), `센서퓨전을 적용하다` (áp dụng hợp nhất cảm biến), `다중 센서퓨전 알고리즘` (thuật toán hợp nhất đa cảm biến), `실시간 센서퓨전 처리` (xử lý hợp nhất cảm biến thời gian thực).

**자주 쓰는 문형과 성분:** `자율주행 시스템이 카메라와 레이더 데이터를 센서퓨전으로 통합하다` (Hệ thống tự hành tích hợp dữ liệu camera và radar thông qua hợp nhất cảm biến); `센서퓨전을 통해 장애물 인지 신뢰도를 극대화하다` (Tối đa hóa độ tin cậy nhận thức chướng ngại vật nhờ hợp nhất cảm biến).

**사회적 관계·주제별 register:** Báo cáo công nghệ xe tự hành, hội thảo khoa học trí tuệ nhân tạo và tiêu chuẩn kỹ thuật an toàn phương tiện thông minh (news_formal).

**예문:** 자율주행 차량은 카메라의 영상 분석 정보와 레이더의 거리 측정값을 센서퓨전으로 결합하여 야간에도 보행자를 정확히 식별했다.

**Dịch:** Xe tự hành đã kết hợp thông tin phân tích hình ảnh từ camera với giá trị đo khoảng cách của radar bằng công nghệ hợp nhất cảm biến để nhận diện chính xác người đi bộ ngay trong đêm tối.

**어휘 연결:** `센서퓨전` là quá trình tổng hợp thông tin từ nhiều nguồn cảm biến bổ sung cho nhau; đối lập với `단일센서 감지` (nhận thức chỉ dựa vào một loại cảm biến đơn lẻ, rất dễ gặp điểm mù kỹ thuật); kết nối trực tiếp với `객체인식알고리즘` (thuật toán phân loại đối tượng sau khi dữ liệu đã được gộp chung).

**영어 참고:** *sensor fusion* — quá trình tổng hợp dữ liệu từ nhiều cảm biến không đồng nhất (heterogeneous sensors) nhằm loại bỏ sự không chắc chắn và tái lập môi trường vận hành hoàn chỉnh.

---

<!-- lexical_basis: advanced_native; register: precision localization and spatial mapping; source_lane: news_formal; context: advanced-autonomous-driving-and-sensor-fusion/news_formal -->
### 라이다측위

**품사:** 명사

**핵심 의미:** 차량에 장착된 라이다(LiDAR) 센서가 방출한 레이저 펄스가 반사되어 돌아오는 시간으로 측정한 실시간 3차원 점군(Point Cloud) 데이터와 사전에 정밀 구축된 고정밀 지도의 특징점을 비교·대조하여, 차량의 정확한 위치와 방향 각도를 센티미터(cm) 오차 범위 내에서 계산해 내는 위치 결정 기술이다.

**베트남어 뜻:** định vị bằng LiDAR, xác định vị trí bằng cảm biến quét laser; phương pháp tính toán tọa độ và góc hướng di chuyển của xe tự hành với độ chính xác tới từng centimet bằng cách so khớp đám mây điểm 3D thu được từ chùm tia laser với bản đồ số độ nét cao đã dựng sẵn.

**뉘앙스와 사용법:** `라이다측위` (LiDAR Localization) giải quyết điểm yếu chết người của định vị vệ tinh GPS/GNSS. Trong các hẻm vực đô thị cao tầng (도심 빌딩숲), hầm đường bộ (터널), cầu vượt nhiều tầng hoặc bãi đỗ xe ngầm, sóng GPS thường bị chặn hoàn toàn hoặc bị phản xạ nhiều đường (다중 경로 오차 — multipath error) gây sai số lên tới cả chục mét. `라이다측위` sử dụng thuật toán so khớp quét (스캔 매칭 — scan matching như ICP, NDT) đối chiếu các điểm đặc trưng xung quanh như mép vỉa hè, biển báo, cột đèn, vách tường với `고정밀지도` để xe luôn biết mình đang ở chính xác phân làn nào.

**재사용 가능한 콜로케이션·청크:** `라이다측위 기반 자율주행` (lái tự động dựa trên định vị LiDAR), `라이다측위 오차를 보정하다` (hiệu chỉnh sai số định vị LiDAR), `정밀 라이다측위 기술` (công nghệ định vị LiDAR độ chính xác cao), `포인트 클라우드 라이다측위` (định vị LiDAR dựa trên đám mây điểm).

**자주 쓰는 문형과 성분:** `자율주행차가 라이다측위로 자신의 차로 위치를 정확히 파악하다` (Xe tự hành nắm bắt chuẩn xác vị trí làn đường của mình bằng định vị LiDAR); `위성 신호가 끊긴 터널 안에서도 라이다측위가 안정적으로 작동하다` (Ngay cả trong đường hầm mất tín hiệu vệ tinh, định vị LiDAR vẫn vận hành ổn định).

**사회적 관계·주제별 register:** Kỹ thuật điều khiển robot di động, phần mềm định vị tự hành và tài liệu kỹ thuật xe thông minh (news_formal).

**예문:** 고층 빌딩 사이에서 위성항법 신호가 굴절되자 제어 컴퓨터는 라이다측위 알고리즘을 가동해 차량의 차로 내 위치를 센티미터 단위로 바로잡았다.

**Dịch:** Khi tín hiệu định vị vệ tinh bị khúc xạ giữa các tòa nhà cao tầng, máy tính điều khiển đã kích hoạt thuật toán định vị LiDAR để hiệu chỉnh vị trí của xe trong làn đường chính xác đến từng centimet.

**어휘 연결:** `라이다측위`: phương pháp định vị dựa trên đối chiếu hình khối laser 3D với bản đồ; phân biệt với `위성항법측위` (GNSS/GPS — định vị qua sóng vệ tinh dễ bị che khuất) và `비전측위` (Visual SLAM/Odometry — định vị qua camera quang học dễ bị ảnh hưởng bởi ánh sáng).

**영어 참고:** *LiDAR-based localization / LiDAR SLAM* — phương pháp xác định vị trí và tư thế của phương tiện tự hành trong không gian 3D thông qua việc so khớp dữ liệu đám mây điểm quét laser với bản đồ chuẩn.

---

<!-- lexical_basis: advanced_native; register: digital road infrastructure and navigation systems; source_lane: news_formal; context: advanced-autonomous-driving-and-sensor-fusion/news_formal -->
### 고정밀지도

**품사:** 명사

**핵심 의미:** 차선 경계선, 정지선, 신호등, 도로 표지판, 연석, 중앙분리대, 노면 표시 등 도로 위의 모든 물리적 형상과 교통 규칙 의미 정보를 3차원 좌표계상에 오차 10~20cm 내외의 극도로 정밀한 수준으로 구축한 디지털 입체 지도이다.

**베트남어 뜻:** bản đồ độ nét cao, bản đồ HD (HD Map); hệ thống bản đồ số không gian 3 chiều có độ chuẩn xác tới từng decimet (10–20 cm), chứa toàn bộ thông tin chi tiết về từng làn đường, vạch dừng, biển báo, đèn tín hiệu và độ dốc mặt đường dành riêng cho xe tự hành.

**뉘앙스와 사용법:** `고정밀지도` (HD Map — High-Definition Map) được xem là "cảm biến ảo vô hạn" (가상 센서) của xe tự hành. Bản đồ điều hướng thông thường (일반 내비게이션 지도) chỉ dẫn đường ở mức tuyến lộ trình chung với sai số vài mét. Ngược lại, HD Map biết chính xác từng ranh giới làn đường, bán kính cong của khúc cua phía trước 300m, vị trí chính xác của từng cột đèn giao thông. Nhờ đó, ngay cả khi camera bị xe tải phía trước che khuất hoặc tuyết phủ kín mặt đường làm mờ vạch sơn, xe vẫn "nhìn thấy" cấu trúc hình học của làn đường để duy trì quỹ đạo an toàn.

**재사용 가능한 콜로케이션·청크:** `고정밀지도를 구축하다` (xây dựng bản đồ độ nét cao), `고정밀지도 데이터베이스` (cơ sở dữ liệu bản đồ HD), `고정밀지도와 센서 데이터를 매칭하다` (khớp dữ liệu cảm biến với bản đồ độ nét cao), `차선 단위 고정밀지도` (bản đồ độ nét cao chi tiết tới từng làn xe).

**자주 쓰는 문형과 성분:** `자율주행 시스템이 고정밀지도를 바탕으로 안전 경로를 생성하다` (Hệ thống tự hành dựa trên bản đồ độ nét cao để tạo ra lộ trình an toàn); `국토교통부가 전국 주요 도로의 고정밀지도를 배포하다` (Bộ Địa chính và Giao thông phân phối bản đồ độ nét cao của các tuyến đường trọng điểm).

**사회적 관계·주제별 register:** Chiến lược hạ tầng giao thông thông minh quốc gia, quy hoạch đô thị số và tiêu chuẩn xe tự hành Cấp 3–4 (news_formal).

**예문:** 폭설로 도로의 차선이 하얗게 덮여 보이지 않았지만 차량은 고정밀지도에 기록된 도로 형상을 참조하여 차로 한가운데를 안전하게 유지했다.

**Dịch:** Dù tuyết rơi dày đặc che phủ trắng xóa khiến vạch kẻ đường biến mất, chiếc xe vẫn duy trì vị trí chính giữa làn đường an toàn nhờ tham chiếu hình thái đường sá đã được ghi nhận trong bản đồ độ nét cao.

**어휘 연결:** `고정밀지도` (HD Map): bản đồ số 3D độ chính xác centimet phục vụ hệ thống máy tính điều khiển xe; đối lập với `표준 전자지도` (bản đồ định vị GPS thông thường cho người lái xe nhìn); là đầu vào song hành không thể tách rời của `라이다측위` và `경로계획`.

**영어 참고:** *High-Definition Map (HD Map)* — bản đồ số 3D độ phân giải cực cao chứa đầy đủ dữ liệu hình học và ngữ nghĩa làn đường dành riêng cho phương tiện tự hành.

---

<!-- lexical_basis: advanced_native; register: computer vision and deep learning perception; source_lane: news_formal; context: advanced-autonomous-driving-and-sensor-fusion/news_formal -->
### 객체인식알고리즘

**품사:** 명사

**핵심 의미:** 카메라 영상, 라이다 포인트 클라우드, 레이더 신호 등 입력 센서 데이터로부터 보행자, 선행 차량, 이륜차, 도로 시설물, 낙하물 등 주변 객체의 존재 여부, 위치 좌표, 3차원 경계 상자(Bounding Box) 및 이동 속도를 심층 신경망을 통해 실시간으로 검출하고 분류하는 컴퓨터 비전 프로그램이다.

**베트남어 뜻:** thuật toán nhận dạng đối tượng, thuật toán phát hiện vật thể; thuật toán thị giác máy tính và học sâu (deep learning) chuyên phân tích dữ liệu cảm biến để nhận biết, phân loại và xác định kích thước, tọa độ 3D của người đi bộ, ô tô, xe máy, biển báo hay chướng ngại vật rơi trên đường trong thời gian thực.

**뉘앙스와 사용법:** `객체인식알고리즘` (Object Detection Algorithm) đóng vai trò là "đôi mắt thông minh" của trí tuệ nhân tạo. Nó không chỉ đơn thuần trả lời câu hỏi "phía trước có vật cản hay không", mà phải giải quyết đồng thời ba bài toán phức tạp trong vài mili-giây: Phân loại đối tượng (classification — đây là người lớn, trẻ nhỏ, xe đạp hay xe tải?), Định vị không gian (localization — vật thể cách xe bao nhiêu mét, chiều rộng chiều cao ra sao?), và Bám vết ước lượng động học (tracking & velocity estimation — đối tượng đang đứng yên, di chuyển cùng chiều hay sắp cắt ngang mũi xe?). Các kiến trúc nơ-ron như CNN, YOLO, BEVFormer hay mạng Transformer hiện đại được tối ưu hóa liên tục để giảm thiểu tỷ lệ nhận diện sót (미검출) và nhận diện sai (오검출).

**재사용 가능한 콜로케이션·청크:** `딥러닝 기반 객체인식알고리즘` (thuật toán nhận dạng đối tượng dựa trên học sâu), `객체인식알고리즘의 정확도` (độ chính xác của thuật toán nhận diện đối tượng), `객체인식알고리즘을 고도화하다` (nâng cấp/tối ưu hóa thuật toán nhận diện đối tượng), `실시간 객체인식알고리즘 처리` (xử lý thời gian thực của thuật toán nhận dạng đối tượng).

**자주 쓰는 문형과 성분:** `객체인식알고리즘이 무단 횡단하는 보행자를 즉각 포착하다` (Thuật toán nhận dạng đối tượng lập tức bắt trọn người đi bộ đang băng qua đường trái phép); `개발진이 악천후 환경에 특화된 객체인식알고리즘을 훈련시키다` (Đội ngũ phát triển huấn luyện thuật toán nhận dạng đối tượng chuyên biệt cho điều kiện thời tiết xấu).

**사회적 관계·주제별 register:** Nghiên cứu trí tuệ nhân tạo thị giác, lập trình phần mềm tự hành và đánh giá tiêu chuẩn an toàn xe hơi thông minh (news_formal).

**예문:** 연구진은 어두운 골목길에서 갑자기 튀어나오는 자전거를 0.05초 만에 감지할 수 있도록 합성곱 신경망 기반의 객체인식알고리즘을 고도화했다.

**Dịch:** Nhóm nghiên cứu đã nâng cấp thuật toán nhận dạng đối tượng dựa trên mạng nơ-ron tích chập để phát hiện chiếc xe đạp bất ngờ lao ra từ con ngõ tối chỉ trong vòng 0,05 giây.

**어휘 연결:** `객체인식알고리즘`: thuật toán phát hiện và khoanh vùng từng thực thể vật lý riêng lẻ; phân biệt với `세맨틱 분할` (Semantic Segmentation — phân đoạn ngữ nghĩa toàn bộ từng điểm ảnh thành đường xá, bầu trời hay vỉa hè); là đầu vào trực tiếp cho `자율주행판단` và `돌발상황대응`.

**영어 참고:** *object detection algorithm* — thuật toán phát hiện và phân loại các đối tượng vật lý trong không gian từ luồng dữ liệu cảm biến thị giác hoặc đám mây điểm 3D.

---

<!-- lexical_basis: advanced_native; register: autonomous trajectory planning and robotics motion; source_lane: news_formal; context: advanced-autonomous-driving-and-sensor-fusion/news_formal -->
### 경로계획

**품사:** 명사

**핵심 의미:** 인지 시스템이 파악한 주변 도로 환경과 고정밀 지도를 바탕으로, 출발지에서 목적지까지 도달하는 전역 이동 경로(Global Path)와 주변 동적 장애물을 회피하며 차량의 운동학적 한계를 고려해 매 순간 최적의 궤적(Local Trajectory)을 산출하는 과정이다.

**베트남어 뜻:** hoạch định quỹ đạo, lập kế hoạch đường đi; quá trình tính toán và vạch ra lộ trình di chuyển tối ưu cho xe tự hành, bao gồm lộ trình vĩ mô từ điểm xuất phát tới đích đến và quỹ đạo vi mô tức thời nhằm né tránh vật cản động, đảm bảo giới hạn cơ học và độ êm dịu khi vận hành.

**뉘앙스와 사용법:** `경로계획` (Path Planning / Trajectory Planning) kết hợp giữa hình học không gian và động lực học xe. Quá trình này chia làm hai tầng rõ rệt: Tầng hành trình toàn cục (전역 경로 계획 — Global Route Planning) tính toán xe nên đi qua những tuyến phố, nút giao nào; và Tầng quỹ đạo cục bộ (지역 경로 계획 — Local Trajectory Planning) tính toán liên tục ở tần số hàng chục Hertz: xe phải bẻ lái theo đường cong nào, gia tốc tăng giảm ra sao để vừa không va chạm với xe khác, vừa không làm hành khách bị giật mình do lực quán tính ly tâm quá lớn (tối ưu hóa độ giật — jerk minimization).

**재사용 가능한 콜로케이션·청크:** `실시간 경로계획 수립` (thiết lập hoạch định đường đi thời gian thực), `최적 경로계획 알고리즘` (thuật toán hoạch định đường đi tối ưu), `회피 경로계획` (hoạch định quỹ đạo né tránh va chạm), `경로계획을 갱신하다` (cập nhật quỹ đạo đường đi).

**자주 쓰는 문형과 성분:** `자율주행차가 전방 공사 구간을 발견하고 우회 경로계획을 수립하다` (Xe tự hành phát hiện đoạn đường thi công phía trước và thiết lập kế hoạch đường tránh); `경로계획 모듈이 차량의 속도와 조향각을 종합적으로 계산하다` (Mô-đun hoạch định đường đi tính toán tổng thể vận tốc và góc lái của phương tiện).

**사회적 관계·주제별 register:** Điều khiển học robot, thuật toán dẫn đường phương tiện tự động và công nghệ di động thông minh (news_formal).

**예문:** 전방 차로에 고장 차량이 멈춰 서 있는 것을 확인한 시스템은 반대편 차선의 교통량을 신속히 분석한 뒤 매끄러운 추월 경로계획을 세웠다.

**Dịch:** Sau khi xác nhận chiếc xe hỏng đang dừng ở làn đường phía trước, hệ thống đã nhanh chóng phân tích lưu lượng giao thông ở làn đối diện rồi vạch ra kế hoạch quỹ đạo vượt xe mượt mà.

**어휘 연결:** `경로계획`: bước tính toán đường đi hình học và biểu đồ vận tốc tối ưu; đóng vai trò cầu nối chuyển tiếp giữa quyết định chiến thuật của `자율주행판단` sang các thao tác thực thi cơ học của `조향제어` và `제동제어`.

**영어 참고:** *path planning / trajectory planning* — quá trình toán học xác định chuỗi trạng thái di chuyển (vị trí, vận tốc, gia tốc) an toàn và tối ưu cho phương tiện tự hành.

---

<!-- lexical_basis: advanced_native; register: vehicle dynamics and drive-by-wire mechanics; source_lane: native_spoken; context: advanced-autonomous-driving-and-sensor-fusion/native_spoken -->
### 조향제어

**품사:** 명사

**핵심 의미:** 경로계획 모듈이 산출한 목표 궤적을 오차 없이 추종할 수 있도록 전동식 파워 스티어링(EPS) 모터나 전자식 조향(Steer-by-Wire) 액추에이터를 정밀 제어하여 앞바퀴의 각도와 조향 토크를 능동적으로 조절하는 기술이다.

**베트남어 뜻:** điều khiển góc lái, điều khiển hệ thống lái; kỹ thuật điều tiết chính xác góc quay của bánh trước và mô-men lực lái thông qua mô-tơ trợ lực lái điện tử (EPS) hoặc cơ cấu lái tín hiệu điện (Steer-by-Wire) nhằm giúp xe bám sát quỹ đạo đã vạch sẵn.

**뉘앙스와 사용법:** `조향제어` (Steering Control / Lateral Control) phụ trách toàn bộ chuyển động ngang (횡방향 제어) của xe tự hành. Không còn tài xế con người dùng tay quay vô lăng, máy tính sẽ chạy các thuật toán điều khiển phản hồi tiên tiến (như Pure Pursuit, Stanley, hay Điều khiển dự báo mô hình — MPC) để ra lệnh cho mô tơ quay bánh xe chính xác tới từng phần mười độ. Độ nhạy và độ mượt của `조향제어` quyết định trực tiếp cảm giác lái: nếu phản ứng quá chậm xe sẽ chệch làn; nếu xoay quá gắt ở tốc độ cao trên cao tốc xe có thể bị trượt bánh mất kiểm soát (차량 전복 또는 스핀).

**재사용 가능한 콜로케이션·청크:** `정밀 조향제어` (điều khiển góc lái chính xác cao), `전자식 조향제어 시스템` (hệ thống điều khiển lái điện tử), `조향제어 응답 속도` (tốc độ phản hồi điều khiển lái), `능동형 조향제어` (điều khiển lái chủ động).

**자주 쓰는 문형과 성분:** `자율주행 알고리즘이 급커브 구간에서 신속하게 조향제어를 수행하다` (Thuật toán tự hành thực hiện điều khiển góc lái nhanh chóng ở khúc cua gắt); `강풍이 부는 다리 위에서도 조향제어가 차로 이탈을 완벽히 방지하다` (Ngay cả trên cây cầu gió lớn, việc điều khiển lái vẫn ngăn ngừa hoàn hảo nguy cơ chệch làn).

**사회적 관계·주제별 register:** Kỹ sư động lực học ô tô, thảo luận tại xưởng thử nghiệm xe và báo cáo kiểm định hệ thống chấp hành (native_spoken / news_formal).

**예문:** 젖은 노면에서 차체가 미끄러질 조짐이 보이자 능동형 조향제어가 개입하여 바퀴의 각도를 미세하게 틀어 자세를 바로잡았다.

**Dịch:** Khi nhận thấy dấu hiệu thân xe bị trượt trên mặt đường ướt, hệ thống điều khiển lái chủ động đã can thiệp, khẽ xoay góc bánh xe để lập tức cân bằng lại tư thế xe.

**어휘 연결:** `조향제어`: điều khiển chuyển động phương ngang (lateral control — bẻ lái, giữ làn); phối hợp song hành với `제동제어` và `가속제어` (chuyển động phương dọc — longitudinal control) để duy trì quỹ đạo hoàn hảo.

**영어 참고:** *steering control / lateral vehicle control* — việc điều chỉnh điện tử góc đánh lái và mô-men lái của bánh xe nhằm duy trì ổn định hướng đi và bám theo quỹ đạo tự hành.

---

<!-- lexical_basis: advanced_native; register: automotive active safety and deceleration systems; source_lane: native_spoken; context: advanced-autonomous-driving-and-sensor-fusion/native_spoken -->
### 제동제어

**품사:** 명사

**핵심 의미:** 차량의 속도를 감속하거나 완전히 정지시키기 위해 전자제어 유압 브레이크(Brake-by-Wire) 또는 전기차 회생제동 모듈을 제어하여 각 바퀴 실린더의 유압과 제동 토크를 실시간으로 조절하는 제동 실행 기술이다.

**베트남어 뜻:** điều khiển phanh hãm, kiểm soát lực phanh; kỹ thuật điều tiết áp lực dầu phanh điện tử hoặc mô-men hãm tái sinh để giảm tốc độ hoặc dừng hẳn xe một cách an toàn, chống bó cứng bánh xe và mang lại sự êm ái cho hành khách.

**뉘앙스와 사용법:** `제동제어` (Braking Control) là mắt xích an toàn sống còn trong chuyển động dọc (종방향 제어). Trong hệ thống tự lái, phanh không đơn thuần là đạp hết chân phanh khi thấy vật cản (Phanh khẩn cấp tự động — 긴급자동제동 / AEB), mà là việc tính toán biểu đồ giảm tốc tối ưu (deceleration profile). Xe phải dừng nhẹ nhàng đúng trước vạch sơn ngã tư mà không làm hành khách bị chúi nhủi về phía trước, phải tự động phân bổ lực phanh giữa bốn bánh trên đường trơn trượt (hợp tác cùng hệ thống chống bó cứng phanh ABS và cân bằng điện tử ESC), và phải kết hợp mượt mà giữa phanh điện động cơ tái sinh năng lượng với phanh đĩa ma sát cơ khí.

**재사용 가능한 콜로케이션·청크:** `긴급 제동제어 작동` (kích hoạt điều khiển phanh khẩn cấp), `능동형 제동제어 시스템` (hệ thống điều khiển phanh chủ động), `제동제어 유압 모듈` (mô-đun thủy lực điều khiển phanh), `정밀 제동제어로 정지하다` (dừng xe bằng điều khiển phanh chuẩn xác).

**자주 쓰는 문형과 성분:** `돌발 장애물이 감지되는 즉시 전자제동제어가 최대 감속력을 발생시키다` (Ngay khi chướng ngại vật bất ngờ được phát hiện, điều khiển phanh điện tử tạo ra lực giảm tốc tối đa); `제동제어와 조향제어가 동시에 맞물려 충돌을 피하다` (Điều khiển phanh và điều khiển lái đồng thời phối hợp để tránh va chạm).

**사회적 관계·주제별 register:** Kỹ thuật an toàn chủ động xe cơ giới, kiểm định hiệu năng phanh và trao đổi kỹ thuật thực địa giữa kỹ sư ô tô (native_spoken / news_formal).

**예문:** 보행자가 차도에 뛰어들자마자 자율주행 제어기는 1초의 지체도 없이 강력한 제동제어를 실행하여 충돌 직전에 차를 세웠다.

**Dịch:** Ngay khi người đi bộ lao xuống lòng đường, bộ điều khiển tự hành đã thực hiện lệnh phanh hãm mạnh mẽ không chậm trễ một giây, dừng xe lại ngay trước khoảnh khắc va chạm.

**어휘 연결:** `제동제어`: kiểm soát giảm tốc và dừng đỗ phương tiện; đối ứng với `가속제어` (tăng tốc) và đóng vai trò phòng vệ sau cùng trong kịch bản `돌발상황대응`.

**영어 참고:** *braking control / deceleration control* — việc quản lý và áp dụng lực phanh cơ điện tử nhằm giảm tốc hoặc dừng đỗ xe tự hành một cách an toàn và chính xác.

---

<!-- lexical_basis: advanced_native; register: road hazard response and safety fail-safe; source_lane: native_spoken; context: advanced-autonomous-driving-and-sensor-fusion/native_spoken -->
### 돌발상황대응

**품사:** 명사

**핵심 의미:** 도로 주행 중 보행자의 기습적 무단 횡단, 전방 차량의 급제동, 타이어 파손, 적재물 낙하 등 사전에 예측하기 어려운 긴급 위험 상황이 닥쳤을 때, 차량이 자율적으로 충돌 회피 조향이나 비상 감속을 실행하고 안전 영역으로 정차하는 일련의 위험 회피 조치 메커니즘이다.

**베트남어 뜻:** xử lý tình huống khẩn cấp, ứng phó biến cố bất ngờ; cơ chế an toàn tự động của xe tự hành nhằm phản xạ cực nhanh (phanh khẩn cấp, bẻ lái né tránh, tấp vào lề đường an toàn) khi gặp các tình huống nguy hiểm không lường trước như người bất ngờ lao ra, xe phía trước phanh gấp hay chướng ngại vật rơi.

**뉘앙스와 사용법:** `돌발상황대응` là bài toán "trường hợp biên hiểm hóc" (Edge Case) quyết định sự thành bại của xe tự lái Cấp 4. Trong điều kiện giao thông mẫu mực, xe tự hành chạy rất mượt; nhưng khi một chiếc lốp xe phát nổ trên cao tốc hay một chướng ngại vật bất ngờ rơi khỏi xe tải phía trước, xe không thể trông chờ tài xế tiếp quản. Hệ thống phải kích hoạt ngay các kịch bản an toàn định sẵn: nếu không đủ khoảng cách phanh dừng thì phải bẻ lái lách qua vùng trống kế bên; nếu hệ thống bị hỏng hóc nghiêm trọng thì phải tự động thực hiện thao tác giảm thiểu rủi ro tối thiểu (최소위험상태 — MRM: Minimum Risk Maneuver) để tấp xe vào làn khẩn cấp.

**재사용 가능한 콜로케이션·청크:** `돌발상황대응 알고리즘` (thuật toán ứng phó tình huống bất ngờ), `신속한 돌발상황대응` (xử lý tình huống khẩn cấp nhanh chóng), `돌발상황대응 매뉴얼` (cẩm nang/kịch bản ứng phó biến cố đột xuất), `돌발상황대응 능력을 검증하다` (kiểm chứng năng lực ứng phó tình huống bất ngờ).

**자주 쓰는 문형과 성분:** `자율주행 시스템이 낙하물 발견 시 기민하게 돌발상황대응을 펼치다` (Hệ thống tự hành nhanh nhẹn triển khai ứng phó tình huống khẩn cấp khi phát hiện vật thể rơi); `돌발상황대응 실패는 대형 교통사고로 직결될 수 있다` (Thất bại trong việc ứng phó tình huống bất ngờ có thể dẫn thẳng tới tai nạn giao thông nghiêm trọng).

**사회적 관계·주제별 register:** Đánh giá an toàn thực địa phương tiện tự hành, phân tích sự cố thử nghiệm và quy chuẩn đăng kiểm xe không người lái (native_spoken / news_formal).

**예문:** 앞서가던 화물차에서 대형 박스가 쏟아져 내리자 자율주행 차량은 빈틈없는 돌발상황대응 체계를 작동시켜 갓길로 안전하게 회피했다.

**Dịch:** Khi những chiếc thùng lớn rơi từ chiếc xe tải phía trước xuống lòng đường, chiếc xe tự hành đã lập tức kích hoạt cơ chế ứng phó tình huống khẩn cấp để đánh lái né vào lề đường an toàn.

**어휘 연결:** `돌발상황대응`: phản xạ phòng vệ tức thời khi có hiểm họa ngoại cảnh bất ngờ; là sự phối hợp nhịp nhàng giữa `객체인식알고리즘` (phát hiện nhanh), `자율주행판단` (đưa ra quyết sách) cùng `조향제어` và `제동제어` (thao tác cơ khí).

**영어 참고:** *emergency response / contingency handling / fallback maneuver* — khả năng tự động xử lý và né tránh các tình huống nguy hiểm bất ngờ phát sinh trên đường để đưa xe về trạng thái an toàn tối thiểu.

---

<!-- lexical_basis: advanced_native; register: driver assistance and surround-view safety; source_lane: native_spoken; context: advanced-autonomous-driving-and-sensor-fusion/native_spoken -->
### 사각지대감지

**품사:** 명사

**핵심 의미:** 운전자의 육안 시야나 전방 주센서의 화각(FOV)이 닿지 않는 차체 측면, 후측방 및 범퍼 모퉁이 주변의 사각지대 영역을 초음파 센서, 단·중거리 레이더, 광각 서라운드 뷰 카메라를 통해 실시간 감시하여 숨겨진 보행자나 접근 차량을 포착하는 기능이다.

**베트남어 뜻:** phát hiện điểm mù, cảnh báo điểm mù; tính năng giám sát các vùng không gian xung quanh xe (đặc biệt là hai bên sườn và góc chéo phía sau) mà tầm nhìn thông thường hoặc góc quét của cảm biến chính không bao quát hết, sử dụng radar tầm ngắn-trung và camera góc rộng để nhận diện chướng ngại vật tiềm ẩn.

**뉘앙스와 사용법:** `사각지대감지` (Blind Spot Detection — BSD) có nguồn gốc từ hệ thống hỗ trợ lái nâng cao (ADAS) trên xe thương mại, nhưng trong xe tự hành hoàn toàn nó được nâng cấp thành mạng lưới bao phủ 360 độ quanh thân xe không một khe hở. Những "góc chết hình học" (기하학적 사각지대) thường nằm sát mép bánh sau hoặc ngay dưới mũi xe tải lớn — nơi một đứa trẻ hoặc người đi xe máy có thể lọt vào mà camera tầm xa không thấy. Việc tích hợp các cảm biến quét góc rộng cự ly gần giúp xe tự tin đưa ra phán đoán chuyển làn hoặc rẽ phải mà không gây va quẹt sườn xe.

**재사용 가능한 콜로케이션·청크:** `사각지대감지 센서` (cảm biến phát hiện điểm mù), `사각지대감지 시스템을 활성화하다` (kích hoạt hệ thống phát hiện điểm mù), `측후방 사각지대감지` (phát hiện điểm mù phía sườn và sau xe), `사각지대감지 경보` (cảnh báo phát hiện điểm mù).

**자주 쓰는 문형과 성분:** `사각지대감지 장치가 차로 변경 전 끼어드는 오토바이를 먼저 포착하다` (Thiết bị phát hiện điểm mù bắt trọn chiếc xe máy đang lách vào trước khi đổi làn); `사각지대감지 범위가 360도 전방위로 확장되다` (Phạm vi phát hiện điểm mù được mở rộng toàn diện 360 độ).

**사회적 관계·주제별 register:** Tư vấn trang bị an toàn ô tô thông minh, đàm thoại kỹ thuật giữa chuyên viên thử xe và hướng dẫn lái xe an toàn (native_spoken / news_formal).

**예문:** 차선을 바꾸려던 순간 사각지대감지 센서가 우측 후방에서 고속으로 접근하는 승용차를 감지하고 경고를 울리며 차로 유지를 유도했다.

**Dịch:** Ngay khoảnh khắc định chuyển làn, cảm biến phát hiện điểm mù đã phát hiện chiếc xe con đang lao tới với tốc độ cao ở góc chéo phía sau bên phải, lập tức phát cảnh báo và điều hướng xe giữ nguyên làn.

**어휘 연결:** `사각지대감지` (BSD): tập trung rà soát các vùng khuất tầm nhìn sát sườn và sau xe; phân biệt với `전방감지` (Front Sensing — quan sát tầm xa phía trước); cung cấp dữ liệu trọng yếu cho `자율주행판단` khi chuẩn bị thao tác chuyển làn.

**영어 참고:** *blind spot detection (BSD)* — hệ thống sử dụng cảm biến để phát hiện các phương tiện hoặc vật thể nằm trong vùng khuất tầm nhìn hai bên sườn và phía sau xe.

---

<!-- lexical_basis: advanced_native; register: intelligent transportation systems and connected mobility; source_lane: news_formal; context: advanced-autonomous-driving-and-sensor-fusion/news_formal -->
### 차량사물통신

**품사:** 명사

**핵심 의미:** 차량이 도로 위 다른 차량(V2V), 신호등 및 도로변 기지국 등 인프라(V2I), 보행자의 모바일 기기(V2P), 중앙 교통 관제 네트워크(V2N) 등과 무선 통신망(DSRC / C-V2X)을 통해 실시간으로 주행 상태, 신호 주기, 도로 위험 정보를 상호 교환하는 미래형 이동통신 기술이다.

**베트남어 뜻:** truyền thông phương tiện với vạn vật (V2X — Vehicle-to-Everything); công nghệ kết nối vô tuyến cho phép xe tự hành trao đổi dữ liệu hai chiều theo thời gian thực với các phương tiện khác trên đường, hạ tầng giao thông (đèn tín hiệu, cảm biến ven đường), người đi bộ và mạng lưới quản lý giao thông.

**뉘앙스와 사용법:** `차량사물통신` (V2X) được ví như "giác quan thứ 6" giúp xe tự hành vượt qua rào cản vật lý về tầm nhìn thẳng (NLOS — Non-Line-of-Sight). Cảm biến trên xe (camera, lidar) dù tối tân đến đâu cũng không thể nhìn xuyên qua tòa nhà hay xe buýt phía trước. Nhờ giao tiếp V2X, chiếc xe có thể biết trước 300m rằng ở ngã tư khuất tầm nhìn phía trước đang có xe cứu thương lao tới với tốc độ 80km/h; hoặc biết chính xác đèn đỏ ngã tư còn bao nhiêu giây sẽ chuyển xanh (thông tin SPaT — Signal Phase and Timing) để xe tự động điều chỉnh tốc độ trôi xe tiết kiệm năng lượng và chống ùn tắc.

**재사용 가능한 콜로케이션·청크:** `차량사물통신 인프라` (hạ tầng truyền thông phương tiện với vạn vật), `차량사물통신 모뎀` (modem giao tiếp V2X), `차량사물통신을 통해 신호 정보를 수신하다` (tiếp nhận thông tin đèn tín hiệu qua truyền thông V2X), `차세대 차량사물통신 표준` (tiêu chuẩn truyền thông V2X thế hệ mới).

**자주 쓰는 문형과 성분:** `차량이 차량사물통신을 통해 전방 1km 밖의 사고 정보를 전달받다` (Xe tiếp nhận thông tin tai nạn phía trước cách 1km thông qua truyền thông V2X); `차량사물통신이 센서의 물리적 시야 한계를 완벽히 보완하다` (Truyền thông V2X bù đắp hoàn hảo giới hạn tầm nhìn vật lý của các cảm biến).

**사회적 관계·주제별 register:** Hạ tầng giao thông thông minh (ITS), chính sách viễn thông di động 5G/6G và quy hoạch đô thị thông minh tương lai (news_formal).

**예문:** 보이지 않는 교차로 사각지대에서 다가오던 특수 구급차의 신호를 차량사물통신으로 미리 수신하여 자율주행 차량이 서행하며 길을 터주었다.

**Dịch:** Nhờ tiếp nhận sớm tín hiệu của chiếc xe cứu thương đặc chủng đang tiến tới từ góc khuất ngã tư không nhìn thấy được thông qua truyền thông V2X, chiếc xe tự hành đã chủ động đi chậm lại và nhường đường.

**어휘 연결:** `차량사물통신` (V2X): kết nối mạng diện rộng giữa xe với môi trường bên ngoài; phân biệt với `차내통신` (In-vehicle Network — mạng nội bộ bên trong xe như mạng CAN bus, Automotive Ethernet); là giải pháp hữu hiệu nhất để khắc phục `인지거리한계`.

**영어 참고:** *Vehicle-to-Everything (V2X) communication* — công nghệ truyền thông không dây cho phép xe cộ chia sẻ dữ liệu trực tiếp với hạ tầng đường bộ, phương tiện lân cận và người đi bộ để nâng cao an toàn giao thông.

---

<!-- lexical_basis: advanced_native; register: artificial intelligence decision making and behavioral policy; source_lane: news_formal; context: advanced-autonomous-driving-and-sensor-fusion/news_formal -->
### 자율주행판단

**품사:** 명사

**핵심 의미:** 인지 시스템이 제공한 주변 객체 정보와 고정밀 지도, 통신 데이터를 종합 분석하여 차로 유지, 차선 변경, 추월, 양보, 감속 정지 등 차량이 취해야 할 최적의 운전 행동 양식을 규칙 기반(Rule-based) 로직이나 인공지능 강화학습 신경망을 통해 스스로 결정하는 시스템의 지능적 의사결정 기능이다.

**베트남어 뜻:** phán đoán tự hành, ra quyết định lái tự động; chức năng "bộ não" của hệ thống tự lái, tổng hợp mọi dữ liệu nhận thức môi trường, bản đồ và tín hiệu truyền thông để phân tích tình huống giao thông, từ đó quyết định hành vi tối ưu như giữ làn, đổi làn, vượt xe, nhường đường hay dừng lại.

**뉘앙스와 사용법:** `자율주행판단` (Autonomous Driving Decision Making) nằm ở vị trí trung tâm trong chuỗi giá trị: Nhận thức (인지) → Phán đoán (판단) → Điều khiển (제어). Đây là khâu phức tạp và tinh tế nhất vì xe phải giải bài toán tương tác xã hội trên đường (game theory): chiếc xe phía sau có nhường khi ta xi-nhan không? người đi bộ đang nhìn điện thoại có bất chợt bước xuống lòng đường không? Các hệ thống hiện đại đang chuyển dịch từ cây quyết định cứng nhắc (if-else logic) sang các mô hình học tăng cường (Reinforcement Learning) và mô hình nền tảng đầu-cuối (End-to-End Foundation Models) để đưa ra phán đoán mềm mại, tự nhiên như tài xế kỳ cựu.

**재사용 가능한 콜로케이션·청크:** `실시간 자율주행판단` (ra quyết định tự hành theo thời gian thực), `자율주행판단 모델` (mô hình phán đoán tự hành), `자율주행판단 오류를 줄이다` (giảm thiểu sai số trong ra quyết định tự hành), `고도화된 자율주행판단 로직` (logic phán đoán tự hành nâng cao).

**자주 쓰는 문형과 성분:** `인공지능 두뇌가 복잡한 로터리에서 안전한 진입 여부를 자율주행판단으로 결정하다` (Bộ não trí tuệ nhân tạo quyết định việc có nên tiến vào vòng xuyến phức tạp hay không bằng phán đoán tự hành); `자율주행판단이 신속해야 긴급 상황에서 사고를 방지할 수 있다` (Phán đoán tự hành phải nhanh nhạy mới có thể ngăn ngừa tai nạn trong tình huống khẩn cấp).

**사회적 관계·주제별 register:** Trí tuệ nhân tạo nhận thức và ra quyết định, triết học đạo đức xe tự hành và kiến trúc phần mềm tự động hóa phương tiện (news_formal).

**예문:** 비보호 좌회전 구간에서 인공지능은 마주 오는 직진 차량의 속도와 차간 거리를 정밀 계산한 끝에 안전하게 통과할 수 있다는 자율주행판단을 내렸다.

**Dịch:** Tại đoạn đường rẽ trái không có đèn ưu tiên, trí tuệ nhân tạo sau khi tính toán kỹ lưỡng tốc độ và khoảng cách của chiếc xe đi thẳng đối diện đã đưa ra quyết định tự hành rằng có thể vượt qua an toàn.

**어휘 연결:** `자율주행판단`: giai đoạn suy luận và đưa ra quyết sách hành vi; đóng vai trò then chốt chuyển hóa kết quả phân tích từ `객체인식알고리즘` thành mệnh lệnh quỹ đạo cho `경로계획`.

**영어 참고:** *autonomous driving decision making / behavioral decision-making* — quá trình hệ thống tự hành phân tích tình huống giao thông và quyết định các thao tác chiến thuật tiếp theo của phương tiện.

---

<!-- lexical_basis: advanced_native; register: sensor hardware optics and field testing; source_lane: native_spoken; context: advanced-autonomous-driving-and-sensor-fusion/native_spoken -->
### 인지거리한계

**품사:** 명사

**핵심 의미:** 레이저 펄스의 신호 감쇄, 카메라 렌즈의 광학 픽셀 해상도 한계, 레이더 빔의 확산 등으로 인해 센서 하드웨어가 전방이나 측방의 장애물을 신뢰성 있게 탐지하고 식별할 수 있는 최대 유효 물리적 거리의 한계치이다.

**베트남어 뜻:** giới hạn cự ly nhận thức, giới hạn khoảng cách cảm biến; cự ly tối đa mà các cảm biến trên xe có thể phát hiện và nhận diện chính xác các đối tượng vật lý trên đường, bị giới hạn bởi độ phân giải của camera, công suất xung laser LiDAR hoặc độ suy giảm sóng radar.

**뉘앙스와 사용법:** Trong thế giới thực, không có cảm biến nào nhìn được xa vô tận. Camera quang học độ phân giải cao có thể chụp được vật thể ở xa 150m, nhưng để phân loại chính xác đó là biển báo hay túi rác thì chỉ hiệu quả trong tầm 80m; LiDAR đo được vật thể phản xạ tốt ở cự ly 200m, nhưng đối với đối tượng màu đen sẫm (độ phản xạ dưới 10%) thì `인지거리한계` sụt giảm chỉ còn dưới 100m. Khi xe chạy ở tốc độ cao 120km/h trên đường cao tốc (di chuyển hơn 33m mỗi giây), giới hạn cự ly cảm nhận ngắn đồng nghĩa với việc xe chỉ có chưa đầy 3 giây để nhận biết, phán đoán và dừng xe an toàn.

**재사용 가능한 콜로케이션·청크:** `센서의 인지거리한계` (giới hạn cự ly nhận thức của cảm biến), `인지거리한계를 극복하다` (khắc phục giới hạn cự ly nhận thức), `인지거리한계에 도달하다` (chạm tới giới hạn cự ly nhận thức), `물리적 인지거리한계` (giới hạn khoảng cách nhận thức vật lý).

**자주 쓰는 문형과 성분:** `고속 주행 시에는 인지거리한계를 감안하여 차간 거리를 더 넓혀야 한다` (Khi chạy ở tốc độ cao cần cân nhắc giới hạn cự ly nhận thức để nới rộng khoảng cách giữa các xe); `차량사물통신 기술이 센서의 인지거리한계를 획기적으로 넓혀 주다` (Công nghệ truyền thông V2X mở rộng ngoạn mục giới hạn cự ly nhận thức của cảm biến).

**사회적 관계·주제별 register:** Thảo luận thông số phần cứng cảm biến, thiết lập dải tốc độ an toàn xe và trao đổi thực địa giữa các kỹ sư thử nghiệm xe (native_spoken / news_formal).

**예문:** 고속도로 자율주행 모드에서는 전방 센서의 인지거리한계 때문에 원거리의 정체 꼬리를 미리 파악하기 어려워 통신망을 통한 사전 경보가 필수적이다.

**Dịch:** Ở chế độ tự hành trên cao tốc, do giới hạn cự ly nhận thức của các cảm biến phía trước rất khó phát hiện sớm đuôi hàng xe ùn tắc ở cự ly xa, việc cảnh báo sớm qua mạng truyền thông là điều bắt buộc.

**어휘 연결:** `인지거리한계`: ranh giới cự ly xa nhất mà cảm biến còn phân giải được vật thể; thường bị co hẹp nghiêm trọng khi xảy ra `악천후인식저하`; được bù đắp bằng cách phối hợp dữ liệu diện rộng từ `차량사물통신`.

**영어 참고:** *perception range limit / sensing distance limitation* — khoảng cách vật lý tối đa mà hệ thống cảm biến có thể phát hiện và phân loại vật thể với độ tin cậy được chấp nhận.

---

<!-- lexical_basis: advanced_native; register: meteorological sensor interference and robust perception; source_lane: news_formal; context: advanced-autonomous-driving-and-sensor-fusion/news_formal -->
### 악천후인식저하

**품사:** 명사

**핵심 의미:** 폭우, 폭설, 짙은 안개, 역광, 노면 결빙 등 극심한 기상 악화로 인해 카메라 렌즈 오염 및 빛 번짐, 라이다 레이저 광선의 산란 및 흡수, 레이더 신호 노이즈가 발생하여 센서의 주변 환경 탐지 성능이 급격히 떨어지는 현상이다.

**베트남어 뜻:** suy giảm nhận thức do thời tiết xấu, giảm hiệu năng nhận diện khi thời tiết khắc nghiệt; tình trạng năng lực quan sát và phân tích của hệ thống cảm biến bị sụt giảm nghiêm trọng do mưa to, bão tuyết, sương mù dày hay ngược sáng khiến tia laser bị tán xạ và ống kính camera bị mờ nhòe.

**뉘앙스와 사용법:** `악천후인식저하` là rào cản lớn nhất ngăn cản việc thương mại hóa đại trà xe tự hành Cấp 4/5. Khi trời mưa xối xả, hàng triệu giọt nước mưa làm tán xạ chùm tia laser của LiDAR tạo ra các điểm nhiễu (noise) giả mạo khiến xe lầm tưởng là có tường chắn; tuyết rơi bám lên cụm camera làm mất hoàn toàn hình ảnh vạch kẻ đường; sương mù dày đặc nuốt chửng ánh sáng khả kiến. Để chống chọi với hiện tượng này, các hãng xe phải trang bị hệ thống vòi xịt rửa và sưởi nhiệt bề mặt cảm biến, đồng thời tăng tỷ trọng tin cậy cho radar sóng milimet vốn có khả năng xuyên thấu sương mưa vượt trội.

**재사용 가능한 콜로케이션·청크:** `악천후인식저하 문제를 해결하다` (giải quyết vấn đề suy giảm nhận thức do thời tiết xấu), `악천후인식저하에 대비한 센서 구성` (cấu hình cảm biến phòng ngừa suy giảm nhận thức do thời tiết xấu), `폭설로 인한 악천후인식저하` (suy giảm nhận diện do bão tuyết), `악천후인식저하 상황의 주행 제한` (hạn chế vận hành trong tình huống nhận thức suy giảm vì thời tiết xấu).

**자주 쓰는 문형과 성분:** `자율주행 차량이 폭우 속에서 악천후인식저하가 발생하자 운전자에게 수동 운전을 요청하다` (Xe tự hành khi xảy ra hiện tượng suy giảm nhận thức trong mưa lớn đã yêu cầu tài xế chuyển sang lái thủ công); `센서퓨전 알고리즘이 악천후인식저하를 극복하는 핵심 열쇠이다` (Thuật toán hợp nhất cảm biến là chìa khóa then chốt để khắc phục sự suy giảm nhận thức do thời tiết xấu).

**사회적 관계·주제별 register:** Đánh giá độ bền bỉ của hệ thống tự hành, tiêu chuẩn phê duyệt xe tự hành trong điều kiện khí hậu khắc nghiệt và kiểm định an toàn phương tiện (news_formal).

**예문:** 짙은 안개와 폭우로 카메라의 악천후인식저하가 심해지자 제어기는 투과력이 높은 밀리미터파 레이더의 신뢰도 가중치를 대폭 끌어올렸다.

**Dịch:** Khi tình trạng suy giảm nhận thức do thời tiết xấu của camera trở nên trầm trọng vì sương mù dày và mưa to, bộ điều khiển đã tăng mạnh trọng số độ tin cậy của radar sóng milimet vốn có khả năng xuyên thấu cao.

**어휘 연결:** `악천후인식저하`: sự sa sút hiệu suất cảm biến do thời tiết khắc nghiệt; trực tiếp làm co hẹp `인지거리한계`; buộc hệ thống phải dựa vào `센서퓨전` và kích hoạt kịch bản an toàn của `돌발상황대응`.

**영어 참고:** *adverse weather perception degradation* — hiện tượng suy giảm năng lực nhận thức môi trường của hệ thống tự hành do tác động tiêu cực của các điều kiện khí tượng bất lợi như mưa, tuyết, sương mù.

---

<!-- lexical_basis: advanced_native; register: automotive embedded systems and edge AI computing; source_lane: news_formal; context: advanced-autonomous-driving-and-sensor-fusion/news_formal -->
### 엣지컴퓨팅제어

**품사:** 명사

**핵심 의미:** 대규모 센서 데이터와 자율주행 알고리즘을 원격 중앙 클라우드 서버로 전송하지 않고, 차량 내부에 탑재된 고성능 AI 차량용 컴퓨터(SoC) 자체에서 초저지연(Ultra-low Latency)으로 직접 연산하여 조향 및 제동 액추에이터를 실시간 지휘하는 분산 처리 제어 방식이다.

**베트남어 뜻:** điều khiển tính toán biên, kiểm soát xử lý tại biên; phương thức xử lý dữ liệu và điều khiển lái ngay trên máy tính hiệu năng cao gắn trên xe thay vì gửi lên máy chủ đám mây, nhằm đảm bảo độ trễ gần như bằng không (chỉ vài mili-giây) phục vụ các thao tác bẻ lái, phanh khẩn cấp tức thì.

**뉘앙스와 사용법:** Một chiếc xe tự hành hiện đại sản sinh hàng gigabyte dữ liệu mỗi giây từ dàn camera độ phân giải cao, LiDAR và radar. Nếu phải gửi toàn bộ luồng dữ liệu khổng lồ này qua sóng 5G lên máy chủ đám mây (Cloud) để chờ phân tích rồi gửi lệnh về, độ trễ viễn thông dù chỉ 100 mili-giây cũng khiến chiếc xe đang chạy ở vận tốc 100km/h trôi đi gần 3 mét mà không có sự kiểm soát, chưa kể mạng có thể bị mất sóng trong hầm. Do đó, toàn bộ quy trình từ nhận diện đối tượng đến bẻ lái phanh hãm bắt buộc phải dựa vào `엣지컴퓨팅제어` với bộ xử lý bán dẫn chuyên dụng đạt hàng trăm nghìn tỷ phép tính mỗi giây (TOPS).

**재사용 가능한 콜로케이션·청크:** `초저지연 엣지컴퓨팅제어` (điều khiển tính toán biên độ trễ siêu thấp), `차량 탑재형 엣지컴퓨팅제어 유닛` (bộ phận điều khiển tính toán biên gắn trên xe), `엣지컴퓨팅제어 아키텍처` (kiến trúc điều khiển tính toán biên), `실시간 엣지컴퓨팅제어 기반 주행` (vận hành xe dựa trên điều khiển tính toán biên thời gian thực).

**자주 쓰는 문형과 성분:** `엣지컴퓨팅제어 덕분에 통신 두절 지역에서도 완벽한 자율주행이 가능하다` (Nhờ điều khiển tính toán biên, xe có thể tự hành hoàn hảo ngay cả ở khu vực mất kết nối viễn thông); `자율주행 하드웨어는 방대한 인공지능 연산을 감당하는 엣지컴퓨팅제어로 진화했다` (Phần cứng tự hành đã tiến hóa thành tính toán biên gánh vác khối lượng tính toán trí tuệ nhân tạo khổng lồ).

**사회적 관계·주제별 register:** Kiến trúc bán dẫn xe hơi, điện toán phân tán ô tô và kỹ thuật phần mềm nhúng thời gian thực (news_formal).

**예문:** 갑작스러운 장애물 회피를 위해 차량은 외부 서버와의 통신 지연을 기다리지 않고 차량 내 엣지컴퓨팅제어 시스템을 통해 수 밀리초 만에 브레이크를 밟았다.

**Dịch:** Để né tránh chướng ngại vật bất ngờ, chiếc xe không chờ độ trễ viễn thông với máy chủ bên ngoài mà đã kích hoạt phanh chỉ trong vài phần nghìn giây thông qua hệ thống điều khiển tính toán biên lắp sẵn trên xe.

**어휘 연결:** `엣지컴퓨팅제어` (On-board Edge Computing): tính toán xử lý tức thời ngay tại xe; đối lập với `클라우드 컴퓨팅` (Cloud Computing — tính toán đám mây từ xa có độ trễ lớn hơn, chỉ dùng cho phân tích dữ liệu lớn và cập nhật bản đồ định kỳ).

**영어 참고:** *edge computing control / on-vehicle edge computing* — cơ chế xử lý dữ liệu và thực thi thuật toán điều khiển trực tiếp trên bộ xử lý nhúng của phương tiện nhằm triệt tiêu độ trễ mạng viễn thông.

---

<!-- lexical_basis: advanced_native; register: automotive functional safety and fault-tolerant architecture; source_lane: news_formal; context: advanced-autonomous-driving-and-sensor-fusion/news_formal -->
### 안전이중화

**품사:** 명사

**핵심 의미:** 자율주행 차량의 핵심 부품인 주 컴퓨터, 전원 공급선, 센서, 전자식 조향 모터, 제동 유압 장치 등이 주행 중 갑작스러운 고장이나 오작동을 일으키더라도 즉각 대체할 수 있도록 동일하거나 상호 보완적인 백업 하드웨어 및 소프트웨어 회로를 복수로 구축해 놓은 기능 안전 설계 기법이다.

**베트남어 뜻:** dự phòng an toàn kép, thiết kế dư thừa an toàn (Safety Redundancy); nguyên tắc thiết kế kỹ thuật lắp đặt hai hoặc nhiều hệ thống phần cứng và phần mềm song song (máy tính dự phòng, hai bộ mô-tơ lái, hai mạch phanh độc lập, nguồn điện kép) để ngay khi hệ thống chính gặp sự cố, hệ thống phụ sẽ lập tức tiếp quản không để xe mất lái.

**뉘앙스와 사용법:** `안전이중화` (Safety Redundancy) bắt nguồn từ tiêu chuẩn an toàn hàng không và tiêu chuẩn an toàn chức năng ô tô quốc tế (ISO 26262 ASIL-D). Trên xe tự hành Cấp 4 không người lái, không còn tài xế con người để "cầm lái hộ" khi xảy ra hỏng hóc, do đó một lỗi đơn lẻ (단일 고장점 — Single Point of Failure) tuyệt đối không được phép làm tê liệt phương tiện. Hệ thống phải có máy tính phụ chạy song song để tiếp quản trong vài phần nghìn giây nếu máy tính chính bị sập; mô-tơ lái phải có cuộn dây kép và hai nguồn điện độc lập để nếu đứt dây nguồn chính xe vẫn có thể rẽ an toàn vào lề đường.

**재사용 가능한 콜로케이션·청크:** `안전이중화 설계` (thiết kế dự phòng an toàn kép), `조향 및 제동의 안전이중화` (dự phòng an toàn kép cho hệ thống lái và phanh), `하드웨어 안전이중화를 구현하다` (hiện thực hóa dự phòng an toàn kép phần cứng), `안전이중화 시스템을 테스트하다` (thử nghiệm hệ thống dự phòng an toàn kép).

**자주 쓰는 문형과 성분:** `완전 자율주행차가 되기 위해서는 핵심 제어 부품의 안전이중화가 필수적이다` (Để trở thành xe tự hành hoàn toàn, việc dự phòng an toàn kép các linh kiện điều khiển then chốt là điều bắt buộc); `주 제어 컴퓨터가 다운되었지만 안전이중화 덕분에 보조 시스템이 차량을 안전하게 갓길로 정차시켰다` (Dù máy tính điều khiển chính bị sập nguồn, nhờ có dự phòng an toàn kép mà hệ thống phụ đã đưa xe tấp vào lề an toàn).

**사회적 관계·주제별 register:** Tiêu chuẩn an toàn chức năng ô tô quốc tế (ISO 26262), chứng nhận kiểm định xe không người lái và thiết kế hệ thống nhúng an toàn tối cao (news_formal).

**예문:** 고속 주행 중 메인 조향 모터에 통신 단절이 발생했으나 사전에 구축된 안전이중화 회로가 즉각 보조 모터를 구동하여 차량의 안정성을 지켜냈다.

**Dịch:** Dù xảy ra sự cố đứt kết nối truyền thông ở mô-tơ lái chính trong lúc đang chạy ở tốc độ cao, mạch dự phòng an toàn kép đã lập tức kích hoạt mô-tơ phụ dự phòng để bảo vệ tuyệt đối sự cân bằng của xe.

**어휘 연결:** `안전이중화`: thiết kế dự phòng đa tầng nhằm loại trừ điểm lỗi đơn lẻ; gắn liền với nguyên lý `페일세이프` (Fail-safe — cơ chế an toàn khi gặp sự cố) và `고장 허용 설계` (Fault-tolerant design).

**영어 참고:** *safety redundancy / fail-safe redundancy* — việc nhân bản các thành phần phần cứng và phần mềm trọng yếu nhằm bảo đảm hệ thống vẫn vận hành an toàn ngay cả khi một bộ phận gặp trục trặc kỹ thuật.

---

## 읽기: 복잡한 도심 도로를 달리는 지능형 센서망

<!-- passage_word_count: 112 Korean eojeol; target_set: 센서퓨전, 라이다측위, 고정밀지도, 객체인식알고리즘, 경로계획, 조향제어, 제동제어, 돌발상황대응, 사각지대감지, 차량사물통신, 자율주행판단, 인지거리한계, 악천후인식저하, 엣지컴퓨팅제어, 안전이중화 -->

도심의 복잡한 교차로에 진입한 자율주행 차량은 라이다와 카메라, 레이더를 결합한 센서퓨전 기술로 주변 지형을 실시간 재구성했다. 위성 신호가 흔들리는 빌딩숲 속에서도 라이다측위와 고정밀지도를 대조하여 오차 없는 차로 위치를 유지했다. 심층 신경망 기반의 객체인식알고리즘은 무단 횡단하는 보행자와 오토바이를 정확히 포착했고, 시스템은 이를 바탕으로 매끄러운 회피 경로계획을 수립했다. 전자식 조향제어와 정밀한 제동제어가 유기적으로 맞물리며 차체의 균형을 잡는 가운데, 갑작스러운 낙하물 출현에도 기민한 돌발상황대응을 펼쳐 위험을 넘겼다. 측후방 사각지대감지 센서와 교차로 사각을 꿰뚫는 차량사물통신은 주변 차량의 궤적을 미리 공유받아 더욱 신속한 자율주행판단을 뒷받침했다. 짙은 안개로 인한 인지거리한계와 갑작스러운 폭우에 따른 악천후인식저하 속에서도, 고성능 차량 내 엣지컴퓨팅제어가 초저지연 연산을 이끌어냈다. 나아가 메인 컴퓨터 장애 시 즉각 보조 시스템이 개입하는 안전이중화 덕분에 차량은 목적지까지 안전한 운행을 완수했다.

**베트남어 번역:**

Khi tiến vào nút giao thông đô thị phức tạp, chiếc xe tự hành đã tái hiện địa hình xung quanh theo thời gian thực nhờ công nghệ hợp nhất cảm biến tích hợp cả LiDAR, camera và radar. Ngay cả giữa những khối nhà cao tầng nơi tín hiệu vệ tinh bị chập chờn, xe vẫn duy trì vị trí làn đường chuẩn xác không sai lệch nhờ đối chiếu định vị LiDAR với bản đồ độ nét cao. Thuật toán nhận diện đối tượng dựa trên mạng nơ-ron sâu đã bắt trọn chính xác người đi bộ và xe máy băng qua đường, từ đó hệ thống đã thiết lập một kế hoạch quỹ đạo né tránh mượt mà. Trong lúc việc điều khiển góc lái điện tử và điều khiển phanh chính xác phối hợp nhịp nhàng để giữ vững cân bằng thân xe, hệ thống vẫn triển khai cơ chế ứng phó tình huống bất ngờ đầy nhanh nhạy trước sự xuất hiện đột ngột của vật thể rơi, giúp vượt qua hiểm nguy an toàn. Cảm biến phát hiện điểm mù ở sườn sau xe cùng công nghệ truyền thông phương tiện với vạn vật xuyên qua các góc khuất ngã tư đã tiếp nhận sớm quỹ đạo của các phương tiện xung quanh, hỗ trợ đưa ra phán đoán tự hành càng thêm nhanh chóng. Dù phải đối mặt với giới hạn cự ly nhận thức do sương mù dày và sự suy giảm nhận thức do thời tiết xấu vì cơn mưa rào bất chợt, bộ điều khiển tính toán biên hiệu năng cao lắp trên xe vẫn đảm bảo xử lý tính toán với độ trễ siêu thấp. Hơn thế nữa, nhờ thiết kế dự phòng an toàn kép cho phép hệ thống phụ lập tức can thiệp khi máy tính chính gặp trục trặc, chiếc xe đã hoàn thành trọn vẹn hành trình lăn bánh an toàn tới đích đến.
