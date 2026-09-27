# C2 Vocabulary — Spatial transcriptomics and tissue mapping

This lesson follows spatially resolved molecular analysis from tissue preparation and localization through computational deconvolution, neighborhood analysis, and biological interpretation.

Flow: **spatial transcriptomics → tissue section → capture spot → spatial barcode → in situ hybridization → in situ sequencing → multiplexed imaging → region of interest → cell segmentation → spot deconvolution → spatial domain → neighborhood enrichment → spatial autocorrelation → colocalization → cell-cell interaction → ligand-receptor pair → spatial niche → tumor microenvironment → histopathology → multimodal integration**.

## 1. spatial transcriptomics /ˈspeɪʃəl ˌtrænskrɪpˈtɑmɪks/
**Part of speech:** noun
**Core meaning (English):** methods that measure gene-expression patterns while preserving information about where those measurements originate within a tissue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transcriptomics có thông tin vị trí; hình dung không chỉ biết gene nào đang được biểu hiện mà còn biết tín hiệu đó nằm ở đâu trên lát mô.
**Grammar & collocations:** `spatial-transcriptomics platform` — nền tảng spatial transcriptomics; `spatial gene-expression map` — bản đồ biểu hiện gene theo không gian; `spatially resolved expression` — biểu hiện gene có độ phân giải không gian.
**Examples:** `Spatial transcriptomics revealed that inflammatory genes were concentrated around the damaged tissue boundary.` → Spatial transcriptomics cho thấy các gene viêm tập trung quanh ranh giới vùng mô bị tổn thương.
**Liên kết tiếng Hàn:** `공간 전사체학`, `스페이셜 트랜스크립토믹스`.

## 2. tissue section /ˈtɪʃuː ˈsɛkʃən/
**Part of speech:** noun
**Core meaning (English):** a thin slice of biological tissue prepared for microscopic, molecular, or histological analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lát mô mỏng; hình dung cắt mô thành một lớp rất mỏng để có thể nhìn cấu trúc và đo tín hiệu phân tử trên cùng mặt phẳng.
**Grammar & collocations:** `frozen tissue section` — lát mô đông lạnh; `paraffin-embedded section` — lát mô nhúng paraffin; `section thickness` — độ dày lát mô.
**Examples:** `The tissue section was placed on a barcoded slide before RNA capture.` → Lát mô được đặt lên slide có barcode trước bước bắt giữ RNA.
**Liên kết tiếng Hàn:** `조직 절편` — lát mô.

## 3. capture spot /ˈkæptʃər spɑt/
**Part of speech:** noun
**Core meaning (English):** a defined area on a spatial-assay surface that captures molecules from the overlying tissue and associates them with a known location.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm bắt giữ; hình dung slide được chia thành nhiều “ô nhỏ”, mỗi ô thu RNA từ vùng mô nằm ngay phía trên.
**Grammar & collocations:** `capture-spot diameter` — đường kính capture spot; `spot-level expression` — biểu hiện ở mức spot; `capture area` — vùng bắt giữ.
**Examples:** `Each capture spot collected transcripts from a small neighborhood rather than from one perfectly isolated cell.` → Mỗi capture spot thu transcript từ một vùng nhỏ chứ không phải từ đúng một tế bào tách biệt hoàn toàn.
**Liên kết tiếng Hàn:** `캡처 스팟`, `포획 지점`.

## 4. spatial barcode /ˈspeɪʃəl ˈbɑrkoʊd/
**Part of speech:** noun
**Core meaning (English):** a molecular sequence tag that records the physical location from which a captured molecule originated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** barcode vị trí; hình dung mỗi vùng trên slide có một “mã địa chỉ” riêng được gắn vào RNA để sau sequencing có thể đưa tín hiệu trở lại đúng vị trí ban đầu.
**Grammar & collocations:** `spatial-barcode sequence` — trình tự barcode vị trí; `barcode decoding` — giải mã barcode; `assign reads to coordinates` — gán read về tọa độ.
**Examples:** `The spatial barcode allowed sequencing reads to be mapped back onto the original tissue coordinates.` → Spatial barcode cho phép các sequencing read được ánh xạ trở lại tọa độ mô ban đầu.
**Liên kết tiếng Hàn:** `공간 바코드`.

