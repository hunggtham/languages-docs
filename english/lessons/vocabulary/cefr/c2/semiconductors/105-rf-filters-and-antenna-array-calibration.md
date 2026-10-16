# C2 Vocabulary — RF filters and antenna-array calibration

This lesson links passive filtering, phased-array behavior, impedance matching, and radiation-pattern verification.

Flow: **filter insertion loss → passband ripple → stopband attenuation → group-delay ripple → phase linearity → surface-wave mode → radiation efficiency → antenna mismatch → return-loss minimum → impedance tuner → beam-steering codebook → phase-shifter quantization → array calibration → mutual coupling matrix → scan blindness → grating lobe → near-field coupling → far-field pattern → polarization purity → cross-polar discrimination**.

## 1. filter insertion loss /ˈfɪltər ɪnˈsɜːrʃən lɔːs/
**Part of speech:** noun
**Core meaning (English):** power lost by a filter between its input and output in the intended transmission band.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** power mất qua filter giữa input và output trong transmission band dự kiến.
**Grammar & collocations:** `filter-insertion-loss budget` — budget; `measure passband attenuation` — đo attenuation passband.
**Examples:** `Filter insertion loss consumed half the available receiver margin.` → Loss insertion filter tiêu nửa margin receiver có sẵn.
**Liên kết tiếng Hàn:** `필터 삽입 손실`.

## 2. passband ripple /ˈpæsˌbænd ˈrɪpəl/
**Part of speech:** noun
**Core meaning (English):** periodic variation in transmission amplitude across a filter's intended passband.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variation tuần hoàn của transmission amplitude trong passband filter.
**Grammar & collocations:** `passband-ripple limit` — limit; `flatten an amplitude response` — làm phẳng response amplitude.
**Examples:** `Passband ripple modulated the measured gain of the wideband channel.` → Ripple passband điều chế gain đo của channel wideband.
**Liên kết tiếng Hàn:** `통과대역 리플`.

## 3. stopband attenuation /ˈstɑːpbænd əˌtenjuˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** reduction in transmission through a filter outside its intended passband.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức giảm transmission qua filter ngoài passband dự kiến.
**Grammar & collocations:** `stopband-attenuation requirement` — requirement; `reject an adjacent interferer` — loại interferer lân cận.
**Examples:** `Stopband attenuation was insufficient at the image frequency.` → Attenuation stopband không đủ ở image frequency.
**Liên kết tiếng Hàn:** `저지대역 감쇠`.

## 4. group-delay ripple /ɡruːp dɪˈleɪ ˈrɪpəl/
**Part of speech:** noun
**Core meaning (English):** variation in signal delay across frequency that can distort a modulated waveform.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** delay signal thay đổi theo frequency làm méo modulated waveform.
**Grammar & collocations:** `group-delay-ripple mask` — mask; `preserve pulse shape` — giữ pulse shape.
**Examples:** `Group-delay ripple spread the symbols even though amplitude loss was small.` → Ripple delay-group làm symbol spread dù amplitude loss nhỏ.
**Liên kết tiếng Hàn:** `군지연 리플`.

## 5. phase linearity /feɪz ˌlɪniˈærəti/
**Part of speech:** noun
**Core meaning (English):** how closely phase changes proportionally with frequency across a specified band.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức phase đổi tỷ lệ thuận với frequency trong band cụ thể.
**Grammar & collocations:** `phase-linearity error` — error; `maintain a linear phase slope` — giữ slope phase tuyến tính.
**Examples:** `Phase linearity determined whether the filter could pass the short radar pulse.` → Linearity phase quyết định filter có pass radar pulse ngắn không.
**Liên kết tiếng Hàn:** `위상 선형성`.

## 6. surface-wave mode /ˈsɜːrfɪs weɪv moʊd/
**Part of speech:** noun
**Core meaning (English):** an electromagnetic propagation mode confined mainly near a material or structure surface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mode electromagnetic lan chủ yếu gần surface material hoặc structure.
**Grammar & collocations:** `surface-wave-mode suppression` — suppression; `damp a substrate resonance` — giảm resonance substrate.
**Examples:** `A surface-wave mode coupled energy from the feed into the enclosure wall.` → Mode wave-surface coupling energy từ feed vào enclosure wall.
**Liên kết tiếng Hàn:** `표면파 모드`.

## 7. radiation efficiency /ˌreɪdiˈeɪʃən ɪˈfɪʃənsi/
**Part of speech:** noun
**Core meaning (English):** fraction of accepted antenna power that is radiated rather than dissipated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fraction antenna power accepted được radiate thay vì dissipate.
**Grammar & collocations:** `radiation-efficiency estimate` — estimate; `separate conductor loss` — tách conductor loss.
**Examples:** `Radiation efficiency fell after the enclosure absorbed more current.` → Efficiency radiation giảm sau khi enclosure hấp thụ current nhiều hơn.
**Liên kết tiếng Hàn:** `방사 효율`.

