# C2 Vocabulary 126 — Bayesian computation and probabilistic modeling

This lesson follows a Bayesian analysis from prior assumptions to posterior computation, uncertainty summaries, and models that represent hidden processes.

Flow: **prior predictive → conjugate prior → Hamiltonian Monte Carlo → variational inference → Laplace approximation → importance sampling → sequential Monte Carlo → particle filter → Gaussian process → latent variable → generative model → posterior contraction → calibration curve → credible interval → highest posterior density → Bayes factor → probabilistic programming → prior sensitivity → posterior geometry → Markov blanket**.

## 1. prior predictive /ˈpraɪɚ prɪˈdɪktɪv/
**Part of speech:** noun
**Core meaning (English):** the distribution of possible data implied by a model and its prior assumptions before observing the actual data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân phối dự báo trước; hình dung kiểm tra xem các giả định ban đầu có tạo ra những dữ liệu hợp lý trước khi nhìn dữ liệu thật không.
**Grammar & collocations:** `prior-predictive check` — kiểm tra dự báo trước; `prior predictive distribution` — phân phối dự báo trước; `simulate from the prior predictive` — mô phỏng từ dự báo trước.
**Examples:** `The prior predictive assigned implausible probability to hospital sizes, so the researchers weakened the prior.` → Dự báo trước gán xác suất phi lý cho quy mô bệnh viện nên các nhà nghiên cứu làm yếu giả định trước.
**Liên kết tiếng Hàn:** `사전 예측 분포` (sajeon yecheuk bunpo) — phân phối dự báo trước.

## 2. conjugate prior /ˈkɑndʒəɡət ˈpraɪɚ/
**Part of speech:** noun
**Core meaning (English):** a prior distribution chosen so that combining it with a particular likelihood produces a posterior in the same distribution family.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân phối trước liên hợp; hình dung một dạng giả định được chọn để phép cập nhật giữ nguyên “họ” toán học và tính nhanh hơn.
**Grammar & collocations:** `conjugate-prior model` — mô hình phân phối trước liên hợp; `choose a conjugate prior` — chọn phân phối trước liên hợp; `conjugacy` — tính liên hợp.
**Examples:** `A conjugate prior made the binomial update transparent enough for the teaching example.` → Phân phối trước liên hợp khiến phép cập nhật nhị thức đủ rõ cho ví dụ giảng dạy.
**Liên kết tiếng Hàn:** `켤레 사전분포` (kyeolle sajeonbunpo) — phân phối trước liên hợp.

## 3. Hamiltonian Monte Carlo /ˌhæməlˈtoʊniən ˌmɑnti ˈkɑrloʊ/
**Part of speech:** noun
**Core meaning (English):** a Markov chain Monte Carlo method that uses simulated physical dynamics to explore a continuous posterior distribution efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** Monte Carlo Hamilton; hình dung thêm “động lượng” cho hạt mô phỏng để nó lướt qua không gian hậu nghiệm thay vì bước ngẫu nhiên chậm.
**Grammar & collocations:** `Hamiltonian Monte Carlo sampler` — bộ lấy mẫu Monte Carlo Hamilton; `Hamiltonian Monte Carlo trajectory` — quỹ đạo Monte Carlo Hamilton; `run Hamiltonian Monte Carlo` — chạy Monte Carlo Hamilton.
**Examples:** `Hamiltonian Monte Carlo explored the correlated parameters more efficiently than a random-walk sampler.` → Monte Carlo Hamilton khám phá các tham số tương quan hiệu quả hơn bộ lấy mẫu bước ngẫu nhiên.
**Liên kết tiếng Hàn:** `해밀토니안 몬테카를로` (haemiltonian montekarlo) — Monte Carlo Hamilton.

## 4. variational inference /ˌvɛriˈeɪʃənəl ˈɪnfərəns/
**Part of speech:** noun
**Core meaning (English):** an approximate Bayesian method that turns inference into an optimization problem over a simpler family of distributions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy luận biến phân; hình dung tìm một phân phối đơn giản nhưng gần hậu nghiệm thật nhất bằng cách tối ưu một tiêu chí.
**Grammar & collocations:** `mean-field variational inference` — suy luận biến phân trường trung bình; `variational-inference objective` — mục tiêu suy luận biến phân; `fit with variational inference` — khớp bằng suy luận biến phân.
**Examples:** `Variational inference produced a fast approximation for the large hierarchical model.` → Suy luận biến phân tạo xấp xỉ nhanh cho mô hình phân cấp lớn.
**Liên kết tiếng Hàn:** `변분 추론` (byeonbun churon) — suy luận biến phân.

