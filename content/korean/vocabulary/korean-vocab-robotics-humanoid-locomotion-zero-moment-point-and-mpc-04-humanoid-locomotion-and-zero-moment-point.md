<!-- source_policy: original explanations, examples, and passage; robotics-humanoid-locomotion-zero-moment-point-and-mpc terminology cross-checked conceptually, not copied -->
# 로봇공학 및 휴머노이드 보행 제어와 영모멘트점의 언어

휴머노이드보행제어 및 영모멘트점안정성 기반 역동역학모멘텀보상와 모델예측제어알고리즘 로봇공학 및 휴머노이드 보행 제어와 영모멘트점의 언어

---

### 휴머노이드보행제어

- **발음:** [휴머노이드보행제어]
- **품사:** 명사
- **핵심 의미:** 인간과 유사한 두 다리 골격 구조를 가진 이족보행 로봇이 중력, 관성력, 지면 충격을 극복하고 다양한 평지와 험지에서 넘어지지 않고 자연스럽게 걸을 수 있도록 각 관절의 토크와 각도를 실시간 조율하는 자동 제어 시스템.
- **베트남어 뜻:** Điều khiển bước đi robot dạng người Humanoid Locomotion Control (hệ thống điều khiển tự động điều phối theo thời gian thực góc quay và mô-men xoắn của từng khớp nối để robot hai chân có cấu trúc xương giống con người có thể vượt qua trọng lực, lực quán tính và xung lực mặt đất, bước đi tự nhiên vững vàng trên các địa hình bằng phẳng và gồ ghề mà không bị vấp ngã)
- **뉘앙스와 사용법:** Đỉnh cao của cơ học người máy: điều khiển một hệ thống bất định, không ổn định tự nhiên và có bậc tự do cao (Degrees of Freedom) luôn ở ranh giới giữa việc bước tiếp và sự sụp đổ.
- **재사용 가능한 콜로케이션·청크:**
  - 지능형 휴머노이드보행제어 (điều khiển bước đi robot dạng người thông minh)
  - 휴머노이드보행제어 아키텍처 (kiến trúc điều khiển bước đi robot dạng người)
  - 휴머노이드보행제어의 동적안정성 (tính ổn định động lực học của điều khiển bước đi robot dạng người)
- **자주 쓰는 문형과 성분:**
  - 휴머노이드보행제어를(를) 고도화하여 계단, 경사로, 미끄러운 빙판길에서도 안정적인 이동을 실현하다 (nâng cấp điều khiển bước đi robot dạng người để hiện thực hóa việc di chuyển ổn định trên cầu thang, đường dốc và cả mặt băng trơn trượt)
  - 휴머노이드보행제어가(이) 재난 구조 및 산업 현장에서 인간을 대체할 로봇 실용화의 핵심 전제이다 (điều khiển bước đi robot dạng người là tiền đề cốt lõi để đưa robot vào thực tế ứng dụng thay thế con người tại hiện trường công nghiệp và cứu hộ cứu nạn)
- **사회적 관계·주제별 register:** Kỹ thuật cơ điện tử (Mechatronics), động lực học robot nhiều vật, điều khiển phi tuyến.
- **예문:**
  - 보스턴 다이내믹스의 아틀라스는 탁월한 휴머노이드보행제어 기술로 백덤블링까지 완벽히 수행했다.
- **Dịch:**
  - Robot Atlas của Boston Dynamics bằng công nghệ điều khiển bước đi humanoid xuất sắc đã thực hiện hoàn hảo cả động tác nhào lộn lùi.
- **어휘 연결:**
  - 유의어: `이족보행동역학` (động lực học bước đi hai chân bipedal locomotion dynamics)
  - 관련어: `실시간관절토크제어` (điều khiển mô-men xoắn khớp thời gian thực real-time joint torque control)
- **영어 참고:** `humanoid locomotion control` — điều khiển bước đi di chuyển của robot dạng người

---

### 영모멘트점안정성

- **발음:** [영모멘트점안정썽]
- **품사:** 명사
- **핵심 의미:** 지면과 로봇 발바닥의 접촉면에서 관성력과 중력에 의해 발생하는 수평 방향 회전 모멘트(Net Horizontal Moment)의 합이 정확히 0이 되는 지점(Zero Moment Point, ZMP)이 발바닥 지지 다각형 내부에 위치해야 로봇이 넘어지지 않는다는 동적 보행 안정성의 황금률.
- **베트남어 뜻:** Tính ổn định điểm không mô-men ZMP Stability (quy tắc vàng của độ ổn định bước đi động học, khẳng định rằng điểm Zero Moment Point - nơi tổng mô-men quay theo phương nằm ngang sinh ra do lực quán tính và trọng lực tại mặt tiếp xúc giữa bàn chân robot và mặt đất bằng đúng 0 - bắt buộc phải nằm bên trong đa giác chống đỡ của bàn chân thì robot mới không bị lật ngã)
- **뉘앙스와 사용법:** Định lý nền tảng của Miomir Vukobratović (1968): biến bài toán thăng bằng phức tạp thành một điều kiện hình học đơn giản: chỉ cần giữ điểm ZMP nằm trong lòng bàn chân, robot sẽ không bao giờ ngã.
- **재사용 가능한 콜로케이션·청크:**
  - 엄격한 영모멘트점안정성 (tính ổn định điểm không mô-men nghiêm ngặt)
  - 영모멘트점안정성 판별기준 (tiêu chuẩn phán đoán tính ổn định điểm không mô-men)
  - 영모멘트점안정성의 궤적계산 (tính toán quỹ đạo của tính ổn định điểm không mô-men)
- **자주 쓰는 문형과 성분:**
  - 영모멘트점안정성을(를) 실시간으로 감시하여 발바닥 테두리로 ZMP가 이탈하는 순간 보정 토크를 발생시키다 (giám sát thời gian thực tính ổn định điểm không mô-men để phát ra mô-men hiệu chỉnh ngay khoảnh khắc điểm ZMP chực thoát ra mép bàn chân)
  - 영모멘트점안정성이(가) 충족되는 안전 영역 내에서 로봇의 질량 중심 이동 경로를 최적화하다 (tối ưu hóa đường di chuyển khối tâm của robot bên trong vùng an toàn thỏa mãn tính ổn định điểm không mô-men)
- **사회적 관계·주제별 register:** Động lực học robot cổ điển và hiện đại, lý thuyết ZMP Vukobratović, phân tích va chạm tiếp xúc.
- **예문:**
  - 혼다의 아시모(ASIMO) 로봇은 영모멘트점안정성 이론을 상용 휴머노이드에 최초로 완벽히 구현했다.
