# C2 Vocabulary — Metrology readout and cross-instrument validation

This lesson connects precision readout to metrology practice: demodulation, signal-path checks, reference standards, and reproducibility across instruments.

Flow: **heterodyne readout → lock-in detection → demodulation residual → differential path → cross-talk matrix → transfer standard → reference artifact → acceptance threshold → out-of-control signal → gauge repeatability → reproducibility study → round-robin test → interlaboratory comparison → measurement system analysis → reference oscillator → quadrature mixer → image rejection → carrier suppression → spurious tone → settling transient**.

## 1. heterodyne readout /ˈhetəroʊdaɪn ˈriːdaʊt/
**Part of speech:** noun
**Core meaning (English):** readout that mixes a signal with a reference at a different frequency to translate it to an easier intermediate frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** readout trộn signal với reference khác frequency để chuyển về intermediate frequency dễ xử lý.
**Grammar & collocations:** `heterodyne-readout chain` — chain; `downconvert a carrier` — hạ tần carrier.
**Examples:** `Heterodyne readout moved the weak resonance away from the low-frequency amplifier drift.` → Readout heterodyne đưa resonance yếu ra khỏi drift tần số thấp của amplifier.
**Liên kết tiếng Hàn:** `헤테로다인 판독`.

## 2. lock-in detection /ˈlɑːk ɪn dɪˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** phase-sensitive detection that extracts a narrow-band response with a known reference modulation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** detection nhạy pha lấy response narrow-band bằng reference modulation đã biết.
**Grammar & collocations:** `lock-in-detection time constant` — hằng số; `demodulate a weak response` — demodulate response yếu.
**Examples:** `Lock-in detection recovered the displacement signal beneath broadband digitizer noise.` → Detection lock-in khôi phục signal dịch chuyển dưới noise broadband của digitizer.
**Liên kết tiếng Hàn:** `락인 검출`.

## 3. demodulation residual /ˌdiːmɑːdəˈleɪʃən rɪˈzɪdʒuəl/
**Part of speech:** noun
**Core meaning (English):** the portion of a demodulated signal left unexplained after the fitted amplitude and phase are removed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần signal demodulate còn lại sau khi bỏ amplitude và phase đã fit.
**Grammar & collocations:** `demodulation-residual spectrum` — phổ; `inspect unexplained quadrature` — kiểm tra quadrature chưa giải thích.
**Examples:** `The demodulation residual exposed a second tone that the single-frequency fit ignored.` → Residual demodulation lộ tone thứ hai mà fit một frequency bỏ qua.
**Liên kết tiếng Hàn:** `복조 잔차`.

## 4. differential path /ˌdɪfəˈrenʃəl pæθ/
**Part of speech:** noun
**Core meaning (English):** a measurement path that carries the difference between two related signals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường measurement mang hiệu giữa hai signal liên quan.
**Grammar & collocations:** `differential-path balance` — cân bằng; `subtract common pickup` — trừ pickup chung.
**Examples:** `The differential path rejected a magnetic pickup shared by both sensor leads.` → Path vi sai loại pickup từ trường chung ở hai dây sensor.
**Liên kết tiếng Hàn:** `차동 경로`.

## 5. cross-talk matrix /ˈkrɔːs tɔːk ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a matrix that quantifies unwanted coupling from each measured channel into the others.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận định lượng coupling không mong muốn từ mỗi channel vào channel khác.
**Grammar & collocations:** `cross-talk-matrix inversion` — phép đảo; `de-embed channel coupling` — de-embed coupling channel.
**Examples:** `The cross-talk matrix revealed that the neighboring resonator contaminated the readout channel.` → Ma trận cross-talk cho thấy resonator bên cạnh làm nhiễm channel readout.
**Liên kết tiếng Hàn:** `누화 행렬`.

## 6. transfer standard /ˈtrænsfɜːr ˈstændərd/
**Part of speech:** noun
**Core meaning (English):** a stable reference device used to carry a calibrated value from one measurement system to another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết bị reference ổn định dùng chuyển giá trị đã calibration giữa các hệ measurement.
**Grammar & collocations:** `transfer-standard comparison` — so sánh; `transport a calibrated reference` — vận chuyển reference đã calibration.
**Examples:** `A transfer standard linked the cryogenic setup to the room-temperature analyzer.` → Standard transfer nối setup cryogenic với analyzer nhiệt độ phòng.
**Liên kết tiếng Hàn:** `전이 표준`.

## 7. reference artifact /ˈrefrəns ˈɑːrtəfækt/
**Part of speech:** noun
**Core meaning (English):** a physical object with a characterized property used to check a measurement procedure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vật thể có property đã characterize dùng kiểm tra procedure measurement.
**Grammar & collocations:** `reference-artifact certificate` — chứng nhận; `verify a measurement route` — xác minh route đo.
**Examples:** `The reference artifact confirmed that the new probe had not changed the calibration slope.` → Artifact reference xác nhận probe mới chưa đổi slope calibration.
**Liên kết tiếng Hàn:** `참조 아티팩트`.

