# C2 Vocabulary — Geospatial data systems

This lesson follows a location-aware query from coordinate representation and indexing through tiles, geometry operations, and uncertainty.

Flow: **geohash → spatial index → bounding box → point-in-polygon → coordinate reference system → geodesic distance → tile pyramid → vector tile → raster tile → spatial join → geometry simplification → topology error → antimeridian wrap → projection distortion → map matching → geofence trigger → temporal geometry → spatial partition → nearest-neighbor query → location privacy**.

## 1. geohash /ˈdʒiːoʊhæʃ/
**Part of speech:** noun
**Core meaning (English):** a compact string encoding that represents a geographic area by recursively subdividing space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi gọn mã hóa vùng địa lý bằng cách chia không gian đệ quy.
**Grammar & collocations:** `geohash precision` — độ chính xác; `prefix a nearby region` — dùng tiền tố.
**Examples:** `The geohash prefix grouped nearby delivery requests before the routing query ran.` → Geohash gom request giao hàng gần nhau.
**Liên kết tiếng Hàn:** `지오해시`.

## 2. spatial index /ˈspeɪʃəl ˈɪndeks/
**Part of speech:** noun
**Core meaning (English):** an index organizing geographic coordinates or shapes so location queries avoid scanning every object.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** index tổ chức tọa độ/hình dạng để query location không scan mọi object.
**Grammar & collocations:** `spatial-index lookup` — lookup; `filter nearby geometries` — lọc.
**Examples:** `The spatial index found candidate stores before the exact distance calculation.` → Index tìm store ứng viên trước tính distance.
**Liên kết tiếng Hàn:** `공간 인덱스`.

## 3. bounding box /ˈbaʊndɪŋ bɒks/
**Part of speech:** noun
**Core meaning (English):** the smallest axis-aligned rectangle that contains a point, line, polygon, or collection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hình chữ nhật theo trục nhỏ nhất bao quanh geometry.
**Grammar & collocations:** `bounding-box filter` — filter; `exclude distant objects` — loại.
**Examples:** `The bounding box removed most farms before the polygon intersection test.` → Box loại hầu hết farm trước test giao.
**Liên kết tiếng Hàn:** `경계 상자`.

## 4. point-in-polygon /pɔɪnt ɪn ˈpɒlɪɡɒn/
**Part of speech:** noun
**Core meaning (English):** a test determining whether a point lies inside, outside, or on the boundary of a polygon.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép thử điểm nằm trong, ngoài hoặc trên biên polygon.
**Grammar & collocations:** `point-in-polygon test` — test; `classify a delivery address` — phân loại.
**Examples:** `The point-in-polygon test determined whether the address fell inside the service zone.` → Test xác định address trong zone.
**Liên kết tiếng Hàn:** `점-다각형 포함`.

## 5. coordinate reference system /koʊˈɔːrdənət ˈrefərəns ˈsɪstəm/
**Part of speech:** noun
**Core meaning (English):** the definition of units, origin, axes, and earth model used to interpret coordinates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** định nghĩa unit, origin, axis và model Trái Đất cho tọa độ.
**Grammar & collocations:** `coordinate-reference-system code` — code; `transform between datums` — chuyển.
**Examples:** `The coordinate reference system had to be declared before the two map layers could align.` → CRS phải khai báo trước khi căn layer.
**Liên kết tiếng Hàn:** `좌표 참조 시스템`.

## 6. geodesic distance /ˌdʒiːəˈdesɪk ˈdɪstəns/
**Part of speech:** noun
**Core meaning (English):** the shortest distance along the earth's surface between two geographic positions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách ngắn nhất trên bề mặt Trái Đất giữa hai vị trí.
**Grammar & collocations:** `geodesic-distance calculation` — tính toán; `measure a great-circle path` — đo.
**Examples:** `Geodesic distance gave a better estimate than flat-map distance for the cross-country route.` → Geodesic chính xác hơn distance trên map phẳng.
**Liên kết tiếng Hàn:** `측지 거리`.

## 7. tile pyramid /taɪl ˈpɪrəmɪd/
**Part of speech:** noun
**Core meaning (English):** a multiresolution hierarchy of map tiles used to serve different zoom levels efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hierarchy nhiều resolution của tile cho các mức zoom.
**Grammar & collocations:** `tile-pyramid level` — level; `request a coarse overview` — yêu cầu.
**Examples:** `The tile pyramid served a low-resolution country view before the user zoomed into streets.` → Pyramid phục vụ view thô trước khi zoom.
**Liên kết tiếng Hàn:** `타일 피라미드`.

