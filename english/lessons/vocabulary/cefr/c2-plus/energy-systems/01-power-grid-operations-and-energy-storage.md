# C2+ Vocabulary — Power-grid operations and energy storage

This lesson follows how grid operators balance supply, demand, reliability, congestion, and storage across an increasingly inverter-based power system. The network is **dispatchable generation → merit-order dispatch → unit commitment → ramp rate → spinning reserve → non-spinning reserve → ancillary service → inertia response → synthetic inertia → black start capability → voltage ride-through → reactive power support → congestion rent → nodal pricing → locational marginal price → transmission constraint → redispatch cost → curtailment rate → negative electricity price → capacity market**.

## 1. dispatchable generation /dɪˈspætʃəbəl ˌdʒɛnəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** electricity generation that can be scheduled or adjusted by an operator within a useful time range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nguồn điện có thể “gọi lên/gọi xuống” theo lệnh, khác với output phụ thuộc gió hoặc nắng.
**Grammar & collocations:** `firm dispatchable generation` — generation; `dispatchable resource` — resource; `schedule generation` — schedule.
**Examples:** `Dispatchable generation covered the evening demand after solar output declined.` → Dispatchable generation bù evening demand sau khi solar output giảm.
**Liên kết tiếng Hàn:** `급전 가능 발전` — dispatchable generation.

## 2. merit-order dispatch /ˈmɛrɪt ˈɔrdər dɪˈspætʃ/
**Part of speech:** noun
**Core meaning (English):** scheduling generators from the lowest short-run marginal cost upward until demand is met.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xếp nguồn theo marginal cost từ thấp đến cao, gọi nguồn rẻ trước rồi mới đến nguồn đắt.
**Grammar & collocations:** `merit-order dispatch curve` — curve; `merit-order ranking` — ranking; `dispatch by merit order` — dispatch.
**Examples:** `Merit-order dispatch placed the efficient gas unit ahead of the older peaker.` → Merit-order dispatch xếp gas unit hiệu quả trước peaker cũ.
**Liên kết tiếng Hàn:** `급전 우선순위` — merit-order dispatch.

## 3. unit commitment /ˈjuːnɪt kəˈmɪtmənt/
**Part of speech:** noun
**Core meaning (English):** the optimization of which generating units should be on or off over a planning horizon, including startup, shutdown, and minimum-run constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyết định tổ máy nào bật/tắt trước, không chỉ chọn output tức thời mà còn tính startup và minimum time.
**Grammar & collocations:** `security-constrained unit commitment` — commitment; `unit-commitment schedule` — schedule; `solve the commitment problem` — solve.
**Examples:** `Unit commitment kept a slower generator online because restarting it would take hours.` → Unit commitment giữ generator chậm online vì restart mất nhiều giờ.
**Liên kết tiếng Hàn:** `발전기 기동 계획` — unit commitment.

## 4. ramp rate /ræmp reɪt/
**Part of speech:** noun
**Core meaning (English):** the maximum rate at which a generator, load, or storage device can increase or decrease its power output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ “đạp ga/phanh” của resource; ramp rate cao giúp đuổi theo demand thay đổi nhanh.
**Grammar & collocations:** `fast ramp rate` — rate nhanh; `ramp-rate limit` — limit; `increase output at a rate` — increase.
**Examples:** `The battery's high ramp rate stabilized the sudden loss of wind power.` → Ramp rate cao của battery ổn định sự mất wind power đột ngột.
**Liên kết tiếng Hàn:** `램프율` — ramp rate.

## 5. spinning reserve /ˈspɪnɪŋ rɪˈzɜrv/
**Part of speech:** noun
**Core meaning (English):** unused capacity from generators that are already synchronized and can increase output quickly after a disturbance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công suất dự phòng đang “quay sẵn” trong grid, nên phản ứng nhanh mà không cần khởi động từ zero.
**Grammar & collocations:** `maintain spinning reserve` — maintain; `spinning-reserve requirement` — requirement; `deploy reserve` — deploy.
**Examples:** `The operator held extra spinning reserve during the storm forecast.` → Operator giữ thêm spinning reserve khi dự báo bão.
**Liên kết tiếng Hàn:** `회전 예비력` — spinning reserve.

