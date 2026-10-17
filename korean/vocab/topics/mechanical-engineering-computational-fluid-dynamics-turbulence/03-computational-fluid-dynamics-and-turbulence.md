<!-- source_policy: original explanations, examples, and passage; mechanical-engineering-computational-fluid-dynamics-turbulence terminology cross-checked conceptually, not copied -->
# 기계공학 및 전산유체역학(CFD)과 난류 모델링의 언어

전산유체역학해석 및 나비에스토크스방정식 기반 레이놀즈평균난류모델와 격자생성수렴도 기계공학 및 전산유체역학(CFD)과 난류 모델링의 언어

---

### 전산유체역학해석

- **발음:** [전산유체역학해석]
- **품사:** 명사
- **핵심 의미:** 컴퓨터의 고속 계산 능력을 활용하여 기체나 액체 등 유체의 복잡한 열·유동 현상을 지배하는 미분 방정식을 수치적으로 풀어내는 공학적 시뮬레이션 기법(CFD).
- **베트남어 뜻:** Phân tích động lực học chất lưu tính toán CFD (kỹ thuật mô phỏng công học tận dụng năng lực tính toán tốc độ cao của máy tính để giải số trị các phương trình vi phân chi phối hiện tượng nhiệt - dòng chảy phức tạp của chất lưu)
- **뉘앙스와 사용법:** Công cụ thiết kế cốt lõi trong ngành hàng không, ôtô, tuabin khí và tàu thủy giúp cắt giảm chi phí thử nghiệm thực tế đắt đỏ.
- **재사용 가능한 콜로케이션·청크:**
  - 정밀한 전산유체역학해석 (phân tích động lực học chất lưu tính toán chuẩn xác)
  - 전산유체역학해석 소프트웨어 (phần mềm phân tích động lực học chất lưu tính toán)
  - 전산유체역학해석의 신뢰성 (độ tin cậy của phân tích động lực học chất lưu tính toán)
- **자주 쓰는 문형과 성분:**
  - 전산유체역학해석을(를) 통해 항공기 날개 주변의 압력 분포를 시각화하다 (thông qua phân tích động lực học chất lưu tính toán trực quan hóa phân bố áp suất quanh cánh máy bay)
  - 전산유체역학해석이(가) 풍동 실험의 물리적 한계를 보완하다 (phân tích động lực học chất lưu tính toán bổ khuyết cho các giới hạn vật lý của thí nghiệm hầm gió)
- **사회적 관계·주제별 register:** Cơ học chất lưu kỹ thuật, mô phỏng số khí động lực học, kỹ thuật nhiệt chất lưu.
- **예문:**
  - 설계 엔지니어들은 차체 주변의 공기 저항을 최소화하기 위해 다각적인 전산유체역학해석을 수행했다.
- **Dịch:**
  - Các kỹ sư thiết kế đã thực hiện phân tích động lực học chất lưu tính toán đa góc độ nhằm tối thiểu hóa lực cản không khí xung quanh thân xe.
- **어휘 연결:**
  - 유의어: `수치시뮬레이션` (mô phỏng số trị numerical simulation)
  - 관련어: `유체유동해석` (phân tích dòng chảy chất lưu fluid flow analysis)
- **영어 참고:** `computational fluid dynamics analysis (CFD)` — phân tích động lực học chất lưu tính toán CFD

---

### 나비에스토크스방정식

- **발음:** [나비에스토크스방정식]
- **품사:** 명사
- **핵심 의미:** 점성을 가진 유체의 운동량 보존 법칙을 기술하는 비선형 편미분 방정식으로, 난류를 포함한 모든 유체 유동의 근본적인 역학 법칙을 담고 있는 기초 방정식.
- **베트남어 뜻:** Phương trình Navier-Stokes (phương trình vi phân đạo hàm riêng phi tuyến mô tả định luật bảo toàn động lượng của chất lưu có độ nhớt, chứa đựng các định luật cơ học nền tảng của mọi dòng chảy bao gồm cả dòng rối)
- **뉘앙스와 사용법:** Một trong 7 bài toán Thiên niên kỷ của Viện Toán học Clay về sự tồn tại và tính trơn mượt của nghiệm; chưa có nghiệm giải tích tổng quát.
- **재사용 가능한 콜로케이션·청크:**
  - 비압축성 나비에스토크스방정식 (phương trình Navier-Stokes không nén được)
  - 나비에스토크스방정식 수치해 (nghiệm số trị phương trình Navier-Stokes)
  - 나비에스토크스방정식의 비선형항 (số hạng phi tuyến của phương trình Navier-Stokes)
- **자주 쓰는 문형과 성분:**
  - 나비에스토크스방정식을(를) 유한체적법으로 이산화하여 컴퓨터로 계산하다 (rời rạc hóa phương trình Navier-Stokes bằng phương pháp thể tích hữu hạn FVM để tính toán bằng máy tính)
  - 나비에스토크스방정식이(가) 유체역학 전 분야의 이론적 근간을 이루다 (phương trình Navier-Stokes tạo thành nền tảng lý thuyết cho toàn bộ các lĩnh vực cơ học chất lưu)
- **사회적 관계·주제별 register:** Phương trình vi phân vật lý toán, động lực học chất lưu lý thuyết, cơ học môi trường liên tục.
- **예문:**
  - 복잡한 와류의 거동을 완벽히 모사하기 위해서는 나비에스토크스방정식의 직접 수치 모사(DNS)가 필수적이다.
- **Dịch:**
  - Để mô phỏng hoàn hảo hành vi của các dòng xoáy phức tạp, việc mô phỏng số trực tiếp (DNS) phương trình Navier-Stokes là thiết yếu.
- **어휘 연결:**
  - 유의어: `운동량보존법칙` (định luật bảo toàn động lượng conservation of momentum)
  - 관련어: `유한체적법` (phương pháp thể tích hữu hạn finite volume method)
