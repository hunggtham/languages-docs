# C1 Vocabulary 03 — Automated feature engineering, statistical outlier detection, and SHAP model explainability

---

## 1. automated feature engineering pipeline
- **American IPA**: /ˈɔːtəmeɪtɪd ˈfiːtʃər ˈɛndʒɪnɪərɪŋ ˈpaɪplaɪn/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong các quy trình học máy.
- **Core meaning — English**: An end-to-end software framework that automatically generates, transforms, and selects predictive features from raw relational or time-series data to optimize machine learning model performance.
- **Core meaning & mental image — Tiếng Việt**: Đường ống kỹ thuật đặc trưng tự động. Hình ảnh một nhà máy lọc dầu tự động lấy dầu thô đầu vào và qua các hệ thống lọc phức tạp để cho ra đời nhiều loại nhiên liệu tinh khiết khác nhau mà không cần con người can thiệp thủ công.
- **Grammar & collocations**:
  - build an automated feature engineering pipeline (xây dựng đường ống kỹ thuật đặc trưng tự động)
  - deploy an automated feature engineering pipeline (triển khai đường ống kỹ thuật đặc trưng tự động)
  - scalable automated feature engineering pipeline (đường ống kỹ thuật đặc trưng tự động có khả năng mở rộng)
- **Register & nuance**: Technical, machine learning engineering, data science register.
- **Examples**:
  - The data science team deployed an **automated feature engineering pipeline** that extracts hundreds of rolling statistics in minutes. (Nhóm khoa học dữ liệu đã triển khai một đường ống kỹ thuật đặc trưng tự động có thể trích xuất hàng trăm thống kê cuộn chỉ trong vài phút.)
  - Using an **automated feature engineering pipeline** significantly reduced the time required to train our fraud detection models. (Việc sử dụng đường ống kỹ thuật đặc trưng tự động đã giảm đáng kể thời gian cần thiết để huấn luyện các mô hình phát hiện gian lận của chúng tôi.)
- **Liên kết tiếng Hàn**: 자동 피처 엔지니어링 파이프라인 (Jadong Picheo Enjinieoring Paipeulain - Automated feature engineering pipeline). Từ "자동" (Jadong - 自動) nghĩa là tự động, và "파이프라인" (Paipeulain) là từ mượn chỉ đường ống xử lý.

---

## 2. isolation forest outlier detection
- **American IPA**: /ˌaɪsəˈleɪʃən ˈfɒrɪst ˈaʊtliər dɪˈtɛkʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong thuật toán phát hiện điểm bất thường.
- **Core meaning — English**: An unsupervised machine learning algorithm that isolates anomalies by randomly selecting features and split values, exploiting the property that outliers are few in number and structurally distinct.
- **Core meaning & mental image — Tiếng Việt**: Phát hiện điểm bất thường bằng rừng cô lập. Hình ảnh một khu rừng thưa nơi những cây dị thường mọc tách biệt hẳn so với phần còn lại của quần thể, dễ dàng bị khoanh vùng qua các đường cắt ngẫu nhiên.
- **Grammar & collocations**:
  - apply isolation forest outlier detection (áp dụng phát hiện điểm bất thường bằng rừng cô lập)
  - robust isolation forest outlier detection model (mô hình phát hiện điểm bất thường bằng rừng cô lập mạnh mẽ)
  - tune isolation forest outlier detection parameters (tinh chỉnh các tham số phát hiện bất thường bằng rừng cô lập)
- **Register & nuance**: Machine learning, statistical anomaly detection, technical register.
- **Examples**:
  - We implemented **isolation forest outlier detection** to flag fraudulent credit card transactions in real time. (Chúng tôi đã áp dụng thuật toán phát hiện điểm bất thường bằng rừng cô lập để đánh dấu các giao dịch thẻ tín dụng gian lận trong thời gian thực.)
  - **Isolation forest outlier detection** performs exceptionally well on high-dimensional datasets with sparse anomalies. (Thuật toán phát hiện điểm bất thường bằng rừng cô lập hoạt động cực kỳ hiệu quả trên các tập dữ liệu nhiều chiều với các điểm dị thường thưa thớt.)
- **Liên kết tiếng Hàn**: 고립 포레스트 이상치 탐지 (Gorip Poreseuteu Isangchi Tamsek - Isolation forest outlier detection). Từ "고립" (Gorip - 孤立) nghĩa là cô lập, và "이상치" (Isangchi - 異常値) nghĩa là giá trị dị thường.

---

## 3. SHAP value feature attribution
- **American IPA**: /ʃæp ˈvæljuː ˈfiːtʃər əˌtrɪbˈjuːʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong khả năng diễn giải mô hình AI.
- **Core meaning — English**: A game-theoretic approach that assigns a numerical contribution value to each feature for a given prediction, explaining how much each variable pushed the model output away from the base value.
- **Core meaning & mental image — Tiếng Việt**: Phân bổ đặc trưng bằng giá trị SHAP. Hình ảnh một chiếc cân đòn chính xác đo lường trọng lượng đóng góp của từng quả cân nhỏ vào kết quả tổng thể của chiếc cân lớn.
- **Grammar & collocations**:
  - calculate SHAP value feature attribution (tính toán phân bổ đặc trưng giá trị SHAP)
  - visualize SHAP value feature attribution ( trực quan hóa phân bổ đặc trưng giá trị SHAP)
  - global SHAP value feature attribution summary (tóm tắt phân bổ đặc trưng giá trị SHAP toàn cục)
- **Register & nuance**: Explainable AI (XAI), machine learning research, advanced technical register.
- **Examples**:
  - **SHAP value feature attribution** revealed that customer tenure was the most influential factor in our churn prediction model. (Phân bổ đặc trưng bằng giá trị SHAP tiết lộ rằng thời gian gắn bó của khách hàng là yếu tố có ảnh hưởng lớn nhất trong mô hình dự đoán khách hàng rời bỏ.)
  - Regulatory compliance requires us to provide **SHAP value feature attribution** explanations for every automated loan rejection. (Tuân thủ quy định yêu cầu chúng tôi cung cấp giải thích phân bổ đặc trưng giá trị SHAP cho mọi quyết định từ chối khoản vay tự động.)
- **Liên kết tiếng Hàn**: SHAP 값 피처 기여도 (SHAP Gap Picheo Giyeodo - SHAP value feature attribution). Từ "값" (Gap) nghĩa là giá trị, và "기여도" (Giyeodo - 寄與度) nghĩa là mức độ đóng góp.

---

## 4. LIME local surrogate explainability
- **American IPA**: /laɪm ˈloʊkəl ˈsɜːrəɡɪt ɪkˌspleɪnəˈbɪlɪti/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong khả năng giải thích mô hình máy học.
- **Core meaning — English**: An explainability technique that approximates a complex black-box model locally around a specific prediction using an interpretable surrogate model like linear regression.
- **Core meaning & mental image — Tiếng Việt**: Khả năng giải thích bằng mô hình thay thế cục bộ LIME. Hình ảnh việc phóng đại một khu vực nhỏ trên bề mặt quả cầu phức tạp để mô tả nó bằng một mặt phẳng hình học đơn giản dễ hiểu.
- **Grammar & collocations**:
  - utilize LIME local surrogate explainability (sử dụng khả năng giải thích thay thế cục bộ LIME)
  - LIME local surrogate explainability framework (khung giải thích thay thế cục bộ LIME)
  - generate LIME local surrogate explainability reports (tạo các báo cáo giải thích thay thế cục bộ LIME)
