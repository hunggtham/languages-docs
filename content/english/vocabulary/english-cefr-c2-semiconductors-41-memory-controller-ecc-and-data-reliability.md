# C2 Vocabulary — Memory controllers, ECC, and data reliability

This lesson connects memory-array impairments with refresh policy, error-correction overhead, and iterative decoder behavior.

Flow: **sense amplifier offset → bit-line leakage → word-line resistance → array efficiency → row hammer → erase disturb → retention bake → data refresh → refresh interval → scrub threshold → error correction overhead → parity overhead → code rate → soft information → log-likelihood ratio → syndrome decode → decoder convergence → iterative decode → low-density parity-check → bch code**.

## 1. sense amplifier offset /ˈsens ˈæmpləˌfaɪər ˈɔːfset/
**Part of speech:** noun
**Core meaning (English):** a systematic input difference that makes a sense amplifier favor one state over another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chênh lệch input có hệ thống khiến sense amplifier thiên về một state.
**Grammar & collocations:** `sense-amplifier-offset trim` — chỉnh; `cancel an input bias` — triệt.
**Examples:** `Sense amplifier offset narrowed the read margin for the weakest cells.` → Offset sense amplifier làm hẹp margin đọc của cell yếu.
**Liên kết tiếng Hàn:** `감지 증폭기 오프셋`.

## 2. bit-line leakage /ˈbɪt laɪn ˈliːkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** unwanted current that changes the voltage on a memory bit line.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dòng rò đổi voltage trên bit line memory.
**Grammar & collocations:** `bit-line-leakage path` — path; `isolate an unselected cell` — cô lập.
**Examples:** `Bit-line leakage made an unselected cell appear partially programmed.` → Leakage bit line làm cell không chọn như đã program một phần.
**Liên kết tiếng Hàn:** `비트 라인 누설`.

## 3. word-line resistance /ˈwɜːrd laɪn rɪˈzɪstəns/
**Part of speech:** noun
**Core meaning (English):** resistance along a word line that causes voltage loss or timing variation across an array.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điện trở dọc word line gây sụt voltage hoặc lệch timing trong array.
**Grammar & collocations:** `word-line-resistance gradient` — gradient; `compensate a far-end drop` — bù.
**Examples:** `Word-line resistance caused the far cells to receive a weaker program voltage.` → Resistance làm cell xa nhận voltage program yếu hơn.
**Liên kết tiếng Hàn:** `워드 라인 저항`.

## 4. array efficiency /əˈreɪ ɪˈfɪʃənsi/
**Part of speech:** noun
**Core meaning (English):** the fraction of a memory array's physical area or capacity that stores useful user data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần diện tích/capacity array thực sự chứa data user hữu ích.
**Grammar & collocations:** `array-efficiency tradeoff` — tradeoff; `reserve redundancy space` — chừa.
**Examples:** `Extra parity and spare rows reduced array efficiency but improved reliability.` → Parity và row dự phòng giảm efficiency nhưng tăng reliability.
**Liên kết tiếng Hàn:** `어레이 효율`.

## 5. row hammer /roʊ ˈhæmər/
**Part of speech:** noun
**Core meaning (English):** repeatedly activating one memory row until nearby rows suffer unintended state changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kích hoạt lặp một row đến mức row lân cận đổi state ngoài ý muốn.
**Grammar & collocations:** `row-hammer mitigation` — giảm thiểu; `refresh adjacent rows` — refresh.
**Examples:** `The controller detected row hammer activity and refreshed neighboring rows early.` → Controller bắt row hammer và refresh row cạnh sớm.
**Liên kết tiếng Hàn:** `로우 해머`.

## 6. erase disturb /ɪˈreɪs dɪˈstɜːrb/
**Part of speech:** noun
**Core meaning (English):** an unintended state change in a cell caused by erasing a nearby block or region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cell đổi state ngoài ý muốn do erase block/vùng gần.
**Grammar & collocations:** `erase-disturb test` — test; `protect neighboring pages` — bảo vệ.
**Examples:** `The firmware inserted a verify pass to catch erase disturb in the adjacent page.` → Firmware thêm verify để bắt disturb ở page cạnh.
**Liên kết tiếng Hàn:** `소거 방해`.

## 7. retention bake /rɪˈtenʃən beɪk/
**Part of speech:** noun
**Core meaning (English):** an accelerated high-temperature storage test used to reveal data-retention weakness.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test lưu nhiệt cao tăng tốc để lộ yếu retention data.
**Grammar & collocations:** `retention-bake duration` — duration; `age a programmed block` — làm già.
**Examples:** `The retention bake exposed cells that lost their state after two years of equivalent aging.` → Bake lộ cell mất state sau aging tương đương hai năm.
**Liên kết tiếng Hàn:** `보존 베이크`.

