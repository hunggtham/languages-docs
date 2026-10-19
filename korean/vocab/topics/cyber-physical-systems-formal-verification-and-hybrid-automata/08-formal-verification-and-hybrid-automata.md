# 사이버물리시스템 및 하이브리드 오토마타와 정형 검증의 언어

사이버물리시스템(CPS), 하이브리드 오토마타(Hybrid Automata), 도달 가능성 분석(Reachability Analysis), 모델 체킹(Model Checking), 시간 논리(LTL/CTL) 및 안전성 보장 무결성 검증을 다루는 소프트웨어공학 핵심 어휘

## 학습 안내
이 단원은 고급 한국어 학습자(B2-C2)가 학술적, 전문적 맥락에서 해당 분야의 핵심 개념을 심층적으로 이해하고 구사할 수 있도록 설계되었습니다. 각 표제어의 발음, 품사, 핵심 의미, 베트남어 대역어, 뉘앙스와 사용법, 재사용 가능한 콜로케이션, 자주 쓰는 문형, 등록(register), 예문과 번역, 어휘 연결, 영어 참고 표현을 꼼꼼하게 학습하십시오. 마지막 종합 예문을 통해 15개 핵심 어휘가 유기적으로 연결된 전문 담화를 확인하십시오.

## 핵심 어휘

### 사이버물리시스템정형기법검증

- **발음:** [사이버물리시스템정형기법검증]
- **품사:** 명사
- **핵심 의미:** 연속적인 물리 법칙(미분 방정식)과 이산적인 소프트웨어 연산(상태 기계)이 긴밀히 상호작용하는 사이버물리시스템(CPS)의 신뢰성과 안전성을 엄밀한 수학적 논리 증명을 통해 무결하게 검증하는 정형 기법
- **베트남어 뜻:** kiểm chứng phương pháp hình thức hệ thống thực-ảo CPS (kỹ thuật phương pháp hình thức kiểm chứng toán học nghiêm ngặt tính đúng đắn, độ tin cậy và sự an toàn tuyệt đối của hệ thống thực-ảo Cyber-Physical Systems CPS, nơi các định luật vật lý biến thiên liên tục mô tả bằng phương trình vi phân và các phép toán phần mềm điều khiển rời rạc mô tả bằng máy trạng thái tương tác chặt chẽ với nhau)
- **뉘앙스와 사용법:** 단순한 테스트나 시뮬레이션의 '부분적 정상 작동' 확인을 넘어, 임의의 극단적 환경과 입력값에서도 시스템이 안전 사양을 100% 만족함을 수학적으로 보증하는 무결점 공학의 정점이다.
- **재사용 가능한 콜로케이션·청크:**
  - 사이버물리시스템정형기법검증을 수행하다 (tiến hành kiểm chứng phương pháp hình thức hệ thống thực-ảo)
  - 엄격한 사이버물리시스템정형기법검증 (kiểm chứng phương pháp hình thức hệ thống thực-ảo nghiêm ngặt)
  - 정형기법검증도구체계 (hệ thống công cụ kiểm chứng phương pháp hình thức)
- **자주 쓰는 문형과 성분:**
  - 철도 신호 제어기의 안전 필수 소프트웨어에 사이버물리시스템정형기법검증을 적용하다 (áp dụng kiểm chứng phương pháp hình thức hệ thống thực-ảo vào phần mềm quan yếu an toàn của bộ điều khiển tín hiệu đường sắt)
  - 사이버물리시스템정형기법검증을 통해 물리 액추에이터의 시간 지연으로 인한 불안정성을 사전에 입증하다 (chứng minh trước sự bất ổn định do độ trễ thời gian của cơ cấu chấp hành vật lý thông qua kiểm chứng phương pháp hình thức CPS)
- **사회적 관계·주제별 register:** 소프트웨어공학, 임베디드시스템정형검증, 무결성보증시스템(DO-178C/ISO 26262) 전문 논문.
- **예문:** 항공 전자 제어 유닛 개발 프로젝트는 사이버물리시스템정형기법검증을 필수 프로세스로 채택하여 제어 루프의 시간 데드라인 위반 가능성을 원천 배제했다.
- **Dịch:** Dự án phát triển khối điều khiển điện tử hàng không đã áp dụng việc kiểm chứng phương pháp hình thức hệ thống thực-ảo CPS như một quy trình bắt buộc, loại trừ tận gốc khả năng vi phạm thời hạn trễ deadline của vòng điều khiển.
- **어휘 연결:**
  - 하이브리드오토마타도달가능성분석 (phân tích tính tới được của automata lai - phương pháp toán học nòng cốt của kiểm chứng CPS)
  - 선형시상논리안전성성질모델체킹 (kiểm tra mô hình tính chất an toàn logic thời gian tuyến tính LTL - ngôn ngữ đặc tả kiểm chứng)
- **영어 참고:** cyber-physical systems formal methods verification / kiểm chứng toán học bằng phương pháp hình thức cho các hệ thống thực-ảo CPS tích hợp vật lý và phần mềm

---

### 하이브리드오토마타도달가능성분석

- **발음:** [하이브리드오토마타도달가능성분석]
- **품사:** 명사
- **핵심 의미:** 이산 모드 전이와 연속 미분 방정식을 결합한 하이브리드 오토마타(Hybrid Automata) 모델에서, 시스템의 초기 상태 집합으로부터 시간에 따라 진화하여 도달할 수 있는 모든 연속 상태 집합을 기하학적 폴리토프나 조너토프로 과근사하여 위험 영역과의 교집합 유무를 판정하는 정형 분석
- **베트남어 뜻:** phân tích tính tới được của automata lai (phương pháp phân tích hình thức trên mô hình Automata lai kết hợp các bước chuyển mode rời rạc và phương trình vi phân liên tục, bằng cách xấp xỉ bao bọc xấp xỉ trên toàn bộ tập hợp trạng thái liên tục có thể đạt tới theo thời gian từ tập trạng thái khởi đầu dưới dạng đa diện lồi polytope hoặc zonotope, nhằm phán đoán xem có giao cắt với vùng trạng thái nguy hiểm hay không)
- **뉘앙스와 사용법:** 시간의 흐름에 따라 변화하는 복잡한 물리 궤적이 결코 충돌이나 과열과 같은 '치명적 위험 영역'에 닿지 않음을 수학적 기하 집합으로 둘러싸 증명하는 정형 안전성의 핵심 기둥이다.
- **재사용 가능한 콜로케이션·청크:**
  - 하이브리드오토마타도달가능성분석을 실행하다 (thực thi phân tích tính tới được của automata lai)
  - 정밀한 하이브리드오토마타도달가능성분석 (phân tích tính tới được của automata lai chuẩn xác)
  - 조너토프기반도달가능집합 (tập hợp trạng thái tới được dựa trên hình zonotope)
- **자주 쓰는 문형과 성분:**
  - 위험 상태와의 교집합이 공집합임을 증명하기 위해 하이브리드오토마타도달가능성분석을 수행하다 (tiến hành phân tích tính tới được của automata lai để chứng minh phần giao với trạng thái nguy hiểm là tập rỗng)
  - 연속 시간 적분을 조너토프 연산으로 치환하여 하이브리드오토마타도달가능성분석의 계산 복잡도를 대폭 낮추다 (giảm mạnh độ phức tạp tính toán của phân tích tính tới được automata lai bằng cách thay thế tích phân thời gian liên tục bằng các phép toán zonotope)
- **사회적 관계·주제별 register:** 자동제어이론, 정형검증소프트웨어공학, 하이브리드시스템수학 전문 논문.
- **예문:** 연구팀은 자율 드론의 충돌 회피 알고리즘에 하이브리드오토마타도달가능성분석을 적용하여 돌발 돌풍 환경에서도 드론의 궤적이 장애물 영역에 절대 진입하지 않음을 입증했다.
- **Dịch:** Nhóm nghiên cứu đã áp dụng phân tích tính tới được của automata lai vào thuật toán tránh va chạm của drone tự hành, chứng minh quỹ đạo bay của drone tuyệt đối không đi vào vùng chướng ngại vật ngay cả trong môi trường gió giật bất ngờ.
- **어휘 연결:**
  - 사이버물리시스템정형기법검증 (kiểm chứng phương pháp hình thức hệ thống thực-ảo CPS - phạm trù tổng quát)
  - 상태공간폭발문제추상화완화기법 (kỹ thuật giảm tải trừu tượng hóa bùng nổ không gian trạng thái - giải quyết thách thức tính toán của phân tích tính tới được)
