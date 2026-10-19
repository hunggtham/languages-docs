# C2+ Vocabulary 04 — Split conformal prediction, distribution-free coverage guarantees, and non-conformity scores

## 1. split conformal prediction
- /splɪt kənˈfɔːrməl prɪˈdɪkʃən/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object, or prepositional complement)
- Core meaning — English: A computationally efficient framework in statistical learning that splits data into training and calibration subsets to construct prediction sets with rigorous finite-sample coverage guarantees.
- Core meaning & mental image — Tiếng Việt: Khung tính toán hiệu quả trong học thống kê chia dữ liệu thành các tập huấn luyện và hiệu chuẩn để xây dựng các tập dự đoán với các đảm bảo bao phủ mẫu hữu hạn nghiêm ngặt. Hình ảnh bộ dữ liệu bị cắt đôi và phân tích.
- Grammar & collocations:
  - implement split conformal prediction (triển khai dự đoán đồng dạng chia tách)
  - split conformal prediction framework (khung dự đoán đồng dạng chia tách)
  - evaluate split conformal prediction (đánh giá dự đoán đồng dạng chia tách)
- Register & nuance: Advanced machine learning theory and rigorous statistical inference terminology.
- Examples:
  - Split conformal prediction provides valid prediction intervals for any black-box machine model without making strong distributional assumptions.
  - Dự đoán đồng dạng chia tách cung cấp các khoảng dự đoán hợp lệ cho bất kỳ mô hình máy học hộp đen nào mà không cần đưa ra các giả định phân phối mạnh.
- Liên kết tiếng Hàn: 분할 콩포멀 예측 (Bunhal Kongpomol Y 예측) — Dự đoán đồng dạng phân tách (Split Conformal Prediction).

## 2. distribution-free coverage guarantee
- /ˌdɪstrɪˈbjuːʃən-friː ˈkʌvərɪdʒ ˈɡærənti/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A mathematical guarantee that a prediction interval or set will contain the true label with a pre-specified probability, regardless of the underlying data distribution.
- Core meaning & mental image — Tiếng Việt: Một đảm bảo toán học rằng khoảng hoặc tập dự đoán sẽ chứa nhãn thực tế với một xác suất được chỉ định trước, bất kể phân phối dữ liệu cơ bản. Hình ảnh chiếc dù an toàn bảo vệ kết quả dưới mọi thời tiết.
- Grammar & collocations:
  - achieve a distribution-free coverage guarantee (đạt được đảm bảo bao phủ không phụ thuộc phân phối)
  - offer a distribution-free coverage guarantee (cung cấp đảm bảo bao phủ không phụ thuộc phân phối)
  - distribution-free coverage guarantee property (tính chất đảm bảo bao phủ không phụ thuộc phân phối)
- Register & nuance: Core theoretical concept in uncertainty quantification and conformal inference.
- Examples:
  - One of the greatest advantages of conformal methods is their ability to provide a strict distribution-free coverage guarantee in finite samples.
  - Một trong những ưu điểm lớn nhất của các phương pháp đồng dạng là khả năng cung cấp đảm bảo bao phủ không phụ thuộc phân phối nghiêm ngặt trong các mẫu hữu hạn.
- Liên kết tiếng Hàn: 무분포 커버리지 보장 (Mubunpo Keobeoriji Bojang) — Đảm bảo độ bao phủ phi phân phối.

## 3. non-conformity score function
- /nɒn-kənˈfɔːrmɪti skɔːr ˈfʌŋkʃən/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A statistical function that measures how unusual or atypical a given test data point is compared to points in a calibration dataset.
- Core meaning & mental image — Tiếng Việt: Một hàm thống kê đo lường mức độ bất thường hoặc không điển hình của một điểm dữ liệu kiểm tra so với các điểm trong tập hiệu chuẩn. Hình ảnh chiếc thước đo độ lệch biệt.
- Grammar & collocations:
  - define a non-conformity score function (định nghĩa hàm điểm không đồng dạng)
  - compute the non-conformity score function (tính toán hàm điểm không đồng dạng)
  - choose a non-conformity score function (chọn hàm điểm không đồng dạng)
- Register & nuance: Technical terminology fundamental to constructing conformal prediction sets.
- Examples:
  - The choice of the non-conformity score function directly influences the efficiency and width of the resulting prediction intervals.
  - Việc lựa chọn hàm điểm không đồng dạng ảnh hưởng trực tiếp đến hiệu quả và độ rộng của các khoảng dự đoán thu được.
- Liên kết tiếng Hàn: 비순응도 점수 함수 (Bisun-ungdo Jeomsu Hamsu) — Hàm điểm số không tuân thủ (non-conformity score).

## 4. prediction interval marginal coverage
- /prɪˈdɪkʃən ˈɪntərvəl ˈmɑːrdʒɪnəl ˈkʌvərɪdʒ/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The long-run average probability that the generated prediction interval correctly brackets the true unobserved target variable across independent draws.
- Core meaning & mental image — Tiếng Việt: Xác suất trung bình dài hạn mà khoảng dự đoán được tạo ra bao bọc chính xác biến mục tiêu ẩn thực tế qua các lần rút mẫu độc lập. Hình ảnh tần suất thành công lặp đi lặp lại qua nhiều thử nghiệm.
- Grammar & collocations:
  - satisfy prediction interval marginal coverage (thỏa mãn độ bao phủ biên khoảng dự đoán)
  - analyze prediction interval marginal coverage (phân tích độ bao phủ biên khoảng dự đoán)
  - nominal prediction interval marginal coverage (độ bao phủ biên định danh của khoảng dự đoán)
