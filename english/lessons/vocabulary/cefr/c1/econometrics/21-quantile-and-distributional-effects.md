# C1 Vocabulary 21 — Quantile and distributional effects

This lesson follows how econometricians study changes across an outcome distribution instead of summarizing every unit with one mean effect.

Flow: **quantile regression → conditional quantile → unconditional quantile → quantile process → check function → pinball loss → quantile treatment effect → rank invariance → rank similarity → distributional effect → stochastic dominance → first-order stochastic dominance → quantile effect curve → rearrangement → recentered influence function → unconditional quantile regression → expectile regression → trimmed mean → tail conditional mean → quantile crossing**.

## 1. quantile regression /ˈkwɑnˌtaɪl rɪˈɡrɛʃən/
**Part of speech:** noun
**Core meaning (English):** a regression that models a chosen conditional quantile of an outcome rather than its conditional mean.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hồi quy model một quantile có điều kiện của outcome thay vì mean có điều kiện.
**Grammar & collocations:** `quantile-regression coefficient` — coefficient; `estimate effects at the median` — ước lượng.
**Examples:** `Quantile regression showed that training mattered more for workers near the lower end of the wage distribution.` → Quantile regression cho thấy training quan trọng hơn với worker ở đầu thấp của wage distribution.
**Liên kết tiếng Hàn:** `분위수 회귀`.

## 2. conditional quantile /kənˈdɪʃənəl ˈkwɑnˌtaɪl/
**Part of speech:** noun
**Core meaning (English):** a value below which a specified proportion of an outcome distribution falls after conditioning on covariates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value mà một tỉ lệ outcome rơi xuống dưới sau khi condition theo covariate.
**Grammar & collocations:** `conditional-quantile function` — function; `compare conditional medians` — so sánh.
**Examples:** `The conditional quantile rose with experience even after education was held constant.` → Conditional quantile tăng theo experience sau khi giữ education không đổi.
**Liên kết tiếng Hàn:** `조건부 분위수`.

## 3. unconditional quantile /ˌʌnkənˈdɪʃənəl ˈkwɑnˌtaɪl/
**Part of speech:** noun
**Core meaning (English):** a quantile of the overall outcome distribution before conditioning on individual covariates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quantile của outcome distribution toàn population trước khi condition theo covariate.
**Grammar & collocations:** `unconditional-quantile shift` — shift; `describe population-wide inequality` — mô tả.
**Examples:** `The policy raised the unconditional quantile at the bottom of the national income distribution.` → Policy nâng unconditional quantile ở đáy income distribution quốc gia.
**Liên kết tiếng Hàn:** `무조건부 분위수`.

## 4. quantile process /ˈkwɑnˌtaɪl ˈprɑsɛs/
**Part of speech:** noun
**Core meaning (English):** the collection of estimated quantile functions indexed by probability levels, often studied as a curve rather than one number.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập quantile function theo các mức probability, được xem như một curve thay vì một số.
**Grammar & collocations:** `quantile-process confidence band` — confidence band; `trace effects across probabilities` — theo dõi.
**Examples:** `The quantile process revealed a widening effect from the tenth to the ninetieth percentile.` → Quantile process cho thấy effect mở rộng từ percentile 10 đến 90.
**Liên kết tiếng Hàn:** `분위수 과정`.

## 5. check function /tʃɛk ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** the asymmetric loss function whose minimizer is a chosen quantile of a distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loss function không đối xứng, có minimizer là quantile được chọn.
**Grammar & collocations:** `check-function minimization` — minimization; `penalize underprediction differently` — phạt.
**Examples:** `The check function penalized a forecast below the target quantile more heavily than one above it.` → Check function phạt forecast thấp hơn target quantile nặng hơn forecast cao hơn.
**Liên kết tiếng Hàn:** `체크 함수`.

