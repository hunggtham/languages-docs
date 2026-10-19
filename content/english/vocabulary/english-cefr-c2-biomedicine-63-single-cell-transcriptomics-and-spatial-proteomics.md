# C2 Vocabulary 63 — Single-cell transcriptomics, spatial proteomics, and cellular heterogeneities

Ở trình độ C2 trong sinh học phân tử hiện đại, sinh học phát triển và ung thư học tính toán, khả năng mổ xẻ cấu trúc mô ở độ phân giải đơn tế bào và không gian đa chiều là một bước nhảy vọt có tính cách mạng. Khi công nghệ vượt qua các hạn chế của phương pháp giải trình tự số lượng lớn (bulk sequencing), nhà nghiên cứu cần hệ thống thuật ngữ tinh vi để phân tích tính không đồng nhất về mặt phiên mã của từng tế bào đơn lẻ, suy luận các quỹ đạo phát triển biến thiên liên tục, và lập bản đồ phân bố protein theo không gian dưới kính hiển vi ion hoặc khối phổ hình ảnh. Bài học này trang bị vốn từ vựng chuyên sâu giúp bạn làm chủ các cuộc thảo luận học thuật đỉnh cao về kỹ thuật vi lưu, khử nhiễu tín hiệu RNA ngoại bào, thuật toán chiếu đa tạp và kiến trúc tế bào học vi mô.

Flow của bài học: **unique molecular identifiers** → **microfluidic cell encapsulation** → **spatial cellular barcoding** → **dropout probability imputation** → **lineage trajectory inference** → **multiplexed ion beam imaging** → **cellular transcriptomic heterogeneity** → **rna velocity vector** → **transcriptomic pseudotime continuum** → **single-cell multimodal profiling** → **imaging mass cytometry** → **ambient rna decontamination** → **spatial cellular deconvolution** → **spatial cytoarchitecture mapping** → **transcriptional burst kinetics** → **cellular doublet discrimination** → **spatial neighborhood enrichment** → **oligo-conjugated antibodies** → **high-dimensional clustering manifold** → **single-cell proteomic profiling** → **spatial transcriptomic resolution** → **transcriptomic batch harmonization** → **cellular phenotypic plasticity** → **low-abundance transcript quantification** → **developmental lineage branching**.

---

## 1. unique molecular identifiers /juˈniːk məˈlɛkjələr aɪˈdɛntəˌfaɪərz/

**Loại từ & vị trí trong câu:** `noun phrase` (thường ở số nhiều) — cụm danh từ (viết tắt: UMIs). Thường làm tân ngữ hoặc chủ ngữ trong các quy trình giải trình tự RNA đơn tế bào (ví dụ: `incorporate unique molecular identifiers`, `count unique molecular identifiers`).

**Core meaning — English:** Short, random oligonucleotide barcodes tagged onto individual cDNA molecules prior to PCR amplification, enabling researchers to distinguish duplicate PCR amplicons from distinct original transcript molecules and eliminate amplification bias.

**Core meaning & mental image — Tiếng Việt:** Các mã định danh phân tử duy nhất; hãy hình dung mỗi phân tử RNA ban đầu được bấm một chiếc thẻ căn cước có mã số ngẫu nhiên độc nhất trước khi đưa vào máy photocopy khuếch đại hàng triệu lần; khi đếm số lượng bản sao, dù máy có nhân bản ra bao nhiêu tờ giấy cùng nội dung thì người ta chỉ cần đếm số lượng mã thẻ căn cước khác nhau để biết chính xác số phân tử ban đầu.

**Grammar & collocations:** `tag with unique molecular identifiers` — gắn thẻ bằng các mã định danh phân tử duy nhất; `quantify unique molecular identifiers` — định lượng các mã định danh phân tử duy nhất; `unique molecular identifiers deduplication` — khử trùng lặp nhờ mã định danh phân tử duy nhất.

**Register & nuance:** `high-register single-cell genomics & bioinformatics` — thuật ngữ kỹ thuật chuẩn xác, phân biệt với "cell barcodes" (vốn chỉ định danh tế bào chứ không định danh từng phân tử transcript cụ thể).

**Examples:** `By appending unique molecular identifiers to each transcript before exponential amplification, the bioinformatic pipeline cleanly eliminated PCR duplicates and recovered true molecule counts.` → Bằng cách gắn các mã định danh phân tử duy nhất vào từng bản phiên mã trước khi khuếch đại theo cấp số nhân, quy trình tin sinh học đã loại bỏ sạch sẽ các bản sao PCR trùng lặp và khôi phục số lượng phân tử thực tế.

**Liên kết tiếng Hàn:** `고유 분자 식별자` (固有 分子 識別子 / UMI) — mã định danh phân tử duy nhất.

---

## 2. microfluidic cell encapsulation /ˌmaɪkroʊfluˈɪdɪk sɛl ɪnˌkæpsjəˈleɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường xuất hiện trong phần phương pháp học (methodology) của các nghiên cứu phân lập tế bào đơn (ví dụ: `achieve microfluidic cell encapsulation`, `optimize microfluidic cell encapsulation`).

**Core meaning — English:** The process of isolating individual living cells alongside barcoded beads and lysis reagents inside picoliter-sized aqueous droplets within an immiscible carrier oil using microfabricated fluid channels.

**Core meaning & mental image — Tiếng Việt:** Sự bao gói tế bào bằng vi lưu; hãy hình dung những hạt nước tí hon kích thước picolit được tách ra nhịp nhàng từ hai dòng chất lỏng giao nhau: mỗi giọt nước đóng vai trò như một căn phòng cách ly siêu nhỏ chứa đúng một tế bào sống và một hạt vi cầu mang mã vạch để phân giải và đánh dấu vật chất di truyền.

**Grammar & collocations:** `high-throughput microfluidic cell encapsulation` — sự bao gói tế bào bằng vi lưu thông lượng cao; `efficiency of microfluidic cell encapsulation` — hiệu suất bao gói tế bào bằng vi lưu; `microfluidic cell encapsulation platform` — nền tảng bao gói tế bào bằng vi lưu.

**Register & nuance:** `biochemical engineering & single-cell technology` — công nghệ nền tảng của các hệ thống như 10x Genomics Chromium hay Drop-seq, đảm bảo phản ứng ly giải diễn ra biệt lập cho từng tế bào.

**Examples:** `High-throughput microfluidic cell encapsulation allows researchers to capture tens of thousands of single cells within minutes without cross-droplet RNA cross-contamination.` → Kỹ thuật bao gói tế bào bằng vi lưu thông lượng cao cho phép các nhà nghiên cứu bắt giữ hàng chục nghìn tế bào đơn lẻ chỉ trong vài phút mà không gây nhiễm chéo RNA giữa các giọt.

**Liên kết tiếng Hàn:** `미세유체 세포 캡슐화` (微細流體 細胞 캡슐化) — sự bao bọc tế bào qua kênh vi lưu.

---

## 3. spatial cellular barcoding /ˈspeɪʃəl ˈsɛljələr ˈbɑrkoʊdɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ hoặc giải pháp công nghệ trong giải trình tự mô nguyên vẹn (ví dụ: `implement spatial cellular barcoding`, `resolution of spatial cellular barcoding`).

**Core meaning — English:** A methodology in which oligonucleotide tags encoding defined two-dimensional coordinate positions on a glass slide are transferred to mRNAs in permeabilized tissue sections, retaining spatial coordinates after sequencing.

**Core meaning & mental image — Tiếng Việt:** Đánh mã vạch tế bào theo không gian; hãy hình dung một tấm thảm bàn cờ khổng lồ trên kính hiển vi, mỗi ô vuông nano mang sẵn một mã tọa độ GPS bằng chuỗi DNA; khi lát cắt mô được ép lên, các phân tử RNA rơi xuống ô nào sẽ lập tức bị dán mã tọa độ của ô đó, giúp tái dựng vị trí gốc trong cơ quan sau khi giải trình tự.

**Grammar & collocations:** `rely on spatial cellular barcoding` — dựa trên việc đánh mã vạch tế bào theo không gian; `spatial cellular barcoding array` — mảng đánh mã vạch tế bào theo không gian; `high-density spatial cellular barcoding` — đánh mã vạch tế bào không gian mật độ cao.

**Register & nuance:** `spatial transcriptomics & anatomical pathology` — khác với giải trình tự tế bào đơn thông thường vốn phải nghiền nát mô làm mất tọa độ không gian (loss of native spatial context).

