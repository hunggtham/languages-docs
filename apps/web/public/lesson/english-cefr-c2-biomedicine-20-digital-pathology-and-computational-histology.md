# C2 Vocabulary — Digital pathology and computational histology

This lesson follows a tissue slide from staining and scanning through computational segmentation, spatial analysis, and report abstraction.

Flow: **whole-slide imaging → tissue microarray → stain normalization → color deconvolution → nuclei segmentation → glandular architecture → cell density map → spatial neighborhood → patch extraction → tiling artifact → focus quality → z-stack → multiplex immunofluorescence → antigen retrieval → pathology foundation model → weak supervision → slide-level label → region-of-interest → pathology report abstraction → cell graph**.

## 1. whole-slide imaging /hoʊl slaɪd ˈɪmɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** scanning an entire glass pathology slide at high resolution to create a digital image for viewing or analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số hóa cả slide kính thành ảnh cực lớn để pathologist hoặc model xem.
**Grammar & collocations:** `whole-slide-imaging scanner` — scanner; `whole-slide image` — ảnh toàn slide.
**Examples:** `Whole-slide imaging let the reviewer inspect the same specimen remotely at multiple magnifications.` → Imaging toàn slide cho phép reviewer xem specimen từ xa ở nhiều mức phóng đại.
**Liên kết tiếng Hàn:** `전장 슬라이드 영상`.

## 2. tissue microarray /ˈtɪʃuː ˈmaɪkroʊəˌreɪ/
**Part of speech:** noun
**Core meaning (English):** a slide containing many small tissue cores arranged in a grid for parallel staining or testing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều lõi mô nhỏ xếp trên một slide để thử đồng thời.
**Grammar & collocations:** `tissue-microarray block` — block; `array tissue cores` — xếp lõi mô.
**Examples:** `The tissue microarray compared marker expression across dozens of tumors in one assay.` → Microarray so sánh expression marker của hàng chục khối u trong một assay.
**Liên kết tiếng Hàn:** `조직 마이크로어레이`.

## 3. stain normalization /steɪn ˌnɔrməlaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** adjusting color and intensity differences so slides stained by different batches or laboratories are more comparable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuẩn hóa màu/độ đậm giữa các batch stain và lab.
**Grammar & collocations:** `stain-normalization method` — method; `normalize hematoxylin intensity` — normalize.
**Examples:** `Stain normalization reduced the laboratory effect in the tumor-classification model.` → Normalization giảm ảnh hưởng của lab trong model phân loại u.
**Liên kết tiếng Hàn:** `염색 정규화`.

## 4. color deconvolution /ˈkʌlər ˌdiːkɑnvəˈluːʃən/
**Part of speech:** noun
**Core meaning (English):** separating a composite histology image into estimated channels for its individual stains.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách ảnh màu trộn thành channel của từng loại stain.
**Grammar & collocations:** `color-deconvolution channel` — channel; `deconvolve stain signals` — tách.
**Examples:** `Color deconvolution separated the nuclear stain from the counterstain before segmentation.` → Deconvolution tách stain nhân khỏi counterstain trước segmentation.
**Liên kết tiếng Hàn:** `색상 디컨볼루션`.

## 5. nuclei segmentation /ˈnuːkliaɪ ˌsɛɡmənˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** identifying and delineating individual cell nuclei in a tissue image.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm ranh giới từng nhân tế bào để đếm và đo hình dạng.
**Grammar & collocations:** `nuclei-segmentation mask` — mask; `segment touching nuclei` — tách nhân chạm nhau.
**Examples:** `Nuclei segmentation failed where overlapping cells had nearly identical intensity.` → Segmentation nhân thất bại nơi cell chồng lấn có intensity gần giống.
**Liên kết tiếng Hàn:** `핵 분할`.

## 6. glandular architecture /ˈɡlændʒələr ˈɑrkəˌtɛktʃər/
**Part of speech:** noun
**Core meaning (English):** the organization and shape of glands or gland-like structures in tissue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cách các tuyến tạo cấu trúc, lumen và pattern trong mô.
**Grammar & collocations:** `glandular-architecture feature` — feature; `assess gland formation` — đánh giá.
**Examples:** `The classifier used glandular architecture to distinguish organized tissue from invasive growth.` → Classifier dùng architecture tuyến để phân biệt mô có tổ chức với growth xâm lấn.
**Liên kết tiếng Hàn:** `선 구조`.

## 7. cell density map /sɛl ˈdɛnsəti mæp/
**Part of speech:** noun
**Core meaning (English):** a spatial representation of how many cells or nuclei occur across regions of a tissue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản đồ mật độ cell theo từng vùng trên slide.
**Grammar & collocations:** `cell-density-map gradient` — gradient; `estimate cell density` — ước lượng.
**Examples:** `The cell density map highlighted a crowded invasive front near the boundary.` → Map density làm nổi vùng xâm lấn đông cell gần ranh giới.
**Liên kết tiếng Hàn:** `세포 밀도 지도`.