- **영어 참고:** `Navier-Stokes equations` — hệ phương trình Navier-Stokes

---

### 레이놀즈평균난류모델

- **발음:** [레이놀즈평균난류모델]
- **품사:** 명사
- **핵심 의미:** 불규칙하게 요동치는 난류 속도장을 시간 평균 성분과 변동 성분으로 분리한 후(레이놀즈 분해), 발생하는 레이놀즈 응력항을 난류 점성 모델 등으로 닫아 근사하는 실용적 수치 해석 기법(RANS).
- **베트남어 뜻:** Mô hình rối lấy trung bình theo Reynolds RANS (kỹ thuật số trị thực dụng phân tách trường vận tốc rối dao động bất quy tắc thành thành phần trung bình thời gian và thành phần biến động rồi đóng xấp xỉ ứng suất Reynolds bằng mô hình độ nhớt xoáy)
- **뉘앙스와 사용법:** Mô hình tiêu chuẩn được sử dụng rộng rãi nhất trong hơn 90% các ứng dụng CFD công nghiệp nhờ chi phí tính toán thấp và độ tin cậy vừa phải.
- **재사용 가능한 콜로케이션·청크:**
  - 실용적 레이놀즈평균난류모델 (mô hình rối lấy trung bình theo Reynolds thực dụng)
  - 레이놀즈평균난류모델 적용 (áp dụng mô hình rối lấy trung bình theo Reynolds)
  - 레이놀즈평균난류모델의 한계 (giới hạn của mô hình rối lấy trung bình theo Reynolds)
- **자주 쓰는 문형과 성분:**
  - 레이놀즈평균난류모델을(를) 채택하여 산업용 펌프 내부의 압력 강하를 신속히 예측하다 (áp dụng mô hình rối lấy trung bình theo Reynolds để dự đoán nhanh sự sụt giảm áp suất bên trong bơm công nghiệp)
  - 레이놀즈평균난류모델이(가) 급격한 박리 유동에서는 정확도가 떨어지는 단점이 있다 (mô hình rối lấy trung bình theo Reynolds có nhược điểm là giảm độ chính xác ở các dòng chảy tách rời đột ngột)
- **사회적 관계·주제별 register:** Mô hình hóa rối công nghiệp, phương pháp RANS, kỹ thuật thiết kế máy thủy khí.
- **예문:**
  - k-epsilon 및 k-omega 모델은 공학 현장에서 가장 널리 쓰이는 대표적인 레이놀즈평균난류모델이다.
- **Dịch:**
  - Các mô hình k-epsilon và k-omega là những mô hình rối lấy trung bình theo Reynolds tiêu biểu được sử dụng rộng rãi nhất tại các hiện trường kỹ thuật.
- **어휘 연결:**
  - 유의어: `레이놀즈응력` (ứng suất Reynolds Reynolds stress)
  - 관련어: `케이엡실론모델` (mô hình k-epsilon)
- **영어 참고:** `Reynolds-averaged Navier-Stokes (RANS) turbulence model` — mô hình rối lấy trung bình Reynolds RANS

---

### 격자생성수렴도

- **발음:** [격자생성수렴도]
- **품사:** 명사
- **핵심 의미:** 해석 영역을 잘게 쪼갠 격자(Grid/Mesh)의 밀도를 단계적으로 조밀하게 만들면서 계산 결과가 특정 값에 안정적으로 도달하고 격자 크기에 의존하지 않음을 검증하는 척도(Grid Independence).
- **베트남어 뜻:** Độ hội tụ sinh lưới (thước đo xác minh tính độc lập của lưới khi chia nhỏ dần mật độ lưới trong miền tính toán để kết quả đạt tới một giá trị ổn định mà không còn phụ thuộc vào kích thước mắt lưới)
- **뉘앙스와 사용법:** Yêu cầu bắt buộc để chứng minh tính hợp lệ khoa học của bất kỳ bài báo hay báo cáo mô phỏng CFD nào.
- **재사용 가능한 콜로케이션·청크:**
  - 철저한 격자생성수렴도 (độ hội tụ sinh lưới triệt để)
  - 격자생성수렴도 시험 (thử nghiệm độ hội tụ sinh lưới)
  - 격자생성수렴도의 평가기준 (tiêu chuẩn đánh giá của độ hội tụ sinh lưới)
- **자주 쓰는 문형과 성분:**
  - 격자생성수렴도를(를) 확인하여 수치해석 결과의 격자 의존성 오류를 완전히 배제하다 (xác nhận độ hội tụ sinh lưới để loại trừ hoàn toàn sai số phụ thuộc lưới của kết quả phân tích số trị)
  - 격자생성수렴도가(이) 확보되지 않은 시뮬레이션 결과는 학술적 신뢰성을 얻지 못한다 (kết quả mô phỏng không đảm bảo độ hội tụ sinh lưới sẽ không đạt được độ tin cậy học thuật)
- **사회적 관계·주제별 register:** Xác thực và kiểm chứng CFD (V&V), kỹ thuật chia lưới phi cấu trúc, phân tích sai số số trị.
- **예문:**
  - 연구팀은 격자 수를 천만 개까지 늘려가며 양력 계수의 격자생성수렴도를 엄격하게 검증했다.
- **Dịch:**
  - Nhóm nghiên cứu đã tăng số lượng mắt lưới lên đến 10 triệu để kiểm chứng nghiêm ngặt độ hội tụ sinh lưới của hệ số lực nâng.
- **어휘 연결:**
  - 유의어: `격자독립성검증` (kiểm chứng tính độc lập của lưới grid independence test)
  - 관련어: `이산화오차` (sai số rời rạc hóa discretization error)
- **영어 참고:** `mesh generation convergence metric` — độ hội tụ độc lập của quá trình tạo lưới

