# C2 Vocabulary — Memory programming, retention, and read margin

This lesson follows a nonvolatile memory cell from programming and verification through aging, interference, and error decoding.

Flow: **memory endurance → threshold voltage distribution → sense margin → write margin → read margin → bit error rate → program verify → read reference → reference cell → verify pulse → incremental step pulse → soft decode → hard decode → error floor → retention monitor → disturbance monitor → endurance cycle → wearout counter → cell-to-cell interference → neighbor coupling**.

## 1. memory endurance /ˈmeməri ɪnˈdjʊrəns/
**Part of speech:** noun
**Core meaning (English):** the number of program-and-erase operations a memory can tolerate before reliability degrades.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số lần program/erase memory chịu được trước khi reliability giảm.
**Grammar & collocations:** `memory-endurance rating` — rating; `stress a storage cell` — stress.
**Examples:** `The controller reserved spare blocks after estimating memory endurance for the log workload.` → Controller chừa block sau ước tính endurance cho workload log.
**Liên kết tiếng Hàn:** `메모리 내구성`.

## 2. threshold voltage distribution /ˈθreʃhoʊld ˈvoʊltɪdʒ ˌdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** the spread of threshold-voltage values across cells intended to represent the same state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ phân tán threshold voltage giữa các cell cùng state.
**Grammar & collocations:** `threshold-voltage-distribution tail` — phần đuôi; `separate adjacent states` — tách.
**Examples:** `A wider threshold voltage distribution reduced the available read margin.` → Distribution rộng làm giảm read margin.
**Liên kết tiếng Hàn:** `문턱 전압 분포`.

## 3. sense margin /ˈsens ˈmɑːrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** the voltage or current separation that lets a sensing circuit distinguish one stored state from another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách voltage/current giúp mạch sense phân biệt state lưu.
**Grammar & collocations:** `sense-margin budget` — budget; `resolve a weak state` — phân giải.
**Examples:** `The reference adjustment restored sense margin at the cold temperature corner.` → Chỉnh reference khôi phục margin ở corner lạnh.
**Liên kết tiếng Hàn:** `센스 마진`.

## 4. write margin /ˈraɪt ˈmɑːrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** the operating separation that allows a write operation to place a cell reliably at its target state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng vận hành để write đặt cell đúng state target đáng tin.
**Grammar & collocations:** `write-margin loss` — mất margin; `program a tight state` — ghi.
**Examples:** `A weak charge pump reduced write margin at the high-page address.` → Charge pump yếu làm giảm margin ghi ở address cao.
**Liên kết tiếng Hàn:** `쓰기 마진`.

## 5. read margin /ˈriːd ˈmɑːrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** the separation between a sensed value and the decision boundary used to read it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách giữa giá trị sense và boundary quyết định khi đọc.
**Grammar & collocations:** `read-margin degradation` — suy giảm; `shift a decision boundary` — dịch.
**Examples:** `Retention loss slowly consumed read margin in the oldest block.` → Retention loss ăn dần read margin ở block cũ.
**Liên kết tiếng Hàn:** `읽기 마진`.

## 6. bit error rate /bɪt ˈerər reɪt/
**Part of speech:** noun
**Core meaning (English):** the fraction of transmitted or retrieved bits that are incorrect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ bit truyền hoặc đọc ra bị sai.
**Grammar & collocations:** `bit-error-rate target` — target; `measure raw errors` — đo.
**Examples:** `The decoder kept the bit error rate below the link specification.` → Decoder giữ BER dưới spec link.
**Liên kết tiếng Hàn:** `비트 오류율`.

## 7. program verify /ˈproʊɡræm ˈverəˌfaɪ/
**Part of speech:** noun
**Core meaning (English):** checking a cell after programming to confirm that it reached the intended state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra cell sau ghi để xác nhận đạt state mong muốn.
**Grammar & collocations:** `program-verify pass` — pass; `retry a weak cell` — thử lại.
**Examples:** `Program verify detected the cell that needed one more pulse.` → Verify bắt cell cần thêm một pulse.
**Liên kết tiếng Hàn:** `프로그램 검증`.

