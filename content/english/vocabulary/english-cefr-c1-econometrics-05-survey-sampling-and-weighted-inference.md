# C1 Vocabulary 05 — Survey sampling and weighted inference

This lesson explains how complex sample designs and unequal selection probabilities affect estimates and uncertainty.

Flow: **sampling weight → design weight → poststratification weight → nonresponse adjustment → cluster sampling → multistage sampling → primary sampling unit → survey variance → replicate weight → balanced repeated replication → Taylor linearization → calibration weighting → weight trimming → survey-weighted estimator → finite population adjustment → stratum allocation → jackknife variance → calibration margin → weight compression → domain estimation → variance estimation**.

## 1. sampling weight /ˈsæmplɪŋ weɪt/
**Part of speech:** noun
**Core meaning (English):** a value representing how many population units an observed sample unit stands for.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trọng số cho biết một respondent đại diện bao nhiêu unit population.
**Grammar & collocations:** `sampling-weight distribution` — distribution; `apply a sampling weight` — áp dụng.
**Examples:** `A person from a rarely sampled district received a larger sampling weight.` → Người từ district hiếm mẫu nhận weight lớn hơn.
**Liên kết tiếng Hàn:** `표본 가중치`.

## 2. design weight /dɪˈzaɪn weɪt/
**Part of speech:** noun
**Core meaning (English):** the inverse of a unit's probability of selection under the sample design.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nghịch đảo xác suất một unit được chọn theo design.
**Grammar & collocations:** `design-weight calculation` — calculation; `reflect unequal selection` — phản ánh.
**Examples:** `The design weight was larger for households selected from a small oversampled region.` → Weight lớn hơn ở vùng được oversample.
**Liên kết tiếng Hàn:** `설계 가중치`.

## 3. poststratification weight /ˌpoʊstˌstrætəfəˈkeɪʃən weɪt/
**Part of speech:** noun
**Core meaning (English):** a weight adjusted after sampling so weighted totals match known population counts across poststrata.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** weight chỉnh sau sample để total khớp population biết trước.
**Grammar & collocations:** `poststratification-weight adjustment` — adjustment; `align weighted margins` — căn chỉnh.
**Examples:** `Poststratification weights aligned the survey's age totals with census counts.` → Weight làm total tuổi khớp census.
**Liên kết tiếng Hàn:** `사후 층화 가중치`.

## 4. nonresponse adjustment /ˌnɑn rɪˈspɑns əˈdʒʌstmənt/
**Part of speech:** noun
**Core meaning (English):** a change to sample weights intended to reduce bias when selected units do not provide data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh weight để giảm bias vì unit được chọn không trả lời.
**Grammar & collocations:** `nonresponse-adjustment cell` — cell; `compensate for missing interviews` — bù.
**Examples:** `Nonresponse adjustment increased the contribution of respondents who resembled hard-to-reach households.` → Adjustment tăng weight respondent giống hộ khó tiếp cận.
**Liên kết tiếng Hàn:** `무응답 조정`.

## 5. cluster sampling /ˈklʌstər ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** a design that selects groups or clusters first and then observes units within selected groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn group trước rồi lấy unit trong group.
**Grammar & collocations:** `cluster-sampling design` — design; `sample schools before students` — lấy mẫu.
**Examples:** `Cluster sampling reduced travel costs but made classmates' responses dependent.` → Lấy mẫu cụm giảm chi phí nhưng response cùng lớp phụ thuộc.
**Liên kết tiếng Hàn:** `군집 표집`.

## 6. multistage sampling /ˌmʌltiˈsteɪdʒ ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** a design that selects samples through two or more successive stages.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lấy mẫu qua từ hai stage liên tiếp trở lên.
**Grammar & collocations:** `multistage-sampling frame` — frame; `select regions, schools, and households` — chọn.
**Examples:** `Multistage sampling selected provinces, then schools, then classrooms.` → Design chọn tỉnh, school rồi classroom.
**Liên kết tiếng Hàn:** `다단계 표집`.

## 7. primary sampling unit /ˈpraɪˌmɛri ˈsæmplɪŋ ˈjuːnɪt/
**Part of speech:** noun
**Core meaning (English):** the first-level unit selected in a multistage sample.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** unit được chọn ở stage đầu tiên.
**Grammar & collocations:** `primary-sampling-unit selection` — selection; `cluster by district` — cluster.
**Examples:** `Each district was a primary sampling unit, with households selected in later stages.` → District là PSU, household chọn sau.
**Liên kết tiếng Hàn:** `1차 표본 추출 단위`.

