# C2 Vocabulary — Homomorphic encryption and private computation

This lesson follows protected computation from ciphertext arithmetic through interactive protocols and privacy-preserving inference.

Flow: **homomorphic encryption → partially homomorphic encryption → leveled homomorphic encryption → fully homomorphic encryption → ciphertext modulus → noise budget → bootstrapping → polynomial modulus degree → relinearization → modulus switching → key switching → ciphertext packing → SIMD batching → approximate homomorphic arithmetic → garbled circuit → oblivious transfer → secure two-party computation → secret sharing scheme → Beaver triple → privacy-preserving inference**.

## 1. homomorphic encryption /ˌhoʊmoʊˈmɔrfɪk ɪnˈkrɪpʃən/
**Part of speech:** noun
**Core meaning (English):** encryption that permits selected computations on ciphertexts so the corresponding plaintext result can be recovered after decryption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính trên dữ liệu đã mã hóa mà không cần mở plaintext.
**Grammar & collocations:** `homomorphic-encryption scheme` — scheme; `evaluate a ciphertext expression` — tính.
**Examples:** `Homomorphic encryption let the server compute a risk score without viewing the patient's raw inputs.` → Mã hóa đồng cấu cho server tính điểm mà không thấy input thô.
**Liên kết tiếng Hàn:** `동형 암호`.

## 2. partially homomorphic encryption /ˈpɑrʃəli ˌhoʊmoʊˈmɔrfɪk ɪnˈkrɪpʃən/
**Part of speech:** noun
**Core meaning (English):** encryption supporting an unlimited number of one algebraic operation, such as addition or multiplication, but not arbitrary circuits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ hỗ trợ một phép đại số nhưng có thể lặp nhiều lần.
**Grammar & collocations:** `partially-homomorphic-encryption primitive` — primitive; `support additive aggregation` — hỗ trợ.
**Examples:** `Partially homomorphic encryption was sufficient for summing encrypted survey responses.` → PHE đủ cho cộng response khảo sát.
**Liên kết tiếng Hàn:** `부분 동형 암호`.

## 3. leveled homomorphic encryption /ˈlɛvəld ˌhoʊmoʊˈmɔrfɪk ɪnˈkrɪpʃən/
**Part of speech:** noun
**Core meaning (English):** encryption that evaluates circuits up to a chosen multiplicative depth without refreshing ciphertext noise during the computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính được circuit có depth giới hạn mà chưa cần refresh.
**Grammar & collocations:** `leveled-homomorphic-encryption parameter set` — parameter; `fit a circuit depth` — khớp.
**Examples:** `Leveled homomorphic encryption handled the fixed-depth classifier without bootstrapping.` → LHE xử lý classifier depth cố định.
**Liên kết tiếng Hàn:** `레벨 동형 암호`.

## 4. fully homomorphic encryption /ˈfʊli ˌhoʊmoʊˈmɔrfɪk ɪnˈkrɪpʃən/
**Part of speech:** noun
**Core meaning (English):** encryption supporting arbitrary computations on ciphertexts through mechanisms that refresh accumulated noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính circuit tùy ý nhờ refresh noise.
**Grammar & collocations:** `fully-homomorphic-encryption evaluation` — evaluation; `compute over encrypted data` — tính.
**Examples:** `Fully homomorphic encryption enabled a deeper model but imposed substantial computational overhead.` → FHE cho model sâu hơn nhưng overhead lớn.
**Liên kết tiếng Hàn:** `완전 동형 암호`.

## 5. ciphertext modulus /ˈsaɪfərˌtɛkst ˈmɑdjələs/
**Part of speech:** noun
**Core meaning (English):** the modulus used in ciphertext arithmetic, influencing precision, noise growth, and parameter size.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** modulus của ciphertext chi phối noise và precision.
**Grammar & collocations:** `ciphertext-modulus chain` — chain; `select a modulus` — chọn.
**Examples:** `A larger ciphertext modulus preserved precision but increased memory and communication costs.` → Modulus lớn giữ precision nhưng tăng cost.
**Liên kết tiếng Hàn:** `암호문 법`.

## 6. noise budget /nɔɪz ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the remaining tolerance for accumulated error in a ciphertext before decryption becomes unreliable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách noise còn lại trước khi ciphertext không decrypt được.
**Grammar & collocations:** `noise-budget estimate` — estimate; `consume noise budget` — tiêu.
**Examples:** `The multiplication consumed most of the noise budget and forced an earlier refresh.` → Nhân tiêu gần hết budget.
**Liên kết tiếng Hàn:** `노이즈 예산`.

