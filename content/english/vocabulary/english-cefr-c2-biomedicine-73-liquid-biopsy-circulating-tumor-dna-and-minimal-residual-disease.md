# C2 Vocabulary 73 — Circulating tumor DNA (ctDNA) dynamics, ultra-deep error-corrected sequencing, and minimal residual disease tracking

Trong kỷ nguyên ung thư học chính xác (*precision oncology*), việc phát hiện và theo dõi bệnh tồn lưu tối thiểu (*minimal residual disease - MRD*) thông qua phân tích ADN khối u lưu hành (*circulating tumor DNA - ctDNA*) trong huyết tương đã tạo nên một cuộc cách mạng lâm sàng sâu sắc. Khác với các phương pháp chẩn đoán hình ảnh truyền thống vốn chỉ phát hiện được các tổn thương vĩ mô khi khối u đã tái phát kích thước lớn, công nghệ sinh thiết lỏng siêu nhạy cho phép nhận diện các dấu vết phân tử ở nồng độ cực thấp (tần số alen biến dị < 0.01%). Để vượt qua các giới hạn nhiễu kỹ thuật của máy giải trình tự và hiện tượng tạo máu dòng vô căn (*clonal hematopoiesis of indeterminate potential - CHIP*), các nhà nghiên cứu đã kết hợp giải trình tự sợi kép (*duplex sequencing*), gắn mã định danh phân tử duy nhất (*UMI barcoding*), giải mã hình thái phân mảnh (*fragmentomics*), và mô hình hóa dược động học đào thải ADN khối u. Hệ thống này mở ra kỷ nguyên can thiệp chặn đầu phân tử (*molecular disease interception*), giúp cá thể hóa hoàn toàn các liệu pháp bổ trợ hậu phẫu.

Flow của bài học: **duplex sequencing** → **unique molecular identifier barcoding** → **CHIP deconvolution** → **variant allele frequency threshold** → **molecular relapse surveillance** → **ctDNA shedding kinetics** → **tumor-informed assay** → **tumor-agnostic liquid profiling** → **fragmentomic nucleosome footprinting** → **hybrid capture enrichment** → **digital droplet PCR partition** → **background technical noise suppression** → **molecular disease interception** → **ctDNA half-life clearance** → **paired white blood cell sequencing** → **multimodal liquid profiling** → **lead-time advantage** → **limit of blank validation** → **subclonal phylogenetic tracking** → **ctDNA persistence** → **non-shedding tumor phenotype** → **target capture efficiency** → **circulating tumor fraction estimation** → **molecular minimal residual state** → **ctDNA-guided adjuvant escalation**.

---

## 1. duplex sequencing /ˈduːplɛks ˈsiːkwənsɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ kỹ thuật giải trình tự cực kỳ chính xác hoặc làm tân ngữ sau `perform`, `develop`, `implement`.

**Core meaning — English:** An ultra-deep next-generation sequencing method that independently tags and sequences both complementary strands of individual double-stranded DNA molecules, computationally filtering out PCR amplification errors and base-calling artifacts to achieve error rates below one in ten million bases.

**Core meaning & mental image — Tiếng Việt:** Kỹ thuật giải trình tự sợi kép / giải trình tự đối chiếu hai sợi ADN; hãy hình dung việc đối chiếu hai bản sao độc lập của một văn bản cổ xưa: chỉ khi một ký tự xuất hiện giống hệt nhau trên cả hai bản sao (hai sợi bổ sung) thì các nhà sử học mới công nhận đó là nguyên bản, loại bỏ hoàn toàn mọi vết ố mực ngẫu nhiên do người chép kinh tạo ra.

**Grammar & collocations:** `employ duplex sequencing` — áp dụng kỹ thuật giải trình tự sợi kép; `accuracy of duplex sequencing` — độ chính xác của giải trình tự sợi kép; `duplex sequencing methodology` — phương pháp luận giải trình tự sợi kép.

**Register & nuance:** `molecular oncology & genomic technology` — do Michael Schmitt và Jesse Salk phát minh; vượt trội hơn nhiều so với giải trình tự thế hệ mới thông thường (*standard NGS*) vốn có tỷ lệ sai sót khoảng 0.1% đến 1%, biến nó thành tiêu chuẩn vàng để phát hiện đột biến cực hiếm.

**Examples:** `By utilizing duplex sequencing, the laboratory detected an oncogenic KRAS mutation at a variant allele frequency of 0.005 percent without false-positive background noise.` → Bằng cách sử dụng giải trình tự sợi kép, phòng xét nghiệm đã phát hiện đột biến sinh ung KRAS ở tần số alen biến dị 0.005% mà không gặp phải nhiễu nền dương tính giả.

**Liên kết tiếng Hàn:** `이중 가닥 염기서열 분석 / 듀플렉스 시퀀싱` (二重 가닥 鹽基序列 分析) — phân tích trình tự sợi đôi / giải trình tự duplex.

---

## 2. unique molecular identifier barcoding /juːˈniːk məˈlɛkjələr aɪˈdɛntəfaɪər ˈbɑːrkoʊdɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ bước chuẩn bị thư viện phân tử hoặc tân ngữ sau `incorporate`, `utilize`, `ligate`.

**Core meaning — English:** The biochemical process of ligating short, randomized, degenerate DNA oligonucleotide tags (UMIs) to individual native cell-free DNA fragments prior to PCR amplification, enabling bioinformatic deduplication and tracking of single progenitor molecules.

**Core meaning & mental image — Tiếng Việt:** Gắn mã vạch định danh phân tử duy nhất; hãy hình dung việc dán một con tem mã vạch có số sê-ri độc nhất vô nhị lên từng bức thư trước khi đưa vào máy photocopy: dù chiếc máy có sao chép bức thư đó ra hàng nghìn bản và làm lem mực ở một vài bản in, người đọc vẫn biết tất cả chúng bắt nguồn từ đúng một bức thư gốc ban đầu.

**Grammar & collocations:** `implement unique molecular identifier barcoding` — thực hiện gắn mã định danh phân tử duy nhất; `principles of unique molecular identifier barcoding` — các nguyên lý gắn mã định danh phân tử duy nhất; `efficiency of unique molecular identifier barcoding` — hiệu suất gắn mã vạch phân tử duy nhất.

**Register & nuance:** `molecular biology & bioinformatics` — thường viết tắt là *UMI barcoding*; bước kỹ thuật bắt buộc để phân biệt giữa đột biến sinh học thực sự và đột biến nhân tạo sinh ra trong quá trình khuếch đại enzyme PCR.

**Examples:** `Unique molecular identifier barcoding allows researchers to collapse PCR duplicate reads into a single consensus sequence, eliminating amplification-induced point errors.` → Việc gắn mã định danh phân tử duy nhất cho phép các nhà nghiên cứu gom các đoạn đọc trùng lặp do PCR thành một trình tự đồng thuận duy nhất, loại bỏ các lỗi điểm do khuếch đại gây ra.

**Liên kết tiếng Hàn:** `고유 분자 식별자 바코딩` (固有 分子 識別子 Barcoding) — gắn mã vạch định danh phân tử duy nhất.

---

## 3. CHIP deconvolution /tʃɪp ˌdiːkɑːnvəˈluːʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ quy trình phân tách tin sinh học hoặc tân ngữ sau `perform`, `require`, `validate`.

**Core meaning — English:** The computational and experimental differentiation of somatic mutations originating from clonal hematopoiesis of indeterminate potential (CHIP)—benign white blood cell clones—from true malignant mutations released by solid tumors into plasma cfDNA.

**Core meaning & mental image — Tiếng Việt:** Sự phân tách dòng tạo máu vô căn / sự tách giải đột biến CHIP; hãy hình dung việc lọc các tạp âm của tiếng mưa rơi trên mái tôn (đột biến từ bạch cầu lão hóa vô hại) ra khỏi tín hiệu morse yếu ớt của người bị nạn dưới tầng hầm (ADN của khối u ác tính) để tránh phát báo động nhầm.

**Grammar & collocations:** `require CHIP deconvolution` — đòi hỏi việc phân tách đột biến tạo máu vô căn; `accurate CHIP deconvolution` — sự phân tách dòng tạo máu vô căn chuẩn xác; `CHIP deconvolution algorithm` — thuật toán phân tách đột biến CHIP.

**Register & nuance:** `clinical liquid biopsy diagnostics` — CHIP xuất hiện phổ biến ở người cao tuổi (đặc biệt trong các gen *DNMT3A*, *TET2*, *ASXL1*); nếu không giải mã tách biệt, bác sĩ sẽ chẩn đoán nhầm bệnh nhân tái phát ung thư.

