# C2 Vocabulary — Power integrity and high-speed signal analysis

This lesson follows a high-speed design from power-delivery targets through channel measurement, noise control, and operating-margin analysis.

Flow: **power integrity → signal integrity → power-delivery network impedance → target impedance → decoupling capacitor → anti-resonance → package inductance → simultaneous switching noise → ground bounce → voltage droop → IR drop → crosstalk → via stub → insertion loss → return loss → eye diagram → jitter budget → equalization → channel operating margin → time-domain reflectometry**.

## 1. power integrity /ˈpaʊər ɪnˈtɛɡrəti/
**Part of speech:** noun
**Core meaning (English):** the ability of a power-delivery system to provide stable voltage and acceptable noise across changing load conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nguồn cấp vẫn sạch và đủ áp khi tải đổi nhanh.
**Grammar & collocations:** `power-integrity analysis` — analysis; `verify a power rail` — kiểm tra.
**Examples:** `Power integrity degraded when the processor entered a bursty high-current mode.` → Power integrity giảm khi processor chuyển sang mode dòng cao bursty.
**Liên kết tiếng Hàn:** `전원 무결성`.

## 2. signal integrity /ˈsɪɡnəl ɪnˈtɛɡrəti/
**Part of speech:** noun
**Core meaning (English):** the preservation of a digital or analog signal's timing, amplitude, and waveform as it travels through an interconnect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu giữ đúng dạng, biên độ và timing trên đường truyền.
**Grammar & collocations:** `signal-integrity simulation` — simulation; `preserve waveform quality` — giữ.
**Examples:** `Signal integrity failed when the long trace converted a clean edge into a ringing waveform.` → Signal integrity fail khi trace dài làm edge rung.
**Liên kết tiếng Hàn:** `신호 무결성`.

## 3. power-delivery network impedance /ˈpaʊər dɪˈlɪvəri ˈnɛtˌwɝk ɪmˈpiːdəns/
**Part of speech:** noun
**Core meaning (English):** the frequency-dependent opposition presented by the combined package, board, planes, capacitors, and source of a power network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trở kháng toàn bộ mạng cấp nguồn thay đổi theo tần số.
**Grammar & collocations:** `power-delivery-network-impedance profile` — profile; `plot impedance versus frequency` — vẽ.
**Examples:** `The power-delivery network impedance peaked near the regulator crossover frequency.` → Trở kháng PDN peak gần tần số crossover.
**Liên kết tiếng Hàn:** `전력 공급망 임피던스`.

## 4. target impedance /ˈtɑrɡɪt ɪmˈpiːdəns/
**Part of speech:** noun
**Core meaning (English):** the maximum allowable power-network impedance derived from permitted voltage ripple and expected load current change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngưỡng Z tối đa để ripple không vượt giới hạn.
**Grammar & collocations:** `target-impedance calculation` — calculation; `meet the impedance target` — đạt.
**Examples:** `The design missed its target impedance above several hundred megahertz.` → Thiết kế vượt target impedance ở tần số cao.
**Liên kết tiếng Hàn:** `목표 임피던스`.

## 5. decoupling capacitor /diːˈkʌplɪŋ kəˈpæsɪtər/
**Part of speech:** noun
**Core meaning (English):** a capacitor placed near a load to supply transient current and reduce local power noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tụ gần tải cung cấp dòng tức thời và lọc nhiễu nguồn.
**Grammar & collocations:** `decoupling-capacitor placement` — placement; `bypass a transient load` — bypass.
**Examples:** `A smaller decoupling capacitor handled the fast edge that the bulk capacitor could not reach.` → Tụ nhỏ xử lý edge nhanh mà tụ bulk không theo kịp.
**Liên kết tiếng Hàn:** `디커플링 커패시터`.

## 6. anti-resonance /ˌæntiˈrɛzənəns/
**Part of speech:** noun
**Core meaning (English):** a high-impedance peak created when reactive elements in a power network interact unfavorably at a particular frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các tụ và inductance phối hợp xấu tạo peak trở kháng.
**Grammar & collocations:** `anti-resonance peak` — peak; `damp an anti-resonance` — giảm.
**Examples:** `The capacitor array created an anti-resonance that amplified supply ripple instead of suppressing it.` → Mảng tụ tạo anti-resonance làm ripple tăng.
**Liên kết tiếng Hàn:** `반공진`.

