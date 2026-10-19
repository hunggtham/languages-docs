# C2 Vocabulary — Embedded device buses and signal integrity

This lesson maps common embedded buses from electrical lines through arbitration, framing, error checks, and safe device connection.

Flow: **inter-integrated circuit → serial peripheral interface → universal asynchronous receiver-transmitter → controller area network → local interconnect network → modbus frame → device bus → bus arbitration → chip select → clock stretching → open-drain line → pull-up resistor → differential pair → termination resistor → bit stuffing → frame checksum → cyclic redundancy check → link layer → bus contention → hot plug**.

## 1. inter-integrated circuit /ˌɪntər ˈɪntəɡreɪtɪd ˈsɜːrkɪt/
**Part of speech:** noun
**Core meaning (English):** a short-distance two-wire bus on which addressed devices share a clock and data line.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bus hai dây tầm ngắn, các device có địa chỉ dùng chung clock và data.
**Grammar & collocations:** `inter-integrated-circuit address` — địa chỉ; `scan the bus` — quét.
**Examples:** `The controller read the temperature sensor over inter-integrated circuit during boot.` → Controller đọc sensor nhiệt qua I²C lúc boot.
**Liên kết tiếng Hàn:** `I²C 버스`.

## 2. serial peripheral interface /ˈsɪriəl pəˈrɪfərəl ˈɪntərfeɪs/
**Part of speech:** noun
**Core meaning (English):** a synchronous serial bus that transfers data between a controller and selected peripherals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bus serial đồng bộ truyền data giữa controller và peripheral được chọn.
**Grammar & collocations:** `serial-peripheral-interface mode` — mode; `shift a command` — dịch.
**Examples:** `The display used serial peripheral interface for fast frame transfers.` → Display dùng SPI để truyền frame nhanh.
**Liên kết tiếng Hàn:** `직렬 주변 장치 인터페이스`.

## 3. universal asynchronous receiver-transmitter /ˌjuːnəˈvɜːrsəl eɪˈsɪŋkrənəs rɪˈsiːvər trænsˈmɪtər/
**Part of speech:** noun
**Core meaning (English):** a hardware block that sends and receives asynchronous serial characters using configured timing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** block hardware gửi/nhận ký tự serial bất đồng bộ theo timing cấu hình.
**Grammar & collocations:** `universal-asynchronous-receiver-transmitter port` — cổng; `set the baud rate` — đặt.
**Examples:** `The boot console exposed logs through a universal asynchronous receiver-transmitter port.` → Console boot xuất log qua cổng UART.
**Liên kết tiếng Hàn:** `범용 비동기 송수신기`.

## 4. controller area network /kənˈtroʊlər ˈeriə ˈnetwɜːrk/
**Part of speech:** noun
**Core meaning (English):** a robust multi-node bus designed for real-time messages among controllers, especially in vehicles.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bus nhiều node bền vững cho message real-time giữa controller, nhất là xe.
**Grammar & collocations:** `controller-area-network frame` — frame; `broadcast a status message` — phát.
**Examples:** `The brake module published its pressure value on controller area network.` → Module phanh phát giá trị áp suất trên CAN.
**Liên kết tiếng Hàn:** `컨트롤러 영역 네트워크`.

## 5. local interconnect network /ˈloʊkəl ˌɪntərkəˈnekt ˈnetwɜːrk/
**Part of speech:** noun
**Core meaning (English):** a low-cost serial network for simple distributed controllers and sensors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạng serial rẻ cho controller và sensor phân tán đơn giản.
**Grammar & collocations:** `local-interconnect-network schedule` — lịch; `poll a slave node` — hỏi.
**Examples:** `The seat controller used local interconnect network to report switch positions.` → Controller ghế dùng LIN báo vị trí switch.
**Liên kết tiếng Hàn:** `로컬 인터커넥트 네트워크`.

## 6. modbus frame /ˈmɑːdbʌs freɪm/
**Part of speech:** noun
**Core meaning (English):** a formatted Modbus request or response containing an address, function, data, and integrity check.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** request/response Modbus có address, function, data và check integrity.
**Grammar & collocations:** `Modbus-frame parser` — bộ phân tích; `read a holding register` — đọc.
**Examples:** `The gateway rejected a Modbus frame with an invalid function code.` → Gateway từ chối frame có function code sai.
**Liên kết tiếng Hàn:** `Modbus 프레임`.

