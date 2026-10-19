# C1 Vocabulary 11 — Survival and time-to-event analysis

This lesson develops the language for outcomes defined by when an event happens, including incomplete follow-up and competing events.

Flow: **survival function → hazard function → cumulative incidence → right censoring → competing risks → cause-specific hazard → subdistribution hazard → risk set → Kaplan-Meier estimator → Cox proportional hazards → proportional hazards assumption → time-dependent exposure → accelerated failure time → restricted mean survival time → frailty term → landmark analysis → immortal time bias → delayed entry → left truncation → failure time**.

## 1. survival function /sərˈvaɪvəl ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** the probability that an individual remains free of a specified event beyond a given time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác suất một người chưa gặp event sau một thời điểm.
**Grammar & collocations:** `survival-function estimate` — estimate; `plot event-free probability` — vẽ.
**Examples:** `The survival function remained high during the first year after enrollment.` → Xác suất chưa event vẫn cao năm đầu.
**Liên kết tiếng Hàn:** `생존 함수`.

## 2. hazard function /ˈhæzərd ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** the instantaneous event rate among individuals who have not yet experienced the event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ event tức thời trong nhóm chưa gặp event.
**Grammar & collocations:** `hazard-function estimate` — estimate; `model instantaneous risk` — mô hình.
**Examples:** `The hazard function peaked shortly after the intervention began.` → Hazard đạt đỉnh ngay sau intervention.
**Liên kết tiếng Hàn:** `위험 함수`.

## 3. cumulative incidence /ˈkjuːmjələtɪv ˈɪnsədəns/
**Part of speech:** noun
**Core meaning (English):** the probability of experiencing a specified event by a particular time, accounting for the observed follow-up process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác suất đã gặp event đến một thời điểm.
**Grammar & collocations:** `cumulative-incidence curve` — curve; `estimate event probability` — ước tính.
**Examples:** `Cumulative incidence of program withdrawal reached twenty percent by month twelve.` → Incidence rút program đạt 20% tháng 12.
**Liên kết tiếng Hàn:** `누적 발생률`.

## 4. right censoring /raɪt ˈsɛnsərɪŋ/
**Part of speech:** noun
**Core meaning (English):** incomplete observation in which the event has not been observed before follow-up ends or the person leaves.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không biết event xảy ra sau khi follow-up kết thúc/rời study.
**Grammar & collocations:** `right-censoring mechanism` — mechanism; `censor a follow-up time` — kiểm duyệt.
**Examples:** `Right censoring occurred when participants finished the study without experiencing relapse.` → Censoring khi participant hết study chưa relapse.
**Liên kết tiếng Hàn:** `우측 검열`.

## 5. competing risks /kəmˈpiːtɪŋ rɪsks/
**Part of speech:** noun
**Core meaning (English):** two or more event types where experiencing one prevents or changes the chance of observing another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều event cạnh tranh, event này xảy ra thì event kia không còn quan sát như cũ.
**Grammar & collocations:** `competing-risks framework` — framework; `account for alternative events` — tính đến.
**Examples:** `Death and withdrawal were competing risks for observing long-term recovery.` → Death và withdrawal cạnh tranh khi đo recovery.
**Liên kết tiếng Hàn:** `경쟁 위험`.

## 6. cause-specific hazard /ˈkɔz spəˈsɪfɪk ˈhæzərd/
**Part of speech:** noun
**Core meaning (English):** the event rate for one particular cause among individuals currently free of any event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hazard của một nguyên nhân cụ thể trong nhóm chưa event nào.
**Grammar & collocations:** `cause-specific-hazard model` — model; `estimate one event mechanism` — ước tính.
**Examples:** `The cause-specific hazard for relapse fell, although another event became more common.` → Hazard relapse giảm dù event khác tăng.
**Liên kết tiếng Hàn:** `원인별 위험`.

## 7. subdistribution hazard /ˌsʌbdɪstrəˈbjuːʃən ˈhæzərd/
**Part of speech:** noun
**Core meaning (English):** a hazard defined to model the cumulative incidence of one event while retaining competing-event cases in the risk structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hazard phục vụ cumulative incidence, giữ case competing trong cấu trúc risk.
**Grammar & collocations:** `subdistribution-hazard model` — model; `compare cumulative incidence` — so.
**Examples:** `The subdistribution hazard focused on recovery while retaining deaths as competing events.` → Hazard tập trung recovery nhưng giữ death là event cạnh tranh.
**Liên kết tiếng Hàn:** `부분분포 위험`.

