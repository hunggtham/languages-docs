# C1 Vocabulary 03 — Monte Carlo simulation methods, stochastic differential modeling, and variance reduction techniques

Welcome to C1 Vocabulary Lesson 03. This lesson covers advanced quantitative analysis, probability modeling, stochastic calculus, and numerical simulation techniques used in finance, engineering, and data science.

## 1. Monte Carlo numerical simulation
- /ˌmɒnti ˈkɑːrloʊ nuːˈmɛrɪkəl ˌsɪmjuˈleɪʃən/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Frequently acts as subject or object in quantitative finance and statistical computing.
- Core meaning — English: A computational algorithm that relies on repeated random sampling to compute numerical results and model the probability of different outcomes in complex systems.
- Core meaning & mental image — Tiếng Việt: Mô phỏng số Monte Carlo — Hình ảnh hàng triệu đường đi ngẫu nhiên được máy tính tính toán song song để dự đoán xác suất rủi ro của một danh mục đầu tư phức tạp.
- Grammar & collocations:
  - run a Monte Carlo numerical simulation (chạy một mô phỏng số Monte Carlo)
  - results of a Monte Carlo numerical simulation (kết quả của một mô phỏng số Monte Carlo)
  - massive Monte Carlo numerical simulation (mô phỏng số Monte Carlo quy mô lớn)
- Register & nuance: Quantitative Finance / Applied Mathematics. Standard industry tool for option pricing and risk management.
- Examples:
  - Quantitative analysts rely heavily on **Monte Carlo numerical simulation** to price exotic derivatives and evaluate portfolio risk under extreme market shocks. (Các nhà phân tích định lượng phụ thuộc rất nhiều vào mô phỏng số Monte Carlo để định giá các phái sinh ngoại lai và đánh giá rủi ro danh mục đầu tư dưới những cú sốc thị trường khắc nghiệt.)
- Liên kết tiếng Hàn: 몬테카를로 수치적 시뮬레이션 (mon-te-ka-reu-lo su-chi-jeok si-mul-re-i-syeon) — Kết hợp từ mượn "Monte Carlo", chữ Hán 數値的 (số trị đích), và từ mượn "simulation".

## 2. stochastic differential trajectory
- /stəˈkæstɪk dɪfəˈrɛnʃəl trəˈdʒɛktəri/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Acts as subject or direct object in stochastic calculus and financial mathematics.
- Core meaning — English: A single simulated path of a random process defined by a stochastic differential equation over time.
- Core meaning & mental image — Tiếng Việt: Quỹ đạo vi phân ngẫu nhiên — Hình ảnh một đường uốn lượn bất định biểu diễn biến động ngẫu nhiên của giá cổ phiếu hoặc nhiệt độ theo thời gian.
- Grammar & collocations:
  - simulate a stochastic differential trajectory (mô phỏng một quỹ đạo vi phân ngẫu nhiên)
  - discrete stochastic differential trajectory (quỹ đạo vi phân ngẫu nhiên rời rạc)
  - analyze stochastic differential trajectories (phân tích các quỹ đạo vi phân ngẫu nhiên)
- Register & nuance: Stochastic Calculus / Advanced Mathematics. Used by mathematicians and financial engineers.
- Examples:
  - Each **stochastic differential trajectory** represents a possible future price path for the underlying asset under Brownian motion. (Mỗi quỹ đạo vi phân ngẫu nhiên đại diện cho một đường đi giá tương lai khả dĩ của tài sản cơ sở dưới chuyển động Brownian.)
- Liên kết tiếng Hàn: 확률적 미분 궤적 (hwak-yul-jeok mi-bun gwe-jeok) — Kết hợp từ chữ Hán 確率的 (xác suất đích), 微分 (vi phân), và 軌跡 (quỹ tích - quỹ đạo).

## 3. variance reduction antithetic variates
- /ˈvɛəriəns rɪˈdʌkʃən ænθɪˈtɛtɪk ˈvɛəriəts/
- Loại từ & vị trí trong câu: Specialized noun phrase (NP). Often serves as the subject or object in Monte Carlo efficiency optimization.
- Core meaning — English: A simulation efficiency technique that pairs each random draw with its exact negative counterpart to cancel out fluctuations and lower estimator variance.
- Core meaning & mental image — Tiếng Việt: Biến đối xứng giảm phương sai — Hình ảnh việc tạo ra các cặp số ngẫu nhiên đối nghịch nhau (như x và -x) để bù trừ sai số và làm kết quả mô phỏng ổn định hơn.
- Grammar & collocations:
  - implement variance reduction using antithetic variates (thực hiện giảm phương sai bằng biến đối xứng)
  - efficiency of variance reduction antithetic variates (hiệu quả của biến đối xứng giảm phương sai)
  - apply variance reduction antithetic variates (áp dụng kỹ thuật giảm phương sai biến đối xứng)
- Register & nuance: Monte Carlo Methods / Statistics. Essential technique for speeding up financial simulations.
- Examples:
  - Practitioners apply **variance reduction antithetic variates** to cut required computation time in half without sacrificing pricing accuracy. (Các chuyên gia áp dụng biến đối xứng giảm phương sai để cắt giảm một nửa thời gian tính toán yêu cầu mà không làm hy sinh độ chính xác định giá.)
- Liên kết tiếng Hàn: 대칭 변량 분산 감소법 (dae-cheong byeon-ryang bun-san gam-so-beop) — Kết hợp từ chữ Hán 對称変量 (đối xưng biến lượng), 分散 (phân tán -> phương sai), và 減少法 (giảm thiểu pháp).

## 4. Latin hypercube stratified sampling
- /ˈlætɪn ˈhaɪpərˌkjuːb ˈstrætɪfaɪd ˈsæmplɪŋ/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Functions as subject or object in experimental design and Monte Carlo sampling.
- Core meaning — English: A multidimensional stratified sampling method that ensures a thorough and even distribution of random samples across all parameter ranges.
- Core meaning & mental image — Tiếng Việt: Lấy mẫu phân tầng siêu lập phương Latinh — Hình ảnh việc chia không gian đa chiều thành các ô lưới đồng đều để đảm bảo các điểm mẫu ngẫu nhiên trải đều mọi góc ngách thay vì tập trung một chỗ.
- Grammar & collocations:
  - generate samples via Latin hypercube stratified sampling (tạo mẫu thông qua lấy mẫu phân tầng siêu lập phương Latinh)
  - benefits of Latin hypercube stratified sampling (lợi ích của lấy mẫu phân tầng siêu lập phương Latinh)
  - execute Latin hypercube stratified sampling (thực hiện lấy mẫu phân tầng siêu lập phương Latinh)
