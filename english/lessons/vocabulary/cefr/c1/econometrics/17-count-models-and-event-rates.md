# C1 Vocabulary 17 — Count models and event rates

This lesson follows how econometricians model nonnegative integer outcomes, repeated events, and rates when ordinary continuous-outcome regression is inappropriate.

Flow: **count outcome → count data → Poisson regression → Poisson mean → equidispersion → overdispersion → dispersion parameter → negative binomial regression → exposure offset → incidence rate → event intensity → zero-inflated model → excess zeros → hurdle model → count process → conditional mean → discrete-time hazard → complementary log-log → duration model → structural zero**.

## 1. count outcome /kaʊnt ˈaʊtˌkʌm/
**Part of speech:** noun
**Core meaning (English):** an outcome that records how many times an event occurs for a unit during a defined period or exposure window.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** outcome đếm số lần event xảy ra với một unit trong khoảng thời gian hoặc exposure xác định.
**Grammar & collocations:** `count-outcome model` — model; `record event occurrences` — ghi nhận.
**Examples:** `The number of customer complaints was treated as a count outcome rather than a continuous score.` → Số complaint của khách được xem là count outcome chứ không phải điểm liên tục.
**Liên kết tiếng Hàn:** `계수 결과`.

## 2. count data /kaʊnt ˈdeɪtə/
**Part of speech:** noun
**Core meaning (English):** data consisting of nonnegative integer values that represent event frequencies or item totals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dữ liệu gồm số nguyên không âm, đại diện tần suất event hoặc tổng item.
**Grammar & collocations:** `count-data likelihood` — likelihood; `model event frequencies` — mô hình hóa.
**Examples:** `Count data often contain many small values and a long right tail of frequent events.` → Count data thường có nhiều value nhỏ và đuôi phải dài của event thường xuyên.
**Liên kết tiếng Hàn:** `계수 자료`.

## 3. Poisson regression /ˈpwɑsɑn rɪˈɡrɛʃən/
**Part of speech:** noun
**Core meaning (English):** a regression for counts that models the logarithm of the expected count as a linear function of predictors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hồi quy count model log của expected count như hàm tuyến tính của predictor.
**Grammar & collocations:** `Poisson-regression coefficient` — coefficient; `estimate an event rate` — ước lượng.
**Examples:** `Poisson regression estimated how road design changed the expected number of crashes.` → Poisson regression ước lượng road design đổi số crash kỳ vọng ra sao.
**Liên kết tiếng Hàn:** `포아송 회귀`.

## 4. Poisson mean /ˈpwɑsɑn miːn/
**Part of speech:** noun
**Core meaning (English):** the expected count that determines both the location and, under the Poisson assumption, the variance of the distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** expected count quyết định trung tâm và, theo giả định Poisson, cả variance của distribution.
**Grammar & collocations:** `Poisson-mean function` — function; `link predictors to the expected count` — nối.
**Examples:** `The Poisson mean rose with population size after the model included an exposure offset.` → Poisson mean tăng theo population sau khi model thêm exposure offset.
**Liên kết tiếng Hàn:** `포아송 평균`.

## 5. equidispersion /ˌiːkwaɪdɪˈspɝʒən/
**Part of speech:** noun
**Core meaning (English):** the condition in which a count distribution's variance equals its mean.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trạng thái variance của count distribution bằng mean.
**Grammar & collocations:** `equidispersion assumption` — assumption; `check mean-variance equality` — kiểm tra.
**Examples:** `The analyst tested equidispersion before relying on the standard Poisson variance.` → Analyst kiểm tra equidispersion trước khi tin variance Poisson chuẩn.
**Liên kết tiếng Hàn:** `등산포성`.

## 6. overdispersion /ˌoʊvərdɪˈspɝʒən/
**Part of speech:** noun
**Core meaning (English):** a condition in which the variance of count data exceeds its mean, often because units differ in unobserved ways.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variance count data lớn hơn mean, thường vì unit khác nhau theo cách chưa quan sát.
**Grammar & collocations:** `overdispersion diagnostic` — diagnostic; `allow extra-Poisson variation` — cho phép.
**Examples:** `Overdispersion made the ordinary Poisson standard errors too small.` → Overdispersion làm standard error Poisson thường quá nhỏ.
**Liên kết tiếng Hàn:** `과산포`.

## 7. dispersion parameter /dɪˈspɝʒən pəˈræmətər/
**Part of speech:** noun
**Core meaning (English):** a parameter that controls how much a count distribution's variance departs from the mean-based reference pattern.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parameter kiểm soát variance lệch khỏi pattern tham chiếu dựa trên mean bao nhiêu.
**Grammar & collocations:** `dispersion-parameter estimate` — estimate; `model residual heterogeneity` — mô hình hóa.
**Examples:** `The estimated dispersion parameter confirmed substantial heterogeneity across neighborhoods.` → Dispersion parameter ước lượng xác nhận heterogeneity đáng kể giữa các khu phố.
**Liên kết tiếng Hàn:** `산포 매개변수`.

