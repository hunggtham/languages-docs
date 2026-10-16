# C2 Vocabulary — Privacy-preserving analytics

This lesson follows a statistical query from privacy modeling and sensitivity through noise, anonymization, release, and utility assessment.

Flow: **epsilon allocation → adjacency relation → sensitivity bound → clipping threshold → noise mechanism → randomized response → aggregation threshold → k-anonymity → l-diversity → t-closeness → synthetic cohort → query release → federated statistic → disclosure risk → utility loss → sampling amplification → privacy loss → linkage attack → attribute disclosure → differential release**.

## 1. epsilon allocation /ˈepsɪlɒn ˌæləˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** dividing a total differential-privacy budget among several analyses or releases.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia tổng privacy budget cho nhiều phân tích hoặc lần release.
**Grammar & collocations:** `epsilon-allocation plan` — kế hoạch; `reserve budget for a critical query` — dành.
**Examples:** `Epsilon allocation reserved most of the budget for the annual health report.` → Allocation dành phần lớn budget cho report y tế.
**Liên kết tiếng Hàn:** `엡실론 할당`.

## 2. adjacency relation /əˈdʒeɪsənsi rɪˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** the formal definition of two datasets that differ by one person's record or one bounded contribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** định nghĩa formal về hai dataset chỉ khác một record hoặc contribution giới hạn.
**Grammar & collocations:** `adjacency-relation assumption` — giả định; `compare neighboring datasets` — so sánh.
**Examples:** `The adjacency relation treated one patient's complete history as a single contribution.` → Relation coi toàn bộ lịch sử một bệnh nhân là một contribution.
**Liên kết tiếng Hàn:** `인접 관계`.

## 3. sensitivity bound /ˌsensəˈtɪvəti baʊnd/
**Part of speech:** noun
**Core meaning (English):** a limit on how much a query's result can change when one allowed contribution changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn mức result query thay đổi khi một contribution đổi.
**Grammar & collocations:** `sensitivity-bound proof` — chứng minh; `bound a count difference` — giới hạn.
**Examples:** `The sensitivity bound was two because one account could affect at most two reported events.` → Bound là 2 vì một account ảnh hưởng tối đa hai event.
**Liên kết tiếng Hàn:** `민감도 한계`.

## 4. clipping threshold /ˈklɪpɪŋ ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** a limit that caps an individual's contribution before a private statistic is computed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngưỡng cắt contribution mỗi cá nhân trước khi tính statistic riêng tư.
**Grammar & collocations:** `clipping-threshold choice` — lựa chọn; `cap an extreme contribution` — giới hạn.
**Examples:** `The clipping threshold prevented one prolific user from dominating the aggregate count.` → Threshold ngăn user đóng góp quá lớn.
**Liên kết tiếng Hàn:** `클리핑 임계값`.

## 5. noise mechanism /nɔɪz ˈmekənɪzəm/
**Part of speech:** noun
**Core meaning (English):** a mathematical procedure that adds calibrated randomness to a result before release.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thủ tục toán thêm randomness đã hiệu chỉnh trước khi release result.
**Grammar & collocations:** `noise-mechanism parameter` — tham số; `calibrate a random perturbation` — hiệu chỉnh.
**Examples:** `The noise mechanism added a small, bounded variation to each published count.` → Mechanism thêm biến thiên nhỏ có giới hạn.
**Liên kết tiếng Hàn:** `노이즈 메커니즘`.

## 6. randomized response /ˈrændəmaɪzd rɪˈspɒns/
**Part of speech:** noun
**Core meaning (English):** a survey technique in which a controlled random step hides an individual's direct answer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kỹ thuật khảo sát dùng bước random có kiểm soát để che câu trả lời trực tiếp.
**Grammar & collocations:** `randomized-response protocol` — protocol; `estimate a sensitive proportion` — ước tính.
**Examples:** `Randomized response let participants report a sensitive behavior without revealing their own answer.` → Kỹ thuật cho phép báo cáo mà không lộ câu trả lời.
**Liên kết tiếng Hàn:** `무작위 응답`.

## 7. aggregation threshold /ˌæɡrəˈɡeɪʃən ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** the minimum group size required before an aggregate result may be published.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kích thước nhóm tối thiểu trước khi được publish result tổng hợp.
**Grammar & collocations:** `aggregation-threshold check` — kiểm tra; `suppress a small cell` — ẩn.
**Examples:** `The aggregation threshold suppressed a regional count based on only four households.` → Threshold ẩn count vùng chỉ có bốn hộ.
**Liên kết tiếng Hàn:** `집계 임계값`.

