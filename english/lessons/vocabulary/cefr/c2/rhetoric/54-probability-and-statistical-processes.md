# C2 Vocabulary 54 — Probability and statistical processes

This lesson describes distributions, dependence, simulation, and linear-algebra tools used to reason about uncertain systems. It emphasizes the assumptions behind estimates rather than treating every numerical output as self-explanatory.

Flow: **deterministic → ergodic → stationary → heterogeneity → kurtosis → skewness → covariance → eigenvalue → eigenvector → orthogonal → variance reduction → bootstrap → jackknife → Monte Carlo → Markov chain → martingale → random walk → autocorrelation → heteroskedasticity → exchangeability**.

## 1. deterministic /dɪˌtɝməˈnɪstɪk/
**Part of speech:** adjective
**Core meaning (English):** governed by fixed rules so that the same initial conditions produce the same outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tất định; hình ảnh cùng đầu vào luôn đi theo một đường duy nhất đến cùng kết quả.
**Grammar & collocations:** `deterministic model` — mô hình tất định; `deterministic process` — quá trình tất định.
**Examples:** `The deterministic simulation produced the same trajectory every time it was run.` → Mô phỏng tất định tạo cùng quỹ đạo mỗi lần chạy.
**Liên kết tiếng Hàn:** `결정론적` (gyeoljeongronjeok) — mang tính tất định.

## 2. ergodic /ɝˈɡɑdɪk/
**Part of speech:** adjective
**Core meaning (English):** describing a process whose long-run time averages represent averages across its possible states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ergodic; hình ảnh quan sát một hệ đủ lâu để phản ánh toàn bộ trạng thái có thể của nó.
**Grammar & collocations:** `ergodic process` — quá trình ergodic; `ergodic assumption` — giả định ergodic.
**Examples:** `The model assumes an ergodic process so one long record can estimate population behavior.` → Mô hình giả định quá trình ergodic để một chuỗi dài có thể ước tính hành vi quần thể.
**Liên kết tiếng Hàn:** `에르고딕` (eregodik) — ergodic.

## 3. stationary /ˈsteɪʃəˌnɛri/
**Part of speech:** adjective
**Core meaning (English):** having statistical properties such as mean and variance that remain stable over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dừng theo nghĩa thống kê; hình ảnh chuỗi dữ liệu giữ tính chất nền dù thời gian trôi.
**Grammar & collocations:** `stationary time series` — chuỗi thời gian dừng; `test for stationarity` — kiểm tra tính dừng.
**Examples:** `The analyst differenced the series because its trend violated stationarity.` → Nhà phân tích lấy sai phân vì xu hướng vi phạm tính dừng.
**Liên kết tiếng Hàn:** `정상성` (jeongsangseong) — tính dừng.

## 4. heterogeneity /ˌhɛtərədʒəˈniəti/
**Part of speech:** noun
**Core meaning (English):** the presence of meaningful differences among units, groups, or effects in a population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính không đồng nhất; hình ảnh các nhóm phản ứng khác nhau thay vì cùng một giá trị trung bình.
**Grammar & collocations:** `unobserved heterogeneity` — không đồng nhất không quan sát; `treatment-effect heterogeneity` — không đồng nhất hiệu ứng điều trị.
**Examples:** `The pooled estimate concealed heterogeneity between urban and rural sites.` → Ước lượng gộp che giấu sự không đồng nhất giữa các địa điểm đô thị và nông thôn.
**Liên kết tiếng Hàn:** `이질성` (ijilseong) — tính không đồng nhất.

## 5. kurtosis /kɝˈtoʊsɪs/
**Part of speech:** noun
**Core meaning (English):** a measure describing the heaviness of a distribution's tails relative to a normal distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ nhọn/đuôi phân phối; hình ảnh xem dữ liệu có nhiều giá trị cực đoan hơn dự kiến không.
**Grammar & collocations:** `excess kurtosis` — độ nhọn dư; `high kurtosis` — độ nhọn cao.
**Examples:** `High kurtosis warned that rare extreme losses were more common than a bell curve suggested.` → Độ nhọn cao cảnh báo tổn thất cực đoan hiếm gặp thường hơn đường cong chuông gợi ý.
**Liên kết tiếng Hàn:** `첨도` (cheomdo) — độ nhọn phân phối.

