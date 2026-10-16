# C2 Vocabulary — Silicon photonics and optical interconnects

This lesson follows an optical link from light generation and coupling through modulation, routing, detection, and signal-quality measurement on a photonic chip.

Flow: **silicon photonics → optical interconnect → grating coupler → edge coupler → ring resonator → Mach-Zehnder modulator → electro-optic modulation → thermo-optic tuning → wavelength-division multiplexing → waveguide loss → extinction ratio → eye diagram → avalanche photodiode → germanium photodetector → laser integration → heterogeneous integration → optical phase shifter → coherent receiver → free spectral range → thermal crosstalk**.

## 1. silicon photonics /ˈsɪləkən foʊˈtɑnɪks/
**Part of speech:** noun
**Core meaning (English):** the use of silicon fabrication processes to build optical waveguides, modulators, detectors, and related photonic circuits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quang tử silicon; dùng nền tảng sản xuất chip silicon để dẫn và xử lý ánh sáng thay vì chỉ electron.
**Grammar & collocations:** `silicon-photonics platform` — nền tảng quang tử silicon; `silicon-photonics die` — die quang tử; `design in silicon photonics` — thiết kế bằng.
**Examples:** `Silicon photonics made it possible to place optical routing beside conventional electronic logic.` → Silicon photonics cho phép đặt routing quang cạnh logic điện tử truyền thống.
**Liên kết tiếng Hàn:** `실리콘 포토닉스` (silikon poton ikseu) — quang tử silicon.

## 2. optical interconnect /ˈɑptɪkəl ˌɪntɚˈkɑnɛkt/
**Part of speech:** noun
**Core meaning (English):** a communication link that carries data with light between chips, packages, boards, or network components.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** liên kết quang; truyền data bằng photon để giảm bottleneck của dây điện khi khoảng cách hoặc băng thông tăng.
**Grammar & collocations:** `chip-to-chip optical interconnect` — liên kết quang chip–chip; `optical-interconnect bandwidth` — băng thông; `deploy an optical interconnect` — triển khai.
**Examples:** `The accelerator used an optical interconnect to move model parameters between packages.` → Bộ gia tốc dùng optical interconnect để chuyển tham số model giữa các package.
**Liên kết tiếng Hàn:** `광 인터커넥트` (gwang inteokeon ekteu) — liên kết quang.

## 3. grating coupler /ˈɡreɪtɪŋ ˈkʌplɚ/
**Part of speech:** noun
**Core meaning (English):** a periodic surface structure that couples light between an optical fiber and an on-chip waveguide.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ ghép cách tử; các rãnh tuần hoàn bẻ hướng ánh sáng từ fiber xuống waveguide hoặc ngược lại.
**Grammar & collocations:** `fiber grating coupler` — coupler cách tử với fiber; `grating-coupler efficiency` — hiệu suất; `align a grating coupler` — căn chỉnh.
**Examples:** `The test fixture aligned the fiber above the grating coupler at a precise angle.` → Bộ gá test căn fiber phía trên grating coupler ở góc chính xác.
**Liên kết tiếng Hàn:** `격자 결합기` (gyeokja gyeolhapgi) — bộ ghép cách tử.

## 4. edge coupler /ɛdʒ ˈkʌplɚ/
**Part of speech:** noun
**Core meaning (English):** a structure that transfers light between a fiber and a waveguide through the polished or cleaved edge of a photonic chip.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ ghép mép; ánh sáng đi thẳng qua cạnh chip vào waveguide thay vì chiếu từ mặt trên.
**Grammar & collocations:** `tapered edge coupler` — coupler mép thuôn; `edge-coupler alignment` — căn chỉnh; `fiber-to-edge coupler` — ghép fiber–mép.
**Examples:** `The tapered edge coupler offered a broader optical bandwidth than the surface grating.` → Edge coupler thuôn cho băng thông quang rộng hơn cách tử bề mặt.
**Liên kết tiếng Hàn:** `에지 결합기` (eji gyeolhapgi) — bộ ghép mép.

