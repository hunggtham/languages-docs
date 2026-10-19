# C1 Vocabulary 52 — Proxy variables and measurement error

This lesson follows how analysts work with imperfect measurements, proxy variables, and validation information without treating observed data as exact truth.

Flow: **latent confounder → proxy outcome → proxy exposure → error-in-variables → measurement correction → validation subset → nondifferential error → differential error → proxy score → surrogate variable → measurement validation → error distribution → proxy adjustment → measurement mechanism → gold-standard measure → measurement replicate → proxy reliability → covariate misclassification → outcome misclassification → validation design**.

## 1. latent confounder /ˈleɪtənt kənˈfaʊndər/
**Part of speech:** noun
**Core meaning (English):** an unobserved variable that affects both an exposure and an outcome and can distort their apparent relationship.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variable unobserved affect cả exposure và outcome, distort relationship apparent.
**Grammar & collocations:** `plausible latent confounder` — confounder; `account for a latent confounder` — account.
**Examples:** `Health motivation was a plausible latent confounder of exercise and recovery.` → Motivation health là confounder latent plausible của exercise và recovery.
**Liên kết tiếng Hàn:** `잠재 교란 변수`.

## 2. proxy outcome /ˈprɑksi ˈaʊtˌkʌm/
**Part of speech:** noun
**Core meaning (English):** an observed measure used as an imperfect substitute for the outcome of substantive interest.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measure observe dùng thay imperfect cho outcome thật sự interest.
**Grammar & collocations:** `noisy proxy outcome` — outcome; `validate a proxy outcome` — validate.
**Examples:** `The app's daily score was a proxy outcome for long-term symptom improvement.` → Daily score app là outcome proxy cho symptom improvement dài hạn.
**Liên kết tiếng Hàn:** `대리 결과`.

## 3. proxy exposure /ˈprɑksi ɪkˈspoʊʒər/
**Part of speech:** noun
**Core meaning (English):** an observed measure used to represent an exposure that cannot be measured directly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measure observe represent exposure không measure trực tiếp được.
**Grammar & collocations:** `imperfect proxy exposure` — exposure; `use a proxy exposure` — use.
**Examples:** `Recorded distance was used as a proxy exposure for access to public transit.` → Distance record dùng làm exposure proxy cho access public transit.
**Liên kết tiếng Hàn:** `대리 노출`.

## 4. error-in-variables /ˈɛrər ɪn ˈvɛriəbəlz/
**Part of speech:** adjective
**Core meaning (English):** describing a model in which a predictor is measured with error rather than observed exactly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model có predictor measure với error, không observe exact.
**Grammar & collocations:** `error-in-variables model` — model; `correct an error-in-variables problem` — correct.
**Examples:** `The error-in-variables model allowed income to be recorded imprecisely.` → Model error-in-variables cho income được record không precise.
**Liên kết tiếng Hàn:** `오차가 있는 변수`.

## 5. measurement correction /ˈmɛʒərmənt kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** an adjustment that uses information about measurement quality to reduce bias caused by observing an imperfect variable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** adjustment dùng information về quality measurement để giảm bias do observe variable imperfect.
**Grammar & collocations:** `model-based measurement correction` — correction; `apply measurement correction` — apply.
**Examples:** `Measurement correction reduced the estimated attenuation caused by noisy exposure measurements.` → Correction measurement giảm attenuation estimate do exposure measurement noisy.
**Liên kết tiếng Hàn:** `측정 보정`.

## 6. validation subset /ˌvæləˈdeɪʃən ˈsʌbˌsɛt/
**Part of speech:** noun
**Core meaning (English):** a selected part of a dataset for which a more accurate reference measurement is available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần data selected có reference measurement accurate hơn available.
**Grammar & collocations:** `random validation subset` — subset; `reserve a validation subset` — reserve.
**Examples:** `The validation subset contained laboratory readings for checking the survey measure.` → Subset validation chứa lab reading để check survey measure.
**Liên kết tiếng Hàn:** `검증 하위 집합`.

## 7. nondifferential error /ˌnɑndɪfəˈrɛnʃəl ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** measurement error whose distribution does not depend on the relevant outcome or exposure level under the model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error distribution không phụ thuộc outcome hoặc exposure level liên quan theo model.
**Grammar & collocations:** `assumed nondifferential error` — error; `test for nondifferential error` — test.
**Examples:** `The analysis assumed nondifferential error in the self-reported height.` → Analysis assume error nondifferential trong height self-report.
**Liên kết tiếng Hàn:** `비차별적 오류`.

