# C1 Vocabulary 23 — Dynamic panels and system GMM

This lesson follows how panel estimators handle lagged outcomes, persistent regressors, and many instruments in dynamic settings.

Flow: **dynamic panel model → lagged dependent variable → Nickell bias → Arellano-Bond estimator → system GMM → difference GMM → instrument lag → collapsed instrument → forward orthogonal deviations → predetermined variable → strictly exogenous → initial conditions → Windmeijer correction → persistent regressor → dynamic treatment effect → difference transformation → within transformation → lag depth → instrument count → instrument matrix**.

## 1. dynamic panel model /daɪˈnæmɪk ˈpænəl ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a panel model in which current outcomes depend on past outcomes as well as observed unit characteristics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model panel trong đó outcome hiện tại phụ thuộc outcome quá khứ và characteristic quan sát.
**Grammar & collocations:** `dynamic-panel specification` — specification; `model persistence over time` — mô hình hóa.
**Examples:** `The dynamic panel model linked current employment to each worker's employment last year.` → Model liên kết employment hiện tại với employment năm trước.
**Liên kết tiếng Hàn:** `동적 패널 모형`.

## 2. lagged dependent variable /læɡd dɪˈpɛndənt ˈvɛriəbəl/
**Part of speech:** noun
**Core meaning (English):** a previous-period value of the outcome included as a predictor of the current outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị outcome kỳ trước được đưa làm predictor cho outcome hiện tại.
**Grammar & collocations:** `lagged-dependent-variable coefficient` — coefficient; `capture outcome persistence` — nắm.
**Examples:** `The lagged dependent variable captured how last quarter's sales affected this quarter's sales.` → Biến phụ thuộc trễ nắm ảnh hưởng sales quý trước lên quý này.
**Liên kết tiếng Hàn:** `시차 종속변수`.

## 3. Nickell bias /ˈnɪkəl baɪəs/
**Part of speech:** noun
**Core meaning (English):** finite-sample bias in a fixed-effects dynamic panel estimator caused by correlation between transformed lagged outcomes and transformed errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bias mẫu hữu hạn trong FE dynamic panel do lagged outcome biến đổi tương quan với error biến đổi.
**Grammar & collocations:** `Nickell-bias correction` — correction; `increase the time dimension` — tăng.
**Examples:** `Nickell bias was substantial when the panel had many firms but only two years of data.` → Nickell bias đáng kể khi nhiều firm nhưng chỉ có hai năm data.
**Liên kết tiếng Hàn:** `Nickell 편향`.

## 4. Arellano-Bond estimator /ˌɑrəˈjɑnoʊ bɑnd ˌɛstəˈmeɪtər/
**Part of speech:** noun
**Core meaning (English):** a difference-GMM estimator that uses lagged levels as instruments for a transformed dynamic panel equation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator difference-GMM dùng level trễ làm instrument cho phương trình dynamic đã biến đổi.
**Grammar & collocations:** `Arellano-Bond specification` — specification; `instrument differenced equations` — làm instrument.
**Examples:** `The Arellano-Bond estimator used two-period lags to instrument the differenced employment equation.` → Estimator dùng lag hai kỳ làm instrument cho phương trình employment sai phân.
**Liên kết tiếng Hàn:** `Arellano-Bond 추정량`.

## 5. system GMM /ˈsɪstəm dʒiː ɛm ɛm/
**Part of speech:** noun
**Core meaning (English):** a GMM estimator that combines equations in differences and levels to improve efficiency when additional restrictions are credible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** GMM ghép phương trình sai phân và level để tăng efficiency khi restriction thêm đáng tin.
**Grammar & collocations:** `system-GMM estimator` — estimator; `combine level and difference moments` — kết hợp.
**Examples:** `System GMM added level equations to recover information lost by differencing a persistent series.` → System GMM thêm phương trình level để lấy lại information mất khi sai phân series bền.
**Liên kết tiếng Hàn:** `시스템 GMM`.

## 6. difference GMM /ˈdɪfərəns dʒiː ɛm ɛm/
**Part of speech:** noun
**Core meaning (English):** a GMM procedure that removes unit-specific fixed effects by differencing before estimating the dynamic equation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** GMM loại fixed effect theo unit bằng sai phân trước khi ước lượng equation động.
**Grammar & collocations:** `difference-GMM moment` — moment; `remove time-invariant heterogeneity` — loại.
**Examples:** `Difference GMM removed the permanent firm effect before using lagged sales as instruments.` → Difference GMM loại effect cố định của firm trước khi dùng sales trễ làm instrument.
**Liên kết tiếng Hàn:** `차분 GMM`.

