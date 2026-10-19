# C2 Vocabulary — Model deployment and evaluation governance

This lesson follows a model from reproducible inputs and evaluation slices through staged serving, monitoring, and controlled rollback.

Flow: **feature snapshot → training-serving skew → confidence threshold → evaluation slice → holdout cohort → shadow evaluator → champion model → challenger model → canary score → drift alarm → label leakage → provenance bundle → rollback checkpoint → model lineage → inference contract → threshold tuning → model endpoint → feature freshness → deployment artifact → model fingerprint**.

## 1. feature snapshot /ˈfiːtʃər ˈsnæpʃɒt/
**Part of speech:** noun
**Core meaning (English):** a versioned capture of model input features used for training, evaluation, or reproducible inference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản chụp có version của feature dùng cho train, evaluate hoặc inference tái lập.
**Grammar & collocations:** `feature-snapshot identifier` — identifier; `freeze an input state` — đóng băng.
**Examples:** `The feature snapshot let the team reproduce the inputs available before the outage.` → Snapshot giúp tái tạo input trước outage.
**Liên kết tiếng Hàn:** `피처 스냅샷`.

## 2. training-serving skew /ˈtreɪnɪŋ ˈsɜːrvɪŋ skjuː/
**Part of speech:** noun
**Core meaning (English):** a mismatch between how features are computed during training and how they are computed for live predictions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lệch giữa cách tính feature lúc train và lúc dự đoán live.
**Grammar & collocations:** `training-serving-skew check` — kiểm tra; `compare offline and online features` — so sánh.
**Examples:** `Training-serving skew made the model appear accurate offline but fail on current traffic.` → Skew khiến model tốt offline nhưng fail traffic hiện tại.
**Liên kết tiếng Hàn:** `학습-서빙 편향`.

## 3. confidence threshold /ˈkɒnfɪdəns ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** the minimum predicted confidence required before a system accepts or automates a decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức confidence tối thiểu trước khi system chấp nhận/tự động quyết định.
**Grammar & collocations:** `confidence-threshold rule` — rule; `route a low-confidence case` — chuyển.
**Examples:** `The confidence threshold sent uncertain applications to a human reviewer.` → Threshold chuyển hồ sơ không chắc sang người review.
**Liên kết tiếng Hàn:** `신뢰도 임계값`.

## 4. evaluation slice /ɪˌvæljuˈeɪʃən slaɪs/
**Part of speech:** noun
**Core meaning (English):** a deliberately selected subset of evaluation data representing a population, condition, or risk.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** subset dữ liệu đánh giá đại diện population, condition hoặc risk.
**Grammar & collocations:** `evaluation-slice report` — report; `measure performance by subgroup` — đo.
**Examples:** `The evaluation slice exposed a recall drop for short, noisy voice commands.` → Slice lộ recall giảm với voice command ngắn/nhiễu.
**Liên kết tiếng Hàn:** `평가 슬라이스`.

## 5. holdout cohort /ˈhoʊldaʊt ˈkoʊhɔːrt/
**Part of speech:** noun
**Core meaning (English):** a reserved group of examples excluded from training and used for an independent performance check.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm example giữ riêng, không train, để kiểm tra performance độc lập.
**Grammar & collocations:** `holdout-cohort result` — kết quả; `protect an unseen sample` — bảo vệ.
**Examples:** `The holdout cohort remained sealed until the final model comparison.` → Cohort giữ kín đến so sánh cuối.
**Liên kết tiếng Hàn:** `홀드아웃 코호트`.

## 6. shadow evaluator /ˈʃædoʊ ɪˈvæljueɪtər/
**Part of speech:** noun
**Core meaning (English):** a parallel evaluator that scores a candidate model without affecting production decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** evaluator chạy song song, chấm model mới nhưng không ảnh hưởng quyết định production.
**Grammar & collocations:** `shadow-evaluator output` — output; `compare predictions silently` — so sánh.
**Examples:** `The shadow evaluator compared the challenger with the live model on identical requests.` → Evaluator so sánh challenger và model live.
**Liên kết tiếng Hàn:** `섀도 평가기`.

## 7. champion model /ˈtʃæmpiən ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** the currently approved model serving as the production baseline.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model đang được duyệt và làm baseline production.
**Grammar & collocations:** `champion-model baseline` — baseline; `compare a candidate against production` — so sánh.
**Examples:** `The champion model remained active while the new ranking candidate was evaluated.` → Champion vẫn chạy khi candidate được evaluate.
**Liên kết tiếng Hàn:** `챔피언 모델`.

