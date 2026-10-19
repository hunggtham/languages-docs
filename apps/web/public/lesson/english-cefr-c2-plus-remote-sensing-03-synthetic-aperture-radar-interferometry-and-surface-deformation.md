# C2+ Vocabulary 03 — Spaceborne InSAR interferometry, phase unwrapping algorithms, and millimeter surface displacement tracking

This lesson covers advanced spaceborne radar remote sensing, focusing on Synthetic Aperture Radar interferometry (InSAR), phase unwrapping, atmospheric corrections, and millimeter-scale surface deformation monitoring.

---

## 1. repeat-pass interferometric phase difference /rɪˈpiːt pɑːs ˌɪntəfəˈrɒmɪtrɪk feɪz ˈdɪfrəns/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as the primary measurement variable in InSAR data processing pipelines.

**Core meaning — English:** The phase change computed by subtracting the radar backscatter phase values of two Synthetic Aperture Radar acquisitions collected over the exact same orbital position at different times.

**Core meaning & mental image — Tiếng Việt:** Hiệu pha giao thoa lặp quỹ đạo (độ lệch pha sóng radar giữa hai lần quét qua cùng một vị trí; giống như việc so sánh hai sóng nước xô vào bờ ở hai thời điểm để đo mức dâng của triều cường).

**Grammar & collocations:** `compute the repeat-pass interferometric phase difference` — tính toán hiệu pha giao thoa lặp quỹ đạo; `unwrap the interferometric phase difference` — giải gói hiệu pha giao thoa; `residual phase difference` — hiệu pha dư.

**Register & nuance:** Highly technical remote sensing and geodesy terminology. Essential for measuring co-seismic slip, subsidence, and landslides.

**Examples:** The repeat-pass interferometric phase difference reveals centimeter-scale surface deformation following the tectonic earthquake. → Hiệu pha giao thoa lặp quỹ đạo cho thấy sự biến dạng bề mặt quy mô centimet sau trận động đất kiến ​​tạo.

**Liên kết tiếng Hàn:** 반복 패스 간섭 위상차 (---干涉位相差) — hiệu pha giao thoa lặp quỹ đạo

---

## 2. coherence loss temporal decorrelation /kəʊˈhɪərəns lɒs ˈtɛmpərəl ˌdiːkɒrəˈleɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase`. Acts as a primary error source and limitation in radar interferometry.

**Core meaning — English:** The degradation of interferometric phase quality over time caused by physical changes in surface scattering properties, vegetation growth, or soil moisture between radar acquisitions.

**Core meaning & mental image — Tiếng Việt:** Sự mất đồng bộ theo thời gian do suy giảm độ coherence (hiện tượng tín hiệu radar bị nhiễu do cảnh vật thay đổi; giống như nhìn qua tấm kính bị mờ đục dần theo năm tháng).

**Grammar & collocations:** `suffer from temporal decorrelation` — chịu ảnh hưởng bởi sự mất đồng bộ theo thời gian; `mitigate temporal decorrelation` — giảm thiểu sự mất đồng bộ theo thời gian; `severe coherence loss` — sự mất đồng bộ nghiêm trọng.

**Register & nuance:** Standard remote sensing terminology. Contrasts with spatial decorrelation and thermal noise decorrelation.

**Examples:** Rapid vegetation growth in tropical rainforests causes severe coherence loss and temporal decorrelation in C-band InSAR imagery. → Sự phát triển thực vật nhanh chóng ở các khu rừng mưa nhiệt đới gây ra sự mất đồng bộ nghiêm trọng trong hình ảnh InSAR băng tần C.

**Liên kết tiếng Hàn:** 시간적 비상관성 (時間적非相關性) — sự mất đồng bộ theo thời gian (temporal decorrelation)

---

## 3. minimum cost flow phase unwrapping /ˈmɪnɪməm kɒst fləʊ feɪz ʌnˈræpɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase`. Designates a mathematical optimization algorithm used in InSAR data processing.

**Core meaning — English:** A network-flow optimization algorithm used to resolve $2\pi$ phase ambiguities in interferograms by minimizing the cumulative cost of phase jumps across connected pixels.

**Core meaning & mental image — Tiếng Việt:** Thuật toán giải gói pha dòng chi phí tối thiểu (phương pháp toán học khôi phục giá trị pha thực từ các góc pha bị gói gọn trong khoảng $2\pi$; giống như việc gỡ cuộn dây thừng bị xoắn rối sao cho tốn ít công sức nhất).

**Grammar & collocations:** `perform minimum cost flow phase unwrapping` — thực hiện giải gói pha dòng chi phí tối thiểu; `robust minimum cost flow algorithm` — thuật toán dòng chi phí tối thiểu mạnh mẽ; `phase unwrapping error` — lỗi giải gói pha.

**Register & nuance:** Core computational geophysics term. Essential for converting wrapped modulo-$2\pi$ phase maps into continuous displacement maps.

**Examples:** Minimum cost flow phase unwrapping successfully resolved the steep phase gradients across the fault rupture zone. → Thuật toán giải gói pha dòng chi phí tối thiểu đã giải quyết thành công các gradient pha dốc băng qua vùng đứt gãy.

**Liên kết tiếng Hàn:** 최소 비용 유량 위상 래핑 해제 — giải gói pha dòng chi phí tối thiểu (MCF)

---

## 4. persistent scatterer interferometry /pəˈsɪstənt ˈskætərɪf ˌɪntəfəˈrɒmɪtri/

**Loại từ & vị trí trong câu:** `noun phrase`. Represents an advanced multi-temporal radar interferometric technique.

**Core meaning — English:** An advanced SAR processing technique that analyzes time-series data from numerous radar acquisitions to isolate stable, point-like radar reflectors (such as buildings and rocks), overcoming temporal decorrelation.

**Core meaning & mental image — Tiếng Việt:** Giao thoa kế điểm phản xạ bền vững (kỹ thuật phân tích chuỗi thời gian các điểm phản xạ ổn định; giống như việc theo dõi các ngọn hải đăng không đổi giữa vùng biển khơi biến động).

