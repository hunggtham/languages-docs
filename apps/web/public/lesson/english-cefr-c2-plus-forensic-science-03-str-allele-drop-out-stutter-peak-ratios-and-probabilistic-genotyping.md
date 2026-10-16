# C2+ Vocabulary 03 — Forensic STR allele drop-out, capillary electrophoresis stutter ratios, and continuous probabilistic genotyping

This lesson examines advanced forensic DNA interpretation and statistical biostatistics in complex criminal casework. The conceptual trajectory begins with low-template DNA amplification dynamics, PCR strand slippage, forward and reverse stutter peak ratios, baseline noise floors, and stochastic allelic drop-out or drop-in phenomena, progressing into continuous probabilistic genotyping algorithms, Markov chain Monte Carlo mixture deconvolution, peak height variance modeling, and likelihood ratio weight-of-evidence calculations under competing propositions.

---

## 1. low-template DNA amplification /loʊ ˈtɛmplɪt ˌdiːɛnˈeɪ ˌæmpləfəˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ chỉ quy trình nhân bản ADN mẫu cực ít (*perform*, *subject to*, *interpret*).

**Core meaning — English:** The polymerase chain reaction amplification of minute quantities of human genomic DNA (typically less than 100 to 200 picograms, equivalent to fewer than 15 to 30 diploid cells), which is prone to severe stochastic sampling variation.

**Core meaning & mental image — Tiếng Việt:** Sự khuếch đại ADN mẫu hàm lượng thấp (ADN nồng độ cực thấp). Hãy hình dung một dấu vân tay lướt qua chuôi dao chỉ để lại vài tế bào biểu mô mỏng manh; khi kỹ thuật viên cố gắng nhân bản số ít phân tử ADN này bằng máy PCR, họ giống như đang dùng kính lúp cực đại phóng to một tín hiệu radio chập chờn, nơi bất kỳ sự trồi sụt ngẫu nhiên nào cũng có thể làm biến dạng hoàn toàn bản nhạc gốc.

**Grammar & collocations:** `execute low-template DNA amplification` — thực hiện khuếch đại ADN mẫu hàm lượng thấp; `challenges of low-template DNA amplification` — những thách thức của việc khuếch đại ADN mẫu hàm lượng thấp; `artifacts in low-template DNA amplification` — các sai số kỹ thuật trong khuếch đại ADN mẫu hàm lượng thấp.

**Register & nuance:** Di truyền học hình sự và giám định tư pháp. Từng được gọi là LCN (*low copy number*); hiện tượng này đòi hỏi các phòng thí nghiệm phải áp dụng ngưỡng diễn giải thống kê đặc thù thay vì sử dụng các quy tắc diễn giải nhị phân truyền thống.

**Examples:** `When handling handled firearm triggers, forensic technicians utilized low-template DNA amplification while warning the prosecution about inevitable stochastic fluctuations.` → Khi xử lý cò súng bị chạm vào, các kỹ thuật viên pháp y đã sử dụng phương pháp khuếch đại ADN mẫu hàm lượng thấp trong khi cảnh báo bên công tố về những dao động ngẫu nhiên không thể tránh khỏi.

**Liên kết tiếng Hàn:** `극미량 DNA 증폭` (極微量 DNA 增幅) — sự khuếch đại ADN lượng cực nhỏ.

---

## 2. PCR strand slippage stutter /ˌpiːsiːˈɑːr strænd ˈslɪpɪdʒ ˈstʌtər/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Đóng vai trò là cơ chế enzyme sinh học sinh ra đỉnh giả trên biểu đồ điện di (*cause*, *generate*, *characterize*).

**Core meaning — English:** An enzymatic amplification artifact caused by the transient dissociation and misaligned out-of-register reannealing of DNA polymerase within repetitive tandem repeat sequences, producing an amplicon typically one repeat unit shorter than the true allele.

**Core meaning & mental image — Tiếng Việt:** Đỉnh vấp do trượt chuỗi PCR (hiện tượng ngắc ngứ do trượt mạch). Hãy tưởng tượng một chiếc máy may đang khâu một dải ruy băng có họa tiết lặp lại liên tục bốn chữ cái (GATA-GATA-GATA): giữa chừng, sợi chỉ trượt một nhịp khiến hai nếp vải gấp đè lên nhau, tạo ra một mũi khâu thừa ngắn hơn một gang tay; trên biểu đồ, sản phẩm lỗi này hiện lên như một cái bóng nhỏ đứng ngay sát cạnh ngọn núi chính.

**Grammar & collocations:** `mechanism of PCR strand slippage stutter` — cơ chế của đỉnh vấp do trượt chuỗi PCR; `minimize PCR strand slippage stutter` — giảm thiểu đỉnh vấp do trượt chuỗi PCR; `susceptible to PCR strand slippage stutter` — dễ bị ảnh hưởng bởi đỉnh vấp do trượt chuỗi PCR.

**Register & nuance:** Sinh học phân tử pháp y (*forensic STR genotyping*). Thường gặp nhất là dạng ngắc ngứ lùi (*minus-stutter*), xảy ra với tần suất từ 5% đến 15% diện tích đỉnh chính, dễ bị nhầm lẫn với alen thật của một người đóng góp thứ yếu trong mẫu ADN hỗn hợp.

**Examples:** `During short tandem repeat profiling, PCR strand slippage stutter inevitably generated minor satellite peaks adjacent to the major donor's true alleles.` → Trong quá trình lập hồ sơ đoạn lặp ngắn tiếp đoạn, hiện tượng đỉnh vấp do trượt chuỗi PCR chắc chắn đã tạo ra các đỉnh vệ tinh phụ liền kề với các alen thật của người đóng góp chính.

**Liên kết tiếng Hàn:** `PCR 가닥 미끄러짐 스터터` (PCR 가닥 滑走 stutter) — hiện tượng vấp do trượt mạch PCR.

---

## 3. reverse stutter peak ratio /rɪˈvɜːrs ˈstʌtər piːk ˈreɪʃioʊ/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Làm tỷ lệ toán học định chuẩn để nhận diện đỉnh vấp âm (*calculate*, *exceed*, `apply`).

**Core meaning — English:** The mathematical ratio of the peak height (or area) of a reverse stutter artifact (one repeat unit shorter, N-4 bp) relative to the parent allele's peak height in capillary electropherograms.

**Core meaning & mental image — Tiếng Việt:** Tỷ lệ đỉnh vấp ngược (tỷ lệ đỉnh stutter N-1). Hãy hình dung ngọn núi chính cao 1.000 đơn vị huỳnh quang và bên trái nó có một ngọn đồi nhỏ cao 80 đơn vị: tỷ lệ 8% này chính là tỷ lệ đỉnh vấp ngược; nếu ngọn đồi vượt quá ngưỡng 15%, chuyên gia sẽ nghi ngờ rằng đây không còn là cái bóng của ngọn núi chính nữa, mà là một ngọn núi thật của một người khác đang ẩn nấp.

**Grammar & collocations:** `exceed the reverse stutter peak ratio` — vượt quá tỷ lệ đỉnh vấp ngược; `tabulate the reverse stutter peak ratio` — lập bảng tỷ lệ đỉnh vấp ngược; `locus-specific reverse stutter peak ratio` — tỷ lệ đỉnh vấp ngược đặc thù cho từng locus.

**Register & nuance:** Tiêu chuẩn thẩm định phòng thí nghiệm (SWGDAM và ISFG). Mỗi locus STR có một tỷ lệ ngưỡng stutter ngược tối đa riêng biệt; nếu đỉnh phụ nằm dưới ngưỡng này, nó có thể được mô hình xác suất xử lý là sản phẩm phụ của enzyme.

**Examples:** `The analyst noted that the candidate peak fell precisely within the expected reverse stutter peak ratio of eight percent, classifying it as a polymerase artifact rather than a minor contributor's allele.` → Nhà phân tích ghi nhận rằng đỉnh ứng viên rơi chính xác vào trong tỷ lệ đỉnh vấp ngược kỳ vọng là tám phần trăm, phân loại nó là một sai số do enzyme polymerase hơn là alen của một người đóng góp phụ.

**Liên kết tiếng Hàn:** `역방향 스터터 피크 비율` (逆方向 stutter peak 比率) — tỷ lệ đỉnh stutter lùi.

---

## 4. forward stutter product /ˈfɔːrwərd ˈstʌtər ˈprɑːdʌkt/

**Loại từ & vị trí trong câu:** `countable noun`. Thường dùng làm sản phẩm phụ có kích thước dài hơn một đơn vị lặp (*detect*, *quantify*, *differentiate*).

**Core meaning — English:** A minor PCR amplification artifact characterized by an extra repeat unit (N+4 bp) caused by polymerase slippage on the template strand, exhibiting much lower signal amplitude than reverse stutter.

