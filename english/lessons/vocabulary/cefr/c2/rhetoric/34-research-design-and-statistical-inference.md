# C2 Vocabulary 34 — Research design and statistical inference

This lesson names advanced concepts used to diagnose models, identify causal claims, and judge whether measurements support generalization. The terms are useful when evidence depends on assumptions that are not visible in a headline result.

Flow: **heteroscedasticity → homoscedasticity → endogeneity → exogeneity → multicollinearity → collider → causal estimand → instrumental variable → propensity score → Bayesian prior → posterior predictive → likelihood → identifiability → operationalization → construct validity → ecological validity → external validity → measurement invariance → robustness check → selection bias**.

## 1. heteroscedasticity /ˌhɛtəroʊskəˈdæstɪsəti/
**Part of speech:** noun
**Core meaning (English):** a condition in which the spread of errors or variance changes across levels of a predictor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương sai thay đổi; hình ảnh các điểm dữ liệu xòe rộng dần như cái phễu khi biến giải thích tăng.
**Grammar & collocations:** `detect heteroscedasticity` — phát hiện phương sai thay đổi; `heteroscedasticity-robust standard errors` — sai số chuẩn bền vững với phương sai thay đổi.
**Examples:** `The analyst used robust standard errors after finding heteroscedasticity in the residuals.` → Nhà phân tích dùng sai số chuẩn bền vững sau khi phát hiện phương sai thay đổi trong phần dư.
**Liên kết tiếng Hàn:** `이분산성` (ibunsanseong) — tính phương sai thay đổi.

## 2. homoscedasticity /ˌhoʊmoʊskəˈdæstɪsəti/
**Part of speech:** noun
**Core meaning (English):** a condition in which the variance of errors remains approximately constant across observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương sai đồng nhất; hình ảnh các điểm dữ liệu giữ độ rộng tương tự quanh đường hồi quy.
**Grammar & collocations:** `assume homoscedasticity` — giả định phương sai đồng nhất; `test for homoscedasticity` — kiểm tra phương sai đồng nhất.
**Examples:** `The simple regression behaved well because its residuals were close to homoscedasticity.` → Hồi quy đơn hoạt động tốt vì phần dư gần với phương sai đồng nhất.
**Liên kết tiếng Hàn:** `등분산성` (deungsanseong) — tính phương sai đồng nhất.

## 3. endogeneity /ˌɛndoʊdʒəˈniəti/
**Part of speech:** noun
**Core meaning (English):** a condition in which a predictor is correlated with unobserved factors in the error term, making causal estimates unreliable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính nội sinh; hình ảnh biến giải thích kéo theo sợi dây ẩn nối với phần sai số.
**Grammar & collocations:** `address endogeneity` — xử lý nội sinh; `endogeneity problem` — vấn đề nội sinh.
**Examples:** `The study used a natural experiment to reduce endogeneity in the estimate of training effects.` → Nghiên cứu dùng thí nghiệm tự nhiên để giảm nội sinh trong ước lượng tác động đào tạo.
**Liên kết tiếng Hàn:** `내생성` (naesaengseong) — tính nội sinh.

## 4. exogeneity /ˌɛksoʊdʒəˈniəti/
**Part of speech:** noun
**Core meaning (English):** a condition in which a predictor is not systematically related to the model's unobserved error term.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính ngoại sinh; hình ảnh biến giải thích đứng ngoài dòng nhiễu không quan sát được.
**Grammar & collocations:** `assume exogeneity` — giả định ngoại sinh; `strict exogeneity` — ngoại sinh nghiêm ngặt.
**Examples:** `The causal interpretation requires exogeneity that the observational design cannot guarantee.` → Diễn giải nhân quả cần tính ngoại sinh mà thiết kế quan sát không thể bảo đảm.
**Liên kết tiếng Hàn:** `외생성` (oesaengseong) — tính ngoại sinh.

## 5. multicollinearity /ˌmʌltiˌkɑləniˈærəti/
**Part of speech:** noun
**Core meaning (English):** a condition in which predictors are so strongly related that their separate effects are difficult to estimate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đa cộng tuyến; hình ảnh nhiều biến giải thích chồng lên nhau khiến mô hình khó tách vai trò từng biến.
**Grammar & collocations:** `severe multicollinearity` — đa cộng tuyến nghiêm trọng; `diagnose multicollinearity` — chẩn đoán đa cộng tuyến.
**Examples:** `Multicollinearity inflated the coefficients' uncertainty even though the model predicted well.` → Đa cộng tuyến làm tăng độ bất định của các hệ số dù mô hình dự đoán tốt.
**Liên kết tiếng Hàn:** `다중공선성` (dajung-gongseonseong) — đa cộng tuyến.

