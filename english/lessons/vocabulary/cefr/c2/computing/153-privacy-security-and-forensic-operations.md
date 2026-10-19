# C2 Vocabulary — Privacy, security, and forensic operations

This lesson follows protected data from lineage and policy through cryptographic custody, privacy controls, detection, and incident reconstruction.

Flow: **column lineage → provenance graph → policy as code → privileged session → key derivation → hardware security module → secure enclave → differential privacy budget → privacy equivalence class → data masking → format-preserving encryption → tokenization scheme → deletion tombstone → right to erasure → compensating control → patch window → exploit mitigation → intrusion signature → security information and event management → incident timeline**.

## 1. column lineage /ˈkɒləm ˈlɪniɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a record showing how one data column was derived from columns in upstream sources and transformed downstream.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record cho thấy column sinh từ nguồn upstream và biến đổi downstream thế nào.
**Grammar & collocations:** `column-lineage graph` — graph; `trace a derived field` — truy.
**Examples:** `Column lineage showed which source fields contributed to the regulated report.` → Lineage cho thấy field nguồn nào góp vào report quản lý.
**Liên kết tiếng Hàn:** `열 계보`.

## 2. provenance graph /ˈprɒvənəns ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph linking data, transformations, actors, and systems to show where an output came from.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph nối data, transformation, actor và system để chỉ nguồn output.
**Grammar & collocations:** `provenance-graph edge` — cạnh; `follow an origin path` — lần theo.
**Examples:** `The provenance graph connected the exported metric to the job and source dataset that produced it.` → Graph nối metric với job và dataset nguồn.
**Liên kết tiếng Hàn:** `출처 그래프`.

## 3. policy as code /ˈpɒləsi æz koʊd/
**Part of speech:** noun
**Core meaning (English):** expressing governance or security rules in executable, versioned configuration that tools can test.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** viết rule governance/security thành config executable có version để tool test.
**Grammar & collocations:** `policy-as-code repository` — repository; `evaluate a rule automatically` — đánh giá.
**Examples:** `Policy as code blocked public storage before the infrastructure change was applied.` → Policy dạng code chặn storage public trước khi apply.
**Liên kết tiếng Hàn:** `코드로서의 정책`.

## 4. privileged session /ˈprɪvəlɪdʒd ˈseʃən/
**Part of speech:** noun
**Core meaning (English):** a monitored period in which an operator or service uses elevated permissions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian có monitor khi operator/service dùng quyền cao.
**Grammar & collocations:** `privileged-session recording` — ghi; `approve an elevated session` — duyệt.
**Examples:** `The privileged session required a ticket and recorded every command issued.` → Session quyền cao cần ticket và ghi mọi command.
**Liên kết tiếng Hàn:** `특권 세션`.

## 5. key derivation /kiː ˌderɪˈveɪʃən/
**Part of speech:** noun
**Core meaning (English):** generating a cryptographic key from a secret and context using a deliberate one-way function.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sinh key crypto từ secret và context bằng hàm một chiều có chủ ý.
**Grammar & collocations:** `key-derivation function` — function; `derive a session key` — sinh.
**Examples:** `Key derivation produced a separate session key from the user's long-term secret.` → Derivation tạo session key riêng từ secret dài hạn.
**Liên kết tiếng Hàn:** `키 파생`.

## 6. hardware security module /ˈhɑːrdwer sɪˈkjʊərəti ˈmɒdjuːl/
**Part of speech:** noun
**Core meaning (English):** a tamper-resistant device that generates, stores, and uses cryptographic keys without exposing them directly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết bị chống can thiệp tạo/lưu/dùng key mà không lộ key trực tiếp.
**Grammar & collocations:** `hardware-security-module slot` — slot; `unwrap a key inside the module` — mở.
**Examples:** `The hardware security module signed the release without exporting its private key.` → HSM ký release mà không export private key.
**Liên kết tiếng Hàn:** `하드웨어 보안 모듈`.

## 7. secure enclave /sɪˈkjʊər ˈenkleɪv/
**Part of speech:** noun
**Core meaning (English):** an isolated execution area designed to protect code and data from the surrounding operating system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng execution cô lập bảo vệ code/data khỏi OS bên ngoài.
**Grammar & collocations:** `secure-enclave measurement` — measurement; `seal a secret in the enclave` — niêm phong.
**Examples:** `The secure enclave processed the biometric template without returning the raw value.` → Enclave xử lý template mà không trả value thô.
**Liên kết tiếng Hàn:** `보안 엔클레이브`.

