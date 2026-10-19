# C2 Vocabulary — Correlated noise and error mitigation

This lesson distinguishes physical noise correlations, leakage and reset faults, randomized control, and mitigation methods used before full fault tolerance.

Flow: **spatially correlated noise → temporally correlated noise → correlated noise → leakage channel → leakage detection → leakage syndrome → reset error → readout error → control error → stochastic error → coherent error → quasistatic error → noise tailoring → randomized compiling → Pauli twirling → zero-noise extrapolation → probabilistic error cancellation → error bias → Pauli frame randomization → error transfer matrix**.

## 1. spatially correlated noise /ˈspeɪʃəli ˈkɔːrəleɪtɪd nɔɪz/
**Part of speech:** noun
**Core meaning (English):** noise whose effects on separate qubits are statistically related because they share a spatial source or interaction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** noise trên các qubit khác nhau có liên hệ thống kê vì chung nguồn hoặc tương tác không gian.
**Grammar & collocations:** `spatially-correlated-noise model` — model; `couple neighboring errors` — ghép error lân cận.
**Examples:** `Spatially correlated noise defeated an independent-error decoder on the dense array.` → Noise tương quan không gian đánh bại decoder giả định error độc lập trên mảng dày.
**Liên kết tiếng Hàn:** `공간 상관 잡음`.

## 2. temporally correlated noise /ˈtempərəli ˈkɔːrəleɪtɪd nɔɪz/
**Part of speech:** noun
**Core meaning (English):** noise whose value remains statistically related across successive times or gate cycles.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** noise có giá trị liên hệ thống kê qua các thời điểm hoặc gate cycle liên tiếp.
**Grammar & collocations:** `temporally-correlated-noise spectrum` — phổ; `track drift across cycles` — theo dõi drift qua cycle.
**Examples:** `Temporally correlated noise made repeated calibration shots look deceptively consistent.` → Noise tương quan thời gian làm các shot calibration lặp trông nhất quán giả tạo.
**Liên kết tiếng Hàn:** `시간 상관 잡음`.

## 3. correlated noise /ˈkɔːrəleɪtɪd nɔɪz/
**Part of speech:** noun
**Core meaning (English):** noise in which separate error events share statistical dependence rather than occurring independently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** noise trong đó các event error phụ thuộc thống kê thay vì độc lập.
**Grammar & collocations:** `correlated-noise decoder` — decoder; `model joint error probability` — model xác suất error chung.
**Examples:** `Correlated noise required a decoder that considered common-mode disturbances.` → Noise tương quan cần decoder xét disturbance common-mode.
**Liên kết tiếng Hàn:** `상관 잡음`.

## 4. leakage channel /ˈliːkɪdʒ ˈtʃænəl/
**Part of speech:** noun
**Core meaning (English):** an unwanted path through which population leaves the computational subspace.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** path ngoài ý muốn khiến population rời computational subspace.
**Grammar & collocations:** `leakage-channel model` — model; `identify an external level` — xác định mức ngoài.
**Examples:** `The leakage channel was strongest during the resonant Rydberg pulse.` → Channel leakage mạnh nhất trong pulse Rydberg cộng hưởng.
**Liên kết tiếng Hàn:** `누출 채널`.

## 5. leakage detection /ˈliːkɪdʒ dɪˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** measurement that identifies population outside the intended computational basis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép đo xác định population ở ngoài computational basis dự kiến.
**Grammar & collocations:** `leakage-detection pulse` — pulse; `flag a noncomputational state` — báo state ngoài tính toán.
**Examples:** `Leakage detection preceded repumping so the lost population could be counted.` → Detect leakage diễn ra trước repumping để đếm population mất.
**Liên kết tiếng Hàn:** `누출 검출`.

## 6. leakage syndrome /ˈliːkɪdʒ ˈsɪndroʊm/
**Part of speech:** noun
**Core meaning (English):** a syndrome feature that indicates a qubit has entered a noncomputational level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** feature syndrome báo qubit đã vào mức ngoài computational.
**Grammar & collocations:** `leakage-syndrome flag` — flag; `separate leakage from Pauli error` — tách leakage khỏi Pauli error.
**Examples:** `The leakage syndrome triggered a special recovery sequence.` → Syndrome leakage kích chuỗi recovery đặc biệt.
**Liên kết tiếng Hàn:** `누출 신드롬`.

## 7. reset error /riːˈset ˈerər/
**Part of speech:** noun
**Core meaning (English):** failure to return a qubit or ancilla to its intended initial state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không đưa qubit hoặc ancilla về initial state dự kiến.
**Grammar & collocations:** `reset-error probability` — xác suất; `reinitialize a dirty ancilla` — khởi tạo lại ancilla bẩn.
**Examples:** `Reset error carried old syndrome information into the next round.` → Error reset mang syndrome cũ vào round tiếp.
**Liên kết tiếng Hàn:** `리셋 오류`.

