# C1 Vocabulary — Bayesian hierarchical assessment

This lesson follows how Bayesian models combine prior information, group structure, and observed scores without pretending that every estimate is equally certain.

Flow: **Bayesian hierarchical model → prior elicitation → posterior predictive distribution → posterior interval → shrinkage prior → regularizing prior → weakly informative prior → hierarchical prior → latent parameter → posterior pooling → partial pooling → complete pooling → no pooling → hyperprior → credible region → posterior odds → marginal likelihood → prior predictive distribution → prior-data conflict → prior calibration**.

## 1. Bayesian hierarchical model /ˈbeɪziən ˌhaɪəˈrɑrkɪkəl ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a Bayesian model that represents parameters at multiple levels, allowing group-specific estimates to relate through shared population information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model Bayesian nhiều cấp, estimate nhóm liên kết qua information chung.
**Grammar & collocations:** `Bayesian-hierarchical-model specification` — specification; `share information across schools` — chia sẻ.
**Examples:** `The Bayesian hierarchical model estimated each classroom effect while learning a common population distribution.` → Model ước tính effect từng lớp và phân bố chung.
**Liên kết tiếng Hàn:** `베이지안 계층 모형`.

## 2. prior elicitation /ˈpraɪər ɪˌlɪsəˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** the structured process of translating substantive knowledge or expert judgment into a prior distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển knowledge/judgment của expert thành prior distribution có cấu trúc.
**Grammar & collocations:** `prior-elicitation interview` — interview; `quantify plausible ranges` — lượng hóa.
**Examples:** `Prior elicitation asked clinicians how large a treatment difference would still be plausible.` → Elicitation hỏi mức chênh treatment nào còn hợp lý.
**Liên kết tiếng Hàn:** `사전분포 도출`.

## 3. posterior predictive distribution /pɑˈstɪriər prɪˈdɪktɪv ˌdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** the distribution of future or replicated observations predicted after combining the prior with the observed data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân bố data tương lai/replicate sau khi kết hợp prior và data thật.
**Grammar & collocations:** `posterior-predictive-distribution check` — check; `simulate replicated responses` — mô phỏng.
**Examples:** `The posterior predictive distribution reproduced the score spread but missed its heavy upper tail.` → Distribution tái tạo spread nhưng bỏ sót đuôi cao.
**Liên kết tiếng Hàn:** `사후 예측 분포`.

## 4. posterior interval /pɑˈstɪriər ˈɪntərvəl/
**Part of speech:** noun
**Core meaning (English):** an interval containing a specified amount of posterior probability for an unknown quantity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng chứa một lượng xác suất posterior định trước.
**Grammar & collocations:** `posterior-interval width` — width; `summarize parameter uncertainty` — tóm tắt.
**Examples:** `The posterior interval for the coaching effect remained wide because only four schools participated.` → Interval rộng vì chỉ có bốn school.
**Liên kết tiếng Hàn:** `사후 구간`.

## 5. shrinkage prior /ˈʃrɪŋkɪdʒ ˈpraɪər/
**Part of speech:** noun
**Core meaning (English):** a prior that pulls estimates toward a central value or smaller magnitude unless the data provide strong evidence otherwise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prior kéo estimate về trung tâm/nhỏ hơn trừ khi data mạnh.
**Grammar & collocations:** `shrinkage-prior scale` — scale; `stabilize noisy coefficients` — ổn định.
**Examples:** `A shrinkage prior kept a tiny subgroup effect from becoming implausibly large.` → Prior ngăn effect subgroup nhỏ phóng đại.
**Liên kết tiếng Hàn:** `수축 사전분포`.

## 6. regularizing prior /ˈrɛɡjəˌlaɪzɪŋ ˈpraɪər/
**Part of speech:** noun
**Core meaning (English):** a prior chosen to discourage unstable or excessively complex parameter values while retaining meaningful signals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prior hạn chế parameter bất ổn/quá phức tạp nhưng giữ signal thật.
**Grammar & collocations:** `regularizing-prior strength` — strength; `discourage extreme estimates` — hạn chế.
**Examples:** `The regularizing prior reduced implausible item interactions without forcing every interaction to zero.` → Prior giảm interaction vô lý mà không ép tất cả về zero.
**Liên kết tiếng Hàn:** `정규화 사전분포`.

