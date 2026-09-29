# C2 Vocabulary — Serializability and distributed transactions

This lesson follows concurrent database work from schedule analysis through locking, snapshot anomalies, and distributed commit.

Flow: **conflict serializability → view serializability → precedence graph → two-phase locking → strict 2PL → intention lock → lock escalation → deadlock detection → wound-wait → wait-die → timestamp ordering → optimistic validation → snapshot isolation → write skew → predicate lock → serializable snapshot isolation → phantom protection → commit dependency → distributed commit → presumed abort**.

## 1. conflict serializability /ˈkɑnflɪkt ˌsɪəriəlɪˈzæbɪləti/
**Part of speech:** noun
**Core meaning (English):** the property that a concurrent schedule can be transformed into a serial one by swapping nonconflicting operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lịch chạy song song tương đương một thứ tự tuần tự nếu đổi các thao tác không xung đột.
**Grammar & collocations:** `conflict-serializability test` — test; `prove a schedule serializable` — chứng minh.
**Examples:** `Conflict serializability failed because two transactions formed a cycle of conflicting writes.` → Serializability thất bại vì hai transaction tạo chu kỳ conflict.
**Liên kết tiếng Hàn:** `충돌 직렬성`.

## 2. view serializability /vjuː ˌsɪəriəlɪˈzæbɪləti/
**Part of speech:** noun
**Core meaning (English):** the property that a schedule has the same reads-from relationships and final writes as some serial schedule.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lịch song song giữ quan hệ đọc-từ và ghi cuối như một lịch tuần tự.
**Grammar & collocations:** `view-serializability condition` — condition; `compare final writes` — so sánh.
**Examples:** `View serializability accepted a schedule that conflict analysis considered difficult to reorder.` → View serializability chấp nhận lịch khó đổi theo conflict.
**Liên kết tiếng Hàn:** `뷰 직렬성`.

## 3. precedence graph /ˈprɛsədəns ɡræf/
**Part of speech:** noun
**Core meaning (English):** a directed graph whose edges represent ordering constraints between transactions in a schedule.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồ thị hướng cho biết transaction nào phải đứng trước transaction nào.
**Grammar & collocations:** `precedence-graph cycle` — cycle; `draw a dependency edge` — vẽ.
**Examples:** `The precedence graph exposed a cycle, proving that the schedule was not conflict-serializable.` → Graph lộ cycle, chứng minh lịch không serializable.
**Liên kết tiếng Hàn:** `선행 그래프`.

## 4. two-phase locking /tuː feɪz ˈlɑkɪŋ/
**Part of speech:** noun
**Core meaning (English):** a locking protocol with a growing phase for acquiring locks and a shrinking phase for releasing them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transaction chỉ lấy lock ở pha tăng rồi nhả ở pha giảm.
**Grammar & collocations:** `two-phase-locking protocol` — protocol; `enter the shrinking phase` — vào.
**Examples:** `Two-phase locking prevented conflicting transactions from interleaving their protected updates.` → 2PL ngăn update conflict đan xen.
**Liên kết tiếng Hàn:** `2단계 잠금`.

## 5. strict 2PL /strɪkt tuː piː ɛl/
**Part of speech:** noun
**Core meaning (English):** a two-phase locking variant that holds write locks until commit or abort.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ write lock tới commit/abort để tránh đọc dữ liệu chưa commit.
**Grammar & collocations:** `strict-2PL schedule` — schedule; `hold an exclusive lock` — giữ.
**Examples:** `Strict 2PL prevented another transaction from reading a value that might later be rolled back.` → Strict 2PL ngăn đọc value có thể rollback.
**Liên kết tiếng Hàn:** `엄격한 2단계 잠금`.

## 6. intention lock /ɪnˈtɛnʃən lɑk/
**Part of speech:** noun
**Core meaning (English):** a multigranularity lock indicating that a transaction holds or plans to acquire finer-grained locks below a resource.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lock cấp cao báo ý định lock row/page bên dưới.
**Grammar & collocations:** `intention-lock compatibility` — compatibility; `place an IX lock on a table` — đặt.
**Examples:** `The intention lock allowed a table-level reader to detect a conflicting row-level writer.` → Intention lock giúp reader cấp bảng thấy writer cấp row.
**Liên kết tiếng Hàn:** `의도 잠금`.

## 7. lock escalation /lɑk ˌɛskəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** replacing many fine-grained locks with one coarser lock to reduce lock-management overhead.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều lock row được gom thành lock page/table.
**Grammar & collocations:** `lock-escalation threshold` — threshold; `escalate row locks` — nâng cấp.
**Examples:** `Lock escalation reduced metadata overhead but blocked unrelated updates on the same table.` → Escalation giảm overhead nhưng block update không liên quan.
**Liên kết tiếng Hàn:** `잠금 에스컬레이션`.

