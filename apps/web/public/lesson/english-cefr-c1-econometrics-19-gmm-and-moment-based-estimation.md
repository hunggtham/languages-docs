# C1 Vocabulary 19 — GMM and moment-based estimation

This lesson follows how generalized method-of-moments estimators turn theoretical restrictions into estimable criteria and robust inference.

Flow: **generalized method of moments → moment condition → sample moment → population moment → orthogonality condition → moment restriction → weighting matrix → optimal weighting matrix → one-step GMM → two-step GMM → continuously updated estimator → efficient GMM → GMM criterion → moment selection → empirical likelihood → minimum distance estimator → minimum chi-square → moment inequality → moment covariance matrix → moment-based inference**.

## 1. generalized method of moments /ˈdʒɛnərəlˌaɪzd ˈmɛθəd əv ˈmoʊmənts/
**Part of speech:** noun
**Core meaning (English):** an estimation framework that chooses parameters so that sample analogues of theoretical moment restrictions are as close to zero as possible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** framework chọn parameter để moment trong sample gần zero nhất theo restriction lý thuyết.
**Grammar & collocations:** `generalized-method-of-moments estimator` — estimator; `fit moment restrictions` — fit.
**Examples:** `Generalized method of moments estimated preferences from several orthogonality restrictions.` → GMM ước lượng preference từ nhiều restriction trực giao.
**Liên kết tiếng Hàn:** `일반화 적률법`.

## 2. moment condition /ˈmoʊmənt kənˈdɪʃən/
**Part of speech:** noun
**Core meaning (English):** an equation stating that the expected value of a specified function of data and parameters equals a known target, often zero.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương trình nói expected value của hàm data và parameter bằng target đã biết, thường là zero.
**Grammar & collocations:** `moment-condition specification` — specification; `set an expectation to zero` — đặt.
**Examples:** `The moment condition required the instrument to be uncorrelated with the structural error.` → Moment condition yêu cầu instrument không tương quan với structural error.
**Liên kết tiếng Hàn:** `적률 조건`.

## 3. sample moment /ˈsæmpəl ˈmoʊmənt/
**Part of speech:** noun
**Core meaning (English):** the empirical average that replaces a population expectation in a finite dataset.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** average thực nghiệm thay cho expectation của population trong dataset hữu hạn.
**Grammar & collocations:** `sample-moment vector` — vector; `compute an empirical average` — tính.
**Examples:** `The sample moment was close to zero after the parameter estimate was updated.` → Sample moment gần zero sau khi update parameter estimate.
**Liên kết tiếng Hàn:** `표본 적률`.

## 4. population moment /ˌpɑpjəˈleɪʃən ˈmoʊmənt/
**Part of speech:** noun
**Core meaning (English):** an expectation defined by the data-generating population that a correctly specified parameter should satisfy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** expectation của population mà parameter đúng phải thỏa.
**Grammar & collocations:** `population-moment restriction` — restriction; `derive a theoretical expectation` — suy ra.
**Examples:** `The population moment was zero under the proposed demand equation.` → Population moment bằng zero dưới phương trình cầu được đề xuất.
**Liên kết tiếng Hàn:** `모집단 적률`.

## 5. orthogonality condition /ˌɔrθəɡəˈnæləti kənˈdɪʃən/
**Part of speech:** noun
**Core meaning (English):** a restriction that an instrument, residual, or score has zero expected product with a specified variable or function.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** restriction yêu cầu tích kỳ vọng giữa instrument/residual/score và hàm chỉ định bằng zero.
**Grammar & collocations:** `orthogonality-condition test` — test; `impose zero covariance` — áp đặt.
**Examples:** `The orthogonality condition connected the policy instrument to the unexplained outcome residual.` → Điều kiện trực giao nối policy instrument với residual outcome chưa giải thích.
**Liên kết tiếng Hàn:** `직교 조건`.

## 6. moment restriction /ˈmoʊmənt rɪˈstrɪkʃən/
**Part of speech:** noun
**Core meaning (English):** a theoretical relationship among observable variables and unknown parameters expressed through an expected-value equation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ lý thuyết giữa observable và parameter chưa biết, viết dưới dạng phương trình expected value.
**Grammar & collocations:** `moment-restriction system` — system; `translate theory into equations` — chuyển.
**Examples:** `Each moment restriction contributed information about the elasticity parameter.` → Mỗi restriction đóng góp information về elasticity parameter.
**Liên kết tiếng Hàn:** `적률 제약`.

## 7. weighting matrix /ˈweɪtɪŋ ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a matrix that determines how heavily different sample moments contribute to the estimation criterion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận quyết định mỗi sample moment được tính nặng nhẹ thế nào trong criterion.
**Grammar & collocations:** `weighting-matrix update` — update; `weight correlated moments` — gán trọng số.
**Examples:** `The weighting matrix downweighted a noisy moment that was strongly correlated with another moment.` → Weighting matrix giảm trọng số moment nhiễu tương quan mạnh với moment khác.
**Liên kết tiếng Hàn:** `가중 행렬`.

