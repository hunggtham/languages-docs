# C2 Vocabulary — RF and millimeter-wave integrated circuits

This lesson follows an RF transceiver chain from signal quality and impedance behavior through low-noise amplification, frequency conversion, local oscillation, power amplification, and millimeter-wave integration.

Flow: **RF front end → impedance matching → S-parameter → return loss → insertion loss → noise figure → low-noise amplifier → mixer → local oscillator → image frequency → intermediate frequency → voltage-controlled oscillator → phase-locked loop synthesizer → power amplifier → power-added efficiency → linearity → third-order intercept point → quadrature signal → balun → millimeter-wave integrated circuit**.

## 1. RF front end /ˌɑrˈɛf frʌnt ɛnd/
**Part of speech:** noun
**Core meaning (English):** the radio-frequency circuitry between an antenna and the lower-frequency or digital portions of a communication system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi mạch sát antenna; nơi signal RF được lọc, khuếch đại, switch hoặc convert trước khi đi sâu hơn vào transceiver.
**Grammar & collocations:** `receiver RF front end` — RF front end phía receiver; `front-end module` — module front end.
**Examples:** `The RF front end combined filtering, low-noise amplification, and antenna switching.` → RF front end kết hợp filtering, low-noise amplification và antenna switching.
**Liên kết tiếng Hàn:** `RF 프런트엔드`.

## 2. impedance matching /ɪmˈpiːdəns ˈmætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** designing source, load, and network impedances so power transfer is efficient and reflections are controlled.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** làm cho “trở kháng nhìn thấy” phù hợp; mismatch khiến một phần RF energy bị phản xạ ngược lại.
**Grammar & collocations:** `matching network` — network matching; `50-ohm matching` — matching 50 ohm.
**Examples:** `Impedance matching reduced reflected power between the amplifier and the antenna.` → Impedance matching giảm công suất phản xạ giữa amplifier và antenna.
**Liên kết tiếng Hàn:** `임피던스 정합`.

## 3. S-parameter /ˈɛs pəˌræmətər/
**Part of speech:** noun
**Core meaning (English):** a scattering parameter describing how RF power waves are reflected or transmitted between ports of a network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ số mô tả RF wave đi vào một port thì bao nhiêu bị reflect và bao nhiêu truyền sang port khác.
**Grammar & collocations:** `S-parameter measurement` — đo S-parameter; `S11`, `S21` — hệ số reflection/transmission phổ biến.
**Examples:** `The engineer measured S-parameters across the operating band before tuning the matching network.` → Kỹ sư đo S-parameter trên toàn band trước khi tune matching network.
**Liên kết tiếng Hàn:** `S-파라미터`, `산란 파라미터`.

## 4. return loss /rɪˈtɝn lɔs/
**Part of speech:** noun
**Core meaning (English):** a logarithmic measure of how little signal power is reflected back from an impedance discontinuity or port.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo mức reflection; return loss lớn thường nghĩa là matching tốt và ít power quay ngược.
**Grammar & collocations:** `input return loss` — return loss input; `improve return loss` — cải thiện matching.
**Examples:** `The redesigned input network improved return loss across the target band.` → Network input thiết kế lại cải thiện return loss trên target band.
**Liên kết tiếng Hàn:** `반사 손실`.

## 5. insertion loss /ɪnˈsɝʃən lɔs/
**Part of speech:** noun
**Core meaning (English):** the reduction in signal power caused by inserting a component or network into a transmission path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** signal bị yếu đi bao nhiêu khi thêm filter, switch hoặc interconnect vào đường RF.
**Grammar & collocations:** `low insertion loss` — insertion loss thấp; `filter insertion loss` — loss của filter.
**Examples:** `The RF switch had low insertion loss but limited isolation at high frequency.` → RF switch có insertion loss thấp nhưng isolation hạn chế ở tần số cao.
**Liên kết tiếng Hàn:** `삽입 손실`.