## 8. antenna mismatch /ænˈtenə ˈmɪsmætʃ/
**Part of speech:** noun
**Core meaning (English):** impedance disagreement between an antenna and the connected transmission line or radio.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** impedance antenna không khớp với transmission line hoặc radio nối.
**Grammar & collocations:** `antenna-mismatch loss` — loss; `tune a feed impedance` — tune feed impedance.
**Examples:** `Antenna mismatch reduced radiated power at the edge of the band.` → Mismatch antenna giảm radiated power ở mép band.
**Liên kết tiếng Hàn:** `안테나 부정합`.

## 9. return-loss minimum /rɪˈtɜːrn lɔːs ˈmɪnəməm/
**Part of speech:** noun
**Core meaning (English):** the frequency and depth of the lowest return-loss point in a matching response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** frequency và depth của điểm return-loss thấp nhất trong matching response.
**Grammar & collocations:** `return-loss-minimum shift` — shift; `locate the resonance match` — định vị resonance match.
**Examples:** `The return-loss minimum shifted when the radome was installed.` → Minimum return-loss dịch khi lắp radome.
**Liên kết tiếng Hàn:** `반사 손실 최소점`.

## 10. impedance tuner /ɪmˈpiːdəns ˈtuːnər/
**Part of speech:** noun
**Core meaning (English):** an adjustable network used to present a selected complex impedance to a device or antenna.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** network điều chỉnh để present complex impedance chọn cho device hoặc antenna.
**Grammar & collocations:** `impedance-tuner setting` — setting; `match a complex load` — match complex load.
**Examples:** `The impedance tuner traced the power optimum across the load plane.` → Tuner impedance trace power optimum qua load plane.
**Liên kết tiếng Hàn:** `임피던스 튜너`.

## 11. beam-steering codebook /biːm ˈstɪərɪŋ ˈkoʊdbʊk/
**Part of speech:** noun
**Core meaning (English):** a stored set of phase and amplitude settings for pointing an antenna array in selected directions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập setting phase và amplitude lưu để hướng antenna array theo direction chọn.
**Grammar & collocations:** `beam-steering-codebook entry` — entry; `select a pointing state` — chọn pointing state.
**Examples:** `The beam-steering codebook was pruned after thermal drift moved one lobe.` → Codebook steering-beam được prune sau khi thermal drift dịch một lobe.
**Liên kết tiếng Hàn:** `빔 조향 코드북`.

## 12. phase-shifter quantization /feɪz ˈʃɪftər ˌkwɑːntəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** angular error introduced because a phase shifter can select only discrete phase states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error góc do phase shifter chỉ chọn phase state rời rạc.
**Grammar & collocations:** `phase-shifter-quantization error` — error; `round a steering angle` — round góc steering.
**Examples:** `Phase-shifter quantization raised sidelobes beside the intended beam.` → Quantization shifter-phase tăng sidelobe cạnh beam dự kiến.
**Liên kết tiếng Hàn:** `위상 천이기 양자화`.

## 13. array calibration /əˈreɪ ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** measuring and correcting element amplitude, phase, and position differences in an antenna array.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo và sửa difference amplitude, phase, position giữa element antenna array.
**Grammar & collocations:** `array-calibration reference` — reference; `equalize element phases` — cân phase element.
**Examples:** `Array calibration restored the main-lobe direction after a module replacement.` → Calibration array khôi phục hướng main-lobe sau thay module.
**Liên kết tiếng Hàn:** `배열 보정`.

## 14. mutual coupling matrix /ˈmjuːtʃuəl ˈkʌplɪŋ ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a matrix describing how current or fields in each array element influence the others.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận mô tả current hoặc field mỗi element ảnh hưởng element khác.
**Grammar & collocations:** `mutual-coupling-matrix inversion` — inversion; `de-embed neighboring elements` — de-embed element lân cận.
**Examples:** `The mutual coupling matrix corrected the edge-element amplitude bias.` → Matrix coupling-mutual sửa amplitude bias của element edge.
**Liên kết tiếng Hàn:** `상호 결합 행렬`.

