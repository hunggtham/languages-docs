# C2+ Vocabulary — Statistical inference and uncertainty

This lesson follows how statistical models represent uncertainty, missingness, dependence, and decision thresholds. The network is **posterior predictive calibration → likelihood principle → evidential likelihood ratio → hierarchical model → random-effects shrinkage → missingness architecture → imputation uncertainty → selection-on-observables → support violation → overlap failure → intervention support → collider path → paradoxical aggregation → regression dilution → variance inflation → serial dependence → effective information size → cluster correlation → sequential stopping boundary → optional stopping bias → sequential monitoring → familywise error control → model averaging → adaptive pooling → causal estimand sensitivity**.

## 1. posterior predictive calibration /pɑˈstɪriər prɪˈdɪktɪv ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** assessment of whether a model's posterior predictions match the distribution and uncertainty of data it should reproduce.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** posterior predictive calibration hỏi model sau khi học có generate data giống observed data về range và uncertainty không.
**Grammar & collocations:** `posterior-predictive-calibration check` — check; `calibrate predictive intervals` — calibrate; `replicated dataset` — dataset.
**Examples:** `Posterior predictive calibration showed that the model understated extreme rainfall.` → Calibration cho thấy model underestimate extreme rainfall.
**Liên kết tiếng Hàn:** `사후 예측 보정` — posterior predictive calibration.

## 2. likelihood principle /ˈlaɪkliˌhʊd ˈprɪnsəpəl/
**Part of speech:** noun
**Core meaning (English):** the principle that inferential evidence about a parameter should depend on the observed likelihood, not on unobserved outcomes or the stopping plan alone.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** likelihood principle tập trung evidence trong observed likelihood, không để stopping rule chưa xảy ra chi phối quá mức.
**Grammar & collocations:** `likelihood-principle argument` — argument; `condition on the likelihood` — condition; `observed data` — data.
**Examples:** `The likelihood principle framed the debate over whether the stopping rule should affect the evidence.` → Principle định hình debate về stopping rule.
**Liên kết tiếng Hàn:** `우도 원리` — likelihood principle.

## 3. evidential likelihood ratio /ˌɛvɪˈdɛnʃəl ˈlaɪkliˌhʊd ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** a ratio comparing how well two hypotheses account for the observed data as evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** evidential likelihood ratio so sánh data ủng hộ hypothesis A hay B mạnh hơn bao nhiêu.
**Grammar & collocations:** `evidential-likelihood ratio` — ratio; `compare hypotheses` — compare; `data-supported hypothesis` — hypothesis.
**Examples:** `The evidential likelihood ratio favored the mechanism that predicted the observed timing.` → Ratio favor mechanism dự đoán đúng timing.
**Liên kết tiếng Hàn:** `증거 우도비` — evidential likelihood ratio.

## 4. hierarchical model /ˌhaɪərˈɑrkɪkəl ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that represents observations as arising from parameters organized across multiple levels, such as people, sites, and regions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hierarchical model xếp parameter theo level và cho phép information flow giữa person, site, region.
**Grammar & collocations:** `hierarchical-model structure` — structure; `nest observations` — nest; `multilevel parameter` — parameter.
**Examples:** `The hierarchical model estimated clinic effects while sharing information across small clinics.` → Model estimate clinic effect và share information.
**Liên kết tiếng Hàn:** `계층 모형` — hierarchical model.

## 5. random-effects shrinkage /ˈrændəm ɪˈfɛkts ʃrɪŋkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the pulling of noisy group-specific estimates toward a shared population mean in a random-effects model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** random-effects shrinkage kéo estimate noisy của group nhỏ về mean chung để giảm overreaction.
**Grammar & collocations:** `random-effects shrinkage estimate` — estimate; `shrink toward a mean` — shrink; `group-specific effect` — effect.
**Examples:** `Random-effects shrinkage prevented the smallest clinics from receiving extreme rankings based on few cases.` → Shrinkage tránh rank cực đoan do ít case.
**Liên kết tiếng Hàn:** `무작위 효과 수축` — random-effects shrinkage.

## 6. missingness architecture /ˈmɪsɪŋnəs ˈɑrkəˌtɛktʃər/
**Part of speech:** noun
**Core meaning (English):** the structured pattern of why, when, and for whom observations are absent from a dataset.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** missingness architecture nhìn missing data như pattern có nguyên nhân, không chỉ ô trống ngẫu nhiên.
**Grammar & collocations:** `missingness-architecture diagnosis` — diagnosis; `map missingness` — map; `observation pattern` — pattern.
**Examples:** `The missingness architecture suggested that people with severe symptoms skipped the follow-up survey.` → Architecture cho thấy người symptom nặng bỏ follow-up.
**Liên kết tiếng Hàn:** `결측 구조` — missingness architecture.

