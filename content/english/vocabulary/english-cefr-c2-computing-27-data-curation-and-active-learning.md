# C2 Vocabulary — Data curation and active learning

This lesson follows a dataset from sample selection and annotation through versioning, split design, and leakage review.

Flow: **active learning → uncertainty sampling → core-set selection → deduplication threshold → near-duplicate cluster → annotation noise → annotator agreement → adjudication pass → ontology alignment → weak label → pseudo-label → confidence filtering → curriculum sampling → hard-negative mining → data card → provenance hash → dataset version pin → stratified split → temporal split → holdout leakage**.

## 1. active learning /ˈæktɪv ˈlɝnɪŋ/
**Part of speech:** noun
**Core meaning (English):** a training strategy that chooses which unlabeled examples should be labeled next to improve a model efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model chọn mẫu khó/giàu thông tin để con người label tiếp.
**Grammar & collocations:** `active-learning loop` — vòng lặp; `query an example` — chọn example để hỏi label.
**Examples:** `Active learning sent the most informative unlabelled scans to the reviewers first.` → Active learning gửi scan giàu thông tin nhất cho reviewer trước.
**Liên kết tiếng Hàn:** `능동 학습`.

## 2. uncertainty sampling /ʌnˈsɝtənti ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** selecting examples for labeling because the model is least certain about their predictions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn mẫu model phân vân nhất để label.
**Grammar & collocations:** `uncertainty-sampling score` — score; `sample low-confidence cases` — lấy mẫu.
**Examples:** `Uncertainty sampling prioritized images whose top two classes had similar probabilities.` → Sampling ưu tiên ảnh có hai class đầu gần xác suất.
**Liên kết tiếng Hàn:** `불확실성 샘플링`.

## 3. core-set selection /ˈkɔr sɛt səˈlɛkʃən/
**Part of speech:** noun
**Core meaning (English):** choosing a compact, diverse subset intended to represent the broader dataset.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn tập nhỏ nhưng phủ đa dạng của data lớn.
**Grammar & collocations:** `core-set-selection objective` — objective; `select a representative subset` — chọn.
**Examples:** `Core-set selection reduced annotation cost while preserving rare visual patterns.` → Selection giảm cost label mà vẫn giữ pattern hiếm.
**Liên kết tiếng Hàn:** `코어셋 선택`.

## 4. deduplication threshold /diːˌdjuːplɪˈkeɪʃən ˈθrɛʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** a similarity cutoff used to decide when two records should be treated as duplicates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngưỡng similarity để gộp/xóa record trùng.
**Grammar & collocations:** `deduplication-threshold sweep` — sweep; `set a similarity cutoff` — đặt cutoff.
**Examples:** `A stricter deduplication threshold removed near-identical screenshots from the training set.` → Threshold chặt hơn loại screenshot gần y hệt.
**Liên kết tiếng Hàn:** `중복 제거 임계값`.

## 5. near-duplicate cluster /nɪr ˈduːplɪkət ˈklʌstər/
**Part of speech:** noun
**Core meaning (English):** a group of records that are not identical but share nearly the same content or signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm record gần trùng, thường do nhiều crop hoặc phiên bản lưu khác nhau.
**Grammar & collocations:** `near-duplicate-cluster analysis` — phân tích; `collapse a cluster` — gộp.
**Examples:** `The near-duplicate cluster came from repeated exports of one source document.` → Cluster đến từ nhiều lần export cùng một tài liệu nguồn.
**Liên kết tiếng Hàn:** `근중복 클러스터`.

## 6. annotation noise /ˌænəˈteɪʃən nɔɪz/
**Part of speech:** noun
**Core meaning (English):** inconsistency or error in labels introduced during data annotation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** noise do người label sai, mơ hồ hoặc không nhất quán.
**Grammar & collocations:** `annotation-noise audit` — audit; `model label noise` — mô hình hóa noise.
**Examples:** `Annotation noise was concentrated in cases where the boundary was clinically ambiguous.` → Noise tập trung ở case boundary lâm sàng mơ hồ.
**Liên kết tiếng Hàn:** `주석 잡음`.

## 7. annotator agreement /ˈæməˌteɪtər əˈɡriːmənt/
**Part of speech:** noun
**Core meaning (English):** the degree to which independent annotators assign the same labels or boundaries.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức người label đồng ý với nhau.
**Grammar & collocations:** `annotator-agreement statistic` — thống kê; `measure inter-rater agreement` — đo.
**Examples:** `Low annotator agreement triggered a policy discussion before model training began.` → Agreement thấp kích hoạt thảo luận policy trước khi train.
**Liên kết tiếng Hàn:** `주석자 일치도`.

