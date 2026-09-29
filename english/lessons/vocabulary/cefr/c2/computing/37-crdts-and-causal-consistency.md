# C2 Vocabulary — CRDTs and causal consistency

This lesson follows multi-writer replication from causal ordering through convergent data types, session guarantees, and state repair.

Flow: **causal consistency → happens-before relation → dotted version vector → conflict-free replicated data type → operation-based CRDT → state-based CRDT → join-semilattice → causal broadcast → read-your-writes → monotonic reads → writes-follow-reads → session guarantee → eventual convergence → anti-entropy repair → delta-state merge → tombstone compaction → observed-remove set → last-writer-wins register → bounded counter → causal stability**.

## 1. causal consistency /ˈkɔzəl kənˈsɪstənsi/
**Part of speech:** noun
**Core meaning (English):** a replication guarantee requiring causally related writes to be observed in the same order by every reader.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các write có quan hệ nhân quả phải được thấy theo cùng thứ tự.
**Grammar & collocations:** `causal-consistency model` — model; `enforce causal visibility` — bảo đảm.
**Examples:** `Causal consistency prevented a reply from appearing before the message that caused it.` → Causal consistency ngăn reply xuất hiện trước message nguồn.
**Liên kết tiếng Hàn:** `인과적 일관성`.

## 2. happens-before relation /ˈhæpənz bɪˈfɔr rɪˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** a partial order indicating that one event could have influenced another in a distributed execution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ thứ tự một phần cho biết event này có thể ảnh hưởng event kia.
**Grammar & collocations:** `happens-before relation` — relation; `infer causal precedence` — suy ra.
**Examples:** `The happens-before relation showed that the cache invalidation followed the configuration update.` → Quan hệ cho thấy invalidation sau update.
**Liên kết tiếng Hàn:** `발생 전 관계`.

## 3. dotted version vector /ˈdɑtɪd ˈvɝʒən ˈvɛktər/
**Part of speech:** noun
**Core meaning (English):** a compact causal metadata structure that records a replica's summarized history plus one specific event dot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata tóm tắt history và đánh dấu riêng event mới.
**Grammar & collocations:** `dotted-version-vector entry` — entry; `track a causal dot` — theo dõi.
**Examples:** `The dotted version vector distinguished a new update from one already incorporated by the replica.` → Dotted vector phân biệt update mới với update đã nhận.
**Liên kết tiếng Hàn:** `점 버전 벡터`.

## 4. conflict-free replicated data type /ˈkɑnflɪkt friː ˈrɛpləˌkeɪtɪd ˈdeɪtə taɪp/
**Part of speech:** noun
**Core meaning (English):** a replicated data structure designed to merge concurrent updates deterministically without coordination.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data type tự merge update đồng thời mà không cần lock trung tâm.
**Grammar & collocations:** `conflict-free-replicated-data-type design` — design; `merge concurrent updates` — gộp.
**Examples:** `The conflict-free replicated data type let two offline clients edit the same checklist.` → CRDT cho hai client offline sửa checklist.
**Liên kết tiếng Hàn:** `충돌 없는 복제 데이터 유형`.

## 5. operation-based CRDT /ˌɑpəˈreɪʃən beɪst ˌsiː ɑr diː ˈtiː/
**Part of speech:** noun
**Core meaning (English):** a CRDT that replicates operations and relies on delivery or causal assumptions to apply them consistently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truyền operation thay vì gửi toàn bộ state.
**Grammar & collocations:** `operation-based-CRDT delivery` — delivery; `broadcast an update operation` — phát.
**Examples:** `The operation-based CRDT required causal delivery before applying a remove operation.` → CRDT dạng operation cần delivery có nhân quả trước remove.
**Liên kết tiếng Hàn:** `연산 기반 CRDT`.

## 6. state-based CRDT /steɪt beɪst ˌsiː ɑr diː ˈtiː/
**Part of speech:** noun
**Core meaning (English):** a CRDT that merges replicas by joining their states, usually under a monotonic semilattice order.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gửi state và merge bằng phép join có tính hội tụ.
**Grammar & collocations:** `state-based-CRDT merge` — merge; `join replica states` — join.
**Examples:** `The state-based CRDT healed after a disconnected replica exchanged its latest state.` → CRDT tự lành sau khi replica mất kết nối trao đổi state.
**Liên kết tiếng Hàn:** `상태 기반 CRDT`.

