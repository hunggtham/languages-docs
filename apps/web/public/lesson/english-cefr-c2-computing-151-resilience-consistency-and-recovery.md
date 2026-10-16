# C2 Vocabulary — Resilience, consistency, and recovery

This lesson follows a distributed request through overload control, coordinated transactions, replica guarantees, and disaster recovery.

Flow: **adaptive concurrency → retry amplification → jittered backoff → fallback response → stale response → cache stampede → singleflight suppression → quorum write → failover promotion → inbox pattern → saga compensation → transaction coordinator → coordinated commit protocol → three-phase commit → commit record → write concern → read concern → consistency level → disaster recovery drill → warm standby**.

## 1. adaptive concurrency /əˈdæptɪv kənˈkʌrənsi/
**Part of speech:** noun
**Core meaning (English):** dynamically adjusting the number of in-flight operations according to observed latency, errors, or capacity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tự điều chỉnh số operation đang chạy theo latency, error hoặc capacity quan sát được.
**Grammar & collocations:** `adaptive-concurrency limit` — giới hạn; `reduce in-flight work` — giảm.
**Examples:** `Adaptive concurrency lowered admission when downstream latency began to climb.` → Concurrency thích ứng giảm admission khi latency downstream tăng.
**Liên kết tiếng Hàn:** `적응형 동시성`.

## 2. retry amplification /ˈriːtraɪ ˌæmplɪfɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** extra load created when retries multiply traffic during an already failing condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tải tăng thêm khi retry nhân traffic trong lúc hệ thống đã lỗi.
**Grammar & collocations:** `retry-amplification factor` — hệ số; `cap repeated attempts` — giới hạn.
**Examples:** `Retry amplification overwhelmed the dependency after every client retried at once.` → Amplification làm dependency quá tải khi client retry đồng loạt.
**Liên kết tiếng Hàn:** `재시도 증폭`.

## 3. jittered backoff /ˈdʒɪtərd ˈbækɒf/
**Part of speech:** noun
**Core meaning (English):** a retry delay with random variation that prevents many clients from retrying simultaneously.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** delay retry có biến thiên ngẫu nhiên để client không retry cùng lúc.
**Grammar & collocations:** `jittered-backoff interval` — khoảng; `spread retry arrivals` — giãn.
**Examples:** `Jittered backoff spread the recovery traffic over several seconds.` → Backoff có jitter giãn traffic recovery trong vài giây.
**Liên kết tiếng Hàn:** `지터 백오프`.

## 4. fallback response /ˈfɔːlbæk rɪˈspɒns/
**Part of speech:** noun
**Core meaning (English):** an alternative result returned when the preferred computation or dependency is unavailable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết quả thay thế khi computation/dependency chính không dùng được.
**Grammar & collocations:** `fallback-response policy` — policy; `serve a reduced view` — phục vụ.
**Examples:** `The gateway returned a fallback response with the last known exchange rate.` → Gateway trả response dự phòng với tỷ giá gần nhất.
**Liên kết tiếng Hàn:** `대체 응답`.

## 5. stale response /steɪl rɪˈspɒns/
**Part of speech:** noun
**Core meaning (English):** a result produced from data that may no longer reflect the newest authoritative state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết quả dựa trên data có thể không còn là state mới nhất.
**Grammar & collocations:** `stale-response window` — khoảng; `serve boundedly stale data` — phục vụ.
**Examples:** `The catalog allowed a stale response for one minute while the primary store recovered.` → Catalog cho response cũ tối đa một phút khi store chính hồi phục.
**Liên kết tiếng Hàn:** `오래된 응답`.

## 6. cache stampede /kæʃ stæmˈpiːd/
**Part of speech:** noun
**Core meaning (English):** a surge of simultaneous recomputation requests after a shared cached item expires.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều request cùng recompute khi item cache chung hết hạn.
**Grammar & collocations:** `cache-stampede protection` — bảo vệ; `coalesce refreshes` — gộp.
**Examples:** `The cache stampede saturated the database when a popular item expired.` → Stampede làm database quá tải khi item phổ biến hết hạn.
**Liên kết tiếng Hàn:** `캐시 쇄도`.

## 7. singleflight suppression /ˈsɪŋɡəl flaɪt səˈpreʃən/
**Part of speech:** noun
**Core meaning (English):** coalescing identical concurrent work so only one operation fetches or computes a missing result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp work giống nhau để chỉ một operation fetch/compute result thiếu.
**Grammar & collocations:** `singleflight-suppression key` — key; `coalesce identical lookups` — gộp.
**Examples:** `Singleflight suppression prevented ten workers from rebuilding the same report.` → Suppression ngăn mười worker rebuild cùng report.
**Liên kết tiếng Hàn:** `싱글플라이트 억제`.