## 7. bootstrapping /ˈbuːtˌstræpɪŋ/
**Part of speech:** noun
**Core meaning (English):** a homomorphic refresh operation that reduces ciphertext noise by homomorphically evaluating a decryption circuit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** refresh ciphertext bằng cách tính circuit giải mã trên chính ciphertext.
**Grammar & collocations:** `bootstrapping cost` — cost; `refresh a noisy ciphertext` — refresh.
**Examples:** `Bootstrapping restored the noise budget so the encrypted computation could continue.` → Bootstrapping khôi phục budget để tính tiếp.
**Liên kết tiếng Hàn:** `부트스트래핑`.

## 8. polynomial modulus degree /ˌpɑləˈnoʊmiəl ˈmɑdjələs dɪˈɡriː/
**Part of speech:** noun
**Core meaning (English):** the degree of the polynomial modulus that sets a major trade-off among security, capacity, and computation cost.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** degree của polynomial modulus quyết định security và hiệu năng.
**Grammar & collocations:** `polynomial-modulus-degree selection` — selection; `choose a ring dimension` — chọn.
**Examples:** `The polynomial modulus degree was increased to fit a larger packed vector.` → Degree tăng để chứa vector lớn hơn.
**Liên kết tiếng Hàn:** `다항식 법 차수`.

## 9. relinearization /ˌriːˌlɪniərəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a key-switching operation that reduces the size of a ciphertext after homomorphic multiplication.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thu ciphertext sau phép nhân về dạng dễ xử lý hơn.
**Grammar & collocations:** `relinearization key` — key; `reduce ciphertext dimension` — giảm.
**Examples:** `Relinearization kept successive products from expanding the ciphertext representation indefinitely.` → Relinearization ngăn ciphertext phình mãi.
**Liên kết tiếng Hàn:** `재선형화`.

## 10. modulus switching /ˈmɑdjələs ˈswɪtʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** transforming a ciphertext to a smaller modulus to control noise and manage levels in a homomorphic computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi sang modulus nhỏ hơn để quản lý noise và depth.
**Grammar & collocations:** `modulus-switching schedule` — schedule; `drop to the next modulus` — chuyển.
**Examples:** `Modulus switching reduced the scale of the ciphertext before the next multiplication.` → Switching giảm scale trước phép nhân tiếp.
**Liên kết tiếng Hàn:** `법 전환`.

## 11. key switching /kiː ˈswɪtʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** converting a ciphertext associated with one secret-key form into an equivalent ciphertext associated with another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi ciphertext từ key representation này sang key khác.
**Grammar & collocations:** `key-switching key` — key; `transform a ciphertext key basis` — chuyển.
**Examples:** `Key switching allowed the evaluator to continue after a multiplication changed the ciphertext key basis.` → Key switching cho evaluator tính tiếp.
**Liên kết tiếng Hàn:** `키 스위칭`.

## 12. ciphertext packing /ˈsaɪfərˌtɛkst ˈpækɪŋ/
**Part of speech:** noun
**Core meaning (English):** encoding multiple plaintext values into one ciphertext so one operation can process them together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhét nhiều value vào một ciphertext để tính song song.
**Grammar & collocations:** `ciphertext-packing layout` — layout; `pack slots into one ciphertext` — đóng gói.
**Examples:** `Ciphertext packing reduced the number of encrypted multiplications in the batch.` → Packing giảm số phép nhân mã hóa.
**Liên kết tiếng Hàn:** `암호문 패킹`.

## 13. SIMD batching /ˌsɪm ˈdiː ˈɛm ˈbætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** applying one homomorphic operation simultaneously to many packed slots that behave like parallel lanes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một phép tính áp dụng đồng thời lên nhiều slot.
**Grammar & collocations:** `SIMD-batching layout` — layout; `rotate packed slots` — xoay.
**Examples:** `SIMD batching evaluated one feature transform across hundreds of encrypted records.` → Batching tính một transform trên hàng trăm record.
**Liên kết tiếng Hàn:** `SIMD 배칭`.

## 14. approximate homomorphic arithmetic /əˈprɑksəmət ˌhoʊmoʊˈmɔrfɪk əˈrɪθmətɪk/
**Part of speech:** noun
**Core meaning (English):** encrypted arithmetic that permits controlled numerical approximation for real-valued computations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** arithmetic có sai số kiểm soát, phù hợp số thực.
**Grammar & collocations:** `approximate-homomorphic-arithmetic scheme` — scheme; `manage scale and precision` — quản lý.
**Examples:** `Approximate homomorphic arithmetic supported the encrypted neural score with bounded numerical error.` → Arithmetic xấp xỉ hỗ trợ score với sai số giới hạn.
**Liên kết tiếng Hàn:** `근사 동형 연산`.

