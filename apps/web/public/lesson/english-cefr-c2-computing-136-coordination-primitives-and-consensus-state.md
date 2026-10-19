# C2 Vocabulary — Coordination primitives and consensus state

This lesson follows a coordinated state change from conditional operations and watches through elections, replication, and safe commit.

Flow: **watch stream → conditional write → linearizable register → monotonic sequence → consensus round → proposal number → quorum acknowledgment → log matching → election timeout → heartbeat interval → learner replica → witness node → read index → leadership transfer → vote record → commit barrier → replication term → log truncation → leader stickiness → coordination epoch**.

## 1. watch stream /wɒtʃ striːm/
**Part of speech:** noun
**Core meaning (English):** a stream of notifications emitted when a watched key, object, or membership record changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stream notification phát khi key, object hoặc membership được watch đổi.
**Grammar & collocations:** `watch-stream cursor` — cursor; `subscribe to key changes` — đăng ký.
**Examples:** `The watch stream notified schedulers when the service endpoint changed.` → Stream báo scheduler khi endpoint đổi.
**Liên kết tiếng Hàn:** `감시 스트림`.

## 2. conditional write /kənˈdɪʃənəl raɪt/
**Part of speech:** noun
**Core meaning (English):** a write accepted only if a specified version, value, or predicate still holds.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** write chỉ được nhận nếu version, value hoặc predicate vẫn đúng.
**Grammar & collocations:** `conditional-write predicate` — predicate; `reject a stale update` — từ chối.
**Examples:** `The conditional write changed the owner only if the lease version was unchanged.` → Write chỉ đổi owner nếu version lease không đổi.
**Liên kết tiếng Hàn:** `조건부 쓰기`.

## 3. linearizable register /ˈlɪniərəˌzaɪzəbəl ˈredʒɪstər/
**Part of speech:** noun
**Core meaning (English):** a shared value whose operations appear to occur atomically in one real-time order.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value chung có operation trông như atomic theo một thứ tự thời gian thật.
**Grammar & collocations:** `linearizable-register read` — read; `observe the latest committed value` — thấy.
**Examples:** `The linearizable register returned the new leader to every client after the election.` → Register trả leader mới cho mọi client.
**Liên kết tiếng Hàn:** `선형화 가능 레지스터`.

## 4. monotonic sequence /ˌmɒnəˈtɒnɪk ˈsiːkwəns/
**Part of speech:** noun
**Core meaning (English):** an ordered series whose value never decreases as new coordination events are accepted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi có thứ tự không bao giờ giảm khi event mới được nhận.
**Grammar & collocations:** `monotonic-sequence number` — số; `reject an older generation` — từ chối.
**Examples:** `The monotonic sequence prevented a delayed response from overwriting a newer assignment.` → Sequence ngăn response trễ ghi đè assignment mới.
**Liên kết tiếng Hàn:** `단조 시퀀스`.

## 5. consensus round /kənˈsensəs raʊnd/
**Part of speech:** noun
**Core meaning (English):** one attempt to propose, replicate, and accept a value among cooperating nodes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một lần propose, replicate và accept value giữa node hợp tác.
**Grammar & collocations:** `consensus-round identifier` — identifier; `advance a replicated decision` — tiến.
**Examples:** `The consensus round chose a new configuration after the previous proposal timed out.` → Round chọn config mới sau timeout.
**Liên kết tiếng Hàn:** `합의 라운드`.

## 6. proposal number /prəˈpoʊzəl ˈnʌmbər/
**Part of speech:** noun
**Core meaning (English):** an ordered identifier that lets participants distinguish newer proposals from stale ones.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ID có thứ tự giúp participant phân biệt proposal mới/cũ.
**Grammar & collocations:** `proposal-number comparison` — so sánh; `reject a lower proposal` — từ chối.
**Examples:** `The acceptor ignored the message because its proposal number was older than the promised one.` → Acceptor bỏ message proposal cũ.
**Liên kết tiếng Hàn:** `제안 번호`.

## 7. quorum acknowledgment /ˈkwɔːrəm əkˈnɒlɪdʒmənt/
**Part of speech:** noun
**Core meaning (English):** confirmation from enough participants to treat a replicated operation as durably accepted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác nhận từ đủ participant để coi operation replicate đã được nhận bền.
**Grammar & collocations:** `quorum-acknowledgment count` — count; `wait for durable votes` — chờ.
**Examples:** `The leader returned success after receiving a quorum acknowledgment for the configuration entry.` → Leader trả success sau quorum ack.
**Liên kết tiếng Hàn:** `쿼럼 승인`.

