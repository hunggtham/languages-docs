# C2 Vocabulary — Carbon-aware data-center operations

This lesson follows a workload through energy measurement, thermal control, carbon-aware scheduling, and sustainability accounting.

Flow: **carbon-aware scheduling → power usage effectiveness → water usage effectiveness → energy proportionality → workload shifting → carbon intensity forecast → renewable matching → thermal throttling → power capping → rack-level telemetry → hot-spot map → liquid cooling loop → free-air cooling → heat reuse → grid-aware scheduling → energy-delay product → carbon budget → sustainability ledger → utilization floor → cooling envelope**.

## 1. carbon-aware scheduling /ˈkɑrbən əˈwɛr ˈskɛdʒuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** scheduling workloads according to the carbon intensity of the electricity available at different times or locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy workload lúc/khu vực điện sạch hơn.
**Grammar & collocations:** `carbon-aware-scheduling policy` — policy; `schedule around carbon intensity` — schedule.
**Examples:** `Carbon-aware scheduling moved batch rendering to a region with cleaner electricity.` → Scheduling chuyển render batch tới vùng có điện sạch hơn.
**Liên kết tiếng Hàn:** `탄소 인식 스케줄링`.

## 2. power usage effectiveness /ˈpaʊər ˈjuːsɪdʒ ɪˈfɛktɪvnəs/
**Part of speech:** noun
**Core meaning (English):** the ratio of total data-center energy to the energy used by computing equipment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** PUE cho biết overhead cooling/power so với energy IT.
**Grammar & collocations:** `power-usage-effectiveness metric` — metric; `lower PUE` — giảm PUE.
**Examples:** `The retrofit lowered power usage effectiveness by improving airflow containment.` → Retrofit giảm PUE nhờ containment airflow tốt hơn.
**Liên kết tiếng Hàn:** `전력 사용 효율성`.

## 3. water usage effectiveness /ˈwɔtər ˈjuːsɪdʒ ɪˈfɛktɪvnəs/
**Part of speech:** noun
**Core meaning (English):** a measure relating data-center water consumption to the energy or computing work delivered.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** WUE đo lượng nước cho cooling so với hoạt động IT.
**Grammar & collocations:** `water-usage-effectiveness report` — report; `reduce WUE` — giảm WUE.
**Examples:** `Water usage effectiveness improved after the site replaced evaporative cooling during dry months.` → WUE tốt hơn sau khi site đổi cooling bay hơi.
**Liên kết tiếng Hàn:** `물 사용 효율성`.

## 4. energy proportionality /ˈɛnərdʒi ˌproʊpɔrʃəˈnæləti/
**Part of speech:** noun
**Core meaning (English):** how closely a system's energy use follows its actual workload instead of remaining high when lightly loaded.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** workload giảm thì energy cũng giảm tương ứng.
**Grammar & collocations:** `energy-proportional server` — server; `improve proportionality` — cải thiện.
**Examples:** `Energy proportionality was poor because idle accelerators kept their memory clocks high.` → Proportionality kém vì accelerator idle vẫn giữ clock memory cao.
**Liên kết tiếng Hàn:** `에너지 비례성`.

## 5. workload shifting /ˈwɝkloʊd ˈʃɪftɪŋ/
**Part of speech:** noun
**Core meaning (English):** moving computation across time, regions, or systems to meet cost, carbon, or capacity goals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển workload sang giờ/vùng/hệ thống phù hợp hơn.
**Grammar & collocations:** `workload-shifting window` — window; `shift flexible jobs` — chuyển.
**Examples:** `Workload shifting postponed the flexible simulation until the renewable forecast improved.` → Shifting hoãn simulation tới khi forecast renewable tốt hơn.
**Liên kết tiếng Hàn:** `워크로드 이동`.

## 6. carbon intensity forecast /ˈkɑrbən ɪnˈtɛnsəti ˈfɔrˌkæst/
**Part of speech:** noun
**Core meaning (English):** a prediction of greenhouse-gas emissions per unit of electricity for a future time and place.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dự báo điện sắp tới sạch/bẩn tới mức nào.
**Grammar & collocations:** `carbon-intensity-forecast error` — error; `consume a forecast` — dùng forecast.
**Examples:** `The carbon intensity forecast predicted a cleaner grid after the wind front arrived.` → Forecast dự đoán grid sạch hơn sau khi gió tăng.
**Liên kết tiếng Hàn:** `탄소 집약도 예측`.

