# C2 Vocabulary — Quantum algorithms and variational optimization

This lesson follows quantum algorithms from ansatz design and circuit resources through noisy measurement and claims of computational advantage.

Flow: **variational ansatz → parameter-shift rule → barren plateau → quantum volume → circuit depth → gate noise → Grover iterate → eigenphase estimation → Hamiltonian simulation → Trotter step → quantum advantage claim → sampling complexity → oracle model → query complexity → solution approximation ratio → hybrid optimizer → finite-shot variance → readout mitigation → error mitigation → ansatz expressivity**.

## 1. variational ansatz /ˌveriˈeɪʃənəl ˈænˌsɑːts/
**Part of speech:** noun
**Core meaning (English):** a parameterized quantum circuit whose adjustable state is optimized for a computational objective.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch lượng tử có tham số được tối ưu cho mục tiêu.
**Grammar & collocations:** `variational-ansatz design` — design; `prepare a trial state` — chuẩn bị.
**Examples:** `The variational ansatz encoded the molecule before the classical optimizer changed its angles.` → Ansatz mã hóa phân tử trước khi optimizer đổi góc.
**Liên kết tiếng Hàn:** `변분 앤젯`.

## 2. parameter-shift rule /pəˈræmɪtər ʃɪft ruːl/
**Part of speech:** noun
**Core meaning (English):** a method for estimating a circuit-gradient component by evaluating shifted parameter values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính gradient bằng cách chạy mạch với tham số dịch chuyển.
**Grammar & collocations:** `parameter-shift-rule estimator` — estimator; `differentiate an expectation` — lấy đạo hàm.
**Examples:** `The parameter-shift rule estimated the gradient without exposing the circuit's internal amplitudes.` → Quy tắc shift ước tính gradient không cần biết amplitude bên trong.
**Liên kết tiếng Hàn:** `매개변수 이동 규칙`.

## 3. barren plateau /ˈberən pləˈtoʊ/
**Part of speech:** noun
**Core meaning (English):** a training landscape whose gradients become so small that optimizing a parameterized circuit is effectively impractical.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mặt phẳng gradient gần như bằng không, khó train.
**Grammar & collocations:** `barren-plateau diagnosis` — diagnosis; `vanish exponentially` — triệt tiêu.
**Examples:** `The deeper ansatz entered a barren plateau before the optimizer found a useful direction.` → Ansatz sâu rơi vào plateau trước khi optimizer tìm hướng.
**Liên kết tiếng Hàn:** `황량한 고원`.

## 4. quantum volume /ˈkwɒntəm ˈvɒljuːm/
**Part of speech:** noun
**Core meaning (English):** a benchmark combining qubit count, gate quality, connectivity, and circuit depth into one performance measure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** benchmark gộp số qubit, chất lượng cổng, kết nối và độ sâu.
**Grammar & collocations:** `quantum-volume benchmark` — benchmark; `report a highest power of two` — báo cáo.
**Examples:** `The processor's quantum volume rose after calibration improved two-qubit gates.` → Quantum volume tăng sau cải thiện cổng hai qubit.
**Liên kết tiếng Hàn:** `양자 볼륨`.

## 5. circuit depth /ˈsɜrkɪt depθ/
**Part of speech:** noun
**Core meaning (English):** the number of sequential gate layers in a quantum circuit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số lớp cổng chạy nối tiếp trong mạch.
**Grammar & collocations:** `circuit-depth limit` — limit; `compress gate layers` — nén.
**Examples:** `Circuit depth determined whether the algorithm finished before coherence was lost.` → Độ sâu quyết định thuật toán xong trước khi mất coherence.
**Liên kết tiếng Hàn:** `회로 깊이`.

## 6. gate noise /ɡeɪt nɔɪz/
**Part of speech:** noun
**Core meaning (English):** unwanted physical error introduced while a quantum gate is applied.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi vật lý phát sinh khi thực hiện cổng lượng tử.
**Grammar & collocations:** `gate-noise characterization` — characterization; `calibrate a two-qubit gate` — hiệu chuẩn.
**Examples:** `Gate noise accumulated faster than the simulation could correct it.` → Nhiễu cổng tích lũy nhanh hơn mô phỏng sửa được.
**Liên kết tiếng Hàn:** `게이트 잡음`.

## 7. Grover iterate /ˈɡruːvər ˈɪtəreɪt/
**Part of speech:** noun
**Core meaning (English):** one repeated search step combining an oracle phase mark with an amplitude-reflection operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một vòng lặp đánh dấu và khuếch đại đáp án trong tìm kiếm.
**Grammar & collocations:** `Grover-iterate count` — count; `amplify a marked state` — khuếch đại.
**Examples:** `The compiler selected the Grover iterate count to avoid rotating past the marked solution.` → Compiler chọn số vòng để không quay quá đáp án.
**Liên kết tiếng Hàn:** `그로버 반복`.