**Examples:** `Routine liquid biopsies require rigorous CHIP deconvolution to prevent non-malignant hematopoietic mutations from being misinterpreted as disease recurrence.` → Các xét nghiệm sinh thiết lỏng thường quy đòi hỏi sự phân tách đột biến tạo máu vô căn nghiêm ngặt để ngăn các đột biến tạo máu không ác tính bị diễn giải sai thành sự tái phát bệnh.

**Liên kết tiếng Hàn:** `잠재적 조혈모세포 클론 변이 분리 분석` (潛在的 造血母細胞 Clone 變異 分離 分析) — phân tách và phân tích các biến thể dòng tạo máu tiềm ẩn.

---

## 4. variant allele frequency threshold /ˈvɛriənt əˈliːl ˈfriːkwənsi ˈθrɛʃhoʊld/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tiêu chuẩn phân định hoặc tân ngữ sau `establish`, `surpass`, `calibrate`.

**Core meaning — English:** The minimum bioinformatic and analytical cut-off percentage of mutated DNA fragments relative to wild-type fragments required for a liquid biopsy assay to definitively call a somatic mutation as present.

**Core meaning & mental image — Tiếng Việt:** Ngưỡng tần số alen biến dị; hãy hình dung một vạch mức tối thiểu trên một ống đo độ đục của nước: nếu số lượng hạt tạp chất vượt qua vạch mức được hiệu chuẩn này, mẫu nước mới bị tuyên bố là nhiễm bẩn; nếu ở dưới vạch, nó được coi là nước tinh khiết đạt chuẩn an toàn.

**Grammar & collocations:** `establish a variant allele frequency threshold` — thiết lập ngưỡng tần số alen biến dị; `fall below the variant allele frequency threshold` — rơi xuống dưới ngưỡng tần số alen biến dị; `sensitivity at the variant allele frequency threshold` — độ nhạy tại ngưỡng tần số alen biến dị.

**Register & nuance:** `quantitative genomics & clinical chemistry` — thường viết tắt là *VAF threshold*; trong giám sát MRD, ngưỡng này thường dao động từ $0.01\%$ đến $0.001\%$, đòi hỏi sự cân bằng tuyệt đối giữa độ nhạy (*sensitivity*) và độ đặc hiệu (*specificity*).

**Examples:** `Setting an overly permissive variant allele frequency threshold risks reporting false positives, while an overly stringent cutoff leads to missed micrometastases.` → Việc thiết lập một ngưỡng tần số alen biến dị quá lỏng lẻo có nguy cơ báo cáo dương tính giả, trong khi một ngưỡng quá nghiêm ngặt lại dẫn đến việc bỏ sót các vi di căn.

**Liên kết tiếng Hàn:** `변이 대립유전자 빈도 한계값` (變異 對立遺傳子 頻度 限界値) — ngưỡng tần số alen biến dị.

---

## 5. molecular relapse surveillance /məˈlɛkjələr rɪˈlæps sərˈveɪləns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ chiến lược theo dõi bệnh nhân hoặc tân ngữ sau `initiate`, `undergo`, `optimize`.

**Core meaning — English:** Longitudinal clinical monitoring using serial liquid biopsy assays to detect the recurrence of cancer at the submicroscopic genomic level prior to any detectable manifestation on CT, MRI, or PET scans.

**Core meaning & mental image — Tiếng Việt:** Sự giám sát tái phát ở mức độ phân tử; hãy hình dung một trạm radar cảnh giới tầm siêu xa phát hiện các rung động sóng âm của tàu ngầm địch ngay khi nó vừa khởi động động cơ ở đáy biển sâu, nhiều tháng trước khi chiếc tàu nổi lên mặt nước và lộ diện trước kính thiên văn.

**Grammar & collocations:** `initiate molecular relapse surveillance` — khởi động sự giám sát tái phát ở mức độ phân tử; `longitudinal molecular relapse surveillance` — giám sát tái phát phân tử theo chiều dọc thời gian; `protocols for molecular relapse surveillance` — các quy trình giám sát tái phát phân tử.

**Register & nuance:** `translational oncology` — thay thế dần phương thức theo dõi thụ động truyền thống bằng chẩn đoán hình ảnh định kỳ (*radiological follow-up*); cho phép điều trị đón đầu khi tải lượng khối u còn cực nhỏ.

**Examples:** `Patients enrolled in molecular relapse surveillance underwent plasma testing every three months, catching circulating markers long before radiological progression.` → Các bệnh nhân tham gia vào chương trình giám sát tái phát ở mức độ phân tử đã trải qua xét nghiệm huyết tương ba tháng một lần, bắt được các dấu ấn lưu hành rất lâu trước khi có tiến triển trên chẩn đoán hình ảnh.

**Liên kết tiếng Hàn:** `분자적 재발 감시` (分子적 再發 監視) — sự giám sát tái phát ở cấp độ phân tử.

---

## 6. ctDNA shedding kinetics /ˌsiːtiːˌdiːɛnˈeɪ ˈʃɛdɪŋ kɪˈnɛtɪks/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ đặc tính sinh học hoặc tân ngữ sau `model`, `quantify`, `correlate with`.

**Core meaning — English:** The quantitative rate, volume, and physiological dynamics governing the release of necrotic, apoptotic, or active circulating tumor DNA into the vascular compartment by a specific tumor mass over time.

**Core meaning & mental image — Tiếng Việt:** Động học phóng thích ADN khối u lưu hành; hãy hình dung một ống khói nhà máy đang xả khói bụi vào bầu khí quyển: tốc độ khói tỏa ra nhiều hay ít phụ thuộc vào công suất đốt của lò than, độ thông gió và kích thước của cửa xả, quyết định nồng độ bồ hóng đo được trong không khí xung quanh.

**Grammar & collocations:** `characterize ctDNA shedding kinetics` — mô tả đặc tính động học phóng thích ctDNA; `variability in ctDNA shedding kinetics` — sự biến thiên trong động học phóng thích ctDNA; `correlate with ctDNA shedding kinetics` — tương quan với động học phóng thích ctDNA.

**Register & nuance:** `tumor biology & pharmacokinetics` — khác biệt sâu sắc giữa các loại ung thư; ví dụ ung thư biểu mô phổi hoặc đại trực tràng phóng thích (*shed*) lượng lớn ADN vào máu, trong khi u thần kinh đệm hoặc ung thư tuyến giáp phóng thích rất ít do rào cản mạch máu.

**Examples:** `Understanding tumor-specific ctDNA shedding kinetics is crucial because slow-shedding neoplasms can produce false-negative plasma readings despite residual disease.` → Việc hiểu rõ động học phóng thích ctDNA đặc hiệu của khối u là tối quan trọng vì các khối tân sinh phóng thích chậm có thể tạo ra kết quả huyết tương âm tính giả mặc dù vẫn còn bệnh tồn lưu.

**Liên kết tiếng Hàn:** `순환 종양 DNA 방출 동역학` (循環 腫瘍 DNA 放出 動力學) — động học phóng thích ctDNA.

---

## 7. tumor-informed assay /ˈtuːmər ɪnˈfɔːrmd ˈæseɪ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm công cụ xét nghiệm hoặc tân ngữ sau `design`, `utilize`, `validate`.

**Core meaning — English:** A personalized liquid biopsy assay designed by first performing whole-exome or targeted sequencing on a patient's surgically resected primary tumor tissue to identify bespoke patient-specific clonal mutations for plasma tracking.

**Core meaning & mental image — Tiếng Việt:** Xét nghiệm định hướng theo khối u / xét nghiệm cá thể hóa dựa trên mô u; hãy hình dung việc cảnh sát lấy dấu vân tay từ một tên tội phạm đã bị bắt, sau đó nhập đúng bộ 16 dấu vân tay đặc thù đó vào mạng lưới máy quét công cộng để truy tìm dấu vết lẩn trốn của hắn khắp đất nước.

**Grammar & collocations:** `deploy a tumor-informed assay` — triển khai xét nghiệm định hướng theo khối u; `sensitivity of a tumor-informed assay` — độ nhạy của xét nghiệm định hướng khối u; `tumor-informed assay design` — thiết kế xét nghiệm dựa trên mô u cá thể hóa.

**Register & nuance:** `clinical molecular diagnostics` — đối lập với *tumor-agnostic assay*; phương pháp này có độ nhạy siêu việt nhất (phát hiện được VAF $< 0.001\%$) nhưng đòi hỏi phải có mẫu mô u nguyên phát từ cuộc phẫu thuật ban đầu.

