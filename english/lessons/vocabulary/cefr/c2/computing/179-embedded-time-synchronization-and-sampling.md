# C2 Vocabulary — Embedded time synchronization and sampling

This lesson follows precise time from a device's local oscillator through network alignment, sensor capture, and signal resampling.

Flow: **timebase → timestamp rollover → leap second → network time protocol → synchronization error → phase offset → frequency offset → sample clock → time alignment → dead reckoning → trigger alignment → time-to-digital converter → pulse-per-second signal → time synchronization domain → clock recovery → resampling filter → alias rejection → sensor timestamp → holdover mode → time interval error**.

## 1. timebase /ˈtaɪmbeɪs/
**Part of speech:** noun
**Core meaning (English):** a reference clock or time scale against which events and measurements are expressed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** clock hoặc thang thời gian chuẩn để biểu diễn event và measurement.
**Grammar & collocations:** `timebase frequency` — tần số; `share a common reference` — dùng chung.
**Examples:** `Every sensor task used the same timebase so their readings could be compared.` → Mọi task sensor dùng chung timebase để so sánh reading.
**Liên kết tiếng Hàn:** `시간 기준`.

## 2. timestamp rollover /ˈtaɪmstæmp ˈroʊlˌoʊvər/
**Part of speech:** noun
**Core meaning (English):** the wraparound that occurs when a finite timestamp counter reaches its maximum value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiện tượng counter timestamp hữu hạn quay về đầu sau khi đạt max.
**Grammar & collocations:** `timestamp-rollover check` — kiểm tra; `compare modular times` — so sánh.
**Examples:** `The scheduler handled timestamp rollover without mistaking a new event for an old one.` → Scheduler xử lý rollover mà không nhầm event mới là cũ.
**Liên kết tiếng Hàn:** `타임스탬프 롤오버`.

## 3. leap second /ˈliːp ˌsekənd/
**Part of speech:** noun
**Core meaning (English):** an occasional one-second adjustment inserted into civil time to keep it close to Earth's rotation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều chỉnh thêm một giây vào giờ dân dụng để bám vòng quay Trái Đất.
**Grammar & collocations:** `leap-second announcement` — thông báo; `step the time scale` — điều chỉnh.
**Examples:** `The gateway's leap second policy prevented a duplicate timestamp during the adjustment.` → Policy leap second ngăn timestamp trùng lúc điều chỉnh.
**Liên kết tiếng Hàn:** `윤초`.

## 4. network time protocol /ˈnetwɜːrk taɪm ˈproʊtəkɑːl/
**Part of speech:** noun
**Core meaning (English):** a protocol that estimates and distributes clock time across networked computers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** protocol ước tính và phân phối giờ clock giữa các máy nối mạng.
**Grammar & collocations:** `network-time-protocol client` — client; `discipline a local clock` — hiệu chỉnh.
**Examples:** `The gateway used network time protocol to correct its wall-clock estimate.` → Gateway dùng NTP để sửa ước tính giờ.
**Liên kết tiếng Hàn:** `네트워크 시간 프로토콜`.

## 5. synchronization error /ˌsɪŋkrənəˈzeɪʃən ˈerər/
**Part of speech:** noun
**Core meaning (English):** the difference between a device's local time and the reference time it is meant to follow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch giữa giờ local và giờ chuẩn cần bám theo.
**Grammar & collocations:** `synchronization-error budget` — budget; `bound clock mismatch` — giới hạn.
**Examples:** `The controller reported a synchronization error after its crystal warmed up.` → Controller báo lỗi đồng bộ sau khi crystal nóng lên.
**Liên kết tiếng Hàn:** `동기화 오차`.

## 6. phase offset /ˈfeɪz ˌɔːfset/
**Part of speech:** noun
**Core meaning (English):** a fixed time or angle difference between corresponding points of two periodic signals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch cố định về thời gian/góc giữa hai tín hiệu tuần hoàn.
**Grammar & collocations:** `phase-offset estimate` — ước tính; `remove a fixed delay` — loại.
**Examples:** `The receiver measured phase offset before aligning the two sample streams.` → Receiver đo offset pha trước căn hai stream.
**Liên kết tiếng Hàn:** `위상 오프셋`.

## 7. frequency offset /ˈfriːkwənsi ˌɔːfset/
**Part of speech:** noun
**Core meaning (English):** the difference between a signal's actual frequency and its nominal reference frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch giữa frequency thực và frequency chuẩn danh nghĩa.
**Grammar & collocations:** `frequency-offset correction` — hiệu chỉnh; `track oscillator drift` — theo dõi.
**Examples:** `A frequency offset made the receiver's samples slowly slide out of alignment.` → Offset frequency làm sample trượt dần khỏi alignment.
**Liên kết tiếng Hàn:** `주파수 오프셋`.

