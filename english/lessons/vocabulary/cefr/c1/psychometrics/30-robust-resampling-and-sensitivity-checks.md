# C1 Vocabulary — Robust resampling and sensitivity checks

This lesson develops the vocabulary for testing whether an estimate remains credible under resampling, unusual observations, and imperfect model assumptions.

Flow: **bootstrap resample → parametric bootstrap → nonparametric bootstrap → cluster bootstrap → wild bootstrap → jackknife estimate → permutation distribution → finite-sample correction → small-sample adjustment → degrees-of-freedom correction → sandwich variance → heteroskedasticity-consistent variance → robust covariance → influence function → leverage point → case deletion → sensitivity curve → breakdown point → robustness weight → studentized bootstrap**.

## 1. bootstrap resample /ˈbuːtˌstræp riˈsæmpəl/
**Part of speech:** noun
**Core meaning (English):** a sample created by repeatedly drawing observations from the original data with replacement to study estimate variability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mẫu mới tạo bằng rút lại observation có hoàn lại để xem estimate dao động.
**Grammar & collocations:** `bootstrap-resample distribution` — distribution; `recompute an estimate` — tính lại.
**Examples:** `Each bootstrap resample produced a slightly different reliability estimate.` → Mỗi mẫu bootstrap cho reliability estimate hơi khác.
**Liên kết tiếng Hàn:** `부트스트랩 재표본`.

## 2. parametric bootstrap /ˌpærəˈmɛtrɪk ˈbuːtˌstræp/
**Part of speech:** noun
**Core meaning (English):** a bootstrap procedure that generates new data from a fitted probability model rather than directly from the observed cases.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bootstrap tạo data mới từ probability model đã fit.
**Grammar & collocations:** `parametric-bootstrap simulation` — simulation; `draw from a fitted distribution` — lấy mẫu.
**Examples:** `The parametric bootstrap preserved the estimated item-response shape while varying the sample.` → Bootstrap giữ shape item-response và đổi sample.
**Liên kết tiếng Hàn:** `모수 부트스트랩`.

## 3. nonparametric bootstrap /ˌnɑnˌpærəˈmɛtrɪk ˈbuːtˌstræp/
**Part of speech:** noun
**Core meaning (English):** a bootstrap procedure that resamples observed cases with minimal assumptions about a population distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resample case thật mà ít giả định phân bố.
**Grammar & collocations:** `nonparametric-bootstrap interval` — interval; `resample intact observations` — lấy lại.
**Examples:** `A nonparametric bootstrap gave a wider interval than the normal-theory approximation.` → Bootstrap phi tham số cho interval rộng hơn.
**Liên kết tiếng Hàn:** `비모수 부트스트랩`.

## 4. cluster bootstrap /ˈklʌstər ˈbuːtˌstræp/
**Part of speech:** noun
**Core meaning (English):** a bootstrap procedure that resamples whole clusters rather than individual observations to preserve within-cluster dependence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resample cả cluster để giữ dependence trong nhóm.
**Grammar & collocations:** `cluster-bootstrap replicate` — replicate; `resample schools as units` — lấy trường.
**Examples:** `The cluster bootstrap resampled classrooms, not students, because classmates shared instruction.` → Resample classroom vì học sinh chung instruction.
**Liên kết tiếng Hàn:** `군집 부트스트랩`.

## 5. wild bootstrap /waɪld ˈbuːtˌstræp/
**Part of speech:** noun
**Core meaning (English):** a bootstrap method that perturbs residuals with random multipliers to handle uneven variance or clustered errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** perturb residual bằng multiplier ngẫu nhiên để xử lý variance lệch.
**Grammar & collocations:** `wild-bootstrap multiplier` — multiplier; `simulate heteroskedastic errors` — mô phỏng.
**Examples:** `The wild bootstrap protected the small-sample test when residual variance differed by school.` → Wild bootstrap bảo vệ test khi variance lệch theo school.
**Liên kết tiếng Hàn:** `와일드 부트스트랩`.

## 6. jackknife estimate /ˈdʒækˌnaɪf ˈɛstəˌmeɪt/
**Part of speech:** noun
**Core meaning (English):** an estimate calculated repeatedly after leaving out one observation or unit at a time to assess stability or bias.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính lại estimate khi bỏ từng case/unit để xem ổn định.
**Grammar & collocations:** `jackknife-estimate bias` — bias; `delete one unit at a time` — bỏ.
**Examples:** `The jackknife estimate changed little when any single clinic was removed.` → Estimate ít đổi khi bỏ bất kỳ clinic nào.
**Liên kết tiếng Hàn:** `잭나이프 추정치`.

