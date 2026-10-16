# C1 Vocabulary 06 — Volatility and risk forecasting

This lesson introduces the language used to model changing uncertainty and forecast financial risk over time.

Flow: **volatility persistence → conditional variance → ARCH effect → GARCH model → conditional heteroskedasticity → variance equation → innovation distribution → volatility shock → tail risk → value at risk → expected shortfall → log return → arithmetic return → return aggregation → volatility forecast → variance targeting → quasi-maximum likelihood → robust loss → quantile forecast → risk horizon**.

## 1. volatility persistence /ˌvɑləˈtɪləti pərˈsɪstəns/
**Part of speech:** noun
**Core meaning (English):** the tendency for periods of high or low volatility to continue for some time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giai đoạn biến động cao/thấp thường kéo dài thay vì đổi ngay.
**Grammar & collocations:** `volatility-persistence estimate` — estimate; `measure shock decay` — đo.
**Examples:** `Volatility persistence made yesterday's market turbulence relevant to today's risk estimate.` → Persistence làm biến động hôm qua còn liên quan hôm nay.
**Liên kết tiếng Hàn:** `변동성 지속성`.

## 2. conditional variance /kənˈdɪʃənəl ˈvɛriəns/
**Part of speech:** noun
**Core meaning (English):** the variance predicted for an observation given information available at that time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variance dự đoán dựa trên information đã biết ở thời điểm đó.
**Grammar & collocations:** `conditional-variance forecast` — forecast; `update risk from new information` — cập nhật.
**Examples:** `The conditional variance rose after the earnings announcement.` → Variance có điều kiện tăng sau thông báo earnings.
**Liên kết tiếng Hàn:** `조건부 분산`.

## 3. ARCH effect /ˈɑrk ɪˌfɛkt/
**Part of speech:** noun
**Core meaning (English):** dependence of current error variance on earlier squared errors, indicating changing volatility over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variance hiện tại phụ thuộc squared error trước, cho thấy volatility đổi.
**Grammar & collocations:** `ARCH-effect test` — test; `detect volatility dependence` — phát hiện.
**Examples:** `An ARCH effect appeared because large return surprises were followed by more large surprises.` → ARCH effect lộ khi surprise lớn kéo theo surprise lớn.
**Liên kết tiếng Hàn:** `ARCH 효과`.

## 4. GARCH model /ˈɡɑrtʃ ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model in which current conditional variance depends on past squared shocks and past conditional variances.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variance hiện tại dựa vào shock bình phương và variance trước.
**Grammar & collocations:** `GARCH-model specification` — specification; `forecast conditional volatility` — dự báo.
**Examples:** `The GARCH model captured long periods of calm interrupted by short crises.` → Model bắt giai đoạn yên dài xen crisis ngắn.
**Liên kết tiếng Hàn:** `GARCH 모형`.

## 5. conditional heteroskedasticity /kənˈdɪʃənəl ˌhɛtərəsˌkəˈdæstəsəti/
**Part of speech:** noun
**Core meaning (English):** changing error variance that depends on information or conditions observed over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variance error đổi theo information/condition theo thời gian.
**Grammar & collocations:** `conditional-heteroskedasticity model` — model; `allow time-varying risk` — cho phép.
**Examples:** `Conditional heteroskedasticity made a constant-error model unsuitable for the returns.` → Dị phương sai có điều kiện làm model error cố định không phù hợp.
**Liên kết tiếng Hàn:** `조건부 이분산성`.

## 6. variance equation /ˈvɛriəns ɪˈkweɪʒən/
**Part of speech:** noun
**Core meaning (English):** the part of a model that describes how predicted variance evolves as new information arrives.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương trình mô tả variance đổi khi có information mới.
**Grammar & collocations:** `variance-equation parameter` — parameter; `specify persistence` — chỉ rõ.
**Examples:** `The variance equation assigned a large role to the previous day's squared shock.` → Phương trình gán vai trò lớn cho shock hôm trước.
**Liên kết tiếng Hàn:** `분산 방정식`.

## 7. innovation distribution /ˌɪnəˈveɪʃən ˌdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** the assumed distribution of new random shocks after predictable information has been removed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân bố shock mới sau khi đã loại phần dự đoán được.
**Grammar & collocations:** `innovation-distribution assumption` — assumption; `allow fat-tailed shocks` — cho phép.
**Examples:** `A heavy innovation distribution assigned more probability to extreme market moves.` → Distribution heavy-tail cho xác suất cao hơn cho move cực đoan.
**Liên kết tiếng Hàn:** `혁신 분포`.

