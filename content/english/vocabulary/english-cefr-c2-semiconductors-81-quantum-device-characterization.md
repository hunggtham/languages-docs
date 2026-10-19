# C2 Vocabulary — Quantum-device characterization

This lesson measures quantum hardware quality through process reconstruction, fidelity metrics, preparation/readout errors, and coherence experiments.

Flow: **process tomography → quantum process fidelity → leakage lifetime → control fidelity → readout confusion matrix → SPAM error → state-preparation error → measurement assignment error → Ramsey decay → T1 time → T2 time → gate fidelity → average gate fidelity → entanglement fidelity → randomized-benchmarking decay → reference survival → coherence envelope → Ramsey fringe → spin echo → Hahn echo**.

## 1. process tomography /ˈprɑːses təˈmɑːɡrəfi/
**Part of speech:** noun
**Core meaning (English):** reconstruction of a quantum operation from measurements on a complete set of input states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tái dựng operation lượng tử từ phép đo trên tập input state đầy đủ.
**Grammar & collocations:** `process-tomography experiment` — thí nghiệm; `reconstruct a quantum channel` — tái dựng channel.
**Examples:** `Process tomography exposed a small coherent rotation left by the gate pulse.` → Tomography process lộ phép xoay coherent nhỏ còn lại từ gate pulse.
**Liên kết tiếng Hàn:** `과정 토모그래피`.

## 2. quantum process fidelity /ˈkwɑːntəm ˈprɑːses fəˈdeləti/
**Part of speech:** noun
**Core meaning (English):** a measure of how closely an implemented quantum channel matches its ideal target channel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thước đo mức channel lượng tử thực hiện khớp channel mục tiêu lý tưởng.
**Grammar & collocations:** `quantum-process-fidelity estimate` — ước tính; `compare implemented and ideal maps` — so sánh map.
**Examples:** `Quantum process fidelity increased after the phase calibration was updated.` → Fidelity process lượng tử tăng sau khi cập nhật calibration pha.
**Liên kết tiếng Hàn:** `양자 과정 충실도`.

## 3. leakage lifetime /ˈliːkɪdʒ ˈlaɪftaɪm/
**Part of speech:** noun
**Core meaning (English):** the average time population remains in an unwanted noncomputational level before decay or repumping.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian trung bình population ở mức ngoài computational trước decay hoặc repumping.
**Grammar & collocations:** `leakage-lifetime measurement` — phép đo; `monitor a shelving state` — theo dõi state shelving.
**Examples:** `The leakage lifetime determined how often the recovery pulse had to run.` → Lifetime leakage quyết định tần suất pulse recovery.
**Liên kết tiếng Hàn:** `누출 수명`.

## 4. control fidelity /kənˈtroʊl fəˈdeləti/
**Part of speech:** noun
**Core meaning (English):** the accuracy with which a physical control field performs its intended operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ chính xác của trường control vật lý khi thực hiện thao tác dự kiến.
**Grammar & collocations:** `control-fidelity benchmark` — benchmark; `calibrate a pulse envelope` — calibration envelope pulse.
**Examples:** `Control fidelity improved when the waveform was predistorted for the amplifier.` → Fidelity control tăng khi waveform được predistort cho amplifier.
**Liên kết tiếng Hàn:** `제어 충실도`.

## 5. readout confusion matrix /ˈriːdaʊt kənˈfjuːʒən ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a matrix listing the probabilities of assigning each measured state to every possible reported state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận liệt kê xác suất gán mỗi state đo được vào từng state báo cáo.
**Grammar & collocations:** `readout-confusion-matrix calibration` — calibration; `correct assignment bias` — sửa bias gán.
**Examples:** `The readout confusion matrix corrected bright-state leakage from the fluorescence image.` → Ma trận nhầm readout sửa leakage state sáng từ ảnh fluorescence.
**Liên kết tiếng Hàn:** `판독 혼동 행렬`.

## 6. SPAM error /ˌes piː eɪr ˈem ˈerər/
**Part of speech:** noun
**Core meaning (English):** combined error from state preparation and measurement rather than from the operation being tested.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error kết hợp từ chuẩn bị state và measurement, không phải operation đang test.
**Grammar & collocations:** `SPAM-error calibration` — calibration; `separate preparation from gate error` — tách error chuẩn bị khỏi gate.
**Examples:** `SPAM error was removed before comparing the two gate implementations.` → Error SPAM được loại trước khi so sánh hai cách thực hiện gate.
**Liên kết tiếng Hàn:** `SPAM 오류`.

## 7. state-preparation error /steɪt ˌprepəˈreɪʃən ˈerər/
**Part of speech:** noun
**Core meaning (English):** failure to initialize the quantum system in the intended starting state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không khởi tạo hệ lượng tử đúng initial state dự kiến.
**Grammar & collocations:** `state-preparation-error rate` — rate; `initialize a pure state` — khởi tạo state tinh khiết.
**Examples:** `State-preparation error biased the measured population before the gate began.` → Error chuẩn bị state làm bias population đo trước khi gate bắt đầu.
**Liên kết tiếng Hàn:** `상태 준비 오류`.

