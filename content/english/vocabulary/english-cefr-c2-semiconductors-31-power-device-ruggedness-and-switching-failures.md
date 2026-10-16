# C2 Vocabulary — Power-device ruggedness and switching failures

This lesson follows a power transistor from switching stress through protection, packaging fatigue, and failure-precursor monitoring.

Flow: **avalanche ruggedness → short-circuit withstand → desaturation protection → gate-oxide field stress → dynamic on-resistance → reverse-recovery overshoot → switching safe operating area → parasitic turn-on → gate-loop inductance → common-source inductance → dv/dt immunity → di/dt stress → power-cycling lifetime → bond-wire lift-off → die-attach void → thermal impedance extraction → junction-to-case calibration → failure precursor monitor → power-device ruggedness → electrical overstress margin**.

## 1. avalanche ruggedness /ˈævəˌlæntʃ ˈrʌɡɪdnəs/
**Part of speech:** noun
**Core meaning (English):** the ability of a power device to absorb avalanche energy without destructive failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng chịu năng lượng avalanche mà không hỏng.
**Grammar & collocations:** `avalanche-ruggedness rating` — rating; `absorb inductive energy` — hấp thụ.
**Examples:** `Avalanche ruggedness limited the maximum inductive load during the clamp test.` → Ruggedness giới hạn tải cảm ứng.
**Liên kết tiếng Hàn:** `애벌랜치 견고성`.

## 2. short-circuit withstand /ʃɔrt ˈsɝkət wɪðˈstænd/
**Part of speech:** noun
**Core meaning (English):** the time and energy a power device can tolerate while carrying abnormal short-circuit current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian/ năng lượng chịu được khi chập.
**Grammar & collocations:** `short-circuit-withstand time` — time; `survive a fault pulse` — chịu.
**Examples:** `Short-circuit withstand fell at high junction temperature and high gate bias.` → Withstand giảm ở nhiệt và bias cao.
**Liên kết tiếng Hàn:** `단락 내량`.

## 3. desaturation protection /diːˌsætʃəˈreɪʃən prəˈtɛkʃən/
**Part of speech:** noun
**Core meaning (English):** protection that detects abnormal voltage across a conducting power switch and turns it off before damage accumulates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phát hiện switch không bão hòa đúng và ngắt để bảo vệ.
**Grammar & collocations:** `desaturation-protection delay` — delay; `blank a switching transient` — che.
**Examples:** `Desaturation protection interrupted the gate drive after the load shorted.` → Bảo vệ ngắt gate khi tải chập.
**Liên kết tiếng Hàn:** `디새추레이션 보호`.

## 4. gate-oxide field stress /ɡeɪt ˈɑksaɪd fiːld strɛs/
**Part of speech:** noun
**Core meaning (English):** electric-field loading imposed on the gate dielectric during high-voltage or high-temperature operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điện trường tác động lên gate oxide.
**Grammar & collocations:** `gate-oxide-field-stress test` — test; `limit dielectric field` — giới hạn.
**Examples:** `Gate-oxide field stress increased during overshoot at the end of the cable.` → Stress oxide tăng khi overshoot.
**Liên kết tiếng Hàn:** `게이트 산화막 전계 스트레스`.

## 5. dynamic on-resistance /daɪˈnæmɪk ɑn rɪˈzɪstəns/
**Part of speech:** noun
**Core meaning (English):** the resistance measured during or immediately after switching, which may exceed the static on-resistance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điện trở khi switching cao hơn giá trị tĩnh.
**Grammar & collocations:** `dynamic-on-resistance drift` — drift; `measure a switched conduction path` — đo.
**Examples:** `Dynamic on-resistance rose after the device experienced repeated high-field pulses.` → R động tăng sau pulse field cao.
**Liên kết tiếng Hàn:** `동적 온 저항`.

## 6. reverse-recovery overshoot /rɪˈvɝs rɪˈkʌvəri ˈoʊvərˌʃuːt/
**Part of speech:** noun
**Core meaning (English):** an unwanted voltage or current excursion caused when a diode or switch recovers from conduction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** overshoot do diode hồi phục ngược.
**Grammar & collocations:** `reverse-recovery-overshoot waveform` — waveform; `damp a commutation spike` — giảm.
**Examples:** `Reverse-recovery overshoot exceeded the drain rating during hard commutation.` → Overshoot vượt rating drain.
**Liên kết tiếng Hàn:** `역회복 오버슈트`.

