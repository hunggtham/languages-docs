# C1 Vocabulary 20 — Policy learning and causal decision rules

This lesson follows how causal analysis can move beyond estimating an average effect and learn which treatment or action should be assigned to which unit.

Flow: **policy learning → treatment rule → policy value → value function → individualized treatment effect → uplift score → policy tree → optimal treatment regime → off-policy evaluation → inverse propensity score → doubly robust value → regret bound → policy learner → honest policy evaluation → policy risk → counterfactual policy → treatment assignment rule → policy contrast → policy improvement → policy class**.

## 1. policy learning /ˈpɑləsi ˈlɝnɪŋ/
**Part of speech:** noun
**Core meaning (English):** the process of using data to learn an assignment rule that chooses actions to improve a specified outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng data học một rule phân bổ action để cải thiện outcome mục tiêu.
**Grammar & collocations:** `policy-learning algorithm` — algorithm; `learn an individualized intervention` — học.
**Examples:** `Policy learning used patient history to choose which follow-up program to offer.` → Policy learning dùng lịch sử bệnh nhân để chọn chương trình follow-up.
**Liên kết tiếng Hàn:** `정책 학습`.

## 2. treatment rule /ˈtriːtmənt ruːl/
**Part of speech:** noun
**Core meaning (English):** a rule that maps observed characteristics into a recommended treatment or action.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule ánh xạ đặc điểm quan sát thành treatment/action được khuyến nghị.
**Grammar & collocations:** `treatment-rule estimate` — estimate; `assign treatment by risk profile` — phân bổ.
**Examples:** `The treatment rule recommended intensive coaching only for workers with a large predicted barrier.` → Treatment rule chỉ khuyến nghị coaching mạnh cho worker có barrier dự đoán lớn.
**Liên kết tiếng Hàn:** `처치 규칙`.

## 3. policy value /ˈpɑləsi ˈvælju/
**Part of speech:** noun
**Core meaning (English):** the expected outcome that would result if a particular assignment policy were applied to the target population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** outcome kỳ vọng nếu một policy phân bổ cụ thể được áp dụng cho population mục tiêu.
**Grammar & collocations:** `policy-value estimate` — estimate; `compare alternative policies` — so sánh.
**Examples:** `The learned policy had a higher policy value than treating every participant in the same way.` → Policy học được có value cao hơn cách đối xử mọi participant giống nhau.
**Liên kết tiếng Hàn:** `정책 가치`.

## 4. value function /ˈvælju ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a function that assigns an expected outcome to an action, state, or policy under specified conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm gán outcome kỳ vọng cho action, state hoặc policy trong điều kiện xác định.
**Grammar & collocations:** `value-function estimate` — estimate; `rank actions by expected utility` — xếp hạng.
**Examples:** `The value function ranked two outreach strategies for households with different needs.` → Value function xếp hạng hai chiến lược outreach cho hộ có nhu cầu khác nhau.
**Liên kết tiếng Hàn:** `가치 함수`.

## 5. individualized treatment effect /ˌɪndəˈvɪdʒuəˌlaɪzd ˈtriːtmənt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the causal effect of an action for one particular unit, conditional on that unit's characteristics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** causal effect của action đối với một unit cụ thể, có điều kiện theo đặc điểm unit đó.
**Grammar & collocations:** `individualized-treatment-effect estimate` — estimate; `personalize an intervention` — cá nhân hóa.
**Examples:** `The individualized treatment effect was larger for patients with an early warning sign.` → Effect cá nhân hóa lớn hơn ở bệnh nhân có dấu hiệu cảnh báo sớm.
**Liên kết tiếng Hàn:** `개별화된 처치 효과`.

## 6. uplift score /ˈʌpˌlɪft skɔr/
**Part of speech:** noun
**Core meaning (English):** a predicted difference in outcome between receiving an intervention and not receiving it for the same type of unit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch outcome dự đoán giữa có intervention và không có intervention cho cùng kiểu unit.
**Grammar & collocations:** `uplift-score ranking` — ranking; `target persuadable customers` — nhắm tới.
**Examples:** `The uplift score prioritized customers who were likely to respond only if offered a reminder.` → Uplift score ưu tiên khách chỉ có khả năng phản hồi nếu được nhắc.
**Liên kết tiếng Hàn:** `상승 점수`.

## 7. policy tree /ˈpɑləsi triː/
**Part of speech:** noun
**Core meaning (English):** a tree-structured assignment rule that divides units by characteristics and recommends an action in each resulting leaf.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule dạng cây chia unit theo đặc điểm rồi khuyến nghị action ở từng leaf.
**Grammar & collocations:** `policy-tree split` — split; `prune a complex rule` — tỉa.
**Examples:** `The policy tree assigned remote coaching to older participants and group classes to everyone else.` → Policy tree gán coaching từ xa cho participant lớn tuổi và lớp nhóm cho những người khác.
**Liên kết tiếng Hàn:** `정책 트리`.

