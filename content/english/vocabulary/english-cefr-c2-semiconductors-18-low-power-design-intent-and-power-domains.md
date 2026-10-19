# C2 Vocabulary — Low-power design intent and power domains

This lesson follows a multi-voltage chip from power intent through isolation, state retention, wake-up, and low-power signoff.

Flow: **power intent → isolation strategy → retention strategy → level shifter → power domain → voltage island → always-on domain → power state table → power gating → retention flop → isolation clamp → inrush current → state corruption → dynamic voltage scaling → body bias → clock gating → power intent compiler → low-power equivalence → wake-up latency → power-domain signoff**.

## 1. power intent /ˈpaʊər ɪnˈtɛnt/
**Part of speech:** noun
**Core meaning (English):** a machine-readable description of voltage domains, power states, isolation, retention, and related low-power behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản thiết kế nói chip tắt/mở domain nào, giữ state ra sao và isolate ở đâu.
**Grammar & collocations:** `power-intent specification` — đặc tả; `capture power intent` — ghi nhận.
**Examples:** `The power intent documented which memories had to retain state during sleep.` → Power intent ghi rõ memory nào phải giữ state khi sleep.
**Liên kết tiếng Hàn:** `전력 의도`.

## 2. isolation strategy /ˌaɪsəˈleɪʃən ˈstrætədʒi/
**Part of speech:** noun
**Core meaning (English):** a plan for preventing invalid signals from a powered-down domain from reaching an active domain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** strategy chặn tín hiệu rác từ domain tắt đi vào domain còn chạy.
**Grammar & collocations:** `isolation-strategy rule` — rule; `isolate a boundary` — cô lập.
**Examples:** `The isolation strategy clamped outputs before the sensor domain lost power.` → Strategy clamp output trước khi sensor domain mất điện.
**Liên kết tiếng Hàn:** `격리 전략`.

## 3. retention strategy /rɪˈtɛnʃən ˈstrætədʒi/
**Part of speech:** noun
**Core meaning (English):** a plan for preserving selected state while a power domain is switched off.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn state cần giữ để domain tắt rồi bật lại không phải khởi tạo lại.
**Grammar & collocations:** `retention-strategy constraint` — constraint; `retain architectural state` — giữ.
**Examples:** `The retention strategy preserved configuration registers but not transient pipeline data.` → Strategy giữ register cấu hình chứ không giữ data pipeline tạm.
**Liên kết tiếng Hàn:** `보존 전략`.

## 4. level shifter /ˈlɛvəl ˈʃɪftər/
**Part of speech:** noun
**Core meaning (English):** a circuit that translates logic levels between domains operating at different supply voltages.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch đổi mức logic khi tín hiệu đi giữa hai voltage khác nhau.
**Grammar & collocations:** `level-shifter placement` — placement; `insert a level shifter` — chèn.
**Examples:** `The level shifter translated the low-voltage control signal for the peripheral domain.` → Level shifter đổi control signal điện áp thấp cho peripheral domain.
**Liên kết tiếng Hàn:** `레벨 시프터`.

## 5. power domain /ˈpaʊər doʊˈmeɪn/
**Part of speech:** noun
**Core meaning (English):** a group of circuitry managed as a unit for supply, shutdown, isolation, or retention.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng mạch có power policy chung, có thể bật/tắt độc lập.
**Grammar & collocations:** `power-domain boundary` — boundary; `shut down a domain` — tắt.
**Examples:** `The display power domain could shut down while the control processor remained active.` → Display domain có thể tắt trong khi processor điều khiển vẫn chạy.
**Liên kết tiếng Hàn:** `전력 도메인`.

## 6. voltage island /ˈvoʊltɪdʒ ˈaɪlənd/
**Part of speech:** noun
**Core meaning (English):** a physically or logically distinct region supplied by a particular voltage within a larger design.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “đảo” điện áp riêng nằm trong chip nhiều voltage.
**Grammar & collocations:** `voltage-island boundary` — boundary; `place a voltage island` — bố trí.
**Examples:** `The voltage island ran the neural accelerator at a lower supply than the host CPU.` → Voltage island chạy accelerator ở supply thấp hơn CPU host.
**Liên kết tiếng Hàn:** `전압 섬`.

## 7. always-on domain /ˈɔlweɪz ɑn doʊˈmeɪn/
**Part of speech:** noun
**Core meaning (English):** a domain that remains powered so it can monitor, retain, or control domains that may shut down.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** domain luôn có điện để làm controller, wake-up manager hoặc giữ tín hiệu sống.
**Grammar & collocations:** `always-on-domain supply` — supply; `route through the always-on domain` — route.
**Examples:** `The always-on domain monitored the wake request while the application cores slept.` → Domain always-on theo dõi wake request khi core ứng dụng sleep.
**Liên kết tiếng Hàn:** `상시 켜짐 도메인`.

