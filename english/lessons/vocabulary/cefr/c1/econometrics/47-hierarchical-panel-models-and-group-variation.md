# C1 Vocabulary 47 — Hierarchical panel models and group variation

This lesson follows how panel data models represent shared information, group differences, and uncertainty across units nested in larger structures.

Flow: **hierarchical panel model → group-level effect → unit-level effect → hierarchical shrinkage → multilevel prior → group-specific variance → exchangeability assumption → nested effect → unit-level predictor → varying coefficient → group intercept → panel hierarchy → pooling strength → random-effects distribution → multilevel posterior → group-specific posterior → hierarchical intercept → hierarchical slope → population-level effect → clustered outcome**.

## 1. hierarchical panel model /ˌhaɪəˈrɑrkɪkəl ˈpænəl ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a panel-data model that represents observations from units and the larger groups or levels to which they belong.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model panel-data represent observation của unit và group hoặc level lớn hơn mà unit thuộc về.
**Grammar & collocations:** `Bayesian hierarchical panel model` — model; `fit a hierarchical panel model` — fit.
**Examples:** `The hierarchical panel model linked students to classrooms and schools.` → Model panel hierarchical link student với classroom và school.
**Liên kết tiếng Hàn:** `계층적 패널 모형`.

## 2. group-level effect /ɡruːp ˈlɛvəl ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** a contribution to an outcome associated with the group shared by several observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** contribution vào outcome liên quan group mà nhiều observation share.
**Grammar & collocations:** `estimated group-level effect` — effect; `separate a group-level effect` — separate.
**Examples:** `The group-level effect captured differences between hospitals after patient factors were controlled.` → Effect group-level capture difference giữa hospital sau control patient factor.
**Liên kết tiếng Hàn:** `집단 수준 효과`.

## 3. unit-level effect /ˈjuːnɪt ˈlɛvəl ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** a contribution to an outcome that belongs to one individual unit rather than to its wider group.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** contribution outcome thuộc một unit cá nhân chứ không phải wider group.
**Grammar & collocations:** `persistent unit-level effect` — effect; `estimate a unit-level effect` — estimate.
**Examples:** `The unit-level effect reflected a firm's unusual management practice.` → Effect unit-level reflect management practice unusual của firm.
**Liên kết tiếng Hàn:** `단위 수준 효과`.

## 4. hierarchical shrinkage /ˌhaɪəˈrɑrkɪkəl ˈʃrɪŋkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the tendency for uncertain group estimates to move toward a common average in a hierarchical model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** group estimate uncertain move về common average trong hierarchical model.
**Grammar & collocations:** `adaptive hierarchical shrinkage` — shrinkage; `apply hierarchical shrinkage` — apply.
**Examples:** `Hierarchical shrinkage prevented a small school from receiving an extreme estimate based on two cases.` → Shrinkage hierarchical prevent school nhỏ nhận estimate extreme chỉ từ hai case.
**Liên kết tiếng Hàn:** `계층적 수축`.

## 5. multilevel prior /ˈmʌltiˌlɛvəl ˈpraɪər/
**Part of speech:** noun
**Core meaning (English):** a prior structure that assigns distributions to parameters at more than one level of a model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prior structure assign distribution cho parameter ở nhiều level model.
**Grammar & collocations:** `weakly informative multilevel prior` — prior; `specify a multilevel prior` — specify.
**Examples:** `The multilevel prior allowed districts to differ while sharing information about typical effects.` → Prior multilevel cho district khác nhau nhưng share information về effect typical.
**Liên kết tiếng Hàn:** `다층 사전분포`.

## 6. group-specific variance /ɡruːp spəˈsɪfɪk ˈvɛriəns/
**Part of speech:** noun
**Core meaning (English):** the amount by which a particular group's outcomes vary around its expected level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** amount outcome của group cụ thể vary quanh expected level.
**Grammar & collocations:** `large group-specific variance` — variance; `estimate group-specific variance` — estimate.
**Examples:** `The group-specific variance was higher in regions with unstable employment.` → Variance group-specific cao hơn ở region employment unstable.
**Liên kết tiếng Hàn:** `집단별 분산`.

## 7. exchangeability assumption /ɪksˌtʃeɪndʒəˈbɪləti əˈsʌmpʃən/
**Part of speech:** noun
**Core meaning (English):** the assumption that observations are treated as similarly distributed after the variables that matter are accounted for.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** assumption observation có distribution tương tự sau account variable quan trọng.
**Grammar & collocations:** `conditional exchangeability assumption` — assumption; `defend an exchangeability assumption` — defend.
**Examples:** `The exchangeability assumption was less credible when districts had different admission rules.` → Assumption exchangeability kém credible khi district có admission rule khác.
**Liên kết tiếng Hàn:** `교환 가능성 가정`.