- **영어 참고:** hybrid automata reachability analysis / phân tích tính tới được hình thức trên mô hình automata lai để bảo đảm an toàn chuyển dịch trạng thái

---

### 선형시상논리안전성성질모델체킹

- **발음:** [선형시상논리안전성성질모델체킹]
- **품사:** 명사
- **핵심 의미:** 시간의 흐름에 따른 시스템 실행 경로의 특성을 표현하는 선형 시상 논리(LTL)를 이용하여 '나쁜 일은 결코 일어나지 않는다'는 안전성 성질(Safety property)을 정량적·논리적으로 명세하고, 시스템 상태 그래프의 모든 경로가 이를 위반하는지 뷔히 오토마타(Büchi Automata) 교집합 연산으로 자동 탐색하는 모델 검증 기법
- **베트남어 뜻:** kiểm tra mô hình tính chất an toàn bằng logic thời gian tuyến tính LTL (kỹ thuật kiểm tra mô hình tự động model checking sử dụng logic thời gian tuyến tính LTL để đặc tả định lượng và logic cho tính chất an toàn khẳng định rằng điều xấu sẽ không bao giờ xảy ra, sau đó tự động tìm kiếm trên toàn bộ các lộ trình của đồ thị trạng thái hệ thống xem có vi phạm hay không thông qua phép toán giao giữa các automata Büchi)
- **뉘앙스와 사용법:** 버그가 존재하는 단 하나의 예외적 실행 경로라도 놓치지 않고 잡아내어 '반례(Counterexample)' 형태로 개발자에게 정확히 들이미는 가차 없는 정형 버그 헌터이다.
- **재사용 가능한 콜로케이션·청크:**
  - 선형시상논리안전성성질모델체킹을 도입하다 (áp dụng kiểm tra mô hình tính chất an toàn bằng logic thời gian tuyến tính)
  - 자동화된 선형시상논리안전성성질모델체킹 (kiểm tra mô hình tính chất an toàn bằng LTL tự động hóa)
  - 뷔히오토마타반례생성 (tạo phản ví dụ bằng automata Büchi)
- **자주 쓰는 문형과 성분:**
  - 선형시상논리안전성성질모델체킹을 수행하여 원자로 비상 냉각 시스템 사양의 상호 배제 위반 경로를 검출하다 (thực hiện kiểm tra mô hình tính chất an toàn LTL để phát hiện lộ trình vi phạm điều kiện loại trừ lẫn nhau của hệ thống làm mát khẩn cấp lò phản ứng hạt nhân)
  - LTL 안전성 공식을 오토마타로 변환한 후 선형시상논리안전성성질모델체킹을 통해 미탐된 데드락을 식별하다 (chuyển đổi công thức an toàn LTL thành automata rồi xác định các điểm bế tắc deadlock tiềm ẩn qua kiểm tra mô hình LTL)
- **사회적 관계·주제별 register:** 정형명세및검증, 컴퓨터과학이론, 시간논리시스템 모델체킹 전문 학술지.
- **예문:** 의료용 인공호흡기 소프트웨어는 선형시상논리안전성성질모델체킹을 거침으로써 어떠한 센서 결함 시나리오에서도 밸브가 동시 차단되는 치명적 반례가 존재하지 않음을 수학적으로 입증했다.
- **Dịch:** Phần mềm máy thở y tế thông qua việc kiểm tra mô hình tính chất an toàn bằng logic thời gian tuyến tính LTL đã chứng minh về mặt toán học rằng không tồn tại bất kỳ phản ví dụ chí mạng nào khiến cả hai van cùng đóng trong mọi kịch bản lỗi cảm biến.
- **어휘 연결:**
  - 실시간임베디드소프트웨어데드락검출 (phát hiện deadlock phần mềm nhúng thời gian thực - bài toán điển hình kiểm tra bằng LTL)
  - 상태공간폭발문제추상화완화기법 (kỹ thuật giảm tải trừu tượng hóa bùng nổ không gian trạng thái - tối ưu hóa quy mô đồ thị trạng thái LTL)
- **영어 참고:** linear temporal logic safety property model checking / kiểm tra mô hình các tính chất an toàn hệ thống bằng logic thời gian tuyến tính LTL

---

### 상태공간폭발문제추상화완화기법

- **발음:** [상태공간폭발문제추상화완화기법]
- **품사:** 명사
- **핵심 의미:** 검증 대상 시스템의 변수와 동시성 프로세스 수가 증가함에 따라 도달 가능한 전체 상태의 수가 지수 함수적으로 급증하는 '상태 공간 폭발(State-space explosion)'을 극복하기 위해, 술어 추상화(Predicate abstraction), 대칭성 감축, 부분 순서 환원(Partial order reduction) 등을 적용하여 계산 규모를 압축하는 정형 기법
- **베트남어 뜻:** kỹ thuật giảm tải trừu tượng hóa vấn đề bùng nổ không gian trạng thái (phương pháp hình thức nén quy mô tính toán nhằm khắc phục hiện tượng bùng nổ không gian trạng thái state-space explosion, trong đó số lượng trạng thái tới được gia tăng theo hàm số mũ khi số biến và tiến trình đồng thời tăng lên, bằng cách áp dụng trừu tượng hóa vị từ predicate abstraction, thu gọn tính đối xứng và rút gọn thứ tự bộ phận partial order reduction)
- **뉘앙스와 사용법:** 정형 검증의 실용화를 가로막는 가장 거대한 수학적 장벽인 '지수적 폭발'을 우회하여 무한하거나 방대한 물리 상태를 유한하고 다루기 쉬운 핵심 논리 집합으로 압축하는 마법 같은 렌즈이다.
- **재사용 가능한 콜로케이션·청크:**
  - 상태공간폭발문제추상화완화기법을 구현하다 (hiện thực hóa kỹ thuật giảm tải trừu tượng hóa vấn đề bùng nổ không gian trạng thái)
  - 효과적인 상태공간폭발문제추상화완화기법 (kỹ thuật giảm tải trừu tượng hóa bùng nổ không gian trạng thái hiệu quả)
  - 술어추상화기반반례안내정제 (tinh chỉnh dựa trên phản ví dụ CEGAR bằng trừu tượng hóa vị từ)
- **자주 쓰는 문형과 성분:**
  - 상태공간폭발문제추상화완화기법을 적용하여 10의 20승에 달하는 시스템 상태를 단 몇천 개의 추상 상태로 축약하다 (áp dụng kỹ thuật giảm tải trừu tượng hóa bùng nổ không gian trạng thái để cô đọng 10^20 trạng thái hệ thống xuống chỉ còn vài nghìn trạng thái trừu tượng)
  - 부분 순서 환원과 대칭성 검증을 병합한 상태공간폭발문제추상화완화기법으로 대규모 병렬 통신 프로토콜을 성공적으로 검증하다 (kiểm chứng thành công giao thức truyền thông song song quy mô lớn nhờ kỹ thuật giảm tải kết hợp rút gọn thứ tự bộ phận và đối xứng)
- **사회적 관계·주제별 register:** 정형검증컴파일러공학, 알고리즘복잡도이론, 대규모소프트웨어분석 전문 논문.
- **예문:** 복잡한 다중 코어 통신 버스 검증에 상태공간폭발문제추상화완화기법을 도입한 결과, 메모리 고갈 없이 48시간 만에 정형 증명을 완료할 수 있었다.
- **Dịch:** Nhờ đưa kỹ thuật giảm tải trừu tượng hóa vấn đề bùng nổ không gian trạng thái vào việc kiểm chứng bus truyền thông đa lõi phức tạp, các kỹ sư đã hoàn tất chứng minh hình thức chỉ trong 48 giờ mà không bị cạn kiệt bộ nhớ.
- **어휘 연결:**
  - 선형시상논리안전성성질모델체킹 (kiểm tra mô hình tính chất an toàn LTL - lĩnh vực hưởng lợi trực tiếp từ giảm tải trạng thái)
  - 하이브리드오토마타도달가능성분석 (phân tích tính tới được của automata lai - kỹ thuật tương đồng trong không gian liên tục)
- **영어 참고:** state-space explosion abstraction relaxation technique / kỹ thuật trừu tượng hóa và giản lược nhằm giải quyết bài toán bùng nổ không gian trạng thái trong kiểm tra mô hình