- **Dịch:**
  - Robot ASIMO của Honda là robot đầu tiên hiện thực hóa hoàn hảo lý thuyết tính ổn định điểm không mô-men trên robot humanoid thương mại.
- **어휘 연결:**
  - 유의어: `지지다각형영역` (vùng đa giác chống đỡ support polygon area)
  - 관련어: `동적평형상태` (trạng thái cân bằng động dynamic equilibrium state)
- **영어 참고:** `zero moment point stability` — độ ổn định tại điểm không mô-men xoắn ZMP

---

### 역동역학모멘텀보상

- **발음:** [역똥역학모멘텀보상]
- **품사:** 명사
- **핵심 의미:** 보행 중 발생하는 전신 각운동량(Angular Momentum)의 급격한 변화를 상쇄하기 위해 로봇의 상체, 팔, 골반 관절을 역동역학 모델에 따라 역방향으로 휘두르거나 비틀어 몸체의 기울어짐을 보정하는 모멘텀 제어 기법.
- **베트남어 뜻:** Bù động lượng động lực học nghịch Inverse Dynamics Momentum Compensation (kỹ thuật điều khiển động lượng theo mô hình động lực học nghịch, trong đó vung tay, xoay lắc xương chậu hoặc uốn thân trên theo hướng ngược lại để triệt tiêu sự thay đổi đột ngột của mô-men động lượng toàn thân phát sinh trong lúc bước đi, qua đó hiệu chỉnh độ nghiêng của thân mình)
- **뉘앙스와 사용법:** Giống hệt như con người tự nhiên vung hai tay khi đi bộ: nếu không vung tay để bù trừ mô-men xoắn, thân người sẽ bị vặn vẹo và tiêu tốn nhiều năng lượng hơn.
- **재사용 가능한 콜로케이션·청크:**
  - 정밀한 역동역학모멘텀보상 (bù động lượng động lực học nghịch chuẩn xác)
  - 역동역학모멘텀보상 알고리즘 (thuật toán bù động lượng động lực học nghịch)
  - 역동역학모멘텀보상의 자세안정화효과 (hiệu quả ổn định tư thế của việc bù động lượng động lực học nghịch)
- **자주 쓰는 문형과 성분:**
  - 역동역학모멘텀보상을(를) 통해 발을 내딛을 때 발생하는 강한 비틀림 토크를 상체 회전으로 완벽히 상쇄하다 (thông qua bù động lượng động lực học nghịch triệt tiêu hoàn hảo mô-men xoắn xoay mạnh phát sinh khi đặt chân bằng sự xoay thân trên)
  - 역동역학모멘텀보상이(가) 고속 주행이나 점프 착지 시 로봇의 전복을 방지하는 핵심 수단이다 (bù động lượng động lực học nghịch là phương thức then chốt phòng chống lật ngã robot khi chạy tốc độ cao hoặc tiếp đất sau cú nhảy)
- **사회적 관계·주제별 register:** Động lực học tính toán đa vật thể, điều khiển mô-men động lượng toàn thân, kỹ thuật chuyển động sinh học.
- **예문:**
  - 달리는 휴머노이드는 팔을 교대로 힘차게 흔드는 역동역학모멘텀보상으로 척추의 균형을 유지했다.
- **Dịch:**
  - Robot dạng người đang chạy đã duy trì sự thăng bằng của cột sống bằng việc bù động lượng động lực học nghịch vung mạnh hai tay luân phiên.
- **어휘 연결:**
  - 유의어: `각운동량보존법칙` (định luật bảo toàn mô-men động lượng conservation of angular momentum)
  - 관련어: `상체비틀림제어` (điều khiển xoắn vặn thân trên upper body twist control)
- **영어 참고:** `inverse dynamics momentum compensation` — sự bù trừ động lượng theo động lực học nghịch

---

### 모델예측제어알고리즘

- **발음:** [모델예측제어알고리즘]
- **품사:** 명사
- **핵심 의미:** 로봇의 물리적 수학 모델을 바탕으로 미래 일정 시간 구간(Prediction Horizon) 동안의 보행 궤적과 관절 상태를 실시간 예측하고, 액추에이터의 한계와 지면 접촉 제약 조건을 만족하는 최적의 제어 입력을 매 주기마다 산출하는 고급 제어 기법(Model Predictive Control, MPC).
- **베트남어 뜻:** Thuật toán điều khiển dự báo mô hình MPC (kỹ thuật điều khiển cao cấp dựa trên mô hình toán học vật lý của robot để dự báo theo thời gian thực quỹ đạo bước đi và trạng thái khớp nối trong một khoảng chân trời dự báo tương lai, đồng thời giải bài toán tối ưu hóa mỗi chu kỳ để đưa ra tín hiệu điều khiển tối ưu thỏa mãn giới hạn cơ cấu chấp hành và ràng buộc tiếp xúc mặt đất)
- **뉘앙스와 사용법:** Đưa robot từ thế "bị động đối phó khi đã ngã" sang "chủ động tính toán trước vài bước chân": giống như người đi bộ biết nhìn phía trước để căn thời điểm đặt chân an toàn.
- **재사용 가능한 콜로케이션·청크:**
  - 실시간 모델예측제어알고리즘 (thuật toán điều khiển dự báo mô hình thời gian thực)
  - 모델예측제어알고리즘 최적화 (tối ưu hóa thuật toán điều khiển dự báo mô hình)
  - 모델예측제어알고리즘의 예측구간 (khoảng chân trời dự báo của thuật toán điều khiển dự báo mô hình)
- **자주 쓰는 문형과 성분:**
  - 모델예측제어알고리즘을(를) 탑재하여 예상치 못한 바닥의 미끄러짐에도 넘어지지 않고 즉각 발을 뻗다 (trang bị thuật toán điều khiển dự báo mô hình để vươn chân ra cứu nguy tức thì mà không bị ngã ngay cả khi mặt sàn trơn trượt bất ngờ)
  - 모델예측제어알고리즘이(가) 수백 헤르츠(Hz) 주기로 2차 계획법(QP) 문제를 고속 연산하여 로봇을 유연하게 제어하다 (thuật toán điều khiển dự báo mô hình tính toán tốc độ cao bài toán quy hoạch toàn phương QP ở chu kỳ hàng trăm Hz để điều khiển robot linh hoạt)
- **사회적 관계·주제별 register:** Lý thuyết điều khiển tối ưu (Optimal Control), quy hoạch toàn phương (Quadratic Programming), thuật toán robot tự hành.
- **예문:**
  - 연구진은 GPU 가속 기반 모델예측제어알고리즘으로 휴머노이드의 반응 속도를 밀리초 단위로 단축했다.
