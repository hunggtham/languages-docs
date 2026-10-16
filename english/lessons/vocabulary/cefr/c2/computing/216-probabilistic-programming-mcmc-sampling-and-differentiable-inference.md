# C2 Vocabulary 216 — Probabilistic programming languages (PPL), Hamiltonian Monte Carlo (HMC), and differentiable inference

## 1. probabilistic programming language (PPL)
- **IPA**: /ˌprɑbəˈbɪstɪk ˈproʊˌgræmɪŋ ˈlæŋgwɪdʒ/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong khoa học dữ liệu và thống kê bayes.
- **Core meaning — English**: A specialized programming language that allows users to describe probabilistic models directly and automatically perform statistical inference on them.
- **Core meaning & mental image — Tiếng Việt**: Ngôn ngữ lập trình xác suất — Hình ảnh một công cụ lập trình cho phép máy tính tự động suy luận ra các quy luật ẩn sau dữ liệu thay vì chỉ chạy các lệnh cứng nhắc.
- **Grammar & collocations**: 
  - develop in a probabilistic programming language (phát triển bằng ngôn ngữ lập trình xác suất)
  - probabilistic programming language framework (khung ngôn ngữ lập trình xác suất)
  - features of probabilistic programming languages (các tính năng của ngôn ngữ lập trình xác suất)
- **Register & nuance**: Thuật ngữ chuyên ngành khoa học máy tính và thống kê nâng cao (Advanced Computer Science / Statistics).
- **Examples**:
  - Data scientists use a probabilistic programming language to define complex hierarchical models and automatically draw posterior samples. (Các nhà khoa học dữ liệu sử dụng ngôn ngữ lập trình xác suất để định nghĩa các mô hình phân cấp phức tạp và tự động rút ra các mẫu hậu nghiệm.)
- **Liên kết tiếng Hàn**: 확률적 프로그래밍 언어 (확률的 programming language - hwakryuljeok peurogeuraeming eon-eo) — Ngôn ngữ lập trình chuyên dùng cho mô hình hóa xác suất.

## 2. Hamiltonian Monte Carlo (HMC) sampler
- **IPA**: /ˌhæməlˈtoʊniən ˈmɑnti ˈkɑrloʊ ˈsæmplər/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong thuật toán lấy mẫu thống kê.
- **Core meaning — English**: An advanced Markov chain Monte Carlo sampling algorithm that uses potential energy gradients and physics simulation (Hamiltonian dynamics) to efficiently explore high-dimensional probability distributions.
- **Core meaning & mental image — Tiếng Việt**: Trình lấy mẫu Monte Carlo Hamiltonian — Hình ảnh một viên bi trượt trên bề mặt địa hình năng lượng dốc theo định luật vật lý để khám phá nhanh chóng các vùng xác suất cao.
- **Grammar & collocations**: 
  - run Hamiltonian Monte Carlo sampler (chạy trình lấy mẫu HMC)
  - Hamiltonian Monte Carlo convergence (sự hội tụ của HMC)
  - tune Hamiltonian Monte Carlo parameters (tinh chỉnh tham số HMC)
- **Register & nuance**: Thuật ngữ toán học và thống kê tính toán (Computational Statistics / Bayesian Inference).
- **Examples**:
  - The Hamiltonian Monte Carlo sampler navigated the complex curved posterior surface much faster than traditional random-walk algorithms. (Trình lấy mẫu Monte Carlo Hamiltonian đã điều hướng qua bề mặt hậu nghiệm cong phức tạp nhanh hơn nhiều so với các thuật toán bước ngẫu nhiên truyền thống.)
- **Liên kết tiếng Hàn**: 해밀토니안 몬테카를로 샘플러 (Hamiltonian Monte Carlo sampler - haemiltonian montekar-eullo sampeulleo) — Thuật toán lấy mẫu mô phỏng cơ học Hamiltonian.

## 3. no-U-turn sampler (NUTS)
- **IPA**: /noʊ-ju-tɜrn ˈsæmplər/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong các công cụ PPL hiện đại.
- **Core meaning — English**: An adaptive extension of Hamiltonian Monte Carlo that automatically detects when trajectories start to loop back on themselves, eliminating the need to manually set the leapfrog step number.
- **Core meaning & mental image — Tiếng Việt**: Trình lấy mẫu không quay đầu (NUTS) — Hình ảnh một vận động viên trượt patin tự động dừng lại và đổi hướng ngay khi phát hiện đường đi đang vòng ngược trở lại điểm xuất phát.
- **Grammar & collocations**: 
  - implement no-U-turn sampler (triển khai trình lấy mẫu NUTS)
  - default no-U-turn sampler in Stan (trình lấy mẫu NUTS mặc định trong Stan)
  - evaluate no-U-turn sampler efficiency (đánh giá hiệu năng trình lấy mẫu NUTS)
- **Register & nuance**: Thuật ngữ chuyên sâu trong thuật toán lấy mẫu Bayes (Bayesian Sampling Algorithms).
- **Examples**:
  - Modern Bayesian software relies on the no-U-turn sampler to automatically adapt trajectory lengths during posterior exploration. (Phần mềm Bayes hiện đại dựa vào trình lấy mẫu không quay đầu để tự động điều chỉnh độ dài quỹ đạo trong quá trình khám phá hậu nghiệm.)
- **Liên kết tiếng Hàn**: 유턴 방지 샘플러 (U-turn 防止 sampler - yuteon bangji sampeulleo) — Trình lấy mẫu tự động tránh quay đầu vòng lặp quỹ đạo.

## 4. differentiable variational inference
- **IPA**: /ˌdɪfəˈrɛnʃəbəl ˌvɛriˈeɪʃənəl ˈɪnfərans/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm tân ngữ hoặc chủ ngữ trong suy luận xấp xỉ Bayes.
- **Core meaning — English**: A variational inference technique that leverages automatic differentiation to optimize intractable posterior approximations via gradient descent methods.
- **Core meaning & mental image — Tiếng Việt**: Suy luận biến phân khả vi — Hình ảnh việc điều chỉnh trơn tru các thông số của một hình khối bằng cách trượt theo độ dốc đạo hàm để nó khớp hoàn hảo với hình thù thực tế.
- **Grammar & collocations**: 
  - optimize differentiable variational inference (tối ưu hóa suy luận biến phân khả vi)
  - scalable differentiable variational inference (suy luận biến phân khả vi có khả năng mở rộng)
  - apply differentiable variational inference (áp dụng suy luận biến phân khả vi)
