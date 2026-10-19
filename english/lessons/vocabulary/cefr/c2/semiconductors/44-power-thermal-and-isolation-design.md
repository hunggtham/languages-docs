# C2 Vocabulary — Power, thermal, and isolation design

This lesson connects package parasitics and board power delivery with heat flow, layout rules, and high-voltage insulation.

Flow: **package capacitance → return path → bulk capacitor → high-frequency bypass → power plane resonance → thermal resistance → junction-to-case → case-to-ambient → thermal transient → thermal via → copper pour → keepout zone → creepage distance → clearance distance → arc tracking → high-voltage isolation → insulation resistance → dielectric withstand → partial discharge → surge immunity**.

## 1. package capacitance /ˈpækɪdʒ kəˈpæsɪtəns/
**Part of speech:** noun
**Core meaning (English):** parasitic capacitance created by a package's leads, pads, die, and nearby conductors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** capacitance ký sinh do lead, pad, die và conductor gần trong package tạo ra.
**Grammar & collocations:** `package-capacitance model` — model; `estimate a high-speed pole` — ước tính.
**Examples:** `Package capacitance slowed the edge at the receiver input.` → Capacitance package làm chậm edge ở input receiver.
**Liên kết tiếng Hàn:** `패키지 정전 용량`.

## 2. return path /rɪˈtɜːrn pæθ/
**Part of speech:** noun
**Core meaning (English):** the conductive route that carries current back from a load or signal destination to its source.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường dẫn điện đưa dòng từ load/signal destination về source.
**Grammar & collocations:** `return-path discontinuity` — gián đoạn; `control loop area` — kiểm soát.
**Examples:** `A broken return path increased noise around the high-speed clock.` → Return path hỏng làm tăng noise quanh clock.
**Liên kết tiếng Hàn:** `귀환 경로`.

## 3. bulk capacitor /ˈbʌlk kəˈpæsɪtər/
**Part of speech:** noun
**Core meaning (English):** a relatively large capacitor that supplies or absorbs low-frequency load current on a power rail.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** capacitor lớn cấp/hấp thụ dòng load tần số thấp trên rail nguồn.
**Grammar & collocations:** `bulk-capacitor bank` — bank; `support a load step` — hỗ trợ.
**Examples:** `The bulk capacitor supplied the radio's first current surge.` → Capacitor bulk cấp surge dòng đầu của radio.
**Liên kết tiếng Hàn:** `벌크 커패시터`.

## 4. high-frequency bypass /ˌhaɪ ˈfriːkwənsi ˈbaɪpæs/
**Part of speech:** noun
**Core meaning (English):** a small, nearby capacitor path that shunts fast noise away from a powered device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường capacitor nhỏ gần device để shunt noise nhanh khỏi nguồn device.
**Grammar & collocations:** `high-frequency-bypass capacitor` — capacitor; `place close to a pin` — đặt.
**Examples:** `The high-frequency bypass reduced the spike at the processor supply pin.` → Bypass cao tần giảm spike ở pin nguồn processor.
**Liên kết tiếng Hàn:** `고주파 바이패스`.

## 5. power plane resonance /ˈpaʊər pleɪn ˈrezənəns/
**Part of speech:** noun
**Core meaning (English):** a ringing mode formed by the distributed inductance and capacitance of a board's power structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mode rung do inductance/capacitance phân bố của cấu trúc nguồn board.
**Grammar & collocations:** `power-plane-resonance peak` — peak; `damp a cavity mode` — giảm.
**Examples:** `Power plane resonance amplified the noise at one narrow frequency.` → Resonance plane nguồn khuếch đại noise ở frequency hẹp.
**Liên kết tiếng Hàn:** `전원 평면 공진`.

## 6. thermal resistance /ˈθɜːrməl rɪˈzɪstəns/
**Part of speech:** noun
**Core meaning (English):** a measure of how much temperature rises for a given amount of heat flowing through a path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức nhiệt tăng ứng với lượng heat đi qua một path.
**Grammar & collocations:** `thermal-resistance value` — value; `reduce the heat path` — giảm.
**Examples:** `A lower thermal resistance kept the die below its reliability limit.` → Resistance nhiệt thấp giữ die dưới limit.
**Liên kết tiếng Hàn:** `열 저항`.

## 7. junction-to-case /ˈdʒʌŋkʃən tə keɪs/
**Part of speech:** noun
**Core meaning (English):** a thermal path measurement from a semiconductor junction to its package case.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measurement path nhiệt từ junction semiconductor tới vỏ package.
**Grammar & collocations:** `junction-to-case resistance` — resistance; `characterize the package` — characterize.
**Examples:** `The datasheet specified junction-to-case resistance for a clamped heatsink.` → Datasheet chỉ resistance junction-case khi kẹp heatsink.
**Liên kết tiếng Hàn:** `접합부-케이스`.

