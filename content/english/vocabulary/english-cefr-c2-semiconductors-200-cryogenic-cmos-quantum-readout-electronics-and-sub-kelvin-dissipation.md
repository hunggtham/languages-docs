# C2 Vocabulary 200 — Cryogenic CMOS electronics, sub-Kelvin thermal dissipation, and quantum qubit readout interfaces

Trong cuộc đua xây dựng các hệ thống máy tính lượng tử quy mô triệu qubit (fault-tolerant quantum computing), nút thắt cổ chai vật lý lớn nhất hiện nay không còn nằm ở bản thân các cổng lượng tử đơn lẻ, mà nằm ở hệ thống dây cáp đồng trục kết nối giữa bộ xử lý lượng tử siêu dẫn đặt trong buồng lạnh pha loãng (dilution refrigerator) ở nhiệt độ vài millikelvin và dàn thiết bị điện tử điều khiển cồng kềnh ở nhiệt độ phòng (300K). Để phá vỡ rào cản này, ngành công nghiệp bán dẫn tiên tiến đang phát triển các kiến trúc vi mạch CMOS siêu lạnh (cryogenic CMOS hay Cryo-CMOS) đặt ngay tại các tầng nhiệt 4K hoặc 100mK. Tuy nhiên, hoạt động ở nhiệt độ cận độ không tuyệt đối làm biến đổi sâu sắc vật lý bán dẫn: độ dốc dưới ngưỡng sắc nhọn đột biến (subthreshold swing sharpening), xuất hiện hiện tượng đông cứng hạt mang điện (carrier freeze-out), nhiễu nhấp nháy 1/f gia tăng do các bẫy điện tích đơn lẻ, và đặc biệt là ngân sách tiêu tán nhiệt cực kỳ khắt khe ở mức dưới Kelvin (sub-Kelvin thermal dissipation) nhằm bảo toàn thời gian sống của qubit. Bài học C2 này trang bị trọn bộ 25 thuật ngữ học thuật và kỹ thuật chuẩn xác nhất, giúp bạn làm chủ bức tranh công nghệ giao diện điều khiển và đọc trạng thái qubit lượng tử đỉnh cao.

Flow của bài học: **cryogenic CMOS architecture** → **sub-Kelvin thermal dissipation** → **subthreshold swing sharpening** → **carrier freeze-out phenomenon** → **cryogenic flicker noise minimization** → **Josephson parametric amplifier** → **superconducting interconnect routing** → **monolithic qubit controller integration** → **dilution refrigerator mixing chamber** → **dispersive qubit readout** → **qubit state discrimination** → **quantum non-demolition measurement** → **cryogenic low-noise amplifier** → **cryogenic high-electron-mobility transistor** → **thermal anchoring attenuation** → **superconducting coplanar waveguide resonator** → **Johnson-Nyquist thermal noise limit** → **in-phase and quadrature demodulation** → **parasitic heat load dissipation** → **phonon-mediated thermal bottleneck** → **quantum-limited noise figure** → **cryogenic bandgap reference voltage** → **transmon qubit relaxation lifetime** → **frequency-division multiplexed readout** → **cryo-CMOS mixed-signal ASIC**.

---

## 1. cryogenic CMOS architecture /ˌkraɪəˈdʒɛnɪk ˈsiːmɔːs ˌɑːrkəˈtɛktʃər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `Cryo-CMOS architecture`). Thường làm chủ ngữ chỉ thiết kế mạch tích hợp chuyên dụng hoặc tân ngữ sau các động từ như `pioneer`, `fabricate`, `deploy`.

**Core meaning — English:** An integrated circuit architecture engineered using standard silicon complementary metal-oxide-semiconductor processes but optimized structurally and electro-thermally to operate reliably at cryogenic temperatures (typically 4 Kelvin or below) for controlling quantum processors.

**Core meaning & mental image — Tiếng Việt:** Kiến trúc CMOS siêu lạnh; hãy hình dung việc đưa một bộ vi xử lý máy tính thông thường từ một văn phòng ấm áp xuống đặt thẳng vào giữa vùng băng giá vĩnh cửu của sao Diêm Vương: thay vì bị đóng băng tê liệt, kiến trúc CMOS siêu lạnh được thiết kế lại cấu trúc tiếp giáp bán dẫn và phân cực điện áp sao cho các bóng bán dẫn silic không những không chết mà còn đóng mở van điện tử với tốc độ cực nhanh và tiêu tốn cực ít năng lượng ngay sát cạnh các bộ vi xử lý lượng tử.

**Grammar & collocations:** `develop a cryogenic CMOS architecture` — phát triển một kiến trúc CMOS siêu lạnh; `thermal constraints of cryogenic CMOS architecture` — các ràng buộc nhiệt của kiến trúc CMOS siêu lạnh; `cryogenic CMOS architecture for spin qubits` — kiến trúc CMOS siêu lạnh cho qubit spin.

**Register & nuance:** `quantum computing hardware & cryogenic semiconductor engineering` — giải pháp mang tính cách mạng nhằm loại bỏ hàng nghìn sợi cáp đồng trục nối từ nhiệt độ phòng xuống buồng lạnh pha loãng; cho phép mở rộng quy mô máy tính lượng tử từ vài chục qubit lên hàng triệu qubit.

**Examples:** `Deploying a cryogenic CMOS architecture operating at 4 Kelvin eliminated thousands of heat-leaking coaxial cables running from room temperature into the dilution refrigerator.` → Việc triển khai một kiến trúc CMOS siêu lạnh hoạt động ở 4 Kelvin đã loại bỏ hàng ngàn sợi cáp đồng trục rò rỉ nhiệt chạy từ nhiệt độ phòng vào trong buồng lạnh pha loãng.

**Liên kết tiếng Hàn:** `극저온 CMOS 아키텍처` (極低溫 CMOS architecture) — kiến trúc vi mạch CMOS tối ưu hóa để hoạt động ổn định ở nhiệt độ siêu lạnh cận độ không tuyệt đối.

---

## 2. sub-Kelvin thermal dissipation /sʌb ˈkɛlvɪn ˈθɜːrməl ˌdɪsəˈpeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là thông số giới hạn công suất nhiệt khắc nghiệt nhất trong buồng lạnh (ví dụ: `constrain by sub-Kelvin thermal dissipation`).

**Core meaning — English:** The strict micro-watt or nano-watt upper limit of heat generated by active electronic components that can be safely absorbed and removed by cooling stages operating below 1 Kelvin without warming delicate superconducting qubits out of their quantum coherent states.

**Core meaning & mental image — Tiếng Việt:** Sự tiêu tán nhiệt dưới Kelvin / công suất tỏa nhiệt ở tầng nhiệt dưới Kelvin; hãy hình dung bạn đốt một que diêm nhỏ giữa một túp lều làm bằng băng tuyết siêu mỏng: sức nóng của que diêm dù chỉ tính bằng một phần triệu watt cũng đủ làm tan chảy cả túp lều băng; ở nhiệt độ dưới 1 Kelvin (nơi 1 miliwatt nhiệt cũng là một thảm họa), mọi mạch điện tử đặt tại đây đều phải hoạt động như một cỗ máy tĩnh lặng hoàn hảo, tỏa ra lượng nhiệt gần như bằng không để không làm sập trạng thái lượng tử mong manh của qubit.

**Grammar & collocations:** `minimize sub-Kelvin thermal dissipation` — giảm thiểu sự tiêu tán nhiệt dưới Kelvin; `budget for sub-Kelvin thermal dissipation` — ngân sách tiêu tán nhiệt dưới Kelvin; `sub-Kelvin thermal dissipation penalty` — tổn thất do tiêu tán nhiệt dưới Kelvin.

**Register & nuance:** `cryogenic thermal physics & dilution refrigeration` — ở tầng trộn (mixing chamber) khoảng 10-20 mK, công suất làm lạnh hữu dụng của tủ lạnh pha loãng chỉ đạt khoảng vài microwatt; do đó, bất kỳ mạch điện tử nào đặt tại tầng này đều phải tuân thủ nghiêm ngặt ngân sách nhiệt dưới microwatt.

**Examples:** `Circuits placed on the 100-millikelvin stage must enforce sub-Kelvin thermal dissipation budgets below two microwatts to avoid catastrophic qubit decoherence.` → Các mạch điện đặt trên tầng 100-millikelvin phải thực thi các ngân sách tiêu tán nhiệt dưới Kelvin dưới hai microwatt để tránh hiện tượng mất kết hợp qubit thảm khốc.

**Liên kết tiếng Hàn:** `서브 켈빈 열 소산` (sub-Kelvin 熱 消散) — mức tỏa nhiệt cực thấp ở các tầng làm lạnh dưới 1 Kelvin để bảo vệ trạng thái lượng tử.

---

## 3. subthreshold swing sharpening /sʌbˈθrɛʃhoʊld swɪŋ ˈʃɑːrpənɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm hiện tượng vật lý thuận lợi của transistor ở nhiệt độ thấp (ví dụ: `exhibit subthreshold swing sharpening`).

**Core meaning — English:** The dramatic physical steepening of a MOSFET’s subthreshold slope at cryogenic temperatures (dropping from the room-temperature thermal limit of 60 mV/decade toward sub-10 mV/decade), allowing transistors to switch between ON and OFF states with vastly reduced gate voltage swings.

**Core meaning & mental image — Tiếng Việt:** Sự sắc nhọn hóa độ dốc dưới ngưỡng; hãy hình dung một chiếc công tắc đèn: ở nhiệt độ phòng, bạn phải xoay núm vặn một góc khá lớn chiếc đèn mới từ từ sáng lên (độ dốc thoai thoải 60 mV/decade); nhưng khi bị nhúng vào môi trường siêu lạnh, chiếc núm vặn trở nên cực kỳ nhạy bén: chỉ cần khẽ nhích một phần mười milimet (vài milivolt), công tắc đã bật sáng chói lòa hoặc tắt ngấm hoàn toàn; sự sắc nhọn này cho phép giảm điện áp cấp nguồn và tiết kiệm hàng nghìn lần năng lượng.

**Grammar & collocations:** `exploit subthreshold swing sharpening` — khai thác sự sắc nhọn hóa độ dốc dưới ngưỡng; `extent of subthreshold swing sharpening` — mức độ sắc nhọn hóa của độ dốc dưới ngưỡng; `subthreshold swing sharpening down to liquid helium temperatures` — sự sắc nhọn hóa độ dốc dưới ngưỡng xuống tới nhiệt độ heli lỏng.

**Register & nuance:** `solid-state device physics at cryo temperatures` — về mặt lý thuyết nhiệt động lực học Boltzmann ($S = \ln(10) \cdot k_B T / q$), độ dốc này tỷ lệ thuận với nhiệt độ tuyệt đối $T$; trên thực tế ở 4K, nó bị bão hòa ở mức khoảng 10-20 mV/decade do các bẫy điện tích vùng biên giao diện (interface traps).

