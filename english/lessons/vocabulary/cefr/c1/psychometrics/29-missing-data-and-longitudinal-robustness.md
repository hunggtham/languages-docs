# C1 Vocabulary — Missing data and longitudinal robustness

This lesson develops the vocabulary for checking whether incomplete follow-up can distort longitudinal conclusions.

Flow: **pattern-mixture model → selection model → shared-parameter model → nonignorable missingness → monotone missingness → intermittent missingness → refreshment sample → inverse probability of censoring weight → informative visit process → joint modeling → multiple imputation by chained equations → delta adjustment → tipping-point analysis → worst-case bound → missingness pattern → censoring mechanism → return-to-study bias → follow-up completeness → monotone dropout → missing-data estimand**.

## 1. pattern-mixture model /ˈpætərn ˈmɪkstʃər ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a missing-data model that groups cases by their observed missingness patterns and specifies outcomes within each group.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model chia case theo pattern thiếu và model outcome trong từng nhóm.
**Grammar & collocations:** `pattern-mixture-model sensitivity` — sensitivity; `stratify by missingness` — phân tầng.
**Examples:** `The pattern-mixture model compared learners who completed every wave with those who missed the final wave.` → Model so người hoàn thành mọi wave với người bỏ wave cuối.
**Liên kết tiếng Hàn:** `패턴 혼합 모형`.

## 2. selection model /səˈlɛkʃən ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a missing-data model that describes the outcome distribution together with the process determining whether an outcome is observed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model outcome cùng process quyết định outcome có được quan sát không.
**Grammar & collocations:** `selection-model factorization` — factorization; `model observation propensity` — mô hình.
**Examples:** `The selection model allowed the probability of returning to depend on an unobserved later score.` → Model cho return phụ thuộc score sau chưa thấy.
**Liên kết tiếng Hàn:** `선택 모형`.

## 3. shared-parameter model /ʃɛrd pəˈræmətər ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model linking the outcome and missingness processes through a common unobserved parameter.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model nối outcome và missingness qua parameter ẩn chung.
**Grammar & collocations:** `shared-parameter-model specification` — specification; `link dropout with latent health` — nối.
**Examples:** `A shared-parameter model linked missed visits to an underlying symptom trajectory.` → Model nối missed visit với trajectory symptom ẩn.
**Liên kết tiếng Hàn:** `공유 매개변수 모형`.

## 4. nonignorable missingness /nɑnˈɪɡnərəbəl ˈmɪsɪŋnəs/
**Part of speech:** noun
**Core meaning (English):** missingness that remains related to the unobserved value even after recorded variables are considered.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiếu data vẫn liên quan value chưa thấy sau khi đã xét biến ghi nhận.
**Grammar & collocations:** `nonignorable-missingness assumption` — assumption; `stress-test an unobserved dependence` — stress-test.
**Examples:** `Nonignorable missingness was plausible because learners struggling most were least likely to submit the final task.` → Missingness có thể nonignorable vì learner khó khăn nhất ít nộp task cuối.
**Liên kết tiếng Hàn:** `무시할 수 없는 결측`.

## 5. monotone missingness /ˈmɑnəˌtoʊn ˈmɪsɪŋnəs/
**Part of speech:** noun
**Core meaning (English):** a pattern in which, after a person misses one scheduled measurement, all later measurements are also missing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ một wave rồi các wave sau cũng thiếu.
**Grammar & collocations:** `monotone-missingness pattern` — pattern; `model permanent dropout` — mô hình.
**Examples:** `Monotone missingness made the final assessment unavailable for everyone who withdrew earlier.` → Missingness monotone làm assessment cuối thiếu với người rút sớm.
**Liên kết tiếng Hàn:** `단조 결측`.

## 6. intermittent missingness /ˌɪntərˈmɪtənt ˈmɪsɪŋnəs/
**Part of speech:** noun
**Core meaning (English):** a pattern in which observations are missing at some occasions but reappear at later occasions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiếu ở vài occasion rồi xuất hiện lại sau.
**Grammar & collocations:** `intermittent-missingness indicator` — indicator; `retain partial trajectories` — giữ.
**Examples:** `Intermittent missingness occurred when a learner skipped one survey but completed the next two.` → Learner bỏ một survey rồi làm hai cái sau.
**Liên kết tiếng Hàn:** `간헐적 결측`.

## 7. refreshment sample /rɪˈfrɛʃmənt ˈsæmpəl/
**Part of speech:** noun
**Core meaning (English):** a new sample added during a longitudinal study to provide current cross-sectional information or replace lost coverage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sample mới thêm giữa study để làm mới coverage.
**Grammar & collocations:** `refreshment-sample design` — design; `restore population representation` — khôi phục.
**Examples:** `A refreshment sample helped distinguish aging effects from changes in who remained in the panel.` → Sample mới giúp tách aging khỏi thay đổi thành phần panel.
**Liên kết tiếng Hàn:** `보충 표본`.

