# C1 Vocabulary 08 — Matching and weighted causal estimation

This lesson follows how observational studies construct more comparable groups before estimating a treatment effect.

Flow: **propensity model → matching estimator → nearest-neighbor matching → caliper matching → coarsened exact matching → inverse probability weighting → overlap weighting → entropy balancing → covariate overlap → common support → balance statistic → standardized mean difference → doubly robust → augmented inverse probability → target population → positivity bound → trimming rule → weight stabilization → matching with replacement → treatment positivity**.

## 1. propensity model /prəˈpɛnsəti ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model estimating the probability that a unit receives a treatment given its observed characteristics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model ước tính xác suất nhận treatment từ đặc điểm quan sát.
**Grammar & collocations:** `propensity-model specification` — specification; `predict treatment assignment` — dự đoán.
**Examples:** `The propensity model used prior scores, age, and school size to estimate treatment probability.` → Model dùng điểm trước, tuổi và quy mô school.
**Liên kết tiếng Hàn:** `성향 모형`.

## 2. matching estimator /ˈmætʃɪŋ ˈɛstəˌmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator that compares treated units with untreated units having similar observed characteristics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator so unit treatment với unit control có đặc điểm quan sát tương tự.
**Grammar & collocations:** `matching-estimator target` — target; `construct comparable pairs` — tạo cặp.
**Examples:** `The matching estimator compared each treated clinic with similar clinics that did not adopt the program.` → Estimator so clinic tương tự không adopt program.
**Liên kết tiếng Hàn:** `매칭 추정량`.

## 3. nearest-neighbor matching /ˈnɪrəst ˈneɪbər ˈmætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** matching each unit to one or more units with the closest observed covariate profile.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghép mỗi unit với unit có profile covariate gần nhất.
**Grammar & collocations:** `nearest-neighbor-matching rule` — rule; `match on a distance metric` — ghép.
**Examples:** `Nearest-neighbor matching paired each treated school with the closest untreated school on prior achievement.` → Ghép theo achievement trước gần nhất.
**Liên kết tiếng Hàn:** `최근접 이웃 매칭`.

## 4. caliper matching /ˈkælɪpər ˈmætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** matching that permits a pair only when its distance on a chosen score is below a specified maximum.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ ghép khi khoảng cách score dưới giới hạn.
**Grammar & collocations:** `caliper-matching width` — width; `reject a distant match` — loại.
**Examples:** `Caliper matching discarded pairs whose estimated treatment probabilities differed too much.` → Caliper loại cặp có probability lệch quá.
**Liên kết tiếng Hàn:** `캘리퍼 매칭`.

## 5. coarsened exact matching /ˈkoʊrsənd ɪɡˈzækt ˈmætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** matching after temporarily grouping covariates into meaningful ranges and requiring exact agreement on those grouped values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom covariate thành range rồi yêu cầu các range khớp hẳn.
**Grammar & collocations:** `coarsened-exact-matching grid` — grid; `coarsen a continuous covariate` — gom.
**Examples:** `Coarsened exact matching required schools to share the same broad enrollment and region categories.` → CEM yêu cầu cùng range enrollment và region.
**Liên kết tiếng Hàn:** `거친 정확 매칭`.

## 6. inverse probability weighting /ˈɪnvɝs ˌprɑbəˈbɪləti ˈweɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** weighting observations by the inverse of their estimated probability of receiving the condition they actually received.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gán weight nghịch đảo xác suất condition thật.
**Grammar & collocations:** `inverse-probability-weighting estimator` — estimator; `create a pseudo-population` — tạo.
**Examples:** `Inverse probability weighting rebalanced the observed treatment groups before outcome comparison.` → Weighting cân bằng group trước khi so outcome.
**Liên kết tiếng Hàn:** `역확률 가중`.

## 7. overlap weighting /ˈoʊvərˌlæp ˈweɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** weighting that emphasizes units whose treatment probability lies in the region shared by both treatment groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tăng weight cho unit nằm trong vùng probability chung hai group.
**Grammar & collocations:** `overlap-weighting target` — target; `focus on comparable units` — tập trung.
**Examples:** `Overlap weighting emphasized schools that could plausibly have received either policy.` → Weighting nhấn school có thể nhận policy nào cũng được.
**Liên kết tiếng Hàn:** `중첩 가중`.

