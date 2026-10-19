# C2 Vocabulary — Grid power quality and harmonic control

This lesson follows a converter connected to a real grid through impedance, disturbances, sequence components, and reactive-power equipment.

Flow: **grid impedance → harmonic current → power quality → ride-through voltage → fault ride-through → voltage sag → voltage swell → flicker index → negative sequence → positive sequence → zero sequence → unbalance factor → reactive power compensation → static var compensator → static synchronous compensator → active front end → power quality analyzer → harmonic filter → tuned filter → detuned filter**.

## 1. grid impedance /ɡrɪd ɪmˈpiːdəns/
**Part of speech:** noun
**Core meaning (English):** the effective resistance and reactance seen by equipment connected to an electrical grid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resistance và reactance hiệu dụng mà thiết bị thấy khi nối grid.
**Grammar & collocations:** `grid-impedance estimate` — estimate; `sweep a network condition` — quét.
**Examples:** `The controller retuned its filter after the grid impedance changed at the feeder.` → Controller chỉnh filter sau đổi impedance grid.
**Liên kết tiếng Hàn:** `계통 임피던스`.

## 2. harmonic current /hɑːrˈmɑːnɪk ˈkɜːrənt/
**Part of speech:** noun
**Core meaning (English):** current at integer multiples of the fundamental power frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dòng ở bội số nguyên của frequency nguồn cơ bản.
**Grammar & collocations:** `harmonic-current limit` — limit; `inject a fifth harmonic` — bơm.
**Examples:** `The rectifier produced harmonic current that heated the neutral conductor.` → Chỉnh lưu tạo dòng harmonic làm nóng dây trung tính.
**Liên kết tiếng Hàn:** `고조파 전류`.

## 3. power quality /ˈpaʊər ˈkwɑːləti/
**Part of speech:** noun
**Core meaning (English):** how closely an electrical supply maintains acceptable voltage, frequency, waveform, and continuity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức nguồn giữ voltage, frequency, waveform và continuity trong giới hạn tốt.
**Grammar & collocations:** `power-quality report` — report; `monitor a feeder` — giám sát.
**Examples:** `The hospital monitored power quality because sensitive imaging equipment shared the feeder.` → Bệnh viện monitor quality vì thiết bị ảnh nhạy dùng chung feeder.
**Liên kết tiếng Hàn:** `전력 품질`.

## 4. ride-through voltage /ˈraɪd θruː ˈvoʊltɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a voltage range or profile that equipment can tolerate without shutting down during a disturbance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** range/profile voltage thiết bị chịu được mà không tắt khi disturbance.
**Grammar & collocations:** `ride-through-voltage curve` — curve; `maintain operation through a dip` — duy trì.
**Examples:** `The drive met the ride-through voltage requirement during a short feeder sag.` → Drive đạt yêu cầu voltage ride-through khi feeder sụt ngắn.
**Liên kết tiếng Hàn:** `순간 전압 유지`.

## 5. fault ride-through /fɔːlt raɪd θruː/
**Part of speech:** noun
**Core meaning (English):** continuing controlled operation during a specified grid fault instead of disconnecting immediately.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tiếp tục chạy có kiểm soát trong fault grid quy định thay vì ngắt ngay.
**Grammar & collocations:** `fault-ride-through profile` — profile; `inject reactive current` — bơm.
**Examples:** `Fault ride-through kept the wind converter connected while the voltage recovered.` → Ride-through giữ converter gió nối khi voltage hồi.
**Liên kết tiếng Hàn:** `고장 관통 운전`.

## 6. voltage sag /ˈvoʊltɪdʒ sæɡ/
**Part of speech:** noun
**Core meaning (English):** a short reduction in RMS supply voltage below its nominal value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** voltage RMS giảm ngắn dưới nominal.
**Grammar & collocations:** `voltage-sag event` — event; `record a dip` — ghi.
**Examples:** `A voltage sag reset the unprotected controller on the remote pump.` → Sag reset controller không bảo vệ.
**Liên kết tiếng Hàn:** `전압 강하`.

## 7. voltage swell /ˈvoʊltɪdʒ swel/
**Part of speech:** noun
**Core meaning (English):** a short increase in RMS supply voltage above its nominal value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** voltage RMS tăng ngắn trên nominal.
**Grammar & collocations:** `voltage-swell duration` — duration; `clamp an overvoltage` — kẹp.
**Examples:** `The surge arrester limited a voltage swell after the large load disconnected.` → Arrester giới hạn swell sau load lớn ngắt.
**Liên kết tiếng Hàn:** `전압 상승`.

