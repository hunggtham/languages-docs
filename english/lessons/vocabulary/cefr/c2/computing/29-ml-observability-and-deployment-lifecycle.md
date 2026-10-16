# C2 Vocabulary — ML observability and deployment lifecycle

This lesson follows a model from experiment tracking through training diagnostics, staged deployment, and rollback.

Flow: **training telemetry → experiment tracking → run manifest → hyperparameter sweep → gradient norm → loss spike → activation histogram → dead neuron → checkpoint metric → early stopping → learning-rate warmup → cosine decay → evaluation regression → reproducibility seed → artifact registry → lineage query → model registry → deployment canary → shadow traffic → rollback trigger**.

## 1. training telemetry /ˈtreɪnɪŋ təˈlɛmɪtri/
**Part of speech:** noun
**Core meaning (English):** measurements emitted during model training about progress, resources, gradients, and numerical behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** telemetry của quá trình train, giúp thấy loss, resource và gradient đang diễn ra.
**Grammar & collocations:** `training-telemetry stream` — stream; `collect training telemetry` — thu thập.
**Examples:** `Training telemetry showed that data loading, not the accelerator, limited throughput.` → Telemetry cho thấy data loading mới là nút thắt.
**Liên kết tiếng Hàn:** `학습 텔레메트리`.

## 2. experiment tracking /ɪkˈspɛrəmənt ˈtrækɪŋ/
**Part of speech:** noun
**Core meaning (English):** recording configurations, metrics, artifacts, and outcomes for comparable model runs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lưu mọi thông tin của run để so sánh experiment.
**Grammar & collocations:** `experiment-tracking server` — server; `track a run` — theo dõi.
**Examples:** `Experiment tracking linked the metric change to a new tokenizer configuration.` → Tracking nối metric change với config tokenizer mới.
**Liên kết tiếng Hàn:** `실험 추적`.

## 3. run manifest /rʌn ˈmænəˌfɛst/
**Part of speech:** noun
**Core meaning (English):** a machine-readable record of the exact inputs, code, settings, and environment used by one run.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hồ sơ đầy đủ của một run để tái lập.
**Grammar & collocations:** `run-manifest hash` — hash; `publish a manifest` — publish.
**Examples:** `The run manifest listed the dataset pin, compiler image, and random seed.` → Manifest liệt kê dataset pin, image compiler và seed.
**Liên kết tiếng Hàn:** `실행 매니페스트`.

## 4. hyperparameter sweep /ˌhaɪpərpəˈræmətər swiːp/
**Part of speech:** noun
**Core meaning (English):** systematically evaluating many hyperparameter combinations to find a strong configuration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quét nhiều combination learning rate, batch, depth để tìm config tốt.
**Grammar & collocations:** `hyperparameter-sweep budget` — ngân sách; `launch a sweep` — chạy sweep.
**Examples:** `The hyperparameter sweep favored a smaller learning rate after longer warmup.` → Sweep chọn learning rate nhỏ hơn sau warmup dài.
**Liên kết tiếng Hàn:** `하이퍼파라미터 탐색`.

## 5. gradient norm /ˈɡreɪdiənt nɔrm/
**Part of speech:** noun
**Core meaning (English):** a numerical measure of the overall magnitude of a model's gradient vector.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ lớn tổng của gradient, giúp phát hiện exploding hoặc vanishing behavior.
**Grammar & collocations:** `gradient-norm monitor` — monitor; `clip the gradient norm` — clip.
**Examples:** `The gradient norm rose sharply just before the loss became unstable.` → Norm tăng mạnh ngay trước khi loss bất ổn.
**Liên kết tiếng Hàn:** `그래디언트 노름`.

## 6. loss spike /lɔs spaɪk/
**Part of speech:** noun
**Core meaning (English):** a sudden, abnormal increase in training or evaluation loss.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loss tăng vọt, thường báo data lỗi, learning rate sai hoặc numerical issue.
**Grammar & collocations:** `loss-spike alert` — alert; `investigate a spike` — điều tra.
**Examples:** `A loss spike coincided with one corrupted shard entering the training stream.` → Spike trùng lúc shard hỏng vào stream.
**Liên kết tiếng Hàn:** `손실 급증`.

## 7. activation histogram /ˌæktəˈveɪʃən ˈhɪstəˌɡræm/
**Part of speech:** noun
**Core meaning (English):** a distribution plot of activation values used to inspect saturation, sparsity, or numerical range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** histogram activation cho thấy value có bị saturate hoặc quá thưa không.
**Grammar & collocations:** `activation-histogram bin` — bin; `inspect activation ranges` — xem.
**Examples:** `The activation histogram shifted after quantization and exposed a clipped tail.` → Histogram đổi sau quantization và lộ tail bị clip.
**Liên kết tiếng Hàn:** `활성화 히스토그램`.

