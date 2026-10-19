# C1 Vocabulary — Longitudinal change and missing data

This lesson follows repeated measurement from trajectory modeling through missing-data decisions and interpretation of meaningful change.

Flow: **growth curve → random intercept → random slope → intraclass correlation → missing at random → missing not at random → multiple imputation → assumption stress test → attrition pattern → baseline imbalance → regression to the mean → practice effect → minimal important difference → responder analysis → anchor-based interpretation → distribution-based interpretation → longitudinal invariance → change score → time-varying covariate → observation window**.

## 1. growth curve /ɡroʊθ kɝv/
**Part of speech:** noun
**Core meaning (English):** a statistical representation of how a measured outcome changes across time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường mô tả kết quả tăng giảm theo thời gian.
**Grammar & collocations:** `growth-curve model` — model; `estimate an outcome trajectory` — ước lượng.
**Examples:** `The growth curve showed rapid improvement during the first month and a slower plateau afterward.` → Đường tăng trưởng cho thấy tiến bộ nhanh rồi chững.
**Liên kết tiếng Hàn:** `성장 곡선`.

## 2. random intercept /ˈrændəm ˈɪntərˌsɛpt/
**Part of speech:** noun
**Core meaning (English):** a model component allowing each person or cluster to start from a different baseline level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi người có điểm xuất phát riêng trong model.
**Grammar & collocations:** `random-intercept model` — model; `allow baseline heterogeneity` — cho phép.
**Examples:** `The random intercept captured the fact that patients entered treatment with different symptom levels.` → Intercept ngẫu nhiên giữ khác biệt ban đầu.
**Liên kết tiếng Hàn:** `무작위 절편`.

## 3. random slope /ˈrændəm sloʊp/
**Part of speech:** noun
**Core meaning (English):** a model component allowing the rate of change to differ across people or clusters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ thay đổi riêng của mỗi người.
**Grammar & collocations:** `random-slope variance` — variance; `model individual trajectories` — mô hình hóa.
**Examples:** `The random slope showed that some learners improved much faster than others.` → Slope ngẫu nhiên cho thấy tốc độ học khác nhau.
**Liên kết tiếng Hàn:** `무작위 기울기`.

## 4. intraclass correlation /ˌɪntrəˈklæs ˌkɑrəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** the proportion of total variation attributable to similarity within people, teams, classrooms, or other clusters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần biến thiên do các thành viên cùng cụm giống nhau.
**Grammar & collocations:** `intraclass-correlation coefficient` — coefficient; `estimate cluster dependence` — ước lượng.
**Examples:** `A high intraclass correlation justified accounting for classroom-level clustering.` → Tương quan nội lớp cao cần tính clustering.
**Liên kết tiếng Hàn:** `급내 상관`.

## 5. missing at random /ˈmɪsɪŋ æt ˈrændəm/
**Part of speech:** adjective phrase
**Core meaning (English):** describing missingness that can be explained by variables observed in the available data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dữ liệu thiếu có thể giải thích bằng thông tin đã quan sát.
**Grammar & collocations:** `missing-at-random assumption` — assumption; `condition on observed predictors` — điều kiện hóa.
**Examples:** `The analysis used a missing-at-random assumption because dropout was linked to recorded workload.` → Giả định MAR vì bỏ cuộc liên quan workload đã ghi.
**Liên kết tiếng Hàn:** `무작위 결측`.

## 6. missing not at random /ˈmɪsɪŋ nɑt æt ˈrændəm/
**Part of speech:** adjective phrase
**Core meaning (English):** describing missingness that depends on unobserved values or reasons not fully captured by available variables.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dữ liệu thiếu liên quan chính giá trị chưa quan sát.
**Grammar & collocations:** `missing-not-at-random mechanism` — mechanism; `model the dropout reason` — mô hình.
**Examples:** `The team considered missing not at random because people with worsening pain were less likely to return.` → Cân nhắc MNAR vì người đau hơn ít quay lại.
**Liên kết tiếng Hàn:** `비무작위 결측`.

## 7. multiple imputation /ˈmʌltəpəl ɪmˌpjuˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** replacing missing values with several plausible versions and combining the resulting analyses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo nhiều bộ dữ liệu khả dĩ rồi gộp kết quả.
**Grammar & collocations:** `multiple-imputation procedure` — procedure; `pool estimates across datasets` — gộp.
**Examples:** `Multiple imputation preserved uncertainty instead of filling every blank with one fixed mean.` → Imputation nhiều lần giữ uncertainty.
**Liên kết tiếng Hàn:** `다중 대치`.