**Core meaning & mental image — Tiếng Việt:** Sản phẩm đỉnh vấp tiến (sản phẩm stutter N+1). Hãy tưởng tượng chiếc máy may bị trượt chân nhưng lần này nó lại vô tình kéo dãn thêm một vòng lặp thừa; trên biểu đồ, một đỉnh tí hon xuất hiện phía bên phải ngọn núi chính; do rất hiếm gặp (thường chỉ 1-2%), nó dễ làm các giám định viên bối rối nếu xuất hiện cùng lúc với các mẫu ADN phức tạp.

**Grammar & collocations:** `identify a forward stutter product` — xác định một sản phẩm đỉnh vấp tiến; `amplitude of a forward stutter product` — biên độ của một sản phẩm đỉnh vấp tiến; `distinguish a forward stutter product from true alleles` — phân biệt sản phẩm đỉnh vấp tiến với các alen thật.

**Register & nuance:** Di truyền học pháp y nâng cao. Forward stutter ít gặp hơn reverse stutter rất nhiều, nhưng trong các phần mềm tính xác suất hiện đại (continuous models), nó phải được đưa vào mô hình hóa toán học để tránh gán nhầm thành alen ngoại lai.

**Examples:** `Although small, the forward stutter product at locus D18S51 was systematically modeled by the software to avoid misidentifying it as trace contamination.` → Mặc dù nhỏ, sản phẩm đỉnh vấp tiến tại locus D18S51 đã được phần mềm lập mô hình một cách có hệ thống để tránh nhận diện nhầm nó là sự nhiễm bẩn vết.

**Liên kết tiếng Hàn:** `정방향 스터터 산물` (正方向 stutter 産物) — sản phẩm stutter tiến.

---

## 5. electropherogram baseline noise floor /ɪˌlɛktroʊˈfɛrəɡræm ˈbeɪslaɪn nɔɪz flɔːr/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Làm mức sàn tín hiệu điện tử và hóa học nền (*determine*, `rise above`, *filter*).

**Core meaning — English:** The continuous, stochastic background electronic and optical signal fluctuations recorded across a capillary electrophoresis run, beneath which true biological fluorescent emissions cannot be reliably distinguished.

**Core meaning & mental image — Tiếng Việt:** Sàn nhiễu đường cơ sở của biểu đồ điện di. Hãy hình dung mặt hồ nước lăn tăn gợn sóng li ti bởi những cơn gió nhẹ; những con sóng nhấp nhô cao 20-30 đơn vị huỳnh quang này là tiếng xào xạc của dòng điện và bọt khí hóa chất; bất kỳ tín hiệu nào muốn được công nhận là bằng chứng ADN đều phải vươn cao vượt hẳn lên khỏi mặt hồ gợn sóng này.

**Grammar & collocations:** `establish the electropherogram baseline noise floor` — thiết lập sàn nhiễu đường cơ sở của biểu đồ điện di; `drift of the electropherogram baseline noise floor` — sự trôi dạt của sàn nhiễu đường cơ sở biểu đồ điện di; `filter out the electropherogram baseline noise floor` — lọc bỏ sàn nhiễu đường cơ sở của biểu đồ điện di.

**Register & nuance:** Thiết bị đo đạc giải trình tự mao quản (*capillary electrophoresis instrumentation*). Thường đo bằng đơn vị huỳnh quang tương đối (RFU). Sàn nhiễu thường dao động dưới 30–50 RFU trên các thiết bị hiện đại như ABI 3500.

**Examples:** `Instrument validation showed that the electropherogram baseline noise floor never exceeded thirty-five relative fluorescence units under normal operational voltages.` → Quá trình kiểm định thiết bị cho thấy sàn nhiễu đường cơ sở của biểu đồ điện di không bao giờ vượt quá ba mươi lăm đơn vị huỳnh quang tương đối dưới điện thế vận hành bình thường.

**Liên kết tiếng Hàn:** `전기영동도 기선 잡음 바닥` (電氣泳動圖 基線 雜音 바닥) — mức sàn nhiễu đường đáy của điện di đồ.

---

## 6. analytical detection threshold /ˌænəˈlɪtɪkəl dɪˈtɛkʃən ˈθrɛʃhoʊld/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Làm ranh giới kỹ thuật tối thiểu để ghi nhận một đỉnh huỳnh quang (*set*, *exceed*, *validate*).

**Core meaning — English:** The minimum peak height (typically 50 to 100 relative fluorescence units) at which a signal can be reliably distinguished from baseline electronic noise with statistical confidence.

**Core meaning & mental image — Tiếng Việt:** Ngưỡng phát hiện phân tích (ngưỡng phân tích AT). Hãy hình dung một vạch kẻ phấn ngang thân cột cờ ở mức 50 RFU: chỉ những ngọn cờ nào nhô cao hơn vạch phấn này thì trọng tài mới bắt đầu ghi tên vào sổ giám định; bất kỳ đỉnh nào thấp hơn vạch phấn đều bị coi là hư vô, hòa lẫn vào tiếng ồn của máy móc.

**Grammar & collocations:** `surpass the analytical detection threshold` — vượt qua ngưỡng phát hiện phân tích; `define the analytical detection threshold` — định nghĩa ngưỡng phát hiện phân tích; `calibrate the analytical detection threshold` — định chuẩn ngưỡng phát hiện phân tích.

**Register & nuance:** Tiêu chuẩn vận hành phòng thí nghiệm pháp y. Đây là ngưỡng kỹ thuật phần cứng (instrumental threshold); các đỉnh trên ngưỡng này được coi là tín hiệu thực, nhưng chưa chắc đã đáng tin cậy để kết luận alen nếu chưa xét tới ngưỡng ngẫu nhiên (*stochastic threshold*).

**Examples:** `Signals falling below the laboratory's fifty-RFU analytical detection threshold were systematically ignored to eliminate sporadic background spikes.` → Các tín hiệu rơi xuống dưới ngưỡng phát hiện phân tích năm mươi RFU của phòng thí nghiệm đã bị bỏ qua một cách có hệ thống để loại trừ các đỉnh nhọn ngẫu nhiên của nền.

**Liên kết tiếng Hàn:** `분석적 검출 임계값` (分析的 檢出 臨界값) — ngưỡng phát hiện phân tích.

---

## 7. stochastic interpretation threshold /stəˈkæstɪk ɪnˌtɜːrprɪˈteɪʃən ˈθrɛʃhoʊld/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường dùng làm ngưỡng an toàn để loại trừ nguy cơ mất alen chị em (*apply*, *exceed*, `fall below`).

**Core meaning — English:** The empirical peak height value (often 200 to 500 RFU) above which an analyst can be statistically confident that sister allele drop-out has not occurred in a heterozygous individual.

**Core meaning & mental image — Tiếng Việt:** Ngưỡng diễn giải ngẫu nhiên (ngưỡng ngẫu nhiên ST). Hãy hình dung một chiếc phao cứu sinh ở độ cao 300 RFU: nếu bạn nhìn thấy một đỉnh alen đơn độc nhô cao tận 800 RFU, bạn có thể tự tin tuyên bố người này đồng hợp tử (hai alen giống hệt nhau); nhưng nếu đỉnh chỉ cao 150 RFU, bạn không dám chắc liệu có phải người này có một alen chị em khác đã bị chết đuối (rơi mất) trong lúc nhân bản hay không.

**Grammar & collocations:** `operate above the stochastic interpretation threshold` — hoạt động phía trên ngưỡng diễn giải ngẫu nhiên; `set a stochastic interpretation threshold` — thiết lập một ngưỡng diễn giải ngẫu nhiên; `empirical stochastic interpretation threshold` — ngưỡng diễn giải ngẫu nhiên dựa trên thực nghiệm.

**Register & nuance:** Phương pháp luận diễn giải pháp y cổ điển và bán định lượng. Khi đỉnh nằm dưới ngưỡng ngẫu nhiên, không thể suy diễn kiểu nhị phân có/không đơn thuần mà phải gắn kèm xác suất mất alen (*drop-out probability*).

**Examples:** `Because the single allele peak at locus vWA was beneath the stochastic interpretation threshold of three hundred RFU, the examiner could not exclude sister allele drop-out.` → Bởi vì đỉnh alen đơn lẻ tại locus vWA nằm dưới ngưỡng diễn giải ngẫu nhiên ba trăm RFU, giám định viên không thể loại trừ khả năng mất alen chị em.

**Liên kết tiếng Hàn:** `확률적 해석 임계값` (確率的 解釋 臨界값) — ngưỡng diễn giải xác suất ngẫu nhiên.

---

