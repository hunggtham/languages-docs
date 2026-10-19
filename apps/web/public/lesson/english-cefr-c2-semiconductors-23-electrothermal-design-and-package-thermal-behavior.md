# C2 Vocabulary — Electrothermal design and package thermal behavior

This lesson follows a powered device from heat generation through package spreading, measurement, control, and lifetime stress.

Flow: **thermal resistance network → junction temperature → transient thermal impedance → electrothermal coupling → thermal interface material → heat spreader → vapor chamber → hot-spot migration → thermal runaway → dynamic thermal management → power density → temperature gradient → thermoreflectance → infrared thermography → thermal time constant → self-heating → electromigration acceleration → thermal cycling → package warpage → thermal design power**.

## 1. thermal resistance network /ˈθɝməl rɪˈzɪstəns ˈnɛtˌwɝk/
**Part of speech:** noun
**Core meaning (English):** an equivalent network representing heat-flow resistance from a device junction through package and cooling structures to the environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạng điện trở nhiệt mô tả đường nhiệt từ junction ra môi trường.
**Grammar & collocations:** `thermal-resistance-network model` — model; `estimate heat-flow resistance` — ước tính.
**Examples:** `The thermal resistance network showed that the lid, not the heatsink, dominated the path.` → Mạng cho thấy lid chi phối đường nhiệt.
**Liên kết tiếng Hàn:** `열 저항 네트워크`.

## 2. junction temperature /ˈdʒʌŋkʃən ˈtɛmprətʃər/
**Part of speech:** noun
**Core meaning (English):** the temperature at the active semiconductor junction where electrical power is converted into heat.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiệt độ ngay vùng junction đang hoạt động.
**Grammar & collocations:** `junction-temperature limit` — limit; `keep the junction below rating` — giữ.
**Examples:** `Junction temperature exceeded the reliability limit during the sustained vector workload.` → Nhiệt junction vượt giới hạn reliability.
**Liên kết tiếng Hàn:** `접합 온도`.

## 3. transient thermal impedance /ˈtrænziənt ˈθɝməl ɪmˈpiːdəns/
**Part of speech:** noun
**Core meaning (English):** the time-dependent opposition to heat flow after a device power change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trở kháng nhiệt thay đổi theo thời gian sau khi power đổi.
**Grammar & collocations:** `transient-thermal-impedance curve` — curve; `model a power pulse` — mô hình.
**Examples:** `Transient thermal impedance predicted a safe short burst but not continuous operation.` → Trở kháng dự đoán burst ngắn an toàn nhưng không phải chạy liên tục.
**Liên kết tiếng Hàn:** `과도 열 임피던스`.

## 4. electrothermal coupling /ɪˌlɛktroʊˈθɝməl ˈkʌplɪŋ/
**Part of speech:** noun
**Core meaning (English):** interaction in which electrical behavior changes temperature and temperature in turn changes electrical behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điện tạo nhiệt, nhiệt lại đổi đặc tính điện.
**Grammar & collocations:** `electrothermal-coupling simulation` — simulation; `solve electrical and thermal fields` — giải.
**Examples:** `Electrothermal coupling shifted the converter's switching loss as the die warmed.` → Coupling làm switching loss đổi khi die nóng.
**Liên kết tiếng Hàn:** `전열 결합`.

## 5. thermal interface material /ˈθɝməl ˈɪntərˌfeɪs məˈtɪriəl/
**Part of speech:** noun
**Core meaning (English):** a material placed between mating surfaces to reduce microscopic air gaps and improve heat transfer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vật liệu lấp khe giữa die/lid/heatsink để truyền nhiệt tốt hơn.
**Grammar & collocations:** `thermal-interface-material thickness` — thickness; `apply interface material` — phủ.
**Examples:** `The thermal interface material aged and increased the package-to-heatsink resistance.` → TIM lão hóa làm tăng trở nhiệt.
**Liên kết tiếng Hàn:** `열 인터페이스 재료`.

## 6. heat spreader /hiːt ˈsprɛdər/
**Part of speech:** noun
**Core meaning (English):** a conductive structure that distributes localized heat over a larger area before it reaches a cooler.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tấm dẫn nhiệt dàn nhiệt hotspot ra diện tích rộng.
**Grammar & collocations:** `heat-spreader plate` — plate; `spread a local heat flux` — dàn.
**Examples:** `The copper heat spreader reduced the peak temperature beneath the compute die.` → Spreader đồng giảm peak nhiệt.
**Liên kết tiếng Hàn:** `히트 스프레더`.