- Register & nuance: Statistical validation and uncertainty quantification terminology.
- Examples:
  - The empirical evaluation confirmed that the algorithm achieved the target 95% prediction interval marginal coverage on held-out test data.
  - Đánh giá thực nghiệm xác nhận rằng thuật toán đạt được độ bao phủ biên khoảng dự đoán mục tiêu 95% trên dữ liệu kiểm tra tách biệt.
- Liên kết tiếng Hàn: 예측 구간 주변 커버리지 (Yechuk Gugan Jubyeon Keobeoriji) — Độ bao phủ biên của khoảng dự đoán.

## 5. calibration dataset split validation
- /ˌkælɪˈbreɪʃən ˈdeɪtəˌsɛt splɪt ˌvælɪˈdeɪʃən/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The process of reserving a held-out portion of data exclusively to calibrate non-conformity thresholds without biasing the original training model.
- Core meaning & mental image — Tiếng Việt: Quá trình dành riêng một phần dữ liệu để hiệu chuẩn ngưỡng không đồng dạng mà không làm chệch mô hình huấn luyện ban đầu. Hình ảnh chiếc cân được chỉnh chuẩn bằng một khối lượng mẫu độc lập.
- Grammar & collocations:
  - perform calibration dataset split validation (thực hiện xác thực chia tách tập hiệu chuẩn)
  - size of the calibration dataset split validation (kích thước xác thực chia tách tập hiệu chuẩn)
  - calibration dataset split validation strategy (chiến lược xác thực chia tách tập hiệu chuẩn)
- Register & nuance: Machine learning methodology and data hygiene practice terminology.
- Examples:
  - Proper calibration dataset split validation prevents overfitting and ensures that the empirical coverage guarantees remain valid.
  - Xác thực chia tách tập hiệu chuẩn đúng cách ngăn chặn tình trạng quá khớp và đảm bảo các đảm bảo bao phủ thực nghiệm vẫn hợp lệ.
- Liên kết tiếng Hàn: 보정 데이터셋 분할 검증 (Bojeong Deiteoset Bunhal Geomjeung) — Kiểm chứng phân tách tập dữ liệu hiệu chuẩn.

## 6. exchangeability assumption requirement
- /ˌɛkstʃeɪndʒəˈbɪlɪti əˈsʌmpʃən rɪˈkwaɪərmənt/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The foundational statistical requirement that data points in both training and test sets are identically distributed and invariant under permutation.
- Core meaning & mental image — Tiếng Việt: Yêu cầu thống kê nền tảng rằng các điểm dữ liệu trong cả tập huấn luyện và kiểm tra đều được phân phối giống hệt nhau và không đổi dưới phép hoán vị. Hình ảnh các lá bài được xáo trộn mà xác suất xuất hiện các mặt không thay đổi.
- Grammar & collocations:
  - satisfy the exchangeability assumption requirement (thỏa mãn yêu cầu giả định tính hoán đổi)
  - violate the exchangeability assumption requirement (vi phạm yêu cầu giả định tính hoán đổi)
  - test the exchangeability assumption requirement (kiểm tra yêu cầu giả định tính hoán đổi)
- Register & nuance: Mathematical statistics and probability theory terminology.
- Examples:
  - Time-series forecasting often violates the exchangeability assumption requirement unless special transformations or block-conformal methods are applied.
  - Dự báo chuỗi thời gian thường vi phạm yêu cầu giả định tính hoán đổi trừ khi các phép biến đổi đặc biệt hoặc phương pháp đồng dạng khối được áp dụng.
- Liên kết tiếng Hàn: 교환 가능성 가정 조건 (Gyohwan Ganeungseong Gajung Jogeon) — Điều kiện giả định tính hoán đổi được (exchangeability).

## 7. conformal quantile regression
- /kənˈfɔːrməl ˈkwɒntaɪl rɪˈɡrɛʃən/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A machine learning technique that combines quantile regression models with conformal prediction to output flexible, heteroscedastic prediction intervals.
- Core meaning & mental image — Tiếng Việt: Kỹ thuật học máy kết hợp các mô hình hồi quy phân vị với dự đoán đồng dạng để tạo ra các khoảng dự đoán linh hoạt, có phương sai thay đổi. Hình ảnh các dải phân vị uốn lượn theo mật độ dữ liệu.
- Grammar & collocations:
  - apply conformal quantile regression (áp dụng hồi quy phân vị đồng dạng)
  - train a conformal quantile regression model (huấn luyện mô hình hồi quy phân vị đồng dạng)
  - conformal quantile regression performance (hiệu suất hồi quy phân vị đồng dạng)
- Register & nuance: Advanced predictive modeling and statistical learning terminology.
- Examples:
  - Conformal quantile regression adapts its interval width dynamically depending on the uncertainty level of each individual input feature vector.
  - Hồi quy phân vị đồng dạng điều chỉnh độ rộng khoảng của nó một cách động tùy thuộc vào mức độ không chắc chắn của từng véc-tơ đặc trưng đầu vào.
- Liên kết tiếng Hàn: 콩포멀 분위수 회귀 (Kongpomol Bunuisu Hoegwi) — Hồi quy phân vị đồng dạng (Conformal Quantile Regression).

