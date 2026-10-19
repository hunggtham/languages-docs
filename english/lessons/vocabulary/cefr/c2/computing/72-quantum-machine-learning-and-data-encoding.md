# C2 Vocabulary — Quantum machine learning and data encoding

This lesson follows a quantum machine-learning workflow from data loading and feature maps through kernels, trainability, and generalization.

Flow: **amplitude encoding → basis encoding → angle encoding → quantum kernel → feature map → data re-uploading → variational classifier → quantum neural network → barren landscape → kernel alignment → trainability metric → classical shadow → shadow tomography → dequantization claim → data loading bottleneck → quantum embedding → kernel concentration → expressivity spectrum → generalization bound → shot-frugal optimization**.

## 1. amplitude encoding /ˈæmplɪtuːd ɪnˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** representing a normalized data vector in the amplitudes of a quantum state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa vector dữ liệu đã chuẩn hóa vào amplitude của state.
**Grammar & collocations:** `amplitude-encoding circuit` — circuit; `normalize a feature vector` — chuẩn hóa.
**Examples:** `Amplitude encoding used few qubits but required a costly state-preparation routine.` → Encoding amplitude ít qubit nhưng chuẩn bị state đắt.
**Liên kết tiếng Hàn:** `진폭 인코딩`.

## 2. basis encoding /ˈbeɪsɪs ɪnˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** representing discrete data as computational-basis states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn dữ liệu rời rạc bằng state cơ sở tính toán.
**Grammar & collocations:** `basis-encoding scheme` — scheme; `map a bit string` — ánh xạ.
**Examples:** `Basis encoding mapped each categorical record to a distinct computational state.` → Encoding cơ sở gán mỗi record vào state riêng.
**Liên kết tiếng Hàn:** `기저 인코딩`.

## 3. angle encoding /ˈæŋɡəl ɪnˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** placing classical feature values into rotation angles of quantum gates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa feature vào góc xoay của cổng lượng tử.
**Grammar & collocations:** `angle-encoding layer` — layer; `scale a feature range` — co giãn.
**Examples:** `Angle encoding kept state preparation shallow after the features were scaled.` → Encoding góc giữ chuẩn bị state nông.
**Liên kết tiếng Hàn:** `각도 인코딩`.

## 4. quantum kernel /ˈkwɒntəm ˈkɜrnəl/
**Part of speech:** noun
**Core meaning (English):** a similarity function computed from overlaps or measurements of quantum feature states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm tương đồng tính từ overlap của state feature lượng tử.
**Grammar & collocations:** `quantum-kernel matrix` — matrix; `compare embedded samples` — so sánh.
**Examples:** `The quantum kernel separated two classes that overlapped under the linear baseline.` → Kernel lượng tử tách hai lớp chồng ở baseline tuyến tính.
**Liên kết tiếng Hàn:** `양자 커널`.

## 5. feature map /ˈfiːtʃər mæp/
**Part of speech:** noun
**Core meaning (English):** a transformation that embeds classical features into a quantum state or a higher-dimensional representation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép biến đổi đưa feature vào state hoặc không gian lớn hơn.
**Grammar & collocations:** `feature-map circuit` — circuit; `embed a nonlinear relation` — nhúng.
**Examples:** `The feature map used pairwise phases to represent interactions between measurements.` → Map dùng phase cặp để biểu diễn tương tác.
**Liên kết tiếng Hàn:** `특징 맵`.

## 6. data re-uploading /ˈdeɪtə riːˈʌploʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** inserting the same or transformed classical features into multiple layers of a quantum circuit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa dữ liệu lặp lại qua nhiều layer mạch.
**Grammar & collocations:** `data-re-uploading architecture` — architecture; `repeat an encoded feature` — lặp.
**Examples:** `Data re-uploading increased expressivity without adding another register of qubits.` → Re-upload tăng biểu đạt mà không thêm register.
**Liên kết tiếng Hàn:** `데이터 재업로드`.

## 7. variational classifier /ˌveriˈeɪʃənəl ˈklæsəfaɪər/
**Part of speech:** noun
**Core meaning (English):** a classifier whose parameterized quantum circuit is trained to distinguish labeled inputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** classifier dùng mạch tham số để phân biệt dữ liệu có nhãn.
**Grammar & collocations:** `variational-classifier loss` — loss; `train a decision boundary` — huấn luyện.
**Examples:** `The variational classifier reached high training accuracy but failed on shifted test data.` → Classifier cao trên train nhưng fail test lệch.
**Liên kết tiếng Hàn:** `변분 분류기`.

