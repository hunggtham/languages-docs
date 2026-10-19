# C2 Vocabulary — Process analytics and adaptive model monitoring

This lesson applies statistical learning to process health, drift detection, active sampling, and trustworthy model maintenance.

Flow: **process anomaly detector → embedding drift → concept drift alarm → feature normalization → latent-space cluster → autoencoder residual → principal-component score → classification confidence → active-learning query → domain adaptation → transfer-learning gap → model retraining trigger → label-noise audit → class imbalance ratio → rare-event weighting → precision-recall tradeoff → false-discovery budget → model staleness index → data freshness score → deployment shadow mode**.

## 1. process anomaly detector /ˈprɑːses əˈnɑːməli dɪˈtektər/
**Part of speech:** noun
**Core meaning (English):** model or system that flags process behavior unlike its learned or specified baseline.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model hoặc system báo process behavior khác baseline learned hoặc specified.
**Grammar & collocations:** `process-anomaly-detector threshold` — threshold; `flag an unseen excursion` — báo excursion chưa thấy.
**Examples:** `The process anomaly detector flagged a new chamber state before the yield monitor moved.` → Detector anomaly-process báo chamber state mới trước yield monitor đổi.
**Liên kết tiếng Hàn:** `공정 이상 탐지기`.

## 2. embedding drift /emˈbedɪŋ drɪft/
**Part of speech:** noun
**Core meaning (English):** change in the distribution of learned feature representations over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** distribution learned feature representation đổi theo time.
**Grammar & collocations:** `embedding-drift metric` — metric; `compare current and baseline embeddings` — so embedding hiện tại và baseline.
**Examples:** `Embedding drift appeared after a new sensor firmware changed the waveform shape.` → Drift embedding xuất hiện sau firmware sensor mới đổi waveform shape.
**Liên kết tiếng Hàn:** `임베딩 드리프트`.

## 3. concept drift alarm /ˈkɑːnsept drɪft əˈlɑːrm/
**Part of speech:** noun
**Core meaning (English):** alert that the relationship between inputs and target outcomes has changed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** alert quan hệ giữa input và target outcome đã đổi.
**Grammar & collocations:** `concept-drift-alarm policy` — policy; `revalidate a decision boundary` — revalidate decision boundary.
**Examples:** `The concept drift alarm fired when the same sensor signature produced a different defect class.` → Alarm drift-concept fire khi cùng sensor signature tạo defect class khác.
**Liên kết tiếng Hàn:** `개념 드리프트 경보`.

## 4. feature normalization /ˈfiːtʃər ˌnɔːrmələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** transforming input features to comparable scales before model fitting or inference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transform input feature về scale so sánh trước fit hoặc inference.
**Grammar & collocations:** `feature-normalization statistic` — statistic; `standardize a sensor channel` — standardize sensor channel.
**Examples:** `Feature normalization prevented the high-range temperature channel from dominating the model.` → Normalization feature ngăn temperature channel range cao dominate model.
**Liên kết tiếng Hàn:** `특징 정규화`.

## 5. latent-space cluster /ˈleɪtənt speɪs ˈklʌstər/
**Part of speech:** noun
**Core meaning (English):** group of samples that are close in a model's learned internal representation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm sample gần nhau trong learned internal representation của model.
**Grammar & collocations:** `latent-space-cluster centroid` — centroid; `separate operating regimes` — tách operating regime.
**Examples:** `A latent-space cluster corresponded to wafers processed after a maintenance event.` → Cluster space-latent tương ứng wafer process sau maintenance event.
**Liên kết tiếng Hàn:** `잠재 공간 군집`.

## 6. autoencoder residual /ˌɔːtoʊɪnˈkoʊdər rɪˈzɪdʒuəl/
**Part of speech:** noun
**Core meaning (English):** reconstruction error produced when an autoencoder represents an input unlike its training population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reconstruction error khi autoencoder biểu diễn input khác training population.
**Grammar & collocations:** `autoencoder-residual threshold` — threshold; `detect an unusual waveform` — detect waveform bất thường.
**Examples:** `Autoencoder residual rose during the unplanned gas-flow transition.` → Residual autoencoder tăng trong gas-flow transition ngoài kế hoạch.
**Liên kết tiếng Hàn:** `오토인코더 잔차`.

## 7. principal-component score /ˈprɪnsəpəl kəmˈpoʊnənt skɔːr/
**Part of speech:** noun
**Core meaning (English):** coordinate of an observation along a learned principal direction of variation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** coordinate observation trên principal direction variation đã learn.
**Grammar & collocations:** `principal-component-score chart` — chart; `project onto a dominant mode` — project lên mode chi phối.
**Examples:** `The principal-component score separated chamber seasoning from wafer loading.` → Score component-principal tách chamber seasoning khỏi wafer loading.
**Liên kết tiếng Hàn:** `주성분 점수`.