## 6. skewness /ˈskjuːnəs/
**Part of speech:** noun
**Core meaning (English):** a measure of the asymmetry of a probability distribution around its mean.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ lệch; hình ảnh đuôi phân phối kéo dài về một phía.
**Grammar & collocations:** `positive skewness` — độ lệch dương; `measure skewness` — đo độ lệch.
**Examples:** `Positive skewness meant a few very large claims pulled the average upward.` → Độ lệch dương nghĩa là vài yêu cầu rất lớn kéo trung bình lên.
**Liên kết tiếng Hàn:** `왜도` (waedo) — độ lệch phân phối.

## 7. covariance /koʊˈvɛəriəns/
**Part of speech:** noun
**Core meaning (English):** a measure of how two variables change together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiệp phương sai; hình ảnh hai biến cùng tăng hoặc một tăng khi biến kia giảm.
**Grammar & collocations:** `sample covariance` — hiệp phương sai mẫu; `covariance matrix` — ma trận hiệp phương sai.
**Examples:** `The covariance matrix captured relationships among the asset returns.` → Ma trận hiệp phương sai nắm quan hệ giữa các mức sinh lời tài sản.
**Liên kết tiếng Hàn:** `공분산` (gongbunsan) — hiệp phương sai.

## 8. eigenvalue /ˈaɪɡənˌvæljuː/
**Part of speech:** noun
**Core meaning (English):** a scalar that describes how a linear transformation stretches an associated eigenvector.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trị riêng; hình ảnh một hướng đặc biệt bị kéo dài theo một hệ số riêng.
**Grammar & collocations:** `largest eigenvalue` — trị riêng lớn nhất; `eigenvalue decomposition` — phân rã trị riêng.
**Examples:** `The largest eigenvalue summarized the dominant direction of variation.` → Trị riêng lớn nhất tóm tắt hướng biến thiên chủ đạo.
**Liên kết tiếng Hàn:** `고유값` (goyugap) — trị riêng.

## 9. eigenvector /ˈaɪɡənˌvɛktər/
**Part of speech:** noun
**Core meaning (English):** a nonzero vector whose direction remains unchanged by a linear transformation apart from scaling.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vector riêng; hình ảnh một hướng vẫn giữ nguyên khi phép biến đổi chỉ kéo dài hoặc thu ngắn nó.
**Grammar & collocations:** `principal eigenvector` — vector riêng chính; `eigenvector basis` — cơ sở vector riêng.
**Examples:** `The principal eigenvector defined the first component in the dimensionality reduction.` → Vector riêng chính xác định thành phần đầu trong giảm chiều.
**Liên kết tiếng Hàn:** `고유 벡터` (goyu bekteo) — vector riêng.

## 10. orthogonal /ɔrˈθɑɡənəl/
**Part of speech:** adjective
**Core meaning (English):** mathematically perpendicular or independent under a specified inner product.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trực giao; hình ảnh hai hướng gặp nhau vuông góc và không chia sẻ thành phần theo phép đo đã chọn.
**Grammar & collocations:** `orthogonal vectors` — các vector trực giao; `orthogonal design` — thiết kế trực giao.
**Examples:** `The analysis chose orthogonal contrasts so each comparison carried separate information.` → Phân tích chọn các tương phản trực giao để mỗi so sánh mang thông tin riêng.
**Liên kết tiếng Hàn:** `직교` (jikgyo) — trực giao.

## 11. variance reduction /ˈvɛəriəns rɪˌdʌkʃən/
**Part of speech:** noun phrase
**Core meaning (English):** a technique for making a simulation estimator more precise without proportionally increasing the number of samples.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm phương sai; hình ảnh điều chỉnh cách lấy mẫu để ước lượng bớt dao động.
**Grammar & collocations:** `variance-reduction technique` — kỹ thuật giảm phương sai; `achieve variance reduction` — đạt giảm phương sai.
**Examples:** `Antithetic sampling provided variance reduction in the pricing simulation.` → Lấy mẫu đối ngẫu giúp giảm phương sai trong mô phỏng định giá.
**Liên kết tiếng Hàn:** `분산 감소` (bunsan gamso) — giảm phương sai.

