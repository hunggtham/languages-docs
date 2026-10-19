<!-- source_policy: original explanations, examples, and passage; computer-science-ai-ethics-algorithmic-bias-and-xai terminology cross-checked conceptually, not copied -->
# 컴퓨터과학 및 AI 윤리·알고리즘 편향과 설명가능인공지능의 언어

알고리즘편향 완화 및 공정성메트릭 기반 로컬대리모델과 샤플리값분석 설명가능인공지능 컴퓨터과학

---

### 로컬대리모델

- **발음:** [로컬대리모델]
- **품사:** 명사
- **핵심 의미:** 복잡한 딥러닝 블랙박스 모형의 전체 결정을 한 번에 해석하기 어려울 때, 특정 입력 데이터 주변의 섭동 샘플을 생성하여 해당 국소 영역에서만 작동하는 선형 회귀나 의사결정나무 같은 단순하고 해석 가능한 모델을 적합시키는 국소 대리 해석 기법(LIME, Local Interpretable Model-agnostic Explanations)
- **베트남어 뜻:** mô hình đại diện cục bộ (local surrogate model, phương pháp diễn giải cục bộ như LIME)
- **뉘앙스와 사용법:** 로컬대리모델(Local Surrogate Model)은 복잡한 심층신경망의 전체 동작을 완벽히 설명하지는 못하지만, 특정 개별 판정(예: 대출 거절, 질병 오진)이 왜 내려졌는지에 대해 입력 데이터 근처의 샘플들을 교란하고 가중치를 부여함으로써 사람이 직관적으로 이해할 수 있는 선형 경계를 제공합니다.
- **재사용 가능한 콜로케이션·청크:**
  - 로컬대리모델을 구축하다 (xây dựng mô hình đại diện cục bộ)
  - LIME 기반의 로컬대리모델 해석 (sự diễn giải mô hình đại diện cục bộ dựa trên LIME)
  - 로컬대리모델의 설명 충실도 검증 (kiểm chứng độ trung thực trong giải thích của mô hình đại diện cục bộ)
- **자주 쓰는 문형과 성분:**
  - 로컬대리모델을 + 활용하여 블랙박스 모형의 개별 예측 근거를 국소적으로 근사하다
- **사회적 관계·주제별 register:** Khoa học máy tính, trí tuệ nhân tạo có thể giải thích (XAI), kiểm toán thuật toán.
- **예문:** 의료 인공지능이 특정 환자의 종양 판정을 내렸을 때 로컬대리모델을 적용하여 해당 결정에 기여한 핵심 픽셀 영역을 시각적으로 규명했다.
- **Dịch:** Khi trí tuệ nhân tạo y tế đưa ra phán đoán khối u của một bệnh nhân cụ thể, các chuyên gia đã áp dụng mô hình đại diện cục bộ để làm rõ trực quan vùng điểm ảnh then chốt đóng góp vào quyết định đó.
- **어휘 연결:** 블랙박스모형 (mô hình hộp đen black-box model), 모델해석가능성 (khả năng diễn giải mô hình), 전역대리모델 (mô hình đại diện toàn cục global surrogate model)
- **영어 참고:** local surrogate model (LIME)

---

### 알고리즘편향

- **발음:** [알고리즘편향]
- **품사:** 명사
- **핵심 의미:** 인공지능이나 기계학습 모델이 특정 인종, 성별, 연령, 사회경제적 계층에 대해 체계적이고 불공정한 편견이나 차별적 결과를 반복해서 도출하는 현상
- **베트남어 뜻:** thiên kiến thuật toán, định kiến thuật toán (algorithmic bias)
- **뉘앙스와 사용법:** 알고리즘편향은 단순한 프로그래밍 오류가 아니라 역사적 데이터에 내재된 사회적 불평등, 표본 편향, 부적절한 목적 함수 설계 등으로 인해 모델이 기존 차별을 학습하고 증폭시키는 구조적 문제입니다; 채용, 대출 심사, 형사사법 위험 평가 등 사회적 의사결정 시스템에서 심각한 윤리적 쟁점을 형성합니다.
- **재사용 가능한 콜로케이션·청크:**
  - 알고리즘편향을 완화하다 (giảm thiểu thiên kiến thuật toán)
  - 채용 시스템의 알고리즘편향 감사 (kiểm toán thiên kiến thuật toán trong hệ thống tuyển dụng)
  - 데이터 불균형에서 기인한 알고리즘편향 (thiên kiến thuật toán bắt nguồn từ mất cân bằng dữ liệu)
- **자주 쓰는 문형과 성분:**
  - 알고리즘편향을 + 제거하기 위해 훈련 데이터 재가중치 부여 및 편향 완화 알고리즘을 도입하다
- **사회적 관계·주제별 register:** Đạo đức AI, luật và chính sách công nghệ, học máy công bằng (Fair ML).
- **예문:** 신용 대출 평가 모델이 특정 소수 계층에게 불리하게 작용하는 알고리즘편향을 보임에 따라 금융 규제 당국이 정밀 감사에 착수했다.
- **Dịch:** Khi mô hình đánh giá cho vay tín dụng bộc lộ thiên kiến thuật toán gây bất lợi cho một tầng lớp thiểu số nhất định, cơ quan quản lý tài chính đã bắt tay vào một cuộc kiểm toán nghiêm ngặt.
- **어휘 연결:** 공정성메트릭 (chỉ số công bằng fairness metric), 표본편향 (thiên kiến mẫu sample bias), 데이터불균형 (mất cân bằng dữ liệu)
- **영어 참고:** algorithmic bias