## 8. sample clock /ˈsæmpəl klɑːk/
**Part of speech:** noun
**Core meaning (English):** the clock that determines when an analog or digital signal is sampled.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** clock quyết định thời điểm lấy mẫu signal analog/digital.
**Grammar & collocations:** `sample-clock rate` — tốc độ; `lock the converter clock` — khóa.
**Examples:** `The audio codec shared a sample clock with the capture engine.` → Codec audio dùng chung sample clock với engine thu.
**Liên kết tiếng Hàn:** `샘플 클록`.

## 9. time alignment /ˈtaɪm əˈlaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** arranging measurements or events so their timestamps refer to the same temporal points.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sắp xếp measurement/event để timestamp cùng trỏ tới điểm thời gian.
**Grammar & collocations:** `time-alignment pass` — lượt xử lý; `align sensor traces` — căn chỉnh.
**Examples:** `Time alignment let the camera frame and lidar return describe the same maneuver.` → Căn thời gian cho frame camera và lidar cùng mô tả maneuver.
**Liên kết tiếng Hàn:** `시간 정렬`.

## 10. dead reckoning /ˌded ˈrekənɪŋ/
**Part of speech:** noun
**Core meaning (English):** estimating current position from a previously known state and measured movement without a fresh absolute reference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính vị trí từ state trước và chuyển động đo được khi thiếu reference tuyệt đối.
**Grammar & collocations:** `dead-reckoning estimate` — ước tính; `integrate velocity` — tích phân.
**Examples:** `The robot used dead reckoning while the indoor positioning signal was blocked.` → Robot dùng dead reckoning khi tín hiệu định vị bị che.
**Liên kết tiếng Hàn:** `추측 항법`.

## 11. trigger alignment /ˈtrɪɡər əˈlaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** coordinating trigger edges so multiple instruments or channels begin capture together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** căn các cạnh trigger để nhiều instrument/channel bắt đầu thu cùng lúc.
**Grammar & collocations:** `trigger-alignment pulse` — xung; `arm channels simultaneously` — arm.
**Examples:** `Trigger alignment made the three oscilloscopes capture the same fault event.` → Căn trigger giúp ba oscilloscope thu cùng event lỗi.
**Liên kết tiếng Hàn:** `트리거 정렬`.

## 12. time-to-digital converter /ˈtaɪm tə ˈdɪdʒɪtəl kənˈvɜːrtər/
**Part of speech:** noun
**Core meaning (English):** a circuit that measures a time interval and reports it as a digital value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch đo khoảng thời gian và trả về giá trị digital.
**Grammar & collocations:** `time-to-digital-converter resolution` — độ phân giải; `measure an arrival edge` — đo.
**Examples:** `The time-to-digital converter measured the laser pulse arrival with picosecond resolution.` → TDC đo arrival laser ở độ phân giải picosecond.
**Liên kết tiếng Hàn:** `시간-디지털 변환기`.

## 13. pulse-per-second signal /ˈpʌls pər ˈsekənd ˈsɪɡnəl/
**Part of speech:** noun
**Core meaning (English):** a timing signal that marks the start of each second with a precise pulse.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu đánh dấu đầu mỗi giây bằng xung chính xác.
**Grammar & collocations:** `pulse-per-second input` — input; `discipline an oscillator` — hiệu chỉnh.
**Examples:** `The receiver used a pulse-per-second signal to anchor its local second boundary.` → Receiver dùng PPS neo ranh giới giây local.
**Liên kết tiếng Hàn:** `초당 펄스 신호`.

## 14. time synchronization domain /ˈtaɪm ˌsɪŋkrənəˈzeɪʃən doʊˈmeɪn/
**Part of speech:** noun
**Core meaning (English):** a group of clocks that share a defined synchronization source and timing rules.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm clock dùng chung nguồn đồng bộ và quy tắc timing.
**Grammar & collocations:** `time-synchronization-domain boundary` — boundary; `join a timing domain` — tham gia.
**Examples:** `Only sensors in the same time synchronization domain were compared directly.` → Chỉ sensor cùng domain mới được so sánh trực tiếp.
**Liên kết tiếng Hàn:** `시간 동기화 도메인`.

## 15. clock recovery /ˈklɑːk rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** extracting timing information from a received signal so the receiver can sample it correctly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trích timing từ signal nhận để receiver sample đúng.
**Grammar & collocations:** `clock-recovery loop` — loop; `recover a symbol rate` — khôi phục.
**Examples:** `Clock recovery lost lock when the optical signal became too weak.` → Clock recovery mất lock khi signal quang quá yếu.
**Liên kết tiếng Hàn:** `클록 복구`.

