# C2 Vocabulary — Process representations and calibration metrics

This lesson turns quantum-device characterization into mathematical representations, distance measures, and closed-loop calibration decisions.

Flow: **process matrix → Choi matrix → Pauli transfer matrix → Liouville representation → quantum channel tomography → error generator → diamond distance → trace distance → entanglement infidelity → unitarity measure → relaxation time → thermalization time → parameter drift → closed-loop calibration → in situ calibration → feedforward calibration → calibration residual → parameter sweep → model mismatch → Hamiltonian learning**.

## 1. process matrix /ˈprɑːses ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a matrix representation of a quantum operation that maps an input operator basis to output operators.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn ma trận của operation lượng tử map input operator basis sang output operator.
**Grammar & collocations:** `process-matrix reconstruction` — tái dựng; `represent a quantum channel` — biểu diễn channel.
**Examples:** `The process matrix showed a small off-diagonal term from coherent coupling.` → Ma trận process cho thấy term ngoài đường chéo nhỏ do coupling coherent.
**Liên kết tiếng Hàn:** `과정 행렬`.

## 2. Choi matrix /ˈtʃɔɪ ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a matrix formed by applying a quantum channel to one half of an entangled reference state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận tạo bằng cách áp channel lượng tử lên một nửa reference state vướng víu.
**Grammar & collocations:** `Choi-matrix positivity` — tính dương; `test complete positivity` — kiểm tra complete positivity.
**Examples:** `The Choi matrix made the channel's nonunital behavior visible.` → Ma trận Choi làm hành vi nonunital của channel lộ rõ.
**Liên kết tiếng Hàn:** `최 행렬`.

## 3. Pauli transfer matrix /ˈpaʊli trænsˈfɜːr ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a representation that describes how a channel transforms coefficients in a Pauli-operator basis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn mô tả channel biến đổi coefficient trong Pauli-operator basis.
**Grammar & collocations:** `Pauli-transfer-matrix element` — phần tử; `propagate an operator coefficient` — truyền coefficient.
**Examples:** `The Pauli transfer matrix separated dephasing from population loss.` → Ma trận truyền Pauli tách mất pha khỏi mất population.
**Liên kết tiếng Hàn:** `파울리 전달 행렬`.

## 4. Liouville representation /ˈljuːvɪl ˌreprɪzenˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a vectorized representation in which a quantum channel acts as a linear matrix on density-operator coordinates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn vector hóa trong đó channel tác động như ma trận tuyến tính lên tọa độ density-operator.
**Grammar & collocations:** `Liouville-representation propagator` — propagator; `vectorize a density matrix` — vector hóa density matrix.
**Examples:** `The Liouville representation simplified repeated noisy evolution in the simulator.` → Biểu diễn Liouville đơn giản hóa tiến hóa nhiễu lặp trong simulator.
**Liên kết tiếng Hàn:** `리우빌 표현`.

## 5. quantum channel tomography /ˈkwɑːntəm ˈtʃænəl təˈmɑːɡrəfi/
**Part of speech:** noun
**Core meaning (English):** experimental reconstruction of a quantum channel from input states, measurements, and statistical inference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tái dựng thực nghiệm channel lượng tử từ input state, measurement và suy luận thống kê.
**Grammar & collocations:** `quantum-channel-tomography data` — data; `infer a completely positive map` — suy map completely positive.
**Examples:** `Quantum channel tomography identified a small non-Markovian component.` → Tomography channel lượng tử xác định thành phần non-Markovian nhỏ.
**Liên kết tiếng Hàn:** `양자 채널 토모그래피`.

## 6. error generator /ˈerər ˈdʒenəreɪtər/
**Part of speech:** noun
**Core meaning (English):** an operator or model whose exponential describes the infinitesimal error accumulated by a quantum process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operator hoặc model mà exponential mô tả error vi phân tích lũy của process lượng tử.
**Grammar & collocations:** `error-generator expansion` — khai triển; `separate Hamiltonian and dissipative terms` — tách term Hamiltonian và dissipative.
**Examples:** `The error generator isolated a systematic Z rotation from stochastic loss.` → Generator error tách phép xoay Z hệ thống khỏi loss stochastic.
**Liên kết tiếng Hàn:** `오류 생성기`.

## 7. diamond distance /ˈdaɪəmənd ˈdɪstəns/
**Part of speech:** noun
**Core meaning (English):** a worst-case distance between two quantum channels that remains valid even when the input is entangled with an ancilla.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách worst-case giữa hai channel, vẫn đúng khi input entangle với ancilla.
**Grammar & collocations:** `diamond-distance bound` — bound; `optimize a worst-case channel error` — tối ưu error channel worst-case.
**Examples:** `Diamond distance gave a stricter guarantee than average state fidelity.` → Diamond distance cho guarantee chặt hơn fidelity state trung bình.
**Liên kết tiếng Hàn:** `다이아몬드 거리`.