**Examples:** `Benefiting from subthreshold swing sharpening at 4 Kelvin, engineers lowered the transistor supply voltage to 0.5 volts, dramatically slashing dynamic power consumption.` → Được hưởng lợi từ sự sắc nhọn hóa độ dốc dưới ngưỡng ở 4 Kelvin, các kỹ sư đã hạ điện áp cấp nguồn transistor xuống 0.5 volt, cắt giảm ngoạn mục mức tiêu thụ điện động.

**Liên kết tiếng Hàn:** `서브문턱 스윙 첨예화` (sub閾值 swing 尖銳化) — hiện tượng độ dốc dưới ngưỡng của transistor trở nên cực kỳ dốc và sắc nét ở nhiệt độ siêu lạnh.

---

## 4. carrier freeze-out phenomenon /ˈkæriər friːz aʊt fəˈnɑːmɪnən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là hiện tượng vật lý cản trở dẫn điện trong bán dẫn khối ở nhiệt độ cực thấp (ví dụ: `encounter the carrier freeze-out phenomenon`).

**Core meaning — English:** The solid-state physics phenomenon occurring at cryogenic temperatures where thermal energy becomes insufficient to ionize dopant atoms in the silicon lattice, causing conduction electrons or holes to become trapped in dopant parent atoms and drastically increasing substrate resistivity.

**Core meaning & mental image — Tiếng Việt:** Hiện tượng đông cứng hạt mang điện; hãy hình dung những chú ong thợ (các electron tự do mang dòng điện) đang bay lượn trong tổ ong (mạng tinh thể silic): khi thời tiết hạ xuống mức cực hàn cận độ không tuyệt đối, nhiệt năng biến mất khiến đôi cánh của các chú ong bị đóng băng cứng ngắc; chúng bị hút dính chặt vào các hốc sáp (các nguyên tử tạp chất pha tạp) và không thể bay ra ngoài để tạo thành dòng điện được nữa; chất bán dẫn đột ngột biến thành chất cách điện nếu không được kích thích.

**Grammar & collocations:** `suffer from carrier freeze-out phenomenon` — chịu ảnh hưởng bởi hiện tượng đông cứng hạt mang điện; `onset of carrier freeze-out phenomenon` — sự khởi phát của hiện tượng đông cứng hạt mang điện; `mitigate carrier freeze-out phenomenon via degenerate doping` — giảm thiểu hiện tượng đông cứng hạt mang điện thông qua pha tạp suy biến.

**Register & nuance:** `semiconductor cryogenic physics` — bắt đầu xuất hiện dưới 77K và trở nên trầm trọng dưới 20K trong silic pha tạp nhẹ; để khắc phục, các nhà thiết kế Cryo-CMOS phải sử dụng công nghệ pha tạp cực cao (degenerate doping) hoặc cấu trúc transistor màng mỏng không pha tạp như FD-SOI (Fully Depleted Silicon-On-Insulator) và FinFET.

**Examples:** `Standard bulk silicon MOSFETs cease functioning properly below 30 Kelvin due to the carrier freeze-out phenomenon, necessitating the adoption of fully depleted SOI architectures.` → Các transistor MOSFET silic khối tiêu chuẩn ngừng hoạt động bình thường dưới 30 Kelvin do hiện tượng đông cứng hạt mang điện, đòi hỏi phải áp dụng các kiến trúc SOI suy giảm hoàn toàn (FD-SOI).

**Liên kết tiếng Hàn:** `전하 운반자 동결 현상` (電荷 運搬者 凍結 現象) — hiện tượng các electron và lỗ trống bị đóng băng mắc kẹt vào các nguyên tử pha tạp ở nhiệt độ siêu hàn.

---

## 5. cryogenic flicker noise minimization /ˌkraɪəˈdʒɛnɪk ˈflɪkər nɔɪz ˌmɪnɪmɪˈzeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm mục tiêu thiết kế mạch khuếch đại đọc tín hiệu lượng tử (ví dụ: `achieve cryogenic flicker noise minimization`).

**Core meaning — English:** Circuit and device optimization techniques aimed at suppressing low-frequency $1/f$ noise in MOSFETs operating at cryogenic temperatures, where individual oxide traps cause pronounced random telegraph signals that jitter qubit control pulses.

**Core meaning & mental image — Tiếng Việt:** Giảm thiểu nhiễu nhấp nháy siêu lạnh; hãy hình dung một chiếc bóng đèn sợi đốt trong phòng thu âm: khi căn phòng bị làm lạnh sâu, dây tóc bóng đèn bắt đầu chớp nháy liên tục ở tần số thấp (nhiễu 1/f) do một vài hạt bụi tích điện nhảy qua nhảy lại; ánh sáng chớp nháy lập lòe này làm nhiễu loạn ống kính máy quay siêu nhạy; việc giảm thiểu nhiễu nhấp nháy siêu lạnh giống như việc bọc kín dây tóc bóng đèn trong một lớp kính lọc quang học chân không hoàn mỹ để ánh sáng phát ra êm ả và ổn định tuyệt đối.

**Grammar & collocations:** `prioritize cryogenic flicker noise minimization` — ưu tiên việc giảm thiểu nhiễu nhấp nháy siêu lạnh; `techniques for cryogenic flicker noise minimization` — các kỹ thuật giảm thiểu nhiễu nhấp nháy siêu lạnh (như periodic autozeroing hay chopper stabilization); `achieve cryogenic flicker noise minimization in preamplifiers` — đạt được sự giảm thiểu nhiễu nhấp nháy siêu lạnh trong các bộ tiền khuếch đại.

**Register & nuance:** `analog front-end design for quantum readout` — ở nhiệt độ phòng, nhiễu flicker là sự tổng hòa của hàng tỷ bẫy điện tích; nhưng ở 4K, nó biểu hiện dưới dạng nhiễu điện báo ngẫu nhiên (Random Telegraph Noise - RTN) của từng bẫy điện tích đơn lẻ, trực tiếp làm sai lệch pha của các xung vi sóng điều khiển qubit.

**Examples:** `Through large-geometry transistor sizing and chopper stabilization, the front-end amplifier achieved cryogenic flicker noise minimization, safeguarding fragile qubit state fidelity.` → Thông qua việc định kích thước transistor diện tích lớn và kỹ thuật ổn định hóa băm xung (chopper), bộ khuếch đại đầu vào đã đạt được sự giảm thiểu nhiễu nhấp nháy siêu lạnh, bảo vệ độ trung thực của trạng thái qubit mong manh.

**Liên kết tiếng Hàn:** `극저온 플리커 노이즈 최소화` (極低溫 flicker noise 最小化) — kỹ thuật triệt tiêu và giảm thiểu nhiễu tần số thấp 1/f ở nhiệt độ siêu lạnh.

---

## 6. Josephson parametric amplifier /ˈdʒoʊzəfsən ˌpærəˈmɛtrɪk ˈæmpləfaɪər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `JPA`). Đóng vai trò là linh kiện khuếch đại lượng tử tiền tuyến đặt tại tầng mK (ví dụ: `employ a Josephson parametric amplifier`).

**Core meaning — English:** A superconducting quantum amplifier utilizing the non-linear, dissipationless inductance of Josephson junctions to amplify weak microwave readout signals with added noise approaching the fundamental quantum limit set by the Heisenberg uncertainty principle.

**Core meaning & mental image — Tiếng Việt:** Bộ khuếch đại tham số Josephson; hãy hình dung một em bé đang chơi xích đu: thay vì có người đứng sau đẩy lưng em bé (gây ra tiếng động và nhiệt ma sát), người mẹ chỉ cần đứng dưới và nhún nhẩy làm thay đổi nhẹ nhàng chiều dài của sợi dây xích đu đúng theo nhịp điệu (điều chế tham số điện cảm); chiếc xích đu tự động bay vút lên thật cao mà không bị bất kỳ sự cọ xát nào làm nóng dây; bộ khuếch đại này nâng bổng tín hiệu vi sóng cực yếu của qubit lên hàng nghìn lần mà không thêm vào bất kỳ tạp âm nào.

**Grammar & collocations:** `pump a Josephson parametric amplifier` — bơm sóng vào một bộ khuếch đại tham số Josephson; `gain bandwidth of a Josephson parametric amplifier` — băng thông độ lợi của bộ khuếch đại tham số Josephson; `quantum-limited amplification via Josephson parametric amplifier` — khuếch đại tiệm cận giới hạn lượng tử qua bộ khuếch đại tham số Josephson.

**Register & nuance:** `quantum measurement & superconducting circuits` — là linh kiện tiền tuyến đầu tiên bắt buộc phải có sau qubit; có độ nhiễu siêu thấp (chỉ thêm nửa photon nhiễu lượng tử) nhưng có nhược điểm là băng thông hẹp (vài chục MHz) và công suất bão hòa rất nhỏ.

**Examples:** `Operating at the 15-millikelvin mixing chamber, the Josephson parametric amplifier boosts single-photon microwave readout tones before they enter higher-temperature noise environments.` → Hoạt động tại tầng trộn 15-millikelvin, bộ khuếch đại tham số Josephson tăng cường các âm sắc đọc vi sóng đơn photon trước khi chúng đi vào các môi trường nhiễu ở nhiệt độ cao hơn.

**Liên kết tiếng Hàn:** `조셉슨 매개변수 증폭기` (Josephson 媒介變數 增幅器) — bộ khuếch đại tham số siêu dẫn sử dụng tiếp giáp Josephson đạt giới hạn khuếch đại lượng tử.

---

## 7. superconducting interconnect routing /ˌsuːpərkənˈdʌktɪŋ ˌɪntərkəˈnɛkt ˈraʊtɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm giải pháp truyền dẫn tín hiệu không tỏa nhiệt giữa các tầng nhiệt (ví dụ: `implement superconducting interconnect routing`).

**Core meaning — English:** The physical design and spatial deployment of zero-resistance superconducting planar waveguides or flexible ribbon transmission lines (e.g., NbTi or aluminum) to route high-frequency microwave pulses across cryogenic thermal stages without ohmic heat dissipation.

**Core meaning & mental image — Tiếng Việt:** Định tuyến liên kết siêu dẫn; hãy hình dung một hệ thống ống dẫn dầu nối giữa các nhà máy: nếu dùng các đường ống kim loại thông thường, dầu ma sát vào thành ống sẽ làm nóng bừng cả đường ống và tiêu hao năng lượng (tổn hao điện trở Ohm); việc định tuyến liên kết siêu dẫn giống như việc biến lòng đường ống thành một lớp tráng băng ma thuật hoàn toàn không có ma sát: dầu trôi đi vùn vụt với vận tốc ánh sáng mà đường ống vẫn lạnh ngắt như băng tuyết, không phát sinh dù chỉ một giọt nhiệt nhỏ nào.

