# C2 Vocabulary — Differential-privacy accounting and utility

This lesson follows a privacy-preserving release from sensitivity analysis through composition, attacks, utility measurement, and stopping rules.

Flow: **privacy budget accounting → epsilon-delta tradeoff → privacy loss random variable → composition theorem → subsampling amplification → gradient clipping bound → noise multiplier → membership inference risk → reconstruction attack → privacy amplification → utility frontier → private aggregation → secure aggregation threshold → synthetic data fidelity → privacy-preserving join → query sensitivity → release mechanism → privacy odometer → privacy filter → privacy budget exhaustion**.

## 1. privacy budget accounting /ˈpraɪvəsi ˈbʌdʒɪt əˈkaʊntɪŋ/
**Part of speech:** noun
**Core meaning (English):** tracking cumulative privacy loss across a sequence of data releases or algorithmic operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** theo dõi privacy loss tích lũy qua nhiều release.
**Grammar & collocations:** `privacy-budget-accounting ledger` — ledger; `charge a release` — tính.
**Examples:** `Privacy budget accounting stopped the dashboard before repeated queries exceeded the approved loss.` → Accounting dừng dashboard khi loss vượt mức.
**Liên kết tiếng Hàn:** `프라이버시 예산 회계`.

## 2. epsilon-delta tradeoff /ˈɛpsəlɑn ˈdɛltə ˈtreɪdˌɔf/
**Part of speech:** noun
**Core meaning (English):** the design tradeoff between the main privacy-loss parameter and the probability of a larger exceptional failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đánh đổi giữa epsilon và xác suất delta ngoại lệ.
**Grammar & collocations:** `epsilon-delta-tradeoff curve` — curve; `choose a privacy guarantee` — chọn.
**Examples:** `The epsilon-delta tradeoff favored a smaller failure probability even though utility declined slightly.` → Tradeoff ưu tiên xác suất fail nhỏ.
**Liên kết tiếng Hàn:** `엡실론-델타 트레이드오프`.

## 3. privacy loss random variable /ˈpraɪvəsi lɔs ˈrændəm ˈvɛriəbəl/
**Part of speech:** noun
**Core meaning (English):** a random quantity describing how much a particular output favors one neighboring dataset over another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến ngẫu nhiên đo mức output phân biệt hai dataset lân cận.
**Grammar & collocations:** `privacy-loss-random-variable tail` — tail; `bound an unlikely outcome` — giới hạn.
**Examples:** `The privacy loss random variable had a heavy tail under the rare-event query.` → Biến privacy loss có tail nặng.
**Liên kết tiếng Hàn:** `프라이버시 손실 확률변수`.

## 4. composition theorem /ˌkɑmpəˈzɪʃən ˈθiərəm/
**Part of speech:** noun
**Core meaning (English):** a mathematical result that bounds total privacy loss when multiple private mechanisms are combined.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** định lý cộng dồn privacy loss qua nhiều mechanism.
**Grammar & collocations:** `composition-theorem bound` — bound; `compose repeated releases` — cộng.
**Examples:** `The composition theorem showed that ten low-loss reports still consumed a material budget.` → Theorem cho thấy mười report vẫn tốn budget.
**Liên kết tiếng Hàn:** `구성 정리`.

## 5. subsampling amplification /ˈsʌbˌsæmplɪŋ ˌæmpləfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** privacy improvement obtained because each computation sees only a random subset of the population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lấy mẫu con làm giảm khả năng một người ảnh hưởng output.
**Grammar & collocations:** `subsampling-amplification factor` — factor; `account for participation probability` — tính.
**Examples:** `Subsampling amplification reduced effective privacy loss in the minibatch training run.` → Amplification giảm loss hiệu dụng.
**Liên kết tiếng Hàn:** `서브샘플링 증폭`.

## 6. gradient clipping bound /ˈɡreɪdiənt ˈklɪpɪŋ baʊnd/
**Part of speech:** noun
**Core meaning (English):** a limit on an individual gradient's norm used to bound sensitivity in private optimization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn norm gradient để giới hạn sensitivity.
**Grammar & collocations:** `gradient-clipping-bound choice` — choice; `clip an individual update` — cắt.
**Examples:** `The gradient clipping bound was lowered after rare records dominated the update.` → Bound hạ khi record hiếm chi phối update.
**Liên kết tiếng Hàn:** `그래디언트 클리핑 경계`.

## 7. noise multiplier /nɔɪz ˈmʌltəˌplaɪər/
**Part of speech:** noun
**Core meaning (English):** a scale factor determining how much random noise is added relative to a sensitivity bound.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ số quyết định lượng noise so với sensitivity.
**Grammar & collocations:** `noise-multiplier schedule` — schedule; `increase perturbation strength` — tăng.
**Examples:** `The noise multiplier rose when the training run used more composition steps.` → Multiplier tăng khi nhiều bước hơn.
**Liên kết tiếng Hàn:** `노이즈 배율`.