---

### 제어장벽함수전진불변성보장제어

- **발음:** [제어장벽함수전진불변성보장제어]
- **품사:** 명사
- **핵심 의미:** 비선형 동적 시스템의 상태 공간 내에서 안전 집합(Safe set)의 경계로 갈수록 무한대 또는 0으로 수렴하는 스칼라 함수(CBF)를 정의하고, 리야푸노프 유사 조건을 만족하도록 제어 입력을 2차 계획법(QP)으로 실시간 필터링하여 시스템 궤적의 '전진 불변성(Forward invariance)'을 엄격히 보장하는 안전 제어 기법
- **베트남어 뜻:** điều khiển bảo đảm tính bất biến thuận hàm rào cản điều khiển CBF (kỹ thuật điều khiển an toàn xác định hàm vô hướng rào cản điều khiển CBF tiệm cận về vô cùng hoặc bằng 0 tại ranh giới tập hợp an toàn trong không gian trạng thái phi tuyến, lọc thời gian thực tín hiệu điều khiển bằng quy hoạch toàn phương QP thỏa mãn điều kiện tựa Lyapunov để bảo đảm nghiêm ngặt tính bất biến thuận forward invariance của quỹ đạo hệ thống)
- **뉘앙스와 사용법:** 기존 성능 최적화 제어기(예: MPC)가 내린 명령이라도 안전 경계를 침범하려 하면 즉각 개입하여 궤적을 튕겨내는 '수학적으로 증명된 보이지 않는 역장' 역할을 수행한다.
- **재사용 가능한 콜로케이션·청크:**
  - 제어장벽함수전진불변성보장제어를 설계하다 (thiết kế điều khiển bảo đảm tính bất biến thuận bằng hàm rào cản điều khiển)
  - 실시간 제어장벽함수전진불변성보장제어 (điều khiển bảo đảm tính bất biến thuận bằng hàm rào cản điều khiển thời gian thực)
  - 이차계획법기반안전필터 (bộ lọc an toàn dựa trên quy hoạch toàn phương QP)
- **자주 쓰는 문형과 성분:**
  - 명목 제어 명령에 제어장벽함수전진불변성보장제어를 안전 필터로 결합하여 충돌 방지 제어를 구현하다 (kết hợp điều khiển bảo đảm tính bất biến thuận CBF làm bộ lọc an toàn vào lệnh điều khiển danh định để hiện thực hóa kiểm soát chống va chạm)
  - 제어장벽함수전진불변성보장제어를 통해 외란이 존재하는 환경에서도 시스템 상태가 안전 집합 내에 영구 잔류함을 입증하다 (chứng minh trạng thái hệ thống lưu lại vĩnh viễn trong tập hợp an toàn ngay cả trong môi trường có nhiễu nhờ CBF)
- **사회적 관계·주제별 register:** 비선형제어이론, 로봇모션안전제어, 최적제어이차계획법(QP) 전문 학술지.
- **예문:** 보행 로봇의 보행 주기 생성기에 제어장벽함수전진불변성보장제어를 결합함으로써, 외부 충격이 가해지는 돌발 상황에서도 로봇이 안전 지지 다각형을 벗어나지 않도록 보장했다.
- **Dịch:** Bằng việc tích hợp điều khiển bảo đảm tính bất biến thuận bằng hàm rào cản điều khiển CBF vào bộ sinh chu kỳ bước đi của robot chân đốt, hệ thống đã bảo đảm robot không bao giờ vượt ra ngoài đa giác hỗ trợ an toàn ngay cả trong tình huống va đập bất ngờ.
- **어휘 연결:**
  - 하이브리드시스템불변집합안전보장 (bảo đảm an toàn tập bất biến hệ thống lai - nền tảng lý thuyết tập hợp tương ứng)
  - 무결성보증안전필터런타임모니터링 (giám sát thời gian thực bộ lọc an toàn bảo đảm tính toàn vẹn - cơ chế triển khai thực tế của CBF)
- **영어 참고:** control barrier function forward invariance guarantee control / phương pháp điều khiển sử dụng hàm rào cản CBF bảo đảm tính bất biến thuận và an toàn nghiêm ngặt

---

### 연속동역학이산제어상태전이모델

- **발음:** [연속동역학이산제어상태전이모델]
- **품사:** 명사
- **핵심 의미:** 위치, 속도, 전압 등 시간의 흐름에 따라 연속적으로 변화하는 물리적 플랜트 동역학(미분 방정식)과 소프트웨어 논리 기반의 이산 사건(Discrete events)에 따른 유한 상태 천이(State transitions)를 단일 수학 프레임워크로 통합 표현한 하이브리드 제어 모델
- **베트남어 뜻:** mô hình chuyển trạng thái điều khiển rời rạc động lực học liên tục (mô hình điều khiển lai tích hợp biểu diễn trong một khung toán học thống nhất giữa động lực học đối tượng vật lý biến thiên liên tục theo thời gian như vị trí, vận tốc, điện áp mô tả bằng phương trình vi phân và các bước chuyển trạng thái hữu hạn theo sự kiện rời rạc dựa trên logic phần mềm)
- **뉘앙스와 사용법:** 아날로그 물리 세계의 연속성과 디지털 마이크로프로세서의 이산성이 맞물리는 경계면을 수학적 왜곡 없이 한 몸으로 묶어내는 하이브리드 CPS 모델링의 정수이다.
- **재사용 가능한 콜로케이션·청크:**
  - 연속동역학이산제어상태전이모델을 구축하다 (xây dựng mô hình chuyển trạng thái điều khiển rời rạc động lực học liên tục)
  - 정교한 연속동역학이산제어상태전이모델 (mô hình chuyển trạng thái điều khiển rời rạc động lực học liên tục tinh vi)
  - 모드스위칭가드조건 (điều kiện chốt guard chuyển mạch mode)
- **자주 쓰는 문형과 성분:**
  - 연속동역학이산제어상태전이모델을 통하여 엔진 스로틀 개폐와 변속기 단수 변경 사이의 과도 현상을 해석하다 (phân tích hiện tượng quá độ giữa việc đóng mở bướm ga động cơ và chuyển cấp số hộp số thông qua mô hình trạng thái điều khiển rời rạc động lực học liên tục)
  - 가드 조건과 리셋 사상을 정의하여 연속동역학이산제어상태전이모델의 제논 현상 발생 여부를 검토하다 (kiểm tra khả năng phát sinh hiện tượng Zeno của mô hình chuyển trạng thái điều khiển rời rạc động lực học liên tục bằng cách định nghĩa điều kiện guard và ánh xạ reset)
- **사회적 관계·주제별 register:** 하이브리드시스템이론, 임베디드제어기설계, 다물체동역학소프트웨어 전문 논문.
- **예문:** 연구진은 인공위성의 궤도 제어 시스템을 연속동역학이산제어상태전이모델로 공식화하여, 자세 제어 스러스터의 펄스 분사와 태양광 패널의 연속 회전 운동을 동시 검증했다.
- **Dịch:** Nhóm nghiên cứu đã công thức hóa hệ thống điều khiển quỹ đạo vệ tinh bằng mô hình chuyển trạng thái điều khiển rời rạc động lực học liên tục, qua đó đồng thời kiểm chứng chuyển động phun xung của động cơ đẩy tư thế và chuyển động quay liên tục của tấm pin mặt trời.
- **어휘 연결:**
  - 하이브리드오토마타도달가능성분석 (phân tích tính tới được của automata lai - phương pháp giải tích áp dụng trực tiếp trên mô hình này)
  - 사이버물리시스템정형기법검증 (kiểm chứng phương pháp hình thức hệ thống thực-ảo CPS - đối tượng nghiên cứu cốt lõi)
- **영어 참고:** continuous dynamics discrete control state transition model / mô hình hóa tích hợp giữa động lực học liên tục của vật lý và sự chuyển trạng thái rời rạc của bộ điều khiển

---

### 동등성검증정형수학적증명엔진

