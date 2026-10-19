# C2 Vocabulary — Data-converter linearity and sampling diagnostics

This lesson characterizes high-resolution converters through timing uncertainty, code-density tests, spectral distortion, and anti-alias design.

Flow: **aperture uncertainty → quantization residue → missing-code test → monotonicity error → spurious-free dynamic range → total harmonic distortion → intermodulation spur → clock feedthrough → sample-and-hold droop → reference kickback → calibration code density → histogram test → dithering injection → oversampling ratio → decimation filter → alias guardband → anti-alias pole → settling aperture → conversion-noise floor → spectral-bin leakage**.

## 1. aperture uncertainty /ˈæpərtʃər ʌnˈsɜːrtənti/
**Part of speech:** noun
**Core meaning (English):** uncertainty in the exact time at which a converter samples an input.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** uncertainty về thời điểm chính xác converter sample input.
**Grammar & collocations:** `aperture-uncertainty budget` — budget; `translate timing jitter to voltage error` — chuyển jitter timing thành voltage error.
**Examples:** `Aperture uncertainty limited the measured amplitude at the highest input frequency.` → Uncertainty aperture giới hạn amplitude đo ở input frequency cao nhất.
**Liên kết tiếng Hàn:** `개구 불확도`.

## 2. quantization residue /ˌkwɑːntəˈzeɪʃən ˈrezɪduː/
**Part of speech:** noun
**Core meaning (English):** the difference remaining after an analog value is represented by the nearest digital code.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần khác biệt còn lại sau khi analog value được biểu diễn bằng digital code gần nhất.
**Grammar & collocations:** `quantization-residue spectrum` — spectrum; `model code error` — model code error.
**Examples:** `The quantization residue was whitened by a small injected dither.` → Residue quantization được làm trắng bằng dither nhỏ inject.
**Liên kết tiếng Hàn:** `양자화 잔차`.

## 3. missing-code test /ˈmɪsɪŋ koʊd test/
**Part of speech:** noun
**Core meaning (English):** a test that checks whether any digital output code is never produced across the input range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test kiểm tra digital output code nào không bao giờ xuất hiện trong input range.
**Grammar & collocations:** `missing-code-test result` — result; `sweep every transition` — sweep mọi transition.
**Examples:** `The missing-code test exposed a broken comparator branch near midscale.` → Test code-missing lộ comparator branch hỏng gần midscale.
**Liên kết tiếng Hàn:** `누락 코드 시험`.

## 4. monotonicity error /ˌmɑːnətəˈnɪsəti ˈerər/
**Part of speech:** noun
**Core meaning (English):** an error in which increasing input produces a code that decreases or fails to increase.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error khi input tăng nhưng code giảm hoặc không tăng.
**Grammar & collocations:** `monotonicity-error detector` — detector; `check code ordering` — kiểm tra thứ tự code.
**Examples:** `Monotonicity error appeared only during the cold calibration sweep.` → Error monotonicity chỉ xuất hiện trong calibration sweep lạnh.
**Liên kết tiếng Hàn:** `단조성 오류`.

## 5. spurious-free dynamic range /ˈspjʊriəs friː daɪˈnæmɪk reɪndʒ/
**Part of speech:** noun
**Core meaning (English):** the ratio between a signal and the largest unwanted spectral spur.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ số giữa signal và spectral spur không mong muốn lớn nhất.
**Grammar & collocations:** `spurious-free-dynamic-range limit` — limit; `suppress a discrete spur` — triệt spur rời rạc.
**Examples:** `Spurious-free dynamic range fell when the clock harmonic coupled into the input.` → Range dynamic không spur giảm khi clock harmonic coupling vào input.
**Liên kết tiếng Hàn:** `불요파 없는 동적 범위`.

## 6. total harmonic distortion /ˈtoʊtəl hɑːrˈmɑːnɪk dɪˈstɔːrʃən/
**Part of speech:** noun
**Core meaning (English):** the combined power of harmonic components relative to the fundamental signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** power gộp của harmonic so với fundamental signal.
**Grammar & collocations:** `total-harmonic-distortion measurement` — measurement; `fit nonlinear transfer` — fit transfer phi tuyến.
**Examples:** `Total harmonic distortion increased near full scale because the front end compressed.` → Distortion harmonic tổng tăng gần full scale vì front end compression.
**Liên kết tiếng Hàn:** `총 고조파 왜곡`.

