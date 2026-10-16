# C1 Vocabulary 12 — Monte Carlo and estimator diagnostics

This lesson follows how simulation studies reveal bias, uncertainty, and finite-sample behavior before an estimator is trusted.

Flow: **Monte Carlo experiment → data-generating process → finite-sample bias → small-sample performance → interval coverage → empirical rejection rate → size distortion → power curve → false-positive rate → false-negative rate → replication design → random seed → simulation draw → burn-in period → warm-up period → estimator bias → root mean squared error → mean absolute error → simulation envelope → Monte Carlo standard error**.

## 1. Monte Carlo experiment /ˌmɑnti ˈkɑrloʊ ɪkˈspɛrəmənt/
**Part of speech:** noun
**Core meaning (English):** a repeated simulation study used to examine how an estimator behaves under controlled conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** study mô phỏng lặp để xem estimator hoạt động trong điều kiện kiểm soát.
**Grammar & collocations:** `Monte-Carlo-experiment design` — design; `simulate repeated samples` — mô phỏng.
**Examples:** `The Monte Carlo experiment compared estimators when the sample was small and skewed.` → Experiment so estimator khi sample nhỏ và lệch.
**Liên kết tiếng Hàn:** `몬테카를로 실험`.

## 2. data-generating process /ˈdeɪtə ˈdʒɛnəˌreɪtɪŋ ˈprɑsɛs/
**Part of speech:** noun
**Core meaning (English):** the assumed mechanism that produces simulated observations, parameters, dependence, and errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế giả định tạo observation, parameter, dependence và error.
**Grammar & collocations:** `data-generating-process specification` — specification; `generate synthetic outcomes` — tạo.
**Examples:** `The data-generating process included unequal treatment effects across regions.` → DGP gồm effect treatment lệch theo vùng.
**Liên kết tiếng Hàn:** `데이터 생성 과정`.

## 3. finite-sample bias /ˈfaɪˌnaɪt ˈsæmpəl baɪəs/
**Part of speech:** noun
**Core meaning (English):** systematic deviation of an estimator from its target when the sample size is limited.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator lệch có hệ thống khi sample hữu hạn.
**Grammar & collocations:** `finite-sample-bias correction` — correction; `compare bias across sample sizes` — so.
**Examples:** `Finite-sample bias was largest when the treatment was rare.` → Bias lớn nhất khi treatment hiếm.
**Liên kết tiếng Hàn:** `유한 표본 편향`.

## 4. small-sample performance /ˈsmɔl ˈsæmpəl pərˈfɔrməns/
**Part of speech:** noun
**Core meaning (English):** the behavior of an estimator or test when only a limited number of observations are available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator/test hoạt động ra sao khi observation ít.
**Grammar & collocations:** `small-sample-performance comparison` — comparison; `evaluate finite-data behavior` — đánh giá.
**Examples:** `Small-sample performance favored the robust estimator despite a slight loss of efficiency in large samples.` → Performance sample nhỏ ủng hộ estimator robust.
**Liên kết tiếng Hàn:** `소표본 성능`.

## 5. interval coverage /ˈɪntərvəl ˈkʌvərɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the proportion of repeated confidence or credible intervals that contain the true target value in simulation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỉ lệ interval lặp chứa value thật.
**Grammar & collocations:** `interval-coverage rate` — rate; `check nominal confidence` — kiểm tra.
**Examples:** `Interval coverage fell below its ninety-five-percent target under heavy-tailed errors.` → Coverage thấp hơn target 95% với error đuôi nặng.
**Liên kết tiếng Hàn:** `구간 포함률`.

## 6. empirical rejection rate /ɛmˈpɪrɪkəl rɪˈdʒɛkʃən reɪt/
**Part of speech:** noun
**Core meaning (English):** the proportion of simulated samples in which a test rejects its null hypothesis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỉ lệ sample mô phỏng làm test bác null.
**Grammar & collocations:** `empirical-rejection-rate table` — table; `compare test behavior` — so.
**Examples:** `The empirical rejection rate rose as the simulated effect increased.` → Rate bác null tăng khi effect mô phỏng lớn.
**Liên kết tiếng Hàn:** `경험적 기각률`.

## 7. size distortion /saɪz dɪˈstɔrʃən/
**Part of speech:** noun
**Core meaning (English):** the difference between a test's actual false-rejection rate under the null and its stated nominal level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** false rejection thật lệch khỏi mức nominal.
**Grammar & collocations:** `size-distortion diagnostic` — diagnostic; `calibrate a test` — hiệu chuẩn.
**Examples:** `Size distortion made the nominal five-percent test reject too often.` → Distortion làm test 5% bác quá thường.
**Liên kết tiếng Hàn:** `크기 왜곡`.

