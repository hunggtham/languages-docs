# C2 Vocabulary — Robotic system identification and uncertainty-aware control

This lesson moves from informative experiments to controllers that remain safe when the model is imperfect. The network is **persistent excitation → regressor matrix → online system identification → grey-box model → state observer → high-gain observer → sliding-mode observer → disturbance observer → unknown-input observer → moving-horizon estimation → maximum-likelihood estimate → Bayesian system identification → Gaussian-process dynamics → residual dynamics → model discrepancy → uncertainty tube → robust invariant set → tube model-predictive control → constraint tightening → chance-constrained control**.

## 1. persistent excitation /pərˈsɪstənt ˌɛkˌsaɪˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a sufficiently varied input signal that makes unknown system parameters observable from the resulting data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** input đủ đa dạng để dữ liệu bộc lộ parameter chưa biết; tín hiệu phải “kích thích” nhiều hướng.
**Grammar & collocations:** `persistent-excitation condition` — điều kiện; `design an informative maneuver` — thiết kế maneuver giàu thông tin.
**Examples:** `The calibration sweep provided persistent excitation across the arm’s operating range.` → Sweep calibration tạo persistent excitation trên toàn range hoạt động của arm.
**Liên kết tiếng Hàn:** `지속적 여기`.

## 2. regressor matrix /rɪˈɡresər ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a matrix whose rows contain measured features used to estimate unknown model parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận có các hàng là feature đo được, dùng để estimate parameter model chưa biết.
**Grammar & collocations:** `regressor-matrix rank` — rank; `assemble a data matrix` — lập data matrix.
**Examples:** `A poorly excited motion made the regressor matrix nearly singular.` → Motion kích thích kém khiến regressor matrix gần singular.
**Liên kết tiếng Hàn:** `회귀자 행렬`.

## 3. online system identification /ˈɑːnlaɪn ˈsɪstəm aɪˌdentəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** estimating a system model continuously while the system is operating.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimate model liên tục ngay trong lúc system đang chạy.
**Grammar & collocations:** `online-system-identification update` — update; `track changing dynamics` — theo dõi dynamics thay đổi.
**Examples:** `Online system identification updated the payload estimate after each lift.` → Online system identification cập nhật estimate payload sau mỗi lần nâng.
**Liên kết tiếng Hàn:** `온라인 시스템 식별`.

## 4. grey-box model /ɡreɪ bɑːks mɑːdəl/
**Part of speech:** noun
**Core meaning (English):** a model that combines known physical structure with parameters or effects learned from data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model kết hợp cấu trúc vật lý đã biết với parameter hoặc effect học từ dữ liệu.
**Grammar & collocations:** `grey-box-model parameter` — parameter; `retain known mechanics` — giữ cơ học đã biết.
**Examples:** `The grey-box model kept the rigid-body equations but learned the gearbox friction.` → Grey-box model giữ phương trình rigid-body nhưng học friction của gearbox.
**Liên kết tiếng Hàn:** `회색 상자 모델`.

## 5. state observer /steɪt əbˈzɜːrvər/
**Part of speech:** noun
**Core meaning (English):** an estimator that reconstructs internal system states from inputs and available measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator tái tạo state bên trong từ input và measurement có sẵn.
**Grammar & collocations:** `state-observer gain` — gain; `reconstruct an unmeasured velocity` — tái tạo velocity không đo.
**Examples:** `The state observer reconstructed joint velocity from position samples and motor current.` → State observer tái tạo joint velocity từ sample position và motor current.
**Liên kết tiếng Hàn:** `상태 관측기`.

## 6. high-gain observer /haɪ ɡeɪn əbˈzɜːrvər/
**Part of speech:** noun
**Core meaning (English):** an observer with deliberately large correction gains so estimation errors converge quickly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** observer dùng gain correction lớn để estimation error hội tụ nhanh.
**Grammar & collocations:** `high-gain-observer noise sensitivity` — độ nhạy noise; `tune the injection gain` — chỉnh gain injection.
**Examples:** `The high-gain observer reacted quickly but amplified encoder noise at rest.` → High-gain observer phản ứng nhanh nhưng khuếch đại encoder noise khi đứng yên.
**Liên kết tiếng Hàn:** `고이득 관측기`.

## 7. sliding-mode observer /ˈslaɪdɪŋ moʊd əbˈzɜːrvər/
**Part of speech:** noun
**Core meaning (English):** an observer that drives estimation errors onto a designed sliding surface despite certain model uncertainties.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** observer kéo estimation error vào sliding surface đã thiết kế dù model có uncertainty nhất định.
**Grammar & collocations:** `sliding-mode-observer injection` — injection; `reject matched uncertainty` — loại uncertainty cùng kênh.
**Examples:** `The sliding-mode observer preserved a useful velocity estimate during cable friction changes.` → Sliding-mode observer vẫn giữ velocity estimate hữu ích khi friction cáp thay đổi.
**Liên kết tiếng Hàn:** `슬라이딩 모드 관측기`.