## 6. non-spinning reserve /nɑn ˈspɪnɪŋ rɪˈzɜrv/
**Part of speech:** noun
**Core meaning (English):** standby capacity that is not currently synchronized but can become available within a specified response time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reserve chưa “quay” hoặc load có thể giảm, gọi sau spinning reserve nhưng trước khi thiếu điện kéo dài.
**Grammar & collocations:** `non-spinning-reserve product` — product; `activate non-spinning reserve` — activate; `ten-minute reserve` — reserve.
**Examples:** `Non-spinning reserve supplied the next layer of response after the first units reached their limits.` → Non-spinning reserve cung cấp lớp response tiếp theo sau khi unit đầu chạm limit.
**Liên kết tiếng Hàn:** `비회전 예비력` — non-spinning reserve.

## 7. ancillary service /ˈænsəˌlɛri ˈsɜrvɪs/
**Part of speech:** noun
**Core meaning (English):** a grid service that supports reliability, frequency, voltage, balancing, or restoration beyond simply producing energy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dịch vụ “giữ hệ thống khỏe”: frequency, voltage, reserve và black start chứ không chỉ bán kWh.
**Grammar & collocations:** `ancillary-service market` — market; `procure ancillary services` — procure; `frequency ancillary service` — service.
**Examples:** `The battery earned revenue by providing an ancillary service during fast frequency events.` → Battery kiếm revenue bằng ancillary service trong fast frequency event.
**Liên kết tiếng Hàn:** `보조 서비스` — ancillary service.

## 8. inertia response /ɪˈnɜrʒə rɪˈspɑns/
**Part of speech:** noun
**Core meaning (English):** the immediate resistance of a power system's rotating machines to a sudden change in frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rotor lớn tự nhiên “chống giật” khi imbalance xảy ra, làm frequency không tụt quá nhanh.
**Grammar & collocations:** `synchronous inertia response` — response; `inertia-response time` — time; `provide inertial support` — provide.
**Examples:** `Loss of large synchronous machines reduced the system's inertia response.` → Mất synchronous machine lớn làm giảm inertia response của system.
**Liên kết tiếng Hàn:** `관성 응답` — inertia response.

## 9. synthetic inertia /sɪnˈθɛtɪk ɪˈnɜrʒə/
**Part of speech:** noun
**Core meaning (English):** rapid active power response from an inverter, wind turbine, or storage device designed to imitate the stabilizing effect of physical rotational inertia.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** inverter cảm nhận frequency change rồi inject power nhanh như “giả lập” inertia của rotor.
**Grammar & collocations:** `synthetic-inertia control` — control; `synthetic-inertia response` — response; `enable synthetic inertia` — enable.
**Examples:** `Synthetic inertia from the wind plant slowed the initial frequency decline.` → Synthetic inertia từ wind plant làm chậm frequency decline ban đầu.
**Liên kết tiếng Hàn:** `합성 관성` — synthetic inertia.

## 10. black start capability /blæk stɑrt ˌkeɪpəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability of a generating resource to start without receiving power from the external grid and help restore a blackout system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng “khởi động đen”: tự bật khi grid chết, rồi giúp dựng lại các phần khác.
**Grammar & collocations:** `black-start capability` — capability; `black-start resource` — resource; `restore the grid` — restore.
**Examples:** `The hydro plant's black start capability made it central to the restoration plan.` → Black start capability của hydro plant khiến nó trung tâm trong restoration plan.
**Liên kết tiếng Hàn:** `무정전 기동 능력` — black start capability.

## 11. voltage ride-through /ˈvoʊltɪdʒ raɪd θruː/
**Part of speech:** noun
**Core meaning (English):** the ability of a generator or inverter to remain connected and support the grid during a temporary voltage disturbance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết bị không “rơi khỏi grid” ngay khi voltage sag/swell, mà ride through và hỗ trợ recovery.
**Grammar & collocations:** `low-voltage ride-through` — LVRT; `ride-through requirement` — requirement; `voltage fault` — fault.
**Examples:** `The inverter passed the voltage ride-through test during a simulated fault.` → Inverter pass voltage ride-through test trong fault mô phỏng.
**Liên kết tiếng Hàn:** `전압 관통 운전` — voltage ride-through.

