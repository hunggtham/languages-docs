# C2 Vocabulary — Embedded diagnostics, power states, and fault containment

This lesson follows an embedded product from power-up and low-power states through diagnostics, queueing, and safe recovery when hardware misbehaves.

Flow: **watchdog reset → brownout reset → power sequencing → sleep state → wake source → debounce filter → lock-free queue → single-producer single-consumer queue → cache coherency → dma fence → iommu mapping → zero-copy buffer → interrupt coalescing → polling loop → busy wait → critical section → atomic register → read-modify-write → fault handler → safe state**.

## 1. watchdog reset /ˈwɑːtʃdɔːɡ rɪˈset/
**Part of speech:** noun
**Core meaning (English):** an automatic restart triggered when a watchdog detects that software has stopped responding.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lần khởi động lại tự động khi watchdog thấy software bị treo.
**Grammar & collocations:** `watchdog-reset reason` — nguyên nhân; `trigger a recovery restart` — kích hoạt.
**Examples:** `The watchdog reset restored the controller after its main loop stopped advancing.` → Watchdog reset khôi phục controller sau khi vòng lặp chính đứng.
**Liên kết tiếng Hàn:** `워치독 리셋`.

## 2. brownout reset /ˈbraʊnˌaʊt rɪˈset/
**Part of speech:** noun
**Core meaning (English):** a reset caused by supply voltage falling below the level at which reliable operation is possible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reset khi điện áp nguồn tụt dưới mức hoạt động tin cậy.
**Grammar & collocations:** `brownout-reset threshold` — ngưỡng; `detect a supply dip` — phát hiện.
**Examples:** `A brownout reset prevented corrupted settings while the battery connector was loose.` → Brownout reset ngăn setting hỏng khi đầu pin lỏng.
**Liên kết tiếng Hàn:** `브라운아웃 리셋`.

## 3. power sequencing /ˈpaʊər ˈsiːkwənsɪŋ/
**Part of speech:** noun
**Core meaning (English):** turning power rails on and off in a required order with controlled timing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bật/tắt các rail nguồn theo thứ tự và timing bắt buộc.
**Grammar & collocations:** `power-sequencing controller` — bộ điều khiển; `release a rail` — cấp rail.
**Examples:** `Power sequencing held the memory rail until the processor clock was stable.` → Sequencing giữ rail memory đến khi clock processor ổn định.
**Liên kết tiếng Hàn:** `전원 시퀀싱`.

## 4. sleep state /ˈsliːp steɪt/
**Part of speech:** noun
**Core meaning (English):** a low-power operating mode in which selected computation or hardware is paused.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mode ít điện trong đó một phần computation/hardware tạm dừng.
**Grammar & collocations:** `deep-sleep state` — trạng thái ngủ sâu; `enter a low-power mode` — vào.
**Examples:** `The sensor entered a sleep state between samples to extend battery life.` → Sensor vào sleep state giữa các lần lấy mẫu để tiết kiệm pin.
**Liên kết tiếng Hàn:** `슬립 상태`.

## 5. wake source /ˈweɪk sɔːrs/
**Part of speech:** noun
**Core meaning (English):** an event or signal that brings a device out of a low-power state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event/signal đánh thức thiết bị khỏi mode ít điện.
**Grammar & collocations:** `wake-source mask` — mặt nạ; `configure a timer wake-up` — cấu hình.
**Examples:** `A radio packet was the only permitted wake source during the overnight schedule.` → Gói radio là wake source duy nhất được phép qua đêm.
**Liên kết tiếng Hàn:** `웨이크 소스`.

## 6. debounce filter /diːˈbaʊns ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a circuit or algorithm that ignores rapid unwanted transitions from a mechanical or noisy input.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch/thuật toán bỏ qua chuyển trạng thái nhanh do nút hoặc tín hiệu nhiễu.
**Grammar & collocations:** `debounce-filter interval` — khoảng; `stabilize a button signal` — ổn định.
**Examples:** `The debounce filter treated five rapid edges as one button press.` → Filter coi năm cạnh nhanh là một lần nhấn.
**Liên kết tiếng Hàn:** `디바운스 필터`.

## 7. lock-free queue /ˈlɑːk friː kjuː/
**Part of speech:** noun
**Core meaning (English):** a concurrent queue that lets threads make progress without acquiring a conventional mutual-exclusion lock.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** queue đồng thời cho thread tiến triển mà không lấy mutex thông thường.
**Grammar & collocations:** `lock-free-queue algorithm` — thuật toán; `enqueue without blocking` — đưa vào.
**Examples:** `The audio callback pushed samples into a lock-free queue for the worker thread.` → Callback audio đẩy sample vào queue lock-free cho worker.
**Liên kết tiếng Hàn:** `락 프리 큐`.