## 8. quorum write /ˈkwɔːrəm raɪt/
**Part of speech:** noun
**Core meaning (English):** a write accepted after enough replicas acknowledge it to satisfy the configured quorum.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** write được nhận khi đủ replica ack theo quorum cấu hình.
**Grammar & collocations:** `quorum-write threshold` — ngưỡng; `acknowledge a majority write` — xác nhận.
**Examples:** `The quorum write completed after three of five replicas persisted the value.` → Write xong khi ba trên năm replica lưu value.
**Liên kết tiếng Hàn:** `쿼럼 쓰기`.

## 9. failover promotion /ˈfeɪloʊvər prəˈmoʊʃən/
**Part of speech:** noun
**Core meaning (English):** the process of making a standby or replica the active service after the current primary fails.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa standby/replica thành service active sau khi primary lỗi.
**Grammar & collocations:** `failover-promotion delay` — delay; `promote a healthy replica` — thăng cấp.
**Examples:** `Failover promotion moved writes to the replica with the smallest recovery gap.` → Promotion chuyển write tới replica có gap nhỏ nhất.
**Liên kết tiếng Hàn:** `장애 조치 승격`.

## 10. inbox pattern /ˈɪnbɒks ˈpætərn/
**Part of speech:** noun
**Core meaning (English):** a messaging pattern that records consumed messages so handlers can detect and ignore duplicates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pattern ghi message đã nhận để handler nhận ra và bỏ duplicate.
**Grammar & collocations:** `inbox-pattern table` — table; `deduplicate a delivered event` — loại trùng.
**Examples:** `The inbox pattern made the payment handler safe when the broker redelivered an event.` → Inbox giúp handler payment an toàn khi broker gửi lại event.
**Liên kết tiếng Hàn:** `인박스 패턴`.

## 11. saga compensation /ˈsɑːɡə ˌkɒmpənˈseɪʃən/
**Part of speech:** noun
**Core meaning (English):** a corrective action that semantically reverses a completed step when a later saga step fails.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** action sửa để đảo nghĩa một step đã xong khi step sau fail.
**Grammar & collocations:** `saga-compensation action` — action; `refund a reserved amount` — hoàn.
**Examples:** `Saga compensation released the seat when payment confirmation never arrived.` → Compensation trả ghế khi payment không tới.
**Liên kết tiếng Hàn:** `사가 보상`.

## 12. transaction coordinator /trænˈzækʃən koʊˈɔːrdəneɪtər/
**Part of speech:** noun
**Core meaning (English):** a component that drives participants through the phases of a distributed transaction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component điều khiển participant qua các phase của transaction phân tán.
**Grammar & collocations:** `transaction-coordinator log` — log; `collect participant votes` — thu.
**Examples:** `The transaction coordinator recorded every participant before deciding whether to commit.` → Coordinator ghi từng participant trước quyết định commit.
**Liên kết tiếng Hàn:** `트랜잭션 코디네이터`.

## 13. coordinated commit protocol /koʊˈɔːrdəneɪtɪd kəˈmɪt ˈproʊtəˌkɒl/
**Part of speech:** noun
**Core meaning (English):** a protocol that coordinates several participants so they make one shared commit decision instead of diverging.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** protocol phối hợp nhiều participant để cùng quyết định commit, không diverge.
**Grammar & collocations:** `coordinated-commit-protocol state` — state; `align participant decisions` — đồng bộ.
**Examples:** `The coordinated commit protocol delayed the decision until every participant reported a durable prepare.` → Protocol commit phối hợp trì hoãn quyết định đến khi mọi participant báo prepare bền vững.
**Liên kết tiếng Hàn:** `2단계 커밋`.

## 14. three-phase commit /ˌθriː feɪz kəˈmɪt/
**Part of speech:** noun
**Core meaning (English):** a commit protocol that adds an intermediate phase to reduce uncertainty during coordinator failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** protocol thêm phase trung gian để giảm bất định khi coordinator lỗi.
**Grammar & collocations:** `three-phase-commit state` — state; `enter a pre-commit phase` — vào.
**Examples:** `Three-phase commit added a pre-commit state before participants became ready to finish.` → Commit ba phase thêm state pre-commit.
**Liên kết tiếng Hàn:** `3단계 커밋`.

## 15. commit record /kəˈmɪt ˈrekərd/
**Part of speech:** noun
**Core meaning (English):** durable metadata showing that a transaction or log position has been finalized.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata bền vững cho thấy transaction/log position đã chốt.
**Grammar & collocations:** `commit-record offset` — offset; `persist a final decision` — lưu.
**Examples:** `Recovery found the commit record and replayed the transaction as complete.` → Recovery thấy record commit và replay transaction đã xong.
**Liên kết tiếng Hàn:** `커밋 기록`.