- **발음:** [동등성검증정형수학적증명엔진]
- **품사:** 명사
- **핵심 의미:** 고수준 알고리즘 명세와 컴파일/합성을 거쳐 생성된 저수준 하드웨어 기술 언어(RTL) 또는 실행 머신 코드 사이의 입출력 및 상태 동작이 모든 가능한 입력에 대해 수학적으로 완벽히 동등함을 자동 입증하는 SMT(만족도 모듈로 이론) 기반 정형 증명 엔진
- **베트남어 뜻:** công cụ chứng minh toán học hình thức kiểm chứng tương đương (bộ máy chứng minh hình thức dựa trên công nghệ SMT Satisfiability Modulo Theories nhằm tự động chứng minh tính tương đương toán học hoàn hảo về hành vi trạng thái và vào-ra đối với mọi đầu vào khả dĩ giữa bản đặc tả thuật toán mức cao và ngôn ngữ mô tả phần cứng mức thấp RTL hoặc mã máy thực thi sau biên dịch và tổng hợp)
- **뉘앙스와 사용법:** 컴파일러의 최적화 버그나 하드웨어 합성 오류로 인해 원본 설계 의도가 미세하게 왜곡되는 참사를 원천 차단하는 반도체 및 미션 크리티컬 소프트웨어의 수학적 품질 보증인이다.
- **재사용 가능한 콜로케이션·청크:**
  - 동등성검증정형수학적증명엔진을 가동하다 (vận hành công cụ chứng minh toán học hình thức kiểm chứng tương đương)
  - 고성능 동등성검증정형수학적증명엔진 (công cụ chứng minh toán học hình thức kiểm chứng tương đương hiệu năng cao)
  - 회로합성전후동등성입증 (chứng minh tính tương đương trước và sau tổng hợp mạch logic)
- **자주 쓰는 문형과 성분:**
  - 동등성검증정형수학적증명엔진을 활용하여 컴파일러의 공격적 코드 최적화가 안전 불변성을 훼손하지 않았음을 증명하다 (chứng minh quá trình tối ưu hóa mã quyết liệt của trình biên dịch không làm tổn hại đến tính bất biến an toàn bằng công cụ chứng minh tương đương)
  - 조합 회로와 순차 회로의 상태 공간에 동등성검증정형수학적증명엔진을 적용하여 하드웨어 트로이목마 삽입 여부를 판정하다 (xác định xem có bị chèn mã độc phần cứng Trojan hay không bằng cách áp dụng bộ máy chứng minh tương đương lên không gian trạng thái mạch logic)
- **사회적 관계·주제별 register:** 전자설계자동화(EDA), 반도체VLSI설계검증, 정형증명도구(SMT/SAT) 전문 서적.
- **예문:** 군용 암호화 프로세서의 RTL 설계 단계에서 동등성검증정형수학적증명엔진을 적용한 결과, 수학적 사양과 게이트 레벨 네트리스트 간의 100% 기능 동등성을 증명해냈다.
- **Dịch:** Ở giai đoạn thiết kế RTL của bộ vi xử lý mã hóa quân sự, việc áp dụng công cụ chứng minh toán học hình thức kiểm chứng tương đương đã chứng minh được tính tương đương chức năng 100% giữa đặc tả toán học và netlist mức cổng logic.
- **어휘 연결:**
  - 계약기반설계사양명세합성기법 (kỹ thuật tổng hợp đặc tả thiết kế dựa trên hợp đồng - bảo đảm đặc tả ban đầu trước khi kiểm chứng tương đương)
  - 실시간임베디드소프트웨어데드락검출 (phát hiện deadlock phần mềm nhúng thời gian thực - một dạng bài toán phân tích tính đúng đắn bổ trợ)
- **영어 참고:** equivalence checking formal mathematical proof engine / bộ máy chứng minh toán học hình thức kiểm tra tính tương đương chức năng giữa thiết kế logic và mã sinh ra

---

### 실시간임베디드소프트웨어데드락검출

- **발음:** [실시간임베디드소프트웨어데드락검출]
- **품사:** 명사
- **핵심 의미:** 다중 스레드 또는 멀티태스킹 환경에서 구동되는 실시간 임베디드 시스템에서, 세마포어, 뮤텍스 등 한정된 공유 자원을 둘러싼 태스크들 간의 순환 대기(Circular wait) 조건으로 인해 시스템이 영구 정지하는 교착 상태(Deadlock)를 정형 모델 체킹과 정적 분석으로 탐지하는 기법
- **베트남어 뜻:** phát hiện deadlock phần mềm nhúng thời gian thực (kỹ thuật phát hiện tình trạng bế tắc vĩnh viễn deadlock của hệ thống nhúng thời gian thực chạy trong môi trường đa luồng hoặc đa nhiệm, phát sinh do điều kiện chờ vòng tròn giữa các tác vụ tranh chấp tài nguyên chia sẻ hữu hạn như semaphore hoặc mutex, thông qua phương pháp kiểm tra mô hình hình thức và phân tích tĩnh)
- **뉘앙스와 사용법:** 화성 탐사선 패스파인더호의 유명한 우선순위 역전 및 시스템 마비 사태처럼, 단 한 번의 자원 대기 꼬임으로 전체 임무가 수포로 돌아가는 치명적 임베디드 결함을 런타임 전에 사전에 박멸하는 진단 기술이다.
- **재사용 가능한 콜로케이션·청크:**
  - 실시간임베디드소프트웨어데드락검출을 수행하다 (tiến hành phát hiện deadlock phần mềm nhúng thời gian thực)
  - 정적분석기반 실시간임베디드소프트웨어데드락검출 (phát hiện deadlock phần mềm nhúng thời gian thực dựa trên phân tích tĩnh)
  - 우선순위역전현상해소 (giải quyết hiện tượng đảo ngược mức ưu tiên priority inversion)
- **자주 쓰는 문형과 성분:**
  - 공유 자원 접근 그래프를 정형화하여 실시간임베디드소프트웨어데드락검출의 위양성 오류를 제거하다 (loại bỏ lỗi dương tính giả trong phát hiện deadlock phần mềm nhúng thời gian thực bằng cách hình thức hóa đồ thị truy cập tài nguyên chia sẻ)
  - 우선순위 상속 프로토콜이 올바르게 구현되었는지 확인하고자 실시간임베디드소프트웨어데드락검출 도구를 실행하다 (chạy công cụ phát hiện deadlock phần mềm nhúng thời gian thực nhằm xác nhận xem giao thức kế thừa ưu tiên có được cài đặt đúng đắn hay không)
- **사회적 관계·주제별 register:** 임베디드시스템OS, 실시간소프트웨어공학, 동시성프로그래밍분석 전문 학술지.
- **예문:** 항공 제어용 RTOS에 탑재된 모든 태스크의 락(Lock) 획득 순서를 추적하여 실시간임베디드소프트웨어데드락검출을 수행한 결과, 잠재적 순환 대기 경로 3건을 사전에 제거했다.
- **Dịch:** Bằng cách truy vết trình tự chiếm dụng khóa lock của tất cả các tác vụ cài đặt trên hệ điều hành thời gian thực RTOS điều khiển máy bay để phát hiện deadlock phần mềm nhúng thời gian thực, các kỹ sư đã loại bỏ trước 3 lộ trình chờ vòng tròn tiềm ẩn.
- **어휘 연결:**
  - 선형시상논리안전성성질모델체킹 (kiểm tra mô hình tính chất an toàn LTL - công cụ tự động phát hiện deadlock bằng tính chất liveness/safety)
  - 무결성보증안전필터런타임모니터링 (giám sát thời gian thực bộ lọc an toàn - cơ chế phát hiện và giải cứu khi xảy ra hiện tượng treo máy)
- **영어 참고:** real-time embedded software deadlock detection / kỹ thuật phát hiện bế tắc khóa luồng tài nguyên trong phần mềm nhúng thời gian thực

---

### 사이버물리공격침입탐지복원력제어