## 8. read reference /ˈriːd ˈrefərəns/
**Part of speech:** noun
**Core meaning (English):** a reference level or condition used by a sense circuit to interpret a stored value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức/điều kiện chuẩn để mạch sense đọc value lưu.
**Grammar & collocations:** `read-reference trim` — chỉnh; `compare a cell current` — so sánh.
**Examples:** `The firmware selected a read reference based on the block's retention age.` → Firmware chọn reference theo tuổi retention block.
**Liên kết tiếng Hàn:** `읽기 기준`.

## 9. reference cell /ˈrefərəns sel/
**Part of speech:** noun
**Core meaning (English):** a cell with a known or controlled state used to calibrate or compare memory sensing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cell state biết/kiểm soát để calibrate hoặc so sánh sense memory.
**Grammar & collocations:** `reference-cell array` — array; `track a sense offset` — theo dõi.
**Examples:** `The reference cell tracked temperature drift during a long read operation.` → Cell chuẩn theo dõi drift nhiệt trong lượt đọc dài.
**Liên kết tiếng Hàn:** `기준 셀`.

## 10. verify pulse /ˈverəˌfaɪ pʌls/
**Part of speech:** noun
**Core meaning (English):** a short electrical pulse used to test whether a programmed state has reached its target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xung điện ngắn để kiểm tra state đã đạt target.
**Grammar & collocations:** `verify-pulse amplitude` — biên độ; `sense the programmed state` — sense.
**Examples:** `The verify pulse was deliberately weaker than the programming pulse.` → Xung verify yếu hơn xung program.
**Liên kết tiếng Hàn:** `검증 펄스`.

## 11. incremental step pulse /ˌɪnkrəˈmentəl step pʌls/
**Part of speech:** noun
**Core meaning (English):** a sequence of gradually increasing program pulses separated by verification checks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi pulse program tăng dần, xen kẽ check verify.
**Grammar & collocations:** `incremental-step-pulse scheme` — scheme; `tighten a state distribution` — siết.
**Examples:** `An incremental step pulse scheme reduced overshoot in the multi-level cell.` → Scheme pulse tăng dần giảm overshoot trong cell đa mức.
**Liên kết tiếng Hàn:** `증분 단계 펄스`.

## 12. soft decode /ˈsɔːft diːˈkoʊd/
**Part of speech:** noun
**Core meaning (English):** decoding that uses confidence information, not only a hard zero-or-one decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** decode dùng thông tin confidence, không chỉ quyết định 0/1 cứng.
**Grammar & collocations:** `soft-decode metric` — metric; `pass reliability information` — truyền.
**Examples:** `Soft decode recovered the page from cells near the read threshold.` → Decode mềm phục hồi page gần threshold đọc.
**Liên kết tiếng Hàn:** `소프트 디코딩`.

## 13. hard decode /ˈhɑːrd diːˈkoʊd/
**Part of speech:** noun
**Core meaning (English):** decoding that treats each sensed bit as a definite symbol before error correction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** decode coi mỗi bit sense là symbol chắc chắn trước sửa lỗi.
**Grammar & collocations:** `hard-decode input` — input; `make a binary decision` — quyết định.
**Examples:** `Hard decode failed where soft information still showed a plausible codeword.` → Decode cứng fail nơi thông tin mềm còn codeword hợp lý.
**Liên kết tiếng Hàn:** `하드 디코딩`.

## 14. error floor /ˈerər flɔːr/
**Part of speech:** noun
**Core meaning (English):** a minimum residual error rate that remains even when signal quality continues to improve.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức lỗi dư tối thiểu vẫn còn dù signal tiếp tục tốt hơn.
**Grammar & collocations:** `error-floor measurement` — đo; `identify an uncorrectable mechanism` — nhận diện.
**Examples:** `The curve reached an error floor caused by a recurring disturb event.` → Curve chạm floor do disturb lặp.
**Liên kết tiếng Hàn:** `오류 바닥`.

## 15. retention monitor /rɪˈtenʃən ˈmɑːnətər/
**Part of speech:** noun
**Core meaning (English):** a circuit or routine that tracks how stored values change while memory remains idle.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch/routine theo dõi value đổi ra sao khi memory idle.
**Grammar & collocations:** `retention-monitor threshold` — threshold; `sample an aged block` — lấy mẫu.
**Examples:** `The retention monitor flagged a block before its read margin became unsafe.` → Monitor retention flag block trước margin nguy hiểm.
**Liên kết tiếng Hàn:** `보존 모니터`.

