# C2+ Vocabulary — Algorithmic fairness and accountability

This lesson follows how automated decision systems distribute benefits, burdens, explanations, and avenues of challenge. The network is **distributive fairness → process fairness → allocative harm → disparate impact → disparate treatment → equalized odds → demographic parity → calibration fairness → individual fairness → subgroup robustness → fairness gerrymandering → proxy discrimination → algorithmic redlining → machine deference bias → supervised human review → contestability → explanation right → administrative fairness → algorithm impact review → model documentation card → datasheet for datasets → decision audit log → red-team evaluation → deployment monitoring → rollback condition**.

## 1. distributive fairness /dɪˈstrɪbjətɪv ˈfɛrnəs/
**Part of speech:** noun
**Core meaning (English):** fairness in how benefits, opportunities, risks, or burdens are distributed among people or groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** distributive fairness hỏi ai nhận benefit/risk/burden và distribution có hợp lý không.
**Grammar & collocations:** `distributive-fairness criterion` — criterion; `distribute a benefit` — distribute; `burden allocation` — allocation.
**Examples:** `The committee evaluated distributive fairness before expanding the automated eligibility system.` → Committee xem distribution benefit/burden.
**Liên kết tiếng Hàn:** `분배적 공정성` — distributive fairness.

## 2. process fairness /ˈprɑsɛs ˈfɛrnəs/
**Part of speech:** noun
**Core meaning (English):** fairness in the procedures, rules, participation, and opportunities to be heard that produce a decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process fairness nhìn procedure/rule/voice/appeal chứ không chỉ outcome.
**Grammar & collocations:** `process-fairness review` — review; `follow a fair procedure` — follow; `opportunity to be heard` — opportunity.
**Examples:** `Process fairness required applicants to correct inaccurate records before the decision was final.` → Applicant được sửa record sai.
**Liên kết tiếng Hàn:** `절차적 공정성` — process fairness.

## 3. allocative harm /ˈæləˌkeɪtɪv hɑrm/
**Part of speech:** noun
**Core meaning (English):** harm caused when a decision system unfairly withholds or assigns a resource, opportunity, service, or burden.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** allocative harm đến từ allocation sai/lệch của resource/opportunity.
**Grammar & collocations:** `allocative-harm analysis` — analysis; `withhold a resource` — withhold; `allocation error` — error.
**Examples:** `The audit found allocative harm when qualified applicants were systematically denied training places.` → Audit lộ allocation harm.
**Liên kết tiếng Hàn:** `배분적 피해` — allocative harm.

## 4. disparate impact /dɪˈspærət ˈɪmpækt/
**Part of speech:** noun
**Core meaning (English):** a significantly unequal outcome for a protected or socially relevant group produced by a rule that may appear neutral.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** disparate impact là outcome group lệch dù rule nhìn neutral.
**Grammar & collocations:** `disparate-impact analysis` — analysis; `produce unequal outcomes` — produce; `protected group` — group.
**Examples:** `The hiring screen showed disparate impact against applicants from neighborhoods with fewer testing centers.` → Screen tạo unequal outcome theo neighborhood.
**Liên kết tiếng Hàn:** `차별적 영향` — disparate impact.

## 5. disparate treatment /dɪˈspærət ˈtriːtmənt/
**Part of speech:** noun
**Core meaning (English):** intentional or explicit use of different rules, criteria, or treatment for people because of group identity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** disparate treatment là treatment khác nhau một cách trực tiếp theo identity/group.
**Grammar & collocations:** `disparate-treatment claim` — claim; `treat groups differently` — treat; `explicit criterion` — criterion.
**Examples:** `The investigation found disparate treatment in how appeals from two language groups were handled.` → Appeals language group bị xử khác.
**Liên kết tiếng Hàn:** `차별적 대우` — disparate treatment.

## 6. equalized odds /ˈiːkwəˌlaɪzd ɑdz/
**Part of speech:** noun
**Core meaning (English):** a fairness condition requiring equal true-positive and false-positive rates across specified groups, conditional on the true outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** equalized odds so sánh TPR/FPR giữa group khi biết true outcome.
**Grammar & collocations:** `equalized-odds constraint` — constraint; `equalize error rates` — equalize; `true-positive rate` — rate.
**Examples:** `The classifier satisfied equalized odds for the two monitored groups at the chosen threshold.` → Classifier equalize error rates.
**Liên kết tiếng Hàn:** `등화된 오즈` — equalized odds.

