# C2 Vocabulary — Analog, mixed-signal, and data conversion

This lesson follows analog and mixed-signal IC design from amplification and comparison through sampling, data conversion, clock generation, and precision limitations.

Flow: **analog front end → operational amplifier → input offset voltage → common-mode rejection ratio → power-supply rejection ratio → slew rate → gain-bandwidth product → comparator → sample-and-hold → analog-to-digital converter → digital-to-analog converter → quantization error → signal-to-noise-and-distortion ratio → effective number of bits → integral nonlinearity → differential nonlinearity → sigma-delta modulator → phase-locked loop → phase noise → aperture jitter**.

## 1. analog front end /ˈænəˌlɔɡ frʌnt ɛnd/
**Part of speech:** noun
**Core meaning (English):** the analog circuitry that conditions a real-world signal before conversion or further digital processing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khối analog đầu vào; hình dung sensor signal yếu đi qua amplifier, filter và conditioning trước khi tới ADC.
**Grammar & collocations:** `low-noise analog front end` — front end nhiễu thấp; `sensor front end` — front end cho sensor.
**Examples:** `The analog front end amplified the biosensor signal before digitization.` → Analog front end khuếch đại tín hiệu biosensor trước khi số hóa.
**Liên kết tiếng Hàn:** `아날로그 프런트엔드`, `AFE`.

## 2. operational amplifier /ˌɑpəˈreɪʃənəl ˈæmpləˌfaɪər/
**Part of speech:** noun
**Core meaning (English):** a high-gain differential amplifier used as a building block for analog signal conditioning, filtering, feedback, and control.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** op-amp; amplifier có hai input, thường dùng với feedback để tạo gain, filter hoặc buffer chính xác.
**Grammar & collocations:** `op-amp stage` — tầng op-amp; `closed-loop gain` — gain vòng kín.
**Examples:** `The operational amplifier buffered the sensor without significantly loading its output.` → Op-amp buffer sensor mà gần như không kéo tải output của sensor.
**Liên kết tiếng Hàn:** `연산 증폭기`, `오피앰프`.

## 3. input offset voltage /ˈɪnˌpʊt ˈɔfˌsɛt ˈvoʊltɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a small differential input voltage that must be applied to an amplifier or comparator to make its output ideally balanced.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sai lệch input nhỏ do transistor không hoàn toàn giống nhau; dù hai input “bằng nhau”, circuit vẫn có thể hành xử như đang thấy một chênh lệch nhỏ.
**Grammar & collocations:** `offset-voltage drift` — drift của offset; `input-referred offset` — offset quy về input.
**Examples:** `Input offset voltage became significant because the sensor itself produced only a few microvolts.` → Input offset voltage trở nên đáng kể vì sensor chỉ tạo vài microvolt.
**Liên kết tiếng Hàn:** `입력 오프셋 전압`.

## 4. common-mode rejection ratio /ˈkɑmən moʊd rɪˈdʒɛkʃən ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** a measure of how well a differential circuit rejects signals that appear equally on both inputs while amplifying their difference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng bỏ qua nhiễu giống nhau ở cả hai input; CMRR cao giúp lấy “difference thật” giữa hai dây.
**Grammar & collocations:** `high CMRR` — CMRR cao; `common-mode interference` — nhiễu common-mode.
**Examples:** `A high common-mode rejection ratio helped suppress mains interference picked up by both electrodes.` → CMRR cao giúp loại nhiễu điện lưới xuất hiện trên cả hai electrode.
**Liên kết tiếng Hàn:** `동상 제거비`, `CMRR`.

## 5. power-supply rejection ratio /ˈpaʊər səˌplaɪ rɪˈdʒɛkʃən ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** a measure of how strongly variations or noise on a circuit's supply rails are prevented from appearing at its output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng “phớt lờ” noise từ nguồn điện; PSRR cao nghĩa là supply rung nhưng output ít bị ảnh hưởng.
**Grammar & collocations:** `PSRR degradation` — PSRR giảm; `supply ripple` — ripple nguồn.
**Examples:** `Poor power-supply rejection allowed switching noise from the regulator to leak into the audio path.` → PSRR kém làm switching noise từ regulator lọt vào audio path.
**Liên kết tiếng Hàn:** `전원 제거비`, `PSRR`.