## 12. bootstrap /ˈbuːtˌstræp/
**Part of speech:** noun
**Core meaning (English):** a resampling method that estimates uncertainty by repeatedly sampling observations from the available data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bootstrap; hình ảnh lấy mẫu lại từ chính mẫu hiện có để dựng nhiều phiên bản giả lập.
**Grammar & collocations:** `bootstrap confidence interval` — khoảng tin cậy bootstrap; `bootstrap resampling` — lấy mẫu lại bootstrap.
**Examples:** `The bootstrap produced a confidence interval without assuming a normal sampling distribution.` → Bootstrap tạo khoảng tin cậy mà không giả định phân phối lấy mẫu chuẩn.
**Liên kết tiếng Hàn:** `부트스트랩` (buteuseuteuraep) — phương pháp lấy mẫu lại.

## 13. jackknife /ˈdʒækˌnaɪf/
**Part of speech:** noun
**Core meaning (English):** a resampling method that repeatedly recomputes an estimate after leaving out one observation or group at a time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** jackknife; hình ảnh lần lượt rút một quan sát để xem kết quả phụ thuộc vào điểm nào.
**Grammar & collocations:** `jackknife estimate` — ước lượng jackknife; `jackknife variance` — phương sai jackknife.
**Examples:** `A jackknife estimate showed that one influential case drove much of the effect.` → Ước lượng jackknife cho thấy một trường hợp ảnh hưởng chi phối phần lớn hiệu ứng.
**Liên kết tiếng Hàn:** `잭나이프` (jaekna ipeu) — phương pháp jackknife.

## 14. Monte Carlo /ˌmɑnti ˈkɑrloʊ/
**Part of speech:** adjective
**Core meaning (English):** involving repeated random simulation to approximate a numerical result or distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** Monte Carlo; hình ảnh tung ngẫu nhiên rất nhiều lần để ước tính điều khó tính trực tiếp.
**Grammar & collocations:** `Monte Carlo simulation` — mô phỏng Monte Carlo; `Monte Carlo estimate` — ước lượng Monte Carlo.
**Examples:** `A Monte Carlo simulation propagated uncertainty through the entire risk model.` → Mô phỏng Monte Carlo truyền độ bất định qua toàn bộ mô hình rủi ro.
**Liên kết tiếng Hàn:** `몬테카를로` (monte kallo) — Monte Carlo.

## 15. Markov chain /ˈmɑrkɔv tʃeɪn/
**Part of speech:** noun phrase
**Core meaning (English):** a stochastic process in which the next state depends on the current state rather than the full history.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi Markov; hình ảnh bước kế tiếp chỉ nhìn vị trí hiện tại, không cần nhớ cả hành trình.
**Grammar & collocations:** `finite-state Markov chain` — chuỗi Markov trạng thái hữu hạn; `Markov-chain transition` — chuyển trạng thái Markov.
**Examples:** `The model represented customer movement between plans as a Markov chain.` → Mô hình biểu diễn chuyển dịch khách hàng giữa các gói bằng chuỗi Markov.
**Liên kết tiếng Hàn:** `마르코프 연쇄` (mareuk opeu yeonswae) — chuỗi Markov.

## 16. martingale /ˈmɑrtɪnɡeɪl/
**Part of speech:** noun
**Core meaning (English):** a stochastic process whose conditional expected future value equals its present value given current information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** martingale; hình ảnh dự báo công bằng: thông tin hiện tại không tạo lợi thế kỳ vọng thêm.
**Grammar & collocations:** `martingale difference` — sai phân martingale; `martingale process` — quá trình martingale.
**Examples:** `Under the risk-neutral measure, the discounted price is modeled as a martingale.` → Dưới độ đo trung lập rủi ro, giá chiết khấu được mô hình hóa như martingale.
**Liên kết tiếng Hàn:** `마팅게일` (matinggeil) — quá trình martingale.