- Register & nuance: Statistics / Monte Carlo Simulation. Advanced sampling design for computer experiments.
- Examples:
  - **Latin hypercube stratified sampling** ensures that rare parameter combinations are adequately represented during engineering stress testing. (Lấy mẫu phân tầng siêu lập phương Latinh đảm bảo rằng các tổ hợp tham số hiếm gặp được biểu diễn đầy đủ trong quá trình kiểm tra sức chịu tải kỹ thuật.)
- Liên kết tiếng Hàn: 라틴 초입방 층화 추출 (ra-tin cho-ip-bang chung-hwa chu-chul) — Kết hợp từ tiếng mượn "Latin hypercube", chữ Hán 層化 (tầng hóa), và 抽出 (trừu xuất - lấy mẫu).

## 5. pseudorandom number generator seed
- /ˈsuːdoʊˌrændəm ˈnʌmbər ˈdʒɛnəreɪtər siːd/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Frequently acts as subject or object in computational programming and simulations.
- Core meaning — English: An initial integer value used to initialize a deterministic algorithm that generates a repeatable sequence of pseudorandom numbers.
- Core meaning & mental image — Tiếng Việt: Hạt giống bộ sinh số giả ngẫu nhiên — Hình ảnh con số khởi đầu kích hoạt một chuỗi số ngẫu nhiên nhưng có thể tái lập lại chính xác y hệt trong các lần chạy thử nghiệm sau.
- Grammar & collocations:
  - set a pseudorandom number generator seed (đặt hạt giống bộ sinh số giả ngẫu nhiên)
  - fixed pseudorandom number generator seed (hạt giống bộ sinh số giả ngẫu nhiên cố định)
  - reproduce results via pseudorandom number generator seed (tái lập kết quả qua hạt giống sinh số giả ngẫu nhiên)
- Register & nuance: Computational Science / Software Engineering. Vital for reproducibility in stochastic research.
- Examples:
  - Setting a fixed **pseudorandom number generator seed** is mandatory to ensure that simulation experiments remain fully reproducible across different computing clusters. (Việc thiết lập hạt giống bộ sinh số giả ngẫu nhiên cố định là bắt buộc để đảm bảo các thí nghiệm mô phỏng có thể tái lập hoàn toàn trên các cụm máy tính khác nhau.)
- Liên kết tiếng Hàn: 의사난수 생성기 시드 (의사亂數 生成器 seed) (ui-sa-nan-su saeng-seong-gi si-deu) — Kết hợp từ chữ Hán 疑似亂數 (nghĩ tự loạn số - số giả ngẫu nhiên), 生成器 (sinh thành khí - bộ tạo), và từ mượn "seed".

## 6. probability density function sampling
- /ˌprɑːbəˈbɪlɪti ˈdɛnsɪti ˈfʌŋkʃən ˈsæmplɪŋ/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Functions as subject or object in statistical physics and Monte Carlo integration.
- Core meaning — English: The process of drawing random numbers from a targeted statistical distribution matching its specific probability density function.
- Core meaning & mental image — Tiếng Việt: Lấy mẫu hàm mật độ xác suất — Hình ảnh việc rút các điểm dữ liệu sao cho tần suất xuất hiện của chúng tuân theo đúng hình dáng đường cong phân phối xác suất cho trước (như hình chuông).
- Grammar & collocations:
  - perform probability density function sampling (thực hiện lấy mẫu hàm mật độ xác suất)
  - inverse transform probability density function sampling (lấy mẫu hàm mật độ xác suất bằng phép biến đổi nghịch đảo)
  - efficient probability density function sampling (lấy mẫu hàm mật độ xác suất hiệu quả)
- Register & nuance: Probability Theory / Statistics. Fundamental technique for stochastic simulation algorithms.
- Examples:
  - Advanced **probability density function sampling** allows researchers to simulate molecular collisions according to Maxwell-Boltzmann distributions. (Lấy mẫu hàm mật độ xác suất nâng cao cho phép các nhà nghiên cứu mô phỏng các va chạm phân tử theo phân phối Maxwell-Boltzmann.)
- Liên kết tiếng Hàn: 확률 밀도 함수 샘플링 (hwak-yul mil-do ham-su saem-peul-ling) — Kết hợp từ chữ Hán 確率密度関数 (xác suất mật độ hàm số) và từ mượn "sampling".

## 7. convergence rate asymptotic bound
- /kənˈvɜːrdʒəns reɪt ˌæsɪmˈtɒtɪk baʊnd/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Acts as subject or object in numerical analysis and complexity theory.
- Core meaning — English: The mathematical limit describing how fast a numerical approximation algorithm approaches the true analytical solution as the sample size increases.
- Core meaning & mental image — Tiếng Việt: Giới hạn tiệm cận tốc độ hội tụ — Hình ảnh đường cong sai số lao dốc về không khi số lượng mẫu tăng lên đến vô cực, bị chặn trên bởi một hàm toán học nghiêm ngặt.
- Grammar & collocations:
  - calculate the convergence rate asymptotic bound (tính toán giới hạn tiệm cận tốc độ hội tụ)
  - theoretical convergence rate asymptotic bound (giới hạn tiệm cận tốc độ hội tụ lý thuyết)
  - improve convergence rate asymptotic bound (cải thiện giới hạn tiệm cận tốc độ hội tụ)
- Register & nuance: Numerical Analysis / Advanced Mathematics. Used by mathematicians analyzing algorithm efficiency.
- Examples:
  - Standard Monte Carlo methods exhibit a **convergence rate asymptotic bound** of $O(N^{-1/2})$, motivating the development of quasi-Monte Carlo techniques. (Các phương pháp Monte Carlo tiêu chuẩn thể hiện giới hạn tiệm cận tốc độ hội tụ là $O(N^{-1/2})$, thúc đẩy việc phát triển các kỹ thuật quasi-Monte Carlo.)
- Liên kết tiếng Hàn: 수렴 속도 점근적 상한 (su-ryeom sok-do jeom-geun-jeok sang-han) — Kết hợp từ chữ Hán 收斂速度 (thu liễm tốc độ), 漸近的 (tiệm cận đích), và 上限 (thượng hạn).

## 8. path-dependent financial option pricing
- /pæθ dɪˈpɛndənt fəˈnænʃəl ˈɑːpʃən ˈpraɪsɪŋ/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Functions as subject or object in computational finance.
- Core meaning — English: The valuation of financial contracts whose payoff depends not only on the final asset price at maturity, but also on the entire trajectory taken by the price over its life.
- Core meaning & mental image — Tiếng Việt: Định giá quyền chọn tài chính phụ thuộc đường đi — Hình ảnh hợp đồng quyền chọn mà giá trị của nó thay đổi dựa vào toàn bộ lịch sử biến động giá từ ngày mua đến ngày đáo hạn, chứ không chỉ nhìn giá chót.
- Grammar & collocations:
  - model path-dependent financial option pricing (mô hình hóa định giá quyền chọn tài chính phụ thuộc đường đi)
  - simulation for path-dependent financial option pricing (mô phỏng định giá quyền chọn tài chính phụ thuộc đường đi)
  - complexity of path-dependent financial option pricing (sự phức tạp trong định giá quyền chọn tài chính phụ thuộc đường đi)
