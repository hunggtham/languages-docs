# C2 Vocabulary — Confidential computing and trusted execution

This lesson follows a protected workload from boot measurement through attestation, encrypted memory, enclave operation, and recovery safeguards.

Flow: **confidential computing → trusted execution environment → enclave → attestation → remote attestation → hardware root of trust → secure boot → measured boot → platform configuration register → sealed storage → memory encryption → integrity tree → attestation quote → verifier → provisioner → key sealing → enclave exit → memory integrity → rollback protection → page fault**.

## 1. confidential computing /ˌkɑnfəˈdɛnʃəl kəmˈpjuːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** a computing approach that protects data and code while they are being processed, not only when stored or transmitted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo vệ dữ liệu ngay lúc CPU đang xử lý; cloud operator có thể quản lý máy nhưng không dễ đọc plaintext trong workload.
**Grammar & collocations:** `confidential-computing platform` — nền tảng confidential computing; `confidential workload` — workload được bảo vệ.
**Examples:** `Confidential computing let the clinic analyze records in the cloud without exposing raw patient data to the host.` → Confidential computing cho phép phòng khám phân tích hồ sơ trên cloud mà không để lộ dữ liệu bệnh nhân thô cho host.
**Liên kết tiếng Hàn:** `기밀 컴퓨팅`.

## 2. trusted execution environment /ˌtrʌstɪd ˌɛksɪˈkjuːʃən ɪnˈvaɪrənmənt/
**Part of speech:** noun
**Core meaning (English):** an isolated processing environment whose hardware and software enforce confidentiality and integrity for selected code and data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “phòng xử lý” có ranh giới bảo mật do phần cứng và firmware cùng bảo vệ.
**Grammar & collocations:** `TEE` — viết tắt của trusted execution environment; `TEE boundary` — ranh giới TEE.
**Examples:** `The payment service moved its signing routine into a trusted execution environment.` → Dịch vụ thanh toán chuyển routine ký vào một trusted execution environment.
**Liên kết tiếng Hàn:** `신뢰 실행 환경`.

## 3. enclave /ˈɛnˌkleɪv/
**Part of speech:** noun
**Core meaning (English):** a protected region of memory and execution reserved for code that must be isolated from the surrounding system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “khu vực biệt lập” trong process; code bên ngoài không tự do đọc memory của enclave.
**Grammar & collocations:** `enclave memory` — memory của enclave; `enter an enclave` — đi vào enclave.
**Examples:** `Only the enclave could decrypt the model weights after the request was admitted.` → Chỉ enclave mới có thể giải mã trọng số model sau khi request được chấp nhận.
**Liên kết tiếng Hàn:** `엔클레이브`.

## 4. attestation /ˌætəˈsteɪʃən/
**Part of speech:** noun
**Core meaning (English):** evidence that a system is running an expected configuration or a particular trusted workload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bằng chứng “máy này đang chạy đúng thứ đã cam kết”, thường dựa trên measurement được phần cứng bảo vệ.
**Grammar & collocations:** `platform attestation` — attestation của platform; `attestation evidence` — bằng chứng attestation.
**Examples:** `The database released its key only after receiving valid attestation.` → Database chỉ cấp key sau khi nhận attestation hợp lệ.
**Liên kết tiếng Hàn:** `증명`, `어테스테이션`.

## 5. remote attestation /rɪˈmoʊt ˌætəˈsteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a protocol by which one party proves the state of a remote machine or protected workload to another party.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** máy ở xa gửi bằng chứng có chữ ký để bên tin cậy kiểm tra trước khi trao secret.
**Grammar & collocations:** `remote-attestation protocol` — protocol remote attestation; `request remote attestation` — yêu cầu remote attestation.
**Examples:** `The key broker required remote attestation before issuing a database credential.` → Key broker yêu cầu remote attestation trước khi cấp credential database.
**Liên kết tiếng Hàn:** `원격 증명`.

