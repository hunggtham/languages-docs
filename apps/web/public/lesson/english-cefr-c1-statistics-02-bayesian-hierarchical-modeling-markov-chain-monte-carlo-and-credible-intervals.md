# C1 Vocabulary 02 — Bayesian hierarchical modeling, Markov chain Monte Carlo, and credible intervals

This lesson explores advanced statistical concepts in Bayesian hierarchical modeling, Markov chain Monte Carlo (MCMC) sampling, and posterior inference, designed for C1-level learners mastering quantitative data science and advanced probability theory in Contemporary General American English.

## 1. Bayesian hierarchical model
- **American IPA**: /ˈbeɪziən ˌhaɪəˈrɑːrkɪkəl ˈmɑdəl/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object, or noun modifier).
- **Core meaning — English**: A statistical model structured in multiple levels where parameters are themselves assigned prior probability distributions, allowing information to be shared across groups (partial pooling).
- **Core meaning & mental image — Tiếng Việt**: Mô hình phân cấp Bayes — cấu trúc thống kê nhiều tầng trong đó các tham số được gán phân phối xác suất tiên nghiệm riêng, cho phép chia sẻ thông tin giữa các nhóm (gom gộp một phần). Hình ảnh tâm trí: một hệ thống phân cấp tổ chức doanh nghiệp nơi các cấp quản lý dưới chia sẻ thông tin với cấp trên, đồng thời giữ lại đặc thù riêng.
- **Grammar & collocations**: 
  - fit a Bayesian hierarchical model (khớp mô hình phân cấp Bayes)
  - Bayesian hierarchical model specification (đặc tả mô hình phân cấp Bayes)
  - hierarchical model structure (cấu trúc mô hình phân cấp)
- **Register & nuance**: Formal, academic, statistical. Used in advanced data science, epidemiology, and econometrics.
- **Examples**:
  - We fitted a Bayesian hierarchical model to account for regional variations in patient recovery rates. -> *Chúng tôi đã khớp một mô hình phân cấp Bayes để tính đến các biến động theo vùng về tỷ lệ hồi phục của bệnh nhân.*
  - The hierarchical model pools data across hospitals while estimating distinct effects for each facility. -> *Mô hình phân cấp gom gộp dữ liệu qua các bệnh viện trong khi ước tính các hiệu ứng riêng biệt cho từng cơ sở.*
- **Liên kết tiếng Hàn**: 베이지안 계층 모델 (Bayesian gyecheung model) — kết hợp giữa phương pháp phỏng đoán Bayes và cấu trúc phân cấp dữ liệu trong thống kê định lượng.

## 2. Markov chain Monte Carlo
- **American IPA**: /ˈmɑrkˌfɔv ˈʧeɪn ˈmɑnti ˈkɑrloʊ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: A class of algorithms for sampling from a probability distribution by constructing a Markov chain that has the desired distribution as its equilibrium distribution.
- **Core meaning & mental image — Tiếng Việt**: Chuỗi Markov Monte Carlo (MCMC) — lớp thuật toán mô phỏng lấy mẫu từ phân phối xác suất bằng cách xây dựng một chuỗi Markov có phân phối cân bằng trùng với phân phối mục tiêu. Hình ảnh tâm trí: một người đi lang thang ngẫu nhiên nhưng theo quy tắc thông minh sao cho cuối cùng họ ghé thăm các địa điểm với tần suất đúng tỷ lệ với độ cao của một ngọn núi xác suất.
- **Grammar & collocations**: 
  - run an MCMC algorithm (chạy thuật toán MCMC)
  - MCMC sampling efficiency (hiệu quả lấy mẫu MCMC)
  - convergence of MCMC chains (sự hội tụ của các chuỗi MCMC)
- **Register & nuance**: Technical, academic. Essential term in computational statistics and Bayesian inference.
- **Examples**:
  - Running four parallel MCMC chains helps ensure that the sampler has thoroughly explored the parameter space. -> *Chạy bốn chuỗi MCMC song song giúp đảm bảo rằng bộ lấy mẫu đã khám phá kỹ lưỡng không gian tham số.*
  - Due to the high dimensionality of the model, the MCMC simulation required several hours to complete. -> *Do số chiều cao của mô hình, mô phỏng MCMC mất vài giờ để hoàn thành.*
- **Liên kết tiếng Hàn**: 마르코프 체인 몬테 카를로 (Markopeu chein monte kalleuro) — phương pháp mô phỏng tính toán xác suất dựa trên chuỗi Markov.

## 3. credible interval boundary
- **American IPA**: /ˈkrɛdəbəl ˈɪntərvəl ˈbaʊndəri/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object, or prepositional complement).
- **Core meaning — English**: The lower or upper limit of a Bayesian posterior interval within which an unobserved parameter falls with a specified subjective probability.
- **Core meaning & mental image — Tiếng Việt**: Ranh giới khoảng tin cậy (Bayes) — giới hạn dưới hoặc trên của một khoảng hậu nghiệm trong đó tham số chưa biết nằm bên trong với xác suất chủ quan xác định. Hình ảnh tâm trí: hai cột mốc biên giới xác định vùng an toàn mà bên trong đó chứa phần lớn giá trị thực của tham số.
- **Grammar & collocations**: 
  - calculate credible interval boundaries (tính toán các ranh giới khoảng tin cậy)
  - highest posterior density credible interval (khoảng tin cậy mật độ hậu nghiệm cao nhất)
  - 95% credible interval boundary (ranh giới khoảng tin cậy 95%)
- **Register & nuance**: Academic, statistical. Contrasted with frequentist confidence intervals.
- **Examples**:
  - The 95% credible interval boundaries for the regression coefficient exclude zero, indicating a significant effect. -> *Các ranh giới khoảng tin cậy 95% cho hệ số hồi quy loại trừ số không, cho thấy một hiệu ứng có ý nghĩa.*
  - Interpreting the credible interval boundary requires understanding the prior distribution assumptions. -> *Việc diễn giải ranh giới khoảng tin cậy đòi hỏi phải hiểu các giả định phân phối tiên nghiệm.*
- **Liên kết tiếng Hàn**: 신용 구간 경계 (sinyong gugan gyeonggye) — ranh giới khoảng có độ tin cậy trong thống kê Bayes.

