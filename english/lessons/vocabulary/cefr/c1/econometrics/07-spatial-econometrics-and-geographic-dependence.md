# C1 Vocabulary 07 — Spatial econometrics and geographic dependence

This lesson explains how geographic relationships, neighboring units, and map boundaries affect econometric inference.

Flow: **spatial lag model → spatial error model → spatial weights matrix → contiguity matrix → distance decay → spatial clustering → Moran's I → Geary's C → Lagrange multiplier test → spillover parameter → direct effect → indirect effect → total effect → spatial Durbin model → spatial panel model → boundary mismatch → modifiable areal unit problem → ecological spatial unit → spatial heterogeneity → spatial dependence**.

## 1. spatial lag model /ˈspeɪʃəl læɡ ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model in which an outcome depends partly on outcomes observed in neighboring locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** outcome ở một nơi phụ thuộc một phần outcome nơi lân cận.
**Grammar & collocations:** `spatial-lag-model coefficient` — coefficient; `model neighbor outcomes` — mô hình.
**Examples:** `The spatial lag model captured house prices moving together across adjacent districts.` → Model bắt giá nhà di chuyển cùng nhau giữa district kề nhau.
**Liên kết tiếng Hàn:** `공간 시차 모형`.

## 2. spatial error model /ˈspeɪʃəl ˈɛrər ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model in which spatial dependence appears in the unobserved error component rather than directly in the outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dependence địa lý nằm trong error ẩn, không trực tiếp ở outcome.
**Grammar & collocations:** `spatial-error-model specification` — specification; `model correlated disturbances` — mô hình.
**Examples:** `The spatial error model allowed neighboring planning shocks to remain correlated after observed controls.` → Model cho shock quy hoạch lân cận còn tương quan.
**Liên kết tiếng Hàn:** `공간 오차 모형`.

## 3. spatial weights matrix /ˈspeɪʃəl weɪts ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a matrix that records which locations are connected and how strongly each location influences another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận ghi nơi nào nối với nhau và mức ảnh hưởng.
**Grammar & collocations:** `spatial-weights-matrix specification` — specification; `row-standardize the weights` — chuẩn hóa.
**Examples:** `The spatial weights matrix linked each county to its bordering counties.` → Matrix nối mỗi county với county giáp ranh.
**Liên kết tiếng Hàn:** `공간 가중치 행렬`.

## 4. contiguity matrix /kənˈtɪɡjuəti ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a matrix defining geographic neighbors according to shared borders or corners.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận xác định hàng xóm theo biên hoặc góc chung.
**Grammar & collocations:** `contiguity-matrix rule` — rule; `define queen contiguity` — định nghĩa.
**Examples:** `The contiguity matrix treated two regions as neighbors when they shared a border.` → Matrix coi hai vùng là hàng xóm khi chung biên.
**Liên kết tiếng Hàn:** `인접 행렬`.

## 5. distance decay /ˈdɪstəns dɪˈkeɪ/
**Part of speech:** noun
**Core meaning (English):** the decline in influence or interaction as geographic distance increases.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ảnh hưởng/tương tác giảm khi khoảng cách địa lý tăng.
**Grammar & collocations:** `distance-decay function` — function; `weight nearby locations more heavily` — gán trọng số.
**Examples:** `Distance decay made a nearby labor market more relevant than a distant one.` → Decay làm thị trường lao động gần liên quan hơn.
**Liên kết tiếng Hàn:** `거리 감쇠`.

## 6. spatial clustering /ˈspeɪʃəl ˈklʌstərɪŋ/
**Part of speech:** noun
**Core meaning (English):** the concentration of similar values or events in geographically nearby locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị/sự kiện giống nhau tập trung ở nơi gần nhau.
**Grammar & collocations:** `spatial-clustering diagnostic` — diagnostic; `map concentrated outcomes` — lập bản đồ.
**Examples:** `Spatial clustering showed that high vacancy rates formed a connected urban belt.` → Clustering cho thấy vacancy cao tạo một vành đai liên tục.
**Liên kết tiếng Hàn:** `공간 군집화`.

## 7. Moran's I /məˈrɑnz aɪ/
**Part of speech:** noun
**Core meaning (English):** a statistic measuring whether nearby locations have similar or contrasting values relative to the overall pattern.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** statistic đo nơi gần có value giống/đối lập so với pattern chung.
**Grammar & collocations:** `Moran's-I statistic` — statistic; `test global spatial association` — kiểm tra.
**Examples:** `Moran's I indicated positive association among neighboring unemployment rates.` → Moran's I cho thấy thất nghiệp lân cận có liên hệ dương.
**Liên kết tiếng Hàn:** `모란의 I`.

