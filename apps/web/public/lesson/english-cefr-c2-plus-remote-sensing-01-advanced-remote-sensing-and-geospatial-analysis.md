# C2+ Vocabulary — Advanced remote sensing and geospatial analysis

This lesson follows how radar, optical, hyperspectral, photogrammetric, and LiDAR data are calibrated, interpreted, and registered into spatial models. The network is **interferometric SAR → radar backscatter → speckle filtering → polarimetric decomposition → coherence map → differential interferometry → persistent scatterer → ground deformation → bidirectional reflectance distribution function → spectral angle mapper → endmember extraction → hyperspectral unmixing → structure from motion → stereo photogrammetry → lidar waveform → full-waveform lidar → point-cloud registration → simultaneous localization and mapping → ground control point → map algebra**.

## 1. interferometric SAR /ˌɪntərfəˈrɑmətrɪk ɛs eɪr/
**Part of speech:** noun
**Core meaning (English):** a radar technique that compares the phase of repeated synthetic-aperture observations to measure surface elevation or displacement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so phase giữa hai lần radar nhìn cùng surface để suy ra thay đổi rất nhỏ về height hoặc movement.
**Grammar & collocations:** `interferometric-SAR pair` — pair; `InSAR phase` — phase; `process interferometric SAR` — process.
**Examples:** `Interferometric SAR detected millimeter-scale subsidence around the pumping field.` → Interferometric SAR phát hiện sụt lún cỡ millimeter quanh khu vực bơm.
**Liên kết tiếng Hàn:** `간섭 합성개구레이더` — interferometric SAR.

## 2. radar backscatter /ˈreɪdɑr ˈbækˌskætər/
**Part of speech:** noun
**Core meaning (English):** the portion of transmitted radar energy scattered back toward the sensor by a surface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** năng lượng radar bật ngược về sensor; độ mạnh phụ thuộc roughness, moisture, geometry và vật liệu.
**Grammar & collocations:** `radar-backscatter coefficient` — coefficient; `strong backscatter` — backscatter mạnh; `interpret backscatter` — interpret.
**Examples:** `Wet rough soil produced stronger radar backscatter than the dry smooth field.` → Đất ướt rough tạo radar backscatter mạnh hơn field khô smooth.
**Liên kết tiếng Hàn:** `레이더 후방산란` — backscatter radar.

## 3. speckle filtering /ˈspɛkəl ˈfɪltərɪŋ/
**Part of speech:** noun
**Core meaning (English):** processing that reduces the granular interference pattern in coherent radar images while preserving meaningful spatial structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** làm mượt “hạt nhiễu” speckle trong radar image mà không xóa boundary thật.
**Grammar & collocations:** `adaptive speckle filtering` — filtering thích nghi; `speckle-filter window` — window; `apply a filter` — apply.
**Examples:** `Speckle filtering clarified the drainage pattern without erasing the narrow levees.` → Speckle filtering làm rõ drainage pattern mà không xóa levee hẹp.
**Liên kết tiếng Hàn:** `스펙클 필터링` — lọc speckle.

## 4. polarimetric decomposition /ˌpoʊlərəˈmɛtrɪk ˌdiːkɑmpəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** separation of a radar return into scattering mechanisms associated with surface, double-bounce, volume, or helix interactions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách radar return thành “vai trò” scattering khác nhau để đoán surface, trunk, building hoặc canopy.
**Grammar & collocations:** `polarimetric-decomposition component` — component; `Freeman–Durden decomposition` — decomposition; `decompose a covariance matrix` — decompose.
**Examples:** `Polarimetric decomposition separated building double-bounce from vegetation volume scattering.` → Polarimetric decomposition tách double-bounce của building khỏi volume scattering của vegetation.
**Liên kết tiếng Hàn:** `편파 분해` — polarimetric decomposition.

## 5. coherence map /ˈkoʊhɪrəns mæp/
**Part of speech:** noun
**Core meaning (English):** an image showing the similarity of radar phase between repeated observations of the same area.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản đồ cho biết phase còn “giữ ký ức” tốt không; vegetation movement hoặc snow có thể làm coherence thấp.
**Grammar & collocations:** `interferometric coherence map` — map; `low-coherence zone` — zone; `generate a coherence map` — generate.
**Examples:** `The coherence map highlighted stable roofs and unstable agricultural plots.` → Coherence map làm nổi bật mái nhà ổn định và plot nông nghiệp không ổn định.
**Liên kết tiếng Hàn:** `결맞음 지도` — coherence map.