## 8. nested effect /ˈnɛstɪd ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** an effect associated with a level that is contained inside another level, such as workers within firms.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect liên quan level nằm trong level khác như worker trong firm.
**Grammar & collocations:** `school-nested effect` — effect; `model a nested effect` — model.
**Examples:** `The nested effect separated classroom conditions from school-wide conditions.` → Effect nested tách classroom condition khỏi school-wide condition.
**Liên kết tiếng Hàn:** `중첩 효과`.

## 9. unit-level predictor /ˈjuːnɪt ˈlɛvəl prɪˈdɪktər/
**Part of speech:** noun
**Core meaning (English):** a measured variable that describes an individual observation or unit and helps explain its outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variable measured describe individual observation hoặc unit và help explain outcome.
**Grammar & collocations:** `time-varying unit-level predictor` — predictor; `include a unit-level predictor` — include.
**Examples:** `Income was a unit-level predictor of whether a household adopted insurance.` → Income là predictor unit-level về household adopt insurance không.
**Liên kết tiếng Hàn:** `단위 수준 예측 변수`.

## 10. varying coefficient /ˈvɛriɪŋ koʊəˈfɪʃənt/
**Part of speech:** noun
**Core meaning (English):** a model coefficient whose value is allowed to differ across groups, units, places, or periods.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** coefficient được allow differ giữa group, unit, place hoặc period.
**Grammar & collocations:** `group-varying coefficient` — coefficient; `estimate a varying coefficient` — estimate.
**Examples:** `A varying coefficient allowed the training effect to differ by local labor market.` → Coefficient varying cho effect training khác theo labor market local.
**Liên kết tiếng Hàn:** `변동 계수`.

## 11. group intercept /ɡruːp ˈɪntərˌsɛpt/
**Part of speech:** noun
**Core meaning (English):** a group-specific baseline level of the outcome when the other predictors are set to their reference values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** baseline outcome riêng group khi predictor khác ở reference value.
**Grammar & collocations:** `random group intercept` — intercept; `allow a group intercept` — allow.
**Examples:** `The group intercept captured persistent differences in clinic appointment rates.` → Intercept group capture difference persistent trong appointment rate clinic.
**Liên kết tiếng Hàn:** `집단 절편`.

## 12. panel hierarchy /ˈpænəl ˈhaɪəˌrɑrki/
**Part of speech:** noun
**Core meaning (English):** the arrangement of repeated observations within units and of units within larger groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** arrangement observation repeated trong unit và unit trong group lớn hơn.
**Grammar & collocations:** `complex panel hierarchy` — hierarchy; `represent the panel hierarchy` — represent.
**Examples:** `The panel hierarchy placed monthly purchases inside households and households inside neighborhoods.` → Hierarchy panel place monthly purchase trong household và household trong neighborhood.
**Liên kết tiếng Hàn:** `패널 계층`.

## 13. pooling strength /ˈpuːlɪŋ strɛŋθ/
**Part of speech:** noun
**Core meaning (English):** the degree to which a hierarchical model pulls related group estimates toward shared information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức hierarchical model kéo group estimate liên quan về shared information.
**Grammar & collocations:** `moderate pooling strength` — strength; `control pooling strength` — control.
**Examples:** `Pooling strength was reduced when the districts showed very different baseline conditions.` → Strength pooling giảm khi district có baseline condition rất khác.
**Liên kết tiếng Hàn:** `풀링 강도`.

## 14. random-effects distribution /ˈrændəm ɪˈfɛkts ˌdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** the probability distribution used to describe unobserved group or unit effects in a random-effects model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** distribution probability describe effect group hoặc unit unobserved trong random-effects model.
**Grammar & collocations:** `flexible random-effects distribution` — distribution; `assume a random-effects distribution` — assume.
**Examples:** `The random-effects distribution was widened after extreme clinic differences appeared.` → Distribution random-effects được widen sau khi difference clinic extreme xuất hiện.
**Liên kết tiếng Hàn:** `무작위 효과 분포`.

## 15. multilevel posterior /ˈmʌltiˌlɛvəl pɑˈstɪriər/
**Part of speech:** noun
**Core meaning (English):** the joint posterior distribution of parameters at several levels of a hierarchical model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** posterior joint của parameter ở nhiều level hierarchical model.
**Grammar & collocations:** `joint multilevel posterior` — posterior; `summarize the multilevel posterior` — summarize.
**Examples:** `The multilevel posterior linked national trends with local uncertainty.` → Posterior multilevel link national trend với uncertainty local.
**Liên kết tiếng Hàn:** `다층 사후분포`.