**Examples:** `Through spatial cellular barcoding, the team reconstructed the exact anatomical architecture of the glioblastoma margin without digesting the surgical specimen.` → Thông qua việc đánh mã vạch tế bào theo không gian, nhóm nghiên cứu đã tái dựng chính xác kiến trúc giải phẫu của bờ khối u nguyên bào keo mà không cần phân rã mẫu bệnh phẩm phẫu thuật.

**Liên kết tiếng Hàn:** `공간 세포 바코딩` (空間 細胞 barcoding) — đánh mã vạch tế bào theo tọa độ không gian.

---

## 4. dropout probability imputation /ˈdrɑpˌaʊt ˌprɑbəˈbɪləti ˌɪmpjəˈteɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tân ngữ hoặc đề mục thuật toán trong phân tích ma trận biểu hiện gene (ví dụ: `apply dropout probability imputation`, `model dropout probability imputation`).

**Core meaning — English:** The statistical or machine-learning estimation and replacement of false zero-expression values in single-cell RNA-seq matrices, where transcripts were present in the cell but failed to be captured or amplified due to low capture efficiency.

**Core meaning & mental image — Tiếng Việt:** Phép gán giá trị xác suất mất dữ liệu; hãy hình dung một bản khảo sát ý kiến trong đó một số câu trả lời bị mực làm nhòe thành khoảng trắng (sự kiện dropout); thuật toán tính toán xác suất xem ô trắng đó là do người dân không có ý kiến thật sự (biểu hiện gene bằng 0) hay do bút hết mực (thất thoát kỹ thuật), từ đó phục hồi giá trị hợp lý nhất dựa trên hàng nghìn người có hành vi tương tự.

**Grammar & collocations:** `algorithmic dropout probability imputation` — phép gán giá trị xác suất mất dữ liệu bằng thuật toán; `over-smoothing during dropout probability imputation` — hiện tượng mượt hóa quá mức khi gán giá trị xác suất mất dữ liệu; `probabilistic dropout probability imputation model` — mô hình gán giá trị xác suất mất dữ liệu mang tính xác suất.

**Register & nuance:** `computational genomics & statistical learning` — phương pháp xử lý dữ liệu ma trận thưa thớt (sparse matrix); cần áp dụng cẩn trọng để tránh tạo ra tương quan nhân tạo (spurious correlation) hoặc xóa bỏ tính biến thiên sinh học thật sự.

**Examples:** `Advanced deep generative models perform dropout probability imputation to disentangle true biological silence from stochastic technical dropouts in single-cell data.` → Các mô hình tạo sinh học sâu tiên tiến thực hiện phép gán giá trị xác suất mất dữ liệu nhằm tách biệt trạng thái im lặng sinh học thực sự khỏi các hiện tượng mất dữ liệu kỹ thuật ngẫu nhiên trong dữ liệu đơn tế bào.

**Liên kết tiếng Hàn:** `결측 확률 대치 / 드롭아웃 확률 보정` (缺測 確率 代置) — phép gán giá trị / bù khuyết xác suất mất dữ liệu.

---

## 5. lineage trajectory inference /ˈlɪniɪdʒ trəˈdʒɛktəri ˈɪnfərəns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ hoặc đối tượng nghiên cứu trong sinh học phát triển và tạo máu (ví dụ: `perform lineage trajectory inference`, `algorithms for lineage trajectory inference`).

**Core meaning — English:** Computational reconstruction of continuous cellular differentiation pathways and branching decisions from static single-cell snapshot measurements, ordering cells along an inferred developmental timeline.

**Core meaning & mental image — Tiếng Việt:** Phép suy luận quỹ đạo dòng dõi tế bào; hãy hình dung bạn chụp hàng nghìn bức ảnh ngẫu nhiên của những người từ 1 đến 80 tuổi trên phố; dù mỗi bức ảnh là một khoảnh khắc tĩnh, một thuật toán thông minh có thể sắp xếp các bức ảnh theo trật tự thời gian và chỉ ra các ngã rẽ cuộc đời (học đại học, lập gia đình, về hưu) thành một dòng thời gian phát triển liên tục.

**Grammar & collocations:** `reconstruct via lineage trajectory inference` — tái tạo thông qua phép suy luận quỹ đạo dòng dõi tế bào; `lineage trajectory inference toolkit` — bộ công cụ suy luận quỹ đạo dòng dõi tế bào; `bifurcation points in lineage trajectory inference` — các điểm phân nhánh trong suy luận quỹ đạo dòng dõi tế bào.

**Register & nuance:** `developmental biology & computational transcriptomics` — nâng tầm khái niệm "pseudotime"; tập trung vào việc mô hình hóa các quyết định phân nhánh số phận tế bào (cell fate commitment) thành cấu trúc cây hoặc đồ thị có hướng.

**Examples:** `Lineage trajectory inference mapped the exact transcriptional checkpoints through which hematopoietic progenitors commit to either myeloid or lymphoid fates.` → Phép suy luận quỹ đạo dòng dõi tế bào đã lập bản đồ các điểm kiểm soát phiên mã chính xác mà qua đó các tế bào tiền thân tạo máu quyết định rẽ nhánh sang dòng tủy hoặc dòng lympho.

**Liên kết tiếng Hàn:** `세포 계통 궤적 추론` (細胞 系統 軌跡 推論) — suy luận quỹ đạo dòng dõi phát triển tế bào.

---

## 6. multiplexed ion beam imaging /ˈmʌltəˌplɛkst ˈaɪən biːm ˈɪmɪdʒɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt: MIBI). Thường đóng vai trò phương pháp phân tích mô không gian ở cấp độ dưới tế bào (ví dụ: `quantify proteins using multiplexed ion beam imaging`).

**Core meaning — English:** A spatial proteomic technique that uses secondary ion mass spectrometry to detect tissue-bound antibodies tagged with stable elemental isotopes, achieving subcellular imaging of dozens of proteins simultaneously.

**Core meaning & mental image — Tiếng Việt:** Kỹ thuật chụp ảnh chùm ion đa kênh; hãy hình dung việc gắn các thẻ nguyên tố kim loại hiếm vào từng loại kháng thể đặc hiệu; một chùm tia ion hẹp như sợi tóc quét qua bề mặt mô, làm bật các ion kim loại vào máy khối phổ, giúp tạo ra một bức ảnh huỳnh quang phân giải siêu cao hiển thị đồng thời 40 loại protein khác nhau trong từng cơ quan con của tế bào.

**Grammar & collocations:** `utilize multiplexed ion beam imaging` — sử dụng kỹ thuật chụp ảnh chùm ion đa kênh; `multiplexed ion beam imaging mass spectrometer` — máy khối phổ chụp ảnh chùm ion đa kênh; `subcellular resolution of multiplexed ion beam imaging` — độ phân giải dưới tế bào của chụp ảnh chùm ion đa kênh.

**Register & nuance:** `cutting-edge spatial proteomics & biophysics` — công nghệ phân giải không gian vượt trội hơn huỳnh quang truyền thống do không bị giới hạn bởi hiện tượng quang phổ chồng lấn (spectral overlap) và hiện tượng tự phát huỳnh quang (autofluorescence).

**Examples:** `Multiplexed ion beam imaging revealed the micro-anatomical exclusion of cytotoxic lymphocytes at the invasive tumor border with nanometer precision.` → Kỹ thuật chụp ảnh chùm ion đa kênh đã hé lộ sự loại trừ vi giải phẫu của các tế bào lympho gây độc tại bờ xâm lấn của khối u với độ chính xác đến kích thước nanomet.

**Liên kết tiếng Hàn:** `다중 이온 빔 이미징` (多重 ion beam imaging / MIBI) — chụp ảnh hiển vi chùm ion đa kênh.

---

## 7. cellular transcriptomic heterogeneity /ˈsɛljələr ˌtrænskrɪpˈtɑmɪk ˌhɛtərədʒəˈniːəti/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ giải thích tính kháng thuốc của khối u hoặc sự đa dạng chức năng mô (ví dụ: `unmask cellular transcriptomic heterogeneity`).

**Core meaning — English:** The diversity and variability of RNA expression profiles observed among individual cells within what was traditionally considered a uniform cell type or tissue population.

**Core meaning & mental image — Tiếng Việt:** Tính không đồng nhất về mặt phiên mã của tế bào; hãy hình dung một đội quân mặc quân phục giống hệt nhau khi nhìn từ vệ tinh (bulk sequencing); nhưng khi phỏng vấn từng người lính (single-cell), bạn phát hiện người thì đang sợ hãi, người thì hăng hái, người lại mang vũ khí ngầm khác biệt — sự sai khác sâu sắc bên trong một quần thể bề ngoài tưởng như đồng nhất.