## 6. differential interferometry /ˌdɪfəˈrɛnʃəl ˌɪntərfəˈrɑmətri/
**Part of speech:** noun
**Core meaning (English):** interferometric processing that removes the known topographic phase to isolate surface displacement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trừ phần phase do topography đã biết để phần còn lại nói về movement của surface.
**Grammar & collocations:** `differential-interferometry product` — product; `differential interferometric phase` — phase; `estimate displacement` — estimate.
**Examples:** `Differential interferometry isolated deformation caused by the underground tunnel.` → Differential interferometry tách deformation do đường hầm ngầm gây ra.
**Liên kết tiếng Hàn:** `차분 간섭측량` — differential interferometry.

## 7. persistent scatterer /pərˈsɪstənt ˈskætərər/
**Part of speech:** noun
**Core meaning (English):** a surface point that returns a stable radar signal over many acquisitions and can support precise displacement measurement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm “phản xạ bền” như roof, rock hoặc pole, giữ phase ổn định qua nhiều lần scan.
**Grammar & collocations:** `persistent-scatterer interferometry` — interferometry; `persistent-scatterer point` — point; `identify scatterers` — identify.
**Examples:** `Persistent scatterers on the bridge provided a long time series of structural movement.` → Persistent scatterers trên cầu cung cấp time series dài về movement kết cấu.
**Liên kết tiếng Hàn:** `영구 산란체` — persistent scatterer.

## 8. ground deformation /ɡraʊnd ˌdiːfɔrˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a change in the shape, elevation, or position of the ground surface caused by natural or human processes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** surface bị nâng, hạ, trượt hoặc co giãn; radar time series có thể đo deformation rất nhỏ.
**Grammar & collocations:** `ground-deformation map` — map; `monitor deformation` — monitor; `deformation rate` — rate.
**Examples:** `The ground deformation accelerated after groundwater extraction increased.` → Ground deformation tăng tốc sau khi groundwater extraction tăng.
**Liên kết tiếng Hàn:** `지반 변형` — deformation mặt đất.

## 9. bidirectional reflectance distribution function /ˌbaɪdəˈrɛkʃənəl rɪˈflɛktəns ˌdɪstrəˈbjuːʃən ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a function describing how light is reflected by a surface as a function of illumination and viewing directions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** surface không phản xạ giống nhau theo mọi góc; BRDF là bản đồ hướng của reflectance.
**Grammar & collocations:** `BRDF model` — model; `bidirectional-reflectance correction` — correction; `estimate BRDF` — estimate.
**Examples:** `The bidirectional reflectance distribution function explained why the same canopy looked brighter from another viewing angle.` → BRDF giải thích vì sao cùng canopy sáng hơn từ viewing angle khác.
**Liên kết tiếng Hàn:** `양방향 반사 분포 함수` — BRDF.

## 10. spectral angle mapper /ˈspɛktrəl ˈæŋɡəl ˈmæpər/
**Part of speech:** noun
**Core meaning (English):** a classifier that compares the angle between a pixel's spectrum and reference spectra, largely independent of overall brightness.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so “hướng” của spectral vector thay vì độ dài, nên cùng material vẫn nhận ra dù sáng tối khác.
**Grammar & collocations:** `spectral-angle-mapper classification` — classification; `reference endmember` — endmember; `set an angle threshold` — set.
**Examples:** `The spectral angle mapper identified exposed clay despite variable illumination.` → Spectral angle mapper nhận diện clay lộ dù illumination biến thiên.
**Liên kết tiếng Hàn:** `분광각 매퍼` — spectral angle mapper.

## 11. endmember extraction /ˈɛndˌmɛmbər ɪkˈstrækʃən/
**Part of speech:** noun
**Core meaning (English):** the process of finding representative pure or nearly pure material spectra from a hyperspectral image.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm “mẫu tinh khiết” của từng material trong ảnh để sau đó giải mixture ở pixel khác.
**Grammar & collocations:** `automatic endmember extraction` — extraction; `endmember spectrum` — spectrum; `extract candidate endmembers` — extract.
**Examples:** `Endmember extraction found vegetation, quartz, and dark-soil spectra in the scene.` → Endmember extraction tìm spectrum của vegetation, quartz và dark soil trong scene.
**Liên kết tiếng Hàn:** `엔드멤버 추출` — extraction endmember.

