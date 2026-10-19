# C2 Vocabulary 122 — Remote sensing and geospatial analysis

This lesson follows a satellite or airborne observation from raw photons and echoes to calibrated images, mapped landscapes, and spatially defensible conclusions.

Flow: **multispectral imaging → hyperspectral imaging → lidar point cloud → radiometric calibration → atmospheric correction → orthorectification → land-cover classification → object-based image analysis → spatial autocorrelation → kriging → geostatistics → ground truthing → revisit time → swath width → interferometric coherence → data cube → canopy height model → point-cloud segmentation → cloud mask → spectral unmixing**.

## 1. multispectral imaging /ˌmʌltɪˈspɛktrəl ˈɪmɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** imaging that records reflected or emitted energy in several separate wavelength bands.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chụp ảnh đa phổ; hình dung mỗi cảnh được nhìn qua vài “kênh màu” ngoài màu mắt người để phân biệt cây, nước và đất.
**Grammar & collocations:** `multispectral-imaging sensor` — cảm biến chụp ảnh đa phổ; `multispectral image` — ảnh đa phổ; `multispectral-imaging data` — dữ liệu chụp ảnh đa phổ.
**Examples:** `Multispectral imaging distinguished stressed crops from healthy vegetation before the color change was visible.` → Chụp ảnh đa phổ phân biệt cây trồng bị stress với cây khỏe trước khi mắt thường thấy đổi màu.
**Liên kết tiếng Hàn:** `다중분광 영상` (dajungbungwang yeongsang) — chụp ảnh đa phổ.

## 2. hyperspectral imaging /ˌhaɪpɚˈspɛktrəl ˈɪmɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** imaging that measures a nearly continuous, finely divided spectrum for each pixel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chụp ảnh siêu phổ; hình dung mỗi điểm ảnh có cả “dấu vân tay” phổ chi tiết để nhận ra vật liệu rất giống nhau.
**Grammar & collocations:** `hyperspectral-imaging cube` — khối dữ liệu chụp ảnh siêu phổ; `hyperspectral sensor` — cảm biến siêu phổ; `hyperspectral signature` — dấu vân tay siêu phổ.
**Examples:** `Hyperspectral imaging detected mineral traces that broad-band cameras missed.` → Chụp ảnh siêu phổ phát hiện dấu vết khoáng chất mà camera băng rộng bỏ lỡ.
**Liên kết tiếng Hàn:** `초분광 영상` (chobungwang yeongsang) — chụp ảnh siêu phổ.

## 3. lidar point cloud /ˈlaɪdɑr pɔɪnt klaʊd/
**Part of speech:** noun
**Core meaning (English):** a three-dimensional collection of points generated from laser pulses reflected by surfaces.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đám mây điểm lidar; hình dung hàng triệu điểm đo bằng laser dựng lại cây cối, mặt đất và công trình trong không gian 3D.
**Grammar & collocations:** `airborne lidar point cloud` — đám mây điểm lidar trên không; `lidar-point-cloud density` — mật độ đám mây điểm lidar; `visualize a lidar point cloud` — trực quan hóa đám mây điểm lidar.
**Examples:** `The lidar point cloud revealed an ancient road beneath the forest canopy.` → Đám mây điểm lidar cho thấy một con đường cổ bên dưới tán rừng.
**Liên kết tiếng Hàn:** `라이다 점군` (raida jeomgun) — đám mây điểm lidar.

## 4. radiometric calibration /ˌreɪdiəˈmɛtrɪk ˌkæləˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the conversion of raw sensor values into physically meaningful measurements of radiance or reflectance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiệu chuẩn bức xạ; hình dung biến con số thô của cảm biến thành mức năng lượng có thể so sánh giữa ảnh và thời điểm khác nhau.
**Grammar & collocations:** `radiometric-calibration target` — bia hiệu chuẩn bức xạ; `radiometric-calibration coefficient` — hệ số hiệu chuẩn bức xạ; `perform radiometric calibration` — thực hiện hiệu chuẩn bức xạ.
**Examples:** `Radiometric calibration made scenes collected by different sensors comparable.` → Hiệu chuẩn bức xạ khiến các cảnh được chụp bằng cảm biến khác nhau có thể so sánh.
**Liên kết tiếng Hàn:** `복사 보정` (boksa bojeong) — hiệu chuẩn bức xạ.

