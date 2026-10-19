# C2 Vocabulary — System identification and active calibration

This lesson turns quantum-device measurements into a model through uncertainty propagation, experiment design, Bayesian updates, and adaptive calibration.

Flow: **uncertainty propagation → bootstrap estimate → cross-validation error → holdout sequence → calibration witness → benchmark sequence → random Clifford → Clifford compilation → Pauli error rate → process infidelity → Hamiltonian parameter → coupling inference → spectral inference → Bayesian calibration → posterior uncertainty → experimental design → active calibration → adaptive experiment → design matrix → parameter covariance**.

## 1. uncertainty propagation /ʌnˈsɜːrtənti ˌprɑːpəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** calculation of how input uncertainties contribute to uncertainty in a derived result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính cách uncertainty đầu vào đóng góp vào uncertainty của kết quả suy ra.
**Grammar & collocations:** `uncertainty-propagation model` — model; `propagate covariance through a fit` — truyền covariance qua fit.
**Examples:** `Uncertainty propagation showed that timing noise dominated the final frequency estimate.` → Truyền uncertainty cho thấy timing noise chi phối ước tính frequency cuối.
**Liên kết tiếng Hàn:** `불확도 전파`.

## 2. bootstrap estimate /ˈbuːstræp ˈestəmeɪt/
**Part of speech:** noun
**Core meaning (English):** an estimate of a statistic's uncertainty obtained by resampling the observed data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính uncertainty của statistic bằng cách resample data đã quan sát.
**Grammar & collocations:** `bootstrap-estimate confidence band` — dải; `resample a measurement record` — resample record đo.
**Examples:** `The bootstrap estimate gave a wider uncertainty band than the analytic approximation.` → Ước tính bootstrap cho dải uncertainty rộng hơn xấp xỉ analytic.
**Liên kết tiếng Hàn:** `부트스트랩 추정`.

## 3. cross-validation error /ˌkrɔːs vælɪˈdeɪʃən ˈerər/
**Part of speech:** noun
**Core meaning (English):** prediction error measured on data withheld while fitting a model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error dự đoán đo trên data giữ lại khi fit model.
**Grammar & collocations:** `cross-validation-error curve` — đường cong; `test generalization` — kiểm tra tổng quát hóa.
**Examples:** `Cross-validation error increased when the noise model became too flexible.` → Error cross-validation tăng khi model noise quá linh hoạt.
**Liên kết tiếng Hàn:** `교차 검증 오류`.

## 4. holdout sequence /ˈhoʊldaʊt ˈsiːkwəns/
**Part of speech:** noun
**Core meaning (English):** a sequence reserved for evaluating a calibration or model after fitting is complete.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sequence giữ riêng để đánh giá calibration hoặc model sau khi fit xong.
**Grammar & collocations:** `holdout-sequence result` — kết quả; `evaluate unseen data` — đánh giá data chưa thấy.
**Examples:** `The holdout sequence revealed drift that the training shots had hidden.` → Sequence holdout lộ drift mà training shot che.
**Liên kết tiếng Hàn:** `홀드아웃 시퀀스`.

## 5. calibration witness /ˌkælɪˈbreɪʃən ˈwɪtnəs/
**Part of speech:** noun
**Core meaning (English):** a measured feature or reference state used to verify that a calibration remains valid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** feature đo hoặc reference state dùng xác minh calibration còn hợp lệ.
**Grammar & collocations:** `calibration-witness signal` — signal; `verify a control setting` — xác minh cài đặt control.
**Examples:** `The calibration witness was measured before and after the long experiment.` → Witness calibration được đo trước và sau experiment dài.
**Liên kết tiếng Hàn:** `교정 증인`.

## 6. benchmark sequence /ˈbentʃmɑːrk ˈsiːkwəns/
**Part of speech:** noun
**Core meaning (English):** a standardized operation sequence used to compare device performance across times or configurations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sequence operation chuẩn hóa dùng so hiệu năng thiết bị qua thời điểm hoặc cấu hình.
**Grammar & collocations:** `benchmark-sequence length` — length; `repeat a standardized circuit` — lặp circuit chuẩn.
**Examples:** `The benchmark sequence was short enough to run between calibration updates.` → Sequence benchmark đủ ngắn để chạy giữa các lần update calibration.
**Liên kết tiếng Hàn:** `벤치마크 시퀀스`.

## 7. random Clifford /ˈrændəm ˈklɪfərd/
**Part of speech:** noun
**Core meaning (English):** a randomly selected Clifford operation used in benchmarking or randomized control.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operation Clifford chọn ngẫu nhiên dùng trong benchmarking hoặc control random.
**Grammar & collocations:** `random-Clifford sequence` — sequence; `sample a unitary from a group` — lấy mẫu unitary từ group.
**Examples:** `Each random Clifford was compiled into the native gate set before execution.` → Mỗi Clifford random được compile vào native gate set trước khi chạy.
**Liên kết tiếng Hàn:** `무작위 클리퍼드`.