- Register & nuance: Mathematical Finance / Quantitative Trading. Essential context for Asian or barrier option valuation.
- Examples:
  - Because analytical formulas do not exist for barrier options, **path-dependent financial option pricing** requires extensive stochastic simulation. (Vì không có công thức giải tích cho quyền chọn rào cản, việc định giá quyền chọn tài chính phụ thuộc đường đi đòi hỏi mô phỏng ngẫu nhiên diện rộng.)
- Liên kết tiếng Hàn: 경로 의존적 금융 옵션 가격 결정 (gyeong-ro ui-jon-jeok geum-yung op-syeon ga-gyeok gyeol-jeong) — Kết hợp từ chữ Hán 經路依存的 (kinh lộ y tồn đích - phụ thuộc đường đi), 金融 (kim dung), tiếng mượn "option", và chữ Hán 価格決定 (giá cách quyết định - định giá).

## 9. importance sampling reweighting technique
- /ɪmˈpɔːrtəns ˈsæmplɪŋ riˈweɪtɪŋ tɛkˈniːk/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Functions as subject or object in variance reduction theory.
- Core meaning — English: A variance reduction technique where samples are drawn from a different, skewed probability distribution and then mathematically reweighted to estimate the original expectation accurately.
- Core meaning & mental image — Tiếng Việt: Kỹ thuật trọng số lại bằng lấy mẫu tầm quan trọng — Hình ảnh việc tập trung lấy mẫu vào các vùng sự kiện hiếm (như đuôi phân phối) rồi nhân với trọng số điều chỉnh để tính đúng kỳ vọng toán học mà không tốn quá nhiều thời gian.
- Grammar & collocations:
  - apply the importance sampling reweighting technique (áp dụng kỹ thuật trọng số lại lấy mẫu tầm quan trọng)
  - optimize importance sampling reweighting techniques (tối ưu hóa các kỹ thuật trọng số lại lấy mẫu tầm quan trọng)
  - variance reduction via importance sampling reweighting (giảm phương sai qua trọng số lại lấy mẫu tầm quan trọng)
- Register & nuance: Advanced Statistics / Monte Carlo Theory. Highly sophisticated method for rare event simulation.
- Examples:
  - By shifting the drift parameter, the **importance sampling reweighting technique** drastically reduced the number of simulation runs needed to price deep out-of-the-money options. (Bằng cách dịch chuyển tham số trôi, kỹ thuật trọng số lại lấy mẫu tầm quan trọng đã giảm đáng kể số lần chạy mô phỏng cần thiết để định giá các quyền chọn lỗ sâu.)
- Liên kết tiếng Hàn: 중요도 샘플링 재가중치 기법 (jung-yo-do saem-peul-ling jae-ga-jung-chi gi-beop) — Kết hợp từ chữ Hán 重要度 (trọng yếu độ), từ mượn "sampling", chữ Hán 再加權値 (tái gia quyền trị - trọng số lại), và 技法 (kỹ pháp).

## 10. geometric Brownian motion drift
- /ˌdʒiːəˈmɛtrɪk ˈbraʊniən ˈmoʊʃən drɪft/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Acts as subject or object in stochastic differential equations and financial modeling.
- Core meaning — English: The deterministic trend component in a geometric Brownian motion model representing the expected constant exponential growth rate of an asset price.
- Core meaning & mental image — Tiếng Việt: Độ trôi chuyển động Brownian hình học — Hình ảnh mũi tên xu hướng hướng lên hoặc xuống phản ánh tốc độ tăng trưởng trung bình dài hạn của giá cổ phiếu bên cạnh các dao động ngẫu nhiên.
- Grammar & collocations:
  - estimate geometric Brownian motion drift (ước tính độ trôi chuyển động Brownian hình học)
  - calibrate geometric Brownian motion drift parameter (hiệu chỉnh tham số độ trôi chuyển động Brownian hình học)
  - assume constant geometric Brownian motion drift (giả định độ trôi chuyển động Brownian hình học hằng số)
- Register & nuance: Quantitative Finance / Stochastic Modeling. Foundational term in the Black-Scholes model framework.
- Examples:
  - The **geometric Brownian motion drift** parameter was calibrated using ten years of historical equity returns. (Tham số độ trôi chuyển động Brownian hình học đã được hiệu chỉnh bằng mười năm lợi nhuận cổ phiếu lịch sử.)
- Liên kết tiếng Hàn: 기하학적 브라운 운동 표류 (gi-ha-hak-jeok bra-un un-dong pyo-ryu) — Kết hợp từ chữ Hán 幾何学的 (kỉ hà học đích - hình học), tiếng mượn "Brownian motion", và chữ Hán 表流 (biểu lưu -> drift/độ trôi).

## 11. confidence interval sample variance
- /ˈkɑːnfɪdəns ˈɪntərvəl ˈsæmpəl ˈvɛəriəns/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Commonly functions as subject or object in statistical testing and estimation.
- Core meaning — English: A measure of dispersion calculated from simulated sample data used to construct bounds within which the true population parameter is expected to lie with a given probability.
- Core meaning & mental image — Tiếng Việt: Phương sai mẫu khoảng tin cậy — Hình ảnh khoảng giá trị bao quanh ước tính trung bình kèm theo biên độ sai số, cho biết mức độ chắc chắn của kết quả mô phỏng.
- Grammar & collocations:
  - compute confidence interval sample variance (tính toán phương sai mẫu khoảng tin cậy)
  - narrow confidence interval sample variance (phương sai mẫu khoảng tin cậy hẹp)
  - estimate confidence interval sample variance (ước tính phương sai mẫu khoảng tin cậy)
- Register & nuance: Statistics / Econometrics. Standard statistical reporting metric.
- Examples:
  - As the simulation iteration budget increased, the **confidence interval sample variance** shrank considerably, confirming high estimator precision. (Khi ngân sách lặp mô phỏng tăng lên, phương sai mẫu khoảng tin cậy đã thu hẹp đáng kể, xác nhận độ chính xác ước lượng cao.)
- Liên kết tiếng Hàn: 신뢰구간 표본 분산 (sin-roe-gu-gan pyo-bon bun-san) — Kết hợp từ chữ Hán 信頼區間 (tín lại khu gian - khoảng tin cậy), 表本 (biểu bản - mẫu), và 分散 (phân tán - phương sai).

