# C2 Vocabulary — Language-model inference and serving

This lesson follows language-model serving from cache and sampling choices through quantization, parallelism, and request-phase optimization.

Flow: **KV cache → temperature scaling → top-k sampling → top-p sampling → weight-only quantization → activation quantization → expert parallelism → mixture-of-experts routing → load balancing loss → prompt caching → prefill phase → decode phase → attention kernel → flash attention → paged attention → request batching → token speculation → logit lens → vocabulary truncation → rotary embedding**.

## 1. KV cache /ˌkeɪ viː kæʃ/
**Part of speech:** noun
**Core meaning (English):** stored key and value tensors that let an autoregressive model reuse earlier attention states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tensor key/value lưu để model tái sử dụng attention trước.
**Grammar & collocations:** `KV-cache allocation` — allocation; `reuse a prefix state` — tái sử dụng.
**Examples:** `The KV cache reduced repeated attention work while the model generated a long answer.` → Cache giảm attention lặp.
**Liên kết tiếng Hàn:** `KV 캐시`.

## 2. temperature scaling /ˈtemprətʃər ˈskeɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** dividing logits by a temperature value to make a probability distribution sharper or flatter before sampling.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia logit theo temperature để distribution sắc hoặc phẳng hơn.
**Grammar & collocations:** `temperature-scaling parameter` — parameter; `flatten a token distribution` — làm phẳng.
**Examples:** `Temperature scaling made the assistant's continuation more varied but less predictable.` → Scaling làm output đa dạng hơn.
**Liên kết tiếng Hàn:** `온도 스케일링`.

## 3. top-k sampling /tɒp keɪ ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** sampling the next token only from the k highest-probability candidates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ lấy token tiếp theo trong k candidate xác suất cao nhất.
**Grammar & collocations:** `top-k-sampling cutoff` — cutoff; `restrict a candidate set` — giới hạn.
**Examples:** `Top-k sampling removed implausible tokens before the response was generated.` → Sampling bỏ token không hợp lý.
**Liên kết tiếng Hàn:** `top-k 샘플링`.

## 4. top-p sampling /tɒp piː ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** sampling from the smallest probability mass whose cumulative probability reaches a chosen threshold p.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lấy tập token nhỏ nhất có cumulative probability đạt p.
**Grammar & collocations:** `top-p-sampling threshold` — threshold; `truncate the probability tail` — cắt.
**Examples:** `Top-p sampling adapted the candidate count to the model's uncertainty at each step.` → Sampling đổi số candidate theo uncertainty.
**Liên kết tiếng Hàn:** `top-p 샘플링`.

## 5. weight-only quantization /weɪt ˈoʊnli ˌkwɒntəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** reducing the numerical precision of model weights while leaving activations in a higher-precision format.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm precision weight nhưng giữ activation precision cao.
**Grammar & collocations:** `weight-only-quantization scheme` — scheme; `pack low-bit weights` — đóng gói.
**Examples:** `Weight-only quantization reduced memory use with a small quality change.` → Quantization giảm memory với đổi chất lượng nhỏ.
**Liên kết tiếng Hàn:** `가중치 전용 양자화`.

## 6. activation quantization /ˌæktɪˈveɪʃən ˌkwɒntəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** reducing the numerical precision of intermediate activation values during model execution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm precision của activation trung gian lúc chạy.
**Grammar & collocations:** `activation-quantization calibration` — calibration; `clip an activation range` — cắt.
**Examples:** `Activation quantization required calibration samples that reflected deployment prompts.` → Quantization cần sample calibration phù hợp.
**Liên kết tiếng Hàn:** `활성화 양자화`.

## 7. expert parallelism /ˈekspɜːrt ˈpærəlelɪzəm/
**Part of speech:** noun
**Core meaning (English):** distributing separate expert networks across devices in a mixture-of-experts model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia network expert lên nhiều device trong MoE.
**Grammar & collocations:** `expert-parallelism group` — group; `route tokens to a device` — định tuyến.
**Examples:** `Expert parallelism let the model increase parameter count without activating every weight.` → Parallelism tăng parameter mà không chạy hết.
**Liên kết tiếng Hàn:** `전문가 병렬화`.

