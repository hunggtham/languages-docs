<!-- source_policy: original explanations, examples, and passage; computer-science-differential-privacy-and-noise-mechanisms terminology cross-checked conceptually, not copied -->
# 컴퓨터과학 및 차분 프라이버시와 노이즈 메커니즘의 언어

차분프라이버시보장 및 라플라스노이즈메커니즘 기반 가우시안교란알고리즘와 프라이버시예산파라미터 컴퓨터과학 및 차분 프라이버시와 노이즈 메커니즘의 언어

---

### 차분프라이버시보장

- **발음:** [차:분프라이버시보:장]
- **품사:** 명사
- **핵심 의미:** 데이터베이스에 특정 개인의 데이터가 포함되어 있든 없든 질의(Query) 결과의 확률 분포가 통계적으로 거의 구별되지 않도록 엄격한 수학적 한계(ε, δ)를 부여함으로써, 임의의 부가 정보나 보조 데이터셋을 가진 공격자로부터도 개인의 참여 여부를 수학적으로 보장하는 첨단 프라이버시 보호 정의.
- **베트남어 뜻:** Bảo đảm quyền riêng tư vi sai Differential Privacy Guarantee (định nghĩa bảo vệ quyền riêng tư tiên tiến đưa ra giới hạn toán học nghiêm ngặt để phân bố xác suất kết quả truy vấn gần như không thể phân biệt về mặt thống kê dù dữ liệu của một cá nhân cụ thể có trong cơ sở dữ liệu hay không, qua đó bảo đảm về mặt toán học việc cá nhân có tham gia hay không trước kẻ tấn công nắm giữ bất kỳ thông tin phụ trợ nào)
- **뉘앙스와 사용법:** Chuẩn mực vàng (Gold Standard) hiện đại trong bảo vệ dữ liệu, vượt trội hoàn toàn so với các kỹ thuật ẩn danh hóa truyền thống dễ bị tấn công liên kết (Re-identification Attack).
- **재사용 가능한 콜로케이션·청크:**
  - 엄격한 차분프라이버시보장 (bảo đảm quyền riêng tư vi sai nghiêm ngặt)
  - 차분프라이버시보장 프레임워크 (khung bảo đảm quyền riêng tư vi sai)
  - 차분프라이버시보장의 수학적증명 (chứng minh toán học của bảo đảm quyền riêng tư vi sai)
- **자주 쓰는 문형과 성분:**
  - 차분프라이버시보장을(를) 인구조사 통계 공표 시스템에 적용하여 개인 식별 위험을 원천 차단하다 (áp dụng bảo đảm quyền riêng tư vi sai vào hệ thống công bố số liệu điều tra dân số để chặn đứng từ gốc rễ nguy cơ tái định danh cá nhân)
  - 차분프라이버시보장이(가) 머신러닝 학습 모델의 가중치 업데이트 과정에 주입되어 학습 데이터 역추적을 방지하다 (bảo đảm quyền riêng tư vi sai được đưa vào quá trình cập nhật trọng số mô hình học máy nhằm ngăn chặn việc đảo ngược suy luận dữ liệu huấn luyện)
- **사회적 관계·주제별 register:** Mật mã học (Cryptography), khoa học dữ liệu bảo mật (Data Privacy), an toàn thông tin.
- **예문:**
  - 의료 빅데이터 분석 시스템에 엄격한 차분프라이버시보장을 적용하여 환자 신원을 보호했다.
- **Dịch:**
  - Hệ thống phân tích dữ liệu lớn y tế đã áp dụng sự bảo đảm quyền riêng tư vi sai nghiêm ngặt để bảo vệ danh tính bệnh nhân.
- **어휘 연결:**
  - 유의어: `엡실론차분프라이버시` (quyền riêng tư vi sai epsilon epsilon-differential privacy)
  - 관련어: `재식별공격차단` (chặn đứng tấn công tái định danh re-identification attack blocking)
- **영어 참고:** `differential privacy guarantee` — bảo đảm quyền riêng tư vi sai dựa trên cơ sở toán học

---

### 라플라스노이즈메커니즘

- **발음:** [라플라스노이즈메커니즘]
- **품사:** 명사
- **핵심 의미:** 질의 함수의 L1 전역 민감도(Global Sensitivity)를 프라이버시 파라미터 엡실론(ε)으로 나눈 값을 척도 모수(Scale)로 삼는 라플라스 확률 분포에서 무작위 노이즈를 추출하여 원본 쿼리 결과값에 직접 더해주는 대표적인 차분 프라이버시 섭동(Perturbation) 알고리즘.
- **베트남어 뜻:** Cơ chế nhiễu Laplace Laplace Noise Mechanism (thuật toán gây nhiễu quyền riêng tư vi sai kinh điển lấy ngẫu nhiên giá trị nhiễu từ phân bố xác suất Laplace có tham số tỷ lệ bằng độ nhạy toàn cục L1 chia cho tham số riêng tư epsilon rồi cộng trực tiếp vào kết quả truy vấn gốc)
- **뉘앙스와 사용법:** Cơ chế cơ bản và hoàn hảo nhất cho các truy vấn trả về giá trị số thực (Numerical Query) dưới chuẩn ε-차분 프라이버시 thuần túy.
- **재사용 가능한 콜로케이션·청크:**
  - 표준 라플라스노이즈메커니즘 (cơ chế nhiễu Laplace tiêu chuẩn)
  - 라플라스노이즈메커니즘 적용 (áp dụng cơ chế nhiễu Laplace)
  - 라플라스노이즈메커니즘의 오차범위 (phạm vi sai số của cơ chế nhiễu Laplace)
- **자주 쓰는 문형과 성분:**
  - 라플라스노이즈메커니즘을(를) 집계 쿼리에 적용하여 정확도 손실을 최소화하면서 프라이버시를 수학적으로 보장하다 (áp dụng cơ chế nhiễu Laplace vào truy vấn tổng hợp để bảo đảm quyền riêng tư về mặt toán học trong khi giảm thiểu tổn thất độ chính xác)
  - 라플라스노이즈메커니즘의(의) 노이즈 분산은 엡실론 값이 작아질수록 급격히 증가하여 데이터 유용성을 저하시킨다 (phương sai nhiễu của cơ chế nhiễu Laplace tăng vọt khi giá trị epsilon càng nhỏ làm giảm sút tính hữu dụng của dữ liệu)
- **사회적 관계·주제별 register:** Lý thuyết thông tin bảo mật, xác suất thống kê ứng dụng.
- **예문:**
  - 연구진은 통계 출력값에 라플라스노이즈메커니즘을 적용하여 개인 정보 누출을 방지했다.
- **Dịch:**
  - Nhóm nghiên cứu đã áp dụng cơ chế nhiễu Laplace vào giá trị đầu ra thống kê nhằm ngăn ngừa rò rỉ thông tin cá nhân.