## 8. k-anonymity /ˌkeɪ ˌænəˈnɪməti/
**Part of speech:** noun
**Core meaning (English):** a property requiring each released record to be indistinguishable from at least k records on selected quasi-identifiers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi record release phải khó phân biệt với ít nhất k record theo quasi-identifier.
**Grammar & collocations:** `k-anonymity guarantee` — bảo đảm; `generalize a birth year` — khái quát.
**Examples:** `K-anonymity replaced exact postal codes with broader areas before the table was shared.` → K-anonymity đổi mã bưu chính thành vùng rộng.
**Liên kết tiếng Hàn:** `k-익명성`.

## 9. l-diversity /ˌel daɪˈvɜːrsəti/
**Part of speech:** noun
**Core meaning (English):** a privacy property requiring each anonymity group to contain enough diversity in a sensitive attribute.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi nhóm anonymous phải có đủ đa dạng ở attribute nhạy cảm.
**Grammar & collocations:** `l-diversity test` — kiểm tra; `avoid a uniform sensitive value` — tránh.
**Examples:** `L-diversity prevented every record in one anonymous group from sharing the same diagnosis.` → L-diversity ngăn nhóm có cùng diagnosis.
**Liên kết tiếng Hàn:** `l-다양성`.

## 10. t-closeness /tiː ˈkloʊsnəs/
**Part of speech:** noun
**Core meaning (English):** a privacy property requiring a sensitive-value distribution inside a group to stay close to the overall distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân phối value nhạy cảm trong nhóm phải gần phân phối tổng thể.
**Grammar & collocations:** `t-closeness constraint` — ràng buộc; `compare distribution distance` — so sánh.
**Examples:** `T-closeness limited how different a small cohort's diagnosis distribution could be.` → T-closeness giới hạn khác biệt phân phối diagnosis.
**Liên kết tiếng Hàn:** `t-근접성`.

## 11. synthetic cohort /sɪnˈθetɪk ˈkoʊhɔːrt/
**Part of speech:** noun
**Core meaning (English):** a generated group of records designed to resemble real population patterns without copying individuals directly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm record sinh ra giống pattern dân số thật nhưng không copy cá nhân.
**Grammar & collocations:** `synthetic-cohort generator` — bộ sinh; `preserve marginal patterns` — giữ.
**Examples:** `The synthetic cohort supported testing without exposing the hospital's patient records.` → Cohort hỗ trợ test mà không lộ hồ sơ.
**Liên kết tiếng Hàn:** `합성 코호트`.

## 12. query release /ˈkwɪəri rɪˈliːs/
**Part of speech:** noun
**Core meaning (English):** the act and approved result of publishing an answer to a privacy-sensitive data query.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** việc và result đã duyệt khi publish câu trả lời query nhạy cảm.
**Grammar & collocations:** `query-release log` — log; `approve a statistical answer` — duyệt.
**Examples:** `Every query release recorded its requester, privacy cost, and transformed result.` → Mỗi release ghi requester, cost và result biến đổi.
**Liên kết tiếng Hàn:** `쿼리 공개`.

## 13. federated statistic /ˈfedəreɪtɪd stəˈtɪstɪk/
**Part of speech:** noun
**Core meaning (English):** a statistic computed from contributions held by multiple sites without centralizing their raw records.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** statistic tính từ nhiều site mà không gom record thô về trung tâm.
**Grammar & collocations:** `federated-statistic protocol` — protocol; `aggregate local summaries` — tổng hợp.
**Examples:** `The federated statistic combined hospital summaries while patient-level data stayed local.` → Statistic gộp summary nhưng data bệnh nhân ở local.
**Liên kết tiếng Hàn:** `연합 통계`.

## 14. disclosure risk /dɪˈskloʊʒər rɪsk/
**Part of speech:** noun
**Core meaning (English):** the likelihood that a released dataset reveals a person's identity or sensitive attribute.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng dataset release làm lộ identity hoặc attribute nhạy cảm.
**Grammar & collocations:** `disclosure-risk assessment` — đánh giá; `estimate re-identification likelihood` — ước tính.
**Examples:** `The disclosure risk increased when rare occupations were combined with exact ages.` → Risk tăng khi nghề hiếm đi với tuổi chính xác.
**Liên kết tiếng Hàn:** `공개 위험`.

## 15. utility loss /juːˈtɪləti lɒs/
**Part of speech:** noun
**Core meaning (English):** the reduction in analytical usefulness caused by suppression, generalization, noise, or other privacy protection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức giảm usefulness do ẩn, khái quát, noise hoặc bảo vệ privacy.
**Grammar & collocations:** `utility-loss estimate` — ước tính; `balance accuracy against privacy` — cân bằng.
**Examples:** `The team measured utility loss after rounding rare counts for privacy.` → Team đo mất utility sau làm tròn count hiếm.
**Liên kết tiếng Hàn:** `유용성 손실`.