- **Dịch:**
  - Nhóm nghiên cứu đã rút ngắn tốc độ phản ứng của robot humanoid xuống đơn vị mili giây bằng thuật toán điều khiển dự báo mô hình tăng tốc GPU.
- **어휘 연결:**
  - 유의어: `예측구간설정` (thiết lập chân trời dự báo prediction horizon setup)
  - 관련어: `이차계획법최적화` (tối ưu hóa quy hoạch toàn phương quadratic programming optimization)
- **영어 참고:** `model predictive control algorithm` — thuật toán điều khiển dự báo theo mô hình toán học

---

### 지지다각형접지면

- **발음:** [지지다각형접찌면]
- **품사:** 명사
- **핵심 의미:** 이족보행 로봇의 양 발바닥이 지면과 맞닿아 형성하는 개별 접촉 영역들과 그 둘레를 가장 바깥쪽에서 감싸는 볼록 껍질(Convex Hull)로 정의되는 기하학적 평면 구역(Support Polygon).
- **베트남어 뜻:** Mặt tiếp địa đa giác chống đỡ Support Polygon (khu vực hình học phẳng được định nghĩa bởi các vùng tiếp xúc riêng lẻ nơi hai lòng bàn chân của robot hai chân chạm đất và lớp bao lồi Convex Hull bao bọc ngoài cùng xung quanh các vùng đó)
- **뉘앙스와 사용법:** Khi hai chân cùng chạm đất (Double Support Phase), diện tích đa giác rất rộng giúp robot cực kỳ vững vàng; nhưng khi nhấc một chân lên (Single Support Phase), đa giác thu nhỏ lại chỉ bằng đúng một bàn chân khiến bài toán thăng bằng trở nên vô cùng nhạy cảm.
- **재사용 가능한 콜로케이션·청크:**
  - 안정적인 지지다각형접지면 (mặt tiếp địa đa giác chống đỡ ổn định)
  - 지지다각형접지면 축소 (thu nhỏ mặt tiếp địa đa giác chống đỡ)
  - 지지다각형접지면의 기하학적경계 (ranh giới hình học của mặt tiếp địa đa giác chống đỡ)
- **자주 쓰는 문형과 성분:**
  - 지지다각형접지면 내부의 안전 한계선 안에 질량 중심 투영점을 안정적으로 위치시키다 (đặt điểm phóng chiếu khối tâm ổn định bên trong ranh giới an toàn của mặt tiếp địa đa giác chống đỡ)
  - 지지다각형접지면이(가) 한 발 지지 구간에서 급격히 좁아지므로 고도의 동적 밸런싱이 요구된다 (vì mặt tiếp địa đa giác chống đỡ bị thu hẹp đột ngột trong giai đoạn chống đỡ một chân nên đòi hỏi khả năng giữ thăng bằng động cực cao)
- **사회적 관계·주제별 register:** Hình học tính toán trong robot, phân tích tiếp xúc chân tiếp đất, thiết kế bàn chân robot.
- **예문:**
  - 로봇은 돌멩이를 밟았을 때 지지다각형접지면의 변화를 실시간으로 재계산하여 자세를 잡았다.
- **Dịch:**
  - Khi dẫm phải hòn đá, robot đã tính toán lại sự biến đổi của mặt tiếp địa đa giác chống đỡ theo thời gian thực để ổn định tư thế.
- **어휘 연결:**
  - 유의어: `볼록껍질알고리즘` (thuật toán bao lồi convex hull algorithm)
  - 관련어: `양발지지구간` (giai đoạn chống đỡ bằng cả hai chân double support phase)
- **영어 참고:** `support polygon ground contact surface` — mặt phẳng tiếp địa đa giác chống đỡ của chân

---

### 동적보행패턴생성

- **발음:** [동적보행패턴생성]
- **품사:** 명사
- **핵심 의미:** 목표 보행 속도, 보폭, 회전 각도에 맞추어 로봇의 발바닥 착지 위치와 질량 중심(CoM)의 3차원 이동 궤적을 물리적 법칙에 맞게 실시간으로 수학적으로 합성해 내는 궤적 생성 기법(Dynamic Gait Pattern Generation).
- **베트남어 뜻:** Tạo mẫu bước đi động học Dynamic Gait Pattern Generation (kỹ thuật tổng hợp toán học theo thời gian thực quỹ đạo di chuyển 3 chiều của khối tâm CoM và vị trí tiếp đất của bàn chân robot phù hợp với các định luật vật lý dựa trên vận tốc bước đi, sải chân và góc quay mục tiêu)
- **뉘앙스와 사용법:** Sự khác biệt giữa dáng đi thô cứng như khúc gỗ và dáng đi uyển chuyển nhịp nhàng như vận động viên: thuật toán tạo mẫu thông minh giúp robot bước đi mềm mại và tiết kiệm năng lượng.
- **재사용 가능한 콜로케이션·청크:**
  - 부드러운 동적보행패턴생성 (tạo mẫu bước đi động học mượt mà)
  - 동적보행패턴생성 기법 (kỹ thuật tạo mẫu bước đi động học)
  - 동적보행패턴생성의 에너지효율 (hiệu quả năng lượng của việc tạo mẫu bước đi động học)
- **자주 쓰는 문형과 성분:**
  - 동적보행패턴생성을(를) 통해 지형의 굴곡에 맞추어 보폭과 착지 타이밍을 자율적으로 조절하다 (thông qua tạo mẫu bước đi động học tự chủ điều chỉnh thời điểm tiếp đất và sải chân phù hợp với độ mấp mô của địa hình)
  - 동적보행패턴생성이(가) 관절의 기계적 구동 한계 내에서 매끄럽게 동작하도록 최적화하다 (tối ưu hóa việc tạo mẫu bước đi động học để vận hành mượt mà bên trong giới hạn truyền động cơ học của các khớp)
- **사회적 관계·주제별 register:** Quy hoạch quỹ đạo chuyển động (Motion Planning), cơ sinh học chuyển động, điều khiển động lực học robot.
- **예문:**
  - 푸리에 급수를 활용한 동적보행패턴생성 덕분에 보행 주기가 자연스러운 곡선을 그리게 되었다.
- **Dịch:**
  - Nhờ việc tạo mẫu bước đi động học ứng dụng chuỗi Fourier, chu kỳ bước đi đã vẽ nên những đường cong tự nhiên.
- **어휘 연결:**
  - 유의어: `보폭주기최적화` (tối ưu hóa chu kỳ sải chân stride cycle optimization)
  - 관련어: `질량중심궤적합성` (tổng hợp quỹ đạo khối tâm center-of-mass trajectory synthesis)
- **영어 참고:** `dynamic gait pattern generation` — sự tạo mẫu nhịp bước đi động lực học

---

### 포획점기반자세회복

