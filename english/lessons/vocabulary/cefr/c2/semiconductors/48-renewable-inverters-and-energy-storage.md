# C2 Vocabulary — Renewable inverters and energy storage

This lesson follows renewable power from maximum-power extraction through grid support, islanding protection, and battery balancing.

Flow: **photovoltaic inverter → maximum power point tracking → perturb-and-observe → incremental conductance → dc microgrid → ac microgrid → grid-forming inverter → grid-following inverter → islanding detection → anti-islanding → frequency droop → virtual synchronous machine → battery energy storage → state-of-charge estimator → cell balancing → active balancing → passive balancing → battery management system → bidirectional converter → dual-active bridge**.

## 1. photovoltaic inverter /ˌfoʊtoʊvɑːlˈteɪɪk ɪnˈvɜːrtər/
**Part of speech:** noun
**Core meaning (English):** an inverter that converts the variable DC output of solar modules into usable AC power.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** inverter đổi DC biến thiên từ module solar thành AC dùng được.
**Grammar & collocations:** `photovoltaic-inverter efficiency` — efficiency; `synchronize with the grid` — đồng bộ.
**Examples:** `The photovoltaic inverter reduced output when cloud cover lowered the panel voltage.` → Inverter giảm output khi mây làm voltage panel hạ.
**Liên kết tiếng Hàn:** `태양광 인버터`.

## 2. maximum power point tracking /ˈmæksəməm ˈpaʊər pɔɪnt ˈtrækɪŋ/
**Part of speech:** noun
**Core meaning (English):** controlling an energy source so it operates at the voltage and current that produce its greatest available power.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều khiển source ở voltage/current cho công suất lớn nhất.
**Grammar & collocations:** `maximum-power-point-tracking loop` — loop; `follow an irradiance change` — bám.
**Examples:** `Maximum power point tracking extracted more energy during the changing sunlight.` → MPPT lấy nhiều energy hơn khi nắng đổi.
**Liên kết tiếng Hàn:** `최대 전력점 추적`.

## 3. perturb-and-observe /pərˈtɜːrb ənd əbˈzɜːrv/
**Part of speech:** noun
**Core meaning (English):** an MPPT method that makes a small operating change and observes whether power rises or falls.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp MPPT đổi nhỏ operating point rồi xem power tăng/giảm.
**Grammar & collocations:** `perturb-and-observe step` — step; `reverse a direction` — đảo.
**Examples:** `Perturb-and-observe oscillated slightly around the panel's maximum point.` → P&O dao động nhẹ quanh điểm max.
**Liên kết tiếng Hàn:** `섭동 관측`.

## 4. incremental conductance /ˌɪnkrəˈmentəl kənˈdʌktəns/
**Part of speech:** noun
**Core meaning (English):** an MPPT method that compares incremental and instantaneous conductance to locate the power maximum.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** MPPT so conductance incremental và tức thời để tìm max power.
**Grammar & collocations:** `incremental-conductance algorithm` — algorithm; `detect a slope reversal` — bắt.
**Examples:** `Incremental conductance responded faster than the basic perturbation method to a cloud edge.` → IC đáp ứng nhanh hơn khi mép mây đi qua.
**Liên kết tiếng Hàn:** `증분 컨덕턴스`.

## 5. dc microgrid /ˌdiː siː ˈmaɪkroʊɡrɪd/
**Part of speech:** noun
**Core meaning (English):** a local power network that distributes direct current among sources, storage, and loads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạng điện cục bộ phân phối DC giữa source, storage và load.
**Grammar & collocations:** `DC-microgrid bus` — bus; `coordinate distributed converters` — phối hợp.
**Examples:** `The dc microgrid connected solar panels, batteries, and LED loads without repeated inversion.` → Microgrid DC nối panel, pin và LED ít đổi điện.
**Liên kết tiếng Hàn:** `직류 마이크로그리드`.

## 6. ac microgrid /ˌeɪ siː ˈmaɪkroʊɡrɪd/
**Part of speech:** noun
**Core meaning (English):** a local alternating-current network that can coordinate generation, storage, and loads independently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạng AC cục bộ phối hợp generation, storage, load độc lập.
**Grammar & collocations:** `AC-microgrid controller` — controller; `island a feeder` — tách.
**Examples:** `The ac microgrid supplied critical loads after the utility feeder opened.` → Microgrid AC cấp load quan trọng sau feeder mở.
**Liên kết tiếng Hàn:** `교류 마이크로그리드`.