- **어휘 연결:**
  - 유의어: `라플라스분포함수` (hàm phân bố Laplace Laplace distribution function)
  - 관련어: `전역민감도척도` (thước đo độ nhạy toàn cục global sensitivity scale)
- **영어 참고:** `Laplace noise mechanism` — cơ chế thêm nhiễu Laplace trong quyền riêng tư vi sai

---

### 가우시안교란알고리즘

- **발음:** [가우시안교란알고리즘]
- **품사:** 명사
- **핵심 의미:** 질의 함수의 L2 민감도를 기반으로 평균이 0이고 표준편차가 (ε, δ) 프라이버시 파라미터에 비례하여 설계된 정규분포(가우시안 분포) 노이즈를 생성하여 고차원 벡터 데이터나 딥러닝 경사 하강법에 주입하는 이완된 차분 프라이버시 메커니즘.
- **베트남어 뜻:** Thuật toán gây nhiễu Gaussian Gaussian Perturbation Algorithm (cơ chế quyền riêng tư vi sai nới lỏng tạo ra nhiễu phân bố chuẩn Gaussian có trung bình bằng 0 và độ lệch chuẩn tỷ lệ thuận với tham số riêng tư epsilon và delta dựa trên độ nhạy L2 để bơm vào dữ liệu vector đa chiều hoặc thuật toán hạ gradient trong học sâu)
- **뉘앙스와 사용법:** Vũ khí chủ lực trong DP-SGD (Differential Privacy Stochastic Gradient Descent) huấn luyện mô hình ngôn ngữ lớn (LLM) và mạng nơ-ron mà không làm lộ dữ liệu huấn luyện.
- **재사용 가능한 콜로케이션·청크:**
  - 안정적인 가우시안교란알고리즘 (thuật toán gây nhiễu Gaussian ổn định)
  - 가우시안교란알고리즘 구현 (hiện thực hóa thuật toán gây nhiễu Gaussian)
  - 가우시안교란알고리즘의 분산제어 (kiểm soát phương sai của thuật toán gây nhiễu Gaussian)
- **자주 쓰는 문형과 성분:**
  - 가우시안교란알고리즘을(를) 신경망 경사 클리핑(Gradient Clipping) 이후에 결합하여 (ε, δ)-차분 프라이버시를 달성하다 (kết hợp thuật toán gây nhiễu Gaussian sau khi cắt tỉa gradient mạng nơ-ron để đạt được quyền riêng tư vi sai (epsilon, delta))
  - 가우시안교란알고리즘이(가) 다변량 벡터 질의 환경에서 라플라스 메커니즘보다 우수한 효용성-보안 트레이드오프를 제공하다 (thuật toán gây nhiễu Gaussian mang lại sự đánh đổi giữa tính bảo mật và hữu ích vượt trội hơn cơ chế Laplace trong môi trường truy vấn vector đa biến)
- **사회적 관계·주제별 register:** Học sâu bảo mật (Private Deep Learning), thị giác máy tính bảo vệ riêng tư.
- **예문:**
  - 딥러닝 모델의 경사 하강 단계에 가우시안교란알고리즘을 도입하여 가중치를 보호했다.
- **Dịch:**
  - Thuật toán gây nhiễu Gaussian đã được áp dụng vào bước hạ gradient của mô hình học sâu để bảo vệ các trọng số.
- **어휘 연결:**
  - 유의어: `차분프라이버시경사하강법` (hạ gradient ngẫu nhiên riêng tư vi sai DP-SGD)
  - 관련어: `엘투민감도계산` (tính toán độ nhạy L2 L2 sensitivity computation)
- **영어 참고:** `Gaussian perturbation algorithm` — thuật toán gây nhiễu Gaussian bảo vệ quyền riêng tư

---

### 프라이버시예산파라미터

- **발음:** [프라이버시예:산파라미터]
- **품사:** 명사
- **핵심 의미:** 차분 프라이버시 시스템에서 허용 가능한 프라이버시 손실의 총량을 통제하는 양의 실수 매개변수 엡실론(ε)으로, 데이터베이스에 대한 질의가 누적될수록 소진되는 프라이버시 보호 비용의 상한선 단위.
- **베트남어 뜻:** Tham số ngân sách quyền riêng tư Privacy Budget Parameter (thông số số thực dương epsilon khống chế tổng mức tổn thất quyền riêng tư cho phép trong hệ thống riêng tư vi sai, đóng vai trò như định mức chi phí bảo vệ cạn kiệt dần khi các truy vấn vào cơ sở dữ liệu được tích lũy thêm)
- **뉘앙스와 사용법:** Giá trị ε càng nhỏ (ví dụ 0.1, 0.5) thì bảo mật càng mạnh nhưng dữ liệu càng nhiều nhiễu; ε càng lớn thì dữ liệu càng chính xác nhưng nguy cơ lộ thông tin càng cao.
- **재사용 가능한 콜로케이션·청크:**
  - 제한된 프라이버시예산파라미터 (tham số ngân sách quyền riêng tư giới hạn)
  - 프라이버시예산파라미터 설정 (thiết lập tham số ngân sách quyền riêng tư)
  - 프라이버시예산파라미터의 소진율 (tốc độ tiêu hao tham số ngân sách quyền riêng tư)
- **자주 쓰는 문형과 성분:**
  - 프라이버시예산파라미터를(를) 각 질의 작업에 분할 배정하여 누적 손실이 총 예산을 초과하지 않도록 관리하다 (phân bổ tham số ngân sách riêng tư cho từng tác vụ truy vấn để kiểm soát tổn thất tích lũy không vượt quá tổng ngân sách)
  - 프라이버시예산파라미터가(이) 모두 소진되면 데이터베이스 엔진은 정보 유출을 막기 위해 추가 질의를 자동으로 거부한다 (khi tham số ngân sách riêng tư cạn kiệt hoàn toàn, công cụ cơ sở dữ liệu sẽ tự động từ chối các truy vấn tiếp theo để ngăn ngừa lộ thông tin)
- **사회적 관계·주제별 register:** Quản trị dữ liệu (Data Governance), kiến trúc hệ thống bảo mật.
- **예문:**
  - 시스템 관리자는 프라이버시예산파라미터가 모두 소진된 사용자의 추가 질의를 차단했다.
- **Dịch:**
  - Người quản trị hệ thống đã chặn các truy vấn tiếp theo của người dùng khi tham số ngân sách quyền riêng tư đã bị tiêu hao hết.
- **어휘 연결:**
  - 유의어: `합성정리누적손실` (tổn thất tích lũy theo định lý hợp thành composition theorem loss)
  - 관련어: `모멘트어카운턴트` (cơ chế kế toán mô-men moments accountant)
- **영어 참고:** `privacy budget parameter` — tham số ngân sách riêng tư epsilon trong DP

---

### 국소차분프라이버시