## 7. switching safe operating area /ˈswɪtʃɪŋ seɪf ˈɑpəˌreɪtɪŋ ˈɛriə/
**Part of speech:** noun
**Core meaning (English):** the combinations of voltage, current, time, and temperature under which a device can switch safely.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng kết hợp V/I/time/temp mà switch an toàn.
**Grammar & collocations:** `switching-safe-operating-area chart` — chart; `stay inside the boundary` — giữ.
**Examples:** `The switching safe operating area narrowed when the gate resistor was reduced.` → SOA hẹp khi giảm gate resistor.
**Liên kết tiếng Hàn:** `스위칭 안전 동작 영역`.

## 8. parasitic turn-on /ˌpærəˈsɪtɪk tɝn ɑn/
**Part of speech:** noun
**Core meaning (English):** unintended activation of a power device through parasitic capacitance or inductive coupling.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** device tự bật do coupling ký sinh.
**Grammar & collocations:** `parasitic-turn-on event` — event; `clamp the gate transient` — kẹp.
**Examples:** `Parasitic turn-on caused simultaneous conduction in the half bridge.` → Turn-on ký sinh gây dẫn đồng thời.
**Liên kết tiếng Hàn:** `기생 턴온`.

## 9. gate-loop inductance /ɡeɪt luːp ɪnˈdʌktəns/
**Part of speech:** noun
**Core meaning (English):** inductance in the gate-drive current path that creates voltage error and switching ringing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cảm kháng đường gate gây ringing/error.
**Grammar & collocations:** `gate-loop-inductance extraction` — extraction; `shorten the drive loop` — rút.
**Examples:** `Gate-loop inductance slowed turn-on and produced a false desaturation trip.` → Inductance làm chậm turn-on và gây trip giả.
**Liên kết tiếng Hàn:** `게이트 루프 인덕턴스`.

## 10. common-source inductance /ˈkɑmən sɔrs ɪnˈdʌktəns/
**Part of speech:** noun
**Core meaning (English):** inductance shared by the power-current path and the gate-return path of a transistor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** inductance chung giữa dòng nguồn và hồi gate.
**Grammar & collocations:** `common-source-inductance effect` — effect; `separate power and drive returns` — tách.
**Examples:** `Common-source inductance reduced effective gate voltage during the current edge.` → Inductance làm giảm gate voltage hiệu dụng.
**Liên kết tiếng Hàn:** `공통 소스 인덕턴스`.

## 11. dv/dt immunity /diː viː baɪ diː tiː ɪˈmjuːnəti/
**Part of speech:** noun
**Core meaning (English):** ability to avoid false activation or malfunction during rapid voltage change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chịu được dV/dt nhanh mà không bật sai.
**Grammar & collocations:** `dv/dt-immunity rating` — rating; `reject a capacitive transient` — loại.
**Examples:** `The gate network improved dv/dt immunity during the opposite switch's turn-on.` → Mạng gate tăng miễn nhiễm dV/dt.
**Liên kết tiếng Hàn:** `dv/dt 내성`.

## 12. di/dt stress /diː aɪ baɪ diː tiː strɛs/
**Part of speech:** noun
**Core meaning (English):** electrical and mechanical stress produced by a rapid change in current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stress do dòng đổi rất nhanh.
**Grammar & collocations:** `di/dt-stress profile` — profile; `limit current slew` — giới hạn.
**Examples:** `Di/dt stress excited package resonance in the long busbar assembly.` → Stress di/dt kích resonance package.
**Liên kết tiếng Hàn:** `di/dt 스트레스`.

## 13. power-cycling lifetime /ˈpaʊər ˈsaɪklɪŋ ˈlaɪftaɪm/
**Part of speech:** noun
**Core meaning (English):** expected service duration under repeated changes between powered and unpowered or high- and low-load states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lifetime dưới chu kỳ power lặp.
**Grammar & collocations:** `power-cycling-lifetime model` — model; `cycle a module thermally` — chạy chu kỳ.
**Examples:** `Power-cycling lifetime was limited by solder fatigue rather than silicon wearout.` → Lifetime bị giới hạn bởi mỏi solder.
**Liên kết tiếng Hàn:** `전력 사이클링 수명`.

## 14. bond-wire lift-off /bɑnd waɪər lɪft ɔf/
**Part of speech:** noun
**Core meaning (English):** separation of a bond wire from its pad or metallized surface under thermal, mechanical, or electrical stress.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dây bond bong khỏi pad.
**Grammar & collocations:** `bond-wire-lift-off failure` — failure; `inspect heel cracking` — kiểm tra.
**Examples:** `Bond-wire lift-off increased the module's conduction resistance before an open circuit formed.` → Lift-off làm tăng resistance trước khi hở.
**Liên kết tiếng Hàn:** `본드 와이어 박리`.