## 8. power state table /ˈpaʊər steɪt ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** a formal table listing legal combinations of domain states, supplies, isolation, and retention behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảng liệt kê chip được phép ở trạng thái power nào và boundary phải làm gì.
**Grammar & collocations:** `power-state-table entry` — entry; `enumerate legal states` — liệt kê.
**Examples:** `The power state table prohibited isolation removal before the destination supply stabilized.` → Bảng cấm bỏ isolation trước khi supply đích ổn định.
**Liên kết tiếng Hàn:** `전력 상태 표`.

## 9. power gating /ˈpaʊər ˈɡeɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** disconnecting or reducing supply to an inactive circuit block to save leakage and standby power.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng switch nguồn để cắt điện block không hoạt động.
**Grammar & collocations:** `power-gating switch` — switch; `gate a domain` — gate.
**Examples:** `Power gating cut standby leakage from the unused graphics block.` → Power gating giảm leakage standby của graphics block không dùng.
**Liên kết tiếng Hàn:** `전력 게이팅`.

## 10. retention flop /rɪˈtɛnʃən flɑp/
**Part of speech:** noun
**Core meaning (English):** a flip-flop designed to preserve its logical value while the surrounding domain is powered down.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** flip-flop có phần backup để giữ bit khi domain tắt.
**Grammar & collocations:** `retention-flop control` — control; `save and restore a flop` — save/restore.
**Examples:** `The retention flop restored the scheduler state after the island woke up.` → Retention flop khôi phục state scheduler sau khi island thức dậy.
**Liên kết tiếng Hàn:** `보존 플립플롭`.

## 11. isolation clamp /ˌaɪsəˈleɪʃən klæmp/
**Part of speech:** noun
**Core meaning (English):** a circuit or control action that forces a boundary signal to a safe constant during domain shutdown.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** clamp ép signal về 0/1 an toàn khi nguồn bên kia tắt.
**Grammar & collocations:** `isolation-clamp value` — value; `assert the clamp` — bật clamp.
**Examples:** `The isolation clamp forced the request line low before the powered-down block floated.` → Clamp ép request line xuống low trước khi block mất nguồn.
**Liên kết tiếng Hàn:** `격리 클램프`.

## 12. inrush current /ˈɪnˌrʌʃ ˈkɝənt/
**Part of speech:** noun
**Core meaning (English):** a temporary surge of current drawn when a powered-down block or capacitor bank is switched on.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dòng điện bật nguồn tăng vọt, có thể làm sụt supply chung.
**Grammar & collocations:** `inrush-current limiter` — bộ hạn chế; `control inrush current` — kiểm soát.
**Examples:** `The sequencer staggered wake-up to limit inrush current on the shared rail.` → Sequencer đánh thức lần lượt để giới hạn inrush trên rail chung.
**Liên kết tiếng Hàn:** `돌입 전류`.

## 13. state corruption /steɪt kəˈrʌpʃən/
**Part of speech:** noun
**Core meaning (English):** an unintended change or loss of stored logic state caused by an incorrect power transition or isolation sequence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** state bị sai/mất do power sequence không đúng.
**Grammar & collocations:** `state-corruption bug` — bug; `detect corrupted state` — phát hiện.
**Examples:** `A missing retention control caused state corruption after repeated sleep cycles.` → Thiếu control retention gây corruption sau nhiều chu kỳ sleep.
**Liên kết tiếng Hàn:** `상태 손상`.

## 14. dynamic voltage scaling /daɪˈnæmɪk ˈvoʊltɪdʒ ˈskeɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** adjusting supply voltage during operation to trade performance for energy use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi voltage theo workload để tiết kiệm energy khi không cần tốc độ cao.
**Grammar & collocations:** `dynamic-voltage-scaling policy` — policy; `lower the supply` — hạ supply.
**Examples:** `Dynamic voltage scaling lowered energy during the sensor's idle intervals.` → Scaling giảm energy trong khoảng sensor idle.
**Liên kết tiếng Hàn:** `동적 전압 스케일링`.

## 15. body bias /ˈbɑdi ˈbaɪəs/
**Part of speech:** noun
**Core meaning (English):** applying a control voltage to a transistor body to adjust threshold behavior and power-performance trade-offs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bias body transistor để đổi threshold, leakage hoặc speed.
**Grammar & collocations:** `body-bias generator` — generator; `apply forward body bias` — áp bias.
**Examples:** `Body bias recovered speed at low supply voltage but increased leakage.` → Body bias lấy lại speed ở supply thấp nhưng tăng leakage.
**Liên kết tiếng Hàn:** `바디 바이어스`.