## 6. pinball loss /ˈpɪnˌbɔl lɔs/
**Part of speech:** noun
**Core meaning (English):** the piecewise linear loss used to train a quantile forecast, with different slopes for errors on either side of the target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loss tuyến tính từng đoạn để train quantile forecast, có slope khác cho error hai phía.
**Grammar & collocations:** `pinball-loss objective` — objective; `fit a ninety-percent forecast` — fit.
**Examples:** `Pinball loss rewarded the model for placing the ninety-percent forecast above most observed demands.` → Pinball loss thưởng model đặt forecast 90% trên phần lớn demand quan sát.
**Liên kết tiếng Hàn:** `핀볼 손실`.

## 7. quantile treatment effect /ˈkwɑnˌtaɪl ˈtriːtmənt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the difference between treated and untreated potential-outcome quantiles at a specified rank.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh giữa quantile của potential outcome khi treated và untreated tại một rank cụ thể.
**Grammar & collocations:** `quantile-treatment-effect curve` — curve; `estimate distributional impact` — ước lượng.
**Examples:** `The quantile treatment effect was positive at the upper tail but close to zero near the median.` → Effect theo quantile dương ở đuôi trên nhưng gần zero quanh median.
**Liên kết tiếng Hàn:** `분위수 처치 효과`.

## 8. rank invariance /ræŋk ɪnˈvɛriəns/
**Part of speech:** noun
**Core meaning (English):** an assumption that a unit's rank in the potential-outcome distribution stays aligned across treatment states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giả định rank của unit trong distribution potential outcome vẫn tương ứng giữa các treatment state.
**Grammar & collocations:** `rank-invariance assumption` — assumption; `map treated and untreated ranks` — ánh xạ.
**Examples:** `Rank invariance implied that a worker near the top without training would remain near the top with training.` → Rank invariance ngụ ý worker ở gần đầu khi không training vẫn gần đầu khi có training.
**Liên kết tiếng Hàn:** `순위 불변성`.

## 9. rank similarity /ræŋk ˌsɪməˈlɛrəti/
**Part of speech:** noun
**Core meaning (English):** an assumption that treatment may change a unit's rank but does not systematically select different latent ranks into the observed treatment groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** treatment có thể đổi rank, nhưng không chọn các latent rank khác nhau một cách có hệ thống vào group quan sát.
**Grammar & collocations:** `rank-similarity restriction` — restriction; `allow rank reshuffling` — cho phép xáo trộn.
**Examples:** `Rank similarity was more credible than strict rank invariance when treatment changed individual responses.` → Rank similarity đáng tin hơn invariant nghiêm ngặt khi treatment đổi response cá nhân.
**Liên kết tiếng Hàn:** `순위 유사성`.

## 10. distributional effect /ˌdɪstrəˈbjuʃənəl ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** a change in the shape or location of an outcome distribution caused by an intervention or covariate shift.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi hình dạng hoặc vị trí của outcome distribution do intervention/covariate shift.
**Grammar & collocations:** `distributional-effect decomposition` — decomposition; `shift the outcome distribution` — dịch chuyển.
**Examples:** `The reform had a distributional effect that compressed the lower tail without changing the mean much.` → Cải cách nén đuôi dưới dù mean không đổi nhiều.
**Liên kết tiếng Hàn:** `분포 효과`.

## 11. stochastic dominance /stəˈkæstɪk ˈdɑmənəns/
**Part of speech:** noun
**Core meaning (English):** an ordering in which one distribution is at least as favorable as another according to a specified probability criterion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thứ tự nói một distribution ít nhất thuận lợi bằng distribution khác theo tiêu chí xác suất.
**Grammar & collocations:** `stochastic-dominance comparison` — comparison; `rank welfare distributions` — xếp hạng.
**Examples:** `The treated income distribution displayed stochastic dominance over the untreated distribution at most thresholds.` → Income distribution treated trội hơn untreated ở hầu hết threshold.
**Liên kết tiếng Hàn:** `확률적 우위`.