## 8. inverse probability of censoring weight /ˈɪnvɝs ˌprɑbəˈbɪləti əv ˈsɛnsərɪŋ weɪt/
**Part of speech:** noun
**Core meaning (English):** a weight based on the inverse probability that a person's outcome remains observed up to a specified time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** weight nghịch đảo xác suất outcome còn được thấy đến thời điểm đó.
**Grammar & collocations:** `inverse-probability-of-censoring-weighted estimate` — estimate; `adjust for informative loss to follow-up` — điều chỉnh.
**Examples:** `Inverse probability of censoring weights gave more influence to participants with rare but well-documented follow-up paths.` → Weight tăng influence cho path hiếm nhưng được ghi đủ.
**Liên kết tiếng Hàn:** `검열 역확률 가중치`.

## 9. informative visit process /ɪnˈfɔrmətɪv ˈvɪzɪt ˈprɑsɛs/
**Part of speech:** noun
**Core meaning (English):** a visit or measurement schedule whose timing or frequency carries information about the outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lịch visit tự nó chứa thông tin về outcome.
**Grammar & collocations:** `informative-visit-process model` — model; `account for unscheduled contact` — tính đến.
**Examples:** `The informative visit process intensified when symptoms worsened, so visit counts could not be ignored.` → Visit dày hơn khi symptom nặng nên không thể bỏ qua.
**Liên kết tiếng Hàn:** `정보성 방문 과정`.

## 10. joint modeling /dʒɔɪnt ˈmɑdəlɪŋ/
**Part of speech:** noun
**Core meaning (English):** modeling a longitudinal outcome and a related event process together so their association informs inference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model outcome longitudinal cùng event process liên quan.
**Grammar & collocations:** `joint-modeling framework` — framework; `link trajectory and dropout` — nối.
**Examples:** `Joint modeling linked the score trajectory with the hazard of leaving the program.` → Modeling nối trajectory điểm với hazard rời program.
**Liên kết tiếng Hàn:** `공동 모델링`.

## 11. multiple imputation by chained equations /ˈmʌltəpəl ɪmˌpjuˈteɪʃən baɪ tʃeɪndʒd ɪˈkweɪʃənz/
**Part of speech:** noun
**Core meaning (English):** an imputation approach that fills missing variables through a sequence of conditional models, repeating the process to create several plausible datasets.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điền nhiều dataset bằng chuỗi model conditional lặp.
**Grammar & collocations:** `multiple-imputation-by-chained-equations analysis` — analysis; `pool estimates across imputations` — gộp.
**Examples:** `Multiple imputation by chained equations preserved uncertainty instead of treating filled values as observed facts.` → MICE giữ bất định, không coi value điền là fact.
**Liên kết tiếng Hàn:** `연쇄방정식 다중 대치`.

## 12. delta adjustment /ˈdɛltə əˈdʒʌstmənt/
**Part of speech:** noun
**Core meaning (English):** a sensitivity adjustment that shifts imputed outcomes by a specified amount to represent departures from a primary missing-data assumption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh value impute một lượng delta để thử assumption khác.
**Grammar & collocations:** `delta-adjustment scenario` — scenario; `shift imputed outcomes` — dịch chuyển.
**Examples:** `A delta adjustment assumed that people who withdrew would have scored slightly below their imputed values.` → Adjustment giả định người rút có điểm thấp hơn value điền.
**Liên kết tiếng Hàn:** `델타 조정`.

## 13. tipping-point analysis /ˈtɪpɪŋ pɔɪnt əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** an analysis that searches for the assumption or amount of deviation at which a substantive conclusion would change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm mức deviation khiến conclusion đổi.
**Grammar & collocations:** `tipping-point-analysis grid` — grid; `locate a conclusion reversal` — tìm.
**Examples:** `The tipping-point analysis found that the treatment advantage disappeared only under an extreme missing-data shift.` → Advantage mất chỉ khi shift cực đoan.
**Liên kết tiếng Hàn:** `티핑 포인트 분석`.

## 14. worst-case bound /ˈwɝst keɪs baʊnd/
**Part of speech:** noun
**Core meaning (English):** a deliberately conservative limit calculated under an unfavorable but specified pattern of missing outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn bảo thủ dưới kịch bản outcome xấu nhất đã nêu.
**Grammar & collocations:** `worst-case-bound calculation` — calculation; `bound a plausible effect` — giới hạn.
**Examples:** `The worst-case bound still favored the program, although the estimated benefit became modest.` → Bound xấu nhất vẫn nghiêng về program nhưng lợi ích nhỏ.
**Liên kết tiếng Hàn:** `최악의 경우 경계`.

## 15. missingness pattern /ˈmɪsɪŋnəs ˈpætərn/
**Part of speech:** noun
**Core meaning (English):** the arrangement of observed and unobserved values across variables or measurement occasions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cách các value có/thiếu trải trên biến hoặc occasion.
**Grammar & collocations:** `missingness-pattern table` — table; `classify incomplete records` — phân loại.
**Examples:** `The missingness pattern differed between people who moved and people who stayed in the study area.` → Pattern thiếu khác giữa người chuyển nhà và ở lại.
**Liên kết tiếng Hàn:** `결측 패턴`.

