# C2 Vocabulary 125 — Geometric deep learning and graph models

This lesson follows how neural models represent graphs, images, and structured data while preserving symmetry, locality, and useful inductive assumptions.

Flow: **message passing → graph convolution → equivariance → permutation invariance → attention head → positional encoding → tensor contraction → autodiff → vanishing gradient → batch normalization → uncertainty quantification → contrastive learning → self-supervision → curriculum learning → catastrophic forgetting → loss landscape → model distillation → graph pooling → oversmoothing → inductive bias**.

## 1. message passing /ˈmɛsɪdʒ ˈpæsɪŋ/
**Part of speech:** noun
**Core meaning (English):** the exchange and aggregation of feature information between connected nodes in a graph neural network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truyền thông điệp; hình dung mỗi nút gửi thông tin cho hàng xóm rồi cập nhật biểu diễn của mình.
**Grammar & collocations:** `message-passing layer` — lớp truyền thông điệp; `iterative message passing` — truyền thông điệp lặp; `design message passing` — thiết kế truyền thông điệp.
**Examples:** `Message passing let each molecule incorporate information from its bonded neighbors.` → Truyền thông điệp giúp mỗi phân tử tích hợp thông tin từ các láng giềng liên kết.
**Liên kết tiếng Hàn:** `메시지 전달` (mesiji jeondal) — truyền thông điệp.

## 2. graph convolution /ɡræf kənˈvəluːʃən/
**Part of speech:** noun
**Core meaning (English):** a neighborhood aggregation operation that applies learnable filters to features on graph-structured data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tích chập đồ thị; hình dung bộ lọc học được quét qua các nút và cạnh thay vì qua lưới pixel đều đặn.
**Grammar & collocations:** `graph-convolution layer` — lớp tích chập đồ thị; `spectral graph convolution` — tích chập đồ thị phổ; `apply graph convolution` — áp dụng tích chập.
**Examples:** `Graph convolution propagated chemical features across the molecular structure.` → Tích chập đồ thị lan truyền đặc trưng hóa học qua cấu trúc phân tử.
**Liên kết tiếng Hàn:** `그래프 합성곱` (geuraepeu hapseonggop) — tích chập đồ thị.

## 3. equivariance /ˌiːkwɪˈvɛəriəns/
**Part of speech:** noun
**Core meaning (English):** a property in which transforming the input produces a correspondingly transformed output rather than an unrelated one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính đẳng biến; hình dung xoay hoặc dịch đối tượng thì biểu diễn cũng thay đổi theo quy luật tương ứng.
**Grammar & collocations:** `rotation equivariance` — tính đẳng biến quay; `equivariant architecture` — kiến trúc đẳng biến; `preserve equivariance` — bảo toàn tính đẳng biến.
**Examples:** `Rotation equivariance helped the model recognize the same molecule in different orientations.` → Tính đẳng biến quay giúp mô hình nhận ra cùng phân tử ở các hướng khác nhau.
**Liên kết tiếng Hàn:** `등변성` (deungbyeonseong) — tính đẳng biến.

## 4. permutation invariance /ˌpɝmjəˈteɪʃən ɪnˈvɛəriəns/
**Part of speech:** noun
**Core meaning (English):** a property in which reordering a set of inputs leaves the output unchanged.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bất biến hoán vị; hình dung đổi thứ tự các điểm hoặc nút nhưng ý nghĩa của cả tập hợp vẫn giữ nguyên.
**Grammar & collocations:** `permutation-invariant pooling` — gom bất biến hoán vị; `enforce permutation invariance` — áp đặt bất biến hoán vị; `set permutation invariance` — bất biến hoán vị của tập.
**Examples:** `Permutation invariance prevented the prediction from depending on the arbitrary order of particles.` → Bất biến hoán vị ngăn dự đoán phụ thuộc vào thứ tự tùy ý của các hạt.
**Liên kết tiếng Hàn:** `순열 불변성` (sunyeol bulbyeonseong) — bất biến hoán vị.

## 5. attention head /əˈtɛnʃən hɛd/
**Part of speech:** noun
**Core meaning (English):** one parallel attention mechanism that learns which input elements should influence a representation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đầu attention; hình dung một “góc nhìn” riêng tập trung vào những quan hệ quan trọng giữa các phần tử.
**Grammar & collocations:** `multi-head attention` — attention đa đầu; `attention-head specialization` — chuyên biệt hóa đầu attention; `add an attention head` — thêm đầu attention.
**Examples:** `One attention head focused on long-range dependencies between distant nodes.` → Một đầu attention tập trung vào phụ thuộc xa giữa các nút cách nhau.
**Liên kết tiếng Hàn:** `어텐션 헤드` (eotensyeon hedeu) — đầu attention.