## 12. first-order stochastic dominance /fɝst ˈɔrdər stəˈkæstɪk ˈdɑmənəns/
**Part of speech:** noun
**Core meaning (English):** stochastic dominance in which the cumulative distribution function of one outcome lies nowhere above that of another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dạng dominance khi cumulative distribution function của outcome này không nằm trên outcome kia ở đâu.
**Grammar & collocations:** `first-order-stochastic-dominance test` — test; `compare cumulative distributions` — so sánh.
**Examples:** `First-order stochastic dominance supported the conclusion that the new benefit schedule improved outcomes for every risk-neutral participant.` → Dominance bậc một ủng hộ kết luận benefit schedule mới cải thiện outcome.
**Liên kết tiếng Hàn:** `1차 확률적 우위`.

## 13. quantile effect curve /ˈkwɑnˌtaɪl ɪˈfɛkt kɝv/
**Part of speech:** noun
**Core meaning (English):** a curve showing an estimated treatment or covariate effect across quantile levels of an outcome distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** curve cho effect ước lượng tại nhiều quantile level trong outcome distribution.
**Grammar & collocations:** `quantile-effect-curve band` — band; `plot heterogeneity across ranks` — vẽ.
**Examples:** `The quantile effect curve rose steadily from the lower tail to the upper middle.` → Curve effect theo quantile tăng đều từ đuôi dưới đến giữa trên.
**Liên kết tiếng Hàn:** `분위수 효과 곡선`.

## 14. rearrangement /ˌriːəˈreɪndʒmənt/
**Part of speech:** noun
**Core meaning (English):** a mathematical operation that restores monotonic ordering to estimated quantiles that would otherwise cross.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép toán sắp xếp lại để quantile ước lượng trở về thứ tự tăng, không cắt nhau.
**Grammar & collocations:** `quantile rearrangement` — rearrangement; `enforce a monotone distribution` — đảm bảo.
**Examples:** `Rearrangement produced a valid distribution when neighboring estimated quantiles crossed.` → Rearrangement tạo distribution hợp lệ khi quantile kề nhau cắt nhau.
**Liên kết tiếng Hàn:** `재배열`.

## 15. recentered influence function /riːˈsɛntərd ˈɪnfluəns ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a transformed outcome used to estimate how a small change in the population distribution affects an unconditional distributional statistic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** outcome được biến đổi để ước lượng distribution population đổi ra sao khi statistic phân phối vô điều kiện thay đổi.
**Grammar & collocations:** `recentered-influence-function regression` — regression; `estimate an unconditional quantile effect` — ước lượng.
**Examples:** `The recentered influence function converted an unconditional quantile question into a regression-style calculation.` → Function biến câu hỏi quantile vô điều kiện thành phép tính kiểu hồi quy.
**Liên kết tiếng Hàn:** `재중심 영향 함수`.

## 16. unconditional quantile regression /ˌʌnkənˈdɪʃənəl ˈkwɑnˌtaɪl rɪˈɡrɛʃən/
**Part of speech:** noun
**Core meaning (English):** a regression approach that estimates how covariates shift a population-wide quantile rather than only a conditional quantile.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hồi quy ước lượng covariate làm quantile toàn population dịch chuyển, không chỉ quantile có điều kiện.
**Grammar & collocations:** `unconditional-quantile-regression estimate` — estimate; `study distribution-wide effects` — nghiên cứu.
**Examples:** `Unconditional quantile regression estimated how a tax change shifted the national ninetieth percentile.` → Hồi quy quantile vô điều kiện ước lượng thuế đổi percentile 90 quốc gia.
**Liên kết tiếng Hàn:** `무조건부 분위수 회귀`.