## 7. vapor chamber /ˈveɪpər ˈtʃeɪmbər/
**Part of speech:** noun
**Core meaning (English):** a sealed two-phase heat spreader that transports heat through evaporation and condensation of an internal fluid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** buồng kín dùng bay hơi–ngưng tụ để chuyển nhiệt nhanh.
**Grammar & collocations:** `vapor-chamber spreader` — spreader; `wick liquid to a hot region` — dẫn.
**Examples:** `A vapor chamber moved heat from the central hotspot toward the fin array.` → Vapor chamber chuyển nhiệt từ hotspot ra cánh tản.
**Liên kết tiếng Hàn:** `베이퍼 챔버`.

## 8. hot-spot migration /hɑt spɑt maɪˈɡreɪʃən/
**Part of speech:** noun
**Core meaning (English):** movement of the location of peak temperature as workload, current density, or cooling conditions change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hotspot di chuyển theo workload và đường dòng.
**Grammar & collocations:** `hot-spot-migration map` — map; `track a moving thermal peak` — theo dõi.
**Examples:** `Hot-spot migration followed the active core as the scheduler moved the workload.` → Hotspot chạy theo core đang active.
**Liên kết tiếng Hàn:** `핫스팟 이동`.

## 9. thermal runaway /ˈθɝməl ˈrʌnəˌweɪ/
**Part of speech:** noun
**Core meaning (English):** a positive-feedback condition in which heating increases power or leakage, causing still more heating.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nóng làm leakage/power tăng, lại càng nóng hơn.
**Grammar & collocations:** `thermal-runaway protection` — protection; `trigger a runaway` — kích hoạt.
**Examples:** `Thermal runaway was avoided by cutting gate drive when leakage crossed the protection threshold.` → Bảo vệ cắt gate drive khi leakage vượt ngưỡng.
**Liên kết tiếng Hàn:** `열 폭주`.

## 10. dynamic thermal management /daɪˈnæmɪk ˈθɝməl ˈmænɪdʒmənt/
**Part of speech:** noun
**Core meaning (English):** runtime control of clocks, voltage, workload placement, or cooling to keep temperature within limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ thống tự đổi clock, voltage, workload hoặc cooling theo nhiệt.
**Grammar & collocations:** `dynamic-thermal-management policy` — policy; `throttle a hot core` — giảm tốc.
**Examples:** `Dynamic thermal management shifted background work before applying a frequency cap.` → DTM chuyển work nền trước khi hạ frequency.
**Liên kết tiếng Hàn:** `동적 열 관리`.

## 11. power density /ˈpaʊər ˈdɛnsəti/
**Part of speech:** noun
**Core meaning (English):** power dissipated per unit area or volume, often determining local thermal difficulty.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công suất tập trung trên một diện tích/thể tích.
**Grammar & collocations:** `power-density map` — map; `reduce local power density` — giảm.
**Examples:** `Power density was highest around the stacked memory interface.` → Power density cao nhất ở interface memory xếp chồng.
**Liên kết tiếng Hàn:** `전력 밀도`.

## 12. temperature gradient /ˈtɛmprətʃər ˈɡreɪdiənt/
**Part of speech:** noun
**Core meaning (English):** the spatial rate at which temperature changes across a material or assembly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiệt thay đổi nhanh hay chậm theo khoảng cách.
**Grammar & collocations:** `temperature-gradient stress` — stress; `map a thermal gradient` — lập bản đồ.
**Examples:** `A steep temperature gradient increased mechanical stress at the package corner.` → Gradient dốc tăng stress cơ học ở góc package.
**Liên kết tiếng Hàn:** `온도 구배`.

## 13. thermoreflectance /ˌθɝmoʊrɪˈflɛktəns/
**Part of speech:** noun
**Core meaning (English):** an optical technique that infers surface temperature from temperature-dependent changes in reflectance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo nhiệt qua thay đổi độ phản xạ quang.
**Grammar & collocations:** `thermoreflectance map` — map; `calibrate reflectance sensitivity` — hiệu chuẩn.
**Examples:** `Thermoreflectance revealed a narrow hotspot that the package thermocouple averaged away.` → Thermoreflectance lộ hotspot hẹp mà thermocouple bỏ qua.
**Liên kết tiếng Hàn:** `열 반사율 측정`.

## 14. infrared thermography /ˌɪnfrəˈrɛd θɝˈmɑɡrəfi/
**Part of speech:** noun
**Core meaning (English):** imaging temperature patterns from infrared radiation emitted by a surface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** camera hồng ngoại tạo bản đồ nhiệt bề mặt.
**Grammar & collocations:** `infrared-thermography image` — image; `inspect a board thermally` — kiểm tra.
**Examples:** `Infrared thermography showed uneven cooling across the power module.` → Ảnh nhiệt cho thấy cooling không đều.
**Liên kết tiếng Hàn:** `적외선 열화상`.