## 8. optimal weighting matrix /ˈɑptəməl ˈweɪtɪŋ ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** the inverse of the moment covariance matrix that yields the most efficient GMM weighting under the model's assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** inverse của moment covariance matrix, cho weighting GMM hiệu quả nhất theo giả định model.
**Grammar & collocations:** `optimal-weighting-matrix estimate` — estimate; `minimize asymptotic variance` — tối thiểu hóa.
**Examples:** `The optimal weighting matrix gave more reliable moments greater influence in the second step.` → Ma trận tối ưu cho moment đáng tin ảnh hưởng lớn hơn ở bước hai.
**Liên kết tiếng Hàn:** `최적 가중 행렬`.

## 9. one-step GMM /wʌn steɪp dʒiː ɛm ɛm/
**Part of speech:** noun
**Core meaning (English):** a GMM estimator that uses an initial weighting matrix without a later update based on estimated moment variability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator GMM dùng weighting matrix ban đầu, không update sau theo variability moment ước lượng.
**Grammar & collocations:** `one-step-GMM estimate` — estimate; `start with an identity matrix` — bắt đầu.
**Examples:** `The one-step GMM was easy to compute but less efficient than the updated estimator.` → One-step GMM dễ tính nhưng kém efficient hơn estimator được update.
**Liên kết tiếng Hàn:** `1단계 GMM`.

## 10. two-step GMM /tu steɪp dʒiː ɛm ɛm/
**Part of speech:** noun
**Core meaning (English):** a GMM procedure that first estimates parameters with an initial matrix and then re-estimates them using a matrix based on the first-step residuals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** procedure GMM ước lượng lần đầu rồi dùng residual bước một để tạo matrix và ước lượng lại.
**Grammar & collocations:** `two-step-GMM covariance estimate` — estimate; `update the weighting matrix` — cập nhật.
**Examples:** `Two-step GMM updated the weighting matrix after checking the residual covariance.` → Two-step GMM update matrix sau khi kiểm tra covariance residual.
**Liên kết tiếng Hàn:** `2단계 GMM`.

## 11. continuously updated estimator /kənˈtɪnjuəsli ʌpˈdeɪtəd ˌɛstəˈmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator that updates the weighting matrix as the parameter search changes rather than separating estimation into two fixed stages.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator update matrix liên tục khi parameter search đổi, không tách hai stage cố định.
**Grammar & collocations:** `continuously-updated-estimator objective` — objective; `recalculate weights during optimization` — tính lại.
**Examples:** `The continuously updated estimator recalculated moment weights at every candidate parameter value.` → Estimator tính lại trọng số moment ở mỗi parameter candidate.
**Liên kết tiếng Hàn:** `연속 갱신 추정량`.

## 12. efficient GMM /ɪˈfɪʃənt dʒiː ɛm ɛm/
**Part of speech:** noun
**Core meaning (English):** GMM configured with an asymptotically optimal weighting matrix so that no other regular GMM estimator is more precise under the same restrictions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** GMM dùng matrix tối ưu tiệm cận, không estimator GMM regular nào chính xác hơn theo restriction đó.
**Grammar & collocations:** `efficient-GMM variance` — variance; `attain the efficiency bound` — đạt.
**Examples:** `Efficient GMM used the estimated covariance of moments to reduce asymptotic variance.` → Efficient GMM dùng covariance moment ước lượng để giảm variance tiệm cận.
**Liên kết tiếng Hàn:** `효율적 GMM`.

## 13. GMM criterion /dʒiː ɛm ɛm kraɪˈtɪriən/
**Part of speech:** noun
**Core meaning (English):** the weighted quadratic measure of sample moments that an estimator minimizes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thước đo quadratic có trọng số của sample moment mà estimator tối thiểu hóa.
**Grammar & collocations:** `GMM-criterion value` — value; `minimize the quadratic form` — tối thiểu hóa.
**Examples:** `The optimizer chose the coefficient vector with the smallest GMM criterion.` → Optimizer chọn vector coefficient có GMM criterion nhỏ nhất.
**Liên kết tiếng Hàn:** `GMM 기준 함수`.

## 14. moment selection /ˈmoʊmənt səˈlɛkʃən/
**Part of speech:** noun
**Core meaning (English):** the process of choosing which theoretical moment conditions to include when many candidate restrictions are available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quá trình chọn restriction moment nào đưa vào khi có nhiều candidate.
**Grammar & collocations:** `moment-selection rule` — rule; `drop a poorly behaved restriction` — loại.
**Examples:** `Moment selection removed conditions that were too sensitive to a small set of outliers.` → Moment selection loại condition quá nhạy với ít outlier.
**Liên kết tiếng Hàn:** `적률 선택`.

