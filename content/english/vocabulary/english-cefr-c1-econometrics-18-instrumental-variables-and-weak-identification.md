# C1 Vocabulary 18 — Instrumental variables and weak identification

This lesson follows how instrumental-variable estimators use external variation, and how analysts diagnose weak instruments and overidentifying restrictions.

Flow: **two-stage least squares → first-stage relevance → exclusion restriction → weak instrument → overidentification → Sargan test → Hansen J test → limited-information maximum likelihood → k-class estimator → control function → local average treatment effect → complier → treatment monotonicity → many instruments → instrument proliferation → weak identification → Anderson-Rubin test → Kleibergen-Paap statistic → Cragg-Donald statistic → instrument strength**.

## 1. two-stage least squares /tu steɪdʒ liːst skwɛrz/
**Part of speech:** noun
**Core meaning (English):** an instrumental-variable estimator that first predicts an endogenous regressor from instruments and exogenous controls, then uses that prediction in the outcome equation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator IV hai bước: dự đoán regressor endogenous bằng instrument/control ngoại sinh rồi đưa prediction vào phương trình outcome.
**Grammar & collocations:** `two-stage-least-squares estimate` — estimate; `fit the first stage` — fit.
**Examples:** `Two-stage least squares used distance to college to isolate exogenous variation in education.` → 2SLS dùng khoảng cách tới college để tách variation ngoại sinh trong education.
**Liên kết tiếng Hàn:** `2단계 최소제곱`.

## 2. first-stage relevance /fɝst steɪdʒ ˈrɛləvəns/
**Part of speech:** noun
**Core meaning (English):** the requirement that an instrument predict the endogenous variable with meaningful statistical strength.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** yêu cầu instrument dự đoán endogenous variable đủ mạnh về mặt thống kê.
**Grammar & collocations:** `first-stage-relevance condition` — condition; `explain endogenous variation` — giải thích.
**Examples:** `First-stage relevance was weak after the model added detailed regional fixed effects.` → Relevance bước một yếu sau khi model thêm fixed effect vùng chi tiết.
**Liên kết tiếng Hàn:** `1단계 관련성`.

## 3. exclusion restriction /ɪkˈskluːʒən rɪˈstrɪkʃən/
**Part of speech:** noun
**Core meaning (English):** the assumption that an instrument affects the outcome only through the endogenous variable it is meant to shift.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giả định instrument chỉ tác động outcome thông qua endogenous variable cần thay đổi.
**Grammar & collocations:** `exclusion-restriction argument` — argument; `rule out a direct channel` — loại trừ.
**Examples:** `The exclusion restriction would fail if the proposed instrument also changed access to healthcare directly.` → Restriction thất bại nếu instrument cũng trực tiếp đổi access healthcare.
**Liên kết tiếng Hàn:** `배제 제약`.

## 4. weak instrument /wiːk ˈɪnstrəmənt/
**Part of speech:** noun
**Core meaning (English):** an instrument that explains too little variation in the endogenous regressor for conventional instrumental-variable inference to be reliable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** instrument giải thích quá ít variation của regressor endogenous, làm inference IV thường không đáng tin.
**Grammar & collocations:** `weak-instrument bias` — bias; `diagnose first-stage weakness` — chẩn đoán.
**Examples:** `A weak instrument pulled the two-stage estimate toward the biased ordinary least-squares result.` → Instrument yếu kéo estimate hai bước về kết quả OLS bị bias.
**Liên kết tiếng Hàn:** `약한 도구변수`.

## 5. overidentification /ˌoʊvər aɪˌdɛntəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a situation in which the model has more excluded instruments than endogenous regressors, creating testable restrictions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model có nhiều excluded instrument hơn endogenous regressor, tạo restriction có thể kiểm tra.
**Grammar & collocations:** `overidentification restriction` — restriction; `test extra instruments jointly` — kiểm tra.
**Examples:** `Overidentification allowed the researchers to compare the implications of three instruments for one endogenous variable.` → Overidentification cho phép so sánh ba instrument cho một endogenous variable.
**Liên kết tiếng Hàn:** `과식별`.

