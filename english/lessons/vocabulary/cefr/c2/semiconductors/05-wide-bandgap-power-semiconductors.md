# C2 Vocabulary — Wide-bandgap power semiconductors

This lesson follows high-power switching devices from material choice and voltage limits through conduction, switching behavior, gate control, thermal constraints, and qualification testing.

Flow: **wide-bandgap semiconductor → silicon carbide → gallium nitride → power MOSFET → IGBT → breakdown voltage → on-resistance → switching loss → conduction loss → gate charge → Miller plateau → reverse recovery → body diode → dead time → shoot-through → avalanche rating → thermal impedance → junction temperature → double-pulse test → gate driver**.

## 1. wide-bandgap semiconductor /waɪd ˈbændˌɡæp ˌsɛmɪkənˈdʌktər/
**Part of speech:** noun
**Core meaning (English):** a semiconductor material with a relatively large energy bandgap, enabling high electric-field strength, temperature operation, or switching performance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bán dẫn bandgap rộng; hình dung material chịu điện trường và nhiệt cao hơn silicon thông thường nên phù hợp power electronics.
**Grammar & collocations:** `wide-bandgap material` — vật liệu bandgap rộng; `WBG device` — thiết bị WBG; `power conversion` — chuyển đổi công suất.
**Examples:** `Wide-bandgap semiconductors allow compact converters to switch efficiently at high voltage.` → Bán dẫn bandgap rộng cho phép converter nhỏ gọn switch hiệu quả ở điện áp cao.
**Liên kết tiếng Hàn:** `와이드 밴드갭 반도체`, `광대역갭 반도체`.

## 2. silicon carbide /ˈsɪlɪkən ˈkɑrˌbaɪd/
**Part of speech:** noun
**Core meaning (English):** a wide-bandgap compound semiconductor widely used for high-voltage and high-temperature power devices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** silicon carbide, SiC; hình dung vật liệu power semiconductor cứng, chịu voltage và temperature cao, thường dùng trong EV inverter và industrial power.
**Grammar & collocations:** `SiC MOSFET` — MOSFET SiC; `silicon-carbide wafer` — wafer SiC; `SiC power module` — module công suất SiC.
**Examples:** `The inverter replaced silicon switches with silicon carbide devices to reduce switching loss.` → Inverter thay switch silicon bằng silicon carbide để giảm switching loss.
**Liên kết tiếng Hàn:** `실리콘 카바이드`, `탄화규소`, `SiC`.

## 3. gallium nitride /ˈɡæliəm ˈnaɪtraɪd/
**Part of speech:** noun
**Core meaning (English):** a wide-bandgap compound semiconductor used in fast-switching power electronics and high-frequency devices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gallium nitride, GaN; hình dung transistor switch cực nhanh với parasitic nhỏ, phù hợp charger và converter frequency cao.
**Grammar & collocations:** `GaN transistor` — transistor GaN; `GaN power stage` — power stage GaN; `gallium-nitride device` — thiết bị GaN.
**Examples:** `Gallium nitride enabled the charger to operate at a higher switching frequency with smaller passive components.` → GaN giúp charger hoạt động ở switching frequency cao hơn với passive component nhỏ hơn.
**Liên kết tiếng Hàn:** `질화갈륨`, `GaN`.

## 4. power MOSFET /ˈpaʊər ˈmɑsˌfɛt/
**Part of speech:** noun
**Core meaning (English):** a MOSFET designed to switch or conduct substantial electrical power efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** MOSFET dành cho công suất; hình dung gate điều khiển một “van điện tử” chịu current và voltage lớn.
**Grammar & collocations:** `power-MOSFET switch` — switch MOSFET công suất; `drain current` — dòng drain; `gate-source voltage` — điện áp gate-source.
**Examples:** `The power MOSFET was selected for low conduction loss at the converter's normal current.` → Power MOSFET được chọn vì conduction loss thấp ở dòng hoạt động bình thường của converter.
**Liên kết tiếng Hàn:** `파워 MOSFET`, `전력 MOSFET`.