## 6. slew rate /sluː reɪt/
**Part of speech:** noun
**Core meaning (English):** the maximum rate at which an amplifier's output voltage can change over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ output có thể chạy lên/xuống; input đổi quá nhanh mà slew rate thấp thì waveform bị méo.
**Grammar & collocations:** `slew-rate limitation` — giới hạn slew rate; `volts per microsecond` — volt trên microsecond.
**Examples:** `The amplifier's slew rate was too low to reproduce the large high-frequency waveform cleanly.` → Slew rate của amplifier quá thấp để tái tạo waveform lớn tần số cao sạch.
**Liên kết tiếng Hàn:** `슬루율`.

## 7. gain-bandwidth product /ɡeɪn ˈbændˌwɪdθ ˈprɑdəkt/
**Part of speech:** noun
**Core meaning (English):** an approximate constant relating closed-loop gain and usable bandwidth for many compensated amplifiers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gain cao thì bandwidth thường giảm; tích gain × bandwidth cho một op-amp thường gần cố định trong vùng phù hợp.
**Grammar & collocations:** `unity-gain bandwidth` — bandwidth tại gain 1; `GBW requirement` — yêu cầu GBW.
**Examples:** `The selected op-amp lacked enough gain-bandwidth product for the required closed-loop gain at 10 MHz.` → Op-amp được chọn không đủ GBW cho gain vòng kín cần thiết tại 10 MHz.
**Liên kết tiếng Hàn:** `이득 대역폭 곱`, `GBW`.

## 8. comparator /kəmˈpærətər/
**Part of speech:** noun
**Core meaning (English):** a circuit that compares two voltages and drives its output toward one of two states depending on which input is larger.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch trả lời “A lớn hơn B không?”; biến chênh lệch analog thành quyết định logic.
**Grammar & collocations:** `high-speed comparator` — comparator tốc độ cao; `comparison threshold` — ngưỡng so sánh.
**Examples:** `The comparator toggled when the ramp voltage crossed the reference level.` → Comparator đổi trạng thái khi ramp voltage vượt reference.
**Liên kết tiếng Hàn:** `비교기`.

## 9. sample-and-hold /ˈsæmpəl ænd hoʊld/
**Part of speech:** noun
**Core meaning (English):** a circuit that captures an analog voltage at a specific moment and holds it approximately constant long enough for subsequent processing or conversion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chụp nhanh một giá trị analog rồi giữ yên; ADC cần “đối tượng đứng im” trong lúc convert.
**Grammar & collocations:** `sampling capacitor` — capacitor sample; `hold interval` — khoảng hold.
**Examples:** `The sample-and-hold froze the input while the converter resolved the digital code.` → Sample-and-hold giữ input cố định khi converter xác định code digital.
**Liên kết tiếng Hàn:** `샘플 앤 홀드`.

## 10. analog-to-digital converter /ˈænəˌlɔɡ tə ˈdɪdʒɪtəl kənˈvɝtər/
**Part of speech:** noun
**Core meaning (English):** a circuit that maps a continuous analog input signal into discrete digital codes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ADC biến voltage/current liên tục thành số để digital logic xử lý.
**Grammar & collocations:** `ADC resolution` — độ phân giải ADC; `conversion rate` — tốc độ conversion.
**Examples:** `The analog-to-digital converter sampled the microphone signal at 48 kilohertz.` → ADC sample tín hiệu microphone ở 48 kHz.
**Liên kết tiếng Hàn:** `아날로그-디지털 변환기`, `ADC`.

## 11. digital-to-analog converter /ˈdɪdʒɪtəl tə ˈænəˌlɔɡ kənˈvɝtər/
**Part of speech:** noun
**Core meaning (English):** a circuit that converts a digital numerical code into a corresponding analog voltage or current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** DAC đi chiều ngược ADC; số digital được biến thành mức analog thực tế.
**Grammar & collocations:** `DAC output` — output DAC; `current-steering DAC` — DAC steering current.
**Examples:** `The digital-to-analog converter generated the control voltage for the actuator.` → DAC tạo control voltage cho actuator.
**Liên kết tiếng Hàn:** `디지털-아날로그 변환기`, `DAC`.