## 6. hardware root of trust /ˈhɑrdˌwɛr ruːt əv trʌst/
**Part of speech:** noun
**Core meaning (English):** a small hardware component or key that anchors the chain of trust for boot, measurement, or key protection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “móng” phần cứng đầu tiên mà các bước xác minh sau cùng dựa vào.
**Grammar & collocations:** `hardware root of trust` — gốc tin cậy phần cứng; `root-of-trust key` — key gốc tin cậy.
**Examples:** `A hardware root of trust protected the signing key used to validate the first boot stage.` → Hardware root of trust bảo vệ signing key dùng để xác minh giai đoạn boot đầu tiên.
**Liên kết tiếng Hàn:** `하드웨어 신뢰점`.

## 7. secure boot /sɪˈkjʊr buːt/
**Part of speech:** noun
**Core meaning (English):** a boot process that runs only software whose authenticity or integrity has been verified.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** firmware kiểm tra chữ ký từng tầng trước khi cho tầng kế tiếp chạy.
**Grammar & collocations:** `secure-boot chain` — chuỗi secure boot; `secure-boot key` — key secure boot.
**Examples:** `Secure boot blocked an unsigned loader from starting the operating system.` → Secure boot chặn một loader không có chữ ký khởi động hệ điều hành.
**Liên kết tiếng Hàn:** `보안 부팅`.

## 8. measured boot /ˈmɛʒərd buːt/
**Part of speech:** noun
**Core meaning (English):** a boot process that records cryptographic measurements of loaded components so their state can later be reported.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** boot không chỉ kiểm tra mà còn “ghi dấu vân tay” của từng component để report về sau.
**Grammar & collocations:** `measured-boot log` — log measured boot; `boot measurement` — measurement lúc boot.
**Examples:** `Measured boot recorded the firmware and kernel hashes for later attestation.` → Measured boot ghi hash của firmware và kernel để dùng cho attestation sau đó.
**Liên kết tiếng Hàn:** `측정 부팅`.

## 9. platform configuration register /ˈplætˌfɔrm kənˌfɪɡjəˈreɪʃən ˈrɛdʒɪstər/
**Part of speech:** noun
**Core meaning (English):** a protected register whose value is extended with measurements that summarize a platform's boot state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thanh ghi không bị ghi đè tùy ý; mỗi measurement mới được “extend” vào chuỗi giá trị cũ.
**Grammar & collocations:** `PCR value` — giá trị PCR; `extend a platform configuration register` — extend PCR.
**Examples:** `The verifier compared the platform configuration register values with the approved boot profile.` → Verifier so sánh giá trị platform configuration register với boot profile đã duyệt.
**Liên kết tiếng Hàn:** `플랫폼 구성 레지스터`.

## 10. sealed storage /siːld ˈstɔrɪdʒ/
**Part of speech:** noun
**Core meaning (English):** storage whose contents can be opened only when the platform or enclave presents an approved state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** secret được “niêm phong” với một measurement; đổi môi trường sai trạng thái thì không mở được.
**Grammar & collocations:** `seal data to a platform state` — seal data với trạng thái platform; `sealed blob` — blob đã niêm phong.
**Examples:** `The enclave kept its session secret in sealed storage so a copied disk was useless elsewhere.` → Enclave giữ session secret trong sealed storage nên disk bị copy sang nơi khác cũng vô dụng.
**Liên kết tiếng Hàn:** `봉인 저장소`.

## 11. memory encryption /ˈmɛməri ɛnˈkrɪpʃən/
**Part of speech:** noun
**Core meaning (English):** encryption applied to data in main memory to reduce the risk of disclosure through physical access or an untrusted host.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dữ liệu trong RAM cũng ở dạng mã hóa thay vì plaintext dễ bị đọc trực tiếp.
**Grammar & collocations:** `memory-encryption key` — key mã hóa memory; `transparent memory encryption` — mã hóa memory trong suốt.
**Examples:** `Memory encryption limited what a compromised hypervisor could inspect.` → Memory encryption hạn chế những gì hypervisor bị compromise có thể đọc.
**Liên kết tiếng Hàn:** `메모리 암호화`.