---

### 경계층유동박리

- **발음:** [경계층유동박리]
- **품사:** 명사
- **핵심 의미:** 물체 표면을 따라 흐르던 유체가 역압력 구배(유동 방향으로 압력이 높아짐)와 마찰 저항을 이기지 못하고 표면에서 떨어져 나가 와류를 형성하는 현상(Boundary Layer Separation).
- **베트남어 뜻:** Tách dòng lớp biên (hiện tượng dòng chất lưu chảy dọc bề mặt vật thể không thắng được gradient áp suất nghịch và lực ma sát nên bị bóc tách khỏi bề mặt tạo thành xoáy cuộn cuồn cuộn)
- **뉘앙스와 사용법:** Nguyên nhân trực tiếp gây ra hiện tượng thất tốc (stall) của cánh máy bay, làm lực nâng tụt dốc và lực cản tăng vọt.
- **재사용 가능한 콜로케이션·청크:**
  - 갑작스러운 경계층유동박리 (tách dòng lớp biên đột ngột)
  - 경계층유동박리 제어 (kiểm soát tách dòng lớp biên)
  - 경계층유동박리의 발생지점 (điểm phát sinh tách dòng lớp biên)
- **자주 쓰는 문형과 성분:**
  - 경계층유동박리를(를) 지연시키기 위해 날개 표면에 와류발생기(Vortex Generator)를 장착하다 (gắn bộ tạo xoáy trên bề mặt cánh để làm chậm hiện tượng tách dòng lớp biên)
  - 경계층유동박리가(이) 날개의 양력을 급격히 상실시키는 실속 현상을 촉발하다 (tách dòng lớp biên kích hoạt hiện tượng thất tốc làm mất đột ngột lực nâng của cánh)
- **사회적 관계·주제별 register:** Khí động lực học cánh máy bay, cơ học lớp biên Prandtl, điều khiển dòng chảy chủ động.
- **예문:**
  - 받음각이 15도를 넘어서자 날개 윗면에서 심각한 경계층유동박리가 일어나며 비행기가 흔들렸다.
- **Dịch:**
  - Khi góc tấn vượt quá 15 độ, hiện tượng tách dòng lớp biên nghiêm trọng đã xảy ra trên mặt lưng cánh khiến máy bay chao đảo.
- **어휘 연결:**
  - 유의어: `역압력구배` (gradient áp suất nghịch adverse pressure gradient)
  - 관련어: `실속현상` (hiện tượng thất tốc stall)
- **영어 참고:** `boundary layer flow separation` — sự bóc tách dòng chảy lớp biên khí động

---

### 벽면함수근사항

- **발음:** [벽면함수근사항]
- **품사:** 명사
- **핵심 의미:** 고체 벽면 바로 앞의 점성 저층(Viscous Sublayer) 영역을 일일이 초미세 격자로 풀지 않고, 로그 법칙(Log-law) 등 반실험적 수식을 적용해 벽면 마찰력을 계산하는 근사 수식(Wall Function).
- **베트남어 뜻:** Số hạng xấp xỉ hàm vách (công thức bán thực nghiệm áp dụng quy luật logarit để tính lực ma sát vách thay vì phải giải chi tiết lớp nhớt sát vách bằng lưới siêu mịn)
- **뉘앙스와 사용법:** Tiết kiệm hàng triệu tế bào lưới và bộ nhớ máy tính trong các bài toán công nghiệp quy mô lớn khi tham số y+ nằm trong khoảng 30~300.
- **재사용 가능한 콜로케이션·청크:**
  - 경험적 벽면함수근사항 (số hạng xấp xỉ hàm vách mang tính kinh nghiệm)
  - 벽면함수근사항 수식화 (công thức hóa số hạng xấp xỉ hàm vách)
  - 벽면함수근사항의 적용조건 (điều kiện áp dụng của số hạng xấp xỉ hàm vách)
- **자주 쓰는 문형과 성분:**
  - 벽면함수근사항을(를) 활용하여 고체 경계면 근처의 계산 격자 수를 대폭 절감하다 (tận dụng số hạng xấp xỉ hàm vách để cắt giảm vượt bậc số lượng mắt lưới tính toán gần mặt biên rắn)
  - 벽면함수근사항이(가) 무차원 벽면 거리 y+ 값에 따라 해석 정확도를 크게 좌우하다 (số hạng xấp xỉ hàm vách chi phối lớn độ chính xác phân tích tùy theo giá trị khoảng cách vách không thứ nguyên y+)
- **사회적 관계·주제별 register:** Lý thuyết lớp biên thành vách, tham số y-plus, thuật toán RANS công nghiệp.
- **예문:**
  - 표준 벽면함수근사항은 평판 유동에서는 정확하지만 곡면 박리 영역에서는 심각한 오차를 보인다.
- **Dịch:**
  - Số hạng xấp xỉ hàm vách tiêu chuẩn tuy chính xác trong dòng chảy tấm phẳng nhưng lại lộ rõ sai số nghiêm trọng ở vùng tách dòng bề mặt cong.
- **어휘 연결:**
  - 유의어: `로그법칙` (quy luật logarit law of the wall)
  - 관련어: `무차원벽면거리` (khoảng cách vách không thứ nguyên y-plus)
- **영어 참고:** `wall function approximation term` — số hạng xấp xỉ hàm vách cơ học chất lưu

---

### 와류점성계수추정

