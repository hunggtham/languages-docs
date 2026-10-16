# C1 Vocabulary 04 — Time-series dynamics and forecasting

This lesson follows how economists describe persistence, delayed effects, and forecast uncertainty in ordered data.

Flow: **error-correction model → vector autoregression → impulse response → forecast error variance decomposition → Granger causality → seasonal adjustment → differencing → autoregressive process → moving-average process → lag operator → distributed lag → long-run multiplier → spurious regression → forecast horizon → rolling-origin validation → nowcast → trend stationarity → seasonal unit root → recursive forecast → forecast reconciliation**.

## 1. error-correction model /ˈɛrər kəˈrɛkʃən ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a time-series model that combines short-run changes with a tendency to return toward a long-run relationship.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model kết hợp thay đổi ngắn hạn với xu hướng quay về quan hệ dài hạn.
**Grammar & collocations:** `error-correction-model coefficient` — coefficient; `model disequilibrium adjustment` — mô hình.
**Examples:** `The error-correction model showed that prices moved back toward the long-run income relationship after a shock.` → Model cho thấy giá quay về quan hệ income dài hạn.
**Liên kết tiếng Hàn:** `오차 수정 모형`.

## 2. vector autoregression /ˈvɛktər ˌɔtoʊˌrɛˈɡrɛʃən/
**Part of speech:** noun
**Core meaning (English):** a system in which each of several time-series variables is modeled using its own past and the past of the other variables.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ thống model mỗi chuỗi bằng quá khứ của mình và chuỗi khác.
**Grammar & collocations:** `vector-autoregression system` — system; `estimate dynamic interactions` — ước tính.
**Examples:** `Vector autoregression traced feedback between employment, wages, and consumer spending.` → VAR truy feedback giữa việc làm, lương và chi tiêu.
**Liên kết tiếng Hàn:** `벡터 자기회귀`.

## 3. impulse response /ˈɪmˌpʌls rɪˈspɑns/
**Part of speech:** noun
**Core meaning (English):** the path of a variable's predicted reactions over time after a one-time shock to another variable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường phản ứng theo thời gian sau một cú shock một lần.
**Grammar & collocations:** `impulse-response function` — function; `trace a policy shock` — truy.
**Examples:** `The impulse response showed output falling briefly before recovering over four quarters.` → Response cho thấy output giảm ngắn rồi hồi phục.
**Liên kết tiếng Hàn:** `충격 반응`.

## 4. forecast error variance decomposition /ˈfɔrˌkæst ˈɛrər ˈvɛriəns ˌdiːkəmˈpoʊzɪʃən/
**Part of speech:** noun
**Core meaning (English):** a decomposition of forecast uncertainty into contributions from different shocks or innovations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách bất định forecast theo từng shock đóng góp.
**Grammar & collocations:** `forecast-error-variance-decomposition table` — table; `attribute uncertainty to shocks` — quy cho.
**Examples:** `The forecast error variance decomposition assigned most long-run inflation uncertainty to energy shocks.` → Decomposition quy bất định lạm phát dài hạn cho energy shock.
**Liên kết tiếng Hàn:** `예측 오차 분산 분해`.

## 5. Granger causality /ˈɡreɪndʒər kɔˈzæləti/
**Part of speech:** noun
**Core meaning (English):** predictive precedence in which past values of one series improve forecasts of another beyond the latter's own past.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quá khứ của chuỗi A giúp forecast B tốt hơn quá khứ B, theo nghĩa dự báo.
**Grammar & collocations:** `Granger-causality test` — test; `improve predictive content` — cải thiện.
**Examples:** `Granger causality suggested that credit growth helped predict later investment, not necessarily that it caused it.` → Test nói về dự báo, không tự chứng minh nhân quả.
**Liên kết tiếng Hàn:** `그레인저 인과성`.

## 6. seasonal adjustment /ˈsiːzənəl əˈdʒʌstmənt/
**Part of speech:** noun
**Core meaning (English):** removing predictable calendar-related patterns so underlying movements can be compared across periods.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loại pattern mùa vụ để so movement nền giữa kỳ.
**Grammar & collocations:** `seasonal-adjustment factor` — factor; `remove holiday effects` — loại.
**Examples:** `Seasonal adjustment made the December retail surge comparable with other months.` → Adjustment làm surge tháng 12 so được với tháng khác.
**Liên kết tiếng Hàn:** `계절 조정`.

## 7. differencing /ˈdɪfərən sɪŋ/
**Part of speech:** noun
**Core meaning (English):** transforming a time series by subtracting each observation from a later observation to remove a changing level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trừ observation trước khỏi sau để loại level thay đổi.
**Grammar & collocations:** `first differencing` — sai phân bậc nhất; `difference a nonstationary series` — lấy sai phân.
**Examples:** `Differencing removed the steady growth trend before the analyst modeled monthly changes.` → Sai phân loại trend tăng trước khi model đổi tháng.
**Liên kết tiếng Hàn:** `차분`.

