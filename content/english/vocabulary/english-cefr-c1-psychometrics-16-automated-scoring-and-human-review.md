# C1 Vocabulary — Automated scoring and human review

This lesson follows a machine-assisted score from data preparation through model behavior, fairness checks, explanations, and human review.

Flow: **automated essay scoring → feature extraction → linguistic feature → semantic similarity → discourse coherence → prompt relevance → adversarial response → score explanation → machine-assisted scoring → model calibration → training corpus → label noise → annotation guideline → benchmark set → cross-validation split → domain shift → out-of-distribution response → fairness constraint → review escalation**.

## 1. automated essay scoring /ˈɔtəˌmeɪtɪd ˈɛseɪ ˈskɔrɪŋ/
**Part of speech:** noun
**Core meaning (English):** assigning scores to written responses with a computational model trained to approximate an assessment rubric.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** máy chấm bài viết theo rubric đã học.
**Grammar & collocations:** `automated-essay-scoring system` — system; `score a written response` — chấm.
**Examples:** `Automated essay scoring returned instant feedback but did not replace the final moderation step.` → Chấm tự động trả feedback nhanh nhưng vẫn cần moderation.
**Liên kết tiếng Hàn:** `자동 작문 채점`.

## 2. feature extraction /ˈfiːtʃər ɪkˈstrækʃən/
**Part of speech:** noun
**Core meaning (English):** converting raw responses into measurable variables that a scoring model can use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến bài trả lời thô thành biến cho model.
**Grammar & collocations:** `feature-extraction pipeline` — pipeline; `derive measurable signals` — trích.
**Examples:** `Feature extraction counted clause links and spelling patterns before prediction.` → Trích feature đếm liên kết mệnh đề và chính tả.
**Liên kết tiếng Hàn:** `특징 추출`.

## 3. linguistic feature /lɪŋˈɡwɪstɪk ˈfiːtʃər/
**Part of speech:** noun
**Core meaning (English):** an observable property of language use, such as vocabulary variety, syntax, or cohesion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đặc điểm ngôn ngữ có thể đo trong bài.
**Grammar & collocations:** `linguistic-feature inventory` — inventory; `measure lexical diversity` — đo.
**Examples:** `The model used a linguistic feature for connective variety but ignored the essay's factual accuracy.` → Model dùng feature liên từ, bỏ accuracy.
**Liên kết tiếng Hàn:** `언어적 특징`.

## 4. semantic similarity /sɪˈmæntɪk ˌsɪməˈlærəti/
**Part of speech:** noun
**Core meaning (English):** the degree to which two texts or phrases express related meanings.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức hai đoạn diễn đạt ý nghĩa gần nhau.
**Grammar & collocations:** `semantic-similarity score` — score; `compare a response with a reference` — so sánh.
**Examples:** `Semantic similarity helped detect paraphrases without requiring identical wording.` → Similarity phát hiện paraphrase dù câu chữ khác.
**Liên kết tiếng Hàn:** `의미적 유사성`.

## 5. discourse coherence /ˈdɪskɔrs koʊˈhɪrəns/
**Part of speech:** noun
**Core meaning (English):** the clarity with which ideas connect and develop across a spoken or written response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ý trong bài nối với nhau rõ và có tiến triển.
**Grammar & collocations:** `discourse-coherence indicator` — indicator; `trace an argument across paragraphs` — truy.
**Examples:** `Discourse coherence improved when each paragraph linked evidence to the central claim.` → Coherence tăng khi paragraph nối evidence với claim.
**Liên kết tiếng Hàn:** `담화 응집성`.

## 6. prompt relevance /prɑmpt ˈrɛləvəns/
**Part of speech:** noun
**Core meaning (English):** the extent to which a response addresses the task or question that was asked.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bài có trả lời đúng prompt hay đi chệch.
**Grammar & collocations:** `prompt-relevance check` — check; `address the assigned question` — trả lời.
**Examples:** `Prompt relevance fell when the essay repeated general knowledge without addressing the scenario.` → Relevance giảm vì không trả lời scenario.
**Liên kết tiếng Hàn:** `프롬프트 관련성`.

## 7. adversarial response /ˌædvərˈsɛriəl rɪˈspɑns/
**Part of speech:** noun
**Core meaning (English):** a deliberately constructed answer designed to exploit weaknesses in an automated scoring system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** câu trả lời cố ý đánh lừa hệ thống chấm.
**Grammar & collocations:** `adversarial-response test` — test; `exploit a scoring shortcut` — khai thác.
**Examples:** `An adversarial response used impressive keywords but contained no coherent argument.` → Câu adversarial dùng keyword hay nhưng không có lập luận.
**Liên kết tiếng Hàn:** `적대적 응답`.

