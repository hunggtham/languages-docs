# C2 Vocabulary — Security audit evidence and log integrity

This lesson follows an auditable action from actor and request context through tamper evidence, retention, investigation, and export.

Flow: **actor identity → request provenance → tamper-evident log → hash chain → retention class → redaction rule → sequence gap → clock source → log sink → audit partition → access justification → approval evidence → replay audit → immutable ledger → forensic snapshot → event normalization → audit query → audit trail entry → security event → evidence bundle**.

## 1. actor identity /ˈæktər aɪˈdentəti/
**Part of speech:** noun
**Core meaning (English):** the verified person, service, or process responsible for an auditable action.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** người, service hoặc process được xác minh là chủ thể của action audit.
**Grammar & collocations:** `actor-identity assertion` — assertion; `attribute a change to a service` — quy.
**Examples:** `The actor identity linked the export to the service account that requested it.` → Identity nối export với service account.
**Liên kết tiếng Hàn:** `행위자 신원`.

## 2. request provenance /rɪˈkwest ˈprɒvənəns/
**Part of speech:** noun
**Core meaning (English):** evidence showing where a request came from, which context it carried, and how it reached a system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** evidence về nguồn request, context và đường đi vào system.
**Grammar & collocations:** `request-provenance field` — field; `trace an originating client` — truy.
**Examples:** `Request provenance showed that the approval came through the regulated portal.` → Provenance cho thấy approval qua portal quản lý.
**Liên kết tiếng Hàn:** `요청 출처`.

## 3. tamper-evident log /ˈtæmpər ˈevɪdənt lɒɡ/
**Part of speech:** noun
**Core meaning (English):** a log designed so unauthorized alteration can be detected even if prevention is impossible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** log được thiết kế để phát hiện sửa trái phép dù không ngăn được hoàn toàn.
**Grammar & collocations:** `tamper-evident-log verification` — kiểm tra; `detect an altered entry` — phát hiện.
**Examples:** `The tamper-evident log exposed a missing event between two signed records.` → Log lộ event bị mất giữa hai record ký.
**Liên kết tiếng Hàn:** `변조 증거 로그`.

## 4. hash chain /hæʃ tʃeɪn/
**Part of speech:** noun
**Core meaning (English):** a sequence in which each record's digest incorporates the previous record, revealing reordering or deletion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi digest mỗi record chứa record trước, lộ reorder/delete.
**Grammar & collocations:** `hash-chain link` — link; `verify sequential integrity` — xác minh.
**Examples:** `The hash chain showed that an old audit entry had been removed from the middle.` → Chain cho thấy entry cũ bị xóa giữa.
**Liên kết tiếng Hàn:** `해시 체인`.

## 5. retention class /rɪˈtenʃən klæs/
**Part of speech:** noun
**Core meaning (English):** a category determining how long evidence must remain stored and what handling rules apply.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** category quyết định evidence lưu bao lâu và xử lý thế nào.
**Grammar & collocations:** `retention-class assignment` — assignment; `place an event in regulated storage` — đặt.
**Examples:** `The retention class kept privileged-access events longer than ordinary diagnostics.` → Class giữ event quyền cao lâu hơn.
**Liên kết tiếng Hàn:** `보존 등급`.

## 6. redaction rule /rɪˈdækʃən ruːl/
**Part of speech:** noun
**Core meaning (English):** a rule specifying which sensitive fields must be removed or obscured in an audit copy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule nêu field nhạy cảm phải bỏ hoặc che trong bản audit.
**Grammar & collocations:** `redaction-rule exception` — ngoại lệ; `mask a credential value` — che.
**Examples:** `The redaction rule hid the access token while leaving the request decision visible.` → Rule che token nhưng giữ decision.
**Liên kết tiếng Hàn:** `삭제 규칙`.

## 7. sequence gap /ˈsiːkwəns ɡæp/
**Part of speech:** noun
**Core meaning (English):** a missing interval in an ordered event or log sequence that may indicate loss or tampering.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thiếu trong sequence có thứ tự, có thể là mất hoặc sửa.
**Grammar & collocations:** `sequence-gap alert` — alert; `investigate a missing range` — điều tra.
**Examples:** `The sequence gap triggered an investigation into the collector that handled the region.` → Gap kích hoạt điều tra collector.
**Liên kết tiếng Hàn:** `시퀀스 공백`.

