# C2 Vocabulary — RF receiver linearity and noise control

This lesson links weak-signal reception to compression, reciprocal mixing, blocking, noise temperature, and quadrature calibration.

Flow: **input compression point → phase-noise skirt → reciprocal mixing → image-reject mixer → local-oscillator pulling → frequency-pulling coefficient → spurious-response test → blocking tolerance → desensitization threshold → receiver noise temperature → noise-correlation matrix → gain-control loop → automatic gain control → envelope detector → power detector linearity → quadrature error → I/Q gain mismatch → I/Q phase mismatch → interstage isolation → receiver headroom**.

## 1. input compression point /ˈɪnpʊt kəmˈpreʃən pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** input power at which a receiver's gain falls a specified amount below its small-signal value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** input power nơi gain receiver giảm một mức xác định dưới giá trị small-signal.
**Grammar & collocations:** `input-compression-point sweep` — sweep; `find the one-decibel reduction` — tìm mức giảm một decibel.
**Examples:** `The input compression point moved lower after the front-end limiter aged.` → Point compression-input hạ sau khi limiter front-end aging.
**Liên kết tiếng Hàn:** `입력 압축점`.

## 2. phase-noise skirt /feɪz nɔɪz skɜːrt/
**Part of speech:** noun
**Core meaning (English):** the frequency-offset region around an oscillator carrier where phase-noise energy spreads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng frequency offset quanh carrier oscillator nơi phase-noise lan.
**Grammar & collocations:** `phase-noise-skirt profile` — profile; `integrate close-in noise` — tích hợp noise gần carrier.
**Examples:** `The phase-noise skirt overlapped the weak channel beside the local carrier.` → Skirt noise-pha chồng lên channel yếu cạnh local carrier.
**Liên kết tiếng Hàn:** `위상 잡음 스커트`.

## 3. reciprocal mixing /rɪˈsɪprəkəl ˈmɪksɪŋ/
**Part of speech:** noun
**Core meaning (English):** conversion of off-channel noise into the desired channel by a noisy local oscillator.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** noise ngoài channel bị local oscillator noisy chuyển vào desired channel.
**Grammar & collocations:** `reciprocal-mixing floor` — floor; `translate oscillator noise` — chuyển noise oscillator.
**Examples:** `Reciprocal mixing hid the distant interferer beneath the desired signal.` → Mixing reciprocal che interferer xa dưới signal mong muốn.
**Liên kết tiếng Hàn:** `상호 혼합`.

## 4. image-reject mixer /ˈɪmɪdʒ rɪˈdʒekt ˈmɪksər/
**Part of speech:** noun
**Core meaning (English):** a mixer designed to suppress the unwanted image frequency during conversion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mixer thiết kế để triệt image frequency không mong muốn khi conversion.
**Grammar & collocations:** `image-reject-mixer imbalance` — imbalance; `cancel a mirror response` — triệt response gương.
**Examples:** `The image-reject mixer preserved the wanted sideband during downconversion.` → Mixer reject-image giữ sideband mong muốn khi downconversion.
**Liên kết tiếng Hàn:** `이미지 제거 혼합기`.

## 5. local-oscillator pulling /ˈloʊkəl ˈɑːsəleɪtər ˈpʊlɪŋ/
**Part of speech:** noun
**Core meaning (English):** unwanted oscillator-frequency movement caused by changing load or nearby signal power.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** oscillator frequency dịch ngoài ý muốn do load hoặc nearby signal power đổi.
**Grammar & collocations:** `local-oscillator-pulling coefficient` — coefficient; `isolate a mixer port` — cô lập mixer port.
**Examples:** `Local-oscillator pulling shifted the receive channel during a transmitter burst.` → Pulling oscillator-local dịch receive channel trong transmitter burst.
**Liên kết tiếng Hàn:** `국부 발진기 끌림`.

## 6. frequency-pulling coefficient /ˈfriːkwənsi ˈpʊlɪŋ ˌkoʊəˈfɪʃənt/
**Part of speech:** noun
**Core meaning (English):** sensitivity of oscillator frequency to a specified load, field, or signal condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sensitivity frequency oscillator với load, field hoặc signal condition.
**Grammar & collocations:** `frequency-pulling-coefficient estimate` — estimate; `fit load sensitivity` — fit sensitivity load.
**Examples:** `The frequency-pulling coefficient was lower after the resonator shield was improved.` → Coefficient pulling-frequency thấp hơn sau khi shield resonator cải thiện.
**Liên kết tiếng Hàn:** `주파수 끌림 계수`.

## 7. spurious-response test /ˈspjʊriəs rɪˈspɑːns test/
**Part of speech:** noun
**Core meaning (English):** a test for unintended receiver responses at frequencies other than the selected channel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test response receiver ngoài ý muốn ở frequency khác selected channel.
**Grammar & collocations:** `spurious-response-test sweep` — sweep; `search a frequency plan` — tìm trong frequency plan.
**Examples:** `The spurious-response test found a response at the second clock harmonic.` → Test response-spurious tìm response ở clock harmonic thứ hai.
**Liên kết tiếng Hàn:** `불요 응답 시험`.