## 8. log matching /lɒɡ ˈmætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** the property that replicas agree on entries and preceding history at a shared log position.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** replica thống nhất entry và history trước tại vị trí log chung.
**Grammar & collocations:** `log-matching check` — kiểm tra; `detect a divergent suffix` — phát hiện.
**Examples:** `Log matching exposed that one follower had an extra uncommitted suffix.` → Matching lộ follower có suffix thừa.
**Liên kết tiếng Hàn:** `로그 일치`.

## 9. election timeout /ɪˈlekʃən ˈtaɪmaʊt/
**Part of speech:** noun
**Core meaning (English):** the interval a follower waits without valid leadership signals before starting an election.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng follower chờ tín hiệu leader trước khi bắt đầu election.
**Grammar & collocations:** `election-timeout range` — range; `start a new candidacy` — bắt đầu.
**Examples:** `The election timeout was randomized so followers would not campaign simultaneously.` → Timeout random để follower không election cùng lúc.
**Liên kết tiếng Hàn:** `선거 시간 초과`.

## 10. heartbeat interval /ˈhɑːrtbiːt ˈɪntərvəl/
**Part of speech:** noun
**Core meaning (English):** the planned time between liveness messages sent by a leader or coordinator.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian giữa message liveness của leader/coordinator.
**Grammar & collocations:** `heartbeat-interval setting` — setting; `renew follower confidence` — gia hạn.
**Examples:** `The heartbeat interval was shorter than the election timeout to prevent unnecessary elections.` → Interval ngắn hơn timeout election.
**Liên kết tiếng Hàn:** `하트비트 간격`.

## 11. learner replica /ˈlɜːrnər ˈreplɪkə/
**Part of speech:** noun
**Core meaning (English):** a replica that receives and applies the log but does not yet participate in quorum decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** replica nhận/apply log nhưng chưa tham gia quyết định quorum.
**Grammar & collocations:** `learner-replica promotion` — promote; `catch up before voting` — bắt kịp.
**Examples:** `The learner replica caught up with the log before becoming a full voter.` → Learner bắt kịp trước khi thành voter.
**Liên kết tiếng Hàn:** `학습자 복제본`.

## 12. witness node /ˈwɪtnəs noʊd/
**Part of speech:** noun
**Core meaning (English):** a lightweight participant that contributes votes or failure evidence without storing the full data set.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** participant nhẹ góp vote/evidence nhưng không lưu full data.
**Grammar & collocations:** `witness-node vote` — vote; `break a quorum tie` — phá hòa.
**Examples:** `The witness node supplied a third vote without holding the replicated database.` → Witness góp vote thứ ba mà không giữ database.
**Liên kết tiếng Hàn:** `증인 노드`.

## 13. read index /riːd ˈɪndeks/
**Part of speech:** noun
**Core meaning (English):** a committed log position a leader confirms before serving a linearizable read.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vị trí log commit leader xác nhận trước khi trả read linearizable.
**Grammar & collocations:** `read-index round trip` — round trip; `confirm leadership before reading` — xác nhận.
**Examples:** `The read index ensured that the leader had not lost authority before returning the account balance.` → Read index xác nhận leader còn quyền.
**Liên kết tiếng Hàn:** `읽기 인덱스`.

## 14. leadership transfer /ˈliːdərʃɪp trænsˈfɜːr/
**Part of speech:** noun
**Core meaning (English):** a deliberate handoff of leader responsibility to a prepared successor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển quyền leader có chủ ý cho successor đã chuẩn bị.
**Grammar & collocations:** `leadership-transfer protocol` — protocol; `drain writes before handoff` — rút.
**Examples:** `Leadership transfer moved ownership to the replica with the most complete log.` → Transfer đưa ownership cho replica có log đầy nhất.
**Liên kết tiếng Hàn:** `리더십 이전`.

## 15. vote record /voʊt ˈrekərd/
**Part of speech:** noun
**Core meaning (English):** durable evidence of a participant's vote, term, or proposal decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** evidence bền về vote, term hoặc decision proposal của participant.
**Grammar & collocations:** `vote-record persistence` — lưu bền; `prevent a duplicate vote` — ngăn.
**Examples:** `The vote record stopped a restarted node from voting twice in one term.` → Record ngăn node restart vote hai lần.
**Liên kết tiếng Hàn:** `투표 기록`.

