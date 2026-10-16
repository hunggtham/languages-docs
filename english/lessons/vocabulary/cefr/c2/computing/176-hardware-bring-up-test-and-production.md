# C2 Vocabulary — Hardware bring-up, validation, and production diagnostics

This lesson follows a board from first power-on through instrumented testing, calibration, manufacturing, and field diagnosis.

Flow: **hardware-in-the-loop → test fixture → manufacturing test → production calibration → factory reset → golden image → reference design → silicon revision → errata sheet → bring-up checklist → oscilloscope probe → logic analyzer → trace buffer → clock drift → power budget → electromagnetic compatibility → load switch → voltage supervisor → watchdog window → reset cause**.

## 1. hardware-in-the-loop /ˈhɑːrdwer ɪn ðə luːp/
**Part of speech:** noun
**Core meaning (English):** testing in which real hardware interacts with a simulated plant or controlled external environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test trong đó hardware thật tương tác với plant mô phỏng hoặc môi trường kiểm soát.
**Grammar & collocations:** `hardware-in-the-loop bench` — bàn test; `close the control loop` — khép.
**Examples:** `Hardware-in-the-loop exposed a timing error before the motor controller reached the road test.` → HIL lộ lỗi timing trước khi controller motor ra test đường.
**Liên kết tiếng Hàn:** `하드웨어 인 더 루프`.

## 2. test fixture /ˈtest ˌfɪkstʃər/
**Part of speech:** noun
**Core meaning (English):** a reusable holder and interface that positions a product and connects it to test equipment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ gá và interface tái sử dụng để giữ product và nối thiết bị test.
**Grammar & collocations:** `test-fixture connector` — connector; `seat a board` — đặt board.
**Examples:** `The test fixture contacted every programming pad without soldering a cable to the board.` → Fixture chạm mọi pad lập trình mà không cần hàn cáp.
**Liên kết tiếng Hàn:** `테스트 픽스처`.

## 3. manufacturing test /ˌmænjəˈfæktʃərɪŋ test/
**Part of speech:** noun
**Core meaning (English):** a production-stage procedure that checks whether each assembled unit meets functional and safety requirements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy trình ở dây chuyền kiểm tra từng unit đạt yêu cầu function và safety.
**Grammar & collocations:** `manufacturing-test station` — trạm; `screen a production defect` — sàng lọc.
**Examples:** `The manufacturing test caught an open solder joint on the power connector.` → Test sản xuất bắt lỗi hở mối hàn connector nguồn.
**Liên kết tiếng Hàn:** `생산 테스트`.

## 4. production calibration /prəˈdʌkʃən ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** adjusting a newly built device against a known reference so its measurements meet specification.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều chỉnh device mới theo reference chuẩn để measurement đạt spec.
**Grammar & collocations:** `production-calibration record` — bản ghi; `trim a sensor offset` — chỉnh.
**Examples:** `Production calibration stored a temperature offset unique to each probe.` → Calibration sản xuất lưu offset nhiệt riêng cho từng probe.
**Liên kết tiếng Hàn:** `생산 보정`.

## 5. factory reset /ˈfæktəri rɪˈset/
**Part of speech:** noun
**Core meaning (English):** restoring a product's settings and local state to its controlled out-of-box condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khôi phục setting và state local về điều kiện xuất xưởng.
**Grammar & collocations:** `factory-reset procedure` — quy trình; `clear user configuration` — xóa.
**Examples:** `Support requested a factory reset after exporting the customer's diagnostic log.` → Support yêu cầu reset sau khi export log.
**Liên kết tiếng Hàn:** `공장 초기화`.

## 6. golden image /ˈɡoʊldən ˈɪmɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a known-good software or configuration image used as a trusted comparison or recovery baseline.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** image software/config đã biết tốt, dùng làm baseline so sánh hoặc phục hồi.
**Grammar & collocations:** `golden-image checksum` — checksum; `restore a reference build` — phục hồi.
**Examples:** `The line restored the golden image before rerunning a failed functional test.` → Dây chuyền restore image chuẩn trước chạy lại test fail.
**Liên kết tiếng Hàn:** `골든 이미지`.

## 7. reference design /ˈrefərəns dɪˈzaɪn/
**Part of speech:** noun
**Core meaning (English):** a documented hardware or software design intended to demonstrate a proven implementation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết kế hardware/software có tài liệu, dùng minh họa implementation đã chứng minh.
**Grammar & collocations:** `reference-design schematic` — sơ đồ; `adapt a vendor design` — điều chỉnh.
**Examples:** `The team adapted the reference design but reran every power and radio qualification test.` → Team chỉnh design mẫu nhưng chạy lại test nguồn và radio.
**Liên kết tiếng Hàn:** `레퍼런스 디자인`.