## 8. Clifford compilation /ˈklɪfərd kəmˈpaɪleɪʃən/
**Part of speech:** noun
**Core meaning (English):** translation of an abstract Clifford operation into the hardware's available native pulses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dịch Clifford operation trừu tượng thành native pulse hardware có.
**Grammar & collocations:** `Clifford-compilation table` — bảng; `decompose a target unitary` — phân rã unitary mục tiêu.
**Examples:** `Clifford compilation exposed an extra phase correction in the native implementation.` → Compilation Clifford lộ correction pha thêm trong implementation native.
**Liên kết tiếng Hàn:** `클리퍼드 컴파일`.

## 9. Pauli error rate /ˈpaʊli ˈerər reɪt/
**Part of speech:** noun
**Core meaning (English):** the probability assigned to a Pauli-type error in an effective noise representation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác suất gán cho Pauli error trong biểu diễn noise hiệu dụng.
**Grammar & collocations:** `Pauli-error-rate estimate` — ước tính; `separate X, Y, and Z faults` — tách lỗi X, Y, Z.
**Examples:** `The Pauli error rate for dephasing was twice the bit-flip rate.` → Rate Pauli error của mất pha gấp đôi bit-flip.
**Liên kết tiếng Hàn:** `파울리 오류율`.

## 10. process infidelity /ˈprɑːses ˌɪnfəˈdeləti/
**Part of speech:** noun
**Core meaning (English):** the amount by which an implemented process falls short of the ideal process according to a chosen fidelity definition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức process thực hiện thiếu so với process lý tưởng theo định nghĩa fidelity chọn.
**Grammar & collocations:** `process-infidelity budget` — ngân sách; `compare two channels` — so sánh hai channel.
**Examples:** `Process infidelity was concentrated in the final phase of the gate.` → Infidelity process tập trung ở pha cuối của gate.
**Liên kết tiếng Hàn:** `과정 비충실도`.

## 11. Hamiltonian parameter /ˌhæmɪlˈtoʊniən pəˈræmətər/
**Part of speech:** noun
**Core meaning (English):** a coefficient controlling an energy term or interaction in a system Hamiltonian.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** coefficient điều khiển term năng lượng hoặc tương tác trong Hamiltonian hệ.
**Grammar & collocations:** `Hamiltonian-parameter fit` — fit; `estimate an interaction strength` — ước tính strength tương tác.
**Examples:** `The Hamiltonian parameter shifted after the trap depth was changed.` → Parameter Hamiltonian đổi sau khi trap depth đổi.
**Liên kết tiếng Hàn:** `해밀토니안 매개변수`.

## 12. coupling inference /ˈkʌplɪŋ ˈɪnfərəns/
**Part of speech:** noun
**Core meaning (English):** estimation of an interaction strength from observed dynamics or correlated outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính strength tương tác từ dynamics hoặc outcome tương quan quan sát.
**Grammar & collocations:** `coupling-inference posterior` — posterior; `infer a hidden interaction` — suy tương tác ẩn.
**Examples:** `Coupling inference recovered a weak link between distant sites.` → Suy coupling khôi phục link yếu giữa các site xa.
**Liên kết tiếng Hàn:** `결합 추론`.

## 13. spectral inference /ˈspektrəl ˈɪnfərəns/
**Part of speech:** noun
**Core meaning (English):** estimating physical parameters from measured spectral positions, widths, or amplitudes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính parameter vật lý từ vị trí, width hoặc amplitude phổ đo được.
**Grammar & collocations:** `spectral-inference model` — model; `fit resonance parameters` — fit parameter resonance.
**Examples:** `Spectral inference separated a temperature shift from a true interaction shift.` → Suy phổ tách dịch nhiệt khỏi dịch tương tác thật.
**Liên kết tiếng Hàn:** `스펙트럼 추론`.

## 14. Bayesian calibration /ˈbeɪziən ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** calibration that combines prior parameter knowledge with new measurements to form a posterior estimate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** calibration gộp kiến thức parameter prior với phép đo mới để tạo posterior estimate.
**Grammar & collocations:** `Bayesian-calibration posterior` — posterior; `update a prior with data` — cập nhật prior bằng data.
**Examples:** `Bayesian calibration narrowed the uncertainty after only a few informative shots.` → Calibration Bayesian thu uncertainty sau vài shot nhiều thông tin.
**Liên kết tiếng Hàn:** `베이지안 교정`.