## 7. instrument lag /ˈɪnstrəmənt læɡ/
**Part of speech:** noun
**Core meaning (English):** a lagged value selected to serve as an instrument because it is correlated with a current regressor but plausibly unrelated to the current error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị trễ được chọn làm instrument vì liên quan regressor hiện tại nhưng có vẻ không liên quan current error.
**Grammar & collocations:** `instrument-lag range` — range; `restrict available lags` — giới hạn.
**Examples:** `The specification used the third and fourth instrument lags to avoid correlation with recent shocks.` → Specification dùng lag thứ ba và tư để tránh correlation với shock gần.
**Liên kết tiếng Hàn:** `도구변수 시차`.

## 8. collapsed instrument /kəˈlæpst ˈɪnstrəmənt/
**Part of speech:** noun
**Core meaning (English):** an instrument matrix compressed so that multiple lag-specific columns are combined to limit instrument proliferation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** instrument matrix được nén, gộp nhiều cột theo lag để hạn chế quá nhiều instrument.
**Grammar & collocations:** `collapsed-instrument matrix` — matrix; `reduce instrument count` — giảm.
**Examples:** `A collapsed instrument kept the system-GMM model from having more instruments than firms.` → Instrument nén giúp model không có instrument nhiều hơn firm.
**Liên kết tiếng Hàn:** `축약 도구변수`.

## 9. forward orthogonal deviations /ˈfɔrwərd ˌɔrθəɡəˈnæəl dɪˌviˈeɪʃənz/
**Part of speech:** noun
**Core meaning (English):** a transformation that subtracts the future average from each observation while preserving sample size and reducing some serial-correlation problems.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép biến đổi trừ average tương lai khỏi observation, giữ sample size và giảm một số vấn đề correlation.
**Grammar & collocations:** `forward-orthogonal-deviations transformation` — transformation; `subtract future means` — trừ.
**Examples:** `Forward orthogonal deviations preserved the first observation for firms with an unbalanced panel.` → Deviations giữ observation đầu cho firm có panel không cân bằng.
**Liên kết tiếng Hàn:** `전방 직교 편차`.

## 10. predetermined variable /ˌpriːdɪˈtɝmənd ˈvɛriəbəl/
**Part of speech:** noun
**Core meaning (English):** a variable that may respond to past shocks but is assumed not to respond to the current-period error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến có thể phản ứng shock quá khứ nhưng không phản ứng current error.
**Grammar & collocations:** `predetermined-variable restriction` — restriction; `use lagged values as instruments` — dùng.
**Examples:** `Investment was treated as a predetermined variable because managers could react with a delay.` → Investment là predetermined vì manager phản ứng với độ trễ.
**Liên kết tiếng Hàn:** `사전 결정 변수`.

## 11. strictly exogenous /ˈstrɪktli ˌɛksɑdʒənəs/
**Part of speech:** adjective
**Core meaning (English):** unrelated to the errors from every period in the model, including errors that occur before and after the current observation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không liên quan error của mọi kỳ, kể cả trước và sau observation hiện tại.
**Grammar & collocations:** `strictly-exogenous regressor` — regressor; `condition on all-period errors` — điều kiện.
**Examples:** `Weather in a distant region was treated as strictly exogenous to the firm's productivity shock.` → Weather vùng xa được coi không liên quan shock productivity của firm.
**Liên kết tiếng Hàn:** `엄격한 외생성`.

## 12. initial conditions /ɪˈnɪʃəl kənˈdɪʃənz/
**Part of speech:** noun
**Core meaning (English):** the starting values and assumptions needed to describe a dynamic process before the observed panel begins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value và assumption ban đầu cần để mô tả process động trước khi panel quan sát bắt đầu.
**Grammar & collocations:** `initial-conditions problem` — problem; `condition on the starting state` — điều kiện.
**Examples:** `The model handled initial conditions explicitly because firms entered the panel at different ages.` → Model xử lý initial conditions vì firm vào panel ở tuổi khác nhau.
**Liên kết tiếng Hàn:** `초기 조건`.

## 13. Windmeijer correction /ˈvɪntmaɪər kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** a finite-sample adjustment to the estimated two-step GMM covariance matrix.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều chỉnh mẫu hữu hạn cho covariance matrix của two-step GMM.
**Grammar & collocations:** `Windmeijer-corrected standard error` — standard error; `adjust two-step inference` — điều chỉnh.
**Examples:** `The Windmeijer correction made the two-step standard errors larger and more credible.` → Correction làm standard error two-step lớn hơn và đáng tin hơn.
**Liên kết tiếng Hàn:** `Windmeijer 보정`.

## 14. persistent regressor /pərˈsɪstənt rɪˈɡrɛsər/
**Part of speech:** noun
**Core meaning (English):** a predictor whose values change slowly over time and therefore remain highly correlated across periods.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** predictor đổi chậm, giữ correlation cao giữa các kỳ.
**Grammar & collocations:** `persistent-regressor problem` — problem; `use long lags cautiously` — thận trọng.
**Examples:** `A persistent regressor made distant lags weakly informative despite their high correlation with the current value.` → Regressor bền làm lag xa ít information dù correlation cao.
**Liên kết tiếng Hàn:** `지속적 회귀변수`.

