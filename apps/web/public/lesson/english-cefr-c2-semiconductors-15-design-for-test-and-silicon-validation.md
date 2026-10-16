# C2 Vocabulary — Design for test and silicon validation

This lesson follows how engineers expose internal faults, generate tests, measure coverage, and learn from silicon results without making every failure visible only after shipment.

Flow: **design for test → scan chain → automatic test pattern generation → stuck-at fault → transition fault → built-in self-test → boundary scan → test compression → fault coverage → at-speed testing → wafer sort → shmoo plot → yield learning → redundancy analysis → memory built-in self-test → logic built-in self-test → diagnosis resolution → defect-oriented test → test escape → test overkill**.

## 1. design for test /dɪˈzaɪn fər tɛst/
**Part of speech:** noun
**Core meaning (English):** the practice of adding structures and architectural choices that make a circuit easier to observe, control, and test.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết kế để kiểm thử; ngay từ lúc vẽ chip đã chừa đường để đưa stimulus vào và quan sát lỗi bên trong.
**Grammar & collocations:** `design-for-test architecture` — kiến trúc DFT; `design-for-test rule` — rule; `add design-for-test logic` — thêm logic.
**Examples:** `Design for test reduced diagnosis time by exposing internal state that normal operation never revealed.` → Design for test giảm thời gian chẩn đoán bằng cách lộ state nội bộ mà vận hành bình thường không cho thấy.
**Liên kết tiếng Hàn:** `테스트 용이 설계` (teseuteu yongi seolgye) — thiết kế để kiểm thử.

## 2. scan chain /skæn tʃeɪn/
**Part of speech:** noun
**Core meaning (English):** a serial path linking storage elements so that their internal states can be shifted in and out for testing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi scan; nối các flip-flop thành một dây chuyền để nạp pattern và đọc lại state từng phần tử.
**Grammar & collocations:** `scan-chain length` — độ dài; `scan-chain stitching` — nối chuỗi; `shift a scan chain` — shift chuỗi.
**Examples:** `The tester shifted a known state through the scan chain before launching the functional clock sequence.` → Tester shift state đã biết qua scan chain trước khi phát chuỗi clock chức năng.
**Liên kết tiếng Hàn:** `스캔 체인` (seukaen chein) — chuỗi scan.

## 3. automatic test pattern generation /ˌɔtəˈmætɪk tɛst ˈpætɚn ˌdʒɛnəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** algorithmic generation of input patterns designed to activate and observe specified circuit faults.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sinh mẫu kiểm thử tự động; phần mềm tìm vector làm lỗi “bật lên” và truyền được đến điểm quan sát.
**Grammar & collocations:** `ATPG tool` — công cụ ATPG; `automatic-test-pattern generation runtime` — thời gian chạy; `run ATPG` — chạy ATPG.
**Examples:** `Automatic test pattern generation produced separate vectors for logic faults and memory interfaces.` → Automatic test pattern generation tạo vector riêng cho lỗi logic và interface bộ nhớ.
**Liên kết tiếng Hàn:** `자동 테스트 패턴 생성` (jadong teseuteu paeteon saengseong) — sinh mẫu tự động.

## 4. stuck-at fault /stʌk æt fɔlt/
**Part of speech:** noun
**Core meaning (English):** a model in which a signal is assumed to remain permanently at logic zero or logic one regardless of applied inputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi kẹt mức; dây tín hiệu như bị mắc cứng ở 0 hoặc 1 dù mạch cố đổi trạng thái.
**Grammar & collocations:** `stuck-at fault model` — mô hình; `stuck-at-zero fault` — lỗi kẹt 0; `detect a stuck-at fault` — phát hiện.
**Examples:** `The ATPG pattern activated the node and exposed a stuck-at fault at the output pin.` → Mẫu ATPG kích hoạt node và lộ stuck-at fault ở chân output.
**Liên kết tiếng Hàn:** `고착 결함` (gochak gyeolham) — lỗi kẹt mức.

## 5. transition fault /trænˈzɪʃən fɔlt/
**Part of speech:** noun
**Core meaning (English):** a timing-related fault in which a signal changes too slowly to meet the required transition time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi chuyển mức; tín hiệu vẫn đổi 0–1 nhưng chậm đến mức không kịp trong cửa sổ clock.
**Grammar & collocations:** `slow-to-rise transition fault` — lỗi rise chậm; `transition-fault test` — test; `detect a transition fault` — phát hiện.
**Examples:** `At-speed testing was needed because a low-frequency test could miss the transition fault.` → Cần at-speed testing vì test tần số thấp có thể bỏ sót transition fault.
**Liên kết tiếng Hàn:** `천이 결함` (cheoni gyeolham) — lỗi chuyển mức.