## 8. silicon revision /ˈsɪlɪkən rɪˈvɪʒən/
**Part of speech:** noun
**Core meaning (English):** a numbered hardware version of a chip that reflects a manufacturing change or corrected defect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** version hardware của chip, phản ánh thay đổi sản xuất hoặc sửa lỗi.
**Grammar & collocations:** `silicon-revision check` — kiểm tra; `qualify a new stepping` — chứng nhận.
**Examples:** `The driver enabled the workaround only for the affected silicon revision.` → Driver chỉ bật workaround cho revision bị ảnh hưởng.
**Liên kết tiếng Hàn:** `실리콘 리비전`.

## 9. errata sheet /ɪˈrɑːtə ʃiːt/
**Part of speech:** noun
**Core meaning (English):** a manufacturer's list of known hardware defects, limits, and recommended workarounds.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** danh sách lỗi, giới hạn và workaround đã biết do nhà sản xuất công bố.
**Grammar & collocations:** `errata-sheet entry` — mục; `apply a documented workaround` — áp dụng.
**Examples:** `The errata sheet warned that the timer could miss an edge in one low-power mode.` → Errata cảnh báo timer có thể lỡ edge trong một mode tiết kiệm.
**Liên kết tiếng Hàn:** `정오표`.

## 10. bring-up checklist /ˈbrɪŋ ʌp ˈtʃeklɪst/
**Part of speech:** noun
**Core meaning (English):** an ordered list of checks used to make a new board operate safely for the first time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** danh sách kiểm tra tuần tự để board mới chạy an toàn lần đầu.
**Grammar & collocations:** `bring-up-checklist item` — mục; `verify a rail before boot` — xác minh.
**Examples:** `The bring-up checklist required measuring current before installing the processor.` → Checklist yêu cầu đo dòng trước lắp processor.
**Liên kết tiếng Hàn:** `초기 구동 체크리스트`.

## 11. oscilloscope probe /əˈsɪləˌskoʊp proʊb/
**Part of speech:** noun
**Core meaning (English):** a measurement tip and cable that transfers a circuit signal to an oscilloscope with controlled loading.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đầu đo và cáp đưa signal mạch tới oscilloscope với loading được kiểm soát.
**Grammar & collocations:** `oscilloscope-probe ground` — mass; `probe a clock node` — đo.
**Examples:** `The engineer shortened the oscilloscope probe ground to avoid adding ringing.` → Kỹ sư rút ngắn mass probe để tránh tạo ringing.
**Liên kết tiếng Hàn:** `오실로스코프 프로브`.

## 12. logic analyzer /ˈlɑːdʒɪk ˈænəˌlaɪzər/
**Part of speech:** noun
**Core meaning (English):** an instrument that samples digital signals and displays their timing and decoded protocol activity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết bị lấy mẫu tín hiệu số, hiển thị timing và protocol đã decode.
**Grammar & collocations:** `logic-analyzer capture` — lần ghi; `decode a serial transaction` — giải mã.
**Examples:** `The logic analyzer showed that the peripheral released chip select too early.` → Analyzer cho thấy peripheral nhả chip select quá sớm.
**Liên kết tiếng Hàn:** `로직 애널라이저`.

## 13. trace buffer /ˈtreɪs ˌbʌfər/
**Part of speech:** noun
**Core meaning (English):** reserved memory that stores a recent sequence of execution or event records for later inspection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng memory lưu chuỗi execution/event gần đây để xem lại.
**Grammar & collocations:** `trace-buffer depth` — độ sâu; `dump the last events` — xuất.
**Examples:** `The trace buffer preserved the commands immediately before the controller faulted.` → Buffer giữ command ngay trước khi controller lỗi.
**Liên kết tiếng Hàn:** `트레이스 버퍼`.

## 14. clock drift /ˈklɑːk drɪft/
**Part of speech:** noun
**Core meaning (English):** gradual change in a clock's frequency or time reference relative to an intended value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi từ từ của tần số/clock time so với giá trị mong muốn.
**Grammar & collocations:** `clock-drift estimate` — ước tính; `compensate for temperature` — bù.
**Examples:** `Clock drift accumulated enough error to desynchronize the two data loggers.` → Drift tích lũy đủ lỗi để làm lệch hai logger.
**Liên kết tiếng Hàn:** `클록 드리프트`.

## 15. power budget /ˈpaʊər ˌbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the planned maximum energy or electrical load available to a system and its components.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức năng lượng hoặc tải điện tối đa được phân bổ cho hệ thống/component.
**Grammar & collocations:** `power-budget margin` — biên; `allocate peak current` — phân bổ.
**Examples:** `The radio burst exceeded the power budget when the heater was still active.` → Burst radio vượt budget khi heater còn bật.
**Liên kết tiếng Hàn:** `전력 예산`.

