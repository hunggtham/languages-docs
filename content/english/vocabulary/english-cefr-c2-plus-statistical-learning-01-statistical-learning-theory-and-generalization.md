# C2+ Vocabulary — Statistical learning theory and generalization

This lesson follows how learning theory measures hypothesis complexity, controls generalization error, and explains modern phenomena such as double descent and benign overfitting. The network is **Rademacher complexity → VC dimension → structural risk minimization → empirical risk minimization → uniform convergence → probably approximately correct → algorithmic stability → margin bound → covering number → metric entropy → concentration inequality → subgaussian tail → subexponential tail → martingale difference → mixing condition → exchangeable sequence → bootstrap consistency → cross-validation leakage → double descent → benign overfitting**.

## 1. Rademacher complexity /ˈreɪdəmɑkər kəmˈplɛksəti/
**Part of speech:** noun
**Core meaning (English):** a measure of how well a class of functions can correlate with random plus-or-minus signs on a sample.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo mức hypothesis class có thể “đuổi theo noise” ngẫu nhiên; class càng linh hoạt thì Rademacher complexity thường càng lớn.
**Grammar & collocations:** `empirical Rademacher complexity` — complexity; `Rademacher-complexity bound` — bound; `control complexity` — control.
**Examples:** `The regularized model had lower Rademacher complexity and a tighter generalization bound.` → Model regularized có Rademacher complexity thấp hơn và generalization bound chặt hơn.
**Liên kết tiếng Hàn:** `라데마허 복잡도` — Rademacher complexity.

## 2. VC dimension /ˌviː siː daɪˈmɛnʃən/
**Part of speech:** noun
**Core meaning (English):** the largest number of points that a hypothesis class can label in every possible binary pattern.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số điểm tối đa mà class có thể “shatter” theo mọi pattern nhãn nhị phân.
**Grammar & collocations:** `finite VC dimension` — dimension hữu hạn; `VC-dimension bound` — bound; `estimate the VC dimension` — estimate.
**Examples:** `A linear classifier in two dimensions has a finite VC dimension despite having infinitely many parameter values.` → Linear classifier trong hai chiều có VC dimension hữu hạn dù có vô hạn giá trị parameter.
**Liên kết tiếng Hàn:** `VC 차원` — VC dimension.

## 3. structural risk minimization /ˈstrʌktʃərəl rɪsk ˌmɪnəməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a strategy that chooses among nested hypothesis classes by balancing empirical fit against the complexity of the selected class.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không chọn model fit tốt nhất một cách mù quáng; chọn tầng complexity phù hợp giữa error và khả năng generalize.
**Grammar & collocations:** `structural-risk-minimization principle` — principle; `nested hypothesis classes` — classes; `minimize structural risk` — minimize.
**Examples:** `Structural risk minimization selected a slightly simpler class than the one with the lowest training error.` → Structural risk minimization chọn class đơn giản hơn một chút so với class có training error thấp nhất.
**Liên kết tiếng Hàn:** `구조적 위험 최소화` — structural risk minimization.

## 4. empirical risk minimization /ɪmˈpɪrɪkəl rɪsk ˌmɪnəməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the procedure of choosing model parameters that minimize average loss on the observed training sample.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tối ưu loss trung bình trên data đã thấy; nó là điểm xuất phát nhưng chưa bảo đảm model tốt ngoài sample.
**Grammar & collocations:** `empirical-risk-minimization objective` — objective; `ERM estimator` — estimator; `minimize empirical risk` — minimize.
**Examples:** `Empirical risk minimization fit the classifier to the labeled training examples.` → Empirical risk minimization fit classifier vào các training example có label.
**Liên kết tiếng Hàn:** `경험적 위험 최소화` — empirical risk minimization.

## 5. uniform convergence /ˈjuːnəfɔrm kənˈvɜrdʒəns/
**Part of speech:** noun
**Core meaning (English):** convergence in which empirical risk approaches population risk simultaneously and reliably over an entire hypothesis class.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không chỉ một model hội tụ; mọi model trong class đều có empirical risk gần population risk cùng lúc.
**Grammar & collocations:** `uniform-convergence guarantee` — guarantee; `prove uniform convergence` — prove; `uniform law of large numbers` — law.
**Examples:** `Uniform convergence justified using the training minimum as a proxy for the unknown population minimum.` → Uniform convergence biện minh việc dùng training minimum làm proxy cho population minimum chưa biết.
**Liên kết tiếng Hàn:** `균일 수렴` — hội tụ đều.

