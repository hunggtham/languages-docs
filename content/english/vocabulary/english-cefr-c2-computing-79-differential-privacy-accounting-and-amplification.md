# C2 Vocabulary — Differential-privacy accounting and amplification

This lesson follows privacy accounting from per-step loss and mechanism calibration through subsampling, shuffling, composition, and utility trade-offs.

Flow: **moments accountant → Renyi differential privacy → privacy amplification by subsampling → shuffle model → local randomizer → gradient clipping → zero-concentrated differential privacy → privacy blanket → amplification by shuffling → privacy profile → privacy loss distribution → hypothesis testing divergence → Gaussian mechanism calibration → Poisson subsampling → privacy amplification theorem → group privacy → privacy amplification factor → f-divergence accountant → privacy loss bound → adaptive composition**.

## 1. moments accountant /ˈmoʊmənts əˈkaʊntənt/
**Part of speech:** noun
**Core meaning (English):** an accounting method that tracks moments of privacy loss to obtain a tighter bound after many randomized steps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp theo dõi moment của privacy loss để bound chặt hơn qua nhiều bước.
**Grammar & collocations:** `moments-accountant bound` — bound; `accumulate privacy moments` — cộng dồn.
**Examples:** `The moments accountant supported thousands of noisy gradient updates without spending the budget linearly.` → Accountant theo dõi hàng nghìn update.
**Liên kết tiếng Hàn:** `모멘트 회계사`.

## 2. Renyi differential privacy /ˈreɪni ˌdɪfəˈrenʃəl ˈpraɪvəsi/
**Part of speech:** noun
**Core meaning (English):** a privacy definition parameterized by Renyi divergence, useful for composing randomized mechanisms.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** định nghĩa privacy dùng Renyi divergence để compose mechanism.
**Grammar & collocations:** `Renyi-differential-privacy order` — order; `convert an RDP guarantee` — chuyển đổi.
**Examples:** `Renyi differential privacy made the accountant's composition calculation numerically stable.` → RDP giúp tính composition ổn định.
**Liên kết tiếng Hàn:** `Rényi 차분 프라이버시`.

## 3. privacy amplification by subsampling /ˈpraɪvəsi ˌæmplɪfɪˈkeɪʃən baɪ ˈsʌbˌsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** the reduction in effective privacy loss obtained when a mechanism observes only a random sample of records.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** privacy loss giảm vì mechanism chỉ thấy mẫu record ngẫu nhiên.
**Grammar & collocations:** `privacy-amplification-by-subsampling bound` — bound; `sample a minibatch` — lấy mẫu.
**Examples:** `Privacy amplification by subsampling lowered the per-step cost of private training.` → Subsampling giảm cost mỗi bước.
**Liên kết tiếng Hàn:** `서브샘플링에 의한 프라이버시 증폭`.

## 4. shuffle model /ˈʃʌfəl ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** a privacy model in which an anonymizing shuffler hides the link between users and locally randomized reports.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** shuffler ẩn liên kết giữa user và report đã randomize.
**Grammar & collocations:** `shuffle-model guarantee` — guarantee; `permute local reports` — xáo trộn.
**Examples:** `The shuffle model improved central privacy without requiring the server to see raw reports.` → Model tăng privacy mà server không thấy raw.
**Liên kết tiếng Hàn:** `셔플 모델`.

## 5. local randomizer /ˈloʊkəl ˈrændəmaɪzər/
**Part of speech:** noun
**Core meaning (English):** a client-side mechanism that randomizes a user's value before it leaves the user's device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mechanism tại client randomize value trước khi rời thiết bị.
**Grammar & collocations:** `local-randomizer response` — response; `randomize a categorical report` — randomize.
**Examples:** `The local randomizer protected the answer before the analytics service received it.` → Randomizer bảo vệ answer trước khi gửi.
**Liên kết tiếng Hàn:** `로컬 무작위화기`.

## 6. gradient clipping /ˈɡreɪdiənt ˈklɪpɪŋ/
**Part of speech:** noun
**Core meaning (English):** limiting the norm of a training gradient before noise is added to control sensitivity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn norm gradient trước khi thêm noise để kiểm sensitivity.
**Grammar & collocations:** `gradient-clipping threshold` — threshold; `clip a per-example gradient` — cắt.
**Examples:** `Gradient clipping bounded each record's influence on the private update.` → Clipping chặn ảnh hưởng mỗi record.
**Liên kết tiếng Hàn:** `그래디언트 클리핑`.

## 7. zero-concentrated differential privacy /ˈzɪəroʊ ˈkɒnsəntreɪtɪd ˌdɪfəˈrenʃəl ˈpraɪvəsi/
**Part of speech:** noun
**Core meaning (English):** a privacy definition that represents loss with a concentrated tail bound and composes cleanly under repeated use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** định nghĩa biểu diễn loss bằng tail bound tập trung để compose sạch.
**Grammar & collocations:** `zero-concentrated-differential-privacy parameter` — parameter; `convert a zCDP guarantee` — chuyển.
**Examples:** `Zero-concentrated differential privacy simplified the conversion to an approximate epsilon guarantee.` → zCDP đơn giản hóa chuyển đổi sang epsilon.
**Liên kết tiếng Hàn:** `제로 집중 차분 프라이버시`.

