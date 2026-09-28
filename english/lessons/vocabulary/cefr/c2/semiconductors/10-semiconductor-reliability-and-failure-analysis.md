# C2 Vocabulary — Semiconductor reliability and failure analysis

This lesson follows how semiconductor engineers identify aging mechanisms, quantify rare failures, and separate process, device, package, and operating causes.

Flow: **hot-carrier injection → bias-temperature instability → soft error rate → single-event upset → mean time to failure → failure-in-time → burn-in → accelerated life testing → wafer-level reliability → line edge roughness → random telegraph noise → self-heating → reliability bathtub curve → wear-out mechanism → failure analysis → parametric drift → gate-oxide integrity → stress migration → electrical overstress → electrostatic discharge**.

## 1. hot-carrier injection /ˈhɑt ˈkæriɚ ɪnˈdʒɛkʃən/
**Part of speech:** noun
**Core meaning (English):** the injection of high-energy carriers into a transistor's gate dielectric or interface, causing gradual device degradation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tiêm hạt tải nóng; electron hoặc hole quá năng lượng chui vào vùng gate và làm transistor xuống cấp theo thời gian.
**Grammar & collocations:** `hot-carrier-injection damage` — hỏng do tiêm hạt tải nóng; `hot-carrier stress` — stress hạt tải nóng; `model hot-carrier injection` — mô hình hóa.
**Examples:** `The high-voltage test accelerated hot-carrier injection near the drain of the small transistors.` → Bài test điện áp cao làm tăng hot-carrier injection gần drain của các transistor nhỏ.
**Liên kết tiếng Hàn:** `핫 캐리어 주입` (hat kaerieo juip) — tiêm hạt tải nóng.

## 2. bias-temperature instability /ˈbaɪəs ˈtɛmprətʃɚ ɪnˌstæˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** a time-dependent shift in transistor behavior caused by electrical bias and temperature stress.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bất ổn do bias–nhiệt; điện áp đặt lâu ở nhiệt độ cao làm ngưỡng transistor trôi dần.
**Grammar & collocations:** `negative bias-temperature instability` — NBTI; `BTI recovery` — hồi phục BTI; `characterize bias-temperature instability` — đặc trưng hóa.
**Examples:** `Bias-temperature instability increased the threshold-voltage spread after the long high-temperature workload.` → Bias-temperature instability làm độ phân tán điện áp ngưỡng tăng sau workload nóng kéo dài.
**Liên kết tiếng Hàn:** `바이어스 온도 불안정성` (baieoseu ondo buranjeongseong) — bất ổn do bias–nhiệt.

## 3. soft error rate /sɔft ˈɛrɚ reɪt/
**Part of speech:** noun
**Core meaning (English):** the rate at which transient radiation or electrical disturbances cause incorrect data without permanently damaging a device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ lỗi mềm; bit bị lật tạm thời bởi tia vũ trụ hoặc nhiễu nhưng chip vẫn hoạt động sau khi sửa hoặc ghi lại.
**Grammar & collocations:** `low soft-error rate` — tỷ lệ lỗi mềm thấp; `soft-error-rate target` — mục tiêu tỷ lệ; `measure the soft error rate` — đo tỷ lệ.
**Examples:** `The memory controller used error correction to keep the soft error rate below the service target.` → Bộ điều khiển bộ nhớ dùng sửa lỗi để giữ soft error rate dưới mục tiêu service.
**Liên kết tiếng Hàn:** `소프트 오류율` (sopeuteu oryulyul) — tỷ lệ lỗi mềm.

## 4. single-event upset /ˈsɪŋɡəl ɪˈvɛnt ʌpˌsɛt/
**Part of speech:** noun
**Core meaning (English):** a change of a stored bit or logic state caused by one energetic particle strike.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lật trạng thái do một sự kiện; một hạt năng lượng đi qua vùng nhạy và làm bit đổi 0 thành 1 hoặc ngược lại.
**Grammar & collocations:** `single-event-upset cross section` — tiết diện SEU; `detect a single-event upset` — phát hiện SEU; `SEU mitigation` — giảm thiểu SEU.
**Examples:** `The radiation campaign recorded a single-event upset in the unprotected register file.` → Chiến dịch bức xạ ghi nhận một single-event upset trong register file không bảo vệ.
**Liên kết tiếng Hàn:** `단일 사건 업셋` (danil sageon eopset) — lật trạng thái do một sự kiện.