## 6. built-in self-test /ˌbɪlt ɪn sɛlf tɛst/
**Part of speech:** noun
**Core meaning (English):** circuitry that generates tests, observes responses, or evaluates status inside the chip itself.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tự kiểm thử tích hợp; chip tự tạo pattern và tự kiểm tra mà không cần toàn bộ thiết bị ngoài.
**Grammar & collocations:** `BIST controller` — controller BIST; `built-in-self-test sequence` — chuỗi; `run built-in self-test` — chạy BIST.
**Examples:** `Built-in self-test shortened board-level diagnosis after the device entered a recovery mode.` → Built-in self-test rút ngắn chẩn đoán cấp board sau khi thiết bị vào recovery mode.
**Liên kết tiếng Hàn:** `내장 자체 테스트` (naejang jache teseuteu) — tự kiểm thử tích hợp.

## 7. boundary scan /ˈbaʊndəri skæn/
**Part of speech:** noun
**Core meaning (English):** a test method that uses cells around chip I/O boundaries to control and observe pins and interconnects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scan biên; các cell quanh mép chip lần lượt điều khiển chân và kiểm tra đường nối giữa chip với board.
**Grammar & collocations:** `boundary-scan register` — thanh ghi; `boundary-scan test access` — truy cập; `run boundary scan` — chạy.
**Examples:** `Boundary scan isolated the open solder connection without probing every internal net.` → Boundary scan cô lập mối hàn hở mà không cần probe mọi net nội bộ.
**Liên kết tiếng Hàn:** `경계 스캔` (gyeonggye seukaen) — scan biên.

## 8. test compression /tɛst kəmˈprɛʃən/
**Part of speech:** noun
**Core meaning (English):** techniques that reduce the data volume and test time required to deliver patterns and collect responses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nén kiểm thử; gom nhiều scan channel hoặc nén response để giảm số bit tester phải truyền.
**Grammar & collocations:** `test-compression ratio` — tỷ lệ; `decompress test patterns` — giải nén pattern; `test-compression hardware` — phần cứng.
**Examples:** `Test compression cut tester memory requirements while preserving the targeted fault set.` → Test compression giảm yêu cầu bộ nhớ tester mà vẫn giữ tập lỗi mục tiêu.
**Liên kết tiếng Hàn:** `테스트 압축` (teseuteu apchuk) — nén kiểm thử.

## 9. fault coverage /fɔlt ˈkʌvərɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the proportion of modeled faults that a test suite detects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ bao phủ lỗi; trong toàn bộ fault model, test bắt được bao nhiêu phần trăm.
**Grammar & collocations:** `high fault coverage` — coverage cao; `fault-coverage report` — báo cáo; `improve fault coverage` — cải thiện.
**Examples:** `The team accepted a small coverage gap only after proving that the logic was electrically unreachable.` → Nhóm chỉ chấp nhận khoảng trống coverage nhỏ sau khi chứng minh logic đó không thể tiếp cận về điện.
**Liên kết tiếng Hàn:** `결함 커버리지` (gyeolham keobeoriji) — độ bao phủ lỗi.

## 10. at-speed testing /æt spiːd ˈtɛstɪŋ/
**Part of speech:** noun
**Core meaning (English):** testing that applies patterns at the operating speed needed to reveal timing and performance defects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm thử đúng tốc độ; chạy mạch ở clock thật để lỗi timing không bị che bởi test chậm.
**Grammar & collocations:** `at-speed-test pattern` — pattern; `launch-on-capture at-speed testing` — phương pháp; `perform at-speed testing` — thực hiện.
**Examples:** `At-speed testing exposed a marginal path that passed every low-frequency structural test.` → At-speed testing lộ một path biên đã vượt qua mọi structural test tần số thấp.
**Liên kết tiếng Hàn:** `실속도 테스트` (silsokdo teseuteu) — kiểm thử đúng tốc độ.

## 11. wafer sort /ˈweɪfɚ sɔrt/
**Part of speech:** noun
**Core meaning (English):** electrical testing of individual dies on a wafer before they are separated and packaged.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra wafer; test từng die còn nằm trên wafer để loại die hỏng trước khi đóng gói.
**Grammar & collocations:** `wafer-sort map` — bản đồ; `wafer-sort test time` — thời gian; `perform wafer sort` — thực hiện.
**Examples:** `Wafer sort removed weak dies before packaging capacity was spent on them.` → Wafer sort loại die yếu trước khi tốn năng lực đóng gói.
**Liên kết tiếng Hàn:** `웨이퍼 테스트` (weipeo teseuteu) — kiểm tra wafer.

