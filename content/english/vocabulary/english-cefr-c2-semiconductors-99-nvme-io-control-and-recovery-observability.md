# C2 Vocabulary — NVMe I/O control and recovery observability

This lesson follows a storage request through queue control, DMA translation, controller recovery, telemetry, and firmware trust.

Flow: **NVMe namespace → submission queue → doorbell coalescing → interrupt moderation → DMA scatter-gather → IOMMU translation → queue pair affinity → command timeout → abort recovery → hot reset → surprise removal → asynchronous event → telemetry log page → device attestation → namespace reservation → queue depth telemetry → persistent event log → error injection hook → controller reset domain → admin command capsule**.

## 1. NVMe namespace /ˌen viː em ˈneɪsmeɪs/
**Part of speech:** noun
**Core meaning (English):** a logical storage address space exposed by an NVMe controller.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không gian địa chỉ storage logical do NVMe controller expose.
**Grammar & collocations:** `NVMe-namespace identifier` — identifier; `format a logical namespace` — format namespace logical.
**Examples:** `The NVMe namespace was isolated from the recovery volume during the firmware update.` → Namespace NVMe được cô lập khỏi recovery volume khi update firmware.
**Liên kết tiếng Hàn:** `NVMe 네임스페이스`.

## 2. submission queue /səbˈmɪʃən kjuː/
**Part of speech:** noun
**Core meaning (English):** a ring or queue into which software places commands for a storage controller.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ring hoặc queue nơi software đặt command cho storage controller.
**Grammar & collocations:** `submission-queue entry` — entry; `post a command descriptor` — post command descriptor.
**Examples:** `The submission queue filled when the controller stopped consuming descriptors.` → Queue submission đầy khi controller ngừng consume descriptor.
**Liên kết tiếng Hàn:** `제출 큐`.

## 3. doorbell coalescing /ˈdɔːrbel koʊəˈlesɪŋ/
**Part of speech:** noun
**Core meaning (English):** combining several queue notifications so the device is notified less often.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp nhiều notification queue để device được báo ít lần hơn.
**Grammar & collocations:** `doorbell-coalescing threshold` — threshold; `batch queue notifications` — batch notification queue.
**Examples:** `Doorbell coalescing reduced PCIe writes but added a small command-start delay.` → Coalescing doorbell giảm PCIe write nhưng thêm delay start command nhỏ.
**Liên kết tiếng Hàn:** `도어벨 병합`.

## 4. interrupt moderation /ˌɪntərˈrʌpt ˌmɑːdəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** delaying or grouping interrupts to trade notification overhead against completion latency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** delay hoặc group interrupt để cân overhead notification với latency completion.
**Grammar & collocations:** `interrupt-moderation timer` — timer; `batch completion notifications` — batch completion notification.
**Examples:** `Interrupt moderation improved throughput until tail latency became unacceptable.` → Moderation interrupt cải thiện throughput đến khi tail latency không chấp nhận được.
**Liên kết tiếng Hàn:** `인터럽트 조절`.

## 5. DMA scatter-gather /ˌdiː em ˈeɪ ˈskætər ˈɡæðər/
**Part of speech:** noun
**Core meaning (English):** transferring one logical buffer through multiple noncontiguous physical memory segments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transfer một buffer logical qua nhiều segment memory vật lý không liên tiếp.
**Grammar & collocations:** `DMA-scatter-gather list` — list; `chain physical fragments` — chain fragment vật lý.
**Examples:** `DMA scatter-gather avoided copying the fragmented payload into one temporary buffer.` → Scatter-gather DMA tránh copy payload fragmented vào buffer tạm.
**Liên kết tiếng Hàn:** `DMA 산재-수집`.

## 6. IOMMU translation /ˌaɪ oʊ em ˈjuː trænsˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** mapping of device-visible addresses to physical memory through an I/O memory-management unit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** map device-visible address sang physical memory qua I/O memory-management unit.
**Grammar & collocations:** `IOMMU-translation fault` — fault; `validate a device mapping` — validate mapping device.
**Examples:** `IOMMU translation blocked a DMA request that referenced an unmapped page.` → Translation IOMMU chặn DMA request trỏ page chưa map.
**Liên kết tiếng Hàn:** `IOMMU 변환`.

