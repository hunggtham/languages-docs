# C2 Vocabulary — Machine-learning training and evaluation lifecycle

This lesson follows a model from feature preparation and dataset controls through experiment tracking, search, and regularization.

Flow: **feature store → feature pipeline → training dataset → validation split → test split → data leakage → class imbalance → covariate shift → dataset card → experiment tracker → run registry → artifact lineage → grid search → random search → Bayesian optimization → checkpoint averaging → learning rate schedule → warmup schedule → weight decay → regularization path**.

## 1. feature store /ˈfiːtʃər stɔːr/
**Part of speech:** noun
**Core meaning (English):** a managed system for storing, serving, and versioning features used by machine-learning models.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ thống quản lý để lưu, serve và version feature cho model ML.
**Grammar & collocations:** `feature-store entity` — entity; `serve an online feature` — phục vụ.
**Examples:** `The feature store served the same customer risk feature to training and inference.` → Store phục vụ cùng feature risk cho train và inference.
**Liên kết tiếng Hàn:** `피처 저장소`.

## 2. feature pipeline /ˈfiːtʃər ˈpaɪplaɪn/
**Part of speech:** noun
**Core meaning (English):** a sequence of transformations that derives model-ready features from raw data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi transformation đổi raw data thành feature sẵn cho model.
**Grammar & collocations:** `feature-pipeline step` — step; `compute a rolling feature` — tính.
**Examples:** `The feature pipeline computed a thirty-day purchase total without using future records.` → Pipeline tính total 30 ngày không dùng record tương lai.
**Liên kết tiếng Hàn:** `피처 파이프라인`.

## 3. training dataset /ˈtreɪnɪŋ ˈdeɪtəset/
**Part of speech:** noun
**Core meaning (English):** the labeled or structured data used to fit a model's parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data có label/structure dùng để fit parameter model.
**Grammar & collocations:** `training-dataset snapshot` — snapshot; `fit on historical examples` — fit.
**Examples:** `The training dataset excluded accounts created after the prediction date.` → Dataset train bỏ account tạo sau ngày dự đoán.
**Liên kết tiếng Hàn:** `학습 데이터셋`.

## 4. validation split /ˌvæləˈdeɪʃən splɪt/
**Part of speech:** noun
**Core meaning (English):** a held-out portion used to choose settings or compare models during development.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần data giữ lại để chọn setting hoặc so model lúc phát triển.
**Grammar & collocations:** `validation-split boundary` — boundary; `tune against validation data` — tinh chỉnh.
**Examples:** `The validation split guided threshold selection without touching the final evaluation set.` → Split validation hướng dẫn threshold mà không đụng set cuối.
**Liên kết tiếng Hàn:** `검증 분할`.

## 5. test split /test splɪt/
**Part of speech:** noun
**Core meaning (English):** a held-out portion reserved for an unbiased final estimate of model performance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần data giữ riêng để ước lượng performance cuối không bias.
**Grammar & collocations:** `test-split result` — result; `evaluate once on held-out data` — đánh giá.
**Examples:** `The team opened the test split only after all feature choices were frozen.` → Team chỉ mở split test sau khi chốt feature.
**Liên kết tiếng Hàn:** `테스트 분할`.

## 6. data leakage /ˈdeɪtə ˈliːkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** unintended access to information during training that would not be available when predictions are made.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** training vô tình thấy information lúc prediction thật sẽ không có.
**Grammar & collocations:** `data-leakage check` — check; `remove future information` — loại.
**Examples:** `Data leakage made the offline score look excellent because the label timestamp entered the feature.` → Leakage làm score đẹp vì timestamp label lọt vào feature.
**Liên kết tiếng Hàn:** `데이터 누출`.

## 7. class imbalance /klæs ɪmˈbæləns/
**Part of speech:** noun
**Core meaning (English):** a distribution in which some target classes have far fewer examples than others.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân phối target có class ít example hơn nhiều class khác.
**Grammar & collocations:** `class-imbalance correction` — correction; `weight a rare class` — gán trọng số.
**Examples:** `Class imbalance caused the classifier to ignore the rare fraud cases.` → Imbalance khiến classifier bỏ qua fraud hiếm.
**Liên kết tiếng Hàn:** `클래스 불균형`.

