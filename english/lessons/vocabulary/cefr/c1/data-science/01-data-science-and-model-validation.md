# C1 Vocabulary 01 — Data science and model validation

Nhóm từ này mô tả cách nhà phân tích chuẩn bị dữ liệu, huấn luyện mô hình và kiểm tra khả năng khái quát. Flow của bài là: **data science → data scientist → data wrangling → feature engineering → training data → test set → validation set → overfitting → underfitting → cross-validation → classification → clustering → dimensionality reduction → principal component analysis → random forest**.

---

## 1. data science /ˈdeɪtə ˌsaɪəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — lĩnh vực kết hợp thống kê, lập trình và kiến thức chuyên môn để rút ra thông tin hoặc dự đoán từ dữ liệu.

**Core meaning — English:** The field of combining statistics, programming, and domain knowledge to extract insight or make predictions from data.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một quy trình nối câu hỏi thực tế, dữ liệu thô, mô hình và quyết định có thể kiểm chứng.

**Grammar & collocations:** `data-science project` — dự án khoa học dữ liệu; `data science workflow` — quy trình khoa học dữ liệu; `apply data science` — áp dụng khoa học dữ liệu.

**Register & nuance:** Data science rộng hơn machine learning; nó bao gồm thu thập, làm sạch, phân tích, giao tiếp kết quả và triển khai.

**Examples:** `Data science helped the hospital predict appointment demand.` → Khoa học dữ liệu giúp bệnh viện dự đoán nhu cầu hẹn khám. `The course presents a complete data science workflow.` → Khóa học trình bày một quy trình khoa học dữ liệu hoàn chỉnh.

**Liên kết tiếng Hàn:** `데이터 과학` — khoa học dữ liệu.

## 2. data scientist /ˈdeɪtə ˌsaɪəntɪst/

**Loại từ & vị trí trong câu:** `countable noun` — chuyên gia dùng dữ liệu, thống kê, mã nguồn và kiến thức lĩnh vực để giải quyết câu hỏi phân tích.

**Core meaning — English:** A specialist who uses data, statistics, code, and domain knowledge to answer analytical questions.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung người vừa hiểu dữ liệu, vừa đặt câu hỏi đúng và giải thích giới hạn của kết quả.

**Grammar & collocations:** `work as a data scientist` — làm nhà khoa học dữ liệu; `data-scientist role` — vai trò nhà khoa học dữ liệu; `data scientist team` — nhóm nhà khoa học dữ liệu.

**Register & nuance:** Data scientist không chỉ là người xây mô hình; giao tiếp, thiết kế thí nghiệm và hiểu quy trình kinh doanh cũng rất quan trọng.

**Examples:** `The data scientist questioned whether the labels were reliable.` → Nhà khoa học dữ liệu đặt câu hỏi liệu nhãn có đáng tin hay không. `A data scientist translated the model's output for clinicians.` → Nhà khoa học dữ liệu chuyển đầu ra mô hình cho bác sĩ hiểu.

**Liên kết tiếng Hàn:** `데이터 과학자` — nhà khoa học dữ liệu.

## 3. data wrangling /ˈdeɪtə ˌræŋɡəlɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — quá trình thu thập, làm sạch, biến đổi và sắp xếp dữ liệu để phân tích.

**Core meaning — English:** The process of collecting, cleaning, transforming, and organizing data for analysis.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung biến nhiều bảng lộn xộn, tên cột khác nhau và giá trị thiếu thành một tập dữ liệu có cấu trúc.

**Grammar & collocations:** `data-wrangling step` — bước xử lý dữ liệu; `automate data wrangling` — tự động hóa xử lý dữ liệu; `data-wrangling pipeline` — quy trình xử lý dữ liệu.

**Register & nuance:** Data wrangling thường tốn nhiều thời gian hơn việc chạy mô hình; mọi biến đổi cần được ghi lại để có thể kiểm tra.

