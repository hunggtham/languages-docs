# C2 Vocabulary — Semiconductor reliability and thermal qualification

This lesson follows a device from electrical aging and self-heating through package stress, environmental testing, lifetime statistics, and safe operating limits.

Flow: **hot-carrier injection → negative-bias temperature instability → self-heating → junction-to-case thermal resistance → thermal cycling → power cycling → solder fatigue → package delamination → wire-bond lift → die attach → moisture sensitivity level → temperature-humidity-bias → accelerated life test → mean time to failure → bathtub curve → burn-in → infant mortality → derating → safe operating area → thermal impedance budget**.

## 1. hot-carrier injection /hɑt ˈkæriər ɪnˈdʒɛkʃən/
**Part of speech:** noun
**Core meaning (English):** the injection of energetic charge carriers into a gate dielectric or interface, potentially degrading a transistor over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hạt tải năng lượng cao đập vào vùng gate/interface, làm transistor lão hóa dần.
**Grammar & collocations:** `hot-carrier injection damage` — hư hại do HCI; `hot-carrier aging` — lão hóa do hot carrier.
**Examples:** `The reliability team measured hot-carrier injection after repeated high-field operation.` → Nhóm reliability đo hot-carrier injection sau nhiều lần chạy ở điện trường cao.
**Liên kết tiếng Hàn:** `핫 캐리어 주입`.

## 2. negative-bias temperature instability /ˈnɛɡətɪv ˈbaɪəs ˈtɛmprətʃər ˌɪnstəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** a transistor aging mechanism in which negative gate bias and elevated temperature gradually shift device characteristics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bias âm cộng với nhiệt làm thông số transistor trôi theo thời gian, đặc biệt ở p-channel device.
**Grammar & collocations:** `NBTI stress` — stress NBTI; `NBTI-induced threshold shift` — shift ngưỡng do NBTI.
**Examples:** `Negative-bias temperature instability increased the threshold-voltage drift after long standby periods.` → NBTI làm tăng drift điện áp ngưỡng sau thời gian standby dài.
**Liên kết tiếng Hàn:** `음의 바이어스 온도 불안정성`.

## 3. self-heating /ˌsɛlf ˈhiːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** temperature rise inside a device caused by the power it dissipates during its own operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** linh kiện tự nóng lên do chính công suất tiêu tán của nó.
**Grammar & collocations:** `self-heating effect` — hiệu ứng tự gia nhiệt; `self-heating error` — lỗi do tự nóng.
**Examples:** `Self-heating shifted the sensor output during a high-current measurement.` → Self-heating làm output sensor lệch trong phép đo dòng cao.
**Liên kết tiếng Hàn:** `자가 발열`.

## 4. junction-to-case thermal resistance /ˈdʒʌŋkʃən tə keɪs ˈθɝməl rɪˈzɪstəns/
**Part of speech:** noun
**Core meaning (English):** the thermal resistance between a semiconductor junction and the package case used as a heat-transfer reference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức cản nhiệt từ junction bên trong tới vỏ package; giá trị thấp giúp thoát nhiệt tốt hơn.
**Grammar & collocations:** `junction-to-case rating` — rating junction-case; `measure thermal resistance` — đo thermal resistance.
**Examples:** `The heatsink selection depended on the junction-to-case thermal resistance in the package data sheet.` → Chọn heatsink phụ thuộc junction-to-case thermal resistance trong datasheet package.
**Liên kết tiếng Hàn:** `접합-케이스 열저항`.

## 5. thermal cycling /ˈθɝməl ˈsaɪklɪŋ/
**Part of speech:** noun
**Core meaning (English):** repeated changes between high and low temperatures used to expose mechanical and material stress.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cho package nóng-lạnh lặp lại để tìm lỗi do giãn nở co ngót khác nhau.
**Grammar & collocations:** `thermal-cycling test` — test thermal cycling; `cycle between temperatures` — cycle giữa các mức nhiệt.
**Examples:** `Thermal cycling revealed cracks near the package corner that static heating did not show.` → Thermal cycling lộ vết nứt gần góc package mà gia nhiệt tĩnh không cho thấy.
**Liên kết tiếng Hàn:** `열 사이클링`.