## 15. dynamic treatment effect /daɪˈnæmɪk ˈtriːtmənt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** a causal effect that varies with time since treatment, treatment history, or the evolving state of a unit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** causal effect đổi theo thời gian sau treatment, lịch sử treatment hoặc state đang tiến triển.
**Grammar & collocations:** `dynamic-treatment-effect profile` — profile; `trace delayed responses` — theo dõi.
**Examples:** `The dynamic treatment effect was small immediately but grew after three quarters.` → Effect động nhỏ ngay lúc đầu nhưng tăng sau ba quý.
**Liên kết tiếng Hàn:** `동적 처치 효과`.

## 16. difference transformation /ˈdɪfərəns ˌtrænsfərˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a transformation that subtracts an observation's previous-period value to remove time-invariant unit components.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép trừ value kỳ trước để loại component cố định theo unit.
**Grammar & collocations:** `difference-transformation equation` — equation; `remove a fixed effect` — loại.
**Examples:** `The difference transformation removed each firm's constant management culture from the equation.` → Transformation loại văn hóa quản lý cố định của firm.
**Liên kết tiếng Hàn:** `차분 변환`.

## 17. within transformation /wɪˈðɪn ˌtrænsfərˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a transformation that subtracts each unit's time average from its observations to eliminate a unit fixed effect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trừ time average của từng unit khỏi observation để loại fixed effect unit.
**Grammar & collocations:** `within-transformation estimator` — estimator; `demean a panel variable` — trừ mean.
**Examples:** `The within transformation compared each worker with the worker's own average outcome.` → Transformation so sánh worker với average outcome của chính worker đó.
**Liên kết tiếng Hàn:** `개체 내 변환`.

## 18. lag depth /læɡ dɛpθ/
**Part of speech:** noun
**Core meaning (English):** the farthest lag included as a predictor or instrument in a dynamic panel specification.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lag xa nhất được đưa vào model hoặc instrument.
**Grammar & collocations:** `lag-depth restriction` — restriction; `limit the instrument window` — giới hạn.
**Examples:** `Reducing lag depth prevented the instrument matrix from becoming unwieldy.` → Giảm lag depth ngăn instrument matrix quá cồng kềnh.
**Liên kết tiếng Hàn:** `시차 깊이`.

## 19. instrument count /ˈɪnstrəmənt kaʊnt/
**Part of speech:** noun
**Core meaning (English):** the number of instrument columns used to identify the endogenous terms in an estimation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số cột instrument dùng để identify term endogenous.
**Grammar & collocations:** `instrument-count diagnostic` — diagnostic; `keep instruments below the group count` — giữ.
**Examples:** `The report listed the instrument count beside the number of firms in the panel.` → Report ghi instrument count cạnh số firm trong panel.
**Liên kết tiếng Hàn:** `도구변수 개수`.

## 20. instrument matrix /ˈɪnstrəmənt ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** the matrix containing the excluded and internal instruments used to form sample moment conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận chứa excluded/internal instrument để tạo sample moment condition.
**Grammar & collocations:** `instrument-matrix rank` — rank; `construct lag columns` — xây dựng.
**Examples:** `The instrument matrix contained separate lag columns for each endogenous panel variable.` → Instrument matrix có cột lag riêng cho từng biến panel endogenous.
**Liên kết tiếng Hàn:** `도구변수 행렬`.

## Review in context

A **dynamic panel model** often includes a **lagged dependent variable**, so a fixed-effects estimate can suffer **Nickell bias**. The **Arellano-Bond estimator**, **system GMM**, and **difference GMM** use an **instrument lag**, sometimes stored as a **collapsed instrument** after **forward orthogonal deviations**. A **predetermined variable** reacts to past shocks, whereas a **strictly exogenous** regressor is unrelated to errors in every period. Analysts address **initial conditions**, apply the **Windmeijer correction**, and watch for a **persistent regressor** when estimating a **dynamic treatment effect**. A **difference transformation** or **within transformation** removes fixed effects; **lag depth**, **instrument count**, and the **instrument matrix** determine whether the specification remains credible.

**Bản dịch tiếng Việt:** **Dynamic panel model** thường có **lagged dependent variable**, nên estimate fixed effect có thể chịu **Nickell bias**. **Arellano-Bond estimator**, **system GMM** và **difference GMM** dùng **instrument lag**, đôi khi lưu thành **collapsed instrument** sau **forward orthogonal deviations**. **Predetermined variable** phản ứng với shock quá khứ, còn regressor **strictly exogenous** không liên quan error ở mọi kỳ. Analyst xử lý **initial conditions**, áp **Windmeijer correction** và chú ý **persistent regressor** khi ước lượng **dynamic treatment effect**. **Difference transformation** hoặc **within transformation** loại fixed effect; **lag depth**, **instrument count** và **instrument matrix** quyết định specification còn đáng tin hay không.