- **Register & nuance**: Advanced machine learning, interpretability, data science register.
- **Examples**:
  - We applied **LIME local surrogate explainability** to help clinicians understand why the neural network flagged a specific scan as malignant. (Chúng tôi đã áp dụng khả năng giải thích thay thế cục bộ LIME để giúp các bác sĩ lâm sàng hiểu tại sao mạng thần kinh lại đánh dấu một kết quả quét cụ thể là ác tính.)
  - **LIME local surrogate explainability** constructs a simplified linear model around the prediction point to show feature impacts. (Khả năng giải thích thay thế cục bộ LIME xây dựng một mô hình tuyến tính đơn giản hóa xung quanh điểm dự đoán để hiển thị các tác động của đặc trưng.)
- **Liên kết tiếng Hàn**: LIME 로컬 대리 설명력 (LIME Rokeul Daeri Seolmyeongryeok - LIME local surrogate explainability). Từ "대리" (Daeri - 代理) nghĩa là đại lý/thay thế, và "설명력" (Seolmyeongryeok - 說明力) nghĩa là năng lực giải thích.

---

## 5. multicollinearity variance inflation factor
- **American IPA**: /ˌmʌltikɒləˈnɪərɪti ˈvɛəriəns ɪnˈfleɪʃən ˈfæktər/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong phân tích thống kê và hồi quy.
- **Core meaning — English**: A statistical metric used to quantify the severity of multicollinearity in ordinary least squares regression analysis by measuring how much the variance of an estimated regression coefficient is inflated.
- **Core meaning & mental image — Tiếng Việt**: Hệ số phóng đại phương sai do đa cộng tuyến. Hình ảnh nhiều người cùng hô một khẩu hiệu lặp lại trong một phòng kín, làm nhiễu loạn âm thanh và che khuất thông tin riêng lẻ của từng người.
- **Grammar & collocations**:
  - calculate the multicollinearity variance inflation factor (tính toán hệ số phóng đại phương sai đa cộng tuyến)
  - high multicollinearity variance inflation factor threshold (ngưỡng hệ số phóng đại phương sai đa cộng tuyến cao)
  - drop features with a high multicollinearity variance inflation factor (loại bỏ các đặc trưng có hệ số phóng đại phương sai đa cộng tuyến cao)
- **Register & nuance**: Statistics, econometrics, data science regression analysis.
- **Examples**:
  - Variables with a **multicollinearity variance inflation factor** exceeding ten were removed from the linear regression model. (Các biến có hệ số phóng đại phương sai đa cộng tuyến vượt quá mười đã bị loại khỏi mô hình hồi quy tuyến tính.)
  - Checking the **multicollinearity variance inflation factor** ensures that our predictor variables remain statistically independent. (Kiểm tra hệ số phóng đại phương sai đa cộng tuyến đảm bảo rằng các biến dự báo của chúng tôi vẫn độc lập về mặt thống kê.)
- **Liên kết tiếng Hàn**: 다중공선성 분산팽창요인 (Dajunggongseonseong Bunsanpaengchang Yoin - Multicollinearity variance inflation factor). Từ "다중공선성" (Dajunggongseonseong - 多重共線性) nghĩa là đa cộng tuyến, và "분산팽창요인" nghĩa là nhân tố phóng đại phương sai.

---

## 6. target encoding cardinality control
- **American IPA**: /ˈtɑːrgɪt ɛnˈkoʊdɪŋ ˌkɑːrdɪˈnæləti kənˈtroʊl/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong kỹ thuật xử lý dữ liệu phân loại.
- **Core meaning — English**: The regulation and smoothing of high-cardinality categorical features by replacing categories with their target summary statistics while applying regularization to prevent overfitting.
- **Core meaning & mental image — Tiếng Việt**: Kiểm soát độ lực lượng mã hóa mục tiêu. Hình ảnh việc thu gọn hàng nghìn cái tên riêng lẻ thành các nhóm điểm số trung bình có kiểm soát để tránh việc ghi nhớ máy móc quá mức.
- **Grammar & collocations**:
  - implement target encoding cardinality control (triển khai kiểm soát độ lực lượng mã hóa mục tiêu)
  - target encoding cardinality control with smoothing (kiểm soát độ lực lượng mã hóa mục tiêu có làm mượt)
  - robust target encoding cardinality control strategy (chiến lược kiểm soát độ lực lượng mã hóa mục tiêu mạnh mẽ)
- **Register & nuance**: Machine learning feature engineering, advanced tabular modeling.
- **Examples**:
  - We used **target encoding cardinality control** to efficiently encode zip codes without causing severe model overfitting. (Chúng tôi đã sử dụng kiểm soát độ lực lượng mã hóa mục tiêu để mã hóa hiệu quả các mã bưu chính mà không gây ra tình trạng khớp quá mức nghiêm trọng cho mô hình.)
  - High-cardinality categorical variables require careful **target encoding cardinality control** combined with additive smoothing. (Các biến phân loại có độ lực lượng cao đòi hỏi phải kiểm soát độ lực lượng mã hóa mục tiêu cẩn thận kết hợp với việc làm mượt cộng tính.)
- **Liên kết tiếng Hàn**: 타겟 인코딩 카디널리티 제어 (Taget Inkoding Kadineolliti Jeo - Target encoding cardinality control). Từ "카디널리티" (Kadineolliti) là từ mượn chỉ cardinality (độ lực lượng tập hợp), và "제어" (Jeo - 制御) nghĩa là kiểm soát.

---

## 7. Mahalanobis distance multivariate outlier
- **American IPA**: /ˌmɑːhələˈnoʊbɪs ˈdɪstəns ˌmʌltiˈvɜːriət ˈaʊtliər/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong phân tích thống kê đa biến.
- **Core meaning — English**: A multidimensional statistical measure that determines the distance of a data point from the centroid of a distribution, accounting for correlations between variables to identify multivariate outliers.
- **Core meaning & mental image — Tiếng Việt**: Điểm bất thường đa biến khoảng cách Mahalanobis. Hình ảnh thước đo tính toán khoảng cách hình elip trong không gian nhiều chiều, tính đến cả độ tương quan và độ phân tán của các trục dữ liệu.
- **Grammar & collocations**:
  - calculate Mahalanobis distance multivariate outliers (tính toán các điểm bất thường đa biến khoảng cách Mahalanobis)
  - robust Mahalanobis distance multivariate outlier detection (phát hiện điểm bất thường đa biến khoảng cách Mahalanobis mạnh mẽ)
  - threshold for Mahalanobis distance multivariate outliers (ngưỡng cho các điểm bất thường đa biến khoảng cách Mahalanobis)
- **Register & nuance**: Multivariate statistics, anomaly detection, rigorous data science.
- **Examples**:
  - Sensor readings that appeared normal in isolation were flagged as **Mahalanobis distance multivariate outliers** when analyzed together. (Các chỉ số cảm biến trông có vẻ bình thường khi xét riêng lẻ đã được đánh dấu là điểm bất thường đa biến khoảng cách Mahalanobis khi phân tích chung với nhau.)
  - The anomaly detection pipeline uses the **Mahalanobis distance multivariate outlier** formula to account for correlated features. (Đường ống phát hiện bất thường sử dụng công thức điểm bất thường đa biến khoảng cách Mahalanobis để tính đến các đặc trưng có tương quan.)