## 8. acceptance threshold /əkˈseptəns ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** a predefined limit used to decide whether a device, run, or measurement passes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn định trước để quyết định device, run hoặc measurement đạt hay không.
**Grammar & collocations:** `acceptance-threshold test` — kiểm tra; `pass a production screen` — vượt màn hình kiểm tra sản xuất.
**Examples:** `The device missed the acceptance threshold because its leakage rose after thermal cycling.` → Device không đạt threshold acceptance vì leakage tăng sau thermal cycling.
**Liên kết tiếng Hàn:** `합격 임계값`.

## 9. out-of-control signal /ˌaʊt əv kənˈtroʊl ˈsɪɡnəl/
**Part of speech:** noun
**Core meaning (English):** a measurement pattern indicating that a process has left its expected statistical state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pattern measurement báo process đã rời trạng thái thống kê kỳ vọng.
**Grammar & collocations:** `out-of-control-signal rule` — rule; `halt a drifting process` — dừng process drift.
**Examples:** `An out-of-control signal triggered a retest before the wafer lot was released.` → Signal ngoài kiểm soát kích hoạt retest trước khi release lot wafer.
**Liên kết tiếng Hàn:** `관리 이탈 신호`.

## 10. gauge repeatability /ɡeɪdʒ rɪˌpiːtəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** variation when the same operator and instrument repeat a measurement under unchanged conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variation khi cùng operator và instrument lặp measurement trong điều kiện không đổi.
**Grammar & collocations:** `gauge-repeatability estimate` — ước tính; `repeat a part measurement` — lặp phép đo part.
**Examples:** `Gauge repeatability was smaller than the part-to-part variation in the test fixture.` → Repeatability gauge nhỏ hơn variation giữa các part trong fixture.
**Liên kết tiếng Hàn:** `게이지 반복성`.

## 11. reproducibility study /ˌriːprədjuːsəˈbɪləti ˈstʌdi/
**Part of speech:** noun
**Core meaning (English):** a study of variation when a method is repeated across operators, instruments, locations, or days.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nghiên cứu variation khi method lặp qua operator, instrument, location hoặc ngày khác.
**Grammar & collocations:** `reproducibility-study design` — thiết kế; `separate operator effects` — tách effect operator.
**Examples:** `The reproducibility study found a location effect that the local repeatability test missed.` → Study reproducibility phát hiện effect location mà test repeatability tại chỗ bỏ sót.
**Liên kết tiếng Hàn:** `재현성 연구`.

## 12. round-robin test /ˌraʊnd ˈrɑːbɪn test/
**Part of speech:** noun
**Core meaning (English):** a coordinated comparison in which the same samples circulate among several laboratories or instruments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** comparison phối hợp trong đó cùng sample luân chuyển giữa nhiều lab hoặc instrument.
**Grammar & collocations:** `round-robin-test protocol` — protocol; `circulate a reference sample` — luân chuyển sample reference.
**Examples:** `The round-robin test exposed a systematic offset in one laboratory's temperature correction.` → Test round-robin lộ offset hệ thống trong correction nhiệt độ của một lab.
**Liên kết tiếng Hàn:** `라운드 로빈 시험`.

## 13. interlaboratory comparison /ˌɪntərlæbrətɔːri kəmˈpærɪsən/
**Part of speech:** noun
**Core meaning (English):** an organized comparison of measurement results produced by independent laboratories.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** comparison có tổ chức giữa kết quả đo của các phòng thí nghiệm độc lập.
**Grammar & collocations:** `interlaboratory-comparison report` — báo cáo; `compare reported uncertainties` — so uncertainty đã báo cáo.
**Examples:** `The interlaboratory comparison narrowed the plausible bias of the reference thermometer.` → Comparison liên phòng thu hẹp bias có thể có của thermometer reference.
**Liên kết tiếng Hàn:** `기관 간 비교`.

## 14. measurement system analysis /ˈmeʒərmənt ˈsɪstəm əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** a structured analysis of whether a measurement system is adequate for its intended decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích có cấu trúc xem hệ measurement có đủ phù hợp cho quyết định dự kiến không.
**Grammar & collocations:** `measurement-system-analysis plan` — plan; `quantify gauge variation` — định lượng variation gauge.
**Examples:** `Measurement system analysis showed that instrument noise consumed most of the tolerance.` → Phân tích hệ measurement cho thấy noise instrument chiếm phần lớn tolerance.
**Liên kết tiếng Hàn:** `측정 시스템 분석`.