## 8. disturbance observer /dɪˈstɜːrbəns əbˈzɜːrvər/
**Part of speech:** noun
**Core meaning (English):** an estimator that infers external forces or unmodeled effects from discrepancies in system motion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator suy external force hoặc effect chưa model từ sai lệch trong motion.
**Grammar & collocations:** `disturbance-observer bandwidth` — bandwidth; `reject a load variation` — loại biến thiên tải.
**Examples:** `The disturbance observer compensated for a tool cable pulling sideways.` → Disturbance observer bù lực kéo ngang của cáp tool.
**Liên kết tiếng Hàn:** `외란 관측기`.

## 9. unknown-input observer /ʌnˈnoʊn ˈɪnpʊt əbˈzɜːrvər/
**Part of speech:** noun
**Core meaning (English):** an observer designed to estimate states even when some inputs are not measured.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** observer estimate state dù một số input không được đo.
**Grammar & collocations:** `unknown-input-observer condition` — điều kiện; `decouple an unmeasured input` — tách ảnh hưởng input không đo.
**Examples:** `The unknown-input observer tracked position despite an uninstrumented contact force.` → Unknown-input observer theo dõi position dù contact force không được instrument.
**Liên kết tiếng Hàn:** `미지 입력 관측기`.

## 10. moving-horizon estimation /ˈmuːvɪŋ həˈraɪzən ˌestəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** state and parameter estimation that repeatedly optimizes over a recent sliding window of measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimate state và parameter bằng cách tối ưu lặp trên cửa sổ measurement gần đây.
**Grammar & collocations:** `moving-horizon-estimation window` — cửa sổ; `receding-window optimizer` — optimizer cửa sổ trượt.
**Examples:** `Moving-horizon estimation rejected one corrupted encoder sample without losing the trajectory.` → Moving-horizon estimation loại một encoder sample hỏng mà không mất trajectory.
**Liên kết tiếng Hàn:** `이동 지평선 추정`.

## 11. maximum-likelihood estimate /ˈmæksəməm ˈlaɪklihʊd ˈestəmət/
**Part of speech:** noun
**Core meaning (English):** a parameter value that makes the observed data most probable under a chosen statistical model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị parameter khiến dữ liệu quan sát có xác suất cao nhất dưới model thống kê chọn trước.
**Grammar & collocations:** `maximum-likelihood-estimate bias` — bias; `fit a noise model` — fit noise model.
**Examples:** `The maximum-likelihood estimate placed the friction coefficient above the nominal value.` → Maximum-likelihood estimate đặt friction coefficient cao hơn giá trị nominal.
**Liên kết tiếng Hàn:** `최대 우도 추정치`.

## 12. Bayesian system identification /ˈbeɪziən ˈsɪstəm aɪˌdentəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** system modeling that updates a probability distribution over parameters as new data arrive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** modeling cập nhật phân phối xác suất của parameter khi dữ liệu mới đến.
**Grammar & collocations:** `Bayesian-system-identification posterior` — posterior; `update a parameter belief` — cập nhật niềm tin về parameter.
**Examples:** `Bayesian system identification widened the posterior after a noisy free-swing test.` → Bayesian system identification mở rộng posterior sau test free-swing nhiều noise.
**Liên kết tiếng Hàn:** `베이지안 시스템 식별`.

## 13. Gaussian-process dynamics /ɡaʊsiən ˈprɑːses daɪˈnæmɪks/
**Part of speech:** noun
**Core meaning (English):** a probabilistic dynamics model that predicts both a state transition and uncertainty using a Gaussian process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model dynamics xác suất dự đoán state transition cùng uncertainty bằng Gaussian process.
**Grammar & collocations:** `Gaussian-process-dynamics posterior` — posterior; `propagate predictive variance` — truyền predictive variance.
**Examples:** `Gaussian-process dynamics predicted larger variance near the untested joint limit.` → Gaussian-process dynamics dự đoán variance lớn hơn gần joint limit chưa test.
**Liên kết tiếng Hàn:** `가우시안 프로세스 동역학`.

## 14. residual dynamics /rɪˈzɪdʒuəl daɪˈnæmɪks/
**Part of speech:** noun
**Core meaning (English):** the part of system behavior left unexplained after a baseline dynamics model is applied.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần behavior còn lại sau khi baseline dynamics đã giải thích phần chính.
**Grammar & collocations:** `residual-dynamics model` — model; `learn the unexplained term` — học term chưa giải thích.
**Examples:** `The learned residual dynamics captured cable drag that the rigid model ignored.` → Residual dynamics học được cable drag mà rigid model bỏ qua.
**Liên kết tiếng Hàn:** `잔차 동역학`.

## 15. model discrepancy /ˈmɑːdəl dɪˈskrepənsi/
**Part of speech:** noun
**Core meaning (English):** a systematic difference between a model’s predictions and the behavior of the real system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch có hệ thống giữa dự đoán model và behavior system thật.
**Grammar & collocations:** `model-discrepancy term` — term; `quantify structural error` — định lượng structural error.
**Examples:** `The validation run exposed model discrepancy near the flexible wrist joint.` → Validation run làm lộ model discrepancy gần joint cổ tay mềm.
**Liên kết tiếng Hàn:** `모델 불일치`.