- **발음:** [와류점성계수추정]
- **품사:** 명사
- **핵심 의미:** 부시네스크(Boussinesq) 가설에 따라 난류에 의한 모멘텀 확산 효과를 유체 자체의 분자 점성이 아닌 가상의 거시적 와류 점성(Eddy Viscosity)으로 모델링하여 그 크기를 계산하는 일.
- **베트남어 뜻:** Ước tính hệ số nhớt xoáy (việc mô hình hóa hiệu ứng khuếch tán động lượng do dòng rối bằng độ nhớt xoáy vĩ mô ảo theo giả thuyết Boussinesq thay vì độ nhớt phân tử của chất lưu)
- **뉘앙스와 사용법:** Khái niệm trung tâm của các mô hình rối bậc 1 (như Spalart-Allmaras, k-epsilon) giúp biến phương trình rối phức tạp thành dạng phương trình khuếch tán giải được.
- **재사용 가능한 콜로케이션·청크:**
  - 정밀한 와류점성계수추정 (ước tính hệ số nhớt xoáy chuẩn xác)
  - 와류점성계수추정 알고리즘 (thuật toán ước tính hệ số nhớt xoáy)
  - 와류점성계수추정의 등방성가정 (giả định đẳng hướng của việc ước tính hệ số nhớt xoáy)
- **자주 쓰는 문형과 성분:**
  - 와류점성계수추정을(를) 통해 난류 혼합으로 인한 에너지 손실을 효과적으로 예측하다 (thông qua ước tính hệ số nhớt xoáy dự đoán hiệu quả tổn thất năng lượng do hòa trộn rối)
  - 와류점성계수추정이(가) 강한 회전 유동에서는 물리적 타당성을 잃을 수 있다 (ước tính hệ số nhớt xoáy có thể mất đi tính xác đáng vật lý trong các dòng chảy xoáy mạnh)
- **사회적 관계·주제별 register:** Giả thuyết Boussinesq, động lực học rối, mô hình nhớt xoáy.
- **예문:**
  - 난류 운동 에너지 k와 소산율을 결합한 와류점성계수추정 수식은 유동 저항을 매끄럽게 모델링했다.
- **Dịch:**
  - Công thức ước tính hệ số nhớt xoáy kết hợp năng lượng động học rối k và tỷ lệ tiêu tán đã mô hình hóa trơn tru lực cản dòng chảy.
- **어휘 연결:**
  - 유의어: `와류점성` (độ nhớt xoáy eddy viscosity)
  - 관련어: `부시네스크가설` (giả thuyết Boussinesq hypothesis)
- **영어 참고:** `eddy viscosity coefficient estimation` — ước tính hệ số nhớt xoáy dòng rối

---

### 대와류모사기법

- **발음:** [대와류모사기법]
- **품사:** 명사
- **핵심 의미:** 에너지를 지닌 큰 규모의 소용돌이(와류)는 공간 필터링을 통해 직접 수치 계산하고, 소산에 관여하는 작은 규모의 미세 와류만을 단순한 아격자(SGS) 모델로 근사하는 고정밀 해석 기법(LES).
- **베트남어 뜻:** Kỹ thuật mô phỏng xoáy lớn LES (kỹ thuật phân tích độ chính xác cao tính toán trực tiếp các xoáy quy mô lớn mang năng lượng bằng lọc không gian và chỉ xấp xỉ các vi xoáy nhỏ tiêu tán bằng mô hình dưới lưới SGS)
- **뉘앙스와 사용법:** Cầu nối giữa RANS giá rẻ và DNS cực đắt; tiêu chuẩn vàng cho các dòng chảy dao động không dừng (unsteady) như âm học khí động (Aeroacoustics).
- **재사용 가능한 콜로케이션·청크:**
  - 고해상도 대와류모사기법 (kỹ thuật mô phỏng xoáy lớn độ phân giải cao)
  - 대와류모사기법 적용 (áp dụng kỹ thuật mô phỏng xoáy lớn)
  - 대와류모사기법의 계산비용 (chi phí tính toán của kỹ thuật mô phỏng xoáy lớn)
- **자주 쓰는 문형과 성분:**
  - 대와류모사기법을(를) 활용하여 제트 엔진 노즐의 소음 발생 메커니즘을 규명하다 (tận dụng kỹ thuật mô phỏng xoáy lớn làm rõ cơ chế phát sinh tiếng ồn của vòi phun động cơ phản lực)
  - 대와류모사기법이(가) 비정상 박리 유동의 비대칭적 와류 방출을 사실적으로 포착하다 (kỹ thuật mô phỏng xoáy lớn nắm bắt chân thực sự tống xuất xoáy bất đối xứng của dòng chảy tách rời không dừng)
- **사회적 관계·주제별 register:** Khí động âm học (Aeroacoustics), mô phỏng rối cao cấp, phương pháp LES/DES.
- **예문:**
  - 대와류모사기법을 수행하자 비행기 랜딩 기어 주변에서 발생하는 복잡한 난류 소용돌이가 생생하게 재현되었다.
- **Dịch:**
  - Khi thực hiện kỹ thuật mô phỏng xoáy lớn, các dòng xoáy rối phức tạp phát sinh quanh bộ càng hạ cánh máy bay đã được tái hiện sống động.
- **어휘 연결:**
  - 유의어: `아격자스케일모델` (mô hình quy mô dưới lưới subgrid-scale SGS)
  - 관련어: `공간필터링` (lọc không gian spatial filtering)
- **영어 참고:** `large eddy simulation (LES) technique` — kỹ thuật mô phỏng xoáy lớn LES

---

### 수치확산오차보정

