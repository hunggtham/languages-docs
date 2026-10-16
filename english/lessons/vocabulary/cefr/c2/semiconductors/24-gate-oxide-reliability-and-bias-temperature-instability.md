# C2 Vocabulary — Gate-oxide reliability and bias-temperature instability

This lesson follows a transistor from oxide defects through electrical stress, lifetime modelling, and circuit-level guard bands.

Flow: **gate-oxide integrity → equivalent oxide thickness → trap-assisted tunnelling → time-dependent dielectric breakdown → soft breakdown → hard breakdown → bias-temperature instability → negative bias temperature instability → positive bias temperature instability → threshold-voltage shift → interface-trap density → oxide-trap charge → stress-induced leakage current → hot-carrier injection → charge pumping → duty-cycle dependence → recovery kinetics → workload aging → reliability guard band → lifetime extrapolation**.

## 1. gate-oxide integrity /ɡeɪt ˈɑksaɪd ɪnˈtɛɡrəti/
**Part of speech:** noun
**Core meaning (English):** the structural and electrical soundness of the insulating oxide beneath or around a transistor gate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ nguyên vẹn điện và vật lý của lớp oxide cổng.
**Grammar & collocations:** `gate-oxide-integrity monitor` — monitor; `preserve oxide integrity` — duy trì.
**Examples:** `Gate-oxide integrity degraded after the wafer saw unusually high electric-field stress.` → Độ nguyên vẹn oxide cổng giảm sau stress điện trường cao.
**Liên kết tiếng Hàn:** `게이트 산화막 무결성`.

## 2. equivalent oxide thickness /ɪˈkwɪvələnt ˈɑksaɪd ˈθɪknəs/
**Part of speech:** noun
**Core meaning (English):** the thickness of silicon dioxide that would provide the same capacitance as a given gate dielectric stack.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ dày SiO₂ tương đương về điện dung của stack dielectric.
**Grammar & collocations:** `equivalent-oxide-thickness target` — target; `scale the dielectric electrically` — quy đổi.
**Examples:** `Equivalent oxide thickness fell while the high-k stack retained the required gate capacitance.` → EOT giảm nhưng stack high-k vẫn giữ điện dung cần thiết.
**Liên kết tiếng Hàn:** `등가 산화막 두께`.

## 3. trap-assisted tunnelling /træp əˈsɪstɪd ˈtʌnəlɪŋ/
**Part of speech:** noun
**Core meaning (English):** carrier transport through an insulator in which defect states provide intermediate steps for quantum tunnelling.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hạt tải “nhảy” qua oxide nhờ các bẫy trung gian.
**Grammar & collocations:** `trap-assisted-tunnelling model` — model; `fit leakage to a defect pathway` — khớp.
**Examples:** `Trap-assisted tunnelling explained the leakage increase before any visible oxide rupture.` → Tunnelling qua trap giải thích leakage tăng trước khi oxide đứt rõ.
**Liên kết tiếng Hàn:** `트랩 보조 터널링`.

## 4. time-dependent dielectric breakdown /taɪm dɪˈpɛndənt daɪəˈlɛktrɪk ˈbreɪkdaʊn/
**Part of speech:** noun
**Core meaning (English):** gradual dielectric failure whose probability increases with electrical stress and elapsed time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dielectric hỏng dần theo stress và thời gian.
**Grammar & collocations:** `time-dependent-dielectric-breakdown test` — test; `extrapolate breakdown probability` — ngoại suy.
**Examples:** `Time-dependent dielectric breakdown data set the maximum field for the accelerated stress test.` → Dữ liệu TDDB đặt giới hạn field cho test tăng tốc.
**Liên kết tiếng Hàn:** `시간 의존성 유전체 파괴`.

