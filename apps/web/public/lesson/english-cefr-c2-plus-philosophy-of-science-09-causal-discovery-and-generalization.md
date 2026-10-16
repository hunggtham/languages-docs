# C2+ Vocabulary — Causal discovery and generalization

This lesson follows how researchers infer causal structure, distinguish heterogeneous effects, and transport conclusions across settings. The network is **causal discovery → constraint-based discovery → score-based discovery → functional causal model → graph sufficiency → adjacency faithfulness → Markov equivalence → intervention data → natural experiment → mechanism discovery → causal heterogeneity → effect modification → mediated-effect decomposition → moderation analysis → route-specific effect → post-treatment stratum → generalization functional → transport graph → intermediate endpoint → proxy measure → negative-control design → sham intervention → bias sensitivity parameter → set identification → target causal quantity**.

## 1. causal discovery /ˈkɔzəl dɪˈskʌvəri/
**Part of speech:** noun
**Core meaning (English):** the process of learning possible causal structure from data, background knowledge, and carefully designed interventions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** causal discovery tìm graph hoặc pathway có thể giải thích data, nhưng cần assumptions và validation.
**Grammar & collocations:** `causal-discovery algorithm` — algorithm; `discover a causal graph` — discover; `background knowledge` — knowledge.
**Examples:** `Causal discovery proposed three candidate pathways for the observed ecological change.` → Causal discovery đề xuất ba pathway cho ecological change.
**Liên kết tiếng Hàn:** `인과 발견` — causal discovery.

## 2. constraint-based discovery /kənˈstreɪnt beɪst dɪˈskʌvəri/
**Part of speech:** noun
**Core meaning (English):** causal discovery that uses conditional-independence tests and background constraints to remove or retain graph edges.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** constraint-based discovery dùng independence test và rule để prune graph.
**Grammar & collocations:** `constraint-based-discovery procedure` — procedure; `test conditional independence` — test; `remove an edge` — remove.
**Examples:** `Constraint-based discovery removed the proposed link after conditioning on seasonal rainfall.` → Constraint-based discovery remove link sau khi condition seasonal rainfall.
**Liên kết tiếng Hàn:** `제약 기반 발견` — constraint-based discovery.

## 3. score-based discovery /skɔr beɪst dɪˈskʌvəri/
**Part of speech:** noun
**Core meaning (English):** causal discovery that searches over candidate graphs and ranks them with a statistical or information-based score.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** score-based discovery thử nhiều graph rồi rank theo score fit/complexity.
**Grammar & collocations:** `score-based-discovery search` — search; `score a graph` — score; `penalized likelihood` — likelihood.
**Examples:** `Score-based discovery favored a simpler graph after the complexity penalty was applied.` → Score-based discovery chọn graph đơn giản hơn sau complexity penalty.
**Liên kết tiếng Hàn:** `점수 기반 발견` — score-based discovery.

## 4. functional causal model /ˈfʌŋkʃənəl ˈkɔzəl ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a causal model that represents each variable as a function of its causes and an exogenous disturbance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** functional causal model viết mỗi variable như function của parent và noise ngoài system.
**Grammar & collocations:** `functional-causal-model specification` — specification; `define a structural function` — define; `exogenous disturbance` — disturbance.
**Examples:** `The functional causal model simulated how policy changes propagated through household decisions.` → Functional causal model simulate policy change qua household decision.
**Liên kết tiếng Hàn:** `함수적 인과 모형` — functional causal model.

## 5. graph sufficiency /ɡræf səˈfɪʃənsi/
**Part of speech:** noun
**Core meaning (English):** the condition that a causal graph contains the relevant common causes and pathways needed for a stated inference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph sufficiency hỏi graph đã chứa cause/pathway cần thiết cho inference chưa.
**Grammar & collocations:** `graph-sufficiency assumption` — assumption; `check graph sufficiency` — check; `omitted common cause` — cause.
**Examples:** `The analysts questioned graph sufficiency because neighborhood mobility was absent.` → Analyst nghi graph sufficiency vì thiếu neighborhood mobility.
**Liên kết tiếng Hàn:** `그래프 충분성` — graph sufficiency.

## 6. adjacency faithfulness /əˈdʒeɪsənsi ˈfeɪθfəlnəs/
**Part of speech:** noun
**Core meaning (English):** an assumption that an edge in a causal graph corresponds to a genuine direct relation rather than a cancellation or accidental dependence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** adjacency faithfulness nối edge với direct relation thật, tránh edge xuất hiện do coincidence/cancellation.
**Grammar & collocations:** `adjacency-faithfulness assumption` — assumption; `faithful edge` — edge; `direct relation` — relation.
**Examples:** `The method relied on adjacency faithfulness when interpreting each retained edge as direct.` → Method dựa vào adjacency faithfulness khi xem retained edge là direct.
**Liên kết tiếng Hàn:** `인접성 충실성` — adjacency faithfulness.

