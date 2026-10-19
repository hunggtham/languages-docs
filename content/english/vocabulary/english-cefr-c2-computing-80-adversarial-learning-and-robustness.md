# C2 Vocabulary — Adversarial learning and robustness

This lesson follows an adversarial-learning threat from perturbation objectives and surrogate models through poisoning, certified defenses, and deployment-time monitoring.

Flow: **robustness certificate → poisoning attack → evasion attack → backdoor trigger → certified radius → randomized smoothing → adversarial training → gradient masking → universal perturbation → feature collision → model extraction → data poisoning → label flipping → robust optimization → clean-label poisoning → test-time adaptation → robustness budget → attack transfer → surrogate model → adversarial objective**.

## 1. robustness certificate /roʊˈbʌstnəs sərˈtɪfɪkət/
**Part of speech:** noun
**Core meaning (English):** a formal guarantee that a model's prediction remains unchanged within a specified input region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo đảm formal prediction không đổi trong vùng input nhất định.
**Grammar & collocations:** `robustness-certificate verifier` — verifier; `certify a prediction region` — chứng nhận.
**Examples:** `The robustness certificate covered every image within the stated perturbation radius.` → Certificate bao phủ ảnh trong radius.
**Liên kết tiếng Hàn:** `강건성 인증서`.

## 2. poisoning attack /ˈpɔɪzənɪŋ əˈtæk/
**Part of speech:** noun
**Core meaning (English):** an attack that corrupts training data so the learned model behaves incorrectly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tấn công làm bẩn data training để model học sai.
**Grammar & collocations:** `poisoning-attack budget` — budget; `corrupt a training set` — làm bẩn.
**Examples:** `The poisoning attack inserted a small number of mislabeled records before retraining.` → Attack chèn record sai nhãn.
**Liên kết tiếng Hàn:** `데이터 오염 공격`.

## 3. evasion attack /ɪˈveɪʒən əˈtæk/
**Part of speech:** noun
**Core meaning (English):** an attack that modifies an input at inference time to cause an incorrect prediction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sửa input lúc inference để model dự đoán sai.
**Grammar & collocations:** `evasion-attack success rate` — rate; `perturb an inference input` — làm nhiễu.
**Examples:** `The evasion attack changed only a few pixels but crossed the classifier boundary.` → Attack đổi vài pixel và vượt boundary.
**Liên kết tiếng Hàn:** `회피 공격`.

## 4. backdoor trigger /ˈbækdɔːr ˈtrɪɡər/
**Part of speech:** noun
**Core meaning (English):** a hidden pattern that activates an attacker-chosen behavior in a compromised model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pattern ẩn kích hoạt hành vi do attacker chọn.
**Grammar & collocations:** `backdoor-trigger detector` — detector; `activate a hidden behavior` — kích hoạt.
**Examples:** `The backdoor trigger caused the model to misclassify an image carrying a small sticker.` → Trigger làm model phân loại sai ảnh có sticker.
**Liên kết tiếng Hàn:** `백도어 트리거`.

## 5. certified radius /ˈsɜːrtɪfaɪd ˈreɪdiəs/
**Part of speech:** noun
**Core meaning (English):** the largest perturbation distance within which a prediction is formally guaranteed to stay constant.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách nhiễu lớn nhất mà prediction được bảo đảm giữ nguyên.
**Grammar & collocations:** `certified-radius estimate` — estimate; `maximize a provable radius` — tối đa.
**Examples:** `The certified radius was smaller for ambiguous images near the decision boundary.` → Radius nhỏ hơn với ảnh mơ hồ.
**Liên kết tiếng Hàn:** `인증 반경`.

## 6. randomized smoothing /ˈrændəmaɪzd ˈsmuːðɪŋ/
**Part of speech:** noun
**Core meaning (English):** a defense that predicts from noisy versions of an input and derives a statistical robustness guarantee.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dự đoán qua nhiều input nhiễu để tạo guarantee thống kê.
**Grammar & collocations:** `randomized-smoothing certificate` — certificate; `sample noisy inputs` — lấy mẫu.
**Examples:** `Randomized smoothing traded clean accuracy for a measurable certified radius.` → Smoothing đổi accuracy lấy radius.
**Liên kết tiếng Hàn:** `무작위 평활화`.

