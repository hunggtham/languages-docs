# C2+ Vocabulary — Outbreak dynamics and public-health evaluation

This lesson follows how epidemiologists measure transmission, infer hidden infections, evaluate interventions, and interpret population surveillance. The network is **secondary attack rate → force of infection → serial interval → generation interval → overdispersion parameter → superspreading event → herd-immunity threshold → effective reproduction number → time-varying reproduction number → capture-recapture estimation → seroepidemiology → seroprevalence survey → test-negative design → stepped-wedge trial → cluster randomized trial → synthetic control method → spatial scan statistic → contact-tracing cascade → quarantine fatigue → wastewater epidemiology**.

## 1. secondary attack rate /ˈsɛkənˌdɛri əˈtæk reɪt/
**Part of speech:** noun
**Core meaning (English):** the proportion of susceptible contacts who become infected after exposure to an identified primary case within a defined setting and period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trong household/classroom của một index case, bao nhiêu contact susceptible bị lây.
**Grammar & collocations:** `household secondary attack rate` — rate; `estimate the attack rate` — estimate; `secondary-attack-rate study` — study.
**Examples:** `The household secondary attack rate was higher when bedrooms had poor ventilation.` → Secondary attack rate trong household cao hơn khi phòng ngủ thông gió kém.
**Liên kết tiếng Hàn:** `2차 발병률` — secondary attack rate.

## 2. force of infection /fɔrs əv ɪnˈfɛkʃən/
**Part of speech:** noun
**Core meaning (English):** the instantaneous hazard or rate at which a susceptible individual acquires an infection from the infectious environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “áp lực lây” mà một susceptible đang chịu tại mỗi thời điểm, do contact và infectious prevalence tạo ra.
**Grammar & collocations:** `age-specific force of infection` — force; `estimate the force` — estimate; `force-of-infection curve` — curve.
**Examples:** `The force of infection rose sharply after the new variant entered the city.` → Force of infection tăng mạnh sau khi variant mới vào city.
**Liên kết tiếng Hàn:** `감염력` — force of infection.

## 3. serial interval /ˈsɪriəl ˈɪntərvəl/
**Part of speech:** noun
**Core meaning (English):** the time between symptom onset in a primary case and symptom onset in a person infected by that case.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách giữa hai “mốc symptom onset” trong một transmission pair.
**Grammar & collocations:** `short serial interval` — interval; `serial-interval distribution` — distribution; `estimate serial intervals` — estimate.
**Examples:** `A shorter serial interval made case counts rise before contact tracers could intervene.` → Serial interval ngắn làm case count tăng trước khi contact tracer can thiệp.
**Liên kết tiếng Hàn:** `세대 간격` — serial interval.

## 4. generation interval /ˌdʒɛnəˈreɪʃən ˈɪntərvəl/
**Part of speech:** noun
**Core meaning (English):** the time between infection in a primary case and infection in the person that case transmits to.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interval giữa hai infection event, dù symptom onset có thể không quan sát được.
**Grammar & collocations:** `generation-interval distribution` — distribution; `mean generation interval` — mean; `infer the interval` — infer.
**Examples:** `The model used a generation interval shorter than the observed symptom-based interval.` → Model dùng generation interval ngắn hơn symptom-based interval quan sát.
**Liên kết tiếng Hàn:** `세대 간격` — generation interval.

## 5. overdispersion parameter /ˌoʊvərdɪˈspɜrʒən pəˈræmətər/
**Part of speech:** noun
**Core meaning (English):** a parameter describing how much individual transmission counts vary beyond what a simple Poisson model would predict.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo mức transmission “không đều”: đa số infect ít người nhưng một số ít infect rất nhiều.
**Grammar & collocations:** `negative-binomial overdispersion parameter` — parameter; `estimate overdispersion` — estimate; `highly overdispersed transmission` — transmission.
**Examples:** `The overdispersion parameter suggested that a small number of events drove a large share of infections.` → Overdispersion parameter cho thấy một số ít event gây phần lớn infection.
**Liên kết tiếng Hàn:** `과산포 모수` — overdispersion parameter.