## 7. weakly informative prior /ˈwiːkli ɪnˈfɔrmətɪv ˈpraɪər/
**Part of speech:** noun
**Core meaning (English):** a prior that supplies gentle, defensible constraints while leaving the data substantial room to update the estimate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prior ràng buộc nhẹ, vẫn để data cập nhật mạnh.
**Grammar & collocations:** `weakly-informative-prior scale` — scale; `rule out impossible values` — loại.
**Examples:** `A weakly informative prior ruled out a negative variance but did not dictate the program effect.` → Prior loại variance âm nhưng không quyết effect.
**Liên kết tiếng Hàn:** `약한 정보 사전분포`.

## 8. hierarchical prior /ˌhaɪəˈrɑrkɪkəl ˈpraɪər/
**Part of speech:** noun
**Core meaning (English):** a prior in which group-specific parameters receive their own distribution governed by higher-level hyperparameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prior cho parameter nhóm, được điều khiển bởi hyperparameter cấp cao.
**Grammar & collocations:** `hierarchical-prior structure` — structure; `model between-group variation` — mô hình.
**Examples:** `The hierarchical prior allowed schools to differ while keeping their effects on a common scale.` → Prior cho school khác nhau trên scale chung.
**Liên kết tiếng Hàn:** `계층적 사전분포`.

## 9. latent parameter /ˈleɪtənt pəˈræmətər/
**Part of speech:** noun
**Core meaning (English):** a model quantity that is not observed directly but is inferred from data and assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quantity ẩn, suy ra từ data và assumption.
**Grammar & collocations:** `latent-parameter estimate` — estimate; `infer an underlying ability` — suy ra.
**Examples:** `The latent parameter represented a learner's stable reasoning level beneath noisy task scores.` → Parameter ẩn là reasoning level ổn định dưới score nhiễu.
**Liên kết tiếng Hàn:** `잠재 매개변수`.

## 10. posterior pooling /pɑˈstɪriər ˈpuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** the way posterior information combines evidence from multiple groups or sources to estimate related parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** posterior gộp evidence nhiều group/source để estimate parameter liên quan.
**Grammar & collocations:** `posterior-pooling behavior` — behavior; `borrow information across groups` — mượn.
**Examples:** `Posterior pooling stabilized the estimate for classrooms with few observations.` → Pooling ổn định estimate lớp ít quan sát.
**Liên kết tiếng Hàn:** `사후 풀링`.

## 11. partial pooling /ˈpɑrʃəl ˈpuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** a modeling approach that lets groups have distinct estimates while pulling them toward a shared distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** group có estimate riêng nhưng kéo về phân bố chung một phần.
**Grammar & collocations:** `partial-pooling estimate` — estimate; `balance local evidence and population information` — cân bằng.
**Examples:** `Partial pooling preserved a school's unusual pattern without treating it as completely unrelated to other schools.` → Pooling giữ pattern lạ nhưng không tách hẳn school.
**Liên kết tiếng Hàn:** `부분 풀링`.

## 12. complete pooling /kəmˈpliːt ˈpuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** a modeling approach that assumes all groups share one common parameter value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mọi group dùng chung một parameter.
**Grammar & collocations:** `complete-pooling model` — model; `ignore between-group variation` — bỏ qua.
**Examples:** `Complete pooling was too restrictive because instructors used distinctly different feedback routines.` → Pooling hoàn toàn quá chặt vì instructor khác routine.
**Liên kết tiếng Hàn:** `완전 풀링`.

## 13. no pooling /noʊ ˈpuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** a modeling approach that estimates every group separately without borrowing information across groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimate từng group riêng, không mượn information.
**Grammar & collocations:** `no-pooling baseline` — baseline; `fit independent group effects` — fit.
**Examples:** `The no-pooling baseline produced unstable estimates for the smallest departments.` → Baseline không pooling bất ổn ở department nhỏ.
**Liên kết tiếng Hàn:** `비풀링`.

## 14. hyperprior /ˈhaɪpərˌpraɪər/
**Part of speech:** noun
**Core meaning (English):** a prior distribution placed on a parameter that governs another prior distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prior đặt lên parameter điều khiển một prior khác.
**Grammar & collocations:** `hyperprior sensitivity` — sensitivity; `model uncertainty about group spread` — mô hình.
**Examples:** `The hyperprior expressed uncertainty about how much school effects should vary.` → Hyperprior diễn tả bất định về độ khác nhau school.
**Liên kết tiếng Hàn:** `초사전분포`.

## 15. credible region /ˈkrɛdəbəl ˈriːdʒən/
**Part of speech:** noun
**Core meaning (English):** a region of parameter space containing a specified posterior probability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng parameter chứa xác suất posterior định trước.
**Grammar & collocations:** `credible-region plot` — plot; `summarize joint uncertainty` — tóm tắt.
**Examples:** `The credible region showed that a strong benefit and a harmful effect were both still plausible.` → Vùng credible cho thấy benefit mạnh và harm vẫn khả dĩ.
**Liên kết tiếng Hàn:** `신용 영역`.