## 8. privacy blanket /ˈpraɪvəsi ˈblæŋkɪt/
**Part of speech:** noun
**Core meaning (English):** the portion of a shuffled report distribution that is independent of the user's original value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần phân phối report không phụ thuộc value user sau shuffling.
**Grammar & collocations:** `privacy-blanket mass` — mass; `bound an input-dependent fraction` — chặn.
**Examples:** `A larger privacy blanket made individual reports harder to associate with their senders.` → Blanket lớn khó gắn report với sender.
**Liên kết tiếng Hàn:** `프라이버시 블랭킷`.

## 9. amplification by shuffling /ˌæmplɪfɪˈkeɪʃən baɪ ˈʃʌflɪŋ/
**Part of speech:** noun
**Core meaning (English):** the privacy improvement that arises when locally randomized messages are randomly reordered before analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** privacy tăng khi message local randomize được xáo trộn trước phân tích.
**Grammar & collocations:** `amplification-by-shuffling theorem` — theorem; `erase report order` — xóa thứ tự.
**Examples:** `Amplification by shuffling gave the analyst a stronger central guarantee than local randomization alone.` → Shuffling cho guarantee trung tâm mạnh hơn.
**Liên kết tiếng Hàn:** `셔플링에 의한 증폭`.

## 10. privacy profile /ˈpraɪvəsi ˈproʊfaɪl/
**Part of speech:** noun
**Core meaning (English):** a function describing the best privacy guarantee available across a range of loss parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm mô tả guarantee tốt nhất theo nhiều parameter loss.
**Grammar & collocations:** `privacy-profile comparison` — comparison; `plot a trade-off curve` — vẽ.
**Examples:** `The privacy profile showed where a tighter epsilon would sharply reduce utility.` → Profile cho thấy epsilon chặt làm utility giảm.
**Liên kết tiếng Hàn:** `프라이버시 프로파일`.

## 11. privacy loss distribution /ˈpraɪvəsi lɒs ˌdɪstrɪˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** the probability distribution of log-likelihood privacy loss under neighboring datasets.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân phối xác suất của log-likelihood loss giữa dataset lân cận.
**Grammar & collocations:** `privacy-loss-distribution tail` — tail; `convolve independent losses` — tích chập.
**Examples:** `The privacy loss distribution exposed a rare but severe tail event.` → Distribution lộ event tail hiếm nhưng nặng.
**Liên kết tiếng Hàn:** `프라이버시 손실 분포`.

## 12. hypothesis testing divergence /haɪˈpɒθəsɪs ˈtestɪŋ daɪˈvɜːrdʒəns/
**Part of speech:** noun
**Core meaning (English):** a divergence defined by the strongest test for distinguishing two neighboring data distributions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** divergence dựa trên test mạnh nhất để phân biệt hai phân phối.
**Grammar & collocations:** `hypothesis-testing-divergence bound` — bound; `distinguish neighboring datasets` — phân biệt.
**Examples:** `The hypothesis testing divergence captured the guarantee more tightly than a single epsilon value.` → Divergence chặt hơn epsilon đơn.
**Liên kết tiếng Hàn:** `가설 검정 발산`.

## 13. Gaussian mechanism calibration /ˈɡaʊsiən ˈmekənɪzəm ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** choosing Gaussian noise scale from sensitivity, target privacy, and failure probability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn scale Gaussian theo sensitivity, privacy và xác suất fail.
**Grammar & collocations:** `Gaussian-mechanism-calibration table` — table; `tune a noise multiplier` — chỉnh.
**Examples:** `Gaussian mechanism calibration increased the noise multiplier after the sensitivity audit.` → Calibration tăng noise sau audit sensitivity.
**Liên kết tiếng Hàn:** `가우시안 메커니즘 보정`.

## 14. Poisson subsampling /ˈpwɑːsɒn ˈsʌbˌsæmplɪŋ/
**Part of speech:** noun
**Core meaning (English):** sampling each record independently with a fixed inclusion probability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lấy từng record độc lập theo xác suất include cố định.
**Grammar & collocations:** `Poisson-subsampling rate` — rate; `include a record independently` — đưa vào.
**Examples:** `Poisson subsampling matched the accounting theorem's independence assumptions.` → Subsampling khớp giả định độc lập.
**Liên kết tiếng Hàn:** `포아송 서브샘플링`.