## 6. superspreading event /ˈsuːpərˌsprɛdɪŋ ɪˈvɛnt/
**Part of speech:** noun
**Core meaning (English):** an event or setting in which one or a few infectious individuals transmit to an unusually large number of people.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event tạo “đuôi” transmission cực lớn do crowd, ventilation, duration hoặc behavior.
**Grammar & collocations:** `superspreading event investigation` — investigation; `identify a superspreading event` — identify; `event-specific transmission` — transmission.
**Examples:** `The indoor celebration became a superspreading event after ventilation failed.` → Celebration trong nhà thành superspreading event sau khi ventilation fail.
**Liên kết tiếng Hàn:** `슈퍼전파 사건` — superspreading event.

## 7. herd-immunity threshold /hɜrd ɪˈmjuːnəti ˈθrɛʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** the approximate proportion of a population that must be immune to reduce sustained transmission under specified assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ immune đủ cao để chain transmission tự khó tiếp tục; threshold phụ thuộc transmissibility và network mixing.
**Grammar & collocations:** `herd-immunity threshold estimate` — estimate; `cross the threshold` — cross; `population immunity` — immunity.
**Examples:** `The herd-immunity threshold changed when the variant became more transmissible.` → Herd-immunity threshold thay đổi khi variant transmissible hơn.
**Liên kết tiếng Hàn:** `집단면역 임계치` — herd-immunity threshold.

## 8. effective reproduction number /ɪˈfɛktɪv ˌriːprəˈdʌkʃən ˈnʌmbər/
**Part of speech:** noun
**Core meaning (English):** the average number of secondary infections generated by one infectious person in the population's current immunity, behavior, and intervention conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** R hiệu dụng trong world thật hiện tại, không phải fully susceptible population lý tưởng.
**Grammar & collocations:** `effective reproduction number below one` — number; `estimate Re` — estimate; `population-level reproduction` — reproduction.
**Examples:** `The effective reproduction number fell below one after vaccination and indoor masking increased.` → Effective reproduction number xuống dưới one sau khi vaccination và indoor masking tăng.
**Liên kết tiếng Hàn:** `유효 재생산수` — effective reproduction number.

## 9. time-varying reproduction number /taɪm ˈvɛriɪŋ ˌriːprəˈdʌkʃən ˈnʌmbər/
**Part of speech:** noun
**Core meaning (English):** an estimate of transmission potential that is allowed to change over calendar time as conditions and interventions change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** R(t) chạy theo thời gian, giúp thấy transmission đổi sau holiday, policy, variant hoặc season.
**Grammar & collocations:** `time-varying reproduction-number estimate` — estimate; `smooth R(t)` — smooth; `track transmission` — track.
**Examples:** `The time-varying reproduction number rose during the winter holiday period.` → Time-varying reproduction number tăng trong kỳ nghỉ mùa đông.
**Liên kết tiếng Hàn:** `시간 변동 재생산수` — time-varying reproduction number.

## 10. capture-recapture estimation /ˈkæptʃər riˈkæptʃər ˌɛstəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a method that estimates an incompletely observed population by comparing overlapping cases found in two or more partially independent lists.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so overlap giữa hai list case để ước lượng phần case bị cả hai hệ thống bỏ sót.
**Grammar & collocations:** `capture-recapture estimate` — estimate; `overlapping case lists` — lists; `apply capture-recapture` — apply.
**Examples:** `Capture-recapture estimation suggested that reported hospitalizations represented only part of the true burden.` → Capture-recapture estimation cho thấy hospitalization reported chỉ là một phần burden thật.
**Liên kết tiếng Hàn:** `포획-재포획 추정` — capture-recapture estimation.

## 11. seroepidemiology /ˌsɪroʊˌɛpədəmiˈɑlədʒi/
**Part of speech:** noun
**Core meaning (English):** the use of antibodies in blood to study infection history, population exposure, immunity, or transmission patterns.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng “dấu vết antibody” để nhìn lại ai từng nhiễm hoặc có immunity, kể cả infection không được chẩn đoán.
**Grammar & collocations:** `seroepidemiology study` — study; `serologic evidence` — evidence; `conduct seroepidemiology` — conduct.
**Examples:** `Seroepidemiology revealed substantial unrecognized infection in the first wave.` → Seroepidemiology cho thấy infection không được nhận diện khá lớn trong wave đầu.
**Liên kết tiếng Hàn:** `혈청 역학` — seroepidemiology.