## 12. Markov chain Monte Carlo burn-in
- /ˈmɑːrkɔːv tʃeɪn ˈmɑːnti ˈkɑːrloʊ bɜːrn ɪn/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Functions as subject or object in Bayesian statistics and sampling algorithms.
- Core meaning — English: The initial phase of a Markov chain Monte Carlo simulation where early samples are discarded to allow the chain to reach its stationary target distribution.
- Core meaning & mental image — Tiếng Việt: Giai đoạn đốt cháy Markov chain Monte Carlo (burn-in) — Hình ảnh việc vứt bỏ hàng nghìn bước chạy ban đầu của thuật toán khi chuỗi chưa ổn định, chỉ giữ lại giai đoạn sau khi chuỗi đã hội tụ đúng phân phối đích.
- Grammar & collocations:
  - discard the Markov chain Monte Carlo burn-in samples (loại bỏ các mẫu giai đoạn burn-in MCMC)
  - determine the length of Markov chain Monte Carlo burn-in (xác định độ dài giai đoạn burn-in MCMC)
  - monitor Markov chain Monte Carlo burn-in convergence (giám sát sự hội tụ giai đoạn burn-in MCMC)
- Register & nuance: Bayesian Statistics / Computational Modeling. Standard terminology in MCMC sampling diagnostics.
- Examples:
  - The statistician discarded the first five thousand iterations as **Markov chain Monte Carlo burn-in** before computing posterior parameter distributions. (Nhà thống kê học đã loại bỏ năm nghìn lần lặp đầu tiên như giai đoạn burn-in MCMC trước khi tính toán các phân phối tham số hậu nghiệm.)
- Liên kết tiếng Hàn: 마르코프 체인 몬테카를로 번인 (ma-reu-kofu che-in mon-te-ka-reu-lo beon-in) — Kết hợp từ tên riêng Markov chain, Monte Carlo, và từ mượn "burn-in".

## 13. quasi-Monte Carlo Sobol sequence
- /ˈkwɑːzaɪ ˈmɑːnti ˈkɑːrloʊ ˈsoʊbɑːl ˈsiːkwəns/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Functions as subject or object in low-discrepancy numerical integration.
- Core meaning — English: A deterministic low-discrepancy sequence used in quasi-Monte Carlo methods to fill multidimensional space more uniformly than pseudorandom numbers.
- Core meaning & mental image — Tiếng Việt: Chuỗi Sobol Monte Carlo giả — Hình ảnh các điểm mẫu được rải theo một quy luật toán học thông minh sao cho không có khoảng trống lớn nào xuất hiện trong không gian đa chiều.
- Grammar & collocations:
  - generate a quasi-Monte Carlo Sobol sequence (tạo ra một chuỗi Sobol quasi-Monte Carlo)
  - properties of quasi-Monte Carlo Sobol sequences (các tính chất của chuỗi Sobol quasi-Monte Carlo)
  - integrate using a quasi-Monte Carlo Sobol sequence (tích phân sử dụng chuỗi Sobol quasi-Monte Carlo)
- Register & nuance: Numerical Analysis / Computational Finance. Advanced optimization technique superior to standard random sampling in moderate dimensions.
- Examples:
  - Implementing a **quasi-Monte Carlo Sobol sequence** accelerated multidimensional integration convergence significantly compared to pseudo-random draws. (Việc triển khai chuỗi Sobol quasi-Monte Carlo đã thúc đẩy tốc độ hội tụ tích phân đa chiều đáng kể so với các lượt rút ngẫu nhiên giả.)
- Liên kết tiếng Hàn: 준 몬테카를로 소볼 시퀀스 (jun mon-te-ka-reu-lo so-bol si-kwen-seu) — Kết hợp từ tiền tố "준" (準 - chuẩn/quasi), "몬테카를로", "소볼" (Sobol), và từ mượn "sequence".

## 14. rare event probability estimation
- /rɛr ɪˈvɛnt ˈprɑːbəˈbɪlɪti ˌɛstɪˈmeɪʃən/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Acts as subject or object in risk management and reliability engineering.
- Core meaning — English: The quantification of the likelihood of extreme tail events, such as financial market crashes or system failures, which occur with very low frequency.
- Core meaning & mental image — Tiếng Việt: Ước tính xác suất sự kiện hiếm — Hình ảnh việc dùng máy tính mô phỏng để tìm ra khả năng xảy ra của một thảm họa tài chính hoặc sự cố kỹ thuật cực kỳ hiếm hoi.
- Grammar & collocations:
  - improve rare event probability estimation (cải thiện ước tính xác suất sự kiện hiếm)
  - challenges in rare event probability estimation (những thách thức trong ước tính xác suất sự kiện hiếm)
  - methods for rare event probability estimation (các phương pháp ước tính xác suất sự kiện hiếm)
- Register & nuance: Risk Analysis / Actuarial Science. Crucial for stress testing and catastrophic risk assessment.
- Examples:
  - Standard simulation requires prohibitive sample sizes for **rare event probability estimation**, necessitating specialized variance reduction schemes. (Mô phỏng tiêu chuẩn đòi hỏi kích thước mẫu quá lớn đối với việc ước tính xác suất sự kiện hiếm, do đó cần các sơ đồ giảm phương sai chuyên biệt.)
- Liên kết tiếng Hàn: 희귀 사건 확률 추정 (hui-gui sa-geon hwak-yul chu-jeong) — Kết hợp từ chữ Hán 稀貴事件 (hi quý sự kiện - sự kiện hiếm), 確率 (xác suất), và 推定 (thôi định - ước tính).

## 15. multidimensional integral quadrature
- /ˌmʌltidɪˈmɛnʃəl ˈɪntɪɡrəl ˈkwɑːdrətʃər/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Functions as subject or object in numerical integration and calculus.
- Core meaning — English: A deterministic numerical method for evaluating definite integrals across multiple dimensions by summing weighted function values at specific grid nodes.
- Core meaning & mental image — Tiếng Việt: Phép cầu tích phân đa chiều — Hình ảnh việc chia một thể tích không gian đa chiều thành các hình khối nhỏ để tính tổng giá trị hàm số nhằm xấp xỉ tích phân phức tạp.
- Grammar & collocations:
  - compute multidimensional integral quadrature (tính toán tích phân cầu đa chiều)
  - curse of dimensionality in multidimensional integral quadrature (lời nguyền số chiều trong tích phân cầu đa chiều)
  - adaptive multidimensional integral quadrature (phép cầu tích phân đa chiều thích ứng)
