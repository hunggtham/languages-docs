# C1 Vocabulary 56 — Identification and asymptotic inference

This lesson follows how econometricians distinguish what a model identifies from what a finite sample can estimate and how uncertainty is justified.

Flow: **numerical identification → local identification → global identification → rank condition → regularity condition → estimating equation → score equation → semiparametric efficiency → nuisance tangent space → pathwise derivative → regular estimator → asymptotic normality → small-sample correction → jackknife bias correction → bootstrap percentile → subsampling inference → uniform confidence band → simultaneous confidence band → weak convergence → empirical process**.

## 1. numerical identification /ˈnuːmərɪkəl aɪˌdɛntəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the ability to determine a numerical parameter or feature from the population distribution implied by a model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng determine numerical parameter hoặc feature từ population distribution của model.
**Grammar & collocations:** `point numerical identification` — identification; `establish numerical identification` — establish.
**Examples:** `Numerical identification failed when two parameter values produced the same population moments.` → Identification numerical fail khi hai parameter value tạo cùng population moment.
**Liên kết tiếng Hàn:** `수치 식별`.

## 2. local identification /ˈloʊkəl aɪˌdɛntəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** identification that holds only in a neighborhood around the true parameter value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identification chỉ hold trong neighborhood quanh true parameter value.
**Grammar & collocations:** `local identification condition` — condition; `check local identification` — check.
**Examples:** `Local identification was sufficient for estimating the policy effect near the proposed value.` → Identification local đủ để estimate policy effect gần value đề xuất.
**Liên kết tiếng Hàn:** `국소 식별`.

## 3. global identification /ˈɡloʊbəl aɪˌdɛntəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** identification that uniquely determines a parameter throughout the entire parameter space allowed by the model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identification uniquely determine parameter trên toàn parameter space model allow.
**Grammar & collocations:** `global identification argument` — argument; `prove global identification` — prove.
**Examples:** `Global identification required ruling out a second solution far from the preferred estimate.` → Identification global cần rule out solution thứ hai xa preferred estimate.
**Liên kết tiếng Hàn:** `전역 식별`.

## 4. rank condition /ræŋk kənˈdɪʃən/
**Part of speech:** noun
**Core meaning (English):** a requirement that a matrix or derivative have enough independent dimensions to distinguish parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** requirement matrix hoặc derivative có đủ dimension independent để distinguish parameter.
**Grammar & collocations:** `full-rank condition` — condition; `verify a rank condition` — verify.
**Examples:** `The rank condition failed because two instruments varied in exactly the same way.` → Condition rank fail vì hai instrument vary y hệt.
**Liên kết tiếng Hàn:** `계수 조건`.

## 5. regularity condition /ˌrɛɡjəˈlærəti kənˈdɪʃən/
**Part of speech:** noun
**Core meaning (English):** a technical assumption that keeps a model, derivative, distribution, or estimator sufficiently well behaved for theory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** assumption technical giữ model, derivative, distribution hoặc estimator đủ well behaved.
**Grammar & collocations:** `standard regularity condition` — condition; `state a regularity condition` — state.
**Examples:** `The proof required a regularity condition excluding probabilities arbitrarily close to zero.` → Proof cần condition regularity loại probability gần zero tùy ý.
**Liên kết tiếng Hàn:** `정칙 조건`.

## 6. estimating equation /ˈɛstəˌmeɪtɪŋ ɪˈkweɪʃən/
**Part of speech:** noun
**Core meaning (English):** an equation set to zero whose solution defines an estimator from sample data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** equation set bằng zero, solution define estimator từ sample data.
**Grammar & collocations:** `unbiased estimating equation` — equation; `solve an estimating equation` — solve.
**Examples:** `The estimating equation balanced weighted residuals across treatment groups.` → Equation estimating balance residual weighted giữa treatment group.
**Liên kết tiếng Hàn:** `추정 방정식`.

## 7. score equation /skɔr ɪˈkweɪʃən/
**Part of speech:** noun
**Core meaning (English):** the equation obtained by setting the derivative of a likelihood or objective function equal to zero.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** equation tạo bằng set derivative của likelihood hoặc objective bằng zero.
**Grammar & collocations:** `likelihood score equation` — equation; `differentiate the score equation` — differentiate.
**Examples:** `The score equation was solved numerically because no closed form was available.` → Equation score solve numerical vì không có closed form.
**Liên kết tiếng Hàn:** `점수 방정식`.