## 15. empirical likelihood /ɛmˈpɪrɪkəl ˈlaɪkliˌhʊd/
**Part of speech:** noun
**Core meaning (English):** a likelihood-like method that assigns probabilities to observations subject to sample moment restrictions without specifying a full parametric distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp giống likelihood, gán probability cho observation dưới restriction moment mà không cần distribution parameter đầy đủ.
**Grammar & collocations:** `empirical-likelihood ratio` — ratio; `assign observation probabilities` — gán.
**Examples:** `Empirical likelihood built a confidence region from the moment conditions without assuming normal errors.` → Empirical likelihood tạo confidence region từ moment condition mà không giả định error chuẩn.
**Liên kết tiếng Hàn:** `경험적 우도`.

## 16. minimum distance estimator /ˈmɪnəməm ˈdɪstəns ˌɛstəˈmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator that chooses parameters to minimize a distance between observed summaries and their model-implied counterparts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator chọn parameter để tối thiểu khoảng cách giữa summary quan sát và summary model suy ra.
**Grammar & collocations:** `minimum-distance objective` — objective; `match empirical and theoretical moments` — khớp.
**Examples:** `The minimum distance estimator matched regional means to the values predicted by the structural model.` → Estimator khớp regional mean với value model structural dự đoán.
**Liên kết tiếng Hàn:** `최소 거리 추정량`.

## 17. minimum chi-square /ˈmɪnəməm kaɪ skwɛr/
**Part of speech:** noun
**Core meaning (English):** an estimation method that minimizes a chi-square distance between observed and model-implied grouped frequencies or moments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp tối thiểu khoảng cách chi-square giữa frequency/moment quan sát và model.
**Grammar & collocations:** `minimum-chi-square fit` — fit; `compare grouped frequencies` — so sánh.
**Examples:** `Minimum chi-square fit the transition table while accounting for sampling uncertainty in each cell.` → Minimum chi-square fit bảng transition và tính uncertainty từng ô.
**Liên kết tiếng Hàn:** `최소 카이제곱`.

## 18. moment inequality /ˈmoʊmənt ˌɪnɪˈkwɑləti/
**Part of speech:** noun
**Core meaning (English):** a restriction requiring an expected moment to be nonnegative or nonpositive rather than exactly equal to a fixed value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** restriction yêu cầu expected moment không âm hoặc không dương, thay vì bằng chính xác một value.
**Grammar & collocations:** `moment-inequality model` — model; `bound a structural parameter` — tạo cận.
**Examples:** `The moment inequality implied that the feasible policy effect could not be below zero.` → Moment inequality ngụ ý policy effect khả thi không thể dưới zero.
**Liên kết tiếng Hàn:** `적률 부등식`.

## 19. moment covariance matrix /ˈmoʊmənt koʊˈvɛriəns ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** the covariance matrix of the moment functions that describes their sampling variability and cross-correlation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận covariance của moment function, mô tả variability mẫu và cross-correlation.
**Grammar & collocations:** `moment-covariance-matrix estimate` — estimate; `account for correlated restrictions` — tính đến.
**Examples:** `The moment covariance matrix was clustered by firm before the optimal weights were calculated.` → Matrix covariance moment được cluster theo firm trước khi tính trọng số tối ưu.
**Liên kết tiếng Hàn:** `적률 공분산 행렬`.

## 20. moment-based inference /ˈmoʊmənt beɪst ˈɪnfərəns/
**Part of speech:** noun
**Core meaning (English):** hypothesis testing and interval estimation that rely on moment restrictions and their estimated sampling behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** inference dựa trên restriction moment và sampling behavior ước lượng của chúng.
**Grammar & collocations:** `moment-based-inference procedure` — procedure; `construct a robust confidence interval` — xây dựng.
**Examples:** `Moment-based inference remained valid after the analyst used a cluster-robust covariance estimate.` → Inference dựa trên moment vẫn hợp lệ sau khi dùng covariance cluster-robust.
**Liên kết tiếng Hàn:** `적률 기반 추론`.

## Review in context

**Generalized method of moments** starts with a **moment condition**, replacing its **population moment** with a **sample moment**. An **orthogonality condition** is one kind of **moment restriction**. A **weighting matrix**, ideally an **optimal weighting matrix**, defines the criterion for **one-step GMM**, **two-step GMM**, or a **continuously updated estimator**; **efficient GMM** minimizes the asymptotic variance. Analysts inspect the **GMM criterion**, perform **moment selection**, and may use **empirical likelihood** or a **minimum distance estimator** such as **minimum chi-square**. A **moment inequality** creates bounds, while a **moment covariance matrix** supports robust **moment-based inference**.

**Bản dịch tiếng Việt:** **Generalized method of moments** bắt đầu bằng **moment condition**, thay **population moment** bằng **sample moment**. **Orthogonality condition** là một dạng **moment restriction**. **Weighting matrix**, lý tưởng là **optimal weighting matrix**, xác định criterion cho **one-step GMM**, **two-step GMM** hoặc **continuously updated estimator**; **efficient GMM** tối thiểu variance tiệm cận. Analyst xem **GMM criterion**, thực hiện **moment selection**, và có thể dùng **empirical likelihood** hoặc **minimum distance estimator** như **minimum chi-square**. **Moment inequality** tạo cận, còn **moment covariance matrix** hỗ trợ **moment-based inference** robust.
