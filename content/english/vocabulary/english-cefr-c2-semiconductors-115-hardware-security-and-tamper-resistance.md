# C2 Vocabulary — Hardware security and tamper resistance

This lesson connects silicon security mechanisms to side-channel observation, entropy validation, lifecycle control, and trusted update evidence.

Flow: **fault injection countermeasure → power-analysis trace → electromagnetic probe → glitch detector → tamper mesh → zeroization trigger → secure key ladder → physically unclonable function → challenge-response pair → entropy health test → true-random source → conditioning function → secure debug unlock → life-cycle state → manufacturing personalization → certificate chain anchor → attestation measurement → secure boot measurement → key revocation list → debug port fuse**.

## 1. fault injection countermeasure /fɔːlt ɪnˈdʒekʃən ˈkaʊntərmeʒər/
**Part of speech:** noun
**Core meaning (English):** design feature that detects or limits deliberate voltage, clock, laser, or electromagnetic faults.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** feature design detect hoặc giới hạn fault voltage, clock, laser hoặc electromagnetic cố ý.
**Grammar & collocations:** `fault-injection-countermeasure review` — review; `detect a transient violation` — detect transient violation.
**Examples:** `The fault injection countermeasure halted the boot flow after an abnormal clock pulse.` → Countermeasure injection-fault dừng boot flow sau clock pulse bất thường.
**Liên kết tiếng Hàn:** `결함 주입 대응책`.

## 2. power-analysis trace /ˈpaʊər əˈnæləsɪs treɪs/
**Part of speech:** noun
**Core meaning (English):** recorded power waveform used to infer secret-dependent activity in a device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** power waveform ghi lại dùng suy activity phụ thuộc secret trong device.
**Grammar & collocations:** `power-analysis-trace alignment` — alignment; `correlate leakage with a key guess` — correlate leakage với key guess.
**Examples:** `The power-analysis trace revealed a repeatable peak during key mixing.` → Trace analysis-power lộ peak lặp trong key mixing.
**Liên kết tiếng Hàn:** `전력 분석 트레이스`.

## 3. electromagnetic probe /ɪˌlektrəʊmæɡˈnetɪk proʊb/
**Part of speech:** noun
**Core meaning (English):** sensor used to sample local electromagnetic emissions from an operating circuit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sensor sample electromagnetic emission cục bộ từ circuit đang chạy.
**Grammar & collocations:** `electromagnetic-probe scan` — scan; `map a localized leakage source` — map leakage source cục bộ.
**Examples:** `An electromagnetic probe localized the cryptographic core's strongest emission.` → Probe electromagnetic định vị emission mạnh nhất của cryptographic core.
**Liên kết tiếng Hàn:** `전자기 프로브`.

## 4. glitch detector /ɡlɪtʃ dɪˈtektər/
**Part of speech:** noun
**Core meaning (English):** circuit that recognizes an abnormally short or mistimed clock, reset, or supply pulse.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** circuit nhận pulse clock, reset hoặc supply ngắn hoặc sai timing bất thường.
**Grammar & collocations:** `glitch-detector latch` — latch; `reject a malformed pulse` — reject pulse malformed.
**Examples:** `The glitch detector blocked a shortened reset release during voltage fault testing.` → Detector glitch chặn reset release bị rút ngắn trong fault test voltage.
**Liên kết tiếng Hàn:** `글리치 검출기`.

## 5. tamper mesh /ˈtæmpər meʃ/
**Part of speech:** noun
**Core meaning (English):** conductive or optical network that detects physical intrusion or removal of a protected package layer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** network conductive hoặc optical detect intrusion vật lý hoặc removal layer package bảo vệ.
**Grammar & collocations:** `tamper-mesh continuity` — continuity; `trigger a physical breach response` — trigger response breach.
**Examples:** `The tamper mesh opened when the package lid was lifted.` → Mesh tamper hở khi package lid bị nâng.
**Liên kết tiếng Hàn:** `변조 방지 메시`.

## 6. zeroization trigger /ˌzɪroʊəˈzeɪʃən ˈtrɪɡər/
**Part of speech:** noun
**Core meaning (English):** event or signal that causes secret keys and sensitive state to be erased.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event hoặc signal khiến secret key và sensitive state bị xóa.
**Grammar & collocations:** `zeroization-trigger path` — path; `erase volatile secrets` — xóa secret volatile.
**Examples:** `The zeroization trigger erased session keys after the tamper mesh changed state.` → Trigger zeroization xóa session key sau khi mesh tamper đổi state.
**Liên kết tiếng Hàn:** `제로화 트리거`.