## 6. collider /kəˈlaɪdər/
**Part of speech:** noun
**Core meaning (English):** a variable influenced by two other variables, conditioning on which can create a misleading association between them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến va chạm; hình ảnh hai dòng nguyên nhân đập vào cùng một điểm rồi tạo tương quan giả khi ta lọc tại điểm đó.
**Grammar & collocations:** `condition on a collider` — điều kiện hóa theo biến va chạm; `collider bias` — thiên lệch do biến va chạm.
**Examples:** `Restricting the sample to hospital patients may condition on a collider and distort the association.` → Giới hạn mẫu ở bệnh nhân bệnh viện có thể điều kiện hóa theo biến va chạm và làm méo mối liên hệ.
**Liên kết tiếng Hàn:** `충돌 변수` (chungdol byeonsu) — biến va chạm.

## 7. causal estimand /ˈkɔzəl ˈɛstəmænd/
**Part of speech:** noun phrase
**Core meaning (English):** the precisely defined causal quantity a study aims to estimate, such as an average treatment effect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đại lượng nhân quả cần ước lượng; hình ảnh nghiên cứu đặt đúng “mục tiêu trên bia” trước khi tính toán.
**Grammar & collocations:** `define a causal estimand` — định nghĩa đại lượng nhân quả; `target estimand` — đại lượng mục tiêu.
**Examples:** `The protocol states the causal estimand before the analysts inspect the outcome data.` → Đề cương nêu đại lượng nhân quả trước khi nhà phân tích xem dữ liệu kết quả.
**Liên kết tiếng Hàn:** `인과 추정량` (inga chujeongnyang) — đại lượng ước lượng nhân quả.

## 8. instrumental variable /ˌɪnstrəˈmɛntəl ˈvɛriəbəl/
**Part of speech:** noun phrase
**Core meaning (English):** a variable used to estimate a causal effect when the treatment is confounded, provided it affects the outcome only through that treatment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến công cụ; hình ảnh một đòn bẩy bên ngoài tác động vào can thiệp mà không chạm trực tiếp kết quả.
**Grammar & collocations:** `use an instrumental variable` — dùng biến công cụ; `valid instrument` — công cụ hợp lệ.
**Examples:** `Distance to a training center served as an instrumental variable for participation.` → Khoảng cách đến trung tâm đào tạo đóng vai trò biến công cụ cho việc tham gia.
**Liên kết tiếng Hàn:** `도구 변수` (dogu byeonsu) — biến công cụ.

## 9. propensity score /prəˈpɛnsəti skɔr/
**Part of speech:** noun phrase
**Core meaning (English):** the estimated probability that a unit receives a treatment given its observed characteristics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm xu hướng; hình ảnh mỗi người có một xác suất dự kiến bước vào nhóm can thiệp dựa trên đặc điểm đã biết.
**Grammar & collocations:** `match on propensity score` — ghép theo điểm xu hướng; `propensity-score weighting` — gia quyền theo điểm xu hướng.
**Examples:** `The researchers used propensity scores to balance observed differences between the two groups.` → Các nhà nghiên cứu dùng điểm xu hướng để cân bằng khác biệt quan sát được giữa hai nhóm.
**Liên kết tiếng Hàn:** `성향 점수` (seonghyang jeomsu) — điểm xu hướng.

## 10. Bayesian prior /ˈbeɪziən ˈpraɪər/
**Part of speech:** noun phrase
**Core meaning (English):** a probability distribution expressing what is believed about a parameter before new data are incorporated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân phối tiên nghiệm Bayes; hình ảnh kiến thức ban đầu được đặt lên bàn trước khi dữ liệu mới cập nhật niềm tin.
**Grammar & collocations:** `informative Bayesian prior` — tiên nghiệm Bayes có thông tin; `specify a prior` — chỉ định tiên nghiệm.
**Examples:** `A weakly informative Bayesian prior stabilized the estimate without forcing a narrow conclusion.` → Tiên nghiệm Bayes yếu có thông tin ổn định ước lượng mà không ép kết luận quá hẹp.
**Liên kết tiếng Hàn:** `베이지안 사전분포` (beijian sajeonbunpo) — phân phối tiên nghiệm Bayes.

## 11. posterior predictive /pɑːˈstɪriər prɪˈdɪktɪv/
**Part of speech:** adjective
**Core meaning (English):** describing predictions generated from a model after its parameters have been updated with observed data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dự đoán hậu nghiệm; hình ảnh mô hình học từ dữ liệu rồi tạo ra các kết quả có thể xảy ra tiếp theo.
**Grammar & collocations:** `posterior predictive check` — kiểm tra dự đoán hậu nghiệm; `posterior predictive distribution` — phân phối dự đoán hậu nghiệm.
**Examples:** `Posterior predictive checks showed that the model failed to reproduce the extreme observations.` → Kiểm tra dự đoán hậu nghiệm cho thấy mô hình không tái tạo được các quan sát cực đoan.
**Liên kết tiếng Hàn:** `사후 예측` (sahu yecheuk) — dự đoán hậu nghiệm.