## 8. adaptive prediction set size
- /əˈdæptɪv prɪˈdɪkʃən sɛt saɪz/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The property where the size of the output prediction set automatically expands when inputs are ambiguous and shrinks when predictions are highly confident.
- Core meaning & mental image — Tiếng Việt: Tính chất trong đó kích thước của tập dự đoán đầu ra tự động mở rộng khi đầu vào mơ hồ và thu nhỏ lại khi dự đoán rất tự tin. Hình ảnh chiếc vòng co giãn tùy theo kích thước đối tượng bên trong.
- Grammar & collocations:
  - achieve adaptive prediction set size (đạt được kích thước tập dự đoán thích ứng)
  - maintain adaptive prediction set size (Duy trì kích thước tập dự đoán thích ứng)
  - analyze adaptive prediction set size (phân tích kích thước tập dự đoán thích ứng)
- Register & nuance: Classification and uncertainty quantification performance terminology.
- Examples:
  - In image classification tasks, adaptive prediction set size ensures that ambiguous images return multiple plausible labels rather than a single wrong guess.
  - Trong các tác vụ phân loại hình ảnh, kích thước tập dự đoán thích ứng đảm bảo rằng các hình ảnh mơ hồ trả về nhiều nhãn hợp lý thay vì một phỏng đoán sai duy nhất.
- Liên kết tiếng Hàn: 적응형 예측 집합 크기 (Jeogeunghyeong Yechuk Jipsap Keugi) — Kích thước tập dự đoán thích ứng.

## 9. empirical quantile threshold ceiling
- /ɛmˈpɪrɪkl ˈkwɒntaɪl ˈθrɛʃhoʊld ˈsiːlɪŋ/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The calculated critical cutoff value derived from calibration non-conformity scores that guarantees the desired error rate bounded by finite-sample theory.
- Core meaning & mental image — Tiếng Việt: Giá trị cắt tới hạn được tính toán lấy từ điểm số không đồng dạng hiệu chuẩn đảm bảo tỷ lệ lỗi mong muốn bị giới hạn bởi lý thuyết mẫu hữu hạn. Hình ảnh vạch giới hạn trên biểu đồ phân phối thực nghiệm.
- Grammar & collocations:
  - compute the empirical quantile threshold ceiling (tính toán ngưỡng phân vị thực nghiệm)
  - adjust the empirical quantile threshold ceiling (điều chỉnh ngưỡng phân vị thực nghiệm)
  - empirical quantile threshold ceiling formula (công thức ngưỡng phân vị thực nghiệm)
- Register & nuance: Mathematical statistics and conformal prediction algorithm terminology.
- Examples:
  - The empirical quantile threshold ceiling is set at the $(1 - \alpha)$ level of sorted calibration non-conformity scores.
  - Ngưỡng phân vị thực nghiệm được đặt ở mức $(1 - \alpha)$ của các điểm số không đồng dạng hiệu chuẩn được sắp xếp.
- Liên kết tiếng Hàn: 경험적 분위수 임계값 상한 (Gyeongheomjeok Bunuisu Imgyegap Sanghan) — Giới hạn ngưỡng phân vị thực nghiệm.

## 10. miscoverage rate alpha error
- /mɪsˈkʌvərɪdʒ reɪt ˈælfə ˈɛrər/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The user-specified significance level $\alpha$ representing the theoretical upper bound on the probability that a prediction set fails to cover the true outcome.
- Core meaning & mental image — Tiếng Việt: Mức ý nghĩa $\alpha$ do người dùng chỉ định đại diện cho giới hạn trên lý thuyết về xác suất mà một tập dự đoán không bao phủ được kết quả thực tế. Hình ảnh tỷ lệ phần trăm sai sót cho phép.
- Grammar & collocations:
  - control the miscoverage rate alpha error (kiểm soát tỷ lệ lỗi bao phủ alpha)
  - set the miscoverage rate alpha error (đặt tỷ lệ lỗi bao phủ alpha)
  - target miscoverage rate alpha error (tỷ lệ lỗi bao phủ alpha mục tiêu)
- Register & nuance: Statistical hypothesis testing and uncertainty quantification standard terminology.
- Examples:
  - By setting the miscoverage rate alpha error to 0.05, practitioners guarantee valid coverage across at least 95% of future predictions.
  - Bằng cách đặt tỷ lệ lỗi bao phủ alpha thành 0.05, các nhà thực hành đảm bảo độ bao phủ hợp lệ trên ít nhất 95% các dự đoán trong tương lai.
- Liên kết tiếng Hàn: 오커버리지율 알파 오류 (O-keobeoriji-yul Alpa Oryu) — Lỗi tỷ lệ bỏ sót alpha.

## 11. conditional coverage approximation
- /kənˈdɪʃənəl ˈkʌvərɪdʒ əˌprɒksɪˈmeɪʃən/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: Methods designed to ensure that prediction guarantees hold locally for specific regions of the covariate space, rather than only marginally across the entire population.
- Core meaning & mental image — Tiếng Việt: Các phương pháp được thiết kế để đảm bảo rằng các đảm bảo dự đoán giữ nguyên cục bộ cho các vùng cụ thể của không gian hiệp biến, thay vì chỉ biên trên toàn bộ tổng thể. Hình ảnh kính lúp phóng to độ chính xác ở một góc cụ thể của biểu đồ.
- Grammar & collocations:
  - improve conditional coverage approximation (cải thiện xấp xỉ độ bao phủ có điều kiện)
  - study conditional coverage approximation (nghiên cứu xấp xỉ độ bao phủ có điều kiện)
  - challenges of conditional coverage approximation (thách thức của xấp xỉ độ bao phủ có điều kiện)
- Register & nuance: Advanced theoretical research topic in conformal prediction and robust ML.
- Examples:
  - Achieving exact finite-sample conditional coverage approximation is theoretically impossible under general distributions, driving ongoing research.
  - Việc đạt được xấp xỉ độ bao phủ có điều kiện mẫu hữu hạn chính xác là bất khả thi về mặt lý thuyết dưới các phân phối chung, thúc đẩy nghiên cứu đang diễn ra.