## 8. risk set /rɪsk sɛt/
**Part of speech:** noun
**Core meaning (English):** the individuals still eligible to experience an event at a particular time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm người còn đủ điều kiện gặp event tại thời điểm đó.
**Grammar & collocations:** `risk-set membership` — membership; `update the risk set` — cập nhật.
**Examples:** `The risk set shrank as participants experienced the event or were censored.` → Risk set nhỏ dần khi event/censoring xảy ra.
**Liên kết tiếng Hàn:** `위험 집합`.

## 9. Kaplan-Meier estimator /ˈkæplən ˈmaɪər ˈɛstəˌmeɪtər/
**Part of speech:** noun
**Core meaning (English):** a nonparametric estimator of the survival function that updates event-free probability at observed event times.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator phi tham số cập nhật survival tại từng event time.
**Grammar & collocations:** `Kaplan-Meier curve` — curve; `estimate event-free survival` — ước tính.
**Examples:** `The Kaplan-Meier estimator showed a sharp drop in retention after the first deadline.` → Curve giảm mạnh sau deadline đầu.
**Liên kết tiếng Hàn:** `카플란-마이어 추정량`.

## 10. Cox proportional hazards /kɑks prəˈpɔrʃənəl ˈhæzərdz/
**Part of speech:** noun
**Core meaning (English):** a semiparametric model relating covariates to hazard through a multiplicative effect that is assumed stable over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model bán tham số nối covariate với hazard bằng effect nhân ổn định.
**Grammar & collocations:** `Cox-proportional-hazards model` — model; `estimate a hazard ratio` — ước tính.
**Examples:** `Cox proportional hazards estimated how coaching changed the hazard of dropout.` → Cox ước tính coaching đổi hazard dropout.
**Liên kết tiếng Hàn:** `콕스 비례 위험`.

## 11. proportional hazards assumption /prəˈpɔrʃənəl ˈhæzərdz əˈsʌmpʃən/
**Part of speech:** noun
**Core meaning (English):** the assumption that a covariate's hazard ratio remains constant over the follow-up period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hazard ratio của covariate không đổi theo thời gian.
**Grammar & collocations:** `proportional-hazards-assumption check` — check; `test time-varying effects` — kiểm tra.
**Examples:** `The proportional hazards assumption failed because the intervention benefit faded after six months.` → Assumption hỏng vì benefit giảm sau sáu tháng.
**Liên kết tiếng Hàn:** `비례 위험 가정`.

## 12. time-dependent exposure /taɪm dɪˈpɛndənt ɪkˈspoʊʒər/
**Part of speech:** noun
**Core meaning (English):** an exposure whose value or treatment status can change during follow-up.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** exposure/treatment status đổi trong quá trình theo dõi.
**Grammar & collocations:** `time-dependent-exposure model` — model; `update treatment status` — cập nhật.
**Examples:** `The time-dependent exposure indicated when each worker actually entered training.` → Exposure ghi thời điểm worker thật sự vào training.
**Liên kết tiếng Hàn:** `시간 의존 노출`.

## 13. accelerated failure time /əkˈsɛləˌreɪtɪd ˈfeɪljər taɪm/
**Part of speech:** noun
**Core meaning (English):** a survival model describing how covariates speed up or slow down the time until an event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model nói covariate làm thời gian đến event nhanh/chậm.
**Grammar & collocations:** `accelerated-failure-time model` — model; `estimate a time ratio` — ước tính.
**Examples:** `The accelerated failure time model suggested that support doubled the expected time before dropout.` → Model cho thấy support gấp đôi thời gian trước dropout.
**Liên kết tiếng Hàn:** `가속 고장 시간`.

## 14. restricted mean survival time /rɪˈstrɪktɪd miːn sərˈvaɪvəl taɪm/
**Part of speech:** noun
**Core meaning (English):** the average event-free time up to a prespecified follow-up limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian chưa event trung bình đến một mốc định trước.
**Grammar & collocations:** `restricted-mean-survival-time contrast` — contrast; `integrate a survival curve` — tích phân.
**Examples:** `Restricted mean survival time was four months longer in the supported group.` → Thời gian sống không event dài hơn bốn tháng.
**Liên kết tiếng Hàn:** `제한 평균 생존 시간`.

## 15. frailty term /ˈfreɪlti tɝm/
**Part of speech:** noun
**Core meaning (English):** an unobserved random effect that accounts for shared susceptibility among related individuals or clusters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** random effect ẩn cho susceptibility chung trong group.
**Grammar & collocations:** `frailty-term variance` — variance; `model shared event risk` — mô hình.
**Examples:** `A clinic-level frailty term captured shared scheduling practices that affected dropout.` → Frailty clinic bắt practice chung ảnh hưởng dropout.
**Liên kết tiếng Hàn:** `프레일티 항`.