## 8. allelic drop-out probability /əˈliːlɪk ˈdrɑːpaʊt ˌprɑːbəˈbɪləti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Làm đại lượng xác suất phản ánh nguy cơ mất dấu vết di truyền (*model*, *calculate*, `correlate with`).

**Core meaning — English:** The mathematical likelihood that an allele truly present in a biological sample fails to be detected above the analytical threshold due to extremely low initial template copy numbers or unequal pipetting sampling.

**Core meaning & mental image — Tiếng Việt:** Xác suất rơi mất alen (xác suất mất alen). Hãy tưởng tượng bạn thò tay vào một chiếc túi chỉ có đúng 2 viên bi (một đỏ, một xanh) nhưng chỉ được nhặt 1 viên: do lượng mẫu quá ít, bạn chỉ bốc trúng viên màu đỏ và bỏ sót mất viên màu xanh; trên biểu đồ ADN, người này vốn có 2 alen nhưng kết quả lại chỉ hiện ra 1 alen, khiến mắt thường tưởng nhầm là đồng hợp tử.

**Grammar & collocations:** `estimate the allelic drop-out probability` — ước tính xác suất rơi mất alen; `logistic function of allelic drop-out probability` — hàm logistic của xác suất rơi mất alen; `high allelic drop-out probability` — xác suất rơi mất alen cao.

**Register & nuance:** Toán thống kê pháp y và mô hình hóa liên tục (*continuous modeling*). Xác suất này tỉ lệ nghịch với chiều cao đỉnh; đỉnh càng thấp thì nguy cơ rơi mất alen càng tiệm cận 100%.

**Examples:** `In minute touch-DNA swabbings, the allelic drop-out probability approached forty percent, requiring continuous software algorithms to evaluate unseen genetic contributors.` → Trong các mẫu phết ADN chạm cực nhỏ, xác suất rơi mất alen tiệm cận bốn mươi phần trăm, đòi hỏi các thuật toán phần mềm liên tục phải đánh giá những người đóng góp di truyền chưa nhìn thấy.

**Liên kết tiếng Hàn:** `대립유전자 탈락 확률` (對立遺傳子 脫落 確率) — xác suất mất alen.

---

## 9. allelic drop-in frequency /əˈliːlɪk ˈdrɑːpɪn ˈfriːkwənsi/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Làm tần suất xuất hiện ngẫu nhiên của các đỉnh lạ không thuộc nguồn mẫu (*quantify*, *estimate*, *parameterize*).

**Core meaning — English:** The empirical rate at which extraneous non-contributor alleles (often derived from ambient environmental DNA dust or reagent contamination) appear sporadically at low RFU levels across casework profiles.

**Core meaning & mental image — Tiếng Việt:** Tần suất rơi vào của alen (hiện tượng alen lạ rơi vào mẫu). Hãy hình dung một chiếc đĩa sạch để trong phòng thí nghiệm bỗng có một hạt bụi vô hình từ không khí rơi trúng vào giếng phản ứng: khi máy khuếch đại chạy 30 chu kỳ, một đỉnh alen lạ tí hon bỗng dưng xuất hiện như một "vị khách không mời mà đến", nếu không có mô hình xác suất, vị khách này có thể làm vu khống một người vô tội.

**Grammar & collocations:** `characterize the allelic drop-in frequency` — mô tả đặc tính tần suất rơi vào của alen; `parameterize allelic drop-in frequency` — tham số hóa tần suất rơi vào của alen; `mitigate allelic drop-in frequency` — giảm thiểu tần suất rơi vào của alen.

**Register & nuance:** Kiểm soát chất lượng di truyền học tư pháp. Thường xảy ra ở mức 1-2 alen trên mỗi mẫu khuếch đại nồng độ thấp; các phần mềm tính toán hiện đại bắt buộc phải tích hợp tham số này để không bác bỏ nhầm nghi phạm khi có đỉnh thừa bí ẩn.

**Examples:** `The validation study parameterized an allelic drop-in frequency of zero point zero two per locus, preventing isolated stray peaks from skewing contributor matching.` → Nghiên cứu thẩm định đã tham số hóa tần suất rơi vào của alen ở mức không phẩy không hai trên mỗi locus, ngăn ngừa các đỉnh lạc đơn lẻ làm sai lệch việc đối khớp người đóng góp.

**Liên kết tiếng Hàn:** `대립유전자 혼입 빈도` (對立遺傳子 混入 頻度) — tần suất lẫn alen lạ.

---

## 10. heterozygote peak balance /ˌhɛtəroʊˈzaɪɡoʊt piːk ˈbæləns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường dùng làm chỉ số đánh giá độ cân xứng giữa hai đỉnh alen của cùng một cá thể (*evaluate*, *fall below*, *calculate*).

**Core meaning — English:** The mathematical ratio of the smaller sister peak height to the larger sister peak height in a heterozygous individual (normally above 60% to 70% in high-quality single-source DNA).

**Core meaning & mental image — Tiếng Việt:** Độ cân bằng đỉnh dị hợp tử. Hãy tưởng tượng một cặp sinh đôi đứng cạnh nhau trên bục vinh quang: nếu mẫu ADN nguyên vẹn và đủ nhiều, hai ngọn núi của hai alen sẽ có chiều cao gần bằng nhau (tỷ lệ trên 70-80%); nhưng nếu mẫu bị thoái hóa hoặc bị trộn lẫn, một đỉnh có thể cao chót vót trong khi đỉnh kia lùn tịt, báo hiệu sự mất cân bằng ngẫu nhiên hoặc có sự chồng lấn của người khác.

**Grammar & collocations:** `calculate heterozygote peak balance` — tính toán độ cân bằng đỉnh dị hợp tử; `severe loss of heterozygote peak balance` — sự mất mát nghiêm trọng độ cân bằng đỉnh dị hợp tử; `heterozygote peak balance threshold` — ngưỡng độ cân bằng đỉnh dị hợp tử.

**Register & nuance:** Đánh giá chất lượng hồ sơ ADN. Khi tỷ lệ này tụt xuống dưới 60%, hồ sơ bị xem là chịu tác động ngẫu nhiên hoặc là mẫu hỗn hợp của nhiều người (*mixture profile*).

**Examples:** `A drastic skew in heterozygote peak balance down to thirty-two percent strongly hinted at preferential amplification or the presence of a second low-level contributor.` → Sự lệch lạc nghiêm trọng trong độ cân bằng đỉnh dị hợp tử xuống mức ba mươi hai phần trăm đã gợi ý mạnh mẽ về sự khuếch đại ưu tiên hoặc sự hiện diện của một người đóng góp phụ cấp độ thấp thứ hai.

**Liên kết tiếng Hàn:** `이형접합자 피크 균형` (異型接合子 peak 均衡) — độ cân bằng đỉnh dị hợp tử.

---

## 11. spectral pull-up artifact /ˈspɛktrəl ˈpʊlʌp ˈɑːrtəfækt/

**Loại từ & vị trí trong câu:** `countable noun`. Thường dùng làm sai số kỹ thuật quang học do chồng lấn kênh màu (*identify*, *filter out*, *attribute to*).

**Core meaning — English:** An instrumental false signal caused by the imperfect mathematical deconvolution of fluorescent dye emission spectra, causing high-intensity peaks in one dye channel to leak or "bleed through" into an adjacent color channel at the identical size coordinate.

**Core meaning & mental image — Tiếng Việt:** Sai số kéo quang phổ (hiện tượng rò kênh màu pull-up). Hãy hình dung ánh đèn pha cực mạnh màu xanh lam chiếu vào một tấm kính màu: do bộ lọc quang học bị quá tải, một phần ánh sáng xanh bị rò rỉ và hiện lên như một bóng ma màu vàng tại đúng vị trí đó trên màn hình máy tính; người giám định thiếu kinh nghiệm có thể nhầm bóng ma quang học này thành một alen ADN thực sự.

**Grammar & collocations:** `eliminate a spectral pull-up artifact` — loại bỏ sai số kéo quang phổ; `caused by a spectral pull-up artifact` — gây ra bởi sai số kéo quang phổ; `spectral pull-up artifact discrimination` — sự phân biệt sai số kéo quang phổ.

**Register & nuance:** Kỹ thuật đo phổ huỳnh quang trong điện di mao quản. Thường xảy ra khi đỉnh chính vượt quá 6.000–8.000 RFU (vùng bão hòa của camera CCD/CMOS); ma trận phân giải màu (*spectral calibration matrix*) cần được hiệu chuẩn lại nếu pull-up xuất hiện quá nhiều.

