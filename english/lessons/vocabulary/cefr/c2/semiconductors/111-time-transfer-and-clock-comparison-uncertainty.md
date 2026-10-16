# C2 Vocabulary — Time transfer and clock-comparison uncertainty

This lesson connects satellite, fiber, and frequency-ratio measurements to link calibration, outage handling, and uncertainty budgets.

Flow: **all-in-view comparison → carrier-phase link → code-phase link → delay asymmetry → fiber reciprocity → frequency-transfer instability → time-error budget → epoch alignment → holdover ensemble → frequency-ratio measurement → uncertainty correlation → link calibration residual → outage interpolation → steering command → phase discontinuity → measurement dead interval → clock outage flag → reference-timescale offset → comparison closure → timescale handoff**.

## 1. all-in-view comparison /ˌɔːl ɪn vjuː kəmˈpærɪsən/
**Part of speech:** noun
**Core meaning (English):** comparing clocks through all simultaneously visible timing references rather than selecting one at a time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so clock qua mọi timing reference visible đồng thời thay vì chọn từng cái.
**Grammar & collocations:** `all-in-view-comparison solution` — solution; `combine simultaneous satellites` — gộp satellite đồng thời.
**Examples:** `All-in-view comparison reduced dependence on one unstable reference satellite.` → Comparison all-in-view giảm phụ thuộc một satellite reference không ổn định.
**Liên kết tiếng Hàn:** `전체 가시 비교`.

## 2. carrier-phase link /ˈkæriər feɪz lɪŋk/
**Part of speech:** noun
**Core meaning (English):** a transfer link that uses the phase of a periodic carrier to compare remote clocks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** link transfer dùng phase của carrier tuần hoàn để so clock remote.
**Grammar & collocations:** `carrier-phase-link ambiguity` — ambiguity; `unwrap a phase record` — unwrap phase record.
**Examples:** `The carrier-phase link achieved lower short-term noise than the code-only path.` → Link phase-carrier đạt noise ngắn hạn thấp hơn path chỉ code.
**Liên kết tiếng Hàn:** `반송파 위상 링크`.

## 3. code-phase link /koʊd feɪz lɪŋk/
**Part of speech:** noun
**Core meaning (English):** a timing link that estimates arrival time from a modulated code pattern.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** link timing ước tính arrival time từ code pattern modulated.
**Grammar & collocations:** `code-phase-link delay` — delay; `correlate a spreading code` — correlate spreading code.
**Examples:** `The code-phase link maintained lock when carrier tracking was interrupted.` → Link phase-code giữ lock khi carrier tracking bị gián đoạn.
**Liên kết tiếng Hàn:** `코드 위상 링크`.

## 4. delay asymmetry /dɪˈleɪ eɪˈsɪmətri/
**Part of speech:** noun
**Core meaning (English):** unequal propagation delay in opposite directions or in two comparison paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** propagation delay không đều giữa hai hướng hoặc hai comparison path.
**Grammar & collocations:** `delay-asymmetry correction` — correction; `calibrate forward and reverse paths` — calibrate path xuôi và ngược.
**Examples:** `Delay asymmetry biased the remote clock offset after the fiber temperature changed.` → Asymmetry delay bias clock offset remote sau khi fiber temperature đổi.
**Liên kết tiếng Hàn:** `지연 비대칭`.

## 5. fiber reciprocity /ˈfaɪbər ˌresəˈprɑːsəti/
**Part of speech:** noun
**Core meaning (English):** assumption that forward and reverse propagation through a fiber have the same delay.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giả định propagation xuôi và ngược trong fiber có delay giống nhau.
**Grammar & collocations:** `fiber-reciprocity test` — test; `cancel a common path delay` — triệt delay path chung.
**Examples:** `Fiber reciprocity failed slightly when the bidirectional amplifiers were unbalanced.` → Reciprocity fiber fail nhẹ khi amplifier hai chiều không cân.
**Liên kết tiếng Hàn:** `광섬유 상호성`.

## 6. frequency-transfer instability /ˈfriːkwənsi ˈtrænsfɜːr ˌɪnstəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** frequency fluctuation added by the transfer link between source and remote endpoint.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** frequency fluctuation link transfer thêm giữa source và endpoint remote.
**Grammar & collocations:** `frequency-transfer-instability spectrum` — spectrum; `separate link noise from clock noise` — tách link noise khỏi clock noise.
**Examples:** `Frequency-transfer instability was below the clock noise at one-hour averaging.` → Instability transfer-frequency dưới clock noise ở averaging một giờ.
**Liên kết tiếng Hàn:** `주파수 전송 불안정도`.

