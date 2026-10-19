# C2 Vocabulary — Transaction isolation and recovery semantics

This lesson follows a transaction from visibility and locking through commit uncertainty, retry, compensation, and recovery evidence.

Flow: **snapshot visibility → phantom read → serializable retry → deadlock victim → lock wait → intent lock → transaction fence → prepare record → rollback marker → savepoint → compensation action → idempotent commit → monotonic read → transaction retry → commit uncertainty → write intent → lock lease → conflict range → abort marker → commit proof**.

## 1. snapshot visibility /ˈsnæpʃɒt ˌvɪzəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the rule determining which committed versions a transaction can observe at its chosen snapshot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule quyết định transaction thấy version commit nào trong snapshot.
**Grammar & collocations:** `snapshot-visibility rule` — rule; `read a stable version` — đọc.
**Examples:** `Snapshot visibility kept the report stable while new invoices were committed.` → Visibility giữ report ổn định khi invoice mới commit.
**Liên kết tiếng Hàn:** `스냅샷 가시성`.

## 2. phantom read /ˈfæntəm riːd/
**Part of speech:** noun
**Core meaning (English):** seeing a different set of rows when repeating a range query inside one transaction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cùng range query nhưng lần đọc sau thấy tập row khác trong transaction.
**Grammar & collocations:** `phantom-read anomaly` — anomaly; `protect a searched range` — bảo vệ.
**Examples:** `A phantom read appeared when another transaction inserted a matching order between two scans.` → Phantom xảy ra khi transaction khác insert order match.
**Liên kết tiếng Hàn:** `팬텀 리드`.

## 3. serializable retry /ˈsɪəriəlaɪzəbəl riˈtraɪ/
**Part of speech:** noun
**Core meaning (English):** repeating a transaction after the system aborts it to preserve serializable ordering.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy lại transaction sau khi system abort để giữ thứ tự serializable.
**Grammar & collocations:** `serializable-retry loop` — vòng lặp; `replay a pure operation` — chạy lại.
**Examples:** `The serializable retry succeeded after the competing balance update committed.` → Retry thành công sau update cạnh tranh commit.
**Liên kết tiếng Hàn:** `직렬화 재시도`.

## 4. deadlock victim /ˈdedlɒk ˈvɪktɪm/
**Part of speech:** noun
**Core meaning (English):** the transaction selected for abort so a cycle of mutually waiting locks can be broken.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transaction bị abort để phá vòng lock chờ lẫn nhau.
**Grammar & collocations:** `deadlock-victim selection` — lựa chọn; `abort the cheaper transaction` — abort.
**Examples:** `The scheduler chose the short update as the deadlock victim and released its locks.` → Scheduler chọn update ngắn làm victim.
**Liên kết tiếng Hàn:** `교착 상태 희생자`.

## 5. lock wait /lɒk weɪt/
**Part of speech:** noun
**Core meaning (English):** the period during which a transaction waits for another holder to release a needed lock.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian transaction chờ holder khác nhả lock cần thiết.
**Grammar & collocations:** `lock-wait timeout` — timeout; `inspect a blocked transaction` — kiểm tra.
**Examples:** `The lock wait exceeded its budget because a batch update held the row range too long.` → Wait vượt budget vì batch giữ range lâu.
**Liên kết tiếng Hàn:** `잠금 대기`.

## 6. intent lock /ɪnˈtent lɒk/
**Part of speech:** noun
**Core meaning (English):** a higher-level lock indicating that a transaction plans to lock more specific objects below it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lock cấp cao báo transaction sẽ lock object cụ thể bên dưới.
**Grammar & collocations:** `intent-lock hierarchy` — hierarchy; `signal a row-level update` — báo.
**Examples:** `The intent lock warned the table manager that rows beneath the table were being modified.` → Intent báo table manager có row đang sửa.
**Liên kết tiếng Hàn:** `의도 잠금`.

## 7. transaction fence /trænˈzækʃən fens/
**Part of speech:** noun
**Core meaning (English):** a condition that prevents an old transaction or owner from committing after authority has changed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện chặn transaction/owner cũ commit sau khi quyền đổi.
**Grammar & collocations:** `transaction-fence check` — kiểm tra; `reject a stale commit` — từ chối.
**Examples:** `The transaction fence rejected a delayed write from the previous primary.` → Fence từ chối write trễ của primary cũ.
**Liên kết tiếng Hàn:** `트랜잭션 펜스`.

