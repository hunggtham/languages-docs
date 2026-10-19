# C2 Vocabulary — Reliability statistics and life modeling

This lesson turns physical failure observations into lifetime models, stress plans, and defensible qualification decisions.

Flow: **wear-out regime → censored observation → right-censoring → accelerated life model → Arrhenius slope → lognormal lifetime → Weibull shape parameter → hazard ratio → quantile estimate → confidence bound → sample-size justification → test-to-failure → step-stress profile → stress relaxation → degradation trajectory → prognostic indicator → lifetime distribution → failure-time quantile → random-effects lifetime → failure mechanism transition**.

## 1. wear-out regime /ˈwer aʊt reɪˈʒiːm/
**Part of speech:** noun
**Core meaning (English):** the late-life period in which accumulated damage makes failure increasingly likely.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giai đoạn cuối vòng đời khi damage tích lũy làm failure ngày càng dễ xảy ra.
**Grammar & collocations:** `wear-out-regime slope` — slope; `model late-life failure` — model failure cuối đời.
**Examples:** `The wear-out regime began after the package had survived its planned mission cycles.` → Regime wear-out bắt đầu sau khi package sống qua số chu kỳ mission dự kiến.
**Liên kết tiếng Hàn:** `마모 단계`.

## 2. censored observation /ˈsensərd ˌɑːbzərˈveɪʃən/
**Part of speech:** noun
**Core meaning (English):** a lifetime record whose exact failure time is unknown because observation ended earlier or began later.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record lifetime không biết thời điểm failure chính xác vì observation kết thúc sớm hoặc bắt đầu muộn.
**Grammar & collocations:** `censored-observation likelihood` — likelihood; `retain partial lifetime information` — giữ thông tin lifetime một phần.
**Examples:** `A censored observation still showed that the unit had survived beyond the qualification window.` → Observation bị censor vẫn cho thấy unit sống qua qualification window.
**Liên kết tiếng Hàn:** `중도 절단 관측`.

## 3. right-censoring /ˈraɪt ˌsensərɪŋ/
**Part of speech:** noun
**Core meaning (English):** censoring in which a unit has not failed by the last recorded observation time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** censoring khi unit chưa failure tại thời điểm observation cuối được ghi.
**Grammar & collocations:** `right-censoring indicator` — indicator; `include surviving units in a fit` — đưa unit còn sống vào fit.
**Examples:** `Right-censoring prevented the analyst from treating every surviving sample as a failure at the test end.` → Right-censoring ngăn analyst coi mọi sample sống sót là failure ở cuối test.
**Liên kết tiếng Hàn:** `우측 중도 절단`.

## 4. accelerated life model /əkˈseləreɪtɪd laɪf ˈmɑːdəl/
**Part of speech:** noun
**Core meaning (English):** a model that relates failure time under elevated stress to expected life at normal conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model liên hệ failure time ở stress cao với lifetime kỳ vọng tại điều kiện thường.
**Grammar & collocations:** `accelerated-life-model fit` — fit; `extrapolate a use-condition lifetime` — ngoại suy lifetime điều kiện dùng.
**Examples:** `The accelerated life model translated high-temperature failures into an estimated field lifetime.` → Model life tăng tốc chuyển failure nhiệt cao thành lifetime field ước tính.
**Liên kết tiếng Hàn:** `가속 수명 모델`.

## 5. Arrhenius slope /əˈreɪniəs sloʊp/
**Part of speech:** noun
**Core meaning (English):** the fitted temperature sensitivity in an Arrhenius relationship between reaction rate and absolute temperature.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ nhạy nhiệt fit trong quan hệ Arrhenius giữa reaction rate và nhiệt độ tuyệt đối.
**Grammar & collocations:** `Arrhenius-slope estimate` — ước tính; `fit a temperature acceleration` — fit gia tốc nhiệt.
**Examples:** `The Arrhenius slope changed when the dominant failure mechanism changed.` → Slope Arrhenius đổi khi cơ chế failure chi phối đổi.
**Liên kết tiếng Hàn:** `아레니우스 기울기`.

## 6. lognormal lifetime /ˌlɔːɡˈnɔːrməl ˈlaɪftaɪm/
**Part of speech:** noun
**Core meaning (English):** a lifetime variable whose logarithm follows a normal distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lifetime có logarithm tuân theo phân phối normal.
**Grammar & collocations:** `lognormal-lifetime fit` — fit; `model multiplicative variation` — model variation nhân.
**Examples:** `A lognormal lifetime fit matched the broad spread caused by process-level multiplicative effects.` → Fit lifetime lognormal khớp spread rộng do effect nhân ở cấp process.
**Liên kết tiếng Hàn:** `로그정규 수명`.