## 7. intermodulation spur /ˌɪntərmɑːdjuˈleɪʃən spɜːr/
**Part of speech:** noun
**Core meaning (English):** an unwanted tone created when nonlinear circuitry mixes two or more input frequencies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tone không mong muốn do circuit phi tuyến mix nhiều input frequency.
**Grammar & collocations:** `intermodulation-spur map` — map; `identify a third-order product` — xác định product bậc ba.
**Examples:** `The intermodulation spur landed inside the communication channel.` → Spur intermodulation rơi vào trong communication channel.
**Liên kết tiếng Hàn:** `상호변조 스퍼`.

## 8. clock feedthrough /klɑːk ˈfiːdθruː/
**Part of speech:** noun
**Core meaning (English):** unwanted clock energy coupled into an analog signal path or converter output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** năng lượng clock coupling không mong muốn vào analog path hoặc converter output.
**Grammar & collocations:** `clock-feedthrough notch` — notch; `shield a switching edge` — che switching edge.
**Examples:** `Clock feedthrough appeared as a narrow line at the sampling frequency.` → Feedthrough clock xuất hiện như line hẹp ở sampling frequency.
**Liên kết tiếng Hàn:** `클록 피드스루`.

## 9. sample-and-hold droop /ˈsæmpəl ənd hoʊld druːp/
**Part of speech:** noun
**Core meaning (English):** gradual decrease of held voltage during the interval before conversion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** voltage held giảm dần trong interval trước conversion.
**Grammar & collocations:** `sample-and-hold-droop rate` — rate; `retain charge on the sampling capacitor` — giữ charge capacitor sample.
**Examples:** `Sample-and-hold droop biased long conversion windows toward lower codes.` → Droop sample-and-hold bias conversion window dài về code thấp.
**Liên kết tiếng Hàn:** `샘플 앤 홀드 드룹`.

## 10. reference kickback /ˈrefrəns ˈkɪkbæk/
**Part of speech:** noun
**Core meaning (English):** transient disturbance returned to a voltage reference when a converter switches or redistributes charge.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** disturbance transient dội về voltage reference khi converter switch hoặc redistribute charge.
**Grammar & collocations:** `reference-kickback pulse` — pulse; `isolate a reference buffer` — cô lập reference buffer.
**Examples:** `Reference kickback created a code-dependent error during the fastest mode.` → Kickback reference tạo error phụ thuộc code trong mode nhanh nhất.
**Liên kết tiếng Hàn:** `기준 킥백`.

## 11. calibration code density /ˌkælɪˈbreɪʃən koʊd ˈdensəti/
**Part of speech:** noun
**Core meaning (English):** the distribution of output codes used to infer transition locations during calibration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** distribution output code dùng suy transition location khi calibration.
**Grammar & collocations:** `calibration-code-density profile` — profile; `estimate transition width` — ước tính width transition.
**Examples:** `Calibration code density revealed a stretched transition near the negative rail.` → Density code calibration lộ transition bị kéo ở gần negative rail.
**Liên kết tiếng Hàn:** `보정 코드 밀도`.

## 12. histogram test /ˈhɪstəɡræm test/
**Part of speech:** noun
**Core meaning (English):** a code-frequency test used to estimate converter transition errors from a known input distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test frequency code để ước tính transition error từ input distribution đã biết.
**Grammar & collocations:** `histogram-test fixture` — fixture; `accumulate code hits` — tích lũy code hit.
**Examples:** `The histogram test separated gain error from local differential nonlinearity.` → Test histogram tách gain error khỏi differential nonlinearity cục bộ.
**Liên kết tiếng Hàn:** `히스토그램 시험`.

## 13. dithering injection /ˈdɪðərɪŋ ɪnˈdʒekʃən/
**Part of speech:** noun
**Core meaning (English):** deliberate addition of small noise to decorrelate quantization error from the signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thêm noise nhỏ có chủ ý để decorrelate quantization error khỏi signal.
**Grammar & collocations:** `dithering-injection amplitude` — amplitude; `linearize code transitions statistically` — tuyến tính hóa transition thống kê.
**Examples:** `Dithering injection hid a repeating code pattern in the low-level spectrum.` → Injection dithering che pattern code lặp trong spectrum mức thấp.
**Liên kết tiếng Hàn:** `디더링 주입`.

## 14. oversampling ratio /ˈoʊvərˌsæmplɪŋ ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the ratio of sampling frequency to the minimum rate required for the signal bandwidth.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ số sampling frequency với rate tối thiểu cần cho signal bandwidth.
**Grammar & collocations:** `oversampling-ratio setting` — setting; `spread quantization noise` — trải quantization noise.
**Examples:** `A higher oversampling ratio relaxed the analog filter slope.` → Ratio oversampling cao hơn làm slope filter analog nhẹ hơn.
**Liên kết tiếng Hàn:** `오버샘플링 비율`.