## 12. shmoo plot /ʃmuː plɑt/
**Part of speech:** noun
**Core meaning (English):** a map showing pass and fail regions as two or more operating variables are swept.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu đồ shmoo; quét điện áp, tần số hoặc nhiệt để thấy “hình dạng vùng sống” của chip.
**Grammar & collocations:** `voltage-frequency shmoo plot` — shmoo V–f; `shmoo-plot boundary` — ranh giới; `generate a shmoo plot` — tạo.
**Examples:** `The shmoo plot showed that the memory failed only at high frequency and low supply voltage.` → Shmoo plot cho thấy bộ nhớ chỉ fail ở tần số cao và nguồn thấp.
**Liên kết tiếng Hàn:** `슈무 플롯` (syumu peullot) — biểu đồ shmoo.

## 13. yield learning /jiːld ˈlɝnɪŋ/
**Part of speech:** noun
**Core meaning (English):** the improvement in manufacturing yield that comes from analyzing failures and feeding their causes back into process and design changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** học từ yield; mỗi lô wafer thất bại cung cấp manh mối để process sau có nhiều die tốt hơn.
**Grammar & collocations:** `yield-learning cycle` — vòng học; `accelerate yield learning` — tăng tốc; `yield-learning database` — cơ sở dữ liệu.
**Examples:** `Failure clustering around one mask layer accelerated yield learning after the process change.` → Cụm lỗi quanh một lớp mask đẩy nhanh yield learning sau thay đổi process.
**Liên kết tiếng Hàn:** `수율 학습` (suyul hakseup) — học từ yield.

## 14. redundancy analysis /rɪˈdʌndənsi əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** analysis that determines whether spare rows, columns, or circuits can replace defective ones.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích dự phòng; tìm cách “đổi chỗ” phần tử hỏng bằng hàng/cột spare để cứu die.
**Grammar & collocations:** `memory redundancy analysis` — phân tích dự phòng bộ nhớ; `redundancy-analysis algorithm` — thuật toán; `run redundancy analysis` — chạy.
**Examples:** `Redundancy analysis repaired two defective memory rows without changing the external address map.` → Redundancy analysis sửa hai hàng nhớ lỗi mà không đổi bản đồ địa chỉ ngoài.
**Liên kết tiếng Hàn:** `여분 분석` (yeobun bunseok) — phân tích dự phòng.

## 15. memory built-in self-test /ˈmɛməri bɪlt ɪn sɛlf tɛst/
**Part of speech:** noun
**Core meaning (English):** on-chip logic that tests memory arrays for faults such as stuck cells, coupling, or address decoder errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** MBIST; logic trong chip tự ghi–đọc nhiều pattern để kiểm tra array bộ nhớ.
**Grammar & collocations:** `MBIST engine` — engine MBIST; `memory-BIST algorithm` — thuật toán; `run memory built-in self-test` — chạy.
**Examples:** `The memory built-in self-test detected an address-decoder fault during power-on diagnostics.` → Memory built-in self-test phát hiện lỗi address decoder trong chẩn đoán bật nguồn.
**Liên kết tiếng Hàn:** `메모리 내장 자체 테스트` (memori naejang jache teseuteu) — MBIST.

## 16. logic built-in self-test /ˈlɑdʒɪk bɪlt ɪn sɛlf tɛst/
**Part of speech:** noun
**Core meaning (English):** on-chip test logic that generates patterns and compacts responses for digital logic rather than a memory array.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** LBIST; chip tự chạy pattern pseudo-random qua logic và nén response để kiểm tra nội bộ.
**Grammar & collocations:** `LBIST signature` — chữ ký; `logic-BIST controller` — controller; `enable logic built-in self-test` — bật.
**Examples:** `Logic built-in self-test compared the compacted signature with a golden reference after reset.` → Logic built-in self-test so sánh signature nén với reference chuẩn sau reset.
**Liên kết tiếng Hàn:** `논리 내장 자체 테스트` (nonri naejang jache teseuteu) — LBIST.