## 8. entropy balancing /ˈɛntrəpi ˈbælənsɪŋ/
**Part of speech:** noun
**Core meaning (English):** a weighting method that chooses the most nearly uniform weights satisfying specified covariate balance constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn weight gần đều nhất nhưng thỏa balance constraint.
**Grammar & collocations:** `entropy-balancing constraint` — constraint; `match covariate moments` — khớp.
**Examples:** `Entropy balancing matched the treated and untreated means and variances for key baseline variables.` → Balancing khớp mean và variance baseline.
**Liên kết tiếng Hàn:** `엔트로피 균형`.

## 9. covariate overlap /ˈkoʊˌvɛriət ˌoʊvərˈlæp/
**Part of speech:** noun
**Core meaning (English):** the extent to which treated and untreated units share similar values of the characteristics used for adjustment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hai group có chung vùng giá trị covariate đến đâu.
**Grammar & collocations:** `covariate-overlap plot` — plot; `inspect comparable support` — xem.
**Examples:** `Covariate overlap was weak for the smallest rural schools.` → Overlap yếu ở school rural nhỏ.
**Liên kết tiếng Hàn:** `공변량 중첩`.

## 10. common support /ˈkɑmən səˈpɔrt/
**Part of speech:** noun
**Core meaning (English):** the range of covariate or treatment-probability values represented in both comparison groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng giá trị có mặt ở cả hai group.
**Grammar & collocations:** `common-support restriction` — restriction; `drop observations outside support` — loại.
**Examples:** `The analysis restricted inference to the common support shared by both programs.` → Phân tích chỉ suy luận trong vùng chung.
**Liên kết tiếng Hàn:** `공통 지지`.

## 11. balance statistic /ˈbæləns stəˈtɪstɪk/
**Part of speech:** noun
**Core meaning (English):** a numerical summary of how similar adjusted groups are on a covariate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số tóm tắt group đã chỉnh giống nhau thế nào trên covariate.
**Grammar & collocations:** `balance-statistic threshold` — threshold; `compare before and after adjustment` — so.
**Examples:** `The balance statistic fell below the prespecified threshold after weighting.` → Statistic giảm dưới threshold sau weighting.
**Liên kết tiếng Hàn:** `균형 통계량`.

## 12. standardized mean difference /ˈstændərˌdaɪzd miːn ˈdɪfərəns/
**Part of speech:** noun
**Core meaning (English):** a scale-free difference between group means expressed relative to a pooled measure of spread.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh mean chuẩn hóa theo độ phân tán gộp.
**Grammar & collocations:** `standardized-mean-difference plot` — plot; `assess covariate balance` — đánh giá.
**Examples:** `The standardized mean difference for prior achievement was nearly zero after matching.` → Chênh chuẩn hóa gần zero sau matching.
**Liên kết tiếng Hàn:** `표준화 평균 차이`.

## 13. doubly robust /ˈdʌbli rʌˈbʌst/
**Part of speech:** adjective
**Core meaning (English):** describing an estimator that remains consistent if either the treatment model or outcome model is correctly specified.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator vẫn đúng nếu một trong hai model đúng.
**Grammar & collocations:** `doubly-robust estimator` — estimator; `combine modeling and weighting` — kết hợp.
**Examples:** `The doubly robust estimate combined an outcome regression with inverse probability weights.` → Estimate kết hợp regression outcome và weight.
**Liên kết tiếng Hàn:** `이중 강건`.

## 14. augmented inverse probability /ɔɡˈmɛntɪd ˈɪnvɝs ˌprɑbəˈbɪləti/
**Part of speech:** noun phrase
**Core meaning (English):** an estimator that augments inverse-probability weighting with a model for the outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** weighting nghịch đảo được bổ sung bằng model outcome.
**Grammar & collocations:** `augmented-inverse-probability estimator` — estimator; `augment a weighted contrast` — bổ sung.
**Examples:** `The augmented inverse probability estimate remained stable when one treatment model was misspecified.` → Estimate ổn định khi một treatment model sai.
**Liên kết tiếng Hàn:** `증강 역확률`.

## 15. target population /ˈtɑrɡət ˌpɑpjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** the population to which an adjusted causal estimate is intended to apply.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** population mà estimate causal muốn áp dụng.
**Grammar & collocations:** `target-population definition` — definition; `transport an estimate` — chuyển.
**Examples:** `The target population was all public schools, not only schools with complete records.` → Population đích là mọi school công, không chỉ record đủ.
**Liên kết tiếng Hàn:** `목표 모집단`.