## 8. volatility shock /ˌvɑləˈtɪləti ʃɑk/
**Part of speech:** noun
**Core meaning (English):** an unexpected event that causes a sudden change in the level of uncertainty or price variability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event bất ngờ làm volatility đổi đột ngột.
**Grammar & collocations:** `volatility-shock response` — response; `absorb a market shock` — hấp thụ.
**Examples:** `The policy announcement produced a volatility shock that lasted several sessions.` → Announcement tạo shock kéo dài vài phiên.
**Liên kết tiếng Hàn:** `변동성 충격`.

## 9. tail risk /teɪl rɪsk/
**Part of speech:** noun
**Core meaning (English):** the risk of unusually severe losses associated with the extreme tail of an outcome distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rủi ro lỗ rất nặng ở đuôi cực đoan của distribution.
**Grammar & collocations:** `tail-risk measure` — measure; `stress extreme losses` — stress-test.
**Examples:** `The portfolio appeared safe on average but carried substantial tail risk.` → Portfolio an toàn average nhưng tail risk lớn.
**Liên kết tiếng Hàn:** `꼬리 위험`.

## 10. value at risk /ˈvælju æt rɪsk/
**Part of speech:** noun
**Core meaning (English):** a loss threshold expected not to be exceeded at a stated probability and time horizon under a chosen model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngưỡng lỗ dự kiến không vượt ở xác suất và horizon định trước.
**Grammar & collocations:** `value-at-risk estimate` — estimate; `set a one-day VaR limit` — đặt giới hạn.
**Examples:** `The desk reported a one-day value at risk for the bond portfolio.` → Desk báo VaR một ngày cho portfolio trái phiếu.
**Liên kết tiếng Hàn:** `위험 가치`.

## 11. expected shortfall /ɪkˈspɛktɪd ʃɔrtˌfɔl/
**Part of speech:** noun
**Core meaning (English):** the average loss conditional on losses exceeding a selected risk threshold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗ trung bình khi đã vượt threshold rủi ro.
**Grammar & collocations:** `expected-shortfall estimate` — estimate; `measure tail severity` — đo.
**Examples:** `Expected shortfall showed that losses beyond the VaR threshold could be much larger.` → Shortfall cho thấy loss vượt VaR có thể lớn hơn nhiều.
**Liên kết tiếng Hàn:** `기대 손실`.

## 12. log return /lɔɡ rɪˈtɝn/
**Part of speech:** noun
**Core meaning (English):** the natural logarithm of the ratio between a later price and an earlier price.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** log của tỉ số giá sau và giá trước.
**Grammar & collocations:** `log-return series` — series; `aggregate log returns` — cộng.
**Examples:** `The analyst modeled daily log returns because they add conveniently across periods.` → Analyst model log return vì cộng thuận tiện.
**Liên kết tiếng Hàn:** `로그 수익률`.

## 13. arithmetic return /ˌærɪθˈmɛtɪk rɪˈtɝn/
**Part of speech:** noun
**Core meaning (English):** the percentage change in price or value calculated directly from the difference divided by the starting value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần trăm đổi trực tiếp từ chênh lệch chia giá đầu.
**Grammar & collocations:** `arithmetic-return average` — average; `compute a simple return` — tính.
**Examples:** `The arithmetic return was five percent when the asset rose from 100 to 105.` → Return số học là năm phần trăm.
**Liên kết tiếng Hàn:** `산술 수익률`.

## 14. return aggregation /rɪˈtɝn ˌæɡrəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** combining returns across periods or assets to obtain a return for a longer interval or portfolio.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp return qua kỳ hoặc asset thành return dài hơn/portfolio.
**Grammar & collocations:** `return-aggregation rule` — rule; `compound across periods` — gộp lãi.
**Examples:** `Return aggregation used compounding rather than simply adding arithmetic returns.` → Aggregation dùng compound, không chỉ cộng return.
**Liên kết tiếng Hàn:** `수익률 집계`.

## 15. volatility forecast /ˌvɑləˈtɪləti ˈfɔrˌkæst/
**Part of speech:** noun
**Core meaning (English):** a prediction of future variability based on current and past information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dự đoán biến động tương lai từ information hiện tại/quá khứ.
**Grammar & collocations:** `volatility-forecast horizon` — horizon; `update a risk forecast` — cập nhật.
**Examples:** `The volatility forecast rose after the central bank changed its guidance.` → Forecast tăng sau đổi guidance.
**Liên kết tiếng Hàn:** `변동성 예측`.