## 7. adversarial training /ˌædvərˈseriəl ˈtreɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** training on deliberately perturbed examples so the model learns less sensitive decision boundaries.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** train bằng example bị nhiễu để boundary ít nhạy hơn.
**Grammar & collocations:** `adversarial-training schedule` — schedule; `generate a worst-case example` — tạo.
**Examples:** `Adversarial training improved resistance to the attack family used during evaluation.` → Training tăng resistance với attack.
**Liên kết tiếng Hàn:** `적대적 학습`.

## 8. gradient masking /ˈɡreɪdiənt ˈmæskɪŋ/
**Part of speech:** noun
**Core meaning (English):** an apparent defense that hides or destabilizes gradients without actually preventing stronger attacks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phòng thủ giả che gradient nhưng không ngăn attack mạnh.
**Grammar & collocations:** `gradient-masking diagnosis` — diagnosis; `detect a broken gradient` — phát hiện.
**Examples:** `Gradient masking made the first attack fail but collapsed under a score-based method.` → Masking thất bại trước method khác.
**Liên kết tiếng Hàn:** `그래디언트 마스킹`.

## 9. universal perturbation /ˌjuːnɪˈvɜːrsəl ˌpɜːrtərˈbeɪʃən/
**Part of speech:** noun
**Core meaning (English):** one input perturbation that causes errors across many examples rather than targeting only one example.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một nhiễu dùng để gây lỗi trên nhiều example.
**Grammar & collocations:** `universal-perturbation vector` — vector; `transfer across images` — chuyển.
**Examples:** `The universal perturbation fooled several classes despite being visually subtle.` → Nhiễu universal đánh lừa nhiều class.
**Liên kết tiếng Hàn:** `범용 섭동`.

## 10. feature collision /ˈfiːtʃər kəˈlɪʒən/
**Part of speech:** noun
**Core meaning (English):** a poisoning technique that makes a malicious example share internal features with a chosen target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** làm example độc có feature nội bộ giống target.
**Grammar & collocations:** `feature-collision objective` — objective; `match an embedding` — khớp.
**Examples:** `Feature collision pulled a poisoned sample toward the target embedding without changing its visible label.` → Collision kéo embedding mà giữ label.
**Liên kết tiếng Hàn:** `특징 충돌`.

## 11. model extraction /ˈmɒdəl ɪkˈstrækʃən/
**Part of speech:** noun
**Core meaning (English):** recovering a functional copy of a model by querying its prediction interface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dựng bản sao hoạt động bằng cách query interface model.
**Grammar & collocations:** `model-extraction query` — query; `imitate a prediction API` — bắt chước.
**Examples:** `Model extraction approximated the private classifier from confidence scores returned by the API.` → Extraction bắt chước classifier từ score.
**Liên kết tiếng Hàn:** `모델 추출`.

## 12. data poisoning /ˈdeɪtə ˈpɔɪzənɪŋ/
**Part of speech:** noun
**Core meaning (English):** deliberate contamination of a dataset to degrade, bias, or redirect the trained model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cố ý làm bẩn dataset để model lệch hoặc hỏng.
**Grammar & collocations:** `data-poisoning defense` — defense; `screen an incoming record` — sàng lọc.
**Examples:** `Data poisoning remained possible because the pipeline trusted unreviewed crowdsourced labels.` → Poisoning xảy ra vì tin label cộng đồng.
**Liên kết tiếng Hàn:** `데이터 오염`.

## 13. label flipping /ˈleɪbəl ˈflɪpɪŋ/
**Part of speech:** noun
**Core meaning (English):** changing correct training labels to incorrect alternatives in order to distort learning.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi label đúng thành label sai để làm lệch training.
**Grammar & collocations:** `label-flipping rate` — rate; `audit a class label` — audit.
**Examples:** `Label flipping was detected when several records contradicted their verified source annotations.` → Flipping lộ khi label trái annotation.
**Liên kết tiếng Hàn:** `라벨 뒤집기`.

## 14. robust optimization /roʊˈbʌst ˌɒptɪməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** optimization that minimizes loss under a specified family of adverse perturbations or distribution changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tối ưu loss trong family nhiễu hoặc shift bất lợi.
**Grammar & collocations:** `robust-optimization objective` — objective; `optimize against an uncertainty set` — tối ưu.
**Examples:** `Robust optimization reduced worst-case error but increased training cost.` → Optimization giảm lỗi xấu nhất nhưng tốn train.
**Liên kết tiếng Hàn:** `강건 최적화`.