- **Register & nuance**: Thuật ngữ học máy và thống kê hiện đại (Modern Machine Learning / Approximate Bayesian Inference).
- **Examples**:
  - Differentiable variational inference scales to massive datasets where traditional Markov chain Monte Carlo sampling becomes computationally prohibitive. (Suy luận biến phân khả vi mở rộng quy mô cho các tập dữ liệu khổng lồ nơi việc lấy mẫu chuỗi Markov truyền thống trở nên quá tốn kém về mặt tính toán.)
- **Liên kết tiếng Hàn**: 미분 가능 변분 추론 (微分 可能 變分 推論 - mibun ganeungeul byeonbun churon) — Phương pháp suy luận biến phân tích hợp tính khả vi tự động.

## 5. posterior distribution sampling chain
- **IPA**: /pɑˈstɪriər ˌdɪstrəˈbyuʃən ˈsæmplɪŋ ʧeɪn/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong phân tích xác suất.
- **Core meaning — English**: A sequence of dependent parameter samples generated by a stochastic process that collectively approximates the true posterior probability distribution of a Bayesian model.
- **Core meaning & mental image — Tiếng Việt**: Chuỗi lấy mẫu phân phối hậu nghiệm — Hình ảnh chuỗi các bước chân ghi lại dấu vết trên sa mạc để phác họa nên hình dáng chính xác của một ngọn núi ẩn khuất.
- **Grammar & collocations**: 
  - generate posterior distribution sampling chain (tạo chuỗi lấy mẫu phân phối hậu nghiệm)
  - convergence of posterior sampling chain (sự hội tụ của chuỗi lấy mẫu hậu nghiệm)
  - thinning posterior distribution sampling chain (làm thưa chuỗi lấy mẫu phân phối hậu nghiệm)
- **Register & nuance**: Thuật ngữ thống kê Bayes chuẩn mực (Standard Bayesian Statistics).
- **Examples**:
  - Diagnostics such as trace plots are used to verify whether the posterior distribution sampling chain has fully converged. (Các công cụ chẩn đoán như biểu đồ vết được sử dụng để xác minh xem chuỗi lấy mẫu phân phối hậu nghiệm đã hội tụ hoàn toàn chưa.)
- **Liên kết tiếng Hàn**: 사후 분포 샘플링 체인 (事後 分布 sampling chain - sahu bunpo sampeulleo chein) — Chuỗi các mẫu lấy ra mô phỏng phân phối hậu nghiệm.

## 6. log-joint density gradient calculation
- **IPA**: /lɑg-ʤɔɪnt ˈdɛnsəti ˈgreɪdiənt ˈkælkjəˌleɪʃən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm tân ngữ trong công cụ tự động vi phân.
- **Core meaning — English**: The mathematical computation of the vector of partial derivatives of the log-joint probability density function with respect to model parameters.
- **Core meaning & mật image — Tiếng Việt**: Tính toán độ dốc mật độ hợp khớp logarit — Hình ảnh việc đo đạc hướng và độ dốc của sườn núi tại mỗi điểm đứng để biết nên bước chân theo hướng nào lên đỉnh.
- **Grammar & collocations**: 
  - automate log-joint density gradient calculation (tự động hóa tính toán độ dốc mật độ hợp khớp log)
  - fast log-joint density gradient calculation (tính toán độ dốc mật độ hợp khớp log nhanh)
  - analytical log-joint density gradient (độ dốc mật độ hợp khớp log giải tích)
- **Register & nuance**: Thuật ngữ chuyên sâu trong tối ưu hóa toán học (Mathematical Optimization / PPL Engines).
- **Examples**:
  - Automatic differentiation engines handle log-joint density gradient calculation efficiently, powering gradient-based samplers like HMC. (Các công cụ vi phân tự động xử lý việc tính toán độ dốc mật độ hợp khớp log một cách hiệu quả, cung cấp năng lượng cho các trình lấy mẫu dựa trên độ dốc như HMC.)
- **Liên kết tiếng Hàn**: 로그 결합 밀도 기울기 계산 (log 結合 密度 기울기 計算 - rogeu gyeolhap mildo giulgi gyesan) — Tính toán đạo hàm độ dốc hàm mật độ xác suất hợp khớp log.

## 7. automated differentiation engine
- **IPA**: /ˈɔtəˌmeɪtəd ˌdɪfəˌrɛnʃiˈeɪʃən ˈɛnʤɪn/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong hệ thống phần mềm.
- **Core meaning — English**: A software subsystem that evaluates exact derivatives of numeric computer programs by applying the chain rule step-by-step to elementary operations.
- **Core meaning & mental image — Tiếng Việt**: Công cụ vi phân tự động — Hình ảnh một cỗ máy thông minh tự động tháo rời từng đoạn công thức phức tạp để tính chính xác tốc độ thay đổi của từng biến số.
- **Grammar & collocations**: 
  - integrate automated differentiation engine (tích hợp công cụ vi phân tự động)
  - reverse-mode automated differentiation engine (công cụ vi phân tự động chế độ ngược)
  - speed of automated differentiation engine (tốc độ của công cụ vi phân tự động)
- **Register & nuance**: Thuật ngữ cốt lõi trong học máy và PPL (Core Machine Learning / Compiler Engineering).
- **Examples**:
  - The probabilistic programming language relies on its automated differentiation engine to compute gradients for complex user-defined likelihoods. (Ngôn ngữ lập trình xác suất dựa vào công cụ vi phân tự động của nó để tính toán các độ dốc cho các hàm hợp lý do người dùng tự định nghĩa phức tạp.)
- **Liên kết tiếng Hàn**: 자동 미분 엔진 (自動 微分 engine - jadong mibun enjin) — Hệ thống phần mềm tính đạo hàm tự động cho mã nguồn.

