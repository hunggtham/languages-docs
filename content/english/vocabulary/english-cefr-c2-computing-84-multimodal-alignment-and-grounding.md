# C2 Vocabulary — Multimodal alignment and grounding

This lesson follows a multimodal model from modality-specific encoders through alignment, fusion, retrieval, grounding, and adaptation.

Flow: **cross-modal alignment → modality gap → contrastive alignment → image-text embedding → late fusion → early fusion → co-attention → modality dropout → missing modality → multimodal grounding → cross-modal retrieval → vision-language encoder → audio-visual correspondence → multimodal instruction tuning → preference alignment → parameter-efficient adaptation → low-rank adapter → prompt interpolation → modality-specific encoder → shared latent space**.

## 1. cross-modal alignment /ˌkrɒs ˈmoʊdəl əˈlaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** making representations from different modalities correspond to the same underlying content or event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** căn representation của các modality về cùng nội dung hoặc event.
**Grammar & collocations:** `cross-modal-alignment loss` — loss; `align audio and text` — căn.
**Examples:** `Cross-modal alignment brought a spoken description close to its matching video segment.` → Alignment đưa speech gần video đúng.
**Liên kết tiếng Hàn:** `교차 모달 정렬`.

## 2. modality gap /moʊˈdæləti ɡæp/
**Part of speech:** noun
**Core meaning (English):** a systematic difference between the representation spaces learned from two input modalities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khác biệt hệ thống giữa space của hai modality.
**Grammar & collocations:** `modality-gap correction` — correction; `bridge representation spaces` — nối.
**Examples:** `The modality gap made a text query retrieve visually similar but semantically wrong images.` → Gap khiến retrieval sai nghĩa.
**Liên kết tiếng Hàn:** `모달리티 격차`.

## 3. contrastive alignment /kənˈtræstɪv əˈlaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** training representations to bring matching pairs together and separate mismatched pairs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kéo cặp đúng gần và đẩy cặp sai xa.
**Grammar & collocations:** `contrastive-alignment objective` — objective; `mine a hard negative` — chọn.
**Examples:** `Contrastive alignment taught the model that a caption belonged to one image rather than its neighbor.` → Alignment học caption thuộc ảnh nào.
**Liên kết tiếng Hàn:** `대조 정렬`.

## 4. image-text embedding /ˈɪmɪdʒ tekst emˈbedɪŋ/
**Part of speech:** noun
**Core meaning (English):** a shared vector representation for visual content and its textual description.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vector chung cho ảnh và mô tả chữ.
**Grammar & collocations:** `image-text-embedding space` — space; `rank a caption` — xếp hạng.
**Examples:** `The image-text embedding enabled search with natural-language descriptions.` → Embedding cho tìm kiếm bằng ngôn ngữ tự nhiên.
**Liên kết tiếng Hàn:** `이미지-텍스트 임베딩`.

## 5. late fusion /leɪt ˈfjuːʒən/
**Part of speech:** noun
**Core meaning (English):** combining modality-specific predictions after each modality has been processed separately.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xử lý từng modality riêng rồi mới gộp prediction.
**Grammar & collocations:** `late-fusion classifier` — classifier; `combine posterior scores` — gộp.
**Examples:** `Late fusion remained useful when the audio and image encoders had different update schedules.` → Fusion muộn hữu ích khi encoder khác lịch.
**Liên kết tiếng Hàn:** `후기 융합`.

## 6. early fusion /ˈɜːrli ˈfjuːʒən/
**Part of speech:** noun
**Core meaning (English):** combining modality features before the main prediction network processes them jointly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp feature modality trước network chính.
**Grammar & collocations:** `early-fusion representation` — representation; `concatenate feature streams` — nối.
**Examples:** `Early fusion let the network model timing between a gesture and a spoken word.` → Fusion sớm học timing gesture và speech.
**Liên kết tiếng Hàn:** `초기 융합`.

## 7. co-attention /ˌkoʊ əˈtenʃən/
**Part of speech:** noun
**Core meaning (English):** reciprocal attention in which two modalities select informative elements from each other.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hai modality cùng attention lẫn nhau để chọn phần hữu ích.
**Grammar & collocations:** `co-attention block` — block; `attend across modalities` — chú ý.
**Examples:** `Co-attention linked the phrase “red roof” to the corresponding image region.` → Co-attention nối phrase với vùng ảnh.
**Liên kết tiếng Hàn:** `공동 어텐션`.