## 15. posterior uncertainty /pɑːˈstɪriər ʌnˈsɜːrtənti/
**Part of speech:** noun
**Core meaning (English):** uncertainty remaining in a parameter after prior information and observations have been combined.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** uncertainty còn lại của parameter sau khi gộp prior và observations.
**Grammar & collocations:** `posterior-uncertainty interval` — interval; `report a credible range` — báo range đáng tin.
**Examples:** `Posterior uncertainty fell sharply after the resonance scan was added.` → Uncertainty posterior giảm mạnh sau khi thêm scan resonance.
**Liên kết tiếng Hàn:** `사후 불확도`.

## 16. experimental design /ɪkˌsperəˈmentəl dɪˈzaɪn/
**Part of speech:** noun
**Core meaning (English):** choosing measurements and control settings to extract the most useful information under constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn phép đo và cài đặt control để lấy thông tin hữu ích nhất dưới ràng buộc.
**Grammar & collocations:** `experimental-design criterion` — tiêu chí; `maximize information per shot` — tối đa thông tin mỗi shot.
**Examples:** `Experimental design placed more shots near the steepest part of the resonance.` → Thiết kế experiment đặt nhiều shot gần phần dốc nhất của resonance.
**Liên kết tiếng Hàn:** `실험 설계`.

## 17. active calibration /ˈæktɪv ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** calibration that chooses its next measurement based on the information gained from previous measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** calibration chọn phép đo kế tiếp dựa trên thông tin thu từ phép đo trước.
**Grammar & collocations:** `active-calibration policy` — policy; `select the next informative setting` — chọn setting nhiều thông tin.
**Examples:** `Active calibration focused the next pulse near the uncertain phase boundary.` → Calibration active tập trung pulse kế gần boundary pha chưa chắc.
**Liên kết tiếng Hàn:** `능동 교정`.

## 18. adaptive experiment /əˈdæptɪv ɪkˈsperəmənt/
**Part of speech:** noun
**Core meaning (English):** an experiment whose settings change in response to the results already observed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** experiment đổi setting theo kết quả đã quan sát.
**Grammar & collocations:** `adaptive-experiment policy` — policy; `refine a search region` — tinh chỉnh vùng tìm kiếm.
**Examples:** `The adaptive experiment converged on the correct detuning with fewer measurements.` → Experiment adaptive hội tụ detuning đúng với ít phép đo hơn.
**Liên kết tiếng Hàn:** `적응형 실험`.

## 19. design matrix /dɪˈzaɪn ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a matrix listing the controlled settings or features used to estimate model parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận liệt kê setting control hoặc feature dùng ước tính parameter model.
**Grammar & collocations:** `design-matrix conditioning` — conditioning; `rank experimental settings` — xếp hạng setting experiment.
**Examples:** `The design matrix was poorly conditioned because the calibration points were too similar.` → Ma trận design conditioning kém vì các điểm calibration quá giống nhau.
**Liên kết tiếng Hàn:** `설계 행렬`.

## 20. parameter covariance /pəˈræmətər koʊˈveriəns/
**Part of speech:** noun
**Core meaning (English):** a matrix describing how uncertainties in fitted parameters vary together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận mô tả uncertainty của các parameter fit biến thiên cùng nhau.
**Grammar & collocations:** `parameter-covariance ellipse` — ellipse; `propagate correlated uncertainty` — truyền uncertainty tương quan.
**Examples:** `Parameter covariance showed that detuning and amplitude could not be estimated independently.` → Covariance parameter cho thấy detuning và amplitude không thể ước tính độc lập.
**Liên kết tiếng Hàn:** `매개변수 공분산`.

## Review in context

**Uncertainty propagation**, a **bootstrap estimate**, **cross-validation error**, and a **holdout sequence** evaluate a **calibration witness** and **benchmark sequence**. **Random Clifford** data and **Clifford compilation** yield a **Pauli error rate** and **process infidelity**; **Hamiltonian parameter**, **coupling inference**, and **spectral inference** update a **Bayesian calibration** with **posterior uncertainty**. **Experimental design**, **active calibration**, and an **adaptive experiment** choose informative settings, while a **design matrix** and **parameter covariance** reveal conditioning and correlated uncertainty.

**Bản dịch tiếng Việt:** **Uncertainty propagation**, **bootstrap estimate**, **cross-validation error** và **holdout sequence** đánh giá **calibration witness** và **benchmark sequence**. Data **random Clifford** và **Clifford compilation** tạo **Pauli error rate** và **process infidelity**; **Hamiltonian parameter**, **coupling inference** và **spectral inference** cập nhật **Bayesian calibration** với **posterior uncertainty**. **Experimental design**, **active calibration** và **adaptive experiment** chọn setting nhiều thông tin, còn **design matrix** và **parameter covariance** cho thấy conditioning và uncertainty tương quan.