- **발음:** [사이버물리공격침입탐지복원력제어]
- **품사:** 명사
- **핵심 의미:** 스마트 그리드나 플랜트 등 사이버물리시스템에 침투한 악의적 공격자가 센서 측정값을 조작(False data injection)하거나 제어 명령을 가로채는 상황에서, 물리 상태 추정 오차를 분석하여 침입을 신속히 탐지하고 공격 감염된 채널을 격리하여 잔여 안전 제어력을 복원하는 방어 제어 기법
- **베트남어 뜻:** điều khiển phục hồi và phát hiện xâm nhập tấn công mạng-vật lý CPS (kỹ thuật điều khiển phòng thủ trong trường hợp kẻ tấn công độc hại thâm nhập vào các hệ thống thực-ảo như lưới điện thông minh hoặc nhà máy công nghiệp để làm sai lệch giá trị đo cảm biến tấn công chèn dữ liệu giả hoặc đánh chặn lệnh điều khiển, bằng cách phân tích sai số ước lượng trạng thái vật lý để phát hiện nhanh chóng sự xâm nhập và cô lập các kênh bị nhiễm độc nhằm phục hồi năng lực điều khiển an toàn còn lại)
- **뉘앙스와 사용법:** 전통적인 IT 방화벽이 뚫리더라도 물리 법칙(질량/에너지 보존)에 어긋나는 센서 변조를 즉각 알아차려 시스템이 스턱스넷 같은 물리적 파괴로 치닫는 것을 차단하는 사이버-물리 융합 보안 방패이다.
- **재사용 가능한 콜로케이션·청크:**
  - 사이버물리공격침입탐지복원력제어를 구축하다 (thiết lập điều khiển phục hồi và phát hiện xâm nhập tấn công mạng-vật lý)
  - 지능형 사이버물리공격침입탐지복원력제어 (điều khiển phục hồi và phát hiện xâm nhập tấn công mạng-vật lý thông minh)
  - 거짓데이터주입공격탐지 (phát hiện tấn công chèn dữ liệu giả False Data Injection)
- **자주 쓰는 문형과 성분:**
  - 칼만 필터 잔차의 통계적 검정을 통해 사이버물리공격침입탐지복원력제어 알고리즘의 민감도를 극대화하다 (tối đa hóa độ nhạy của thuật toán điều khiển phục hồi và phát hiện xâm nhập CPS thông qua kiểm định thống kê phần dư của bộ lọc Kalman)
  - 공격에 노출된 분산 제어 노드를 실시간 재구성하여 사이버물리공격침입탐지복원력제어의 안정성을 유지하다 (duy trì tính ổn định của điều khiển phục hồi và phát hiện xâm nhập CPS bằng cách tái cấu trúc thời gian thực các nút điều khiển phân tán bị tấn công)
- **사회적 관계·주제별 register:** 제어시스템보안, 스마트그리드방호기술, 사이버물리보안공학 전문 보고서.
- **예문:** 원자력 발전소 제어망 모의 침투 시험에서 사이버물리공격침입탐지복원력제어 시스템은 조작된 냉각수 밸브 센서 신호를 2초 내에 탐지하고 백업 제어 모드로 안전하게 전환했다.
- **Dịch:** Trong thử nghiệm thâm nhập mô phỏng mạng điều khiển nhà máy điện hạt nhân, hệ thống điều khiển phục hồi và phát hiện xâm nhập tấn công mạng-vật lý đã phát hiện tín hiệu cảm biến van làm mát bị làm giả trong vòng 2 giây và chuyển đổi an toàn sang chế độ điều khiển dự phòng.
- **어휘 연결:**
  - 산업용제어시스템보안취약점정형분석 (phân tích hình thức lỗ hổng bảo mật hệ thống điều khiển công nghiệp - xác định bề mặt tấn công để lập thiết kế phòng thủ)
  - 무결성보증안전필터런타임모니터링 (giám sát thời gian thực bộ lọc an toàn bảo đảm tính toàn vẹn - cơ chế thực thi phòng thủ ở tầng runtime)
- **영어 참고:** cyber-physical attack intrusion detection resilient control / hệ thống phát hiện xâm nhập và điều khiển phục hồi chống tấn công mạng trong hệ thống thực-ảo CPS

---

### 통계적모델체킹몬테카를로시뮬레이션

- **발음:** [통계적모델체킹몬테카를로시뮬레이션]
- **품사:** 명사
- **핵심 의미:** 상태 공간이 무한하거나 비선형 확률적 잡음이 포함되어 결정론적 정형 검증이 불가능한 복잡한 사이버물리시스템에 대해, 몬테카를로 확률 시뮬레이션 샘플링과 가설 검정(순차 확률비 검정 SPRT)을 결합하여 통계적 신뢰도 하에서 확률적 시상 논리(PCTL) 사양 만족도를 검증하는 기법
- **베트남어 뜻:** kiểm tra mô hình thống kê mô phỏng Monte Carlo (phương pháp kiểm chứng mô hình áp dụng cho các hệ thống thực-ảo CPS phức tạp có không gian trạng thái vô hạn hoặc chứa nhiễu ngẫu nhiên phi tuyến khiến kiểm chứng hình thức tất định không thể thực hiện được, bằng cách kết hợp lấy mẫu mô phỏng xác suất Monte Carlo với kiểm định giả thuyết thống kê tỷ số xác suất tuần tự SPRT để xác minh mức độ thỏa mãn đặc tả logic thời gian xác suất PCTL dưới độ tin cậy thống kê định lượng)
- **뉘앙스와 사용법:** 수학적으로 완벽한 절대 증명이 불가능한 초대규모 확률 동역학 시스템에 대해, 엄밀한 통계적 가설 검정을 통해 '99.999% 안전하다'는 신뢰할 수 있는 수학적 보증서를 발행하는 실용적 정형 검증의 대안이다.
- **재사용 가능한 콜로케이션·청크:**
  - 통계적모델체킹몬테카를로시뮬레이션을 적용하다 (áp dụng kiểm tra mô hình thống kê mô phỏng Monte Carlo)
  - 대규모 샘플 기반 통계적모델체킹몬테카를로시뮬레이션 (kiểm tra mô hình thống kê mô phỏng Monte Carlo dựa trên tập mẫu quy mô lớn)
  - 순차확률비검정가설수렴 (sự hội tụ giả thuyết kiểm định tỷ số xác suất tuần tự SPRT)
- **자주 쓰는 문형과 성분:**
  - 확률적 시상 논리 명세를 검증하기 위해 통계적모델체킹몬테카를로시뮬레이션의 샘플 궤적 수를 동적으로 결정하다 (xác định động số lượng quỹ đạo mẫu của kiểm tra mô hình thống kê mô phỏng Monte Carlo để kiểm chứng đặc tả logic thời gian xác suất PCTL)
  - 통계적모델체킹몬테카를로시뮬레이션을 거쳐 자율주행 차량의 교차로 충돌 확률이 허용 임계치 미만임을 증명하다 (chứng minh xác suất va chạm giao lộ của xe tự hành thấp hơn ngưỡng cho phép thông qua kiểm tra mô hình thống kê Monte Carlo)
- **사회적 관계·주제별 register:** 확률시스템정형검증, 신뢰성공학, 몬테카를로통계시뮬레이션 전문 논문.
- **예문:** 항공기 기상 레이더 연동 회피 제어 알고리즘은 통계적모델체킹몬테카를로시뮬레이션을 통해 100만 회의 난류 비행 시나리오에서 99.999% 이상의 안전 도달률을 성공적으로 입증했다.
- **Dịch:** Thuật toán điều khiển tránh chướng ngại liên kết radar thời tiết của máy bay thông qua việc kiểm tra mô hình thống kê mô phỏng Monte Carlo đã chứng minh thành công tỷ lệ đạt an toàn trên 99,999% qua 1 triệu kịch bản bay trong dòng khí rối.
- **어휘 연결:**
  - 상태공간폭발문제추상화완화기법 (kỹ thuật giảm tải trừu tượng hóa bùng nổ không gian trạng thái - giải pháp thay thế khi trạng thái nổ vô hạn)
  - 자율주행차량제어기정형안전검증 (kiểm chứng an toàn hình thức bộ điều khiển xe tự hành - ứng dụng thực tế phân tích xác suất rủi ro)
- **영어 참고:** statistical model checking Monte Carlo simulation / phương pháp kiểm tra mô hình thống kê kết hợp mô phỏng ngẫu nhiên Monte Carlo cho hệ thống CPS xác suất

---

### 무결성보증안전필터런타임모니터링

