# C1 Vocabulary 02 — Experimental design and policy evaluation

This lesson follows how researchers turn an intervention or policy into a credible comparison, then test its effects and limits.

Flow: **random assignment → treatment group → comparison group → treatment effect → average treatment effect → intention-to-treat → per-protocol effect → regression discontinuity → event study → synthetic control → placebo test → pretrend → spillover effect → compliance rate → treatment-on-the-treated → sharp design → fuzzy design → bandwidth choice → running variable → cutoff threshold**.

## 1. random assignment /ˈrændəm əˈsaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** assigning units to conditions by chance so that measured and unmeasured characteristics are balanced on average.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia người/đơn vị vào condition bằng ngẫu nhiên để đặc điểm cân bằng trung bình.
**Grammar & collocations:** `random-assignment procedure` — procedure; `preserve allocation concealment` — giữ kín phân bổ.
**Examples:** `Random assignment gave each eligible school the same chance of receiving the tutoring program.` → Phân bổ ngẫu nhiên cho mỗi school cơ hội như nhau nhận chương trình.
**Liên kết tiếng Hàn:** `무작위 배정`.

## 2. treatment group /ˈtriːtmənt ɡruːp/
**Part of speech:** noun
**Core meaning (English):** the units assigned to receive an intervention, exposure, or policy condition being evaluated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm nhận can thiệp/chính sách đang được đánh giá.
**Grammar & collocations:** `treatment-group mean` — mean; `compare treated units` — so sánh.
**Examples:** `The treatment group received weekly coaching while the other schools continued usual practice.` → Nhóm can thiệp nhận coaching hằng tuần.
**Liên kết tiếng Hàn:** `처치 집단`.

## 3. comparison group /kəmˈpærəsən ɡruːp/
**Part of speech:** noun
**Core meaning (English):** a group used as a reference for estimating what would have happened without the intervention.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm tham chiếu để ước tính outcome nếu không can thiệp.
**Grammar & collocations:** `comparison-group trend` — trend; `construct a credible comparison` — xây dựng.
**Examples:** `The comparison group followed the same calendar but did not receive the new materials.` → Nhóm so sánh theo cùng lịch nhưng không nhận tài liệu mới.
**Liên kết tiếng Hàn:** `비교 집단`.

## 4. treatment effect /ˈtriːtmənt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the difference in an outcome attributable to receiving one condition rather than another under a specified causal definition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh outcome được quy cho condition này thay condition kia.
**Grammar & collocations:** `treatment-effect estimate` — estimate; `heterogeneous treatment effect` — effect không đồng nhất.
**Examples:** `The estimated treatment effect was positive but smaller for learners who started far behind.` → Effect dương nhưng nhỏ hơn ở learner bắt đầu thấp.
**Liên kết tiếng Hàn:** `처치 효과`.

## 5. average treatment effect /ˈævərɪdʒ ˈtriːtmənt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the average difference between potential outcomes under two conditions across a defined target population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch outcome tiềm năng trung bình trên population đích.
**Grammar & collocations:** `average-treatment-effect estimate` — estimate; `target a policy population` — nhắm.
**Examples:** `The average treatment effect summarized the program's expected benefit across all eligible schools.` → ATE tóm tắt lợi ích kỳ vọng trên mọi school đủ điều kiện.
**Liên kết tiếng Hàn:** `평균 처치 효과`.

## 6. intention-to-treat /ɪnˈtɛnʃən tə triːt/
**Part of speech:** noun phrase
**Core meaning (English):** an analysis that compares units according to their original assignment, regardless of whether they fully followed the intervention.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích theo assignment ban đầu dù người tham gia tuân thủ đủ hay không.
**Grammar & collocations:** `intention-to-treat estimate` — estimate; `preserve original assignment` — giữ.
**Examples:** `The intention-to-treat result captured the effect of offering the program in ordinary conditions.` → ITT đo effect của việc cung cấp program trong điều kiện thường.
**Liên kết tiếng Hàn:** `치료 의도 분석`.

## 7. per-protocol effect /pɚ ˈproʊtəˌkɔl ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** an effect estimate restricted to units that followed the specified intervention protocol closely enough for the analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect chỉ tính ở người tuân protocol đủ sát.
**Grammar & collocations:** `per-protocol-effect analysis` — analysis; `restrict to adherent units` — giới hạn.
**Examples:** `The per-protocol effect was larger, but it applied only to schools that delivered every coaching session.` → Effect per-protocol lớn hơn nhưng chỉ áp dụng school dạy đủ session.
**Liên kết tiếng Hàn:** `프로토콜 순응 효과`.