**Grammar & collocations:** `deploy superconducting interconnect routing` — triển khai định tuyến liên kết siêu dẫn; `insertion loss in superconducting interconnect routing` — suy hao chèn trong định tuyến liên kết siêu dẫn; `high-density superconducting interconnect routing` — định tuyến liên kết siêu dẫn mật độ cao.

**Register & nuance:** `quantum packaging & cryogenic cabling` — yếu tố sống còn để thay thế các bó cáp bán cứng (semi-rigid coaxial cables) bằng các dải cáp mềm linh hoạt (flex cables); giảm thiểu tải nhiệt dẫn nhiệt từ tầng 4K xuống tầng mK trong khi duy trì độ suy hao cực thấp ở tần số 4-8 GHz.

**Examples:** `Replacing bulky copper coax with high-density superconducting interconnect routing enabled researchers to scale the control wiring to dozens of qubits without exceeding cryostat thermal budgets.` → Việc thay thế cáp đồng trục cồng kềnh bằng định tuyến liên kết siêu dẫn mật độ cao đã cho phép các nhà nghiên cứu mở rộng quy mô dây dẫn điều khiển tới hàng chục qubit mà không vượt quá ngân sách nhiệt của tủ làm lạnh.

**Liên kết tiếng Hàn:** `초전도 상호연결 라우팅` (超傳導 相互連結 routing) — thiết kế và định tuyến các đường truyền liên kết siêu dẫn không điện trở và không sinh nhiệt.

---

## 8. monolithic qubit controller integration /ˌmɑːnəˈlɪθɪk ˈkjuːbɪt kənˈtroʊlər ˌɪntəˈɡreɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là mục tiêu chế tạo hệ thống lượng tử tích hợp nguyên khối trên một phiến bán dẫn (ví dụ: `pursue monolithic qubit controller integration`).

**Core meaning — English:** The monolithic fabrication paradigm of fabricating both the quantum processing elements (such as silicon spin qubits) and their cryogenic CMOS control and readout electronics directly onto the exact same semiconductor substrate or via 3D wafer stacking.

**Core meaning & mental image — Tiếng Việt:** Tích hợp bộ điều khiển qubit nguyên khối; hãy hình dung việc bạn ghép não bộ chỉ huy và các ngón tay thao tác vào chung một cơ thể thống nhất: thay vì đặt bộ não ở cách xa hàng dặm rồi điều khiển ngón tay qua một mạng lưới dây điện thoại dài dằng dặc đầy trễ nải và nhiễu sóng, bạn đúc liền khối bộ não điều khiển điện tử và các ngón tay lượng tử trên cùng một mẩu vi mạch silic tí hon; tín hiệu truyền đi trong khoảng cách micromet với độ chính xác và tốc độ tối đa.

**Grammar & collocations:** `advance toward monolithic qubit controller integration` — tiến tới sự tích hợp bộ điều khiển qubit nguyên khối; `fabrication yields in monolithic qubit controller integration` — tỷ lệ sản lượng chế tạo trong tích hợp bộ điều khiển qubit nguyên khối; `monolithic qubit controller integration on 300mm silicon` — tích hợp bộ điều khiển qubit nguyên khối trên tấm wafer silic 300mm.

**Register & nuance:** `advanced quantum microelectronics (Intel, IMEC)` — hướng đi ưu việt của công nghệ qubit spin trên silic (silicon spin qubits) so với qubit siêu dẫn; tận dụng trọn vẹn dây chuyền sản xuất bán dẫn thương mại khổng lồ hiện có để tích hợp hàng tỷ bóng bán dẫn cùng hàng triệu qubit.

**Examples:** `Achieving monolithic qubit controller integration on a single silicon die dramatically curtailed interconnect parasitics and parasitic microwave crosstalk.` → Đạt được sự tích hợp bộ điều khiển qubit nguyên khối trên một phiến silic duy nhất đã cắt giảm ngoạn mục các thành phần ký sinh của liên kết và hiện tượng xuyên âm vi sóng ký sinh.

**Liên kết tiếng Hàn:** `단일 칩 큐비트 제어기 통합` (單一 chip qubit 制御器 統合) — sự tích hợp nguyên khối cả phần tử qubit lượng tử và vi mạch điều khiển CMOS trên cùng một phiến bán dẫn.

---

## 9. dilution refrigerator mixing chamber /daɪˈluːʃən rɪˈfrɪdʒəreɪtər ˈmɪksɪŋ ˈtʃeɪmbər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm vị trí vật lý lạnh nhất trong hệ thống làm lạnh lượng tử (ví dụ: `mount the quantum processor to the dilution refrigerator mixing chamber`).

**Core meaning — English:** The lowest temperature thermal stage of a $^3	ext{He}/^4	ext{He}$ dilution refrigerator (typically operating between 10 and 20 millikelvin), where phase separation and isotope dilution absorb thermal energy to maintain the quantum ground state.

**Core meaning & mental image — Tiếng Việt:** Buồng trộn tủ lạnh pha loãng; hãy hình dung trái tim băng giá nhất của một cỗ máy thời gian: bên trong chiếc buồng trộn nhỏ bé bằng đồng mạ vàng này, hai dòng đồng vị heli-3 và heli-4 hòa trộn vào nhau; hiện tượng vật lý lượng tử kỳ diệu của sự pha loãng hút cạn mọi rung động nhiệt cuối cùng của các nguyên tử, tạo ra một không gian lạnh hơn cả khoảng không sâu thẳm của vũ trụ (chỉ cách độ không tuyệt đối 0.01 độ); đây là chiếc tổ an toàn nhất để các qubit siêu dẫn an giấc và phô diễn sức mạnh lượng tử.

**Grammar & collocations:** `thermally anchor to the dilution refrigerator mixing chamber` — neo nhiệt vào buồng trộn tủ lạnh pha loãng; `cooling power of the dilution refrigerator mixing chamber` — công suất làm lạnh của buồng trộn tủ lạnh pha loãng; `base temperature of the dilution refrigerator mixing chamber` — nhiệt độ nền của buồng trộn tủ lạnh pha loãng.

**Register & nuance:** `cryogenics & experimental quantum physics` — tầng nhiệt cuối cùng và nhạy cảm nhất của tháp làm lạnh (cryostat); có khả năng tải nhiệt cực thấp (chỉ khoảng 10-20 $\mu	ext{W}$ tại 100 mK); mọi kết nối vào buồng trộn đều phải được lọc và triệt tiêu bức xạ nhiệt bức xạ từ các tầng nhiệt cao hơn.

**Examples:** `The superconducting transmon chip is mechanically bolted and gold-plated directly to the dilution refrigerator mixing chamber to ensure reliable thermalization at 15 millikelvin.` → Chip transmon siêu dẫn được bắt vít cơ học và mạ vàng trực tiếp vào buồng trộn tủ lạnh pha loãng để bảo đảm sự cân bằng nhiệt đáng tin cậy ở 15 millikelvin.

**Liên kết tiếng Hàn:** `희석 냉동기 혼합실` (稀釋 冷凍機 混合室) — buồng trộn của tủ lạnh pha loãng He3/He4 đạt nhiệt độ nền millikelvin lạnh nhất.

---

## 10. dispersive qubit readout /dɪˈspɜːrsɪv ˈkjuːbɪt ˈriːdaʊt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là kỹ thuật đọc trạng thái lượng tử gián tiếp không phá hủy (ví dụ: `perform dispersive qubit readout`).

**Core meaning — English:** A non-destructive quantum measurement technique where a qubit is coupled off-resonantly (dispersively) to a superconducting resonator, shifting the resonator’s resonant frequency by an amount dependent on whether the qubit is in its ground ($|0
angle$) or excited ($|1
angle$) state.

**Core meaning & mental image — Tiếng Việt:** Đọc trạng thái qubit theo cơ chế tán sắc; hãy hình dung bạn muốn kiểm tra xem trong một căn phòng kín người ta có đang rung một quả chuông hay không mà không được mở cửa bước vào (tránh làm vỡ trạng thái lượng tử): bạn áp tai vào một chiếc ống sáo nối thông với căn phòng và thổi một nốt nhạc vi sóng thử nghiệm; nếu quả chuông trong phòng đang ở trạng thái kích hoạt, cao độ nốt sáo phát ra sẽ bị lệch tông đi một chút (dịch chuyển tần số cộng hưởng); bằng cách lắng nghe sự đổi tông đó, bạn biết chính xác trạng thái của quả chuông mà căn phòng vẫn hoàn toàn yên tĩnh.

**Grammar & collocations:** `execute dispersive qubit readout` — thực thi việc đọc trạng thái qubit tán sắc; `dispersive qubit readout shift` — độ dịch chuyển tần số trong đọc qubit tán sắc; `high-fidelity dispersive qubit readout` — đọc trạng thái qubit tán sắc độ trung thực cao.

**Register & nuance:** `circuit quantum electrodynamics (cQED)` — kỹ thuật đọc trạng thái tiêu chuẩn vàng cho qubit siêu dẫn; hoạt động trong chế độ tách rời tần số (detuned regime, $|\Delta| = |\omega_q - \omega_r| \gg g$), ngăn chặn việc qubit trao đổi trực tiếp photon với bộ cộng hưởng và do đó bảo toàn tính kết hợp của qubit.

**Examples:** `Dispersive qubit readout detects state transitions by probing the phase shift of a transmitted microwave tone passing through the detuned coupled resonator.` → Kỹ thuật đọc trạng thái qubit theo cơ chế tán sắc phát hiện các chuyển dịch trạng thái bằng cách dò tìm độ lệch pha của một âm sắc vi sóng truyền qua bộ cộng hưởng ghép đôi bị lệch tần.

**Liên kết tiếng Hàn:** `분산형 큐비트 판독` (分散型 qubit 判讀) — kỹ thuật đọc trạng thái qubit gián tiếp thông qua sự dịch chuyển tần số cộng hưởng tán sắc trong cQED.

---

## 11. qubit state discrimination /ˈkjuːbɪt steɪt dɪˌskrɪmɪˈneɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm thuật toán phân loại tín hiệu vi sóng thành bit cổ điển (ví dụ: `improve qubit state discrimination`).

**Core meaning — English:** The signal processing and classification process of analyzing digitized microwave I/Q voltage trajectories to categorize a noisy measurement trace into a discrete computational basis state ($|0
angle$ or $|1
angle$) with maximum fidelity.

