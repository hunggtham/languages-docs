# C2 Vocabulary — Distributed time and clock semantics

This lesson follows a time value from physical synchronization through causal ordering, uncertainty, leases, and deadlines.

Flow: **monotonic clock → wall-clock rollback → time oracle → synchronization interval → offset estimate → drift rate → clock discipline → quorum timestamp → causal frontier → temporal fence → deadline budget → lease duration → timestamp authority → clock domain → causal gap → logical timestamp → clock sample → synchronization bound → temporal lease → time anchor**.

## 1. monotonic clock /ˌmɒnəˈtɒnɪk klɒk/
**Part of speech:** noun
**Core meaning (English):** a clock that never moves backward, making it suitable for measuring elapsed duration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** clock không lùi, phù hợp đo khoảng thời gian trôi qua.
**Grammar & collocations:** `monotonic-clock reading` — reading; `measure elapsed time` — đo.
**Examples:** `The retry timer used a monotonic clock so a manual time change could not extend the wait.` → Timer dùng clock không lùi.
**Liên kết tiếng Hàn:** `단조 시계`.

## 2. wall-clock rollback /wɔːl klɒk ˈroʊlbæk/
**Part of speech:** noun
**Core meaning (English):** a backward adjustment of civil time that can make timestamp order appear to reverse.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều chỉnh giờ dân sự lùi khiến thứ tự timestamp trông bị đảo.
**Grammar & collocations:** `wall-clock-rollback handling` — xử lý; `guard against a negative duration` — phòng.
**Examples:** `Wall-clock rollback made two log entries appear to occur before their causes.` → Rollback làm log trông xảy ra trước nguyên nhân.
**Liên kết tiếng Hàn:** `벽시계 롤백`.

## 3. time oracle /taɪm ˈɔːrəkəl/
**Part of speech:** noun
**Core meaning (English):** a trusted service that supplies a reference time or synchronization estimate to other systems.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** service đáng tin cung cấp giờ tham chiếu hoặc estimate đồng bộ.
**Grammar & collocations:** `time-oracle response` — phản hồi; `query a reference source` — truy vấn.
**Examples:** `The time oracle supplied a trusted reference for ordering cross-region audit events.` → Oracle cung cấp giờ tham chiếu cho audit.
**Liên kết tiếng Hàn:** `시간 오라클`.

## 4. synchronization interval /ˌsɪŋkrənaɪˈzeɪʃən ˈɪntərvəl/
**Part of speech:** noun
**Core meaning (English):** the planned period between attempts to compare or correct a system clock.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian giữa các lần so sánh hoặc chỉnh clock.
**Grammar & collocations:** `synchronization-interval setting` — setting; `poll a reference clock` — hỏi.
**Examples:** `The synchronization interval shortened when the node entered a high-precision mode.` → Interval ngắn lại ở mode chính xác cao.
**Liên kết tiếng Hàn:** `동기화 간격`.

## 5. offset estimate /ˈɒfset ˈestɪmət/
**Part of speech:** noun
**Core meaning (English):** an approximation of how far one clock is ahead of or behind a reference clock.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính clock này nhanh/chậm hơn clock tham chiếu bao nhiêu.
**Grammar & collocations:** `offset-estimate confidence` — độ tin cậy; `correct a measured difference` — sửa.
**Examples:** `The offset estimate showed that the replica was forty milliseconds ahead of the leader.` → Estimate cho thấy replica nhanh hơn 40 ms.
**Liên kết tiếng Hàn:** `오프셋 추정`.

## 6. drift rate /drɪft reɪt/
**Part of speech:** noun
**Core meaning (English):** the speed at which a clock gradually gains or loses time relative to a reference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ clock dần nhanh/chậm so với tham chiếu.
**Grammar & collocations:** `drift-rate model` — model; `project future error` — dự phóng.
**Examples:** `The drift rate predicted that the sensor would exceed the timing tolerance by midnight.` → Rate dự đoán sensor vượt tolerance lúc nửa đêm.
**Liên kết tiếng Hàn:** `드리프트율`.

## 7. clock discipline /klɒk ˈdɪsəplɪn/
**Part of speech:** noun
**Core meaning (English):** the process of steering a local clock toward a reference without introducing unacceptable jumps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều khiển clock local về tham chiếu mà không tạo jump không chấp nhận.
**Grammar & collocations:** `clock-discipline loop` — vòng lặp; `slew a clock gradually` — điều chỉnh dần.
**Examples:** `Clock discipline slowed the local oscillator instead of stepping time backward.` → Discipline làm clock chậm dần thay vì lùi.
**Liên kết tiếng Hàn:** `시계 규율`.

