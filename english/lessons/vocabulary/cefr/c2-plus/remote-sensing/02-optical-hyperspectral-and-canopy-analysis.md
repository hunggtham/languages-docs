# C2+ Vocabulary — Optical, hyperspectral, and canopy analysis

This lesson follows how optical sensors correct atmospheric and geometric effects, interpret vegetation structure, and extract material information from hyperspectral data. The network is **radiative transfer model → atmospheric path radiance → adjacency effect → topographic correction → BRDF normalization → surface anisotropy → bidirectional gap fraction → canopy structural parameter → leaf area index inversion → fractional vegetation cover → soil line → spectral index saturation → red-edge position → continuum removal → absorption feature → spectral library transfer → cross-sensor harmonization → data cube tiling → minimum noise fraction → matched filter**.

## 1. radiative transfer model /ˈreɪdiətɪv ˈtrænsfər ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model describing how electromagnetic radiation is absorbed, scattered, and emitted as it travels through an atmosphere or interacts with a surface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô phỏng đường đi của photon qua air và surface để nối reflectance thật với signal sensor.
**Grammar & collocations:** `atmospheric radiative-transfer model` — model; `radiative-transfer simulation` — simulation; `solve the transfer equation` — solve.
**Examples:** `The radiative transfer model estimated how much of the measured signal came from atmospheric scattering.` → Radiative transfer model estimate signal đo được bao nhiêu đến từ atmospheric scattering.
**Liên kết tiếng Hàn:** `복사 전달 모델` — radiative transfer model.

## 2. atmospheric path radiance /ˌætməsˈfɛrɪk pæθ ˈreɪdiəns/
**Part of speech:** noun
**Core meaning (English):** light scattered into a sensor's line of sight by the atmosphere without having been reflected from the target surface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ánh sáng “chen vào đường truyền” từ atmosphere, làm pixel sáng hơn surface thật.
**Grammar & collocations:** `path-radiance correction` — correction; `estimate atmospheric path radiance` — estimate; `remove path radiance` — remove.
**Examples:** `Atmospheric path radiance obscured the dark-water signal in the shortwave bands.` → Atmospheric path radiance che signal dark-water trong shortwave band.
**Liên kết tiếng Hàn:** `대기 경로 복사` — atmospheric path radiance.

## 3. adjacency effect /əˈdʒeɪsənsi ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** contamination of a pixel's measured radiance by light scattered from neighboring surfaces outside the nominal pixel footprint.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pixel nhận ánh sáng “hàng xóm” do scattering, đặc biệt ở boundary giữa bright sand và dark water.
**Grammar & collocations:** `atmospheric adjacency effect` — effect; `adjacency-effect correction` — correction; `neighboring-pixel radiance` — radiance.
**Examples:** `The adjacency effect made the narrow wetland appear brighter than its own reflectance.` → Adjacency effect làm wetland hẹp trông sáng hơn reflectance thật.
**Liên kết tiếng Hàn:** `인접 효과` — adjacency effect.

## 4. topographic correction /ˌtɑpəˈɡræfɪk kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** adjustment of optical reflectance for differences in slope, aspect, and illumination caused by terrain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cùng một vegetation nhưng slope quay về sun sẽ sáng khác; correction đưa signal về điều kiện terrain comparable.
**Grammar & collocations:** `terrain-based topographic correction` — correction; `correct for slope` — correct; `illumination normalization` — normalization.
**Examples:** `Topographic correction reduced false vegetation differences between the sunny and shaded slopes.` → Topographic correction giảm vegetation difference giả giữa slope sáng và shade.
**Liên kết tiếng Hàn:** `지형 보정` — topographic correction.

## 5. BRDF normalization /ˌbiː ɑr diː ɛf ˌnɔrmələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** adjustment of reflectance measurements to a common illumination and viewing geometry using a bidirectional reflectance model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** normalize các image chụp từ góc khác nhau để khác biệt reflectance phản ánh surface chứ không chỉ geometry.
**Grammar & collocations:** `BRDF-normalization method` — method; `normalize reflectance` — normalize; `common-view geometry` — geometry.
**Examples:** `BRDF normalization made the multi-date vegetation index more comparable.` → BRDF normalization làm vegetation index multi-date comparable hơn.
**Liên kết tiếng Hàn:** `BRDF 정규화` — BRDF normalization.

