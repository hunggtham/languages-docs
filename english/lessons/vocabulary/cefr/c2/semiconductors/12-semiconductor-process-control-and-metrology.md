# C2 Vocabulary — Semiconductor process control and metrology

This lesson follows wafer production from process limits and inline measurement through statistical control, wafer acceptance, and die classification.

Flow: **process window → design rule → critical dimension uniformity → overlay budget → line-width roughness → wafer map → die sort → parametric test → probe card → inline metrology → endpoint detection → process excursion → statistical process control → control chart → capability index → lot genealogy → wafer acceptance test → binning → known-good wafer → yield excursion review**.

## 1. process window /ˈprɑsɛs ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the range of process conditions that produces acceptable device results.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng nhiệt, áp suất, thời gian và hóa chất mà process vẫn cho output đạt chuẩn.
**Grammar & collocations:** `wide process window` — cửa sổ process rộng; `map the process window` — lập bản đồ process window.
**Examples:** `The new etch chemistry widened the process window for the narrow trench.` → Hóa chất etch mới mở rộng process window cho trench hẹp.
**Liên kết tiếng Hàn:** `공정 창`.

## 2. design rule /dɪˈzaɪn ruːl/
**Part of speech:** noun
**Core meaning (English):** a minimum geometric or spacing constraint that a layout must obey to be manufacturable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** luật hình học tối thiểu cho layout, như khoảng cách dây hoặc độ rộng line.
**Grammar & collocations:** `design-rule check` — kiểm tra DRC; `relax a design rule` — nới rule.
**Examples:** `The layout failed a design rule because two metal lines were too close.` → Layout fail design rule vì hai metal line quá gần.
**Liên kết tiếng Hàn:** `설계 규칙`.

## 3. critical dimension uniformity /ˈkrɪtɪkəl daɪˈmɛnʃən ˌjuːnəˈfɔrməti/
**Part of speech:** noun
**Core meaning (English):** the consistency of a key feature size across a wafer, field, or production lot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ đồng đều của kích thước quan trọng; CD lệch giữa wafer làm transistor có đặc tính khác nhau.
**Grammar & collocations:** `CD uniformity budget` — ngân sách đồng đều CD; `within-wafer uniformity` — đồng đều trong wafer.
**Examples:** `Critical dimension uniformity improved after the chamber was retuned.` → CD uniformity cải thiện sau khi chỉnh lại chamber.
**Liên kết tiếng Hàn:** `임계 치수 균일도`.

## 4. overlay budget /ˈoʊvərˌleɪ ˈbʌdʒət/
**Part of speech:** noun
**Core meaning (English):** the total alignment error allowed between successive patterned layers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách sai lệch căn lớp; nhiều nguồn lỗi nhỏ phải cộng lại dưới giới hạn.
**Grammar & collocations:** `overlay error budget` — budget sai lệch overlay; `consume the overlay budget` — tiêu budget.
**Examples:** `The alignment correction consumed most of the overlay budget near the wafer edge.` → Correction căn chỉnh tiêu gần hết overlay budget gần mép wafer.
**Liên kết tiếng Hàn:** `오버레이 예산`.

## 5. line-width roughness /laɪn wɪdθ ˈrʌfnəs/
**Part of speech:** noun
**Core meaning (English):** small random variation in the width of a patterned line along its length.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cạnh line không đều, lúc dày lúc mỏng; roughness ảnh hưởng resistance và leakage.
**Grammar & collocations:** `line-edge roughness` — roughness mép line; `reduce line-width roughness` — giảm roughness.
**Examples:** `Line-width roughness increased variability in the narrow interconnect.` → Line-width roughness làm tăng variability trong interconnect hẹp.
**Liên kết tiếng Hàn:** `선폭 거칠기`.

## 6. wafer map /ˈweɪfər mæp/
**Part of speech:** noun
**Core meaning (English):** a spatial display of measurements, defects, or pass/fail results across a wafer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản đồ wafer cho thấy lỗi tập trung ở vùng nào thay vì chỉ một con số trung bình.
**Grammar & collocations:** `defect wafer map` — map defect; `inspect a wafer map` — xem wafer map.
**Examples:** `The wafer map showed a ring-shaped defect pattern around the perimeter.` → Wafer map cho thấy pattern lỗi hình vòng quanh chu vi.
**Liên kết tiếng Hàn:** `웨이퍼 맵`.

## 7. die sort /daɪ sɔrt/
**Part of speech:** noun
**Core meaning (English):** the electrical test and classification of individual dies on a wafer before packaging.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test từng die rồi phân loại pass, fail hoặc theo grade trước khi đóng gói.
**Grammar & collocations:** `wafer die sort` — die sort trên wafer; `die-sort data` — dữ liệu die sort.
**Examples:** `Die sort removed weak parts before they reached the expensive package stage.` → Die sort loại die yếu trước công đoạn package đắt tiền.
**Liên kết tiếng Hàn:** `다이 선별`.