## 12. hyperspectral unmixing /ˌhaɪpərˈspɛktrəl ʌnˈmɪksɪŋ/
**Part of speech:** noun
**Core meaning (English):** estimation of the constituent materials and their proportions within each mixed hyperspectral pixel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách pixel hỗn hợp thành các endmember và abundance fraction, thay vì gán một nhãn duy nhất.
**Grammar & collocations:** `linear hyperspectral unmixing` — unmixing; `abundance fraction` — fraction; `unmix a pixel` — unmix.
**Examples:** `Hyperspectral unmixing estimated that the pixel contained sixty percent soil and forty percent dry vegetation.` → Hyperspectral unmixing estimate pixel có 60% soil và 40% dry vegetation.
**Liên kết tiếng Hàn:** `초분광 혼합 해제` — hyperspectral unmixing.

## 13. structure from motion /ˈstrʌktʃər frəm ˈmoʊʃən/
**Part of speech:** noun
**Core meaning (English):** a photogrammetric method that reconstructs camera poses and three-dimensional structure from overlapping images taken from different viewpoints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** camera tự “học” vị trí và dựng 3D từ sequence ảnh overlap, không cần biết pose ban đầu hoàn hảo.
**Grammar & collocations:** `structure-from-motion reconstruction` — reconstruction; `SfM point cloud` — point cloud; `recover camera poses` — recover.
**Examples:** `Structure from motion reconstructed the cliff after the survey drone captured overlapping photographs.` → Structure from motion dựng lại cliff sau khi drone chụp ảnh overlap.
**Liên kết tiếng Hàn:** `운동 기반 구조 복원` — structure from motion.

## 14. stereo photogrammetry /ˈstɛrioʊ ˌfoʊtəˈɡræmətri/
**Part of speech:** noun
**Core meaning (English):** measurement of three-dimensional geometry by matching features in overlapping images taken from different viewing positions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hai góc nhìn tạo parallax; matching điểm giữa chúng cho phép triangulate height và shape.
**Grammar & collocations:** `stereo-photogrammetric pair` — pair; `stereo matching` — matching; `derive elevation` — derive.
**Examples:** `Stereo photogrammetry derived a digital surface from the two aerial images.` → Stereo photogrammetry derive digital surface từ hai ảnh aerial.
**Liên kết tiếng Hàn:** `입체 사진측량` — stereo photogrammetry.

## 15. lidar waveform /ˈlaɪdɑr ˈweɪvfɔrm/
**Part of speech:** noun
**Core meaning (English):** the time-varying return signal recorded from a laser pulse as it interacts with surfaces at different heights.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không chỉ giữ một point; waveform giữ “dấu chân” toàn bộ pulse khi đi qua canopy, branch và ground.
**Grammar & collocations:** `full lidar waveform` — waveform; `waveform decomposition` — decomposition; `analyze the return` — analyze.
**Examples:** `The lidar waveform separated the canopy return from the ground return.` → Lidar waveform tách return của canopy khỏi return của ground.
**Liên kết tiếng Hàn:** `라이다 파형` — waveform LiDAR.

## 16. full-waveform lidar /fʊl ˈweɪvfɔrm ˈlaɪdɑr/
**Part of speech:** noun
**Core meaning (English):** LiDAR acquisition that preserves the complete returned energy profile of each laser pulse rather than recording only discrete detected points.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** full-waveform giữ cả curve năng lượng, nên có thêm thông tin về cấu trúc canopy và vật liệu.
**Grammar & collocations:** `full-waveform-lidar sensor` — sensor; `waveform digitization` — digitization; `process full-waveform lidar` — process.
**Examples:** `Full-waveform lidar distinguished low shrubs from the rough soil beneath them.` → Full-waveform lidar phân biệt shrub thấp với soil rough bên dưới.
**Liên kết tiếng Hàn:** `전체 파형 라이다` — full-waveform LiDAR.

