# C2 Vocabulary — Privacy-preserving federated learning

This lesson follows collaborative model training from local data protection through secure aggregation, privacy attacks, and revocation controls.

Flow: **privacy-preserving training → secure aggregation → privacy budget → clipping norm → noisy gradient → membership inference → model inversion → federated averaging → cross-silo federation → cross-device federation → homomorphic evaluation → secret sharing → private set intersection → trusted aggregator → gradient leakage → canary record → privacy accountant → secure multiparty computation → query auditing → consent revocation**.

## 1. privacy-preserving training /ˈpraɪvəsi prɪˈzɝvɪŋ ˈtreɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** model training designed to limit what can be learned about individual records from data, updates, or outputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** train model nhưng thiết kế để giảm khả năng suy ra record cá nhân.
**Grammar & collocations:** `privacy-preserving-training protocol` — protocol; `deploy privacy-preserving training` — triển khai.
**Examples:** `Privacy-preserving training let hospitals collaborate without pooling their raw patient files.` → Training bảo vệ riêng tư cho phép bệnh viện hợp tác mà không gom file bệnh nhân thô.
**Liên kết tiếng Hàn:** `프라이버시 보존 학습`.

## 2. secure aggregation /sɪˈkjʊr ˌæɡrəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** combining participant updates so a coordinator sees only an aggregate and not each individual contribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** server chỉ thấy tổng update, không nhìn riêng update của từng participant.
**Grammar & collocations:** `secure-aggregation protocol` — protocol; `mask an update` — che update.
**Examples:** `Secure aggregation hid each clinic's gradient while still producing a global update.` → Secure aggregation che gradient từng clinic nhưng vẫn tạo global update.
**Liên kết tiếng Hàn:** `보안 집계`.

## 3. privacy budget /ˈpraɪvəsi ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a bound on the total privacy loss that a sequence of analyses or training steps may consume.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách privacy có hạn; mỗi query hoặc step tiêu một phần.
**Grammar & collocations:** `privacy-budget allocation` — phân bổ; `spend the budget` — tiêu ngân sách.
**Examples:** `The analyst reserved most of the privacy budget for the final release report.` → Analyst giữ phần lớn privacy budget cho report phát hành cuối.
**Liên kết tiếng Hàn:** `프라이버시 예산`.

## 4. clipping norm /ˈklɪpɪŋ nɔrm/
**Part of speech:** noun
**Core meaning (English):** a threshold used to cap the magnitude of an individual update before aggregation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngưỡng cắt độ lớn gradient để một record không chi phối kết quả.
**Grammar & collocations:** `clipping-norm threshold` — ngưỡng; `clip an update` — cắt update.
**Examples:** `The clipping norm limited the influence of an unusually large local gradient.` → Clipping norm giới hạn ảnh hưởng của gradient local quá lớn.
**Liên kết tiếng Hàn:** `클리핑 노름`.

## 5. noisy gradient /ˈnɔɪzi ˈɡreɪdiənt/
**Part of speech:** noun
**Core meaning (English):** a gradient deliberately perturbed with random noise to reduce information about individual training records.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gradient được thêm noise có kiểm soát để khó truy ngược data.
**Grammar & collocations:** `noisy-gradient mechanism` — cơ chế; `inject noise` — thêm noise.
**Examples:** `A noisy gradient made the update less revealing while preserving useful learning signal.` → Noisy gradient làm update ít tiết lộ hơn mà vẫn giữ signal học hữu ích.
**Liên kết tiếng Hàn:** `잡음 그래디언트`.

## 6. membership inference /ˈmɛmbərˌʃɪp ˈɪnfərəns/
**Part of speech:** noun
**Core meaning (English):** an attack that predicts whether a particular record was included in a model's training data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kẻ tấn công đoán một record có từng nằm trong data train hay không.
**Grammar & collocations:** `membership-inference attack` — attack; `measure membership risk` — đo risk.
**Examples:** `Regularization reduced the model's membership inference signal on rare examples.` → Regularization giảm signal membership inference trên example hiếm.
**Liên kết tiếng Hàn:** `멤버십 추론`.

## 7. model inversion /ˈmɑdəl ɪnˈvɝʒən/
**Part of speech:** noun
**Core meaning (English):** an attack that reconstructs sensitive input characteristics from model outputs or access to the model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng output/model để suy ngược đặc điểm nhạy cảm của input.
**Grammar & collocations:** `model-inversion risk` — risk; `invert a prediction` — suy ngược.
**Examples:** `The audit tested whether confidence scores enabled model inversion of a facial feature.` → Audit kiểm tra confidence score có giúp suy ngược đặc điểm khuôn mặt không.
**Liên kết tiếng Hàn:** `모델 역산`.

