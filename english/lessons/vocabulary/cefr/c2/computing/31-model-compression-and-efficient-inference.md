# C2 Vocabulary — Model compression and efficient inference

This lesson follows a model from pruning and factorization through quantization, sparse kernels, and deployment trade-offs.

Flow: **weight pruning → structured sparsity → unstructured sparsity → magnitude pruning → low-rank factorization → tensor decomposition → weight sharing → codebook quantization → activation clipping → integer-only inference → mixed-bit quantization → quantization-aware training → post-training quantization → sparse kernel → pruning mask → model footprint → accuracy recovery → latency headroom → distillation target → compression checkpoint**.

## 1. weight pruning /weɪt ˈpruːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** removing model weights that contribute little to the output while attempting to preserve task performance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ weight ít quan trọng để model nhỏ và nhẹ hơn.
**Grammar & collocations:** `weight-pruning schedule` — schedule; `prune low-magnitude weights` — prune.
**Examples:** `Weight pruning reduced the dense layer without changing the validation score materially.` → Pruning giảm layer dense mà validation score gần như không đổi.
**Liên kết tiếng Hàn:** `가중치 가지치기`.

## 2. structured sparsity /ˈstrʌktʃərd ˈspɑrsəti/
**Part of speech:** noun
**Core meaning (English):** sparsity arranged in regular groups, channels, blocks, or patterns that hardware can skip efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ theo cấu trúc đều để hardware thực sự tận dụng zero.
**Grammar & collocations:** `structured-sparsity pattern` — pattern; `enforce channel sparsity` — enforce.
**Examples:** `Structured sparsity removed whole channels that the accelerator could skip efficiently.` → Sparsity có cấu trúc bỏ cả channel để accelerator skip.
**Liên kết tiếng Hàn:** `구조적 희소성`.

## 3. unstructured sparsity /ʌnˈstrʌktʃərd ˈspɑrsəti/
**Part of speech:** noun
**Core meaning (English):** sparsity formed by individual zero-valued weights without a regular hardware-friendly pattern.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** zero rải rác tự do, thường khó tăng tốc nếu hardware không hỗ trợ.
**Grammar & collocations:** `unstructured-sparsity mask` — mask; `store sparse weights` — lưu.
**Examples:** `Unstructured sparsity achieved a higher zero fraction but required a specialized kernel.` → Sparsity không cấu trúc đạt nhiều zero hơn nhưng cần kernel riêng.
**Liên kết tiếng Hàn:** `비구조적 희소성`.

## 4. magnitude pruning /ˈmæɡnəˌtuːd ˈpruːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** pruning based on the absolute size of weights or another importance score.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** weight nhỏ về magnitude bị loại trước.
**Grammar & collocations:** `magnitude-pruning threshold` — threshold; `rank weights by magnitude` — xếp hạng.
**Examples:** `Magnitude pruning removed weights below the selected percentile.` → Pruning bỏ weight dưới percentile chọn trước.
**Liên kết tiếng Hàn:** `크기 기반 가지치기`.

## 5. low-rank factorization /loʊ ræŋk ˌfæktərɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** approximating a large parameter matrix with a product of smaller low-rank matrices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách matrix lớn thành vài matrix nhỏ hơn.
**Grammar & collocations:** `low-rank-factorization rank` — rank; `factorize a projection` — factorize.
**Examples:** `Low-rank factorization reduced the projection cost with a small accuracy loss.` → Factorization giảm cost projection với accuracy loss nhỏ.
**Liên kết tiếng Hàn:** `저랭크 분해`.

## 6. tensor decomposition /ˈtɛnsər ˌdiːkɑmpəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** representing a high-dimensional tensor as a combination of simpler lower-dimensional tensors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân rã tensor nhiều chiều thành thành phần đơn giản.
**Grammar & collocations:** `tensor-decomposition rank` — rank; `decompose a convolution tensor` — phân rã.
**Examples:** `Tensor decomposition replaced one expensive convolution with several smaller operations.` → Decomposition đổi convolution nặng thành operation nhỏ.
**Liên kết tiếng Hàn:** `텐서 분해`.

## 7. weight sharing /weɪt ˈʃɛrɪŋ/
**Part of speech:** noun
**Core meaning (English):** reusing the same parameter values across multiple positions or components of a model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều vị trí dùng chung weight để giảm số parameter.
**Grammar & collocations:** `weight-sharing scheme` — scheme; `tie parameters` — buộc chung.
**Examples:** `Weight sharing cut storage while preserving the repeated structure of the decoder.` → Sharing giảm storage mà giữ cấu trúc lặp decoder.
**Liên kết tiếng Hàn:** `가중치 공유`.