**Grammar & collocations:** `apply persistent scatterer interferometry` — áp dụng giao thoa kế điểm phản xạ bền vững; `persistent scatterer time-series analysis` — phân tích chuỗi thời gian điểm phản xạ bền vững; `PSI subsidence velocity map` — bản đồ vận tốc lún PSI.

**Register & nuance:** Widely used in urban geotechnics and infrastructure monitoring (abbreviated as PSI).

**Examples:** Persistent scatterer interferometry detected millimeter-scale urban subsidence caused by deep groundwater extraction. → Giao thoa kế điểm phản xạ bền vững đã phát hiện sự lún đô thị quy mô milimet do việc khai thác nước ngầm sâu.

**Liên kết tiếng Hàn:** 영구 산란체 간섭법 (永久散亂體干涉法) — giao thoa kế điểm phản xạ bền vững (PSI)

---

## 5. line-of-sight volcanic deformation vectors /laɪn ɒv saɪt vɒlˈkænɪk ˌdiːfɔːˈmeɪʃən ˈvɛktəz/

**Loại từ & vị trí trong câu:** `noun phrase`. Denotes directional ground movement measurements along the radar beam axis.

**Core meaning — English:** Displacement measurements directed along the radar sensor's line-of-sight vector, capturing inflation or deflation of magmatic plumbing systems beneath active volcanoes.

**Core meaning & mental image — Tiếng Việt:** Các véc-tơ biến dạng núi lửa theo tầm nhìn của radar (phép đo dịch chuyển bề mặt dọc theo hướng chiếu của sóng radar; giống như tia laser chiếu thẳng góc để đo sự phồng xẹp của bề mặt bong bóng).

**Grammar & collocations:** `measure line-of-sight volcanic deformation vectors` — đo các véc-tơ biến dạng núi lửa theo tầm nhìn của radar; `project line-of-sight vectors into 3D displacement` — chiếu các véc-tơ tầm nhìn thành chuyển động 3D.

**Register & nuance:** Crucial for volcanology and disaster early warning systems. InSAR measures only 1D projection along the radar line of sight.

**Examples:** Inversion of line-of-sight volcanic deformation vectors constrained the geometry of the inflating magma chamber at depth. → Sự đảo ngược các véc-tơ biến dạng núi lửa theo tầm nhìn của radar đã giới hạn hình học của buồng magma đang phồng lên ở độ sâu.

**Liên kết tiếng Hàn:** 시선 방향 화산 변형 벡터 — véc-tơ biến dạng núi lửa theo hướng tầm nhìn (LOS)

---

## 6. atmospheric delay tropospheric stratification correction /ˌæsməsˈfɪrɪk dɪˈleɪ ˌtrəʊpəˈsfɪrɪk ˌstrætɪfɪˈkeɪʃən kəˈrɛkʃn/

**Loại từ & vị trí trong câu:** `noun phrase`. Refers to error removal procedures in radar interferograms caused by atmospheric humidity and temperature gradients.

**Core meaning — English:** The mathematical removal of phase artifacts induced by spatial and temporal variations in tropospheric water vapor, pressure, and temperature that mimic ground deformation in InSAR images.

**Core meaning & mental image — Tiếng Việt:** Hiệu chỉnh phân tầng đối lưu do độ trễ khí quyển (việc loại bỏ sai số pha do hơi nước và nhiệt độ trong tầng đối lưu; giống như lau sạch lớp sương mù bám trên ống kính máy ảnh).

**Grammar & collocations:** `apply atmospheric delay tropospheric stratification correction` — áp dụng hiệu chỉnh phân tầng đối lưu do độ trễ khí quyển; `tropospheric phase delay mitigation` — giảm thiểu độ trễ pha đối lưu; `ERA5 numerical weather model correction` — hiệu chỉnh mô hình thời tiết số ERA5.

**Register & nuance:** Essential step in high-precision geodetic InSAR processing to prevent mistaking weather patterns for tectonic movement.

**Examples:** Integrating GPS precipitable water vapor data improved the atmospheric delay tropospheric stratification correction in mountainous regions. → Việc tích hợp dữ liệu hơi nước có thể kết tủa của GPS đã cải thiện việc hiệu chỉnh phân tầng đối lưu do độ trễ khí quyển ở các vùng núi.

**Liên kết tiếng Hàn:** 대기 지연 대류권 성층화 보정 — hiệu chỉnh phân tầng đối lưu do độ trễ khí quyển

---

## 7. synthetic aperture radar amplitude imagery /sɪnˈθɛtɪk ˈæpətʃə ˈrɑːdɑː ˈæmplɪtjuːd ˈɪmɪdʒəri/

**Loại từ & vị trí trong câu:** `noun phrase`. Denotes intensity-based radar data products used for mapping surface backscatter.

**Core meaning — English:** Image products generated from the backscattered radar power return, reflecting surface roughness, dielectric constant, and geometric orientation rather than phase change.

**Core meaning & mental image — Tiếng Việt:** Hình ảnh biên độ radar khẩu độ tổng hợp (ảnh cường độ tín hiệu phản xạ radar dựa trên độ nhám bề mặt; giống như bức ảnh đen trắng chụp bằng ánh sáng phản chiếu).

**Grammar & collocations:** `analyze synthetic aperture radar amplitude imagery` — phân tích hình ảnh biên độ radar khẩu độ tổng hợp; `radar backscatter intensity` — cường độ phản xạ ngược radar; `amplitude change detection` — phát hiện thay đổi biên độ.

**Register & nuance:** Used alongside interferometric phase for flood extent mapping, oil spill detection, and damage assessment.

**Examples:** Synthetic aperture radar amplitude imagery enables rapid flood extent mapping beneath thick cloud cover during tropical storms. → Hình ảnh biên độ radar khẩu độ tổng hợp cho phép lập bản đồ ngập lụt nhanh chóng bên dưới lớp mây dày trong các cơn bão nhiệt đới.

**Liên kết tiếng Hàn:** 합성개구레이더 진폭 영상 — ảnh biên độ radar khẩu độ tổng hợp (SAR amplitude)

---

## 8. baseline decorrelation /ˈbeɪslaɪn ˌdiːkɒrəˈleɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase`. Designates the loss of interferometric coherence caused by spatial separation between orbit tracks.