- **발음:** [국소차:분프라이버시]
- **품사:** 명사
- **핵심 의미:** 중앙 서버를 신뢰할 수 없는 환경에서 개별 사용자가 자신의 단말기(스마트폰, IoT 기기 등)에서 데이터를 중앙 서버로 전송하기 전에 로컬에서 직접 노이즈를 주입하여 교란된 데이터만을 전송하는 탈중앙화 차분 프라이버시 기법(LDP).
- **베트남어 뜻:** Quyền riêng tư vi sai cục bộ Local Differential Privacy LDP (kỹ thuật riêng tư vi sai phi tập trung trong môi trường máy chủ trung tâm không đáng tin cậy, nơi từng người dùng trực tiếp tự bơm nhiễu ngay tại thiết bị đầu cuối như điện thoại hoặc thiết bị IoT trước khi gửi dữ liệu lên máy chủ, chỉ truyền đi dữ liệu đã bị xáo trộn)
- **뉘앙스와 사용법:** Được Apple, Google, Microsoft triển khai thu thập dữ liệu gõ bàn phím và lỗi ứng dụng hàng ngày từ hàng trăm triệu điện thoại di động mà không xâm phạm đời tư người dùng.
- **재사용 가능한 콜로케이션·청크:**
  - 탈중앙화 국소차분프라이버시 (quyền riêng tư vi sai cục bộ phi tập trung)
  - 국소차분프라이버시 프로토콜 (giao thức quyền riêng tư vi sai cục bộ)
  - 국소차분프라이버시의 통계복원력 (khả năng khôi phục thống kê của quyền riêng tư vi sai cục bộ)
- **자주 쓰는 문형과 성분:**
  - 국소차분프라이버시를(를) 모바일 기기 키보드 추천어 수집에 적용하여 서버 관리자조차 개별 사용자의 입력 단어를 알 수 없게 하다 (áp dụng quyền riêng tư vi sai cục bộ vào việc thu thập từ gợi ý bàn phím điện thoại để ngay cả quản trị máy chủ cũng không thể biết từ người dùng nhập)
  - 국소차분프라이버시가(이) 개별 단말기에서 주입하는 노이즈 규모가 커서 중앙 차분 프라이버시보다 훨씬 많은 샘플 수를 요구하다 (do lượng nhiễu mà quyền riêng tư vi sai cục bộ bơm tại từng thiết bị khá lớn nên đòi hỏi số lượng mẫu nhiều hơn nhiều so với riêng tư vi sai trung tâm)
- **사회적 관계·주제별 register:** An toàn thông tin di động, điện toán biên (Edge Computing).
- **예문:**
  - 애플은 운영체제 원격 측정 데이터 수집에 국소차분프라이버시 알고리즘을 도입했다.
- **Dịch:**
  - Apple đã đưa thuật toán quyền riêng tư vi sai cục bộ vào việc thu thập dữ liệu đo từ xa của hệ điều hành.
- **어휘 연결:**
  - 유의어: `무작위응답기법` (kỹ thuật phản hồi ngẫu nhiên randomized response technique)
  - 관련어: `분산원격측정데이터` (dữ liệu đo từ xa phân tán distributed telemetry data)
- **영어 참고:** `local differential privacy` — quyền riêng tư vi sai cục bộ tại thiết bị người dùng

---

### 인접데이터셋식별성

- **발음:** [인접데이터셋식별썽]
- **품사:** 명사
- **핵심 의미:** 단 한 명의 개인 레코드가 추가되거나 삭제된 관계에 있는 두 개의 데이터베이스(인접 데이터셋, Neighboring Datasets)에 동일한 알고리즘을 실행했을 때, 출력 결과물로부터 두 데이터셋 중 어느 것이 사용되었는지를 통계적으로 식별해낼 수 있는 판별 가능성.
- **베트남어 뜻:** Khả năng phân biệt tập dữ liệu láng giềng Neighboring Dataset Identifiability (khả năng nhận diện về mặt thống kê từ kết quả đầu ra xem tập dữ liệu nào trong hai cơ sở dữ liệu láng giềng - chỉ sai khác đúng một bản ghi cá nhân được thêm vào hoặc loại bỏ - đã được sử dụng khi chạy cùng một thuật toán)
- **뉘앙스와 사용법:** Mục tiêu cốt lõi của 차분 프라이버시는 바로 이 식별성을 수학적 상한선(e^ε) 이내로 묶어 공격자가 특정인의 데이터 유무를 판별할 수 없게 만드는 것이다.
- **재사용 가능한 콜로케이션·청크:**
  - 낮은 인접데이터셋식별성 (khả năng phân biệt tập dữ liệu láng giềng thấp)
  - 인접데이터셋식별성 측정 (đo lường khả năng phân biệt tập dữ liệu láng giềng)
  - 인접데이터셋식별성의 수학적경계 (ranh giới toán học của khả năng phân biệt tập dữ liệu láng giềng)
- **자주 쓰는 문형과 성분:**
  - 인접데이터셋식별성을(를) 확률 비율의 유계성(Boundedness)으로 통제함으로써 임의의 한 레코드의 기여도를 은닉하다 (kiểm soát khả năng phân biệt tập dữ liệu láng giềng bằng tính bị chặn của tỷ số xác suất để che giấu đóng góp của bất kỳ một bản ghi nào)
  - 인접데이터셋식별성이(가) 노이즈 주입 강도에 반비례하여 감소하므로 엄격한 수학적 증명이 필수적이다 (khả năng phân biệt tập dữ liệu láng giềng giảm tỷ lệ nghịch với cường độ thêm nhiễu nên việc chứng minh toán học nghiêm ngặt là điều bắt buộc)
- **사회적 관계·주제별 register:** Mật mã học lý thuyết (Theoretical Cryptography), độ phức tạp tính toán.
- **예문:**
  - 차분 프라이버시의 핵심 원리는 인접데이터셋식별성을 수학적으로 최소화하는 것이다.
- **Dịch:**
  - Nguyên lý cốt lõi của quyền riêng tư vi sai là giảm thiểu khả năng phân biệt tập dữ liệu láng giềng về mặt toán học.
- **어휘 연결:**
  - 유의어: `해밍거리차이` (khoảng cách Hamming hamming distance difference)
  - 관련어: `로그우도비율한계` (giới hạn tỷ số log-likelihood log-likelihood ratio bound)
- **영어 참고:** `neighboring dataset identifiability` — khả năng phân biệt các tập dữ liệu kế cận nhau

---

### 민감도함수계산기법