## 5. ring resonator /rɪŋ ˈrɛzəˌneɪtɚ/
**Part of speech:** noun
**Core meaning (English):** a circular waveguide whose resonant wavelengths can filter, route, or modulate optical signals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cộng hưởng vòng; ánh sáng chạy quanh vòng và chỉ một số bước sóng cộng hưởng mạnh để lọc hoặc chọn kênh.
**Grammar & collocations:** `microring resonator` — resonator vi vòng; `ring-resonator filter` — bộ lọc; `tune a ring resonator` — chỉnh cộng hưởng.
**Examples:** `The ring resonator selected one wavelength channel from the densely packed optical bus.` → Ring resonator chọn một kênh bước sóng từ bus quang xếp dày.
**Liên kết tiếng Hàn:** `링 공진기` (ring gongjingi) — cộng hưởng vòng.

## 6. Mach-Zehnder modulator /mɑk ˈtseɪndɚ ˈmɑdʒəˌleɪtɚ/
**Part of speech:** noun
**Core meaning (English):** an interferometric device that encodes an electrical signal by changing the relative phase of light in two waveguide arms.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ điều biến Mach–Zehnder; tách ánh sáng thành hai nhánh rồi giao thoa để biến tín hiệu điện thành thay đổi quang.
**Grammar & collocations:** `dual-drive Mach-Zehnder modulator` — MZM hai drive; `MZM bias point` — điểm bias; `linearize a Mach-Zehnder modulator` — tuyến tính hóa.
**Examples:** `The Mach-Zehnder modulator maintained a linear response across the required data swing.` → Mach-Zehnder modulator giữ đáp ứng tuyến tính trong biên độ data cần thiết.
**Liên kết tiếng Hàn:** `마하-젠더 변조기` (maha-jendeo byeon jogi) — bộ điều biến Mach–Zehnder.

## 7. electro-optic modulation /ɪˌlɛktroʊˈɑptɪk ˌmɑdʒəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** changing the intensity, phase, or polarization of light by applying an electrical field.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều biến điện–quang; điện trường làm tính chất quang thay đổi để mang bit.
**Grammar & collocations:** `high-speed electro-optic modulation` — điều biến tốc độ cao; `electro-optic modulator` — bộ điều biến; `electro-optic response` — đáp ứng.
**Examples:** `Electro-optic modulation converted the serializer output into a controlled optical waveform.` → Electro-optic modulation biến output serializer thành waveform quang có kiểm soát.
**Liên kết tiếng Hàn:** `전기광학 변조` (jeongigwanghak byeonjo) — điều biến điện–quang.

## 8. thermo-optic tuning /ˌθɝmoʊˈɑptɪk ˈtuːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** adjusting an optical circuit by changing its temperature and therefore its refractive index.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉnh nhiệt–quang; heater nhỏ làm đổi nhiệt độ, từ đó kéo cộng hưởng hoặc pha quang đến vị trí mong muốn.
**Grammar & collocations:** `thermo-optic tuner` — bộ chỉnh nhiệt–quang; `heater-assisted tuning` — chỉnh có heater; `thermo-optic tuning range` — dải chỉnh.
**Examples:** `Thermo-optic tuning compensated for fabrication error in the resonator radius.` → Thermo-optic tuning bù sai số chế tạo ở bán kính resonator.
**Liên kết tiếng Hàn:** `열광학 튜닝` (yeolgwanghak tyuning) — chỉnh nhiệt–quang.

