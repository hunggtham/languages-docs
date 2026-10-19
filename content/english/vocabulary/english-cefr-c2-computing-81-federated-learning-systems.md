# C2 Vocabulary — Federated learning systems

This lesson follows a federated-learning round from client selection and local optimization through communication limits, heterogeneity, evaluation, and deployment.

Flow: **client drift → federated optimizer → secure aggregation protocol → gradient sparsification → client sampling → straggler resilience → federated evaluation → personalized federation → federated fine-tuning → communication compression → model delta → partial participation → client heterogeneity → federated analytics → update clipping → server momentum → federated dropout → cross-client normalization → participation bias → round deadline**.

## 1. client drift /ˈklaɪənt drɪft/
**Part of speech:** noun
**Core meaning (English):** divergence between a client's locally optimized model and the direction preferred by the global objective.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model local đi lệch khỏi hướng tối ưu toàn cục.
**Grammar & collocations:** `client-drift correction` — correction; `limit local steps` — giới hạn.
**Examples:** `Client drift increased when each phone held a very different user population.` → Drift tăng khi dữ liệu mỗi phone khác.
**Liên kết tiếng Hàn:** `클라이언트 드리프트`.

## 2. federated optimizer /ˈfedəreɪtɪd ˈɒptɪmaɪzər/
**Part of speech:** noun
**Core meaning (English):** an optimization algorithm adapted to aggregate updates produced by many decentralized clients.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** optimizer được chỉnh để gộp update từ nhiều client phân tán.
**Grammar & collocations:** `federated-optimizer state` — state; `aggregate local updates` — gộp.
**Examples:** `The federated optimizer damped noisy updates from clients with small datasets.` → Optimizer giảm update nhiễu.
**Liên kết tiếng Hàn:** `연합 최적화기`.

## 3. secure aggregation protocol /sɪˈkjʊər ˌæɡrɪˈɡeɪʃən ˈproʊtəkɒl/
**Part of speech:** noun
**Core meaning (English):** a protocol that reveals only an aggregate of client updates, not any single client's update.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** protocol chỉ lộ tổng update, không lộ update từng client.
**Grammar & collocations:** `secure-aggregation-protocol dropout` — dropout; `mask an update` — che.
**Examples:** `The secure aggregation protocol still recovered the sum when one participant disconnected.` → Protocol vẫn tính tổng khi một client rớt.
**Liên kết tiếng Hàn:** `안전한 집계 프로토콜`.

## 4. gradient sparsification /ˈɡreɪdiənt ˌspɑːrsɪfɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** transmitting only a selected subset of gradient coordinates to reduce communication.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ gửi một phần coordinate gradient để giảm communication.
**Grammar & collocations:** `gradient-sparsification mask` — mask; `retain the largest coordinates` — giữ.
**Examples:** `Gradient sparsification cut uplink traffic but required error feedback.` → Sparsification giảm traffic nhưng cần feedback.
**Liên kết tiếng Hàn:** `그래디언트 희소화`.

## 5. client sampling /ˈklaɪənt ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** selecting a subset of eligible clients to participate in one federated round.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn một phần client đủ điều kiện cho mỗi round.
**Grammar & collocations:** `client-sampling policy` — policy; `draw a participant cohort` — rút.
**Examples:** `Client sampling favored devices with reliable connectivity during the first round.` → Sampling ưu tiên thiết bị mạng tốt.
**Liên kết tiếng Hàn:** `클라이언트 샘플링`.

## 6. straggler resilience /ˈstræɡlər rɪˈzɪliəns/
**Part of speech:** noun
**Core meaning (English):** the ability of a federated job to make progress when some clients are slow or unavailable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ thống vẫn tiến khi client chậm hoặc mất kết nối.
**Grammar & collocations:** `straggler-resilience mechanism` — mechanism; ` tolerate a late update` — chịu.
**Examples:** `Straggler resilience let the server close a round without waiting for every phone.` → Resilience giúp không chờ mọi phone.
**Liên kết tiếng Hàn:** `지연자 복원력`.

## 7. federated evaluation /ˈfedəreɪtɪd ɪˌvæljuˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** measuring model quality across decentralized validation data without collecting that data centrally.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo quality trên data phân tán mà không gom data.
**Grammar & collocations:** `federated-evaluation report` — report; `average a local metric` — lấy trung bình.
**Examples:** `Federated evaluation revealed poor recall on a region absent from the central test set.` → Evaluation lộ recall thấp ở vùng khác.
**Liên kết tiếng Hàn:** `연합 평가`.

