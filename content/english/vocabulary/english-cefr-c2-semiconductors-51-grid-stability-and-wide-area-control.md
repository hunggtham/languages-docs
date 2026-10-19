# C2 Vocabulary — Grid stability and wide-area control

This lesson follows a power system from synchronized measurement and frequency defense through restoration and stability analysis.

Flow: **synchrophasor → phasor measurement unit → wide-area monitoring → rate of change of frequency → underfrequency load shedding → overfrequency trip → frequency nadir → inertia constant → governor response → automatic generation control → load shedding scheme → underfrequency relay → islanding scheme → black start → cold load pickup → system restoration → transient stability → small-signal stability → voltage stability → angle stability**.

## 1. synchrophasor /ˈsɪŋkrəˌfoʊzər/
**Part of speech:** noun
**Core meaning (English):** a time-synchronized measurement of a voltage or current phasor referenced to a common clock.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measurement phasor voltage/current đồng bộ theo clock chung.
**Grammar & collocations:** `synchrophasor stream` — stream; `compare remote phase angles` — so.
**Examples:** `The control center aligned each synchrophasor before estimating the oscillation.` → Control center căn synchrophasor trước ước tính oscillation.
**Liên kết tiếng Hàn:** `동기 위상자`.

## 2. phasor measurement unit /ˈfeɪzər ˈmeʒərmənt ˈjuːnɪt/
**Part of speech:** noun
**Core meaning (English):** a device that measures synchronized voltage and current phasors and reports them to a control system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết bị đo phasor voltage/current đồng bộ và báo về control system.
**Grammar & collocations:** `phasor-measurement-unit channel` — channel; `time-tag a measurement` — đóng dấu.
**Examples:** `The phasor measurement unit detected a growing phase separation between regions.` → PMU bắt phase separation tăng giữa các vùng.
**Liên kết tiếng Hàn:** `위상 측정 장치`.

## 3. wide-area monitoring /ˌwaɪd ˈeriə ˈmɑːnətərɪŋ/
**Part of speech:** noun
**Core meaning (English):** observing a large interconnected grid using synchronized measurements from many locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giám sát grid liên kết lớn bằng measurement đồng bộ từ nhiều nơi.
**Grammar & collocations:** `wide-area-monitoring system` — system; `visualize an interarea mode` — hiển thị.
**Examples:** `Wide-area monitoring revealed an oscillation that local meters missed.` → Monitoring diện rộng lộ oscillation local meter bỏ sót.
**Liên kết tiếng Hàn:** `광역 감시`.

## 4. rate of change of frequency /reɪt əv tʃeɪndʒ əv ˈfriːkwənsi/
**Part of speech:** noun
**Core meaning (English):** how quickly system frequency rises or falls after a power imbalance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ frequency hệ tăng/giảm sau mất cân bằng power.
**Grammar & collocations:** `rate-of-change-of-frequency threshold` — threshold; `detect a fast decline` — bắt.
**Examples:** `The inverter disconnected when the rate of change of frequency exceeded its limit.` → Inverter ngắt khi ROCOF vượt limit.
**Liên kết tiếng Hàn:** `주파수 변화율`.

## 5. underfrequency load shedding /ˌʌndərˈfriːkwənsi loʊd ˈʃedɪŋ/
**Part of speech:** noun
**Core meaning (English):** intentionally disconnecting selected loads when frequency falls to protect the remaining system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngắt có chủ ý một số load khi frequency giảm để bảo vệ hệ còn lại.
**Grammar & collocations:** `underfrequency-load-shedding stage` — stage; `drop a noncritical feeder` — cắt.
**Examples:** `Underfrequency load shedding stabilized the island after a generator tripped.` → Shedding ổn định đảo sau generator trip.
**Liên kết tiếng Hàn:** `저주파수 부하 차단`.

## 6. overfrequency trip /ˌoʊvərˈfriːkwənsi trɪp/
**Part of speech:** noun
**Core meaning (English):** disconnecting equipment when frequency rises above a safe or permitted level.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngắt thiết bị khi frequency vượt mức an toàn/cho phép.
**Grammar & collocations:** `overfrequency-trip setting` — setting; `protect a generator` — bảo vệ.
**Examples:** `The overfrequency trip opened the unit when load vanished suddenly.` → Trip mở unit khi load biến mất đột ngột.
**Liên kết tiếng Hàn:** `과주파수 트립`.