**Examples:** `The analyst recognized the twenty-RFU peak in the green channel as a spectral pull-up artifact stemming from an off-scale ten-thousand-RFU blue peak at the identical base-pair position.` → Nhà phân tích đã nhận diện đỉnh hai mươi RFU trong kênh màu xanh lục là một sai số kéo quang phổ bắt nguồn từ một đỉnh màu xanh lam mười nghìn RFU bị tràn thang đo tại cùng một vị trí cặp base.

**Liên kết tiếng Hàn:** `스펙트럼 풀업 인공물` (spectrum pull-up 人工物) — sai số rò rỉ phổ màu huỳnh quang.

---

## 12. number of contributors estimation /ˈnʌmbər əv kənˈtrɪbjətərz ˌɛstəˈmeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Làm bước suy luận pháp y đầu tiên và nhạy cảm nhất khi xử lý mẫu hỗn hợp (*perform*, *challenge*, `underpin`).

**Core meaning — English:** The expert assessment or algorithmic determination of the minimum or most probable count of distinct individuals who donated biological material to a complex DNA mixture profile.

**Core meaning & mental image — Tiếng Việt:** Sự ước tính số lượng người đóng góp. Hãy hình dung một căn phòng xảy ra vụ cướp với hàng chục vết máu chồng chéo lên nhau: trước khi có thể chỉ mặt đặt tên ai có mặt, chuyên gia giám định phải đếm số lượng alen tối đa tại mỗi locus để suy luận xem đây là mớ hỗn độn của 2, 3, hay 4 người; một ước tính sai lầm về số lượng người có thể làm đảo lộn toàn bộ kết quả tính toán xác suất trước tòa án.

**Grammar & collocations:** `conduct number of contributors estimation` — tiến hành ước tính số lượng người đóng góp; `ambiguity in number of contributors estimation` — sự mơ hồ trong ước tính số lượng người đóng góp; `maximum allele count for number of contributors estimation` — số lượng alen tối đa phục vụ ước tính số lượng người đóng góp.

**Register & nuance:** Bằng chứng chuyên gia trước tòa án (*expert witness testimony*). Đây là điểm xung đột gay gắt nhất giữa bên công tố và bên bào chữa; việc giả định mẫu có 2 người thay vì 3 người có thể làm tăng tỷ số khả dĩ (*likelihood ratio*) lên hàng triệu lần một cách nhân tạo.

**Examples:** `Flawed number of contributors estimation remains a primary source of forensic error, as underestimating contributor counts can artificially inflate statistical match likelihoods.` → Sự ước tính số lượng người đóng góp có sai sót vẫn là một nguồn gốc chính gây ra lỗi pháp y, vì việc ước tính thấp số lượng người đóng góp có thể thổi phồng khả năng trùng khớp thống kê một cách nhân tạo.

**Liên kết tiếng Hàn:** `기여자 수 추정` (寄與者 數 推定) — ước tính số lượng người đóng góp.

---

## 13. continuous probabilistic genotyping /kənˈtɪnjuəs ˌprɑːbəbəˈlɪstɪk ˌdʒiːnoʊˈtaɪpɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Làm hệ thống phương pháp luận tính toán hiện đại thay thế mô hình nhị phân (*employ*, *validate*, `via`).

**Core meaning — English:** A sophisticated bioinformatic approach (such as STRmix or TrueAllele) that incorporates quantitative peak heights, stutter ratios, and continuous probability distributions without applying artificial binary thresholds to interpret complex DNA mixtures.

**Core meaning & mental image — Tiếng Việt:** Phương pháp định kiểu gen xác suất liên tục. Hãy tưởng tượng thay vì dùng một chiếc thước đo cứng nhắc để gạt bỏ tất cả những đỉnh dưới 50 RFU như trắng và đen, một siêu máy tính thông minh sẽ đo lường từng milimét chiều cao ngọn núi, tính toán hàng triệu kịch bản có thể xảy ra và vẽ nên một bức tranh xác suất uyển chuyển, tận dụng từng giọt thông tin nhỏ nhất của mẫu vật.

**Grammar & collocations:** `adopt continuous probabilistic genotyping` — áp dụng phương pháp định kiểu gen xác suất liên tục; `software for continuous probabilistic genotyping` — phần mềm định kiểu gen xác suất liên tục; `validation of continuous probabilistic genotyping` — sự thẩm định phương pháp định kiểu gen xác suất liên tục.

**Register & nuance:** Tiêu chuẩn vàng của khoa học pháp y thế kỷ 21. Khác với mô hình bán liên tục (*semi-continuous models*) chỉ xét sự có mặt hay vắng mặt của alen, mô hình liên tục sử dụng toàn bộ thông tin về chiều cao đỉnh và phương sai để đưa ra kết luận khách quan nhất.

**Examples:** `By employing continuous probabilistic genotyping, the crime laboratory successfully resolved a complex four-person mixture that had previously been classified as uninterpretable.` → Bằng cách sử dụng phương pháp định kiểu gen xác suất liên tục, phòng thí nghiệm tội phạm đã phân giải thành công một mẫu hỗn hợp bốn người phức tạp vốn trước đây bị phân loại là không thể diễn giải được.

**Liên kết tiếng Hàn:** `연속적 확률론적 유전자형 분석` (連續的 確率論的 遺傳子型 分析) — phân tích kiểu gen xác suất liên tục.

---

## 14. Markov chain Monte Carlo deconvolution /ˈmɑːrkɔːf tʃeɪn ˌmɑːnti ˈkɑːrloʊ ˌdiːˌkɑːnvəˈluːʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Làm thuật toán cốt lõi để bóc tách hỗn hợp ADN đa nguồn (*implement*, *execute*, `via`).

**Core meaning — English:** An iterative computational sampling algorithm that explores multidimensional parameter space (genotype combinations, template amounts, degradation curves, stutter) to find the probability distribution of contributors explaining an observed electropherogram.

**Core meaning & mental image — Tiếng Việt:** Sự tách chập bằng chuỗi Markov Monte Carlo (thuật toán MCMC bóc tách mẫu). Hãy tưởng tượng một thám tử toán học đi dạo hàng triệu bước ngẫu nhiên trong một mê cung khổng lồ gồm các tổ hợp kiểu gen có thể có; ở mỗi bước, thám tử ném xúc xắc và so sánh xem kịch bản này khớp với biểu đồ ADN thực tế đến mức nào; sau hàng trăm ngàn lượt dạo chơi, mê cung dần hội tụ về kịch bản chính xác nhất phản ánh sự thật.

**Grammar & collocations:** `run Markov chain Monte Carlo deconvolution` — chạy thuật toán tách chập bằng chuỗi Markov Monte Carlo; `convergence of Markov chain Monte Carlo deconvolution` — sự hội tụ của thuật toán tách chập MCMC; `parameters in Markov chain Monte Carlo deconvolution` — các tham số trong thuật toán tách chập MCMC.

**Register & nuance:** Tin sinh học tính toán và thống kê Bayes pháp y. Đòi hỏi cấu hình máy tính mạnh và nhiều chuỗi chạy song song (*parallel chains*) để đảm bảo không bị mắc kẹt tại các cực trị cục bộ (*local maxima*).

**Examples:** `The algorithm executed eight parallel chains during Markov chain Monte Carlo deconvolution, sampling millions of iterations to deduce the genotype combination of the unknown shooter.` → Thuật toán đã thực thi tám chuỗi song song trong quá trình tách chập bằng chuỗi Markov Monte Carlo, lấy mẫu hàng triệu vòng lặp để suy luận tổ hợp kiểu gen của tay súng chưa rõ danh tính.

**Liên kết tiếng Hàn:** `마르코프 연쇄 몬테카를로 디컨볼루션` (Markov 連鎖 Monte Carlo deconvolution) — sự bóc tách bằng chuỗi Markov Monte Carlo.

---

## 15. electropherogram peak height variance /ɪˌlɛktroʊˈfɛrəɡræm piːk haɪt ˈvɛriəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Làm biến số mô hình hóa mức độ chao đảo tín hiệu huỳnh quang (*model*, *account for*, *calculate*).

**Core meaning — English:** The statistical dispersion and variability of fluorescent signal intensities around their expected values across PCR cycles and capillary injection parameters, modeled mathematically as a function of mean peak height.

**Core meaning & mental image — Tiếng Việt:** Phương sai chiều cao đỉnh trên biểu đồ điện di. Hãy hình dung những ngọn nến lung linh trong gió: cùng một ngọn nến nhưng có lúc ngọn lửa bùng cao, có lúc lại thu nhỏ lại; phương sai này đo lường độ chập chờn của ngọn lửa huỳnh quang; hiểu được quy luật chập chờn này giúp máy tính phân biệt được đâu là biến động ngẫu nhiên của máy, đâu là dấu hiệu có người khác xen vào.