**Examples:** `The oncologist opted for a tumor-informed assay, synthesizing customized PCR primers that targeted the patient's sixteen primary clonal mutations in plasma.` → Bác sĩ ung thư đã chọn một xét nghiệm định hướng theo khối u, tổng hợp các đoạn mồi PCR tùy chỉnh nhắm trúng mười sáu đột biến dòng nguyên phát của bệnh nhân trong huyết tương.

**Liên kết tiếng Hàn:** `종양 맞춤형 검사 / 조직 정보 기반 분석` (腫瘍 맞춤型 檢査) — xét nghiệm tùy chỉnh theo thông tin khối u nguyên phát.

---

## 8. tumor-agnostic liquid profiling /ˈtuːmər æɡˈnɑːstɪk ˈlɪkwɪd ˈproʊfaɪlɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm phương pháp xét nghiệm độc lập hoặc tân ngữ sau `perform`, `favor`, `standardize`.

**Core meaning — English:** A broad-panel liquid biopsy testing strategy that interrogates circulating cell-free DNA for canonical recurrent oncogenic mutations, fusions, and copy-number alterations without requiring prior genomic sequencing of primary tumor tissue.

**Core meaning & mental image — Tiếng Việt:** Phân tích hồ sơ sinh thiết lỏng độc lập với mô u; hãy hình dung một chiếc lưới đánh cá lớn với kích thước mắt lưới được đan sẵn để bắt tất cả các loài cá săn mồi phổ biến nhất trên biển: bạn chỉ cần thả lưới xuống nước là có thể bắt được cá mà không cần biết trước con cá nào đã bơi qua khu vực này trước đó.

**Grammar & collocations:** `conduct tumor-agnostic liquid profiling` — tiến hành phân tích hồ sơ sinh thiết lỏng độc lập với mô u; `advantages of tumor-agnostic liquid profiling` — ưu điểm của việc lập hồ sơ lỏng không cần mô u; `standardized tumor-agnostic liquid profiling` — phân tích hồ sơ lỏng độc lập mô u chuẩn hóa.

**Register & nuance:** `genomic medicine` — cực kỳ hữu ích khi không thể sinh thiết mô (mẫu mô quá ít hoặc khối u ở vị trí nguy hiểm) hoặc khi cần kết quả nhanh chóng trước khi phẫu thuật; tuy nhiên độ nhạy tuyệt đối cho MRD có thể thấp hơn xét nghiệm tumor-informed.

**Examples:** `When surgical biopsy tissue was unavailable, clinicians relied on tumor-agnostic liquid profiling to screen for hotspot driver alterations in circulating DNA.` → Khi không có sẵn mô sinh thiết phẫu thuật, các bác sĩ lâm sàng đã dựa vào phân tích hồ sơ sinh thiết lỏng độc lập với mô u để sàng lọc các biến đổi đột biến sinh ung điểm nóng trong ADN lưu hành.

**Liên kết tiếng Hàn:** `종양 비특이적 액체 생검 프로파일링` (腫瘍 非特異的 液體 生檢 Profiling) — lập hồ sơ sinh thiết lỏng không phụ thuộc mô u nguyên phát.

---

## 9. fragmentomic nucleosome footprinting /ˌfræɡmɛnˈtoʊmɪk ˈnuːkliəsoʊm ˈfʊtprɪntɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ kỹ thuật phân tích cấu trúc nhiễm sắc thể hoặc tân ngữ sau `apply`, `resolve`, `leverage`.

**Core meaning — English:** The bioinformatic analysis of non-random plasma cfDNA fragmentation patterns and cleavage end-motifs to infer nucleosome positioning, chromatin accessibility, and tissue-of-origin gene expression profiles without relying solely on genetic point mutations.

**Core meaning & mental image — Tiếng Việt:** Dấu vết nucleosome qua hình thái phân mảnh; hãy hình dung những viên ngọc trai được xâu trên một chuỗi hạt: khi chiếc kéo cắt vụn chuỗi hạt đó, kéo chỉ cắt được ở những đoạn dây nối lộ ra giữa các viên ngọc, để lại các đoạn dây có độ dài đặc trưng phản ánh chính xác vị trí và khoảng cách giữa từng viên ngọc trai ban đầu.

**Grammar & collocations:** `apply fragmentomic nucleosome footprinting` — áp dụng dấu vết nucleosome qua hình thái phân mảnh; `resolution of fragmentomic nucleosome footprinting` — độ phân giải của dấu vết nucleosome phân mảnh; `fragmentomic nucleosome footprinting analysis` — phân tích dấu vết nucleosome qua hình thái phân mảnh.

**Register & nuance:** `next-generation liquid epigenomics` — phát triển từ phòng thí nghiệm của Dennis Lo; mở rộng sinh thiết lỏng từ việc chỉ đọc "trình tự chữ cái" (đột biến gen) sang đọc "hình học vật lý" của sợi ADN bị phân cắt.

**Examples:** `Through fragmentomic nucleosome footprinting, the researchers identified the cell-of-origin as hepatic tissue based on chromatin accessibility footprints preserved in plasma.` → Thông qua dấu vết nucleosome qua hình thái phân mảnh, các nhà nghiên cứu đã xác định tế bào nguồn gốc là mô gan dựa trên các dấu vết tiếp cận chất nhiễm sắc được bảo tồn trong huyết tương.

**Liên kết tiếng Hàn:** `단편체 뉴클레오솜 풋프린팅` (斷片體 Nucleosome Footprinting) — kỹ thuật lập bản đồ dấu ấn nucleosome qua cấu trúc phân mảnh.

---

## 10. hybrid capture enrichment /ˈhaɪbrɪd ˈkæptʃər ɪnˈrɪtʃmənt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm bước kỹ thuật sinh học phân tử hoặc tân ngữ sau `perform`, `optimize`, `employ`.

**Core meaning — English:** A target-enrichment technique where synthesized biotinylated oligonucleotide probes hybridize in solution to specific genomic regions of interest within a cfDNA library, allowing targeted magnetic bead pull-down and high-depth sequencing.

**Core meaning & mental image — Tiếng Việt:** Làm giàu mục tiêu bằng lai ghép bắt giữ; hãy hình dung việc thả hàng triệu chiếc móc câu từ tính nhỏ xíu có gắn mồi nhử chuyên biệt vào một bể nước khổng lồ: các lưỡi câu sẽ chỉ dính chặt vào đúng loài cá quý hiếm mà bạn muốn bắt, giúp bạn kéo chúng lên một cách trọn vẹn mà không vớt phải nước hay rác thải.

**Grammar & collocations:** `utilize hybrid capture enrichment` — sử dụng kỹ thuật làm giàu bằng lai ghép bắt giữ; `efficiency of hybrid capture enrichment` — hiệu suất của việc làm giàu mục tiêu bằng lai ghép; `hybrid capture enrichment protocol` — quy trình làm giàu bằng lai ghép bắt giữ.

**Register & nuance:** `genomic library preparation` — đối lập với *amplicon-based sequencing* (dựa trên mồi khuếch đại PCR đơn thuần); hybrid capture có khả năng bao phủ các đoạn gen lớn đồng đều hơn và phát hiện đột biến tái sắp xếp gen phức tạp hiệu quả hơn.

**Examples:** `The assay implemented hybrid capture enrichment to pull down two hundred cancer-associated genes from minute quantities of circulating cell-free DNA.` → Xét nghiệm đã thực hiện kỹ thuật làm giàu bằng lai ghép bắt giữ để kéo hai trăm gen liên quan đến ung thư từ một lượng cực nhỏ ADN tự do lưu hành.

**Liên kết tiếng Hàn:** `하이브리드 캡처 농축 / 포획 농축법` (Hybrid Capture 濃縮) — phương pháp làm giàu / tập trung đoạn gen đích bằng lai ghép.

---

## 11. digital droplet PCR partition /ˈdɪdʒətəl ˈdrɑːplət ˌpiːsiːˈɑːr pɑːrˈtɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ kỹ thuật chia tách vi giọt hoặc tân ngữ sau `subject to`, `generate`, `analyze`.

**Core meaning — English:** The physical microfluidic compartmentalization of a PCR reaction mixture into tens of thousands of nanoliter-sized water-in-oil droplets, enabling absolute quantification of target DNA molecules through Poisson statistical modeling.

**Core meaning & mental image — Tiếng Việt:** Phân vùng phản ứng vi giọt kỹ thuật số; hãy hình dung việc chia một đám đông mười vạn người vào hàng vạn căn phòng đơn lập siêu nhỏ: mỗi căn phòng chỉ chứa đúng một hoặc không có người nào, giúp chiếc camera quét từng phòng đếm chính xác số người có mặt mà không bao giờ bị đếm trùng hay nhầm lẫn.

