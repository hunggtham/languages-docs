# C2 Vocabulary — Transistor scaling and device physics

This lesson follows advanced transistor design from device geometry and electrostatic control through leakage, parasitics, variation, and long-term reliability.

Flow: **FinFET → gate-all-around transistor → nanosheet transistor → channel length → gate length → short-channel effect → threshold voltage → subthreshold swing → drain-induced barrier lowering → gate leakage → source/drain extension → contact resistance → parasitic capacitance → drive current → leakage current → power density → process variation → device variability → bias temperature instability → time-dependent dielectric breakdown**.

## 1. FinFET /ˈfɪnˌfɛt/
**Part of speech:** noun
**Core meaning (English):** a field-effect transistor whose channel is formed in a narrow vertical fin so the gate can control the channel from multiple sides.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transistor FinFET; hình dung channel được dựng thành một “vây” mỏng và gate ôm quanh nhiều mặt của vây để kiểm soát dòng điện tốt hơn transistor phẳng.
**Grammar & collocations:** `FinFET architecture` — kiến trúc FinFET; `FinFET process node` — node công nghệ dùng FinFET; `FinFET channel` — kênh FinFET.
**Examples:** `FinFETs improved electrostatic control as planar transistors became difficult to scale further.` → FinFET cải thiện khả năng kiểm soát điện trường khi transistor phẳng trở nên khó thu nhỏ thêm.
**Liên kết tiếng Hàn:** `핀펫` (pinpet) — FinFET.

## 2. gate-all-around transistor /ˌɡeɪt ɔl əˈraʊnd trænˈzɪstər/
**Part of speech:** noun
**Core meaning (English):** a transistor in which the gate surrounds the conducting channel on essentially all sides for stronger electrostatic control.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transistor gate-all-around; hình dung gate bao quanh channel gần như 360 độ thay vì chỉ tiếp xúc một vài mặt, nhờ đó “khóa/mở” dòng điện chặt hơn.
**Grammar & collocations:** `GAA transistor` — transistor GAA; `gate-all-around architecture` — kiến trúc gate-all-around; `electrostatic control` — khả năng kiểm soát điện trường.
**Examples:** `The gate-all-around transistor gives the gate tighter control over the channel at very small dimensions.` → Transistor gate-all-around giúp gate kiểm soát channel chặt hơn ở kích thước rất nhỏ.
**Liên kết tiếng Hàn:** `게이트 올 어라운드 트랜지스터`, `GAA 트랜지스터` — transistor GAA.

## 3. nanosheet transistor /ˈnænoʊˌʃiːt trænˈzɪstər/
**Part of speech:** noun
**Core meaning (English):** a gate-all-around device whose channel consists of thin horizontal semiconductor sheets stacked vertically.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transistor nanosheet; hình dung nhiều “tấm” channel siêu mỏng xếp chồng và mỗi tấm được gate bao quanh để tăng hiệu năng trong diện tích nhỏ.
**Grammar & collocations:** `stacked nanosheets` — các nanosheet xếp chồng; `nanosheet width` — độ rộng nanosheet; `nanosheet GAA` — GAA dạng nanosheet.
**Examples:** `Nanosheet transistors let designers tune channel width while preserving strong gate control.` → Transistor nanosheet cho phép điều chỉnh độ rộng channel mà vẫn giữ khả năng kiểm soát gate mạnh.
**Liên kết tiếng Hàn:** `나노시트 트랜지스터` — transistor nanosheet.

## 4. channel length /ˈtʃænəl lɛŋθ/
**Part of speech:** noun
**Core meaning (English):** the effective distance carriers travel through the transistor channel between source and drain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chiều dài channel; hình dung quãng đường dòng điện đi từ source sang drain bên dưới gate.
**Grammar & collocations:** `short channel length` — channel ngắn; `effective channel length` — chiều dài channel hiệu dụng; `channel-length scaling` — thu nhỏ chiều dài channel.
**Examples:** `Reducing channel length can increase switching speed but makes electrostatic control more difficult.` → Giảm chiều dài channel có thể tăng tốc chuyển mạch nhưng làm việc kiểm soát điện trường khó hơn.
**Liên kết tiếng Hàn:** `채널 길이` — chiều dài channel.