## 16. positivity bound /ˌpɑzəˈtɪvəti baʊnd/
**Part of speech:** noun
**Core meaning (English):** a specified lower and upper limit within which treatment probabilities must remain to support stable comparison.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn dưới/trên để probability treatment đủ ổn định.
**Grammar & collocations:** `positivity-bound restriction` — restriction; `exclude near-zero probabilities` — loại.
**Examples:** `The positivity bound excluded units whose treatment probability was below two percent.` → Bound loại unit probability dưới hai phần trăm.
**Liên kết tiếng Hàn:** `양성 한계`.

## 17. trimming rule /ˈtrɪmɪŋ ruːl/
**Part of speech:** noun
**Core meaning (English):** a prespecified rule for removing or capping observations with extreme probabilities or weights.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule định trước để bỏ/giới hạn probability hoặc weight cực đoan.
**Grammar & collocations:** `trimming-rule sensitivity` — sensitivity; `cap extreme weights` — giới hạn.
**Examples:** `The trimming rule removed the most isolated treated units before estimation.` → Rule loại unit treatment cô lập nhất.
**Liên kết tiếng Hàn:** `절삭 규칙`.

## 18. weight stabilization /weɪt ˌsteɪbələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** modifying weights to reduce extreme variability while preserving the intended causal target as closely as possible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh weight để giảm cực đoan nhưng giữ target causal.
**Grammar & collocations:** `weight-stabilization factor` — factor; `reduce estimator variance` — giảm.
**Examples:** `Weight stabilization reduced variance without changing the target population definition.` → Stabilization giảm variance mà không đổi population đích.
**Liên kết tiếng Hàn:** `가중치 안정화`.

## 19. matching with replacement /ˈmætʃɪŋ wɪð rɪˈpleɪsmənt/
**Part of speech:** noun
**Core meaning (English):** matching in which the same comparison unit may be used as a match for more than one treated unit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một control có thể ghép lại cho nhiều treatment unit.
**Grammar & collocations:** `matching-with-replacement design` — design; `reuse a high-quality control` — dùng lại.
**Examples:** `Matching with replacement reused the one untreated school that closely resembled several treated schools.` → Matching dùng lại school control giống nhiều school treatment.
**Liên kết tiếng Hàn:** `복원 추출 매칭`.

## 20. treatment positivity /ˈtriːtmənt ˌpɑzəˈtɪvəti/
**Part of speech:** noun
**Core meaning (English):** the condition that every relevant type of unit has a meaningful chance of receiving each treatment being compared.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mọi loại unit liên quan đều có cơ hội thực tế nhận mỗi treatment.
**Grammar & collocations:** `treatment-positivity assessment` — assessment; `check overlap by subgroup` — kiểm tra.
**Examples:** `Treatment positivity was doubtful for remote schools that had never received the technology grant.` → Positivity đáng ngờ ở school xa chưa từng nhận grant.
**Liên kết tiếng Hàn:** `처치 양성`.

## Review in context

A **propensity model** supports a **matching estimator** such as **nearest-neighbor matching**, **caliper matching**, or **coarsened exact matching**. **Inverse probability weighting**, **overlap weighting**, and **entropy balancing** reshape the sample; **covariate overlap** and **common support** show whether comparison is credible. A **balance statistic** and **standardized mean difference** assess improvement. A **doubly robust** or **augmented inverse probability** estimator can combine outcome modeling and weighting. The **target population** must be stated, and a **positivity bound** may define the usable region. A **trimming rule** and **weight stabilization** manage extremes. **Matching with replacement** can reuse a strong control, but **treatment positivity** still limits generalization.

**Bản dịch tiếng Việt:** **Propensity model** hỗ trợ **matching estimator** như **nearest-neighbor matching**, **caliper matching** hoặc **coarsened exact matching**. **Inverse probability weighting**, **overlap weighting** và **entropy balancing** tái định hình sample; **covariate overlap** và **common support** cho biết so sánh có đáng tin không. **Balance statistic** và **standardized mean difference** đánh giá cải thiện. Estimator **doubly robust** hoặc **augmented inverse probability** có thể kết hợp outcome model và weighting. Phải nêu **target population**, còn **positivity bound** định nghĩa vùng dùng được. **Trimming rule** và **weight stabilization** xử lý giá trị cực đoan. **Matching with replacement** có thể dùng lại control tốt, nhưng **treatment positivity** vẫn giới hạn khái quát.