## 8. single-producer single-consumer queue /ˌsɪŋɡəl prəˈduːsər ˌsɪŋɡəl kənˈsuːmər kjuː/
**Part of speech:** noun
**Core meaning (English):** a queue designed for exactly one writer and one reader, allowing simpler synchronization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** queue chỉ có một bên ghi và một bên đọc nên đồng bộ đơn giản hơn.
**Grammar & collocations:** `single-producer single-consumer ring` — vòng; `publish a sample` — công bố.
**Examples:** `A single-producer single-consumer queue carried sensor frames from the interrupt to the task.` → Queue một producer một consumer chuyển frame sensor từ interrupt sang task.
**Liên kết tiếng Hàn:** `단일 생산자 단일 소비자 큐`.

## 9. cache coherency /ˈkæʃ koʊˈhɪrənsi/
**Part of speech:** noun
**Core meaning (English):** the agreement that keeps copies of shared data consistent across processor caches or agents.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sự nhất quán giữa các bản sao data trong cache của processor/agent.
**Grammar & collocations:** `cache-coherency protocol` — giao thức; `invalidate a line` — vô hiệu.
**Examples:** `Cache coherency mattered when the CPU and DMA engine shared the descriptor ring.` → Coherency quan trọng khi CPU và DMA dùng chung ring descriptor.
**Liên kết tiếng Hàn:** `캐시 일관성`.

## 10. dma fence /ˈdiː ɛm eɪ fens/
**Part of speech:** noun
**Core meaning (English):** a synchronization marker that states when a direct-memory-access operation is safe to observe or reuse.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** marker đồng bộ báo khi DMA an toàn để đọc hoặc tái sử dụng.
**Grammar & collocations:** `DMA-fence signal` — tín hiệu; `wait for completion` — chờ.
**Examples:** `The display driver waited on a DMA fence before recycling the frame buffer.` → Driver display chờ fence trước tái dùng buffer frame.
**Liên kết tiếng Hàn:** `DMA 펜스`.

## 11. iommu mapping /ˌaɪ oʊ ɛm juː ˈmæpɪŋ/
**Part of speech:** noun
**Core meaning (English):** an address translation that lets an I/O device access only the memory region assigned to it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ánh xạ địa chỉ giới hạn vùng memory mà thiết bị I/O được truy cập.
**Grammar & collocations:** `IOMMU-mapping fault` — lỗi; `map a device page` — ánh xạ.
**Examples:** `The IOMMU mapping blocked a faulty peripheral from writing into kernel memory.` → Mapping IOMMU chặn peripheral lỗi ghi vào memory kernel.
**Liên kết tiếng Hàn:** `IOMMU 매핑`.

## 12. zero-copy buffer /ˈzɪroʊ ˈkɑːpi ˈbʌfər/
**Part of speech:** noun
**Core meaning (English):** a buffer passed between components without copying its payload into another buffer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** buffer chuyển giữa component mà không copy payload sang buffer khác.
**Grammar & collocations:** `zero-copy-buffer ownership` — quyền sở hữu; `hand off a packet` — bàn giao.
**Examples:** `The network stack used a zero-copy buffer to reduce latency for camera frames.` → Stack mạng dùng buffer zero-copy để giảm latency frame camera.
**Liên kết tiếng Hàn:** `제로 카피 버퍼`.

## 13. interrupt coalescing /ˌɪntərʌpt koʊəˈlɛsɪŋ/
**Part of speech:** noun
**Core meaning (English):** combining several hardware events so they trigger one interrupt instead of many separate interrupts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp nhiều event hardware để tạo một interrupt thay vì nhiều lần.
**Grammar & collocations:** `interrupt-coalescing timer` — timer; `batch packet notifications` — gom.
**Examples:** `Interrupt coalescing reduced CPU overhead during a burst of network traffic.` → Coalescing giảm overhead CPU trong đợt traffic mạng.
**Liên kết tiếng Hàn:** `인터럽트 병합`.

## 14. polling loop /ˈpoʊlɪŋ luːp/
**Part of speech:** noun
**Core meaning (English):** a loop that repeatedly checks a device or condition instead of waiting for an interrupt.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vòng lặp liên tục kiểm tra device/condition thay vì chờ interrupt.
**Grammar & collocations:** `polling-loop interval` — chu kỳ; `poll a status bit` — thăm dò.
**Examples:** `The boot code used a polling loop while the clock generator reported readiness.` → Boot code dùng polling loop khi clock generator báo sẵn sàng.
**Liên kết tiếng Hàn:** `폴링 루프`.

## 15. busy wait /ˈbɪzi weɪt/
**Part of speech:** noun
**Core meaning (English):** waiting by repeatedly consuming processor time while checking whether a condition has changed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chờ bằng cách liên tục tốn CPU để kiểm tra condition.
**Grammar & collocations:** `busy-wait loop` — vòng; `spin until ready` — quay.
**Examples:** `A busy wait was acceptable for a two-microsecond hardware handshake but not for a long transfer.` → Busy wait ổn cho handshake hai microsecond nhưng không cho transfer dài.
**Liên kết tiếng Hàn:** `바쁜 대기`.