## 7. permutation distribution /ˌpɝmjəˈteɪʃən ˌdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** the distribution of a statistic obtained by repeatedly rearranging labels or assignments under a null hypothesis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân bố statistic từ việc xáo nhãn nhiều lần dưới null.
**Grammar & collocations:** `permutation-distribution reference` — reference; `reassign labels under the null` — gán lại.
**Examples:** `The permutation distribution showed how large a score gap could arise without a program effect.` → Distribution cho thấy gap có thể xuất hiện không effect.
**Liên kết tiếng Hàn:** `순열 분포`.

## 8. finite-sample correction /ˈfaɪˌnaɪt ˈsæmpəl kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** an adjustment that improves an approximation when the available sample is not large enough for asymptotic formulas to work well.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh công thức khi sample nhỏ chưa đủ cho xấp xỉ lớn mẫu.
**Grammar & collocations:** `finite-sample-correction factor` — factor; `reduce small-sample bias` — giảm.
**Examples:** `The finite-sample correction lowered the nominal confidence level's overstatement.` → Correction giảm việc confidence bị nói quá.
**Liên kết tiếng Hàn:** `유한 표본 보정`.

## 9. small-sample adjustment /ˈsmɔl ˈsæmpəl əˈdʒʌstmənt/
**Part of speech:** noun
**Core meaning (English):** a modification of an estimate, standard error, or reference distribution to account for limited data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều chỉnh estimate/error/reference vì data hạn chế.
**Grammar & collocations:** `small-sample-adjustment rule` — rule; `calibrate a test statistic` — hiệu chuẩn.
**Examples:** `A small-sample adjustment made the rater comparison less optimistic.` → Adjustment làm so rater bớt lạc quan.
**Liên kết tiếng Hàn:** `소표본 조정`.

## 10. degrees-of-freedom correction /dɪˈɡriz əv ˈfriːdəm kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** an adjustment that changes a reference distribution or variance estimate to reflect the number of independent pieces of information available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh theo số phần thông tin độc lập thật sự.
**Grammar & collocations:** `degrees-of-freedom-correction formula` — formula; `use a t reference` — dùng.
**Examples:** `The degrees-of-freedom correction widened the interval because only a few clusters were independent.` → Correction làm interval rộng vì ít cluster độc lập.
**Liên kết tiếng Hàn:** `자유도 보정`.

## 11. sandwich variance /ˈsændwɪtʃ ˈvɛriəns/
**Part of speech:** noun
**Core meaning (English):** an empirical variance estimate that remains useful when the modeled outcome variance is not exactly correct.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variance empirical hữu dụng dù model variance hơi sai.
**Grammar & collocations:** `sandwich-variance estimator` — estimator; `allow misspecified residual structure` — cho phép.
**Examples:** `Sandwich variance produced a more cautious interval for the policy coefficient.` → Variance sandwich cho interval thận trọng hơn.
**Liên kết tiếng Hàn:** `샌드위치 분산`.

## 12. heteroskedasticity-consistent variance /ˌhɛtərəsˌkəˈdæstəsəti kənˈsɪstənt ˈvɛriəns/
**Part of speech:** noun
**Core meaning (English):** a variance estimate designed to remain valid when outcome variability changes across levels of a predictor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variance vẫn đáng tin khi độ phân tán đổi theo predictor.
**Grammar & collocations:** `heteroskedasticity-consistent-variance estimator` — estimator; `correct unequal spread` — chỉnh.
**Examples:** `Heteroskedasticity-consistent variance prevented high-variance schools from dominating the precision claim.` → Variance ngăn school variance cao chi phối claim precision.
**Liên kết tiếng Hàn:** `이분산성 일관 분산`.

## 13. robust covariance /roʊˈbʌst ˌkoʊˈvɛriəns/
**Part of speech:** noun
**Core meaning (English):** a covariance estimate adjusted to remain dependable under certain dependence or variance violations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** covariance chỉnh để bền hơn khi dependence/variance vi phạm.
**Grammar & collocations:** `robust-covariance matrix` — matrix; `report adjusted uncertainty` — báo.
**Examples:** `The robust covariance matrix changed the joint test more than the point estimates.` → Matrix robust đổi joint test hơn point estimate.
**Liên kết tiếng Hàn:** `강건 공분산`.

## 14. influence function /ˈɪnfluəns ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a function describing how a small change in one observation or the data distribution would change an estimator.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm cho biết một observation nhỏ đổi estimate ra sao.
**Grammar & collocations:** `influence-function diagnostic` — diagnostic; `trace local sensitivity` — truy.
**Examples:** `The influence function showed that a handful of extreme response patterns drove the association.` → Function cho thấy vài pattern cực đoan kéo association.
**Liên kết tiếng Hàn:** `영향 함수`.

## 15. leverage point /ˈlɛvərɪdʒ pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** an observation with unusual predictor values that can strongly affect a fitted model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** observation có predictor lạ, có đòn bẩy lớn lên model.
**Grammar & collocations:** `leverage-point diagnostic` — diagnostic; `inspect an influential design point` — xem.
**Examples:** `One leverage point represented a school with an unusually large intervention dose.` → Một điểm leverage là school có dose lớn bất thường.
**Liên kết tiếng Hàn:** `레버리지 점`.