- Register & nuance: Numerical Analysis / Applied Mathematics. Classical alternative to Monte Carlo integration in low dimensions.
- Examples:
  - While **multidimensional integral quadrature** works efficiently in low dimensions, it suffers from the curse of dimensionality when variables exceed ten. (Trong khi phép cầu tích phân đa chiều hoạt động hiệu quả ở số chiều thấp, nó gặp phải lời nguyền số chiều khi các biến vượt quá mười.)
- Liên kết tiếng Hàn: 다차원 적분 구적법 (da-cha-won jeok-bun gu-jeok-beop) — Kết hợp từ chữ Hán 多次元 (đa chiều), 積分 (tích phân), và 求積法 (cầu tích pháp - phương pháp tính tích phân/diện tích).

## 16. statistical discretization time step
- /stəˈtɪstɪkəl ˌdɪskrɪtəˈzeɪʃən taɪm stɛp/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Often acts as subject or object in stochastic differential equation solvers.
- Core meaning — English: The incremental temporal interval used to break down continuous-time stochastic processes into discrete steps for computer simulation (e.g., Euler-Maruyama scheme).
- Core meaning & mental image — Tiếng Việt: Bước thời gian rời rạc hóa thống kê — Hình ảnh việc cắt nhỏ một khoảng thời gian liên tục thành hàng triệu khoảnh khắc rời rạc để máy tính có thể mô phỏng sự tiến hóa của quá trình ngẫu nhiên.
- Grammar & collocations:
  - reduce the statistical discretization time step (giảm bước thời gian rời rạc hóa thống kê)
  - error due to statistical discretization time step (sai số do bước thời gian rời rạc hóa)
  - optimal statistical discretization time step (bước thời gian rời rạc hóa thống kê tối ưu)
- Register & nuance: Numerical Simulation / Computational Finance. Critical factor determining simulation accuracy and runtime.
- Examples:
  - Halving the **statistical discretization time step** reduced numerical truncation bias but doubled overall computation time. (Việc giảm một nửa bước thời gian rời rạc hóa thống kê đã làm giảm sai số cắt cụt số học nhưng làm gấp đôi tổng thời gian tính toán.)
- Liên kết tiếng Hàn: 통계적 이산화 시간 간격 (tong-gye-jeok i-san-hwa si-gan gan-gyeok) — Kết hợp từ chữ Hán 統計的 (thống kê đích), 離散化 (ly tán hóa - rời rạc hóa), 時間 (thời gian), và 間隔 (gian cách).

## 17. stochastic volatility Heston model
- /stəˈkæstɪk ˈvɒlətɪlɪti ˈhɛstən ˈmɑːdəl/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Functions as subject or object in financial engineering.
- Core meaning — English: A popular stochastic volatility model where the variance of the underlying asset price follows its own stochastic random process driven by a separate Brownian motion.
- Core meaning & mental image — Tiếng Việt: Mô hình độ biến động ngẫu nhiên Heston — Hình ảnh biểu đồ mô tả không chỉ giá cổ phiếu mà ngay cả độ biến động (độ rủi ro) của cổ phiếu đó cũng dao động ngẫu nhiên theo thời gian.
- Grammar & collocations:
  - calibrate the stochastic volatility Heston model (hiệu chỉnh mô hình độ biến động ngẫu nhiên Heston)
  - price options using the stochastic volatility Heston model (định giá quyền chọn sử dụng mô hình độ biến động ngẫu nhiên Heston)
  - parameters of the stochastic volatility Heston model (các tham số của mô hình độ biến động ngẫu nhiên Heston)
- Register & nuance: Quantitative Finance / Mathematical Modeling. Industry standard model capturing volatility smiles.
- Examples:
  - Traders use the **stochastic volatility Heston model** to price complex equity options because it captures volatility smiles more accurately than Black-Scholes. (Các nhà giao dịch sử dụng mô hình độ biến động ngẫu nhiên Heston để định giá các quyền chọn cổ phiếu phức tạp vì nó nắm bắt nụ cười biến động chính xác hơn Black-Scholes.)
- Liên kết tiếng Hàn: 확률적 변동성 헤스톤 모델 (hwak-yul-jeok byeon-dong-seong he-seu-ton mo-del) — Kết hợp từ chữ Hán 確率的変動性 (xác suất đích biến động tính), tên riêng "Heston", và từ mượn "model".

## 18. variance reduction control variate
- /ˈvɛəriəns rɪˈdʌkʃən kənˈtroʊl ˈvɛəriət/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Functions as subject or object in Monte Carlo error reduction methods.
- Core meaning — English: A variance reduction technique that leverages a secondary simulated variable with a known expected value to correct and reduce errors in the primary estimator.
- Core meaning & mental image — Tiếng Việt: Biến kiểm soát giảm phương sai — Hình ảnh việc sử dụng một biến số phụ có sẵn lời giải chính xác để soi chiếu và chỉnh sửa sai số cho biến số chính trong quá trình mô phỏng.
- Grammar & collocations:
  - apply a variance reduction control variate (áp dụng biến kiểm soát giảm phương sai)
  - optimal variance reduction control variate coefficient (hệ số biến kiểm soát giảm phương sai tối ưu)
  - efficiency gain from variance reduction control variates (lợi ích hiệu suất từ các biến kiểm soát giảm phương sai)
- Register & nuance: Monte Carlo Methods / Statistics. Standard variance reduction approach in quantitative analysis.
- Examples:
  - Implementing a **variance reduction control variate** based on European option payoffs lowered the standard error of the exotic option price estimate. (Việc áp dụng biến kiểm soát giảm phương sai dựa trên phần thưởng quyền chọn châu Âu đã làm giảm sai số chuẩn của ước tính giá quyền chọn ngoại lai.)
- Liên kết tiếng Hàn: 통제 변량 분산 감소법 (tong-je byeon-ryang bun-san gam-so-beop) — Kết hợp từ chữ Hán 統制変량 (thống chế biến lượng - biến kiểm soát), 分散 (phương sai), và 減少法 (giảm thiểu pháp).

## 19. law of large numbers asymptotic
- /lɔː əv lɑːrdʒ ˈnʌmbərz ˌæsɪmˈtɒtɪk/
- Loại từ & vị trí trong câu: Specialized noun phrase (NP). Functions as subject or object in probability theory and statistical limit theorems.
- Core meaning — English: The mathematical principle stating that as the number of independent trials increases, the sample average converges surely to the expected theoretical value.
- Core meaning & mental image — Tiếng Việt: Định luật số lớn tiệm cận — Hình ảnh việc tung đồng xu vài lần thì kết quả hỗn loạn, nhưng khi tung hàng triệu lần, tỷ lệ mặt ngửa sẽ tiến sát đúng 50%.
- Grammar & collocations:
  - invoke the law of large numbers asymptotic (viện dẫn định luật số lớn tiệm cận)
  - proof of the law of large numbers asymptotic (chứng minh định luật số lớn tiệm cận)
  - convergence governed by the law of large numbers asymptotic (sự hội tụ chi phối bởi định luật số lớn tiệm cận)