## 5. gate length /ˈɡeɪt lɛŋθ/
**Part of speech:** noun
**Core meaning (English):** the physical or effective dimension of the gate along the direction of current flow in a transistor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chiều dài gate; hình dung phần gate trải dọc theo hướng dòng điện và quyết định mức độ gate kiểm soát channel.
**Grammar & collocations:** `gate-length scaling` — thu nhỏ chiều dài gate; `physical gate length` — chiều dài gate vật lý; `effective gate length` — chiều dài gate hiệu dụng.
**Examples:** `Gate length must be controlled tightly because small variation can change transistor behavior.` → Chiều dài gate phải được kiểm soát rất chặt vì sai lệch nhỏ cũng có thể thay đổi hành vi transistor.
**Liên kết tiếng Hàn:** `게이트 길이` — chiều dài gate.

## 6. short-channel effect /ˌʃɔrt ˈtʃænəl ɪˌfɛkt/
**Part of speech:** noun
**Core meaning (English):** a set of nonideal behaviors that appear when the transistor channel becomes so short that the drain begins to influence the channel potential strongly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiệu ứng kênh ngắn; hình dung channel bị thu quá ngắn khiến drain “can thiệp” vào vùng lẽ ra gate phải kiểm soát, làm transistor khó tắt sạch.
**Grammar & collocations:** `suppress short-channel effects` — hạn chế hiệu ứng kênh ngắn; `short-channel behavior` — hành vi kênh ngắn; `electrostatic degradation` — suy giảm kiểm soát điện trường.
**Examples:** `Advanced device structures are designed largely to suppress short-channel effects at smaller dimensions.` → Các cấu trúc transistor tiên tiến được thiết kế phần lớn để hạn chế hiệu ứng kênh ngắn khi kích thước giảm.
**Liên kết tiếng Hàn:** `단채널 효과` — hiệu ứng kênh ngắn.

## 7. threshold voltage /ˈθrɛʃhoʊld ˈvoʊltɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the gate voltage at which a transistor channel becomes sufficiently conductive for the device to turn on in the intended sense.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điện áp ngưỡng; hình dung mức điện áp gate phải vượt qua trước khi “con đường” dẫn điện trong channel hình thành rõ rệt.
**Grammar & collocations:** `threshold-voltage shift` — dịch chuyển điện áp ngưỡng; `low-threshold device` — transistor ngưỡng thấp; `Vth variation` — biến thiên Vth.
**Examples:** `A lower threshold voltage can improve switching speed but may increase off-state leakage.` → Điện áp ngưỡng thấp hơn có thể tăng tốc chuyển mạch nhưng cũng có thể tăng dòng rò khi tắt.
**Liên kết tiếng Hàn:** `문턱 전압`, `임계 전압` — điện áp ngưỡng.

## 8. subthreshold swing /ˌsʌbˈθrɛʃhoʊld swɪŋ/
**Part of speech:** noun
**Core meaning (English):** a measure of how much gate-voltage change is required to change drain current by one decade in the transistor's subthreshold region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ dốc dưới ngưỡng; hình dung nó đo transistor chuyển từ “gần tắt” sang “gần bật” sắc đến mức nào. Giá trị nhỏ hơn nghĩa là chuyển trạng thái dốc hơn.
**Grammar & collocations:** `subthreshold-swing limit` — giới hạn subthreshold swing; `steep subthreshold swing` — độ dốc dưới ngưỡng lớn về độ sắc; `SS degradation` — suy giảm SS.
**Examples:** `A smaller subthreshold swing allows the current to change sharply over a narrower voltage range.` → Subthreshold swing nhỏ hơn cho phép dòng điện thay đổi mạnh trong một khoảng điện áp hẹp hơn.
**Liên kết tiếng Hàn:** `서브스레시홀드 스윙`, `문턱 이하 기울기` — subthreshold swing.