## 8. eigenphase estimation /ˈaɪɡənfeɪz ˌestəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** estimating the phase associated with an eigenvalue of a unitary operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính phase gắn với eigenvalue của toán tử unitary.
**Grammar & collocations:** `eigenphase-estimation circuit` — circuit; `resolve a phase` — phân giải.
**Examples:** `Eigenphase estimation converted repeated controlled operations into a spectral measurement.` → Ước tính eigenphase đổi phép controlled lặp thành đo phổ.
**Liên kết tiếng Hàn:** `고유 위상 추정`.

## 9. Hamiltonian simulation /ˌhæmɪlˈtoʊniən ˌsɪmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** reproducing the time evolution generated by a quantum Hamiltonian on a controllable quantum device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô phỏng tiến hóa thời gian do Hamiltonian tạo.
**Grammar & collocations:** `Hamiltonian-simulation algorithm` — algorithm; `evolve a quantum state` — tiến hóa.
**Examples:** `Hamiltonian simulation approximated how the material's state evolved after a sudden quench.` → Mô phỏng Hamiltonian xấp xỉ tiến hóa vật liệu.
**Liên kết tiếng Hàn:** `해밀토니안 시뮬레이션`.

## 10. Trotter step /ˈtrɒtər step/
**Part of speech:** noun
**Core meaning (English):** one short product-formula interval used to approximate evolution under noncommuting terms.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bước thời gian nhỏ xấp xỉ các hạng tử không giao hoán.
**Grammar & collocations:** `Trotter-step error` — error; `decompose an evolution operator` — phân rã.
**Examples:** `Reducing the Trotter step improved accuracy but increased the circuit count.` → Bước Trotter nhỏ tăng chính xác nhưng tăng số mạch.
**Liên kết tiếng Hàn:** `트로터 단계`.

## 11. quantum advantage claim /ˈkwɒntəm ədˈvæntɪdʒ kleɪm/
**Part of speech:** noun
**Core meaning (English):** a statement that a quantum method outperforms the best relevant classical alternative for a defined task.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tuyên bố lượng tử vượt phương án cổ điển phù hợp.
**Grammar & collocations:** `quantum-advantage-claim evidence` — evidence; `define a classical baseline` — xác định.
**Examples:** `The quantum advantage claim weakened when the comparison used an outdated classical baseline.` → Tuyên bố lợi thế yếu đi khi baseline cổ điển lỗi thời.
**Liên kết tiếng Hàn:** `양자 우위 주장`.

## 12. sampling complexity /ˈsæmplɪŋ kəmˈpleksəti/
**Part of speech:** noun
**Core meaning (English):** the number of circuit repetitions needed to estimate an output distribution or expectation reliably.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số lượt chạy cần để ước tính kết quả đủ tin.
**Grammar & collocations:** `sampling-complexity bound` — bound; `collect independent shots` — thu.
**Examples:** `Sampling complexity dominated the runtime even though each circuit execution was short.` → Độ phức tạp lấy mẫu chi phối thời gian.
**Liên kết tiếng Hàn:** `샘플링 복잡도`.

## 13. oracle model /ˈɔrəkəl ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** an abstract computational model that grants an algorithm access to a specified hidden function.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình giả định thuật toán được gọi hàm ẩn.
**Grammar & collocations:** `oracle-model assumption` — assumption; `query a black-box function` — truy vấn.
**Examples:** `The speedup held only under an oracle model that made function evaluation unusually cheap.` → Tăng tốc chỉ đúng khi oracle làm đánh giá hàm rẻ.
**Liên kết tiếng Hàn:** `오라클 모델`.

## 14. query complexity /ˈkwɪəri kəmˈpleksəti/
**Part of speech:** noun
**Core meaning (English):** the number of oracle or data-access calls required by an algorithm.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số lần gọi oracle hoặc truy cập dữ liệu cần thiết.
**Grammar & collocations:** `query-complexity lower bound` — lower bound; `count oracle calls` — đếm.
**Examples:** `Query complexity fell quadratically, but the implementation still required costly state preparation.` → Complexity giảm bậc hai nhưng chuẩn bị state vẫn đắt.
**Liên kết tiếng Hàn:** `쿼리 복잡도`.

## 15. solution approximation ratio /səˈluːʃən əˌprɒksəˈmeɪʃən ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the relationship between an algorithm's solution quality and the optimum for an optimization problem.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ chất lượng nghiệm so với nghiệm tối ưu.
**Grammar & collocations:** `solution-approximation-ratio guarantee` — guarantee; `bound the objective gap` — chặn.
**Examples:** `The benchmark reported a solution approximation ratio rather than only a lower energy.` → Benchmark báo tỷ lệ xấp xỉ nghiệm.
**Liên kết tiếng Hàn:** `해 근사 비율`.