**Grammar & collocations:** `characterize cellular transcriptomic heterogeneity` — đặc trưng hóa tính không đồng nhất phiên mã của tế bào; `intratumoral cellular transcriptomic heterogeneity` — tính không đồng nhất phiên mã tế bào bên trong khối u; `drivers of cellular transcriptomic heterogeneity` — các yếu tố thúc đẩy tính không đồng nhất phiên mã của tế bào.

**Register & nuance:** `precision oncology & cellular taxonomy` — giải thích vì sao cùng một phác đồ hóa trị có thể tiêu diệt 95% tế bào ung thư nhưng 5% tế bào còn lại thoát chết và tái phát.

**Examples:** `Single-cell assays unmasked extensive cellular transcriptomic heterogeneity within what appeared histologically to be a uniform population of luminal breast carcinoma cells.` → Các xét nghiệm đơn tế bào đã vạch trần tính không đồng nhất về mặt phiên mã sâu rộng của tế bào bên trong một quần thể mô học tưởng chừng đồng nhất của ung thư biểu mô vú thể lòng ống.

**Liên kết tiếng Hàn:** `세포 전사체 이질성` (細胞 轉寫體 異質性) — tính không đồng nhất phiên mã của tế bào.

---

## 8. rna velocity vector /ˌɑr ɛn ˈeɪ vəˈlɑsəti ˈvɛktər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm đối tượng tính toán định lượng trong tin sinh học động lực học tế bào (ví dụ: `compute the RNA velocity vector`).

**Core meaning — English:** A mathematical vector representing the predicted future transcriptional state of an individual cell, derived from the kinetic balance between unspliced pre-mRNA and spliced mature mRNA.

**Core meaning & mental image — Tiếng Việt:** Vector vận tốc RNA; hãy hình dung việc quan sát một đoàn tàu đang lăn bánh: tỷ lệ giữa những toa tàu đang lắp ráp (pre-mRNA chưa cắt nối) và những toa tàu đã hoàn thiện trên đường ray (mRNA hoàn chỉnh) cho bạn biết không chỉ vị trí hiện tại của đoàn tàu mà còn chỉ rõ vector vận tốc và hướng mà đoàn tàu sẽ lao tới trong vài giờ tới.

**Grammar & collocations:** `derive an RNA velocity vector` — tính toán một vector vận tốc RNA; `directionality of the RNA velocity vector` — tính định hướng của vector vận tốc RNA; `project RNA velocity vectors onto embedding` — chiếu các vector vận tốc RNA lên không gian nhúng.

**Register & nuance:** `computational RNA biology` — mở ra khả năng dự đoán tương lai từ một bức ảnh tĩnh; bổ sung mũi tên chỉ hướng cho các đồ thị UMAP vốn vô hướng.

**Examples:** `By comparing unspliced and spliced transcript abundance, the algorithm generated an RNA velocity vector that accurately forecasted which neural stem cells would become astrocytes.` → Bằng cách so sánh lượng bản phiên mã chưa cắt nối và đã cắt nối, thuật toán đã tạo ra một vector vận tốc RNA dự báo chính xác tế bào gốc thần kinh nào sẽ biệt hóa thành tế bào hình sao.

**Liên kết tiếng Hàn:** `RNA 속도 벡터` (RNA 速度 vector) — vector vận tốc biến thiên RNA.

---

## 9. transcriptomic pseudotime continuum /ˌtrænskrɪpˈtɑmɪk ˈsuːdoʊtaɪm kənˈtɪnjuəm/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là thang đo nhân tạo nhưng có ý nghĩa sinh học trong việc nghiên cứu động lực học tế bào.

**Core meaning — English:** A continuous artificial metric along which individual cells are computationally arranged based on progressive changes in their gene expression patterns, reflecting their progression through a biological process.

**Core meaning & mental image — Tiếng Việt:** Thể liên tục thời gian giả định phiên mã; hãy hình dung một thước đo vô hình chạy từ số 0 đến số 100: các tế bào được xếp thành một hàng dài liên tục dựa trên độ "chín" của các gene đang bật tắt, cho phép ta đo lường tiến trình biệt hóa mà không cần theo dõi tế bào theo thời gian thực tế của đồng hồ treo tường.

**Grammar & collocations:** `align along a transcriptomic pseudotime continuum` — sắp xếp dọc theo một thể liên tục thời gian giả định phiên mã; `progression through the transcriptomic pseudotime continuum` — sự tiến triển qua thể liên tục thời gian giả định phiên mã; `resolve the transcriptomic pseudotime continuum` — phân giải thể liên tục thời gian giả định phiên mã.

**Register & nuance:** `systems biology & single-cell informatics` — "pseudotime" không phải là thời gian vật lý (physical time in hours/days), mà là tọa độ trừu tượng đo lường mức độ chuyển dịch trạng thái phiên mã.

**Examples:** `T-cell activation markers were sequentially induced as naive lymphocytes advanced along the transcriptomic pseudotime continuum toward effector differentiation.` → Các dấu ấn hoạt hóa tế bào T được tạo cảm ứng tuần tự khi các tế bào lympho ngây thơ tiến dọc theo thể liên tục thời gian giả định phiên mã hướng tới sự biệt hóa thành tế bào hiệu ứng.

**Liên kết tiếng Hàn:** `전사체 의사시간 연속체` (轉寫體 擬似時間 連續體) — thể liên tục thời gian giả định của hệ phiên mã.

---

## 10. single-cell multimodal profiling /ˈsɪŋɡəl sɛl ˌmʌltiˈmoʊdəl ˈproʊfaɪlɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm phương pháp nghiên cứu tích hợp đa tầng thông tin phân tử trong một tế bào duy nhất.

**Core meaning — English:** The simultaneous measurement of multiple molecular layers (such as transcriptome, chromatin accessibility, and cell-surface proteome) from within the exact same individual cell.

**Core meaning & mental image — Tiếng Việt:** Phân tích biên dạng đa phương thức đơn tế bào; hãy hình dung việc điều tra một nghi phạm: thay vì chỉ nghe bản thu âm giọng nói (RNA), bạn đồng thời chụp quét dấu vân tay (chất nhiễm sắc chromatin) và lấy mẫu trang phục bên ngoài (protein màng) từ chính người đó cùng một lúc, đem lại bức chân dung toàn diện không thể nhầm lẫn.

**Grammar & collocations:** `conduct single-cell multimodal profiling` — tiến hành phân tích biên dạng đa phương thức đơn tế bào; `single-cell multimodal profiling platforms` — các nền tảng phân tích biên dạng đa phương thức đơn tế bào; `integrate data from single-cell multimodal profiling` — tích hợp dữ liệu từ phân tích biên dạng đa phương thức đơn tế bào.

**Register & nuance:** `integrative multi-omics` — đại diện cho đỉnh cao công nghệ liên kết hệ gene; kết hợp các kỹ thuật như CITE-seq (RNA + protein) hay multiome ATAC + RNA trong cùng một giọt vi lưu.

**Examples:** `Single-cell multimodal profiling enabled researchers to link specific accessible non-coding enhancer elements directly with transcript output and cell-surface marker abundance in rare stem cells.` → Phân tích biên dạng đa phương thức đơn tế bào đã cho phép các nhà nghiên cứu liên kết trực tiếp các yếu tố tăng cường không mã hóa mở tiếp cận với sản lượng bản phiên mã và mật độ dấu ấn bề mặt tế bào trong các tế bào gốc hiếm.

**Liên kết tiếng Hàn:** `단일 세포 다중 오믹스 프로파일링` (單一 細胞 多重 omics profiling) — lập hồ sơ phân tử đa phương thức của từng tế bào đơn.

---

## 11. imaging mass cytometry /ˈɪmɪdʒɪŋ mæs saɪˈtɑmətri/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ (viết tắt: IMC). Đóng vai trò là phương pháp phân tích mô định lượng dựa trên khối phổ (ví dụ: `profile tumor biopsies using imaging mass cytometry`).

**Core meaning — English:** A spatial proteomic technology that combines high-resolution laser ablation with time-of-flight mass spectrometry to quantify dozens of metal-tagged antibodies on tissue sections at single-cell resolution.

**Core meaning & mental image — Tiếng Việt:** Phép đo tế bào khối phổ hình ảnh; hãy hình dung một tia laser tí hon bắn từng xung cực nhỏ để làm bay hơi một chấm mô hiển vi đã nhuộm các kháng thể gắn kim loại nặng; đám khói ion bay thẳng vào buồng đo khối phổ thời gian bay (TOF), cho biết tức thì nồng độ của 40 mục tiêu sinh học tại đúng điểm laser vừa chạm.

