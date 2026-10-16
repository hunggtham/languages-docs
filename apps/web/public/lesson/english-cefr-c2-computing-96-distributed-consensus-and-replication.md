# C2 Vocabulary — Distributed consensus and replication

This lesson follows a replicated state machine from quorum evidence and leader terms through membership changes, snapshots, and client guarantees.

Flow: **quorum certificate → leader lease → term number → commit index → state machine replication → linearizability fence → read quorum → write quorum → split-brain prevention → gossip dissemination → membership change → joint consensus → snapshot installation → log compaction → follower lag → leader election timeout → client session lease → idempotency token → replication watermark → durable proposal**.

## 1. quorum certificate /ˈkwɔːrəm sərˈtɪfɪkət/
**Part of speech:** noun
**Core meaning (English):** cryptographic or signed evidence that enough replicas accepted a value or proposal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bằng chứng đủ replica chấp nhận value/proposal.
**Grammar & collocations:** `quorum-certificate verification` — verification; `aggregate replica votes` — gộp.
**Examples:** `The quorum certificate allowed a new leader to treat the block as committed.` → Certificate cho leader coi block đã commit.
**Liên kết tiếng Hàn:** `쿼럼 인증서`.

## 2. leader lease /ˈliːdər liːs/
**Part of speech:** noun
**Core meaning (English):** a time-limited authority allowing one replica to act as leader while its lease remains valid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyền leader có thời hạn.
**Grammar & collocations:** `leader-lease expiry` — expiry; `renew leadership authority` — gia hạn.
**Examples:** `The leader lease prevented a stale replica from serving authoritative reads.` → Lease ngăn replica cũ phục vụ read.
**Liên kết tiếng Hàn:** `리더 임대`.

## 3. term number /tɜːrm ˈnʌmbər/
**Part of speech:** noun
**Core meaning (English):** a monotonically advancing identifier for a leadership period or consensus epoch.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ID tăng dần cho giai đoạn leader hoặc epoch.
**Grammar & collocations:** `term-number comparison` — comparison; `reject an obsolete term` — từ chối.
**Examples:** `The follower rejected the message because its term number was older.` → Follower từ chối term cũ.
**Liên kết tiếng Hàn:** `텀 번호`.

## 4. commit index /kəˈmɪt ˈɪndeks/
**Part of speech:** noun
**Core meaning (English):** the highest replicated log position known to be safe for state-machine application.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vị trí log cao nhất đã replicate an toàn để apply.
**Grammar & collocations:** `commit-index advancement` — advancement; `apply an entry in order` — áp dụng.
**Examples:** `The commit index advanced only after a majority acknowledged the entry.` → Index tiến sau majority ack.
**Liên kết tiếng Hàn:** `커밋 인덱스`.

## 5. state machine replication /steɪt məˈʃiːn ˌreplɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** keeping deterministic copies of a service synchronized by applying the same ordered commands.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồng bộ bản sao bằng cùng command theo thứ tự.
**Grammar & collocations:** `state-machine-replication log` — log; `apply a deterministic command` — áp dụng.
**Examples:** `State machine replication kept the account balance identical across regions.` → Replication giữ balance giống nhau.
**Liên kết tiếng Hàn:** `상태 머신 복제`.

## 6. linearizability fence /ˌlɪniərəˈzæbɪləti fens/
**Part of speech:** noun
**Core meaning (English):** an ordering barrier that makes a read or write observe a single global point in a concurrent history.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** barrier buộc read/write thấy một điểm thứ tự toàn cục.
**Grammar & collocations:** `linearizability-fence operation` — operation; `order a visibility point` — xếp thứ tự.
**Examples:** `The linearizability fence made the read reflect the preceding successful write.` → Fence đảm bảo read thấy write trước.
**Liên kết tiếng Hàn:** `선형화 가능성 펜스`.

## 7. read quorum /riːd ˈkwɔːrəm/
**Part of speech:** noun
**Core meaning (English):** the minimum set of replicas whose responses are required for a read to be accepted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số replica tối thiểu cần cho read.
**Grammar & collocations:** `read-quorum size` — size; `collect a consistent response set` — thu thập.
**Examples:** `The read quorum overlapped the write quorum so at least one fresh replica was observed.` → Quorum read chồng quorum write.
**Liên kết tiếng Hàn:** `읽기 쿼럼`.

