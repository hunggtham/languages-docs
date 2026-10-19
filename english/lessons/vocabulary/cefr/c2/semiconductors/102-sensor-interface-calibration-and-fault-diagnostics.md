# C2 Vocabulary — Sensor-interface calibration and fault diagnostics

This lesson connects bridge sensors to precision front ends, ratiometric calibration, self-test paths, and interpretable fault codes.

Flow: **sensor bridge balance → ratiometric readout → four-wire measurement → Kelvin connection → input bias current → common-mode range → instrumentation amplifier → offset trim → gain trim → self-test injection → open-wire detection → short-circuit detection → sensor excitation → reference resistor → cross-sensor alignment → temperature compensation table → piecewise linearization → lookup-table interpolation → supply-sense ratio → lead-resistance error**.

## 1. sensor bridge balance /ˈsensər brɪdʒ ˈbæləns/
**Part of speech:** noun
**Core meaning (English):** the condition in which a bridge sensor's opposing arms produce the intended baseline output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** condition các arm đối diện của bridge sensor tạo baseline output dự kiến.
**Grammar & collocations:** `sensor-bridge-balance check` — check; `null a bridge output` — đưa output bridge về null.
**Examples:** `Sensor bridge balance shifted after the strain element was bonded to a new substrate.` → Balance bridge-sensor đổi sau khi strain element bonded substrate mới.
**Liên kết tiếng Hàn:** `센서 브리지 평형`.

## 2. ratiometric readout /ˌreɪtiəˈmetrɪk ˈriːdaʊt/
**Part of speech:** noun
**Core meaning (English):** readout that expresses a sensor signal relative to the same supply or reference that excites it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** readout biểu diễn signal sensor tương đối với supply hoặc reference dùng excite nó.
**Grammar & collocations:** `ratiometric-readout gain` — gain; `cancel supply variation` — triệt supply variation.
**Examples:** `Ratiometric readout rejected a slow change in the excitation voltage.` → Readout ratiometric loại variation chậm của excitation voltage.
**Liên kết tiếng Hàn:** `비율식 판독`.

## 3. four-wire measurement /fɔːr waɪər ˈmeʒərmənt/
**Part of speech:** noun
**Core meaning (English):** measurement using separate force and sense conductors to remove lead-drop error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measurement dùng conductor force và sense riêng để bỏ error do lead drop.
**Grammar & collocations:** `four-wire-measurement fixture` — fixture; `separate drive from sense` — tách drive khỏi sense.
**Examples:** `Four-wire measurement resolved the resistor value despite long harness leads.` → Measurement four-wire xác định resistor value dù harness lead dài.
**Liên kết tiếng Hàn:** `4선 측정`.

## 4. Kelvin connection /ˈkelvɪn kəˈnekʃən/
**Part of speech:** noun
**Core meaning (English):** a separate sensing connection placed at the load terminals to exclude contact and conductor resistance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** connection sense riêng tại load terminal để loại resistance contact và conductor.
**Grammar & collocations:** `Kelvin-connection layout` — layout; `sense directly at the terminal` — sense trực tiếp terminal.
**Examples:** `The Kelvin connection removed the fixture resistance from the low-ohm calibration.` → Connection Kelvin loại fixture resistance khỏi calibration low-ohm.
**Liên kết tiếng Hàn:** `켈빈 연결`.

## 5. input bias current /ˈɪnpʊt ˈbaɪəs ˈkɜːrənt/
**Part of speech:** noun
**Core meaning (English):** small current entering or leaving an amplifier input that can create a source-dependent voltage error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** current nhỏ vào hoặc ra amplifier input tạo voltage error phụ thuộc source.
**Grammar & collocations:** `input-bias-current compensation` — compensation; `match source impedances` — khớp source impedance.
**Examples:** `Input bias current created a visible offset across the high-value bridge resistor.` → Current bias-input tạo offset rõ trên bridge resistor giá trị cao.
**Liên kết tiếng Hàn:** `입력 바이어스 전류`.

## 6. common-mode range /ˈkɑːmən moʊd reɪndʒ/
**Part of speech:** noun
**Core meaning (English):** the input voltage interval over which a differential amplifier operates correctly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng input voltage mà differential amplifier hoạt động đúng.
**Grammar & collocations:** `common-mode-range limit` — limit; `keep inputs within headroom` — giữ input trong headroom.
**Examples:** `The sensor output left the common-mode range during a cold-start transient.` → Output sensor rời range common-mode trong transient cold-start.
**Liên kết tiếng Hàn:** `공통 모드 범위`.