## 9. wavelength-division multiplexing /ˈweɪvˌlɛŋθ dɪˈvɪʒən ˈmʌltəˌplɛksɪŋ/
**Part of speech:** noun
**Core meaning (English):** carrying multiple data channels over one optical path by assigning each channel a different wavelength.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghép kênh phân chia bước sóng; nhiều “màu” ánh sáng cùng đi trên một waveguide nhưng mang stream riêng.
**Grammar & collocations:** `dense wavelength-division multiplexing` — DWDM; `wavelength-division multiplexer` — bộ ghép; `demultiplex a wavelength` — tách kênh.
**Examples:** `Wavelength-division multiplexing multiplied the link capacity without adding parallel fibers.` → Wavelength-division multiplexing nhân dung lượng link mà không thêm fiber song song.
**Liên kết tiếng Hàn:** `파장 분할 다중화` (pajang bunhal daejunghwa) — ghép kênh phân chia bước sóng.

## 10. waveguide loss /ˈweɪvˌɡaɪd lɔs/
**Part of speech:** noun
**Core meaning (English):** optical power lost as light propagates through a waveguide because of absorption, scattering, or imperfect confinement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy hao waveguide; photon yếu dần khi đi qua vật liệu và các mép không hoàn hảo.
**Grammar & collocations:** `low-loss waveguide` — waveguide suy hao thấp; `waveguide-loss coefficient` — hệ số; `measure waveguide loss` — đo suy hao.
**Examples:** `Sidewall roughness increased waveguide loss at the shorter operating wavelength.` → Độ nhám sidewall làm waveguide loss tăng ở bước sóng vận hành ngắn hơn.
**Liên kết tiếng Hàn:** `도파관 손실` (dopagwan sonsil) — suy hao waveguide.

## 11. extinction ratio /ɪkˈstɪŋkʃən ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the ratio between the optical power representing a logical one and that representing a logical zero.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ số tắt; khoảng cách công suất giữa mức sáng và mức tối càng lớn thì mắt thu càng dễ phân biệt bit.
**Grammar & collocations:** `high extinction ratio` — tỷ số tắt cao; `extinction-ratio penalty` — phạt do tỷ số; `measure extinction ratio` — đo tỷ số.
**Examples:** `The driver bias improved the extinction ratio but slightly reduced the available optical swing.` → Bias driver cải thiện extinction ratio nhưng hơi giảm biên độ quang khả dụng.
**Liên kết tiếng Hàn:** `소광비` (sogwangbi) — tỷ số tắt.

## 12. eye diagram /aɪ ˈdaɪəˌɡræm/
**Part of speech:** noun
**Core meaning (English):** a display formed by superimposing many symbol intervals to reveal timing margin, amplitude margin, and intersymbol interference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu đồ mắt; “mắt” mở rộng nghĩa là tín hiệu có khoảng an toàn tốt về thời gian và mức điện/quang.
**Grammar & collocations:** `open eye diagram` — mắt mở; `eye-diagram mask` — mặt nạ; `inspect an eye diagram` — xem biểu đồ.
**Examples:** `The eye diagram closed when thermal drift moved the ring away from its calibrated point.` → Eye diagram khép lại khi thermal drift kéo ring khỏi điểm đã hiệu chuẩn.
**Liên kết tiếng Hàn:** `아이 다이어그램` (ai daieogeuraem) — biểu đồ mắt.

## 13. avalanche photodiode /ˈævəˌlæntʃ ˌfoʊtoʊˈdaɪoʊd/
**Part of speech:** noun
**Core meaning (English):** a photodiode operated with high reverse bias so impact ionization provides internal gain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** photodiode thác lũ; một carrier quang tạo thêm carrier nhờ ion hóa va chạm, khuếch đại tín hiệu thu.
**Grammar & collocations:** `avalanche-photodiode gain` — gain APD; `APD bias voltage` — điện áp bias; `avalanche photodiode receiver` — receiver dùng APD.
**Examples:** `The avalanche photodiode improved sensitivity but required careful control of its bias voltage.` → Avalanche photodiode cải thiện độ nhạy nhưng cần kiểm soát cẩn thận điện áp bias.
**Liên kết tiếng Hàn:** `애벌랜치 포토다이오드` (aebeollaenchi potoda iodeu) — photodiode thác lũ.