## 12. integrity tree /ɪnˈtɛɡrəti triː/
**Part of speech:** noun
**Core meaning (English):** a hierarchy of cryptographic checks that lets hardware detect unauthorized changes to protected memory blocks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các hash xếp thành cây; kiểm tra một nhánh có thể phát hiện block memory bị sửa.
**Grammar & collocations:** `integrity-tree metadata` — metadata của integrity tree; `verify an integrity tree` — verify cây integrity.
**Examples:** `The memory controller consulted the integrity tree before accepting a decrypted cache line.` → Memory controller kiểm tra integrity tree trước khi chấp nhận cache line đã giải mã.
**Liên kết tiếng Hàn:** `무결성 트리`.

## 13. attestation quote /ˌætəˈsteɪʃən kwoʊt/
**Part of speech:** noun
**Core meaning (English):** a signed statement containing measurements and other evidence about a trusted platform or enclave.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “bản khai có chữ ký” gói measurement, identity và challenge để bên kia xác minh.
**Grammar & collocations:** `signed attestation quote` — quote có chữ ký; `verify a quote` — verify quote.
**Examples:** `The enclave returned an attestation quote that included the broker's nonce.` → Enclave trả về attestation quote có chứa nonce của broker.
**Liên kết tiếng Hàn:** `증명 인용문`.

## 14. verifier /ˈvɛrəˌfaɪər/
**Part of speech:** noun
**Core meaning (English):** a party or component that checks attestation evidence against an approved policy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bên đọc quote, kiểm tra chữ ký và quyết định trạng thái có đủ tin cậy không.
**Grammar & collocations:** `attestation verifier` — verifier của attestation; `verifier policy` — policy verifier.
**Examples:** `The verifier rejected the quote because the enclave measurement was not on the allowlist.` → Verifier từ chối quote vì measurement của enclave không nằm trong allowlist.
**Liên kết tiếng Hàn:** `검증자`.

## 15. provisioner /prəˈvɪʒənər/
**Part of speech:** noun
**Core meaning (English):** a service that prepares trusted workloads with resources, credentials, or secrets after required checks succeed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** service “cấp phát” môi trường và secret sau khi xác minh xong.
**Grammar & collocations:** `secret provisioner` — service cấp secret; `provision a workload` — provision workload.
**Examples:** `The provisioner delivered a short-lived token only to verified enclaves.` → Provisioner chỉ giao token ngắn hạn cho các enclave đã được xác minh.
**Liên kết tiếng Hàn:** `프로비저너`.

## 16. key sealing /kiː ˈsiːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** the act of encrypting or wrapping a key so it can be recovered only by an approved platform state or enclave identity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khóa được bọc theo measurement/identity; chạy sai môi trường thì không unwrap được.
**Grammar & collocations:** `seal a key to an identity` — seal key với identity; `key-sealing policy` — policy key sealing.
**Examples:** `Key sealing allowed the service to restart without placing its master key in application code.` → Key sealing cho phép service restart mà không đặt master key trong application code.
**Liên kết tiếng Hàn:** `키 봉인`.

## 17. enclave exit /ˈɛnˌkleɪv ˈɛɡzɪt/
**Part of speech:** noun
**Core meaning (English):** a controlled transition from protected enclave execution to the surrounding untrusted software.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm code rời vùng bảo vệ; dữ liệu truyền qua phải được kiểm tra và giảm tối đa.
**Grammar & collocations:** `enclave-exit path` — đường thoát enclave; `handle an enclave exit` — xử lý exit.
**Examples:** `The runtime validated every pointer before allowing an enclave exit.` → Runtime kiểm tra mọi pointer trước khi cho phép enclave exit.
**Liên kết tiếng Hàn:** `엔클레이브 종료`.

