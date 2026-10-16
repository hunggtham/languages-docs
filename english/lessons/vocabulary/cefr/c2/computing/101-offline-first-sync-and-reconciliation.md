# C2 Vocabulary — Offline-first sync and reconciliation

This lesson follows a local-first client from offline mutations and durable journals through reconnect, conflict resolution, and replica convergence.

Flow: **offline-first sync → delta sync → sync token → connectivity state → background refresh → push notification token → local persistence layer → optimistic update → eventual reconciliation → merge function → causal version vector → device clock skew → network reachability → resume token → partial sync → write-behind queue → inbox deduplication → last-write-wins register → multi-value register → conflict resolver**.

## 1. offline-first sync /ˈɒflaɪn fɜːrst sɪŋk/
**Part of speech:** noun
**Core meaning (English):** a synchronization design in which the local application remains useful without a network and reconciles later.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** app local vẫn dùng được offline rồi reconcile sau.
**Grammar & collocations:** `offline-first-sync policy` — policy; `queue a local mutation` — xếp hàng.
**Examples:** `Offline-first sync let the field worker record inspections inside a dead zone.` → Sync offline cho ghi inspection khi mất mạng.
**Liên kết tiếng Hàn:** `오프라인 우선 동기화`.

## 2. delta sync /ˈdeltə sɪŋk/
**Part of speech:** noun
**Core meaning (English):** synchronizing only changes since a known version instead of transferring the complete dataset.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ đồng bộ thay đổi từ version đã biết.
**Grammar & collocations:** `delta-sync payload` — payload; `send changed records` — gửi.
**Examples:** `Delta sync reduced the mobile transfer after the first full download.` → Delta giảm transfer sau lần đầu.
**Liên kết tiếng Hàn:** `델타 동기화`.

## 3. sync token /sɪŋk ˈtoʊkən/
**Part of speech:** noun
**Core meaning (English):** an opaque position or version token used to request changes after a prior synchronization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** token version/vị trí để lấy thay đổi sau lần sync.
**Grammar & collocations:** `sync-token expiry` — expiry; `resume from a token` — tiếp tục.
**Examples:** `The client stored the sync token before applying the downloaded delta.` → Client lưu token trước khi apply.
**Liên kết tiếng Hàn:** `동기화 토큰`.

## 4. connectivity state /ˌkɒnɛkˈtɪvəti steɪt/
**Part of speech:** noun
**Core meaning (English):** the application's current belief about whether network communication is available and reliable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trạng thái app tin về mạng đang có và ổn định không.
**Grammar & collocations:** `connectivity-state transition` — transition; `enter an offline mode` — vào.
**Examples:** `The connectivity state changed to captive portal rather than fully online.` → State đổi sang captive portal.
**Liên kết tiếng Hàn:** `연결 상태`.

## 5. background refresh /ˈbækɡraʊnd rɪˈfreʃ/
**Part of speech:** noun
**Core meaning (English):** updating local data while the application is not actively displayed to the user.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cập nhật data local khi app không hiện trên màn hình.
**Grammar & collocations:** `background-refresh budget` — budget; `refresh a stale cache` — cập nhật.
**Examples:** `Background refresh prepared the latest schedule before the commuter opened the app.` → Refresh chuẩn bị lịch mới.
**Liên kết tiếng Hàn:** `백그라운드 새로 고침`.

## 6. push notification token /pʊʃ ˌnoʊtɪfɪˈkeɪʃən ˈtoʊkən/
**Part of speech:** noun
**Core meaning (English):** an address-like credential that lets a notification service target a particular device or installation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** credential giống address để gửi notification tới device.
**Grammar & collocations:** `push-notification-token rotation` — rotation; `register a device endpoint` — đăng ký.
**Examples:** `The push notification token changed after the application was reinstalled.` → Token đổi sau cài lại.
**Liên kết tiếng Hàn:** `푸시 알림 토큰`.

## 7. local persistence layer /ˈloʊkəl pərˈsɪstəns ˈleɪər/
**Part of speech:** noun
**Core meaning (English):** the local storage component that preserves data and pending operations across application restarts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lớp storage local giữ data và operation chờ qua restart.
**Grammar & collocations:** `local-persistence-layer transaction` — transaction; `flush a pending mutation` — ghi.
**Examples:** `The local persistence layer recovered the unsent form after the phone rebooted.` → Layer khôi phục form chưa gửi.
**Liên kết tiếng Hàn:** `로컬 지속성 계층`.

