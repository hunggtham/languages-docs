# C1 Vocabulary — Multilevel measurement and clustered data

This lesson explains how nested learners, tasks, and settings change score interpretation and uncertainty.

Flow: **clustered response → contextual effect → ecological fallacy → compositional effect → cluster-robust standard error → sandwich estimator → multilevel shrinkage → empirical Bayes estimate → variance partition coefficient → cross-level interaction → centering decision → grand-mean centering → group-mean centering → cluster-level predictor → contextual predictor → cluster dependence → hierarchical residual → random-coefficient model → clustered standard error → multilevel residual**.

## 1. clustered response /ˈklʌstərd rɪˈspɑns/
**Part of speech:** noun
**Core meaning (English):** a response recorded within a group or setting where other responses may share conditions or influences.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** response nằm trong nhóm có chung bối cảnh/ảnh hưởng.
**Grammar & collocations:** `clustered-response structure` — structure; `account for shared context` — tính đến.
**Examples:** `A clustered response from the same classroom could not be treated as fully independent of its classmates.` → Response cùng lớp không hoàn toàn độc lập.
**Liên kết tiếng Hàn:** `군집 응답`.

## 2. contextual effect /kənˈtɛkstʃuəl ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the effect of a group's or setting's average characteristic on an individual's outcome beyond the individual's own characteristic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ảnh hưởng của mức trung bình nhóm lên cá nhân ngoài đặc điểm cá nhân.
**Grammar & collocations:** `contextual-effect estimate` — estimate; `separate person from setting` — tách.
**Examples:** `A contextual effect remained after the analysis controlled for each learner's prior score.` → Contextual effect còn sau khi control điểm trước.
**Liên kết tiếng Hàn:** `맥락 효과`.

## 3. ecological fallacy /ˌiːkəˈlɑdʒɪkəl ˈfæləsi/
**Part of speech:** noun
**Core meaning (English):** an error of inferring individual relationships from relationships observed only among groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy cá nhân từ quan hệ chỉ thấy ở cấp nhóm.
**Grammar & collocations:** `ecological-fallacy warning` — warning; `avoid a level error` — tránh.
**Examples:** `The ecological fallacy would claim that every learner benefited simply because high-spending schools had higher averages.` → Fallacy cho rằng mọi learner được lợi vì school chi nhiều có average cao.
**Liên kết tiếng Hàn:** `생태학적 오류`.

## 4. compositional effect /ˌkɑmpəˈzɪʃənəl ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** a difference in a group's outcome caused by the characteristics of the people composing it rather than by the group context itself.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khác biệt nhóm do thành phần người, không phải bối cảnh nhóm.
**Grammar & collocations:** `compositional-effect adjustment` — adjustment; `control group composition` — kiểm soát.
**Examples:** `The apparent school effect disappeared after a compositional effect from prior preparation was modeled.` → Hiệu ứng school biến mất sau khi model preparation.
**Liên kết tiếng Hàn:** `구성 효과`.

## 5. cluster-robust standard error /ˈklʌstər rɑːˈbʌst ˈstændərd ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** an uncertainty estimate adjusted for dependence among observations within the same cluster.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** standard error đã chỉnh cho các quan sát cùng cluster không độc lập.
**Grammar & collocations:** `cluster-robust-standard-error adjustment` — adjustment; `allow within-group dependence` — cho phép.
**Examples:** `The cluster-robust standard error widened the interval for the program effect.` → Standard error robust làm interval của effect rộng hơn.
**Liên kết tiếng Hàn:** `군집 강건 표준 오차`.

## 6. sandwich estimator /ˈsændwɪtʃ ˈɛstəˌmeɪtər/
**Part of speech:** noun
**Core meaning (English):** a variance estimator that remains useful under certain forms of model misspecification by combining empirical and model-based information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator variance “kẹp” empirical với model-based để bền hơn.
**Grammar & collocations:** `sandwich-estimator variance` — variance; `protect inference against misspecification` — bảo vệ.
**Examples:** `The sandwich estimator preserved more credible uncertainty when residual variance was uneven across clinics.` → Estimator giữ bất định đáng tin khi variance lệch giữa clinic.
**Liên kết tiếng Hàn:** `샌드위치 추정량`.

## 7. multilevel shrinkage /ˈmʌltiˌlɛvəl ˈʃrɪŋkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the partial movement of noisy group estimates toward an overall mean when group sample sizes are small.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kéo estimate nhóm nhỏ, nhiễu về mean chung một phần.
**Grammar & collocations:** `multilevel-shrinkage estimate` — estimate; `stabilize a small-area comparison` — ổn định.
**Examples:** `Multilevel shrinkage prevented a tiny school from appearing exceptionally weak because of one unusual cohort.` → Shrinkage ngăn school nhỏ bị coi quá yếu vì cohort lạ.
**Liên kết tiếng Hàn:** `다층 수축`.