**Grammar & collocations:** `stain sections for imaging mass cytometry` — nhuộm lát cắt mô cho phép đo tế bào khối phổ hình ảnh; `imaging mass cytometry analysis` — phân tích bằng phép đo tế bào khối phổ hình ảnh; `imaging mass cytometry spatial panel` — bộ kháng thể không gian của phép đo tế bào khối phổ hình ảnh.

**Register & nuance:** `translational pathology & multiplex histology` — tương đương về nguyên lý với MIBI nhưng sử dụng xung laser quang học (laser ablation) thay vì chùm tia ion sơ cấp để bắn phá mẫu mô.

**Examples:** `Imaging mass cytometry revealed distinct microenvironmental niches where immunosuppressive macrophages tightly co-localized with exhausted CD8+ T cells.` → Phép đo tế bào khối phổ hình ảnh đã hé lộ các ổ vi môi trường riêng biệt nơi các đại thực bào ức chế miễn dịch định vị cùng một chỗ với các tế bào T CD8+ kiệt quệ.

**Liên kết tiếng Hàn:** `이미징 질량 세포 분석법` (imaging 質量 細胞 分析法 / IMC) — phương pháp đo tế bào khối phổ hình ảnh.

---

## 12. ambient rna decontamination /ˈæmbiənt ˌɑr ɛn ˈeɪ ˌdiːkənˌtæməˈneɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường xuất hiện trong quy trình tiền xử lý tin sinh học kiểm soát chất lượng (ví dụ: `run ambient RNA decontamination`).

**Core meaning — English:** Computational removal of background cell-free RNA molecules that leaked from lysed cells into the cell suspension before microfluidic droplet encapsulation, preventing false gene expression signatures in intact cells.

**Core meaning & mental image — Tiếng Việt:** Khử nhiễm RNA tự do ngoại bào; hãy hình dung một bể bơi chứa hàng nghìn quả bóng: một vài quả bóng bị vỡ làm rò rỉ thuốc nhuộm đỏ vào nước; khi vớt từng quả bóng lành lặn ra, bề mặt của chúng đều dính một lớp màu đỏ loãng từ nước bể; thuật toán khử nhiễm đóng vai trò như một vòi xịt rửa sạch lớp màu nền ngoại lai này để chỉ đo màu sắc thực sự bên trong quả bóng.

**Grammar & collocations:** `perform ambient RNA decontamination` — thực hiện khử nhiễm RNA tự do ngoại bào; `algorithms for ambient RNA decontamination` — các thuật toán khử nhiễm RNA tự do ngoại bào; `ambient RNA decontamination step` — bước khử nhiễm RNA tự do ngoại bào.

**Register & nuance:** `single-cell quality control (QC)` — bước bắt buộc khi xử lý các mẫu mô khó phân tách hoặc mô đông lạnh dễ vỡ màng; các công cụ phổ biến gồm SoupX, DecontX.

**Examples:** `Without rigorous ambient RNA decontamination, highly expressed hemoglobin transcripts from lysed erythrocytes falsely decorated every unrelated lymphocyte cluster in the dataset.` → Nếu thiếu quy trình khử nhiễm RNA tự do ngoại bào nghiêm ngặt, các bản phiên mã hemoglobin biểu hiện cao từ hồng cầu bị vỡ sẽ bám dính giả tạo lên mọi cụm tế bào lympho không liên quan trong tập dữ liệu.

**Liên kết tiếng Hàn:** `주변 환경 RNA 오염 제거` (周邊 環境 RNA 汚染 除去) — khử ô nhiễm RNA tự do trong môi trường huyền phù.

---

## 13. spatial cellular deconvolution /ˈspeɪʃəl ˈsɛljələr ˌdiːkɑnvəˈluːʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ hoặc giải pháp thuật toán giải mã các điểm đo không gian chứa nhiều tế bào (ví dụ: `perform spatial cellular deconvolution`).

**Core meaning — English:** The mathematical decomposition of mixed transcriptomic profiles from multi-cell spatial capture spots into constituent cell-type proportions using single-cell RNA-seq reference profiles.

**Core meaning & mental image — Tiếng Việt:** Phép giải chập tế bào theo không gian; hãy hình dung một ly sinh tố hoa quả thập cẩm được xay từ dâu, chuối và xoài: một vị đầu bếp sành sỏi nếm thử hương vị hỗn hợp và dựa vào bảng công thức chuẩn của từng loại quả nguyên chất để phân tích chính xác ly nước chứa 45% dâu tây, 35% chuối và 20% xoài.

**Grammar & collocations:** `reference-based spatial cellular deconvolution` — phép giải chập tế bào theo không gian dựa trên bộ dữ liệu tham chiếu; `spatial cellular deconvolution algorithms` — các thuật toán giải chập tế bào theo không gian; `accuracy of spatial cellular deconvolution` — độ chính xác của phép giải chập tế bào theo không gian.

**Register & nuance:** `computational spatial biology` — cực kỳ quan trọng đối với các nền tảng có độ phân giải điểm đo lớn (như 10x Visium 55 µm spot chứa 5–10 tế bào), giúp bắc cầu từ độ phân giải điểm sang độ phân giải từng tế bào.

**Examples:** `Applying spatial cellular deconvolution enabled the researchers to estimate the precise fraction of regulatory T cells residing within each fifty-micrometer capture spot.` → Việc áp dụng phép giải chập tế bào theo không gian đã cho phép các nhà nghiên cứu ước tính tỷ lệ chính xác của các tế bào T điều hòa cư trú bên trong mỗi điểm bắt giữ 50 micromet.

**Liên kết tiếng Hàn:** `공간 세포 역합성 / 디컨볼루션` (空間 細胞 逆合成 / deconvolution) — phép giải chập thành phần tế bào theo không gian.

---

## 14. spatial cytoarchitecture mapping /ˈspeɪʃəl ˌsaɪtoʊˈɑrkəˌtɛktʃər ˈmæpɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tân ngữ hoặc mục tiêu trong mô học tính toán và giải phẫu thần kinh (ví dụ: `achieve spatial cytoarchitecture mapping`).

**Core meaning — English:** The systematic characterization and spatial charting of how diverse cell types, cellular shapes, and cell densities are geometrically arranged to construct functional tissue layers.

**Core meaning & mental image — Tiếng Việt:** Lập bản đồ kiến trúc tế bào học không gian; hãy hình dung một bản thiết kế xây dựng chi tiết của một tòa lâu đài Gothic: từng viên đá, cây cột, vòm cửa và hành lang được vẽ rõ vị trí tọa độ 3D để tạo nên kết cấu chịu lực hoàn chỉnh; việc lập bản đồ mô tả chính xác cách các tế bào xếp lớp và tạo liên kết hình học trong vỏ não hoặc gan.

**Grammar & collocations:** `comprehensive spatial cytoarchitecture mapping` — lập bản đồ kiến trúc tế bào học không gian toàn diện; `spatial cytoarchitecture mapping of the cortex` — lập bản đồ kiến trúc tế bào học không gian của vỏ não; `tools for spatial cytoarchitecture mapping` — các công cụ lập bản đồ kiến trúc tế bào học không gian.

**Register & nuance:** `structural histology & neuroanatomy` — đi sâu hơn việc chỉ nhận diện tế bào; nhấn mạnh vào trật tự hình học và mối quan hệ lân cận giữa các lớp tế bào (laminar organization).

**Examples:** `High-resolution spatial cytoarchitecture mapping clarified how cortical neurons arrange into distinct six-layered laminar boundaries during human embryonic neocortex development.` → Việc lập bản đồ kiến trúc tế bào học không gian độ phân giải cao đã làm sáng tỏ cách các neuron vỏ não sắp xếp thành các ranh giới phân tầng 6 lớp riêng biệt trong quá trình phát triển vỏ não mới ở phôi người.

**Liên kết tiếng Hàn:** `공간 세포구축 지도화` (空間 細胞構築 地圖化) — lập bản đồ kiến trúc tế bào theo không gian.

---

## 15. transcriptional burst kinetics /trænˈskrɪpʃənəl bɜrst kəˈnɛtɪks/

**Loại từ & vị trí trong câu:** `noun phrase` (thường ở số nhiều) — cụm danh từ. Thường đóng vai trò đối tượng vật lý - sinh học trong việc nghiên cứu hiện tượng biểu hiện gene ngắt quãng.

**Core meaning — English:** The quantitative parameters—specifically burst frequency and burst size—that describe the intermittent, stochastic switching of gene promoters between active transcription and inactive states.

**Core meaning & mental image — Tiếng Việt:** Động học của các đợt bùng phát phiên mã; hãy hình dung một chiếc vòi nước bị nghẽn không chảy liên tục êm đềm mà cứ đóng chặt vài phút rồi bất ngờ phun ra một tia nước dữ dội chứa đầy phân tử mRNA rồi lại ngắt hẳn; tần số mở vòi và thể tích nước mỗi lần phun chính là động học bùng phát phiên mã.