## 7. grid-forming inverter /ˈɡrɪd ˌfɔːrmɪŋ ɪnˈvɜːrtər/
**Part of speech:** noun
**Core meaning (English):** an inverter that establishes voltage magnitude and frequency for a local electrical network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** inverter tạo magnitude voltage và frequency cho mạng điện local.
**Grammar & collocations:** `grid-forming-inverter control` — control; `set a voltage reference` — đặt.
**Examples:** `The grid-forming inverter energized the island before other converters connected.` → Inverter grid-forming cấp điện đảo trước converter khác.
**Liên kết tiếng Hàn:** `그리드 형성 인버터`.

## 8. grid-following inverter /ˈɡrɪd ˌfɑːloʊɪŋ ɪnˈvɜːrtər/
**Part of speech:** noun
**Core meaning (English):** an inverter that synchronizes its current injection to an existing grid voltage and frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** inverter đồng bộ dòng inject theo voltage và frequency grid có sẵn.
**Grammar & collocations:** `grid-following-inverter phase` — phase; `lock to a reference` — khóa.
**Examples:** `The grid-following inverter reduced output when the grid voltage became unstable.` → Inverter giảm output khi voltage grid bất ổn.
**Liên kết tiếng Hàn:** `그리드 추종 인버터`.

## 9. islanding detection /ˈaɪləndɪŋ dɪˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** detecting that a local generator continues energizing a section after its utility connection has opened.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phát hiện generator local vẫn cấp điện sau khi nối utility mở.
**Grammar & collocations:** `islanding-detection threshold` — threshold; `trip the intertie` — ngắt.
**Examples:** `Islanding detection disconnected the solar inverter within the required time.` → Detection ngắt inverter đúng thời gian.
**Liên kết tiếng Hàn:** `단독 운전 검출`.

## 10. anti-islanding /ˌænti ˈaɪləndɪŋ/
**Part of speech:** noun
**Core meaning (English):** protection that prevents a distributed generator from continuing to energize an isolated utility circuit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo vệ ngăn generator tiếp tục cấp mạch utility bị cô lập.
**Grammar & collocations:** `anti-islanding requirement` — requirement; `cease energization` — dừng cấp.
**Examples:** `The anti-islanding function passed the utility disconnect test.` → Chức năng anti-islanding qua test ngắt utility.
**Liên kết tiếng Hàn:** `단독 운전 방지`.

## 11. frequency droop /ˈfriːkwənsi druːp/
**Part of speech:** noun
**Core meaning (English):** a control relationship that slightly lowers commanded frequency as active power output rises.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ control giảm nhẹ frequency lệnh khi power active tăng.
**Grammar & collocations:** `frequency-droop coefficient` — coefficient; `share active power` — chia.
**Examples:** `Frequency droop let two inverters share the island load without a fast data link.` → Droop cho hai inverter chia load không cần link nhanh.
**Liên kết tiếng Hàn:** `주파수 드룹`.

## 12. virtual synchronous machine /ˈvɜːrtʃuəl ˈsɪŋkrənəs məˈʃiːn/
**Part of speech:** noun
**Core meaning (English):** inverter control that imitates the inertia and damping behavior of a synchronous generator.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control inverter mô phỏng inertia và damping của generator đồng bộ.
**Grammar & collocations:** `virtual-synchronous-machine inertia` — inertia; `support a frequency dip` — hỗ trợ.
**Examples:** `The virtual synchronous machine supplied synthetic inertia during the load step.` → VSM cung cấp inertia ảo khi load đổi.
**Liên kết tiếng Hàn:** `가상 동기기`.

## 13. battery energy storage /ˈbætəri ˈenərdʒi ˈstɔːrɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a system that stores electrical energy in batteries for later delivery or grid support.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ lưu điện trong pin để cấp sau hoặc hỗ trợ grid.
**Grammar & collocations:** `battery-energy-storage system` — system; `dispatch stored energy` — điều phối.
**Examples:** `Battery energy storage covered the evening peak after solar production fell.` → Storage pin phủ peak tối sau solar giảm.
**Liên kết tiếng Hàn:** `배터리 에너지 저장`.

## 14. state-of-charge estimator /ˌsteɪt əv ˈtʃɑːrdʒ ˈestəˌmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an algorithm or circuit that estimates the fraction of usable charge remaining in a battery.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** algorithm/mạch ước tính phần charge dùng được còn trong pin.
**Grammar & collocations:** `state-of-charge-estimator drift` — drift; `fuse voltage and current` — hợp nhất.
**Examples:** `The state-of-charge estimator corrected itself after a full reference charge.` → Estimator tự chỉnh sau lần sạc chuẩn đầy.
**Liên kết tiếng Hàn:** `충전 상태 추정기`.

