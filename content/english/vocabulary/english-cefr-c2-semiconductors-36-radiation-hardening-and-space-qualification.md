# C2 Vocabulary — Radiation hardening and space qualification

This lesson follows a space-bound semiconductor from radiation-tolerant design through particle testing, shielding, and recovery.

Flow: **radiation hardening → radiation-hardened design → error-correcting memory → triple modular redundancy → scrubbing controller → shielding thickness → dose rate effect → single-event latchup → single-event gate rupture → single-event burnout → single-event functional interrupt → displacement damage dose → proton fluence → neutron fluence → heavy ion track → total dose margin → space qualification → radiation test campaign → annealing recovery → shielding tradeoff**.

## 1. radiation hardening /ˌreɪdiˈeɪʃən ˈhɑːrdənɪŋ/
**Part of speech:** noun
**Core meaning (English):** designing or processing hardware so radiation causes less damage or fewer functional errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết kế/xử lý hardware để radiation gây ít damage hoặc lỗi hơn.
**Grammar & collocations:** `radiation-hardening technique` — kỹ thuật; `harden a memory cell` — làm bền.
**Examples:** `Radiation hardening increased the controller's margin for a long orbital mission.` → Hardening tăng margin cho mission quỹ đạo dài.
**Liên kết tiếng Hàn:** `방사선 내성 강화`.

## 2. radiation-hardened design /ˌreɪdiˈeɪʃən ˈhɑːrdənd dɪˈzaɪn/
**Part of speech:** noun
**Core meaning (English):** a circuit design that uses structures, materials, or redundancy to tolerate specified radiation environments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết kế circuit dùng cấu trúc, vật liệu hoặc redundancy chịu môi trường radiation.
**Grammar & collocations:** `radiation-hardened-design library` — thư viện; `tolerate a particle event` — chịu.
**Examples:** `The radiation-hardened design used larger devices and guarded storage nodes.` → Design hardened dùng device lớn và node storage được bảo vệ.
**Liên kết tiếng Hàn:** `방사선 내성 설계`.

## 3. error-correcting memory /ˈerər kəˈrektɪŋ ˈmeməri/
**Part of speech:** noun
**Core meaning (English):** memory that stores redundancy so certain corrupted data words can be detected and corrected.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory lưu redundancy để phát hiện và sửa một số word bị hỏng.
**Grammar & collocations:** `error-correcting-memory code` — mã; `correct a single-bit error` — sửa.
**Examples:** `Error-correcting memory repaired a flipped bit after the particle test.` → Memory ECC sửa bit bị lật sau test particle.
**Liên kết tiếng Hàn:** `오류 정정 메모리`.

## 4. triple modular redundancy /ˈtrɪpəl ˈmɑːdʒələr rɪˈdʌndənsi/
**Part of speech:** noun
**Core meaning (English):** running three copies of a function and choosing the majority result to mask one faulty copy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy ba bản sao và chọn kết quả đa số để che một bản lỗi.
**Grammar & collocations:** `triple-modular-redundancy voter` — bộ vote; `mask a single fault` — che.
**Examples:** `Triple modular redundancy kept the control output stable when one voter input failed.` → TMR giữ output ổn khi một input lỗi.
**Liên kết tiếng Hàn:** `삼중 모듈 중복`.

## 5. scrubbing controller /ˈskrʌbɪŋ kənˈtroʊlər/
**Part of speech:** noun
**Core meaning (English):** hardware or software that periodically reads protected memory and repairs correctable errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hardware/software định kỳ đọc memory bảo vệ và sửa lỗi correctable.
**Grammar & collocations:** `scrubbing-controller interval` — interval; `refresh a codeword` — refresh.
**Examples:** `The scrubbing controller repaired idle rows before a second bit error accumulated.` → Controller sửa row rảnh trước khi lỗi bit thứ hai tích lũy.
**Liên kết tiếng Hàn:** `스크러빙 컨트롤러`.

## 6. shielding thickness /ˈʃiːldɪŋ ˈθɪknəs/
**Part of speech:** noun
**Core meaning (English):** the physical thickness of material used to attenuate incoming radiation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ dày vật liệu dùng để làm yếu radiation đi vào.
**Grammar & collocations:** `shielding-thickness calculation` — tính toán; `attenuate particle flux` — giảm.
**Examples:** `The team increased shielding thickness around the most sensitive memory bank.` → Team tăng độ dày shield quanh memory nhạy nhất.
**Liên kết tiếng Hàn:** `차폐 두께`.

## 7. dose rate effect /ˈdoʊs reɪt ɪˈfekt/
**Part of speech:** noun
**Core meaning (English):** a change in radiation response caused by delivering the same total dose at a different rate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** response radiation đổi khi cùng tổng dose nhưng cấp ở rate khác.
**Grammar & collocations:** `dose-rate-effect test` — test; `compare low-rate exposure` — so sánh.
**Examples:** `The dose rate effect made the low-rate ground test less conservative than expected.` → Effect làm test rate thấp kém bảo thủ hơn dự kiến.
**Liên kết tiếng Hàn:** `선량률 효과`.