- **발음:** [민감도함수계:산기법]
- **품사:** 명사
- **핵심 의미:** 하나의 레코드가 변경될 때 질의 함수의 출력값이 이론상 최악의 경우(Worst-case) 최대 얼마만큼 변할 수 있는지를 나타내는 L1 또는 L2 전역/국소 민감도를 엄밀하게 유도하고 계산하는 수학적 분석 기법.
- **베트남어 뜻:** Kỹ thuật tính hàm độ nhạy Sensitivity Function Calculation Technique (kỹ thuật phân tích toán học nhằm suy dẫn và tính toán chặt chẽ độ nhạy cục bộ hoặc toàn cục L1/L2 biểu thị mức biến đổi tối đa trong trường hợp xấu nhất của giá trị đầu ra hàm truy vấn khi thay đổi đúng một bản ghi dữ liệu)
- **뉘앙스와 사용법:** Độ nhạy quyết định trực tiếp lượng nhiễu cần thêm vào; nếu tính toán sai độ nhạy, toàn bộ chứng minh 차분 프라이버시는 무효가 된다.
- **재사용 가능한 콜로케이션·청크:**
  - 정밀한 민감도함수계산기법 (kỹ thuật tính hàm độ nhạy chính xác cao)
  - 민감도함수계산기법 적용 (áp dụng kỹ thuật tính hàm độ nhạy)
  - 민감도함수계산기법의 상한도출 (rút ra cận trên của kỹ thuật tính hàm độ nhạy)
- **자주 쓰는 문형과 성분:**
  - 민감도함수계산기법을(를) 활용하여 비선형 복합 쿼리의 매끄러운 민감도(Smooth Sensitivity)를 성공적으로 상계하다 (sử dụng kỹ thuật tính hàm độ nhạy để chặn trên thành công độ nhạy trơn của các truy vấn phi tuyến phức tạp)
  - 민감도함수계산기법이(가) 노이즈 규모를 결정하는 척도 모수를 산출하는 필수 전제 조건으로 작용하다 (kỹ thuật tính hàm độ nhạy đóng vai trò điều kiện tiên quyết bắt buộc để tính toán tham số tỷ lệ xác định quy mô lượng nhiễu)
- **사회적 관계·주제별 register:** Toán học tối ưu hóa, lý thuyết giải thuật bảo mật.
- **예문:**
  - 복잡한 그래프 질의에 적합한 민감도함수계산기법을 적용하여 필요한 최소 노이즈 크기를 구했다.
- **Dịch:**
  - Kỹ thuật tính hàm độ nhạy thích hợp cho các truy vấn đồ thị phức tạp đã được áp dụng để tìm ra quy mô nhiễu tối thiểu cần thiết.
- **어휘 연결:**
  - 유의어: `전역민감도상한` (cận trên độ nhạy toàn cục global sensitivity upper bound)
  - 관련어: `평활민감도근사` (xấp xỉ độ nhạy trơn smooth sensitivity approximation)
- **영어 참고:** `sensitivity function calculation technique` — kỹ thuật tính toán hàm độ nhạy của hàm truy vấn

---

### 합성데이터생성기법

- **발음:** [합성데이터생성기법]
- **품사:** 명사
- **핵심 의미:** 원본 데이터의 결합 확률 분포와 통계적 상관관계를 학습하되 학습 과정에 차분 프라이버시 노이즈를 주입하여 생성 모델(GAN, Diffusion 등)을 훈련한 후, 실제 원본 개인 정보는 일체 포함하지 않으면서도 원본과 통계적 특성이 동일한 가상의 레코드를 무한히 만들어내는 기술.
- **베트남어 뜻:** Kỹ thuật tạo dữ liệu tổng hợp Synthetic Data Generation Technique (công nghệ học phân bố xác suất kết hợp và tương quan thống kê của dữ liệu gốc bằng cách đưa nhiễu riêng tư vi sai vào quá trình huấn luyện mô hình sinh GAN hoặc Diffusion, sau đó tạo ra vô số bản ghi giả lập có đặc tính thống kê giống hệt dữ liệu gốc mà không chứa bất kỳ thông tin cá nhân thực tế nào)
- **뉘앙스와 사용법:** Cho phép các tổ chức tài chính và bệnh viện chia sẻ dữ liệu cho bên thứ ba nghiên cứu mà hoàn toàn tuân thủ các đạo luật bảo vệ dữ liệu gắt gao như GDPR.
- **재사용 가능한 콜로케이션·청크:**
  - 안전한 합성데이터생성기법 (kỹ thuật tạo dữ liệu tổng hợp an toàn)
  - 합성데이터생성기법 개발 (phát triển kỹ thuật tạo dữ liệu tổng hợp)
  - 합성데이터생성기법의 통계유사도 (độ tương đồng thống kê của kỹ thuật tạo dữ liệu tổng hợp)
- **자주 쓰는 문형과 성분:**
  - 합성데이터생성기법을(를) 활용하여 개인 식별 위험 없이 금융 사기 탐지 머신러닝 모델을 오픈소스 생태계에 배포하다 (tận dụng kỹ thuật tạo dữ liệu tổng hợp để triển khai mô hình học máy phát hiện gian lận tài chính vào hệ sinh thái mã nguồn mở mà không có rủi ro lộ danh tính)
  - 합성데이터생성기법이(가) 희귀 질환 임상 연구에서 환자 사생활 보호와 데이터 공유의 딜레마를 완벽히 해결하다 (kỹ thuật tạo dữ liệu tổng hợp giải quyết triệt để thế lưỡng nan giữa bảo vệ đời tư bệnh nhân và chia sẻ dữ liệu trong nghiên cứu lâm sàng các bệnh hiếm)
- **사회적 관계·주제별 register:** AI tạo sinh bảo mật (Private Generative AI), quản lý dữ liệu lớn y tế.
- **예문:**
  - 의료 연구진은 차분 프라이버시 기반 합성데이터생성기법을 통해 임상 데이터를 외부에 공개했다.
- **Dịch:**
  - Đội ngũ nghiên cứu y tế đã công bố dữ liệu lâm sàng ra bên ngoài thông qua kỹ thuật tạo dữ liệu tổng hợp dựa trên quyền riêng tư vi sai.
- **어휘 연결:**
  - 유의어: `차분프라이버시생성모델` (mô hình tạo sinh riêng tư vi sai DP generative model)
  - 관련어: `주변확률분포보존` (bảo tồn phân bố xác suất biên marginal probability preservation)
- **영어 참고:** `synthetic data generation technique` — kỹ thuật sinh dữ liệu tổng hợp bảo đảm riêng tư vi sai

---

### 지수메커니즘선택확률