## 5. soft breakdown /sɔft ˈbreɪkdaʊn/
**Part of speech:** noun
**Core meaning (English):** an early dielectric failure that creates a conductive path but does not immediately produce catastrophic current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** oxide xuất hiện đường dẫn rò nhưng chưa sập hoàn toàn.
**Grammar & collocations:** `soft-breakdown signature` — signature; `detect a partial conduction path` — phát hiện.
**Examples:** `Soft breakdown appeared as a series of small leakage steps during the voltage ramp.` → Soft breakdown hiện thành các bước leakage nhỏ khi ramp điện áp.
**Liên kết tiếng Hàn:** `소프트 브레이크다운`.

## 6. hard breakdown /hɑrd ˈbreɪkdaʊn/
**Part of speech:** noun
**Core meaning (English):** a catastrophic dielectric failure that forms a low-resistance path and sharply increases current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** oxide bị thủng mạnh tạo đường dẫn điện trở thấp.
**Grammar & collocations:** `hard-breakdown current` — current; `quench catastrophic conduction` — dập.
**Examples:** `Hard breakdown forced the tester to quench the pulse before the probe card was damaged.` → Hard breakdown buộc máy dập pulse để bảo vệ probe card.
**Liên kết tiếng Hàn:** `하드 브레이크다운`.

## 7. bias-temperature instability /ˈbaɪəs ˈtɛmprətʃər ɪnstəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** a time-dependent transistor-aging effect in which electrical bias and temperature shift device parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bias và nhiệt làm transistor trôi thông số theo thời gian.
**Grammar & collocations:** `bias-temperature-instability model` — model; `characterize parameter drift` — đặc trưng.
**Examples:** `Bias-temperature instability reduced the available timing margin in the aged library cell.` → BTI giảm timing margin của cell đã lão hóa.
**Liên kết tiếng Hàn:** `바이어스 온도 불안정성`.

## 8. negative bias temperature instability /ˈnɛɡətɪv ˈbaɪəs ˈtɛmprətʃər ɪnstəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** p-type transistor aging under negative gate bias and elevated temperature, commonly involving interface and oxide traps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** PMOS bị stress khi gate âm và nhiệt cao.
**Grammar & collocations:** `negative-bias-temperature-instability shift` — shift; `stress a p-channel device` — stress.
**Examples:** `Negative bias temperature instability increased the p-channel threshold magnitude after the long standby test.` → NBTI làm độ lớn ngưỡng PMOS tăng sau standby dài.
**Liên kết tiếng Hàn:** `음의 바이어스 온도 불안정성`.

## 9. positive bias temperature instability /ˈpɑzətɪv ˈbaɪəs ˈtɛmprətʃər ɪnstəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** n-type transistor aging under positive gate bias and elevated temperature, often mediated by oxide and interface defects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** NMOS bị stress khi gate dương và nhiệt cao.
**Grammar & collocations:** `positive-bias-temperature-instability projection` — projection; `stress an n-channel device` — stress.
**Examples:** `Positive bias temperature instability was strongest in the high-voltage n-channel switch.` → PBTI mạnh nhất ở công tắc NMOS điện áp cao.
**Liên kết tiếng Hàn:** `양의 바이어스 온도 불안정성`.

## 10. threshold-voltage shift /ˈθrɛʃhoʊld ˈvoʊltɪdʒ ʃɪft/
**Part of speech:** noun
**Core meaning (English):** a change in the gate voltage required to establish a specified transistor conduction condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điện áp ngưỡng trôi khỏi giá trị ban đầu.
**Grammar & collocations:** `threshold-voltage-shift distribution` — distribution; `track a drift over time` — theo dõi.
**Examples:** `The threshold-voltage shift pushed the slowest corner beyond the timing sign-off limit.` → Vt shift đẩy corner chậm nhất vượt giới hạn sign-off.
**Liên kết tiếng Hàn:** `문턱 전압 이동`.

