# C2 Vocabulary — Time-series analytics and forecasting

This lesson follows a time series from decomposition and sampling through missing-data repair, temporal features, and forecast preparation.

Flow: **seasonality decomposition → trend component → residual series → exponential smoothing → autoregressive lag → stationarity test → differencing order → backfill gap → outlier masking → temporal aggregation → resampling frequency → calendar effect → causal lag → time-series decomposition → seasonal naive forecast → drift correction → missing interval → rolling statistic → lag feature → trend break**.

## 1. seasonality decomposition /ˌsiːzəˈnæləti ˌdiːkɒmpəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** separating recurring seasonal movement from the other components of a time series.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách chuyển động lặp theo mùa khỏi component khác của series.
**Grammar & collocations:** `seasonality-decomposition method` — phương pháp; `isolate a weekly cycle` — tách.
**Examples:** `Seasonality decomposition separated weekend demand from the underlying growth trend.` → Decomposition tách demand cuối tuần khỏi trend tăng.
**Liên kết tiếng Hàn:** `계절성 분해`.

## 2. trend component /trend kəmˈpoʊnənt/
**Part of speech:** noun
**Core meaning (English):** the relatively smooth long-term direction embedded in a time series.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hướng dài hạn tương đối mượt trong series.
**Grammar & collocations:** `trend-component estimate` — estimate; `remove short-term noise` — bỏ.
**Examples:** `The trend component showed gradual growth even when daily demand fluctuated.` → Component cho thấy tăng dần dù demand ngày dao động.
**Liên kết tiếng Hàn:** `추세 성분`.

## 3. residual series /rɪˈzɪdʒuəl ˈsɪəriːz/
**Part of speech:** noun
**Core meaning (English):** the remaining sequence after modeled trend, seasonality, and other explainable structure are removed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi còn lại sau khi bỏ trend, seasonality và structure giải thích được.
**Grammar & collocations:** `residual-series diagnostic` — chẩn đoán; `inspect unexplained variation` — kiểm tra.
**Examples:** `The residual series still contained a weekly pattern, showing that the model was incomplete.` → Residual còn pattern tuần nên model thiếu.
**Liên kết tiếng Hàn:** `잔차 시계열`.

## 4. exponential smoothing /ˌekspoʊˈnenʃəl ˈsmuːðɪŋ/
**Part of speech:** noun
**Core meaning (English):** forecasting by weighting recent observations more heavily than older observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** forecast đặt trọng số observation gần đây cao hơn observation cũ.
**Grammar & collocations:** `exponential-smoothing parameter` — tham số; `react to a recent level change` — phản ứng.
**Examples:** `Exponential smoothing adapted quickly when the service's request volume rose.` → Smoothing thích ứng nhanh khi volume tăng.
**Liên kết tiếng Hàn:** `지수 평활`.

## 5. autoregressive lag /ˌɔːtoʊrɪˈɡresɪv læɡ/
**Part of speech:** noun
**Core meaning (English):** a previous value of a series used as a predictor of its current value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value quá khứ dùng dự đoán value hiện tại.
**Grammar & collocations:** `autoregressive-lag feature` — feature; `model yesterday's demand` — mô hình.
**Examples:** `The autoregressive lag captured how yesterday's queue influenced today's workload.` → Lag mô hình ảnh hưởng của queue hôm qua.
**Liên kết tiếng Hàn:** `자기회귀 시차`.

## 6. stationarity test /ˌsteɪʃəˈnærəti test/
**Part of speech:** noun
**Core meaning (English):** a statistical check of whether a series has stable distributional properties over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra distribution của series có ổn định theo thời gian không.
**Grammar & collocations:** `stationarity-test result` — kết quả; `test a changing mean` — kiểm tra.
**Examples:** `The stationarity test rejected the assumption that the raw sales series had a stable mean.` → Test bác bỏ mean ổn định.
**Liên kết tiếng Hàn:** `정상성 검정`.

## 7. differencing order /ˈdɪfərənsɪŋ ˈɔːrdər/
**Part of speech:** noun
**Core meaning (English):** the number of times a series is differenced to remove nonstationary level or trend behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số lần lấy difference để bỏ behavior level/trend không stationary.
**Grammar & collocations:** `differencing-order choice` — lựa chọn; `difference a trending series` — lấy sai phân.
**Examples:** `The differencing order of one removed the long-term growth without amplifying noise.` → Order 1 bỏ tăng dài hạn mà không tăng noise.
**Liên kết tiếng Hàn:** `차분 차수`.

