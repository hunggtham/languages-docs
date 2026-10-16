# C2 Vocabulary — Causal representation learning

This lesson follows causal representation learning from structural assumptions and interventions through transport, negative controls, and policy decisions.

Flow: **causal representation learning → invariant risk minimization → counterfactual augmentation → instrumental representation → front-door adjustment → back-door criterion → mediator representation → transportability condition → synthetic intervention → causal discovery score → confounding bridge → negative control outcome → uplift modeling → causal abstraction → interventional distribution → treatment policy learner**.

## 1. causal representation learning /ˈkɔːzəl ˌreprɪzenˈteɪʃən ˈlɜːrnɪŋ/
**Part of speech:** noun
**Core meaning (English):** learning features that preserve information about how interventions change outcomes rather than only predicting associations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học feature giữ thông tin về tác động can thiệp, không chỉ tương quan.
**Grammar & collocations:** `causal-representation-learning objective` — objective; `encode an intervention` — mã hóa.
**Examples:** `Causal representation learning sought features stable under a change in treatment policy.` → Learning tìm feature ổn định khi policy đổi.
**Liên kết tiếng Hàn:** `인과 표현 학습`.

## 2. invariant risk minimization /ɪnˈveəriənt rɪsk ˌmɪnɪməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** learning a predictor whose risk remains stable across environments with different spurious correlations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học predictor có risk ổn định qua môi trường khác nhau.
**Grammar & collocations:** `invariant-risk-minimization penalty` — penalty; `remove an environment-specific cue` — loại.
**Examples:** `Invariant risk minimization discouraged the model from using a hospital-specific artifact.` → IRM ngăn dùng artifact riêng bệnh viện.
**Liên kết tiếng Hàn:** `불변 위험 최소화`.

## 3. counterfactual augmentation /ˌkaʊntərˈfæktʃuəl ˌɔːɡmenˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** creating training examples that represent plausible outcomes under an alternative treatment or condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo example cho outcome có thể xảy ra dưới treatment khác.
**Grammar & collocations:** `counterfactual-augmentation pipeline` — pipeline; `generate an alternative outcome` — tạo.
**Examples:** `Counterfactual augmentation balanced the rare treatment group with simulated outcomes.` → Augmentation cân nhóm treatment hiếm.
**Liên kết tiếng Hàn:** `반사실 증강`.

## 4. instrumental representation /ˌɪnstrəˈmentəl ˌreprɪzenˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a learned representation that isolates variation associated with an instrument or source of exogenous assignment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** representation tách variation do instrument hoặc assignment ngoại sinh.
**Grammar & collocations:** `instrumental-representation constraint` — constraint; `encode an exogenous shift` — mã hóa.
**Examples:** `The instrumental representation used lottery assignment to recover a treatment-relevant direction.` → Representation dùng phân bổ lottery.
**Liên kết tiếng Hàn:** `도구 변수 표현`.

## 5. front-door adjustment /ˈfrʌnt dɔːr əˈdʒʌstmənt/
**Part of speech:** noun
**Core meaning (English):** identifying a causal effect through a measured mediator when direct confounding can be blocked through that mediator.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhận diện effect qua mediator khi confounding direct được chặn.
**Grammar & collocations:** `front-door-adjustment formula` — formula; `condition on a mediator` — điều kiện.
**Examples:** `Front-door adjustment used advertising clicks to estimate the effect of exposure on sales.` → Adjustment dùng click làm mediator.
**Liên kết tiếng Hàn:** `프런트도어 조정`.

## 6. back-door criterion /bæk dɔːr kraɪˈtɪəriən/
**Part of speech:** noun
**Core meaning (English):** a graphical condition for choosing covariates that block noncausal paths between a treatment and an outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện đồ thị chọn covariate chặn path phi nhân quả.
**Grammar & collocations:** `back-door-criterion adjustment set` — set; `block a confounding path` — chặn.
**Examples:** `The back-door criterion excluded a post-treatment variable from the adjustment set.` → Criterion loại biến sau treatment.
**Liên kết tiếng Hàn:** `백도어 기준`.

## 7. mediator representation /ˈmiːdieɪtər ˌreprɪzenˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a representation of an intermediate variable through which a treatment may influence an outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** representation của biến trung gian nối treatment với outcome.
**Grammar & collocations:** `mediator-representation analysis` — analysis; `decompose a treatment effect` — phân rã.
**Examples:** `The mediator representation separated a behavioral pathway from a direct physiological pathway.` → Representation tách hai pathway.
**Liên kết tiếng Hàn:** `매개자 표현`.

## 8. transportability condition /ˌtrænspɔːrtəˈbɪləti kənˈdɪʃən/
**Part of speech:** noun
**Core meaning (English):** an assumption describing when a causal effect learned in one population can be applied to another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giả định cho phép chuyển effect từ population này sang population khác.
**Grammar & collocations:** `transportability-condition check` — check; `generalize across populations` — khái quát.
**Examples:** `The transportability condition required the selection mechanism to be measured.` → Condition cần đo cơ chế chọn mẫu.
**Liên kết tiếng Hàn:** `이식 가능성 조건`.