**Examples:** `Data wrangling exposed duplicate customer records.` → Xử lý dữ liệu phát hiện hồ sơ khách hàng trùng. `The team documented each data-wrangling step.` → Nhóm ghi lại từng bước xử lý dữ liệu.

**Liên kết tiếng Hàn:** `데이터 랭글링`, `데이터 정제` — xử lý và làm sạch dữ liệu.

## 4. feature engineering /ˈfiːtʃɚ ˌendʒəˈnɪrɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — quá trình tạo, chọn hoặc biến đổi biến đầu vào để mô hình học được tín hiệu hữu ích hơn.

**Core meaning — English:** The process of creating, selecting, or transforming input variables so a model can learn useful signals.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung biến dữ liệu thô như thời điểm và khoảng cách thành đặc trưng có ý nghĩa cho dự đoán.

**Grammar & collocations:** `feature-engineering pipeline` — quy trình tạo đặc trưng; `manual feature engineering` — tạo đặc trưng thủ công; `automate feature engineering` — tự động hóa tạo đặc trưng.

**Register & nuance:** Feature engineering có thể tăng hiệu quả nhưng cũng đưa thiên lệch hoặc rò rỉ thông tin nếu dùng dữ liệu tương lai.

**Examples:** `Feature engineering converted timestamps into seasonal indicators.` → Tạo đặc trưng chuyển dấu thời gian thành chỉ báo theo mùa. `Good feature engineering reduced the model's error.` → Tạo đặc trưng tốt làm giảm lỗi mô hình.

**Liên kết tiếng Hàn:** `특성 공학`, `피처 엔지니어링` — kỹ thuật đặc trưng.

## 5. training data /ˈtreɪnɪŋ ˌdeɪtə/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — dữ liệu được dùng để điều chỉnh tham số của mô hình trong quá trình học.

**Core meaning — English:** Data used to adjust a model's parameters during learning.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung bộ ví dụ mà mô hình dùng để tìm quy luật trước khi được kiểm tra trên dữ liệu mới.

**Grammar & collocations:** `labeled training data` — dữ liệu huấn luyện có nhãn; `training-data quality` — chất lượng dữ liệu huấn luyện; `augment training data` — tăng cường dữ liệu huấn luyện.

**Register & nuance:** Training data không phải bằng chứng độc lập để đánh giá mô hình; điểm cao trên chính tập này có thể chỉ là ghi nhớ.

**Examples:** `The model learned from millions of labeled training data points.` → Mô hình học từ hàng triệu điểm dữ liệu huấn luyện có nhãn. `Biased training data can reproduce unequal outcomes.` → Dữ liệu huấn luyện thiên lệch có thể tái tạo kết quả bất bình đẳng.

**Liên kết tiếng Hàn:** `훈련 데이터` — dữ liệu huấn luyện.

## 6. test set /ˈtest set/

**Loại từ & vị trí trong câu:** `countable noun phrase` — phần dữ liệu được giữ kín cho đến cuối để ước tính hiệu quả của mô hình trên dữ liệu chưa thấy.

**Core meaning — English:** A held-out portion of data used at the end to estimate performance on unseen examples.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung bài thi cuối kỳ mà mô hình không được nhìn trong lúc học hoặc chọn tham số.

**Grammar & collocations:** `held-out test set` — tập kiểm tra giữ lại; `evaluate on a test set` — đánh giá trên tập kiểm tra; `test-set performance` — hiệu quả trên tập kiểm tra.

**Register & nuance:** Test set chỉ nên được dùng hạn chế; nếu liên tục điều chỉnh dựa trên điểm test, nó không còn là đánh giá độc lập.

**Examples:** `The final model was evaluated on a test set from another hospital.` → Mô hình cuối được đánh giá trên tập kiểm tra từ bệnh viện khác. `The test set remained sealed until the analysis was complete.` → Tập kiểm tra được giữ kín đến khi phân tích hoàn tất.

**Liên kết tiếng Hàn:** `테스트 세트`, `검증용 데이터셋` — tập kiểm tra.