## 17. point-cloud registration /ˈpɔɪnt klaʊd ˌrɛdʒɪˈstreɪʃən/
**Part of speech:** noun
**Core meaning (English):** alignment of point clouds from different scans into a common coordinate system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chồng nhiều đám mây điểm đúng vị trí, như ghép các bản scan thành một model 3D duy nhất.
**Grammar & collocations:** `point-cloud registration error` — error; `rigid registration` — registration cứng; `register overlapping scans` — register.
**Examples:** `Point-cloud registration aligned the mobile scan with the older airborne survey.` → Point-cloud registration căn mobile scan với airborne survey cũ.
**Liên kết tiếng Hàn:** `점군 정합` — registration point cloud.

## 18. simultaneous localization and mapping /ˌsaɪməlˈteɪniəs ˌloʊkəlaɪˈzeɪʃən ænd ˈmæpɪŋ/
**Part of speech:** noun
**Core meaning (English):** a method by which a moving platform estimates its own position while building a map of an unknown environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** robot vừa tự hỏi “mình đang ở đâu?” vừa vẽ map, dùng observation mới để sửa cả pose lẫn map.
**Grammar & collocations:** `visual simultaneous localization and mapping` — V-SLAM; `SLAM loop closure` — loop closure; `run SLAM` — run.
**Examples:** `Simultaneous localization and mapping let the rover navigate the cave without GPS.` → SLAM cho phép rover đi trong cave không có GPS.
**Liên kết tiếng Hàn:** `동시적 위치추정 및 지도작성` — SLAM.

## 19. ground control point /ɡraʊnd kənˈtroʊl pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a point with a precisely known ground location used to georeference, calibrate, or assess the accuracy of remotely sensed products.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “đinh ghim” có tọa độ thật, giúp kéo image/model vào đúng hệ coordinate và kiểm tra error.
**Grammar & collocations:** `surveyed ground control point` — point; `GCP distribution` — distribution; `place control points` — place.
**Examples:** `The team placed ground control points before generating the drone orthomosaic.` → Team đặt ground control points trước khi tạo orthomosaic từ drone.
**Liên kết tiếng Hàn:** `지상 기준점` — ground control point.

## 20. map algebra /mæp ˈældʒəbrə/
**Part of speech:** noun
**Core meaning (English):** a set of operations that combines raster layers through cell-by-cell arithmetic, logic, or conditional rules.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** algebra trên map: mỗi cell được cộng, trừ, mask hoặc so sánh với cell tương ứng của layer khác.
**Grammar & collocations:** `raster map algebra` — algebra; `map-algebra expression` — expression; `combine layers` — combine.
**Examples:** `Map algebra combined slope, rainfall, and soil layers to locate erosion risk.` → Map algebra kết hợp layer slope, rainfall và soil để xác định erosion risk.
**Liên kết tiếng Hàn:** `지도 대수` — map algebra.

## Review in context

Radar analysts use **interferometric SAR** to compare phase, interpret **radar backscatter**, reduce noise through **speckle filtering**, and separate scattering mechanisms with **polarimetric decomposition**. A **coherence map**, **differential interferometry**, and a **persistent scatterer** reveal **ground deformation** over time. Optical interpretation depends on the **bidirectional reflectance distribution function**; a **spectral angle mapper**, **endmember extraction**, and **hyperspectral unmixing** then separate materials. Image geometry can be reconstructed with **structure from motion** and **stereo photogrammetry**. Laser instruments preserve a **lidar waveform** or **full-waveform lidar** return, and **point-cloud registration** aligns scans. A robot can use **simultaneous localization and mapping** while moving, with a **ground control point** anchoring the product. Finally, **map algebra** combines raster evidence into a decision layer.

**Bản dịch tiếng Việt:**

Nhà phân tích radar dùng **interferometric SAR** để so phase, diễn giải **radar backscatter**, giảm noise bằng **speckle filtering** và tách cơ chế scattering bằng **polarimetric decomposition**. **Coherence map**, **differential interferometry** và **persistent scatterer** cho thấy **ground deformation** theo thời gian. Diễn giải optical phụ thuộc **bidirectional reflectance distribution function**; sau đó **spectral angle mapper**, **endmember extraction** và **hyperspectral unmixing** tách các material. Geometry của image có thể dựng bằng **structure from motion** và **stereo photogrammetry**. Thiết bị laser giữ lại **lidar waveform** hoặc return **full-waveform lidar**, còn **point-cloud registration** căn các scan. Robot có thể dùng **simultaneous localization and mapping** khi di chuyển, với **ground control point** neo sản phẩm vào tọa độ thật. Cuối cùng, **map algebra** kết hợp evidence dạng raster thành một decision layer.