## 8. power curve /ˈpaʊər kɝv/
**Part of speech:** noun
**Core meaning (English):** a curve showing the probability of detecting an effect across different true effect sizes or sample conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** curve probability phát hiện effect theo effect thật/sample.
**Grammar & collocations:** `power-curve plot` — plot; `evaluate detectable effects` — đánh giá.
**Examples:** `The power curve showed that the study could detect only moderate or larger effects.` → Curve cho thấy study chỉ detect effect vừa trở lên.
**Liên kết tiếng Hàn:** `검정력 곡선`.

## 9. false-positive rate /ˌfɔls ˈpɑzətɪv reɪt/
**Part of speech:** noun
**Core meaning (English):** the proportion of cases incorrectly classified as showing an effect or condition when none is present.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỉ lệ báo effect/condition khi thật ra không có.
**Grammar & collocations:** `false-positive-rate control` — control; `limit spurious discoveries` — hạn chế.
**Examples:** `Multiple testing increased the false-positive rate without stronger evidence.` → Multiple testing làm rate false positive tăng.
**Liên kết tiếng Hàn:** `위양성률`.

## 10. false-negative rate /ˌfɔls ˈnɛɡətɪv reɪt/
**Part of speech:** noun
**Core meaning (English):** the proportion of real effects or conditions that a procedure fails to detect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỉ lệ effect thật nhưng procedure bỏ sót.
**Grammar & collocations:** `false-negative-rate estimate` — estimate; `detect a missed signal` — phát hiện.
**Examples:** `A low-powered design had a high false-negative rate for modest treatment effects.` → Design power thấp bỏ sót effect vừa.
**Liên kết tiếng Hàn:** `위음성률`.

## 11. replication design /ˌrɛpləˈkeɪʃən dɪˈzaɪn/
**Part of speech:** noun
**Core meaning (English):** the plan specifying how simulated datasets, parameter settings, and repeated runs will be organized.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kế hoạch tổ chức dataset, parameter và lần chạy mô phỏng.
**Grammar & collocations:** `replication-design grid` — grid; `vary one condition systematically` — thay đổi.
**Examples:** `The replication design varied sample size, treatment prevalence, and error shape separately.` → Design thay từng điều kiện có hệ thống.
**Liên kết tiếng Hàn:** `반복 설계`.

## 12. random seed /ˈrændəm siːd/
**Part of speech:** noun
**Core meaning (English):** an initial value that makes a sequence of pseudorandom simulation results reproducible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị đầu giúp chuỗi random tái lập được.
**Grammar & collocations:** `random-seed record` — record; `set a reproducible seed` — đặt.
**Examples:** `The code stored the random seed so another analyst could reproduce the exact draws.` → Code lưu seed để tái tạo draws.
**Liên kết tiếng Hàn:** `난수 시드`.

## 13. simulation draw /ˌsɪmjəˈleɪʃən drɔ/
**Part of speech:** noun
**Core meaning (English):** one generated sample, parameter realization, or random outcome within a simulation study.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một sample/realization random trong study mô phỏng.
**Grammar & collocations:** `simulation-draw index` — index; `store each generated sample` — lưu.
**Examples:** `Each simulation draw produced a new set of outcomes under the same data-generating process.` → Mỗi draw tạo outcome mới cùng DGP.
**Liên kết tiếng Hàn:** `시뮬레이션 추출`.

## 14. burn-in period /ˈbɝn ɪn ˈpɪriəd/
**Part of speech:** noun
**Core meaning (English):** an initial part of an iterative simulation that is discarded before the process is treated as representative of its target distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giai đoạn đầu bỏ đi trước khi process đạt distribution ổn định.
**Grammar & collocations:** `burn-in-period length` — length; `discard early draws` — bỏ.
**Examples:** `The Markov simulation used a long burn-in period before recording parameter draws.` → Simulation bỏ giai đoạn đầu dài.
**Liên kết tiếng Hàn:** `번인 기간`.