## 8. trace distance /treɪs ˈdɪstəns/
**Part of speech:** noun
**Core meaning (English):** a distinguishability measure between two quantum states based on the trace norm of their difference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thước đo phân biệt hai state lượng tử dựa trên trace norm của hiệu.
**Grammar & collocations:** `trace-distance estimate` — ước tính; `bound state distinguishability` — giới hạn khả năng phân biệt state.
**Examples:** `Trace distance bounded how reliably the readout could distinguish the two states.` → Trace distance giới hạn độ tin cậy readout phân biệt hai state.
**Liên kết tiếng Hàn:** `트레이스 거리`.

## 9. entanglement infidelity /ɪnˈtæŋɡəlmənt ˌɪnfəˈdeləti/
**Part of speech:** noun
**Core meaning (English):** one minus entanglement fidelity, quantifying how far a channel is from preserving a reference entangled state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một trừ entanglement fidelity, định lượng channel lệch khỏi việc giữ reference entangled state.
**Grammar & collocations:** `entanglement-infidelity estimate` — ước tính; `bound average gate error` — giới hạn average gate error.
**Examples:** `Entanglement infidelity rose sharply when the idle interval was extended.` → Infidelity entanglement tăng mạnh khi idle interval kéo dài.
**Liên kết tiếng Hàn:** `얽힘 비충실도`.

## 10. unitarity measure /ˌjuːnɪˈterəti ˈmeʒər/
**Part of speech:** noun
**Core meaning (English):** a metric describing how much a noisy channel preserves the purity of traceless operators.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metric mô tả channel nhiễu giữ purity của traceless operator đến mức nào.
**Grammar & collocations:** `unitarity-measure estimate` — ước tính; `separate coherent and incoherent noise` — tách noise coherent và incoherent.
**Examples:** `The unitarity measure indicated that most error was coherent rather than depolarizing.` → Measure unitarity cho thấy phần lớn error là coherent chứ không depolarizing.
**Liên kết tiếng Hàn:** `유니터리성 측정`.

## 11. relaxation time /ˌriːlækˈseɪʃən taɪm/
**Part of speech:** noun
**Core meaning (English):** the characteristic time for a disturbed population or observable to return toward equilibrium.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian đặc trưng population hoặc observable bị perturb trở về gần cân bằng.
**Grammar & collocations:** `relaxation-time constant` — hằng số; `fit a return to equilibrium` — fit sự trở về cân bằng.
**Examples:** `The relaxation time shortened when the atom was coupled to the lossy reservoir.` → Relaxation time ngắn hơn khi atom ghép reservoir loss.
**Liên kết tiếng Hàn:** `이완 시간`.

## 12. thermalization time /ˌθɜːrmələˈzeɪʃən taɪm/
**Part of speech:** noun
**Core meaning (English):** the timescale over which a nonequilibrium system approaches local thermal equilibrium.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thang thời gian hệ ngoài cân bằng tiến tới cân bằng nhiệt cục bộ.
**Grammar & collocations:** `thermalization-time estimate` — ước tính; `compare with a quench duration` — so với duration quench.
**Examples:** `The thermalization time exceeded the planned observation window.` → Thermalization time dài hơn observation window dự kiến.
**Liên kết tiếng Hàn:** `열화 시간`.

## 13. parameter drift /pəˈræmətər drɪft/
**Part of speech:** noun
**Core meaning (English):** gradual change in a calibrated device parameter during operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi dần của parameter đã calibration trong quá trình vận hành.
**Grammar & collocations:** `parameter-drift monitor` — monitor; `track a changing gain` — theo dõi gain đổi.
**Examples:** `Parameter drift moved the optimal detuning over the afternoon.` → Drift parameter làm detuning tối ưu dịch trong buổi chiều.
**Liên kết tiếng Hàn:** `매개변수 드리프트`.

## 14. closed-loop calibration /kloʊzd luːp ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** calibration that repeatedly measures an output and adjusts the control until a target condition is reached.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** calibration lặp đo output và chỉnh control đến khi đạt điều kiện target.
**Grammar & collocations:** `closed-loop-calibration routine` — routine; `converge on a target phase` — hội tụ target pha.
**Examples:** `Closed-loop calibration held the gate phase despite slow thermal drift.` → Calibration vòng kín giữ pha gate dù drift nhiệt chậm.
**Liên kết tiếng Hàn:** `폐루프 교정`.