**Core meaning & mental image — Tiếng Việt:** Phân biệt trạng thái qubit / phân loại trạng thái qubit; hãy hình dung một màn hình radar lốm đốm các vệt sáng mờ nhạt do nhiễu sóng: người hoa tiêu sử dụng một thuật toán máy học thông minh để phân tích tọa độ hai đám mây chấm sáng trên mặt phẳng tọa độ (mặt phẳng I/Q); nếu cụm tín hiệu rơi vào đám mây bên trái, hệ thống khẳng định đó là trạng thái 0; nếu rơi vào đám mây bên phải, đó là trạng thái 1; việc phân định dứt khoát này chuyển đổi tín hiệu lượng tử mờ ảo thành thông tin số 0 và 1 chắc chắn.

**Grammar & collocations:** `achieve high-fidelity qubit state discrimination` — đạt được sự phân biệt trạng thái qubit độ trung thực cao; `machine learning for qubit state discrimination` — máy học cho phân biệt trạng thái qubit; `error threshold in qubit state discrimination` — ngưỡng lỗi trong phân biệt trạng thái qubit.

**Register & nuance:** `quantum measurement theory & digital signal processing` — độ chính xác của bước phân biệt này (readout fidelity) thường bị giới hạn bởi tỷ số tín hiệu trên nhiễu (SNR) và thời gian sống $T_1$ của qubit; nếu thuật toán đọc quá chậm, qubit có thể tự suy giảm từ $|1
angle$ về $|0
angle$ trước khi phép đo kết thúc.

**Examples:** `Utilizing neural network classifiers on FPGA hardware boosted single-shot qubit state discrimination fidelity above 99.5 percent in under three hundred nanoseconds.` → Việc sử dụng các bộ phân loại mạng nơ-ron trên phần cứng FPGA đã nâng độ trung thực phân biệt trạng thái qubit chụp đơn phát lên trên 99.5 phần trăm trong thời gian dưới ba trăm nano giây.

**Liên kết tiếng Hàn:** `큐비트 상태 판별 / 구별` (qubit 狀態 判別 / 區別) — quá trình xử lý tín hiệu phân định chính xác trạng thái lượng tử cơ bản 0 hoặc 1.

---

## 12. quantum non-demolition measurement /ˈkwɑːntəm nɑːn ˌdɛməˈlɪʃən ˈmɛʒərmənt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `QND measurement`). Đóng vai trò là phương pháp đo lường bảo toàn trạng thái lượng tử sau phép đo (ví dụ: `constitute a quantum non-demolition measurement`).

**Core meaning — English:** A specialized quantum measurement process where the measurement apparatus couples to an observable (such as qubit energy eigenstate) that commutes with the system Hamiltonian, collapsing the wavefunction onto an eigenstate without subsequently perturbing or destroying it.

**Core meaning & mental image — Tiếng Việt:** Phép đo lượng tử không phá hủy; hãy hình dung bạn cân một quả trứng gà mỏng manh: thay vì dùng một chiếc búa đập vỡ quả trứng để xem bên trong có lòng đỏ hay không (phép đo phá hủy truyền thống), bạn sử dụng một chùm tia X cực êm xuyên qua; sau khi đo xong, bạn biết chắc chắn quả trứng nặng bao nhiêu gram mà vỏ trứng vẫn nguyên vẹn 100%, sẵn sàng để bạn ấp nở tiếp thành một chú gà con; trạng thái lượng tử sau khi đo vẫn được bảo toàn nguyên vẹn.

**Grammar & collocations:** `satisfy the criteria for quantum non-demolition measurement` — thỏa mãn các tiêu chí của phép đo lượng tử không phá hủy; `fidelity of quantum non-demolition measurement` — độ trung thực của phép đo lượng tử không phá hủy; `implement repeated quantum non-demolition measurements` — thực hiện các phép đo lượng tử không phá hủy lặp lại.

**Register & nuance:** `quantum foundations & quantum error correction (QEC)` — điều kiện tiên quyết bắt buộc để thực hiện sửa lỗi lượng tử (quantum error correction); cho phép đọc đi đọc lại các qubit hội chứng (syndrome qubits) nhiều lần liên tiếp để phát hiện lỗi mà không làm phá hỏng thông tin lượng tử lưu trữ trong hệ thống.

**Examples:** `Dispersive cQED readout realizes a quantum non-demolition measurement, leaving the qubit projected into its $|0
angle$ or $|1
angle$ state available for subsequent gate operations.` → Phép đọc cQED tán sắc thực hiện một phép đo lượng tử không phá hủy, để lại qubit được chiếu vào trạng thái $|0
angle$ hoặc $|1
angle$ sẵn sàng cho các thao tác cổng tiếp theo.

**Liên kết tiếng Hàn:** `양자 비파괴 측정` (量子 非破壞 測定) — phép đo lượng tử chuẩn xác không làm phá hủy trạng thái riêng của hệ thống sau phép đo.

---

## 13. cryogenic low-noise amplifier /ˌkraɪəˈdʒɛnɪk loʊ nɔɪz ˈæmpləfaɪər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `cryo-LNA`). Thường làm tầng khuếch đại vi sóng trung gian ở nhiệt độ 4 Kelvin (ví dụ: `deploy a cryogenic low-noise amplifier`).

**Core meaning — English:** A solid-state microwave amplifier engineered using high-electron-mobility transistors (HEMTs) or Cryo-CMOS circuitry located at intermediate cryogenic stages (typically 4 Kelvin) to provide substantial signal gain with minimal thermal noise contribution.

**Core meaning & mental image — Tiếng Việt:** Bộ khuếch đại tạp âm thấp siêu lạnh; hãy hình dung một chiếc loa phóng thanh đặt tại một trạm tiếp sức giữa rừng tuyết: sau khi nhận được tiếng thì thầm cực yếu từ chiếc buồng trộn mK bên dưới, chiếc loa phóng thanh này khuếch đại âm thanh to lên hàng chục ngàn lần để truyền tiếp lên trạm kiểm soát trên mặt đất; chiếc loa được thiết kế bằng vật liệu đặc biệt để không phát ra tiếng rè hay tạp âm gió rít của mùa đông, giữ cho âm thanh trong vắt khi truyền lên nhiệt độ phòng.

**Grammar & collocations:** `integrate a cryogenic low-noise amplifier` — tích hợp một bộ khuếch đại tạp âm thấp siêu lạnh; `noise temperature of a cryogenic low-noise amplifier` — nhiệt độ tạp âm của bộ khuếch đại tạp âm thấp siêu lạnh; `power consumption of a cryogenic low-noise amplifier` — mức tiêu thụ điện năng của bộ khuếch đại tạp âm thấp siêu lạnh.

**Register & nuance:** `microwave engineering for quantum interfaces` — đóng vai trò là tầng khuếch đại thứ hai sau bộ khuếch đại tham số Josephson; thường có nhiệt độ tạp âm khoảng 1-2 Kelvin tại tần số 4-8 GHz và công suất tiêu thụ vài milliwatt, phù hợp lý tưởng với công suất làm lạnh của tầng 4K trong cryostat.

**Examples:** `Mounted directly at the 4-Kelvin plate, the cryogenic low-noise amplifier delivers thirty decibels of microwave gain while adding less than two Kelvin of noise temperature.` → Được gắn trực tiếp tại tấm 4-Kelvin, bộ khuếch đại tạp âm thấp siêu lạnh cung cấp ba mươi decibel độ lợi vi sóng trong khi chỉ thêm vào chưa đầy hai Kelvin nhiệt độ tạp âm.

**Liên kết tiếng Hàn:** `극저온 저잡음 증폭기` (極低溫 低雜音 增幅器) — bộ khuếch đại tín hiệu vi sóng tạp âm thấp hoạt động tại tầng nhiệt 4K của hệ thống làm lạnh.

---

## 14. cryogenic high-electron-mobility transistor /ˌkraɪəˈdʒɛnɪk haɪ ɪˌlɛkˈtrɑːn moʊˈbɪləti trænˈzɪstər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `cryo-HEMT`). Đóng vai trò là linh kiện bán dẫn dị cấu trúc siêu tốc độ (ví dụ: `fabricate a cryogenic high-electron-mobility transistor`).

**Core meaning — English:** A heterostructure field-effect transistor (typically based on InP or GaAs) designed to operate at liquid helium temperatures, exploiting a two-dimensional electron gas (2DEG) with ultra-high electron mobility to achieve high cut-off frequencies and ultra-low noise figures.

**Core meaning & mental image — Tiếng Việt:** Transistor độ linh động electron cao siêu lạnh; hãy hình dung một đường cao tốc băng trơn láng dành riêng cho xe đua thể thức 1: các electron không phải chen chúc trong các làn đường gồ ghề đầy chướng ngại vật nguyên tử pha tạp mà được tách riêng vào một lớp màng 2D siêu mịn (khí electron hai chiều); ở nhiệt độ siêu lạnh, mặt đường băng càng trở nên bóng loáng, cho phép các electron lướt đi với tốc độ xé gió mà không bị va đập, tạo nên khả năng khuếch đại tín hiệu tần số hàng chục gigahertz với độ ồn thấp kỷ lục.

**Grammar & collocations:** `characterize a cryogenic high-electron-mobility transistor` — đặc tính hóa một transistor độ linh động electron cao siêu lạnh; `transconductance of a cryogenic high-electron-mobility transistor` — độ hỗ dẫn của transistor độ linh động electron cao siêu lạnh; `cryogenic high-electron-mobility transistor preamplifier` — bộ tiền khuếch đại dùng transistor độ linh động electron cao siêu lạnh.

**Register & nuance:** `compound semiconductor devices (GaAs/InP)` — công nghệ thống trị tuyệt đối trong các bộ khuếch đại LNA siêu lạnh suốt nhiều thập kỷ qua; tuy nhiên đang bị thách thức bởi Cryo-CMOS do HEMT khó tích hợp mật độ cao trên cùng một chip silicon với mạch kỹ thuật số.

**Examples:** `The discrete cryogenic high-electron-mobility transistor demonstrated record cut-off frequencies above one hundred gigahertz when cooled to 4 Kelvin.` → Linh kiện rời transistor độ linh động electron cao siêu lạnh đã thể hiện các tần số cắt kỷ lục trên một trăm gigahertz khi được làm lạnh xuống 4 Kelvin.

**Liên kết tiếng Hàn:** `극저온 고전자 이동도 트랜지스터` (極低溫 高電子 移動度 transistor) — transistor dị cấu trúc HEMT hoạt động ở nhiệt độ siêu lạnh với độ linh động electron cực cao.

---

## 15. thermal anchoring attenuation /ˈθɜːrməl ˈæŋkərɪŋ əˌtɛnjuˈeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm kỹ thuật làm suy hao tín hiệu kết hợp chặn nhiệt bức xạ dọc theo đường cáp (ví dụ: `implement thermal anchoring attenuation`).

**Core meaning — English:** The cryogenic engineering practice of installing gold-plated microwave attenuators securely anchored to intermediate cold plates (50K, 4K, 100mK) to both attenuate high-temperature thermal Johnson noise photons and conduct heat away from cable inner conductors.

