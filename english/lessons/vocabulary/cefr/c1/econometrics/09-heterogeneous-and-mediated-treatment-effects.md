# C1 Vocabulary 09 — Heterogeneous and mediated treatment effects

This lesson follows how causal analysts describe different effects across people and the pathways through which an intervention operates.

Flow: **effect heterogeneity → conditional average treatment effect → effect curve → mediation analysis → natural direct effect → natural indirect effect → controlled direct effect → mediator-outcome confounding → sequential ignorability → principal stratification → complier average causal effect → intermediate outcome → interventional indirect effect → effect decomposition → transport formula → g-computation → targeted maximum likelihood → causal forest → honest estimation → mediator intervention**.

## 1. effect heterogeneity /ɪˈfɛkt ˌhɛtərədʒəˈniəti/
**Part of speech:** noun
**Core meaning (English):** variation in an intervention's causal effect across people, settings, outcomes, or baseline conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect causal khác nhau theo người, bối cảnh, outcome hoặc điểm đầu.
**Grammar & collocations:** `effect-heterogeneity analysis` — analysis; `estimate subgroup variation` — ước tính.
**Examples:** `Effect heterogeneity suggested that intensive coaching helped low-performing schools most.` → Heterogeneity cho thấy coaching giúp school yếu nhất.
**Liên kết tiếng Hàn:** `효과 이질성`.

## 2. conditional average treatment effect /kənˈdɪʃənəl ˈævərɪdʒ ˈtriːtmənt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the average causal effect for units sharing specified observed characteristics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect trung bình cho unit có đặc điểm quan sát cụ thể.
**Grammar & collocations:** `conditional-average-treatment-effect estimate` — estimate; `condition on baseline risk` — điều kiện hóa.
**Examples:** `The conditional average treatment effect was larger for learners entering with weak writing skills.` → CATE lớn hơn ở learner writing yếu.
**Liên kết tiếng Hàn:** `조건부 평균 처치 효과`.

## 3. effect curve /ɪˈfɛkt kɝv/
**Part of speech:** noun
**Core meaning (English):** a curve showing how an estimated causal effect changes across a continuous characteristic or baseline level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường cong effect đổi theo một đặc điểm liên tục/level đầu.
**Grammar & collocations:** `effect-curve uncertainty band` — band; `plot treatment modification` — vẽ.
**Examples:** `The effect curve rose with baseline risk before leveling off among the highest-risk cases.` → Curve tăng theo risk rồi phẳng ở nhóm cao nhất.
**Liên kết tiếng Hàn:** `효과 곡선`.

## 4. mediation analysis /miːdiˈeɪʃən əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** analysis of whether an intervention affects an outcome partly through an intermediate process or variable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích intervention đi qua biến/quá trình trung gian nào.
**Grammar & collocations:** `mediation-analysis assumption` — assumption; `separate direct and pathway effects` — tách.
**Examples:** `Mediation analysis asked whether tutoring worked through increased practice time.` → Phân tích hỏi tutoring có tác động qua practice time không.
**Liên kết tiếng Hàn:** `매개 분석`.

## 5. natural direct effect /ˈnætʃərəl dəˈrɛkt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the effect of changing treatment while holding the mediator at the level it would naturally have under a reference condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi treatment nhưng giữ mediator ở mức tự nhiên của condition tham chiếu.
**Grammar & collocations:** `natural-direct-effect estimate` — estimate; `hold a mediator to its natural level` — giữ.
**Examples:** `The natural direct effect represented the program's influence not operating through attendance.` → Effect trực tiếp không qua attendance.
**Liên kết tiếng Hàn:** `자연 직접 효과`.

## 6. natural indirect effect /ˈnætʃərəl ˌɪndəˈrɛkt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the part of an effect transmitted through a mediator as that mediator changes naturally under treatment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần effect truyền qua mediator khi mediator đổi tự nhiên do treatment.
**Grammar & collocations:** `natural-indirect-effect estimate` — estimate; `trace a mediated pathway` — truy.
**Examples:** `The natural indirect effect operated through greater attendance and assignment completion.` → Effect gián tiếp đi qua attendance và completion.
**Liên kết tiếng Hàn:** `자연 간접 효과`.

## 7. controlled direct effect /kənˈtroʊld dəˈrɛkt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the effect of treatment if the mediator were fixed at a specified value for everyone.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect treatment khi mediator bị cố định ở một giá trị định trước.
**Grammar & collocations:** `controlled-direct-effect contrast` — contrast; `fix the mediator experimentally` — cố định.
**Examples:** `The controlled direct effect asked what coaching would do if practice time were held at ten hours.` → Hỏi effect nếu practice time cố định ten hours.
**Liên kết tiếng Hàn:** `통제 직접 효과`.