- **Liên kết tiếng Hàn**: 마할라노비스 거리 다변량 이상치 (Mahallanobi Geori Dabyeonryang Isangchi - Mahalanobis distance multivariate outlier). Từ "다변량" (Dabyeonryang - 多變量) nghĩa là đa biến, và "이상치" (Isangchi - 異常値) nghĩa là giá trị dị thường.

---

## 8. partial dependence plot analysis
- **American IPA**: /ˈpɑːrʃəl dɪˈpɛndəns plɒt əˈnæləsɪs/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong diễn giải mô hình thống kê.
- **Core meaning — English**: A graphical visualization technique showing the marginal effect of one or two features on the predicted outcome of a machine learning model while holding other features constant.
- **Core meaning & mental image — Tiếng Việt**: Phân tích biểu đồ phụ thuộc một phần. Hình ảnh biểu đồ đường cong uốn lượn thể hiện mức độ thay đổi của giá trị đầu ra khi ta kéo dịch chuyển một biến đầu vào cụ thể trong khi giữ nguyên các biến khác.
- **Grammar & collocations**:
  - generate partial dependence plot analysis (tạo phân tích biểu đồ phụ thuộc một phần)
  - interpret partial dependence plot analysis curves (diễn giải các đường cong phân tích biểu đồ phụ thuộc một phần)
  - partial dependence plot analysis for gradient boosting (phân tích biểu đồ phụ thuộc một phần cho mô hình boosting độ dốc)
- **Register & nuance**: Machine learning interpretability, data science visualization register.
- **Examples**:
  - **Partial dependence plot analysis** demonstrated a non-linear relationship between customer age and loan default probability. (Phân tích biểu đồ phụ thuộc một phần đã chứng minh mối quan hệ phi tuyến tính giữa độ tuổi khách hàng và xác suất vỡ nợ khoản vay.)
  - Analysts use **partial dependence plot analysis** to verify that black-box models align with domain knowledge expectations. (Các nhà phân tích sử dụng phân tích biểu đồ phụ thuộc một phần để xác minh rằng các mô hình hộp đen phù hợp với kỳ vọng kiến thức chuyên ngành.)
- **Liên kết tiếng Hàn**: 부분 의존성 플롯 분석 (Bubun Uijonseong Peullot Bunseok - Partial dependence plot analysis). Từ "부분 의존성" (Bubun Uijonseong - 部分依存性) nghĩa là sự phụ thuộc một phần, và "분석" (Bunseok - 分析) nghĩa là phân tích.

---

## 9. feature permutation importance score
- **American IPA**: /ˈfiːtʃər ˌpɜːrmjuˈteɪʃən ɪmˈpɔːrtəns skɔːr/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong đánh giá mô hình.
- **Core meaning — English**: A metric evaluating feature importance by measuring the increase in model prediction error after shuffling the values of that specific feature, thereby breaking its relationship with the target.
- **Core meaning & mental image — Tiếng Việt**: Điểm tầm quan trọng hoán vị đặc trưng. Hình ảnh việc xáo trộn ngẫu nhiên các mảnh ghép của một bức tranh và quan sát xem bức tranh bị hỏng nặng đến mức nào để biết mảnh ghép đó quan trọng ra sao.
- **Grammar & collocations**:
  - compute feature permutation importance scores (tính toán các điểm tầm quan trọng hoán vị đặc trưng)
  - high feature permutation importance score (điểm tầm quan trọng hoán vị đặc trưng cao)
  - drop features with zero feature permutation importance scores (loại bỏ các đặc trưng có điểm tầm quan trọng hoán vị bằng không)
- **Register & nuance**: Machine learning evaluation, feature selection, technical register.
- **Examples**:
  - Calculating the **feature permutation importance score** helped us identify redundant variables that slowed down inference. (Việc tính toán điểm tầm quan trọng hoán vị đặc trưng đã giúp chúng làm nổi bật các biến dư thừa làm chậm quá trình suy luận.)
  - The **feature permutation importance score** confirmed that transaction amount was the dominant predictor in our model. (Điểm tầm quan trọng hoán vị đặc trưng đã xác nhận rằng số tiền giao dịch là biến dự báo chủ đạo trong mô hình của chúng tôi.)
- **Liên kết tiếng Hàn**: 피처 순열 중요도 점수 (Picheo Sunyeol Jungyodo Jeomsu - Feature permutation importance score). Từ "순열" (Sunyeol - 順列) nghĩa là hoán vị, và "중요도 점수" nghĩa là điểm số tầm quan trọng.

---

## 10. cross-validated hyperparameter tuning
- **American IPA**: /krɔːs ˈvælɪdeɪtɪd ˈhaɪpərməˌmiːtər ˈtuːnɪŋ/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong tối ưu hóa mô hình học máy.
- **Core meaning — English**: The systematic search for optimal algorithm configuration settings using rigorous cross-validation folds to prevent overfitting and ensure robust generalization performance.
- **Core meaning & mental image — Tiếng Việt**: Tinh chỉnh siêu tham số được kiểm chứng chéo. Hình ảnh quá trình vặn các núm điều chỉnh trên một chiếc đài phát thanh qua nhiều vòng kiểm tra tín hiệu ở các vùng khác nhau để bắt được tần số rõ nhất.
- **Grammar & collocations**:
  - perform cross-validated hyperparameter tuning (thực hiện tinh chỉnh siêu tham số kiểm chứng chéo)
  - automated cross-validated hyperparameter tuning framework (khung tinh chỉnh siêu tham số kiểm chứng chéo tự động)
  - Bayesian cross-validated hyperparameter tuning (tinh chỉnh siêu tham số kiểm chứng chéo theo phương pháp Bayes)
- **Register & nuance**: Machine learning engineering, model optimization, technical register.
- **Examples**:
  - We used Bayesian optimization for **cross-validated hyperparameter tuning** to find the ideal learning rate for our XGBoost model. (Chúng tôi đã sử dụng tối ưu hóa Bayes để tinh chỉnh siêu tham số kiểm chứng chéo nhằm tìm ra tốc độ học lý tưởng cho mô hình XGBoost của mình.)
  - Rigorous **cross-validated hyperparameter tuning** prevented our classifier from memorizing the noisy training set. (Việc tinh chỉnh siêu tham số kiểm chứng chéo nghiêm ngặt đã ngăn cản bộ phân loại của chúng tôi ghi nhớ tập huấn luyện bị nhiễu.)
- **Liên kết tiếng Hàn**: 교차 밸리데이션 하이퍼파라미터 튜닝 (Gyocha Ballideisyon HaipeoparamiTeo Tyuning - Cross-validated hyperparameter tuning). Từ "교차" (Gyocha - 交差) nghĩa là giao chéo, và "튜닝" nghĩa là tinh chỉnh.

---

## 11. missing data multiple imputation
- **American IPA**: /ˈmɪsɪŋ ˈdeɪtə ˈmʌltɪpəl ˌɪmpjuˈteɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong xử lý dữ liệu tiền kỳ.
- **Core meaning — English**: A statistical technique for handling missing values by creating multiple plausible simulated datasets, analyzing each separately, and pooling the results to account for estimation uncertainty.
- **Core meaning & mental image — Tiếng Việt**: Điền khuyết dữ liệu nhiều lần. Hình ảnh việc điền vào những ô trống trong một cuốn sách cổ bằng nhiều cách phỏng đoán hợp lý khác nhau từ các chương lân cận, sau đó tổng hợp lại kết quả chính xác nhất.
- **Grammar & collocations**:
  - apply missing data multiple imputation (áp dụng điền khuyết dữ liệu nhiều lần)
  - robust missing data multiple imputation method (phương pháp điền khuyết dữ liệu nhiều lần mạnh mẽ)
  - handle missing values with multiple imputation (xử lý giá trị thiếu bằng phương pháp điền khuyết nhiều lần)
