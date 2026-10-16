# C1 Vocabulary 44 — Bayesian computation and posterior diagnostics

This lesson follows how an analyst updates beliefs, computes posterior quantities, and checks whether a Bayesian model has actually been explored well.

Flow: **credible mass → MCMC diagnostic → trace plot → convergence diagnostic → posterior sensitivity → empirical Bayes → posterior mean → prior mass → sampling chain → sampling efficiency → Bayesian updating → posterior concentration → Bayesian workflow → posterior draw → sampler adaptation → warmup iteration → chain mixing → autocorrelation time → R-hat statistic → initial state**.

## 1. credible mass /ˈkrɛdəbəl mæs/
**Part of speech:** noun
**Core meaning (English):** the amount of posterior probability contained within a stated interval or region of possible values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng posterior probability nằm trong interval hoặc region value được state.
**Grammar & collocations:** `ninety-percent credible mass` — mass; `report credible mass` — report.
**Examples:** `The interval contained ninety percent credible mass under the fitted model.` → Interval chứa chín mươi phần trăm mass credible theo model fit.
**Liên kết tiếng Hàn:** `신뢰 질량`.

## 2. MCMC diagnostic /ˌɛm siː ˌɛm siː ˈdaɪəɡˌnɑstɪk/
**Part of speech:** noun
**Core meaning (English):** a check of a Markov chain Monte Carlo calculation to see whether its draws are reliable for inference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** check MCMC calculation xem draw có reliable cho inference không.
**Grammar & collocations:** `standard MCMC diagnostic` — diagnostic; `run an MCMC diagnostic` — run.
**Examples:** `The MCMC diagnostic revealed that the chain had not explored one region of the parameter space.` → Diagnostic MCMC reveal chain chưa explore một region parameter space.
**Liên kết tiếng Hàn:** `MCMC 진단`.

## 3. trace plot /ˈtreɪs plɑt/
**Part of speech:** noun
**Core meaning (English):** a graph showing successive sampled values of a parameter across iterations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph show parameter value được sample liên tiếp qua iteration.
**Grammar & collocations:** `stable trace plot` — plot; `inspect a trace plot` — inspect.
**Examples:** `The trace plot moved around a stable region without long unexplained gaps.` → Plot trace move quanh region stable không có gap dài unexplained.
**Liên kết tiếng Hàn:** `추적 도표`.

## 4. convergence diagnostic /kənˈvɜrdʒəns ˌdaɪəɡˈnɑstɪk/
**Part of speech:** noun
**Core meaning (English):** a statistical check of whether a computational sampler has reached a sufficiently stable distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** statistical check xem sampler đạt distribution đủ stable chưa.
**Grammar & collocations:** `formal convergence diagnostic` — diagnostic; `report a convergence diagnostic` — report.
**Examples:** `The convergence diagnostic suggested that four independent chains gave similar results.` → Diagnostic convergence suggest bốn chain independent cho result tương tự.
**Liên kết tiếng Hàn:** `수렴 진단`.

## 5. posterior sensitivity /pɑˈstɪriər ˌsɛnsəˈtɪvəti/
**Part of speech:** noun
**Core meaning (English):** the degree to which posterior conclusions change when reasonable modeling choices or prior assumptions change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức posterior conclusion đổi khi model choice hoặc prior assumption reasonable đổi.
**Grammar & collocations:** `posterior-sensitivity analysis` — analysis; `assess posterior sensitivity` — assess.
**Examples:** `Posterior sensitivity was low when the main effect appeared under several plausible priors.` → Sensitivity posterior thấp khi main effect xuất hiện dưới nhiều prior plausible.
**Liên kết tiếng Hàn:** `사후 민감도`.

## 6. empirical Bayes /ɛmˈpɪrɪkəl beɪz/
**Part of speech:** noun
**Core meaning (English):** a method that estimates aspects of a prior distribution from the data before calculating individual posterior estimates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** method estimate part của prior từ data trước khi calculate posterior cho từng case.
**Grammar & collocations:** `empirical-Bayes estimator` — estimator; `use empirical Bayes` — use.
**Examples:** `Empirical Bayes borrowed information across schools before estimating each school's effect.` → Bayes empirical borrow information giữa school trước estimate effect từng school.
**Liên kết tiếng Hàn:** `경험적 베이즈`.

## 7. posterior mean /pɑˈstɪriər miːn/
**Part of speech:** noun
**Core meaning (English):** the average value of a parameter under its posterior distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** average value của parameter theo posterior distribution.
**Grammar & collocations:** `posterior mean estimate` — estimate; `report the posterior mean` — report.
**Examples:** `The posterior mean suggested a modest reduction in waiting time.` → Mean posterior suggest waiting time giảm vừa phải.
**Liên kết tiếng Hàn:** `사후 평균`.