## 8. differential error /ˌdɪfəˈrɛnʃəl ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** measurement error whose size or pattern differs according to another variable, such as treatment status.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error size hoặc pattern khác theo variable khác như treatment status.
**Grammar & collocations:** `differential reporting error` — error; `allow for differential error` — allow.
**Examples:** `Differential error was possible because treated participants received more coaching.` → Error differential có thể vì treated participant nhận coaching nhiều hơn.
**Liên kết tiếng Hàn:** `차별적 오류`.

## 9. proxy score /ˈprɑksi skɔr/
**Part of speech:** noun
**Core meaning (English):** a numerical summary used as an indirect measure of a trait, exposure, or outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** summary numerical dùng measure indirect cho trait, exposure hoặc outcome.
**Grammar & collocations:** `composite proxy score` — score; `calibrate a proxy score` — calibrate.
**Examples:** `The proxy score combined attendance, homework, and practice time.` → Score proxy combine attendance, homework và practice time.
**Liên kết tiếng Hàn:** `대리 점수`.

## 10. surrogate variable /ˈsɜrəɡət ˈvɛriəbəl/
**Part of speech:** noun
**Core meaning (English):** an intermediate variable used in place of a final outcome because it appears earlier or is easier to measure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** intermediate variable dùng thay final outcome vì xuất hiện sớm hoặc dễ measure hơn.
**Grammar & collocations:** `validated surrogate variable` — variable; `evaluate a surrogate variable` — evaluate.
**Examples:** `The biomarker was proposed as a surrogate variable for later disease progression.` → Biomarker được propose là variable surrogate cho disease progression later.
**Liên kết tiếng Hàn:** `대리 변수`.

## 11. measurement validation /ˈmɛʒərmənt ˌvæləˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of checking whether a measurement captures the construct it is intended to represent.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process check measurement capture construct nó intended represent không.
**Grammar & collocations:** `independent measurement validation` — validation; `perform measurement validation` — perform.
**Examples:** `Measurement validation compared the short questionnaire with clinical assessment.` → Validation measurement compare questionnaire ngắn với clinical assessment.
**Liên kết tiếng Hàn:** `측정 타당화`.

## 12. error distribution /ˈɛrər ˌdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** the probability pattern describing how measurement errors vary across observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** probability pattern describe measurement error vary giữa observation thế nào.
**Grammar & collocations:** `skewed error distribution` — distribution; `estimate the error distribution` — estimate.
**Examples:** `The error distribution had a long upper tail because some respondents guessed their income.` → Distribution error có upper tail dài vì vài respondent guess income.
**Liên kết tiếng Hàn:** `오차 분포`.

## 13. proxy adjustment /ˈprɑksi əˈdʒʌstmənt/
**Part of speech:** noun
**Core meaning (English):** an adjustment intended to reduce bias caused by using an indirect measure instead of the underlying variable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** adjustment giảm bias do dùng indirect measure thay underlying variable.
**Grammar & collocations:** `model-based proxy adjustment` — adjustment; `apply proxy adjustment` — apply.
**Examples:** `Proxy adjustment changed the estimated effect only for the least reliable observations.` → Adjustment proxy chỉ đổi effect estimate ở observation kém reliable nhất.
**Liên kết tiếng Hàn:** `대리 조정`.

## 14. measurement mechanism /ˈmɛʒərmənt ˈmɛkəˌnɪzəm/
**Part of speech:** noun
**Core meaning (English):** the process through which an underlying quantity becomes an observed, recorded, and possibly distorted measure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process underlying quantity thành observed, recorded và có thể distorted measure.
**Grammar & collocations:** `complex measurement mechanism` — mechanism; `specify the measurement mechanism` — specify.
**Examples:** `The measurement mechanism differed between phone interviews and clinic devices.` → Mechanism measurement khác giữa phone interview và clinic device.
**Liên kết tiếng Hàn:** `측정 메커니즘`.

## 15. gold-standard measure /ˈɡoʊld ˈstændərd ˈmɛʒər/
**Part of speech:** noun
**Core meaning (English):** a highly trusted reference measurement used to evaluate a less accurate measure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reference measurement rất trusted dùng evaluate measure kém accurate hơn.
**Grammar & collocations:** `independent gold-standard measure` — measure; `compare with a gold-standard measure` — compare.
**Examples:** `The imaging result served as a gold-standard measure for the screening score.` → Imaging result làm measure gold-standard cho screening score.
**Liên kết tiếng Hàn:** `황금 표준 측정`.

