# C2 Vocabulary — Quantum hardware benchmarking and calibration

This lesson follows quantum hardware from randomized performance tests through tomography, drift monitoring, and production calibration.

Flow: **randomized benchmarking → gate-set tomography → process fidelity → leakage benchmarking → interleaved benchmarking → cycle benchmarking → cross-entropy benchmarking → measurement fidelity → coherence tomography → noise spectroscopy → calibration target → drift monitor → control landscape → pulse calibration → spectator crosstalk → thermal population → reset fidelity → measurement assignment → device yield → calibration cadence**.

## 1. randomized benchmarking /ˈrændəmaɪzd ˈben(t)ʃmɑrkɪŋ/
**Part of speech:** noun
**Core meaning (English):** a statistical test that estimates average gate performance by running sequences of random operations and their inverses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test trung bình cổng bằng chuỗi ngẫu nhiên và nghịch đảo.
**Grammar & collocations:** `randomized-benchmarking decay` — decay; `estimate an error per gate` — ước tính.
**Examples:** `Randomized benchmarking showed that the new pulse reduced average two-qubit error.` → Benchmark ngẫu nhiên cho thấy xung mới giảm lỗi.
**Liên kết tiếng Hàn:** `무작위 벤치마킹`.

## 2. gate-set tomography /ɡeɪt set təˈmɒɡrəfi/
**Part of speech:** noun
**Core meaning (English):** a self-consistent reconstruction of the operations, state preparation, and measurements used by a gate set.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tái dựng nhất quán cổng, chuẩn bị state và phép đo.
**Grammar & collocations:** `gate-set-tomography model` — model; `fit an operational representation` — khớp.
**Examples:** `Gate-set tomography exposed a coherent phase error that average benchmarking had hidden.` → Tomography lộ lỗi phase nhất quán.
**Liên kết tiếng Hàn:** `게이트 집합 단층 촬영`.

## 3. process fidelity /ˈprɒses faɪˈdeləti/
**Part of speech:** noun
**Core meaning (English):** a measure of how closely an implemented quantum process matches its ideal target process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức độ process thật khớp process lý tưởng.
**Grammar & collocations:** `process-fidelity estimate` — estimate; `compare an implemented channel` — so sánh.
**Examples:** `Process fidelity fell when the gate was driven outside its calibrated amplitude range.` → Fidelity giảm ngoài biên amplitude.
**Liên kết tiếng Hàn:** `과정 충실도`.

## 4. leakage benchmarking /ˈliːkɪdʒ ˈben(t)ʃmɑrkɪŋ/
**Part of speech:** noun
**Core meaning (English):** measuring how often operations move population outside the intended computational subspace.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo tần suất trạng thái rò khỏi không gian tính toán.
**Grammar & collocations:** `leakage-benchmarking protocol` — protocol; `detect noncomputational population` — phát hiện.
**Examples:** `Leakage benchmarking found a rare excited level that ordinary error counts ignored.` → Benchmark rò phát hiện mức kích thích hiếm.
**Liên kết tiếng Hàn:** `누설 벤치마킹`.

## 5. interleaved benchmarking /ˌɪntərˈliːvd ˈben(t)ʃmɑrkɪŋ/
**Part of speech:** noun
**Core meaning (English):** benchmarking that inserts a specific gate into random sequences to estimate that gate's individual performance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chèn cổng mục tiêu vào chuỗi ngẫu nhiên để đo riêng.
**Grammar & collocations:** `interleaved-benchmarking estimate` — estimate; `isolate a target gate` — cô lập.
**Examples:** `Interleaved benchmarking isolated the controlled rotation from the processor's average error.` → Benchmark xen kẽ cô lập rotation điều khiển.
**Liên kết tiếng Hàn:** `교차 삽입 벤치마킹`.

## 6. cycle benchmarking /ˈsaɪkəl ˈben(t)ʃmɑrkɪŋ/
**Part of speech:** noun
**Core meaning (English):** a test that repeats a defined cycle of operations to estimate error under a realistic workload pattern.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lặp chu kỳ thao tác thực tế để ước tính lỗi.
**Grammar & collocations:** `cycle-benchmarking workload` — workload; `repeat a native cycle` — lặp.
**Examples:** `Cycle benchmarking revealed an error interaction that isolated gate tests missed.` → Benchmark chu kỳ lộ tương tác lỗi.
**Liên kết tiếng Hàn:** `사이클 벤치마킹`.