## 6. noise figure /nɔɪz ˈfɪɡjər/
**Part of speech:** noun
**Core meaning (English):** a measure of how much a component degrades the signal-to-noise ratio as a signal passes through it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** circuit thêm noise tới mức nào; noise figure càng thấp càng tốt cho receiver nhạy.
**Grammar & collocations:** `receiver noise figure` — NF receiver; `low-noise design` — thiết kế noise thấp.
**Examples:** `The first amplifier dominated the receiver noise figure because later stages saw an already amplified signal.` → Amplifier đầu tiên chi phối noise figure vì stage sau nhận signal đã được amplify.
**Liên kết tiếng Hàn:** `잡음 지수`, `NF`.

## 7. low-noise amplifier /loʊ nɔɪz ˈæmpləˌfaɪər/
**Part of speech:** noun
**Core meaning (English):** an RF amplifier designed to increase weak received signals while adding as little noise as practical.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** amplifier đầu receiver phải tăng signal rất yếu mà không chôn signal trong noise mới.
**Grammar & collocations:** `LNA gain` — gain LNA; `input-matched LNA` — LNA đã matching input.
**Examples:** `The low-noise amplifier sat close to the antenna to preserve receiver sensitivity.` → LNA đặt gần antenna để giữ sensitivity của receiver.
**Liên kết tiếng Hàn:** `저잡음 증폭기`, `LNA`.

## 8. mixer /ˈmɪksər/
**Part of speech:** noun
**Core meaning (English):** a nonlinear RF circuit that combines signals to translate information from one frequency to another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mixer “trộn” RF với local oscillator để tạo sum/difference frequency, từ đó đổi frequency của signal.
**Grammar & collocations:** `downconversion mixer` — mixer hạ frequency; `upconversion mixer` — mixer nâng frequency.
**Examples:** `The mixer translated the incoming RF channel to a lower intermediate frequency.` → Mixer chuyển channel RF xuống intermediate frequency thấp hơn.
**Liên kết tiếng Hàn:** `믹서`, `혼합기`.

## 9. local oscillator /ˈloʊkəl ˈɑsəˌleɪtər/
**Part of speech:** noun
**Core meaning (English):** a locally generated periodic signal used by a mixer to shift an RF signal to another frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** clock RF nội bộ đưa vào mixer để xác định signal sẽ được translate đi đâu.
**Grammar & collocations:** `LO frequency` — frequency local oscillator; `LO leakage` — rò LO.
**Examples:** `Changing the local oscillator frequency selected a different receive channel.` → Đổi local oscillator frequency chọn receive channel khác.
**Liên kết tiếng Hàn:** `국부 발진기`, `LO`.

## 10. image frequency /ˈɪmɪdʒ ˈfriːkwənsi/
**Part of speech:** noun
**Core meaning (English):** an undesired input frequency that produces the same intermediate frequency as the desired channel in a heterodyne receiver.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một frequency “giả” cũng bị mixer đưa về đúng IF như channel thật, nên cần filter hoặc architecture để reject nó.
**Grammar & collocations:** `image rejection` — reject image; `image-frequency interference` — interference tại image.
**Examples:** `A preselector filter suppressed the image frequency before the mixer.` → Preselector filter chặn image frequency trước mixer.
**Liên kết tiếng Hàn:** `영상 주파수`, `이미지 주파수`.

## 11. intermediate frequency /ˌɪntərˈmiːdiət ˈfriːkwənsi/
**Part of speech:** noun
**Core meaning (English):** a frequency to which an RF signal is translated for easier filtering, amplification, or digitization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** frequency trung gian giữa RF cao và baseband; xử lý signal ở IF thường dễ hơn trực tiếp ở carrier cao.
**Grammar & collocations:** `IF stage` — stage IF; `low intermediate frequency` — low-IF.
**Examples:** `The receiver used a fixed intermediate frequency for channel filtering.` → Receiver dùng intermediate frequency cố định cho channel filtering.
**Liên kết tiếng Hàn:** `중간 주파수`, `IF`.