## 8. Markov chain convergence diagnostic (R-hat)
- **IPA**: /ˈmɑrkɑv ʧeɪn kənˈvɜrʤəns ˌdaɪəgˈnɑstɪk (ɑr-hæt)/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong thống kê kiểm định.
- **Core meaning — English**: A formal convergence statistic (also known as the Gelman-Rubin diagnostic) that compares the variance between multiple sampling chains to variance within chains, signaling convergence when values approach 1.0.
- **Core meaning & mental image — Tiếng Việt**: Kiểm định hội tụ chuỗi Markov (R-hat) — Hình ảnh việc so sánh các đường đi của nhiều người leo núi xuất phát từ các hướng khác nhau xem họ đã cùng hội tụ lên một đỉnh núi chưa.
- **Grammar & collocations**: 
  - calculate Markov chain convergence diagnostic (tính toán kiểm định hội tụ chuỗi Markov)
  - check R-hat diagnostic value (kiểm tra giá trị chẩn đoán R-hat)
  - high R-hat convergence warning (cảnh báo hội tụ R-hat cao)
- **Register & nuance**: Thuật ngữ chuẩn trong thống kê Bayes (Bayesian Diagnostics).
- **Examples**:
  - An R-hat value exceeding 1.05 indicates that the posterior chains have not mixed well, necessitating longer sampling runs. (Giá trị R-hat vượt quá 1.05 cho thấy các chuỗi hậu nghiệm chưa hòa trộn tốt, đòi hỏi các đợt lấy mẫu dài hơn.)
- **Liên kết tiếng Hàn**: 마르코프 체인 수렴 진단 (Markov chain 收斂 診断 - markopeu chein suryeom jindan) — Thống kê chuẩn đoán mức độ hội tụ của chuỗi Markov (R-hat).

## 9. effective sample size (ESS) threshold
- **IPA**: /ɪˈfɛktɪv ˈsæmpəl saɪz ˈθrɛʃˌhoʊld/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm tân ngữ trong đánh giá chất lượng mẫu.
- **Core meaning — English**: The minimum required number of independent samples equivalent in information content to a correlated MCMC sampling chain, used to ensure reliable posterior estimates.
- **Core meaning & mental image — Tiếng Việt**: Ngưỡng kích thước mẫu hiệu quả (ESS) — Hình ảnh việc quy đổi số lượng các bước chân dính chùm thành số lượng bước chân độc lập thực sự hữu ích để phân tích.
- **Grammar & collocations**: 
  - meet the effective sample size threshold (đạt ngưỡng kích thước mẫu hiệu quả)
  - low effective sample size warning (cảnh báo kích thước mẫu hiệu quả thấp)
  - compute effective sample size (tính toán kích thước mẫu hiệu quả)
- **Register & nuance**: Thuật ngữ đánh giá hiệu năng thống kê (Statistical Performance Evaluation).
- **Examples**:
  - Analysts check the effective sample size threshold to ensure their parameter credible intervals are derived from sufficient independent information. (Các nhà phân tích kiểm tra ngưỡng kích thước mẫu hiệu quả để đảm bảo các khoảng tin cậy tham số của họ được dẫn xuất từ thông tin độc lập đầy đủ.)
- **Liên kết tiếng Hàn**: 유효 표본 크기 임계값 (有效 標本 size 臨界値 - yuhyo pyobon keugi imgyegap) — Ngưỡng dung lượng mẫu có hiệu lực thống kê.

## 10. prior predictive distribution check
- **IPA**: /ˈpraɪər prɪˈdɪktɪv ˌdɪstrəˈbyuʃən ʧɛk/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm tân ngữ trong quy trình kiểm tra mô hình Bayes.
- **Core meaning — English**: A validation technique where data is simulated from the prior distributions alone to verify whether the model's baseline assumptions generate sensible and realistic outputs.
- **Core meaning & mental image — Tiếng Việt**: Kiểm tra phân phối dự đoán tiền nghiệm — Hình ảnh việc phác thảo trước các kịch bản có thể xảy ra dựa trên trí tưởng tượng ban đầu xem chúng có phi thực tế hay quá vô lý không trước khi nhìn vào dữ liệu thật.
- **Grammar & collocations**: 
  - perform prior predictive distribution check (thực hiện kiểm tra phân phối dự đoán tiền nghiệm)
  - prior predictive check failure (lỗi kiểm tra dự đoán tiền nghiệm)
  - design prior predictive check (thiết kế kiểm tra dự đoán tiền nghiệm)
- **Register & nuance**: Phương pháp luận thực hành Bayes (Bayesian Workflow Methodology).
- **Examples**:
  - Running a prior predictive distribution check helped the researchers realize their chosen prior assigned absurdly high weights to extreme values. (Việc chạy kiểm tra phân phối dự đoán tiền nghiệm đã giúp các nhà nghiên cứu nhận ra rằng phân phối tiền nghiệm họ chọn đã gán trọng số quá vô lý cho các giá trị cực đoan.)
- **Liên kết tiếng Hàn**: 사전 predictive 분포 검사 (事前 predictive 分布 檢査 - sajeon predictive bunpo geomsa) — Kiểm tra phân phối dữ liệu dự báo từ thông tin tiền nghiệm.

## 11. stochastic programming trace execution
- **IPA**: /stəˈkɑstɪk ˈproʊˌgræmɪŋ treɪs ˈɛksəˈkyuʃən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm tân ngữ trong thực thi mã PPL.
- **Core meaning — English**: The runtime tracing of execution paths in a probabilistic program where random variables are sampled and conditioned on observations dynamically.
- **Core meaning & mental image — Tiếng Việt**: Theo dõi thực thi lập trình ngẫu nhiên — Hình ảnh việc ghi chép lại từng ngã rẽ và kết quả tung xúc xắc trong suốt hành trình chạy chương trình ngẫu nhiên.
- **Grammar & collocations**: 
  - record stochastic programming trace execution (ghi lại dấu vết thực thi lập trình ngẫu nhiên)
  - trace execution path in PPL (theo dõi đường dẫn thực thi trong PPL)
  - dynamic stochastic trace (dấu vết ngẫu nhiên động)
