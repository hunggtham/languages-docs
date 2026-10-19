# C2 Vocabulary — Confidential computing and hardware attestation

This lesson follows protected workload execution from enclave measurements and platform identity through key release, side-channel limits, and lifecycle operations.

Flow: **enclave measurement → sealing key → enclave boundary → platform identity → oblivious access → trusted path → firmware root of trust → encrypted guest memory → enclave lifecycle → attestation report → quote verification policy → rollback-resistant storage → memory confidentiality → page-fault side channel → enclave exit surface → key broker authorization → workload identity binding → virtualization-based isolation → isolation domain → enclave debug mode**.

## 1. enclave measurement /ˈenkleɪv ˈmeʒərmənt/
**Part of speech:** noun
**Core meaning (English):** a cryptographic digest representing the code and configuration loaded into a protected enclave.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** digest mật mã đại diện code và config trong enclave.
**Grammar & collocations:** `enclave-measurement digest` — digest; `extend a measurement` — mở rộng.
**Examples:** `The enclave measurement changed when a single library was replaced.` → Measurement đổi khi thay một library.
**Liên kết tiếng Hàn:** `엔클레이브 측정값`.

## 2. sealing key /ˈsiːlɪŋ kiː/
**Part of speech:** noun
**Core meaning (English):** a hardware-protected key used to encrypt data so that only an authorized enclave can reopen it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** key phần cứng bảo vệ dữ liệu để enclave đúng quyền mở.
**Grammar & collocations:** `sealing-key derivation` — derivation; `seal persistent state` — niêm phong.
**Examples:** `The sealing key protected a database snapshot from ordinary host processes.` → Key bảo vệ snapshot khỏi process host.
**Liên kết tiếng Hàn:** `봉인 키`.

## 3. enclave boundary /ˈenkleɪv ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** the interface separating protected enclave code and the less-trusted host environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interface tách code được bảo vệ khỏi host ít tin cậy.
**Grammar & collocations:** `enclave-boundary call` — call; `validate an entry point` — xác thực.
**Examples:** `The enclave boundary rejected pointers that referred to unvalidated host memory.` → Boundary từ chối pointer tới memory chưa kiểm.
**Liên kết tiếng Hàn:** `엔클레이브 경계`.

## 4. platform identity /ˈplætfɔːrm aɪˈdentəti/
**Part of speech:** noun
**Core meaning (English):** a cryptographically verifiable identity for the hardware and firmware hosting a workload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identity mật mã xác minh phần cứng và firmware host workload.
**Grammar & collocations:** `platform-identity certificate` — certificate; `bind a device claim` — gắn.
**Examples:** `The service released credentials only to a recognized platform identity.` → Service chỉ cấp credential cho identity hợp lệ.
**Liên kết tiếng Hàn:** `플랫폼 신원`.

## 5. oblivious access /əˈblɪviəs ˈækses/
**Part of speech:** noun
**Core meaning (English):** a memory-access technique that hides which locations a protected computation reads or writes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kỹ thuật che vị trí memory được đọc hoặc ghi.
**Grammar & collocations:** `oblivious-access pattern` — pattern; `hide an address sequence` — che.
**Examples:** `Oblivious access reduced the information leaked by repeated table lookups.` → Access che giảm leak từ lookup lặp.
**Liên kết tiếng Hàn:** `망각 접근`.

## 6. trusted path /ˈtrʌstɪd pɑːθ/
**Part of speech:** noun
**Core meaning (English):** a protected communication route that prevents an untrusted intermediary from altering a security-critical interaction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường truyền bảo vệ ngăn intermediary sửa tương tác quan trọng.
**Grammar & collocations:** `trusted-path channel` — channel; `display an authorization prompt` — hiển thị.
**Examples:** `The trusted path delivered the user approval directly to the protected workload.` → Path đưa phê duyệt thẳng tới workload.
**Liên kết tiếng Hàn:** `신뢰 경로`.

## 7. firmware root of trust /ˈfɜːrmwer ruːt əv trʌst/
**Part of speech:** noun
**Core meaning (English):** an immutable or strongly protected firmware component that anchors platform verification.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** firmware bất biến làm điểm neo xác minh platform.
**Grammar & collocations:** `firmware-root-of-trust key` — key; `verify a boot stage` — xác minh.
**Examples:** `The firmware root of trust measured the next loader before handing over control.` → Root đo loader kế tiếp trước khi giao quyền.
**Liên kết tiếng Hàn:** `펌웨어 신뢰 앵커`.