## 7. imputation uncertainty /ɪmˌpjuteɪʃən ʌnˈsɜrtənti/
**Part of speech:** noun
**Core meaning (English):** uncertainty introduced because missing values are filled or inferred rather than directly observed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** imputation uncertainty nhắc rằng value được fill không phải data thật và có nhiều khả năng.
**Grammar & collocations:** `imputation-uncertainty interval` — interval; `propagate imputation uncertainty` — propagate; `plausible value` — value.
**Examples:** `The final interval included imputation uncertainty for the missing income records.` → Interval bao gồm uncertainty từ income bị thiếu.
**Liên kết tiếng Hàn:** `대치 불확실성` — imputation uncertainty.

## 8. selection-on-observables /sɪˈlɛkʃən ɑn əbˈzɜrvəbəlz/
**Part of speech:** noun
**Core meaning (English):** an assumption that, after conditioning on measured variables, selection into treatment or observation is unrelated to unmeasured factors affecting the outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** selection-on-observables nói measured covariates đã đủ để giải thích selection; đây là assumption mạnh.
**Grammar & collocations:** `selection-on-observables assumption` — assumption; `condition on covariates` — condition; `measured selection process` — process.
**Examples:** `The estimate relied on selection-on-observables, which was doubtful because motivation was unmeasured.` → Estimate dựa vào assumption nhưng motivation chưa đo.
**Liên kết tiếng Hàn:** `관측 변수에 의한 선택` — selection-on-observables.

## 9. support violation /səˈpɔrt vaɪəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** a failure of the data to contain comparable units across the treatment, exposure, or covariate values needed for an inference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** support violation xảy ra khi một region của covariate chỉ có một treatment, không có comparison.
**Grammar & collocations:** `support-violation warning` — warning; `lack common support` — lack; `extrapolate beyond data` — extrapolate.
**Examples:** `Support violation forced the analysts to restrict the estimate to overlapping ages.` → Support violation buộc restrict estimate vào ages overlap.
**Liên kết tiếng Hàn:** `지지 영역 위반` — support violation.

## 10. overlap failure /ˈoʊvərˌlæp ˈfeɪljər/
**Part of speech:** noun
**Core meaning (English):** a lack of sufficient similarity between groups on the variables needed to compare their outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** overlap failure là comparison không có vùng chung đủ rộng.
**Grammar & collocations:** `overlap-failure diagnosis` — diagnosis; `check covariate overlap` — check; `comparable groups` — groups.
**Examples:** `Overlap failure made the treatment effect for the oldest patients depend on extrapolation.` → Overlap failure khiến effect ở oldest patient dựa vào extrapolation.
**Liên kết tiếng Hàn:** `중첩 실패` — overlap failure.

## 11. intervention support /ˌɪntərˈvɛnʃən səˈpɔrt/
**Part of speech:** noun
**Core meaning (English):** the range of intervention levels or treatment conditions represented well enough in the data for causal comparison.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** intervention support nói treatment dose/option nào có data comparison đủ.
**Grammar & collocations:** `intervention-support region` — region; `stay within support` — stay; `treatment level` — level.
**Examples:** `The dose-response curve was reported only within the observed intervention support.` → Curve chỉ report trong vùng dose có support.
**Liên kết tiếng Hàn:** `개입 지지 영역` — intervention support.

## 12. collider path /kəˈlaɪdər pæθ/
**Part of speech:** noun
**Core meaning (English):** a path that becomes statistically associated after conditioning on a common effect, potentially creating a noncausal relation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** collider path mở ra khi condition vào common effect, tạo association không phải causal.
**Grammar & collocations:** `collider-path bias` — bias; `open a path` — open; `condition on a collider` — condition.
**Examples:** `Adjusting for hospital admission opened a collider path between prior health and referral source.` → Adjust admission mở collider path.
**Liên kết tiếng Hàn:** `충돌자 경로` — collider path.

## 13. paradoxical aggregation /ˌpærəˈdɑksɪkəl ˌæɡrəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a reversal or distortion that appears when subgroup patterns are combined into an aggregate summary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** paradoxical aggregation làm aggregate story đảo chiều so với subgroup.
**Grammar & collocations:** `paradoxical-aggregation example` — example; `aggregate across groups` — aggregate; `subgroup reversal` — reversal.
**Examples:** `Paradoxical aggregation made the overall success rate lower even though every clinic improved.` → Aggregate thấp hơn dù mọi clinic improve.
**Liên kết tiếng Hàn:** `역설적 집계` — paradoxical aggregation.