## 7. device bus /dɪˈvaɪs bʌs/
**Part of speech:** noun
**Core meaning (English):** a shared electrical or logical path through which a processor communicates with peripheral devices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường điện/logical dùng chung để processor giao tiếp peripheral.
**Grammar & collocations:** `device-bus driver` — driver; `enumerate attached devices` — liệt kê.
**Examples:** `The device bus exposed storage, sensors, and a diagnostic bridge to the processor.` → Bus thiết bị nối storage, sensor và bridge chẩn đoán.
**Liên kết tiếng Hàn:** `장치 버스`.

## 8. bus arbitration /bʌs ˌɑːrbəˈtreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process that decides which requester may use a shared bus at a given time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy trình chọn requester được dùng bus chung tại một thời điểm.
**Grammar & collocations:** `bus-arbitration priority` — priority; `grant a master` — cấp quyền.
**Examples:** `Bus arbitration gave the emergency controller priority over bulk telemetry.` → Arbitration ưu tiên controller khẩn cấp hơn telemetry lớn.
**Liên kết tiếng Hàn:** `버스 중재`.

## 9. chip select /ˈtʃɪp səˈlekt/
**Part of speech:** noun
**Core meaning (English):** a signal that identifies which peripheral should respond to a shared serial transfer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu xác định peripheral nào đáp ứng transfer serial dùng chung.
**Grammar & collocations:** `chip-select line` — đường; `assert a device select` — kích hoạt.
**Examples:** `The driver held chip select low until the flash command and address were complete.` → Driver giữ CS thấp đến khi command và address flash xong.
**Liên kết tiếng Hàn:** `칩 선택`.

## 10. clock stretching /ˈklɑːk ˈstretʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** a bus behavior in which a device holds the clock line to delay the next transfer until it is ready.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** device giữ đường clock để trì hoãn transfer đến khi sẵn sàng.
**Grammar & collocations:** `clock-stretching timeout` — timeout; `hold the clock low` — giữ.
**Examples:** `The slow sensor used clock stretching while converting a measurement.` → Sensor chậm dùng stretching khi chuyển đổi measurement.
**Liên kết tiếng Hàn:** `클록 스트레칭`.

## 11. open-drain line /ˌoʊpən ˈdreɪn laɪn/
**Part of speech:** noun
**Core meaning (English):** a shared signal line that devices pull low but do not actively drive high.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường chung mà device kéo xuống thấp nhưng không tự drive lên cao.
**Grammar & collocations:** `open-drain output` — output; `release the line` — nhả.
**Examples:** `An open-drain line let several devices signal an interrupt without shorting their outputs.` → Line open-drain cho nhiều device báo interrupt mà không chập output.
**Liên kết tiếng Hàn:** `오픈 드레인 라인`.

## 12. pull-up resistor /ˈpʊl ʌp rɪˈzɪstər/
**Part of speech:** noun
**Core meaning (English):** a resistor that biases a shared signal toward a high voltage when no device is pulling it low.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resistor kéo signal chung lên voltage cao khi không device nào kéo thấp.
**Grammar & collocations:** `pull-up-resistor value` — giá trị; `bias an idle line` — phân cực.
**Examples:** `The engineer reduced the pull-up resistor to meet the bus rise-time limit.` → Kỹ sư giảm resistor để đạt rise-time bus.
**Liên kết tiếng Hàn:** `풀업 저항`.

## 13. differential pair /ˌdɪfəˈrenʃəl per/
**Part of speech:** noun
**Core meaning (English):** two conductors carrying opposite signal polarities so a receiver can reject shared noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hai dây mang polarity ngược để receiver loại nhiễu chung.
**Grammar & collocations:** `differential-pair routing` — routing; `match trace lengths` — cân bằng.
**Examples:** `The designer routed the differential pair together through the connector region.` → Designer route cặp vi sai đi cùng qua vùng connector.
**Liên kết tiếng Hàn:** `차동 쌍`.

## 14. termination resistor /ˌtɜːrməˈneɪʃən rɪˈzɪstər/
**Part of speech:** noun
**Core meaning (English):** a resistor placed at a transmission-line end to reduce signal reflections.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resistor ở cuối đường truyền để giảm phản xạ signal.
**Grammar & collocations:** `termination-resistor value` — giá trị; `match the line impedance` — khớp.
**Examples:** `The technician fitted a termination resistor after seeing ringing on the long cable.` → Kỹ thuật viên lắp resistor sau thấy ringing trên cáp dài.
**Liên kết tiếng Hàn:** `종단 저항`.

## 15. bit stuffing /bɪt ˈstʌfɪŋ/
**Part of speech:** noun
**Core meaning (English):** inserting extra bits into a serial frame so reserved patterns do not appear accidentally and timing remains recoverable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chèn bit thêm vào frame để pattern dành riêng không xuất hiện nhầm và giữ timing.
**Grammar & collocations:** `bit-stuffing rule` — quy tắc; `remove stuffed bits` — bỏ.
**Examples:** `The receiver removed the stuffed bit before checking the payload.` → Receiver bỏ bit chèn trước check payload.
**Liên kết tiếng Hàn:** `비트 스터핑`.