## 16. group-specific posterior /ɡruːp spəˈsɪfɪk pɑˈstɪriər/
**Part of speech:** noun
**Core meaning (English):** the posterior distribution for a parameter or effect associated with one particular group.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** posterior distribution của parameter hoặc effect liên quan group cụ thể.
**Grammar & collocations:** `uncertain group-specific posterior` — posterior; `plot a group-specific posterior` — plot.
**Examples:** `The group-specific posterior for the smallest region remained wide.` → Posterior group-specific của region nhỏ nhất vẫn wide.
**Liên kết tiếng Hàn:** `집단별 사후분포`.

## 17. hierarchical intercept /ˌhaɪəˈrɑrkɪkəl ˈɪntərˌsɛpt/
**Part of speech:** noun
**Core meaning (English):** an intercept whose group-specific values are modeled as related draws from a common higher-level distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** intercept có value group-specific được model như draw liên quan từ distribution higher-level chung.
**Grammar & collocations:** `hierarchical random intercept` — intercept; `estimate a hierarchical intercept` — estimate.
**Examples:** `The hierarchical intercept allowed each school to start from a different but related baseline.` → Intercept hierarchical cho mỗi school start baseline khác nhưng related.
**Liên kết tiếng Hàn:** `계층적 절편`.

## 18. hierarchical slope /ˌhaɪəˈrɑrkɪkəl sloʊp/
**Part of speech:** noun
**Core meaning (English):** a predictor effect whose group-specific slopes are modeled together through a higher-level distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** predictor effect có slope group-specific model cùng qua distribution higher-level.
**Grammar & collocations:** `varying hierarchical slope` — slope; `estimate a hierarchical slope` — estimate.
**Examples:** `The hierarchical slope allowed the price response to vary across neighborhoods.` → Slope hierarchical cho price response vary giữa neighborhood.
**Liên kết tiếng Hàn:** `계층적 기울기`.

## 19. population-level effect /ˌpɑpjəˈleɪʃən ˈlɛvəl ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** an average effect or relationship describing the broader population rather than one specific group.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect hoặc relationship average describe population rộng chứ không phải group cụ thể.
**Grammar & collocations:** `estimated population-level effect` — effect; `interpret a population-level effect` — interpret.
**Examples:** `The population-level effect was positive even though several regions had negative estimates.` → Effect population-level positive dù vài region có estimate negative.
**Liên kết tiếng Hàn:** `모집단 수준 효과`.

## 20. clustered outcome /ˈklʌstərd ˈaʊtˌkʌm/
**Part of speech:** noun
**Core meaning (English):** an outcome whose observations are grouped in a way that makes them more alike within clusters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** outcome có observation grouped làm chúng giống nhau hơn trong cluster.
**Grammar & collocations:** `correlated clustered outcome` — outcome; `model a clustered outcome` — model.
**Examples:** `The clustered outcome required uncertainty estimates that respected shared clinics.` → Outcome clustered cần uncertainty estimate respect clinic shared.
**Liên kết tiếng Hàn:** `군집 결과`.

## Review in context

A **hierarchical panel model** can separate a **group-level effect** from a **unit-level effect** while applying **hierarchical shrinkage** through a **multilevel prior**. A **group-specific variance** describes local uncertainty, but the **exchangeability assumption** must be credible. A **nested effect** may connect workers to firms, and a **unit-level predictor** can have a **varying coefficient**. The **group intercept** and **panel hierarchy** determine the **pooling strength**, while a **random-effects distribution** links related units. The resulting **multilevel posterior** contains each **group-specific posterior**, including a **hierarchical intercept** and **hierarchical slope**. A **population-level effect** should be interpreted carefully when the **clustered outcome** remains strongly correlated within groups.

**Bản dịch tiếng Việt:** **Hierarchical panel model** có thể tách **group-level effect** khỏi **unit-level effect** và áp dụng **hierarchical shrinkage** qua **multilevel prior**. **Group-specific variance** mô tả uncertainty local, nhưng **exchangeability assumption** phải credible. **Nested effect** có thể link worker với firm, còn **unit-level predictor** có thể có **varying coefficient**. **Group intercept** và **panel hierarchy** quyết định **pooling strength**, trong khi **random-effects distribution** link unit liên quan. **Multilevel posterior** tạo mỗi **group-specific posterior**, gồm **hierarchical intercept** và **hierarchical slope**. **Population-level effect** cần interpret cẩn thận khi **clustered outcome** vẫn correlation mạnh trong group.