## 8. quorum timestamp /ˈkwɔːrəm ˈtæmpstɑːmp/
**Part of speech:** noun
**Core meaning (English):** a timestamp accepted after enough participants report values to establish a shared temporal view.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timestamp được chấp nhận sau khi đủ participant báo value để tạo view thời gian chung.
**Grammar & collocations:** `quorum-timestamp rule` — rule; `select a majority estimate` — chọn.
**Examples:** `The quorum timestamp excluded one isolated node whose clock had drifted far away.` → Timestamp quorum bỏ node lệch nhiều.
**Liên kết tiếng Hàn:** `쿼럼 타임스탬프`.

## 9. causal frontier /ˈkɔːzəl frʌnˈtɪər/
**Part of speech:** noun
**Core meaning (English):** the boundary between events whose causal predecessors are known and events still awaiting evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới giữa event đã biết predecessor và event còn chờ evidence.
**Grammar & collocations:** `causal-frontier advance` — tiến; `close a dependency gap` — đóng.
**Examples:** `The causal frontier advanced after all shards reported their dependency markers.` → Frontier tiến sau khi shard báo marker.
**Liên kết tiếng Hàn:** `인과 프런티어`.

## 10. temporal fence /ˈtempərəl fens/
**Part of speech:** noun
**Core meaning (English):** a condition that prevents actions carrying an older time or generation from taking effect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện chặn action mang time/generation cũ.
**Grammar & collocations:** `temporal-fence check` — kiểm tra; `reject a stale update` — từ chối.
**Examples:** `The temporal fence rejected a write from a former leader after the lease changed.` → Fence từ chối write của leader cũ.
**Liên kết tiếng Hàn:** `시간적 펜스`.

## 11. deadline budget /ˈdedlaɪn ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the remaining time available for a request and its downstream work before the caller's deadline.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian còn lại cho request và downstream trước deadline caller.
**Grammar & collocations:** `deadline-budget propagation` — lan truyền; `reserve time for serialization` — dành.
**Examples:** `The service rejected a second retry because the deadline budget was nearly exhausted.` → Service từ chối retry thứ hai vì gần hết budget.
**Liên kết tiếng Hàn:** `데드라인 예산`.

## 12. lease duration /liːs djʊˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the length of time for which a temporary ownership or permission remains valid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời lượng ownership/quyền tạm còn hiệu lực.
**Grammar & collocations:** `lease-duration renewal` — gia hạn; `expire an inactive lease` — hết hạn.
**Examples:** `The lease duration was long enough for a normal repair but short enough to recover from a crash.` → Duration cân bằng repair và crash.
**Liên kết tiếng Hàn:** `리스 기간`.

## 13. timestamp authority /ˈtæmpstɑːmp əˈθɔːrəti/
**Part of speech:** noun
**Core meaning (English):** a trusted party that certifies when a document, event, or artifact existed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bên đáng tin chứng nhận thời điểm document/event/artifact tồn tại.
**Grammar & collocations:** `timestamp-authority signature` — chữ ký; `certify an evidence time` — chứng nhận.
**Examples:** `The timestamp authority certified when the signed report was submitted.` → Authority chứng nhận thời điểm nộp report.
**Liên kết tiếng Hàn:** `타임스탬프 기관`.

## 14. clock domain /klɒk doʊˈmeɪn/
**Part of speech:** noun
**Core meaning (English):** a set of components that share a timing reference or clock behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm component chung tham chiếu hoặc behavior của clock.
**Grammar & collocations:** `clock-domain crossing` — giao cắt; `synchronize between domains` — đồng bộ.
**Examples:** `The sensor and controller belonged to different clock domains and required explicit synchronization.` → Sensor và controller khác domain nên cần sync.
**Liên kết tiếng Hàn:** `클록 도메인`.

## 15. causal gap /ˈkɔːzəl ɡæp/
**Part of speech:** noun
**Core meaning (English):** missing evidence that prevents a system from proving the dependency between two events.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** evidence thiếu khiến system không chứng minh được dependency giữa event.
**Grammar & collocations:** `causal-gap diagnosis` — chẩn đoán; `fill a missing dependency edge` — lấp.
**Examples:** `A causal gap made the audit unable to explain which update preceded the deletion.` → Gap khiến audit không giải thích được thứ tự.
**Liên kết tiếng Hàn:** `인과적 공백`.