- Register & nuance: Probability Theory / Mathematical Statistics. Foundational theorem underpinning all Monte Carlo simulations.
- Examples:
  - The validity of Monte Carlo integration rests entirely on the **law of large numbers asymptotic**, guaranteeing convergence as sample size approaches infinity. (Tính hợp lệ của tích phân Monte Carlo hoàn toàn dựa vào định luật số lớn tiệm cận, đảm bảo sự hội tụ khi kích thước mẫu tiến tới vô cực.)
- Liên kết tiếng Hàn: 대수의 법칙 점근 (dae-su-ui beob-chik jeom-geun) — Kết hợp từ chữ Hán 大数法칙 (đại số pháp tắc - định luật số lớn) và 漸近 (tiệm cận).

## 20. computational iteration budget
- /ˌkɑːmpjuˈteɪʃənəl ˌɪtəˈreɪʃən ˈbʌdʒɪt/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Functions as subject or object in high-performance computing and algorithm design.
- Confirm Canon: 20th item.
- Core meaning — English: The predetermined limit on CPU time, memory, or number of simulation steps allocated to solve a numerical optimization or sampling problem.
- Core meaning & mental image — Tiếng Việt: Ngân sách số lần lặp tính toán — Hình ảnh hạn mức thời gian và tài nguyên máy tính được cấp phép cho một bài toán mô phỏng, buộc thuật toán phải dừng lại khi cạn kiệt tài nguyên.
- Grammar & collocations:
  - exhaust the computational iteration budget (cạn kiệt ngân sách số lần lặp tính toán)
  - allocate a computational iteration budget (phân bổ ngân sách số lần lặp tính toán)
  - optimize within a computational iteration budget (tối ưu hóa trong giới hạn ngân sách lặp tính toán)
- Register & nuance: Computational Science / Software Engineering. Practical constraint in high-performance simulation engineering.
- Examples:
  - Due to a strict **computational iteration budget**, the risk management system had to switch from full simulation to a faster analytical approximation. (Do ngân sách số lần lặp tính toán nghiêm ngặt, hệ thống quản lý rủi ro đã phải chuyển từ mô phỏng toàn phần sang một phép xấp xỉ giải tích nhanh hơn.)
- Liên kết tiếng Hàn: 연산 반복 예산 (yeon-san ban-bok ye-san) — Kết hợp từ chữ Hán 演算 (diễn toán - tính toán), 反復 (phản phúc - lặp lại), và 予算 (dự toán - ngân sách).

## 21. stochastic sensitivity Greeks calculus
- /stəˈkæstɪk ˌsɛnsəˈtɪvɪti ɡriːks ˈkælkjʊləs/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Functions as subject or object in quantitative risk management.
- Core meaning — English: The mathematical differentiation methods used to compute risk sensitivities (delta, gamma, vega) directly from stochastic path simulations.
- Core meaning & mental image — Tiếng Việt: Vi tính các hệ số nhạy cảm rủi ro (Greeks) ngẫu nhiên — Hình ảnh việc tính toán đạo hàm của giá quyền chọn đối với biến động thị trường ngay từ các đường đi mô phỏng ngẫu nhiên.
- Grammar & collocations:
  - calculate stochastic sensitivity Greeks calculus (tính toán các hệ số nhạy cảm rủi ro ngẫu nhiên)
  - pathwise method in stochastic sensitivity Greeks calculus (phương pháp theo đường đi trong tính toán Greeks ngẫu nhiên)
  - advance stochastic sensitivity Greeks calculus (nâng cao tính toán hệ số nhạy cảm ngẫu nhiên)
- Register & nuance: Quantitative Finance / Risk Analytics. Advanced derivative pricing and hedging methodology.
- Examples:
  - Pathwise derivatives estimators in **stochastic sensitivity Greeks calculus** enable simultaneous calculation of option prices and their hedging parameters. (Các ước tính đạo hàm theo đường đi trong vi tính hệ số nhạy cảm ngẫu nhiên cho phép tính toán đồng thời giá quyền chọn và các tham số phòng ngừa rủi ro của chúng.)
- Liên kết tiếng Hàn: 확률적 민감도 그릭스 미적분 (hwak-yul-jeok min-gam-do geu-rik-seu mi-jeok-bun) — Kết hợp từ chữ Hán 確率的敏感度 (xác suất đích nhạy cảm độ), từ mượn "Greeks", và chữ Hán 微積分 (vi tích phân).

## 22. stratified random sampling stratum
- /ˈstrætɪfaɪd ˈrændəm ˈsæmplɪŋ ˈstrætəm/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Acts as subject or object in survey design and Monte Carlo partitioning.
- Core meaning — English: A non-overlapping sub-population or partitioned parameter interval within a larger set from which independent random samples are drawn.
- Core meaning & mental image — Tiếng Việt: Tầng lấy mẫu ngẫu nhiên phân tầng — Hình ảnh việc chia toàn bộ tập hợp thành các tầng nhỏ riêng biệt, sau đó tiến hành rút thăm ngẫu nhiên độc lập trong từng tầng để đảm bảo đại diện đầy đủ.
- Grammar & collocations:
  - partition into stratified random sampling strata (phân chia thành các tầng lấy mẫu ngẫu nhiên phân tầng)
  - allocate samples across each stratified random sampling stratum (phân bổ mẫu qua từng tầng lấy mẫu)
  - variance within a stratified random sampling stratum (phương sai bên trong một tầng lấy mẫu ngẫu nhiên phân tầng)
- Register & nuance: Statistics / Sampling Theory. Core concept in stratified variance reduction.
- Examples:
  - By dividing the parameter space into equal probability **stratifled random sampling strata**, researchers eliminated sampling bias in tail risk estimation. (Bằng cách chia không gian tham số thành các tầng lấy mẫu ngẫu nhiên phân tầng có xác suất bằng nhau, các nhà nghiên cứu đã loại bỏ sai lệch lấy mẫu trong việc ước tính rủi ro đuôi.)
- Liên kết tiếng Hàn: 층화 무작위 추출 층 (chung-hwa mu-jak-wi chu-chul cheung) — Kết hợp từ chữ Hán 層화 (tầng hóa), 無作為抽出 (vô tác vi trừu xuất - lấy mẫu ngẫu nhiên), và 층 (tầng/stratum).

