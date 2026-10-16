# C2 Vocabulary — Confidential inference and enclave security

This lesson follows a protected inference request from boot measurements and key release through encrypted execution and side-channel review.

Flow: **confidential inference → measurement register → key release policy → cache partitioning → constant-time kernel → fault injection → secure boot chain → key derivation context → ephemeral enclave → confidential container → memory encryption engine → attestation evidence bundle → isolation boundary → output privacy filter → model weight sealing → encrypted activation → inference policy gate → side-channel budget → tenant key scope → runtime measurement manifest**.

## 1. confidential inference /ˌkɑnfəˈdɛnʃəl ˈɪnfərəns/
**Part of speech:** noun
**Core meaning (English):** running a model so that inputs, intermediate activations, and often outputs remain protected from the host environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** inference giữ kín input, activation và model khỏi host.
**Grammar & collocations:** `confidential-inference service` — service; `protect inference inputs` — bảo vệ.
**Examples:** `Confidential inference kept patient images encrypted while the model ran on shared hardware.` → Inference bảo mật giữ ảnh bệnh nhân mã hóa khi model chạy trên hardware chung.
**Liên kết tiếng Hàn:** `기밀 추론`.

## 2. measurement register /ˈmɛʒərmənt ˈrɛdʒɪstər/
**Part of speech:** noun
**Core meaning (English):** protected storage that records measurements of boot components or runtime state for later verification.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** register lưu hash/measurement của boot và runtime để verify.
**Grammar & collocations:** `measurement-register value` — value; `extend a measurement` — mở rộng.
**Examples:** `The measurement register recorded the exact hypervisor image before releasing keys.` → Register ghi image hypervisor trước khi release key.
**Liên kết tiếng Hàn:** `측정 레지스터`.

## 3. key release policy /kiː rɪˈliːs ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** rules determining which measured and attested environments may receive a decryption key.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy quyết định runtime nào đủ tin để nhận key.
**Grammar & collocations:** `key-release-policy condition` — condition; `approve key release` — phê duyệt.
**Examples:** `The key release policy rejected a host running an unapproved kernel.` → Policy từ chối host chạy kernel chưa duyệt.
**Liên kết tiếng Hàn:** `키 릴리스 정책`.

## 4. cache partitioning /kæʃ pɑrˈtɪʃənɪŋ/
**Part of speech:** noun
**Core meaning (English):** dividing cache capacity or ways so one tenant or workload cannot freely interfere with another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia cache để giảm tranh chấp và rò rỉ giữa tenant.
**Grammar & collocations:** `cache-partitioning scheme` — scheme; `reserve cache ways` — dành.
**Examples:** `Cache partitioning limited cross-tenant contention during concurrent inference.` → Partitioning giới hạn tranh chấp giữa tenant.
**Liên kết tiếng Hàn:** `캐시 분할`.

## 5. constant-time kernel /ˈkɑnstənt taɪm ˈkɝnəl/
**Part of speech:** noun
**Core meaning (English):** a kernel designed so its execution pattern does not reveal secret-dependent timing differences.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kernel chạy timing ổn định, không để secret làm lộ thời gian.
**Grammar & collocations:** `constant-time-kernel review` — review; `avoid secret-dependent branches` — tránh.
**Examples:** `The constant-time kernel avoided data-dependent branches in the secure comparison.` → Kernel tránh branch phụ thuộc data khi so sánh bảo mật.
**Liên kết tiếng Hàn:** `상수 시간 커널`.

## 6. fault injection /fɔlt ɪnˈdʒɛkʃən/
**Part of speech:** noun
**Core meaning (English):** deliberately introducing faults into hardware or software to test detection and recovery controls.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cố tình tạo lỗi để xem security control có phát hiện và recover không.
**Grammar & collocations:** `fault-injection campaign` — campaign; `inject a reset fault` — chèn lỗi.
**Examples:** `Fault injection tested whether a forged measurement caused the enclave to halt safely.` → Injection test enclave có dừng an toàn khi measurement giả.
**Liên kết tiếng Hàn:** `결함 주입`.

## 7. secure boot chain /sɪˈkjʊr buːt tʃeɪn/
**Part of speech:** noun
**Core meaning (English):** a sequence in which each boot component verifies the next before handing over control.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** từng tầng boot verify tầng sau trước khi chạy.
**Grammar & collocations:** `secure-boot-chain anchor` — anchor; `verify the next stage` — verify.
**Examples:** `The secure boot chain refused to start after the firmware signature changed.` → Chain từ chối boot khi chữ ký firmware đổi.
**Liên kết tiếng Hàn:** `보안 부트 체인`.