## 8. dead neuron /dɛd ˈnʊrɑn/
**Part of speech:** noun
**Core meaning (English):** a unit that produces little or no useful activation across inputs and contributes minimally to learning.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** neuron gần như luôn im lặng, không đóng góp vào model.
**Grammar & collocations:** `dead-neuron rate` — tỷ lệ; `revive a neuron` — khôi phục.
**Examples:** `The dead neuron rate increased after an overly aggressive initialization.` → Tỷ lệ neuron chết tăng sau initialization quá mạnh.
**Liên kết tiếng Hàn:** `죽은 뉴런`.

## 9. checkpoint metric /ˈtʃɛkˌpɔɪnt ˈmɛtrɪk/
**Part of speech:** noun
**Core meaning (English):** a recorded evaluation value used to compare saved checkpoints during training.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metric gắn với từng checkpoint để chọn model tốt nhất.
**Grammar & collocations:** `checkpoint-metric policy` — policy; `select the best checkpoint` — chọn.
**Examples:** `The checkpoint metric favored the model with better validation recall rather than lower training loss.` → Metric chọn model recall validation tốt hơn.
**Liên kết tiếng Hàn:** `체크포인트 지표`.

## 10. early stopping /ˈɝli ˈstɑpɪŋ/
**Part of speech:** noun
**Core meaning (English):** ending training when validation performance stops improving according to a patience rule.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dừng train sớm khi validation không tiến bộ nữa.
**Grammar & collocations:** `early-stopping patience` — patience; `stop on plateau` — dừng.
**Examples:** `Early stopping prevented the model from overfitting the small validation cohort.` → Early stopping ngăn overfit cohort validation nhỏ.
**Liên kết tiếng Hàn:** `조기 중단`.

## 11. learning-rate warmup /ˈlɝnɪŋ reɪt ˈwɔrmˌʌp/
**Part of speech:** noun
**Core meaning (English):** gradually increasing the learning rate at the start of training before reaching its planned level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tăng learning rate từ từ lúc đầu để train ổn định.
**Grammar & collocations:** `learning-rate-warmup schedule` — schedule; `warm up the optimizer` — warm up.
**Examples:** `Learning-rate warmup prevented unstable updates during the first hundred steps.` → Warmup ngăn update bất ổn trong 100 step đầu.
**Liên kết tiếng Hàn:** `학습률 워밍업`.

## 12. cosine decay /ˈkoʊsaɪn dɪˈkeɪ/
**Part of speech:** noun
**Core meaning (English):** a schedule that gradually reduces the learning rate following a cosine-shaped curve.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** learning rate giảm theo đường cong cosine.
**Grammar & collocations:** `cosine-decay schedule` — schedule; `decay toward a floor` — giảm về floor.
**Examples:** `Cosine decay lowered the step size near the end of the fine-tuning run.` → Decay giảm step size gần cuối fine-tune.
**Liên kết tiếng Hàn:** `코사인 감쇠`.

## 13. evaluation regression /ɪˌvæljuˈeɪʃən rɪˈɡrɛʃən/
**Part of speech:** noun
**Core meaning (English):** an unintended decline in a measured model capability after a code, data, or configuration change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model mới kém đi ở metric/capability đã có.
**Grammar & collocations:** `evaluation-regression alert` — alert; `triage a regression` — phân loại.
**Examples:** `The evaluation regression appeared only on long-context prompts after the tokenizer update.` → Regression chỉ xuất hiện ở prompt context dài sau update tokenizer.
**Liên kết tiếng Hàn:** `평가 회귀`.

## 14. reproducibility seed /ˌriːprəˌduːsəˈbɪləti siːd/
**Part of speech:** noun
**Core meaning (English):** a recorded random seed used to make a stochastic run easier to repeat and compare.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** seed được ghi lại để random behavior tái lập tốt hơn.
**Grammar & collocations:** `reproducibility-seed policy` — policy; `fix the random seed` — cố định.
**Examples:** `The reproducibility seed made the debugging run produce the same sample order.` → Seed giúp run debug có cùng thứ tự sample.
**Liên kết tiếng Hàn:** `재현성 시드`.