**Core meaning & mental image — Tiếng Việt:** Sự suy hao và neo nhiệt; hãy hình dung một đường dây điện chạy từ một lò lửa nóng rực (nhiệt độ phòng 300K) xuống một hầm băng tuyết: nếu để dây dẫn chạy thẳng, nhiệt nóng và các tia lửa điện nhiệt sẽ chảy ồ ạt xuống làm tan chảy hầm băng; kỹ thuật neo nhiệt suy hao giống như việc đặt các trạm kẹp bằng đồng mạ vàng tản nhiệt ở từng nấc thang: mỗi trạm vừa hấp thụ và xả nhiệt thừa vào các vách làm lạnh trung gian, vừa đặt các màng lọc suy hao để triệt tiêu các photon nhiệt ồn ào, bảo đảm khi tín hiệu chạm đáy hầm băng thì đường dây đã lạnh ngắt và hoàn toàn tĩnh lặng.

**Grammar & collocations:** `provide thermal anchoring attenuation` — cung cấp sự suy hao và neo nhiệt; `thermal anchoring attenuation budget` — ngân sách suy hao và neo nhiệt; `stages of thermal anchoring attenuation` — các tầng của sự suy hao và neo nhiệt.

**Register & nuance:** `cryostat microwave line engineering` — một đường truyền điều khiển vi sóng thông thường đòi hỏi tổng độ suy hao từ 50 đến 60 dB phân bổ qua các tầng (ví dụ: 20dB tại 4K, 10dB tại 100mK, 30dB tại mixing chamber) để triệt tiêu hoàn toàn các photon nhiệt 300K có thể kích thích qubit ngoài ý muốn.

**Examples:** `Each input coaxial line incorporates fifty decibels of distributed thermal anchoring attenuation across the cryostat plates to suppress thermal noise excitation of the qubit.` → Mỗi đường cáp đồng trục đầu vào kết hợp năm mươi decibel suy hao và neo nhiệt phân bố qua các tấm làm lạnh của cryostat để triệt tiêu sự kích thích qubit do nhiễu nhiệt.

**Liên kết tiếng Hàn:** `열 앵커링 감쇠` (熱 anchoring 減衰) — kỹ thuật vừa làm suy hao photon nhiệt vừa cố định truyền nhiệt cơ học tại các tấm làm lạnh trung gian.

---

## 16. superconducting coplanar waveguide resonator /ˌsuːpərkənˈdʌktɪŋ koʊˈpleɪnər ˈweɪvɡaɪd ˈrɛzəneɪtər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `CPW resonator`). Đóng vai trò là linh kiện cộng hưởng vi sóng trên chip ghép nối qubit (ví dụ: `fabricate a superconducting coplanar waveguide resonator`).

**Core meaning — English:** A planar microwave transmission line structure consisting of a center conducting strip separated by narrow dielectric gaps from flanking ground planes, fabricated from superconducting thin films (such as niobium or aluminum) to achieve ultra-high quality factors ($Q > 10^6$) for qubit readout and coupling.

**Core meaning & mental image — Tiếng Việt:** Bộ cộng hưởng ống dẫn sóng đồng phẳng siêu dẫn; hãy hình dung một chiếc âm thoa vi mô bằng kim loại niobi được khắc tinh xảo trên bề mặt một tấm kính sapphire: khi một xung sóng vi sóng truyền qua, dải kim loại trung tâm bắt đầu rung lên với một tần số duy nhất cực kỳ chuẩn xác; nhờ trạng thái siêu dẫn không điện trở, chiếc âm thoa này có thể ngân vang hàng triệu lần mà năng lượng sóng không hề bị suy giảm; âm thanh ngân vang của chiếc âm thoa mang theo toàn bộ bí mật về trạng thái lượng tử của qubit được gắn bên cạnh nó.

**Grammar & collocations:** `pattern a superconducting coplanar waveguide resonator` — khắc hoa văn một bộ cộng hưởng ống dẫn sóng đồng phẳng siêu dẫn; `internal quality factor of a superconducting coplanar waveguide resonator` — hệ số phẩm chất nội tại của bộ cộng hưởng CPW siêu dẫn; `couple qubits to a superconducting coplanar waveguide resonator` — ghép nối qubit với một bộ cộng hưởng CPW siêu dẫn.

**Register & nuance:** `circuit QED & quantum integrated circuits` — linh kiện cơ bản tạo nên kiến trúc điện động lực học lượng tử mạch (cQED); đóng vai trò vừa là "xe buýt lượng tử" (quantum bus) để truyền thông tin giữa các qubit, vừa là cảm biến đọc trạng thái qubit gián tiếp.

**Examples:** `The superconducting coplanar waveguide resonator achieved an internal quality factor exceeding two million, enabling prolonged photon storage times for non-destructive readout.` → Bộ cộng hưởng ống dẫn sóng đồng phẳng siêu dẫn đã đạt được hệ số phẩm chất nội tại vượt quá hai triệu, cho phép kéo dài thời gian lưu trữ photon cho việc đọc không phá hủy.

**Liên kết tiếng Hàn:** `초전도 동일 평면 도파관 공진기` (超傳導 同一 平面 導波管 共振器) — bộ cộng hưởng vi sóng siêu dẫn đồng phẳng đạt hệ số phẩm chất cực cao trên chip lượng tử.

---

## 17. Johnson-Nyquist thermal noise limit /ˈdʒɑːnsən ˈnaɪkwɪst ˈθɜːrməl nɔɪz ˈlɪmɪt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm giới hạn vật lý cơ bản về công suất tạp âm nhiệt (ví dụ: `approach the Johnson-Nyquist thermal noise limit`).

**Core meaning — English:** The fundamental lower bound on electronic noise power ($P = k_B T \Delta f$) generated by the thermal agitation of charge carriers inside an electrical conductor at equilibrium, which decreases linearly with absolute temperature $T$ toward absolute zero.

**Core meaning & mental image — Tiếng Việt:** Giới hạn tạp âm nhiệt Johnson-Nyquist; hãy hình dung sự náo động của đám đông tại một hội chợ: ở nhiệt độ phòng (300K), đám đông chen lấn xô đẩy nhau hỗn loạn tạo ra một tiếng ồn ào gầm rú đinh tai nhức óc (tạp âm nhiệt che lấp các tín hiệu yếu); nhưng khi làm lạnh hội chợ xuống gần 0 Kelvin, đám đông hoàn toàn nín lặng và đứng im phăng phắc; tiếng ồn nhiệt biến mất gần như hoàn toàn, cho phép bạn nghe thấy rõ mùng một ngay cả tiếng thở nhẹ nhất của một hạt photon lượng tử đơn lẻ.

**Grammar & collocations:** `reach the Johnson-Nyquist thermal noise limit` — đạt tới giới hạn tạp âm nhiệt Johnson-Nyquist; `calculate the Johnson-Nyquist thermal noise limit` — tính toán giới hạn tạp âm nhiệt Johnson-Nyquist; `suppress fluctuations below the Johnson-Nyquist thermal noise limit` — triệt tiêu các thăng giáng xuống dưới giới hạn tạp âm nhiệt Johnson-Nyquist.

**Register & nuance:** `classical statistical mechanics & noise theory` — ở nhiệt độ siêu lạnh và tần số vi sóng cao ($h
u \gg k_B T$), tạp âm nhiệt Johnson-Nyquist cổ điển nhường chỗ cho thăng giáng chân không lượng tử (quantum vacuum fluctuations) theo định lý tán xạ - thăng giáng của Callen-Welton.

**Examples:** `By cooling the front-end amplifier stage to 4 Kelvin, engineers reduced the Johnson-Nyquist thermal noise limit by nearly two orders of magnitude compared to room temperature.` → Bằng cách làm lạnh tầng khuếch đại đầu vào xuống 4 Kelvin, các kỹ sư đã giảm giới hạn tạp âm nhiệt Johnson-Nyquist đi gần hai bậc độ lớn so với ở nhiệt độ phòng.

**Liên kết tiếng Hàn:** `존슨-나이퀴스트 열잡음 한계` (Johnson-Nyquist 熱雜音 限界) — giới hạn vật lý cơ bản của công suất tạp âm nhiệt sinh ra do sự thăng giáng nhiệt của hạt mang điện.

---

## 18. in-phase and quadrature demodulation /ɪn feɪz ənd ˈkwɑːdrətʃər diːˌmɑːdʒəˈleɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `IQ demodulation`). Đóng vai trò là phương pháp giải điều chế trích xuất biên độ và pha vi sóng (ví dụ: `implement in-phase and quadrature demodulation`).

**Core meaning — English:** The signal processing architecture that mixes an incoming high-frequency microwave readout signal with two local oscillator carrier tones shifted in phase by 90 degrees, decomposing the measurement pulse into independent in-phase ($I$) and quadrature ($Q$) baseband components.

**Core meaning & mental image — Tiếng Việt:** Giải điều chế đồng pha và vuông pha (giải điều chế IQ); hãy hình dung bạn theo dõi bóng của một người đang đu quay trên mặt đất: nếu chỉ nhìn bóng từ một hướng duy nhất (trục I), bạn không thể phân biệt được người đó đang đu lên phía trước hay đang lùi về phía sau; giải điều chế IQ giống như việc bạn đặt hai chiếc máy quay vuông góc 90 độ với nhau (một máy nhìn thẳng - đồng pha, một máy nhìn ngang - vuông pha): sự kết hợp của hai góc quay cho phép bạn tái dựng chính xác 100% quỹ đạo xoay tròn của người đu quay trên một mặt phẳng tọa độ 2D.

**Grammar & collocations:** `perform in-phase and quadrature demodulation` — thực hiện giải điều chế đồng pha và vuông pha; `in-phase and quadrature demodulation plane` — mặt phẳng giải điều chế đồng pha và vuông pha; `imbalances in in-phase and quadrature demodulation` — sự mất cân bằng trong giải điều chế đồng pha và vuông pha.

**Register & nuance:** `RF communication & quantum readout electronics` — kỹ thuật cốt lõi trong hệ thống FPGA xử lý tín hiệu lượng tử; hai thành phần $I$ và $Q$ biểu diễn trực tiếp biên độ và độ dịch pha của sóng vi sóng sau khi tương tác với qubit tán sắc.

**Examples:** `The digitized microwave pulse undergoes in-phase and quadrature demodulation, projecting the readout signal onto the IQ plane to yield single-shot state classifications.` → Xung vi sóng được số hóa trải qua quá trình giải điều chế đồng pha và vuông pha, chiếu tín hiệu đọc lên mặt phẳng IQ để mang lại các phân loại trạng thái chụp đơn phát.

**Liên kết tiếng Hàn:** `동위상 및 직교 복조` (同位相 및 直交 復調 - IQ demodulation) — kỹ thuật giải điều chế vi sóng tách tín hiệu thành hai thành phần đồng pha và lệch pha 90 độ.

