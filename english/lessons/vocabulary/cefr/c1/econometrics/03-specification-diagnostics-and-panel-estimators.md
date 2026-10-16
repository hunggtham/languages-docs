# C1 Vocabulary 03 — Specification diagnostics and panel estimators

This lesson develops the language for checking a model's form, residual behavior, and treatment of repeated observations.

Flow: **specification test → functional form → link test → Ramsey RESET → variance inflation factor → condition number → influential observation → Cook's distance → studentized residual → normality test → Hausman test → Breusch-Pagan test → White test → Newey-West estimator → clustered covariance estimate → fixed effect → random effect → within estimator → between estimator → serial correlation test**.

## 1. specification test /ˌspɛsəfəˈkeɪʃən tɛst/
**Part of speech:** noun
**Core meaning (English):** a diagnostic test of whether the variables, transformations, and structure chosen for a model are adequate for its purpose.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra model chọn đúng biến, biến đổi và cấu trúc chưa.
**Grammar & collocations:** `specification-test result` — result; `check model adequacy` — kiểm tra.
**Examples:** `The specification test suggested that the model omitted a nonlinear income term.` → Test gợi ý model bỏ sót term income phi tuyến.
**Liên kết tiếng Hàn:** `모형 설정 검정`.

## 2. functional form /ˈfʌŋkʃənəl fɔrm/
**Part of speech:** noun
**Core meaning (English):** the mathematical shape used to represent how an explanatory variable relates to an outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hình dạng toán học mô tả predictor liên hệ outcome.
**Grammar & collocations:** `functional-form assumption` — assumption; `fit a nonlinear form` — khớp.
**Examples:** `The functional form allowed the effect of experience to level off after ten years.` → Form cho effect kinh nghiệm giảm dần sau ten years.
**Liên kết tiếng Hàn:** `함수 형태`.

## 3. link test /lɪŋk tɛst/
**Part of speech:** noun
**Core meaning (English):** a diagnostic regression test that uses fitted values and their square to look for a missing nonlinear pattern.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test dùng fitted value và bình phương để dò pattern phi tuyến bị thiếu.
**Grammar & collocations:** `link-test diagnostic` — diagnostic; `flag a misspecified model` — đánh dấu.
**Examples:** `The link test indicated that the linear predictor did not capture the outcome pattern.` → Link test cho thấy predictor tuyến tính chưa đủ.
**Liên kết tiếng Hàn:** `링크 검정`.

## 4. Ramsey RESET /ˈræmzi ˈriːˌsɛt/
**Part of speech:** noun
**Core meaning (English):** a test that adds powers of fitted values to assess whether a regression has omitted nonlinear structure or interactions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test thêm lũy thừa fitted value để dò phi tuyến/interaction bị bỏ.
**Grammar & collocations:** `Ramsey-RESET statistic` — statistic; `test neglected functional form` — kiểm tra.
**Examples:** `Ramsey RESET rejected the simple linear specification but did not identify the correct replacement.` → RESET bác form tuyến tính nhưng không chỉ form đúng.
**Liên kết tiếng Hàn:** `램지 RESET 검정`.

## 5. variance inflation factor /ˈvɛriəns ɪnˈfleɪʃən ˈfæktər/
**Part of speech:** noun
**Core meaning (English):** a measure of how much the variance of a coefficient estimate is increased by correlation among predictors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức variance hệ số phồng lên do predictors tương quan.
**Grammar & collocations:** `variance-inflation-factor threshold` — threshold; `diagnose collinear predictors` — chẩn đoán.
**Examples:** `The variance inflation factor was high for income and wealth because the predictors overlapped strongly.` → VIF cao vì income và wealth chồng lấn.
**Liên kết tiếng Hàn:** `분산 팽창 요인`.

## 6. condition number /kənˈdɪʃən ˈnʌmbər/
**Part of speech:** noun
**Core meaning (English):** a numerical measure of how sensitive a model's estimates are to small changes in the data or predictors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ số độ nhạy của estimate với thay đổi nhỏ trong data/predictor.
**Grammar & collocations:** `condition-number diagnostic` — diagnostic; `assess numerical stability` — đánh giá.
**Examples:** `A large condition number warned that small rounding changes could alter the coefficient pattern.` → Condition number lớn cảnh báo rounding nhỏ có thể đổi hệ số.
**Liên kết tiếng Hàn:** `조건수`.

## 7. influential observation /ˌɪnfluˈɛnʃəl ˌɑbzərˈveɪʃən/
**Part of speech:** noun
**Core meaning (English):** an observation whose inclusion or removal materially changes fitted estimates or conclusions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** observation có sức đổi estimate/kết luận đáng kể.
**Grammar & collocations:** `influential-observation check` — check; `inspect a high-leverage case` — xem.
**Examples:** `The influential observation was a large firm that experienced an unusual one-year shock.` → Observation là firm lớn gặp shock lạ.
**Liên kết tiếng Hàn:** `영향력 있는 관측치`.