## 5. Laplace approximation /ləˈplɑs əˌprɑksəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** an approximation that represents a posterior near its mode with a Gaussian distribution based on local curvature.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xấp xỉ Laplace; hình dung dùng đỉnh hậu nghiệm và độ cong quanh đỉnh để dựng một chuông Gaussian gần đúng.
**Grammar & collocations:** `Laplace-approximation posterior` — hậu nghiệm xấp xỉ Laplace; `second-order Laplace approximation` — xấp xỉ Laplace bậc hai; `apply a Laplace approximation` — áp dụng xấp xỉ Laplace.
**Examples:** `The Laplace approximation was accurate near the mode but missed the posterior's long tail.` → Xấp xỉ Laplace chính xác gần đỉnh nhưng bỏ sót đuôi dài của hậu nghiệm.
**Liên kết tiếng Hàn:** `라플라스 근사` (raplasseu geunsa) — xấp xỉ Laplace.

## 6. importance sampling /ɪmˈpɔrtəns ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** a method that estimates expectations under a difficult distribution by drawing from an easier proposal distribution and reweighting the samples.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lấy mẫu quan trọng; hình dung lấy mẫu ở nơi dễ lấy rồi gán trọng số để đại diện cho phân phối khó.
**Grammar & collocations:** `importance-sampling weight` — trọng số lấy mẫu quan trọng; `proposal distribution` — phân phối đề xuất; `estimate with importance sampling` — ước lượng bằng lấy mẫu quan trọng.
**Examples:** `Importance sampling failed when a few observations received nearly all the weight.` → Lấy mẫu quan trọng thất bại khi chỉ vài quan sát nhận gần như toàn bộ trọng số.
**Liên kết tiếng Hàn:** `중요도 샘플링` (jungyodo saempeulling) — lấy mẫu quan trọng.

## 7. sequential Monte Carlo /sɪˈkwɛnʃəl ˌmɑnti ˈkɑrloʊ/
**Part of speech:** noun
**Core meaning (English):** a family of particle-based methods that updates a collection of weighted samples as data arrive over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** Monte Carlo tuần tự; hình dung một đám hạt được cập nhật và tái lấy mẫu từng bước khi có quan sát mới.
**Grammar & collocations:** `sequential-Monte-Carlo algorithm` — thuật toán Monte Carlo tuần tự; `sequential Monte Carlo filter` — bộ lọc Monte Carlo tuần tự; `run sequential Monte Carlo` — chạy Monte Carlo tuần tự.
**Examples:** `Sequential Monte Carlo tracked the hidden state as the sensor streamed new measurements.` → Monte Carlo tuần tự theo dõi trạng thái ẩn khi cảm biến liên tục gửi phép đo mới.
**Liên kết tiếng Hàn:** `순차 몬테카를로` (suncha montekarlo) — Monte Carlo tuần tự.

## 8. particle filter /ˈpɑrtɪkəl ˈfɪltɚ/
**Part of speech:** noun
**Core meaning (English):** a sequential Monte Carlo algorithm that represents uncertainty about a changing hidden state with weighted particles.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ lọc hạt; hình dung nhiều giả thuyết nhỏ cùng chạy theo hệ thống, rồi giả thuyết phù hợp được giữ lại với trọng số cao hơn.
**Grammar & collocations:** `particle-filter estimate` — ước lượng bộ lọc hạt; `bootstrap particle filter` — bộ lọc hạt bootstrap; `deploy a particle filter` — triển khai bộ lọc hạt.
**Examples:** `The particle filter estimated the robot's position when its camera became unreliable.` → Bộ lọc hạt ước lượng vị trí robot khi camera trở nên không đáng tin.
**Liên kết tiếng Hàn:** `입자 필터` (ipja pilteo) — bộ lọc hạt.