## 8. clock source /klɒk sɔːrs/
**Part of speech:** noun
**Core meaning (English):** the reference used to timestamp audit events and compare their ordering across systems.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tham chiếu dùng timestamp event audit và so thứ tự giữa system.
**Grammar & collocations:** `clock-source identifier` — identifier; `record a trusted time` — ghi.
**Examples:** `The clock source was recorded so investigators could interpret timestamps from different hosts.` → Source clock được ghi để hiểu timestamp.
**Liên kết tiếng Hàn:** `시계 소스`.

## 9. log sink /lɒɡ sɪŋk/
**Part of speech:** noun
**Core meaning (English):** a destination that receives, stores, or forwards audit and security log records.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đích nhận, lưu hoặc forward log audit/security.
**Grammar & collocations:** `log-sink delivery` — delivery; `route events to isolated storage` — định tuyến.
**Examples:** `The log sink stored privileged actions outside the application account's control.` → Sink lưu action quyền cao ngoài app account.
**Liên kết tiếng Hàn:** `로그 싱크`.

## 10. audit partition /ˈɔːdɪt pɑːrˈtɪʃən/
**Part of speech:** noun
**Core meaning (English):** a separate storage or query partition containing a defined slice of audit evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** partition storage/query riêng chứa slice evidence audit.
**Grammar & collocations:** `audit-partition boundary` — boundary; `isolate a tenant's events` — cô lập.
**Examples:** `The audit partition separated healthcare events from general application logs.` → Partition tách event healthcare.
**Liên kết tiếng Hàn:** `감사 파티션`.

## 11. access justification /ˈækses ˌdʒʌstɪfɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the documented reason a person or service needed to access protected information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lý do được ghi nhận khi người/service cần truy cập data bảo vệ.
**Grammar & collocations:** `access-justification field` — field; `record a business purpose` — ghi.
**Examples:** `The access justification stated that the engineer was diagnosing a customer-visible outage.` → Justification ghi lý do chẩn đoán outage.
**Liên kết tiếng Hàn:** `접근 정당화`.

## 12. approval evidence /əˈpruːvəl ˈevɪdəns/
**Part of speech:** noun
**Core meaning (English):** records proving who approved an action, when, and under which policy or scope.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record chứng minh ai duyệt, lúc nào và theo policy/scope nào.
**Grammar & collocations:** `approval-evidence bundle` — bundle; `verify a dual authorization` — xác minh.
**Examples:** `Approval evidence showed that two officers authorized the emergency export.` → Evidence cho thấy hai officer duyệt export.
**Liên kết tiếng Hàn:** `승인 증거`.

## 13. replay audit /ˈriːpleɪ ˈɔːdɪt/
**Part of speech:** noun
**Core meaning (English):** reprocessing historical audit records to verify decisions, detect anomalies, or reconstruct a timeline.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xử lý lại record audit để verify decision, tìm anomaly hoặc dựng timeline.
**Grammar & collocations:** `replay-audit job` — job; `reconstruct a decision path` — dựng.
**Examples:** `The replay audit reconstructed every privilege change during the investigation period.` → Audit dựng mọi thay đổi privilege.
**Liên kết tiếng Hàn:** `재생 감사`.

## 14. immutable ledger /ɪˈmjuːtəbəl ˈledʒər/
**Part of speech:** noun
**Core meaning (English):** a record system in which committed entries cannot be edited or removed through ordinary operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ record entry commit không thể sửa/xóa bằng operation thường.
**Grammar & collocations:** `immutable-ledger entry` — entry; `append a corrective event` — thêm.
**Examples:** `The immutable ledger appended a correction instead of changing the original access event.` → Ledger thêm correction thay vì sửa event gốc.
**Liên kết tiếng Hàn:** `불변 원장`.

## 15. forensic snapshot /fəˈrensɪk ˈsnæpʃɒt/
**Part of speech:** noun
**Core meaning (English):** a preserved copy of system state and evidence captured for investigation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản copy state/evidence giữ lại để điều tra.
**Grammar & collocations:** `forensic-snapshot hash` — hash; `preserve volatile evidence` — giữ.
**Examples:** `The forensic snapshot captured active sessions before the compromised host was rebuilt.` → Snapshot chụp session trước rebuild host.
**Liên kết tiếng Hàn:** `법의학 스냅샷`.

