# C2 Vocabulary 72 — Spatial transcriptomics, multiplexed in situ RNA sequencing, and cellular microenvironment cartography

Trong kỷ nguyên sinh học phân tử không gian (*spatial biology*) và giải trình tự thế hệ mới, sự xuất hiện của các công nghệ phiên mã không gian (*spatial transcriptomics*) và giải trình tự tại chỗ (*in situ sequencing*) đã phá vỡ rào cản lớn nhất của kỹ thuật giải trình tự tế bào đơn phân ly (*dissociated single-cell RNA-seq*): việc làm mất hoàn toàn thông tin vị trí địa lý của tế bào trong cấu trúc mô nguyên bản. Bằng cách lưu giữ nguyên vẹn tọa độ hai chiều và ba chiều của từng bản sao RNA bên trong cấu trúc vi môi trường mô học (*tissue microenvironment*), các nhà nghiên cứu có thể lập bản đồ giao tiếp cận tiết giữa các tế bào ung thư và tế bào miễn dịch, phát hiện các cấu trúc lympho bậc ba, và giải mã động học biểu hiện gen dưới độ phân giải dưới tế bào. Bài học này trang bị cho người học C2 hệ thống thuật ngữ y sinh học cấp cao: từ kỹ thuật bắt giữ RNA trên phiến kính gắn mã vạch không gian (*spatial barcoded array capture*), kiểm soát động học thẩm thấu màng mô (*tissue permeabilization kinetics*), khắc phục sai số khuếch tán (*spatial RNA diffusion artifact*), phương pháp lai huỳnh quang đa hợp chống lỗi (*multiplexed error-robust FISH - MERFISH*), giải mã điểm ảnh phân tử đơn lẻ (*single-molecule spot decoding*), phân loại kiểu hình láng giềng tế bào (*cellular neighborhood phenotyping*), đồng định vị không gian phối tử-thụ thể (*ligand-receptor spatial colocalization*), cho đến việc lập bản đồ cartography vi môi trường bệnh lý (*microenvironment cartographic mapping*).

Flow của bài học: **spatial barcoded array capture** → **tissue permeabilization kinetics** → **spatial RNA diffusion artifact** → **multiplexed error-robust FISH** → **combinatorial barcode encoding** → **sequential fluorescence readout** → **optical tissue clearing clearance** → **single-molecule spot decoding** → **cellular boundary segmentation mask** → **subcellular transcript coordinates** → **in situ rolling circle amplification** → **tissue histology coregistration** → **spatial transcriptomic fiducial frame** → **multimodal histological registration** → **microenvironmental niche deconvolution** → **cellular neighborhood phenotyping** → **spatial distance metric** → **ligand-receptor spatial colocalization** → **paracrine signaling gradient** → **stromal cell proximity indexing** → **immunofluorescence multiplexing overlay** → **spatial gene expression clustering** → **spatial gene co-expression module** → **tertiary lymphoid structure cartography** → **microenvironment cartographic mapping**.

---

## 1. spatial barcoded array capture /ˈspeɪʃəl ˈbɑrˌkoʊdɪd əˈreɪ ˈkæptʃər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ phương pháp thu nhận RNA trên phiến kính hoặc tân ngữ sau `employ`, `optimize`, `standardize`.

**Core meaning — English:** A high-throughput spatial profiling technique wherein mRNAs released from a permeabilized histological tissue section are captured onto a solid glass slide printed with a grid of spatially barcoded oligo-dT probes.

**Core meaning & mental image — Tiếng Việt:** Kỹ thuật bắt giữ RNA trên phiến kính gắn mã vạch không gian; hãy hình dung một tấm thảm dệt gồm hàng triệu chiếc bẫy dính siêu nhỏ: mỗi chiếc bẫy được in sẵn một mã tọa độ GPS cố định; khi áp một lát cắt mô mỏng lên tấm thảm, các phân tử RNA rơi thẳng xuống bẫy bên dưới và được dán nhãn tọa độ GPS chính xác nơi chúng vừa rơi ra.

**Grammar & collocations:** `employ spatial barcoded array capture` — áp dụng kỹ thuật bắt giữ trên phiến kính gắn mã vạch không gian; `resolution of spatial barcoded array capture` — độ phân giải của kỹ thuật bắt giữ mã vạch không gian; `efficiency of spatial barcoded array capture` — hiệu suất của việc bắt giữ RNA trên mảng mã vạch không gian.

**Register & nuance:** `spatial genomics (e.g., 10x Visium platform)` — đại diện cho trường phái giải trình tự dựa trên mảng (*array-based sequencing*); phân biệt với các kỹ thuật quang học dựa trên kính hiển vi huỳnh quang (*imaging-based approaches*); ưu thế là khảo sát toàn bộ hệ gen (*unbiased whole-transcriptome*), nhưng độ phân giải thường giới hạn ở cụm tế bào (55 µm hoặc nhỏ hơn).

**Examples:** `By utilizing spatial barcoded array capture, the investigators mapped genome-wide gene expression across intact glioblastoma biopsies without enzymatic tissue dissociation.` → Bằng cách sử dụng kỹ thuật bắt giữ RNA trên phiến kính gắn mã vạch không gian, các nhà điều tra đã lập bản đồ biểu hiện gen trên toàn bộ hệ gen xuyên suốt các mẫu sinh thiết u nguyên bào đệm nguyên vẹn mà không cần phân ly mô bằng enzym.

**Liên kết tiếng Hàn:** `공간 바코드 어레이 포획` (空間 barcode array 捕獲) — sự thu bắt phân tử RNA trên mảng gắn mã vạch không gian.

---

## 2. tissue permeabilization kinetics /ˈtɪʃuː ˌpɜrmiəbələˈzeɪʃən kəˈnɛtɪks/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ xác định thời gian tối ưu giải phóng RNA hoặc tân ngữ sau `optimize`, `titrate`.

**Core meaning — English:** The time- and enzyme-dependent rate at which cellular membranes are selectively breached in fixed tissue sections to allow mRNA molecules to diffuse onto underlying capture probes without tissue detachment.

**Core meaning & mental image — Tiếng Việt:** Động học thẩm thấu / làm thủng màng mô; hãy hình dung việc mở các ô cửa sổ của một tòa nhà đang bốc cháy: mở quá chậm thì khói (RNA) bị kẹt bên trong không thoát ra được; mở quá nhanh và giật tung các cánh cửa thì toàn bộ bức tường sẽ sụp đổ cuốn trôi mọi thứ ra đường.

**Grammar & collocations:** `optimize tissue permeabilization kinetics` — tối ưu hóa động học thẩm thấu màng mô; `titrate tissue permeabilization kinetics` — chuẩn độ động học làm thủng màng mô; `variability in tissue permeabilization kinetics` — sự biến động trong động học thẩm thấu mô.

**Register & nuance:** `spatial experimental protocol optimization` — thông số nhạy cảm nhất của quy trình Visium; mỗi loại mô (não, tim, gan, khối u nhiều sợi) có cấu trúc ma trận ngoại bào khác nhau nên đòi hỏi phải làm thí nghiệm tối ưu hóa thời gian permeabilization riêng biệt.

**Examples:** `Variability in tissue permeabilization kinetics across diverse tumor types requires careful empirical titration of pepsin incubation times to maximize capture yield.` → Sự biến động trong động học làm thủng màng mô trên các loại khối u khác nhau đòi hỏi phải chuẩn độ thực nghiệm cẩn thận thời gian ủ pepsin để tối đa hóa hiệu suất thu bắt.

**Liên kết tiếng Hàn:** `조직 투과화 동역학` (組織 透過化 動力學) — động học của quá trình xử lý làm tăng tính thấm tế bào mô.

---

## 3. spatial RNA diffusion artifact /ˈspeɪʃəl ˌɑr ɛn ˈeɪ dɪˈfjuːʒən ˈɑrtəˌfækt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ gây sai số phân tử hoặc tân ngữ sau `minimize`, `correct for`.

**Core meaning — English:** The lateral, horizontal spreading of liberated mRNA molecules away from their endogenous cellular locations during tissue permeabilization, causing artificial blurring of spatial boundaries and cross-spot contamination.

**Core meaning & mental image — Tiếng Việt:** Hiện tượng biến dạng / sai số do khuếch tán RNA không gian; hãy hình dung một giọt mực tím rớt xuống tờ giấy thấm ướt sũng: thay vì đọng lại thành một chấm tròn sắc nét tại vị trí rơi, giọt mực loang rộng ra xung quanh làm nhòe nhoẹt các chữ viết lân cận, khiến máy quét không còn biết chữ nào là chữ gốc.

**Grammar & collocations:** `minimize spatial RNA diffusion artifact` — giảm thiểu sai số do khuếch tán RNA không gian; `confound from spatial RNA diffusion artifact` — sự gây nhiễu do sai số khuếch tán RNA không gian; `correct for spatial RNA diffusion artifact` — hiệu chỉnh sai số do khuếch tán RNA không gian.

**Register & nuance:** `spatial transcriptomics quality control` — mối nguy hiểm kỹ thuật lớn nhất trong giải trình tự dựa trên mảng (*array capture*); nếu thời gian ủ men permeabilization quá lâu, RNA sẽ trôi dạt sang các giếng tọa độ bên cạnh, làm mất tính chân thực của ranh giới khối u.