## 8. challenger model /ˈtʃælɪndʒər ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** a candidate model tested against the current production baseline before promotion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model candidate được test với baseline trước khi promote.
**Grammar & collocations:** `challenger-model trial` — thử nghiệm; `promote a stronger candidate` — đưa lên.
**Examples:** `The challenger model improved fraud recall but increased review volume beyond the limit.` → Challenger tăng recall nhưng tăng volume review quá mức.
**Liên kết tiếng Hàn:** `챌린저 모델`.

## 9. canary score /ˈkænəri skɔːr/
**Part of speech:** noun
**Core meaning (English):** an evaluation result collected from a small live exposure used to decide whether a release should expand.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết quả từ exposure live nhỏ để quyết định mở rộng release.
**Grammar & collocations:** `canary-score threshold` — ngưỡng; `approve the next traffic share` — duyệt.
**Examples:** `The canary score stayed above the acceptance threshold for three consecutive hours.` → Score canary vượt ngưỡng ba giờ liên tiếp.
**Liên kết tiếng Hàn:** `카나리 점수`.

## 10. drift alarm /drɪft əˈlɑːrm/
**Part of speech:** noun
**Core meaning (English):** an alert indicating that live inputs or outcomes have moved materially away from the model's reference distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cảnh báo input/outcome live lệch đáng kể khỏi phân phối tham chiếu.
**Grammar & collocations:** `drift-alarm threshold` — ngưỡng; `investigate a distribution shift` — điều tra.
**Examples:** `The drift alarm fired after customer behavior changed during the holiday promotion.` → Alarm bật khi hành vi đổi trong khuyến mãi.
**Liên kết tiếng Hàn:** `드리프트 경보`.

## 11. label leakage /ˈleɪbəl ˈliːkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** accidental inclusion of information unavailable at prediction time but closely revealing the target label.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa nhầm thông tin chỉ biết sau prediction nhưng tiết lộ target label.
**Grammar & collocations:** `label-leakage audit` — audit; `remove a post-outcome field` — loại.
**Examples:** `Label leakage made the validation score unrealistically high because the feature contained the later outcome.` → Leakage làm score ảo cao.
**Liên kết tiếng Hàn:** `레이블 누출`.

## 12. provenance bundle /ˈprɒvənəns ˈbʌndəl/
**Part of speech:** noun
**Core meaning (English):** a packaged record of data, code, parameters, environment, and approvals used to produce a model artifact.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gói record gồm data, code, parameter, environment và approval tạo artifact.
**Grammar & collocations:** `provenance-bundle manifest` — manifest; `reconstruct a training run` — tái tạo.
**Examples:** `The provenance bundle showed which dataset and compiler produced the approved model.` → Bundle cho thấy dataset/compiler tạo model.
**Liên kết tiếng Hàn:** `출처 번들`.

## 13. rollback checkpoint /ˈroʊlbæk ˈtʃekpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a known model version and state saved so serving can return safely after a failed change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** version/state model lưu sẵn để serving quay lại khi change lỗi.
**Grammar & collocations:** `rollback-checkpoint restore` — phục hồi; `pin a known-good artifact` — ghim.
**Examples:** `The rollback checkpoint restored the previous tokenizer when the new one corrupted requests.` → Checkpoint phục hồi tokenizer cũ.
**Liên kết tiếng Hàn:** `롤백 체크포인트`.

## 14. model lineage /ˈmɒdəl ˈlɪniɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the traceable history connecting a model to its datasets, transformations, experiments, and deployments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lịch sử truy vết nối model với data, transform, experiment và deployment.
**Grammar & collocations:** `model-lineage graph` — graph; `trace a prediction artifact` — truy.
**Examples:** `Model lineage linked the serving artifact to the feature transformation that created it.` → Lineage nối artifact với transform feature.
**Liên kết tiếng Hàn:** `모델 계보`.

## 15. inference contract /ˈɪnfərəns ˈkɒntrækt/
**Part of speech:** noun
**Core meaning (English):** an agreement defining model inputs, outputs, errors, latency expectations, and compatibility behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thỏa thuận về input, output, error, latency và compatibility của model.
**Grammar & collocations:** `inference-contract test` — kiểm thử; `reject a missing feature` — từ chối.
**Examples:** `The inference contract required callers to send the feature version with every request.` → Contract buộc request gửi feature version.
**Liên kết tiếng Hàn:** `추론 계약`.