## 5. atmospheric correction /ˌætməsˈfɛrɪk kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** the removal or modeling of atmospheric effects that alter the energy recorded by a remote sensor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiệu chỉnh khí quyển; hình dung tách ảnh hưởng của bụi, hơi nước và khí giữa cảm biến với mặt đất khỏi tín hiệu cần đo.
**Grammar & collocations:** `atmospheric-correction algorithm` — thuật toán hiệu chỉnh khí quyển; `surface-reflectance product` — sản phẩm phản xạ bề mặt; `apply atmospheric correction` — áp dụng hiệu chỉnh khí quyển.
**Examples:** `Atmospheric correction removed haze before the analyst compared vegetation indices.` → Hiệu chỉnh khí quyển loại bỏ màn mờ trước khi nhà phân tích so sánh các chỉ số thực vật.
**Liên kết tiếng Hàn:** `대기 보정` (daegi bojeong) — hiệu chỉnh khí quyển.

## 6. orthorectification /ˌɔrθoʊˌrɛktəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the geometric correction of an image so that locations are placed as if viewed from directly above a flat map, accounting for terrain and sensor position.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trực giao hóa ảnh; hình dung sửa méo do địa hình và góc chụp để vị trí trên ảnh khớp với bản đồ.
**Grammar & collocations:** `orthorectified imagery` — ảnh đã trực giao hóa; `orthorectification workflow` — quy trình trực giao hóa; `orthorectify a satellite image` — trực giao hóa ảnh vệ tinh.
**Examples:** `Orthorectification aligned the steep valley walls with the cadastral map.` → Trực giao hóa căn chỉnh các sườn thung lũng dốc với bản đồ địa chính.
**Liên kết tiếng Hàn:** `정사 보정` (jeongsa bojeong) — trực giao hóa ảnh.

## 7. land-cover classification /ˈlænd ˌkʌvɚ ˌklæsəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the assignment of pixels or objects to categories describing the physical material covering the land.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân loại lớp phủ đất; hình dung tô bản đồ theo rừng, nước, đô thị, đất trống và các lớp bề mặt khác.
**Grammar & collocations:** `land-cover classification map` — bản đồ phân loại lớp phủ đất; `supervised land-cover classification` — phân loại lớp phủ đất có giám sát; `land-cover class` — lớp phủ đất.
**Examples:** `The land-cover classification separated impervious roofs from bare soil.` → Phân loại lớp phủ đất tách mái nhà không thấm nước khỏi đất trống.
**Liên kết tiếng Hàn:** `토지 피복 분류` (toji pibu bunryu) — phân loại lớp phủ đất.

## 8. object-based image analysis /ˈɑbdʒɛkt beɪst ˈɪmɪdʒ əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** image analysis that groups neighboring pixels into meaningful objects before classifying their shape, texture, and spectral properties.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích ảnh dựa trên đối tượng; hình dung xử lý các vùng như “mái nhà” hoặc “thửa ruộng” thay vì nhìn từng pixel cô lập.
**Grammar & collocations:** `object-based image-analysis workflow` — quy trình phân tích ảnh dựa trên đối tượng; `image segmentation` — phân đoạn ảnh; `object-based classification` — phân loại dựa trên đối tượng.
**Examples:** `Object-based image analysis mapped individual buildings more cleanly than pixel-by-pixel classification.` → Phân tích ảnh dựa trên đối tượng lập bản đồ từng tòa nhà rõ hơn phân loại từng pixel.
**Liên kết tiếng Hàn:** `객체 기반 영상 분석` (gaekche giban yeongsang bunseok) — phân tích ảnh dựa trên đối tượng.