## 7. instrumentation amplifier /ˌɪnstrəmenˈteɪʃən ˈæmpləfaɪər/
**Part of speech:** noun
**Core meaning (English):** a precision differential amplifier designed for high input impedance and controlled gain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** differential amplifier chính xác có input impedance cao và gain kiểm soát.
**Grammar & collocations:** `instrumentation-amplifier gain` — gain; `reject a bridge common mode` — loại common mode bridge.
**Examples:** `The instrumentation amplifier preserved the small bridge signal beside a large common voltage.` → Amplifier instrumentation giữ bridge signal nhỏ cạnh common voltage lớn.
**Liên kết tiếng Hàn:** `계측 증폭기`.

## 8. offset trim /ˈɔːfset trɪm/
**Part of speech:** noun
**Core meaning (English):** an adjustment that removes a systematic zero-input error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** adjustment loại zero-input error có hệ thống.
**Grammar & collocations:** `offset-trim code` — code; `null the amplifier output` — đưa amplifier output về null.
**Examples:** `Offset trim removed the residual error before the gain was calibrated.` → Trim offset loại residual error trước khi calibrate gain.
**Liên kết tiếng Hàn:** `오프셋 트림`.

## 9. gain trim /ɡeɪn trɪm/
**Part of speech:** noun
**Core meaning (English):** an adjustment that corrects the scale factor between input and output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** adjustment sửa scale factor giữa input và output.
**Grammar & collocations:** `gain-trim coefficient` — coefficient; `correct a slope error` — sửa slope error.
**Examples:** `Gain trim aligned the pressure channel with the traceable reference.` → Trim gain căn pressure channel với reference traceable.
**Liên kết tiếng Hàn:** `게인 트림`.

## 10. self-test injection /self test ɪnˈdʒekʃən/
**Part of speech:** noun
**Core meaning (English):** deliberate insertion of a known stimulus to verify a sensor path without an external source.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa stimulus đã biết để verify sensor path mà không cần source ngoài.
**Grammar & collocations:** `self-test-injection level` — level; `exercise an internal test path` — exercise test path nội.
**Examples:** `Self-test injection verified the amplifier and ADC while the machine was idle.` → Injection self-test verify amplifier và ADC khi machine idle.
**Liên kết tiếng Hàn:** `자체 시험 주입`.

## 11. open-wire detection /ˈoʊpən waɪər dɪˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** identifying a broken or disconnected sensor conductor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác định conductor sensor bị đứt hoặc disconnect.
**Grammar & collocations:** `open-wire-detection threshold` — threshold; `flag a floating input` — báo input floating.
**Examples:** `Open-wire detection separated a broken harness from a zero-pressure reading.` → Detection open-wire tách harness đứt khỏi reading zero-pressure.
**Liên kết tiếng Hàn:** `단선 검출`.

## 12. short-circuit detection /ˌʃɔːrt ˈsɜːrkɪt dɪˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** identifying an unintended low-resistance connection in a sensor or harness.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác định connection low-resistance ngoài ý muốn trong sensor hoặc harness.
**Grammar & collocations:** `short-circuit-detection current` — current; `protect an excitation source` — bảo vệ excitation source.
**Examples:** `Short-circuit detection shut down excitation before the cable overheated.` → Detection short-circuit tắt excitation trước khi cable quá nhiệt.
**Liên kết tiếng Hàn:** `단락 검출`.

## 13. sensor excitation /ˈsensər ˌeksəˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** voltage or current supplied to make a passive sensor produce a measurable response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** voltage hoặc current cấp để passive sensor tạo response đo được.
**Grammar & collocations:** `sensor-excitation source` — source; `limit excitation self-heating` — giới hạn self-heating excitation.
**Examples:** `Sensor excitation was pulsed to reduce heating in the resistive element.` → Excitation sensor được pulse để giảm heating ở resistive element.
**Liên kết tiếng Hàn:** `센서 여기`.

## 14. reference resistor /ˈrefrəns rɪˈzɪstər/
**Part of speech:** noun
**Core meaning (English):** a stable resistor used as a known comparison in a bridge, calibration, or ratio measurement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resistor ổn định dùng làm comparison đã biết trong bridge, calibration hoặc ratio measurement.
**Grammar & collocations:** `reference-resistor tolerance` — tolerance; `anchor a ratio measurement` — neo ratio measurement.
**Examples:** `The reference resistor anchored the bridge output during temperature compensation.` → Resistor reference neo bridge output trong temperature compensation.
**Liên kết tiếng Hàn:** `기준 저항`.

