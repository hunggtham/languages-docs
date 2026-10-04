# C2 Vocabulary — Time scales and clock steering

This lesson turns a network of clock comparisons into a usable time scale through weighting, prediction, holdover, and stability statistics.

Flow: **frequency steering → ensemble time scale → clock weighting → robust averaging → state-space estimator → frequency prediction → phase prediction → time-scale generation → paper clock → steered clock → clock holdover → holdover prediction → frequency wander → time deviation → modified Allan deviation → Hadamard deviation → phase residual → frequency residual → time-transfer uncertainty → link calibration**.

## 1. frequency steering /ˈfriːkwənsi ˈstɪrɪŋ/
**Part of speech:** noun
**Core meaning (English):** gradual adjustment of a clock's frequency so its output follows a chosen reference or time scale.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh dần frequency clock để output bám tham chiếu hoặc time scale được chọn.
**Grammar & collocations:** `frequency-steering command` — lệnh; `steer a local oscillator` — điều chỉnh oscillator local.
**Examples:** `Frequency steering kept the laboratory clock aligned with the ensemble.` → Steering frequency giữ clock lab căn với ensemble.
**Liên kết tiếng Hàn:** `주파수 조향`.

## 2. ensemble time scale /ɪnˈsɑːmbəl taɪm skeɪl/
**Part of speech:** noun
**Core meaning (English):** a time reference formed by combining the outputs of several clocks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tham chiếu time tạo bằng cách gộp output của nhiều clock.
**Grammar & collocations:** `ensemble-time-scale algorithm` — thuật toán; `combine clock phases` — gộp pha clock.
**Examples:** `The ensemble time scale remained stable when one clock was removed.` → Time scale ensemble vẫn ổn định khi loại một clock.
**Liên kết tiếng Hàn:** `앙상블 시간 척도`.

## 3. clock weighting /klɑːk ˈweɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** assigning different influence to clocks according to their uncertainty, stability, or health.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gán ảnh hưởng khác nhau cho clock theo uncertainty, ổn định hoặc tình trạng.
**Grammar & collocations:** `clock-weighting rule` — quy tắc; `down-weight a noisy clock` — giảm trọng số clock nhiễu.
**Examples:** `Clock weighting reduced the effect of a reference with a noisy afternoon record.` → Gán trọng số clock giảm ảnh hưởng của tham chiếu có record chiều nhiễu.
**Liên kết tiếng Hàn:** `시계 가중`.

## 4. robust averaging /roʊˈbʌst ˈævərɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** averaging designed to limit the influence of outliers or non-Gaussian disturbances.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lấy trung bình được thiết kế để hạn chế outlier hoặc disturbance không Gaussian.
**Grammar & collocations:** `robust-averaging estimator` — estimator; `reject an outlier` — loại outlier.
**Examples:** `Robust averaging prevented one failed link from shifting the reported time.` → Lấy trung bình robust ngăn một link lỗi làm dịch time báo cáo.
**Liên kết tiếng Hàn:** `강건 평균`.

## 5. state-space estimator /steɪt speɪs ˈestəmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator that represents hidden clock states and updates them from sequential measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator biểu diễn trạng thái clock ẩn và cập nhật từ phép đo tuần tự.
**Grammar & collocations:** `state-space-estimator covariance` — covariance; `update a hidden state` — cập nhật trạng thái ẩn.
**Examples:** `The state-space estimator separated frequency drift from measurement noise.` → Estimator state-space tách drift frequency khỏi noise đo.
**Liên kết tiếng Hàn:** `상태 공간 추정기`.

## 6. frequency prediction /ˈfriːkwənsi prɪˈdɪkʃən/
**Part of speech:** noun
**Core meaning (English):** an estimate of a clock's future frequency based on its past behavior and current controls.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính frequency tương lai của clock dựa trên hành vi trước và control hiện tại.
**Grammar & collocations:** `frequency-prediction model` — mô hình; `forecast a drift` — dự báo drift.
**Examples:** `Frequency prediction kept the holdover correction smooth during the link outage.` → Dự đoán frequency giữ hiệu chỉnh holdover mượt khi link outage.
**Liên kết tiếng Hàn:** `주파수 예측`.

## 7. phase prediction /feɪz prɪˈdɪkʃən/
**Part of speech:** noun
**Core meaning (English):** an estimate of how a clock's accumulated phase will evolve beyond the latest observation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước tính pha tích lũy của clock sẽ tiến triển thế nào sau quan sát mới nhất.
**Grammar & collocations:** `phase-prediction residual` — residual; `extrapolate a phase trajectory` — ngoại suy quỹ đạo pha.
**Examples:** `Phase prediction allowed the receiver to bridge a short missing data interval.` → Dự đoán pha cho phép receiver bắc qua khoảng thiếu data ngắn.
**Liên kết tiếng Hàn:** `위상 예측`.