## 8. flicker index /ˈflɪkər ˈɪndeks/
**Part of speech:** noun
**Core meaning (English):** a numerical measure of visible light fluctuation caused by repeated voltage variation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ số dao động ánh sáng thấy được do voltage đổi lặp.
**Grammar & collocations:** `flicker-index limit` — limit; `assess perceptible modulation` — đánh giá.
**Examples:** `The arc furnace raised the flicker index on the shared industrial feeder.` → Lò hồ quang tăng index flicker trên feeder chung.
**Liên kết tiếng Hàn:** `플리커 지수`.

## 9. negative sequence /ˈneɡətɪv ˈsiːkwəns/
**Part of speech:** noun
**Core meaning (English):** the balanced set of phasors rotating opposite to the normal positive phase sequence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ phasor cân bằng quay ngược sequence pha bình thường.
**Grammar & collocations:** `negative-sequence current` — current; `detect phase asymmetry` — bắt.
**Examples:** `Negative sequence heated the motor rotor during the unbalanced fault.` → Sequence âm làm nóng rotor khi fault lệch.
**Liên kết tiếng Hàn:** `역상분`.

## 10. positive sequence /ˈpɑːzətɪv ˈsiːkwəns/
**Part of speech:** noun
**Core meaning (English):** the balanced phasor set rotating in the normal phase order of a three-phase system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ phasor cân bằng quay theo thứ tự pha bình thường.
**Grammar & collocations:** `positive-sequence voltage` — voltage; `estimate the fundamental set` — ước tính.
**Examples:** `The controller used positive sequence for its normal torque-producing reference.` → Controller dùng sequence dương cho reference torque thường.
**Liên kết tiếng Hàn:** `정상분`.

## 11. zero sequence /ˈzɪroʊ ˈsiːkwəns/
**Part of speech:** noun
**Core meaning (English):** the in-phase component of a three-phase quantity that can return through a neutral or ground path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thành phần ba pha cùng phase, có thể về qua neutral/ground.
**Grammar & collocations:** `zero-sequence current` — current; `measure a ground return` — đo.
**Examples:** `The relay detected zero sequence during the line-to-ground fault.` → Relay bắt sequence zero khi fault line-ground.
**Liên kết tiếng Hàn:** `영상분`.

## 12. unbalance factor /ʌnˈbæləns ˈfæktər/
**Part of speech:** noun
**Core meaning (English):** a ratio that quantifies how far a multiphase voltage or current system departs from balance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ đo hệ nhiều pha lệch khỏi cân bằng bao xa.
**Grammar & collocations:** `unbalance-factor threshold` — threshold; `limit negative sequence` — giới hạn.
**Examples:** `The drive derated its motor when the unbalance factor exceeded two percent.` → Drive giảm rating khi factor vượt 2%.
**Liên kết tiếng Hàn:** `불평형률`.

## 13. reactive power compensation /riˈæktɪv ˈpaʊər ˌkɑːmpənˈseɪʃən/
**Part of speech:** noun
**Core meaning (English):** supplying or absorbing reactive power to regulate voltage and improve power factor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấp/hút reactive power để điều chỉnh voltage và power factor.
**Grammar & collocations:** `reactive-power-compensation controller` — controller; `support a weak bus` — hỗ trợ.
**Examples:** `Reactive power compensation kept the rural feeder within its voltage band.` → Compensation giữ feeder nông thôn trong band voltage.
**Liên kết tiếng Hàn:** `무효 전력 보상`.

## 14. static var compensator /ˈstætɪk vɑːr ˈkɑːmpənˌseɪtər/
**Part of speech:** noun
**Core meaning (English):** a shunt-connected power-electronic system that varies reactive current to regulate voltage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ power-electronic mắc song song đổi reactive current để giữ voltage.
**Grammar & collocations:** `static-var-compensator branch` — branch; `absorb reactive power` — hút.
**Examples:** `The static var compensator stabilized the voltage near the industrial motor bank.` → SVC ổn định voltage gần bank motor.
**Liên kết tiếng Hàn:** `정지형 무효 전력 보상기`.