## 8. readout error /ˈriːdaʊt ˈerər/
**Part of speech:** noun
**Core meaning (English):** an incorrect classification of a qubit or atom state during measurement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân loại sai trạng thái qubit hoặc atom khi đo.
**Grammar & collocations:** `readout-error matrix` — ma trận; `calibrate assignment probabilities` — hiệu chuẩn xác suất gán.
**Examples:** `Readout error was calibrated before the syndrome data entered the decoder.` → Error readout được calibration trước khi syndrome data vào decoder.
**Liên kết tiếng Hàn:** `판독 오류`.

## 9. control error /kənˈtroʊl ˈerər/
**Part of speech:** noun
**Core meaning (English):** deviation between an intended control pulse or field and the physical control actually delivered.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lệch giữa control pulse hoặc field dự kiến và control vật lý thực sự giao.
**Grammar & collocations:** `control-error budget` — ngân sách; `calibrate pulse amplitude` — calibration biên độ pulse.
**Examples:** `Control error shifted the gate angle even though the readout was perfect.` → Error control làm lệch góc gate dù readout hoàn hảo.
**Liên kết tiếng Hàn:** `제어 오류`.

## 10. stochastic error /stəˈkæstɪk ˈerər/
**Part of speech:** noun
**Core meaning (English):** an error whose occurrence is random and not represented by one fixed coherent transformation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error xảy ra ngẫu nhiên, không biểu diễn bằng một biến đổi coherent cố định.
**Grammar & collocations:** `stochastic-error model` — model; `sample a random fault` — lấy mẫu lỗi ngẫu nhiên.
**Examples:** `Stochastic error was reduced by averaging many independent experimental shots.` → Error stochastic giảm nhờ lấy trung bình nhiều shot độc lập.
**Liên kết tiếng Hàn:** `확률적 오류`.

## 11. coherent error /koʊˈhɪrənt ˈerər/
**Part of speech:** noun
**Core meaning (English):** a repeatable phase or amplitude miscalibration that acts like a consistent unwanted unitary operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lệch pha hoặc biên độ lặp lại, hoạt động như unitary ngoài ý muốn nhất quán.
**Grammar & collocations:** `coherent-error accumulation` — tích lũy; `twirl a systematic rotation` — twirl phép xoay hệ thống.
**Examples:** `Coherent error accumulated linearly until randomized compiling disrupted the pattern.` → Error coherent tích lũy tuyến tính đến khi randomized compiling phá pattern.
**Liên kết tiếng Hàn:** `결맞음 오류`.

## 12. quasistatic error /ˌkwɑːzɪˈstætɪk ˈerər/
**Part of speech:** noun
**Core meaning (English):** a slowly varying error that is nearly constant during one experiment but changes between experiments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error đổi chậm, gần như cố định trong một experiment nhưng đổi giữa các experiment.
**Grammar & collocations:** `quasistatic-error assumption` — giả định; `average over drift realizations` — lấy trung bình qua các realization drift.
**Examples:** `Quasistatic error produced a stable phase offset during each short circuit.` → Error quasistatic tạo offset pha ổn định trong mỗi circuit ngắn.
**Liên kết tiếng Hàn:** `준정적 오류`.

## 13. noise tailoring /nɔɪz ˈteɪlərɪŋ/
**Part of speech:** noun
**Core meaning (English):** deliberately transforming a noise process so that the remaining errors better match a code's strengths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến đổi có chủ ý quá trình noise để error còn lại hợp hơn với điểm mạnh của code.
**Grammar & collocations:** `noise-tailoring protocol` — protocol; `bias errors toward correctable channels` — bias error về channel sửa được.
**Examples:** `Noise tailoring converted a difficult coherent error into a simpler stochastic channel.` → Tailoring noise đổi coherent error khó thành channel stochastic đơn giản hơn.
**Liên kết tiếng Hàn:** `잡음 조정`.

## 14. randomized compiling /ˈrændəmaɪzd kəmˈpaɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** inserting random compiling gates so coherent control errors average into an easier stochastic noise model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chèn gate compiling ngẫu nhiên để coherent control error trung bình thành model noise stochastic dễ hơn.
**Grammar & collocations:** `randomized-compiling layer` — layer; `twirl coherent faults` — twirl lỗi coherent.
**Examples:** `Randomized compiling reduced worst-case error growth in the repeated circuit.` → Compiling ngẫu nhiên giảm tăng error worst-case trong circuit lặp.
**Liên kết tiếng Hàn:** `무작위 컴파일링`.