## 16. electromagnetic compatibility /ɪˌlektroʊmæɡˈnetɪk kəmˌpætəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability of equipment to operate correctly without causing or suffering unacceptable electromagnetic interference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng thiết bị hoạt động đúng mà không gây/chịu nhiễu điện từ không chấp nhận được.
**Grammar & collocations:** `electromagnetic-compatibility test` — test; `limit radiated emissions` — giới hạn.
**Examples:** `The enclosure redesign improved electromagnetic compatibility near the motor cable.` → Thiết kế vỏ mới cải thiện EMC gần cáp motor.
**Liên kết tiếng Hàn:** `전자기 적합성`.

## 17. load switch /ˈloʊd swɪtʃ/
**Part of speech:** noun
**Core meaning (English):** an electronically controlled switch that connects or disconnects power to a load.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công tắc điện tử nối/ngắt nguồn cho tải.
**Grammar & collocations:** `load-switch enable` — tín hiệu bật; `isolate a peripheral rail` — cô lập.
**Examples:** `The load switch disconnected the modem during deep sleep.` → Load switch ngắt modem khi ngủ sâu.
**Liên kết tiếng Hàn:** `로드 스위치`.

## 18. voltage supervisor /ˈvoʊltɪdʒ ˈsuːpərˌvaɪzər/
**Part of speech:** noun
**Core meaning (English):** a circuit that monitors a supply rail and asserts reset or warning when voltage leaves its safe range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch giám sát rail nguồn, reset/cảnh báo khi voltage ra khỏi range an toàn.
**Grammar & collocations:** `voltage-supervisor threshold` — ngưỡng; `assert a reset` — kích hoạt.
**Examples:** `The voltage supervisor held reset until the rail crossed its rising threshold.` → Supervisor giữ reset đến khi rail vượt ngưỡng tăng.
**Liên kết tiếng Hàn:** `전압 감시기`.

## 19. watchdog window /ˈwɑːtʃdɔːɡ ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** an allowed time interval in which software must service a watchdog, rejecting both late and prematurely repeated service.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian phải service watchdog; quá sớm hoặc quá muộn đều bị từ chối.
**Grammar & collocations:** `watchdog-window violation` — vi phạm; `service within bounds` — service đúng.
**Examples:** `The watchdog window detected a loop that was running suspiciously fast.` → Window bắt loop chạy nhanh bất thường.
**Liên kết tiếng Hàn:** `워치독 윈도우`.

## 20. reset cause /rɪˈset kɔːz/
**Part of speech:** noun
**Core meaning (English):** the recorded reason why a processor or device restarted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lý do được ghi lại khiến processor/device khởi động lại.
**Grammar & collocations:** `reset-cause register` — register; `classify a restart` — phân loại.
**Examples:** `The diagnostic log distinguished a brownout from a software-triggered reset cause.` → Log phân biệt brownout với reset do software.
**Liên kết tiếng Hàn:** `리셋 원인`.

## Review in context

An engineer starts board work with a **bring-up checklist**, a **reference design**, and a **power budget**. A **voltage supervisor** and **load switch** make the first power sequence safe; a **watchdog window** and recorded **reset cause** expose bad startup loops. A **test fixture** supports **manufacturing test** and **production calibration**, while a **golden image** supplies a recovery baseline. **hardware-in-the-loop** checks the controller against a simulated plant. During diagnosis, an **oscilloscope probe**, **logic analyzer**, and **trace buffer** reveal timing, protocol, and event history. The team checks **clock drift**, **electromagnetic compatibility**, the current **silicon revision**, and each relevant **errata sheet** before shipping a corrected build. A **factory reset** returns a field unit to a controlled state.

**Bản dịch tiếng Việt:** Kỹ sư bắt đầu công việc trên board bằng **bring-up checklist**, **reference design** và **power budget**. **Voltage supervisor** và **load switch** làm chuỗi cấp nguồn đầu tiên an toàn; **watchdog window** và **reset cause** được ghi lại giúp phát hiện loop khởi động lỗi. **Test fixture** hỗ trợ **manufacturing test** và **production calibration**, còn **golden image** cung cấp baseline phục hồi. **hardware-in-the-loop** kiểm tra controller với plant mô phỏng. Khi chẩn đoán, **oscilloscope probe**, **logic analyzer** và **trace buffer** cho thấy timing, protocol và lịch sử event. Team kiểm tra **clock drift**, **electromagnetic compatibility**, **silicon revision** và **errata sheet** liên quan trước khi giao hàng. **Factory reset** đưa thiết bị ngoài hiện trường về state có kiểm soát.
