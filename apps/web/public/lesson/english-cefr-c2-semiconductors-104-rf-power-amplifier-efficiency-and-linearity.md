# C2 Vocabulary — RF power-amplifier efficiency and linearity

This lesson connects RF power delivery to efficiency, nonlinear distortion, thermal limits, and waveform-aware linearization.

Flow: **power-amplifier efficiency → drain efficiency → envelope tracking → crest-factor reduction → digital predistortion → memory polynomial → load-pull contour → stability circle → odd-mode instability → thermal compression → bias network droop → gate lag → transistor knee voltage → safe operating load → harmonic balance → large-signal S-parameter → gain expansion → amplitude-to-phase conversion → spectral regrowth → adjacent-channel leakage**.

## 1. power-amplifier efficiency /ˈpaʊər ˈæmpləfaɪər ɪˈfɪʃənsi/
**Part of speech:** noun
**Core meaning (English):** ratio of useful RF output power to the DC power consumed by an amplifier.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ số RF output power hữu ích với DC power amplifier tiêu thụ.
**Grammar & collocations:** `power-amplifier-efficiency curve` — curve; `maximize delivered power` — tối đa power truyền.
**Examples:** `Power-amplifier efficiency fell sharply at backed-off output power.` → Efficiency amplifier-power giảm mạnh ở output power back-off.
**Liên kết tiếng Hàn:** `전력 증폭기 효율`.

## 2. drain efficiency /dreɪn ɪˈfɪʃənsi/
**Part of speech:** noun
**Core meaning (English):** RF output power divided by the DC power delivered to a transistor drain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** RF output power chia cho DC power cấp vào transistor drain.
**Grammar & collocations:** `drain-efficiency peak` — peak; `bias a transistor for efficiency` — bias transistor cho efficiency.
**Examples:** `Drain efficiency peaked near the saturated load line.` → Efficiency drain đạt peak gần load line bão hòa.
**Liên kết tiếng Hàn:** `드레인 효율`.

## 3. envelope tracking /ˈenvəloʊ ˈtrækɪŋ/
**Part of speech:** noun
**Core meaning (English):** dynamically adjusting a power amplifier's supply to follow the signal envelope.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh supply amplifier power động để bám envelope signal.
**Grammar & collocations:** `envelope-tracking supply` — supply; `follow an amplitude trajectory` — bám trajectory amplitude.
**Examples:** `Envelope tracking improved efficiency during the burst's low-power intervals.` → Tracking envelope cải thiện efficiency trong interval power thấp của burst.
**Liên kết tiếng Hàn:** `포락선 추적`.

## 4. crest-factor reduction /krest ˈfæktər rɪˈdʌkʃən/
**Part of speech:** noun
**Core meaning (English):** processing that lowers the ratio of a waveform's peak power to its average power.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** processing giảm tỷ số peak power với average power của waveform.
**Grammar & collocations:** `crest-factor-reduction algorithm` — algorithm; `clip peaks carefully` — clip peak cẩn thận.
**Examples:** `Crest-factor reduction allowed the amplifier to operate closer to saturation.` → Reduction crest-factor cho amplifier chạy gần saturation hơn.
**Liên kết tiếng Hàn:** `크레스트 팩터 감소`.

## 5. digital predistortion /ˈdɪdʒɪtəl ˌpriːdɪˈstɔːrʃən/
**Part of speech:** noun
**Core meaning (English):** applying an inverse nonlinear correction before amplification so the combined path is more linear.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** áp correction phi tuyến ngược trước amplification để path gộp tuyến tính hơn.
**Grammar & collocations:** `digital-predistortion model` — model; `linearize a transmit chain` — tuyến tính hóa transmit chain.
**Examples:** `Digital predistortion reduced spectral regrowth without lowering the average output power.` → Predistortion digital giảm regrowth spectrum mà không hạ average output power.
**Liên kết tiếng Hàn:** `디지털 사전왜곡`.

## 6. memory polynomial /ˈmeməri ˌpɑːliˈnoʊmiəl/
**Part of speech:** noun
**Core meaning (English):** a nonlinear model that includes both current signal amplitude and delayed signal history.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model phi tuyến gồm amplitude signal hiện tại và lịch sử signal trễ.
**Grammar & collocations:** `memory-polynomial coefficient` — coefficient; `fit dynamic nonlinearity` — fit phi tuyến động.
**Examples:** `The memory polynomial captured heating effects that a static lookup table missed.` → Polynomial memory nắm effect heating mà lookup table tĩnh bỏ sót.
**Liên kết tiếng Hàn:** `메모리 다항식`.