## 6. Sargan test /ˈsɑrɡən tɛst/
**Part of speech:** noun
**Core meaning (English):** a homoskedasticity-based test of whether the extra instruments satisfy the model's orthogonality restrictions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test dựa trên homoskedasticity xem instrument dư có thỏa restriction trực giao không.
**Grammar & collocations:** `Sargan-test statistic` — statistic; `test overidentifying restrictions` — kiểm tra.
**Examples:** `The Sargan test did not reject the joint validity of the additional instruments.` → Sargan test không bác bỏ validity chung của instrument thêm.
**Liên kết tiếng Hàn:** `Sargan 검정`.

## 7. Hansen J test /ˈhænsən dʒeɪ tɛst/
**Part of speech:** noun
**Core meaning (English):** a heteroskedasticity-robust test of overidentifying restrictions in a generalized-method-of-moments or instrumental-variable model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test robust với heteroskedasticity cho restriction overidentification trong GMM/IV.
**Grammar & collocations:** `Hansen-J-test p-value` — p-value; `assess moment validity` — đánh giá.
**Examples:** `The Hansen J test remained stable when the covariance estimator was clustered by district.` → Hansen J test vẫn ổn định khi covariance estimator cluster theo district.
**Liên kết tiếng Hàn:** `Hansen J 검정`.

## 8. limited-information maximum likelihood /ˈlɪmətəd ˌɪnfərˈmeɪʃən ˈmæksəməm ˈlaɪkliˌhʊd/
**Part of speech:** noun
**Core meaning (English):** an instrumental-variable estimator that focuses on the structural equation and can reduce some finite-sample bias from weak instruments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator IV tập trung phương trình structural, có thể giảm một số bias mẫu hữu hạn do instrument yếu.
**Grammar & collocations:** `limited-information-maximum-likelihood estimator` — estimator; `compare finite-sample behavior` — so sánh.
**Examples:** `Limited-information maximum likelihood produced a more stable coefficient than two-stage least squares in the weak-first-stage simulation.` → LIML cho coefficient ổn định hơn 2SLS trong mô phỏng first-stage yếu.
**Liên kết tiếng Hàn:** `제한 정보 최대우도`.

## 9. k-class estimator /ˈkeɪ klæs ˌɛstəˈmeɪtər/
**Part of speech:** noun
**Core meaning (English):** a family of instrumental-variable estimators indexed by a tuning value that includes two-stage least squares and related procedures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** họ estimator IV được đánh chỉ số bởi tuning value, gồm 2SLS và procedure liên quan.
**Grammar & collocations:** `k-class-estimator family` — family; `choose a concentration parameter` — chọn.
**Examples:** `The k-class estimator traced how the coefficient changed as the tuning value moved away from two-stage least squares.` → K-class cho thấy coefficient đổi ra sao khi tuning value rời 2SLS.
**Liên kết tiếng Hàn:** `k-클래스 추정량`.

## 10. control function /kənˈtroʊl ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a constructed variable from a first-stage residual that is added to the outcome equation to account for endogeneity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến tạo từ residual bước một, thêm vào outcome equation để xử lý endogeneity.
**Grammar & collocations:** `control-function approach` — approach; `include a first-stage residual` — đưa vào.
**Examples:** `The control function captured the unobserved selection component in the wage equation.` → Control function nắm thành phần selection không quan sát trong phương trình wage.
**Liên kết tiếng Hàn:** `통제 함수`.