## 16. resampling filter /ˌriːˈsæmplɪŋ ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a filter used when converting sampled data to a different sample rate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** filter dùng khi đổi data đã sample sang sample rate khác.
**Grammar & collocations:** `resampling-filter taps` — tap; `convert between rates` — chuyển đổi.
**Examples:** `The resampling filter converted the recorder's clock rate to the network stream rate.` → Filter đổi rate recorder sang rate stream mạng.
**Liên kết tiếng Hàn:** `리샘플링 필터`.

## 17. alias rejection /ˈeɪliəs rɪˈdʒekʃən/
**Part of speech:** noun
**Core meaning (English):** suppression of false lower-frequency components created when a signal is sampled too slowly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** triệt thành phần tần số thấp giả do sample quá chậm.
**Grammar & collocations:** `alias-rejection performance` — hiệu năng; `attenuate an unwanted image` — giảm.
**Examples:** `The front-end filter improved alias rejection before the converter increased its sample rate.` → Filter đầu vào cải thiện triệt alias trước tăng rate.
**Liên kết tiếng Hàn:** `에일리어스 제거`.

## 18. sensor timestamp /ˈsensər ˈtaɪmstæmp/
**Part of speech:** noun
**Core meaning (English):** the time label attached to a sensor measurement, ideally marking when the signal was captured.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhãn thời gian gắn measurement sensor, tốt nhất ghi lúc capture.
**Grammar & collocations:** `sensor-timestamp accuracy` — độ chính xác; `stamp at acquisition` — đóng dấu.
**Examples:** `The logger preserved the sensor timestamp rather than assigning arrival time.` → Logger giữ timestamp sensor thay vì dùng giờ đến.
**Liên kết tiếng Hàn:** `센서 타임스탬프`.

## 19. holdover mode /ˈhoʊldˌoʊvər moʊd/
**Part of speech:** noun
**Core meaning (English):** an operating mode that maintains an estimated time after the external synchronization source is lost.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mode duy trì giờ ước tính sau khi mất nguồn đồng bộ ngoài.
**Grammar & collocations:** `holdover-mode accuracy` — độ chính xác; `ride through an outage` — vượt qua.
**Examples:** `The gateway entered holdover mode when its timing antenna lost visibility.` → Gateway vào holdover khi antenna timing mất tầm nhìn.
**Liên kết tiếng Hàn:** `홀드오버 모드`.

## 20. time interval error /ˈtaɪm ˈɪntərvəl ˈerər/
**Part of speech:** noun
**Core meaning (English):** the deviation of an observed clock interval from the ideal interval over a specified observation period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ lệch của khoảng clock đo được so với khoảng lý tưởng trong thời gian quan sát.
**Grammar & collocations:** `time-interval-error measurement` — phép đo; `quantify short-term stability` — định lượng.
**Examples:** `The lab plotted time interval error to compare two oscillator designs.` → Phòng lab vẽ TIE để so sánh hai thiết kế oscillator.
**Liên kết tiếng Hàn:** `시간 간격 오차`.

## Review in context

A shared **timebase** prevents a **timestamp rollover** from confusing event order, while a **leap second** policy defines how civil time changes. A **network time protocol** can reduce **synchronization error** by estimating **phase offset** and **frequency offset**. Each **sample clock** then supports **time alignment**; a robot may fall back to **dead reckoning**. Test equipment needs **trigger alignment**, a **time-to-digital converter**, and a **pulse-per-second signal**. Clocks in one **time synchronization domain** can share **clock recovery** rules. A **resampling filter** improves **alias rejection**, and a **sensor timestamp** records capture time. During an outage, **holdover mode** preserves service while **time interval error** measures the remaining instability.

**Bản dịch tiếng Việt:** **Timebase** chung ngăn **timestamp rollover** làm nhầm thứ tự event, còn policy **leap second** định nghĩa cách giờ dân dụng thay đổi. **Network time protocol** có thể giảm **synchronization error** bằng cách ước tính **phase offset** và **frequency offset**. Sau đó mỗi **sample clock** hỗ trợ **time alignment**; robot có thể fallback sang **dead reckoning**. Thiết bị test cần **trigger alignment**, **time-to-digital converter** và **pulse-per-second signal**. Clock trong cùng **time synchronization domain** dùng chung quy tắc **clock recovery**. **Resampling filter** cải thiện **alias rejection**, còn **sensor timestamp** ghi thời điểm capture. Khi mất nguồn ngoài, **holdover mode** duy trì dịch vụ trong lúc **time interval error** đo độ bất ổn còn lại.