## 8. survey variance /ˈsɝveɪ ˈvɛriəns/
**Part of speech:** noun
**Core meaning (English):** the uncertainty of a survey estimate under its actual selection, clustering, stratification, and weighting design.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bất định của estimate tính theo design thật, không giả sample random đơn giản.
**Grammar & collocations:** `survey-variance estimator` — estimator; `account for design features` — tính đến.
**Examples:** `Survey variance was larger than simple-random variance because respondents were clustered by school.` → Variance survey lớn hơn vì respondent cluster theo school.
**Liên kết tiếng Hàn:** `조사 분산`.

## 9. replicate weight /ˈrɛpləˌkeɪt weɪt/
**Part of speech:** noun
**Core meaning (English):** an alternative set of survey weights used to recompute an estimate after systematically reducing or perturbing the sample.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ weight thay thế để tính lại estimate sau khi giảm/đổi sample có hệ thống.
**Grammar & collocations:** `replicate-weight file` — file; `recompute a survey estimate` — tính lại.
**Examples:** `The public-use file included replicate weights for design-consistent variance estimation.` → File công khai có replicate weight để ước tính variance đúng design.
**Liên kết tiếng Hàn:** `반복 가중치`.

## 10. balanced repeated replication /ˈbælənst rɪˈpiːtɪd ˌrɛpləˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a replication method that repeatedly forms balanced half-samples to estimate variance under a complex design.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lặp các half-sample cân bằng để ước tính variance.
**Grammar & collocations:** `balanced-repeated-replication factor` — factor; `construct half-samples` — tạo.
**Examples:** `Balanced repeated replication preserved the survey's strata while estimating uncertainty.` → BRR giữ strata khi ước tính bất định.
**Liên kết tiếng Hàn:** `균형 반복 복제`.

## 11. Taylor linearization /ˈteɪlər ˌlɪniərəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** an approximation that linearizes a nonlinear survey statistic so its design-based variance can be estimated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xấp xỉ statistic phi tuyến bằng dạng tuyến tính để tính variance design-based.
**Grammar & collocations:** `Taylor-linearization variance` — variance; `linearize a ratio estimate` — tuyến tính hóa.
**Examples:** `Taylor linearization estimated the variance of the weighted ratio without resampling every household.` → Linearization tính variance ratio có weight mà không resample mọi hộ.
**Liên kết tiếng Hàn:** `테일러 선형화`.

## 12. calibration weighting /ˌkælɪˈbreɪʃən ˈweɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** adjusting weights so weighted sample totals satisfy known auxiliary population information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh weight để total khớp information population phụ trợ.
**Grammar & collocations:** `calibration-weighting constraint` — constraint; `match known margins` — khớp.
**Examples:** `Calibration weighting used known employment totals to improve the household estimate.` → Weight dùng total employment biết trước để cải thiện estimate.
**Liên kết tiếng Hàn:** `보정 가중`.

## 13. weight trimming /weɪt ˈtrɪmɪŋ/
**Part of speech:** noun
**Core meaning (English):** reducing extremely large weights to limit instability, usually with a documented tradeoff in bias.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm weight cực lớn để bớt instability, chấp nhận tradeoff bias.
**Grammar & collocations:** `weight-trimming threshold` — threshold; `cap an extreme weight` — giới hạn.
**Examples:** `Weight trimming reduced variance but slightly changed the population total estimate.` → Trimming giảm variance nhưng đổi nhẹ total.
**Liên kết tiếng Hàn:** `가중치 절삭`.

## 14. survey-weighted estimator /ˈsɝveɪ ˈweɪtɪd ˈɛstəˌmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator that incorporates survey weights so results represent the target population under the sample design.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator dùng survey weight để đại diện population đích.
**Grammar & collocations:** `survey-weighted-regression estimate` — estimate; `represent the target population` — đại diện.
**Examples:** `The survey-weighted estimator produced a national rate rather than an unweighted respondent average.` → Estimator cho rate toàn quốc, không phải average respondent.
**Liên kết tiếng Hàn:** `조사 가중 추정량`.

## 15. finite population adjustment /ˈfaɪˌnaɪt ˌpɑpjəˈleɪʃən əˈdʒʌstmənt/
**Part of speech:** noun
**Core meaning (English):** a correction that reduces sampling variance when a substantial fraction of a finite population is observed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh giảm variance khi sample chiếm phần lớn population hữu hạn.
**Grammar & collocations:** `finite-population-adjustment factor` — factor; `account for sampling without replacement` — tính đến.
**Examples:** `The finite population adjustment mattered because the survey covered nearly half the small registry.` → Adjustment quan trọng vì survey phủ gần nửa registry nhỏ.
**Liên kết tiếng Hàn:** `유한 모집단 조정`.

