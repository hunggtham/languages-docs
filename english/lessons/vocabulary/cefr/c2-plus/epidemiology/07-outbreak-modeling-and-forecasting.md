# C2+ Vocabulary — Outbreak modeling and forecasting

This lesson follows how analysts turn incomplete surveillance into projections, compare model assumptions, and communicate uncertainty. The network is **nowcasting → ensemble forecast → scenario projection → prediction calibration band → forecast lead time → leading indicator → lagged association → model structural uncertainty → parameter uncertainty → structural robustness check → ensemble weighting → posterior predictive diagnostic → data assimilation → compartmental model → individual-based transmission model → cohort microsimulation → contact matrix → mobility proxy → hospitalization forecast → excess-death baseline deviation → forecast skill → forecast calibration drift → model transportability → credible uncertainty band → forecast communication**.

## 1. nowcasting /ˈnaʊˌkæstɪŋ/
**Part of speech:** noun
**Core meaning (English):** estimating the current level of an event while recent reports are incomplete or delayed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nowcasting cố gắng nhìn “hiện tại thật” dù data mới nhất chưa đủ.
**Grammar & collocations:** `nowcasting model` — model; `nowcast current incidence` — nowcast; `reporting delay` — delay.
**Examples:** `Nowcasting adjusted the apparent decline because many recent cases had not yet been reported.` → Hiện tại cần sửa theo lag.
**Liên kết tiếng Hàn:** `현재 추정` — nowcasting.

## 2. ensemble forecast /ɛnˈsɑmbəl ˈfɔrˌkæst/
**Part of speech:** noun
**Core meaning (English):** a forecast combined from multiple models, methods, or assumptions rather than relying on one model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ensemble forecast ghép nhiều model để giảm phụ thuộc vào một giả định.
**Grammar & collocations:** `ensemble-forecast hub` — hub; `combine forecasts` — combine; `model diversity` — diversity.
**Examples:** `The ensemble forecast was more stable than any individual model during the holiday period.` → Nhiều model giúp giảm extreme error.
**Liên kết tiếng Hàn:** `앙상블 예측` — ensemble forecast.

## 3. scenario projection /sɪˈnɛrioʊ prəˈdʒɛkʃən/
**Part of speech:** noun
**Core meaning (English):** a conditional estimate of future outcomes under a specified set of assumptions or policy choices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scenario projection nói “nếu condition này xảy ra thì outcome có thể thế nào”, không phải prediction chắc chắn.
**Grammar & collocations:** `scenario-projection range` — range; `project future cases` — project; `assumption set` — set.
**Examples:** `The scenario projection compared continued masking with a rapid return to baseline behavior.` → Projection phụ thuộc assumption.
**Liên kết tiếng Hàn:** `시나리오 전망` — scenario projection.

## 4. prediction calibration band /prɪˈdɪkʃən ˌkælɪˈbreɪʃən bænd/
**Part of speech:** noun
**Core meaning (English):** a range around predictions that is designed to contain the stated proportion of future observations over repeated use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prediction calibration band cho biết interval của model có “đúng tỷ lệ” trong long run không.
**Grammar & collocations:** `prediction-calibration band` — band; `calibrate a forecast range` — calibrate; `coverage rate` — rate.
**Examples:** `The prediction calibration band contained fewer hospitalizations than expected, signaling overconfidence.` → Band hẹp quá thì risk.
**Liên kết tiếng Hàn:** `예측 보정 구간` — prediction calibration band.

## 5. forecast lead time /ˈfɔrˌkæst liːd taɪm/
**Part of speech:** noun
**Core meaning (English):** the amount of time between a forecast and the future period it describes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** forecast lead time là “báo trước bao lâu” để system kịp chuẩn bị.
**Grammar & collocations:** `forecast-lead-time target` — target; `extend lead time` — extend; `operational window` — window.
**Examples:** `A two-week forecast lead time allowed the hospital to schedule extra staff.` → Lead time có giá trị vận hành.
**Liên kết tiếng Hàn:** `예측 선행 시간` — forecast lead time.

## 6. leading indicator /ˈliːdɪŋ ˈɪndəˌkeɪtər/
**Part of speech:** noun
**Core meaning (English):** a measure that tends to change before the main outcome of interest changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** leading indicator đi trước outcome nên dùng để chuẩn bị sớm.
**Grammar & collocations:** `leading-indicator series` — series; `track a leading indicator` — track; `early signal` — signal.
**Examples:** `Emergency-department visits acted as a leading indicator for later admissions.` → Service data đi trước hospital burden.
**Liên kết tiếng Hàn:** `선행 지표` — leading indicator.