## 7. renewable matching /rɪˈnuəbəl ˈmætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** aligning electricity consumption with renewable generation in the same region or accounting period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghép lúc dùng điện với lúc renewable thực sự phát.
**Grammar & collocations:** `renewable-matching claim` — claim; `match consumption to generation` — ghép.
**Examples:** `Renewable matching required the service to report hourly consumption rather than annual averages.` → Matching yêu cầu báo consumption theo giờ thay vì trung bình năm.
**Liên kết tiếng Hàn:** `재생에너지 매칭`.

## 8. thermal throttling /ˈθɝməl ˈθrɑtəlɪŋ/
**Part of speech:** noun
**Core meaning (English):** reducing clock rate or workload when temperature approaches a safe operating limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hạ tốc khi quá nóng để bảo vệ hardware.
**Grammar & collocations:** `thermal-throttling threshold` — threshold; `throttle a processor` — throttle.
**Examples:** `Thermal throttling protected the accelerator but increased the job's completion time.` → Throttling bảo vệ accelerator nhưng kéo dài job.
**Liên kết tiếng Hàn:** `열 스로틀링`.

## 9. power capping /ˈpaʊər ˈkæpɪŋ/
**Part of speech:** noun
**Core meaning (English):** enforcing an upper bound on power draw from a device, rack, or facility.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đặt trần power để tránh vượt capacity hoặc peak cost.
**Grammar & collocations:** `power-cap setting` — setting; `cap rack power` — giới hạn.
**Examples:** `Power capping kept the rack below the facility's transient limit.` → Capping giữ rack dưới giới hạn transient của facility.
**Liên kết tiếng Hàn:** `전력 상한`.

## 10. rack-level telemetry /ræk ˈlɛvəl təˈlɛmɪtri/
**Part of speech:** noun
**Core meaning (English):** measurements collected for an entire server rack, including power, temperature, airflow, and utilization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** telemetry tổng hợp ở cấp rack.
**Grammar & collocations:** `rack-level-telemetry stream` — stream; `correlate rack measurements` — correlate.
**Examples:** `Rack-level telemetry revealed that neighboring workloads caused repeated fan surges.` → Telemetry cấp rack lộ workload bên cạnh gây fan surge.
**Liên kết tiếng Hàn:** `랙 수준 텔레메트리`.

## 11. hot-spot map /hɑt spɑt mæp/
**Part of speech:** noun
**Core meaning (English):** a spatial representation of unusually warm components or regions in a system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản đồ vùng nóng trên board, rack hoặc facility.
**Grammar & collocations:** `hot-spot-map overlay` — overlay; `locate a thermal hot spot` — định vị.
**Examples:** `The hot-spot map showed congestion near the upper inlet of the rack.` → Map cho thấy nóng do congestion ở cửa hút trên rack.
**Liên kết tiếng Hàn:** `핫스팟 지도`.

## 12. liquid cooling loop /ˈlɪkwɪd ˈkuːlɪŋ luːp/
**Part of speech:** noun
**Core meaning (English):** a circulating path that carries coolant through heat exchangers or cold plates to remove heat.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vòng chất lỏng đi qua cold plate để lấy nhiệt.
**Grammar & collocations:** `liquid-cooling-loop pressure` — pressure; `circulate coolant` — tuần hoàn.
**Examples:** `The liquid cooling loop carried heat from the accelerator plates to a dry cooler.` → Loop đưa nhiệt từ cold plate tới dry cooler.
**Liên kết tiếng Hàn:** `액체 냉각 루프`.

## 13. free-air cooling /friː ɛr ˈkuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** cooling that uses favorable outdoor air conditions instead of mechanical refrigeration for part or all of the heat removal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng không khí ngoài trời mát thay cho compressor.
**Grammar & collocations:** `free-air-cooling mode` — mode; `use outside air` — dùng.
**Examples:** `Free-air cooling handled the winter load without running the chillers.` → Free-air xử lý tải mùa đông mà không chạy chiller.
**Liên kết tiếng Hàn:** `외기 냉각`.

## 14. heat reuse /hiːt riˈjuːs/
**Part of speech:** noun
**Core meaning (English):** using captured waste heat for another useful purpose instead of rejecting it to the environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tận dụng nhiệt thải để sưởi, nước nóng hoặc quy trình khác.
**Grammar & collocations:** `heat-reuse project` — project; `recover waste heat` — thu hồi.
**Examples:** `Heat reuse supplied warm water to the adjacent greenhouse during the cold season.` → Reuse cấp nước ấm cho nhà kính bên cạnh.
**Liên kết tiếng Hàn:** `열 재사용`.

## 15. grid-aware scheduling /ɡrɪd əˈwɛr ˈskɛdʒuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** scheduling that considers grid constraints, prices, emissions, or renewable availability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scheduler nhìn cả trạng thái grid, không chỉ nhìn server.
**Grammar & collocations:** `grid-aware-scheduling signal` — signal; `respond to grid conditions` — phản ứng.
**Examples:** `Grid-aware scheduling delayed a flexible job during a local capacity alert.` → Scheduling hoãn job khi grid báo thiếu capacity.
**Liên kết tiếng Hàn:** `그리드 인식 스케줄링`.