## 7. Markov equivalence /ˈmɑrkɔv ɪˈkwɪvələns/
**Part of speech:** noun
**Core meaning (English):** a relation in which different causal graphs imply the same set of conditional-independence patterns from observational data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** Markov equivalence nghĩa là observational data không tách được vài graph khác nhau.
**Grammar & collocations:** `Markov-equivalence class` — class; `identify an equivalence class` — identify; `orient an edge` — orient.
**Examples:** `The observational sample left two graphs in Markov equivalence.` → Observational sample để lại hai graph trong Markov equivalence.
**Liên kết tiếng Hàn:** `마르코프 동치` — Markov equivalence.

## 8. intervention data /ˌɪntərˈvɛnʃən ˈdeɪtə/
**Part of speech:** noun
**Core meaning (English):** data collected after deliberately changing a variable or condition to observe downstream consequences.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** intervention data đến từ action có chủ đích, giúp orient graph mà observation-only không làm được.
**Grammar & collocations:** `intervention-data regime` — regime; `collect intervention data` — collect; `manipulated variable` — variable.
**Examples:** `Intervention data distinguished the two graphs that observational records could not separate.` → Intervention data phân biệt hai graph mà observational record không tách được.
**Liên kết tiếng Hàn:** `개입 데이터` — intervention data.

## 9. natural experiment /ˈnætʃərəl ɪkˈspɛrəmənt/
**Part of speech:** noun
**Core meaning (English):** a situation in which an external event or rule creates plausibly exogenous variation resembling an experiment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** natural experiment mượn variation bên ngoài như policy cutoff, không do researcher randomize.
**Grammar & collocations:** `natural-experiment design` — design; `exploit exogenous variation` — exploit; `policy cutoff` — cutoff.
**Examples:** `The school-boundary change created a natural experiment in access to transit.` → School-boundary change tạo natural experiment về access transit.
**Liên kết tiếng Hàn:** `자연 실험` — natural experiment.

## 10. mechanism discovery /ˈmɛkəˌnɪzəm dɪˈskʌvəri/
**Part of speech:** noun
**Core meaning (English):** investigation aimed at identifying the entities, activities, and interactions that generate an observed effect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mechanism discovery đi sâu từ association đến entity, activity và interaction tạo effect.
**Grammar & collocations:** `mechanism-discovery study` — study; `identify a generative pathway` — identify; `process evidence` — evidence.
**Examples:** `The intervention was followed by mechanism discovery using tissue-level measurements.` → Intervention được nối với mechanism discovery bằng tissue-level measurement.
**Liên kết tiếng Hàn:** `메커니즘 발견` — mechanism discovery.

## 11. causal heterogeneity /ˈkɔzəl ˌhɛtərəˈdʒəniəti/
**Part of speech:** noun
**Core meaning (English):** variation in a causal effect across people, places, times, doses, or other conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** causal heterogeneity nhắc rằng effect không nhất thiết giống nhau cho mọi subgroup/context.
**Grammar & collocations:** `causal-heterogeneity analysis` — analysis; `vary across subgroups` — vary; `heterogeneous effect` — effect.
**Examples:** `Causal heterogeneity was strongest between urban and rural clinics.` → Causal heterogeneity mạnh nhất giữa urban và rural clinic.
**Liên kết tiếng Hàn:** `인과적 이질성` — causal heterogeneity.

## 12. effect modification /ɪˈfɛkt ˌmɑdəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a change in the size or direction of an effect across levels of another variable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect modification nói effect thay đổi theo modifier, không nhất thiết là bias cần “sửa”.
**Grammar & collocations:** `effect-modification term` — term; `modify an effect` — modify; `interaction pattern` — pattern.
**Examples:** `The analysis found effect modification by baseline immunity.` → Analysis tìm effect modification theo baseline immunity.
**Liên kết tiếng Hàn:** `효과 수정` — effect modification.

## 13. mediated-effect decomposition /ˈmiːdieɪtɪd ɪˈfɛkt ˌdiːkɑmpəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** decomposition of a total causal effect into pathways that operate through specified intermediate variables.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mediated-effect decomposition tách total effect theo pathway trung gian, cần assumptions mạnh.
**Grammar & collocations:** `mediated-effect decomposition` — decomposition; `decompose a total effect` — decompose; `intermediate pathway` — pathway.
**Examples:** `Mediated-effect decomposition separated the effect through trust from the effect through price.` → Decomposition tách effect qua trust khỏi effect qua price.
**Liên kết tiếng Hàn:** `매개 효과 분해` — mediated-effect decomposition.