## 7. load-pull contour /loʊd pʊl ˈkɑːntʊr/
**Part of speech:** noun
**Core meaning (English):** a contour map showing amplifier performance as the complex load impedance changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** map contour cho performance amplifier khi complex load impedance đổi.
**Grammar & collocations:** `load-pull-contour plot` — plot; `search an optimum impedance` — tìm impedance tối ưu.
**Examples:** `The load-pull contour revealed separate optima for efficiency and linearity.` → Contour pull-load lộ optimum khác nhau cho efficiency và linearity.
**Liên kết tiếng Hàn:** `로드 풀 등고선`.

## 8. stability circle /stəˈbɪləti ˈsɜːrkəl/
**Part of speech:** noun
**Core meaning (English):** a locus on an impedance chart separating stable and potentially unstable source or load conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** locus trên impedance chart tách condition stable và potentially unstable.
**Grammar & collocations:** `stability-circle chart` — chart; `avoid an unstable source impedance` — tránh source impedance unstable.
**Examples:** `The stability circle crossed the intended matching network at low frequency.` → Circle stability cắt matching network dự kiến ở frequency thấp.
**Liên kết tiếng Hàn:** `안정성 원`.

## 9. odd-mode instability /ɑːd moʊd ˌɪnstəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** oscillation risk associated with antisymmetric behavior in a balanced circuit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** risk oscillation do behavior bất đối xứng trong balanced circuit.
**Grammar & collocations:** `odd-mode-instability check` — check; `damp a differential mode` — giảm differential mode.
**Examples:** `Odd-mode instability appeared when one branch of the balanced amplifier was loaded differently.` → Instability mode-lẻ xuất hiện khi một branch amplifier balanced có load khác.
**Liên kết tiếng Hàn:** `홀수 모드 불안정`.

## 10. thermal compression /ˈθɜːrməl kəmˈpreʃən/
**Part of speech:** noun
**Core meaning (English):** gain reduction caused by self-heating during sustained high-power operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gain giảm do self-heating khi vận hành power cao kéo dài.
**Grammar & collocations:** `thermal-compression slope` — slope; `separate heating from electrical clipping` — tách heating khỏi clipping điện.
**Examples:** `Thermal compression reduced gain after the amplifier transmitted a long waveform.` → Compression thermal giảm gain sau khi amplifier transmit waveform dài.
**Liên kết tiếng Hàn:** `열 압축`.

## 11. bias network droop /ˈbaɪəs ˈnetwɜːrk druːp/
**Part of speech:** noun
**Core meaning (English):** decrease in bias voltage caused by current demand, impedance, or supply resistance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bias voltage giảm do current demand, impedance hoặc supply resistance.
**Grammar & collocations:** `bias-network-droop transient` — transient; `stiffen a gate supply` — làm cứng gate supply.
**Examples:** `Bias network droop shifted the amplifier's operating point during the pulse.` → Droop network-bias dịch operating point amplifier trong pulse.
**Liên kết tiếng Hàn:** `바이어스 네트워크 드룹`.

## 12. gate lag /ɡeɪt læɡ/
**Part of speech:** noun
**Core meaning (English):** delayed response of a transistor gate or control path to a changing drive signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** response trễ của transistor gate hoặc control path với drive signal đổi.
**Grammar & collocations:** `gate-lag transient` — transient; `track a rapid envelope` — bám envelope nhanh.
**Examples:** `Gate lag distorted the leading edge of the high-power burst.` → Lag gate làm méo leading edge của burst power cao.
**Liên kết tiếng Hàn:** `게이트 지연`.

## 13. transistor knee voltage /trænˈzɪstər niː ˈvoʊltɪdʒ/
**Part of speech:** noun
**Core meaning (English):** voltage near the boundary where a transistor leaves its preferred linear load-line region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** voltage gần boundary transistor rời vùng load-line tuyến tính ưu tiên.
**Grammar & collocations:** `transistor-knee-voltage estimate` — estimate; `avoid a hard saturation knee` — tránh knee saturation cứng.
**Examples:** `The transistor knee voltage limited the minimum supply for linear operation.` → Voltage knee transistor giới hạn supply tối thiểu cho operation tuyến tính.
**Liên kết tiếng Hàn:** `트랜지스터 무릎 전압`.

## 14. safe operating load /seɪf ˈɑːpəreɪtɪŋ loʊd/
**Part of speech:** noun
**Core meaning (English):** a load region in which voltage, current, temperature, and stability remain within safe limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng load nơi voltage, current, temperature và stability trong limit an toàn.
**Grammar & collocations:** `safe-operating-load boundary` — boundary; `plot a thermal limit` — plot thermal limit.
**Examples:** `The safe operating load narrowed at the highest ambient temperature.` → Load operating-safe hẹp hơn ở ambient temperature cao nhất.
**Liên kết tiếng Hàn:** `안전 동작 부하`.