## 4. prior distribution specification
- **American IPA**: /ˈpraɪər ˌdɪstrəˈbjuʃən ˌspɛsəfəˈkeɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or direct object).
- **Core meaning — English**: The formal mathematical definition and parameterization of beliefs or historical data regarding a model parameter before observing current data.
- **Core meaning & mental image — Tiếng Việt**: Đặc tả phân phối tiên nghiệm — định nghĩa toán học và tham số hóa chính thức các quan niệm hoặc dữ liệu lịch sử về tham số mô hình trước khi quan sát dữ liệu hiện tại. Hình ảnh tâm trí: việc thiết lập nền móng kiến trúc dựa trên kinh nghiệm xây dựng từ các công trình trước khi đặt viên gạch đầu tiên lên mảnh đất mới.
- **Grammar & collocations**: 
  - informative prior distribution specification (đặc tả phân phối tiên nghiệm có thông tin)
  - sensitivity to prior distribution specification (độ nhạy với đặc tả phân phối tiên nghiệm)
  - refine prior specification (cải tiến đặc tả tiên nghiệm)
- **Register & nuance**: Formal, academic. Crucial step in Bayesian workflow design.
- **Examples**:
  - Careful prior distribution specification is crucial when sample sizes are relatively small. -> *Đặc tả phân phối tiên nghiệm cẩn thận là rất quan trọng khi kích thước mẫu tương đối nhỏ.*
  - The authors tested alternative prior specifications to verify the robustness of their findings. -> *Các tác giả đã kiểm tra các đặc tả tiên nghiệm thay thế để xác minh tính robust của các phát hiện của họ.*
- **Liên kết tiếng Hàn**: 사전 분포 명세 (sajeon bunpo myeongse) — việc định nghĩa phân phối xác suất ban đầu trước khi cập nhật dữ liệu.

## 5. posterior probability distribution
- **American IPA**: /pɑˈstɪriər ˌprɑbəˈbɪləti ˌdɪstrəˈbjuʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: The updated probability distribution for a model parameter, combining prior beliefs and observed data via Bayes' theorem.
- **Core meaning & mental image — Tiếng Việt**: Phân phối xác suất hậu nghiệm — phân phối xác suất đã được cập nhật cho một tham số mô hình, kết hợp niềm tin tiên nghiệm và dữ liệu quan sát thông qua định lý Bayes. Hình ảnh tâm trí: bức tranh toàn cảnh về sự hiểu biết của chúng ta sau khi đã điều chỉnh ống kính qua lăng kính dữ liệu thực tế mới.
- **Grammar & collocations**: 
  - derive the posterior probability distribution (rút ra phân phối xác suất hậu nghiệm)
  - shape of the posterior distribution (hình dạng của phân phối hậu nghiệm)
  - summarize the posterior distribution (tóm tắt phân phối hậu nghiệm)
- **Register & nuance**: Formal, mathematical. The central output of Bayesian data analysis.
- **Examples**:
  - Bayes' theorem allows us to transform prior knowledge into a rich posterior probability distribution. -> *Định lý Bayes cho phép chúng ta chuyển đổi kiến thức tiên nghiệm thành một phân phối xác suất hậu nghiệm phong phú.*
  - We visualized the joint posterior probability distribution using contour plots. -> *Chúng ta đã trực quan hóa phân phối xác suất hậu nghiệm đồng thời bằng các biểu đồ đường mức.*
- **Liên kết tiếng Hàn**: 사후 확률 분포 (saho hwakjul bunpo) — phân phối xác suất thu được sau khi quan sát dữ liệu và áp dụng định lý Bayes.

## 6. likelihood function parameter
- **American IPA**: /ˈlaɪklihʊd ˈfʌŋkʃən pəˈræmətər/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: A variable argument within the function that measures how plausible a particular parameter value is given the observed sample data.
- **Core meaning & mental image — Tiếng Việt**: Tham số hàm hợp lý — biến số trong hàm đo lường mức độ hợp lý của một giá trị tham số cụ thể dựa trên dữ liệu mẫu đã quan sát. Hình ảnh tâm trí: một bộ lọc đánh giá mức độ phù hợp của các giả thuyết khác nhau đối với bằng chứng thực tế trước mặt.
- **Grammar & collocations**: 
  - maximize the likelihood function (tối đa hóa hàm hợp lý)
  - evaluate likelihood function parameters (đánh giá các tham số hàm hợp lý)
  - log-likelihood function (hàm log-hợp lý)
- **Register & nuance**: Technical, statistical. Foundation of both frequentist and Bayesian inference.
- **Examples**:
  - The likelihood function parameter dictates how sensitive the model is to extreme outliers. -> *Tham số hàm hợp lý quyết định mức độ nhạy cảm của mô hình với các giá trị ngoại lai cực đoan.*
  - Maximum likelihood estimation adjusts the parameters to make the observed data most probable. -> *Ước lượng hợp lý cực đại điều chỉnh các tham số để làm cho dữ liệu quan sát có xác suất cao nhất.*
- **Liên kết tiếng Hàn**: 가능도 함수 매개변수 (gan-euldo ham-su maega-byeonsu) — tham số trong hàm likelihood phản ánh độ hợp lý của dữ liệu.

## 7. Gibbs sampling algorithm
- **American IPA**: /gɪbz ˈsæmplɪŋ ˈɛlgəˌrɪðəm/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object, or noun modifier).
- **Core meaning — English**: A Markov chain Monte Carlo algorithm for obtaining a sequence of observations from a specified multivariate probability distribution when direct sampling is difficult.
- **Core meaning & mental image — Tiếng Việt**: Thuật toán lấy mẫu Gibbs — thuật toán MCMC lấy mẫu tuần tự từ phân phối xác suất đa biến bằng cách cập nhật từng biến một dựa trên điều kiện của các biến còn lại. Hình ảnh tâm trí: việc leo xuống một cầu thang xoắn ốc nhiều chiều bằng cách dịch chuyển từng tọa độ một theo phương vuông góc.
- **Grammar & collocations**: 
  - implement a Gibbs sampling algorithm (triển khai thuật toán lấy mẫu Gibbs)
  - Gibbs sampling iterations (các vòng lặp lấy mẫu Gibbs)
  - block Gibbs sampler (bộ lấy mẫu Gibbs theo khối)
- **Register & nuance**: Academic, computational. Widely used in hierarchical Bayesian modeling.
- **Examples**:
  - The Gibbs sampling algorithm simplifies high-dimensional integration by sampling from full conditional distributions. -> *Thuật toán lấy mẫu Gibbs đơn giản hóa việc tích phân đa chiều bằng cách lấy mẫu từ các phân phối điều kiện đầy đủ.*
  - We wrote custom code to execute the Gibbs sampling algorithm for our latent variable model. -> *Chúng tôi đã viết mã tùy chỉnh để thực thi thuật toán lấy mẫu Gibbs cho mô hình biến ẩn của mình.*
- **Liên kết tiếng Hàn**: 깁스 샘플링 알고리즘 (gibseu sempeulling al-gorijeum) — thuật toán MCMC cập nhật từng biến có điều kiện.