## 8. regression discontinuity /rɪˈɡrɛʃən ˌdɪskənˈtɪnuəti/
**Part of speech:** noun
**Core meaning (English):** a design that estimates a local effect by comparing units just above and below an assignment cutoff.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so các case sát hai bên cutoff để ước tính effect cục bộ.
**Grammar & collocations:** `regression-discontinuity design` — design; `estimate a local treatment effect` — ước tính.
**Examples:** `Regression discontinuity compared applicants just above and below the scholarship score.` → Thiết kế so applicant ngay trên/dưới điểm học bổng.
**Liên kết tiếng Hàn:** `회귀 불연속 설계`.

## 9. event study /ɪˈvɛnt ˈstʌdi/
**Part of speech:** noun
**Core meaning (English):** a longitudinal analysis that estimates effects at multiple periods before and after a defined event or intervention.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích effect ở nhiều mốc trước/sau event.
**Grammar & collocations:** `event-study coefficient` — coefficient; `plot dynamic effects` — vẽ.
**Examples:** `The event study showed no pre-policy movement but a gradual effect afterward.` → Study không thấy movement trước policy nhưng effect tăng dần sau.
**Liên kết tiếng Hàn:** `사건 연구`.

## 10. synthetic control /sɪnˈθɛtɪk kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** a weighted combination of untreated units constructed to approximate the treated unit's pre-intervention trajectory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghép nhiều unit chưa treatment thành control giống trajectory trước can thiệp.
**Grammar & collocations:** `synthetic-control method` — method; `match pre-treatment outcomes` — khớp.
**Examples:** `A synthetic control reproduced the city's pre-policy employment path more closely than any single comparison city.` → Control tổng hợp tái tạo path việc làm sát hơn một city đơn.
**Liên kết tiếng Hàn:** `합성 통제`.

## 11. placebo test /pləˈsiːboʊ tɛst/
**Part of speech:** noun
**Core meaning (English):** a diagnostic test using a false treatment, false date, or unaffected outcome to check whether an apparent effect could be an artifact.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test giả để xem effect có phải artifact không.
**Grammar & collocations:** `placebo-test result` — result; `assign a false intervention date` — gán giả.
**Examples:** `The placebo test found no effect when the policy date was moved two years earlier.` → Test giả không thấy effect khi dời ngày policy.
**Liên kết tiếng Hàn:** `위약 검정`.

## 12. pretrend /ˈpriːˌtrɛnd/
**Part of speech:** noun
**Core meaning (English):** a pattern of outcome movement before an intervention, used to assess whether comparison groups followed similar trajectories.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trend outcome trước can thiệp để xem group có đi song song không.
**Grammar & collocations:** `pretrend check` — check; `inspect pre-intervention trajectories` — xem.
**Examples:** `A divergent pretrend weakened the claim that the later gap came from the program.` → Pretrend lệch làm claim effect yếu.
**Liên kết tiếng Hàn:** `사전 추세`.

## 13. spillover effect /ˈspɪlˌoʊvər ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** an effect of an intervention that reaches units not directly assigned to receive it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect lan sang unit không nhận can thiệp trực tiếp.
**Grammar & collocations:** `spillover-effect estimate` — estimate; `contaminate the comparison group` — làm nhiễm.
**Examples:** `A spillover effect occurred when untreated classrooms adopted the treated teacher's materials.` → Effect lan khi lớp control dùng tài liệu của teacher treatment.
**Liên kết tiếng Hàn:** `파급 효과`.

## 14. compliance rate /kəmˈplaɪəns reɪt/
**Part of speech:** noun
**Core meaning (English):** the proportion of assigned units that actually receive or follow the intervention as specified.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỉ lệ unit thật sự nhận/tuân can thiệp đúng specification.
**Grammar & collocations:** `high compliance rate` — tỉ lệ tuân thủ cao; `monitor compliance` — theo dõi.
**Examples:** `The compliance rate fell when schools had to install new equipment before training.` → Compliance giảm khi school phải lắp thiết bị trước training.
**Liên kết tiếng Hàn:** `순응률`.

## 15. treatment-on-the-treated /ˈtriːtmənt ɑn ðə triːtɪd/
**Part of speech:** noun phrase
**Core meaning (English):** the average effect among units that actually receive the treatment, under a specified causal design.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect trung bình trong nhóm thật sự nhận treatment.
**Grammar & collocations:** `treatment-on-the-treated estimate` — estimate; `account for imperfect uptake` — tính đến.
**Examples:** `The treatment-on-the-treated estimate exceeded the intention-to-treat estimate because uptake was incomplete.` → TOT lớn hơn ITT vì uptake không đủ.
**Liên kết tiếng Hàn:** `실제 처치 집단 효과`.