---

### 데이터불균형

- **발음:** [데이터불균형]
- **품사:** 명사
- **핵심 의미:** 지도학습 분류 작업에서 타깃 클래스 간 표본 수의 격차가 극단적으로 발생하여, 다수 클래스에 예측이 치우치고 소수 클래스의 오분류율이 급증하는 데이터셋 결함 상태
- **베트남어 뜻:** mất cân bằng dữ liệu, sự chênh lệch phân bố lớp dữ liệu (data/class imbalance)
- **뉘앙스와 사용법:** 데이터불균형(Class Imbalance)은 희귀 질환 진단, 금융 이상 거래 탐지, 자율주행 돌발 상황 검출 등에서 흔히 발생하며, 정확도(Accuracy) 지표가 99%에 달하더라도 정작 중요한 소수 클래스를 전혀 맞추지 못하는 기만적 성능을 유발하므로 오버샘플링(SMOTE)이나 손실 가중치 조절이 필수적입니다.
- **재사용 가능한 콜로케이션·청크:**
  - 극심한 데이터불균형을 해소하다 (giải quyết sự mất cân bằng dữ liệu cực đoan)
  - 데이터불균형에 따른 예측 왜곡 (sự méo mó dự đoán do mất cân bằng dữ liệu)
  - 소수 클래스 데이터불균형 완화 기법 (kỹ thuật giảm thiểu mất cân bằng dữ liệu lớp thiểu số)
- **자주 쓰는 문형과 성분:**
  - 데이터불균형을 + 보정하기 위해 합성 소수 오버샘플링(SMOTE) 기법을 적용하다
- **사회적 관계·주제별 register:** Khoa học dữ liệu, kỹ nghệ học máy (ML engineering), xử lý bất đối xứng dữ liệu.
- **예문:** 희귀 유전병 분류기 훈련 시 데이터불균형으로 인해 환자군 검출 재현율이 현저히 떨어지는 문제를 해결하고자 데이터 증강 기법을 도입했다.
- **Dịch:** Để giải quyết vấn đề độ thu hồi phát hiện nhóm bệnh nhân giảm sút rõ rệt do mất cân bằng dữ liệu trong quá trình huấn luyện bộ phân loại bệnh di truyền hiếm, kỹ thuật tăng cường dữ liệu đã được áp dụng.
- **어휘 연결:** 오버샘플링 (tăng mẫu oversampling), 언더샘플링 (giảm mẫu undersampling), 클래스가중치 (trọng số lớp class weight)
- **영어 참고:** data imbalance / class imbalance

---

### 공정성메트릭

- **발음:** [공정성메트릭]
- **품사:** 명사
- **핵심 의미:** 알고리즘의 의사결정이 인종, 성별, 연령 등 보호 속성에 관계없이 균등하고 차별 없이 이루어지는지를 통계학적·수학적으로 측정하는 정량적 평가 지표(예: 인구통계학적 동등성, 균등 기회, 예측률 균등)
- **베트남어 뜻:** chỉ số công bằng, thước đo độ công bằng thuật toán (fairness metric)
- **뉘앙스와 사용법:** 공정성메트릭은 다양한 정의가 존재하며 이들 간에 수학적 상충(Impossibility Theorem)이 발생할 수 있습니다; 예를 들어 '인구통계학적 동등성(Demographic Parity)'과 '균등 기회(Equal Opportunity)'를 동시에 완벽히 만족하는 것은 현실적으로 불가능하므로, 시스템의 목적에 맞는 적절한 공정성 기준을 선택해야 합니다.
- **재사용 가능한 콜로케이션·청크:**
  - 공정성메트릭을 충족하다 (đáp ứng chỉ số công bằng)
  - 균등 기회 기반의 공정성메트릭 (chỉ số công bằng dựa trên cơ hội bình đẳng)
  - 알고리즘 평가를 위한 다차원 공정성메트릭 (chỉ số công bằng đa chiều để đánh giá thuật toán)
- **자주 쓰는 문형과 성분:**
  - 공정성메트릭을 + 기준으로 삼아 모델 배포 전 집단 간 오차율 차이를 검증하다
- **사회적 관계·주제별 register:** Học máy công bằng (Fair ML), kiểm định thuật toán, chính sách đạo đức AI.
- **예문:** 인공지능 채용 서류 심사 모델에 공정성메트릭을 적용하여 성별 간 합격률의 통계적 균등성을 객관적으로 입증했다.
- **Dịch:** Bằng cách áp dụng các chỉ số công bằng vào mô hình duyệt hồ sơ tuyển dụng bằng AI, đơn vị đã chứng minh một cách khách quan tính bình đẳng thống kê về tỷ lệ trúng tuyển giữa các giới tính.
- **어휘 연결:** 인구통계학적동등성 (bình đẳng nhân khẩu học demographic parity), 균등기회 (cơ hội bình đẳng equal opportunity), 알고리즘편향 (thiên kiến thuật toán)
- **영어 참고:** fairness metric

---

### 특성중요도

