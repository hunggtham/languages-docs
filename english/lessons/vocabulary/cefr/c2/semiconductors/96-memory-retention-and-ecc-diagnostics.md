# C2 Vocabulary — Memory retention and ECC diagnostics

This lesson follows stored data from retention physics through read margins, error trajectories, and decoder behavior.

Flow: **memory retention tail → data pattern sensitivity → uncorrectable error → error-floor onset → ECC margin → syndrome weight → decoder miscorrection → retention recovery → cycling asymmetry → read-margin collapse → state-overlap window → program verify loop → inhibit bias → retention distribution → bit-error trajectory → soft-information log → read reference drift → sense-amplifier offset → wordline coupling → bitline settling**.

## 1. memory retention tail /ˈmeməri rɪˈtenʃən teɪl/
**Part of speech:** noun
**Core meaning (English):** the long-time portion of a memory-retention distribution where a small population fails unusually late.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần dài hạn của distribution retention nơi một population nhỏ fail rất muộn.
**Grammar & collocations:** `memory-retention-tail model` — model; `track rare late failures` — theo dõi failure muộn hiếm.
**Examples:** `The memory retention tail determined the final warranty guard band.` → Tail retention memory quyết định guard band warranty cuối.
**Liên kết tiếng Hàn:** `메모리 보존 꼬리`.

## 2. data pattern sensitivity /ˈdeɪtə ˈpætərn ˌsensəˈtɪvəti/
**Part of speech:** noun
**Core meaning (English):** dependence of memory error rate on the arrangement of stored zeros, ones, or neighboring states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** error rate memory phụ thuộc cách sắp xếp zero, one hoặc state lân cận.
**Grammar & collocations:** `data-pattern-sensitivity map` — map; `stress an alternating pattern` — stress pattern xen kẽ.
**Examples:** `Data pattern sensitivity was strongest when an erased cell bordered two programmed cells.` → Sensitivity pattern data mạnh nhất khi cell erase cạnh hai cell program.
**Liên kết tiếng Hàn:** `데이터 패턴 민감도`.

## 3. uncorrectable error /ˌʌnkəˈrektəbəl ˈerər/
**Part of speech:** noun
**Core meaning (English):** an error pattern exceeding the correction capability of the selected ECC scheme.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pattern error vượt capability correction của scheme ECC đã chọn.
**Grammar & collocations:** `uncorrectable-error event` — event; `retire a failing block` — retire block lỗi.
**Examples:** `An uncorrectable error forced the controller to reconstruct data from redundancy.` → Error không thể sửa buộc controller reconstruct data từ redundancy.
**Liên kết tiếng Hàn:** `수정 불가능 오류`.

## 4. error-floor onset /ˈerər flɔːr ˈɑːnset/
**Part of speech:** noun
**Core meaning (English):** the point at which additional signal quality no longer reduces the residual error rate as expected.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm signal quality thêm không còn giảm residual error rate như kỳ vọng.
**Grammar & collocations:** `error-floor-onset detector` — detector; `identify a decoder limit` — xác định giới hạn decoder.
**Examples:** `Error-floor onset appeared when a small correlated defect escaped the independent-noise model.` → Onset floor-error xuất hiện khi defect tương quan nhỏ thoát model noise độc lập.
**Liên kết tiếng Hàn:** `오류 바닥 시작점`.

## 5. ECC margin /ˌiː siː ˈsiː ˈmɑːrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** remaining correction capacity between observed errors and the ECC limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** correction capacity còn lại giữa error quan sát và limit ECC.
**Grammar & collocations:** `ECC-margin monitor` — monitor; `preserve correction headroom` — giữ headroom correction.
**Examples:** `ECC margin shrank after retention errors became more clustered.` → Margin ECC thu hẹp sau khi retention error cluster hơn.
**Liên kết tiếng Hàn:** `ECC 여유`.

## 6. syndrome weight /ˈsɪndroʊm weɪt/
**Part of speech:** noun
**Core meaning (English):** the number or weighted severity of parity checks that report inconsistency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số lượng hoặc severity weighted của parity check báo inconsistency.
**Grammar & collocations:** `syndrome-weight histogram` — histogram; `rank a suspected error pattern` — xếp hạng pattern lỗi.
**Examples:** `Syndrome weight rose sharply near the weak wordline.` → Weight syndrome tăng mạnh gần wordline yếu.
**Liên kết tiếng Hàn:** `신드롬 가중치`.