## 8. negative binomial regression /ˈnɛɡətɪv baɪˈnoʊmiəl rɪˈɡrɛʃən/
**Part of speech:** noun
**Core meaning (English):** a count regression that introduces an additional variance component to handle overdispersion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hồi quy count thêm thành phần variance để xử lý overdispersion.
**Grammar & collocations:** `negative-binomial-regression fit` — fit; `absorb unobserved heterogeneity` — hấp thụ.
**Examples:** `Negative binomial regression fit the hospital-visit counts better than Poisson regression.` → Negative binomial regression fit count lượt khám tốt hơn Poisson.
**Liên kết tiếng Hàn:** `음이항 회귀`.

## 9. exposure offset /ɪkˈspoʊʒər ˈɔfˌsɛt/
**Part of speech:** noun
**Core meaning (English):** a fixed log-scale adjustment that accounts for different amounts of time, population, or opportunity at risk.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều chỉnh cố định trên log scale cho khác nhau về thời gian, population hoặc cơ hội chịu rủi ro.
**Grammar & collocations:** `exposure-offset term` — term; `standardize counts by time at risk` — chuẩn hóa.
**Examples:** `The model used person-years as an exposure offset when comparing disease counts.` → Model dùng person-years làm exposure offset khi so sánh count bệnh.
**Liên kết tiếng Hàn:** `노출 오프셋`.

## 10. incidence rate /ˈɪnsədəns reɪt/
**Part of speech:** noun
**Core meaning (English):** the number of new events divided by the amount of population-time or exposure over which they could occur.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số event mới chia cho population-time hoặc exposure nơi event có thể xảy ra.
**Grammar & collocations:** `incidence-rate comparison` — comparison; `express events per person-year` — biểu thị.
**Examples:** `The incidence rate fell after the vaccination campaign, even though the enrolled population grew.` → Incidence rate giảm sau chiến dịch vaccine dù population đăng ký tăng.
**Liên kết tiếng Hàn:** `발생률`.

## 11. event intensity /ɪˈvɛnt ɪnˈtɛnsəti/
**Part of speech:** noun
**Core meaning (English):** the instantaneous rate at which an event is expected to occur given the history and current conditions of a process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ tức thời event được kỳ vọng xảy ra dựa trên history và điều kiện hiện tại.
**Grammar & collocations:** `event-intensity function` — function; `condition on the event history` — điều kiện hóa.
**Examples:** `The event intensity increased when the system had accumulated several unresolved failures.` → Event intensity tăng khi hệ thống tích lũy nhiều lỗi chưa giải quyết.
**Liên kết tiếng Hàn:** `사건 강도`.

## 12. zero-inflated model /ˈzɪroʊ ɪnˈfleɪtəd ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a mixture model that separates a process generating structural zeros from a count process generating zeros and positive values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model mixture tách process tạo zero cấu trúc khỏi count process tạo zero và value dương.
**Grammar & collocations:** `zero-inflated specification` — specification; `separate zero sources` — tách.
**Examples:** `The zero-inflated model distinguished households that never used transit from households that simply had no trip that week.` → Model tách hộ không bao giờ đi transit khỏi hộ chỉ không có chuyến tuần đó.
**Liên kết tiếng Hàn:** `영과잉 모형`.

## 13. excess zeros /ɪkˈsɛs ˈzɪroʊz/
**Part of speech:** noun
**Core meaning (English):** more zero counts than a standard count distribution would reasonably predict.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số zero nhiều hơn mức distribution count chuẩn dự đoán hợp lý.
**Grammar & collocations:** `excess-zero diagnosis` — diagnosis; `account for structural non-events` — tính đến.
**Examples:** `Excess zeros appeared because many firms were never exposed to the market at all.` → Excess zeros xuất hiện vì nhiều công ty chưa từng tiếp xúc thị trường.
**Liên kết tiếng Hàn:** `과잉 영`.

## 14. hurdle model /ˈhɝdəl ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a two-part count model with one process for crossing from zero to a positive value and another for the size of positive counts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model count hai phần: một process vượt từ zero sang dương, phần kia quyết định độ lớn count dương.
**Grammar & collocations:** `hurdle-model component` — component; `model participation and frequency separately` — mô hình hóa.
**Examples:** `The hurdle model first estimated whether a patient returned and then how many returns occurred.` → Hurdle model trước hết ước lượng bệnh nhân có quay lại không rồi số lần quay lại.
**Liên kết tiếng Hàn:** `허들 모형`.

## 15. count process /kaʊnt ˈprɑsɛs/
**Part of speech:** noun
**Core meaning (English):** a stochastic process that records the accumulated number of events up to each point in time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process ngẫu nhiên ghi số event tích lũy đến từng thời điểm.
**Grammar & collocations:** `count-process increment` — increment; `track arrivals over time` — theo dõi.
**Examples:** `The count process increased by one whenever a machine alarm was triggered.` → Count process tăng một mỗi khi alarm máy được kích hoạt.
**Liên kết tiếng Hàn:** `계수 과정`.