- Liên kết tiếng Hàn: 조건부 커버리지 근사 (Jogeonbu Keobeoriji Geunsa) — Xấp xỉ độ bao phủ có điều kiện.

## 12. full conformal computational complexity
- /fʊl kənˈfɔːrməl ˌkɒmpjuːˈtæʃənl kəmˈplɛsɪti/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The severe computational burden associated with refitting the underlying machine learning model for every single possible test label in standard transductive conformal prediction.
- Core meaning & mental image — Tiếng Việt: Gánh nặng tính toán nghiêm trọng liên quan đến việc lắp ráp lại mô hình học máy cơ bản cho mọi nhãn kiểm tra khả thi trong dự đoán đồng dạng chuyển nạp chuẩn. Hình ảnh máy tính quá tải khi phải chạy lại hàng triệu vòng lặp.
- Grammar & collocations:
  - reduce full conformal computational complexity (giảm độ phức tạp tính toán đồng dạng đầy đủ)
  - overcome full conformal computational complexity (vượt qua độ phức tạp tính toán đồng dạng đầy đủ)
  - full conformal computational complexity barrier (rào cản độ phức tạp tính toán đồng dạng đầy đủ)
- Register & nuance: Algorithmic efficiency and computational statistics terminology.
- Examples:
  - Because of its prohibitive full conformal computational complexity, split conformal prediction is almost universally preferred in large-scale deep learning applications.
  - Do độ phức tạp tính toán đồng dạng đầy đủ quá lớn, dự đoán đồng dạng chia tách được ưa chuộng gần như tuyệt đối trong các ứng dụng học sâu quy mô lớn.
- Liên kết tiếng Hàn: 완전 콩포멀 연산 복잡도 (Wanjeon Kongpomol Yeonsan Bokjapdo) — Độ phức tạp tính toán đồng dạng toàn phần.

## 13. cross-conformal prediction jackknife
- /krɔːs-kənˈfɔːrməl prɪˈdɪkʃən ˈdʒækˌnaɪf/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: An extension of jackknife resampling methods used in conformal prediction to achieve high data efficiency without the heavy computational cost of full conformal inference.
- Core meaning & mental image — Tiếng Việt: Phần mở rộng của các phương pháp tái lấy mẫu jackknife được sử dụng trong dự đoán đồng dạng để đạt được hiệu quả dữ liệu cao mà không tốn kém chi phí tính toán. Hình ảnh phương pháp cắt gọt từng phần dữ liệu để huấn luyện chéo.
- Grammar & collocations:
  - implement cross-conformal prediction jackknife (triển khai dự đoán đồng dạng chéo jackknife)
  - cross-conformal prediction jackknife variance (phương sai dự đoán đồng dạng chéo jackknife)
  - efficiency of cross-conformal prediction jackknife (hiệu quả của dự đoán đồng dạng chéo jackknife)
- Register & nuance: Advanced resampling and statistical learning methodology.
- Examples:
  - Cross-conformal prediction jackknife utilizes leave-one-out models to construct reliable prediction sets while using almost all available training data.
  - Dự đoán đồng dạng chéo jackknife sử dụng các mô hình bỏ một phần tử để xây dựng các tập dự đoán đáng tin cậy trong khi sử dụng gần như toàn bộ dữ liệu huấn luyện có sẵn.
- Liên kết tiếng Hàn: 크로스 콩포멀 예측 잭나이프 (Keuroseu Kongpomol Yechuk Jaeknaipeu) — Dự đoán đồng dạng chéo dạng jackknife.

## 14. class-conditional coverage balance
- /klɑːs-kənˈdɪʃənəl ˈkʌvərɪdʒ ˈbæləns/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The statistical property ensuring that prediction set error rates are balanced equally across distinct classes in multi-class classification problems.
- Core meaning & mental image — Tiếng Việt: Tính chất thống kê đảm bảo rằng tỷ lệ lỗi của tập dự đoán được cân bằng đều đặn giữa các lớp khác nhau trong các bài toán phân loại nhiều lớp. Hình ảnh chiếc cân đĩa giữ thăng bằng hoàn hảo giữa các nhóm khác nhau.
- Grammar & collocations:
  - enforce class-conditional coverage balance (thực thi cân bằng độ bao phủ có điều kiện theo lớp)
  - evaluate class-conditional coverage balance (đánh giá cân bằng độ bao phủ có điều kiện theo lớp)
  - achieve class-conditional coverage balance (đạt được cân bằng độ bao phủ có điều kiện theo lớp)
- Register & nuance: Fairness and multi-class classification reliability terminology.
- Examples:
  - Standard conformal prediction can sometimes under-cover rare classes unless special weighted adjustments are used to enforce class-conditional coverage balance.
  - Dự đoán đồng dạng chuẩn đôi khi có thể bỏ sót các lớp hiếm trừ khi các điều chỉnh trọng số đặc biệt được sử dụng để thực thi cân bằng độ bao phủ có điều kiện theo lớp.
- Liên kết tiếng Hàn: 클래스 조건부 커버리지 균형 (Keulaeseu Jogeonbu Keobeoriji Gyunhyeong) — Cân bằng độ bao phủ có điều kiện theo lớp.