## 9. Gaussian process /ˈɡaʊsiən ˈprɑsɛs/
**Part of speech:** noun
**Core meaning (English):** a probability model that defines a distribution over functions through assumptions about their joint behavior at any set of inputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quá trình Gaussian; hình dung không chọn một công thức duy nhất mà mô tả phân phối của cả họ hàm có độ trơn và tương quan nhất định.
**Grammar & collocations:** `Gaussian-process regression` — hồi quy quá trình Gaussian; `Gaussian-process kernel` — kernel quá trình Gaussian; `fit a Gaussian process` — khớp quá trình Gaussian.
**Examples:** `The Gaussian process interpolated the expensive experiment while reporting uncertainty at each new input.` → Quá trình Gaussian nội suy thí nghiệm tốn kém và báo độ bất định ở mỗi đầu vào mới.
**Liên kết tiếng Hàn:** `가우시안 과정` (gausian gwajeong) — quá trình Gaussian.

## 10. latent variable /ˈleɪtənt ˈvɛriəbəl/
**Part of speech:** noun
**Core meaning (English):** a variable that is not observed directly but is introduced to explain patterns in observed data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến ẩn; hình dung một nguyên nhân không nhìn thấy trực tiếp nhưng giúp giải thích nhiều quan sát cùng lúc.
**Grammar & collocations:** `latent-variable model` — mô hình biến ẩn; `infer a latent variable` — suy luận biến ẩn; `latent-variable structure` — cấu trúc biến ẩn.
**Examples:** `The model used a latent variable to represent a patient's unobserved disease severity.` → Mô hình dùng biến ẩn để biểu diễn mức độ bệnh không quan sát được của bệnh nhân.
**Liên kết tiếng Hàn:** `잠재 변수` (jamjae byeonsu) — biến ẩn.

## 11. generative model /ˈdʒɛnəˌreɪtɪv ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that represents how data could be generated and can often produce new samples resembling the modeled distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình sinh; hình dung học cơ chế tạo dữ liệu để vừa đánh giá xác suất vừa tạo ra quan sát mới.
**Grammar & collocations:** `probabilistic generative model` — mô hình sinh xác suất; `generative-model likelihood` — likelihood của mô hình sinh; `sample from a generative model` — lấy mẫu từ mô hình sinh.
**Examples:** `The generative model produced plausible synthetic patients for a privacy-preserving simulation.` → Mô hình sinh tạo bệnh nhân tổng hợp hợp lý cho mô phỏng bảo vệ quyền riêng tư.
**Liên kết tiếng Hàn:** `생성 모델` (saengseong model) — mô hình sinh.

## 12. posterior contraction /pɑˈstɪriɚ kənˈtrækʃən/
**Part of speech:** noun
**Core meaning (English):** the concentration of a posterior distribution around the true parameter or function as more informative data become available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** co hẹp hậu nghiệm; hình dung vùng bất định thu nhỏ dần quanh giá trị thật khi dữ liệu tăng.
**Grammar & collocations:** `posterior-contraction rate` — tốc độ co hẹp hậu nghiệm; `theory of posterior contraction` — lý thuyết co hẹp hậu nghiệm; `establish posterior contraction` — chứng minh co hẹp hậu nghiệm.
**Examples:** `The theorem guaranteed posterior contraction when the prior covered the true function.` → Định lý bảo đảm hậu nghiệm co hẹp khi phân phối trước bao phủ hàm thật.
**Liên kết tiếng Hàn:** `사후 분포 수축` (sahu bunpo suchuk) — co hẹp hậu nghiệm.

## 13. calibration curve /ˌkæləˈbreɪʃən kɝv/
**Part of speech:** noun
**Core meaning (English):** a plot that compares predicted probabilities or values with the frequencies or outcomes actually observed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường cong hiệu chuẩn; hình dung kiểm tra lời dự báo “70%” có đúng khoảng 70% số lần hay không.
**Grammar & collocations:** `probability calibration curve` — đường cong hiệu chuẩn xác suất; `plot a calibration curve` — vẽ đường cong hiệu chuẩn; `calibration-curve deviation` — độ lệch đường cong hiệu chuẩn.
**Examples:** `The calibration curve showed that the model was overconfident on rare events.` → Đường cong hiệu chuẩn cho thấy mô hình quá tự tin về các sự kiện hiếm.
**Liên kết tiếng Hàn:** `보정 곡선` (bojeong gokseon) — đường cong hiệu chuẩn.

