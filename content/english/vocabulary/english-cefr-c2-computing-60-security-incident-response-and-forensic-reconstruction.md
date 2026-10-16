# C2 Vocabulary — Security incident response and forensic reconstruction

This lesson follows a suspected compromise from evidence capture through containment, eradication, recovery, and organizational learning.

Flow: **incident blast radius → forensic timeline → containment playbook → evidence preservation → volatile memory capture → root-cause hypothesis → indicator of compromise → attack-path reconstruction → credential replay → lateral movement trace → compromise dwell time → incident severity rubric → eradication checkpoint → recovery validation → threat-hunting query → artifact provenance → forensic chain of custody → post-incident learning → security incident commander → containment exception**.

## 1. incident blast radius /ˈɪnsədənt blæst ˈreɪdiəs/
**Part of speech:** noun
**Core meaning (English):** the set of systems, accounts, data, and users potentially affected by a security incident.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phạm vi hệ thống/tài khoản/dữ liệu bị ảnh hưởng.
**Grammar & collocations:** `incident-blast-radius estimate` — estimate; `bound affected assets` — khoanh vùng.
**Examples:** `The incident blast radius expanded after a shared service account was found on two clusters.` → Blast radius mở rộng sau phát hiện account dùng chung.
**Liên kết tiếng Hàn:** `사고 영향 범위`.

## 2. forensic timeline /fəˈrɛnzɪk ˈtaɪmˌlaɪn/
**Part of speech:** noun
**Core meaning (English):** a chronological reconstruction of actions, observations, and system changes surrounding an incident.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dòng thời gian tái dựng sự kiện an ninh.
**Grammar & collocations:** `forensic-timeline entry` — entry; `correlate log timestamps` — đối chiếu.
**Examples:** `The forensic timeline placed the first suspicious login two days before the alert.` → Timeline đặt login đáng ngờ trước alert hai ngày.
**Liên kết tiếng Hàn:** `포렌식 타임라인`.

## 3. containment playbook /kənˈteɪnmənt ˈpleɪˌbʊk/
**Part of speech:** noun
**Core meaning (English):** a predefined set of actions for limiting an active compromise while preserving evidence and essential service.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kịch bản hạn chế sự cố mà vẫn giữ evidence/dịch vụ.
**Grammar & collocations:** `containment-playbook step` — step; `isolate a compromised host` — cô lập.
**Examples:** `The containment playbook isolated the workload before credentials were rotated.` → Playbook cô lập workload trước khi đổi credential.
**Liên kết tiếng Hàn:** `격리 플레이북`.

## 4. evidence preservation /ˈɛvədəns ˌprɛzərˈveɪʃən/
**Part of speech:** noun
**Core meaning (English):** protecting relevant logs, images, memory, and artifacts from alteration or accidental deletion during investigation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo vệ bằng chứng không bị sửa/xóa.
**Grammar & collocations:** `evidence-preservation hold` — hold; `freeze a log source` — đóng băng.
**Examples:** `Evidence preservation prevented an automated cleanup job from deleting the suspect container image.` → Preservation ngăn cleanup xóa image nghi ngờ.
**Liên kết tiếng Hàn:** `증거 보존`.

## 5. volatile memory capture /ˈvɑlətəl ˈmɛməri ˈkæptʃər/
**Part of speech:** noun
**Core meaning (English):** collecting transient memory contents before shutdown or remediation destroys them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chụp memory tạm trước khi tắt/remediate.
**Grammar & collocations:** `volatile-memory-capture image` — image; `preserve process state` — giữ.
**Examples:** `Volatile memory capture revealed an injected module that was absent from disk.` → Capture memory lộ module inject không có trên disk.
**Liên kết tiếng Hàn:** `휘발성 메모리 캡처`.

## 6. root-cause hypothesis /ruːt kɔz haɪˈpɑθəsɪs/
**Part of speech:** noun
**Core meaning (English):** a provisional explanation of the vulnerability, action, or failure that initiated an incident.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giả thuyết ban đầu về nguyên nhân gốc.
**Grammar & collocations:** `root-cause-hypothesis log` — log; `test an intrusion theory` — kiểm chứng.
**Examples:** `The root-cause hypothesis changed when the access token proved to be phished rather than leaked.` → Hypothesis đổi khi token bị phishing.
**Liên kết tiếng Hàn:** `근본 원인 가설`.