## 14. regression dilution /rɪˈɡrɛʃən daɪˈluːʃən/
**Part of speech:** noun
**Core meaning (English):** attenuation of an estimated association when a predictor is measured with random error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** regression dilution làm effect bị kéo về zero vì exposure đo noisy.
**Grammar & collocations:** `regression-dilution bias` — bias; `attenuate an association` — attenuate; `measurement-error correction` — correction.
**Examples:** `Regression dilution weakened the estimated association between diet and blood pressure.` → Dilution làm association estimate yếu hơn.
**Liên kết tiếng Hàn:** `회귀 희석` — regression dilution.

## 15. variance inflation /ˈvɛriəns ɪnˈfleɪʃən/
**Part of speech:** noun
**Core meaning (English):** an increase in estimator variance caused by collinearity, dependence, weighting, or other features of the design.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variance inflation làm estimate kém precise vì predictors hoặc observations overlap/depend.
**Grammar & collocations:** `variance-inflation diagnosis` — diagnosis; `inflate standard errors` — inflate; `collinear predictors` — predictors.
**Examples:** `Variance inflation made the coefficients unstable when three climate indicators moved together.` → Inflation làm coefficient unstable.
**Liên kết tiếng Hàn:** `분산 팽창` — variance inflation.

## 16. serial dependence /ˈsɪriəl dɪˈpɛndəns/
**Part of speech:** noun
**Core meaning (English):** dependence among observations ordered in time, so nearby measurements are more related than distant ones.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** serial dependence nghĩa observation hôm nay liên quan observation hôm qua, không độc lập.
**Grammar & collocations:** `serial-dependence structure` — structure; `model temporal dependence` — model; `time-ordered observations` — observations.
**Examples:** `Serial dependence caused the naive standard error to look too small.` → Serial dependence làm standard error naive quá nhỏ.
**Liên kết tiếng Hàn:** `계열 의존성` — serial dependence.

## 17. effective information size /ɪˈfɛktɪv ˌɪnfərˈmeɪʃən saɪz/
**Part of speech:** noun
**Core meaning (English):** the amount of independent information a dataset contributes after dependence, clustering, weighting, or missingness is considered.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effective information size có thể nhỏ hơn raw sample size vì data không độc lập hoặc quá noisy.
**Grammar & collocations:** `effective-information-size calculation` — calculation; `discount dependence` — discount; `independent information` — information.
**Examples:** `The effective information size was closer to 400 than the raw count of 900 repeated measurements.` → Effective size gần 400 hơn raw count 900.
**Liên kết tiếng Hàn:** `유효 정보량` — effective information size.

## 18. cluster correlation /ˈklʌstər ˌkɔrəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** similarity among observations sharing a group, site, household, school, or other cluster.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cluster correlation khiến observation cùng cluster giống nhau hơn, làm independent count bị overstate.
**Grammar & collocations:** `cluster-correlation estimate` — estimate; `account for clustering` — account; `within-cluster similarity` — similarity.
**Examples:** `Cluster correlation was high because patients from one clinic shared the same care team.` → Correlation cao vì patient cùng clinic chung care team.
**Liên kết tiếng Hàn:** `군집 상관` — cluster correlation.

## 19. sequential stopping boundary /sɪˈkwɛnʃəl ˈstɑpɪŋ ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** a prespecified threshold for ending sequential data collection when evidence becomes sufficiently strong, weak, or unsafe.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sequential stopping boundary đặt line stop theo evidence trong sequential monitoring.
**Grammar & collocations:** `sequential-stopping boundary` — boundary; `cross a boundary` — cross; `stop for efficacy` — stop.
**Examples:** `The trial crossed the sequential stopping boundary for harm before reaching its planned sample size.` → Trial cross boundary vì harm trước đủ sample.
**Liên kết tiếng Hàn:** `순차 중단 경계` — sequential stopping boundary.

## 20. optional stopping bias /ˈɑpʃənəl ˈstɑpɪŋ baɪəs/
**Part of speech:** noun
**Core meaning (English):** distortion that can arise when data collection is repeatedly stopped or extended based on interim results without accounting for that rule.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** optional stopping bias đến từ việc stop/continue theo interim result mà không model stopping process.
**Grammar & collocations:** `optional-stopping bias` — bias; `peek at interim data` — peek; `unplanned stopping rule` — rule.
**Examples:** `The simulation showed optional stopping bias when investigators stopped after a favorable fluctuation.` → Simulation cho thấy bias khi stop sau fluctuation favorable.
**Liên kết tiếng Hàn:** `선택적 중단 편향` — optional stopping bias.

## 21. sequential monitoring /sɪˈkwɛnʃəl ˈmɑnətərɪŋ/
**Part of speech:** noun
**Core meaning (English):** planned examination of accumulating data with rules for continuing, modifying, or stopping a study.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sequential monitoring xem data từng đợt theo plan, không phải nhìn tùy tiện.
**Grammar & collocations:** `sequential-monitoring plan` — plan; `monitor accumulating data` — monitor; `interim analysis` — analysis.
**Examples:** `Sequential monitoring allowed the safety board to pause enrollment after a serious signal.` → Monitoring cho safety board pause enrollment.
**Liên kết tiếng Hàn:** `순차 모니터링` — sequential monitoring.