## 15. scan blindness /skæn ˈblaɪndnəs/
**Part of speech:** noun
**Core meaning (English):** loss of an array's ability to radiate or receive effectively at particular scan angles.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** array mất khả năng radiate hoặc receive hiệu quả ở scan angle nhất định.
**Grammar & collocations:** `scan-blindness angle` — angle; `avoid a surface-wave resonance` — tránh resonance surface-wave.
**Examples:** `Scan blindness appeared near the angle where the surface-wave mode was excited.` → Blindness scan xuất hiện gần angle kích thích mode wave-surface.
**Liên kết tiếng Hàn:** `스캔 블라인드`.

## 16. grating lobe /ˈɡreɪtɪŋ loʊb/
**Part of speech:** noun
**Core meaning (English):** an unwanted array beam produced when element spacing permits an additional phase-matched direction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** beam array không mong muốn do element spacing cho phép direction phase-matched khác.
**Grammar & collocations:** `grating-lobe level` — level; `constrain element spacing` — giới hạn spacing element.
**Examples:** `A grating lobe entered the protected sector at the highest steering angle.` → Lobe grating vào protected sector ở steering angle cao nhất.
**Liên kết tiếng Hàn:** `격자 로브`.

## 17. near-field coupling /ˌnɪr fiːld ˈkʌplɪŋ/
**Part of speech:** noun
**Core meaning (English):** electromagnetic interaction between nearby structures before a propagating far field is established.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tương tác electromagnetic giữa structure gần trước khi far field propagating hình thành.
**Grammar & collocations:** `near-field-coupling scan` — scan; `map local reactive energy` — map reactive energy cục bộ.
**Examples:** `Near-field coupling shifted the impedance of the neighboring radiator.` → Coupling field-near dịch impedance của radiator lân cận.
**Liên kết tiếng Hàn:** `근접장 결합`.

## 18. far-field pattern /fɑːr fiːld ˈpætərn/
**Part of speech:** noun
**Core meaning (English):** angular distribution of radiated power measured sufficiently far from an antenna.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân bố angular của radiated power đo đủ xa antenna.
**Grammar & collocations:** `far-field-pattern cut` — cut; `plot an azimuth slice` — plot lát azimuth.
**Examples:** `The far-field pattern confirmed a narrower main lobe after calibration.` → Pattern field-far xác nhận main lobe hẹp hơn sau calibration.
**Liên kết tiếng Hàn:** `원거리장 패턴`.

## 19. polarization purity /ˌpoʊlərəˈzeɪʃən ˈpjʊrəti/
**Part of speech:** noun
**Core meaning (English):** degree to which radiated energy maintains the intended polarization rather than an orthogonal component.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức radiated energy giữ polarization dự kiến thay vì component trực giao.
**Grammar & collocations:** `polarization-purity specification` — specification; `suppress cross-polar power` — triệt power cross-polar.
**Examples:** `Polarization purity degraded when the radome tilted relative to the array.` → Purity polarization xấu khi radome nghiêng so với array.
**Liên kết tiếng Hàn:** `편파 순도`.

## 20. cross-polar discrimination /krɔːs ˈpoʊlər dɪˌskrɪməˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** ratio expressing how strongly an antenna favors the desired polarization over the orthogonal one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ số antenna ưu tiên polarization mong muốn so với polarization trực giao.
**Grammar & collocations:** `cross-polar-discrimination ratio` — ratio; `measure orthogonal rejection` — đo rejection trực giao.
**Examples:** `Cross-polar discrimination fell near the array edge where coupling was strongest.` → Discrimination cross-polar giảm gần edge array nơi coupling mạnh nhất.
**Liên kết tiếng Hàn:** `교차 편파 식별도`.

## Review in context

**Filter insertion loss**, **passband ripple**, **stopband attenuation**, **group-delay ripple**, and **phase linearity** define the passive channel, while a **surface-wave mode**, **radiation efficiency**, **antenna mismatch**, **return-loss minimum**, and **impedance tuner** shape the feed. A **beam-steering codebook**, **phase-shifter quantization**, **array calibration**, and **mutual coupling matrix** control the array; **scan blindness**, a **grating lobe**, **near-field coupling**, and a **far-field pattern** expose geometry limits. **Polarization purity** and **cross-polar discrimination** complete the verification.

**Bản dịch tiếng Việt:** **Filter insertion loss**, **passband ripple**, **stopband attenuation**, **group-delay ripple** và **phase linearity** định nghĩa passive channel, còn **surface-wave mode**, **radiation efficiency**, **antenna mismatch**, **return-loss minimum** và **impedance tuner** định hình feed. **Beam-steering codebook**, **phase-shifter quantization**, **array calibration** và **mutual coupling matrix** điều khiển array; **scan blindness**, **grating lobe**, **near-field coupling** và **far-field pattern** làm lộ giới hạn geometry. **Polarization purity** và **cross-polar discrimination** hoàn tất verification.