## 7. lagged association /læɡd əˌsoʊsiˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a relationship in which a change in one variable is associated with a later change in another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lagged association đặt time gap giữa signal và outcome.
**Grammar & collocations:** `lagged association` — association; `estimate a time lag` — estimate; `delayed effect` — effect.
**Examples:** `The analysis found a lagged association between mobility and hospital admissions.` → Mobility change đến trước admission.
**Liên kết tiếng Hàn:** `시차 연관성` — lagged association.

## 8. model structural uncertainty /ˈmɑdəl ˈstrʌktʃərəl ʌnˈsɜrtənti/
**Part of speech:** noun
**Core meaning (English):** uncertainty caused by choosing different model structures, mechanisms, or relationships to represent the same system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model structural uncertainty đến từ “vẽ system” theo architecture khác nhau.
**Grammar & collocations:** `model-structural uncertainty` — uncertainty; `compare model structures` — compare; `mechanism assumption` — assumption.
**Examples:** `Model structural uncertainty dominated the estimate because reinfection was represented differently across models.` → Structure có thể quan trọng hơn parameter.
**Liên kết tiếng Hàn:** `모형 구조 불확실성` — model structural uncertainty.

## 9. parameter uncertainty /pəˈræmətər ʌnˈsɜrtənti/
**Part of speech:** noun
**Core meaning (English):** uncertainty about the numerical values of parameters used inside a chosen model structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parameter uncertainty là chưa biết con số đúng trong một structure đã chọn.
**Grammar & collocations:** `parameter-uncertainty interval` — interval; `estimate a parameter` — estimate; `prior information` — information.
**Examples:** `Parameter uncertainty widened the projected range when the generation interval was poorly measured.` → Parameter chưa chắc làm range rộng.
**Liên kết tiếng Hàn:** `모수 불확실성` — parameter uncertainty.

## 10. structural robustness check /ˈstrʌktʃərəl roʊˈbʌtnəs tʃɛk/
**Part of speech:** noun
**Core meaning (English):** a test of whether a conclusion remains similar when plausible model structures or assumptions are changed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** structural robustness check hỏi conclusion có sống sót khi đổi cách model system không.
**Grammar & collocations:** `structural-robustness check` — check; `stress-test assumptions` — stress-test; `robust conclusion` — conclusion.
**Examples:** `A structural robustness check showed that the intervention ranking changed under a different immunity model.` → Ranking phụ thuộc structure.
**Liên kết tiếng Hàn:** `구조적 견고성 점검` — structural robustness check.

## 11. ensemble weighting /ɛnˈsɑmbəl ˈweɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** the method used to assign different influence or weight to component forecasts in a combined prediction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ensemble weighting quyết định model nào được “nghe” nhiều hơn trong combination.
**Grammar & collocations:** `ensemble-weighting scheme` — scheme; `weight component forecasts` — weight; `performance-based weight` — weight.
**Examples:** `Ensemble weighting favored models with better recent calibration rather than equal averaging.` → Weight nên phản ánh performance.
**Liên kết tiếng Hàn:** `앙상블 가중` — ensemble weighting.

## 12. posterior predictive diagnostic /pɑˈstɪriər prɪˈdɪktɪv ˌdaɪəɡˈnɑstɪk/
**Part of speech:** noun
**Core meaning (English):** a check comparing data simulated from a fitted model with the patterns observed in real data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** posterior predictive diagnostic hỏi model generate được data giống pattern thật không.
**Grammar & collocations:** `posterior-predictive diagnostic` — diagnostic; `simulate replicated data` — simulate; `model fit` — fit.
**Examples:** `The posterior predictive diagnostic showed that the model missed the sharp weekend reporting cycle.` → Fit cần nhìn pattern, không chỉ score.
**Liên kết tiếng Hàn:** `사후 예측 진단` — posterior predictive diagnostic.

## 13. data assimilation /ˈdeɪtə əˌsɪməˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of updating a dynamic model with new observations as they arrive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data assimilation đưa data mới vào model đang chạy để state estimate đổi theo.
**Grammar & collocations:** `data-assimilation step` — step; `assimilate incoming observations` — assimilate; `state estimate` — estimate.
**Examples:** `Data assimilation updated the transmission estimate after a large batch of tests was reported.` → Model học từ data mới.
**Liên kết tiếng Hàn:** `자료 동화` — data assimilation.

## 14. compartmental model /ˌkɑmpɑrtˈmɛntəl ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that divides a population into states such as susceptible, infectious, and recovered and represents movement between them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** compartmental model chia population vào các “ngăn” và mô tả flow giữa ngăn.
**Grammar & collocations:** `compartmental-model framework` — framework; `move between compartments` — move; `susceptible compartment` — compartment.
**Examples:** `The compartmental model added a vaccinated state to represent partial protection.` → Thêm compartment để phản ánh reality.
**Liên kết tiếng Hàn:** `구획 모형` — compartmental model.