**Grammar & collocations:** `modulate transcriptional burst kinetics` — điều biến động học của các đợt bùng phát phiên mã; `measure transcriptional burst kinetics` — đo lường động học bùng phát phiên mã; `parameters of transcriptional burst kinetics` — các thông số động học bùng phát phiên mã.

**Register & nuance:** `stochastic gene expression & biophysics` — giải thích nguồn gốc vật lý của hiện tượng cell-to-cell variability ngay cả giữa các tế bào mang hệ gene giống hệt nhau trong cùng một điều kiện môi trường.

**Examples:** `Single-cell measurements revealed that enhancer-promoter looping primarily increases burst frequency rather than burst size in the transcriptional burst kinetics of developmental genes.` → Các phép đo đơn tế bào đã tiết lộ rằng việc hình thành quai tăng cường - khởi động chủ yếu làm tăng tần số bùng phát thay vì độ lớn bùng phát trong động học bùng phát phiên mã của các gene phát triển.

**Liên kết tiếng Hàn:** `전사 파열 동역학` (轉寫 破裂 動力學) — động học của hiện tượng bùng phát phiên mã ngắt quãng.

---

## 16. cellular doublet discrimination /ˈsɛljələr ˈdʌblət dɪˌskrɪməˈneɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tân ngữ hoặc bước lọc dữ liệu quan trọng trong kiểm chuẩn chất lượng (ví dụ: `implement cellular doublet discrimination`).

**Core meaning — English:** The computational or experimental identification and removal of artifacts where two distinct cells were encapsulated within the same microfluidic reaction droplet and erroneously sequenced as a single entity.

**Core meaning & mental image — Tiếng Việt:** Phân biệt cặp tế bào dính đôi; hãy hình dung hai người khách lạ cùng chen chân vào một buồng chụp ảnh thẻ lấy ngay: tấm ảnh chụp ra sẽ là khuôn mặt nửa người này ghép với nửa người kia, tạo thành một quái vật giả tạo; thuật toán phân biệt phát hiện ra những hồ sơ gene "lai tạp" bất thường này để loại bỏ khỏi nghiên cứu.

**Grammar & collocations:** `rigorous cellular doublet discrimination` — sự phân biệt cặp tế bào dính đôi nghiêm ngặt; `algorithms for cellular doublet discrimination` — các thuật toán phân biệt cặp tế bào dính đôi; `in silico cellular doublet discrimination` — phân biệt cặp tế bào dính đôi trên máy tính.

**Register & nuance:** `single-cell bioinformatics & assay validation` — nếu không loại bỏ doublet, nhà nghiên cứu sẽ tưởng nhầm mình vừa phát hiện ra một "loại tế bào mới" (chẳng hạn một tế bào vừa biểu hiện marker tế bào T vừa biểu hiện marker tế bào B).

**Examples:** `Through rigorous cellular doublet discrimination, artificial hybrid transcriptomic states were filtered out before performing final cell clustering.` → Thông qua việc phân biệt cặp tế bào dính đôi nghiêm ngặt, các trạng thái phiên mã lai tạp nhân tạo đã bị lọc bỏ trước khi tiến hành phân cụm tế bào cuối cùng.

**Liên kết tiếng Hàn:** `이중 세포 판별 / 식별` (二重 細胞 判別) — phân biệt và loại bỏ cặp tế bào dính đôi.

---

## 17. spatial neighborhood enrichment /ˈspeɪʃəl ˈneɪbərˌhʊd ɪnˈrɪtʃmənt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm phương pháp kiểm định thống kê mối quan hệ không gian giữa các quần thể tế bào (ví dụ: `calculate spatial neighborhood enrichment`).

**Core meaning — English:** A statistical measure testing whether specific cell types are located closer to one another within a tissue coordinate space more frequently than expected by random spatial distribution.

**Core meaning & mental image — Tiếng Việt:** Sự làm giàu vùng lân cận không gian; hãy hình dung trong một quảng trường đông đúc: thay vì người dân đứng rải rác ngẫu nhiên, bạn nhận thấy những người mặc áo đen và áo xanh luôn đứng áp sát bên nhau thành từng nhóm nhỏ; phép kiểm định thống kê chứng minh đây là sự tụ tập có chủ đích chứ không phải ngẫu nhiên.

**Grammar & collocations:** `test for spatial neighborhood enrichment` — kiểm định sự làm giàu vùng lân cận không gian; `significant spatial neighborhood enrichment` — sự làm giàu vùng lân cận không gian có ý nghĩa thống kê; `spatial neighborhood enrichment score` — điểm số làm giàu vùng lân cận không gian.

**Register & nuance:** `spatial tissue biology & immune profiling` — chìa khóa định lượng tương tác tế bào (cell-cell interactions) và phát hiện các "ổ vi môi trường" (microenvironmental niches) trong mô bệnh học.

**Examples:** `Statistical analysis identified a strong spatial neighborhood enrichment between exhausted CD8+ T cells and programmed death-ligand 1 positive macrophages within the tumor core.` → Phân tích thống kê đã xác định sự làm giàu vùng lân cận không gian mạnh mẽ giữa các tế bào T CD8+ kiệt quệ và các đại thực bào dương tính với PD-L1 bên trong lõi khối u.

**Liên kết tiếng Hàn:** `공간 이웃 농축도` (空間 이웃 濃縮度) — độ làm giàu / mật độ tập trung lân cận không gian.

---

## 18. oligo-conjugated antibodies /ˈɑlɪɡoʊ ˈkɑndʒəˌɡeɪtəd ˈæntɪˌbɑdiz/

**Loại từ & vị trí trong câu:** `noun phrase` (thường ở số nhiều) — cụm danh từ. Đóng vai trò là thuốc thử phân tử lai trong các xét nghiệm multi-omics đơn tế bào (ví dụ: `incubate cells with oligo-conjugated antibodies`).

**Core meaning — English:** Monoclonal antibodies chemically linked to unique synthetic single-stranded DNA oligonucleotide barcodes, converting surface protein detection into digital sequencing readouts.

**Core meaning & mental image — Tiếng Việt:** Các kháng thể liên hợp với chuỗi oligo; hãy hình dung những chiếc móc câu đặc hiệu (kháng thể) được buộc thêm một sợi dây mang mã vạch DNA; khi kháng thể bám vào kháng nguyên protein trên màng tế bào, chiếc máy giải trình tự DNA có thể đọc luôn mã vạch đó, biến việc đếm protein thành việc đọc chuỗi nucleotide quen thuộc.

**Grammar & collocations:** `stain with oligo-conjugated antibodies` — nhuộm bằng các kháng thể liên hợp với chuỗi oligo; `panel of oligo-conjugated antibodies` — bộ kháng thể liên hợp với chuỗi oligo; `titration of oligo-conjugated antibodies` — định chuẩn nồng độ các kháng thể liên hợp với chuỗi oligo.

**Register & nuance:** `high-dimensional proteogenomics` — công cụ hạt nhân của kỹ thuật CITE-seq và REAP-seq, cho phép đo hàng trăm protein bề mặt cùng lúc với toàn bộ hệ phiên mã mà không bị giới hạn quang phổ.

**Examples:** `Cells were incubated with a cocktail of oligo-conjugated antibodies, allowing simultaneous quantification of surface antigens alongside whole-transcriptome sequencing.` → Tế bào được ủ với một hỗn hợp các kháng thể liên hợp chuỗi oligo, cho phép định lượng đồng thời các kháng nguyên bề mặt cùng với giải trình tự toàn bộ hệ phiên mã.

**Liên kết tiếng Hàn:** `올리고 접합 항체` (oligo 接合 抗體) — kháng thể gắn chuỗi oligonucleotide.

---

## 19. high-dimensional clustering manifold /haɪ daɪˈmɛnʃənəl ˈklʌstərɪŋ ˈmænəˌfoʊld/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường xuất hiện trong phần phân tích thuật toán học máy và giảm chiều dữ liệu (ví dụ: `project onto a high-dimensional clustering manifold`).

**Core meaning — English:** The complex geometric sub-space embedded within high-dimensional gene expression space along which single-cell data points naturally lie, capturing biological similarity and progression.

**Core meaning & mental image — Tiếng Việt:** Đa tạp phân cụm nhiều chiều; hãy hình dung một chiếc khăn lụa mỏng uốn lượn ngoạn mục trong không gian 3 chiều: dù căn phòng có 3 chiều (hoặc 20.000 chiều tương ứng với 20.000 gene), bề mặt chiếc khăn chỉ là 2 chiều uốn lượn; đa tạp chính là cấu trúc hình học ẩn sâu liên kết các tế bào tương đồng lại với nhau một cách tự nhiên.

