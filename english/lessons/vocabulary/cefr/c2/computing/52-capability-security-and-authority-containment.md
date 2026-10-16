# C2 Vocabulary — Capability security and authority containment

This lesson follows a delegated authority from creation through attenuation, revocation, isolation, and information-flow review.

Flow: **capability security → object-capability model → ambient authority → confused deputy → privilege attenuation → reference monitor → security monotonicity → least-authority decomposition → privilege separation → sandbox escape → capability revocation → delegation token → authority amplification → security reference monitor → taint provenance → information-flow label → declassification rule → authority confinement → revocation latency → capability audit trail**.

## 1. capability security /ˌkeɪpəˈbɪləti sɪˈkjʊrəti/
**Part of speech:** noun
**Core meaning (English):** a security approach in which possession of an unforgeable capability determines which resource operations a program may perform.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyền truy cập nằm trong capability không thể giả mạo.
**Grammar & collocations:** `capability-security design` — design; `grant a narrowly scoped right` — cấp.
**Examples:** `Capability security let the plugin read one document without inheriting the user's whole filesystem.` → Capability security giới hạn plugin chỉ đọc một tài liệu.
**Liên kết tiếng Hàn:** `역량 기반 보안`.

## 2. object-capability model /ˈɑbdʒɪkt keɪpəˈbɪləti ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model in which object references combine authority with the ability to invoke an object.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reference tới object đồng thời mang quyền gọi object.
**Grammar & collocations:** `object-capability-model runtime` — runtime; `pass a restricted reference` — truyền.
**Examples:** `The object-capability model prevented a helper from discovering resources it had not received.` → Mô hình ngăn helper tự tìm resource chưa được cấp.
**Liên kết tiếng Hàn:** `객체 능력 모델`.

## 3. ambient authority /ˈæmbiənt əˈθɔrəti/
**Part of speech:** noun
**Core meaning (English):** authority available implicitly from a global context rather than explicitly through a narrowly scoped reference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyền toàn cục chương trình tự có mà không cần nhận reference.
**Grammar & collocations:** `ambient-authority hazard` — hazard; `eliminate implicit access` — loại bỏ.
**Examples:** `Removing ambient authority made the file operation auditable at the call site.` → Bỏ quyền ambient làm thao tác file audit được tại nơi gọi.
**Liên kết tiếng Hàn:** `주변 권한`.

## 4. confused deputy /kənˈfjuːzd ˈdɛpjəti/
**Part of speech:** noun
**Core meaning (English):** a trusted component tricked into using its own authority on behalf of an untrusted caller.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thành phần tin cậy bị caller lừa dùng quyền của nó.
**Grammar & collocations:** `confused-deputy flaw` — flaw; `bind authority to the requester` — ràng buộc.
**Examples:** `An explicit capability prevented the image service from becoming a confused deputy for arbitrary paths.` → Capability rõ ràng ngăn service ảnh thành confused deputy.
**Liên kết tiếng Hàn:** `혼동된 대리인`.

## 5. privilege attenuation /ˈprɪvəlɪdʒ əˌtɛnjuˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** reducing the authority carried by a capability before delegating it to another component.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** làm capability yếu hơn trước khi ủy quyền.
**Grammar & collocations:** `privilege-attenuation wrapper` — wrapper; `remove a write right` — bỏ.
**Examples:** `Privilege attenuation gave the worker read access to one table and no schema privileges.` → Attenuation chỉ cho worker đọc một bảng.
**Liên kết tiếng Hàn:** `권한 감쇠`.

## 6. reference monitor /ˈrɛfərəns ˈmɑnətər/
**Part of speech:** noun
**Core meaning (English):** a small, tamper-resistant mechanism that mediates every access to a protected resource.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế nhỏ, khó sửa, kiểm soát mọi truy cập.
**Grammar & collocations:** `reference-monitor property` — property; `mediate every operation` — trung gian.
**Examples:** `The reference monitor logged each capability invocation before forwarding the request.` → Reference monitor log từng lần gọi capability.
**Liên kết tiếng Hàn:** `참조 모니터`.

## 7. security monotonicity /sɪˈkjʊrəti ˌmɑnəˈtɑnəsəti/
**Part of speech:** noun
**Core meaning (English):** the property that adding more authorized components cannot silently grant an existing component more authority.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thêm component không tự làm quyền component cũ tăng.
**Grammar & collocations:** `security-monotonicity argument` — argument; `preserve authority bounds` — giữ.
**Examples:** `Security monotonicity failed when a new plugin inherited the process's administrator token.` → Monotonicity fail khi plugin mới thừa hưởng token admin.
**Liên kết tiếng Hàn:** `보안 단조성`.