## 7. frequency nadir /ˈfriːkwənsi ˈneɪdɪər/
**Part of speech:** noun
**Core meaning (English):** the lowest frequency reached after a sudden loss of generation or increase in demand.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** frequency thấp nhất sau mất generation hoặc tăng demand đột ngột.
**Grammar & collocations:** `frequency-nadir estimate` — estimate; `raise the nadir` — nâng.
**Examples:** `Fast battery response raised the frequency nadir after the plant trip.` → Pin đáp ứng nhanh nâng nadir sau plant trip.
**Liên kết tiếng Hàn:** `주파수 최저점`.

## 8. inertia constant /ɪˈnɜːrʃə ˈkɑːnstənt/
**Part of speech:** noun
**Core meaning (English):** a parameter describing how much kinetic energy a rotating generator stores relative to its rating.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tham số mô tả kinetic energy generator quay trữ so với rating.
**Grammar & collocations:** `inertia-constant estimate` — estimate; `arrest a frequency decline` — hãm.
**Examples:** `A larger inertia constant slowed the initial frequency fall.` → Hằng số inertia lớn làm chậm sụt frequency.
**Liên kết tiếng Hàn:** `관성 상수`.

## 9. governor response /ˈɡʌvərnər rɪˈspɑːns/
**Part of speech:** noun
**Core meaning (English):** the change in mechanical input from a generator's speed governor after frequency shifts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi input cơ của governor generator sau frequency đổi.
**Grammar & collocations:** `governor-response curve` — curve; `increase mechanical power` — tăng.
**Examples:** `Governor response supplied extra torque before the storage inverter ramped.` → Governor cấp torque thêm trước inverter storage ramp.
**Liên kết tiếng Hàn:** `조속기 응답`.

## 10. automatic generation control /ˌɔːtəˈmætɪk ˌdʒenəˈreɪʃən kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** centralized control that adjusts generator outputs to regulate frequency and scheduled interchange.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control trung tâm chỉnh output generator để giữ frequency và interchange.
**Grammar & collocations:** `automatic-generation-control signal` — signal; `dispatch regulating reserve` — điều phối.
**Examples:** `Automatic generation control corrected the area interchange after the demand forecast changed.` → AGC sửa interchange sau forecast demand đổi.
**Liên kết tiếng Hàn:** `자동 발전 제어`.

## 11. load shedding scheme /loʊd ˈʃedɪŋ skiːm/
**Part of speech:** noun
**Core meaning (English):** an organized rule set for disconnecting loads in stages during a severe power shortage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ rule ngắt load theo stage khi thiếu power nghiêm trọng.
**Grammar & collocations:** `load-shedding-scheme stage` — stage; `prioritize critical services` — ưu tiên.
**Examples:** `The load shedding scheme protected hospitals by dropping industrial feeders first.` → Scheme bảo vệ bệnh viện bằng cách cắt feeder công nghiệp trước.
**Liên kết tiếng Hàn:** `부하 차단 방식`.

## 12. underfrequency relay /ˌʌndərˈfriːkwənsi rɪˈleɪ/
**Part of speech:** noun
**Core meaning (English):** a relay that detects frequency below a configured threshold and initiates protection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** relay bắt frequency dưới threshold và kích protection.
**Grammar & collocations:** `underfrequency-relay pickup` — pickup; `trip a feeder` — trip.
**Examples:** `The underfrequency relay started the second shedding stage after the first delay.` → Relay khởi động stage hai sau delay đầu.
**Liên kết tiếng Hàn:** `저주파수 계전기`.

## 13. islanding scheme /ˈaɪləndɪŋ skiːm/
**Part of speech:** noun
**Core meaning (English):** a coordinated method for detecting, controlling, and safely operating an electrically separated grid section.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp phối hợp để detect/control/vận hành an toàn phần grid tách điện.
**Grammar & collocations:** `islanding-scheme transition` — transition; `form a local island` — tạo.
**Examples:** `The islanding scheme transferred critical loads to a grid-forming battery.` → Scheme chuyển load quan trọng sang pin grid-forming.
**Liên kết tiếng Hàn:** `단독 운전 방식`.

## 14. black start /ˈblæk stɑːrt/
**Part of speech:** noun
**Core meaning (English):** restoring a generating unit or grid section without relying on external grid power.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khôi phục generator/grid section không cần nguồn grid ngoài.
**Grammar & collocations:** `black-start capability` — capability; `energize a dead bus` — cấp điện.
**Examples:** `The hydro unit provided black start for the damaged transmission region.` → Unit thủy điện black start vùng truyền tải hỏng.
**Liên kết tiếng Hàn:** `블랙 스타트`.