## 6. surface anisotropy /ˈsɜrfɪs ˌænəˈsɑtrəpi/
**Part of speech:** noun
**Core meaning (English):** directional dependence of a surface's reflectance or emission as illumination and viewing directions change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** surface phản xạ khác theo hướng; canopy, rough soil và aligned leaves tạo anisotropy rõ.
**Grammar & collocations:** `surface-anisotropy pattern` — pattern; `measure anisotropy` — measure; `anisotropic reflectance` — reflectance.
**Examples:** `Surface anisotropy revealed row orientation in the agricultural canopy.` → Surface anisotropy cho thấy hướng row trong agricultural canopy.
**Liên kết tiếng Hàn:** `표면 이방성` — surface anisotropy.

## 7. bidirectional gap fraction /ˌbaɪdəˈrɛkʃənəl ɡæp ˈfrækʃən/
**Part of speech:** noun
**Core meaning (English):** the proportion of a canopy's line of sight that is unobstructed by leaves or branches for a specified viewing and illumination geometry.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhìn xuyên canopy thấy bao nhiêu “khoảng trống”, thay đổi theo góc nhìn và structure.
**Grammar & collocations:** `bidirectional gap-fraction model` — model; `estimate canopy gaps` — estimate; `gap-fraction measurement` — measurement.
**Examples:** `The bidirectional gap fraction increased when the sensor viewed the rows along their orientation.` → Bidirectional gap fraction tăng khi sensor nhìn dọc hướng row.
**Liên kết tiếng Hàn:** `양방향 공극률` — bidirectional gap fraction.

## 8. canopy structural parameter /ˈkænəpi ˈstrʌktʃərəl pəˈræmətər/
**Part of speech:** noun
**Core meaning (English):** a measurable property describing the three-dimensional arrangement or density of vegetation, such as height, clumping, or leaf area.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parameter mô tả canopy như height, density, clumping và layer, không chỉ màu xanh.
**Grammar & collocations:** `canopy-structural-parameter retrieval` — retrieval; `estimate canopy structure` — estimate; `structural metric` — metric.
**Examples:** `The lidar–optical model retrieved a canopy structural parameter related to clumping.` → Model lidar–optical retrieve canopy structural parameter liên quan clumping.
**Liên kết tiếng Hàn:** `수관 구조 매개변수` — canopy structural parameter.

## 9. leaf area index inversion /liːf ˈɛriə ˈɪndɛks ɪnˈvɜrʒən/
**Part of speech:** noun
**Core meaning (English):** estimation of leaf area index from measured radiance or reflectance by reversing a model that predicts sensor signals from canopy properties.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** từ signal quay ngược về LAI, tìm leaf area phù hợp với observation và model.
**Grammar & collocations:** `leaf-area-index inversion algorithm` — algorithm; `invert a canopy model` — invert; `LAI retrieval` — retrieval.
**Examples:** `Leaf area index inversion became unstable when the canopy was nearly saturated optically.` → Leaf area index inversion không ổn định khi canopy gần optical saturation.
**Liên kết tiếng Hàn:** `엽면적 지수 역산` — leaf area index inversion.

## 10. fractional vegetation cover /ˈfrækʃənəl ˌvɛdʒəˈteɪʃən ˈkʌvər/
**Part of speech:** noun
**Core meaning (English):** the proportion of ground area or a pixel covered by vegetation when viewed from a specified direction or measurement geometry.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pixel có bao nhiêu phần là vegetation thay vì bare soil, rock hoặc shadow.
**Grammar & collocations:** `fractional-vegetation-cover estimate` — estimate; `subpixel vegetation fraction` — fraction; `map vegetation cover` — map.
**Examples:** `Fractional vegetation cover increased after the restoration planting established.` → Fractional vegetation cover tăng sau khi restoration planting establish.
**Liên kết tiếng Hàn:** `식생 피복률` — fractional vegetation cover.