## 12. reactive power support /riˈæktɪv ˈpaʊər səˈpɔrt/
**Part of speech:** noun
**Core meaning (English):** the provision or absorption of reactive power to help maintain voltage within a power network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resource không chỉ đưa real power mà còn “đỡ” voltage bằng reactive power.
**Grammar & collocations:** `dynamic reactive-power support` — support; `provide voltage support` — provide; `reactive-power capability` — capability.
**Examples:** `The inverter supplied reactive power support when the feeder voltage fell.` → Inverter cung cấp reactive power support khi voltage feeder giảm.
**Liên kết tiếng Hàn:** `무효전력 지원` — reactive power support.

## 13. congestion rent /kənˈdʒɛstʃən rɛnt/
**Part of speech:** noun
**Core meaning (English):** the difference between the payments made by buyers and received by generators when a transmission constraint creates different prices across locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “rent” phát sinh vì bottleneck transmission khiến giá hai node lệch nhau.
**Grammar & collocations:** `transmission-congestion rent` — rent; `allocate congestion rent` — allocate; `congestion-revenue right` — right.
**Examples:** `The market used congestion rent to fund transmission rights and grid upgrades.` → Market dùng congestion rent để finance transmission right và grid upgrade.
**Liên kết tiếng Hàn:** `혼잡 임대료` — congestion rent.

## 14. nodal pricing /ˈnoʊdəl ˈpraɪsɪŋ/
**Part of speech:** noun
**Core meaning (English):** electricity pricing that assigns a price to each network node based on local supply, demand, losses, and transmission constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi node có giá riêng thay vì một giá phẳng cho cả grid, để phản ánh physical bottleneck.
**Grammar & collocations:** `nodal-pricing market` — market; `nodal price signal` — signal; `settle at nodal prices` — settle.
**Examples:** `Nodal pricing made the constrained southern node more expensive than the generator-rich north.` → Nodal pricing làm node south bị constraint đắt hơn north nhiều generator.
**Liên kết tiếng Hàn:** `노달 가격제` — nodal pricing.

## 15. locational marginal price /loʊˈkeɪʃənəl ˈmɑrdʒənəl praɪs/
**Part of speech:** noun
**Core meaning (English):** the marginal cost of serving one additional unit of electricity at a specific location, including energy, losses, and congestion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá của “1 kWh thêm ở node này ngay lúc này”, đã tính energy + loss + bottleneck.
**Grammar & collocations:** `locational-marginal-price signal` — signal; `LMP forecast` — forecast; `compare nodal prices` — compare.
**Examples:** `The locational marginal price spiked when the transmission line reached its thermal limit.` → Locational marginal price spike khi transmission line chạm thermal limit.
**Liên kết tiếng Hàn:** `지역 한계 가격` — locational marginal price.

## 16. transmission constraint /trænzˈmɪʃən kənˈstreɪnt/
**Part of speech:** noun
**Core meaning (English):** a physical or operational limit on how much power can flow through a transmission element or interface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “cổ chai” của grid: line, transformer hoặc stability limit không cho power flow thêm.
**Grammar & collocations:** `binding transmission constraint` — constraint binding; `relieve a constraint` — relieve; `constraint violation` — violation.
**Examples:** `A transmission constraint prevented surplus wind from reaching the coastal load center.` → Transmission constraint ngăn surplus wind tới load center ven biển.
**Liên kết tiếng Hàn:** `송전 제약` — transmission constraint.

## 17. redispatch cost /ˌriːdɪˈspætʃ kɔst/
**Part of speech:** noun
**Core meaning (English):** the additional cost of changing generator outputs away from the economically preferred dispatch to respect network or security constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** operator phải “đảo lịch” nguồn rẻ/đắt vì line constraint, tạo cost extra.
**Grammar & collocations:** `constraint-induced redispatch cost` — cost; `calculate redispatch` — calculate; `redispatch compensation` — compensation.
**Examples:** `Redispatch cost rose when the planned solar hub exceeded the export capability.` → Redispatch cost tăng khi solar hub vượt export capability.
**Liên kết tiếng Hàn:** `재급전 비용` — redispatch cost.