## 8. Cook's distance /kʊks ˈdɪstəns/
**Part of speech:** noun
**Core meaning (English):** a diagnostic measuring how much fitted values would change if a particular observation were removed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo fitted value đổi bao nhiêu khi bỏ một observation.
**Grammar & collocations:** `Cook's-distance plot` — plot; `flag influential cases` — đánh dấu.
**Examples:** `Cook's distance highlighted two observations that dominated the policy coefficient.` → Cook's distance lộ hai observation chi phối hệ số policy.
**Liên kết tiếng Hàn:** `쿡의 거리`.

## 9. studentized residual /ˈstuːdəntˌaɪzd rɪˈzɪdʒuəl/
**Part of speech:** noun
**Core meaning (English):** a residual divided by an estimate of its own standard deviation so residuals can be compared across observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** residual chia cho độ lệch chuẩn ước tính để so giữa observation.
**Grammar & collocations:** `studentized-residual plot` — plot; `flag an unusual error` — đánh dấu.
**Examples:** `A large studentized residual suggested that the model badly missed one region's demand.` → Residual lớn cho thấy model miss demand một vùng.
**Liên kết tiếng Hàn:** `학생화 잔차`.

## 10. normality test /nɔrˈmæləti tɛst/
**Part of speech:** noun
**Core meaning (English):** a test of whether a variable or residual distribution is sufficiently compatible with a normal distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra distribution có gần phân bố chuẩn đủ không.
**Grammar & collocations:** `normality-test statistic` — statistic; `inspect residual shape` — xem.
**Examples:** `The normality test was sensitive to sample size, so the team also inspected a probability plot.` → Test nhạy sample size nên team xem thêm plot.
**Liên kết tiếng Hàn:** `정규성 검정`.

## 11. Hausman test /ˈhaʊsmən tɛst/
**Part of speech:** noun
**Core meaning (English):** a test commonly used to compare fixed-effect and random-effect assumptions in panel-data modeling.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test thường dùng so assumption fixed effect và random effect trong panel.
**Grammar & collocations:** `Hausman-test statistic` — statistic; `compare panel estimators` — so.
**Examples:** `The Hausman test favored fixed effects because unobserved firm traits appeared related to the predictors.` → Test nghiêng fixed effect vì trait ẩn liên quan predictor.
**Liên kết tiếng Hàn:** `하우스만 검정`.

## 12. Breusch-Pagan test /ˈbrɔɪʃ ˈpeɪɡən tɛst/
**Part of speech:** noun
**Core meaning (English):** a test for whether residual variance changes systematically with fitted values or predictors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test xem residual variance có đổi theo fitted value/predictor không.
**Grammar & collocations:** `Breusch-Pagan-test result` — result; `test unequal error variance` — kiểm tra.
**Examples:** `The Breusch-Pagan test detected unequal residual variance across income levels.` → Test phát hiện variance residual lệch theo income.
**Liên kết tiếng Hàn:** `브루시-페이건 검정`.

## 13. White test /waɪt tɛst/
**Part of speech:** noun
**Core meaning (English):** a general test for heteroskedasticity that allows variance to depend on predictors, their squares, and interactions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test tổng quát cho variance phụ thuộc predictor, bình phương và interaction.
**Grammar & collocations:** `White-test correction` — correction; `detect general heteroskedasticity` — phát hiện.
**Examples:** `The White test suggested robust standard errors even though no single predictor explained the spread.` → White test gợi ý dùng robust error dù predictor riêng lẻ không giải thích spread.
**Liên kết tiếng Hàn:** `화이트 검정`.

## 14. Newey-West estimator /ˈnuːi wɛst ˈɛstəˌmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator of coefficient uncertainty that is robust to certain forms of heteroskedasticity and autocorrelation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator uncertainty vững với dị phương sai và tự tương quan nhất định.
**Grammar & collocations:** `Newey-West standard error` — standard error; `allow serial dependence` — cho phép.
**Examples:** `The Newey-West estimator widened the interval for the long-run policy effect.` → Estimator làm interval effect dài hạn rộng hơn.
**Liên kết tiếng Hàn:** `뉴이-웨스트 추정량`.

