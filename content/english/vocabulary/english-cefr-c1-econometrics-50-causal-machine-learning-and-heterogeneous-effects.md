# C1 Vocabulary 50 — Causal machine learning and heterogeneous effects

This lesson follows how flexible prediction tools estimate who may benefit from an intervention while separating discovery from credible causal comparison.

Flow: **individual treatment effect → meta-learner → T-learner → S-learner → X-learner → R-learner → uplift model → causal tree → orthogonal moment → debiased machine learning → targeted regularization → cross-validated nuisance → out-of-fold prediction → heterogeneity score → treatment effect surface → causal representation → heterogeneous response → treatment policy score → policy value estimator → counterfactual risk**.

## 1. individual treatment effect /ˌɪndəˈvɪdʒuəl ˈtriːtmənt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the causal effect an intervention would have for one particular person or unit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** causal effect intervention sẽ có với một person hoặc unit cụ thể.
**Grammar & collocations:** `estimated individual treatment effect` — effect; `predict an individual treatment effect` — predict.
**Examples:** `The individual treatment effect was larger for patients with the early biomarker.` → Effect treatment individual lớn hơn ở patient có biomarker sớm.
**Liên kết tiếng Hàn:** `개인별 치료 효과`.

## 2. meta-learner /ˈmɛtə ˈlɜrnər/
**Part of speech:** noun
**Core meaning (English):** a method that uses one or more predictive models as building blocks to estimate treatment effects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** method dùng một hoặc nhiều predictive model làm building block để estimate treatment effect.
**Grammar & collocations:** `flexible meta-learner` — learner; `fit a meta-learner` — fit.
**Examples:** `The meta-learner combined outcome predictions with treatment assignment information.` → Learner meta combine outcome prediction với information assignment treatment.
**Liên kết tiếng Hàn:** `메타 학습기`.

## 3. T-learner /ˈtiː ˈlɜrnər/
**Part of speech:** noun
**Core meaning (English):** a treatment-effect method that fits separate outcome models for treated and untreated units and compares their predictions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** method fit outcome model riêng cho treated và untreated rồi compare prediction.
**Grammar & collocations:** `T-learner estimate` — estimate; `train a T-learner` — train.
**Examples:** `The T-learner estimated two response surfaces before subtracting one from the other.` → Learner T estimate hai response surface trước khi subtract.
**Liên kết tiếng Hàn:** `T-학습기`.

## 4. S-learner /ˈɛs ˈlɜrnər/
**Part of speech:** noun
**Core meaning (English):** a treatment-effect method that includes treatment status as a feature in one shared outcome model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** method include treatment status như feature trong một outcome model chung.
**Grammar & collocations:** `regularized S-learner` — learner; `fit an S-learner` — fit.
**Examples:** `The S-learner used treatment status and patient characteristics in one flexible model.` → Learner S dùng treatment status và characteristic patient trong một model flexible.
**Liên kết tiếng Hàn:** `S-학습기`.

## 5. X-learner /ˈɛks ˈlɜrnər/
**Part of speech:** noun
**Core meaning (English):** a meta-learning method that first estimates unit-level effects and then learns how those effects vary with covariates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** method estimate unit-level effect trước rồi learn effect vary theo covariate.
**Grammar & collocations:** `X-learner design` — design; `apply an X-learner` — apply.
**Examples:** `The X-learner was useful when treatment groups had very different sizes.` → Learner X hữu ích khi treatment group có size rất khác.
**Liên kết tiếng Hàn:** `X-학습기`.

## 6. R-learner /ˈɑr ˈlɜrnər/
**Part of speech:** noun
**Core meaning (English):** a treatment-effect method that removes predicted outcome and treatment components before estimating the remaining causal relationship.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** method remove outcome prediction và treatment component trước estimate causal relationship còn lại.
**Grammar & collocations:** `orthogonal R-learner` — learner; `estimate with an R-learner` — estimate.
**Examples:** `The R-learner reduced sensitivity to errors in the nuisance predictions.` → Learner R giảm sensitivity với error trong nuisance prediction.
**Liên kết tiếng Hàn:** `R-학습기`.

## 7. uplift model /ˈʌpˌlɪft ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that predicts how much an intervention changes an individual's outcome compared with not intervening.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model predict intervention change outcome cá nhân bao nhiêu so với không intervene.
**Grammar & collocations:** `customer uplift model` — model; `train an uplift model` — train.
**Examples:** `The uplift model targeted people likely to respond positively to the reminder.` → Model uplift target người likely respond positive với reminder.
**Liên kết tiếng Hàn:** `상승 효과 모형`.