- **발음:** [무결성보증안전필터런타임모니터링]
- **품사:** 명사
- **핵심 의미:** 신경망 제어기 등 정형 검증이 어려운 복잡한 AI 기반 주 제어기가 출력하는 액추에이터 명령을 실시간 감시(Runtime monitoring)하여, 시스템의 사전 정의된 안전 외피(Safety envelope)를 벗어나려 할 때 즉각 명명된 제어 입력을 무효화하고 안전 폴백(Fallback) 제어기를 개입시키는 무결성 방호 아키텍처
- **베트남어 뜻:** giám sát thời gian thực bộ lọc an toàn bảo đảm tính toàn vẹn (kiến trúc phòng hộ an toàn giám sát thời gian thực runtime monitoring các lệnh cơ cấu chấp hành xuất ra từ bộ điều khiển chính phức tạp dựa trên trí tuệ nhân tạo như mạng nơ-ron khó kiểm chứng hình thức, nhằm lập tức vô hiệu hóa lệnh điều khiển chỉ định và kích hoạt bộ điều khiển an toàn dự phòng fallback can thiệp ngay khi hệ thống có nguy cơ vượt ra ngoài vỏ bọc an toàn safety envelope đã định sẵn)
- **뉘앙스와 사용법:** ‘믿을 수 없지만 똑똑한 블랙박스 AI 조종사’ 곁에 ‘단순하지만 수학적으로 증명된 안전 감시관’을 배치하여, AI가 엉뚱한 결정을 내리는 즉시 조종간을 빼앗아 대형 사고를 막아내는 이중 안전망이다.
- **재사용 가능한 콜로케이션·청크:**
  - 무결성보증안전필터런타임모니터링 체계를 가동하다 (vận hành hệ thống giám sát thời gian thực bộ lọc an toàn bảo đảm tính toàn vẹn)
  - 결함 방지용 무결성보증안전필터런타임모니터링 (giám sát thời gian thực bộ lọc an toàn bảo đảm tính toàn vẹn để phòng chống lỗi)
  - 안전외피경계검출알고리즘 (thuật toán phát hiện ranh giới vỏ bọc an toàn)
- **자주 쓰는 문형과 성분:**
  - 강화학습 제어기 출력단에 무결성보증안전필터런타임모니터링을 결합하여 하드웨어 파손을 원천 차단하다 (ngăn chặn triệt để hỏng hóc phần cứng bằng cách ghép bộ lọc giám sát thời gian thực bảo đảm tính toàn vẹn vào đầu ra bộ điều khiển học tăng cường)
  - 무결성보증안전필터런타임모니터링이 안전 경계 침범을 감지하는 즉시 보수적 제동 루틴으로 스위칭하다 (chuyển mạch ngay sang quy trình phanh bảo thủ ngay khi việc giám sát bộ lọc an toàn thời gian thực phát hiện sự xâm phạm ranh giới an toàn)
- **사회적 관계·주제별 register:** 인공지능신뢰성보증, 자율시스템안전아키텍처, 런타임모니터링 전문 논문.
- **예문:** 자율주행 셔틀은 무결성보증안전필터런타임모니터링 시스템을 장착하여 딥러닝 인지 모델이 장애물 착시를 일으킨 극한 상황에서도 비상 제동을 정확히 수행해 사고를 방지했다.
- **Dịch:** Xe buýt tự hành được trang bị hệ thống giám sát thời gian thực bộ lọc an toàn bảo đảm tính toàn vẹn đã thực hiện chính xác việc phanh khẩn cấp để ngăn chặn tai nạn ngay cả trong tình huống cực đoan khi mô hình thị giác học sâu bị ảo giác nhận diện chướng ngại vật.
- **어휘 연결:**
  - 제어장벽함수전진불변성보장제어 (điều khiển bảo đảm tính bất biến thuận bằng hàm rào cản CBF - thuật toán tính toán bộ lọc an toàn)
  - 자율주행차량제어기정형안전검증 (kiểm chứng an toàn hình thức bộ điều khiển xe tự hành - cơ sở xác lập ranh giới an toàn cho bộ lọc)
- **영어 참고:** integrity assurance safety filter runtime monitoring / kiến trúc giám sát thời gian thực bộ lọc an toàn bảo đảm tính toàn vẹn cho các bộ điều khiển thông minh

---

### 계약기반설계사양명세합성기법

- **발음:** [계약기반설계사양명세합성기법]
- **품사:** 명사
- **핵심 의미:** 복잡한 대규모 사이버물리시스템을 여러 하위 서브시스템으로 분할 설계할 때, 각 구성요소가 외부 환경에 요구하는 '가정(Assumption)'과 환경이 만족될 때 해당 요소가 보장하는 '보증(Guarantee)'을 형식 계약(Contract)으로 정형 명세하고, 전체 사양을 만족하는 제어기를 자동 합성하는 기법
- **베트남어 뜻:** kỹ thuật tổng hợp đặc tả thiết kế dựa trên hợp đồng (kỹ thuật thiết kế và tổng hợp bộ điều khiển tự động thỏa mãn toàn bộ bản đặc tả khi phân chia hệ thống thực-ảo quy mô lớn thành nhiều hệ thống con, bằng cách đặc tả hình thức mối quan hệ giữa các giả định Assumption mà mỗi thành phần yêu cầu từ môi trường bên ngoài và các bảo đảm Guarantee mà thành phần đó cam kết thực hiện khi môi trường thỏa mãn dưới dạng hợp đồng hình thức Contract)
- **뉘앙스와 사용법:** 수백 개 협력업체가 만든 부품들을 조립할 때 발생하는 '네 탓 내 탓' 시스템 통합 결함을 방지하기 위해, 부품 간의 책임 한계를 수학적 계약서로 묶고 이를 충족하는 소프트웨어를 자동으로 찍어내는 모듈형 정형 공학이다.
- **재사용 가능한 콜로케이션·청크:**
  - 계약기반설계사양명세합성기법을 채택하다 (áp dụng kỹ thuật tổng hợp đặc tả thiết kế dựa trên hợp đồng)
  - 모듈형 계약기반설계사양명세합성기법 (kỹ thuật tổng hợp đặc tả thiết kế dựa trên hợp đồng dạng module)
  - 가정보증계약사양서 (bản đặc tả hợp đồng giả định - cam kết Assumption-Guarantee)
- **자주 쓰는 문형과 성분:**
  - 차량용 분산 전자제어장치(ECU) 개발에 계약기반설계사양명세합성기법을 적용하여 서브시스템 간 상호 호환성을 보증하다 (bảo đảm tính tương thích qua lại giữa các hệ thống con bằng cách áp dụng kỹ thuật tổng hợp đặc tả thiết kế dựa trên hợp đồng vào phát triển ECU phân tán trên xe hơi)
  - 계약기반설계사양명세합성기법을 통해 상위 시스템 요구사항을 하위 컴포넌트의 수학적 계약 집합으로 계층 분해하다 (phân rã phân tầng yêu cầu hệ thống mức cao thành tập hợp các hợp đồng toán học của các thành phần con qua kỹ thuật tổng hợp đặc tả dựa trên hợp đồng)
- **사회적 관계·주제별 register:** 시스템엔지니어링, 모듈형정형설계, 자동제어기합성(Controller Synthesis) 전문 논문.
- **예문:** 항공기 플라이바이와이어(FBW) 시스템 설계에서 계약기반설계사양명세합성기법을 도입함으로써 비행 제어기와 유압 작동기 간의 인터페이스 오류를 설계 초기 단계에서 100% 제거했다.
- **Dịch:** Nhờ đưa kỹ thuật tổng hợp đặc tả thiết kế dựa trên hợp đồng vào thiết kế hệ thống điều khiển bay bằng dây (Fly-By-Wire), các kỹ sư đã loại bỏ 100% lỗi giao diện giữa bộ điều khiển bay và cơ cấu chấp hành thủy lực ngay từ giai đoạn đầu thiết kế.
- **어휘 연결:**
  - 사이버물리시스템정형기법검증 (kiểm chứng phương pháp hình thức hệ thống thực-ảo CPS - nền tảng lý thuyết kiểm tra tính tương thích hợp đồng)
  - 동등성검증정형수학적증명엔진 (công cụ chứng minh toán học hình thức kiểm chứng tương đương - kiểm tra tính đúng đắn của mã sau khi tổng hợp)
- **영어 참고:** contract-based design specification synthesis technique / phương pháp thiết kế dựa trên hợp đồng giả định-bảo đảm và tự động tổng hợp bộ điều khiển từ đặc tả

---

### 자율주행차량제어기정형안전검증