## 7. join-semilattice /dʒɔɪn ˈsɛmɪˌlætɪs/
**Part of speech:** noun
**Core meaning (English):** a partially ordered structure in which any two states have a least upper bound used as their deterministic merge.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấu trúc có phép join tạo state chung tối thiểu của hai bản sao.
**Grammar & collocations:** `join-semilattice merge` — merge; `compute a least upper bound` — tính.
**Examples:** `The join-semilattice made repeated merges safe because the operation was associative and idempotent.` → Semilattice giúp merge lặp an toàn.
**Liên kết tiếng Hàn:** `조인 반격자`.

## 8. causal broadcast /ˈkɔzəl ˈbrɔdˌkæst/
**Part of speech:** noun
**Core meaning (English):** message dissemination that preserves the causal order of broadcasts at every receiving replica.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** broadcast giữ thứ tự nhân quả ở mọi replica.
**Grammar & collocations:** `causal-broadcast protocol` — protocol; `deliver messages causally` — giao.
**Examples:** `Causal broadcast delivered the schema change before records that depended on it.` → Broadcast giao schema trước record phụ thuộc.
**Liên kết tiếng Hàn:** `인과적 브로드캐스트`.

## 9. read-your-writes /riːd jʊr raɪts/
**Part of speech:** noun
**Core meaning (English):** a session guarantee that a client will see its own completed writes in later reads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đã write rồi thì lần đọc sau phải thấy write của chính mình.
**Grammar & collocations:** `read-your-writes guarantee` — guarantee; `route a session to a caught-up replica` — route.
**Examples:** `Read-your-writes consistency kept the profile page from showing the old email after a successful edit.` → Guarantee ngăn trang profile hiện email cũ.
**Liên kết tiếng Hàn:** `자기 쓰기 읽기`.

## 10. monotonic reads /məˈnɑtənɪk riːdz/
**Part of speech:** noun
**Core meaning (English):** a session guarantee that later reads never return a state older than one already observed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đọc sau không được quay về state cũ hơn đọc trước.
**Grammar & collocations:** `monotonic-reads guarantee` — guarantee; `avoid stale regressions` — tránh.
**Examples:** `Monotonic reads stopped a user from seeing a restored document after seeing its newer revision.` → Guarantee ngăn thấy bản cũ sau bản mới.
**Liên kết tiếng Hàn:** `단조 읽기`.

## 11. writes-follow-reads /raɪts ˈfɑloʊ riːdz/
**Part of speech:** noun
**Core meaning (English):** a session guarantee requiring a write to reflect every causally prior value the client has already read.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** write sau phải bao hàm thông tin đã đọc trước đó.
**Grammar & collocations:** `writes-follow-reads guarantee` — guarantee; `carry a causal dependency` — mang.
**Examples:** `Writes-follow-reads ensured the annotation update included the document version the editor had viewed.` → Write annotation mang version document đã xem.
**Liên kết tiếng Hàn:** `읽기 후 쓰기`.

## 12. session guarantee /ˈsɛʃən ˌɡærənˈtiː/
**Part of speech:** noun
**Core meaning (English):** a consistency promise applied to the sequence of operations issued by one client session.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lời hứa consistency theo vòng đời một session.
**Grammar & collocations:** `session-guarantee policy` — policy; `preserve a client session` — giữ.
**Examples:** `The session guarantee hid replica movement from the user during a rolling deployment.` → Guarantee che việc chuyển replica.
**Liên kết tiếng Hàn:** `세션 보장`.

## 13. eventual convergence /ɪˈvɛntʃuəl kənˈvɝdʒəns/
**Part of speech:** noun
**Core meaning (English):** the property that replicas eventually reach an equivalent state after receiving the same updates and no new changes occur.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cùng nhận update thì các replica cuối cùng giống nhau.
**Grammar & collocations:** `eventual-convergence proof` — proof; `demonstrate replica convergence` — chứng minh.
**Examples:** `Eventual convergence allowed the two offline calendars to become identical after reconnection.` → Hai calendar offline cuối cùng giống nhau.
**Liên kết tiếng Hàn:** `최종 수렴`.

## 14. anti-entropy repair /ˌænti ˈɛntəpi rɪˈpɛr/
**Part of speech:** noun
**Core meaning (English):** background comparison and exchange that repairs missing or divergent replica state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quá trình nền so sánh và bù state lệch.
**Grammar & collocations:** `anti-entropy-repair cycle` — cycle; `reconcile divergent replicas` — hòa giải.
**Examples:** `Anti-entropy repair found a missed update that normal foreground traffic had never retransmitted.` → Repair tìm update bị lỡ.
**Liên kết tiếng Hàn:** `반엔트로피 복구`.