## 5. IGBT /ˌaɪ dʒiː biː ˈtiː/
**Part of speech:** noun
**Core meaning (English):** an insulated-gate bipolar transistor that combines voltage-controlled gate drive with bipolar current conduction for power switching.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transistor công suất kết hợp gate kiểu MOS với conduction kiểu bipolar; thường mạnh ở voltage/current cao nhưng switch chậm hơn GaN hoặc MOSFET hiện đại.
**Grammar & collocations:** `IGBT module` — module IGBT; `IGBT inverter` — inverter IGBT; `turn-off loss` — loss khi tắt.
**Examples:** `High-power motor drives have long used IGBT modules because they handle large current and voltage efficiently.` → Motor drive công suất lớn từ lâu dùng IGBT vì xử lý current và voltage lớn hiệu quả.
**Liên kết tiếng Hàn:** `IGBT`, `절연 게이트 양극성 트랜지스터`.

## 6. breakdown voltage /ˈbreɪkˌdaʊn ˈvoʊltɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the voltage at which a device junction or insulating region begins conducting uncontrollably or enters electrical breakdown.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** voltage giới hạn trước breakdown; hình dung điện trường tăng tới mức barrier không giữ được nữa.
**Grammar & collocations:** `rated breakdown voltage` — breakdown voltage định mức; `voltage margin` — margin điện áp; `avalanche breakdown` — breakdown avalanche.
**Examples:** `The designer chose a device with sufficient breakdown voltage for transient spikes on the DC bus.` → Designer chọn device có breakdown voltage đủ cao cho transient spike trên DC bus.
**Liên kết tiếng Hàn:** `항복 전압`.

## 7. on-resistance /ɑn rɪˈzɪstəns/
**Part of speech:** noun
**Core meaning (English):** the effective electrical resistance of a transistor while it is turned on and conducting current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resistance khi switch đang ON; càng thấp thì current đi qua càng ít tạo heat do I²R.
**Grammar & collocations:** `low on-resistance` — on-resistance thấp; `RDS(on)` — resistance drain-source khi on; `temperature dependence` — phụ thuộc temperature.
**Examples:** `Lower on-resistance reduced heat generation during continuous conduction.` → On-resistance thấp hơn làm giảm heat khi conduction liên tục.
**Liên kết tiếng Hàn:** `온 저항`, `RDS(on)`.

## 8. switching loss /ˈswɪtʃɪŋ lɔs/
**Part of speech:** noun
**Core meaning (English):** energy dissipated while a power device transitions between its on and off states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loss trong khoảnh khắc switch; khi voltage và current overlap trong transition, energy biến thành heat.
**Grammar & collocations:** `switching-loss reduction` — giảm switching loss; `turn-on loss` — loss lúc bật; `turn-off loss` — loss lúc tắt.
**Examples:** `Faster transitions reduced switching loss but increased sensitivity to parasitic inductance.` → Transition nhanh hơn giảm switching loss nhưng tăng nhạy cảm với parasitic inductance.
**Liên kết tiếng Hàn:** `스위칭 손실`.

## 9. conduction loss /kənˈdʌkʃən lɔs/
**Part of speech:** noun
**Core meaning (English):** electrical power dissipated while a device is in its conducting state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loss khi switch đang dẫn; khác switching loss ở chỗ nó xảy ra trong thời gian ON ổn định.
**Grammar & collocations:** `conduction-loss calculation` — tính conduction loss; `reduce conduction loss` — giảm loss dẫn; `forward drop` — sụt áp thuận.
**Examples:** `At heavy load, conduction loss dominated because current remained high for most of each switching cycle.` → Ở load nặng, conduction loss chiếm ưu thế vì current cao trong phần lớn switching cycle.
**Liên kết tiếng Hàn:** `도통 손실`.

## 10. gate charge /ɡeɪt tʃɑrdʒ/
**Part of speech:** noun
**Core meaning (English):** the amount of electrical charge that must be moved into or out of a transistor gate to change its switching state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng charge phải bơm vào/rút khỏi gate; gate charge lớn hơn thường đòi driver mạnh hơn hoặc switch chậm hơn.
**Grammar & collocations:** `total gate charge` — tổng gate charge; `gate-charge curve` — đường cong gate charge; `drive current` — dòng driver.
**Examples:** `A lower gate charge allowed the device to switch quickly with a modest gate driver.` → Gate charge thấp hơn giúp device switch nhanh với gate driver vừa phải.
**Liên kết tiếng Hàn:** `게이트 전하`.

