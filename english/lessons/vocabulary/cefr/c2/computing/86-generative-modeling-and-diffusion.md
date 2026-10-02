# C2 Vocabulary — Generative modeling and diffusion

This lesson follows a generative model from latent structure and likelihood through score estimation, diffusion sampling, and distillation.

Flow: **rate-distortion trade-off → latent variable model → normalizing flow → score matching → denoising objective → diffusion sampler → classifier-free guidance → cross-attention conditioning → autoregressive factorization → variational posterior → amortized inference → posterior collapse → mode coverage → mode seeking → likelihood-free training → energy-based model → score function → noise schedule → latent diffusion → consistency distillation**.

## 1. rate-distortion trade-off /reɪt dɪˈstɔːrʃən ˈtreɪd ɒf/
**Part of speech:** noun
**Core meaning (English):** the balance between how compactly a model represents data and how accurately it reconstructs the data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cân bằng giữa nén representation và độ chính xác reconstruction.
**Grammar & collocations:** `rate-distortion-trade-off curve` — curve; `allocate a latent bit` — phân bổ.
**Examples:** `The rate-distortion trade-off favored a smaller latent code at the cost of fine texture.` → Trade-off chọn code nhỏ nhưng mất texture.
**Liên kết tiếng Hàn:** `율-왜곡 절충`.

## 2. latent variable model /ˈleɪtənt ˈveriəbəl ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** a probabilistic model that explains observations through unobserved variables.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model giải thích observation qua biến ẩn.
**Grammar & collocations:** `latent-variable-model prior` — prior; `infer a hidden cause` — suy ra.
**Examples:** `The latent variable model represented lighting as a hidden factor behind each image.` → Model coi ánh sáng là factor ẩn.
**Liên kết tiếng Hàn:** `잠재 변수 모델`.

## 3. normalizing flow /ˈnɔːrməlaɪzɪŋ floʊ/
**Part of speech:** noun
**Core meaning (English):** an invertible transformation that converts a simple probability distribution into a complex one with tractable density evaluation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến đổi khả nghịch từ distribution đơn giản sang phức tạp nhưng vẫn tính density được.
**Grammar & collocations:** `normalizing-flow Jacobian` — Jacobian; `invert a transformation` — đảo.
**Examples:** `The normalizing flow evaluated an exact likelihood for each generated sample.` → Flow tính likelihood chính xác.
**Liên kết tiếng Hàn:** `정규화 흐름`.

## 4. score matching /skɔːr ˈmætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** training a model to estimate the gradient of the log density without directly computing the density itself.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học gradient của log density mà không cần tính density trực tiếp.
**Grammar & collocations:** `score-matching objective` — objective; `estimate a density gradient` — ước tính.
**Examples:** `Score matching learned the direction toward higher data density from noisy examples.` → Matching học hướng về vùng density cao.
**Liên kết tiếng Hàn:** `점수 매칭`.

## 5. denoising objective /diːˈnɔɪzɪŋ əbˈdʒektɪv/
**Part of speech:** noun
**Core meaning (English):** a training objective that asks a model to recover clean information from a deliberately corrupted input.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** objective yêu cầu khôi phục thông tin sạch từ input bị phá.
**Grammar & collocations:** `denoising-objective target` — target; `predict a clean signal` — dự đoán.
**Examples:** `The denoising objective taught the network to remove progressively stronger noise.` → Objective dạy bỏ noise tăng dần.
**Liên kết tiếng Hàn:** `잡음 제거 목적 함수`.

## 6. diffusion sampler /dɪˈfjuːʒən ˈsæmplər/
**Part of speech:** noun
**Core meaning (English):** an algorithm that reverses a learned noising process to generate a sample step by step.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuật toán đảo quá trình thêm noise để sinh sample từng bước.
**Grammar & collocations:** `diffusion-sampler step` — step; `denoise a latent state` — khử noise.
**Examples:** `The diffusion sampler produced a sharper image after using a longer schedule.` → Sampler tạo ảnh nét hơn với schedule dài.
**Liên kết tiếng Hàn:** `확산 샘플러`.