**Examples:** `Shortening enzymatic permeabilization to twelve minutes minimized the spatial RNA diffusion artifact, preventing transcript bleeding across the tumor-stroma boundary.` → Việc rút ngắn thời gian thấm enzym xuống mười hai phút đã giảm thiểu hiện tượng biến dạng do khuếch tán RNA không gian, ngăn chặn sự loang lổ bản sao xuyên qua ranh giới giữa khối u và mô đệm.

**Liên kết tiếng Hàn:** `공간 RNA 확산 인공물 / 오류` (空間 RNA 擴散 人工物) — hiện tượng sai số do sự khuếch tán ngang của phân tử RNA trong không gian mô.

---

## 4. multiplexed error-robust FISH /ˈmʌltəˌplɛkst ˈɛrər roʊˈbʌst fɪʃ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Làm chủ ngữ hoặc tân ngữ chỉ phương pháp quang học siêu phân giải đo đạc đồng thời hàng ngàn loại RNA với mã sửa lỗi.

**Core meaning — English:** An advanced single-molecule imaging technology (MERFISH) that identifies thousands of distinct RNA species simultaneously within single cells by employing combinatorial labeling and error-detecting/correcting binary barcodes.

**Core meaning & mental image — Tiếng Việt:** Kỹ thuật lai huỳnh quang tại chỗ đa hợp chống lỗi (MERFISH); hãy hình dung việc đánh dấu hàng ngàn bức thư mật bằng một chuỗi mã nhấp nháy 16 bit: ngay cả khi máy quét đọc nhầm một hoặc hai đợt sáng tối do nhiễu bụi (lỗi đọc quang học), thuật toán toán học Hamming vẫn tự động sửa lỗi và nhận diện chính xác nội dung bức thư.

**Grammar & collocations:** `pioneer multiplexed error-robust FISH` — tiên phong trong kỹ thuật MERFISH; `sensitivity of multiplexed error-robust FISH` — độ nhạy của kỹ thuật MERFISH; `perform multiplexed error-robust FISH` — thực hiện kỹ thuật lai huỳnh quang đa hợp chống lỗi.

**Register & nuance:** `super-resolution optical imaging & biophysics (Zhuang lab)` — công nghệ đỉnh cao đạt độ phân giải dưới tế bào (*subcellular resolution*); sử dụng các chuỗi mã nhị phân với khoảng cách Hamming tối thiểu là 4 (MHD4) để phát hiện và tự động sửa các lỗi huỳnh quang dương tính/âm tính giả.

**Examples:** `Multiplexed error-robust FISH allowed the team to count individual mRNA molecules for over one thousand genes simultaneously inside single hypothalamic neurons.` → Kỹ thuật lai huỳnh quang tại chỗ đa hợp chống lỗi đã cho phép nhóm nghiên cứu đếm từng phân tử mRNA đơn lẻ của hơn một ngàn gen cùng lúc bên trong các nơ-ron vùng dưới đồi đơn độc.

**Liên kết tiếng Hàn:** `다중 오류 견고성 형광 제자리 혼성화` (多重 誤謬 堅固性 螢光 제자리 混成化 / MERFISH) — kỹ thuật lai huỳnh quang tại chỗ đa hợp có khả năng chống lỗi.

---

## 5. combinatorial barcode encoding /kəmˌbaɪnəˈtɔriəl ˈbɑrˌkoʊd ɛnˈkoʊdɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Làm chủ ngữ hoặc phương thức mã hóa cho phép mở rộng quy mô phát hiện hàng vạn gen.

**Core meaning — English:** The strategic assignment of unique binary or optical barcode sequences to specific target RNA molecules using combinations of fluorescent hybridization probes across successive imaging rounds.

**Core meaning & mental image — Tiếng Việt:** Sự mã hóa bằng mã vạch tổ hợp; hãy hình dung việc tạo mã định danh cho 10.000 cuốn sách chỉ bằng 4 màu mực: thay vì cần 10.000 màu mực khác nhau (điều bất khả thi), người ta dán lên mỗi cuốn sách một chuỗi gồm 8 vạch màu tổ hợp khác nhau, tạo ra hàng chục ngàn mã số độc nhất vô nhị.

**Grammar & collocations:** `implement combinatorial barcode encoding` — triển khai sự mã hóa bằng mã vạch tổ hợp; `scheme of combinatorial barcode encoding` — sơ đồ mã hóa bằng mã vạch tổ hợp; `efficiency of combinatorial barcode encoding` — hiệu suất của sự mã hóa bằng mã vạch tổ hợp.

**Register & nuance:** `multiplexed in situ hybridization (SeqFISH, MERFISH)` — nền tảng toán học giải quyết nghịch lý quang học: mắt người và kính hiển vi chỉ phân biệt được 4-5 bước sóng màu độc lập cùng lúc, nhưng nhờ mã hóa tổ hợp nhị phân, số lượng gen nhận diện được mở rộng gần như vô hạn.

**Examples:** `By designing a sixteen-bit combinatorial barcode encoding scheme, the researchers distinguished over ten thousand distinct mRNA targets using only four fluorophore channels.` → Bằng cách thiết kế một sơ đồ mã hóa bằng mã vạch tổ hợp mười sáu bit, các nhà nghiên cứu đã phân biệt được hơn mười ngàn mục tiêu mRNA khác nhau chỉ bằng bốn kênh màu huỳnh quang.

**Liên kết tiếng Hàn:** `조합 바코드 인코딩` (組合 barcode encoding) — phương thức mã hóa định danh bằng mã vạch tổ hợp nhị phân.

---

## 6. sequential fluorescence readout /sɪˈkwɛnʃəl flʊˈrɛsəns ˈriːdˌaʊt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Làm chủ ngữ hoặc phương thức chụp ảnh nhiều vòng lặp để giải mã mã vạch huỳnh quang.

**Core meaning — English:** The cyclical experimental process of iteratively hybridizing fluorescent readout probes, imaging target emission spectra, and chemically cleaving or photobleaching signals across consecutive hybridization rounds.

**Core meaning & mental image — Tiếng Việt:** Sự đọc tín hiệu huỳnh quang tuần tự; hãy hình dung việc chụp một loạt ảnh màu của cùng một căn phòng qua nhiều đêm: đêm thứ nhất bật đèn đỏ rồi tắt, đêm thứ hai bật đèn xanh rồi tắt, đêm thứ ba bật đèn vàng; sự kết hợp chuỗi ánh sáng qua các đêm tạo thành một mật mã nhấp nháy định danh từng đồ vật trong phòng.

**Grammar & collocations:** `execute sequential fluorescence readout` — thực hiện việc đọc tín hiệu huỳnh quang tuần tự; `cycles of sequential fluorescence readout` — các chu kỳ đọc tín hiệu huỳnh quang tuần tự; `automate sequential fluorescence readout` — tự động hóa việc đọc tín hiệu huỳnh quang tuần tự.

**Register & nuance:** `multiplexed in situ hybridization & imaging instrumentation` — cơ chế trung tâm của SeqFISH và MERFISH; số lượng gen có thể phân biệt tăng theo cấp số nhân ($N = C^R$, trong đó $C$ là số màu và $R$ là số vòng đọc tuần tự), vượt qua giới hạn quang học của việc chồng lấn phổ màu.

**Examples:** `Automated fluidics performed sixteen rounds of sequential fluorescence readout, systematically identifying hundreds of distinct cortical mRNA species without signal degradation.` → Hệ thống vi lưu tự động đã thực hiện mười sáu vòng đọc tín hiệu huỳnh quang tuần tự, nhận diện một cách có hệ thống hàng trăm loài mRNA vỏ não khác nhau mà không làm suy giảm tín hiệu.

**Liên kết tiếng Hàn:** `순차적 형광 판독` (順次的 螢光 判讀) — quá trình đọc tín hiệu huỳnh quang theo chu kỳ tuần tự.

---

## 7. optical tissue clearing clearance /ˈɑptɪkəl ˈtɪʃuː ˈklɪrɪŋ ˈklɪrəns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ làm tăng độ sâu hình ảnh hoặc tân ngữ sau `achieve`, `evaluate`.

**Core meaning — English:** The degree of optical transparency and refractive index homogenization achieved in thick biological specimens through lipid removal and clearing reagents, permitting deep, unscattered light penetration.

**Core meaning & mental image — Tiếng Việt:** Độ thông suốt / khoảng thông quang nhờ làm trong suốt mô; hãy hình dung một khối thạch đục ngầu chứa đầy dầu mỡ khiến ánh sáng đèn pin không xuyên qua được: sau khi ngâm hóa chất chiết xuất toàn bộ chất béo, khối thạch trở nên trong vắt như pha lê, cho phép nhìn thấu từng hạt cát nằm tận đáy sâu.

**Grammar & collocations:** `maximize optical tissue clearing clearance` — tối đa hóa độ thông quang nhờ làm trong mô; `protocols for optical tissue clearing clearance` — các quy trình làm trong mô quang học; `assess optical tissue clearing clearance` — đánh giá độ trong suốt quang học của mô.

**Register & nuance:** `3D spatial transcriptomics & tissue hydrogel mechanics (e.g., CLARITY, STARmap)` — cốt lõi cho các kỹ thuật phiên mã 3D; nếu không loại bỏ lipid và đồng nhất chỉ số khúc xạ (*refractive index matching*), hiện tượng tán xạ ánh sáng sẽ làm mờ đục mọi tín hiệu phân tử ở độ sâu trên 20 µm.

