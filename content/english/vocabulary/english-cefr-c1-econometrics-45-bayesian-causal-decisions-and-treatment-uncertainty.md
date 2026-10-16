# C1 Vocabulary 45 — Bayesian causal decisions and treatment uncertainty

This lesson follows how Bayesian analysis combines causal assumptions with uncertainty when a decision-maker must compare treatments or policies.

Flow: **Bayesian causal effect → prior treatment effect → posterior treatment effect → Bayesian propensity score → Bayesian mediation → causal graph prior → potential outcome model → treatment assignment model → causal posterior → Bayesian g-formula → Bayesian decision rule → posterior expected loss → utility function → decision-theoretic analysis → probability of benefit → probability of harm → treatment ranking → Bayesian model averaging → model averaging weight → ensemble posterior**.

## 1. Bayesian causal effect /ˈbeɪziən ˈkɔzəl ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** a probability-based estimate of how an intervention changes an outcome under an explicit causal model and prior assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimate theo probability về intervention change outcome thế nào với causal model và prior assumption rõ.
**Grammar & collocations:** `posterior Bayesian causal effect` — effect; `estimate a Bayesian causal effect` — estimate.
**Examples:** `The Bayesian causal effect suggested that the training program probably raised completion rates.` → Effect causal Bayesian suggest training program có lẽ raise completion rate.
**Liên kết tiếng Hàn:** `베이지안 인과 효과`.

## 2. prior treatment effect /ˈpraɪər ˈtriːtmənt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the assumed distribution of plausible treatment effects before the current data are analyzed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** distribution được assume của treatment effect plausible trước khi analyze data hiện tại.
**Grammar & collocations:** `weakly centered prior treatment effect` — effect; `specify a prior treatment effect` — specify.
**Examples:** `The prior treatment effect allowed small improvements but did not rule out a negative result.` → Effect treatment prior cho phép improvement nhỏ nhưng không loại negative result.
**Liên kết tiếng Hàn:** `사전 치료 효과`.

## 3. posterior treatment effect /pɑˈstɪriər ˈtriːtmənt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the updated distribution of treatment effects after combining prior assumptions with observed evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** distribution treatment effect update sau combine prior assumption với evidence observe.
**Grammar & collocations:** `uncertain posterior treatment effect` — effect; `report a posterior treatment effect` — report.
**Examples:** `The posterior treatment effect became smaller after the analysis included participants who dropped out.` → Effect treatment posterior nhỏ hơn sau khi include participant drop out.
**Liên kết tiếng Hàn:** `사후 치료 효과`.

## 4. Bayesian propensity score /ˈbeɪziən prəˈpɛnsəti skɔr/
**Part of speech:** noun
**Core meaning (English):** a probability distribution for receiving treatment, estimated with a Bayesian model rather than treated as a fixed number.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** probability distribution về receive treatment, estimate bằng Bayesian model thay vì fixed number.
**Grammar & collocations:** `estimated Bayesian propensity score` — score; `model a Bayesian propensity score` — model.
**Examples:** `The Bayesian propensity score represented uncertainty about treatment assignment.` → Score propensity Bayesian represent uncertainty về assignment treatment.
**Liên kết tiếng Hàn:** `베이지안 성향 점수`.

## 5. Bayesian mediation /ˈbeɪziən ˌmiːdiˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a Bayesian analysis of how an intervention may affect an outcome through an intermediate mechanism.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** analysis Bayesian về intervention affect outcome qua mechanism trung gian thế nào.
**Grammar & collocations:** `Bayesian mediation analysis` — analysis; `estimate Bayesian mediation` — estimate.
**Examples:** `Bayesian mediation suggested that improved attendance explained part of the program's effect.` → Mediation Bayesian suggest attendance improved explain một phần effect program.
**Liên kết tiếng Hàn:** `베이지안 매개 분석`.

## 6. causal graph prior /ˈkɔzəl ɡræf ˈpraɪər/
**Part of speech:** noun
**Core meaning (English):** prior information about which relationships among variables are plausible in a causal graph.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** information prior về relationship giữa variable nào plausible trong causal graph.
**Grammar & collocations:** `informative causal graph prior` — prior; `encode a causal graph prior` — encode.
**Examples:** `The causal graph prior ruled out a direct path that violated the study design.` → Prior graph causal rule out direct path vi phạm study design.
**Liên kết tiếng Hàn:** `인과 그래프 사전분포`.

## 7. potential outcome model /pəˈtɛnʃəl ˈaʊtˌkʌm ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model for the outcomes that would occur under each possible treatment or exposure condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model outcome sẽ occur dưới mỗi treatment hoặc exposure condition possible.
**Grammar & collocations:** `flexible potential outcome model` — model; `fit a potential outcome model` — fit.
**Examples:** `The potential outcome model compared each patient's observed result with an unobserved alternative.` → Model outcome potential compare result observe với alternative unobserved.
**Liên kết tiếng Hàn:** `잠재 결과 모형`.