---

## 19. parasitic heat load dissipation /ˌpærəˈsɪtɪk hiːt loʊd ˌdɪsəˈpeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tổng lượng nhiệt rò rỉ ngoài ý muốn xâm nhập vào buồng lạnh (ví dụ: `counteract parasitic heat load dissipation`).

**Core meaning — English:** The unwanted thermal power conducted or radiated into sub-Kelvin cryostat stages from wiring, structural supports, and active electronics, which threatens to overwhelm the refrigerator's fractional-microwatt cooling capacity.

**Core meaning & mental image — Tiếng Việt:** Sự tiêu tán tải nhiệt ký sinh; hãy hình dung một chiếc tàu ngầm thám hiểm rãnh đại dương sâu thẳm: bên ngoài là áp lực nước khổng lồ và dòng nước lạnh giá, bên trong là môi trường sống ấm áp; nhưng dọc theo các đường ống thông khí và dây cáp liên lạc, nước và hơi lạnh liên tục rỉ vào qua các kẽ hở (tải ký sinh); nếu máy bơm không kịp hút lượng nước rò rỉ này ra ngoài, con tàu sẽ bị chìm; tải nhiệt ký sinh là kẻ thù thầm lặng đe dọa làm sập toàn bộ hệ thống làm lạnh lượng tử.

**Grammar & collocations:** `mitigate parasitic heat load dissipation` — giảm thiểu sự tiêu tán tải nhiệt ký sinh; `sources of parasitic heat load dissipation` — các nguồn tiêu tán tải nhiệt ký sinh; `budget for parasitic heat load dissipation` — ngân sách cho sự tiêu tán tải nhiệt ký sinh.

**Register & nuance:** `thermal management in ultra-low temperature physics` — bao gồm ba nguồn chính: dẫn nhiệt cơ học qua thanh chống và cáp (conductive load), bức xạ nhiệt từ các tầng nhiệt cao hơn (radiative load), và công suất tiêu tán điện trở Joule của tín hiệu điều khiển (dissipative load).

**Examples:** `Engineers shielded the mixing chamber with nested gold-plated copper radiation shields to minimize parasitic heat load dissipation from the warmer 4-Kelvin stage.` → Các kỹ sư đã che chắn buồng trộn bằng các tấm chắn bức xạ bằng đồng mạ vàng lồng vào nhau để giảm thiểu sự tiêu tán tải nhiệt ký sinh từ tầng 4-Kelvin ấm hơn.

**Liên kết tiếng Hàn:** `기생 열 부하 소산` (寄生 熱 負荷 消散) — sự tiêu tán và xâm nhập của tải nhiệt ký sinh ngoài ý muốn vào các tầng làm lạnh siêu hàn.

---

## 20. phonon-mediated thermal bottleneck /ˈfoʊnɑːn ˈmiːdieɪtɪd ˈθɜːrməl ˈbɑːtlnek/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là trở ngại vật lý truyền nhiệt qua mạng tinh thể ở nhiệt độ thấp (ví dụ: `encounter a phonon-mediated thermal bottleneck`).

**Core meaning — English:** A severe heat transport limitation occurring below 1 Kelvin where thermal conductivity is governed exclusively by acoustic phonons whose mean free path exceeds sample dimensions, while thermal boundary resistance (Kapitza resistance) drastically inhibits heat transfer across material interfaces.

**Core meaning & mental image — Tiếng Việt:** Nút thắt cổ chai nhiệt truyền bởi phonon; hãy hình dung nhiệt độ như những đợt sóng âm thanh (phonon) lan truyền qua một mạng lưới dây cung: ở nhiệt độ bình thường, các đợt sóng va đập vào nhau liên tục và truyền nhiệt rất nhanh; nhưng khi ở nhiệt độ cận độ không tuyệt đối, số lượng đợt sóng giảm đi và bước sóng trở nên quá dài; khi sóng âm chạm vào ranh giới giữa hai lớp kim loại khác nhau, chúng bị dội ngược lại hoàn toàn như thể gặp một bức tường bê tông (trở kháng Kapitza); kết quả là nhiệt độ bị mắc kẹt lại trên chip mà không thể thoát ra giá lạnh bên ngoài.

**Grammar & collocations:** `overcome the phonon-mediated thermal bottleneck` — vượt qua nút thắt cổ chai nhiệt truyền bởi phonon; `severity of the phonon-mediated thermal bottleneck` — mức độ nghiêm trọng của nút thắt cổ chai nhiệt truyền bởi phonon; `Kapitza resistance driving the phonon-mediated thermal bottleneck` — điện trở Kapitza thúc đẩy nút thắt cổ chai nhiệt do phonon.

**Register & nuance:** `low-temperature condensed matter physics` — theo định luật $T^3$ của Debye, nhiệt dung và độ dẫn nhiệt của chất rắn sụt giảm thảm hại ở nhiệt độ mK; khiến cho việc làm mát các điểm nóng cục bộ (hot spots) trên chip silicon trở nên cực kỳ khó khăn ngay cả khi buồng lạnh xung quanh rất lạnh.

**Examples:** `At 20 millikelvin, the Kapitza resistance between the silicon chip and copper mount creates a phonon-mediated thermal bottleneck, decoupling the electron temperature from the cryostat base.` → Ở 20 millikelvin, điện trở Kapitza giữa chip silic và giá đỡ bằng đồng tạo ra một nút thắt cổ chai nhiệt truyền bởi phonon, làm tách rời nhiệt độ của electron khỏi nhiệt độ nền của cryostat.

**Liên kết tiếng Hàn:** `포논 매개 열 병목 현상` (phonon 媒介 熱 甁頸 現象) — hiện tượng nghẽn truyền nhiệt do phonon và điện trở biên giới Kapitza ở nhiệt độ millikelvin.

---

## 21. quantum-limited noise figure /ˈkwɑːntəm ˈlɪmɪtɪd nɔɪz ˈfɪɡjər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tiêu chuẩn phẩm chất lý tưởng của bộ khuếch đại lượng tử (ví dụ: `operate at a quantum-limited noise figure`).

**Core meaning — English:** The theoretical optimum noise factor of a phase-preserving linear amplifier, restricted by the Heisenberg uncertainty relation to add no less than half a quantum of noise power ($k_B T_{	ext{sys}} = rac{1}{2}\hbar\omega$) to the amplified signal.

**Core meaning & mental image — Tiếng Việt:** Chỉ số tạp âm tiệm cận giới hạn lượng tử; hãy hình dung một chiếc kính lúp hoàn mỹ nhất trong vũ trụ: theo quy luật cơ học lượng tử của ngài Heisenberg, bạn không bao giờ có thể phóng to một hình ảnh siêu nhỏ mà không làm mờ nhẹ một phần của nó do bản chất hạt-sóng của ánh sáng; chiếc kính lúp đạt chỉ số tạp âm tiệm cận giới hạn lượng tử là chiếc kính lúp tuyệt đỉnh nhất có thể tồn tại theo định luật vật lý: nó chỉ làm mờ đúng nửa hạt photon lượng tử tối thiểu mà tạo hóa bắt buộc phải có, không làm nhòe thêm bất kỳ một hạt bụi thừa thãi nào.

**Grammar & collocations:** `achieve a quantum-limited noise figure` — đạt được chỉ số tạp âm tiệm cận giới hạn lượng tử; `approach the quantum-limited noise figure` — tiệm cận chỉ số tạp âm giới hạn lượng tử; `linear amplifiers exhibiting a quantum-limited noise figure` — các bộ khuếch đại tuyến tính thể hiện chỉ số tạp âm giới hạn lượng tử.

**Register & nuance:** `Caves theorem (Carlton Caves, 1982) & quantum measurement` — nguyên lý nền tảng chứng minh rằng một bộ khuếch đại bảo toàn pha (phase-preserving amplifier) bắt buộc phải cộng thêm ít nhất $rac{1}{2}\hbar\omega$ tạp âm; chỉ có bộ khuếch đại nhạy pha (phase-sensitive amplifier) mới có thể triệt tiêu tạp âm trên một cầu phương nhưng phải chấp nhận tăng tạp âm trên cầu phương vuông góc.

**Examples:** `Operating near the quantum-limited noise figure, the traveling-wave parametric amplifier resolved single-shot microwave readouts without distorting quantum superposition states.` → Hoạt động gần chỉ số tạp âm tiệm cận giới hạn lượng tử, bộ khuếch đại tham số sóng chạy đã giải quyết các phép đọc vi sóng đơn phát mà không làm biến dạng các trạng thái chồng chập lượng tử.

**Liên kết tiếng Hàn:** `양자 한계 잡음 지수` (量子 限界 雜音 指數) — chỉ số tạp âm tối ưu tiệm cận giới hạn lượng tử cơ bản của định lý Caves.

---

## 22. cryogenic bandgap reference voltage /ˌkraɪəˈdʒɛnɪk ˈbændɡæp ˈrɛfərəns ˈvoʊltɪdʒ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là điện áp tham chiếu chuẩn xác ổn định nhiệt bên trong vi mạch Cryo-CMOS (ví dụ: `generate a stable cryogenic bandgap reference voltage`).

**Core meaning — English:** A specialized on-chip analog voltage generation circuit engineered to deliver a temperature-independent, ultra-stable DC reference potential across thermal swings from 300 Kelvin down to 4 Kelvin, overcoming carrier freeze-out and extreme BJT saturation.

**Core meaning & mental image — Tiếng Việt:** Điện áp tham chiếu vùng cấm siêu lạnh; hãy hình dung một chiếc thước đo chuẩn mực bằng thép được cất giữ trong viện đo lường quốc tế: bất kể mùa hè nóng nực 40 độ hay mùa đông bắc cực âm 50 độ, chiếc thước đo đó tuyệt đối không được co lại hay giãn ra dù chỉ một nanomet; mạch điện áp tham chiếu vùng cấm siêu lạnh chính là chiếc thước đo điện áp chuẩn xác tuyệt đối đó trên chip, luôn cung cấp đúng 1.2 volt ổn định vững chắc để các bộ chuyển đổi tương tự-số (ADC/DAC) lượng tử căn chỉnh mà không bị trôi lệch theo nhiệt độ.

**Grammar & collocations:** `design a cryogenic bandgap reference voltage circuit` — thiết kế mạch điện áp tham chiếu vùng cấm siêu lạnh; `stability of cryogenic bandgap reference voltage` — độ ổn định của điện áp tham chiếu vùng cấm siêu lạnh; `sub-1V cryogenic bandgap reference voltage` — điện áp tham chiếu vùng cấm siêu lạnh dưới 1V.