## 5. mean time to failure /miːn taɪm tə ˈfeɪljər/
**Part of speech:** noun
**Core meaning (English):** the average operating time before a population of non-repairable devices fails.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian trung bình đến hỏng; lấy trung bình thống kê của thời điểm các mẫu không thể sửa bắt đầu fail.
**Grammar & collocations:** `projected mean time to failure` — MTTF dự báo; `increase mean time to failure` — tăng MTTF; `MTTF estimate` — ước tính MTTF.
**Examples:** `The revised interconnect stack increased the projected mean time to failure under the same current density.` → Stack liên kết sửa lại tăng mean time to failure dự báo ở cùng mật độ dòng.
**Liên kết tiếng Hàn:** `평균 고장 시간` (pyeonggyun gojang sigan) — thời gian trung bình đến hỏng.

## 6. failure-in-time /ˈfeɪljər ɪn taɪm/
**Part of speech:** noun
**Core meaning (English):** a reliability rate expressed as the expected number of failures per billion device-hours.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đơn vị lỗi theo thời gian; FIT quy đổi xác suất hỏng rất nhỏ thành số lỗi kỳ vọng trên một tỷ giờ thiết bị.
**Grammar & collocations:** `failure-in-time rate` — tỷ lệ FIT; `FIT budget` — ngân sách FIT; `convert FIT to MTTF` — đổi FIT sang MTTF.
**Examples:** `The qualification report compared the failure-in-time value with the platform's lifetime budget.` → Báo cáo qualification so sánh giá trị failure-in-time với ngân sách vòng đời của platform.
**Liên kết tiếng Hàn:** `시간당 고장률` (sigandang gojangnyul) — tỷ lệ lỗi theo thời gian.

## 7. burn-in /ˈbɝn ɪn/
**Part of speech:** noun
**Core meaning (English):** deliberate operation of devices under stress to expose early-life defects before shipment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy rà; cho chip chạy nóng và lâu để lỗi sớm lộ ra trước khi đến tay khách hàng.
**Grammar & collocations:** `burn-in test` — bài test chạy rà; `burn-in screen` — sàng lọc chạy rà; `burn in a device` — chạy rà thiết bị.
**Examples:** `The burn-in test rejected modules whose leakage current rose abnormally during the first hours.` → Burn-in test loại các module có dòng rò tăng bất thường trong những giờ đầu.
**Liên kết tiếng Hàn:** `번인` (beonin) — chạy rà.

## 8. accelerated life testing /əkˈsɛləˌreɪtɪd laɪf ˈtɛstɪŋ/
**Part of speech:** noun
**Core meaning (English):** testing that applies elevated stress to make aging mechanisms appear sooner while modeling their behavior at normal conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm thử tuổi thọ tăng tốc; đẩy nhiệt, điện áp hoặc dòng lên cao để quan sát hỏng sớm rồi ngoại suy về điều kiện thường.
**Grammar & collocations:** `accelerated-life-test model` — mô hình ALT; `accelerated life test plan` — kế hoạch; `run accelerated life testing` — chạy ALT.
**Examples:** `Accelerated life testing shortened the qualification cycle but required a defensible temperature model.` → Accelerated life testing rút ngắn chu kỳ qualification nhưng cần mô hình nhiệt có cơ sở.
**Liên kết tiếng Hàn:** `가속 수명 시험` (gasok sumyeong siheom) — kiểm thử tuổi thọ tăng tốc.

