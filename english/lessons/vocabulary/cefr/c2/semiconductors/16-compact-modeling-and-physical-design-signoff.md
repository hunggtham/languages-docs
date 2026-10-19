# C2 Vocabulary — Compact modeling and physical-design signoff

This lesson follows a transistor design from model calibration and process corners through layout effects, timing closure, and power-grid checks.

Flow: **compact model → BSIM → process corner → corner analysis → Monte Carlo mismatch → threshold-voltage mismatch → Pelgrom coefficient → parasitic extraction → design-rule deck → layout-dependent effect → guard ring → latch-up → overvoltage stress → IR drop → timing closure → static timing analysis → clock skew → power grid analysis → via resistance → electromigration limit**.

## 1. compact model /ˈkɑmpækt ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a mathematical model that represents a device's electrical behavior efficiently for circuit simulation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình gọn thay device thật bằng phương trình đủ chính xác để simulator chạy nhanh.
**Grammar & collocations:** `compact-model parameter` — tham số model; `calibrate a compact model` — hiệu chỉnh.
**Examples:** `The compact model reproduced the transistor's current across several voltages.` → Compact model tái hiện dòng transistor ở nhiều điện áp.
**Liên kết tiếng Hàn:** `컴팩트 모델`.

## 2. BSIM /ˈbiːˌsɪm/
**Part of speech:** noun
**Core meaning (English):** a family of industry-standard MOS transistor models used for circuit simulation across process technologies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** họ model MOS phổ biến, nối dữ liệu device với mô phỏng mạch.
**Grammar & collocations:** `BSIM parameter set` — bộ tham số BSIM; `fit a BSIM model` — fit model.
**Examples:** `The foundry delivered a BSIM model card for the new process node.` → Foundry cung cấp model card BSIM cho node mới.
**Liên kết tiếng Hàn:** `BSIM 모델`.

## 3. process corner /ˈprɑsɛs ˈkɔrnər/
**Part of speech:** noun
**Core meaning (English):** a modeled combination of manufacturing, voltage, and temperature conditions representing a fast, slow, or typical device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** góc điều kiện process như fast/slow, voltage và temperature để kiểm tra biên.
**Grammar & collocations:** `fast process corner` — corner nhanh; `PVT corner` — corner process-voltage-temperature.
**Examples:** `The logic failed only at the slow process corner and low supply voltage.` → Logic chỉ fail ở slow corner và supply voltage thấp.
**Liên kết tiếng Hàn:** `공정 코너`.

## 4. corner analysis /ˈkɔrnər əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** simulation across defined operating and manufacturing corners to test performance limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy cùng design ở nhiều góc PVT để tìm trường hợp xấu nhất.
**Grammar & collocations:** `multi-corner analysis` — phân tích nhiều corner; `run corner analysis` — chạy.
**Examples:** `Corner analysis exposed a hold-time violation at a hot fast corner.` → Corner analysis lộ violation hold-time ở corner nóng nhanh.
**Liên kết tiếng Hàn:** `코너 분석`.

## 5. Monte Carlo mismatch /ˈmɑnti ˈkɑrloʊ ˈmɪsmætʃ/
**Part of speech:** noun
**Core meaning (English):** simulated random variation between nominally identical devices using repeated statistical trials.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô phỏng nhiều lần để xem mismatch ngẫu nhiên làm circuit lệch ra sao.
**Grammar & collocations:** `Monte Carlo run` — lần chạy Monte Carlo; `mismatch distribution` — phân phối mismatch.
**Examples:** `Monte Carlo mismatch showed that the reference pair needed more area.` → Monte Carlo mismatch cho thấy cặp reference cần area lớn hơn.
**Liên kết tiếng Hàn:** `몬테카를로 불일치`.

## 6. threshold-voltage mismatch /ˈθrɛʃhoʊld ˈvoʊltɪdʒ ˈmɪsmætʃ/
**Part of speech:** noun
**Core meaning (English):** unwanted variation between the threshold voltages of devices intended to match.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hai transistor giống nhau nhưng ngưỡng lệch, gây offset hoặc sai bias.
**Grammar & collocations:** `reduce threshold-voltage mismatch` — giảm mismatch; `input-pair mismatch` — mismatch cặp input.
**Examples:** `Layout symmetry reduced threshold-voltage mismatch in the sensor amplifier.` → Layout đối xứng giảm mismatch điện áp ngưỡng trong amplifier sensor.
**Liên kết tiếng Hàn:** `문턱 전압 불일치`.