## 16. censoring mechanism /ˈsɛnsərɪŋ ˈmɛkəˌnɪzəm/
**Part of speech:** noun
**Core meaning (English):** the process that stops an outcome from being observed beyond a particular time or event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process chặn không cho thấy outcome sau mốc/event.
**Grammar & collocations:** `censoring-mechanism assumption` — assumption; `model administrative end of follow-up` — mô hình.
**Examples:** `The censoring mechanism included relocation, program completion, and administrative study closure.` → Mechanism gồm chuyển nơi, hoàn thành và đóng study.
**Liên kết tiếng Hàn:** `검열 메커니즘`.

## 17. return-to-study bias /rɪˈtɝn tə ˈstʌdi baɪəs/
**Part of speech:** noun
**Core meaning (English):** distortion caused when people who return after missing observations differ systematically from those who never return.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bias vì người quay lại khác hệ thống với người không quay lại.
**Grammar & collocations:** `return-to-study-bias check` — check; `compare re-entry profiles` — so.
**Examples:** `Return-to-study bias made late improvement look larger because only highly motivated learners came back.` → Bias làm improvement cuối phóng đại vì người motivated mới quay lại.
**Liên kết tiếng Hàn:** `연구 복귀 편향`.

## 18. follow-up completeness /ˈfɑloʊ ʌp kəmˈpliːtnəs/
**Part of speech:** noun
**Core meaning (English):** the proportion and pattern of planned measurements that were successfully obtained over the study period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức và pattern thu đủ measurement đã định.
**Grammar & collocations:** `follow-up-completeness report` — report; `audit retained observations` — audit.
**Examples:** `Follow-up completeness was high overall but uneven across language groups.` → Completeness cao tổng thể nhưng lệch giữa nhóm ngôn ngữ.
**Liên kết tiếng Hàn:** `추적 관찰 완전성`.

## 19. monotone dropout /ˈmɑnəˌtoʊn ˈdrɑpˌaʊt/
**Part of speech:** noun
**Core meaning (English):** withdrawal in which a participant stops contributing data and does not return for later scheduled measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rút khỏi study rồi không quay lại các wave sau.
**Grammar & collocations:** `monotone-dropout profile` — profile; `estimate attrition timing` — ước tính.
**Examples:** `Monotone dropout rose after the assessment became weekly instead of monthly.` → Dropout tăng khi assessment chuyển weekly.
**Liên kết tiếng Hàn:** `단조 탈락`.

## 20. missing-data estimand /ˈmɪsɪŋ ˈdeɪtə ˈɛstəmənd/
**Part of speech:** noun
**Core meaning (English):** the precisely defined effect or quantity that remains the target when some outcomes are unobserved.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** causal quantity cụ thể vẫn muốn ước tính dù outcome thiếu.
**Grammar & collocations:** `missing-data-estimand definition` — definition; `state the target population and time horizon` — nêu.
**Examples:** `The missing-data estimand asked about the average effect if every enrolled learner had remained eligible for follow-up.` → Estimand hỏi average effect nếu mọi learner vẫn eligible theo dõi.
**Liên kết tiếng Hàn:** `결측 데이터 추정 대상`.

## Review in context

A **pattern-mixture model**, **selection model**, or **shared-parameter model** makes different assumptions about **nonignorable missingness**. **Monotone missingness** and **intermittent missingness** require different strategies, and a **refreshment sample** can restore population coverage. An **inverse probability of censoring weight** addresses loss to follow-up, while an **informative visit process** may require **joint modeling**. **Multiple imputation by chained equations** creates plausible datasets; a **delta adjustment**, **tipping-point analysis**, or **worst-case bound** tests sensitivity. Analysts should describe each **missingness pattern** and the **censoring mechanism**, then examine **return-to-study bias**, **follow-up completeness**, and **monotone dropout**. Finally, the **missing-data estimand** must be stated before results are interpreted.

**Bản dịch tiếng Việt:** **Pattern-mixture model**, **selection model** và **shared-parameter model** đặt các assumption khác nhau về **nonignorable missingness**. **Monotone missingness** và **intermittent missingness** cần chiến lược khác, còn **refreshment sample** khôi phục coverage. **Inverse probability of censoring weight** xử lý mất follow-up, trong khi **informative visit process** có thể cần **joint modeling**. **Multiple imputation by chained equations** tạo dataset khả dĩ; **delta adjustment**, **tipping-point analysis** hoặc **worst-case bound** kiểm tra sensitivity. Analyst cần mô tả **missingness pattern** và **censoring mechanism**, rồi xem **return-to-study bias**, **follow-up completeness** và **monotone dropout**. Cuối cùng phải nêu **missing-data estimand** trước khi diễn giải.