**Grammar & collocations:** `embed on a high-dimensional clustering manifold` — nhúng trên một đa tạp phân cụm nhiều chiều; `topology of the high-dimensional clustering manifold` — tô pô của đa tạp phân cụm nhiều chiều; `traverse the high-dimensional clustering manifold` — duyệt qua đa tạp phân cụm nhiều chiều.

**Register & nuance:** `computational topology & machine learning in biology` — nền tảng lý thuyết của các thuật toán t-SNE, UMAP và đồ thị lân cận k-NN.

**Examples:** `Dimensionality reduction algorithms preserve the intrinsic topology of the high-dimensional clustering manifold, enabling visual separation of discrete cell types and continuous transitions.` → Các thuật toán giảm số chiều bảo toàn tô pô nội tại của đa tạp phân cụm nhiều chiều, cho phép tách biệt trực quan các loại tế bào rời rạc và các bước chuyển tiếp liên tục.

**Liên kết tiếng Hàn:** `고차원 클러스터링 다양체` (高次元 clustering 多樣體) — đa tạp phân cụm nhiều chiều (manifold).

---

## 20. single-cell proteomic profiling /ˈsɪŋɡəl sɛl ˌproʊtiˈoʊmɪk ˈproʊfaɪlɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ hoặc tân ngữ trong phân tích chức năng tế bào ở mức độ dịch mã (ví dụ: `perform single-cell proteomic profiling`).

**Core meaning — English:** The quantitative measurement and systematic cataloging of protein abundances, post-translational modifications, and functional states within individual isolated cells.

**Core meaning & mental image — Tiếng Việt:** Phân tích biên dạng protein đơn tế bào; hãy hình dung việc đo lường lượng công cụ lao động thực tế đang hoạt động trong một nhà xưởng: bản thiết kế trên giấy (RNA) chưa chắc đã được đem đi sản xuất; đo lường trực tiếp các cỗ máy protein đang chạy trong từng tế bào mới phản ánh trung thực nhất năng lực hành động và trạng thái sinh lý của tế bào đó.

**Grammar & collocations:** `advance single-cell proteomic profiling` — thúc đẩy phân tích biên dạng protein đơn tế bào; `single-cell proteomic profiling via mass spectrometry` — phân tích biên dạng protein đơn tế bào qua khối phổ; `depth of single-cell proteomic profiling` — độ sâu của phân tích biên dạng protein đơn tế bào.

**Register & nuance:** `cutting-edge biochemical analytical sciences` — bước phát triển vượt bậc khắc phục hiện tượng bất tương xứng giữa nồng độ mRNA và nồng độ protein (mRNA-protein discordance).

**Examples:** `Single-cell proteomic profiling revealed substantial post-translational phosphorylation differences among leukemic blast cells that had identical transcriptomic readouts.` → Phân tích biên dạng protein đơn tế bào đã hé lộ những khác biệt đáng kể về quá trình phosphoryl hóa sau dịch mã giữa các tế bào nguyên bào bạch cầu có kết quả đọc phiên mã giống hệt nhau.

**Liên kết tiếng Hàn:** `단일 세포 단백체 프로파일링` (單一 細胞 蛋白質體 profiling) — lập hồ sơ hệ protein đơn tế bào.

---

## 21. spatial transcriptomic resolution /ˈspeɪʃəl ˌtrænskrɪpˈtɑmɪk ˌrɛzəˈluːʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường dùng làm tiêu chí đánh giá năng lực phân giải của thiết bị và công nghệ giải trình tự không gian (ví dụ: `enhance spatial transcriptomic resolution`).

**Core meaning — English:** The physical metric or granularity with which gene expression can be mapped across tissue sections, ranging from multi-cell spots (50–100 µm) down to single-cell or subcellular optical resolution (<1 µm).

**Core meaning & mental image — Tiếng Việt:** Độ phân giải không gian của hệ phiên mã; hãy hình dung sự nâng cấp từ một bức ảnh truyền hình vệ tinh mờ ảo (mỗi điểm ảnh là một khu phố) lên ảnh chụp flycam siêu nét (mỗi điểm ảnh là từng chiếc lá trên ngọn cây); độ phân giải không gian càng cao thì ta càng nhìn rõ từng phân tử RNA nằm ở bào tương hay trong nhân tế bào.

**Grammar & collocations:** `subcellular spatial transcriptomic resolution` — độ phân giải không gian của hệ phiên mã dưới cấp tế bào; `trade-off in spatial transcriptomic resolution` — sự đánh đổi trong độ phân giải không gian của hệ phiên mã; `attain high spatial transcriptomic resolution` — đạt được độ phân giải không gian của hệ phiên mã cao.

**Register & nuance:** `optical instrumentation & spatial transcriptomics` — phân biệt rõ giữa "spot resolution" (nhiều tế bào gộp lại) và "true single-cell resolution" (như Stereo-seq, CosMx, Xenium).

**Examples:** `Modern in situ sequencing technologies reach subcellular spatial transcriptomic resolution, allowing investigators to pinpoint where individual transcripts localize within dendritic spines.` → Các công nghệ giải trình tự tại chỗ hiện đại đạt tới độ phân giải không gian hệ phiên mã dưới cấp tế bào, cho phép các nhà nghiên cứu định vị chính xác vị trí các bản phiên mã riêng lẻ định cư bên trong các gai sợi nhánh.

**Liên kết tiếng Hàn:** `공간 전사체 해상도` (空間 轉寫體 解像度) — độ phân giải của hệ phiên mã không gian.

---

## 22. transcriptomic batch harmonization /ˌtrænskrɪpˈtɑmɪk bætʃ ˌhɑrmənəˈzeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường xuất hiện trong các dự án tích hợp dữ liệu quy mô lớn (cell atlases) (ví dụ: `achieve transcriptomic batch harmonization`).

**Core meaning — English:** Computational alignment of single-cell datasets generated across different experimental runs, sequencing platforms, or clinical cohorts to eliminate technical variations while preserving genuine biological signal.

**Core meaning & mental image — Tiếng Việt:** Sự hài hòa hóa lô dữ liệu phiên mã; hãy hình dung việc ghép các bức ảnh được chụp từ các máy ảnh khác nhau dưới điều kiện ánh sáng nắng gắt hay râm mát: sự hài hòa hóa là việc cân bằng trắng và chỉnh màu chuẩn xác để toàn bộ bức tranh ghép trở nên liền mạch tự nhiên mà không làm biến đổi màu sắc thật của chiếc áo nhân vật.

**Grammar & collocations:** `perform transcriptomic batch harmonization` — thực hiện sự hài hòa hóa lô dữ liệu phiên mã; `transcriptomic batch harmonization pipeline` — quy trình hài hòa hóa lô dữ liệu phiên mã; `evaluate transcriptomic batch harmonization` — đánh giá sự hài hòa hóa lô dữ liệu phiên mã.

**Register & nuance:** `large-scale data integration & biostatistics` — giải pháp cho "batch effects"; các thuật toán hàng đầu gồm Harmony, Seurat RPCA, scVI.

**Examples:** `Transcriptomic batch harmonization successfully aligned single-cell datasets from twelve independent medical centers without erasing subtle patient-specific disease signatures.` → Sự hài hòa hóa lô dữ liệu phiên mã đã liên kết thành công các bộ dữ liệu đơn tế bào từ 12 trung tâm y tế độc lập mà không xóa đi các dấu ấn bệnh lý tinh vi đặc hiệu cho từng bệnh nhân.

**Liên kết tiếng Hàn:** `전사체 배치 조화 / 통합 보정` (轉寫體 batch 調和) — sự hài hòa hóa / điều hòa sai lệch giữa các lô dữ liệu phiên mã.

---

## 23. cellular phenotypic plasticity /ˈsɛljələr ˌfiːnəˈtɪpɪk plæˈstɪsəti/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ giải thích khả năng thích ứng linh hoạt và biến hình của tế bào ung thư hoặc tế bào gốc (ví dụ: `exhibit cellular phenotypic plasticity`).

**Core meaning — English:** The capacity of a cell to alter its phenotypic state, morphology, and functional characteristics in response to environmental cues without acquiring new genetic mutations.

**Core meaning & mental image — Tiếng Việt:** Tính mềm dẻo kiểu hình của tế bào; hãy hình dung một diễn viên kịch tài năng: không cần phẫu thuật thẩm mỹ (không thay đổi DNA), người diễn viên có thể thay đổi trang phục, dáng đi và giọng nói để biến hóa tức thì từ một thường dân thành một chiến binh hung hãn nhằm thích nghi với bối cảnh sân khấu mới.