## 15. garbled circuit /ˈɡɑrbəld ˈsɝkɪt/
**Part of speech:** noun
**Core meaning (English):** an encrypted Boolean circuit that allows parties to evaluate a function without revealing their private inputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** circuit Boolean được mã hóa để hai bên tính mà không lộ input.
**Grammar & collocations:** `garbled-circuit evaluator` — evaluator; `garble a Boolean gate` — mã hóa.
**Examples:** `The garbled circuit compared two private risk categories without exposing either category.` → Circuit so sánh hai category bí mật.
**Liên kết tiếng Hàn:** `가블드 회로`.

## 16. oblivious transfer /əˈblɪviəs ˈtrænsfər/
**Part of speech:** noun
**Core meaning (English):** a protocol in which a receiver obtains one item from a sender without the sender learning which item was chosen.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** người nhận lấy một item nhưng người gửi không biết item nào.
**Grammar & collocations:** `oblivious-transfer extension` — extension; `retrieve one of two secrets` — lấy.
**Examples:** `Oblivious transfer supplied the private lookup value needed by the comparison protocol.` → OT cung cấp value lookup bí mật.
**Liên kết tiếng Hàn:** `망각 전송`.

## 17. secure two-party computation /sɪˈkjʊr tuː ˈpɑrti kəmˌpjuːˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a protocol allowing two parties to compute a joint function while keeping each party's input private.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hai bên cùng tính nhưng giữ input riêng.
**Grammar & collocations:** `secure-two-party-computation protocol` — protocol; `evaluate a joint predicate` — tính.
**Examples:** `Secure two-party computation let two hospitals estimate overlap without sharing patient lists.` → 2PC giúp hai bệnh viện tính overlap mà không chia list.
**Liên kết tiếng Hàn:** `안전한 2자 계산`.

## 18. secret sharing scheme /ˈsiːkrət ˈʃɛrɪŋ skiːm/
**Part of speech:** noun
**Core meaning (English):** a method that divides a secret into shares so only an authorized combination can reconstruct it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia secret thành nhiều share, đủ ngưỡng mới ghép lại.
**Grammar & collocations:** `secret-sharing threshold` — threshold; `reconstruct a secret` — khôi phục.
**Examples:** `The secret sharing scheme required three of five operators to authorize reconstruction.` → Scheme cần ba trong năm operator.
**Liên kết tiếng Hàn:** `비밀 공유 방식`.

## 19. Beaver triple /ˈbiːvər ˈtrɪpəl/
**Part of speech:** noun
**Core meaning (English):** a preprocessed multiplication-friendly tuple used to evaluate products securely in secret-shared computation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ ba chuẩn bị trước giúp nhân share mà không lộ value.
**Grammar & collocations:** `Beaver-triple consumption` — consumption; `consume a multiplication tuple` — dùng.
**Examples:** `The protocol consumed one Beaver triple for each private multiplication gate.` → Protocol dùng một triple cho mỗi phép nhân bí mật.
**Liên kết tiếng Hàn:** `비버 트리플`.

## 20. privacy-preserving inference /ˈpraɪvəsi prɪˈzɝvɪŋ ˈɪnfərəns/
**Part of speech:** noun
**Core meaning (English):** running a prediction service so the client's input and, when required, the model remain protected during inference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dự đoán mà bảo vệ input client và có thể cả model.
**Grammar & collocations:** `privacy-preserving-inference service` — service; `score an encrypted feature vector` — chấm.
**Examples:** `Privacy-preserving inference returned a diagnosis score without exposing the patient's feature vector.` → Inference trả score mà không lộ vector bệnh nhân.
**Liên kết tiếng Hàn:** `프라이버시 보존 추론`.

## Review in context

**Homomorphic encryption** may be **partially homomorphic encryption**, **leveled homomorphic encryption**, or **fully homomorphic encryption**. Parameters such as **ciphertext modulus**, **noise budget**, **bootstrapping**, and **polynomial modulus degree** control depth and cost. **Relinearization**, **modulus switching**, and **key switching** manage ciphertext growth; **ciphertext packing**, **SIMD batching**, and **approximate homomorphic arithmetic** improve throughput. Interactive alternatives include a **garbled circuit**, **oblivious transfer**, **secure two-party computation**, and a **secret sharing scheme** using a **Beaver triple**. These tools support **privacy-preserving inference**.

**Bản dịch tiếng Việt:** **Homomorphic encryption** có thể là **partially homomorphic encryption**, **leveled homomorphic encryption** hoặc **fully homomorphic encryption**. Parameter như **ciphertext modulus**, **noise budget**, **bootstrapping** và **polynomial modulus degree** kiểm soát depth và cost. **Relinearization**, **modulus switching** và **key switching** quản lý ciphertext; **ciphertext packing**, **SIMD batching** và **approximate homomorphic arithmetic** tăng throughput. Lựa chọn tương tác gồm **garbled circuit**, **oblivious transfer**, **secure two-party computation** và **secret sharing scheme** dùng **Beaver triple**. Các công cụ này hỗ trợ **privacy-preserving inference**.