- **Register & nuance**: Statistics, data preprocessing, advanced data science register.
- **Examples**:
  - Instead of dropping incomplete records, we used **missing data multiple imputation** to preserve statistical power. (Thay vì loại bỏ các hồ sơ không đầy đủ, chúng tôi đã sử dụng phương pháp điền khuyết dữ liệu nhiều lần để bảo toàn sức mạnh thống kê.)
  - **Missing data multiple imputation** generates several plausible values for each missing entry, reflecting inherent uncertainty. (Phương pháp điền khuyết dữ liệu nhiều lần tạo ra một số giá trị hợp lý cho mỗi mục bị thiếu, phản ánh sự bất định vốn có.)
- **Liên kết tiếng Hàn**: 결측치 다중 대치 (Gyeolcheukchi Dajung Daechi - Missing data multiple imputation). Từ "결측치" (Gyeolcheukchi - 欠측値) nghĩa là giá trị thiếu, và "다중 대치" (Dajung Daechi - 多重代置) nghĩa là thay thế/điền khuyết nhiều lần.

---

## 12. curse of dimensionality reduction
- **American IPA**: /kɜːrs ɒv dɪˌmɛnʃəˈنælɪti rɪˈdʌkʃən/ -> /kɜːrs ɒv dɪˌmɛnʃəˈnælɪti rɪˈdʌkʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong phân tích không gian đặc trưng cao.
- **Core meaning — English**: The mathematical challenge where data sparsity and distance metrics lose meaning in high-dimensional spaces, necessitating dimensionality reduction techniques like PCA or t-SNE.
- **Core meaning & mental image — Tiếng Việt**: Giảm thiểu lời nguyền số chiều. Hình ảnh việc đi lạc trong một mê cung vô tận với quá nhiều hành lang giao nhau đến mức mọi ngóc ngách đều trở nên trống rỗng và vô nghĩa, đòi hỏi phải tìm đường tắt thu gọn không gian.
- **Grammar & collocations**:
  - combat the curse of dimensionality reduction (chống lại lời nguyền giảm số chiều)
  - overcome the curse of dimensionality reduction techniques (vượt qua các kỹ thuật giảm số chiều của lời nguyền số chiều)
  - address the curse of dimensionality reduction (giải quyết vấn đề giảm số chiều)
- **Register & nuance**: Advanced statistics, machine learning, mathematical data science register.
- **Examples**:
  - With over a thousand features, our clustering algorithm suffered from the **curse of dimensionality reduction** until we applied PCA. (Với hơn một nghìn đặc trưng, thuật toán phân cụm của chúng tôi đã gánh chịu lời nguyền số chiều cho đến khi chúng tôi áp dụng PCA.)
  - Dimensionality reduction algorithms are essential tools used to mitigate the **curse of dimensionality reduction** in genomic datasets. (Các thuật toán giảm số chiều là công cụ thiết yếu được sử dụng để giảm nhẹ lời nguyền số chiều trong các tập dữ liệu gen.)
- **Liên kết tiếng Hàn**: 차원의 저주 차원 축소 (Chawon-ui Jeoju Chawon Chukso - Curse of dimensionality reduction). Từ "차원" (Chawon - 次元) nghĩa là số chiều, "저주" (Jeoju - 呪詛) nghĩa là lời nguyền, và "축소" (Chukso - 縮小) nghĩa là thu nhỏ/giảm.

---

## 13. monotonic feature constraint model
- **American IPA**: /ˌmɒnəˈtɒnɪk ˈfiːtʃər kənˈstreɪnt ˈmɒdəl/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh tin), thường làm chủ ngữ hoặc tân ngữ trong thiết kế mô hình cây quyết định.
- **Core meaning — English**: A machine learning model enforcement where a specific feature is forced to either exclusively increase or exclusively decrease the predicted output, preventing anomalous non-logical fluctuations.
- **Core meaning & mental image — Tiếng Việt**: Mô hình ràng buộc đặc trưng đơn điệu. Hình ảnh chiếc dốc trượt một chiều không bao giờ gồ ghề ngược lên, đảm bảo người đi trượt chỉ có thể đi xuống hoặc tiến thẳng theo một chiều nhất định.
- **Grammar & collocations**:
  - train a monotonic feature constraint model (huấn luyện mô hình ràng buộc đặc trưng đơn điệu)
  - apply monotonic feature constraints in XGBoost (áp dụng các ràng buộc đặc trưng đơn điệu trong XGBoost)
  - robust monotonic feature constraint model performance (hiệu suất mô hình ràng buộc đặc trưng đơn điệu mạnh mẽ)
- **Register & nuance**: Machine learning engineering, gradient boosting, regulated financial modeling register.
- **Examples**:
  - To comply with lending guidelines, we trained a **monotonic feature constraint model** ensuring higher credit scores never decrease approval probability. (Để tuân thủ các nguyên tắc cho vay, chúng tôi đã huấn luyện mô hình ràng buộc đặc trưng đơn điệu đảm bảo điểm tín dụng cao hơn không bao giờ làm giảm xác suất được phê duyệt.)
  - **Monotonic feature constraint models** prevent tree-based algorithms from learning irrational jagged patterns in financial data. (Các mô hình ràng buộc đặc trưng đơn điệu ngăn cản các thuật toán dựa trên cây học các mẫu gấp khúc phi lý trong dữ liệu tài chính.)
- **Liên kết tiếng Hàn**: 단조 피처 제약 모델 (Danjo Picheo Jeyak Model - Monotonic feature constraint model). Từ "단조" (Danjo - 單調) nghĩa là đơn điệu, và "제약 모델" nghĩa là mô hình ràng buộc.

---

## 14. class imbalance synthetic oversampling (SMOTE)
- **American IPA**: /klæs ɪmˈbæləns sɪnˈθɛtɪk ˈoʊvərˌsæmplɪŋ/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong tiền xử lý phân loại.
- **Core meaning — English**: An algorithmic technique that resolves severe class imbalance in classification datasets by synthesizing plausible minority-class instances along line segments joining nearest neighbors.
- **Core meaning & mental image — Tiếng Việt**: Lấy mẫu quá mức tổng hợp mất cân bằng lớp (SMOTE). Hình ảnh việc đắp thêm những bức tượng nhỏ ở nhóm thiểu số bằng cách nối các điểm tương đồng gần nhất để số lượng quân cờ cân bằng với nhóm đa số.
- **Grammar & collocations**:
  - apply class imbalance synthetic oversampling (áp dụng lấy mẫu quá mức tổng hợp mất cân bằng lớp)
  - SMOTE class imbalance synthetic oversampling technique (kỹ thuật SMOTE lấy mẫu quá mức tổng hợp mất cân bằng lớp)
  - evaluate models trained with class imbalance synthetic oversampling (đánh giá các mô hình được huấn luyện bằng lấy mẫu quá mức tổng hợp)