## 8. convergence diagnostic statistic
- **American IPA**: /kənˈvɜrʤəns ˌdaɪəgˈnɑstɪk stəˈtɪstɪk/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: A quantitative metric (such as the Gelman-Rubin $\hat{R}$) used to determine whether an MCMC chain has successfully reached its stationary target distribution.
- **Core meaning & mental image — Tiếng Việt**: Thống kê chẩn đoán hội tụ — chỉ số định lượng (như hệ số $\hat{R}$ của Gelman-Rubin) dùng để xác định xem chuỗi MCMC đã hội tụ thành công về phân phối dừng mục tiêu hay chưa. Hình ảnh tâm trí: đèn báo trên bảng điều khiển xác nhận rằng động cơ đã đạt tốc độ ổn định và các vòng quay đã đồng bộ.
- **Grammar & collocations**: 
  - check convergence diagnostic statistics (kiểm tra các thống kê chẩn đoán hội tụ)
  - Gelman-Rubin convergence diagnostic (chẩn đoán hội tụ Gelman-Rubin)
  - monitor convergence statistics (giám sát các thống kê hội tụ)
- **Register & nuance**: Technical, statistical. Essential for validating MCMC reliability.
- **Examples**:
  - All convergence diagnostic statistics remained below 1.05, indicating reliable mixing of the chains. -> *Tất cả các thống kê chẩn đoán hội tụ đều duy trì dưới 1.05, cho thấy sự hòa trộn đáng tin cậy của các chuỗi.*
  - If the convergence diagnostic statistic is elevated, you must increase the number of warmup iterations. -> *Nếu thống kê chẩn đoán hội tụ ở mức cao, bạn phải tăng số lượng vòng lặp khởi động (warmup).*
- **Liên kết tiếng Hàn**: 수렴 진단 통계량 (suryeom jindan tonggyeryang) — chỉ số thống kê kiểm tra độ hội tụ của chuỗi mô phỏng.

## 9. hyperparameter prior
- **American IPA**: /ˈhaɪpərpəˌramətər ˈpraɪər/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object, or noun modifier).
- **Core meaning — English**: A prior distribution placed on a hyperparameter—a parameter that governs the prior distribution of lower-level model parameters.
- **Core meaning & mental image — Tiếng Việt**: Tiên nghiệm siêu tham số — phân phối tiên nghiệm được đặt lên siêu tham số (tham số chi phối phân phối tiên nghiệm của các tham số mô hình cấp thấp hơn). Hình ảnh tâm trí: luật lệ điều hành cách mà hội đồng quản trị địa phương đặt ra quy định cho các chi nhánh bên dưới.
- **Grammar & collocations**: 
  - specify a hyperparameter prior (chỉ định tiên nghiệm siêu tham số)
  - weakly informative hyperparameter prior (tiên nghiệm siêu tham số ít thông tin)
  - hyperparameter prior tuning (tinh chỉnh tiên nghiệm siêu tham số)
- **Register & nuance**: Advanced academic, Bayesian statistics.
- **Examples**:
  - We assigned a half-Cauchy hyperparameter prior to the group-level variance components. -> *Chúng tôi đã gán một tiên nghiệm siêu tham số half-Cauchy cho các thành phần phương sai cấp nhóm.*
  - The choice of hyperparameter prior can subtly influence shrinkage in hierarchical models. -> *Sự lựa chọn tiên nghiệm siêu tham số có thể ảnh hưởng tinh tế đến sự thu nhỏ (shrinkage) trong các mô hình phân cấp.*
- **Liên kết tiếng Hàn**: 하이퍼파라미터 사전 분포 (haipeoparameiteo sajeon bunpo) — phân phối tiên nghiệm cho siêu tham số ở cấp bậc cao hơn.

## 10. partial pooling shrinkage
- **American IPA**: /ˈpɑrʃəl ˈpulɪŋ ˈʃrɪŋkɪʤ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: The statistical phenomenon in hierarchical models where estimates for small subgroups are pulled toward the grand mean, balancing individual noise with collective signal.
- **Core meaning & mental image — Tiếng Việt**: Sự thu nhỏ gom gộp một phần — hiện tượng thống kê trong mô hình phân cấp nơi các ước lượng cho nhóm nhỏ được kéo dịch về phía giá trị trung bình tổng thể, cân bằng nhiễu cá nhân với tín hiệu tập thể. Hình ảnh tâm trí: lực hấp dẫn của một hành tinh lớn kéo các vệ tinh nhỏ quỹ đạo lại gần một quỹ đạo chung hợp lý hơn.
- **Grammar & collocations**: 
  - estimate partial pooling shrinkage (ước tính sự thu nhỏ gom gộp một phần)
  - shrinkage effect in hierarchical modeling (hiệu ứng thu nhỏ trong mô hình hóa phân cấp)
  - strong partial pooling shrinkage (sự thu nhỏ gom gộp một phần mạnh mẽ)
- **Register & nuance**: Advanced statistical, machine learning.
- **Examples**:
  - Partial pooling shrinkage prevents overfitting in categories with very few observations. -> *Sự thu nhỏ gom gộp một phần giúp ngăn ngừa hiện tượng quá khớp ở các danh mục có rất ít quan sát.*
  - Through partial pooling shrinkage, schools with small student populations borrow statistical strength from the district average. -> *Thông qua sự thu nhỏ gom gộp một phần, các trường học có ít học sinh vay mượn sức mạnh thống kê từ mức trung bình của toàn học区 (district).*
- **Liên kết tiếng Hàn**: 부분 풀링 수축 (bubun puling suchuk) — hiện tượng thu nhỏ các ước lượng nhóm về phía trung bình chung trong mô hình phân cấp.

## 11. autocorrelation lag time
- **American IPA**: /ˌɔtoʊˌkɑrəˈleɪʃən læg taɪm/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: The number of steps in an MCMC chain required for successive samples to become effectively independent of one another.
- **Core meaning & mental image — Tiếng Việt**: Thời gian trễ tự tương quan — số bước trong chuỗi MCMC cần thiết để các mẫu liên tiếp trở nên độc lập hiệu quả với nhau. Hình ảnh tâm trí: khoảng cách bước chân cần thiết để một người đi bộ quên đi hướng đi trước đó và bắt đầu một bước ngẫu nhiên thực sự mới.
- **Grammar & collocations**: 
  - reduce autocorrelation lag time (giảm thời gian trễ tự tương quan)
  - high autocorrelation lag time (thời gian trễ tự tương quan cao)
  - estimate lag time and effective sample size (ước tính thời gian trễ và kích thước mẫu hiệu dụng)