## 8. parametric test /ˌpærəˈmɛtrɪk tɛst/
**Part of speech:** noun
**Core meaning (English):** a test that measures electrical parameters rather than only checking a functional pass or fail.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo thông số như threshold, leakage, resistance để biết process đang trôi theo hướng nào.
**Grammar & collocations:** `parametric-test limit` — giới hạn test parametric; `run a parametric test` — chạy test.
**Examples:** `The parametric test detected a threshold shift before functional failure appeared.` → Parametric test phát hiện threshold shift trước khi có functional failure.
**Liên kết tiếng Hàn:** `파라미터 시험`.

## 9. probe card /proʊb kɑrd/
**Part of speech:** noun
**Core meaning (English):** a test interface with many fine probes that contacts pads on a wafer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “bàn châm” tiếp xúc nhiều pad để tester đo die khi wafer chưa cắt.
**Grammar & collocations:** `probe-card contact` — tiếp xúc probe card; `replace a probe card` — thay probe card.
**Examples:** `Contaminated probe-card contacts produced false failures during wafer test.` → Contact probe card bẩn tạo false failure trong test wafer.
**Liên kết tiếng Hàn:** `프로브 카드`.

## 10. inline metrology /ˈɪnˌlaɪn məˈtrɑlədʒi/
**Part of speech:** noun
**Core meaning (English):** measurement performed during production so that the process can be corrected before the lot is finished.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo ngay trên dây chuyền, không chờ đến cuối mới biết process lệch.
**Grammar & collocations:** `inline-metrology tool` — tool đo inline; `feed inline data back` — hồi tiếp dữ liệu inline.
**Examples:** `Inline metrology caught film-thickness drift after the first few wafers.` → Inline metrology phát hiện drift độ dày film sau vài wafer đầu.
**Liên kết tiếng Hàn:** `인라인 계측`.

## 11. endpoint detection /ˈɛndˌpɔɪnt dɪˈtɛkʃən/
**Part of speech:** noun
**Core meaning (English):** the detection of the moment when an etch, deposition, or cleaning step reaches its intended endpoint.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhận biết đúng lúc process phải dừng để không etch thiếu hoặc quá.
**Grammar & collocations:** `etch endpoint detection` — detection endpoint etch; `endpoint signal` — tín hiệu endpoint.
**Examples:** `Optical endpoint detection stopped the etch when the target layer was exposed.` → Endpoint detection quang học dừng etch khi lớp đích lộ ra.
**Liên kết tiếng Hàn:** `종점 검출`.

## 12. process excursion /ˈprɑsɛs ɪkˈskɝʒən/
**Part of speech:** noun
**Core meaning (English):** a departure of a production process from its qualified or controlled condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process “đi ra ngoài đường chuẩn”, có thể do tool, material hoặc recipe.
**Grammar & collocations:** `detect a process excursion` — phát hiện excursion; `excursion review` — review excursion.
**Examples:** `The engineer quarantined the lot after a pressure process excursion.` → Kỹ sư cách ly lot sau một process excursion về áp suất.
**Liên kết tiếng Hàn:** `공정 이탈`.

## 13. statistical process control /stəˈtɪstɪkəl ˈprɑsɛs kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** the use of statistics to monitor process variation and distinguish normal noise from actionable change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng thống kê để biết variation còn bình thường hay đã cần can thiệp.
**Grammar & collocations:** `SPC limit` — giới hạn SPC; `apply statistical process control` — áp dụng SPC.
**Examples:** `Statistical process control alerted the team before the mean crossed the warning limit.` → SPC cảnh báo trước khi mean vượt warning limit.
**Liên kết tiếng Hàn:** `통계적 공정 관리`.

## 14. control chart /kənˈtroʊl tʃɑrt/
**Part of speech:** noun
**Core meaning (English):** a chart that plots measurements over time against a center line and statistically derived control limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu đồ theo dõi measurement theo thời gian, có giới hạn để phát hiện pattern bất thường.
**Grammar & collocations:** `X-bar control chart` — chart X-bar; `plot a control chart` — vẽ chart.
**Examples:** `The control chart showed a slow upward trend rather than random scatter.` → Control chart cho thấy xu hướng tăng chậm chứ không phải scatter ngẫu nhiên.
**Liên kết tiếng Hàn:** `관리도`.