## 15. artifact registry /ˈɑrtəfækt ˈrɛdʒəstri/
**Part of speech:** noun
**Core meaning (English):** a repository that stores versioned model files, metrics, packages, or other build outputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kho artifact có version để truy xuất và promote.
**Grammar & collocations:** `artifact-registry retention` — retention; `promote an artifact` — promote.
**Examples:** `The artifact registry retained the checkpoint, evaluation report, and signed manifest together.` → Registry giữ checkpoint, report và manifest đã ký cùng nhau.
**Liên kết tiếng Hàn:** `아티팩트 레지스트리`.

## 16. lineage query /ˈlɪniɪdʒ ˈkwɪri/
**Part of speech:** noun
**Core meaning (English):** a query that traces an output back through datasets, transformations, code, and prior artifacts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** query ngược từ model/output về data và code nguồn.
**Grammar & collocations:** `lineage-query result` — result; `trace upstream dependencies` — trace.
**Examples:** `A lineage query traced the failing model to one changed normalization step.` → Query trace model lỗi về một bước normalization đã đổi.
**Liên kết tiếng Hàn:** `계보 쿼리`.

## 17. model registry /ˈmɑdəl ˈrɛdʒəstri/
**Part of speech:** noun
**Core meaning (English):** a managed catalog of model versions, stages, approvals, and deployment metadata.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** catalog model từ candidate tới production, kèm approval và metadata.
**Grammar & collocations:** `model-registry stage` — stage; `promote a model version` — promote.
**Examples:** `The model registry blocked promotion until the privacy and bias reviews were attached.` → Registry chặn promote tới khi có review privacy và bias.
**Liên kết tiếng Hàn:** `모델 레지스트리`.

## 18. deployment canary /dɪˈplɔɪmənt ˈkænəri/
**Part of speech:** noun
**Core meaning (English):** a small production exposure used to observe a new model before wider rollout.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cho model mới phục vụ một phần traffic để kiểm tra an toàn.
**Grammar & collocations:** `deployment-canary cohort` — cohort; `release to a canary` — release.
**Examples:** `The deployment canary served five percent of requests and showed no latency increase.` → Canary phục vụ 5% request và không tăng latency.
**Liên kết tiếng Hàn:** `배포 카나리아`.

## 19. shadow traffic /ˈʃædoʊ ˈtræfɪk/
**Part of speech:** noun
**Core meaning (English):** copied production requests sent to a candidate system for observation without using its outputs for users.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** traffic “bóng” chạy qua candidate nhưng output không ảnh hưởng user.
**Grammar & collocations:** `shadow-traffic replay` — replay; `mirror requests` — mirror.
**Examples:** `Shadow traffic revealed a memory leak before the candidate handled real responses.` → Shadow traffic lộ memory leak trước khi candidate trả response thật.
**Liên kết tiếng Hàn:** `섀도 트래픽`.

## 20. rollback trigger /ˈroʊlˌbæk ˈtrɪɡər/
**Part of speech:** noun
**Core meaning (English):** a predefined condition that automatically or manually returns a deployment to a prior version.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện kích hoạt rollback khi metric xấu hoặc lỗi nghiêm trọng.
**Grammar & collocations:** `rollback-trigger threshold` — threshold; `fire a rollback trigger` — kích hoạt.
**Examples:** `A rollback trigger fired when the error rate exceeded the canary limit for three minutes.` → Trigger chạy khi error rate vượt limit canary 3 phút.
**Liên kết tiếng Hàn:** `롤백 트리거`.

## Review in context

**Training telemetry** feeds **experiment tracking**, and a **run manifest** records exact inputs for a **hyperparameter sweep**. Engineers monitor **gradient norm**, **loss spike**, **activation histogram**, and **dead neuron** signals. A **checkpoint metric** supports **early stopping**; **learning-rate warmup** and **cosine decay** shape optimization. An **evaluation regression** triggers review, while a **reproducibility seed** supports reruns. The **artifact registry** stores outputs, and a **lineage query** traces them into the **model registry**. A **deployment canary** receives limited traffic, **shadow traffic** exercises a candidate without affecting users, and a **rollback trigger** protects production.

**Bản dịch tiếng Việt:** **Training telemetry** đưa dữ liệu vào **experiment tracking**, còn **run manifest** ghi input chính xác cho **hyperparameter sweep**. Kỹ sư theo dõi **gradient norm**, **loss spike**, **activation histogram** và **dead neuron**. **Checkpoint metric** hỗ trợ **early stopping**; **learning-rate warmup** và **cosine decay** định hình optimization. **Evaluation regression** kích hoạt review, còn **reproducibility seed** giúp chạy lại. **Artifact registry** giữ output, **lineage query** trace chúng vào **model registry**. **Deployment canary** nhận traffic giới hạn, **shadow traffic** thử candidate không ảnh hưởng user, và **rollback trigger** bảo vệ production.