- **발음:** [특성중요도]
- **품사:** 명사
- **핵심 의미:** 기계학습 모델이 목표 변수를 예측할 때 각 입력 변수(피처)가 예측 결과에 얼마나 강한 영향력을 미쳤는지를 수치화한 척도
- **베트남어 뜻:** độ quan trọng của đặc trưng (feature importance)
- **뉘앙스와 사용법:** 특성중요도는 트리 기반 모델의 지니 불순도 감소량이나 순열 중요도(Permutation Importance), 샤플리 값 등을 통해 산출되며, 어떤 변수가 결과 도출에 핵심적인 역할을 했는지 밝힘으로써 모델의 설명 가능성을 높이고 불필요한 차원을 축소하는 데 핵심 지표로 활용됩니다.
- **재사용 가능한 콜로케이션·청크:**
  - 특성중요도를 시각화하다 (trực quan hóa độ quan trọng của đặc trưng)
  - 순열 기반 특성중요도 산출 (tính toán độ quan trọng đặc trưng dựa trên hoán vị)
  - 높은 특성중요도를 나타내는 핵심 인자 (nhân tố then chốt thể hiện độ quan trọng đặc trưng cao)
- **자주 쓰는 문형과 성분:**
  - 특성중요도를 + 분석하여 불필요한 노이즈 변수를 제거하고 예측 모델의 해석력을 강화하다
- **사회적 관계·주제별 register:** Khai phá dữ liệu, học máy diễn giải được, lựa chọn biến số (feature selection).
- **예문:** 랜덤 포레스트 모델의 특성중요도를 분석한 결과, 고객 이탈 예측에 가장 결정적인 기여를 한 변수는 최근 한 달간의 서비스 접속 빈도로 나타났다.
- **Dịch:** Kết quả phân tích độ quan trọng của đặc trưng trong mô hình Random Forest cho thấy biến số đóng góp mang tính quyết định nhất vào dự đoán rời bỏ của khách hàng là tần suất truy cập dịch vụ trong tháng gần nhất.
- **어휘 연결:** 샤플리값분석 (phân tích giá trị Shapley), 차원축소 (giảm chiều dữ liệu dimensionality reduction), 순열중요도 (độ quan trọng qua hoán vị permutation importance)
- **영어 참고:** feature importance

---

### 샤플리값분석

- **발음:** [샤플리값분석]
- **품사:** 명사
- **핵심 의미:** 협조적 게임 이론(Cooperative Game Theory)의 샤플리 값(Shapley Value) 개념을 기계학습에 적용하여, 모든 가능한 피처 조합의 한계 기여도를 평균 냄으로써 각 피처가 특정 개별 예측에 기여한 공헌도를 공정하게 배분·분석하는 기법(SHAP)
- **베트남어 뜻:** phân tích giá trị Shapley (SHAP value analysis, phương pháp giải thích dựa trên lý thuyết trò chơi)
- **뉘앙스와 사용법:** 샤플리값분석은 효율성(Efficiency), 대칭성(Symmetry), 더미성(Dummy), 가법성(Additivity)이라는 4가지 공리적 성질을 유일하게 만족하는 강력한 설명 기법입니다; 국소적 설명(개별 환자 판정 이유)과 전역적 설명(전체 모델의 주요 인자)을 일관된 수학적 틀 내에서 제공할 수 있어 XAI의 표준으로 평가받습니다.
- **재사용 가능한 콜로케이션·청크:**
  - 샤플리값분석을 수행하다 (thực hiện phân tích giá trị Shapley)
  - SHAP 패키지를 활용한 샤플리값분석 (phân tích giá trị Shapley bằng gói phần mềm SHAP)
  - 샤플리값분석 기반의 양수 및 음수 기여도 평가 (đánh giá đóng góp tích cực và tiêu cực dựa trên phân tích giá trị Shapley)
- **자주 쓰는 문형과 성분:**
  - 샤플리값분석을 + 통해 고위험군 환자 판정에 결정적 영향을 미친 바이오마커들을 정밀하게 분리해 내다
- **사회적 관계·주제별 register:** Trí tuệ nhân tạo có thể giải thích (XAI), lý thuyết trò chơi tính toán, kiểm định mô hình định lượng.
- **예문:** 연구팀은 심근경색 재발 예측 모델에 샤플리값분석을 적용하여 각 혈액 지표가 개별 예측 확률 상승에 기여한 정도를 정량화했다.
- **Dịch:** Nhóm nghiên cứu đã áp dụng phân tích giá trị Shapley vào mô hình dự đoán tái phát nhồi máu cơ tim để lượng hóa mức độ đóng góp của từng chỉ số máu vào việc làm tăng xác suất dự đoán của từng cá nhân.
- **어휘 연결:** 특성중요도 (độ quan trọng của đặc trưng), 협력게임이론 (lý thuyết trò chơi hợp tác cooperative game theory), 모델해석가능성 (khả năng diễn giải mô hình)
- **영어 참고:** Shapley value analysis (SHAP)

---

### 블랙박스모형