## 8. adjudication pass /əˌdʒuːdəˈkeɪʃən pæs/
**Part of speech:** noun
**Core meaning (English):** a review step that resolves disagreements between annotators using a defined authority or procedure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vòng phân xử để chốt label khi annotator bất đồng.
**Grammar & collocations:** `adjudication-pass record` — record; `adjudicate a disagreement` — phân xử.
**Examples:** `The adjudication pass resolved whether the faint structure counted as a lesion.` → Pass phân xử chốt cấu trúc mờ có tính là lesion không.
**Liên kết tiếng Hàn:** `판정 단계`.

## 9. ontology alignment /ɑnˈtɑlədʒi əˈlaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** mapping labels or concepts from different annotation schemes into a consistent vocabulary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** căn chỉnh taxonomy khác nhau về cùng ontology.
**Grammar & collocations:** `ontology-alignment map` — map; `align label vocabularies` — căn chỉnh.
**Examples:** `Ontology alignment mapped local diagnosis codes to the shared research schema.` → Alignment map code chẩn đoán local vào schema nghiên cứu chung.
**Liên kết tiếng Hàn:** `온톨로지 정렬`.

## 10. weak label /wiːk ˈleɪbəl/
**Part of speech:** noun
**Core meaning (English):** an imperfect or indirect label generated from heuristics, metadata, or a noisy source.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** label không hoàn hảo, dùng làm tín hiệu thay thế khi chưa có gold label.
**Grammar & collocations:** `weak-label source` — nguồn; `propagate weak labels` — lan truyền.
**Examples:** `A weak label from a keyword rule helped bootstrap the first classifier.` → Weak label từ rule keyword giúp khởi động classifier đầu tiên.
**Liên kết tiếng Hàn:** `약한 라벨`.

## 11. pseudo-label /ˈsuːdoʊ ˈleɪbəl/
**Part of speech:** noun
**Core meaning (English):** a label assigned automatically by a model and then used as training data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model tự gán nhãn cho data chưa label để dùng train tiếp.
**Grammar & collocations:** `pseudo-label confidence` — confidence; `generate pseudo-labels` — tạo.
**Examples:** `The system retained pseudo-labels only when the teacher model was highly confident.` → Hệ thống chỉ giữ pseudo-label khi teacher rất tự tin.
**Liên kết tiếng Hàn:** `의사 라벨`.

## 12. confidence filtering /ˈkɑnfədəns ˈfɪltərɪŋ/
**Part of speech:** noun
**Core meaning (English):** keeping automatically labeled examples only when their confidence exceeds a chosen threshold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lọc pseudo-label theo confidence trước khi đưa vào train.
**Grammar & collocations:** `confidence-filtering threshold` — threshold; `filter low-confidence labels` — lọc.
**Examples:** `Confidence filtering prevented uncertain pseudo-labels from reinforcing a wrong class.` → Filtering ngăn pseudo-label không chắc củng cố class sai.
**Liên kết tiếng Hàn:** `신뢰도 필터링`.

## 13. curriculum sampling /kəˈrɪkjələm ˈsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** presenting training examples according to a planned progression of difficulty or complexity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cho model học từ dễ đến khó theo curriculum.
**Grammar & collocations:** `curriculum-sampling schedule` — lịch; `increase sample difficulty` — tăng độ khó.
**Examples:** `Curriculum sampling introduced clean examples before noisy edge cases.` → Sampling theo curriculum đưa example sạch trước case nhiễu.
**Liên kết tiếng Hàn:** `커리큘럼 샘플링`.

## 14. hard-negative mining /hɑrd ˈnɛɡətɪv ˈmaɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** finding negative examples that resemble the positive class and are difficult to classify correctly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đào các negative khó, dễ bị nhầm với positive.
**Grammar & collocations:** `hard-negative-mining pass` — pass; `mine confusing negatives` — tìm.
**Examples:** `Hard-negative mining added benign images that looked alarmingly similar to the target condition.` → Mining thêm ảnh lành nhưng trông giống condition mục tiêu.
**Liên kết tiếng Hàn:** `어려운 음성 채굴`.

## 15. data card /ˈdeɪtə kɑrd/
**Part of speech:** noun
**Core meaning (English):** a document describing a dataset's origin, composition, intended use, limitations, and risks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “hồ sơ” dataset, ghi nguồn, thành phần và giới hạn.
**Grammar & collocations:** `data-card template` — template; `publish a data card` — phát hành.
**Examples:** `The data card disclosed the collection period and the groups underrepresented in the sample.` → Data card nêu thời gian thu thập và nhóm bị thiếu đại diện.
**Liên kết tiếng Hàn:** `데이터 카드`.