## 6. positional encoding /pəˈzɪʃənəl ɛnˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** information added to a representation so a model can distinguish the position or order of its inputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã hóa vị trí; hình dung gắn “tọa độ” vào token hoặc nút để mô hình biết thứ tự và khoảng cách.
**Grammar & collocations:** `sinusoidal positional encoding` — mã hóa vị trí hình sin; `relative positional encoding` — mã hóa vị trí tương đối; `learn positional encodings` — học mã hóa vị trí.
**Examples:** `Relative positional encoding represented distance along the molecular graph.` → Mã hóa vị trí tương đối biểu diễn khoảng cách trên đồ thị phân tử.
**Liên kết tiếng Hàn:** `위치 인코딩` (wichi enkoding) — mã hóa vị trí.

## 7. tensor contraction /ˈtɛnsər kənˈtrækʃən/
**Part of speech:** noun
**Core meaning (English):** an operation that sums over selected tensor indices to combine high-dimensional arrays.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** co tensor; hình dung ghép các chiều dữ liệu bằng cách tổng hợp những chỉ số chung.
**Grammar & collocations:** `tensor-contraction operation` — phép co tensor; `efficient tensor contraction` — co tensor hiệu quả; `perform a contraction` — thực hiện phép co.
**Examples:** `Tensor contraction combined the feature maps without materializing a huge intermediate array.` → Co tensor kết hợp các bản đồ đặc trưng mà không tạo mảng trung gian khổng lồ.
**Liên kết tiếng Hàn:** `텐서 수축` (tenseo suchuk) — co tensor.

## 8. autodiff /ˈɔtoʊdɪf/
**Part of speech:** noun
**Core meaning (English):** automatic differentiation, in which a program computes exact derivatives by tracking elementary operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vi phân tự động; hình dung hệ thống tự lần theo phép tính để lấy gradient cho tối ưu hóa.
**Grammar & collocations:** `reverse-mode autodiff` — vi phân tự động xuôi ngược; `autodiff engine` — bộ máy autodiff; `differentiate with autodiff` — vi phân bằng autodiff.
**Examples:** `Autodiff supplied gradients through the simulator and the neural controller together.` → Vi phân tự động cung cấp gradient qua cả mô phỏng và bộ điều khiển neural.
**Liên kết tiếng Hàn:** `자동 미분` (jadong mibun) — vi phân tự động.

## 9. vanishing gradient /ˈvænɪʃɪŋ ˈɡreɪdiənt/
**Part of speech:** noun
**Core meaning (English):** a training problem in which gradients become extremely small as they propagate through many layers or time steps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gradient biến mất; hình dung tín hiệu học yếu dần đến mức các lớp đầu gần như không cập nhật.
**Grammar & collocations:** `vanishing-gradient problem` — vấn đề gradient biến mất; `suffer vanishing gradients` — bị gradient biến mất; `mitigate the problem` — giảm vấn đề.
**Examples:** `Gated connections mitigated the vanishing gradient in the long sequence model.` → Kết nối có cổng giảm gradient biến mất trong mô hình chuỗi dài.
**Liên kết tiếng Hàn:** `기울기 소실` (giulgi sosil) — gradient biến mất.

## 10. batch normalization /bætʃ ˌnɔrməlɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** normalizing intermediate activations across a training batch to stabilize and accelerate optimization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuẩn hóa batch; hình dung đưa phân phối kích hoạt về vùng ổn định trước khi truyền sang lớp sau.
**Grammar & collocations:** `batch-normalization layer` — lớp chuẩn hóa batch; `batch-normalization statistics` — thống kê chuẩn hóa; `apply batch normalization` — áp dụng chuẩn hóa.
**Examples:** `Batch normalization made the deep graph model less sensitive to the learning rate.` → Chuẩn hóa batch làm mô hình đồ thị sâu ít nhạy với tốc độ học hơn.
**Liên kết tiếng Hàn:** `배치 정규화` (baechi jeonggyuhwa) — chuẩn hóa batch.

## 11. uncertainty quantification /ʌnˈsɝtnti ˌkwɑntəfɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the systematic estimation and communication of uncertainty in model predictions or inferred quantities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** định lượng bất định; hình dung mô hình không chỉ đưa đáp án mà còn nói mức tin cậy.
**Grammar & collocations:** `predictive uncertainty quantification` — định lượng bất định dự đoán; `uncertainty-quantification method` — phương pháp định lượng; `quantify uncertainty` — định lượng bất định.
**Examples:** `Uncertainty quantification flagged the prediction as unreliable outside the training distribution.` → Định lượng bất định đánh dấu dự đoán không đáng tin ngoài phân phối huấn luyện.
**Liên kết tiếng Hàn:** `불확실성 정량화` (bulhwaksilseong jeongnyanghwa) — định lượng bất định.

