# C2 Vocabulary — Photonic link noise and wavelength control

This lesson follows an optical receiver from wave behavior and dispersion through coupling, noise limits, and front-end design.

Flow: **quantum limit → frequency chirp → modulation depth → link margin → fiber dispersion → polarization mode dispersion → mode solver → confinement factor → effective mode area → bend loss → propagation loss → group velocity → delay spread → quality factor → coupling coefficient → balanced detection → transimpedance amplifier → photodiode dark current → avalanche gain → gain bandwidth**.

## 1. quantum limit /ˈkwɑːntəm ˈlɪmət/
**Part of speech:** noun
**Core meaning (English):** the fundamental performance boundary imposed by the discrete nature of photons or other quanta.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới hiệu năng nền tảng do bản chất rời rạc của photon hoặc lượng tử.
**Grammar & collocations:** `quantum-limit analysis` — phân tích; `approach a fundamental bound` — tiến gần giới hạn nền tảng.
**Examples:** `The detector was engineered close to the quantum limit but not beyond it.` → Detector được thiết kế gần giới hạn lượng tử nhưng không vượt qua nó.
**Liên kết tiếng Hàn:** `양자 한계`.

## 2. frequency chirp /ˈfriːkwənsi tʃɜːrp/
**Part of speech:** noun
**Core meaning (English):** a time-dependent change in the instantaneous frequency of an optical carrier.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sự thay đổi theo thời gian của tần số tức thời của sóng mang quang.
**Grammar & collocations:** `frequency-chirp parameter` — tham số; `broaden a transmitted pulse` — làm rộng xung truyền.
**Examples:** `The laser's frequency chirp interacted with fiber dispersion and distorted the edge.` → Chirp tần số của laser tương tác với tán sắc sợi và làm méo cạnh.
**Liên kết tiếng Hàn:** `주파수 처프`.

## 3. modulation depth /ˌmɑːdʒəˈleɪʃən depθ/
**Part of speech:** noun
**Core meaning (English):** the relative extent to which a carrier's amplitude, intensity, or phase is varied by information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức tương đối mà biên độ, cường độ hoặc pha của sóng mang bị thay đổi bởi dữ liệu.
**Grammar & collocations:** `modulation-depth setting` — cài đặt; `increase intensity swing` — tăng độ dao động cường độ.
**Examples:** `Excessive modulation depth drove the optical source outside its linear range.` → Modulation depth quá lớn đẩy nguồn quang ra ngoài vùng tuyến tính.
**Liên kết tiếng Hàn:** `변조 깊이`.

## 4. link margin /lɪŋk ˈmɑːrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** the spare performance between a communication link's expected operating point and its failure threshold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần hiệu năng dự phòng giữa điểm vận hành dự kiến và ngưỡng lỗi của link.
**Grammar & collocations:** `link-margin budget` — ngân sách; `reserve margin for aging` — chừa margin cho lão hóa.
**Examples:** `The installer reserved link margin for connector contamination and temperature drift.` → Người lắp đặt chừa margin cho đầu nối bẩn và drift nhiệt.
**Liên kết tiếng Hàn:** `링크 마진`.

## 5. fiber dispersion /ˈfaɪbər dɪˈspɜːrʒən/
**Part of speech:** noun
**Core meaning (English):** wavelength-dependent spreading of an optical pulse as it travels through fiber.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sự giãn xung phụ thuộc wavelength khi xung truyền trong sợi quang.
**Grammar & collocations:** `fiber-dispersion coefficient` — hệ số; `compensate chromatic spreading` — bù giãn sắc.
**Examples:** `Fiber dispersion limited the distance before adjacent symbols overlapped.` → Tán sắc sợi giới hạn khoảng cách trước khi các symbol cạnh nhau chồng lấn.
**Liên kết tiếng Hàn:** `광섬유 분산`.

## 6. polarization mode dispersion /ˌpoʊlərəˈzeɪʃən moʊd dɪˈspɜːrʒən/
**Part of speech:** noun
**Core meaning (English):** differential delay and pulse spreading caused by two polarization modes traveling differently in fiber.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ trễ khác nhau và giãn xung do hai mode phân cực truyền khác nhau trong sợi.
**Grammar & collocations:** `polarization-mode-dispersion penalty` — penalty; `track differential group delay` — theo dõi.
**Examples:** `Polarization mode dispersion became visible when the data rate increased.` → Tán sắc mode phân cực lộ rõ khi data rate tăng.
**Liên kết tiếng Hàn:** `편광 모드 분산`.

## 7. mode solver /moʊd ˈsɑːlvər/
**Part of speech:** noun
**Core meaning (English):** software or an algorithm that calculates the allowed electromagnetic modes of a structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần mềm hoặc thuật toán tính các mode điện từ được phép của một cấu trúc.
**Grammar & collocations:** `mode-solver mesh` — lưới; `compute a guided solution` — tính nghiệm dẫn.
**Examples:** `The mode solver predicted which waveguide modes would leak into the cladding.` → Mode solver dự đoán mode nào sẽ rò vào cladding.
**Liên kết tiếng Hàn:** `모드 해석기`.

