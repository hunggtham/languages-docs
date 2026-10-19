# C2 Vocabulary — Photon detection and quantum timing diagnostics

This lesson connects detector gain and noise to single-photon timing, coincidence measurements, and optical interference quality.

Flow: **avalanche photodiode gain → photomultiplier excess noise → balanced photodetection → transimpedance stability → shot-noise clearance → dark-current drift → quantum efficiency rolloff → linearity knee → saturation recovery → afterpulsing probability → dead-time correction → time-to-digital bin → coincidence window → single-photon timing jitter → photon-number resolution → heralding efficiency → visibility contrast → interference fringe → photon arrival histogram → gating window**.

## 1. avalanche photodiode gain /ˈævəlæntʃ ˈfoʊtoʊdaɪoʊd ɡeɪn/
**Part of speech:** noun
**Core meaning (English):** internal multiplication of photocurrent through impact ionization in an avalanche photodiode.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** multiplication photocurrent nội do impact ionization trong avalanche photodiode.
**Grammar & collocations:** `avalanche-photodiode-gain calibration` — calibration; `bias a multiplication region` — bias vùng multiplication.
**Examples:** `Avalanche photodiode gain increased until excess noise limited the useful bias.` → Gain photodiode-avalanche tăng đến khi excess noise giới hạn bias hữu ích.
**Liên kết tiếng Hàn:** `애벌랜치 포토다이오드 이득`.

## 2. photomultiplier excess noise /ˌfoʊtoʊˈmʌltəplaɪər ˈekses nɔɪz/
**Part of speech:** noun
**Core meaning (English):** additional statistical noise produced by variation in photomultiplier electron multiplication.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** noise thống kê thêm do variation trong electron multiplication photomultiplier.
**Grammar & collocations:** `photomultiplier-excess-noise factor` — factor; `trade gain against variance` — cân gain với variance.
**Examples:** `Photomultiplier excess noise widened the count distribution at high voltage.` → Noise thừa photomultiplier làm rộng count distribution ở voltage cao.
**Liên kết tiếng Hàn:** `광증배관 초과 잡음`.

## 3. balanced photodetection /ˈbælənst ˈfoʊtoʊdɪˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** subtracting two photodiode outputs to reject common optical intensity noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trừ hai photodiode output để loại common optical intensity noise.
**Grammar & collocations:** `balanced-photodetection residual` — residual; `reject common-mode light noise` — loại light noise common-mode.
**Examples:** `Balanced photodetection suppressed laser intensity noise in the interferometer.` → Detection photodetection-balanced triệt laser intensity noise trong interferometer.
**Liên kết tiếng Hàn:** `평형 광검출`.

## 4. transimpedance stability /ˌtrænzɪmˈpiːdəns stəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** ability of a current-to-voltage amplifier to remain stable with its detector capacitance and feedback network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng amplifier current-to-voltage ổn định với detector capacitance và feedback network.
**Grammar & collocations:** `transimpedance-stability margin` — margin; `compensate detector capacitance` — compensate detector capacitance.
**Examples:** `Transimpedance stability degraded when the fiber detector cable was lengthened.` → Stability transimpedance xấu khi detector cable fiber dài hơn.
**Liên kết tiếng Hàn:** `트랜스임피던스 안정성`.

## 5. shot-noise clearance /ʃɑːt nɔɪz ˈklɪrəns/
**Part of speech:** noun
**Core meaning (English):** separation between a measured signal and the shot-noise floor in a detection bandwidth.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách signal đo với shot-noise floor trong bandwidth detection.
**Grammar & collocations:** `shot-noise-clearance margin` — margin; `resolve a quantum-limited signal` — phân giải signal giới hạn quantum.
**Examples:** `Shot-noise clearance fell after optical attenuation was increased.` → Clearance noise-shot giảm sau khi tăng attenuation quang.
**Liên kết tiếng Hàn:** `샷 잡음 여유`.

## 6. dark-current drift /dɑːrk ˈkɜːrənt drɪft/
**Part of speech:** noun
**Core meaning (English):** gradual change in detector current measured without incident light.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** current detector thay đổi dần khi không có incident light.
**Grammar & collocations:** `dark-current-drift subtraction` — subtraction; `track a blocked-detector baseline` — theo dõi baseline detector bị che.
**Examples:** `Dark-current drift shifted the zero of the photon-counting measurement.` → Drift current-dark dịch zero của photon-counting measurement.
**Liên kết tiếng Hàn:** `암전류 드리프트`.