## 16. measurement replicate /ˈmɛʒərmənt ˈrɛpləˌkeɪt/
**Part of speech:** noun
**Core meaning (English):** a repeated measurement of the same underlying quantity used to learn how much observed values vary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measurement repeated của cùng quantity để learn observed value vary bao nhiêu.
**Grammar & collocations:** `independent measurement replicate` — replicate; `collect a measurement replicate` — collect.
**Examples:** `A measurement replicate revealed that the sensor was less stable than expected.` → Replicate measurement reveal sensor kém stable hơn expect.
**Liên kết tiếng Hàn:** `측정 반복값`.

## 17. proxy reliability /ˈprɑksi rɪˌlaɪəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the degree to which an indirect measure consistently reflects the underlying quantity it represents.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức indirect measure consistently reflect underlying quantity nó represent.
**Grammar & collocations:** `high proxy reliability` — reliability; `estimate proxy reliability` — estimate.
**Examples:** `Proxy reliability was higher for automated readings than for hurried self-reports.` → Reliability proxy cao hơn ở automated reading so với self-report vội.
**Liên kết tiếng Hàn:** `대리 신뢰도`.

## 18. covariate misclassification /ˈkoʊˌvɛriət ˌmɪsklæsəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** assigning a unit to the wrong category or value for a predictor used in analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** assign unit vào category hoặc value sai cho predictor trong analysis.
**Grammar & collocations:** `covariate misclassification bias` — bias; `correct covariate misclassification` — correct.
**Examples:** `Covariate misclassification blurred the difference between part-time and full-time workers.` → Misclassification covariate làm mờ difference part-time và full-time worker.
**Liên kết tiếng Hàn:** `공변량 오분류`.

## 19. outcome misclassification /ˈaʊtˌkʌm ˌmɪsklæsəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** recording an outcome in the wrong category or with the wrong status.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record outcome vào category hoặc status sai.
**Grammar & collocations:** `outcome misclassification rate` — rate; `model outcome misclassification` — model.
**Examples:** `Outcome misclassification occurred when a delayed diagnosis was counted as no diagnosis.` → Misclassification outcome xảy ra khi diagnosis delay bị count là no diagnosis.
**Liên kết tiếng Hàn:** `결과 오분류`.

## 20. validation design /ˌvæləˈdeɪʃən dɪˈzaɪn/
**Part of speech:** noun
**Core meaning (English):** the plan for collecting accurate reference measurements and comparing them with the measures used in the main study.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** plan collect reference measurement accurate và compare với measure dùng trong main study.
**Grammar & collocations:** `nested validation design` — design; `choose a validation design` — choose.
**Examples:** `The validation design sampled difficult cases instead of relying only on convenient volunteers.` → Design validation sample difficult case thay vì chỉ volunteer convenient.
**Liên kết tiếng Hàn:** `검증 설계`.

## Review in context

A **latent confounder** may make a **proxy outcome** or **proxy exposure** misleading, especially in an **error-in-variables** model. **Measurement correction** can reduce one pattern, while a **validation subset** helps distinguish **nondifferential error** from **differential error**. A **proxy score** or **surrogate variable** requires **measurement validation**, an explicit **error distribution**, and careful **proxy adjustment**. The **measurement mechanism** should be compared with a **gold-standard measure** and repeated through a **measurement replicate**. **Proxy reliability** affects **covariate misclassification** and **outcome misclassification**, so the **validation design** must reflect the study's practical risks.

**Bản dịch tiếng Việt:** **Latent confounder** có thể làm **proxy outcome** hoặc **proxy exposure** misleading, nhất là trong model **error-in-variables**. **Measurement correction** có thể giảm một pattern, còn **validation subset** giúp phân biệt **nondifferential error** với **differential error**. **Proxy score** hoặc **surrogate variable** cần **measurement validation**, **error distribution** rõ và **proxy adjustment** cẩn thận. **Measurement mechanism** nên compare với **gold-standard measure** và repeat qua **measurement replicate**. **Proxy reliability** ảnh hưởng **covariate misclassification** và **outcome misclassification**, nên **validation design** phải reflect practical risk của study.