## 8. federated averaging /ˈfɛdəˌreɪtɪd ˈævərɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** combining locally trained model updates into a new global model, usually weighted by local data volume.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi client train local rồi server lấy trung bình có trọng số.
**Grammar & collocations:** `federated-averaging round` — round; `aggregate local models` — aggregate.
**Examples:** `Federated averaging produced a shared classifier without moving the raw images.` → Averaging tạo classifier chung mà không chuyển ảnh thô.
**Liên kết tiếng Hàn:** `연합 평균화`.

## 9. cross-silo federation /ˌkrɔs ˈsaɪloʊ ˌfɛdəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** federated learning among a small number of known organizations with relatively stable infrastructure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vài tổ chức quen biết, như bệnh viện, cùng train mà giữ data tại chỗ.
**Grammar & collocations:** `cross-silo-federation round` — round; `coordinate participating silos` — điều phối.
**Examples:** `Cross-silo federation let three laboratories train one assay-quality model.` → Federation cross-silo cho ba phòng lab train một model chất lượng assay.
**Liên kết tiếng Hàn:** `사이트 간 연합`.

## 10. cross-device federation /ˌkrɔs dɪˈvaɪs ˌfɛdəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** federated learning across many intermittently connected personal or edge devices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rất nhiều điện thoại/edge device tham gia không ổn định, mỗi máy giữ data riêng.
**Grammar & collocations:** `cross-device-federation client` — client; `sample eligible devices` — chọn mẫu.
**Examples:** `Cross-device federation selected phones only when they were charging and on an approved network.` → Federation cross-device chỉ chọn phone đang sạc và ở network được duyệt.
**Liên kết tiếng Hàn:** `기기 간 연합`.

## 11. homomorphic evaluation /ˌhoʊmoʊˈmɔrfɪk ɪˌvæljuˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** computing on encrypted values so the result can be decrypted without exposing the underlying inputs during computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính trên ciphertext, không cần mở plaintext trong lúc compute.
**Grammar & collocations:** `homomorphic-evaluation cost` — chi phí; `evaluate an encrypted tensor` — evaluate.
**Examples:** `Homomorphic evaluation protected the query values but added substantial computation overhead.` → Evaluation đồng cấu bảo vệ query nhưng thêm overhead lớn.
**Liên kết tiếng Hàn:** `동형 평가`.

## 12. secret sharing /ˈsiːkrət ˈʃɛrɪŋ/
**Part of speech:** noun
**Core meaning (English):** splitting a secret into pieces so only an authorized combination of participants can recover it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia secret thành nhiều share; một share riêng lẻ không đủ để khôi phục.
**Grammar & collocations:** `secret-sharing scheme` — scheme; `reconstruct a secret` — khôi phục.
**Examples:** `Secret sharing distributed the masking key so no single coordinator could remove every mask.` → Secret sharing phân tán key để không coordinator đơn lẻ nào gỡ mọi mask.
**Liên kết tiếng Hàn:** `비밀 분산`.

## 13. private set intersection /ˈpraɪvət sɛt ˌɪntərˈsɛkʃən/
**Part of speech:** noun
**Core meaning (English):** a protocol that lets parties discover which items they share without revealing their nonshared items.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm phần giao của hai tập mà mỗi bên không phải lộ phần riêng.
**Grammar & collocations:** `private-set-intersection protocol` — protocol; `compute the intersection` — tính giao.
**Examples:** `Private set intersection matched eligible participants without exchanging full customer lists.` → PSI tìm participant đủ điều kiện mà không trao đổi toàn bộ danh sách.
**Liên kết tiếng Hàn:** `비공개 집합 교집합`.

## 14. trusted aggregator /ˈtrʌstɪd ˈæɡrəˌɡeɪtər/
**Part of speech:** noun
**Core meaning (English):** a coordinator trusted to combine protected updates while following a defined access and deletion policy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** aggregator được tin ở mức policy, nhưng vẫn cần audit và giới hạn quyền.
**Grammar & collocations:** `trusted-aggregator service` — service; `attest the aggregator` — attest.
**Examples:** `The trusted aggregator released only a thresholded update after enough clinics joined.` → Aggregator chỉ release update đạt threshold sau khi đủ clinic tham gia.
**Liên kết tiếng Hàn:** `신뢰된 집계자`.

## 15. gradient leakage /ˈɡreɪdiənt ˈliːkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** unintended disclosure of training information through gradients exchanged by distributed participants.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gradient tưởng như chỉ là update nhưng có thể rò thông tin data.
**Grammar & collocations:** `gradient-leakage attack` — attack; `mitigate leakage` — giảm rò rỉ.
**Examples:** `Gradient leakage exposed a recognizable pattern when the client batch was too small.` → Leakage làm lộ pattern nhận ra được khi batch client quá nhỏ.
**Liên kết tiếng Hàn:** `그래디언트 유출`.