## 8. write quorum /raɪt ˈkwɔːrəm/
**Part of speech:** noun
**Core meaning (English):** the minimum set of replicas that must acknowledge a write before it is accepted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số replica tối thiểu phải ack write.
**Grammar & collocations:** `write-quorum acknowledgment` — acknowledgment; `persist a majority copy` — ghi bền.
**Examples:** `The write quorum rejected the update while too many replicas were unavailable.` → Quorum từ chối khi thiếu replica.
**Liên kết tiếng Hàn:** `쓰기 쿼럼`.

## 9. split-brain prevention /splɪt breɪn prɪˈvenʃən/
**Part of speech:** noun
**Core meaning (English):** mechanisms preventing disconnected groups of replicas from both believing they are authoritative leaders.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế ngăn hai nhóm cùng tin mình là leader.
**Grammar & collocations:** `split-brain-prevention rule` — rule; `fence an isolated leader` — cô lập.
**Examples:** `Split-brain prevention stopped a partitioned region from accepting conflicting writes.` → Prevention ngăn write xung đột.
**Liên kết tiếng Hàn:** `스플릿 브레인 방지`.

## 10. gossip dissemination /ˈɡɒsɪp dɪˌsemɪˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** spreading membership, health, or metadata through repeated peer-to-peer exchanges.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lan metadata qua trao đổi peer-to-peer lặp lại.
**Grammar & collocations:** `gossip-dissemination round` — round; `spread a membership update` — lan.
**Examples:** `Gossip dissemination informed distant replicas about the failed node.` → Gossip báo node lỗi.
**Liên kết tiếng Hàn:** `가십 전파`.

## 11. membership change /ˈmembərʃɪp tʃeɪndʒ/
**Part of speech:** noun
**Core meaning (English):** adding, removing, or replacing replicas in a consensus group.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thêm, xóa hoặc thay replica trong group.
**Grammar & collocations:** `membership-change proposal` — proposal; `reconfigure a replica set` — cấu hình lại.
**Examples:** `The membership change added a new region without losing quorum safety.` → Change thêm region mà giữ safety.
**Liên kết tiếng Hàn:** `멤버십 변경`.

## 12. joint consensus /dʒɔɪnt kənˈsensəs/
**Part of speech:** noun
**Core meaning (English):** a transition method requiring agreement from both old and new replica configurations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển cấu hình cần đồng thuận cả group cũ và mới.
**Grammar & collocations:** `joint-consensus phase` — phase; `overlap configurations` — chồng.
**Examples:** `Joint consensus made the replica replacement safe during a rolling migration.` → Consensus làm migration an toàn.
**Liên kết tiếng Hàn:** `공동 합의`.

## 13. snapshot installation /ˈsnæpʃɒt ˌɪnstəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** transferring and activating a compact state snapshot on a lagging replica.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gửi và kích hoạt snapshot state cho replica tụt hậu.
**Grammar & collocations:** `snapshot-installation stream` — stream; `restore a compact state` — khôi phục.
**Examples:** `Snapshot installation brought the new replica close to the leader's current state.` → Installation đưa replica gần state leader.
**Liên kết tiếng Hàn:** `스냅샷 설치`.

## 14. log compaction /lɒɡ kəmˈpækʃən/
**Part of speech:** noun
**Core meaning (English):** removing replicated log entries that are already represented by a durable snapshot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xóa log đã được snapshot bền vững biểu diễn.
**Grammar & collocations:** `log-compaction boundary` — boundary; `discard superseded entries` — bỏ.
**Examples:** `Log compaction kept the consensus log from growing without limit.` → Compaction giữ log không phình.
**Liên kết tiếng Hàn:** `로그 압축`.