- **발음:** [블랙박스모형]
- **품사:** 명사
- **핵심 의미:** 입력값과 출력값 사이의 관계는 매우 높은 정확도로 도출되지만, 수백만~수조 개의 매개변수와 비선형 활성화 함수로 인해 내부 추론 메커니즘과 판단 근거를 인간이 직관적으로 이해하기 어려운 인공지능 모델
- **베트남어 뜻:** mô hình hộp đen (black-box model)
- **뉘앙스와 사용법:** 심층신경망(DNN), 대규모 언어 모델(LLM)과 같은 블랙박스모형은 탁월한 인지·예측 성능을 발휘하지만, 오작동 시 책임 소재 파악이 어렵고 숨겨진 편향이나 취약점을 사전에 간파하기 어렵다는 치명적인 한계가 있어 XAI(설명가능 AI) 기술의 핵심 극복 대상이 됩니다.
- **재사용 가능한 콜로케이션·청크:**
  - 블랙박스모형의 내부 의사결정 추적 (truy vết quyết định nội bộ của mô hình hộp đen)
  - 블랙박스모형을 화이트박스 모형으로 대체하다 (thay thế mô hình hộp đen bằng mô hình hộp trắng)
  - 블랙박스모형의 불투명성으로 인한 윤리적 리스크 (rủi ro đạo đức do tính mờ đục của mô hình hộp đen)
- **자주 쓰는 문형과 성분:**
  - 블랙박스모형의 + 불투명성을 해소하기 위해 설명가능성 및 사후 해석 기법을 결합하다
- **사회적 관계·주제별 register:** Lý thuyết học sâu, triết học công nghệ, pháp lý và tuân thủ AI.
- **예문:** 생명과 직결된 자율주행 및 수술 로봇 제어 시스템에서는 블랙박스모형에만 의존하지 않고 결정 근거를 역추적할 수 있는 안전장치가 필수적이다.
- **Dịch:** Trong các hệ thống lái xe tự hành và điều khiển robot phẫu thuật liên quan trực tiếp đến tính mạng con người, việc không chỉ phụ thuộc vào mô hình hộp đen mà phải trang bị cơ chế an toàn có thể truy vết ngược căn cứ phán đoán là điều bắt buộc.
- **어휘 연결:** 화이트박스모형 (mô hình hộp trắng white-box model), 모델해석가능성 (khả năng diễn giải mô hình), 심층신경망 (mạng nơ-ron sâu deep neural network)
- **영어 참고:** black-box model

---

### 반사실적설명

- **발음:** [반사실적설명]
- **품사:** 명사
- **핵심 의미:** "만약 입력 변수 X가 X'로 약간 바뀌었더라면 모델의 예측 결과가 Y에서 Y'로 어떻게 바뀌었을 것인가?"를 제시함으로써, 사용자가 원하는 결과를 얻기 위해 변경해야 할 최소한의 조건을 알려주는 인과적 설명 기법
- **베트남어 뜻:** giải thích phản thực tế (counterfactual explanation)
- **뉘앙스와 사용법:** 반사실적설명(Counterfactual Explanation)은 모델 내부의 복잡한 수식을 일일이 설명하지 않고도, 사용자에게 가장 실행 가능한 피드백(Actionable Recourse)을 제공한다는 점에서 매우 실용적입니다; 예를 들어 "연소득이 500만 원 더 높고 신용카드 연체가 없었더라면 대출이 승인되었을 것"과 같은 직관적 가이드를 제공합니다.
- **재사용 가능한 콜로케이션·청크:**
  - 반사실적설명을 생성하다 (tạo ra giải thích phản thực tế)
  - 실행 가능한 반사실적설명 탐색 (tìm kiếm giải thích phản thực tế có thể hành động được)
  - 반사실적설명을 통한 의사결정 불복 권리 보장 (đảm bảo quyền khiếu nại quyết định thông qua giải thích phản thực tế)
- **자주 쓰는 문형과 성분:**
  - 반사실적설명을 + 도출하여 인공지능 판정에 불만을 가진 이용자에게 구체적인 개선 경로를 제시하다
- **사회적 관계·주제별 register:** Trí tuệ nhân tạo giải thích được (XAI), suy luận nhân quả (causal inference), bảo vệ quyền lợi người dùng.
- **예문:** 신용카드 발급이 거절된 고객에게 반사실적설명 알고리즘을 활용해 부채 비율을 10% 낮추면 승인 요건을 충족한다는 구체적 대안을 통보했다.
- **Dịch:** Đối với khách hàng bị từ chối phát hành thẻ tín dụng, thuật toán giải thích phản thực tế đã được ứng dụng để thông báo giải pháp cụ thể rằng nếu hạ tỷ lệ nợ xuống 10% thì sẽ đáp ứng yêu cầu phê duyệt.
- **어휘 연결:** 인과추론 (suy luận nhân quả causal inference), 실행가능피드백 (phản hồi khả thi actionable recourse), 로컬대리모델 (mô hình đại diện cục bộ)
- **영어 참고:** counterfactual explanation

---

### 할루시네이션저감