**Grammar & collocations:** `leverage digital droplet PCR partition` — tận dụng phân vùng phản ứng vi giọt kỹ thuật số; `precision of digital droplet PCR partition` — độ chuẩn xác của phân vùng PCR vi giọt kỹ thuật số; `digital droplet PCR partition platform` — nền tảng phân vùng PCR vi giọt kỹ thuật số.

**Register & nuance:** `quantitative molecular biotechnology` — thường viết tắt là *ddPCR partition*; là giải pháp thay thế giải trình tự khi chỉ cần đo lường định lượng tuyệt đối một vài đột biến điểm đã biết trước với chi phí thấp và tốc độ nhanh.

**Examples:** `Using digital droplet PCR partition, investigators quantified single-copy mutant BRAF alleles in plasma with absolute linear precision.` → Sử dụng phân vùng phản ứng vi giọt kỹ thuật số, các nhà điều tra đã định lượng các alen BRAF đột biến đơn bản sao trong huyết tương với độ chính xác tuyến tính tuyệt đối.

**Liên kết tiếng Hàn:** `디지털 액적 PCR 구획화` (Digital 液滴 PCR 區劃化) — sự phân chia vi giọt / ngăn vách trong phản ứng ddPCR.

---

## 12. background technical noise suppression /ˈbækɡraʊnd ˈtɛknɪkəl nɔɪz səˈprɛʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm mục tiêu của thuật toán tin sinh học hoặc tân ngữ sau `achieve`, `enhance`, `require`.

**Core meaning — English:** Computational algorithms and biochemical optimizations designed to eliminate systematic false-positive base calls arising from DNA damage (such as cytosine deamination), PCR polymerase errors, and optical instrument artifacts.

**Core meaning & mental image — Tiếng Việt:** Sự triệt tiêu nhiễu kỹ thuật nền; hãy hình dung một cặp tai nghe chống ồn chủ động đỉnh cao: nó liên tục phát hiện các tần số sóng âm tạp nham từ động cơ máy bay và phát ra các sóng âm đối pha để xóa sổ hoàn toàn tiếng ồn, chỉ để lại âm thanh trong trẻo của bản nhạc giao hưởng.

**Grammar & collocations:** `achieve background technical noise suppression` — đạt được sự triệt tiêu nhiễu kỹ thuật nền; `algorithms for background technical noise suppression` — các thuật toán triệt tiêu nhiễu kỹ thuật nền; `robust background technical noise suppression` — sự triệt tiêu nhiễu nền kỹ thuật mạnh mẽ.

**Register & nuance:** `bioinformatics & assay chemistry` — điều kiện tiên quyết sống còn để đẩy giới hạn phát hiện (*limit of detection*) xuống dưới $0.01\%$; nếu không triệt nhiễu, các sai sót do hóa chất bảo quản mô sẽ bị nhầm là đột biến ung thư.

**Examples:** `Advanced computational filters enabled background technical noise suppression, driving the assay's false-positive rate down to near zero.` → Các bộ lọc tính toán tiên tiến đã cho phép triệt tiêu nhiễu kỹ thuật nền, đẩy tỷ lệ dương tính giả của xét nghiệm xuống gần mức bằng không.

**Liên kết tiếng Hàn:** `배경 기술적 노이즈 억제` (背景 技術的 Noise 抑制) — sự triệt tiêu / ức chế nhiễu kỹ thuật nền.

---

## 13. molecular disease interception /məˈlɛkjələr rɪˈziːz ˌɪntərˈsɛpʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ chiến lược điều trị mới hoặc tân ngữ sau `pioneer`, `achieve`, `facilitate`.

**Core meaning — English:** The clinical intervention strategy of initiating targeted therapeutic or immunological treatments at the earliest phase of submicroscopic molecular relapse (ctDNA positivity) to eradicate residual cancer cells before overt metastasis occurs.

**Core meaning & mental image — Tiếng Việt:** Can thiệp chặn đầu bệnh lý phân tử; hãy hình dung một hệ thống phòng thủ tên lửa đánh chặn vòm sắt: ngay khi tên lửa của đối phương vừa rời bệ phóng ở khoảng cách xa, hệ thống đã phóng tên lửa đánh chặn phá hủy nó ngay giữa tầng bình lưu, không để nó kịp bay tới đe dọa các thành phố đông dân cư.

**Grammar & collocations:** `facilitate molecular disease interception` — tạo điều kiện cho việc can thiệp chặn đầu bệnh lý phân tử; `paradigm of molecular disease interception` — hệ hình can thiệp chặn đầu bệnh lý phân tử; `trial of molecular disease interception` — thử nghiệm can thiệp chặn đầu phân tử.

**Register & nuance:** `proactive clinical oncology` — bước tiến mang tính triết lý sâu sắc, dịch chuyển từ "điều trị bệnh ung thư tái phát" sang "chặn đứng quá trình tái phát ung thư" ngay từ giai đoạn mầm mống tế bào.

**Examples:** `Molecular disease interception with targeted kinase inhibitors successfully eliminated ctDNA clones before metastatic lesions could establish vascular niches.` → Việc can thiệp chặn đầu bệnh lý phân tử bằng các thuốc ức chế kinase đích đã loại bỏ thành công các dòng ctDNA trước khi các tổn thương di căn có thể thiết lập các ổ vi mạch máu.

**Liên kết tiếng Hàn:** `분자적 질환 차단 / 조기 요격 치료` (分子적 疾患 遮斷) — sự can thiệp / chặn đầu bệnh tật ở cấp độ phân tử.

---

## 14. ctDNA half-life clearance /ˌsiːtiːˌdiːɛnˈeɪ hæf laɪf ˈklɪrəns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ sinh lý học hoặc tân ngữ sau `measure`, `monitor`, `exhibit`.

**Core meaning — English:** The biological rate of enzymatic degradation and renal/hepatic clearance of circulating tumor DNA fragments from the bloodstream, typically exhibiting a rapid half-life ranging between thirty minutes and two hours.

**Core meaning & mental image — Tiếng Việt:** Tốc độ thanh thải bán hủy ctDNA; hãy hình dung một chiếc đồng hồ cát chảy cực nhanh: chỉ trong vòng chưa đầy hai giờ, toàn bộ lớp cát trên bình đã trút xuống đáy, biến huyết tương thành một tấm gương phản chiếu tức thì tình trạng giải phóng tế bào chết ngay trong ngày mà không bị tồn đọng tàn dư từ tuần trước.

**Grammar & collocations:** `rapid ctDNA half-life clearance` — sự thanh thải bán hủy ctDNA nhanh chóng; `quantify ctDNA half-life clearance` — định lượng sự đào thải bán hủy ctDNA; `dynamics of ctDNA half-life clearance` — động thái của sự thanh thải bán hủy ctDNA.

**Register & nuance:** `biochemical pharmacodynamics` — ưu điểm vượt trội của ctDNA so với các dấu ấn protein truyền thống như CEA hay CA-125 (vốn có thời gian bán hủy kéo dài nhiều tuần); cho phép bác sĩ đánh giá hiệu quả phẫu thuật gần như theo thời gian thực.

**Examples:** `Because of rapid ctDNA half-life clearance, circulating mutant fragments vanished from the patient's bloodstream within twelve hours of complete surgical resection.` → Nhờ tốc độ thanh thải bán hủy ctDNA nhanh chóng, các đoạn đột biến lưu hành đã biến mất khỏi máu của bệnh nhân trong vòng mười hai giờ sau khi cắt bỏ hoàn toàn khối u bằng phẫu thuật.

**Liên kết tiếng Hàn:** `순환 종양 DNA 반감기 청소율` (循環 腫瘍 DNA 半減期 淸掃率) — tốc độ thanh thải / độ bán hủy của ctDNA.

---

## 15. paired white blood cell sequencing /pɛrd waɪt blʌd sɛl ˈsiːkwənsɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm phương pháp đối chứng hoặc tân ngữ sau `mandate`, `conduct`, `integrate`.

**Core meaning — English:** The simultaneous genomic sequencing of peripheral blood mononuclear cells (PBMCs) alongside plasma cell-free DNA to identify and subtract benign non-tumor mutations originating from clonal hematopoiesis.

**Core meaning & mental image — Tiếng Việt:** Giải trình tự đối sánh tế bào bạch cầu ghép cặp; hãy hình dung việc chụp ảnh hai căn phòng giống nhau: một phòng có chứa cả người nhà và kẻ đột nhập, phòng còn lại chỉ có người nhà: bằng cách đặt hai bức ảnh cạnh nhau và xóa đi tất cả những gương mặt người nhà, bạn sẽ lập tức nhận diện được chân dung kẻ lạ mặt nguy hiểm.

