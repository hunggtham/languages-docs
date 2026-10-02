# C2 Vocabulary — Embedded real-time systems and firmware

This lesson follows an embedded device from deterministic scheduling and interrupt handling through registers, boot, and hardware binding.

Flow: **embedded controller → microcontroller unit → interrupt latency → deterministic timing → real-time deadline → hard real-time → soft real-time → priority inheritance → priority ceiling → interrupt service routine → deferred interrupt → memory-mapped register → volatile access → bit field → register map → bootloader → firmware image → device tree → board support package → driver binding**.

## 1. embedded controller /ɪmˈbedɪd kənˈtroʊlər/
**Part of speech:** noun
**Core meaning (English):** a dedicated computing unit that controls a device or physical process within a larger product.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** computing unit chuyên dụng điều khiển device/process vật lý trong sản phẩm.
**Grammar & collocations:** `embedded-controller firmware` — firmware; `control a motor subsystem` — điều khiển.
**Examples:** `The embedded controller adjusted the valve before the temperature exceeded its limit.` → Controller chỉnh valve trước nhiệt vượt limit.
**Liên kết tiếng Hàn:** `임베디드 컨트롤러`.

## 2. microcontroller unit /ˌmaɪkroʊkənˈtroʊlər ˈjuːnɪt/
**Part of speech:** noun
**Core meaning (English):** a compact chip containing a processor, memory, and peripheral controllers for embedded work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chip gọn gồm processor, memory và peripheral controller cho embedded.
**Grammar & collocations:** `microcontroller-unit pin` — pin; `read a peripheral register` — đọc.
**Examples:** `The microcontroller unit sampled the sensor and drove the status display.` → MCU lấy mẫu sensor và điều khiển display.
**Liên kết tiếng Hàn:** `마이크로컨트롤러 유닛`.

## 3. interrupt latency /ˈɪntərʌpt ˈleɪtənsi/
**Part of speech:** noun
**Core meaning (English):** the time between an interrupt's arrival and the start of its handling code.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian từ interrupt tới lúc code xử lý bắt đầu.
**Grammar & collocations:** `interrupt-latency budget` — budget; `measure worst-case response` — đo.
**Examples:** `Interrupt latency exceeded the sensor deadline when logging held the processor.` → Latency vượt deadline khi logging giữ processor.
**Liên kết tiếng Hàn:** `인터럽트 지연 시간`.

## 4. deterministic timing /dɪˌtɜːrmɪˈnɪstɪk ˈtaɪmɪŋ/
**Part of speech:** noun
**Core meaning (English):** timing behavior whose bounds are predictable enough for a system's required responses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** behavior timing có bound đủ dự đoán cho response yêu cầu.
**Grammar & collocations:** `deterministic-timing guarantee` — guarantee; `bound scheduling jitter` — giới hạn.
**Examples:** `Deterministic timing mattered more than average throughput in the braking controller.` → Timing xác định quan trọng hơn throughput trung bình.
**Liên kết tiếng Hàn:** `결정론적 타이밍`.

## 5. real-time deadline /ˈriːəl taɪm ˈdedlaɪn/
**Part of speech:** noun
**Core meaning (English):** the latest time by which a task must produce a result to remain useful or safe.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời hạn cuối task phải trả result để còn hữu ích/an toàn.
**Grammar & collocations:** `real-time-deadline miss` — miss; `meet a control deadline` — đạt.
**Examples:** `The actuator command missed its real-time deadline and was discarded.` → Command actuator lỡ deadline nên bị bỏ.
**Liên kết tiếng Hàn:** `실시간 마감 시간`.

## 6. hard real-time /hɑːrd ˈriːəl taɪm/
**Part of speech:** noun
**Core meaning (English):** a timing requirement in which missing a deadline is considered a system failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** yêu cầu timing mà lỡ deadline được coi là system failure.
**Grammar & collocations:** `hard-real-time guarantee` — guarantee; `prove a worst-case bound` — chứng minh.
**Examples:** `The airbag trigger used hard real-time scheduling because a late result was unacceptable.` → Trigger airbag dùng hard real-time.
**Liên kết tiếng Hàn:** `하드 실시간`.

