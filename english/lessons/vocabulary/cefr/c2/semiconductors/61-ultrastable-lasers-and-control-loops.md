# C2 Vocabulary — Ultrastable lasers and control loops

This lesson follows a precision optical reference from residual error and cavity design through sensing, actuation, and lock capture.

Flow: **residual frequency error → reference cavity → ultra-stable laser → cavity pulling → linewidth transfer → optical clockwork → frequency metrology → frequency discriminator → phase detector → loop filter → proportional-integral controller → feed-forward correction → feedback correction → frequency actuator → piezoelectric tuning → current tuning → mode-hop-free tuning → tuning coefficient → capture range → holdover stability**.

## 1. residual frequency error /rɪˈzɪdʒuəl ˈfriːkwənsi ˈerər/
**Part of speech:** noun
**Core meaning (English):** the frequency difference that remains after a control system has applied its correction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch frequency còn lại sau khi hệ điều khiển đã hiệu chỉnh.
**Grammar & collocations:** `residual-frequency-error budget` — ngân sách; `reduce the remaining offset` — giảm offset còn lại.
**Examples:** `The residual frequency error stayed below the specification during the overnight run.` → Sai số frequency còn lại dưới đặc tả trong lần chạy qua đêm.
**Liên kết tiếng Hàn:** `잔류 주파수 오차`.

## 2. reference cavity /ˈrefərəns ˈkævəti/
**Part of speech:** noun
**Core meaning (English):** a stable optical resonator whose resonance provides a frequency reference for a laser.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resonator quang ổn định, có resonance làm tham chiếu frequency cho laser.
**Grammar & collocations:** `reference-cavity spacer` — spacer; `lock a laser to resonance` — khóa laser vào resonance.
**Examples:** `The reference cavity isolated the optical frequency from short-term laser noise.` → Reference cavity cô lập frequency quang khỏi noise ngắn hạn của laser.
**Liên kết tiếng Hàn:** `기준 공동`.

## 3. ultra-stable laser /ˈʌltrə ˈsteɪbəl ˈleɪzər/
**Part of speech:** noun
**Core meaning (English):** a laser whose frequency and linewidth are tightly controlled for precision measurement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** laser có frequency và linewidth được kiểm soát chặt cho phép đo chính xác.
**Grammar & collocations:** `ultra-stable-laser system` — hệ thống; `suppress frequency drift` — triệt drift frequency.
**Examples:** `The ultra-stable laser served as the master for the optical clock.` → Laser ultra-stable làm master cho optical clock.
**Liên kết tiếng Hàn:** `초안정 레이저`.

## 4. cavity pulling /ˈkævəti ˈpʊlɪŋ/
**Part of speech:** noun
**Core meaning (English):** displacement of a laser's oscillation frequency toward the cavity resonance when gain and cavity are not perfectly matched.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** frequency dao động laser bị kéo về resonance cavity khi gain và cavity không khớp hoàn toàn.
**Grammar & collocations:** `cavity-pulling shift` — độ dịch; `detune the gain peak` — làm lệch đỉnh gain.
**Examples:** `Cavity pulling shifted the line when the gain medium temperature changed.` → Cavity pulling làm dịch line khi nhiệt gain medium đổi.
**Liên kết tiếng Hàn:** `공동 당김`.

## 5. linewidth transfer /ˈlaɪnˌwɪdθ trænsˈfɜːr/
**Part of speech:** noun
**Core meaning (English):** transmission of a narrow spectral linewidth from a reference source to another oscillator.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truyền linewidth hẹp từ nguồn tham chiếu sang oscillator khác.
**Grammar & collocations:** `linewidth-transfer link` — link; `inherit reference coherence` — thừa hưởng coherence tham chiếu.
**Examples:** `Linewidth transfer gave the remote laser a coherence time suitable for interferometry.` → Truyền linewidth cho laser xa coherence time phù hợp giao thoa.
**Liên kết tiếng Hàn:** `선폭 전달`.

## 6. optical clockwork /ˈɑːptɪkəl ˈklɑːkwɜːrk/
**Part of speech:** noun
**Core meaning (English):** a chain of frequency references and dividers that connects an optical standard to usable output frequencies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi tham chiếu và bộ chia nối chuẩn quang với các frequency output có thể dùng.
**Grammar & collocations:** `optical-clockwork chain` — chuỗi; `divide a standard coherently` — chia chuẩn coherent.
**Examples:** `The optical clockwork delivered both a laser carrier and a microwave timing signal.` → Clockwork quang cung cấp carrier laser và tín hiệu timing microwave.
**Liên kết tiếng Hàn:** `광 시계 장치`.