## 9. drain-induced barrier lowering /dreɪn ɪnˈdust ˈbæriər ˈloʊərɪŋ/
**Part of speech:** noun
**Core meaning (English):** a short-channel effect in which a high drain voltage lowers the source-channel energy barrier and increases unintended current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** DIBL; hình dung điện áp drain cao “kéo thấp hàng rào” ở phía source, khiến electron đi qua dễ hơn ngay cả khi gate chưa thực sự bật transistor.
**Grammar & collocations:** `DIBL coefficient` — hệ số DIBL; `reduce DIBL` — giảm DIBL; `drain-field penetration` — điện trường drain xâm nhập channel.
**Examples:** `Strong gate control reduces drain-induced barrier lowering in scaled transistors.` → Khả năng kiểm soát gate mạnh giúp giảm DIBL trong transistor đã thu nhỏ.
**Liên kết tiếng Hàn:** `드레인 유도 장벽 저하`, thường gọi `DIBL`.

## 10. gate leakage /ˈɡeɪt ˈliːkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** unintended current that flows through or around the gate dielectric instead of remaining electrically isolated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dòng rò gate; hình dung lớp cách điện gate đáng lẽ chặn dòng nhưng vẫn để một phần điện tích “rỉ” qua.
**Grammar & collocations:** `gate-leakage current` — dòng rò gate; `suppress gate leakage` — hạn chế dòng rò gate; `dielectric tunneling` — xuyên hầm qua điện môi.
**Examples:** `High-k dielectrics were adopted partly to reduce gate leakage without sacrificing gate capacitance.` → Điện môi high-k được sử dụng một phần để giảm dòng rò gate mà không làm mất điện dung gate cần thiết.
**Liên kết tiếng Hàn:** `게이트 누설 전류` — dòng rò gate.

## 11. source/drain extension /sɔrs dreɪn ɪkˈstɛnʃən/
**Part of speech:** noun
**Core meaning (English):** a shallow doped region extending the source and drain toward the channel to shape electric fields and reduce resistance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng mở rộng source/drain; hình dung vùng pha tạp nông nối source và drain tiến sát về channel để dòng điện đi vào channel mượt hơn và điện trường được kiểm soát tốt hơn.
**Grammar & collocations:** `source/drain extension implant` — bước cấy ion vùng mở rộng; `extension resistance` — điện trở vùng mở rộng; `junction engineering` — kỹ thuật tối ưu junction.
**Examples:** `The source/drain extension was optimized to balance series resistance against short-channel control.` → Vùng mở rộng source/drain được tối ưu để cân bằng điện trở nối tiếp với khả năng kiểm soát kênh ngắn.
**Liên kết tiếng Hàn:** `소스/드레인 익스텐션`, `소스·드레인 확장 영역`.

## 12. contact resistance /ˈkɑntækt rɪˈzɪstəns/
**Part of speech:** noun
**Core meaning (English):** electrical resistance introduced at the interface where a metal contact connects to a semiconductor region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điện trở tiếp xúc; hình dung dòng điện không chỉ gặp điện trở trong channel mà còn mất năng lượng ngay tại điểm kim loại “chạm” vào semiconductor.
**Grammar & collocations:** `low contact resistance` — điện trở tiếp xúc thấp; `contact-resistance reduction` — giảm điện trở tiếp xúc; `contact interface` — giao diện tiếp xúc.
**Examples:** `Contact resistance becomes a larger fraction of total device resistance as transistors shrink.` → Điện trở tiếp xúc chiếm tỷ lệ lớn hơn trong tổng điện trở thiết bị khi transistor được thu nhỏ.
**Liên kết tiếng Hàn:** `접촉 저항` — điện trở tiếp xúc.

## 13. parasitic capacitance /ˌpærəˈsɪtɪk kəˈpæsɪtəns/
**Part of speech:** noun
**Core meaning (English):** unintended capacitance between nearby conductors or device regions that stores charge and slows circuit transitions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điện dung ký sinh; hình dung hai phần kim loại hoặc vùng transistor vô tình tạo thành một “tụ điện nhỏ” làm tín hiệu phải tốn thêm thời gian nạp/xả.
**Grammar & collocations:** `reduce parasitic capacitance` — giảm điện dung ký sinh; `gate-to-drain capacitance` — điện dung gate-drain; `capacitance loading` — tải điện dung.
**Examples:** `Parasitic capacitance can erase some of the speed gains expected from a smaller transistor.` → Điện dung ký sinh có thể làm mất một phần lợi ích tốc độ kỳ vọng từ transistor nhỏ hơn.
**Liên kết tiếng Hàn:** `기생 정전용량` — điện dung ký sinh.

