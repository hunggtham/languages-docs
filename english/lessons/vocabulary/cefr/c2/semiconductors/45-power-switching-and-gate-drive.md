# C2 Vocabulary — Power switching and gate-drive design

This lesson follows a high-voltage power switch through gate drive, current sensing, transient protection, and soft-switching techniques.

Flow: **high-voltage switch → superjunction mosfet → trench gate → avalanche energy → dvdt immunity → voltage-slew turn-on → isolated gate driver → bootstrap capacitor → desaturation detection → current-sense resistor → shunt resistor → hall current sensor → magnetic core loss → snubber network → rc snubber → clamp circuit → active clamp → soft switching → zero-voltage switching → zero-current switching**.

## 1. high-voltage switch /ˌhaɪ ˈvoʊltɪdʒ swɪtʃ/
**Part of speech:** noun
**Core meaning (English):** a semiconductor or module that controls power at a relatively high voltage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** semiconductor/module điều khiển công suất ở voltage cao.
**Grammar & collocations:** `high-voltage-switch rating` — rating; `interrupt a bus current` — ngắt.
**Examples:** `The high-voltage switch isolated the battery bus during a crash test.` → Switch cao áp cô lập bus pin khi test crash.
**Liên kết tiếng Hàn:** `고전압 스위치`.

## 2. superjunction mosfet /ˈsuːpərˌdʒʌŋkʃən ˈmɑːsfet/
**Part of speech:** noun
**Core meaning (English):** a power MOSFET structure that uses alternating doped regions to reduce on-resistance at a given voltage rating.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấu trúc MOSFET dùng vùng doped xen kẽ để giảm on-resistance ở rating voltage.
**Grammar & collocations:** `superjunction-MOSFET cell` — cell; `balance breakdown voltage` — cân bằng.
**Examples:** `The superjunction MOSFET reduced conduction loss in the high-frequency converter.` → MOSFET superjunction giảm loss dẫn trong converter cao tần.
**Liên kết tiếng Hàn:** `슈퍼정션 MOSFET`.

## 3. trench gate /ˈtrentʃ ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** a transistor gate formed in a recessed trench rather than only on the surface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gate transistor tạo trong rãnh lõm thay vì chỉ trên surface.
**Grammar & collocations:** `trench-gate geometry` — geometry; `reduce cell pitch` — giảm.
**Examples:** `The trench gate increased channel density but required careful oxide control.` → Gate trench tăng density channel nhưng cần kiểm soát oxide.
**Liên kết tiếng Hàn:** `트렌치 게이트`.

## 4. avalanche energy /ˈævəˌlæntʃ ˈenərdʒi/
**Part of speech:** noun
**Core meaning (English):** the energy a power device can absorb during avalanche conduction without failing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** năng lượng device nguồn hấp thụ khi avalanche mà không fail.
**Grammar & collocations:** `avalanche-energy rating` — rating; `clamp an inductive spike` — kẹp.
**Examples:** `The design kept the turn-off spike below the transistor's avalanche energy limit.` → Thiết kế giữ spike dưới limit năng lượng avalanche.
**Liên kết tiếng Hàn:** `애벌랜치 에너지`.

## 5. dvdt immunity /ˌdiː viː diː tiː ɪˈmjuːnəti/
**Part of speech:** noun
**Core meaning (English):** a device's ability to tolerate a rapid voltage change without falsely switching or losing isolation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng chịu voltage đổi nhanh mà không switch nhầm hoặc mất isolation.
**Grammar & collocations:** `dvdt-immunity specification` — spec; `reject a common-mode edge` — loại.
**Examples:** `The isolated driver needed higher dvdt immunity on the fast half-bridge.` → Driver cách ly cần immunity cao hơn ở half-bridge nhanh.
**Liên kết tiếng Hàn:** `dv/dt 내성`.

## 6. voltage-slew turn-on /ˈvoʊltɪdʒ sluː tɜːrn ɑːn/
**Part of speech:** noun
**Core meaning (English):** unintended activation of a power switch caused by a rapid voltage transition coupled into its gate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** switch nguồn bật nhầm do voltage đổi nhanh ghép vào gate.
**Grammar & collocations:** `voltage-slew-turn-on event` — event; `hold the gate low` — giữ.
**Examples:** `A stronger gate clamp prevented voltage-slew turn-on during the opposite switch's transition.` → Clamp gate mạnh ngăn bật nhầm khi switch kia chuyển.
**Liên kết tiếng Hàn:** `전압 슬루 턴온`.