## 8. optimal treatment regime /ˈɑptəməl ˈtriːtmənt reɪˈʒiːm/
**Part of speech:** noun
**Core meaning (English):** an assignment rule that maximizes the expected outcome under the available actions and population conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule phân bổ tối đa outcome kỳ vọng với action và điều kiện population sẵn có.
**Grammar & collocations:** `optimal-treatment-regime search` — search; `choose a sequence of actions` — chọn.
**Examples:** `The optimal treatment regime escalated support only when the first response was inadequate.` → Regime tối ưu chỉ tăng hỗ trợ khi phản hồi đầu chưa đủ.
**Liên kết tiếng Hàn:** `최적 처치 체계`.

## 9. off-policy evaluation /ɔf ˈpɑləsi ɪˌvæljuˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** estimation of a policy's expected outcome using data collected under a different assignment policy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước lượng outcome của policy bằng data thu dưới một policy phân bổ khác.
**Grammar & collocations:** `off-policy-evaluation estimator` — estimator; `reuse logged decisions` — tái sử dụng.
**Examples:** `Off-policy evaluation estimated the value of the new triage rule from records generated by the old rule.` → Off-policy evaluation ước lượng value của rule triage mới từ record của rule cũ.
**Liên kết tiếng Hàn:** `오프-정책 평가`.

## 10. inverse propensity score /ˈɪnvɝs prəˈpɛnsəti skɔr/
**Part of speech:** noun
**Core meaning (English):** the reciprocal of the estimated probability of the action actually observed, used to reweight observations toward a target policy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nghịch đảo xác suất action đã quan sát, dùng reweight observation về policy mục tiêu.
**Grammar & collocations:** `inverse-propensity-score weight` — weight; `reweight logged treatment choices` — gán lại trọng số.
**Examples:** `The inverse propensity score gave more weight to rare treatment choices in the evaluation sample.` → Inverse propensity score tăng trọng số cho treatment choice hiếm.
**Liên kết tiếng Hàn:** `역 성향 점수`.

## 11. doubly robust value /ˈdʌbli rʌˈbʌst ˈvælju/
**Part of speech:** noun
**Core meaning (English):** a policy-value estimate that combines an outcome model with propensity weighting and remains consistent if either one of those models is correctly specified.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimate policy value ghép outcome model với propensity weighting, vẫn nhất quán nếu một trong hai model đúng.
**Grammar & collocations:** `doubly-robust-value estimator` — estimator; `combine modeling and reweighting` — kết hợp.
**Examples:** `The doubly robust value stayed accurate when the outcome model missed a mild nonlinear pattern.` → Doubly robust value vẫn chính xác khi outcome model bỏ sót phi tuyến nhẹ.
**Liên kết tiếng Hàn:** `이중 강건 가치`.

## 12. regret bound /rɪˈɡrɛt baʊnd/
**Part of speech:** noun
**Core meaning (English):** a theoretical upper bound on how much expected outcome a learned policy may lose relative to the best policy in a defined class.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cận trên lý thuyết cho phần outcome kỳ vọng policy học được có thể mất so với policy tốt nhất.
**Grammar & collocations:** `regret-bound guarantee` — guarantee; `bound policy suboptimality` — giới hạn.
**Examples:** `The regret bound became tighter as the evaluation sample grew and the policy class stayed simple.` → Regret bound chặt hơn khi sample đánh giá tăng và policy class vẫn đơn giản.
**Liên kết tiếng Hàn:** `후회 한계`.

## 13. policy learner /ˈpɑləsi ˈlɝnər/
**Part of speech:** noun
**Core meaning (English):** an algorithm or estimator that searches for an assignment policy using observed outcomes, treatments, and covariates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** algorithm/estimator tìm policy phân bổ từ outcome, treatment và covariate quan sát.
**Grammar & collocations:** `policy-learner algorithm` — algorithm; `fit a treatment rule` — fit.
**Examples:** `The policy learner favored a short intervention for participants with a low predicted uplift.` → Policy learner ưu tiên intervention ngắn cho participant có uplift dự đoán thấp.
**Liên kết tiếng Hàn:** `정책 학습기`.

## 14. honest policy evaluation /ˈɑnəst ˈpɑləsi ɪˌvæljuˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** evaluation performed on data that were not used to choose or tune the policy, reducing optimism from reuse of the same observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đánh giá policy bằng data không dùng để chọn/tune policy, giảm optimism do dùng lại observation.
**Grammar & collocations:** `honest-policy-evaluation sample` — sample; `reserve a test fold` — dành riêng.
**Examples:** `Honest policy evaluation showed that the impressive training gain did not fully transfer to new patients.` → Đánh giá honest cho thấy gain training ấn tượng không chuyển hết sang bệnh nhân mới.
**Liên kết tiếng Hàn:** `정직한 정책 평가`.

