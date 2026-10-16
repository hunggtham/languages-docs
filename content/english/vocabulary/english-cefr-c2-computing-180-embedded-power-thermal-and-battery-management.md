# C2 Vocabulary — Embedded power, thermal, and battery management

This lesson follows energy and heat from board-level limits through low-power modes, protection circuits, and battery estimation.

Flow: **thermal budget → derating curve → fan curve → dynamic frequency scaling → retention mode → load transient → current limit → power-on reset → reset supervisor → brownout threshold → thermal sensor → temperature hysteresis → overtemperature shutdown → power island → rail sequencing → energy harvesting → battery fuel gauge → charge controller → state-of-charge estimate → battery protection circuit**.

## 1. thermal budget /ˈθɜːrməl ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the maximum heat a device can generate or remove while remaining within its operating limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng nhiệt tối đa device tạo/thoát mà vẫn trong giới hạn hoạt động.
**Grammar & collocations:** `thermal-budget margin` — biên; `allocate heat across components` — phân bổ.
**Examples:** `The processor and radio shared a thermal budget inside the sealed enclosure.` → Processor và radio chia thermal budget trong vỏ kín.
**Liên kết tiếng Hàn:** `열 예산`.

## 2. derating curve /ˈdiːˌreɪtɪŋ kɜːrv/
**Part of speech:** noun
**Core meaning (English):** a graph showing how a component's permitted load decreases as temperature or another stress rises.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồ thị cho thấy tải cho phép giảm khi nhiệt hoặc stress tăng.
**Grammar & collocations:** `derating-curve limit` — giới hạn; `reduce allowable current` — giảm.
**Examples:** `The derating curve limited output current above seventy degrees Celsius.` → Curve giới hạn dòng ra trên 70°C.
**Liên kết tiếng Hàn:** `감율 곡선`.

## 3. fan curve /ˈfæn kɜːrv/
**Part of speech:** noun
**Core meaning (English):** a control relationship that sets fan speed in response to temperature or load.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ điều khiển tốc độ quạt theo nhiệt hoặc tải.
**Grammar & collocations:** `fan-curve profile` — profile; `ramp the blower` — tăng tốc.
**Examples:** `The fan curve kept the enclosure quiet until the heat sink approached its limit.` → Curve giữ vỏ yên đến khi heat sink gần giới hạn.
**Liên kết tiếng Hàn:** `팬 곡선`.

## 4. dynamic frequency scaling /daɪˈnæmɪk ˈfriːkwənsi ˈskeɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** changing a processor's clock frequency at runtime to balance performance, power, and heat.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi frequency processor lúc chạy để cân bằng performance, điện và nhiệt.
**Grammar & collocations:** `dynamic-frequency-scaling policy` — policy; `lower the clock under load` — hạ.
**Examples:** `Dynamic frequency scaling reduced heat while the camera pipeline was idle.` → Scaling giảm nhiệt khi pipeline camera rảnh.
**Liên kết tiếng Hàn:** `동적 주파수 스케일링`.

## 5. retention mode /rɪˈtenʃən moʊd/
**Part of speech:** noun
**Core meaning (English):** a low-power state that preserves selected memory contents while most circuitry is turned off.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mode ít điện giữ một phần memory trong khi phần lớn mạch tắt.
**Grammar & collocations:** `retention-mode register` — register; `preserve context across sleep` — giữ.
**Examples:** `Retention mode preserved the wake-up context without powering the main core.` → Mode retention giữ context wake mà không cấp core chính.
**Liên kết tiếng Hàn:** `보존 모드`.

## 6. load transient /ˈloʊd ˈtrænziənt/
**Part of speech:** noun
**Core meaning (English):** a short-lived change in electrical load that causes a supply voltage or current response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi tải ngắn hạn gây response voltage/current nguồn.
**Grammar & collocations:** `load-transient response` — response; `step the current demand` — đổi bậc.
**Examples:** `The regulator recovered from the load transient when the radio began transmitting.` → Regulator hồi phục sau transient khi radio phát.
**Liên kết tiếng Hàn:** `부하 과도 현상`.

## 7. current limit /ˈkɜːrənt ˈlɪmət/
**Part of speech:** noun
**Core meaning (English):** a control or threshold that prevents a circuit from delivering more than a specified current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control/ngưỡng ngăn mạch cấp quá dòng quy định.
**Grammar & collocations:** `current-limit threshold` — ngưỡng; `fold back the output` — giảm.
**Examples:** `The current limit protected the USB rail when a peripheral shorted.` → Limit bảo vệ rail USB khi peripheral chập.
**Liên kết tiếng Hàn:** `전류 제한`.

