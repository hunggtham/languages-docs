# C1 Vocabulary — Simulation-based validation and diagnostic checks

This lesson uses simulated data to test estimators, thresholds, missing-data assumptions, and the stability of planned decisions before a study begins.

Flow: **data simulation → synthetic respondent → data-generating model → parameter recovery → simulation study → coverage probability → empirical bias → root mean square error → Monte Carlo error → sensitivity scenario → dropout mechanism → null calibration → type I error → power analysis → minimum detectable effect → sequential stop boundary → sequential design → assumption scenario comparison → stability envelope → study stress scenario**.

## 1. data simulation /ˈdeɪtə ˌsɪmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** generating artificial data with specified properties to test an analysis or study design.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo dữ liệu giả có đặc điểm định trước để thử analysis.
**Grammar & collocations:** `data-simulation pipeline` — pipeline; `generate known outcomes` — tạo.
**Examples:** `Data simulation showed how the estimator behaved when scores were strongly skewed.` → Mô phỏng cho thấy estimator khi điểm lệch.
**Liên kết tiếng Hàn:** `데이터 시뮬레이션`.

## 2. synthetic respondent /sɪnˈθɛtɪk rɪˈspɑndənt/
**Part of speech:** noun
**Core meaning (English):** an artificial person or response profile generated to represent a plausible participant.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** người trả lời giả với profile hợp lý.
**Grammar & collocations:** `synthetic-respondent profile` — profile; `simulate a subgroup` — mô phỏng.
**Examples:** `Each synthetic respondent had a known ability level and a planned probability of missing items.` → Mỗi respondent giả có ability và missingness biết trước.
**Liên kết tiếng Hàn:** `합성 응답자`.

## 3. data-generating model /ˈdeɪtə ˈdʒɛnəˌreɪtɪŋ ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that describes how data could be produced from parameters, processes, and random variation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model mô tả dữ liệu được tạo ra thế nào.
**Grammar & collocations:** `data-generating-model assumption` — assumption; `simulate a response process` — mô phỏng.
**Examples:** `The data-generating model included different response speeds for novice and advanced learners.` → Model tạo response speed khác theo level.
**Liên kết tiếng Hàn:** `데이터 생성 모형`.

## 4. parameter recovery /pəˈræmətər rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** the ability of an analysis to recover known parameter values from simulated data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model có lấy lại đúng tham số đã dùng tạo data không.
**Grammar & collocations:** `parameter-recovery result` — result; `recover a planted effect` — khôi phục.
**Examples:** `Parameter recovery was poor when the sample was too small to distinguish two latent groups.` → Recovery kém khi sample nhỏ.
**Liên kết tiếng Hàn:** `매개변수 복구`.

## 5. simulation study /ˌsɪmjəˈleɪʃən ˈstʌdi/
**Part of speech:** noun
**Core meaning (English):** a planned investigation that repeats data generation and analysis under controlled conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** study lặp tạo data và chạy analysis trong điều kiện kiểm soát.
**Grammar & collocations:** `simulation-study design` — design; `vary sample size` — thay đổi.
**Examples:** `The simulation study compared three missing-data methods across several sample sizes.` → Study so ba phương pháp missing data.
**Liên kết tiếng Hàn:** `시뮬레이션 연구`.

## 6. coverage probability /ˈkʌvərɪdʒ ˌprɑbəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the proportion of repeated intervals that contain the true parameter value in a simulation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bao nhiêu interval chứa đúng tham số thật.
**Grammar & collocations:** `coverage-probability estimate` — estimate; `evaluate interval calibration` — đánh giá.
**Examples:** `Coverage probability fell below the target when the model ignored clustering.` → Coverage giảm khi bỏ qua clustering.
**Liên kết tiếng Hàn:** `포괄 확률`.

## 7. empirical bias /ɛmˈpɪrɪkəl baɪəs/
**Part of speech:** noun
**Core meaning (English):** the average difference between an estimator's result and the known value used to generate simulated data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch trung bình giữa estimate và truth mô phỏng.
**Grammar & collocations:** `empirical-bias estimate` — estimate; `measure systematic error` — đo.
**Examples:** `Empirical bias was positive because the short test consistently overestimated ability.` → Bias dương vì test ngắn estimate cao.
**Liên kết tiếng Hàn:** `경험적 편향`.