**Examples:** `Achieving uniform optical tissue clearing clearance allowed two-photon deep-tissue scanning through millimeter-thick human cerebral cortex organoids without photon scattering.` → Đạt được độ thông suốt nhờ làm trong suốt mô quang học đồng đều đã cho phép quét mô sâu hai photon qua các organoid vỏ não người dày hàng milimet mà không bị tán xạ photon.

**Liên kết tiếng Hàn:** `광학 조직 투명화 간극 / 투명도` (光學 組織 透明化 間隙) — mức độ thông quang và độ trong suốt đạt được sau xử lý làm trong mô.

---

## 8. single-molecule spot decoding /ˈsɪŋɡəl ˈmɑləˌkjuːl spɑt diˈkoʊdɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ phân tích tín hiệu thô hoặc tân ngữ sau `execute`, `automate`.

**Core meaning — English:** The computational image-processing pipeline that identifies individual optical diffraction-limited fluorescent spots across multiple imaging cycles and matches their observed color sequence to a predefined barcode codebook.

**Core meaning & mental image — Tiếng Việt:** Sự giải mã đốm phân tử đơn lẻ; hãy hình dung một kính viễn vọng quan sát các ngọn hải đăng nhấp nháy từ xa: thuật toán chụp ảnh nhận diện từng đốm sáng nhỏ nhất, ghi lại chuỗi chớp màu (Xanh-Đỏ-Xanh-Vàng) qua các đêm, rồi tra vào cuốn từ điển hải đăng để khẳng định đốm sáng đó chính xác là ngọn hải đăng của đảo Hòn Tre.

**Grammar & collocations:** `execute single-molecule spot decoding` — thực hiện giải mã đốm phân tử đơn lẻ; `accuracy of single-molecule spot decoding` — độ chính xác của việc giải mã đốm phân tử đơn lẻ; `single-molecule spot decoding pipeline` — quy trình giải mã đốm phân tử đơn lẻ.

**Register & nuance:** `computational in situ genomics` — bước biến đổi các tệp hình ảnh khổng lồ (terabyte ảnh kính hiển vi) thành các tệp bảng dữ liệu tọa độ phân tử đơn giản; đòi hỏi thuật toán tìm đỉnh cục bộ (*local peak detection*) và hiệu chỉnh quang sai hình cầu.

**Examples:** `Machine learning algorithms streamlined single-molecule spot decoding, assigning over ten million fluorescent puncta to specific gene identities in less than two hours.` → Các thuật toán máy học đã tinh gọn việc giải mã đốm phân tử đơn lẻ, gán hơn mười triệu điểm huỳnh quang vào các danh tính gen cụ thể trong vòng chưa đầy hai giờ.

**Liên kết tiếng Hàn:** `단일 분자 스팟 디코딩 / 해독` (單一 分子 spot 解讀) — quá trình giải mã các điểm ảnh huỳnh quang phân tử đơn lẻ thành danh tính gen.

---

## 9. cellular boundary segmentation mask /ˈsɛljələr ˈbaʊndəri ˌsɛɡmənˈteɪʃən mæsk/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tân ngữ sau `generate`, `refine`, `apply` hoặc làm chủ ngữ gán bản sao RNA vào từng tế bào đơn lẻ.

**Core meaning — English:** A computational polygon or pixel mask delineated through deep-learning image processing of membrane or nuclear stains to demarcate the precise physical boundaries of individual cells in tissue images.

**Core meaning & mental image — Tiếng Việt:** Mặt nạ phân đoạn ranh giới tế bào; hãy hình dung một chiếc khuôn cắt bánh quy bằng laser tự động vẽ các đường viền khép kín bao quanh từng tế bào trên bức ảnh hiển vi: chiếc khuôn xác định chính xác phần diện tích nào thuộc về tế bào A và phần nào thuộc về tế bào B, để chia các hạt RNA vào đúng chủ nhân của chúng.

**Grammar & collocations:** `generate a cellular boundary segmentation mask` — tạo ra một mặt nạ phân đoạn ranh giới tế bào; `refine cellular boundary segmentation mask` — tinh chỉnh mặt nạ phân đoạn ranh giới tế bào; `apply cellular boundary segmentation mask` — áp dụng mặt nạ phân đoạn ranh giới tế bào.

**Register & nuance:** `computational bio-imaging (e.g., Cellpose, Mesmer, DeepCell)` — nút thắt cổ chai (*bottleneck*) lớn nhất hiện nay của spatial transcriptomics; nếu phân đoạn sai màng tế bào, các bản sao RNA sẽ bị gán nhầm sang tế bào bên cạnh, tạo ra các tế bào lai giả tạo (*doublet artifacts*).

**Examples:** `Deep neural networks trained on DAPI and E-cadherin stains generated an accurate cellular boundary segmentation mask, assigning ninety-five percent of detected transcripts to single cells.` → Các mạng nơ-ron sâu được huấn luyện trên các vết nhuộm DAPI và E-cadherin đã tạo ra một mặt nạ phân đoạn ranh giới tế bào chính xác, gán chín mươi lăm phần trăm các bản sao được phát hiện vào các tế bào đơn lẻ.

**Liên kết tiếng Hàn:** `세포 경계 분할 마스크` (細胞 境界 分割 mask) — mặt nạ đồ họa phân đoạn ranh giới tế bào trong xử lý ảnh.

---

## 10. subcellular transcript coordinates /ˌsʌbˈsɛljələr ˈtrænskrɪpt koʊˈɔrdənəts/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ lập bản đồ vị trí mRNA hoặc tân ngữ sau `resolve`, `register`.

**Core meaning — English:** The precise nanometer- or micrometer-scale spatial location attributes ($X, Y, Z$) assigned to individual detected RNA molecules relative to the cell membrane, nucleus, and cytoplasmic compartments.

**Core meaning & mental image — Tiếng Việt:** Tọa độ bản sao dưới tế bào; hãy hình dung việc gắn một con chip định vị siêu vi vào từng hạt mưa mRNA bên trong ngôi nhà tế bào: hệ thống ghi nhận chính xác hạt mưa nào đang nằm trong phòng ngủ (nhân tế bào), hạt mưa nào đang trôi trong phòng khách (tế bào chất), và hạt mưa nào đã bay ra ngoài hàng rào (màng tế bào).

**Grammar & collocations:** `map subcellular transcript coordinates` — lập bản đồ tọa độ bản sao dưới tế bào; `extract subcellular transcript coordinates` — trích xuất tọa độ bản sao dưới tế bào; `analysis of subcellular transcript coordinates` — phân tích tọa độ bản sao dưới tế bào.

**Register & nuance:** `in situ transcriptomics (e.g., MERFISH, SeqFISH+, Xenium, CosMx)` — vượt qua giới hạn của cấp độ tế bào; cho phép nghiên cứu sự phân cực phân tử (*transcript polarization*), vận chuyển mRNA dọc theo sợi trục thần kinh (*axonal transport*), hoặc sự tích tụ hạt nhân (*nuclear retention*).

**Examples:** `By resolving subcellular transcript coordinates, the imaging assay demonstrated asymmetric localization of beta-actin mRNA to the leading edge of migrating glioblastoma cells.` → Bằng cách phân giải tọa độ bản sao dưới tế bào, xét nghiệm hình ảnh đã chứng minh sự định vị bất đối xứng của mRNA beta-actin tại bờ dẫn đầu của các tế bào u nguyên bào đệm đang di cư.

**Liên kết tiếng Hàn:** `세포이하 전사체 좌표` (細胞以下 轉寫體 座標) — các tọa độ không gian chính xác của phân tử phiên mã ở mức dưới tế bào.

---

## 11. in situ rolling circle amplification /ɪn ˈsaɪtuː ˈroʊlɪŋ ˈsɜrkəl ˌæmpləfəˈkeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ khuếch đại tín hiệu huỳnh quang hoặc tân ngữ sau `initiate`, `utilize`.

**Core meaning — English:** An enzymatic isothermal DNA amplification method conducted directly inside fixed tissue, using Phi29 polymerase to generate long, tandem-repeated single-stranded DNA concatemers from circularized padlock probes, amplifying signal for in situ sequencing.

**Core meaning & mental image — Tiếng Việt:** Kỹ thuật khuếch đại vòng quay tại chỗ (in situ RCA); hãy hình dung một chiếc máy in cuộn giấy tròn quay tít không ngừng: từ một khuôn mẫu ADN tròn nhỏ xíu (padlock probe) nhận diện đúng phân tử RNA mục tiêu, enzym kéo dài một dải băng ADN dài chứa hàng trăm bản sao lặp lại cuộn tròn thành một quả cầu nhỏ phát sáng rực rỡ dưới kính hiển vi.

**Grammar & collocations:** `initiate in situ rolling circle amplification` — khởi động kỹ thuật khuếch đại vòng quay tại chỗ; `protocol for in situ rolling circle amplification` — quy trình khuếch đại vòng quay tại chỗ; `efficiency of in situ rolling circle amplification` — hiệu suất khuếch đại vòng quay tại chỗ.