## 16. stratum allocation /ˈstrætəm ˌæləˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the planned distribution of sample units across defined strata.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân bổ số unit mẫu vào các tầng đã định.
**Grammar & collocations:** `stratum-allocation rule` — rule; `oversample a small stratum` — lấy dư.
**Examples:** `Stratum allocation gave remote communities enough cases for a separate estimate.` → Allocation cho cộng đồng xa đủ case để estimate riêng.
**Liên kết tiếng Hàn:** `층 할당`.

## 17. jackknife variance /ˈdʒækˌnaɪf ˈvɛriəns/
**Part of speech:** noun
**Core meaning (English):** a variance estimate formed by repeatedly leaving out one sampling unit or group and recalculating the statistic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variance tính bằng bỏ từng unit/group rồi tính lại statistic.
**Grammar & collocations:** `jackknife-variance replicate` — replicate; `leave out a primary unit` — bỏ.
**Examples:** `Jackknife variance showed that one large district contributed substantial uncertainty.` → Variance jackknife cho thấy một district lớn góp nhiều bất định.
**Liên kết tiếng Hàn:** `잭나이프 분산`.

## 18. calibration margin /ˌkælɪˈbreɪʃən ˈmɑrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** a known population total or constraint used as a target when survey weights are calibrated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** total/constraint population dùng làm mốc khi calibrate weight.
**Grammar & collocations:** `calibration-margin table` — table; `hit an auxiliary total` — đạt.
**Examples:** `The calibration margin was the census count of adults by region and sex.` → Margin là census người lớn theo vùng và giới.
**Liên kết tiếng Hàn:** `보정 마진`.

## 19. weight compression /weɪt kəmˈprɛʃən/
**Part of speech:** noun
**Core meaning (English):** reducing the spread of survey weights while attempting to preserve important population totals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thu hẹp độ trải weight nhưng vẫn giữ total population quan trọng.
**Grammar & collocations:** `weight-compression method` — method; `stabilize an extreme weight distribution` — ổn định.
**Examples:** `Weight compression made the estimator less sensitive to a handful of rare respondents.` → Compression làm estimator bớt nhạy với respondent hiếm.
**Liên kết tiếng Hàn:** `가중치 압축`.

## 20. domain estimation /doʊˈmeɪn ˌɛstəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** estimating a population quantity for a subgroup that may cut across the original sampling strata or clusters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimate quantity cho subgroup có thể cắt qua strata/cluster gốc.
**Grammar & collocations:** `domain-estimation variance` — variance; `estimate a subgroup with all design units` — ước tính.
**Examples:** `Domain estimation used all sampled units to estimate outcomes for rural women, not only rural clusters.` → Estimation dùng mọi unit cho phụ nữ nông thôn.
**Liên kết tiếng Hàn:** `영역 추정`.

## Review in context

A **sampling weight** begins with a **design weight** and may be changed by a **poststratification weight** or **nonresponse adjustment**. **Cluster sampling** and **multistage sampling** identify a **primary sampling unit**, which affects **survey variance**. A **replicate weight**, **balanced repeated replication**, or **Taylor linearization** can estimate that variance. **Calibration weighting** uses population information, while **weight trimming** limits extreme influence. A **survey-weighted estimator** should account for a **finite population adjustment** and the **stratum allocation**. **Jackknife variance** offers another check; a **calibration margin** defines a target, and **weight compression** can stabilize weights. **Domain estimation** reports a subgroup result without pretending that its design uncertainty disappeared.

**Bản dịch tiếng Việt:** **Sampling weight** bắt đầu từ **design weight** và có thể đổi bởi **poststratification weight** hoặc **nonresponse adjustment**. **Cluster sampling** và **multistage sampling** xác định **primary sampling unit**, từ đó ảnh hưởng **survey variance**. **Replicate weight**, **balanced repeated replication** hoặc **Taylor linearization** có thể ước tính variance. **Calibration weighting** dùng information population, còn **weight trimming** giới hạn ảnh hưởng cực đoan. **Survey-weighted estimator** nên tính **finite population adjustment** và **stratum allocation**. **Jackknife variance** là kiểm tra khác; **calibration margin** đặt target, còn **weight compression** ổn định weight. **Domain estimation** báo kết quả subgroup mà không giả vờ design uncertainty biến mất.