## 15. cold load pickup /koʊld loʊd ˈpɪkʌp/
**Part of speech:** noun
**Core meaning (English):** the unusually high demand that appears when a large group of loads is restored after being off.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** demand cao bất thường khi nhiều load bật lại sau tắt.
**Grammar & collocations:** `cold-load-pickup profile` — profile; `restore feeders in stages` — khôi phục.
**Examples:** `Cold load pickup overloaded the feeder when every thermostat restarted together.` → Pickup làm quá tải feeder khi thermostat cùng restart.
**Liên kết tiếng Hàn:** `냉부하 픽업`.

## 16. system restoration /ˈsɪstəm ˌrestəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the planned sequence for rebuilding service and reconnecting loads after a widespread outage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sequence có kế hoạch dựng lại service và nối load sau outage lớn.
**Grammar & collocations:** `system-restoration plan` — plan; `reconnect a corridor` — nối lại.
**Examples:** `System restoration prioritized the transmission corridor feeding the water plants.` → Restoration ưu tiên corridor cấp nước.
**Liên kết tiếng Hàn:** `계통 복구`.

## 17. transient stability /ˈtrænziənt stəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability of a power system to remain synchronized after a large sudden disturbance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng hệ giữ đồng bộ sau disturbance lớn đột ngột.
**Grammar & collocations:** `transient-stability margin` — margin; `survive a three-phase fault` — chịu.
**Examples:** `The study increased transient stability by clearing the fault faster.` → Study tăng stability bằng dập fault nhanh hơn.
**Liên kết tiếng Hàn:** `과도 안정도`.

## 18. small-signal stability /ˈsmɔːl ˈsɪɡnəl stəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability of a system to damp small oscillations around a normal operating point.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng dập oscillation nhỏ quanh điểm vận hành bình thường.
**Grammar & collocations:** `small-signal-stability analysis` — analysis; `damp an interarea mode` — dập.
**Examples:** `Small-signal stability worsened when the controller gain was increased.` → Stability tín hiệu nhỏ xấu khi gain tăng.
**Liên kết tiếng Hàn:** `소신호 안정도`.

## 19. voltage stability /ˈvoʊltɪdʒ stəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability of a system to maintain acceptable voltages as loads and transfers change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng giữ voltage chấp nhận khi load/transfer đổi.
**Grammar & collocations:** `voltage-stability margin` — margin; `support a weak bus` — hỗ trợ.
**Examples:** `Reactive support restored voltage stability on the long rural line.` → Hỗ trợ reactive khôi phục stability trên line dài.
**Liên kết tiếng Hàn:** `전압 안정도`.

## 20. angle stability /ˈæŋɡəl stəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability of connected generators or inverters to maintain coherent phase angles.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng generator/inverter giữ phase angle phối hợp.
**Grammar & collocations:** `angle-stability limit` — limit; `maintain synchronism` — giữ đồng bộ.
**Examples:** `Angle stability was threatened when the tie line carried a large transfer.` → Stability góc bị đe dọa khi tie line truyền lớn.
**Liên kết tiếng Hàn:** `각 안정도`.

## Review in context

A **synchrophasor** from a **phasor measurement unit** supports **wide-area monitoring**. The **rate of change of frequency** can trigger **underfrequency load shedding**, while an **overfrequency trip** protects an excess-generation condition; **frequency nadir**, **inertia constant**, and **governor response** describe the event. **automatic generation control** and a **load shedding scheme** coordinate recovery, with an **underfrequency relay** and **islanding scheme** providing local action. **black start**, **cold load pickup**, and **system restoration** rebuild service. Studies check **transient stability**, **small-signal stability**, **voltage stability**, and **angle stability**.

**Bản dịch tiếng Việt:** **Synchrophasor** từ **phasor measurement unit** hỗ trợ **wide-area monitoring**. **Rate of change of frequency** có thể kích **underfrequency load shedding**, còn **overfrequency trip** bảo vệ tình trạng dư generation; **frequency nadir**, **inertia constant** và **governor response** mô tả event. **automatic generation control** và **load shedding scheme** phối hợp hồi phục, với **underfrequency relay** và **islanding scheme** xử lý local. **black start**, **cold load pickup** và **system restoration** dựng lại service. Nghiên cứu kiểm tra **transient stability**, **small-signal stability**, **voltage stability** và **angle stability**.