**Register & nuance:** `in situ sequencing (ISS, e.g., Cartana, 10x Xenium predecessor)` — biến một phân tử RNA đơn lẻ vô hình thành một đốm phân tử ADN dạng cuộn cầu (DNA nanoball) có đường kính ~1 µm phát tín hiệu quang học cực mạnh, cho phép giải trình tự trực tiếp bằng kính hiển vi huỳnh quang.

**Examples:** `By performing in situ rolling circle amplification, the padlock probes were converted into dense DNA nanoballs displaying bright, localized signals during base-by-base sequencing.` → Bằng cách thực hiện kỹ thuật khuếch đại vòng quay tại chỗ, các đầu dò ổ khóa đã được chuyển đổi thành các quả cầu nano ADN đậm đặc hiển thị các tín hiệu sáng và khu trú trong quá trình giải trình tự từng bazơ.

**Liên kết tiếng Hàn:** `제자리 롤링 서클 증폭` (제자리 rolling circle 增幅) — sự khuếch đại vòng xoay liên tục trực tiếp tại chỗ trên mô cố định.

---

## 12. tissue histology coregistration /ˈtɪʃuː hɪˈstɑlədʒi ˌkoʊˌrɛdʒəˈstreɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ gắn kết dữ liệu hình ảnh với dữ liệu phân tử hoặc tân ngữ sau `perform`, `align`.

**Core meaning — English:** The computational alignment and precise spatial overlay of high-resolution brightfield histological stain images (such as H&E) with underlying spatial transcriptomic molecular coordinate matrices.

**Core meaning & mental image — Tiếng Việt:** Sự đối chiếu / đồng đăng ký mô học; hãy hình dung việc đặt một tấm phim chụp X-quang trong suốt có vẽ màu các tế bào hồng cầu tím và hồng (nhuộm H&E) áp khít từng milimet lên một tấm bản đồ nhiệt độ điện tử phát sáng: mọi đốm sáng phân tử RNA đều khớp chính xác vào từng cấu trúc nhân tế bào và màng sợi collagen bên dưới.

**Grammar & collocations:** `perform tissue histology coregistration` — thực hiện sự đối chiếu mô học; `accurate tissue histology coregistration` — sự đối chiếu mô học chính xác; `algorithms for tissue histology coregistration` — các thuật toán phục vụ sự đối chiếu mô học.

**Register & nuance:** `computational pathology & spatial bio-image informatics` — bước tiền xử lý sống còn; nếu việc đăng ký lệch dù chỉ vài micromet, các bản sao gen giải trình tự sẽ bị gán nhầm cho các cấu trúc mô học lân cận (ví dụ gán gen ung thư vào mô đệm bình thường).

**Examples:** `Precise tissue histology coregistration ensured that the high expression of angiogenic growth factors mapped exactly onto proliferating vascular lumens observed in the H&E image.` → Sự đối chiếu mô học chính xác đã bảo đảm rằng mức biểu hiện cao của các yếu tố tăng trưởng sinh mạch được ánh xạ chuẩn xác lên các lòng mạch máu đang tăng sinh quan sát thấy trong hình ảnh nhuộm H&E.

**Liên kết tiếng Hàn:** `조직 조직학 공동 정합` (組織 組織學 共同 整合) — sự đồng chỉnh và khớp nối dữ liệu hình thái mô học với dữ liệu phân tử.

---

## 13. spatial transcriptomic fiducial frame /ˈspeɪʃəl ˌtrænskrɪpˈtɑmɪk fəˈduːʃəl freɪm/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tân ngữ định vị tọa độ hoặc chủ ngữ chuẩn hóa hình ảnh quang học.

**Core meaning — English:** The physical pattern of fluorescent or optical registration markers printed on a capture slide, providing geometric reference coordinates to align microscope imagery with spatial sequencing grids.

**Core meaning & mental image — Tiếng Việt:** Khung chuẩn / khung mốc định vị phiên mã không gian; hãy hình dung bốn dấu chữ thập màu đen được in ở bốn góc của một bản đồ quân sự: các dấu chữ thập này là điểm tựa cố định bất biến giúp người chỉ huy đặt tấm bản đồ chụp từ vệ tinh khớp khít hoàn hảo với bản đồ trinh sát mặt đất.

**Grammar & collocations:** `align with the spatial transcriptomic fiducial frame` — căn chỉnh với khung mốc định vị phiên mã không gian; `calibrate the spatial transcriptomic fiducial frame` — hiệu chuẩn khung mốc định vị phiên mã không gian; `detect the spatial transcriptomic fiducial frame` — phát hiện khung mốc định vị phiên mã không gian.

**Register & nuance:** `instrumentation & image processing pipeline` — từ *fiducial* bắt nguồn từ trắc địa và thiên văn học; là điều kiện tiên quyết trong phần mềm như Space Ranger để nhận diện vùng mô (*tissue detection*) và xoay/co giãn hình ảnh kính hiển vi cho khớp với tọa độ ma trận giếng giải trình tự.

**Examples:** `Software algorithms automatically detected the corners of the spatial transcriptomic fiducial frame, correcting for microscopic stage drift and optical barrel distortion.` → Các thuật toán phần mềm đã tự động phát hiện các góc của khung mốc định vị phiên mã không gian, hiệu chỉnh độ trôi bàn kính hiển vi và độ biến dạng quang học hình thùng.

**Liên kết tiếng Hàn:** `공간 전사체학 기준 프레임` (空間 轉寫體學 基準 frame) — khung mốc tọa độ chuẩn định vị không gian phiên mã.

---

## 14. multimodal histological registration /ˌmʌltiˈmoʊdəl ˌhɪstəˈlɑdʒɪkəl ˌrɛdʒəˈstreɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ đồng bộ hóa các lớp dữ liệu hoặc tân ngữ sau `implement`, `achieve`.

**Core meaning — English:** The computational transformation and spatial alignment of disparate imaging modalities—such as brightfield H&E, multi-channel immunofluorescence, and mass spectrometry imaging—into a unified pixel coordinate matrix.

**Core meaning & mental image — Tiếng Việt:** Sự đăng ký mô học đa phương thức; hãy hình dung một cuốn sách giải phẫu 3D trong suốt gồm 3 trang sách khác nhau: trang 1 là ảnh chụp quang học thông thường, trang 2 là ảnh chụp huỳnh quang các loại protein, trang 3 là bản đồ nhiệt độ khối lượng của các chất chuyển hóa; sự đăng ký đa phương thức bảo đảm cả 3 trang sách được dập ghim thẳng tắp, khớp từng milimet khi nhìn xuyên qua.

**Grammar & collocations:** `achieve multimodal histological registration` — đạt được sự đăng ký mô học đa phương thức; `framework for multimodal histological registration` — khuôn khổ đăng ký mô học đa phương thức; `accuracy of multimodal histological registration` — độ chính xác của việc đăng ký mô học đa phương thức.

**Register & nuance:** `computational digital pathology & multi-modal spatial integration` — vượt ra ngoài việc ghép nối hai ảnh đơn thuần; sử dụng các phép biến đổi phi tuyến tính (*non-rigid affine and b-spline transformations*) để hiệu chỉnh sự co rút mô xảy ra giữa các bước xử lý hóa chất khác nhau.

**Examples:** `Achieving non-rigid multimodal histological registration allowed pathologists to interrogate single-cell spatial transcriptomics alongside deep multiplexed antibody proteomic markers.` → Đạt được sự đăng ký mô học đa phương thức phi cứng nhắc đã cho phép các nhà giải phẫu bệnh đối chiếu phiên mã không gian tế bào đơn bên cạnh các dấu ấn protein kháng thể đa hợp sâu rộng.

**Liên kết tiếng Hàn:** `다중 모달 조직학 정합` (多重 modal 組織學 整合) — sự đồng khớp tọa độ giữa các phương thức hình ảnh mô học đa dạng.

---

## 15. microenvironmental niche deconvolution /ˌmaɪkroʊɪnˌvaɪrənˈmɛntəl nɪtʃ ˌdiːkɑnvəˈluːʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Làm chủ ngữ hoặc tân ngữ chỉ thuật toán toán học phân rã tỷ lệ các loại tế bào bên trong một điểm ảnh hoặc vùng mô.

**Core meaning — English:** The mathematical decomposition of mixed transcriptomic profiles within multi-cellular spatial capture spots into individual cell-type proportions and localized cell-state signatures using single-cell reference atlases.

**Core meaning & mental image — Tiếng Việt:** Sự phân rã / giải chập hốc vi môi trường; hãy hình dung một ly sinh tố hoa quả hỗn hợp gồm chuối, dâu tây và xoài xay nhuyễn: thuật toán giải chập hoạt động như một cỗ máy phân tích quang phổ ngược, chỉ ra chính xác trong ly sinh tố đó có 40% chuối, 35% dâu tây và 25% xoài mà không cần phải nhặt từng miếng quả riêng rẽ.

**Grammar & collocations:** `perform microenvironmental niche deconvolution` — thực hiện giải chập hốc vi môi trường; `algorithms for microenvironmental niche deconvolution` — các thuật toán giải chập hốc vi môi trường; `accuracy of microenvironmental niche deconvolution` — độ chính xác của giải chập hốc vi môi trường.