## 8. score explanation /skɔr ˌɛkspləˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** information showing which features or evidence contributed to a score and how it should be interpreted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giải thích vì sao model đưa điểm đó.
**Grammar & collocations:** `score-explanation panel` — panel; `justify a predicted result` — giải thích.
**Examples:** `The score explanation highlighted weak organization but warned that the estimate was uncertain.` → Giải thích nêu organization yếu và uncertainty.
**Liên kết tiếng Hàn:** `점수 설명`.

## 9. machine-assisted scoring /məˈʃiːn əˈsɪstɪd ˈskɔrɪŋ/
**Part of speech:** noun
**Core meaning (English):** scoring in which software provides a recommendation while a human remains responsible for review or final judgment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** máy gợi ý điểm, người vẫn chịu trách nhiệm.
**Grammar & collocations:** `machine-assisted-scoring workflow` — workflow; `accept or revise a suggestion` — sửa.
**Examples:** `Machine-assisted scoring reduced routine work while leaving unusual essays for expert review.` → Chấm hỗ trợ máy giảm việc thường, giữ bài lạ cho chuyên gia.
**Liên kết tiếng Hàn:** `기계 보조 채점`.

## 10. model calibration /ˈmɑdəl ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** adjusting or evaluating predicted scores or probabilities so they correspond better to observed outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh dự đoán để khớp kết quả thật.
**Grammar & collocations:** `model-calibration procedure` — procedure; `align predicted and observed rates` — căn.
**Examples:** `Model calibration reduced overconfident scores for short responses.` → Calibration giảm điểm quá tự tin cho bài ngắn.
**Liên kết tiếng Hàn:** `모형 보정`.

## 11. training corpus /ˈtreɪnɪŋ ˈkɔrpəs/
**Part of speech:** noun
**Core meaning (English):** the collection of labeled examples used to train a scoring or classification model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kho bài có nhãn để dạy model.
**Grammar & collocations:** `training-corpus composition` — composition; `sample representative responses` — lấy mẫu.
**Examples:** `The training corpus underrepresented informal writing from multilingual learners.` → Corpus thiếu bài informal của người đa ngôn ngữ.
**Liên kết tiếng Hàn:** `학습 말뭉치`.

## 12. label noise /ˈleɪbəl nɔɪz/
**Part of speech:** noun
**Core meaning (English):** errors, inconsistencies, or ambiguity in the labels assigned to training examples.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhãn training sai hoặc không nhất quán.
**Grammar & collocations:** `label-noise audit` — audit; `correct an inconsistent label` — sửa.
**Examples:** `Label noise made the model learn that two equivalent answers deserved different scores.` → Noise làm model học điểm khác cho câu tương đương.
**Liên kết tiếng Hàn:** `레이블 노이즈`.

## 13. annotation guideline /ˌænəˈteɪʃən ˈɡaɪdˌlaɪn/
**Part of speech:** noun
**Core meaning (English):** written instructions defining how human annotators should label or score examples.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hướng dẫn để người gắn nhãn/chấm cùng cách.
**Grammar & collocations:** `annotation-guideline revision` — revision; `define a borderline case` — định nghĩa.
**Examples:** `The annotation guideline clarified how to score a claim supported by only one source.` → Hướng dẫn làm rõ claim chỉ có một source.
**Liên kết tiếng Hàn:** `주석 지침`.

## 14. benchmark set /ˈbɛntʃˌmɑrk sɛt/
**Part of speech:** noun
**Core meaning (English):** a fixed collection of examples used to compare model versions or scoring procedures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ bài cố định để so model hoặc quy trình.
**Grammar & collocations:** `benchmark-set score` — score; `compare system revisions` — so sánh.
**Examples:** `The benchmark set contained clear, borderline, and adversarial responses.` → Bộ benchmark có bài rõ, ranh giới và adversarial.
**Liên kết tiếng Hàn:** `벤치마크 세트`.

## 15. cross-validation split /ˌkrɔs vələˈdeɪʃən splɪt/
**Part of speech:** noun
**Core meaning (English):** a division of data into training and evaluation parts that are rotated to estimate generalization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia data xoay vòng để kiểm tra generalization.
**Grammar & collocations:** `cross-validation-split design` — design; `hold out a validation fold` — giữ.
**Examples:** `The cross-validation split kept writers from appearing in both training and evaluation folds.` → Split giữ writer không trùng fold.
**Liên kết tiếng Hàn:** `교차 검증 분할`.