## 7. Pelgrom coefficient /ˈpɛlɡrəm koʊəˈfɪʃənt/
**Part of speech:** noun
**Core meaning (English):** a parameter describing how random device mismatch decreases as device area increases.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** coefficient liên hệ mismatch với diện tích transistor; area lớn thường match tốt hơn.
**Grammar & collocations:** `Pelgrom mismatch model` — model Pelgrom; `extract a Pelgrom coefficient` — trích coefficient.
**Examples:** `The designer used the Pelgrom coefficient to size the matched pair.` → Designer dùng Pelgrom coefficient để chọn kích thước cặp match.
**Liên kết tiếng Hàn:** `펠그롬 계수`.

## 8. parasitic extraction /pærəˈsɪtɪk ɪkˈstrækʃən/
**Part of speech:** noun
**Core meaning (English):** the calculation of unintended resistance, capacitance, and inductance from a physical layout.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trích các phần tử ký sinh mà layout thật thêm vào mạch.
**Grammar & collocations:** `post-layout parasitic extraction` — extraction sau layout; `extracted netlist` — netlist đã trích.
**Examples:** `Parasitic extraction revealed extra capacitance on the long clock route.` → Parasitic extraction lộ capacitance thêm trên đường clock dài.
**Liên kết tiếng Hàn:** `기생 성분 추출`.

## 9. design-rule deck /dɪˈzaɪn ruːl dɛk/
**Part of speech:** noun
**Core meaning (English):** the rule files and technology data used by physical-verification tools to check a layout.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ file công nghệ chứa luật DRC/LVS mà tool signoff dùng.
**Grammar & collocations:** `foundry design-rule deck` — deck của foundry; `run the rule deck` — chạy deck.
**Examples:** `The updated design-rule deck caught a spacing issue missed by the early checker.` → Deck mới bắt lỗi spacing mà checker sớm bỏ sót.
**Liên kết tiếng Hàn:** `설계 규칙 덱`.

## 10. layout-dependent effect /ˈleɪaʊt dɪˈpɛndənt ɪˌfɛkt/
**Part of speech:** noun
**Core meaning (English):** a device-behavior change caused by nearby layout geometry rather than by the schematic alone.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** layout xung quanh làm device thật khác model schematic đơn giản.
**Grammar & collocations:** `LDE-aware model` — model biết LDE; `layout-dependent-effect correction` — correction.
**Examples:** `The layout-dependent effect shifted the analog bias near a dense well edge.` → LDE làm bias analog lệch gần mép well dày.
**Liên kết tiếng Hàn:** `레이아웃 의존 효과`.

## 11. guard ring /ɡɑrd rɪŋ/
**Part of speech:** noun
**Core meaning (English):** a ring-shaped structure placed around sensitive devices to collect unwanted carriers and isolate noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vòng bảo vệ quanh device để hút carrier và giảm substrate noise.
**Grammar & collocations:** `deep guard ring` — guard ring sâu; `surround with a guard ring` — bao bằng.
**Examples:** `A guard ring isolated the precision reference from switching noise.` → Guard ring cách ly reference chính xác khỏi switching noise.
**Liên kết tiếng Hàn:** `가드 링`.

## 12. latch-up /ˈlætʃ ʌp/
**Part of speech:** noun
**Core meaning (English):** an unwanted low-resistance path in CMOS that can cause a sustained destructive current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấu trúc ký sinh bật lên như thyristor và hút dòng lớn không kiểm soát.
**Grammar & collocations:** `latch-up immunity` — khả năng chống latch-up; `trigger latch-up` — kích hoạt.
**Examples:** `The guard structure improved latch-up immunity around the high-voltage input.` → Cấu trúc guard cải thiện chống latch-up quanh input điện áp cao.
**Liên kết tiếng Hàn:** `래치업`.

## 13. overvoltage stress /ˌoʊvərˈvoʊltɪdʒ strɛs/
**Part of speech:** noun
**Core meaning (English):** electrical stress caused by a voltage exceeding a component's intended operating range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điện áp vượt range làm oxide, junction hoặc gate chịu stress bất thường.
**Grammar & collocations:** `overvoltage-stress test` — test stress; `survive overvoltage stress` — chịu được.
**Examples:** `The clamp protected the thin-oxide device from overvoltage stress.` → Clamp bảo vệ device oxide mỏng khỏi overvoltage stress.
**Liên kết tiếng Hàn:** `과전압 스트레스`.

## 14. IR drop /ˌaɪ ˈɑr drɑp/
**Part of speech:** noun
**Core meaning (English):** voltage loss caused by resistance in a power or ground path carrying current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dòng chạy qua resistance làm nguồn ở cuối đường thấp hơn nguồn đầu vào.
**Grammar & collocations:** `IR-drop map` — bản đồ IR drop; `mitigate IR drop` — giảm.
**Examples:** `The wide power strap reduced IR drop near the processor cluster.` → Power strap rộng giảm IR drop gần cụm processor.
**Liên kết tiếng Hàn:** `IR 전압 강하`.

