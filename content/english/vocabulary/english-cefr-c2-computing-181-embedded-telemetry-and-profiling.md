# C2 Vocabulary — Embedded telemetry, tracing, and profiling

This lesson follows runtime evidence from compact counters and snapshots to trace buffers, profilers, and black-box recovery records.

Flow: **event trace → flight recorder → telemetry sample → sampling interval → percentile estimate → counter rollover → monotonic timestamp → diagnostic snapshot → health metric → heartbeat signal → watchpoint → breakpoint → instruction trace → branch trace → profiling session → instrumentation point → event counter → performance marker → ring logger → black box recorder**.

## 1. event trace /ɪˈvent treɪs/
**Part of speech:** noun
**Core meaning (English):** an ordered record of notable events emitted by a running system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản ghi có thứ tự các event đáng chú ý do hệ thống đang chạy phát ra.
**Grammar & collocations:** `event-trace record` — bản ghi; `reconstruct a sequence` — dựng lại.
**Examples:** `The event trace showed that the valve command preceded the unexpected reset.` → Trace cho thấy lệnh valve trước reset bất ngờ.
**Liên kết tiếng Hàn:** `이벤트 추적`.

## 2. flight recorder /ˈflaɪt rɪˈkɔːrdər/
**Part of speech:** noun
**Core meaning (English):** a persistent or circular recorder that preserves recent operating data for later investigation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** recorder bền hoặc vòng, giữ data vận hành gần đây để điều tra.
**Grammar & collocations:** `flight-recorder buffer` — buffer; `preserve pre-failure context` — giữ.
**Examples:** `The flight recorder retained the last ten minutes before the drone lost control.` → Recorder giữ mười phút trước khi drone mất điều khiển.
**Liên kết tiếng Hàn:** `비행 기록 장치`.

## 3. telemetry sample /təˈlemətri ˈsæmpəl/
**Part of speech:** noun
**Core meaning (English):** one measured and transmitted observation about a device's state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một quan sát state của device được đo và truyền đi.
**Grammar & collocations:** `telemetry-sample payload` — payload; `publish a sensor reading` — gửi.
**Examples:** `Each telemetry sample included voltage, temperature, and the active firmware version.` → Mỗi sample gồm voltage, nhiệt và version firmware.
**Liên kết tiếng Hàn:** `텔레메트리 샘플`.

## 4. sampling interval /ˈsæmplɪŋ ˈɪntərvəl/
**Part of speech:** noun
**Core meaning (English):** the time between successive observations of a signal or metric.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian giữa hai lần quan sát signal hoặc metric.
**Grammar & collocations:** `sampling-interval jitter` — jitter; `shorten the observation period` — rút ngắn.
**Examples:** `The sampling interval shortened when vibration exceeded the warning level.` → Interval ngắn lại khi rung vượt mức cảnh báo.
**Liên kết tiếng Hàn:** `샘플링 간격`.

## 5. percentile estimate /pərˈsentəl ˈestəmət/
**Part of speech:** noun
**Core meaning (English):** an approximation of the value below which a stated percentage of observations fall.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính giá trị mà một phần trăm observation nằm dưới nó.
**Grammar & collocations:** `percentile-estimate error` — sai số; `report the ninety-ninth percentile` — báo cáo.
**Examples:** `The service reported a percentile estimate instead of storing every latency sample.` → Service báo percentile thay vì lưu mọi sample latency.
**Liên kết tiếng Hàn:** `백분위수 추정치`.

## 6. counter rollover /ˈkaʊntər ˈroʊlˌoʊvər/
**Part of speech:** noun
**Core meaning (English):** the wraparound of a finite event or hardware counter after it reaches its maximum value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** counter event/hardware hữu hạn quay về đầu sau khi đạt max.
**Grammar & collocations:** `counter-rollover handling` — xử lý; `extend a narrow counter` — mở rộng.
**Examples:** `The analytics task detected counter rollover before calculating the new rate.` → Task analytics bắt rollover trước tính rate mới.
**Liên kết tiếng Hàn:** `카운터 롤오버`.

## 7. monotonic timestamp /ˌmɑːnəˈtɑːnɪk ˈtaɪmstæmp/
**Part of speech:** noun
**Core meaning (English):** a timestamp that never moves backward, even if civil time is corrected.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timestamp không bao giờ lùi, dù giờ dân dụng được chỉnh.
**Grammar & collocations:** `monotonic-timestamp source` — nguồn; `measure elapsed time` — đo.
**Examples:** `The scheduler used a monotonic timestamp to measure a timeout across a clock correction.` → Scheduler dùng timestamp đơn điệu để đo timeout qua lúc chỉnh clock.
**Liên kết tiếng Hàn:** `단조 증가 타임스탬프`.