- **Register & nuance**: Technical, computational statistics.
- **Examples**:
  - Reparameterizing the model successfully reduced the autocorrelation lag time and sped up sampling. -> *Việc tái tham số hóa mô hình đã thành công trong việc giảm thời gian trễ tự tương quan và đẩy nhanh quá trình lấy mẫu.*
  - High autocorrelation lag time means we must draw a larger total number of posterior samples. -> *Thời gian trễ tự tương quan cao có nghĩa là chúng ta phải rút ra tổng số mẫu hậu nghiệm lớn hơn.*
- **Liên kết tiếng Hàn**: 자기상관 지연 시간 (jagisang-gwan jiyeon sigan) — khoảng trễ bước để các mẫu trong chuỗi độc lập với nhau.

## 12. posterior predictive checking
- **American IPA**: /pɑˈstɪriər prɪˈdɪktɪv ˈʧɛkɪŋ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object, or noun modifier).
- **Core meaning — English**: A Bayesian model validation technique where replicated data is simulated from the posterior predictive distribution and compared graphically to observed data.
- **Core meaning & mental image — Tiếng Việt**: Kiểm tra dự đoán hậu nghiệm — kỹ thuật kiểm định mô hình Bayes trong đó dữ liệu nhân tạo được mô phỏng từ phân phối dự đoán hậu nghiệm và so sánh trực quan với dữ liệu thực tế đã quan sát. Hình ảnh tâm trí: việc tạo ra các bản sao mô phỏng của một tòa nhà và thử nghiệm sức chịu tải của chúng để xem mô hình thiết kế có khớp với thực tế không.
- **Grammar & collocations**: 
  - perform posterior predictive checking (thực hiện kiểm tra dự đoán hậu nghiệm)
  - posterior predictive p-value (giá trị p dự đoán hậu nghiệm)
  - graphical posterior predictive check (kiểm tra dự đoán hậu nghiệm bằng đồ họa)
- **Register & nuance**: Academic, statistical workflow.
- **Examples**:
  - Posterior predictive checking revealed that our model failed to capture the heavy tails of the income distribution. -> *Kiểm tra dự đoán hậu nghiệm tiết lộ rằng mô hình của chúng ta đã không nắm bắt được phần đuôi nặng của phân phối thu nhập.*
  - We used posterior predictive checks to validate the goodness-of-fit of our hierarchical regression. -> *Chúng ta đã sử dụng các bài kiểm tra dự đoán hậu nghiệm để xác thực độ khít của hồi quy phân cấp.*
- **Liên kết tiếng Hàn**: 사후 예측 검정 (saho yecheuk geomjeong) — phương pháp kiểm định mô hình bằng cách so sánh dữ liệu mô phỏng hậu nghiệm với dữ liệu thực tế.

## 13. uninformative prior belief
- **American IPA**: /ˌʌnˈɪnfərmətɪv ˈpraɪər bɪˈlif/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: A prior probability distribution that expresses maximal uncertainty or ignorance about a parameter, allowing the likelihood function to dominate inference.
- **Core meaning & mental image — Tiếng Việt**: Niềm tin tiên nghiệm thiếu thông tin — phân phối xác suất tiên nghiệm thể hiện sự bất định tối đa hoặc sự thiếu hiểu biết về một tham số, cho phép hàm hợp lý thống trị quá trình suy luận. Hình ảnh tâm trí: một tấm vải trắng tinh khiết chưa hề có nét vẽ nào, để mặc cho những nét cọ dữ liệu thực tế tô điểm hoàn toàn.
- **Grammar & collocations**: 
  - assign an uninformative prior belief (gán một niềm tin tiên nghiệm thiếu thông tin)
  - diffuse or uninformative prior (tiên nghiệm lan tỏa hoặc thiếu thông tin)
  - critique of uninformative priors (lời chỉ trích về các tiên nghiệm thiếu thông tin)
- **Register & nuance**: Technical, statistical. Often used when objective data should speak for itself.
- **Examples**:
  - When historical data is unavailable, researchers often resort to an uninformative prior belief. -> *Khi dữ liệu lịch sử không có sẵn, các nhà nghiên cứu thường nhờ cậy đến một niềm tin tiên nghiệm thiếu thông tin.*
  - Critics argue that supposedly uninformative priors can sometimes inadvertently bias high-dimensional models. -> *Các nhà phê bình lập luận rằng các tiên nghiệm được cho là thiếu thông tin đôi khi có thể làm chệch hướng mô hình đa chiều một cách vô tình.*
- **Liên kết tiếng Hàn**: 비정보적 사전 신뢰 (bi-jeongbojeok sajeon sin-oe) — phân phối tiên nghiệm không chứa thông tin thiên vị, để dữ liệu tự quyết định.

## 14. conjugate prior family
- **American IPA**: /ˈkɑnʤəgət ˈpraɪər ˈfæməli/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object, or noun modifier).
- **Core meaning — English**: A set of prior distributions such that if the likelihood function belongs to a certain family, the resulting posterior distribution will belong to the same algebraic family.
- **Core meaning & mental image — Tiếng Việt**: Họ tiên nghiệm liên hợp — tập hợp các phân phối tiên nghiệm sao cho nếu hàm hợp lý thuộc một họ nhất định, phân phối hậu nghiệm kết quả sẽ thuộc cùng họ đại số đó. Hình ảnh tâm trí: hai mảnh ghép hình học hoàn hảo khớp khít vào nhau mà không để lại khe hở hay làm thay đổi hình dáng tổng thể.
- **Grammar & collocations**: 
  - exploit a conjugate prior family (khai thác họ tiên nghiệm liên hợp)
  - analytically tractable conjugate prior (tiên nghiệm liên hợp giải tích được)
  - beta-binomial conjugate prior family (họ tiên nghiệm liên hợp beta-nhị thức)
- **Register & nuance**: Academic, mathematical statistics. Priued for mathematical convenience.
- **Examples**:
  - Choosing a conjugate prior family allows for exact analytical calculation of the posterior without MCMC. -> *Việc chọn một họ tiên nghiệm liên hợp cho phép tính toán giải tích chính xác của hậu nghiệm mà không cần dùng MCMC.*
  - The Normal-Normal conjugate prior family is widely used in linear Bayesian updating. -> *Họ tiên nghiệm liên hợp Chuẩn-Chuẩn được sử dụng rộng rãi trong việc cập nhật Bayes tuyến tính.*
- **Liên kết tiếng Hàn**: 켤레 사전 분포 가족 (kyeolle sajeon bunpo gajok) — họ phân phối tiên nghiệm và hậu nghiệm cùng dạng toán học giúp tính toán dễ dàng.