## 11. local average treatment effect /ˈloʊkəl ˈævərɪdʒ ˈtriːtmənt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the average causal effect for units whose treatment status responds to the instrument.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** causal effect trung bình cho những unit đổi treatment status khi instrument thay đổi.
**Grammar & collocations:** `local-average-treatment-effect interpretation` — interpretation; `identify effects for compliers` — nhận diện.
**Examples:** `The instrumental-variable estimate had a local average treatment effect interpretation for students who responded to the scholarship rule.` → Estimate IV có nghĩa LATE cho học sinh phản ứng với rule học bổng.
**Liên kết tiếng Hàn:** `국소 평균 처치 효과`.

## 12. complier /kəmˈplaɪər/
**Part of speech:** noun
**Core meaning (English):** a unit whose treatment status follows the assignment or encouragement conveyed by the instrument.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** unit thay đổi treatment status theo assignment/encouragement mà instrument truyền.
**Grammar & collocations:** `complier subgroup` — subgroup; `contrast compliers with always-takers` — đối chiếu.
**Examples:** `The estimate described the effect for compliers, not for patients who would choose treatment regardless of the instrument.` → Estimate mô tả effect cho complier, không phải bệnh nhân luôn chọn treatment.
**Liên kết tiếng Hàn:** `순응자`.

## 13. treatment monotonicity /ˈtriːtmənt ˌmɑnəˈtɑnəsəti/
**Part of speech:** noun
**Core meaning (English):** the assumption that the instrument moves treatment in one direction and creates no units who react in the opposite direction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giả định instrument đẩy treatment theo một hướng, không tạo unit phản ứng ngược.
**Grammar & collocations:** `treatment-monotonicity assumption` — assumption; `exclude defiers` — loại trừ.
**Examples:** `Treatment monotonicity was plausible because the subsidy encouraged enrollment but did not penalize anyone for enrolling.` → Monotonicity hợp lý vì subsidy khuyến khích enrollment nhưng không phạt ai ghi danh.
**Liên kết tiếng Hàn:** `처치 단조성`.

## 14. many instruments /ˈmɛni ˈɪnstrəmənts/
**Part of speech:** noun
**Core meaning (English):** a setting with a large number of instruments relative to the sample size or the number of endogenous regressors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tình huống có rất nhiều instrument so với cỡ mẫu hoặc số endogenous regressor.
**Grammar & collocations:** `many-instruments problem` — problem; `limit the instrument set` — giới hạn.
**Examples:** `Many instruments made the first stage look powerful while worsening finite-sample bias.` → Nhiều instrument làm first stage có vẻ mạnh nhưng tăng bias mẫu hữu hạn.
**Liên kết tiếng Hàn:** `다수 도구변수`.

## 15. instrument proliferation /ˈɪnstrəmənt prəˌlɪfəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** uncontrolled growth in the number of instruments, often causing weak specification tests and overfitting of endogenous variables.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số instrument tăng không kiểm soát, làm test yếu và overfit endogenous variable.
**Grammar & collocations:** `instrument-proliferation control` — control; `collapse redundant instruments` — gộp.
**Examples:** `Instrument proliferation pushed the Hansen J p-value toward one and obscured weak validity.` → Proliferation đẩy p-value Hansen J về một và che validity yếu.
**Liên kết tiếng Hàn:** `도구변수 증식`.

## 16. weak identification /wiːk aɪˌdɛntəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a condition in which the available variation does not pin down the structural parameter precisely enough for standard approximations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variation có sẵn không xác định parameter structural đủ chính xác để dùng xấp xỉ chuẩn.
**Grammar & collocations:** `weak-identification-robust inference` — inference; `report a wide confidence set` — báo cáo.
**Examples:** `Weak identification produced a confidence set much wider than the usual symmetric interval.` → Weak identification tạo confidence set rộng hơn nhiều interval đối xứng thường.
**Liên kết tiếng Hàn:** `약한 식별`.