## 15. in situ calibration /ɪn ˈsɪtjuː ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** calibration performed in the same physical configuration and operating environment used for the measurement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** calibration thực hiện ngay trong cấu hình vật lý và môi trường vận hành của phép đo.
**Grammar & collocations:** `in-situ-calibration pulse` — pulse; `calibrate without removing the device` — calibration không tháo thiết bị.
**Examples:** `In situ calibration captured the cable phase shift that bench calibration missed.` → Calibration tại chỗ bắt phase shift cable mà calibration bench bỏ sót.
**Liên kết tiếng Hàn:** `현장 교정`.

## 16. feedforward calibration /ˈfiːdfɔːrwərd ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** calibration that predicts a control adjustment from a measured operating condition before feedback correction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** calibration dự đoán adjustment control từ điều kiện đo trước feedback correction.
**Grammar & collocations:** `feedforward-calibration table` — bảng; `precompensate a known shift` — bù trước dịch đã biết.
**Examples:** `Feedforward calibration corrected the frequency before the servo acquired lock.` → Calibration feedforward sửa frequency trước khi servo bắt khóa.
**Liên kết tiếng Hàn:** `피드포워드 교정`.

## 17. calibration residual /ˌkælɪˈbreɪʃən rɪˈzɪdʒuəl/
**Part of speech:** noun
**Core meaning (English):** the remaining discrepancy after a calibration model has been applied.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch còn lại sau khi áp model calibration.
**Grammar & collocations:** `calibration-residual plot` — đồ thị; `inspect an unmodeled trend` — kiểm tra trend chưa model.
**Examples:** `The calibration residual revealed a periodic disturbance from the cooling cycle.` → Residual calibration lộ disturbance tuần hoàn từ cycle làm lạnh.
**Liên kết tiếng Hàn:** `교정 잔차`.

## 18. parameter sweep /pəˈræmətər swiːp/
**Part of speech:** noun
**Core meaning (English):** systematic measurement while one control parameter is varied across a selected range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép đo có hệ thống khi một parameter control được quét qua range chọn.
**Grammar & collocations:** `parameter-sweep map` — bản đồ; `scan a detuning range` — quét range detuning.
**Examples:** `The parameter sweep located the broad plateau of high gate fidelity.` → Quét parameter định vị plateau rộng của fidelity gate cao.
**Liên kết tiếng Hàn:** `매개변수 스윕`.

## 19. model mismatch /ˈmɑːdəl mɪsˈmætʃ/
**Part of speech:** noun
**Core meaning (English):** disagreement between a model's assumptions and the behavior of the physical device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bất đồng giữa giả định model và hành vi thiết bị vật lý.
**Grammar & collocations:** `model-mismatch residual` — residual; `revise a noise assumption` — sửa giả định noise.
**Examples:** `Model mismatch explained why the fitted T2 time failed on longer sequences.` → Mismatch model giải thích vì sao T2 fit không đúng ở sequence dài.
**Liên kết tiếng Hàn:** `모델 불일치`.

## 20. Hamiltonian learning /ˌhæmɪlˈtoʊniən ˈlɜːrnɪŋ/
**Part of speech:** noun
**Core meaning (English):** inferring a quantum system's governing Hamiltonian from controlled experiments and measured dynamics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy Hamiltonian chi phối hệ lượng tử từ experiment control và dynamics đo được.
**Grammar & collocations:** `Hamiltonian-learning protocol` — protocol; `infer an interaction coefficient` — suy hệ số tương tác.
**Examples:** `Hamiltonian learning recovered a weak coupling that was absent from the design file.` → Học Hamiltonian khôi phục coupling yếu không có trong file thiết kế.
**Liên kết tiếng Hàn:** `해밀토니안 학습`.

## Review in context

The **process matrix**, **Choi matrix**, **Pauli transfer matrix**, and **Liouville representation** support **quantum channel tomography**; an **error generator**, **diamond distance**, **trace distance**, **entanglement infidelity**, and **unitarity measure** compare implementations. **Relaxation time**, **thermalization time**, and **parameter drift** motivate **closed-loop calibration**, **in situ calibration**, and **feedforward calibration**. A **calibration residual**, **parameter sweep**, **model mismatch**, and **Hamiltonian learning** reveal what the device model still fails to explain.

**Bản dịch tiếng Việt:** **Process matrix**, **Choi matrix**, **Pauli transfer matrix** và **Liouville representation** hỗ trợ **quantum channel tomography**; **error generator**, **diamond distance**, **trace distance**, **entanglement infidelity** và **unitarity measure** so sánh các implementation. **Relaxation time**, **thermalization time** và **parameter drift** thúc đẩy **closed-loop calibration**, **in situ calibration** và **feedforward calibration**. **Calibration residual**, **parameter sweep**, **model mismatch** và **Hamiltonian learning** cho thấy model thiết bị còn không giải thích được gì.
