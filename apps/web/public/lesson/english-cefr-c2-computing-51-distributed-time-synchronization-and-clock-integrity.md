# C2 Vocabulary — Distributed time synchronization and clock integrity

This lesson follows a distributed clock from oscillator behavior through precision synchronization, uncertainty reporting, and fault containment.

Flow: **clock synchronization → clock offset → clock skew → frequency drift → time uncertainty → grandmaster election → boundary clock → transparent clock → hardware timestamping → precision time protocol → holdover oscillator → time servo → path delay asymmetry → leap-second handling → monotonic clock source → causal timestamp → hybrid logical clock → temporal consistency → deadline clock → time-distribution fault**.

## 1. clock synchronization /klɑk ˌsɪŋkrənəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** aligning clocks in separate devices so that their reported times remain within a defined error bound.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** căn chỉnh đồng hồ ở nhiều máy về cùng mốc.
**Grammar & collocations:** `clock-synchronization service` — service; `synchronize distributed clocks` — đồng bộ.
**Examples:** `Clock synchronization kept transaction timestamps comparable across the two regions.` → Đồng bộ clock giữ timestamp giao dịch so sánh được giữa hai vùng.
**Liên kết tiếng Hàn:** `시계 동기화`.

## 2. clock offset /klɑk ˈɔfˌsɛt/
**Part of speech:** noun
**Core meaning (English):** the instantaneous difference between a local clock's reading and a reference clock's reading.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch tức thời giữa clock cục bộ và clock tham chiếu.
**Grammar & collocations:** `clock-offset estimate` — estimate; `bound the offset` — giới hạn.
**Examples:** `The monitor rejected a node when its clock offset exceeded the signing policy.` → Monitor loại node khi offset vượt policy ký.
**Liên kết tiếng Hàn:** `시계 오프셋`.

## 3. clock skew /klɑk skjuː/
**Part of speech:** noun
**Core meaning (English):** the difference in elapsed-time rates between two clocks, causing their offset to change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ chạy khác nhau làm offset đổi dần.
**Grammar & collocations:** `clock-skew estimate` — estimate; `compensate for oscillator mismatch` — bù.
**Examples:** `Clock skew accumulated during the long network partition even though the initial offset was small.` → Skew tích lũy trong partition dài dù offset ban đầu nhỏ.
**Liên kết tiếng Hàn:** `시계 스큐`.

## 4. frequency drift /ˈfriːkwənsi drɪft/
**Part of speech:** noun
**Core meaning (English):** slow variation in an oscillator's frequency caused by temperature, aging, supply, or other conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tần số oscillator trôi theo nhiệt, tuổi và nguồn.
**Grammar & collocations:** `frequency-drift compensation` — compensation; `characterize an oscillator` — đặc trưng.
**Examples:** `Frequency drift widened the synchronization interval after the cabinet warmed.` → Drift tần số làm rộng interval đồng bộ khi tủ nóng.
**Liên kết tiếng Hàn:** `주파수 드리프트`.

## 5. time uncertainty /taɪm ʌnˈsɝtənti/
**Part of speech:** noun
**Core meaning (English):** an explicit estimate of how far a reported time may deviate from the true or reference time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ bất định đi kèm với mỗi giá trị thời gian.
**Grammar & collocations:** `time-uncertainty budget` — budget; `report an error bound` — báo.
**Examples:** `The API exposed time uncertainty so clients could decide whether an ordering claim was safe.` → API công bố uncertainty để client biết ordering có an toàn không.
**Liên kết tiếng Hàn:** `시간 불확실성`.

## 6. grandmaster election /ˈɡrændˌmæstər ɪˈlɛkʃən/
**Part of speech:** noun
**Core meaning (English):** selecting the best available reference clock to distribute time across a network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn clock chuẩn tốt nhất trong mạng.
**Grammar & collocations:** `grandmaster-election algorithm` — algorithm; `rank candidate clocks` — xếp hạng.
**Examples:** `Grandmaster election moved authority to the backup receiver when the primary lost its antenna.` → Election chuyển quyền sang receiver dự phòng.
**Liên kết tiếng Hàn:** `그랜드마스터 선출`.

## 7. boundary clock /ˈbaʊndəri klɑk/
**Part of speech:** noun
**Core meaning (English):** a network clock that synchronizes to an upstream source and separately serves downstream devices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** clock nhận thời gian upstream rồi phân phối downstream.
**Grammar & collocations:** `boundary-clock port` — port; `relay synchronized time` — chuyển tiếp.
**Examples:** `The boundary clock isolated the factory segment from jitter on the wider network.` → Boundary clock cô lập segment nhà máy khỏi jitter mạng ngoài.
**Liên kết tiếng Hàn:** `경계 시계`.