## 8. prepare record /prɪˈper ˈrekərd/
**Part of speech:** noun
**Core meaning (English):** durable evidence that a participant has completed the prepare phase of a distributed transaction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bằng chứng bền cho thấy participant đã xong phase prepare.
**Grammar & collocations:** `prepare-record recovery` — recovery; `reconstruct an in-doubt transaction` — dựng.
**Examples:** `The prepare record let recovery determine which participant was ready to commit.` → Record giúp recovery biết participant sẵn sàng.
**Liên kết tiếng Hàn:** `준비 레코드`.

## 9. rollback marker /ˈroʊlbæk ˈmɑːrkər/
**Part of speech:** noun
**Core meaning (English):** durable evidence that a transaction or version must no longer be treated as committed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** evidence bền cho biết transaction/version không còn được coi là commit.
**Grammar & collocations:** `rollback-marker scan` — scan; `hide an aborted version` — ẩn.
**Examples:** `The rollback marker prevented readers from exposing rows written before the failed migration.` → Marker ngăn reader lộ row migration lỗi.
**Liên kết tiếng Hàn:** `롤백 마커`.

## 10. savepoint /ˈseɪvˌpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a named intermediate position inside a transaction to which work can be undone without aborting everything.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm trung gian có tên để undo một phần transaction.
**Grammar & collocations:** `savepoint rollback` — rollback; `undo the optional phase` — hoàn tác.
**Examples:** `The importer used a savepoint so one invalid row could be removed without losing the batch.` → Importer dùng savepoint để bỏ row lỗi.
**Liên kết tiếng Hàn:** `저장점`.

## 11. compensation action /ˌkɒmpənˈseɪʃən ˈækʃən/
**Part of speech:** noun
**Core meaning (English):** a deliberate operation that semantically reverses an effect when an original transaction cannot be undone directly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** action đảo hiệu ứng về mặt nghiệp vụ khi không thể undo transaction gốc.
**Grammar & collocations:** `compensation-action log` — log; `refund a captured payment` — hoàn.
**Examples:** `The compensation action issued a refund after the shipping reservation could not be canceled.` → Action hoàn tiền khi không hủy reservation được.
**Liên kết tiếng Hàn:** `보상 작업`.

## 12. idempotent commit /ˌɪdəmpoʊˈtənt kəˈmɪt/
**Part of speech:** noun
**Core meaning (English):** a commit operation whose repeated execution leaves one effective result rather than applying the effect multiple times.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** commit lặp vẫn chỉ tạo một hiệu ứng hữu hiệu.
**Grammar & collocations:** `idempotent-commit token` — token; `replay a lost acknowledgment` — chạy lại.
**Examples:** `The idempotent commit let the client retry after a timeout without duplicating the order.` → Commit cho retry mà không nhân đôi order.
**Liên kết tiếng Hàn:** `멱등 커밋`.

## 13. monotonic read /ˌmɒnəˈtɒnɪk riːd/
**Part of speech:** noun
**Core meaning (English):** a read guarantee that a session never observes an older version after seeing a newer one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** session không bao giờ thấy version cũ sau khi đã thấy version mới.
**Grammar & collocations:** `monotonic-read guarantee` — bảo đảm; `avoid a stale response` — tránh.
**Examples:** `The monotonic read guarantee kept the dashboard from moving backward after a refresh.` → Guarantee ngăn dashboard lùi state.
**Liên kết tiếng Hàn:** `단조 읽기`.

## 14. transaction retry /trænˈzækʃən riˈtraɪ/
**Part of speech:** noun
**Core meaning (English):** rerunning a transaction after a transient conflict, timeout, or serialization failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy lại transaction sau conflict/timeout/serialization failure tạm thời.
**Grammar & collocations:** `transaction-retry budget` — budget; `back off before replay` — lùi.
**Examples:** `The transaction retry used exponential backoff so competing writers could make progress.` → Retry dùng backoff để writer cùng tiến.
**Liên kết tiếng Hàn:** `트랜잭션 재시도`.

## 15. commit uncertainty /kəˈmɪt ʌnˈsɜːrtənti/
**Part of speech:** noun
**Core meaning (English):** the state in which a client cannot tell whether a transaction committed after communication failed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** client không biết transaction đã commit chưa sau lỗi liên lạc.
**Grammar & collocations:** `commit-uncertainty resolution` — giải quyết; `query the transaction status` — truy.
**Examples:** `Commit uncertainty led the client to query status rather than blindly submit the payment again.` → Uncertainty khiến client hỏi status thay vì gửi lại mù.
**Liên kết tiếng Hàn:** `커밋 불확실성`.