## 15. cross-sensor alignment /krɔːs ˈsensər əˈlaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** adjustment that makes readings from related sensors agree under a common condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** adjustment làm reading sensor liên quan khớp dưới condition chung.
**Grammar & collocations:** `cross-sensor-alignment residual` — residual; `align redundant channels` — align channel redundant.
**Examples:** `Cross-sensor alignment removed a fixed offset between the redundant pressure probes.` → Alignment cross-sensor loại offset cố định giữa pressure probe redundant.
**Liên kết tiếng Hàn:** `센서 간 정렬`.

## 16. temperature compensation table /ˈtemprətʃər ˌkɑːmpənˈseɪʃən ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** a stored set of corrections indexed by temperature.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập correction lưu trữ được index theo temperature.
**Grammar & collocations:** `temperature-compensation-table entry` — entry; `interpolate a thermal correction` — interpolate correction nhiệt.
**Examples:** `The temperature compensation table corrected bridge sensitivity across the operating range.` → Table compensation temperature sửa sensitivity bridge qua operating range.
**Liên kết tiếng Hàn:** `온도 보상 표`.

## 17. piecewise linearization /ˈpiːswaɪz ˌlɪniərəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** approximating a nonlinear response with several locally linear segments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xấp xỉ response phi tuyến bằng nhiều segment tuyến tính cục bộ.
**Grammar & collocations:** `piecewise-linearization breakpoint` — breakpoint; `fit local slopes` — fit slope cục bộ.
**Examples:** `Piecewise linearization reduced residual error without a large polynomial.` → Linearization piecewise giảm residual error mà không cần polynomial lớn.
**Liên kết tiếng Hàn:** `구간별 선형화`.

## 18. lookup-table interpolation /ˈlʊkʌp ˈteɪbəl ˌɪntərpəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** estimating a correction between stored table points rather than using the nearest point alone.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính correction giữa table point lưu thay vì chỉ dùng point gần nhất.
**Grammar & collocations:** `lookup-table-interpolation error` — error; `blend adjacent correction entries` — blend entry kề.
**Examples:** `Lookup-table interpolation prevented a visible step at the temperature breakpoint.` → Interpolation table-lookup ngăn step rõ ở breakpoint temperature.
**Liên kết tiếng Hàn:** `룩업 테이블 보간`.

## 19. supply-sense ratio /səˈplaɪ sens ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** a measured ratio comparing delivered supply at a sensor with the source reference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ratio đo giữa supply tới sensor và source reference.
**Grammar & collocations:** `supply-sense-ratio monitor` — monitor; `detect harness drop` — phát hiện drop harness.
**Examples:** `The supply-sense ratio exposed a corroded connector before the sensor value failed.` → Ratio sense-supply lộ connector ăn mòn trước khi sensor value fail.
**Liên kết tiếng Hàn:** `공급 감지 비율`.

## 20. lead-resistance error /liːd rɪˈzɪstəns ˈerər/
**Part of speech:** noun
**Core meaning (English):** measurement error caused by resistance in conductors between a sensor and its electronics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error measurement do resistance conductor giữa sensor và electronics.
**Grammar & collocations:** `lead-resistance-error budget` — budget; `compensate cable resistance` — bù cable resistance.
**Examples:** `Lead-resistance error exceeded the pressure tolerance when the harness was extended.` → Error resistance-lead vượt pressure tolerance khi harness kéo dài.
**Liên kết tiếng Hàn:** `리드 저항 오류`.

## Review in context

**Sensor bridge balance**, **ratiometric readout**, **four-wire measurement**, and a **Kelvin connection** reduce **input bias current** effects inside the **common-mode range** of an **instrumentation amplifier**. **Offset trim**, **gain trim**, and **self-test injection** verify the path, while **open-wire detection**, **short-circuit detection**, and **sensor excitation** protect it. A **reference resistor**, **cross-sensor alignment**, **temperature compensation table**, **piecewise linearization**, **lookup-table interpolation**, **supply-sense ratio**, and **lead-resistance error** complete calibration.

**Bản dịch tiếng Việt:** **Sensor bridge balance**, **ratiometric readout**, **four-wire measurement** và **Kelvin connection** giảm effect của **input bias current** trong **common-mode range** của **instrumentation amplifier**. **Offset trim**, **gain trim** và **self-test injection** verify path, còn **open-wire detection**, **short-circuit detection** và **sensor excitation** bảo vệ path. **Reference resistor**, **cross-sensor alignment**, **temperature compensation table**, **piecewise linearization**, **lookup-table interpolation**, **supply-sense ratio** và **lead-resistance error** hoàn tất calibration.