## 9. wafer-level reliability /ˈweɪfɚ ˈlɛvəl rɪˌlaɪəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** reliability evaluation performed on devices or structures while they are still on the wafer, before final packaging.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ tin cậy cấp wafer; đo cấu trúc ngay trên wafer để phát hiện vấn đề trước bước đóng gói tốn kém.
**Grammar & collocations:** `wafer-level reliability test` — bài test cấp wafer; `wafer-level reliability data` — dữ liệu; `qualify at wafer level` — qualification ở cấp wafer.
**Examples:** `Wafer-level reliability isolated the dielectric problem before package assembly obscured the failure signature.` → Wafer-level reliability cô lập vấn đề dielectric trước khi lắp package làm mờ dấu hiệu hỏng.
**Liên kết tiếng Hàn:** `웨이퍼 수준 신뢰성` (weipeo sujun sinroeseong) — độ tin cậy cấp wafer.

## 10. line edge roughness /laɪn ɛdʒ ˈrʌfnəs/
**Part of speech:** noun
**Core meaning (English):** random variation in the position of a patterned line edge that affects critical dimensions and device matching.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ nhám mép đường; mép pattern không thẳng tuyệt đối nên width transistor và biến thiên giữa chip bị ảnh hưởng.
**Grammar & collocations:** `line-edge-roughness control` — kiểm soát LER; `line edge roughness measurement` — đo LER; `reduce line edge roughness` — giảm LER.
**Examples:** `Line edge roughness widened the distribution of gate length across the wafer.` → Line edge roughness làm rộng phân bố chiều dài gate trên wafer.
**Liên kết tiếng Hàn:** `선 가장자리 거칠기` (seon gajangjari geolchigi) — độ nhám mép đường.

## 11. random telegraph noise /ˈrændəm ˈtɛləˌɡræf nɔɪz/
**Part of speech:** noun
**Core meaning (English):** discrete, spontaneous fluctuations in a device's current or voltage caused by a small number of charge traps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiễu điện báo ngẫu nhiên; một vài trap bắt và nhả carrier khiến tín hiệu nhảy giữa các mức rời rạc.
**Grammar & collocations:** `random-telegraph-noise amplitude` — biên độ RTN; `RTN trap` — trap gây RTN; `measure random telegraph noise` — đo RTN.
**Examples:** `Random telegraph noise was visible in the low-current sensor pixel as two distinct output levels.` → Random telegraph noise hiện rõ ở pixel cảm biến dòng thấp dưới dạng hai mức output.
**Liên kết tiếng Hàn:** `랜덤 텔레그래프 노이즈` (raendeom tellegeuraepeu noijeu) — nhiễu điện báo ngẫu nhiên.

## 12. self-heating /ˌsɛlf ˈhiːtɪŋ/
**Part of speech:** noun
**Core meaning (English):** temperature rise within a device or package caused by the power it dissipates during operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tự phát nhiệt; chính dòng điện và công suất của chip làm nó nóng lên, rồi nhiệt lại ảnh hưởng thông số.
**Grammar & collocations:** `self-heating effect` — hiệu ứng tự phát nhiệt; `self-heating model` — mô hình; `limit self-heating` — giới hạn tự phát nhiệt.
**Examples:** `Self-heating shifted the oscillator frequency during the sustained high-power measurement.` → Self-heating làm tần số oscillator dịch chuyển trong phép đo công suất cao kéo dài.
**Liên kết tiếng Hàn:** `자가 발열` (jaga balyeol) — tự phát nhiệt.

## 13. reliability bathtub curve /rɪˌlaɪəˈbɪləti ˈbætˌtʌb kɝv/
**Part of speech:** noun
**Core meaning (English):** a reliability model with high early-life failures, a low random-failure period, and rising wear-out failures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường cong bồn tắm độ tin cậy; tỷ lệ hỏng cao lúc đầu, thấp ở giữa đời và tăng lại khi lão hóa.
**Grammar & collocations:** `bathtub-curve region` — vùng của đường cong; `interpret the bathtub curve` — diễn giải; `early-life bathtub curve` — phần đầu.
**Examples:** `Burn-in targets the descending left side of the reliability bathtub curve rather than normal wear-out.` → Burn-in nhắm vào sườn trái đang giảm của reliability bathtub curve chứ không phải wear-out bình thường.
**Liên kết tiếng Hàn:** `신뢰성 욕조 곡선` (sinroeseong yokjo gokseon) — đường cong bồn tắm độ tin cậy.