- **발음:** [지수메커니즘선택확률]
- **품사:** 명사
- **핵심 의미:** 비수치적(Categorical) 출력값을 선택해야 하는 최적화 문제에서, 각 출력 후보의 품질 점수 함수(Quality Function)에 비례하는 지수 확률 분포(Exponential Distribution)에 따라 특정 후보가 최종 해답으로 선택될 확률.
- **베트남어 뜻:** Xác suất lựa chọn cơ chế hàm mũ Exponential Mechanism Selection Probability (xác suất mà một ứng viên cụ thể được chọn làm lời giải cuối cùng theo phân bố xác suất hàm mũ tỷ lệ thuận với hàm điểm chất lượng của từng ứng viên trong các bài toán tối ưu hóa lựa chọn kết quả phi số rời rạc)
- **뉘앙스와 사용법:** Cơ chế tổng quát tối cao trong 차분 프라이버시: khi bài toán không thể thêm nhiễu số trực tiếp (như bầu chọn người thắng cuộc hoặc tìm cụm tối ưu), cơ chế hàm mũ sẽ chọn ngẫu nhiên có trọng số.
- **재사용 가능한 콜로케이션·청크:**
  - 비례하는 지수메커니즘선택확률 (xác suất lựa chọn cơ chế hàm mũ tỷ lệ thuận)
  - 지수메커니즘선택확률 계산 (tính toán xác suất lựa chọn cơ chế hàm mũ)
  - 지수메커니즘선택확률의 정규화 (chuẩn hóa xác suất lựa chọn cơ chế hàm mũ)
- **자주 쓰는 문형과 성분:**
  - 지수메커니즘선택확률에(에) 따라 최고 품질 점수를 가진 후보가 가장 높은 확률로 선정되도록 보장하다 (bảo đảm ứng viên có điểm chất lượng cao nhất được lựa chọn với xác suất cao nhất dựa theo xác suất lựa chọn cơ chế hàm mũ)
  - 지수메커니즘선택확률의(의) 깁스 샘플링(Gibbs Sampling)을 통해 고차원 조합 최적화 공간에서 프라이버시를 유지하며 최적해를 탐색하다 (tìm kiếm nghiệm tối ưu trong không gian tối ưu tổ hợp đa chiều trong khi vẫn duy trì quyền riêng tư thông qua lấy mẫu Gibbs của xác suất lựa chọn cơ chế hàm mũ)
- **사회적 관계·주제별 register:** Lý thuyết thuật toán ngẫu nhiên (Randomized Algorithms), lý thuyết trò chơi bảo mật.
- **예문:**
  - 지수메커니즘선택확률 공식을 바탕으로 최고 평점 후보를 프라이버시 침해 없이 선발했다.
- **Dịch:**
  - Dựa trên công thức xác suất lựa chọn cơ chế hàm mũ, ứng viên có xếp hạng cao nhất đã được chọn lựa mà không xâm phạm quyền riêng tư.
- **어휘 연결:**
  - 유의어: `효용품질점수함수` (hàm điểm chất lượng hữu ích utility quality scoring function)
  - 관련어: `볼츠만확률분포` (phân bố xác suất Boltzmann Boltzmann probability distribution)
- **영어 참고:** `exponential mechanism selection probability` — xác suất chọn lựa của cơ chế hàm mũ trong DP

---

### 개인정보유출상한선

- **발음:** [개:인정보유출상:한선]
- **품사:** 명사
- **핵심 의미:** 임의의 데이터 분석 및 질의 응답 시스템에서 공격자가 아무리 정교한 배경 지식을 동원하더라도 특정 개인의 민감 정보를 재식별하거나 추론할 수 있는 성공 확률에 대해 법적·수학적으로 설정된 절대적인 최대 임계치.
- **베트남어 뜻:** Cận trên rò rỉ thông tin cá nhân Personal Information Leakage Upper Bound (ngưỡng tối đa tuyệt đối được thiết lập về mặt pháp lý và toán học đối với xác suất thành công mà kẻ tấn công có thể tái định danh hoặc suy luận thông tin nhạy cảm của một cá nhân dù huy động bất kỳ kiến thức nền tảng tinh vi nào)
- **뉘앙스와 사용법:** Điểm mấu chốt để các hệ thống công nghệ thông tin chứng minh sự tuân thủ quy định bảo mật trước các cơ quan kiểm toán dữ liệu quốc tế.
- **재사용 가능한 콜로케이션·청크:**
  - 엄격한 개인정보유출상한선 (cận trên rò rỉ thông tin cá nhân nghiêm ngặt)
  - 개인정보유출상한선 설정 (thiết lập cận trên rò rỉ thông tin cá nhân)
  - 개인정보유출상한선의 수학적준수 (tuân thủ về mặt toán học cận trên rò rỉ thông tin cá nhân)
- **자주 쓰는 문형과 성분:**
  - 개인정보유출상한선을(를) 수식으로 명확히 규정하여 데이터베이스 운영자에게 법적 책임을 면제하는 근거를 마련하다 (quy định rõ ràng cận trên rò rỉ thông tin cá nhân bằng công thức toán học để tạo cơ sở miễn trừ trách nhiệm pháp lý cho nhà vận hành cơ sở dữ liệu)
  - 개인정보유출상한선이(가) 프라이버시 파라미터 델타(δ)와 엡실론(ε)에 의해 빈틈없이 통제되다 (cận trên rò rỉ thông tin cá nhân được kiểm soát chặt chẽ không một kẽ hở bởi tham số riêng tư delta và epsilon)
- **사회적 관계·주제별 register:** Luật an toàn thông tin, kiểm toán bảo mật dữ liệu.
- **예문:**
  - 보안 표준은 어떤 분석에서도 개인정보유출상한선을 절대 넘지 못하도록 규정하고 있다.
- **Dịch:**
  - Tiêu chuẩn bảo mật quy định tuyệt đối không được vượt quá cận trên rò rỉ thông tin cá nhân trong bất kỳ phân tích nào.
- **어휘 연결:**
  - 유의어: `정보이론적보안성` (tính bảo mật theo lý thuyết thông tin information-theoretic security)
  - 관련어: `최악조건위험한도` (hạn mức rủi ro trong điều kiện tồi tệ nhất worst-case risk bound)
- **영어 참고:** `personal information leakage upper bound` — cận trên rò rỉ thông tin cá nhân theo lý thuyết bảo mật

---

### 노이즈주입왜곡보정

- **발음:** [노이즈주입왜곡보:정]
- **품사:** 명사
- **핵심 의미:** 차분 프라이버시 보장을 위해 무작위로 주입된 라플라스나 가우시안 노이즈로 인해 왜곡된 통계 집계값(합계, 평균, 분위수 등)에서 편향(Bias)을 제거하고 비음수성(Non-negativity) 및 일관성(Consistency) 제약 조건을 복원하는 통계적 후처리 보정 기법.
- **베트남어 뜻:** Hiệu chỉnh biến dạng do bơm nhiễu Noise Injection Distortion Correction (kỹ thuật hiệu chỉnh hậu xử lý thống kê nhằm loại bỏ độ chệch và khôi phục các ràng buộc về tính nhất quán và tính không âm từ các giá trị tổng hợp thống kê bị méo mó do nhiễu Laplace hoặc Gaussian được thêm vào để bảo đảm quyền riêng tư vi sai)
- **뉘앙스와 사용법:** Thuộc tính hậu xử lý (Post-Processing Property) của 차분 프라이버시 덕분에 이러한 보정 작업을 거쳐도 프라이버시 보장 수준은 전혀 약화되지 않는다.
- **재사용 가능한 콜로케이션·청크:**
  - 정밀 노이즈주입왜곡보정 (hiệu chỉnh biến dạng do bơm nhiễu chính xác cao)
  - 노이즈주입왜곡보정 알고리즘 (thuật toán hiệu chỉnh biến dạng do bơm nhiễu)
  - 노이즈주입왜곡보정의 통계적일관성 (tính nhất quán thống kê của hiệu chỉnh biến dạng do bơm nhiễu)