## 14. drive current /ˈdraɪv ˈkɝənt/
**Part of speech:** noun
**Core meaning (English):** the current a transistor can deliver in its on-state to charge or discharge circuit nodes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dòng dẫn khi bật; hình dung “sức kéo” của transistor khi nó phải nạp hoặc xả điện tích ở node mạch.
**Grammar & collocations:** `increase drive current` — tăng drive current; `on-state current` — dòng trạng thái bật; `current drive capability` — khả năng cấp dòng.
**Examples:** `Higher drive current can shorten switching delay if parasitic loading is controlled.` → Drive current cao hơn có thể giảm độ trễ chuyển mạch nếu tải ký sinh được kiểm soát.
**Liên kết tiếng Hàn:** `구동 전류` — drive current.

## 15. leakage current /ˈliːkɪdʒ ˈkɝənt/
**Part of speech:** noun
**Core meaning (English):** unintended current that flows when a device should ideally block current or remain in an off-state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dòng rò; hình dung transistor đã “tắt” nhưng vẫn có một dòng nhỏ lén chảy qua, gây tiêu hao điện năng và sinh nhiệt.
**Grammar & collocations:** `off-state leakage` — dòng rò khi tắt; `leakage-current reduction` — giảm dòng rò; `standby leakage` — dòng rò khi chờ.
**Examples:** `Leakage current becomes a major power concern when billions of transistors are integrated on one chip.` → Dòng rò trở thành vấn đề điện năng lớn khi hàng tỷ transistor được tích hợp trên một chip.
**Liên kết tiếng Hàn:** `누설 전류` — dòng rò.

## 16. power density /ˈpaʊər ˈdɛnsəti/
**Part of speech:** noun
**Core meaning (English):** the amount of power consumed or dissipated per unit area of a chip or device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mật độ công suất; hình dung cùng một diện tích silicon nhưng ngày càng chứa nhiều transistor và nhiệt hơn, khiến mỗi mm² phải xử lý nhiều năng lượng hơn.
**Grammar & collocations:** `high power density` — mật độ công suất cao; `power-density limit` — giới hạn mật độ công suất; `thermal constraint` — giới hạn nhiệt.
**Examples:** `Power density limits how aggressively designers can increase switching activity and transistor density.` → Mật độ công suất giới hạn mức độ các nhà thiết kế có thể tăng hoạt động chuyển mạch và mật độ transistor.
**Liên kết tiếng Hàn:** `전력 밀도` — mật độ công suất.

## 17. process variation /ˈprɑsɛs ˌvɛriˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** manufacturing-induced differences in dimensions, materials, or electrical properties among nominally identical devices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến thiên quy trình; hình dung cùng một thiết kế nhưng mỗi transistor sau sản xuất có thể lệch rất nhỏ về kích thước, nồng độ pha tạp hoặc vật liệu.
**Grammar & collocations:** `within-die process variation` — biến thiên trong cùng die; `process corner` — góc quy trình; `variation-aware design` — thiết kế có xét biến thiên.
**Examples:** `Process variation broadens the distribution of threshold voltage across a large chip.` → Biến thiên quy trình làm phân bố điện áp ngưỡng trải rộng hơn trên một chip lớn.
**Liên kết tiếng Hàn:** `공정 변동`, `공정 편차` — biến thiên quy trình.

## 18. device variability /dɪˈvaɪs ˌvɛriəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** device-to-device differences in electrical behavior caused by manufacturing variation and microscopic physical randomness.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ biến thiên giữa các transistor; hình dung hai transistor “giống hệt trên bản vẽ” nhưng thực tế lại có dòng, ngưỡng và tốc độ hơi khác nhau.
**Grammar & collocations:** `device-to-device variability` — biến thiên giữa thiết bị; `random variability` — biến thiên ngẫu nhiên; `variability margin` — biên dự phòng cho biến thiên.
**Examples:** `Device variability forces circuit designers to leave margin for the slowest and leakiest transistors.` → Device variability buộc nhà thiết kế mạch phải chừa biên cho các transistor chậm nhất và rò nhiều nhất.
**Liên kết tiếng Hàn:** `소자 변동성`, `소자 편차` — độ biến thiên thiết bị.