## 16. write intent /raɪt ɪnˈtent/
**Part of speech:** noun
**Core meaning (English):** a recorded indication that a transaction plans to modify a key, range, or object.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** indication được ghi rằng transaction định sửa key, range hoặc object.
**Grammar & collocations:** `write-intent record` — record; `detect a conflicting mutation` — phát hiện.
**Examples:** `The write intent alerted the coordinator that two transactions targeted the same account.` → Intent báo hai transaction cùng target account.
**Liên kết tiếng Hàn:** `쓰기 의도`.

## 17. lock lease /lɒk liːs/
**Part of speech:** noun
**Core meaning (English):** a time-limited right to hold a lock before it expires or must be renewed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyền giữ lock có thời hạn trước khi hết hoặc phải gia hạn.
**Grammar & collocations:** `lock-lease renewal` — gia hạn; `release an expired lock` — nhả.
**Examples:** `The lock lease expired when the worker stopped renewing after a network partition.` → Lease hết hạn khi worker không renew.
**Liên kết tiếng Hàn:** `잠금 임대`.

## 18. conflict range /ˈkɒnflɪkt reɪndʒ/
**Part of speech:** noun
**Core meaning (English):** a key or interval that two transactions cannot safely modify concurrently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** key hoặc khoảng mà hai transaction không thể sửa đồng thời an toàn.
**Grammar & collocations:** `conflict-range lock` — lock; `protect a predicate interval` — bảo vệ.
**Examples:** `The conflict range covered every appointment in the requested hour.` → Range bao phủ mọi appointment trong giờ.
**Liên kết tiếng Hàn:** `충돌 범위`.

## 19. abort marker /əˈbɔːrt ˈmɑːrkər/
**Part of speech:** noun
**Core meaning (English):** durable evidence that a transaction was canceled and its tentative effects must be ignored.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** evidence bền cho biết transaction bị hủy và effect tạm phải bỏ.
**Grammar & collocations:** `abort-marker replay` — replay; `hide an uncommitted version` — ẩn.
**Examples:** `The abort marker let replicas discard a prepared write after the coordinator failed.` → Marker giúp replica bỏ write prepare.
**Liên kết tiếng Hàn:** `중단 마커`.

## 20. commit proof /kəˈmɪt pruːf/
**Part of speech:** noun
**Core meaning (English):** verifiable evidence that all required participants accepted a transaction's committed outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bằng chứng xác minh mọi participant cần thiết chấp nhận outcome commit.
**Grammar & collocations:** `commit-proof record` — record; `verify a durable decision` — xác minh.
**Examples:** `The commit proof allowed recovery to expose the new balance after a coordinator restart.` → Proof cho recovery lộ balance mới.
**Liên kết tiếng Hàn:** `커밋 증명`.

## Review in context

**Snapshot visibility** defines what a transaction sees; a **phantom read** reveals a range anomaly, while a **serializable retry** restores safe ordering. A **deadlock victim** breaks a cycle, a **lock wait** measures blocking, an **intent lock** signals lower-level work, and a **transaction fence** rejects stale authority. A **prepare record** supports recovery, a **rollback marker** hides failed state, and a **savepoint** limits undo. A **compensation action** reverses an external effect, an **idempotent commit** tolerates replay, and a **monotonic read** protects sessions. A **transaction retry** handles transient conflict; **commit uncertainty** triggers status lookup, a **write intent** records planned mutation, a **lock lease** expires, a **conflict range** protects predicates, an **abort marker** cancels tentative work, and a **commit proof** establishes durable success.

**Bản dịch tiếng Việt:** **Snapshot visibility** định nghĩa transaction thấy gì; **phantom read** lộ anomaly range, còn **serializable retry** khôi phục thứ tự an toàn. **Deadlock victim** phá vòng chờ, **lock wait** đo blocking, **intent lock** báo việc cấp thấp, và **transaction fence** từ chối quyền cũ. **Prepare record** hỗ trợ recovery, **rollback marker** ẩn state lỗi, còn **savepoint** giới hạn undo. **Compensation action** đảo effect bên ngoài, **idempotent commit** chịu replay, và **monotonic read** bảo vệ session. **Transaction retry** xử lý conflict tạm; **commit uncertainty** dẫn tới hỏi status, **write intent** ghi mutation dự định, **lock lease** hết hạn, **conflict range** bảo vệ predicate, **abort marker** hủy việc tạm, và **commit proof** xác nhận thành công bền vững.