**Core meaning — English:** The reduction of phase correlation between two SAR acquisitions resulting from a non-zero physical distance (spatial baseline) between the satellite orbital positions during data capture.

**Core meaning & mental image — Tiếng Việt:** Sự mất đồng bộ do đường cơ sở (hiện tượng suy giảm chất lượng giao thoa do khoảng cách quỹ đạo giữa hai lần bay; giống như việc chụp ảnh stereo từ hai góc nhìn quá xa khiến việc ghép hình bị lệch).

**Grammar & collocations:** `exceed the critical baseline decorrelation limit` — vượt quá giới hạn mất đồng bộ đường cơ sở tới hạn; `perpendicular baseline component` — thành phần đường cơ sở vuông góc; `minimize baseline decorrelation` — giảm thiểu mất đồng bộ đường cơ sở.

**Register & nuance:** Fundamental geometric constraint in satellite mission design and InSAR pair selection.

**Examples:** Keeping the perpendicular baseline small prevents excessive baseline decorrelation in rugged mountainous terrain. → Việc giữ cho đường cơ sở vuông góc nhỏ giúp ngăn ngừa sự mất đồng bộ đường cơ sở quá mức ở địa hình núi hiểm trở.

**Liên kết tiếng Hàn:** 기선 비상관성 (基線非相關性) — sự mất đồng bộ do đường cơ sở (baseline decorrelation)

---

## 9. differential interferogram /ˌdɪfəˈrɛnʃəl ˌɪntəfəˈrɒɡræm/

**Loại từ & vị trí trong câu:** `noun phrase`. Acts as the primary raster output product showing surface displacement fringes.

**Core meaning — English:** An interferogram produced by subtracting topographic phase contributions (using a digital elevation model) and orbital artifacts from the wrapped interferometric phase.

**Core meaning & mental image — Tiếng Việt:** Biểu đồ giao thoa vi sai (bản đồ thể hiện các vòng vân giao thoa dịch chuyển bề mặt sau khi trừ đi địa hình; giống như bản đồ đồng mức thể hiện độ biến dạng thực tế của mặt đất).

**Grammar & collocations:** `generate a differential interferogram` — tạo biểu đồ giao thoa vi sai; `unwrap the differential interferogram` — giải gói biểu đồ giao thoa vi sai; `fringes in the differential interferogram` — các vòng vân trong biểu đồ giao thoa vi sai.

**Register & nuance:** Core data product in radar interferometry used for seismic, volcanic, and subsidence analysis.

**Examples:** Each full color cycle (fringe) in the differential interferogram represents exactly half the radar wavelength of ground displacement. → Mỗi chu kỳ màu hoàn chỉnh (vân) trong biểu đồ giao thoa vi sai đại diện cho đúng một nửa bước sóng radar dịch chuyển mặt đất.

**Liên kết tiếng Hàn:** 차분 간섭도 (差分干涉圖) — biểu đồ giao thoa vi sai (differential interferogram)

---

## 10. radar wavelength band allocation /ˈrɑːdɑː ˈweɪvŋlɛŋθ bænd ˌæləˈkeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase`. Refers to the standardized radio frequency bands assigned for Earth observation radar sensors.

**Core meaning — English:** The official designation of specific electromagnetic spectrum bands (such as X, C, L, and S bands) used for spaceborne radar missions, determining penetration depth and sensitivity to surface scatterers.

**Core meaning & mental image — Tiếng Việt:** Phân bổ dải tần số bước sóng radar (việc quy hoạch các dải sóng điện từ chuyên dụng cho vệ tinh radar; giống như việc chia các làn đường giao thông riêng cho xe đạp, ô tô và xe tải).

**Grammar & collocations:** `optimize radar wavelength band allocation` — tối ưu hóa phân bổ dải bước sóng radar; `L-band radar penetration through vegetation canopy` — radar băng tần L xuyên qua tán thực vật; `X-band high-resolution radar imaging` — hình ảnh radar độ phân giải cao băng tần X.

**Register & nuance:** Fundamental engineering and mission planning concept. L-band penetrates vegetation better than C or X band.

**Examples:** Radar wavelength band allocation dictates whether microwaves penetrate vegetation canopy or scatter strictly from the top of the canopy. → Phân bổ dải bước sóng radar quyết định việc sóng vi ba xuyên qua tán thực vật hay chỉ phản xạ từ đỉnh tán.

**Liên kết tiếng Hàn:** 레이더 파장 대역 할당 — phân bổ dải bước sóng radar

---

## 11. multi-temporal synthetic aperture radar stacking /ˌmʌlti ˈtɛmpərəl sɪnˈθɛtɪk ˈæpətʃə ˈrɑːdɑː ˈstækɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase`. Designates advanced time-series analysis methods combining dozens or hundreds of radar acquisitions.

**Core meaning — English:** A processing methodology that stacks numerous coregistered interferograms over time to extract linear deformation rates and nonlinear displacement time series while suppressing atmospheric noise.

**Core meaning & mental image — Tiếng Việt:** Chồng lớp radar khẩu độ tổng hợp đa thời gian (phương pháp gộp hàng loạt ảnh giao thoa theo thời gian để lọc nhiễu; giống như việc chồng hàng chục bức ảnh phơi sáng để làm rõ chi tiết mờ).

**Grammar & collocations:** `perform multi-temporal synthetic aperture radar stacking` — thực hiện chồng lớp radar khẩu độ tổng hợp đa thời gian; `time-series stacking technique` — kỹ thuật chồng lớp chuỗi thời gian; `SBAS and PSI multi-temporal stacking` — chồng lớp đa thời gian SBAS và PSI.

**Register & nuance:** Modern standard for surface deformation monitoring, superseding single-pair differential interferometry.

**Examples:** Multi-temporal synthetic aperture radar stacking reduces atmospheric noise by averaging out random tropospheric fluctuations across hundreds of acquisitions. → Việc chồng lớp radar khẩu độ tổng hợp đa thời gian làm giảm nhiễu khí quyển bằng cách lấy trung bình các dao động đối lưu ngẫu nhiên qua hàng trăm lần thu nhận.