## 7. time-error budget /taɪm ˈerər ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** allocation of allowable timing error among clocks, links, calibrations, and analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân bổ timing error cho phép giữa clock, link, calibration và analysis.
**Grammar & collocations:** `time-error-budget allocation` — allocation; `reserve uncertainty margin` — dành uncertainty margin.
**Examples:** `The time-error budget reserved a separate term for antenna cable calibration.` → Budget error-time dành term riêng cho calibration antenna cable.
**Liên kết tiếng Hàn:** `시간 오류 예산`.

## 8. epoch alignment /ˈiːpɑːk əˈlaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** placing measurements from different instruments on a common time origin.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đặt measurement từ instrument khác lên cùng time origin.
**Grammar & collocations:** `epoch-alignment marker` — marker; `align records to a common pulse` — align record theo pulse chung.
**Examples:** `Epoch alignment removed a one-sample offset between the two clock logs.` → Alignment epoch loại offset một sample giữa hai clock log.
**Liên kết tiếng Hàn:** `에포크 정렬`.

## 9. holdover ensemble /ˈhoʊldoʊvər ɪnˈsɑːmbəl/
**Part of speech:** noun
**Core meaning (English):** a group of clocks combined to maintain a timescale while an external reference is unavailable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm clock gộp để giữ timescale khi reference ngoài unavailable.
**Grammar & collocations:** `holdover-ensemble prediction` — prediction; `continue through a reference outage` — tiếp tục qua outage reference.
**Examples:** `The holdover ensemble limited time error during the fiber maintenance window.` → Ensemble holdover giới hạn time error trong fiber maintenance window.
**Liên kết tiếng Hàn:** `홀드오버 앙상블`.

## 10. frequency-ratio measurement /ˈfriːkwənsi ˈreɪʃioʊ ˈmeʒərmənt/
**Part of speech:** noun
**Core meaning (English):** measuring one oscillator frequency relative to another rather than against an absolute scale.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo frequency oscillator này tương đối oscillator khác thay vì scale tuyệt đối.
**Grammar & collocations:** `frequency-ratio-measurement uncertainty` — uncertainty; `compare unlike clocks` — so clock khác loại.
**Examples:** `Frequency-ratio measurement avoided the instability of the intermediate reference.` → Measurement ratio-frequency tránh instability của reference trung gian.
**Liên kết tiếng Hàn:** `주파수비 측정`.

## 11. uncertainty correlation /ʌnˈsɜːrtənti ˌkɔːrəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** statistical dependence between uncertainty contributions that must not be combined as independent.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dependence thống kê giữa uncertainty contribution không được gộp như độc lập.
**Grammar & collocations:** `uncertainty-correlation matrix` — matrix; `combine shared systematic terms` — gộp term systematic chung.
**Examples:** `Uncertainty correlation prevented double-counting the shared antenna delay.` → Correlation uncertainty ngăn đếm đôi antenna delay chung.
**Liên kết tiếng Hàn:** `불확도 상관`.

## 12. link calibration residual /lɪŋk ˌkælɪˈbreɪʃən rɪˈzɪdʒuəl/
**Part of speech:** noun
**Core meaning (English):** remaining timing or frequency error after a transfer link has been calibrated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timing hoặc frequency error còn lại sau calibration transfer link.
**Grammar & collocations:** `link-calibration-residual trend` — trend; `monitor unmodeled delay` — theo dõi delay chưa model.
**Examples:** `The link calibration residual grew after a connector was replaced.` → Residual calibration-link tăng sau khi thay connector.
**Liên kết tiếng Hàn:** `링크 보정 잔차`.

## 13. outage interpolation /ˈaʊtɪdʒ ˌɪntərpəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** estimating a missing clock comparison through a period when the link was unavailable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính clock comparison bị thiếu trong period link unavailable.
**Grammar & collocations:** `outage-interpolation uncertainty` — uncertainty; `bridge a missing interval` — bridge interval thiếu.
**Examples:** `Outage interpolation used the holdover ensemble and neighboring measurements.` → Interpolation outage dùng holdover ensemble và measurement lân cận.
**Liên kết tiếng Hàn:** `중단 보간`.

## 14. steering command /ˈstɪərɪŋ kəˈmænd/
**Part of speech:** noun
**Core meaning (English):** instruction that adjusts a clock's frequency or phase to follow a reference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** instruction chỉnh frequency hoặc phase clock để bám reference.
**Grammar & collocations:** `steering-command rate` — rate; `apply a bounded correction` — áp correction bounded.
**Examples:** `The steering command was limited to avoid a phase discontinuity.` → Command steering bị giới hạn để tránh discontinuity phase.
**Liên kết tiếng Hàn:** `조향 명령`.