## 8. encrypted guest memory /ɪnˈkrɪptɪd ɡest ˈmeməri/
**Part of speech:** noun
**Core meaning (English):** virtual-machine memory encrypted so that a hostile hypervisor cannot read its contents directly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory VM được mã hóa để hypervisor xấu không đọc trực tiếp.
**Grammar & collocations:** `encrypted-guest-memory key` — key; `protect a page from the host` — bảo vệ.
**Examples:** `Encrypted guest memory limited what a compromised hypervisor could inspect.` → Memory mã hóa hạn chế hypervisor bị chiếm.
**Liên kết tiếng Hàn:** `암호화된 게스트 메모리`.

## 9. enclave lifecycle /ˈenkleɪv ˈlaɪfsaɪkəl/
**Part of speech:** noun
**Core meaning (English):** the sequence of creation, initialization, execution, suspension, and destruction of a protected enclave.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi tạo, khởi tạo, chạy, dừng và hủy enclave.
**Grammar & collocations:** `enclave-lifecycle transition` — transition; `revoke a suspended instance` — thu hồi.
**Examples:** `The enclave lifecycle erased volatile secrets before the instance was destroyed.` → Lifecycle xóa secret trước khi hủy.
**Liên kết tiếng Hàn:** `엔클레이브 수명 주기`.

## 10. attestation report /ˌætestˈeɪʃən rɪˈpɔːrt/
**Part of speech:** noun
**Core meaning (English):** a signed statement describing a platform, workload measurement, and relevant security configuration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** statement có chữ ký mô tả platform, measurement và config.
**Grammar & collocations:** `attestation-report parser` — parser; `validate a signed claim` — xác thực.
**Examples:** `The attestation report included the enclave measurement and a freshness challenge.` → Report gồm measurement và challenge mới.
**Liên kết tiếng Hàn:** `원격 검증 보고서`.

## 11. quote verification policy /kwoʊt ˌverɪfɪˈkeɪʃən ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a rule set specifying which signed attestation claims a relying service accepts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ rule quy định claim attestation nào service tin.
**Grammar & collocations:** `quote-verification-policy update` — update; `reject a stale quote` — từ chối.
**Examples:** `The quote verification policy rejected debug-enabled enclaves in production.` → Policy từ chối enclave debug ở production.
**Liên kết tiếng Hàn:** `인용 검증 정책`.

## 12. rollback-resistant storage /ˈroʊlbæk rɪˈzɪstənt ˈstɔːrɪdʒ/
**Part of speech:** noun
**Core meaning (English):** storage that prevents an attacker from restoring an older, vulnerable protected state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** storage ngăn khôi phục state cũ có lỗ hổng.
**Grammar & collocations:** `rollback-resistant-storage counter` — counter; `advance a monotonic version` — tăng.
**Examples:** `Rollback-resistant storage stopped the host from replaying an obsolete policy.` → Storage chặn host replay policy cũ.
**Liên kết tiếng Hàn:** `롤백 방지 저장소`.

## 13. memory confidentiality /ˈmeməri ˌkɒnfɪdenʃiˈæləti/
**Part of speech:** noun
**Core meaning (English):** protection ensuring that unauthorized observers cannot learn the contents of computation memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo vệ để observer trái phép không biết nội dung memory.
**Grammar & collocations:** `memory-confidentiality guarantee` — guarantee; `encrypt a cache line` — mã hóa.
**Examples:** `Memory confidentiality remained conditional on protecting page metadata as well as bytes.` → Confidentiality còn tùy bảo vệ metadata.
**Liên kết tiếng Hàn:** `메모리 기밀성`.

## 14. page-fault side channel /ˈpeɪdʒ fɔːlt saɪd ˈtʃænəl/
**Part of speech:** noun
**Core meaning (English):** leakage inferred from the sequence or timing of virtual-memory page faults.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** leak suy ra từ chuỗi hoặc timing page fault.
**Grammar & collocations:** `page-fault-side-channel analysis` — analysis; `pad an access pattern` — đệm.
**Examples:** `A page-fault side channel revealed which secret-dependent branch was active.` → Side channel lộ branch phụ thuộc secret.
**Liên kết tiếng Hàn:** `페이지 폴트 부채널`.

## 15. enclave exit surface /ˈenkleɪv ˈeɡzɪt ˈsɜːrfɪs/
**Part of speech:** noun
**Core meaning (English):** the set of transitions through which execution leaves a protected enclave and exposes state to the host.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập transition đưa execution ra ngoài và lộ state cho host.
**Grammar & collocations:** `enclave-exit-surface audit` — audit; `minimize an exit path` — giảm.
**Examples:** `The audit reduced the enclave exit surface by batching host calls.` → Audit giảm surface bằng gom host call.
**Liên kết tiếng Hàn:** `엔클레이브 종료 표면`.