## 8. empirical Bayes estimate /ɛmˈpɪrɪkəl beɪz ˈɛstəˌmeɪt/
**Part of speech:** noun
**Core meaning (English):** a group or individual estimate that combines observed data with an estimated population distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimate trộn data quan sát với phân bố population ước tính.
**Grammar & collocations:** `empirical-Bayes estimate` — estimate; `borrow strength across groups` — mượn thông tin.
**Examples:** `The empirical Bayes estimate was more stable than the raw clinic average with only twelve cases.` → Estimate ổn định hơn average thô với 12 ca.
**Liên kết tiếng Hàn:** `경험적 베이즈 추정치`.

## 9. variance partition coefficient /ˈvɛriəns pɑrˈtɪʃən koʊəˈfɪʃənt/
**Part of speech:** noun
**Core meaning (English):** the proportion of total outcome variance attributable to differences between clusters rather than within clusters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỉ lệ variance do khác biệt giữa cluster.
**Grammar & collocations:** `variance-partition-coefficient estimate` — estimate; `quantify clustering` — định lượng.
**Examples:** `A low variance partition coefficient suggested that most differences occurred among learners within the same school.` → Coefficient thấp nghĩa phần lớn khác biệt ở trong school.
**Liên kết tiếng Hàn:** `분산 분할 계수`.

## 10. cross-level interaction /ˈkrɔs ˈlɛvəl ˌɪntərˈækʃən/
**Part of speech:** noun
**Core meaning (English):** an interaction in which a variable at one level changes the effect of a variable at another level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến cấp này làm đổi effect của biến cấp khác.
**Grammar & collocations:** `cross-level-interaction term` — term; `moderate an individual effect` — điều biến.
**Examples:** `A cross-level interaction showed that feedback helped more in classrooms with protected practice time.` → Interaction cho thấy feedback hiệu quả hơn khi lớp có giờ luyện.
**Liên kết tiếng Hàn:** `수준 간 상호작용`.

## 11. centering decision /ˈsɛntərɪŋ dɪˈsɪʒən/
**Part of speech:** noun
**Core meaning (English):** the analytic choice of which reference value to subtract from a predictor before fitting a multilevel model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyết định trừ mốc nào khỏi predictor trước khi model.
**Grammar & collocations:** `centering-decision rationale` — rationale; `separate within and between effects` — tách.
**Examples:** `The centering decision determined whether the coefficient described a learner's deviation from peers.` → Centering quyết định coefficient nói deviation cá nhân hay không.
**Liên kết tiếng Hàn:** `센터링 결정`.

## 12. grand-mean centering /ˌɡrænd ˈmiːn ˈsɛntərɪŋ/
**Part of speech:** noun
**Core meaning (English):** subtracting the overall sample mean from a predictor so its coefficient is interpreted at the average observed value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trừ mean toàn sample để hệ số đọc tại mức trung bình.
**Grammar & collocations:** `grand-mean-centered predictor` — predictor; `interpret the intercept at the sample mean` — diễn giải.
**Examples:** `Grand-mean centering made the intercept describe an average learner in an average setting.` → Centering làm intercept là learner và setting average.
**Liên kết tiếng Hàn:** `전체 평균 중심화`.

## 13. group-mean centering /ˈɡruːp miːn ˈsɛntərɪŋ/
**Part of speech:** noun
**Core meaning (English):** subtracting each group's mean from individual predictor values to isolate within-group differences.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trừ mean riêng của group để tách khác biệt trong group.
**Grammar & collocations:** `group-mean-centered score` — score; `estimate a within-cluster effect` — ước tính.
**Examples:** `Group-mean centering asked whether a learner studied more than classmates in the same school.` → Centering hỏi learner học hơn bạn cùng school không.
**Liên kết tiếng Hàn:** `집단 평균 중심화`.

## 14. cluster-level predictor /ˈklʌstər ˈlɛvəl prɪˈdɪktər/
**Part of speech:** noun
**Core meaning (English):** a predictor whose value is defined for an entire group or setting.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** predictor có cùng giá trị cho cả group/setting.
**Grammar & collocations:** `cluster-level-predictor coefficient` — coefficient; `compare school resources` — so.
**Examples:** `School funding was entered as a cluster-level predictor, not as an individual learner attribute.` → Funding là predictor cấp school, không phải thuộc tính learner.
**Liên kết tiếng Hàn:** `군집 수준 예측 변수`.