## 15. harmonic balance /hɑːrˈmɑːnɪk ˈbæləns/
**Part of speech:** noun
**Core meaning (English):** a frequency-domain nonlinear analysis that solves interactions among harmonics in a periodic circuit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích phi tuyến frequency-domain giải tương tác harmonic trong circuit tuần hoàn.
**Grammar & collocations:** `harmonic-balance solution` — solution; `predict large-signal response` — dự đoán response large-signal.
**Examples:** `Harmonic balance predicted the third harmonic before the load-pull measurement.` → Balance harmonic dự đoán harmonic thứ ba trước measurement pull-load.
**Liên kết tiếng Hàn:** `고조파 평형`.

## 16. large-signal S-parameter /lɑːrdʒ ˈsɪɡnəl es pəˈræmətər/
**Part of speech:** noun
**Core meaning (English):** scattering parameters measured under a power level where the device is nonlinear.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scattering parameter đo ở power level khiến device phi tuyến.
**Grammar & collocations:** `large-signal-S-parameter data` — data; `model power-dependent behavior` — model behavior phụ thuộc power.
**Examples:** `Large-signal S-parameter data captured matching changes near compression.` → Data S-parameter large-signal nắm matching change gần compression.
**Liên kết tiếng Hàn:** `대신호 S-파라미터`.

## 17. gain expansion /ɡeɪn ɪkˈspænʃən/
**Part of speech:** noun
**Core meaning (English):** increase in apparent gain at a moderate drive level before compression dominates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gain apparent tăng ở drive vừa trước khi compression chi phối.
**Grammar & collocations:** `gain-expansion region` — region; `explain a nonlinear slope` — giải thích slope phi tuyến.
**Examples:** `Gain expansion preceded compression in the biased transistor sweep.` → Expansion gain xảy ra trước compression trong transistor sweep bias.
**Liên kết tiếng Hàn:** `이득 확장`.

## 18. amplitude-to-phase conversion /ˈæmplətuːd tə feɪz kənˈvɜːrʒən/
**Part of speech:** noun
**Core meaning (English):** conversion of amplitude variation into phase variation by a nonlinear device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** amplitude variation bị device phi tuyến chuyển thành phase variation.
**Grammar & collocations:** `amplitude-to-phase-conversion coefficient` — coefficient; `track phase modulation from power` — theo dõi phase modulation từ power.
**Examples:** `Amplitude-to-phase conversion widened the modulation error vector at high drive.` → Conversion amplitude-to-phase làm rộng modulation error vector ở drive cao.
**Liên kết tiếng Hàn:** `진폭-위상 변환`.

## 19. spectral regrowth /ˈspektrəl riːɡroʊθ/
**Part of speech:** noun
**Core meaning (English):** reappearance or growth of out-of-band spectral energy caused by nonlinear amplification.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** năng lượng phổ ngoài band xuất hiện hoặc tăng do amplification phi tuyến.
**Grammar & collocations:** `spectral-regrowth mask` — mask; `meet an emissions limit` — đạt emissions limit.
**Examples:** `Spectral regrowth violated the adjacent-channel mask after the crest factor was reduced.` → Regrowth spectral vi phạm mask channel kề sau khi giảm crest factor.
**Liên kết tiếng Hàn:** `스펙트럼 재성장`.

## 20. adjacent-channel leakage /əˈdʒeɪsənt ˈtʃænəl ˈliːkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** unwanted transmitted power spilling into neighboring frequency channels.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transmitted power không mong muốn tràn vào frequency channel lân cận.
**Grammar & collocations:** `adjacent-channel-leakage ratio` — ratio; `limit out-of-band power` — giới hạn power ngoài band.
**Examples:** `Adjacent-channel leakage improved after predistortion coefficients were retrained.` → Leakage channel-kề cải thiện sau khi retrain coefficient predistortion.
**Liên kết tiếng Hàn:** `인접 채널 누설`.

## Review in context

**Power-amplifier efficiency**, **drain efficiency**, **envelope tracking**, and **crest-factor reduction** balance power and waveform demands. **Digital predistortion** with a **memory polynomial** uses a **load-pull contour**, **stability circle**, and **odd-mode instability** check; **thermal compression**, **bias network droop**, **gate lag**, and **transistor knee voltage** define the **safe operating load**. **Harmonic balance**, **large-signal S-parameter**, **gain expansion**, **amplitude-to-phase conversion**, **spectral regrowth**, and **adjacent-channel leakage** complete linearity verification.

**Bản dịch tiếng Việt:** **Power-amplifier efficiency**, **drain efficiency**, **envelope tracking** và **crest-factor reduction** cân bằng yêu cầu power và waveform. **Digital predistortion** với **memory polynomial** dùng **load-pull contour**, kiểm tra **stability circle** và **odd-mode instability**; **thermal compression**, **bias network droop**, **gate lag** và **transistor knee voltage** xác định **safe operating load**. **Harmonic balance**, **large-signal S-parameter**, **gain expansion**, **amplitude-to-phase conversion**, **spectral regrowth** và **adjacent-channel leakage** hoàn tất kiểm tra linearity.
