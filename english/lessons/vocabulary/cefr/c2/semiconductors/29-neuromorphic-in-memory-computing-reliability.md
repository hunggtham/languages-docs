# C2 Vocabulary — Neuromorphic in-memory computing reliability

This lesson follows an analog neural array from device programming through computation, calibration, variation, and field reliability.

Flow: **neuromorphic accelerator → in-memory compute → analog multiply-accumulate → write endurance → analog nonideality → device-to-device variation → stochastic update → event-driven compute → neuron membrane model → synaptic weight drift → programming pulse → array sneak path → mixed-signal neural core → neuromorphic yield → retention of conductance → weight quantization error → calibration pulse → vector-matrix multiply → analog noise floor → neural-core thermal drift**.

## 1. neuromorphic accelerator /ˌnʊroʊˈmɔrfɪk əkˈsɛləˌreɪtər/
**Part of speech:** noun
**Core meaning (English):** specialized hardware that emulates aspects of neural computation using event-driven or analog circuits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần cứng mô phỏng neural bằng mạch event-driven/analog.
**Grammar & collocations:** `neuromorphic-accelerator tile` — tile; `process sparse spikes` — xử lý.
**Examples:** `The neuromorphic accelerator processed sparse sensor events with very little data movement.` → Accelerator xử lý event thưa với ít di chuyển data.
**Liên kết tiếng Hàn:** `뉴로모픽 가속기`.

## 2. in-memory compute /ɪn ˈmɛməri kəmˈpjuːt/
**Part of speech:** noun
**Core meaning (English):** performing arithmetic where data is stored, reducing transfers between memory and a separate processor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính toán ngay trong nơi lưu data.
**Grammar & collocations:** `in-memory-compute array` — array; `avoid a data-movement bottleneck` — tránh.
**Examples:** `In-memory compute reduced energy spent moving weights across the memory bus.` → Tính trong memory giảm năng lượng chuyển weight.
**Liên kết tiếng Hàn:** `메모리 내 연산`.

## 3. analog multiply-accumulate /ˈænəlɔɡ ˈmʌltəˌplaɪ ˈækjəməˌleɪt/
**Part of speech:** noun
**Core meaning (English):** multiplying analog signals by stored conductances and summing the resulting currents.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhân tín hiệu analog với conductance rồi cộng dòng.
**Grammar & collocations:** `analog-multiply-accumulate operation` — operation; `sum column currents` — cộng.
**Examples:** `Analog multiply-accumulate produced a matrix result in one array traversal.` → MAC analog cho kết quả matrix trong một lượt.
**Liên kết tiếng Hàn:** `아날로그 곱셈 누산`.

## 4. write endurance /raɪt ɪnˈdjʊrəns/
**Part of speech:** noun
**Core meaning (English):** the number or duration of programming operations a device can withstand before its stored state becomes unreliable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số lần ghi trước khi state suy giảm.
**Grammar & collocations:** `write-endurance budget` — budget; `limit update frequency` — giới hạn.
**Examples:** `Write endurance constrained how often the training loop could update analog weights.` → Endurance giới hạn tần suất update weight.
**Liên kết tiếng Hàn:** `쓰기 내구성`.

## 5. analog nonideality /ˈænəlɔɡ ˌnɑnˌaɪˈdiæləti/
**Part of speech:** noun
**Core meaning (English):** deviation of an analog computing element from its ideal mathematical behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch analog lệch khỏi phép tính lý tưởng.
**Grammar & collocations:** `analog-nonideality model` — model; `calibrate a nonlinear response` — hiệu chuẩn.
**Examples:** `Analog nonideality accumulated across layers and lowered classification accuracy.` → Phi lý tưởng analog tích lũy làm giảm accuracy.
**Liên kết tiếng Hàn:** `아날로그 비이상성`.

## 6. device-to-device variation /dɪˈvaɪs tə dɪˈvaɪs ˌvɛriəˈbeɪʃən/
**Part of speech:** noun
**Core meaning (English):** differences in electrical behavior among nominally identical devices fabricated on the same or different dies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** device giống nhau nhưng thông số khác nhau.
**Grammar & collocations:** `device-to-device-variation map` — map; `calibrate an array tile` — hiệu chuẩn.
**Examples:** `Device-to-device variation required a separate scale factor for each column.` → Variation cần scale factor riêng từng column.
**Liên kết tiếng Hàn:** `소자 간 변동`.