**Register & nuance:** `cryogenic analog integrated circuit design` — các mạch bandgap truyền thống dựa trên transistor lưỡng cực (BJT) sẽ bị sập hoàn toàn ở 4K do hệ số khuếch đại dòng $eta$ biến mất; do đó các mạch bandgap siêu lạnh hiện đại phải sử dụng transistor MOSFET hoạt động ở vùng dưới ngưỡng (subthreshold MOSFETs) hoặc diode silic đặc biệt.

**Examples:** `The Cryo-CMOS bias generator relies on a calibrated cryogenic bandgap reference voltage to supply ultra-low-drift gate voltages to spin qubit barrier gates.` → Bộ tạo phân cực Cryo-CMOS dựa vào một điện áp tham chiếu vùng cấm siêu lạnh đã được hiệu chuẩn để cung cấp các điện áp cổng có độ trôi cực thấp cho các cổng rào cản qubit spin.

**Liên kết tiếng Hàn:** `극저온 밴드갭 기준 전압` (極低溫 bandgap 基準 電壓) — điện áp tham chiếu chuẩn vùng cấm ổn định hoạt động xuyên suốt từ nhiệt độ phòng xuống 4K.

---

## 23. transmon qubit relaxation lifetime /ˈtrænzmɑːn ˈkjuːbɪt ˌriːlækˈseɪʃən ˈlaɪftaɪm/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (ký hiệu là $T_1$). Thường làm thông số sống còn phản ánh độ kết hợp năng lượng của qubit (ví dụ: `measure the transmon qubit relaxation lifetime`).

**Core meaning — English:** The characteristic decay time constant ($T_1$) over which a superconducting transmon qubit spontaneously transitions from its excited state ($|1
angle$) down to its ground state ($|0
angle$) through energy dissipation into its environment (dielectric losses, quasiparticles, or radiative decay).

**Core meaning & mental image — Tiếng Việt:** Thời gian sống hồi phục của qubit transmon / thời gian hồi phục $T_1$; hãy hình dung bạn quay một con quay đồ chơi tuyệt đẹp: con quay đứng thăng bằng hoàn hảo trên mũi kim nhọn (trạng thái kích hoạt 1 mang thông tin tính toán); nhưng do lực cản không khí và ma sát vô hình từ môi trường xung quanh, con quay dần dần mất năng lượng, nghiêng ngả và cuối cùng đổ sụp xuống mặt bàn (trạng thái cơ bản 0); khoảng thời gian con quay duy trì được sự thăng bằng trước khi ngã chính là thời gian sống hồi phục $T_1$; thời gian này càng dài, máy tính lượng tử càng thực hiện được nhiều phép tính phức tạp.

**Grammar & collocations:** `extend the transmon qubit relaxation lifetime` — kéo dài thời gian sống hồi phục của qubit transmon; `factors limiting transmon qubit relaxation lifetime` — các yếu tố giới hạn thời gian sống hồi phục của qubit transmon; `fluctuations in transmon qubit relaxation lifetime` — các thăng giáng trong thời gian sống hồi phục của qubit transmon.

**Register & nuance:** `superconducting quantum computing & coherence metrics` — cùng với thời gian khử pha $T_2$ ($T_2 \le 2T_1$), $T_1$ là chỉ số quan trọng bậc nhất để đánh giá chất lượng của chip lượng tử; đối với các transmon hiện đại, $T_1$ dao động trong khoảng từ 50 đến 300 micro giây.

**Examples:** `Purifying dielectric interfaces and eliminating stray infrared radiation extended the transmon qubit relaxation lifetime beyond two hundred microseconds.` → Việc tinh khiết hóa các bề mặt tiếp xúc điện môi và loại bỏ bức xạ hồng ngoại lạc đã kéo dài thời gian sống hồi phục của qubit transmon vượt qua hai trăm micro giây.

**Liên kết tiếng Hàn:** `트랜스몬 큐비트 이완 수명` (transmon qubit 弛緩 壽命 - $T_1$) — thời gian phân rã năng lượng đặc trưng từ trạng thái kích hoạt về trạng thái cơ bản của qubit transmon.

---

## 24. frequency-division multiplexed readout /ˈfriːkwənsi dɪˈvɪʒən ˈmʌltəplɛkst ˈriːdaʊt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt là `FDM readout`). Đóng vai trò là kỹ thuật dồn kênh tần số đọc đồng thời nhiều qubit trên một đường truyền cáp (ví dụ: `scale up using frequency-division multiplexed readout`).

**Core meaning — English:** A multiplexing architecture where multiple distinct qubits, each coupled to a readout resonator with a unique resonant microwave frequency, are probed simultaneously across a single physical transmission line using a comb of discrete frequency tones.

**Core meaning & mental image — Tiếng Việt:** Đọc dồn kênh phân chia theo tần số; hãy hình dung một dàn hợp xướng gồm hàng chục ca sĩ: thay vì bắt từng người một bước ra sân khấu hát solo (đòi hỏi hàng chục chiếc micro và dây cáp riêng biệt), tất cả ca sĩ cùng đồng thanh cất giọng vào một chiếc micro duy nhất; mỗi ca sĩ được chỉ định hát ở một cao độ nốt nhạc hoàn toàn khác nhau (người nốt Đô, người nốt Rê, người nốt Mi...); tại phòng điều khiển, kỹ sư âm thanh sử dụng một bộ lọc tần số để tách riêng giọng hát của từng người một cách dễ dàng mà không bị nhầm lẫn.

**Grammar & collocations:** `implement frequency-division multiplexed readout` — triển khai việc đọc dồn kênh phân chia theo tần số; `channel capacity of frequency-division multiplexed readout` — dung lượng kênh của đọc dồn kênh phân chia theo tần số; `crosstalk in frequency-division multiplexed readout` — xuyên âm trong đọc dồn kênh phân chia theo tần số.

**Register & nuance:** `quantum scalability & RF front-end architectures` — chìa khóa sống còn để giải quyết bài toán "cuộc khủng hoảng hệ thống dây dẫn" (wiring bottleneck); cho phép đọc trạng thái của 16 đến 32 qubit cùng một lúc chỉ trên một cặp dây cáp đồng trục ra/vào duy nhất.

**Examples:** `Adopting frequency-division multiplexed readout allowed thirty-two transmon qubits to be interrogated simultaneously over a single microwave line, drastically reducing cryostat hardware complexity.` → Việc áp dụng phương pháp đọc dồn kênh phân chia theo tần số đã cho phép ba mươi hai qubit transmon được thẩm vấn đồng thời trên một đường truyền vi sóng duy nhất, giảm mạnh độ phức tạp phần cứng của cryostat.

**Liên kết tiếng Hàn:** `주파수 분할 다중화 판독` (周波數 分割 多重化 判讀) — kỹ thuật dồn kênh theo tần số cho phép đọc đồng thời nhiều qubit trên một đường truyền vi sóng duy nhất.

---

## 25. cryo-CMOS mixed-signal ASIC /ˈkraɪoʊ ˈsiːmɔːs mɪkst ˈsɪɡnəl ˈeɪsɪk/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm con chip tích hợp chuyên dụng điều khiển lượng tử (ví dụ: `tape out a cryo-CMOS mixed-signal ASIC`).

**Core meaning — English:** An application-specific integrated circuit (ASIC) combining high-speed digital logic, digital-to-analog converters (DACs), and analog front-ends designed explicitly to synthesize qubit drive pulses and digitize readout tones in situ at 4 Kelvin.

**Core meaning & mental image — Tiếng Việt:** Vi mạch tích hợp chuyên dụng tín hiệu hỗn hợp CMOS siêu lạnh; hãy hình dung một người nhạc trưởng kiêm ban nhạc điện tử toàn năng được thu nhỏ lại thành một con chip vi mạch tí hon đặt ngay trong tủ lạnh siêu hàn: con chip này vừa chứa bộ não máy tính kỹ thuật số xử lý logic thuật toán (phần số), vừa chứa các bàn tay khéo léo biến các số nhị phân thành các đợt sóng vi sóng tinh vi (phần tương tự - DAC) để gảy lên các dây đàn lượng tử; mọi thao tác điều khiển và đọc kết quả đều diễn ra ngay tại chỗ mà không cần truyền tín hiệu lên mặt đất xa xôi.

**Grammar & collocations:** `tape out a cryo-CMOS mixed-signal ASIC` — hoàn tất thiết kế gửi xưởng chế tạo một vi mạch chuyên dụng tín hiệu hỗn hợp CMOS siêu lạnh; `power density of the cryo-CMOS mixed-signal ASIC` — mật độ công suất của vi mạch cryo-CMOS chuyên dụng; `interface qubits with a cryo-CMOS mixed-signal ASIC` — kết nối giao diện qubit với vi mạch cryo-CMOS chuyên dụng.

**Register & nuance:** `next-generation quantum computing hardware (e.g., Intel Horse Ridge)` — đỉnh cao của kỹ thuật vi điện tử đương đại; đòi hỏi phải giải quyết đồng thời các thách thức về vật lý bán dẫn siêu lạnh, tự sinh nhiệt và cách ly nhiễu giữa phần số tốc độ cao và phần tương tự siêu nhạy.

**Examples:** `The custom cryo-CMOS mixed-signal ASIC generated precise nanosecond microwave control bursts directly at 4 Kelvin, demonstrating control over multiple transmon qubits with minimal thermal overhead.` → Vi mạch tích hợp chuyên dụng tín hiệu hỗn hợp CMOS siêu lạnh tùy chỉnh đã tạo ra các đợt bùng nổ xung điều khiển vi sóng nano giây chính xác ngay tại 4 Kelvin, chứng minh khả năng kiểm soát nhiều qubit transmon với chi phí nhiệt tối thiểu.

**Liên kết tiếng Hàn:** `극저온 CMOS 혼합 신호 주문형 반도체` (極低溫 CMOS 混合 信號 注文型 半導體 - cryo-CMOS ASIC) — vi mạch chuyên dụng kết hợp tín hiệu số và tương tự tối ưu hóa cho điều khiển lượng tử tại 4K.

---

## Review in context (Part 1: Cryogenic Microelectronics and Quantum Interfaces)