## 8. measurement assignment error /ˈmeʒərmənt əˈsaɪnmənt ˈerər/
**Part of speech:** noun
**Core meaning (English):** reporting the wrong discrete state for a measurement outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** báo sai discrete state cho một measurement outcome.
**Grammar & collocations:** `measurement-assignment-error matrix` — ma trận; `estimate false-positive probability` — ước tính false positive.
**Examples:** `Measurement assignment error was asymmetric between the bright and dark states.` → Error gán measurement bất đối xứng giữa state sáng và tối.
**Liên kết tiếng Hàn:** `측정 할당 오류`.

## 9. Ramsey decay /ˈræmzi dɪˈkeɪ/
**Part of speech:** noun
**Core meaning (English):** loss of Ramsey-fringe contrast as the free-evolution time between two pulses increases.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** contrast fringe Ramsey mất dần khi thời gian tự tiến hóa giữa hai pulse tăng.
**Grammar & collocations:** `Ramsey-decay curve` — đường cong; `fit a coherence time` — fit coherence time.
**Examples:** `Ramsey decay revealed slow magnetic drift that a single calibration missed.` → Decay Ramsey lộ drift từ chậm mà calibration đơn bỏ sót.
**Liên kết tiếng Hàn:** `램지 감쇠`.

## 10. T1 time /tiː wʌn taɪm/
**Part of speech:** noun
**Core meaning (English):** the characteristic time for population to relax from an excited state toward equilibrium.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian đặc trưng population relax từ trạng thái kích thích về cân bằng.
**Grammar & collocations:** `T1-time measurement` — phép đo; `fit an exponential relaxation` — fit relaxation mũ.
**Examples:** `The T1 time lengthened after lossy dielectric material was removed.` → T1 time dài hơn sau khi bỏ vật liệu dielectric loss.
**Liên kết tiếng Hàn:** `T1 시간`.

## 11. T2 time /tiː tuː taɪm/
**Part of speech:** noun
**Core meaning (English):** the characteristic time over which a coherent phase relationship decays.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian đặc trưng quan hệ pha coherent decay.
**Grammar & collocations:** `T2-time estimate` — ước tính; `measure transverse coherence` — đo coherence ngang.
**Examples:** `The T2 time was shorter than T1 because low-frequency phase noise remained.` → T2 time ngắn hơn T1 vì còn phase noise frequency thấp.
**Liên kết tiếng Hàn:** `T2 시간`.

## 12. gate fidelity /ɡeɪt fəˈdeləti/
**Part of speech:** noun
**Core meaning (English):** the closeness of an implemented gate to its ideal quantum operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức gate thực hiện gần operation lượng tử lý tưởng.
**Grammar & collocations:** `gate-fidelity estimate` — ước tính; `benchmark a two-qubit operation` — benchmark operation hai qubit.
**Examples:** `Gate fidelity increased when the pulse phase was corrected at both endpoints.` → Fidelity gate tăng khi sửa pha pulse ở cả hai đầu.
**Liên kết tiếng Hàn:** `게이트 충실도`.

## 13. average gate fidelity /ˈævərɪdʒ ɡeɪt fəˈdeləti/
**Part of speech:** noun
**Core meaning (English):** gate fidelity averaged over input states or an agreed ensemble of test states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fidelity gate lấy trung bình qua input state hoặc ensemble test được quy định.
**Grammar & collocations:** `average-gate-fidelity benchmark` — benchmark; `average over a state ensemble` — lấy trung bình ensemble.
**Examples:** `Average gate fidelity hid a small worst-case error on one phase-sensitive state.` → Fidelity gate trung bình che một error worst-case nhỏ trên state nhạy pha.
**Liên kết tiếng Hàn:** `평균 게이트 충실도`.

## 14. entanglement fidelity /ɪnˈtæŋɡəlmənt fəˈdeləti/
**Part of speech:** noun
**Core meaning (English):** fidelity of a channel evaluated by how well it preserves entanglement with a reference system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fidelity channel đánh giá qua khả năng giữ entanglement với hệ tham chiếu.
**Grammar & collocations:** `entanglement-fidelity bound` — bound; `preserve a reference correlation` — giữ tương quan tham chiếu.
**Examples:** `Entanglement fidelity exposed correlated noise that average population tests missed.` → Fidelity entanglement lộ noise tương quan mà test population trung bình bỏ sót.
**Liên kết tiếng Hàn:** `얽힘 충실도`.