## 7. frequency metrology /ˈfriːkwənsi məˈtrɑːlədʒi/
**Part of speech:** noun
**Core meaning (English):** the science of measuring frequency and frequency stability against defined standards.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoa học đo frequency và độ ổn định frequency theo chuẩn xác định.
**Grammar & collocations:** `frequency-metrology laboratory` — phòng lab; `compare against a standard` — so với chuẩn.
**Examples:** `Frequency metrology exposed a drift that ordinary power monitoring missed.` → Metrology frequency phát hiện drift mà theo dõi power thường bỏ sót.
**Liên kết tiếng Hàn:** `주파수 계측학`.

## 8. frequency discriminator /ˈfriːkwənsi dɪˈskrɪməneɪtər/
**Part of speech:** noun
**Core meaning (English):** a circuit that converts frequency deviation into a measurable voltage or phase error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch đổi lệch frequency thành voltage đo được hoặc phase error.
**Grammar & collocations:** `frequency-discriminator slope` — slope; `convert detuning to voltage` — đổi detuning thành voltage.
**Examples:** `The frequency discriminator produced an error signal for the slow actuator.` → Discriminator frequency tạo error signal cho actuator chậm.
**Liên kết tiếng Hàn:** `주파수 판별기`.

## 9. phase detector /feɪz dɪˈtektər/
**Part of speech:** noun
**Core meaning (English):** a device that compares two phases and outputs a signal proportional to their difference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết bị so sánh hai pha và tạo signal tỷ lệ với chênh lệch.
**Grammar & collocations:** `phase-detector gain` — gain; `compare a reference phase` — so sánh pha tham chiếu.
**Examples:** `The phase detector converted the optical phase error into a control voltage.` → Detector pha đổi phase error quang thành voltage điều khiển.
**Liên kết tiếng Hàn:** `위상 검출기`.

## 10. loop filter /luːp ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a filter in a feedback path that shapes loop gain, noise rejection, and stability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** filter trong đường feedback định hình loop gain, loại noise và độ ổn định.
**Grammar & collocations:** `loop-filter pole` — pole; `shape the servo response` — định hình đáp ứng servo.
**Examples:** `The loop filter rejected high-frequency detector noise without slowing acquisition.` → Loop filter loại noise detector cao frequency mà không làm acquisition chậm.
**Liên kết tiếng Hàn:** `루프 필터`.

## 11. proportional-integral controller /prəˈpɔːrʃənəl ˈɪntəɡrəl kənˈtroʊlər/
**Part of speech:** noun
**Core meaning (English):** a controller that combines immediate proportional correction with accumulated integral correction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** controller kết hợp hiệu chỉnh proportional tức thời với hiệu chỉnh integral tích lũy.
**Grammar & collocations:** `proportional-integral-controller gain` — gain; `eliminate steady-state error` — loại error trạng thái ổn định.
**Examples:** `The proportional-integral controller removed the static frequency offset.` → Controller proportional-integral loại offset frequency tĩnh.
**Liên kết tiếng Hàn:** `비례 적분 제어기`.

## 12. feed-forward correction /fiːd ˈfɔːrwərd kəˈrekʃən/
**Part of speech:** noun
**Core meaning (English):** a correction applied from a predicted disturbance before feedback error appears.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiệu chỉnh áp trước dựa trên disturbance dự đoán, trước khi feedback error xuất hiện.
**Grammar & collocations:** `feed-forward-correction table` — bảng; `preempt a thermal shift` — đón trước dịch nhiệt.
**Examples:** `Feed-forward correction compensated the known ramp in cavity temperature.` → Hiệu chỉnh feed-forward bù ramp nhiệt cavity đã biết.
**Liên kết tiếng Hàn:** `피드포워드 보정`.

## 13. feedback correction /ˈfiːdbæk kəˈrekʃən/
**Part of speech:** noun
**Core meaning (English):** a correction computed from the measured difference between output and target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiệu chỉnh tính từ chênh lệch đo được giữa output và target.
**Grammar & collocations:** `feedback-correction signal` — signal; `close the error loop` — đóng loop error.
**Examples:** `Feedback correction removed the residual drift after the warm-up transient.` → Hiệu chỉnh feedback loại drift còn lại sau transient làm nóng.
**Liên kết tiếng Hàn:** `피드백 보정`.

## 14. frequency actuator /ˈfriːkwənsi ˈæktʃuˌeɪtər/
**Part of speech:** noun
**Core meaning (English):** a component that changes an oscillator's frequency in response to a control signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** linh kiện đổi frequency của oscillator theo control signal.
**Grammar & collocations:** `frequency-actuator path` — đường; `apply a correction voltage` — áp voltage hiệu chỉnh.
**Examples:** `The fast frequency actuator followed acoustic disturbances inside the servo bandwidth.` → Actuator frequency nhanh bám disturbance âm trong bandwidth servo.
**Liên kết tiếng Hàn:** `주파수 액추에이터`.

