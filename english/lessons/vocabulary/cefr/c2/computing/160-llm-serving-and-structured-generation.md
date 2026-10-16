# C2 Vocabulary — LLM serving and structured generation

This lesson follows a language model from deployment and memory placement through batching, mixture routing, sampling, and controlled outputs.

Flow: **model serving endpoint → inference graph → model warmup → cold-start latency → batching window → dynamic batching → mixed precision → memory offload → weight sharding → expert routing → mixture of experts → router load balance → token budget → probability cutoff → nucleus sampling → logit bias → prompt template → system instruction → tool-call schema → structured output**.

## 1. model serving endpoint /ˈmɒdəl ˈsɜːrvɪŋ ˈendpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a network interface that accepts requests and returns predictions from a deployed model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interface network nhận request và trả prediction từ model deploy.
**Grammar & collocations:** `model-serving-endpoint contract` — contract; `send an inference request` — gửi.
**Examples:** `The model serving endpoint exposed one versioned route for text generation.` → Endpoint phục vụ model mở route version cho text generation.
**Liên kết tiếng Hàn:** `모델 서빙 엔드포인트`.

## 2. inference graph /ˈɪnfərəns ɡræf/
**Part of speech:** noun
**Core meaning (English):** the ordered computation graph executed to turn model inputs into predictions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph computation có thứ tự đổi input model thành prediction.
**Grammar & collocations:** `inference-graph node` — node; `compile a graph for serving` — compile.
**Examples:** `The inference graph fused normalization with the first projection to reduce overhead.` → Graph gộp normalization với projection đầu để giảm overhead.
**Liên kết tiếng Hàn:** `추론 그래프`.

## 3. model warmup /ˈmɒdəl ˈwɔːrmʌp/
**Part of speech:** noun
**Core meaning (English):** preparing a loaded model and its execution resources before real traffic arrives.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuẩn bị model đã load và resource execution trước traffic thật.
**Grammar & collocations:** `model-warmup request` — request; `compile kernels before serving` — compile.
**Examples:** `Model warmup ran representative prompts before the endpoint accepted users.` → Warmup chạy prompt đại diện trước khi endpoint nhận user.
**Liên kết tiếng Hàn:** `모델 워밍업`.

## 4. cold-start latency /ˌkoʊld stɑːrt ˈleɪtənsi/
**Part of speech:** noun
**Core meaning (English):** the extra delay caused when an inactive model service must initialize before answering.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** delay thêm khi service model inactive phải init trước khi trả lời.
**Grammar & collocations:** `cold-start-latency spike` — spike; `hide initialization delay` — che.
**Examples:** `Cold-start latency dominated the first request after the autoscaler removed every replica.` → Latency cold start chiếm request đầu sau scale về zero.
**Liên kết tiếng Hàn:** `콜드 스타트 지연 시간`.

## 5. batching window /ˈbætʃɪŋ ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** a short interval during which compatible inference requests wait to be processed together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng ngắn request inference tương thích chờ để xử lý chung.
**Grammar & collocations:** `batching-window duration` — duration; `accumulate compatible requests` — gom.
**Examples:** `The batching window added a millisecond of waiting but improved accelerator utilization.` → Window thêm một ms chờ nhưng tăng utilization.
**Liên kết tiếng Hàn:** `배칭 창`.

## 6. dynamic batching /daɪˈnæmɪk ˈbætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** forming inference batches at runtime as requests arrive instead of fixing batches in advance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo batch lúc runtime khi request tới thay vì cố định trước.
**Grammar & collocations:** `dynamic-batching scheduler` — scheduler; `pack compatible sequences` — xếp.
**Examples:** `Dynamic batching packed short prompts together while leaving long contexts separate.` → Batching động gộp prompt ngắn, tách context dài.
**Liên kết tiếng Hàn:** `동적 배칭`.

## 7. mixed precision /mɪkst prɪˈsɪʒən/
**Part of speech:** noun
**Core meaning (English):** using more than one numerical precision during computation to reduce cost while preserving important accuracy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng nhiều precision số trong computation để giảm cost nhưng giữ accuracy cần.
**Grammar & collocations:** `mixed-precision kernel` — kernel; `cast an activation safely` — chuyển kiểu.
**Examples:** `Mixed precision reduced memory use without changing the model's validation score.` → Precision hỗn hợp giảm memory mà không đổi score.
**Liên kết tiếng Hàn:** `혼합 정밀도`.