## 8. optimistic update /ˌɒptɪˈmɪstɪk ˈʌpdeɪt/
**Part of speech:** noun
**Core meaning (English):** showing a requested change locally before the server has confirmed it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiển thị thay đổi local trước khi server xác nhận.
**Grammar & collocations:** `optimistic-update rollback` — rollback; `render a pending state` — hiển thị.
**Examples:** `The optimistic update showed the new label immediately and rolled back on rejection.` → Update hiện ngay rồi rollback.
**Liên kết tiếng Hàn:** `낙관적 업데이트`.

## 9. eventual reconciliation /ɪˈventʃuəl ˌrekənˌsɪliˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process by which divergent local and remote states are eventually brought into an agreed result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa state local/remote lệch về kết quả thống nhất sau.
**Grammar & collocations:** `eventual-reconciliation pass` — pass; `converge divergent edits` — hội tụ.
**Examples:** `Eventual reconciliation preserved both edits by placing them in separate fields.` → Reconciliation giữ hai edit.
**Liên kết tiếng Hàn:** `최종 조정`.

## 10. merge function /mɜːrdʒ ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a deterministic function that combines competing versions into one application state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** function deterministic gộp version cạnh tranh thành state.
**Grammar & collocations:** `merge-function contract` — contract; `combine conflicting fields` — gộp.
**Examples:** `The merge function kept the higher verified quantity and recorded the losing edit.` → Function giữ quantity đã verify.
**Liên kết tiếng Hàn:** `병합 함수`.

## 11. causal version vector /ˈkɔːzəl ˈvɜːrʒən ˈvektər/
**Part of speech:** noun
**Core meaning (English):** a vector recording causal progress across replicas so concurrent and ordered updates can be distinguished.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vector ghi tiến độ causal giữa replica để phân biệt update đồng thời.
**Grammar & collocations:** `causal-version-vector comparison` — comparison; `detect concurrent edits` — phát hiện.
**Examples:** `The causal version vector showed that neither replica had observed the other's edit.` → Vector cho thấy edit đồng thời.
**Liên kết tiếng Hàn:** `인과 버전 벡터`.

## 12. device clock skew /dɪˈvaɪs klɒk skjuː/
**Part of speech:** noun
**Core meaning (English):** the difference between a device's clock and the reference time used by other devices or a server.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch clock device với server/device khác.
**Grammar & collocations:** `device-clock-skew correction` — correction; `avoid ordering by wall time` — tránh.
**Examples:** `Device clock skew made timestamp order unreliable for conflict resolution.` → Skew làm timestamp không đáng tin.
**Liên kết tiếng Hàn:** `장치 시계 편차`.

## 13. network reachability /ˈnetwɜːrk riːtʃəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** whether a specific service can currently be contacted through the available network path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** service cụ thể có thể liên lạc qua path hiện tại không.
**Grammar & collocations:** `network-reachability probe` — probe; `distinguish DNS from internet failure` — phân biệt.
**Examples:** `Network reachability failed only for the synchronization host, not for the rest of the internet.` → Reachability chỉ lỗi sync host.
**Liên kết tiếng Hàn:** `네트워크 도달 가능성`.

## 14. resume token /rɪˈzuːm ˈtoʊkən/
**Part of speech:** noun
**Core meaning (English):** a token that identifies where an interrupted transfer or synchronization should continue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** token chỉ chỗ tiếp tục transfer/sync bị gián đoạn.
**Grammar & collocations:** `resume-token persistence` — persistence; `continue an interrupted page` — tiếp tục.
**Examples:** `The resume token avoided downloading the first million records again.` → Token tránh tải lại record.
**Liên kết tiếng Hàn:** `재개 토큰`.