## 8. semiparametric efficiency /ˌsɛmiˌpærəˈmɛtrɪk ɪˈfɪʃənsi/
**Part of speech:** noun
**Core meaning (English):** the best achievable precision for estimating a target when some parts of the data-generating process remain unspecified.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** precision tốt nhất có thể đạt khi một phần data-generating process chưa specify.
**Grammar & collocations:** `semiparametric efficiency bound` — bound; `study semiparametric efficiency` — study.
**Examples:** `Semiparametric efficiency improved when the auxiliary outcome model used richer covariates.` → Efficiency semiparametric improve khi auxiliary outcome model dùng covariate richer.
**Liên kết tiếng Hàn:** `반모수 효율성`.

## 9. nuisance tangent space /ˈnuːsəns ˈtændʒənt speɪs/
**Part of speech:** noun
**Core meaning (English):** the set of directions representing changes in unspecified parts of a semiparametric model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** set direction represent change trong phần unspecified của semiparametric model.
**Grammar & collocations:** `orthogonal nuisance tangent space` — space; `define the nuisance tangent space` — define.
**Examples:** `The efficient score was constructed to be orthogonal to the nuisance tangent space.` → Efficient score được construct orthogonal với space nuisance tangent.
**Liên kết tiếng Hàn:** `방해 접공간`.

## 10. pathwise derivative /ˈpæθˌwaɪz dɪˈrɪvətɪv/
**Part of speech:** noun
**Core meaning (English):** the rate at which a statistical target changes along a smooth path through a model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rate target statistical đổi dọc theo smooth path qua model.
**Grammar & collocations:** `pathwise differentiable parameter` — parameter; `calculate a pathwise derivative` — calculate.
**Examples:** `The pathwise derivative characterized how the treatment estimand changed under a small distributional perturbation.` → Derivative pathwise characterize estimand treatment đổi khi distribution perturb nhỏ.
**Liên kết tiếng Hàn:** `경로별 미분`.

## 11. regular estimator /ˈrɛɡjələr ˈɛstəˌmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator whose limiting behavior remains stable under small local changes in the data-generating distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator có limiting behavior stable dưới small local change của distribution.
**Grammar & collocations:** `asymptotically regular estimator` — estimator; `construct a regular estimator` — construct.
**Examples:** `The regular estimator remained well behaved when the policy probability changed slightly.` → Estimator regular vẫn well behaved khi policy probability đổi nhẹ.
**Liên kết tiếng Hàn:** `정칙 추정량`.

## 12. asymptotic normality /ˌæsɪmˈtɑtɪk nɔrˈmælɪti/
**Part of speech:** noun
**Core meaning (English):** the property that a suitably scaled estimator approaches a normal distribution as sample size grows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator scale phù hợp approach normal distribution khi sample size grow.
**Grammar & collocations:** `asymptotic-normality result` — result; `rely on asymptotic normality` — rely.
**Examples:** `Asymptotic normality supported a large-sample confidence interval for the effect.` → Normality asymptotic support confidence interval large-sample cho effect.
**Liên kết tiếng Hàn:** `점근적 정규성`.

## 13. small-sample correction /smɔl ˈsæmpəl kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** an adjustment intended to improve inference when the sample is too small for large-sample approximations to work well.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** adjustment improve inference khi sample nhỏ làm large-sample approximation kém.
**Grammar & collocations:** `finite-sample correction` — correction; `apply a small-sample correction` — apply.
**Examples:** `The small-sample correction widened the standard error for the rare subgroup.` → Correction small-sample widen standard error cho subgroup hiếm.
**Liên kết tiếng Hàn:** `소표본 보정`.

## 14. jackknife bias correction /ˈdʒækˌnaɪf baɪəs kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** an adjustment based on repeatedly leaving out observations to estimate and reduce finite-sample bias.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** adjustment dựa trên repeatedly leave-out observation để estimate và reduce bias finite-sample.
**Grammar & collocations:** `delete-one jackknife bias correction` — correction; `use jackknife bias correction` — use.
**Examples:** `Jackknife bias correction reduced the upward bias in the small-sample ratio estimate.` → Correction bias jackknife giảm upward bias trong ratio estimate sample nhỏ.
**Liên kết tiếng Hàn:** `잭나이프 편향 보정`.

## 15. bootstrap percentile /ˈbuːtˌstræp pərˈsɛntaɪl/
**Part of speech:** noun
**Core meaning (English):** a confidence interval formed from selected quantiles of a bootstrap distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** confidence interval tạo từ quantile được select của bootstrap distribution.
**Grammar & collocations:** `basic bootstrap percentile interval` — interval; `report a bootstrap percentile` — report.
**Examples:** `The bootstrap percentile interval was asymmetric because the estimate had a long upper tail.` → Interval percentile bootstrap asymmetric vì estimate có upper tail dài.
**Liên kết tiếng Hàn:** `부트스트랩 백분위수`.