## 17. random walk /ˈrændəm wɔk/
**Part of speech:** noun phrase
**Core meaning (English):** a process formed by successive random steps whose cumulative position changes over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bước đi ngẫu nhiên; hình ảnh mỗi bước trái hoặc phải tạo quỹ đạo không định trước.
**Grammar & collocations:** `one-dimensional random walk` — bước đi ngẫu nhiên một chiều; `random-walk model` — mô hình bước đi ngẫu nhiên.
**Examples:** `The price series looked closer to a random walk than to a predictable trend.` → Chuỗi giá trông giống bước đi ngẫu nhiên hơn là xu hướng dự đoán được.
**Liên kết tiếng Hàn:** `무작위 보행` (mujagwi bohaeng) — bước đi ngẫu nhiên.

## 18. autocorrelation /ˌɔtoʊkɔrəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** correlation between observations of the same variable at different time lags.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tự tương quan; hình ảnh giá trị hôm nay vẫn liên hệ với chính chuỗi ở ngày trước.
**Grammar & collocations:** `serial autocorrelation` — tự tương quan chuỗi; `autocorrelation function` — hàm tự tương quan.
**Examples:** `Autocorrelation in the residuals indicated that the time-series model was incomplete.` → Tự tương quan trong phần dư cho thấy mô hình chuỗi thời gian chưa đầy đủ.
**Liên kết tiếng Hàn:** `자기 상관` (jagi sanggwan) — tự tương quan.

## 19. heteroskedasticity /ˌhɛtəroʊskəˈdæstɪsəti/
**Part of speech:** noun
**Core meaning (English):** a condition in which the variance of errors changes across observations or levels of a predictor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương sai sai số thay đổi; hình ảnh đám điểm dữ liệu xòe rộng hơn khi biến giải thích tăng.
**Grammar & collocations:** `detect heteroskedasticity` — phát hiện phương sai thay đổi; `heteroskedasticity-robust inference` — suy luận bền vững với phương sai thay đổi.
**Examples:** `The analyst used robust inference after detecting heteroskedasticity in the residuals.` → Nhà phân tích dùng suy luận bền vững sau khi phát hiện phương sai thay đổi trong phần dư.
**Liên kết tiếng Hàn:** `이분산성` (ibunsanseong) — tính phương sai thay đổi.

## 20. exchangeability /ɪksˌtʃeɪndʒəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the condition that the joint probability distribution remains unchanged when observations are permuted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính hoán đổi; hình ảnh đổi thứ tự các quan sát mà phân phối chung vẫn không đổi.
**Grammar & collocations:** `assume exchangeability` — giả định tính hoán đổi; `partial exchangeability` — tính hoán đổi từng phần.
**Examples:** `The Bayesian model assumes exchangeability within each study site.` → Mô hình Bayes giả định tính hoán đổi trong mỗi địa điểm nghiên cứu.
**Liên kết tiếng Hàn:** `교환 가능성` (gyohwan ganeungseong) — khả năng hoán đổi.

## Review in context

The analyst contrasted a **deterministic** model with an **ergodic**, **stationary** process and measured **heterogeneity**, **kurtosis**, and **skewness**. A **covariance** matrix supplied an **eigenvalue** and **eigenvector** basis with **orthogonal** components. **Variance reduction**, **bootstrap**, and **jackknife** methods improved uncertainty estimates, while a **Monte Carlo** simulation explored a **Markov chain** and its **martingale** property. A **random walk** showed **autocorrelation**, **heteroskedasticity**, and limited **exchangeability**.

**Bản dịch tiếng Việt:**

Nhà phân tích đối chiếu mô hình tất định với một quá trình ergodic và dừng, rồi đo tính không đồng nhất, độ nhọn và độ lệch. Ma trận hiệp phương sai cung cấp cơ sở trị riêng và vector riêng với các thành phần trực giao. Các phương pháp giảm phương sai, bootstrap và jackknife cải thiện ước lượng bất định, còn mô phỏng Monte Carlo khảo sát chuỗi Markov và tính chất martingale của nó. Một bước đi ngẫu nhiên cho thấy tự tương quan, phương sai sai số thay đổi và tính hoán đổi hạn chế.
