# C2 Vocabulary — Coherent optical links and fiber impairments

This lesson follows an optical link from photodetection through coherent recovery, power budgeting, dispersion, and nonlinear fiber limits.

Flow: **coherent optical receiver → direct-detection receiver → photodiode responsivity → dispersion penalty → chirp parameter → chirped pulse → optical power budget → link extinction ratio → eye-opening penalty → fiber nonlinear phase → stimulated Brillouin scattering → stimulated Raman scattering → polarization-mode dispersion → differential group delay → chromatic-dispersion slope → dispersion compensation → receiver local oscillator → optical hybrid → constellation rotation → carrier phase recovery**.

## 1. coherent optical receiver /koʊˈhɪrənt ˈɑːptɪkəl rɪˈsiːvər/
**Part of speech:** noun
**Core meaning (English):** receiver that mixes an incoming optical field with a local oscillator to recover amplitude and phase.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** receiver trộn optical field đến với local oscillator để khôi phục amplitude và phase.
**Grammar & collocations:** `coherent-optical-receiver DSP` — DSP; `recover a complex field` — khôi phục field phức.
**Examples:** `The coherent optical receiver recovered both quadratures after the long-haul span.` → Receiver quang coherent khôi phục cả hai quadrature sau span đường dài.
**Liên kết tiếng Hàn:** `코히어런트 광 수신기`.

## 2. direct-detection receiver /dəˈrekt dɪˈtekʃən rɪˈsiːvər/
**Part of speech:** noun
**Core meaning (English):** receiver that detects optical intensity without measuring the optical phase.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** receiver detect optical intensity mà không đo optical phase.
**Grammar & collocations:** `direct-detection-receiver sensitivity` — sensitivity; `square-law detect a field` — detect field theo square-law.
**Examples:** `The direct-detection receiver used fewer optical components but had less phase information.` → Receiver detect trực tiếp dùng ít component hơn nhưng ít phase information.
**Liên kết tiếng Hàn:** `직접 검파 수신기`.

## 3. photodiode responsivity /ˈfoʊtoʊdaɪoʊd ˌrɪspɑːnsɪˈvɪəti/
**Part of speech:** noun
**Core meaning (English):** electrical output per unit incident optical power for a photodiode.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** electrical output trên mỗi unit optical power tới photodiode.
**Grammar & collocations:** `photodiode-responsivity curve` — curve; `convert photons to current` — chuyển photon thành current.
**Examples:** `Photodiode responsivity decreased slightly at the edge of the operating band.` → Responsivity photodiode giảm nhẹ ở mép operating band.
**Liên kết tiếng Hàn:** `포토다이오드 감응도`.

## 4. dispersion penalty /dɪˈspɜːrʒən ˈpenəlti/
**Part of speech:** noun
**Core meaning (English):** signal-quality loss caused by different frequency components arriving at different times.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** signal quality loss do frequency component khác tới ở time khác.
**Grammar & collocations:** `dispersion-penalty estimate` — estimate; `budget chromatic distortion` — budget distortion sắc.
**Examples:** `Dispersion penalty reduced the eye opening after the fiber length doubled.` → Penalty dispersion giảm eye opening sau khi fiber length gấp đôi.
**Liên kết tiếng Hàn:** `분산 페널티`.

## 5. chirp parameter /tʃɜːrp pəˈræmətər/
**Part of speech:** noun
**Core meaning (English):** a parameter describing frequency change across the temporal envelope of an optical pulse.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parameter mô tả frequency đổi qua temporal envelope của optical pulse.
**Grammar & collocations:** `chirp-parameter sign` — sign; `model source-frequency sweep` — model frequency sweep source.
**Examples:** `The chirp parameter determined whether dispersion broadened or partially compressed the pulse.` → Parameter chirp quyết định dispersion làm pulse rộng hay nén một phần.
**Liên kết tiếng Hàn:** `처프 매개변수`.

## 6. chirped pulse /tʃɜːrpt pʌls/
**Part of speech:** noun
**Core meaning (English):** a pulse whose instantaneous frequency changes over its duration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pulse có instantaneous frequency đổi trong duration.
**Grammar & collocations:** `chirped-pulse spectrum` — spectrum; `compensate frequency sweep` — bù frequency sweep.
**Examples:** `A chirped pulse arrived with a tilted phase front after propagation.` → Pulse chirped tới với phase front nghiêng sau propagation.
**Liên kết tiếng Hàn:** `처프 펄스`.

## 7. optical power budget /ˈɑːptɪkəl ˈpaʊər ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** accounting of launched power, losses, and receiver sensitivity across an optical link.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** accounting launched power, loss và receiver sensitivity qua optical link.
**Grammar & collocations:** `optical-power-budget margin` — margin; `allocate connector loss` — phân bổ connector loss.
**Examples:** `The optical power budget left only two decibels for future splice aging.` → Budget power-quang chỉ còn hai decibel cho splice aging tương lai.
**Liên kết tiếng Hàn:** `광 파워 예산`.