## 5. in situ hybridization /ɪn ˈsaɪtuː ˌhaɪbrədəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a method that uses labeled nucleic-acid probes to detect specific DNA or RNA sequences directly within preserved cells or tissue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lai tại chỗ; hình dung probe phát sáng tìm và bắt đúng RNA/DNA mục tiêu ngay trong mô, nên vị trí của tín hiệu không bị mất.
**Grammar & collocations:** `fluorescence in situ hybridization` — FISH; `hybridization probe` — probe lai; `in situ signal` — tín hiệu tại chỗ.
**Examples:** `In situ hybridization confirmed that the marker transcript was restricted to cells near the vessel wall.` → In situ hybridization xác nhận marker transcript chỉ xuất hiện ở các tế bào gần thành mạch.
**Liên kết tiếng Hàn:** `제자리 부합법`, phổ biến hơn là `인시투 하이브리다이제이션`.

## 6. in situ sequencing /ɪn ˈsaɪtuː ˈsiːkwənsɪŋ/
**Part of speech:** noun
**Core meaning (English):** sequencing performed directly inside fixed cells or tissue so sequence identity remains linked to physical location.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sequencing ngay trong mô; hình dung đọc trình tự nhưng không tách phân tử ra khỏi vị trí ban đầu, nhờ đó biết cả “nó là gì” và “nó ở đâu”.
**Grammar & collocations:** `in situ sequencing assay` — assay sequencing tại chỗ; `spatial readout` — đầu ra theo không gian; `sequence in tissue` — đọc trình tự trong mô.
**Examples:** `In situ sequencing distinguished several transcript variants while preserving cellular coordinates.` → In situ sequencing phân biệt nhiều biến thể transcript mà vẫn giữ tọa độ tế bào.
**Liên kết tiếng Hàn:** `제자리 시퀀싱`, `인시투 시퀀싱`.

## 7. multiplexed imaging /ˈmʌltiˌplɛkst ˈɪmɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** imaging designed to detect many molecular markers in the same specimen, often across repeated staining or acquisition cycles.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** imaging đa marker; hình dung cùng một lát mô nhưng đo hàng chục hoặc hàng trăm protein/RNA thay vì chỉ một vài marker.
**Grammar & collocations:** `high-plex imaging` — imaging rất nhiều marker; `multiplexed marker panel` — panel marker đa kênh; `cyclic imaging` — imaging theo nhiều vòng.
**Examples:** `Multiplexed imaging mapped immune, stromal, and tumor markers in the same tissue section.` → Multiplexed imaging lập bản đồ marker miễn dịch, mô đệm và khối u trên cùng lát mô.
**Liên kết tiếng Hàn:** `다중 이미징`, `멀티플렉스 이미징`.

## 8. region of interest /ˈriːdʒən əv ˈɪntrəst/
**Part of speech:** noun
**Core meaning (English):** a selected area of an image or specimen chosen for focused measurement, annotation, or analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng quan tâm; hình dung cả mô rất lớn nhưng researcher khoanh một khu vực cụ thể để đo sâu hơn.
**Grammar & collocations:** `define a region of interest` — xác định ROI; `ROI selection` — chọn vùng quan tâm; `manually annotated ROI` — ROI được chú thích thủ công.
**Examples:** `The pathologist marked each region of interest before targeted molecular profiling.` → Bác sĩ giải phẫu bệnh đánh dấu từng vùng quan tâm trước khi profiling phân tử có mục tiêu.
**Liên kết tiếng Hàn:** `관심 영역`, thường viết `ROI`.

## 9. cell segmentation /sɛl ˌsɛɡmənˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** computational division of an image into boundaries corresponding to individual cells or cellular regions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân vùng tế bào; hình dung thuật toán vẽ đường biên quanh từng tế bào trong ảnh để mỗi signal có thể được gán đúng về một cell.
**Grammar & collocations:** `segmentation mask` — mask phân vùng; `cell-boundary segmentation` — phân vùng biên tế bào; `segmentation error` — lỗi phân vùng.
**Examples:** `Poor cell segmentation merged neighboring cells and distorted marker counts.` → Cell segmentation kém đã gộp các tế bào lân cận và làm sai số đếm marker.
**Liên kết tiếng Hàn:** `세포 분할`.