## 7. demographic parity /ˌdɛməˈɡræfɪk ˈpærəti/
**Part of speech:** noun
**Core meaning (English):** a fairness condition requiring similar positive decision rates across specified groups, regardless of true outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** demographic parity yêu cầu positive rate group tương tự, nhưng có trade-off với calibration/accuracy.
**Grammar & collocations:** `demographic-parity constraint` — constraint; `match selection rates` — match; `group approval rate` — rate.
**Examples:** `Demographic parity increased representation but changed the model's precision trade-off.` → Parity tăng representation nhưng đổi precision trade-off.
**Liên kết tiếng Hàn:** `인구통계학적 동등성` — demographic parity.

## 8. calibration fairness /ˌkælɪˈbreɪʃən ˈfɛrnəs/
**Part of speech:** noun
**Core meaning (English):** a fairness condition requiring predicted probabilities to have comparable meanings across groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** calibration fairness nghĩa score/probability 0.7 có cùng meaning risk giữa group.
**Grammar & collocations:** `calibration-fairness test` — test; `calibrate risk scores` — calibrate; `groupwise probability` — probability.
**Examples:** `Calibration fairness failed because the same risk score predicted different event frequencies across groups.` → Cùng score nhưng frequency khác.
**Liên kết tiếng Hàn:** `보정 공정성` — calibration fairness.

## 9. individual fairness /ˌɪndəˈvɪdʒuəl ˈfɛrnəs/
**Part of speech:** noun
**Core meaning (English):** the principle that similar individuals should receive similar decisions under a relevant notion of similarity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** individual fairness hỏi người tương tự relevant có decision tương tự không.
**Grammar & collocations:** `individual-fairness metric` — metric; `treat similar cases similarly` — treat; `relevant similarity` — similarity.
**Examples:** `Individual fairness required the appeal system to treat comparable cases consistently.` → Case tương tự cần xử nhất quán.
**Liên kết tiếng Hàn:** `개인적 공정성` — individual fairness.

## 10. subgroup robustness /ˈsʌbɡruːp roʊˈbʌstnəs/
**Part of speech:** noun
**Core meaning (English):** stability of a model's performance across important subgroups, including groups not dominant in the training data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** subgroup robustness hỏi model có giữ performance ở group nhỏ/ít data không.
**Grammar & collocations:** `subgroup-robustness audit` — audit; `evaluate across subgroups` — evaluate; `minority performance` — performance.
**Examples:** `Subgroup robustness fell for patients with rare conditions that were underrepresented in training.` → Robustness giảm ở rare condition.
**Liên kết tiếng Hàn:** `하위집단 강건성` — subgroup robustness.

## 11. fairness gerrymandering /ˈfɛrnəs ˈdʒɛriˌmændərɪŋ/
**Part of speech:** noun
**Core meaning (English):** apparent fairness across broad groups that hides severe unfairness in smaller intersections or subgroups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fairness gerrymandering đạt fair ở group lớn nhưng fail ở intersection nhỏ.
**Grammar & collocations:** `fairness-gerrymandering risk` — risk; `audit intersectional groups` — audit; `aggregate fairness` — fairness.
**Examples:** `The overall parity score hid fairness gerrymandering among older women with disabilities.` → Overall score che group intersection.
**Liên kết tiếng Hàn:** `공정성 게리맨더링` — fairness gerrymandering.

## 12. proxy discrimination /ˈprɑksi dɪˌskrɪməˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** discrimination produced when a seemingly neutral variable acts as a proxy for a protected or socially sensitive attribute.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** proxy discrimination xảy ra khi variable neutral “đại diện ngầm” cho identity protected.
**Grammar & collocations:** `proxy-discrimination test` — test; `proxy for group identity` — proxy; `sensitive attribute` — attribute.
**Examples:** `The location feature created proxy discrimination because it tracked historical segregation.` → Location proxy cho segregation.
**Liên kết tiếng Hàn:** `대리 차별` — proxy discrimination.

## 13. algorithmic redlining /ˌælɡəˈrɪðmɪk ˈrɛdˌlaɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** systematic exclusion or disadvantage produced when an algorithm reproduces geographic or group-based patterns of restricted access.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** algorithmic redlining dùng model để tái tạo exclusion theo geography/group.
**Grammar & collocations:** `algorithmic-redlining investigation` — investigation; `restrict access by area` — restrict; `historical exclusion` — exclusion.
**Examples:** `The lending model risked algorithmic redlining by penalizing addresses associated with disinvested districts.` → Model penalize address của district bị disinvest.
**Liên kết tiếng Hàn:** `알고리즘 레드라이닝` — algorithmic redlining.