## 8. Geary's C /ˈɡɪriz siː/
**Part of speech:** noun
**Core meaning (English):** a statistic emphasizing local differences between neighboring observations when measuring geographic association.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** statistic nhấn mạnh khác biệt local giữa observation lân cận.
**Grammar & collocations:** `Geary's-C statistic` — statistic; `detect local contrast` — phát hiện.
**Examples:** `Geary's C was sensitive to a sharp boundary between high- and low-income neighborhoods.` → Geary's C nhạy với ranh giới income rõ.
**Liên kết tiếng Hàn:** `기어리의 C`.

## 9. Lagrange multiplier test /ləˈɡrɑnʒ ˈmʌltəˌplaɪər tɛst/
**Part of speech:** noun
**Core meaning (English):** a diagnostic test for whether a restricted model should include a spatial lag, spatial error, or related structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test xem model hạn chế cần thêm cấu trúc spatial nào.
**Grammar & collocations:** `Lagrange-multiplier-test statistic` — statistic; `test a spatial restriction` — kiểm tra.
**Examples:** `The Lagrange multiplier test favored a spatial error specification over an ordinary regression.` → Test nghiêng spatial error hơn hồi quy thường.
**Liên kết tiếng Hàn:** `라그랑주 승수 검정`.

## 10. spillover parameter /ˈspɪlˌoʊvər pəˈræmətər/
**Part of speech:** noun
**Core meaning (English):** a parameter describing how an effect travels from one location or unit to connected locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tham số mô tả effect lan từ nơi này sang nơi nối với nó.
**Grammar & collocations:** `spillover-parameter estimate` — estimate; `trace cross-border effects` — truy.
**Examples:** `The spillover parameter was positive for a road investment near the regional border.` → Parameter dương với đầu tư đường gần biên vùng.
**Liên kết tiếng Hàn:** `파급 매개변수`.

## 11. direct effect /dəˈrɛkt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the effect of changing a unit's predictor on that same unit's outcome in a spatial model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** predictor của unit đổi và outcome chính unit đó đổi.
**Grammar & collocations:** `direct-effect estimate` — estimate; `interpret own-unit impact` — diễn giải.
**Examples:** `The direct effect measured how a city's own transit investment changed its employment.` → Direct effect đo đầu tư transit của city lên việc làm chính city.
**Liên kết tiếng Hàn:** `직접 효과`.

## 12. indirect effect /ˌɪndəˈrɛkt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the effect on a unit caused by changes in connected units' predictors or outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect lên unit do predictor/outcome nơi nối với nó đổi.
**Grammar & collocations:** `indirect-effect estimate` — estimate; `capture neighbor influence` — bắt ảnh hưởng hàng xóm.
**Examples:** `The indirect effect showed that investment in neighboring counties raised local demand.` → Effect gián tiếp cho thấy đầu tư county bên cạnh tăng demand local.
**Liên kết tiếng Hàn:** `간접 효과`.

## 13. total effect /ˈtoʊtəl ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the combined direct and indirect effect of a change in a spatial system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tổng direct effect và indirect effect.
**Grammar & collocations:** `total-effect decomposition` — decomposition; `sum own and neighbor impacts` — cộng.
**Examples:** `The total effect exceeded the direct effect because neighboring responses reinforced the policy.` → Total effect lớn hơn direct vì hàng xóm củng cố policy.
**Liên kết tiếng Hàn:** `총 효과`.

## 14. spatial Durbin model /ˈspeɪʃəl ˈdɝbən ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a spatial model containing both a lagged outcome and spatially lagged explanatory variables.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model có outcome lag và predictor lag theo không gian.
**Grammar & collocations:** `spatial-Durbin-model coefficient` — coefficient; `model local and neighbor predictors` — mô hình.
**Examples:** `The spatial Durbin model separated a city's own infrastructure from infrastructure in nearby cities.` → Model tách infrastructure own và neighbor.
**Liên kết tiếng Hàn:** `공간 더빈 모형`.

## 15. spatial panel model /ˈspeɪʃəl ˈpænəl ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a panel-data model that represents both repeated observations over time and geographic dependence across units.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model panel vừa có lặp theo thời gian vừa có dependence địa lý.
**Grammar & collocations:** `spatial-panel-model specification` — specification; `combine time and geography` — kết hợp.
**Examples:** `The spatial panel model followed counties over ten years while allowing neighboring shocks.` → Model theo county ten years và cho shock lân cận.
**Liên kết tiếng Hàn:** `공간 패널 모형`.