## 7. quantum efficiency rolloff /ˈkwɑːntəm ɪˈfɪʃənsi ˈroʊlɔːf/
**Part of speech:** noun
**Core meaning (English):** reduction in photon-to-electron conversion efficiency at an edge of wavelength, power, or operating condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** efficiency photon-to-electron giảm ở edge wavelength, power hoặc condition.
**Grammar & collocations:** `quantum-efficiency-rolloff curve` — curve; `correct wavelength response` — sửa wavelength response.
**Examples:** `Quantum efficiency rolloff reduced counts at the shortest wavelength.` → Rolloff efficiency-quantum giảm count ở wavelength ngắn nhất.
**Liên kết tiếng Hàn:** `양자 효율 롤오프`.

## 8. linearity knee /ˌlɪniˈærəti niː/
**Part of speech:** noun
**Core meaning (English):** signal level at which a detector's response begins to depart noticeably from proportionality.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** signal level nơi response detector bắt đầu lệch rõ khỏi proportionality.
**Grammar & collocations:** `linearity-knee estimate` — estimate; `find the onset of compression` — tìm onset compression.
**Examples:** `The linearity knee appeared before the nominal saturation rating.` → Knee linearity xuất hiện trước saturation rating danh nghĩa.
**Liên kết tiếng Hàn:** `선형성 무릎점`.

## 9. saturation recovery /ˌsætʃəˈreɪʃən rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** time and behavior required for a detector to return to accurate response after overload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** time và behavior detector cần để trở lại response chính xác sau overload.
**Grammar & collocations:** `saturation-recovery time` — time; `clear an overload transient` — clear overload transient.
**Examples:** `Saturation recovery delayed the first valid count after a bright calibration pulse.` → Recovery saturation trì hoãn count hợp lệ đầu sau calibration pulse sáng.
**Liên kết tiếng Hàn:** `포화 회복`.

## 10. afterpulsing probability /ˈæftərpʌlsɪŋ ˌprɑːbəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** probability that a detector produces a spurious pulse after a genuine detection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** probability detector tạo pulse giả sau detection thật.
**Grammar & collocations:** `afterpulsing-probability estimate` — estimate; `separate trapped-carrier release` — tách release carrier bị trap.
**Examples:** `Afterpulsing probability increased when the detector was gated too aggressively.` → Probability pulsing-sau tăng khi detector gate quá mạnh.
**Liên kết tiếng Hàn:** `애프터펄싱 확률`.

## 11. dead-time correction /ded taɪm kəˈrekʃən/
**Part of speech:** noun
**Core meaning (English):** adjustment for events missed while a detector is temporarily unable to register another event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** correction cho event bị miss khi detector tạm không register event khác.
**Grammar & collocations:** `dead-time-correction model` — model; `recover a true count rate` — khôi phục count rate thật.
**Examples:** `Dead-time correction lowered the apparent saturation in the count curve.` → Correction time-dead giảm saturation apparent trong count curve.
**Liên kết tiếng Hàn:** `불감 시간 보정`.

## 12. time-to-digital bin /taɪm tə ˈdɪdʒɪtəl bɪn/
**Part of speech:** noun
**Core meaning (English):** one discrete interval in a time-to-digital converter's arrival-time histogram.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interval rời rạc trong arrival-time histogram của converter time-to-digital.
**Grammar & collocations:** `time-to-digital-bin width` — width; `accumulate arrival events` — tích lũy arrival event.
**Examples:** `The time-to-digital bin was narrower than the detector timing jitter.` → Bin digital-thời gian hẹp hơn timing jitter detector.
**Liên kết tiếng Hàn:** `시간-디지털 빈`.

## 13. coincidence window /koʊˈɪnsɪdəns ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** allowed time interval in which detections are treated as belonging to the same event pair.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** time interval cho phép để detections được coi cùng event pair.
**Grammar & collocations:** `coincidence-window width` — width; `reject accidental pairs` — loại pair ngẫu nhiên.
**Examples:** `The coincidence window was narrowed to suppress accidental photon pairs.` → Window coincidence được thu hẹp để giảm photon pair ngẫu nhiên.
**Liên kết tiếng Hàn:** `동시성 창`.

## 14. single-photon timing jitter /ˈsɪŋɡəl ˈfoʊtoʊn ˈtaɪmɪŋ ˈdʒɪtər/
**Part of speech:** noun
**Core meaning (English):** statistical uncertainty in the recorded arrival time of an individual photon.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** uncertainty thống kê của arrival time ghi được cho từng photon.
**Grammar & collocations:** `single-photon-timing-jitter distribution` — distribution; `resolve a photon arrival` — phân giải photon arrival.
**Examples:** `Single-photon timing jitter broadened the coincidence peak.` → Jitter timing single-photon làm rộng coincidence peak.
**Liên kết tiếng Hàn:** `단일 광자 타이밍 지터`.