## 16. variance targeting /ˈvɛriəns ˈtɑrɡətɪŋ/
**Part of speech:** noun
**Core meaning (English):** setting a long-run variance parameter or relationship to a chosen target when estimating a volatility model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** neo variance dài hạn vào target khi ước tính model.
**Grammar & collocations:** `variance-targeting restriction` — restriction; `anchor long-run volatility` — neo.
**Examples:** `Variance targeting stabilized the long-run level in the GARCH estimation.` → Targeting ổn định level dài hạn.
**Liên kết tiếng Hàn:** `분산 타기팅`.

## 17. quasi-maximum likelihood /ˌkwaɪzi ˈmæksəməm ˈlaɪkliˌhʊd/
**Part of speech:** noun
**Core meaning (English):** an estimation method that maximizes a likelihood criterion even when the assumed shock distribution is only an approximation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tối đa likelihood dù distribution shock chỉ là xấp xỉ.
**Grammar & collocations:** `quasi-maximum-likelihood estimator` — estimator; `allow distributional misspecification` — cho phép.
**Examples:** `Quasi-maximum likelihood remained useful when the shocks were not exactly normal.` → QML vẫn hữu ích khi shock không chuẩn.
**Liên kết tiếng Hàn:** `준최대우도`.

## 18. robust loss /roʊˈbʌst lɔs/
**Part of speech:** noun
**Core meaning (English):** an estimation loss function that reduces the influence of extreme errors compared with squared loss.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm loss giảm ảnh hưởng error cực đoan so với bình phương.
**Grammar & collocations:** `robust-loss function` — function; `downweight an extreme residual` — giảm.
**Examples:** `The robust loss prevented one crisis day from determining the entire volatility fit.` → Loss robust ngăn một ngày crisis chi phối fit.
**Liên kết tiếng Hàn:** `강건 손실`.

## 19. quantile forecast /ˈkwɑnˌtaɪl ˈfɔrˌkæst/
**Part of speech:** noun
**Core meaning (English):** a forecast of a selected conditional quantile rather than only a conditional mean.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** forecast quantile có điều kiện, không chỉ mean.
**Grammar & collocations:** `quantile-forecast interval` — interval; `forecast a downside percentile` — dự báo.
**Examples:** `The quantile forecast gave a clearer estimate of the lower-tail return under stress.` → Forecast quantile cho estimate rõ hơn ở đuôi thấp.
**Liên kết tiếng Hàn:** `분위수 예측`.

## 20. risk horizon /rɪsk həˈraɪzən/
**Part of speech:** noun
**Core meaning (English):** the future period over which a risk measure or loss forecast is defined.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng tương lai mà risk measure/loss forecast áp dụng.
**Grammar & collocations:** `risk-horizon mismatch` — mismatch; `choose a ten-day horizon` — chọn.
**Examples:** `A one-day risk horizon was too short for a fund that could not liquidate positions quickly.` → Horizon một ngày quá ngắn cho fund khó thanh lý.
**Liên kết tiếng Hàn:** `위험 기간`.

## Review in context

**Volatility persistence**, **conditional variance**, and an **ARCH effect** motivate a **GARCH model** for **conditional heteroskedasticity**. Its **variance equation** depends on an **innovation distribution** and reacts to a **volatility shock**. Investors care about **tail risk**, summarized by **value at risk** and **expected shortfall**. **Log return**, **arithmetic return**, and **return aggregation** use different arithmetic. A **volatility forecast** may use **variance targeting** and **quasi-maximum likelihood**; a **robust loss** limits crisis-day influence. A **quantile forecast** describes a tail directly, while a **risk horizon** defines how far ahead the measure applies.

**Bản dịch tiếng Việt:** **Volatility persistence**, **conditional variance** và **ARCH effect** thúc đẩy dùng **GARCH model** cho **conditional heteroskedasticity**. **Variance equation** dựa vào **innovation distribution** và phản ứng với **volatility shock**. Nhà đầu tư quan tâm **tail risk**, tóm tắt bằng **value at risk** và **expected shortfall**. **Log return**, **arithmetic return** và **return aggregation** có cách tính khác nhau. **Volatility forecast** có thể dùng **variance targeting** và **quasi-maximum likelihood**; **robust loss** hạn chế ảnh hưởng ngày crisis. **Quantile forecast** mô tả trực tiếp đuôi, còn **risk horizon** xác định khoảng dự báo.