## 7. classifier-free guidance /ˈklæsɪfaɪər friː ˈɡaɪdəns/
**Part of speech:** noun
**Core meaning (English):** steering a diffusion sample by combining conditional and unconditional predictions without a separate classifier.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều hướng sample bằng prediction có/không điều kiện mà không cần classifier.
**Grammar & collocations:** `classifier-free-guidance scale` — scale; `strengthen a text condition` — tăng.
**Examples:** `Classifier-free guidance made the generated object follow the prompt more closely.` → Guidance làm object sát prompt.
**Liên kết tiếng Hàn:** `분류기 없는 안내`.

## 8. cross-attention conditioning /krɒs əˈtenʃən kənˈdɪʃənɪŋ/
**Part of speech:** noun
**Core meaning (English):** conditioning a generator by letting its hidden states attend to an external sequence such as text.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** generator attention tới sequence ngoài như text để điều kiện hóa.
**Grammar & collocations:** `cross-attention-conditioning block` — block; `inject a prompt token` — chèn.
**Examples:** `Cross-attention conditioning linked each denoising step to the requested description.` → Conditioning nối mỗi bước với mô tả.
**Liên kết tiếng Hàn:** `교차 어텐션 조건화`.

## 9. autoregressive factorization /ˌɔːtoʊrəˈɡresɪv ˌfæktəraɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** decomposing a joint distribution into a sequence of conditional predictions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách joint distribution thành chuỗi prediction có điều kiện.
**Grammar & collocations:** `autoregressive-factorization order` — order; `predict the next token` — dự đoán.
**Examples:** `Autoregressive factorization generated the code one token at a time.` → Factorization sinh code từng token.
**Liên kết tiếng Hàn:** `자기회귀 인수분해`.

## 10. variational posterior /ˌveriˈeɪʃənəl pɒˈstɪəriər/
**Part of speech:** noun
**Core meaning (English):** an approximate posterior distribution optimized to stand in for an intractable true posterior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** posterior xấp xỉ được tối ưu thay posterior thật khó tính.
**Grammar & collocations:** `variational-posterior family` — family; `approximate a hidden posterior` — xấp xỉ.
**Examples:** `The variational posterior summarized uncertainty about the latent scene.` → Posterior tóm tắt bất định cảnh ẩn.
**Liên kết tiếng Hàn:** `변분 사후분포`.

## 11. amortized inference /ˈæmərtaɪzd ˈɪnfərəns/
**Part of speech:** noun
**Core meaning (English):** learning one inference network that rapidly predicts latent variables for many observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học network suy luận dùng lại cho nhiều observation.
**Grammar & collocations:** `amortized-inference encoder` — encoder; `predict a posterior parameter` — dự đoán.
**Examples:** `Amortized inference replaced a separate optimization loop for every new image.` → Inference thay vòng tối ưu từng ảnh.
**Liên kết tiếng Hàn:** `상각 추론`.

## 12. posterior collapse /pɒˈstɪəriər kəˈlæps/
**Part of speech:** noun
**Core meaning (English):** a failure in which a latent variable model ignores its latent code because the decoder can explain data without it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model bỏ qua latent code vì decoder tự giải thích được data.
**Grammar & collocations:** `posterior-collapse diagnosis` — diagnosis; `revive a latent channel` — khôi phục.
**Examples:** `Posterior collapse made the learned latent representation carry almost no information.` → Collapse làm latent gần như rỗng.
**Liên kết tiếng Hàn:** `사후 붕괴`.

## 13. mode coverage /moʊd ˈkʌvərɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the extent to which a generator represents all important regions or modes of the data distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức generator bao phủ các mode quan trọng của data.
**Grammar & collocations:** `mode-coverage metric` — metric; `represent a rare mode` — biểu diễn.
**Examples:** `Mode coverage improved when the generator stopped producing only common poses.` → Coverage tăng khi không chỉ sinh pose phổ biến.
**Liên kết tiếng Hàn:** `모드 포괄성`.

## 14. mode seeking /moʊd ˈsiːkɪŋ/
**Part of speech:** noun
**Core meaning (English):** a tendency to concentrate generated samples around a few plausible modes instead of covering the full distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** generator tập trung vào vài mode thay vì phủ distribution.
**Grammar & collocations:** `mode-seeking behavior` — behavior; `collapse onto a prototype` — co lại.
**Examples:** `Mode seeking produced attractive images but missed minority styles.` → Mode seeking tạo ảnh đẹp nhưng bỏ style thiểu số.
**Liên kết tiếng Hàn:** `모드 추구`.