## 10. spot deconvolution /spɑt ˌdiːkɑnvəˈluːʃən/
**Part of speech:** noun
**Core meaning (English):** computational estimation of the cell types or expression components contributing to a spatial capture spot containing mixed signals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách thành phần của một spot; hình dung một capture spot chứa RNA từ nhiều cell và thuật toán cố gắng ước lượng tỷ lệ từng loại cell đóng góp vào đó.
**Grammar & collocations:** `deconvolve spatial spots` — deconvolve các spot; `cell-type proportion` — tỷ lệ loại tế bào; `reference-based deconvolution` — deconvolution dựa trên dữ liệu tham chiếu.
**Examples:** `Spot deconvolution estimated how much of each capture spot came from tumor cells versus immune cells.` → Spot deconvolution ước lượng phần nào của mỗi capture spot đến từ tế bào khối u và phần nào từ tế bào miễn dịch.
**Liên kết tiếng Hàn:** `스팟 디컨볼루션`, `공간 혼합 신호 분해`.

## 11. spatial domain /ˈspeɪʃəl doʊˈmeɪn/
**Part of speech:** noun
**Core meaning (English):** a contiguous or coherent tissue region defined by similar molecular profiles, morphology, or cellular composition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** miền không gian của mô; hình dung thuật toán chia tissue map thành các vùng có “bản sắc phân tử” khác nhau.
**Grammar & collocations:** `identify spatial domains` — nhận diện các miền không gian; `domain boundary` — ranh giới miền; `molecularly distinct domain` — miền khác biệt về phân tử.
**Examples:** `Clustering identified a spatial domain corresponding closely to the invasive tumor edge.` → Clustering xác định một spatial domain gần trùng với rìa xâm lấn của khối u.
**Liên kết tiếng Hàn:** `공간 도메인`, `공간 영역`.

## 12. neighborhood enrichment /ˈneɪbərˌhʊd ɪnˈrɪtʃmənt/
**Part of speech:** noun
**Core meaning (English):** statistical overrepresentation of particular cell-type pairs or features among spatial neighbors compared with a reference expectation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** enrichment theo hàng xóm; hình dung hỏi xem loại cell A có đứng cạnh cell B nhiều hơn mức ngẫu nhiên hay không.
**Grammar & collocations:** `neighborhood-enrichment analysis` — phân tích enrichment hàng xóm; `cell-type adjacency` — quan hệ kề nhau giữa loại cell; `enriched neighborhood` — neighborhood xuất hiện nhiều hơn kỳ vọng.
**Examples:** `Neighborhood enrichment showed that exhausted T cells were unusually concentrated next to a particular tumor-cell state.` → Neighborhood enrichment cho thấy exhausted T cell tập trung bất thường cạnh một trạng thái tế bào khối u cụ thể.
**Liên kết tiếng Hàn:** `이웃 풍부도 분석`, `공간 이웃 농축`.

## 13. spatial autocorrelation /ˈspeɪʃəl ˌɔtoʊˌkɔrəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** the tendency for nearby locations to have more similar or more dissimilar values than would be expected by chance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tự tương quan không gian; hình dung các điểm gần nhau có xu hướng giống nhau về expression thay vì phân bố hoàn toàn ngẫu nhiên.
**Grammar & collocations:** `positive spatial autocorrelation` — tự tương quan không gian dương; `spatially autocorrelated gene` — gene có pattern phụ thuộc vị trí; `Moran's I` — một chỉ số thường dùng.
**Examples:** `Strong spatial autocorrelation indicated that the gene formed localized expression patches rather than random scatter.` → Spatial autocorrelation mạnh cho thấy gene tạo các cụm biểu hiện cục bộ thay vì phân tán ngẫu nhiên.
**Liên kết tiếng Hàn:** `공간 자기상관`.

## 14. colocalization /ˌkoʊˌloʊkələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the occurrence of two molecular signals, cell types, or features in the same or closely overlapping spatial locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồng vị trí; hình dung hai marker hoặc hai loại cell thường xuất hiện ở cùng vùng trên bản đồ mô.
**Grammar & collocations:** `signal colocalization` — đồng vị trí tín hiệu; `colocalization analysis` — phân tích đồng vị trí; `spatial overlap` — chồng lấp không gian.
**Examples:** `Colocalization of the receptor and immune marker suggested that the signaling axis was active in that compartment.` → Sự colocalization của receptor và marker miễn dịch gợi ý trục tín hiệu hoạt động trong compartment đó.
**Liên kết tiếng Hàn:** `공동 위치`, thường dùng `콜로컬라이제이션`.

