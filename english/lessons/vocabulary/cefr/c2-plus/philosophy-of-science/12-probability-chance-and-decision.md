# C2+ Vocabulary — Probability, chance, and decision

This lesson examines what probabilities represent, how stochastic models behave, and how decision-makers act under uncertainty. The network is **objective chance → subjective probability → propensity interpretation → frequentist coverage → calibration surface → partial exchangeability → de Finetti representation → reference class → base-rate revision → likelihood weighting → probabilistic dependence → conditional independence → causal Bayes net → intervention distribution → stochastic process → ergodicity → local stationarity → random field → uncertainty characterization → scenario ensemble → extreme-tail exposure → power-law tail → rare-event simulation → information value assessment → decision under uncertainty**.

## 1. objective chance /əbˈdʒɛktɪv tʃæns/
**Part of speech:** noun
**Core meaning (English):** chance understood as a real feature of a process or world, not merely a measure of an observer's ignorance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** objective chance xem probability là property của process, không chỉ là belief của observer.
**Grammar & collocations:** `objective-chance interpretation` — interpretation; `assign a chance` — assign; `world-level randomness` — randomness.
**Examples:** `The model treated mutation as objective chance rather than an unrecorded deterministic cause.` → Model xem mutation là objective chance, không phải cause deterministic bị bỏ sót.
**Liên kết tiếng Hàn:** `객관적 우연` — objective chance.

## 2. subjective probability /səbˈdʒɛktɪv ˌprɑbəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** probability interpreted as a rational degree of belief held by an agent given available information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** subjective probability đo belief rational của agent, có thể update khi evidence mới đến.
**Grammar & collocations:** `subjective-probability judgment` — judgment; `assign a belief` — assign; `update a probability` — update.
**Examples:** `Her subjective probability of failure increased after the supplier missed two inspections.` → Subjective probability failure tăng sau hai inspection bị miss.
**Liên kết tiếng Hàn:** `주관적 확률` — subjective probability.

## 3. propensity interpretation /prəˈpɛnsəti ˌɪntərprəˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** an interpretation of probability as a stable tendency of a setup to produce outcomes under specified conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** propensity interpretation gắn probability với tendency của setup, như một machine có disposition tạo outcome.
**Grammar & collocations:** `propensity-interpretation account` — account; `tendency to produce` — tendency; `experimental setup` — setup.
**Examples:** `The propensity interpretation treated the device's failure probability as a property of the operating setup.` → Interpretation xem failure probability là property của setup.
**Liên kết tiếng Hàn:** `성향 해석` — propensity interpretation.

## 4. frequentist coverage /ˈfriːkwəntɪst ˈkʌvərɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the long-run proportion of constructed intervals or procedures that contain the target value under repeated sampling.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** frequentist coverage là performance dài hạn của procedure, không phải probability target nằm trong interval cụ thể.
**Grammar & collocations:** `frequentist-coverage guarantee` — guarantee; `cover a parameter` — cover; `repeated-sampling property` — property.
**Examples:** `The interval procedure met its frequentist coverage target in simulation.` → Procedure đạt frequentist coverage trong simulation.
**Liên kết tiếng Hàn:** `빈도주의적 포함률` — frequentist coverage.

## 5. calibration surface /ˌkælɪˈbreɪʃən ˈsɜrfɪs/
**Part of speech:** noun
**Core meaning (English):** a multidimensional display or function showing how predicted probabilities align with observed frequencies across conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** calibration surface mở rộng calibration curve cho nhiều covariate/condition cùng lúc.
**Grammar & collocations:** `calibration-surface plot` — plot; `align predictions with frequencies` — align; `conditional calibration` — calibration.
**Examples:** `The calibration surface revealed overconfident predictions in hot, dry conditions.` → Surface lộ prediction quá tự tin trong hot/dry condition.
**Liên kết tiếng Hàn:** `보정 표면` — calibration surface.

## 6. partial exchangeability /ˈpɑrʃəl ɪksˌtʃeɪndʒəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** invariance of a joint probability under rearrangements within specified groups, without requiring all observations to be interchangeable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** partial exchangeability cho phép đổi thứ tự trong group nhất định, nhưng không coi mọi observation giống nhau.
**Grammar & collocations:** `partial-exchangeability assumption` — assumption; `permute within groups` — permute; `grouped sequence` — sequence.
**Examples:** `The model assumed partial exchangeability within hospitals but not across countries.` → Model assume exchangeability trong hospital, không giữa country.
**Liên kết tiếng Hàn:** `부분 교환 가능성` — partial exchangeability.