- **발음:** [할루시네이션저감]
- **품사:** 명사
- **핵심 의미:** 생성형 대규모 언어 모델이 학습 데이터에 없거나 사실과 다른 그럴듯한 거짓 정보, 가짜 인용문, 오류 명제를 생성하는 환각(Hallucination) 현상을 억제하고 최소화하는 일련의 엔지니어링 및 정렬 기술
- **베트남어 뜻:** giảm thiểu ảo giác, hạ thấp tỷ lệ thông tin sai lệch của AI (hallucination reduction / mitigation)
- **뉘앙스와 사용법:** 할루시네이션저감은 검색증강생성(RAG), 사실성 검증 프롬프트, 강화학습 인간 피드백(RLHF), 지식 그래프 대조 등을 통해 달성됩니다; 특히 법률 판례, 의학 가이드라인, 금융 규제 등 사실적 정확성이 절대적으로 요구되는 전문 분야 도입의 성패를 가르는 핵심 과제입니다.
- **재사용 가능한 콜로케이션·청크:**
  - 할루시네이션저감 기술을 도입하다 (áp dụng công nghệ giảm thiểu ảo giác)
  - RAG 기반의 효과적인 할루시네이션저감 (giảm thiểu ảo giác hiệu quả dựa trên RAG)
  - 생성형 언어 모델의 할루시네이션저감 벤치마크 (tiêu chuẩn đánh giá giảm thiểu ảo giác của mô hình ngôn ngữ sinh tạo)
- **자주 쓰는 문형과 성분:**
  - 할루시네이션저감을 + 위해 외부 신뢰 데이터베이스를 실시간으로 참조하는 검색증강생성 파이프라인을 구축하다
- **사회적 관계·주제별 register:** Mô hình ngôn ngữ lớn (LLM), kỹ nghệ tạo sinh an toàn, kiểm chứng tính xác thực thông tin.
- **예문:** 의료 상담 챗봇의 신뢰도를 확보하기 위해 최신 의학 논문 데이터베이스와 연동된 할루시네이션저감 아키텍처를 적용했다.
- **Dịch:** Để đảm bảo độ tin cậy của chatbot tư vấn y tế, cấu trúc giảm thiểu ảo giác liên kết với cơ sở dữ liệu bài báo y học mới nhất đã được áp dụng.
- **어휘 연결:** 검색증강생성 (sinh tăng cường truy xuất RAG), 사실성검증 (kiểm chứng tính xác thực fact-checking), 정렬기술 (kỹ thuật căn chỉnh alignment)
- **영어 참고:** hallucination reduction / mitigation

---

### 신뢰가능인공지능

- **발음:** [신뢰가능인공지능]
- **품사:** 명사
- **핵심 의미:** 기술적 견고성, 데이터 프라이버시, 알고리즘 공정성, 투명성과 설명 가능성, 인간의 통제권을 종합적으로 보장하여 사회 전반에서 안심하고 수용할 수 있는 고품질 인공지능 시스템(Trustworthy AI)
- **베트남어 뜻:** trí tuệ nhân tạo đáng tin cậy (trustworthy AI)
- **뉘앙스와 사용법:** 신뢰가능인공지능은 유럽연합(EU AI Act) 및 OECD의 AI 원칙에서 규정하는 글로벌 기술 규범입니다; 단순히 성능 지표(Accuracy, F1-score)만 뛰어난 모델을 넘어, 시스템 전 생애주기에 걸쳐 법적·윤리적 안전성과 설명 책임을 다할 것을 요구합니다.
- **재사용 가능한 콜로케이션·청크:**
  - 신뢰가능인공지능 프레임워크를 수립하다 (thiết lập khung trí tuệ nhân tạo đáng tin cậy)
  - 신뢰가능인공지능 구현을 위한 윤리 가이드라인 (hướng dẫn đạo đức để hiện thực hóa AI đáng tin cậy)
  - 글로벌 표준에 부합하는 신뢰가능인공지능 인증 (chứng nhận AI đáng tin cậy phù hợp tiêu chuẩn toàn cầu)
- **자주 쓰는 문형과 성분:**
  - 신뢰가능인공지능을 + 구현하기 위해 설계 초기 단계부터 설명가능성과 프라이버시 보호 메커니즘을 내재화하다
- **사회적 관계·주제별 register:** Quản trị công nghệ AI, tuân thủ pháp lý quốc tế, tiêu chuẩn hóa hệ thống phần mềm.
- **예문:** 정부는 공공 부문 AI 서비스 도입 시 편향성 감사와 보안성 평가를 의무화하는 신뢰가능인공지능 인증 제도를 발표했다.
- **Dịch:** Chính phủ đã công bố chế độ chứng nhận trí tuệ nhân tạo đáng tin cậy, bắt buộc phải kiểm toán tính thiên kiến và đánh giá an ninh khi đưa các dịch vụ AI vào khu vực công.
- **어휘 연결:** 알고리즘편향 (thiên kiến thuật toán), 모델해석가능성 (khả năng diễn giải mô hình), 윤리적정렬 (căn chỉnh đạo đức)
- **영어 참고:** trustworthy AI

---

### 투명성보고서