## 8. root mean square error /ˌruːt miːn skwɛr ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** a measure combining an estimator's bias and random error by averaging squared differences and taking a square root.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ số gộp bias và lỗi ngẫu nhiên.
**Grammar & collocations:** `root-mean-square-error comparison` — comparison; `summarize total estimation error` — tóm tắt.
**Examples:** `The new estimator had lower root mean square error across the simulated conditions.` → Estimator mới RMSE thấp hơn.
**Liên kết tiếng Hàn:** `평균 제곱근 오차`.

## 9. Monte Carlo error /mɑnˈteɪ kɑrloʊ ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** random variation in a simulation result caused by using a finite number of simulated repetitions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết quả mô phỏng dao động vì số lần lặp hữu hạn.
**Grammar & collocations:** `Monte-Carlo-error estimate` — estimate; `increase the number of repetitions` — tăng.
**Examples:** `Monte Carlo error was reduced by running ten thousand simulated datasets.` → Lỗi Monte Carlo giảm nhờ nhiều lần lặp.
**Liên kết tiếng Hàn:** `몬테카를로 오차`.

## 10. sensitivity scenario /ˌsɛnsəˈtɪvəti səˈnɛrioʊ/
**Part of speech:** noun
**Core meaning (English):** a plausible alternative condition used to see whether a conclusion changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kịch bản khác để xem kết luận có đổi không.
**Grammar & collocations:** `sensitivity-scenario grid` — grid; `vary an assumption` — thay đổi.
**Examples:** `The sensitivity scenario assumed more severe dropout than the primary analysis.` → Kịch bản giả định dropout nặng hơn.
**Liên kết tiếng Hàn:** `민감도 시나리오`.

## 11. dropout mechanism /ˈdrɑpˌaʊt ˈmɛkəˌnɪzəm/
**Part of speech:** noun
**Core meaning (English):** the process or reason that determines which participants leave follow-up and which observations remain available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế quyết định ai bỏ follow-up và data nào còn.
**Grammar & collocations:** `dropout-mechanism assumption` — assumption; `model follow-up loss` — mô hình.
**Examples:** `The simulation varied the dropout mechanism to test whether imputation remained reliable.` → Mô phỏng đổi cơ chế dropout để test imputation.
**Liên kết tiếng Hàn:** `탈락 메커니즘`.

## 12. null calibration /nʌl ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** checking whether a method produces the expected false-positive behavior when the simulated effect is zero.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test khi không có effect có báo dương đúng mức không.
**Grammar & collocations:** `null-calibration check` — check; `simulate no effect` — mô phỏng.
**Examples:** `Null calibration showed that the flexible model rejected too often when no difference existed.` → Calibration lộ model reject quá nhiều khi không effect.
**Liên kết tiếng Hàn:** `귀무 보정`.

## 13. type I error /taɪp wʌn ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** rejecting a null claim when it is actually true.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** báo có hiệu ứng dù thực tế không có.
**Grammar & collocations:** `type-I-error rate` — rate; `control false positives` — kiểm soát.
**Examples:** `The design kept the type I error near the prespecified five-percent level.` → Thiết kế giữ lỗi loại I gần 5%.
**Liên kết tiếng Hàn:** `제1종 오류`.

## 14. power analysis /ˈpaʊər əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** analysis estimating the chance of detecting a specified effect under a chosen design and sample size.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính khả năng phát hiện effect với design/sample cụ thể.
**Grammar & collocations:** `power-analysis calculation` — calculation; `plan a sufficient sample` — lập.
**Examples:** `Power analysis indicated that the pilot was too small to detect a modest improvement.` → Power cho thấy pilot quá nhỏ.
**Liên kết tiếng Hàn:** `검정력 분석`.

## 15. minimum detectable effect /ˈmɪnəməl dɪˈtɛktəbəl ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the smallest effect a design is expected to identify with a chosen probability and error level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect nhỏ nhất design có thể phát hiện đáng tin.
**Grammar & collocations:** `minimum-detectable-effect calculation` — calculation; `set a practical target` — đặt.
**Examples:** `The minimum detectable effect was larger than the improvement considered worthwhile by clinicians.` → Effect phát hiện được lớn hơn mức bác sĩ thấy đáng kể.
**Liên kết tiếng Hàn:** `최소 검출 가능 효과`.