## 8. spatial neighborhood /ˈspeɪʃəl ˈneɪbərˌhʊd/
**Part of speech:** noun
**Core meaning (English):** the local arrangement and composition of cells surrounding a selected cell or region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “hàng xóm” của cell, gồm cell nào ở gần và tỷ lệ ra sao.
**Grammar & collocations:** `spatial-neighborhood feature` — feature; `define a neighborhood radius` — định nghĩa.
**Examples:** `The spatial neighborhood of immune cells predicted response better than total cell count alone.` → Neighborhood của immune cell dự đoán response tốt hơn tổng số cell.
**Liên kết tiếng Hàn:** `공간적 이웃`.

## 9. patch extraction /pætʃ ɪkˈstrækʃən/
**Part of speech:** noun
**Core meaning (English):** cutting a large digital slide into smaller image regions for storage, training, or local analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cắt slide khổng lồ thành patch vừa cho model xử lý.
**Grammar & collocations:** `patch-extraction stride` — stride; `extract tissue patches` — trích patch.
**Examples:** `Patch extraction skipped blank background tiles to reduce training cost.` → Extraction bỏ tile nền trắng để giảm chi phí train.
**Liên kết tiếng Hàn:** `패치 추출`.

## 10. tiling artifact /ˈtaɪlɪŋ ˈɑrtəfækt/
**Part of speech:** noun
**Core meaning (English):** an artificial boundary, seam, or prediction inconsistency introduced when a large image is processed as separate tiles.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường nối hoặc khác biệt giả tạo giữa patch kề nhau.
**Grammar & collocations:** `tiling-artifact correction` — correction; `blend tile edges` — blend.
**Examples:** `Overlap and blending reduced a tiling artifact along the reconstructed tissue edge.` → Overlap và blending giảm artifact đường nối ở mép mô.
**Liên kết tiếng Hàn:** `타일링 인공물`.

## 11. focus quality /ˈfoʊkəs ˈkwɑləti/
**Part of speech:** noun
**Core meaning (English):** a measure of whether a scanned region is sharp enough for reliable visual or computational interpretation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ nét của vùng scan; focus kém làm model và người đọc sai.
**Grammar & collocations:** `focus-quality score` — điểm; `flag an out-of-focus region` — đánh dấu.
**Examples:** `The scanner flagged low focus quality near the folded section of the slide.` → Scanner báo focus thấp gần phần slide bị gấp.
**Liên kết tiếng Hàn:** `초점 품질`.

## 12. z-stack /ˈziː stæk/
**Part of speech:** noun
**Core meaning (English):** a series of images captured at successive focal depths through a three-dimensional specimen.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi ảnh ở nhiều độ sâu focus để dựng hoặc xem cấu trúc 3D.
**Grammar & collocations:** `z-stack acquisition` — acquisition; `inspect focal planes` — xem mặt phẳng.
**Examples:** `The z-stack revealed that the apparent overlap came from cells at different depths.` → Z-stack cho thấy overlap chỉ là cell ở các độ sâu khác nhau.
**Liên kết tiếng Hàn:** `z-스택`.

## 13. multiplex immunofluorescence /ˈmʌltɪˌplɛks ˌɪmjənoʊflʊəˈrɛsəns/
**Part of speech:** noun
**Core meaning (English):** imaging several fluorescent markers in the same tissue section to characterize multiple cell states or interactions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều marker huỳnh quang cùng lúc trên một lát mô.
**Grammar & collocations:** `multiplex-immunofluorescence panel` — panel; `co-localize markers` — đồng vị trí.
**Examples:** `Multiplex immunofluorescence mapped immune and tumor markers in one section.` → Multiplex map marker immune và tumor trong cùng lát mô.
**Liên kết tiếng Hàn:** `다중 면역형광`.

## 14. antigen retrieval /ˈæntɪdʒən rɪˈtriːvəl/
**Part of speech:** noun
**Core meaning (English):** a treatment that restores or exposes tissue epitopes so antibodies can bind after fixation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xử lý mô để “mở lại” epitope bị che sau fixation.
**Grammar & collocations:** `antigen-retrieval buffer` — buffer; `perform heat-induced retrieval` — thực hiện.
**Examples:** `Antigen retrieval improved the signal for a marker masked during fixation.` → Retrieval cải thiện signal marker bị che khi cố định.
**Liên kết tiếng Hàn:** `항원 회복`.

## 15. pathology foundation model /pəˈθɑlədʒi faʊnˈdeɪʃən ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a large pretrained model intended to provide reusable representations across pathology image tasks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model nền train trên nhiều slide để chuyển sang nhiều task pathology.
**Grammar & collocations:** `pathology-foundation-model embedding` — embedding; `adapt a foundation model` — điều chỉnh.
**Examples:** `The pathology foundation model supplied embeddings for a small tumor-grading dataset.` → Model nền pathology cung cấp embedding cho dataset grade u nhỏ.
**Liên kết tiếng Hàn:** `병리 파운데이션 모델`.