## 12. seroprevalence survey /ˌsɪroʊˈprɛvələns ˈsɜrveɪ/
**Part of speech:** noun
**Core meaning (English):** a survey estimating the proportion of a population with detectable antibodies to a specified infection or antigen.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** survey đo “bao nhiêu người có antibody” trong sample population, thường để ước hidden infection hoặc immunity.
**Grammar & collocations:** `population-based seroprevalence survey` — survey; `seroprevalence estimate` — estimate; `sample participants` — sample.
**Examples:** `The seroprevalence survey oversampled older adults to improve precision in that group.` → Seroprevalence survey oversample older adult để tăng precision.
**Liên kết tiếng Hàn:** `혈청 유병률 조사` — seroprevalence survey.

## 13. test-negative design /tɛst ˈnɛɡətɪv dɪˈzaɪn/
**Part of speech:** noun
**Core meaning (English):** a case-control design in which people seeking care are classified by a positive or negative test for the target infection to estimate intervention effectiveness.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cùng đi khám và có triệu chứng, nhưng test positive/negative tạo case–control để giảm selection khác biệt.
**Grammar & collocations:** `test-negative design study` — study; `estimate vaccine effectiveness` — estimate; `test-negative control` — control.
**Examples:** `The test-negative design estimated protection against severe disease during routine clinical care.` → Test-negative design estimate protection chống severe disease trong routine care.
**Liên kết tiếng Hàn:** `검사 음성 대조군 설계` — test-negative design.

## 14. stepped-wedge trial /ˈstɛpt wɛdʒ traɪəl/
**Part of speech:** noun
**Core meaning (English):** a trial in which clusters cross from control to intervention at different randomized time points until all clusters receive the intervention.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** intervention rollout theo “bậc thang” giữa các cluster; cuối cùng mọi cluster đều nhận nhưng thời điểm khác nhau.
**Grammar & collocations:** `stepped-wedge cluster trial` — trial; `roll out sequentially` — roll out; `stepped-wedge design` — design.
**Examples:** `The stepped-wedge trial introduced the screening program to clinics in randomized waves.` → Stepped-wedge trial đưa screening program vào clinic theo wave ngẫu nhiên.
**Liên kết tiếng Hàn:** `계단식 군집 시험` — stepped-wedge trial.

## 15. cluster randomized trial /ˈklʌstər ˈrændəmaɪzd traɪəl/
**Part of speech:** noun
**Core meaning (English):** a randomized trial in which groups such as schools, clinics, or communities, rather than individuals, are assigned to intervention conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** randomize cả cluster để tránh contamination giữa individuals cùng setting.
**Grammar & collocations:** `cluster-randomized trial design` — design; `intracluster correlation` — correlation; `randomize clinics` — randomize.
**Examples:** `The cluster randomized trial assigned entire schools to the prevention curriculum.` → Cluster randomized trial assign toàn bộ school vào prevention curriculum.
**Liên kết tiếng Hàn:** `군집 무작위 시험` — cluster randomized trial.

## 16. synthetic control method /sɪnˈθɛtɪk kənˈtroʊl ˈmɛθəd/
**Part of speech:** noun
**Core meaning (English):** a causal-evaluation method that constructs a weighted combination of untreated units to approximate the treated unit's counterfactual trend.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo “đối chứng tổng hợp” từ nhiều unit chưa treatment để mô phỏng treatment unit nếu không can thiệp.
**Grammar & collocations:** `synthetic-control method` — method; `construct a synthetic control` — construct; `donor pool` — pool.
**Examples:** `The synthetic control method compared the treated city with a weighted combination of similar cities.` → Synthetic control method so city treated với combination có weight của city tương tự.
**Liên kết tiếng Hàn:** `합성 대조군 방법` — synthetic control method.

## 17. spatial scan statistic /ˈspeɪʃəl skæn stəˈtɪstɪk/
**Part of speech:** noun
**Core meaning (English):** a statistic that searches geographic windows for clusters with unusually high or low disease counts relative to expectation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “quét” các vùng tròn/shape khác nhau để tìm pocket disease excess mà không chọn location trước.
**Grammar & collocations:** `spatial-scan statistic` — statistic; `detect a cluster` — detect; `geographic scanning window` — window.
**Examples:** `The spatial scan statistic detected a localized cluster near the industrial canal.` → Spatial scan statistic phát hiện cluster cục bộ gần industrial canal.
**Liên kết tiếng Hàn:** `공간 스캔 통계량` — spatial scan statistic.