- **Register & nuance**: Thuật ngữ kỹ thuật thực thi phần mềm PPL (PPL Runtime Execution).
- **Examples**:
  - The PPL runtime records a stochastic programming trace execution to build the underlying computational graph for conditional density evaluation. (Môi trường chạy PPL ghi lại dấu vết thực thi lập trình ngẫu nhiên để xây dựng đồ thị tính toán cơ sở cho việc đánh giá mật độ có điều kiện.)
- **Liên kết tiếng Hàn**: 확률적 프로그래밍 추적 실행 (확률적 programming 追跡 執行 - hwakryuljeok peurogeuraeming chujeok sihaeng) — Quá trình ghi vết thực thi mã chương trình xác suất.

## 12. evidence lower bound (ELBO) optimization
- **IPA**: /ˈɛvədəns ˈloʊər baʊnd (ɛl-boʊ) ˌɑptəməˈzeɪʃən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm tân ngữ trong tối ưu hóa biến phân.
- **Core meaning — English**: The maximization of a mathematical lower bound on the marginal log-likelihood, serving as the core objective function in variational inference.
- **Core meaning & mental image — Tiếng Việt**: Tối ưu hóa cận dưới bằng chứng (ELBO) — Hình ảnh việc nâng dần đáy của một chiếc hộp chứa mô hình lên sát mức trần thật tế để xấp xỉ phân phối phức tạp một cách tối ưu.
- **Grammar & collocations**: 
  - maximize evidence lower bound optimization (tối đa hóa tối ưu hóa cận dưới bằng chứng)
  - ELBO optimization convergence (sự hội tụ của tối ưu hóa ELBO)
  - stochastic ELBO optimization (tối ưu hóa ELBO ngẫu nhiên)
- **Register & nuance**: Thuật ngữ toán học và học máy thống kê (Variational Statistics / Machine Learning).
- **Examples**:
  - By framing approximate inference as evidence lower bound optimization, the model can scale to millions of data points rapidly. (Bằng cách định framing suy luận xấp xỉ thành tối ưu hóa cận dưới bằng chứng, mô hình có thể mở rộng quy mô đến hàng triệu điểm dữ liệu một cách nhanh chóng.)
- **Liên kết tiếng Hàn**: 증거 하한 최적화 (證據 下限 最適化 - jeunggeo han-eun chojeok-hwa) — Tối ưu hóa cận dưới bằng chứng (ELBO) trong suy luận biến phân.

## 13. diverging transition energy leapfrog
- **IPA**: /daɪˈvɜrʤɪŋ trænˈzɪʃən ˈɛnərʤi ˈlipˌfrɑg/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong chẩn đoán HMC.
- **Core meaning — English**: A pathological sampling event in HMC where the numerical leapfrog integrator fails due to extreme curvature or infinite geometry, breaking physical energy conservation.
- **Core meaning & mental image — Tiếng Việt**: Bước nhảy năng lượng chuyển tiếp phân kỳ — Hình ảnh viên bi trượt trên mô phỏng vật lý bị văng ra khỏi quỹ đạo do vấp phải một vách đá thẳng đứng cực kỳ góc cạnh.
- **Grammar & collocations**: 
  - encounter diverging transition energy leapfrog (gặp phải bước nhảy năng lượng phân kỳ)
  - eliminate diverging transitions (loại bỏ các chuyển đổi phân kỳ)
  - warning of diverging transitions (cảnh báo các chuyển đổi phân kỳ)
- **Register & nuance**: Thuật ngữ chẩn đoán lỗi lấy mẫu nâng cao (Advanced MCMC Diagnostics).
- **Examples**:
  - The presence of a high number of diverging transition energy leapfrog warnings suggests that the posterior geometry has severe singularities. (Sự xuất hiện của số lượng lớn cảnh báo bước nhảy năng lượng phân kỳ cho thấy hình học hậu nghiệm có các điểm kỳ dị nghiêm trọng.)
- **Liên kết tiếng Hàn**: 발산하는 전이 에너지 도약 (發散- transfer energy leapfrog - balsanhaneun jeoni eoneoji doyak) — Lỗi phân kỳ trong bước nhảy tích hợp năng lượng HMC.

## 14. continuous parameter symplectic integrator
- **IPA**: /kənˈtɪnyuəs pəˈramətər sɪmˈplɛktɪk ˈɪntəˌgreɪtər/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong mô phỏng vật lý hệ thống.
- **Core meaning — English**: A specialized numerical integration scheme that preserves the geometric phase-space volume of Hamiltonian systems over long simulation trajectories.
- **Core meaning & mental image — Tiếng Việt**: Bộ tích hợp bảo toàn diện tích pha tham số liên tục — Hình ảnh một hệ thống bánh răng hoàn hảo bảo toàn trọn vẹn năng lượng và không gian chuyển động mà không làm tiêu hao hay phình to hệ thống theo thời gian.
- **Grammar & collocations**: 
  - design continuous parameter symplectic integrator (thiết kế bộ tích hợp giao cảm tham số liên tục)
  - symplectic integrator step size (kích thước bước của bộ tích hợp giao cảm)
  - accuracy of symplectic integrator (độ chính xác của bộ tích hợp giao cảm)
- **Register & nuance**: Thuật ngữ phương pháp số và vật lý tính toán (Numerical Analysis / Computational Physics).
- **Examples**:
  - Hamiltonian Monte Carlo algorithms require a continuous parameter symplectic integrator to accurately simulate frictionless motion in high-dimensional space. (Các thuật toán Monte Carlo Hamiltonian đòi hỏi một bộ tích hợp giao cảm tham số liên tục để mô phỏng chính xác chuyển động không ma sát trong không gian nhiều chiều.)
- **Liên kết tiếng Hàn**: 연속 파라미터 심플렉틱 적분기 (連續 parameter symplectic 積分機 - yeonsok parameter simplekteok jeok-ungi) — Bộ tích hợp số bảo toàn không gian pha cho hệ Hamiltonian.