## 16. logical timestamp /ˈlɒdʒɪkəl ˈtæmpstɑːmp/
**Part of speech:** noun
**Core meaning (English):** an ordering value derived from event relationships rather than directly from physical wall time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value sắp thứ tự dựa trên quan hệ event thay vì giờ vật lý.
**Grammar & collocations:** `logical-timestamp update` — cập nhật; `order concurrent events` — sắp.
**Examples:** `The logical timestamp ordered the write after its dependency despite clock uncertainty.` → Timestamp logic xếp write sau dependency dù clock không chắc.
**Liên kết tiếng Hàn:** `논리적 타임스탬프`.

## 17. clock sample /klɒk ˈsæmpəl/
**Part of speech:** noun
**Core meaning (English):** one observation of a local clock and a reference clock used to estimate offset or drift.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một lần quan sát clock local và tham chiếu để ước tính offset/drift.
**Grammar & collocations:** `clock-sample variance` — phương sai; `discard an outlier sample` — loại.
**Examples:** `The synchronizer discarded one clock sample that arrived after a long network delay.` → Synchronizer bỏ sample đến trễ.
**Liên kết tiếng Hàn:** `시계 샘플`.

## 18. synchronization bound /ˌsɪŋkrənaɪˈzeɪʃən baʊnd/
**Part of speech:** noun
**Core meaning (English):** a proven limit on how far clocks or temporal views may differ under stated conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn được chứng minh về mức clock/time view có thể lệch.
**Grammar & collocations:** `synchronization-bound proof` — chứng minh; `stay within a timing tolerance` — giữ.
**Examples:** `The protocol assumed a synchronization bound of five milliseconds between replicas.` → Protocol giả định replica lệch tối đa 5 ms.
**Liên kết tiếng Hàn:** `동기화 한계`.

## 19. temporal lease /ˈtempərəl liːs/
**Part of speech:** noun
**Core meaning (English):** a time-limited right that remains valid only while a temporal condition or generation is current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyền có thời hạn chỉ hợp lệ khi điều kiện/generation thời gian còn hiện hành.
**Grammar & collocations:** `temporal-lease renewal` — gia hạn; `fence an expired owner` — chặn.
**Examples:** `The temporal lease prevented a paused worker from writing after its authority expired.` → Lease ngăn worker paused write sau hết quyền.
**Liên kết tiếng Hàn:** `시간 임대`.

## 20. time anchor /taɪm ˈæŋkər/
**Part of speech:** noun
**Core meaning (English):** a trusted event or reference point used to relate otherwise incomparable timestamps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event/point đáng tin dùng liên hệ timestamp không thể so trực tiếp.
**Grammar & collocations:** `time-anchor event` — event; `align a historical record` — căn chỉnh.
**Examples:** `The deployment marker served as a time anchor for comparing logs from two regions.` → Marker deploy làm anchor so log hai vùng.
**Liên kết tiếng Hàn:** `시간 앵커`.

## Review in context

A **monotonic clock** measures duration safely, while **wall-clock rollback**, a **time oracle**, and a **synchronization interval** shape physical time. An **offset estimate**, **drift rate**, and **clock discipline** keep nodes aligned; a **quorum timestamp** builds agreement. A **causal frontier** and **temporal fence** protect ordering, while a **deadline budget** and **lease duration** bound work. A **timestamp authority** certifies evidence, a **clock domain** defines shared timing, and a **causal gap** exposes missing dependency. A **logical timestamp** orders events, a **clock sample** feeds estimates, a **synchronization bound** states uncertainty, a **temporal lease** limits authority, and a **time anchor** aligns histories.

**Bản dịch tiếng Việt:** **Monotonic clock** đo duration an toàn, còn **wall-clock rollback**, **time oracle** và **synchronization interval** định hình giờ vật lý. **Offset estimate**, **drift rate** và **clock discipline** giữ node đồng bộ; **quorum timestamp** tạo đồng thuận. **Causal frontier** và **temporal fence** bảo vệ thứ tự, còn **deadline budget** và **lease duration** giới hạn công việc. **Timestamp authority** chứng nhận evidence, **clock domain** định nghĩa timing chung, và **causal gap** lộ dependency thiếu. **Logical timestamp** sắp event, **clock sample** cấp dữ liệu, **synchronization bound** nêu bất định, **temporal lease** giới hạn quyền, còn **time anchor** căn lịch sử.