## 8. single-event latchup /ˈsɪŋɡəl ɪˈvent ˈlætʃˌʌp/
**Part of speech:** noun
**Core meaning (English):** a particle-triggered parasitic conduction state that can draw destructive current until power is removed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trạng thái dẫn ký sinh do particle kích hoạt, hút dòng phá hỏng đến khi tắt nguồn.
**Grammar & collocations:** `single-event-latchup detector` — detector; `cut power quickly` — ngắt.
**Examples:** `The protection circuit cut power after detecting a single-event latchup.` → Mạch bảo vệ ngắt nguồn khi bắt latchup.
**Liên kết tiếng Hàn:** `단일 사건 래치업`.

## 9. single-event gate rupture /ˈsɪŋɡəl ɪˈvent ɡeɪt ˈrʌptʃər/
**Part of speech:** noun
**Core meaning (English):** a particle-induced failure in which a transistor gate dielectric develops a destructive conductive path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** particle làm dielectric gate transistor tạo đường dẫn phá hủy.
**Grammar & collocations:** `single-event-gate-rupture threshold` — ngưỡng; `stress a gate oxide` — gây stress.
**Examples:** `The thickened dielectric reduced the probability of single-event gate rupture.` → Dielectric dày giảm xác suất rupture gate.
**Liên kết tiếng Hàn:** `단일 사건 게이트 파괴`.

## 10. single-event burnout /ˈsɪŋɡəl ɪˈvent ˈbɜːrnaʊt/
**Part of speech:** noun
**Core meaning (English):** catastrophic destruction of a power device caused by one energetic particle.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** power device bị phá hủy nghiêm trọng bởi một particle năng lượng.
**Grammar & collocations:** `single-event-burnout risk` — nguy cơ; `survive a heavy ion` — sống sót.
**Examples:** `The power transistor was derated to lower single-event burnout risk.` → Transistor giảm rating để giảm nguy cơ burnout.
**Liên kết tiếng Hàn:** `단일 사건 번아웃`.

## 11. single-event functional interrupt /ˈsɪŋɡəl ɪˈvent ˈfʌŋkʃənəl ˌɪntəˈrʌpt/
**Part of speech:** noun
**Core meaning (English):** a temporary loss or disruption of normal function caused by one radiation event without permanent damage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mất/gián đoạn chức năng tạm thời do radiation event nhưng không hỏng vĩnh viễn.
**Grammar & collocations:** `single-event-functional-interrupt recovery` — recovery; `restart a peripheral` — restart.
**Examples:** `A watchdog recovered the modem from a single-event functional interrupt.` → Watchdog khôi phục modem sau SEFI.
**Liên kết tiếng Hàn:** `단일 사건 기능 중단`.

## 12. displacement damage dose /dɪsˈpleɪsmənt ˈdæmɪdʒ doʊs/
**Part of speech:** noun
**Core meaning (English):** a radiation measure representing the accumulated lattice-displacing damage in a material.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đại lượng radiation biểu thị damage tích lũy làm lệch mạng tinh thể.
**Grammar & collocations:** `displacement-damage-dose limit` — giới hạn; `convert particle fluence` — quy đổi.
**Examples:** `The diode remained within specification below its displacement damage dose limit.` → Diode còn trong spec dưới giới hạn dose damage.
**Liên kết tiếng Hàn:** `변위 손상 선량`.

## 13. proton fluence /ˈproʊtɑːn ˈfluəns/
**Part of speech:** noun
**Core meaning (English):** the number of protons crossing a unit area during an exposure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số proton đi qua mỗi đơn vị diện tích trong thời gian expose.
**Grammar & collocations:** `proton-fluence level` — mức; `integrate the particle flux` — tích phân.
**Examples:** `The qualification plan specified proton fluence for the expected orbit.` → Plan chỉ định fluence proton theo quỹ đạo.
**Liên kết tiếng Hàn:** `양성자 플루언스`.

## 14. neutron fluence /ˈnuːtrɑːn ˈfluəns/
**Part of speech:** noun
**Core meaning (English):** the number of neutrons crossing a unit area during irradiation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số neutron qua mỗi đơn vị diện tích trong irradiation.
**Grammar & collocations:** `neutron-fluence spectrum` — spectrum; `simulate a reactor exposure` — mô phỏng.
**Examples:** `Neutron fluence set the expected displacement damage in the sensor.` → Fluence neutron quyết định damage dịch chuyển dự kiến.
**Liên kết tiếng Hàn:** `중성자 플루언스`.