## 16. critical section /ˈkrɪtɪkəl ˈsekʃən/
**Part of speech:** noun
**Core meaning (English):** a region of code that must not be interleaved with conflicting operations on shared state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng code không được xen kẽ với operation xung đột trên state chung.
**Grammar & collocations:** `critical-section guard` — cơ chế bảo vệ; `protect shared metadata` — bảo vệ.
**Examples:** `The driver kept the register update inside a short critical section.` → Driver giữ update register trong critical section ngắn.
**Liên kết tiếng Hàn:** `임계 영역`.

## 17. atomic register /əˈtɑːmɪk ˈredʒɪstər/
**Part of speech:** noun
**Core meaning (English):** a hardware register whose defined operation is observed as one indivisible update.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** register hardware có operation được thấy như một update không thể chia nhỏ.
**Grammar & collocations:** `atomic-register write` — lần ghi; `set a flag atomically` — đặt.
**Examples:** `An atomic register let the interrupt acknowledge an event without racing the main task.` → Atomic register cho interrupt acknowledge event mà không race task chính.
**Liên kết tiếng Hàn:** `원자적 레지스터`.

## 18. read-modify-write /ˌriːd ˈmɑːdəˌfaɪ raɪt/
**Part of speech:** noun
**Core meaning (English):** an operation that reads a value, changes selected bits, and writes the whole value back.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operation đọc value, đổi vài bit rồi ghi lại toàn bộ value.
**Grammar & collocations:** `read-modify-write hazard` — nguy cơ; `preserve unrelated bits` — giữ.
**Examples:** `A read-modify-write could erase a status bit that hardware set between the two accesses.` → Read-modify-write có thể xóa bit status hardware đặt giữa hai access.
**Liên kết tiếng Hàn:** `읽기-수정-쓰기`.

## 19. fault handler /ˈfɔːlt ˈhændlər/
**Part of speech:** noun
**Core meaning (English):** code that records, contains, or recovers from a processor or hardware fault.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code ghi nhận, cô lập hoặc khôi phục sau fault processor/hardware.
**Grammar & collocations:** `fault-handler entry` — điểm vào; `capture a fault frame` — ghi.
**Examples:** `The fault handler captured the stack frame before resetting the damaged task.` → Fault handler lưu stack frame trước reset task hỏng.
**Liên kết tiếng Hàn:** `폴트 핸들러`.

## 20. safe state /ˈseɪf steɪt/
**Part of speech:** noun
**Core meaning (English):** a controlled condition that minimizes danger when normal operation can no longer be trusted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trạng thái được kiểm soát để giảm nguy hiểm khi operation thường không còn đáng tin.
**Grammar & collocations:** `safe-state transition` — chuyển trạng thái; `de-energize the actuator` — ngắt năng lượng.
**Examples:** `The controller moved the actuator to a safe state after losing both position sensors.` → Controller đưa actuator về safe state sau khi mất cả hai sensor vị trí.
**Liên kết tiếng Hàn:** `안전 상태`.

## Review in context

During startup, **power sequencing** establishes stable rails before the controller enters a **sleep state**; a timer or radio packet can act as a **wake source**. A **brownout reset** and a **watchdog reset** protect the device when voltage or software becomes unreliable. A **debounce filter** cleans noisy inputs, while a **lock-free queue**—often a **single-producer single-consumer queue**—moves events between tasks. Shared DMA work requires **cache coherency**, a **dma fence**, an **iommu mapping**, and sometimes a **zero-copy buffer**. **interrupt coalescing** lowers notification overhead, whereas a **polling loop** or short **busy wait** may be useful during boot. A brief **critical section**, an **atomic register**, and careful **read-modify-write** logic protect shared hardware state. If something still fails, a **fault handler** records evidence and drives the machine into a **safe state**.

**Bản dịch tiếng Việt:** Khi khởi động, **power sequencing** thiết lập các rail ổn định trước khi controller vào **sleep state**; timer hoặc gói radio có thể là **wake source**. **Brownout reset** và **watchdog reset** bảo vệ thiết bị khi điện áp hoặc software không đáng tin. **Debounce filter** làm sạch input nhiễu, còn **lock-free queue**—thường là **single-producer single-consumer queue**—chuyển event giữa các task. Công việc DMA dùng chung cần **cache coherency**, **dma fence**, **iommu mapping** và đôi khi **zero-copy buffer**. **interrupt coalescing** giảm overhead thông báo, trong khi **polling loop** hoặc **busy wait** ngắn có thể hữu ích lúc boot. **Critical section** ngắn, **atomic register** và logic **read-modify-write** cẩn thận bảo vệ state hardware chung. Nếu vẫn lỗi, **fault handler** ghi bằng chứng và đưa máy về **safe state**.