## 16. subsampling inference /ˈsʌbˌsæmplɪŋ ˈɪnfərəns/
**Part of speech:** noun
**Core meaning (English):** inference based on estimates from smaller subsets of the data, often used when ordinary bootstrap assumptions are doubtful.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** inference dựa estimate từ subset nhỏ hơn, dùng khi bootstrap assumption đáng doubt.
**Grammar & collocations:** `robust subsampling inference` — inference; `perform subsampling inference` — perform.
**Examples:** `Subsampling inference remained stable under dependence across neighboring observations.` → Inference subsampling stable dưới dependence giữa observation lân cận.
**Liên kết tiếng Hàn:** `부분 표본 추론`.

## 17. uniform confidence band /ˈjuːnəˌfɔrm ˈkɑnfədəns bænd/
**Part of speech:** noun
**Core meaning (English):** a band that covers an entire estimated curve or function with a stated overall confidence level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** band cover toàn curve hoặc function estimate với overall confidence level.
**Grammar & collocations:** `simultaneous uniform confidence band` — band; `plot a uniform confidence band` — plot.
**Examples:** `The uniform confidence band showed where the dose-response curve was uncertain across all doses.` → Band confidence uniform show dose-response curve uncertain ở mọi dose.
**Liên kết tiếng Hàn:** `균일 신뢰 밴드`.

## 18. simultaneous confidence band /ˌsaɪməlˈteɪniəs ˈkɑnfədəns bænd/
**Part of speech:** noun
**Core meaning (English):** a confidence band designed to control coverage for many points or features at the same time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** band control coverage cho nhiều point hoặc feature cùng lúc.
**Grammar & collocations:** `95-percent simultaneous confidence band` — band; `construct a simultaneous confidence band` — construct.
**Examples:** `The simultaneous confidence band prevented isolated points from appearing falsely precise.` → Band confidence simultaneous prevent point isolated trông precise giả.
**Liên kết tiếng Hàn:** `동시 신뢰 밴드`.

## 19. weak convergence /wiːk kənˈvɜrdʒəns/
**Part of speech:** noun
**Core meaning (English):** convergence in distribution of random variables or processes, expressed through their behavior under suitable functions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** convergence distribution của random variable hoặc process theo behavior dưới function phù hợp.
**Grammar & collocations:** `functional weak convergence` — convergence; `prove weak convergence` — prove.
**Examples:** `Weak convergence justified the limiting distribution used for the confidence band.` → Convergence weak justify limiting distribution dùng cho confidence band.
**Liên kết tiếng Hàn:** `약한 수렴`.

## 20. empirical process /ɛmˈpɪrɪkəl ˈprɑsɛs/
**Part of speech:** noun
**Core meaning (English):** a stochastic process built from sample averages or distributions that tracks how data behave across a class of functions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stochastic process từ sample average hoặc distribution, track data behavior qua class function.
**Grammar & collocations:** `indexed empirical process` — process; `control an empirical process` — control.
**Examples:** `The empirical process bound limited how much the fitted curve could fluctuate.` → Process empirical bound limit fitted curve fluctuate bao nhiêu.
**Liên kết tiếng Hàn:** `경험적 과정`.

## Review in context

An estimator may have **numerical identification**, only **local identification**, or stronger **global identification** supported by a **rank condition** and a **regularity condition**. An **estimating equation** or **score equation** defines the estimate, while **semiparametric efficiency** depends on the **nuisance tangent space** and a **pathwise derivative**. A **regular estimator** may have **asymptotic normality**, but a **small-sample correction** or **jackknife bias correction** can be useful. A **bootstrap percentile** interval and **subsampling inference** offer alternatives, while a **uniform confidence band** or **simultaneous confidence band** relies on **weak convergence** and an **empirical process** argument.

**Bản dịch tiếng Việt:** Estimator có thể có **numerical identification**, chỉ **local identification**, hoặc **global identification** mạnh hơn nhờ **rank condition** và **regularity condition**. **Estimating equation** hoặc **score equation** define estimate, còn **semiparametric efficiency** phụ thuộc **nuisance tangent space** và **pathwise derivative**. **Regular estimator** có thể có **asymptotic normality**, nhưng **small-sample correction** hoặc **jackknife bias correction** hữu ích. Interval **bootstrap percentile** và **subsampling inference** là alternative, còn **uniform confidence band** hoặc **simultaneous confidence band** dựa trên **weak convergence** và argument **empirical process**.