- **발음:** [수치확산오차보정]
- **품사:** 명사
- **핵심 의미:** 대류항을 이산화할 때 낮은 차수의 풍상 차분법(Upwind)으로 인해 발생하는 인공적인 가짜 점성(수치 확산)으로 물리적 경계가 뭉개지는 결함을 고차 차분법으로 바로잡는 기법.
- **베트남어 뜻:** Hiệu chỉnh sai số khuếch tán số trị (kỹ thuật dùng các phương pháp sai phân bậc cao để khắc phục khuyết tật các biên vật lý bị nhòe mờ do độ nhớt giả tạo nhân tạo - khuếch tán số - sinh ra từ sai phân gió ngược bậc thấp)
- **뉘앙스와 사용법:** Nếu không khắc phục, sóng xung kích (shock wave) hoặc lớp tiếp xúc sẽ bị làm mờ, dẫn đến dự đoán sai lệch hoàn toàn về lực cản và áp suất.
- **재사용 가능한 콜로케이션·청크:**
  - 정교한 수치확산오차보정 (hiệu chỉnh sai số khuếch tán số trị tinh vi)
  - 수치확산오차보정 기법 (kỹ thuật hiệu chỉnh sai số khuếch tán số trị)
  - 수치확산오차보정의 수치안정성 (độ ổn định số trị của việc hiệu chỉnh sai số khuếch tán số trị)
- **자주 쓰는 문형과 성분:**
  - 수치확산오차보정을(를) 통해 초음속 충격파의 불연속면을 날카롭게 해상하다 (thông qua hiệu chỉnh sai số khuếch tán số trị để phân giải sắc nét mặt gián đoạn của sóng xung kích siêu thanh)
  - 수치확산오차보정이(가) 와류의 조기 감쇠를 방지하여 장거리 유동 보존력을 높이다 (hiệu chỉnh sai số khuếch tán số trị ngăn ngừa sự suy giảm sớm của xoáy, tăng lực bảo tồn dòng chảy đường dài)
- **사회적 관계·주제별 register:** Toán học số trị cho phương pháp sai phân hữu hạn (FDM/FVM), sơ đồ phân giải cao (TVD/WENO).
- **예문:**
  - 고차 WENO 도식을 도입한 수치확산오차보정 덕분에 연소실 내부 화염면의 두께가 정확히 포착되었다.
- **Dịch:**
  - Nhờ việc hiệu chỉnh sai số khuếch tán số trị đưa vào sơ đồ WENO bậc cao, độ dày mặt ngọn lửa bên trong buồng đốt đã được nắm bắt chuẩn xác.
- **어휘 연결:**
  - 유의어: `인공점성` (độ nhớt nhân tạo artificial viscosity)
  - 관련어: `고차차분도식` (sơ đồ sai phân bậc cao high-order scheme)
- **영어 참고:** `numerical diffusion error correction` — hiệu chỉnh sai số khuếch tán số trị

---

### 압력속도연성해법

- **발음:** [압력속도연성해법]
- **품사:** 명사
- **핵심 의미:** 비압축성 유동 해석 시 연속 방정식에 압력 항이 직접 나타나지 않는 문제를 해결하기 위해 압력과 속도장을 반복적으로 수정하며 연립하여 푸는 수치 알고리즘(SIMPLE, PISO 등).
- **베트남어 뜻:** Phương pháp liên kết áp suất - vận tốc (thuật toán số trị lặp lại hiệu chỉnh và giải đồng thời trường vận tốc và áp suất như SIMPLE, PISO để giải bài toán dòng không nén được khi phương trình liên tục không có số hạng áp suất trực tiếp)
- **뉘앙스와 사용법:** Trái tim của bộ giải CFD 비압축성 (incompressible solver), quyết định tốc độ hội tụ và độ ổn định của toàn bộ quá trình tính toán.
- **재사용 가능한 콜로케이션·청크:**
  - 안정적인 압력속도연성해법 (phương pháp liên kết áp suất - vận tốc ổn định)
  - 압력속도연성해법 적용 (áp dụng phương pháp liên kết áp suất - vận tốc)
  - 압력속도연성해법의 수렴속도 (tốc độ hội tụ của phương pháp liên kết áp suất - vận tốc)
- **자주 쓰는 문형과 성분:**
  - 압력속도연성해법을(를) 활용하여 복잡한 배관망의 질량 보존을 만족시키다 (tận dụng phương pháp liên kết áp suất - vận tốc để thỏa mãn bảo toàn khối lượng của mạng lưới đường ống phức hợp)
  - 압력속도연성해법이(가) 비정상 유동에서 시간 전진 계산의 안정성을 보장하다 (phương pháp liên kết áp suất - vận tốc bảo đảm tính ổn định của tính toán tịnh tiến thời gian trong dòng chảy không dừng)
- **사회적 관계·주제별 register:** Thuật toán CFD giải phương trình áp suất Poisson, phương pháp SIMPLE/PISO, bộ giải số trị.
- **예문:**
  - PISO 알고리즘 기반의 압력속도연성해법은 급격한 맥동이 존재하는 밸브 유동을 빠르게 수렴시켰다.
- **Dịch:**
  - Phương pháp liên kết áp suất - vận tốc dựa trên thuật toán PISO đã làm hội tụ nhanh chóng dòng chảy qua van nơi tồn tại các xung dao động đột ngột.
- **어휘 연결:**
  - 유의어: `심플알고리즘` (thuật toán SIMPLE algorithm)
  - 관련어: `연속방정식보정` (hiệu chỉnh phương trình liên tục)
- **영어 참고:** `pressure-velocity coupling algorithm` — thuật toán liên kết ghép cặp áp suất và vận tốc

---

### 난류에너지소산율

- **발음:** [난류에너지소산율]
- **품사:** 명사
- **핵심 의미:** 난류의 큰 소용돌이에서 쪼개져 나온 미세 와류들이 유체의 분자 점성에 의해 최종적으로 열에너지로 마찰 소산되는 단위 질량당 에너지 비율(엡실론, Epsilon).
- **베트남어 뜻:** Tỷ lệ tiêu tán năng lượng rối (tỷ lệ năng lượng trên đơn vị khối lượng ký hiệu epsilon mà tại đó các vi xoáy nhỏ bị xé ra từ các xoáy rối lớn bị ma sát tiêu tán thành nhiệt năng bởi độ nhớt phân tử của chất lưu)
- **뉘앙스와 사용법:** Chỉ số đo lường thang vi mô Kolmogorov nơi động năng biến thành nhiệt, là một trong hai biến số cốt lõi của mô hình k-epsilon.
- **재사용 가능한 콜로케이션·청크:**
  - 국소 난류에너지소산율 (tỷ lệ tiêu tán năng lượng rối cục bộ)
  - 난류에너지소산율 측정 (đo lường tỷ lệ tiêu tán năng lượng rối)
  - 난류에너지소산율의 공간분포 (phân bố không gian của tỷ lệ tiêu tán năng lượng rối)