## 11. Miller plateau /ˈmɪlər plæˈtoʊ/
**Part of speech:** noun
**Core meaning (English):** a relatively flat interval in gate voltage during switching while gate charge is largely changing the drain or collector voltage through capacitance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đoạn gate voltage gần như đứng yên trong transition; energy driver lúc đó chủ yếu đang kéo output voltage thay đổi.
**Grammar & collocations:** `Miller plateau voltage` — voltage plateau; `Miller capacitance` — điện dung Miller; `gate waveform` — waveform gate.
**Examples:** `The engineer measured the Miller plateau to tune the gate resistance and switching speed.` → Kỹ sư đo Miller plateau để chỉnh gate resistance và switching speed.
**Liên kết tiếng Hàn:** `밀러 플래토`, `밀러 구간`.

## 12. reverse recovery /rɪˈvɝs rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** the transient removal of stored charge when a diode switches from forward conduction to reverse blocking.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng current ngược ngắn khi diode vừa chuyển từ dẫn sang chặn; stored charge phải được quét ra trước.
**Grammar & collocations:** `reverse-recovery charge` — charge recovery; `recovery current` — dòng recovery; `soft recovery` — recovery mềm.
**Examples:** `Reverse recovery in the diode increased turn-on stress in the complementary transistor.` → Reverse recovery của diode làm tăng stress turn-on ở transistor còn lại.
**Liên kết tiếng Hàn:** `역회복`, `역회복 전류`.

## 13. body diode /ˈbɑdi ˈdaɪˌoʊd/
**Part of speech:** noun
**Core meaning (English):** an intrinsic diode formed by the internal semiconductor structure of many power MOSFETs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** diode “có sẵn” trong cấu trúc MOSFET; nó tạo một đường current tự nhiên theo chiều nhất định khi transistor off.
**Grammar & collocations:** `body-diode conduction` — conduction qua body diode; `diode drop` — sụt áp diode; `commutation path` — đường commutation.
**Examples:** `During dead time, current briefly commutated through the MOSFET's body diode.` → Trong dead time, current tạm thời chuyển qua body diode của MOSFET.
**Liên kết tiếng Hàn:** `바디 다이오드`.

## 14. dead time /dɛd taɪm/
**Part of speech:** noun
**Core meaning (English):** a deliberately inserted interval during which both complementary switches are off to prevent simultaneous conduction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng nghỉ giữa hai switch; đủ dài để tránh cả hai cùng ON nhưng quá dài lại tăng diode conduction và loss.
**Grammar & collocations:** `dead-time insertion` — chèn dead time; `optimize dead time` — tối ưu dead time; `half bridge` — mạch half bridge.
**Examples:** `The controller inserted dead time between high-side and low-side gate signals.` → Controller chèn dead time giữa gate signal high-side và low-side.
**Liên kết tiếng Hàn:** `데드타임`.

## 15. shoot-through /ˈʃuːt θruː/
**Part of speech:** noun
**Core meaning (English):** an unintended condition in a bridge circuit where opposing switches conduct simultaneously, creating a very low-resistance path across the supply.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hai switch đối diện cùng bật làm nguồn gần như bị short trực tiếp; current có thể tăng cực nhanh.
**Grammar & collocations:** `shoot-through current` — dòng shoot-through; `prevent shoot-through` — ngăn shoot-through; `bridge leg` — nhánh bridge.
**Examples:** `Insufficient dead time allowed shoot-through current to spike through the bridge leg.` → Dead time không đủ làm shoot-through current tăng vọt qua bridge leg.
**Liên kết tiếng Hàn:** `슈트스루`, `동시 도통`.

## 16. avalanche rating /ˈævəˌlæntʃ ˈreɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** a specification describing how much energy or current a power device can tolerate during controlled avalanche breakdown.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức device chịu được khi bị ép vào avalanche; là margin cho transient nhưng không phải lý do để vận hành thường xuyên trong breakdown.
**Grammar & collocations:** `avalanche-energy rating` — rating năng lượng avalanche; `single-pulse avalanche` — avalanche một pulse; `inductive transient` — transient cảm ứng.
**Examples:** `The avalanche rating provided margin for occasional inductive voltage spikes.` → Avalanche rating cung cấp margin cho các voltage spike cảm ứng thỉnh thoảng xuất hiện.
**Liên kết tiếng Hàn:** `애벌랜치 정격`.

## 17. thermal impedance /ˈθɝməl ɪmˈpiːdəns/
**Part of speech:** noun
**Core meaning (English):** a time-dependent measure of how strongly a thermal path resists heat flow under transient or periodic power dissipation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “trở kháng nhiệt” theo thời gian; heat pulse ngắn và heat liên tục không tạo cùng temperature rise.
**Grammar & collocations:** `transient thermal impedance` — thermal impedance transient; `thermal path` — đường truyền nhiệt; `power pulse` — pulse công suất.
**Examples:** `Transient thermal impedance showed that the die could tolerate a short current pulse without exceeding its temperature limit.` → Thermal impedance transient cho thấy die chịu được current pulse ngắn mà không vượt temperature limit.
**Liên kết tiếng Hàn:** `열 임피던스`.