## 15. likelihood-free training /ˈlaɪklihʊd friː ˈtreɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** training a generative model without evaluating an explicit likelihood for each observation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** train generator mà không tính likelihood tường minh.
**Grammar & collocations:** `likelihood-free-training objective` — objective; `match simulated statistics` — khớp.
**Examples:** `Likelihood-free training matched summary statistics from a simulator rather than a density formula.` → Training khớp statistic mô phỏng.
**Liên kết tiếng Hàn:** `우도 없는 학습`.

## 16. energy-based model /ˈenərdʒi beɪst ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** a model that assigns lower energy to compatible configurations and higher energy to implausible ones.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model cho energy thấp với configuration hợp lý, cao với configuration sai.
**Grammar & collocations:** `energy-based-model landscape` — landscape; `score a configuration` — chấm.
**Examples:** `The energy-based model ranked a physically consistent state above an impossible one.` → Model xếp state hợp lý cao hơn.
**Liên kết tiếng Hàn:** `에너지 기반 모델`.

## 17. score function /skɔːr ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** the gradient of a log probability density with respect to its input.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gradient của log density theo input.
**Grammar & collocations:** `score-function estimate` — estimate; `follow a density gradient` — đi theo.
**Examples:** `The score function pointed the noisy sample toward a more probable configuration.` → Function chỉ sample về configuration có xác suất cao.
**Liên kết tiếng Hàn:** `점수 함수`.

## 18. noise schedule /nɔɪz ˈskedʒuːl/
**Part of speech:** noun
**Core meaning (English):** the planned sequence of noise levels used to corrupt and then recover data during diffusion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi mức noise dùng để phá và khôi phục data.
**Grammar & collocations:** `noise-schedule curve` — curve; `increase a variance` — tăng.
**Examples:** `The noise schedule allocated more steps to the visually delicate part of denoising.` → Schedule dành nhiều step cho chi tiết mảnh.
**Liên kết tiếng Hàn:** `노이즈 일정`.

## 19. latent diffusion /ˈleɪtənt dɪˈfjuːʒən/
**Part of speech:** noun
**Core meaning (English):** diffusion performed in a compressed latent space rather than directly in the original data space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** diffusion chạy trong latent space nén thay vì data gốc.
**Grammar & collocations:** `latent-diffusion decoder` — decoder; `denoise a compressed code` — khử.
**Examples:** `Latent diffusion reduced computation while preserving the image's broad composition.` → Diffusion latent giảm compute.
**Liên kết tiếng Hàn:** `잠재 확산`.

## 20. consistency distillation /kənˈsɪstənsi dɪstɪˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** training a fast generator to produce consistent outputs across different points along a diffusion trajectory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** train generator nhanh cho output nhất quán ở nhiều điểm trajectory.
**Grammar & collocations:** `consistency-distillation loss` — loss; `collapse several sampling steps` — gộp.
**Examples:** `Consistency distillation reduced a long diffusion process to a handful of sampling steps.` → Distillation rút nhiều step còn vài step.
**Liên kết tiếng Hàn:** `일관성 증류`.

## Review in context

A **rate-distortion trade-off** shapes a **latent variable model** or **normalizing flow**. **Score matching**, a **denoising objective**, and a **diffusion sampler** learn to reverse corruption; **classifier-free guidance** and **cross-attention conditioning** control generation. **Autoregressive factorization**, a **variational posterior**, and **amortized inference** explain alternatives, although **posterior collapse** can occur. **Mode coverage**, **mode seeking**, and **likelihood-free training** diagnose diversity; an **energy-based model**, **score function**, **noise schedule**, **latent diffusion**, and **consistency distillation** complete the toolbox.

**Bản dịch tiếng Việt:** **Rate-distortion trade-off** định hình **latent variable model** hoặc **normalizing flow**. **Score matching**, **denoising objective** và **diffusion sampler** học đảo quá trình phá; **classifier-free guidance** và **cross-attention conditioning** điều khiển sinh. **Autoregressive factorization**, **variational posterior** và **amortized inference** là các lựa chọn khác, dù có thể xảy ra **posterior collapse**. **Mode coverage**, **mode seeking** và **likelihood-free training** chẩn đoán độ đa dạng; **energy-based model**, **score function**, **noise schedule**, **latent diffusion** và **consistency distillation** hoàn thiện bộ công cụ.
