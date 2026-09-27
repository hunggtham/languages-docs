# C2 Vocabulary 94 — Data visualization and visual analytics

This lesson follows a dataset from measurement to visual explanation, showing how charts encode variables, reveal structure, and communicate uncertainty without disguising complexity.

Flow: **choropleth → cartogram → treemap → scatterplot → boxplot → histogram → heatmap → small multiples → encoding → legend → smoothing → interpolation → dimensionality reduction → clustering → brushing → linked views → uncertainty visualization → axis → tick mark → projection**.

## 1. choropleth /ˈkɔrləˌplɛθ/
**Part of speech:** noun
**Core meaning (English):** a map that represents a variable across geographic areas by filling each area with a graduated color or pattern.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản đồ tô màu theo vùng; hình ảnh mỗi tỉnh hoặc quốc gia đổi màu theo giá trị dữ liệu.
**Grammar & collocations:** `choropleth map` — bản đồ tô màu theo vùng; `choropleth mapping` — lập bản đồ tô màu theo vùng.
**Examples:** `The choropleth showed vaccination rates by county rather than by individual clinic.` → Bản đồ tô màu theo vùng cho thấy tỷ lệ tiêm chủng theo hạt thay vì theo từng phòng khám.
**Liên kết tiếng Hàn:** `단계구분도` (dangye gubundo) — bản đồ phân vùng theo cấp độ.

## 2. cartogram /ˈkɑrtəˌɡræm/
**Part of speech:** noun
**Core meaning (English):** a map that deliberately distorts geographic size or shape to represent a quantitative variable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản đồ biến dạng; hình ảnh vùng đông dân phình to còn vùng ít dân co lại.
**Grammar & collocations:** `population cartogram` — bản đồ biến dạng dân số; `area cartogram` — cartogram theo diện tích.
**Examples:** `A cartogram enlarged cities with many commuters and compressed sparsely populated counties.` → Bản đồ biến dạng phóng to các thành phố có nhiều người đi làm và thu nhỏ các hạt thưa dân.
**Liên kết tiếng Hàn:** `카토그램` (katogeuraem) — bản đồ biến dạng.

## 3. treemap /ˈtriːˌmæp/
**Part of speech:** noun
**Core meaning (English):** a visualization that uses nested rectangles to show hierarchical categories and their relative sizes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu đồ cây chữ nhật; hình ảnh các ô lồng nhau cho thấy nhóm lớn, nhóm con và tỷ trọng.
**Grammar & collocations:** `hierarchical treemap` — treemap phân cấp; `treemap layout` — bố cục treemap.
**Examples:** `The treemap revealed that a few product lines accounted for most of the revenue.` → Biểu đồ cây chữ nhật cho thấy vài dòng sản phẩm chiếm phần lớn doanh thu.
**Liên kết tiếng Hàn:** `트리맵` (teurimaep) — biểu đồ cây chữ nhật.

## 4. scatterplot /ˈskætərˌplɑt/
**Part of speech:** noun
**Core meaning (English):** a chart that places paired observations as points to show the relationship between two quantitative variables.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu đồ phân tán; hình ảnh mỗi điểm là một cặp số để nhìn xu hướng, cụm hoặc ngoại lệ.
**Grammar & collocations:** `scatterplot matrix` — ma trận biểu đồ phân tán; `scatterplot trend` — xu hướng trên biểu đồ phân tán.
**Examples:** `The scatterplot suggested a nonlinear relationship between dosage and response.` → Biểu đồ phân tán gợi ý mối quan hệ phi tuyến giữa liều lượng và đáp ứng.
**Liên kết tiếng Hàn:** `산점도` (sanjeomdo) — biểu đồ phân tán.

## 5. boxplot /ˈbɑksˌplɑt/
**Part of speech:** noun
**Core meaning (English):** a compact chart that summarizes a distribution through its median, quartiles, and potential extreme values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu đồ hộp; hình ảnh một chiếc hộp cho thấy trung vị, khoảng tứ phân vị và râu dữ liệu.
**Grammar & collocations:** `side-by-side boxplot` — biểu đồ hộp đặt cạnh nhau; `boxplot summary` — bản tóm tắt bằng biểu đồ hộp.
**Examples:** `The boxplot made the difference in spread between the two treatments easy to see.` → Biểu đồ hộp làm khác biệt về độ phân tán giữa hai phương pháp dễ thấy.
**Liên kết tiếng Hàn:** `상자수염도` (sangja suma eomdo) — biểu đồ hộp và râu.