## 15. acceptance rate ratio
- **American IPA**: /ækˈsɛptəns reɪt ˈreɪʃioʊ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: The proportion of proposed parameter jumps accepted by a Metropolis-Hastings sampling algorithm relative to total proposed transitions.
- **Core meaning & mental image — Tiếng Việt**: Tỷ lệ chấp nhận lấy mẫu — tỷ lệ các bước nhảy tham số đề xuất được thuật toán lấy mẫu Metropolis-Hastings chấp nhận so với tổng số lần chuyển đổi được đề xuất. Hình ảnh tâm trí: tỷ lệ số lần một cánh cửa thông hành mở cho người qua đường dựa trên mức độ an toàn của họ.
- **Grammar & collocations**: 
  - monitor acceptance rate ratios (giám sát tỷ lệ chấp nhận)
  - optimal acceptance rate ratio (tỷ lệ chấp nhận tối ưu)
  - tuning the proposal variance for acceptance rate (tinh chỉnh phương sai đề xuất cho tỷ lệ chấp nhận)
- **Register & nuance**: Technical, computational. Key indicator of MCMC tuning quality.
- **Examples**:
  - The target acceptance rate ratio for Hamiltonian Monte Carlo is typically around 0.80. -> *Tỷ lệ chấp nhận mục tiêu cho thuật toán Hamiltonian Monte Carlo thường là khoảng 0.80.*
  - If the acceptance rate ratio is too low, the chain is proposing jumps that land in regions of extremely low probability. -> *Nếu tỷ lệ chấp nhận quá thấp, chuỗi đang đề xuất các bước nhảy rơi vào các vùng có xác suất cực kỳ thấp.*
- **Liên kết tiếng Hàn**: 수락률 비율 (surak-ryul biyul) — tỷ lệ chấp nhận các bước nhảy trong thuật toán lấy mẫu MCMC.

## 16. effective sample size
- **American IPA**: /ɪˈfɛktɪv ˈsæmpəl saɪz/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: The equivalent number of independent samples corresponding to a correlated sequence of MCMC draws, accounting for autocorrelation.
- **Core meaning & mental image — Tiếng Việt**: Kích thước mẫu hiệu dụng — số lượng mẫu độc lập tương đương tương ứng với một chuỗi các lượt rút MCMC có tương quan, có tính đến hiện tượng tự tương quan. Hình ảnh tâm trí: số lượng người bỏ phiếu thực sự độc lập sau khi trừ đi những người có xu hướng ý kiến hoàn toàn giống hệt người hàng xóm của họ.
- **Grammar & collocations**: 
  - calculate effective sample size (tính toán kích thước mẫu hiệu dụng)
  - low effective sample size warning (cảnh báo kích thước mẫu hiệu dụng thấp)
  - boost effective sample size (tăng kích thước mẫu hiệu dụng)
- **Register & nuance**: Technical, statistical computing. Essential metric for MCMC reliability.
- **Examples**:
  - Although we generated 10,000 posterior draws, the effective sample size was only 850 due to high autocorrelation. -> *Mặc dù chúng tôi đã tạo ra 10.000 lượt rút hậu nghiệm, kích thước mẫu hiệu dụng chỉ là 850 do tự tương quan cao.*
  - Ensuring an adequate effective sample size is vital for accurate credible interval estimation. -> *Đảm bảo kích thước mẫu hiệu dụng đầy đủ là tối quan trọng để ước tính khoảng tin cậy chính xác.*
- **Liên kết tiếng Hàn**: 유효 표본 크기 (yuhyo pyobon keugi) — số lượng mẫu độc lập tương đương trong một chuỗi mẫu có tương quan.

## 17. Hamiltonian Monte Carlo
- **American IPA**: /ˌhæməlˈtoʊniən ˈmɑnti ˈkɑrloʊ/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject, object, or noun modifier).
- **Core meaning — English**: An advanced MCMC algorithm that uses physical Hamiltonian dynamics (gradient information) to propose efficient, distant moves through complex continuous parameter spaces.
- **Core meaning & mental image — Tiếng Việt**: Thuật toán Hamiltonian Monte Carlo (HMC) — thuật toán MCMC nâng cao sử dụng động lực học Hamiltonian vật lý (thông tin gradient đạo hàm) để đề xuất các bước di chuyển xa và hiệu quả qua không gian tham số liên tục phức tạp. Hình ảnh tâm trí: một viên bi trượt trên bề mặt đồi núi theo các định luật vật lý cơ học thay vì bước đi ngẫu nhiên từng bước nhỏ.
- **Grammar & collocations**: 
  - run Hamiltonian Monte Carlo sampling (chạy lấy mẫu Hamiltonian Monte Carlo)
  - Hamiltonian Monte Carlo engines (các công cụ Hamiltonian Monte Carlo)
  - gradient-based Hamiltonian Monte Carlo (Hamiltonian Monte Carlo dựa trên gradient)
- **Register & nuance**: Advanced computational statistics. Powers modern software like Stan and PyMC.
- **Examples**:
  - Hamiltonian Monte Carlo drastically outperforms traditional Gibbs sampling in high-dimensional hierarchical models. -> *Hamiltonian Monte Carlo vượt trội hơn hẳn so với lấy mẫu Gibbs truyền thống trong các mô hình phân cấp đa chiều.*
  - By leveraging gradient information, Hamiltonian Monte Carlo avoids random walk behavior. -> *Bằng cách tận dụng thông tin gradient, Hamiltonian Monte Carlo tránh được hành vi đi bộ ngẫu nhiên.*
- **Liên kết tiếng Hàn**: 해밀토니안 몬테 카를로 (haemiltonian monte kalleuro) — phương pháp MCMC sử dụng đạo hàm và động lực học vật lý để lấy mẫu hiệu quả.

## 18. stationary distribution limit
- **American IPA**: /ˈsteɪʃəˌnɛri ˌdɪstrəˈbjuʃən ˈlɪmɪt/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: The invariant probability distribution that a Markov chain approaches and thereafter maintains as the number of transition steps approaches infinity.
- **Core meaning & mental image — Tiếng Việt**: Giới hạn phân phối dừng — phân phối xác suất bất biến mà chuỗi Markov tiến đến và duy trì sau đó khi số bước chuyển đổi tiến tới vô hạn. Hình ảnh tâm trí: trạng thái cân bằng nhiệt động lực học của một hệ thống sau khi đã trải qua đủ thời gian trao đổi nhiệt để ổn định hoàn toàn.
- **Grammar & collocations**: 
  - reach the stationary distribution limit (đạt đến giới hạn phân phối dừng)
  - convergence to the stationary distribution (sự hội tụ về phân phối dừng)
  - invariant stationary distribution (phân phối dừng bất biến)
- **Register & nuance**: Mathematical, theoretical probability.
- **Examples**:
  - Ergodic theorems guarantee that our MCMC samples are drawn from the true stationary distribution limit. -> *Các định lý ergodic đảm bảo rằng các mẫu MCMC của chúng ta được rút ra từ giới hạn phân phối dừng thực sự.*
  - If the chain has not reached its stationary distribution limit, summary statistics will be severely biased. -> *Nếu chuỗi chưa đạt đến giới hạn phân phối dừng, các thống kê tóm tắt sẽ bị chệch hướng nghiêm trọng.*