## 8. deadlock detection /ˈdɛdˌlɑk dɪˈtɛkʃən/
**Part of speech:** noun
**Core meaning (English):** finding cycles of transactions waiting for one another so the system can abort a participant and release locks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm vòng chờ để hủy một transaction.
**Grammar & collocations:** `deadlock-detection interval` — interval; `abort a victim transaction` — hủy.
**Examples:** `Deadlock detection chose the younger transaction as the victim and released its locks.` → Detector chọn transaction trẻ hơn làm victim.
**Liên kết tiếng Hàn:** `교착 상태 탐지`.

## 9. wound-wait /wuːnd weɪt/
**Part of speech:** noun
**Core meaning (English):** a timestamp-based deadlock-prevention policy in which an older transaction aborts a younger holder, while a younger requester waits for an older holder.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transaction già “wound” transaction trẻ; transaction trẻ chỉ wait transaction già.
**Grammar & collocations:** `wound-wait policy` — policy; `preempt a younger holder` — preempt.
**Examples:** `Wound-wait aborted the younger writer instead of allowing a wait cycle to form.` → Chính sách hủy writer trẻ để tránh cycle.
**Liên kết tiếng Hàn:** `wound-wait`.

## 10. wait-die /weɪt daɪ/
**Part of speech:** noun
**Core meaning (English):** a timestamp-based deadlock-prevention policy in which an older requester waits and a younger requester aborts rather than waiting.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transaction già được wait, transaction trẻ phải die/restart.
**Grammar & collocations:** `wait-die policy` — policy; `abort a younger requester` — hủy.
**Examples:** `Wait-die restarted the younger transaction immediately when it requested a lock held by an older one.` → Wait-die restart transaction trẻ ngay.
**Liên kết tiếng Hàn:** `wait-die`.

## 11. timestamp ordering /ˈtaɪmˌstæmp ˈɔrdərɪŋ/
**Part of speech:** noun
**Core meaning (English):** a concurrency-control method that orders conflicting operations according to transaction timestamps rather than locks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thứ tự transaction do timestamp quyết định.
**Grammar & collocations:** `timestamp-ordering rule` — rule; `reject an obsolete write` — từ chối.
**Examples:** `Timestamp ordering rejected a late write whose transaction was older than a completed read.` → Ordering từ chối write cũ tới muộn.
**Liên kết tiếng Hàn:** `타임스탬프 순서화`.

## 12. optimistic validation /ˌɑptəˈmɪstɪk ˌvæləˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the commit-time check that confirms a transaction's read and write sets do not conflict with concurrent commits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra read/write set lúc commit thay vì lock trước.
**Grammar & collocations:** `optimistic-validation phase` — phase; `validate a read set` — xác thực.
**Examples:** `Optimistic validation aborted the transaction after another session changed a read row.` → Validation hủy transaction khi session khác đổi row.
**Liên kết tiếng Hàn:** `낙관적 검증`.

## 13. snapshot isolation /ˈsnæpˌʃɑt ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** an isolation level in which each transaction reads from a consistent versioned snapshot while writes are checked for conflicts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transaction đọc snapshot nhất quán thay vì block reader.
**Grammar & collocations:** `snapshot-isolation level` — level; `read a transaction snapshot` — đọc.
**Examples:** `Snapshot isolation let the report run without blocking the order writer.` → Snapshot isolation cho report chạy không block writer.
**Liên kết tiếng Hàn:** `스냅샷 격리`.

## 14. write skew /raɪt skjuː/
**Part of speech:** noun
**Core meaning (English):** an anomaly in which concurrent transactions read overlapping state and update different rows, jointly violating a constraint.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi transaction sửa row khác nhau nhưng tổng thể phá invariant.
**Grammar & collocations:** `write-skew anomaly` — anomaly; `violate a cross-row constraint` — vi phạm.
**Examples:** `Write skew allowed both doctors to go off call even though one doctor had to remain available.` → Write skew làm cả hai bác sĩ off call.
**Liên kết tiếng Hàn:** `쓰기 왜곡`.

## 15. predicate lock /ˈprɛdɪkət lɑk/
**Part of speech:** noun
**Core meaning (English):** a lock protecting a logical set of rows defined by a search predicate, including rows that do not yet exist.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lock điều kiện tìm kiếm, bảo vệ cả row tương lai.
**Grammar & collocations:** `predicate-lock range` — range; `protect a qualifying set` — bảo vệ.
**Examples:** `The predicate lock blocked an insert that would have created a phantom in the report range.` → Predicate lock chặn insert tạo phantom.
**Liên kết tiếng Hàn:** `조건자 잠금`.