## 15. timing closure /ˈtaɪmɪŋ ˈkloʊʒər/
**Part of speech:** noun
**Core meaning (English):** the process of adjusting a design until all required timing constraints are met.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa mọi path vào đúng giới hạn setup, hold, skew và frequency trước signoff.
**Grammar & collocations:** `timing-closure iteration` — vòng lặp closure; `achieve timing closure` — đạt closure.
**Examples:** `Timing closure required buffering several long control paths.` → Timing closure cần thêm buffer cho nhiều control path dài.
**Liên kết tiếng Hàn:** `타이밍 클로저`.

## 16. static timing analysis /ˈstætɪk ˈtaɪmɪŋ əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** a method that checks path delays against timing requirements without simulating every input sequence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích timing bằng graph/path, không cần chạy toàn bộ waveform input.
**Grammar & collocations:** `STA report` — report STA; `run static timing analysis` — chạy.
**Examples:** `Static timing analysis reported a negative slack on the memory interface.` → STA báo slack âm trên interface memory.
**Liên kết tiếng Hàn:** `정적 타이밍 분석`.

## 17. clock skew /klɑk skjuː/
**Part of speech:** noun
**Core meaning (English):** the difference in arrival time of a clock edge at different sequential elements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cùng một clock nhưng đến các register không đồng thời.
**Grammar & collocations:** `clock-skew budget` — ngân sách skew; `balance clock skew` — cân bằng.
**Examples:** `Clock skew reduced the available setup margin on the longest path.` → Clock skew giảm setup margin trên path dài nhất.
**Liên kết tiếng Hàn:** `클록 스큐`.

## 18. power grid analysis /ˈpaʊər ɡrɪd əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** analysis of voltage stability and current distribution across a chip's on-die power network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra mạng power trên chip có cấp điện đều và đủ không.
**Grammar & collocations:** `power-grid integrity` — integrity của grid; `run power grid analysis` — chạy.
**Examples:** `Power grid analysis found a weak region beneath the high-current accelerator.` → Analysis tìm vùng yếu dưới accelerator dòng cao.
**Liên kết tiếng Hàn:** `전원 그리드 분석`.

## 19. via resistance /ˈvaɪə rɪˈzɪstəns/
**Part of speech:** noun
**Core meaning (English):** the electrical resistance of a vertical interconnect connecting metal layers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resistance của via nối các tầng metal; via nhỏ hoặc lỗi làm power/signal suy giảm.
**Grammar & collocations:** `low via resistance` — resistance via thấp; `via-resistance variation` — variation.
**Examples:** `Redundant vias lowered via resistance on the crowded supply route.` → Via dự phòng giảm via resistance trên đường supply chật.
**Liên kết tiếng Hàn:** `비아 저항`.

## 20. electromigration limit /ɪˌlɛktroʊmaɪˈɡreɪʃən ˈlɪmət/
**Part of speech:** noun
**Core meaning (English):** the maximum current-density condition allowed before metal atoms migrate enough to threaten interconnect reliability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn dòng/mật độ dòng để metal không bị di chuyển và tạo void hoặc hillock.
**Grammar & collocations:** `electromigration-limited current` — dòng bị giới hạn; `check the electromigration limit` — kiểm tra.
**Examples:** `The router widened the bus to stay below the electromigration limit.` → Router mở rộng bus để dưới electromigration limit.
**Liên kết tiếng Hàn:** `일렉트로마이그레이션 한계`.

## Review in context

A **compact model** such as **BSIM** is simulated across each **process corner**, and **corner analysis** is supplemented by **Monte Carlo mismatch** and **threshold-voltage mismatch** estimates based on a **Pelgrom coefficient**. After **parasitic extraction**, the **design-rule deck** checks geometry and a **layout-dependent effect** is reviewed. A **guard ring** helps prevent **latch-up**, while protection limits **overvoltage stress**. Power engineers map **IR drop** and run **power grid analysis**; layout teams inspect **via resistance** and the **electromigration limit**. Finally, **timing closure**, **static timing analysis**, and **clock skew** determine whether the design is ready for signoff.

**Bản dịch tiếng Việt:** **Compact model** như **BSIM** được mô phỏng ở từng **process corner**, còn **corner analysis** được bổ sung bằng ước tính **Monte Carlo mismatch** và **threshold-voltage mismatch** dựa trên **Pelgrom coefficient**. Sau **parasitic extraction**, **design-rule deck** kiểm tra hình học và **layout-dependent effect** được review. **Guard ring** giúp ngăn **latch-up**, còn mạch bảo vệ giới hạn **overvoltage stress**. Kỹ sư power lập bản đồ **IR drop** và chạy **power grid analysis**; nhóm layout kiểm tra **via resistance** và **electromigration limit**. Cuối cùng, **timing closure**, **static timing analysis** và **clock skew** quyết định thiết kế đã sẵn sàng signoff chưa.