- **Liên kết tiếng Hàn**: 정상 분포 한계 (jeongsang bunpo hangye) — giới hạn phân phối ổn định mà chuỗi Markov đạt được về lâu dài.

## 19. marginal posterior density
- **American IPA**: /ˈmɑrʤɪnəl pɑˈstɪriər ˈdɛnsəti/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: The probability density function of a single parameter or subset of parameters obtained by integrating out all other nuisance parameters from the joint posterior distribution.
- **Core meaning & mental image — Tiếng Việt**: Mật độ hậu nghiệm biên — hàm mật độ xác suất của một tham số đơn lẻ hoặc tập con tham số thu được bằng cách tích phân loại bỏ tất cả các tham số phiền nhiễu khác khỏi phân phối hậu nghiệm đồng thời. Hình ảnh tâm trí: việc chiếu bóng ba chiều của một vật thể phức tạp lên một mặt phẳng tường đơn lẻ để chỉ quan sát bóng của một bộ phận cụ thể.
- **Grammar & collocations**: 
  - plot the marginal posterior density (vẽ biểu đồ mật độ hậu nghiệm biên)
  - estimate marginal posterior densities (ước tính các mật độ hậu nghiệm biên)
  - peak of the marginal posterior density (đỉnh của mật độ hậu nghiệm biên)
- **Register & nuance**: Academic, statistical inference.
- **Examples**:
  - We examined the marginal posterior density for each regression coefficient to assess individual significance. -> *Chúng ta đã kiểm tra mật độ hậu nghiệm biên cho từng hệ số hồi quy để đánh giá ý nghĩa cá nhân.*
  - Integrating the joint posterior across all other dimensions yields the desired marginal posterior density. -> *Việc tích phân hậu nghiệm đồng thời qua tất cả các chiều khác tạo ra mật độ hậu nghiệm biên mong muốn.*
- **Liên kết tiếng Hàn**: 주변 사후 밀도 (jubyeon saho mildo) — mật độ xác suất hậu nghiệm của một biến đơn sau khi loại bỏ các biến khác.

## 20. variance component decomposition
- **American IPA**: /ˈvɛriəns ˈkɑmpoʊnənt ˌdikɑmpəˈzɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: The analytical splitting of total observed variance in a dataset into distinct components attributable to different hierarchical levels or random factors.
- **Core meaning & mental image — Tiếng Việt**: Phân tách thành phần phương sai — việc chia tách phân tích tổng phương sai quan sát được trong bộ dữ liệu thành các thành phần riêng biệt quy cho các cấp độ phân cấp hoặc yếu tố ngẫu nhiên khác nhau. Hình ảnh tâm trí: việc tháo rời một cỗ máy phức tạp thành các hộp bánh răng riêng biệt để đo lường mức độ đóng góp tiếng ồn của từng bộ phận.
- **Grammar & collocations**: 
  - perform variance component decomposition (thực hiện phân tách thành phần phương sai)
  - variance component analysis (phân tích thành phần phương sai)
  - random effects variance component decomposition (phân tách thành phần phương sai hiệu ứng ngẫu nhiên)
- **Register & nuance**: Advanced statistical modeling, econometrics, biostatistics.
- **Examples**:
  - Variance component decomposition showed that 35% of test score variation stems from school-level differences. -> *Phân tách thành phần phương sai cho thấy 35% sự biến thiên điểm kiểm tra xuất phát từ sự khác biệt cấp trường học.*
  - The econometrician applied variance component decomposition to parse out firm-specific shocks. -> *Nhà kinh tế lượng đã áp dụng việc phân tách thành phần phương sai để lọc ra các cú sốc đặc thù của từng doanh nghiệp.*
- **Liên kết tiếng Hàn**: 분산 성분 분해 (bunsan seongbun bunhae) — phương pháp phân tách tổng phương sai thành các thành phần theo cấp bậc.

## 21. model cross-validation score
- **American IPA**: /ˈmɑdəl ˈkrɔs ˈvæləˌdeɪʃən skɔr/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: A quantitative metric reflecting how well a statistical model generalizes to out-of-sample data, often estimated via Pareto-smoothed importance sampling in Bayesian contexts.
- **Core meaning & mental image — Tiếng Việt**: Điểm kiểm tra chéo mô hình — chỉ số định lượng phản ánh mức độ tổng quát hóa của mô hình thống kê đối với dữ liệu ngoài mẫu, thường được ước tính qua lấy mẫu tầm quan trọng làm mượt Pareto trong ngữ cảnh Bayes. Hình ảnh tâm trí: bài kiểm tra thử sát hạch năng lực của học sinh bằng các câu hỏi hoàn toàn hoàn mới chưa từng xuất hiện trong sách giáo khoa ôn tập.
- **Grammar & collocations**: 
  - compute model cross-validation scores (tính toán điểm kiểm tra chéo mô hình)
  - leave-one-out cross-validation score (điểm kiểm tra chéo bỏ-một-ra)
  - compare models using cross-validation scores (so sánh các mô hình sử dụng điểm kiểm tra chéo)
- **Register & nuance**: Academic, data science, machine learning.
- **Examples**:
  - The hierarchical model achieved a superior cross-validation score compared to the pooled linear regression. -> *Mô hình phân cấp đạt được điểm kiểm tra chéo vượt trội so với hồi quy tuyến tính gom gộp.*
  - Bayesian leave-one-out cross-validation scores help prevent overfitting when comparing complex model specifications. -> *Điểm kiểm tra chéo bỏ-một-ra của Bayes giúp ngăn chặn hiện tượng quá khớp khi so sánh các đặc tả mô hình phức tạp.*
- **Liên kết tiếng Hàn**: 모델 교차 검증 점수 (model gyoca geomjeung jeomsu) — điểm số đánh giá khả năng dự đoán dữ liệu mới của mô hình.

## 22. Bayesian shrinkage estimator
- **American IPA**: /ˈbeɪziən ˈʃrɪŋkɪʤ ˈɛstəˌmeɪtər/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: An estimation rule that pulls individual group parameter estimates toward a common central value, reducing overall mean squared error by trading off bias for variance.
- **Core meaning & mental image — Tiếng Việt**: Bộ ước lượng thu nhỏ Bayes — quy tắc ước lượng kéo các ước lượng tham số nhóm cá nhân về phía giá trị trung tâm chung, làm giảm tổng sai số bình phương trung bình bằng cách đánh đổi độ chệch lấy phương sai. Hình ảnh tâm trí: một lực sĩ kéo dây chun co giãn để thu hút các vận động viên đang chạy tản mát về gần vạch trung tâm an toàn hơn.
- **Grammar & collocations**: 
  - apply a Bayesian shrinkage estimator (áp dụng bộ ước lượng thu nhỏ Bayes)
  - shrinkage estimator properties (các tính chất của bộ ước lượng thu nhỏ)
  - James-Stein shrinkage estimator (bộ ước lượng thu nhỏ James-Stein)
