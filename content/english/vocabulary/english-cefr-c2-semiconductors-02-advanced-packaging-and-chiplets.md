# C2 Vocabulary — Advanced packaging and chiplets

This lesson follows a modern multi-die package from architectural partitioning through physical assembly, electrical integration, thermal control, and long-term reliability.

Flow: **advanced packaging → chiplet → package substrate → interposer → through-silicon via → wafer-level packaging → flip-chip bonding → microbump → redistribution layer → underfill → hybrid bonding → die stacking → known-good die → die-to-die interconnect → signal integrity → power integrity → thermal interface material → heat spreader → warpage → electromigration**.

## 1. advanced packaging /ədˈvænst ˈpækɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** semiconductor packaging techniques that integrate multiple dies, dense interconnects, and thermal or structural features to achieve system-level performance beyond conventional single-die packaging.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đóng gói bán dẫn tiên tiến; hình dung package không chỉ là “vỏ bảo vệ chip” mà trở thành một hệ thống kỹ thuật nối nhiều die với nhau bằng các đường truyền rất ngắn và dày đặc.
**Grammar & collocations:** `advanced-packaging platform` — nền tảng đóng gói tiên tiến; `advanced-packaging flow` — quy trình packaging tiên tiến; `advanced-packaging capacity` — năng lực sản xuất packaging tiên tiến.
**Examples:** `Advanced packaging lets designers combine specialized dies without manufacturing the entire system on one monolithic chip.` → Advanced packaging cho phép nhà thiết kế kết hợp nhiều die chuyên biệt mà không phải chế tạo toàn bộ hệ thống trên một chip nguyên khối.
**Liên kết tiếng Hàn:** `첨단 패키징` (cheomdan paekijing) — đóng gói bán dẫn tiên tiến.

## 2. chiplet /ˈtʃɪplət/
**Part of speech:** noun
**Core meaning (English):** a small functional semiconductor die designed to be combined with other dies inside one package as part of a larger system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chiplet là một “mảnh chip chức năng” nhỏ; hình dung CPU core, I/O hoặc cache được tách thành các khối riêng rồi ghép trong cùng package thay vì nằm trên một die duy nhất.
**Grammar & collocations:** `chiplet architecture` — kiến trúc chiplet; `compute chiplet` — chiplet tính toán; `chiplet-based design` — thiết kế dựa trên chiplet.
**Examples:** `The processor uses separate chiplets for compute and I/O so each function can be fabricated on the process node that suits it best.` → Bộ xử lý dùng chiplet riêng cho compute và I/O để mỗi chức năng có thể được chế tạo trên process node phù hợp nhất.
**Liên kết tiếng Hàn:** `칩렛` (chillet) — chiplet.

## 3. package substrate /ˈpækɪdʒ ˈsʌbstreɪt/
**Part of speech:** noun
**Core meaning (English):** the layered structure beneath semiconductor dies that mechanically supports them and routes electrical connections between the dies, package contacts, and circuit board.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đế package; hình dung một bảng mạch cực nhỏ nằm ngay dưới die, vừa đỡ chip vừa dẫn tín hiệu và nguồn từ các chân package lên các điểm nối rất nhỏ phía trên.
**Grammar & collocations:** `organic package substrate` — đế package hữu cơ; `substrate routing` — định tuyến trên substrate; `substrate layer` — lớp của package substrate.
**Examples:** `High-density routing in the package substrate carries signals from the chiplets to the external package pins.` → Định tuyến mật độ cao trong package substrate đưa tín hiệu từ các chiplet ra chân kết nối bên ngoài package.
**Liên kết tiếng Hàn:** `패키지 기판` (paekiji gipan) — đế package.