## 15. die-attach void /daɪ əˈtætʃ vɔɪd/
**Part of speech:** noun
**Core meaning (English):** an unfilled region in the material joining a semiconductor die to its substrate or baseplate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng rỗng trong lớp gắn die.
**Grammar & collocations:** `die-attach-void fraction` — fraction; `inspect bond coverage` — kiểm tra.
**Examples:** `A die-attach void raised thermal resistance beneath the hottest switching cell.` → Void làm tăng trở nhiệt dưới cell nóng.
**Liên kết tiếng Hàn:** `다이 부착 보이드`.

## 16. thermal impedance extraction /ˈθɝməl ɪmˈpiːdəns ɪkˈstrækʃən/
**Part of speech:** noun
**Core meaning (English):** determining a device's transient or steady heat-flow parameters from electrical or thermal measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trích xuất tham số truyền nhiệt từ phép đo.
**Grammar & collocations:** `thermal-impedance-extraction method` — method; `fit a transient network` — khớp.
**Examples:** `Thermal impedance extraction separated package resistance from the heatsink contribution.` → Extraction tách trở nhiệt package khỏi heatsink.
**Liên kết tiếng Hàn:** `열 임피던스 추출`.

## 17. junction-to-case calibration /ˈdʒʌŋkʃən tə keɪs ˌkæləˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** calibration connecting active junction temperature to a measurable device-case temperature under defined mounting conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** liên hệ nhiệt junction với nhiệt case đo được.
**Grammar & collocations:** `junction-to-case-calibration fixture` — fixture; `correlate electrical and thermal readings` — tương quan.
**Examples:** `Junction-to-case calibration corrected the lifetime model for the actual interface material.` → Calibration sửa model lifetime.
**Liên kết tiếng Hàn:** `접합-케이스 교정`.

## 18. failure precursor monitor /ˈfeɪljər priːˈkɝsər ˈmɑnətər/
**Part of speech:** noun
**Core meaning (English):** a measurement that detects an early change associated with an approaching device failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** monitor phát hiện dấu hiệu trước khi hỏng.
**Grammar & collocations:** `failure-precursor-monitor signal` — signal; `trend on-state resistance` — theo dõi.
**Examples:** `The failure precursor monitor detected rising leakage before the module failed its switching test.` → Monitor phát hiện leakage tăng trước khi fail.
**Liên kết tiếng Hàn:** `고장 전조 모니터`.

## 19. power-device ruggedness /ˈpaʊər dɪˈvaɪs ˈrʌɡɪdnəs/
**Part of speech:** noun
**Core meaning (English):** the ability of a power semiconductor and package to survive specified electrical, thermal, and mechanical abuse.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sức chịu đựng tổng thể của power device.
**Grammar & collocations:** `power-device-ruggedness qualification` — qualification; `survive fault conditions` — chịu.
**Examples:** `Power-device ruggedness improved after the gate clamp and package layout were revised.` → Ruggedness tăng sau sửa clamp và layout.
**Liên kết tiếng Hàn:** `전력 소자 견고성`.

## 20. electrical overstress margin /ɪˈlɛktrɪkəl ˈoʊvərˌstrɛs ˈmɑrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** the separation between expected electrical transients and the limit at which a device suffers damage or loss of specification.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách giữa transient thực tế và giới hạn hỏng.
**Grammar & collocations:** `electrical-overstress-margin budget` — budget; `reserve clamp headroom` — chừa.
**Examples:** `Electrical overstress margin disappeared when cable inductance doubled during the fault test.` → Margin mất khi inductance cáp tăng gấp đôi.
**Liên kết tiếng Hàn:** `전기 과응력 마진`.

## Review in context

**Avalanche ruggedness**, **short-circuit withstand**, and **desaturation protection** define fault survival, while **gate-oxide field stress**, **dynamic on-resistance**, and **reverse-recovery overshoot** shape switching risk. The **switching safe operating area**, **parasitic turn-on**, **gate-loop inductance**, **common-source inductance**, **dv/dt immunity**, and **di/dt stress** govern layout. **Power-cycling lifetime**, **bond-wire lift-off**, **die-attach void**, **thermal impedance extraction**, and **junction-to-case calibration** support a **failure precursor monitor**, **power-device ruggedness**, and **electrical overstress margin**.

**Bản dịch tiếng Việt:** **Avalanche ruggedness**, **short-circuit withstand** và **desaturation protection** định nghĩa khả năng chịu lỗi, còn **gate-oxide field stress**, **dynamic on-resistance** và **reverse-recovery overshoot** định hình rủi ro switching. **Switching safe operating area**, **parasitic turn-on**, **gate-loop inductance**, **common-source inductance**, **dv/dt immunity** và **di/dt stress** chi phối layout. **Power-cycling lifetime**, **bond-wire lift-off**, **die-attach void**, **thermal impedance extraction** và **junction-to-case calibration** hỗ trợ **failure precursor monitor**, **power-device ruggedness** và **electrical overstress margin**.