## 12. likelihood /ˈlaɪklihʊd/
**Part of speech:** noun
**Core meaning (English):** a function measuring how compatible observed data are with particular parameter values in a model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm khả dĩ; hình ảnh mỗi bộ tham số được chấm điểm theo mức phù hợp với dữ liệu đã thấy.
**Grammar & collocations:** `maximize the likelihood` — cực đại hóa hàm khả dĩ; `likelihood function` — hàm khả dĩ.
**Examples:** `The estimator chooses parameters that maximize the likelihood of the observed sample.` → Bộ ước lượng chọn các tham số cực đại hóa khả dĩ của mẫu quan sát.
**Liên kết tiếng Hàn:** `우도` (udo) — khả dĩ, hàm khả dĩ.

## 13. identifiability /aɪˌdɛntəfaɪəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the quality of a model that allows its parameters or causal quantities to be uniquely determined from available data and assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính nhận dạng được; hình ảnh dữ liệu đủ rõ để chỉ ra một tham số thay vì nhiều đáp án ngang nhau.
**Grammar & collocations:** `parameter identifiability` — khả năng nhận dạng tham số; `lack identifiability` — thiếu tính nhận dạng được.
**Examples:** `Without repeated measurements, the model has weak identifiability for the individual growth rates.` → Không có phép đo lặp lại, mô hình khó nhận dạng tốc độ tăng trưởng cá nhân.
**Liên kết tiếng Hàn:** `식별 가능성` (sikbyeol ganeungseong) — khả năng nhận dạng.

## 14. operationalization /əˌpɛrəʃənələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of defining an abstract concept in terms of observable measurements or procedures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thao tác hóa khái niệm; hình ảnh biến một ý trừu tượng thành thước đo có thể quan sát.
**Grammar & collocations:** `operationalization of a construct` — thao tác hóa cấu trúc; `clear operationalization` — thao tác hóa rõ ràng.
**Examples:** `The operationalization of “well-being” determined which survey responses counted as evidence.` → Cách thao tác hóa “hạnh phúc” quyết định phản hồi khảo sát nào được tính là bằng chứng.
**Liên kết tiếng Hàn:** `조작적 정의` (jojagjeok jeongui) — định nghĩa thao tác.

## 15. construct validity /ˈkɑnstrʌkt vəˈlɪdəti/
**Part of speech:** noun phrase
**Core meaning (English):** the extent to which a measure actually represents the theoretical concept it claims to measure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị hiệu lực cấu trúc; hình ảnh thước đo thật sự chạm đúng khái niệm chứ không chỉ một dấu hiệu gần nó.
**Grammar & collocations:** `establish construct validity` — xác lập giá trị hiệu lực cấu trúc; `threat to construct validity` — đe dọa hiệu lực cấu trúc.
**Examples:** `Using test speed as a measure of intelligence may weaken construct validity.` → Dùng tốc độ làm bài để đo trí thông minh có thể làm yếu giá trị hiệu lực cấu trúc.
**Liên kết tiếng Hàn:** `구성 타당도` (guseong 타당do) — giá trị hiệu lực cấu trúc.

## 16. ecological validity /ˌiːkəˈlɑdʒɪkəl vəˈlɪdəti/
**Part of speech:** noun phrase
**Core meaning (English):** the extent to which findings or tasks reflect how behavior occurs in real-world settings.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị hiệu lực sinh thái; hình ảnh kết quả trong phòng thí nghiệm vẫn đứng vững giữa đời sống thật.
**Grammar & collocations:** `high ecological validity` — hiệu lực sinh thái cao; `sacrifice ecological validity` — hy sinh hiệu lực sinh thái.
**Examples:** `The controlled task was precise but had limited ecological validity outside the laboratory.` → Nhiệm vụ có kiểm soát chính xác nhưng hiệu lực sinh thái hạn chế ngoài phòng thí nghiệm.
**Liên kết tiếng Hàn:** `생태학적 타당도` (saengtaehakjeok tandangdo) — giá trị hiệu lực sinh thái.

## 17. external validity /ɪkˈstɝnəl vəˈlɪdəti/
**Part of speech:** noun phrase
**Core meaning (English):** the extent to which results can be generalized to other people, places, times, or conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị hiệu lực bên ngoài; hình ảnh kết quả bước ra khỏi mẫu nghiên cứu để đi tới bối cảnh khác.
**Grammar & collocations:** `threat to external validity` — đe dọa hiệu lực bên ngoài; `generalize external validity` — mở rộng hiệu lực bên ngoài.
**Examples:** `A narrow volunteer sample limits the external validity of the intervention estimate.` → Mẫu tình nguyện viên hẹp giới hạn giá trị hiệu lực bên ngoài của ước lượng can thiệp.
**Liên kết tiếng Hàn:** `외적 타당도` (oejeok tandangdo) — giá trị hiệu lực bên ngoài.