## 16. hybrid optimizer /ˈhaɪbrɪd ˈɒptəmaɪzər/
**Part of speech:** noun
**Core meaning (English):** a classical optimization routine that updates parameters of a quantum circuit using measured outputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** optimizer cổ điển cập nhật tham số từ output đo lượng tử.
**Grammar & collocations:** `hybrid-optimizer loop` — loop; `update circuit parameters` — cập nhật.
**Examples:** `The hybrid optimizer rejected a noisy gradient and reused the previous trustworthy direction.` → Optimizer loại gradient nhiễu và dùng hướng cũ.
**Liên kết tiếng Hàn:** `하이브리드 최적화기`.

## 17. finite-shot variance /ˈfaɪnaɪt ʃɒt ˈveəriəns/
**Part of speech:** noun
**Core meaning (English):** statistical variation caused by estimating an expectation from a limited number of circuit repetitions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến thiên thống kê do số lượt chạy hữu hạn.
**Grammar & collocations:** `finite-shot-variance estimate` — estimate; `average repeated measurements` — lấy trung bình.
**Examples:** `Finite-shot variance made two nearly identical parameter settings appear different.` → Phương sai shot hữu hạn làm hai tham số giống nhau trông khác.
**Liên kết tiếng Hàn:** `유한 샷 분산`.

## 18. readout mitigation /ˈriːdaʊt ˌmɪtəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** correcting measurement bias introduced when physical qubits are classified as zero or one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sửa bias khi đọc qubit thành 0/1.
**Grammar & collocations:** `readout-mitigation matrix` — matrix; `calibrate assignment errors` — hiệu chuẩn.
**Examples:** `Readout mitigation corrected a bias toward zero in the measured distribution.` → Mitigation sửa bias về zero.
**Liên kết tiếng Hàn:** `판독 완화`.

## 19. error mitigation /ˈerər ˌmɪtəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** estimating or reducing the effect of noise without fully encoding the computation for fault-tolerant correction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm/ước tính tác động nhiễu mà chưa mã hóa đầy đủ.
**Grammar & collocations:** `error-mitigation extrapolation` — extrapolation; `cancel a noise contribution` — triệt.
**Examples:** `Error mitigation improved the expectation estimate but increased the number of circuit evaluations.` → Mitigation cải thiện estimate nhưng tăng số lượt chạy.
**Liên kết tiếng Hàn:** `오류 완화`.

## 20. ansatz expressivity /ˈænˌsɑːts ˌekspreˈsɪvəti/
**Part of speech:** noun
**Core meaning (English):** the range of quantum states a parameterized circuit can represent as its parameters vary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phạm vi trạng thái mà ansatz biểu diễn được.
**Grammar & collocations:** `ansatz-expressivity analysis` — analysis; `represent a target state` — biểu diễn.
**Examples:** `Greater ansatz expressivity helped represent the target state but worsened optimization stability.` → Expressivity lớn biểu diễn tốt nhưng làm tối ưu kém ổn định.
**Liên kết tiếng Hàn:** `앤젯 표현력`.

## Review in context

A **variational ansatz** is trained with a **parameter-shift rule**, but a **barren plateau** can flatten its gradients. Hardware metrics such as **quantum volume**, **circuit depth**, and **gate noise** determine whether a **Grover iterate**, **eigenphase estimation**, or **Hamiltonian simulation** is practical. Each **Trotter step** adds approximation and noise, so a **quantum advantage claim** must report **sampling complexity** and its **oracle model**. **Query complexity** alone is not enough; reviewers also inspect the **solution approximation ratio**. A **hybrid optimizer** faces **finite-shot variance**, while **readout mitigation** and broader **error mitigation** correct measured bias. Finally, **ansatz expressivity** must be balanced against trainability.

**Bản dịch tiếng Việt:** **Ansatz biến phân** được huấn luyện bằng **quy tắc dịch tham số**, nhưng **barren plateau** có thể làm phẳng gradient. Các chỉ số phần cứng như **quantum volume**, **độ sâu mạch** và **nhiễu cổng** quyết định **vòng lặp Grover**, **ước tính eigenphase** hoặc **mô phỏng Hamiltonian** có thực tế không. Mỗi **bước Trotter** thêm xấp xỉ và nhiễu, nên **tuyên bố lợi thế lượng tử** phải báo cáo **độ phức tạp lấy mẫu** và **mô hình oracle**. Chỉ **độ phức tạp truy vấn** là chưa đủ; người đánh giá cũng kiểm tra **tỷ lệ xấp xỉ nghiệm**. **Optimizer lai** đối mặt **phương sai shot hữu hạn**, còn **giảm nhiễu đọc** và **giảm lỗi** rộng hơn sửa bias đo. Cuối cùng, **khả năng biểu đạt ansatz** phải cân bằng với khả năng huấn luyện.
