# C2 Vocabulary — Single-cell genomics and cell atlases

This lesson follows a single-cell RNA-sequencing workflow from cell isolation and molecular labeling through matrix construction, dimensionality reduction, cell identification, and developmental trajectory analysis.

Flow: **single-cell RNA sequencing → transcriptome → cell atlas → droplet microfluidics → cell barcode → unique molecular identifier → library preparation → sequencing depth → gene expression matrix → dropout event → batch effect → normalization → dimensionality reduction → UMAP embedding → clustering → marker gene → cell type annotation → pseudotime → trajectory inference → doublet**.

## 1. single-cell RNA sequencing /ˈsɪŋɡəl sɛl ˌɑr ɛn ˈeɪ ˈsiːkwənsɪŋ/
**Part of speech:** noun
**Core meaning (English):** a sequencing method that measures RNA expression separately in individual cells rather than averaging signals across a mixed population of cells.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giải trình tự RNA ở từng tế bào; hình dung thay vì trộn hàng nghìn tế bào rồi lấy một giá trị trung bình, kỹ thuật này cho thấy mỗi tế bào đang bật hoặc tắt những gene nào.
**Grammar & collocations:** `single-cell RNA-sequencing dataset` — bộ dữ liệu scRNA-seq; `single-cell transcriptomics` — transcriptomics đơn tế bào; `perform single-cell RNA sequencing` — thực hiện giải trình tự RNA đơn tế bào.
**Examples:** `Single-cell RNA sequencing revealed a small immune-cell population that was invisible in the bulk tissue average.` → Single-cell RNA sequencing phát hiện một quần thể tế bào miễn dịch nhỏ vốn bị che khuất trong giá trị trung bình của mô.
**Liên kết tiếng Hàn:** `단일세포 RNA 시퀀싱` (danilsepo RNA sikweonsing), thường viết `scRNA-seq` — giải trình tự RNA đơn tế bào.

## 2. transcriptome /trænˈskrɪptoʊm/
**Part of speech:** noun
**Core meaning (English):** the complete set of RNA transcripts produced in a cell, tissue, or organism under particular conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** toàn bộ hệ RNA đang được tạo ra; hình dung genome là toàn bộ “kho gene”, còn transcriptome phản ánh phần nào trong kho đó đang thực sự được đọc thành RNA tại một thời điểm.
**Grammar & collocations:** `cellular transcriptome` — transcriptome của tế bào; `profile the transcriptome` — lập hồ sơ transcriptome; `transcriptomic state` — trạng thái transcriptome.
**Examples:** `The transcriptome shifts as a stem cell commits to a more specialized lineage.` → Transcriptome thay đổi khi tế bào gốc bắt đầu đi theo một dòng biệt hóa chuyên biệt hơn.
**Liên kết tiếng Hàn:** `전사체` (jeonsache), `트랜스크립톰` — transcriptome.

## 3. cell atlas /sɛl ˈætləs/
**Part of speech:** noun
**Core meaning (English):** a structured map of cell types and states in a tissue, organ, or organism, usually built from large-scale molecular measurements such as single-cell sequencing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản đồ tế bào; hình dung một atlas không vẽ đường phố mà vẽ “cư dân tế bào” của cơ thể: loại tế bào nào tồn tại, ở trạng thái nào và có đặc điểm phân tử gì.
**Grammar & collocations:** `human cell atlas` — bản đồ tế bào người; `tissue cell atlas` — atlas tế bào của một mô; `build a cell atlas` — xây dựng bản đồ tế bào.
**Examples:** `The cell atlas separated several stromal populations that had previously been treated as one broad category.` → Cell atlas tách ra nhiều quần thể stromal vốn trước đây bị gộp thành một nhóm lớn.
**Liên kết tiếng Hàn:** `세포 아틀라스` (sepo ateullaseu), `세포 지도` — bản đồ tế bào.