## 16. uncertainty tube /ʌnˈsɜːrtənti tuːb/
**Part of speech:** noun
**Core meaning (English):** a bounded tube of possible state trajectories surrounding a nominal predicted path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “ống” giới hạn chứa các trajectory state có thể xảy ra quanh path nominal.
**Grammar & collocations:** `uncertainty-tube radius` — bán kính; `bound the prediction set` — giới hạn prediction set.
**Examples:** `The uncertainty tube widened after the camera lost a landmark.` → Uncertainty tube rộng ra sau khi camera mất landmark.
**Liên kết tiếng Hàn:** `불확실성 튜브`.

## 17. robust invariant set /roʊˈbʌst ɪnˈveriənt set/
**Part of speech:** noun
**Core meaning (English):** a set of states that remains safe and contained under allowed disturbances and feedback actions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập state vẫn an toàn và nằm trong tập dưới disturbance và feedback được phép.
**Grammar & collocations:** `robust-invariant-set computation` — phép tính; `prove recursive safety` — chứng minh safety đệ quy.
**Examples:** `The terminal state was chosen inside a robust invariant set for reliable recovery.` → Terminal state được chọn trong robust invariant set để recovery đáng tin.
**Liên kết tiếng Hàn:** `강인 불변 집합`.

## 18. tube model-predictive control /tuːb ˈmɑːdəl prɪˈdɪktɪv kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** predictive control that steers a nominal path while feedback keeps uncertain states inside a bounded tube.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** predictive control lái path nominal còn feedback giữ state uncertain bên trong tube giới hạn.
**Grammar & collocations:** `tube-model-predictive-control law` — luật control; `tighten the nominal plan` — làm chặt plan nominal.
**Examples:** `Tube model-predictive control kept the mobile base inside the aisle despite wheel-slip uncertainty.` → Tube model-predictive control giữ mobile base trong lối đi dù có uncertainty do wheel slip.
**Liên kết tiếng Hàn:** `튜브 모델 예측 제어`.

## 19. constraint tightening /kənˈstreɪnt ˈtaɪtənɪŋ/
**Part of speech:** noun
**Core meaning (English):** shrinking nominal constraints to leave room for uncertainty and feedback error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thu nhỏ constraint nominal để chừa chỗ cho uncertainty và feedback error.
**Grammar & collocations:** `constraint-tightening margin` — margin; `shrink a corridor constraint` — thu hẹp corridor constraint.
**Examples:** `Constraint tightening kept the predicted gripper path away from the shelf by a safety buffer.` → Constraint tightening giữ predicted path của gripper cách kệ bằng safety buffer.
**Liên kết tiếng Hàn:** `제약 강화`.

## 20. chance-constrained control /tʃæns kənˈstreɪnd kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** control that requires a safety or performance condition to hold with a specified probability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control yêu cầu safety hoặc performance condition đúng với xác suất đã định.
**Grammar & collocations:** `chance-constrained-control formulation` — formulation; `set a collision probability` — đặt xác suất collision.
**Examples:** `Chance-constrained control accepted a narrow passage only below the allowed collision probability.` → Chance-constrained control chỉ chấp nhận lối hẹp khi xác suất collision dưới mức cho phép.
**Liên kết tiếng Hàn:** `확률 제약 제어`.

## Review in context

An experiment with **persistent excitation** builds a **regressor matrix** for **online system identification** and a **grey-box model**. A **state observer**, **high-gain observer**, **sliding-mode observer**, **disturbance observer**, or **unknown-input observer** reconstructs what sensors cannot see; **moving-horizon estimation** then refines the window. A **maximum-likelihood estimate** and **Bayesian system identification** quantify parameter belief, while **Gaussian-process dynamics**, **residual dynamics**, and **model discrepancy** describe what the physics misses. An **uncertainty tube**, **robust invariant set**, and **tube model-predictive control** contain prediction error; **constraint tightening** and **chance-constrained control** turn that uncertainty into explicit safety margins.

**Bản dịch tiếng Việt:** Thí nghiệm có **persistent excitation** tạo **regressor matrix** cho **online system identification** và **grey-box model**. **State observer**, **high-gain observer**, **sliding-mode observer**, **disturbance observer** hoặc **unknown-input observer** tái tạo những gì sensor không thấy; **moving-horizon estimation** tiếp tục tinh chỉnh cửa sổ dữ liệu. **Maximum-likelihood estimate** và **Bayesian system identification** định lượng niềm tin về parameter, còn **Gaussian-process dynamics**, **residual dynamics** và **model discrepancy** mô tả phần physics còn thiếu. **Uncertainty tube**, **robust invariant set** và **tube model-predictive control** bao chứa prediction error; **constraint tightening** và **chance-constrained control** biến uncertainty thành safety margin rõ ràng.