## 7. indicator of compromise /ˈɪndəˌkeɪtər əv ˈkɑmprəˌmaɪz/
**Part of speech:** noun
**Core meaning (English):** an observable artifact or signal suggesting that a system or account has been compromised.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dấu hiệu cho thấy hệ thống/tài khoản bị xâm nhập.
**Grammar & collocations:** `indicator-of-compromise feed` — feed; `match a suspicious hash` — đối chiếu.
**Examples:** `The indicator of compromise was a service binary with an unexpected signing key.` → IOC là binary có signing key lạ.
**Liên kết tiếng Hàn:** `침해 지표`.

## 8. attack-path reconstruction /əˈtæk pæθ ˌriːkənˈstrʌkʃən/
**Part of speech:** noun
**Core meaning (English):** rebuilding the sequence of access steps by which an attacker moved from an entry point to valuable assets.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tái dựng đường đi từ entry tới tài sản quan trọng.
**Grammar & collocations:** `attack-path-reconstruction graph` — graph; `link privilege transitions` — nối.
**Examples:** `Attack-path reconstruction connected a public endpoint to an administrative role through a misconfigured queue.` → Reconstruction nối endpoint tới role admin.
**Liên kết tiếng Hàn:** `공격 경로 재구성`.

## 9. credential replay /krəˈdɛnʃəl riːˈpleɪ/
**Part of speech:** noun
**Core meaning (English):** reuse of a captured authentication credential or token to gain access again.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng lại credential/token bị lấy cắp.
**Grammar & collocations:** `credential-replay attempt` — attempt; `invalidate a session token` — vô hiệu.
**Examples:** `Credential replay continued after the password reset because refresh tokens had not been revoked.` → Replay còn tiếp vì refresh token chưa revoke.
**Liên kết tiếng Hàn:** `자격 증명 재생`.

## 10. lateral movement trace /ˈlætərəl ˈmuːvmənt treɪs/
**Part of speech:** noun
**Core meaning (English):** evidence showing how an intruder moved between hosts, services, or accounts after initial access.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dấu vết di chuyển ngang trong mạng.
**Grammar & collocations:** `lateral-movement-trace query` — query; `follow remote-session hops` — theo dõi.
**Examples:** `The lateral movement trace showed repeated remote sessions from a workstation to database hosts.` → Trace lộ session lặp từ workstation tới database.
**Liên kết tiếng Hàn:** `측면 이동 추적`.

## 11. compromise dwell time /ˈkɑmprəˌmaɪz dwɛl taɪm/
**Part of speech:** noun
**Core meaning (English):** the period during which an attacker remains undetected inside an environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian kẻ tấn công ẩn mà chưa bị phát hiện.
**Grammar & collocations:** `compromise-dwell-time estimate` — estimate; `shorten detection delay` — rút.
**Examples:** `Compromise dwell time was revised upward after archived DNS logs were restored.` → Dwell time tăng sau khôi phục log DNS.
**Liên kết tiếng Hàn:** `침해 체류 시간`.

## 12. incident severity rubric /ˈɪnsədənt səˈvɛrəti ˈruːbrɪk/
**Part of speech:** noun
**Core meaning (English):** a structured scale for rating incident impact, urgency, scope, and response obligations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thang điểm đánh giá mức độ và urgency sự cố.
**Grammar & collocations:** `incident-severity-rubric threshold` — threshold; `classify a critical event` — phân loại.
**Examples:** `The incident severity rubric escalated the case because regulated records might have been accessed.` → Rubric nâng cấp vì dữ liệu regulated có thể bị truy cập.
**Liên kết tiếng Hàn:** `사고 심각도 기준표`.

## 13. eradication checkpoint /ɪˌrædəˈkeɪʃən ˈtʃɛkˌpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a verification point confirming that malicious persistence and access paths have been removed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mốc xác minh persistence và access xấu đã bị loại.
**Grammar & collocations:** `eradication-checkpoint evidence` — evidence; `verify clean credentials` — xác minh.
**Examples:** `The eradication checkpoint required clean images, rotated keys, and no surviving scheduled task.` → Checkpoint yêu cầu image sạch, key đổi và không task tồn.
**Liên kết tiếng Hàn:** `근절 체크포인트`.

## 14. recovery validation /rɪˈkʌvəri ˌvæləˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** testing that restored systems are functional, secure, and free from the conditions that caused the incident.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác minh hệ thống phục hồi vừa chạy vừa sạch.
**Grammar & collocations:** `recovery-validation test` — test; `confirm trustworthy service` — xác nhận.
**Examples:** `Recovery validation found that the restored database still trusted an obsolete certificate.` → Validation lộ database còn tin certificate cũ.
**Liên kết tiếng Hàn:** `복구 검증`.