**Grammar & collocations:** `conduct paired white blood cell sequencing` — tiến hành giải trình tự đối sánh tế bào bạch cầu ghép cặp; `mandate paired white blood cell sequencing` — bắt buộc giải trình tự đối sánh tế bào bạch cầu ghép cặp; `rely on paired white blood cell sequencing` — dựa vào giải trình tự đối sánh bạch cầu.

**Register & nuance:** `clinical trial protocols & companion diagnostics` — phương pháp đối chứng nội tại tốt nhất hiện nay để ngăn chặn các kết quả dương tính giả nguy hiểm xuất phát từ hiện tượng CHIP.

**Examples:** `The protocol mandated paired white blood cell sequencing to filter out age-related hematopoietic clonal variants before interpreting the liquid biopsy profile.` → Đề cương đã bắt buộc tiến hành giải trình tự đối sánh tế bào bạch cầu ghép cặp để lọc bỏ các biến thể dòng tạo máu liên quan đến tuổi tác trước khi diễn giải hồ sơ sinh thiết lỏng.

**Liên kết tiếng Hàn:** `백혈구 대조 염기서열 분석` (白血球 對照 鹽基序列 分析) — phân tích trình tự đối chứng tế bào bạch cầu ghép cặp.

---

## 16. multimodal liquid profiling /ˌmʌltiˈmoʊdəl ˈlɪkwɪd ˈproʊfaɪlɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm phương pháp chẩn đoán toàn diện hoặc tân ngữ sau `deploy`, `synthesize`, `leverage`.

**Core meaning — English:** An integrative diagnostic approach that combines somatic genomic mutations, fragment length distributions, DNA methylation profiles, and protein biomarkers from a single blood draw to maximize diagnostic sensitivity and specificity.

**Core meaning & mental image — Tiếng Việt:** Phân tích hồ sơ lỏng đa phương thức / sinh thiết lỏng đa phương thức; hãy hình dung một hệ thống kiểm tra an ninh sân bay tích hợp đồng thời: vừa quét máy soi tia X kim loại, vừa dùng chó nghiệp vụ đánh hơi chất nổ, vừa nhận diện khuôn mặt kỹ thuật số: không một mối đe dọa nào có thể lọt qua khi nhiều giác quan cùng hoạt động đồng bộ.

**Grammar & collocations:** `deploy multimodal liquid profiling` — triển khai phân tích hồ sơ lỏng đa phương thức; `advantages of multimodal liquid profiling` — các ưu thế của phân tích hồ sơ lỏng đa phương thức; `multimodal liquid profiling platform` — nền tảng phân tích sinh thiết lỏng đa phương thức.

**Register & nuance:** `next-generation cancer interception` — hướng đi đột phá của các tập đoàn chẩn đoán lớn (như Grail Galleri hay Guardant); khắc phục điểm yếu của việc chỉ nhìn vào đột biến gen đơn lẻ khi nồng độ ctDNA quá thấp.

**Examples:** `By combining methylation patterns with somatic mutations, multimodal liquid profiling substantially increased early-stage cancer detection sensitivity.` → Bằng cách kết hợp các mô thức methyl hóa với các đột biến soma, phân tích hồ sơ lỏng đa phương thức đã tăng đáng kể độ nhạy phát hiện ung thư giai đoạn sớm.

**Liên kết tiếng Hàn:** `다중모달 액체 프로파일링` (多重Modal 液體 Profiling) — lập hồ sơ sinh thiết lỏng đa phương thức.

---

## 17. lead-time advantage /ˈliːd taɪm ædˈvæntɪdʒ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ đo lường hiệu quả lâm sàng hoặc tân ngữ sau `provide`, `demonstrate`, `confer`.

**Core meaning — English:** The clinical window of time gained by detecting disease recurrence through molecular biomarkers (such as ctDNA) weeks or months before the reappearance of macroscopic lesions on radiological imaging.

**Core meaning & mental image — Tiếng Việt:** Lợi thế khoảng thời gian đón đầu; hãy hình dung một chiếc đồng hồ cát báo trước trận sóng thần: nhờ chiếc đồng hồ này reo chuông báo động sớm bốn tháng trước khi những con sóng khổng lồ ập vào bờ, lực lượng cứu hộ có đủ thời gian gia cố đê điều và sơ tán toàn bộ người dân đến nơi an toàn.

**Grammar & collocations:** `confer a lead-time advantage` — mang lại lợi thế khoảng thời gian đón đầu; `median lead-time advantage` — lợi thế khoảng thời gian đón đầu trung vị; `leverage the lead-time advantage` — tận dụng lợi thế đón đầu thời gian.

**Register & nuance:** `clinical epidemiology & oncology trial design` — thường dao động từ 3 đến 9 tháng trong ung thư đại trực tràng, vú và phổi; là thước đo cốt lõi chứng minh tính hữu dụng lâm sàng (*clinical utility*) của sinh thiết lỏng.

**Examples:** `Monitoring plasma ctDNA provided a median lead-time advantage of eight months over standard computed tomography scans in predicting liver relapse.` → Việc theo dõi ctDNA trong huyết tương đã mang lại lợi thế khoảng thời gian đón đầu trung vị là tám tháng so với chụp cắt lớp vi tính tiêu chuẩn trong việc dự đoán tái phát ở gan.

**Liên kết tiếng Hàn:** `선행 시간 이점 / 조기 발견 시간차 이익` (先行 時間 利點) — lợi thế khoảng thời gian phát hiện sớm đón đầu.

---

## 18. limit of blank validation /ˈlɪmət əv blæŋk ˌvæləˈdeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm quy trình kiểm định chất lượng hoặc tân ngữ sau `perform`, `establish`, `require`.

**Core meaning — English:** The rigorous analytical validation process establishing the highest apparent analyte concentration expected to be found when replicates of a sample containing zero analyte (healthy donor plasma) are tested, defining baseline specificity.

**Core meaning & mental image — Tiếng Việt:** Thẩm định giới hạn mẫu trắng; hãy hình dung việc kiểm tra một chiếc cân tiểu ly điện tử khi đĩa cân hoàn toàn trống rỗng: các kỹ sư phải đo hàng trăm lần để xác định xem những dao động số học nhỏ nhất do gió hay nhiệt độ phòng là bao nhiêu, đảm bảo rằng chiếc cân không bao giờ tự nhảy số báo có trọng lượng khi chưa đặt vật gì lên.

**Grammar & collocations:** `perform limit of blank validation` — tiến hành thẩm định giới hạn mẫu trắng; `rigorous limit of blank validation` — thẩm định giới hạn mẫu trắng nghiêm ngặt; `establish via limit of blank validation` — thiết lập thông qua thẩm định giới hạn mẫu trắng.

**Register & nuance:** `clinical laboratory standardization (CLSI guidelines)` — phân biệt với *limit of detection* (LOD) và *limit of quantitation* (LOQ); là ngưỡng thấp nhất để đảm bảo kết quả dương tính không bao giờ là ảo giác ngẫu nhiên.

**Examples:** `Strict limit of blank validation was conducted across fifty healthy control plasma samples to ensure that no background false positives contaminated clinical runs.` → Việc thẩm định giới hạn mẫu trắng nghiêm ngặt đã được tiến hành trên năm mươi mẫu huyết tương đối chứng khỏe mạnh để đảm bảo rằng không có dương tính giả nào làm vấy bẩn các đợt chạy lâm sàng.

**Liên kết tiếng Hàn:** `공백 한계 검증` (空白 限界 檢證) — kiểm định / xác thực giới hạn mẫu trắng (Limit of Blank).

---

## 19. subclonal phylogenetic tracking /sʌbˈkloʊnəl ˌfaɪloʊdʒəˈnɛtɪk ˈtrækɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ phương pháp phân tích tiến hóa hoặc tân ngữ sau `conduct`, `map`, `reconstruct`.

**Core meaning — English:** The longitudinal genomic reconstruction of the evolutionary branches, expansions, and extinctions of distinct malignant subclonal populations within a patient during the course of systemic therapy via serial ctDNA sequencing.

**Core meaning & mental image — Tiếng Việt:** Sự theo dõi phả hệ phân nhánh dưới dòng; hãy hình dung việc vẽ cây phả hệ của một đàn linh cẩu trong tự nhiên qua nhiều thế hệ: bạn ghi lại từng nhánh gia đình mới sinh ra, nhánh nào thích nghi tốt hơn với môi trường khô hạn và nhánh nào bị tiêu diệt bởi dịch bệnh theo thời gian thực.