## 7. validation set /ˌvæləˈdeɪʃən set/

**Loại từ & vị trí trong câu:** `countable noun phrase` — phần dữ liệu dùng để chọn mô hình, điều chỉnh siêu tham số hoặc quyết định khi dừng huấn luyện.

**Core meaning — English:** A portion of data used to choose models, tune hyperparameters, or decide when to stop training.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một bài kiểm tra giữa kỳ giúp chọn cách học, khác với bài thi cuối kỳ để báo cáo kết quả.

**Grammar & collocations:** `validation-set error` — lỗi trên tập validation; `hold out a validation set` — giữ lại tập validation; `validation-set performance` — hiệu quả trên tập validation.

**Register & nuance:** Validation set phục vụ quyết định trong quy trình; nếu dùng quá nhiều lần, nó cũng có thể bị “học thuộc”.

**Examples:** `The team selected the threshold using a validation set.` → Nhóm chọn ngưỡng bằng tập validation. `Validation-set performance improved after regularization.` → Hiệu quả trên tập validation cải thiện sau khi điều chuẩn.

**Liên kết tiếng Hàn:** `검증 세트` — tập validation.

## 8. overfitting /ˌoʊvɚˈfɪtɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun` — hiện tượng mô hình học quá sát dữ liệu huấn luyện, bao gồm cả nhiễu, nên hoạt động kém trên dữ liệu mới.

**Core meaning — English:** The problem of fitting training data so closely, including its noise, that performance worsens on new data.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung học thuộc đáp án của lớp thay vì hiểu quy tắc có thể áp dụng cho bài khác.

**Grammar & collocations:** `prevent overfitting` — ngăn overfitting; `signs of overfitting` — dấu hiệu overfitting; `overfitting risk` — nguy cơ overfitting.

**Register & nuance:** Overfitting không chỉ do mô hình quá phức tạp; dữ liệu ít, nhiễu hoặc điều chỉnh quá nhiều cũng góp phần.

**Examples:** `The large network showed clear overfitting after ten epochs.` → Mạng lớn cho thấy overfitting rõ sau mười epoch. `Dropout reduced overfitting on the validation set.` → Dropout giảm overfitting trên tập validation.

**Liên kết tiếng Hàn:** `과적합` — quá khớp.

## 9. underfitting /ˌʌndɚˈfɪtɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun` — hiện tượng mô hình quá đơn giản hoặc chưa học đủ nên hoạt động kém ngay cả trên dữ liệu huấn luyện.

**Core meaning — English:** The problem of using a model that is too simple or insufficiently trained to capture useful patterns.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung dùng một đường thẳng để mô tả quan hệ cong phức tạp, nên cả bài tập lẫn bài mới đều sai.

**Grammar & collocations:** `avoid underfitting` — tránh underfitting; `underfitting model` — mô hình underfitting; `diagnose underfitting` — chẩn đoán underfitting.

**Register & nuance:** Underfitting đối lập với overfitting; tăng độ phức tạp chưa chắc giải quyết nếu đặc trưng hoặc dữ liệu không phù hợp.

**Examples:** `The linear model suffered from underfitting.` → Mô hình tuyến tính bị underfitting. `More informative features helped diagnose underfitting.` → Đặc trưng giàu thông tin hơn giúp chẩn đoán underfitting.

**Liên kết tiếng Hàn:** `과소적합` — thiếu khớp.

## 10. cross-validation /ˌkrɔs vələˈdeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun` — kỹ thuật chia dữ liệu thành nhiều phần để huấn luyện và đánh giá lặp lại, giúp ước tính ổn định hơn.

**Core meaning — English:** A method of repeatedly splitting data into training and evaluation parts to obtain a more stable performance estimate.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung xoay vai trò các phần dữ liệu để mỗi phần lần lượt làm bài kiểm tra.

**Grammar & collocations:** `k-fold cross-validation` — cross-validation k phần; `cross-validation score` — điểm cross-validation; `use cross-validation` — dùng cross-validation.