## 7. soft real-time /sɒft ˈriːəl taɪm/
**Part of speech:** noun
**Core meaning (English):** a timing requirement in which occasional deadline misses reduce quality but do not necessarily cause failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỡ deadline đôi khi làm giảm quality nhưng không nhất thiết failure.
**Grammar & collocations:** `soft-real-time workload` — workload; `tolerate occasional lateness` — chịu.
**Examples:** `The video preview used soft real-time scheduling and tolerated an occasional late frame.` → Preview video chịu frame trễ đôi khi.
**Liên kết tiếng Hàn:** `소프트 실시간`.

## 8. priority inheritance /praɪˈɒrəti ɪnˈherɪtəns/
**Part of speech:** noun
**Core meaning (English):** temporarily giving a lock holder the priority of a blocked higher-priority task.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạm trao priority task cao cho lock holder đang chặn nó.
**Grammar & collocations:** `priority-inheritance protocol` — protocol; `bound priority inversion` — giới hạn.
**Examples:** `Priority inheritance let the low-priority logger release the lock quickly.` → Inheritance giúp logger nhả lock nhanh.
**Liên kết tiếng Hàn:** `우선순위 상속`.

## 9. priority ceiling /praɪˈɒrəti ˈsiːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** a locking rule that assigns each resource a ceiling priority to prevent unsafe task blocking.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule lock gán ceiling priority cho resource để ngăn blocking nguy hiểm.
**Grammar & collocations:** `priority-ceiling protocol` — protocol; `acquire a protected resource` — lấy.
**Examples:** `The priority ceiling prevented a medium-priority task from delaying the control loop.` → Ceiling ngăn task trung chặn loop.
**Liên kết tiếng Hàn:** `우선순위 상한`.

## 10. interrupt service routine /ˈɪntərʌpt ˈsɜːrvɪs ruːtiːn/
**Part of speech:** noun
**Core meaning (English):** a short handler executed in response to a hardware or software interrupt.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** handler ngắn chạy để đáp ứng interrupt hardware/software.
**Grammar & collocations:** `interrupt-service-routine path` — path; `acknowledge a device interrupt` — xác nhận.
**Examples:** `The interrupt service routine copied the timestamp and deferred parsing to a worker.` → ISR copy timestamp rồi defer parse.
**Liên kết tiếng Hàn:** `인터럽트 서비스 루틴`.

## 11. deferred interrupt /dɪˈfɜːrd ˈɪntərʌpt/
**Part of speech:** noun
**Core meaning (English):** follow-up interrupt work postponed from the immediate handler so urgent processing stays short.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần work interrupt hoãn từ handler tức thời để xử lý urgent ngắn.
**Grammar & collocations:** `deferred-interrupt queue` — queue; `schedule bottom-half work` — xếp.
**Examples:** `The driver used a deferred interrupt to process the full packet after acknowledging hardware.` → Driver defer xử lý packet sau ack hardware.
**Liên kết tiếng Hàn:** `지연 인터럽트`.

## 12. memory-mapped register /ˈmeməri mæpt ˈredʒɪstər/
**Part of speech:** noun
**Core meaning (English):** a hardware control or status register exposed at a memory address.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** register control/status hardware lộ ở memory address.
**Grammar & collocations:** `memory-mapped-register access` — access; `write a device command` — ghi.
**Examples:** `The driver wrote the reset bit to a memory-mapped register.` → Driver ghi bit reset vào register map memory.
**Liên kết tiếng Hàn:** `메모리 매핑 레지스터`.

## 13. volatile access /ˈvɒlətaɪl ˈækses/
**Part of speech:** noun
**Core meaning (English):** an access that the compiler must preserve because a value may change outside ordinary program flow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** access compiler phải giữ vì value có thể đổi ngoài flow thường.
**Grammar & collocations:** `volatile-access qualifier` — qualifier; `read a hardware status bit` — đọc.
**Examples:** `Volatile access prevented the compiler from caching the device status indefinitely.` → Access volatile ngăn compiler cache status mãi.
**Liên kết tiếng Hàn:** `휘발성 접근`.

## 14. bit field /bɪt fiːld/
**Part of speech:** noun
**Core meaning (English):** a defined group of bits within a word used to encode one hardware setting or status value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm bit trong word mã hóa một setting/status hardware.
**Grammar & collocations:** `bit-field mask` — mask; `set a mode field` — đặt.
**Examples:** `The driver cleared the interrupt bit field before enabling the channel.` → Driver xóa field interrupt trước bật channel.
**Liên kết tiếng Hàn:** `비트 필드`.