## 15. phase discontinuity /feɪz ˌdɪskɑːntəˈnuːəti/
**Part of speech:** noun
**Core meaning (English):** an abrupt jump in phase that is not part of the physical signal evolution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phase jump đột ngột không thuộc physical signal evolution.
**Grammar & collocations:** `phase-discontinuity flag` — flag; `preserve phase continuity` — giữ phase continuity.
**Examples:** `A phase discontinuity marked the instant the synthesizer changed bands.` → Discontinuity phase đánh dấu lúc synthesizer đổi band.
**Liên kết tiếng Hàn:** `위상 불연속`.

## 16. measurement dead interval /ˈmeʒərmənt ded ˈɪntərvəl/
**Part of speech:** noun
**Core meaning (English):** a gap when a measurement instrument records no usable comparison data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gap instrument không ghi comparison data usable.
**Grammar & collocations:** `measurement-dead-interval fraction` — fraction; `flag an unobserved period` — đánh dấu period không observe.
**Examples:** `The measurement dead interval coincided with a scheduled receiver restart.` → Interval dead measurement trùng receiver restart theo lịch.
**Liên kết tiếng Hàn:** `측정 데드 구간`.

## 17. clock outage flag /klɑːk ˈaʊtɪdʒ flæɡ/
**Part of speech:** noun
**Core meaning (English):** metadata marking a clock or comparison result as unavailable or unreliable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata đánh dấu clock hoặc comparison result unavailable hoặc unreliable.
**Grammar & collocations:** `clock-outage-flag mask` — mask; `exclude an invalid segment` — loại segment invalid.
**Examples:** `The clock outage flag kept a reboot transient out of the published series.` → Flag outage-clock giữ reboot transient ngoài series công bố.
**Liên kết tiếng Hàn:** `시계 중단 플래그`.

## 18. reference-timescale offset /ˈrefrəns taɪm skeɪl ˈɔːfset/
**Part of speech:** noun
**Core meaning (English):** difference between a local clock reading and the adopted reference timescale.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khác biệt giữa local clock reading và reference timescale được adopt.
**Grammar & collocations:** `reference-timescale-offset estimate` — estimate; `report a UTC-referenced error` — báo error quy UTC.
**Examples:** `Reference-timescale offset stayed within the published uncertainty interval.` → Offset timescale-reference nằm trong uncertainty interval công bố.
**Liên kết tiếng Hàn:** `기준 시간척도 오프셋`.

## 19. comparison closure /kəmˈpærɪsən ˈkloʊʒər/
**Part of speech:** noun
**Core meaning (English):** agreement obtained when independent paths or references form a closed comparison loop.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** agreement khi path hoặc reference độc lập tạo closed comparison loop.
**Grammar & collocations:** `comparison-closure residual` — residual; `check a triangular consistency relation` — kiểm tra relation consistency tam giác.
**Examples:** `Comparison closure exposed a sign error in one transfer-link correction.` → Closure comparison lộ sign error trong một transfer-link correction.
**Liên kết tiếng Hàn:** `비교 폐쇄`.

## 20. timescale handoff /ˈtaɪm skeɪl ˈhændɔːf/
**Part of speech:** noun
**Core meaning (English):** transfer of operational reference from one maintained timescale or clock ensemble to another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển operational reference từ timescale hoặc clock ensemble này sang cái khác.
**Grammar & collocations:** `timescale-handoff procedure` — procedure; `blend old and new references` — blend reference cũ và mới.
**Examples:** `The timescale handoff preserved continuity while the primary maser was serviced.` → Handoff timescale giữ continuity khi maser chính được service.
**Liên kết tiếng Hàn:** `시간척도 인계`.

## Review in context

An **all-in-view comparison**, **carrier-phase link**, and **code-phase link** expose **delay asymmetry**, **fiber reciprocity**, and **frequency-transfer instability** within a **time-error budget**. **Epoch alignment**, a **holdover ensemble**, and a **frequency-ratio measurement** require explicit **uncertainty correlation** and a **link calibration residual**. During **outage interpolation**, a **steering command**, **phase discontinuity**, **measurement dead interval**, **clock outage flag**, and **reference-timescale offset** determine **comparison closure** and a safe **timescale handoff**.

**Bản dịch tiếng Việt:** **All-in-view comparison**, **carrier-phase link** và **code-phase link** làm lộ **delay asymmetry**, **fiber reciprocity** và **frequency-transfer instability** trong **time-error budget**. **Epoch alignment**, **holdover ensemble** và **frequency-ratio measurement** cần xét rõ **uncertainty correlation** và **link calibration residual**. Trong **outage interpolation**, **steering command**, **phase discontinuity**, **measurement dead interval**, **clock outage flag** và **reference-timescale offset** quyết định **comparison closure** và **timescale handoff** an toàn.