**Register & nuance:** Cross-validation hữu ích khi dữ liệu hạn chế, nhưng phải tránh để các bản ghi liên quan hoặc thông tin tương lai lọt sang phần đánh giá.

**Examples:** `Cross-validation gave a wider but more honest error estimate.` → Cross-validation cho ước tính lỗi rộng hơn nhưng trung thực hơn. `The team used five-fold cross-validation to tune the model.` → Nhóm dùng cross-validation năm phần để điều chỉnh mô hình.

**Liên kết tiếng Hàn:** `교차 검증` — kiểm định chéo.

## 11. classification /ˌklæsəfɪˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun` — nhiệm vụ dự đoán một nhãn hoặc nhóm rời rạc cho mỗi quan sát.

**Core meaning — English:** The task of predicting a discrete label or category for each observation.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung hệ thống quyết định email là spam hay không, hoặc ảnh thuộc loài nào.

**Grammar & collocations:** `binary classification` — phân loại nhị phân; `multiclass classification` — phân loại đa lớp; `classification model` — mô hình phân loại.

**Register & nuance:** Classification khác regression, vốn dự đoán giá trị liên tục; nhãn có thể chồng lấn hoặc không chắc chắn trong thực tế.

**Examples:** `The classifier performed well on binary classification.` → Bộ phân loại hoạt động tốt trong phân loại nhị phân. `Classification errors were higher for rare categories.` → Lỗi phân loại cao hơn ở các nhóm hiếm.

**Liên kết tiếng Hàn:** `분류` — phân loại.

## 12. clustering /ˈklʌstərɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun` — phương pháp nhóm các quan sát theo mức độ giống nhau mà không cần nhãn có sẵn.

**Core meaning — English:** A method of grouping observations by similarity without requiring pre-existing labels.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung rải các điểm trên mặt phẳng rồi gom những điểm gần nhau thành cụm.

**Grammar & collocations:** `hierarchical clustering` — phân cụm phân cấp; `clustering algorithm` — thuật toán phân cụm; `cluster analysis` — phân tích cụm.

**Register & nuance:** Clustering phát hiện cấu trúc theo tiêu chí khoảng cách đã chọn; cụm tìm được không tự động có ý nghĩa nguyên nhân.

**Examples:** `Clustering revealed three patterns of customer behavior.` → Phân cụm cho thấy ba kiểu hành vi khách hàng. `The analyst compared clustering methods before interpreting the groups.` → Nhà phân tích so sánh các phương pháp phân cụm trước khi diễn giải nhóm.

**Liên kết tiếng Hàn:** `군집화`, `클러스터링` — phân cụm.

## 13. dimensionality reduction /dɪˌmenʃəˈnæləti rɪˌdʌkʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — kỹ thuật giảm số biến đầu vào trong khi cố giữ lại thông tin hoặc cấu trúc quan trọng.

**Core meaning — English:** A technique for reducing the number of input variables while preserving important information or structure.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung nén một bảng có hàng trăm cột thành vài trục dễ quan sát nhưng vẫn giữ phần lớn tín hiệu.

**Grammar & collocations:** `dimensionality-reduction method` — phương pháp giảm chiều; `apply dimensionality reduction` — áp dụng giảm chiều; `dimensionality-reduction plot` — biểu đồ giảm chiều.

**Register & nuance:** Giảm chiều có thể giúp trực quan hóa và giảm nhiễu, nhưng các trục mới thường khó diễn giải trực tiếp.

**Examples:** `Dimensionality reduction made the clusters easier to visualize.` → Giảm chiều giúp các cụm dễ trực quan hóa hơn. `The pipeline applied dimensionality reduction after scaling.` → Quy trình áp dụng giảm chiều sau khi co giãn dữ liệu.

**Liên kết tiếng Hàn:** `차원 축소` — giảm chiều.