## 8. codebook quantization /ˈkoʊdˌbʊk ˌkwɑntəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** representing many values with indexes into a smaller learned or fixed set of representative values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** weight không lưu trực tiếp mà trỏ tới codebook nhỏ.
**Grammar & collocations:** `codebook-quantization table` — table; `learn codebook entries` — học.
**Examples:** `Codebook quantization stored repeated weight values as compact indexes.` → Quantization codebook lưu value lặp bằng index nhỏ.
**Liên kết tiếng Hàn:** `코드북 양자화`.

## 9. activation clipping /ˌæktəˈveɪʃən ˈklɪpɪŋ/
**Part of speech:** noun
**Core meaning (English):** limiting activation values to a chosen range before or during reduced-precision computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cắt activation quá lớn để phù hợp range precision thấp.
**Grammar & collocations:** `activation-clipping range` — range; `clip outliers` — cắt outlier.
**Examples:** `Activation clipping prevented rare outliers from consuming most of the integer range.` → Clipping ngăn outlier chiếm gần hết range integer.
**Liên kết tiếng Hàn:** `활성화 클리핑`.

## 10. integer-only inference /ˈɪntədʒər ˈoʊnli ˈɪnfərəns/
**Part of speech:** noun
**Core meaning (English):** running model computations with integer representations rather than converting back to floating point for most operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** inference chủ yếu dùng integer để tiết kiệm energy và hardware cost.
**Grammar & collocations:** `integer-only-inference path` — path; `accumulate in int32` — accumulate.
**Examples:** `Integer-only inference reduced power on the edge processor.` → Inference integer giảm power trên edge processor.
**Liên kết tiếng Hàn:** `정수 전용 추론`.

## 11. mixed-bit quantization /mɪkst bɪt ˌkwɑntəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** assigning different numeric precisions to different layers, tensors, or channels.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** layer nhạy dùng bit cao, layer dễ nén dùng bit thấp.
**Grammar & collocations:** `mixed-bit-quantization plan` — plan; `allocate bit widths` — phân bổ.
**Examples:** `Mixed-bit quantization kept the first and last layers at higher precision.` → Quantization mixed-bit giữ layer đầu/cuối precision cao hơn.
**Liên kết tiếng Hàn:** `혼합 비트 양자화`.

## 12. quantization-aware training /ˌkwɑntəˈzeɪʃən əˈwɛr ˈtreɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** training that simulates reduced-precision effects so the model adapts before deployment quantization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model thấy lỗi quantization ngay trong train để học cách chịu lỗi.
**Grammar & collocations:** `quantization-aware-training graph` — graph; `simulate quantization noise` — mô phỏng.
**Examples:** `Quantization-aware training recovered accuracy lost by naive eight-bit conversion.` → QAT lấy lại accuracy mất do đổi 8-bit đơn giản.
**Liên kết tiếng Hàn:** `양자화 인식 학습`.

## 13. post-training quantization /poʊst ˈtreɪnɪŋ ˌkwɑntəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** converting a trained model to lower precision without retraining all parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quantize sau train, nhanh hơn nhưng có thể mất accuracy.
**Grammar & collocations:** `post-training-quantization flow` — flow; `quantize a checkpoint` — quantize.
**Examples:** `Post-training quantization compressed the checkpoint without another full training run.` → PTQ nén checkpoint mà không train lại toàn bộ.
**Liên kết tiếng Hàn:** `사후 학습 양자화`.

## 14. sparse kernel /spɑrs ˈkɝnəl/
**Part of speech:** noun
**Core meaning (English):** a kernel optimized to skip or process zero-valued elements efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kernel biết bỏ zero để không tính vô ích.
**Grammar & collocations:** `sparse-kernel speedup` — speedup; `dispatch a sparse kernel` — dispatch.
**Examples:** `The sparse kernel delivered a speedup only when the mask matched the hardware pattern.` → Kernel sparse chỉ nhanh khi mask hợp pattern hardware.
**Liên kết tiếng Hàn:** `희소 커널`.