## 6. probably approximately correct /ˈprɑbəbli əˈprɑksəmətli kəˈrɛkt/
**Part of speech:** adjective phrase
**Core meaning (English):** describing a learning guarantee that, with high probability, returns a hypothesis whose error is within a chosen tolerance of the target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** PAC không hứa luôn đúng tuyệt đối; nó hứa “gần đúng” với xác suất cao và tolerance đã định.
**Grammar & collocations:** `probably approximately correct learning` — learning; `PAC guarantee` — guarantee; `PAC sample complexity` — complexity.
**Examples:** `The theorem gave a probably approximately correct guarantee once the sample exceeded the complexity threshold.` → Định lý cho PAC guarantee khi sample vượt complexity threshold.
**Liên kết tiếng Hàn:** `확률적 근사 정답` — probably approximately correct.

## 7. algorithmic stability /ˌælɡəˈrɪðmɪk stəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the extent to which a learning algorithm's output changes when one training example is replaced or removed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model có “lung lay” mạnh khi bỏ một point không; ổn định hơn thường gắn với generalization tốt hơn.
**Grammar & collocations:** `uniform algorithmic stability` — stability; `stability-based bound` — bound; `improve stability` — improve.
**Examples:** `Early stopping improved algorithmic stability by preventing a single noisy example from dominating the fit.` → Early stopping tăng algorithmic stability bằng cách ngăn một example nhiễu chi phối fit.
**Liên kết tiếng Hàn:** `알고리즘 안정성` — algorithmic stability.

## 8. margin bound /ˈmɑrdʒɪn baʊnd/
**Part of speech:** noun
**Core meaning (English):** a generalization bound that depends on how far training examples lie from the classifier's decision boundary, often relative to model complexity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** classifier không chỉ phân loại đúng; điểm càng xa boundary thì margin càng rộng và bound thường tốt hơn.
**Grammar & collocations:** `large-margin bound` — bound margin lớn; `margin-based generalization` — generalization; `derive a margin bound` — derive.
**Examples:** `The support-vector classifier achieved a tighter margin bound after increasing the geometric separation.` → Classifier support-vector có margin bound chặt hơn sau khi tăng geometric separation.
**Liên kết tiếng Hàn:** `마진 경계` — margin bound.

## 9. covering number /ˈkʌvərɪŋ ˈnʌmbər/
**Part of speech:** noun
**Core meaning (English):** the smallest number of balls of a given radius needed to cover a function class or metric space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cần bao nhiêu “quả cầu nhỏ” để phủ hết class ở độ phân giải đã chọn; nhiều cầu nghĩa là class phức tạp hơn.
**Grammar & collocations:** `metric covering number` — number; `covering-number bound` — bound; `compute a covering number` — compute.
**Examples:** `The covering number grew rapidly as the approximation radius became smaller.` → Covering number tăng nhanh khi approximation radius nhỏ hơn.
**Liên kết tiếng Hàn:** `덮개 수` — covering number.

## 10. metric entropy /ˈmɛtrɪk ˈɛntrəpi/
**Part of speech:** noun
**Core meaning (English):** the logarithm of a covering number, used to quantify the size or complexity of a class at a specified resolution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** entropy của class sau khi đếm số “cover”; nó cho biết không gian hypothesis lớn đến mức nào ở scale đã chọn.
**Grammar & collocations:** `metric-entropy integral` — integral; `bracketing entropy` — entropy; `bound metric entropy` — bound.
**Examples:** `The metric entropy term dominated the learning bound for the highly flexible function class.` → Metric entropy term chi phối learning bound của function class rất linh hoạt.
**Liên kết tiếng Hàn:** `계량 엔트로피` — metric entropy.

## 11. concentration inequality /ˌkɑnsənˈtreɪʃən ˌɪnəˈkwɑləti/
**Part of speech:** noun
**Core meaning (English):** a probabilistic inequality that bounds how far a random quantity is likely to deviate from its expected value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàng rào xác suất cho biết sample mean hoặc sum có thể lệch khỏi mean thật bao xa.
**Grammar & collocations:** `concentration-inequality bound` — bound; `tail concentration` — concentration; `apply an inequality` — apply.
**Examples:** `A concentration inequality controlled the deviation of the empirical loss from its expectation.` → Concentration inequality kiểm soát độ lệch của empirical loss khỏi expectation.
**Liên kết tiếng Hàn:** `집중 부등식` — concentration inequality.