## 14. moderation analysis /ˌmɑdəˈreɪʃən əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** analysis of whether the effect of one variable depends on the level of another variable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** moderation analysis kiểm tra “effect của X với Y đổi theo Z không?”.
**Grammar & collocations:** `moderation-analysis model` — model; `test an interaction` — test; `conditional effect` — effect.
**Examples:** `Moderation analysis showed that the training effect was larger for novice workers.` → Moderation analysis cho thấy training effect lớn hơn ở novice worker.
**Liên kết tiếng Hàn:** `조절 분석` — moderation analysis.

## 15. route-specific effect /ruːt spəˈsɪfɪk ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** a causal effect attributed to one specified pathway while other pathways are held or conceptually separated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** route-specific effect hỏi riêng pathway nào tạo bao nhiêu effect.
**Grammar & collocations:** `route-specific-effect estimate` — estimate; `isolate a pathway` — isolate; `pathway-specific contrast` — contrast.
**Examples:** `The study estimated a route-specific effect through improved adherence.` → Study estimate route-specific effect qua improved adherence.
**Liên kết tiếng Hàn:** `경로별 효과` — route-specific effect.

## 16. post-treatment stratum /poʊst ˈtriːtmənt ˈstrætəm/
**Part of speech:** noun
**Core meaning (English):** a subgroup defined by a variable measured after treatment or exposure, whose use may introduce selection complications.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** post-treatment stratum được tạo sau treatment; conditioning vào nó có thể mở bias pathway.
**Grammar & collocations:** `post-treatment-stratum analysis` — analysis; `condition on a post-treatment variable` — condition; `selection complication` — complication.
**Examples:** `The investigators avoided conditioning on a post-treatment stratum that the intervention itself could change.` → Investigators tránh condition vào stratum mà intervention có thể đổi.
**Liên kết tiếng Hàn:** `치료 후 층화` — post-treatment stratum.

## 17. generalization functional /ˌdʒɛnərələˈzeɪʃən ˈfʌŋkʃənəl/
**Part of speech:** noun
**Core meaning (English):** a mathematical expression that maps study information and target-population structure into an effect applicable beyond the original sample.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** generalization functional là công thức map trial evidence sang target population.
**Grammar & collocations:** `generalization-functional derivation` — derivation; `generalize an effect` — generalize; `target-population structure` — structure.
**Examples:** `The generalization functional reweighted trial outcomes to match the regional age distribution.` → Functional reweight trial outcome theo regional age distribution.
**Liên kết tiếng Hàn:** `일반화 함수` — generalization functional.

## 18. transport graph /ˈtrænspɔrt ɡræf/
**Part of speech:** noun
**Core meaning (English):** a causal graph that represents differences between a study setting and a target setting relevant to transporting an effect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transport graph map relation khác nhau giữa study site và target site.
**Grammar & collocations:** `transport-graph criterion` — criterion; `transport an effect` — transport; `site difference` — difference.
**Examples:** `The transport graph identified age and treatment access as variables that differed between sites.` → Transport graph chỉ ra age và treatment access khác giữa site.
**Liên kết tiếng Hàn:** `이송 그래프` — transport graph.

## 19. intermediate endpoint /ˌɪntərˈmiːdiət ˈɛndˌpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** an outcome measured between an intervention and a final health or policy outcome, often used to understand a pathway.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** intermediate endpoint nằm giữa intervention và final outcome; useful nhưng chưa chắc substitute được final benefit.
**Grammar & collocations:** `intermediate-endpoint measure` — measure; `track an intermediate outcome` — track; `surrogate pathway` — pathway.
**Examples:** `Viral load was treated as an intermediate endpoint rather than the final patient outcome.` → Viral load là intermediate endpoint, không phải final patient outcome.
**Liên kết tiếng Hàn:** `중간 평가변수` — intermediate endpoint.

## 20. proxy measure /ˈprɑksi ˈmɛʒər/
**Part of speech:** noun
**Core meaning (English):** a measure used as an indirect stand-in for a construct that is difficult, costly, or impossible to observe directly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** proxy measure là đại diện gián tiếp; phải kiểm tra proxy có giữ relation với target không.
**Grammar & collocations:** `proxy-measure validity` — validity; `use a proxy` — use; `indirect indicator` — indicator.
**Examples:** `Attendance was a weak proxy measure for actual engagement with the course.` → Attendance là proxy measure yếu cho engagement thật.
**Liên kết tiếng Hàn:** `대리 측정치` — proxy measure.

## 21. negative-control design /ˈnɛɡətɪv kənˈtroʊl dɪˈzaɪn/
**Part of speech:** noun
**Core meaning (English):** a design using an exposure or outcome that should not be causally affected to detect residual confounding or bias.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** negative-control design dùng control “không nên effect” để lộ bias còn sót.
**Grammar & collocations:** `negative-control design` — design; `detect residual bias` — detect; `negative-control outcome` — outcome.
**Examples:** `The negative-control design revealed a common measurement error in the exposure data.` → Negative-control design lộ measurement error chung.
**Liên kết tiếng Hàn:** `음성 대조 설계` — negative-control design.