## 11. interface-trap density /ˈɪntərfeɪs træp ˈdɛnsəti/
**Part of speech:** noun
**Core meaning (English):** the number of electrically active defect states per unit energy and area at a semiconductor–dielectric interface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mật độ bẫy hoạt động ở ranh giới semiconductor–dielectric.
**Grammar & collocations:** `interface-trap-density extraction` — extraction; `estimate defect states` — ước tính.
**Examples:** `Interface-trap density rose after the plasma clean was made too aggressive.` → Mật độ trap tăng sau khi plasma clean quá mạnh.
**Liên kết tiếng Hàn:** `계면 트랩 밀도`.

## 12. oxide-trap charge /ˈɑksaɪd træp tʃɑrdʒ/
**Part of speech:** noun
**Core meaning (English):** charge stored in defect states within a gate dielectric and capable of altering the transistor's electric field.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điện tích mắc trong trap của oxide làm đổi field của transistor.
**Grammar & collocations:** `oxide-trap-charge accumulation` — accumulation; `de-trap stored charge` — giải bẫy.
**Examples:** `Oxide-trap charge accumulated during the pulse train and shifted the transfer curve.` → Điện tích trap tích lũy làm đường transfer dịch chuyển.
**Liên kết tiếng Hàn:** `산화막 트랩 전하`.

## 13. stress-induced leakage current /strɛs ɪnˈdjuːst ˈliːkɪdʒ ˈkɝənt/
**Part of speech:** noun
**Core meaning (English):** leakage through a dielectric that increases after electrical stress creates or activates defects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dòng rò tăng do stress tạo hoặc kích hoạt defect.
**Grammar & collocations:** `stress-induced-leakage-current monitor` — monitor; `measure post-stress leakage` — đo.
**Examples:** `Stress-induced leakage current rose before the sample reached hard breakdown.` → SILC tăng trước khi mẫu hard breakdown.
**Liên kết tiếng Hàn:** `스트레스 유발 누설 전류`.

## 14. hot-carrier injection /hɑt ˈkæriər ɪnˈdʒɛkʃən/
**Part of speech:** noun
**Core meaning (English):** injection of energetic carriers into an oxide or interface during high-field transistor operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hạt tải năng lượng cao bị bắn vào oxide/interface.
**Grammar & collocations:** `hot-carrier-injection stress` — stress; `limit drain electric field` — giới hạn.
**Examples:** `Hot-carrier injection degraded the drain-side interface after repeated switching at high voltage.` → HCI làm suy giảm interface phía drain.
**Liên kết tiếng Hàn:** `핫 캐리어 주입`.

## 15. charge pumping /tʃɑrdʒ ˈpʌmpɪŋ/
**Part of speech:** noun
**Core meaning (English):** a measurement technique that fills and empties interface traps with a controlled gate waveform to infer their density.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** waveform gate bơm điện tích qua trap để đo mật độ trap.
**Grammar & collocations:** `charge-pumping measurement` — measurement; `extract interface-state density` — trích xuất.
**Examples:** `Charge pumping separated interface damage from the series resistance of the test structure.` → Charge pumping tách damage interface khỏi điện trở nối tiếp.
**Liên kết tiếng Hàn:** `전하 펌핑`.

## 16. duty-cycle dependence /ˈduːti ˈsaɪkəl dɪˈpɛndəns/
**Part of speech:** noun
**Core meaning (English):** the way an aging or stress response changes with the fraction of time a device spends in an active bias state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức lão hóa phụ thuộc tỷ lệ thời gian bị bias.
**Grammar & collocations:** `duty-cycle-dependence model` — model; `vary active and recovery intervals` — thay đổi.
**Examples:** `Duty-cycle dependence made a bursty workload less damaging than an always-on benchmark.` → Workload bursty ít hại hơn benchmark luôn bật.
**Liên kết tiếng Hàn:** `듀티 사이클 의존성`.