## 15. individual-based transmission model /ˌɪndəˈvɪdʒuəl beɪst trænzˈmɪʃən ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that simulates people or entities separately, including their contacts, characteristics, and possible infection events.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** individual-based transmission model mô phỏng từng người thay vì chỉ average population.
**Grammar & collocations:** `individual-based transmission model` — model; `simulate individual contacts` — simulate; `agent attribute` — attribute.
**Examples:** `The individual-based transmission model represented school schedules and household contacts explicitly.` → Chi tiết hơn nhưng cần nhiều assumption.
**Liên kết tiếng Hàn:** `개인 기반 전파 모형` — individual-based transmission model.

## 16. cohort microsimulation /ˈkoʊˌhɔrt ˌmaɪkroʊˌsɪmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** simulation of individual life histories within defined cohorts to estimate outcomes under alternative risks or interventions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cohort microsimulation theo từng “life path” của individuals trong cohort.
**Grammar & collocations:** `cohort-microsimulation model` — model; `simulate life histories` — simulate; `cohort outcome` — outcome.
**Examples:** `Cohort microsimulation estimated long-term complications after different vaccination strategies.` → Simulation kéo dài beyond observed data.
**Liên kết tiếng Hàn:** `코호트 미시 시뮬레이션` — cohort microsimulation.

## 17. contact matrix /ˈkɑntækt ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a table describing the frequency or intensity of contact between groups such as ages, settings, or regions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** contact matrix là bảng “ai gặp ai bao nhiêu” để model transmission theo group.
**Grammar & collocations:** `contact-matrix estimate` — estimate; `construct a contact matrix` — construct; `age-specific contact` — contact.
**Examples:** `The contact matrix was revised after schools changed their schedules.` → Behavior change làm matrix đổi.
**Liên kết tiếng Hàn:** `접촉 행렬` — contact matrix.

## 18. mobility proxy /moʊˈbɪləti ˈprɑksi/
**Part of speech:** noun
**Core meaning (English):** an indirect measure used to represent movement or contact opportunity when direct contact data are unavailable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mobility proxy là signal thay thế cho direct contact, ví dụ travel hoặc time away from home.
**Grammar & collocations:** `mobility-proxy variable` — variable; `use mobility as a proxy` — use; `movement pattern` — pattern.
**Examples:** `The model used transit volume as a mobility proxy for workplace mixing.` → Proxy hữu ích nhưng không identical với contact.
**Liên kết tiếng Hàn:** `이동성 대리 지표` — mobility proxy.

## 19. hospitalization forecast /ˌhɑspɪtələˈzeɪʃən ˈfɔrˌkæst/
**Part of speech:** noun
**Core meaning (English):** a prediction of future hospital admissions or occupancy under specified assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hospitalization forecast chuyển transmission estimate thành planning cho beds và staff.
**Grammar & collocations:** `hospitalization-forecast update` — update; `forecast admissions` — forecast; `bed occupancy` — occupancy.
**Examples:** `The hospitalization forecast prompted the hospital to postpone nonurgent procedures.` → Forecast hỗ trợ operational decision.
**Liên kết tiếng Hàn:** `입원 예측` — hospitalization forecast.

## 20. excess-death baseline deviation /ɪkˈsɛs dɛθ ˈbeɪsˌlaɪn ˌdiːviˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the difference between observed deaths and the number expected from a defined historical baseline.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** excess-death baseline deviation đo death vượt mức expected, không cần biết từng cause.
**Grammar & collocations:** `excess-death baseline deviation` — deviation; `estimate expected deaths` — estimate; `mortality baseline` — baseline.
**Examples:** `The excess-death baseline deviation remained high after reported cases had fallen.` → Death signal có thể trễ và rộng hơn case data.
**Liên kết tiếng Hàn:** `초과 사망 기준선 편차` — excess-death baseline deviation.

## 21. forecast skill /ˈfɔrˌkæst skɪl/
**Part of speech:** noun
**Core meaning (English):** the demonstrated ability of a forecast to outperform a defined baseline or naive prediction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** forecast skill hỏi model có thật sự tốt hơn cách đoán đơn giản không.
**Grammar & collocations:** `forecast-skill score` — score; `evaluate forecast skill` — evaluate; `baseline forecast` — forecast.
**Examples:** `Forecast skill was high at one week but disappeared at the six-week horizon.` → Skill phụ thuộc horizon.
**Liên kết tiếng Hàn:** `예측 능력` — forecast skill.