## 15. Bayesian hierarchical modeling framework
- **IPA**: /ˈbeɪziən ˌhaɪəˈrɑrskɪk ˈmɑdəlɪŋ ˈfreɪmˌwɜrk/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong phân tích thống kê cấu trúc.
- **Core meaning — English**: A statistical modeling methodology structured across multiple levels of parameters, allowing groups to share statistical strength while accounting for group-specific variations.
- **Core meaning & mental image — Tiếng Việt**: Khung mô hình hóa phân cấp Bayes — Hình ảnh một hệ thống cây gia phả nhiều tầng, nơi các đặc điểm chung của cả dòng họ được chia sẻ xuống từng thành viên nhỏ bên dưới.
- **Grammar & collocations**: 
  - build a Bayesian hierarchical modeling framework (xây dựng khung mô hình phân cấp Bayes)
  - fit Bayesian hierarchical models (khớp các mô hình phân cấp Bayes)
  - flexibility of Bayesian hierarchical modeling framework (sự linh hoạt của khung mô hình hóa phân cấp Bayes)
- **Register & nuance**: Thuật ngữ thống kê ứng dụng tiên tiến (Applied Hierarchical Statistics).
- **Examples**:
  - Public health researchers leveraged a Bayesian hierarchical modeling framework to analyze disease incidence rates across nested geographic regions. (Các nhà nghiên cứu y tế công cộng đã tận dụng khung mô hình hóa phân cấp Bayes để phân tích tỷ lệ mắc bệnh trên các khu vực địa lý lồng nhau.)
- **Liên kết tiếng Hàn**: 베이지안 계층적 모델링 프레임워크 (Bayesian 階層的 modeling framework - beijian gyecheongjeok modeling peurimweokeu) — Khung mô hình phân tầng thống kê Bayes.

## 16. score function policy gradient estimator
- **IPA**: /skɔr ˈfʌŋkʃən ˈpɑləsi ˈgreɪdiənt ˈɛstəˌmeɪtər/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm tân ngữ trong tối ưu hóa ngẫu nhiên.
- **Core meaning — English**: A gradient estimation technique (also known as the REINFORCE trick) used to compute derivatives of expectations over probability distributions with respect to parameters.
- **Core meaning & mental image — Tiếng Việt**: Bộ ước lượng độ dốc chính sách hàm điểm số — Hình ảnh việc điều chỉnh chiến lược dựa trên việc quan sát phần thưởng nhận được thông qua tỷ lệ điểm số xác suất xuất hiện.
- **Grammar & collocations**: 
  - apply score function policy gradient estimator (áp dụng bộ ước lượng độ dốc chính sách hàm điểm số)
  - high variance of score function estimator (độ phương sai cao của bộ ước lượng hàm điểm số)
  - baseline subtraction for score function estimator (trừ đường cơ sở cho bộ ước lượng hàm điểm số)
- **Register & nuance**: Thuật ngữ học tăng cường và tối ưu hóa xác suất (Reinforcement Learning / Stochastic Optimization).
- **Examples**:
  - The score function policy gradient estimator allows optimization through discrete random variables, though it often suffers from high estimator variance. (Bộ ước lượng độ dốc chính sách hàm điểm số cho phép tối ưu hóa thông qua các biến ngẫu nhiên rời rạc, mặc dù nó thường chịu phương sai ước lượng cao.)
- **Liên kết tiếng Hàn**: 스코어 함수 정책 그래디언트 추정기 (score function 政策 gradient 推定器 - score function jeongchaek geuraedieuteu chujeonggi) — Bộ ước lượng độ dốc chính sách dựa trên hàm điểm số.

## 17. reparameterization trick Gaussian
- **IPA**: /ri-pərəmɪtəˈreɪʃən trɪk ˈgɑsiən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm tân ngữ trong mạng biến phân.
- **Core meaning — English**: A mathematical transformation that rewrites a stochastic Gaussian sampling node as a deterministic function of parameters plus an independent noise variable, enabling backpropagation.
- **Core meaning & mental image — Tiếng Việt**: Mẹo tham số hóa lại phân phối chuẩn — Hình ảnh việc tách việc rút thăm ngẫu nhiên ra thành một ống dẫn nhiễu cố định độc lập, giúp dòng chảy đạo hàm ngược có thể chạy qua được mạch.
- **Grammar & collocations**: 
  - implement reparameterization trick Gaussian (triển khai mẹo tham số hóa lại Gaussian)
  - benefits of reparameterization trick (lợi ích của mẹo tham số hóa lại)
  - Gaussian reparameterization in variational autoencoders (tham số hóa lại Gaussian trong bộ mã hóa tự động biến phân)
- **Register & nuance**: Thuật ngữ học máy hiện đại (Deep Learning / Variational Inference).
- **Examples**:
  - By applying the reparameterization trick Gaussian, the network can pass gradients directly through stochastic sampling layers during training. (Bằng cách áp dụng mẹo tham số hóa lại Gaussian, mạng có thể truyền trực tiếp các độ dốc qua các lớp lấy mẫu ngẫu nhiên trong quá trình huấn luyện.)
- **Liên kết tiếng Hàn**: 가우스 재매개변수화 트릭 (Gaussian 再parameter化 trick - gaueuseu jaemaegaebyeon-suhwa teurik) — Kỹ thuật tham số hóa lại biến ngẫu nhiên phân phối chuẩn để truyền ngược đạo hàm.

## 18. amortized variational inference network
- **IPA**: /æmərˌtaɪzəd ˌvɛriˈeɪʃənəl ˈɪnfərans ˈnɛtwɜrk/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong kiến trúc mạng thần kinh.
- **Core meaning — English**: A neural network trained to instantly predict optimal variational parameters for any given data instance, eliminating the need to solve a separate optimization problem for each new observation.
- **Core meaning & mental image — Tiếng Việt**: Mạng suy luận biến phân phân bổ trả góp (Amortized) — Hình ảnh một cỗ máy thông minh học cách giải nhanh đáp án cho mọi bài toán mới ngay lập tức mà không cần ngồi tính lại từ đầu mỗi lần.
- **Grammar & collocations**: 
  - train amortized variational inference network (huấn luyện mạng suy luận biến phân phân bổ trả góp)
  - architecture of amortized variational inference network (kiến trúc mạng suy luận biến phân phân bổ)
  - efficiency of amortized inference (hiệu năng của suy luận phân bổ)