## 22. familywise error control /ˈfæməliwaɪs ˈɛrər kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** procedures that limit the probability of making at least one false-positive conclusion across a family of tests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** familywise error control giữ xác suất có ít nhất một false positive trong cả family test.
**Grammar & collocations:** `familywise-error-control procedure` — procedure; `adjust for multiplicity` — adjust; `test family` — family.
**Examples:** `Familywise error control was required because the team tested twelve primary outcomes.` → Control cần vì team test 12 primary outcome.
**Liên kết tiếng Hàn:** `가족별 오류 통제` — familywise error control.

## 23. model averaging /ˈmɑdəl ˈævərɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** combining predictions or inferences from several models instead of selecting one model as if it were certainly correct.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model averaging giữ uncertainty về model bằng cách combine nhiều model.
**Grammar & collocations:** `model-averaging scheme` — scheme; `average predictive distributions` — average; `model uncertainty` — uncertainty.
**Examples:** `Model averaging reduced forecast sensitivity to any one disputed climate specification.` → Averaging giảm sensitivity với một specification gây tranh luận.
**Liên kết tiếng Hàn:** `모형 평균화` — model averaging.

## 24. adaptive pooling /əˈdæptɪv ˈpuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** partial sharing of information across groups that allows estimates to move toward one another without forcing them to be identical.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** adaptive pooling chia sẻ information vừa đủ giữa group, không ép cùng một effect.
**Grammar & collocations:** `adaptive-pooling model` — model; `share information adaptively` — share; `group-specific deviation` — deviation.
**Examples:** `Adaptive pooling stabilized small-region estimates while preserving real regional differences.` → Pooling ổn định estimate vùng nhỏ mà giữ difference thật.
**Liên kết tiếng Hàn:** `적응적 풀링` — adaptive pooling.

## 25. causal estimand sensitivity /ˈkɔzəl ˈɛstəmənd ˌsɛnsəˈtɪvəti/
**Part of speech:** noun
**Core meaning (English):** examination of how conclusions change when the target causal quantity, population, time window, or treatment definition changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** causal estimand sensitivity hỏi conclusion có bền khi định nghĩa effect/population/time đổi không.
**Grammar & collocations:** `causal-estimand-sensitivity analysis` — analysis; `vary the estimand` — vary; `target-population contrast` — contrast.
**Examples:** `Causal estimand sensitivity showed that the benefit disappeared when delayed treatment was included.` → Sensitivity cho thấy benefit mất khi include delayed treatment.
**Liên kết tiếng Hàn:** `인과 추정량 민감도` — causal estimand sensitivity.

## Review in context

**Posterior predictive calibration** tests whether a model reproduces data, while the **likelihood principle** and an **evidential likelihood ratio** frame how observations support hypotheses. A **hierarchical model** can use **random-effects shrinkage** across groups. Researchers must inspect **missingness architecture** and carry **imputation uncertainty** forward. Assumptions such as **selection-on-observables**, **support violation**, **overlap failure**, and **intervention support** determine whether comparisons are credible; conditioning can open a **collider path** or create **paradoxical aggregation**. Measurement error can cause **regression dilution** and **variance inflation**, while time and cluster structure create **serial dependence**, reduce **effective information size**, and produce **cluster correlation**. A **sequential stopping boundary** and planned **sequential monitoring** reduce **optional stopping bias**; **familywise error control** limits false positives. **Model averaging** and **adaptive pooling** represent model and group uncertainty, while **causal estimand sensitivity** asks whether the conclusion survives a changed target.

**Bản dịch tiếng Việt:**

**Posterior predictive calibration** test model có reproduce data không, còn **likelihood principle** và **evidential likelihood ratio** mô tả evidence support hypothesis ra sao. **Hierarchical model** có thể dùng **random-effects shrinkage** giữa các group. Researcher phải xem **missingness architecture** và mang **imputation uncertainty** đi tiếp. Assumption như **selection-on-observables**, **support violation**, **overlap failure** và **intervention support** quyết định comparison có credible không; conditioning có thể mở **collider path** hoặc tạo **paradoxical aggregation**. Measurement error gây **regression dilution** và **variance inflation**, còn time/cluster structure tạo **serial dependence**, giảm **effective information size** và tạo **cluster correlation**. **Sequential stopping boundary** và **sequential monitoring** có plan giúp giảm **optional stopping bias**; **familywise error control** hạn chế false positive. **Model averaging** và **adaptive pooling** biểu diễn uncertainty về model và group, còn **causal estimand sensitivity** hỏi conclusion có bền khi target đổi không.