## 7. de Finetti representation /də fɪˈnɛti ˌrɛprɪzɛnˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a representation of an exchangeable sequence as conditionally independent given an underlying latent probability distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** de Finetti representation giải thích exchangeability bằng latent distribution đứng sau sequence.
**Grammar & collocations:** `de-Finetti representation theorem` — theorem; `represent an exchangeable sequence` — represent; `latent distribution` — distribution.
**Examples:** `The de Finetti representation linked repeated judgments to a shared latent tendency.` → Representation nối repeated judgment với latent tendency chung.
**Liên kết tiếng Hàn:** `드 피네티 표현` — de Finetti representation.

## 8. reference class /ˈrɛfərəns klæs/
**Part of speech:** noun
**Core meaning (English):** a set of comparable cases used to estimate the probability or expected behavior of a particular case.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reference class chọn “những case tương tự” để suy probability cho case hiện tại.
**Grammar & collocations:** `reference-class problem` — problem; `choose a reference class` — choose; `comparable cases` — cases.
**Examples:** `The forecast changed when the analyst used a reference class of comparable infrastructure projects.` → Forecast đổi khi dùng class của project tương tự.
**Liên kết tiếng Hàn:** `참조 집합` — reference class.

## 9. base-rate revision /ˈbeɪs reɪt rɪˈvɪʒən/
**Part of speech:** noun
**Core meaning (English):** updating an initial prevalence or background frequency in response to new evidence about the relevant population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** base-rate revision cập nhật prior prevalence khi population/evidence mới thay đổi.
**Grammar & collocations:** `base-rate revision` — revision; `revise a background frequency` — revise; `population prevalence` — prevalence.
**Examples:** `Base-rate revision lowered the expected number of false alarms in the screened population.` → Revision làm expected false alarm giảm.
**Liên kết tiếng Hàn:** `기저율 수정` — base-rate revision.

## 10. likelihood weighting /ˈlaɪkliˌhʊd ˈweɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** assigning more influence to hypotheses, particles, or cases that better predict the observed evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** likelihood weighting cho evidence-compatible hypothesis/case weight lớn hơn.
**Grammar & collocations:** `likelihood-weighting scheme` — scheme; `weight by the likelihood` — weight; `evidence-compatible case` — case.
**Examples:** `Likelihood weighting concentrated the simulation on trajectories consistent with the sensor record.` → Weighting tập trung simulation vào trajectory hợp sensor record.
**Liên kết tiếng Hàn:** `우도 가중` — likelihood weighting.

## 11. probabilistic dependence /ˌprɑbəbɪˈlɪstɪk dɪˈpɛndəns/
**Part of speech:** noun
**Core meaning (English):** a condition in which knowing one variable changes the probability distribution of another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** probabilistic dependence nghĩa knowledge của A làm distribution B đổi, dù chưa nói causal.
**Grammar & collocations:** `probabilistic-dependence structure` — structure; `depend conditionally` — depend; `joint distribution` — distribution.
**Examples:** `Probabilistic dependence between rainfall and reservoir level persisted after seasonal adjustment.` → Dependence vẫn còn sau seasonal adjustment.
**Liên kết tiếng Hàn:** `확률적 의존` — probabilistic dependence.

## 12. conditional independence /kənˈdɪʃənəl ˌɪndɪˈpɛndəns/
**Part of speech:** noun
**Core meaning (English):** a relation in which two variables become independent once specified background variables are known.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** conditional independence là independence sau khi condition đúng variable.
**Grammar & collocations:** `conditional-independence test` — test; `condition on a variable` — condition; `independence relation` — relation.
**Examples:** `The graph predicted conditional independence between the outcomes after adjusting for exposure.` → Graph predict independence sau adjust exposure.
**Liên kết tiếng Hàn:** `조건부 독립` — conditional independence.

## 13. causal Bayes net /ˈkɔzəl beɪz nɛt/
**Part of speech:** noun
**Core meaning (English):** a directed graphical model that combines causal structure with probability distributions for variables.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** causal Bayes net nối arrow causal với conditional probability distribution.
**Grammar & collocations:** `causal-Bayes-net intervention` — intervention; `factor a distribution` — factor; `directed graph` — graph.
**Examples:** `The causal Bayes net predicted how removing the pollutant would change downstream exposure.` → Net predict effect của removing pollutant.
**Liên kết tiếng Hàn:** `인과 베이즈 네트워크` — causal Bayes net.