## 8. least-authority decomposition /liːst əˈθɔrəti ˌdiːkəmˈpoʊzɪʃən/
**Part of speech:** noun
**Core meaning (English):** splitting a system so each component receives only the authority required for its individual task.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia hệ thống để mỗi component chỉ nhận quyền cần thiết.
**Grammar & collocations:** `least-authority-decomposition plan` — plan; `split a privileged service` — tách.
**Examples:** `Least-authority decomposition moved certificate signing into a process with no network access.` → Decomposition đưa ký certificate vào process không có mạng.
**Liên kết tiếng Hàn:** `최소 권한 분해`.

## 9. privilege separation /ˈprɪvəlɪdʒ ˌsɛpəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** placing operations with different authority levels in separate processes or protection domains.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách operation theo mức quyền thành domain riêng.
**Grammar & collocations:** `privilege-separation boundary` — boundary; `drop privileges after setup` — hạ.
**Examples:** `Privilege separation kept the parser unprivileged while a tiny broker opened the device.` → Tách quyền giữ parser không đặc quyền.
**Liên kết tiếng Hàn:** `권한 분리`.

## 10. sandbox escape /ˈsændbɑks ɪˈskeɪp/
**Part of speech:** noun
**Core meaning (English):** an exploit or failure that lets code leave an intended execution restriction and access forbidden resources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code thoát khỏi sandbox và chạm resource cấm.
**Grammar & collocations:** `sandbox-escape path` — path; `contain an exploit` — containment.
**Examples:** `The review focused on whether a malformed archive could cause a sandbox escape.` → Review tập trung xem archive lỗi có thoát sandbox không.
**Liên kết tiếng Hàn:** `샌드박스 탈출`.

## 11. capability revocation /keɪpəˈbɪləti ˌrɛvəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** invalidating a previously granted capability so that later use is refused.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vô hiệu capability đã cấp.
**Grammar & collocations:** `capability-revocation mechanism` — mechanism; `invalidate a delegated right` — vô hiệu.
**Examples:** `Capability revocation blocked the worker immediately after the customer's session closed.` → Revocation chặn worker ngay khi session đóng.
**Liên kết tiếng Hàn:** `능력 폐기`.

## 12. delegation token /ˌdɛləˈɡeɪʃən ˈtoʊkən/
**Part of speech:** noun
**Core meaning (English):** a credential that transfers a deliberately limited authority from one principal to another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** token chuyển một quyền giới hạn giữa principal.
**Grammar & collocations:** `delegation-token scope` — scope; `delegate a single action` — ủy quyền.
**Examples:** `The delegation token expired before the batch worker could reuse it for a second customer.` → Token hết hạn trước khi worker dùng lại cho khách khác.
**Liên kết tiếng Hàn:** `위임 토큰`.

## 13. authority amplification /əˈθɔrəti ˌæmpləfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** an unintended increase in effective authority when components combine or transform credentials.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghép credential làm quyền thực tế tăng ngoài dự kiến.
**Grammar & collocations:** `authority-amplification bug` — bug; `prevent privilege composition` — ngăn.
**Examples:** `Authority amplification occurred when two read-only tokens together unlocked an administrative endpoint.` → Ghép hai token read-only lại mở endpoint admin.
**Liên kết tiếng Hàn:** `권한 증폭`.

## 14. security reference monitor /sɪˈkjʊrəti ˈrɛfərəns ˈmɑnətər/
**Part of speech:** noun
**Core meaning (English):** a reference monitor specifically responsible for enforcing security policy at a protection boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** monitor an ninh thực thi policy ở ranh giới bảo vệ.
**Grammar & collocations:** `security-reference-monitor interface` — interface; `audit mediated access` — audit.
**Examples:** `The security reference monitor denied a cross-tenant handle before it reached the storage driver.` → Monitor từ chối handle khác tenant trước driver.
**Liên kết tiếng Hàn:** `보안 참조 모니터`.