## 16. disturbance monitor /dɪˈstɜːrbəns ˈmɑːnətər/
**Part of speech:** noun
**Core meaning (English):** a mechanism that detects unwanted changes caused by nearby read, write, or erase operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế bắt đổi value do read/write/erase ở cell lân cận.
**Grammar & collocations:** `disturbance-monitor event` — event; `count neighboring accesses` — đếm.
**Examples:** `The disturbance monitor increased refresh activity around a heavily read word line.` → Monitor tăng refresh quanh word line bị đọc nhiều.
**Liên kết tiếng Hàn:** `외란 모니터`.

## 17. endurance cycle /ɪnˈdjʊrəns ˈsaɪkəl/
**Part of speech:** noun
**Core meaning (English):** one complete repeatable stress sequence used to measure memory wear.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một chuỗi stress hoàn chỉnh lặp để đo memory wear.
**Grammar & collocations:** `endurance-cycle count` — số đếm; `cycle a block` — chạy cycle.
**Examples:** `The test added a verify read after every endurance cycle.` → Test thêm read verify sau mỗi cycle.
**Liên kết tiếng Hàn:** `내구성 사이클`.

## 18. wearout counter /ˈwerˌaʊt ˈkaʊntər/
**Part of speech:** noun
**Core meaning (English):** a stored count estimating how much operational wear a memory region has accumulated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** counter lưu ước tính wear tích lũy của vùng memory.
**Grammar & collocations:** `wearout-counter threshold` — threshold; `retire an aged block` — loại.
**Examples:** `The wearout counter retired the block before its error rate accelerated.` → Counter loại block trước rate lỗi tăng.
**Liên kết tiếng Hàn:** `마모 카운터`.

## 19. cell-to-cell interference /ˌsel tə sel ˌɪntərˈfɪrəns/
**Part of speech:** noun
**Core meaning (English):** unwanted electrical influence in one memory cell caused by the state or operation of another cell.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ảnh hưởng điện giữa cell do state/operation cell khác gây.
**Grammar & collocations:** `cell-to-cell-interference model` — model; `isolate an adjacent effect` — cô lập.
**Examples:** `Cell-to-cell interference shifted the victim's threshold after a neighbor was programmed.` → Interference dịch threshold cell nạn nhân sau ghi cell bên cạnh.
**Liên kết tiếng Hàn:** `셀 간 간섭`.

## 20. neighbor coupling /ˈneɪbər ˈkʌplɪŋ/
**Part of speech:** noun
**Core meaning (English):** electrical or magnetic coupling through which a nearby structure changes a cell's behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** coupling điện/từ khiến cấu trúc gần làm đổi behavior cell.
**Grammar & collocations:** `neighbor-coupling coefficient` — coefficient; `model adjacent fields` — mô hình.
**Examples:** `Layout spacing reduced neighbor coupling in the dense memory array.` → Khoảng cách layout giảm coupling trong array dày.
**Liên kết tiếng Hàn:** `인접 결합`.

## Review in context

Memory **endurance** shapes how many **endurance cycles** a block can survive. A widening **threshold voltage distribution** consumes **sense margin**, **write margin**, and **read margin**, raising the **bit error rate**. **program verify**, a **read reference**, a **reference cell**, and a **verify pulse** guide an **incremental step pulse** sequence. **soft decode** can use confidence that **hard decode** discards; an **error floor** may remain. A **retention monitor** and **disturbance monitor** track aging, while a **wearout counter** estimates remaining life. **cell-to-cell interference** and **neighbor coupling** explain why nearby operations shift a cell.

**Bản dịch tiếng Việt:** **memory endurance** quyết định block chịu được bao nhiêu **endurance cycle**. **Threshold voltage distribution** rộng ăn vào **sense margin**, **write margin** và **read margin**, làm tăng **bit error rate**. **program verify**, **read reference**, **reference cell** và **verify pulse** dẫn dắt chuỗi **incremental step pulse**. **soft decode** dùng confidence mà **hard decode** bỏ qua; **error floor** vẫn có thể còn. **retention monitor** và **disturbance monitor** theo dõi lão hóa, còn **wearout counter** ước tính tuổi thọ còn lại. **cell-to-cell interference** và **neighbor coupling** giải thích vì sao operation lân cận làm dịch state cell.