## 23. unbiased estimator standard error
- /ʌnˈbaɪst ˈɛstɪmeɪtər ˈstændərd ˈɛrər/
- Loại từ & vị trí trong câu: Specialized noun phrase (NP). Functions as subject or object in statistical quality evaluation.
- Core meaning — English: The estimated standard deviation of a statistical estimator whose expected value equals the true population parameter being estimated.
- Core meaning & mental image — Tiếng Việt: Sai số chuẩn của ước lượng không chệch — Hình ảnh thước đo độ phân tán cho biết ước tính toán học của chúng ta không bị lệch tâm và có độ chính xác cao đến mức nào.
- Grammar & collocations:
  - compute the unbiased estimator standard error (tính toán sai số chuẩn của ước lượng không chệch)
  - decrease the unbiased estimator standard error (làm giảm sai số chuẩn của ước lượng không chệch)
  - formula for unbiased estimator standard error (công thức tính sai số chuẩn của ước lượng không chệch)
- Register & nuance: Mathematical Statistics / Econometrics. Fundamental metric of estimation reliability.
- Examples:
  - Reporting the **unbiased estimator standard error** is essential for validating whether a simulated pricing result is statistically significant. (Báo cáo sai số chuẩn của ước lượng không chệch là điều cốt yếu để xác nhận xem kết quả định giá mô phỏng có ý nghĩa thống kê hay không.)
- Liên kết tiếng Hàn: 편향되지 않은 추정량 표준 오차 (pyyeon-hyang-doe-ji anh-eun chu-jung-ryang pyo-jun o-cha) — Kết hợp từ tiếng Hàn "편향되지 않은" (không chệch), chữ Hán 推定量 (ước lượng lượng), 標準誤差 (tiêu chuẩn ngõ sa - sai số chuẩn).

## 24. extreme value tail simulation
- /ɪkˈstriːm ˈvæluː teɪl ˌsɪmjuˈleɪʃən/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Functions as subject or object in risk modeling and catastrophic forecasting.
- Core meaning — English: Specialized stochastic simulation focused exclusively on modeling the extreme, low-probability tails of a statistical distribution to evaluate catastrophic risk.
- Core meaning & mental image — Tiếng Việt: Mô phỏng đuôi giá trị cực biên — Hình ảnh việc phóng to vùng đuôi cực kỳ bất lợi (vùng thảm họa) của biểu đồ phân phối để nghiên cứu các tổn thất khổng lồ nhưng hiếm xảy ra.
- Grammar & collocations:
  - perform extreme value tail simulation (thực hiện mô phỏng đuôi giá trị cực biên)
  - extreme value tail simulation for market crash risk (mô phỏng đuôi giá trị cực biên cho rủi ro sập thị trường)
  - advanced extreme value tail simulation (mô phỏng đuôi giá trị cực biên nâng cao)
- Register & nuance: Actuarial Science / Quantitative Risk Management. Essential for Basel III/IV solvency capital calculations.
- Examples:
  - Insurance firms rely on **extreme value tail simulation** to ensure they hold adequate capital reserves against once-in-a-century catastrophic storms. (Các công ty bảo hiểm phụ thuộc vào mô phỏng đuôi giá trị cực biên để đảm bảo họ nắm giữ đầy đủ dự trữ vốn chống lại các cơn bão thảm khốc trăm năm có một.)
- Liên kết tiếng Hàn: 극단값 꼬리 시뮬레이션 (geuk-dan-gab kko-ri si-mul-re-i-syeon) — Kết hợp từ chữ Hán 極端値 (cực đoan trị), từ thuần Hàn "꼬리" (đuôi/tail), và từ mượn "simulation".

## 25. high-performance parallelized simulation
- /haɪ pərˈfɔːrməns ˈpɛrəlaɪzd ˌsɪmjuˈleɪʃən/
- Loại từ & vị trí trong câu: Compound noun phrase (NP). Acts as subject or object in scientific computing infrastructure.
- Confirm Canon: 25th item.
- Core meaning — English: Large-scale computational modeling executed simultaneously across thousands of CPU cores or GPU threads to solve massive stochastic systems rapidly.
- Core meaning & mental image — Tiếng Việt: Mô phỏng song song hóa hiệu năng cao — Hình ảnh hàng ngàn bộ vi xử lý máy tính cùng lúc chạy hàng triệu phép tính ngẫu nhiên để hoàn thành mô phỏng phức tạp trong vài giây thay vì vài ngày.
- Grammar & collocations:
  - execute high-performance parallelized simulation (thực hiện mô phỏng song song hóa hiệu năng cao)
  - infrastructure for high-performance parallelized simulation (hạ tầng cho mô phỏng song song hóa hiệu năng cao)
  - accelerate high-performance parallelized simulation (tăng tốc mô phỏng song song hóa hiệu năng cao)
- Register & nuance: High-Performance Computing (HPC) / Computational Engineering. Industry standard for heavy-duty quantitative modeling.
- Examples:
  - Leveraging GPU acceleration enabled the quantitative desk to run **high-performance parallelized simulation** overnight for the entire multi-asset portfolio. (Việc tận dụng gia tốc GPU đã cho phép bàn định lượng chạy mô phỏng song song hóa hiệu năng cao xuyên đêm cho toàn bộ danh mục đa tài sản.)
- Liên kết tiếng Hàn: 고성능 병렬화 시뮬레이션 (go-seong-neun byeong-ryeol-hwa si-mul-re-i-syeon) — Kết hợp từ chữ Hán 高性能 (cao tính năng), 並列化 (tịnh liệt hóa - song song hóa), và từ mượn "simulation".

---

## Review in context: Part 1 (items 1–12 bolded **headword**)

In modern quantitative finance and engineering, stochastic modeling is foundational. The primary engine for pricing complex instruments is **Monte Carlo numerical simulation**, which generates thousands of random paths known as a **stochastic differential trajectory**. To improve computational efficiency and minimize errors, quants often implement **variance reduction antithetic variates**, pairing positive and negative shocks. For multi-parameter problems, **Latin hypercube stratified sampling** ensures an even spread across all dimensions. Every simulation relies on an initial **pseudorandom number generator seed** to guarantee reproducibility. When drawing samples for complex distributions, algorithms execute **probability density function sampling**. Mathematicians closely analyze the **convergence rate asymptotic bound** to understand how quickly error decreases with sample size. This is especially critical for **path-dependent financial option pricing**, where payoffs depend on the entire asset price history. To price exotic options efficiently without exploding computation times, practitioners deploy the **importance sampling reweighting technique**. Furthermore, the underlying asset prices are often driven by a **geometric Brownian motion drift** parameter estimated from historical returns. To quantify the reliability of these estimates, researchers compute the **confidence interval sample variance**. Finally, in Bayesian inference, running a Markov chain requires discarding an initial **Markov chain Monte Carlo burn-in** period before collecting final posterior samples.