- **자주 쓰는 문형과 성분:**
  - 노이즈주입왜곡보정을(를) 통해 인구 통계의 소지역 합계가 대지역 합계와 정확히 일치하도록 조율하다 (thông qua hiệu chỉnh biến dạng do bơm nhiễu điều hòa để tổng số liệu các khu vực nhỏ khớp chính xác với tổng số liệu khu vực lớn trong thống kê dân số)
  - 노이즈주입왜곡보정이(가) 원본 노이즈 데이터의 음수 추정치를 영(0) 이상으로 투영하여 데이터의 직관적 해석 가능성을 회복하다 (hiệu chỉnh biến dạng do bơm nhiễu chiếu các ước tính mang giá trị âm của dữ liệu nhiễu gốc về từ 0 trở lên để khôi phục khả năng diễn giải trực quan của dữ liệu)
- **사회적 관계·주제별 register:** Thống kê toán học hậu xử lý, tối ưu hóa có ràng buộc (Constrained Optimization).
- **예문:**
  - 집계 결과의 신뢰도를 높이기 위해 노이즈주입왜곡보정 알고리즘을 추가로 적용했다.
- **Dịch:**
  - Thuật toán hiệu chỉnh biến dạng do bơm nhiễu đã được áp dụng bổ sung nhằm nâng cao độ tin cậy của kết quả tổng hợp.
- **어휘 연결:**
  - 유의어: `후처리불변성` (tính bất biến hậu xử lý post-processing immunity)
  - 관련어: `제약조건최적화투영` (phép chiếu tối ưu hóa có ràng buộc constrained optimization projection)
- **영어 참고:** `noise injection distortion correction` — hiệu chỉnh sự biến dạng do bơm thêm nhiễu bảo mật

---

### 연합학습프라이버시보호

- **발음:** [연합학습프라이버시보:호]
- **품사:** 명사
- **핵심 의미:** 다수의 분산 클라이언트가 원시 데이터를 중앙 서버로 전송하지 않고 로컬 기기에서 모델을 학습시킨 후 가중치 업데이트 신호만을 공유하는 연합학습(Federated Learning) 환경에서, 경사도 노이즈 주입과 동형암호를 결합하여 참여자의 원본 훈련 데이터를 완벽히 지키는 보안 체계.
- **베트남어 뜻:** Bảo vệ quyền riêng tư trong học liên kết Federated Learning Privacy Protection (hệ thống an ninh kết hợp mã hóa đồng hình và bơm nhiễu gradient trong môi trường học liên kết, nơi nhiều máy khách phân tán huấn luyện mô hình ngay tại thiết bị cục bộ mà không gửi dữ liệu thô về máy chủ trung tâm chỉ chia sẻ tín hiệu cập nhật trọng số nhằm bảo vệ toàn diện dữ liệu huấn luyện gốc của người tham gia)
- **뉘앙스와 사용법:** Sự kết hợp giữa 연합학습(FL) và 차분 프라이버시(DP) là tiêu chuẩn bảo mật tối thượng cho các hệ thống AI y tế đa bệnh viện và phân tích tài chính ngân hàng xuyên biên giới.
- **재사용 가능한 콜로케이션·청크:**
  - 견고한 연합학습프라이버시보호 (bảo vệ quyền riêng tư trong học liên kết vững chắc)
  - 연합학습프라이버시보호 체계 (hệ thống bảo vệ quyền riêng tư trong học liên kết)
  - 연합학습프라이버시보호의 효율성 (hiệu quả của bảo vệ quyền riêng tư trong học liên kết)
- **자주 쓰는 문형과 성분:**
  - 연합학습프라이버시보호를(를) 다기관 의료 영상 AI 연구에 도입하여 병원 간 환자 데이터 반출 없이 공동 모델을 성공적으로 훈련하다 (đưa bảo vệ quyền riêng tư trong học liên kết vào nghiên cứu AI hình ảnh y tế đa trung tâm để huấn luyện thành công mô hình chung mà không cần trích xuất dữ liệu bệnh nhân giữa các bệnh viện)
  - 연합학습프라이버시보호가(이) 서버 측 집계 과정에서 개별 노드의 그래디언트 역추적 공격을 원천 차단하다 (bảo vệ quyền riêng tư trong học liên kết chặn đứng từ gốc rễ các cuộc tấn công đảo ngược gradient từng nút trong quá trình tổng hợp phía máy chủ)
- **사회적 관계·주제별 register:** Học máy phân tán (Distributed Machine Learning), trí tuệ nhân tạo y tế.
- **예문:**
  - 여러 병원이 연합학습프라이버시보호 체계를 활용해 환자 정보 유출 없이 공동 모델을 개발했다.
- **Dịch:**
  - Nhiều bệnh viện đã phát triển mô hình chung mà không làm lộ thông tin bệnh nhân nhờ vận dụng hệ thống bảo vệ quyền riêng tư trong học liên kết.
- **어휘 연결:**
  - 유의어: `안전한다자간계산` (tính toán an toàn đa bên secure multi-party computation SMPC)
  - 관련어: `연합평균알고리즘` (thuật toán trung bình liên kết federated averaging FedAvg)
- **영어 참고:** `federated learning privacy protection` — bảo vệ quyền riêng tư trong học máy liên kết phân tán

---

### 질의응답왜곡프레임워크

- **발음:** [지리의응답왜곡프레임워크]
- **품사:** 명사
- **핵심 의미:** 대화형 데이터베이스나 API 엔드포인트를 통해 유입되는 사용자의 모든 SQL 질의문과 통계 연산 요청에 대해, 질의 민감도를 실시간으로 평가하고 수학적 노이즈를 자동으로 주입하여 왜곡된 결과만을 안전하게 반환하는 차분 프라이버시 미들웨어 프레임워크.
- **베트남어 뜻:** Khung làm lệch kết quả truy vấn đáp Query-Response Distortion Framework (khung phần mềm trung gian riêng tư vi sai đánh giá độ nhạy truy vấn theo thời gian thực đối với mọi câu lệnh SQL và yêu cầu tính toán thống kê từ người dùng qua cơ sở dữ liệu tương tác hoặc API endpoint, tự động bơm nhiễu toán học để chỉ trả về kết quả đã được làm lệch một cách an toàn)
- **뉘앙스와 사용법:** Cho phép các nhà khoa học dữ liệu truy vấn trực tiếp kho dữ liệu doanh nghiệp mà không cần người quản trị phải can thiệp cấp quyền từng dòng dữ liệu.
- **재사용 가능한 콜로케이션·청크:**
  - 자동화된 질의응답왜곡프레임워크 (khung làm lệch kết quả truy vấn đáp tự động hóa)
  - 질의응답왜곡프레임워크 구축 (xây dựng khung làm lệch kết quả truy vấn đáp)
  - 질의응답왜곡프레임워크의 응답지연 (độ trễ phản hồi của khung làm lệch kết quả truy vấn đáp)