## 8. classification confidence /ˌklæsəfəˈkeɪʃən ˈkɑːnfɪdəns/
**Part of speech:** noun
**Core meaning (English):** model-estimated certainty that an input belongs to its assigned class.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** certainty model estimate input thuộc class đã assign.
**Grammar & collocations:** `classification-confidence threshold` — threshold; `route low-confidence cases` — route case confidence thấp.
**Examples:** `Classification confidence fell for wafers from a previously unseen recipe.` → Confidence classification giảm cho wafer từ recipe chưa thấy.
**Liên kết tiếng Hàn:** `분류 신뢰도`.

## 9. active-learning query /ˈæktɪv ˈlɜːrnɪŋ ˈkwɪəri/
**Part of speech:** noun
**Core meaning (English):** request for a label or measurement chosen because it would most improve a model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** request label hoặc measurement được chọn vì cải thiện model nhiều nhất.
**Grammar & collocations:** `active-learning-query policy` — policy; `select an informative sample` — chọn sample nhiều thông tin.
**Examples:** `The active-learning query selected a borderline wafer for destructive analysis.` → Query learning-active chọn wafer borderline cho destructive analysis.
**Liên kết tiếng Hàn:** `능동 학습 질의`.

## 10. domain adaptation /doʊˈmeɪn ˌædæpˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** adjusting a model trained in one data environment to work in another related environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh model train ở data environment này để hoạt động environment liên quan khác.
**Grammar & collocations:** `domain-adaptation layer` — layer; `align source and target distributions` — align distribution source và target.
**Examples:** `Domain adaptation transferred the defect classifier from one tool family to another.` → Adaptation domain chuyển defect classifier từ tool family này sang tool khác.
**Liên kết tiếng Hàn:** `도메인 적응`.

## 11. transfer-learning gap /ˈtrænsfɜːr ˈlɜːrnɪŋ ɡæp/
**Part of speech:** noun
**Core meaning (English):** performance difference remaining after a pretrained model is moved to a new task or population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** performance difference còn lại sau chuyển pretrained model sang task hoặc population mới.
**Grammar & collocations:** `transfer-learning-gap analysis` — analysis; `measure cross-tool degradation` — đo degradation cross-tool.
**Examples:** `The transfer-learning gap was largest for the rare contamination class.` → Gap learning-transfer lớn nhất ở contamination class hiếm.
**Liên kết tiếng Hàn:** `전이 학습 격차`.

## 12. model retraining trigger /ˈmɑːdəl riːˈtreɪnɪŋ ˈtrɪɡər/
**Part of speech:** noun
**Core meaning (English):** monitored condition that initiates collection and training of an updated model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** condition monitor kích hoạt collection và training model update.
**Grammar & collocations:** `model-retraining-trigger rule` — rule; `refresh a stale classifier` — refresh classifier stale.
**Examples:** `A model retraining trigger was tied to drift, not simply to elapsed calendar time.` → Trigger retraining-model gắn drift chứ không chỉ calendar time.
**Liên kết tiếng Hàn:** `모델 재학습 트리거`.

## 13. label-noise audit /ˈleɪbəl nɔɪz ˈɔːdɪt/
**Part of speech:** noun
**Core meaning (English):** review of incorrect, inconsistent, or ambiguous labels used to train or evaluate a model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** review label sai, không nhất quán hoặc mơ hồ dùng train/evaluate model.
**Grammar & collocations:** `label-noise-audit sample` — sample; `adjudicate conflicting annotations` — adjudicate annotation conflict.
**Examples:** `The label-noise audit found that two technicians used different failure definitions.` → Audit noise-label phát hiện hai technician dùng failure definition khác.
**Liên kết tiếng Hàn:** `라벨 잡음 감사`.

## 14. class imbalance ratio /klæs ɪmˈbæləns ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** ratio between the frequencies of common and rare classes in a labeled dataset.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ số frequency class phổ biến và hiếm trong labeled dataset.
**Grammar & collocations:** `class-imbalance-ratio correction` — correction; `rebalance rare failures` — cân lại failure hiếm.
**Examples:** `Class imbalance ratio caused the nominal accuracy to hide poor rare-defect recall.` → Ratio imbalance-class khiến accuracy danh nghĩa che recall defect hiếm kém.
**Liên kết tiếng Hàn:** `클래스 불균형 비율`.