## 15. randomized-benchmarking decay /ˈrændəmaɪzd ˈbentʃmɑːrkɪŋ dɪˈkeɪ/
**Part of speech:** noun
**Core meaning (English):** the decrease in sequence survival as the number of randomly chosen benchmark gates increases.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** survival sequence giảm khi số gate benchmark ngẫu nhiên tăng.
**Grammar & collocations:** `randomized-benchmarking-decay fit` — fit; `extract an error per Clifford` — trích error mỗi Clifford.
**Examples:** `Randomized-benchmarking decay stayed exponential across the tested sequence lengths.` → Decay benchmarking ngẫu nhiên giữ dạng mũ qua các sequence length test.
**Liên kết tiếng Hàn:** `무작위 벤치마킹 감쇠`.

## 16. reference survival /ˈrefərəns sərˈvaɪvəl/
**Part of speech:** noun
**Core meaning (English):** the probability that a known reference state remains unchanged after a test sequence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác suất reference state đã biết vẫn không đổi sau test sequence.
**Grammar & collocations:** `reference-survival curve` — đường cong; `compare against a no-op sequence` — so với sequence no-op.
**Examples:** `Reference survival separated hardware loss from the gate sequence under test.` → Survival reference tách loss hardware khỏi gate sequence đang test.
**Liên kết tiếng Hàn:** `기준 생존`.

## 17. coherence envelope /koʊˈhɪrəns ˈenvəloʊp/
**Part of speech:** noun
**Core meaning (English):** the time-dependent boundary describing how coherent oscillation amplitude decays.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biên theo thời gian mô tả amplitude dao động coherent decay.
**Grammar & collocations:** `coherence-envelope fit` — fit; `model nonexponential decay` — model decay không mũ.
**Examples:** `The coherence envelope showed a Gaussian shoulder from quasistatic noise.` → Envelope coherence cho thấy vai Gaussian từ noise quasistatic.
**Liên kết tiếng Hàn:** `결맞음 포락선`.

## 18. Ramsey fringe /ˈræmzi frɪndʒ/
**Part of speech:** noun
**Core meaning (English):** the oscillating transition signal produced when two coherent pulses are separated by free evolution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** signal transition dao động do hai pulse coherent tách bởi tự tiến hóa.
**Grammar & collocations:** `Ramsey-fringe phase` — pha; `fit a fringe center` — fit tâm fringe.
**Examples:** `The Ramsey fringe shifted when the probe laser was detuned.` → Fringe Ramsey dịch khi probe laser bị detune.
**Liên kết tiếng Hàn:** `램지 프린지`.

## 19. spin echo /spɪn ˈekoʊ/
**Part of speech:** noun
**Core meaning (English):** a refocusing sequence that reverses static or slowly varying dephasing accumulated during free evolution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi refocus đảo mất pha tĩnh hoặc đổi chậm tích lũy trong tự tiến hóa.
**Grammar & collocations:** `spin-echo sequence` — sequence; `refocus a phase ensemble` — refocus ensemble pha.
**Examples:** `Spin echo extended the measured coherence beyond the free-induction decay.` → Echo spin kéo coherence đo được vượt decay cảm ứng tự do.
**Liên kết tiếng Hàn:** `스핀 에코`.

## 20. Hahn echo /hɑːn ˈekoʊ/
**Part of speech:** noun
**Core meaning (English):** the basic two-pulse spin-echo sequence used to refocus static frequency offsets.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sequence spin-echo hai pulse cơ bản để refocus offset frequency tĩnh.
**Grammar & collocations:** `Hahn-echo decay` — decay; `insert a refocusing pi pulse` — chèn pi pulse refocus.
**Examples:** `Hahn echo removed the static detuning but not the fast phase noise.` → Echo Hahn loại detuning tĩnh nhưng không loại phase noise nhanh.
**Liên kết tiếng Hàn:** `한 에코`.

## Review in context

**Process tomography**, **quantum process fidelity**, **leakage lifetime**, and **control fidelity** characterize the channel, while a **readout confusion matrix**, **SPAM error**, **state-preparation error**, and **measurement assignment error** calibrate its boundary conditions. **Ramsey decay**, **T1 time**, **T2 time**, **gate fidelity**, **average gate fidelity**, and **entanglement fidelity** expose different failure modes. **Randomized-benchmarking decay** and **reference survival** test long sequences; a **coherence envelope**, **Ramsey fringe**, **spin echo**, and **Hahn echo** separate slow dephasing from fast noise.

**Bản dịch tiếng Việt:** **Process tomography**, **quantum process fidelity**, **leakage lifetime** và **control fidelity** đặc trưng channel, còn **readout confusion matrix**, **SPAM error**, **state-preparation error** và **measurement assignment error** calibration các điều kiện biên. **Ramsey decay**, **T1 time**, **T2 time**, **gate fidelity**, **average gate fidelity** và **entanglement fidelity** phơi bày các failure mode khác nhau. **Randomized-benchmarking decay** và **reference survival** test sequence dài; **coherence envelope**, **Ramsey fringe**, **spin echo** và **Hahn echo** tách mất pha chậm khỏi noise nhanh.
