# C2 Vocabulary — Design-for-test and silicon validation

This lesson follows an integrated circuit from structural test insertion through wafer screening, first-silicon bring-up, and yield learning.

Flow: **design-for-test → scan chain → automatic test pattern generation → stuck-at fault → transition fault → scan compression → boundary scan → built-in self-test → memory BIST → logic BIST → JTAG test access port → wafer sort → probe card → burn-in → silicon bring-up → post-silicon validation → silicon erratum → speed binning → parametric test → yield learning**.

## 1. design-for-test /dɪˈzaɪn fər tɛst/
**Part of speech:** noun
**Core meaning (English):** the deliberate addition of circuit structures and controls that make an integrated circuit easier to test after fabrication.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết kế thêm đường và logic để chip có thể được kiểm tra hiệu quả.
**Grammar & collocations:** `design-for-test architecture` — architecture; `add design-for-test logic` — thêm.
**Examples:** `Design-for-test logic reduced the time needed to isolate a failing memory array.` → Logic DFT giảm thời gian cô lập memory array lỗi.
**Liên kết tiếng Hàn:** `테스트 용이 설계`.

## 2. scan chain /skæn tʃeɪn/
**Part of speech:** noun
**Core meaning (English):** a serial path that links selected flip-flops so their internal states can be shifted in and out for testing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi flip-flop nối tiếp để nạp và đọc trạng thái nội bộ.
**Grammar & collocations:** `scan-chain insertion` — insertion; `shift a scan chain` — shift.
**Examples:** `The scan chain exposed an internal control state that functional pins could not reach.` → Scan chain lộ state nội bộ mà pin chức năng không chạm tới.
**Liên kết tiếng Hàn:** `스캔 체인`.

## 3. automatic test pattern generation /ˌɔtəˈmætɪk tɛst ˈpætərn ˌdʒɛnəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the computational process of creating input patterns that activate and observe targeted circuit faults.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuật toán sinh pattern để kích hoạt và quan sát fault cụ thể.
**Grammar & collocations:** `automatic-test-pattern-generation tool` — tool; `generate a detection pattern` — sinh.
**Examples:** `Automatic test pattern generation found a sequence that sensitized the hidden bridge fault.` → ATPG tìm sequence kích hoạt bridge fault ẩn.
**Liên kết tiếng Hàn:** `자동 테스트 패턴 생성`.

## 4. stuck-at fault /stʌk æt fɔlt/
**Part of speech:** noun
**Core meaning (English):** a modeled defect in which a signal behaves as if it is permanently fixed at logic zero or logic one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu bị kẹt vĩnh viễn ở 0 hoặc 1.
**Grammar & collocations:** `stuck-at-fault coverage` — coverage; `detect a stuck-at fault` — phát hiện.
**Examples:** `The test set achieved high stuck-at fault coverage but missed a timing defect.` → Test bắt được fault kẹt nhưng bỏ sót lỗi timing.
**Liên kết tiếng Hàn:** `고착 결함`.

## 5. transition fault /trænˈzɪʃən fɔlt/
**Part of speech:** noun
**Core meaning (English):** a timing-related defect in which a signal changes too slowly from one logic value to the other.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** signal chuyển 0→1 hoặc 1→0 quá chậm so với clock.
**Grammar & collocations:** `transition-fault pattern` — pattern; `screen for slow-to-rise defects` — sàng lọc.
**Examples:** `A transition fault passed a low-speed check but failed at the target clock rate.` → Fault qua test chậm nhưng fail ở clock mục tiêu.
**Liên kết tiếng Hàn:** `천이 결함`.

## 6. scan compression /skæn kəmˈprɛʃən/
**Part of speech:** noun
**Core meaning (English):** a technique that reduces test data volume and shift time by compacting scan responses and expanding test stimuli.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nén response và mở rộng stimulus để giảm dữ liệu test.
**Grammar & collocations:** `scan-compression ratio` — ratio; `compact scan responses` — nén.
**Examples:** `Scan compression shortened production test time without removing the required fault patterns.` → Nén scan rút ngắn test mà vẫn giữ pattern cần thiết.
**Liên kết tiếng Hàn:** `스캔 압축`.

## 7. boundary scan /ˈbaʊndəri skæn/
**Part of speech:** noun
**Core meaning (English):** a test method that places controllable cells around chip I/O boundaries to examine board-level connections.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cell quanh I/O giúp kiểm tra kết nối chip–board.
**Grammar & collocations:** `boundary-scan register` — register; `test board interconnects` — kiểm tra.
**Examples:** `Boundary scan identified an open solder joint beneath a dense package.` → Boundary scan tìm mối hàn hở dưới package dày.
**Liên kết tiếng Hàn:** `경계 스캔`.