## 8. membership inference risk /ˈmɛmbərˌʃɪp ɪnˈfɝəns rɪsk/
**Part of speech:** noun
**Core meaning (English):** the risk that an adversary can determine whether a person's record was included in a training dataset or release.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kẻ xấu đoán một người có trong dataset hay không.
**Grammar & collocations:** `membership-inference-risk estimate` — estimate; `test attack advantage` — kiểm tra.
**Examples:** `Membership inference risk increased when the model overfit a small clinical cohort.` → Risk tăng khi model overfit cohort nhỏ.
**Liên kết tiếng Hàn:** `멤버십 추론 위험`.

## 9. reconstruction attack /ˌriːkənˈstrʌkʃən əˈtæk/
**Part of speech:** noun
**Core meaning (English):** an attempt to recover sensitive individual data or training examples from released outputs or model behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tấn công dựng lại dữ liệu nhạy cảm từ output.
**Grammar & collocations:** `reconstruction-attack simulation` — simulation; `recover a representative record` — dựng.
**Examples:** `The reconstruction attack recovered approximate attributes despite a low membership score.` → Attack dựng lại thuộc tính gần đúng.
**Liên kết tiếng Hàn:** `재구성 공격`.

## 10. privacy amplification /ˈpraɪvəsi ˌæmpləfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** any mechanism by which a data-collection or algorithmic design provides stronger privacy than its raw perturbation alone.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết kế làm privacy mạnh hơn noise đơn thuần.
**Grammar & collocations:** `privacy-amplification argument` — argument; `combine sampling and shuffling` — kết hợp.
**Examples:** `Privacy amplification came from both random sampling and secure shuffling of records.` → Amplification đến từ sampling và shuffle.
**Liên kết tiếng Hàn:** `프라이버시 증폭`.

## 11. utility frontier /juːˈtɪləti frʌnˈtɪr/
**Part of speech:** noun
**Core meaning (English):** the boundary showing the best achievable analytic usefulness at different privacy-loss levels.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biên đánh đổi privacy và utility tốt nhất.
**Grammar & collocations:** `utility-frontier curve` — curve; `compare privacy settings` — so sánh.
**Examples:** `The utility frontier showed diminishing accuracy gains after the privacy budget doubled.` → Frontier cho thấy lợi ích accuracy giảm dần.
**Liên kết tiếng Hàn:** `효용 프론티어`.

## 12. private aggregation /ˈpraɪvət ˌæɡrəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** combining contributions so that a released aggregate does not reveal an individual contribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cộng dữ liệu mà không lộ đóng góp cá nhân.
**Grammar & collocations:** `private-aggregation protocol` — protocol; `release a noisy sum` — phát hành.
**Examples:** `Private aggregation reported regional statistics without exposing any clinic's count.` → Aggregation giữ kín count từng clinic.
**Liên kết tiếng Hàn:** `프라이빗 집계`.

## 13. secure aggregation threshold /sɪˈkjʊr ˌæɡrəˈɡeɪʃən ˈθrɛʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** the minimum number of participating contributors required before an aggregate can be reconstructed safely.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số người tối thiểu để aggregate đủ an toàn.
**Grammar & collocations:** `secure-aggregation-threshold rule` — rule; `withhold a sparse result` — giữ lại.
**Examples:** `The secure aggregation threshold suppressed a report covering only two departments.` → Threshold chặn report quá ít đơn vị.
**Liên kết tiếng Hàn:** `보안 집계 임계값`.

## 14. synthetic data fidelity /sɪnˈθɛtɪk ˈdeɪtə fəˈdɛləti/
**Part of speech:** noun
**Core meaning (English):** the degree to which generated data preserves useful distributions, relationships, and edge cases without reproducing private records.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dữ liệu giả giữ utility mà không copy record riêng tư.
**Grammar & collocations:** `synthetic-data-fidelity score` — score; `preserve rare correlations` — giữ.
**Examples:** `Synthetic data fidelity was high for common visits but poor for rare adverse events.` → Fidelity cao ở visit thường, kém ở event hiếm.
**Liên kết tiếng Hàn:** `합성 데이터 충실도`.