## 16. threshold tuning /ˈθreʃhoʊld ˈtuːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** selecting a decision cutoff to balance errors, costs, and operational capacity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn cutoff để cân bằng lỗi, cost và capacity vận hành.
**Grammar & collocations:** `threshold-tuning study` — nghiên cứu; `trade precision for recall` — đánh đổi.
**Examples:** `Threshold tuning lowered false alarms without exceeding the review team's capacity.` → Tuning giảm false alarm mà không quá capacity.
**Liên kết tiếng Hàn:** `임계값 조정`.

## 17. model endpoint /ˈmɒdəl ˈendpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a network interface that accepts features and returns predictions from a served model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interface network nhận feature và trả prediction từ model được serve.
**Grammar & collocations:** `model-endpoint contract` — contract; `route a prediction request` — định tuyến.
**Examples:** `The model endpoint returned a calibrated score and the model fingerprint.` → Endpoint trả score calibrated và fingerprint.
**Liên kết tiếng Hàn:** `모델 엔드포인트`.

## 18. feature freshness /ˈfiːtʃər ˈfreʃnəs/
**Part of speech:** noun
**Core meaning (English):** how recently a model input was computed or updated before prediction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức độ mới của feature trước lúc prediction.
**Grammar & collocations:** `feature-freshness SLA` — SLA; `reject stale input` — từ chối.
**Examples:** `Feature freshness fell below the SLA when the upstream stream stopped publishing updates.` → Freshness thấp hơn SLA khi stream upstream dừng.
**Liên kết tiếng Hàn:** `피처 최신성`.

## 19. deployment artifact /dɪˈplɔɪmənt ˈɑːrtɪfækt/
**Part of speech:** noun
**Core meaning (English):** the packaged model, runtime, dependencies, and metadata promoted to a serving environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gói model, runtime, dependency và metadata đưa vào serving.
**Grammar & collocations:** `deployment-artifact digest` — digest; `promote an immutable package` — promote.
**Examples:** `The deployment artifact included the tokenizer, model weights, and inference libraries.` → Artifact gồm tokenizer, weights và library.
**Liên kết tiếng Hàn:** `배포 아티팩트`.

## 20. model fingerprint /ˈmɒdəl ˈfɪŋɡərprɪnt/
**Part of speech:** noun
**Core meaning (English):** a compact identity derived from a model's contents and configuration for reliable version checking.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identity gọn suy ra từ nội dung/config model để kiểm tra version.
**Grammar & collocations:** `model-fingerprint header` — header; `verify the served version` — xác minh.
**Examples:** `The client logged the model fingerprint so an unusual prediction could be reproduced later.` → Client ghi fingerprint để tái tạo prediction.
**Liên kết tiếng Hàn:** `모델 지문`.

## Review in context

A **feature snapshot** fixes inputs, while **training-serving skew** can break consistency. A **confidence threshold** routes uncertain cases; an **evaluation slice**, **holdout cohort**, and **shadow evaluator** test behavior. The **champion model** remains the baseline while a **challenger model** earns a **canary score**. A **drift alarm** detects change, and a **label leakage** audit protects evaluation. A **provenance bundle** records origin, a **rollback checkpoint** preserves safety, and **model lineage** connects history. An **inference contract** defines serving, **threshold tuning** balances costs, a **model endpoint** returns predictions, **feature freshness** guards inputs, a **deployment artifact** packages release, and a **model fingerprint** proves which version answered.

**Bản dịch tiếng Việt:** **Feature snapshot** cố định input, còn **training-serving skew** có thể phá tính nhất quán. **Confidence threshold** chuyển case không chắc; **evaluation slice**, **holdout cohort** và **shadow evaluator** kiểm tra hành vi. **Champion model** là baseline, trong khi **challenger model** giành **canary score**. **Drift alarm** phát hiện thay đổi, còn audit **label leakage** bảo vệ đánh giá. **Provenance bundle** ghi nguồn, **rollback checkpoint** giữ an toàn, và **model lineage** nối lịch sử. **Inference contract** định nghĩa serving, **threshold tuning** cân bằng cost, **model endpoint** trả prediction, **feature freshness** bảo vệ input, **deployment artifact** đóng gói release, còn **model fingerprint** xác nhận version trả lời.