## 8. assumption stress test /əˈsʌmpʃən strɛs tɛst/
**Part of speech:** noun
**Core meaning (English):** a deliberate analysis that tests whether a conclusion survives plausible alternative assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thử các giả định hợp lý khác để xem kết luận có bền không.
**Grammar & collocations:** `assumption-stress-test scenario` — scenario; `stress-test a missingness assumption` — kiểm tra.
**Examples:** `The assumption stress test showed that the treatment estimate remained positive after different dropout assumptions.` → Kiểm tra giả định vẫn cho estimate dương.
**Liên kết tiếng Hàn:** `가정 스트레스 테스트`.

## 9. attrition pattern /əˈtrɪʃən ˈpætərn/
**Part of speech:** noun
**Core meaning (English):** the pattern of who leaves a study, when they leave, and whether their departure is related to the outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ai bỏ nghiên cứu, lúc nào và có liên quan kết quả không.
**Grammar & collocations:** `attrition-pattern table` — table; `track loss to follow-up` — theo dõi.
**Examples:** `The attrition pattern was concentrated among participants with the longest travel distance.` → Mất mẫu tập trung ở người đi xa.
**Liên kết tiếng Hàn:** `탈락 패턴`.

## 10. baseline imbalance /ˈbeɪsˌlaɪn ɪmˈbæləns/
**Part of speech:** noun
**Core meaning (English):** an initial difference between comparison groups before an intervention or follow-up period begins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hai nhóm đã khác nhau ngay từ đầu.
**Grammar & collocations:** `baseline-imbalance adjustment` — adjustment; `compare starting characteristics` — so sánh.
**Examples:** `Baseline imbalance in symptom severity made a raw post-treatment comparison misleading.` → Chênh ban đầu làm so điểm sau điều trị sai.
**Liên kết tiếng Hàn:** `기저선 불균형`.

## 11. regression to the mean /rɪˈɡrɛʃən tə ðə miːn/
**Part of speech:** noun
**Core meaning (English):** the tendency for unusually high or low measurements to move closer to the average on later measurement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm cực đoan thường bớt cực đoan khi đo lại.
**Grammar & collocations:** `regression-to-the-mean effect` — effect; `avoid mistaking fluctuation for recovery` — tránh.
**Examples:** `Regression to the mean could make symptoms appear improved even without effective treatment.` → Hồi quy về trung bình làm triệu chứng có vẻ đỡ.
**Liên kết tiếng Hàn:** `평균으로의 회귀`.

## 12. practice effect /ˈpræktɪs ɪˌfɛkt/
**Part of speech:** noun
**Core meaning (English):** score improvement caused by familiarity with a repeated task rather than by genuine change in the target ability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm tăng vì quen bài, không phải năng lực tăng thật.
**Grammar & collocations:** `practice-effect correction` — correction; `adjust for repeated exposure` — điều chỉnh.
**Examples:** `The memory score rose partly because of a practice effect on the identical list.` → Điểm nhớ tăng một phần do quen danh sách.
**Liên kết tiếng Hàn:** `연습 효과`.

## 13. minimal important difference /ˈmɪnəməl ɪmˈpɔrtənt ˈdɪfərəns/
**Part of speech:** noun
**Core meaning (English):** the smallest change that people or clinicians would consider worthwhile in practice.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi nhỏ nhất nhưng có ý nghĩa thực tế.
**Grammar & collocations:** `minimal-important-difference estimate` — estimate; `exceed a meaningful threshold` — vượt.
**Examples:** `The average gain exceeded the minimal important difference for daily functioning.` → Mức tăng vượt khác biệt tối thiểu có ý nghĩa.
**Liên kết tiếng Hàn:** `최소 중요 차이`.

## 14. responder analysis /rɪˈspɑndər əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** analysis that classifies people according to whether they reach a prespecified improvement criterion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia người đạt ngưỡng cải thiện và không đạt.
**Grammar & collocations:** `responder-analysis rule` — rule; `classify clinically meaningful improvement` — phân loại.
**Examples:** `Responder analysis found twice as many participants reaching the mobility target after coaching.` → Phân tích responder thấy số người đạt mục tiêu gấp đôi.
**Liên kết tiếng Hàn:** `반응자 분석`.

## 15. anchor-based interpretation /ˈæŋkər beɪst ˌɪntərprəˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** interpreting score change by comparing it with an external judgment of meaningful improvement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** neo mức thay đổi vào đánh giá bên ngoài có ý nghĩa.
**Grammar & collocations:** `anchor-based-interpretation method` — method; `link change to a global rating` — nối.
**Examples:** `Anchor-based interpretation used the patient's global improvement rating to explain the score change.` → Diễn giải neo dùng đánh giá cải thiện chung.
**Liên kết tiếng Hàn:** `앵커 기반 해석`.

