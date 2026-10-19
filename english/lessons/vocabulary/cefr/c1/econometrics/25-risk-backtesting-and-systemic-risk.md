# C1 Vocabulary 25 — Risk backtesting and systemic risk

This lesson follows how financial analysts test risk forecasts, examine severe losses, and describe how one institution can contribute to system-wide vulnerability.

Flow: **VaR backtest → exception count → Kupiec test → Christoffersen test → conditional coverage → unconditional coverage → exceedance → violation process → expected shortfall backtest → traffic-light approach → stress loss → marginal expected shortfall → systemic risk contribution → CoVaR → drawdown → maximum drawdown → downside semivariance → risk budget → loss quantile → backtesting window**.

## 1. VaR backtest /ˌviː eɪr ˈbækˌtɛst/
**Part of speech:** noun
**Core meaning (English):** a comparison of predicted value-at-risk thresholds with the losses that actually occurred over a historical evaluation period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so sánh ngưỡng value-at-risk dự đoán với loss thật trong giai đoạn lịch sử.
**Grammar & collocations:** `VaR-backtest result` — result; `compare predicted and realized losses` — so sánh.
**Examples:** `The VaR backtest found too many losses beyond the ninety-nine-percent threshold.` → Backtest thấy quá nhiều loss vượt ngưỡng 99%.
**Liên kết tiếng Hàn:** `VaR 백테스트`.

## 2. exception count /ɪkˈsɛpʃən kaʊnt/
**Part of speech:** noun
**Core meaning (English):** the number of observed losses that exceed a forecast risk threshold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số loss thật vượt ngưỡng risk forecast.
**Grammar & collocations:** `exception-count statistic` — statistic; `count threshold violations` — đếm.
**Examples:** `The exception count was higher than the model's nominal probability allowed.` → Exception count cao hơn mức probability nominal của model cho phép.
**Liên kết tiếng Hàn:** `예외 횟수`.

## 3. Kupiec test /ˈkuːpiˌɛk tɛst/
**Part of speech:** noun
**Core meaning (English):** a test of whether the observed frequency of risk-threshold violations matches the forecast probability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test xem frequency violation thật có khớp probability forecast không.
**Grammar & collocations:** `Kupiec-test statistic` — statistic; `test unconditional coverage` — kiểm tra.
**Examples:** `The Kupiec test rejected the one-percent exception rate implied by the risk model.` → Kupiec test bác bỏ exception rate 1% mà model ngụ ý.
**Liên kết tiếng Hàn:** `Kupiec 검정`.

## 4. Christoffersen test /ˈkrɪstɔfərsən tɛst/
**Part of speech:** noun
**Core meaning (English):** a test of whether risk-threshold violations occur independently over time as well as at the correct overall frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test xem violation có độc lập theo thời gian và có đúng frequency tổng thể không.
**Grammar & collocations:** `Christoffersen-test result` — result; `test violation independence` — kiểm tra.
**Examples:** `The Christoffersen test detected clusters of exceptions during the crisis months.` → Test phát hiện exception tụm lại trong các tháng khủng hoảng.
**Liên kết tiếng Hàn:** `Christoffersen 검정`.

## 5. conditional coverage /kənˈdɪʃənəl ˈkʌvərɪdʒ/
**Part of speech:** noun
**Core meaning (English):** correct overall violation frequency together with the requirement that violations occur independently conditional on past information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vừa đúng frequency violation tổng thể vừa độc lập có điều kiện theo information quá khứ.
**Grammar & collocations:** `conditional-coverage test` — test; `check frequency and independence jointly` — kiểm tra.
**Examples:** `Conditional coverage failed because exceptions arrived in bursts after large market moves.` → Conditional coverage thất bại vì exception đến theo burst sau market move lớn.
**Liên kết tiếng Hàn:** `조건부 포함률`.

## 6. unconditional coverage /ˌʌnkənˈdɪʃənəl ˈkʌvərɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the requirement that the long-run fraction of threshold violations equals the probability stated by the risk forecast.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỉ lệ violation dài hạn bằng probability mà risk forecast nêu.
**Grammar & collocations:** `unconditional-coverage test` — test; `match the nominal rate` — khớp.
**Examples:** `Unconditional coverage held even though the violations were temporarily clustered.` → Coverage vô điều kiện vẫn đúng dù violation tạm thời tụm lại.
**Liên kết tiếng Hàn:** `무조건부 포함률`.

## 7. exceedance /ɪkˈsiːdəns/
**Part of speech:** noun
**Core meaning (English):** an observation whose realized loss or value is beyond a forecast boundary or risk threshold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** observation có loss/value vượt boundary hoặc risk threshold forecast.
**Grammar & collocations:** `exceedance event` — event; `record a threshold breach` — ghi nhận.
**Examples:** `Each exceedance was reviewed to determine whether the loss reflected data error or genuine tail risk.` → Mỗi exceedance được xem xét để biết lỗi data hay tail risk thật.
**Liên kết tiếng Hàn:** `초과 발생`.

