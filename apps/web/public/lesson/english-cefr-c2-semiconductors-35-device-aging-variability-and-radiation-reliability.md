# C2 Vocabulary — Device aging, variability, and radiation reliability

This lesson connects manufacturing variation with long-term wearout, statistical failure models, and radiation effects in semiconductor devices.

Flow: **process variability → device mismatch → random dopant fluctuation → hot carrier injection → oxide breakdown → electromigration lifetime → useful life → failure rate → hazard rate → weibull slope → weibull characteristic life → failure in time → single-event transient → total ionizing dose → displacement damage → radiation-induced leakage → threshold shift → aging monitor → degradation rate → failure mechanism**.

## 1. process variability /ˈprɑːses ˌveriəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** natural variation in manufacturing conditions that makes nominally identical devices differ.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến thiên tự nhiên trong sản xuất khiến device giống nhau khác nhau.
**Grammar & collocations:** `process-variability budget` — budget; `model wafer-to-wafer spread` — mô hình.
**Examples:** `Process variability widened the distribution of transistor speed across the lot.` → Variability làm rộng phân bố speed transistor trong lot.
**Liên kết tiếng Hàn:** `공정 변동성`.

## 2. device mismatch /dɪˈvaɪs ˈmɪsmætʃ/
**Part of speech:** noun
**Core meaning (English):** unwanted differences between devices intended to have the same electrical characteristics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khác biệt không mong muốn giữa các device lẽ ra có đặc tính giống nhau.
**Grammar & collocations:** `device-mismatch error` — sai số; `match paired transistors` — cân bằng.
**Examples:** `Device mismatch created an input offset in the differential amplifier.` → Mismatch tạo offset đầu vào trong amplifier vi sai.
**Liên kết tiếng Hàn:** `소자 불일치`.

## 3. random dopant fluctuation /ˈrændəm ˈdoʊpənt ˌflʌktʃuˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** device-to-device variation caused by the random number and placement of dopant atoms.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variation giữa device do số lượng/vị trí atom dopant ngẫu nhiên.
**Grammar & collocations:** `random-dopant-fluctuation model` — model; `shift the threshold` — dịch.
**Examples:** `Random dopant fluctuation became significant as the channel volume shrank.` → Fluctuation đáng kể khi thể tích channel nhỏ.
**Liên kết tiếng Hàn:** `랜덤 도펀트 변동`.

## 4. hot carrier injection /hɑːt ˈkæriər ɪnˈdʒekʃən/
**Part of speech:** noun
**Core meaning (English):** energetic carriers entering an insulating or interface region and gradually damaging a transistor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** carrier năng lượng cao đi vào oxide/interface và làm hỏng transistor dần.
**Grammar & collocations:** `hot-carrier-injection stress` — stress; `age a gate interface` — làm già.
**Examples:** `Hot carrier injection shifted the transistor's threshold after years of switching.` → HCI làm dịch threshold sau nhiều năm switching.
**Liên kết tiếng Hàn:** `핫 캐리어 주입`.

## 5. oxide breakdown /ˈɑːksaɪd ˈbreɪkdaʊn/
**Part of speech:** noun
**Core meaning (English):** failure of an insulating oxide after electrical stress creates a conductive path through it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** oxide cách điện hỏng, stress điện tạo đường dẫn điện xuyên qua.
**Grammar & collocations:** `oxide-breakdown field` — field; `stress a dielectric` — gây stress.
**Examples:** `A defect accelerated oxide breakdown in the high-voltage switch.` → Defect làm breakdown oxide nhanh trong switch điện áp cao.
**Liên kết tiếng Hàn:** `산화막 파괴`.

## 6. electromigration lifetime /ɪˌlektroʊmaɪˈɡreɪʃən ˈlaɪftaɪm/
**Part of speech:** noun
**Core meaning (English):** the expected service time before current-driven metal-atom movement causes an interconnect failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian dùng dự kiến trước khi dòng làm atom kim loại di chuyển gây lỗi interconnect.
**Grammar & collocations:** `electromigration-lifetime model` — model; `estimate a void risk` — ước tính.
**Examples:** `Lowering peak current improved electromigration lifetime in the narrow power rail.` → Giảm dòng peak tăng lifetime trong rail hẹp.
**Liên kết tiếng Hàn:** `일렉트로마이그레이션 수명`.

## 7. useful life /ˈjuːsfəl laɪf/
**Part of speech:** noun
**Core meaning (English):** the period during which a product can perform its intended function within acceptable limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian product thực hiện chức năng trong giới hạn chấp nhận.
**Grammar & collocations:** `useful-life projection` — dự báo; `extend field service` — kéo dài.
**Examples:** `The qualification plan targeted a useful life of fifteen years in the control cabinet.` → Plan nhắm useful life 15 năm trong tủ điều khiển.
**Liên kết tiếng Hàn:** `유효 수명`.