- **발음:** [포획쩜기반자세회복]
- **품사:** 명사
- **핵심 의미:** 강한 외력에 의해 밀려나 넘어지려 할 때, 로봇이 다음 발을 정확히 어디에 딛어야 몸의 운동에너지를 소산시키고 완벽히 정지할 수 있는지를 나타내는 ‘포획점(Capture Point)’을 계산하여 발을 뻗어 넘어짐을 방지하는 자세 복원 기술.
- **베트남어 뜻:** Phục hồi tư thế dựa trên điểm bắt Capture Point (công nghệ khôi phục tư thế chống ngã bằng cách tính toán điểm bắt Capture Point - điểm vị trí chính xác mà robot phải đặt bàn chân kế tiếp xuống để tiêu tán toàn bộ động năng và dừng hẳn cơ thể lại khi bị ngoại lực mạnh đẩy chực ngã)
- **뉘앙스와 사용법:** Jerry Pratt (2006) phát minh: giống hệt phản xạ tự nhiên của con người khi bị ai đó xô mạnh từ phía sau, ta tự động bước nhanh một bước dài về phía trước để không bị ngã dập mặt.
- **재사용 가능한 콜로케이션·청크:**
  - 신속한 포획점기반자세회복 (phục hồi tư thế dựa trên điểm bắt nhanh chóng)
  - 포획점기반자세회복 알고리즘 (thuật toán phục hồi tư thế dựa trên điểm bắt)
  - 포획점기반자세회복의 착지오차 (sai số tiếp đất của phục hồi tư thế dựa trên điểm bắt)
- **자주 쓰는 문형과 성분:**
  - 포획점기반자세회복을(를) 가동하여 등 뒤에서 가해진 강한 충격에도 넘어지지 않고 안정적으로 한 발을 내딛다 (kích hoạt phục hồi tư thế dựa trên điểm bắt để bước vững một chân về phía trước không bị ngã ngay cả khi chịu cú va đập mạnh từ sau lưng)
  - 포획점기반자세회복이(가) 외란의 크기에 따라 발목 전략, 엉덩이 전략, 스텝 전략을 순차적으로 선택하다 (phục hồi tư thế dựa trên điểm bắt lựa chọn tuần tự chiến lược cổ chân, chiến lược hông và chiến lược bước chân tùy theo độ lớn của nhiễu loạn)
- **사회적 관계·주제별 register:** Kỹ thuật chống ngã của robot (Fall Prevention), điều khiển phục hồi va đập, cân bằng động lực học phản xạ.
- **예문:**
  - 로봇은 외부 밀침을 당하자마자 포획점기반자세회복 알고리즘으로 발을 뻗어 즉시 균형을 되찾았다.
- **Dịch:**
  - Ngay khi bị xô đẩy từ bên ngoài, robot đã vươn chân ra bằng thuật toán phục hồi tư thế dựa trên điểm bắt và lập tức lấy lại thăng bằng.
- **어휘 연결:**
  - 유의어: `외란회복스텝전략` (chiến lược bước chân phục hồi nhiễu loạn disturbance recovery step strategy)
  - 관련어: `운동에너지소산` (tiêu tán động năng kinetic energy dissipation)
- **영어 참고:** `capture point-based posture recovery` — sự phục hồi tư thế dựa trên điểm đón bắt vị trí chân

---

### 전신협응제어기법

- **발음:** [전신협응제어기뻡]
- **품사:** 명사
- **핵심 의미:** 발목, 무릎, 고관절의 하체뿐만 아니라 허리, 팔, 목 등 수십 개의 자유도를 가진 로봇의 전신 관절을 우선순위 기반 다중 목표 작업(Whole-Body Control, WBC) 체계로 통합하여 동시에 제어하는 최적화 기법.
- **베트남어 뜻:** Kỹ thuật điều khiển phối hợp toàn thân Whole-Body Control WBC (kỹ thuật tối ưu hóa điều khiển tích hợp đồng thời các khớp toàn thân của robot với hàng chục bậc tự do không chỉ gồm phần thân dưới như cổ chân, đầu gối, khớp háng mà cả eo lưng, cánh tay, cổ theo hệ thống nhiệm vụ đa mục tiêu dựa trên thứ tự ưu tiên)
- **뉘앙스와 사용법:** Phân cấp ưu tiên thông minh: Ưu tiên 1 là không được ngã (giữ thăng bằng ZMP), Ưu tiên 2 là không va chạm chướng ngại vật, Ưu tiên 3 là bưng bê đồ vật trên tay; các khớp sẽ phối hợp hài hòa để phục vụ cả 3 mục tiêu cùng lúc.
- **재사용 가능한 콜로케이션·청크:**
  - 계층적 전신협응제어기법 (kỹ thuật điều khiển phối hợp toàn thân có phân tầng)
  - 전신협응제어기법 적용 (áp dụng kỹ thuật điều khiển phối hợp toàn thân)
  - 전신협응제어기법의 작업우선순위 (thứ tự ưu tiên tác vụ của kỹ thuật điều khiển phối hợp toàn thân)
- **자주 쓰는 문형과 성분:**
  - 전신협응제어기법을(를) 활용하여 무거운 짐을 들고 계단을 오르면서도 균형을 잃지 않도록 모든 관절을 조율하다 (tận dụng kỹ thuật điều khiển phối hợp toàn thân điều phối mọi khớp nối để không mất thăng bằng ngay cả khi bê vác vật nặng leo cầu thang)
  - 전신협응제어기법이(가) 하체 보행과 상체 작업(Manipulation)을 하나의 유기적 프레임워크로 통합하다 (kỹ thuật điều khiển phối hợp toàn thân tích hợp bước đi thân dưới và thao tác tay thân trên thành một khung làm việc hữu cơ duy nhất)
- **사회적 관계·주제별 register:** Điều khiển robot toàn thân (Whole-Body Control), tối ưu hóa thứ bậc (Hierarchical Optimization), robot hình người đa năng.
- **예문:**
  - 연구진은 전신협응제어기법을 통해 로봇이 문을 열면서 동시에 방 안으로 걸어 들어가게 만들었다.
- **Dịch:**
  - Nhóm nghiên cứu thông qua kỹ thuật điều khiển phối hợp toàn thân đã làm cho robot vừa mở cửa vừa bước đi vào trong phòng cùng một lúc.
- **어휘 연결:**
  - 유의어: `계층적작업공간제어` (điều khiển không gian tác vụ phân tầng hierarchical task-space control)
  - 관련어: `모바일조작기술` (công nghệ thao tác di động mobile manipulation technology)
- **영어 참고:** `whole-body coordinated control technique` — kỹ thuật điều khiển phối hợp toàn thân robot

---

### 지면반력센서측정