## 7. secure key ladder /sɪˈkjʊr kiː ˈlædər/
**Part of speech:** noun
**Core meaning (English):** hierarchy of derived keys in which each level protects the next level's material.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hierarchy key derived mỗi level bảo vệ material của level kế.
**Grammar & collocations:** `secure-key-ladder derivation` — derivation; `unwrap a device key` — unwrap device key.
**Examples:** `The secure key ladder derived a session key without exposing the root secret.` → Ladder key-secure derive session key mà không lộ root secret.
**Liên kết tiếng Hàn:** `보안 키 래더`.

## 8. physically unclonable function /ˈfɪzɪkəli ʌnˈkloʊnəbəl ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** physical circuit variation used to produce a device-specific response that is difficult to reproduce.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variation circuit vật lý tạo response riêng device khó reproduce.
**Grammar & collocations:** `physically-unclonable-function response` — response; `enroll a silicon fingerprint` — enroll fingerprint silicon.
**Examples:** `The physically unclonable function generated a device-bound enrollment secret.` → Function unclonable-vật-lý tạo enrollment secret gắn device.
**Liên kết tiếng Hàn:** `물리적 복제 방지 함수`.

## 9. challenge-response pair /ˈtʃælɪndʒ rɪˈspɑːns per/
**Part of speech:** noun
**Core meaning (English):** input and corresponding device response used to test possession of a secret or unique identity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** input và response device tương ứng dùng test possession secret hoặc identity riêng.
**Grammar & collocations:** `challenge-response-pair verifier` — verifier; `authenticate a device` — authenticate device.
**Examples:** `The challenge-response pair rejected a cloned controller with copied firmware.` → Pair response-challenge reject controller clone có firmware copy.
**Liên kết tiếng Hàn:** `챌린지-응답 쌍`.

## 10. entropy health test /ˈentrəpi helθ test/
**Part of speech:** noun
**Core meaning (English):** statistical test checking whether a random source continues to provide sufficient unpredictability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test thống kê kiểm tra random source còn unpredictability đủ không.
**Grammar & collocations:** `entropy-health-test alarm` — alarm; `reject a biased sample stream` — reject sample stream biased.
**Examples:** `The entropy health test disabled key generation after a stuck-bit pattern appeared.` → Test health-entropy disable key generation sau pattern bit stuck.
**Liên kết tiếng Hàn:** `엔트로피 상태 시험`.

## 11. true-random source /truː ˈrændəm sɔːrs/
**Part of speech:** noun
**Core meaning (English):** physical noise source used to generate unpredictable random bits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** noise source vật lý dùng tạo random bit unpredictable.
**Grammar & collocations:** `true-random-source startup` — startup; `harvest physical noise` — harvest physical noise.
**Examples:** `The true-random source harvested oscillator jitter after conditioning.` → Source random-thật harvest oscillator jitter sau conditioning.
**Liên kết tiếng Hàn:** `진난수 소스`.

## 12. conditioning function /kənˈdɪʃənɪŋ ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** deterministic transform that removes bias or correlation from raw entropy before use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transform deterministic loại bias hoặc correlation khỏi raw entropy trước dùng.
**Grammar & collocations:** `conditioning-function output` — output; `whiten a raw entropy stream` — whiten entropy stream thô.
**Examples:** `The conditioning function compressed biased samples into a shorter random seed.` → Function conditioning nén sample biased thành random seed ngắn hơn.
**Liên kết tiếng Hàn:** `컨디셔닝 함수`.

## 13. secure debug unlock /sɪˈkjʊr diˈbʌɡ ʌnˈlɑːk/
**Part of speech:** noun
**Core meaning (English):** authenticated process that temporarily enables protected debug access.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process authenticated tạm enable debug access được bảo vệ.
**Grammar & collocations:** `secure-debug-unlock token` — token; `authorize a service session` — authorize service session.
**Examples:** `Secure debug unlock required a signed service certificate and a fresh challenge.` → Unlock debug-secure cần service certificate ký và challenge mới.
**Liên kết tiếng Hàn:** `보안 디버그 잠금 해제`.

## 14. life-cycle state /ˈlaɪf saɪkəl steɪt/
**Part of speech:** noun
**Core meaning (English):** security state describing a device's manufacturing, development, deployed, or retired phase.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** security state mô tả phase manufacturing, development, deployed hoặc retired của device.
**Grammar & collocations:** `life-cycle-state transition` — transition; `lock production features` — khóa feature production.
**Examples:** `The life-cycle state changed from provisioning to deployed after personalization.` → State cycle-life đổi từ provisioning sang deployed sau personalization.
**Liên kết tiếng Hàn:** `수명 주기 상태`.