## 8. case-to-ambient /keɪs tə ˈæmbiənt/
**Part of speech:** noun
**Core meaning (English):** a thermal path measurement from a package case to the surrounding air or environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** path nhiệt từ vỏ package tới không khí/môi trường quanh.
**Grammar & collocations:** `case-to-ambient resistance` — resistance; `model enclosure airflow` — mô hình.
**Examples:** `Case-to-ambient performance worsened when the enclosure vents were blocked.` → Hiệu năng case-ambient xấu khi lỗ thông bị chặn.
**Liên kết tiếng Hàn:** `케이스-주변`.

## 9. thermal transient /ˈθɜːrməl ˈtrænziənt/
**Part of speech:** noun
**Core meaning (English):** a temporary temperature response after power or heat flow changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** response nhiệt tạm thời sau đổi power hoặc heat flow.
**Grammar & collocations:** `thermal-transient curve` — curve; `capture a warm-up` — ghi.
**Examples:** `The thermal transient peaked seconds after the accelerator entered boost mode.` → Transient nhiệt peak vài giây sau boost.
**Liên kết tiếng Hàn:** `열 과도 현상`.

## 10. thermal via /ˈθɜːrməl ˈvaɪə/
**Part of speech:** noun
**Core meaning (English):** a plated vertical connection that conducts heat from a board pad into internal or back-side copper.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** connection đứng mạ đồng dẫn nhiệt từ pad vào copper bên trong/mặt sau.
**Grammar & collocations:** `thermal-via array` — array; `spread heat into a plane` — tản.
**Examples:** `The thermal via array lowered the regulator's board-side temperature.` → Array via nhiệt hạ nhiệt regulator phía board.
**Liên kết tiếng Hàn:** `열 비아`.

## 11. copper pour /ˈkɑːpər pɔːr/
**Part of speech:** noun
**Core meaning (English):** a large filled copper region on a circuit board used for current return, shielding, or heat spreading.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng đồng lớn trên board cho return, shielding hoặc tản nhiệt.
**Grammar & collocations:** `copper-pour clearance` — clearance; `fill a ground region` — đổ.
**Examples:** `The copper pour spread heat away from the power transistor.` → Vùng đồng tản nhiệt khỏi transistor nguồn.
**Liên kết tiếng Hàn:** `구리 포어`.

## 12. keepout zone /ˈkiːpˌaʊt zoʊn/
**Part of speech:** noun
**Core meaning (English):** a designated area where components, traces, or copper must not be placed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng quy định không được đặt component, trace hoặc copper.
**Grammar & collocations:** `keepout-zone boundary` — boundary; `reserve antenna clearance` — chừa.
**Examples:** `The keepout zone protected the high-voltage gap from accidental copper fill.` → Zone bảo vệ gap cao áp khỏi copper điền nhầm.
**Liên kết tiếng Hàn:** `배치 금지 구역`.

## 13. creepage distance /ˈkriːpɪdʒ ˈdɪstəns/
**Part of speech:** noun
**Core meaning (English):** the shortest distance along an insulating surface between two conductive parts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng ngắn nhất chạy dọc bề mặt cách điện giữa hai phần dẫn.
**Grammar & collocations:** `creepage-distance requirement` — requirement; `route around a slot` — route vòng.
**Examples:** `The design increased creepage distance for the humid industrial environment.` → Thiết kế tăng khoảng creepage cho môi trường ẩm.
**Liên kết tiếng Hàn:** `연면 거리`.

## 14. clearance distance /ˈklɪrəns ˈdɪstəns/
**Part of speech:** noun
**Core meaning (English):** the shortest distance through air between two conductive parts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng ngắn nhất xuyên không khí giữa hai phần dẫn.
**Grammar & collocations:** `clearance-distance rule` — rule; `separate high-voltage nodes` — tách.
**Examples:** `The connector failed its clearance distance after a metal fragment bridged the gap.` → Connector fail khoảng hở sau fragment kim loại bắc cầu.
**Liên kết tiếng Hàn:** `공간 거리`.