## 8. prior mass /ˈpraɪər mæs/
**Part of speech:** noun
**Core meaning (English):** the amount of prior probability assigned to a region of possible parameter values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng prior probability assign cho một region của parameter value possible.
**Grammar & collocations:** `substantial prior mass` — mass; `place prior mass on` — place.
**Examples:** `The skeptical prior placed little prior mass on extremely large effects.` → Prior skeptical place ít mass prior vào effect cực lớn.
**Liên kết tiếng Hàn:** `사전 확률 질량`.

## 9. sampling chain /ˈsæmplɪŋ tʃeɪn/
**Part of speech:** noun
**Core meaning (English):** the ordered sequence of simulated parameter values produced during a sampling algorithm.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sequence có thứ tự của parameter value simulated do sampling algorithm tạo.
**Grammar & collocations:** `long sampling chain` — chain; `save a sampling chain` — save.
**Examples:** `The analyst extended the sampling chain to improve estimates of a rare event.` → Analyst extend chain sampling để improve estimate rare event.
**Liên kết tiếng Hàn:** `표본 추출 연쇄`.

## 10. sampling efficiency /ˈsæmplɪŋ ɪˈfɪʃənsi/
**Part of speech:** noun
**Core meaning (English):** the amount of useful independent information a sampling algorithm obtains for a given computational effort.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng information independent hữu ích algorithm lấy được với một mức computational effort.
**Grammar & collocations:** `high sampling efficiency` — efficiency cao; `compare sampling efficiency` — compare.
**Examples:** `The tuned sampler improved sampling efficiency in the strongly correlated model.` → Sampler tune cải thiện efficiency sampling trong model correlation mạnh.
**Liên kết tiếng Hàn:** `표본 추출 효율`.

## 11. Bayesian updating /ˈbeɪziən ʌpˈdeɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** the process of revising prior beliefs by combining them with new evidence through Bayes' rule.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process revise prior belief bằng cách combine với evidence mới theo Bayes rule.
**Grammar & collocations:** `sequential Bayesian updating` — updating; `perform Bayesian updating` — perform.
**Examples:** `Bayesian updating changed the forecast after the early survey results arrived.` → Updating Bayesian change forecast sau khi survey result sớm arrive.
**Liên kết tiếng Hàn:** `베이지안 갱신`.

## 12. posterior concentration /pɑˈstɪriər ˌkɑnsənˈtreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the tendency of posterior probability to gather around a narrower range as informative data accumulate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** posterior probability gather vào range hẹp hơn khi informative data tích lũy.
**Grammar & collocations:** `rapid posterior concentration` — concentration; `study posterior concentration` — study.
**Examples:** `Posterior concentration increased after the experiment measured the outcome more precisely.` → Concentration posterior tăng sau khi experiment measure outcome precise hơn.
**Liên kết tiếng Hàn:** `사후 집중`.

## 13. Bayesian workflow /ˈbeɪziən ˈwɜrkˌfloʊ/
**Part of speech:** noun
**Core meaning (English):** an iterative process of specifying a model, checking its implications, comparing alternatives, and revising it when needed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process iterative specify model, check implication, compare alternative và revise khi cần.
**Grammar & collocations:** `transparent Bayesian workflow` — workflow; `document a Bayesian workflow` — document.
**Examples:** `The Bayesian workflow included prior checks, predictive checks, and a sensitivity analysis.` → Workflow Bayesian gồm prior check, predictive check và sensitivity analysis.
**Liên kết tiếng Hàn:** `베이지안 작업 흐름`.

## 14. posterior draw /pɑˈstɪriər drɔ/
**Part of speech:** noun
**Core meaning (English):** one simulated value sampled from a posterior distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một value simulated sample từ posterior distribution.
**Grammar & collocations:** `independent posterior draw` — draw; `inspect a posterior draw` — inspect.
**Examples:** `Each posterior draw produced a possible demand curve under the observed data.` → Mỗi draw posterior tạo một demand curve possible theo data observe.
**Liên kết tiếng Hàn:** `사후 추출값`.

## 15. sampler adaptation /ˈsæmplər ˌædəpˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process by which a computational sampler tunes its behavior to explore the target distribution more efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process sampler computational tune behavior để explore target distribution efficient hơn.
**Grammar & collocations:** `automatic sampler adaptation` — adaptation; `allow sampler adaptation` — allow.
**Examples:** `Sampler adaptation adjusted the step size before the final draws were retained.` → Adaptation sampler adjust step size trước khi retain final draw.
**Liên kết tiếng Hàn:** `샘플러 적응`.

