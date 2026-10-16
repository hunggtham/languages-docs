# C1 Vocabulary 24 — Forecast evaluation and predictive distributions

This lesson follows how analysts evaluate forecasts not only by average error, but also by calibration, uncertainty, and performance on information held out from estimation.

Flow: **proper scoring rule → log score → Brier score → continuous ranked probability score → sharpness → forecast calibration → predictive density → density forecast → probability integral transform → Diebold-Mariano test → forecast encompassing → forecast combination → model confidence set → out-of-sample loss → rolling window → expanding window → real-time data → vintage data → forecast revision → predictive interval**.

## 1. proper scoring rule /ˈprɑpər ˈskɔrɪŋ ruːl/
**Part of speech:** noun
**Core meaning (English):** a scoring rule whose expected value is optimized when a forecaster reports the true predictive distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule chấm điểm mà expected score tốt nhất khi forecaster báo đúng predictive distribution thật.
**Grammar & collocations:** `proper-scoring-rule property` — property; `reward honest probabilities` — thưởng.
**Examples:** `A proper scoring rule rewarded the analyst for reporting uncertainty instead of hiding it.` → Proper scoring rule thưởng analyst báo uncertainty thay vì che giấu.
**Liên kết tiếng Hàn:** `적합 채점 규칙`.

## 2. log score /lɔɡ skɔr/
**Part of speech:** noun
**Core meaning (English):** a probabilistic forecast score based on the logarithm of the density assigned to the outcome that actually occurs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** score forecast xác suất dựa log của density gán cho outcome thực sự xảy ra.
**Grammar & collocations:** `log-score comparison` — comparison; `penalize misplaced probability` — phạt.
**Examples:** `The model with the better log score assigned more density to the observed recession.` → Model có log score tốt hơn gán density lớn hơn cho recession quan sát.
**Liên kết tiếng Hàn:** `로그 점수`.

## 3. Brier score /ˈbraɪər skɔr/
**Part of speech:** noun
**Core meaning (English):** the mean squared difference between a predicted event probability and the event's binary outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bình phương chênh trung bình giữa xác suất event dự đoán và outcome nhị phân thực tế.
**Grammar & collocations:** `Brier-score decomposition` — decomposition; `score binary probabilities` — chấm.
**Examples:** `The weather model's Brier score improved after humidity was added as a predictor.` → Brier score của model thời tiết tốt hơn sau khi thêm humidity.
**Liên kết tiếng Hàn:** `브라이어 점수`.

## 4. continuous ranked probability score /kənˈtɪnjuəs ræŋkt ˌprɑbəˈbɪləti skɔr/
**Part of speech:** noun
**Core meaning (English):** a score that compares a full continuous predictive distribution with the realized outcome by integrating differences between cumulative distributions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** score so sánh distribution liên tục đầy đủ với outcome thật bằng tích phân chênh giữa cumulative distribution.
**Grammar & collocations:** `continuous-ranked-probability-score evaluation` — evaluation; `score a density forecast` — chấm.
**Examples:** `The continuous ranked probability score favored the forecast with a narrower but still well-calibrated distribution.` → CRPS ủng hộ forecast hẹp hơn nhưng vẫn calibrated tốt.
**Liên kết tiếng Hàn:** `연속 순위 확률 점수`.

## 5. sharpness /ˈʃɑrpnəs/
**Part of speech:** noun
**Core meaning (English):** the concentration or narrowness of a predictive distribution, considered independently of whether it is correctly calibrated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức tập trung/hẹp của predictive distribution, tách khỏi việc distribution có calibrated đúng không.
**Grammar & collocations:** `forecast sharpness` — sharpness; `produce a concentrated predictive range` — tạo.
**Examples:** `The forecast gained sharpness by narrowing its interval, but its calibration deteriorated.` → Forecast sắc hơn vì interval hẹp lại nhưng calibration xấu đi.
**Liên kết tiếng Hàn:** `예측 예리도`.

## 6. forecast calibration /ˈfɔrˌkæst ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** agreement between predicted probabilities or intervals and the frequencies of outcomes observed over repeated forecasts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức prediction probability/interval khớp tần suất outcome thật qua nhiều forecast.
**Grammar & collocations:** `forecast-calibration check` — check; `compare nominal and empirical coverage` — so sánh.
**Examples:** `Forecast calibration was good because events predicted at forty percent occurred about forty percent of the time.` → Calibration tốt vì event dự đoán 40% xảy ra khoảng 40% thời gian.
**Liên kết tiếng Hàn:** `예측 보정`.

## 7. predictive density /prɪˈdɪktɪv ˈdɛnsəti/
**Part of speech:** noun
**Core meaning (English):** a probability density describing the range and relative likelihood of future values conditional on available information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** density xác suất mô tả range và likelihood tương đối của value tương lai theo information hiện có.
**Grammar & collocations:** `predictive-density estimate` — estimate; `integrate over parameter uncertainty` — tích phân.
**Examples:** `The predictive density placed most probability on moderate growth but retained a long downside tail.` → Predictive density đặt probability lớn ở growth vừa nhưng giữ đuôi giảm dài.
**Liên kết tiếng Hàn:** `예측 밀도`.