## 14. principal component analysis /ˌprɪnsəpəl kəmˈpoʊnənt əˈnæləsɪs/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — phương pháp biến đổi các biến tương quan thành những thành phần trực giao giải thích dần phương sai của dữ liệu.

**Core meaning — English:** A method that transforms correlated variables into orthogonal components explaining successive amounts of data variance.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung xoay hệ trục để tìm vài hướng nhìn tóm tắt nhiều biến thay đổi cùng nhau.

**Grammar & collocations:** `principal component analysis plot` — biểu đồ phân tích thành phần chính; `run principal component analysis` — chạy phân tích thành phần chính; `principal component score` — điểm thành phần chính.

**Register & nuance:** Principal component analysis tối ưu phương sai tuyến tính, không bảo đảm các thành phần có ý nghĩa nhân quả hoặc dễ diễn giải.

**Examples:** `Principal component analysis summarized the correlated measurements.` → Phân tích thành phần chính tóm tắt các phép đo tương quan. `The first two principal component scores separated the groups.` → Hai điểm thành phần chính đầu tách được các nhóm.

**Liên kết tiếng Hàn:** `주성분 분석` — phân tích thành phần chính.

## 15. random forest /ˈrændəm ˈfɔrəst/

**Loại từ & vị trí trong câu:** `countable noun phrase` — mô hình kết hợp nhiều cây quyết định được huấn luyện trên các mẫu và tập biến ngẫu nhiên khác nhau.

**Core meaning — English:** A model that combines many decision trees trained on varied samples and random subsets of features.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung hỏi ý kiến cả “khu rừng” gồm nhiều cây quyết định rồi gộp các dự đoán để giảm phụ thuộc vào một cây.

**Grammar & collocations:** `train a random forest` — huấn luyện random forest; `random-forest classifier` — bộ phân loại random forest; `random-forest feature importance` — độ quan trọng đặc trưng của random forest.

**Register & nuance:** Random forest thường mạnh trên dữ liệu dạng bảng và ít cần giả định tuyến tính, nhưng độ quan trọng đặc trưng không tự chứng minh quan hệ nhân quả.

**Examples:** `A random forest classified loan applications with useful accuracy.` → Random forest phân loại đơn vay với độ chính xác hữu ích. `The random-forest feature importance highlighted income and payment history.` → Độ quan trọng đặc trưng của random forest làm nổi bật thu nhập và lịch sử thanh toán.

**Liên kết tiếng Hàn:** `랜덤 포레스트` — random forest, rừng ngẫu nhiên.

## Review in context

A **data scientist** designed a **data science** project to predict equipment failure. After **data wrangling**, the team used **feature engineering** to turn maintenance logs into useful variables. They separated **training data**, a **validation set**, and a final **test set**. Early experiments showed **overfitting**, while a simpler model risked **underfitting**, so the team applied **cross-validation**. For one task, **classification** predicted failure categories; for another, **clustering** grouped machines by behavior. **Dimensionality reduction** and **principal component analysis** helped visualize the patterns, while a **random forest** provided a strong baseline.

Một **nhà khoa học dữ liệu** thiết kế dự án **khoa học dữ liệu** để dự đoán hỏng hóc thiết bị. Sau khi **xử lý dữ liệu**, nhóm dùng **tạo đặc trưng** để biến nhật ký bảo trì thành các biến hữu ích. Họ tách **dữ liệu huấn luyện**, một **tập validation** và **tập kiểm tra** cuối cùng. Thử nghiệm đầu cho thấy **overfitting**, còn mô hình đơn giản hơn có nguy cơ **underfitting**, nên nhóm áp dụng **cross-validation**. Trong một nhiệm vụ, **phân loại** dự đoán các nhóm hỏng hóc; trong nhiệm vụ khác, **phân cụm** nhóm máy theo hành vi. **Giảm chiều** và **phân tích thành phần chính** giúp trực quan hóa các mô hình, còn **random forest** cung cấp một đường cơ sở mạnh.