## 14. machine deference bias /məˈʃiːn ˈdɛfərəns baɪəs/
**Part of speech:** noun
**Core meaning (English):** undue tendency for people to accept an automated recommendation even when their own evidence or judgment conflicts with it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** machine deference bias là tin máy quá mức và bỏ qua signal ngược.
**Grammar & collocations:** `machine-deference-bias study` — study; `defer to an algorithm` — defer; `override a recommendation` — override.
**Examples:** `Machine deference bias caused reviewers to ignore an obvious data-entry error flagged by the patient.` → Reviewer tin máy, bỏ qua error.
**Liên kết tiếng Hàn:** `기계 추종 편향` — machine deference bias.

## 15. supervised human review /ˈsuːpərˌvaɪzd ˈhjuːmən rɪˈvjuː/
**Part of speech:** noun
**Core meaning (English):** human examination of automated decisions under defined responsibilities, training, escalation rules, and documentation requirements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** supervised human review không phải “có người trong loop” là đủ; cần role/training/escalation rõ.
**Grammar & collocations:** `supervised-human-review protocol` — protocol; `review an automated decision` — review; `escalation rule` — rule.
**Examples:** `Supervised human review required a reasoned note before an adverse decision could stand.` → Cần note có lý do trước decision bất lợi.
**Liên kết tiếng Hàn:** `감독된 인간 검토` — supervised human review.

## 16. contestability /kənˌtɛstəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the practical ability to challenge, question, appeal, or seek correction of a decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** contestability là người bị ảnh hưởng có đường challenge/appeal/correction thật sự.
**Grammar & collocations:** `contestability requirement` — requirement; `contest a decision` — contest; `appeal channel` — channel.
**Examples:** `Contestability improved after applicants received the reason code and a human appeal channel.` → Contestability tăng khi có reason code và appeal.
**Liên kết tiếng Hàn:** `이의 제기 가능성` — contestability.

## 17. explanation right /ˌɛkspləˈneɪʃən raɪt/
**Part of speech:** noun
**Core meaning (English):** a recognized entitlement to receive an understandable account of how a consequential decision was reached.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** explanation right cho người bị ảnh hưởng quyền biết decision hình thành ra sao.
**Grammar & collocations:** `explanation-right policy` — policy; `provide an understandable explanation` — provide; `consequential decision` — decision.
**Examples:** `The explanation right required the agency to identify the factors that changed the benefit decision.` → Agency phải nêu factor ảnh hưởng decision.
**Liên kết tiếng Hàn:** `설명 받을 권리` — explanation right.

## 18. administrative fairness /ədˈmɪnəˌstreɪtɪv ˈfɛrnəs/
**Part of speech:** noun
**Core meaning (English):** fairness in how an authority applies rules, communicates reasons, handles evidence, and corrects errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** administrative fairness bao gồm rule, reason, evidence, correction trong public administration.
**Grammar & collocations:** `administrative-fairness review` — review; `apply a rule fairly` — apply; `correct an error` — correct.
**Examples:** `Administrative fairness required notice before the automated suspension took effect.` → Cần notice trước suspension.
**Liên kết tiếng Hàn:** `행정적 공정성` — administrative fairness.

## 19. algorithm impact review /ˈælɡəˌrɪðəm ˈɪmpækt rɪˈvjuː/
**Part of speech:** noun
**Core meaning (English):** structured assessment of an algorithm's effects on rights, access, safety, groups, and institutional accountability before or during deployment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** algorithm impact review xem effect của algorithm trước/trong deployment.
**Grammar & collocations:** `algorithm-impact-review report` — report; `assess deployment effects` — assess; `rights impact` — impact.
**Examples:** `The algorithm impact review identified a serious access gap before the tool was deployed statewide.` → Review lộ access gap trước rollout.
**Liên kết tiếng Hàn:** `알고리즘 영향 검토` — algorithm impact review.

## 20. model documentation card /ˈmɑdəl ˌdɑkjəmənˈteɪʃən kɑrd/
**Part of speech:** noun
**Core meaning (English):** a concise document describing a model's purpose, data, evaluation, limitations, users, and known risks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model documentation card là “thẻ lý lịch” của model: purpose/data/eval/limit/risk.
**Grammar & collocations:** `model-documentation card` — card; `document model limitations` — document; `intended use` — use.
**Examples:** `The model documentation card warned that performance had not been tested on rural clinics.` → Card cảnh báo chưa test rural clinic.
**Liên kết tiếng Hàn:** `모형 문서 카드` — model documentation card.

