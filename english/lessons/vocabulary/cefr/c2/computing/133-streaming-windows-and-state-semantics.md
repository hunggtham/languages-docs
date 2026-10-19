# C2 Vocabulary — Streaming windows and state semantics

This lesson follows streaming records into time windows, incremental state, triggers, late data, and controlled eviction.

Flow: **hopping window → watermark delay → allowed lateness → pane aggregation → incremental aggregate → window state → trigger firing → timer service → window eviction → keyed stream → partitioned stream → window close → window merge → session gap → processing-time timer → state retention → stream punctuator → window assigner → late-data policy → aggregate retraction**.

## 1. hopping window /ˈhɒpɪŋ ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** a recurring window whose start times are separated by a hop smaller than its duration, creating overlap.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** window lặp có start cách nhau nhỏ hơn duration nên bị overlap.
**Grammar & collocations:** `hopping-window interval` — interval; `emit overlapping counts` — phát.
**Examples:** `The hopping window reported a rolling fifteen-minute count every five minutes.` → Window báo count 15 phút mỗi 5 phút.
**Liên kết tiếng Hàn:** `호핑 윈도우`.

## 2. watermark delay /ˈwɔːtərmɑːrk dɪˈleɪ/
**Part of speech:** noun
**Core meaning (English):** the tolerated delay before a stream advances its event-time completeness assumption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ trễ cho phép trước khi stream coi event-time đã đủ hoàn chỉnh.
**Grammar & collocations:** `watermark-delay setting` — setting; `wait for a slow partition` — chờ.
**Examples:** `The watermark delay gave mobile devices two minutes to upload delayed events.` → Delay cho device hai phút upload event trễ.
**Liên kết tiếng Hàn:** `워터마크 지연`.

## 3. allowed lateness /əˈlaʊd leɪtnəs/
**Part of speech:** noun
**Core meaning (English):** the period after a window's nominal end during which late events may still update its result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng sau end danh nghĩa khi event trễ vẫn được update result.
**Grammar & collocations:** `allowed-lateness bound` — giới hạn; `accept a late event` — nhận.
**Examples:** `Allowed lateness kept the hourly revenue window open for delayed store uploads.` → Lateness giữ window doanh thu mở.
**Liên kết tiếng Hàn:** `허용 지연`.

## 4. pane aggregation /peɪn ˌæɡrəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** computing smaller partial aggregates that can be combined to form overlapping window results.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính aggregate phần nhỏ rồi gộp thành result window overlap.
**Grammar & collocations:** `pane-aggregation cache` — cache; `combine partial counts` — gộp.
**Examples:** `Pane aggregation reused five-minute counts for several larger windows.` → Pane tái dùng count 5 phút cho window lớn.
**Liên kết tiếng Hàn:** `창 조각 집계`.

## 5. incremental aggregate /ˌɪnkrəˈmentəl ˈæɡrəɡət/
**Part of speech:** noun
**Core meaning (English):** an aggregate updated from each new or removed record rather than recomputed from the full window.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** aggregate update theo record thêm/bỏ thay vì tính lại full window.
**Grammar & collocations:** `incremental-aggregate state` — state; `add a new event's value` — cộng.
**Examples:** `The incremental aggregate updated the count when one event entered and another expired.` → Aggregate update khi event vào và event hết hạn.
**Liên kết tiếng Hàn:** `증분 집계`.

## 6. window state /ˈwɪndoʊ steɪt/
**Part of speech:** noun
**Core meaning (English):** the retained records, timers, and intermediate results needed to evaluate an active stream window.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record, timer và result trung gian giữ để tính window active.
**Grammar & collocations:** `window-state store` — store; `restore an open window` — phục hồi.
**Examples:** `Window state was checkpointed so a restarted worker could continue the open session.` → State được checkpoint để worker tiếp tục.
**Liên kết tiếng Hàn:** `윈도우 상태`.

## 7. trigger firing /ˈtrɪɡər ˈfaɪərɪŋ/
**Part of speech:** noun
**Core meaning (English):** the event of emitting or updating a window result because a configured trigger condition was met.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** việc phát/update result khi condition trigger đạt.
**Grammar & collocations:** `trigger-firing policy` — policy; `emit an early result` — phát.
**Examples:** `Trigger firing produced an early estimate before the watermark closed the window.` → Firing phát estimate sớm.
**Liên kết tiếng Hàn:** `트리거 발화`.