## 16. sequential stop boundary /sɪˈkwɛnʃəl stɑp ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** a prespecified evidence level at which sequential data collection or testing should stop.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới evidence để dừng.
**Grammar & collocations:** `sequential-stop-boundary rule` — rule; `cross the interim threshold` — vượt.
**Examples:** `The sequential stop boundary protected the trial from repeatedly testing until a chance result appeared.` → Boundary ngăn test lặp đến khi ra kết quả may rủi.
**Liên kết tiếng Hàn:** `순차 중지 경계`.

## 17. sequential design /sɪˈkwɛnʃəl dɪˈzaɪn/
**Part of speech:** noun
**Core meaning (English):** a design that allows evidence to be reviewed at planned stages while data collection continues or stops.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết kế xem evidence theo từng giai đoạn.
**Grammar & collocations:** `sequential-design analysis` — analysis; `schedule an interim review` — xếp.
**Examples:** `The sequential design scheduled two interim reviews before the final sample was reached.` → Thiết kế có hai review giữa kỳ.
**Liên kết tiếng Hàn:** `순차적 설계`.

## 18. assumption scenario comparison /əˈsʌmpʃən səˈnɛrioʊ kəmˈpɛrəsən/
**Part of speech:** noun
**Core meaning (English):** systematic comparison of outcomes under several plausible combinations of assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so sánh kết quả dưới nhiều tổ hợp giả định.
**Grammar & collocations:** `assumption-scenario-comparison table` — table; `compare plausible futures` — so sánh.
**Examples:** `Assumption scenario comparison examined optimistic, central, and adverse recruitment patterns.` → So sánh kịch bản xem ba pattern tuyển người.
**Liên kết tiếng Hàn:** `가정 시나리오 비교`.

## 19. stability envelope /stəˈbɪləti ˈɛnvəˌloʊp/
**Part of speech:** noun
**Core meaning (English):** the range of assumptions and conditions under which a conclusion remains acceptably stable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng giả định mà kết luận vẫn bền.
**Grammar & collocations:** `stability-envelope boundary` — boundary; `map stable conclusions` — lập bản đồ.
**Examples:** `The stability envelope narrowed when the dropout rate exceeded thirty percent.` → Vùng ổn định hẹp khi dropout quá 30%.
**Liên kết tiếng Hàn:** `안정성 범위`.

## 20. study stress scenario /ˈstʌdi strɛs səˈnɛrioʊ/
**Part of speech:** noun
**Core meaning (English):** an intentionally difficult simulated condition used to expose weaknesses in a planned study or analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kịch bản khó để lộ điểm yếu của study.
**Grammar & collocations:** `study-stress-scenario report` — report; `stress-test a design` — thử sức.
**Examples:** `The study stress scenario combined low adherence, delayed measurement, and uneven subgroup sizes.` → Kịch bản gộp adherence thấp và nhóm lệch.
**Liên kết tiếng Hàn:** `연구 스트레스 시나리오`.

## Review in context

**Data simulation** can generate a **synthetic respondent** through a **generative model**. **Parameter recovery** and a **simulation study** show whether an analysis works; **coverage probability**, **empirical bias**, and **root mean square error** summarize performance, while **Monte Carlo error** reflects finite repetitions. A **sensitivity scenario** can vary the **missingness mechanism**. **Null calibration** checks false positives, including **type I error**, and **power analysis** estimates whether a design can find a **minimum detectable effect**. A **stopping boundary** guides a **sequential design**. **Scenario analysis** compares assumptions, and a **robustness envelope** maps stable conclusions. A difficult **study stress scenario** exposes weaknesses before real data collection.

**Bản dịch tiếng Việt:** **Data simulation** có thể tạo **synthetic respondent** bằng **data-generating model**. **Parameter recovery** và **simulation study** cho biết analysis có hoạt động không; **coverage probability**, **empirical bias** và **root mean square error** tóm tắt performance, còn **Monte Carlo error** phản ánh số lần lặp hữu hạn. **Sensitivity scenario** có thể thay đổi **dropout mechanism**. **Null calibration** kiểm tra false positive, gồm **type I error**, còn **power analysis** ước tính design có tìm được **minimum detectable effect** không. **Sequential stop boundary** dẫn **sequential design**. **Assumption scenario comparison** so sánh giả định, còn **stability envelope** lập vùng kết luận ổn định. **Study stress scenario** khó giúp lộ điểm yếu trước khi thu data thật.