## 8. violation process /ˌvaɪəˈleɪʃən ˈprɑsɛs/
**Part of speech:** noun
**Core meaning (English):** the time-ordered sequence indicating when a forecast risk threshold is exceeded.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi theo thời gian ghi lúc risk threshold bị vượt.
**Grammar & collocations:** `violation-process dependence` — dependence; `model exception timing` — mô hình hóa.
**Examples:** `The violation process showed persistence that the independent-exception model ignored.` → Process violation cho thấy persistence mà model độc lập bỏ qua.
**Liên kết tiếng Hàn:** `위반 과정`.

## 9. expected shortfall backtest /ɪkˈspɛktɪd ˈʃɔrtˌfɔl ˈbækˌtɛst/
**Part of speech:** noun
**Core meaning (English):** an evaluation of whether a model correctly predicts the average loss among outcomes that exceed a risk threshold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đánh giá model dự đoán đúng loss trung bình trong nhóm vượt threshold không.
**Grammar & collocations:** `expected-shortfall-backtest procedure` — procedure; `evaluate tail-loss magnitude` — đánh giá.
**Examples:** `The expected shortfall backtest exposed losses much larger than the model's tail estimate.` → Backtest cho thấy loss đuôi lớn hơn nhiều estimate của model.
**Liên kết tiếng Hàn:** `기대 부족액 백테스트`.

## 10. traffic-light approach /ˈtræfɪk laɪt əˈproʊtʃ/
**Part of speech:** noun
**Core meaning (English):** a supervisory classification that labels a risk model green, yellow, or red according to its number of threshold exceptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cách giám sát gắn nhãn xanh/vàng/đỏ theo số exception của model.
**Grammar & collocations:** `traffic-light-approach zone` — zone; `classify model performance` — phân loại.
**Examples:** `The traffic-light approach placed the portfolio model in the yellow zone after several exceptions.` → Cách đèn giao thông đặt model portfolio vào vùng vàng.
**Liên kết tiếng Hàn:** `신호등 접근법`.

## 11. stress loss /strɛs lɔs/
**Part of speech:** noun
**Core meaning (English):** a modeled or realized loss under an unusually adverse but plausible market or economic scenario.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loss model hóa hoặc thật trong kịch bản xấu bất thường nhưng có thể xảy ra.
**Grammar & collocations:** `stress-loss estimate` — estimate; `simulate an adverse shock` — mô phỏng.
**Examples:** `The stress loss doubled when the model combined a currency crash with a funding freeze.` → Stress loss tăng gấp đôi khi kết hợp currency crash với funding freeze.
**Liên kết tiếng Hàn:** `스트레스 손실`.

## 12. marginal expected shortfall /ˈmɑrdʒənəl ɪkˈspɛktɪd ˈʃɔrtˌfɔl/
**Part of speech:** noun
**Core meaning (English):** the expected loss of one institution conditional on an extreme loss event for the broader financial system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loss kỳ vọng của một institution khi hệ thống tài chính đang chịu event loss cực đoan.
**Grammar & collocations:** `marginal-expected-shortfall estimate` — estimate; `measure tail co-movement` — đo.
**Examples:** `The bank's marginal expected shortfall rose sharply during market-wide distress.` → Marginal expected shortfall của bank tăng mạnh khi thị trường distress.
**Liên kết tiếng Hàn:** `한계 기대 부족액`.

## 13. systemic risk contribution /sɪˈstɛmɪk rɪsk ˌkɑntrəˈbjuʃən/
**Part of speech:** noun
**Core meaning (English):** the amount by which one institution or activity adds to the vulnerability or potential loss of the financial system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức institution/activity thêm vào vulnerability hoặc loss tiềm năng của hệ thống.
**Grammar & collocations:** `systemic-risk-contribution ranking` — ranking; `decompose system vulnerability` — phân rã.
**Examples:** `The regulator ranked institutions by systemic risk contribution rather than by size alone.` → Regulator xếp hạng theo contribution vào risk hệ thống chứ không chỉ size.
**Liên kết tiếng Hàn:** `시스템 위험 기여도`.

## 14. CoVaR /ˈkoʊ vɑr/
**Part of speech:** noun
**Core meaning (English):** a conditional value-at-risk measure describing system-wide losses when a particular institution is itself in distress.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thước đo VaR có điều kiện mô tả loss toàn hệ thống khi một institution đang distress.
**Grammar & collocations:** `CoVaR estimate` — estimate; `condition system risk on institution distress` — điều kiện hóa.
**Examples:** `The insurer's CoVaR increased when its investment portfolio became highly correlated with banks.` → CoVaR của insurer tăng khi portfolio tương quan cao với bank.
**Liên kết tiếng Hàn:** `CoVaR`.