## 15. contextual predictor /kənˈtɛkstʃuəl prɪˈdɪktər/
**Part of speech:** noun
**Core meaning (English):** a group-level summary used to represent the environment surrounding individual observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** summary cấp group đại diện môi trường quanh cá nhân.
**Grammar & collocations:** `contextual-predictor interpretation` — interpretation; `model the surrounding environment` — mô hình.
**Examples:** `Average peer practice served as a contextual predictor after individual practice was entered separately.` → Practice trung bình peer là predictor môi trường sau khi tách practice cá nhân.
**Liên kết tiếng Hàn:** `맥락 예측 변수`.

## 16. cluster dependence /ˈklʌstər dɪˈpɛndəns/
**Part of speech:** noun
**Core meaning (English):** the statistical dependence among observations that share a cluster, setting, rater, or occasion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các quan sát chung cluster có liên hệ thống kê.
**Grammar & collocations:** `cluster-dependence diagnostic` — diagnostic; `adjust the effective information` — điều chỉnh.
**Examples:** `Ignoring cluster dependence made the confidence interval look narrower than the data justified.` → Bỏ qua dependence làm interval hẹp giả.
**Liên kết tiếng Hàn:** `군집 의존성`.

## 17. hierarchical residual /ˌhaɪəˈrɑrkɪkəl rɪˈzɪdʒuəl/
**Part of speech:** noun
**Core meaning (English):** an unexplained component of an outcome that remains at a particular level of a nested model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần chưa giải thích còn lại ở một cấp trong model lồng.
**Grammar & collocations:** `hierarchical-residual variance` — variance; `inspect unexplained school differences` — xem.
**Examples:** `The hierarchical residual at the clinic level suggested an omitted scheduling factor.` → Residual cấp clinic gợi ý thiếu factor scheduling.
**Liên kết tiếng Hàn:** `계층적 잔차`.

## 18. random-coefficient model /ˈrændəm koʊəˈfɪʃənt ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a multilevel model that allows one or more effects to vary across groups instead of forcing them to be identical.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model cho phép effect đổi giữa group.
**Grammar & collocations:** `random-coefficient-model slope` — slope; `allow heterogeneous intervention effects` — cho phép.
**Examples:** `A random-coefficient model showed that the coaching effect varied substantially by instructor.` → Model cho thấy coaching effect khác mạnh theo instructor.
**Liên kết tiếng Hàn:** `무작위 계수 모형`.

## 19. clustered standard error /ˈklʌstərd ˈstændərd ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** a standard error calculated with a correction for correlated observations inside groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** standard error có correction cho tương quan trong group.
**Grammar & collocations:** `clustered-standard-error option` — option; `report robust uncertainty` — báo.
**Examples:** `The clustered standard error was reported beside the coefficient so readers could judge precision.` → Báo standard error cạnh coefficient để đọc precision.
**Liên kết tiếng Hàn:** `군집 표준 오차`.

## 20. multilevel residual /ˈmʌltiˌlɛvəl rɪˈzɪdʒuəl/
**Part of speech:** noun
**Core meaning (English):** an unexplained deviation that is defined relative to the level of a multilevel model where it occurs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** deviation chưa giải thích, gắn với cấp model xảy ra.
**Grammar & collocations:** `multilevel-residual plot` — plot; `trace unexplained variation by level` — truy.
**Examples:** `The multilevel residual plot revealed extra variation among tasks within the same classroom.` → Plot lộ variation thêm giữa task cùng lớp.
**Liên kết tiếng Hàn:** `다층 잔차`.

## Review in context

A **clustered response** carries **cluster dependence**, so a **contextual effect** must be separated from a **compositional effect** and from the **ecological fallacy**. Analysts may use a **cluster-robust standard error** or a **sandwich estimator**. **Multilevel shrinkage** and an **empirical Bayes estimate** stabilize small groups; a **variance partition coefficient** summarizes between-group variation. A **cross-level interaction** depends on the **centering decision**: **grand-mean centering** and **group-mean centering** answer different questions. A **cluster-level predictor** and a **contextual predictor** describe settings. **Hierarchical residual** variation can be modeled with a **random-coefficient model**, then reported with a **clustered standard error** and inspected through a **multilevel residual** plot.

**Bản dịch tiếng Việt:** **Clustered response** có **cluster dependence**, nên phải tách **contextual effect** khỏi **compositional effect** và tránh **ecological fallacy**. Có thể dùng **cluster-robust standard error** hoặc **sandwich estimator**. **Multilevel shrinkage** và **empirical Bayes estimate** ổn định nhóm nhỏ; **variance partition coefficient** tóm tắt variance giữa nhóm. **Cross-level interaction** phụ thuộc **centering decision**: **grand-mean centering** và **group-mean centering** trả lời câu hỏi khác nhau. **Cluster-level predictor** và **contextual predictor** mô tả môi trường. Variation dạng **hierarchical residual** có thể model bằng **random-coefficient model**, rồi báo **clustered standard error** và xem plot **multilevel residual**.