## 14. wear-out mechanism /ˈwɛr aʊt ˈmɛkəˌnɪzəm/
**Part of speech:** noun
**Core meaning (English):** a physical process that causes failure probability to increase as a device accumulates operating time or stress.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế hao mòn; vật liệu hoặc cấu trúc tích lũy hỏng đến khi xác suất fail tăng ở cuối vòng đời.
**Grammar & collocations:** `dominant wear-out mechanism` — cơ chế hao mòn chi phối; `wear-out failure` — hỏng do hao mòn; `identify a wear-out mechanism` — nhận diện.
**Examples:** `The team identified interconnect fatigue as the dominant wear-out mechanism in the package.` → Nhóm xác định mỏi liên kết là wear-out mechanism chi phối trong package.
**Liên kết tiếng Hàn:** `마모 메커니즘` (mamo mekeonijeum) — cơ chế hao mòn.

## 15. failure analysis /ˈfeɪljər əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** the systematic investigation of how, where, and why a device or component failed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích hỏng; lần theo vật lý, dữ liệu test và lịch sử process để tìm nguyên nhân gốc thay vì chỉ ghi nhận triệu chứng.
**Grammar & collocations:** `root-cause failure analysis` — phân tích nguyên nhân gốc; `failure-analysis lab` — phòng lab; `perform failure analysis` — thực hiện phân tích.
**Examples:** `Failure analysis linked the intermittent reset to a cracked solder joint beneath the package.` → Failure analysis liên kết hiện tượng reset chập chờn với mối hàn nứt dưới package.
**Liên kết tiếng Hàn:** `고장 분석` (gojang bunseok) — phân tích hỏng.

## 16. parametric drift /ˌpærəˈmɛtrɪk drɪft/
**Part of speech:** noun
**Core meaning (English):** a gradual change in a measurable device parameter without an immediate catastrophic failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trôi tham số; transistor vẫn chạy nhưng Vt, leakage, gain hoặc delay dần lệch khỏi giá trị ban đầu.
**Grammar & collocations:** `parametric-drift monitor` — monitor trôi tham số; `long-term parametric drift` — trôi dài hạn; `detect parametric drift` — phát hiện.
**Examples:** `Parametric drift reduced the voltage margin long before the chips began to fail functionally.` → Parametric drift làm giảm margin điện áp từ lâu trước khi chip hỏng chức năng.
**Liên kết tiếng Hàn:** `파라미터 드리프트` (paramiteo deuripeuteu) — trôi tham số.

## 17. gate-oxide integrity /ɡeɪt ˈɑksaɪd ɪnˈtɛɡrəti/
**Part of speech:** noun
**Core meaning (English):** the ability of a transistor's gate dielectric to maintain its insulating and electrical properties under operating stress.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính toàn vẹn oxide cổng; lớp dielectric phải ngăn dòng rò và chịu điện trường mà không tạo đường thủng.
**Grammar & collocations:** `gate-oxide-integrity test` — test tính toàn vẹn; `preserve oxide integrity` — giữ integrity; `oxide-integrity failure` — hỏng oxide.
**Examples:** `The voltage sweep was limited to protect gate-oxide integrity during characterization.` → Quét điện áp được giới hạn để bảo vệ gate-oxide integrity khi đặc trưng hóa.
**Liên kết tiếng Hàn:** `게이트 산화막 무결성` (geiteu sanhwangmak mugyeolseong) — tính toàn vẹn oxide cổng.