**Grammar & collocations:** `model electropherogram peak height variance` — mô hình hóa phương sai chiều cao đỉnh biểu đồ điện di; `predictable electropherogram peak height variance` — phương sai chiều cao đỉnh biểu đồ điện di có thể dự đoán được; `parameters governing electropherogram peak height variance` — các tham số chi phối phương sai chiều cao đỉnh.

**Register & nuance:** Xử lý tín hiệu hóa lý và mô hình hóa Bayes. Phương sai thường tuân theo phân phối gamma hoặc log-normal; các đỉnh thấp có phương sai tương đối lớn hơn các đỉnh cao rất nhiều.

**Examples:** `Accurate modeling of electropherogram peak height variance allows the probabilistic software to accommodate random PCR fluctuations without incorrectly rejecting a true contributor.` → Việc mô hình hóa chính xác phương sai chiều cao đỉnh biểu đồ điện di cho phép phần mềm xác suất chấp nhận các dao động PCR ngẫu nhiên mà không bác bỏ sai một người đóng góp thực sự.

**Liên kết tiếng Hàn:** `전기영동도 피크 높이 분산` (電氣泳動圖 peak 높이 分散) — phương sai chiều cao đỉnh điện di đồ.

---

## 16. likelihood ratio calculation /ˈlaɪklihʊd ˈreɪʃioʊ ˌkælkjəˈleɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Làm thước đo giá trị chứng cứ định lượng tiêu chuẩn trước tòa (*perform*, *yield*, `undergo`).

**Core meaning — English:** The mathematical evaluation of the probability of observing the forensic DNA evidence under the prosecution hypothesis compared to the probability under the defense hypothesis: LR = P(E|Hp) / P(E|Hd).

**Core meaning & mental image — Tiếng Việt:** Phép tính tỷ số khả dĩ (tính toán tỷ số Likelihood). Hãy tưởng tượng một chiếc cân công lý với hai đĩa cân: đĩa bên trái đặt giả thuyết của công tố viên ("ADN là của bị cáo"), đĩa bên phải đặt giả thuyết của luật sư bào chữa ("ADN là của một người xa lạ ngẫu nhiên"); phép tính tỷ số này cho biết khối lượng chứng cứ nghiêng về phía công tố viên gấp bao nhiêu triệu hay tỷ lần so với lời bào chữa.

**Grammar & collocations:** `perform a likelihood ratio calculation` — thực hiện phép tính tỷ số khả dĩ; `result of likelihood ratio calculation` — kết quả của phép tính tỷ số khả dĩ; `robustness of likelihood ratio calculation` — độ vững chắc của phép tính tỷ số khả dĩ.

**Register & nuance:** Tiêu chuẩn báo cáo của ENFSI và ISFG trong tư pháp hình sự. Một tỷ số LR lớn hơn 1 củng cố giả thuyết của công tố; LR bằng 1 là chứng cứ vô giá trị; LR nhỏ hơn 1 ủng hộ giả thuyết của bên bào chữa.

**Examples:** `The comprehensive likelihood ratio calculation generated a value of one billion in favor of the prosecution hypothesis over the alternative proposition.` → Phép tính tỷ số khả dĩ toàn diện đã mang lại giá trị một tỷ nghiêng về giả thuyết của bên công tố so với mệnh đề thay thế.

**Liên kết tiếng Hàn:** `우도비 계산` (尤度比 計算) — tính toán tỷ số khả dĩ (likelihood ratio).

---

## 17. prosecution proposition hypothesis /ˌprɑːsəˈkjuːʃən ˌprɑːpəˈzɪʃən haɪˈpɑːθəsɪs/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Làm mệnh đề toán học đại diện cho cáo buộc hình sự (thường ký hiệu là Hp) (*formulate*, *evaluate*, *support*).

**Core meaning — English:** The formal statistical statement (Hp) positing that the DNA evidence originated from the suspect and specified known individuals under the theory of the state or prosecution.

**Core meaning & mental image — Tiếng Việt:** Giả thuyết mệnh đề của bên công tố (mệnh đề cáo buộc Hp). Hãy hình dung luận điểm đanh thép của công tố viên trước vành móng ngựa: "Mẫu ADN hỗn hợp trên chuôi dao này thuộc về bị cáo và nạn nhân!"; mệnh đề này được chuyển hóa thành một công thức toán học chặt chẽ làm tử số trong phép tính tỷ số khả dĩ.

**Grammar & collocations:** `formulate the prosecution proposition hypothesis` — xây dựng giả thuyết mệnh đề của bên công tố; `evaluate evidence under the prosecution proposition hypothesis` — đánh giá chứng cứ dưới giả thuyết mệnh đề công tố; `support for the prosecution proposition hypothesis` — sự ủng hộ đối với giả thuyết mệnh đề công tố.

**Register & nuance:** Khung phân tích logic chứng cứ pháp lý (*hierarchy of propositions*). Cần được phân biệt rõ giữa cấp độ nguồn (*sub-source level* - ADN của ai) và cấp độ hành vi (*activity level* - ai đã cầm dao gây án).

**Examples:** `Under the prosecution proposition hypothesis, the complex mixture on the steering wheel was asserted to consist of the defendant and one unknown individual.` → Dưới giả thuyết mệnh đề của bên công tố, mẫu hỗn hợp phức tạp trên vô lăng được khẳng định là bao gồm bị cáo và một cá nhân chưa xác định.

**Liên kết tiếng Hàn:** `검찰 측 가설 명제` (檢察 側 假說 命題) — giả thuyết mệnh đề của bên công tố.

---

## 18. defense proposition hypothesis /dɪˈfɛns ˌprɑːpəˈzɪʃən haɪˈpɑːθəsɪs/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Làm mệnh đề đối trọng đại diện cho lập luận bào chữa (ký hiệu Hd) (*define*, *postulate*, *counter*).

**Core meaning — English:** The formal statistical statement (Hd) asserting an alternative scenario—typically that the DNA originated from an unknown, unrelated person from a relevant ancestral subpopulation rather than the defendant.

**Core meaning & mental image — Tiếng Việt:** Giả thuyết mệnh đề của bên bào chữa (mệnh đề bào chữa Hd). Hãy hình dung lập luận của luật sư bào chữa nhằm bảo vệ thân chủ: "Thân chủ tôi chưa từng chạm vào vật chứng; mẫu ADN đó là của một người hoàn toàn xa lạ trùng hợp ngẫu nhiên!"; mệnh đề đối nghịch này đóng vai trò làm mẫu số trong phép tính tỷ số khả dĩ.

**Grammar & collocations:** `specify the defense proposition hypothesis` — chỉ định giả thuyết mệnh đề của bên bào chữa; `test against the defense proposition hypothesis` — kiểm định đối kháng với giả thuyết mệnh đề bào chữa; `validity of the defense proposition hypothesis` — tính hợp lệ của giả thuyết mệnh đề bào chữa.

**Register & nuance:** Tranh tụng hình sự pháp y. Bên bào chữa có thể đề xuất các giả thuyết thay thế khác nhau (ví dụ: người đóng góp là anh em ruột của bị cáo thay vì người lạ), điều này sẽ làm thay đổi mẫu số và hạ thấp tỷ số LR.

**Examples:** `The defense proposition hypothesis postulated that two completely unrelated individuals from the general population were the true source of the biological material.` → Giả thuyết mệnh đề của bên bào chữa đã mặc định rằng hai cá nhân hoàn toàn không có quan hệ họ hàng từ quần thể dân số chung mới là nguồn gốc thực sự của vật chất sinh học.

**Liên kết tiếng Hàn:** `변호 측 가설 명제` (辯護 側 假說 命題) — giả thuyết mệnh đề của bên bào chữa.

---

## 19. subpopulation co-ancestry coefficient /sʌbˌpɑːpjəˈleɪʃən koʊˈænsɛstri ˌkoʊəˈfɪʃənt/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường dùng làm hệ số hiệu chỉnh di truyền quần thể (ký hiệu theta $	heta$ hoặc $F_{ST}$) (*incorporate*, *set*, *adjust*).

**Core meaning — English:** A statistical parameter (commonly assigned a value of 0.01 to 0.03) that adjusts allele frequency calculations to correct for shared ancestry and endogamy within human subpopulations, avoiding bias against the defendant.

**Core meaning & mental image — Tiếng Việt:** Hệ số tổ tiên chung của tiểu quần thể (hệ số hiệu chỉnh theta). Hãy tưởng tượng những cộng đồng sống biệt lập qua nhiều thế hệ: các thành viên chia sẻ nhiều gen giống nhau hơn so với người ngoài; hệ số hiệu chỉnh này giống như một khoản khấu trừ công bằng trong thuế, giúp ngăn chặn việc phóng đại sự trùng khớp ADN ngẫu nhiên và bảo vệ bị cáo khỏi việc bị kết án oan uổng.