## 8. key derivation context /kiː ˌdɛrəˈveɪʃən ˈkɑntɛkst/
**Part of speech:** noun
**Core meaning (English):** associated metadata that ensures a derived cryptographic key is bound to a particular tenant, purpose, or session.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** context gắn key với tenant/purpose/session để không dùng nhầm.
**Grammar & collocations:** `key-derivation-context field` — field; `bind a key to purpose` — bind.
**Examples:** `The key derivation context separated one customer's model key from another's.` → Context tách key model của khách này khỏi khách khác.
**Liên kết tiếng Hàn:** `키 파생 컨텍스트`.

## 9. ephemeral enclave /ɪˈfɛmərəl ˈɛnˌkleɪv/
**Part of speech:** noun
**Core meaning (English):** a short-lived protected execution instance whose secrets disappear when the instance is destroyed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** enclave sống ngắn, hủy xong thì secret biến mất.
**Grammar & collocations:** `ephemeral-enclave lifetime` — lifetime; `destroy the enclave` — hủy.
**Examples:** `An ephemeral enclave processed the request and erased its session key afterward.` → Enclave xử lý request rồi xóa session key.
**Liên kết tiếng Hàn:** `임시 엔클레이브`.

## 10. confidential container /ˌkɑnfəˈdɛnʃəl kənˈteɪnər/
**Part of speech:** noun
**Core meaning (English):** a container whose code and memory are protected from the host through hardware-backed isolation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** container có bảo vệ hardware, host không đọc được memory bên trong.
**Grammar & collocations:** `confidential-container image` — image; `launch a confidential container` — khởi chạy.
**Examples:** `The confidential container loaded the model only after its image was attested.` → Container chỉ load model sau khi image được attest.
**Liên kết tiếng Hàn:** `기밀 컨테이너`.

## 11. memory encryption engine /ˈmɛməri ɛnˈkrɪpʃən ˈɛndʒɪn/
**Part of speech:** noun
**Core meaning (English):** hardware that encrypts and authenticates memory traffic outside a protected execution region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** engine mã hóa traffic memory khi đi ra khỏi vùng bảo vệ.
**Grammar & collocations:** `memory-encryption-engine key` — key; `encrypt memory lines` — mã hóa.
**Examples:** `The memory encryption engine protected evicted activation pages from a hostile host.` → Engine bảo vệ page activation bị đẩy ra khỏi enclave.
**Liên kết tiếng Hàn:** `메모리 암호화 엔진`.

## 12. attestation evidence bundle /ˌætəˈsteɪʃən ˈɛvədəns ˈbʌndl/
**Part of speech:** noun
**Core meaning (English):** a package of signed measurements, certificates, and claims used to evaluate a protected runtime.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gói bằng chứng có chữ ký để verifier đánh giá runtime.
**Grammar & collocations:** `attestation-evidence-bundle parser` — parser; `validate evidence` — validate.
**Examples:** `The attestation evidence bundle included the firmware measurement and platform certificate.` → Bundle gồm measurement firmware và certificate platform.
**Liên kết tiếng Hàn:** `증명 증거 번들`.

## 13. isolation boundary /ˌaɪsəˈleɪʃən ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** the defined interface across which protected code, data, or privileges are allowed to cross.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới chỉ cho phép dữ liệu/quyền đi qua đúng chỗ.
**Grammar & collocations:** `isolation-boundary check` — check; `cross the boundary` — đi qua.
**Examples:** `The isolation boundary copied only normalized features into the untrusted service.` → Boundary chỉ copy feature đã normalize sang service không tin cậy.
**Liên kết tiếng Hàn:** `격리 경계`.

## 14. output privacy filter /ˈaʊtˌpʊt ˈpraɪvəsi ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a control that limits or transforms model outputs to reduce disclosure of sensitive input or model information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** filter output để không trả quá nhiều thông tin nhạy cảm.
**Grammar & collocations:** `output-privacy-filter rule` — rule; `redact a confidence detail` — redact.
**Examples:** `The output privacy filter hid fine-grained scores from the external client.` → Filter ẩn score quá chi tiết khỏi client ngoài.
**Liên kết tiếng Hàn:** `출력 프라이버시 필터`.

## 15. model weight sealing /ˈmɑdəl weɪt ˈsiːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** encrypting and binding model parameters so they can be opened only in an authorized measured environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** niêm phong weight bằng key và measurement policy.
**Grammar & collocations:** `model-weight-sealing key` — key; `seal model weights` — niêm phong.
**Examples:** `Model weight sealing prevented a copied container from loading the production checkpoint.` → Sealing ngăn container copy load checkpoint production.
**Liên kết tiếng Hàn:** `모델 가중치 봉인`.