## 22. forecast calibration drift /ˈfɔrˌkæst ˌkælɪˈbreɪʃən drɪft/
**Part of speech:** noun
**Core meaning (English):** gradual deterioration in the relationship between outbreak forecast probabilities or ranges and later observed outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** forecast calibration drift xảy ra khi world đổi nhưng forecast vẫn dùng mapping cũ.
**Grammar & collocations:** `forecast-calibration-drift monitor` — monitor; `detect forecast calibration drift` — detect; `recalibrate predictions` — recalibrate.
**Examples:** `Forecast calibration drift appeared after a new variant changed the hospitalization pattern.` → Model cần update khi system đổi.
**Liên kết tiếng Hàn:** `예측 보정 드리프트` — forecast calibration drift.

## 23. model transportability /ˈmɑdəl ˌtrænspɔrtəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the extent to which a model or its estimates remain useful when applied to a different population, place, or time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model transportability hỏi model có đi được sang context mới không.
**Grammar & collocations:** `model-transportability assessment` — assessment; `transport a model` — transport; `target population` — population.
**Examples:** `Model transportability was limited because the target region had different age mixing and testing access.` → Context khác làm estimate đổi.
**Liên kết tiếng Hàn:** `모형 전이 가능성` — model transportability.

## 24. credible uncertainty band /ˈkrɛdəbəl ʌnˈsɜrtənti bænd/
**Part of speech:** noun
**Core meaning (English):** a Bayesian interval containing a stated posterior probability for an unknown quantity, given the model and data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** credible uncertainty band nói probability của parameter nằm trong range theo posterior.
**Grammar & collocations:** `credible-uncertainty band` — band; `report a posterior interval` — report; `posterior probability` — probability.
**Examples:** `The credible uncertainty band widened when the data source became less complete.` → Data ít thì posterior range rộng.
**Liên kết tiếng Hàn:** `신뢰도 불확실성 구간` — credible uncertainty band.

## 25. forecast communication /ˈfɔrˌkæst kəˌmjuːnəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the practice of explaining projections, assumptions, uncertainty, and appropriate use to decision-makers and the public.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** forecast communication giúp người đọc hiểu projection là conditional, không phải prophecy.
**Grammar & collocations:** `forecast-communication strategy` — strategy; `communicate uncertainty` — communicate; `decision-use guidance` — guidance.
**Examples:** `Forecast communication explained why two plausible scenarios could produce different staffing needs.` → Communication bảo vệ khỏi đọc sai certainty.
**Liên kết tiếng Hàn:** `예측 소통` — forecast communication.

## Review in context — Part 1

**Nowcasting** estimates the present while an **ensemble forecast** and **scenario projection** look ahead. A **prediction calibration band** should reflect its observed coverage, and **forecast lead time** determines whether a warning can change operations. A **leading indicator** may have a **lagged association** with admissions. **Model structural uncertainty** differs from **parameter uncertainty**, so a **structural robustness check** is needed. **Ensemble weighting** and a **posterior predictive diagnostic** help determine whether combined forecasts reproduce real patterns.

**Bản dịch tiếng Việt — Phần 1:**

**Nowcasting** ước tính hiện tại trong khi **ensemble forecast** và **scenario projection** nhìn về tương lai. **Prediction calibration band** cần phản ánh coverage thật, còn **forecast lead time** quyết định warning có đủ thời gian đổi operation không. **Leading indicator** có thể có **lagged association** với admission. **Model structural uncertainty** khác **parameter uncertainty**, nên cần **structural robustness check**. **Ensemble weighting** và **posterior predictive diagnostic** giúp đánh giá forecast combination có tái hiện pattern thật không.

## Review in context — Part 2

With **data assimilation**, a **compartmental model**, an **individual-based transmission model**, or a **cohort microsimulation** can be updated as evidence arrives. A **contact matrix** and **mobility proxy** represent changing contact opportunities. A **hospitalization forecast** supports planning, while an **excess-death baseline deviation** provides another outcome signal. Analysts evaluate **forecast skill**, watch for **forecast calibration drift**, and test **model transportability**. A **credible uncertainty band** belongs in responsible **forecast communication**.

**Bản dịch tiếng Việt — Phần 2:**

Với **data assimilation**, **compartmental model**, **individual-based transmission model** hoặc **cohort microsimulation** có thể được cập nhật khi evidence đến. **Contact matrix** và **mobility proxy** đại diện cho contact opportunity đang đổi. **Hospitalization forecast** hỗ trợ planning, còn **excess-death baseline deviation** cung cấp signal outcome khác. Analyst đánh giá **forecast skill**, theo dõi **forecast calibration drift** và kiểm tra **model transportability**. **Credible uncertainty band** phải xuất hiện trong **forecast communication** có trách nhiệm.