- **Register & nuance**: Advanced statistical theory, decision theory.
- **Examples**:
  - A Bayesian shrinkage estimator effectively stabilizes noisy estimates in small-sample clinical trials. -> *Bộ ước lượng thu nhỏ Bayes ổn định hiệu quả các ước lượng nhiều nhiễu trong các thử nghiệm lâm sàng mẫu nhỏ.*
  - The shrinkage estimator shrinks extreme subgroup means toward the grand mean when data is scarce. -> *Bộ ước lượng thu nhỏ kéo các giá trị trung bình nhóm cực đoan về phía giá trị trung bình tổng khi dữ liệu khan hiếm.*
- **Liên kết tiếng Hàn**: 베이지안 수축 추정량 (beijeian suchuk chujeung-ryang) — bộ ước lượng Bayes làm giảm phương sai bằng cách thu nhỏ các giá trị ước lượng về trung tâm.

## 23. sensitivity to prior choice
- **American IPA**: /ˌsɛnsəˈtɪvəti tu ˈpraɪər ʧɔɪs/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: The degree to which a Bayesian posterior inference changes when alternative prior probability distributions are specified.
- **Core meaning & mental image — Tiếng Việt**: Độ nhạy với lựa chọn tiên nghiệm — mức độ mà suy luận hậu nghiệm Bayes thay đổi khi các phân phối xác suất tiên nghiệm thay thế được chỉ định. Hình ảnh tâm trí: độ rung lắc của một chiếc cầu treo khi trọng lượng của móng trụ nền móng (tiên nghiệm) bị thay đổi nhẹ.
- **Grammar & collocations**: 
  - analyze sensitivity to prior choice (phân tích độ nhạy với lựa chọn tiên nghiệm)
  - robust against sensitivity to prior choice (vững chắc trước độ nhạy lựa chọn tiên nghiệm)
  - prior sensitivity analysis (phân tích độ nhạy tiên nghiệm)
- **Register & nuance**: Academic, methodological rigor. Essential for validating Bayesian conclusions.
- **Examples**:
  - Reviewers often request a sensitivity to prior choice analysis to ensure conclusions are not artifacts of subjective assumptions. -> *Người phản biện thường yêu cầu phân tích độ nhạy với lựa chọn tiên nghiệm để đảm bảo các kết luận không phải là sản phẩm nhân tạo của các giả định chủ quan.*
  - Our model exhibited low sensitivity to prior choice, confirming the strong information content of the data. -> *Mô hình của chúng tôi thể hiện độ nhạy thấp với lựa chọn tiên nghiệm, xác nhận hàm lượng thông tin mạnh mẽ của dữ liệu.*
- **Liên kết tiếng Hàn**: 사전 선택에 대한 민감도 (sajeon seontaek-e-daehan mingamdo) — mức độ thay đổi kết quả hậu nghiệm khi thay đổi phân phối tiên nghiệm.

## 24. Monte Carlo standard error
- **American IPA**: /ˈmɑnti ˈkɑrloʊ ˈstændərd ˈɛrər/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: The numerical uncertainty inherent in estimating posterior expectations and quantiles via finite MCMC simulation samples.
- **Core meaning & mental image — Tiếng Việt**: Sai số chuẩn Monte Carlo — sự bất ổn định số học vốn có trong việc ước lượng các kỳ vọng và phân vị hậu nghiệm thông qua các mẫu mô phỏng MCMC hữu hạn. Hình ảnh tâm trí: biên độ dao động nhỏ của kim đồng hồ đo khi đo đạc một đại lượng vật lý bằng phương pháp lấy mẫu lặp đi lặp lại.
- **Grammar & collocations**: 
  - compute Monte Carlo standard errors (tính toán sai số chuẩn Monte Carlo)
  - Monte Carlo standard error estimate (ước tính sai số chuẩn Monte Carlo)
  - relative Monte Carlo standard error (sai số chuẩn Monte Carlo tương đối)
- **Register & nuance**: Technical, computational statistics. Indicator of simulation precision.
- **Examples**:
  - We ran the chain longer to ensure that the Monte Carlo standard error for the mean parameter dropped below 0.01. -> *Chúng tôi chạy chuỗi lâu hơn để đảm bảo rằng sai số chuẩn Monte Carlo cho tham số trung bình giảm xuống dưới 0.01.*
  - Reporting the Monte Carlo standard error is a hallmark of rigorous computational Bayesian reporting. -> *Việc báo cáo sai số chuẩn Monte Carlo là dấu ấn của báo cáo tính toán Bayes nghiêm ngặt.*
- **Liên kết tiếng Hàn**: 몬테 카를로 표준 오차 (monte kalleuro pyojun ocha) — sai số do tính hữu hạn của số lần mô phỏng trong phương pháp Monte Carlo.

## 25. empirical Bayes approximation
- **American IPA**: /ɛmˈpɪrɪkəl ˈbeɪziən əˌprɑksəˈmeɪʃən/
- **Loại từ & vị trí trong câu**: Noun phrase (Subject or object).
- **Core meaning — English**: An approach where the prior distribution parameters are estimated directly from the marginal distribution of the observed data rather than specified subjectively.
- **Core meaning & mental image — Tiếng Việt**: Xấp xỉ Bayes thực nghiệm — phương pháp trong đó các tham số của phân phối tiên nghiệm được ước lượng trực tiếp từ phân phối biên của dữ liệu quan sát thay vì được chỉ định một cách chủ quan. Hình ảnh tâm trí: việc tự điều chỉnh chiếc kính viễn thông dựa trực tiếp trên độ nét của hình ảnh ánh sáng vừa thu được thay vì chỉnh theo sách hướng dẫn cũ.
- **Grammar & collocations**: 
  - apply an empirical Bayes approximation (áp dụng xấp xỉ Bayes thực nghiệm)
  - empirical Bayes method (phương pháp Bayes thực nghiệm)
  - empirical Bayes estimation of hyperparameters (ước lượng Bayes thực nghiệm các siêu tham số)