## 15. decimation filter /ˌdesəˈmeɪʃən ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a digital filter that reduces sample rate while suppressing out-of-band content.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** filter số giảm sample rate và triệt content ngoài band.
**Grammar & collocations:** `decimation-filter passband` — passband; `remove shaped noise` — loại noise đã shape.
**Examples:** `The decimation filter preserved the signal band while discarding ultrasonic quantization noise.` → Filter decimation giữ signal band và bỏ quantization noise ultrasonic.
**Liên kết tiếng Hàn:** `데시메이션 필터`.

## 16. alias guardband /ˈeɪliəs ˈɡɑːrdbænd/
**Part of speech:** noun
**Core meaning (English):** frequency space reserved between a signal band and the first aliased region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng frequency dành giữa signal band và vùng alias đầu.
**Grammar & collocations:** `alias-guardband requirement` — requirement; `reserve transition bandwidth` — dành transition bandwidth.
**Examples:** `The alias guardband disappeared after the sample clock was divided.` → Guardband alias biến mất sau khi chia sample clock.
**Liên kết tiếng Hàn:** `앨리어스 가드밴드`.

## 17. anti-alias pole /ˈænti ˈeɪliəs poʊl/
**Part of speech:** noun
**Core meaning (English):** a filter pole placed to attenuate frequencies that would fold into the sampled band.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pole filter đặt để giảm frequency sẽ fold vào sampled band.
**Grammar & collocations:** `anti-alias-pole placement` — placement; `attenuate a folding component` — giảm component folding.
**Examples:** `The anti-alias pole was moved lower to protect the narrow-band measurement.` → Pole anti-alias được hạ để bảo vệ measurement narrow-band.
**Liên kết tiếng Hàn:** `안티앨리어스 극점`.

## 18. settling aperture /ˈsetlɪŋ ˈæpərtʃər/
**Part of speech:** noun
**Core meaning (English):** the time allowed for an input or internal node to settle before its value is accepted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** time cho input hoặc internal node settle trước khi value được accept.
**Grammar & collocations:** `settling-aperture constraint` — constraint; `extend acquisition time` — kéo dài acquisition time.
**Examples:** `The settling aperture was too short for the switched-capacitor input network.` → Aperture settling quá ngắn cho switched-capacitor input network.
**Liên kết tiếng Hàn:** `안정화 개구`.

## 19. conversion-noise floor /kənˈvɜːrʒən nɔɪz flɔːr/
**Part of speech:** noun
**Core meaning (English):** the residual spectral noise level imposed by the conversion process itself.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức spectral noise residual do chính conversion process áp.
**Grammar & collocations:** `conversion-noise-floor estimate` — estimate; `separate converter noise from source noise` — tách noise converter khỏi source.
**Examples:** `The conversion-noise floor became visible after the input source was heavily filtered.` → Floor noise-conversion lộ sau khi input source được filter mạnh.
**Liên kết tiếng Hàn:** `변환 잡음 바닥`.

## 20. spectral-bin leakage /ˈspektrəl bɪn ˈliːkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** spreading of a finite-record tone into neighboring FFT bins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tone record hữu hạn lan sang FFT bin lân cận.
**Grammar & collocations:** `spectral-bin-leakage correction` — correction; `choose a coherent record length` — chọn record length coherent.
**Examples:** `Spectral-bin leakage obscured the small spur beside the fundamental.` → Leakage bin-spectral che spur nhỏ cạnh fundamental.
**Liên kết tiếng Hàn:** `스펙트럼 빈 누설`.

## Review in context

**Aperture uncertainty**, **quantization residue**, a **missing-code test**, and **monotonicity error** establish converter limits. **Spurious-free dynamic range**, **total harmonic distortion**, an **intermodulation spur**, **clock feedthrough**, **sample-and-hold droop**, and **reference kickback** expose analog imperfections. **Calibration code density**, a **histogram test**, **dithering injection**, and an **oversampling ratio** guide the **decimation filter**, **alias guardband**, **anti-alias pole**, and **settling aperture**; the **conversion-noise floor** and **spectral-bin leakage** complete the spectrum audit.

**Bản dịch tiếng Việt:** **Aperture uncertainty**, **quantization residue**, **missing-code test** và **monotonicity error** xác lập giới hạn converter. **Spurious-free dynamic range**, **total harmonic distortion**, **intermodulation spur**, **clock feedthrough**, **sample-and-hold droop** và **reference kickback** làm lộ imperfection analog. **Calibration code density**, **histogram test**, **dithering injection** và **oversampling ratio** định hướng **decimation filter**, **alias guardband**, **anti-alias pole** và **settling aperture**; **conversion-noise floor** và **spectral-bin leakage** hoàn tất audit spectrum.