## 15. label prediction set cardinality
- /ˈleɪbəl prɪˈdɪkʃən sɛt ˌkɑːrdɪˈnæləti/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The number of distinct labels contained within an output prediction set, serving as a direct measure of prediction uncertainty.
- Core meaning & mental image — Tiếng Việt: Số lượng các nhãn riêng biệt có trong một tập dự đoán đầu ra, đóng vai trò là thước đo trực tiếp mức độ không chắc chắn của dự đoán. Hình ảnh đếm số lượng các thẻ bài được chọn.
- Grammar & collocations:
  - measure label prediction set cardinality (đo lường lực lượng tập dự đoán nhãn)
  - minimize label prediction set cardinality (giảm thiểu lực lượng tập dự đoán nhãn)
  - average label prediction set cardinality (lực lượng tập dự đoán nhãn trung bình)
- Register & nuance: Quantitative evaluation metric in classification uncertainty quantification.
- Examples:
  - A smaller label prediction set cardinality indicates higher model confidence, whereas a larger set highlights ambiguity or high epistemic uncertainty.
  - Lực lượng tập dự đoán nhãn nhỏ hơn cho thấy độ tin cậy của mô hình cao hơn, trong khi tập lớn hơn làm nổi bật sự mơ hồ hoặc tính bấtuncertainty cao.
- Liên kết tiếng Hàn: 레이블 예측 집합 기수 (Reibeul Yechuk Jipsap Gisu) — Lực lượng (số phần tử) của tập dự đoán nhãn.

## 16. cumulative probability sorted non-conformity
- /ˈkjuːmjʊlətɪv ˌprɒbəˈbɪlɪti ˈsɔːrtɪd nɒn-kənˈfɔːrmɪti/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The ordered sequence of calibration non-conformity scores used to determine the exact empirical cutoff percentile.
- Core meaning & mental image — Tiếng Việt: Chuỗi điểm số không đồng dạng hiệu chuẩn được sắp xếp theo thứ tự dùng để xác định phân vị cắt thực nghiệm chính xác. Hình ảnh hàng dài các điểm số được xếp từ thấp đến cao.
- Grammar & collocations:
  - compute cumulative probability sorted non-conformity (tính toán điểm số không đồng dạng được sắp xếp xác suất tích lũy)
  - analyze cumulative probability sorted non-conformity (phân tích điểm số không đồng dạng được sắp xếp)
  - sort cumulative probability sorted non-conformity scores (sắp xếp điểm số không đồng dạng xác suất tích lũy)
- Register & nuance: Computational implementation details in conformal prediction algorithms.
- Examples:
  - The algorithm sorts the calibration non-conformity scores in ascending order to easily locate the required empirical quantile threshold.
  - Thuật toán sắp xếp các điểm số không đồng dạng hiệu chuẩn theo thứ tự tăng dần để dễ dàng định vị ngưỡng phân vị thực nghiệm cần thiết.
- Liên kết tiếng Hàn: 누적 확률 정렬 비순응도 (Nujuk Hwakryul Jeongryyeol Bisun-ungdo) — Điểm số không tuân thủ được sắp xếp theo xác suất tích lũy.

## 17. inductive conformal predictor efficiency
- /ɪnˈdʌktɪv kənˈfɔːrməl prɪˈdɪktər ɪˈfɪʃənsi/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The statistical power and informational sharpness of an inductive (split) conformal prediction set, characterized by smaller prediction intervals or tighter set sizes.
- Core meaning & mental image — Tiếng Việt: Sức mạnh thống kê và độ sắc nét thông tin của một tập dự đoán đồng dạng quy nạp (chia tách), được đặc trưng bởi các khoảng dự đoán nhỏ hơn hoặc kích thước tập chặt chẽ hơn. Hình ảnh chiếc vòng thu hẹp ôm sát vào mục tiêu mà không bị lỏng lẻo.
- Grammar & collocations:
  - maximize inductive conformal predictor efficiency (tối đa hóa hiệu quả của dự đoán viên đồng dạng quy nạp)
  - evaluate inductive conformal predictor efficiency (đánh giá hiệu quả của dự đoán viên đồng dạng quy nạp)
  - measure inductive conformal predictor efficiency (đo lường hiệu quả của dự đoán viên đồng dạng quy nạp)
- Register & nuance: Performance evaluation terminology in conformal inference.
- Examples:
  - Designing better non-conformity score functions is the primary mechanism to improve inductive conformal predictor efficiency.
  - Thiết kế các hàm điểm số không đồng dạng tốt hơn là cơ chế chính để cải thiện hiệu quả của dự đoán viên đồng dạng quy nạp.
- Liên kết tiếng Hàn: 귀납적 콩포멀 예측기 효율성 (Gu-nap-jeok Kongpomol Yechuk-gi Hyuyul-seong) — Hiệu suất của bộ dự đoán đồng dạng quy nạp.

## 18. out-of-distribution covariate shift violation
- /aʊt-əv-ˌdɪstrɪˈbjuːʃən ˈkoʊveərɪɪt ʃɪft ˌvaɪəˈleɪʃən/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The breach of the exchangeability assumption caused by test inputs differing distributionally from training data, which can compromise nominal coverage guarantees.
- Core meaning & mental image — Tiếng Việt: Sự vi phạm giả định tính hoán đổi do đầu vào kiểm tra có phân phối khác với dữ liệu huấn luyện, điều này có thể làm tổn hại đến các đảm bảo bao phủ định danh. Hình ảnh chiếc xe chạy sang làn đường khác không đúng quy định.
- Grammar & collocations:
  - handle out-of-distribution covariate shift violations (xử lý vi phạm dịch chuyển hiệp biến ngoài phân phối)
  - detect out-of-distribution covariate shift violations (phát hiện vi phạm dịch chuyển hiệp biến ngoài phân phối)
  - robust to out-of-distribution covariate shift violations (mạnh mẽ trước vi phạm dịch chuyển hiệp biến ngoài phân phối)