## 11. soil line /sɔɪl laɪn/
**Part of speech:** noun
**Core meaning (English):** the characteristic relationship between reflectance values of bare soils across two or more spectral bands.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bare-soil reflectance tạo một “đường nền”, giúp tách vegetation signal khỏi background soil.
**Grammar & collocations:** `soil-line method` — method; `fit a soil line` — fit; `soil-line adjustment` — adjustment.
**Examples:** `The soil line improved vegetation detection in sparse dryland cover.` → Soil line cải thiện vegetation detection trong dryland cover thưa.
**Liên kết tiếng Hàn:** `토양선` — soil line.

## 12. spectral index saturation /ˈspɛktrəl ˈɪndɛks ˌsætʃəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the loss of sensitivity of a spectral index when increasing biomass or another variable produces little further change in the index value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** index “chạm trần”; canopy tiếp tục dày nhưng value không tăng đủ để phân biệt.
**Grammar & collocations:** `spectral-index saturation effect` — effect; `saturation threshold` — threshold; `avoid saturation` — avoid.
**Examples:** `Spectral index saturation limited biomass estimates in the dense plantation.` → Spectral index saturation giới hạn biomass estimate trong plantation dày.
**Liên kết tiếng Hàn:** `분광 지수 포화` — spectral index saturation.

## 13. red-edge position /rɛd ɛdʒ pəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** the wavelength location of the steep reflectance transition between red absorption and near-infrared vegetation reflectance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “mép đỏ” dịch theo chlorophyll và stress, nên dùng để infer plant condition.
**Grammar & collocations:** `red-edge-position shift` — shift; `estimate red-edge position` — estimate; `red-edge wavelength` — wavelength.
**Examples:** `The red-edge position shifted toward shorter wavelengths under nitrogen stress.` → Red-edge position shift về wavelength ngắn hơn dưới nitrogen stress.
**Liên kết tiếng Hàn:** `레드엣지 위치` — red-edge position.

## 14. continuum removal /kənˈtɪnjuəm rɪˈmuːvəl/
**Part of speech:** noun
**Core meaning (English):** a spectral preprocessing method that normalizes an absorption feature relative to a continuum joining the feature's shoulders.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kéo một baseline qua hai vai absorption rồi đo độ sâu/hình dạng feature mà không bị brightness nền chi phối.
**Grammar & collocations:** `continuum-removal spectrum` — spectrum; `remove the continuum` — remove; `absorption-depth metric` — metric.
**Examples:** `Continuum removal made the mineral absorption depth comparable across differently illuminated pixels.` → Continuum removal làm mineral absorption depth comparable giữa pixel illumination khác.
**Liên kết tiếng Hàn:** `연속체 제거` — continuum removal.

## 15. absorption feature /əbˈsɔrpʃən ˈfiːtʃər/
**Part of speech:** noun
**Core meaning (English):** a localized depression or pattern in a spectrum caused by a material absorbing radiation at particular wavelengths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “vết lõm” spectral do molecule/mineral hấp thụ wavelength đặc trưng.
**Grammar & collocations:** `diagnostic absorption feature` — feature; `absorption-feature depth` — depth; `identify a feature` — identify.
**Examples:** `The absorption feature near two micrometers indicated a hydrated mineral.` → Absorption feature gần two micrometers chỉ hydrated mineral.
**Liên kết tiếng Hàn:** `흡수 특징` — absorption feature.

## 16. spectral library transfer /ˈspɛktrəl ˈlaɪˌbrɛri ˈtrænsfər/
**Part of speech:** noun
**Core meaning (English):** adaptation of reference spectra from one instrument, laboratory, or condition so they can be used with another sensor or scene.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** spectrum reference không copy nguyên xi giữa sensor; phải transfer qua resolution, atmosphere và calibration khác.
**Grammar & collocations:** `spectral-library-transfer method` — method; `transfer reference spectra` — transfer; `cross-instrument calibration` — calibration.
**Examples:** `Spectral library transfer corrected the resolution mismatch between the laboratory spectra and the airborne sensor.` → Spectral library transfer sửa mismatch resolution giữa lab spectrum và airborne sensor.
**Liên kết tiếng Hàn:** `분광 라이브러리 전이` — spectral library transfer.

