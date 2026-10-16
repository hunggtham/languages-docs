# C1 Vocabulary 15 — Threshold and regime-switching models

This lesson follows how econometricians model relationships that change when an indicator crosses a threshold or when an unobserved state shifts.

Flow: **threshold regression → threshold effect → threshold variable → regime-switching model → Markov-switching model → transition probability → state-dependent parameter → smooth transition model → transition function → change point → break date → sup-Wald test → Chow test → recursive residual → cumulative sum test → parameter instability → regime persistence → duration dependence → self-exciting threshold autoregression → regime-specific intercept**.

## 1. threshold regression /ˈθrɛʃˌhoʊld rɪˈɡrɛʃən/
**Part of speech:** noun
**Core meaning (English):** a regression in which coefficients or relationships change when a variable crosses an estimated or specified cutoff.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hồi quy đổi hệ số hoặc quan hệ khi một biến vượt qua ngưỡng được ước lượng hay quy định.
**Grammar & collocations:** `threshold-regression specification` — specification; `estimate a regime boundary` — ước lượng.
**Examples:** `Threshold regression showed that credit growth affected output differently above a debt ratio of sixty percent.` → Threshold regression cho thấy credit growth tác động output khác khi debt ratio trên 60%.
**Liên kết tiếng Hàn:** `임계값 회귀`.

## 2. threshold effect /ˈθrɛʃˌhoʊld ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** a change in the size or direction of an effect after a predictor passes a meaningful boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect đổi độ lớn hoặc hướng sau khi predictor vượt một ranh giới có ý nghĩa.
**Grammar & collocations:** `threshold-effect estimate` — estimate; `cross a policy threshold` — vượt qua.
**Examples:** `The threshold effect implied that modest inflation was harmless but higher inflation reduced investment.` → Threshold effect gợi ý lạm phát vừa phải không hại nhưng cao hơn làm giảm investment.
**Liên kết tiếng Hàn:** `임계 효과`.

## 3. threshold variable /ˈθrɛʃˌhoʊld ˈvɛriəbəl/
**Part of speech:** noun
**Core meaning (English):** the variable whose value determines which side of a threshold or which regime an observation belongs to.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến quyết định observation nằm bên nào của ngưỡng hoặc thuộc regime nào.
**Grammar & collocations:** `threshold-variable choice` — choice; `sort observations by the threshold variable` — phân loại.
**Examples:** `The unemployment rate served as the threshold variable separating weak and strong labor markets.` → Unemployment rate là threshold variable tách labor market yếu và mạnh.
**Liên kết tiếng Hàn:** `임계 변수`.

## 4. regime-switching model /ˈreɪʒiːm ˌswɪtʃɪŋ ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model in which the data-generating relationship can move between distinct states with different parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model cho phép quan hệ sinh data chuyển giữa các trạng thái có parameter khác nhau.
**Grammar & collocations:** `regime-switching specification` — specification; `allow the process to switch states` — cho phép.
**Examples:** `The regime-switching model distinguished expansion behavior from recession behavior.` → Model phân biệt hành vi giai đoạn mở rộng và suy thoái.
**Liên kết tiếng Hàn:** `국면 전환 모형`.

## 5. Markov-switching model /ˈmɑrkɔv ˌswɪtʃɪŋ ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a regime-switching model in which the next hidden state depends probabilistically on the current state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model chuyển regime trong đó state ẩn tiếp theo phụ thuộc xác suất vào state hiện tại.
**Grammar & collocations:** `Markov-switching process` — process; `infer a latent state sequence` — suy ra.
**Examples:** `The Markov-switching model estimated a high chance that a recession would follow another recession quarter.` → Model ước lượng xác suất cao suy thoái tiếp sau một quý suy thoái.
**Liên kết tiếng Hàn:** `마르코프 전환 모형`.

## 6. transition probability /trænˈzɪʃən ˌprɑbəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the probability that a process moves from one state to another over the next period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác suất process chuyển từ state này sang state khác trong kỳ kế tiếp.
**Grammar & collocations:** `transition-probability matrix` — matrix; `estimate a state change` — ước lượng.
**Examples:** `The transition probability from recovery to expansion rose after the central bank cut rates.` → Xác suất chuyển từ hồi phục sang mở rộng tăng sau khi ngân hàng trung ương giảm lãi.
**Liên kết tiếng Hàn:** `전이 확률`.

## 7. state-dependent parameter /steɪt dɪˈpɛndənt pəˈræmətər/
**Part of speech:** noun
**Core meaning (English):** a model parameter whose value is allowed to differ according to the current regime or latent state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parameter thay đổi tùy regime hoặc state ẩn hiện tại.
**Grammar & collocations:** `state-dependent coefficient` — coefficient; `estimate regime-specific effects` — ước lượng.
**Examples:** `The state-dependent parameter made the response to interest rates stronger during recessions.` → Parameter phụ thuộc state làm phản ứng với lãi suất mạnh hơn lúc suy thoái.
**Liên kết tiếng Hàn:** `상태 의존 매개변수`.