## 8. confinement factor /kənˈfaɪnmənt ˈfæktər/
**Part of speech:** noun
**Core meaning (English):** the fraction of an optical mode's energy that overlaps a selected material or active region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần năng lượng của mode quang chồng lấn lên vật liệu hoặc vùng hoạt động được chọn.
**Grammar & collocations:** `confinement-factor estimate` — ước tính; `overlap an active layer` — chồng lấn.
**Examples:** `A larger confinement factor increased the gain available from the active layer.` → Confinement factor lớn hơn tăng gain từ lớp hoạt động.
**Liên kết tiếng Hàn:** `구속 계수`.

## 9. effective mode area /ɪˈfektɪv moʊd ˈeriə/
**Part of speech:** noun
**Core meaning (English):** an equivalent cross-sectional area used to describe how widely an optical mode's power is distributed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** diện tích tiết diện tương đương mô tả power của mode quang phân bố rộng đến đâu.
**Grammar & collocations:** `effective-mode-area calculation` — phép tính; `reduce nonlinear intensity` — giảm cường độ phi tuyến.
**Examples:** `The large effective mode area lowered nonlinear distortion in the fiber.` → Effective mode area lớn giảm méo phi tuyến trong sợi.
**Liên kết tiếng Hàn:** `유효 모드 면적`.

## 10. bend loss /bend lɔːs/
**Part of speech:** noun
**Core meaning (English):** optical power lost because a curved waveguide or fiber allows part of its mode to radiate away.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công suất quang mất vì waveguide hoặc sợi cong làm một phần mode bức xạ ra ngoài.
**Grammar & collocations:** `bend-loss radius` — bán kính; `route a tight curve` — đi theo đường cong gắt.
**Examples:** `The layout increased the bend radius to keep bend loss below the link budget.` → Layout tăng bán kính cong để giữ bend loss dưới link budget.
**Liên kết tiếng Hàn:** `굽힘 손실`.

## 11. propagation loss /ˌprɑːpəˈɡeɪʃən lɔːs/
**Part of speech:** noun
**Core meaning (English):** attenuation accumulated as an optical signal travels along a waveguide or fiber.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy hao tích lũy khi tín hiệu quang truyền dọc waveguide hoặc sợi.
**Grammar & collocations:** `propagation-loss coefficient` — hệ số; `attenuate over distance` — suy giảm theo khoảng cách.
**Examples:** `Low propagation loss allowed the passive routing section to remain long.` → Propagation loss thấp cho phép đoạn định tuyến thụ động dài.
**Liên kết tiếng Hàn:** `전파 손실`.

## 12. group velocity /ˈɡruːp vəˈlɑːsəti/
**Part of speech:** noun
**Core meaning (English):** the speed at which an optical pulse envelope or information pattern travels through a medium.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ envelope xung quang hoặc mẫu thông tin truyền trong môi trường.
**Grammar & collocations:** `group-velocity mismatch` — sai khác; `calculate a transit time` — tính thời gian truyền.
**Examples:** `Different group velocities caused the two wavelength channels to arrive at different times.` → Group velocity khác nhau làm hai kênh wavelength đến ở thời điểm khác nhau.
**Liên kết tiếng Hàn:** `군속도`.

## 13. delay spread /dɪˈleɪ spred/
**Part of speech:** noun
**Core meaning (English):** the range of arrival times produced when parts of a signal follow different propagation paths or velocities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian đến khác nhau khi các phần tín hiệu đi theo đường hoặc vận tốc khác nhau.
**Grammar & collocations:** `delay-spread estimate` — ước tính; `overlap adjacent symbols` — chồng symbol kề nhau.
**Examples:** `The receiver equalizer removed most of the delay spread from the multimode path.` → Equalizer receiver loại phần lớn delay spread của đường multimode.
**Liên kết tiếng Hàn:** `지연 확산`.

## 14. quality factor /ˈkwɑːləti ˈfæktər/
**Part of speech:** noun
**Core meaning (English):** a measure of how sharply a resonant structure stores energy relative to the energy it loses per cycle.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thước đo độ sắc của cộng hưởng so với năng lượng mất mỗi chu kỳ.
**Grammar & collocations:** `quality-factor estimate` — ước tính; `sharpen a resonance` — làm cộng hưởng sắc hơn.
**Examples:** `A high quality factor made the filter selective but more sensitive to temperature.` → Quality factor cao làm filter chọn lọc nhưng nhạy nhiệt hơn.
**Liên kết tiếng Hàn:** `품질 계수`.