## 4. interposer /ˌɪntərˈpoʊzər/
**Part of speech:** noun
**Core meaning (English):** an intermediate layer placed between semiconductor dies and a package substrate to provide very dense short-range wiring and mechanical support.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lớp trung gian interposer; hình dung một “cầu nối” cực mịn đặt giữa nhiều die và substrate để các die có thể giao tiếp bằng đường dây ngắn, dày hơn nhiều so với package thông thường.
**Grammar & collocations:** `silicon interposer` — interposer silicon; `passive interposer` — interposer thụ động; `interposer routing` — định tuyến trên interposer.
**Examples:** `A silicon interposer provides thousands of short connections between the accelerator die and stacked memory.` → Silicon interposer cung cấp hàng nghìn kết nối ngắn giữa die tăng tốc và bộ nhớ xếp chồng.
**Liên kết tiếng Hàn:** `인터포저` (inteopojeo) — interposer.

## 5. through-silicon via /θruː ˈsɪlɪkən ˈvaɪə/
**Part of speech:** noun
**Core meaning (English):** a vertical conductive connection that passes through a silicon die or interposer to carry electrical signals or power between layers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗ dẫn xuyên silicon; hình dung một “thang máy điện” chạy theo chiều dọc xuyên qua lớp silicon để nối các tầng chip thay vì phải đi vòng trên bề mặt.
**Grammar & collocations:** `TSV array` — mảng TSV; `through-silicon-via density` — mật độ TSV; `TSV formation` — quá trình tạo TSV.
**Examples:** `Through-silicon vias allow stacked memory dies to communicate vertically with very short interconnect paths.` → Through-silicon via cho phép các die bộ nhớ xếp chồng giao tiếp theo chiều dọc bằng đường kết nối rất ngắn.
**Liên kết tiếng Hàn:** `실리콘 관통 전극` (sillikon gwantong jeongeuk), thường gọi `TSV` — kết nối xuyên silicon.

## 6. wafer-level packaging /ˈweɪfər ˌlɛvəl ˈpækɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** a packaging approach in which key package structures and connections are formed while semiconductor devices are still part of the wafer rather than after individual dies are separated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đóng gói ở cấp wafer; hình dung nhiều thao tác packaging được làm đồng loạt khi hàng trăm hoặc hàng nghìn die vẫn còn nằm chung trên wafer, trước bước cắt tách.
**Grammar & collocations:** `fan-in wafer-level packaging` — WLP kiểu fan-in; `fan-out wafer-level packaging` — WLP kiểu fan-out; `wafer-level-packaging process` — quy trình WLP.
**Examples:** `Wafer-level packaging can reduce package size because many interconnect features are built before singulation.` → Wafer-level packaging có thể giảm kích thước package vì nhiều cấu trúc kết nối được tạo trước khi wafer được cắt thành die riêng.
**Liên kết tiếng Hàn:** `웨이퍼 레벨 패키징` (weipeo rebel paekijing), `WLP` — đóng gói ở cấp wafer.

## 7. flip-chip bonding /flɪp tʃɪp ˈbɑndɪŋ/
**Part of speech:** noun
**Core meaning (English):** an assembly method in which a semiconductor die is turned face down and electrically connected to a substrate through an array of bumps instead of edge wire bonds.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** liên kết flip-chip; hình dung die được lật mặt mạch xuống dưới rồi ép các bump của nó vào substrate để tạo rất nhiều kết nối trực tiếp trên toàn bề mặt.
**Grammar & collocations:** `flip-chip assembly` — lắp ráp flip-chip; `flip-chip interconnect` — kết nối flip-chip; `flip-chip attach` — công đoạn gắn flip-chip.
**Examples:** `Flip-chip bonding shortens interconnect paths and supports many more connections than traditional wire bonding.` → Flip-chip bonding rút ngắn đường kết nối và hỗ trợ nhiều connection hơn wire bonding truyền thống.
**Liên kết tiếng Hàn:** `플립칩 본딩` (peullipchip bonding) — liên kết flip-chip.

