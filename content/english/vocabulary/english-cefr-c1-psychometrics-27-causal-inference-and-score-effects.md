# C1 Vocabulary — Causal inference and score effects

This lesson introduces the language used to reason about whether an assessment, intervention, or policy actually changes an outcome.

Flow: **potential outcome → treatment contrast → counterfactual prediction → positivity assumption → treatment effect heterogeneity → mediation pathway → moderation pathway → confounding path → sensitivity parameter → negative control → interrupted time series → inverse probability weight → doubly robust estimator → target trial emulation → identification strategy → treatment assignment mechanism → unmeasured confounding → transportability assumption → positivity violation → mediation formula**.

## 1. potential outcome /pəˈtɛnʃəl ˈaʊtˌkʌm/
**Part of speech:** noun
**Core meaning (English):** the outcome that would be observed for a person under a specified exposure or treatment condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết quả giả định của cùng một người dưới một điều kiện can thiệp cụ thể.
**Grammar & collocations:** `potential-outcome notation` — notation; `define an outcome under treatment` — định nghĩa.
**Examples:** `The potential outcome under tutoring could not be observed for the same learner without tutoring.` → Không thể thấy đồng thời outcome có và không tutoring của một learner.
**Liên kết tiếng Hàn:** `잠재적 결과`.

## 2. treatment contrast /ˈtriːtmənt ˈkɑntræst/
**Part of speech:** noun
**Core meaning (English):** the difference or ratio between outcomes under two specified treatment or exposure conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch/tỉ số outcome giữa hai điều kiện can thiệp.
**Grammar & collocations:** `treatment-contrast estimate` — estimate; `compare intervention conditions` — so sánh.
**Examples:** `The treatment contrast compared coached practice with the usual self-study schedule.` → Contrast so coached practice với tự học thường.
**Liên kết tiếng Hàn:** `처치 대비`.

## 3. counterfactual prediction /ˌkaʊntərˈfæktʃuəl prɪˈdɪkʃən/
**Part of speech:** noun
**Core meaning (English):** a prediction of what would have happened under a condition that was not actually observed for that case.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dự đoán outcome trong điều kiện không xảy ra thật với case đó.
**Grammar & collocations:** `counterfactual-prediction error` — error; `estimate an unobserved response` — ước tính.
**Examples:** `The counterfactual prediction estimated how the selected students would have performed without the new curriculum.` → Dự đoán ước tính performance nếu không curriculum mới.
**Liên kết tiếng Hàn:** `반사실적 예측`.

## 4. positivity assumption /ˌpɑzəˈtɪvəti əˈsʌmpʃən/
**Part of speech:** noun
**Core meaning (English):** the assumption that every relevant type of person has a nonzero chance of receiving each treatment or exposure condition being compared.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mọi loại người liên quan đều có cơ hội khác 0 nhận mỗi điều kiện so sánh.
**Grammar & collocations:** `positivity-assumption check` — check; `overlap treatment probabilities` — kiểm tra.
**Examples:** `The positivity assumption failed because no rural schools had access to the intensive program.` → Positivity hỏng vì school nông thôn không có cơ hội vào program.
**Liên kết tiếng Hàn:** `양성 가정`.

## 5. treatment effect heterogeneity /ˈtriːtmənt ɪˈfɛkt ˌhɛtərədʒəˈniəti/
**Part of speech:** noun
**Core meaning (English):** variation in an intervention's effect across people, settings, outcomes, or levels of baseline risk.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect của intervention khác nhau theo người/bối cảnh/risk.
**Grammar & collocations:** `treatment-effect-heterogeneity analysis` — analysis; `estimate subgroup effects` — ước tính.
**Examples:** `Treatment effect heterogeneity suggested that feedback helped beginners more than advanced writers.` → Effect khác nhau: feedback giúp beginner hơn advanced.
**Liên kết tiếng Hàn:** `처치 효과 이질성`.

## 6. mediation pathway /miːdiˈeɪʃən ˈpæθweɪ/
**Part of speech:** noun
**Core meaning (English):** a sequence through which an exposure changes an intermediate process that then contributes to the outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường đi qua biến trung gian nối exposure với outcome.
**Grammar & collocations:** `mediation-pathway diagram` — diagram; `trace an indirect effect` — truy.
**Examples:** `The mediation pathway ran from coaching to planning quality and then to final performance.` → Pathway đi từ coaching qua planning quality đến performance.
**Liên kết tiếng Hàn:** `매개 경로`.

## 7. moderation pathway /ˌmɑdəˈreɪʃən ˈpæθweɪ/
**Part of speech:** noun
**Core meaning (English):** a pattern in which a third variable changes the size or direction of an exposure's effect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến thứ ba làm effect mạnh/yếu hoặc đổi chiều.
**Grammar & collocations:** `moderation-pathway model` — model; `test effect variation by context` — kiểm tra.
**Examples:** `The moderation pathway showed that practice feedback worked only when learners had revision time.` → Feedback chỉ hiệu quả khi có giờ revision.
**Liên kết tiếng Hàn:** `조절 경로`.