## 12. contrastive learning /kənˈtræstɪv ˈlɝnɪŋ/
**Part of speech:** noun
**Core meaning (English):** representation learning that pulls related examples together and pushes unrelated examples apart.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học tương phản; hình dung mô hình học bằng cách so sánh cặp giống và khác thay vì chỉ dùng nhãn.
**Grammar & collocations:** `self-supervised contrastive learning` — học tương phản tự giám sát; `contrastive-learning objective` — mục tiêu học tương phản; `train contrastively` — huấn luyện tương phản.
**Examples:** `Contrastive learning grouped augmented views of the same graph in representation space.` → Học tương phản gom các phiên bản biến đổi của cùng đồ thị trong không gian biểu diễn.
**Liên kết tiếng Hàn:** `대조 학습` (daejo haks eup) — học tương phản.

## 13. self-supervision /ˌsɛlfˌsuːpərˈvɪʒən/
**Part of speech:** noun
**Core meaning (English):** learning from targets generated from the data itself rather than from manually assigned labels.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tự giám sát; hình dung dữ liệu tự cung cấp bài tập và đáp án để mô hình học biểu diễn.
**Grammar & collocations:** `self-supervised pretraining` — tiền huấn luyện tự giám sát; `self-supervision signal` — tín hiệu tự giám sát; `learn by self-supervision` — học bằng tự giám sát.
**Examples:** `Self-supervision learned structural features from unlabeled molecular graphs.` → Tự giám sát học các đặc trưng cấu trúc từ đồ thị phân tử chưa gắn nhãn.
**Liên kết tiếng Hàn:** `자기 지도 학습` (jagi jido haks eup) — tự giám sát.

## 14. curriculum learning /kəˈrɪkjələm ˈlɝnɪŋ/
**Part of speech:** noun
**Core meaning (English):** a training strategy that presents examples in an organized progression from easier or simpler cases to harder ones.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học theo chương trình; hình dung mô hình học từ bài đơn giản rồi dần tăng độ khó.
**Grammar & collocations:** `curriculum-learning schedule` — lịch học theo chương trình; `adaptive curriculum learning` — học chương trình thích ứng; `design a curriculum` — thiết kế chương trình.
**Examples:** `Curriculum learning introduced short graphs before noisy long-range graphs.` → Học theo chương trình đưa đồ thị ngắn trước đồ thị dài nhiều nhiễu.
**Liên kết tiếng Hàn:** `커리큘럼 학습` (keorikyulleom haks eup) — học theo chương trình.

## 15. catastrophic forgetting /ˌkætəˈstrɑfɪk fərˈɡɛtɪŋ/
**Part of speech:** noun
**Core meaning (English):** the abrupt loss of previously learned knowledge when a model is trained on new tasks or data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quên thảm họa; hình dung mô hình học bài mới nhưng xóa gần hết kỹ năng cũ.
**Grammar & collocations:** `catastrophic-forgetting effect` — hiệu ứng quên thảm họa; `avoid catastrophic forgetting` — tránh quên thảm họa; `continual-learning benchmark` — chuẩn đánh giá học liên tục.
**Examples:** `Replay memory reduced catastrophic forgetting during continual graph learning.` → Bộ nhớ phát lại giảm quên thảm họa trong học đồ thị liên tục.
**Liên kết tiếng Hàn:** `치명적 망각` (ch myeongjeok mang gak) — quên thảm họa.

## 16. loss landscape /lɔs ˈlændskeɪp/
**Part of speech:** noun
**Core meaning (English):** the high-dimensional surface describing a model's loss for different parameter values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** địa hình hàm mất mát; hình dung các thung lũng và đèo mà thuật toán tối ưu phải đi qua.
**Grammar & collocations:** `smooth loss landscape` — địa hình hàm mất mát trơn; `loss-landscape geometry` — hình học địa hình; `visualize the landscape` — trực quan hóa địa hình.
**Examples:** `The wider basin in the loss landscape correlated with better robustness.` → Lòng chảo rộng hơn trong địa hình hàm mất mát tương quan với độ bền tốt hơn.
**Liên kết tiếng Hàn:** `손실 지형` (sonsil jihyeong) — địa hình hàm mất mát.

## 17. model distillation /ˈmɑdəl dɪstəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** transferring useful behavior from a large teacher model to a smaller student model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chưng cất mô hình; hình dung nén kinh nghiệm của mô hình lớn vào một mô hình gọn hơn.
**Grammar & collocations:** `knowledge distillation` — chưng cất tri thức; `teacher–student distillation` — chưng cất thầy–trò; `distill a model` — chưng cất mô hình.
**Examples:** `Model distillation produced a graph encoder small enough for edge devices.` → Chưng cất mô hình tạo encoder đồ thị đủ nhỏ cho thiết bị biên.
**Liên kết tiếng Hàn:** `모델 증류` (model jeungnyu) — chưng cất mô hình.