## 15. cell balancing /ˈsel ˈbælənsɪŋ/
**Part of speech:** noun
**Core meaning (English):** equalizing the charge levels of cells connected in a battery pack.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cân bằng charge giữa các cell trong pack pin.
**Grammar & collocations:** `cell-balancing threshold` — threshold; `equalize a series string` — cân.
**Examples:** `Cell balancing prevented one high cell from limiting the entire pack.` → Balancing ngăn một cell cao giới hạn cả pack.
**Liên kết tiếng Hàn:** `셀 밸런싱`.

## 16. active balancing /ˈæktɪv ˈbælənsɪŋ/
**Part of speech:** noun
**Core meaning (English):** transferring energy from stronger cells to weaker cells instead of simply dissipating it as heat.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển energy từ cell mạnh sang yếu thay vì đốt thành nhiệt.
**Grammar & collocations:** `active-balancing converter` — converter; `redistribute charge` — phân phối.
**Examples:** `Active balancing recovered charge from the high cell during fast charging.` → Balancing chủ động thu charge từ cell cao.
**Liên kết tiếng Hàn:** `능동 밸런싱`.

## 17. passive balancing /ˈpæsɪv ˈbælənsɪŋ/
**Part of speech:** noun
**Core meaning (English):** reducing a high cell's charge by routing current through a resistor or shunt.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm charge cell cao bằng dòng qua resistor/shunt.
**Grammar & collocations:** `passive-balancing resistor` — resistor; `bleed excess charge` — xả.
**Examples:** `Passive balancing was simple but released the excess energy as heat.` → Balancing thụ động đơn giản nhưng thải energy thành nhiệt.
**Liên kết tiếng Hàn:** `수동 밸런싱`.

## 18. battery management system /ˈbætəri ˈmænɪdʒmənt ˈsɪstəm/
**Part of speech:** noun
**Core meaning (English):** the electronics and software that monitor, protect, balance, and report a battery pack.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** electronics/software giám sát, bảo vệ, cân bằng và báo cáo pack pin.
**Grammar & collocations:** `battery-management-system fault` — fault; `open a pack contactor` — mở.
**Examples:** `The battery management system isolated the pack after a temperature sensor failed.` → BMS cô lập pack sau sensor nhiệt fail.
**Liên kết tiếng Hàn:** `배터리 관리 시스템`.

## 19. bidirectional converter /ˌbaɪdəˈrekʃənəl kənˈvɜːrtər/
**Part of speech:** noun
**Core meaning (English):** a converter that can transfer energy in either direction between two electrical ports.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** converter truyền energy hai chiều giữa hai port điện.
**Grammar & collocations:** `bidirectional-converter mode` — mode; `charge or discharge a bus` — sạc/xả.
**Examples:** `The bidirectional converter charged the battery at night and discharged it at noon.` → Converter sạc ban đêm và xả buổi trưa.
**Liên kết tiếng Hàn:** `양방향 컨버터`.

## 20. dual-active bridge /ˈduːəl ˈæktɪv brɪdʒ/
**Part of speech:** noun
**Core meaning (English):** an isolated bidirectional converter with an actively switched bridge on each side of a transformer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** converter cách ly hai chiều, mỗi phía transformer có bridge switch chủ động.
**Grammar & collocations:** `dual-active-bridge phase shift` — phase shift; `transfer isolated power` — truyền.
**Examples:** `The dual-active bridge moved energy between the battery bus and the DC link.` → DAB chuyển energy giữa bus pin và DC link.
**Liên kết tiếng Hàn:** `듀얼 액티브 브리지`.

## Review in context

A **photovoltaic inverter** uses **maximum power point tracking**, perhaps **perturb-and-observe** or **incremental conductance**, to harvest sunlight. A **dc microgrid** or **ac microgrid** may use a **grid-forming inverter** with a **grid-following inverter**; **islanding detection** and **anti-islanding** protect the utility interface. **frequency droop** and a **virtual synchronous machine** support stability. **battery energy storage** relies on a **state-of-charge estimator**, **cell balancing**, **active balancing**, **passive balancing**, and a **battery management system**. A **bidirectional converter** such as a **dual-active bridge** moves energy both ways.

**Bản dịch tiếng Việt:** **Photovoltaic inverter** dùng **maximum power point tracking**, có thể là **perturb-and-observe** hoặc **incremental conductance**, để thu năng lượng mặt trời. **Dc microgrid** hoặc **ac microgrid** có thể dùng **grid-forming inverter** cùng **grid-following inverter**; **islanding detection** và **anti-islanding** bảo vệ kết nối utility. **frequency droop** và **virtual synchronous machine** hỗ trợ ổn định. **battery energy storage** dựa vào **state-of-charge estimator**, **cell balancing**, **active balancing**, **passive balancing** và **battery management system**. **bidirectional converter** như **dual-active bridge** chuyển energy hai chiều.