- **발음:** [지면반력센서측정]
- **품사:** 명사
- **핵심 의미:** 로봇의 발바닥 내부나 발목 관절에 탑재된 6축 힘/토크 센서(F/T Sensor)를 통해 지면으로부터 가해지는 수직 항력, 마찰력, 회전 토크를 실시간으로 정밀 계측하는 감각 데이터 수집 과정.
- **베트남어 뜻:** Đo cảm biến phản lực mặt đất Ground Reaction Force GRF Measurement (quá trình thu thập dữ liệu cảm giác đo lường chuẩn xác theo thời gian thực phản lực pháp tuyến, lực ma sát và mô-men xoắn từ mặt đất tác động lên thông qua cảm biến lực/mô-men 6 trục tích hợp bên trong lòng bàn chân hoặc khớp cổ chân robot)
- **뉘앙스와 사용법:** Cảm giác xúc giác của bàn chân: tương tự như lòng bàn chân con người cảm nhận được mặt đất đang cứng hay mềm, dốc hay phẳng, giúp bộ điều khiển tức thời thích nghi lực đạp chân.
- **재사용 가능한 콜로케이션·청크:**
  - 실시간 지면반력센서측정 (đo cảm biến phản lực mặt đất thời gian thực)
  - 지면반력센서측정 오차보정 (hiệu chỉnh sai số đo cảm biến phản lực mặt đất)
  - 지면반력센서측정의 주파수응답 (đáp ứng tần số của việc đo cảm biến phản lực mặt đất)
- **자주 쓰는 문형과 성분:**
  - 지면반력센서측정을(를) 통해 발바닥이 지면에 완전히 밀착되었는지를 감지하고 착지 충격을 흡수하다 (thông qua đo cảm biến phản lực mặt đất cảm nhận xem lòng bàn chân đã bám sát hoàn toàn mặt đất chưa và hấp thụ xung lực tiếp đất)
  - 지면반력센서측정 데이터가(이) 실제 ZMP 위치를 오차 없이 역산하는 핵심 기초 정보로 사용된다 (dữ liệu đo cảm biến phản lực mặt đất được sử dụng làm thông tin cơ sở cốt lõi để tính nghịch đảo vị trí ZMP thực tế không sai số)
- **사회적 관계·주제별 register:** Kỹ thuật cảm biến lực/mô-men, hệ thống đo lường tiếp xúc, phản hồi xúc giác robot.
- **예문:**
  - 발목의 고정밀 지면반력센서측정 덕분에 로봇은 미끄러운 바닥을 즉각 감지할 수 있었다.
- **Dịch:**
  - Nhờ phép đo cảm biến phản lực mặt đất độ chính xác cao ở cổ chân, robot đã có thể cảm nhận ngay tức thì mặt sàn trơn trượt.
- **어휘 연결:**
  - 유의어: `육축힘토크센서` (cảm biến lực mô-men xoắn 6 trục 6-axis F/T sensor)
  - 관련어: `수직항력분포` (phân bố phản lực pháp tuyến normal force distribution)
- **영어 참고:** `ground reaction force sensor measurement` — phép đo cảm biến phản lực từ mặt đất

---

### 도립진자단순화모델

- **발음:** [도립진자단순화모델]
- **품사:** 명사
- **핵심 의미:** 복잡한 다관절 로봇 전체를 하나의 단일 질점(Mass Point)과 질량이 없는 가상의 신축 다리로 치환한 선형 도립진자(Linear Inverted Pendulum Model, LIPM)로 단순화하여, 복잡한 보행 동역학 방정식을 초고속으로 실시간 해석할 수 있게 해주는 물리적 근사 모델.
- **베트남어 뜻:** Mô hình con lắc ngược đơn giản hóa Linear Inverted Pendulum Model LIPM (mô hình xấp xỉ vật lý thay thế toàn bộ robot đa khớp phức tạp thành một chất điểm khối lượng duy nhất và một chân ảo đàn hồi không khối lượng, giúp giải phương trình động lực học bước đi phức tạp với tốc độ cực nhanh theo thời gian thực)
- **뉘앙스와 사용법:** Bí quyết giúp máy tính tính toán kịp thời gian thực: biến hệ phương trình vi phân phi tuyến bậc 30 thành một phương trình tuyến tính bậc hai đơn giản có thể giải trong vài micro giây.
- **재사용 가능한 콜로케이션·청크:**
  - 선형 도립진자단순화모델 (mô hình con lắc ngược đơn giản hóa tuyến tính)
  - 도립진자단순화모델 적용 (áp dụng mô hình con lắc ngược đơn giản hóa)
  - 도립진자단순화모델의 근사오차 (sai số xấp xỉ của mô hình con lắc ngược đơn giản hóa)
- **자주 쓰는 문형과 성분:**
  - 도립진자단순화모델을(를) 활용하여 질량 중심의 높이를 일정하게 유지하면서 수평 보행 궤적을 신속히 생성하다 (tận dụng mô hình con lắc ngược đơn giản hóa để tạo nhanh quỹ đạo bước đi ngang trong khi vẫn duy trì độ cao khối tâm cố định)
  - 도립진자단순화모델이(가) 계산 복잡도를 획기적으로 낮추어 저사양 프로세서에서도 보행 제어를 가능케 하다 (mô hình con lắc ngược đơn giản hóa cắt giảm đột phá độ phức tạp tính toán cho phép điều khiển bước đi ngay cả trên bộ xử lý cấu hình thấp)
- **사회적 관계·주제별 register:** Cơ học mô hình hóa robot, xấp xỉ hệ động lực, lý thuyết con lắc ngược tuyến tính.
- **예문:**
  - 대부분의 이족보행 로봇은 초기 궤적 생성 시 도립진자단순화모델을 기본 프레임워크로 채택한다.
- **Dịch:**
  - Đa số robot bước đi hai chân khi tạo quỹ đạo ban đầu đều áp dụng mô hình con lắc ngược đơn giản hóa làm khung làm việc cơ bản.
- **어휘 연결:**
  - 유의어: `선형도립진자모델` (mô hình con lắc ngược tuyến tính linear inverted pendulum model LIPM)
  - 관련어: `질점단순화가설` (giả thuyết đơn giản hóa chất điểm point-mass assumption)
- **영어 참고:** `inverted pendulum simplified model` — mô hình đơn giản hóa con lắc ngược

---

### 유연관절액추에이터