## 7. stochastic update /stəˈkæstɪk ʌpˈdeɪt/
**Part of speech:** noun
**Core meaning (English):** a probabilistic programming change whose exact conductance increment varies from one update to another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** update weight có thành phần ngẫu nhiên.
**Grammar & collocations:** `stochastic-update distribution` — distribution; `average repeated pulses` — lấy trung bình.
**Examples:** `Stochastic update noise was reduced by averaging several small programming pulses.` → Noise update giảm nhờ trung bình nhiều pulse.
**Liên kết tiếng Hàn:** `확률적 업데이트`.

## 8. event-driven compute /ɪˈvɛnt ˈdrɪvən kəmˈpjuːt/
**Part of speech:** noun
**Core meaning (English):** computation activated by discrete events instead of a continuously clocked stream of dense operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ tính khi có event.
**Grammar & collocations:** `event-driven-compute fabric` — fabric; `suppress idle switching` — giảm.
**Examples:** `Event-driven compute kept the neural core quiet between bursts from the camera.` → Compute event-driven giữ core im giữa burst camera.
**Liên kết tiếng Hàn:** `이벤트 구동 연산`.

## 9. neuron membrane model /ˈnʊrɑn ˈmɛmˌbreɪn ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a mathematical or circuit model describing how a neuron integrates input and emits a spike.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model neuron tích hợp input và phát spike.
**Grammar & collocations:** `neuron-membrane-model parameter` — parameter; `integrate a membrane potential` — tích hợp.
**Examples:** `The neuron membrane model emitted a spike after the accumulated current crossed threshold.` → Model phát spike khi dòng tích lũy vượt ngưỡng.
**Liên kết tiếng Hàn:** `뉴런 막 모델`.

## 10. synaptic weight drift /sɪˈnæptɪk weɪt drɪft/
**Part of speech:** noun
**Core meaning (English):** gradual change in a stored synaptic weight when no intentional learning update is applied.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** weight lưu trữ tự trôi theo thời gian.
**Grammar & collocations:** `synaptic-weight-drift rate` — rate; `refresh a stored weight` — refresh.
**Examples:** `Synaptic weight drift shifted the decision boundary during a long idle period.` → Drift weight đổi decision boundary.
**Liên kết tiếng Hàn:** `시냅스 가중치 드리프트`.

## 11. programming pulse /ˈproʊɡræmɪŋ pʌls/
**Part of speech:** noun
**Core meaning (English):** a controlled electrical or optical stimulus used to change a device's stored analog or digital state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xung điều khiển để đổi state device.
**Grammar & collocations:** `programming-pulse amplitude` — amplitude; `increment a conductance` — tăng.
**Examples:** `The programming pulse was shortened to reduce overshoot in the conductance update.` → Rút pulse để giảm overshoot.
**Liên kết tiếng Hàn:** `프로그래밍 펄스`.

## 12. array sneak path /əˈreɪ sniːk pæθ/
**Part of speech:** noun
**Core meaning (English):** an unintended current path through unselected elements in a dense memory or compute array.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dòng đi lén qua cell không chọn.
**Grammar & collocations:** `array-sneak-path suppression` — suppression; `isolate an unselected cell` — cô lập.
**Examples:** `An array sneak path distorted the column current during a multi-row read.` → Dòng sneak làm méo current column.
**Liên kết tiếng Hàn:** `어레이 누설 경로`.

## 13. mixed-signal neural core /mɪkst ˈsɪɡnəl ˈnʊrəl kɔr/
**Part of speech:** noun
**Core meaning (English):** a neural-computing block combining analog accumulation with digital control, encoding, or correction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** core neural ghép analog compute và digital control.
**Grammar & collocations:** `mixed-signal-neural-core interface` — interface; `digitize an analog sum` — số hóa.
**Examples:** `The mixed-signal neural core digitized only the final accumulation, saving conversion energy.` → Core số hóa chỉ tổng cuối.
**Liên kết tiếng Hàn:** `혼합 신호 뉴럴 코어`.

## 14. neuromorphic yield /ˌnʊroʊˈmɔrfɪk jiːld/
**Part of speech:** noun
**Core meaning (English):** the fraction of neural hardware tiles meeting functional accuracy, variation, and power specifications.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ tile neural đạt accuracy, variation và power spec.
**Grammar & collocations:** `neuromorphic-yield screen` — screen; `bin a marginal tile` — phân loại.
**Examples:** `Neuromorphic yield improved after calibration excluded columns with unstable conductance.` → Yield tăng sau calibration loại column không ổn.
**Liên kết tiếng Hàn:** `뉴로모픽 수율`.