**Grammar & collocations:** `map subclonal phylogenetic tracking` — lập bản đồ theo dõi phả hệ phân nhánh dưới dòng; `insights from subclonal phylogenetic tracking` — những hiểu biết sâu sắc từ sự theo dõi phả hệ dưới dòng; `subclonal phylogenetic tracking framework` — khuôn khổ theo dõi phả hệ phân nhánh dưới dòng.

**Register & nuance:** `evolutionary cancer biology` — cho phép phát hiện sớm các dòng tế bào kháng thuốc (như đột biến kháng thuốc thụ thể EGFR T790M hay C797S) trước khi toàn bộ khối u bùng phát trở lại.

**Examples:** `Serial liquid profiling enabled subclonal phylogenetic tracking, exposing the rapid emergence of an ESR1-mutant clone during aromatase inhibitor therapy.` → Việc lập hồ sơ lỏng liên tiếp đã cho phép theo dõi phả hệ phân nhánh dưới dòng, vạch trần sự trỗi dậy nhanh chóng của một dòng đột biến ESR1 trong quá trình điều trị bằng thuốc ức chế aromatase.

**Liên kết tiếng Hàn:** `하위 클론 계통발생 추적` (下位 Clone 系統發生 追跡) — theo dõi phả hệ tiến hóa của các dòng tế bào con (subclone).

---

## 20. ctDNA persistence /ˌsiːtiːˌdiːɛnˈeɪ pərˈsɪstəns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chỉ dấu lâm sàng báo động hoặc tân ngữ sau `indicate`, `detect`, `correlate with`.

**Core meaning — English:** The continued presence of detectable tumor-derived DNA in plasma samples collected following definitive curative-intent therapy (e.g., surgery or chemoradiation), indicating uneradicated micrometastatic disease and a high risk of relapse.

**Core meaning & mental image — Tiếng Việt:** Sự tồn lưu ctDNA dai dẳng / sự trơ ỳ của ADN khối u lưu hành; hãy hình dung việc dập tắt một đám cháy rừng lớn: dù trên mặt đất cây cối đã ngừng bốc cháy và khói đen đã tan, nhưng chiếc máy quét nhiệt hồng ngoại vẫn liên tục phát hiện các tàn than hồng đang âm ỉ cháy sâu dưới lớp rễ cây trong lòng đất.

**Grammar & collocations:** `postoperative ctDNA persistence` — sự tồn lưu ctDNA dai dẳng sau phẫu thuật; `correlate with ctDNA persistence` — tương quan với sự tồn lưu ctDNA; `detect ctDNA persistence` — phát hiện sự tồn lưu ctDNA.

**Register & nuance:** `prognostic biomarker oncology` — dấu hiệu tiên lượng xấu mạnh mẽ nhất trong ung thư học hiện đại; bệnh nhân có ctDNA persistence hậu phẫu có nguy cơ tái phát cao gấp 10-20 lần so với bệnh nhân âm tính với ctDNA.

**Examples:** `Postoperative ctDNA persistence was strongly correlated with distant recurrence, identifying patients who failed to achieve surgical cure.` → Sự tồn lưu ctDNA dai dẳng sau phẫu thuật tương quan mạnh mẽ với sự tái phát xa, nhận diện những bệnh nhân đã thất bại trong việc đạt được sự chữa khỏi bằng phẫu thuật.

**Liên kết tiếng Hàn:** `순환 종양 DNA 잔존 지속성` (循環 腫瘍 DNA 殘存 持續性) — sự tồn lưu liên tục / dai dẳng của ctDNA.

---

## 21. non-shedding tumor phenotype /nɑːn ˈʃɛdɪŋ ˈtuːmər ˈfiːnoʊtaɪp/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ diễn giải trường hợp ngoại lệ hoặc tân ngữ sau `characterize`, `encounter`, `overcome`.

**Core meaning — English:** A biological subtype of neoplasm that releases negligible or undetectable amounts of cell-free DNA into the systemic circulation due to low vascularization, mucinous histology, dense stroma, or the blood-brain barrier.

**Core meaning & mental image — Tiếng Việt:** Kiểu hình khối u không phóng thích / khối u không giải phóng ADN; hãy hình dung một chiếc két sắt chống cháy được bọc kín bằng thép không gỉ chìm dưới đáy biển sâu: mọi vật dụng bên trong chiếc két đều được giữ kín hoàn toàn, không có một mảnh giấy vụn nào có thể lọt ra ngoài trôi nổi trên mặt nước biển để người ta tìm kiếm.

**Grammar & collocations:** `exhibit a non-shedding tumor phenotype` — thể hiện kiểu hình khối u không phóng thích; `challenge of non-shedding tumor phenotype` — thách thức từ kiểu hình khối u không giải phóng ADN; `identify a non-shedding tumor phenotype` — nhận diện một kiểu hình khối u không phóng thích.

**Register & nuance:** `limitations of liquid biopsy` — lời cảnh tỉnh quan trọng đối với các bác sĩ lâm sàng; kết quả ctDNA âm tính không đồng nghĩa 100% với việc không có khối u nếu khối u thuộc kiểu hình không phóng thích.

**Examples:** `Because primary brain glioblastomas frequently exhibit a non-shedding tumor phenotype, cerebrospinal fluid analysis is often required instead of plasma sampling.` → Bởi vì các u nguyên bào keo nguyên phát ở não thường biểu hiện kiểu hình khối u không phóng thích, việc phân tích dịch não tủy thường được yêu cầu thay vì lấy mẫu huyết tương.

**Liên kết tiếng Hàn:** `DNA 비방출 종양 표현형` (DNA 非放出 腫瘍 表現型) — kiểu hình khối u không giải phóng ADN vào máu.

---

## 22. target capture efficiency /ˈtɑːrɡət ˈkæptʃər ɪˈfɪʃənsi/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chỉ số chất lượng giải trình tự hoặc tân ngữ sau `optimize`, `evaluate`, `maximize`.

**Core meaning — English:** The quantitative proportion of sequenced reads that map specifically and accurately to the designated regions of interest within an oncology gene capture panel relative to off-target genomic reads.

**Core meaning & mental image — Tiếng Việt:** Hiệu suất bắt giữ gen mục tiêu; hãy hình dung một thợ săn bắn cung nhắm vào bia đỡ đạn: hiệu suất bắt giữ mục tiêu chính là tỷ lệ số mũi tên cắm trúng hồng tâm so với những mũi tên bay chệch ra ngoài bờ tường xung quanh.

**Grammar & collocations:** `optimize target capture efficiency` — tối ưu hóa hiệu suất bắt giữ mục tiêu; `high target capture efficiency` — hiệu suất bắt giữ mục tiêu cao; `compromise target capture efficiency` — làm giảm hiệu suất bắt giữ đích.

**Register & nuance:** `sequencing quality control (QC metrics)` — thước đo cốt lõi ảnh hưởng trực tiếp đến chi phí xét nghiệm và độ sâu giải trình tự (*sequencing depth*); hiệu suất càng cao thì độ sâu giải trình tự càng lớn mà không tốn kinh phí vô ích.

**Examples:** `By optimizing probe hybridization kinetics, the bioengineers boosted target capture efficiency from sixty to over eighty-five percent.` → Bằng cách tối ưu hóa động học lai ghép mẫu dò, các kỹ sư sinh học đã nâng hiệu suất bắt giữ mục tiêu từ sáu mươi lên hơn tám mươi lăm phần trăm.

**Liên kết tiếng Hàn:** `표적 포획 효율` (標的 捕獲 效率) — hiệu suất bắt giữ / tóm bắt gen đích.

---

## 23. circulating tumor fraction estimation /ˈsɜːrkjəleɪtɪŋ ˈtuːmər ˈfrækʃən ˌɛstəˈmeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm phương pháp tính toán tin sinh học hoặc tân ngữ sau `calculate`, `derive`, `report`.

**Core meaning — English:** The computational bioinformatic deconvolution of plasma sequencing data to calculate the exact percentage of total cell-free DNA that originates from apoptotic or necrotic malignant tumor cells versus healthy somatic cells.

**Core meaning & mental image — Tiếng Việt:** Sự ước tính phân đoạn khối u lưu hành; hãy hình dung việc phân tích một mẫu nước sông chảy qua một khu công nghiệp: các nhà hóa học tính toán chính xác có bao nhiêu phần triệu mililit nước thải hóa chất độc hại bị pha loãng trong mỗi lít nước ngọt tự nhiên của dòng sông.