## 8. confounding path /kənˈfaʊndɪŋ pæθ/
**Part of speech:** noun
**Core meaning (English):** a route by which a common cause creates an apparent relationship between an exposure and an outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường gây nhiễu làm exposure và outcome có vẻ liên quan.
**Grammar & collocations:** `confounding-path diagram` — diagram; `block a backdoor path` — chặn.
**Examples:** `Prior motivation opened a confounding path between voluntary tutoring and higher scores.` → Motivation trước đó gây nhiễu giữa tutoring tự nguyện và điểm cao.
**Liên kết tiếng Hàn:** `교란 경로`.

## 9. sensitivity parameter /ˌsɛnsəˈtɪvəti pəˈræmətər/
**Part of speech:** noun
**Core meaning (English):** a parameter varied in an analysis to show how conclusions would change under different assumptions about unobserved conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tham số thay đổi để thử kết luận dưới giả định khác.
**Grammar & collocations:** `sensitivity-parameter grid` — grid; `stress-test an unmeasured bias` — stress-test.
**Examples:** `The sensitivity parameter represented how strongly unmeasured prior ability could favor the intervention group.` → Parameter đại diện bias từ ability trước chưa đo.
**Liên kết tiếng Hàn:** `민감도 매개변수`.

## 10. negative control /ˈnɛɡətɪv kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** an exposure or outcome that should not be causally affected and is used to detect residual bias.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control lẽ ra không bị effect, dùng để phát hiện bias còn lại.
**Grammar & collocations:** `negative-control analysis` — analysis; `probe residual confounding` — dò.
**Examples:** `A negative control outcome exposed a hidden calendar effect in the testing schedule.` → Negative control lộ effect lịch thi ẩn.
**Liên kết tiếng Hàn:** `음성 대조군`.

## 11. interrupted time series /ˌɪntəˈrʌptɪd taɪm ˈsɪriz/
**Part of speech:** noun
**Core meaning (English):** a series of measurements analyzed before and after a clearly timed intervention or policy change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi đo trước/sau một can thiệp có mốc thời gian rõ.
**Grammar & collocations:** `interrupted-time-series model` — model; `estimate a level shift` — ước tính.
**Examples:** `The interrupted time series showed an immediate score jump followed by a slower trend.` → Chuỗi cho thấy điểm nhảy ngay rồi trend chậm.
**Liên kết tiếng Hàn:** `중단 시계열`.

## 12. inverse probability weight /ˈɪnvɝs ˌprɑbəˈbɪləti weɪt/
**Part of speech:** noun
**Core meaning (English):** a weight equal to the inverse of a person's estimated probability of receiving the condition they actually received.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** weight nghịch đảo xác suất nhận condition thật.
**Grammar & collocations:** `inverse-probability-weighted estimate` — estimate; `rebalance observed groups` — cân bằng.
**Examples:** `Inverse probability weights gave uncommon treatment patterns more influence in the adjusted comparison.` → Weight làm pattern hiếm có ảnh hưởng hơn.
**Liên kết tiếng Hàn:** `역확률 가중치`.

## 13. doubly robust estimator /ˈdʌbli rʌˈbʌst ˈɛstəˌmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator that can remain consistent when either the treatment model or the outcome model, but not necessarily both, is correctly specified.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator vẫn vững nếu một trong hai model đúng.
**Grammar & collocations:** `doubly-robust-estimator property` — property; `combine weighting and outcome modeling` — kết hợp.
**Examples:** `The doubly robust estimator combined treatment weights with a model of expected scores.` → Estimator kết hợp weight treatment và model điểm kỳ vọng.
**Liên kết tiếng Hàn:** `이중 강건 추정량`.

## 14. target trial emulation /ˈtɑrɡət traɪəl ˌɛmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** designing an observational analysis to imitate the question, eligibility, assignment, follow-up, and outcome of a hypothetical randomized trial.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô phỏng trial giả định bằng data quan sát.
**Grammar & collocations:** `target-trial-emulation protocol` — protocol; `define eligibility before exposure` — định nghĩa.
**Examples:** `Target trial emulation forced the team to specify when eligibility began and when follow-up ended.` → Emulation buộc team nêu rõ start/end.
**Liên kết tiếng Hàn:** `목표 시험 모방`.

## 15. identification strategy /aɪˌdɛntəfəˈkeɪʃən ˈstrætədʒi/
**Part of speech:** noun
**Core meaning (English):** the set of assumptions and design choices that make a causal quantity recoverable from available data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ assumption/design giúp lấy causal quantity từ data.
**Grammar & collocations:** `identification-strategy memo` — memo; `state identifying assumptions` — nêu.
**Examples:** `The identification strategy relied on measured baseline differences and a stable policy cutoff.` → Strategy dựa vào baseline đã đo và cutoff policy ổn.
**Liên kết tiếng Hàn:** `식별 전략`.