## 4. droplet microfluidics /ˈdrɑplət ˌmaɪkroʊfluˈɪdɪks/
**Part of speech:** noun
**Core meaning (English):** a microfluidic technique that partitions cells and reagents into tiny droplets so many individual cells can be processed in parallel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vi lưu giọt; hình dung hệ thống tạo hàng nghìn giọt siêu nhỏ, mỗi giọt lý tưởng chứa một tế bào và hóa chất cần thiết để xử lý tế bào đó riêng biệt.
**Grammar & collocations:** `droplet-microfluidic platform` — nền tảng vi lưu giọt; `generate droplets` — tạo giọt; `encapsulate a cell` — bao một tế bào trong giọt.
**Examples:** `Droplet microfluidics lets researchers process tens of thousands of cells in a single experiment.` → Droplet microfluidics cho phép nhà nghiên cứu xử lý hàng chục nghìn tế bào trong một thí nghiệm.
**Liên kết tiếng Hàn:** `액적 미세유체 기술` (aekjeok miseyuche gisul), `드롭릿 마이크로플루이딕스` — vi lưu giọt.

## 5. cell barcode /sɛl ˈbɑrkoʊd/
**Part of speech:** noun
**Core meaning (English):** a short DNA sequence attached to molecules from one captured cell so sequencing reads can later be assigned back to that cell.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã vạch tế bào; hình dung mỗi tế bào được đóng một “con dấu DNA” riêng trước khi tất cả RNA được trộn lại, nhờ đó máy tính có thể biết read nào đến từ tế bào nào.
**Grammar & collocations:** `cell-barcode sequence` — trình tự barcode tế bào; `barcode assignment` — gán barcode; `barcode collision` — hai nguồn vô tình nhận cùng hoặc không phân biệt được barcode.
**Examples:** `The cell barcode allowed millions of sequencing reads to be regrouped by their cell of origin.` → Cell barcode cho phép hàng triệu sequencing read được nhóm lại theo tế bào nguồn của chúng.
**Liên kết tiếng Hàn:** `세포 바코드` (sepo bakodeu) — mã vạch tế bào.

## 6. unique molecular identifier /juˈniːk məˈlɛkjələr aɪˈdɛntəˌfaɪər/
**Part of speech:** noun
**Core meaning (English):** a short random sequence used to label an individual original molecule so duplicated sequencing reads created during amplification can be recognized and collapsed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã định danh phân tử duy nhất; hình dung mỗi phân tử RNA gốc được gắn một số serial riêng để sau PCR có thể phân biệt “nhiều bản sao của một phân tử” với “nhiều phân tử thật sự khác nhau”.
**Grammar & collocations:** `UMI count` — số lượng UMI; `UMI deduplication` — loại bản sao trùng dựa trên UMI; `unique-molecular-identifier sequence` — trình tự UMI.
**Examples:** `Unique molecular identifiers reduce amplification bias by preventing PCR copies from being counted as separate original molecules.` → Unique molecular identifier giảm bias do khuếch đại bằng cách ngăn các bản sao PCR bị tính như những phân tử gốc riêng biệt.
**Liên kết tiếng Hàn:** `고유 분자 식별자` (goyu bunja sikbyeolja), thường gọi `UMI` — mã định danh phân tử duy nhất.

## 7. library preparation /ˈlaɪˌbrɛri ˌprɛpəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the laboratory process that converts biological nucleic-acid material into a form compatible with a sequencing instrument, often by adding adapters, indexes, and amplification steps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuẩn bị thư viện giải trình tự; hình dung RNA hoặc DNA thô phải được biến thành một “bộ mẫu đã đóng gói đúng chuẩn” với adapter và index trước khi máy sequencing có thể đọc.
**Grammar & collocations:** `sequencing-library preparation` — chuẩn bị thư viện sequencing; `library-preparation protocol` — quy trình chuẩn bị thư viện; `prepare a library` — tạo thư viện.
**Examples:** `Library preparation added sequencing adapters after the captured RNA had been converted into complementary DNA.` → Library preparation gắn sequencing adapter sau khi RNA thu được được chuyển thành complementary DNA.
**Liên kết tiếng Hàn:** `라이브러리 제작` (raibeureori jejak), `라이브러리 준비` — chuẩn bị thư viện sequencing.