## 8. timer service /ˈtaɪmər ˈsɜːrvɪs/
**Part of speech:** noun
**Core meaning (English):** a component scheduling callbacks when event-time or processing-time conditions become due.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component schedule callback khi điều kiện event/processing time đến hạn.
**Grammar & collocations:** `timer-service callback` — callback; `register a window close` — đăng ký.
**Examples:** `The timer service fired a cleanup callback after the allowed lateness expired.` → Service gọi cleanup sau lateness.
**Liên kết tiếng Hàn:** `타이머 서비스`.

## 9. window eviction /ˈwɪndoʊ ɪˈvɪkʃən/
**Part of speech:** noun
**Core meaning (English):** removing records or state from a window after it is no longer needed for valid results.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ record/state khỏi window khi không còn cần cho result hợp lệ.
**Grammar & collocations:** `window-eviction policy` — policy; `free expired state` — giải phóng.
**Examples:** `Window eviction removed events only after the late-data policy could no longer update the result.` → Eviction chờ policy không update được nữa.
**Liên kết tiếng Hàn:** `윈도우 축출`.

## 10. keyed stream /kiːd striːm/
**Part of speech:** noun
**Core meaning (English):** a stream whose records are partitioned by a key so each key has independent state or ordering.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stream chia record theo key, mỗi key có state/order riêng.
**Grammar & collocations:** `keyed-stream state` — state; `aggregate per customer` — aggregate.
**Examples:** `The keyed stream kept a separate balance window for every account.` → Stream giữ window balance từng account.
**Liên kết tiếng Hàn:** `키 지정 스트림`.

## 11. partitioned stream /pɑːrˈtɪʃənd striːm/
**Part of speech:** noun
**Core meaning (English):** a stream divided across workers or partitions for parallel processing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stream chia giữa worker/partition để xử lý song song.
**Grammar & collocations:** `partitioned-stream rebalance` — rebalance; `move a key range` — chuyển.
**Examples:** `The partitioned stream moved one hot key to a less loaded worker.` → Stream chuyển key nóng sang worker nhẹ hơn.
**Liên kết tiếng Hàn:** `파티션 스트림`.

## 12. window close /ˈwɪndoʊ kloʊz/
**Part of speech:** noun
**Core meaning (English):** the point after which a window normally stops accepting records and emits its final result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm window thường ngừng nhận record và phát result cuối.
**Grammar & collocations:** `window-close timestamp` — timestamp; `finalize a session result` — hoàn tất.
**Examples:** `Window close occurred after the watermark passed the interval end.` → Close xảy ra sau watermark vượt end.
**Liên kết tiếng Hàn:** `윈도우 종료`.

## 13. window merge /ˈwɪndoʊ mɜːrdʒ/
**Part of speech:** noun
**Core meaning (English):** combining overlapping or adjacent windows when later events show that they belong to one logical session.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp window overlap/gần khi event sau cho thấy cùng session.
**Grammar & collocations:** `window-merge operation` — operation; `combine adjacent sessions` — gộp.
**Examples:** `Window merge joined two bursts separated by a short network outage.` → Merge nối hai burst cách nhau bởi outage ngắn.
**Liên kết tiếng Hàn:** `윈도우 병합`.

## 14. session gap /ˈseʃən ɡæp/
**Part of speech:** noun
**Core meaning (English):** the maximum inactivity interval allowed before a new event starts a separate session window.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng inactive tối đa trước khi event mới mở session khác.
**Grammar & collocations:** `session-gap threshold` — ngưỡng; `split an inactive visit` — tách.
**Examples:** `The session gap was thirty minutes, so a later click began a new visit.` → Gap 30 phút nên click sau mở visit mới.
**Liên kết tiếng Hàn:** `세션 간격`.

## 15. processing-time timer /ˈprɒsesɪŋ taɪm ˈtaɪmər/
**Part of speech:** noun
**Core meaning (English):** a timer based on when the system processes a record rather than when the event occurred.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timer dựa lúc system xử lý record, không phải lúc event xảy ra.
**Grammar & collocations:** `processing-time-timer callback` — callback; `schedule a wall-clock action` — schedule.
**Examples:** `The processing-time timer flushed the buffer even when event timestamps were delayed.` → Timer flush buffer dù timestamp trễ.
**Liên kết tiếng Hàn:** `처리 시간 타이머`.