## 17. diagnosis resolution /ˌdaɪəɡˈnoʊsɪs ˌrɛzəˈluːʃən/
**Part of speech:** noun
**Core meaning (English):** the fineness with which a failing test can distinguish among possible defect locations or mechanisms.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ phân giải chẩn đoán; test không chỉ nói chip fail mà còn khoanh được cell, net hoặc cơ chế hỏng cụ thể đến đâu.
**Grammar & collocations:** `high diagnosis resolution` — phân giải cao; `diagnosis-resolution limit` — giới hạn; `improve diagnosis resolution` — cải thiện.
**Examples:** `Additional scan observations improved diagnosis resolution from a failing block to a small set of cells.` → Quan sát scan bổ sung nâng độ phân giải từ block lỗi xuống một nhóm cell nhỏ.
**Liên kết tiếng Hàn:** `진단 해상도` (jindan haesangdo) — độ phân giải chẩn đoán.

## 18. defect-oriented test /dɪˈfɛkt ˈɔriˌɛntɪd tɛst/
**Part of speech:** noun
**Core meaning (English):** a test designed around physically plausible defects rather than only abstract logic-fault models.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm thử hướng khuyết tật; pattern nhắm vào void, bridge, contamination hoặc biến thiên process có thật.
**Grammar & collocations:** `defect-oriented-test model` — mô hình; `physical defect-oriented test` — test vật lý; `develop a defect-oriented test` — phát triển.
**Examples:** `Defect-oriented test patterns targeted bridges that the conventional stuck-at model did not represent.` → Defect-oriented test nhắm các bridge mà mô hình stuck-at truyền thống không biểu diễn.
**Liên kết tiếng Hàn:** `결함 지향 테스트` (gyeolham jihyang teseuteu) — kiểm thử hướng khuyết tật.

## 19. test escape /tɛst ɪˈskeɪp/
**Part of speech:** noun
**Core meaning (English):** a defective device that passes production tests and reaches a later stage or customer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi lọt test; chip hỏng thoát qua hàng rào kiểm thử và chỉ lộ ở hệ thống hoặc ngoài thị trường.
**Grammar & collocations:** `test-escape analysis` — phân tích; `reduce test escapes` — giảm; `field test escape` — lỗi lọt ra hiện trường.
**Examples:** `A field return triggered test-escape analysis and revealed a rare voltage-temperature corner.` → Hàng trả về kích hoạt phân tích test escape và lộ một góc điện áp–nhiệt hiếm.
**Liên kết tiếng Hàn:** `테스트 누락 불량` (teseuteu nurak bullyang) — lỗi lọt test.

## 20. test overkill /tɛst ˈoʊvɚˌkɪl/
**Part of speech:** noun
**Core meaning (English):** unnecessary rejection of good devices because a test limit is stricter than the product's actual requirements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test quá tay; chip tốt bị loại vì guardband hoặc limit đặt quá chặt so với spec sử dụng thật.
**Grammar & collocations:** `test-overkill risk` — rủi ro; `avoid test overkill` — tránh; `overkill analysis` — phân tích.
**Examples:** `Relaxing an unsupported guardband reduced test overkill without increasing customer returns.` → Nới guardband không có cơ sở giảm test overkill mà không làm tăng hàng trả về.
**Liên kết tiếng Hàn:** `테스트 과잉` (teseuteu gwang) — test quá tay.

## Review in context

**Design for test** adds a **scan chain** so **automatic test pattern generation** can target a **stuck-at fault** or a **transition fault**. **Built-in self-test** and **boundary scan** cover cases that external equipment cannot observe directly, while **test compression** reduces data volume. Engineers report **fault coverage** and use **at-speed testing** for timing defects. During **wafer sort**, a **shmoo plot** reveals voltage and frequency limits; failure data drives **yield learning** and **redundancy analysis**. **Memory built-in self-test** checks arrays, whereas **logic built-in self-test** checks digital logic. Better **diagnosis resolution** supports **defect-oriented test**. The team still monitors **test escape** and **test overkill** so that defective parts are not shipped and good parts are not discarded.

**Bản dịch tiếng Việt:**

Design for test thêm scan chain để automatic test pattern generation có thể nhắm stuck-at fault hoặc transition fault. Built-in self-test và boundary scan bao phủ những trường hợp thiết bị ngoài không thể quan sát trực tiếp, còn test compression giảm lượng dữ liệu. Kỹ sư báo cáo fault coverage và dùng at-speed testing cho lỗi timing. Trong wafer sort, shmoo plot cho thấy giới hạn điện áp và tần số; dữ liệu hỏng thúc đẩy yield learning và redundancy analysis. Memory built-in self-test kiểm tra array, còn logic built-in self-test kiểm tra logic số. Diagnosis resolution tốt hơn hỗ trợ defect-oriented test. Nhóm vẫn theo dõi test escape và test overkill để không xuất chip lỗi cũng không loại chip tốt.