## 8. built-in self-test /ˌbɪlt ɪn sɛlf tɛst/
**Part of speech:** noun
**Core meaning (English):** test hardware embedded in a chip that generates stimuli and evaluates responses internally.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chip tự tạo test và tự đánh giá response.
**Grammar & collocations:** `built-in-self-test controller` — controller; `run a self-test` — chạy.
**Examples:** `The built-in self-test ran during boot and quarantined a degraded memory bank.` → BIST chạy lúc boot và cách ly bank suy giảm.
**Liên kết tiếng Hàn:** `내장 자체 테스트`.

## 9. memory BIST /ˈmɛməri bɪst/
**Part of speech:** noun
**Core meaning (English):** a built-in test engine that writes and reads algorithmic patterns to detect faults in embedded memory.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** BIST chuyên cho memory, chạy pattern write/read.
**Grammar & collocations:** `memory-BIST algorithm` — algorithm; `test an SRAM macro` — test.
**Examples:** `Memory BIST detected a coupling fault between adjacent SRAM cells.` → MBIST phát hiện coupling fault giữa cell SRAM kề nhau.
**Liên kết tiếng Hàn:** `메모리 BIST`.

## 10. logic BIST /ˈlɑdʒɪk bɪst/
**Part of speech:** noun
**Core meaning (English):** a built-in test scheme that exercises logic using internally generated patterns and a response signature.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** BIST cho logic, tự sinh pattern và signature.
**Grammar & collocations:** `logic-BIST signature` — signature; `exercise a datapath` — kích hoạt.
**Examples:** `Logic BIST compressed millions of internal responses into one comparison signature.` → LBIST nén hàng triệu response thành signature để so.
**Liên kết tiếng Hàn:** `논리 BIST`.

## 11. JTAG test access port /ˈdʒeɪ tæɡ tɛst ˈæksɛs pɔrt/
**Part of speech:** noun
**Core meaning (English):** a standardized serial interface used to control boundary-scan operations and access chip test registers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cổng serial chuẩn để điều khiển scan và register test.
**Grammar & collocations:** `JTAG-test-access-port controller` — controller; `shift a JTAG instruction` — shift.
**Examples:** `The JTAG test access port loaded a debug instruction without disturbing application traffic.` → TAP nạp instruction debug mà không ảnh hưởng traffic app.
**Liên kết tiếng Hàn:** `JTAG 테스트 액세스 포트`.

## 12. wafer sort /ˈweɪfər sɔrt/
**Part of speech:** noun
**Core meaning (English):** electrical screening of individual dies while they remain on the wafer before packaging.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test từng die ngay trên wafer trước khi cắt và đóng gói.
**Grammar & collocations:** `wafer-sort result` — result; `screen dies at wafer sort` — sàng lọc.
**Examples:** `Wafer sort removed dies with excessive leakage before packaging resources were spent.` → Wafer sort loại die rò điện cao trước khi đóng gói.
**Liên kết tiếng Hàn:** `웨이퍼 선별 검사`.

## 13. probe card /proʊb kɑrd/
**Part of speech:** noun
**Core meaning (English):** a precision interface that contacts many die pads so automated equipment can test a wafer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giao diện đầu dò chạm nhiều pad của die để tester đo.
**Grammar & collocations:** `probe-card alignment` — alignment; `contact wafer pads` — tiếp xúc.
**Examples:** `Probe-card alignment had to remain stable while the wafer stage moved between dies.` → Probe card phải giữ alignment khi stage di chuyển.
**Liên kết tiếng Hàn:** `프로브 카드`.

## 14. burn-in /ˈbɝn ɪn/
**Part of speech:** noun
**Core meaning (English):** deliberate operation of devices under elevated stress to expose early-life failures before shipment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy chip nóng và căng để loại lỗi sớm.
**Grammar & collocations:** `burn-in condition` — condition; `subject devices to burn-in` — đưa vào.
**Examples:** `Burn-in exposed a marginal power rail that passed room-temperature testing.` → Burn-in lộ rail nguồn biên mà test nhiệt độ phòng không thấy.
**Liên kết tiếng Hàn:** `번인`.

## 15. silicon bring-up /ˈsɪlɪkən brɪŋ ʌp/
**Part of speech:** noun
**Core meaning (English):** the first controlled activation and debugging of a newly fabricated chip on real hardware.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lần đầu bật chip silicon thật và tìm cách làm nó chạy.
**Grammar & collocations:** `silicon-bring-up plan` — plan; `bring up first silicon` — bring up.
**Examples:** `Silicon bring-up began with a minimal clock and a read-only boot path.` → Bring-up bắt đầu bằng clock tối thiểu và boot chỉ đọc.
**Liên kết tiếng Hàn:** `실리콘 브링업`.