## 16. state retention /steɪt rɪˈtenʃən/
**Part of speech:** noun
**Core meaning (English):** the policy determining how long streaming state remains available for recovery or late updates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy quyết định state stream giữ bao lâu cho recovery/update trễ.
**Grammar & collocations:** `state-retention period` — period; `retain a session after close` — giữ.
**Examples:** `State retention kept closed windows for one day so a replay could correct them.` → Retention giữ window đóng một ngày.
**Liên kết tiếng Hàn:** `상태 보존`.

## 17. stream punctuator /striːm ˈpʌŋktʃueɪtər/
**Part of speech:** noun
**Core meaning (English):** a scheduled callback that performs periodic work on stream state even when no new record arrives.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** callback theo lịch làm việc trên state dù không có record mới.
**Grammar & collocations:** `stream-punctuator interval` — interval; `emit a periodic heartbeat` — phát.
**Examples:** `The stream punctuator emitted a zero-traffic metric during a quiet interval.` → Punctuator phát metric zero khi yên.
**Liên kết tiếng Hàn:** `스트림 구두점 처리기`.

## 18. window assigner /ˈwɪndoʊ əˈsaɪnər/
**Part of speech:** noun
**Core meaning (English):** the component that determines which window or windows should receive each incoming event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component quyết định event vào window nào.
**Grammar & collocations:** `window-assigner function` — function; `route an event to overlapping windows` — định tuyến.
**Examples:** `The window assigner placed one event into three overlapping five-minute windows.` → Assigner đưa event vào ba window overlap.
**Liên kết tiếng Hàn:** `윈도우 할당기`.

## 19. late-data policy /leɪt ˈdeɪtə ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** rules defining whether late records are accepted, corrected, redirected, or discarded.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule quyết định record trễ được nhận, sửa, chuyển hoặc bỏ.
**Grammar & collocations:** `late-data-policy branch` — nhánh; `route an overdue event` — chuyển.
**Examples:** `The late-data policy redirected overdue events to a correction topic.` → Policy chuyển event quá hạn sang topic sửa.
**Liên kết tiếng Hàn:** `지연 데이터 정책`.

## 20. aggregate retraction /ˈæɡrəɡət rɪˈtrækʃən/
**Part of speech:** noun
**Core meaning (English):** an update that withdraws a prior aggregate contribution when a record is corrected or removed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** update rút contribution cũ khi record được sửa hoặc bỏ.
**Grammar & collocations:** `aggregate-retraction event` — event; `subtract a corrected value` — trừ.
**Examples:** `Aggregate retraction removed the invalid purchase from the already published hourly total.` → Retraction bỏ purchase lỗi khỏi total đã publish.
**Liên kết tiếng Hàn:** `집계 철회`.

## Review in context

A **hopping window** overlaps time ranges; **watermark delay** and **allowed lateness** decide when results may change. **Pane aggregation** and an **incremental aggregate** reduce recomputation, while **window state** supports **trigger firing** through a **timer service**. **Window eviction** frees old data. A **keyed stream** and **partitioned stream** divide work; **window close** finalizes, **window merge** combines sessions, and a **session gap** defines separation. A **processing-time timer** handles wall time, **state retention** preserves recovery, a **stream punctuator** runs without records, a **window assigner** routes events, a **late-data policy** handles overdue input, and **aggregate retraction** corrects prior results.

**Bản dịch tiếng Việt:** **Hopping window** overlap các khoảng; **watermark delay** và **allowed lateness** quyết định khi nào result còn đổi. **Pane aggregation** và **incremental aggregate** giảm tính lại, còn **window state** hỗ trợ **trigger firing** qua **timer service**. **Window eviction** giải phóng data cũ. **Keyed stream** và **partitioned stream** chia việc; **window close** hoàn tất, **window merge** gộp session, và **session gap** định tách. **Processing-time timer** xử lý giờ hệ thống, **state retention** giữ recovery, **stream punctuator** chạy khi không có record, **window assigner** định tuyến event, **late-data policy** xử lý input trễ, còn **aggregate retraction** sửa result cũ.