## 8. quantum neural network /ˈkwɒntəm ˈnjʊərəl ˈnetwɜrk/
**Part of speech:** noun
**Core meaning (English):** a parameterized quantum circuit used as a trainable model for prediction or representation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch lượng tử tham số dùng làm model train được.
**Grammar & collocations:** `quantum-neural-network layer` — layer; `optimize circuit weights` — tối ưu.
**Examples:** `The quantum neural network shared parameters across two related prediction tasks.` → QNN chia sẻ tham số giữa hai nhiệm vụ.
**Liên kết tiếng Hàn:** `양자 신경망`.

## 9. barren landscape /ˈberən ˈlændskeɪp/
**Part of speech:** noun
**Core meaning (English):** a broad optimization landscape in which useful gradients or distinguishing structure are difficult to find.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** địa hình tối ưu rộng, gần như không có gradient hữu ích.
**Grammar & collocations:** `barren-landscape diagnosis` — diagnosis; `search a flat region` — tìm.
**Examples:** `The deep model entered a barren landscape as the number of qubits increased.` → Model sâu rơi vào landscape cằn khi qubit tăng.
**Liên kết tiếng Hàn:** `황량한 지형`.

## 10. kernel alignment /ˈkɜrnəl əˈlaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** measuring how well a kernel's similarity structure matches the labels or target relation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo mức kernel tương đồng phù hợp nhãn.
**Grammar & collocations:** `kernel-alignment score` — score; `align similarities with labels` — căn chỉnh.
**Examples:** `Kernel alignment improved after the feature map was simplified.` → Alignment tăng sau đơn giản hóa feature map.
**Liên kết tiếng Hàn:** `커널 정렬`.

## 11. trainability metric /ˌtreɪnəˈbɪləti ˈmetrɪk/
**Part of speech:** noun
**Core meaning (English):** a measurement used to judge whether a model can be optimized reliably.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ số đánh giá model có thể train ổn định không.
**Grammar & collocations:** `trainability-metric dashboard` — dashboard; `monitor gradient variance` — theo dõi.
**Examples:** `The trainability metric exposed unstable gradients before the validation score declined.` → Metric lộ gradient bất ổn trước validation giảm.
**Liên kết tiếng Hàn:** `훈련 가능성 지표`.

## 12. classical shadow /ˈklæsɪkəl ˈʃædoʊ/
**Part of speech:** noun
**Core meaning (English):** a compact classical record from randomized measurements that can estimate many properties of a quantum state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản ghi cổ điển nhỏ từ đo ngẫu nhiên để ước tính nhiều tính chất.
**Grammar & collocations:** `classical-shadow estimator` — estimator; `predict an observable` — dự đoán.
**Examples:** `A classical shadow estimated several observables without repeating a separate tomography experiment.` → Shadow ước tính nhiều observable.
**Liên kết tiếng Hàn:** `고전적 그림자`.

## 13. shadow tomography /ˈʃædoʊ təˈmɒɡrəfi/
**Part of speech:** noun
**Core meaning (English):** estimating many properties of a quantum state from a randomized classical-shadow data set.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính nhiều tính chất từ data shadow ngẫu nhiên.
**Grammar & collocations:** `shadow-tomography sample complexity` — complexity; `reuse measurement data` — tái dùng.
**Examples:** `Shadow tomography reused one measurement archive to test a new observable family.` → Tomography shadow tái dùng kho đo.
**Liên kết tiếng Hàn:** `그림자 단층 촬영`.

## 14. dequantization claim /diːˌkwɒntəˈzeɪʃən kleɪm/
**Part of speech:** noun
**Core meaning (English):** a claim that a proposed quantum speedup can be matched by a classical algorithm under comparable assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tuyên bố lợi thế lượng tử có thể tái tạo bằng thuật toán cổ điển.
**Grammar & collocations:** `dequantization-claim analysis` — analysis; `match an assumed speedup` — đối sánh.
**Examples:** `The dequantization claim changed how the benchmark defined its classical baseline.` → Tuyên bố dequantization đổi baseline cổ điển.
**Liên kết tiếng Hàn:** `양자화 해제 주장`.

## 15. data loading bottleneck /ˈdeɪtə ˈloʊdɪŋ ˈbɒtlnek/
**Part of speech:** noun
**Core meaning (English):** a cost or delay in preparing classical data for use by a quantum algorithm.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chi phí/trễ khi đưa dữ liệu cổ điển vào thuật toán lượng tử.
**Grammar & collocations:** `data-loading-bottleneck estimate` — estimate; `amortize preparation cost` — phân bổ.
**Examples:** `The data loading bottleneck erased the apparent speedup on small batches.` → Bottleneck nạp dữ liệu xóa tăng tốc trên batch nhỏ.
**Liên kết tiếng Hàn:** `데이터 로딩 병목`.