## 16. post-silicon validation /poʊst ˈsɪlɪkən ˌvæləˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** testing and characterizing a chip after fabrication across real workloads, environments, and operating limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác nhận chip thật qua workload và điều kiện vận hành đa dạng.
**Grammar & collocations:** `post-silicon-validation campaign` — campaign; `validate a feature on hardware` — xác nhận.
**Examples:** `Post-silicon validation found a rare coherency failure under many-core contention.` → Validation sau silicon tìm lỗi coherency hiếm khi nhiều core tranh chấp.
**Liên kết tiếng Hàn:** `실리콘 후 검증`.

## 17. silicon erratum /ˈsɪlɪkən ɛˈreɪtəm/
**Part of speech:** noun
**Core meaning (English):** a documented hardware behavior that deviates from the intended specification and may require a workaround.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi hoặc hành vi silicon khác spec, cần ghi rõ và workaround.
**Grammar & collocations:** `silicon-erratum notice` — notice; `publish a workaround` — công bố.
**Examples:** `The silicon erratum required firmware to avoid one sequence of low-power transitions.` → Erratum yêu cầu firmware tránh một sequence power thấp.
**Liên kết tiếng Hàn:** `실리콘 정오표`.

## 18. speed binning /spiːd ˈbɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** sorting manufactured devices into performance grades according to measured frequency, voltage, or power limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia chip thành bin tốc độ dựa trên giới hạn đo được.
**Grammar & collocations:** `speed-binning threshold` — threshold; `bin a processor` — phân loại.
**Examples:** `Speed binning separated parts that reached the premium frequency from those needing a lower grade.` → Binning tách chip đạt tần số premium.
**Liên kết tiếng Hàn:** `속도 빈닝`.

## 19. parametric test /ˌpærəˈmɛtrɪk tɛst/
**Part of speech:** noun
**Core meaning (English):** measurement of electrical characteristics such as leakage, threshold, timing, or drive strength rather than only pass/fail logic behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo thông số điện cụ thể, không chỉ hỏi chip pass hay fail.
**Grammar & collocations:** `parametric-test limit` — limit; `measure leakage current` — đo.
**Examples:** `Parametric test showed a gradual leakage shift across the outer wafer edge.` → Test tham số cho thấy leakage tăng dần ở mép wafer.
**Liên kết tiếng Hàn:** `파라메트릭 테스트`.

## 20. yield learning /jiːld ˈlɝnɪŋ/
**Part of speech:** noun
**Core meaning (English):** the systematic use of test, defect, and process data to improve the fraction of manufactured devices that meet specification.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học từ dữ liệu lỗi để tăng tỷ lệ die đạt chuẩn.
**Grammar & collocations:** `yield-learning loop` — loop; `feed failure data into process improvement` — đưa vào.
**Examples:** `Yield learning linked a spatial defect pattern to one lithography chamber.` → Yield learning nối pattern lỗi không gian với một chamber lithography.
**Liên kết tiếng Hàn:** `수율 학습`.

## Review in context

**Design-for-test** adds structures such as a **scan chain**, enabling **automatic test pattern generation** for a **stuck-at fault** or **transition fault**. **Scan compression** reduces test volume, while **boundary scan** checks board connections. **Built-in self-test**, including **memory BIST** and **logic BIST**, moves some testing inside the chip; a **JTAG test access port** controls standard serial access. At the wafer stage, **wafer sort** uses a **probe card** to screen dies, and **burn-in** stresses packaged devices. Engineers then perform **silicon bring-up** and **post-silicon validation**, document each **silicon erratum**, and use **speed binning** and **parametric test** to grade devices. The resulting data drives **yield learning** and process improvement.

**Bản dịch tiếng Việt:** **Design-for-test** thêm cấu trúc như **scan chain**, cho phép **automatic test pattern generation** tìm **stuck-at fault** hoặc **transition fault**. **Scan compression** giảm dữ liệu test, còn **boundary scan** kiểm tra kết nối board. **Built-in self-test**, gồm **memory BIST** và **logic BIST**, đưa một phần việc test vào trong chip; **JTAG test access port** điều khiển truy cập serial chuẩn. Ở giai đoạn wafer, **wafer sort** dùng **probe card** để sàng lọc die, còn **burn-in** tạo stress cho chip đã đóng gói. Sau đó kỹ sư làm **silicon bring-up** và **post-silicon validation**, ghi nhận từng **silicon erratum**, rồi dùng **speed binning** và **parametric test** để phân hạng. Dữ liệu cuối cùng thúc đẩy **yield learning** và cải tiến quy trình.