## 18. stress migration /strɛs maɪˈɡreɪʃən/
**Part of speech:** noun
**Core meaning (English):** movement of material in an interconnect caused by mechanical stress gradients, even without external current flow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** di chuyển do ứng suất; kim loại trong interconnect dịch chuyển theo gradient cơ học và có thể tạo void hoặc hillock.
**Grammar & collocations:** `stress-migration void` — void do stress migration; `stress-migration lifetime` — tuổi thọ; `model stress migration` — mô hình hóa.
**Examples:** `The package stack was redesigned after stress migration formed voids near the via.` → Stack package được thiết kế lại sau khi stress migration tạo void gần via.
**Liên kết tiếng Hàn:** `응력 마이그레이션` (eungnyeok maireigeisyeon) — di chuyển do ứng suất.

## 19. electrical overstress /ɪˈlɛktrɪkəl ˈoʊvɚˌstrɛs/
**Part of speech:** noun
**Core meaning (English):** damage or degradation caused when a device experiences voltage, current, or power beyond its specified operating limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quá ứng suất điện; xung hoặc điều kiện vượt rating làm linh kiện hỏng ngay hoặc suy giảm dần.
**Grammar & collocations:** `electrical-overstress event` — sự kiện EOS; `EOS protection` — bảo vệ EOS; `trace electrical overstress` — truy nguyên.
**Examples:** `The failed input transistor showed evidence of electrical overstress rather than a normal aging mechanism.` → Transistor input hỏng cho thấy dấu hiệu electrical overstress chứ không phải cơ chế lão hóa bình thường.
**Liên kết tiếng Hàn:** `전기적 과응력` (jeongijeok gwaeungnyeok) — quá ứng suất điện.

## 20. electrostatic discharge /ɪˌlɛktroʊˈstætɪk dɪsˈtʃɑrdʒ/
**Part of speech:** noun
**Core meaning (English):** a sudden transfer of electrostatic charge that can damage or disturb an electronic device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phóng tĩnh điện; một tia xả điện tích ngắn nhưng mạnh đi qua pin hoặc oxide nhạy.
**Grammar & collocations:** `electrostatic-discharge protection` — bảo vệ ESD; `ESD event` — sự kiện ESD; `survive electrostatic discharge` — chịu được ESD.
**Examples:** `The revised clamp helped the interface survive electrostatic discharge during handling.` → Mạch clamp sửa lại giúp interface chịu được electrostatic discharge trong lúc thao tác.
**Liên kết tiếng Hàn:** `정전기 방전` (jeongjeongi bangjeon) — phóng tĩnh điện.

## Review in context

Device aging can begin with **hot-carrier injection** or **bias-temperature instability**, while radiation contributes to the **soft error rate** and may cause a **single-event upset**. Reliability engineers report **mean time to failure** and **failure-in-time**, use **burn-in** to screen early defects, and run **accelerated life testing** before qualification. **Wafer-level reliability** can reveal process variation such as **line edge roughness**. At the circuit level, **random telegraph noise** and **self-heating** complicate measurements. The **reliability bathtub curve** separates early failures from a later **wear-out mechanism**. When a sample fails, **failure analysis** may find **parametric drift**, loss of **gate-oxide integrity**, or **stress migration**. A sudden **electrical overstress** or **electrostatic discharge** points to an external event rather than gradual aging.

**Bản dịch tiếng Việt:**

Lão hóa thiết bị có thể bắt đầu bằng hot-carrier injection hoặc bias-temperature instability, trong khi bức xạ góp phần vào soft error rate và có thể gây single-event upset. Kỹ sư độ tin cậy báo cáo mean time to failure và failure-in-time, dùng burn-in để sàng lọc lỗi sớm và chạy accelerated life testing trước qualification. Wafer-level reliability có thể phát hiện biến thiên process như line edge roughness. Ở cấp mạch, random telegraph noise và self-heating làm phép đo phức tạp hơn. Reliability bathtub curve tách lỗi sớm khỏi wear-out mechanism về sau. Khi một mẫu hỏng, failure analysis có thể tìm thấy parametric drift, mất gate-oxide integrity hoặc stress migration. Electrical overstress hoặc electrostatic discharge đột ngột gợi ý một sự kiện bên ngoài thay vì lão hóa dần.
