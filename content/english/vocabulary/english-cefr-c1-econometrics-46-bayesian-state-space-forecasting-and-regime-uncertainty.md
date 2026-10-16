# C1 Vocabulary 46 — Bayesian state-space forecasting and regime uncertainty

This lesson follows how forecasters represent hidden conditions, changing regimes, and uncertainty in real-time predictions.

Flow: **Bayesian state space → latent regime → regime probability → posterior regime → state transition matrix → latent factor → nowcast distribution → forecast density → missing-at-end → news decomposition → shock decomposition → density combination → forecast pooling → predictive score → probabilistic calibration → forecast origin → state-space filter → smoothed state → Kalman update → latent-state probability**.

## 1. Bayesian state space /ˈbeɪziən steɪt speɪs/
**Part of speech:** noun
**Core meaning (English):** a probabilistic model in which hidden states evolve over time and observed data provide noisy information about them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model probability nơi hidden state evolve theo time và observed data provide information noisy.
**Grammar & collocations:** `Bayesian state-space model` — model; `fit a Bayesian state space` — fit.
**Examples:** `The Bayesian state space treated underlying demand as a changing but partly hidden process.` → State space Bayesian xem demand underlying là process đổi nhưng partly hidden.
**Liên kết tiếng Hàn:** `베이지안 상태 공간`.

## 2. latent regime /ˈleɪtənt rəˈʒiːm/
**Part of speech:** noun
**Core meaning (English):** an unobserved period or condition, such as expansion or contraction, that changes how a system behaves.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** period hoặc condition unobserved như expansion hoặc contraction làm system behavior đổi.
**Grammar & collocations:** `persistent latent regime` — regime; `infer a latent regime` — infer.
**Examples:** `The latent regime shifted after the supply disruption.` → Regime latent shift sau supply disruption.
**Liên kết tiếng Hàn:** `잠재 국면`.

## 3. regime probability /rəˈʒiːm ˌprɑbəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the estimated probability that a system is currently in a particular hidden regime.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** probability estimate system hiện đang ở hidden regime cụ thể.
**Grammar & collocations:** `high regime probability` — probability; `update regime probabilities` — update.
**Examples:** `The regime probability for recession rose sharply after the employment release.` → Probability regime của recession tăng mạnh sau employment release.
**Liên kết tiếng Hàn:** `국면 확률`.

## 4. posterior regime /pɑˈstɪriər rəˈʒiːm/
**Part of speech:** noun
**Core meaning (English):** a regime assessment after observed evidence has been combined with the model's prior structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** assessment regime sau combine evidence observe với prior structure của model.
**Grammar & collocations:** `most likely posterior regime` — regime; `classify the posterior regime` — classify.
**Examples:** `The posterior regime indicated a gradual slowdown rather than an abrupt collapse.` → Regime posterior indicate slowdown gradual chứ không collapse abrupt.
**Liên kết tiếng Hàn:** `사후 국면`.

## 5. state transition matrix /steɪt trænˈzɪʃən ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a table of probabilities describing how a hidden state moves from one category to another over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** table probability describe hidden state move từ category này sang category khác theo time.
**Grammar & collocations:** `estimated state transition matrix` — matrix; `specify a state transition matrix` — specify.
**Examples:** `The state transition matrix allowed short recessions but made long booms more persistent.` → Matrix transition state cho recession ngắn nhưng boom dài persistent hơn.
**Liên kết tiếng Hàn:** `상태 전이 행렬`.

## 6. latent factor /ˈleɪtənt ˈfæktər/
**Part of speech:** noun
**Core meaning (English):** an unobserved common influence used to explain movements shared by several measured variables.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** influence common unobserved explain movement chung của nhiều variable measured.
**Grammar & collocations:** `common latent factor` — factor; `extract a latent factor` — extract.
**Examples:** `A latent factor summarized information shared by prices, hiring, and production.` → Factor latent summarize information chung của price, hiring và production.
**Liên kết tiếng Hàn:** `잠재 요인`.

## 7. nowcast distribution /ˈnaʊˌkæst ˌdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** a probability distribution for the current or very recent value of an outcome before all official data are available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** distribution probability cho value hiện tại hoặc recent trước khi official data đầy đủ.
**Grammar & collocations:** `wide nowcast distribution` — distribution; `update a nowcast distribution` — update.
**Examples:** `The nowcast distribution narrowed after the weekly sales report arrived.` → Distribution nowcast narrow sau weekly sales report arrive.
**Liên kết tiếng Hàn:** `현재 추정 분포`.