## 16. warmup iteration /ˈwɔrmˌʌp ˌɪtəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** an early sampling step used to tune an algorithm before its values are treated as posterior draws.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** early sampling step dùng tune algorithm trước khi value được xem là posterior draw.
**Grammar & collocations:** `discarded warmup iteration` — iteration; `increase warmup iterations` — increase.
**Examples:** `The model needed more warmup iterations because the parameters had very different scales.` → Model cần warmup iteration nhiều hơn vì parameter có scale rất khác.
**Liên kết tiếng Hàn:** `워밍업 반복`.

## 17. chain mixing /tʃeɪn ˈmɪksɪŋ/
**Part of speech:** noun
**Core meaning (English):** the degree to which a sampling chain moves effectively through the important regions of a target distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức chain move effective qua region quan trọng của target distribution.
**Grammar & collocations:** `poor chain mixing` — mixing kém; `improve chain mixing` — improve.
**Examples:** `Poor chain mixing left the posterior mean dependent on the starting values.` → Mixing chain kém làm mean posterior phụ thuộc starting value.
**Liên kết tiếng Hàn:** `연쇄 혼합`.

## 18. autocorrelation time /ˌɔtoʊˌkɔrəˈleɪʃən taɪm/
**Part of speech:** noun
**Core meaning (English):** an estimate of how many successive samples remain statistically related before the chain provides effectively new information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimate bao nhiêu sample liên tiếp vẫn related trước khi chain cho information effectively mới.
**Grammar & collocations:** `long autocorrelation time` — time; `estimate autocorrelation time` — estimate.
**Examples:** `A long autocorrelation time meant that thousands of draws contained fewer independent observations than expected.` → Time autocorrelation dài nghĩa là hàng nghìn draw chứa ít observation independent hơn expect.
**Liên kết tiếng Hàn:** `자기상관 시간`.

## 19. R-hat statistic /ˈɑr hæt stəˈtɪstɪk/
**Part of speech:** noun
**Core meaning (English):** a convergence measure comparing variation within sampling chains with variation across chains.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measure convergence compare variation trong chain với variation giữa chain.
**Grammar & collocations:** `near-one R-hat statistic` — statistic; `inspect the R-hat statistic` — inspect.
**Examples:** `The R-hat statistic was close to one for every parameter after the longer run.` → Statistic R-hat gần one cho mọi parameter sau run dài hơn.
**Liên kết tiếng Hàn:** `R-햇 통계량`.

## 20. initial state /ɪˈnɪʃəl steɪt/
**Part of speech:** noun
**Core meaning (English):** the parameter values or system condition from which a sampling process begins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parameter value hoặc system condition nơi sampling process bắt đầu.
**Grammar & collocations:** `reasonable initial state` — state; `choose an initial state` — choose.
**Examples:** `The analyst tried several initial states to check whether the chains reached the same region.` → Analyst thử nhiều state initial để check chain có reach cùng region không.
**Liên kết tiếng Hàn:** `초기 상태`.

## Review in context

A Bayesian analyst may report **credible mass**, then run an **MCMC diagnostic** and inspect a **trace plot** as a **convergence diagnostic**. **Posterior sensitivity** shows whether conclusions change under reasonable assumptions, while **empirical Bayes**, a **posterior mean**, and the amount of **prior mass** describe different summaries. A long **sampling chain** can still have poor **sampling efficiency**, so **Bayesian updating** should be documented in a complete **Bayesian workflow**. As evidence accumulates, **posterior concentration** may increase. Each **posterior draw** depends on **sampler adaptation** and the number of **warmup iterations**. Good **chain mixing**, a short **autocorrelation time**, a near-one **R-hat statistic**, and a carefully chosen **initial state** support more trustworthy inference.

**Bản dịch tiếng Việt:** Analyst Bayesian có thể report **credible mass**, rồi run **MCMC diagnostic** và inspect **trace plot** như một **convergence diagnostic**. **Posterior sensitivity** cho thấy conclusion đổi theo assumption reasonable không, còn **empirical Bayes**, **posterior mean** và lượng **prior mass** là các summary khác nhau. **Sampling chain** dài vẫn có thể có **sampling efficiency** thấp, nên **Bayesian updating** cần được document trong **Bayesian workflow** đầy đủ. Khi evidence tích lũy, **posterior concentration** có thể tăng. Mỗi **posterior draw** phụ thuộc **sampler adaptation** và số **warmup iteration**. **Chain mixing** tốt, **autocorrelation time** ngắn, **R-hat statistic** gần one và **initial state** được chọn cẩn thận hỗ trợ inference đáng tin hơn.