## 8. treatment assignment model /ˈtriːtmənt əˈsaɪnmənt ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model describing how people or units come to receive different treatments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model describe người hoặc unit receive treatment khác nhau thế nào.
**Grammar & collocations:** `explicit treatment assignment model` — model; `check a treatment assignment model` — check.
**Examples:** `The treatment assignment model included clinic capacity and patient distance.` → Model assignment treatment gồm clinic capacity và patient distance.
**Liên kết tiếng Hàn:** `처치 할당 모형`.

## 9. causal posterior /ˈkɔzəl pɑˈstɪriər/
**Part of speech:** noun
**Core meaning (English):** the posterior distribution of causal quantities after the model combines assumptions and observed data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** posterior distribution của causal quantity sau combine assumption và data observe.
**Grammar & collocations:** `wide causal posterior` — posterior; `summarize the causal posterior` — summarize.
**Examples:** `The causal posterior remained wide because the study had few untreated comparisons.` → Posterior causal vẫn wide vì study có ít comparison untreated.
**Liên kết tiếng Hàn:** `인과 사후분포`.

## 10. Bayesian g-formula /ˈbeɪziən dʒiː ˈfɔrmjələ/
**Part of speech:** noun
**Core meaning (English):** a Bayesian calculation that combines outcome and treatment models to estimate outcomes under an intervention.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** calculation Bayesian combine outcome model và treatment model để estimate outcome dưới intervention.
**Grammar & collocations:** `Bayesian g-formula estimate` — estimate; `apply the Bayesian g-formula` — apply.
**Examples:** `The Bayesian g-formula estimated hospital use if every patient received follow-up calls.` → G-formula Bayesian estimate hospital use nếu mọi patient receive follow-up call.
**Liên kết tiếng Hàn:** `베이지안 g-공식`.

## 11. Bayesian decision rule /ˈbeɪziən dɪˈsɪʒən ruːl/
**Part of speech:** noun
**Core meaning (English):** a rule that chooses an action by combining posterior uncertainty with consequences for different outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule choose action bằng combine posterior uncertainty với consequence của outcome khác nhau.
**Grammar & collocations:** `conservative Bayesian decision rule` — rule; `derive a Bayesian decision rule` — derive.
**Examples:** `The Bayesian decision rule recommended treatment only when expected gains outweighed risks.` → Rule decision Bayesian recommend treatment khi expected gain outweigh risk.
**Liên kết tiếng Hàn:** `베이지안 의사결정 규칙`.

## 12. posterior expected loss /pɑˈstɪriər ɪkˈspɛktɪd lɔs/
**Part of speech:** noun
**Core meaning (English):** the average consequence of choosing an action, calculated over the posterior uncertainty about relevant states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** consequence average của action tính theo posterior uncertainty về state liên quan.
**Grammar & collocations:** `minimum posterior expected loss` — loss; `compare posterior expected loss` — compare.
**Examples:** `The policy with lower posterior expected loss required more staff but prevented costly failures.` → Policy có loss expected posterior thấp hơn cần nhiều staff nhưng prevent failure cost cao.
**Liên kết tiếng Hàn:** `사후 기대 손실`.

## 13. utility function /juˈtɪləti ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a formal representation of how desirable different outcomes or consequences are to a decision-maker.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** representation formal về outcome hoặc consequence nào desirable với decision-maker.
**Grammar & collocations:** `social utility function` — function; `specify a utility function` — specify.
**Examples:** `The utility function assigned extra weight to avoiding severe harm.` → Function utility assign weight thêm cho avoid harm nghiêm trọng.
**Liên kết tiếng Hàn:** `효용 함수`.

## 14. decision-theoretic analysis /dɪˌsɪʒən θiəˈrɛtɪk ənˈæləsɪs/
**Part of speech:** noun
**Core meaning (English):** analysis that evaluates actions by their uncertain consequences, values, and losses rather than by predictions alone.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** analysis evaluate action theo consequence uncertain, value và loss chứ không chỉ prediction.
**Grammar & collocations:** `formal decision-theoretic analysis` — analysis; `conduct decision-theoretic analysis` — conduct.
**Examples:** `Decision-theoretic analysis favored the policy with safer outcomes even though its average gain was smaller.` → Analysis decision-theoretic favor policy outcome safer dù average gain nhỏ hơn.
**Liên kết tiếng Hàn:** `의사결정 이론 분석`.