## 8. personalized federation /ˈpɜːrsənəlaɪzd ˌfedəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** federated training that keeps a shared representation while adapting a model to each client's data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** train chung một phần nhưng thích nghi model theo từng client.
**Grammar & collocations:** `personalized-federation layer` — layer; `adapt a local head` — thích nghi.
**Examples:** `Personalized federation improved performance for users with unusual language patterns.` → Federation cá nhân hóa tăng performance.
**Liên kết tiếng Hàn:** `개인화 연합`.

## 9. federated fine-tuning /ˈfedəreɪtɪd faɪn ˈtuːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** adapting a pretrained model across clients while keeping their fine-tuning data local.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fine-tune model pretrained trên client mà giữ data local.
**Grammar & collocations:** `federated-fine-tuning round` — round; `adapt a frozen backbone` — thích nghi.
**Examples:** `Federated fine-tuning adapted the language model to hospitals without moving patient notes.` → Fine-tuning không chuyển note bệnh nhân.
**Liên kết tiếng Hàn:** `연합 미세 조정`.

## 10. communication compression /kəˌmjuːnɪˈkeɪʃən kəmˈpreʃən/
**Part of speech:** noun
**Core meaning (English):** reducing the number of bits required to transmit models or updates between clients and a server.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm số bit truyền model hoặc update.
**Grammar & collocations:** `communication-compression ratio` — ratio; `quantize an update` — lượng tử hóa.
**Examples:** `Communication compression made a rural deployment feasible over intermittent links.` → Compression giúp triển khai qua mạng chập chờn.
**Liên kết tiếng Hàn:** `통신 압축`.

## 11. model delta /ˈmɒdəl ˈdeltə/
**Part of speech:** noun
**Core meaning (English):** the parameter difference between a client's updated model and the model it received.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch parameter giữa model sau và trước local training.
**Grammar & collocations:** `model-delta encoding` — encoding; `upload a parameter difference` — tải lên.
**Examples:** `The client sent a model delta rather than a complete copy of the neural network.` → Client gửi delta thay vì cả model.
**Liên kết tiếng Hàn:** `모델 델타`.

## 12. partial participation /ˈpɑːrʃəl pɑːrtɪsɪˈpeɪʃən/
**Part of speech:** noun
**Core meaning (English):** training in which only some eligible clients contribute to each round.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ một phần client tham gia mỗi round.
**Grammar & collocations:** `partial-participation schedule` — schedule; `aggregate an incomplete cohort` — gộp.
**Examples:** `Partial participation reduced battery cost but increased update variance.` → Participation một phần giảm pin nhưng tăng variance.
**Liên kết tiếng Hàn:** `부분 참여`.

## 13. client heterogeneity /ˈklaɪənt ˌhetərədʒəˈniːəti/
**Part of speech:** noun
**Core meaning (English):** variation among clients in data distributions, hardware, connectivity, or computation capacity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khác biệt client về data, hardware, mạng và compute.
**Grammar & collocations:** `client-heterogeneity challenge` — challenge; `model non-identical devices` — mô hình hóa.
**Examples:** `Client heterogeneity made one learning rate unsuitable for every device.` → Heterogeneity khiến một learning rate không đủ.
**Liên kết tiếng Hàn:** `클라이언트 이질성`.

## 14. federated analytics /ˈfedəreɪtɪd ˌænəˈlɪtɪks/
**Part of speech:** noun
**Core meaning (English):** computing aggregate statistics across private client data without centralizing the raw records.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính thống kê tổng hợp trên data private mà không gom raw record.
**Grammar & collocations:** `federated-analytics query` — query; `aggregate a histogram privately` — gộp.
**Examples:** `Federated analytics estimated feature frequencies before the model was trained.` → Analytics ước tính tần suất trước training.
**Liên kết tiếng Hàn:** `연합 분석`.