## 15. partial sync /ˈpɑːrʃəl sɪŋk/
**Part of speech:** noun
**Core meaning (English):** a synchronization that transfers only some requested changes before stopping or yielding.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sync chỉ chuyển một phần change rồi dừng/nhường.
**Grammar & collocations:** `partial-sync continuation` — continuation; `apply a bounded page` — áp dụng.
**Examples:** `Partial sync kept the application responsive on a metered connection.` → Sync một phần giữ app responsive.
**Liên kết tiếng Hàn:** `부분 동기화`.

## 16. write-behind queue /raɪt bɪˈhaɪnd kjuː/
**Part of speech:** noun
**Core meaning (English):** a queue that records local writes for asynchronous delivery to a remote service.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** queue giữ write local để gửi remote bất đồng bộ.
**Grammar & collocations:** `write-behind-queue drain` — drain; `flush pending mutations` — xả.
**Examples:** `The write-behind queue drained when the device regained a stable connection.` → Queue xả khi mạng ổn.
**Liên kết tiếng Hàn:** `쓰기 지연 큐`.

## 17. inbox deduplication /ˈɪnbɒks diːˌdjuːplɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** removing repeated incoming operations by remembering identifiers already applied.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ operation lặp bằng cách nhớ ID đã apply.
**Grammar & collocations:** `inbox-deduplication key` — key; `discard a repeated delivery` — bỏ.
**Examples:** `Inbox deduplication made at-least-once delivery safe for the local database.` → Dedup làm delivery ít nhất một lần an toàn.
**Liên kết tiếng Hàn:** `인박스 중복 제거`.

## 18. last-write-wins register /læst raɪt wɪnz ˈredʒɪstər/
**Part of speech:** noun
**Core meaning (English):** a replicated value that resolves concurrent updates by selecting one according to a chosen ordering rule.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** register chọn một update theo rule thứ tự khi conflict.
**Grammar & collocations:** `last-write-wins-register conflict` — conflict; `choose a winning value` — chọn.
**Examples:** `The last-write-wins register lost a user's offline edit when timestamps tied incorrectly.` → Register làm mất edit offline.
**Liên kết tiếng Hàn:** `최종 쓰기 승리 레지스터`.

## 19. multi-value register /ˌmʌltɪ ˈvæljuː ˈredʒɪstər/
**Part of speech:** noun
**Core meaning (English):** a replicated value that preserves concurrent alternatives instead of selecting one automatically.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** register giữ nhiều alternative khi update đồng thời.
**Grammar & collocations:** `multi-value-register resolution` — resolution; `surface concurrent choices` — hiển thị.
**Examples:** `The multi-value register exposed both edits so the user could resolve them deliberately.` → Register hiện cả hai edit.
**Liên kết tiếng Hàn:** `다중 값 레지스터`.

## 20. conflict resolver /ˈkɒnflɪkt rɪˈzɒlvər/
**Part of speech:** noun
**Core meaning (English):** a rule or component that decides how incompatible replicated updates become one accepted state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule/component quyết định state sau conflict.
**Grammar & collocations:** `conflict-resolver hook` — hook; `ask a user to choose` — yêu cầu.
**Examples:** `The conflict resolver asked the user to choose between two edited addresses.` → Resolver hỏi user chọn địa chỉ.
**Liên kết tiếng Hàn:** `충돌 해결기`.

## Review in context

**Offline-first sync**, **delta sync**, a **sync token**, **connectivity state**, **background refresh**, and a **push notification token** keep a **local persistence layer** useful. An **optimistic update** reaches **eventual reconciliation** through a **merge function**, **causal version vector**, **device clock skew** check, and **network reachability** probe. A **resume token**, **partial sync**, **write-behind queue**, and **inbox deduplication** support interruption. A **last-write-wins register**, **multi-value register**, and **conflict resolver** handle competing edits.

**Bản dịch tiếng Việt:** **Offline-first sync**, **delta sync**, **sync token**, **connectivity state**, **background refresh** và **push notification token** giữ **local persistence layer** hữu ích. **Optimistic update** đi tới **eventual reconciliation** qua **merge function**, kiểm **causal version vector**, **device clock skew** và probe **network reachability**. **Resume token**, **partial sync**, **write-behind queue** và **inbox deduplication** hỗ trợ gián đoạn. **Last-write-wins register**, **multi-value register** và **conflict resolver** xử lý edit cạnh tranh.