## 16. landmark analysis /ˈlændˌmɑrk əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** an analysis that defines eligibility and exposure status at a chosen landmark time, then follows outcomes afterward.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn mốc landmark, xác định status rồi theo dõi outcome sau đó.
**Grammar & collocations:** `landmark-analysis population` — population; `condition on survival to the landmark` — điều kiện hóa.
**Examples:** `Landmark analysis compared survivors who had completed training by month three.` → Analysis so người sống đến tháng ba và hoàn tất training.
**Liên kết tiếng Hàn:** `랜드마크 분석`.

## 17. immortal time bias /ɪˈmɔrtəl taɪm baɪəs/
**Part of speech:** noun
**Core meaning (English):** bias created when a period during which an event cannot occur is incorrectly attributed to an exposed group.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bias vì thời gian “phải sống sót” bị gán sai cho group treatment.
**Grammar & collocations:** `immortal-time-bias correction` — correction; `define exposure from baseline` — định nghĩa.
**Examples:** `Immortal time bias overstated the benefit because participants had to survive long enough to enter the program.` → Bias phóng đại benefit vì phải sống đến lúc vào program.
**Liên kết tiếng Hàn:** `불멸 시간 편향`.

## 18. delayed entry /dɪˈleɪd ˈɛntri/
**Part of speech:** noun
**Core meaning (English):** entering a risk set after the study begins because a person becomes observable only at a later time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vào risk set trễ vì chỉ quan sát được sau khi study bắt đầu.
**Grammar & collocations:** `delayed-entry adjustment` — adjustment; `left-truncate follow-up` — cắt trái.
**Examples:** `Delayed entry accounted for workers who joined the registry after age forty.` → Entry trễ tính worker vào registry sau tuổi 40.
**Liên kết tiếng Hàn:** `지연 진입`.

## 19. left truncation /lɛft trʌŋˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** missing observation of a person's earlier time because only those surviving or eligible at entry can be included.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần thời gian trước entry bị thiếu vì chỉ người đủ điều kiện sống sót mới vào sample.
**Grammar & collocations:** `left-truncation correction` — correction; `condition on delayed observation` — điều kiện hóa.
**Examples:** `Left truncation mattered because the registry excluded people who had already experienced the event before enrollment.` → Truncation trái quan trọng vì registry loại người event trước enrollment.
**Liên kết tiếng Hàn:** `좌측 절단`.

## 20. failure time /ˈfeɪljər taɪm/
**Part of speech:** noun
**Core meaning (English):** the time from a defined origin until the event of interest occurs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian từ mốc bắt đầu đến event.
**Grammar & collocations:** `failure-time distribution` — distribution; `record event timing` — ghi.
**Examples:** `The failure time was measured from enrollment to program withdrawal.` → Failure time tính từ enrollment đến withdrawal.
**Liên kết tiếng Hàn:** `고장 시간`.

## Review in context

The **survival function** and **hazard function** describe event-free probability and instantaneous risk; **cumulative incidence** summarizes event probability. **Right censoring** and **competing risks** require care: a **cause-specific hazard** and **subdistribution hazard** answer different questions. The **risk set** changes over time, and a **Kaplan-Meier estimator** or **Cox proportional hazards** model uses it. The **proportional hazards assumption** may fail when a **time-dependent exposure** changes. An **accelerated failure time** model and **restricted mean survival time** describe time directly; a **frailty term** captures shared susceptibility. **Landmark analysis**, **immortal time bias**, **delayed entry**, and **left truncation** define who is observed, while **failure time** anchors the event clock.

**Bản dịch tiếng Việt:** **Survival function** và **hazard function** mô tả xác suất chưa event và risk tức thời; **cumulative incidence** tóm tắt xác suất event. **Right censoring** và **competing risks** cần cẩn thận: **cause-specific hazard** và **subdistribution hazard** trả lời câu hỏi khác nhau. **Risk set** đổi theo thời gian, và **Kaplan-Meier estimator** hoặc **Cox proportional hazards** dùng nó. **Proportional hazards assumption** có thể hỏng khi **time-dependent exposure** đổi. Model **accelerated failure time** và **restricted mean survival time** mô tả thời gian trực tiếp; **frailty term** bắt susceptibility chung. **Landmark analysis**, **immortal time bias**, **delayed entry** và **left truncation** xác định ai được quan sát, còn **failure time** neo đồng hồ event.