## 6. histogram /ˈhɪstəˌɡræm/
**Part of speech:** noun
**Core meaning (English):** a chart that groups numerical observations into adjacent intervals and displays their frequencies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu đồ tần suất; hình ảnh các cột liền nhau cho thấy dữ liệu tập trung, lệch hay có nhiều đỉnh.
**Grammar & collocations:** `frequency histogram` — biểu đồ tần suất; `histogram bin` — khoảng chia của histogram.
**Examples:** `The histogram showed a long right tail caused by a small number of very large claims.` → Biểu đồ tần suất cho thấy đuôi phải dài do một số ít hồ sơ bồi thường rất lớn.
**Liên kết tiếng Hàn:** `히스토그램` (hiseutogeuraem) — biểu đồ tần suất.

## 7. heatmap /ˈhiːtˌmæp/
**Part of speech:** noun
**Core meaning (English):** a matrix or map that uses color intensity to represent the magnitude of values across positions or categories.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản đồ nhiệt; hình ảnh màu đậm nhạt làm nổi bật nơi giá trị cao thấp trong ma trận.
**Grammar & collocations:** `correlation heatmap` — bản đồ nhiệt tương quan; `heatmap cell` — ô trong bản đồ nhiệt.
**Examples:** `The heatmap exposed a cluster of errors during the first hour of every shift.` → Bản đồ nhiệt phơi bày một cụm lỗi trong giờ đầu của mỗi ca.
**Liên kết tiếng Hàn:** `히트맵` (hiteumaep) — bản đồ nhiệt.

## 8. small multiples /smɔl ˈmʌltəpəlz/
**Part of speech:** noun
**Core meaning (English):** a set of repeated, similarly designed charts that show comparable data slices side by side.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu đồ lặp nhỏ; hình ảnh nhiều ô cùng kiểu để mắt so sánh các nhóm hoặc thời điểm.
**Grammar & collocations:** `small-multiples display` — bố cục biểu đồ lặp nhỏ; `use small multiples` — dùng biểu đồ lặp nhỏ.
**Examples:** `Small multiples compared the same air-quality measure across twelve months.` → Biểu đồ lặp nhỏ so sánh cùng một chỉ số chất lượng không khí qua mười hai tháng.
**Liên kết tiếng Hàn:** `소형 다중 그래프` (sohyeong dajung geuraepeu) — biểu đồ lặp nhỏ.

## 9. encoding /ɪnˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** the choice of visual properties such as position, size, color, or shape to represent data values or categories.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã hóa thị giác; hình ảnh biến một con số thành vị trí, màu, kích thước hoặc hình dạng.
**Grammar & collocations:** `visual encoding` — mã hóa thị giác; `encoding channel` — kênh mã hóa.
**Examples:** `Position is usually a more precise encoding of value than area or color.` → Vị trí thường mã hóa giá trị chính xác hơn diện tích hoặc màu sắc.
**Liên kết tiếng Hàn:** `시각적 부호화` (sigakjeok buh ohwa) — mã hóa thị giác.

## 10. legend /ˈlɛdʒənd/
**Part of speech:** noun
**Core meaning (English):** a key that explains the meaning of colors, symbols, line types, or other visual encodings in a chart or map.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chú giải; hình ảnh bảng “dịch” màu và ký hiệu trong biểu đồ thành ý nghĩa dữ liệu.
**Grammar & collocations:** `map legend` — chú giải bản đồ; `legend label` — nhãn trong chú giải.
**Examples:** `The legend clarified that darker bands represented higher uncertainty, not higher values.` → Chú giải làm rõ các dải đậm hơn biểu thị độ bất định cao hơn chứ không phải giá trị cao hơn.
**Liên kết tiếng Hàn:** `범례` (beomnye) — chú giải.