## 8. sequencing depth /ˈsiːkwənsɪŋ dɛpθ/
**Part of speech:** noun
**Core meaning (English):** the amount of sequence data collected for a sample, cell, or library, which affects how reliably low-abundance molecules can be detected.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ sâu giải trình tự; hình dung đọc cùng một mẫu với “nhiều lượt quan sát” hơn sẽ cho cơ hội phát hiện tín hiệu yếu tốt hơn, nhưng chi phí và dữ liệu cũng tăng.
**Grammar & collocations:** `increase sequencing depth` — tăng độ sâu sequencing; `read depth` — độ sâu read; `shallow sequencing` — sequencing nông.
**Examples:** `Greater sequencing depth improved detection of lowly expressed transcripts but produced diminishing returns for abundant genes.` → Sequencing depth lớn hơn cải thiện việc phát hiện transcript biểu hiện thấp nhưng lợi ích tăng thêm giảm dần đối với gene biểu hiện mạnh.
**Liên kết tiếng Hàn:** `시퀀싱 깊이` (sikweonsing gipi), `리드 깊이` — độ sâu giải trình tự.

## 9. gene expression matrix /dʒiːn ɪkˈsprɛʃən ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a table of numerical expression measurements in which rows usually represent genes and columns represent cells or samples.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ma trận biểu hiện gene; hình dung một bảng rất lớn nơi mỗi ô cho biết một gene được đo ở mức nào trong một tế bào cụ thể.
**Grammar & collocations:** `cell-by-gene matrix` — ma trận cell-by-gene; `expression-matrix normalization` — chuẩn hóa ma trận biểu hiện; `construct a gene expression matrix` — tạo ma trận biểu hiện gene.
**Examples:** `The gene expression matrix contained tens of thousands of genes across more than fifty thousand cells.` → Gene expression matrix chứa hàng chục nghìn gene trên hơn năm mươi nghìn tế bào.
**Liên kết tiếng Hàn:** `유전자 발현 행렬` (yujeonja balhyeon haengnyeol) — ma trận biểu hiện gene.

## 10. dropout event /ˈdrɑpˌaʊt ɪˈvɛnt/
**Part of speech:** noun
**Core meaning (English):** a failure to detect a transcript that was actually present in a cell, producing an observed zero because single-cell measurements capture only part of the available RNA.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiện tượng rơi mất tín hiệu; hình dung gene thực sự có RNA trong tế bào nhưng quy trình lấy mẫu không bắt được phân tử đó, khiến dữ liệu ghi nhầm thành zero.
**Grammar & collocations:** `technical dropout` — dropout kỹ thuật; `dropout rate` — tỷ lệ dropout; `dropout-prone gene` — gene dễ bị mất tín hiệu.
**Examples:** `A dropout event can make two biologically similar cells appear more different than they really are.` → Một dropout event có thể khiến hai tế bào sinh học tương tự trông khác nhau hơn thực tế.
**Liên kết tiếng Hàn:** `드롭아웃 현상` (deuropaut hyeonsang) — hiện tượng mất tín hiệu trong dữ liệu đơn tế bào.

## 11. batch effect /bætʃ ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** systematic variation caused by differences in experimental runs, laboratories, reagent lots, instruments, or processing conditions rather than true biological differences.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiệu ứng batch; hình dung hai nhóm tế bào trông khác nhau không phải vì sinh học mà vì chúng được xử lý vào ngày khác, bằng reagent khác hoặc trên máy khác.
**Grammar & collocations:** `batch-effect correction` — hiệu chỉnh batch effect; `technical batch` — batch kỹ thuật; `remove batch effects` — giảm hoặc loại ảnh hưởng batch.
**Examples:** `Without correction, the batch effect separated cells by experiment date instead of by cell type.` → Nếu không hiệu chỉnh, batch effect phân tách tế bào theo ngày thí nghiệm thay vì theo loại tế bào.
**Liên kết tiếng Hàn:** `배치 효과` (baechi hyogwa) — hiệu ứng batch.