## 12. voltage-controlled oscillator /ˈvoʊltɪdʒ kənˈtroʊld ˈɑsəˌleɪtər/
**Part of speech:** noun
**Core meaning (English):** an oscillator whose output frequency changes as a control voltage changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** voltage điều khiển frequency; VCO thường là phần tạo oscillation trong PLL synthesizer.
**Grammar & collocations:** `VCO tuning range` — dải tune VCO; `control voltage` — voltage điều khiển.
**Examples:** `The voltage-controlled oscillator covered the entire tuning range required by the radio.` → VCO bao phủ toàn tuning range radio cần.
**Liên kết tiếng Hàn:** `전압 제어 발진기`, `VCO`.

## 13. phase-locked loop synthesizer /feɪz lɑkt luːp ˈsɪnθəˌsaɪzər/
**Part of speech:** noun
**Core meaning (English):** a frequency-generation system that locks an oscillator to a reference and produces stable programmable RF frequencies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** PLL dùng feedback để giữ oscillator bám reference rồi chia/nhân frequency thành channel mong muốn.
**Grammar & collocations:** `PLL synthesizer` — frequency synthesizer PLL; `frequency lock` — trạng thái lock.
**Examples:** `The phase-locked loop synthesizer switched channels by programming a new divider ratio.` → PLL synthesizer đổi channel bằng divider ratio mới.
**Liên kết tiếng Hàn:** `위상 고정 루프 주파수 합성기`.

## 14. power amplifier /ˈpaʊər ˈæmpləˌfaɪər/
**Part of speech:** noun
**Core meaning (English):** an amplifier that raises an RF signal to the power level required to drive an antenna or other load.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stage cuối transmitter; nhiệm vụ chính là tạo đủ RF power nhưng vẫn phải cân bằng efficiency và linearity.
**Grammar & collocations:** `PA output power` — power output; `power-amplifier stage` — stage PA.
**Examples:** `The power amplifier dominated the transmitter's energy consumption at maximum output power.` → Power amplifier chiếm phần lớn energy consumption của transmitter khi output power tối đa.
**Liên kết tiếng Hàn:** `전력 증폭기`, `PA`.

## 15. power-added efficiency /ˈpaʊər ˈædɪd ɪˈfɪʃənsi/
**Part of speech:** noun
**Core meaning (English):** an RF power-amplifier efficiency metric comparing added RF output power with consumed DC power.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** PA biến DC power thành RF hữu ích hiệu quả tới đâu sau khi trừ RF input đã có sẵn.
**Grammar & collocations:** `PAE optimization` — tối ưu PAE; `peak PAE` — PAE cực đại.
**Examples:** `The design improved power-added efficiency without sacrificing the required output power.` → Thiết kế tăng PAE mà không giảm output power yêu cầu.
**Liên kết tiếng Hàn:** `전력 부가 효율`, `PAE`.

## 16. linearity /ˌlɪniˈærəti/
**Part of speech:** noun
**Core meaning (English):** the degree to which a circuit produces an output proportional to its input without unwanted nonlinear distortion or intermodulation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** input thay đổi thế nào thì output theo đúng tỷ lệ như vậy; nonlinear circuit tạo thêm distortion và frequency không mong muốn.
**Grammar & collocations:** `high-linearity amplifier` — amplifier linearity cao; `linearity requirement` — yêu cầu linearity.
**Examples:** `Wideband modulation required high linearity to avoid spectral regrowth.` → Modulation wideband cần linearity cao để tránh spectral regrowth.
**Liên kết tiếng Hàn:** `선형성`.

## 17. third-order intercept point /θɝd ˈɔrdər ˈɪntərˌsɛpt pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** an extrapolated metric used to characterize third-order intermodulation distortion and RF circuit linearity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** IP3 càng cao thường nghĩa circuit chịu signal mạnh hơn trước khi intermodulation bậc ba trở nên nghiêm trọng.
**Grammar & collocations:** `input IP3` — IIP3; `output IP3` — OIP3.
**Examples:** `A higher third-order intercept point improved tolerance to nearby strong blockers.` → IP3 cao hơn giúp circuit chịu strong blocker gần channel tốt hơn.
**Liên kết tiếng Hàn:** `3차 교차점`, `IP3`.