## 8. vector tile /ˈvektər taɪl/
**Part of speech:** noun
**Core meaning (English):** a map tile containing geometric features and attributes that the client can style or transform.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tile chứa geometry/attribute để client tự style hoặc transform.
**Grammar & collocations:** `vector-tile layer` — layer; `style a road feature` — tạo style.
**Examples:** `The vector tile let the client recolor roads without downloading a new image.` → Tile vector cho client đổi màu road.
**Liên kết tiếng Hàn:** `벡터 타일`.

## 9. raster tile /ˈræstər taɪl/
**Part of speech:** noun
**Core meaning (English):** a map tile delivered as a pre-rendered grid of pixels.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tile map dạng lưới pixel đã render sẵn.
**Grammar & collocations:** `raster-tile cache` — cache; `render a shaded relief` — render.
**Examples:** `The raster tile displayed shaded terrain consistently on a low-power device.` → Tile raster hiển thị địa hình ổn định trên device yếu.
**Liên kết tiếng Hàn:** `래스터 타일`.

## 10. spatial join /ˈspeɪʃəl dʒɔɪn/
**Part of speech:** noun
**Core meaning (English):** joining records according to a geographic relationship such as intersection, containment, or proximity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** join record theo quan hệ địa lý như giao, chứa hoặc gần.
**Grammar & collocations:** `spatial-join predicate` — predicate; `attach a district to a point` — gắn.
**Examples:** `The spatial join attached each sensor reading to the district that contained it.` → Join gắn reading với district chứa nó.
**Liên kết tiếng Hàn:** `공간 조인`.

## 11. geometry simplification /dʒiˈɒmətri ˌsɪmplɪfɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** reducing the number of points in a shape while preserving its useful visual or analytical form.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm số điểm của shape nhưng giữ hình dạng hữu ích.
**Grammar & collocations:** `geometry-simplification tolerance` — tolerance; `remove redundant vertices` — bỏ.
**Examples:** `Geometry simplification made the coastline small enough for a mobile map.` → Simplification làm coastline đủ nhẹ cho mobile.
**Liên kết tiếng Hàn:** `기하 단순화`.

## 12. topology error /təˈpɒlədʒi ˈerər/
**Part of speech:** noun
**Core meaning (English):** an invalid relationship among connected shapes, such as a gap, overlap, or self-intersection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ shape sai như gap, overlap hoặc tự giao.
**Grammar & collocations:** `topology-error report` — report; `repair a polygon overlap` — sửa.
**Examples:** `The topology error left a narrow gap between two administrative regions.` → Error tạo gap giữa hai vùng.
**Liên kết tiếng Hàn:** `위상 오류`.

## 13. antimeridian wrap /ˌæntɪməˈrɪdiən ræp/
**Part of speech:** noun
**Core meaning (English):** handling geometry that crosses the longitude boundary where coordinates wrap from one side of the world to the other.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xử lý geometry qua ranh longitude nơi tọa độ wrap quanh Trái Đất.
**Grammar & collocations:** `antimeridian-wrap logic` — logic; `split a crossing polygon` — tách.
**Examples:** `Antimeridian wrap prevented a Pacific route from appearing as a line across the entire map.` → Wrap ngăn route Thái Bình Dương thành đường vòng thế giới.
**Liên kết tiếng Hàn:** `대척 자오선 래핑`.

## 14. projection distortion /prəˈdʒekʃən dɪˈstɔːrʃən/
**Part of speech:** noun
**Core meaning (English):** error in area, distance, direction, or shape caused by representing the curved earth on a flat surface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sai lệch area/distance/direction/shape khi đưa Trái Đất cong lên mặt phẳng.
**Grammar & collocations:** `projection-distortion analysis` — phân tích; `choose an appropriate projection` — chọn.
**Examples:** `Projection distortion made the high-latitude country look much wider than its measured extent.` → Distortion làm nước vĩ độ cao trông rộng hơn.
**Liên kết tiếng Hàn:** `투영 왜곡`.

## 15. map matching /mæp ˈmætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** inferring the most likely road or path for noisy location observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy ra road/path phù hợp nhất từ location noisy.
**Grammar & collocations:** `map-matching algorithm` — algorithm; `snap a GPS trace to a road` — gắn.
**Examples:** `Map matching turned scattered GPS points into a plausible driving route.` → Matching biến điểm GPS rời thành route hợp lý.
**Liên kết tiếng Hàn:** `지도 매칭`.