## 15. drawdown /ˈdrɔˌdaʊn/
**Part of speech:** noun
**Core meaning (English):** a decline from a previous peak in the value of a portfolio, asset, or cumulative performance series.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức giảm từ đỉnh trước của portfolio, asset hoặc performance tích lũy.
**Grammar & collocations:** `drawdown profile` — profile; `recover from a peak-to-trough loss` — phục hồi.
**Examples:** `The strategy suffered a severe drawdown after the commodity shock.` → Strategy chịu drawdown nặng sau shock commodity.
**Liên kết tiếng Hàn:** `낙폭`.

## 16. maximum drawdown /ˈmæksəməm ˈdrɔˌdaʊn/
**Part of speech:** noun
**Core meaning (English):** the largest peak-to-trough decline observed over a chosen performance period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** decline lớn nhất từ peak đến trough trong giai đoạn performance chọn.
**Grammar & collocations:** `maximum-drawdown statistic` — statistic; `compare worst historical loss` — so sánh.
**Examples:** `The new allocation reduced maximum drawdown without increasing average volatility.` → Allocation mới giảm maximum drawdown mà không tăng volatility trung bình.
**Liên kết tiếng Hàn:** `최대 낙폭`.

## 17. downside semivariance /ˈdaʊnˌsaɪd ˌsɛmiˈvɛriəns/
**Part of speech:** noun
**Core meaning (English):** a measure of dispersion calculated only from outcomes below a chosen target or mean.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measure dispersion chỉ tính outcome dưới target hoặc mean chọn.
**Grammar & collocations:** `downside-semivariance estimate` — estimate; `focus on harmful variation` — tập trung.
**Examples:** `Downside semivariance penalized unstable losses while ignoring unusually high returns.` → Semivariance phía downside phạt loss không ổn định nhưng bỏ qua return cao.
**Liên kết tiếng Hàn:** `하방 반분산`.

## 18. risk budget /rɪsk ˈbʌdʒət/
**Part of speech:** noun
**Core meaning (English):** a limit on the amount of total risk that a portfolio, desk, or activity is allowed to consume.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn tổng risk portfolio/desk/activity được phép sử dụng.
**Grammar & collocations:** `risk-budget allocation` — allocation; `spend risk capacity` — sử dụng.
**Examples:** `The desk reduced its emerging-market position after it exceeded the risk budget.` → Desk giảm position emerging market sau khi vượt risk budget.
**Liên kết tiếng Hàn:** `위험 예산`.

## 19. loss quantile /lɔs ˈkwɑnˌtaɪl/
**Part of speech:** noun
**Core meaning (English):** a specified percentile of a loss distribution used to summarize an adverse outcome threshold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** percentile chọn của loss distribution dùng làm ngưỡng outcome bất lợi.
**Grammar & collocations:** `loss-quantile forecast` — forecast; `set a tail threshold` — đặt.
**Examples:** `The ninety-nine-percent loss quantile was used to size the capital buffer.` → Loss quantile 99% dùng để định cỡ capital buffer.
**Liên kết tiếng Hàn:** `손실 분위수`.

## 20. backtesting window /ˈbækˌtɛstɪŋ ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the historical period over which a risk forecast is compared with realized outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng lịch sử dùng so risk forecast với outcome thật.
**Grammar & collocations:** `backtesting-window length` — length; `choose a crisis-inclusive period` — chọn.
**Examples:** `A longer backtesting window included both calm markets and the liquidity crisis.` → Window dài hơn gồm cả thị trường yên ổn và khủng hoảng thanh khoản.
**Liên kết tiếng Hàn:** `백테스팅 기간`.

## Review in context

A **VaR backtest** begins with an **exception count** and may use the **Kupiec test** for **unconditional coverage** or the **Christoffersen test** for independence. **Conditional coverage** requires both, while each **exceedance** belongs to a time-ordered **violation process**. An **expected shortfall backtest** evaluates tail-loss magnitude, and a **traffic-light approach** classifies performance. Analysts model **stress loss**, **marginal expected shortfall**, **systemic risk contribution**, and **CoVaR**. They also monitor **drawdown**, **maximum drawdown**, **downside semivariance**, a portfolio's **risk budget**, the **loss quantile**, and the chosen **backtesting window**.

**Bản dịch tiếng Việt:** **VaR backtest** bắt đầu với **exception count**, có thể dùng **Kupiec test** cho **unconditional coverage** hoặc **Christoffersen test** cho tính độc lập. **Conditional coverage** cần cả hai, còn mỗi **exceedance** thuộc một **violation process** theo thời gian. **Expected shortfall backtest** đánh giá độ lớn loss ở đuôi, còn **traffic-light approach** phân loại performance. Analyst model **stress loss**, **marginal expected shortfall**, **systemic risk contribution** và **CoVaR**. Họ cũng theo dõi **drawdown**, **maximum drawdown**, **downside semivariance**, **risk budget**, **loss quantile** và **backtesting window**.