- **발음:** [자율주행차량제어기정형안전검증]
- **품사:** 명사
- **핵심 의미:** 자율주행 차량의 경로 계획 및 모션 제어 알고리즘이 예측 불가능한 도로 교통 상황, 센서 노이즈, 보행자 돌발 출현 등 동적 환경 속에서도 도로 안전 규칙(책임민감성안전 RSS 모델 등)을 절대 위반하지 않음을 도달 가능성 분석과 정형 증명으로 검증하는 자동차 엔지니어링 프로세스
- **베트남어 뜻:** kiểm chứng an toàn hình thức bộ điều khiển xe tự hành (quy trình kỹ thuật ô tô kiểm chứng bằng phân tích tính tới được và chứng minh hình thức rằng các thuật toán lập kế hoạch quỹ đạo và điều khiển chuyển động của xe tự hành tuyệt đối không vi phạm các quy tắc an toàn giao thông đường bộ như mô hình an toàn nhạy bén trách nhiệm RSS ngay cả trong các môi trường động lực chứa tình huống giao thông không thể dự đoán, nhiễu cảm biến hoặc người đi bộ bất ngờ xuất hiện)
- **뉘앙스와 사용법:** 단순히 '수억 킬로미터 무사고 주행 시험'이라는 경험적 확률에 기대지 않고, 물리적으로 가능한 최악의 컷인(끼어들기) 상황에서도 차간 거리를 유지해 추돌을 100% 회피함을 수학적으로 확증하는 생명 안전 보증서이다.
- **재사용 가능한 콜로케이션·청크:**
  - 자율주행차량제어기정형안전검증을 통과하다 (vượt qua kỳ kiểm chứng an toàn hình thức bộ điều khiển xe tự hành)
  - 엄밀한 자율주행차량제어기정형안전검증 (kiểm chứng an toàn hình thức bộ điều khiển xe tự hành nghiêm ngặt)
  - 책임민감성안전모델규격 (quy chuẩn mô hình an toàn nhạy bén trách nhiệm RSS)
- **자주 쓰는 문형과 성분:**
  - 차선 변경 궤적 계획기에 자율주행차량제어기정형안전검증 기법을 적용하여 사각지대 차량과의 안전 거리를 수학적으로 보장하다 (bảo đảm khoảng cách an toàn với xe trong điểm mù một cách toán học bằng cách áp dụng kiểm chứng an toàn hình thức vào bộ lập kế hoạch quỹ đạo chuyển làn)
  - 자율주행차량제어기정형안전검증을 기반으로 ISO 26262 및 ISO 21448(SOTIF) 국제 안전 인증을 획득하다 (đạt chứng nhận an toàn quốc tế ISO 26262 và ISO 21448 SOTIF dựa trên quy trình kiểm chứng an toàn hình thức bộ điều khiển xe tự hành)
- **사회적 관계·주제별 register:** 자율주행자동차공학, 지능형교통시스템안전(SOTIF), 기능안전성정형검증 전문 지침.
- **예문:** 도심 혼잡 도로 환경에서 개발된 제어 소프트웨어는 자율주행차량제어기정형안전검증을 거쳐, 무단횡단 보행자가 시야에 들어오는 극한 시나리오에서도 물리적 충돌이 불가능함을 증명했다.
- **Dịch:** Phần mềm điều khiển phát triển cho môi trường đô thị đông đúc đã vượt qua kiểm chứng an toàn hình thức bộ điều khiển xe tự hành, chứng minh rằng về mặt vật lý không thể xảy ra va chạm ngay cả trong kịch bản cực đoan khi người đi bộ bất ngờ băng qua đường xuất hiện trong tầm nhìn.
- **어휘 연결:**
  - 하이브리드오토마타도달가능성분석 (phân tích tính tới được của automata lai - công cụ toán học dùng để tính toán không gian va chạm của xe)
  - 무결성보증안전필터런타임모니터링 (giám sát thời gian thực bộ lọc an toàn bảo đảm tính toàn vẹn - cơ chế phòng vệ cuối cùng trên xe tự hành)
- **영어 참고:** autonomous vehicle controller formal safety verification / kiểm chứng toán học hình thức bảo đảm an toàn chuyển động cho bộ điều khiển xe tự hành

---

### 산업용제어시스템보안취약점정형분석

- **발음:** [산업용제어시스템보안취약점정형분석]
- **품사:** 명사
- **핵심 의미:** 발전소, 송유관, 수처리 시설 등 핵심 국가 기반 시설을 관장하는 SCADA 및 DCS 산업용 제어 시스템에서, 독점 통신 프로토콜(Modbus, DNP3 등)과 PLC 로직 코드에 잠재된 인증 우회, 버퍼 오버플로, 타이밍 공격 등의 보안 결함을 형식 논리 모델과 기호 실행(Symbolic execution)으로 철저히 파헤치는 분석 기법
- **베트남어 뜻:** phân tích hình thức lỗ hổng bảo mật hệ thống điều khiển công nghiệp (kỹ thuật phân tích chuyên sâu sử dụng mô hình logic hình thức và thực thi ký hiệu symbolic execution nhằm tìm kiếm và vạch trần triệt để các lỗ hổng bảo mật tiềm ẩn như vượt qua cơ chế xác thực, tràn bộ đệm, tấn công định thời trong giao thức truyền thông chuyên dụng như Modbus, DNP3 và mã logic PLC của các hệ thống điều khiển công nghiệp SCADA và DCS điều hành cơ sở hạ tầng trọng yếu quốc gia như nhà máy điện, đường ống dẫn dầu, xử lý nước thải)
- **뉘앙스와 사용법:** 해커가 PLC 내부 레지스터를 조작해 터빈을 폭파시키거나 정수장 약품 투입량을 치명적으로 변조하기 전에, 제어 코드의 모든 실행 경로를 기호화하여 숨겨진 백도어와 취약점을 수학적으로 들춰내는 사이버 방폭 감사관이다.
- **재사용 가능한 콜로케이션·청크:**
  - 산업용제어시스템보안취약점정형분석을 실시하다 (tiến hành phân tích hình thức lỗ hổng bảo mật hệ thống điều khiển công nghiệp)
  - 기호실행기반 산업용제어시스템보안취약점정형분석 (phân tích hình thức lỗ hổng bảo mật hệ thống điều khiển công nghiệp dựa trên thực thi ký hiệu)
  - 프로그래머블로직제어기로직감사 (kiểm toán logic bộ điều khiển khả trình PLC)
- **자주 쓰는 문형과 성분:**
  - 산업용제어시스템보안취약점정형분석을 통해 제어기 펌웨어 내 비인가 원격 명령 실행 취약점을 사전에 차단하다 (ngăn chặn trước lỗ hổng thực thi lệnh từ xa trái phép bên trong firmware bộ điều khiển nhờ phân tích hình thức lỗ hổng bảo mật ICS)
  - SCADA 네트워크 프로토콜에 산업용제어시스템보안취약점정형분석을 적용하여 제로데이 공격 벡터의 존재 여부를 규명하다 (làm rõ sự tồn tại của các vector tấn công zero-day bằng cách áp dụng phân tích hình thức lỗ hổng bảo mật lên giao thức mạng SCADA)
- **사회적 관계·주제별 register:** 산업보안공학, 국가기반시설제어망방호, 기호실행보안취약점분석 전문 지침서.
- **예문:** 정수 플랜트 제어망 감사팀은 산업용제어시스템보안취약점정형분석 도구를 구동하여, 특정 패킷 시퀀스가 주입될 때 PLC가 재부팅되며 안전 밸브가 열리는 치명적 결함을 발견하고 패치했다.
- **Dịch:** Đội kiểm toán mạng điều khiển nhà máy lọc nước đã vận hành công cụ phân tích hình thức lỗ hổng bảo mật hệ thống điều khiển công nghiệp, phát hiện và vá kịp thời lỗ hổng nghiêm trọng khiến PLC bị khởi động lại và mở van an toàn khi bị chèn chuỗi gói tin đặc biệt.
- **어휘 연결:**
  - 사이버물리공격침입탐지복원력제어 (điều khiển phục hồi và phát hiện xâm nhập tấn công mạng-vật lý CPS - cơ chế phòng thủ khi lỗ hổng bị khai thác)
  - 사이버물리시스템정형기법검증 (kiểm chứng phương pháp hình thức hệ thống thực-ảo CPS - nền tảng phương pháp luận chung)
- **영어 참고:** industrial control system vulnerability formal analysis / phân tích hình thức các lỗ hổng an ninh mạng và mã độc trong hệ thống điều khiển công nghiệp ICS/SCADA

---

### 하이브리드시스템불변집합안전보장