## 15. static synchronous compensator /ˈstætɪk ˈsɪŋkrənəs ˈkɑːmpənˌseɪtər/
**Part of speech:** noun
**Core meaning (English):** a voltage-source converter that exchanges controllable reactive current with the grid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** converter nguồn voltage trao đổi reactive current điều khiển với grid.
**Grammar & collocations:** `static-synchronous-compensator rating` — rating; `regulate bus voltage` — điều chỉnh.
**Examples:** `The static synchronous compensator supplied reactive current during the voltage dip.` → STATCOM cấp dòng reactive khi voltage dip.
**Liên kết tiếng Hàn:** `정지형 동기 보상기`.

## 16. active front end /ˈæktɪv frʌnt end/
**Part of speech:** noun
**Core meaning (English):** a controlled rectifier that can shape input current and transfer power in either direction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh lưu điều khiển, tạo hình dòng vào và truyền power hai chiều.
**Grammar & collocations:** `active-front-end rectifier` — rectifier; `regenerate energy to the grid` — trả.
**Examples:** `The active front end returned braking energy instead of dissipating it in a resistor.` → AFE trả energy phanh về grid.
**Liên kết tiếng Hàn:** `능동 프런트 엔드`.

## 17. power quality analyzer /ˈpaʊər ˈkwɑːləti ˈænəˌlaɪzər/
**Part of speech:** noun
**Core meaning (English):** an instrument that measures voltage, current, harmonics, interruptions, and related supply disturbances.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết bị đo voltage, current, harmonic, interruption và disturbance nguồn.
**Grammar & collocations:** `power-quality-analyzer record` — record; `capture a sag waveform` — ghi.
**Examples:** `The power quality analyzer captured the harmonic spectrum before the filter was installed.` → Analyzer ghi spectrum trước lắp filter.
**Liên kết tiếng Hàn:** `전력 품질 분석기`.

## 18. harmonic filter /hɑːrˈmɑːnɪk ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a passive or active network that reduces unwanted harmonic currents or voltages.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** network thụ động/chủ động giảm harmonic current/voltage.
**Grammar & collocations:** `harmonic-filter branch` — branch; `attenuate the fifth harmonic` — giảm.
**Examples:** `The harmonic filter lowered distortion at the transformer secondary.` → Filter harmonic giảm distortion ở thứ cấp transformer.
**Liên kết tiếng Hàn:** `고조파 필터`.

## 19. tuned filter /tuːnd ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a filter deliberately resonated to absorb or reject a selected harmonic frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** filter chỉnh resonance để hút hoặc chặn harmonic frequency chọn.
**Grammar & collocations:** `tuned-filter branch` — branch; `target a seventh harmonic` — nhắm.
**Examples:** `The tuned filter targeted the dominant fifth harmonic from the rectifier.` → Filter tuned nhắm harmonic bậc năm.
**Liên kết tiếng Hàn:** `동조 필터`.

## 20. detuned filter /diːˈtuːnd ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a filter intentionally shifted away from exact resonance to avoid amplification or overload at a nearby frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** filter lệch khỏi resonance đúng để tránh khuếch đại/overload frequency gần.
**Grammar & collocations:** `detuned-filter reactor` — reactor; `avoid a parallel resonance` — tránh.
**Examples:** `The detuned filter protected the capacitor bank from a neighboring grid resonance.` → Filter detuned bảo vệ bank capacitor khỏi resonance gần.
**Liên kết tiếng Hàn:** `비동조 필터`.

## Review in context

**grid impedance** shapes **harmonic current** and overall **power quality**. A converter's **ride-through voltage** and **fault ride-through** behavior must handle a **voltage sag**, **voltage swell**, and **flicker index**. **negative sequence**, **positive sequence**, **zero sequence**, and an **unbalance factor** describe three-phase disturbances. **reactive power compensation** may use a **static var compensator**, **static synchronous compensator**, or **active front end**. A **power quality analyzer** guides a **harmonic filter**, whose **tuned filter** or **detuned filter** branch controls resonance.

**Bản dịch tiếng Việt:** **grid impedance** định hình **harmonic current** và **power quality**. Hành vi **ride-through voltage** và **fault ride-through** của converter phải xử lý **voltage sag**, **voltage swell** và **flicker index**. **negative sequence**, **positive sequence**, **zero sequence** và **unbalance factor** mô tả disturbance ba pha. **reactive power compensation** có thể dùng **static var compensator**, **static synchronous compensator** hoặc **active front end**. **power quality analyzer** hướng dẫn chọn **harmonic filter**, trong đó nhánh **tuned filter** hoặc **detuned filter** kiểm soát resonance.