## 8. microbump /ˈmaɪkroʊ bʌmp/
**Part of speech:** noun
**Core meaning (English):** a very small raised metal connection used to join closely spaced semiconductor dies, interposers, or package layers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bump siêu nhỏ; hình dung hàng nghìn “điểm hàn” kim loại li ti tạo tiếp xúc điện giữa hai bề mặt chip ở khoảng cách cực gần.
**Grammar & collocations:** `microbump pitch` — khoảng cách giữa các microbump; `microbump array` — mảng microbump; `microbump joint` — mối nối microbump.
**Examples:** `Reducing microbump pitch increases interconnect density but makes assembly tolerances more demanding.` → Giảm microbump pitch làm tăng mật độ kết nối nhưng cũng khiến yêu cầu sai số lắp ráp khắt khe hơn.
**Liên kết tiếng Hàn:** `마이크로범프` (maikeurobeompeu) — microbump.

## 9. redistribution layer /ˌriːdɪstrɪˈbjuːʃən ˈleɪər/
**Part of speech:** noun
**Core meaning (English):** a patterned metal layer that reroutes a semiconductor die's original contact locations to a different geometry or wider spacing for packaging and interconnection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lớp tái phân bố đường nối; hình dung các contact trên die quá sít nhau nên RDL “trải” chúng ra vị trí mới để dễ nối với bump, substrate hoặc các die khác.
**Grammar & collocations:** `RDL routing` — định tuyến trên RDL; `multi-layer redistribution layer` — RDL nhiều lớp; `form a redistribution layer` — tạo lớp RDL.
**Examples:** `The redistribution layer fans the fine die pads outward to a larger bump pattern.` → Redistribution layer trải các pad nhỏ trên die ra thành bố cục bump rộng hơn.
**Liên kết tiếng Hàn:** `재배선층` (jaebaeseoncheung), thường gọi `RDL` — lớp tái phân bố đường nối.

## 10. underfill /ˈʌndərˌfɪl/
**Part of speech:** noun
**Core meaning (English):** an insulating material placed in the narrow gap between a die and substrate to reinforce solder joints and reduce mechanical stress caused by thermal expansion differences.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vật liệu lấp khe dưới die; hình dung keo được hút vào khoảng trống quanh các bump để giữ cấu trúc chắc hơn và chia bớt lực khi package nóng lên rồi nguội xuống.
**Grammar & collocations:** `capillary underfill` — underfill điền bằng lực mao dẫn; `underfill material` — vật liệu underfill; `underfill curing` — quá trình đóng rắn underfill.
**Examples:** `Underfill protects the fine solder joints from repeated stress during thermal cycling.` → Underfill bảo vệ các mối hàn nhỏ khỏi ứng suất lặp lại trong các chu kỳ nóng-lạnh.
**Liên kết tiếng Hàn:** `언더필` (eondeopil) — vật liệu underfill.

## 11. hybrid bonding /ˈhaɪbrɪd ˈbɑndɪŋ/
**Part of speech:** noun
**Core meaning (English):** a fine-pitch joining technique that bonds insulating surfaces and metal contacts directly, enabling denser die-to-die connections than conventional solder bumps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** liên kết hybrid; hình dung hai bề mặt được căn cực chính xác rồi dính trực tiếp cả phần điện môi lẫn contact kim loại, gần như bỏ lớp bump lớn ở giữa.
**Grammar & collocations:** `copper-to-copper hybrid bonding` — hybrid bonding đồng-đồng; `hybrid-bonding pitch` — pitch của hybrid bonding; `wafer-to-wafer hybrid bonding` — hybrid bonding wafer-to-wafer.
**Examples:** `Hybrid bonding enables much finer connection pitch for stacked logic and memory than ordinary solder microbumps.` → Hybrid bonding cho phép pitch kết nối nhỏ hơn nhiều cho logic và memory xếp chồng so với microbump hàn thông thường.
**Liên kết tiếng Hàn:** `하이브리드 본딩` (haibeurideu bonding) — liên kết hybrid.