## 14. intervention distribution /ˌɪntərˈvɛnʃən ˌdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** the probability distribution generated when a variable is set or manipulated rather than left to its ordinary causes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** intervention distribution là distribution dưới do-operator/action, không phải observational distribution.
**Grammar & collocations:** `intervention-distribution estimate` — estimate; `set a variable` — set; `post-intervention law` — law.
**Examples:** `The intervention distribution differed sharply from the observed distribution after the policy was imposed.` → Distribution đổi mạnh sau policy.
**Liên kết tiếng Hàn:** `개입 분포` — intervention distribution.

## 15. stochastic process /stəˈkæstɪk ˈprɑsɛs/
**Part of speech:** noun
**Core meaning (English):** a collection of random variables indexed by time, space, or another ordered parameter.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stochastic process mô tả random evolution theo time/space.
**Grammar & collocations:** `stochastic-process model` — model; `evolve over time` — evolve; `sample path` — path.
**Examples:** `The queue length was modeled as a stochastic process with random arrivals and service times.` → Queue length là stochastic process.
**Liên kết tiếng Hàn:** `확률 과정` — stochastic process.

## 16. ergodicity /ˌɜrɡəˈdɪsəti/
**Part of speech:** noun
**Core meaning (English):** a property under which long-run averages along one sufficiently representative trajectory match appropriate ensemble averages.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ergodicity cho phép dùng long-run của một trajectory để suy ensemble behavior.
**Grammar & collocations:** `ergodicity assumption` — assumption; `ergodic process` — process; `long-run average` — average.
**Examples:** `The climate model's ergodicity assumption was questionable over a rapidly changing baseline.` → Assumption ergodicity đáng ngờ khi baseline đổi nhanh.
**Liên kết tiếng Hàn:** `에르고딕성` — ergodicity.

## 17. local stationarity /ˈloʊkəl ˌsteɪʃəˈnɛrəti/
**Part of speech:** noun
**Core meaning (English):** approximate stability of a stochastic process within a limited time or spatial window even when its global behavior changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** local stationarity cho phép process ổn định trong window nhỏ dù không stationary toàn cục.
**Grammar & collocations:** `local-stationarity approximation` — approximation; `estimate within a window` — estimate; `time-varying process` — process.
**Examples:** `Local stationarity made short-window traffic forecasts reasonable despite long-term growth.` → Local stationarity giúp forecast ngắn hạn hợp lý.
**Liên kết tiếng Hàn:** `국소 정상성` — local stationarity.

## 18. random field /ˈrændəm fiːld/
**Part of speech:** noun
**Core meaning (English):** a collection of random variables indexed over a spatial or multidimensional domain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** random field là random variable trải trên map/space, với dependence theo vị trí.
**Grammar & collocations:** `spatial random field` — field; `model spatial dependence` — model; `field realization` — realization.
**Examples:** `The soil-moisture map was modeled as a spatial random field.` → Soil-moisture map là spatial random field.
**Liên kết tiếng Hàn:** `확률장` — random field.

## 19. uncertainty characterization /ʌnˈsɜrtənti ˌkærəktərɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** systematic description of the sources, magnitude, structure, and consequences of uncertainty in an analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** uncertainty characterization không chỉ cho một ± number; nó mô tả source, structure và consequence.
**Grammar & collocations:** `uncertainty-characterization report` — report; `characterize uncertainty` — characterize; `uncertainty source` — source.
**Examples:** `The uncertainty characterization separated model uncertainty from measurement uncertainty.` → Report tách model uncertainty khỏi measurement uncertainty.
**Liên kết tiếng Hàn:** `불확실성 특성화` — uncertainty characterization.

## 20. scenario ensemble /səˈnɛrioʊ ɑnˈsɑmbəl/
**Part of speech:** noun
**Core meaning (English):** a collection of modeled scenarios used together to represent uncertainty about possible futures or assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scenario ensemble không dự đoán một future duy nhất; nó giữ nhiều scenario plausible.
**Grammar & collocations:** `scenario-ensemble analysis` — analysis; `run an ensemble` — run; `plausible future` — future.
**Examples:** `The scenario ensemble showed that water stress remained likely under three policy pathways.` → Ensemble cho thấy water stress likely ở ba pathway.
**Liên kết tiếng Hàn:** `시나리오 앙상블` — scenario ensemble.

## 21. extreme-tail exposure /ɪkˈstriːm teɪl ɪkˈspoʊʒər/
**Part of speech:** noun
**Core meaning (English):** exposure to unusually rare and severe values in the tail of a risk distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** extreme-tail exposure tập trung vào rare severe event, không chỉ average risk.
**Grammar & collocations:** `extreme-tail exposure estimate` — estimate; `quantify tail exposure` — quantify; `rare severe event` — event.
**Examples:** `The safety plan addressed extreme-tail exposure from a one-in-a-century flood.` → Safety plan xử lý extreme-tail exposure từ flood hiếm.
**Liên kết tiếng Hàn:** `극단 꼬리 노출` — extreme-tail exposure.