## 15. Pauli twirling /ˈpaʊli ˈtwɜːrlɪŋ/
**Part of speech:** noun
**Core meaning (English):** averaging an error channel over random Pauli conjugations to make its effective noise more diagonal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lấy trung bình channel error qua Pauli conjugation ngẫu nhiên để noise hiệu dụng diagonal hơn.
**Grammar & collocations:** `Pauli-twirling approximation` — xấp xỉ; `diagonalize an error channel` — diagonal hóa channel error.
**Examples:** `Pauli twirling made the simulator's error model easier for the decoder to consume.` → Twirling Pauli làm model error dễ cho decoder xử lý hơn.
**Liên kết tiếng Hàn:** `파울리 트와일링`.

## 16. zero-noise extrapolation /ˈzɪroʊ nɔɪz ɪkˌstræpəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** estimating an ideal result by measuring at several amplified noise levels and extrapolating to zero noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính kết quả lý tưởng bằng đo ở nhiều noise level khuếch đại rồi ngoại suy về zero.
**Grammar & collocations:** `zero-noise-extrapolation curve` — đường cong; `fold a circuit to amplify noise` — fold circuit để khuếch đại noise.
**Examples:** `Zero-noise extrapolation improved the expectation value without adding a full error-correcting code.` → Ngoại suy zero-noise cải thiện expectation value mà không thêm code sửa lỗi đầy đủ.
**Liên kết tiếng Hàn:** `제로 잡음 외삽`.

## 17. probabilistic error cancellation /ˌprɑːbəbɪˈlɪstɪk ˈerər ˌkænsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** mitigation that combines noisy operations with signed probabilistic mixtures whose average approximates an inverse noise channel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mitigation gộp operation nhiễu bằng mixture xác suất có dấu để xấp xỉ inverse noise channel.
**Grammar & collocations:** `probabilistic-error-cancellation overhead` — overhead; `sample a quasi-probability decomposition` — lấy mẫu phân rã quasi-probability.
**Examples:** `Probabilistic error cancellation reduced bias but required many circuit samples.` → Hủy error xác suất giảm bias nhưng cần nhiều sample circuit.
**Liên kết tiếng Hàn:** `확률적 오류 상쇄`.

## 18. error bias /ˈerər baɪəs/
**Part of speech:** noun
**Core meaning (English):** an imbalance in the rates or strengths of different error types.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sự không cân bằng về rate hoặc strength giữa các loại error.
**Grammar & collocations:** `error-bias estimate` — ước tính; `exploit dephasing bias` — tận dụng bias mất pha.
**Examples:** `The code was redesigned to exploit the device's strong error bias.` → Code được thiết kế lại để tận dụng bias error mạnh của thiết bị.
**Liên kết tiếng Hàn:** `오류 편향`.

## 19. Pauli frame randomization /ˈpaʊli freɪm ˌrændəmaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** random changes to the tracked Pauli frame that average coherent errors without changing the logical computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi ngẫu nhiên frame Pauli được theo dõi để trung bình coherent error mà không đổi tính toán logic.
**Grammar & collocations:** `Pauli-frame-randomization schedule` — lịch; `average frame-dependent errors` — trung bình error phụ thuộc frame.
**Examples:** `Pauli frame randomization reduced coherent drift in the long calibration circuit.` → Randomization frame Pauli giảm drift coherent trong circuit calibration dài.
**Liên kết tiếng Hàn:** `파울리 프레임 무작위화`.

## 20. error transfer matrix /ˈerər trænsˈfɜːr ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a matrix describing how errors at one stage propagate into observable errors at later stages.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận mô tả error ở stage này lan thành error quan sát được ở stage sau.
**Grammar & collocations:** `error-transfer-matrix model` — model; `propagate a calibration fault` — lan lỗi calibration.
**Examples:** `The error transfer matrix identified reset faults as the source of the later syndrome bias.` → Ma trận truyền error xác định lỗi reset là nguồn bias syndrome sau đó.
**Liên kết tiếng Hàn:** `오류 전달 행렬`.

## Review in context

**Spatially correlated noise**, **temporally correlated noise**, and general **correlated noise** can open a **leakage channel**; **leakage detection**, a **leakage syndrome**, **reset error**, **readout error**, and **control error** must be separated. **Stochastic error**, **coherent error**, and **quasistatic error** motivate **noise tailoring**, **randomized compiling**, and **Pauli twirling**. **Zero-noise extrapolation** and **probabilistic error cancellation** mitigate bias, while **error bias**, **Pauli frame randomization**, and an **error transfer matrix** guide the remaining correction strategy.

**Bản dịch tiếng Việt:** **Spatially correlated noise**, **temporally correlated noise** và **correlated noise** có thể mở **leakage channel**; **leakage detection**, **leakage syndrome**, **reset error**, **readout error** và **control error** cần được tách. **Stochastic error**, **coherent error** và **quasistatic error** thúc đẩy **noise tailoring**, **randomized compiling** và **Pauli twirling**. **Zero-noise extrapolation** và **probabilistic error cancellation** giảm bias, còn **error bias**, **Pauli frame randomization** và **error transfer matrix** định hướng chiến lược correction còn lại.