- **Register & nuance**: Thuật ngữ học sâu và suy luận nhanh (Deep Learning / Fast Inference).
- **Examples**:
  - An amortized variational inference network predicts posterior distributions for thousands of images in a fraction of a second. (Một mạng suy luận biến phân phân bổ trả góp dự đoán phân phối hậu nghiệm cho hàng nghìn bức ảnh chỉ trong một phần nghìn giây.)
- **Liên kết tiếng Hàn**: 상각화된 변분 추론 네트워크 (償却化된 變分 推論 network - sanggakhwa-doen byeonbun churon network) — Mạng nơ-ron học trước các tham số suy luận biến phân để dự đoán nhanh.

## 19. conditioned stochastic execution path
- **IPA**: /kənˈdɪʃənd stəˈkɑstɪk ˈɛksəˈkyuʃən pæθ/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm tân ngữ trong trình biên dịch PPL.
- **Core meaning — English**: A dynamic execution branch in a probabilistic program whose control flow or sampled values are updated based on observed evidence constraints.
- **Core meaning & mental image — Tiếng Việt**: Đường dẫn thực thi ngẫu nhiên có điều kiện — Hình ảnh các ngã rẽ trên hành trình tự động thay đổi hướng đi ngay khi nhận được các tín hiệu chỉ dẫn từ thực tế quan sát.
- **Grammar & collocations**: 
  - evaluate conditioned stochastic execution path (đánh giá đường dẫn thực thi ngẫu nhiên có điều kiện)
  - dynamic conditioned execution in PPL (thực thi có điều kiện động trong PPL)
  - trace conditioned stochastic path (theo dõi đường dẫn ngẫu nhiên có điều kiện)
- **Register & nuance**: Thuật ngữ chuyên sâu trong trình biên dịch PPL (PPL Compiler Design).
- **Examples**:
  - Complex probabilistic models often feature a conditioned stochastic execution path that changes dynamically based on incoming sensor readings. (Các mô hình xác suất phức tạp thường có đường dẫn thực thi ngẫu nhiên có điều kiện thay đổi linh hoạt dựa trên các kết quả đọc cảm biến đầu vào.)
- **Liên kết tiếng Hàn**: 조건부 확률적 실행 경로 (條件付 확률적 執行 経路 - jogonbu hwakryuljeok sihaeng gyeongro) — Đường dẫn thực thi mã ngẫu nhiên chịu sự ràng buộc điều kiện.

## 20. model misspecification posterior check
- **IPA**: /ˈmɑdəl ˌmɪspɛsəfəˈkeɪʃən pɑˈstɪriər ʧɛk/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm tân ngữ trong thẩm định mô hình Bayes.
- **Core meaning — English**: A diagnostic procedure designed to uncover flaws where the chosen mathematical model fails to capture the true data-generating process.
- **Core meaning & mental image — Tiếng Việt**: Kiểm tra hậu nghiệm sai lệch mô hình — Hình ảnh việc đối chiếu chiếc áo thiết kế với kích thước thực tế của cơ thể để tìm ra chỗ may bị chật hoặc sai phom dáng.
- **Grammar & collocations**: 
  - perform model misspecification posterior check (thực hiện kiểm tra hậu nghiệm sai lệch mô hình)
  - detect model misspecification (phát hiện sai lệch mô hình)
  - consequences of model misspecification (hậu quả của việc mô hình bị sai lệch)
- **Register & nuance**: Thống kê thực hành chuyên sâu (Applied Bayesian Validation).
- **Examples**:
  - A rigorous model misspecification posterior check revealed that the assumption of Gaussian errors was severely biasing the parameter estimates. (Một cuộc kiểm tra hậu nghiệm sai lệch mô hình nghiêm ngặt đã tiết lộ rằng giả định sai số Gaussian đang làm chệch lệch nghiêm trọng các ước lượng tham số.)
- **Liên kết tiếng Hàn**: 모델 오설정 사후 검사 (model 誤設定 事後 檢査 - model oseoljeong sahu geomsa) — Kiểm tra hậu nghiệm để phát hiện sự mô tả sai lệch của mô hình.

## 21. posterior predictive distribution fit
- **IPA**: /pɑˈstɪriər prɪˈdɪktɪv ˌdɪstrəˈbyuʃən fɪt/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong kiểm định chất lượng dự báo.
- **Core meaning — English**: The quantitative measure of how well data replicated from the fitted posterior distribution matches the original observed dataset.
- **Core meaning & mental image — Tiếng Việt**: Độ khớp phân phối dự đoán hậu nghiệm — Hình ảnh việc đặt bản phác thảo dự báo lên chồng khít lên bức ảnh thực tế để xem chúng trùng khớp đến mức độ nào.
- **Grammar & collocations**: 
  - assess posterior predictive distribution fit (đánh giá độ khớp phân phối dự đoán hậu nghiệm)
  - poor posterior predictive fit (độ khớp dự đoán hậu nghiệm kém)
  - graphical posterior predictive check (kiểm tra dự đoán hậu nghiệm bằng đồ thị)
- **Register & nuance**: Thuật ngữ đánh giá mô hình thống kê (Statistical Model Validation).
- **Examples**:
  - Visualizing the posterior predictive distribution fit showed that the model captured the central tendency well but underestimated extreme tail events. (Việc trực quan hóa độ khớp phân phối dự đoán hậu nghiệm cho thấy mô hình nắm bắt tốt xu hướng trung tâm nhưng đánh giá thấp các sự kiện đuôi cực đoan.)
- **Liên kết tiếng Hàn**: 사후 예측 분포 적합도 (事後 予測 分布 適合度 - sahu yecheuk bunpo jeokhapdo) — Mức độ phù hợp của phân phối dự đoán hậu nghiệm so với dữ liệu thực tế.