**Liên kết tiếng Hàn:** 다중 시계열 합성개구레이더 스태킹 — chồng lớp radar khẩu độ tổng hợp đa thời gian (multi-temporal stacking)

---

## 12. digital elevation model phase simulation /ˈdɪdʒɪtl ˌɛlɪˈveɪʃən ˈmɒdəl feɪz ˌsɪmjuˈleɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase`. Describes the computational modeling of topographic phase contributions in InSAR processing.

**Core meaning — English:** The synthetic generation of an expected interferometric phase map derived from an external topographic elevation database to remove the flat-earth and terrain-induced phase fringes.

**Core meaning & mental image — Tiếng Việt:** Mô phỏng pha mô hình độ cao kỹ thuật số (việc tính toán trước bản đồ pha địa hình từ dữ liệu DEM để loại bỏ ảnh hưởng của độ cao núi đồi; giống như việc vẽ bản đồ 3D địa hình để trừ đi độ cao thực tế).

**Grammar & collocations:** `subtract digital elevation model phase simulation` — trừ đi mô phỏng pha mô hình độ cao kỹ thuật số; `DEM error correction` — hiệu chỉnh lỗi DEM; `topographic phase removal` — loại bỏ pha địa hình.

**Register & nuance:** Crucial processing step in differential interferometry to isolate actual surface deformation from topography.

**Examples:** High-resolution digital elevation model phase simulation is essential for accurate topographic phase removal in steep alpine terrain. → Mô phỏng pha mô hình độ cao kỹ thuật số độ phân giải cao là thiết yếu để loại bỏ pha địa hình chính xác ở địa hình núi cao dốc đứng.

**Liên kết tiếng Hàn:** 수치 표고 모델 위상 시뮬레이션 — mô phỏng pha mô hình độ cao kỹ thuật số (DEM simulation)

---

## 13. small baseline subset algorithm /smɔːl ˈbeɪslaɪn ˈsʌbsɪt ˈælɡərɪðm/

**Loại từ & vị trí trong câu:** `noun phrase`. Represents a widely used time-series InSAR analysis algorithm.

**Core meaning — English:** A time-series InSAR processing approach that links SAR acquisitions into small baseline pairs to minimize decorrelation effects, solving for cumulative surface deformation using least-squares inversion.

**Core meaning & mental image — Tiếng Việt:** Thuật toán tập hợp đường cơ sở nhỏ (phương pháp liên kết các cặp ảnh radar có khoảng cách quỹ đạo ngắn để giảm thiểu mất đồng bộ; giống như việc nối các bước chân ngắn, vững chắc thay vì bước dài dễ ngã).

**Grammar & collocations:** `process data using the small baseline subset algorithm` — xử lý dữ liệu bằng thuật toán tập hợp đường cơ sở nhỏ; `SBAS time-series deformation rate` — tốc độ biến dạng chuỗi thời gian SBAS; `distributed scatterer SBAS analysis` — phân tích SBAS điểm phân tán phân bố.

**Register & nuance:** Commonly abbreviated as SBAS. Highly effective for monitoring distributed deformation over broad non-urban areas with vegetation.

**Examples:** The small baseline subset algorithm successfully mapped slow landslide movements across the rural valley over a five-year period. → Thuật toán tập hợp đường cơ sở nhỏ đã lập bản đồ thành công các chuyển động lở đất chậm trên thung lũng nông thôn trong khoảng thời gian năm năm.

**Liên kết tiếng Hàn:** 소기선 부분집합 알고리즘 ( SBAS ) — thuật toán tập hợp đường cơ sở nhỏ (SBAS)

---

## 14. radar satellite orbital state vector precision /ˈrɑːdɑː ˈsætəlaɪt ˈɔːbɪtəl steɪt ˈvɛktə prɪˈsɪʒən/

**Loại từ & vị trí trong câu:** `noun phrase`. Denotes the positional accuracy data provided for satellite tracking.

**Core meaning — English:** The positional and velocity accuracy of satellite ephemeris data (such as precise orbit determination products) required to calculate accurate flat-earth phase fringes in InSAR processing.

**Core meaning & mental image — Tiếng Việt:** Độ chính xác véc-tơ trạng thái quỹ đạo vệ tinh radar (chất lượng dữ liệu tọa độ và vận tốc đường bay của vệ tinh; giống như tọa độ GPS cực kỳ chính xác của một chiếc máy bay đang bay).

**Grammar & collocations:** `improve radar satellite orbital state vector precision` — cải thiện độ chính xác véc-tơ trạng thái quỹ đạo vệ tinh radar; `precise orbit ephemeris` — lịch thiên thể quỹ đạo chính xác; `orbital ramp error` — lỗi dốc quỹ đạo.

**Register & nuance:** Critical for preventing orbital ramps and large residual phase gradients in differential interferograms.

**Examples:** Utilizing precise science orbit files ensures high radar satellite orbital state vector precision, eliminating spurious long-wavelength phase ramps. → Việc sử dụng các tệp quỹ đạo khoa học chính xác đảm bảo độ chính xác véc-tơ trạng thái quỹ đạo vệ tinh radar cao, loại bỏ các dốc pha bước sóng dài giả mạo.

**Liên kết tiếng Hàn:** 레이더 위성 궤도 상태 벡터 정밀도 — độ chính xác véc-tơ trạng thái quỹ đạo vệ tinh radar

---

## 15. radar signal backscatter intensity coefficient /ˈrɑːdɑː ˈsɪɡnəl ˈbækˌskætə ɪnˈtɛnsɪti ˌkəʊɪˈfɪʃənt/

**Loại từ & vị trí trong câu:** `noun phrase`. Represents the normalized radar cross-section of a distributed target.

**Core meaning — English:** A quantitative measure of how much radar energy is reflected back to the sensor from a unit surface area, commonly expressed in decibels ($\sigma^0$).

**Core meaning & mental image — Tiếng Việt:** Hệ số cường độ phản xạ ngược tín hiệu radar (đại lượng định lượng mức độ phản hồi sóng radar của bề mặt; giống như độ phản quang của biển báo giao thông khi chiếu đèn pha).