## 8. forecast density /ˈfɔrˌkæst ˈdɛnsəti/
**Part of speech:** noun
**Core meaning (English):** a probability distribution describing the possible future values of a forecasted outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** distribution probability describe future value possible của outcome forecast.
**Grammar & collocations:** `predictive forecast density` — density; `evaluate forecast density` — evaluate.
**Examples:** `The forecast density placed most probability on moderate inflation.` → Density forecast place most probability vào inflation moderate.
**Liên kết tiếng Hàn:** `예측 밀도`.

## 9. missing-at-end /ˈmɪsɪŋ æt ɛnd/
**Part of speech:** adjective
**Core meaning (English):** describing observations that are unavailable only at the newest end of a time series.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** observation unavailable chỉ ở end mới nhất của time series.
**Grammar & collocations:** `missing-at-end problem` — problem; `handle missing-at-end data` — handle.
**Examples:** `The model was designed for missing-at-end data arriving with a reporting delay.` → Model design cho data missing-at-end đến với reporting delay.
**Liên kết tiếng Hàn:** `말단 결측`.

## 10. news decomposition /nuːz ˌdiːkɑmpəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** an analysis that separates a forecast revision into contributions from newly received information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** analysis tách forecast revision thành contribution của information mới receive.
**Grammar & collocations:** `real-time news decomposition` — decomposition; `perform a news decomposition` — perform.
**Examples:** `News decomposition showed that the jobs report drove most of the forecast change.` → Decomposition news show jobs report drive phần lớn forecast change.
**Liên kết tiếng Hàn:** `뉴스 분해`.

## 11. shock decomposition /ʃɑk ˌdiːkɑmpəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** an analysis attributing movements in an outcome to different estimated disturbances or shocks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** analysis attribute movement outcome cho disturbance hoặc shock estimate khác nhau.
**Grammar & collocations:** `historical shock decomposition` — decomposition; `plot a shock decomposition` — plot.
**Examples:** `Shock decomposition attributed the output fall mainly to an energy disturbance.` → Decomposition shock attribute output fall chủ yếu cho disturbance energy.
**Liên kết tiếng Hàn:** `충격 분해`.

## 12. density combination /ˈdɛnsəti ˌkɑmbəˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** the construction of one predictive distribution by combining several forecast densities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** construct distribution predictive bằng combine nhiều forecast density.
**Grammar & collocations:** `weighted density combination` — combination; `use density combination` — use.
**Examples:** `Density combination produced a wider but better-calibrated inflation forecast.` → Combination density tạo inflation forecast rộng hơn nhưng calibration tốt hơn.
**Liên kết tiếng Hàn:** `밀도 결합`.

## 13. forecast pooling /ˈfɔrˌkæst ˈpuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** the practice of combining predictions from different models, institutions, or analysts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** practice combine prediction từ model, institution hoặc analyst khác nhau.
**Grammar & collocations:** `robust forecast pooling` — pooling; `benefit from forecast pooling` — benefit.
**Examples:** `Forecast pooling reduced dependence on one model's unusual assumption.` → Pooling forecast giảm dependence vào assumption bất thường của một model.
**Liên kết tiếng Hàn:** `예측 결합`.

## 14. predictive score /prɪˈdɪktɪv skɔr/
**Part of speech:** noun
**Core meaning (English):** a numerical measure of how well a probabilistic forecast assigns probability to what actually occurs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measure numerical forecast probability assign tốt với outcome thực tế.
**Grammar & collocations:** `proper predictive score` — score; `compare predictive scores` — compare.
**Examples:** `The predictive score favored the model that represented tail risk more honestly.` → Score predictive favor model represent tail risk honest hơn.
**Liên kết tiếng Hàn:** `예측 점수`.

## 15. probabilistic calibration /prɑbəˈbɪləstɪk ˌkæləˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the agreement between forecast probabilities and the long-run frequencies of the events they describe.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** agreement giữa forecast probability và long-run frequency của event.
**Grammar & collocations:** `good probabilistic calibration` — calibration; `test probabilistic calibration` — test.
**Examples:** `Probabilistic calibration improved after the model allowed more uncertainty in weak-data periods.` → Calibration probabilistic improve sau khi model allow uncertainty hơn trong period data yếu.
**Liên kết tiếng Hàn:** `확률적 보정`.