## 8. causal tree /ˈkɔzəl triː/
**Part of speech:** noun
**Core meaning (English):** a tree-based method that divides units into groups with different estimated causal effects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** method tree divide unit thành group có causal effect estimate khác nhau.
**Grammar & collocations:** `honest causal tree` — tree; `grow a causal tree` — grow.
**Examples:** `The causal tree separated participants by baseline risk before estimating effects.` → Tree causal tách participant theo baseline risk trước estimate effect.
**Liên kết tiếng Hàn:** `인과 트리`.

## 9. orthogonal moment /ɔrˈθɑɡənəl ˈmoʊmənt/
**Part of speech:** noun
**Core meaning (English):** a moment condition designed so that small errors in auxiliary estimates have little first-order effect on the target estimate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** moment condition design để error nhỏ trong auxiliary estimate ít ảnh hưởng first-order tới target estimate.
**Grammar & collocations:** `orthogonal moment condition` — condition; `construct an orthogonal moment` — construct.
**Examples:** `The orthogonal moment protected the treatment estimate from small prediction errors.` → Moment orthogonal bảo vệ treatment estimate khỏi prediction error nhỏ.
**Liên kết tiếng Hàn:** `직교 모멘트`.

## 10. debiased machine learning /diːˈbaɪəst məˈʃiːn ˈlɜrnɪŋ/
**Part of speech:** noun
**Core meaning (English):** a framework that combines flexible prediction with an adjustment designed to reduce regularization bias in a target causal estimate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** framework combine prediction flexible với adjustment giảm regularization bias trong causal estimate.
**Grammar & collocations:** `debiased machine-learning estimator` — estimator; `apply debiased machine learning` — apply.
**Examples:** `Debiased machine learning estimated the policy effect while allowing nonlinear controls.` → Machine learning debiased estimate policy effect và allow nonlinear control.
**Liên kết tiếng Hàn:** `편향 보정 머신러닝`.

## 11. targeted regularization /ˈtɑrɡətɪd ˌrɛɡjələrəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a penalty or adjustment designed around the target causal parameter rather than prediction accuracy alone.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** penalty hoặc adjustment design quanh causal parameter target chứ không chỉ prediction accuracy.
**Grammar & collocations:** `targeted regularization term` — term; `use targeted regularization` — use.
**Examples:** `Targeted regularization stabilized the effect estimate in a small subgroup.` → Regularization targeted stabilize effect estimate trong subgroup nhỏ.
**Liên kết tiếng Hàn:** `표적 정규화`.

## 12. cross-validated nuisance /ˌkrɔs ˈvæləˌdeɪtɪd ˈnuːsəns/
**Part of speech:** noun
**Core meaning (English):** an auxiliary prediction used in causal estimation that was evaluated through cross-validation rather than fitted only to the same observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** auxiliary prediction trong causal estimation được evaluate qua cross-validation, không chỉ fit cùng observation.
**Grammar & collocations:** `cross-validated nuisance estimate` — estimate; `construct a cross-validated nuisance` — construct.
**Examples:** `The cross-validated nuisance reduced overfitting in the treatment model.` → Nuisance cross-validated giảm overfit trong treatment model.
**Liên kết tiếng Hàn:** `교차 검증 보조 추정량`.

## 13. out-of-fold prediction /ˌaʊt əv foʊld prɪˈdɪkʃən/
**Part of speech:** noun
**Core meaning (English):** a prediction for an observation generated by a model that was trained without using that observation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prediction cho observation từ model train mà không dùng observation đó.
**Grammar & collocations:** `honest out-of-fold prediction` — prediction; `generate out-of-fold predictions` — generate.
**Examples:** `Out-of-fold prediction gave each unit a treatment estimate produced without looking at its own outcome.` → Prediction out-of-fold cho mỗi unit treatment estimate không nhìn outcome của chính nó.
**Liên kết tiếng Hàn:** `폴드 외 예측`.

## 14. heterogeneity score /ˌhɛtərədʒəˈniəti skɔr/
**Part of speech:** noun
**Core meaning (English):** a measure summarizing how much estimated effects differ across people, groups, or conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measure summarize estimated effect khác nhau giữa người, group hoặc condition bao nhiêu.
**Grammar & collocations:** `high heterogeneity score` — score; `compare heterogeneity scores` — compare.
**Examples:** `The heterogeneity score was high enough to justify examining treatment subgroups.` → Score heterogeneity đủ cao để examine treatment subgroup.
**Liên kết tiếng Hàn:** `이질성 점수`.