## 17. Anderson-Rubin test /ˈændərs ˈruːbɪn tɛst/
**Part of speech:** noun
**Core meaning (English):** an instrumental-variable test whose validity does not rely on strong first-stage identification in the usual way.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test IV có validity không phụ thuộc first-stage mạnh theo cách thông thường.
**Grammar & collocations:** `Anderson-Rubin-test confidence set` — confidence set; `test a structural coefficient` — kiểm tra.
**Examples:** `The Anderson-Rubin test retained coverage even when the conventional first-stage statistic was small.` → Anderson-Rubin test vẫn giữ coverage khi first-stage statistic thường nhỏ.
**Liên kết tiếng Hàn:** `Anderson-Rubin 검정`.

## 18. Kleibergen-Paap statistic /ˈklaɪbɚɡən pɑp ˈstəˈtɪstɪk/
**Part of speech:** noun
**Core meaning (English):** a weak-identification diagnostic that remains useful when errors are heteroskedastic or clustered.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** diagnostic weak identification hữu ích cả khi error heteroskedastic hoặc clustered.
**Grammar & collocations:** `Kleibergen-Paap statistic` — statistic; `use a robust first-stage diagnostic` — dùng.
**Examples:** `The Kleibergen-Paap statistic fell after clustering by school was introduced.` → Statistic giảm sau khi cluster theo trường.
**Liên kết tiếng Hàn:** `Kleibergen-Paap 통계량`.

## 19. Cragg-Donald statistic /kræɡ ˈdɑnəld stəˈtɪstɪk/
**Part of speech:** noun
**Core meaning (English):** a first-stage diagnostic commonly used under homoskedastic errors to assess the strength of excluded instruments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** diagnostic bước một thường dùng với error homoskedastic để đánh giá instrument excluded mạnh đến đâu.
**Grammar & collocations:** `Cragg-Donald statistic` — statistic; `compare with critical values` — so sánh.
**Examples:** `The Cragg-Donald statistic exceeded the reference value in the homoskedastic specification.` → Statistic vượt reference value trong specification homoskedastic.
**Liên kết tiếng Hàn:** `Cragg-Donald 통계량`.

## 20. instrument strength /ˈɪnstrəmənt strɛŋθ/
**Part of speech:** noun
**Core meaning (English):** the degree to which excluded instruments explain the endogenous regressors in the first stage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức excluded instrument giải thích endogenous regressor ở first stage.
**Grammar & collocations:** `instrument-strength threshold` — threshold; `evaluate predictive power` — đánh giá.
**Examples:** `Instrument strength was reported alongside the structural estimate so readers could judge its reliability.` → Instrument strength được báo cùng structural estimate để người đọc đánh giá độ tin cậy.
**Liên kết tiếng Hàn:** `도구변수 강도`.

## Review in context

**Two-stage least squares** begins with **first-stage relevance** and relies on an **exclusion restriction**. A **weak instrument** can create **weak identification**, while **overidentification** permits a **Sargan test** or **Hansen J test**. Analysts may compare **limited-information maximum likelihood**, a **k-class estimator**, and a **control function**. The causal interpretation may be a **local average treatment effect** for a **complier** under **treatment monotonicity**. **Many instruments** can cause **instrument proliferation**, so researchers report **instrument strength** and robust diagnostics such as the **Anderson-Rubin test**, **Kleibergen-Paap statistic**, and **Cragg-Donald statistic**.

**Bản dịch tiếng Việt:** **Two-stage least squares** bắt đầu với **first-stage relevance** và dựa vào **exclusion restriction**. **Weak instrument** có thể tạo **weak identification**, còn **overidentification** cho phép dùng **Sargan test** hoặc **Hansen J test**. Analyst có thể so sánh **limited-information maximum likelihood**, **k-class estimator** và **control function**. Diễn giải causal có thể là **local average treatment effect** cho **complier** dưới giả định **treatment monotonicity**. **Many instruments** có thể gây **instrument proliferation**, nên researcher báo **instrument strength** và các diagnostic robust như **Anderson-Rubin test**, **Kleibergen-Paap statistic** và **Cragg-Donald statistic**.