## 12. quantization error /ˌkwɑntəˈzeɪʃən ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** the difference between a continuous input value and the nearest discrete level represented by a digital converter.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi do phải làm tròn analog về một “bậc thang” digital; resolution càng thấp thì bước càng lớn.
**Grammar & collocations:** `quantization step` — bước lượng tử; `quantization noise` — noise tương đương do lượng tử hóa.
**Examples:** `Increasing ADC resolution reduced quantization error for small signal changes.` → Tăng resolution ADC giảm quantization error với thay đổi tín hiệu nhỏ.
**Liên kết tiếng Hàn:** `양자화 오차`.

## 13. signal-to-noise-and-distortion ratio /ˈsɪɡnəl tə nɔɪz ænd dɪˈstɔrʃən ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the ratio of desired signal power to the combined power of noise and harmonic distortion in a measured system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so tín hiệu hữu ích với toàn bộ noise + distortion; SINAD càng cao thì output càng sạch.
**Grammar & collocations:** `measured SINAD` — SINAD đo được; `converter SINAD` — SINAD của converter.
**Examples:** `Clock jitter and nonlinear distortion both reduced the converter's signal-to-noise-and-distortion ratio.` → Clock jitter và nonlinear distortion đều làm SINAD của converter giảm.
**Liên kết tiếng Hàn:** `신호 대 잡음 및 왜곡비`, `SINAD`.

## 14. effective number of bits /ɪˈfɛktɪv ˈnʌmbər əv bɪts/
**Part of speech:** noun
**Core meaning (English):** an ADC performance metric expressing real dynamic accuracy as the number of ideal converter bits that would produce equivalent noise and distortion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số bit “thực sự có ích”; ADC ghi 16-bit nhưng noise/distortion có thể khiến performance chỉ tương đương 13 bit lý tưởng.
**Grammar & collocations:** `ENOB measurement` — đo ENOB; `effective resolution` — resolution hiệu dụng.
**Examples:** `Although the converter had a nominal 14-bit output, its effective number of bits fell at high input frequency.` → Dù output danh nghĩa 14 bit, ENOB giảm ở input frequency cao.
**Liên kết tiếng Hàn:** `유효 비트 수`, `ENOB`.

## 15. integral nonlinearity /ˈɪntəɡrəl ˌnɑnˌlɪniˈærəti/
**Part of speech:** noun
**Core meaning (English):** the deviation of a converter's actual transfer characteristic from an ideal straight-line response after basic offset and gain effects are removed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ cong tổng thể của transfer curve so với đường thẳng lý tưởng.
**Grammar & collocations:** `INL error` — lỗi INL; `transfer nonlinearity` — phi tuyến transfer.
**Examples:** `Integral nonlinearity limited measurement accuracy across the full input range.` → INL giới hạn accuracy trên toàn input range.
**Liên kết tiếng Hàn:** `적분 비선형성`, `INL`.

## 16. differential nonlinearity /ˌdɪfəˈrɛnʃəl ˌnɑnˌlɪniˈærəti/
**Part of speech:** noun
**Core meaning (English):** the deviation of each converter code step from the ideal one-least-significant-bit step size.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra từng “bậc thang” có rộng đúng 1 LSB không; DNL quá lớn có thể gây missing code.
**Grammar & collocations:** `DNL error` — lỗi DNL; `missing code` — code bị bỏ mất.
**Examples:** `Excessive differential nonlinearity caused several output codes to disappear entirely.` → DNL quá lớn làm một số output code biến mất hoàn toàn.
**Liên kết tiếng Hàn:** `미분 비선형성`, `DNL`.

## 17. sigma-delta modulator /ˈsɪɡmə ˈdɛltə ˈmɑdʒəˌleɪtər/
**Part of speech:** noun
**Core meaning (English):** an oversampling feedback structure that shapes quantization noise so high-resolution conversion can be achieved over a narrower signal band.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** modulator oversample rất nhanh và “đẩy” quantization noise ra ngoài band quan tâm để filter bỏ sau đó.
**Grammar & collocations:** `noise shaping` — shaping noise; `oversampling ratio` — tỷ lệ oversampling.
**Examples:** `The sigma-delta modulator traded bandwidth for excellent low-frequency resolution.` → Sigma-delta modulator đổi bandwidth lấy resolution rất cao ở low frequency.
**Liên kết tiếng Hàn:** `시그마-델타 변조기`.