## 15. cell-cell interaction /sɛl sɛl ˌɪntərˈækʃən/
**Part of speech:** noun
**Core meaning (English):** communication or functional influence between cells through direct contact, secreted molecules, or other signaling mechanisms.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tương tác giữa tế bào; hình dung các cell không hoạt động độc lập mà gửi tín hiệu, chạm trực tiếp hoặc thay đổi môi trường của nhau.
**Grammar & collocations:** `infer cell-cell interactions` — suy luận tương tác cell-cell; `contact-dependent interaction` — tương tác phụ thuộc tiếp xúc; `intercellular signaling` — tín hiệu liên tế bào.
**Examples:** `Spatial proximity strengthened the evidence for a predicted cell-cell interaction between macrophages and tumor cells.` → Khoảng cách không gian gần làm bằng chứng cho tương tác dự đoán giữa macrophage và tế bào khối u mạnh hơn.
**Liên kết tiếng Hàn:** `세포 간 상호작용`.

## 16. ligand-receptor pair /ˈlaɪɡənd rɪˈsɛptər pɛr/
**Part of speech:** noun
**Core meaning (English):** a signaling molecule and its cognate receptor considered together as a potential communication channel between cells.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cặp ligand-receptor; hình dung cell A phát một “tín hiệu” ligand và cell B có đúng “ăng-ten” receptor để nhận tín hiệu đó.
**Grammar & collocations:** `ligand-receptor interaction` — tương tác ligand-receptor; `cognate receptor` — receptor tương ứng; `signaling pair` — cặp tín hiệu.
**Examples:** `The analysis prioritized ligand-receptor pairs whose sender and receiver cells occupied adjacent regions.` → Phân tích ưu tiên các cặp ligand-receptor có cell gửi và cell nhận nằm ở các vùng kề nhau.
**Liên kết tiếng Hàn:** `리간드-수용체 쌍`.

## 17. spatial niche /ˈspeɪʃəl nɪtʃ/
**Part of speech:** noun
**Core meaning (English):** a local tissue microenvironment defined by a characteristic combination of neighboring cell types, molecular signals, and physical context.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “ổ sinh thái” cục bộ trong mô; hình dung một vùng nhỏ có tổ hợp cell và tín hiệu đặc trưng tạo điều kiện cho một trạng thái sinh học cụ thể.
**Grammar & collocations:** `cellular niche` — niche tế bào; `define spatial niches` — xác định các niche không gian; `niche composition` — thành phần niche.
**Examples:** `A distinct spatial niche contained suppressive myeloid cells surrounding the tumor core.` → Một spatial niche riêng biệt chứa các tế bào myeloid ức chế bao quanh lõi khối u.
**Liên kết tiếng Hàn:** `공간 니치`, `미세환경적 틈새`.

## 18. tumor microenvironment /ˈtuːmər ˌmaɪkroʊɪnˈvaɪrənmənt/
**Part of speech:** noun
**Core meaning (English):** the local ecosystem surrounding and interacting with tumor cells, including immune cells, stromal cells, vessels, extracellular matrix, and signaling molecules.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vi môi trường khối u; hình dung khối u không chỉ là cancer cell mà là cả “hệ sinh thái” xung quanh cùng ảnh hưởng đến phát triển và đáp ứng điều trị.
**Grammar & collocations:** `immune tumor microenvironment` — vi môi trường miễn dịch khối u; `TME composition` — thành phần TME; `remodel the microenvironment` — tái cấu trúc vi môi trường.
**Examples:** `Spatial profiling showed that the tumor microenvironment differed sharply between the core and invasive margin.` → Spatial profiling cho thấy vi môi trường khối u khác biệt rõ giữa lõi và rìa xâm lấn.
**Liên kết tiếng Hàn:** `종양 미세환경`, `TME`.