- **Register & nuance**: Machine learning preprocessing, classification modeling register.
- **Examples**:
  - Because fraudulent transactions represented less than one percent of our data, we applied **class imbalance synthetic oversampling (SMOTE)**. (Vì các giao dịch gian lận chiếm chưa đến một phần trăm dữ liệu của chúng tôi, chúng tôi đã áp dụng kỹ thuật lấy mẫu quá mức tổng hợp SMOTE.)
  - **Class imbalance synthetic oversampling** prevents machine learning classifiers from blindly predicting the majority class. (Lấy mẫu quá mức tổng hợp mất cân bằng lớp ngăn cản các bộ phân loại học máy dự đoán một cách mù quáng theo lớp đa số.)
- **Liên kết tiếng Hàn**: 클래스 불균형 합성 오버샘플링 (Keulaeseu Bulgyunhyeong Hapsap Obeosampeulling - Class imbalance synthetic oversampling). Từ "불균형" (Bulgyunhyeong - 不均衡) nghĩa là mất cân bằng, và "오버샘플링" nghĩa là oversampling.

---

## 15. model drift Kolmogorov-Smirnov test
- **American IPA**: /ˈmɒdəl drɪft ˌkɒlməɡɔːrf smɪərnɔːf tɛst/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong giám sát mô hình sản xuất.
- **Core meaning — English**: A non-parametric statistical test used to detect distribution shifts between training data and production inference data by comparing their cumulative distribution functions.
- **Core meaning & mental image — Tiếng Việt**: Kiểm định Kolmogorov-Smirnov trôi dạt mô hình. Hình ảnh việc so sánh hai đường cong tích lũy xác suất của hai biểu đồ mưa để xem khí hậu năm nay đã thay đổi lệch lạc đi bao nhiêu so với năm ngoái.
- **Grammar & collocations**:
  - run the model drift Kolmogorov-Smirnov test (chạy kiểm định Kolmogorov-Smirnov trôi dạt mô hình)
  - daily model drift Kolmogorov-Smirnov test alert (cảnh báo kiểm định Kolmogorov-Smirnov trôi dạt mô hình hàng ngày)
  - statistical model drift Kolmogorov-Smirnov test threshold (ngưỡng kiểm định Kolmogorov-Smirnov trôi dạt mô hình thống kê)
- **Register & nuance**: MLOps, model monitoring, statistical quality control register.
- **Examples**:
  - The MLOps platform executes a daily **model drift Kolmogorov-Smirnov test** to check if incoming customer features have shifted. (Nền tảng MLOps thực hiện kiểm định Kolmogorov-Smirnov trôi dạt mô hình hàng ngày để kiểm tra xem các đặc trưng khách hàng đầu vào có bị thay đổi hay không.)
  - When the **model drift Kolmogorov-Smirnov test** p-value dropped below 0.01, an automated retraining pipeline was triggered. (Khi giá trị p của kiểm định Kolmogorov-Smirnov trôi dạt mô hình giảm xuống dưới 0.01, một đường ống huấn luyện lại tự động đã được kích hoạt.)
- **Liên kết tiếng Hàn**: 모델 드리프트 콜모고로프 스미르노프 검정 (Model Deuripeuteu Kolmogoropeu Sumireunopeu Geomjeong - Model drift Kolmogorov-Smirnov test). Từ "검정" (Geomjeong - 検定) nghĩa là kiểm định thống kê.

---

## 16. interaction term feature synthesis
- **American IPA**: /ˌɪntərˈækʃən tɜːrm ˈfiːtʃər ˈsɪnθəsɪs/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong thiết kế đặc trưng nâng cao.
- **Core meaning — English**: The mathematical creation of new predictive variables by multiplying or combining existing features to capture synergistic relationships that individual variables cannot capture alone.
- **Core meaning & mental image — Tiếng Việt**: Tổng hợp đặc trưng thuật ngữ tương tác. Hình ảnh việc kết hợp hai nguyên liệu riêng lẻ để tạo ra một phản ứng hóa học tạo ra hợp chất mới có tính năng mạnh mẽ hơn nhiều.
- **Grammar & collocations**:
  - automate interaction term feature synthesis (tự động hóa tổng hợp đặc trưng thuật ngữ tương tác)
  - polynomial interaction term feature synthesis (tổng hợp đặc trưng thuật ngữ tương tác đa thức)
  - exploratory interaction term feature synthesis (tổng hợp đặc trưng thuật ngữ tương tác khám phá)
- **Register & nuance**: Feature engineering, regression modeling, data science technical register.
- **Examples**:
  - Adding **interaction term feature synthesis** between square footage and neighborhood rating improved our real-time house price predictions. (Việc bổ sung tổng hợp đặc trưng thuật ngữ tương tác giữa diện tích vuông và xếp hạng khu vực đã cải thiện các dự đoán giá nhà theo thời gian thực của chúng tôi.)
  - Tree-based models can implicitly learn interactions, but linear models rely heavily on explicit **interaction term feature synthesis**. (Các mô hình dựa trên cây có thể học ngầm các tương tác, nhưng các mô hình tuyến tính phụ thuộc rất nhiều vào tổng hợp đặc trưng thuật ngữ tương tác tường minh.)
- **Liên kết tiếng Hàn**: 상호작용 항 피처 합성 (Sanghojakyong Hang Picheo Hapsap - Interaction term feature synthesis). Từ "상호작용" (Sanghojakyong - 相互作用) nghĩa là tương tác, "항" (Hang - 項) nghĩa là số hạng, và "합성" (Hapsap - 合成) nghĩa là tổng hợp.

---

## 17. principal component orthogonal projection
- **American IPA**: /ˈprɪnsəpəl kəmˈpoʊnənt ɔːrˈθɒgənəl prəˈdɛkʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong đại số tuyến tính và giảm số chiều.
- **Core meaning — English**: The geometric transformation of high-dimensional data onto orthogonal eigenvectors that maximize variance, effectively decorrelating features.
- **Core meaning & mental image — Tiếng Việt**: Phép chiếu trực giao thành phần chính. Hình ảnh việc chiếu bóng vuông góc của một vật thể ba chiều lên một tấm bảng phẳng sao cho giữ lại được diện tích bóng đổ lớn nhất và rõ nét nhất.
- **Grammar & collocations**:
  - compute principal component orthogonal projections (tính toán các phép chiếu trực giao thành phần chính)
  - linear principal component orthogonal projection matrix (ma trận phép chiếu trực giao thành phần chính tuyến tính)
  - apply principal component orthogonal projection (áp dụng phép chiếu trực giao thành phần chính)
- **Register & nuance**: Linear algebra, dimensionality reduction, advanced statistics register.
- **Examples**:
  - **Principal component orthogonal projection** transformed our correlated financial indicators into uncorrelated orthogonal axes. (Phép chiếu trực giao thành phần chính đã chuyển đổi các chỉ số tài chính có tương quan của chúng tôi thành các trục trực giao không có tương quan.)
  - The mathematical backbone of PCA relies entirely on **principal component orthogonal projection** along maximum variance directions. (Xương sống toán học của PCA phụ thuộc hoàn toàn vào phép chiếu trực giao thành phần chính dọc theo các hướng phương sai cực đại.)
- **Liên kết tiếng Hàn**: 주성분 직교 투영 (Juseongbun Jikgyo Tuyeong - Principal component orthogonal projection). Từ "주성분" (Juseongbun - 主成分) nghĩa là thành phần chính, "직교" (Jikgyo - 直交) nghĩa là trực giao, và "투영" (Tuyeong - 投影) nghĩa là phép chiếu.