## 19. bias temperature instability /ˈbaɪəs ˈtɛmprətʃər ˌɪnstəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** a reliability effect in which sustained electrical bias and temperature gradually shift transistor characteristics, especially threshold voltage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bất ổn do điện áp phân cực và nhiệt độ; hình dung transistor hoạt động lâu dưới điện áp và nhiệt sẽ “lão hóa”, khiến điện áp ngưỡng thay đổi theo thời gian.
**Grammar & collocations:** `BTI degradation` — suy giảm do BTI; `negative bias temperature instability` — NBTI; `threshold-voltage aging` — lão hóa điện áp ngưỡng.
**Examples:** `Bias temperature instability can slow critical paths after years of operation.` → BTI có thể làm các đường timing quan trọng chậm đi sau nhiều năm hoạt động.
**Liên kết tiếng Hàn:** `바이어스 온도 불안정성`, `BTI`.

## 20. time-dependent dielectric breakdown /ˌtaɪm dɪˈpɛndənt ˌdaɪəˈlɛktrɪk ˈbreɪkdaʊn/
**Part of speech:** noun
**Core meaning (English):** gradual damage to a dielectric under prolonged electric field that can eventually create a conductive failure path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đánh thủng điện môi phụ thuộc thời gian; hình dung lớp cách điện chịu điện trường trong thời gian dài, tích lũy khuyết tật cho tới khi xuất hiện một đường dẫn điện xuyên qua.
**Grammar & collocations:** `TDDB lifetime` — tuổi thọ TDDB; `dielectric breakdown` — đánh thủng điện môi; `reliability extrapolation` — ngoại suy độ tin cậy.
**Examples:** `Time-dependent dielectric breakdown is modeled to ensure the gate dielectric survives the intended product lifetime.` → TDDB được mô hình hóa để bảo đảm điện môi gate tồn tại suốt tuổi thọ dự kiến của sản phẩm.
**Liên kết tiếng Hàn:** `시간 의존 절연 파괴`, `TDDB`.

## Review in context

At advanced nodes, **FinFET** technology is increasingly complemented by the **gate-all-around transistor**, especially the **nanosheet transistor**, because shrinking **channel length** and **gate length** intensifies the **short-channel effect**. Designers must tightly control **threshold voltage**, **subthreshold swing**, and **drain-induced barrier lowering** while also limiting **gate leakage**. The geometry and doping of the **source/drain extension** affect series resistance, and **contact resistance** becomes increasingly important as dimensions fall. Meanwhile, **parasitic capacitance** can offset gains in **drive current**, while **leakage current** raises standby power and overall **power density**. Manufacturing introduces **process variation**, which appears electrically as **device variability** across nominally identical transistors. Even after fabrication, long-term mechanisms such as **bias temperature instability** and **time-dependent dielectric breakdown** continue to change device behavior and determine reliability limits.

**Bản dịch tiếng Việt:** Ở các node tiên tiến, công nghệ **FinFET** ngày càng được bổ sung bởi **transistor gate-all-around**, đặc biệt là **transistor nanosheet**, vì việc giảm **chiều dài channel** và **chiều dài gate** làm **hiệu ứng kênh ngắn** nghiêm trọng hơn. Nhà thiết kế phải kiểm soát chặt **điện áp ngưỡng**, **subthreshold swing** và **DIBL**, đồng thời hạn chế **dòng rò gate**. Hình học và pha tạp của **vùng mở rộng source/drain** ảnh hưởng điện trở nối tiếp, còn **điện trở tiếp xúc** ngày càng quan trọng khi kích thước giảm. Trong khi đó, **điện dung ký sinh** có thể làm mất lợi ích của **drive current** cao hơn, còn **dòng rò** làm tăng điện năng chờ và **mật độ công suất**. Sản xuất tạo ra **biến thiên quy trình**, thể hiện về điện như **device variability** giữa các transistor vốn được thiết kế giống nhau. Ngay cả sau khi chế tạo, các cơ chế dài hạn như **bias temperature instability** và **time-dependent dielectric breakdown** vẫn tiếp tục làm thay đổi hành vi thiết bị và quyết định giới hạn độ tin cậy.