## 16. weak supervision /wiːk ˌsuːpərˈvɪʒən/
**Part of speech:** noun
**Core meaning (English):** learning from incomplete, noisy, or indirect labels instead of precise labels for every image region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** label yếu như nhãn ở mức slide thay vì vẽ từng cell.
**Grammar & collocations:** `weak-supervision signal` — signal; `train with noisy labels` — train.
**Examples:** `Weak supervision used slide-level diagnoses to learn a patch-ranking model.` → Supervision yếu dùng chẩn đoán ở mức slide để học model xếp hạng patch.
**Liên kết tiếng Hàn:** `약한 감독 학습`.

## 17. slide-level label /slaɪd ˈlɛvəl ˈleɪbəl/
**Part of speech:** noun
**Core meaning (English):** a label assigned to an entire slide even though the relevant evidence may occupy only a small region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhãn cho cả slide, không nói chính xác patch nào chứa bệnh.
**Grammar & collocations:** `slide-level-label noise` — noise; `aggregate patch evidence` — aggregate.
**Examples:** `A slide-level label marked the specimen positive although most of the tissue was benign.` → Label toàn slide đánh dấu positive dù phần lớn mô lành.
**Liên kết tiếng Hàn:** `슬라이드 수준 라벨`.

## 18. region-of-interest /ˈriːdʒən əv ˈɪntərəst/
**Part of speech:** noun
**Core meaning (English):** a selected image area chosen for focused measurement, annotation, or review.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng được chọn để đo hoặc review sâu hơn.
**Grammar & collocations:** `region-of-interest annotation` — annotation; `draw an ROI` — vẽ ROI.
**Examples:** `The pathologist marked a region-of-interest around the suspected invasive focus.` → Pathologist đánh dấu ROI quanh vùng nghi xâm lấn.
**Liên kết tiếng Hàn:** `관심 영역`.

## 19. pathology report abstraction /pəˈθɑlədʒi rɪˈpɔrt æbˈstrækʃən/
**Part of speech:** noun
**Core meaning (English):** converting narrative pathology reports into structured variables for research or decision support.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển report chữ thành field có cấu trúc để phân tích.
**Grammar & collocations:** `pathology-report-abstraction schema` — schema; `abstract tumor grade` — trích xuất.
**Examples:** `Pathology report abstraction captured grade, margin status, and treatment response.` → Abstraction lấy grade, margin status và response điều trị.
**Liên kết tiếng Hàn:** `병리 보고서 추출`.

## 20. cell graph /sɛl ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph whose nodes are cells and whose edges encode spatial proximity or biological interaction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph coi cell là node, quan hệ gần nhau là edge.
**Grammar & collocations:** `cell-graph feature` — feature; `construct a cell graph` — dựng graph.
**Examples:** `The cell graph represented immune-tumor contacts that a simple cell count could not describe.` → Cell graph mô tả tiếp xúc immune-tumor mà chỉ đếm cell không thể hiện.
**Liên kết tiếng Hàn:** `세포 그래프`.

## Review in context

**Whole-slide imaging** produces a large digital specimen, and a **tissue microarray** can place many cores on one slide. **Stain normalization** and **color deconvolution** make channels more comparable before **nuclei segmentation**. Features such as **glandular architecture**, a **cell density map**, and a **spatial neighborhood** describe tissue organization. **Patch extraction** supports model training, but a **tiling artifact** can appear at tile boundaries; **focus quality** must also be checked. A **z-stack** adds depth, while **multiplex immunofluorescence** depends on **antigen retrieval**. A **pathology foundation model** can learn with **weak supervision** from a **slide-level label**. Reviewers mark a **region-of-interest**, convert reports through **pathology report abstraction**, and build a **cell graph** for spatial analysis.

**Bản dịch tiếng Việt:** **Whole-slide imaging** tạo specimen số lớn, còn **tissue microarray** đặt nhiều lõi trên một slide. **Stain normalization** và **color deconvolution** làm các channel so sánh được hơn trước **nuclei segmentation**. Feature như **glandular architecture**, **cell density map** và **spatial neighborhood** mô tả tổ chức mô. **Patch extraction** hỗ trợ train model, nhưng **tiling artifact** có thể xuất hiện ở ranh giới tile; cũng phải kiểm tra **focus quality**. **Z-stack** thêm chiều sâu, còn **multiplex immunofluorescence** phụ thuộc **antigen retrieval**. **Pathology foundation model** có thể học bằng **weak supervision** từ **slide-level label**. Reviewer đánh dấu **region-of-interest**, chuyển report bằng **pathology report abstraction**, rồi dựng **cell graph** để phân tích không gian.