## 8. failure rate /ˈfeɪljər reɪt/
**Part of speech:** noun
**Core meaning (English):** the frequency at which units fail within a defined population and time period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tần suất unit hỏng trong population và khoảng thời gian xác định.
**Grammar & collocations:** `failure-rate estimate` — ước tính; `compare product lots` — so sánh.
**Examples:** `The revised seal reduced the failure rate during high-humidity testing.` → Seal mới giảm rate lỗi khi test ẩm cao.
**Liên kết tiếng Hàn:** `고장률`.

## 9. hazard rate /ˈhæzərd reɪt/
**Part of speech:** noun
**Core meaning (English):** the instantaneous risk of failure at a given age among units that have survived to that age.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rủi ro hỏng tức thời ở một tuổi cụ thể trong nhóm còn sống.
**Grammar & collocations:** `hazard-rate curve` — curve; `condition on survival` — điều kiện.
**Examples:** `The hazard rate rose after the expected wearout point.` → Hazard rate tăng sau điểm wearout dự kiến.
**Liên kết tiếng Hàn:** `위험률`.

## 10. weibull slope /ˈvaɪbʊl sloʊp/
**Part of speech:** noun
**Core meaning (English):** the shape parameter of a Weibull model that indicates how failure risk changes with age.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tham số shape Weibull cho biết rủi ro hỏng đổi theo tuổi.
**Grammar & collocations:** `Weibull-slope estimate` — ước tính; `interpret a wearout trend` — diễn giải.
**Examples:** `A steep Weibull slope indicated a narrow wearout distribution.` → Slope dốc chỉ phân bố wearout hẹp.
**Liên kết tiếng Hàn:** `와이블 기울기`.

## 11. weibull characteristic life /ˈvaɪbʊl ˌkærəktəˈrɪstɪk laɪf/
**Part of speech:** noun
**Core meaning (English):** the Weibull scale value associated with a specified cumulative failure probability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị scale Weibull gắn với xác suất hỏng tích lũy xác định.
**Grammar & collocations:** `Weibull-characteristic-life estimate` — ước tính; `fit a life distribution` — fit.
**Examples:** `The test report compared characteristic life across three package materials.` → Report so sánh characteristic life giữa ba vật liệu package.
**Liên kết tiếng Hàn:** `와이블 특성 수명`.

## 12. failure in time /ˈfeɪljər ɪn taɪm/
**Part of speech:** noun
**Core meaning (English):** a reliability unit representing one failure per billion device-hours.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đơn vị reliability biểu thị một lỗi trên một tỷ device-hour.
**Grammar & collocations:** `failure-in-time rate` — rate; `convert field data` — quy đổi.
**Examples:** `The supplier published a failure in time figure for the controller family.` → Supplier công bố FIT cho dòng controller.
**Liên kết tiếng Hàn:** `시간당 고장률 단위`.

## 13. single-event transient /ˈsɪŋɡəl ɪˈvent ˈtrænziənt/
**Part of speech:** noun
**Core meaning (English):** a temporary electrical disturbance caused by one energetic particle passing through a device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiễu điện tạm thời do một particle năng lượng đi xuyên device.
**Grammar & collocations:** `single-event-transient pulse` — xung; `filter a transient` — lọc.
**Examples:** `A single-event transient briefly changed the sensor output but did not corrupt memory.` → SET đổi output ngắn nhưng không hỏng memory.
**Liên kết tiếng Hàn:** `단일 사건 과도 현상`.

## 14. total ionizing dose /ˈtoʊtəl ˈaɪəˌnaɪzɪŋ doʊs/
**Part of speech:** noun
**Core meaning (English):** the cumulative ionizing radiation absorbed by a material over an exposure period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tổng radiation ion hóa vật liệu hấp thụ trong thời gian expose.
**Grammar & collocations:** `total-ionizing-dose test` — test; `accumulate radiation damage` — tích lũy.
**Examples:** `The space-grade memory passed the total ionizing dose requirement.` → Memory không gian đạt yêu cầu TID.
**Liên kết tiếng Hàn:** `총 이온화 선량`.