## 15. follower lag /ˈfɒloʊər læɡ/
**Part of speech:** noun
**Core meaning (English):** the distance between a follower's applied or replicated position and the leader's position.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách vị trí follower so với leader.
**Grammar & collocations:** `follower-lag alert` — alert; `catch up a replica` — bắt kịp.
**Examples:** `Follower lag exceeded the read-your-writes guarantee after a network interruption.` → Lag vượt guarantee read-your-writes.
**Liên kết tiếng Hàn:** `팔로워 지연`.

## 16. leader election timeout /ˈliːdər ɪˈlekʃən ˈtaɪmaʊt/
**Part of speech:** noun
**Core meaning (English):** the interval a replica waits without leader communication before starting a new election.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian chờ trước khi replica khởi động election mới.
**Grammar & collocations:** `leader-election-timeout jitter` — jitter; `trigger a candidacy` — khởi động.
**Examples:** `The leader election timeout was randomized to reduce simultaneous candidacies.` → Timeout random để giảm tranh cử cùng lúc.
**Liên kết tiếng Hàn:** `리더 선출 타임아웃`.

## 17. client session lease /ˈklaɪənt ˈseʃən liːs/
**Part of speech:** noun
**Core meaning (English):** a time-limited server-held session that lets a client detect expiration or maintain ownership.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** session có thời hạn để client phát hiện hết hạn hoặc giữ ownership.
**Grammar & collocations:** `client-session-lease renewal` — renewal; `expire an ownership claim` — hết hạn.
**Examples:** `The client session lease expired when heartbeats stopped arriving.` → Lease hết khi heartbeat dừng.
**Liên kết tiếng Hàn:** `클라이언트 세션 임대`.

## 18. idempotency token /ˌɪdəmˈpoʊtənsi ˈtoʊkən/
**Part of speech:** noun
**Core meaning (English):** a client-supplied identifier allowing retries of the same operation without applying its effect twice.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ID giúp retry operation mà không apply hai lần.
**Grammar & collocations:** `idempotency-token store` — store; `deduplicate a retry` — khử trùng.
**Examples:** `The idempotency token made a timed-out payment retry safe.` → Token làm retry payment an toàn.
**Liên kết tiếng Hàn:** `멱등성 토큰`.

## 19. replication watermark /ˌreplɪˈkeɪʃən ˈwɔːtərmɑːrk/
**Part of speech:** noun
**Core meaning (English):** a position recording how far a replica or consumer has durably processed a stream.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mốc vị trí replica/consumer đã xử lý bền.
**Grammar & collocations:** `replication-watermark update` — update; `advance a durable position` — tiến.
**Examples:** `The replication watermark let the scheduler resume after a consumer restart.` → Watermark giúp resume.
**Liên kết tiếng Hàn:** `복제 워터마크`.

## 20. durable proposal /ˈdjʊərəbəl prəˈpoʊzəl/
**Part of speech:** noun
**Core meaning (English):** a consensus proposal recorded durably enough to survive a process or machine restart.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** proposal ghi bền để sống qua restart.
**Grammar & collocations:** `durable-proposal record` — record; `recover a pending command` — khôi phục.
**Examples:** `The durable proposal was replayed after the leader restarted.` → Proposal được replay sau restart.
**Liên kết tiếng Hàn:** `내구성 제안`.

## Review in context

A **quorum certificate**, **leader lease**, **term number**, and **commit index** support **state machine replication** and a **linearizability fence**. A **read quorum** and **write quorum** preserve visibility, while **split-brain prevention** and **gossip dissemination** maintain membership. A **membership change** uses **joint consensus**; **snapshot installation** and **log compaction** control storage. **Follower lag**, **leader election timeout**, **client session lease**, **idempotency token**, **replication watermark**, and **durable proposal** complete client and recovery guarantees.

**Bản dịch tiếng Việt:** **Quorum certificate**, **leader lease**, **term number** và **commit index** hỗ trợ **state machine replication** cùng **linearizability fence**. **Read quorum** và **write quorum** giữ visibility, còn **split-brain prevention** và **gossip dissemination** duy trì membership. **Membership change** dùng **joint consensus**; **snapshot installation** và **log compaction** kiểm soát storage. **Follower lag**, **leader election timeout**, **client session lease**, **idempotency token**, **replication watermark** và **durable proposal** hoàn thiện guarantee client/recovery.