## 8. backfill gap /ˈbækfɪl ɡæp/
**Part of speech:** noun
**Core meaning (English):** a missing historical interval that must be reconstructed before analysis or forecasting.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng lịch sử thiếu cần dựng lại trước phân tích/forecast.
**Grammar & collocations:** `backfill-gap repair` — repair; `reconstruct a missing week` — dựng.
**Examples:** `The backfill gap covered two hours when the sensor gateway was offline.` → Gap bao phủ hai giờ gateway offline.
**Liên kết tiếng Hàn:** `백필 공백`.

## 9. outlier masking /ˈaʊtlaɪər ˈmæskɪŋ/
**Part of speech:** noun
**Core meaning (English):** temporarily marking extreme observations so they do not distort a model or summary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đánh dấu tạm observation cực đoan để không làm méo model/summary.
**Grammar & collocations:** `outlier-masking rule` — rule; `retain the raw value separately` — giữ.
**Examples:** `Outlier masking prevented one bot attack from defining the normal traffic baseline.` → Masking ngăn bot attack định nghĩa baseline.
**Liên kết tiếng Hàn:** `이상치 마스킹`.

## 10. temporal aggregation /ˌtempərəl ˌæɡrəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** combining observations into larger time buckets such as hours, days, or months.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp observation thành bucket giờ, ngày hoặc tháng.
**Grammar & collocations:** `temporal-aggregation grain` — grain; `sum events by hour` — gộp.
**Examples:** `Temporal aggregation reduced noisy minute readings to a daily planning series.` → Aggregation giảm reading phút thành series ngày.
**Liên kết tiếng Hàn:** `시간 집계`.

## 11. resampling frequency /ˌriːˈsæmplɪŋ ˈfriːkwənsi/
**Part of speech:** noun
**Core meaning (English):** the interval at which irregular observations are converted to a regular time grid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách chuyển observation không đều thành lưới thời gian đều.
**Grammar & collocations:** `resampling-frequency choice` — lựa chọn; `align readings to five-minute bins` — căn.
**Examples:** `The resampling frequency was five minutes, matching the alert evaluation window.` → Frequency 5 phút khớp window alert.
**Liên kết tiếng Hàn:** `재표본화 빈도`.

## 12. calendar effect /ˈkælɪndər ɪˈfekt/
**Part of speech:** noun
**Core meaning (English):** a systematic pattern caused by weekdays, holidays, billing cycles, or other calendar structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pattern do weekday, holiday, billing cycle hoặc lịch tạo ra.
**Grammar & collocations:** `calendar-effect feature` — feature; `adjust for a public holiday` — điều chỉnh.
**Examples:** `The calendar effect explained why demand fell every national holiday.` → Effect giải thích demand giảm ngày lễ.
**Liên kết tiếng Hàn:** `달력 효과`.

## 13. causal lag /ˈkɔːzəl læɡ/
**Part of speech:** noun
**Core meaning (English):** the delay between a potential cause and the later response it influences.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ trễ giữa nguyên nhân và response bị ảnh hưởng sau đó.
**Grammar & collocations:** `causal-lag estimate` — ước tính; `model a delayed effect` — mô hình.
**Examples:** `The causal lag suggested that a price change affected demand two weeks later.` → Lag cho thấy giá ảnh hưởng demand sau hai tuần.
**Liên kết tiếng Hàn:** `인과 시차`.

## 14. time-series decomposition /ˈtaɪm ˌsɪəriːz ˌdiːkɒmpəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** representing a series as interpretable components such as level, trend, seasonality, and residual noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn series bằng level, trend, seasonality và residual noise.
**Grammar & collocations:** `time-series-decomposition plot` — biểu đồ; `separate structural components` — tách.
**Examples:** `Time-series decomposition exposed a trend break hidden by the strong daily cycle.` → Decomposition lộ trend break bị cycle che.
**Liên kết tiếng Hàn:** `시계열 분해`.