## 16. key broker authorization /kiː ˈbroʊkər ˌɔːθərəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a decision by a key-service intermediary about whether a measured workload may receive a secret.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyết định broker cấp secret cho workload có measurement phù hợp.
**Grammar & collocations:** `key-broker-authorization rule` — rule; `release a tenant key` — cấp.
**Examples:** `Key broker authorization required a current report and an approved measurement.` → Broker cần report mới và measurement được duyệt.
**Liên kết tiếng Hàn:** `키 브로커 권한 부여`.

## 17. workload identity binding /ˈwɜːrkloʊd aɪˈdentəti ˈbaɪndɪŋ/
**Part of speech:** noun
**Core meaning (English):** linking a workload identity to a specific measurement, policy, or deployment context.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gắn identity workload với measurement và policy cụ thể.
**Grammar & collocations:** `workload-identity-binding claim` — claim; `bind a service account` — gắn.
**Examples:** `Workload identity binding prevented a copied image from inheriting production credentials.` → Binding ngăn image copy dùng credential production.
**Liên kết tiếng Hàn:** `워크로드 신원 바인딩`.

## 18. virtualization-based isolation /ˌvɜːrtʃuələˈzeɪʃən beɪst ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** isolation created by hardware virtualization boundaries between a workload and the host operating system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cô lập nhờ ranh giới ảo hóa phần cứng giữa workload và OS host.
**Grammar & collocations:** `virtualization-based-isolation boundary` — boundary; `separate guest privilege` — tách.
**Examples:** `Virtualization-based isolation reduced the host kernel's direct view of guest pages.` → Isolation giảm khả năng kernel đọc page guest.
**Liên kết tiếng Hàn:** `가상화 기반 격리`.

## 19. isolation domain /ˌaɪsəˈleɪʃən doʊˈmeɪn/
**Part of speech:** noun
**Core meaning (English):** a defined protection region whose memory, identities, and policy are separated from other regions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng bảo vệ tách memory, identity và policy khỏi vùng khác.
**Grammar & collocations:** `isolation-domain policy` — policy; `cross an isolation boundary` — vượt.
**Examples:** `The scheduler assigned each tenant to a separate isolation domain.` → Scheduler gán mỗi tenant vào domain riêng.
**Liên kết tiếng Hàn:** `격리 도메인`.

## 20. enclave debug mode /ˈenkleɪv diːˈbʌɡ moʊd/
**Part of speech:** noun
**Core meaning (English):** a diagnostic configuration that grants extra inspection capability and therefore weakens production confidentiality.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấu hình debug cho phép inspect nhưng làm yếu confidentiality production.
**Grammar & collocations:** `enclave-debug-mode flag` — flag; `disable diagnostic access` — tắt.
**Examples:** `The release pipeline disabled enclave debug mode before issuing an attestation identity.` → Pipeline tắt debug trước khi cấp identity.
**Liên kết tiếng Hàn:** `엔클레이브 디버그 모드`.

## Review in context

An **enclave measurement** derives a **sealing key** inside an **enclave boundary**, while **platform identity** and a **trusted path** connect the workload to a **firmware root of trust**. **Oblivious access**, **encrypted guest memory**, and a carefully managed **enclave lifecycle** reduce exposure. An **attestation report** is evaluated by a **quote verification policy**, and **rollback-resistant storage** supports **memory confidentiality**. Analysts still examine a **page-fault side channel** and the **enclave exit surface**. **Key broker authorization** depends on **workload identity binding**, **virtualization-based isolation**, and the correct **isolation domain**; **enclave debug mode** must remain disabled in production.

**Bản dịch tiếng Việt:** **Measurement enclave** tạo **sealing key** trong **ranh giới enclave**, còn **identity platform** và **trusted path** nối workload với **root of trust firmware**. **Truy cập oblivious**, **memory guest mã hóa** và **vòng đời enclave** được quản lý cẩn thận làm giảm rò rỉ. **Report attestation** được đánh giá theo **policy xác minh quote**, còn **storage chống rollback** hỗ trợ **tính bí mật memory**. Nhà phân tích vẫn kiểm tra **side channel page fault** và **bề mặt thoát enclave**. **Ủy quyền broker key** phụ thuộc **binding identity workload**, **cô lập dựa trên ảo hóa** và **domain cô lập** đúng; **chế độ debug enclave** phải tắt ở production.