## 16. posterior odds /pɑˈstɪriər ɑdz/
**Part of speech:** noun
**Core meaning (English):** the ratio of posterior support for one hypothesis or category to posterior support for another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỉ số support posterior giữa hai giả thuyết/category.
**Grammar & collocations:** `posterior-odds ratio` — ratio; `compare competing explanations` — so.
**Examples:** `Posterior odds favored a two-factor structure over a single-factor structure after the new data arrived.` → Odds nghiêng về cấu trúc hai factor.
**Liên kết tiếng Hàn:** `사후 오즈`.

## 17. marginal likelihood /ˈmɑrdʒənəl ˈlaɪkliˌhʊd/
**Part of speech:** noun
**Core meaning (English):** the probability of the observed data after averaging the likelihood over the model's prior distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác suất data sau khi average likelihood theo prior của model.
**Grammar & collocations:** `marginal-likelihood estimate` — estimate; `compare model predictions` — so.
**Examples:** `The marginal likelihood rewarded a simpler model that predicted the data without unnecessary parameters.` → Likelihood biên ủng hộ model đơn giản.
**Liên kết tiếng Hàn:** `주변 우도`.

## 18. prior predictive distribution /ˈpraɪər prɪˈdɪktɪv ˌdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** the distribution of observations implied by a model before the current data are used to update it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data model ngụ ý trước khi nhìn data hiện tại.
**Grammar & collocations:** `prior-predictive-distribution check` — check; `simulate plausible outcomes in advance` — mô phỏng.
**Examples:** `The prior predictive distribution produced impossible negative times, so the prior scale was revised.` → Distribution tạo time âm nên phải sửa prior.
**Liên kết tiếng Hàn:** `사전 예측 분포`.

## 19. prior-data conflict /ˈpraɪər ˈdeɪtə ˈkɑnflɪkt/
**Part of speech:** noun
**Core meaning (English):** a substantial disagreement between what a prior distribution considers plausible and what the observed data suggest.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prior và data thật bất đồng mạnh về giá trị khả dĩ.
**Grammar & collocations:** `prior-data-conflict diagnostic` — diagnostic; `revise an implausibly narrow prior` — sửa.
**Examples:** `Prior-data conflict appeared when the pilot data showed far more variability than experts had expected.` → Conflict lộ khi data biến thiên hơn dự kiến.
**Liên kết tiếng Hàn:** `사전-데이터 충돌`.

## 20. prior calibration /ˈpraɪər ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of checking whether a prior distribution assigns sensible probability to outcomes that experts regard as plausible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra prior có gán xác suất hợp lý cho outcome expert thấy khả dĩ.
**Grammar & collocations:** `prior-calibration exercise` — exercise; `elicit and test plausible scenarios` — kiểm tra.
**Examples:** `Prior calibration found that the proposed scale made a ten-point improvement almost impossible.` → Calibration thấy scale khiến improvement ten point gần như bất khả.
**Liên kết tiếng Hàn:** `사전분포 보정`.

## Review in context

A **Bayesian hierarchical model** begins with **prior elicitation** and can be checked through a **prior predictive distribution**. After data arrive, the **posterior predictive distribution**, **posterior interval**, and **credible region** summarize uncertainty. A **shrinkage prior**, **regularizing prior**, or **weakly informative prior** can stabilize a **latent parameter**; a **hierarchical prior** may use a **hyperprior**. **Posterior pooling** includes **partial pooling**, while **complete pooling** and **no pooling** provide contrasting baselines. **Posterior odds** and **marginal likelihood** compare explanations. A **prior-data conflict** calls for review, and **prior calibration** checks whether the starting assumptions were sensible.

**Bản dịch tiếng Việt:** **Bayesian hierarchical model** bắt đầu bằng **prior elicitation** và có thể kiểm tra qua **prior predictive distribution**. Khi có data, **posterior predictive distribution**, **posterior interval** và **credible region** tóm tắt bất định. **Shrinkage prior**, **regularizing prior** hoặc **weakly informative prior** ổn định **latent parameter**; **hierarchical prior** có thể dùng **hyperprior**. **Posterior pooling** gồm **partial pooling**, còn **complete pooling** và **no pooling** là baseline đối lập. **Posterior odds** và **marginal likelihood** so explanation. **Prior-data conflict** cần review, còn **prior calibration** kiểm tra assumption ban đầu có hợp lý không.