## 7. isolated gate driver /ˈaɪsəˌleɪtɪd ɡeɪt ˈdraɪvər/
**Part of speech:** noun
**Core meaning (English):** a gate-control circuit separated electrically from the logic that commands it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch điều khiển gate tách điện khỏi logic ra lệnh.
**Grammar & collocations:** `isolated-gate-driver barrier` — barrier; `drive a floating switch` — điều khiển.
**Examples:** `The isolated gate driver protected the low-voltage controller from the motor bridge.` → Driver cách ly bảo vệ controller khỏi cầu motor.
**Liên kết tiếng Hàn:** `절연 게이트 드라이버`.

## 8. bootstrap capacitor /ˈbuːtˌstræp kəˈpæsɪtər/
**Part of speech:** noun
**Core meaning (English):** a capacitor that temporarily supplies a floating high-side gate driver above the switching node.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** capacitor cấp tạm cho driver high-side nổi cao hơn switching node.
**Grammar & collocations:** `bootstrap-capacitor recharge` — recharge; `drive a high-side gate` — drive.
**Examples:** `The bootstrap capacitor recharged whenever the switching node returned low.` → Capacitor bootstrap nạp lại khi node xuống thấp.
**Liên kết tiếng Hàn:** `부트스트랩 커패시터`.

## 9. desaturation detection /diːˌsætʃəˈreɪʃən dɪˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** detecting that a conducting power transistor has an unexpectedly high voltage across it, indicating a fault.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bắt voltage cao bất thường trên transistor đang dẫn để nhận diện fault.
**Grammar & collocations:** `desaturation-detection delay` — delay; `trip a gate shutdown` — kích hoạt.
**Examples:** `Desaturation detection shut down the bridge after the load shorted.` → Detection tắt cầu sau khi load chập.
**Liên kết tiếng Hàn:** `디새추레이션 검출`.

## 10. current-sense resistor /ˈkɜːrənt sens rɪˈzɪstər/
**Part of speech:** noun
**Core meaning (English):** a precision resistor whose voltage drop is used to measure current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resistor chính xác, đo current qua voltage drop.
**Grammar & collocations:** `current-sense-resistor tolerance` — tolerance; `amplify a shunt voltage` — khuếch đại.
**Examples:** `The current-sense resistor fed cycle-by-cycle protection in the converter.` → Resistor sense cấp bảo vệ từng cycle.
**Liên kết tiếng Hàn:** `전류 감지 저항`.

## 11. shunt resistor /ˈʃʌnt rɪˈzɪstər/
**Part of speech:** noun
**Core meaning (English):** a low-value resistor placed in series with a current path to create a measurable voltage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resistor giá trị thấp đặt nối tiếp path để tạo voltage đo được.
**Grammar & collocations:** `shunt-resistor voltage` — voltage; `calibrate a current channel` — calibrate.
**Examples:** `The shunt resistor added little loss but provided an accurate current signal.` → Resistor shunt ít loss nhưng cho signal dòng chính xác.
**Liên kết tiếng Hàn:** `션트 저항`.

## 12. hall current sensor /hɔːl ˈkɜːrənt ˈsensər/
**Part of speech:** noun
**Core meaning (English):** a sensor that measures current through the magnetic field it creates, often without a direct electrical connection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sensor đo current qua magnetic field, thường không nối điện trực tiếp.
**Grammar & collocations:** `Hall-current-sensor offset` — offset; `measure an isolated conductor` — đo.
**Examples:** `The Hall current sensor monitored the battery cable without inserting a shunt.` → Sensor Hall đo cáp pin không cần chèn shunt.
**Liên kết tiếng Hàn:** `홀 전류 센서`.

## 13. magnetic core loss /mæɡˈnetɪk kɔːr lɔːs/
**Part of speech:** noun
**Core meaning (English):** energy dissipated as heat in a magnetic core because of hysteresis and eddy currents.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** năng lượng thành nhiệt trong lõi từ do hysteresis và dòng xoáy.
**Grammar & collocations:** `magnetic-core-loss curve` — curve; `limit switching frequency` — giới hạn.
**Examples:** `Magnetic core loss rose sharply when the converter frequency doubled.` → Loss lõi từ tăng mạnh khi frequency gấp đôi.
**Liên kết tiếng Hàn:** `자기 코어 손실`.

## 14. snubber network /ˈsnʌbər ˈnetwɜːrk/
**Part of speech:** noun
**Core meaning (English):** a network that absorbs or damps switching transients across a power device or node.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** network hấp thụ/giảm transient switching trên device/node nguồn.
**Grammar & collocations:** `snubber-network damping` — damping; `tune a ringing edge` — chỉnh.
**Examples:** `The snubber network reduced ringing across the rectifier diode.` → Network giảm ringing trên diode chỉnh lưu.
**Liên kết tiếng Hàn:** `스너버 네트워크`.