---

## 18. robust z-score standardization
- **American IPA**: /ˈroʊbʌst ˈziː skɔːr ˌstændərdaɪˈzeɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong chuẩn hóa dữ liệu tiền xử lý.
- **Core meaning — English**: A scaling method that centers data using the median and scales it using the interquartile range, rendering feature standardization resilient to extreme outliers.
- **Core meaning & mental image — Tiếng Việt**: Chuẩn hóa điểm z mạnh mẽ (chống nhiễu). Hình ảnh chiếc thang đo sử dụng giá trị trung vị ở giữa và khoảng tứ phân vị để không bị bóp méo bởi những người khổng lồ hoặc người lùn cực đoan trong đám đông.
- **Grammar & collocations**:
  - apply robust z-score standardization (áp dụng chuẩn hóa điểm z mạnh mẽ)
  - robust z-score standardization for skewed data (chuẩn hóa điểm z mạnh mẽ cho dữ liệu bị lệch)
  - scale features using robust z-score standardization (chuẩn hóa các đặc trưng bằng chuẩn hóa điểm z mạnh mẽ)
- **Register & nuance**: Data preprocessing, machine learning feature scaling register.
- **Examples**:
  - Because our revenue data contained extreme spikes, standard scaling failed, so we switched to **robust z-score standardization**. (Vì dữ liệu doanh thước của chúng tôi chứa các đỉnh cực đoan, việc chuẩn hóa tiêu chuẩn đã thất bại, vì vậy chúng tôi đã chuyển sang chuẩn hóa điểm z mạnh mẽ.)
  - **Robust z-score standardization** uses the median and median absolute deviation to protect against outlier distortion. (Chuẩn hóa điểm z mạnh mẽ sử dụng trung vị và độ lệch tuyệt đối trung vị để bảo vệ chống lại sự méo mó do điểm dị thường.)
- **Liên kết tiếng Hàn**: 로버스트 z-점수 표준화 (Robeoseuteu z-Jeomsu Pyojunhwa - Robust z-score standardization). Từ "로버스트" (Robeoseuteu) nghĩa là mạnh mẽ/chống nhiễu, và "표준화" (Pyojunhwa - 標準化) nghĩa là chuẩn hóa.

---

## 19. black-box model interpretability
- **American IPA**: /ˈblæk bɒks ˈmɒdəl ɪnˌtɜːrprətəˈbɪlɪti/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong đánh giá hệ thống trí tuệ nhân tạo.
- **Core meaning — English**: The degree to which a complex machine learning model—such as a deep neural network or ensemble—allows human observers to understand how internal logic produces specific predictions.
- **Core meaning & mental image — Tiếng Việt**: Khả năng diễn giải mô hình hộp đen. Hình ảnh việc đứng bên ngoài một cỗ máy thần kỳ tối tăm không nhìn thấu bên trong, chỉ cố gắng dò đoán cơ chế hoạt động thông qua các đầu ra hiển thị.
- **Grammar & collocations**:
  - enhance black-box model interpretability (nâng cao khả năng diễn giải mô hình hộp đen)
  - challenge of black-box model interpretability (thách thức về khả năng diễn giải mô hình hộp đen)
  - improve black-box model interpretability with XAI (cải thiện khả năng diễn giải mô hình hộp đen bằng XAI)
- **Register & nuance**: Artificial intelligence governance, ethics, technical machine learning register.
- **Examples**:
  - Lack of **black-box model interpretability** remains a major regulatory hurdle for deploying deep learning in healthcare. (Sự thiếu hụt khả năng diễn giải mô hình hộp đen vẫn là một rào cản quy định lớn đối với việc triển khai học sâu trong chăm sóc sức khỏe.)
  - Researchers use post-hoc explanation tools to bridge the gap in **black-box model interpretability**. (Các nhà nghiên cứu sử dụng các công cụ giải thích hậu kỳ để thu hẹp khoảng cách về khả năng diễn giải mô hình hộp đen.)
- **Liên kết tiếng Hàn**: 블랙박스 모델 해석 가능성 (Beullaekbakseu Model Haesok Ganeungseong - Black-box model interpretability). Từ "블랙박스" (Beullaekbakseu) nghĩa là hộp đen, và "해석 가능성" (Haesok Ganeungseong - 解析可能性) nghĩa là khả năng phân tích/diễn giải được.

---

## 20. global feature importance ranking
- **American IPA**: /ˈgloʊbəl ˈfiːtʃər ɪmˈpɔːrtəns ˈræŋkɪŋ/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong phân tích tổng quan mô hình.
- **Core meaning — English**: An aggregated hierarchy of predictor variables ordered by their overall contribution to the predictive performance of a machine learning model across the entire dataset.
- **Core meaning & mental image — Tiếng Việt**: Xếp hạng tầm quan trọng đặc trưng toàn cục. Hình ảnh bảng vinh danh tổng hợp xếp hạng các cầu thủ xuất sắc nhất trong toàn bộ mùa giải dựa trên đóng góp tổng thể của họ cho đội bóng.
- **Grammar & collocations**:
  - compute global feature importance ranking (tính toán xếp hạng tầm quan trọng đặc trưng toàn cục)
  - visualize global feature importance ranking (trực quan hóa xếp hạng tầm quan trọng đặc trưng toàn cục)
  - inspect global feature importance ranking charts (kiểm tra các biểu đồ xếp hạng tầm quan trọng đặc trưng toàn cục)
- **Register & nuance**: Machine learning interpretation, feature analysis, technical register.
- **Examples**:
  - The **global feature importance ranking** indicated that credit history length was the primary driver of our risk model. (Xếp hạng tầm quan trọng đặc trưng toàn cục chỉ ra rằng độ dài lịch sử tín dụng là động lực chính của mô hình rủi ro của chúng tôi.)
  - Reviewing the **global feature importance ranking** helps data scientists validate whether the model learned domain-appropriate patterns. (Việc xem xét xếp hạng tầm quan trọng đặc trưng toàn cục giúp các nhà khoa học dữ liệu xác thực xem mô hình đã học được các mẫu phù hợp với lĩnh vực chuyên môn hay chưa.)
- **Liên kết tiếng Hàn**: 글로벌 피처 중요도 순위 (Geullobeol Picheo Jungyodo Sunwi - Global feature importance ranking). Từ "글로벌" nghĩa là toàn cục, "중요도" nghĩa là tầm quan trọng, và "순위" (Sunwi - 順位) nghĩa là thứ hạng.

---

## 21. adversarial data perturbation test
- **American IPA**: /ədˈvɜːrsəriəl ˈdeɪtə ˌpɜːrtərˈbeɪʃən tɛst/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong kiểm thử an toàn mô hình.
- **Core meaning — English**: A rigorous security evaluation where intentional, subtle noise or perturbations are injected into input data to test model robustness against malicious spoofing or evasion attacks.
- **Core meaning & mental image — Tiếng Việt**: Kiểm thử nhiễu dữ liệu đối kháng. Hình ảnh việc cố tình vẽ những đường nét nhỏ ngụy trang lên biển báo giao thông để xem chiếc xe tự lái có bị lừa và đọc sai biển báo đó hay không.
- **Grammar & collocations**:
  - conduct adversarial data perturbation tests (tiến hành các bài kiểm thử nhiễu dữ liệu đối kháng)
  - robust adversarial data perturbation test suite (bộ kiểm thử nhiễu dữ liệu đối kháng mạnh mẽ)
  - evaluate model resilience with adversarial data perturbation tests (đánh giá khả năng phục hồi của mô hình bằng các bài kiểm thử nhiễu đối kháng)