## 7. queue pair affinity /kjuː per əˈfɪnəti/
**Part of speech:** noun
**Core meaning (English):** deliberate assignment of a submission/completion queue pair to a CPU or locality.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gán có chủ ý cặp submission/completion queue cho CPU hoặc locality.
**Grammar & collocations:** `queue-pair-affinity mask` — mask; `pin I/O to a NUMA node` — pin I/O vào NUMA node.
**Examples:** `Queue pair affinity reduced cache bouncing between the storage thread and its completions.` → Affinity pair-queue giảm cache bouncing giữa storage thread và completion.
**Liên kết tiếng Hàn:** `큐 쌍 선호도`.

## 8. command timeout /kəˈmænd ˈtaɪmaʊt/
**Part of speech:** noun
**Core meaning (English):** expiration of the allowed time for a device command to complete.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hết thời gian cho phép để device command hoàn tất.
**Grammar & collocations:** `command-timeout threshold` — threshold; `classify a stalled request` — phân loại request stall.
**Examples:** `A command timeout triggered controller diagnostics rather than an immediate host reboot.` → Timeout command kích hoạt diagnostics controller thay vì reboot host ngay.
**Liên kết tiếng Hàn:** `명령 시간 초과`.

## 9. abort recovery /əˈbɔːrt rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** procedure for canceling or safely completing a command after it cannot proceed normally.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** procedure cancel hoặc hoàn tất an toàn command không thể tiếp tục bình thường.
**Grammar & collocations:** `abort-recovery path` — path; `drain an in-flight request` — drain request in-flight.
**Examples:** `Abort recovery preserved completed writes while discarding the timed-out read.` → Recovery abort giữ write hoàn tất và bỏ read timeout.
**Liên kết tiếng Hàn:** `중단 복구`.

## 10. hot reset /hɑːt rɪˈset/
**Part of speech:** noun
**Core meaning (English):** resetting a device or link without removing its power or fully restarting the host.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reset device hoặc link mà không rút power hoặc restart host hoàn toàn.
**Grammar & collocations:** `hot-reset sequence` — sequence; `reinitialize a controller in place` — reinitialize controller tại chỗ.
**Examples:** `A hot reset restored the link after the controller stopped responding to admin commands.` → Reset hot khôi phục link sau khi controller ngừng phản hồi admin command.
**Liên kết tiếng Hàn:** `핫 리셋`.

## 11. surprise removal /sərˈpraɪz rɪˈmuːvəl/
**Part of speech:** noun
**Core meaning (English):** disappearance of a device or link without an orderly software shutdown.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** device hoặc link biến mất không qua shutdown software có trật tự.
**Grammar & collocations:** `surprise-removal handler` — handler; `quiesce outstanding I/O` — làm yên I/O đang chờ.
**Examples:** `Surprise removal forced the driver to invalidate all outstanding mappings.` → Removal surprise buộc driver invalidate mọi mapping outstanding.
**Liên kết tiếng Hàn:** `돌발 제거`.

## 12. asynchronous event /eɪˈsɪŋkrənəs ɪˈvent/
**Part of speech:** noun
**Core meaning (English):** a controller notification delivered independently of a host command completion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** notification controller gửi độc lập với command completion của host.
**Grammar & collocations:** `asynchronous-event notification` — notification; `report a temperature alarm` — báo alarm nhiệt.
**Examples:** `An asynchronous event announced that the spare-block reserve had crossed its warning level.` → Event asynchronous báo reserve spare-block vượt warning level.
**Liên kết tiếng Hàn:** `비동기 이벤트`.

## 13. telemetry log page /təˈlemətri lɔːɡ peɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a structured controller record containing health, error, and workload diagnostics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record structured của controller chứa diagnostics health, error và workload.
**Grammar & collocations:** `telemetry-log-page parser` — parser; `capture a controller snapshot` — capture snapshot controller.
**Examples:** `The telemetry log page showed repeated media errors before the outage.` → Page log telemetry cho thấy media error lặp trước outage.
**Liên kết tiếng Hàn:** `텔레메트리 로그 페이지`.

## 14. device attestation /dɪˈvaɪs ˌæteˈsteɪʃən/
**Part of speech:** noun
**Core meaning (English):** cryptographic evidence that a device is running an approved identity and software state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** evidence cryptographic device chạy identity và software state được approve.
**Grammar & collocations:** `device-attestation report` — report; `verify measured firmware` — verify firmware measured.
**Examples:** `Device attestation failed when the controller reported an unsigned recovery image.` → Attestation device fail khi controller báo recovery image unsigned.
**Liên kết tiếng Hàn:** `장치 증명`.