## 18. contact-tracing cascade /ˈkɑntækt ˈtreɪsɪŋ kæˈskeɪd/
**Part of speech:** noun
**Core meaning (English):** the sequence in which contacts of an identified case are found, notified, tested, and used to identify further contacts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chain tracing theo tầng: case → contacts → contacts của contacts, mỗi tầng tạo thêm workload và delay.
**Grammar & collocations:** `contact-tracing cascade` — cascade; `interrupt the cascade` — interrupt; `cascade delay` — delay.
**Examples:** `A delayed contact-tracing cascade allowed several generations of transmission.` → Contact-tracing cascade chậm cho phép nhiều generation transmission.
**Liên kết tiếng Hàn:** `접촉자 추적 연쇄` — contact-tracing cascade.

## 19. quarantine fatigue /ˈkwɔrəntiːn fəˈtiːɡ/
**Part of speech:** noun
**Core meaning (English):** declining ability or willingness to maintain quarantine behavior during prolonged restrictions or repeated exposure notifications.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** người dân mệt mỏi sau nhiều lần isolate/quarantine, làm adherence giảm theo thời gian.
**Grammar & collocations:** `quarantine-fatigue effect` — effect; `measure adherence` — measure; `reduce fatigue` — reduce.
**Examples:** `Quarantine fatigue weakened adherence when households received repeated exposure notices.` → Quarantine fatigue làm adherence yếu đi khi household nhận notice lặp lại.
**Liên kết tiếng Hàn:** `격리 피로` — quarantine fatigue.

## 20. wastewater epidemiology /ˈweɪstˌwɔtər ˌɛpədəmiˈɑlədʒi/
**Part of speech:** noun
**Core meaning (English):** monitoring sewage for biological or chemical markers to infer population-level infection, drug use, or health conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đọc tín hiệu trong wastewater để nhìn cả community, kể cả người không đi test.
**Grammar & collocations:** `wastewater-epidemiology surveillance` — surveillance; `wastewater sample` — sample; `track viral RNA` — track.
**Examples:** `Wastewater epidemiology detected the rise before clinical case reports increased.` → Wastewater epidemiology phát hiện rise trước khi clinical report tăng.
**Liên kết tiếng Hàn:** `하수 역학` — wastewater epidemiology.

## Review in context

Outbreak investigators estimate the **secondary attack rate**, **force of infection**, **serial interval**, and **generation interval** to describe spread. An **overdispersion parameter** and a **superspreading event** show why transmission is uneven. The **herd-immunity threshold**, **effective reproduction number**, and **time-varying reproduction number** summarize population conditions. Hidden infections can be estimated with **capture-recapture estimation**, **seroepidemiology**, and a **seroprevalence survey**. Intervention evidence may come from a **test-negative design**, **stepped-wedge trial**, **cluster randomized trial**, or **synthetic control method**. A **spatial scan statistic** finds geographic clusters, while a **contact-tracing cascade** can be weakened by **quarantine fatigue**. **Wastewater epidemiology** offers another population-level signal when clinical testing is incomplete.

**Bản dịch tiếng Việt:**

Nhà điều tra outbreak ước lượng **secondary attack rate**, **force of infection**, **serial interval** và **generation interval** để mô tả spread. **Overdispersion parameter** và **superspreading event** cho thấy transmission không đều. **Herd-immunity threshold**, **effective reproduction number** và **time-varying reproduction number** tóm tắt điều kiện population. Infection ẩn có thể estimate bằng **capture-recapture estimation**, **seroepidemiology** và **seroprevalence survey**. Evidence của intervention có thể đến từ **test-negative design**, **stepped-wedge trial**, **cluster randomized trial** hoặc **synthetic control method**. **Spatial scan statistic** tìm cluster địa lý, còn **contact-tracing cascade** có thể yếu đi vì **quarantine fatigue**. **Wastewater epidemiology** cung cấp thêm tín hiệu cấp community khi clinical testing không đầy đủ.