## 16. serializable snapshot isolation /ˈsɪəriəˌlaɪzəbəl ˈsnæpˌʃɑt ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** a snapshot-based isolation method that detects dangerous dependency structures and aborts transactions to preserve serializability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vẫn đọc snapshot nhưng phát hiện dependency nguy hiểm để giữ serializable.
**Grammar & collocations:** `serializable-snapshot-isolation check` — check; `abort a dangerous structure` — hủy.
**Examples:** `Serializable snapshot isolation aborted one transaction before the write-skew cycle committed.` → SSI hủy một transaction trước khi cycle commit.
**Liên kết tiếng Hàn:** `직렬화 가능한 스냅샷 격리`.

## 17. phantom protection /ˈfæntəm prəˈtɛkʃən/
**Part of speech:** noun
**Core meaning (English):** preventing a concurrent insert, delete, or update from changing the set of rows matched by a transaction's repeated predicate query.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo vệ tập row khỏi record “ma” xuất hiện giữa hai lần query.
**Grammar & collocations:** `phantom-protection mechanism` — mechanism; `protect a range predicate` — bảo vệ.
**Examples:** `Phantom protection kept two executions of the same range query from returning different row sets.` → Protection giữ hai lần query cùng range ra cùng tập row.
**Liên kết tiếng Hàn:** `팬텀 보호`.

## 18. commit dependency /kəˈmɪt dɪˈpɛndənsi/
**Part of speech:** noun
**Core meaning (English):** a requirement that one transaction's commit or visibility wait for another transaction whose data it observed or used.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transaction phụ thuộc phải chờ transaction nguồn commit.
**Grammar & collocations:** `commit-dependency graph` — graph; `propagate a commit wait` — lan truyền.
**Examples:** `The commit dependency delayed visibility until the remote participant confirmed its write.` → Dependency trì hoãn visibility tới khi participant remote xác nhận.
**Liên kết tiếng Hàn:** `커밋 종속성`.

## 19. distributed commit /dɪˈstrɪbjətɪd kəˈmɪt/
**Part of speech:** noun
**Core meaning (English):** coordinating a transaction's atomic outcome across multiple resource managers or database nodes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều node cùng commit hoặc cùng abort một giao dịch.
**Grammar & collocations:** `distributed-commit coordinator` — coordinator; `coordinate resource managers` — điều phối.
**Examples:** `Distributed commit kept the ledger and inventory changes atomic across separate services.` → Commit phân tán giữ ledger và inventory nguyên tử.
**Liên kết tiếng Hàn:** `분산 커밋`.

## 20. presumed abort /prɪˈzuːmd əˈbɔrt/
**Part of speech:** noun
**Core meaning (English):** a distributed-transaction logging optimization that treats an absent commit record as evidence that the transaction aborted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không thấy commit record thì mặc định transaction abort.
**Grammar & collocations:** `presumed-abort logging` — logging; `omit an explicit abort record` — bỏ.
**Examples:** `Presumed abort reduced log traffic because failed transactions needed no separate abort record.` → Presumed abort giảm log vì transaction fail không cần record riêng.
**Liên kết tiếng Hàn:** `추정 중단`.

## Review in context

**Conflict serializability** and **view serializability** can be analyzed with a **precedence graph**. **Two-phase locking**, especially **strict 2PL**, uses an **intention lock** and may trigger **lock escalation**; systems need **deadlock detection**, **wound-wait**, or **wait-die**. Alternatives include **timestamp ordering** and **optimistic validation**. **Snapshot isolation** can permit **write skew**, while a **predicate lock**, **serializable snapshot isolation**, and **phantom protection** preserve stronger guarantees. In distributed work, a **commit dependency** may delay visibility; **distributed commit** and **presumed abort** coordinate failure handling.

**Bản dịch tiếng Việt:** **Conflict serializability** và **view serializability** có thể phân tích bằng **precedence graph**. **Two-phase locking**, đặc biệt **strict 2PL**, dùng **intention lock** và có thể gặp **lock escalation**; hệ thống cần **deadlock detection**, **wound-wait** hoặc **wait-die**. Các lựa chọn khác gồm **timestamp ordering** và **optimistic validation**. **Snapshot isolation** có thể cho phép **write skew**, còn **predicate lock**, **serializable snapshot isolation** và **phantom protection** giữ bảo đảm mạnh hơn. Trong giao dịch phân tán, **commit dependency** có thể trì hoãn visibility; **distributed commit** và **presumed abort** xử lý failure.