## 18. quadrature signal /ˈkwɑdrətʃər ˈsɪɡnəl/
**Part of speech:** noun
**Core meaning (English):** one of a pair of same-frequency signals separated by 90 degrees of phase, commonly represented as I and Q components.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hai signal vuông pha tạo hai trục I/Q, cho phép biểu diễn amplitude và phase của modulation phức tạp.
**Grammar & collocations:** `I/Q signal` — signal I/Q; `quadrature imbalance` — mismatch I/Q.
**Examples:** `The transmitter generated quadrature signals for complex modulation.` → Transmitter tạo quadrature signal cho complex modulation.
**Liên kết tiếng Hàn:** `직교 신호`, `I/Q 신호`.

## 19. balun /ˈbælʌn/
**Part of speech:** noun
**Core meaning (English):** a network that converts between balanced and unbalanced signal forms and may also transform impedance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bridge giữa differential/balanced circuit và single-ended/unbalanced line như antenna feed.
**Grammar & collocations:** `on-chip balun` — balun trên chip; `balun loss` — loss của balun.
**Examples:** `The balun converted the differential amplifier output to the single-ended antenna interface.` → Balun đổi differential output thành antenna interface single-ended.
**Liên kết tiếng Hàn:** `밸런`, `평형-불평형 변환기`.

## 20. millimeter-wave integrated circuit /ˈmɪləˌmiːtər weɪv ˈɪntəˌɡreɪtɪd ˈsɝkɪt/
**Part of speech:** noun
**Core meaning (English):** an integrated circuit designed to process signals at millimeter-wave frequencies, typically tens of gigahertz and above.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** IC làm việc ở frequency rất cao nơi transistor parasitic, interconnect, antenna và layout đều ảnh hưởng mạnh tới behavior.
**Grammar & collocations:** `mmWave IC` — IC millimeter-wave; `mmWave transceiver` — transceiver mmWave.
**Examples:** `The millimeter-wave integrated circuit placed phased-array transmit and receive functions close to the antennas.` → mmWave IC đặt chức năng transmit/receive phased-array gần antenna.
**Liên kết tiếng Hàn:** `밀리미터파 집적회로`, `mmWave IC`.

## Review in context

An **RF front end** must control reflections through **impedance matching**, often verified with each **S-parameter**, **return loss**, and **insertion loss**. Receiver sensitivity depends on **noise figure**, so the first active stage is commonly a **low-noise amplifier**. A **mixer** combines the signal with a **local oscillator**, while filtering must prevent an **image frequency** from producing the same **intermediate frequency** as the desired channel. A tunable **voltage-controlled oscillator** inside a **phase-locked loop synthesizer** generates stable channel frequencies. On transmit, the **power amplifier** must balance **power-added efficiency** with **linearity**, often summarized in part by the **third-order intercept point**. Modern modulation relies on a **quadrature signal**, while a **balun** may convert between differential circuitry and a single-ended antenna path. At still higher frequencies, all of these functions may be integrated into a **millimeter-wave integrated circuit**.

**Bản dịch tiếng Việt:** Một **RF front end** phải kiểm soát reflection bằng **impedance matching**, thường được đánh giá qua **S-parameter**, **return loss** và **insertion loss**. Sensitivity của receiver phụ thuộc **noise figure**, nên active stage đầu thường là **low-noise amplifier**. **Mixer** kết hợp signal với **local oscillator**, còn filtering phải ngăn **image frequency** tạo cùng **intermediate frequency** như channel mong muốn. **Voltage-controlled oscillator** có thể tune bên trong **phase-locked loop synthesizer** để tạo channel frequency ổn định. Ở transmitter, **power amplifier** phải cân bằng **power-added efficiency** với **linearity**, một phần được phản ánh bởi **third-order intercept point**. Modulation hiện đại dùng **quadrature signal**, trong khi **balun** có thể chuyển giữa differential circuit và antenna path single-ended. Ở frequency cao hơn nữa, các chức năng này có thể được tích hợp trong **millimeter-wave integrated circuit**.