## 16. case deletion /keɪs dɪˈliːʃən/
**Part of speech:** noun
**Core meaning (English):** removing a selected observation or group and refitting a model to examine how dependent the conclusion is on it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ case/group rồi fit lại để xem conclusion phụ thuộc đến đâu.
**Grammar & collocations:** `case-deletion analysis` — analysis; `refit after removing a cluster` — fit lại.
**Examples:** `Case deletion showed that the headline effect survived removal of the largest site.` → Bỏ case vẫn giữ effect dù bỏ site lớn nhất.
**Liên kết tiếng Hàn:** `사례 삭제`.

## 17. sensitivity curve /ˌsɛnsəˈtɪvəti kɝv/
**Part of speech:** noun
**Core meaning (English):** a graph showing how an estimate or decision changes as an assumption or bias parameter varies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường cong cho thấy estimate đổi khi assumption/bias đổi.
**Grammar & collocations:** `sensitivity-curve plot` — plot; `display a robustness region` — hiển thị.
**Examples:** `The sensitivity curve crossed zero only after an implausibly large unmeasured bias was introduced.` → Curve qua zero chỉ khi bias rất lớn khó tin.
**Liên kết tiếng Hàn:** `민감도 곡선`.

## 18. breakdown point /ˈbreɪkˌdaʊn pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** the smallest proportion or magnitude of contamination that can drive a robust estimator arbitrarily far from the target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức contamination nhỏ nhất có thể kéo robust estimate lệch hẳn.
**Grammar & collocations:** `breakdown-point analysis` — analysis; `tolerate contamination` — chịu.
**Examples:** `The median's breakdown point was higher than the mean's under extreme response contamination.` → Median chịu contamination tốt hơn mean.
**Liên kết tiếng Hàn:** `붕괴점`.

## 19. robustness weight /roʊˈbʌstnəs weɪt/
**Part of speech:** noun
**Core meaning (English):** a weight that reduces the contribution of observations judged unusually discordant with the main data pattern.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** weight giảm ảnh hưởng observation lệch mạnh khỏi pattern chính.
**Grammar & collocations:** `robustness-weight function` — function; `downweight a discordant case` — giảm.
**Examples:** `The robustness weight reduced, but did not erase, the contribution of the unusual clinic.` → Weight giảm nhưng không xóa contribution clinic lạ.
**Liên kết tiếng Hàn:** `강건성 가중치`.

## 20. studentized bootstrap /ˈstuːdəntˌaɪzd ˈbuːtˌstræp/
**Part of speech:** noun
**Core meaning (English):** a bootstrap method that rescales each replicate statistic by an estimated standard error before forming an interval.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bootstrap chuẩn hóa mỗi replicate bằng standard error riêng.
**Grammar & collocations:** `studentized-bootstrap interval` — interval; `account for scale-dependent error` — tính đến.
**Examples:** `The studentized bootstrap interval adapted to the fact that uncertainty changed across score levels.` → Interval thích ứng vì bất định đổi theo level.
**Liên kết tiếng Hàn:** `학생화 부트스트랩`.

## Review in context

A **bootstrap resample** can be generated by a **parametric bootstrap** or a **nonparametric bootstrap**; a **cluster bootstrap** preserves group dependence, while a **wild bootstrap** perturbs residuals. A **jackknife estimate** and a **permutation distribution** offer other stability checks. **Finite-sample correction**, **small-sample adjustment**, and **degrees-of-freedom correction** protect reference calculations. **Sandwich variance**, **heteroskedasticity-consistent variance**, and **robust covariance** address imperfect variance assumptions. An **influence function** can reveal a **leverage point**, and **case deletion** shows whether it matters. A **sensitivity curve** displays change across assumptions; the **breakdown point** describes tolerance to contamination. A **robustness weight** limits discordant cases, while a **studentized bootstrap** builds an interval that respects changing uncertainty.

**Bản dịch tiếng Việt:** **Bootstrap resample** có thể tạo theo **parametric bootstrap** hoặc **nonparametric bootstrap**; **cluster bootstrap** giữ dependence nhóm, còn **wild bootstrap** perturb residual. **Jackknife estimate** và **permutation distribution** là các kiểm tra ổn định khác. **Finite-sample correction**, **small-sample adjustment** và **degrees-of-freedom correction** bảo vệ reference calculation. **Sandwich variance**, **heteroskedasticity-consistent variance** và **robust covariance** xử lý assumption variance chưa hoàn hảo. **Influence function** có thể lộ **leverage point**, còn **case deletion** cho biết nó có quan trọng không. **Sensitivity curve** hiển thị thay đổi theo assumption; **breakdown point** mô tả sức chịu contamination. **Robustness weight** giới hạn case lệch, còn **studentized bootstrap** tạo interval theo bất định thay đổi.