## 12. normalization /ˌnɔrmələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the transformation of measured values to reduce technical differences in scale so expression levels can be compared more meaningfully across cells or samples.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuẩn hóa dữ liệu; hình dung hai tế bào có tổng số read khác nhau nên cần đưa chúng về một thang so sánh hợp lý trước khi kết luận gene nào biểu hiện mạnh hơn.
**Grammar & collocations:** `count normalization` — chuẩn hóa count; `normalization method` — phương pháp chuẩn hóa; `normalize expression values` — chuẩn hóa giá trị biểu hiện.
**Examples:** `Normalization reduced differences caused simply by one cell having more captured molecules than another.` → Normalization giảm các khác biệt chỉ do một tế bào thu được nhiều phân tử hơn tế bào khác.
**Liên kết tiếng Hàn:** `정규화` (jeonggyuhwa) — chuẩn hóa dữ liệu.

## 13. dimensionality reduction /daɪˌmɛnʃəˈnæləti rɪˈdʌkʃən/
**Part of speech:** noun
**Core meaning (English):** a set of methods that compress high-dimensional data into fewer numerical dimensions while trying to preserve important structure or variation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm chiều dữ liệu; hình dung mỗi tế bào ban đầu có hàng nghìn tọa độ tương ứng với hàng nghìn gene, rồi thuật toán nén chúng xuống vài trục để con người và mô hình dễ thấy cấu trúc chính hơn.
**Grammar & collocations:** `dimensionality-reduction method` — phương pháp giảm chiều; `low-dimensional representation` — biểu diễn ít chiều; `reduce dimensionality` — giảm số chiều.
**Examples:** `Dimensionality reduction transformed thousands of gene-expression features into a compact representation for downstream analysis.` → Dimensionality reduction biến hàng nghìn đặc trưng biểu hiện gene thành một biểu diễn gọn hơn cho các bước phân tích sau.
**Liên kết tiếng Hàn:** `차원 축소` (chawon chukso) — giảm chiều dữ liệu.

## 14. UMAP embedding /ˈjuːmæp ɪmˈbɛdɪŋ/
**Part of speech:** noun
**Core meaning (English):** a low-dimensional representation produced by the UMAP algorithm to place cells with similar high-dimensional profiles near one another for visualization or exploratory analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn UMAP; hình dung hàng chục nghìn tế bào được đặt thành các điểm trên bản đồ 2D sao cho những tế bào có profile gần nhau thường nằm gần nhau, nhưng khoảng cách trên bản đồ không phải lúc nào cũng là khoảng cách sinh học tuyệt đối.
**Grammar & collocations:** `two-dimensional UMAP embedding` — UMAP hai chiều; `UMAP plot` — biểu đồ UMAP; `embed cells with UMAP` — biểu diễn tế bào bằng UMAP.
**Examples:** `The UMAP embedding showed several dense neighborhoods corresponding to distinct immune-cell populations.` → UMAP embedding cho thấy nhiều vùng điểm dày tương ứng với các quần thể tế bào miễn dịch khác nhau.
**Liên kết tiếng Hàn:** `UMAP 임베딩` (UMAP imbedding) — biểu diễn UMAP.