## 8. mixture-of-experts routing /ˈmɪkstʃər əv ˈekspɜːrts ˈruːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** choosing a small set of expert networks for each token in a sparsely activated model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn vài expert cho mỗi token trong model kích hoạt thưa.
**Grammar & collocations:** `mixture-of-experts-routing score` — score; `assign a token to experts` — gán.
**Examples:** `Mixture-of-experts routing sent mathematical tokens toward a specialized expert.` → Routing đưa token toán tới expert riêng.
**Liên kết tiếng Hàn:** `혼합 전문가 라우팅`.

## 9. load balancing loss /loʊd ˈbælənsɪŋ lɒs/
**Part of speech:** noun
**Core meaning (English):** an auxiliary loss that discourages a mixture-of-experts router from sending too many tokens to a few experts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loss phụ ngăn router dồn token vào ít expert.
**Grammar & collocations:** `load-balancing-loss coefficient` — coefficient; `equalize expert utilization` — cân bằng.
**Examples:** `The load balancing loss prevented one expert from becoming a throughput bottleneck.` → Loss ngăn một expert nghẽn.
**Liên kết tiếng Hàn:** `부하 균형 손실`.

## 10. prompt caching /prɒmpt ˈkæʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** reusing computed prefix states for repeated or shared prompts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tái dùng state prefix đã tính cho prompt lặp/chung.
**Grammar & collocations:** `prompt-caching key` — key; `reuse a shared prefix` — tái sử dụng.
**Examples:** `Prompt caching lowered latency for agents that reused the same policy instructions.` → Caching giảm latency cho agent.
**Liên kết tiếng Hàn:** `프롬프트 캐싱`.

## 11. prefill phase /ˈpriːfɪl feɪz/
**Part of speech:** noun
**Core meaning (English):** the inference phase that processes the input prompt and builds attention states before generation begins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phase đọc prompt và tạo attention state trước khi sinh.
**Grammar & collocations:** `prefill-phase throughput` — throughput; `encode a prompt batch` — mã hóa.
**Examples:** `The prefill phase consumed most of the compute for a very long document prompt.` → Prefill tốn compute với prompt dài.
**Liên kết tiếng Hàn:** `프리필 단계`.

## 12. decode phase /dɪˈkoʊd feɪz/
**Part of speech:** noun
**Core meaning (English):** the autoregressive phase that generates output tokens one step at a time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phase sinh token output tuần tự từng bước.
**Grammar & collocations:** `decode-phase latency` — latency; `generate a token incrementally` — sinh.
**Examples:** `The decode phase was memory-bound because every step read the KV cache.` → Decode bị giới hạn memory.
**Liên kết tiếng Hàn:** `디코드 단계`.

## 13. attention kernel /əˈtenʃən ˈkɜːrnəl/
**Part of speech:** noun
**Core meaning (English):** a low-level computational routine implementing the matrix operations of an attention layer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** routine cấp thấp thực hiện phép matrix của attention.
**Grammar & collocations:** `attention-kernel fusion` — fusion; `tile a matrix product` — chia tile.
**Examples:** `The optimized attention kernel reduced memory traffic between GPU stages.` → Kernel giảm traffic memory.
**Liên kết tiếng Hàn:** `어텐션 커널`.

## 14. flash attention /flæʃ əˈtenʃən/
**Part of speech:** noun
**Core meaning (English):** an attention implementation that reduces memory movement by tiling computation and avoiding a full attention matrix.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** attention giảm movement memory bằng tile và không lưu matrix đầy đủ.
**Grammar & collocations:** `flash-attention kernel` — kernel; `fuse a softmax pass` — hợp nhất.
**Examples:** `Flash attention enabled a longer context under the same GPU memory limit.` → Flash attention cho context dài hơn.
**Liên kết tiếng Hàn:** `플래시 어텐션`.