## 8. smooth transition model /smuːð trænˈzɪʃən ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model in which coefficients change gradually as a transition variable moves through a range rather than jumping at one cutoff.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model cho hệ số đổi dần khi transition variable đi qua một khoảng, không nhảy đột ngột tại một ngưỡng.
**Grammar & collocations:** `smooth-transition weight` — weight; `allow gradual adjustment` — cho phép.
**Examples:** `The smooth transition model let investment sensitivity decline gradually as uncertainty increased.` → Model cho độ nhạy investment giảm dần khi uncertainty tăng.
**Liên kết tiếng Hàn:** `smooth transition 모형`.

## 9. transition function /trænˈzɪʃən ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a function that maps a transition variable into the weight assigned to different regimes or parameter values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm biến giá trị transition variable thành trọng số cho các regime hoặc parameter khác nhau.
**Grammar & collocations:** `transition-function shape` — shape; `choose a logistic transition` — chọn.
**Examples:** `A logistic transition function gave the high-debt regime more weight as leverage rose.` → Transition function logistic cho regime nợ cao trọng số lớn hơn khi leverage tăng.
**Liên kết tiếng Hàn:** `전이 함수`.

## 10. change point /ˈtʃeɪndʒ pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a time or location at which the statistical behavior of a process changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời điểm hoặc vị trí mà hành vi thống kê của process đổi khác.
**Grammar & collocations:** `change-point estimate` — estimate; `locate a sudden shift` — xác định.
**Examples:** `The algorithm detected a change point when the volatility of the exchange rate doubled.` → Algorithm phát hiện change point khi volatility exchange rate tăng gấp đôi.
**Liên kết tiếng Hàn:** `변화점`.

## 11. break date /ˈbreɪk deɪt/
**Part of speech:** noun
**Core meaning (English):** the estimated date at which a structural relationship begins to differ from its earlier pattern.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngày ước lượng mà quan hệ structural bắt đầu khác pattern trước đó.
**Grammar & collocations:** `break-date confidence interval` — confidence interval; `estimate the intervention date` — ước lượng.
**Examples:** `The estimated break date occurred shortly after the exchange-rate regime changed.` → Break date ước lượng xảy ra ngay sau khi regime tỷ giá đổi.
**Liên kết tiếng Hàn:** `구조 변화 시점`.

## 12. sup-Wald test /ˌsʌp wɔld tɛst/
**Part of speech:** noun
**Core meaning (English):** a test that takes the largest Wald statistic over possible threshold or break locations to assess parameter change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test lấy Wald statistic lớn nhất qua các vị trí threshold/break để đánh giá parameter có đổi không.
**Grammar & collocations:** `sup-Wald-test statistic` — statistic; `scan candidate break points` — quét.
**Examples:** `The sup-Wald test rejected parameter stability at the five-percent level.` → Sup-Wald test bác bỏ sự ổn định parameter ở mức 5%.
**Liên kết tiếng Hàn:** `sup-Wald 검정`.

## 13. Chow test /tʃaʊ tɛst/
**Part of speech:** noun
**Core meaning (English):** a test of whether regression coefficients are the same across two groups or across periods separated by a specified date.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test xem regression coefficient có giống nhau giữa hai nhóm hoặc hai giai đoạn hay không.
**Grammar & collocations:** `Chow-test restriction` — restriction; `compare coefficients across periods` — so sánh.
**Examples:** `The Chow test compared the demand equation before and after the tax reform.` → Chow test so sánh phương trình cầu trước và sau cải cách thuế.
**Liên kết tiếng Hàn:** `Chow 검정`.

## 14. recursive residual /rɪˈkɝsɪv rɪˈzɪdʒuəl/
**Part of speech:** noun
**Core meaning (English):** a forecast error computed sequentially from a model fitted only to observations available before each new point.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** forecast error tính tuần tự, mỗi lần fit model chỉ bằng dữ liệu có trước điểm mới.
**Grammar & collocations:** `recursive-residual sequence` — sequence; `monitor one-step-ahead errors` — theo dõi.
**Examples:** `The recursive residuals became persistently positive after the policy announcement.` → Recursive residuals liên tục dương sau thông báo policy.
**Liên kết tiếng Hàn:** `재귀 잔차`.

## 15. cumulative sum test /ˈkjuːmjələtɪv sʌm tɛst/
**Part of speech:** noun
**Core meaning (English):** a stability test that tracks the cumulative movement of sequential residuals against boundaries expected under a stable model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test stability theo dõi tổng lũy tích residual tuần tự và so với biên của model ổn định.
**Grammar & collocations:** `cumulative-sum-test boundary` — boundary; `flag gradual drift` — báo hiệu.
**Examples:** `The cumulative sum test flagged gradual drift in the productivity equation.` → Cumulative sum test báo hiệu drift dần trong phương trình productivity.
**Liên kết tiếng Hàn:** `누적합 검정`.