## 18. memory integrity /ˈmɛməri ɪnˈtɛɡrəti/
**Part of speech:** noun
**Core meaning (English):** the assurance that protected memory has not been altered without authorization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không chỉ giấu nội dung memory mà còn phát hiện nội dung bị sửa trái phép.
**Grammar & collocations:** `memory-integrity check` — kiểm tra integrity memory; `preserve memory integrity` — giữ integrity memory.
**Examples:** `Memory integrity prevented a modified page from being accepted as valid enclave state.` → Memory integrity ngăn một page bị sửa được chấp nhận là state hợp lệ của enclave.
**Liên kết tiếng Hàn:** `메모리 무결성`.

## 19. rollback protection /ˈroʊlˌbæk prəˈtɛkʃən/
**Part of speech:** noun
**Core meaning (English):** safeguards that prevent a system from being forced back to an older, vulnerable software or data state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** attacker không thể quay về bản cũ có lỗ hổng chỉ bằng cách replay image hoặc snapshot.
**Grammar & collocations:** `rollback-protection counter` — counter chống rollback; `enforce rollback protection` — áp dụng chống rollback.
**Examples:** `Rollback protection stopped an attacker from restoring an enclave image with a known bug.` → Rollback protection ngăn attacker khôi phục enclave image có bug đã biết.
**Liên kết tiếng Hàn:** `롤백 방지`.

## 20. page fault /peɪdʒ fɔlt/
**Part of speech:** noun
**Core meaning (English):** an event raised when a process accesses a virtual memory page that is not currently mapped in physical memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** CPU cần một page chưa có trong RAM mapping nên phải trap để hệ điều hành nạp hoặc xử lý nó.
**Grammar & collocations:** `minor page fault` — page fault nhẹ; `page-fault handler` — handler xử lý page fault.
**Examples:** `A page fault inside the enclave triggered a carefully checked transition to the host kernel.` → Page fault bên trong enclave kích hoạt transition được kiểm tra cẩn thận tới host kernel.
**Liên kết tiếng Hàn:** `페이지 폴트`.

## Review in context

**Confidential computing** protects a workload while it runs inside a **trusted execution environment**, often an **enclave**. Before releasing a secret, a broker requests **attestation** through **remote attestation**. A **hardware root of trust** supports **secure boot** and **measured boot**, whose measurements accumulate in a **platform configuration register**. The workload can keep credentials in **sealed storage**, while **memory encryption** and an **integrity tree** protect confidentiality and **memory integrity**. The enclave returns an **attestation quote**; a **verifier** checks it, and a **provisioner** may then issue credentials. **Key sealing** binds long-lived keys to the approved state. Every **enclave exit** is minimized and checked. Finally, **rollback protection** blocks old vulnerable images, while a **page fault** is handled without silently weakening the trust boundary.

**Bản dịch tiếng Việt:** **Confidential computing** bảo vệ workload trong lúc chạy bên trong **trusted execution environment**, thường là một **enclave**. Trước khi cấp secret, broker yêu cầu **attestation** qua **remote attestation**. **Hardware root of trust** hỗ trợ **secure boot** và **measured boot**, còn measurement được tích lũy trong **platform configuration register**. Workload có thể giữ credential trong **sealed storage**, trong khi **memory encryption** và **integrity tree** bảo vệ tính bí mật và **memory integrity**. Enclave trả về **attestation quote**; **verifier** kiểm tra, rồi **provisioner** có thể cấp credential. **Key sealing** gắn key dài hạn với state đã được phê duyệt. Mọi **enclave exit** đều được giảm thiểu và kiểm tra. Cuối cùng, **rollback protection** chặn image cũ có lỗ hổng, còn **page fault** được xử lý mà không âm thầm làm yếu ranh giới tin cậy.