- **자주 쓰는 문형과 성분:**
  - 난류에너지소산율을(를) 정량화하여 화학 반응기 내부의 미시 혼합 효율을 평가하다 (định lượng tỷ lệ tiêu tán năng lượng rối để đánh giá hiệu suất vi hòa trộn bên trong lò phản ứng hóa học)
  - 난류에너지소산율이(가) 콜모고로프 미세 스케일의 길이를 결정하다 (tỷ lệ tiêu tán năng lượng rối quyết định độ dài thang vi mô Kolmogorov)
- **사회적 관계·주제별 register:** Lý thuyết thác năng lượng Kolmogorov (Energy Cascade), nhiệt động học rối, đo tốc độ hạt PIV.
- **예문:**
  - 혼합 노즐 출구 부근에서 급증한 난류에너지소산율은 두 유체의 화학적 접촉을 촉진했다.
- **Dịch:**
  - Tỷ lệ tiêu tán năng lượng rối tăng vọt gần cửa ra vòi phun hòa trộn đã thúc đẩy sự tiếp xúc hóa học của hai chất lưu.
- **어휘 연결:**
  - 유의어: `콜모고로프스케일` (thang vi mô Kolmogorov scale)
  - 관련어: `에너지연쇄소산` (tiêu tán dòng thác năng lượng energy cascade)
- **영어 참고:** `turbulent kinetic energy dissipation rate` — tỷ lệ tiêu tán động năng dòng rối (epsilon)

---

### 마하수압축성영향

- **발음:** [마하수압축성영향]
- **품사:** 명사
- **핵심 의미:** 유체의 속도가 음속에 가까워지거나 초과할 때(마하수 Ma > 0.3), 밀도 변화와 충격파 형성으로 인해 비압축성 가정이 무너지고 열역학적 결합이 심화되는 물리적 효과.
- **베트남어 뜻:** Ảnh hưởng tính nén theo số Mach (hiệu ứng vật lý khi vận tốc chất lưu tiệm cận hoặc vượt qua tốc độ âm thanh với Ma > 0,3 khiến giả định không nén bị phá vỡ do biến thiên mật độ và sóng xung kích, làm sâu sắc thêm liên kết nhiệt động học)
- **뉘앙스와 사용법:** Yêu cầu phải chuyển đổi từ bộ giải phân tách (segregated) sang bộ giải liên kết mật độ (density-based solver) để tính toán chính xác nhiệt độ và sóng sốc.
- **재사용 가능한 콜로케이션·청크:**
  - 지배적인 마하수압축성영향 (ảnh hưởng tính nén theo số Mach mang tính chi phối)
  - 마하수압축성영향 보정 (hiệu chỉnh ảnh hưởng tính nén theo số Mach)
  - 마하수압축성영향의 수치해석 (phân tích số trị ảnh hưởng tính nén theo số Mach)
- **자주 쓰는 문형과 성분:**
  - 마하수압축성영향을(를) 고려하여 초음속 흡입구 내부의 충격파 전파를 모델링하다 (mô hình hóa sự lan truyền sóng xung kích bên trong cửa hút siêu thanh có tính đến ảnh hưởng tính nén theo số Mach)
  - 마하수압축성영향이(가) 비행체 표면의 공력 가열 현상을 극적으로 가중시키다 (ảnh hưởng tính nén theo số Mach làm gia tăng đột biến hiện tượng nung nóng khí động học trên bề mặt phi cơ)
- **사회적 관계·주제별 register:** Động lực học chất khí (Gas Dynamics), khí động lực học nén được, thiết kế động cơ phản lực Ramjet.
- **예문:**
  - 마하수 3 이상의 극초음속 영역에서는 마하수압축성영향으로 인해 기체의 이온화 반응까지 고려해야 한다.
- **Dịch:**
  - Trong vùng cực siêu thanh từ Mach 3 trở lên, do ảnh hưởng tính nén theo số Mach mà người ta thậm chí phải tính đến cả phản ứng ion hóa của chất khí.
- **어휘 연결:**
  - 유의어: `충격파형성` (hình thành sóng xung kích shock wave formation)
  - 관련어: `압축성유동해석기` (bộ giải dòng chảy nén được density-based solver)
- **영어 참고:** `Mach number compressibility effect` — ảnh hưởng của tính nén theo số Mach

---

### 표면마찰저항계수

- **발음:** [표면마찰저항계수]
- **품사:** 명사
- **핵심 의미:** 물체 표면에 작용하는 전단 응력(점성 마찰력)을 동압(Dynamic Pressure)으로 무차원화한 계수로, 선박이나 항공기의 전진을 방해하는 점성 저항의 크기를 나타내는 지표(Cf).
- **베트남어 뜻:** Hệ số lực cản ma sát bề mặt (hệ số không thứ nguyên hóa ứng suất cắt ma sát nhớt tác dụng lên bề mặt vật thể bằng áp suất động, phản ánh độ lớn lực cản nhớt cản trở bước tiến của tàu thủy hay máy bay)
- **뉘앙스와 사용법:** Tối ưu hóa hình dáng khí động học và phủ lớp chống bám bẩn (riblet) nhằm mục tiêu giảm thiểu hệ số này để tiết kiệm nhiên liệu.
- **재사용 가능한 콜로케이션·청크:**
  - 낮은 표면마찰저항계수 (hệ số lực cản ma sát bề mặt thấp)
  - 표면마찰저항계수 감소기술 (công nghệ giảm hệ số lực cản ma sát bề mặt)
  - 표면마찰저항계수의 적분값 (giá trị tích phân của hệ số lực cản ma sát bề mặt)