- **발음:** [투명성보고서]
- **품사:** 명사
- **핵심 의미:** 기업이나 연구 기관이 개발한 인공지능 모델의 훈련 데이터 출처, 가중치 최적화 기법, 공정성 평가 결과, 에너지 소비량, 잠재적 위험 및 한계점을 외부에 투명하게 공개하는 공식 문서
- **베트남어 뜻:** báo cáo minh bạch (transparency report, model card)
- **뉘앙스와 사용법:** 투명성보고서(또는 Model Card, System Card)는 모델의 개발 과정과 의도된 사용 목적, 부적절한 오용 사례를 상세히 명시함으로써 이해관계자와 규제 기관이 위험성을 객관적으로 평가할 수 있도록 돕는 핵심 거버넌스 도구입니다.
- **재사용 가능한 콜로케이션·청크:**
  - 정기 투명성보고서를 발간하다 (phát hành báo cáo minh bạch định kỳ)
  - 인공지능 모델 카드를 포함한 투명성보고서 (báo cáo minh bạch bao gồm thẻ mô hình AI)
  - 투명성보고서 작성을 통한 규제 준수 입증 (chứng minh sự tuân thủ quy định qua việc lập báo cáo minh bạch)
- **자주 쓰는 문형과 성분:**
  - 투명성보고서를 + 공개함으로써 상용 인공지능 모델의 학습 데이터 저작권 준수 여부와 편향 완화 성과를 사회에 알리다
- **사회적 관계·주제별 register:** Quản trị AI, quan hệ công chúng công nghệ, tuân thủ trách nhiệm giải trình doanh nghiệp.
- **예문:** 대형 IT 기업은 신규 언어 모델을 출시하면서 학습 데이터의 저작권 필터링 과정과 안전성 평가 지표를 상세히 담은 투명성보고서를 배포했다.
- **Dịch:** Doanh nghiệp công nghệ lớn khi ra mắt mô hình ngôn ngữ mới đã phân phối một báo cáo minh bạch ghi lại chi tiết quy trình lọc bản quyền dữ liệu huấn luyện và các chỉ số đánh giá độ an toàn.
- **어휘 연결:** 데이터출처추적 (truy xuất nguồn gốc dữ liệu), 모델카드 (thẻ mô hình model card), 책임있는인공지능 (trí tuệ nhân tạo có trách nhiệm responsible AI)
- **영어 참고:** transparency report

---

### 적대적공격방어

- **발음:** [적대적공격방어]
- **품사:** 명사
- **핵심 의미:** 인간의 눈에는 보이지 않는 미세한 노이즈(적대적 섭동)를 입력 데이터에 주입하여 모델의 치명적 오분류를 유도하는 적대적 공격(Adversarial Attack)을 탐지하고 무력화하는 방어 기법
- **베트남어 뜻:** phòng thủ tấn công đối kháng (adversarial attack defense / adversarial robustness)
- **뉘앙스와 사용법:** 적대적공격방어는 자율주행 표지판 인식, 얼굴 인식 출입 통제, 악성코드 탐지기 등 고보안 시스템에서 매우 중요합니다; 적대적 훈련(Adversarial Training, 노이즈가 주입된 적대적 예제를 학습 데이터에 포함시키는 방법)과 그래디언트 마스킹, 입력 정제 기술 등이 광범위하게 연구됩니다.
- **재사용 가능한 콜로케이션·청크:**
  - 적대적공격방어 메커니즘을 강화하다 (củng cố cơ chế phòng thủ tấn công đối kháng)
  - 적대적 훈련을 통한 적대적공격방어 (phòng thủ tấn công đối kháng thông qua huấn luyện đối kháng)
  - 딥러닝 모델의 적대적공격방어 취약점 점검 (kiểm tra lỗ hổng phòng thủ tấn công đối kháng của mô hình học sâu)
- **자주 쓰는 문형과 성분:**
  - 적대적공격방어를 + 위해 적대적 예제를 모델 학습 루프에 지속적으로 주입하는 견고화 기법을 적용하다
- **사회적 관계·주제별 register:** An ninh mạng AI, học máy đối kháng (adversarial machine learning), độ bền vững mô hình.
- **예문:** 자율주행 영상 센서가 의도적인 스티커 노이즈 공격에 속지 않도록 강력한 적대적공격방어 알고리즘을 펌웨어에 탑재했다.
- **Dịch:** Để cảm biến hình ảnh lái xe tự hành không bị đánh lừa bởi các cuộc tấn công gây nhiễu bằng decal cố ý, thuật toán phòng thủ tấn công đối kháng mạnh mẽ đã được cài đặt vào firmware.
- **어휘 연결:** 적대적예제 (ví dụ đối kháng adversarial example), 적대적훈련 (huấn luyện đối kháng adversarial training), 강건성평가 (đánh giá độ bền vững robustness evaluation)
- **영어 참고:** adversarial attack defense

---

### 모델해석가능성

- **발음:** [모델해석가능성]
- **품사:** 명사
- **핵심 의미:** 인공지능 모델이 내린 판단이나 결과의 원인과 과정을 인간 관찰자가 얼마나 논리적·수학적으로 명확하게 이해하고 설명할 수 있는지를 나타내는 정도
- **베트남어 뜻:** khả năng diễn giải mô hình, tính có thể giải thích được của mô hình (model interpretability)
- **뉘앙스와 사용법:** 모델해석가능성은 모델 자체의 구조가 단순하여 직관적으로 이해 가능한 '본질적 해석가능성(Intrinsic Interpretability)'과, 복잡한 딥러닝 모델의 입출력 관계를 사후에 분석하는 '사후 설명가능성(Post-hoc Explainability)'으로 나뉩니다; 의료, 금융, 법률 등 고위험 의사결정 분야에서는 해석가능성이 부족한 모델의 단독 배포가 제한됩니다.
- **재사용 가능한 콜로케이션·청크:**
  - 모델해석가능성을 제고하다 (nâng cao khả năng diễn giải mô hình)
  - 예측 성능과 모델해석가능성 간의 상충 관계 (mối quan hệ đánh đổi giữa hiệu năng dự đoán và khả năng diễn giải mô hình)
  - 사후 분석을 통한 모델해석가능성 확보 (đảm bảo khả năng diễn giải mô hình thông qua phân tích hậu nghiệm)