## 8. transparent clock /trænsˈpɛrənt klɑk/
**Part of speech:** noun
**Core meaning (English):** a forwarding device that measures residence time and corrects a synchronization message as it crosses the device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** switch đo thời gian giữ packet rồi bù vào message.
**Grammar & collocations:** `transparent-clock correction` — correction; `account for switch residence time` — tính.
**Examples:** `A transparent clock removed the switch queue delay from the downstream offset estimate.` → Transparent clock loại delay queue switch khỏi estimate offset.
**Liên kết tiếng Hàn:** `투명 시계`.

## 9. hardware timestamping /ˈhɑrdˌwɛr ˈtaɪmˌstæmpɪŋ/
**Part of speech:** noun
**Core meaning (English):** recording packet arrival or departure time in hardware close to the physical interface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi timestamp ngay phần cứng interface để giảm jitter phần mềm.
**Grammar & collocations:** `hardware-timestamping unit` — unit; `capture a wire-time event` — ghi.
**Examples:** `Hardware timestamping improved the delay estimate when the host was CPU-saturated.` → Timestamp phần cứng cải thiện estimate khi host đầy CPU.
**Liên kết tiếng Hàn:** `하드웨어 타임스탬핑`.

## 10. precision time protocol /prɪˈsɪʒən taɪm ˈprɑtəˌkɑl/
**Part of speech:** noun
**Core meaning (English):** a packet protocol for distributing highly accurate time across an engineered network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** protocol phân phối thời gian chính xác qua mạng.
**Grammar & collocations:** `precision-time-protocol profile` — profile; `discipline a slave clock` — điều khiển.
**Examples:** `The precision time protocol profile matched the telecom switch's required accuracy.` → Profile PTP khớp độ chính xác switch viễn thông.
**Liên kết tiếng Hàn:** `정밀 시간 프로토콜`.

## 11. holdover oscillator /ˈhoʊldˌoʊvər ˈɑsəˌleɪtər/
**Part of speech:** noun
**Core meaning (English):** an oscillator that maintains an estimate of reference time while external synchronization is temporarily unavailable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** oscillator giữ nhịp khi mất nguồn tham chiếu.
**Grammar & collocations:** `holdover-oscillator performance` — performance; `ride through an outage` — vượt qua.
**Examples:** `The holdover oscillator preserved ordering during the satellite receiver outage.` → Oscillator holdover giữ ordering khi receiver vệ tinh mất.
**Liên kết tiếng Hàn:** `홀드오버 발진기`.

## 12. time servo /taɪm ˈsɝvoʊ/
**Part of speech:** noun
**Core meaning (English):** a control loop that adjusts a local clock toward a reference while limiting abrupt time changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vòng điều khiển kéo clock cục bộ về reference một cách êm.
**Grammar & collocations:** `time-servo loop` — loop; `slew a clock gradually` — điều chỉnh dần.
**Examples:** `The time servo slewed the clock instead of stepping backward and confusing the scheduler.` → Servo chỉnh dần thay vì lùi clock làm scheduler rối.
**Liên kết tiếng Hàn:** `시간 서보`.

## 13. path delay asymmetry /pæθ dɪˈleɪ eɪˈsɪmətri/
**Part of speech:** noun
**Core meaning (English):** unequal forward and reverse transmission delays that bias a round-trip synchronization estimate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường đi và về có delay khác nhau làm estimate lệch.
**Grammar & collocations:** `path-delay-asymmetry correction` — correction; `calibrate a fiber pair` — hiệu chuẩn.
**Examples:** `Path delay asymmetry biased the time transfer after one fiber was rerouted through a longer patch panel.` → Asymmetry làm lệch truyền thời gian sau khi reroute fiber.
**Liên kết tiếng Hàn:** `경로 지연 비대칭`.

## 14. leap-second handling /liːp ˈsɛkənd ˈhændlɪŋ/
**Part of speech:** noun
**Core meaning (English):** rules for representing and applying an occasional adjustment between civil time and Earth's irregular rotation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy tắc xử lý giây nhuận trong hệ thống thời gian dân sự.
**Grammar & collocations:** `leap-second-handling policy` — policy; `smear an adjustment` — trải.
**Examples:** `Leap-second handling kept log ordering stable by applying the adjustment gradually.` → Xử lý leap second giữ log order ổn định bằng cách trải dần.
**Liên kết tiếng Hàn:** `윤초 처리`.

## 15. monotonic clock source /ˌmɑnəˈtɑnɪk klɑk sɔrs/
**Part of speech:** noun
**Core meaning (English):** a clock source that never moves backward, even when civil time is corrected.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** clock chỉ tiến về trước, không lùi khi chỉnh giờ.
**Grammar & collocations:** `monotonic-clock-source API` — API; `measure elapsed duration` — đo.
**Examples:** `The retry timer used a monotonic clock source rather than wall-clock time.` → Timer retry dùng clock đơn điệu thay vì giờ dân sự.
**Liên kết tiếng Hàn:** `단조 시계 소스`.