## 16. provenance hash /ˈprɑvənəns hæʃ/
**Part of speech:** noun
**Core meaning (English):** a hash used to link a dataset artifact to its exact source or transformation history.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hash giúp chứng minh artifact đến từ source/version nào.
**Grammar & collocations:** `provenance-hash record` — record; `verify the hash` — xác minh.
**Examples:** `The provenance hash showed that the exported split came from the approved preprocessing job.` → Hash chứng minh split export từ preprocessing job được duyệt.
**Liên kết tiếng Hàn:** `출처 해시`.

## 17. dataset version pin /ˈdeɪtəˌsɛt ˈvɝʒən pɪn/
**Part of speech:** noun
**Core meaning (English):** an explicit lock to a particular immutable dataset version for a run or release.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghim đúng version data để lần chạy sau tái lập.
**Grammar & collocations:** `dataset-version-pin file` — file; `pin the training data` — ghim.
**Examples:** `The dataset version pin prevented a silent refresh from changing the benchmark.` → Pin ngăn refresh ngầm làm đổi benchmark.
**Liên kết tiếng Hàn:** `데이터셋 버전 고정`.

## 18. stratified split /ˈstrætəˌfaɪd splɪt/
**Part of speech:** noun
**Core meaning (English):** dividing data while preserving important class or subgroup proportions in each partition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia train/validation/test nhưng giữ tỷ lệ class/subgroup.
**Grammar & collocations:** `stratified-split rule` — rule; `stratify by outcome` — phân tầng.
**Examples:** `A stratified split kept the rare failure class visible in validation.` → Split phân tầng giữ class failure hiếm trong validation.
**Liên kết tiếng Hàn:** `층화 분할`.

## 19. temporal split /ˈtɛmpərəl splɪt/
**Part of speech:** noun
**Core meaning (English):** dividing data by time so future examples are evaluated separately from earlier training examples.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** train bằng quá khứ, test bằng tương lai để mô phỏng deployment thật.
**Grammar & collocations:** `temporal-split evaluation` — evaluation; `hold out later records` — giữ lại.
**Examples:** `The temporal split exposed performance decay that a random split had hidden.` → Split theo thời gian lộ decay mà random split che mất.
**Liên kết tiếng Hàn:** `시간 분할`.

## 20. holdout leakage /ˈhoʊlˌdaʊt ˈliːkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** unintended transfer of information from held-out evaluation data into training, tuning, or selection decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data holdout bị rò vào quá trình chọn model, làm kết quả test không còn sạch.
**Grammar & collocations:** `holdout-leakage check` — check; `prevent evaluation leakage` — ngăn.
**Examples:** `Holdout leakage occurred when engineers repeatedly tuned the threshold on the final test set.` → Leakage xảy ra khi engineer chỉnh threshold nhiều lần trên test cuối.
**Liên kết tiếng Hàn:** `홀드아웃 누출`.

## Review in context

An **active learning** loop may use **uncertainty sampling** or **core-set selection** to choose the next examples. A **deduplication threshold** removes a **near-duplicate cluster**, while an **annotation noise** review measures **annotator agreement** and uses an **adjudication pass**. **Ontology alignment** maps labels, and a **weak label** or **pseudo-label** can be retained after **confidence filtering**. **Curriculum sampling** controls difficulty, and **hard-negative mining** finds confusing negatives. A **data card** records scope; a **provenance hash** and **dataset version pin** preserve traceability. A **stratified split** protects subgroup proportions, a **temporal split** tests future behavior, and a leakage review prevents **holdout leakage**.

**Bản dịch tiếng Việt:** Vòng lặp **active learning** có thể dùng **uncertainty sampling** hoặc **core-set selection** để chọn example tiếp theo. **Deduplication threshold** loại **near-duplicate cluster**, còn review **annotation noise** đo **annotator agreement** và dùng **adjudication pass**. **Ontology alignment** căn chỉnh label, còn **weak label** hoặc **pseudo-label** có thể được giữ sau **confidence filtering**. **Curriculum sampling** điều chỉnh độ khó, và **hard-negative mining** tìm negative dễ nhầm. **Data card** ghi phạm vi; **provenance hash** và **dataset version pin** giữ traceability. **Stratified split** bảo vệ tỷ lệ subgroup, **temporal split** kiểm tra hành vi tương lai, và review leakage ngăn **holdout leakage**.