**Grammar & collocations:** `incorporate a subpopulation co-ancestry coefficient` — đưa vào hệ số tổ tiên chung của tiểu quần thể; `value of the subpopulation co-ancestry coefficient` — giá trị của hệ số tổ tiên chung tiểu quần thể; `correction via subpopulation co-ancestry coefficient` — sự hiệu chỉnh thông qua hệ số tổ tiên chung tiểu quần thể.

**Register & nuance:** Di truyền học quần thể pháp y (công thức Balding-Nichols). Việc áp dụng hệ số này là bắt buộc theo khuyến nghị của Hội đồng Nghiên cứu Quốc gia Hoa Kỳ (NRC II) để đảm bảo tính thận trọng và công bằng tối đa cho người bị nghi vấn.

**Examples:** `Applying a subpopulation co-ancestry coefficient of zero point zero one ensured that the likelihood ratio accounted for background inbreeding within isolated communities.` → Việc áp dụng hệ số tổ tiên chung của tiểu quần thể ở mức không phẩy không một đã đảm bảo rằng tỷ số khả dĩ đã tính đến yếu tố cận huyết nền bên trong các cộng đồng biệt lập.

**Liên kết tiếng Hàn:** `하위집단 공동조상 계수` (下位集團 共同祖上 係數) — hệ số chung tổ tiên của tiểu quần thể.

---

## 20. weight of evidence quantification /weɪt əv ˈɛvɪdəns ˌkwɑːntəfəˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Làm mục tiêu pháp lý khoa học diễn giải sức nặng chứng cứ (*provide*, *achieve*, `via`).

**Core meaning — English:** The rigorous numerical articulation of how strongly a set of scientific findings discriminates between competing legal hypotheses, universally expressed via the logarithm of the likelihood ratio.

**Core meaning & mental image — Tiếng Việt:** Sự định lượng sức nặng chứng cứ. Hãy hình dung việc chuyển đổi một cảm giác mơ hồ "chứng cứ rất đáng ngờ" thành một con số toán học bất khả xâm phạm; con số này đặt lên bàn của thẩm phán và bồi thẩm đoàn một thước đo khoa học khách quan, đo lường chính xác sức mạnh kết tội mà không bị chi phối bởi cảm xúc hay định kiến cá nhân.

**Grammar & collocations:** `transparent weight of evidence quantification` — sự định lượng sức nặng chứng cứ minh bạch; `framework for weight of evidence quantification` — khung định lượng sức nặng chứng cứ; `objective weight of evidence quantification` — sự định lượng sức nặng chứng cứ khách quan.

**Register & nuance:** Lý thuyết chứng cứ tư pháp (*legal evidence theory*). Thường được quy đổi theo thang đo lời nói chuẩn của ENFSI (ví dụ: LR từ 10.000 đến 1.000.000 thể hiện "sự ủng hộ rất mạnh mẽ" cho một giả thuyết).

**Examples:** `Rather than offering subjective opinions, the DNA expert presented a weight of evidence quantification showing overwhelmingly strong support for the state's narrative.` → Thay vì đưa ra các ý kiến chủ quan, chuyên gia ADN đã trình bày sự định lượng sức nặng chứng cứ cho thấy sự ủng hộ áp đảo mạnh mẽ đối với lời tường thuật của bên công tố.

**Liên kết tiếng Hàn:** `증거력 정량화` (證據力 定量化) — định lượng sức nặng chứng cứ.

---

## 21. MCMC burn-in phase /ˌɛmˌsiːˌɛmˈsiː ˈbɜːrnɪn feɪz/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Làm giai đoạn khởi động bị loại bỏ trong tính toán chuỗi Markov (*discard*, *complete*, `during`).

**Core meaning — English:** The initial segment of iterations in a Markov chain Monte Carlo simulation that is deliberately discarded to prevent the arbitrary initial starting states from biasing the final posterior stationary distribution.

**Core meaning & mental image — Tiếng Việt:** Giai đoạn khởi động MCMC (pha đốt nóng ban đầu). Hãy hình dung việc làm nóng động cơ một chiếc xe đua trong mùa đông: những vòng quay máy đầu tiên khi động cơ còn lạnh và rung lắc dữ dội không phản ánh tốc độ chạy thực sự trên đường đua; người kỹ sư bỏ qua những số liệu khởi động ban đầu này và chỉ bắt đầu ghi nhận dữ liệu khi cỗ máy đã vận hành mượt mà và ổn định.

**Grammar & collocations:** `discard the MCMC burn-in phase` — loại bỏ giai đoạn khởi động MCMC; `duration of the MCMC burn-in phase` — thời lượng của giai đoạn khởi động MCMC; `verify convergence after the MCMC burn-in phase` — kiểm tra sự hội tụ sau giai đoạn khởi động MCMC.

**Register & nuance:** Thống kê điện toán Bayes (*computational Bayesian statistics*). Nếu pha burn-in quá ngắn, chuỗi chưa kịp ổn định sẽ kéo theo sai lệch lớn trong phân phối xác suất hậu nghiệm; việc kiểm tra biểu đồ dấu vết (*trace plots*) giúp bảo đảm thuật toán đã thoát khỏi điểm xuất phát ngẫu nhiên.

**Examples:** `Diagnostics confirmed that discarding the first one hundred thousand iterations during the MCMC burn-in phase successfully eliminated any lingering dependency on initial seed values.` → Các chẩn đoán xác nhận rằng việc loại bỏ một trăm nghìn vòng lặp đầu tiên trong giai đoạn khởi động MCMC đã loại trừ thành công bất kỳ sự phụ thuộc kéo dài nào vào các giá trị hạt giống ban đầu.

**Liên kết tiếng Hàn:** `MCMC 웜업 단계` (MCMC burn-in 段階) — giai đoạn khởi động ổn định MCMC.

---

## 22. gel capillary polymer degradation /dʒɛl ˈkæpəˌlɛri ˈpɑːləmər ˌdɛɡrəˈdeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Làm nguyên nhân vật lý gây giãn đỉnh và mất độ phân giải điện di (*suffer from*, *monitor*, *prevent*).

**Core meaning — English:** The physical or chemical breakdown of the dynamic sieving matrix (such as POP-4 or POP-7 polymer) inside electrophoresis capillaries due to thermal stress or aging, resulting in peak broadening, loss of resolution, and migration drift.

**Core meaning & mental image — Tiếng Việt:** Sự thoái hóa chất điện di polymer mao quản. Hãy tưởng tượng mạng lưới rây lọc polymer bên trong ống mao quản thủy tinh siêu nhỏ như một mê cung phân tử; khi chất gel này bị lão hóa bởi nhiệt độ cao, các bức tường mê cung bị sụp đổ, khiến các đoạn ADN chạy loạn xạ không theo trật tự, làm các đỉnh tín hiệu trên màn hình bị bẹt dí và nhòe nhoẹt vào nhau.

**Grammar & collocations:** `symptom of gel capillary polymer degradation` — triệu chứng của sự thoái hóa chất điện di polymer mao quản; `prevent gel capillary polymer degradation` — ngăn ngừa sự thoái hóa chất điện di polymer mao quản; `consequence of gel capillary polymer degradation` — hậu quả của sự thoái hóa chất điện di polymer mao quản.

**Register & nuance:** Quản trị thiết bị phân tích pháp y. Đòi hỏi thay thế polymer định kỳ (thường không quá 7–14 ngày trên máy) để duy trì khả năng tách bạch các alen chỉ chênh nhau đúng một nucleotide (như alen 9.3 và 10 tại locus TH01).

**Examples:** `A sudden loss of single-base resolution across the internal sizing standards signaled severe gel capillary polymer degradation, invalidating the forensic run.` → Sự mất mát đột ngột của độ phân giải đơn base trên các chuẩn kích thước nội bộ đã báo hiệu sự thoái hóa chất điện di polymer mao quản nghiêm trọng, làm vô hiệu hóa mẻ chạy pháp y.

**Liên kết tiếng Hàn:** `모세관 겔 폴리머 열화` (毛細管 gel polymer 劣化) — sự thoái hóa polymer gel mao quản.

---

## 23. degraded low-copy template profile /dɪˈɡreɪdɪd loʊ ˈkɑːpi ˈtɛmplɪt ˈproʊfaɪl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Làm đối tượng mẫu vật chứng khó khăn và thách thức nhất (*interpret*, *recover*, *characterize*).

**Core meaning — English:** An electropherogram profile derived from fragmented, low-quantity biological specimens, characterized by a sloping baseline, the progressive loss of larger-molecular-weight amplicons (ski-slope effect), and rampant drop-out.