## 8. mediator-outcome confounding /ˈmiːdiˌeɪtər ˈaʊtˌkʌm kənˈfaʊndɪŋ/
**Part of speech:** noun
**Core meaning (English):** distortion caused by a common cause of the mediator and outcome that is not adequately controlled.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiễu do nguyên nhân chung của mediator và outcome chưa được control.
**Grammar & collocations:** `mediator-outcome-confounding assumption` — assumption; `adjust for post-treatment causes` — điều chỉnh.
**Examples:** `Mediator-outcome confounding made the pathway estimate sensitive to unmeasured motivation.` → Nhiễu làm pathway nhạy với motivation chưa đo.
**Liên kết tiếng Hàn:** `매개변수-결과 교란`.

## 9. sequential ignorability /sɪˈkwɛnʃəl ɪɡˌnɔrəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** an assumption that treatment and mediator assignment are unconfounded given the relevant measured history at each stage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ở mỗi stage, assignment không còn nhiễu sau khi xét history đã đo.
**Grammar & collocations:** `sequential-ignorability assumption` — assumption; `condition on treatment history` — điều kiện hóa.
**Examples:** `The mediation claim required sequential ignorability for both treatment and attendance.` → Claim cần ignorability cho treatment và attendance.
**Liên kết tiếng Hàn:** `순차 무시 가능성`.

## 10. principal stratification /ˈprɪnsəpəl ˌstrætəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** grouping units by their joint potential responses to an intermediate variable under different treatment conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm unit theo các response tiềm năng của mediator dưới condition khác.
**Grammar & collocations:** `principal-stratification subgroup` — subgroup; `classify latent compliance types` — phân loại.
**Examples:** `Principal stratification distinguished learners who would attend with either delivery format.` → Stratification tách learner sẽ attend dưới cả hai format.
**Liên kết tiếng Hàn:** `주요 층화`.

## 11. complier average causal effect /kəmˈplaɪər ˈævərɪdʒ ˈkɔzəl ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the average causal effect among units who would comply with assignment when assigned either condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect trung bình ở người sẽ tuân assignment nào cũng vậy.
**Grammar & collocations:** `complier-average-causal-effect estimate` — estimate; `interpret an instrumental contrast` — diễn giải.
**Examples:** `The complier average causal effect described benefit for families who would actually use either service option.` → Effect nói benefit ở family sẽ dùng option nào.
**Liên kết tiếng Hàn:** `순응자 평균 인과 효과`.

## 12. intermediate outcome /ˌɪntərˈmiːdiət ˈaʊtˌkʌm/
**Part of speech:** noun
**Core meaning (English):** an outcome measured after treatment but before the final outcome, potentially lying on a causal pathway.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** outcome đo sau treatment nhưng trước final outcome.
**Grammar & collocations:** `intermediate-outcome measure` — measure; `trace early response` — theo dõi.
**Examples:** `Weekly practice was an intermediate outcome between tutoring assignment and final writing quality.` → Practice là outcome trung gian.
**Liên kết tiếng Hàn:** `중간 결과`.

## 13. interventional indirect effect /ˌɪntərˈvɛnʃənəl ˌɪndəˈrɛkt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** an indirect effect defined by changing a mediator through a specified intervention distribution rather than an individual's natural counterfactual value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect gián tiếp khi can thiệp mediator theo distribution định trước.
**Grammar & collocations:** `interventional-indirect-effect estimate` — estimate; `set a mediator distribution` — đặt.
**Examples:** `The interventional indirect effect asked what would happen if practice opportunities were expanded for the whole program.` → Hỏi effect nếu mở rộng cơ hội practice toàn program.
**Liên kết tiếng Hàn:** `개입 간접 효과`.

## 14. effect decomposition /ɪˈfɛkt ˌdiːkəmˈpoʊzɪʃən/
**Part of speech:** noun
**Core meaning (English):** separating an overall causal effect into named direct, indirect, or component contributions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách effect tổng thành các phần direct/indirect/component.
**Grammar & collocations:** `effect-decomposition table` — table; `partition a total effect` — phân tách.
**Examples:** `Effect decomposition attributed half of the gain to feedback and half to additional practice.` → Decomposition quy một nửa gain cho feedback, một nửa practice.
**Liên kết tiếng Hàn:** `효과 분해`.

## 15. transport formula /ˈtrænspɔrt ˈfɔrmjələ/
**Part of speech:** noun
**Core meaning (English):** a formula that reweights or generalizes an effect from a study population to a specified target population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công thức chuyển effect từ sample sang population đích bằng reweight/generalize.
**Grammar & collocations:** `transport-formula estimate` — estimate; `reweight toward a target population` — tái trọng số.
**Examples:** `The transport formula reweighted trial participants to match the national age distribution.` → Công thức reweight participant theo phân bố tuổi quốc gia.
**Liên kết tiếng Hàn:** `수송 공식`.