## 8. link extinction ratio /lɪŋk ɪkˈstɪŋkʃən ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** ratio between optical power for a logical one and for a logical zero.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ số optical power của logical one với logical zero.
**Grammar & collocations:** `link-extinction-ratio mask` — mask; `measure on-off contrast` — đo contrast bật-tắt.
**Examples:** `Link extinction ratio fell when the modulator bias drifted.` → Ratio extinction link giảm khi bias modulator drift.
**Liên kết tiếng Hàn:** `링크 소광비`.

## 9. eye-opening penalty /aɪ ˈoʊpənɪŋ ˈpenəlti/
**Part of speech:** noun
**Core meaning (English):** reduction in vertical or horizontal eye opening caused by a link impairment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm eye opening dọc hoặc ngang do link impairment.
**Grammar & collocations:** `eye-opening-penalty decomposition` — decomposition; `attribute closure to loss` — quy closure cho loss.
**Examples:** `Eye-opening penalty was dominated by connector reflection rather than fiber loss.` → Penalty opening-eye chủ yếu do connector reflection chứ không phải fiber loss.
**Liên kết tiếng Hàn:** `아이 개방 페널티`.

## 10. fiber nonlinear phase /ˈfaɪbər nɑːnˈlɪniər feɪz/
**Part of speech:** noun
**Core meaning (English):** phase shift accumulated in fiber because refractive response depends on optical intensity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phase shift tích lũy trong fiber vì refractive response phụ thuộc optical intensity.
**Grammar & collocations:** `fiber-nonlinear-phase rotation` — rotation; `estimate a Kerr shift` — ước tính Kerr shift.
**Examples:** `Fiber nonlinear phase rotated the constellation at the highest launch power.` → Phase phi tuyến fiber xoay constellation ở launch power cao nhất.
**Liên kết tiếng Hàn:** `광섬유 비선형 위상`.

## 11. stimulated Brillouin scattering /ˈstɪmjəleɪtɪd ˈbrɪluːən ˈskætərɪŋ/
**Part of speech:** noun
**Core meaning (English):** nonlinear scattering between light and acoustic waves that can limit narrow-linewidth launch power.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scattering phi tuyến giữa light và acoustic wave giới hạn launch power narrow-linewidth.
**Grammar & collocations:** `stimulated-Brillouin-scattering threshold` — threshold; `suppress backward light` — giảm light ngược.
**Examples:** `Stimulated Brillouin scattering reflected power before the amplifier reached its thermal limit.` → Scattering Brillouin kích thích phản xạ power trước khi amplifier đạt thermal limit.
**Liên kết tiếng Hàn:** `유도 브릴루앙 산란`.

## 12. stimulated Raman scattering /ˈstɪmjəleɪtɪd ˈrɑːmən ˈskætərɪŋ/
**Part of speech:** noun
**Core meaning (English):** nonlinear transfer of optical power to frequency-shifted Raman waves in a fiber.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transfer phi tuyến optical power sang Raman wave frequency-shifted trong fiber.
**Grammar & collocations:** `stimulated-Raman-scattering threshold` — threshold; `deplete a pump channel` — làm cạn pump channel.
**Examples:** `Stimulated Raman scattering depleted the shortest-wavelength channel in the dense multiplex.` → Scattering Raman kích thích làm cạn channel bước sóng ngắn nhất.
**Liên kết tiếng Hàn:** `유도 라만 산란`.

## 13. polarization-mode dispersion /pəˌlərəˈzeɪʃən moʊd dɪˈspɜːrʒən/
**Part of speech:** noun
**Core meaning (English):** differential delay between polarization modes caused by fiber birefringence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** delay khác nhau giữa polarization mode do birefringence fiber.
**Grammar & collocations:** `polarization-mode-dispersion coefficient` — coefficient; `track a drifting principal axis` — theo dõi trục chính drift.
**Examples:** `Polarization-mode dispersion varied as the aerial cable moved in the wind.` → Dispersion mode-polarization đổi khi aerial cable chuyển trong gió.
**Liên kết tiếng Hàn:** `편파 모드 분산`.

## 14. differential group delay /ˌdɪfəˈrenʃəl ɡruːp dɪˈleɪ/
**Part of speech:** noun
**Core meaning (English):** arrival-time difference between two propagation modes or polarization states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khác biệt arrival-time giữa hai propagation mode hoặc polarization state.
**Grammar & collocations:** `differential-group-delay measurement` — measurement; `bound polarization skew` — giới hạn skew polarization.
**Examples:** `Differential group delay exceeded the receiver equalizer's tracking range.` → Delay group-differential vượt tracking range equalizer receiver.
**Liên kết tiếng Hàn:** `차동 군지연`.