## 16. event normalization /ɪˈvent ˌnɔːrməlaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** converting records from different producers into a common audit event structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi record nhiều producer thành structure audit chung.
**Grammar & collocations:** `event-normalization schema` — schema; `align actor and action fields` — căn.
**Examples:** `Event normalization made database and gateway logs searchable by one actor field.` → Normalization giúp tìm chung actor.
**Liên kết tiếng Hàn:** `이벤트 정규화`.

## 17. audit query /ˈɔːdɪt ˈkwɪəri/
**Part of speech:** noun
**Core meaning (English):** a query retrieving evidence about actions, actors, resources, policies, or time ranges.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** query lấy evidence về action, actor, resource, policy hoặc time.
**Grammar & collocations:** `audit-query filter` — filter; `find all privileged exports` — tìm.
**Examples:** `The audit query found every privileged export involving the affected account.` → Query tìm mọi export quyền cao.
**Liên kết tiếng Hàn:** `감사 쿼리`.

## 18. audit trail entry /ˈɔːdɪt treɪl ˈentri/
**Part of speech:** noun
**Core meaning (English):** one time-stamped record in the history of a system action or decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record có timestamp trong lịch sử action/decision system.
**Grammar & collocations:** `audit-trail-entry schema` — schema; `link an action to a request` — nối.
**Examples:** `The audit trail entry linked the permission change to its approval ticket.` → Entry nối permission change với ticket.
**Liên kết tiếng Hàn:** `감사 추적 항목`.

## 19. security event /sɪˈkjʊərəti ɪˈvent/
**Part of speech:** noun
**Core meaning (English):** a recorded occurrence relevant to authentication, authorization, integrity, or threat detection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** occurrence ghi nhận liên quan auth, authorization, integrity hoặc threat.
**Grammar & collocations:** `security-event severity` — severity; `escalate a suspicious login` — nâng.
**Examples:** `The security event recorded an impossible login sequence across two regions.` → Event ghi login bất khả ở hai vùng.
**Liên kết tiếng Hàn:** `보안 이벤트`.

## 20. evidence bundle /ˈevɪdəns ˈbʌndəl/
**Part of speech:** noun
**Core meaning (English):** a packaged collection of logs, snapshots, approvals, hashes, and explanations prepared for review.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gói gồm log, snapshot, approval, hash và explanation để review.
**Grammar & collocations:** `evidence-bundle manifest` — manifest; `submit an investigation package` — nộp.
**Examples:** `The evidence bundle gave auditors the logs and hashes needed to verify the incident timeline.` → Bundle cho auditor log/hash để verify timeline.
**Liên kết tiếng Hàn:** `증거 번들`.

## Review in context

An **actor identity** and **request provenance** explain who initiated an action; a **tamper-evident log** and **hash chain** reveal alteration. A **retention class** sets duration, a **redaction rule** protects secrets, a **sequence gap** signals loss, and a **clock source** anchors time. A **log sink** stores evidence in an **audit partition**; **access justification** and **approval evidence** explain authority. A **replay audit** reconstructs decisions, an **immutable ledger** preserves originals, and a **forensic snapshot** captures state. **Event normalization** enables an **audit query**, each **audit trail entry** records action, a **security event** marks risk, and an **evidence bundle** packages proof.

**Bản dịch tiếng Việt:** **Actor identity** và **request provenance** giải thích ai khởi tạo action; **tamper-evident log** và **hash chain** lộ việc sửa. **Retention class** đặt thời hạn, **redaction rule** bảo vệ secret, **sequence gap** báo mất, còn **clock source** neo thời gian. **Log sink** lưu evidence trong **audit partition**; **access justification** và **approval evidence** giải thích authority. **Replay audit** dựng decision, **immutable ledger** giữ bản gốc, và **forensic snapshot** chụp state. **Event normalization** hỗ trợ **audit query**, mỗi **audit trail entry** ghi action, **security event** đánh dấu risk, còn **evidence bundle** đóng gói bằng chứng.