**Grammar & collocations:** `calculate the radar signal backscatter intensity coefficient` — tính toán hệ số cường độ phản xạ ngược tín hiệu radar; `normalized radar cross section sigma-zero` — tiết diện phản xạ radar chuẩn hóa sigma-zero; `backscatter coefficient calibration` — hiệu chuẩn hệ số phản xạ ngược.

**Register & nuance:** Fundamental radiometrice parameter in radar remote sensing for soil moisture, biomass, and roughness estimation.

**Examples:** Variations in the radar signal backscatter intensity coefficient allowed researchers to map saturated soils following heavy monsoon rainfall. → Các biến động trong hệ số cường độ phản xạ ngược tín hiệu radar cho phép các nhà nghiên cứu lập bản đồ đất bão hòa sau lượng mưa gió mùa lớn.

**Liên kết tiếng Hàn:** 레이더 신호 후방산란 강도 계수 — hệ số cường độ phản xạ ngược tín hiệu radar ($\sigma^0$)

---

## 16. radar beam slant range geometry /ˈrɑːdɑː biːm slɑːnt ˈreɪnʒ ˈdʒɒmɪtri/

**Loại từ & vị trí trong câu:** `noun phrase`. Describes the coordinate system of side-looking radar imaging.

**Core meaning — English:** The geometric projection system of side-looking radar sensors where target positions are measured along the diagonal line-of-sight distance from the antenna to the ground feature rather than horizontal map coordinates.

**Core meaning & mental image — Tiếng Việt:** Hình học cự ly chéo chùm tia radar (hệ thống tọa độ đo khoảng cách nghiêng từ ăng-ten đến mặt đất; giống như sợi dây kéo chéo từ đỉnh tháp đến mặt đất).

**Grammar & collocations:** `transform from radar beam slant range geometry to ground range` — chuyển đổi từ hình học cự ly chéo chùm tia radar sang cự ly mặt đất; `slant range resolution` — độ phân giải cự ly chéo; `slant-to-ground range distortion` — méo hình cự ly chéo sang mặt đất.

**Register & nuance:** Fundamental characteristic of all SAR systems resulting in geometric distortions like foreshortening, layover, and shadowing.

**Examples:** Steep mountain slopes facing the radar sensor suffer severe geometric distortion in radar beam slant range geometry due to layover. → Các sườn núi dốc đối diện với cảm biến radar chịu sự biến dạng hình học nghiêm trọng trong hình học cự ly chéo chùm tia radar do hiện tượng chồng lấp (layover).

**Liên kết tiếng Hàn:** 레이더 빔 슬랜트 레인지(경사거리) 기하구조 — hình học cự ly chéo chùm tia radar

---

## 17. unwrapped phase gradient variance /ʌnˈræpt feɪz ˈɡreɪdiənt ˈvɛəriəns/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as a statistical quality metric for phase unwrapping reliability.

**Core meaning — English:** A statistical measure of the spatial variability of phase derivatives across an unwrapped interferogram, used to detect unwrapping errors, branch cuts, and noise discontinuities.

**Core meaning & mental image <- Tiếng Việt:** Phương sai gradient pha chưa gói (đại lượng thống kê đo độ biến động của đạo hàm pha; giống như độ gập ghềnh của con đường sau khi đã san lấp).

**Grammar & collocations:** `evaluate unwrapped phase gradient variance` — đánh giá phương sai gradient pha chưa gói; `high phase gradient variance threshold` — ngưỡng phương sai gradient pha cao; `phase discontinuity detection` — phát hiện đứt gãy pha.

**Register & nuance:** Advanced quality control metric in InSAR software pipelines to mask out unreliable unwrapped pixels.

**Examples:** Pixels exhibiting excessive unwrapped phase gradient variance were masked out to prevent blunders in the final displacement time series. → Các pixel thể hiện phương sai gradient pha chưa gói quá mức đã được che khuất để ngăn ngừa sai sót trong chuỗi thời gian dịch chuyển cuối cùng.

**Liên kết tiếng Hàn:** 래핑 해제된 위상 구배 분산 — phương sai gradient pha chưa gói

---

## 18. ionospheric Faraday rotation correction /ˌaɪənəˈsfɛrɪk ˈfærədeɪ rəʊˈteɪʃən kəˈrɛkʃn/

**Loại từ & vị trí trong câu:** `noun phrase`. Refers to polarization angle corrections for spaceborne radar waves passing through the ionosphere.

**Core meaning — English:** The mathematical adjustment applied to radar polarimetric data to remove the rotation of the electromagnetic wave polarization plane induced by Earth's magnetic field and free electrons in the ionosphere.

**Core meaning & mental image — Tiếng Việt:** Hiệu chỉnh sự quay Faraday tầng điện ly (việc điều chỉnh góc phân cực sóng radar bị xoay khi đi qua tầng điện ly; giống như điều chỉnh kính lọc phân cực khi ánh sáng bị khúc xạ qua môi trường từ tính).

**Grammar & collocations:** `apply ionospheric Faraday rotation correction` — áp dụng hiệu chỉnh sự quay Faraday tầng điện ly; `Faraday rotation angle estimation` — ước tính góc quay Faraday; `low-frequency L-band ionospheric distortion` — biến dạng tầng điện ly băng tần L tần số thấp.

**Register & nuance:** Particularly critical for low-frequency L-band SAR missions (like ALOS-2 and NISAR) operating during solar maximum periods.

**Examples:** Solar flare activity necessitated rigorous ionospheric Faraday rotation correction for the L-band InSAR time series. → Hoạt động bùng nổ mặt trời đòi hỏi phải hiệu chỉnh sự quay Faraday tầng điện ly nghiêm ngặt cho chuỗi thời gian InSAR băng tần L.

**Liên kết tiếng Hàn:** 전离층 패러데이 회전 보정 (電離層---回轉補正) — hiệu chỉnh sự quay Faraday tầng điện ly

---

## 19. co-seismic surface rupture displacement field /kəʊ ˈsaɪzmɪk ˈsɜːfɪs ˈrʌptʃə dɪˈspleɪsmənt fiːld/

**Loại từ & vị trí trong câu:** `noun phrase`. Denotes the spatial distribution of ground displacement caused immediately by fault rupture during an earthquake.