- **Register & nuance**: AI security, robustness evaluation, cybersecurity register.
- **Examples**:
  - Security engineers performed an **adversarial data perturbation test** to verify that our fraud classifier could not be easily bypassed. (Các kỹ sư bảo mật đã thực hiện một bài kiểm thử nhiễu dữ liệu đối kháng để xác minh rằng bộ phân loại gian lận của chúng tôi không thể dễ dàng bị qua mặt.)
  - The neural network showed high vulnerability during the **adversarial data perturbation test**, prompting an immediate defense upgrade. (Mạng thần kinh đã thể hiện độ dễ bị tổn thương cao trong bài kiểm thử nhiễu dữ liệu đối kháng, thúc đẩy việc nâng cấp phòng thủ ngay lập tức.)
- **Liên kết tiếng Hàn**: 적대적 데이터 섭동 테스트 (Jeokdaejeok Deiteo Seopdong Teseuteu - Adversarial data perturbation test). Từ "적대적" (Jeokdaejeok - 敵対的) nghĩa là đối kháng, và "섭동" (Seopdong - 摂動) nghĩa là nhiễu động.

---

## 22. predictive feature stability metric
- **American IPA**: /prɪˈdɪktɪv ˈfiːtʃər stəˈbɪlɪti ˈmɛtrɪk/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong theo dõi chất lượng tính năng.
- **Core meaning — English**: A quantitative measure that tracks how consistently a feature’s distribution and predictive power remain stable over time between training periods and live production batches.
- **Core meaning & mental image — Tiếng Việt**: Thử nghiệm độ ổn định đặc trưng dự đoán. Hình ảnh chiếc cầu treo được gắn các cảm biến đo độ rung lắc liên tục để đảm bảo các nhịp cấu trúc không bị xê dịch hay lún sụt theo thời gian.
- **Grammar & collocations**:
  - monitor predictive feature stability metrics (giám sát các chỉ số ổn định đặc trưng dự đoán)
  - low predictive feature stability metric alert (cảnh báo chỉ số ổn định đặc trưng dự đoán thấp)
  - calculate predictive feature stability metrics (tính toán các chỉ số ổn định đặc trưng dự đoán)
- **Register & nuance**: MLOps, model monitoring, data science production register.
- **Examples**:
  - Tracking the **predictive feature stability metric** alerted us when user purchasing behavior shifted unexpectedly during the holiday season. (Việc theo dõi chỉ số ổn định đặc trưng dự đoán đã cảnh báo chúng tôi khi hành vi mua sắm của người dùng thay đổi bất ngờ trong mùa lễ hội.)
  - Models with high **predictive feature stability metrics** require less frequent retraining cycles in production. (Các mô hình có chỉ số ổn định đặc trưng dự đoán cao đòi hỏi chu kỳ huấn luyện lại ít thường xuyên hơn trong môi trường sản xuất.)
- **Liên kết tiếng Hàn**: 예측 피처 안정성 지표 (Y 예측 Picheo Anjeongseong Jipyo - Predictive feature stability metric). Từ "예측" (Y 예측 - 予測) nghĩa là dự đoán, "안정성" (Anjeongseong - 安定性) nghĩa là tính ổn định, và "지표" (Jipyo - 指標) nghĩa là chỉ số.

---

## 23. residual error diagnostic plot
- **American IPA**: /rɪˈzɪdjuəl ˈɛrər ˌdaɪəgˈnɒstɪk plɒt/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong đánh giá mô hình hồi quy.
- **Core meaning — English**: A scatter plot of regression residuals versus predicted values or independent variables, used visually to check for non-linearity, heteroscedasticity, and systematic bias.
- **Core meaning & mental image — Tiếng Việt**: Biểu đồ chẩn đoán lỗi phần dư. Hình ảnh biểu đồ phân tán các vết đạn bắn quanh hồng tâm để kiểm tra xem tay súng có bị lệch hướng hệ thống sang một góc nào đó hay không.
- **Grammar & collocations**:
  - analyze residual error diagnostic plots (phân tích các biểu đồ chẩn đoán lỗi phần dư)
  - inspect residual error diagnostic plots for heteroscedasticity (kiểm tra biểu đồ chẩn đoán lỗi phần dư để tìm phương sai sai số thay đổi)
  - generate residual error diagnostic plots (tạo các biểu đồ chẩn đoán lỗi phần dư)
- **Register & nuance**: Regression analysis, statistical modeling, technical register.
- **Examples**:
  - Inspecting the **residual error diagnostic plot** revealed clear signs of heteroscedasticity, requiring a log transformation of the target variable. (Việc kiểm tra biểu đồ chẩn đoán lỗi phần dư đã tiết lộ các dấu hiệu rõ ràng về phương sai sai số thay đổi, đòi hỏi phải biến đổi logarit của biến mục tiêu.)
  - A random scatter around zero in the **residual error diagnostic plot** confirms that our linear model assumptions hold true. (Sự phân tán ngẫu nhiên xung quanh số không trong biểu đồ chẩn đoán lỗi phần dư xác nhận rằng các giả định mô hình tuyến tính của chúng tôi vẫn đúng.)
- **Liên kết tiếng Hàn**: 잔차 오차 진단 플롯 (Jancha Ocha Jindan Peullot - Residual error diagnostic plot). Từ "잔차" (Jancha - 残差) nghĩa là phần dư, "오차" (Ocha - 誤差) nghĩa là sai số, "진단" (Jindan - 診断) nghĩa là chẩn đoán, và "플롯" nghĩa là biểu đồ.

---

## 24. model fairness demographic parity
- **American IPA**: /ˈmɒdəl ˈfɛrnəs ˌdɛməˈgræfɪk pəˈrɪti/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong đạo đức trí tuệ nhân tạo.
- **Core meaning — English**: A fairness criterion requiring that a classification model's positive prediction rate be equal across different demographic subgroups, preventing discriminatory disparate impact.
- **Core meaning & mental image — Tiếng Việt**: Sự công bằng mô hình ngang bằng nhân khẩu học. Hình ảnh chiếc cửa khẩu kiểm soát an ninh mở đều cơ hội bước qua cho tất cả mọi nhóm người thuộc các sắc tộc hoặc giới tính khác nhau mà không có sự phân biệt đối xử.
- **Grammar & collocations**:
  - evaluate model fairness demographic parity (đánh giá sự công bằng ngang bằng nhân khẩu học của mô hình)
  - enforce model fairness demographic parity constraints (thực thi các ràng buộc công bằng ngang bằng nhân khẩu học của mô hình)
  - achieve model fairness demographic parity in hiring AI (đạt được sự công bằng ngang bằng nhân khẩu học của mô hình trong AI tuyển dụng)
- **Register & nuance**: AI ethics, responsible AI, regulatory compliance register.
- **Examples**:
  - The auditing committee mandated that our automated hiring algorithm satisfy **model fairness demographic parity** across all applicant groups. (Ủy ban kiểm toán đã yêu cầu thuật toán tuyển dụng tự động của chúng tôi phải thỏa mãn sự công bằng ngang bằng nhân khẩu học trên tất cả các nhóm ứng viên.)
  - Achieving **model fairness demographic parity** required re-weighting our training data to remove historical hiring bias. (Việc đạt được sự công bằng ngang bằng nhân khẩu học của mô hình đòi hỏi phải cân nhắc trọng số lại dữ liệu huấn luyện để loại bỏ thành kiến tuyển dụng lịch sử.)