## 16. canary record /ˈkænəri ˈrɛkərd/
**Part of speech:** noun
**Core meaning (English):** a specially marked test record inserted to detect whether training or release processes reveal protected data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record “chim hoàng yến” làm tín hiệu cảnh báo nếu bị model hoặc log làm lộ.
**Grammar & collocations:** `canary-record test` — test; `plant a canary record` — cài record.
**Examples:** `The canary record appeared in an output sample, proving that the release pipeline leaked training data.` → Canary record xuất hiện trong output, chứng minh pipeline lộ data train.
**Liên kết tiếng Hàn:** `카나리아 레코드`.

## 17. privacy accountant /ˈpraɪvəsi əˈkaʊntənt/
**Part of speech:** noun
**Core meaning (English):** a mechanism that tracks cumulative privacy loss across repeated analyses or training rounds.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “kế toán” ghi từng lần tiêu privacy budget và tổng loss.
**Grammar & collocations:** `privacy-accountant bound` — bound; `track cumulative loss` — theo dõi.
**Examples:** `The privacy accountant stopped new queries when the cumulative loss reached the policy limit.` → Accountant dừng query mới khi loss tích lũy chạm limit.
**Liên kết tiếng Hàn:** `프라이버시 회계자`.

## 18. secure multiparty computation /sɪˈkjʊr ˈmʌltiˌpɑrti ˌkɑmpjuˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** jointly computing a function from private inputs while revealing only the agreed output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều bên cùng tính mà mỗi bên giữ input bí mật.
**Grammar & collocations:** `secure-multiparty-computation protocol` — protocol; `evaluate a joint function` — evaluate.
**Examples:** `Secure multiparty computation produced a risk score without exposing either insurer's private table.` → MPC tạo risk score mà không lộ table riêng của insurer nào.
**Liên kết tiếng Hàn:** `안전한 다자간 계산`.

## 19. query auditing /ˈkwɪri ˈɔdɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** reviewing queries and released statistics to detect excessive access or privacy-risky combinations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** audit query để phát hiện truy vấn ghép lại có thể suy ra người cụ thể.
**Grammar & collocations:** `query-auditing rule` — rule; `audit a release` — audit.
**Examples:** `Query auditing blocked a sequence of small requests that could have isolated one patient.` → Audit chặn chuỗi query nhỏ có thể cô lập một bệnh nhân.
**Liên kết tiếng Hàn:** `쿼리 감사`.

## 20. consent revocation /kənˈsɛnt ˌrɛvəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** withdrawing permission for data to be used, retained, or included in future processing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** người dùng rút consent và hệ thống phải ngừng dùng hoặc xử lý hậu quả.
**Grammar & collocations:** `consent-revocation request` — request; `honor revocation` — tôn trọng việc rút.
**Examples:** `Consent revocation triggered removal of the participant from future training rounds.` → Revocation loại participant khỏi các round train sau.
**Liên kết tiếng Hàn:** `동의 철회`.

## Review in context

**Privacy-preserving training** keeps raw records local and may use **secure aggregation** so a coordinator sees only a combined update. A **privacy budget**, **clipping norm**, and **noisy gradient** limit disclosure, but auditors still test **membership inference**, **model inversion**, and **gradient leakage**. **Federated averaging** can run across a **cross-silo federation** or a **cross-device federation**. Stronger protocols use **homomorphic evaluation**, **secret sharing**, and **private set intersection**, sometimes coordinated by a **trusted aggregator**. A **canary record** reveals accidental exposure, while a **privacy accountant** tracks cumulative loss. **Secure multiparty computation** supports joint analysis, **query auditing** watches repeated access, and **consent revocation** removes a participant from future processing.

**Bản dịch tiếng Việt:** **Privacy-preserving training** giữ record thô tại chỗ và có thể dùng **secure aggregation** để coordinator chỉ thấy update tổng hợp. **Privacy budget**, **clipping norm** và **noisy gradient** giới hạn việc tiết lộ, nhưng auditor vẫn kiểm tra **membership inference**, **model inversion** và **gradient leakage**. **Federated averaging** có thể chạy giữa **cross-silo federation** hoặc **cross-device federation**. Protocol mạnh hơn dùng **homomorphic evaluation**, **secret sharing** và **private set intersection**, đôi khi do **trusted aggregator** điều phối. **Canary record** cho thấy việc lộ data ngoài ý muốn, còn **privacy accountant** theo dõi loss tích lũy. **Secure multiparty computation** hỗ trợ phân tích chung, **query auditing** theo dõi truy cập lặp lại, và **consent revocation** loại participant khỏi xử lý về sau.