## 8. covariate shift /ˈkoʊveriət ʃɪft/
**Part of speech:** noun
**Core meaning (English):** a change in the input distribution between training data and deployment while the target relationship is assumed stable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân phối input đổi giữa train và deploy dù quan hệ target giả định ổn định.
**Grammar & collocations:** `covariate-shift detector` — detector; `reweight training examples` — gán lại trọng số.
**Examples:** `Covariate shift appeared when production traffic contained devices absent from training.` → Shift xuất hiện khi production có device không có trong train.
**Liên kết tiếng Hàn:** `공변량 이동`.

## 9. dataset card /ˈdeɪtəset kɑːrd/
**Part of speech:** noun
**Core meaning (English):** documentation describing a dataset's purpose, composition, limitations, and recommended uses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tài liệu nêu purpose, thành phần, giới hạn và cách dùng dataset.
**Grammar & collocations:** `dataset-card section` — section; `document collection limitations` — ghi.
**Examples:** `The dataset card warned that the labels were incomplete for rural addresses.` → Card cảnh báo label thiếu ở địa chỉ nông thôn.
**Liên kết tiếng Hàn:** `데이터셋 카드`.

## 10. experiment tracker /ɪkˈsperɪmənt ˈtrækər/
**Part of speech:** noun
**Core meaning (English):** a system recording training parameters, metrics, code versions, and results for model experiments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ thống ghi parameter, metric, version code và result của experiment model.
**Grammar & collocations:** `experiment-tracker run` — run; `log a validation score` — ghi.
**Examples:** `The experiment tracker connected the score to the exact preprocessing commit.` → Tracker nối score với commit preprocessing chính xác.
**Liên kết tiếng Hàn:** `실험 추적기`.

## 11. run registry /rʌn ˈredʒɪstri/
**Part of speech:** noun
**Core meaning (English):** a catalog of executed training or evaluation runs and their status, parameters, and outputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** catalog run train/eval cùng status, parameter và output.
**Grammar & collocations:** `run-registry entry` — entry; `promote a verified run` — đưa lên.
**Examples:** `The run registry marked the failed experiment as superseded rather than deleting it.` → Registry đánh dấu run fail bị thay thế thay vì xóa.
**Liên kết tiếng Hàn:** `실행 레지스트리`.

## 12. artifact lineage /ˈɑːrtɪfækt ˈlɪniɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a trace connecting a produced model artifact to its source data, code, configuration, and training run.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trace nối model artifact với data, code, config và run sinh ra nó.
**Grammar & collocations:** `artifact-lineage record` — record; `trace a model to source data` — truy.
**Examples:** `Artifact lineage showed which dataset version produced the deployed model.` → Lineage cho thấy version dataset sinh model deploy.
**Liên kết tiếng Hàn:** `아티팩트 계보`.

## 13. grid search /ɡrɪd sɜːrtʃ/
**Part of speech:** noun
**Core meaning (English):** trying every combination in a predefined set of hyperparameter values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thử mọi tổ hợp trong tập value hyperparameter định trước.
**Grammar & collocations:** `grid-search space` — space; `evaluate a parameter combination` — đánh giá.
**Examples:** `Grid search found a stable regularization value among the tested combinations.` → Grid search tìm value regularization ổn định.
**Liên kết tiếng Hàn:** `그리드 검색`.

## 14. random search /ˈrændəm sɜːrtʃ/
**Part of speech:** noun
**Core meaning (English):** sampling hyperparameter combinations randomly from specified distributions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lấy ngẫu nhiên tổ hợp hyperparameter từ distribution chỉ định.
**Grammar & collocations:** `random-search budget` — budget; `sample a candidate configuration` — lấy mẫu.
**Examples:** `Random search explored more learning-rate values than the small grid could cover.` → Random search khám phá nhiều learning rate hơn grid nhỏ.
**Liên kết tiếng Hàn:** `무작위 검색`.

## 15. Bayesian optimization /ˈbeɪziən ˌɒptɪmaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** sequentially choosing experiments by modeling which hyperparameters are likely to improve an objective.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn experiment tuần tự bằng model dự đoán hyperparameter cải thiện objective.
**Grammar & collocations:** `Bayesian-optimization surrogate` — surrogate; `select the next trial` — chọn.
**Examples:** `Bayesian optimization focused expensive trials near the promising configuration.` → Optimization tập trung trial đắt quanh config hứa hẹn.
**Liên kết tiếng Hàn:** `베이지안 최적화`.