## 15. manufacturing personalization /ˌmænjəˈfæktʃərɪŋ ˌpɜːrsənələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** provisioning device-specific keys, identities, and configuration during production.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** provision key, identity và configuration riêng device trong production.
**Grammar & collocations:** `manufacturing-personalization station` — station; `inject a device credential` — inject credential device.
**Examples:** `Manufacturing personalization bound the certificate to the physically unique die.` → Personalization manufacturing bind certificate với die unique vật lý.
**Liên kết tiếng Hàn:** `제조 개인화`.

## 16. certificate chain anchor /sərˈtɪfɪkət tʃeɪn ˈæŋkər/
**Part of speech:** noun
**Core meaning (English):** trusted root certificate from which a device validates subordinate certificates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** root certificate trusted dùng device validate certificate cấp dưới.
**Grammar & collocations:** `certificate-chain-anchor store` — store; `validate an intermediate signer` — validate signer trung gian.
**Examples:** `The certificate chain anchor rejected an update signed by an unknown authority.` → Anchor chain-certificate reject update ký bởi authority không biết.
**Liên kết tiếng Hàn:** `인증서 체인 앵커`.

## 17. attestation measurement /ˌæteˈsteɪʃən ˈmeʒərmənt/
**Part of speech:** noun
**Core meaning (English):** cryptographic measurement of boot or runtime state presented as evidence of device integrity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measurement cryptographic của boot hoặc runtime state làm evidence integrity device.
**Grammar & collocations:** `attestation-measurement quote` — quote; `bind software state to identity` — bind software state với identity.
**Examples:** `The attestation measurement changed when an unauthorized option ROM was loaded.` → Measurement attestation đổi khi option ROM không authorize được load.
**Liên kết tiếng Hàn:** `증명 측정값`.

## 18. secure boot measurement /sɪˈkjʊr buːt ˈmeʒərmənt/
**Part of speech:** noun
**Core meaning (English):** recorded cryptographic digest of components encountered during a trusted boot sequence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** digest cryptographic ghi lại của component gặp trong trusted boot sequence.
**Grammar & collocations:** `secure-boot-measurement log` — log; `extend a platform register` — extend platform register.
**Examples:** `Secure boot measurement detected a modified first-stage loader.` → Measurement boot-secure detect first-stage loader bị sửa.
**Liên kết tiếng Hàn:** `보안 부팅 측정`.

## 19. key revocation list /kiː ˌrevəˈkeɪʃən lɪst/
**Part of speech:** noun
**Core meaning (English):** list of credentials or signing keys that must no longer be accepted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** list credential hoặc signing key không còn được accept.
**Grammar & collocations:** `key-revocation-list update` — update; `reject a compromised signer` — reject signer compromise.
**Examples:** `The key revocation list blocked a certificate exposed during field service.` → List revocation-key chặn certificate lộ trong field service.
**Liên kết tiếng Hàn:** `키 폐기 목록`.

## 20. debug port fuse /diˈbʌɡ pɔːrt fjuːz/
**Part of speech:** noun
**Core meaning (English):** one-time programmable element that permanently disables an untrusted debug interface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** element programmable một lần disable vĩnh viễn debug interface không trusted.
**Grammar & collocations:** `debug-port-fuse state` — state; `blow a production fuse` — blow fuse production.
**Examples:** `The debug port fuse was blown before the device entered the deployed life-cycle state.` → Fuse port-debug bị blow trước khi device vào deployed life-cycle state.
**Liên kết tiếng Hàn:** `디버그 포트 퓨즈`.

## Review in context

A **fault injection countermeasure**, **power-analysis trace**, **electromagnetic probe**, **glitch detector**, **tamper mesh**, and **zeroization trigger** protect a **secure key ladder** and **physically unclonable function**. A **challenge-response pair**, **entropy health test**, **true-random source**, and **conditioning function** support a **secure debug unlock** and **life-cycle state** after **manufacturing personalization**. A **certificate chain anchor**, **attestation measurement**, **secure boot measurement**, **key revocation list**, and **debug port fuse** complete the hardware trust boundary.

**Bản dịch tiếng Việt:** **Fault injection countermeasure**, **power-analysis trace**, **electromagnetic probe**, **glitch detector**, **tamper mesh** và **zeroization trigger** bảo vệ **secure key ladder** và **physically unclonable function**. **Challenge-response pair**, **entropy health test**, **true-random source** và **conditioning function** hỗ trợ **secure debug unlock** và **life-cycle state** sau **manufacturing personalization**. **Certificate chain anchor**, **attestation measurement**, **secure boot measurement**, **key revocation list** và **debug port fuse** hoàn tất trust boundary phần cứng.