## 16. write concern /raɪt kənˈsɜːrn/
**Part of speech:** noun
**Core meaning (English):** a setting specifying how many replicas or storage guarantees a write must satisfy before success is reported.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** setting nêu write cần bao nhiêu replica/đảm bảo storage trước khi báo thành công.
**Grammar & collocations:** `write-concern level` — level; `require durable acknowledgment` — yêu cầu.
**Examples:** `The financial record used a write concern that required a durable majority acknowledgment.` → Record tài chính yêu cầu majority ack bền vững.
**Liên kết tiếng Hàn:** `쓰기 우려`.

## 17. read concern /riːd kənˈsɜːrn/
**Part of speech:** noun
**Core meaning (English):** a setting specifying which committedness or consistency guarantee a read must provide.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** setting nêu read phải bảo đảm mức commit/consistency nào.
**Grammar & collocations:** `read-concern mode` — mode; `read only committed data` — đọc.
**Examples:** `The report selected a read concern that excluded uncommitted replica state.` → Report chọn read concern bỏ state chưa commit.
**Liên kết tiếng Hàn:** `읽기 우려`.

## 18. consistency level /kənˈsɪstənsi ˈlevəl/
**Part of speech:** noun
**Core meaning (English):** a declared trade-off describing how current, ordered, or mutually visible distributed reads and writes must be.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức trade-off về độ mới, thứ tự và visibility giữa read/write phân tán.
**Grammar & collocations:** `consistency-level selection` — lựa chọn; `choose monotonic reads` — chọn.
**Examples:** `The dashboard used a weaker consistency level to remain available during a regional partition.` → Dashboard dùng level yếu hơn để vẫn available khi partition vùng.
**Liên kết tiếng Hàn:** `일관성 수준`.

## 19. disaster recovery drill /dɪˈzæstər rɪˈkʌvəri drɪl/
**Part of speech:** noun
**Core meaning (English):** a planned exercise that tests whether systems and people can restore service after a severe failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** diễn tập kiểm tra hệ thống và người có restore service sau failure lớn không.
**Grammar & collocations:** `disaster-recovery-drill report` — report; `restore from a backup` — khôi phục.
**Examples:** `The disaster recovery drill exposed an undocumented dependency on the old network.` → Drill lộ dependency mạng cũ chưa ghi.
**Liên kết tiếng Hàn:** `재해 복구 훈련`.

## 20. warm standby /wɔːrm ˈstændbaɪ/
**Part of speech:** noun
**Core meaning (English):** a secondary system kept partly initialized so it can take over faster than a cold backup.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ phụ được khởi tạo một phần để takeover nhanh hơn backup lạnh.
**Grammar & collocations:** `warm-standby replica` — replica; `promote the standby` — thăng cấp.
**Examples:** `The warm standby already had recent state and needed only a final promotion step.` → Standby nóng đã có state mới và chỉ cần promotion cuối.
**Liên kết tiếng Hàn:** `웜 스탠바이`.

## Review in context

**Adaptive concurrency** limits in-flight work; without control, **retry amplification** grows, so **jittered backoff** spreads attempts. A **fallback response** or **stale response** can preserve service while a **cache stampede** is prevented by **singleflight suppression**. A **quorum write** protects replicated state, and **failover promotion** moves authority to a healthy copy. The **inbox pattern** removes duplicate messages, while **saga compensation** reverses a failed business step. A **transaction coordinator** can drive a **coordinated commit protocol** or **three-phase commit**, recording a **commit record**. **Write concern** and **read concern** define guarantees; a **consistency level** makes the trade-off explicit. A **disaster recovery drill** tests restoration, and a **warm standby** shortens takeover.

**Bản dịch tiếng Việt:** **Adaptive concurrency** giới hạn work đang chạy; nếu không, **retry amplification** tăng, nên **jittered backoff** giãn các lần thử. **Fallback response** hoặc **stale response** giữ service hoạt động, còn **singleflight suppression** ngăn **cache stampede**. **Quorum write** bảo vệ state sao chép, còn **failover promotion** chuyển quyền sang bản sao khỏe. **Inbox pattern** bỏ message trùng, còn **saga compensation** đảo step nghiệp vụ lỗi. **Transaction coordinator** điều khiển **coordinated commit protocol** hoặc **three-phase commit** và ghi **commit record**. **Write concern** và **read concern** định nghĩa bảo đảm; **consistency level** làm rõ trade-off. **Disaster recovery drill** kiểm tra khôi phục, còn **warm standby** rút ngắn takeover.