## 17. recovery kinetics /rɪˈkʌvəri kɪˈnɛtɪks/
**Part of speech:** noun
**Core meaning (English):** the time-dependent process by which an aged device partially returns toward its initial parameters after stress is removed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ và quy luật transistor hồi phục sau khi bỏ stress.
**Grammar & collocations:** `recovery-kinetics fit` — fit; `separate reversible and permanent damage` — tách.
**Examples:** `Recovery kinetics hid part of the threshold shift when measurements were delayed after each pulse.` → Đo trễ làm che một phần Vt shift nhờ hồi phục.
**Liên kết tiếng Hàn:** `회복 동역학`.

## 18. workload aging /ˈwɝkloʊd ˈeɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** degradation accumulated under the actual sequence, intensity, and idle periods of an application workload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lão hóa theo workload thật chứ không chỉ stress tĩnh.
**Grammar & collocations:** `workload-aging trace` — trace; `replay application activity` — phát lại.
**Examples:** `Workload aging was lower when the scheduler inserted idle windows between vector bursts.` → Aging thấp hơn khi scheduler chèn khoảng idle.
**Liên kết tiếng Hàn:** `워크로드 노화`.

## 19. reliability guard band /rɪˌlaɪəˈbɪləti ɡɑrd bænd/
**Part of speech:** noun
**Core meaning (English):** an intentional design margin that keeps operation away from a predicted reliability limit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng đệm an toàn giữa vận hành và giới hạn reliability.
**Grammar & collocations:** `reliability-guard-band budget` — budget; `reserve margin for variation` — chừa.
**Examples:** `The reliability guard band covered wafer variation and uncertainty in the aging model.` → Guard band bao phủ biến thiên wafer và bất định model.
**Liên kết tiếng Hàn:** `신뢰성 가드 밴드`.

## 20. lifetime extrapolation /ˈlaɪftaɪm ɪkˌstræpəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** estimating service life at normal conditions from accelerated stress data and a validated degradation model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy ra lifetime bình thường từ dữ liệu stress tăng tốc.
**Grammar & collocations:** `lifetime-extrapolation uncertainty` — uncertainty; `project use life from acceleration data` — dự phóng.
**Examples:** `Lifetime extrapolation was rejected until the temperature acceleration law matched independent lots.` → Ngoại suy lifetime bị bác cho tới khi luật gia tốc khớp các lot độc lập.
**Liên kết tiếng Hàn:** `수명 외삽`.

## Review in context

**Gate-oxide integrity** and **equivalent oxide thickness** determine how a dielectric behaves under field. **Trap-assisted tunnelling**, **time-dependent dielectric breakdown**, **soft breakdown**, and **hard breakdown** describe progressively worse conduction paths. Transistor aging includes **bias-temperature instability**, with **negative bias temperature instability** and **positive bias temperature instability** shifting **threshold-voltage shift**. Engineers extract **interface-trap density**, **oxide-trap charge**, and **stress-induced leakage current**, while **hot-carrier injection** and **charge pumping** expose interface damage. **Duty-cycle dependence** and **recovery kinetics** make **workload aging** history-dependent. A **reliability guard band** protects the design, and **lifetime extrapolation** turns accelerated tests into a service-life estimate.

**Bản dịch tiếng Việt:** **Gate-oxide integrity** và **equivalent oxide thickness** quyết định dielectric chịu field ra sao. **Trap-assisted tunnelling**, **time-dependent dielectric breakdown**, **soft breakdown** và **hard breakdown** mô tả các đường dẫn điện ngày càng nghiêm trọng. Lão hóa transistor gồm **bias-temperature instability**, trong đó **negative bias temperature instability** và **positive bias temperature instability** làm dịch **threshold-voltage shift**. Kỹ sư trích xuất **interface-trap density**, **oxide-trap charge** và **stress-induced leakage current**, còn **hot-carrier injection** và **charge pumping** cho thấy hư hỏng interface. **Duty-cycle dependence** và **recovery kinetics** khiến **workload aging** phụ thuộc lịch sử. **Reliability guard band** bảo vệ thiết kế, còn **lifetime extrapolation** chuyển test tăng tốc thành ước lượng tuổi thọ.