## 16. energy-delay product /ˈɛnərdʒi dɪˈleɪ ˈprɑdəkt/
**Part of speech:** noun
**Core meaning (English):** a metric multiplying energy consumed by execution delay to compare efficiency trade-offs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cân bằng energy và thời gian, không tối ưu một phía.
**Grammar & collocations:** `energy-delay-product objective` — objective; `minimize the product` — tối thiểu.
**Examples:** `The slower kernel had a lower energy-delay product because it used far less power.` → Kernel chậm hơn nhưng EDP thấp hơn vì dùng ít power.
**Liên kết tiếng Hàn:** `에너지 지연 곱`.

## 17. carbon budget /ˈkɑrbən ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a permitted amount of greenhouse-gas emissions for a service, project, or reporting period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách carbon có hạn cần phân bổ cho workload.
**Grammar & collocations:** `carbon-budget allocation` — phân bổ; `exceed the budget` — vượt.
**Examples:** `The team reserved the carbon budget for latency-sensitive inference.` → Team dành budget carbon cho inference nhạy latency.
**Liên kết tiếng Hàn:** `탄소 예산`.

## 18. sustainability ledger /səˌsteɪnəˈbɪləti ˈlɛdʒər/
**Part of speech:** noun
**Core meaning (English):** a record that attributes energy, water, emissions, and mitigation actions to workloads or services.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sổ cái sustainability ghi service đã dùng tài nguyên và phát thải bao nhiêu.
**Grammar & collocations:** `sustainability-ledger entry` — entry; `attribute emissions` — phân bổ.
**Examples:** `The sustainability ledger attributed cooling water to each tenant's measured workload.` → Ledger phân bổ nước cooling theo workload tenant.
**Liên kết tiếng Hàn:** `지속가능성 원장`.

## 19. utilization floor /ˌjuːtələˈzeɪʃən flɔr/
**Part of speech:** noun
**Core meaning (English):** a minimum workload or occupancy level below which a resource should be consolidated, slowed, or powered down.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngưỡng utilization tối thiểu để quyết định consolidate hoặc tắt.
**Grammar & collocations:** `utilization-floor policy` — policy; `fall below the floor` — xuống dưới.
**Examples:** `The utilization floor triggered consolidation when a cluster stayed mostly idle.` → Floor kích hoạt consolidate khi cluster gần như idle.
**Liên kết tiếng Hàn:** `활용률 하한`.

## 20. cooling envelope /ˈkuːlɪŋ ˈɛnvəˌloʊp/
**Part of speech:** noun
**Core meaning (English):** the range of heat loads and environmental conditions a cooling design can safely handle.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng tải nhiệt mà hệ cooling chịu được mà không quá nhiệt.
**Grammar & collocations:** `cooling-envelope limit` — limit; `operate within the envelope` — vận hành trong.
**Examples:** `The new accelerator rack exceeded the cooling envelope during sustained peak load.` → Rack accelerator vượt envelope khi peak kéo dài.
**Liên kết tiếng Hàn:** `냉각 범위`.

## Review in context

**Carbon-aware scheduling** considers **power usage effectiveness**, **water usage effectiveness**, and **energy proportionality** before **workload shifting**. A **carbon intensity forecast** supports **renewable matching**, while **thermal throttling** and **power capping** protect equipment. **Rack-level telemetry** feeds a **hot-spot map**; a **liquid cooling loop**, **free-air cooling**, or **heat reuse** changes the thermal design. **Grid-aware scheduling** weighs the **energy-delay product**, **carbon budget**, and **sustainability ledger**. When utilization falls below a **utilization floor**, consolidation may help, but every placement must remain inside the **cooling envelope**.

**Bản dịch tiếng Việt:** **Carbon-aware scheduling** xét **power usage effectiveness**, **water usage effectiveness** và **energy proportionality** trước khi **workload shifting**. **Carbon intensity forecast** hỗ trợ **renewable matching**, còn **thermal throttling** và **power capping** bảo vệ thiết bị. **Rack-level telemetry** tạo **hot-spot map**; **liquid cooling loop**, **free-air cooling** hoặc **heat reuse** thay đổi thiết kế nhiệt. **Grid-aware scheduling** cân nhắc **energy-delay product**, **carbon budget** và **sustainability ledger**. Khi utilization xuống dưới **utilization floor**, consolidate có thể hữu ích, nhưng placement phải nằm trong **cooling envelope**.