**Grammar & collocations:** `accurate circulating tumor fraction estimation` — sự ước tính phân đoạn khối u lưu hành chuẩn xác; `algorithm for circulating tumor fraction estimation` — thuật toán ước tính phân đoạn khối u lưu hành; `correlate circulating tumor fraction estimation` — tương quan hóa sự ước tính phân đoạn khối u lưu hành.

**Register & nuance:** `computational genomics & liquid oncology` — đại lượng theo dõi đáp ứng điều trị liên tục; sự sụt giảm của phân đoạn này là bằng chứng định lượng rõ ràng nhất cho thấy khối u đang co nhỏ dưới tác dụng của hóa trị.

**Examples:** `Circulating tumor fraction estimation dropped from eight percent to undetectable levels following three cycles of neoadjuvant immunochemotherapy.` → Sự ước tính phân đoạn khối u lưu hành đã giảm từ tám phần trăm xuống mức không thể phát hiện được sau ba chu kỳ hóa miễn dịch bổ trợ trước phẫu thuật.

**Liên kết tiếng Hàn:** `순환 종양 분율 추정` (循環 腫瘍 分率 推定) — ước tính tỷ lệ phân đoạn ctDNA trong huyết tương.

---

## 24. molecular minimal residual state /məˈlɛkjələr ˈmɪnəməl rɪˈzɪdʒuəl steɪt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ tình trạng sinh học của bệnh nhân hoặc tân ngữ sau `characterize`, `revert to`, `eradicate`.

**Core meaning — English:** The biological condition wherein a patient shows complete macroscopic remission by standard radiographic and clinical criteria, yet harbors occult micrometastatic tumor foci detectable solely via circulating genomic biomarkers.

**Core meaning & mental image — Tiếng Việt:** Trạng thái tồn lưu tối thiểu ở mức phân tử; hãy hình dung một khu vườn đã được làm sạch cỏ dại hoàn toàn trên bề mặt đất: nhìn bằng mắt thường khu vườn rất xanh tốt, nhưng sâu bên dưới lòng đất, một vài đoạn rễ cây cỏ dại siêu nhỏ vẫn còn sống và đang chuẩn bị đâm chồi trở lại khi gặp cơn mưa đầu mùa.

**Grammar & collocations:** `identify a molecular minimal residual state` — nhận diện một trạng thái tồn lưu tối thiểu ở mức phân tử; `transition to a molecular minimal residual state` — chuyển dịch sang trạng thái tồn lưu phân tử tối thiểu; `eradication of the molecular minimal residual state` — sự triệt tiêu trạng thái tồn lưu phân tử tối thiểu.

**Register & nuance:** `oncological staging & prognosis` — ranh giới phân định sống còn giữa "chữa khỏi bệnh hoàn toàn" (*true biological cure*) và "thời kỳ ủ bệnh trước tái phát vĩ mô" (*occult dormancy*).

**Examples:** `Identifying a molecular minimal residual state allows clinicians to escalate adjuvant systemic therapy before incurable metastatic disease crystallizes.` → Việc nhận diện một trạng thái tồn lưu tối thiểu ở mức phân tử cho phép các bác sĩ lâm sàng tăng bậc liệu pháp toàn thân bổ trợ trước khi bệnh di căn nan y hình thành rõ rệt.

**Liên kết tiếng Hàn:** `분자적 미세 잔존 질환 상태` (分子적 微細 殘存 疾患 狀態) — trạng thái bệnh còn tồn lưu vi mô ở cấp độ phân tử.

---

## 25. ctDNA-guided adjuvant escalation /ˌsiːtiːˌdiːɛnˈeɪ ˈɡaɪdɪd ˈædʒəvənt ˌɛskəˈleɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ chiến lược điều trị thích ứng hoặc tân ngữ sau `recommend`, `test`, `evaluate`.

**Core meaning — English:** An adaptive clinical trial paradigm and therapeutic strategy wherein post-surgical adjuvant chemotherapy or immunotherapy is selectively intensified exclusively in patients exhibiting persistent plasma ctDNA positivity.

**Core meaning & mental image — Tiếng Việt:** Tăng bậc điều trị bổ trợ định hướng theo ctDNA; hãy hình dung việc triển khai lực lượng cứu hỏa tinh nhuệ: thay vì xịt bọt chữa cháy đồng loạt lên tất cả các ngôi nhà trong khu phố (gây hư hại tài sản không cần thiết cho những nhà không cháy), lực lượng cứu hỏa chỉ xông vào đúng căn nhà mà máy quét nhiệt báo động đang có than hồng âm ỉ.

**Grammar & collocations:** `protocol for ctDNA-guided adjuvant escalation` — đề cương tăng bậc điều trị bổ trợ định hướng theo ctDNA; `benefit from ctDNA-guided adjuvant escalation` — hưởng lợi từ sự tăng bậc điều trị bổ trợ định hướng ctDNA; `implement ctDNA-guided adjuvant escalation` — thực thi tăng bậc bổ trợ theo ctDNA.

**Register & nuance:** `precision interventional oncology` — giải quyết thế tiến thoái lưỡng nan kinh điển của điều trị ung thư: tránh điều trị quá mức (*overtreatment*) cho bệnh nhân đã sạch u và tránh điều trị dưới mức (*undertreatment*) cho bệnh nhân có nguy cơ tái phát cao.

**Examples:** `The landmark randomized trial validated ctDNA-guided adjuvant escalation, sparing ctDNA-negative patients from toxic chemotherapy while doubling survival in ctDNA-positive cohorts.` → Thử nghiệm ngẫu nhiên mang tính bước ngoặt đã xác thực chiến lược tăng bậc điều trị bổ trợ định hướng theo ctDNA, giúp các bệnh nhân âm tính với ctDNA tránh được hóa trị độc hại trong khi nhân đôi tỷ lệ sống sót ở các nhóm dương tính với ctDNA.

**Liên kết tiếng Hàn:** `순환 종양 DNA 기반 보조요법 강화` (循環 腫瘍 DNA 基盤 補助療法 强化) — tăng cường liệu pháp bổ trợ dựa trên định hướng ctDNA.

---

## Review in context (Part 1: Ultra-Deep Error Suppression and Early Genomic Tracking)

To achieve the ultra-sensitive detection of submicroscopic cancer remnants, modern molecular pathology relies on **duplex sequencing**, which tags and reads both strands of DNA to eliminate technological artifacts. By incorporating **unique molecular identifier barcoding**, bioinformatic pipelines successfully collapse multiple PCR copies into accurate consensus sequences. However, clinical interpretation is frequently complicated by non-malignant somatic mutations; resolving this challenge demands sophisticated **CHIP deconvolution** to distinguish true tumor variants from aging hematopoietic clones. To maintain clinical precision, laboratory teams establish a stringent **variant allele frequency threshold**, ensuring that calls reflect true biology rather than analytical noise. In the postoperative setting, initiating comprehensive **molecular relapse surveillance** allows clinicians to detect circulating fragments months before recurrence appears on radiographic scans. The success of this monitoring depends profoundly on individual **ctDNA shedding kinetics**, as vascularization and cell turnover dictate how many genomic fragments enter the blood. When primary tissue is available from surgery, oncologists favor a bespoke **tumor-informed assay**, customizing panels to the specific clonal profile of the patient's primary neoplasm. Conversely, in settings where tissue is exhausted, **tumor-agnostic liquid profiling** provides an off-the-shelf alternative capable of detecting common hotspot drivers. Beyond analyzing genetic sequence alone, modern diagnostics deploy **fragmentomic nucleosome footprinting**, leveraging cleavage patterns and chromatin architecture to deduce the tumor's cellular origin. To capture low-abundance fragments across broad target panels, technicians optimize **hybrid capture enrichment** protocols to isolate target regions from plasma libraries. For single-mutation hotspots, employing **digital droplet PCR partition** provides rapid, highly sensitive absolute quantification without massive sequencing overhead. Together with algorithmic **background technical noise suppression**, these advanced methodologies push limits of detection down to single mutant molecules.

**Bản dịch tiếng Việt:**