## 21. datasheet for datasets /ˈdeɪtəˌʃiːt fər ˈdeɪtəˌsɛts/
**Part of speech:** noun
**Core meaning (English):** structured documentation of a dataset's motivation, composition, collection, processing, uses, and limitations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** datasheet for datasets ghi dataset được tạo vì sao, gồm ai, collect/process/use/limit thế nào.
**Grammar & collocations:** `datasheet-for-datasets template` — template; `document dataset composition` — document; `intended use` — use.
**Examples:** `The datasheet for datasets disclosed that the training images underrepresented night scenes.` → Datasheet disclose night scene thiếu.
**Liên kết tiếng Hàn:** `데이터셋 데이터시트` — datasheet for datasets.

## 22. decision audit log /dɪˈsɪʒən ˈɔdɪt lɔɡ/
**Part of speech:** noun
**Core meaning (English):** a time-stamped record of inputs, rules, overrides, explanations, and outcomes for consequential decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** decision audit log ghi input/rule/override/explanation/outcome để reconstruct decision.
**Grammar & collocations:** `decision-audit log` — log; `record an override` — record; `reconstruct a decision` — reconstruct.
**Examples:** `The decision audit log showed that a supervisor overrode the model twice.` → Log cho thấy supervisor override hai lần.
**Liên kết tiếng Hàn:** `의사결정 감사 로그` — decision audit log.

## 23. red-team evaluation /ˈrɛd tiːm ɪˌvæljuˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** adversarial testing designed to expose unsafe behavior, hidden failure modes, misuse pathways, or unfair outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** red-team evaluation cố tình attack system để lộ failure/misuse/unfairness.
**Grammar & collocations:** `red-team-evaluation exercise` — exercise; `probe a failure mode` — probe; `adversarial test` — test.
**Examples:** `Red-team evaluation exposed a prompt that caused the classifier to ignore disability accommodations.` → Red team lộ prompt gây ignore accommodation.
**Liên kết tiếng Hàn:** `레드팀 평가` — red-team evaluation.

## 24. deployment monitoring /dɪˈplɔɪmənt ˈmɑnətərɪŋ/
**Part of speech:** noun
**Core meaning (English):** ongoing observation of an automated system's performance, inputs, harms, drift, and subgroup effects after release.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** deployment monitoring theo dõi system sau release, không coi launch là kết thúc.
**Grammar & collocations:** `deployment-monitoring dashboard` — dashboard; `monitor drift` — monitor; `post-release performance` — performance.
**Examples:** `Deployment monitoring detected a rise in false denials after the eligibility rule changed.` → Monitoring detect false denial tăng.
**Liên kết tiếng Hàn:** `배포 모니터링` — deployment monitoring.

## 25. rollback condition /ˈroʊlˌbæk kənˈdɪʃən/
**Part of speech:** noun
**Core meaning (English):** a predefined state or signal that requires an automated system or policy to be withdrawn, reversed, or returned to a safer version.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rollback condition là line đã định trước để rút/revert system khi harm/drift vượt ngưỡng.
**Grammar & collocations:** `rollback-condition rule` — rule; `revert a deployment` — revert; `safety threshold` — threshold.
**Examples:** `The team defined a rollback condition for subgroup error rates before launch.` → Team define condition theo subgroup error.
**Liên kết tiếng Hàn:** `롤백 조건` — rollback condition.

## Review in context

**Distributive fairness** and **process fairness** ask who receives benefits and how decisions are made; **allocative harm**, **disparate impact**, and **disparate treatment** reveal unequal outcomes. Metrics such as **equalized odds**, **demographic parity**, **calibration fairness**, and **individual fairness** answer different questions, while **subgroup robustness** can expose **fairness gerrymandering**, **proxy discrimination**, and **algorithmic redlining**. **Machine deference bias** makes **supervised human review** essential. **Contestability**, an **explanation right**, and **administrative fairness** support challenge. An **algorithm impact review**, a **model documentation card**, and a **datasheet for datasets** document risk. A **decision audit log** supports **red-team evaluation** and **deployment monitoring**, with a **rollback condition** ready when harms emerge.

**Bản dịch tiếng Việt:**

**Distributive fairness** và **process fairness** hỏi ai nhận benefit và decision được làm ra sao; **allocative harm**, **disparate impact** và **disparate treatment** lộ outcome lệch. **Equalized odds**, **demographic parity**, **calibration fairness** và **individual fairness** trả lời question khác nhau, còn **subgroup robustness** có thể lộ **fairness gerrymandering**, **proxy discrimination** và **algorithmic redlining**. **Machine deference bias** khiến **supervised human review** cần thiết. **Contestability**, **explanation right** và **administrative fairness** hỗ trợ challenge. **Algorithm impact review**, **model documentation card** và **datasheet for datasets** ghi risk. **Decision audit log** hỗ trợ **red-team evaluation** và **deployment monitoring**, với **rollback condition** sẵn sàng khi harm xuất hiện.