- **Register & nuance**: Advanced statistical, machine learning, empirical research.
- **Examples**:
  - The empirical Bayes approximation offers a computationally fast alternative to full hierarchical MCMC sampling. -> *Xấp xỉ Bayes thực nghiệm cung cấp một giải pháp thay thế nhanh chóng về mặt tính toán so với việc lấy mẫu MCMC phân cấp đầy đủ.*
  - By using an empirical Bayes approximation, we bypassed the need to specify subjective hyperpriors. -> *Bằng cách sử dụng xấp xỉ Bayes thực nghiệm, chúng tôi đã bỏ qua sự cần thiết phải chỉ định các siêu tiên nghiệm chủ quan.*
- **Liên kết tiếng Hàn**: 경험적 베이즈 근사 (gyeongheomjeok beijeu geunsa) — phương pháp xấp xỉ Bayes trong đó siêu tham số được ước lượng từ dữ liệu.

---

## Review in context: Part 1 (items 1–12)

In modern quantitative data science, researchers frequently investigate complex dependencies by fitting a **Bayesian hierarchical model**. Because analytical solutions are often intractable for such multi-level structures, analysts rely heavily on running an MCMC algorithm—specifically **Markov chain Monte Carlo**—to sample from the target probability space. To determine whether the sampler has properly stabilized, analysts monitor the **convergence diagnostic statistic** (such as the Gelman-Rubin $\hat{R}$) alongside the **autocorrelation lag time**, ensuring that consecutive draws do not exhibit excessive sluggishness. Furthermore, by carefully structuring the **prior distribution specification** and assigning a **hyperparameter prior** to group-level variances, the model achieves robust **partial pooling shrinkage**, which stabilizes estimates for small subgroups. When implementing these models, practitioners often employ a **Gibbs sampling algorithm** to update parameters conditionally. To evaluate how plausible specific parameter values are, they examine the **likelihood function parameter**, while the resulting uncertainty is bounded by the **credible interval boundary**. Ultimately, the core output is summarized as the **posterior probability distribution**, and model validity is rigorously tested through **posterior predictive checking**.

### Vietnamese Translation — Phần 1
Trong khoa học dữ liệu định lượng hiện đại, các nhà nghiên cứu thường xuyên điều tra các sự phụ thuộc phức tạp bằng cách khớp một **mô hình phân cấp Bayes**. Vì các nghiệm giải tích thường không giải được đối với các cấu trúc nhiều tầng như vậy, các nhà phân tích phụ thuộc nhiều vào việc chạy thuật toán MCMC — cụ thể là **chuỗi Markov Monte Carlo** — để lấy mẫu từ không gian xác suất mục tiêu. Để xác định xem bộ lấy mẫu đã ổn định đúng cách chưa, các nhà phân tích giám sát **thống kê chẩn đoán hội tụ** (chẳng hạn như hệ số $\hat{R}$ của Gelman-Rubin) cùng với **thời gian trễ tự tương quan**, đảm bảo rằng các lượt rút liên tiếp không biểu hiện sự chậm chạp quá mức. Hơn nữa, bằng cách cấu trúc cẩn thận **đặc tả phân phối tiên nghiệm** và gán một **tiên nghiệm siêu tham số** cho các phương sai cấp nhóm, mô hình đạt được **sự thu nhỏ gom gộp một phần** mạnh mẽ, giúp ổn định các ước lượng cho các tiểu nhóm nhỏ. Khi thực hiện các mô hình này, các học viên thường sử dụng **thuật toán lấy mẫu Gibbs** để cập nhật các tham số có điều kiện. Để đánh giá mức độ hợp lý của các giá trị tham số cụ thể, họ kiểm tra **tham số hàm hợp lý**, trong khi độ bất định kết quả được giới hạn bởi **ranh giới khoảng tin cậy**. Cuối cùng, đầu ra cốt lõi được tóm tắt dưới dạng **phân phối xác suất hậu nghiệm**, và tính hợp lệ của mô hình được kiểm định nghiêm ngặt thông qua **kiểm tra dự đoán hậu nghiệm**.

## Review in context: Part 2 (items 13–25)

When historical data is sparse, analysts may temporarily resort to an **uninformative prior belief**, though leveraging a **conjugate prior family** can yield exact analytical solutions when applicable. During simulation, tracking the **acceptance rate ratio** in Metropolis-Hastings steps ensures that proposal distributions are tuned correctly, which directly influences the **effective sample size** and keeps the **Monte Carlo standard error** acceptably low. For higher-dimensional parameter spaces, transitioning to **Hamiltonian Monte Carlo** utilizes gradient dynamics to explore the target space efficiently. As the number of iterations approaches infinity, the chain converges toward its **stationary distribution limit**. To interpret individual parameters, analysts compute the **marginal posterior density** and perform a **variance component decomposition** to parse out group-level versus individual-level variation. To evaluate out-of-sample predictive performance, computing the **model cross-validation score** is essential. Additionally, applying a **Bayesian shrinkage estimator** or an **empirical Bayes approximation** provides computationally efficient alternatives to full MCMC, while conducting robust checks on **sensitivity to prior choice** guarantees methodological integrity.

### Vietnamese Translation — Phần 2
Khi dữ liệu lịch sử khan hiếm, các nhà phân tích có thể tạm thời nhờ cậy đến một **niềm tin tiên nghiệm thiếu thông tin**, mặc dù việc tận dụng một **họ tiên nghiệm liên hợp** có thể mang lại các nghiệm giải tích chính xác khi có thể áp dụng. Trong quá trình mô phỏng, việc theo dõi **tỷ lệ chấp nhận lấy mẫu** trong các bước Metropolis-Hastings đảm bảo rằng các phân phối đề xuất được tinh chỉnh chính xác, điều này ảnh hưởng trực tiếp đến **kích thước mẫu hiệu dụng** và giữ cho **sai số chuẩn Monte Carlo** ở mức thấp chấp nhận được. Đối với các không gian tham số có số chiều cao hơn, việc chuyển đổi sang **Hamiltonian Monte Carlo** tận dụng động lực học gradient để khám phá không gian mục tiêu một cách hiệu quả. Khi số lượng vòng lặp tiến tới vô hạn, chuỗi hội tụ về **giới hạn phân phối dừng**. Để giải thích các tham số riêng lẻ, các nhà phân tích tính toán **mật độ hậu nghiệm biên** và thực hiện **phân tách thành phần phương sai** để phân tích sự biến thiên cấp nhóm so với cấp cá nhân. Để đánh giá hiệu suất dự đoán ngoài mẫu, việc tính toán **điểm kiểm tra chéo mô hình** là thiết yếu. Thêm vào đó, việc áp dụng **bộ ước lượng thu nhỏ Bayes** hoặc **xấp xỉ Bayes thực nghiệm** cung cấp các giải pháp thay thế hiệu quả về mặt tính toán cho MCMC đầy đủ, trong khi việc tiến hành các kiểm tra vững chắc về **độ nhạy với lựa chọn tiên nghiệm** đảm bảo tính toàn vẹn về mặt phương pháp luận.