## 15. seasonal naive forecast /ˈsiːzənəl naɪˈiːv ˈfɔːrkæst/
**Part of speech:** noun
**Core meaning (English):** a forecast that repeats the value from the corresponding previous seasonal period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** forecast lặp value của kỳ mùa tương ứng trước đó.
**Grammar & collocations:** `seasonal-naive baseline` — baseline; `repeat last week's pattern` — lặp.
**Examples:** `The seasonal naive forecast was a strong baseline for weekend ticket demand.` → Forecast naive là baseline tốt cho demand cuối tuần.
**Liên kết tiếng Hàn:** `계절적 순진 예측`.

## 16. drift correction /drɪft kəˈrekʃən/
**Part of speech:** noun
**Core meaning (English):** adjusting a series or forecast to account for gradual change in its baseline behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều chỉnh series/forecast theo thay đổi dần của baseline.
**Grammar & collocations:** `drift-correction factor` — hệ số; `recenter a forecast` — căn lại.
**Examples:** `Drift correction raised the forecast after the service adopted a permanently higher traffic level.` → Correction nâng forecast sau traffic tăng bền.
**Liên kết tiếng Hàn:** `드리프트 보정`.

## 17. missing interval /ˈmɪsɪŋ ˈɪntərvəl/
**Part of speech:** noun
**Core meaning (English):** a period for which no observations were recorded in an otherwise regular series.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng không có observation trong series vốn đều.
**Grammar & collocations:** `missing-interval marker` — marker; `distinguish absent data from zero` — phân biệt.
**Examples:** `The missing interval indicated a failed collector rather than zero customer activity.` → Interval cho thấy collector fail, không phải activity zero.
**Liên kết tiếng Hàn:** `누락 간격`.

## 18. rolling statistic /ˈroʊlɪŋ stəˈtɪstɪk/
**Part of speech:** noun
**Core meaning (English):** a statistic recomputed over a moving window of the most recent observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** statistic tính lại trên window trượt của observation gần nhất.
**Grammar & collocations:** `rolling-statistic window` — window; `track a moving median` — theo dõi.
**Examples:** `The rolling statistic smoothed short spikes while retaining a current view of demand.` → Statistic làm mượt spike mà vẫn cập nhật.
**Liên kết tiếng Hàn:** `이동 통계`.

## 19. lag feature /læɡ ˈfiːtʃər/
**Part of speech:** noun
**Core meaning (English):** a predictive feature derived from one or more earlier values of a time series.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** feature dự đoán lấy từ value trước đó của series.
**Grammar & collocations:** `lag-feature window` — window; `encode prior-day demand` — mã hóa.
**Examples:** `The lag feature captured yesterday's cancellations when predicting today's staffing needs.` → Feature ghi cancellation hôm qua.
**Liên kết tiếng Hàn:** `시차 피처`.

## 20. trend break /trend breɪk/
**Part of speech:** noun
**Core meaning (English):** a point at which the long-term direction or growth rate of a series changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm trend dài hạn hoặc tốc độ tăng thay đổi.
**Grammar & collocations:** `trend-break detector` — bộ phát hiện; `mark a structural change` — đánh dấu.
**Examples:** `The trend break coincided with a product launch that permanently changed demand.` → Break trùng launch làm demand đổi lâu dài.
**Liên kết tiếng Hàn:** `추세 단절`.

## Review in context

**Seasonality decomposition** separates a **trend component** from a **residual series**; **exponential smoothing** and an **autoregressive lag** respond to recent values, while a **stationarity test** and **differencing order** prepare modeling. A **backfill gap** and **missing interval** must be distinguished, and **outlier masking** protects the baseline. **Temporal aggregation** and **resampling frequency** set grain; a **calendar effect** and **causal lag** explain timing. **Time-series decomposition** supports a **seasonal naive forecast**, **drift correction**, and a **rolling statistic**. A **lag feature** carries history, while a **trend break** marks structural change.

**Bản dịch tiếng Việt:** **Seasonality decomposition** tách **trend component** khỏi **residual series**; **exponential smoothing** và **autoregressive lag** phản ứng value gần, còn **stationarity test** và **differencing order** chuẩn bị modeling. **Backfill gap** phải phân biệt với **missing interval**, và **outlier masking** bảo vệ baseline. **Temporal aggregation** và **resampling frequency** đặt grain; **calendar effect** và **causal lag** giải thích timing. **Time-series decomposition** hỗ trợ **seasonal naive forecast**, **drift correction** và **rolling statistic**. **Lag feature** mang lịch sử, còn **trend break** đánh dấu thay đổi cấu trúc.