## 14. germanium photodetector /dʒɚˈmeɪniəm ˌfoʊtoʊdɪˈtɛktɚ/
**Part of speech:** noun
**Core meaning (English):** a light detector using germanium's strong absorption in telecommunication wavelengths, often integrated on silicon.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** detector quang germanium; germanium hấp thụ ánh sáng viễn thông và có thể đặt trên nền silicon.
**Grammar & collocations:** `germanium photodetector responsivity` — responsivity; `silicon-germanium detector` — detector SiGe; `integrate a germanium photodetector` — tích hợp.
**Examples:** `The germanium photodetector converted the received telecom wavelength into a photocurrent on the silicon die.` → Germanium photodetector biến bước sóng viễn thông thu được thành dòng quang trên die silicon.
**Liên kết tiếng Hàn:** `게르마늄 광검출기` (gereumanium gwanggeomchulgi) — detector quang germanium.

## 15. laser integration /ˈleɪzɚ ˌɪntəˈɡreɪʃən/
**Part of speech:** noun
**Core meaning (English):** incorporating a light-generating laser with a photonic circuit so that it can supply the circuit's optical carrier.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tích hợp laser; đưa nguồn sáng vào cùng package hoặc nền để mạch quang không cần nguồn ngoài cồng kềnh.
**Grammar & collocations:** `on-chip laser integration` — tích hợp laser trên chip; `laser-integration scheme` — phương án; `improve laser integration` — cải thiện.
**Examples:** `Laser integration simplified the optical engine but introduced thermal and packaging constraints.` → Laser integration đơn giản hóa optical engine nhưng đưa thêm ràng buộc nhiệt và package.
**Liên kết tiếng Hàn:** `레이저 통합` (reijeo tonghap) — tích hợp laser.

## 16. heterogeneous integration /ˌhɛtərədʒiˈniəs ˌɪntəˈɡreɪʃən/
**Part of speech:** noun
**Core meaning (English):** combining devices or materials made by different processes or from different semiconductor platforms in one system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tích hợp dị thể; ghép silicon với III–V, germanium hoặc vật liệu khác để mỗi phần dùng ưu điểm riêng.
**Grammar & collocations:** `heterogeneous-integration platform` — nền tảng tích hợp dị thể; `heterogeneous integration process` — quy trình; `enable heterogeneous integration` — cho phép.
**Examples:** `Heterogeneous integration placed an efficient III–V laser beside silicon waveguides.` → Heterogeneous integration đặt laser III–V hiệu quả cạnh waveguide silicon.
**Liên kết tiếng Hàn:** `이종 집적` (ijong jipjeok) — tích hợp dị thể.

## 17. optical phase shifter /ˈɑptɪkəl feɪz ˈʃɪftɚ/
**Part of speech:** noun
**Core meaning (English):** a device that changes the phase of an optical wave relative to another path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ dịch pha quang; thay đổi “vị trí trong chu kỳ” của sóng để điều khiển giao thoa và routing.
**Grammar & collocations:** `programmable optical phase shifter` — phase shifter lập trình được; `phase-shifter array` — mảng; `drive a phase shifter` — điều khiển.
**Examples:** `The optical phase shifter balanced the two interferometer arms before calibration.` → Optical phase shifter cân bằng hai nhánh giao thoa kế trước khi hiệu chuẩn.
**Liên kết tiếng Hàn:** `광 위상 변위기` (gwang wisang byeon wigi) — bộ dịch pha quang.