## 12. subgaussian tail /ˌsʌbɡaʊˈsiən teɪl/
**Part of speech:** noun
**Core meaning (English):** a probability tail that decays at least as quickly as a Gaussian tail up to a scale parameter.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác suất extreme event giảm rất nhanh, gần kiểu Gaussian, nên sample mean có concentration mạnh.
**Grammar & collocations:** `subgaussian random variable` — variable; `subgaussian-tail bound` — bound; `assume subgaussian tails` — assume.
**Examples:** `The noise was modeled with a subgaussian tail to obtain an exponential deviation bound.` → Noise được model bằng subgaussian tail để có deviation bound dạng exponential.
**Liên kết tiếng Hàn:** `서브가우시안 꼬리` — đuôi subgaussian.

## 13. subexponential tail /ˌsʌbˌɛkspoʊˈnɛnʃəl teɪl/
**Part of speech:** noun
**Core meaning (English):** a tail that decays more slowly than a Gaussian tail but still fast enough to yield exponential-type concentration for moderate deviations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tail nặng hơn Gaussian nhưng chưa “nặng” đến mức power law; bound vẫn kiểm soát được deviation vừa phải.
**Grammar & collocations:** `subexponential random variable` — variable; `subexponential-tail assumption` — assumption; `handle heavy tails` — handle.
**Examples:** `The estimator remained valid under a subexponential tail, although its bound was looser.` → Estimator vẫn hợp lệ dưới subexponential tail dù bound lỏng hơn.
**Liên kết tiếng Hàn:** `서브지수 꼬리` — đuôi subexponential.

## 14. martingale difference /ˈmɑrtɪŋɡeɪl ˈdɪfərəns/
**Part of speech:** noun
**Core meaning (English):** a random increment whose conditional expectation is zero given all information available before it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi bước mới không có drift có thể dự đoán từ quá khứ; nó là “innovation” của process.
**Grammar & collocations:** `martingale-difference sequence` — sequence; `martingale difference noise` — noise; `conditional mean zero` — mean.
**Examples:** `The forecast error formed a martingale difference under the correctly specified information set.` → Forecast error tạo martingale difference dưới information set được chỉ định đúng.
**Liên kết tiếng Hàn:** `마팅게일 차분` — martingale difference.

## 15. mixing condition /ˈmɪksɪŋ kənˈdɪʃən/
**Part of speech:** noun
**Core meaning (English):** a dependence condition requiring observations far apart in a sequence to become approximately independent at a specified rate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ký ức của process phai dần theo khoảng cách; point cách xa nhau đủ thì gần như độc lập.
**Grammar & collocations:** `strong mixing condition` — condition mạnh; `mixing coefficient` — coefficient; `verify mixing` — verify.
**Examples:** `The time-series theorem assumed a mixing condition so distant observations contributed limited dependence.` → Định lý time series giả định mixing condition để observation xa chỉ còn dependence giới hạn.
**Liên kết tiếng Hàn:** `혼합 조건` — mixing condition.

## 16. exchangeable sequence /ɪksˈtʃeɪndʒəbəl ˈsiːkwəns/
**Part of speech:** noun
**Core meaning (English):** a sequence whose joint distribution is unchanged when the order of its observations is permuted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi chỗ observation không đổi joint distribution; chúng không nhất thiết independent nhưng đối xứng theo thứ tự.
**Grammar & collocations:** `infinitely exchangeable sequence` — sequence; `exchangeability assumption` — assumption; `exchangeable observations` — observations.
**Examples:** `The Bayesian model treated the observations as an exchangeable sequence rather than as independent draws.` → Bayesian model xem observation là exchangeable sequence thay vì independent draws.
**Liên kết tiếng Hàn:** `교환 가능 수열` — exchangeable sequence.

## 17. bootstrap consistency /ˈbuːtˌstræp kənˈsɪstənsi/
**Part of speech:** noun
**Core meaning (English):** the property that a bootstrap distribution consistently approximates the sampling distribution of a statistic as the sample grows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resample bằng bootstrap thật sự tiến gần distribution của estimator nếu sample đủ lớn và điều kiện phù hợp.
**Grammar & collocations:** `bootstrap-consistency result` — result; `establish bootstrap consistency` — establish; `consistent resampling` — resampling.
**Examples:** `Bootstrap consistency failed for the nonsmooth estimator at the boundary.` → Bootstrap consistency thất bại với estimator không trơn ở boundary.
**Liên kết tiếng Hàn:** `부트스트랩 일관성` — bootstrap consistency.