## 15. rc snubber /ˌɑːr siː ˈsnʌbər/
**Part of speech:** noun
**Core meaning (English):** a resistor-capacitor network used to damp a fast voltage transition or ringing node.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** network resistor-capacitor giảm voltage transition nhanh hoặc node rung.
**Grammar & collocations:** `RC-snubber value` — value; `dissipate transient energy` — tiêu tán.
**Examples:** `An RC snubber traded a small steady loss for a much cleaner drain waveform.` → Snubber đánh đổi loss nhỏ lấy waveform sạch.
**Liên kết tiếng Hàn:** `RC 스너버`.

## 16. clamp circuit /ˈklæmp ˈsɜːrkɪt/
**Part of speech:** noun
**Core meaning (English):** a circuit that limits a node's voltage to a safer range during a transient.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch giới hạn voltage node về range an toàn khi transient.
**Grammar & collocations:** `clamp-circuit threshold` — threshold; `divert a surge` — chuyển.
**Examples:** `The clamp circuit diverted the inductive surge away from the gate oxide.` → Mạch clamp chuyển surge khỏi oxide gate.
**Liên kết tiếng Hàn:** `클램프 회로`.

## 17. active clamp /ˈæktɪv klæmp/
**Part of speech:** noun
**Core meaning (English):** a controlled switch or feedback circuit that actively limits voltage or recycles transient energy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** switch/feedback kiểm soát chủ động giới hạn voltage hoặc tái dùng năng lượng transient.
**Grammar & collocations:** `active-clamp controller` — controller; `recover leakage energy` — thu hồi.
**Examples:** `The active clamp recovered part of the transformer's leakage energy.` → Clamp chủ động thu hồi một phần leakage energy.
**Liên kết tiếng Hàn:** `능동 클램프`.

## 18. soft switching /ˈsɔːft ˈswɪtʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** switching timed so voltage or current is near zero when a device changes state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** switching căn timing để voltage/current gần zero lúc device đổi state.
**Grammar & collocations:** `soft-switching transition` — transition; `reduce overlap loss` — giảm.
**Examples:** `Soft switching lowered electromagnetic noise in the resonant converter.` → Switching mềm giảm nhiễu điện từ.
**Liên kết tiếng Hàn:** `소프트 스위칭`.

## 19. zero-voltage switching /ˈzɪroʊ ˈvoʊltɪdʒ ˈswɪtʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** switching a device when the voltage across it is approximately zero.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi state khi voltage trên device gần bằng zero.
**Grammar & collocations:** `zero-voltage-switching condition` — condition; `turn on at a valley` — bật.
**Examples:** `Zero-voltage switching reduced turn-on loss in the primary transistor.` → ZVS giảm loss bật transistor sơ cấp.
**Liên kết tiếng Hàn:** `영전압 스위칭`.

## 20. zero-current switching /ˈzɪroʊ ˈkɜːrənt ˈswɪtʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** switching a device when the current through it is approximately zero.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi state khi current qua device gần bằng zero.
**Grammar & collocations:** `zero-current-switching interval` — interval; `turn off at a current zero` — tắt.
**Examples:** `Zero-current switching limited turn-off stress in the high-voltage rectifier.` → ZCS giảm stress tắt trong chỉnh lưu cao áp.
**Liên kết tiếng Hàn:** `영전류 스위칭`.

## Review in context

A **high-voltage switch** may use a **superjunction mosfet** and **trench gate**; its **avalanche energy**, **dvdt immunity**, and resistance to **voltage-slew turn-on** shape the design. An **isolated gate driver** and **bootstrap capacitor** control the gate, while **desaturation detection**, a **current-sense resistor**, a **shunt resistor**, or a **hall current sensor** measures faults. Magnetic components incur **magnetic core loss**. A **snubber network**, **rc snubber**, **clamp circuit**, or **active clamp** limits transients. **soft switching**, **zero-voltage switching**, and **zero-current switching** reduce overlap stress.

**Bản dịch tiếng Việt:** **High-voltage switch** có thể dùng **superjunction mosfet** và **trench gate**; **avalanche energy**, **dvdt immunity** và khả năng chống **voltage-slew turn-on** định hình thiết kế. **Isolated gate driver** và **bootstrap capacitor** điều khiển gate, còn **desaturation detection**, **current-sense resistor**, **shunt resistor** hoặc **hall current sensor** đo fault. Linh kiện từ có **magnetic core loss**. **Snubber network**, **rc snubber**, **clamp circuit** hoặc **active clamp** giới hạn transient. **soft switching**, **zero-voltage switching** và **zero-current switching** giảm stress overlap.