## 8. density forecast /ˈdɛnsəti ˈfɔrˌkæst/
**Part of speech:** noun
**Core meaning (English):** a forecast of an entire probability distribution for a future outcome rather than a single point prediction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** forecast cả distribution xác suất tương lai thay vì một point prediction.
**Grammar & collocations:** `density-forecast evaluation` — evaluation; `report a full distribution` — báo cáo.
**Examples:** `The density forecast showed how likely each range of electricity demand was for tomorrow.` → Density forecast cho thấy mỗi range demand điện ngày mai có khả năng bao nhiêu.
**Liên kết tiếng Hàn:** `밀도 예측`.

## 9. probability integral transform /ˌprɑbəˈbɪləti ˈɪntəɡrəl trænsˈfɔrm/
**Part of speech:** noun
**Core meaning (English):** the predictive cumulative probability assigned to the realized outcome, used to diagnose a forecast distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cumulative probability trong predictive distribution tại outcome thật, dùng chẩn đoán distribution forecast.
**Grammar & collocations:** `probability-integral-transform histogram` — histogram; `check uniformity` — kiểm tra.
**Examples:** `The probability integral transform showed too many values near zero, signaling an overly high forecast.` → Transform cho thấy quá nhiều value gần zero, báo forecast quá cao.
**Liên kết tiếng Hàn:** `확률 적분 변환`.

## 10. Diebold-Mariano test /ˈdiːboʊld mɑrˈjɑnoʊ tɛst/
**Part of speech:** noun
**Core meaning (English):** a test of whether two competing forecasts have equal expected predictive loss over a sequence of outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test xem hai forecast có expected loss bằng nhau qua chuỗi outcome không.
**Grammar & collocations:** `Diebold-Mariano-test statistic` — statistic; `compare forecast losses` — so sánh.
**Examples:** `The Diebold-Mariano test found no significant difference between the two demand forecasts.` → Test không thấy chênh lệch đáng kể giữa hai forecast demand.
**Liên kết tiếng Hàn:** `Diebold-Mariano 검정`.

## 11. forecast encompassing /ˈfɔrˌkæst ɪnˈkʌmpəsɪŋ/
**Part of speech:** noun
**Core meaning (English):** a property or test asking whether one forecast contains all useful information from another forecast.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** property/test xem một forecast đã chứa toàn bộ information hữu ích của forecast khác chưa.
**Grammar & collocations:** `forecast-encompassing test` — test; `add a rival forecast as a regressor` — đưa vào.
**Examples:** `The survey-based forecast did not encompass the information in the market-based forecast.` → Forecast khảo sát chưa bao quát information của forecast thị trường.
**Liên kết tiếng Hàn:** `예측 포괄성`.

## 12. forecast combination /ˈfɔrˌkæst ˌkɑmbəˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** a forecast formed by weighting or averaging predictions from multiple models or information sources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** forecast tạo bằng cách weighted/average prediction từ nhiều model hoặc source.
**Grammar & collocations:** `forecast-combination weight` — weight; `blend competing predictions` — trộn.
**Examples:** `Forecast combination reduced error when no single model performed best in every season.` → Kết hợp forecast giảm error khi không model nào tốt nhất mọi mùa.
**Liên kết tiếng Hàn:** `예측 결합`.

## 13. model confidence set /ˈmɑdəl ˈkɑnfədəns sɛt/
**Part of speech:** noun
**Core meaning (English):** a set of models that cannot be statistically distinguished from the best-performing model at a chosen confidence level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập model không thể phân biệt thống kê với model tốt nhất ở confidence level chọn.
**Grammar & collocations:** `model-confidence-set procedure` — procedure; `retain statistically competitive models` — giữ.
**Examples:** `The model confidence set retained three forecasts with indistinguishable predictive performance.` → Set giữ ba forecast có performance không phân biệt được.
**Liên kết tiếng Hàn:** `모형 신뢰 집합`.

## 14. out-of-sample loss /aʊt əv ˈsæmpəl lɔs/
**Part of speech:** noun
**Core meaning (English):** predictive error measured on observations that were not used to fit the forecasting model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error dự đoán đo trên observation không dùng để fit model.
**Grammar & collocations:** `out-of-sample-loss comparison` — comparison; `evaluate held-out forecasts` — đánh giá.
**Examples:** `Out-of-sample loss rose when the highly flexible model encountered a new economic regime.` → Loss ngoài sample tăng khi model quá linh hoạt gặp regime kinh tế mới.
**Liên kết tiếng Hàn:** `표본 외 손실`.