## 6. power cycling /ˈpaʊər ˈsaɪklɪŋ/
**Part of speech:** noun
**Core meaning (English):** repeated switching between powered and unpowered or high-load and low-load states to test electrical and thermal fatigue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bật-tắt nguồn hoặc tải cao-thấp lặp lại để mô phỏng stress vận hành thực.
**Grammar & collocations:** `power-cycling endurance` — độ bền power cycling; `power-cycle a module` — cycle module.
**Examples:** `Power cycling accelerated fatigue in the solder layers beneath the power module.` → Power cycling đẩy nhanh fatigue trong lớp solder dưới power module.
**Liên kết tiếng Hàn:** `전력 사이클링`.

## 7. solder fatigue /ˈsɑdər fəˈtiːɡ/
**Part of speech:** noun
**Core meaning (English):** progressive damage in a solder joint caused by repeated mechanical or thermal strain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mối hàn mỏi dần vì giãn nở lặp lại, có thể xuất hiện crack và tăng resistance.
**Grammar & collocations:** `solder-fatigue model` — model solder fatigue; `solder-joint failure` — lỗi mối hàn.
**Examples:** `The lifetime model predicted solder fatigue under frequent temperature swings.` → Model lifetime dự đoán solder fatigue khi nhiệt độ dao động thường xuyên.
**Liên kết tiếng Hàn:** `솔더 피로`.

## 8. package delamination /ˈpækɪdʒ dɪˌlæməˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** separation between layers or materials inside a semiconductor package.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các lớp package bong tách, tạo đường cho moisture hoặc làm mất đường truyền nhiệt.
**Grammar & collocations:** `delamination crack` — crack bong lớp; `detect package delamination` — phát hiện delamination.
**Examples:** `X-ray inspection found package delamination around the die attach.` → Kiểm tra X-ray phát hiện package delamination quanh die attach.
**Liên kết tiếng Hàn:** `패키지 박리`.

## 9. wire-bond lift /ˈwaɪər bɑnd lɪft/
**Part of speech:** noun
**Core meaning (English):** separation of a wire bond from its pad or interface, interrupting or weakening an electrical connection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dây bond bị bật khỏi pad; connection hở hoặc có resistance cao.
**Grammar & collocations:** `wire-bond lift failure` — lỗi bong wire bond; `inspect bond lift` — kiểm tra bong bond.
**Examples:** `Power cycling caused wire-bond lift in devices with insufficient loop support.` → Power cycling gây wire-bond lift ở device có loop support không đủ.
**Liên kết tiếng Hàn:** `와이어 본드 박리`.

## 10. die attach /daɪ əˈtætʃ/
**Part of speech:** noun
**Core meaning (English):** the material and process used to attach a semiconductor die to its package or substrate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lớp gắn die vào package; vừa giữ cơ học vừa truyền nhiệt và đôi khi truyền điện.
**Grammar & collocations:** `die-attach material` — vật liệu die attach; `voided die attach` — lớp attach có void.
**Examples:** `A void in the die attach increased the local thermal gradient.` → Void trong die attach làm tăng gradient nhiệt cục bộ.
**Liên kết tiếng Hàn:** `다이 부착`.

## 11. moisture sensitivity level /ˈmɔɪstʃər ˌsɛnsəˈtɪvəti ˈlɛvəl/
**Part of speech:** noun
**Core meaning (English):** a classification that indicates how strongly a packaged device must be protected from moisture before solder reflow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấp độ nhạy ẩm của package; quyết định thời gian được phép ở ngoài túi hút ẩm.
**Grammar & collocations:** `MSL rating` — rating MSL; `moisture-sensitive package` — package nhạy ẩm.
**Examples:** `The assembly line checked the moisture sensitivity level before opening each reel.` → Dây chuyền kiểm tra MSL trước khi mở từng cuộn linh kiện.
**Liên kết tiếng Hàn:** `수분 민감도 등급`.