## 15. displacement damage /dɪsˈpleɪsmənt ˈdæmɪdʒ/
**Part of speech:** noun
**Core meaning (English):** crystal-lattice damage caused when energetic particles knock atoms out of their normal sites.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** damage mạng tinh thể khi particle năng lượng hất atom khỏi vị trí.
**Grammar & collocations:** `displacement-damage dose` — dose; `degrade minority-carrier lifetime` — làm giảm.
**Examples:** `Displacement damage reduced the photodiode's carrier lifetime after the neutron test.` → Damage giảm lifetime carrier sau test neutron.
**Liên kết tiếng Hàn:** `변위 손상`.

## 16. radiation-induced leakage /ˌreɪdiˈeɪʃən ɪnˈduːst ˈliːkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** unwanted current that appears or increases after radiation creates defects in a device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dòng rò tăng sau radiation tạo defect trong device.
**Grammar & collocations:** `radiation-induced-leakage path` — đường; `monitor off-state current` — theo dõi.
**Examples:** `Radiation-induced leakage shortened the battery life of the orbital sensor.` → Leakage do radiation rút ngắn pin sensor quỹ đạo.
**Liên kết tiếng Hàn:** `방사선 유도 누설`.

## 17. threshold shift /ˈθreʃhoʊld ʃɪft/
**Part of speech:** noun
**Core meaning (English):** a change in the voltage or condition at which a device begins to conduct or switch.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi voltage/condition khiến device bắt đầu dẫn hoặc switch.
**Grammar & collocations:** `threshold-shift distribution` — phân bố; `track aging drift` — theo dõi.
**Examples:** `The monitor detected threshold shift before the transistor failed its timing limit.` → Monitor bắt shift trước transistor fail timing.
**Liên kết tiếng Hàn:** `문턱 전압 이동`.

## 18. aging monitor /ˈeɪdʒɪŋ ˈmɑːnətər/
**Part of speech:** noun
**Core meaning (English):** a circuit or test structure that tracks degradation indicators while a product operates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch/cấu trúc test theo dõi chỉ dấu degradation khi product chạy.
**Grammar & collocations:** `aging-monitor reading` — reading; `measure a ring oscillator` — đo.
**Examples:** `The aging monitor reported slower delay after prolonged high-voltage operation.` → Monitor báo delay chậm sau chạy voltage cao lâu.
**Liên kết tiếng Hàn:** `노화 모니터`.

## 19. degradation rate /ˌdeɡrəˈdeɪʃən reɪt/
**Part of speech:** noun
**Core meaning (English):** the speed at which a performance or material property worsens under stress.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ performance hoặc property vật liệu xấu đi dưới stress.
**Grammar & collocations:** `degradation-rate model` — model; `project future margin` — dự báo.
**Examples:** `The degradation rate accelerated when the package exceeded its humidity limit.` → Rate degradation tăng khi package vượt giới hạn ẩm.
**Liên kết tiếng Hàn:** `열화율`.

## 20. failure mechanism /ˈfeɪljər ˈmekəˌnɪzəm/
**Part of speech:** noun
**Core meaning (English):** the physical or chemical process that turns stress into a specific form of failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process vật lý/hóa học biến stress thành dạng failure cụ thể.
**Grammar & collocations:** `failure-mechanism analysis` — phân tích; `isolate the root process` — cô lập.
**Examples:** `Cross-section analysis identified the failure mechanism as a void in the power metal.` → Phân tích cross-section xác định mechanism là void trong metal nguồn.
**Liên kết tiếng Hàn:** `고장 메커니즘`.

## Review in context

**process variability**, **device mismatch**, and **random dopant fluctuation** create spread before a product ships. During life, **hot carrier injection**, **oxide breakdown**, and **electromigration lifetime** shape **useful life**, **failure rate**, and **hazard rate**; a **weibull slope** and **weibull characteristic life** summarize the distribution, while **failure in time** gives a field unit. Radiation can produce a **single-event transient**, accumulate **total ionizing dose**, or cause **displacement damage** and **radiation-induced leakage**. Engineers track **threshold shift** with an **aging monitor**, estimate **degradation rate**, and confirm the physical **failure mechanism**.

**Bản dịch tiếng Việt:** **process variability**, **device mismatch** và **random dopant fluctuation** tạo độ phân tán trước khi giao hàng. Trong vòng đời, **hot carrier injection**, **oxide breakdown** và **electromigration lifetime** định hình **useful life**, **failure rate** và **hazard rate**; **weibull slope** và **weibull characteristic life** tóm tắt phân bố, còn **failure in time** cho biết rate hiện trường. Radiation có thể tạo **single-event transient**, tích lũy **total ionizing dose**, hoặc gây **displacement damage** và **radiation-induced leakage**. Kỹ sư theo dõi **threshold shift** bằng **aging monitor**, ước tính **degradation rate** và xác nhận **failure mechanism** vật lý.