- **발음:** [유연관절액추에이터]
- **품사:** 명사
- **핵심 의미:** 모터와 감속기 사이에 탄성 스프링이나 토션 바를 내장하여 외부 충격을 기계적으로 흡수하고 에너지 저장 및 방출을 통해 인간의 근육과 힘줄처럼 탄력적으로 작동하는 직렬 탄성 액추에이터(Series Elastic Actuator, SEA).
- **베트남어 뜻:** Cơ cấu chấp hành khớp nối linh hoạt Series Elastic Actuator SEA (bộ truyền động tích hợp lò xo đàn hồi hoặc thanh xoắn giữa động cơ và hộp giảm tốc để hấp thụ xung lực cơ học từ bên ngoài và hoạt động đàn hồi như cơ bắp gân cốt của con người thông qua tích trữ và giải phóng năng lượng)
- **뉘앙스와 사용법:** Khắc phục nhược điểm giòn gãy của khớp kim loại cứng nhắc: giúp robot khi bước mạnh xuống đất không bị mẻ răng hộp số mà tận dụng độ nảy của lò xo để bật tiếp bước sau.
- **재사용 가능한 콜로케이션·청크:**
  - 고탄성 유연관절액추에이터 (cơ cấu chấp hành khớp nối linh hoạt độ đàn hồi cao)
  - 유연관절액추에이터 설계 (thiết kế cơ cấu chấp hành khớp nối linh hoạt)
  - 유연관절액추에이터의 충격흡수력 (lực hấp thụ xung lực của cơ cấu chấp hành khớp nối linh hoạt)
- **자주 쓰는 문형과 성분:**
  - 유연관절액추에이터를(를) 무릎과 발목 관절에 장착하여 착지 충격을 완화하고 보행 에너지 효율을 극대화하다 (lắp đặt cơ cấu chấp hành khớp nối linh hoạt vào khớp gối và cổ chân để giảm nhẹ xung lực tiếp đất và tối đa hóa hiệu suất năng lượng bước đi)
  - 유연관절액추에이터가(이) 인간과의 물리적 충돌 시 부드럽게 굴절되어 안전성을 획기적으로 향상시키다 (cơ cấu chấp hành khớp nối linh hoạt uốn gập mềm mại khi va chạm vật lý với con người giúp nâng cao đột phá tính an toàn)
- **사회적 관계·주제별 register:** Phần cứng cơ cấu chấp hành robot, kỹ thuật cơ học đàn hồi, robot an toàn tương tác người.
- **예문:**
  - 최신 재난 구조 로봇은 험지 낙하 충격을 견디기 위해 전신에 유연관절액추에이터를 적용했다.
- **Dịch:**
  - Robot cứu hộ cứu nạn tối tân đã áp dụng cơ cấu chấp hành khớp nối linh hoạt toàn thân để chịu được va đập rơi ngã ở địa hình hiểm trở.
- **어휘 연결:**
  - 유의어: `직렬탄성구동기` (bộ truyền động đàn hồi nối tiếp series elastic actuator SEA)
  - 관련어: `기계적충격완충` (giảm chấn xung lực cơ học mechanical shock cushioning)
- **영어 참고:** `series elastic compliant joint actuator` — bộ truyền động khớp nối đàn hồi linh hoạt

---

### 충격흡수보행적응

- **발음:** [충격흡쑤보행저긍]
- **품사:** 명사
- **핵심 의미:** 발이 지면에 닿는 순간 발생하는 순간적인 고충격 지면반력(Impact Force)을 무릎 굽힘과 능동 임피던스 제어(Active Impedance Control)를 통해 부드럽게 분산시키며 전복을 방지하는 보행 적응 알고리즘.
- **베트남어 뜻:** Thích ứng bước đi hấp thụ xung lực (thuật toán thích nghi bước đi phân tán êm dịu xung lực phản lực mặt đất đột ngột cực mạnh phát sinh khoảnh khắc bàn chân chạm đất thông qua khuỵu gối và điều khiển trở kháng chủ động Active Impedance Control nhằm phòng chống lật ngã robot)
- **뉘앙스와 사용법:** Mô phỏng tư thế chùng chân của vận động viên nhảy xa khi tiếp đất: biến lực va đập phá hủy thành năng lượng biến dạng có kiểm soát.
- **재사용 가능한 콜로케이션·청크:**
  - 능동적 충격흡수보행적응 (thích ứng bước đi hấp thụ xung lực chủ động)
  - 충격흡수보행적응 메커니즘 (cơ chế thích ứng bước đi hấp thụ xung lực)
  - 충격흡수보행적응의 제어성능 (tính năng điều khiển của thích ứng bước đi hấp thụ xung lực)
- **자주 쓰는 문형과 성분:**
  - 충격흡수보행적응을(를) 통해 단단한 아스팔트와 푹신한 모래사장 모두에서 일정한 보행 리듬을 유지하다 (thông qua thích ứng bước đi hấp thụ xung lực duy trì nhịp bước đi ổn định trên cả đường nhựa cứng lẫn bãi cát mềm)
  - 충격흡수보행적응이(가) 발바닥 착지 순간의 고주파 진동을 상쇄하여 카메라 센서의 영상 흔들림을 막아내다 (thích ứng bước đi hấp thụ xung lực triệt tiêu dao động tần số cao khoảnh khắc chạm đất giúp chống rung hình ảnh cảm biến camera)
- **사회적 관계·주제별 register:** Điều khiển trở kháng lực (Impedance Control), cơ chế giảm chấn thích ứng, kỹ thuật robot công trường.
- **예문:**
  - 로봇은 비탈길을 내려올 때 충격흡수보행적응 제어를 작동시켜 관절 파손을 방지했다.
- **Dịch:**
  - Khi đi xuống dốc, robot đã kích hoạt điều khiển thích ứng bước đi hấp thụ xung lực để ngăn ngừa hư hỏng khớp nối.
- **어휘 연결:**
  - 유의어: `능동임피던스제어` (điều khiển trở kháng chủ động active impedance control)
  - 관련어: `착지충격력분산` (phân tán lực xung kích tiếp đất landing impact force dissipation)
- **영어 참고:** `shock-absorbing gait adaptation` — sự thích ứng bước đi hấp thụ xung lực va chạm

---

### 질량중심궤적최적화