## 7. package inductance /ˈpækɪdʒ ɪnˈdʌktəns/
**Part of speech:** noun
**Core meaning (English):** inductive behavior contributed by package leads, bumps, balls, or planes that resists rapid current change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** package có L ký sinh cản dòng đổi nhanh.
**Grammar & collocations:** `package-inductance model` — model; `reduce parasitic inductance` — giảm.
**Examples:** `Package inductance caused a larger supply transient than the board simulation predicted.` → Inductance package làm transient lớn hơn mô phỏng board.
**Liên kết tiếng Hàn:** `패키지 인덕턴스`.

## 8. simultaneous switching noise /ˌsaɪməlˈteɪniəs ˈswɪtʃɪŋ nɔɪz/
**Part of speech:** noun
**Core meaning (English):** voltage disturbance produced when many outputs change state at nearly the same time and share inductive current paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều output switch cùng lúc làm nguồn/ground rung.
**Grammar & collocations:** `simultaneous-switching-noise budget` — budget; `limit output concurrency` — giới hạn.
**Examples:** `Simultaneous switching noise shifted the receiver threshold during a wide bus transfer.` → SSN làm lệch ngưỡng receiver khi bus rộng chuyển.
**Liên kết tiếng Hàn:** `동시 스위칭 잡음`.

## 9. ground bounce /ɡraʊnd baʊns/
**Part of speech:** noun
**Core meaning (English):** an apparent movement of a local ground voltage caused by shared inductance during rapid current changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ground cục bộ “nhảy” do dòng đổi nhanh qua inductance chung.
**Grammar & collocations:** `ground-bounce event` — event; `reduce shared inductance` — giảm.
**Examples:** `Ground bounce made a quiet input appear high for a few nanoseconds.` → Ground bounce làm input tĩnh trông như high vài nanosecond.
**Liên kết tiếng Hàn:** `그라운드 바운스`.

## 10. voltage droop /ˈvoʊltɪdʒ druːp/
**Part of speech:** noun
**Core meaning (English):** a temporary reduction in supply voltage caused by load current, resistance, inductance, or regulator response limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** áp nguồn tụt khi tải tăng hoặc regulator phản ứng chậm.
**Grammar & collocations:** `voltage-droop limit` — limit; `recover from a droop` — hồi phục.
**Examples:** `Voltage droop triggered a reset when the accelerator began a dense matrix operation.` → Voltage droop gây reset khi accelerator chạy matrix dày.
**Liên kết tiếng Hàn:** `전압 강하`.

## 11. IR drop /ˌaɪ ɑr drɑp/
**Part of speech:** noun
**Core meaning (English):** voltage loss caused by current flowing through the resistance of a power-distribution path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** V mất theo I×R trên metal, via hoặc plane.
**Grammar & collocations:** `IR-drop map` — map; `analyze voltage loss` — phân tích.
**Examples:** `The IR drop was highest beneath the dense compute cluster far from the power bumps.` → IR drop cao nhất dưới cluster xa power bump.
**Liên kết tiếng Hàn:** `IR 강하`.

## 12. crosstalk /ˈkrɔsˌtɔk/
**Part of speech:** noun
**Core meaning (English):** unwanted coupling in which activity on one interconnect disturbs a neighboring signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường tín hiệu này “nói sang” đường cạnh bên.
**Grammar & collocations:** `crosstalk-induced glitch` — glitch; `shield an aggressor` — che chắn.
**Examples:** `Crosstalk from the clock lane introduced a false transition on the control line.` → Crosstalk từ clock tạo transition giả.
**Liên kết tiếng Hàn:** `누화`.

## 13. via stub /ˈviːə stʌb/
**Part of speech:** noun
**Core meaning (English):** an unused section of a through-via that behaves as a resonant transmission-line branch at high frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đoạn via thừa tạo nhánh cộng hưởng cho tín hiệu nhanh.
**Grammar & collocations:** `via-stub resonance` — resonance; `back-drill a via` — khoan bỏ.
**Examples:** `A via stub created a notch in the channel response near the fundamental data harmonic.` → Via stub tạo notch gần harmonic chính.
**Liên kết tiếng Hàn:** `비아 스텁`.

## 14. insertion loss /ɪnˈsɝʃən lɔs/
**Part of speech:** noun
**Core meaning (English):** the reduction in signal power caused by inserting a component or channel between source and load.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu mất bao nhiêu năng lượng khi đi qua channel.
**Grammar & collocations:** `insertion-loss budget` — budget; `characterize channel loss` — đặc tính hóa.
**Examples:** `Insertion loss exceeded the budget after two connectors and a long flex cable were added.` → Loss vượt budget sau thêm connector và cáp flex.
**Liên kết tiếng Hàn:** `삽입 손실`.