## 18. measurement invariance /ˈmɛʒərmənt ɪnˈvɛriəns/
**Part of speech:** noun phrase
**Core meaning (English):** the condition that a measure represents the same construct in different groups or at different times.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính bất biến đo lường; hình ảnh cùng một chiếc thước cho ý nghĩa tương đương ở các nhóm khác nhau.
**Grammar & collocations:** `test measurement invariance` — kiểm tra bất biến đo lường; `cross-group measurement invariance` — bất biến đo lường giữa nhóm.
**Examples:** `The survey was checked for measurement invariance before comparing language communities.` → Khảo sát được kiểm tra tính bất biến đo lường trước khi so sánh các cộng đồng ngôn ngữ.
**Liên kết tiếng Hàn:** `측정 불변성` (cheukjeong bulbyeonseong) — tính bất biến đo lường.

## 19. robustness check /ˈroʊbʌtnəs tʃɛk/
**Part of speech:** noun phrase
**Core meaning (English):** an additional analysis testing whether a result survives reasonable changes in assumptions, samples, or specifications.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra độ bền; hình ảnh lay nhẹ mô hình bằng nhiều giả định để xem kết luận có đứng vững không.
**Grammar & collocations:** `conduct a robustness check` — tiến hành kiểm tra độ bền; `robustness-check specification` — đặc tả dùng để kiểm tra độ bền.
**Examples:** `A robustness check showed that the policy effect remained after excluding the unusual year.` → Kiểm tra độ bền cho thấy tác động chính sách vẫn còn sau khi loại năm bất thường.
**Liên kết tiếng Hàn:** `강건성 검증` (ganggeonseong geomjeung) — kiểm tra độ bền.

## 20. selection bias /səˈlɛkʃən baɪəs/
**Part of speech:** noun phrase
**Core meaning (English):** systematic distortion caused by the way people, cases, or observations enter a study.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiên lệch chọn mẫu; hình ảnh cánh cổng tuyển người làm cho mẫu không còn đại diện cho quần thể.
**Grammar & collocations:** `risk of selection bias` — nguy cơ thiên lệch chọn mẫu; `correct for selection bias` — hiệu chỉnh thiên lệch chọn mẫu.
**Examples:** `Online recruitment created selection bias because people without internet access could not volunteer.` → Tuyển người trực tuyến tạo thiên lệch chọn mẫu vì người không có internet không thể đăng ký.
**Liên kết tiếng Hàn:** `선택 편향` (seontaek pyeonhyang) — thiên lệch chọn mẫu.

## Review in context

The analyst checked **heteroscedasticity** and **homoscedasticity** before interpreting coefficients, then considered whether **endogeneity** or weak **exogeneity** undermined the model. **Multicollinearity** made estimates unstable, and conditioning on a **collider** could create a false association. The protocol defined a **causal estimand**, justified an **instrumental variable**, and used a **propensity score** to balance observed covariates. A **Bayesian prior** informed the model, whose **posterior predictive** checks and **likelihood** revealed limited **identifiability**. Careful **operationalization** protected **construct validity**, while **ecological validity**, **external validity**, and **measurement invariance** determined whether the result traveled across settings. A final **robustness check** tested sensitivity to **selection bias**.

**Bản dịch tiếng Việt:**

Nhà phân tích kiểm tra phương sai thay đổi và phương sai đồng nhất trước khi diễn giải hệ số, rồi cân nhắc liệu nội sinh hay ngoại sinh yếu có làm suy yếu mô hình không. Đa cộng tuyến khiến ước lượng không ổn định, còn điều kiện hóa theo biến va chạm có thể tạo mối liên hệ giả. Đề cương định nghĩa đại lượng nhân quả, biện minh cho biến công cụ và dùng điểm xu hướng để cân bằng các biến đồng biến quan sát được. Một tiên nghiệm Bayes cung cấp thông tin cho mô hình, trong đó kiểm tra dự đoán hậu nghiệm và hàm khả dĩ cho thấy tính nhận dạng hạn chế. Thao tác hóa cẩn thận bảo vệ hiệu lực cấu trúc, còn hiệu lực sinh thái, hiệu lực bên ngoài và bất biến đo lường quyết định liệu kết quả có áp dụng ở bối cảnh khác không. Kiểm tra độ bền cuối cùng kiểm tra độ nhạy với thiên lệch chọn mẫu.