## 15. policy risk /ˈpɑləsi rɪsk/
**Part of speech:** noun
**Core meaning (English):** the expected loss or failure of an assignment policy under a specified outcome and target population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loss/failure kỳ vọng của policy phân bổ theo outcome và population mục tiêu.
**Grammar & collocations:** `policy-risk estimate` — estimate; `minimize expected loss` — tối thiểu hóa.
**Examples:** `The safer policy had a slightly lower value but substantially lower policy risk for vulnerable patients.` → Policy an toàn có value thấp hơn chút nhưng risk thấp hơn nhiều.
**Liên kết tiếng Hàn:** `정책 위험`.

## 16. counterfactual policy /ˌkaʊntərˈfæktʃuəl ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** a hypothetical assignment policy whose population outcome is inferred rather than directly observed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy giả định mà outcome population phải suy ra vì chưa quan sát trực tiếp.
**Grammar & collocations:** `counterfactual-policy value` — value; `simulate an alternative assignment` — mô phỏng.
**Examples:** `The counterfactual policy would have offered follow-up calls to everyone with a high uplift score.` → Policy counterfactual sẽ gọi follow-up cho mọi người có uplift score cao.
**Liên kết tiếng Hàn:** `반사실적 정책`.

## 17. treatment assignment rule /ˈtriːtmənt əˈsaɪnmənt ruːl/
**Part of speech:** noun
**Core meaning (English):** a formal rule specifying which treatment is assigned to a unit as a function of available information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule chính thức chỉ định treatment theo information có sẵn của unit.
**Grammar & collocations:** `treatment-assignment-rule constraint` — constraint; `map covariates to actions` — ánh xạ.
**Examples:** `The treatment assignment rule could not recommend a drug outside the approved formulary.` → Rule không được khuyến nghị thuốc ngoài formulary được duyệt.
**Liên kết tiếng Hàn:** `처치 할당 규칙`.

## 18. policy contrast /ˈpɑləsi ˈkɑntræst/
**Part of speech:** noun
**Core meaning (English):** the difference in expected outcome between two assignment policies applied to the same target population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh outcome kỳ vọng giữa hai policy trên cùng population mục tiêu.
**Grammar & collocations:** `policy-contrast estimate` — estimate; `compare two assignment strategies` — so sánh.
**Examples:** `The policy contrast favored targeted reminders over a universal reminder campaign.` → Policy contrast ủng hộ nhắc nhắm mục tiêu hơn chiến dịch nhắc cho tất cả.
**Liên kết tiếng Hàn:** `정책 대비`.

## 19. policy improvement /ˈpɑləsi ɪmˈpruːvmənt/
**Part of speech:** noun
**Core meaning (English):** a change to an assignment policy that is expected to produce an outcome at least as good and sometimes better for the target population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi policy được kỳ vọng cho outcome không kém và đôi khi tốt hơn.
**Grammar & collocations:** `policy-improvement step` — step; `update the incumbent policy` — cập nhật.
**Examples:** `Policy improvement replaced the default referral rule for patients whose predicted benefit was high.` → Policy improvement thay rule referral mặc định cho bệnh nhân benefit dự đoán cao.
**Liên kết tiếng Hàn:** `정책 개선`.

## 20. policy class /ˈpɑləsi klæs/
**Part of speech:** noun
**Core meaning (English):** the set of assignment rules that an algorithm is allowed to consider when searching for a policy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập các rule phân bổ mà algorithm được phép tìm kiếm policy trong đó.
**Grammar & collocations:** `policy-class restriction` — restriction; `search over shallow trees` — tìm kiếm.
**Examples:** `Restricting the policy class to shallow trees made the learned rule easier to audit.` → Giới hạn policy class vào cây nông làm rule dễ audit hơn.
**Liên kết tiếng Hàn:** `정책 클래스`.

## Review in context

**Policy learning** searches for a **treatment rule** by comparing **policy value** through a **value function**. An **individualized treatment effect** can produce an **uplift score**, and a **policy tree** can represent an **optimal treatment regime** in a readable form. **Off-policy evaluation** may use an **inverse propensity score** or a **doubly robust value**; a **regret bound** describes how far the learned result may be from the best option. A **policy learner** should be checked with **honest policy evaluation** and assessed for **policy risk**. Analysts can compare a **counterfactual policy**, a **treatment assignment rule**, and a **policy contrast**, then seek **policy improvement** within a defensible **policy class**.

**Bản dịch tiếng Việt:** **Policy learning** tìm **treatment rule** bằng cách so sánh **policy value** qua **value function**. **Individualized treatment effect** có thể tạo **uplift score**, còn **policy tree** biểu diễn **optimal treatment regime** dễ đọc. **Off-policy evaluation** có thể dùng **inverse propensity score** hoặc **doubly robust value**; **regret bound** mô tả policy học được có thể cách lựa chọn tốt nhất bao xa. **Policy learner** nên được kiểm tra bằng **honest policy evaluation** và đánh giá **policy risk**. Analyst có thể so sánh **counterfactual policy**, **treatment assignment rule** và **policy contrast**, rồi tìm **policy improvement** trong **policy class** có thể bảo vệ.