## 7. cross-entropy benchmarking /krɒs ˈentrəpi ˈben(t)ʃmɑrkɪŋ/
**Part of speech:** noun
**Core meaning (English):** comparing measured output strings with classically calculated probabilities to test a circuit's performance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so output đo với xác suất tính cổ điển.
**Grammar & collocations:** `cross-entropy-benchmarking score` — score; `sample an output distribution` — lấy mẫu.
**Examples:** `Cross-entropy benchmarking detected degradation after the control electronics were replaced.` → Benchmark cross-entropy phát hiện suy giảm sau thay điện tử.
**Liên kết tiếng Hàn:** `교차 엔트로피 벤치마킹`.

## 8. measurement fidelity /ˈmeʒərmənt faɪˈdeləti/
**Part of speech:** noun
**Core meaning (English):** the accuracy with which a measurement reports the state that was actually present.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ chính xác khi phép đo báo state thật.
**Grammar & collocations:** `measurement-fidelity matrix` — matrix; `classify a prepared state` — phân loại.
**Examples:** `Measurement fidelity fell for the excited state after the amplifier warmed.` → Fidelity đo giảm khi amplifier nóng.
**Liên kết tiếng Hàn:** `측정 충실도`.

## 9. coherence tomography /koʊˈhɪrəns təˈmɒɡrəfi/
**Part of speech:** noun
**Core meaning (English):** reconstructing how a quantum system's coherent behavior changes across controls, frequencies, or time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tái dựng coherence theo điều khiển, tần số hoặc thời gian.
**Grammar & collocations:** `coherence-tomography map` — map; `localize a dephasing source` — định vị.
**Examples:** `Coherence tomography localized dephasing near one control-frequency band.` → Tomography coherence định vị dephasing.
**Liên kết tiếng Hàn:** `결맞음 단층 촬영`.

## 10. noise spectroscopy /nɔɪz spɛkˈtrɒskəpi/
**Part of speech:** noun
**Core meaning (English):** characterizing environmental fluctuations by their frequency-dependent effect on a quantum system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích nhiễu môi trường theo tần số.
**Grammar & collocations:** `noise-spectroscopy profile` — profile; `infer a noise spectrum` — suy ra.
**Examples:** `Noise spectroscopy identified a narrow resonance that explained the repeated calibration failure.` → Phổ nhiễu lộ cộng hưởng hẹp.
**Liên kết tiếng Hàn:** `잡음 분광학`.

## 11. calibration target /ˌkælɪˈbreɪʃən ˈtɑrɡɪt/
**Part of speech:** noun
**Core meaning (English):** a measured behavior or parameter value that a calibration procedure is designed to reach.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị/hành vi mục tiêu của hiệu chuẩn.
**Grammar & collocations:** `calibration-target tolerance` — tolerance; `hit the target` — đạt.
**Examples:** `The calibration target required a narrower pulse bandwidth than the previous release.` → Mục tiêu cần bandwidth hẹp hơn.
**Liên kết tiếng Hàn:** `보정 목표`.

## 12. drift monitor /drɪft ˈmɒnɪtər/
**Part of speech:** noun
**Core meaning (English):** a measurement or service that detects gradual changes away from calibrated hardware behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép đo theo dõi lệch dần khỏi hiệu chuẩn.
**Grammar & collocations:** `drift-monitor alert` — alert; `trigger recalibration` — kích hoạt.
**Examples:** `The drift monitor triggered recalibration before the error rate crossed the production limit.` → Monitor kích hoạt hiệu chuẩn lại trước khi vượt giới hạn.
**Liên kết tiếng Hàn:** `드리프트 모니터`.

## 13. control landscape /kənˈtroʊl ˈlændskeɪp/
**Part of speech:** noun
**Core meaning (English):** the relationship between control parameters and the resulting quality or error of an operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản đồ tham số điều khiển và chất lượng/lỗi tạo ra.
**Grammar & collocations:** `control-landscape scan` — scan; `find a robust basin` — tìm vùng ổn định.
**Examples:** `The control landscape contained a broad optimum that tolerated small temperature changes.` → Landscape có optimum rộng chịu đổi nhiệt.
**Liên kết tiếng Hàn:** `제어 지형`.

## 14. pulse calibration /pʌls ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** adjusting the shape, timing, and amplitude of a control pulse to implement a desired operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh hình dạng, thời gian và amplitude của xung.
**Grammar & collocations:** `pulse-calibration routine` — routine; `fit a drive envelope` — khớp.
**Examples:** `Pulse calibration compensated for a small phase shift in the microwave line.` → Hiệu chuẩn xung bù phase shift.
**Liên kết tiếng Hàn:** `펄스 보정`.

## 15. spectator crosstalk /spɛkˈteɪtər ˈkrɔstɔk/
**Part of speech:** noun
**Core meaning (English):** unwanted influence on an uninvolved qubit caused by operating a neighboring qubit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ảnh hưởng ngoài ý muốn lên qubit đứng ngoài.
**Grammar & collocations:** `spectator-crosstalk map` — map; `measure idle-qubit response` — đo.
**Examples:** `Spectator crosstalk increased when the drive amplitude was raised to shorten the gate.` → Crosstalk tăng khi amplitude cao.
**Liên kết tiếng Hàn:** `관전자 누화`.