## 15. coupling coefficient /ˈkʌplɪŋ ˌkoʊəˈfɪʃənt/
**Part of speech:** noun
**Core meaning (English):** a parameter describing how strongly energy transfers between adjacent modes, waveguides, or resonators.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tham số mô tả mức năng lượng truyền giữa mode, waveguide hoặc resonator kề nhau.
**Grammar & collocations:** `coupling-coefficient extraction` — trích xuất; `tune inter-waveguide transfer` — chỉnh truyền.
**Examples:** `The coupling coefficient set how quickly power moved into the ring.` → Coupling coefficient quyết định power chuyển vào ring nhanh thế nào.
**Liên kết tiếng Hàn:** `결합 계수`.

## 16. balanced detection /ˈbælənst dɪˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** detection that subtracts two matched photodetector outputs to suppress common-mode intensity noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép phát hiện trừ hai output detector ghép cặp để giảm nhiễu cường độ common-mode.
**Grammar & collocations:** `balanced-detection receiver` — receiver; `reject common-mode noise` — loại nhiễu chung.
**Examples:** `Balanced detection rejected source noise while preserving the differential signal.` → Detection cân bằng loại nhiễu nguồn mà giữ tín hiệu vi sai.
**Liên kết tiếng Hàn:** `평형 검출`.

## 17. transimpedance amplifier /ˌtrænzɪmˈpiːdəns ˈæmpləfaɪər/
**Part of speech:** noun
**Core meaning (English):** an amplifier that converts a photodiode's current into a voltage with controlled gain and bandwidth.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** amplifier đổi dòng photodiode thành điện áp với gain và bandwidth được kiểm soát.
**Grammar & collocations:** `transimpedance-amplifier noise` — nhiễu; `convert current to voltage` — đổi dòng thành áp.
**Examples:** `The transimpedance amplifier set the receiver's first gain and noise trade-off.` → TIA đặt đánh đổi gain và noise đầu tiên của receiver.
**Liên kết tiếng Hàn:** `트랜스임피던스 증폭기`.

## 18. photodiode dark current /ˈfoʊtoʊdaɪoʊd dɑːrk ˈkɜːrənt/
**Part of speech:** noun
**Core meaning (English):** current that flows through a photodiode in the absence of incident light.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dòng chạy qua photodiode khi không có ánh sáng tới.
**Grammar & collocations:** `photodiode-dark-current specification` — đặc tả; `reduce leakage` — giảm rò.
**Examples:** `Cooling lowered photodiode dark current and improved the weak-signal measurement.` → Làm lạnh giảm dark current của photodiode và cải thiện phép đo tín hiệu yếu.
**Liên kết tiếng Hàn:** `포토다이오드 암전류`.

## 19. avalanche gain /ˈævəlæntʃ ɡeɪn/
**Part of speech:** noun
**Core meaning (English):** multiplication of photocurrent caused by carrier impact ionization inside an avalanche photodiode.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sự nhân dòng quang do ion hóa va chạm của hạt tải trong avalanche photodiode.
**Grammar & collocations:** `avalanche-gain setting` — cài đặt; `bias a multiplication region` — phân cực vùng nhân.
**Examples:** `The control loop adjusted avalanche gain as the detector temperature changed.` → Vòng điều khiển chỉnh avalanche gain khi nhiệt detector thay đổi.
**Liên kết tiếng Hàn:** `애벌랜치 이득`.

## 20. gain bandwidth /ɡeɪn ˈbændwɪdθ/
**Part of speech:** noun
**Core meaning (English):** the frequency range over which an amplifier maintains its specified gain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dải tần mà amplifier duy trì gain được đặc tả.
**Grammar & collocations:** `gain-bandwidth trade-off` — đánh đổi; `preserve a flat response` — giữ đáp ứng phẳng.
**Examples:** `The designer widened gain bandwidth without making the front end unstable.` → Nhà thiết kế mở rộng gain bandwidth mà không làm front end mất ổn định.
**Liên kết tiếng Hàn:** `이득 대역폭`.

## Review in context

An optical receiver approaches the **quantum limit** only after controlling **frequency chirp**, **modulation depth**, and **link margin**. **Fiber dispersion** and **polarization mode dispersion** are modeled with a **mode solver**, a **confinement factor**, and an **effective mode area**; **bend loss**, **propagation loss**, **group velocity**, and **delay spread** determine the physical route. A resonator's **quality factor** and **coupling coefficient** shape filtering, while **balanced detection**, a **transimpedance amplifier**, low **photodiode dark current**, controlled **avalanche gain**, and adequate **gain bandwidth** determine the receiver front end.

**Bản dịch tiếng Việt:** Receiver quang chỉ tiến gần **quantum limit** sau khi kiểm soát **frequency chirp**, **modulation depth** và **link margin**. **Fiber dispersion** và **polarization mode dispersion** được mô hình hóa bằng **mode solver**, **confinement factor** và **effective mode area**; **bend loss**, **propagation loss**, **group velocity** và **delay spread** quyết định tuyến vật lý. **Quality factor** và **coupling coefficient** của resonator định hình việc lọc, còn **balanced detection**, **transimpedance amplifier**, **photodiode dark current** thấp, **avalanche gain** được kiểm soát và **gain bandwidth** đủ rộng quyết định front end của receiver.