## 16. quantum embedding /ˈkwɒntəm emˈbedɪŋ/
**Part of speech:** noun
**Core meaning (English):** representing classical observations as states in a quantum Hilbert space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn quan sát cổ điển trong không gian Hilbert lượng tử.
**Grammar & collocations:** `quantum-embedding dimension` — dimension; `map samples into a state space` — ánh xạ.
**Examples:** `The quantum embedding made a nonlinear relation visible through state overlap.` → Embedding làm quan hệ phi tuyến rõ qua overlap.
**Liên kết tiếng Hàn:** `양자 임베딩`.

## 17. kernel concentration /ˈkɜrnəl ˌkɒnsənˈtreɪʃən/
**Part of speech:** noun
**Core meaning (English):** a tendency for many kernel similarities to become nearly identical, reducing useful discrimination.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các similarity của kernel tụ lại giống nhau, giảm phân biệt.
**Grammar & collocations:** `kernel-concentration diagnostic` — diagnostic; `lose class separation` — mất.
**Examples:** `Kernel concentration made the high-dimensional feature map less informative than expected.` → Concentration làm map kém thông tin.
**Liên kết tiếng Hàn:** `커널 집중`.

## 18. expressivity spectrum /ˌekspreˈsɪvəti ˈspektrəm/
**Part of speech:** noun
**Core meaning (English):** the range of functions or states a model can represent as its architecture changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phạm vi hàm/state model biểu diễn được theo kiến trúc.
**Grammar & collocations:** `expressivity-spectrum analysis` — analysis; `trade expressivity against trainability` — đánh đổi.
**Examples:** `The expressivity spectrum showed that the larger circuit added capacity but also instability.` → Spectrum cho thấy mạch lớn thêm capacity và bất ổn.
**Liên kết tiếng Hàn:** `표현력 스펙트럼`.

## 19. generalization bound /ˌdʒenərələˈzeɪʃən baʊnd/
**Part of speech:** noun
**Core meaning (English):** a theoretical limit on how far a model's performance on new data may differ from its training performance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn chênh giữa hiệu suất train và dữ liệu mới.
**Grammar & collocations:** `generalization-bound estimate` — estimate; `control model complexity` — kiểm soát.
**Examples:** `The generalization bound became loose when the feature dimension exceeded the sample size.` → Bound lỏng khi chiều feature vượt số mẫu.
**Liên kết tiếng Hàn:** `일반화 경계`.

## 20. shot-frugal optimization /ʃɒt ˈfruːɡəl ˌɒptɪməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** optimization designed to reach a useful solution with relatively few circuit measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tối ưu tiết kiệm số lượt đo mạch.
**Grammar & collocations:** `shot-frugal-optimization strategy` — strategy; `reuse informative samples` — tái dùng.
**Examples:** `Shot-frugal optimization reused gradient information instead of measuring every parameter from scratch.` → Tối ưu tiết kiệm tái dùng thông tin gradient.
**Liên kết tiếng Hàn:** `샷 절약 최적화`.

## Review in context

Quantum machine learning begins with a data choice: **amplitude encoding**, **basis encoding**, or **angle encoding**. A **quantum kernel** and **feature map** define similarity, while **data re-uploading** can expand a **variational classifier** or **quantum neural network**. A **barren landscape** threatens training, so **kernel alignment** and a **trainability metric** matter. A **classical shadow** and **shadow tomography** can reuse measurements, but a **dequantization claim** and **data loading bottleneck** test whether a quantum method is genuinely useful. **Quantum embedding**, **kernel concentration**, and an **expressivity spectrum** shape representation; a **generalization bound** and **shot-frugal optimization** shape practical deployment.

**Bản dịch tiếng Việt:** Học máy lượng tử bắt đầu từ lựa chọn dữ liệu: **encoding amplitude**, **encoding cơ sở** hoặc **encoding góc**. **Kernel lượng tử** và **feature map** định nghĩa similarity, còn **data re-uploading** có thể mở rộng **classifier biến phân** hoặc **mạng neuron lượng tử**. **Landscape cằn** đe dọa huấn luyện, nên **alignment kernel** và **metric trainability** quan trọng. **Shadow cổ điển** và **shadow tomography** có thể tái dùng phép đo, nhưng **tuyên bố dequantization** và **bottleneck nạp dữ liệu** kiểm tra phương pháp có thực sự hữu ích không. **Embedding lượng tử**, **kernel concentration** và **phổ expressivity** định hình biểu diễn; **bound tổng quát hóa** và **tối ưu tiết kiệm shot** định hình triển khai.