**Core meaning & mental image — Tiếng Việt:** Hồ sơ mẫu khuôn nồng độ thấp bị thoái hóa. Hãy hình dung một trang sách cổ bị mối mọt gặm nham nhở và dính nước mưa: những câu văn ngắn ở đầu trang còn đọc được lờ mờ, nhưng các câu văn dài ở cuối trang đã bị rách nát biến mất hoàn toàn; trên đồ thị điện di, các đỉnh tụt dần từ trái sang phải như một dốc trượt tuyết u ám, thách thức tài năng của mọi chuyên gia giải mã.

**Grammar & collocations:** `deconvolute a degraded low-copy template profile` — bóc tách một hồ sơ mẫu khuôn nồng độ thấp bị thoái hóa; `hallmark of a degraded low-copy template profile` — dấu ấn đặc trưng của một hồ sơ mẫu khuôn nồng độ thấp bị thoái hóa; `interpreting a degraded low-copy template profile` — việc diễn giải một hồ sơ mẫu khuôn nồng độ thấp bị thoái hóa.

**Register & nuance:** Di truyền học pháp y hiện trường thảm họa và hài cốt cổ (*cold cases & DVI*). Hiện tượng suy giảm tín hiệu theo kích thước (*ski-slope effect*) đòi hỏi phần mềm phải tích hợp đường cong phân rã hàm số mũ (*degradation parameter*) vào mô hình tính toán.

**Examples:** `The cold case skeleton yielded a severely degraded low-copy template profile, where amplicon signal completely extinguished at all STR loci above two hundred base pairs.` → Bộ hài cốt trong vụ án bế tắc đã mang lại một hồ sơ mẫu khuôn nồng độ thấp bị thoái hóa nghiêm trọng, nơi tín hiệu khuếch đại bị dập tắt hoàn toàn tại tất cả các locus STR trên hai trăm cặp base.

**Liên kết tiếng Hàn:** `분해된 저복제 주형 프로필` (分解된 低複製 鑄型 profile) — hồ sơ mẫu khuôn bản sao thấp bị phân rã.

---

## 24. posterior genotype probability /pɑːˈstɪriər ˈdʒiːnoʊtaɪp ˌprɑːbəˈbɪləti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường dùng làm kết quả xác suất sau cùng của việc bóc tách kiểu gen (*assign*, *calculate*, *derive*).

**Core meaning — English:** The refined probability distribution assigned to each possible genotype set of an unknown contributor after combining prior population genetics with the observed electropherogram peak data via Bayes' theorem.

**Core meaning & mental image — Tiếng Việt:** Xác suất kiểu gen hậu nghiệm. Hãy hình dung việc cập nhật niềm tin sau khi có thêm chứng cứ mới: ban đầu bạn chỉ biết tần số xuất hiện của các kiểu gen trong dân số; nhưng sau khi cho máy tính quét qua biểu đồ huỳnh quang thực tế, niềm tin đó được chắt lọc lại thành một bảng xác suất chính xác: kiểu gen [12, 14] chiếm 98% khả năng, trong khi kiểu gen [12, 15] chỉ chiếm 2%.

**Grammar & collocations:** `calculate the posterior genotype probability` — tính toán xác suất kiểu gen hậu nghiệm; `distribution of posterior genotype probability` — phân phối của xác suất kiểu gen hậu nghiệm; `highest posterior genotype probability` — xác suất kiểu gen hậu nghiệm cao nhất.

**Register & nuance:** Thống kê Bayes ứng dụng trong tư pháp hình sự. Xác suất hậu nghiệm thể hiện mức độ chắc chắn của thuật toán đối với từng khả năng kiểu gen của thủ phạm ẩn danh; các kiểu gen có xác suất hậu nghiệm cao sẽ quyết định trực tiếp tới tỷ số khả dĩ LR sau đó.

**Examples:** `The probabilistic algorithm allocated a ninety-four percent posterior genotype probability to the [14, 16] allele combination at locus D8S1179 for the major contributor.` → Thuật toán xác suất đã phân bổ một xác suất kiểu gen hậu nghiệm chín mươi tư phần trăm cho tổ hợp alen [14, 16] tại locus D8S1179 đối với người đóng góp chính.

**Liên kết tiếng Hàn:** `사후 유전자형 확률` (事後 遺傳子型 確率) — xác suất kiểu gen hậu nghiệm.

---

## 25. veracity of forensic deconvolution /vəˈræsəti əv fəˈrɛnsɪk ˌdiːˌkɑːnvəˈluːʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Làm tiêu chuẩn pháp lý tối cao về độ trung thực và tính khoa học của việc bóc tách chứng cứ (*substantiate*, *challenge*, *affirm*).

**Core meaning — English:** The demonstrable accuracy, scientific reliability, and reproducibility of algorithmic DNA mixture separation results when subjected to adversarial courtroom scrutiny and empirical validation benchmarks.

**Core meaning & mental image — Tiếng Việt:** Tính xác thực của việc bóc tách pháp y (độ tin cậy của phân tích tách hỗn hợp ADN). Hãy hình dung một phiên điều trần căng thẳng trước bồi thẩm đoàn: các luật sư bào chữa xoay quanh chiếc hộp đen phần mềm máy tính, chất vấn từng dòng mã nguồn và từng giả định toán học; việc chứng minh tính xác thực không tì vết giúp chứng cứ khoa học đứng vững như một pháo đài thép, thuyết phục quan tòa tuyên bản án công minh.

**Grammar & collocations:** `affirm the veracity of forensic deconvolution` — khẳng định tính xác thực của việc bóc tách pháp y; `challenge the veracity of forensic deconvolution` — thách thức tính xác thực của việc bóc tách pháp y; `scrutinize the veracity of forensic deconvolution` — xem xét kỹ lưỡng tính xác thực của việc bóc tách pháp y.

**Register & nuance:** Tiêu chuẩn chấp nhận chứng cứ khoa học (*Daubert/Frye admissibility standard*). Tính xác thực chỉ được công nhận khi phần mềm và quy trình phòng thí nghiệm đã trải qua các nghiên cứu thẩm định nội bộ (*developmental and internal validation*) và kiểm tra mù nghiêm ngặt.

**Examples:** `During the Daubert hearing, exhaustive blind testing proved the veracity of forensic deconvolution, demonstrating that the algorithmic calculations yielded zero false-positive matches.` → Trong phiên điều trần Daubert, việc kiểm tra mù thấu đáo đã chứng minh tính xác thực của việc bóc tách pháp y, chứng minh rằng các tính toán thuật toán đã mang lại số lần trùng khớp dương tính giả bằng không.

**Liên kết tiếng Hàn:** `법의학적 디컨볼루션의 진실성` (法醫學的 deconvolution의 眞實性) — tính xác thực của việc bóc tách mẫu pháp y.

---

## Review in context (Part 1: Low-template amplifications, stutter dynamics, and detection thresholds)

When processing minute trace evidence recovered from handled cartridge casings, analysts frequently execute **low-template DNA amplification**. Because template copy numbers are severely depressed, the enzymatic reaction is acutely vulnerable to kinetic anomalies. Throughout amplification cycles, repetitive short tandem repeats undergo **PCR strand slippage stutter**, which produces shadow peaks that complicate profile deconvolution. Analysts methodically calculate the locus-specific **reverse stutter peak ratio** to verify whether a minor signal merely reflects standard minus-four-base enzymatic slippage. Concurrently, high-cycle amplification occasionally generates a minute **forward stutter product**, demanding rigorous filtering so that plus-four-base artifacts are not recorded as independent contributors. Beneath these biological signals lies the fluctuating **electropherogram baseline noise floor**, where random optical and electrical sensor ripples constantly oscillate. To prevent spurious electronic noise from entering casework documentation, laboratories enforce a calibrated **analytical detection threshold**, below which no chromatographic peak is recognized. When dealing with single peaks in low-copy samples, examiners must reference the higher **stochastic interpretation threshold** to avoid mistaking a dropout-affected heterozygote for an authentic homozygote. In highly compromised evidence, analysts anticipate a non-negligible **allelic drop-out probability**, recognizing that true donor alleles frequently fail to amplify above background limits. Conversely, ambient micro-environmental contaminants can introduce stray signals, requiring analysts to characterize the baseline **allelic drop-in frequency** across negative control batches. When both sister alleles amplify successfully, evaluating their relative heights establishes the **heterozygote peak balance**, which flags unequal amplification or latent contributor sharing. Furthermore, intense fluorescent emissions in adjacent optical channels must be scrutinized to ensure that an apparent trace peak is not an uncorrected **spectral pull-up artifact**. Once all instrumental artifacts and peak ratios are verified, the forensic geneticist initiates **number of contributors estimation**, establishing the baseline framework required for probabilistic mixture deconvolution.

**Bản dịch tiếng Việt:**