- **자주 쓰는 문형과 성분:**
  - 모델해석가능성을 + 확보하여 복잡한 신경망의 결정 과정을 감사관과 일반 사용자에게 투명하게 소명하다
- **사회적 관계·주제별 register:** Khoa học máy tính, trí tuệ nhân tạo có thể giải thích (XAI), kiểm định công nghệ.
- **예문:** 연구팀은 암 진단 딥러닝 모델의 예측 정확도를 희생하지 않으면서도 모델해석가능성을 극대화하는 새로운 주의집중 메커니즘을 개발했다.
- **Dịch:** Nhóm nghiên cứu đã phát triển một cơ chế chú ý mới tối đa hóa khả năng diễn giải mô hình mà không cần hy sinh độ chính xác dự đoán của mô hình học sâu chẩn đoán ung thư.
- **어휘 연결:** 블랙박스모형 (mô hình hộp đen), 샤플리값분석 (phân tích giá trị Shapley), 로컬대리모델 (mô hình đại diện cục bộ)
- **영어 참고:** model interpretability

---

### 데이터출처추적

- **발음:** [데이터출처추적]
- **품사:** 명사
- **핵심 의미:** 인공지능 모델을 학습시키는 데 사용된 데이터의 원작자, 수집 경로, 변환 및 전처리 이력, 라벨링 과정 전반을 투명하게 기록하고 역추적할 수 있도록 보장하는 메커니즘(Data Provenance / Lineage)
- **베트남어 뜻:** truy xuất nguồn gốc dữ liệu, theo dõi lịch sử nguồn gốc dữ liệu (data provenance tracking / data lineage)
- **뉘앙스와 사용법:** 데이터출처추적은 저작권 침해 분쟁, 오염 데이터(Poisoning Attack) 유입 방지, 개인정보 보호 규정 준수(GDPR) 측면에서 모델의 적법성을 입증하는 결정적 근거가 됩니다; 데이터의 생성부터 가공, 폐기까지의 디지털 족적을 블록체인이나 메타데이터 관리 시스템으로 영구 보존합니다.
- **재사용 가능한 콜로케이션·청크:**
  - 데이터출처추적 체계를 확립하다 (xác lập hệ thống truy xuất nguồn gốc dữ liệu)
  - 학습용 데이터셋의 정밀 데이터출처추적 (truy xuất nguồn gốc dữ liệu chuẩn xác cho bộ dữ liệu huấn luyện)
  - 데이터출처추적을 통한 저작권 위반 리스크 차단 (ngăn chặn rủi ro vi phạm bản quyền nhờ truy xuất nguồn gốc dữ liệu)
- **자주 쓰는 문형과 성분:**
  - 데이터출처추적을 + 수행하여 문제의 오염된 텍스트가 어떤 경로를 통해 사전학습 코퍼스에 유입되었는지 밝혀내다
- **사회적 관계·주제별 register:** Kỹ thuật dữ liệu (Data engineering), luật sở hữu trí tuệ số, quản trị dữ liệu lớn (data governance).
- **예문:** 상용 파운데이션 모델 개발팀은 저작권 라이선스가 불분명한 웹 크롤링 데이터를 걸러내기 위해 엄격한 데이터출처추적 파이프라인을 구축했다.
- **Dịch:** Nhóm phát triển mô hình nền tảng thương mại đã xây dựng một đường ống truy xuất nguồn gốc dữ liệu nghiêm ngặt để lọc bỏ dữ liệu thu thập từ web có giấy phép bản quyền không rõ ràng.
- **어휘 연결:** 데이터거버넌스 (quản trị dữ liệu data governance), 메타데이터관리 (quản lý siêu dữ liệu metadata management), 저작권준수 (tuân thủ bản quyền copyright compliance)
- **영어 참고:** data provenance tracking / data lineage

---

### 윤리적정렬

- **발음:** [윤리적정렬]
- **품사:** 명사
- **핵심 의미:** 인공지능 시스템의 목표, 가치 판단, 행동 양식이 인간의 보편적 윤리 규범, 인권, 안전 기준 및 사회적 이익과 충돌하지 않고 조화를 이루도록 모델을 지도·조정하는 기술적 과정(AI Alignment)
- **베트남어 뜻:** căn chỉnh đạo đức, định hướng phù hợp đạo đức (ethical alignment / AI alignment)
- **뉘앙스와 사용법:** 윤리적정렬은 인공지능이 지나치게 목적 지향적으로 작동하다가 인간에게 유해한 부작용을 초래하거나 차별적·폭력적인 응답을 내놓는 것을 방지합니다; 인간 피드백 기반 강화학습(RLHF)과 헌법적 AI(Constitutional AI) 기법을 활용해 모델 내면에 윤리적 제약 조건을 탑재합니다.
- **재사용 가능한 콜로케이션·청크:**
  - 윤리적정렬을 달성하다 (đạt được sự căn chỉnh đạo đức)
  - 초지능 시스템의 윤리적정렬 문제 (vấn đề căn chỉnh đạo đức của hệ thống siêu trí tuệ)
  - RLHF를 통한 모델의 윤리적정렬 고도화 (nâng cao sự căn chỉnh đạo đức của mô hình thông qua RLHF)