**Core meaning — English:** The two-dimensional or three-dimensional vector field of permanent ground displacement mapped across a fault zone immediately following a major seismic event.

**Core meaning & mental image — Tiếng Việt:** Trường dịch chuyển đứt gãy bề mặt đồng địa chấn (bản đồ không gian các vết nứt và dịch chuyển mặt đất do động đất gây ra; giống như vết nứt gãy trên tấm kính lớn khi bị búa đập mạnh).

**Grammar & collocations:** `map the co-seismic surface rupture displacement field` — lập bản đồ trường dịch chuyển đứt gãy bề mặt đồng địa chấn; `fault slip distribution inversion` — đảo ngược phân bố trượt đứt gãy; `coseismic displacement fringes` — các vân dịch chuyển đồng địa chấn.

**Register & nuance:** Essential application of InSAR in earthquake seismology and tectonics, providing high spatial density data unavailable from seismic stations alone.

**Examples:** Pixel offset tracking and InSAR interferometry mapped the complex co-seismic surface rupture displacement field of the magnitude 7.8 earthquake. → Theo dõi độ lệch pixel và giao thoa kế InSAR đã lập bản đồ trường dịch chuyển đứt gãy bề mặt đồng địa chấn phức tạp của trận động đất mạnh 7.8 độ.

**Liên kết tiếng Hàn:** 동지진 지표 파열 변형장 (動地震地表破裂變形場) — trường dịch chuyển đứt gãy bề mặt đồng địa chấn

---

## 20. radar shadow and layover masking filter /ˈrɑːdɑː ˈʃædəʊ ænd ˈleɪəʊvə ˈmɑːskɪŋ ˈfɪltə/

**Loại từ & vị trí trong câu:** `noun phrase`. Represents an image processing filter used to exclude distorted pixels in rugged terrain.

**Core meaning — English:** A computational algorithm that identifies and removes geometric radar artifacts—such as areas where the radar beam cannot illuminate the slope (shadow) or where top and bottom features compress into the same pixels (layover)—from InSAR stacks.

**Core meaning & mental image — Tiếng Việt:** Bộ lọc che khuất vùng bóng râm và chồng lấp radar (thuật toán loại bỏ các vùng ảnh bị biến dạng nặng do địa hình dốc; giống như việc bôi xóa những góc khuất tối tăm và nhòe nhoẹt trên bức ảnh chụp nhanh).

**Grammar & collocations:** `apply a radar shadow and layover masking filter` — áp dụng bộ lọc che khuất vùng bóng râm và chồng lấp radar; `topographic layover mask` — mặt nạ chồng lấp địa hình; `exclude radar shadow pixels` — loại trừ các pixel bóng râm radar.

**Register & nuance:** Essential preprocessing step to prevent erroneous phase unwrapping and decorrelation in mountainous topography.

**Examples:** Integrating a digital elevation model enables precise radar shadow and layover masking filter execution prior to phase unwrapping. → Việc tích hợp mô hình độ cao kỹ thuật số cho phép thực hiện bộ lọc che khuất vùng bóng râm và chồng lấp radar chính xác trước khi giải gói pha.

**Liên kết tiếng Hàn:** radar 음영 및 레이오버 마스킹 필터 — bộ lọc che khuất vùng bóng râm và chồng lấp radar

---

## 21. synthetic aperture radar polarimetry /sɪnˈθɛtɪk ˈæpətʃə ˈrɑːdɑː ˌpəʊləˈrɪmɪtri/

**Loại từ & vị trí trong câu:** `noun phrase`. Designates radar remote sensing techniques utilizing multiple polarization channels.

**Core meaning — English:** A radar imaging modality that transmits and receives electromagnetic waves in orthogonal polarization states (horizontal and vertical), generating scattering matrix data to characterize physical properties of targets.

**Core meaning & mental image — Tiếng Việt:** Phân cực kế radar khẩu độ tổng hợp (kỹ thuật thu phát sóng radar ở nhiều trạng thái phân cực khác nhau để phân tích cấu trúc vật lý; giống như đeo kính phân cực đa chiều để nhìn rõ các chi tiết ẩn bên trong vật thể).

**Grammar & collocations:** `acquire synthetic aperture radar polarimetry data` — thu thập dữ liệu phân cực kế radar khẩu độ tổng hợp; `quad-pol SAR scattering matrix` — ma trận tán xạ SAR bốn phân cực; `polarimetric target decomposition` — phân rã mục tiêu phân cực.

**Register & nuance:** Commonly abbreviated as PolSAR. Powerful tool for forest biomass estimation, agricultural crop classification, and soil moisture retrieval.

**Examples:** Synthetic aperture radar polarimetry distinguishes between surface scattering, double-bounce scattering, and volume scattering in forested ecosystems. → Ph phân cực kế radar khẩu độ tổng hợp phân biệt giữa tán xạ bề mặt, tán xạ phản xạ kép và tán xạ thể tích trong các hệ sinh thái rừng.

**Liên kết tiếng Hàn:** 합성개구레이더 편파계측 (合成開口---偏波計測) — phân cực kế radar khẩu độ tổng hợp (PolSAR)

---

## 22. ground subsidence groundwater depletion monitoring /ɡraʊnd səbˈsaɪdəns ˈɡraʊndwɔːtə dɪˈpliːʃən ˈmɒnɪtərɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase`. Denotes the geotechnical application of InSAR for tracking aquifer compaction.

**Core meaning — English:** The operational use of time-series radar interferometry to quantify land sinking rates caused by extensive subsurface water extraction and aquitard consolidation.

**Core meaning & mental image — Tiếng Việt:** Giám sát sụt lún mặt đất do khai thác cạn kiệt nước ngầm (việc sử dụng InSAR để theo dõi hiện tượng mặt đất sụt xuống do rút nước ngầm; giống như chiếc bánh xốp xẹp xuống khi bị ép cạn nước bên trong).

**Grammar & collocations:** `conduct ground subsidence groundwater depletion monitoring` — tiến hành giám sát sụt lún mặt đất do khai thác nước ngầm; `aquifer compaction rate mapping` — lập bản đồ tốc độ nén chặt tầng chứa nước; `InSAR-derived land subsidence` — sụt lún đất do InSAR dẫn xuất.