Khi xử lý bằng chứng vi vết cực nhỏ thu hồi được từ các vỏ đạn bị cầm nắm, các nhà phân tích thường xuyên thực hiện **low-template DNA amplification**. Do số lượng bản sao mẫu bị suy giảm nghiêm trọng, phản ứng enzyme rất dễ bị tổn thương trước các dị thường động học. Xuyên suốt các chu kỳ khuếch đại, các đoạn lặp ngắn tiếp đoạn lặp đi lặp lại trải qua hiện tượng **PCR strand slippage stutter**, sinh ra các đỉnh bóng làm phức tạp việc bóc tách hồ sơ. Các nhà phân tích tính toán một cách có phương pháp **reverse stutter peak ratio** đặc thù cho từng locus để kiểm chứng xem liệu một tín hiệu phụ có đơn thuần phản ánh sự trượt enzyme lùi bốn base tiêu chuẩn hay không. Đồng thời, quá trình khuếch đại chu kỳ cao đôi khi tạo ra một **forward stutter product** cực nhỏ, đòi hỏi phải lọc nghiêm ngặt để các sai số tiến bốn base không bị ghi nhận thành các người đóng góp độc lập. Bên dưới những tín hiệu sinh học này là sự dao động liên tục của **electropherogram baseline noise floor**, nơi các gợn sóng cảm biến quang học và điện tử ngẫu nhiên không ngừng trồi sụt. Để ngăn chặn nhiễu điện tử giả mạo xâm nhập vào tài liệu hồ sơ vụ án, các phòng thí nghiệm thực thi một **analytical detection threshold** đã được định chuẩn, bên dưới ngưỡng này không có đỉnh sắc ký nào được ghi nhận. Khi xử lý các đỉnh đơn lẻ trong các mẫu bản sao thấp, giám định viên phải tham chiếu **stochastic interpretation threshold** cao hơn để tránh nhầm lẫn một cá thể dị hợp tử bị mất alen thành một cá thể đồng hợp tử thực sự. Trong các bằng chứng bị tổn hại nặng nề, các nhà phân tích lường trước một **allelic drop-out probability** không thể xem nhẹ, nhận thức rằng các alen thật của người hiến tặng thường thất bại trong việc khuếch đại vượt lên trên các giới hạn nền. Ngược lại, các chất tạp nhiễm vi môi trường xung quanh có thể đưa vào các tín hiệu lạc dòng, đòi hỏi các nhà phân tích phải mô tả đặc trưng của **allelic drop-in frequency** nền trên khắp các mẻ chứng âm. Khi cả hai alen chị em đều khuếch đại thành công, việc đánh giá chiều cao tương đối của chúng sẽ xác lập **heterozygote peak balance**, giúp gắn cờ sự khuếch đại không đồng đều hoặc sự chia sẻ người đóng góp tiềm ẩn. Hơn nữa, các phát xạ huỳnh quang cường độ cao ở các kênh quang học liền kề phải được xem xét kỹ lưỡng để đảm bảo rằng một đỉnh vết rõ ràng không phải là một **spectral pull-up artifact** chưa được hiệu chỉnh. Khi tất cả các sai số thiết bị và tỷ lệ đỉnh đã được xác minh, nhà di truyền học pháp y sẽ khởi động quy trình **number of contributors estimation**, thiết lập khung nền tảng cần thiết cho việc bóc tách hỗn hợp bằng xác suất.

---

## Review in context (Part 2: Probabilistic genotyping, MCMC algorithms, and evidentiary weight)

Modern forensic interpretation has transitioned decisively from heuristic binary thresholds toward **continuous probabilistic genotyping**, which leverages the complete quantitative topography of electropherograms. Rather than discarding ambiguous signals, bioinformatic engines execute exhaustive **Markov chain Monte Carlo deconvolution**, exploring parameter space through millions of simulated mixture iterations. The underlying mathematical framework models **electropherogram peak height variance**, treating signal deviations as continuous probability distributions conditioned on sample degradation and template input. Once the statistical sampling stabilizes, the engine performs a formal **likelihood ratio calculation** to quantify the probative strength of the physical evidence. The analysis requires specifying a clear **prosecution proposition hypothesis**, asserting that the person of interest contributed biological material alongside known background donors. This proposition is formally tested against the competing **defense proposition hypothesis**, which posits that an unknown, unrelated individual deposited the biological trace. To prevent statistical inflation stemming from endogamy or co-ancestry in isolated populations, algorithms incorporate an empirical **subpopulation co-ancestry coefficient**. Through this rigorous Bayesian ratio, the court obtains an objective **weight of evidence quantification**, replacing subjective witness opinions with mathematically defensible likelihoods. Diagnostic trace plots are examined post-analysis to confirm that iterations successfully cleared the initial **MCMC burn-in phase** and achieved robust parameter convergence. Concurrently, quality managers must verify that the separation chemistry remained free from **gel capillary polymer degradation**, which would otherwise smear peak widths and distort variance metrics. When dealing with cold casework, interpreting a severely **degraded low-copy template profile** presents formidable challenges, yet continuous models reliably account for exponentially declining peak heights across high-molecular-weight markers. Each modeled donor is ultimately assigned a **posterior genotype probability** distribution, delineating the most probable allele configurations supported by the physical data. When defended under vigorous cross-examination, this transparent methodology substantiates the overall **veracity of forensic deconvolution**, ensuring that justice is anchored in unshakeable statistical integrity.

**Bản dịch tiếng Việt:**

Sự diễn giải pháp y hiện đại đã chuyển đổi dứt khoát từ các ngưỡng nhị phân kinh nghiệm sang phương pháp **continuous probabilistic genotyping**, tận dụng toàn bộ địa hình định lượng của các biểu đồ điện di. Thay vì loại bỏ các tín hiệu mơ hồ, các công cụ tin sinh học thực thi quy trình **Markov chain Monte Carlo deconvolution** thấu đáo, khám phá không gian tham số thông qua hàng triệu vòng lặp hỗn hợp mô phỏng. Khung toán học nền tảng mô hình hóa **electropherogram peak height variance**, xử lý các độ lệch tín hiệu như các phân phối xác suất liên tục có điều kiện dựa trên sự thoái hóa mẫu và lượng mẫu nạp vào. Khi quá trình lấy mẫu thống kê ổn định, công cụ thực hiện một **likelihood ratio calculation** chính thức để định lượng sức mạnh chứng minh của chứng cứ vật lý. Phân tích đòi hỏi phải chỉ định một **prosecution proposition hypothesis** rõ ràng, khẳng định rằng người diện nghi vấn đã đóng góp vật chất sinh học cùng với những người hiến tặng nền đã biết. Mệnh đề này được kiểm định chính thức chống lại **defense proposition hypothesis** cạnh tranh, vốn cho rằng một cá nhân chưa xác định, không có quan hệ họ hàng đã để lại dấu vết sinh học. Để ngăn chặn sự thổi phồng thống kê bắt nguồn từ hôn nhân cận huyết hoặc chung tổ tiên trong các quần thể biệt lập, các thuật toán đưa vào một **subpopulation co-ancestry coefficient** thực nghiệm. Thông qua tỷ số Bayes nghiêm ngặt này, tòa án thu được một sự **weight of evidence quantification** khách quan, thay thế các ý kiến nhân chứng chủ quan bằng các khả năng có thể bảo vệ được về mặt toán học. Các biểu đồ dấu vết chẩn đoán được kiểm tra sau phân tích để xác nhận rằng các vòng lặp đã vượt qua thành công **MCMC burn-in phase** ban đầu và đạt được sự hội tụ tham số vững chắc. Đồng thời, các nhà quản lý chất lượng phải xác minh rằng hóa trình phân tách không bị ảnh hưởng bởi **gel capillary polymer degradation**, điều mà nếu xảy ra sẽ làm nhòe độ rộng của đỉnh và làm biến dạng các số đo phương sai. Khi xử lý các vụ án bế tắc, việc diễn giải một **degraded low-copy template profile** nghiêm trọng đặt ra những thách thức ghê gớm, tuy nhiên các mô hình liên tục giải thích một cách đáng tin cậy sự suy giảm chiều cao đỉnh theo hàm số mũ trên các dấu ấn có trọng lượng phân tử cao. Mỗi người đóng góp được mô hình hóa cuối cùng được gán một phân phối **posterior genotype probability**, phân định các cấu hình alen có khả năng xảy ra nhất được hỗ trợ bởi dữ liệu vật lý. Khi được bảo vệ dưới sự đối tụng chéo gay gắt, phương pháp luận minh bạch này khẳng định **veracity of forensic deconvolution** toàn diện, đảm bảo rằng công lý được neo đậu trong sự liêm chính thống kê không thể lay chuyển.