## 9. synthetic intervention /sɪnˈθetɪk ˌɪntərˈvenʃən/
**Part of speech:** noun
**Core meaning (English):** a constructed intervention used to approximate a policy or treatment that was not directly observed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** intervention dựng lên để xấp xỉ treatment/policy chưa quan sát.
**Grammar & collocations:** `synthetic-intervention design` — design; `simulate a policy change` — mô phỏng.
**Examples:** `The synthetic intervention estimated what would happen if clinics adopted the new protocol.` → Intervention ước tính policy mới.
**Liên kết tiếng Hàn:** `합성 개입`.

## 10. causal discovery score /ˈkɔːzəl dɪˈskʌvəri skɔːr/
**Part of speech:** noun
**Core meaning (English):** a numerical criterion for ranking candidate causal graphs against observed data and assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tiêu chí số xếp hạng graph nhân quả ứng với data và giả định.
**Grammar & collocations:** `causal-discovery-score penalty` — penalty; `rank a candidate graph` — xếp.
**Examples:** `The causal discovery score preferred a sparse graph with fewer unsupported arrows.` → Score ưu tiên graph thưa.
**Liên kết tiếng Hàn:** `인과 발견 점수`.

## 11. confounding bridge /kənˈfaʊndɪŋ brɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a function or variable that links unmeasured confounding to observed proxy information in an identification strategy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** function nối confounding chưa đo với proxy quan sát.
**Grammar & collocations:** `confounding-bridge equation` — equation; `recover a hidden factor` — khôi phục.
**Examples:** `The confounding bridge connected two proxy measurements to the latent health state.` → Bridge nối hai proxy với state ẩn.
**Liên kết tiếng Hàn:** `교란 브리지`.

## 12. negative control outcome /ˈneɡətɪv kənˈtroʊl ˈaʊtkʌm/
**Part of speech:** noun
**Core meaning (English):** an outcome that should not be affected by the treatment but can reveal residual confounding or bias.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** outcome không nên bị treatment ảnh hưởng nhưng lộ confounding còn lại.
**Grammar & collocations:** `negative-control-outcome test` — test; `detect residual bias` — phát hiện.
**Examples:** `The negative control outcome changed, suggesting that the treatment estimate was confounded.` → Outcome control đổi, báo confounding.
**Liên kết tiếng Hàn:** `음성 대조 결과`.

## 13. uplift modeling /ˈʌplɪft ˈmɒdəlɪŋ/
**Part of speech:** noun
**Core meaning (English):** modeling the difference in an individual's expected outcome under treatment versus no treatment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình hóa chênh lệch outcome khi treatment và không treatment.
**Grammar & collocations:** `uplift-modeling segment` — segment; `target a persuadable group` — nhắm.
**Examples:** `Uplift modeling prioritized customers who were likely to respond only after the offer.` → Modeling nhắm nhóm chỉ phản ứng khi có offer.
**Liên kết tiếng Hàn:** `업리프트 모델링`.

## 14. causal abstraction /ˈkɔːzəl æbˈstrækʃən/
**Part of speech:** noun
**Core meaning (English):** simplifying a causal system while preserving the interventions and effects relevant to a chosen question.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đơn giản hóa hệ causal nhưng giữ intervention/effect cần thiết.
**Grammar & collocations:** `causal-abstraction map` — map; `coarse-grain a mechanism` — làm thô.
**Examples:** `Causal abstraction removed molecular details that could not change the policy conclusion.` → Abstraction bỏ detail không ảnh hưởng policy.

## 15. interventional distribution /ˌɪntərˈvenʃənəl ˌdɪstrɪˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** the distribution of variables after an explicit intervention replaces a natural data-generating mechanism.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân phối sau khi intervention thay cơ chế tự nhiên.
**Grammar & collocations:** `interventional-distribution estimate` — estimate; `compare observational and interventional data` — so sánh.
**Examples:** `The interventional distribution differed from the observational distribution because treatment assignment was forced.` → Distribution can thiệp khác quan sát.

## 16. treatment policy learner /ˈtriːtmənt ˈpɒləsi ˈlɜːrnər/
**Part of speech:** noun
**Core meaning (English):** a learner that chooses treatment rules using estimated conditional effects and practical constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** learner chọn rule treatment từ effect có điều kiện và constraint.
**Grammar & collocations:** `treatment-policy-learner objective` — objective; `assign an individualized treatment` — gán.
**Examples:** `The treatment policy learner balanced estimated benefit against a limited medication budget.` → Learner cân benefit và ngân sách thuốc.

## Review in context

**Causal representation learning** and **invariant risk minimization** seek stable features, while **counterfactual augmentation** supplies alternative outcomes. An **instrumental representation**, **front-door adjustment**, and the **back-door criterion** identify effects; a **mediator representation** explains pathways. A **transportability condition** supports a **synthetic intervention**, and a **causal discovery score** ranks graphs. A **confounding bridge** and **negative control outcome** expose hidden bias; **uplift modeling**, **causal abstraction**, an **interventional distribution**, and a **treatment policy learner** turn estimates into decisions.

**Bản dịch tiếng Việt:** **Causal representation learning** và **invariant risk minimization** tìm feature ổn định, còn **counterfactual augmentation** cung cấp outcome thay thế. **Instrumental representation**, **front-door adjustment** và **back-door criterion** nhận diện effect; **mediator representation** giải thích pathway. **Transportability condition** hỗ trợ **synthetic intervention**, còn **causal discovery score** xếp hạng graph. **Confounding bridge** và **negative control outcome** phơi bày bias ẩn; **uplift modeling**, **causal abstraction**, **interventional distribution** và **treatment policy learner** biến estimate thành quyết định.