## 15. clustering /ˈklʌstərɪŋ/
**Part of speech:** noun
**Core meaning (English):** an unsupervised computational process that groups cells with similar molecular profiles without requiring predefined cell-type labels.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân cụm; hình dung thuật toán tự gom các tế bào thành nhóm dựa trên độ giống nhau trong dữ liệu trước khi nhà nghiên cứu quyết định mỗi nhóm là loại tế bào gì.
**Grammar & collocations:** `graph-based clustering` — phân cụm dựa trên graph; `clustering resolution` — độ phân giải phân cụm; `cluster cells` — gom tế bào thành cụm.
**Examples:** `Clustering divided the dataset into candidate populations that were later interpreted using known marker genes.` → Clustering chia dataset thành các quần thể ứng viên, sau đó được diễn giải bằng marker gene đã biết.
**Liên kết tiếng Hàn:** `클러스터링` (keulleoseuteoring), `군집화` — phân cụm.

## 16. marker gene /ˈmɑrkər dʒiːn/
**Part of speech:** noun
**Core meaning (English):** a gene whose characteristic expression helps identify a particular cell type, state, lineage, or biological condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gene dấu chuẩn; hình dung một gene hoạt động giống “biển tên” vì nó thường biểu hiện mạnh hoặc đặc trưng ở một nhóm tế bào nhất định.
**Grammar & collocations:** `cell-type marker gene` — marker gene của loại tế bào; `canonical marker` — marker kinh điển; `marker-gene expression` — mức biểu hiện gene dấu chuẩn.
**Examples:** `High expression of several canonical marker genes supported the interpretation that the cluster contained macrophages.` → Biểu hiện cao của nhiều marker gene kinh điển hỗ trợ nhận định rằng cluster đó chứa macrophage.
**Liên kết tiếng Hàn:** `표지 유전자` (pyoji yujeonja), `마커 유전자` — gene dấu chuẩn.

## 17. cell type annotation /sɛl taɪp ˌænəˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of assigning biological cell-type labels to measured cells or clusters using expression patterns, reference data, markers, and domain knowledge.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gán nhãn loại tế bào; hình dung sau khi thuật toán tạo các cluster vô danh, nhà nghiên cứu dùng marker và dữ liệu tham chiếu để nói “nhóm này là T cell, nhóm kia là monocyte”.
**Grammar & collocations:** `manual cell type annotation` — gán nhãn thủ công; `reference-based annotation` — gán nhãn dựa trên reference; `annotate a cluster` — gán tên sinh học cho một cluster.
**Examples:** `Cell type annotation combined reference mapping with manual review of marker-gene patterns.` → Cell type annotation kết hợp mapping với dữ liệu tham chiếu và kiểm tra thủ công các pattern marker gene.
**Liên kết tiếng Hàn:** `세포 유형 주석` (sepo yuhyeong juseok), `세포 타입 어노테이션` — gán nhãn loại tế bào.

## 18. pseudotime /ˈsuːdoʊtaɪm/
**Part of speech:** noun
**Core meaning (English):** an inferred ordering of individual cells along a biological process or developmental progression based on molecular similarity rather than their actual clock time of collection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian giả định; hình dung các tế bào được chụp ở cùng một thời điểm nhưng đang ở nhiều giai đoạn khác nhau, rồi thuật toán xếp chúng thành một “timeline suy ra” từ sớm đến muộn.
**Grammar & collocations:** `pseudotime ordering` — thứ tự pseudotime; `pseudotime trajectory` — quỹ đạo pseudotime; `order cells in pseudotime` — xếp tế bào theo pseudotime.
**Examples:** `Pseudotime arranged the cells from an early progenitor state toward progressively differentiated states.` → Pseudotime sắp xếp tế bào từ trạng thái tiền thân sớm tới các trạng thái biệt hóa dần.
**Liên kết tiếng Hàn:** `의사시간` (uisasigan), `슈도타임` — pseudotime.