## 9. spatial autocorrelation /ˈspeɪʃəl ˌɔtoʊˌkɔrəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** the tendency for nearby observations to have more similar or more different values than would be expected by chance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tự tương quan không gian; hình dung các điểm gần nhau có xu hướng giống nhau hoặc tương phản theo vị trí của chúng.
**Grammar & collocations:** `positive spatial autocorrelation` — tự tương quan không gian dương; `spatial-autocorrelation statistic` — thống kê tự tương quan không gian; `test for spatial autocorrelation` — kiểm tra tự tương quan không gian.
**Examples:** `Positive spatial autocorrelation showed that high temperatures clustered in the city center.` → Tự tương quan không gian dương cho thấy nhiệt độ cao tập trung ở trung tâm thành phố.
**Liên kết tiếng Hàn:** `공간 자기상관` (gonggan jagisangwan) — tự tương quan không gian.

## 10. kriging /ˈkriːɡɪŋ/
**Part of speech:** noun
**Core meaning (English):** a geostatistical interpolation method that predicts values at unsampled locations using a spatial covariance model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kriging; hình dung ước đoán giá trị giữa các điểm đo bằng cách xem khoảng cách và mức độ tương quan không gian.
**Grammar & collocations:** `ordinary kriging` — kriging thông thường; `kriging surface` — bề mặt nội suy kriging; `interpolate with kriging` — nội suy bằng kriging.
**Examples:** `Kriging estimated groundwater depth between the monitoring wells.` → Kriging ước lượng độ sâu nước ngầm giữa các giếng quan trắc.
**Liên kết tiếng Hàn:** `크리깅` (keuriging) — kriging.

## 11. geostatistics /ˌdʒiːoʊstəˈtɪstɪks/
**Part of speech:** noun
**Core meaning (English):** statistical methods that model spatial variation, dependence, and uncertainty in geographic data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thống kê địa lý; hình dung dùng cả giá trị đo và vị trí của chúng để hiểu quy luật phân bố trên mặt đất.
**Grammar & collocations:** `applied geostatistics` — thống kê địa lý ứng dụng; `geostatistical model` — mô hình thống kê địa lý; `geostatistical uncertainty` — bất định thống kê địa lý.
**Examples:** `Geostatistics quantified the uncertainty of the soil-contamination map.` → Thống kê địa lý định lượng độ bất định của bản đồ ô nhiễm đất.
**Liên kết tiếng Hàn:** `지리통계학` (jir tonggyehak) — thống kê địa lý.

## 12. ground truthing /ɡraʊnd ˈtruːθɪŋ/
**Part of speech:** noun
**Core meaning (English):** the collection of field observations used to verify or calibrate interpretations made from remote-sensing data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm chứng thực địa; hình dung xuống tận nơi để xem ảnh vệ tinh có đúng với những gì thật sự có trên mặt đất không.
**Grammar & collocations:** `ground-truthing survey` — khảo sát kiểm chứng thực địa; `ground-truth data` — dữ liệu thực địa kiểm chứng; `conduct ground truthing` — tiến hành kiểm chứng thực địa.
**Examples:** `Ground truthing confirmed that the dark pixels were wetlands rather than shadowed pavement.` → Kiểm chứng thực địa xác nhận các pixel tối là đất ngập nước chứ không phải mặt đường bị bóng che.
**Liên kết tiếng Hàn:** `현장 검증` (hyeonjang geomjeung) — kiểm chứng thực địa.

## 13. revisit time /ˌriːˈvɪzət taɪm/
**Part of speech:** noun
**Core meaning (English):** the interval between successive observations of the same location by a satellite or sensor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian tái quan sát; hình dung phải chờ bao lâu vệ tinh mới quay lại chụp đúng khu vực đó.
**Grammar & collocations:** `short revisit time` — thời gian tái quan sát ngắn; `revisit-time constraint` — ràng buộc thời gian tái quan sát; `improve revisit time` — rút ngắn thời gian tái quan sát.
**Examples:** `A short revisit time was essential for tracking the rapidly spreading wildfire.` → Thời gian tái quan sát ngắn rất cần thiết để theo dõi đám cháy lan nhanh.
**Liên kết tiếng Hàn:** `재방문 주기` (jaebangmun jugi) — thời gian tái quan sát.