## 16. sharp design /ʃɑrp dɪˈzaɪn/
**Part of speech:** noun
**Core meaning (English):** a cutoff design in which crossing the assignment threshold determines treatment status without exceptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vượt cutoff là nhận treatment chắc chắn, không ngoại lệ.
**Grammar & collocations:** `sharp-design assumption` — assumption; `determine assignment exactly` — quyết định.
**Examples:** `The sharp design assigned every applicant above the score threshold to the grant program.` → Design gán mọi applicant trên threshold vào grant.
**Liên kết tiếng Hàn:** `날카로운 설계`.

## 17. fuzzy design /ˈfʌzi dɪˈzaɪn/
**Part of speech:** noun
**Core meaning (English):** a cutoff design in which crossing the threshold changes the probability of treatment but does not determine treatment perfectly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vượt threshold chỉ làm xác suất treatment đổi, không quyết định hoàn toàn.
**Grammar & collocations:** `fuzzy-design estimator` — estimator; `use the cutoff as an instrument` — dùng làm instrument.
**Examples:** `The fuzzy design used eligibility as an instrument because some qualified families declined the service.` → Design dùng eligibility làm instrument vì vài family từ chối.
**Liên kết tiếng Hàn:** `퍼지 설계`.

## 18. bandwidth choice /ˈbændˌwɪdθ tʃɔɪs/
**Part of speech:** noun
**Core meaning (English):** the choice of how wide a neighborhood around an assignment cutoff to include in a local comparison.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn vùng rộng bao nhiêu quanh cutoff để so cục bộ.
**Grammar & collocations:** `bandwidth-choice sensitivity` — sensitivity; `balance bias and precision` — cân bằng.
**Examples:** `The estimated effect changed when the bandwidth choice included a wider neighborhood.` → Effect đổi khi vùng quanh cutoff rộng hơn.
**Liên kết tiếng Hàn:** `대역폭 선택`.

## 19. running variable /ˈrʌnɪŋ ˈveriəbəl/
**Part of speech:** noun
**Core meaning (English):** the measured variable whose value determines whether a unit falls above or below an assignment cutoff.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến chạy quyết định unit nằm trên hay dưới cutoff.
**Grammar & collocations:** `running-variable density` — density; `center the running variable` — căn giữa.
**Examples:** `The entrance score was the running variable in the scholarship design.` → Điểm đầu vào là running variable.
**Liên kết tiếng Hàn:** `실행 변수`.

## 20. cutoff threshold /ˈkʌtˌɔf ˈθrɛʃˌhoʊld/
**Part of speech:** noun
**Core meaning (English):** the boundary on an assignment variable that separates units eligible for different conditions or decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới trên biến assignment chia unit vào condition/quyết định khác.
**Grammar & collocations:** `cutoff-threshold rule` — rule; `cross the eligibility boundary` — vượt.
**Examples:** `The cutoff threshold was fixed before scores were reviewed to prevent discretionary changes.` → Threshold cố định trước khi xem điểm để tránh đổi tùy ý.
**Liên kết tiếng Hàn:** `절단 임계값`.

## Review in context

**Random assignment** creates a **treatment group** and a **comparison group** for estimating a **treatment effect** or **average treatment effect**. **Intention-to-treat** preserves original assignment, while a **per-protocol effect** focuses on adherent units. Quasi-experimental designs include **regression discontinuity**, an **event study**, and **synthetic control**; a **placebo test** and a **pretrend** check probe credibility. Analysts watch for a **spillover effect** and report the **compliance rate** before interpreting a **treatment-on-the-treated** estimate. In a cutoff design, a **sharp design** assigns treatment exactly, whereas a **fuzzy design** changes treatment probability. **Bandwidth choice**, the **running variable**, and the **cutoff threshold** define the local comparison.

**Bản dịch tiếng Việt:** **Random assignment** tạo **treatment group** và **comparison group** để ước tính **treatment effect** hoặc **average treatment effect**. **Intention-to-treat** giữ assignment ban đầu, còn **per-protocol effect** tập trung vào unit tuân thủ. Các design bán thực nghiệm gồm **regression discontinuity**, **event study** và **synthetic control**; **placebo test** và **pretrend** kiểm tra độ đáng tin. Analyst cần theo dõi **spillover effect** và báo **compliance rate** trước khi diễn giải **treatment-on-the-treated**. Trong design cutoff, **sharp design** gán treatment chính xác, còn **fuzzy design** chỉ đổi xác suất treatment. **Bandwidth choice**, **running variable** và **cutoff threshold** định nghĩa so sánh cục bộ.