## 8. autoregressive process /ˌɔtoʊˌrɛˈɡrɛsɪv ˈprɑsɛs/
**Part of speech:** noun
**Core meaning (English):** a process in which the current value depends partly on its own previous values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị hiện tại phụ thuộc một phần vào giá trị quá khứ của chính nó.
**Grammar & collocations:** `autoregressive-process order` — order; `model persistence` — mô hình.
**Examples:** `An autoregressive process captured the persistence of quarterly unemployment.` → Process bắt persistence của thất nghiệp theo quý.
**Liên kết tiếng Hàn:** `자기회귀 과정`.

## 9. moving-average process /ˈmuːvɪŋ ˈævərɪdʒ ˈprɑsɛs/
**Part of speech:** noun
**Core meaning (English):** a process in which the current value depends on present and past random shocks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị hiện tại phụ thuộc shock hiện tại và quá khứ.
**Grammar & collocations:** `moving-average-process order` — order; `model temporary shocks` — mô hình.
**Examples:** `A moving-average process represented a demand shock that faded after two periods.` → Process biểu diễn shock demand tắt sau hai kỳ.
**Liên kết tiếng Hàn:** `이동평균 과정`.

## 10. lag operator /læɡ ˈɑpəˌreɪtər/
**Part of speech:** noun
**Core meaning (English):** an operator that shifts a time series backward so lagged relationships can be written compactly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép toán đẩy chuỗi lùi để viết quan hệ trễ gọn.
**Grammar & collocations:** `lag-operator notation` — notation; `shift a series one period` — dịch.
**Examples:** `The lag operator simplified the polynomial representation of the dynamic model.` → Lag operator làm biểu diễn đa thức gọn hơn.
**Liên kết tiếng Hàn:** `시차 연산자`.

## 11. distributed lag /dɪˈstrɪbjətɪd læɡ/
**Part of speech:** noun
**Core meaning (English):** a model in which an explanatory variable affects an outcome over several subsequent periods.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect của predictor phân tán qua nhiều kỳ sau.
**Grammar & collocations:** `distributed-lag model` — model; `estimate delayed effects` — ước tính.
**Examples:** `A distributed lag captured how a tax change influenced hiring gradually over three years.` → Lag phân tán bắt effect thuế lên hiring dần qua ba năm.
**Liên kết tiếng Hàn:** `분포 시차`.

## 12. long-run multiplier /ˈlɔŋ rʌn ˈmʌltəˌplaɪər/
**Part of speech:** noun
**Core meaning (English):** the total eventual change in an outcome from a permanent one-unit change in an explanatory variable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tổng effect cuối cùng của đổi predictor một đơn vị vĩnh viễn.
**Grammar & collocations:** `long-run-multiplier estimate` — estimate; `sum delayed coefficients` — cộng.
**Examples:** `The long-run multiplier showed that a permanent energy-price increase eventually reduced consumption more than the immediate effect.` → Multiplier cho thấy effect dài hạn lớn hơn effect ngay.
**Liên kết tiếng Hàn:** `장기 승수`.

## 13. spurious regression /ˈspjʊriəs rɪˈɡrɛʃən/
**Part of speech:** noun
**Core meaning (English):** an apparently strong regression relationship produced by shared trends in nonstationary series rather than a meaningful connection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hồi quy đẹp giả do hai chuỗi cùng trend, không có liên hệ thật.
**Grammar & collocations:** `spurious-regression warning` — warning; `difference trending series` — lấy sai phân.
**Examples:** `The high R-squared was a spurious regression caused by two unrelated upward trends.` → R-squared cao là hồi quy giả do hai trend tăng.
**Liên kết tiếng Hàn:** `허구적 회귀`.

## 14. forecast horizon /ˈfɔrˌkæst həˈraɪzən/
**Part of speech:** noun
**Core meaning (English):** the amount of future time covered by a forecast.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian tương lai mà forecast bao phủ.
**Grammar & collocations:** `short forecast horizon` — horizon ngắn; `extend the forecast horizon` — kéo dài.
**Examples:** `Forecast error increased sharply as the forecast horizon moved from one month to one year.` → Error tăng mạnh khi horizon dài hơn.
**Liên kết tiếng Hàn:** `예측 기간`.

## 15. rolling-origin validation /ˈroʊlɪŋ ˈɔrədʒɪn ˌvæləˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a time-series validation method that repeatedly moves the training endpoint forward and tests forecasts on the next period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** liên tục đẩy điểm kết thúc train rồi test kỳ kế tiếp.
**Grammar & collocations:** `rolling-origin-validation window` — window; `evaluate sequential forecasts` — đánh giá.
**Examples:** `Rolling-origin validation showed that the complex model failed during older market conditions.` → Validation cho thấy model phức tạp fail ở market cũ.
**Liên kết tiếng Hàn:** `롤링 원점 검증`.