- **발음:** [하이브리드시스템불변집합안전보장]
- **품사:** 명사
- **핵심 의미:** 연속적인 물리 유동과 이산적인 모드 전환이 공존하는 하이브리드 동적 시스템에서, 한 번 진입하면 외부 제어 입력과 외란 하에서도 궤적이 그 내부를 절대 벗어나지 않는 양의 불변 집합(Positively invariant set)을 수학적으로 산출하고 시스템의 영구 안전성을 엄밀히 입증하는 보증 기법
- **베트남어 뜻:** bảo đảm an toàn tập bất biến trong hệ thống lai (phương pháp toán học chứng minh nghiêm ngặt sự an toàn vĩnh cửu của hệ thống động lực lai chứa cả dòng chảy vật lý liên tục và sự chuyển mạch mode rời rạc, bằng cách tính toán tập hợp bất biến dương Positively Invariant Set sao cho khi quỹ đạo hệ thống đã đi vào tập hợp này thì sẽ không bao giờ thoát ra ngoài dù chịu tác động của các tín hiệu điều khiển và nhiễu ngoại cảnh)
- **뉘앙스와 사용법:** 시스템을 안전이라는 거대한 '중력 우물' 속에 가두어, 어떠한 외부 교란이나 스위칭 충격이 가해져도 시스템 상태가 위험 영역으로 탈출할 수 없도록 수학적 자물쇠를 채우는 제어 이론의 궁극적 안전 판정법이다.
- **재사용 가능한 콜로케이션·청크:**
  - 하이브리드시스템불변집합안전보장을 도출하다 (rút ra sự bảo đảm an toàn tập bất biến trong hệ thống lai)
  - 강인한 하이브리드시스템불변집합안전보장 (bảo đảm an toàn tập bất biến trong hệ thống lai vững chắc)
  - 양의불변집합계산알고리즘 (thuật toán tính toán tập hợp bất biến dương)
- **자주 쓰는 문형과 성분:**
  - 선형 행렬 부등식(LMI)을 해결하여 하이브리드시스템불변집합안전보장을 만족하는 최대 타원체 집합을 계산하다 (giải bất đẳng thức ma trận tuyến tính LMI để tính toán tập ellipsoid cực đại thỏa mãn bảo đảm an toàn tập bất biến hệ thống lai)
  - 하이브리드시스템불변집합안전보장 조건을 제어기 합성 알고리즘의 제약 조건으로 통합하여 고신뢰 제어 법칙을 도출하다 (tích hợp điều kiện bảo đảm an toàn tập bất biến hệ thống lai làm ràng buộc cho thuật toán tổng hợp để rút ra luật điều khiển độ tin cậy cao)
- **사회적 관계·주제별 register:** 제어이론수학, 강인안정성해석, 리야푸노프불변집합론 전문 논문.
- **예문:** 원자로 제어봉 구동계에 하이브리드시스템불변집합안전보장 이론을 적용하여, 비상 정지 모드 전환 시 발생하는 극심한 유압 요동 속에서도 감속 궤적이 허용 변위 불변 집합을 이탈하지 않음을 증명했다.
- **Dịch:** Bằng cách áp dụng lý thuyết bảo đảm an toàn tập bất biến trong hệ thống lai vào hệ thống truyền động thanh điều khiển lò phản ứng hạt nhân, các nhà nghiên cứu đã chứng minh quỹ đạo giảm tốc không rời khỏi tập bất biến độ dịch chuyển cho phép ngay cả trong dao động thủy lực dữ dội phát sinh khi chuyển sang mode dừng khẩn cấp.
- **어휘 연결:**
  - 제어장벽함수전진불변성보장제어 (điều khiển bảo đảm tính bất biến thuận bằng hàm rào cản CBF - công cụ tính toán tập bất biến thuận)
  - 하이브리드오토마타도달가능성분석 (phân tích tính tới được của automata lai - kỹ thuật hình học tương hỗ xác định tập bất biến)
- **영어 참고:** hybrid system invariant set safety guarantee / phương pháp toán học bảo đảm an toàn vĩnh cửu dựa trên tập hợp bất biến trong hệ thống động lực lai

## 종합 예문 (단락 독해)

컴퓨터공학 및 제어이론 연구진은 안전 필수 시스템의 신뢰성을 보장하고자 사이버물리시스템정형기법검증 체계를 고도화했다. 연구팀은 물리적 환경의 연속동역학이산제어상태전이모델 수학적 구조를 정립하고, 하이브리드오토마타도달가능성분석 기법을 적용하여 위험 상태 도달 여부를 엄밀히 검증했다. 또한 대규모 시스템의 상태공간폭발문제추상화완화기법 방식을 도입하고 선형시상논리안전성성질모델체킹 알고리즘을 가동하여 시스템 안전 규격을 입증했다. 임베디드 코드 수준에서는 동등성검증정형수학적증명엔진 소프트웨어를 활용하고, 실시간임베디드소프트웨어데드락검출 시험을 통해 치명적 교착 상태를 미연에 방지했다. 한편 동역학적 제어 안정성을 위해 제어장벽함수전진불변성보장제어 기법을 설계하고, 하이브리드시스템불변집합안전보장 조건을 충족시켰다. 복잡한 환경을 정밀하게 모사하고자 통계적모델체킹몬테카를로시뮬레이션 방식을 수행하며, 모듈 간 계약기반설계사양명세합성기법 표준 틀을 구축했다. 사이버 보안 영역에서는 산업용제어시스템보안취약점정형분석 작업을 수행하고, 사이버물리공격침입탐지복원력제어 체계를 통해 지능형 공격 저항력을 확보했다. 나아가 무인 자율주행차량제어기정형안전검증 체계를 구축하고, 무결성보증안전필터런타임모니터링 기술을 결합하여 실시간 안전 운행을 확고히 보장했다.

**베트남어 번역:**

Nhóm nghiên cứu khoa học máy tính và lý thuyết điều khiển đã nâng cấp hệ thống kiểm chứng phương pháp hình thức hệ thống thực - ảo (CPS) nhằm bảo đảm độ tin cậy cho các hệ thống an toàn trọng yếu. Nhóm nghiên cứu đã xác lập cấu trúc toán học mô hình chuyển trạng thái điều khiển rời rạc động lực học liên tục của môi trường vật lý, và áp dụng kỹ thuật phân tích khả năng đạt tới automata lai để kiểm chứng nghiêm ngặt việc có chạm tới trạng thái nguy hiểm hay không. Ngoài ra, việc đưa vào phương thức kỹ thuật giảm nhẹ trừu tượng hóa vấn đề bùng nổ không gian trạng thái của các hệ thống quy mô lớn và vận hành thuật toán kiểm tra mô hình đặc tính an toàn logic thời gian tuyến tính (LTL) đã chứng minh các quy cách an toàn của hệ thống. Ở cấp độ mã nhúng, họ đã tận dụng phần mềm công cụ chứng minh toán học hình thức kiểm chứng tương đương, đồng thời ngăn chặn từ sớm trạng thái bế tắc (deadlock) chí tử thông qua thử nghiệm phát hiện bế tắc phần mềm nhúng thời gian thực. Mặt khác, nhằm bảo đảm sự ổn định điều khiển động lực học, họ đã thiết kế kỹ thuật điều khiển bảo đảm tính bất biến thuận hàm rào cản điều khiển (CBF), và thỏa mãn các điều kiện bảo đảm an toàn tập bất biến hệ thống lai. Để mô phỏng chuẩn xác môi trường phức tạp, họ thực hiện phương thức mô phỏng Monte Carlo kiểm tra mô hình thống kê, đồng thời xây dựng bộ khung chuẩn mực kỹ thuật tổng hợp đặc tả quy cách thiết kế dựa trên hợp đồng giữa các mô-đun. Trong lĩnh vực an ninh mạng, họ đã thực hiện công tác phân tích hình thức lỗ hổng bảo mật hệ thống điều khiển công nghiệp (ICS), và bảo đảm sức đề kháng trước các cuộc tấn công thông minh nhờ hệ thống điều khiển phục hồi phát hiện xâm nhập tấn công thực - ảo. Hơn thế nữa, họ đã xây dựng hệ thống kiểm chứng an toàn hình thức bộ điều khiển xe tự hành không người lái, kết hợp kỹ thuật giám sát thời gian chạy bộ lọc an toàn bảo đảm tính toàn vẹn nhằm bảo đảm vững chắc việc vận hành an toàn theo thời gian thực.