## 15. reference oscillator /ˈrefrəns ˈɑːsəleɪtər/
**Part of speech:** noun
**Core meaning (English):** an oscillator whose stable frequency provides the timing or phase reference for another measurement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** oscillator có frequency ổn định làm reference timing hoặc phase cho measurement khác.
**Grammar & collocations:** `reference-oscillator phase noise` — phase noise; `discipline a local clock` — kỷ luật clock cục bộ.
**Examples:** `The reference oscillator limited the phase uncertainty of the heterodyne channel.` → Oscillator reference giới hạn uncertainty pha của channel heterodyne.
**Liên kết tiếng Hàn:** `기준 발진기`.

## 16. quadrature mixer /ˈkwɑːdrətʃər ˈmɪksər/
**Part of speech:** noun
**Core meaning (English):** a mixer that produces in-phase and ninety-degree quadrature components of a signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mixer tạo thành phần in-phase và quadrature lệch chín mươi độ của signal.
**Grammar & collocations:** `quadrature-mixer imbalance` — imbalance; `form complex baseband data` — tạo data baseband phức.
**Examples:** `The quadrature mixer converted the microwave response into complex baseband samples.` → Mixer quadrature chuyển response microwave thành sample baseband phức.
**Liên kết tiếng Hàn:** `직교 혼합기`.

## 17. image rejection /ˈɪmɪdʒ rɪˈdʒekʃən/
**Part of speech:** noun
**Core meaning (English):** suppression of the unwanted mirror-frequency component created by frequency conversion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** triệt thành phần mirror-frequency không mong muốn do chuyển frequency tạo ra.
**Grammar & collocations:** `image-rejection ratio` — tỷ số; `suppress a mirror sideband` — triệt sideband gương.
**Examples:** `Image rejection improved after the I/Q imbalance was corrected in firmware.` → Rejection image cải thiện sau khi sửa imbalance I/Q trong firmware.
**Liên kết tiếng Hàn:** `이미지 제거`.

## 18. carrier suppression /ˈkæriər səˈpreʃən/
**Part of speech:** noun
**Core meaning (English):** reduction of an unwanted carrier component so that modulation sidebands can be measured clearly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm carrier không mong muốn để đo rõ modulation sideband.
**Grammar & collocations:** `carrier-suppression notch` — notch; `null the local carrier` — triệt carrier local.
**Examples:** `Carrier suppression exposed a weak modulation sideband near the resonator frequency.` → Suppression carrier làm lộ sideband modulation yếu gần frequency resonator.
**Liên kết tiếng Hàn:** `반송파 억압`.

## 19. spurious tone /ˈspjʊriəs toʊn/
**Part of speech:** noun
**Core meaning (English):** an unintended narrow-band spectral component produced by electronics, coupling, or digital processing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thành phần phổ narrow-band ngoài ý muốn do electronics, coupling hoặc xử lý số tạo ra.
**Grammar & collocations:** `spurious-tone hunt` — truy tìm; `identify a clock harmonic` — xác định harmonic clock.
**Examples:** `A spurious tone at the frame rate mimicked a weak physical oscillation.` → Tone giả ở frame rate bắt chước một dao động vật lý yếu.
**Liên kết tiếng Hàn:** `불요 톤`.

## 20. settling transient /ˈsetlɪŋ ˈtrænziənt/
**Part of speech:** noun
**Core meaning (English):** a temporary response while a circuit or device moves toward its steady operating state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** response tạm thời khi circuit hoặc device tiến tới trạng thái ổn định.
**Grammar & collocations:** `settling-transient mask` — mặt nạ; `wait for steady state` — chờ steady state.
**Examples:** `The acquisition window began after the settling transient had decayed below the noise floor.` → Cửa sổ acquisition bắt đầu sau khi transient settling giảm dưới noise floor.
**Liên kết tiếng Hàn:** `정착 과도응답`.

## Review in context

**Heterodyne readout** and **lock-in detection** isolate a weak response, while a **demodulation residual**, **differential path**, and **cross-talk matrix** diagnose the signal chain. A **transfer standard** and **reference artifact** support an **acceptance threshold**; an **out-of-control signal** can stop the run. **Gauge repeatability**, a **reproducibility study**, a **round-robin test**, and an **interlaboratory comparison** feed a **measurement system analysis**. A **reference oscillator** drives the **quadrature mixer**, whose **image rejection** and **carrier suppression** expose a **spurious tone** only after the **settling transient** is excluded.

**Bản dịch tiếng Việt:** **Heterodyne readout** và **lock-in detection** tách response yếu, còn **demodulation residual**, **differential path** và **cross-talk matrix** chẩn đoán signal chain. **Transfer standard** và **reference artifact** hỗ trợ **acceptance threshold**; **out-of-control signal** có thể dừng lần chạy. **Gauge repeatability**, **reproducibility study**, **round-robin test** và **interlaboratory comparison** cung cấp dữ liệu cho **measurement system analysis**. **Reference oscillator** điều khiển **quadrature mixer**, trong đó **image rejection** và **carrier suppression** làm lộ **spurious tone** sau khi loại **settling transient**.