## 15. taint provenance /teɪnt ˈprɑvənəns/
**Part of speech:** noun
**Core meaning (English):** the recorded origin and propagation history of data marked as untrusted or sensitive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nguồn gốc và đường lan của dữ liệu bị đánh dấu.
**Grammar & collocations:** `taint-provenance graph` — graph; `trace untrusted input` — truy vết.
**Examples:** `Taint provenance showed that the exported report included a value from an unvalidated header.` → Provenance cho thấy report lấy giá trị từ header chưa validate.
**Liên kết tiếng Hàn:** `오염 출처`.

## 16. information-flow label /ˌɪnfərˈmeɪʃən floʊ ˈleɪbəl/
**Part of speech:** noun
**Core meaning (English):** a label describing the confidentiality, integrity, or trust status that must travel with data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhãn bảo mật/toàn vẹn đi cùng dữ liệu.
**Grammar & collocations:** `information-flow-label lattice` — lattice; `propagate a confidentiality tag` — lan truyền.
**Examples:** `The information-flow label prevented a secret value from entering the public telemetry stream.` → Label ngăn secret vào telemetry công khai.
**Liên kết tiếng Hàn:** `정보 흐름 레이블`.

## 17. declassification rule /diˌklæsəfəˈkeɪʃən ruːl/
**Part of speech:** noun
**Core meaning (English):** an explicit rule allowing data to move from a more restricted security class to a less restricted one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule rõ ràng cho phép hạ mức hạn chế của data.
**Grammar & collocations:** `declassification-rule review` — review; `release an approved aggregate` — phát hành.
**Examples:** `A declassification rule released only an aggregate count, never individual identifiers.` → Rule chỉ phát hành số tổng hợp, không identifier.
**Liên kết tiếng Hàn:** `기밀 해제 규칙`.

## 18. authority confinement /əˈθɔrəti kənˈfaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** keeping delegated authority within a defined component, resource set, or time window.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ quyền ủy quyền trong phạm vi rõ.
**Grammar & collocations:** `authority-confinement boundary` — boundary; `limit a token's reach` — giới hạn.
**Examples:** `Authority confinement kept the migration credential inside one staging account.` → Confinement giữ credential migration trong một account staging.
**Liên kết tiếng Hàn:** `권한 격리`.

## 19. revocation latency /ˌrɛvəˈkeɪʃən ˈleɪtənsi/
**Part of speech:** noun
**Core meaning (English):** the delay between withdrawing authority and all enforcement points refusing its use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ trễ từ lúc thu hồi tới lúc mọi nơi chặn quyền.
**Grammar & collocations:** `revocation-latency SLO` — SLO; `propagate an invalidation` — lan truyền.
**Examples:** `Revocation latency stayed below the incident-response objective across the regional caches.` → Latency thu hồi thấp hơn mục tiêu response.
**Liên kết tiếng Hàn:** `폐기 지연 시간`.

## 20. capability audit trail /keɪpəˈbɪləti ˈɔdɪt treɪl/
**Part of speech:** noun
**Core meaning (English):** a chronological record of capability creation, delegation, use, and revocation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhật ký vòng đời capability.
**Grammar & collocations:** `capability-audit-trail query` — query; `reconstruct authority history` — dựng lại.
**Examples:** `The capability audit trail reconstructed which service had authorized the export.` → Audit trail cho thấy service nào cho phép export.
**Liên kết tiếng Hàn:** `능력 감사 추적`.

## Review in context

**Capability security** and the **object-capability model** avoid **ambient authority** and the **confused deputy** problem. **Privilege attenuation**, a **reference monitor**, and **security monotonicity** support **least-authority decomposition** and **privilege separation**, reducing **sandbox escape** risk. **Capability revocation** and a scoped **delegation token** limit **authority amplification** at the **security reference monitor**. **Taint provenance** and an **information-flow label** guide a **declassification rule**. **Authority confinement**, **revocation latency**, and a **capability audit trail** make the boundary measurable.

**Bản dịch tiếng Việt:** **Capability security** và **object-capability model** tránh **ambient authority** và lỗi **confused deputy**. **Privilege attenuation**, **reference monitor** và **security monotonicity** hỗ trợ **least-authority decomposition** cùng **privilege separation**, giảm nguy cơ **sandbox escape**. **Capability revocation** và **delegation token** có scope giới hạn **authority amplification** tại **security reference monitor**. **Taint provenance** và **information-flow label** dẫn dắt **declassification rule**. **Authority confinement**, **revocation latency** và **capability audit trail** làm ranh giới đo được.