## 14. credible interval /ˈkrɛdəbəl ˈɪntɚvəl/
**Part of speech:** noun
**Core meaning (English):** a Bayesian interval containing a specified posterior probability of a parameter, given the model and data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng tin cậy Bayesian; hình dung một khoảng chứa, chẳng hạn, 95% khối lượng hậu nghiệm cho giá trị tham số.
**Grammar & collocations:** `95-percent credible interval` — khoảng tin cậy Bayesian 95%; `posterior credible interval` — khoảng tin cậy hậu nghiệm; `report a credible interval` — báo cáo khoảng tin cậy Bayesian.
**Examples:** `The 95-percent credible interval for the risk ratio excluded one only narrowly.` → Khoảng tin cậy Bayesian 95% của tỷ số nguy cơ chỉ vừa đủ loại giá trị một.
**Liên kết tiếng Hàn:** `신용 구간` (sin-yong gugan) — khoảng tin cậy Bayesian.

## 15. highest posterior density /ˈhaɪəst pɑˈstɪriɚ ˈdɛnsəti/
**Part of speech:** noun
**Core meaning (English):** the shortest interval or region containing a chosen amount of posterior probability, with every point inside having density at least as high as every point outside.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng mật độ hậu nghiệm cao nhất; hình dung chọn vùng “đậm” nhất của phân phối thay vì chỉ lấy hai phân vị đối xứng.
**Grammar & collocations:** `highest-posterior-density interval` — khoảng mật độ hậu nghiệm cao nhất; `HPD region` — vùng HPD; `compute the highest posterior density` — tính vùng mật độ hậu nghiệm cao nhất.
**Examples:** `The highest posterior density interval was asymmetric because the parameter had a hard lower bound.` → Khoảng mật độ hậu nghiệm cao nhất không đối xứng vì tham số có cận dưới cứng.
**Liên kết tiếng Hàn:** `최고 사후 밀도` (choego sahu mildo) — mật độ hậu nghiệm cao nhất.

## 16. Bayes factor /ˈbeɪz ˈfæktɚ/
**Part of speech:** noun
**Core meaning (English):** the ratio of how well two competing models predict the observed data, used as Bayesian evidence for one model over another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ số Bayes; hình dung so sánh mức hai mô hình giải thích dữ liệu, có tính đến cả độ phức tạp do phân phối trước.
**Grammar & collocations:** `Bayes-factor comparison` — so sánh bằng hệ số Bayes; `log Bayes factor` — log hệ số Bayes; `interpret a Bayes factor` — diễn giải hệ số Bayes.
**Examples:** `The Bayes factor favored the model with a nonlinear dose response.` → Hệ số Bayes ủng hộ mô hình có đáp ứng liều phi tuyến.
**Liên kết tiếng Hàn:** `베이즈 인자` (beijeu inja) — hệ số Bayes.

## 17. probabilistic programming /ˌprɑbəbəˈlɪstɪk ˈproʊɡræmɪŋ/
**Part of speech:** noun
**Core meaning (English):** a programming approach in which users specify a generative probability model and a system performs inference for it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lập trình xác suất; hình dung viết cấu trúc mô hình như chương trình rồi để hệ thống tự tính các phân phối chưa biết.
**Grammar & collocations:** `probabilistic-programming language` — ngôn ngữ lập trình xác suất; `probabilistic-programming system` — hệ thống lập trình xác suất; `implement a model in probabilistic programming` — triển khai mô hình bằng lập trình xác suất.
**Examples:** `Probabilistic programming made it easy to add a missing-data mechanism to the model.` → Lập trình xác suất giúp dễ dàng thêm cơ chế thiếu dữ liệu vào mô hình.
**Liên kết tiếng Hàn:** `확률 프로그래밍` (hwakryul peurogeuraeming) — lập trình xác suất.

## 18. prior sensitivity /ˈpraɪɚ ˌsɛnsəˈtɪvəti/
**Part of speech:** noun
**Core meaning (English):** the extent to which posterior conclusions change when reasonable prior assumptions are changed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ nhạy với phân phối trước; hình dung xem kết luận có lung lay nhiều khi thay đổi giả định ban đầu một cách hợp lý hay không.
**Grammar & collocations:** `prior-sensitivity analysis` — phân tích độ nhạy với phân phối trước; `assess prior sensitivity` — đánh giá độ nhạy với phân phối trước; `prior-sensitive result` — kết quả nhạy với phân phối trước.
**Examples:** `The authors reported prior sensitivity because the dataset contained few observations.` → Tác giả báo cáo độ nhạy với phân phối trước vì bộ dữ liệu có ít quan sát.
**Liên kết tiếng Hàn:** `사전분포 민감도` (sajeonbunpo mingamdo) — độ nhạy với phân phối trước.