## 17. expectile regression /ɪkˈspɛtəl rɪˈɡrɛʃən/
**Part of speech:** noun
**Core meaning (English):** a regression that models an asymmetric squared-error target whose weights depend on whether observations lie above or below it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hồi quy model target với squared error không đối xứng, trọng số tùy observation nằm trên hay dưới.
**Grammar & collocations:** `expectile-regression fit` — fit; `emphasize upper-tail deviations` — nhấn mạnh.
**Examples:** `Expectile regression emphasized unusually high energy demand more than ordinary mean regression.` → Expectile regression nhấn mạnh demand năng lượng cao bất thường hơn mean regression.
**Liên kết tiếng Hàn:** `기대분위수 회귀`.

## 18. trimmed mean /trɪmd miːn/
**Part of speech:** noun
**Core meaning (English):** a mean calculated after removing a specified fraction of the smallest and largest observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mean tính sau khi bỏ một phần observation nhỏ nhất và lớn nhất.
**Grammar & collocations:** `trimmed-mean estimate` — estimate; `reduce sensitivity to outliers` — giảm.
**Examples:** `The trimmed mean provided a stable summary when a few claims were extraordinarily large.` → Trimmed mean cho summary ổn định khi vài claim lớn bất thường.
**Liên kết tiếng Hàn:** `절사 평균`.

## 19. tail conditional mean /teɪl kənˈdɪʃənəl miːn/
**Part of speech:** noun
**Core meaning (English):** the average outcome among observations lying beyond a selected tail threshold of a distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** outcome trung bình của observation nằm vượt threshold ở một đuôi distribution.
**Grammar & collocations:** `tail-conditional-mean estimate` — estimate; `summarize severe losses` — tóm tắt.
**Examples:** `The tail conditional mean measured average losses among the worst one percent of days.` → Tail conditional mean đo loss trung bình trong 1% ngày tệ nhất.
**Liên kết tiếng Hàn:** `꼬리 조건부 평균`.

## 20. quantile crossing /ˈkwɑnˌtaɪl ˈkrɔsɪŋ/
**Part of speech:** noun
**Core meaning (English):** an incoherent ordering in which an estimated higher quantile falls below an estimated lower quantile for some covariate values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thứ tự sai khi quantile cao ước lượng nằm dưới quantile thấp ở vài giá trị covariate.
**Grammar & collocations:** `quantile-crossing correction` — correction; `constrain quantile order` — ràng buộc.
**Examples:** `Quantile crossing appeared at extreme ages, so the analyst imposed a monotonicity constraint.` → Quantile crossing xuất hiện ở tuổi cực trị nên analyst áp ràng buộc monotonicity.
**Liên kết tiếng Hàn:** `분위수 교차`.

## Review in context

**Quantile regression** estimates a **conditional quantile**, while an **unconditional quantile** describes the population distribution; together they form a **quantile process** across ranks. The **check function** and **pinball loss** train a chosen quantile. A **quantile treatment effect** can rely on assumptions such as **rank invariance** or **rank similarity**, and a **distributional effect** can be summarized by **stochastic dominance** or **first-order stochastic dominance**. A **quantile effect curve** may need **rearrangement** when estimates cross. The **recentered influence function** supports **unconditional quantile regression**; **expectile regression**, a **trimmed mean**, and a **tail conditional mean** offer other distributional summaries. Analysts diagnose **quantile crossing** before interpreting the curve.

**Bản dịch tiếng Việt:** **Quantile regression** ước lượng **conditional quantile**, còn **unconditional quantile** mô tả distribution toàn population; hai khái niệm tạo **quantile process** theo các rank. **Check function** và **pinball loss** dùng để train quantile. **Quantile treatment effect** có thể dựa vào giả định **rank invariance** hoặc **rank similarity**, còn **distributional effect** có thể tóm tắt bằng **stochastic dominance** hoặc **first-order stochastic dominance**. **Quantile effect curve** có thể cần **rearrangement** khi estimate cắt nhau. **Recentered influence function** hỗ trợ **unconditional quantile regression**; **expectile regression**, **trimmed mean** và **tail conditional mean** là các summary phân phối khác. Analyst kiểm tra **quantile crossing** trước khi diễn giải curve.