## 8. time-scale generation /taɪm skeɪl ˌdʒenəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of constructing a continuous time reference from clock data and comparison rules.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quá trình dựng tham chiếu time liên tục từ data clock và quy tắc so sánh.
**Grammar & collocations:** `time-scale-generation pipeline` — pipeline; `publish a continuous scale` — công bố scale liên tục.
**Examples:** `Time-scale generation filled gaps without hiding the underlying uncertainty.` → Tạo time scale lấp gap mà không che uncertainty nền.
**Liên kết tiếng Hàn:** `시간 척도 생성`.

## 9. paper clock /ˈpeɪpər klɑːk/
**Part of speech:** noun
**Core meaning (English):** a computed clock record maintained in software rather than by a single physical oscillator.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record clock tính bằng software thay vì một oscillator vật lý duy nhất.
**Grammar & collocations:** `paper-clock realization` — hiện thực hóa; `combine historical clock data` — gộp data lịch sử.
**Examples:** `The paper clock continued the time scale while the hardware was being recalibrated.` → Paper clock duy trì time scale khi hardware được hiệu chuẩn lại.
**Liên kết tiếng Hàn:** `페이퍼 시계`.

## 10. steered clock /stɪrd klɑːk/
**Part of speech:** noun
**Core meaning (English):** a clock whose frequency is deliberately adjusted to follow an external time scale.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** clock có frequency được chỉnh có chủ ý để bám time scale ngoài.
**Grammar & collocations:** `steered-clock record` — record; `apply a gentle correction` — áp hiệu chỉnh nhẹ.
**Examples:** `The steered clock followed the ensemble without importing its short-term noise.` → Clock được steer bám ensemble mà không nhập noise ngắn hạn.
**Liên kết tiếng Hàn:** `조향 시계`.

## 11. clock holdover /klɑːk ˈhoʊldoʊvər/
**Part of speech:** noun
**Core meaning (English):** operation of a clock from its internal prediction while its normal reference is unavailable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** clock vận hành theo dự đoán nội khi tham chiếu bình thường không khả dụng.
**Grammar & collocations:** `clock-holdover interval` — khoảng; `enter holdover automatically` — tự vào holdover.
**Examples:** `Clock holdover preserved the experiment through a scheduled network reboot.` → Holdover clock giữ thí nghiệm qua lần reboot mạng định kỳ.
**Liên kết tiếng Hàn:** `시계 홀드오버`.

## 12. holdover prediction /ˈhoʊldoʊvər prɪˈdɪkʃən/
**Part of speech:** noun
**Core meaning (English):** prediction of a clock's phase and frequency during a period without external updates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dự đoán pha và frequency clock trong giai đoạn không có update ngoài.
**Grammar & collocations:** `holdover-prediction error` — error; `forecast an outage interval` — dự báo khoảng outage.
**Examples:** `Holdover prediction limited the time before the reference had to be restored.` → Dự đoán holdover giới hạn thời gian trước khi phải khôi phục tham chiếu.
**Liên kết tiếng Hàn:** `홀드오버 예측`.

## 13. frequency wander /ˈfriːkwənsi ˈwɑːndər/
**Part of speech:** noun
**Core meaning (English):** slow, irregular movement of frequency over timescales longer than ordinary short-term noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển động frequency chậm, không đều ở thang thời gian dài hơn noise ngắn hạn.
**Grammar & collocations:** `frequency-wander model` — mô hình; `separate wander from drift` — tách wander khỏi drift.
**Examples:** `Frequency wander set the long-term limit of the free-running oscillator.` → Wander frequency đặt giới hạn dài hạn của oscillator chạy tự do.
**Liên kết tiếng Hàn:** `주파수 방황`.

## 14. time deviation /taɪm ˌdiːviˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a statistic that describes timing instability in units of time over a chosen averaging period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thống kê mô tả instability timing bằng đơn vị time theo khoảng lấy trung bình chọn.
**Grammar & collocations:** `time-deviation curve` — đường cong; `quantify timing stability` — định lượng ổn định timing.
**Examples:** `Time deviation showed that the network was quiet at one-hour averaging.` → Deviation time cho thấy mạng yên ở averaging một giờ.
**Liên kết tiếng Hàn:** `시간 편차`.