## 11. smoothing /ˈsmuːðɪŋ/
**Part of speech:** noun
**Core meaning (English):** a statistical or visual technique that reduces short-term variation to reveal an underlying trend.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** làm trơn; hình ảnh làm dịu các dao động nhỏ để nhìn hướng đi chung của chuỗi dữ liệu.
**Grammar & collocations:** `smoothing curve` — đường cong làm trơn; `moving-average smoothing` — làm trơn bằng trung bình trượt.
**Examples:** `Smoothing made the long-term decline visible without removing the original observations.` → Làm trơn làm rõ xu hướng giảm dài hạn mà không xóa các quan sát gốc.
**Liên kết tiếng Hàn:** `평활화` (pyeonghwalhwa) — làm trơn.

## 12. interpolation /ɪnˌtɝpəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** the estimation of unknown values between known observations or locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nội suy; hình ảnh nối các điểm đã đo để ước tính giá trị ở khoảng trống giữa chúng.
**Grammar & collocations:** `spatial interpolation` — nội suy không gian; `interpolation method` — phương pháp nội suy.
**Examples:** `Interpolation estimated rainfall between the stations but did not create new measurements.` → Nội suy ước tính lượng mưa giữa các trạm nhưng không tạo ra phép đo mới.
**Liên kết tiếng Hàn:** `보간` (bogan) — nội suy.

## 13. dimensionality reduction /daɪˌmɛnʃəˈnæləti rɪˈdʌkʃən/
**Part of speech:** noun
**Core meaning (English):** a method for representing high-dimensional data with fewer dimensions while preserving important structure or variation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm chiều dữ liệu; hình ảnh nén hàng trăm biến xuống vài trục để nhìn cụm và khoảng cách.
**Grammar & collocations:** `dimensionality-reduction algorithm` — thuật toán giảm chiều; `nonlinear dimensionality reduction` — giảm chiều phi tuyến.
**Examples:** `Dimensionality reduction placed similar customer profiles close together on a two-dimensional map.` → Giảm chiều dữ liệu đặt các hồ sơ khách hàng tương tự gần nhau trên bản đồ hai chiều.
**Liên kết tiếng Hàn:** `차원 축소` (chawon chukso) — giảm chiều.

## 14. clustering /ˈklʌstərɪŋ/
**Part of speech:** noun
**Core meaning (English):** the grouping of observations according to similarity without requiring predefined labels.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân cụm; hình ảnh thuật toán gom các điểm giống nhau thành nhóm mà không cần nhãn ban đầu.
**Grammar & collocations:** `unsupervised clustering` — phân cụm không giám sát; `clustering algorithm` — thuật toán phân cụm.
**Examples:** `Clustering revealed three behavioral groups that the original categories had obscured.` → Phân cụm phát hiện ba nhóm hành vi mà các phân loại ban đầu che khuất.
**Liên kết tiếng Hàn:** `군집화` (gunjiphwa) — phân cụm.

## 15. brushing /ˈbrʌʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** interactively selecting data points in one view so that the same observations are highlighted elsewhere.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quét chọn tương tác; hình ảnh dùng chuột “quét” một nhóm điểm và thấy chúng sáng lên ở biểu đồ khác.
**Grammar & collocations:** `interactive brushing` — quét chọn tương tác; `brushing-and-linking` — quét chọn và liên kết.
**Examples:** `Brushing the outlying points revealed their locations and original records in the linked table.` → Quét chọn các điểm lệch cho thấy vị trí và hồ sơ gốc của chúng trong bảng liên kết.
**Liên kết tiếng Hàn:** `브러싱` (beureosing) — quét chọn tương tác.

## 16. linked views /lɪŋkt vjuːz/
**Part of speech:** noun
**Core meaning (English):** multiple coordinated visual displays that update together when the analyst selects or filters observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các khung nhìn liên kết; hình ảnh thay đổi ở bản đồ đồng thời cập nhật biểu đồ và bảng dữ liệu.
**Grammar & collocations:** `coordinated linked views` — các khung nhìn liên kết phối hợp; `linked-view interface` — giao diện khung nhìn liên kết.
**Examples:** `Linked views connected the regional map to a time series and a table of cases.` → Các khung nhìn liên kết nối bản đồ vùng với chuỗi thời gian và bảng ca bệnh.
**Liên kết tiếng Hàn:** `연결 뷰` (yeongyeol byu) — khung nhìn liên kết.