## 8. blocking tolerance /ˈblɑːkɪŋ ˈtɑːlərəns/
**Part of speech:** noun
**Core meaning (English):** ability to receive a weak wanted signal while a strong nearby signal is present.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng nhận signal yếu khi signal mạnh gần đó hiện diện.
**Grammar & collocations:** `blocking-tolerance limit` — limit; `survive a strong adjacent carrier` — chịu carrier mạnh lân cận.
**Examples:** `Blocking tolerance failed when the adjacent transmitter entered compression.` → Tolerance blocking fail khi transmitter lân cận vào compression.
**Liên kết tiếng Hàn:** `블로킹 허용도`.

## 9. desensitization threshold /diːˌsensətəˈzeɪʃən ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** interferer level at which the receiver's sensitivity degrades beyond a defined amount.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interferer level nơi sensitivity receiver giảm quá mức định nghĩa.
**Grammar & collocations:** `desensitization-threshold sweep` — sweep; `measure sensitivity loss` — đo sensitivity loss.
**Examples:** `The desensitization threshold improved after the input filter gained a steeper skirt.` → Threshold desensitization cải thiện sau khi input filter có skirt dốc hơn.
**Liên kết tiếng Hàn:** `감도 저하 임계값`.

## 10. receiver noise temperature /rɪˈsiːvər nɔɪz ˈtemprətʃər/
**Part of speech:** noun
**Core meaning (English):** equivalent temperature representing the noise added by a receiver chain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** temperature tương đương biểu diễn noise receiver chain thêm vào.
**Grammar & collocations:** `receiver-noise-temperature estimate` — estimate; `refer noise to the input` — quy noise về input.
**Examples:** `Receiver noise temperature increased when the cryogenic amplifier lost cooling.` → Temperature noise-receiver tăng khi amplifier cryogenic mất cooling.
**Liên kết tiếng Hàn:** `수신기 잡음 온도`.

## 11. noise-correlation matrix /nɔɪz ˌkɔːrəˈleɪʃən ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a matrix describing covariance among noise sources or receiver channels.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận mô tả covariance giữa noise source hoặc receiver channel.
**Grammar & collocations:** `noise-correlation-matrix fit` — fit; `model correlated amplifier noise` — model noise amplifier tương quan.
**Examples:** `The noise-correlation matrix explained why differential subtraction left a residual.` → Matrix correlation-noise giải thích vì sao subtraction vi sai còn residual.
**Liên kết tiếng Hàn:** `잡음 상관 행렬`.

## 12. gain-control loop /ɡeɪn kənˈtroʊl luːp/
**Part of speech:** noun
**Core meaning (English):** feedback that adjusts receiver gain to keep signal level within a useful range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** feedback điều chỉnh gain receiver để signal level nằm trong range hữu ích.
**Grammar & collocations:** `gain-control-loop bandwidth` — bandwidth; `stabilize an output level` — ổn định output level.
**Examples:** `The gain-control loop reacted too slowly to the burst and clipped the first symbols.` → Loop control-gain phản ứng quá chậm với burst và clip symbol đầu.
**Liên kết tiếng Hàn:** `이득 제어 루프`.

## 13. automatic gain control /ˌɔːtəˈmætɪk ɡeɪn kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** automatic adjustment of receiver gain in response to input or output level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tự động chỉnh gain receiver theo input hoặc output level.
**Grammar & collocations:** `automatic-gain-control attack time` — attack time; `hold a stable amplitude` — giữ amplitude ổn định.
**Examples:** `Automatic gain control preserved the demodulator range across changing path loss.` → Control gain tự động giữ range demodulator qua path loss đổi.
**Liên kết tiếng Hàn:** `자동 이득 제어`.

## 14. envelope detector /ˈenvəloʊ dɪˈtektər/
**Part of speech:** noun
**Core meaning (English):** a circuit that extracts the slowly varying amplitude envelope of a modulated signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** circuit lấy amplitude envelope biến đổi chậm của modulated signal.
**Grammar & collocations:** `envelope-detector time constant` — time constant; `recover amplitude modulation` — khôi phục amplitude modulation.
**Examples:** `The envelope detector followed the burst shape without tracking the carrier cycles.` → Detector envelope theo burst shape mà không theo carrier cycle.
**Liên kết tiếng Hàn:** `포락선 검파기`.