## 15. chromatic-dispersion slope /kroʊˈmætɪk dɪˈspɜːrʒən sloʊp/
**Part of speech:** noun
**Core meaning (English):** rate at which chromatic dispersion changes with optical wavelength.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ chromatic dispersion đổi theo optical wavelength.
**Grammar & collocations:** `chromatic-dispersion-slope fit` — fit; `model a wide wavelength band` — model band wavelength rộng.
**Examples:** `Chromatic-dispersion slope separated the two wavelength channels' pulse broadening.` → Slope dispersion-chromatic tách pulse broadening của hai channel wavelength.
**Liên kết tiếng Hàn:** `색 분산 기울기`.

## 16. dispersion compensation /dɪˈspɜːrʒən ˌkɑːmpənˈseɪʃən/
**Part of speech:** noun
**Core meaning (English):** optical or digital correction that reverses accumulated frequency-dependent delay.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** correction quang hoặc số đảo delay phụ thuộc frequency tích lũy.
**Grammar & collocations:** `dispersion-compensation filter` — filter; `equalize a long span` — equalize span dài.
**Examples:** `Dispersion compensation restored symbol separation without increasing launch power.` → Compensation dispersion khôi phục symbol separation mà không tăng launch power.
**Liên kết tiếng Hàn:** `분산 보상`.

## 17. receiver local oscillator /rɪˈsiːvər ˈloʊkəl ˈɑːsəleɪtər/
**Part of speech:** noun
**Core meaning (English):** a stable optical source mixed with the received field in a coherent receiver.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** optical source ổn định trộn với received field trong coherent receiver.
**Grammar & collocations:** `receiver-local-oscillator linewidth` — linewidth; `mix a reference field` — trộn reference field.
**Examples:** `Receiver local oscillator linewidth limited carrier recovery at low signal power.` → Linewidth oscillator-local receiver giới hạn carrier recovery ở signal power thấp.
**Liên kết tiếng Hàn:** `수신기 국부 발진기`.

## 18. optical hybrid /ˈɑːptɪkəl ˈhaɪbrɪd/
**Part of speech:** noun
**Core meaning (English):** an optical coupler that combines received and reference fields into phase-shifted output pairs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** coupler quang gộp received và reference field thành cặp output lệch phase.
**Grammar & collocations:** `optical-hybrid imbalance` — imbalance; `separate I and Q branches` — tách branch I và Q.
**Examples:** `The optical hybrid imbalance appeared as unequal constellation axes.` → Imbalance hybrid-quang xuất hiện như trục constellation không đều.
**Liên kết tiếng Hàn:** `광 하이브리드`.

## 19. constellation rotation /ˌkɑːnstəˈleɪʃən roʊˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** common phase rotation of received complex symbols relative to their intended positions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phase rotation chung của complex symbol nhận so với vị trí dự kiến.
**Grammar & collocations:** `constellation-rotation tracker` — tracker; `remove carrier phase drift` — loại carrier phase drift.
**Examples:** `Constellation rotation followed the fiber nonlinear phase during the power sweep.` → Rotation constellation đi theo phase phi tuyến fiber trong power sweep.
**Liên kết tiếng Hàn:** `성상 회전`.

## 20. carrier phase recovery /ˈkæriər feɪz rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** estimating and removing the changing carrier phase from received symbols.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính và loại carrier phase đổi khỏi symbol nhận.
**Grammar & collocations:** `carrier-phase-recovery loop` — loop; `track laser phase noise` — bám phase noise laser.
**Examples:** `Carrier phase recovery failed during a cycle slip and required pilot-aided reacquisition.` → Recovery phase-carrier fail trong cycle slip và cần reacquisition pilot-aided.
**Liên kết tiếng Hàn:** `반송파 위상 복구`.

## Review in context

A **coherent optical receiver** or **direct-detection receiver** depends on **photodiode responsivity**, while **dispersion penalty**, **chirp parameter**, and a **chirped pulse** consume the **optical power budget**, **link extinction ratio**, and **eye-opening penalty**. **Fiber nonlinear phase**, **stimulated Brillouin scattering**, **stimulated Raman scattering**, **polarization-mode dispersion**, **differential group delay**, **chromatic-dispersion slope**, and **dispersion compensation** shape the span. A **receiver local oscillator**, **optical hybrid**, **constellation rotation**, and **carrier phase recovery** complete coherent processing.

**Bản dịch tiếng Việt:** **Coherent optical receiver** hoặc **direct-detection receiver** phụ thuộc **photodiode responsivity**, trong khi **dispersion penalty**, **chirp parameter** và **chirped pulse** tiêu hao **optical power budget**, **link extinction ratio** và **eye-opening penalty**. **Fiber nonlinear phase**, **stimulated Brillouin scattering**, **stimulated Raman scattering**, **polarization-mode dispersion**, **differential group delay**, **chromatic-dispersion slope** và **dispersion compensation** định hình span. **Receiver local oscillator**, **optical hybrid**, **constellation rotation** và **carrier phase recovery** hoàn tất xử lý coherent.