## 7. decoder miscorrection /diːˈkoʊdər mɪskəˈrekʃən/
**Part of speech:** noun
**Core meaning (English):** an incorrect correction that converts an ambiguous error pattern into a different wrong codeword.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** correction sai biến error pattern mơ hồ thành codeword sai khác.
**Grammar & collocations:** `decoder-miscorrection detector` — detector; `reject low-confidence decoding` — reject decoding confidence thấp.
**Examples:** `Decoder miscorrection increased when soft information was clipped at the interface.` → Miscorrection decoder tăng khi soft information bị clip ở interface.
**Liên kết tiếng Hàn:** `디코더 오정정`.

## 8. retention recovery /rɪˈtenʃən rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** partial restoration of a readable memory state after rest, reread, or controlled refresh.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** state memory đọc lại được phục hồi một phần sau rest, reread hoặc refresh có kiểm soát.
**Grammar & collocations:** `retention-recovery curve` — curve; `restore a marginal state` — phục hồi state marginal.
**Examples:** `Retention recovery after a short rest complicated the interpretation of the bake result.` → Recovery retention sau rest ngắn làm phức tạp cách hiểu bake result.
**Liên kết tiếng Hàn:** `보존 회복`.

## 9. cycling asymmetry /ˈsaɪklɪŋ eɪˈsɪmətri/
**Part of speech:** noun
**Core meaning (English):** unequal degradation caused by programming and erasing in different directions or states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** degradation không đều do program và erase theo hướng hoặc state khác nhau.
**Grammar & collocations:** `cycling-asymmetry signature` — signature; `compare program and erase stress` — so stress program và erase.
**Examples:** `Cycling asymmetry made one threshold state fail earlier than its neighbors.` → Asymmetry cycling làm một threshold state fail sớm hơn state lân cận.
**Liên kết tiếng Hàn:** `사이클링 비대칭`.

## 10. read-margin collapse /riːd ˈmɑːrdʒɪn kəˈlæps/
**Part of speech:** noun
**Core meaning (English):** loss of separation between readable state distributions during sensing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách giữa các distribution state đọc được bị mất khi sensing.
**Grammar & collocations:** `read-margin-collapse alarm` — alarm; `separate neighboring levels` — tách level lân cận.
**Examples:** `Read-margin collapse preceded the first uncorrectable page.` → Collapse margin-read xảy ra trước page không thể sửa đầu tiên.
**Liên kết tiếng Hàn:** `읽기 여유 붕괴`.

## 11. state-overlap window /steɪt ˈoʊvər læp ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the range where probability distributions for adjacent stored states overlap.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** range nơi distribution probability của state lưu trữ kề nhau overlap.
**Grammar & collocations:** `state-overlap-window width` — width; `quantify ambiguous sensing` — định lượng sensing mơ hồ.
**Examples:** `The state-overlap window widened after the reference voltage drifted.` → Window overlap-state rộng sau khi reference voltage drift.
**Liên kết tiếng Hàn:** `상태 중첩 구간`.

## 12. program verify loop /ˈproʊɡræm ˈverəfaɪ luːp/
**Part of speech:** noun
**Core meaning (English):** repeated program-and-read checks that stop when a memory cell reaches its target state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các lần program-read lặp dừng khi cell đạt target state.
**Grammar & collocations:** `program-verify-loop iteration` — iteration; `tighten a threshold step` — siết threshold step.
**Examples:** `The program verify loop added pulses only when the sensed state remained below target.` → Loop verify program chỉ thêm pulse khi state sense vẫn dưới target.
**Liên kết tiếng Hàn:** `프로그램 검증 루프`.

## 13. inhibit bias /ɪnˈhɪbɪt ˈbaɪəs/
**Part of speech:** noun
**Core meaning (English):** a bias condition applied to prevent an unselected memory cell from being disturbed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bias áp vào để ngăn cell không chọn bị disturb.
**Grammar & collocations:** `inhibit-bias level` — level; `protect an unselected cell` — bảo vệ cell không chọn.
**Examples:** `Inhibit bias failed to protect the neighboring string during a high-voltage program pulse.` → Bias inhibit không bảo vệ string lân cận trong pulse program voltage cao.
**Liên kết tiếng Hàn:** `억제 바이어스`.

## 14. retention distribution /rɪˈtenʃən ˌdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** a probability distribution of stored-state stability over time or across a population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** distribution probability của stability state theo time hoặc population.
**Grammar & collocations:** `retention-distribution tail` — tail; `fit a state-loss model` — fit model state-loss.
**Examples:** `The retention distribution shifted after the array experienced repeated cycling.` → Distribution retention dịch sau khi array cycling lặp.
**Liên kết tiếng Hàn:** `보존 분포`.