- **자주 쓰는 문형과 성분:**
  - 질의응답왜곡프레임워크를(를) 클라우드 데이터 웨어하우스 앞단에 프록시로 배치하여 비인가 분석가로부터 민감 정보를 차단하다 (bố trí khung làm lệch kết quả truy vấn đáp làm proxy phía trước kho dữ liệu đám mây để ngăn chặn thông tin nhạy cảm khỏi các nhà phân tích chưa được ủy quyền)
  - 질의응답왜곡프레임워크가(이) 복합 집계 쿼리를 파싱하여 각 하위 쿼리의 프라이버시 손실을 동적으로 모니터링하다 (khung làm lệch kết quả truy vấn đáp phân tích các truy vấn tổng hợp phức tạp để giám sát động tổn thất riêng tư của từng truy vấn con)
- **사회적 관계·주제별 register:** Kiến trúc phần mềm trung gian (Middleware), an ninh cơ sở dữ liệu (Database Security).
- **예문:**
  - 기업은 민감한 고객 데이터베이스 앞에 질의응답왜곡프레임워크를 설치하여 데이터 유출을 방지했다.
- **Dịch:**
  - Doanh nghiệp đã cài đặt khung làm lệch kết quả truy vấn đáp phía trước cơ sở dữ liệu khách hàng nhạy cảm nhằm ngăn ngừa lộ dữ liệu.
- **어휘 연결:**
  - 유의어: `프라이버시보존질의` (truy vấn bảo tồn quyền riêng tư privacy-preserving query)
  - 관련어: `동적노이즈스케일러` (bộ co giãn thang nhiễu động dynamic noise scaler)
- **영어 참고:** `query-response distortion framework` — khung công tác làm biến dạng câu trả lời truy vấn bảo mật

---

### 멤버십추론공격방어

- **발음:** [멤버십추론공격방어]
- **품사:** 명사
- **핵심 의미:** 머신러닝 모델의 출력 확률 분포나 예측 신뢰도 점수를 분석하여 특정 개인의 레코드가 해당 모델의 훈련 데이터셋에 실제로 포함되어 있었는지를 탐지하려는 멤버십 추론 공격(Membership Inference Attack)을 차분 프라이버시 기반 가중치 정규화와 노이즈 주입으로 무력화하는 방어 기법.
- **베트남어 뜻:** Phòng thủ tấn công suy luận thành viên Membership Inference Attack Defense (kỹ thuật phòng thủ vô hiệu hóa các cuộc tấn công suy luận thành viên - vốn phân tích phân bố xác suất đầu ra hoặc điểm tin cậy dự đoán của mô hình học máy để dò tìm xem một bản ghi cá nhân cụ thể có thực sự nằm trong tập huấn luyện của mô hình hay không - bằng chuẩn hóa trọng số và bơm nhiễu riêng tư vi sai)
- **뉘앙스와 사용법:** Nếu một mô hình bị "overfitting" (quá khớp), kẻ tấn công rất dễ suy luận được thành viên; do đó 차분 프라이버시는 quá khớp을 억제하면서 완벽한 방어막을 제공한다.
- **재사용 가능한 콜로케이션·청크:**
  - 성공적인 멤버십추론공격방어 (phòng thủ tấn công suy luận thành viên thành công)
  - 멤버십추론공격방어 전략 (chiến lược phòng thủ tấn công suy luận thành viên)
  - 멤버십추론공격방어의 모델정확도영향 (ảnh hưởng của phòng thủ tấn công suy luận thành viên đến độ chính xác mô hình)
- **자주 쓰는 문형과 성분:**
  - 멤버십추론공격방어를(를) 위해 훈련 단계에서 차분 프라이버시 손실 함수를 적용하여 출력 엔트로피를 균일화하다 (áp dụng hàm tổn thất riêng tư vi sai trong giai đoạn huấn luyện để đồng đều hóa entropy đầu ra phục vụ phòng thủ tấn công suy luận thành viên)
  - 멤버십추론공격방어가(이) 활성화된 딥러닝 분류기는 타깃 사용자의 훈련 참여 여부에 대한 공격자의 예측 성공률을 동전 던지기 수준(50%)으로 떨어뜨리다 (bộ phân loại học sâu được kích hoạt phòng thủ tấn công suy luận thành viên làm giảm tỷ lệ dự đoán thành công của kẻ tấn công về việc người dùng mục tiêu có tham gia huấn luyện hay không xuống ngang mức tung đồng xu 50%)
- **사회적 관계·주제별 register:** An ninh mạng nơ-ron (Adversarial Machine Learning), phòng thủ mô hình AI.
- **예문:**
  - 강력한 멤버십추론공격방어 기법을 적용함으로써 인공지능 모델의 학습 데이터 유출을 원천 봉쇄했다.
- **Dịch:**
  - Bằng việc áp dụng kỹ thuật phòng thủ tấn công suy luận thành viên mạnh mẽ, việc lộ dữ liệu huấn luyện của mô hình trí tuệ nhân tạo đã bị phong tỏa triệt để.
- **어휘 연결:**
  - 유의어: `섀도우모델공격` (tấn công mô hình bóng ma shadow model attack)
  - 관련어: `과적합억제정규화` (chuẩn hóa ức chế quá khớp overfitting regularization)
- **영어 참고:** `membership inference attack defense` — phòng vệ trước các cuộc tấn công suy luận thành viên

---

### 통계적익명화수학검증