## 15. treatment effect surface /ˈtriːtmənt ɪˈfɛkt ˈsɜrfəs/
**Part of speech:** noun
**Core meaning (English):** a representation of how an estimated treatment effect changes across combinations of characteristics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** representation effect treatment đổi thế nào qua combination characteristic.
**Grammar & collocations:** `smooth treatment-effect surface` — surface; `plot a treatment effect surface` — plot.
**Examples:** `The treatment effect surface rose with baseline risk but flattened for older patients.` → Surface effect treatment rise theo baseline risk nhưng flatten ở older patient.
**Liên kết tiếng Hàn:** `치료 효과 표면`.

## 16. causal representation /ˈkɔzəl ˌrɛprɪzənˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a learned or constructed description of data intended to preserve information useful for causal comparison.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** description data learned hoặc constructed để preserve information useful cho causal comparison.
**Grammar & collocations:** `balanced causal representation` — representation; `learn a causal representation` — learn.
**Examples:** `The causal representation balanced treated and untreated users on important history.` → Representation causal balance treated và untreated user theo history quan trọng.
**Liên kết tiếng Hàn:** `인과 표현`.

## 17. heterogeneous response /ˌhɛtərədʒəˈniəs rɪˈspɑns/
**Part of speech:** noun
**Core meaning (English):** an outcome response that differs across people or contexts rather than following one common effect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** outcome response khác nhau giữa người hoặc context, không theo một effect chung.
**Grammar & collocations:** `strongly heterogeneous response` — response; `model heterogeneous response` — model.
**Examples:** `The program produced a heterogeneous response across schools with different staffing levels.` → Program tạo response heterogeneous giữa school có staffing level khác.
**Liên kết tiếng Hàn:** `이질적 반응`.

## 18. treatment policy score /ˈtriːtmənt ˈpɑləsi skɔr/
**Part of speech:** noun
**Core meaning (English):** a measure of how well a rule for assigning treatment is expected to perform.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measure rule assign treatment expected perform tốt thế nào.
**Grammar & collocations:** `high treatment policy score` — score; `evaluate a treatment policy score` — evaluate.
**Examples:** `The treatment policy score favored the rule that treated only high-risk patients.` → Score policy treatment favor rule chỉ treat high-risk patient.
**Liên kết tiếng Hàn:** `치료 정책 점수`.

## 19. policy value estimator /ˈpɑləsi ˈvælju ˈɛstəˌmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator of the expected outcome if a particular treatment or decision policy were applied.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator expected outcome nếu treatment hoặc decision policy cụ thể được apply.
**Grammar & collocations:** `robust policy value estimator` — estimator; `construct a policy value estimator` — construct.
**Examples:** `The policy value estimator compared targeted treatment with treatment for everyone.` → Estimator value policy compare targeted treatment với treat everyone.
**Liên kết tiếng Hàn:** `정책 가치 추정량`.

## 20. counterfactual risk /ˌkaʊntərˈfæktʃuəl rɪsk/
**Part of speech:** noun
**Core meaning (English):** the expected harm or loss under an alternative action that was not actually observed for a unit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** harm hoặc loss expected dưới action alternative không được observe thật cho unit.
**Grammar & collocations:** `estimated counterfactual risk` — risk; `compare counterfactual risk` — compare.
**Examples:** `The policy reduced counterfactual risk for patients who would otherwise receive no follow-up.` → Policy reduce risk counterfactual cho patient nếu không thì không receive follow-up.
**Liên kết tiếng Hàn:** `반사실적 위험`.

## Review in context

An **individual treatment effect** can be estimated with a **meta-learner**, including a **T-learner**, **S-learner**, **X-learner**, or **R-learner**. An **uplift model** or **causal tree** may reveal subgroups, while an **orthogonal moment** supports **debiased machine learning** and **targeted regularization**. A **cross-validated nuisance** and **out-of-fold prediction** reduce overfitting. The **heterogeneity score** and **treatment effect surface** describe a **causal representation** of a **heterogeneous response**. Finally, a **treatment policy score**, a **policy value estimator**, and **counterfactual risk** help compare rules rather than merely rank predictions.

**Bản dịch tiếng Việt:** **Individual treatment effect** có thể estimate bằng **meta-learner**, gồm **T-learner**, **S-learner**, **X-learner** hoặc **R-learner**. **Uplift model** hoặc **causal tree** có thể reveal subgroup, còn **orthogonal moment** support **debiased machine learning** và **targeted regularization**. **Cross-validated nuisance** và **out-of-fold prediction** giảm overfit. **Heterogeneity score** và **treatment effect surface** mô tả **causal representation** của **heterogeneous response**. Cuối cùng, **treatment policy score**, **policy value estimator** và **counterfactual risk** giúp compare rule chứ không chỉ rank prediction.