- **발음:** [질량중심궤적최적화]
- **품사:** 명사
- **핵심 의미:** 로봇 전체 질량의 중심점(Center of Mass, CoM)이 이동하는 3차원 공간 곡선을 에너지 소모 최소화, ZMP 안정성 여유도 극대화, 액추에이터 토크 한계 등을 만족하도록 수학적 수치 최적화 기법을 통해 설계하는 절차.
- **베트남어 뜻:** Tối ưu hóa quỹ đạo khối tâm CoM Trajectory Optimization (quy trình thiết kế đường cong không gian 3 chiều nơi trọng tâm toàn bộ khối lượng robot CoM di chuyển bằng các kỹ thuật tối ưu hóa số học nhằm thỏa mãn tối thiểu hóa tiêu hao năng lượng, tối đa hóa biên độ an toàn ZMP và giới hạn mô-men xoắn cơ cấu chấp hành)
- **뉘앙스와 사용법:** Tìm ra "đường cong duyên dáng nhất" cho chuyển động của robot: không bị giật cục, không lắc lư lãng phí năng lượng, tối ưu như tư thế của một vũ công ballet.
- **재사용 가능한 콜로케이션·청크:**
  - 수학적 질량중심궤적최적화 (tối ưu hóa quỹ đạo khối tâm bằng toán học)
  - 질량중심궤적최적화 기법 (kỹ thuật tối ưu hóa quỹ đạo khối tâm)
  - 질량중심궤적최적화의 연산속도 (tốc độ tính toán của tối ưu hóa quỹ đạo khối tâm)
- **자주 쓰는 문형과 성분:**
  - 질량중심궤적최적화를(를) 통해 보행 중 배터리 소모량을 30% 이상 절감하고 보행 지속 시간을 늘리다 (nhờ tối ưu hóa quỹ đạo khối tâm cắt giảm hơn 30% lượng tiêu hao pin trong lúc bước đi và kéo dài thời gian di chuyển liên tục)
  - 질량중심궤적최적화가(이) 험난한 바위 지형에서도 로봇이 중심을 잃지 않도록 안전한 이동 경로를 제시하다 (tối ưu hóa quỹ đạo khối tâm đề xuất đường di chuyển an toàn để robot không mất trọng tâm ngay cả trên địa hình đá gập ghềnh)
- **사회적 관계·주제별 register:** Tối ưu hóa quỹ đạo phi tuyến (Trajectory Optimization), thuật toán tìm kiếm tối ưu vi phân, động lực학 năng lượng.
- **예문:**
  - 연구팀은 직접 연산법(Direct Collocation)을 이용한 질량중심궤적최적화로 동적 점프 동작을 생성했다.
- **Dịch:**
  - Nhóm nghiên cứu đã tạo động tác nhảy động học bằng tối ưu hóa quỹ đạo khối tâm sử dụng phương pháp trực tiếp (Direct Collocation).
- **어휘 연결:**
  - 유의어: `비선형동적최적화` (tối ưu hóa động lực học phi tuyến nonlinear dynamic optimization)
  - 관련어: `배터리소모최소화` (tối thiểu hóa tiêu hao pin battery consumption minimization)
- **영어 참고:** `center-of-mass trajectory optimization` — sự tối ưu hóa quỹ đạo của trọng tâm khối lượng

---

### 외란외력극복제어

- **발음:** [외란외력극뽁제어]
- **품사:** 명사
- **핵심 의미:** 갑작스러운 측면 밀침, 바닥의 돌발 턱, 강풍 등 모델링에 포함되지 않은 예상치 못한 외부 방해 요소(Disturbance)가 유입되었을 때, 신속한 관측기(Disturbance Observer, DOB)를 통해 외력을 추정하고 반대 방향 보정 토크를 인가하여 넘어짐을 방지하는 강인 제어 기법.
- **베트남어 뜻:** Điều khiển khắc phục ngoại lực nhiễu loạn Robust Disturbance Rejection Control (kỹ thuật điều khiển bền vững phòng chống ngã bằng cách sử dụng bộ quan sát nhiễu DOB ước tính nhanh chóng ngoại lực khi xuất hiện các yếu tố quấy rối bên ngoài bất ngờ không có trong mô hình như cú xô ngang bất ngờ, gờ đất đột ngột, gió mạnh và áp đặt mô-men hiệu chỉnh ngược hướng)
- **뉘앙스와 사용법:** Thước đo bản lĩnh của robot ngoài đời thực: robot trong phòng thí nghiệm hoàn hảo nhưng ra đường bị người đi bộ huých nhẹ là ngã nếu thiếu thuật toán này.
- **재사용 가능한 콜로케이션·청크:**
  - 강인한 외란외력극복제어 (điều khiển khắc phục ngoại lực nhiễu loạn bền vững)
  - 외란외력극복제어 성능평가 (đánh giá tính năng điều khiển khắc phục ngoại lực nhiễu loạn)
  - 외란외력극복제어의 응답시간 (thời gian đáp ứng của điều khiển khắc phục ngoại lực nhiễu loạn)
- **자주 쓰는 문형과 성분:**
  - 외란외력극복제어를(를) 탑재하여 사람이 강하게 발로 차도 쓰러지지 않고 오뚝이처럼 중심을 잡다 (trang bị điều khiển khắc phục ngoại lực nhiễu loạn để ngay cả khi bị người đạp mạnh vẫn không ngã mà lấy lại thăng bằng như con lật đật)
  - 외란외력극복제어가(이) 강풍이 부는 재난 현장에서 로봇의 안전한 임무 수행을 보장하는 방패가 되다 (điều khiển khắc phục ngoại lực nhiễu loạn là tấm lá chắn bảo đảm việc thực thi nhiệm vụ an toàn của robot tại hiện trường bão gió thiên tai)
- **사회적 관계·주제별 register:** Lý thuyết điều khiển bền vững (Robust Control Theory), bộ quan sát nhiễu (DOB), an toàn cơ học robot.
- **예문:**
  - 그 사족보행 로봇은 빙판길에서 미끄러지는 순간 외란외력극복제어로 다리를 재배치해 넘어짐을 피했다.
- **Dịch:**
  - Robot bốn chân đó ngay khoảnh khắc trượt trên đường băng đã tránh bị ngã bằng cách tái bố trí chân nhờ điều khiển khắc phục ngoại lực nhiễu loạn.
- **어휘 연결:**
  - 유의어: `외란관측기기법` (kỹ thuật bộ quan sát nhiễu loạn disturbance observer DOB)
  - 관련어: `강인제어이론` (lý thuyết điều khiển bền vững robust control theory)
- **영어 참고:** `disturbance rejection robust control` — điều khiển bền vững loại trừ và khắc phục ngoại lực quấy nhiễu

---

### 발디딤위치보정기