## 19. posterior geometry /pɑˈstɪriɚ dʒiˈɑmətri/
**Part of speech:** noun
**Core meaning (English):** the shape, curvature, scale, and dependence structure of a posterior distribution that affect computation and interpretation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hình học hậu nghiệm; hình dung địa hình của phân phối—thung lũng hẹp, sườn dốc hoặc các hướng tương quan—quyết định bộ lấy mẫu di chuyển ra sao.
**Grammar & collocations:** `posterior-geometry diagnostic` — chẩn đoán hình học hậu nghiệm; `difficult posterior geometry` — hình học hậu nghiệm khó; `explore posterior geometry` — khám phá hình học hậu nghiệm.
**Examples:** `The funnel-shaped posterior geometry caused divergent transitions in the sampler.` → Hình học hậu nghiệm dạng phễu gây ra các chuyển tiếp phân kỳ trong bộ lấy mẫu.
**Liên kết tiếng Hàn:** `사후 분포 기하` (sahu bunpo giha) — hình học hậu nghiệm.

## 20. Markov blanket /ˈmɑrkɔv ˈblæŋkət/
**Part of speech:** noun
**Core meaning (English):** the smallest set of variables that shields a node from the rest of a probabilistic graphical model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lớp chăn Markov; hình dung các biến cha, con và đồng cha bao quanh một nút, khiến phần còn lại không thêm thông tin trực tiếp.
**Grammar & collocations:** `Markov-blanket structure` — cấu trúc lớp chăn Markov; `identify a Markov blanket` — xác định lớp chăn Markov; `conditional independence from the Markov blanket` — độc lập có điều kiện ngoài lớp chăn Markov.
**Examples:** `The Markov blanket of the symptom included the disease state and the measured treatment response.` → Lớp chăn Markov của triệu chứng gồm trạng thái bệnh và đáp ứng điều trị được đo.
**Liên kết tiếng Hàn:** `마르코프 담요` (mareukopeu damyo) — lớp chăn Markov.

## Review in context

A Bayesian analyst checks the **prior predictive** and may choose a **conjugate prior** for a simple update. For difficult posteriors, **Hamiltonian Monte Carlo**, **variational inference**, or a **Laplace approximation** may be used; **importance sampling** and **sequential Monte Carlo** offer other routes, including a **particle filter** for changing states. A **Gaussian process** models functions, while a **latent variable** and a **generative model** represent hidden structure. More data can produce **posterior contraction**. A **calibration curve**, **credible interval**, and **highest posterior density** region summarize uncertainty, while a **Bayes factor** compares models. **Probabilistic programming** expresses the model, **prior sensitivity** tests assumptions, and **posterior geometry** diagnoses computation. In a graphical model, a **Markov blanket** identifies the variables that directly shield a node.

**Bản dịch tiếng Việt:**

Nhà phân tích Bayesian kiểm tra phân phối dự báo trước và có thể chọn phân phối trước liên hợp cho phép cập nhật đơn giản. Với hậu nghiệm khó, có thể dùng Monte Carlo Hamilton, suy luận biến phân hoặc xấp xỉ Laplace; lấy mẫu quan trọng và Monte Carlo tuần tự cung cấp các con đường khác, trong đó có bộ lọc hạt cho trạng thái thay đổi. Quá trình Gaussian mô hình hóa các hàm, còn biến ẩn và mô hình sinh biểu diễn cấu trúc không quan sát. Dữ liệu nhiều hơn có thể làm hậu nghiệm co hẹp. Đường cong hiệu chuẩn, khoảng tin cậy Bayesian và vùng mật độ hậu nghiệm cao nhất tóm tắt độ bất định, còn hệ số Bayes so sánh các mô hình. Lập trình xác suất diễn tả mô hình, độ nhạy với phân phối trước kiểm tra các giả định, còn hình học hậu nghiệm chẩn đoán việc tính toán. Trong mô hình đồ thị, lớp chăn Markov xác định các biến trực tiếp che chắn một nút.