## 15. clustered covariance estimate /ˈklʌstərd ˈkoʊˈvɛriəns ˈɛstəˌmeɪt/
**Part of speech:** noun
**Core meaning (English):** a covariance estimate adjusted for dependence among observations within defined groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** covariance estimate chỉnh cho observation phụ thuộc trong group.
**Grammar & collocations:** `clustered-covariance estimate` — estimate; `cluster by school` — cluster theo school.
**Examples:** `The policy analysis used a clustered covariance estimate at the county level.` → Phân tích policy dùng covariance estimate ở cấp county.
**Liên kết tiếng Hàn:** `군집 공분산 추정치`.

## 16. fixed effect /fɪkst ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** a unit-specific component treated as a parameter to absorb stable unobserved differences across units.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component riêng của unit để hấp thụ khác biệt ẩn ổn định.
**Grammar & collocations:** `unit fixed effect` — effect cố định cấp unit; `include fixed effects` — đưa vào.
**Examples:** `Firm fixed effects absorbed stable differences in management culture.` → Fixed effect firm hấp thụ khác biệt culture ổn định.
**Liên kết tiếng Hàn:** `고정 효과`.

## 17. random effect /ˈrændəm ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** a group-specific component modeled as a draw from a broader distribution rather than as one separate parameter for every group.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component group được coi là draw từ phân bố chung.
**Grammar & collocations:** `random-effects model` — model hiệu ứng ngẫu nhiên; `estimate between-group variance` — ước tính.
**Examples:** `The random effect allowed schools to vary around a shared average achievement level.` → Random effect cho school đổi quanh average chung.
**Liên kết tiếng Hàn:** `무작위 효과`.

## 18. within estimator /wɪˈðɪn ˈɛstəˌmeɪtər/
**Part of speech:** noun
**Core meaning (English):** a panel-data estimator based on changes within the same unit after removing its time-invariant average.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator dựa vào thay đổi trong cùng unit sau khi bỏ average ổn định.
**Grammar & collocations:** `within-estimator coefficient` — coefficient; `demean panel variables` — trừ trung bình.
**Examples:** `The within estimator used changes inside each firm rather than comparisons between firms.` → Estimator dùng đổi trong firm, không so giữa firm.
**Liên kết tiếng Hàn:** `내부 추정량`.

## 19. between estimator /bɪˈtwiːn ˈɛstəˌmeɪtər/
**Part of speech:** noun
**Core meaning (English):** a panel-data estimator based on differences between units' average values over the observation period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator dựa vào khác biệt giữa average của các unit.
**Grammar & collocations:** `between-estimator result` — result; `compare unit averages` — so.
**Examples:** `The between estimator linked firms' average training intensity to their average productivity.` → Estimator nối average training với average productivity giữa firm.
**Liên kết tiếng Hàn:** `개체 간 추정량`.

## 20. serial correlation test /ˈsɪriəl ˌkɔrəˈleɪʃən tɛst/
**Part of speech:** noun
**Core meaning (English):** a test of whether residuals or observations remain correlated across successive time periods.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test xem residual/observation còn tương quan qua các kỳ liên tiếp không.
**Grammar & collocations:** `serial-correlation-test statistic` — statistic; `check residual dependence` — kiểm tra.
**Examples:** `The serial correlation test found persistence in quarterly errors, so the forecast interval was widened.` → Test thấy persistence trong lỗi quý nên interval rộng hơn.
**Liên kết tiếng Hàn:** `계열 상관 검정`.

## Review in context

A **specification test** can reveal a wrong **functional form**; a **link test** or **Ramsey RESET** may flag omitted nonlinear structure. A high **variance inflation factor** or **condition number** warns about unstable predictors. An **influential observation**, **Cook's distance**, and a **studentized residual** help locate unusual cases, while a **normality test** examines distributional assumptions. The **Hausman test** compares panel assumptions; the **Breusch-Pagan test** and **White test** examine unequal variance. A **Newey-West estimator** and a **clustered covariance estimate** protect uncertainty under dependence. **Fixed effect** and **random effect** models answer different questions; the **within estimator** and **between estimator** use different variation. A **serial correlation test** checks whether time-ordered errors remain linked.

**Bản dịch tiếng Việt:** **Specification test** có thể lộ **functional form** sai; **link test** hoặc **Ramsey RESET** báo cấu trúc phi tuyến bị bỏ. **Variance inflation factor** hoặc **condition number** cao cảnh báo predictor bất ổn. **Influential observation**, **Cook's distance** và **studentized residual** giúp tìm case lạ, còn **normality test** kiểm tra assumption phân bố. **Hausman test** so assumption panel; **Breusch-Pagan test** và **White test** kiểm tra variance không đều. **Newey-West estimator** và **clustered covariance estimate** bảo vệ uncertainty khi có dependence. Model **fixed effect** và **random effect** trả lời câu hỏi khác; **within estimator** và **between estimator** dùng variation khác. **Serial correlation test** kiểm tra lỗi theo thời gian còn liên kết không.