## 18. phase-locked loop /feɪz lɑkt luːp/
**Part of speech:** noun
**Core meaning (English):** a feedback system that adjusts an oscillator so its phase and frequency track a reference signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loop khóa oscillator theo reference; dùng tạo clock, multiply frequency hoặc recover clock.
**Grammar & collocations:** `PLL lock` — trạng thái lock; `loop bandwidth` — bandwidth của loop.
**Examples:** `The phase-locked loop multiplied the reference clock to generate the processor frequency.` → PLL nhân reference clock để tạo processor frequency.
**Liên kết tiếng Hàn:** `위상 고정 루프`, `PLL`.

## 19. phase noise /feɪz nɔɪz/
**Part of speech:** noun
**Core meaning (English):** short-term random fluctuations in an oscillator's phase that spread energy around the ideal carrier frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** clock/oscillator không đứng hoàn toàn đúng vị trí theo thời gian; phase rung nhẹ tạo “skirts” quanh carrier trên spectrum.
**Grammar & collocations:** `close-in phase noise` — phase noise gần carrier; `phase-noise floor` — nền phase noise.
**Examples:** `Low phase noise was critical because the clock directly affected high-speed converter performance.` → Phase noise thấp rất quan trọng vì clock ảnh hưởng trực tiếp performance converter tốc độ cao.
**Liên kết tiếng Hàn:** `위상 잡음`.

## 20. aperture jitter /ˈæpərtʃər ˈdʒɪtər/
**Part of speech:** noun
**Core meaning (English):** uncertainty in the exact instant at which a sampling circuit captures an analog signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời điểm sample bị lệch ngẫu nhiên một chút; input càng nhanh thì timing error nhỏ càng biến thành voltage error lớn.
**Grammar & collocations:** `sampling jitter` — jitter sampling; `aperture uncertainty` — bất định aperture.
**Examples:** `Aperture jitter limited the achievable SNR when the ADC sampled a high-frequency tone.` → Aperture jitter giới hạn SNR có thể đạt khi ADC sample tone tần số cao.
**Liên kết tiếng Hàn:** `애퍼처 지터`, `샘플링 지터`.

## Review in context

A precision **analog front end** often begins with an **operational amplifier**, whose **input offset voltage**, **common-mode rejection ratio**, **power-supply rejection ratio**, **slew rate**, and **gain-bandwidth product** constrain real performance. A **comparator** can make threshold decisions, while a **sample-and-hold** freezes an input for an **analog-to-digital converter**. A **digital-to-analog converter** performs the reverse mapping. Converter accuracy is limited by **quantization error**, while dynamic quality is summarized by **signal-to-noise-and-distortion ratio** and **effective number of bits**. Static linearity is characterized by **integral nonlinearity** and **differential nonlinearity**. A **sigma-delta modulator** can achieve high resolution through oversampling and noise shaping. Clock generation may use a **phase-locked loop**, but **phase noise** and **aperture jitter** can still degrade high-frequency sampling.

**Bản dịch tiếng Việt:** Một **analog front end** chính xác thường bắt đầu bằng **operational amplifier**, nơi **input offset voltage**, **common-mode rejection ratio**, **power-supply rejection ratio**, **slew rate** và **gain-bandwidth product** giới hạn performance thực tế. **Comparator** đưa ra quyết định threshold, còn **sample-and-hold** giữ input cho **analog-to-digital converter**. **Digital-to-analog converter** thực hiện chiều ngược lại. Accuracy của converter bị giới hạn bởi **quantization error**, còn chất lượng dynamic được tóm tắt bởi **signal-to-noise-and-distortion ratio** và **effective number of bits**. Static linearity được mô tả bằng **integral nonlinearity** và **differential nonlinearity**. **Sigma-delta modulator** đạt resolution cao bằng oversampling và noise shaping. Clock có thể được tạo bằng **phase-locked loop**, nhưng **phase noise** và **aperture jitter** vẫn có thể làm sampling tần số cao suy giảm.