## 8. diagnostic snapshot /ˌdaɪəɡˈnɑːstɪk ˈsnæpʃɑːt/
**Part of speech:** noun
**Core meaning (English):** a captured set of state values collected at a notable event or failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ giá trị state chụp lại lúc event hoặc failure đáng chú ý.
**Grammar & collocations:** `diagnostic-snapshot schema` — schema; `capture register state` — chụp.
**Examples:** `The fault path saved a diagnostic snapshot before attempting recovery.` → Nhánh lỗi lưu snapshot trước khi recovery.
**Liên kết tiếng Hàn:** `진단 스냅샷`.

## 9. health metric /ˈhelθ ˈmetrɪk/
**Part of speech:** noun
**Core meaning (English):** a measured indicator used to judge whether a device or service remains healthy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ số đo để đánh giá device/service còn khỏe hay không.
**Grammar & collocations:** `health-metric threshold` — ngưỡng; `trend a reliability signal` — theo dõi.
**Examples:** `Reset frequency became a health metric for the field controller.` → Tần suất reset thành metric sức khỏe cho controller.
**Liên kết tiếng Hàn:** `상태 지표`.

## 10. heartbeat signal /ˈhɑːrtbiːt ˈsɪɡnəl/
**Part of speech:** noun
**Core meaning (English):** a periodic message or transition showing that a component is still operating.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** message/transition định kỳ cho thấy component còn chạy.
**Grammar & collocations:** `heartbeat-signal timeout` — timeout; `refresh a liveness lease` — gia hạn.
**Examples:** `The supervisor restarted the worker after its heartbeat signal stopped.` → Supervisor restart worker khi heartbeat dừng.
**Liên kết tiếng Hàn:** `하트비트 신호`.

## 11. watchpoint /ˈwɑːtʃˌpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a debugger condition that pauses execution when a selected memory location changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện debugger pause khi địa chỉ memory chọn bị đổi.
**Grammar & collocations:** `watchpoint trigger` — trigger; `observe a shared variable` — theo dõi.
**Examples:** `A watchpoint stopped the task when an unexpected interrupt flag changed.` → Watchpoint dừng task khi flag interrupt đổi lạ.
**Liên kết tiếng Hàn:** `감시점`.

## 12. breakpoint /ˈbreɪkˌpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a debugger instruction or condition that pauses a program at a chosen execution point.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** instruction/condition debugger dừng program tại điểm execution chọn.
**Grammar & collocations:** `breakpoint condition` — điều kiện; `step over a call` — step.
**Examples:** `The engineer placed a breakpoint before the driver released the lock.` → Kỹ sư đặt breakpoint trước khi driver nhả lock.
**Liên kết tiếng Hàn:** `중단점`.

## 13. instruction trace /ɪnˈstrʌkʃən treɪs/
**Part of speech:** noun
**Core meaning (English):** a record of processor instructions executed over a selected interval.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản ghi instruction processor chạy trong khoảng chọn.
**Grammar & collocations:** `instruction-trace decoder` — bộ giải mã; `replay a control path` — phát lại.
**Examples:** `The instruction trace revealed a rare branch after the cache error.` → Trace lộ branch hiếm sau lỗi cache.
**Liên kết tiếng Hàn:** `명령어 추적`.

## 14. branch trace /ˈbræntʃ treɪs/
**Part of speech:** noun
**Core meaning (English):** a compact record of taken control-flow branches rather than every executed instruction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản ghi gọn các branch đã đi thay vì mọi instruction.
**Grammar & collocations:** `branch-trace packet` — packet; `reconstruct control flow` — dựng.
**Examples:** `The branch trace fit in the small buffer while still identifying the failing path.` → Trace branch vừa buffer nhỏ mà vẫn chỉ path lỗi.
**Liên kết tiếng Hàn:** `분기 추적`.

## 15. profiling session /ˈproʊfaɪlɪŋ ˈseʃən/
**Part of speech:** noun
**Core meaning (English):** a bounded period in which a program's time, memory, or hardware activity is measured.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian giới hạn để đo time, memory hoặc activity hardware của program.
**Grammar & collocations:** `profiling-session overhead` — overhead; `sample a hot path` — lấy mẫu.
**Examples:** `The profiling session showed that encryption consumed most of the wake window.` → Session profiling cho thấy encryption tốn phần lớn wake window.
**Liên kết tiếng Hàn:** `프로파일링 세션`.