## 15. paged attention /peɪdʒd əˈtenʃən/
**Part of speech:** noun
**Core meaning (English):** managing attention-state memory in noncontiguous blocks so sequences can grow and share capacity efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quản lý memory attention theo block rời để sequence tăng linh hoạt.
**Grammar & collocations:** `paged-attention block table` — table; `allocate a cache page` — cấp phát.
**Examples:** `Paged attention reduced wasted memory when requests had very different lengths.` → Attention paged giảm memory lãng phí.
**Liên kết tiếng Hàn:** `페이지드 어텐션`.

## 16. request batching /rɪˈkwest ˈbætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** grouping multiple inference requests so a device processes them together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom nhiều request để device xử lý chung.
**Grammar & collocations:** `request-batching scheduler` — scheduler; `form a dynamic batch` — tạo.
**Examples:** `Request batching improved accelerator utilization but made individual latency less predictable.` → Batching tăng utilization nhưng latency khó đoán.
**Liên kết tiếng Hàn:** `요청 배칭`.

## 17. token speculation /ˈtoʊkən ˌspekjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** proposing several future tokens with a faster model before a larger model verifies them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model nhỏ đề xuất token, model lớn kiểm tra sau.
**Grammar & collocations:** `token-speculation draft` — draft; `verify a proposed suffix` — xác minh.
**Examples:** `Token speculation shortened decode time when the draft model predicted common phrases.` → Speculation rút decode với phrase phổ biến.
**Liên kết tiếng Hàn:** `토큰 추측`.

## 18. logit lens /ˈlɒɡɪt lenz/
**Part of speech:** noun
**Core meaning (English):** an interpretability technique that projects intermediate hidden states into the output vocabulary to inspect emerging predictions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chiếu hidden state trung gian vào vocabulary để xem prediction đang hình thành.
**Grammar & collocations:** `logit-lens probe` — probe; `inspect an intermediate prediction` — kiểm tra.
**Examples:** `The logit lens showed the model settling on a named entity several layers before output.` → Lens cho thấy entity sớm.
**Liên kết tiếng Hàn:** `로짓 렌즈`.

## 19. vocabulary truncation /vəˈkæbjəleri trʌŋˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** restricting the output vocabulary to reduce computation or prevent unsuitable tokens.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn vocabulary output để giảm compute hoặc bỏ token không phù hợp.
**Grammar & collocations:** `vocabulary-truncation mask` — mask; `exclude a token class` — loại.
**Examples:** `Vocabulary truncation prevented code generation from emitting prose punctuation.` → Truncation ngăn token prose.
**Liên kết tiếng Hàn:** `어휘 절단`.

## 20. rotary embedding /ˈroʊtəri emˈbedɪŋ/
**Part of speech:** noun
**Core meaning (English):** encoding position by rotating query and key representations before attention is computed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã hóa vị trí bằng xoay representation query/key.
**Grammar & collocations:** `rotary-embedding frequency` — frequency; `rotate a position vector` — xoay.
**Examples:** `Rotary embedding let the model represent relative positions across a long prompt.` → Embedding biểu diễn vị trí tương đối.
**Liên kết tiếng Hàn:** `회전 임베딩`.

## Review in context

A **KV cache**, **temperature scaling**, **top-k sampling**, and **top-p sampling** shape generation. **Weight-only quantization** and **activation quantization** reduce memory; **expert parallelism**, **mixture-of-experts routing**, and **load balancing loss** distribute sparse computation. **Prompt caching** accelerates the **prefill phase**, while the **decode phase** uses an **attention kernel**, **flash attention**, and **paged attention**. **Request batching**, **token speculation**, a **logit lens**, **vocabulary truncation**, and **rotary embedding** complete serving and analysis.

**Bản dịch tiếng Việt:** **KV cache**, **temperature scaling**, **top-k sampling** và **top-p sampling** định hình việc sinh. **Weight-only quantization** và **activation quantization** giảm memory; **expert parallelism**, **mixture-of-experts routing** và **load balancing loss** phân phối compute thưa. **Prompt caching** tăng tốc **prefill phase**, còn **decode phase** dùng **attention kernel**, **flash attention** và **paged attention**. **Request batching**, **token speculation**, **logit lens**, **vocabulary truncation** và **rotary embedding** hoàn thiện serving và phân tích.