## 12. temperature-humidity-bias /ˈtɛmprətʃər hjuˈmɪdəti ˈbaɪəs/
**Part of speech:** noun
**Core meaning (English):** an environmental reliability test that combines elevated temperature, humidity, and electrical bias.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test vừa nóng, ẩm và có điện áp để tăng tốc cơ chế ăn mòn hoặc leakage.
**Grammar & collocations:** `THB test` — test THB; `temperature-humidity-bias stress` — stress THB.
**Examples:** `The package passed temperature-humidity-bias without measurable leakage growth.` → Package vượt test THB mà leakage không tăng đáng kể.
**Liên kết tiếng Hàn:** `온습도 바이어스`.

## 13. accelerated life test /əkˈsɛləˌreɪtɪd laɪf tɛst/
**Part of speech:** noun
**Core meaning (English):** a test run under harsher conditions to estimate long-term reliability in a shorter time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đẩy nhiệt, điện áp hoặc tải lên để mô phỏng nhiều năm sử dụng trong thời gian ngắn.
**Grammar & collocations:** `ALT condition` — điều kiện ALT; `accelerated-life model` — model lifetime tăng tốc.
**Examples:** `The accelerated life test exposed a drift mechanism before volume production.` → Accelerated life test phát hiện cơ chế drift trước sản xuất hàng loạt.
**Liên kết tiếng Hàn:** `가속 수명 시험`.

## 14. mean time to failure /miːn taɪm tə ˈfeɪljər/
**Part of speech:** noun
**Core meaning (English):** the average operating time before members of a population fail under stated conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian hỏng trung bình của một quần thể device, không phải lời hứa từng device chắc chắn đạt mốc đó.
**Grammar & collocations:** `MTTF estimate` — ước tính MTTF; `increase mean time to failure` — tăng MTTF.
**Examples:** `Better cooling increased the estimated mean time to failure of the power stage.` → Làm mát tốt hơn tăng MTTF ước tính của power stage.
**Liên kết tiếng Hàn:** `평균 고장 시간`.

## 15. bathtub curve /ˈbæθˌtʌb kɝv/
**Part of speech:** noun
**Core meaning (English):** a reliability curve with high early failures, a relatively stable middle period, and rising wear-out failures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường cong giống bồn tắm: lỗi sớm cao, giai đoạn ổn định, rồi lỗi do mòn tăng.
**Grammar & collocations:** `bathtub-curve region` — vùng của đường cong; `wear-out tail` — đuôi wear-out.
**Examples:** `Burn-in was aimed at removing infant failures from the first section of the bathtub curve.` → Burn-in nhằm loại failure sớm khỏi phần đầu bathtub curve.
**Liên kết tiếng Hàn:** `욕조 곡선`.

## 16. burn-in /ˈbɝn ɪn/
**Part of speech:** noun
**Core meaning (English):** a controlled period of operation used to reveal early-life defects before shipment or deployment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cho device chạy có kiểm soát trước khi giao để lọc lỗi sớm.
**Grammar & collocations:** `burn-in test` — test burn-in; `burn-in screening` — screening burn-in.
**Examples:** `The supplier added burn-in for modules used in the aircraft control system.` → Nhà cung cấp thêm burn-in cho module dùng trong hệ thống điều khiển máy bay.
**Liên kết tiếng Hàn:** `번인`.