## 18. junction temperature /ˈdʒʌŋkʃən ˈtɛmprətʃər/
**Part of speech:** noun
**Core meaning (English):** the temperature of the active semiconductor junction inside a device rather than the external case or ambient air.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiệt độ thật ở vùng active bên trong die; case có thể mát hơn nhiều so với junction.
**Grammar & collocations:** `maximum junction temperature` — junction temperature tối đa; `Tj` — ký hiệu Tj; `estimate junction temperature` — ước lượng Tj.
**Examples:** `The thermal model predicted junction temperature from measured case temperature and device losses.` → Thermal model dự đoán junction temperature từ case temperature và device loss đo được.
**Liên kết tiếng Hàn:** `접합 온도`.

## 19. double-pulse test /ˈdʌbəl pʌls tɛst/
**Part of speech:** noun
**Core meaning (English):** a power-electronics test that uses two controlled switching pulses to characterize switching energy, current behavior, and commutation under defined conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test hai pulse để “mổ” switching behavior; pulse đầu tạo current, pulse sau đo turn-on/turn-off trong condition kiểm soát.
**Grammar & collocations:** `DPT setup` — setup double-pulse test; `switching waveform` — waveform switching; `measure switching energy` — đo energy switching.
**Examples:** `The double-pulse test revealed excessive voltage overshoot during turn-off.` → Double-pulse test cho thấy voltage overshoot quá lớn khi turn-off.
**Liên kết tiếng Hàn:** `더블 펄스 테스트`.

## 20. gate driver /ɡeɪt ˈdraɪvər/
**Part of speech:** noun
**Core meaning (English):** a circuit that supplies controlled voltage and current to a power transistor gate so it switches at the required speed and timing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch “lái gate”; logic signal nhỏ đi vào, driver cung cấp current đủ mạnh để charge/discharge gate nhanh và an toàn.
**Grammar & collocations:** `isolated gate driver` — driver cách ly; `gate-drive voltage` — voltage drive; `drive strength` — độ mạnh driver.
**Examples:** `The gate driver used separate turn-on and turn-off resistances to control switching behavior.` → Gate driver dùng resistance turn-on và turn-off riêng để kiểm soát switching behavior.
**Liên kết tiếng Hàn:** `게이트 드라이버`.

## Review in context

Modern power converters increasingly use a **wide-bandgap semiconductor** such as **silicon carbide** or **gallium nitride** instead of a conventional silicon **power MOSFET** or **IGBT**. Device selection starts with **breakdown voltage** and **on-resistance**, then balances **switching loss** against **conduction loss**. Dynamic behavior depends strongly on **gate charge** and the **Miller plateau**. In bridge circuits, diode-related effects such as **reverse recovery** and the intrinsic **body diode** influence commutation. Designers insert **dead time** to avoid destructive **shoot-through**, and may consider the device's **avalanche rating** for transient stress. Thermal design uses **thermal impedance** to estimate **junction temperature** under changing loads. A **double-pulse test** validates the real switching waveforms, while the **gate driver** ultimately determines how quickly and cleanly the transistor is commanded on and off.

**Bản dịch tiếng Việt:** Power converter hiện đại ngày càng dùng **wide-bandgap semiconductor** như **silicon carbide** hoặc **gallium nitride** thay cho **power MOSFET** silicon truyền thống hay **IGBT**. Chọn device bắt đầu từ **breakdown voltage** và **on-resistance**, sau đó cân bằng **switching loss** với **conduction loss**. Dynamic behavior phụ thuộc mạnh vào **gate charge** và **Miller plateau**. Trong bridge circuit, các hiệu ứng diode như **reverse recovery** và **body diode** nội tại ảnh hưởng commutation. Designer chèn **dead time** để tránh **shoot-through** phá hủy và có thể xét **avalanche rating** cho transient stress. Thermal design dùng **thermal impedance** để ước lượng **junction temperature** dưới load thay đổi. **Double-pulse test** xác nhận switching waveform thực tế, còn **gate driver** cuối cùng quyết định transistor được bật/tắt nhanh và sạch đến mức nào.