## 7. Weibull shape parameter /ˈwaɪbʊl ʃeɪp pəˈræmətər/
**Part of speech:** noun
**Core meaning (English):** the Weibull parameter that controls whether the modeled hazard decreases, stays constant, or increases with age.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parameter Weibull điều khiển hazard giảm, không đổi hoặc tăng theo tuổi.
**Grammar & collocations:** `Weibull-shape-parameter uncertainty` — uncertainty; `infer a changing hazard` — suy hazard thay đổi.
**Examples:** `The Weibull shape parameter above one supported a wear-out interpretation.` → Shape parameter Weibull lớn hơn một ủng hộ cách hiểu wear-out.
**Liên kết tiếng Hàn:** `와이블 형상 매개변수`.

## 8. hazard ratio /ˈhæzərd ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the ratio of instantaneous failure hazards between two groups or conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ số hazard failure tức thời giữa hai group hoặc điều kiện.
**Grammar & collocations:** `hazard-ratio estimate` — ước tính; `compare stressed and control lots` — so lot stress và control.
**Examples:** `The hazard ratio showed that the new mold compound reduced early package failures.` → Ratio hazard cho thấy mold compound mới giảm failure package sớm.
**Liên kết tiếng Hàn:** `위험비`.

## 9. quantile estimate /ˈkwɑːntaɪl ˈestəmeɪt/
**Part of speech:** noun
**Core meaning (English):** an estimate of the lifetime or response value below which a specified fraction of units falls.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính giá trị lifetime hoặc response mà một fraction unit nằm dưới.
**Grammar & collocations:** `quantile-estimate interval` — interval; `report the tenth percentile` — báo percentile thứ mười.
**Examples:** `The quantile estimate gave the customer a conservative tenth-percentile lifetime.` → Estimate quantile cho khách hàng lifetime percentile mười bảo thủ.
**Liên kết tiếng Hàn:** `분위수 추정치`.

## 10. confidence bound /ˈkɑːnfɪdəns baʊnd/
**Part of speech:** noun
**Core meaning (English):** a one-sided or two-sided statistical limit expressing uncertainty around a parameter or reliability claim.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn thống kê một phía hoặc hai phía thể hiện uncertainty của parameter hoặc claim reliability.
**Grammar & collocations:** `confidence-bound calculation` — calculation; `state a lower lifetime limit` — nêu giới hạn lifetime dưới.
**Examples:** `The lower confidence bound remained above the contractual mission duration.` → Bound confidence dưới vẫn cao hơn mission duration theo hợp đồng.
**Liên kết tiếng Hàn:** `신뢰 한계`.

## 11. sample-size justification /ˈsæmpəl saɪz ˌdʒʌstəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** reasoning that shows why a chosen number of test units can support the intended reliability conclusion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lập luận chứng minh số unit test chọn đủ cho kết luận reliability dự kiến.
**Grammar & collocations:** `sample-size-justification memo` — memo; `power a qualification claim` — cung cấp power cho claim.
**Examples:** `The sample-size justification accounted for censoring and the desired confidence level.` → Justification sample-size tính đến censoring và confidence level mong muốn.
**Liên kết tiếng Hàn:** `표본 크기 정당화`.

## 12. test-to-failure /test tə ˈfeɪljər/
**Part of speech:** noun
**Core meaning (English):** a test strategy that continues stressing a unit until a defined failure occurs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chiến lược test tiếp tục stress unit đến khi failure định nghĩa xảy ra.
**Grammar & collocations:** `test-to-failure plan` — plan; `observe the terminal mechanism` — quan sát cơ chế cuối.
**Examples:** `Test-to-failure data distinguished gradual degradation from abrupt catastrophic rupture.` → Data test-to-failure phân biệt degradation dần với rupture thảm khốc đột ngột.
**Liên kết tiếng Hàn:** `파손까지 시험`.

## 13. step-stress profile /step stres ˈproʊfaɪl/
**Part of speech:** noun
**Core meaning (English):** a planned sequence of increasing stress levels applied to reveal when degradation accelerates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sequence stress tăng dần được lập kế hoạch để lộ lúc degradation tăng tốc.
**Grammar & collocations:** `step-stress-profile schedule` — lịch; `escalate voltage in stages` — tăng voltage theo giai đoạn.
**Examples:** `The step-stress profile isolated the voltage range where oxide degradation became rapid.` → Profile step-stress cô lập range voltage nơi degradation oxide tăng nhanh.
**Liên kết tiếng Hàn:** `단계 스트레스 프로파일`.

## 14. stress relaxation /stres ˌriːlækˈseɪʃən/
**Part of speech:** noun
**Core meaning (English):** reduction of internal stress over time while deformation or displacement is held approximately fixed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stress nội giảm theo thời gian khi deformation hoặc displacement gần như giữ cố định.
**Grammar & collocations:** `stress-relaxation curve` — curve; `hold strain constant` — giữ strain không đổi.
**Examples:** `Stress relaxation lowered the clamp force during the long thermal soak.` → Relaxation stress làm giảm clamp force trong thermal soak dài.
**Liên kết tiếng Hàn:** `응력 완화`.