## 8. power-on reset /ˈpaʊər ɑːn rɪˈset/
**Part of speech:** noun
**Core meaning (English):** a reset generated during power-up so logic starts only after the supply becomes valid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reset lúc bật nguồn để logic chỉ chạy sau khi supply hợp lệ.
**Grammar & collocations:** `power-on-reset circuit` — mạch; `release reset cleanly` — nhả.
**Examples:** `Power-on reset held the processor until the reference voltage stabilized.` → POR giữ processor đến khi voltage ổn.
**Liên kết tiếng Hàn:** `전원 켜짐 리셋`.

## 9. reset supervisor /rɪˈset ˈsuːpərˌvaɪzər/
**Part of speech:** noun
**Core meaning (English):** a component that monitors supply conditions and controls reset timing for a processor or subsystem.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component theo dõi nguồn và điều khiển timing reset cho processor/subsystem.
**Grammar & collocations:** `reset-supervisor output` — output; `monitor a rail` — giám sát.
**Examples:** `The reset supervisor delayed startup until both rails crossed their thresholds.` → Supervisor trì hoãn boot đến khi hai rail vượt ngưỡng.
**Liên kết tiếng Hàn:** `리셋 감시기`.

## 10. brownout threshold /ˈbraʊnˌaʊt ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** the voltage level below which a device treats its supply as too weak for reliable operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức voltage dưới đó device coi nguồn quá yếu để chạy tin cậy.
**Grammar & collocations:** `brownout-threshold hysteresis` — hysteresis; `cross the falling limit` — vượt.
**Examples:** `The firmware logged the brownout threshold crossing before restarting peripherals.` → Firmware log lúc qua ngưỡng brownout trước restart peripheral.
**Liên kết tiếng Hàn:** `브라운아웃 임계값`.

## 11. thermal sensor /ˈθɜːrməl ˈsensər/
**Part of speech:** noun
**Core meaning (English):** a device that measures temperature for monitoring, control, or protection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết bị đo nhiệt để giám sát, điều khiển hoặc bảo vệ.
**Grammar & collocations:** `thermal-sensor reading` — reading; `sample the die temperature` — lấy mẫu.
**Examples:** `The thermal sensor triggered a fan step before the processor reached the trip point.` → Sensor nhiệt bật nấc quạt trước khi processor tới trip.
**Liên kết tiếng Hàn:** `온도 센서`.

## 12. temperature hysteresis /ˈtemprətʃər ˌhɪstəˈriːsɪs/
**Part of speech:** noun
**Core meaning (English):** a deliberate gap between rising and falling temperature thresholds that prevents rapid toggling.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách có chủ ý giữa ngưỡng tăng/giảm để tránh bật tắt liên tục.
**Grammar & collocations:** `temperature-hysteresis band` — dải; `avoid control chatter` — tránh rung.
**Examples:** `Temperature hysteresis stopped the fan from switching every second near the target.` → Hysteresis ngăn quạt bật tắt mỗi giây gần target.
**Liên kết tiếng Hàn:** `온도 히스테리시스`.

## 13. overtemperature shutdown /ˌoʊvərˈtemprətʃər ˈʃʌtˌdaʊn/
**Part of speech:** noun
**Core meaning (English):** an automatic power reduction or turn-off when temperature exceeds a safe limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tự động giảm/tắt nguồn khi nhiệt vượt giới hạn an toàn.
**Grammar & collocations:** `overtemperature-shutdown threshold` — ngưỡng; `protect the power stage` — bảo vệ.
**Examples:** `Overtemperature shutdown disconnected the heater after airflow was blocked.` → Shutdown ngắt heater khi airflow bị chặn.
**Liên kết tiếng Hàn:** `과열 차단`.

## 14. power island /ˈpaʊər ˈaɪlənd/
**Part of speech:** noun
**Core meaning (English):** a separately controlled region of a chip or board that can be powered independently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng chip/board điều khiển nguồn riêng, có thể bật tắt độc lập.
**Grammar & collocations:** `power-island controller` — controller; `isolate a peripheral domain` — cô lập.
**Examples:** `The radio power island shut down while the sensor island remained active.` → Island radio tắt còn island sensor vẫn chạy.
**Liên kết tiếng Hàn:** `전원 아일랜드`.

## 15. rail sequencing /ˈreɪl ˈsiːkwənsɪŋ/
**Part of speech:** noun
**Core meaning (English):** controlling the order and timing in which multiple supply rails rise, fall, or become enabled.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều khiển thứ tự và timing nhiều rail nguồn tăng/giảm/bật.
**Grammar & collocations:** `rail-sequencing state machine` — state machine; `enable a core rail` — bật.
**Examples:** `Rail sequencing enabled memory only after the I/O voltage was valid.` → Sequencing bật memory sau khi voltage I/O hợp lệ.
**Liên kết tiếng Hàn:** `전원 레일 시퀀싱`.