## 16. thermal population /ˈθɜrməl ˌpɒpjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** the distribution of a system across energy states caused by its temperature.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân bố trạng thái năng lượng do nhiệt độ.
**Grammar & collocations:** `thermal-population estimate` — estimate; `cool a qubit toward the ground state` — làm lạnh.
**Examples:** `Unexpected thermal population reduced initialization fidelity at the start of each circuit.` → Population nhiệt giảm fidelity khởi tạo.
**Liên kết tiếng Hàn:** `열 점유`.

## 17. reset fidelity /ˈriːset faɪˈdeləti/
**Part of speech:** noun
**Core meaning (English):** the probability that a reset operation leaves a qubit in its intended reference state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác suất reset đưa qubit về state chuẩn.
**Grammar & collocations:** `reset-fidelity test` — test; `initialize repeatedly` — khởi tạo lặp.
**Examples:** `Reset fidelity limited the number of algorithm shots that could be chained safely.` → Fidelity reset giới hạn số shot nối.
**Liên kết tiếng Hàn:** `리셋 충실도`.

## 18. measurement assignment /ˈmeʒərmənt əˈsaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** the classification of a physical measurement signal as a logical outcome such as zero or one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gán tín hiệu đo vật lý thành outcome logic.
**Grammar & collocations:** `measurement-assignment matrix` — matrix; `correct a classification bias` — sửa.
**Examples:** `Measurement assignment confused the two states when their readout clouds overlapped.` → Gán đo nhầm khi cloud chồng.
**Liên kết tiếng Hàn:** `측정 할당`.

## 19. device yield /dɪˈvaɪs jiːld/
**Part of speech:** noun
**Core meaning (English):** the proportion of fabricated devices that meet specified performance requirements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ thiết bị chế tạo đạt yêu cầu.
**Grammar & collocations:** `device-yield analysis` — analysis; `screen a fabricated wafer` — sàng lọc.
**Examples:** `Device yield improved after the fabrication team controlled one previously variable etch step.` → Yield tăng sau kiểm soát bước etch.
**Liên kết tiếng Hàn:** `소자 수율`.

## 20. calibration cadence /ˌkælɪˈbreɪʃən ˈkeɪdəns/
**Part of speech:** noun
**Core meaning (English):** the planned frequency at which hardware parameters are measured and recalibrated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhịp độ đo và hiệu chuẩn lại phần cứng.
**Grammar & collocations:** `calibration-cadence policy` — policy; `recalibrate between workloads` — hiệu chuẩn lại.
**Examples:** `A shorter calibration cadence improved stability but reduced available experiment time.` → Nhịp hiệu chuẩn ngắn tăng ổn định nhưng giảm thời gian thí nghiệm.
**Liên kết tiếng Hàn:** `보정 주기`.

## Review in context

Hardware characterization often starts with **randomized benchmarking**, **gate-set tomography**, and a **process fidelity** estimate. **Leakage benchmarking**, **interleaved benchmarking**, and **cycle benchmarking** reveal failure modes that averages can hide, while **cross-entropy benchmarking** tests larger circuits. **Measurement fidelity** and **coherence tomography** complement **noise spectroscopy**. Engineers define a **calibration target**, watch a **drift monitor**, and search the **control landscape** through **pulse calibration**. They map **spectator crosstalk**, measure **thermal population**, and verify **reset fidelity** and **measurement assignment**. Across fabrication lots, **device yield** and **calibration cadence** determine whether performance can be reproduced.

**Bản dịch tiếng Việt:** Đặc tính phần cứng thường bắt đầu bằng **benchmark ngẫu nhiên**, **tomography tập cổng** và ước tính **fidelity process**. **Benchmark rò rỉ**, **benchmark xen kẽ** và **benchmark chu kỳ** lộ kiểu lỗi mà trung bình che giấu, còn **benchmark cross-entropy** kiểm tra mạch lớn hơn. **Fidelity phép đo** và **tomography coherence** bổ sung cho **phổ nhiễu**. Kỹ sư xác định **mục tiêu hiệu chuẩn**, theo dõi **monitor drift** và tìm trong **bản đồ điều khiển** qua **hiệu chuẩn xung**. Họ lập bản đồ **crosstalk spectator**, đo **population nhiệt**, và xác minh **fidelity reset** cùng **gán phép đo**. Qua các lô chế tạo, **yield thiết bị** và **nhịp hiệu chuẩn** quyết định hiệu năng có tái lập được không.