## 15. warm-up period /ˈwɔrm ʌp ˈpɪriəd/
**Part of speech:** noun
**Core meaning (English):** an initial period used to let a simulated or iterative system settle before performance is measured.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian đầu để hệ thống mô phỏng ổn định trước đo performance.
**Grammar & collocations:** `warm-up-period exclusion` — exclusion; `let the algorithm stabilize` — ổn định.
**Examples:** `The queue simulation excluded the warm-up period from its average waiting-time estimate.` → Simulation loại warm-up khỏi average.
**Liên kết tiếng Hàn:** `워밍업 기간`.

## 16. estimator bias /ˈɛstəˌmeɪtər baɪəs/
**Part of speech:** noun
**Core meaning (English):** the average difference between an estimator's repeated value and the target quantity it is meant to estimate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh trung bình giữa estimate lặp và target thật.
**Grammar & collocations:** `estimator-bias profile` — profile; `measure systematic error` — đo.
**Examples:** `Estimator bias was negative when the rare treatment group was poorly represented.` → Bias âm khi treatment hiếm được đại diện kém.
**Liên kết tiếng Hàn:** `추정량 편향`.

## 17. root mean squared error /ˈruːt miːn skwɛrd ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** the square root of average squared estimation errors, combining bias and variability in one measure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** căn bậc hai của average error bình phương, gộp bias và variance.
**Grammar & collocations:** `root-mean-squared-error comparison` — comparison; `rank estimators by accuracy` — xếp.
**Examples:** `The shrinkage estimator had lower root mean squared error across most simulated samples.` → Estimator shrinkage có RMSE thấp hơn.
**Liên kết tiếng Hàn:** `평균 제곱근 오차`.

## 18. mean absolute error /miːn ˈæbsəˌluːt ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** the average absolute distance between an estimate or forecast and its target value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** average khoảng cách tuyệt đối giữa estimate/forecast và target.
**Grammar & collocations:** `mean-absolute-error score` — score; `compare forecast accuracy` — so.
**Examples:** `Mean absolute error was easier to interpret than a squared-error measure in the original units.` → MAE dễ hiểu hơn trong đơn vị gốc.
**Liên kết tiếng Hàn:** `평균 절대 오차`.

## 19. simulation envelope /ˌsɪmjəˈleɪʃən ˈɛnvəˌloʊp/
**Part of speech:** noun
**Core meaning (English):** a range of simulated trajectories or statistics used as a reference for assessing observed behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dải trajectory/statistic mô phỏng làm mốc so observed.
**Grammar & collocations:** `simulation-envelope plot` — plot; `compare observed paths` — so.
**Examples:** `The observed residual path left the simulation envelope during the crisis period.` → Residual thật ra ngoài envelope ở crisis.
**Liên kết tiếng Hàn:** `시뮬레이션 포락선`.

## 20. Monte Carlo standard error /ˌmɑnti ˈkɑrloʊ ˈstændərd ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** uncertainty in a simulation-based estimate caused by using a finite number of simulation repetitions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bất định của estimate do số lần mô phỏng hữu hạn.
**Grammar & collocations:** `Monte-Carlo-standard-error target` — target; `increase simulation repetitions` — tăng.
**Examples:** `The team increased the number of runs until the Monte Carlo standard error was negligible.` → Team tăng runs đến khi MCSE không đáng kể.
**Liên kết tiếng Hàn:** `몬테카를로 표준 오차`.

## Review in context

A **Monte Carlo experiment** begins with a **data-generating process** and a **replication design**. It can reveal **finite-sample bias**, **small-sample performance**, **interval coverage**, and an **empirical rejection rate**. **Size distortion**, a **power curve**, a **false-positive rate**, and a **false-negative rate** describe test behavior. A **random seed** makes each **simulation draw** reproducible; a **burn-in period** or **warm-up period** may be discarded. Analysts report **estimator bias**, **root mean squared error**, and **mean absolute error**, compare an observed path with a **simulation envelope**, and reduce **Monte Carlo standard error** by running more repetitions.

**Bản dịch tiếng Việt:** **Monte Carlo experiment** bắt đầu bằng **data-generating process** và **replication design**. Nó có thể lộ **finite-sample bias**, **small-sample performance**, **interval coverage** và **empirical rejection rate**. **Size distortion**, **power curve**, **false-positive rate** và **false-negative rate** mô tả hành vi test. **Random seed** làm mỗi **simulation draw** tái lập; **burn-in period** hoặc **warm-up period** có thể bị bỏ. Analyst báo **estimator bias**, **root mean squared error** và **mean absolute error**, so path thật với **simulation envelope**, rồi giảm **Monte Carlo standard error** bằng nhiều repetition hơn.