## 16. instrumentation point /ˌɪnstrəmenˈteɪʃən pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a deliberate location in code where measurements, logs, or trace events are emitted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vị trí có chủ ý trong code phát measurement, log hoặc trace event.
**Grammar & collocations:** `instrumentation-point cost` — chi phí; `emit a timing event` — phát.
**Examples:** `The team added an instrumentation point around the slow storage call.` → Team thêm điểm đo quanh call storage chậm.
**Liên kết tiếng Hàn:** `계측 지점`.

## 17. event counter /ɪˈvent ˈkaʊntər/
**Part of speech:** noun
**Core meaning (English):** a counter that accumulates occurrences of a selected hardware or software event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** counter tích lũy số lần event hardware/software được chọn xảy ra.
**Grammar & collocations:** `event-counter overflow` — tràn; `count cache misses` — đếm.
**Examples:** `The event counter recorded branch mispredictions during the performance test.` → Counter ghi branch miss trong test hiệu năng.
**Liên kết tiếng Hàn:** `이벤트 카운터`.

## 18. performance marker /pərˈfɔːrməns ˈmɑːrkər/
**Part of speech:** noun
**Core meaning (English):** an explicit timestamp or event tag used to measure a phase of work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timestamp hoặc tag event để đo một phase công việc.
**Grammar & collocations:** `performance-marker pair` — cặp; `bracket a transaction` — bao quanh.
**Examples:** `Two performance markers bounded the image-processing phase.` → Hai marker bao quanh phase xử lý ảnh.
**Liên kết tiếng Hàn:** `성능 마커`.

## 19. ring logger /ˈrɪŋ ˈlɔːɡər/
**Part of speech:** noun
**Core meaning (English):** a logger that writes into a circular buffer and overwrites the oldest records when full.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** logger ghi vào buffer vòng và ghi đè record cũ khi đầy.
**Grammar & collocations:** `ring-logger capacity` — dung lượng; `retain the latest records` — giữ.
**Examples:** `The ring logger preserved recent command traffic without growing the heap.` → Logger vòng giữ traffic command gần đây mà không phình heap.
**Liên kết tiếng Hàn:** `링 로거`.

## 20. black box recorder /ˈblæk bɑːks rɪˈkɔːrdər/
**Part of speech:** noun
**Core meaning (English):** a protected recorder that preserves selected operating evidence so a failure can be investigated afterward.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** recorder được bảo vệ giữ bằng chứng vận hành để điều tra sau failure.
**Grammar & collocations:** `black-box-recorder partition` — partition; `recover failure evidence` — thu hồi.
**Examples:** `The black box recorder kept the last valid sensor frame after the controller crashed.` → Recorder giữ frame sensor cuối hợp lệ sau crash.
**Liên kết tiếng Hàn:** `블랙박스 기록 장치`.

## Review in context

An **event trace** and **flight recorder** preserve sequence, while each **telemetry sample** follows a defined **sampling interval**. A compact **percentile estimate** summarizes latency; code handles **counter rollover** with a **monotonic timestamp**. On a fault, a **diagnostic snapshot**, a **health metric**, and a **heartbeat signal** help the supervisor decide what to do. Developers use a **watchpoint**, **breakpoint**, **instruction trace**, and **branch trace** during a bounded **profiling session**. An **instrumentation point**, **event counter**, and **performance marker** measure hot paths. In the field, a **ring logger** and **black box recorder** preserve the evidence needed for repair.

**Bản dịch tiếng Việt:** **Event trace** và **flight recorder** giữ thứ tự, còn mỗi **telemetry sample** tuân theo **sampling interval** xác định. **Percentile estimate** gọn tóm tắt latency; code xử lý **counter rollover** bằng **monotonic timestamp**. Khi lỗi, **diagnostic snapshot**, **health metric** và **heartbeat signal** giúp supervisor quyết định. Developer dùng **watchpoint**, **breakpoint**, **instruction trace** và **branch trace** trong một **profiling session** giới hạn. **Instrumentation point**, **event counter** và **performance marker** đo hot path. Ngoài hiện trường, **ring logger** và **black box recorder** giữ bằng chứng cần cho sửa chữa.