- **자주 쓰는 문형과 성분:**
  - 윤리적정렬을 + 보장하기 위해 헌법적 가이드라인에 기반한 자기 비판 훈련 메커니즘을 적용하다
- **사회적 관계·주제별 register:** An toàn AI (AI safety), triết học trí tuệ nhân tạo, căn chỉnh giá trị con người (human value alignment).
- **예문:** 언어 모델이 위험한 화학무기 제조법이나 혐오 발언을 스스로 거부하도록 유도하는 윤리적정렬 연구가 활발히 진행 중이다.
- **Dịch:** Nghiên cứu về căn chỉnh đạo đức nhằm thúc đẩy mô hình ngôn ngữ tự giác từ chối công thức chế tạo vũ khí hóa học nguy hiểm hoặc ngôn từ thù địch đang diễn ra sôi nổi.
- **어휘 연결:** 인간피드백강화학습 (học tăng cường từ phản hồi con người RLHF), 헌법적인공지능 (trí tuệ nhân tạo hiến pháp Constitutional AI), 가치정렬 (căn chỉnh giá trị value alignment)
- **영어 참고:** ethical alignment

---

## 단원 종합 읽기 자료: 컴퓨터과학 및 AI 윤리·알고리즘 편향과 설명가능인공지능의 언어
<!-- passage_word_count: 105 Korean eojeol; target_set: 로컬대리모델, 알고리즘편향, 데이터불균형, 공정성메트릭, 특성중요도, 샤플리값분석, 블랙박스모형, 반사실적설명, 할루시네이션저감, 신뢰가능인공지능, 투명성보고서, 적대적공격방어, 모델해석가능성, 데이터출처추적, 윤리적정렬 -->
현대 인공지능 윤리학에서는 모델의 예측 근거를 투명하게 제시하기 위해 내부를 전혀 알 수 없는 블랙박스모형 구조를 해석하는 연구가 집중된다. 복잡한 딥러닝 판단을 국소적으로 근사하는 수학적 로컬대리모델 구축하고 특성중요도 정량화하는 공리적 샤플리값분석 기법을 현장에서 매우 적극 활용한다. 학습용 기초 원천 데이터의 심각한 데이터불균형 상태는 특정 인종과 성별에 대한 차별적 알고리즘편향 초래하므로 다차원 공정성메트릭 적용해 편향을 교정한다. 의사결정 결과의 변화 조건을 알려주는 반사실적설명 제공하여 사용자 수용성을 높이고 생성형 모델의 거짓 정보인 할루시네이션저감 기술을 개발한다. 인간의 보편적 가치 체계와 일치시키는 윤리적정렬 검증하고 신뢰가능인공지능 생태계 조성을 위해 정기적인 투명성보고서 대외적으로 상세히 공개한다. 동시에 악의적인 적대적공격방어 체계를 체계적으로 수립하고 학습 데이터의 신뢰성을 보증하는 데이터출처추적 시스템을 통해 포괄적인 완전한 모델해석가능성 확보했다.

**베트남어 번역:**
Trong đạo đức học trí tuệ nhân tạo hiện đại, các nghiên cứu giải mã cấu trúc mô hình hộp đen hoàn toàn không thể biết được bên trong đang được tập trung nhằm đưa ra căn cứ dự đoán của mô hình một cách minh bạch. Người ta xây dựng mô hình đại diện cục bộ mang tính toán học xấp xỉ cục bộ các phán đoán học sâu phức tạp và tích cực ứng dụng trên thực tế kỹ thuật phân tích giá trị Shapley mang tính tiên đề giúp định lượng tầm quan trọng của đặc trưng. Tình trạng mất cân bằng dữ liệu nghiêm trọng của dữ liệu gốc nền tảng dùng để huấn luyện gây ra sự thiên vị thuật toán mang tính phân biệt đối xử đối với các chủng tộc và giới tính cụ thể, do đó người ta áp dụng các số liệu công bằng đa chiều để hiệu chỉnh sự thiên vị. Bằng cách cung cấp giải thích phản thực tế cho biết điều kiện thay đổi của kết quả ra quyết định, người ta nâng cao sự chấp nhận của người dùng và phát triển công nghệ giảm thiểu ảo giác - thông tin sai lệch của các mô hình tạo sinh. Người ta kiểm chứng sự căn chỉnh đạo đức phù hợp với hệ giá trị phổ quát của nhân loại và công bố chi tiết ra bên ngoài báo cáo minh bạch định kỳ nhằm kiến tạo hệ sinh thái trí tuệ nhân tạo đáng tin cậy. Đồng thời, thông qua việc thiết lập có hệ thống phòng thủ tấn công đối nghịch mang tính ác ý và hệ thống truy vết nguồn gốc dữ liệu bảo chứng cho độ tin cậy của dữ liệu học tập, tính giải thích được toàn diện của mô hình đã được bảo đảm trọn vẹn.