## 15. clean-label poisoning /kliːn ˈleɪbəl ˈpɔɪzənɪŋ/
**Part of speech:** noun
**Core meaning (English):** poisoning that keeps labels apparently correct while manipulating input features to influence training.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** làm bẩn input nhưng giữ label nhìn như đúng.
**Grammar & collocations:** `clean-label-poisoning example` — example; `evade label review` — né.
**Examples:** `Clean-label poisoning bypassed a review process that checked only annotation accuracy.` → Poisoning né review chỉ kiểm label.
**Liên kết tiếng Hàn:** `클린 라벨 오염`.

## 16. test-time adaptation /ˈtest taɪm ˌædæpˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** updating a model during deployment to cope with changing unlabeled input conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cập nhật model lúc chạy để thích nghi input thay đổi.
**Grammar & collocations:** `test-time-adaptation safeguard` — safeguard; `adapt to sensor drift` — thích nghi.
**Examples:** `Test-time adaptation improved accuracy after the camera moved to a new environment.` → Adaptation tăng accuracy khi môi trường đổi.
**Liên kết tiếng Hàn:** `테스트 시간 적응`.

## 17. robustness budget /roʊˈbʌstnəs ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a specified tolerance for perturbation, distribution shift, or worst-case error during design.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức chịu đựng nhiễu hoặc shift được định trước.
**Grammar & collocations:** `robustness-budget allocation` — allocation; `reserve tolerance` — dự phòng.
**Examples:** `The robustness budget reserved extra tolerance for sensor noise not seen during training.` → Budget chừa tolerance cho noise.
**Liên kết tiếng Hàn:** `강건성 예산`.

## 18. attack transfer /əˈtæk trænsˈfɜːr/
**Part of speech:** noun
**Core meaning (English):** the phenomenon in which an adversarial input crafted for one model also fools another model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** input attack trên model này cũng đánh lừa model khác.
**Grammar & collocations:** `attack-transfer rate` — rate; `transfer a perturbation` — chuyển.
**Examples:** `Attack transfer let the researcher test a protected model through an accessible surrogate.` → Transfer cho test model kín qua surrogate.
**Liên kết tiếng Hàn:** `공격 전이`.

## 19. surrogate model /ˈsɜːrəɡət ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** a substitute model trained to approximate a target model's predictions or decision boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model thay thế bắt chước prediction hoặc boundary của target.
**Grammar & collocations:** `surrogate-model query` — query; `approximate a black box` — xấp xỉ.
**Examples:** `The surrogate model generated candidate attacks without access to the target's parameters.` → Surrogate tạo attack không cần parameter target.
**Liên kết tiếng Hàn:** `대리 모델`.

## 20. adversarial objective /ˌædvərˈseriəl əbˈdʒektɪv/
**Part of speech:** noun
**Core meaning (English):** the loss or constraint an attacker optimizes to make a model fail under a permitted perturbation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loss hoặc constraint attacker tối ưu để model sai.
**Grammar & collocations:** `adversarial-objective function` — function; `maximize misclassification loss` — tối đa.
**Examples:** `The adversarial objective balanced attack success against a visible-perturbation limit.` → Objective cân bằng success và giới hạn nhiễu.
**Liên kết tiếng Hàn:** `적대적 목적 함수`.

## Review in context

A **robustness certificate** can bound an **evasion attack** within a **certified radius**, while **randomized smoothing** and **adversarial training** offer different defenses. A **poisoning attack**, **backdoor trigger**, **feature collision**, **data poisoning**, **label flipping**, and **clean-label poisoning** target training behavior; **gradient masking** may only hide weakness. A **universal perturbation**, **model extraction**, **attack transfer**, and a **surrogate model** target deployed interfaces. **Robust optimization**, **test-time adaptation**, a **robustness budget**, and an **adversarial objective** make the threat assumptions explicit.

**Bản dịch tiếng Việt:** **Certificate robustness** có thể bound **evasion attack** trong **certified radius**, còn **randomized smoothing** và **adversarial training** là các phòng thủ khác nhau. **Poisoning attack**, **backdoor trigger**, **feature collision**, **data poisoning**, **label flipping** và **clean-label poisoning** nhắm vào training; **gradient masking** có thể chỉ che điểm yếu. **Universal perturbation**, **model extraction**, **attack transfer** và **surrogate model** nhắm vào interface triển khai. **Robust optimization**, **test-time adaptation**, **robustness budget** và **adversarial objective** làm rõ giả định đe dọa.