## 16. forecast origin /ˈfɔrˌkæst ˈɔrədʒɪn/
**Part of speech:** noun
**Core meaning (English):** the date or information set from which a forecast is made.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** date hoặc information set nơi forecast được make.
**Grammar & collocations:** `fixed forecast origin` — origin; `change the forecast origin` — change.
**Examples:** `Each forecast origin used only information that would have been available at that date.` → Mỗi origin forecast chỉ dùng information available ở date đó.
**Liên kết tiếng Hàn:** `예측 기준 시점`.

## 17. state-space filter /steɪt speɪs ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a recursive procedure that updates beliefs about a hidden state as new observations arrive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** procedure recursive update belief về hidden state khi observation mới arrive.
**Grammar & collocations:** `recursive state-space filter` — filter; `run a state-space filter` — run.
**Examples:** `The state-space filter updated the estimate whenever a new price arrived.` → Filter state-space update estimate mỗi khi price mới arrive.
**Liên kết tiếng Hàn:** `상태 공간 필터`.

## 18. smoothed state /smuːðd steɪt/
**Part of speech:** noun
**Core meaning (English):** an estimate of a past hidden state that uses observations from both before and after that time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimate hidden state past dùng observation trước và sau time đó.
**Grammar & collocations:** `smoothed state estimate` — estimate; `recover a smoothed state` — recover.
**Examples:** `The smoothed state revised the earlier recession assessment after later data arrived.` → State smoothed revise recession assessment trước sau khi data later arrive.
**Liên kết tiếng Hàn:** `평활 상태`.

## 19. Kalman update /ˈkɑlmən ˈʌpˌdeɪt/
**Part of speech:** noun
**Core meaning (English):** the step in a Kalman filter that combines a prior state estimate with a new observation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** step Kalman filter combine prior state estimate với observation mới.
**Grammar & collocations:** `standard Kalman update` — update; `perform a Kalman update` — perform.
**Examples:** `The Kalman update gave more weight to the sensor when its recent errors were small.` → Update Kalman give weight hơn cho sensor khi error recent nhỏ.
**Liên kết tiếng Hàn:** `칼만 갱신`.

## 20. latent-state probability /ˈleɪtənt steɪt ˌprɑbəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the probability assigned to a particular hidden state after considering available observations and model dynamics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** probability assign cho hidden state cụ thể sau consider observation và dynamic model.
**Grammar & collocations:** `time-varying latent-state probability` — probability; `plot latent-state probabilities` — plot.
**Examples:** `The latent-state probability indicated that recovery was becoming more likely.` → Probability latent-state indicate recovery trở nên likely hơn.
**Liên kết tiếng Hàn:** `잠재 상태 확률`.

## Review in context

A **Bayesian state space** can represent a **latent regime** with a changing **regime probability** and a **posterior regime** after new data arrive. Its **state transition matrix** may include a **latent factor**, producing a **nowcast distribution** and a **forecast density** even with **missing-at-end** observations. **News decomposition** explains forecast revisions, while **shock decomposition** attributes movements to disturbances. **Density combination** and **forecast pooling** can improve a **predictive score** when their **probabilistic calibration** is checked. Every **forecast origin** matters: a **state-space filter** updates the current estimate, a **smoothed state** uses later information, and a **Kalman update** changes the **latent-state probability** as observations accumulate.

**Bản dịch tiếng Việt:** **Bayesian state space** có thể represent **latent regime** với **regime probability** đổi theo time và **posterior regime** sau khi data mới arrive. **State transition matrix** có thể gồm **latent factor**, tạo **nowcast distribution** và **forecast density** ngay cả khi observation **missing-at-end**. **News decomposition** explain forecast revision, còn **shock decomposition** attribute movement cho disturbance. **Density combination** và **forecast pooling** có thể improve **predictive score** khi check **probabilistic calibration**. Mỗi **forecast origin** đều quan trọng: **state-space filter** update estimate hiện tại, **smoothed state** dùng information later, còn **Kalman update** đổi **latent-state probability** khi observation tích lũy.