## 8. data refresh /ˈdeɪtə rɪˈfreʃ/
**Part of speech:** noun
**Core meaning (English):** reading and rewriting stored data to restore weakened signal levels.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đọc và ghi lại data để phục hồi signal yếu.
**Grammar & collocations:** `data-refresh operation` — operation; `restore a charge level` — phục hồi.
**Examples:** `Data refresh restored the rows before their voltage separation became too small.` → Refresh phục hồi row trước khi voltage separation quá nhỏ.
**Liên kết tiếng Hàn:** `데이터 리프레시`.

## 9. refresh interval /rɪˈfreʃ ˈɪntərvəl/
**Part of speech:** noun
**Core meaning (English):** the time between scheduled refresh operations for a memory region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian giữa các lần refresh vùng memory.
**Grammar & collocations:** `refresh-interval policy` — policy; `shorten the interval` — rút ngắn.
**Examples:** `The controller shortened the refresh interval at high temperature.` → Controller rút interval khi nhiệt cao.
**Liên kết tiếng Hàn:** `리프레시 간격`.

## 10. scrub threshold /ˈskrʌb ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** the error count or confidence level that triggers a memory-scrubbing action.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số lỗi hoặc confidence kích hoạt hành động scrub memory.
**Grammar & collocations:** `scrub-threshold alert` — cảnh báo; `repair before escalation` — sửa.
**Examples:** `The scrub threshold was set below the point where a second error became uncorrectable.` → Threshold đặt dưới điểm lỗi thứ hai không sửa được.
**Liên kết tiếng Hàn:** `스크럽 임계값`.

## 11. error correction overhead /ˈerər kəˈrekʃən ˈoʊvərˌhed/
**Part of speech:** noun
**Core meaning (English):** the extra storage, computation, latency, or power required to correct errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** storage, computation, latency hoặc power thêm để sửa lỗi.
**Grammar & collocations:** `error-correction-overhead budget` — budget; `trade capacity for protection` — đánh đổi.
**Examples:** `The design accepted error correction overhead to meet the retention target.` → Thiết kế chấp nhận overhead để đạt target retention.
**Liên kết tiếng Hàn:** `오류 정정 오버헤드`.

## 12. parity overhead /ˈpærəti ˈoʊvərˌhed/
**Part of speech:** noun
**Core meaning (English):** the extra bits and processing used to store or check parity information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bit và processing thêm cho thông tin parity.
**Grammar & collocations:** `parity-overhead ratio` — tỷ lệ; `append check bits` — thêm.
**Examples:** `Higher parity overhead reduced usable capacity but lowered the uncorrectable rate.` → Overhead parity giảm capacity dùng được nhưng hạ rate lỗi.
**Liên kết tiếng Hàn:** `패리티 오버헤드`.

## 13. code rate /ˈkoʊd reɪt/
**Part of speech:** noun
**Core meaning (English):** the ratio of user information bits to the total coded bits in an error-correcting scheme.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ bit thông tin user trên tổng bit sau coding sửa lỗi.
**Grammar & collocations:** `code-rate selection` — lựa chọn; `lower the rate for protection` — hạ.
**Examples:** `The controller switched to a lower code rate as the block aged.` → Controller đổi rate thấp hơn khi block già.
**Liên kết tiếng Hàn:** `코드율`.

## 14. soft information /ˈsɔːft ˌɪnfərˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a confidence value describing how strongly a received symbol supports one possible bit or state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị confidence cho biết symbol nhận ủng hộ state nào mạnh đến đâu.
**Grammar & collocations:** `soft-information metric` — metric; `pass confidence to a decoder` — truyền.
**Examples:** `The sense circuit exported soft information instead of only a binary decision.` → Mạch sense xuất confidence thay vì chỉ quyết định nhị phân.
**Liên kết tiếng Hàn:** `소프트 정보`.

## 15. log-likelihood ratio /ˌlɔːɡ ˈlaɪklihʊd ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** a signed measure of how much more likely one symbol or bit value is than its alternative.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đại lượng có dấu đo một symbol/bit khả dĩ hơn phương án kia bao nhiêu.
**Grammar & collocations:** `log-likelihood-ratio input` — input; `quantize confidence` — lượng tử.
**Examples:** `The decoder used the log-likelihood ratio to prioritize uncertain bits.` → Decoder dùng LLR ưu tiên bit không chắc.
**Liên kết tiếng Hàn:** `로그 우도비`.