## 16. g-computation /dʒiː ˌkɑmpjuˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a procedure that models outcomes under treatment conditions and averages predicted potential outcomes over a target population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model outcome dưới condition rồi average outcome tiềm năng trên population đích.
**Grammar & collocations:** `g-computation algorithm` — algorithm; `simulate potential outcomes` — mô phỏng.
**Examples:** `G-computation estimated the policy effect by predicting both treated and untreated outcomes for every school.` → G-computation dự đoán cả hai outcome cho mọi school.
**Liên kết tiếng Hàn:** `g-계산`.

## 17. targeted maximum likelihood /ˈtɑrɡətɪd ˈmæksəməm ˈlaɪkliˌhʊd/
**Part of speech:** noun
**Core meaning (English):** a semiparametric estimation procedure that updates an initial outcome model toward a target causal parameter using treatment information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** procedure cập nhật outcome model để nhắm đúng causal parameter.
**Grammar & collocations:** `targeted-maximum-likelihood estimator` — estimator; `target a causal parameter` — nhắm.
**Examples:** `Targeted maximum likelihood combined flexible prediction with an explicit treatment-effect target.` → TMLE kết hợp prediction flexible với target effect rõ.
**Liên kết tiếng Hàn:** `표적 최대우도`.

## 18. causal forest /ˈkɔzəl fɔrst/
**Part of speech:** noun
**Core meaning (English):** a tree-based ensemble method designed to estimate how treatment effects vary across units.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ensemble tree ước tính effect khác nhau giữa unit.
**Grammar & collocations:** `causal-forest variable importance` — importance; `discover effect heterogeneity` — tìm.
**Examples:** `The causal forest identified baseline attendance as a strong predictor of treatment benefit.` → Forest thấy attendance đầu là predictor benefit mạnh.
**Liên kết tiếng Hàn:** `인과 숲`.

## 19. honest estimation /ˈɑnəst ˌɛstəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** estimation that separates data used to discover subgroups or splits from data used to estimate effects, reducing adaptive overfitting.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách data tìm subgroup khỏi data ước tính effect để giảm overfit.
**Grammar & collocations:** `honest-estimation split` — split; `reserve data for inference` — để dành.
**Examples:** `Honest estimation kept the subgroup discovery step separate from the final effect estimate.` → Estimation tách discovery khỏi estimate cuối.
**Liên kết tiếng Hàn:** `정직한 추정`.

## 20. mediator intervention /ˈmiːdiˌeɪtər ˌɪntərˈvɛnʃən/
**Part of speech:** noun
**Core meaning (English):** an intervention aimed at changing an intermediate process through which a primary treatment may operate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** can thiệp nhắm mediator để thay đổi pathway của treatment chính.
**Grammar & collocations:** `mediator-intervention strategy` — strategy; `target a pathway component` — nhắm.
**Examples:** `A mediator intervention increased protected practice time rather than changing the curriculum itself.` → Intervention tăng giờ practice, không đổi curriculum.
**Liên kết tiếng Hàn:** `매개변수 개입`.

## Review in context

**Effect heterogeneity** motivates a **conditional average treatment effect** and an **effect curve**. **Mediation analysis** can separate a **natural direct effect**, **natural indirect effect**, and **controlled direct effect**, but **mediator-outcome confounding** and **sequential ignorability** matter. **Principal stratification** and the **complier average causal effect** define special latent groups; an **intermediate outcome** may lie on the pathway. An **interventional indirect effect** and **effect decomposition** describe alternative pathways. A **transport formula** can move an estimate to a target population, while **g-computation** simulates potential outcomes. **Targeted maximum likelihood**, a **causal forest**, and **honest estimation** offer flexible tools. A **mediator intervention** turns pathway evidence into a practical design.

**Bản dịch tiếng Việt:** **Effect heterogeneity** thúc đẩy ước tính **conditional average treatment effect** và vẽ **effect curve**. **Mediation analysis** có thể tách **natural direct effect**, **natural indirect effect** và **controlled direct effect**, nhưng phải xét **mediator-outcome confounding** và **sequential ignorability**. **Principal stratification** và **complier average causal effect** định nghĩa nhóm ẩn đặc biệt; **intermediate outcome** có thể nằm trên pathway. **Interventional indirect effect** và **effect decomposition** mô tả các pathway khác. **Transport formula** chuyển estimate sang population đích, còn **g-computation** mô phỏng outcome tiềm năng. **Targeted maximum likelihood**, **causal forest** và **honest estimation** cung cấp công cụ linh hoạt. **Mediator intervention** biến evidence pathway thành thiết kế thực tế.