## 15. register map /ˈredʒɪstər mæp/
**Part of speech:** noun
**Core meaning (English):** documentation defining the addresses, fields, reset values, and meanings of device registers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tài liệu về address, field, reset value và nghĩa register device.
**Grammar & collocations:** `register-map revision` — revision; `look up a status offset` — tra.
**Examples:** `The register map showed that the status bit was cleared by reading the port.` → Map cho thấy đọc port sẽ clear status.
**Liên kết tiếng Hàn:** `레지스터 맵`.

## 16. bootloader /ˈbuːtˌloʊdər/
**Part of speech:** noun
**Core meaning (English):** small startup software that initializes hardware and loads or verifies the main firmware.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** software khởi động init hardware và load/verify firmware chính.
**Grammar & collocations:** `bootloader signature` — signature; `verify an update image` — verify.
**Examples:** `The bootloader rejected the update because its signature did not match.` → Bootloader từ chối update vì signature sai.
**Liên kết tiếng Hàn:** `부트로더`.

## 17. firmware image /ˈfɜːrmwer ˈɪmɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a packaged binary and metadata intended to be installed on an embedded device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** binary và metadata đóng gói để cài trên embedded device.
**Grammar & collocations:** `firmware-image version` — version; `flash a signed image` — ghi.
**Examples:** `The manufacturing line flashed the firmware image and recorded its checksum.` → Dây chuyền ghi image và lưu checksum.
**Liên kết tiếng Hàn:** `펌웨어 이미지`.

## 18. device tree /dɪˈvaɪs triː/
**Part of speech:** noun
**Core meaning (English):** a structured description of hardware components and connections supplied to firmware or an operating system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô tả có cấu trúc component hardware và connection cho firmware/OS.
**Grammar & collocations:** `device-tree node` — node; `describe a peripheral address` — mô tả.
**Examples:** `The device tree told the kernel which interrupt line belonged to the sensor.` → Tree nói kernel interrupt line của sensor.
**Liên kết tiếng Hàn:** `디바이스 트리`.

## 19. board support package /bɔːrd səˈpɔːrt ˈpækɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the hardware-specific code and configuration needed to run an operating system on a board.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code/config hardware-specific để OS chạy trên board.
**Grammar & collocations:** `board-support-package release` — release; `initialize board peripherals` — init.
**Examples:** `The board support package configured the clocks and serial console for the prototype.` → BSP config clock và console serial.
**Liên kết tiếng Hàn:** `보드 지원 패키지`.

## 20. driver binding /ˈdraɪvər ˈbaɪndɪŋ/
**Part of speech:** noun
**Core meaning (English):** associating a hardware description with the software driver that controls it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gắn hardware description với driver điều khiển nó.
**Grammar & collocations:** `driver-binding rule` — rule; `bind a device node` — gắn.
**Examples:** `Driver binding selected the temperature driver for the matching device-tree node.` → Binding chọn driver nhiệt cho node khớp.
**Liên kết tiếng Hàn:** `드라이버 바인딩`.

## Review in context

An **embedded controller** built around a **microcontroller unit** must bound **interrupt latency** and provide **deterministic timing** for each **real-time deadline**. **Hard real-time** tasks cannot miss, while **soft real-time** tasks tolerate some lateness; **priority inheritance** and **priority ceiling** control blocking. An **interrupt service routine** may schedule a **deferred interrupt**. Drivers access a **memory-mapped register** through **volatile access**, using a **bit field** documented by a **register map**. A **bootloader** verifies a **firmware image**; a **device tree**, **board support package**, and **driver binding** connect software to hardware.

**Bản dịch tiếng Việt:** **Embedded controller** dựa trên **microcontroller unit** phải giới hạn **interrupt latency** và bảo đảm **deterministic timing** cho từng **real-time deadline**. Task **hard real-time** không được lỡ, còn **soft real-time** chịu trễ; **priority inheritance** và **priority ceiling** điều khiển blocking. **Interrupt service routine** có thể xếp **deferred interrupt**. Driver access **memory-mapped register** qua **volatile access**, dùng **bit field** được ghi trong **register map**. **Bootloader** verify **firmware image**; **device tree**, **board support package** và **driver binding** nối software với hardware.