## 16. energy harvesting /ˈenərdʒi ˈhɑːrvəstɪŋ/
**Part of speech:** noun
**Core meaning (English):** collecting small amounts of usable energy from ambient sources such as light, motion, or heat.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thu lượng năng lượng nhỏ từ ánh sáng, chuyển động hoặc nhiệt môi trường.
**Grammar & collocations:** `energy-harvesting circuit` — mạch; `harvest indoor light` — thu.
**Examples:** `Energy harvesting kept the beacon alive when replacing its battery was impractical.` → Harvesting giữ beacon chạy khi khó thay pin.
**Liên kết tiếng Hàn:** `에너지 하베스팅`.

## 17. battery fuel gauge /ˈbætəri ˈfjuːl ɡeɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a circuit or algorithm that estimates a battery's remaining charge and health.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch/thuật toán ước tính charge còn lại và health của pin.
**Grammar & collocations:** `battery-fuel-gauge reading` — reading; `track coulomb flow` — theo dõi.
**Examples:** `The battery fuel gauge warned the user before the radio burst became unsafe.` → Fuel gauge cảnh báo trước burst radio không an toàn.
**Liên kết tiếng Hàn:** `배터리 연료 게이지`.

## 18. charge controller /ˈtʃɑːrdʒ kənˈtroʊlər/
**Part of speech:** noun
**Core meaning (English):** a circuit that manages how a battery is charged and protects it from unsafe voltage or current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch quản lý sạc và bảo vệ pin khỏi voltage/current nguy hiểm.
**Grammar & collocations:** `charge-controller profile` — profile; `terminate a charge cycle` — kết thúc.
**Examples:** `The charge controller reduced current as the cell approached its voltage limit.` → Controller giảm dòng khi cell gần giới hạn voltage.
**Liên kết tiếng Hàn:** `충전 컨트롤러`.

## 19. state-of-charge estimate /ˌsteɪt əv ˈtʃɑːrdʒ ˈestəmət/
**Part of speech:** noun
**Core meaning (English):** an estimate of how much usable energy remains in a battery, usually expressed as a percentage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính phần năng lượng dùng được còn lại trong pin, thường tính phần trăm.
**Grammar & collocations:** `state-of-charge-estimate error` — sai số; `update from voltage and current` — cập nhật.
**Examples:** `The state-of-charge estimate fell sharply after the cold-start current spike.` → Estimate giảm mạnh sau spike dòng lúc khởi động lạnh.
**Liên kết tiếng Hàn:** `충전 상태 추정치`.

## 20. battery protection circuit /ˈbætəri prəˈtekʃən ˈsɜːrkɪt/
**Part of speech:** noun
**Core meaning (English):** circuitry that disconnects a battery during overcharge, overdischarge, overcurrent, or short circuit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch ngắt pin khi sạc quá, xả quá, quá dòng hoặc chập.
**Grammar & collocations:** `battery-protection-circuit cutoff` — ngắt; `isolate a damaged cell` — cô lập.
**Examples:** `The battery protection circuit opened the pack after detecting a short.` → Mạch bảo vệ mở pack sau khi phát hiện chập.
**Liên kết tiếng Hàn:** `배터리 보호 회로`.

## Review in context

A sealed product begins with a **thermal budget**, a **derating curve**, and a **fan curve**; **dynamic frequency scaling** and **retention mode** trade performance for heat and battery life. A **load transient** is limited by a **current limit**, while **power-on reset**, a **reset supervisor**, and a **brownout threshold** keep startup valid. A **thermal sensor**, **temperature hysteresis**, and **overtemperature shutdown** protect the enclosure. Independent **power islands** require careful **rail sequencing**. A remote beacon may add **energy harvesting**, a **battery fuel gauge**, and a **charge controller**; its **state-of-charge estimate** works with a **battery protection circuit** to avoid unsafe operation.

**Bản dịch tiếng Việt:** Sản phẩm vỏ kín bắt đầu với **thermal budget**, **derating curve** và **fan curve**; **dynamic frequency scaling** và **retention mode** đánh đổi hiệu năng lấy nhiệt và pin. **Load transient** được giới hạn bằng **current limit**, còn **power-on reset**, **reset supervisor** và **brownout threshold** giữ startup hợp lệ. **Thermal sensor**, **temperature hysteresis** và **overtemperature shutdown** bảo vệ vỏ. Các **power island** độc lập cần **rail sequencing** cẩn thận. Beacon xa có thể thêm **energy harvesting**, **battery fuel gauge** và **charge controller**; **state-of-charge estimate** phối hợp với **battery protection circuit** để tránh vận hành nguy hiểm.