## 18. graph pooling /ɡræf ˈpuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** reducing a graph's size by aggregating or selecting nodes while retaining important structural information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom đồ thị; hình dung thu nhỏ đồ thị bằng cách gộp các nút thành cụm giàu thông tin.
**Grammar & collocations:** `hierarchical graph pooling` — gom đồ thị phân cấp; `graph-pooling operator` — toán tử gom đồ thị; `apply graph pooling` — áp dụng gom đồ thị.
**Examples:** `Graph pooling compressed the social network before the final graph-level prediction.` → Gom đồ thị nén mạng xã hội trước dự đoán cấp đồ thị cuối cùng.
**Liên kết tiếng Hàn:** `그래프 풀링` (geuraepeu pulling) — gom đồ thị.

## 19. oversmoothing /ˌoʊvərˈsmuːðɪŋ/
**Part of speech:** noun
**Core meaning (English):** the loss of distinguishable node representations when repeated graph aggregation makes neighboring features too similar.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** làm mượt quá mức; hình dung truyền thông điệp quá nhiều khiến mọi nút trông giống nhau.
**Grammar & collocations:** `graph oversmoothing` — làm mượt đồ thị quá mức; `oversmoothing problem` — vấn đề làm mượt quá mức; `mitigate oversmoothing` — giảm làm mượt quá mức.
**Examples:** `Residual connections mitigated oversmoothing in the deeper graph network.` → Kết nối dư giảm làm mượt quá mức trong mạng đồ thị sâu hơn.
**Liên kết tiếng Hàn:** `과도한 평활화` (gwadohan pyeonghwalhwa) — làm mượt quá mức.

## 20. inductive bias /ɪnˈdʌktɪv baɪəs/
**Part of speech:** noun
**Core meaning (English):** assumptions built into a model that favor some explanations or generalizations over others.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiên kiến quy nạp; hình dung “niềm tin ban đầu” giúp mô hình học hiệu quả với ít dữ liệu hơn.
**Grammar & collocations:** `architectural inductive bias` — thiên kiến quy nạp kiến trúc; `useful inductive bias` — thiên kiến hữu ích; `encode an inductive bias` — mã hóa thiên kiến.
**Examples:** `Local connectivity gives convolutional models an inductive bias for nearby interactions.` → Tính kết nối cục bộ cho mô hình tích chập thiên kiến quy nạp về tương tác gần.
**Liên kết tiếng Hàn:** `귀납적 편향` (gwinapjeok pyeonhyang) — thiên kiến quy nạp.

## Review in context

Graph models begin with **message passing** and **graph convolution**, but **equivariance** and **permutation invariance** determine how representations respond to transformations. An **attention head** can focus on distant relations, while **positional encoding** supplies order. Efficient **tensor contraction** and **autodiff** support training; **vanishing gradient** and **batch normalization** affect optimization. **Uncertainty quantification** communicates confidence, while **contrastive learning** and **self-supervision** use unlabeled data. **Curriculum learning** organizes difficulty, but **catastrophic forgetting** threatens continual updates. The **loss landscape** guides optimization, **model distillation** compresses a teacher, **graph pooling** reduces size, and **oversmoothing** warns against excessive depth. Every architecture carries an **inductive bias**.

**Bản dịch tiếng Việt:**

Các mô hình đồ thị bắt đầu với truyền thông điệp và tích chập đồ thị, nhưng tính đẳng biến và bất biến hoán vị quyết định biểu diễn phản ứng ra sao trước các phép biến đổi. Một đầu attention có thể tập trung vào quan hệ xa, còn mã hóa vị trí cung cấp thông tin thứ tự. Co tensor hiệu quả và vi phân tự động hỗ trợ huấn luyện; gradient biến mất và chuẩn hóa batch ảnh hưởng đến tối ưu hóa. Định lượng bất định truyền đạt độ tin cậy, trong khi học tương phản và tự giám sát sử dụng dữ liệu chưa gắn nhãn. Học theo chương trình sắp xếp độ khó, nhưng quên thảm họa đe dọa cập nhật liên tục. Địa hình hàm mất mát dẫn đường tối ưu hóa, chưng cất mô hình nén mô hình thầy, gom đồ thị giảm kích thước, còn làm mượt quá mức cảnh báo độ sâu dư thừa. Mọi kiến trúc đều mang một thiên kiến quy nạp.