## 15. rare-event weighting /rer ɪˈvent ˈweɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** assigning extra training or evaluation weight to infrequent but important events.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gán weight thêm cho event hiếm nhưng quan trọng.
**Grammar & collocations:** `rare-event-weighting scheme` — scheme; `penalize a missed failure` — phạt missed failure.
**Examples:** `Rare-event weighting improved detection of the low-frequency particle excursion.` → Weighting event-hiếm cải thiện detection particle excursion frequency thấp.
**Liên kết tiếng Hàn:** `희귀 사건 가중치`.

## 16. precision-recall tradeoff /prɪˈsɪʒən rɪˈkɔːl ˈtreɪdɔːf/
**Part of speech:** noun
**Core meaning (English):** balance between avoiding false alarms and recovering as many true cases as possible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cân bằng tránh false alarm với thu hồi nhiều true case nhất.
**Grammar & collocations:** `precision-recall-tradeoff curve` — curve; `choose an operating threshold` — chọn operating threshold.
**Examples:** `The precision-recall tradeoff favored recall because missed escapes were expensive.` → Tradeoff precision-recall ưu tiên recall vì escape bị miss đắt giá.
**Liên kết tiếng Hàn:** `정밀도-재현율 절충`.

## 17. false-discovery budget /fɔːls dɪˈskʌvəri ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** allowed rate or number of false alarms in a monitoring or screening system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rate hoặc number false alarm cho phép trong monitoring/screening system.
**Grammar & collocations:** `false-discovery-budget limit` — limit; `control nuisance alarms` — kiểm soát nuisance alarm.
**Examples:** `The false-discovery budget prevented the detector from quarantining every borderline lot.` → Budget discovery-false ngăn detector quarantine mọi lot borderline.
**Liên kết tiếng Hàn:** `거짓 발견 예산`.

## 18. model staleness index /ˈmɑːdəl ˈsteɪlnəs ˈɪndeks/
**Part of speech:** noun
**Core meaning (English):** score estimating how outdated a model is relative to current data and process conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** score ước tính model outdated đến mức nào so với data và process hiện tại.
**Grammar & collocations:** `model-staleness-index threshold` — threshold; `retire an outdated model` — retire model cũ.
**Examples:** `The model staleness index rose after the chamber hardware revision.` → Index staleness-model tăng sau chamber hardware revision.
**Liên kết tiếng Hàn:** `모델 노후화 지수`.

## 19. data freshness score /ˈdeɪtə ˈfreʃnəs skɔːr/
**Part of speech:** noun
**Core meaning (English):** score describing how recently and continuously the data feeding a model have been collected.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** score mô tả data feed model được collect gần đây và liên tục thế nào.
**Grammar & collocations:** `data-freshness-score monitor` — monitor; `flag a delayed feed` — báo feed trễ.
**Examples:** `Data freshness score fell when the metrology export stalled overnight.` → Score freshness-data giảm khi metrology export stall qua đêm.
**Liên kết tiếng Hàn:** `데이터 최신성 점수`.

## 20. deployment shadow mode /dɪˈplɔɪmənt ˈʃædoʊ moʊd/
**Part of speech:** noun
**Core meaning (English):** operating a new model alongside the active model without using its decisions for control.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy model mới cạnh model active nhưng không dùng decision mới để control.
**Grammar & collocations:** `deployment-shadow-mode comparison` — comparison; `observe predictions safely` — observe prediction an toàn.
**Examples:** `Deployment shadow mode compared the retrained model before promotion to production control.` → Mode shadow deployment so model retrain trước promotion vào production control.
**Liên kết tiếng Hàn:** `배포 섀도 모드`.

## Review in context

A **process anomaly detector** monitors **embedding drift**, a **concept drift alarm**, and **feature normalization** around a **latent-space cluster**, **autoencoder residual**, **principal-component score**, and **classification confidence**. An **active-learning query**, **domain adaptation**, **transfer-learning gap**, and **model retraining trigger** maintain relevance, while a **label-noise audit**, **class imbalance ratio**, **rare-event weighting**, **precision-recall tradeoff**, and **false-discovery budget** govern decisions. A **model staleness index**, **data freshness score**, and **deployment shadow mode** provide release evidence.

**Bản dịch tiếng Việt:** **Process anomaly detector** theo dõi **embedding drift**, **concept drift alarm** và **feature normalization** quanh **latent-space cluster**, **autoencoder residual**, **principal-component score** và **classification confidence**. **Active-learning query**, **domain adaptation**, **transfer-learning gap** và **model retraining trigger** duy trì tính phù hợp; **label-noise audit**, **class imbalance ratio**, **rare-event weighting**, **precision-recall tradeoff** và **false-discovery budget** quản trị quyết định. **Model staleness index**, **data freshness score** và **deployment shadow mode** cung cấp evidence release.