## 22. power-law tail /ˈpaʊər lɔ teɪl/
**Part of speech:** noun
**Core meaning (English):** a distribution tail in which event frequency declines according to a power relationship rather than an exponential one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** power-law tail giảm chậm, nên extreme event có thể thường hơn exponential model nghĩ.
**Grammar & collocations:** `power-law tail behavior` — behavior; `fit a tail` — fit; `heavy-tail implication` — implication.
**Examples:** `A power-law tail implied that rare network failures could be more common than a normal model suggested.` → Power-law tail imply failure hiếm nhưng không quá hiếm.
**Liên kết tiếng Hàn:** `멱법칙 꼬리` — power-law tail.

## 23. rare-event simulation /rɛr ɪˈvɛnt ˌsɪmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** simulation designed to estimate the probability or consequences of events that ordinary sampling would almost never observe.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rare-event simulation oversample/accelerate event hiếm để estimate probability và consequence.
**Grammar & collocations:** `rare-event simulation study` — study; `simulate a low-probability event` — simulate; `accelerated sampling` — sampling.
**Examples:** `Rare-event simulation estimated cascading failures that had not appeared in the historical record.` → Simulation estimate cascading failure chưa có trong history.
**Liên kết tiếng Hàn:** `희귀 사건 시뮬레이션` — rare-event simulation.

## 24. information value assessment /ˌɪnfərˈmeɪʃən ˈvælju əˈsɛsmənt/
**Part of speech:** noun
**Core meaning (English):** evaluation of how much a possible measurement, study, or signal could improve a decision by reducing relevant uncertainty.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** information value assessment hỏi data mới có đáng cost vì giúp decision tốt hơn bao nhiêu.
**Grammar & collocations:** `information-value assessment` — assessment; `value additional information` — value; `reduce decision uncertainty` — reduce.
**Examples:** `The information value assessment favored an inexpensive survey before the large trial.` → Assessment favor survey rẻ trước trial lớn.
**Liên kết tiếng Hàn:** `정보 가치 평가` — information value assessment.

## 25. decision under uncertainty /dɪˈsɪʒən ʌndər ʌnˈsɜrtənti/
**Part of speech:** noun
**Core meaning (English):** choice among actions when outcomes, probabilities, or consequences are not fully known.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** decision under uncertainty là chọn action dù evidence incomplete và outcome uncertain.
**Grammar & collocations:** `decision-under-uncertainty framework` — framework; `choose under uncertainty` — choose; `uncertain consequence` — consequence.
**Examples:** `Decision under uncertainty required comparing reversible and irreversible options.` → Decision under uncertainty cần compare option reversible và irreversible.
**Liên kết tiếng Hàn:** `불확실성 하의 의사결정` — decision under uncertainty.

## Review in context

**Objective chance**, **subjective probability**, and a **propensity interpretation** offer different accounts of probability. **Frequentist coverage** evaluates repeated performance, while a **calibration surface** compares predictions across conditions. **Partial exchangeability** and a **de Finetti representation** describe structured repetition; a **reference class**, **base-rate revision**, and **likelihood weighting** shape practical inference. **Probabilistic dependence**, **conditional independence**, a **causal Bayes net**, and an **intervention distribution** connect probability with causal structure. A **stochastic process** may have **ergodicity**, **local stationarity**, or a spatial **random field**. Good **uncertainty characterization** uses a **scenario ensemble** and examines **extreme-tail exposure**, a **power-law tail**, and **rare-event simulation**. Finally, an **information value assessment** supports a **decision under uncertainty**.

**Bản dịch tiếng Việt:**

**Objective chance**, **subjective probability** và **propensity interpretation** đưa ra các cách hiểu khác nhau về probability. **Frequentist coverage** đánh giá performance lặp, còn **calibration surface** compare prediction giữa condition. **Partial exchangeability** và **de Finetti representation** mô tả repetition có structure; **reference class**, **base-rate revision** và **likelihood weighting** định hình inference thực tế. **Probabilistic dependence**, **conditional independence**, **causal Bayes net** và **intervention distribution** nối probability với causal structure. **Stochastic process** có thể có **ergodicity**, **local stationarity** hoặc **random field** spatial. **Uncertainty characterization** tốt dùng **scenario ensemble** và xem **extreme-tail exposure**, **power-law tail** và **rare-event simulation**. Cuối cùng, **information value assessment** hỗ trợ **decision under uncertainty**.