**Grammar & collocations:** `drive cellular phenotypic plasticity` — thúc đẩy tính mềm dẻo kiểu hình của tế bào; `reversibility of cellular phenotypic plasticity` — tính thuận nghịch của sự mềm dẻo kiểu hình tế bào; `cellular phenotypic plasticity in metastasis` — tính mềm dẻo kiểu hình tế bào trong di căn.

**Register & nuance:** `cell biology & tumor evolutionary dynamics` — hiện tượng trung tâm trong quá trình chuyển tiếp biểu mô - trung mô (EMT) và sự phát triển tính kháng thuốc hóa trị.

**Examples:** `Cellular phenotypic plasticity allows circulating melanoma cells to switch reversibly between proliferative and invasive states during extravasation and metastatic colonization.` → Tính mềm dẻo kiểu hình của tế bào cho phép các tế bào u hắc tố lưu hành chuyển đổi thuận nghịch giữa trạng thái tăng sinh và xâm lấn trong quá trình thoát mạch và định cư di căn.

**Liên kết tiếng Hàn:** `세포 표현형 가소성` (細胞 表現型 可塑性) — tính mềm dẻo / linh hoạt kiểu hình của tế bào.

---

## 24. low-abundance transcript quantification /loʊ əˈbʌndəns ˈtrænskrɪpt ˌkwɑntəfəˈkeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tân ngữ hoặc thử thách kỹ thuật hàng đầu trong sinh học phân tử (ví dụ: `improve low-abundance transcript quantification`).

**Core meaning — English:** The sensitive detection and accurate measurement of rare mRNA transcripts that are present at extremely low copy numbers (one to few copies per cell), which are prone to technical dropout.

**Core meaning & mental image — Tiếng Việt:** Định lượng bản phiên mã có độ phong phú thấp; hãy hình dung việc tìm một giọt mực xanh rơi vào một thùng nước lớn: nếu phương pháp đo thô sơ, giọt mực sẽ bị hòa tan mất hút; việc định lượng chính xác đòi hỏi chiếc kính lúp siêu nhạy để đếm từng phân tử đơn lẻ mà không bỏ sót bất kỳ tín hiệu yếu ớt nào.

**Grammar & collocations:** `sensitivity in low-abundance transcript quantification` — độ nhạy trong định lượng bản phiên mã có độ phong phú thấp; `challenges of low-abundance transcript quantification` — những thách thức của việc định lượng bản phiên mã có độ phong phú thấp; `benchmark low-abundance transcript quantification` — chuẩn đối sánh định lượng bản phiên mã có độ phong phú thấp.

**Register & nuance:** `quantitative molecular genomics` — yếu tố sống còn để phát hiện các yếu tố phiên mã chủ chốt (master transcription factors) và các thụ thể tín hiệu hiếm vốn quyết định số phận tế bào dù biểu hiện ở mức cực thấp.

**Examples:** `Targeted enrichment panels significantly improved low-abundance transcript quantification, allowing reliable detection of rare transcription factor mRNAs in single stem cells.` → Các bộ mồi làm giàu trúng đích đã cải thiện đáng kể việc định lượng bản phiên mã có độ phong phú thấp, cho phép phát hiện đáng tin cậy các mRNA của yếu tố phiên mã hiếm trong từng tế bào gốc đơn lẻ.

**Liên kết tiếng Hàn:** `저풍부도 전사체 정량` (低豐富度 轉寫體 定量) — định lượng các bản phiên mã mật độ thấp.

---

## 25. developmental lineage branching /dɪˌvɛləpˈmɛntəl ˈlɪniɪdʒ ˈbræntʃɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường xuất hiện trong phần mô tả cơ chế phát sinh cơ quan và số phận tế bào (ví dụ: `reconstruct developmental lineage branching`).

**Core meaning — English:** The bifurcation or division of multipotent progenitor cells into two or more distinct specialized cell fates along a differentiation continuum, orchestrated by lineage-specific gene regulatory networks.

**Core meaning & mental image — Tiếng Việt:** Sự phân nhánh dòng dõi phát triển; hãy hình dung thân cây đại thụ vươn lên từ mặt đất rồi tách đôi thành hai cành lớn, mỗi cành lại đâm ra vô số nhánh con chuyên biệt mang lá và hoa khác nhau; đó là thời khắc quyết định khi tế bào gốc không thể quay đầu mà phải chọn một ngả rẽ sinh học cụ thể.

**Grammar & collocations:** `orchestrate developmental lineage branching` — điều phối sự phân nhánh dòng dõi phát triển; `nodes of developmental lineage branching` — các nút thắt của sự phân nhánh dòng dõi phát triển; `model developmental lineage branching` — mô hình hóa sự phân nhánh dòng dõi phát triển.

**Register & nuance:** `embryology & regenerative biology` — thường được minh họa bằng các biểu đồ dạng cây (tree-based topologies) hoặc đồ thị phân nhánh phức tạp trong phân tích đơn tế bào.

**Examples:** `Single-cell multi-omics uncovered the exact transcriptional switches that govern developmental lineage branching during the differentiation of neural crest progenitors.` → Công nghệ đa omics đơn tế bào đã khám phá các công tắc phiên mã chính xác điều phối sự phân nhánh dòng dõi phát triển trong suốt quá trình biệt hóa của các tế bào tiền thân mào thần kinh.

**Liên kết tiếng Hàn:** `발생 분화 계통 분기` (發生 分化 系統 分岐) — sự phân nhánh dòng dõi phát triển tế bào.

---

## Review in context (Part 1: Single-Cell Transcriptomic Frontiers and Computational Dissection)

Contemporary molecular biology has fundamentally transitioned from homogenizing tissue lysates to dissecting individual cells with extraordinary precision. To eliminate PCR amplification artifacts and obtain unskewed molecular counts, investigators append **unique molecular identifiers** to each captured cDNA fragment. This molecular tagging is seamlessly achieved through high-throughput **microfluidic cell encapsulation**, which traps single viable cells inside oil-shielded picoliter compartments alongside lysis enzymes and functionalized beads. Preserving tissue architecture in parallel requires innovative **spatial cellular barcoding**, encoding precise slide-coordinate addresses directly onto hybridizing mRNAs. In computational pipelines, handling technical zeros presents a major obstacle, necessitating principled **dropout probability imputation** to separate true biological silence from stochastic mRNA capture failure. Once high-fidelity expression profiles are recovered, sophisticated **lineage trajectory inference** algorithms reconstruct continuous differentiation pathways from static cell snapshots. Subcellular proteomic validation can be achieved using **multiplexed ion beam imaging**, which sputters metal-conjugated labels with a focused ion source to yield dozens of protein channels simultaneously. These combined methodologies have completely reshaped our understanding of **cellular transcriptomic heterogeneity**, proving that even morphologically identical cells display striking expression variances. By calculating the kinetics of unspliced and spliced transcripts, algorithms generate a predictive **rna velocity vector** for each cell, revealing its imminent developmental direction. Cells are consequently mapped along an artificial **transcriptomic pseudotime continuum**, reflecting their relative maturity through differentiation cascades. By combining transcriptomic measurements with epigenomic assays, **single-cell multimodal profiling** captures multiple regulatory layers simultaneously within the very same envelope. Complementing ion beam approaches, **imaging mass cytometry** leverages laser ablation coupled to time-of-flight mass spectrometry to quantify dense tissue microenvironments. Finally, to prevent cell-free background RNA from corrupting cluster markers, bioinformaticians must execute strict **ambient rna decontamination** during initial data quality control.

**Bản dịch tiếng Việt:**