## 22. generalized linear mixed model PPL
- **IPA**: /ˈʤɛnərəˌlaɪzd ˈlɪniər mɪkst ˈmɑdəl pi-pi-ɛl/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm tân ngữ trong phần mềm mô hình hóa thống kê.
- **Core meaning — English**: A specialized probabilistic programming implementation designed to fit models containing both fixed effects and random effects across non-normal response distributions.
- **Core meaning & mental image — Tiếng Việt**: Ngôn ngữ lập trình xác suất mô hình hỗn hợp tuyến tính tổng quát — Hình ảnh công cụ lập trình giúp giải quyết các bài toán thống kê phức tạp có cả yếu tố chung và yếu tố cá thể phân tán.
- **Grammar & collocations**: 
  - fit generalized linear mixed model PPL (khớp PPL mô hình hỗn hợp tuyến tính tổng quát)
  - speed of GLMM in PPL frameworks (tốc độ của GLMM trong các khung PPL)
  - estimate GLMM parameters via PPL (ước lượng tham số GLMM qua PPL)
- **Register & nuance**: Thuật ngữ thống kê sinh học và khoa học xã hội tính toán (Biostatistics / Social Sciences).
- **Examples**:
  - Researchers implemented a generalized linear mixed model PPL to account for repeated measures across diverse experimental subjects. (Các nhà nghiên cứu đã triển khai PPL mô hình hỗn hợp tuyến tính tổng quát để tính toán các lần đo lặp lại trên nhiều đối tượng thí nghiệm đa dạng.)
- **Liên kết tiếng Hàn**: 일반화 선형 혼합 모델 PPL (一般化 線形 混合 model PPL - ilbanhwa seonhyeong honhap model PPL) — Ngôn ngữ lập trình xác suất cho mô hình hỗn hợp tuyến tính tổng quát.

## 23. probabilistic graph graphical representation
- **IPA**: /ˌprɑbəˈbɪstɪk græf ˈgræfɪkəl ˌrɛprəzɛnˈteɪʃən/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm tân ngữ trong biểu diễn cấu trúc mô hình.
- **Core meaning — English**: A diagrammatic network depicting conditional independence assumptions among random variables using nodes and directed or undirected edges.
- **Core meaning & mental image — Tiếng Việt**: Biểu diễn đồ họa đồ thị xác suất — Hình ảnh sơ đồ mạng lưới các ô tròn nối với nhau bằng các mũi tên chỉ rõ biến nào ảnh hưởng trực tiếp đến biến nào.
- **Grammar & collocations**: 
  - draw probabilistic graph graphical representation (vẽ biểu diễn đồ họa đồ thị xác suất)
  - interpret graphical representation of PPL (diễn giải biểu diễn đồ họa của PPL)
  - convert code to probabilistic graphical representation (chuyển đổi mã thành biểu diễn đồ họa xác suất)
- **Register & nuance**: Thuật ngữ lý thuyết đồ thị xác suất (Probabilistic Graphical Models).
- **Examples**:
  - The probabilistic graph graphical representation made it intuitive for domain experts to review the conditional dependencies built into the model. (Biểu diễn đồ họa đồ thị xác suất giúp các chuyên gia trong lĩnh vực trực ⭢ quan xem xét các phụ thuộc có điều kiện được tích hợp vào mô hình.)
- **Liên kết tiếng Hàn**: 확률적 그래프 시각적 표현 (확률적 graph 視覺的 表現 - hwakryuljeok geuraepeu sigajeok pyohyeon) — Biểu diễn trực quan dạng đồ thị của mô hình xác suất.

## 24. high-dimensional Bayesian parameter space
- **IPA**: /haɪ-daɪˈmɛnʃənəl ˈbeɪziən pəˈrɑmətər speɪs/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong không gian hình học thống kê.
- **Core meaning — English**: A massive multi-parameter mathematical coordinate space where Bayesian inference algorithms must navigate to locate regions of high posterior density.
- **Core meaning & mental image — Tiếng Việt**: Không gian tham số Bayes số chiều cao — Hình ảnh một mê cung không gian hàng nghìn chiều nơi thuật toán phải dò dẫm tìm ra những đỉnh núi có mật độ xác suất cao nhất.
- **Grammar & collocations**: 
  - explore high-dimensional Bayesian parameter space (khám phá không gian tham số Bayes nhiều chiều)
  - geometry of high-dimensional parameter space (hình học của không gian tham số nhiều chiều)
  - curse of dimensionality in Bayesian parameter space (Lời nguyền số chiều trong không gian tham số Bayes)
- **Register & nuance**: Thuật ngữ toán học và thống kê nâng cao (Advanced Statistical Geometry).
- **Examples**:
  - Navigating a high-dimensional Bayesian parameter space requires advanced geometric sampling algorithms to prevent getting trapped in narrow ravines. (Việc điều hướng trong không gian tham số Bayes nhiều chiều đòi hỏi các thuật toán lấy mẫu hình học tiên tiến để tránh bị mắc kẹt trong các khe hẹp.)
- **Liên kết tiếng Hàn**: 고차원 베이지안 파라미터 공간 (高次元 Bayesian parameter 空間 - gochawon beijian parameter gonggan) — Không gian tham số thống kê Bayes có số chiều cực lớn.

## 25. automated statistical inference engine
- **IPA**: /ˈɔtəˌmeɪtəd stəˈtɪstɪkəl ˈɪnfərans ˈɛnʤɪn/
- **Loại từ & vị trí trong câu**: Cụm danh từ (Noun phrase), làm chủ ngữ hoặc tân ngữ trong hệ thống phần mềm thống kê.
- **Core meaning — English**: An integrated software system that ingests model definitions and raw data to autonomously generate fitted posteriors, diagnostics, and predictive checks without manual intervention.
- **Core meaning & mental image — Tiếng Việt**: Công cụ suy luận thống kê tự động — Hình ảnh một cỗ máy tự động nhận dữ liệu đầu vào và tự chạy toàn bộ các bước kiểm tra, phân tích, trả ra kết quả thống kê hoàn chỉnh.
- **Grammar & collocations**: 
  - deploy automated statistical inference engine (triển khai công cụ suy luận thống kê tự động)
  - power of automated inference engines (sức mạnh của các công cụ suy luận tự động)
  - build an automated statistical inference engine (xây dựng một công cụ suy luận thống kê tự động)