## 8. modality dropout /moʊˈdæləti ˈdrɒpaʊt/
**Part of speech:** noun
**Core meaning (English):** randomly hiding one input modality during training so the model learns to rely on alternatives.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** che ngẫu nhiên một modality lúc train để model học fallback.
**Grammar & collocations:** `modality-dropout rate` — rate; `mask an audio stream` — che.
**Examples:** `Modality dropout improved robustness when the microphone failed at deployment.` → Dropout tăng robustness khi mic hỏng.
**Liên kết tiếng Hàn:** `모달리티 드롭아웃`.

## 9. missing modality /ˈmɪsɪŋ moʊˈdæləti/
**Part of speech:** noun
**Core meaning (English):** an expected input channel that is unavailable, corrupted, or not collected for a sample.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** channel kỳ vọng bị thiếu, hỏng hoặc không thu được.
**Grammar & collocations:** `missing-modality imputation` — imputation; `infer an absent channel` — suy ra.
**Examples:** `The model used text context to compensate for a missing modality in the scan.` → Model dùng text bù channel thiếu.
**Liên kết tiếng Hàn:** `누락된 모달리티`.

## 10. multimodal grounding /ˌmʌltɪˈmoʊdəl ˈɡraʊndɪŋ/
**Part of speech:** noun
**Core meaning (English):** linking a language expression to a concrete object, region, action, or event in another modality.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nối expression với vật, vùng, action hoặc event cụ thể.
**Grammar & collocations:** `multimodal-grounding benchmark` — benchmark; `ground a phrase in pixels` — neo.
**Examples:** `Multimodal grounding mapped the instruction to the correct button on the screen.` → Grounding map instruction vào button.
**Liên kết tiếng Hàn:** `멀티모달 접지`.

## 11. cross-modal retrieval /ˌkrɒs ˈmoʊdəl rɪˈtriːvəl/
**Part of speech:** noun
**Core meaning (English):** retrieving items in one modality by querying with content from another modality.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng query modality này để tìm item modality kia.
**Grammar & collocations:** `cross-modal-retrieval index` — index; `retrieve a matching clip` — truy xuất.
**Examples:** `Cross-modal retrieval found a video from a short textual description.` → Retrieval tìm video từ mô tả ngắn.
**Liên kết tiếng Hàn:** `교차 모달 검색`.

## 12. vision-language encoder /ˈvɪʒən ˈlæŋɡwɪdʒ enˈkoʊdər/
**Part of speech:** noun
**Core meaning (English):** an encoder that represents visual inputs and language tokens in a coordinated feature space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** encoder đưa ảnh và token chữ vào feature space phối hợp.
**Grammar & collocations:** `vision-language-encoder checkpoint` — checkpoint; `encode a visual prompt` — mã hóa.
**Examples:** `The vision-language encoder recognized that the diagram contradicted the caption.` → Encoder nhận ra sơ đồ trái caption.
**Liên kết tiếng Hàn:** `비전-언어 인코더`.

## 13. audio-visual correspondence /ˌɔːdioʊ ˈvɪʒuəl ˌkɔːrəˈspɒndəns/
**Part of speech:** noun
**Core meaning (English):** the relationship between what is heard and what is visibly occurring at the same time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ giữa âm thanh và sự kiện nhìn thấy cùng lúc.
**Grammar & collocations:** `audio-visual-correspondence task` — task; `match a sound to motion` — khớp.
**Examples:** `Audio-visual correspondence helped the model identify which speaker was moving.` → Correspondence xác định người đang nói.
**Liên kết tiếng Hàn:** `시청각 대응`.

## 14. multimodal instruction tuning /ˌmʌltɪˈmoʊdəl ɪnˈstrʌkʃən ˈtuːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** adapting a model with instructions that require coordinated reasoning over multiple modalities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tune model bằng instruction cần suy luận nhiều modality.
**Grammar & collocations:** `multimodal-instruction-tuning corpus` — corpus; `answer a visual question` — trả lời.
**Examples:** `Multimodal instruction tuning taught the assistant to explain a chart in plain language.` → Tuning dạy assistant giải thích chart.
**Liên kết tiếng Hàn:** `멀티모달 지시 튜닝`.