**Register & nuance:** Vital socio-economic application of geodetic InSAR in major agricultural and urban basins worldwide.

**Examples:** Regional ground subsidence groundwater depletion monitoring revealed alarming sinking rates exceeding ten centimeters per year in the agricultural valley. → Việc giám sát sụt lún mặt đất do khai thác cạn kiệt nước ngầm khu vực đã tiết lộ tốc độ sụt lún đáng báo động vượt quá mười cm mỗi năm trong thung lũng nông nghiệp.

**Liên kết tiếng Hàn:** 지하수 고갈에 따른 지반 침하 모니터링 — giám sát sụt lún mặt đất do cạn kiệt nước ngầm

---

## 23. radar interferometric phase unwrapping branch cut optimization /ˈrɑːdɑː ˌɪntəfəˈrɒmɪtrɪk feɪz ʌnˈræpɪŋ brɑːntʃ kʌt ˌɒptɪmaɪˈzeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase`. Refers to advanced topological algorithms used to handle phase residues and branch cuts.

**Core meaning — English:** A computational procedure in phase unwrapping that connects positive and negative phase residue pairs with branch cuts to prevent unwrapping errors from propagating across noisy interferogram regions.

**Core meaning & mental image — Tiếng Việt:** Tối ưu hóa đường cắt nhánh giải gói pha giao thoa radar (thuật toán ngăn chặn lỗi lan truyền bằng cách tạo các đường rào cản quanh điểm nhiễu pha; giống như việc dựng tường ngăn dòng nước lũ không cho tràn lan sang các khu vực khác).

**Grammar & collocations:** `perform radar interferometric phase unwrapping branch cut optimization` — thực hiện tối ưu hóa đường cắt nhánh giải gói pha giao thoa radar; `branch cut placement algorithm` — thuật toán đặt đường cắt nhánh; `residue tree connection` — kết nối cây dư lượng.