## 16. parameter instability /pəˈræmətər ˌɪnstəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** a failure of model parameters to remain constant across time, groups, or states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parameter không giữ cố định theo thời gian, nhóm hoặc state.
**Grammar & collocations:** `parameter-instability diagnosis` — diagnosis; `test coefficient constancy` — kiểm tra.
**Examples:** `Parameter instability made a single long-run elasticity misleading.` → Parameter instability làm một long-run elasticity duy nhất trở nên gây hiểu lầm.
**Liên kết tiếng Hàn:** `매개변수 불안정성`.

## 17. regime persistence /ˈreɪʒiːm pərˈsɪstəns/
**Part of speech:** noun
**Core meaning (English):** the tendency for a process to remain in the same state once it has entered that state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xu hướng process ở lại regime hiện tại sau khi đã đi vào regime đó.
**Grammar & collocations:** `regime-persistence estimate` — estimate; `remain in a low-growth state` — duy trì.
**Examples:** `High regime persistence meant that a recession signal could last several quarters.` → Regime persistence cao nghĩa là tín hiệu suy thoái có thể kéo dài vài quý.
**Liên kết tiếng Hàn:** `국면 지속성`.

## 18. duration dependence /djʊˈreɪʃən dɪˈpɛndəns/
**Part of speech:** noun
**Core meaning (English):** dependence of the probability of leaving a state on how long the process has already remained there.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác suất rời state phụ thuộc thời gian process đã ở trong state đó.
**Grammar & collocations:** `duration-dependence test` — test; `model the chance of exit` — mô hình hóa.
**Examples:** `Duration dependence suggested that the chance of recovery changed after a long recession.` → Duration dependence cho thấy xác suất hồi phục đổi sau suy thoái dài.
**Liên kết tiếng Hàn:** `기간 의존성`.

## 19. self-exciting threshold autoregression /ˌsɛlf ɪɡˈsaɪtɪŋ ˈθrɛʃˌhoʊld ˌɔtoʊˌrɛɡəˈrɛʃən/
**Part of speech:** noun
**Core meaning (English):** a threshold autoregression in which the process's own lagged value determines which dynamic regime applies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** autoregression có threshold mà chính lagged value của process quyết định regime động lực.
**Grammar & collocations:** `self-exciting-threshold specification` — specification; `switch on a lagged value` — chuyển theo.
**Examples:** `The self-exciting threshold autoregression switched dynamics when the lagged growth rate crossed zero.` → Model đổi dynamics khi growth rate trễ vượt qua không.
**Liên kết tiếng Hàn:** `자기 유발 임계 자기회귀`.

## 20. regime-specific intercept /reɪʒiːm spəˈsɪfɪk ˈɪntərˌsɛpt/
**Part of speech:** noun
**Core meaning (English):** an intercept term whose level is allowed to differ between regimes in a switching model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** intercept có mức khác nhau giữa các regime trong switching model.
**Grammar & collocations:** `regime-specific-intercept shift` — shift; `allow different baseline levels` — cho phép.
**Examples:** `The recession regime had a lower regime-specific intercept than the expansion regime.` → Regime suy thoái có intercept riêng thấp hơn regime mở rộng.
**Liên kết tiếng Hàn:** `국면별 절편`.

## Review in context

A **threshold regression** can reveal a **threshold effect** when a **threshold variable** crosses a boundary. A **regime-switching model**, including a **Markov-switching model**, uses a **transition probability** and may assign a **state-dependent parameter** to each hidden state. A **smooth transition model** applies a **transition function** so that movement between states is gradual. Analysts search for a **change point** and estimate a **break date**, then use a **sup-Wald test** or **Chow test** to assess a break. **Recursive residuals** and a **cumulative sum test** can expose **parameter instability**. High **regime persistence** and **duration dependence** describe how long states last; a **self-exciting threshold autoregression** lets its own lagged value trigger a switch, while a **regime-specific intercept** captures different baseline levels.

**Bản dịch tiếng Việt:** **Threshold regression** có thể cho thấy **threshold effect** khi **threshold variable** vượt một ranh giới. **Regime-switching model**, gồm cả **Markov-switching model**, dùng **transition probability** và có thể gán **state-dependent parameter** cho từng state ẩn. **Smooth transition model** dùng **transition function** để chuyển giữa các state dần dần. Analyst tìm **change point**, ước lượng **break date**, rồi dùng **sup-Wald test** hoặc **Chow test** để đánh giá break. **Recursive residual** và **cumulative sum test** có thể lộ **parameter instability**. **Regime persistence** cao và **duration dependence** mô tả state kéo dài bao lâu; **self-exciting threshold autoregression** để lagged value của chính process kích hoạt chuyển regime, còn **regime-specific intercept** nắm các baseline level khác nhau.