## 15. capability index /ˌkeɪpəˈbɪləti ˈɪndɛks/
**Part of speech:** noun
**Core meaning (English):** a statistic that compares process variation and centering with the specification limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ số cho biết process có đủ nhỏ và đủ centered để nằm trong spec không.
**Grammar & collocations:** `process capability index` — chỉ số capability; `improve Cpk` — cải thiện Cpk.
**Examples:** `The capability index fell when within-wafer variation widened.` → Capability index giảm khi variation trong wafer rộng hơn.
**Liên kết tiếng Hàn:** `공정 능력 지수`.

## 16. lot genealogy /lɑt ˌdʒiːniˈɑlədʒi/
**Part of speech:** noun
**Core meaning (English):** the traceable history linking a production lot to materials, tools, recipes, operators, and split or merge operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “gia phả” của lot; biết lot đi qua tool, material và recipe nào.
**Grammar & collocations:** `lot-genealogy record` — hồ sơ genealogy; `trace lot genealogy` — truy vết.
**Examples:** `Lot genealogy linked the defect to a cleaning chemical shipment.` → Lot genealogy liên kết defect với một lô hóa chất làm sạch.
**Liên kết tiếng Hàn:** `로트 이력 추적`.

## 17. wafer acceptance test /ˈweɪfər əkˈsɛptəns tɛst/
**Part of speech:** noun
**Core meaning (English):** a set of tests used to decide whether a wafer or lot meets the conditions for release.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bài kiểm tra chấp nhận wafer trước khi release cho package hoặc khách hàng.
**Grammar & collocations:** `WAT data` — dữ liệu WAT; `pass wafer acceptance test` — vượt WAT.
**Examples:** `The lot passed wafer acceptance test after the outlier dies were reviewed.` → Lot vượt WAT sau khi review các die outlier.
**Liên kết tiếng Hàn:** `웨이퍼 승인 시험`.

## 18. binning /ˈbɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** sorting tested devices into performance or quality categories.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia device vào các bin theo speed, power, leakage hoặc grade.
**Grammar & collocations:** `performance binning` — binning theo performance; `bin a device` — xếp bin.
**Examples:** `Binning separated the fastest dies for the premium product line.` → Binning tách die nhanh nhất cho dòng sản phẩm premium.
**Liên kết tiếng Hàn:** `빈닝`.

## 19. known-good wafer /noʊn ɡʊd ˈweɪfər/
**Part of speech:** noun
**Core meaning (English):** a wafer verified to meet defined electrical and process criteria before it is used in a later integration step.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** wafer đã được xác nhận tốt trước khi ghép hoặc đóng gói tiếp.
**Grammar & collocations:** `known-good-wafer shipment` — lô wafer tốt; `qualify a known-good wafer` — qualify wafer.
**Examples:** `The 3D integration line accepted only known-good wafers from the previous process.` → Dây chuyền 3D chỉ nhận known-good wafer từ process trước.
**Liên kết tiếng Hàn:** `검증된 양품 웨이퍼`.

## 20. yield excursion review /jiːld ɪkˈskɝʒən rɪˈvjuː/
**Part of speech:** noun
**Core meaning (English):** a structured investigation into an unusual change in the fraction of passing devices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cuộc review khi yield tụt hoặc tăng bất thường để tìm nguyên nhân và hành động sửa.
**Grammar & collocations:** `formal yield-excursion review` — review chính thức; `open an excursion review` — mở review.
**Examples:** `A yield excursion review compared wafer maps, recipes, and lot genealogy.` → Yield excursion review so sánh wafer map, recipe và lot genealogy.
**Liên kết tiếng Hàn:** `수율 이탈 검토`.

## Review in context

Manufacturing engineers define a **process window** within each **design rule** and track **critical dimension uniformity**, the **overlay budget**, and **line-width roughness** on a **wafer map**. After **die sort**, a **parametric test** uses a **probe card**, while **inline metrology** and **endpoint detection** catch drift early. A **process excursion** is monitored by **statistical process control** and its **control chart**; a **capability index** shows whether variation fits the specification. **Lot genealogy** supports a **wafer acceptance test**. Passing parts can be grouped by **binning**, and a **known-good wafer** can move to integration. If yield changes unexpectedly, a **yield excursion review** connects the evidence.

**Bản dịch tiếng Việt:** Kỹ sư sản xuất xác định **process window** trong từng **design rule**, rồi theo dõi **critical dimension uniformity**, **overlay budget** và **line-width roughness** trên **wafer map**. Sau **die sort**, **parametric test** dùng **probe card**, còn **inline metrology** và **endpoint detection** bắt drift sớm. **Process excursion** được theo dõi bằng **statistical process control** và **control chart**; **capability index** cho biết variation có nằm trong spec không. **Lot genealogy** hỗ trợ **wafer acceptance test**. Device đạt có thể được chia bằng **binning**, và **known-good wafer** có thể chuyển sang integration. Nếu yield thay đổi bất thường, **yield excursion review** kết nối các bằng chứng.