## 15. power detector linearity /ˈpaʊər dɪˈtektər ˌlɪniˈærəti/
**Part of speech:** noun
**Core meaning (English):** accuracy with which a power detector's output tracks input power across its operating range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ chính xác output detector power bám input power qua operating range.
**Grammar & collocations:** `power-detector-linearity error` — error; `calibrate a logarithmic response` — calibrate response logarithmic.
**Examples:** `Power detector linearity limited the accuracy of the transmitter protection loop.` → Linearity detector-power giới hạn accuracy của protection loop transmitter.
**Liên kết tiếng Hàn:** `전력 검출기 선형성`.

## 16. quadrature error /ˈkwɑːdrətʃər ˈerər/
**Part of speech:** noun
**Core meaning (English):** deviation from the intended ninety-degree relationship between I and Q components.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lệch khỏi quan hệ chín mươi độ dự kiến giữa I và Q.
**Grammar & collocations:** `quadrature-error correction` — correction; `rotate a complex baseband` — xoay baseband phức.
**Examples:** `Quadrature error produced an elliptical constellation instead of a circle.` → Error quadrature tạo constellation ellipse thay vì circle.
**Liên kết tiếng Hàn:** `직교 오류`.

## 17. I/Q gain mismatch /aɪ kjuː ɡeɪn ˈmɪsmætʃ/
**Part of speech:** noun
**Core meaning (English):** unequal gain in the in-phase and quadrature signal paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gain không đều trong path in-phase và quadrature.
**Grammar & collocations:** `I/Q-gain-mismatch estimate` — estimate; `balance complex branches` — cân branch phức.
**Examples:** `I/Q gain mismatch left a mirror tone after digital downconversion.` → Mismatch gain I/Q để mirror tone sau downconversion số.
**Liên kết tiếng Hàn:** `I/Q 이득 불일치`.

## 18. I/Q phase mismatch /aɪ kjuː feɪz ˈmɪsmætʃ/
**Part of speech:** noun
**Core meaning (English):** phase separation between I and Q paths that differs from the intended quadrature angle.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phase separation giữa path I và Q khác góc quadrature dự kiến.
**Grammar & collocations:** `I/Q-phase-mismatch correction` — correction; `orthogonalize complex paths` — làm trực giao path phức.
**Examples:** `I/Q phase mismatch worsened when the mixer temperature rose.` → Mismatch phase I/Q xấu hơn khi nhiệt mixer tăng.
**Liên kết tiếng Hàn:** `I/Q 위상 불일치`.

## 19. interstage isolation /ˌɪntərsteɪdʒ ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** suppression of unwanted coupling between successive stages of a receiver or amplifier.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** triệt coupling không mong muốn giữa các stage receiver hoặc amplifier liên tiếp.
**Grammar & collocations:** `interstage-isolation requirement` — requirement; `shield a sensitive node` — shield node nhạy.
**Examples:** `Interstage isolation prevented the power detector from pulling the low-noise amplifier.` → Isolation interstage ngăn detector power kéo low-noise amplifier.
**Liên kết tiếng Hàn:** `단간 격리`.

## 20. receiver headroom /rɪˈsiːvər ˈhedruːm/
**Part of speech:** noun
**Core meaning (English):** remaining amplitude range before a receiver stage clips, compresses, or violates linear operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** amplitude range còn lại trước khi stage receiver clip, compress hoặc mất tuyến tính.
**Grammar & collocations:** `receiver-headroom margin` — margin; `reserve linear swing` — dành swing tuyến tính.
**Examples:** `Receiver headroom disappeared when the blocker and wanted signal arrived together.` → Headroom receiver biến mất khi blocker và signal mong muốn tới cùng.
**Liên kết tiếng Hàn:** `수신기 헤드룸`.

## Review in context

An **input compression point**, **phase-noise skirt**, **reciprocal mixing**, and an **image-reject mixer** define receiver limits; **local-oscillator pulling** and a **frequency-pulling coefficient** explain drift. A **spurious-response test**, **blocking tolerance**, **desensitization threshold**, **receiver noise temperature**, and **noise-correlation matrix** characterize weak-signal performance. A **gain-control loop**, **automatic gain control**, and **envelope detector** manage level, while **power detector linearity**, **quadrature error**, **I/Q gain mismatch**, **I/Q phase mismatch**, **interstage isolation**, and **receiver headroom** protect fidelity.

**Bản dịch tiếng Việt:** **Input compression point**, **phase-noise skirt**, **reciprocal mixing** và **image-reject mixer** xác lập giới hạn receiver; **local-oscillator pulling** và **frequency-pulling coefficient** giải thích drift. **Spurious-response test**, **blocking tolerance**, **desensitization threshold**, **receiver noise temperature** và **noise-correlation matrix** characterize hiệu năng signal yếu. **Gain-control loop**, **automatic gain control** và **envelope detector** quản lý level, còn **power detector linearity**, **quadrature error**, **I/Q gain mismatch**, **I/Q phase mismatch**, **interstage isolation** và **receiver headroom** bảo vệ fidelity.