## 15. namespace reservation /ˈneɪsmeɪs ˌrezərˈveɪʃən/
**Part of speech:** noun
**Core meaning (English):** a mechanism that reserves exclusive or coordinated access to a logical storage namespace.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mechanism reserve access độc quyền hoặc phối hợp cho namespace storage logical.
**Grammar & collocations:** `namespace-reservation key` — key; `coordinate clustered writers` — phối hợp writer cluster.
**Examples:** `Namespace reservation prevented two hosts from rebuilding the same volume.` → Reservation namespace ngăn hai host rebuild cùng volume.
**Liên kết tiếng Hàn:** `네임스페이스 예약`.

## 16. queue depth telemetry /kjuː depθ təˈlemətri/
**Part of speech:** noun
**Core meaning (English):** measurements of how many requests wait in a device queue over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measurement số request chờ trong device queue theo time.
**Grammar & collocations:** `queue-depth-telemetry series` — series; `correlate backlog with latency` — correlate backlog với latency.
**Examples:** `Queue depth telemetry exposed a periodic firmware pause hidden by average throughput.` → Telemetry depth-queue lộ firmware pause định kỳ bị average throughput che.
**Liên kết tiếng Hàn:** `큐 깊이 텔레메트리`.

## 17. persistent event log /pərˈsɪstənt ɪˈvent lɔːɡ/
**Part of speech:** noun
**Core meaning (English):** an event record preserved across resets so later analysis can reconstruct device history.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record event giữ qua reset để phân tích sau reconstruct lịch sử device.
**Grammar & collocations:** `persistent-event-log entry` — entry; `survive a controller reset` — sống qua reset controller.
**Examples:** `The persistent event log retained the first media-error timestamp after reboot.` → Log event persistent giữ timestamp media-error đầu sau reboot.
**Liên kết tiếng Hàn:** `영속 이벤트 로그`.

## 18. error injection hook /ˈerər ɪnˈdʒekʃən hʊk/
**Part of speech:** noun
**Core meaning (English):** a controlled interface for introducing faults to test detection and recovery behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interface có kiểm soát để đưa fault vào test detection và recovery.
**Grammar & collocations:** `error-injection-hook API` — API; `exercise a recovery path` — exercise path recovery.
**Examples:** `The error injection hook simulated a malformed completion without damaging media.` → Hook injection error mô phỏng completion sai mà không damage media.
**Liên kết tiếng Hàn:** `오류 주입 훅`.

## 19. controller reset domain /kənˈtroʊlər rɪˈset doʊˈmeɪn/
**Part of speech:** noun
**Core meaning (English):** the set of controller state and interfaces cleared together by one reset operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập state và interface controller bị clear cùng bởi một reset.
**Grammar & collocations:** `controller-reset-domain boundary` — boundary; `preserve unaffected queues` — giữ queue không ảnh hưởng.
**Examples:** `The controller reset domain excluded the persistent mapping cache.` → Domain reset controller loại mapping cache persistent.
**Liên kết tiếng Hàn:** `컨트롤러 리셋 도메인`.

## 20. admin command capsule /ˈædmɪn kəˈmænd ˈkæpsəl/
**Part of speech:** noun
**Core meaning (English):** a structured control message carrying management instructions to a storage device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** message control structured mang instruction management tới storage device.
**Grammar & collocations:** `admin-command-capsule parser` — parser; `issue a firmware query` — gửi query firmware.
**Examples:** `The admin command capsule requested a telemetry snapshot before the hot reset.` → Capsule command-admin yêu cầu snapshot telemetry trước hot reset.
**Liên kết tiếng Hàn:** `관리자 명령 캡슐`.

## Review in context

An **NVMe namespace** uses a **submission queue**, **doorbell coalescing**, **interrupt moderation**, **DMA scatter-gather**, **IOMMU translation**, and **queue pair affinity**. A **command timeout** triggers **abort recovery**, **hot reset**, or **surprise removal** handling, while an **asynchronous event** and **telemetry log page** feed **device attestation** and **namespace reservation** decisions. **Queue depth telemetry**, a **persistent event log**, an **error injection hook**, a **controller reset domain**, and an **admin command capsule** complete observability.

**Bản dịch tiếng Việt:** **NVMe namespace** dùng **submission queue**, **doorbell coalescing**, **interrupt moderation**, **DMA scatter-gather**, **IOMMU translation** và **queue pair affinity**. **Command timeout** kích hoạt xử lý **abort recovery**, **hot reset** hoặc **surprise removal**, còn **asynchronous event** và **telemetry log page** cung cấp dữ liệu cho quyết định **device attestation** và **namespace reservation**. **Queue depth telemetry**, **persistent event log**, **error injection hook**, **controller reset domain** và **admin command capsule** hoàn tất observability.