- **Liên kết tiếng Hàn**: 모델 공정성 인구통계학적 패리티 (Model Gongjeongseong Ingutonggyehakjeok Paeriti - Model fairness demographic parity). Từ "공정성" (Gongjeongseong - 公正性) nghĩa là tính công bằng, và "인구통계학적 패리티" nghĩa là ngang bằng nhân khẩu học.

---

## 25. enterprise machine learning pipeline
- **American IPA**: /ˈɛntərpraɪz məˈʃɪn ˈlɜːrnɪŋ ˈpaɪplaɪn/
- **Loại từ & vị trí trong câu**: Noun phrase (Cụm danh từ), thường làm chủ ngữ hoặc tân ngữ trong kiến trúc hệ thống dữ liệu doanh nghiệp.
- **Core meaning — English**: A robust, scalable, and automated architecture that integrates data ingestion, feature engineering, model training, validation, and deployment into a seamless corporate workflow.
- **Core meaning & mental image — Tiếng Việt**: Đường ống học máy cấp doanh nghiệp. Hình ảnh dây chuyền lắp ráp ô tô tự động quy mô lớn, nơi từ các linh kiện thô đi vào đầu này và những chiếc xe hoàn thiện lăn bánh ra ở đầu kia một cách trơn tru.
- **Grammar & collocations**:
  - deploy an enterprise machine learning pipeline (triển khai đường ống học máy cấp doanh nghiệp)
  - orchestrate an enterprise machine learning pipeline (điều phối đường ống học máy cấp doanh nghiệp)
  - scalable enterprise machine learning pipeline architecture (kiến trúc đường ống học máy cấp doanh nghiệp có khả năng mở rộng)
- **Register & nuance**: Enterprise MLOps, software architecture, executive engineering register.
- **Examples**:
  - Migrating from experimental scripts to an **enterprise machine learning pipeline** reduced model deployment time from weeks to hours. (Việc chuyển từ các tập lệnh thử nghiệm sang đường ống học máy cấp doanh nghiệp đã giảm thời gian triển khai mô hình từ vài tuần xuống còn vài giờ.)
  - The new **enterprise machine learning pipeline** automates continuous integration, testing, and monitoring across all cloud clusters. (Đường ống học máy cấp doanh nghiệp mới tự động hóa tích hợp liên tục, kiểm thử và giám sát trên tất cả các cụm đám mây.)
- **Liên kết tiếng Hàn**: 엔터프라이즈 머신러닝 파이프라인 (Enteupraiseu Meosinreoning Paipeulain - Enterprise machine learning pipeline). Từ "엔터프라이즈" nghĩa là doanh nghiệp, và "머신러닝 파이프라인" nghĩa là đường ống học máy.

---

## Review in context: Part 1

Building effective predictive models begins with deploying an **automated feature engineering pipeline** to extract signals from raw datasets. To maintain data integrity, data scientists apply **isolation forest outlier detection** alongside **Mahalanobis distance multivariate outlier** calculations to flag anomalies. When constructing regression models, engineers check the **multicollinearity variance inflation factor** and use **target encoding cardinality control** combined with **missing data multiple imputation** to sanitize tables. To combat the **curse of dimensionality reduction**, techniques like **principal component orthogonal projection** and **robust z-score standardization** transform the feature space. Furthermore, analysts utilize **partial dependence plot analysis**, **feature permutation importance score**, and **cross-validated hyperparameter tuning** to optimize model performance, while applying **monotonic feature constraint models** and **class imbalance synthetic oversampling (SMOTE)** to handle skewed target distributions.

Việc xây dựng các mô hình dự đoán hiệu quả bắt đầu bằng việc triển khai đường ống kỹ thuật đặc trưng tự động để trích xuất tín hiệu từ các tập dữ liệu thô. Để duy trì tính toàn vẹn của dữ liệu, các nhà khoa học dữ liệu áp dụng phát hiện điểm bất thường bằng rừng cô lập bên cạnh các tính toán điểm bất thường đa biến khoảng cách Mahalanobis để đánh dấu các dị thường. Khi xây dựng các mô hình hồi quy, các kỹ sư kiểm tra hệ số phóng đại phương sai đa cộng tuyến và sử dụng kiểm soát độ lực lượng mã hóa mục tiêu kết hợp với điền khuyết dữ liệu nhiều lần để làm sạch các bảng. Để chống lại lời nguyền giảm số chiều, các kỹ thuật như phép chiếu trực giao thành phần chính và chuẩn hóa điểm z mạnh mẽ chuyển đổi không gian đặc trưng. Hơn nữa, các nhà phân tích tận dụng phân tích biểu đồ phụ thuộc một phần, điểm tầm quan trọng hoán vị đặc trưng và tinh chỉnh siêu tham số kiểm chứng chéo để tối ưu hóa hiệu suất mô hình, đồng thời áp dụng các mô hình ràng buộc đặc trưng đơn điệu và lấy mẫu quá mức tổng hợp mất cân bằng lớp (SMOTE) để xử lý các phân phối mục tiêu bị lệch.

---

## Review in context: Part 2

Once models are deployed into production, continuous MLOps surveillance is essential. Teams rely on the **model drift Kolmogorov-Smirnov test** and **predictive feature stability metric** to catch distribution shifts early. To make complex systems transparent, practitioners implement **SHAP value feature attribution**, **LIME local surrogate explainability**, and **interaction term feature synthesis** alongside **global feature importance ranking**, demystifying **black-box model interpretability**. Rigorous testing includes **adversarial data perturbation test** suites and **residual error diagnostic plots** to check for hidden biases and heteroscedasticity. Finally, maintaining **model fairness demographic parity** and integrating everything within a scalable **enterprise machine learning pipeline** ensures that models remain robust, ethical, and fully aligned with corporate production standards.

Một khi các mô hình được triển khai vào môi trường sản xuất, việc giám sát MLOps liên tục là điều thiết yếu. Các nhóm dựa vào kiểm định Kolmogorov-Smirnov trôi dạt mô hình và chỉ số ổn định đặc trưng dự đoán để phát hiện sự thay đổi phân phối từ sớm. Để làm cho các hệ thống phức tạp trở nên minh bạch, các chuyên gia thực hiện phân bổ đặc trưng giá trị SHAP, khả năng giải thích thay thế cục bộ LIME và tổng hợp đặc trưng thuật ngữ tương tác bên cạnh xếp hạng tầm quan trọng đặc trưng toàn cục, qua đó làm sáng tỏ khả năng diễn giải mô hình hộp đen. Kiểm thử nghiêm ngặt bao gồm các bộ kiểm thử nhiễu dữ liệu đối kháng và biểu đồ chẩn đoán lỗi phần dư để kiểm tra các thiên kiến ẩn và phương sai sai số thay đổi. Cuối cùng, việc duy trì sự công bằng ngang bằng nhân khẩu học của mô hình và tích hợp mọi thứ trong một đường ống học máy cấp doanh nghiệp có khả năng mở rộng đảm bảo rằng các mô hình vẫn mạnh mẽ, có đạo đức và hoàn toàn tuân thủ các tiêu chuẩn sản xuất của doanh nghiệp.