Để đạt được sự phát hiện siêu nhạy đối với các tàn dư ung thư ở mức độ dưới hiển vi, giải phẫu bệnh phân tử hiện đại dựa vào **kỹ thuật giải trình tự sợi kép**, phương pháp gắn thẻ và đọc cả hai sợi ADN để loại bỏ các sai sót kỹ thuật. Bằng cách tích hợp **gắn mã vạch định danh phân tử duy nhất**, các đường ống tin sinh học đã gom thành công nhiều bản sao PCR thành các trình tự đồng thuận chuẩn xác. Tuy nhiên, việc diễn giải lâm sàng thường xuyên bị phức tạp hóa bởi các đột biến soma không ác tính; việc giải quyết thách thức này đòi hỏi **sự phân tách dòng tạo máu vô căn** tinh vi để phân biệt các biến thể khối u thực sự với các dòng tạo máu lão hóa. Để duy trì độ chính xác lâm sàng, các nhóm phòng xét nghiệm thiết lập một **ngưỡng tần số alen biến dị** nghiêm ngặt, đảm bảo rằng các kết luận phản ánh đúng sinh học thực tế thay vì nhiễu phân tích. Trong bối cảnh hậu phẫu, việc khởi động **sự giám sát tái phát ở mức độ phân tử** toàn diện cho phép các bác sĩ lâm sàng phát hiện các đoạn lưu hành nhiều tháng trước khi sự tái phát xuất hiện trên các phim chụp chẩn đoán hình ảnh. Sự thành công của việc theo dõi này phụ thuộc sâu sắc vào **động học phóng thích ADN khối u lưu hành** của từng cá thể, vì mức độ vi mạch hóa và tốc độ chu chuyển tế bào quy định có bao nhiêu đoạn gen xâm nhập vào máu. Khi có sẵn mô nguyên phát từ cuộc phẫu thuật, các bác sĩ ung thư ưu tiên một **xét nghiệm định hướng theo khối u** được cá thể hóa, tùy chỉnh các bộ gen nhắm vào đúng hồ sơ dòng đặc thù của khối tân sinh nguyên phát của bệnh nhân. Ngược lại, trong bối cảnh mô bị cạn kiệt, **phân tích hồ sơ sinh thiết lỏng độc lập với mô u** mang lại một giải pháp thay thế có sẵn có khả năng phát hiện các đột biến điểm nóng phổ biến. Vượt ra ngoài việc chỉ phân tích trình tự di truyền đơn thuần, các phương pháp chẩn đoán hiện đại triển khai **dấu vết nucleosome qua hình thái phân mảnh**, tận dụng các mô thức phân cắt và kiến trúc chất nhiễm sắc để suy ra nguồn gốc tế bào của khối u. Để bắt các đoạn có độ phong phú thấp trên các bảng mục tiêu rộng, các kỹ thuật viên tối ưu hóa các quy trình **làm giàu mục tiêu bằng lai ghép bắt giữ** nhằm cô lập các vùng mục tiêu từ các thư viện huyết tương. Đối với các điểm nóng đột biến đơn lẻ, việc sử dụng **phân vùng phản ứng vi giọt kỹ thuật số** mang lại sự định lượng tuyệt đối nhanh chóng, có độ nhạy cao mà không tốn kém chi phí giải trình tự khổng lồ. Cùng với **sự triệt tiêu nhiễu kỹ thuật nền** bằng thuật toán, các phương pháp tiên tiến này đẩy giới hạn phát hiện xuống mức từng phân tử đột biến đơn lẻ.

---

## Review in context (Part 2: Molecular Interception, Clonal Evolution, and Adaptive Intervention)

The ultimate goal of ultra-deep liquid biopsy is to facilitate **molecular disease interception**, treating occult micrometastases before they form vascularized macroscopic tumors. Because of rapid **ctDNA half-life clearance**, plasma levels reflect real-time tumor burden, clearing within hours of successful surgical resection. To eliminate confounding false positives from benign hematopoiesis, protocols mandate **paired white blood cell sequencing**, subtracting donor leukocyte mutations from plasma findings. By synthesizing genomic, fragmentomic, and epigenetic markers, **multimodal liquid profiling** significantly boosts assay sensitivity across low-shedding malignancies. This early detection confers a critical **lead-time advantage**, providing clinicians with a multi-month window to intervene before radiographic recurrence. To guarantee that ultra-low positive calls represent genuine disease, developers perform exhaustive **limit of blank validation** using healthy control plasma. During targeted therapy, serial plasma sampling allows detailed **subclonal phylogenetic tracking**, exposing the Darwinian evolution and expansion of drug-resistant clones. Clinically, postoperative **ctDNA persistence** serves as a grim prognostic biomarker, identifying patients with uneradicated microscopic disease. Conversely, oncologists must remain vigilant regarding the **non-shedding tumor phenotype**, where mucinous histology or biological barriers prevent ctDNA from reaching systemic circulation. Throughout assay preparation, optimizing hybrid probes ensures high **target capture efficiency**, maximizing coverage of critical oncogenes while minimizing sequencing waste. Bioinformatic algorithms continuously calculate **circulating tumor fraction estimation**, providing a quantitative readout of tumor burden changes during therapy. Recognizing the **molecular minimal residual state** enables teams to identify patients who appear clinically cancer-free but harbor latent disease. Ultimately, randomized trials are demonstrating the power of **ctDNA-guided adjuvant escalation**, sparing negative patients toxic therapies while intensifying interventions for those at high risk.

**Bản dịch tiếng Việt:**

Mục tiêu tối thượng của sinh thiết lỏng siêu sâu là tạo điều kiện cho việc **can thiệp chặn đầu bệnh lý phân tử**, điều trị các vi di căn tiềm ẩn trước khi chúng hình thành các khối u vĩ mô có mạch máu nuôi dưỡng. Nhờ **tốc độ thanh thải bán hủy ctDNA** nhanh chóng, nồng độ trong huyết tương phản ánh tải lượng khối u theo thời gian thực, biến mất chỉ trong vài giờ sau khi phẫu thuật cắt bỏ thành công. Để loại bỏ các dương tính giả gây nhiễu từ quá trình tạo máu lành tính, các đề cương bắt buộc tiến hành **giải trình tự đối sánh tế bào bạch cầu ghép cặp**, trừ đi các đột biến bạch cầu của người hiến khỏi các phát hiện trong huyết tương. Bằng cách tổng hợp các dấu ấn bộ gen, hình thái phân mảnh và biểu sinh, **phân tích hồ sơ lỏng đa phương thức** tăng đáng kể độ nhạy của xét nghiệm trên các khối u ác tính phóng thích ít. Sự phát hiện sớm này mang lại **lợi thế khoảng thời gian đón đầu** mang tính quyết định, cung cấp cho các bác sĩ lâm sàng một cửa sổ kéo dài nhiều tháng để can thiệp trước khi tái phát trên chẩn đoán hình ảnh. Để đảm bảo rằng các kết luận dương tính cực thấp đại diện cho bệnh lý thực sự, các nhà phát triển tiến hành **thẩm định giới hạn mẫu trắng** thấu đáo bằng cách sử dụng huyết tương đối chứng khỏe mạnh. Trong quá trình điều trị nhắm trúng đích, việc lấy mẫu huyết tương liên tiếp cho phép **sự theo dõi phả hệ phân nhánh dưới dòng** chi tiết, vạch trần sự tiến hóa kiểu Darwin và sự bành trướng của các dòng kháng thuốc. Về mặt lâm sàng, **sự tồn lưu ctDNA dai dẳng** sau phẫu thuật đóng vai trò như một dấu ấn sinh học tiên lượng xấu, nhận diện những bệnh nhân mang mầm bệnh vi thể chưa được triệt tiêu. Ngược lại, các bác sĩ ung thư phải luôn cảnh giác trước **kiểu hình khối u không phóng thích**, nơi cấu trúc mô nhầy hoặc các hàng rào sinh học ngăn cản ctDNA xâm nhập vào tuần hoàn toàn thân. Xuyên suốt quá trình chuẩn bị xét nghiệm, việc tối ưu hóa các mẫu dò lai ghép đảm bảo **hiệu suất bắt giữ gen mục tiêu** cao, tối đa hóa độ bao phủ của các gen sinh ung quan trọng trong khi giảm thiểu lãng phí giải trình tự. Các thuật toán tin sinh học liên tục tính toán **sự ước tính phân đoạn khối u lưu hành**, cung cấp một kết quả định lượng về các thay đổi tải lượng khối u trong suốt quá trình điều trị. Việc nhận diện **trạng thái tồn lưu tối thiểu ở mức phân tử** cho phép các đội ngũ y tế xác định những bệnh nhân bề ngoài có vẻ sạch ung thư trên lâm sàng nhưng thực chất vẫn đang ủ bệnh tiềm ẩn. Cuối cùng, các thử nghiệm ngẫu nhiên đang chứng minh sức mạnh của chiến lược **tăng bậc điều trị bổ trợ định hướng theo ctDNA**, giúp các bệnh nhân âm tính tránh được các liệu pháp độc hại trong khi tăng cường can thiệp cho những người có nguy cơ cao.