## 19. trajectory inference /trəˈdʒɛktəri ˈɪnfərəns/
**Part of speech:** noun
**Core meaning (English):** the computational reconstruction of likely paths through which cells transition between molecular states, often from cross-sectional single-cell data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy luận quỹ đạo tế bào; hình dung từ nhiều ảnh chụp rời rạc của các tế bào khác nhau, thuật toán cố ghép chúng thành những con đường phát triển hoặc chuyển trạng thái có khả năng xảy ra.
**Grammar & collocations:** `lineage trajectory inference` — suy luận quỹ đạo dòng tế bào; `branching trajectory` — quỹ đạo phân nhánh; `infer a developmental path` — suy ra con đường phát triển.
**Examples:** `Trajectory inference suggested that the progenitor population split into two distinct differentiation branches.` → Trajectory inference cho thấy quần thể progenitor có thể tách thành hai nhánh biệt hóa khác nhau.
**Liên kết tiếng Hàn:** `궤적 추론` (gwejeok churon), `세포 궤적 추론` — suy luận quỹ đạo tế bào.

## 20. doublet /ˈdʌblət/
**Part of speech:** noun
**Core meaning (English):** an observation in a single-cell experiment that unintentionally contains material from two cells but is recorded as if it came from one cell.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** doublet là “hai tế bào bị ghi thành một”; hình dung một droplet bắt nhầm hai tế bào, khiến profile RNA trộn của chúng trông như một cell type kỳ lạ không tồn tại thật.
**Grammar & collocations:** `doublet detection` — phát hiện doublet; `doublet rate` — tỷ lệ doublet; `remove suspected doublets` — loại các doublet nghi ngờ.
**Examples:** `Doublet detection removed profiles that simultaneously expressed incompatible marker sets from two unrelated cell types.` → Doublet detection loại các profile đồng thời biểu hiện những bộ marker không tương thích của hai loại tế bào khác nhau.
**Liên kết tiếng Hàn:** `더블릿` (deobeullit), `이중 세포 포획` — trường hợp hai tế bào bị bắt chung.

## Review in context

A modern **single-cell RNA sequencing** experiment measures the **transcriptome** of thousands of individual cells and can contribute to a large **cell atlas**. In a common workflow, **droplet microfluidics** isolates cells, while a **cell barcode** records which reads came from each cell and a **unique molecular identifier** helps distinguish original molecules from amplification copies. After **library preparation**, researchers choose enough **sequencing depth** to build a useful **gene expression matrix**, although technical problems such as a **dropout event** or a **batch effect** can distort the measurements. **Normalization** reduces scale differences before **dimensionality reduction** creates a compact representation such as a **UMAP embedding**. Researchers then use **clustering** to find groups of similar cells, inspect each **marker gene**, and perform **cell type annotation**. For dynamic biological processes, **pseudotime** can order cells along a progression, while **trajectory inference** estimates possible branches between states. Quality control must also identify a **doublet**, because two cells captured together can create an artificial expression profile that resembles a nonexistent intermediate population.

**Bản dịch tiếng Việt:** Một thí nghiệm single-cell RNA sequencing hiện đại đo transcriptome của hàng nghìn tế bào riêng lẻ và có thể đóng góp vào một cell atlas lớn. Trong workflow phổ biến, droplet microfluidics tách tế bào, cell barcode ghi lại read nào đến từ tế bào nào, còn unique molecular identifier giúp phân biệt phân tử gốc với các bản sao do khuếch đại. Sau library preparation, nhà nghiên cứu chọn sequencing depth đủ lớn để xây dựng gene expression matrix hữu ích, dù các vấn đề kỹ thuật như dropout event hoặc batch effect có thể làm méo dữ liệu. Normalization giảm khác biệt về scale trước khi dimensionality reduction tạo biểu diễn gọn như UMAP embedding. Sau đó nhà nghiên cứu dùng clustering để tìm các nhóm tế bào giống nhau, kiểm tra từng marker gene và thực hiện cell type annotation. Với các quá trình sinh học động, pseudotime có thể sắp tế bào theo một tiến trình, còn trajectory inference ước lượng các nhánh chuyển trạng thái có thể có. Quality control cũng phải nhận ra doublet, vì hai tế bào bị bắt cùng nhau có thể tạo một profile biểu hiện giả trông giống một quần thể trung gian không tồn tại thật.