## 16. sampling amplification /ˈsæmplɪŋ ˌæmplɪfɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the privacy improvement obtained because only a random subset of a population participates in a release.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** privacy tăng lên vì chỉ subset ngẫu nhiên của population tham gia release.
**Grammar & collocations:** `sampling-amplification bound` — bound; `account for participation probability` — tính.
**Examples:** `Sampling amplification reduced the effective privacy cost when each round used a small client subset.` → Amplification giảm cost khi mỗi round dùng ít client.
**Liên kết tiếng Hàn:** `샘플링 증폭`.

## 17. privacy loss /ˈpraɪvəsi lɒs/
**Part of speech:** noun
**Core meaning (English):** the quantified privacy cost consumed by an observation, query, or sequence of releases.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chi phí privacy định lượng bị tiêu hao bởi observation/query/release.
**Grammar & collocations:** `privacy-loss accounting` — hạch toán; `compose several releases` — kết hợp.
**Examples:** `The accountant stopped the report when its cumulative privacy loss exceeded the budget.` → Accountant dừng report khi loss vượt budget.
**Liên kết tiếng Hàn:** `프라이버시 손실`.

## 18. linkage attack /ˈlɪŋkɪdʒ əˈtæk/
**Part of speech:** noun
**Core meaning (English):** an attempt to identify records by joining a released dataset with another source of information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cố gắng nhận diện record bằng cách nối dataset release với nguồn khác.
**Grammar & collocations:** `linkage-attack model` — mô hình; `join quasi-identifiers` — nối.
**Examples:** `The linkage attack matched an anonymized table with a public voter register.` → Attack nối table anonymous với voter register.
**Liên kết tiếng Hàn:** `연결 공격`.

## 19. attribute disclosure /əˈtrɪbjuːt dɪˈskloʊʒər/
**Part of speech:** noun
**Core meaning (English):** learning a sensitive characteristic about a person even when their exact identity is not recovered.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biết attribute nhạy cảm của người dù chưa khôi phục identity chính xác.
**Grammar & collocations:** `attribute-disclosure risk` — rủi ro; `infer a diagnosis` — suy ra.
**Examples:** `Attribute disclosure revealed that everyone in a tiny group shared the same condition.` → Disclosure lộ mọi người trong nhóm nhỏ cùng bệnh.
**Liên kết tiếng Hàn:** `속성 공개`.

## 20. differential release /ˌdɪfəˈrenʃəl rɪˈliːs/
**Part of speech:** noun
**Core meaning (English):** a release mechanism that changes an answer according to a formal privacy guarantee rather than publishing the raw result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế release biến đổi answer theo guarantee privacy formal thay vì raw result.
**Grammar & collocations:** `differential-release mechanism` — cơ chế; `publish a protected estimate` — công bố.
**Examples:** `The differential release returned a protected estimate instead of the exact number of participants.` → Release trả estimate bảo vệ thay vì số exact.
**Liên kết tiếng Hàn:** `차등 공개`.

## Review in context

An **epsilon allocation** begins with an **adjacency relation** and a **sensitivity bound**; a **clipping threshold** limits contributions before a **noise mechanism** or **randomized response** protects them. An **aggregation threshold**, **k-anonymity**, **l-diversity**, and **t-closeness** reduce exposure, while a **synthetic cohort** supports testing. Each **query release** can yield a **federated statistic**, but analysts still assess **disclosure risk** and **utility loss**. **Sampling amplification** may reduce cost, while **privacy loss** accumulates. A **linkage attack** can cause **attribute disclosure**, so a **differential release** should publish only a protected result.

**Bản dịch tiếng Việt:** **Epsilon allocation** bắt đầu với **adjacency relation** và **sensitivity bound**; **clipping threshold** giới hạn contribution trước khi **noise mechanism** hoặc **randomized response** bảo vệ. **Aggregation threshold**, **k-anonymity**, **l-diversity** và **t-closeness** giảm lộ, còn **synthetic cohort** hỗ trợ test. Mỗi **query release** có thể tạo **federated statistic**, nhưng analyst vẫn đánh giá **disclosure risk** và **utility loss**. **Sampling amplification** có thể giảm cost, trong khi **privacy loss** tích lũy. **Linkage attack** có thể gây **attribute disclosure**, vì vậy **differential release** chỉ nên công bố result đã bảo vệ.