## 16. conditional mean /kənˈdɪʃənəl miːn/
**Part of speech:** noun
**Core meaning (English):** the expected value of an outcome after conditioning on specified covariates, history, or exposure information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị kỳ vọng của outcome sau khi điều kiện hóa theo covariate, history hoặc exposure.
**Grammar & collocations:** `conditional-mean restriction` — restriction; `relate expected counts to covariates` — liên hệ.
**Examples:** `The conditional mean rose with traffic volume after weather and road length were held in the model.` → Conditional mean tăng theo traffic volume sau khi đưa weather và road length vào model.
**Liên kết tiếng Hàn:** `조건부 평균`.

## 17. discrete-time hazard /dɪˈskriːt taɪm ˈhæzərd/
**Part of speech:** noun
**Core meaning (English):** the probability that an event occurs in a particular time interval given that it has not occurred earlier.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác suất event xảy ra trong interval khi event chưa xảy ra trước đó.
**Grammar & collocations:** `discrete-time-hazard model` — model; `condition on surviving to the interval` — điều kiện.
**Examples:** `The discrete-time hazard was highest in the first month after enrollment.` → Discrete-time hazard cao nhất trong tháng đầu sau enrollment.
**Liên kết tiếng Hàn:** `이산 시간 위험도`.

## 18. complementary log-log /ˌkɑmpləˈmɛntəri lɔɡ lɔɡ/
**Part of speech:** noun
**Core meaning (English):** a link function often used for discrete-time hazards because it corresponds to an underlying continuous-time event process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** link function thường dùng cho discrete-time hazard, gắn với process event thời gian liên tục bên dưới.
**Grammar & collocations:** `complementary-log-log link` — link; `map interval risk to a linear predictor` — ánh xạ.
**Examples:** `The complementary log-log link converted interval-specific failure risk into a hazard-style model.` → Link chuyển risk từng interval thành model kiểu hazard.
**Liên kết tiếng Hàn:** `보완 로그 로그 링크`.

## 19. duration model /djʊˈreɪʃən ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model for the length of time until an event occurs, with methods for censoring and changing risk over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model cho khoảng thời gian đến event, có xử lý censoring và risk đổi theo thời gian.
**Grammar & collocations:** `duration-model estimate` — estimate; `analyze time until exit` — phân tích.
**Examples:** `The duration model estimated how long a job seeker remained unemployed before finding work.` → Duration model ước lượng người tìm việc thất nghiệp bao lâu trước khi có việc.
**Liên kết tiếng Hàn:** `지속 기간 모형`.

## 20. structural zero /ˈstrʌktʃərəl ˈzɪroʊ/
**Part of speech:** noun
**Core meaning (English):** a zero that occurs because an event is impossible or a unit is not at risk, not because a random count happened to be zero.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** zero do event không thể xảy ra hoặc unit không chịu risk, không phải zero ngẫu nhiên.
**Grammar & collocations:** `structural-zero component` — component; `separate impossible events from chance zeros` — tách.
**Examples:** `A structural zero occurred when a firm had no facility capable of producing the regulated product.` → Structural zero xảy ra khi công ty không có cơ sở sản xuất sản phẩm bị quản lý.
**Liên kết tiếng Hàn:** `구조적 영`.

## Review in context

A **count outcome** is a form of **count data**. **Poisson regression** models the **Poisson mean** under **equidispersion**, but **overdispersion** may require a **dispersion parameter** and **negative binomial regression**. An **exposure offset** converts counts into an **incidence rate**, while **event intensity** describes the instantaneous event pace. A **zero-inflated model** can separate **excess zeros**, and a **hurdle model** separates crossing zero from positive frequency. A **count process** records accumulated events, and its **conditional mean** can depend on history. A **discrete-time hazard** can use a **complementary log-log** link; a **duration model** follows time to an event, including **structural zeros** when a unit was never at risk.

**Bản dịch tiếng Việt:** **Count outcome** là một dạng **count data**. **Poisson regression** model **Poisson mean** theo **equidispersion**, nhưng **overdispersion** có thể cần **dispersion parameter** và **negative binomial regression**. **Exposure offset** chuyển count thành **incidence rate**, còn **event intensity** mô tả tốc độ event tức thời. **Zero-inflated model** có thể tách **excess zeros**, và **hurdle model** tách việc vượt zero khỏi tần suất dương. **Count process** ghi event tích lũy, còn **conditional mean** có thể phụ thuộc history. **Discrete-time hazard** có thể dùng link **complementary log-log**; **duration model** theo dõi thời gian đến event, kể cả **structural zeros** khi unit chưa từng chịu risk.