## 15. privacy amplification theorem /ˈpraɪvəsi ˌæmplɪfɪˈkeɪʃən ˈθiːərəm/
**Part of speech:** noun
**Core meaning (English):** a formal result that bounds privacy loss after sampling, shuffling, or another privacy-improving transformation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** định lý bound loss sau sampling hoặc biến đổi tăng privacy.
**Grammar & collocations:** `privacy-amplification-theorem hypothesis` — hypothesis; `apply a sampling bound` — áp dụng.
**Examples:** `The privacy amplification theorem required the sampling rate to be recorded honestly.` → Theorem cần ghi rate đúng.
**Liên kết tiếng Hàn:** `프라이버시 증폭 정리`.

## 16. group privacy /ɡruːp ˈpraɪvəsi/
**Part of speech:** noun
**Core meaning (English):** the privacy guarantee for changes affecting several records rather than one individual record.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** guarantee khi thay đổi nhiều record cùng lúc.
**Grammar & collocations:** `group-privacy degradation` — degradation; `scale a guarantee by group size` — tỷ lệ.
**Examples:** `Group privacy weakened as the number of changed records increased.` → Privacy nhóm yếu khi số record tăng.
**Liên kết tiếng Hàn:** `그룹 프라이버시`.

## 17. privacy amplification factor /ˈpraɪvəsi ˌæmplɪfɪˈkeɪʃən ˈfæktər/
**Part of speech:** noun
**Core meaning (English):** a quantity summarizing how much a sampling or shuffling step reduces effective privacy loss.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đại lượng tóm tắt mức sampling/shuffling giảm loss.
**Grammar & collocations:** `privacy-amplification-factor estimate` — estimate; `quantify a reduction` — định lượng.
**Examples:** `The privacy amplification factor improved when the sampling fraction became smaller.` → Factor tăng khi fraction nhỏ hơn.
**Liên kết tiếng Hàn:** `프라이버시 증폭 계수`.

## 18. f-divergence accountant /ˈef daɪˈvɜːrdʒəns əˈkaʊntənt/
**Part of speech:** noun
**Core meaning (English):** an accountant that represents privacy loss with a family of f-divergences rather than one fixed divergence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** accountant dùng họ f-divergence thay vì một divergence cố định.
**Grammar & collocations:** `f-divergence-accountant conversion` — conversion; `optimize a divergence order` — tối ưu.
**Examples:** `The f-divergence accountant selected the representation that gave the tightest final bound.` → Accountant chọn representation chặt nhất.
**Liên kết tiếng Hàn:** `f-발산 회계사`.

## 19. privacy loss bound /ˈpraɪvəsi lɒs baʊnd/
**Part of speech:** noun
**Core meaning (English):** a proven limit on how much an output distribution can favor one neighboring dataset over another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn đã chứng minh về mức output ưu tiên dataset này hơn dataset kia.
**Grammar & collocations:** `privacy-loss-bound certificate` — certificate; `tighten a tail bound` — siết.
**Examples:** `The privacy loss bound was reported together with the failure probability.` → Bound được báo cùng xác suất fail.
**Liên kết tiếng Hàn:** `프라이버시 손실 경계`.

## 20. adaptive composition /əˈdæptɪv ˌkɒmpəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** composing privacy guarantees when later mechanisms may depend on earlier released outputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** compose guarantee dù mechanism sau phụ thuộc output trước.
**Grammar & collocations:** `adaptive-composition theorem` — theorem; `condition on released output` — điều kiện.
**Examples:** `Adaptive composition covered an analyst who chose the next query after seeing the previous result.` → Composition bao phủ query thích ứng.
**Liên kết tiếng Hàn:** `적응형 조합`.

## Review in context

A **moments accountant** can express composition through **Renyi differential privacy** and **privacy amplification by subsampling**. In a **shuffle model**, a **local randomizer**, **gradient clipping**, and **zero-concentrated differential privacy** control each step; a **privacy blanket** explains **amplification by shuffling**. A **privacy profile** summarizes the **privacy loss distribution**, while **hypothesis testing divergence** and **Gaussian mechanism calibration** sharpen the bound. **Poisson subsampling** supports a **privacy amplification theorem**, but **group privacy** still scales with changed records. A **privacy amplification factor**, an **f-divergence accountant**, a **privacy loss bound**, and **adaptive composition** help compare utility and risk.

**Bản dịch tiếng Việt:** **Moments accountant** biểu diễn composition qua **RDP** và **khuếch đại privacy bằng subsampling**. Trong **shuffle model**, **local randomizer**, **gradient clipping** và **zCDP** kiểm soát từng bước; **privacy blanket** giải thích **khuếch đại bằng shuffling**. **Privacy profile** tóm tắt **phân phối privacy loss**, còn **hypothesis-testing divergence** và **calibration Gaussian mechanism** làm bound chặt hơn. **Poisson subsampling** hỗ trợ **định lý khuếch đại privacy**, nhưng **group privacy** vẫn tăng theo số record thay đổi. **Hệ số khuếch đại privacy**, **f-divergence accountant**, **privacy loss bound** và **adaptive composition** giúp so sánh utility với rủi ro.