## 18. curtailment rate /kərˈteɪlmənt reɪt/
**Part of speech:** noun
**Core meaning (English):** the share of potential generation or demand that is deliberately reduced because of congestion, oversupply, reliability, or market conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần output có thể tạo nhưng bị “cắt” khỏi grid vì không dùng hoặc không truyền được.
**Grammar & collocations:** `renewable curtailment rate` — rate; `curtailment event` — event; `reduce curtailment` — reduce.
**Examples:** `Battery charging lowered the wind curtailment rate during midday oversupply.` → Battery charging giảm curtailment rate của wind trong oversupply buổi trưa.
**Liên kết tiếng Hàn:** `출력 제한율` — curtailment rate.

## 19. negative electricity price /ˈnɛɡətɪv ɪˌlɛkˈtrɪsəti praɪs/
**Part of speech:** noun
**Core meaning (English):** a market price below zero at which some generators effectively pay to remain online or deliver power.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** supply quá dư hoặc unit không dễ tắt khiến giá “âm”; người phát có thể trả tiền để tránh shutdown.
**Grammar & collocations:** `negative-price interval` — interval; `negative electricity-price event` — event; `trade at negative prices` — trade.
**Examples:** `A negative electricity price signaled severe oversupply while inflexible plants stayed online.` → Negative electricity price báo oversupply nghiêm trọng khi plant khó tắt vẫn online.
**Liên kết tiếng Hàn:** `마이너스 전력 가격` — negative electricity price.

## 20. capacity market /kəˈpæsəti ˈmɑrkɪt/
**Part of speech:** noun
**Core meaning (English):** a market that pays resources for maintaining future availability or dependable capacity, separate from payment for energy actually produced.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** market trả cho “sẵn sàng có mặt” trong giờ căng thẳng, không chỉ trả kWh đã phát.
**Grammar & collocations:** `capacity-market auction` — auction; `capacity obligation` — obligation; `procure reliable capacity` — procure.
**Examples:** `The capacity market procured firm resources for extreme winter demand.` → Capacity market procure firm resources cho winter demand cực đại.
**Liên kết tiếng Hàn:** `용량 시장` — capacity market.

## Review in context

Grid operators combine **dispatchable generation** with **merit-order dispatch** and **unit commitment** to meet demand while respecting each resource's **ramp rate**. **Spinning reserve** and **non-spinning reserve** provide layers of response, while an **ancillary service** may deliver fast **inertia response** or **synthetic inertia**. Restoration depends on **black start capability**; connected inverters must provide **voltage ride-through** and **reactive power support**. When a **transmission constraint** binds, **nodal pricing** produces a different **locational marginal price** at each node, with **congestion rent** and **redispatch cost** reflecting the bottleneck. Renewable oversupply can raise the **curtailment rate** or create a **negative electricity price**. A **capacity market** separately rewards resources for being available during reliability emergencies.

**Bản dịch tiếng Việt:**

Grid operator kết hợp **dispatchable generation** với **merit-order dispatch** và **unit commitment** để đáp ứng demand trong giới hạn **ramp rate** của từng resource. **Spinning reserve** và **non-spinning reserve** tạo các lớp response, còn **ancillary service** có thể cung cấp **inertia response** hoặc **synthetic inertia** nhanh. Restoration phụ thuộc **black start capability**; inverter đã kết nối phải cung cấp **voltage ride-through** và **reactive power support**. Khi **transmission constraint** binding, **nodal pricing** tạo **locational marginal price** khác nhau ở từng node, còn **congestion rent** và **redispatch cost** phản ánh bottleneck. Renewable oversupply có thể làm tăng **curtailment rate** hoặc tạo **negative electricity price**. **Capacity market** riêng biệt trả cho resource sẵn sàng trong emergency reliability.