## 16. syndrome decode /ˈsɪndroʊm diːˈkoʊd/
**Part of speech:** noun
**Core meaning (English):** decoding that computes a code's syndrome to identify and correct a structured error pattern.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** decode tính syndrome để nhận diện và sửa pattern lỗi có cấu trúc.
**Grammar & collocations:** `syndrome-decode step` — bước; `locate a parity violation` — định vị.
**Examples:** `Syndrome decode corrected the single-symbol error without rereading the page.` → Decode syndrome sửa lỗi một symbol mà không đọc lại page.
**Liên kết tiếng Hàn:** `신드롬 디코딩`.

## 17. decoder convergence /diːˈkoʊdər kənˈvɜːrdʒəns/
**Part of speech:** noun
**Core meaning (English):** the point at which repeated decoding passes settle on a valid codeword or stop improving.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm các lượt decode lặp hội tụ vào codeword hợp lệ hoặc không cải thiện.
**Grammar & collocations:** `decoder-convergence criterion` — tiêu chí; `stop an iteration` — dừng.
**Examples:** `The firmware logged slow decoder convergence as a sign of a weak block.` → Firmware log hội tụ chậm như dấu hiệu block yếu.
**Liên kết tiếng Hàn:** `디코더 수렴`.

## 18. iterative decode /ˈɪtəˌreɪtɪv diːˈkoʊd/
**Part of speech:** noun
**Core meaning (English):** decoding that repeatedly exchanges updated beliefs until the error estimate is acceptable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** decode lặp, trao đổi belief cập nhật đến khi estimate lỗi chấp nhận.
**Grammar & collocations:** `iterative-decode budget` — budget; `run another pass` — chạy thêm.
**Examples:** `Iterative decode recovered the block after three confidence updates.` → Decode lặp phục hồi block sau ba lần cập nhật.
**Liên kết tiếng Hàn:** `반복 디코딩`.

## 19. low-density parity-check /ˌloʊ ˈdensəti ˈpærəti tʃek/
**Part of speech:** noun
**Core meaning (English):** an error-correcting code built from a sparse parity-check graph and decoded iteratively.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã sửa lỗi dùng graph parity thưa và decode lặp.
**Grammar & collocations:** `low-density-parity-check code` — code; `pass messages on a graph` — truyền.
**Examples:** `The controller used a low-density parity-check code for high-endurance flash.` → Controller dùng LDPC cho flash endurance cao.
**Liên kết tiếng Hàn:** `저밀도 패리티 검사`.

## 20. bch code /ˌbiː siː eɪtʃ koʊd/
**Part of speech:** noun
**Core meaning (English):** a cyclic error-correcting code that can correct multiple bit errors in a block.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã sửa lỗi cyclic sửa được nhiều bit lỗi trong block.
**Grammar & collocations:** `BCH-code strength` — strength; `correct a bounded error count` — sửa.
**Examples:** `The legacy controller used a BCH code before migrating to iterative decoding.` → Controller cũ dùng BCH trước chuyển decode lặp.
**Liên kết tiếng Hàn:** `BCH 코드`.

## Review in context

A **sense amplifier offset**, **bit-line leakage**, and **word-line resistance** consume **array efficiency** and margin; repeated activation can trigger **row hammer**, while an **erase disturb** changes a nearby cell. A **retention bake**, **data refresh**, and shorter **refresh interval** protect aging data, with a **scrub threshold** deciding when to repair. **error correction overhead**, **parity overhead**, and **code rate** trade capacity for protection. **soft information** becomes a **log-likelihood ratio**; **syndrome decode**, **decoder convergence**, and **iterative decode** support a **low-density parity-check** or **bch code**.

**Bản dịch tiếng Việt:** **Sense amplifier offset**, **bit-line leakage** và **word-line resistance** ăn vào **array efficiency** và margin; kích hoạt lặp có thể gây **row hammer**, còn **erase disturb** làm đổi cell gần. **Retention bake**, **data refresh** và **refresh interval** ngắn hơn bảo vệ data già, với **scrub threshold** quyết định lúc sửa. **error correction overhead**, **parity overhead** và **code rate** đánh đổi capacity lấy bảo vệ. **soft information** trở thành **log-likelihood ratio**; **syndrome decode**, **decoder convergence** và **iterative decode** hỗ trợ **low-density parity-check** hoặc **bch code**.