## 8. differential privacy budget /ˌdɪfəˈrenʃəl ˈpraɪvəsi ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a tracked limit on how much privacy loss a collection of statistical queries may consume.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn privacy loss được theo dõi qua nhiều query thống kê.
**Grammar & collocations:** `differential-privacy-budget ledger` — ledger; `spend privacy loss` — tiêu.
**Examples:** `The dashboard refused another breakdown after the differential privacy budget was exhausted.` → Dashboard từ chối breakdown khi budget hết.
**Liên kết tiếng Hàn:** `차등 개인정보 보호 예산`.

## 9. privacy equivalence class /ˈpraɪvəsi ɪˈkwɪvələns klæs/
**Part of speech:** noun
**Core meaning (English):** a group of released records that share the same identifying pattern for a chosen privacy analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm record công khai có cùng pattern nhận diện trong một phân tích privacy.
**Grammar & collocations:** `privacy-equivalence-class size` — kích thước; `group quasi-identifiers` — nhóm.
**Examples:** `The analyst enlarged each privacy equivalence class before publishing the table.` → Analyst làm mỗi class privacy lớn hơn trước khi công bố table.
**Liên kết tiếng Hàn:** `k-익명성`.

## 10. data masking /ˈdeɪtə ˈmæskɪŋ/
**Part of speech:** noun
**Core meaning (English):** obscuring sensitive values while preserving enough structure for testing, support, or analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** che value nhạy cảm nhưng giữ structure cần cho test/support/analysis.
**Grammar & collocations:** `data-masking rule` — rule; `mask a customer identifier` — che.
**Examples:** `Data masking replaced the account number while keeping its format for integration tests.` → Masking thay account number nhưng giữ format.
**Liên kết tiếng Hàn:** `데이터 마스킹`.

## 11. format-preserving encryption /ˈfɔːrmæt prɪˈzɜːrvɪŋ enˈkrɪpʃən/
**Part of speech:** noun
**Core meaning (English):** encryption that keeps the ciphertext in the same character set and shape as the original value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã hóa nhưng ciphertext giữ character set và hình dạng value gốc.
**Grammar & collocations:** `format-preserving-encryption key` — key; `encrypt a fixed-length identifier` — mã hóa.
**Examples:** `Format-preserving encryption protected the account field without changing the legacy schema.` → Encryption bảo vệ field mà không đổi schema cũ.
**Liên kết tiếng Hàn:** `형식 보존 암호화`.

## 12. tokenization scheme /ˌtoʊkənəˈzeɪʃən skiːm/
**Part of speech:** noun
**Core meaning (English):** a design that replaces sensitive values with non-sensitive tokens and controls how they can be resolved.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết kế thay value nhạy cảm bằng token và kiểm soát cách resolve.
**Grammar & collocations:** `tokenization-scheme vault` — vault; `detokenize under authorization` — giải token.
**Examples:** `The tokenization scheme let support search references without exposing payment numbers.` → Scheme cho support tìm reference mà không lộ số payment.
**Liên kết tiếng Hàn:** `토큰화 방식`.

## 13. deletion tombstone /dɪˈliːʃən ˈtuːmstoʊn/
**Part of speech:** noun
**Core meaning (English):** a durable marker stating that a record was deleted and should not be recreated by stale replicas.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** marker bền vững báo record đã xóa để replica cũ không tạo lại.
**Grammar & collocations:** `deletion-tombstone record` — record; `propagate a delete marker` — lan.
**Examples:** `The deletion tombstone prevented an offline replica from resurrecting the profile.` → Tombstone ngăn replica offline hồi sinh profile.
**Liên kết tiếng Hàn:** `삭제 툼스톤`.

## 14. right to erasure /raɪt tu ˈɪreɪʒər/
**Part of speech:** noun
**Core meaning (English):** a person's recognized request for qualifying personal data to be deleted from a service.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** yêu cầu được công nhận để xóa personal data đủ điều kiện khỏi service.
**Grammar & collocations:** `right-to-erasure request` — request; `verify a deletion scope` — xác định.
**Examples:** `The privacy service tracked the right to erasure across backups and derived indexes.` → Service theo dõi quyền xóa qua backup và index dẫn xuất.
**Liên kết tiếng Hàn:** `삭제 권리`.

## 15. compensating control /ˈkɒmpənseɪtɪŋ kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** an alternative safeguard used when the preferred security control cannot be implemented.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biện pháp bảo vệ thay thế khi control chính không triển khai được.
**Grammar & collocations:** `compensating-control review` — review; `offset a missing safeguard` — bù.
**Examples:** `A compensating control restricted access while the legacy system awaited an upgrade.` → Control bù hạn chế access khi hệ cũ chờ nâng cấp.
**Liên kết tiếng Hàn:** `보상 통제`.