## 14. swath width /swɑθ wɪdθ/
**Part of speech:** noun
**Core meaning (English):** the width of the strip of Earth's surface observed during one pass of a remote sensor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bề rộng dải quét; hình dung bề ngang của “vệt” mặt đất mà vệ tinh nhìn thấy khi bay qua.
**Grammar & collocations:** `wide swath width` — bề rộng dải quét lớn; `swath-width trade-off` — đánh đổi về bề rộng dải quét; `map a broad swath` — lập bản đồ dải rộng.
**Examples:** `The sensor's wide swath width covered the entire floodplain in one pass.` → Bề rộng dải quét lớn của cảm biến bao phủ toàn bộ đồng bằng ngập lũ trong một lượt.
**Liên kết tiếng Hàn:** `관측 폭` (gwancheuk pok) — bề rộng dải quét.

## 15. interferometric coherence /ˌɪntɚfəˈrɑmətrɪk koʊˈhɪrəns/
**Part of speech:** noun
**Core meaning (English):** a measure of how consistently the phase relationship is preserved between repeated radar observations of the same area.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ kết hợp giao thoa; hình dung mức tín hiệu radar giữ được “nhịp pha” giống nhau qua hai lần quan sát.
**Grammar & collocations:** `interferometric-coherence map` — bản đồ độ kết hợp giao thoa; `high interferometric coherence` — độ kết hợp giao thoa cao; `coherence loss` — mất độ kết hợp.
**Examples:** `Low interferometric coherence indicated that the glacier surface had changed between acquisitions.` → Độ kết hợp giao thoa thấp cho thấy bề mặt sông băng đã thay đổi giữa hai lần thu ảnh.
**Liên kết tiếng Hàn:** `간섭 결맞음` (ganseop gyeolmateum) — độ kết hợp giao thoa.

## 16. data cube /ˈdeɪtə kjuːb/
**Part of speech:** noun
**Core meaning (English):** a multidimensional array that stores measurements across spatial, spectral, temporal, or other dimensions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khối dữ liệu; hình dung xếp ảnh theo không gian, bước sóng và thời gian thành một khối để truy vấn từng lát.
**Grammar & collocations:** `spatiotemporal data cube` — khối dữ liệu không–thời gian; `hyperspectral data cube` — khối dữ liệu siêu phổ; `query a data cube` — truy vấn khối dữ liệu.
**Examples:** `The data cube allowed analysts to compare every pixel across ten years of observations.` → Khối dữ liệu cho phép nhà phân tích so sánh từng pixel qua mười năm quan sát.
**Liên kết tiếng Hàn:** `데이터 큐브` (deiteo kyubeu) — khối dữ liệu.

## 17. canopy height model /ˈkænəpi haɪt ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model of vegetation height above the ground, often derived by subtracting a terrain model from a surface model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình chiều cao tán; hình dung bản đồ 3D cho biết cây vươn cao bao nhiêu so với mặt đất bên dưới.
**Grammar & collocations:** `forest canopy-height model` — mô hình chiều cao tán rừng; `canopy-height estimate` — ước lượng chiều cao tán; `derive a canopy height model` — tạo mô hình chiều cao tán.
**Examples:** `The canopy height model revealed gaps created by selective logging.` → Mô hình chiều cao tán cho thấy các khoảng trống do khai thác chọn lọc tạo ra.
**Liên kết tiếng Hàn:** `수관 높이 모델` (sugwan nopi model) — mô hình chiều cao tán.

## 18. point-cloud segmentation /pɔɪnt klaʊd ˌsɛɡmənˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** the separation of a three-dimensional point cloud into objects or classes such as ground, buildings, and vegetation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân đoạn đám mây điểm; hình dung tách hàng triệu điểm 3D thành các vật thể có ý nghĩa.
**Grammar & collocations:** `automatic point-cloud segmentation` — phân đoạn đám mây điểm tự động; `point-cloud segmentation algorithm` — thuật toán phân đoạn đám mây điểm; `segment a point cloud` — phân đoạn đám mây điểm.
**Examples:** `Point-cloud segmentation separated power lines from the surrounding trees.` → Phân đoạn đám mây điểm tách đường dây điện khỏi cây cối xung quanh.
**Liên kết tiếng Hàn:** `점군 분할` (jeomgun bunhal) — phân đoạn đám mây điểm.