## 15. return loss /rɪˈtɝn lɔs/
**Part of speech:** noun
**Core meaning (English):** a measure of signal power reflected back toward the source because a channel is impedance-mismatched.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** năng lượng phản xạ quay về do mismatch trở kháng.
**Grammar & collocations:** `return-loss minimum` — minimum; `match a transmission line` — match.
**Examples:** `Poor return loss at the connector produced reflections that closed the eye.` → Return loss kém làm reflection khép eye.
**Liên kết tiếng Hàn:** `반사 손실`.

## 16. eye diagram /aɪ ˈdaɪəˌɡræm/
**Part of speech:** noun
**Core meaning (English):** an overlaid display of many symbol intervals used to assess timing margin, voltage margin, noise, and distortion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chồng nhiều waveform để nhìn “mắt” mở rộng hay khép.
**Grammar & collocations:** `eye-diagram opening` — opening; `measure vertical margin` — đo.
**Examples:** `The eye diagram narrowed after the receiver equalizer was disabled.` → Eye hẹp lại khi tắt equalizer.
**Liên kết tiếng Hàn:** `아이 다이어그램`.

## 17. jitter budget /ˈdʒɪtər ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the allocated total timing uncertainty that all clock and data sources must share without violating sampling margins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách sai lệch timing chia cho mọi nguồn jitter.
**Grammar & collocations:** `jitter-budget allocation` — allocation; `consume timing margin` — tiêu.
**Examples:** `The serializer consumed nearly the entire jitter budget before the channel was connected.` → Serializer tiêu gần hết budget trước channel.
**Liên kết tiếng Hàn:** `지터 예산`.

## 18. equalization /ˌiːkwəlɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** signal processing that compensates for frequency-dependent channel loss and distortion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bù loss theo tần số để waveform tới receiver rõ hơn.
**Grammar & collocations:** `equalization setting` — setting; `compensate high-frequency loss` — bù.
**Examples:** `Adaptive equalization restored a usable eye after the backplane was lengthened.` → Equalization thích nghi mở lại eye sau backplane dài hơn.
**Liên kết tiếng Hàn:** `등화`.

## 19. channel operating margin /ˈtʃænəl ˈɑpəˌreɪtɪŋ ˈmɑrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** the remaining performance margin between a measured channel and the limits required for reliable operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng an toàn còn lại giữa channel thật và giới hạn pass.
**Grammar & collocations:** `channel-operating-margin analysis` — analysis; `quantify remaining margin` — định lượng.
**Examples:** `Channel operating margin fell below the product requirement at the cold corner.` → Margin channel thấp hơn yêu cầu ở corner lạnh.
**Liên kết tiếng Hàn:** `채널 동작 마진`.

## 20. time-domain reflectometry /ˈtaɪm doʊˈmeɪn rɪˈflɛktəˌmɛtri/
**Part of speech:** noun
**Core meaning (English):** a measurement technique that launches a fast edge and analyzes reflections to locate impedance changes along an interconnect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bắn edge nhanh rồi đọc reflection để tìm chỗ đổi impedance theo chiều dài.
**Grammar & collocations:** `time-domain-reflectometry trace` — trace; `locate an impedance discontinuity` — định vị.
**Examples:** `Time-domain reflectometry located a damaged connector before the channel failed at speed.` → TDR tìm connector hỏng trước khi channel fail tốc độ cao.
**Liên kết tiếng Hàn:** `시간 영역 반사 측정`.

## Review in context

**Power integrity** and **signal integrity** must be analyzed together. The **power-delivery network impedance** should stay below its **target impedance**, using a well-placed **decoupling capacitor** while avoiding **anti-resonance** from **package inductance**. Fast outputs create **simultaneous switching noise**, **ground bounce**, **voltage droop**, and resistive **IR drop**. On signal paths, **crosstalk**, a **via stub**, **insertion loss**, and **return loss** reduce the opening of an **eye diagram** and consume the **jitter budget**. **Equalization** can recover some margin, but final **channel operating margin** is verified with measurements such as **time-domain reflectometry**.

**Bản dịch tiếng Việt:** **Power integrity** và **signal integrity** phải được phân tích cùng nhau. **Power-delivery network impedance** cần thấp hơn **target impedance**, dùng **decoupling capacitor** đặt đúng chỗ và tránh **anti-resonance** do **package inductance**. Output chuyển nhanh tạo **simultaneous switching noise**, **ground bounce**, **voltage droop** và **IR drop**. Trên đường tín hiệu, **crosstalk**, **via stub**, **insertion loss** và **return loss** làm khép **eye diagram** và tiêu **jitter budget**. **Equalization** có thể phục hồi một phần margin, nhưng **channel operating margin** cuối cùng cần được kiểm chứng bằng phép đo như **time-domain reflectometry**.