## 15. privacy-preserving join /ˈpraɪvəsi prɪˈzɝvɪŋ dʒɔɪn/
**Part of speech:** noun
**Core meaning (English):** combining records across datasets while limiting disclosure of the identifiers or membership relationships used for matching.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** join dataset mà không lộ identity/membership.
**Grammar & collocations:** `privacy-preserving-join protocol` — protocol; `match blinded identifiers` — đối chiếu.
**Examples:** `The privacy-preserving join linked outcomes to prescriptions without sharing raw patient identifiers.` → Join liên kết outcome và prescription mà không lộ ID.
**Liên kết tiếng Hàn:** `프라이버시 보존 조인`.

## 16. query sensitivity /ˈkwɪri ˌsɛnsəˈtɪvəti/
**Part of speech:** noun
**Core meaning (English):** the maximum change in a query's output when one person's record is added, removed, or changed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** output query đổi tối đa bao nhiêu khi đổi một record.
**Grammar & collocations:** `query-sensitivity bound` — bound; `calibrate noise to sensitivity` — hiệu chỉnh.
**Examples:** `Query sensitivity was reduced by clipping each household's contribution.` → Sensitivity giảm nhờ clip đóng góp.
**Liên kết tiếng Hàn:** `쿼리 민감도`.

## 17. release mechanism /rɪˈliːs ˈmɛkəˌnɪzəm/
**Part of speech:** noun
**Core meaning (English):** the algorithm that transforms sensitive data or statistics into a privacy-protected output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuật toán biến data nhạy thành output bảo vệ privacy.
**Grammar & collocations:** `release-mechanism parameter` — parameter; `perturb a count` — nhiễu.
**Examples:** `The release mechanism added calibrated noise only after the aggregate had been clipped.` → Mechanism thêm noise sau khi clip.
**Liên kết tiếng Hàn:** `공개 메커니즘`.

## 18. privacy odometer /ˈpraɪvəsi oʊˈdɑmətər/
**Part of speech:** noun
**Core meaning (English):** a running monitor of privacy loss accumulated by an adaptive sequence of mechanisms.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồng hồ đo privacy loss tích lũy.
**Grammar & collocations:** `privacy-odometer reading` — reading; `monitor adaptive queries` — theo dõi.
**Examples:** `The privacy odometer warned the analyst before the next exploratory query was issued.` → Odometer cảnh báo trước query tiếp.
**Liên kết tiếng Hàn:** `프라이버시 주행기록계`.

## 19. privacy filter /ˈpraɪvəsi ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a rule that halts or changes an adaptive computation once a specified privacy-loss condition is reached.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule dừng/đổi computation khi privacy loss tới ngưỡng.
**Grammar & collocations:** `privacy-filter trigger` — trigger; `stop an adaptive release` — dừng.
**Examples:** `The privacy filter halted model tuning when the approved loss bound was reached.` → Filter dừng tuning khi bound đạt.
**Liên kết tiếng Hàn:** `프라이버시 필터`.

## 20. privacy budget exhaustion /ˈpraɪvəsi ˈbʌdʒɪt ɪɡˈzɔstʃən/
**Part of speech:** noun
**Core meaning (English):** the condition in which planned releases have consumed the privacy loss allowance and further release is not permitted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đã dùng hết privacy budget, không được release thêm.
**Grammar & collocations:** `privacy-budget-exhaustion alarm` — alarm; `freeze further queries` — đóng băng.
**Examples:** `Privacy budget exhaustion froze the public dashboard until the reporting period reset.` → Hết budget làm dashboard đóng tới kỳ reset.
**Liên kết tiếng Hàn:** `프라이버시 예산 소진`.

## Review in context

**Privacy budget accounting** uses an **epsilon-delta tradeoff**, **privacy loss random variable**, and **composition theorem**. **Subsampling amplification**, a **gradient clipping bound**, and a **noise multiplier** shape **membership inference risk** and **reconstruction attack** exposure. **Privacy amplification**, a **utility frontier**, **private aggregation**, and a **secure aggregation threshold** protect releases. **Synthetic data fidelity**, a **privacy-preserving join**, **query sensitivity**, and a **release mechanism** support useful analysis. A **privacy odometer**, **privacy filter**, and **privacy budget exhaustion** define stopping behavior.

**Bản dịch tiếng Việt:** **Privacy budget accounting** dùng **epsilon-delta tradeoff**, **privacy loss random variable** và **composition theorem**. **Subsampling amplification**, **gradient clipping bound** và **noise multiplier** định hình nguy cơ **membership inference risk** và **reconstruction attack**. **Privacy amplification**, **utility frontier**, **private aggregation** và **secure aggregation threshold** bảo vệ release. **Synthetic data fidelity**, **privacy-preserving join**, **query sensitivity** và **release mechanism** hỗ trợ phân tích hữu ích. **Privacy odometer**, **privacy filter** và **privacy budget exhaustion** định nghĩa cách dừng.