## 12. die stacking /daɪ ˈstækɪŋ/
**Part of speech:** noun
**Core meaning (English):** the vertical assembly of two or more semiconductor dies so that multiple functional layers occupy nearly the same horizontal footprint.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xếp chồng die; hình dung thay vì đặt chip cạnh nhau trên mặt phẳng, các die được dựng thành nhiều tầng để tiết kiệm diện tích và rút ngắn một số đường nối.
**Grammar & collocations:** `3D die stacking` — xếp chồng die 3D; `stacked-die package` — package die xếp chồng; `logic-on-memory stacking` — xếp logic trên memory.
**Examples:** `Die stacking places memory close to the compute die, reducing the physical distance data must travel.` → Die stacking đặt memory gần compute die, giảm khoảng cách vật lý mà dữ liệu phải di chuyển.
**Liên kết tiếng Hàn:** `다이 적층` (dai jeokcheung) — xếp chồng die.

## 13. known-good die /noʊn ɡʊd daɪ/
**Part of speech:** noun
**Core meaning (English):** a semiconductor die that has been tested sufficiently to provide high confidence that it functions correctly before being integrated into a more expensive multi-die package.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** die đã được xác nhận tốt; hình dung trước khi ghép nhiều chip đắt tiền vào cùng package, từng die phải qua kiểm tra để tránh một die lỗi làm hỏng cả module.
**Grammar & collocations:** `known-good-die screening` — sàng lọc KGD; `KGD strategy` — chiến lược known-good die; `ship a known-good die` — cung cấp die đã được xác nhận đạt.
**Examples:** `Known-good die screening becomes especially important when one defective component could ruin a costly multi-chip package.` → Việc sàng lọc known-good die đặc biệt quan trọng khi chỉ một component lỗi cũng có thể làm hỏng cả package nhiều chip đắt tiền.
**Liên kết tiếng Hàn:** `양품 다이` (yangpum dai), thường dùng thuật ngữ `KGD` — die đã được xác nhận hoạt động tốt.

## 14. die-to-die interconnect /daɪ tə daɪ ˌɪntərkəˈnɛkt/
**Part of speech:** noun
**Core meaning (English):** the physical and electrical communication link that carries data, clock, control, or power directly between separate semiconductor dies in one system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết nối die-to-die; hình dung một “đường cao tốc nội bộ” rất ngắn giữa các chiplet trong cùng package, thay vì phải đi ra board rồi quay lại.
**Grammar & collocations:** `die-to-die interface` — giao diện die-to-die; `die-to-die bandwidth` — băng thông giữa die; `high-speed die-to-die interconnect` — kết nối die-to-die tốc độ cao.
**Examples:** `The die-to-die interconnect must deliver high bandwidth without consuming too much power per transferred bit.` → Die-to-die interconnect phải cung cấp băng thông cao mà không tiêu thụ quá nhiều điện năng cho mỗi bit truyền.
**Liên kết tiếng Hàn:** `다이 간 인터커넥트` (dai gan inteokeonekteu) — kết nối giữa các die.

## 15. signal integrity /ˈsɪɡnəl ɪnˈtɛɡrəti/
**Part of speech:** noun
**Core meaning (English):** the degree to which an electrical signal preserves the timing, voltage shape, and distinguishability needed for reliable communication as it travels through an interconnect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính toàn vẹn tín hiệu; hình dung một bit rời transmitter với hình dạng rõ ràng và phải tới receiver vẫn đủ “sạch” để không bị hiểu nhầm do noise, reflection hoặc crosstalk.
**Grammar & collocations:** `signal-integrity analysis` — phân tích signal integrity; `signal-integrity margin` — biên an toàn tín hiệu; `degrade signal integrity` — làm suy giảm tính toàn vẹn tín hiệu.
**Examples:** `Shorter package traces can improve signal integrity by reducing loss and unwanted reflections.` → Đường trace ngắn hơn trong package có thể cải thiện signal integrity bằng cách giảm suy hao và phản xạ không mong muốn.
**Liên kết tiếng Hàn:** `신호 무결성` (sinho mugyeolseong), thường gọi `SI` — tính toàn vẹn tín hiệu.