- **Register & nuance**: Thuật ngữ công nghệ phần mềm khoa học dữ liệu (Data Science Software Systems).
- **Examples**:
  - The new probabilistic programming library acts as an automated statistical inference engine, abstracting away complex sampling math for end users. (Thư viện lập trình xác suất mới đóng vai trò như một công cụ suy luận thống kê tự động, ẩn đi các toán học lấy mẫu phức tạp cho người dùng cuối.)
- **Liên kết tiếng Hàn**: 자동 통계적 추론 엔진 (自動 統計的 推論 engine - jadong tonggyeokjeok churon enjin) — Hệ thống phần mềm thực hiện suy luận thống kê hoàn toàn tự động.

---

## Review in context: Part 1 (items 1–12)
In modern data science, building complex statistical models has been revolutionized by the advent of any **probabilistic programming language (PPL)**. Instead of writing manual likelihood evaluations, practitioners rely on an **automated differentiation engine** to perform rapid **log-joint density gradient calculation**. This underpins advanced gradient-based algorithms such as the **Hamiltonian Monte Carlo (HMC) sampler** and the adaptive **no-U-turn sampler (NUTS)**. When executing models, the runtime creates a **stochastic programming trace execution** to handle conditional branches. To ensure reliability, analysts run a **prior predictive distribution check** before fitting, and later inspect the **posterior distribution sampling chain** using the **Markov chain convergence diagnostic (R-hat)** alongside the **effective sample size (ESS) threshold**. When MCMC sampling is too slow for massive data, alternative approaches like **differentiable variational inference** optimize the **evidence lower bound (ELBO) optimization** objective directly.

Trong khoa học dữ liệu hiện đại, việc xây dựng các mô hình thống kê phức tạp đã được cách mạng hóa nhờ sự ra đời của bất kỳ **ngôn ngữ lập trình xác suất (PPL)** nào. Thay vì viết các đánh giá hàm hợp lý thủ công, các chuyên gia dựa vào **công cụ vi phân tự động** để thực hiện **tính toán độ dốc mật độ hợp khớp log** nhanh chóng. Điều này làm nền tảng cho các thuật toán dựa trên độ dốc tiên tiến như **trình lấy mẫu Monte Carlo Hamiltonian (HMC)** và **trình lấy mẫu không quay đầu (NUTS)** thích ứng. Khi thực thi các mô hình, môi trường chạy tạo ra một **theo dõi thực thi lập trình ngẫu nhiên** để xử lý các nhánh có điều kiện. Để đảm bảo độ tin cậy, các nhà phân tích chạy **kiểm tra phân phối dự đoán tiền nghiệm** trước khi khớp, và sau đó kiểm tra **chuỗi lấy mẫu phân phối hậu nghiệm** bằng cách sử dụng **kiểm định hội tụ chuỗi Markov (R-hat)** bên cạnh **ngưỡng kích thước mẫu hiệu quả (ESS)**. Khi việc lấy mẫu MCMC quá chậm đối với dữ liệu lớn, các phương pháp thay thế như **suy luận biến phân khả vi** tối ưu hóa mục tiêu **tối ưu hóa cận dưới bằng chứng (ELBO)** một cách trực tiếp.

## Review in context: Part 2 (items 13–25)
Navigating a **high-dimensional Bayesian parameter space** is fraught with technical hurdles, such as encountering a **diverging transition energy leapfrog** error when the numerical geometry breaks down. To prevent this, samplers depend on a **continuous parameter symplectic integrator** to preserve phase-space volume. For structured grouping, researchers often deploy a **Bayesian hierarchical modeling framework** or fit a **generalized linear mixed model PPL**. In deep probabilistic architectures, practitioners utilize the **reparameterization trick Gaussian** to enable backpropagation through stochastic layers or train an **amortized variational inference network** for instant predictions. Furthermore, complex models may feature a **conditioned stochastic execution path** and can be visualized via a **probabilistic graph graphical representation**. To safeguard against errors, developers perform a **model misspecification posterior check** and evaluate the **posterior predictive distribution fit**. Ultimately, whether through gradient sampling or neural approximations, an **automated statistical inference engine** transforms raw data into rigorous scientific insights.

Việc điều hướng trong **không gian tham số Bayes nhiều chiều** đầy rẫy các rào cản kỹ thuật, chẳng hạn như gặp phải lỗi **bước nhảy năng lượng chuyển tiếp phân kỳ** khi hình học số bị phá vỡ. Để ngăn chặn điều này, các trình lấy mẫu phụ thuộc vào **bộ tích hợp giao cảm tham số liên tục** để bảo toàn thể tích không gian pha. Đối với việc nhóm cấu trúc, các nhà nghiên cứu thường triển khai **khung mô hình hóa phân cấp Bayes** hoặc khớp **PPL mô hình hỗn hợp tuyến tính tổng quát**. Trong các kiến trúc xác suất sâu, các chuyên gia tận dụng **mẹo tham số hóa lại Gaussian** để cho phép truyền ngược đạo hàm qua các lớp ngẫu nhiên hoặc huấn luyện **mạng suy luận biến phân phân bổ trả góp** để dự đoán tức thì. Hơn nữa, các mô hình phức tạp có thể có **đường dẫn thực thi ngẫu nhiên có điều kiện** và có thể được trực quan hóa thông qua **biểu diễn đồ họa đồ thị xác suất**. Để phòng ngừa lỗi, các nhà phát triển thực hiện **kiểm tra hậu nghiệm sai lệch mô hình** và đánh giá **độ khớp phân phối dự đoán hậu nghiệm**. Cuối cùng, dù là thông qua lấy mẫu độ dốc hay xấp xỉ thần kinh, một **công cụ suy luận thống kê tự động** biến đổi dữ liệu thô thành những hiểu biết khoa học chặt chẽ.