## 15. piezoelectric tuning /ˌpiːzoʊɪˈlektrɪk ˈtuːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** frequency adjustment produced by moving an optical component with a piezoelectric element.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh frequency bằng cách di chuyển linh kiện quang với phần tử piezoelectric.
**Grammar & collocations:** `piezoelectric-tuning range` — range; `stretch a cavity spacer` — kéo spacer cavity.
**Examples:** `Piezoelectric tuning corrected the slow cavity drift without changing the laser current.` → Chỉnh piezoelectric sửa drift cavity chậm mà không đổi dòng laser.
**Liên kết tiếng Hàn:** `압전 튜닝`.

## 16. current tuning /ˈkɜːrənt ˈtuːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** changing a laser's frequency by adjusting its injection current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi frequency laser bằng cách chỉnh dòng injection.
**Grammar & collocations:** `current-tuning coefficient` — hệ số; `modulate injection current` — điều chế dòng bơm.
**Examples:** `Current tuning gave the fast actuator enough range for acoustic correction.` → Chỉnh dòng cho actuator nhanh đủ range để bù âm.
**Liên kết tiếng Hàn:** `전류 튜닝`.

## 17. mode-hop-free tuning /moʊd hɑːp friː ˈtuːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** continuous frequency adjustment over a span without the laser jumping to another longitudinal mode.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh frequency liên tục trong một span mà laser không nhảy sang mode dọc khác.
**Grammar & collocations:** `mode-hop-free-tuning span` — span; `sweep a single mode` — quét một mode.
**Examples:** `Mode-hop-free tuning let the spectrometer scan the line continuously.` → Chỉnh không nhảy mode cho spectrometer quét line liên tục.
**Liên kết tiếng Hàn:** `모드 도약 없는 튜닝`.

## 18. tuning coefficient /ˈtuːnɪŋ ˌkoʊəˈfɪʃənt/
**Part of speech:** noun
**Core meaning (English):** the change in frequency produced per unit change in a tuning control.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi frequency trên mỗi đơn vị thay đổi của control tuning.
**Grammar & collocations:** `tuning-coefficient calibration` — hiệu chuẩn; `map voltage to detuning` — map voltage với detuning.
**Examples:** `The tuning coefficient varied after the laser package reached thermal equilibrium.` → Hệ số tuning đổi sau khi package laser đạt cân bằng nhiệt.
**Liên kết tiếng Hàn:** `튜닝 계수`.

## 19. capture range /ˈkæptʃər reɪndʒ/
**Part of speech:** noun
**Core meaning (English):** the initial frequency or phase-error interval from which a control loop can acquire lock.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng frequency hoặc phase error ban đầu mà loop có thể bắt khóa.
**Grammar & collocations:** `capture-range test` — thử nghiệm; `widen the acquisition window` — mở cửa sổ acquisition.
**Examples:** `The auxiliary scan widened the capture range before the narrow servo engaged.` → Scan phụ mở capture range trước khi servo hẹp hoạt động.
**Liên kết tiếng Hàn:** `포착 범위`.

## 20. holdover stability /ˈhoʊldoʊvər stəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the stability a reference maintains while its normal external lock or input is temporarily unavailable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ ổn định tham chiếu giữ được khi lock hoặc input ngoài tạm thời mất.
**Grammar & collocations:** `holdover-stability test` — thử nghiệm; `ride through a link outage` — vượt qua outage link.
**Examples:** `Holdover stability kept the experiment usable during the reference-fiber interruption.` → Holdover stability giữ thí nghiệm dùng được khi fiber tham chiếu gián đoạn.
**Liên kết tiếng Hàn:** `홀드오버 안정도`.

## Review in context

The **residual frequency error** of an **ultra-stable laser** is measured against a **reference cavity**; **cavity pulling** and **linewidth transfer** determine how faithfully the reference is inherited. An **optical clockwork** supports **frequency metrology**, where a **frequency discriminator**, **phase detector**, and **loop filter** feed a **proportional-integral controller**. **Feed-forward correction** anticipates known drift, while **feedback correction** removes measured error through a **frequency actuator**. **Piezoelectric tuning**, **current tuning**, and **mode-hop-free tuning** are described by a **tuning coefficient**; the **capture range** determines acquisition, and **holdover stability** protects the result during an interruption.

**Bản dịch tiếng Việt:** **Residual frequency error** của **ultra-stable laser** được đo so với **reference cavity**; **cavity pulling** và **linewidth transfer** quyết định mức tham chiếu được truyền chính xác. **Optical clockwork** hỗ trợ **frequency metrology**, nơi **frequency discriminator**, **phase detector** và **loop filter** cấp tín hiệu cho **proportional-integral controller**. **Feed-forward correction** đón trước drift đã biết, còn **feedback correction** loại error đo được qua **frequency actuator**. **Piezoelectric tuning**, **current tuning** và **mode-hop-free tuning** được mô tả bằng **tuning coefficient**; **capture range** quyết định acquisition, còn **holdover stability** bảo vệ kết quả khi gián đoạn.