## 15. pruning mask /ˈpruːnɪŋ mæsk/
**Part of speech:** noun
**Core meaning (English):** a binary or structured indicator specifying which weights or channels remain active after pruning.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mask 0/1 cho biết weight nào giữ hay bỏ.
**Grammar & collocations:** `pruning-mask format` — format; `apply a mask` — áp dụng.
**Examples:** `The pruning mask was stored beside the sparse checkpoint for deterministic loading.` → Mask lưu cạnh checkpoint sparse để load tái lập.
**Liên kết tiếng Hàn:** `가지치기 마스크`.

## 16. model footprint /ˈmɑdəl ˈfʊtˌprɪnt/
**Part of speech:** noun
**Core meaning (English):** the storage, memory, and compute resources required to package and run a model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “dấu chân” tài nguyên của model.
**Grammar & collocations:** `model-footprint estimate` — estimate; `reduce the footprint` — giảm.
**Examples:** `The compressed model footprint fit within the gateway's memory budget.` → Footprint model nén vừa memory gateway.
**Liên kết tiếng Hàn:** `모델 풋프린트`.

## 17. accuracy recovery /ˈækjərəsi rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** improvement that restores performance lost during pruning, factorization, or quantization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bước fine-tune hoặc calibration lấy lại accuracy đã mất.
**Grammar & collocations:** `accuracy-recovery fine-tuning` — fine-tuning; `recover lost accuracy` — phục hồi.
**Examples:** `A short recovery fine-tune restored accuracy on the rare-class slice.` → Fine-tune phục hồi accuracy ở slice class hiếm.
**Liên kết tiếng Hàn:** `정확도 회복`.

## 18. latency headroom /ˈleɪtənsi ˈhɛdˌruːm/
**Part of speech:** noun
**Core meaning (English):** the spare time available below a latency limit for additional processing or workload variation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng trống latency còn lại trước khi vượt SLA.
**Grammar & collocations:** `latency-headroom budget` — budget; `preserve headroom` — giữ.
**Examples:** `The sparse optimization created enough latency headroom for input validation.` → Tối ưu sparse tạo đủ headroom cho validation input.
**Liên kết tiếng Hàn:** `지연 시간 여유`.

## 19. distillation target /ˌdɪstəˈleɪʃən ˈtɑrɡɪt/
**Part of speech:** noun
**Core meaning (English):** the teacher outputs, representations, or behaviors that a smaller student model is trained to reproduce.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mục tiêu student học lại từ teacher.
**Grammar & collocations:** `distillation-target loss` — loss; `match teacher logits` — match.
**Examples:** `The distillation target included teacher logits on difficult examples.` → Target gồm logits teacher trên example khó.
**Liên kết tiếng Hàn:** `증류 대상`.

## 20. compression checkpoint /kəmˈprɛʃən ˈtʃɛkˌpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a saved model state representing a particular compression configuration and its measured performance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** checkpoint gắn với mức prune/quantize cụ thể và metric tương ứng.
**Grammar & collocations:** `compression-checkpoint catalog` — catalog; `compare compressed checkpoints` — so sánh.
**Examples:** `The compression checkpoint preserved the mask, scales, and validation report together.` → Checkpoint giữ mask, scale và report validation cùng nhau.
**Liên kết tiếng Hàn:** `압축 체크포인트`.

## Review in context

**Weight pruning** can create **structured sparsity** or **unstructured sparsity**, often using **magnitude pruning** and a **pruning mask**. **Low-rank factorization**, **tensor decomposition**, and **weight sharing** reduce parameters; **codebook quantization** stores repeated values compactly. **Activation clipping** supports **integer-only inference**, while **mixed-bit quantization**, **quantization-aware training**, and **post-training quantization** trade precision for efficiency. A **sparse kernel** must match the mask pattern. The resulting **model footprint** is measured against **accuracy recovery** and **latency headroom**. A **distillation target** can guide the smaller model, and a **compression checkpoint** records the exact configuration.

**Bản dịch tiếng Việt:** **Weight pruning** có thể tạo **structured sparsity** hoặc **unstructured sparsity**, thường dùng **magnitude pruning** và **pruning mask**. **Low-rank factorization**, **tensor decomposition** và **weight sharing** giảm parameter; **codebook quantization** lưu value lặp nhỏ gọn. **Activation clipping** hỗ trợ **integer-only inference**, còn **mixed-bit quantization**, **quantization-aware training** và **post-training quantization** đánh đổi precision với efficiency. **Sparse kernel** phải hợp pattern mask. **Model footprint** được cân với **accuracy recovery** và **latency headroom**. **Distillation target** hướng dẫn model nhỏ hơn, còn **compression checkpoint** ghi cấu hình chính xác.