## 15. probability of benefit /prɑbəˈbɪləti əv ˈbɛnəfɪt/
**Part of speech:** noun
**Core meaning (English):** the estimated chance that an intervention will produce a meaningful favorable outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chance estimate intervention tạo favorable outcome meaningful.
**Grammar & collocations:** `high probability of benefit` — probability; `estimate the probability of benefit` — estimate.
**Examples:** `The probability of benefit was high for patients with the early warning sign.` → Probability benefit cao cho patient có early warning sign.
**Liên kết tiếng Hàn:** `이익 확률`.

## 16. probability of harm /prɑbəˈbɪləti əv hɑrm/
**Part of speech:** noun
**Core meaning (English):** the estimated chance that an intervention will cause a meaningful unfavorable outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chance estimate intervention cause unfavorable outcome meaningful.
**Grammar & collocations:** `low probability of harm` — probability; `balance the probability of harm` — balance.
**Examples:** `The probability of harm rose when the dosage was increased too quickly.` → Probability harm tăng khi dosage increase quá nhanh.
**Liên kết tiếng Hàn:** `위해 확률`.

## 17. treatment ranking /ˈtriːtmənt ˈræŋkɪŋ/
**Part of speech:** noun
**Core meaning (English):** an ordering of treatments according to estimated effects, benefits, risks, or decision values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** order treatment theo effect, benefit, risk hoặc decision value estimate.
**Grammar & collocations:** `uncertain treatment ranking` — ranking; `produce a treatment ranking` — produce.
**Examples:** `Treatment ranking changed when the analysis gave more weight to serious side effects.` → Ranking treatment đổi khi analysis give weight hơn cho side effect serious.
**Liên kết tiếng Hàn:** `치료 순위`.

## 18. Bayesian model averaging /ˈbeɪziən ˈmɑdəl ˈævərɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** a method that combines predictions or inferences from several models, weighting them by their posterior support.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** method combine prediction hoặc inference nhiều model, weight theo posterior support.
**Grammar & collocations:** `Bayesian model averaging prediction` — prediction; `use Bayesian model averaging` — use.
**Examples:** `Bayesian model averaging reduced dependence on one uncertain specification.` → Averaging model Bayesian giảm dependence vào một specification uncertain.
**Liên kết tiếng Hàn:** `베이지안 모델 평균화`.

## 19. model averaging weight /ˈmɑdəl ˈævərɪdʒɪŋ weɪt/
**Part of speech:** noun
**Core meaning (English):** the relative contribution assigned to a model when several models are combined.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** contribution tương đối assign cho model khi combine nhiều model.
**Grammar & collocations:** `posterior model averaging weight` — weight; `calculate a model averaging weight` — calculate.
**Examples:** `The model averaging weight favored specifications that predicted the validation data well.` → Weight averaging model favor specification predict validation data tốt.
**Liên kết tiếng Hàn:** `모델 평균 가중치`.

## 20. ensemble posterior /ɑnˈsɑmbəl pɑˈstɪriər/
**Part of speech:** noun
**Core meaning (English):** a combined posterior distribution formed from several plausible models or analyses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** posterior distribution combine từ nhiều model hoặc analysis plausible.
**Grammar & collocations:** `robust ensemble posterior` — posterior; `construct an ensemble posterior` — construct.
**Examples:** `The ensemble posterior showed that the direction of the policy effect was stable across models.` → Posterior ensemble show direction effect policy stable qua nhiều model.
**Liên kết tiếng Hàn:** `앙상블 사후분포`.

## Review in context

A **Bayesian causal effect** begins with a **prior treatment effect** and becomes a **posterior treatment effect** after evidence is added. A **Bayesian propensity score**, **Bayesian mediation**, and a **causal graph prior** can support a **potential outcome model** and a **treatment assignment model**. Their joint **causal posterior** may feed a **Bayesian g-formula** and a **Bayesian decision rule**. The analyst compares **posterior expected loss** under a stated **utility function** and performs a **decision-theoretic analysis**. A **probability of benefit** must be weighed against a **probability of harm**, which may change the **treatment ranking**. **Bayesian model averaging**, its **model averaging weight**, and an **ensemble posterior** show how conclusions depend on several plausible models.

**Bản dịch tiếng Việt:** **Bayesian causal effect** bắt đầu với **prior treatment effect** và thành **posterior treatment effect** sau khi thêm evidence. **Bayesian propensity score**, **Bayesian mediation** và **causal graph prior** có thể support **potential outcome model** cùng **treatment assignment model**. **Causal posterior** chung có thể feed vào **Bayesian g-formula** và **Bayesian decision rule**. Analyst compare **posterior expected loss** theo **utility function** đã nêu và thực hiện **decision-theoretic analysis**. **Probability of benefit** phải cân nhắc với **probability of harm**, có thể đổi **treatment ranking**. **Bayesian model averaging**, **model averaging weight** và **ensemble posterior** show conclusion phụ thuộc nhiều model plausible thế nào.