## 16. checkpoint averaging /ˈtʃekpɔɪnt ˈævərɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** combining parameters from several saved training checkpoints to produce a more stable model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp parameter từ nhiều checkpoint để tạo model ổn định hơn.
**Grammar & collocations:** `checkpoint-averaging window` — window; `average late-training weights` — lấy trung bình.
**Examples:** `Checkpoint averaging reduced variance between the final epochs.` → Averaging giảm variance giữa epoch cuối.
**Liên kết tiếng Hàn:** `체크포인트 평균화`.

## 17. learning rate schedule /ˈlɜːrnɪŋ reɪt ˈskedʒuːl/
**Part of speech:** noun
**Core meaning (English):** a rule controlling how the optimizer's step size changes during training.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule điều khiển step size optimizer đổi trong training.
**Grammar & collocations:** `learning-rate-schedule phase` — phase; `decay the step size` — giảm.
**Examples:** `The learning rate schedule reduced updates after the validation score plateaued.` → Schedule giảm update khi score validation phẳng.
**Liên kết tiếng Hàn:** `학습률 일정`.

## 18. warmup schedule /ˈwɔːrmʌp ˈskedʒuːl/
**Part of speech:** noun
**Core meaning (English):** a schedule that begins training with a small step size and increases it gradually.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** schedule bắt đầu step size nhỏ rồi tăng dần.
**Grammar & collocations:** `warmup-schedule duration` — duration; `ramp the learning rate` — tăng dần.
**Examples:** `The warmup schedule prevented unstable updates during the first hundred steps.` → Warmup ngăn update không ổn định 100 step đầu.
**Liên kết tiếng Hàn:** `워밍업 일정`.

## 19. weight decay /weɪt dɪˈkeɪ/
**Part of speech:** noun
**Core meaning (English):** a regularization mechanism that gradually discourages large model parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế regularization dần ngăn parameter model quá lớn.
**Grammar & collocations:** `weight-decay coefficient` — coefficient; `regularize model weights` — regularize.
**Examples:** `Weight decay improved generalization when the model began memorizing the training set.` → Decay cải thiện generalization khi model học thuộc train.
**Liên kết tiếng Hàn:** `가중치 감쇠`.

## 20. regularization path /ˌreɡjələrəˈzeɪʃən pɑːθ/
**Part of speech:** noun
**Core meaning (English):** the sequence of fitted models or coefficients observed as regularization strength changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi model/coefficient khi strength regularization thay đổi.
**Grammar & collocations:** `regularization-path plot` — plot; `inspect coefficient shrinkage` — kiểm tra.
**Examples:** `The regularization path showed which features disappeared as the penalty increased.` → Path cho thấy feature nào biến mất khi penalty tăng.
**Liên kết tiếng Hàn:** `정규화 경로`.

## Review in context

A **feature store** serves data produced by a **feature pipeline** for a **training dataset**. A **validation split** guides choices, while a **test split** remains untouched; **data leakage**, **class imbalance**, and **covariate shift** threaten validity. A **dataset card** documents limits, an **experiment tracker** records runs, a **run registry** catalogs them, and **artifact lineage** connects a model to its sources. **Grid search**, **random search**, and **Bayesian optimization** explore settings. **Checkpoint averaging** stabilizes late training; a **learning rate schedule** changes step size, a **warmup schedule** starts gently, **weight decay** regularizes parameters, and a **regularization path** reveals the penalty's effect.

**Bản dịch tiếng Việt:** **Feature store** phục vụ data do **feature pipeline** tạo cho **training dataset**. **Validation split** hướng dẫn lựa chọn, còn **test split** giữ riêng; **data leakage**, **class imbalance** và **covariate shift** đe dọa tính hợp lệ. **Dataset card** ghi giới hạn, **experiment tracker** ghi run, **run registry** lập catalog, còn **artifact lineage** nối model với nguồn. **Grid search**, **random search** và **Bayesian optimization** khám phá setting. **Checkpoint averaging** ổn định training cuối; **learning rate schedule** đổi step size, **warmup schedule** khởi đầu nhẹ, **weight decay** regularize parameter, còn **regularization path** cho thấy effect của penalty.