## 16. frame checksum /freɪm ˈtʃeksʌm/
**Part of speech:** noun
**Core meaning (English):** a compact value calculated over a frame so a receiver can detect transmission corruption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị ngắn tính trên frame để receiver phát hiện hỏng khi truyền.
**Grammar & collocations:** `frame-checksum field` — field; `recompute the checksum` — tính lại.
**Examples:** `The receiver discarded the packet when its frame checksum did not match.` → Receiver bỏ packet khi checksum không khớp.
**Liên kết tiếng Hàn:** `프레임 체크섬`.

## 17. cyclic redundancy check /ˈsaɪklɪk rɪˈdʌndənsi tʃek/
**Part of speech:** noun
**Core meaning (English):** a polynomial-based error-detection code computed over a sequence of bits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã phát hiện lỗi dựa trên đa thức, tính trên chuỗi bit.
**Grammar & collocations:** `cyclic-redundancy-check polynomial` — đa thức; `validate a received frame` — xác thực.
**Examples:** `The controller used a cyclic redundancy check to detect a burst error on the bus.` → Controller dùng CRC bắt lỗi burst trên bus.
**Liên kết tiếng Hàn:** `순환 중복 검사`.

## 18. link layer /ˈlɪŋk ˌleɪər/
**Part of speech:** noun
**Core meaning (English):** the protocol layer that frames data and manages addressing, access, and integrity over one communication link.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tầng protocol đóng frame và quản lý address, access, integrity trên một link.
**Grammar & collocations:** `link-layer retry` — retry; `interpret a control field` — đọc.
**Examples:** `The link layer retransmitted the frame after detecting a checksum error.` → Link layer truyền lại frame sau lỗi checksum.
**Liên kết tiếng Hàn:** `링크 계층`.

## 19. bus contention /bʌs kənˈtenʃən/
**Part of speech:** noun
**Core meaning (English):** conflicting attempts by multiple devices to drive a shared bus at the same time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều device cùng drive bus chung gây xung đột.
**Grammar & collocations:** `bus-contention fault` — lỗi; `detect simultaneous drivers` — phát hiện.
**Examples:** `A firmware race caused bus contention when two masters asserted the line together.` → Race firmware gây contention khi hai master cùng assert.
**Liên kết tiếng Hàn:** `버스 경합`.

## 20. hot plug /ˈhɑːt plʌɡ/
**Part of speech:** noun
**Core meaning (English):** connecting or disconnecting a device while the system remains powered and operating.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nối/ngắt device khi hệ thống vẫn cấp nguồn và đang chạy.
**Grammar & collocations:** `hot-plug detection` — phát hiện; `debounce a connector event` — lọc.
**Examples:** `The storage bay supported hot plug without resetting the other devices on the bus.` → Bay storage hỗ trợ hot plug mà không reset device khác.
**Liên kết tiếng Hàn:** `핫 플러그`.

## Review in context

An **inter-integrated circuit** sensor bus differs from a **serial peripheral interface** link or a **universal asynchronous receiver-transmitter** console; vehicles may instead use **controller area network**, **local interconnect network**, or a **modbus frame** over another **device bus**. **bus arbitration** chooses a sender, **chip select** identifies a peripheral, and **clock stretching** lets a slow device pause. An **open-drain line** needs a **pull-up resistor**. High-speed links use a **differential pair** and **termination resistor**; **bit stuffing**, a **frame checksum**, and a **cyclic redundancy check** protect the frame at the **link layer**. Careful ownership prevents **bus contention**, while controlled **hot plug** protects a live system.

**Bản dịch tiếng Việt:** Bus sensor **inter-integrated circuit** khác link **serial peripheral interface** hoặc console **universal asynchronous receiver-transmitter**; xe có thể dùng **controller area network**, **local interconnect network** hoặc **modbus frame** trên một **device bus** khác. **bus arbitration** chọn bên gửi, **chip select** xác định peripheral, còn **clock stretching** cho device chậm tạm dừng. **open-drain line** cần **pull-up resistor**. Link tốc độ cao dùng **differential pair** và **termination resistor**; **bit stuffing**, **frame checksum** và **cyclic redundancy check** bảo vệ frame ở **link layer**. Ownership cẩn thận ngăn **bus contention**, còn **hot plug** có kiểm soát bảo vệ hệ thống đang chạy.