## 16. power integrity /ˈpaʊər ɪnˈtɛɡrəti/
**Part of speech:** noun
**Core meaning (English):** the ability of a power-delivery network to maintain stable voltage and current at semiconductor devices despite rapid changes in load.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính ổn định của mạng cấp nguồn; hình dung chip thay đổi dòng điện cực nhanh nhưng điện áp tại die vẫn phải đủ phẳng, không sụt hoặc dao động đến mức gây lỗi logic.
**Grammar & collocations:** `power-integrity analysis` — phân tích power integrity; `power-delivery network` — mạng cấp nguồn; `voltage droop` — sụt áp tạm thời.
**Examples:** `Power integrity becomes harder to maintain when many high-current chiplets switch simultaneously.` → Power integrity khó duy trì hơn khi nhiều chiplet dòng lớn chuyển trạng thái đồng thời.
**Liên kết tiếng Hàn:** `전원 무결성` (jeonwon mugyeolseong), thường gọi `PI` — tính toàn vẹn nguồn.

## 17. thermal interface material /ˈθɜrməl ˈɪntərˌfeɪs məˈtɪriəl/
**Part of speech:** noun
**Core meaning (English):** a thermally conductive material placed between solid surfaces to fill microscopic gaps and reduce resistance to heat flow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vật liệu giao tiếp nhiệt; hình dung bề mặt die và tấm tản nhiệt tưởng phẳng nhưng thực tế có nhiều khe vi mô, TIM lấp các khe này để nhiệt truyền qua dễ hơn.
**Grammar & collocations:** `TIM layer` — lớp TIM; `thermal-interface resistance` — điện trở nhiệt tại interface; `apply thermal interface material` — phủ vật liệu giao tiếp nhiệt.
**Examples:** `A poor thermal interface material can trap heat even when the external heat sink is large.` → Thermal interface material kém có thể giữ nhiệt lại ngay cả khi heat sink bên ngoài rất lớn.
**Liên kết tiếng Hàn:** `열 인터페이스 재료` (yeol inteopeiseu jaeryo), `TIM` — vật liệu giao tiếp nhiệt.

## 18. heat spreader /hiːt ˈsprɛdər/
**Part of speech:** noun
**Core meaning (English):** a thermally conductive plate that distributes heat from small hot regions over a larger area before that heat reaches a cooler or heat sink.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tấm dàn nhiệt; hình dung một hotspot nhỏ trên die được “trải” nhiệt ra một mặt lớn hơn để hệ thống làm mát có thể lấy nhiệt đi hiệu quả hơn.
**Grammar & collocations:** `integrated heat spreader` — tấm dàn nhiệt tích hợp; `heat-spreader contact` — tiếp xúc với heat spreader; `attach the heat spreader` — gắn tấm dàn nhiệt.
**Examples:** `The heat spreader reduces local hot spots by distributing heat across the top of the package.` → Heat spreader giảm hotspot cục bộ bằng cách phân bố nhiệt trên bề mặt package.
**Liên kết tiếng Hàn:** `히트 스프레더` (hiteu seupuredeo), `열 확산판` — tấm dàn nhiệt.