## 16. encrypted activation /ɪnˈkrɪptɪd ˌæktəˈveɪʃən/
**Part of speech:** noun
**Core meaning (English):** an intermediate model representation kept encrypted while crossing a protected memory or service boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** activation trung gian được mã hóa khi di chuyển giữa vùng/service.
**Grammar & collocations:** `encrypted-activation buffer` — buffer; `decrypt inside the enclave` — giải mã.
**Examples:** `The encrypted activation crossed the accelerator boundary without exposing patient-derived features.` → Activation mã hóa qua boundary mà không lộ feature từ bệnh nhân.
**Liên kết tiếng Hàn:** `암호화된 활성화`.

## 17. inference policy gate /ˈɪnfərəns ˈpɑləsi ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** a control point that checks authorization, purpose, and runtime state before allowing an inference request.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cổng policy kiểm tra ai được inference, vì mục đích gì, trên runtime nào.
**Grammar & collocations:** `inference-policy-gate decision` — decision; `deny an unauthorized request` — từ chối.
**Examples:** `The inference policy gate denied a request lacking the approved clinical purpose.` → Gate từ chối request thiếu mục đích lâm sàng được duyệt.
**Liên kết tiếng Hàn:** `추론 정책 게이트`.

## 18. side-channel budget /ˈsaɪd ˌtʃænəl ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** an allowed upper bound on observable leakage through timing, cache behavior, power, or other indirect signals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách rò rỉ gián tiếp tối đa được chấp nhận.
**Grammar & collocations:** `side-channel-budget analysis` — analysis; `bound observable leakage` — giới hạn.
**Examples:** `Cache partitioning kept measured leakage below the side-channel budget.` → Partitioning giữ leakage dưới budget.
**Liên kết tiếng Hàn:** `사이드 채널 예산`.

## 19. tenant key scope /ˈtɛnənt kiː skoʊp/
**Part of speech:** noun
**Core meaning (English):** the set of resources and operations to which one tenant's cryptographic key is limited.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phạm vi key của tenant, không được mở sang tài nguyên tenant khác.
**Grammar & collocations:** `tenant-key-scope check` — check; `narrow key scope` — thu hẹp.
**Examples:** `The tenant key scope allowed inference on one model but not on another team's weights.` → Scope cho phép inference một model, không cho đọc weight team khác.
**Liên kết tiếng Hàn:** `테넌트 키 범위`.

## 20. runtime measurement manifest /ˈrʌnˌtaɪm ˈmɛʒərmənt ˈmænəˌfɛst/
**Part of speech:** noun
**Core meaning (English):** a signed record listing the measurements and configuration expected for a protected runtime.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** manifest ghi đúng measurement/config runtime cần có trước khi chạy.
**Grammar & collocations:** `runtime-measurement-manifest version` — version; `compare measurements` — so sánh.
**Examples:** `The verifier compared the runtime measurement manifest before approving model-key release.` → Verifier so manifest trước khi duyệt release key model.
**Liên kết tiếng Hàn:** `런타임 측정 매니페스트`.

## Review in context

**Confidential inference** begins with a **measurement register** and a **secure boot chain**. A **key release policy** checks a **runtime measurement manifest** and an **attestation evidence bundle** before opening an **ephemeral enclave** or **confidential container**. **Cache partitioning**, a **constant-time kernel**, and **fault injection** testing protect the **isolation boundary**. A **memory encryption engine** protects an **encrypted activation**, while **model weight sealing** keeps parameters closed. An **inference policy gate** and **tenant key scope** limit use; an **output privacy filter** reduces disclosure, and a **side-channel budget** bounds indirect leakage. A **key derivation context** binds secrets to purpose.

**Bản dịch tiếng Việt:** **Confidential inference** bắt đầu với **measurement register** và **secure boot chain**. **Key release policy** kiểm tra **runtime measurement manifest** và **attestation evidence bundle** trước khi mở **ephemeral enclave** hoặc **confidential container**. **Cache partitioning**, **constant-time kernel** và test **fault injection** bảo vệ **isolation boundary**. **Memory encryption engine** bảo vệ **encrypted activation**, còn **model weight sealing** giữ kín parameter. **Inference policy gate** và **tenant key scope** giới hạn việc dùng; **output privacy filter** giảm lộ thông tin, còn **side-channel budget** giới hạn leakage gián tiếp. **Key derivation context** gắn secret với purpose.