## 15. retention of conductance /rɪˈtɛnʃən əv kənˈdʌktəns/
**Part of speech:** noun
**Core meaning (English):** the ability of a programmable device to preserve its conductance value over a specified time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** device giữ conductance đã lập trình.
**Grammar & collocations:** `retention-of-conductance test` — test; `hold a programmed state` — giữ.
**Examples:** `Retention of conductance was measured at elevated temperature before deployment.` → Đo retention conductance ở nhiệt cao.
**Liên kết tiếng Hàn:** `컨덕턴스 보존`.

## 16. weight quantization error /weɪt ˌkwɑntəˈzeɪʃən ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** error caused by representing a desired neural weight with a finite set of hardware levels.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** weight bị làm tròn về mức phần cứng hữu hạn.
**Grammar & collocations:** `weight-quantization-error budget` — budget; `map weights to conductance levels` — ánh xạ.
**Examples:** `Weight quantization error was compensated by retraining the final classifier layer.` → Lỗi lượng tử hóa được bù bằng retrain.
**Liên kết tiếng Hàn:** `가중치 양자화 오류`.

## 17. calibration pulse /ˌkæləˈbreɪʃən pʌls/
**Part of speech:** noun
**Core meaning (English):** a controlled stimulus used to measure or correct a device's response before normal computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pulse dùng để đo/chỉnh response trước khi chạy.
**Grammar & collocations:** `calibration-pulse sequence` — sequence; `estimate a column gain` — ước tính.
**Examples:** `A calibration pulse estimated the gain mismatch before the inference batch began.` → Pulse ước tính mismatch gain trước inference.
**Liên kết tiếng Hàn:** `교정 펄스`.

## 18. vector-matrix multiply /ˈvɛktər ˈmeɪtrɪks ˈmʌltəˌplaɪ/
**Part of speech:** noun
**Core meaning (English):** multiplication of an input vector by a matrix of stored weights, producing an output vector.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhân vector input với matrix weight.
**Grammar & collocations:** `vector-matrix-multiply engine` — engine; `accumulate weighted currents` — tích lũy.
**Examples:** `The vector-matrix multiply ran in parallel across the crossbar columns.` → VMM chạy song song trên column crossbar.
**Liên kết tiếng Hàn:** `벡터-행렬 곱셈`.

## 19. analog noise floor /ˈænəlɔɡ nɔɪz flɔr/
**Part of speech:** noun
**Core meaning (English):** the minimum fluctuation level that limits the precision of an analog computation or measurement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức noise nền giới hạn độ chính xác analog.
**Grammar & collocations:** `analog-noise-floor estimate` — estimate; `resolve a small current difference` — phân giải.
**Examples:** `The analog noise floor erased the contribution of the smallest synaptic weights.` → Noise floor xóa đóng góp weight nhỏ.
**Liên kết tiếng Hàn:** `아날로그 잡음 바닥`.

## 20. neural-core thermal drift /ˈnʊrəl kɔr ˈθɝməl drɪft/
**Part of speech:** noun
**Core meaning (English):** temperature-driven change in the behavior of a neural-computing core during operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiệt làm đặc tính core neural trôi.
**Grammar & collocations:** `neural-core-thermal-drift monitor` — monitor; `retune a hot tile` — chỉnh lại.
**Examples:** `Neural-core thermal drift altered conductance sums after a sustained workload.` → Drift nhiệt core đổi tổng conductance.
**Liên kết tiếng Hàn:** `뉴럴 코어 열 드리프트`.

## Review in context

A **neuromorphic accelerator** uses **in-memory compute** and **analog multiply-accumulate**, but **write endurance**, **analog nonideality**, and **device-to-device variation** constrain learning. A **stochastic update**, **event-driven compute**, and **neuron membrane model** shape behavior, while **synaptic weight drift**, a **programming pulse**, and an **array sneak path** affect reliability. A **mixed-signal neural core** and **neuromorphic yield** depend on **retention of conductance**, **weight quantization error**, and a **calibration pulse**. **Vector-matrix multiply**, the **analog noise floor**, and **neural-core thermal drift** determine field accuracy.

**Bản dịch tiếng Việt:** **Neuromorphic accelerator** dùng **in-memory compute** và **analog multiply-accumulate**, nhưng **write endurance**, **analog nonideality** và **device-to-device variation** giới hạn learning. **Stochastic update**, **event-driven compute** và **neuron membrane model** định hình hành vi, còn **synaptic weight drift**, **programming pulse** và **array sneak path** ảnh hưởng reliability. **Mixed-signal neural core** và **neuromorphic yield** phụ thuộc **retention of conductance**, **weight quantization error** và **calibration pulse**. **Vector-matrix multiply**, **analog noise floor** và **neural-core thermal drift** quyết định accuracy ngoài thực địa.