## 17. infant mortality /ˈɪnfənt mɔrˈtæləti/
**Part of speech:** noun
**Core meaning (English):** the concentration of failures early in a product's operating life because of latent manufacturing defects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “tử vong sớm” của sản phẩm; lỗi ẩn trong chế tạo bộc lộ ngay thời gian đầu.
**Grammar & collocations:** `infant-mortality failure` — failure sớm; `screen infant mortality` — lọc lỗi sớm.
**Examples:** `Process screening reduced infant mortality without changing the nominal circuit design.` → Screening process giảm infant mortality mà không đổi thiết kế mạch danh nghĩa.
**Liên kết tiếng Hàn:** `초기 고장`.

## 18. derating /diːˈreɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** operating a component below its maximum rated stress to create reliability margin.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chủ động dùng thấp hơn giới hạn datasheet để có margin và kéo dài lifetime.
**Grammar & collocations:** `voltage derating` — giảm mức điện áp; `thermal derating` — giảm mức nhiệt/tải.
**Examples:** `Voltage derating protected the transistor from long-term oxide stress.` → Voltage derating bảo vệ transistor khỏi stress oxide dài hạn.
**Liên kết tiếng Hàn:** `디레이팅`.

## 19. safe operating area /seɪf ˈɑpəˌreɪtɪŋ ˈɛriə/
**Part of speech:** noun
**Core meaning (English):** the range of voltage, current, temperature, and time combinations in which a device can operate safely.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng phối hợp các giới hạn mà device vẫn an toàn; vượt một trục cũng có thể gây hỏng.
**Grammar & collocations:** `SOA boundary` — biên SOA; `stay within the safe operating area` — giữ trong SOA.
**Examples:** `The protection circuit kept the switch inside its safe operating area during startup.` → Mạch bảo vệ giữ switch trong SOA khi khởi động.
**Liên kết tiếng Hàn:** `안전 동작 영역`.

## 20. thermal impedance budget /ˈθɝməl ɪmˈpiːdəns ˈbʌdʒət/
**Part of speech:** noun
**Core meaning (English):** the maximum allowable total thermal resistance across all parts of a heat path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách cản nhiệt tổng; package, interface và heatsink cùng chia sẻ giới hạn này.
**Grammar & collocations:** `allocate a thermal impedance budget` — phân bổ budget; `exceed the budget` — vượt budget.
**Examples:** `The designer allocated the thermal impedance budget before choosing the enclosure fan.` → Designer phân bổ thermal impedance budget trước khi chọn quạt enclosure.
**Liên kết tiếng Hàn:** `열 임피던스 예산`.

## Review in context

Long-term reliability can begin with **hot-carrier injection**, **negative-bias temperature instability**, and **self-heating**. Engineers calculate **junction-to-case thermal resistance**, then use **thermal cycling** and **power cycling** to expose **solder fatigue**, **package delamination**, **wire-bond lift**, or a weak **die attach**. Assembly rules include a **moisture sensitivity level**, while **temperature-humidity-bias** and an **accelerated life test** reveal environmental weaknesses. Reliability models estimate **mean time to failure** and interpret the **bathtub curve**. **Burn-in** screens **infant mortality**; **derating** and the **safe operating area** preserve margin, while a **thermal impedance budget** limits the complete heat path.

**Bản dịch tiếng Việt:** Reliability dài hạn có thể bắt đầu từ **hot-carrier injection**, **negative-bias temperature instability** và **self-heating**. Kỹ sư tính **junction-to-case thermal resistance**, rồi dùng **thermal cycling** và **power cycling** để bộc lộ **solder fatigue**, **package delamination**, **wire-bond lift** hoặc **die attach** yếu. Quy tắc lắp ráp bao gồm **moisture sensitivity level**, còn **temperature-humidity-bias** và **accelerated life test** bộc lộ điểm yếu môi trường. Model reliability ước tính **mean time to failure** và diễn giải **bathtub curve**. **Burn-in** lọc **infant mortality**; **derating** và **safe operating area** giữ margin, còn **thermal impedance budget** giới hạn toàn bộ đường truyền nhiệt.