## 19. histopathology /ˌhɪstoʊpəˈθɑlədʒi/
**Part of speech:** noun
**Core meaning (English):** the microscopic study of diseased tissue structure and cellular morphology for diagnosis and biological interpretation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô bệnh học; hình dung bác sĩ nhìn lát mô dưới kính hiển vi để đọc hình thái cell, cấu trúc tissue và dấu hiệu bệnh.
**Grammar & collocations:** `histopathology image` — ảnh mô bệnh học; `histopathologic assessment` — đánh giá mô bệnh học; `pathology annotation` — chú thích của bác sĩ pathology.
**Examples:** `Histopathology provided the anatomical framework used to interpret the molecular spatial map.` → Histopathology cung cấp khung giải phẫu để diễn giải bản đồ phân tử theo không gian.
**Liên kết tiếng Hàn:** `조직병리학`.

## 20. multimodal integration /ˌmʌltiˈmoʊdəl ˌɪntəˈɡreɪʃən/
**Part of speech:** noun
**Core meaning (English):** computational combination of different data modalities so complementary measurements can be analyzed in a shared biological framework.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tích hợp đa loại dữ liệu; hình dung ghép spatial RNA, protein imaging, morphology và single-cell reference thành một bản đồ chung thay vì xem từng lớp riêng lẻ.
**Grammar & collocations:** `multimodal data integration` — tích hợp dữ liệu đa modality; `joint embedding` — embedding chung; `cross-modal alignment` — căn chỉnh giữa các modality.
**Examples:** `Multimodal integration aligned gene expression, protein markers, and tissue morphology into a shared representation.` → Multimodal integration căn chỉnh gene expression, protein marker và hình thái mô vào một biểu diễn chung.
**Liên kết tiếng Hàn:** `다중 모달 통합`, `멀티모달 통합`.

## Review in context

A **spatial transcriptomics** experiment begins with a carefully prepared **tissue section** placed over many small **capture spots**, each carrying a **spatial barcode** that preserves molecular location. Other platforms may use **in situ hybridization**, **in situ sequencing**, or highly **multiplexed imaging** to retain spatial information directly. Researchers often annotate a **region of interest**, then use **cell segmentation** to assign signals to individual cells or **spot deconvolution** when each spot contains a mixture. Computational analysis can identify a molecularly coherent **spatial domain**, test **neighborhood enrichment**, and quantify **spatial autocorrelation** or marker **colocalization**. These spatial relationships help infer **cell-cell interaction**, especially when a plausible **ligand-receptor pair** connects neighboring populations. Repeated local combinations of cells and signals can define a **spatial niche**, which is especially important when studying the heterogeneous **tumor microenvironment**. Interpretation is strengthened by **histopathology**, and **multimodal integration** can finally combine morphology, RNA, proteins, and single-cell references into one tissue-level model.

**Bản dịch tiếng Việt:** Một thí nghiệm **spatial transcriptomics** bắt đầu bằng **lát mô** được chuẩn bị cẩn thận và đặt lên nhiều **capture spot** nhỏ, mỗi spot mang một **spatial barcode** để giữ thông tin vị trí phân tử. Các nền tảng khác có thể dùng **in situ hybridization**, **in situ sequencing** hoặc **multiplexed imaging** độ cao để giữ thông tin không gian trực tiếp. Researcher thường đánh dấu một **region of interest**, sau đó dùng **cell segmentation** để gán tín hiệu cho từng cell hoặc **spot deconvolution** khi mỗi spot chứa hỗn hợp nhiều cell. Phân tích tính toán có thể xác định một **spatial domain** đồng nhất về phân tử, kiểm tra **neighborhood enrichment**, và định lượng **spatial autocorrelation** hoặc **colocalization** của marker. Những quan hệ không gian này giúp suy luận **cell-cell interaction**, đặc biệt khi một **ligand-receptor pair** hợp lý kết nối các quần thể nằm gần nhau. Các tổ hợp cell và tín hiệu lặp lại tại địa phương có thể tạo thành một **spatial niche**, rất quan trọng khi nghiên cứu **tumor microenvironment** không đồng nhất. Việc diễn giải được củng cố bởi **histopathology**, và cuối cùng **multimodal integration** có thể kết hợp morphology, RNA, protein và single-cell reference thành một mô hình chung ở cấp tissue.