## 15. degradation trajectory /ˌdeɡrəˈdeɪʃən trəˈdʒektəri/
**Part of speech:** noun
**Core meaning (English):** the measured path of a performance or material property as damage accumulates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường đi đo được của performance hoặc property material khi damage tích lũy.
**Grammar & collocations:** `degradation-trajectory forecast` — forecast; `track a drifting threshold` — theo dõi threshold drift.
**Examples:** `The degradation trajectory predicted loss of margin before the device actually failed.` → Trajectory degradation dự đoán mất margin trước khi device failure.
**Liên kết tiếng Hàn:** `열화 궤적`.

## 16. prognostic indicator /prɑːɡˈnɑːstɪk ˈɪndəkeɪtər/
**Part of speech:** noun
**Core meaning (English):** an observable feature that helps predict future failure or remaining useful life.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** feature quan sát được giúp dự đoán failure tương lai hoặc useful life còn lại.
**Grammar & collocations:** `prognostic-indicator threshold` — threshold; `predict remaining life` — dự đoán life còn lại.
**Examples:** `Contact resistance served as a prognostic indicator for connector aging.` → Resistance contact làm indicator prognostic cho aging connector.
**Liên kết tiếng Hàn:** `예후 지표`.

## 17. lifetime distribution /ˈlaɪftaɪm ˌdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** a probability distribution describing when units in a population are expected to fail.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân phối xác suất mô tả khi nào unit trong population dự kiến failure.
**Grammar & collocations:** `lifetime-distribution tail` — tail; `fit a population model` — fit model population.
**Examples:** `The lifetime distribution had a long tail that made the mean misleading for warranty planning.` → Distribution lifetime có tail dài khiến mean gây hiểu lầm khi lập kế hoạch warranty.
**Liên kết tiếng Hàn:** `수명 분포`.

## 18. failure-time quantile /ˈfeɪljər taɪm ˈkwɑːntaɪl/
**Part of speech:** noun
**Core meaning (English):** a percentile of the modeled time-to-failure distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** percentile của distribution time-to-failure được model.
**Grammar & collocations:** `failure-time-quantile forecast` — forecast; `guarantee a percentile life` — bảo đảm life theo percentile.
**Examples:** `The fifth failure-time quantile set the conservative replacement interval.` → Quantile failure-time thứ năm đặt replacement interval bảo thủ.
**Liên kết tiếng Hàn:** `고장 시간 분위수`.

## 19. random-effects lifetime /ˈrændəm ɪˈfekts ˈlaɪftaɪm/
**Part of speech:** noun
**Core meaning (English):** a lifetime model that represents unit-to-unit or batch-to-batch variation with random effects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model lifetime biểu diễn variation giữa unit hoặc batch bằng random effects.
**Grammar & collocations:** `random-effects-lifetime model` — model; `separate lot variation` — tách variation lot.
**Examples:** `A random-effects lifetime model separated wafer-lot variation from device-level noise.` → Model lifetime random-effects tách variation lot wafer khỏi noise cấp device.
**Liên kết tiếng Hàn:** `랜덤 효과 수명`.

## 20. failure mechanism transition /ˈfeɪljər ˈmekənɪzəm trænˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** a change in the physical process that dominates failure as stress or age changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi process vật lý chi phối failure khi stress hoặc tuổi thay đổi.
**Grammar & collocations:** `failure-mechanism-transition point` — điểm; `identify a changing dominant mode` — xác định mode chi phối đổi.
**Examples:** `The failure mechanism transition explained why one Arrhenius slope fit only the low-stress region.` → Transition mechanism failure giải thích vì sao một slope Arrhenius chỉ fit vùng stress thấp.
**Liên kết tiếng Hàn:** `고장 메커니즘 전이`.

## Review in context

In a **wear-out regime**, a **censored observation** and **right-censoring** must be handled by an **accelerated life model** whose **Arrhenius slope** may change at a **failure mechanism transition**. A **lognormal lifetime**, **Weibull shape parameter**, and **hazard ratio** support a **quantile estimate** with a defensible **confidence bound**. **Sample-size justification** defines a **test-to-failure** plan and **step-stress profile**; **stress relaxation**, a **degradation trajectory**, and a **prognostic indicator** refine the **lifetime distribution**, **failure-time quantile**, and **random-effects lifetime** model.

**Bản dịch tiếng Việt:** Trong **wear-out regime**, cần xử lý **censored observation** và **right-censoring** bằng **accelerated life model**, trong đó **Arrhenius slope** có thể đổi tại **failure mechanism transition**. **Lognormal lifetime**, **Weibull shape parameter** và **hazard ratio** hỗ trợ **quantile estimate** với **confidence bound** có cơ sở. **Sample-size justification** định nghĩa plan **test-to-failure** và **step-stress profile**; **stress relaxation**, **degradation trajectory** và **prognostic indicator** tinh chỉnh **lifetime distribution**, **failure-time quantile** và model **random-effects lifetime**.