## 15. heavy ion track /ˈhevi ˈaɪən træk/
**Part of speech:** noun
**Core meaning (English):** the dense trail of ionization left by a heavy charged particle passing through a device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vệt ion hóa dày do particle nặng đi xuyên device để lại.
**Grammar & collocations:** `heavy-ion-track charge` — charge; `model a particle strike` — mô hình.
**Examples:** `The heavy ion track crossed two storage nodes and produced a transient.` → Track ion nặng đi qua hai node và tạo transient.
**Liên kết tiếng Hàn:** `중이온 트랙`.

## 16. total dose margin /ˈtoʊtəl doʊs ˈmɑːrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** the remaining radiation tolerance between an expected accumulated dose and a tested failure limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần tolerance còn lại giữa dose tích lũy dự kiến và giới hạn fail test.
**Grammar & collocations:** `total-dose-margin calculation` — tính toán; `reserve radiation tolerance` — dự phòng.
**Examples:** `The mission redesign restored total dose margin after the orbit changed.` → Thiết kế lại khôi phục margin sau đổi quỹ đạo.
**Liên kết tiếng Hàn:** `총 선량 여유`.

## 17. space qualification /speɪs ˌkwɑːləfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** demonstrating that hardware meets the environmental and reliability requirements for space deployment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chứng minh hardware đạt yêu cầu môi trường và reliability để phóng vào space.
**Grammar & collocations:** `space-qualification campaign` — campaign; `qualify a flight unit` — chứng nhận.
**Examples:** `Space qualification included radiation, vibration, vacuum, and thermal tests.` → Qualification gồm test radiation, rung, chân không và nhiệt.
**Liên kết tiếng Hàn:** `우주 인증`.

## 18. radiation test campaign /ˌreɪdiˈeɪʃən test kæmˈpeɪn/
**Part of speech:** noun
**Core meaning (English):** an organized series of exposures and measurements used to characterize radiation response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi expose và measurement có tổ chức để mô tả response radiation.
**Grammar & collocations:** `radiation-test-campaign matrix` — ma trận; `sweep dose and flux` — quét.
**Examples:** `The radiation test campaign compared three memories under identical beam settings.` → Campaign so sánh ba memory cùng setting beam.
**Liên kết tiếng Hàn:** `방사선 시험 캠페인`.

## 19. annealing recovery /əˈniːlɪŋ rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** restoration of some device performance when heat allows radiation-created defects to recombine or move.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** performance hồi phục khi nhiệt giúp defect do radiation tái hợp/di chuyển.
**Grammar & collocations:** `annealing-recovery curve` — curve; `recover a leakage shift` — phục hồi.
**Examples:** `The memory showed partial annealing recovery during the warm storage interval.` → Memory hồi phục một phần khi lưu ở nhiệt ấm.
**Liên kết tiếng Hàn:** `어닐링 회복`.

## 20. shielding tradeoff /ˈʃiːldɪŋ ˈtreɪdˌɔːf/
**Part of speech:** noun
**Core meaning (English):** the design balance between radiation reduction and the mass, cost, or secondary particles introduced by shielding.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cân bằng giữa giảm radiation và khối lượng, cost hoặc particle thứ cấp do shield.
**Grammar & collocations:** `shielding-tradeoff study` — nghiên cứu; `balance mass against dose` — cân.
**Examples:** `The shielding tradeoff favored a thin local shield over a heavy enclosure.` → Tradeoff nghiêng về shield cục bộ mỏng thay vỏ nặng.
**Liên kết tiếng Hàn:** `차폐 트레이드오프`.

## Review in context

**radiation hardening** and a **radiation-hardened design** may combine **error-correcting memory**, **triple modular redundancy**, and a **scrubbing controller**. Engineers choose **shielding thickness** after studying the **dose rate effect** and risks such as **single-event latchup**, **single-event gate rupture**, **single-event burnout**, and **single-event functional interrupt**. They convert **displacement damage dose** from **proton fluence** and **neutron fluence**, while a **heavy ion track** explains a transient. A **total dose margin** supports **space qualification** and a planned **radiation test campaign**. **annealing recovery** and a **shielding tradeoff** complete the mission design.

**Bản dịch tiếng Việt:** **radiation hardening** và **radiation-hardened design** có thể kết hợp **error-correcting memory**, **triple modular redundancy** và **scrubbing controller**. Kỹ sư chọn **shielding thickness** sau khi nghiên cứu **dose rate effect** và nguy cơ như **single-event latchup**, **single-event gate rupture**, **single-event burnout** và **single-event functional interrupt**. Họ quy đổi **displacement damage dose** từ **proton fluence** và **neutron fluence**, còn **heavy ion track** giải thích transient. **total dose margin** hỗ trợ **space qualification** và **radiation test campaign**. **annealing recovery** và **shielding tradeoff** hoàn thiện thiết kế mission.