## 15. photon-number resolution /ˈfoʊtɑːn ˈnʌmbər ˌrezəˈluːʃən/
**Part of speech:** noun
**Core meaning (English):** ability to distinguish different numbers of photons in one measurement event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng phân biệt số photon khác nhau trong một measurement event.
**Grammar & collocations:** `photon-number-resolution histogram` — histogram; `separate one- and two-photon states` — tách state một và hai photon.
**Examples:** `Photon-number resolution improved after the detector operating point was retuned.` → Resolution number-photon cải thiện sau retune operating point detector.
**Liên kết tiếng Hàn:** `광자 수 분해능`.

## 16. heralding efficiency /ˈherəldɪŋ ɪˈfɪʃənsi/
**Part of speech:** noun
**Core meaning (English):** probability that a heralding detection correctly indicates the presence of its correlated partner photon.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** probability heralding detection báo đúng presence của partner photon tương quan.
**Grammar & collocations:** `heralding-efficiency estimate` — estimate; `condition on a trigger click` — condition theo trigger click.
**Examples:** `Heralding efficiency fell when coupling loss increased in the collection arm.` → Efficiency heralding giảm khi coupling loss tăng ở collection arm.
**Liên kết tiếng Hàn:** `헤럴딩 효율`.

## 17. visibility contrast /ˌvɪzəˈbɪləti ˈkɑːntræst/
**Part of speech:** noun
**Core meaning (English):** normalized difference between maximum and minimum intensity in an interference measurement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** difference normalized giữa intensity max và min trong interference measurement.
**Grammar & collocations:** `visibility-contrast ratio` — ratio; `quantify fringe quality` — định lượng fringe quality.
**Examples:** `Visibility contrast decreased when the polarization states were no longer matched.` → Contrast visibility giảm khi polarization state không còn khớp.
**Liên kết tiếng Hàn:** `가시도 대비`.

## 18. interference fringe /ˌɪntərˈfɪrəns frɪndʒ/
**Part of speech:** noun
**Core meaning (English):** alternating bright and dark pattern produced by coherent superposition of waves.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pattern sáng tối xen kẽ do superposition coherent của wave.
**Grammar & collocations:** `interference-fringe period` — period; `fit a sinusoidal fringe` — fit fringe sinusoidal.
**Examples:** `The interference fringe shifted as the reference mirror moved.` → Fringe interference dịch khi reference mirror di chuyển.
**Liên kết tiếng Hàn:** `간섭 무늬`.

## 19. photon arrival histogram /ˈfoʊtɑːn əˈraɪvəl ˈhɪstəɡræm/
**Part of speech:** noun
**Core meaning (English):** distribution of recorded photon arrival times relative to a trigger or reference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** distribution arrival time photon ghi so với trigger hoặc reference.
**Grammar & collocations:** `photon-arrival-histogram peak` — peak; `estimate a flight-time distribution` — ước tính flight-time distribution.
**Examples:** `The photon arrival histogram showed a delayed reflection from the fiber end.` → Histogram arrival-photon cho reflection trễ từ đầu fiber.
**Liên kết tiếng Hàn:** `광자 도착 히스토그램`.

## 20. gating window /ˈɡeɪtɪŋ ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** time interval during which a detector is enabled to accept events.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interval detector được enable để accept event.
**Grammar & collocations:** `gating-window delay` — delay; `open detection only during a pulse` — mở detection trong pulse.
**Examples:** `The gating window rejected background counts outside the expected arrival time.` → Window gating loại background count ngoài arrival time dự kiến.
**Liên kết tiếng Hàn:** `게이팅 창`.

## Review in context

**Avalanche photodiode gain**, **photomultiplier excess noise**, **balanced photodetection**, and **transimpedance stability** determine **shot-noise clearance**, **dark-current drift**, and **quantum efficiency rolloff**. A **linearity knee**, **saturation recovery**, **afterpulsing probability**, and **dead-time correction** shape the **time-to-digital bin**, **coincidence window**, and **single-photon timing jitter**. **Photon-number resolution**, **heralding efficiency**, **visibility contrast**, an **interference fringe**, a **photon arrival histogram**, and a **gating window** complete the quantum timing audit.

**Bản dịch tiếng Việt:** **Avalanche photodiode gain**, **photomultiplier excess noise**, **balanced photodetection** và **transimpedance stability** quyết định **shot-noise clearance**, **dark-current drift** và **quantum efficiency rolloff**. **Linearity knee**, **saturation recovery**, **afterpulsing probability** và **dead-time correction** định hình **time-to-digital bin**, **coincidence window** và **single-photon timing jitter**. **Photon-number resolution**, **heralding efficiency**, **visibility contrast**, **interference fringe**, **photon arrival histogram** và **gating window** hoàn tất audit quantum timing.