## 18. coherent receiver /koʊˈhɪrənt rɪˈsiːvɚ/
**Part of speech:** noun
**Core meaning (English):** a receiver that mixes an incoming optical signal with a local oscillator to recover amplitude and phase information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** receiver coherent; so sánh tín hiệu đến với laser nội để đọc cả biên độ lẫn pha, tăng hiệu quả truyền thông tin.
**Grammar & collocations:** `coherent optical receiver` — receiver quang coherent; `coherent-receiver DSP` — DSP; `calibrate a coherent receiver` — hiệu chuẩn.
**Examples:** `The coherent receiver recovered both quadratures from the modulated carrier.` → Coherent receiver khôi phục cả hai thành phần vuông pha của carrier đã điều biến.
**Liên kết tiếng Hàn:** `코히어런트 수신기` (ko hieoreonteu susingi) — receiver coherent.

## 19. free spectral range /friː ˈspɛktrəl reɪndʒ/
**Part of speech:** noun
**Core meaning (English):** the wavelength or frequency spacing between adjacent resonances of a periodic optical resonator.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng phổ tự do; khoảng cách giữa các đỉnh cộng hưởng liên tiếp quyết định các kênh ring có thể tách nhau ra sao.
**Grammar & collocations:** `large free spectral range` — FSR lớn; `FSR measurement` — đo FSR; `set the free spectral range` — đặt FSR.
**Examples:** `The ring radius was chosen to give a free spectral range wider than the channel grid.` → Bán kính ring được chọn để free spectral range rộng hơn lưới kênh.
**Liên kết tiếng Hàn:** `자유 스펙트럼 범위` (jayu sepekteureom beomwi) — khoảng phổ tự do.

## 20. thermal crosstalk /ˈθɝməl ˈkrɔsˌtɔk/
**Part of speech:** noun
**Core meaning (English):** unwanted thermal influence from one heated photonic or electronic element on the behavior of a nearby element.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xuyên nhiễu nhiệt; heater chỉnh một ring nhưng nhiệt lan sang ring bên cạnh và kéo lệch cộng hưởng của nó.
**Grammar & collocations:** `thermal-crosstalk compensation` — bù xuyên nhiễu nhiệt; `reduce thermal crosstalk` — giảm; `thermal-crosstalk matrix` — ma trận.
**Examples:** `The controller used a thermal-crosstalk matrix to tune adjacent resonators independently.` → Bộ điều khiển dùng ma trận thermal crosstalk để chỉnh các resonator cạnh nhau độc lập.
**Liên kết tiếng Hàn:** `열 누화` (yeol nuhwa) — xuyên nhiễu nhiệt.

## Review in context

In **silicon photonics**, an **optical interconnect** can enter a chip through a **grating coupler** or an **edge coupler**. A **ring resonator** and a **Mach-Zehnder modulator** use **electro-optic modulation** or **thermo-optic tuning** to control light. **Wavelength-division multiplexing** places several channels on one path, but **waveguide loss** reduces power. Engineers inspect the **extinction ratio** and an **eye diagram** before selecting an **avalanche photodiode** or a **germanium photodetector**. **Laser integration** and **heterogeneous integration** provide a compact source, while an **optical phase shifter** and a **coherent receiver** support precise control and detection. The **free spectral range** determines resonator spacing, and **thermal crosstalk** must be compensated when nearby heaters interact.

**Bản dịch tiếng Việt:**

Trong silicon photonics, một optical interconnect có thể đi vào chip qua grating coupler hoặc edge coupler. Ring resonator và Mach-Zehnder modulator dùng electro-optic modulation hoặc thermo-optic tuning để điều khiển ánh sáng. Wavelength-division multiplexing đặt nhiều kênh trên một đường, nhưng waveguide loss làm giảm công suất. Kỹ sư kiểm tra extinction ratio và eye diagram trước khi chọn avalanche photodiode hoặc germanium photodetector. Laser integration và heterogeneous integration tạo nguồn nhỏ gọn, còn optical phase shifter và coherent receiver hỗ trợ điều khiển và phát hiện chính xác. Free spectral range quyết định khoảng cách resonator, còn thermal crosstalk phải được bù khi các heater gần nhau tương tác.