## 15. thermal time constant /ˈθɝməl taɪm ˈkɑnstənt/
**Part of speech:** noun
**Core meaning (English):** the characteristic time for a thermal system to approach a new temperature after a change in power.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian đặc trưng để nhiệt tiến tới mức mới.
**Grammar & collocations:** `thermal-time-constant estimate` — estimate; `fit a transient response` — fit.
**Examples:** `The long thermal time constant allowed short bursts without immediate throttling.` → Hằng số dài cho phép burst ngắn không throttle ngay.
**Liên kết tiếng Hàn:** `열 시정수`.

## 16. self-heating /ˌsɛlf ˈhiːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** temperature rise generated by the electrical operation of the device being measured or characterized.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chính dòng đo làm device nóng lên.
**Grammar & collocations:** `self-heating correction` — correction; `remove measurement bias` — loại.
**Examples:** `Self-heating biased the resistance measurement unless the pulse was kept short.` → Self-heating làm lệch phép đo nếu pulse dài.
**Liên kết tiếng Hàn:** `자기 발열`.

## 17. electromigration acceleration /ɪˌlɛktroʊmaɪˈɡreɪʃən əkˌsɛləˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the temperature-driven increase in the rate at which metal atoms move under current stress.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiệt làm electromigration trong metal xảy ra nhanh hơn.
**Grammar & collocations:** `electromigration-acceleration factor` — factor; `project metal lifetime` — dự báo.
**Examples:** `Electromigration acceleration shortened the expected lifetime of the hottest power stripe.` → Acceleration rút ngắn lifetime của stripe nóng.
**Liên kết tiếng Hàn:** `일렉트로마이그레이션 가속`.

## 18. thermal cycling /ˈθɝməl ˈsaɪklɪŋ/
**Part of speech:** noun
**Core meaning (English):** repeated changes between temperature extremes that stress materials, interfaces, and solder connections.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nóng–lạnh lặp lại làm vật liệu và mối nối mỏi.
**Grammar & collocations:** `thermal-cycling qualification` — qualification; `cycle a package between extremes` — chạy chu kỳ.
**Examples:** `Thermal cycling revealed a solder crack that static temperature tests missed.` → Cycling lộ crack hàn mà test tĩnh bỏ sót.
**Liên kết tiếng Hàn:** `열 사이클링`.

## 19. package warpage /ˈpækɪdʒ ˈwɔrpɪdʒ/
**Part of speech:** noun
**Core meaning (English):** unwanted bending or curvature of a package caused by mismatched expansion, materials, or processing stress.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** package cong do vật liệu giãn nở khác nhau.
**Grammar & collocations:** `package-warpage measurement` — measurement; `flatten a warped substrate` — làm phẳng.
**Examples:** `Package warpage reduced solder contact on the far side of the large substrate.` → Cong package làm giảm tiếp xúc hàn phía xa.
**Liên kết tiếng Hàn:** `패키지 휨`.

## 20. thermal design power /ˈθɝməl dɪˈzaɪn ˈpaʊər/
**Part of speech:** noun
**Core meaning (English):** a design target for the sustained heat a cooling solution must dissipate under a defined workload class.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức nhiệt bền vững mà hệ thống tản phải xử lý.
**Grammar & collocations:** `thermal-design-power envelope` — envelope; `size a cooler for TDP` — chọn.
**Examples:** `The thermal design power defined the minimum cooler capacity for the workstation chassis.` → TDP định dung lượng tản tối thiểu.
**Liên kết tiếng Hàn:** `열 설계 전력`.

## Review in context

A **thermal resistance network** predicts **junction temperature** and **transient thermal impedance**; **electrothermal coupling** links electrical loss to heat. A **thermal interface material**, **heat spreader**, or **vapor chamber** moves heat away from a hotspot, while **hot-spot migration**, **thermal runaway**, and **dynamic thermal management** shape runtime behavior. **Power density** and a **temperature gradient** can be mapped with **thermoreflectance** or **infrared thermography**. The **thermal time constant** and **self-heating** affect measurement. Long-term stress includes **electromigration acceleration**, **thermal cycling**, and **package warpage**, all within a **thermal design power** envelope.

**Bản dịch tiếng Việt:** **Thermal resistance network** dự đoán **junction temperature** và **transient thermal impedance**; **electrothermal coupling** nối tổn hao điện với nhiệt. **Thermal interface material**, **heat spreader** hoặc **vapor chamber** dàn nhiệt khỏi hotspot, còn **hot-spot migration**, **thermal runaway** và **dynamic thermal management** chi phối runtime. **Power density** và **temperature gradient** có thể lập bản đồ bằng **thermoreflectance** hoặc **infrared thermography**. **Thermal time constant** và **self-heating** ảnh hưởng phép đo. Stress dài hạn gồm **electromigration acceleration**, **thermal cycling** và **package warpage**, trong envelope **thermal design power**.