- Register & nuance: Robust machine learning and distribution shift research terminology.
- Examples:
  - Severe out-of-distribution covariate shift violations can lead to under-coverage, where empirical prediction sets fail to meet the target coverage level.
  - Các vi phạm dịch chuyển hiệp biến ngoài phân phối nghiêm trọng có thể dẫn đến việc bao phủ thiếu, nơi các tập dự đoán thực nghiệm không đạt được mức độ bao phủ mục tiêu.
- Liên kết tiếng Hàn: 분포 외 공변량 변화 위반 (Bunpo Oe Gongbyeonryang Byeonhwa Wiban) — Vi phạm dịch chuyển hiệp biến ngoài phân phối (OOD covariate shift).

## 19. guaranteed finite-sample coverage
- /ˈɡærəntid ˈfaɪnaɪt-sæmpəl ˈkʌvərɪdʒ/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A rigorous statistical property assuring that exact coverage probability bounds hold for any fixed, arbitrary sample size $n$, without relying on asymptotic approximations.
- Core meaning & mental image — Tiếng Việt: Một tính chất thống kê nghiêm ngặt đảm bảo rằng các giới hạn xác suất bao phủ chính xác đúng với bất kỳ kích thước mẫu $n$ cố định, tùy ý, mà không dựa trên xấp xỉ tiệm cận. Hình ảnh hợp đồng cam kết vững chắc dù quy mô nhỏ.
- Grammar & collocations:
  - provide guaranteed finite-sample coverage (cung cấp độ bao phủ mẫu hữu hạn được đảm bảo)
  - achieve guaranteed finite-sample coverage (đạt được độ bao phủ mẫu hữu hạn được đảm bảo)
  - mathematical proof of guaranteed finite-sample coverage (chứng minh toán học về độ bao phủ mẫu hữu hạn được đảm bảo)
- Register & nuance: Theoretical hallmark and primary selling point of conformal prediction methodologies.
- Examples:
  - Unlike asymptotic methods that require massive datasets, conformal prediction offers guaranteed finite-sample coverage even with small calibration sets.
  - Không giống như các phương pháp tiệm cận đòi hỏi tập dữ liệu khổng lồ, dự đoán đồng dạng cung cấp độ bao phủ mẫu hữu hạn được đảm bảo ngay cả với các tập hiệu chuẩn nhỏ.
- Liên kết tiếng Hàn: 유한 표본 커버리지 보장 (Yuhan Pyopon Keobeoriji Bojang) — Đảm bảo độ bao phủ mẫu hữu hạn.

## 20. sharp prediction band interval
- /ʃɑːrp prɪˈdɪkʃən bænd ˈɪntərvəl/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A narrow, highly informative prediction interval bounding regression outputs tightly around the true regression function while maintaining valid coverage.
- Core meaning & mental image — Tiếng Việt: Khoảng dự đoán hẹp, có thông tin cao, bao bọc chặt chẽ các đầu ra hồi quy xung quanh hàm hồi quy thực tế trong khi vẫn duy trì độ bao phủ hợp lệ. Hình ảnh dải băng kẹp chặt lấy đường cong trung tâm một cách sắc nét.
- Grammar & collocations:
  - construct a sharp prediction band interval (xây dựng khoảng dải dự đoán sắc nét)
  - evaluate the sharp prediction band interval (đánh giá khoảng dải dự đoán sắc nét)
  - achieve a sharp prediction band interval (đạt được khoảng dải dự đoán sắc nét)
- Register & nuance: Advanced regression analysis and uncertainty quantification terminology.
- Examples:
  - Machine learning researchers strive to construct a sharp prediction band interval that provides informative bounds without being excessively conservative.
  - Các nhà nghiên cứu học máy phấn đấu xây dựng khoảng dải dự đoán sắc nét cung cấp các giới hạn nhiều thông tin mà không quá bảo thủ.
- Liên kết tiếng Hàn: 샤프 예측 밴드 구간 (Sapeu Yechuk Baendeu Gugan) — Khoảng dải dự đoán sắc bén.

## 21. distribution-free uncertainty quantification
- /ˌdɪstrɪˈbjuːʃən-friː ʌnˌsɜːrtn-ti ˌkwɒntɪfɪˈkeɪʃən/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The comprehensive statistical field concerned with measuring and bounding prediction uncertainty without making restrictive assumptions about underlying data distributions.
- Core meaning & mental image — Tiếng Việt: Lĩnh vực thống kê toàn diện liên quan đến việc đo lường và giới hạn độ bất định dự đoán mà không đưa ra các giả định hạn chế về phân phối dữ liệu cơ bản. Hình ảnh chiếc la bàn định hướng chính xác trong vùng mù không rõ địa hình.
- Grammar & collocations:
  - advance distribution-free uncertainty quantification (tiến bộ trong định lượng độ bất định phi phân phối)
  - tools for distribution-free uncertainty quantification (công cụ định lượng độ bất định phi phân phối)
  - principles of distribution-free uncertainty quantification (nguyên tắc định lượng độ bất định phi phân phối)
- Register & nuance: Modern statistical learning and reliable artificial intelligence terminology.
- Examples:
  - Distribution-free uncertainty quantification has become a cornerstone of trustworthy machine learning in safety-critical domains.
  - Định lượng độ bất định phi phân phối đã trở thành nền tảng của học máy đáng tin cậy trong các lĩnh vực quan trọng về an toàn.
- Liên kết tiếng Hàn: 무분포 불확실성 정량화 (Mubunpo Bulhwaksil-seong Jeongnyang-hwa) — Định lượng độ bất định phi phân phối.