**Register & nuance:** Classic algorithmic component in branch-cut phase unwrapping methods (such as Goldstein's algorithm).

**Examples:** Radar interferometric phase unwrapping branch cut optimization successfully prevented phase error propagation around areas of decorrelation. → Tối ưu hóa đường cắt nhánh giải gói pha giao thoa radar đã ngăn chặn thành công sự lan truyền lỗi pha quanh các khu vực mất đồng bộ.

**Liên kết tiếng Hàn:** 레이더 간섭 위상 래핑 해제 분기점 최적화 — tối ưu hóa đường cắt nhánh giải gói pha giao thoa radar

---

## 24. persistent scatterer time-series velocity precision /pəˈsɪstənt ˈskætə ˈtaɪm ˈsiːriːz vəˈlɒsɪti prɪˈsɪʒən/

**Loại từ & vị trí trong câu:** `noun phrase`. Denotes the measurement accuracy of deformation rates derived from PSI analysis.

**Core meaning — English:** The statistical uncertainty and standard deviation associated with linear ground deformation velocity estimates extracted from multi-temporal persistent scatterer analysis.

**Core meaning & mental image — Tiếng Việt:** Độ chính xác vận tốc chuỗi thời gian điểm phản xạ bền vững (độ tin cậy thống kê của tốc độ dịch chuyển đo được từ PSI; giống như sai số đo đạc cực nhỏ của thiết bị trắc địa laser).

**Grammar & collocations:** `achieve high persistent scatterer time-series velocity precision` — đạt được độ chính xác vận tốc chuỗi thời gian điểm phản xạ bền vững cao; `millimeter-level velocity precision` — độ chính xác vận tốc cấp milimet; `standard error of deformation velocity` — sai số chuẩn của vận tốc biến dạng.

**Register & nuance:** Key performance indicator for geodetic radar interferometry networks monitoring critical infrastructure.

**Examples:** Processing over one hundred synthetic aperture radar acquisitions achieved a persistent scatterer time-series velocity precision of better than one millimeter per year. → Việc xử lý hơn một trăm lần thu nhận radar khẩu độ tổng hợp đã đạt được độ chính xác vận tốc chuỗi thời gian điểm phản xạ bền vững tốt hơn một milimet mỗi năm.

**Liên kết tiếng Hàn:** 영구 산란체 시계열 속도 정밀도 — độ chính xác vận tốc chuỗi thời gian điểm phản xạ bền vững

---

## 25. tropospheric precipitable water vapor delay mapping /ˌtrəʊpəˈsfɪrɪk ˈprɪsɪpɪtəbl ˈwɔːtə ˈveɪpə dɪˈleɪ ˈmæpɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase`. Refers to meteorological correction mapping techniques for radar interferometry.

**Core meaning — English:** The spatial mapping of path delays in radar microwaves caused by column-integrated atmospheric water vapor, utilizing GPS data, spectrometer measurements, or high-resolution numerical weather prediction models.

**Core meaning & mental image — Tiếng Việt:** Lập bản đồ độ trễ hơi nước có thể kết tủa trong đối lưu (việc dựng bản đồ sai số do hơi nước trong không khí tác động lên sóng radar; giống như vẽ biểu đồ mật độ mây ẩm để trừ đi ảnh hưởng của thời tiết).

**Grammar & collocations:** `perform tropospheric precipitable water vapor delay mapping` — thực hiện lập bản đồ độ trễ hơi nước có thể kết tủa trong đối lưu; `high-resolution water vapor correction map` — bản đồ hiệu chỉnh hơi nước độ phân giải cao; `spectroradiometer atmospheric delay estimation` — ước tính độ trễ khí quyển bằng máy đo phổ bức xạ.

**Register & nuance:** Essential state-of-the-art methodology for eliminating atmospheric artifacts in InSAR deformation products.

**Examples:** Tropospheric precipitable water vapor delay mapping using high-resolution weather models successfully removed turbulent atmospheric artifacts from the interferogram. → Việc lập bản đồ độ trễ hơi nước có thể kết tủa trong đối lưu sử dụng các mô hình thời tiết độ phân giải cao đã loại bỏ thành công các hiện vật khí quyển hỗn loạn khỏi biểu đồ giao thoa.

**Liên kết tiếng Hàn:** 대류권 가강수량 지연 매핑 — lập bản đồ độ trễ hơi nước có thể kết tủa đối lưu

---

## Review in context (Part 1: InSAR processing, phase unwrapping, and atmospheric corrections)
Modern spaceborne geodesy relies on the precise calculation of the **repeat-pass interferometric phase difference** between radar acquisitions to track millimeter-scale ground movements. However, data processing often contends with **coherence loss temporal decorrelation** caused by vegetation growth and environmental changes. To convert wrapped phase values into continuous displacement maps, algorithms such as **minimum cost flow phase unwrapping** are deployed, accompanied by strict **unwrapped phase gradient variance** checks to identify errors. When analyzing urban infrastructure or stable outcrops, **persistent scatterer interferometry** enables long-term deformation tracking with exceptional **persistent scatterer time-series velocity precision**. To isolate true ground motion from environmental artifacts, analysts must apply rigorous corrections including **atmospheric delay tropospheric stratification correction** and **tropospheric precipitable water vapor delay mapping**. Additionally, accounting for **radar satellite orbital state vector precision** prevents spurious long-wavelength phase ramps, while **digital elevation model phase simulation** removes topographic contributions to yield a clean **differential interferogram**.

**Bản dịch tiếng Việt:**
Trắc địa không gian hiện đại dựa trên việc tính toán chính xác **hiệu pha giao thoa lặp quỹ đạo** giữa các lần thu nhận radar để theo dõi các chuyển động mặt đất quy mô milimet. Tuy nhiên, việc xử lý dữ liệu thường phải đối mặt với **sự mất đồng bộ theo thời gian do suy giảm độ coherence** do sự phát triển của thực vật và các thay đổi môi trường. Để chuyển đổi các giá trị pha bị gói thành bản đồ dịch chuyển liên tục, các thuật toán như **thuật toán giải gói pha dòng chi phí tối thiểu** được triển khai, đi kèm với các kiểm tra **phương sai gradient pha chưa gói** nghiêm ngặt để phát hiện lỗi. Khi phân tích cơ sở hạ tầng đô thị hoặc các mỏm đá ổn định, **giao thoa kế điểm phản xạ bền vững** cho phép theo dõi biến dạng dài hạn với **độ chính xác vận tốc chuỗi thời gian điểm phản xạ bền vững** đặc biệt cao. Để tách biệt chuyển động mặt đất thực khỏi các hiện vật môi trường, các nhà phân tích phải áp dụng các hiệu chỉnh nghiêm ngặt bao gồm **hiệu chỉnh phân tầng đối lưu do độ trễ khí quyển** và **lập bản đồ độ trễ hơi nước có thể kết tủa trong đối lưu**. Ngoài ra, việc tính toán **độ chính xác véc-tơ trạng thái quỹ đạo vệ tinh radar** ngăn chặn các dốc pha bước sóng dài giả mạo, trong khi **mô phỏng pha mô hình độ cao kỹ thuật số** loại bỏ các đóng góp địa hình để tạo ra một **biểu đồ giao thoa vi sai** sạch sẽ.

---

## Review in context (Part 2: Deformation dynamics, multi-temporal stacking, and radar scattering physics)
In tectonic and volcanic regions, measuring **line-of-sight volcanic deformation vectors** and mapping the **co-seismic surface rupture displacement field** provides critical insights into magmatic intrusions and fault mechanics. Because radar systems operate in **radar beam slant range geometry**, complex topographies require a **radar shadow and layover masking filter** to exclude distorted pixels where geometry fails. Across broad agricultural and rural basins, the **small baseline subset algorithm** links numerous image pairs to form comprehensive **multi-temporal synthetic aperture radar stacking** datasets, effectively suppressing noise. Analysts also evaluate **synthetic aperture radar amplitude imagery** and calculate the **radar signal backscatter intensity coefficient** to assess surface roughness and moisture. Furthermore, advanced techniques such as **synthetic aperture radar polarimetry** reveal structural scattering mechanisms, while corrections for **baseline decorrelation**, **ionospheric Faraday rotation correction**, and **radar interferometric phase unwrapping branch cut optimization** ensure robust results across diverse operational **radar wavelength band allocation** scenarios, facilitating operational **ground subsidence groundwater depletion monitoring**.

**Bản dịch tiếng Việt:**
Ở các vùng kiến ​​tạo và núi lửa, việc đo lường **các véc-tơ biến dạng núi lửa theo tầm nhìn của radar** và lập bản đồ **trường dịch chuyển đứt gãy bề mặt đồng địa chấn** cung cấp những hiểu biết quan trọng về các xâm nhập mác-ma và cơ học đứt gãy. Vì các hệ thống radar hoạt động trong **hình học cự ly chéo chùm tia radar**, các địa hình phức tạp đòi hỏi phải có **bộ lọc che khuất vùng bóng râm và chồng lấp radar** để loại trừ các pixel bị biến dạng ở những nơi hình học thất bại. Trên khắp các lưu vực nông nghiệp và nông thôn rộng lớn, **thuật toán tập hợp đường cơ sở nhỏ** liên kết vô số cặp ảnh để tạo thành các tập dữ liệu **chồng lớp radar khẩu độ tổng hợp đa thời gian** toàn diện, giúp triệt tiêu nhiễu hiệu quả. Các nhà phân tích cũng đánh giá **hình ảnh biên độ radar khẩu độ tổng hợp** và tính toán **hệ số cường độ phản xạ ngược tín hiệu radar** để đánh giá độ nhám và độ ẩm bề mặt. Hơn nữa, các kỹ thuật tiên tiến như **phân cực kế radar khẩu độ tổng hợp** tiết lộ các cơ chế tán xạ cấu trúc, trong khi các hiệu chỉnh đối với **sự mất đồng bộ do đường cơ sở**, **hiệu chỉnh sự quay Faraday tầng điện ly**, và **tối ưu hóa đường cắt nhánh giải gói pha giao thoa radar** đảm bảo kết quả mạnh mẽ trên nhiều kịch bản **phân bổ dải tần số bước sóng radar** vận hành đa dạng, tạo điều kiện thuận lợi cho công tác **giám sát sụt lún mặt đất do khai thác cạn kiệt nước ngầm** hoạt động hiệu quả.