**Register & nuance:** `spatial computational biostatistics (e.g.,形式 RCTD, Seurat v4, SPOTlight)` — kỹ thuật bắt buộc khi phân tích dữ liệu Visium thế hệ 1 (nơi mỗi capture spot rộng 55 µm chứa từ 5 đến 15 tế bào khác nhau); dùng ma trận tham chiếu từ scRNA-seq để bóc tách thành phần tế bào.

**Examples:** `Bayesian microenvironmental niche deconvolution parsed heterogeneous sequencing spots into distinct ratios of malignant epithelial clones, cancer-associated fibroblasts, and infiltrating leukocytes.` → Thuật toán giải chập hốc vi môi trường theo trường phái Bayes đã bóc tách các điểm giải trình tự không đồng nhất thành các tỷ lệ rõ rệt của các dòng biểu mô ác tính, nguyên bào sợi liên kết với ung thư và bạch cầu xâm nhập.

**Liên kết tiếng Hàn:** `미세환경 틈새 탈합성 / 역합성` (微細環境 틈새 脫合成 / deconvolution) — sự giải chập / bóc tách thành phần các vi hốc môi trường tế bào.

---

## 16. cellular neighborhood phenotyping /ˈsɛljələr ˈneɪbərˌhʊd ˈfiːnəˌtaɪpɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ phân loại các cộng đồng tế bào hoặc tân ngữ sau `execute`, `reveal`.

**Core meaning — English:** The quantitative analytical characterization of localized multicellular micro-domains, clustering cells based on the recurring composition and spatial frequencies of surrounding cell types rather than single-cell identities alone.

**Core meaning & mental image — Tiếng Việt:** Sự phân loại kiểu hình láng giềng tế bào; hãy hình dung một nhà xã hội học không chỉ nhìn vào một cá nhân đơn lẻ, mà quan sát cả một khu phố: nơi đây gồm một bác sĩ, hai lính cứu hỏa và năm công nhân sinh sống sát vách nhau tạo thành "khu phố phản ứng nhanh", khác hẳn với "khu phố hưu trí" gồm toàn người già tĩnh lặng.

**Grammar & collocations:** `execute cellular neighborhood phenotyping` — thực hiện phân loại kiểu hình láng giềng tế bào; `insights from cellular neighborhood phenotyping` — các hiểu biết sâu sắc từ việc phân loại kiểu hình láng giềng tế bào; `spatial cellular neighborhood phenotyping` — sự phân loại kiểu hình láng giềng tế bào không gian.

**Register & nuance:** `tumor immunology & spatial computational biology (e.g., Nolan lab)` — dịch chuyển trọng tâm từ bản sắc tế bào đơn lẻ sang cấu trúc cộng đồng; chứng minh rằng số phận của một tế bào ung thư bị quyết định bởi "những người hàng xóm" bao quanh nó (như tế bào T ức chế hay đại thực bào M2).

**Examples:** `Automated cellular neighborhood phenotyping revealed distinct immunosuppressive niches in breast cancer, where regulatory T cells persistently clustered around exhausted CD8+ lymphocytes.` → Sự phân loại kiểu hình láng giềng tế bào tự động đã làm lộ rõ các hốc ức chế miễn dịch rõ rệt trong ung thư vú, nơi các tế bào T điều hòa liên tục tập cụm xung quanh các tế bào lympho CD8+ đã kiệt quệ.

**Liên kết tiếng Hàn:** `세포 이웃 표현형 분석` (細胞 이웃 表現型 分析) — sự định lượng và phân loại kiểu hình các vi cộng đồng tế bào láng giềng.

---

## 17. spatial distance metric /ˈspeɪʃəl ˈdɪstəns ˈmɛtrɪk/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tân ngữ sau `define`, `calculate`, `utilize` khi lượng hóa cự ly giữa các tế bào.

**Core meaning — English:** A formalized mathematical function (such as Euclidean distance, geodesic tissue distance, or k-nearest neighbor radius) used to measure the physical separation between distinct cellular entities or molecular puncta.

**Core meaning & mental image — Tiếng Việt:** Thước đo khoảng cách không gian; hãy hình dung việc đo khoảng cách giữa hai ngôi làng: không chỉ dùng thước kẻ kéo một đường chim bay thẳng băng qua đỉnh núi (khoảng cách Euclidean), mà đo bằng chiều dài thực tế của con đường mòn uốn lượn men theo bờ suối (khoảng cách trắc địa geodesic).

**Grammar & collocations:** `formulate a spatial distance metric` — xây dựng một thước đo khoảng cách không gian; `calculate using a spatial distance metric` — tính toán bằng cách sử dụng thước đo khoảng cách không gian; `choice of spatial distance metric` — sự lựa chọn thước đo khoảng cách không gian.