## 16. patch window /pætʃ ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** an agreed period when software or infrastructure may be updated with controlled disruption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian đã thống nhất để update với gián đoạn có kiểm soát.
**Grammar & collocations:** `patch-window approval` — approval; `schedule a maintenance update` — lên lịch.
**Examples:** `The team reserved a patch window before the vendor's security fix expired.` → Team dành patch window trước khi fix vendor hết hiệu lực.
**Liên kết tiếng Hàn:** `패치 기간`.

## 17. exploit mitigation /ˈeksplɔɪt ˌmɪtɪˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a technical measure that makes a known vulnerability harder to exploit or limits its impact.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biện pháp làm lỗ hổng khó exploit hơn hoặc giảm impact.
**Grammar & collocations:** `exploit-mitigation feature` — feature; `reduce code-execution impact` — giảm.
**Examples:** `The exploit mitigation blocked executable memory in the untrusted plugin process.` → Mitigation chặn memory executable trong process plugin.
**Liên kết tiếng Hàn:** `익스플로잇 완화`.

## 18. intrusion signature /ɪnˈtruːʒən ˈsɪɡnətʃər/
**Part of speech:** noun
**Core meaning (English):** a recognizable pattern used to identify a suspected attack in traffic, files, or behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pattern nhận diện attack nghi ngờ trong traffic, file hoặc behavior.
**Grammar & collocations:** `intrusion-signature update` — update; `match a malicious pattern` — khớp.
**Examples:** `The sensor matched an intrusion signature associated with credential dumping.` → Sensor khớp signature của credential dumping.
**Liên kết tiếng Hàn:** `침입 시그니처`.

## 19. security information and event management /sɪˈkjʊərəti ˌɪnfərˈmeɪʃən ənd ɪˈvent ˈmænɪdʒmənt/
**Part of speech:** noun
**Core meaning (English):** a platform that collects, correlates, and analyzes security logs and alerts across systems.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** platform thu, liên kết và phân tích security log/alert từ nhiều system.
**Grammar & collocations:** `security-information-and-event-management rule` — rule; `correlate authentication events` — liên kết.
**Examples:** `Security information and event management correlated the login spike with a new intrusion signature.` → SIEM liên kết login spike với signature mới.
**Liên kết tiếng Hàn:** `보안 정보 및 이벤트 관리`.

## 20. incident timeline /ˈɪnsɪdənt ˈtaɪmlaɪn/
**Part of speech:** noun
**Core meaning (English):** a time-ordered account of observations, actions, and decisions during a security incident.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** account theo thời gian của observation, action và decision trong incident.
**Grammar & collocations:** `incident-timeline entry` — entry; `reconstruct the first compromise` — dựng lại.
**Examples:** `The incident timeline showed that the token was abused minutes after the privileged session began.` → Timeline cho thấy token bị lạm dụng vài phút sau session quyền cao.
**Liên kết tiếng Hàn:** `사고 타임라인`.

## Review in context

**Column lineage** and a **provenance graph** show where data came from; **policy as code** can enforce access before release. A **privileged session** uses **key derivation**, while a **hardware security module** and **secure enclave** protect secrets. A **differential privacy budget**, a **privacy equivalence class**, and **data masking** limit disclosure; **format-preserving encryption** and a **tokenization scheme** protect identifiers. A **deletion tombstone** supports a **right to erasure** across replicas. A **compensating control** covers a gap until the **patch window**; **exploit mitigation** blocks abuse, an **intrusion signature** detects it, **security information and event management** correlates evidence, and an **incident timeline** reconstructs the response.

**Bản dịch tiếng Việt:** **Column lineage** và **provenance graph** cho biết data đến từ đâu; **policy as code** có thể enforce access trước khi phát hành. **Privileged session** dùng **key derivation**, còn **hardware security module** và **secure enclave** bảo vệ secret. **Differential privacy budget**, **privacy equivalence class** và **data masking** hạn chế lộ data; **format-preserving encryption** và **tokenization scheme** bảo vệ identifier. **Deletion tombstone** hỗ trợ **right to erasure** qua các replica. **Compensating control** bù khoảng trống đến **patch window**; **exploit mitigation** chặn lạm dụng, **intrusion signature** phát hiện, **security information and event management** liên kết evidence, còn **incident timeline** dựng lại response.