## 15. rolling window /ˈroʊlɪŋ ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** a fixed-length estimation sample that moves forward through time as new observations arrive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sample fit có độ dài cố định trượt dần theo thời gian khi observation mới đến.
**Grammar & collocations:** `rolling-window forecast` — forecast; `drop the oldest observation` — bỏ.
**Examples:** `The rolling window used the most recent five years to forecast next year's inflation.` → Rolling window dùng năm năm gần nhất để dự báo inflation năm tới.
**Liên kết tiếng Hàn:** `이동 창`.

## 16. expanding window /ɪkˈspændɪŋ ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** an estimation sample that begins at a fixed date and grows whenever a new observation is added.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sample bắt đầu từ ngày cố định và mở rộng mỗi khi có observation mới.
**Grammar & collocations:** `expanding-window evaluation` — evaluation; `retain the full history` — giữ.
**Examples:** `The expanding window retained every historical observation when updating the forecast.` → Expanding window giữ toàn bộ lịch sử khi update forecast.
**Liên kết tiếng Hàn:** `확장 창`.

## 17. real-time data /ˈriəl taɪm ˈdeɪtə/
**Part of speech:** noun
**Core meaning (English):** information available to a forecaster at the moment a forecast would actually have been made.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** information thật sự có sẵn tại thời điểm forecast được tạo.
**Grammar & collocations:** `real-time-data vintage` — vintage; `forecast with information available then` — dự báo.
**Examples:** `The evaluation used real-time data rather than later revisions that would not have been known.` → Evaluation dùng data real-time thay vì revision đến sau.
**Liên kết tiếng Hàn:** `실시간 자료`.

## 18. vintage data /ˈvɪntɪdʒ ˈdeɪtə/
**Part of speech:** noun
**Core meaning (English):** a historical release of a dataset preserved as it appeared at a particular publication date.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phiên bản lịch sử của dataset được lưu đúng như lúc công bố tại một ngày cụ thể.
**Grammar & collocations:** `data-vintage archive` — archive; `reconstruct an information set` — tái dựng.
**Examples:** `Vintage data prevented the backtest from using a revised unemployment figure released years later.` → Vintage data ngăn backtest dùng số thất nghiệp đã sửa công bố nhiều năm sau.
**Liên kết tiếng Hàn:** `빈티지 자료`.

## 19. forecast revision /ˈfɔrˌkæst rɪˈvɪʒən/
**Part of speech:** noun
**Core meaning (English):** a change to a previously issued forecast after new information or a changed model becomes available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi forecast đã công bố sau khi có information mới hoặc model đổi.
**Grammar & collocations:** `forecast-revision error` — error; `update a published projection` — cập nhật.
**Examples:** `The forecast revision reflected a surprise change in commodity prices.` → Revision phản ánh thay đổi bất ngờ của giá commodity.
**Liên kết tiếng Hàn:** `예측 수정`.

## 20. predictive interval /prɪˈdɪktɪv ˈɪntərvəl/
**Part of speech:** noun
**Core meaning (English):** an interval intended to contain a future individual outcome with a stated probability under the forecasting model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng được kỳ vọng chứa một outcome cá nhân tương lai với probability đã nêu.
**Grammar & collocations:** `predictive-interval coverage` — coverage; `forecast an individual future value` — dự báo.
**Examples:** `The predictive interval was wide because both parameter uncertainty and future shocks were substantial.` → Predictive interval rộng vì uncertainty parameter và shock tương lai đều lớn.
**Liên kết tiếng Hàn:** `예측 구간`.

## Review in context

A **proper scoring rule** can evaluate a probabilistic forecast through a **log score**, **Brier score**, or **continuous ranked probability score**. **Sharpness** rewards concentration, but **forecast calibration** checks whether probabilities and intervals match observed frequencies. A **predictive density** or **density forecast** can be diagnosed with the **probability integral transform**. The **Diebold-Mariano test** compares losses; **forecast encompassing**, **forecast combination**, and a **model confidence set** compare competing models. Analysts report **out-of-sample loss** using a **rolling window** or **expanding window**, preserve **real-time data** and **vintage data**, record each **forecast revision**, and assess **predictive interval** coverage.

**Bản dịch tiếng Việt:** **Proper scoring rule** đánh giá forecast xác suất bằng **log score**, **Brier score** hoặc **continuous ranked probability score**. **Sharpness** thưởng distribution tập trung, còn **forecast calibration** kiểm tra probability và interval có khớp tần suất thật không. **Predictive density** hoặc **density forecast** có thể chẩn đoán bằng **probability integral transform**. **Diebold-Mariano test** so sánh loss; **forecast encompassing**, **forecast combination** và **model confidence set** so sánh model. Analyst báo **out-of-sample loss** bằng **rolling window** hoặc **expanding window**, giữ **real-time data** và **vintage data**, ghi từng **forecast revision**, rồi đánh giá coverage của **predictive interval**.