## 15. delta-state merge /ˈdɛltə steɪt mɝdʒ/
**Part of speech:** noun
**Core meaning (English):** merging a compact state difference rather than transferring an entire replicated data structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ gửi phần state thay đổi để tiết kiệm bandwidth.
**Grammar & collocations:** `delta-state-merge protocol` — protocol; `ship a compact delta` — gửi.
**Examples:** `Delta-state merge reduced synchronization traffic for a large collaborative board.` → Merge delta giảm traffic đồng bộ.
**Liên kết tiếng Hàn:** `델타 상태 병합`.

## 16. tombstone compaction /ˈtuːmstoʊn kəmˈpækʃən/
**Part of speech:** noun
**Core meaning (English):** safely removing deletion markers after the system knows no replica can reintroduce the deleted item.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dọn marker xóa khi chắc replica cũ không resurrect item.
**Grammar & collocations:** `tombstone-compaction threshold` — threshold; `garbage-collect deletion markers` — dọn.
**Examples:** `Tombstone compaction reclaimed storage only after causal stability was established.` → Compaction chỉ dọn sau khi ổn định nhân quả.
**Liên kết tiếng Hàn:** `툼스톤 압축`.

## 17. observed-remove set /əbˈzɝvd rɪˈmuːv sɛt/
**Part of speech:** noun
**Core meaning (English):** a set CRDT in which a remove operation cancels only additions it has observed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** remove chỉ xóa add đã thấy, không xóa add concurrent chưa biết.
**Grammar & collocations:** `observed-remove-set semantics` — semantics; `remove an observed tag` — xóa.
**Examples:** `The observed-remove set preserved a tag added concurrently on another device.` → OR-set giữ tag được add đồng thời nơi khác.
**Liên kết tiếng Hàn:** `관찰된 제거 집합`.

## 18. last-writer-wins register /læst ˈraɪtər wɪnz ˈrɛdʒɪstər/
**Part of speech:** noun
**Core meaning (English):** a register CRDT that resolves concurrent assignments by selecting the value with the greatest ordering timestamp.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** assignment cạnh tranh được phân xử theo timestamp lớn nhất.
**Grammar & collocations:** `last-writer-wins-register policy` — policy; `resolve a concurrent assignment` — phân xử.
**Examples:** `The last-writer-wins register selected the newest display name after offline edits converged.` → Register chọn display name mới nhất.
**Liên kết tiếng Hàn:** `최종 작성자 승리 레지스터`.

## 19. bounded counter /ˈbaʊndɪd ˈkaʊntər/
**Part of speech:** noun
**Core meaning (English):** a replicated counter that enforces a lower or upper bound while allowing distributed increments or decrements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** counter phân tán nhưng không vượt giới hạn, như số ghế còn lại.
**Grammar & collocations:** `bounded-counter invariant` — invariant; `reserve capacity atomically` — giữ chỗ.
**Examples:** `The bounded counter prevented independent replicas from allocating more seats than the venue held.` → Counter ngăn cấp quá số ghế.
**Liên kết tiếng Hàn:** `경계 카운터`.

## 20. causal stability /ˈkɔzəl stəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the point at which a replica can prove that no future message will introduce an unseen event causally earlier than a chosen position.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mốc đủ chắc để dọn metadata cũ vì không còn event nhân quả đến sau.
**Grammar & collocations:** `causal-stability frontier` — frontier; `declare history stable` — xác nhận.
**Examples:** `Causal stability allowed the service to compact old tombstones without risking resurrection.` → Stability cho phép dọn tombstone an toàn.
**Liên kết tiếng Hàn:** `인과적 안정성`.

## Review in context

**Causal consistency** orders updates according to a **happens-before relation**, with metadata such as a **dotted version vector**. A **conflict-free replicated data type** may be an **operation-based CRDT** or a **state-based CRDT**, often using a **join-semilattice** and **causal broadcast**. Session guarantees include **read-your-writes**, **monotonic reads**, and **writes-follow-reads**. Replicas aim for **eventual convergence** through **anti-entropy repair** and **delta-state merge**. Safe cleanup uses **tombstone compaction** after **causal stability**; specialized structures include an **observed-remove set**, a **last-writer-wins register**, and a **bounded counter**.

**Bản dịch tiếng Việt:** **Causal consistency** sắp xếp update theo **happens-before relation**, dùng metadata như **dotted version vector**. **Conflict-free replicated data type** có thể dạng **operation-based** hoặc **state-based**, thường dùng **join-semilattice** và **causal broadcast**. Các session guarantee gồm **read-your-writes**, **monotonic reads** và **writes-follow-reads**. Replica hướng tới **eventual convergence** qua **anti-entropy repair** và **delta-state merge**. Dọn an toàn dùng **tombstone compaction** sau **causal stability**; các cấu trúc chuyên biệt gồm **observed-remove set**, **last-writer-wins register** và **bounded counter**.