## 15. bit-error trajectory /bɪt ˈerər trəˈdʒektəri/
**Part of speech:** noun
**Core meaning (English):** the path of bit-error accumulation as stress, time, or correction changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường đi tích lũy bit-error theo stress, time hoặc correction.
**Grammar & collocations:** `bit-error-trajectory forecast` — forecast; `track errors over retention time` — theo dõi error theo retention time.
**Examples:** `The bit-error trajectory crossed the ECC service threshold after the third bake.` → Trajectory error-bit vượt threshold service ECC sau bake thứ ba.
**Liên kết tiếng Hàn:** `비트 오류 궤적`.

## 16. soft-information log /sɔːft ˌɪnfərˈmeɪʃən lɔːɡ/
**Part of speech:** noun
**Core meaning (English):** a record of confidence values supplied to a soft-decision decoder.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record confidence value cung cấp cho soft-decision decoder.
**Grammar & collocations:** `soft-information-log parser` — parser; `preserve reliability values` — giữ reliability value.
**Examples:** `The soft-information log showed that the decoder received clipped confidence values.` → Log information mềm cho thấy decoder nhận confidence value bị clip.
**Liên kết tiếng Hàn:** `소프트 정보 로그`.

## 17. read reference drift /riːd ˈrefrəns drɪft/
**Part of speech:** noun
**Core meaning (English):** gradual movement of the reference level used to decide a sensed memory state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reference level dùng quyết định state memory sense bị dịch dần.
**Grammar & collocations:** `read-reference-drift monitor` — monitor; `recenter a sensing threshold` — đưa threshold sensing về giữa.
**Examples:** `Read reference drift compressed the margin for the highest threshold state.` → Drift reference-read nén margin của threshold state cao nhất.
**Liên kết tiếng Hàn:** `읽기 기준 드리프트`.

## 18. sense-amplifier offset /sens ˈæmpləfaɪər ˈɔːfset/
**Part of speech:** noun
**Core meaning (English):** input mismatch in a sense amplifier that biases a memory decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mismatch input trong sense amplifier làm lệch quyết định memory.
**Grammar & collocations:** `sense-amplifier-offset calibration` — calibration; `balance differential inputs` — cân input vi sai.
**Examples:** `Sense-amplifier offset made one column report a false low state.` → Offset amplifier-sense khiến một column báo state thấp giả.
**Liên kết tiếng Hàn:** `센스 앰프 오프셋`.

## 19. wordline coupling /ˈwɜːrdlaɪn ˈkʌplɪŋ/
**Part of speech:** noun
**Core meaning (English):** unwanted electrical influence from a neighboring wordline into the selected line or cell.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ảnh hưởng điện không mong muốn từ wordline lân cận vào line hoặc cell chọn.
**Grammar & collocations:** `wordline-coupling coefficient` — coefficient; `shield adjacent control lines` — che line control kề.
**Examples:** `Wordline coupling shifted the verify threshold during a fast program sequence.` → Coupling wordline dịch threshold verify trong sequence program nhanh.
**Liên kết tiếng Hàn:** `워드라인 결합`.

## 20. bitline settling /ˈbɪtlaɪn ˈsetlɪŋ/
**Part of speech:** noun
**Core meaning (English):** the time-dependent stabilization of a bitline voltage before a sensing decision is valid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** voltage bitline ổn định theo time trước khi decision sensing hợp lệ.
**Grammar & collocations:** `bitline-settling time` — time; `wait for a valid differential` — chờ differential hợp lệ.
**Examples:** `Bitline settling slowed when the array capacitance increased with scaling.` → Settling bitline chậm khi capacitance array tăng do scaling.
**Liên kết tiếng Hàn:** `비트라인 안정화`.

## Review in context

The **memory retention tail** and **data pattern sensitivity** can produce an **uncorrectable error** near **error-floor onset**, consuming **ECC margin** and increasing **syndrome weight**. **Decoder miscorrection** may be reduced by understanding **retention recovery**, **cycling asymmetry**, **read-margin collapse**, and the **state-overlap window**. A **program verify loop** and **inhibit bias** shape the **retention distribution** and **bit-error trajectory**, while a **soft-information log**, **read reference drift**, **sense-amplifier offset**, **wordline coupling**, and **bitline settling** explain the final decision.

**Bản dịch tiếng Việt:** **Memory retention tail** và **data pattern sensitivity** có thể tạo **uncorrectable error** gần **error-floor onset**, tiêu hao **ECC margin** và làm tăng **syndrome weight**. **Decoder miscorrection** có thể giảm khi hiểu **retention recovery**, **cycling asymmetry**, **read-margin collapse** và **state-overlap window**. **Program verify loop** và **inhibit bias** định hình **retention distribution** và **bit-error trajectory**, còn **soft-information log**, **read reference drift**, **sense-amplifier offset**, **wordline coupling** và **bitline settling** giải thích quyết định cuối.