## 15. threat-hunting query /θrɛt ˈhʌntɪŋ ˈkwɪri/
**Part of speech:** noun
**Core meaning (English):** a targeted search over telemetry for traces of malicious behavior not yet tied to a known alert.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** query chủ động tìm hành vi xấu trong telemetry.
**Grammar & collocations:** `threat-hunting-query library` — library; `search rare process behavior` — tìm.
**Examples:** `The threat-hunting query searched for the same unsigned loader across unrelated accounts.` → Query tìm loader unsigned ở account khác.
**Liên kết tiếng Hàn:** `위협 헌팅 쿼리`.

## 16. artifact provenance /ˈɑrtəˌfækt ˈprɑvənəns/
**Part of speech:** noun
**Core meaning (English):** the recorded origin, transformation history, and custody of an investigative artifact.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nguồn gốc và lịch sử biến đổi của artifact.
**Grammar & collocations:** `artifact-provenance record` — record; `trace a binary's build path` — truy.
**Examples:** `Artifact provenance showed that the suspicious package entered through an unapproved mirror.` → Provenance cho thấy package vào từ mirror lạ.
**Liên kết tiếng Hàn:** `아티팩트 출처`.

## 17. forensic chain of custody /fəˈrɛnzɪk tʃeɪn əv ˈkʌstədi/
**Part of speech:** noun
**Core meaning (English):** a documented history of who collected, handled, transferred, and stored evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi ghi nhận ai thu, giữ, chuyển và lưu evidence.
**Grammar & collocations:** `forensic-chain-of-custody form` — form; `seal an evidence image` — niêm phong.
**Examples:** `The forensic chain of custody preserved confidence in the disk image used for review.` → Chain giữ độ tin cậy của image disk.
**Liên kết tiếng Hàn:** `포렌식 증거 보관 연속성`.

## 18. post-incident learning /poʊst ˈɪnsədənt ˈlɝnɪŋ/
**Part of speech:** noun
**Core meaning (English):** structured improvement work derived from what an incident revealed about controls, process, and system design.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học và cải tiến sau sự cố.
**Grammar & collocations:** `post-incident-learning review` — review; `turn findings into controls` — chuyển.
**Examples:** `Post-incident learning produced a new control for unused administrative accounts.` → Learning tạo control cho account admin không dùng.
**Liên kết tiếng Hàn:** `사고 후 학습`.

## 19. security incident commander /sɪˈkjʊrəti ˈɪnsədənt kəˈmændər/
**Part of speech:** noun
**Core meaning (English):** the person responsible for coordinating decisions, communication, priorities, and escalation during a security incident.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** người điều phối toàn bộ response an ninh.
**Grammar & collocations:** `security-incident-commander role` — role; `declare an incident phase` — tuyên bố.
**Examples:** `The security incident commander authorized isolation of the analytics network after evidence review.` → Commander cho phép cô lập network analytics.
**Liên kết tiếng Hàn:** `보안 사고 지휘관`.

## 20. containment exception /kənˈteɪnmənt ɪkˈsɛpʃən/
**Part of speech:** noun
**Core meaning (English):** an explicitly approved reason to delay or modify a containment action because it would cause greater operational or safety harm.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngoại lệ được duyệt khi containment gây hại lớn hơn.
**Grammar & collocations:** `containment-exception register` — register; `document a compensating control` — ghi.
**Examples:** `A containment exception kept one medical service online while a compensating network control was installed.` → Ngoại lệ giữ service y tế chạy với control bù.
**Liên kết tiếng Hàn:** `격리 예외`.

## Review in context

An **incident blast radius** is bounded with a **forensic timeline**, **containment playbook**, and **evidence preservation**, including **volatile memory capture**. A **root-cause hypothesis**, **indicator of compromise**, and **attack-path reconstruction** explain **credential replay**, a **lateral movement trace**, and **compromise dwell time**. An **incident severity rubric** sets priorities; an **eradication checkpoint** and **recovery validation** confirm closure. A **threat-hunting query**, **artifact provenance**, and **forensic chain of custody** support **post-incident learning** led by a **security incident commander**, with any **containment exception** documented.

**Bản dịch tiếng Việt:** **Incident blast radius** được khoanh bằng **forensic timeline**, **containment playbook**, **evidence preservation** và **volatile memory capture**. **Root-cause hypothesis**, **indicator of compromise** và **attack-path reconstruction** giải thích **credential replay**, **lateral movement trace** và **compromise dwell time**. **Incident severity rubric** đặt ưu tiên; **eradication checkpoint** và **recovery validation** xác nhận đóng sự cố. **Threat-hunting query**, **artifact provenance** và **forensic chain of custody** hỗ trợ **post-incident learning** do **security incident commander** dẫn dắt, với mọi **containment exception** được ghi lại.