- **발음:** [통계적익명화수학검:증]
- **품사:** 명사
- **핵심 의미:** 익명화된 데이터셋이나 통계 집계 시스템이 휴리스틱한 가명화(Pseudonymization)나 k-익명성(k-Anonymity) 같은 경험적 방법에 의존하지 않고, 엡실론-차분 프라이버시의 정보이론적 부등식과 확률적 유계성을 충족함을 엄밀한 수학 공식으로 증명하고 검증하는 과학적 절차.
- **베트남어 뜻:** Kiểm chứng toán học ẩn danh hóa thống kê Statistical Anonymization Mathematical Verification (quy trình khoa học chứng minh và kiểm chứng bằng công thức toán học nghiêm ngặt rằng một tập dữ liệu ẩn danh hoặc hệ thống tổng hợp thống kê thỏa mãn các bất đẳng thức lý thuyết thông tin và tính bị chặn xác suất của quyền riêng tư vi sai epsilon thay vì dựa vào các phương pháp kinh nghiệm như đặt bí danh hoặc ẩn danh k-anonymity)
- **뉘앙스와 사용법:** Điều kiện tiên quyết để đạt được chứng chỉ bảo mật quốc tế cao cấp nhất (như ISO/IEC 27701) và vượt qua các cuộc kiểm toán độc lập của chính phủ.
- **재사용 가능한 콜로케이션·청크:**
  - 엄밀한 통계적익명화수학검증 (kiểm chứng toán học ẩn danh hóa thống kê nghiêm ngặt)
  - 통계적익명화수학검증 절차 (quy trình kiểm chứng toán học ẩn danh hóa thống kê)
  - 통계적익명화수학검증의 신뢰도 (độ tin cậy của kiểm chứng toán học ẩn danh hóa thống kê)
- **자주 쓰는 문형과 성분:**
  - 통계적익명화수학검증을(를) 통과하지 못한 비식별 조치는 재식별 공격의 표적이 되기 쉬우므로 전면 폐기되어야 한다 (các biện pháp phi định danh không vượt qua kiểm chứng toán học ẩn danh hóa thống kê rất dễ trở thành mục tiêu của tấn công tái định danh nên cần phải bị hủy bỏ hoàn toàn)
  - 통계적익명화수학검증이(가) 금융 및 보건 복지 공공 데이터 개방 사업의 법적 정당성을 확보하는 핵심 보증수표가 되다 (kiểm chứng toán học ẩn danh hóa thống kê trở thành tấm chi phiếu bảo chứng cốt lõi giúp bảo đảm tính chính đáng pháp lý của các dự án mở dữ liệu công cộng y tế và tài chính)
- **사회적 관계·주제별 register:** Lý thuyết mật mã, kiểm toán an toàn dữ liệu, khoa học máy tính lý thuyết.
- **예문:**
  - 정부는 통계적익명화수학검증을 마친 공공 데이터에 한해서만 외부 공개를 허용했다.
- **Dịch:**
  - Chính phủ chỉ cho phép công khai ra bên ngoài đối với các dữ liệu công cộng đã hoàn tất kiểm chứng toán học ẩn danh hóa thống kê.
- **어휘 연결:**
  - 유의어: `정보이론적안전성` (an toàn theo lý thuyết thông tin information-theoretic security)
  - 관련어: `비식별화적합성평가` (đánh giá tính phù hợp của phi định danh de-identification adequacy evaluation)
- **영어 참고:** `statistical anonymization mathematical verification` — kiểm chứng toán học về độ ẩn danh thống kê

---

## 단원 종합 읽기 자료: 컴퓨터과학 및 차분 프라이버시와 노이즈 메커니즘의 언어
<!-- passage_word_count: 105 Korean eojeol; target_set: 차분프라이버시보장, 라플라스노이즈메커니즘, 가우시안교란알고리즘, 프라이버시예산파라미터, 국소차분프라이버시, 인접데이터셋식별성, 민감도함수계산기법, 합성데이터생성기법, 지수메커니즘선택확률, 개인정보유출상한선, 노이즈주입왜곡보정, 연합학습프라이버시보호, 질의응답왜곡프레임워크, 멤버십추론공격방어, 통계적익명화수학검증 -->
데이터 프라이버시 연구팀은 공공 빅데이터 통계 분석 시 개인정보 침해를 막고자 차분프라이버시보장 프레임워크를 설계하고 수치형 질의에 최적화된 라플라스노이즈메커니즘 알고리즘을 구현했다. 고차원 연속 데이터 처리를 위해 가우시안교란알고리즘 기법을 도입하고 정보 노출 위험을 제어하는 프라이버시예산파라미터 엡실론 소모량을 정밀하게 관리했다. 중앙 서버를 신뢰할 수 없는 분산 환경을 위해 단말기에서 직접 노이즈를 주입하는 국소차분프라이버시 체계를 구축했다. 단 한 명의 유무 차이만을 갖는 인접데이터셋식별성 한계를 증명하고 질의 변화 폭을 측정하는 민감도함수계산기법 연구를 고도화했다. 원본 통계 특성을 보존하는 합성데이터생성기법 기술을 개발하고 범주형 데이터 출력을 위해 지수메커니즘선택확률 분포를 유도했다. 이를 통해 개인정보유출상한선 기준을 설정하고 노이즈주입왜곡보정 기술로 분석 정확도를 완벽하게 회복했다. 연합학습프라이버시보호 아키텍처를 완성하고 실시간 질의응답왜곡프레임워크 적용으로 멤버십추론공격방어 능력을 입증하며 통계적익명화수학검증 기준을 공인받았다.

**베트남어 번역:**
Nhóm nghiên cứu quyền riêng tư dữ liệu nhằm ngăn chặn xâm phạm thông tin cá nhân khi phân tích thống kê đã thiết kế khung bảo đảm quyền riêng tư vi sai và hiện thực hóa thuật toán cơ chế nhiễu Laplace tối ưu hóa cho các truy vấn dạng số. Nhằm xử lý dữ liệu liên tục bậc cao, họ đã đưa vào kỹ thuật thuật toán gây nhiễu loạn Gaussian và quản lý lượng tiêu hao tham số ngân sách quyền riêng tư kiểm soát rủi ro lộ lọt thông tin. Phục vụ môi trường phân tán nơi máy chủ trung tâm không thể tin cậy, họ đã xây dựng hệ thống quyền riêng tư vi sai cục bộ bơm trực tiếp nhiễu trên thiết bị đầu cuối. Chứng minh giới hạn tính phân biệt các tập dữ liệu liền kề chỉ có sự khác biệt về sự hiện diện của một người duy nhất, họ đã nâng cao nghiên cứu kỹ thuật tính toán hàm độ nhạy đo lường biên độ thay đổi của truy vấn. Phát triển công nghệ kỹ thuật tạo dữ liệu tổng hợp bảo tồn đặc tính thống kê gốc, họ đã dẫn xuất phân phối xác suất lựa chọn cơ chế hàm mũ phục vụ đầu ra dữ liệu dạng phân loại. Thông qua đó, họ đã thiết lập tiêu chuẩn giới hạn trần rò rỉ thông tin cá nhân và khôi phục độ chính xác bằng công nghệ hiệu chỉnh độ méo do bơm nhiễu. Hoàn thiện kiến trúc bảo vệ quyền riêng tư học liên kết, họ đã chứng minh năng lực phòng thủ cuộc tấn công suy luận thành viên bằng việc áp dụng khung bóp méo hỏi đáp thời gian thực, đồng thời được công nhận chính thức tiêu chuẩn kiểm chứng toán học ẩn danh thống kê.