## 15. update clipping /ˈʌpdeɪt ˈklɪpɪŋ/
**Part of speech:** noun
**Core meaning (English):** limiting the norm of a client update before aggregation to control outliers and sensitivity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn norm update client để kiểm outlier và sensitivity.
**Grammar & collocations:** `update-clipping threshold` — threshold; `clip a model delta` — cắt.
**Examples:** `Update clipping prevented one corrupted client from dominating the global step.` → Clipping ngăn client lỗi chi phối.
**Liên kết tiếng Hàn:** `업데이트 클리핑`.

## 16. server momentum /ˈsɜːrvər moʊˈmentəm/
**Part of speech:** noun
**Core meaning (English):** maintaining an optimizer momentum state at the server across aggregated client updates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** server giữ momentum qua các update đã gộp.
**Grammar & collocations:** `server-momentum coefficient` — coefficient; `smooth an aggregated direction` — làm mượt.
**Examples:** `Server momentum stabilized progress when participating clients changed from round to round.` → Momentum ổn định khi client đổi.
**Liên kết tiếng Hàn:** `서버 모멘텀`.

## 17. federated dropout /ˈfedəreɪtɪd ˈdrɒp aʊt/
**Part of speech:** noun
**Core meaning (English):** clients disappearing during a round after contributing only part of their expected computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** client rớt giữa round sau khi đóng góp một phần.
**Grammar & collocations:** `federated-dropout recovery` — recovery; `discard an incomplete mask` — bỏ.
**Examples:** `Federated dropout required the aggregation protocol to handle missing shares safely.` → Dropout cần xử lý share thiếu.
**Liên kết tiếng Hàn:** `연합 탈락`.

## 18. cross-client normalization /ˌkrɒs ˈklaɪənt ˌnɔːrməlaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** normalization that uses statistics shared or approximated across clients rather than computed from one client's batch.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** normalization dùng statistic chung giữa client.
**Grammar & collocations:** `cross-client-normalization statistic` — statistic; `align feature scales` — căn.
**Examples:** `Cross-client normalization reduced the mismatch between cameras with different exposure settings.` → Normalization giảm lệch giữa camera.
**Liên kết tiếng Hàn:** `클라이언트 간 정규화`.

## 19. participation bias /pɑːrtɪsɪˈpeɪʃən baɪəs/
**Part of speech:** noun
**Core meaning (English):** systematic distortion caused when the clients that participate are not representative of the full population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lệch vì client tham gia không đại diện toàn population.
**Grammar & collocations:** `participation-bias audit` — audit; `reweight a client cohort` — gán trọng số.
**Examples:** `Participation bias overrepresented users with fast Wi-Fi in the reported metric.` → Bias ưu tiên user Wi-Fi nhanh.
**Liên kết tiếng Hàn:** `참여 편향`.

## 20. round deadline /raʊnd ˈdedlaɪn/
**Part of speech:** noun
**Core meaning (English):** the time limit after which a federated server closes a training round and aggregates available updates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hạn thời gian server đóng round và gộp update có sẵn.
**Grammar & collocations:** `round-deadline policy` — policy; `close a timed round` — đóng.
**Examples:** `The round deadline balanced model freshness against waiting for slow devices.` → Deadline cân bằng freshness và chờ thiết bị.
**Liên kết tiếng Hàn:** `라운드 마감 시간`.

## Review in context

**Client drift** motivates a **federated optimizer** and a **secure aggregation protocol**. **Gradient sparsification** and **client sampling** reduce cost, while **straggler resilience** keeps a round moving. **Federated evaluation**, **personalized federation**, and **federated fine-tuning** expose different deployment goals; **communication compression** carries each **model delta**. **Partial participation** and **client heterogeneity** shape **federated analytics**, **update clipping**, and **server momentum**. **Federated dropout**, **cross-client normalization**, **participation bias**, and the **round deadline** must be measured before the system is trusted.

**Bản dịch tiếng Việt:** **Client drift** thúc đẩy **federated optimizer** và **secure aggregation protocol**. **Gradient sparsification** và **client sampling** giảm cost, còn **straggler resilience** giúp round tiếp tục. **Federated evaluation**, **personalized federation** và **federated fine-tuning** phục vụ mục tiêu triển khai khác nhau; **communication compression** truyền từng **model delta**. **Partial participation** và **client heterogeneity** định hình **federated analytics**, **update clipping** và **server momentum**. **Federated dropout**, **cross-client normalization**, **participation bias** và **round deadline** phải được đo trước khi tin hệ thống.