## 15. modified Allan deviation /ˈmɑːdəfaɪd ˈælən ˌdiːviˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a variance statistic that averages phase data before forming Allan deviation to distinguish noise types.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thống kê variance lấy trung bình data pha trước khi tính Allan deviation để phân biệt loại noise.
**Grammar & collocations:** `modified-Allan-deviation plot` — đồ thị; `classify oscillator noise` — phân loại noise oscillator.
**Examples:** `Modified Allan deviation separated white phase noise from flicker behavior.` → Modified Allan deviation tách white phase noise khỏi hành vi flicker.
**Liên kết tiếng Hàn:** `수정 알란 편차`.

## 16. Hadamard deviation /ˈhædəmɑːrd ˌdiːviˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a stability statistic based on second differences that remains useful when frequency drift is present.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thống kê stability dựa trên sai phân bậc hai, hữu ích khi có drift frequency.
**Grammar & collocations:** `Hadamard-deviation estimate` — ước tính; `handle linear frequency drift` — xử lý drift tuyến tính.
**Examples:** `Hadamard deviation remained interpretable during the controlled frequency ramp.` → Hadamard deviation vẫn diễn giải được trong ramp frequency có kiểm soát.
**Liên kết tiếng Hàn:** `하다마드 편차`.

## 17. phase residual /feɪz rɪˈzɪdʒuəl/
**Part of speech:** noun
**Core meaning (English):** the phase difference left after a model or correction has been removed from a measurement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch pha còn lại sau khi loại model hoặc hiệu chỉnh khỏi phép đo.
**Grammar & collocations:** `phase-residual plot` — đồ thị; `inspect correlated structure` — kiểm tra cấu trúc tương quan.
**Examples:** `The phase residual exposed a periodic disturbance from the switching supply.` → Residual pha lộ disturbance tuần hoàn từ nguồn switching.
**Liên kết tiếng Hàn:** `위상 잔차`.

## 18. frequency residual /ˈfriːkwənsi rɪˈzɪdʒuəl/
**Part of speech:** noun
**Core meaning (English):** the remaining frequency error after a prediction, fit, or steering command has been applied.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** frequency error còn lại sau prediction, fit hoặc lệnh steering.
**Grammar & collocations:** `frequency-residual histogram` — histogram; `remove a deterministic trend` — loại trend xác định.
**Examples:** `The frequency residual narrowed after the model included temperature.` → Residual frequency hẹp hơn sau khi model thêm nhiệt độ.
**Liên kết tiếng Hàn:** `주파수 잔차`.

## 19. time-transfer uncertainty /taɪm trænsˈfɜːr ʌnˈsɜːrtənti/
**Part of speech:** noun
**Core meaning (English):** uncertainty added when a time or phase reference is moved between locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** uncertainty thêm vào khi tham chiếu time hoặc pha được truyền giữa các địa điểm.
**Grammar & collocations:** `time-transfer-uncertainty budget` — ngân sách; `bound link contributions` — giới hạn đóng góp link.
**Examples:** `Time-transfer uncertainty was smaller than the uncertainty of either local oscillator.` → Uncertainty truyền time nhỏ hơn uncertainty của mỗi oscillator local.
**Liên kết tiếng Hàn:** `시간 전송 불확도`.

## 20. link calibration /lɪŋk ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** measurement and correction of delay, phase, gain, or asymmetry introduced by a transfer link.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo và hiệu chỉnh delay, pha, gain hoặc bất đối xứng do transfer link thêm.
**Grammar & collocations:** `link-calibration record` — record; `characterize a transfer path` — đặc trưng path truyền.
**Examples:** `Link calibration was repeated after the fiber route was repaired.` → Hiệu chuẩn link được lặp sau khi sửa tuyến fiber.
**Liên kết tiếng Hàn:** `링크 교정`.

## Review in context

**Frequency steering** combines several clocks into an **ensemble time scale** through **clock weighting**, **robust averaging**, and a **state-space estimator**. **Frequency prediction** and **phase prediction** support **time-scale generation**; a **paper clock** can continue the record while a **steered clock** follows the scale. During **clock holdover**, **holdover prediction** must account for **frequency wander** and **time deviation**. **Modified Allan deviation** and **Hadamard deviation** classify stability, while **phase residual**, **frequency residual**, **time-transfer uncertainty**, and **link calibration** show what remains unexplained.

**Bản dịch tiếng Việt:** **Frequency steering** gộp nhiều clock thành **ensemble time scale** qua **clock weighting**, **robust averaging** và **state-space estimator**. **Frequency prediction** và **phase prediction** hỗ trợ **time-scale generation**; **paper clock** có thể tiếp tục record trong khi **steered clock** bám scale. Trong **clock holdover**, **holdover prediction** phải tính **frequency wander** và **time deviation**. **Modified Allan deviation** và **Hadamard deviation** phân loại stability, còn **phase residual**, **frequency residual**, **time-transfer uncertainty** và **link calibration** cho biết phần chưa giải thích.