## 22. sham intervention /ʃæm ˌɪntərˈvɛnʃən/
**Part of speech:** noun
**Core meaning (English):** a procedure designed to resemble an intervention without delivering its active causal component.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sham intervention giống treatment về experience nhưng thiếu active component để tách expectation effect.
**Grammar & collocations:** `sham-intervention arm` — arm; `administer a sham` — administer; `active component` — component.
**Examples:** `The trial compared the device with a sham intervention that preserved the same appointment ritual.` → Trial compare device với sham intervention giữ appointment ritual.
**Liên kết tiếng Hàn:** `가짜 개입` — sham intervention.

## 23. bias sensitivity parameter /ˈbaɪəs ˌsɛnsəˈtɪvəti pəˈræmətər/
**Part of speech:** noun
**Core meaning (English):** a parameter varied in sensitivity analysis to represent the size or direction of a possible unmeasured bias.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bias sensitivity parameter cho phép hỏi “bias phải lớn đến mức nào mới đổi conclusion?”.
**Grammar & collocations:** `bias-sensitivity parameter` — parameter; `vary a parameter` — vary; `unmeasured-confounding scenario` — scenario.
**Examples:** `The bias sensitivity parameter showed that a moderate hidden confounder could erase the effect.` → Parameter cho thấy moderate hidden confounder có thể xóa effect.
**Liên kết tiếng Hàn:** `편향 민감도 매개변수` — bias sensitivity parameter.

## 24. set identification /sɛt aɪˌdɛntəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** identification of a range of values compatible with the data and assumptions rather than one point estimate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** set identification trả về interval/set vì evidence chưa đủ chọn một point duy nhất.
**Grammar & collocations:** `set-identification region` — region; `identify an interval` — identify; `partial-information bound` — bound.
**Examples:** `Set identification produced a range of plausible effects under weak assumptions.` → Set identification tạo range effect plausible dưới weak assumption.
**Liên kết tiếng Hàn:** `집합 식별` — set identification.

## 25. target causal quantity /ˈtɑrɡət ˈkɔzəl ˈkwɑntəti/
**Part of speech:** noun
**Core meaning (English):** the precisely defined causal contrast or summary a study aims to estimate for a specified population, intervention, and time period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** target causal quantity nói rõ effect nào, population nào, intervention nào và time nào.
**Grammar & collocations:** `target-causal-quantity definition` — definition; `define the estimand` — define; `population-specific contrast` — contrast.
**Examples:** `The protocol defined the target causal quantity before choosing the estimator.` → Protocol define target causal quantity trước khi chọn estimator.
**Liên kết tiếng Hàn:** `목표 인과량` — target causal quantity.

## Review in context

**Causal discovery** can be **constraint-based discovery** or **score-based discovery**, and a **functional causal model** makes its assumptions explicit. **Graph sufficiency**, **adjacency faithfulness**, and **Markov equivalence** determine what observational data can identify; **intervention data** or a **natural experiment** may add leverage for **mechanism discovery**. Effects can show **causal heterogeneity** and **effect modification**. A **mediated-effect decomposition**, **moderation analysis**, or **route-specific effect** must be careful with a **post-treatment stratum**. To move beyond one sample, a **generalization functional** and **transport graph** describe the target setting. An **intermediate endpoint** and **proxy measure** are useful but imperfect. A **negative-control design** and **sham intervention** probe bias, while a **bias sensitivity parameter** represents hidden confounding. **Set identification** may be more honest than a point estimate, provided the **target causal quantity** is defined precisely.

**Bản dịch tiếng Việt:**

**Causal discovery** có thể là **constraint-based discovery** hoặc **score-based discovery**, còn **functional causal model** làm assumption rõ. **Graph sufficiency**, **adjacency faithfulness** và **Markov equivalence** quyết định observational data identify được gì; **intervention data** hoặc **natural experiment** có thể hỗ trợ **mechanism discovery**. Effect có thể có **causal heterogeneity** và **effect modification**. **Mediated-effect decomposition**, **moderation analysis** hoặc **route-specific effect** phải cẩn thận với **post-treatment stratum**. Để đi khỏi một sample, **generalization functional** và **transport graph** mô tả target setting. **Intermediate endpoint** và **proxy measure** hữu ích nhưng không hoàn hảo. **Negative-control design** và **sham intervention** dò bias, còn **bias sensitivity parameter** biểu diễn hidden confounding. **Set identification** có thể trung thực hơn point estimate, nếu **target causal quantity** được định nghĩa chính xác.