## 19. cloud mask /klaʊd mæsk/
**Part of speech:** noun
**Core meaning (English):** a map or label identifying pixels obscured by clouds, cloud shadows, or related atmospheric contamination.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mặt nạ mây; hình dung đánh dấu những pixel không nên dùng vì mây hoặc bóng mây che tín hiệu mặt đất.
**Grammar & collocations:** `cloud-mask layer` — lớp mặt nạ mây; `generate a cloud mask` — tạo mặt nạ mây; `cloud-mask quality flag` — cờ chất lượng mặt nạ mây.
**Examples:** `The analyst applied a cloud mask before calculating the vegetation trend.` → Nhà phân tích áp dụng mặt nạ mây trước khi tính xu hướng thực vật.
**Liên kết tiếng Hàn:** `구름 마스크` (gureum maseukeu) — mặt nạ mây.

## 20. spectral unmixing /ˈspɛktrəl ʌnˈmɪksɪŋ/
**Part of speech:** noun
**Core meaning (English):** the estimation of the constituent materials and their proportions within a pixel whose recorded spectrum is a mixture.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách phổ; hình dung giải một pixel hỗn hợp thành tỷ lệ đất, cây, nước hoặc vật liệu khác bên trong nó.
**Grammar & collocations:** `linear spectral unmixing` — tách phổ tuyến tính; `spectral-unmixing model` — mô hình tách phổ; `estimate endmember fractions` — ước lượng tỷ lệ thành phần phổ.
**Examples:** `Spectral unmixing estimated the proportion of exposed soil beneath sparse vegetation.` → Tách phổ ước lượng tỷ lệ đất trống bên dưới thảm thực vật thưa.
**Liên kết tiếng Hàn:** `분광 혼합 분해` (bungwang honhap bunhae) — tách phổ.

## Review in context

**Multispectral imaging** records several bands, while **hyperspectral imaging** resolves a fine spectral signature; a **lidar point cloud** adds three-dimensional structure. **Radiometric calibration**, **atmospheric correction**, and **orthorectification** turn raw observations into comparable map-ready data. Analysts perform **land-cover classification** and **object-based image analysis**, then test **spatial autocorrelation** and use **kriging** within **geostatistics**. **Ground truthing** checks the interpretation in the field. Mission planning balances **revisit time** and **swath width**, while radar studies track **interferometric coherence**. A **data cube** stores multiple dimensions; a **canopy height model** and **point-cloud segmentation** describe vegetation and objects. A **cloud mask** removes unusable pixels, and **spectral unmixing** estimates the materials hidden inside mixed pixels.

**Bản dịch tiếng Việt:**

Chụp ảnh đa phổ ghi lại nhiều băng, trong khi chụp ảnh siêu phổ phân giải dấu vân tay phổ chi tiết; đám mây điểm lidar bổ sung cấu trúc ba chiều. Hiệu chuẩn bức xạ, hiệu chỉnh khí quyển và trực giao hóa biến quan sát thô thành dữ liệu có thể so sánh và đưa lên bản đồ. Nhà phân tích thực hiện phân loại lớp phủ đất và phân tích ảnh dựa trên đối tượng, sau đó kiểm tra tự tương quan không gian và dùng kriging trong thống kê địa lý. Kiểm chứng thực địa kiểm tra cách diễn giải tại nơi thật. Lập kế hoạch nhiệm vụ phải cân bằng thời gian tái quan sát và bề rộng dải quét, còn nghiên cứu radar theo dõi độ kết hợp giao thoa. Khối dữ liệu lưu nhiều chiều; mô hình chiều cao tán và phân đoạn đám mây điểm mô tả thực vật cùng các vật thể. Mặt nạ mây loại pixel không dùng được, còn tách phổ ước lượng các vật liệu ẩn trong pixel hỗn hợp.