## 16. domain shift /doʊˈmeɪn ʃɪft/
**Part of speech:** noun
**Core meaning (English):** a change in the distribution, style, population, or context of inputs between development and deployment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dữ liệu lúc dùng khác dữ liệu lúc train.
**Grammar & collocations:** `domain-shift monitor` — monitor; `adapt to a new population` — thích ứng.
**Examples:** `Domain shift occurred when the model moved from classroom essays to professional reports.` → Shift xảy ra khi đổi loại bài.
**Liên kết tiếng Hàn:** `도메인 이동`.

## 17. out-of-distribution response /ˌaʊt əv ˌdɪstrəˈbjuːʃən rɪˈspɑns/
**Part of speech:** noun
**Core meaning (English):** a response unlike the examples represented in the model's training or validation data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bài nằm ngoài kiểu data model từng thấy.
**Grammar & collocations:** `out-of-distribution-response detector` — detector; `flag an unfamiliar case` — đánh dấu.
**Examples:** `An out-of-distribution response used a new genre that the scoring model had never evaluated.` → Bài OOD thuộc genre mới.
**Liên kết tiếng Hàn:** `분포 외 응답`.

## 18. fairness constraint /ˈfɛrnəs kənˈstreɪnt/
**Part of speech:** noun
**Core meaning (English):** a formal requirement limiting unjustified differences in error, access, or performance across groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ràng buộc buộc model không lệch bất công giữa nhóm.
**Grammar & collocations:** `fairness-constraint design` — design; `limit subgroup error gaps` — giới hạn.
**Examples:** `The fairness constraint limited the gap in false referrals between language groups.` → Ràng buộc giới hạn chênh referral giả.
**Liên kết tiếng Hàn:** `공정성 제약`.

## 19. review escalation /rɪˈvjuː ˌɛskəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** a rule sending uncertain, unusual, or high-impact cases to a more expert human reviewer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** case khó được chuyển lên người review giỏi hơn.
**Grammar & collocations:** `review-escalation trigger` — trigger; `route a low-confidence case` — chuyển.
**Examples:** `Review escalation sent low-confidence essays to a senior examiner before release.` → Case confidence thấp chuyển senior examiner.
**Liên kết tiếng Hàn:** `검토 에스컬레이션`.

## 20. human override /ˈhjuːmən ˈoʊvərˌraɪd/
**Part of speech:** noun
**Core meaning (English):** an authorized human decision that replaces or corrects an automated score or recommendation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** người có quyền sửa hoặc thay điểm máy.
**Grammar & collocations:** `human-override record` — record; `overrule an automated score` — sửa.
**Examples:** `A human override corrected the score after the system misread a valid multilingual response.` → Người sửa điểm khi model đọc sai bài đa ngôn ngữ.
**Liên kết tiếng Hàn:** `인간 재정의`.

## Review in context

**Automated essay scoring** may begin with **feature extraction**, including a **linguistic feature**, **semantic similarity**, **discourse coherence**, and **prompt relevance**. An **adversarial response** can exploit shortcuts, so a **score explanation** should show evidence. **Machine-assisted scoring** keeps human responsibility, while **model calibration** aligns outputs with observed results. The **training corpus** must be checked for **label noise**, and an **annotation guideline** should define difficult cases. A **benchmark set** and **cross-validation split** test generalization. **Domain shift** can produce an **out-of-distribution response**, so a **fairness constraint** may limit group error gaps. **Review escalation** routes uncertain cases to experts, and a **human override** can correct an automated recommendation.

**Bản dịch tiếng Việt:** **Automated essay scoring** có thể bắt đầu bằng **feature extraction**, gồm **linguistic feature**, **semantic similarity**, **discourse coherence** và **prompt relevance**. **Adversarial response** có thể khai thác shortcut, nên **score explanation** cần cho thấy bằng chứng. **Machine-assisted scoring** vẫn giữ trách nhiệm của con người, còn **model calibration** căn output với kết quả thật. **Training corpus** phải kiểm tra **label noise**, và **annotation guideline** định nghĩa case khó. **Benchmark set** và **cross-validation split** kiểm tra generalization. **Domain shift** có thể tạo **out-of-distribution response**, nên **fairness constraint** có thể giới hạn chênh lỗi giữa nhóm. **Review escalation** chuyển case bất định cho chuyên gia, còn **human override** sửa recommendation tự động.