## 16. nowcast /ˈnaʊˌkæst/
**Part of speech:** noun/verb
**Core meaning (English):** an estimate of current or very recent conditions made before all official data are available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính tình hình hiện tại trước khi đủ data chính thức.
**Grammar & collocations:** `real-time nowcast` — nowcast thời gian thực; `nowcast current growth` — ước tính hiện tại.
**Examples:** `The central bank used a nowcast to assess current-quarter growth before the survey arrived.` → Ngân hàng dùng nowcast trước khi survey đến.
**Liên kết tiếng Hàn:** `현재 예측`.

## 17. trend stationarity /trɛnd ˌsteɪʃəˈnerəti/
**Part of speech:** noun
**Core meaning (English):** a condition in which a series fluctuates around a deterministic trend and returns toward that trend after shocks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi dao động quanh trend cố định và quay lại sau shock.
**Grammar & collocations:** `trend-stationarity assumption` — assumption; `remove a deterministic trend` — loại.
**Examples:** `Trend stationarity implied that a temporary shock would not permanently change the series path.` → Tính dừng quanh trend nghĩa shock tạm không đổi path vĩnh viễn.
**Liên kết tiếng Hàn:** `추세 정상성`.

## 18. seasonal unit root /ˈsiːzənəl ˈjuːnət ruːt/
**Part of speech:** noun
**Core meaning (English):** a nonstationary seasonal pattern that persists across repeated calendar positions until it is transformed or modeled.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pattern mùa vụ không dừng, lặp dai dẳng theo vị trí lịch.
**Grammar & collocations:** `seasonal-unit-root test` — test; `difference seasonal persistence` — sai phân.
**Examples:** `A seasonal unit root made the same quarter's effect persist across years.` → Unit root mùa vụ làm effect cùng quý kéo dài qua năm.
**Liên kết tiếng Hàn:** `계절 단위근`.

## 19. recursive forecast /rɪˈkɝsɪv ˈfɔrˌkæst/
**Part of speech:** noun
**Core meaning (English):** a multi-step forecast that feeds earlier predicted values back into the model to produce later predictions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** forecast nhiều bước dùng prediction trước làm input cho bước sau.
**Grammar & collocations:** `recursive-forecast error` — error; `feed predictions forward` — đưa tiếp.
**Examples:** `Recursive forecast error accumulated because each predicted quarter replaced an unobserved actual value.` → Error tích lũy vì mỗi quý dự đoán thay actual chưa thấy.
**Liên kết tiếng Hàn:** `재귀 예측`.

## 20. forecast reconciliation /ˈfɔrˌkæst ˌrɛkənˌsɪliˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** adjusting forecasts at different levels of a hierarchy so that their totals agree mathematically.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh forecast các cấp để tổng khớp nhau.
**Grammar & collocations:** `forecast-reconciliation method` — method; `align regional and national forecasts` — căn chỉnh.
**Examples:** `Forecast reconciliation made city projections sum to the national total.` → Reconciliation làm dự báo city cộng đúng total quốc gia.
**Liên kết tiếng Hàn:** `예측 조정`.

## Review in context

An **error-correction model** and a **vector autoregression** describe dynamic relationships; an **impulse response** traces a shock, while **forecast error variance decomposition** assigns uncertainty to shocks. **Granger causality** concerns predictive content, not automatic causal proof. **Seasonal adjustment** and **differencing** can prepare a series. An **autoregressive process**, **moving-average process**, **lag operator**, and **distributed lag** describe persistence and delayed effects; the **long-run multiplier** summarizes the eventual response. A **spurious regression** can result from shared trends. Forecasts require a **forecast horizon**, **rolling-origin validation**, and sometimes a **nowcast**. **Trend stationarity** and a **seasonal unit root** imply different transformations. A **recursive forecast** feeds predictions forward, while **forecast reconciliation** keeps hierarchical totals coherent.

**Bản dịch tiếng Việt:** **Error-correction model** và **vector autoregression** mô tả quan hệ động; **impulse response** truy shock, còn **forecast error variance decomposition** quy bất định cho từng shock. **Granger causality** nói về nội dung dự báo, không tự chứng minh nhân quả. **Seasonal adjustment** và **differencing** chuẩn bị chuỗi. **Autoregressive process**, **moving-average process**, **lag operator** và **distributed lag** mô tả persistence/effect trễ; **long-run multiplier** tóm tắt phản ứng cuối. **Spurious regression** có thể do trend chung. Forecast cần **forecast horizon**, **rolling-origin validation** và đôi khi **nowcast**. **Trend stationarity** và **seasonal unit root** cần transformation khác. **Recursive forecast** đưa prediction về bước sau, còn **forecast reconciliation** giữ tổng các cấp nhất quán.