## 22. conformalized survival analysis
- /kɒnˈfɔːrmaɪzd səˈvaɪvəl əˈnæləsɪs/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The adaptation of conformal prediction techniques to time-to-event survival data, yielding valid prediction intervals for censored survival times.
- Core meaning & mental image — Tiếng Việt: Sự thích ứng của các kỹ thuật dự đoán đồng dạng đối với dữ liệu sinh tồn thời gian đến sự kiện, tạo ra các khoảng dự đoán hợp lệ cho thời gian sinh tồn bị kiểmθ. Hình ảnh biểu đồ thời gian sống sót kèm theo dải tin cậy.
- Grammar & collocations:
  - apply conformalized survival analysis (áp dụng phân tích sinh tồn đồng dạng hóa)
  - framework for conformalized survival analysis (khung phân tích sinh tồn đồng dạng hóa)
  - conformalized survival analysis performance (hiệu suất phân tích sinh tồn đồng dạng hóa)
- Register & nuance: Biostatistics, healthcare analytics, and specialized machine learning terminology.
- Examples:
  - Conformalized survival analysis allows clinicians to provide individualized, distribution-free prediction intervals for patient disease remission times.
  - Phân tích sinh tồn đồng dạng hóa cho phép các bác sĩ lâm sàng cung cấp các khoảng dự đoán cá nhân hóa, phi phân phối cho thời gian thuyên giảm bệnh của bệnh nhân.
- Liên kết tiếng Hàn: 콩포멀화된 생존 분석 (Kongpomolhwadoen Saengjon Bunseok) — Phân tích sinh tồn được đồng dạng hóa.

## 23. normalized non-conformity score
- /ˈnɔːrməlaɪzd nɒn-kənˈfɔːrmɪti skɔːr/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: A scaled non-conformity score divided by an estimate of local difficulty or uncertainty, allowing prediction intervals to adapt to heteroscedastic noise.
- Core meaning & mental image — Tiếng Việt: Điểm số không đồng dạng được chia tỷ lệ cho một ước tính về độ khó hoặc độ bất định cục bộ, cho phép các khoảng dự đoán thích ứng với nhiễu thay đổi phương sai. Hình ảnh chiếc thước được điều chỉnh theo độ co giãn của vật liệu.
- Grammar & collocations:
  - compute a normalized non-conformity score (tính toán điểm số không đồng dạng đã chuẩn hóa)
  - design a normalized non-conformity score (thiết kế điểm số không đồng dạng đã chuẩn hóa)
  - effectiveness of normalized non-conformity scores (hiệu quả của điểm số không đồng dạng đã chuẩn hóa)
- Register & nuance: Advanced predictive efficiency optimization in conformal regression.
- Examples:
  - Using a normalized non-conformity score ensures that easy test instances get tight prediction intervals while difficult ones receive appropriately wider intervals.
  - Sử dụng điểm số không đồng dạng đã chuẩn hóa đảm bảo rằng các trường hợp kiểm tra dễ nhận được khoảng dự đoán hẹp trong khi các trường hợp khó nhận được khoảng rộng hơn một cách thích hợp.
- Liên kết tiếng Hàn: 정규화된 비순응도 점수 (Jeonggyunhwadoen Bisun-ungdo Jeomsu) — Điểm số không tuân thủ được chuẩn hóa.

## 24. robust machine learning safety
- /roʊˈbʌst məˈʃiːn ˈlɜːrnɪŋ ˈseɪfti/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The overarching engineering and scientific discipline focused on ensuring machine learning models operate safely, reliably, and predictably under adversarial or shifting conditions.
- Core meaning & নিরাপদ ngành) Kỹ thuật tổng thể và ngành khoa học tập trung đảm bảo các mô hình học máy hoạt động an toàn, đáng tin cậy trong điều kiện thay đổi.
- Core meaning & mental image — Tiếng Việt: Ngành khoa học và kỹ thuật tổng thể tập trung đảm bảo các mô hình học máy hoạt động an toàn, đáng tin cậy và có thể dự đoán được dưới các điều kiện đối kháng hoặc thay đổi. Hình ảnh hệ thống phòng thủ vững chắc bảo vệ trí tuệ nhân tạo.
- Grammar & collocations:
  - advance robust machine learning safety (thúc đẩy an toàn học máy mạnh mẽ)
  - principles of robust machine learning safety (nguyên tắc an toàn học máy mạnh mẽ)
  - framework for robust machine learning safety (khung an toàn học máy mạnh mẽ)
- Register & nuance: Artificial intelligence safety, ethics, and deployment governance terminology.
- Examples:
  - Integrating conformal prediction into autonomous driving perception systems is a major breakthrough for robust machine learning safety.
  - Tích hợp dự đoán đồng dạng vào các hệ thống nhận thức lái xe tự động là một bước đột phá lớn cho sự an toàn học máy mạnh mẽ.
- Liên kết tiếng Hàn: 강건한 머신러닝 안전성 (Ganggeonhan Meosinreoning Anjeon-seong) — An toàn học máy mạnh mẽ (robust ML safety).