## 16. treatment assignment mechanism /ˈtriːtmənt əˈsaɪnmənt ˈmɛkəˌnɪzəm/
**Part of speech:** noun
**Core meaning (English):** the process or rule that determines who receives each treatment or exposure condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy trình/rule quyết định ai nhận condition nào.
**Grammar & collocations:** `treatment-assignment-mechanism audit` — audit; `model selection into care` — mô hình.
**Examples:** `The treatment assignment mechanism depended on counselor referrals rather than random allocation.` → Assignment phụ thuộc referral, không random.
**Liên kết tiếng Hàn:** `처치 배정 메커니즘`.

## 17. unmeasured confounding /ˌʌnˈmɛʒərd kənˈfaʊndɪŋ/
**Part of speech:** noun
**Core meaning (English):** distortion caused by a common cause of exposure and outcome that was not adequately recorded or modeled.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiễu từ nguyên nhân chung chưa đo/đưa vào model.
**Grammar & collocations:** `unmeasured-confounding bound` — bound; `quantify residual bias` — định lượng.
**Examples:** `Unmeasured confounding could explain why motivated volunteers appeared to benefit more.` → Confounding chưa đo có thể giải thích volunteer motivated benefit hơn.
**Liên kết tiếng Hàn:** `측정되지 않은 교란`.

## 18. transportability assumption /ˌtrænspɔrtəˈbɪləti əˈsʌmpʃən/
**Part of speech:** noun
**Core meaning (English):** an assumption that an estimated effect can be carried from the study population or setting to a target population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giả định effect chuyển được từ sample sang population đích.
**Grammar & collocations:** `transportability-assumption check` — check; `generalize across settings` — khái quát.
**Examples:** `The transportability assumption was weak because the pilot schools had unusually small classes.` → Assumption yếu vì school pilot có lớp nhỏ bất thường.
**Liên kết tiếng Hàn:** `수송 가능성 가정`.

## 19. positivity violation /ˌpɑzəˈtɪvəti vaɪəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** a failure of the condition that every relevant subgroup has a meaningful chance of receiving every compared exposure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** subgroup nào đó gần như không có cơ hội nhận một condition.
**Grammar & collocations:** `positivity-violation flag` — flag; `trim extreme weights` — xử lý.
**Examples:** `A positivity violation made the weighted estimate depend on a handful of extreme cases.` → Vi phạm làm estimate phụ thuộc vài case cực đoan.
**Liên kết tiếng Hàn:** `양성 위반`.

## 20. mediation formula /miːdiˈeɪʃən ˈfɔrmjələ/
**Part of speech:** noun
**Core meaning (English):** a formal expression for decomposing an overall effect into pathways through an intermediate variable under stated assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công thức tách effect tổng thành các đường qua mediator.
**Grammar & collocations:** `mediation-formula estimate` — estimate; `decompose a total effect` — phân rã.
**Examples:** `The mediation formula estimated how much of the program effect operated through improved planning.` → Công thức ước tính phần effect đi qua planning.
**Liên kết tiếng Hàn:** `매개 공식`.

## Review in context

A **potential outcome** defines the result under a condition, and a **treatment contrast** compares two such conditions. A **counterfactual prediction** fills in an unobserved outcome, but its credibility depends on the **positivity assumption** and the stated **identification strategy**. Effects may show **treatment effect heterogeneity**, follow a **mediation pathway**, or vary through a **moderation pathway**. Analysts should draw every **confounding path**, test a **sensitivity parameter**, and use a **negative control** when possible. An **interrupted time series** can locate a policy shift; an **inverse probability weight** and a **doubly robust estimator** can adjust an observational comparison. **Target trial emulation** clarifies the design, including the **treatment assignment mechanism**. Remaining **unmeasured confounding**, the **transportability assumption**, any **positivity violation**, and the **mediation formula** determine how far the final interpretation can go.

**Bản dịch tiếng Việt:** **Potential outcome** định nghĩa kết quả dưới một condition, còn **treatment contrast** so hai condition. **Counterfactual prediction** bổ sung outcome không quan sát, nhưng độ tin cậy phụ thuộc **positivity assumption** và **identification strategy**. Effect có thể khác theo người (**treatment effect heterogeneity**), đi qua **mediation pathway**, hoặc đổi theo **moderation pathway**. Analyst nên vẽ mọi **confounding path**, thử **sensitivity parameter** và dùng **negative control** nếu có thể. **Interrupted time series** định vị policy shift; **inverse probability weight** và **doubly robust estimator** điều chỉnh so sánh quan sát. **Target trial emulation** làm rõ design, gồm **treatment assignment mechanism**. **Unmeasured confounding**, **transportability assumption**, **positivity violation** và **mediation formula** quyết định giới hạn diễn giải.