**Register & nuance:** `spatial biostatistics & point pattern analysis` — cốt lõi trong các thuật toán phân tích điểm (*point pattern statistics* như Ripley's K, cross-pair correlation function); giúp xác định xem hai loại tế bào đang tích cực tìm đến nhau (*attraction*) hay xua đuổi nhau (*repulsion*).

**Examples:** `Using a geodesic spatial distance metric rather than simple Euclidean distance accounted for tissue folds, providing realistic measures of paracrine signaling ranges.` → Việc sử dụng một thước đo khoảng cách không gian trắc địa thay vì khoảng cách Euclidean đơn giản đã tính đến các nếp gấp mô, cung cấp các phép đo thực tế về tầm tác động của tín hiệu cận tiết.

**Liên kết tiếng Hàn:** `공간 거리 척도` (空間 距離 尺度) — hàm toán học / thước đo khoảng cách không gian giữa các thực thể tế bào.

---

## 18. ligand-receptor spatial colocalization /ˈlaɪɡənd rɪˈsɛptər ˈspeɪʃəl ˌkoʊˌloʊkələˈzeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chứng minh tương tác cận tiết hoặc tân ngữ sau `infer`, `calculate`.

**Core meaning — English:** The statistical and physical verification that a signaling ligand and its corresponding cognate receptor are expressed within immediate physical proximity in tissue space, establishing putative cell-cell communication channels.

**Core meaning & mental image — Tiếng Việt:** Sự đồng định vị không gian phối tử-thụ thể; hãy hình dung một máy phát sóng vô tuyến cực ngắn (tế bào tiết phối tử) và một chiếc ăng-ten thu sóng (tế bào mang thụ thể): sự đồng định vị xảy ra khi hai thiết bị này được đặt cách nhau chỉ vài mét trong cùng một căn phòng, bảo đảm tín hiệu truyền đi được bắt trọn vẹn mà không bị tiêu tán giữa đường.

**Grammar & collocations:** `infer ligand-receptor spatial colocalization` — suy luận sự đồng định vị không gian phối tử-thụ thể; `quantify ligand-receptor spatial colocalization` — định lượng sự đồng định vị không gian phối tử-thụ thể; `evidence of ligand-receptor spatial colocalization` — bằng chứng về sự đồng định vị không gian phối tử-thụ thể.

**Register & nuance:** `spatial transcriptomic network analysis (e.g., CellChat, Giotto)` — khắc phục nhược điểm lớn của single-cell thông thường vốn dự đoán tương tác giả tạo giữa các tế bào thực tế nằm ở hai đầu đối diện của khối u; phân tích không gian chỉ tính những tương tác diễn ra trong bán kính khuếch tán thực tế (10-50 µm).

**Examples:** `Calculating ligand-receptor spatial colocalization confirmed that PD-L1 expressing macrophages were physically interacting with PD-1 positive cytotoxic T cells at the invasive tumor margin.` → Việc tính toán sự đồng định vị không gian phối tử-thụ thể đã xác nhận rằng các đại thực bào biểu hiện PD-L1 đang tương tác vật lý trực tiếp với các tế bào T độc tế bào dương tính với PD-1 tại rìa khối u xâm lấn.

**Liên kết tiếng Hàn:** `리간드-수용체 공간적 공동 국소화` (ligand-受容體 空間的 共同 局所化) — sự cùng định vị không gian giữa phối tử và thụ thể tương ứng.

---

## 19. paracrine signaling gradient /ˈpærəkrɪn ˈsɪɡnəlɪŋ ˈɡreɪdiənt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Làm chủ ngữ hoặc tân ngữ chỉ sự suy giảm nồng độ phối tử từ tế bào tiết ra vùng mô đệm xung quanh.

**Core meaning — English:** The spatially continuous concentration decay of secreted growth factors, chemokines, or morphogens radiating outward from a localized source cell into the interstitial microenvironment.

**Core meaning & mental image — Tiếng Việt:** Độ dốc / gradient tín hiệu cận tiết; hãy hình dung một lò sưởi đỏ rực đặt giữa một căn phòng lạnh: nhiệt độ ấm áp nhất ở sát ngay cạnh lò sưởi, rồi nguội dần theo khoảng cách khi bước ra xa về phía các góc phòng — các tế bào nằm ở các khoảng cách khác nhau sẽ cảm nhận nồng độ tín hiệu khác nhau và phản ứng khác nhau.

**Grammar & collocations:** `map a paracrine signaling gradient` — lập bản đồ độ dốc tín hiệu cận tiết; `steep paracrine signaling gradient` — độ dốc tín hiệu cận tiết dốc đứng; `dissipate the paracrine signaling gradient` — làm tiêu tán độ dốc tín hiệu cận tiết.

**Register & nuance:** `developmental biology & tumor microenvironment dynamics` — spatial transcriptomics cho phép lần đầu tiên trực quan hóa gradient này bằng các phép đo nồng độ phân tử thực tế thay vì chỉ suy đoán trên lý thuyết mô hình toán học.

**Examples:** `Spatial profiling resolved a steep paracrine signaling gradient of CXCL12 radiating from perivascular fibroblasts toward CXCR4-positive glioblastoma stem cells.` → Phân tích không gian đã giải quyết được một độ dốc tín hiệu cận tiết CXCL12 dốc đứng tỏa ra từ các nguyên bào sợi quanh mạch về phía các tế bào gốc u nguyên bào đệm dương tính với CXCR4.

**Liên kết tiếng Hàn:** `측분비 신호 전달 기울기 / 구배` (傍分泌 信號 傳達 句配) — độ dốc suy giảm nồng độ của sự truyền tín hiệu cận tiết.

---

## 20. stromal cell proximity indexing /ˈstroʊməl sɛl prɑkˈsɪməti ˈɪndɛksɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ đo đạc ảnh hưởng vi môi trường hoặc tân ngữ sau `calculate`, `utilize`.

**Core meaning — English:** The quantitative measurement and mathematical scoring of how closely individual malignant cells are situated relative to specific non-tumor stromal constituents, such as cancer-associated fibroblasts or endothelial cells.

**Core meaning & mental image — Tiếng Việt:** Sự đánh chỉ số khoảng cách tiếp cận tế bào mô đệm; hãy hình dung một chiếc la bàn radar trên máy bay chiến đấu: radar liên tục đo khoảng cách chính xác từ máy bay địch (tế bào ung thư) tới các trạm radar tiếp tế phòng thủ (nguyên bào sợi), tính toán xem máy bay địch có nằm trong tầm che chắn hỏa lực hay không.

**Grammar & collocations:** `compute stromal cell proximity indexing` — tính toán việc đánh chỉ số khoảng cách tế bào mô đệm; `value of stromal cell proximity indexing` — giá trị của sự đánh chỉ số khoảng cách tế bào mô đệm; `correlate with stromal cell proximity indexing` — tương quan với chỉ số tiếp cận tế bào mô đệm.

**Register & nuance:** `computational spatial oncology` — chỉ số định lượng phản ánh mức độ ảnh hưởng của mô đệm; chứng minh rằng các tế bào ung thư nằm gần tế bào mô đệm thường có kiểu hình kháng hóa trị và xâm lấn mạch mạnh hơn hẳn các tế bào nằm ở trung tâm khối u.

**Examples:** `High-resolution stromal cell proximity indexing revealed that tumor clones residing within thirty microns of cancer-associated fibroblasts expressed marked epithelial-mesenchymal transition genes.` → Sự đánh chỉ số khoảng cách tiếp cận tế bào mô đệm độ phân giải cao đã làm lộ rõ rằng các dòng khối u cư ngụ trong vòng ba mươi micromet tính từ nguyên bào sợi ung thư biểu hiện các gen chuyển tiếp biểu mô-trung mô rõ rệt.

**Liên kết tiếng Hàn:** `기질 세포 근접성 지수화` (基質 細胞 近接性 指數化) — sự lập chỉ số đo lường mức độ gần gũi / tiếp cận với tế bào chất nền.

---

## 21. immunofluorescence multiplexing overlay /ˌɪmjənoʊˌflʊˈrɛsəns ˈmʌltəˌplɛksɪŋ ˈoʊvərˌleɪ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Làm chủ ngữ tích hợp thông tin protein và ARN hoặc tân ngữ sau `generate`, `analyze`.

**Core meaning — English:** The simultaneous or co-registered visual superposition of multi-channel antibody-based protein fluorescence signals onto spatial transcriptomic mRNA distribution maps within the exact same histological section.

**Core meaning & mental image — Tiếng Việt:** Lớp phủ đa hợp miễn dịch huỳnh quang; hãy hình dung việc xếp chồng hai tấm bản đồ trong suốt lên nhau: tấm thứ nhất hiển thị vị trí của các thông điệp mRNA (chỉ thị gen), tấm thứ hai hiển thị hình dạng và vị trí của các cỗ máy protein thực tế đang hoạt động (nhờ kháng thể huỳnh quang), tạo nên một bức tranh sinh học đa tầng hoàn mỹ.

**Grammar & collocations:** `generate an immunofluorescence multiplexing overlay` — tạo ra một lớp phủ đa hợp miễn dịch huỳnh quang; `validate with an immunofluorescence multiplexing overlay` — kiểm chứng bằng lớp phủ đa hợp miễn dịch huỳnh quang; `analyze the immunofluorescence multiplexing overlay` — phân tích lớp phủ đa hợp miễn dịch huỳnh quang.

**Register & nuance:** `spatial multi-omics integration` — kết hợp giữa transcriptomics và proteomics (như công nghệ CosMx SMI hay Xenium kết hợp kháng thể); kiểm chứng xem việc biểu hiện mRNA có thực sự chuyển dịch thành protein chức năng tương ứng trên cùng một tế bào hay không.

**Examples:** `An immunofluorescence multiplexing overlay of CD3 and pan-cytokeratin confirmed that active transcription of interferon-gamma originated strictly within infiltrating lymphocytes rather than malignant tumor nests.` → Một lớp phủ đa hợp miễn dịch huỳnh quang của CD3 và pan-cytokeratin đã xác nhận rằng sự phiên mã tích cực của interferon-gamma bắt nguồn nghiêm ngặt từ bên trong các tế bào lympho xâm nhập chứ không phải các ổ khối u ác tính.

**Liên kết tiếng Hàn:** `면역형광 다중화 중첩` (免疫螢光 多重化 重疊) — sự xếp chồng tín hiệu đa kênh miễn dịch huỳnh quang lên dữ liệu phân tử.

---

## 22. spatial gene expression clustering /ˈspeɪʃəl dʒiːn ɪkˈsprɛʃən ˈklʌstərɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ phân vùng kiến trúc mô hoặc tân ngữ sau `perform`, `visualize`.

**Core meaning — English:** Unsupervised mathematical grouping of spatial coordinates or cells based on similarities in their multi-dimensional gene expression profiles while penalizing spatial discontinuities to identify anatomically cohesive functional tissue domains.

**Core meaning & mental image — Tiếng Việt:** Sự phân cụm biểu hiện gen không gian; hãy hình dung một họa sĩ lập bản đồ địa lý: thay vì tô màu ngẫu nhiên theo từng ngôi nhà, ông dùng một thuật toán gom các ngôi nhà có cùng kiểu kiến trúc mái ngói đỏ và nằm gần nhau lại thành "khu phố cổ", phân biệt ranh giới rõ ràng với "khu phố hiện đại" mái bằng bên cạnh.

**Grammar & collocations:** `perform spatial gene expression clustering` — thực hiện phân cụm biểu hiện gen không gian; `algorithms for spatial gene expression clustering` — các thuật toán phân cụm biểu hiện gen không gian; `spatial gene expression clustering results` — các kết quả phân cụm biểu hiện gen không gian.

**Register & nuance:** `spatial bioinformatics (e.g., BayesSpace, SpaGCN, Seurat spatial)` — khác với phân cụm đơn thuần trên UMAP/t-SNE (vốn bỏ qua vị trí địa lý); các thuật toán này kết hợp thông tin láng giềng không gian (*spatial graph adjacency*) để tạo ra các cụm mô liên tục và có ý nghĩa giải phẫu thực sự.

**Examples:** `Applying spatial gene expression clustering resolved the six distinct cortical laminae of the human brain purely from unsupervised transcriptomic coordinate data.` → Việc áp dụng phân cụm biểu hiện gen không gian đã phân giải được sáu lớp vỏ não riêng biệt của não người thuần túy từ dữ liệu tọa độ bản sao không giám sát.

**Liên kết tiếng Hàn:** `공간 유전자 발현 군집화` (空間 遺傳子 發現 群集化) — sự phân cụm dữ liệu biểu hiện gen có tính đến tọa độ không gian mô.

---

## 23. spatial gene co-expression module /ˈspeɪʃəl dʒiːn koʊ ɪkˈsprɛʃən ˈmɑdʒul/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Làm chủ ngữ hoặc tân ngữ chỉ một nhóm gen cùng bật tắt đồng thời tại các vị trí giải phẫu cụ thể.

**Core meaning — English:** A coordinated network of functional genes whose transcriptional levels consistently rise and fall in unison across specific histological compartments, driven by shared localized microenvironmental stimuli.

**Core meaning & mental image — Tiếng Việt:** Mô-đun đồng biểu hiện gen không gian; hãy hình dung một dàn đèn sân khấu thông minh: mỗi khi một diễn viên bước vào một góc sân khấu ẩm ướt thiếu ánh sáng, cả một cụm gồm 10 bóng đèn chuyên dụng chống ẩm lập tức cùng bật sáng đồng bộ để hỗ trợ diễn viên hoàn thành cảnh diễn.

**Grammar & collocations:** `identify a spatial gene co-expression module` — nhận diện một mô-đun đồng biểu hiện gen không gian; `characterize spatial gene co-expression modules` — mô tả các mô-đun đồng biểu hiện gen không gian; `functional annotation of spatial gene co-expression modules` — chú giải chức năng của các mô-đun đồng biểu hiện gen không gian.

**Register & nuance:** `systems biology (e.g., spatial WGCNA)` — phân biệt với co-expression trong mẫu phân ly; ở đây tính đồng biểu hiện được điều khiển bởi vị trí địa lý thực tế (ví dụ: các gen đáp ứng tình trạng thiếu oxy cùng biểu hiện ở các vùng trung tâm hoại tử khối u).

**Examples:** `Spatial network analysis identified a prominent hypoxia-driven spatial gene co-expression module localized exclusively within ischemic, necrotic tumor cores.` → Phân tích mạng không gian đã nhận diện một mô-đun đồng biểu hiện gen không gian nổi bật do tình trạng thiếu oxy thúc đẩy vốn khu trú độc quyền bên trong các lõi khối u hoại tử và thiếu máu cục bộ.

**Liên kết tiếng Hàn:** `공간 유전자 공발현 모듈` (空間 遺傳子 共發現 module) — nhóm gen cùng phối hợp đồng biểu hiện theo vị trí không gian mô.

---

## 24. tertiary lymphoid structure cartography /ˈtɜrʃiˌɛri ˈlɪmˌfɔɪd ˈstrʌktʃər kɑrˈtɑɡrəfi/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ dự đoán đáp ứng miễn dịch hoặc tân ngữ sau `construct`, `map`.

**Core meaning — English:** The spatial identification, morphological mapping, and functional maturity classification of ectopic, lymph node-like immune aggregates forming within chronically inflamed non-lymphoid tissues or tumor beds.

**Core meaning & mental image — Tiếng Việt:** Phép lập bản đồ cấu trúc lympho bậc ba; hãy hình dung việc vẽ bản đồ các tiền đồn quân sự dã chiến: các chiến sĩ tế bào B và tế bào T tự động tập hợp lại ngay sát chiến trường khối u, xây dựng nên các pháo đài mini có trung tâm mầm mống để trực tiếp huấn luyện quân sĩ tiêu diệt tế bào ung thư tại chỗ.

**Grammar & collocations:** `construct tertiary lymphoid structure cartography` — xây dựng bản đồ cấu trúc lympho bậc ba; `clinical relevance of tertiary lymphoid structure cartography` — ý nghĩa lâm sàng của bản đồ cấu trúc lympho bậc ba; `tertiary lymphoid structure cartography in immuno-oncology` — phép lập bản đồ cấu trúc lympho bậc ba trong miễn dịch ung thư.

**Register & nuance:** `immuno-oncology & clinical spatial cartography` — cấu trúc lympho bậc ba (TLS) là dấu ấn sinh học dự báo bệnh nhân sẽ đáp ứng ngoạn mục với liệu pháp ức chế điểm kiểm soát miễn dịch (anti-PD-1); việc lập bản đồ không gian giúp phân biệt TLS trưởng thành (có trung tâm mầm) với các đám tụ tế bào viêm vô tổ chức.

**Examples:** `Detailed tertiary lymphoid structure cartography revealed that the density of mature germinal centers in the peri-tumoral stroma directly correlated with prolonged patient survival.` → Phép lập bản đồ cấu trúc lympho bậc ba chi tiết đã làm lộ rõ rằng mật độ của các trung tâm mầm trưởng thành trong mô đệm quanh khối u tương quan trực tiếp với sự sống sót kéo dài của bệnh nhân.

**Liên kết tiếng Hàn:** `3차 림프 구조 지도화 / 작도법` (3次 lymph 構造 地圖化) — sự lập bản đồ và phân loại các cấu trúc lympho cấp ba trong mô viêm.

---

## 25. microenvironment cartographic mapping /ˌmaɪkroʊɪnˈvaɪrənmənt ˌkɑrtəˈɡræfɪk ˈmæpɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Làm chủ ngữ xây dựng tập bản đồ bệnh học toàn diện hoặc tân ngữ sau `execute`, `pioneer`, `achieve`.

**Core meaning — English:** The comprehensive, high-resolution systematic cartography and multi-layered spatial visualization of all cellular populations, vascular structures, stromal components, and molecular signaling gradients across intact diseased tissue.

**Core meaning & mental image — Tiếng Việt:** Phép lập bản đồ địa đồ vi môi trường; hãy hình dung tấm bản đồ số Google Earth phiên bản tế bào học: người xem có thể phóng to từ toàn cảnh một khối u lớn của một bệnh nhân, thu nhỏ dần xuống từng khu phố tế bào, chạm vào từng mạch máu đang uốn lượn, và đọc tên từng phân tử RNA đang bay lơ lửng bên trong tế bào với độ nét tuyệt đối.

**Grammar & collocations:** `execute microenvironment cartographic mapping` — thực hiện phép lập bản đồ địa đồ vi môi trường; `advance of microenvironment cartographic mapping` — sự tiến bộ của phép lập bản đồ địa đồ vi môi trường; `atlas of microenvironment cartographic mapping` — tập bản đồ của phép lập bản đồ địa đồ vi môi trường.

**Register & nuance:** `systems oncology & digital pathology atlases (e.g., Human Tumor Atlas Network)` — sự hợp nhất đỉnh cao của tất cả các công nghệ phiên mã không gian, giải trình tự tại chỗ và thị giác máy tính; là công cụ tối thượng đưa y học cá thể hóa bước vào kỷ nguyên không gian thực chứng.

**Examples:** `Comprehensive microenvironment cartographic mapping of resected colorectal tumors uncovered unsuspected niches of immune evasion, transforming patient stratification.` → Phép lập bản đồ địa đồ vi môi trường toàn diện của các khối u đại trực tràng được cắt bỏ đã phát hiện các hốc lẩn tránh miễn dịch bất ngờ, làm biến đổi sâu sắc sự phân tầng bệnh nhân.

**Liên kết tiếng Hàn:** `미세환경 지도학적 매핑 / 작도` (微細環境 地圖學的 mapping) — sự lập bản đồ địa đồ toàn diện về vi môi trường mô học.

---

## Review in context (Part 1: Array Capture, Subcellular Imaging, and In Situ Hybridization)

In contemporary molecular biology, spatial omics technologies preserve the critical anatomical context that conventional single-cell suspensions destroy. To profile intact specimens, laboratories utilize **spatial barcoded array capture**, permeabilizing tissue sections directly over glass slides printed with positional oligonucleotide grids. However, obtaining pristine spatial signals requires strict optimization of **tissue permeabilization kinetics**, ensuring that mRNAs rapidly detach from cytoplasmic matrices without provoking tissue detachment. If digestive enzymes act too slowly or diffusely, the resulting **spatial RNA diffusion artifact** causes transcripts to blur horizontally across neighboring capture features, confounding boundary resolution. To overcome diffusion limitations, researchers deploy imaging-based platforms like **multiplexed error-robust FISH**, which leverages combinatorial fluorescent labeling alongside error-correcting codes to pinpoint single mRNA molecules. Central to this imaging strategy is **combinatorial barcode encoding**, where a small set of fluorophore channels is cyclically re-hybridized across consecutive rounds to represent thousands of unique genetic sequences. To read out these complex molecular barcodes, automated microscopes perform **sequential fluorescence readout**, capturing multi-channel image tiles before photobleaching the fluorophores and initiating the next round. When scaling this workflow to deep, three-dimensional tissues, maximizing **optical tissue clearing clearance** becomes paramount to eliminate light scattering from cellular lipids and achieve uniform refractive indices. In computational post-processing, automated pipelines process the resulting imagery through **single-molecule spot decoding**, matching raw optical diffraction points against codebooks to catalog target genes. To assign these detected molecules to individual cells, algorithms generate an accurate **cellular boundary segmentation mask**, tracing cell membranes to prevent the artificial pooling of transcripts between adjacent phenotypes. This spatial registration resolves distinct **subcellular transcript coordinates**, identifying whether mRNAs localize predominantly within the nucleus, cytoplasm, or along migrating cell edges. In alternative targeted approaches, investigators perform **in situ rolling circle amplification**, turning circularized padlock probes into dense, fluorescently bright DNA concatemers suitable for base-by-base sequencing. Finally, to align these molecular datasets with anatomical landmarks, specialists rely on precise **tissue histology coregistration**, overlaying molecular matrices onto high-resolution brightfield stains.

**Bản dịch tiếng Việt:**

Trong sinh học phân tử đương đại, các công nghệ đa học không gian bảo tồn bối cảnh giải phẫu quan trọng mà các huyền phù tế bào đơn phân ly thông thường phá hủy. Để lập hồ sơ các mẫu bệnh phẩm nguyên vẹn, các phòng thí nghiệm sử dụng **kỹ thuật bắt giữ RNA trên phiến kính gắn mã vạch không gian**, làm tăng tính thấm các lát cắt mô trực tiếp trên các phiến kính được in sẵn các lưới oligonucleotide định vị. Tuy nhiên, việc thu được các tín hiệu không gian nguyên bản đòi hỏi sự tối ưu hóa nghiêm ngặt **động học thẩm thấu / làm thủng màng mô**, bảo đảm rằng các mRNA nhanh chóng tách khỏi các khuôn tế bào chất mà không gây bong tróc mô. Nếu các enzym phân giải hoạt động quá chậm hoặc quá khuếch tán, **hiện tượng biến dạng / sai số do khuếch tán RNA không gian** phát sinh sẽ khiến các bản sao bị nhòe theo chiều ngang qua các đặc điểm thu bắt lân cận, làm sai lệch độ phân giải ranh giới. Để khắc phục các hạn chế khuếch tán, các nhà nghiên cứu triển khai các nền tảng dựa trên hình ảnh như **kỹ thuật lai huỳnh quang tại chỗ đa hợp chống lỗi (MERFISH)**, thứ tận dụng việc gắn nhãn huỳnh quang tổ hợp cùng với các mã sửa lỗi để xác định chính xác các phân tử mRNA đơn lẻ. Trọng tâm của chiến lược hình ảnh này là **sự mã hóa bằng mã vạch tổ hợp**, nơi một tập hợp nhỏ các kênh huỳnh quang được tái lai tuần hoàn qua các vòng liên tiếp để đại diện cho hàng ngàn chuỗi di truyền độc nhất. Để đọc các mã vạch phân tử phức tạp này, các kính hiển vi tự động thực hiện **sự đọc tín hiệu huỳnh quang tuần tự**, chụp các ô hình ảnh đa kênh trước khi tẩy huỳnh quang và bắt đầu vòng tiếp theo. Khi mở rộng quy trình làm việc này sang các mô ba chiều sâu, việc tối đa hóa **độ thông suốt / khoảng thông quang nhờ làm trong suốt mô** trở thành điều tối quan trọng để loại bỏ sự tán xạ ánh sáng từ lipid tế bào và đạt được các chỉ số khúc xạ đồng đều. Trong quá trình hậu xử lý tính toán, các đường ống tự động xử lý hình ảnh thu được thông qua **sự giải mã đốm phân tử đơn lẻ**, khớp các điểm nhiễu xạ quang học thô với các cuốn từ điển mã để phân loại các gen mục tiêu. Để gán các phân tử được phát hiện này vào từng tế bào riêng lẻ, các thuật toán tạo ra một **mặt nạ phân đoạn ranh giới tế bào** chính xác, lần theo màng tế bào để ngăn chặn việc gộp chung các bản sao giả tạo giữa các kiểu hình liền kề. Sự đăng ký không gian này phân giải các **tọa độ bản sao dưới tế bào** riêng biệt, xác định xem mRNA khu trú chủ yếu bên trong nhân, tế bào chất hay dọc theo các rìa tế bào đang di cư. Trong các phương pháp tiếp cận nhắm đích thay thế, các nhà điều tra thực hiện **kỹ thuật khuếch đại vòng quay tại chỗ (in situ RCA)**, biến các đầu dò ổ khóa tròn thành các chuỗi concatemer ADN huỳnh quang sáng và đậm đặc thích hợp cho việc giải trình tự từng bazơ. Cuối cùng, để căn chỉnh các bộ dữ liệu phân tử này với các mốc giải phẫu, các chuyên gia dựa vào **sự đối chiếu / đồng đăng ký mô học** chính xác, phủ các ma trận phân tử lên các vết nhuộm trường sáng độ phân giải cao.

---

## Review in context (Part 2: Histological Registration, Niche Deconvolution, and Spatial Neighborhood Cartography)

At the macro-architectural scale, constructing high-fidelity spatial atlases begins by calibrating imagery against the printed **spatial transcriptomic fiducial frame**, ensuring geometric congruence across multi-slide experiments. To integrate disparate diagnostic channels, pathologists execute **multimodal histological registration**, harmonizing darkfield immunofluorescence, mass spectrometry imaging, and brightfield microscopy into a unified analytical plane. Where capture spots encapsulate multicellular mixtures, biostatisticians apply **microenvironmental niche deconvolution**, decomposing compound transcriptional profiles into probabilistic cell-type fractions. This deconvolution enables **cellular neighborhood phenotyping**, classifying tissue micro-domains according to the spatial frequencies and compositions of surrounding cellular subsets. To rigorously quantify spatial relationships, bioinformaticians define an objective **spatial distance metric**, measuring physical distances along tissue contours to capture biological dispersion accurately. Within these calibrated spaces, investigators analyze localized paracrine communication by assessing **ligand-receptor spatial colocalization**, filtering out distant expression pairs that cannot physically interact. This proximity mapping readily tracks how a steep **paracrine signaling gradient** shapes neighboring cellular phenotypes, such as vascular endothelia responding to localized VEGF secretions. To evaluate immune evasion mechanisms in cancer biopsies, researchers calculate **stromal cell proximity indexing**, establishing whether immunosuppressive fibroblasts physically encase malignant clones. By pairing transcriptomic channels with an **immunofluorescence multiplexing overlay**, analysts directly validate that mRNA signals correspond to functional surface proteins on identical tissue sections. Using unsupervised machine-learning algorithms, bioinformaticians perform **spatial gene expression clustering**, delineating tissue compartments and pathological domains based on joint geographic and transcriptional coherence. Within these clustered compartments, statistical algorithms extract each **spatial gene co-expression module**, identifying gene networks that respond coordinately to localized microenvironmental stressors like hypoxia. In clinical oncology, these cartographic approaches culminate in **tertiary lymphoid structure cartography**, quantifying the maturation, density, and spatial distribution of ectopic immune centers that predict immunotherapy success. Ultimately, integrating these dimensional layers achieves comprehensive **microenvironment cartographic mapping**, unlocking revolutionary insights into the structural organization of human disease.

**Bản dịch tiếng Việt:**

Ở quy mô kiến trúc vĩ mô, việc xây dựng các tập bản đồ không gian có độ trung thực cao bắt đầu bằng việc hiệu chuẩn hình ảnh dựa trên **khung chuẩn / khung mốc định vị phiên mã không gian** được in sẵn, bảo đảm sự tương đồng hình học xuyên suốt các thí nghiệm đa phiến kính. Để tích hợp các kênh chẩn đoán khác nhau, các nhà giải phẫu bệnh thực hiện **sự đăng ký mô học đa phương thức**, hài hòa miễn dịch huỳnh quang trường tối, hình ảnh khối phổ và kính hiển vi trường sáng vào một mặt phẳng phân tích thống nhất. Ở những nơi các điểm thu bắt bao bọc các hỗn hợp đa tế bào, các nhà thống kê sinh học áp dụng **sự phân rã / giải chập hốc vi môi trường**, phân rã các hồ sơ phiên mã hỗn hợp thành các tỷ lệ phân số loại tế bào mang tính xác suất. Sự giải chập này cho phép **sự phân loại kiểu hình láng giềng tế bào**, phân loại các vi miền mô theo tần số không gian và thành phần của các phân nhóm tế bào bao quanh. Để định lượng nghiêm ngặt các mối quan hệ không gian, các nhà tin sinh học xác định một **thước đo khoảng cách không gian** khách quan, đo đạc khoảng cách vật lý dọc theo các đường viền mô để nắm bắt chính xác sự phân tán sinh học. Bên trong các không gian đã hiệu chuẩn này, các nhà điều tra phân tích giao tiếp cận tiết cục bộ bằng cách đánh giá **sự đồng định vị không gian phối tử-thụ thể**, lọc bỏ các cặp biểu hiện ở xa không thể tương tác vật lý với nhau. Phép lập bản đồ khoảng cách này dễ dàng theo dõi cách một **độ dốc / gradient tín hiệu cận tiết** dốc đứng định hình các kiểu hình tế bào láng giềng, chẳng hạn như nội mô mạch máu đáp ứng với các bài tiết VEGF cục bộ. Để đánh giá các cơ chế lẩn tránh miễn dịch trong các sinh thiết ung thư, các nhà nghiên cứu tính toán **sự đánh chỉ số khoảng cách tiếp cận tế bào mô đệm**, xác định xem các nguyên bào sợi ức chế miễn dịch có bao bọc các dòng ác tính về mặt vật lý hay không. Bằng cách ghép nối các kênh phiên mã với một **lớp phủ đa hợp miễn dịch huỳnh quang**, các nhà phân tích kiểm chứng trực tiếp rằng các tín hiệu mRNA tương ứng với các protein bề mặt chức năng trên cùng một lát cắt mô. Sử dụng các thuật toán máy học không giám sát, các nhà tin sinh học thực hiện **sự phân cụm biểu hiện gen không gian**, phân định các khoang mô và các miền bệnh lý dựa trên sự gắn kết chặt chẽ giữa địa lý và phiên mã. Bên trong các khoang phân cụm này, các thuật toán thống kê trích xuất từng **mô-đun đồng biểu hiện gen không gian**, nhận diện các mạng lưới gen cùng phối hợp đáp ứng với các yếu tố gây căng thẳng vi môi trường cục bộ như tình trạng thiếu oxy. Trong ung thư học lâm sàng, các phương pháp tiếp cận địa đồ này đạt đến đỉnh cao trong **phép lập bản đồ cấu trúc lympho bậc ba**, định lượng sự trưởng thành, mật độ và sự phân bố không gian của các trung tâm miễn dịch lạc chỗ vốn dự đoán sự thành công của liệu pháp miễn dịch. Cuối cùng, việc tích hợp các lớp thứ nguyên này đạt được **phép lập bản đồ địa đồ vi môi trường** toàn diện, mở khóa những hiểu biết mang tính cách mạng về tổ chức cấu trúc của bệnh lý ở người.