## 17. cross-sensor harmonization /krɔs ˈsɛnsər ˌhɑrmənəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** adjustment of measurements from different sensors so that their products are comparable across time, platform, or spectral response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa sensor khác nhau về “cùng tiếng nói” bằng calibration, bandpass và geometry adjustment.
**Grammar & collocations:** `cross-sensor harmonization protocol` — protocol; `harmonize time series` — harmonize; `sensor-response correction` — correction.
**Examples:** `Cross-sensor harmonization produced a continuous vegetation record after the satellite replacement.` → Cross-sensor harmonization tạo record vegetation liên tục sau satellite replacement.
**Liên kết tiếng Hàn:** `센서 간 조화` — cross-sensor harmonization.

## 18. data cube tiling /ˈdeɪtə kjuːb ˈtaɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** dividing a multidimensional image data cube into manageable spatial or spectral blocks for storage and processing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia hyperspectral cube lớn thành tile để query, process và parallelize mà vẫn giữ metadata.
**Grammar & collocations:** `data-cube tiling scheme` — scheme; `tile a hyperspectral cube` — tile; `overlapping tile` — tile.
**Examples:** `Data cube tiling allowed the classifier to process the full scene without exhausting memory.` → Data cube tiling cho classifier process full scene mà không hết memory.
**Liên kết tiếng Hàn:** `데이터 큐브 타일링` — data cube tiling.

## 19. minimum noise fraction /ˈmɪnəməm nɔɪz ˈfrækʃən/
**Part of speech:** noun
**Core meaning (English):** a transformation that orders image components by signal-to-noise quality and is used to reduce hyperspectral dimensionality.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sắp xếp component từ ít noise đến nhiều noise để giữ phần hữu ích và bỏ phần cuối.
**Grammar & collocations:** `minimum-noise-fraction transform` — transform; `MNF component` — component; `reduce dimensionality` — reduce.
**Examples:** `Minimum noise fraction separated the informative mineral signal from high-dimensional sensor noise.` → Minimum noise fraction tách mineral signal hữu ích khỏi sensor noise nhiều chiều.
**Liên kết tiếng Hàn:** `최소 잡음 분율` — minimum noise fraction.

## 20. matched filter /mætʃt ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a detector that compares observed spectral vectors with a target signature while accounting for background variability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** filter tìm target spectrum giữa background variable, tối ưu response khi target signature đã biết.
**Grammar & collocations:** `spectral matched filter` — filter; `matched-filter detector` — detector; `detect a target signature` — detect.
**Examples:** `The matched filter highlighted small mineral exposures hidden within mixed pixels.` → Matched filter làm nổi mineral exposure nhỏ ẩn trong mixed pixel.
**Liên kết tiếng Hàn:** `정합 필터` — matched filter.

## Review in context

An optical workflow may start with a **radiative transfer model** to correct **atmospheric path radiance** and the **adjacency effect**, followed by **topographic correction** and **BRDF normalization** for geometry. **Surface anisotropy**, **bidirectional gap fraction**, and a **canopy structural parameter** describe vegetation architecture; **leaf area index inversion** and **fractional vegetation cover** retrieve useful quantities. A **soil line** helps separate background, while **spectral index saturation** and **red-edge position** reveal limits and stress. **Continuum removal** measures an **absorption feature**. For large archives, **spectral library transfer**, **cross-sensor harmonization**, and **data cube tiling** preserve comparability. **Minimum noise fraction** reduces dimensionality, and a **matched filter** detects a target signature.

**Bản dịch tiếng Việt:**

Workflow optical có thể bắt đầu bằng **radiative transfer model** để correct **atmospheric path radiance** và **adjacency effect**, sau đó dùng **topographic correction** và **BRDF normalization** cho geometry. **Surface anisotropy**, **bidirectional gap fraction** và **canopy structural parameter** mô tả architecture của vegetation; **leaf area index inversion** và **fractional vegetation cover** retrieve quantity hữu ích. **Soil line** giúp tách background, còn **spectral index saturation** và **red-edge position** cho thấy limit và stress. **Continuum removal** đo **absorption feature**. Với archive lớn, **spectral library transfer**, **cross-sensor harmonization** và **data cube tiling** giữ comparability. **Minimum noise fraction** giảm dimensionality, còn **matched filter** detect target signature.