## 19. warpage /ˈwɔrpɪdʒ/
**Part of speech:** noun
**Core meaning (English):** unwanted bending or distortion of a wafer, substrate, or package caused by uneven mechanical stress, material properties, or temperature changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiện tượng cong vênh; hình dung package vốn phải phẳng nhưng bị uốn cong nhẹ do nhiều vật liệu giãn nở khác nhau khi gia nhiệt, khiến alignment và solder joint trở nên khó kiểm soát.
**Grammar & collocations:** `package warpage` — cong vênh package; `warpage control` — kiểm soát warpage; `thermal warpage` — cong vênh do nhiệt.
**Examples:** `Excessive warpage can prevent fine-pitch connections from making uniform contact during assembly.` → Warpage quá lớn có thể khiến các kết nối pitch nhỏ không tiếp xúc đồng đều trong quá trình lắp ráp.
**Liên kết tiếng Hàn:** `워페이지` (wopaeji), `휨` — hiện tượng cong vênh.

## 20. electromigration /ɪˌlɛktroʊmaɪˈɡreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the gradual movement of metal atoms caused by high current density, which can eventually create voids, hillocks, or open circuits in semiconductor interconnects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiện tượng nguyên tử kim loại bị dòng điện “đẩy” dịch chuyển theo thời gian; hình dung một đường kim loại rất nhỏ dần bị rút vật chất khỏi một chỗ và tích tụ ở chỗ khác cho tới khi hỏng kết nối.
**Grammar & collocations:** `electromigration lifetime` — tuổi thọ giới hạn bởi electromigration; `electromigration failure` — lỗi do electromigration; `current-density limit` — giới hạn mật độ dòng.
**Examples:** `Design rules limit current density in narrow conductors to reduce the risk of electromigration failure.` → Design rule giới hạn mật độ dòng trong dây dẫn hẹp để giảm nguy cơ lỗi do electromigration.
**Liên kết tiếng Hàn:** `전자이동` (jeonja idong), `일렉트로마이그레이션` — hiện tượng electromigration.

## Review in context

Modern **advanced packaging** often starts with a **chiplet** architecture in which several specialized dies are mounted on a **package substrate** or connected through an **interposer**. A **through-silicon via** can carry signals vertically through silicon, while **wafer-level packaging** builds important package structures before the wafer is diced. During assembly, **flip-chip bonding** may connect a die with a dense **microbump** array, and a **redistribution layer** can move fine contact points to a geometry that is easier to route. **Underfill** reinforces these joints, while **hybrid bonding** can push connection pitch even smaller for high-density **die stacking**. Manufacturers try to use a **known-good die** before committing it to an expensive module, and the final **die-to-die interconnect** must provide high bandwidth while preserving **signal integrity** and **power integrity**. Heat is managed with a **thermal interface material** and a **heat spreader**, while mechanical engineers watch **warpage** during thermal cycling. Even after the package ships, reliability limits such as **electromigration** still matter because high current density can slowly damage narrow metal paths.

**Bản dịch tiếng Việt:** Advanced packaging hiện đại thường bắt đầu từ kiến trúc chiplet, trong đó nhiều die chuyên biệt được đặt trên package substrate hoặc kết nối qua interposer. Through-silicon via có thể truyền tín hiệu theo chiều dọc xuyên silicon, còn wafer-level packaging tạo các cấu trúc package quan trọng trước khi wafer được cắt. Trong quá trình lắp ráp, flip-chip bonding có thể nối die bằng một mảng microbump dày đặc, và redistribution layer có thể chuyển các điểm contact nhỏ sang hình học dễ routing hơn. Underfill gia cường các mối nối này, trong khi hybrid bonding có thể giảm pitch hơn nữa cho die stacking mật độ cao. Nhà sản xuất cố gắng dùng known-good die trước khi đưa nó vào một module đắt tiền, và die-to-die interconnect cuối cùng phải cung cấp băng thông cao đồng thời giữ signal integrity và power integrity. Nhiệt được kiểm soát bằng thermal interface material và heat spreader, còn kỹ sư cơ khí theo dõi warpage trong các chu kỳ nhiệt. Ngay cả sau khi package được xuất xưởng, các giới hạn độ tin cậy như electromigration vẫn quan trọng vì mật độ dòng cao có thể dần làm hỏng các đường kim loại hẹp.