## 18. cross-validation leakage /ˈkrɔs vələˈdeɪʃən ˈliːkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** contamination of a validation fold by information from the corresponding training or test data, causing an optimistically biased performance estimate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** validation “nhìn trộm” thông tin ngoài fold của nó, làm score đẹp giả.
**Grammar & collocations:** `prevent cross-validation leakage` — prevent; `leakage-prone preprocessing` — preprocessing; `fold-specific transformation` — transformation.
**Examples:** `Normalizing the full dataset before splitting caused cross-validation leakage.` → Normalize toàn bộ dataset trước khi split gây cross-validation leakage.
**Liên kết tiếng Hàn:** `교차검증 누출` — leakage trong cross-validation.

## 19. double descent /ˈdʌbəl dɪˈsɛnt/
**Part of speech:** noun
**Core meaning (English):** a pattern in which test error first decreases, then increases near interpolation, and later decreases again as model complexity continues to grow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường test error có hai lần “đi xuống”: một valley truyền thống, peak gần interpolation, rồi valley thứ hai ở regime overparameterized.
**Grammar & collocations:** `double-descent curve` — curve; `epoch-wise double descent` — double descent theo epoch; `observe double descent` — observe.
**Examples:** `The large network displayed double descent when width passed the interpolation threshold.` → Large network có double descent khi width vượt interpolation threshold.
**Liên kết tiếng Hàn:** `이중 하강` — double descent.

## 20. benign overfitting /bɪˈnaɪn ˌoʊvərˈfɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** interpolation of noisy training data by a highly flexible model that nevertheless achieves useful test performance because the fitted noise has limited harmful effect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model fit cả noise nhưng phần noise “lành tính”, nên prediction ngoài sample vẫn tốt nhờ geometry, regularization ngầm hoặc structure của data.
**Grammar & collocations:** `benign-overfitting regime` — regime; `benignly overfit` — overfit lành tính; `interpolating classifier` — classifier.
**Examples:** `Benign overfitting occurred because the classifier interpolated the sample while keeping test directions stable.` → Benign overfitting xảy ra vì classifier interpolate sample nhưng giữ hướng test ổn định.
**Liên kết tiếng Hàn:** `양성 과적합` — benign overfitting.

## Review in context

Learning theory measures a hypothesis class with **Rademacher complexity**, **VC dimension**, **covering number**, and **metric entropy**. **Structural risk minimization** balances class complexity, while **empirical risk minimization** fits observed loss. **Uniform convergence** supports transferring that fit to population risk, and a **probably approximately correct** guarantee states the error tolerance and confidence. **Algorithmic stability** and a **margin bound** offer alternative routes to generalization. Probabilistic tools include a **concentration inequality**, **subgaussian tail**, **subexponential tail**, and **martingale difference** assumptions; dependent data may require a **mixing condition** or an **exchangeable sequence** model. Resampling is useful when **bootstrap consistency** holds, but **cross-validation leakage** can invalidate the estimate. Modern overparameterized models may show **double descent** or **benign overfitting** rather than the simplest textbook bias–variance curve.

**Bản dịch tiếng Việt:**

Learning theory đo độ phức tạp của hypothesis class bằng **Rademacher complexity**, **VC dimension**, **covering number** và **metric entropy**. **Structural risk minimization** cân bằng complexity của class, còn **empirical risk minimization** fit loss quan sát được. **Uniform convergence** hỗ trợ chuyển kết quả fit sang population risk, và guarantee **probably approximately correct** nêu rõ tolerance cùng confidence. **Algorithmic stability** và **margin bound** là các con đường khác để giải thích generalization. Công cụ xác suất gồm **concentration inequality**, giả định **subgaussian tail**, **subexponential tail** và **martingale difference**; dữ liệu phụ thuộc có thể cần **mixing condition** hoặc model **exchangeable sequence**. Resampling hữu ích khi **bootstrap consistency** đúng, nhưng **cross-validation leakage** có thể làm estimate mất giá trị. Model overparameterized hiện đại có thể cho thấy **double descent** hoặc **benign overfitting** thay vì đường bias–variance đơn giản trong textbook.