- **자주 쓰는 문형과 성분:**
  - 표면마찰저항계수를(를) 낮추기 위해 상어 피부를 모사한 미세 홈 구조를 날개에 적용하다 (áp dụng cấu trúc rãnh vi mô mô phỏng da cá mập lên cánh để hạ thấp hệ số lực cản ma sát bề mặt)
  - 표면마찰저항계수가(이) 층류에서 난류로 전이되는 순간 급격히 상승하다 (hệ số lực cản ma sát bề mặt tăng vọt tại khoảnh khắc chuyển tiếp từ dòng chảy tầng sang dòng chảy rối)
- **사회적 관계·주제별 register:** Thiết kế thân tàu thủy (Naval Architecture), khí động học tiết kiệm năng lượng, công nghệ giảm lực cản.
- **예문:**
  - 초대형 유조선의 전체 추진 저항 중 80% 이상이 표면마찰저항계수와 관련된 점성 마찰력에서 기인한다.
- **Dịch:**
  - Hơn 80% tổng lực cản đẩy của tàu chở dầu siêu lớn bắt nguồn từ lực ma sát nhớt liên quan đến hệ số lực cản ma sát bề mặt.
- **어휘 연결:**
  - 유의어: `점성마찰저항` (lực cản ma sát nhớt skin friction drag)
  - 관련어: `층류난류전이` (chuyển tiếp tầng-rối laminar-turbulent transition)
- **영어 참고:** `skin friction resistance coefficient (Cf)` — hệ số lực cản ma sát bề mặt

---

### 유동가시화기법

- **발음:** [유동가시화기법]
- **품사:** 명사
- **핵심 의미:** 연기, 염료, 레이저 시트(PIV), 슐리렌(Schlieren) 광학계 등을 활용하여 눈에 보이지 않는 공기나 물의 흐름, 와류, 충격파를 시각적 이미지로 변환하여 관측하는 실험 기법.
- **베트남어 뜻:** Kỹ thuật trực quan hóa dòng chảy (kỹ thuật thực nghiệm dùng khói, thuốc nhuộm, tấm laze PIV hay quang học Schlieren để biến đổi dòng chảy mắt thường không thấy của không khí, nước, xoáy và sóng sốc thành hình ảnh trực quan)
- **뉘앙스와 사용법:** Cầu nối thực nghiệm để so sánh đối chiếu trực tiếp với các hình ảnh mô phỏng màu từ phần mềm CFD.
- **재사용 가능한 콜로케이션·청크:**
  - 첨단 유동가시화기법 (kỹ thuật trực quan hóa dòng chảy tiên tiến)
  - 유동가시화기법 도입 (đưa vào áp dụng kỹ thuật trực quan hóa dòng chảy)
  - 유동가시화기법의 고속촬영 (chụp ảnh tốc độ cao của kỹ thuật trực quan hóa dòng chảy)
- **자주 쓰는 문형과 성분:**
  - 유동가시화기법을(를) 통해 초음속 비행체 노즈콘 주변의 충격파 각도를 정밀 계측하다 (thông qua kỹ thuật trực quan hóa dòng chảy đo chuẩn xác góc sóng xung kích quanh mũi nón phi cơ siêu thanh)
  - 유동가시화기법이(가) 전산 해석으로 예측하지 못한 복잡한 3차원 와류 분리를 드러내다 (kỹ thuật trực quan hóa dòng chảy làm lộ ra sự bóc tách xoáy 3 chiều phức tạp mà phân tích điện toán chưa dự đoán được)
- **사회적 관계·주제별 register:** Kỹ thuật đo lường quang học chất lưu, đo vận tốc hạt bằng hình ảnh (PIV), quang học Schlieren.
- **예문:**
  - 슐리렌 광학계를 이용한 유동가시화기법은 총알이 음속을 돌파할 때 형성되는 마하 원뿔을 선명하게 포착했다.
- **Dịch:**
  - Kỹ thuật trực quan hóa dòng chảy tận dụng hệ quang học Schlieren đã bắt trọn sắc nét hình nón Mach hình thành khi viên đạn xuyên phá vận tốc âm thanh.
- **어휘 연결:**
  - 유의어: `슐리렌광학계` (hệ quang học Schlieren schlieren optics)
  - 관련어: `입자영상유속계` (máy đo vận tốc hạt bằng hình ảnh PIV)
- **영어 참고:** `flow visualization technique` — kỹ thuật trực quan hóa dòng chảy

---

### 풍동실험수치검증

- **발음:** [풍동실험수치검증]
- **품사:** 명사
- **핵심 의미:** 인공적으로 균일한 기류를 발생시키는 대형 풍동(Wind Tunnel) 장비에서 축소 모형의 양력, 항력, 모멘트를 정밀 센서로 실측하여 전산 시뮬레이션 결과의 정확성과 타당성을 검증하는 작업.
- **베트남어 뜻:** Kiểm chứng số trị thí nghiệm hầm gió (hoạt động thực đo lực nâng, lực cản và mômen của mô hình thu nhỏ bằng cảm biến chuẩn xác trong thiết bị hầm gió tạo luồng khí nhân tạo để xác minh tính chính xác và hợp lệ của mô phỏng điện toán)
- **뉘앙스와 사용법:** Bước kiểm tra thực nghiệm tối hậu và bắt buộc trước khi đưa bất kỳ thiết kế máy bay, tên lửa hay ôtô nào vào chế tạo nguyên mẫu thật.
- **재사용 가능한 콜로케이션·청크:**
  - 엄밀한 풍동실험수치검증 (kiểm chứng số trị thí nghiệm hầm gió chặt chẽ)
  - 풍동실험수치검증 절차 (quy trình kiểm chứng số trị thí nghiệm hầm gió)
  - 풍동실험수치검증의 오차범위 (phạm vi sai số của việc kiểm chứng số trị thí nghiệm hầm gió)