## 25. rigorous statistical learning theory
- /ˈrɪɡərəs stəˈtɪstɪkl ˈlɜːrnɪŋ ˈθɪəri/
- Loại từ & vị trí trong câu: Noun phrase (Subject, object)
- Core meaning — English: The mathematical foundation of machine learning that provides formal bounds on generalization, sample complexity, and convergence rates.
- Core meaning & mental image — Tiếng Việt: Nền tảng toán học của học máy cung cấp các giới hạn hình thức về khả năng tổng quát hóa, độ phức tạp mẫu và tốc độ hội tụ. Hình ảnh những phương trình toán học khắc khổ xây dựng nền móng vững chắc.
- Grammar & collocations:
  - grounded in rigorous statistical learning theory (có cơ sở từ lý thuyết học thống kê nghiêm ngặt)
  - develop rigorous statistical learning theory (phát triển lý thuyết học thống kê nghiêm ngặt)
  - principles of rigorous statistical learning theory (nguyên tắc lý thuyết học thống kê nghiêm ngặt)
- Register & nuance: Academic and theoretical machine learning terminology.
- Examples:
  - Conformal prediction bridges empirical heuristic models with rigorous statistical learning theory by offering provable finite-sample guarantees.
  - Dự đoán đồng dạng thu hẹp khoảng cách giữa các mô hình heuristic thực nghiệm và lý thuyết học thống kê nghiêm ngặt bằng cách cung cấp các đảm bảo mẫu hữu hạn có thể chứng minh được.
- Liên kết tiếng Hàn: 엄격한 통계적 학습 이론 (Eomgyeokhan Tonggyeseok Hakseup Iron) — Lý thuyết học tập thống kê nghiêm ngặt.

## Review in context: Part 1 (items 1–12)

Modern uncertainty quantification heavily relies on **split conformal prediction** to deliver a strict **distribution-free coverage guarantee** for black-box machine learning models. By defining an appropriate **non-conformity score function** and executing a **calibration dataset split validation**, practitioners ensure their models satisfy valid **prediction interval marginal coverage**. Under the fundamental **exchangeability assumption requirement**, methods like **conformal quantile regression** generate an **adaptive prediction set size** tailored to each input. The critical cutoff is determined by the **empirical quantile threshold ceiling**, bounded by the user-specified **miscoverage rate alpha error**. While exact **conditional coverage approximation** remains theoretically challenging and **full conformal computational complexity** can be prohibitive, split conformal methods bypass these hurdles efficiently.

### Vietnamese Translation — Part 1:
Định lượng độ bất định hiện đại phụ thuộc nhiều vào dự đoán đồng dạng chia tách để cung cấp đảm bảo bao phủ không phụ thuộc phân phối nghiêm ngặt cho các mô hình học máy hộp đen. Bằng cách định nghĩa hàm điểm số không đồng dạng phù hợp và thực hiện xác thực chia tách tập hiệu chuẩn, các nhà thực hành đảm bảo các mô hình của họ thỏa mãn độ bao phủ biên khoảng dự đoán hợp lệ. Dưới yêu cầu giả định tính hoán đổi cơ bản, các phương pháp như hồi quy phân vị đồng dạng tạo ra kích thước tập dự đoán thích ứng phù hợp với từng đầu vào. Ngưỡng cắt quan trọng được xác định bởi ngưỡng phân vị thực nghiệm, bị giới hạn bởi lỗi tỷ lệ bỏ sót alpha do người dùng chỉ định. Mặc dù xấp xỉ độ bao phủ có điều kiện chính xác vẫn là một thách thức lý thuyết và độ phức tạp tính toán đồng dạng toàn phần có thể rất cao, các phương pháp đồng dạng chia tách vượt qua các rào cản này một cách hiệu quả.

## Review in context: Part 2 (items 13–25)

To enhance computational scaling without sacrificing rigor, practitioners utilize alternatives such as the **cross-conformal prediction jackknife**. In classification tasks, achieving **class-conditional coverage balance** helps prevent under-coverage for rare groups, while monitoring **label prediction set cardinality** offers instant feedback on uncertainty. Algorithms rely on **cumulative probability sorted non-conformity** values to optimize **inductive conformal predictor efficiency**. However, practitioners must remain vigilant against **out-of-distribution covariate shift violation**, which can compromise **guaranteed finite-sample coverage**. By combining a **sharp prediction band interval** with a **normalized non-conformity score**, modern **distribution-free uncertainty quantification**—including specialized approaches like **conformalized survival analysis**—advances the state of the art in **robust machine learning safety**, firmly rooted in **rigorous statistical learning theory**.

### Vietnamese Translation — Part 2:
Để nâng cao khả năng mở rộng tính toán mà không làm giảm tính nghiêm ngặt, các nhà thực hành sử dụng các lựa chọn thay thế như dự đoán đồng dạng chéo jackknife. Trong các tác vụ phân loại, việc đạt được cân bằng độ bao phủ có điều kiện theo lớp giúp ngăn chặn tình trạng bao phủ thiếu đối với các nhóm hiếm, trong khi theo dõi lực lượng tập dự đoán nhãn cung cấp phản hồi tức thì về mức độ bất định. Các thuật toán dựa vào các giá trị điểm số không đồng dạng được sắp xếp theo xác suất tích lũy để tối ưu hóa hiệu quả của dự đoán viên đồng dạng quy nạp. Tuy nhiên, các nhà thực hành phải luôn cảnh giác trước vi phạm dịch chuyển hiệp biến ngoài phân phối, điều này có thể làm tổn hại đến độ bao phủ mẫu hữu hạn được đảm bảo. Bằng cách kết hợp khoảng dải dự đoán sắc nét với điểm số không đồng dạng được chuẩn hóa, định lượng độ bất định phi phân phối hiện đại—bao gồm các phương pháp chuyên biệt như phân tích sinh tồn đồng dạng hóa—thúc đẩy tiến bộ trong an toàn học máy mạnh mẽ, bám rễ vững chắc vào lý thuyết học tập thống kê nghiêm ngặt.