## 16. causal timestamp /ˈkɔzəl ˈtaɪmˌstæmp/
**Part of speech:** noun
**Core meaning (English):** a timestamp that represents event-dependency order rather than an exact physical time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timestamp biểu diễn quan hệ trước–sau nhân quả.
**Grammar & collocations:** `causal-timestamp metadata` — metadata; `preserve happens-before order` — giữ.
**Examples:** `A causal timestamp showed that the replica read followed the write despite uncertain wall time.` → Timestamp nhân quả cho thấy read sau write dù wall time bất định.
**Liên kết tiếng Hàn:** `인과 타임스탬프`.

## 17. hybrid logical clock /ˈhaɪbrɪd ˈlɑdʒɪkəl klɑk/
**Part of speech:** noun
**Core meaning (English):** a logical clock that combines physical-time estimates with a counter to preserve causality under clock uncertainty.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết hợp physical time và counter để giữ causality.
**Grammar & collocations:** `hybrid-logical-clock value` — value; `advance a logical counter` — tăng.
**Examples:** `The hybrid logical clock ordered concurrent updates without requiring perfect synchronization.` → HLC sắp xếp update đồng thời mà không cần đồng bộ hoàn hảo.
**Liên kết tiếng Hàn:** `하이브리드 논리 시계`.

## 18. temporal consistency /ˈtɛmpərəl kənˈsɪstənsi/
**Part of speech:** noun
**Core meaning (English):** agreement between the time relationships reported by different components or observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ thời gian giữa các component không mâu thuẫn.
**Grammar & collocations:** `temporal-consistency check` — check; `validate event order` — xác nhận.
**Examples:** `Temporal consistency failed when a cache invalidation appeared after the response it had caused.` → Consistency thời gian fail khi invalidation xuất hiện sau response do nó gây ra.
**Liên kết tiếng Hàn:** `시간적 일관성`.

## 19. deadline clock /ˈdɛdlaɪn klɑk/
**Part of speech:** noun
**Core meaning (English):** a clock used to determine whether a task or message has reached an execution or delivery deadline.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** clock dùng để kiểm tra deadline.
**Grammar & collocations:** `deadline-clock policy` — policy; `expire a request` — hết hạn.
**Examples:** `The deadline clock was monotonic so a wall-time correction could not extend a lease.` → Clock deadline đơn điệu nên chỉnh giờ không kéo dài lease.
**Liên kết tiếng Hàn:** `데드라인 시계`.

## 20. time-distribution fault /taɪm ˌdɪstrəˈbjuːʃən fɔlt/
**Part of speech:** noun
**Core meaning (English):** a failure in the source, network, or control loop that causes distributed clocks to lose their required accuracy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi trong nguồn, mạng hoặc loop phân phối thời gian.
**Grammar & collocations:** `time-distribution-fault alarm` — alarm; `isolate a faulty segment` — cô lập.
**Examples:** `The controller isolated the rack after a time-distribution fault pushed offsets beyond the safety bound.` → Controller cô lập rack khi fault làm offset vượt bound.
**Liên kết tiếng Hàn:** `시간 분배 장애`.

## Review in context

**Clock synchronization** controls **clock offset**, **clock skew**, and **frequency drift**, while **time uncertainty** states the remaining error. **Grandmaster election** selects a source; a **boundary clock** or **transparent clock** distributes it with **hardware timestamping** under a **precision time protocol**. A **holdover oscillator** and **time servo** bridge outages, but **path delay asymmetry** and **leap-second handling** still require care. Applications use a **monotonic clock source**, **causal timestamp**, or **hybrid logical clock** to preserve **temporal consistency**. A **deadline clock** and **time-distribution fault** policy turn those bounds into operational decisions.

**Bản dịch tiếng Việt:** **Clock synchronization** kiểm soát **clock offset**, **clock skew** và **frequency drift**, còn **time uncertainty** nêu sai số còn lại. **Grandmaster election** chọn nguồn; **boundary clock** hoặc **transparent clock** phân phối nguồn đó với **hardware timestamping** theo **precision time protocol**. **Holdover oscillator** và **time servo** nối qua lúc mất nguồn, nhưng **path delay asymmetry** và **leap-second handling** vẫn cần cẩn thận. Ứng dụng dùng **monotonic clock source**, **causal timestamp** hoặc **hybrid logical clock** để giữ **temporal consistency**. **Deadline clock** và policy **time-distribution fault** biến các bound thành quyết định vận hành.