- **자주 쓰는 문형과 성분:**
  - 풍동실험수치검증을(를) 완수하여 비행 제어 소프트웨어의 공력 데이터베이스를 확정하다 (hoàn thành việc kiểm chứng số trị thí nghiệm hầm gió để chốt cơ sở dữ liệu khí động học của phần mềm điều khiển bay)
  - 풍동실험수치검증이(가) 가상 시뮬레이션의 수학적 오류를 최종적으로 걸러내다 (kiểm chứng số trị thí nghiệm hầm gió lọc sạch tối hậu các sai sót toán học của mô phỏng ảo)
- **사회적 관계·주제별 register:** Khí động lực học thực nghiệm hàng không, thử nghiệm hầm gió âm thanh, chứng nhận đủ điều kiện bay.
- **예문:**
  - CFD 모델의 한계를 극복하기 위해 천음속 영역에서의 엄격한 풍동실험수치검증이 필수적으로 수반되었다.
- **Dịch:**
  - Để vượt qua các giới hạn của mô hình CFD, việc kiểm chứng số trị thí nghiệm hầm gió nghiêm ngặt ở vùng cận âm thanh đã được tiến hành bắt buộc đi kèm.
- **어휘 연결:**
  - 유의어: `풍동시험장치` (thiết bị thử nghiệm hầm gió wind tunnel facility)
  - 관련어: `공력데이터확보` (thu thập cơ sở dữ liệu khí động aerodynamic data)
- **영어 참고:** `wind tunnel experiment numerical validation` — kiểm chứng số trị bằng thực nghiệm hầm gió

---

## 단원 종합 읽기 자료: 기계공학 및 전산유체역학(CFD)과 난류 모델링의 언어
<!-- passage_word_count: 105 Korean eojeol; target_set: 전산유체역학해석, 나비에스토크스방정식, 레이놀즈평균난류모델, 격자생성수렴도, 경계층유동박리, 벽면함수근사항, 와류점성계수추정, 대와류모사기법, 수치확산오차보정, 압력속도연성해법, 난류에너지소산율, 마하수압축성영향, 표면마찰저항계수, 유동가시화기법, 풍동실험수치검증 -->
첨단 기계 및 공기역학 항공우주 연구팀은 극한 환경의 차세대 초음속 비행체 설계를 위해 고성능 대규모 슈퍼컴퓨터 기반 전산유체역학해석 정밀 시뮬레이션을 성공적으로 수행했다. 비선형 지배 방정식인 복잡한 나비에스토크스방정식 연립계를 안정적으로 풀기 위해 레이놀즈평균난류모델 기법을 체계적으로 적용하고 격자생성수렴도 기준을 매우 엄격히 평가했다. 고체 벽면 근처의 벽면함수근사항 수식을 정밀 보정하여 복합적인 와류점성계수추정 정확도를 극대화했으며 정교한 대와류모사기법 모델을 병행 운용했다. 자체 개발한 수치확산오차보정 알고리즘과 견고한 다물리 압력속도연성해법 체계를 통해 날개 표면에서 발생하는 위험한 경계층유동박리 영역을 사전에 명확히 예측했다. 국소 난류에너지소산율 및 마하수압축성영향 물리량을 정밀 정량화하여 유도된 표면마찰저항계수 분포를 최신 고속 레이저 유동가시화기법 실측 데이터와 대조함으로써 대형 미래 항공 기계 공학 산업의 핵심인 초고속 유동 역학 풍동실험수치검증 절차를 완벽하게 통과하였다.

**베트남어 번역:**
Đội ngũ nghiên cứu khí động lực học hàng không vũ trụ và cơ khí tiên tiến đã thực hiện thành công mô phỏng phân tích động lực học chất lưu tính toán chuẩn xác dựa trên siêu máy tính quy mô lớn hiệu năng cao nhằm thiết kế phi cơ siêu thanh thế hệ mới trong môi trường cực hạn. Nhằm giải ổn định hệ phương trình Navier-Stokes phức hợp phi tuyến chi phối, họ áp dụng có hệ thống kỹ thuật mô hình rối lấy trung bình theo Reynolds và đánh giá hết sức khắt khe tiêu chuẩn độ hội tụ sinh lưới. Nhờ hiệu chỉnh chuẩn xác công thức số hạng xấp xỉ hàm vách gần vách rắn, họ đã tối đa hóa độ chính xác ước tính hệ số nhớt xoáy phức hợp và vận hành song song mô hình kỹ thuật mô phỏng xoáy lớn tinh vi. Thông qua thuật toán hiệu chỉnh sai số khuếch tán số trị tự phát triển và hệ thống phương pháp liên kết áp suất - vận tốc đa vật lý vững chắc, vùng tách dòng lớp biên nguy hiểm phát sinh trên bề mặt cánh đã được dự đoán rõ ràng từ trước. Bằng cách định lượng chuẩn xác đại lượng vật lý ảnh hưởng tính nén theo số Mach và tỷ lệ tiêu tán năng lượng rối cục bộ rồi đối chiếu sự phân bố hệ số lực cản ma sát bề mặt rút ra với dữ liệu đo đạc thực tế của kỹ thuật trực quan hóa dòng chảy laze tốc độ cao tối tân, họ đã vượt qua hoàn hảo quy trình kiểm chứng số trị thí nghiệm hầm gió quy mô lớn.