## 16. commit barrier /kəˈmɪt ˈbæriər/
**Part of speech:** noun
**Core meaning (English):** a condition that must be crossed before a replicated entry may be exposed as committed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện phải vượt trước khi entry replicate được lộ là commit.
**Grammar & collocations:** `commit-barrier check` — kiểm tra; `wait for a majority` — chờ.
**Examples:** `The commit barrier held the result until enough replicas stored the entry.` → Barrier giữ result đến khi đủ replica lưu.
**Liên kết tiếng Hàn:** `커밋 장벽`.

## 17. replication term /ˌreplɪˈkeɪʃən tɜːrm/
**Part of speech:** noun
**Core meaning (English):** a numbered leadership generation used to distinguish log entries from different coordinator eras.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thế hệ leader có số để phân biệt entry của các thời kỳ.
**Grammar & collocations:** `replication-term comparison` — so sánh; `fence an obsolete leader` — chặn.
**Examples:** `The follower rejected the entry because its replication term was older than the current term.` → Follower từ chối term cũ.
**Liên kết tiếng Hàn:** `복제 텀`.

## 18. log truncation /lɒɡ trʌŋˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** removing an obsolete prefix of a replicated log after its state is safely represented elsewhere.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ prefix log cũ sau khi state đã được giữ nơi khác an toàn.
**Grammar & collocations:** `log-truncation point` — point; `compact committed history` — nén.
**Examples:** `Log truncation reclaimed disk space after the snapshot became durable.` → Truncation thu hồi disk sau snapshot bền.
**Liên kết tiếng Hàn:** `로그 절단`.

## 19. leader stickiness /ˈliːdər ˈstɪkinəs/
**Part of speech:** noun
**Core meaning (English):** a preference for retaining the current leader when it remains healthy, reducing unnecessary elections.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ưu tiên giữ leader khỏe để giảm election không cần.
**Grammar & collocations:** `leader-stickiness policy` — policy; `avoid leadership churn` — tránh.
**Examples:** `Leader stickiness kept the cluster stable during brief network jitter.` → Stickiness giữ cluster ổn định khi jitter ngắn.
**Liên kết tiếng Hàn:** `리더 고착성`.

## 20. coordination epoch /koʊˌɔːrdəˈneɪʃən ˈiːpɒk/
**Part of speech:** noun
**Core meaning (English):** a numbered generation identifying the current authority and coordination state of a cluster.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thế hệ có số nhận diện authority và state coordination hiện tại.
**Grammar & collocations:** `coordination-epoch token` — token; `reject an old coordinator` — từ chối.
**Examples:** `The node rejected a command carrying an obsolete coordination epoch.` → Node từ chối command epoch cũ.
**Liên kết tiếng Hàn:** `조정 에포크`.

## Review in context

A **watch stream** reports changes, while a **conditional write** updates a **linearizable register** and a **monotonic sequence** prevents stale overwrite. A **consensus round** uses a **proposal number** and **quorum acknowledgment**; **log matching** checks replicas. An **election timeout** and **heartbeat interval** govern leadership. A **learner replica** catches up, a **witness node** contributes evidence, and a **read index** confirms safe reads. **Leadership transfer** hands off authority, a **vote record** persists decisions, a **commit barrier** exposes results, a **replication term** fences eras, **log truncation** compacts history, **leader stickiness** avoids churn, and a **coordination epoch** identifies current state.

**Bản dịch tiếng Việt:** **Watch stream** báo thay đổi, **conditional write** cập nhật **linearizable register**, còn **monotonic sequence** ngăn ghi đè cũ. **Consensus round** dùng **proposal number** và **quorum acknowledgment**; **log matching** kiểm tra replica. **Election timeout** và **heartbeat interval** quản lý leader. **Learner replica** bắt kịp, **witness node** góp evidence, và **read index** xác nhận read an toàn. **Leadership transfer** chuyển quyền, **vote record** lưu decision, **commit barrier** lộ result, **replication term** chặn thời kỳ cũ, **log truncation** nén history, **leader stickiness** tránh churn, còn **coordination epoch** nhận diện state hiện tại.