Scaling contemporary quantum processors to fault-tolerant thresholds mandates transitioning from cumbersome room-temperature racks to a co-integrated **cryogenic CMOS architecture**. Because available cooling capacity drops precipitously near absolute zero, circuit designers are strictly constrained by **sub-Kelvin thermal dissipation** limits at the lowest thermal plates. Operating silicon devices at liquid helium temperatures yields distinct physical benefits, notably dramatic **subthreshold swing sharpening**, which allows transistors to toggle at vastly lower supply voltages. However, bulk planar architectures frequently suffer from the **carrier freeze-out phenomenon**, where dopant impurities trap mobile carriers and collapse conductivity. To protect subtle microwave phase information from low-frequency distortions, front-end engineers prioritize **cryogenic flicker noise minimization** through optimized gate dielectric engineering and dynamic chopper stabilization. At the forefront of signal detection, the millikelvin stage relies upon a superconducting **Josephson parametric amplifier**, boosting delicate microwave readout bursts while contributing minimal noise. High-frequency signals are routed between thermal stages without ohmic power loss through advanced **superconducting interconnect routing**, eliminating bulky copper wiring harnesses. For semiconductor spin qubits, researchers actively pursue **monolithic qubit controller integration**, co-fabricating quantum dots and control electronics onto identical silicon substrates. At the physical heart of the cryostat sits the **dilution refrigerator mixing chamber**, maintaining base temperatures of fifteen millikelvin where quantum superpositions can survive. Readout operations interrogate qubit states off-resonantly through **dispersive qubit readout**, converting quantum state differences into detectable resonator frequency shifts. The resulting noisy voltage traces are subsequently processed to achieve unambiguous **qubit state discrimination**, assigning discrete computational values with high statistical confidence. Crucially, this measurement protocol preserves quantum coherence by satisfying the formal criteria of a **quantum non-demolition measurement**, leaving the post-measurement eigenstate intact for subsequent error correction cycles.

**Bản dịch tiếng Việt:**

Mở rộng quy mô các bộ xử lý lượng tử đương đại lên các ngưỡng kháng lỗi bắt buộc phải chuyển đổi từ các giá đỡ cồng kềnh ở nhiệt độ phòng sang một **kiến trúc CMOS siêu lạnh** đồng tích hợp. Bởi vì công suất làm lạnh khả dụng giảm mạnh gần độ không tuyệt đối, các nhà thiết kế mạch bị ràng buộc nghiêm ngặt bởi các giới hạn **sự tiêu tán nhiệt dưới Kelvin** tại các tấm nhiệt thấp nhất. Hoạt động của các linh kiện silic ở nhiệt độ heli lỏng mang lại những lợi ích vật lý rõ rệt, đáng chú ý là **sự sắc nhọn hóa độ dốc dưới ngưỡng** đầy kịch tính, cho phép các transistor đóng mở ở điện áp cấp nguồn thấp hơn đáng kể. Tuy nhiên, các kiến trúc phẳng khối thường chịu ảnh hưởng bởi **hiện tượng đông cứng hạt mang điện**, nơi các tạp chất pha tạp bẫy các hạt mang điện di động và làm sụp đổ độ dẫn điện. Để bảo vệ thông tin pha vi sóng tinh tế khỏi các biến dạng tần số thấp, các kỹ sư đầu vào ưu tiên **giảm thiểu nhiễu nhấp nháy siêu lạnh** thông qua kỹ thuật điện môi cổng được tối ưu hóa và ổn định hóa băm xung động. Tại tiền tuyến của việc phát hiện tín hiệu, tầng millikelvin dựa vào một **bộ khuếch đại tham số Josephson** siêu dẫn, tăng cường các đợt bùng nổ đọc vi sóng tinh tế trong khi đóng góp tạp âm tối thiểu. Các tín hiệu tần số cao được định tuyến giữa các tầng nhiệt mà không bị tổn thất công suất Ohm thông qua **định tuyến liên kết siêu dẫn** tiên tiến, loại bỏ các bó dây đồng cồng kềnh. Đối với các qubit spin bán dẫn, các nhà nghiên cứu tích cực theo đuổi **tích hợp bộ điều khiển qubit nguyên khối**, cùng chế tạo các chấm lượng tử và thiết bị điện tử điều khiển trên các chất nền silic giống hệt nhau. Tại trung tâm vật lý của cryostat là **buồng trộn tủ lạnh pha loãng**, duy trì nhiệt độ nền mười lăm millikelvin nơi các trạng thái chồng chập lượng tử có thể tồn tại. Các thao tác đọc thẩm vấn các trạng thái qubit lệch tần thông qua **đọc trạng thái qubit theo cơ chế tán sắc**, chuyển đổi sự khác biệt trạng thái lượng tử thành các dịch chuyển tần số cộng hưởng có thể phát hiện được. Các vệt điện áp nhiễu kết quả sau đó được xử lý để đạt được **sự phân biệt trạng thái qubit** rõ ràng, gán các giá trị tính toán rời rạc với độ tin cậy thống kê cao. Điều cốt yếu là giao thức đo lường này bảo tồn tính kết hợp lượng tử bằng cách thỏa mãn các tiêu chí chính thức của một **phép đo lượng tử không phá hủy**, để lại trạng thái riêng sau phép đo nguyên vẹn cho các chu kỳ sửa lỗi tiếp theo.

---

## Review in context (Part 2: Amplification, Thermal Management, and Integrated Control)

Scaling quantum readout infrastructure across thousands of channels requires meticulous electro-thermal co-design across all temperature tiers. At the intermediate four-Kelvin stage, weak microwave tones receive critical primary gain from a **cryogenic low-noise amplifier**, delivering high gain with minimal added noise. In high-frequency analog designs, engineers deploy a **cryogenic high-electron-mobility transistor**, exploiting two-dimensional electron gases to sustain ultra-high transconductance at cryogenic temperatures. Along incoming control lines, thermal noise photons originating from room-temperature electronics are stripped away via multi-stage **thermal anchoring attenuation**, preventing thermal qubit excitation. Resonant probing of quantum states is orchestrated inside a **superconducting coplanar waveguide resonator**, whose high internal quality factor enables long photon storage lifetimes. At cryogenic operational temperatures, the electronic noise baseline plummets as systems approach the fundamental **Johnson-Nyquist thermal noise limit**, drastically improving single-shot signal-to-noise ratios. Digitized microwave signals from the resonator undergo **in-phase and quadrature demodulation**, resolving complex voltage envelopes into orthogonal components for state classification. To prevent heating delicate quantum stages, cryogenic engineers actively mitigate **parasitic heat load dissipation**, shielding cold plates from conductive wiring loads and stray blackbody radiation. In the sub-Kelvin regime, cooling effectiveness is severely constrained by a **phonon-mediated thermal bottleneck**, where acoustic mismatch and Kapitza resistance decouple chip electron temperatures from the refrigerator base. Advanced quantum preamplifiers achieve extraordinary sensitivity by operating near the fundamental **quantum-limited noise figure**, preserving delicate superposition states during amplification. Stable on-chip bias currents and gate voltages are maintained across wide thermal gradients using a temperature-compensated **cryogenic bandgap reference voltage**. Minimizing environmental loss channels directly prolongs the **transmon qubit relaxation lifetime**, granting the quantum processor extended temporal windows for complex gate synthesis. Channel density along cryostat coaxial paths is scaled up by deploying **frequency-division multiplexed readout**, simultaneously interrogating multiple qubits through distinct resonant microwave tones. Finally, the complete digital synthesis and microwave readout chain is consolidated onto a single silicon substrate through a **cryo-CMOS mixed-signal ASIC**, inaugurating the era of truly scalable quantum supercomputing.

**Bản dịch tiếng Việt:**

Mở rộng quy mô cơ sở hạ tầng đọc lượng tử trên hàng ngàn kênh đòi hỏi phải đồng thiết kế điện - nhiệt tỉ mỉ trên tất cả các tầng nhiệt độ. Tại tầng trung gian bốn Kelvin, các âm sắc vi sóng yếu nhận được độ lợi sơ cấp quan trọng từ một **bộ khuếch đại tạp âm thấp siêu lạnh**, mang lại độ lợi cao với tạp âm tăng thêm tối thiểu. Trong các thiết kế tương tự tần số cao, các kỹ sư triển khai một **transistor độ linh động electron cao siêu lạnh**, khai thác các chất khí electron hai chiều để duy trì độ hỗ dẫn cực cao ở nhiệt độ siêu lạnh. Dọc theo các đường điều khiển đi vào, các photon tạp âm nhiệt bắt nguồn từ các thiết bị điện tử ở nhiệt độ phòng bị tước đi thông qua **sự suy hao và neo nhiệt** nhiều tầng, ngăn chặn sự kích thích qubit do nhiệt. Việc thăm dò cộng hưởng các trạng thái lượng tử được phối trí bên trong một **bộ cộng hưởng ống dẫn sóng đồng phẳng siêu dẫn**, có hệ số phẩm chất nội tại cao cho phép thời gian lưu trữ photon kéo dài. Ở nhiệt độ hoạt động siêu lạnh, đường cơ sở tạp âm điện tử giảm mạnh khi các hệ thống tiến gần đến **giới hạn tạp âm nhiệt Johnson-Nyquist** cơ bản, cải thiện đáng kể tỷ số tín hiệu trên tạp âm của các lần chụp đơn phát. Các tín hiệu vi sóng được số hóa từ bộ cộng hưởng trải qua quá trình **giải điều chế đồng pha và vuông pha**, phân giải các bao điện áp phức thành các thành phần trực giao để phân loại trạng thái. Để ngăn chặn việc làm nóng các tầng lượng tử tinh tế, các kỹ sư siêu lạnh tích cực giảm thiểu **sự tiêu tán tải nhiệt ký sinh**, che chắn các tấm làm lạnh khỏi tải dây dẫn nhiệt và bức xạ vật đen lạc. Trong chế độ dưới Kelvin, hiệu quả làm mát bị hạn chế nghiêm ngặt bởi một **nút thắt cổ chai nhiệt truyền bởi phonon**, nơi sự không khớp âm học và điện trở Kapitza làm tách rời nhiệt độ electron của chip khỏi đế tủ lạnh. Các bộ tiền khuếch đại lượng tử tiên tiến đạt được độ nhạy phi thường bằng cách hoạt động gần **chỉ số tạp âm tiệm cận giới hạn lượng tử** cơ bản, bảo tồn các trạng thái chồng chập tinh tế trong quá trình khuếch đại. Các dòng điện phân cực và điện áp cổng ổn định trên chip được duy trì qua các gradient nhiệt rộng bằng cách sử dụng một **điện áp tham chiếu vùng cấm siêu lạnh** được bù nhiệt. Việc giảm thiểu các kênh tổn thất môi trường trực tiếp kéo dài **thời gian sống hồi phục của qubit transmon**, mang lại cho bộ xử lý lượng tử các cửa sổ thời gian mở rộng cho việc tổng hợp cổng phức tạp. Mật độ kênh dọc theo các đường cáp đồng trục cryostat được mở rộng quy mô bằng cách triển khai **đọc dồn kênh phân chia theo tần số**, đồng thời thẩm vấn nhiều qubit thông qua các âm sắc vi sóng cộng hưởng riêng biệt. Cuối cùng, toàn bộ chuỗi tổng hợp kỹ thuật số và đọc vi sóng được hợp nhất trên một chất nền silic duy nhất thông qua một **vi mạch tích hợp chuyên dụng tín hiệu hỗn hợp CMOS siêu lạnh**, mở ra kỷ nguyên của siêu máy tính lượng tử thực sự có thể mở rộng quy mô.