## 16. geofence trigger /ˈdʒiːoʊfens ˈtrɪɡər/
**Part of speech:** noun
**Core meaning (English):** an event fired when a tracked object enters, leaves, or remains within a defined geographic boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event bật khi object vào, ra hoặc ở trong boundary địa lý.
**Grammar & collocations:** `geofence-trigger rule` — rule; `notify a driver on entry` — thông báo.
**Examples:** `The geofence trigger notified the warehouse when a truck entered the loading zone.` → Trigger báo warehouse khi truck vào zone.
**Liên kết tiếng Hàn:** `지오펜스 트리거`.

## 17. temporal geometry /ˈtempərəl dʒiˈɒmətri/
**Part of speech:** noun
**Core meaning (English):** a geographic shape whose location, extent, or validity changes over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** shape địa lý thay đổi location, extent hoặc validity theo thời gian.
**Grammar & collocations:** `temporal-geometry version` — version; `query a historical boundary` — truy.
**Examples:** `Temporal geometry showed the district boundary that existed when the permit was issued.` → Geometry cho boundary lịch sử lúc cấp phép.
**Liên kết tiếng Hàn:** `시간적 기하`.

## 18. spatial partition /ˈspeɪʃəl pɑːrˈtɪʃən/
**Part of speech:** noun
**Core meaning (English):** dividing geographic space into regions used for storage, indexing, routing, or parallel processing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia không gian thành vùng để lưu, index, route hoặc xử lý song song.
**Grammar & collocations:** `spatial-partition key` — key; `route a point to a region` — định tuyến.
**Examples:** `The spatial partition sent each delivery event to the worker responsible for its zone.` → Partition gửi event tới worker vùng đó.
**Liên kết tiếng Hàn:** `공간 파티션`.

## 19. nearest-neighbor query /ˈnɪrəst ˈneɪbər ˈkwɪəri/
**Part of speech:** noun
**Core meaning (English):** a query returning the closest objects to a geographic point or shape.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** query trả object gần nhất với point/shape.
**Grammar & collocations:** `nearest-neighbor-query limit` — giới hạn; `rank nearby facilities` — xếp hạng.
**Examples:** `The nearest-neighbor query found the three clinics closest to the caller.` → Query tìm ba clinic gần caller.
**Liên kết tiếng Hàn:** `최근접 이웃 쿼리`.

## 20. location privacy /loʊˈkeɪʃən ˈpraɪvəsi/
**Part of speech:** noun
**Core meaning (English):** protecting where a person or device is, has been, or is likely to go.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo vệ nơi người/device đang ở, đã đến hoặc có thể đến.
**Grammar & collocations:** `location-privacy policy` — policy; `coarsen a reported position` — làm thô.
**Examples:** `Location privacy rounded the delivery driver's position before sharing it with an external partner.` → Privacy làm tròn vị trí trước khi chia sẻ.
**Liên kết tiếng Hàn:** `위치 개인정보 보호`.

## Review in context

A **geohash** and **spatial index** narrow a **bounding box** before a **point-in-polygon** test; a **coordinate reference system** gives meaning, and **geodesic distance** measures the earth's surface. A **tile pyramid** serves scale, a **vector tile** carries shapes, and a **raster tile** carries pixels. A **spatial join** connects layers, **geometry simplification** reduces size, and a **topology error** exposes invalid relationships. **Antimeridian wrap** and **projection distortion** protect map correctness; **map matching** interprets tracks, a **geofence trigger** reacts to boundaries, **temporal geometry** preserves history, a **spatial partition** routes work, a **nearest-neighbor query** finds proximity, and **location privacy** limits exposure.

**Bản dịch tiếng Việt:** **Geohash** và **spatial index** thu hẹp **bounding box** trước test **point-in-polygon**; **coordinate reference system** tạo ý nghĩa, còn **geodesic distance** đo trên bề mặt Trái Đất. **Tile pyramid** phục vụ nhiều scale, **vector tile** mang shape, **raster tile** mang pixel. **Spatial join** nối layer, **geometry simplification** giảm size, và **topology error** lộ quan hệ sai. **Antimeridian wrap** và **projection distortion** bảo vệ tính đúng của map; **map matching** diễn giải track, **geofence trigger** phản ứng boundary, **temporal geometry** giữ lịch sử, **spatial partition** định tuyến công việc, **nearest-neighbor query** tìm khoảng cách, còn **location privacy** giới hạn lộ dữ liệu.