## 15. preference alignment /ˈprefərəns əˈlaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** adjusting model behavior to reflect judgments about which multimodal responses are more helpful or safe.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh behavior theo đánh giá response hữu ích và an toàn.
**Grammar & collocations:** `preference-alignment signal` — signal; `rank two responses` — xếp hạng.
**Examples:** `Preference alignment penalized confident answers that ignored visible evidence.` → Alignment phạt answer tự tin nhưng bỏ evidence.
**Liên kết tiếng Hàn:** `선호 정렬`.

## 16. parameter-efficient adaptation /pəˈræmɪtər ɪˈfɪʃənt ˌædæpˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** adapting a large model by changing only a small number of trainable parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thích nghi model lớn bằng cách chỉ train ít parameter.
**Grammar & collocations:** `parameter-efficient-adaptation method` — method; `freeze a backbone` — đóng băng.
**Examples:** `Parameter-efficient adaptation fit the vision-language model on a modest domain dataset.` → Adaptation phù hợp data domain nhỏ.
**Liên kết tiếng Hàn:** `매개변수 효율적 적응`.

## 17. low-rank adapter /ˌloʊ ræŋk əˈdæptər/
**Part of speech:** noun
**Core meaning (English):** a small trainable matrix update that approximates a full parameter change with low rank.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** update matrix nhỏ, rank thấp thay đổi parameter lớn.
**Grammar & collocations:** `low-rank-adapter weight` — weight; `inject a trainable module` — chèn.
**Examples:** `The low-rank adapter specialized the model without rewriting its original weights.` → Adapter chuyên biệt mà không sửa weight gốc.
**Liên kết tiếng Hàn:** `저랭크 어댑터`.

## 18. prompt interpolation /prɒmpt ɪnˌtɜːrpəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** blending prompt representations to transition between tasks, styles, or modality instructions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trộn representation prompt để chuyển task hoặc style.
**Grammar & collocations:** `prompt-interpolation path` — path; `blend two task vectors` — trộn.
**Examples:** `Prompt interpolation moved the assistant from captioning toward visual question answering.` → Interpolation chuyển task dần.
**Liên kết tiếng Hàn:** `프롬프트 보간`.

## 19. modality-specific encoder /moʊˈdæləti spəˈsɪfɪk enˈkoʊdər/
**Part of speech:** noun
**Core meaning (English):** an encoder designed for the structure and noise characteristics of one input modality.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** encoder riêng cho cấu trúc và noise của một modality.
**Grammar & collocations:** `modality-specific-encoder output` — output; `process a spectrogram` — xử lý.
**Examples:** `The modality-specific encoder converted the waveform before cross-modal fusion.` → Encoder đổi waveform trước fusion.
**Liên kết tiếng Hàn:** `모달리티 전용 인코더`.

## 20. shared latent space /ʃerd ˈleɪtənt speɪs/
**Part of speech:** noun
**Core meaning (English):** a common hidden representation in which different modalities can be compared or combined.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hidden space chung để so sánh và gộp modality.
**Grammar & collocations:** `shared-latent-space projection` — projection; `map modalities together` — ánh xạ.
**Examples:** `The shared latent space placed a musical phrase near its corresponding visual gesture.` → Space đặt phrase gần gesture đúng.
**Liên kết tiếng Hàn:** `공유 잠재 공간`.

## Review in context

**Cross-modal alignment** reduces a **modality gap** through **contrastive alignment** and an **image-text embedding**. **Late fusion**, **early fusion**, and **co-attention** combine signals, while **modality dropout** prepares for a **missing modality**. **Multimodal grounding** supports **cross-modal retrieval**, a **vision-language encoder**, and **audio-visual correspondence**. **Multimodal instruction tuning** and **preference alignment** improve behavior; **parameter-efficient adaptation**, a **low-rank adapter**, and **prompt interpolation** specialize a **modality-specific encoder** inside a **shared latent space**.

**Bản dịch tiếng Việt:** **Cross-modal alignment** giảm **modality gap** qua **contrastive alignment** và **image-text embedding**. **Late fusion**, **early fusion** và **co-attention** gộp tín hiệu, còn **modality dropout** chuẩn bị cho **missing modality**. **Multimodal grounding** hỗ trợ **cross-modal retrieval**, **vision-language encoder** và **audio-visual correspondence**. **Multimodal instruction tuning** và **preference alignment** cải thiện behavior; **parameter-efficient adaptation**, **low-rank adapter** và **prompt interpolation** chuyên biệt hóa **modality-specific encoder** trong **shared latent space**.