Sinh học phân tử hiện đại đã căn bản chuyển dịch từ việc đồng hóa các mẫu ly giải mô sang việc mổ xẻ từng tế bào đơn lẻ với độ chính xác phi thường. Để loại bỏ các sai lệch do khuếch đại PCR và thu được số lượng phân tử không thiên lệch, các nhà điều tra gắn **các mã định danh phân tử duy nhất** vào từng đoạn cDNA được bắt giữ. Việc đánh dấu phân tử này được thực hiện liền mạch thông qua **sự bao gói tế bào bằng vi lưu** thông lượng cao, giúp bẫy các tế bào sống đơn lẻ bên trong các ngăn nhỏ kích thước picolit được bọc dầu cùng với các enzyme ly giải và các hạt vi cầu chức năng. Việc bảo tồn kiến trúc mô song song đòi hỏi kỹ thuật **đánh mã vạch tế bào theo không gian** tiên tiến, mã hóa các địa chỉ tọa độ tiêu bản chính xác trực tiếp lên các phân tử mRNA lai hóa. Trong các quy trình tin sinh học, việc xử lý các giá trị 0 kỹ thuật là một trở ngại lớn, đòi hỏi **phép gán giá trị xác suất mất dữ liệu** theo nguyên lý để phân tách trạng thái im lặng sinh học thực sự khỏi sự thất thoát bắt giữ mRNA ngẫu nhiên. Khi các hồ sơ biểu hiện có độ tin cậy cao được khôi phục, các thuật toán **phép suy luận quỹ đạo dòng dõi tế bào** tinh vi sẽ tái dựng các con đường biệt hóa liên tục từ các bức ảnh chụp tế bào tĩnh. Việc xác thực hệ protein dưới cấp tế bào có thể đạt được bằng **kỹ thuật chụp ảnh chùm ion đa kênh**, dùng nguồn ion tập trung để bắn bật các nhãn liên hợp kim loại nhằm tạo ra hàng chục kênh protein đồng thời. Các phương pháp kết hợp này đã định hình lại hoàn toàn hiểu biết của chúng ta về **tính không đồng nhất về mặt phiên mã của tế bào**, chứng minh rằng ngay cả các tế bào giống hệt nhau về hình thái cũng thể hiện những phương sai biểu hiện đáng kinh ngạc. Bằng cách tính toán động học của các bản phiên mã chưa cắt nối và đã cắt nối, các thuật toán tạo ra một **vector vận tốc RNA** mang tính dự báo cho từng tế bào, tiết lộ hướng phát triển sắp tới của nó. Do đó, các tế bào được lập bản đồ dọc theo một **thể liên tục thời gian giả định phiên mã** nhân tạo, phản ánh độ trưởng thành tương đối của chúng qua các dòng thác biệt hóa. Bằng cách kết hợp các phép đo phiên mã với các xét nghiệm biểu sinh, **phân tích biên dạng đa phương thức đơn tế bào** ghi lại đồng thời nhiều tầng điều hòa bên trong cùng một màng bao. Bổ sung cho các phương pháp chùm ion, **phép đo tế bào khối phổ hình ảnh** tận dụng sự cắt bỏ bằng laser kết hợp với khối phổ thời gian bay để định lượng các vi môi trường mô đậm đặc. Cuối cùng, để ngăn chặn RNA tự do không có tế bào làm sai lệch các dấu ấn phân cụm, các nhà tin sinh học phải thực hiện **khử nhiễm RNA tự do ngoại bào** nghiêm ngặt trong quá trình kiểm soát chất lượng dữ liệu ban đầu.

---

## Review in context (Part 2: Spatial Proteomics, Cytoarchitecture, and Lineage Commitment)

Decoding intact tissue architecture requires bridging microscopic coordinates with molecular identity. When analyzing spatial transcriptomic data collected from multi-cell spots, researchers utilize **spatial cellular deconvolution** to resolve the mixed signal into clear proportions of individual cell types. This analytical leap allows meticulous **spatial cytoarchitecture mapping**, charting how distinct laminar layers and functional compartments assemble within complex organs. Underpinning expression variance across individual cells are the physical mechanisms of **transcriptional burst kinetics**, where promoters switch stochastically between bursts of RNA synthesis and periods of transcriptional quiescence. In droplet sequencing experiments, computational tools must guarantee accurate **cellular doublet discrimination** to prevent two fused cells from masquerading as a novel intermediate lineage. In solid tissues, discovering organizational principles depends upon assessing **spatial neighborhood enrichment**, identifying cell pairs that physically cluster together far more often than chance would allow. High-parameter spatial assays frequently rely upon **oligo-conjugated antibodies**, converting antibody-antigen binding into digitizable nucleotide barcodes that can be sequenced in parallel. During unsupervised data analysis, high-dimensional points are projected onto a **high-dimensional clustering manifold**, capturing continuous geometries of cellular states. Moving beyond mRNA expression alone, targeted **single-cell proteomic profiling** quantifies functional signaling cascades, revealing discrepancies between transcription and translation. Modern spatial platforms continue pushing the limits of **spatial transcriptomic resolution**, progressing from multi-cell regions down to subcellular localization of transcripts. When combining experiments from multiple cohorts, researchers apply **transcriptomic batch harmonization** algorithms to eradicate experimental batch biases without stripping away true biological signals. This analytical rigor is vital because profound **cellular phenotypic plasticity** permits tumor cells to reversibly transition across states under microenvironmental stress. Overcoming technical dropouts further necessitates sensitive **low-abundance transcript quantification**, capturing vital master transcription factors present at trace copy numbers. Ultimately, mapping these continuous molecular landscapes illuminates how multipotent progenitors make critical fate decisions during **developmental lineage branching**.

**Bản dịch tiếng Việt:**

Việc giải mã kiến trúc mô nguyên vẹn đòi hỏi phải bắc cầu nối giữa các tọa độ hiển vi với bản sắc phân tử. Khi phân tích dữ liệu hệ phiên mã không gian thu thập từ các điểm bắt giữ chứa nhiều tế bào, các nhà nghiên cứu sử dụng **phép giải chập tế bào theo không gian** để giải quyết tín hiệu hỗn hợp thành các tỷ lệ rõ ràng của từng loại tế bào đơn lẻ. Bước nhảy vọt phân tích này cho phép **lập bản đồ kiến trúc tế bào học không gian** tỉ mỉ, phác họa cách các lớp phân tầng riêng biệt và các ngăn chức năng lắp ráp bên trong các cơ quan phức tạp. Làm nền tảng cho sự biến thiên biểu hiện giữa các tế bào đơn lẻ là các cơ chế vật lý của **động học của các đợt bùng phát phiên mã**, nơi các promoter chuyển đổi ngẫu nhiên giữa các đợt bùng phát tổng hợp RNA và các giai đoạn yên nghỉ phiên mã. Trong các thí nghiệm giải trình tự giọt vi lưu, các công cụ tính toán phải bảo đảm **phân biệt cặp tế bào dính đôi** chính xác để ngăn chặn hai tế bào dính nhau đội lốt một dòng dõi trung gian mới. Trong các mô đặc, việc khám phá các nguyên lý tổ chức phụ thuộc vào việc đánh giá **sự làm giàu vùng lân cận không gian**, xác định các cặp tế bào tụ tập vật lý cùng nhau thường xuyên hơn nhiều so với phân bố ngẫu nhiên. Các xét nghiệm không gian thông số cao thường dựa vào **các kháng thể liên hợp với chuỗi oligo**, biến đổi liên kết kháng thể - kháng nguyên thành các mã vạch nucleotide có thể số hóa để giải trình tự song song. Trong quá trình phân tích dữ liệu không giám sát, các điểm dữ liệu nhiều chiều được chiếu lên một **đa tạp phân cụm nhiều chiều**, nắm bắt các cấu trúc hình học liên tục của các trạng thái tế bào. Vượt ra ngoài việc chỉ đo biểu hiện mRNA, **phân tích biên dạng protein đơn tế bào** trúng đích định lượng các dòng thác tín hiệu chức năng, hé lộ sự bất tương xứng giữa phiên mã và dịch mã. Các nền tảng không gian hiện đại tiếp tục đẩy lùi các giới hạn của **độ phân giải không gian của hệ phiên mã**, tiến triển từ các vùng đa tế bào xuống đến sự định vị dưới cấp tế bào của các bản phiên mã. Khi kết hợp các thí nghiệm từ nhiều đoàn hệ nghiên cứu, các nhà nghiên cứu áp dụng các thuật toán **sự hài hòa hóa lô dữ liệu phiên mã** nhằm triệt tiêu các sai lệch lô kỹ thuật mà không tước đoạt các tín hiệu sinh học chân thực. Sự chặt chẽ trong phân tích này là tối quan trọng vì **tính mềm dẻo kiểu hình của tế bào** sâu sắc cho phép các tế bào khối u chuyển đổi thuận nghịch qua các trạng thái dưới áp lực vi môi trường. Việc khắc phục hiện tượng mất dữ liệu kỹ thuật còn đòi hỏi **định lượng bản phiên mã có độ phong phú thấp** có độ nhạy cao, bắt giữ các yếu tố phiên mã chủ chốt sống còn hiện diện ở số lượng bản sao cực thấp. Cuối cùng, việc lập bản đồ các cảnh quan phân tử liên tục này làm sáng tỏ cách các tế bào tiền thân đa năng đưa ra các quyết định số phận then chốt trong quá trình **sự phân nhánh dòng dõi phát triển**.