## 17. uncertainty visualization /ʌnˈsɝtənti ˌvɪʒuələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the visual representation of measurement error, incomplete knowledge, variability, or confidence in a result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trực quan hóa độ bất định; hình ảnh biểu đồ cho thấy không chỉ giá trị ước tính mà cả mức tin cậy.
**Grammar & collocations:** `uncertainty-visualization technique` — kỹ thuật trực quan hóa độ bất định; `visualize uncertainty` — trực quan hóa độ bất định.
**Examples:** `Uncertainty visualization prevented the forecast line from appearing more precise than the data allowed.` → Trực quan hóa độ bất định ngăn đường dự báo trông chính xác hơn mức dữ liệu cho phép.
**Liên kết tiếng Hàn:** `불확실성 시각화` (bulhwaksilseong sigakhwa) — trực quan hóa độ bất định.

## 18. axis /ˈæksɪs/
**Part of speech:** noun
**Core meaning (English):** a reference line or scale in a chart used to position and interpret values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trục; hình ảnh đường chuẩn cho biết dữ liệu nằm ở mức nào và theo chiều nào.
**Grammar & collocations:** `horizontal axis` — trục ngang; `axis label` — nhãn trục.
**Examples:** `The chart used a logarithmic axis to display values spanning several orders of magnitude.` → Biểu đồ dùng trục logarit để hiển thị các giá trị trải qua nhiều bậc độ lớn.
**Liên kết tiếng Hàn:** `축` (chuk) — trục.

## 19. tick mark /tɪk mɑrk/
**Part of speech:** noun
**Core meaning (English):** a short mark on an axis that indicates a measurement position or value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vạch chia; hình ảnh các dấu nhỏ trên trục giúp đọc chính xác con số.
**Grammar & collocations:** `major tick mark` — vạch chia chính; `tick-mark interval` — khoảng giữa các vạch chia.
**Examples:** `The dense tick marks made the crowded axis difficult to read on a phone screen.` → Các vạch chia dày khiến trục chật khó đọc trên màn hình điện thoại.
**Liên kết tiếng Hàn:** `눈금 표시` (nungeum pyosi) — vạch chia.

## 20. projection /prəˈdʒɛkʃən/
**Part of speech:** noun
**Core meaning (English):** a mathematical transformation that maps data from one coordinate space or dimension into another for display or analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép chiếu; hình ảnh biến dữ liệu nhiều chiều hoặc bề mặt cong thành mặt phẳng để xem.
**Grammar & collocations:** `map projection` — phép chiếu bản đồ; `projection method` — phương pháp chiếu.
**Examples:** `The map projection preserved local angles but distorted the size of high-latitude regions.` → Phép chiếu bản đồ giữ góc địa phương nhưng làm méo kích thước vùng vĩ độ cao.
**Liên kết tiếng Hàn:** `투영` (tuyeong) — phép chiếu.

## Review in context

A **choropleth** and a **cartogram** encode geographic values differently, while a **treemap** reveals hierarchy. A **scatterplot**, **boxplot**, **histogram**, and **heatmap** answer different distribution questions; **small multiples** make repeated comparisons easier. Good **encoding** and a clear **legend** reduce confusion. **Smoothing** reveals trends, **interpolation** estimates gaps, and **dimensionality reduction** helps expose structure before **clustering** groups observations. **Brushing** and **linked views** connect an analyst's selections, while **uncertainty visualization** shows what remains unknown. Every **axis**, **tick mark**, and **projection** shapes how the viewer interprets the data.

**Bản dịch tiếng Việt:**

Bản đồ tô màu theo vùng và bản đồ biến dạng mã hóa giá trị địa lý theo những cách khác nhau, còn biểu đồ cây chữ nhật cho thấy cấu trúc phân cấp. Biểu đồ phân tán, biểu đồ hộp, biểu đồ tần suất và bản đồ nhiệt trả lời các câu hỏi khác nhau về phân bố; biểu đồ lặp nhỏ giúp so sánh lặp lại dễ hơn. Mã hóa tốt và chú giải rõ làm giảm nhầm lẫn. Làm trơn cho thấy xu hướng, nội suy ước tính khoảng trống, còn giảm chiều dữ liệu giúp lộ cấu trúc trước khi phân cụm các quan sát. Quét chọn và các khung nhìn liên kết nối lựa chọn của nhà phân tích, trong khi trực quan hóa độ bất định cho thấy điều còn chưa biết. Mỗi trục, vạch chia và phép chiếu đều định hình cách người xem diễn giải dữ liệu.