## 8. memory offload /ˈmeməri ˈɒfloʊd/
**Part of speech:** noun
**Core meaning (English):** moving model weights or intermediate data to a slower memory tier when fast memory is scarce.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển weight/intermediate data sang memory chậm khi memory nhanh thiếu.
**Grammar & collocations:** `memory-offload policy` — policy; `page weights to host memory` — chuyển.
**Examples:** `Memory offload let the service load a model larger than the accelerator's local memory.` → Offload giúp load model lớn hơn memory accelerator.
**Liên kết tiếng Hàn:** `메모리 오프로딩`.

## 9. weight sharding /weɪt ˈʃɑːrdɪŋ/
**Part of speech:** noun
**Core meaning (English):** partitioning model parameters across devices so no single device stores the complete weight set.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia parameter model giữa device để không device nào giữ toàn bộ weight.
**Grammar & collocations:** `weight-sharding layout` — layout; `gather a parameter shard` — gom.
**Examples:** `Weight sharding allowed four accelerators to host the model jointly.` → Sharding cho bốn accelerator cùng host model.
**Liên kết tiếng Hàn:** `가중치 샤딩`.

## 10. expert routing /ˈekspɜːrt ˈraʊtɪŋ/
**Part of speech:** noun
**Core meaning (English):** selecting which specialized model components should process each input token or example.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn component model chuyên biệt xử lý từng token/example.
**Grammar & collocations:** `expert-routing decision` — decision; `dispatch a token to an expert` — gửi.
**Examples:** `Expert routing sent code-related tokens to a specialist component.` → Routing gửi token code tới component chuyên.
**Liên kết tiếng Hàn:** `전문가 라우팅`.

## 11. mixture of experts /ˈmɪkstʃər əv ˈekspɜːrts/
**Part of speech:** noun
**Core meaning (English):** a model architecture containing several expert submodels with only a subset activated for each input.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** architecture có nhiều expert, mỗi input chỉ activate một phần.
**Grammar & collocations:** `mixture-of-experts layer` — layer; `activate sparse experts` — kích hoạt.
**Examples:** `The mixture of experts increased capacity without running every expert for every token.` → MoE tăng capacity mà không chạy mọi expert.
**Liên kết tiếng Hàn:** `혼합 전문가`.

## 12. router load balance /ˈraʊtər loʊd ˈbæləns/
**Part of speech:** noun
**Core meaning (English):** keeping expert selection sufficiently even so one expert does not receive disproportionate traffic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ lựa chọn expert đủ đều để một expert không nhận quá nhiều traffic.
**Grammar & collocations:** `router-load-balance loss` — loss; `spread tokens across experts` — phân.
**Examples:** `Router load balance prevented one popular expert from becoming the throughput bottleneck.` → Cân bằng router ngăn expert phổ biến thành bottleneck.
**Liên kết tiếng Hàn:** `라우터 부하 균형`.

## 13. token budget /ˈtoʊkən ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a limit on the number of input and output tokens permitted for one model request.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn số token input/output cho một request model.
**Grammar & collocations:** `token-budget limit` — limit; `truncate an overlong prompt` — cắt.
**Examples:** `The token budget left enough room for the answer after the retrieved context was added.` → Budget chừa đủ chỗ cho answer sau context.
**Liên kết tiếng Hàn:** `토큰 예산`.

## 14. probability cutoff /prɒbəˈbɪləti ˈkʌtɒf/
**Part of speech:** noun
**Core meaning (English):** a threshold that removes candidate tokens whose probability falls below an allowed level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngưỡng loại token có xác suất dưới mức cho phép.
**Grammar & collocations:** `probability-cutoff threshold` — threshold; `discard low-probability candidates` — bỏ.
**Examples:** `The probability cutoff removed implausible continuations before the decoder sampled.` → Cutoff bỏ continuation khó xảy ra trước khi decoder sample.
**Liên kết tiếng Hàn:** `톱-k 샘플링`.

## 15. nucleus sampling /ˈnjuːkliəs ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** choosing the next token from the smallest candidate set whose probabilities reach a chosen cumulative mass.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn token từ set nhỏ nhất có cumulative probability đạt mức chọn.
**Grammar & collocations:** `nucleus-sampling threshold` — threshold; `vary the candidate pool` — thay đổi.
**Examples:** `Nucleus sampling enlarged the candidate pool when the model was uncertain.` → Sampling nucleus mở rộng pool khi model không chắc.
**Liên kết tiếng Hàn:** `뉴클리어스 샘플링`.