## 16. distribution-based interpretation /ˌdɪstrəˈbjuːʃən beɪst ˌɪntərprəˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** interpreting change using statistical features such as variability, standard error, or effect size.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng đặc điểm phân bố để hiểu độ lớn thay đổi.
**Grammar & collocations:** `distribution-based-interpretation rule` — rule; `compare change with score variability` — so sánh.
**Examples:** `Distribution-based interpretation treated a half-standard-deviation shift as a useful reference.` → Diễn giải dựa phân bố dùng nửa SD làm mốc.
**Liên kết tiếng Hàn:** `분포 기반 해석`.

## 17. longitudinal invariance /ˌlɑndʒəˈtuːdənəl ɪnˈvɛriəns/
**Part of speech:** noun
**Core meaning (English):** evidence that a measure represents the same construct in the same way across repeated time points.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thước đo giữ cùng ý nghĩa qua các thời điểm.
**Grammar & collocations:** `longitudinal-invariance test` — test; `compare latent change over time` — so sánh.
**Examples:** `Longitudinal invariance was checked before interpreting a lower score as true improvement.` → Kiểm tra invariance trước khi hiểu điểm giảm là tiến bộ.
**Liên kết tiếng Hàn:** `종단 불변성`.

## 18. change score /tʃeɪndʒ skɔr/
**Part of speech:** noun
**Core meaning (English):** a value calculated by subtracting a starting measurement from a later measurement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm sau trừ điểm đầu để biểu diễn thay đổi.
**Grammar & collocations:** `change-score analysis` — analysis; `calculate pre–post difference` — tính.
**Examples:** `The change score was positive, but baseline imbalance required an adjusted model.` → Điểm thay đổi dương nhưng cần model chỉnh.
**Liên kết tiếng Hàn:** `변화 점수`.

## 19. time-varying covariate /taɪm ˈvɛriɪŋ ˈkoʊˌvɛriət/
**Part of speech:** noun
**Core meaning (English):** a predictor whose value can change during the period being analyzed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến dự báo đổi theo thời gian.
**Grammar & collocations:** `time-varying-covariate model` — model; `update exposure at each visit` — cập nhật.
**Examples:** `Daily pain was modeled as a time-varying covariate rather than a fixed baseline value.` → Đau hằng ngày là covariate biến thiên.
**Liên kết tiếng Hàn:** `시간 가변 공변량`.

## 20. observation window /ˌɑbzərˈveɪʃən ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the defined period during which repeated observations are collected for a participant or cohort.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian quy định để thu các lần quan sát.
**Grammar & collocations:** `observation-window definition` — definition; `extend follow-up` — kéo dài.
**Examples:** `The observation window ended six months after enrollment, unless a participant withdrew earlier.` → Khoảng quan sát kết thúc sáu tháng sau đăng ký.
**Liên kết tiếng Hàn:** `관찰 기간`.

## Review in context

A **growth curve** can include a **random intercept** for different starting points and a **random slope** for different rates of change. An **intraclass correlation** shows how much observations resemble others in the same cluster. Missingness may be **missing at random** or **missing not at random**, so **multiple imputation** and an **assumption stress test** examine alternative explanations. An **attrition pattern** and **baseline imbalance** can distort comparisons. **Regression to the mean** and a **practice effect** may look like improvement. A **minimal important difference** describes worthwhile change, while **responder analysis** counts people who reach it. **Anchor-based interpretation** uses an external judgment; **distribution-based interpretation** uses variability. **Longitudinal invariance** supports comparisons across time, and a **change score** summarizes pre–post movement. A **time-varying covariate** records predictors that change during follow-up, which must stay inside the planned **observation window**.

**Bản dịch tiếng Việt:** **Growth curve** có thể gồm **random intercept** cho điểm xuất phát khác nhau và **random slope** cho tốc độ thay đổi khác nhau. **Intraclass correlation** cho biết các quan sát trong cùng cụm giống nhau bao nhiêu. Dữ liệu thiếu có thể **missing at random** hoặc **missing not at random**, nên **multiple imputation** và **assumption stress test** kiểm tra các cách giải thích khác. **Attrition pattern** và **baseline imbalance** có thể làm lệch so sánh. **Regression to the mean** và **practice effect** có thể trông như tiến bộ. **Minimal important difference** mô tả thay đổi đáng kể trong thực tế, còn **responder analysis** đếm số người đạt ngưỡng đó. **Anchor-based interpretation** dùng đánh giá bên ngoài; **distribution-based interpretation** dùng độ biến thiên. **Longitudinal invariance** hỗ trợ so sánh theo thời gian, còn **change score** tóm tắt chuyển dịch trước–sau. **Time-varying covariate** ghi nhận biến dự báo thay đổi trong thời gian theo dõi, và mọi quan sát phải nằm trong **observation window** đã định.