## 16. clock gating /ˈklɑk ˈɡeɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** disabling a clock from reaching inactive sequential logic to reduce switching power.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chặn clock ở block không hoạt động để giảm chuyển mạch.
**Grammar & collocations:** `clock-gating cell` — cell; `gate an idle clock tree` — gate.
**Examples:** `Clock gating stopped toggles in the inactive pipeline stage.` → Clock gating dừng toggle ở pipeline stage không hoạt động.
**Liên kết tiếng Hàn:** `클록 게이팅`.

## 17. power intent compiler /ˈpaʊər ɪnˈtɛnt kəmˈpaɪlər/
**Part of speech:** noun
**Core meaning (English):** a tool that translates power-management declarations into implementation logic, checks, or simulation models.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** compiler biến mô tả power policy thành cell/control và rule kiểm tra.
**Grammar & collocations:** `power-intent-compiler report` — report; `compile UPF intent` — compile.
**Examples:** `The power intent compiler inserted isolation cells at each declared boundary.` → Compiler chèn isolation cell ở mỗi boundary đã khai báo.
**Liên kết tiếng Hàn:** `전력 의도 컴파일러`.

## 18. low-power equivalence /loʊ ˈpaʊər ɪˈkwɪvələns/
**Part of speech:** noun
**Core meaning (English):** proving that a power-managed implementation preserves required behavior across legal power states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chứng minh design sau thêm power logic vẫn đúng ở các state hợp lệ.
**Grammar & collocations:** `low-power-equivalence check` — check; `prove state correspondence` — chứng minh.
**Examples:** `Low-power equivalence found a mismatch when a retained register restored one cycle too late.` → Equivalence tìm mismatch khi register restore trễ một cycle.
**Liên kết tiếng Hàn:** `저전력 동등성`.

## 19. wake-up latency /ˈweɪk ʌp ˈleɪtənsi/
**Part of speech:** noun
**Core meaning (English):** the time from a wake request until a powered-down domain is stable and ready to operate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian từ lệnh wake tới lúc domain chạy ổn định.
**Grammar & collocations:** `wake-up-latency budget` — ngân sách; `measure wake-up latency` — đo.
**Examples:** `The controller met the wake-up latency budget for interactive audio.` → Controller đạt budget wake-up cho audio tương tác.
**Liên kết tiếng Hàn:** `웨이크업 지연 시간`.

## 20. power-domain signoff /ˈpaʊər doʊˈmeɪn ˈsaɪnɔf/
**Part of speech:** noun
**Core meaning (English):** final review that confirms power states, crossings, retention, isolation, and implementation constraints are complete and acceptable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** signoff cuối cho mọi domain, crossing, state và power sequence.
**Grammar & collocations:** `power-domain-signoff checklist` — checklist; `complete signoff` — hoàn tất.
**Examples:** `Power-domain signoff blocked release until every illegal crossing had an owner and waiver.` → Signoff chặn release tới khi mọi crossing sai có owner và waiver.
**Liên kết tiếng Hàn:** `전력 도메인 사인오프`.

## Review in context

A chip's **power intent** defines an **isolation strategy** and a **retention strategy** for each **power domain**. A **level shifter** connects voltage regions, while a **voltage island** may shut down beside an **always-on domain**. The **power state table** describes legal transitions. **Power gating** saves leakage; a **retention flop** preserves selected bits, and an **isolation clamp** forces safe values. Designers limit **inrush current** and test for **state corruption**. Runtime controls such as **dynamic voltage scaling**, **body bias**, and **clock gating** trade energy for performance. A **power intent compiler** builds implementation logic, **low-power equivalence** checks behavior, **wake-up latency** is measured, and **power-domain signoff** closes the release review.

**Bản dịch tiếng Việt:** **Power intent** định nghĩa **isolation strategy** và **retention strategy** cho từng **power domain**. **Level shifter** nối các vùng điện áp, còn **voltage island** có thể tắt cạnh **always-on domain**. **Power state table** mô tả chuyển đổi hợp lệ. **Power gating** tiết kiệm leakage; **retention flop** giữ bit chọn lọc, và **isolation clamp** ép giá trị an toàn. Designer giới hạn **inrush current** và kiểm tra **state corruption**. Các control runtime như **dynamic voltage scaling**, **body bias** và **clock gating** đánh đổi energy với performance. **Power intent compiler** tạo logic triển khai, **low-power equivalence** kiểm tra hành vi, **wake-up latency** được đo, và **power-domain signoff** khép review release.