## 15. arc tracking /ˈɑːrk ˈtrækɪŋ/
**Part of speech:** noun
**Core meaning (English):** formation of a conductive carbonized path along an insulating surface after repeated arcing or contamination.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo path carbon dẫn điện dọc surface cách điện sau arc/nhiễm bẩn lặp.
**Grammar & collocations:** `arc-tracking resistance` — resistance; `prevent surface carbonization` — ngăn.
**Examples:** `Dust and moisture increased arc tracking across the connector insulator.` → Bụi và ẩm tăng tracking trên insulator.
**Liên kết tiếng Hàn:** `아크 트래킹`.

## 16. high-voltage isolation /ˌhaɪ ˈvoʊltɪdʒ ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** keeping a high-voltage domain electrically separate from accessible or low-voltage circuitry.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ domain cao áp tách điện khỏi circuit thấp áp hoặc người chạm.
**Grammar & collocations:** `high-voltage-isolation barrier` — barrier; `isolate a measurement channel` — cô lập.
**Examples:** `High-voltage isolation protected the control processor from the motor bus.` → Isolation bảo vệ processor khỏi bus motor.
**Liên kết tiếng Hàn:** `고전압 절연`.

## 17. insulation resistance /ˌɪnsəˈleɪʃən rɪˈzɪstəns/
**Part of speech:** noun
**Core meaning (English):** the resistance measured through or across an insulating material.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resistance đo xuyên qua hoặc giữa hai phía vật liệu cách điện.
**Grammar & collocations:** `insulation-resistance test` — test; `detect moisture ingress` — phát hiện.
**Examples:** `Insulation resistance fell after the cable absorbed humidity.` → Resistance insulation giảm sau cáp hút ẩm.
**Liên kết tiếng Hàn:** `절연 저항`.

## 18. dielectric withstand /ˌdaɪəˈlektrɪk wɪðˌstænd/
**Part of speech:** noun
**Core meaning (English):** the ability of an insulating system to tolerate a specified voltage without breaking down.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng insulation chịu voltage quy định mà không breakdown.
**Grammar & collocations:** `dielectric-withstand test` — test; `apply a hipot voltage` — áp.
**Examples:** `The transformer passed dielectric withstand after the potting cure was complete.` → Transformer qua withstand sau cure potting.
**Liên kết tiếng Hàn:** `내전압`.

## 19. partial discharge /ˈpɑːrʃəl dɪsˈtʃɑːrdʒ/
**Part of speech:** noun
**Core meaning (English):** a localized electrical discharge that only partly bridges an insulation system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phóng điện cục bộ chỉ bắc cầu một phần insulation.
**Grammar & collocations:** `partial-discharge inception` — điểm bắt đầu; `detect an internal void` — bắt.
**Examples:** `Partial discharge revealed a void inside the molded high-voltage module.` → Discharge lộ void trong module cao áp đúc.
**Liên kết tiếng Hàn:** `부분 방전`.

## 20. surge immunity /ˈsɜːrdʒ ɪˈmjuːnəti/
**Part of speech:** noun
**Core meaning (English):** the ability of equipment to tolerate a short, high-energy voltage or current surge without damage or unsafe behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng chịu surge voltage/current ngắn năng lượng cao mà không hỏng.
**Grammar & collocations:** `surge-immunity level` — level; `clamp a transient` — kẹp.
**Examples:** `The input filter improved surge immunity during the cable-disconnect test.` → Filter tăng immunity khi test ngắt cáp.
**Liên kết tiếng Hàn:** `서지 내성`.

## Review in context

**package capacitance** and a controlled **return path** shape fast power behavior; a **bulk capacitor** and **high-frequency bypass** supply different bands, while **power plane resonance** can amplify noise. Heat moves through **thermal resistance**, **junction-to-case**, **case-to-ambient**, and a **thermal transient**; **thermal vias** and a **copper pour** spread it. Layout reserves a **keepout zone**, **creepage distance**, and **clearance distance** to prevent **arc tracking**. **high-voltage isolation**, **insulation resistance**, **dielectric withstand**, **partial discharge**, and **surge immunity** protect the insulation system.

**Bản dịch tiếng Việt:** **package capacitance** và **return path** có kiểm soát định hình nguồn nhanh; **bulk capacitor** và **high-frequency bypass** cấp các dải khác nhau, còn **power plane resonance** có thể khuếch đại noise. Nhiệt đi qua **thermal resistance**, **junction-to-case**, **case-to-ambient** và **thermal transient**; **thermal via** cùng **copper pour** tản nhiệt. Layout chừa **keepout zone**, **creepage distance** và **clearance distance** để ngăn **arc tracking**. **high-voltage isolation**, **insulation resistance**, **dielectric withstand**, **partial discharge** và **surge immunity** bảo vệ hệ cách điện.