## 16. boundary mismatch /ˈbaʊndəri mɪsˈmætʃ/
**Part of speech:** noun
**Core meaning (English):** a mismatch between the geographic boundaries used in data and the boundaries relevant to the process being studied.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới data không khớp ranh giới process thật.
**Grammar & collocations:** `boundary-mismatch problem` — problem; `reconcile administrative and functional regions` — dung hòa.
**Examples:** `Boundary mismatch hid commuting links that crossed municipal borders.` → Mismatch che liên kết đi lại vượt biên municipality.
**Liên kết tiếng Hàn:** `경계 불일치`.

## 17. modifiable areal unit problem /ˈmɑdəˌfaɪəbəl ˈɛriəl ˈjuːnɪt ˈprɑbləm/
**Part of speech:** noun
**Core meaning (English):** the problem that results can change when the same data are grouped into different geographic units or scales.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết quả đổi khi cùng data được gộp theo vùng/scale khác.
**Grammar & collocations:** `modifiable-areal-unit-problem sensitivity` — sensitivity; `compare geographic aggregations` — so.
**Examples:** `The modifiable areal unit problem made the poverty association depend on whether data used districts or provinces.` → Kết quả phụ thuộc dùng district hay province.
**Liên kết tiếng Hàn:** `수정 가능한 공간 단위 문제`.

## 18. ecological spatial unit /ˌiːkəˈlɑdʒɪkəl ˈspeɪʃəl ˈjuːnɪt/
**Part of speech:** noun
**Core meaning (English):** a geographic unit defined by environmental or functional relationships rather than only administrative borders.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đơn vị địa lý theo quan hệ môi trường/chức năng, không chỉ biên hành chính.
**Grammar & collocations:** `ecological-spatial-unit map` — map; `define a watershed unit` — định nghĩa.
**Examples:** `An ecological spatial unit followed the watershed instead of the county boundary.` → Unit theo lưu vực thay vì county.
**Liên kết tiếng Hàn:** `생태 공간 단위`.

## 19. spatial heterogeneity /ˈspeɪʃəl ˌhɛtərədʒəˈniəti/
**Part of speech:** noun
**Core meaning (English):** variation in relationships, effects, or processes across geographic locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ/effect/process khác nhau tùy địa điểm.
**Grammar & collocations:** `spatial-heterogeneity test` — test; `allow location-specific effects` — cho phép.
**Examples:** `Spatial heterogeneity meant that the transit effect was positive downtown but negligible in rural areas.` → Effect transit khác giữa downtown và rural.
**Liên kết tiếng Hàn:** `공간적 이질성`.

## 20. spatial dependence /ˈspeɪʃəl dɪˈpɛndəns/
**Part of speech:** noun
**Core meaning (English):** statistical dependence between observations because their locations are connected or nearby.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** observation phụ thuộc vì vị trí gần hoặc liên kết.
**Grammar & collocations:** `spatial-dependence diagnostic` — diagnostic; `adjust inference for neighboring units` — điều chỉnh.
**Examples:** `Ignoring spatial dependence made the confidence interval for the housing effect too narrow.` → Bỏ qua dependence làm interval housing effect hẹp giả.
**Liên kết tiếng Hàn:** `공간 의존성`.

## Review in context

A **spatial lag model** places neighboring outcomes in the model, while a **spatial error model** places dependence in the disturbance. A **spatial weights matrix** may use a **contiguity matrix** or **distance decay**; **spatial clustering**, **Moran's I**, and **Geary's C** summarize geographic association. A **Lagrange multiplier test** can guide specification, and a **spillover parameter** helps separate a **direct effect**, **indirect effect**, and **total effect**. A **spatial Durbin model** and **spatial panel model** combine local, neighboring, and time-linked information. Analysts must examine **boundary mismatch**, the **modifiable areal unit problem**, and the choice of an **ecological spatial unit**. **Spatial heterogeneity** and **spatial dependence** limit naive interpretation.

**Bản dịch tiếng Việt:** **Spatial lag model** đưa outcome lân cận vào model, còn **spatial error model** đặt dependence trong disturbance. **Spatial weights matrix** có thể dùng **contiguity matrix** hoặc **distance decay**; **spatial clustering**, **Moran's I** và **Geary's C** tóm tắt liên hệ địa lý. **Lagrange multiplier test** hỗ trợ chọn specification, còn **spillover parameter** giúp tách **direct effect**, **indirect effect** và **total effect**. **Spatial Durbin model** và **spatial panel model** kết hợp information local, neighbor và time. Analyst phải xem **boundary mismatch**, **modifiable areal unit problem** và lựa chọn **ecological spatial unit**. **Spatial heterogeneity** và **spatial dependence** giới hạn diễn giải đơn giản.