### Bản dịch tiếng Việt phần 1:
Trong tài chính định lượng và kỹ thuật hiện đại, mô hình hóa ngẫu nhiên đóng vai trò nền tảng. Động cơ chính để định giá các công cụ phức tạp là mô phỏng số Monte Carlo (**Monte Carlo numerical simulation**), tạo ra hàng ngàn đường đi ngẫu nhiên được gọi là quỹ đạo vi phân ngẫu nhiên (**stochastic differential trajectory**). Để cải thiện hiệu quả tính toán và thiểu hóa sai số, các nhà phân tích định lượng thường thực hiện biến đối xứng giảm phương sai (**variance reduction antithetic variates**), ghép cặp các cú sốc dương và âm. Đối với các bài toán đa tham số, lấy mẫu phân tầng siêu lập phương Latinh (**Latin hypercube stratified sampling**) đảm bảo sự phân bố đều khắp mọi chiều. Mọi mô phỏng đều dựa vào hạt giống bộ sinh số giả ngẫu nhiên (**pseudorandom number generator seed**) ban đầu để đảm bảo tính tái lập. Khi rút mẫu cho các phân phối phức tạp, các thuật toán thực hiện lấy mẫu hàm mật độ xác suất (**probability density function sampling**). Các nhà toán học nghiên cứu kỹ lưỡng giới hạn tiệm cận tốc độ hội tụ (**convergence rate asymptotic bound**) để hiểu tốc độ giảm sai số theo kích thước mẫu nhanh đến mức nào. Điều này đặc biệt quan trọng đối với định giá quyền chọn tài chính phụ thuộc đường đi (**path-dependent financial option pricing**), nơi phần thưởng phụ thuộc vào toàn bộ lịch sử giá tài sản. Để định giá các quyền chọn ngoại lai hiệu quả mà không làm bùng nổ thời gian tính toán, các chuyên gia triển khai kỹ thuật trọng số lại lấy mẫu tầm quan trọng (**importance sampling reweighting technique**). Hơn nữa, giá tài sản cơ sở thường được thúc đẩy bởi tham số độ trôi chuyển động Brownian hình học (**geometric Brownian motion drift**) ước tính từ lợi nhuận lịch sử. Để định lượng độ tin cậy của các ước tính này, các nhà nghiên cứu tính toán phương sai mẫu khoảng tin cậy (**confidence interval sample variance**). Cuối cùng, trong suy luận Bayes, việc chạy một chuỗi Markov đòi hỏi phải loại bỏ giai đoạn đốt cháy Markov chain Monte Carlo (**Markov chain Monte Carlo burn-in**) ban đầu trước khi thu thập các mẫu hậu nghiệm cuối cùng.

## Review in context: Part 2 (items 13–25 bolded **headword**)

When dealing with multidimensional integrals, replacing pseudorandom numbers with a **quasi-Monte Carlo Sobol sequence** significantly accelerates convergence. However, financial institutions face severe challenges regarding **rare event probability estimation**, where standard methods fall short. While traditional **multidimensional integral quadrature** works for low-dimensional problems, it fails in high dimensions. To model asset prices accurately over time, simulators rely on a precise **statistical discretization time step**. In equity derivatives, the **stochastic volatility Heston model** successfully captures market volatility smiles. To further enhance simulation performance, practitioners introduce a **variance reduction control variate** to dampen estimator noise. The mathematical backbone guaranteeing that sample averages approach true expectations is the **law of large numbers asymptotic**. Because computational projects face strict limits, every model must operate within a predefined **computational iteration budget**. When hedging derivatives, calculating risk sensitivities requires robust **stochastic sensitivity Greeks calculus**. Furthermore, to partition parameter domains effectively, each **stratified random sampling stratum** ensures complete representation. To verify simulation accuracy, analysts always report the **unbiased estimator standard error**. For catastrophic risk analysis, actuarial teams run an **extreme value tail simulation** to model extreme tail losses. Finally, massive computational workloads are executed using **high-performance parallelized simulation** across GPU clusters.

### Bản dịch tiếng Việt phần 2:
Khi xử lý các tích phân đa chiều, việc thay thế các số giả ngẫu nhiên bằng chuỗi Sobol quasi-Monte Carlo (**quasi-Monte Carlo Sobol sequence**) giúp tăng tốc độ hội tụ đáng kể. Tuy nhiên, các tổ chức tài chính phải đối mặt với những thách thức nghiêm trọng liên quan đến ước tính xác suất sự kiện hiếm (**rare event probability estimation**), nơi các phương pháp tiêu chuẩn tỏ ra thiếu hụt. Trong khi phép cầu tích phân đa chiều truyền thống (**multidimensional integral quadrature**) hoạt động tốt với các bài toán số chiều thấp, nó lại thất bại ở số chiều cao. Để mô phỏng giá tài sản chính xác theo thời gian, các mô phỏng dựa vào bước thời gian rời rạc hóa thống kê (**statistical discretization time step**) chính xác. Trong phái sinh cổ phiếu, mô hình độ biến động ngẫu nhiên Heston (**stochastic volatility Heston model**) nắm bắt thành công hiện tượng nụ cười biến động thị trường. Để nâng cao hơn nữa hiệu suất mô phỏng, các chuyên gia giới thiệu biến kiểm soát giảm phương sai (**variance reduction control variate**) nhằm làm giảm nhiễu của bộ ước lượng. Xương sống toán học đảm bảo rằng các trung bình mẫu tiến đến kỳ vọng thực chính là định luật số lớn tiệm cận (**law of large numbers asymptotic**). Vì các dự án tính toán phải đối mặt với các giới hạn nghiêm ngặt, mọi mô hình đều phải hoạt động trong ngân sách số lần lặp tính toán (**computational iteration budget**) được định trước. Khi phòng ngừa rủi ro phái sinh, việc tính toán các hệ số nhạy cảm rủi ro đòi hỏi vi tính các hệ số nhạy cảm rủi ro ngẫu nhiên (**stochastic sensitivity Greeks calculus**) mạnh mẽ. Hơn nữa, để phân chia các miền tham số một cách hiệu quả, mỗi tầng lấy mẫu ngẫu nhiên phân tầng (**stratified random sampling stratum**) đảm bảo sự đại diện hoàn chỉnh. Để xác thực độ chính xác của mô phỏng, các nhà phân tích luôn báo cáo sai số chuẩn của ước lượng không chệch (**unbiased estimator standard error**). Đối với phân tích rủi ro thảm họa, các đội ngũ định phí bảo hiểm chạy mô phỏng đuôi giá trị cực biên (**extreme value tail simulation**) để mô phỏng các tổn thất cực đoan ở đuôi phân phối. Cuối cùng, khối lượng công việc tính toán khổng lồ được thực hiện thông qua mô phỏng song song hóa hiệu năng cao (**high-performance parallelized simulation**) trên các cụm GPU.