- **발음:** [발디딤위치보정기]
- **품사:** 명사
- **핵심 의미:** 보행 주기 중 유각기(Swing Phase)에 있는 공중의 발이 착지할 지점의 3차원 좌표를, 몸체의 흔들림 속도와 지형의 시각 센서 측정값을 결합하여 착지 직전 밀리초 단위로 미세 수정하는 보행 보정 제어 모듈(Footstep Placement Modifier).
- **베트남어 뜻:** Bộ hiệu chỉnh vị trí đặt chân Footstep Placement Modifier (mô-đun điều khiển hiệu chỉnh bước đi thực hiện việc vi chỉnh ở đơn vị mili giây ngay trước khi tiếp đất tọa độ 3 chiều của điểm đặt chân trong không trung đang ở pha vung chân Swing Phase, kết hợp giữa vận tốc rung lắc của thân mình và giá trị đo cảm biến thị giác địa hình)
- **뉘앙스와 사용법:** Điểm khác biệt giữa việc dẫm phải bẫy và bước đi an toàn: mắt robot nhìn thấy mép hố và não robot lập tức điều chỉnh bàn chân đặt lệch sang bên vài centimet để tiếp đất vững chãi.
- **재사용 가능한 콜로케이션·청크:**
  - 정밀한 발디딤위치보정기 (bộ hiệu chỉnh vị trí đặt chân chuẩn xác)
  - 발디딤위치보정기 알고리즘 (thuật toán bộ hiệu chỉnh vị trí đặt chân)
  - 발디딤위치보정기의 반응속도 (tốc độ phản ứng của bộ hiệu chỉnh vị trí đặt chân)
- **자주 쓰는 문형과 성분:**
  - 발디딤위치보정기를(를) 가동하여 계단의 모서리를 밟아 미끄러질 위험을 사전에 차단하다 (vận hành bộ hiệu chỉnh vị trí đặt chân để ngăn chặn từ sớm nguy cơ dẫm phải mép bậc cầu thang dẫn tới trượt chân)
  - 발디딤위치보정기가(이) 비전 센서 기반의 3D 지형 지도와 결합하여 징검다리 보행을 성공시키다 (bộ hiệu chỉnh vị trí đặt chân kết hợp với bản đồ địa hình 3D cảm biến thị giác giúp thực hiện thành công bước đi trên đá tảng)
- **사회적 관계·주제별 register:** Thị giác máy tính dẫn đường robot (Visual Servoing), lập kế hoạch tiếp đất, kỹ thuật robot vượt địa hình.
- **예문:**
  - 로봇은 발디딤위치보정기를 통해 불규칙한 돌계단을 완벽히 인식하고 안전하게 한 걸음씩 올라갔다.
- **Dịch:**
  - Robot thông qua bộ hiệu chỉnh vị trí đặt chân đã nhận biết hoàn hảo các bậc đá bất quy tắc và bước lên an toàn từng bước một.
- **어휘 연결:**
  - 유의어: `유각기궤적수정` (sửa đổi quỹ đạo pha vung chân swing phase trajectory modification)
  - 관련어: `시각센서지형인식` (nhận thức địa hình bằng cảm biến thị giác visual terrain perception)
- **영어 참고:** `footstep placement modifier` — bộ hiệu chỉnh và điều chỉnh vị trí đặt bàn chân

---

## 단원 종합 읽기 자료: 로봇공학 및 휴머노이드 보행 제어와 영모멘트점의 언어
<!-- passage_word_count: 105 Korean eojeol; target_set: 휴머노이드보행제어, 영모멘트점안정성, 역동역학모멘텀보상, 모델예측제어알고리즘, 지지다각형접지면, 동적보행패턴생성, 포획점기반자세회복, 전신협응제어기법, 지면반력센서측정, 도립진자단순화모델, 유연관절액추에이터, 충격흡수보행적응, 질량중심궤적최적화, 외란외력극복제어, 발디딤위치보정기 -->
차세대 지능형 로봇 연구팀은 비정형 복합 지형에서의 자율 안정 보행을 실현하고자 휴머노이드보행제어 제어 아키텍처 시스템을 정밀하게 설계하고 영모멘트점안정성 판별 기준을 적용해 실시간 보행 궤적을 계산했다. 울퉁불퉁한 비평탄 지면 착지 충격을 완화하기 위해 역동역학모멘텀보상 기법과 모델예측제어알고리즘 통합 피드백 제어를 성공적으로 구현했다. 로봇의 두 발이 지면에 밀착하여 형성하는 지지다각형접지면 경계를 고속으로 감지하여 능동적 동적보행패턴생성 효율을 극대화했다. 보행 중 거센 외력으로 균형이 무너질 때 포획점기반자세회복 제어를 즉각 가동하고 상하체 관절의 전신협응제어기법 적용을 통해 넘어짐 방지 안정성을 확보했다. 지면반력센서측정 물리 수치와 도립진자단순화모델 예측값을 정밀 비교 분석하고 유연관절액추에이터 구동으로 충격흡수보행적응 성능을 입증했다. 수학적 최적화를 거친 질량중심궤적최적화 기법 적용으로 극한 외란외력극복제어 성능을 완성하고 정밀 발디딤위치보정기 작동을 통해 험지 계단 보행을 완수했다.

**베트남어 번역:**
Nhóm nghiên cứu robot thông minh thế hệ mới nhằm hiện thực hóa bước đi ổn định tự hành trên địa hình phức hợp phi định hình đã thiết kế chuẩn xác hệ thống điều khiển bước đi robot dạng người humanoid và áp dụng tiêu chuẩn phán đoán tính ổn định điểm không mô men ZMP để tính toán quỹ đạo bước đi theo thời gian thực. Nhằm giảm nhẹ xung lực tiếp đất trên mặt đất gồ ghề không bằng phẳng, họ đã hiện thực hóa thành công điều khiển phản hồi tích hợp giữa kỹ thuật bù động lượng động lực học nghịch và thuật toán điều khiển dự báo mô hình MPC. Cảm nhận tốc độ cao ranh giới mặt tiếp địa đa giác chống đỡ do hai bàn chân robot bám sát mặt đất tạo thành, họ đã tối đa hóa hiệu suất tạo mẫu bước đi động một cách chủ động. Khi thăng bằng bị phá vỡ do ngoại lực dữ dội trong lúc bước đi, họ đã kích hoạt ngay lập tức điều khiển phục hồi tư thế dựa trên điểm bắt Capture Point và bảo đảm độ ổn định chống vấp ngã thông qua việc áp dụng kỹ thuật điều khiển phối hợp toàn thân các khớp thân trên và dưới. So sánh phân tích chuẩn xác trị số vật lý đo cảm biến phản lực mặt đất với giá trị dự báo mô hình con lắc ngược đơn giản hóa, họ đã chứng minh tính năng thích ứng bước đi hấp thụ xung lực nhờ dẫn động cơ cấu chấp hành khớp nối linh hoạt. Nhờ áp dụng kỹ thuật tối ưu hóa quỹ đạo khối tâm đã qua tối ưu hóa toán học, họ đã hoàn thiện tính năng điều khiển khắc phục ngoại lực nhiễu loạn cực hạn và hoàn thành việc bước đi trên cầu thang địa hình hiểm trở thông qua sự vận hành bộ hiệu chỉnh vị trí đặt chân chuẩn xác.