## 16. logit bias /ˈlɒɡɪt ˈbaɪəs/
**Part of speech:** noun
**Core meaning (English):** an adjustment to token scores that makes selected tokens more or less likely during generation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh score token để token chọn dễ hoặc khó xuất hiện khi generate.
**Grammar & collocations:** `logit-bias value` — value; `discourage a token` — giảm khả năng.
**Examples:** `The decoder applied logit bias to discourage an unwanted delimiter.` → Decoder dùng bias để giảm delimiter không muốn.
**Liên kết tiếng Hàn:** `로짓 편향`.

## 17. prompt template /prɒmpt ˈtemplət/
**Part of speech:** noun
**Core meaning (English):** a reusable structure that places user data, instructions, and context into a model input.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** structure tái sử dụng đặt data user, instruction và context vào input model.
**Grammar & collocations:** `prompt-template variable` — variable; `render a grounded prompt` — render.
**Examples:** `The prompt template inserted the account policy before the user's question.` → Template chèn policy account trước câu hỏi.
**Liên kết tiếng Hàn:** `프롬프트 템플릿`.

## 18. system instruction /ˈsɪstəm ɪnˈstrʌkʃən/
**Part of speech:** noun
**Core meaning (English):** a high-priority instruction defining a model's role, boundaries, or response behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** instruction ưu tiên cao định nghĩa role, boundary hoặc behavior response của model.
**Grammar & collocations:** `system-instruction hierarchy` — hierarchy; `enforce a response constraint` — áp dụng.
**Examples:** `The system instruction required the assistant to cite retrieved evidence.` → Instruction hệ thống yêu cầu assistant dẫn evidence.
**Liên kết tiếng Hàn:** `시스템 지침`.

## 19. tool-call schema /tuːl kɔːl ˈskiːmə/
**Part of speech:** noun
**Core meaning (English):** a declared structure specifying the name, arguments, and types of a tool a model may invoke.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** structure khai báo tên, argument và type của tool model được gọi.
**Grammar & collocations:** `tool-call-schema validation` — validation; `emit typed arguments` — phát.
**Examples:** `The tool-call schema rejected a weather request that omitted its location.` → Schema từ chối request thiếu location.
**Liên kết tiếng Hàn:** `도구 호출 스키마`.

## 20. structured output /ˈstrʌktʃərd ˈaʊtpʊt/
**Part of speech:** noun
**Core meaning (English):** a model response constrained to a declared machine-readable format.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** response model bị giới hạn trong format máy đọc được đã khai báo.
**Grammar & collocations:** `structured-output parser` — parser; `return a validated object` — trả.
**Examples:** `Structured output let the workflow consume the model's answer without scraping prose.` → Output có cấu trúc giúp workflow dùng answer không scrape prose.
**Liên kết tiếng Hàn:** `구조화된 출력`.

## Review in context

A **model serving endpoint** executes an **inference graph**; **model warmup** reduces **cold-start latency**. A **batching window** enables **dynamic batching**, while **mixed precision** and **memory offload** reduce memory pressure. **Weight sharding** spreads parameters; **expert routing** selects components in a **mixture of experts**, and **router load balance** prevents hotspots. A **token budget** limits generation. A **probability cutoff**, **nucleus sampling**, and **logit bias** shape token choice. A **prompt template** places context, a **system instruction** sets behavior, a **tool-call schema** validates arguments, and **structured output** returns machine-readable results.

**Bản dịch tiếng Việt:** **Model serving endpoint** chạy **inference graph**; **model warmup** giảm **cold-start latency**. **Batching window** hỗ trợ **dynamic batching**, còn **mixed precision** và **memory offload** giảm áp lực memory. **Weight sharding** chia parameter; **expert routing** chọn component trong **mixture of experts**, còn **router load balance** ngăn hotspot. **Token budget** giới hạn generation. **Probability cutoff**, **nucleus sampling** và **logit bias** định hình lựa chọn token. **Prompt template** đặt context, **system instruction** đặt behavior, **tool-call schema** validate argument, còn **structured output** trả result máy đọc được.
