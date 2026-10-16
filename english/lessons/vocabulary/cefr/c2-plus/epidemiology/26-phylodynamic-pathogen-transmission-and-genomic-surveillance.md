# C2+ Vocabulary 26 — Phylodynamic pathogen transmission, coalescent theory, and genomic outbreak surveillance

This lesson explores the mathematical, statistical, and bioinformatic frameworks used to infer pathogen transmission dynamics directly from viral and bacterial genomic sequences. The vocabulary moves systematically from coalescent theory and molecular clock calibrations to Bayesian skyline demographic inference, founder lineage tracking, antigenic drift immune escape, and wastewater genomic deconvolution.

---

## 1. coalescent theory framework /ˌkoʊəˈlɛsənt ˈθɪəri ˈfreɪmwɜrk/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường đứng làm nền tảng toán học trong di truyền học quần thể và dịch tễ học phân tử (*employ*, *formulate*, *underpin*).

**Core meaning — English:** A retrospective mathematical model in population genetics that traces gene genealogies backward in time from a contemporary sample until all lineages merge (coalesce) into a single common ancestral sequence.

**Core meaning & mental image — Tiếng Việt:** Khung lý thuyết hợp dòng (coalescent theory). Hãy tưởng tượng bạn đang tua ngược một cuốn băng video gia phả: xuất phát từ hàng trăm mẫu virus thu thập tại các bệnh viện ngày hôm nay, các nhánh cây phả hệ lùi dần về quá khứ và "chập lại" thành một nhánh duy nhất tại thời điểm ca bệnh số 0 (index case) xuất hiện; tốc độ chập lại của các nhánh tỷ lệ nghịch với quy mô dân số của dịch bệnh.

**Grammar & collocations:** `under the coalescent theory framework` — dưới khung lý thuyết hợp dòng; `apply a coalescent theory framework` — áp dụng khung lý thuyết hợp dòng; `coalescent theory framework assumptions` — các giả định của khung lý thuyết hợp dòng.

**Register & nuance:** Trọng tâm phương pháp luận của dịch tễ học phát sinh chủng loài (phylodynamics). Cho phép ước tính lịch sử quy mô dịch bệnh trong quá khứ mà không cần hồ sơ ca bệnh ghi chép lâm sàng đầy đủ.

**Examples:** `Under the coalescent theory framework, researchers inferred past transmission fluctuations of the epidemic by modeling the historical merger rates of sampled viral lineages.` → Dưới khung lý thuyết hợp dòng, các nhà nghiên cứu đã suy luận những biến động lây truyền trong quá khứ của dịch bệnh bằng cách mô hình hóa tốc độ hợp dòng trong lịch sử của các dòng virus được lấy mẫu.

**Liên kết tiếng Hàn:** `합류 이론 체계` (合流理論體系) — khung lý thuyết hợp dòng (coalescent framework).

---

## 2. molecular clock substitution rate /məˈlɛkjələr klɑk ˌsʌbstəˈtuːʃən reɪt/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường đo bằng substitutions per site per year, subs/site/yr). Thường làm biến số chuẩn hóa trục thời gian (*calibrate*, *estimate*, *quantify*).

**Core meaning — English:** The estimated mean pace at which nucleotide mutations become fixed within a pathogen population over calendar time, serving as a temporal calibration yardstick to convert genetic distances into calendar dates.

**Core meaning & mental image — Tiếng Việt:** Tốc độ thay thế của đồng hồ phân tử. Hình ảnh chiếc đồng hồ tích tắc bên trong bộ gen của mầm bệnh: cứ sau một số lần nhân bản nhất định trong cộng đồng (ví dụ 2 tuần một lần), bộ gen RNA lại tích lũy thêm một đột biến ngẫu nhiên; bằng cách đếm số hạt cát đột biến này rơi xuống, các nhà khoa học có thể tính ngược ra chính xác ngày tháng virus bắt đầu lây lan.

**Grammar & collocations:** `calibrate the molecular clock substitution rate` — hiệu chuẩn tốc độ thay thế của đồng hồ phân tử; `constant molecular clock substitution rate` — tốc độ thay thế đồng hồ phân tử không đổi; `variation in molecular clock substitution rates` — biến thiên trong tốc độ thay thế đồng hồ phân tử.

**Register & nuance:** Thuật ngữ tiến hóa phân tử tinh xác. Khác với tốc độ đột biến nguyên khai (*mutation rate* - đo trên mỗi chu kỳ sao chép tế bào), *substitution rate* chỉ tính các đột biến đã sống sót qua chọn lọc tự nhiên và lan tỏa trong quần thể theo thời gian lịch.

**Examples:** `By accurately calibrating the molecular clock substitution rate, the team determined that the respiratory pathogen had been circulating undetected for months before clinical detection.` → Bằng cách hiệu chuẩn chính xác tốc độ thay thế của đồng hồ phân tử, nhóm nghiên cứu đã xác định rằng mầm bệnh đường hô hấp đã lưu hành âm thầm suốt nhiều tháng trước khi được phát hiện trên lâm sàng.

**Liên kết tiếng Hàn:** `분자 시계 치환율` (分子時計置換率) — tốc độ thay thế của đồng hồ phân tử.

---

## 3. relaxed clock rate calibration /rɪˈlækst klɑk reɪt ˌkæləˈbreɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường là phương pháp thống kê Bayesian trong phần mềm BEAST (*perform*, *adopt*, *implement*).

**Core meaning — English:** A phylogenetic modeling approach that allows evolutionary substitution rates to vary independently across different branches of a phylogenetic tree, rather than assuming a rigid, constant pace across all lineages.

**Core meaning & mental image — Tiếng Việt:** Hiệu chuẩn tốc độ đồng hồ thư giãn (relaxed clock). Hình ảnh một đàn vận động viên chạy việt dã: thay vì bắt ép mọi nhánh virus phải chạy với một vận tốc đều tăm tắp (strict clock), mô hình "thư giãn" cho phép mỗi nhánh chạy nhanh hoặc chạy chậm tùy ý (do áp lực chọn lọc hoặc vật chủ khác nhau), mang lại bức tranh tái dựng lịch sử tiến hóa chân thực và mềm dẻo hơn nhiều.

**Grammar & collocations:** `employ relaxed clock rate calibration` — sử dụng hiệu chuẩn tốc độ đồng hồ thư giãn; `uncorrelated relaxed clock rate calibration` — hiệu chuẩn đồng hồ thư giãn không tương quan; `Bayesian relaxed clock rate calibration` — hiệu chuẩn tốc độ đồng hồ thư giãn theo trường phái Bayes.

**Register & nuance:** Tiêu chuẩn phân tích hiện đại. Đóng vai trò sống còn khi phân tích các đợt bùng phát mầm bệnh nơi một nhánh đột biến có thể tăng tốc độ tiến hóa đột ngột do lây truyền qua quần thể suy giảm miễn dịch.

**Examples:** `Applying an uncorrelated relaxed clock rate calibration prevented distortion in divergence time estimates across fast-evolving epidemic sub-lineages.` → Việc áp dụng hiệu chuẩn tốc độ đồng hồ thư giãn không tương quan đã ngăn ngừa sự bóp méo trong các ước tính thời gian phân kỳ giữa các phân nhánh dịch bệnh tiến hóa nhanh.

**Liên kết tiếng Hàn:** `이완 시계율 교정` (弛緩時計率校正) — hiệu chuẩn tốc độ đồng hồ thư giãn.

---

## 4. Bayesian skyline reconstruction /ˈbeɪziən ˈskaɪlaɪn ˌriːkənˈstrʌkʃən/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase` (thường gọi là Bayesian Skyline Plot - BSP). Thường làm công cụ đồ họa tái hiện kích thước quần thể hiệu dụng (*construct*, *generate*, *reveal*).

**Core meaning — English:** A non-parametric coalescent statistical technique that infers temporal changes in pathogen effective population size directly from sequence data without enforcing a predefined demographic growth model (such as constant or exponential growth).

**Core meaning & mental image — Tiếng Việt:** Sự tái dựng đường chân trời Bayes (Bayesian Skyline Plot). Hãy tưởng tượng bức tranh vẽ đường chân trời của một thành phố với các tòa nhà cao thấp nhấp nhô: đồ thị Skyline này vạch ra sự thăng trầm của số lượng cá thể virus trong lịch sử; nhìn vào đỉnh và đáy của đường chân trời, ta thấy rõ mồn một các giai đoạn dịch bệnh bùng nổ cấp số nhân cũng như những khoảng thời gian dịch bị dập tắt sau lệnh phong tỏa.

**Grammar & collocations:** `generate a Bayesian skyline reconstruction` — tạo bản tái dựng đường chân trời Bayes; `Bayesian skyline reconstruction of population dynamics` — sự tái dựng đường chân trời Bayes về động lực học quần thể; `reveal via Bayesian skyline reconstruction` — hé lộ qua tái dựng đường chân trời Bayes.

**Register & nuance:** Phương pháp kinh điển của Drummond và Rambaut. Tính chất "phi tham số" (non-parametric) giúp nó tự do phản ánh biến động dữ liệu thực tế mà không bị đóng khung trong các giả định hình học gượng ép.

**Examples:** `The Bayesian skyline reconstruction revealed a steep tenfold expansion in effective infections immediately preceding the formal implementation of quarantine measures.` → Bản tái dựng đường chân trời Bayes đã hé lộ sự gia tăng gấp mười lần về số ca nhiễm hiệu dụng ngay trước thời điểm triển khai chính thức các biện pháp cách ly.

**Liên kết tiếng Hàn:** `베이지안 스카이라인 재구성` (Bayes스카이라인再構成) — tái dựng đường chân trời Bayes (BSP).

---

## 5. effective reproductive number estimation /ɪˈfɛktɪv ˌriːprəˈdʌktɪv ˈnʌmbər ˌɛstəˈmeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (ước tính $R_e$ hoặc $R_t$). Thường là chỉ số cốt lõi đánh giá hiệu quả can thiệp y tế công cộng (*derive*, *track*, *calculate*).

**Core meaning — English:** The real-time computational derivation of the average number of secondary infections generated by a typical infected individual at a specific time point ($R_t$), calculated directly from time-stamped phylogenetic branching rates.

**Core meaning & mental image — Tiếng Việt:** Sự ước tính hệ số lây nhiễm hiệu dụng ($R_e / R_t$). Hình ảnh chiếc cần gạt ga của cỗ máy dịch bệnh: nếu $R_t > 1$, cỗ máy đang tăng tốc lao dốc và số ca bệnh bùng nổ; nếu $R_t < 1$, cỗ máy đang giảm tốc hãm phanh và dịch bệnh đang lụi tàn; việc tính toán $R_t$ trực tiếp từ cây phả hệ gen giúp ngành y tế biết được ngọn lửa dịch đang bùng cháy hay sắp tắt mà không cần đợi người bệnh đi xét nghiệm.

**Grammar & collocations:** `phylodynamic effective reproductive number estimation` — ước tính hệ số lây nhiễm hiệu dụng bằng phát sinh chủng loài; `real-time effective reproductive number estimation` — ước tính hệ số lây nhiễm hiệu dụng thời gian thực; `accuracy of effective reproductive number estimation` — độ chính xác của việc ước tính hệ số lây nhiễm hiệu dụng.

**Register & nuance:** Trọng tâm của dịch tễ học toán học và can thiệp phi dược phẩm (NPIs). Khác với $R_0$ (hệ số lây truyền cơ bản trong quần thể hoàn toàn mẫn cảm), $R_t$ biến thiên liên tục theo hành vi xã hội và tỷ lệ bao phủ vắc-xin.

**Examples:** `Phylogenetic effective reproductive number estimation confirmed that public health lockdowns successfully drove transmission below the critical replacement threshold of 1.0.` → Việc ước tính hệ số lây nhiễm hiệu dụng từ phả hệ đã xác nhận rằng các lệnh phong tỏa y tế công cộng đã kéo mức độ lây truyền xuống dưới ngưỡng thay thế then chốt là 1,0 thành công.

**Liên kết tiếng Hàn:** `실효 감염 재생산 지수 추정` (實效感染再生産指數推定) — ước tính hệ số sinh sản lây nhiễm hiệu dụng (Re/Rt).

---

## 6. birth-death skyline model /bɜrθ dɛθ ˈskaɪlaɪn ˈmɑdəl/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường viết tắt là BDSKY). Thường làm mô hình xác suất chính trong BEAST2 (*fit*, *implement*, *employ*).

**Core meaning — English:** A forward-in-time phylodynamic model that explicitly accounts for transmission (birth), recovery or death (death), and sampling probability over discrete temporal intervals to quantify epidemiological parameters from genetic trees.

**Core meaning & mental image — Tiếng Việt:** Mô hình đường chân trời sinh-tử (BDSKY). Hãy tưởng tượng một dòng sông sinh học chảy xuôi từ quá khứ đến hiện tại: mỗi nhánh rẽ đại diện cho một ca lây nhiễm mới (sinh), mỗi nhánh đứt đoạn đại diện cho một ca khỏi bệnh hoặc tử vong (tử), và những chiếc phao cứu sinh được thả xuống đại diện cho xác suất lấy mẫu giải trình tự gen của nhân viên y tế; mô hình này tính toán chuẩn xác nhịp đập dịch bệnh qua từng mốc thời gian.

**Grammar & collocations:** `fit a birth-death skyline model` — khớp một mô hình đường chân trời sinh-tử; `birth-death skyline model parameters` — các thông số mô hình đường chân trời sinh-tử; `implement the birth-death skyline model` — triển khai mô hình đường chân trời sinh-tử.

**Register & nuance:** Sự phát triển vượt bậc so với các mô hình hợp dòng cổ điển (coalescent models). Mô hình sinh-tử xử lý xuất sắc các trường hợp lấy mẫu không đồng đều và tính toán trực tiếp được thời gian đào thải mầm bệnh (*infectious period*).

**Examples:** `By fitting a multi-interval birth-death skyline model, the epidemiologists disentangled genuine changes in viral transmission from temporal fluctuations in clinical testing capacity.` → Bằng cách khớp một mô hình đường chân trời sinh-tử đa khoảng thời gian, các nhà dịch tễ học đã tách bạch được những thay đổi thực sự trong sự lây truyền virus khỏi các biến động mang tính thời điểm về năng lực xét nghiệm lâm sàng.

**Liên kết tiếng Hàn:** `출생-사망 스카이라인 모델` (出生死亡skyline model) — mô hình đường chân trời sinh-tử (BDSKY).

---

## 7. most recent common ancestor dating /moʊst ˈriːsənt ˈkɑmən ˈænsɛstər ˈdeɪtɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (thường gọi là tMRCA dating). Thường là nhiệm vụ truy tìm nguồn gốc thời gian của biến chủng (*conduct*, *estimate*, *pinpoint*).

**Core meaning — English:** The statistical estimation of the exact calendar date or geological epoch corresponding to the deepest divergence node from which all existing lineages in a specified phylogenetic clade originated.

**Core meaning & mental image — Tiếng Việt:** Định tuổi tổ tiên chung gần nhất (định niên đại tMRCA). Hình ảnh chiếc rễ cọc sâu nhất của cái cây: dù trên mặt đất có hàng triệu chiếc lá phân tỏa khắp nơi, các nhà phân tích lần ngược từng cành cây để tìm ra chính xác ngày nào, tháng nào cái mầm rễ đầu tiên được gieo xuống đất, vạch trần thời điểm virus lần đầu nhảy sang người.

**Grammar & collocations:** `accurate most recent common ancestor dating` — việc định tuổi tổ tiên chung gần nhất chính xác; `tMRCA dating uncertainty` — độ không đảm bảo trong định tuổi tMRCA; `pinpoint the origin via most recent common ancestor dating` — xác định nguồn gốc thông qua việc định tuổi tổ tiên chung gần nhất.

**Register & nuance:** Bằng chứng pháp y phân tử mang tính quyết định trong điều tra nguồn gốc dịch bệnh. Khoảng tin cậy HPD (Highest Posterior Density) 95% của tMRCA cho biết khung thời gian tối đa và tối thiểu của sự kiện lây truyền khởi đầu.

**Examples:** `Rigorous most recent common ancestor dating established that the novel pathogen lineage emerged in the animal market between late October and mid-November.` → Việc định tuổi tổ tiên chung gần nhất một cách khắt khe đã xác lập rằng dòng mầm bệnh mới xuất hiện tại chợ động vật vào khoảng thời gian giữa cuối tháng Mười và giữa tháng Mười Một.

**Liên kết tiếng Hàn:** `가장 최근 공통 조상 연대 측정` (最recent共通祖先年代測定) — xác định niên đại tổ tiên chung gần nhất (tMRCA dating).

---

## 8. ultrametric phylogenetic tree /ˌʌltrəˈmɛtrɪk ˌfaɪloʊdʒəˈnɛtɪk triː/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường là sản phẩm đầu ra của các phân tích đồng hồ phân tử (*construct*, *plot*, *inspect*).

**Core meaning — English:** A rooted phylogenetic tree in which the path length from the root to every terminal tip is precisely proportional to calendar time, causing all contemporaneously sampled sequences to align on the same temporal plane.

**Core meaning & mental image — Tiếng Việt:** Cây phả hệ siêu lượng (cây phát sinh thời gian ultrametric). Hãy hình dung một chùm rễ cây mọc thẳng đứng từ một mặt phẳng bàn: tất cả các mẫu virus lấy cùng ngày hôm nay đều nằm thẳng tắp trên một đường chân trời bằng phẳng, khoảng cách từ gốc rễ lên đến đầu cành phản ánh đúng số tuần, số tháng lịch sử trôi qua thay vì độ dài đột biến di truyền méo mó.

**Grammar & collocations:** `construct an ultrametric phylogenetic tree` — xây dựng một cây phả hệ siêu lượng; `time-calibrated ultrametric phylogenetic tree` — cây phả hệ siêu lượng đã hiệu chuẩn thời gian; `ultrametric phylogenetic tree topology` — tô-pô cây phả hệ siêu lượng.

**Register & nuance:** Dạng cây phân loại bắt buộc để phân tích động lực học dịch tễ. Khác với cây phylogram (nơi độ dài cành đo số lượng đột biến thô), cây ultrametric biểu diễn trục hoành bằng thời gian thực.

**Examples:** `The evolutionary history was mapped onto an ultrametric phylogenetic tree where branch lengths directly corresponded to weeks of elapsed community transmission.` → Lịch sử tiến hóa đã được ánh xạ lên một cây phả hệ siêu lượng, nơi chiều dài các nhánh tương ứng trực tiếp với số tuần lây truyền trong cộng đồng đã trôi qua.

**Liên kết tiếng Hàn:** `초계량 계통수` (超計量系統樹) — cây phả hệ siêu lượng (ultrametric tree).

---

## 9. tree topology branch credibility /triː təˈpɑlədʒi bræntʃ ˌkrɛdəˈbɪləti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (thường đo bằng posterior probability từ 0 đến 1, hoặc bootstrap value). Thường làm thước đo độ tin cậy của cấu trúc cành (*evaluate*, *confirm*, *exceed*).

**Core meaning — English:** The statistical metric (such as Bayesian posterior probability) indicating the confidence level that a specific branching split or clade relationship in a reconstructed phylogenetic tree represents the true evolutionary history.

**Core meaning & mental image — Tiếng Việt:** Độ tin cậy nhánh của tô-pô cây (xác suất hậu nghiệm của cành phả hệ). Hình ảnh một cái chạc ba trên thân cây: bạn muốn biết chắc liệu hai ca bệnh A và B có thực sự lây cho nhau trước khi lây cho C hay không; con số độ tin cậy (ví dụ 0.99) giống như một con dấu kiểm định khẳng định 99% khả năng cấu trúc nhánh này là sự thật hiển nhiên chứ không phải sự trùng hợp ngẫu nhiên.

**Grammar & collocations:** `high tree topology branch credibility` — độ tin cậy nhánh của tô-pô cây cao; `assess tree topology branch credibility` — đánh giá độ tin cậy nhánh của tô-pô cây; `marginal tree topology branch credibility` — độ tin cậy nhánh của tô-pô cây ở mức mong manh.

**Register & nuance:** Khái niệm thống kê sống còn trong suy luận phát sinh chủng loại. Bất kỳ kết luận điều tra dịch tễ nào dựa trên các cành có độ tin cậy thấp (< 0.70 hoặc < 70%) đều bị coi là suy đoán thiếu căn cứ.

**Examples:** `The hypothesis of hospital-acquired superspreading was accepted only after the disputed lineage node exhibited a tree topology branch credibility greater than 0.95.` → Giả thuyết về sự kiện siêu lây nhiễm tại bệnh viện chỉ được chấp nhận sau khi nút phân nhánh đang tranh cãi biểu hiện độ tin cậy nhánh của tô-pô cây lớn hơn 0,95.

**Liên kết tiếng Hàn:** `수형도 위상 분기 신뢰도` (樹形圖位相分岐信賴度) — độ tin cậy của phân nhánh tô-pô cây.

---

## 10. Markov chain Monte Carlo sampling /ˈmɑrkɔf tʃeɪn ˌmɑnti ˈkɑrloʊ ˈsæmplɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (thường viết tắt là MCMC sampling). Thường làm thuật toán tính toán phân phối hậu nghiệm (*run*, *converge*, *employ*).

**Core meaning — English:** A class of computational algorithms that repeatedly samples states from a complex, high-dimensional probability distribution via a random walk Markov chain to approximate joint posterior probabilities in Bayesian phylogenetic inference.

**Core meaning & mental image — Tiếng Việt:** Lấy mẫu chuỗi Markov Monte Carlo (MCMC). Hãy tưởng tượng bạn đang khám phá một dãy núi hiểm trở trong đêm tối dày đặc sương mù để tìm đỉnh núi cao nhất (lời giải chính xác nhất cho cây phả hệ): thuật toán MCMC giống như một người leo núi bước hàng triệu bước đi ngẫu nhiên, tung xúc xắc tại mỗi bước để quyết định leo tiếp hay rẽ lối, dần dần vẽ nên toàn bộ bản đồ địa hình xác suất của lịch sử dịch bệnh.

**Grammar & collocations:** `execute Markov chain Monte Carlo sampling` — thực thi việc lấy mẫu chuỗi Markov Monte Carlo; `convergence of Markov chain Monte Carlo sampling` — sự hội tụ của thuật toán lấy mẫu MCMC; `Markov chain Monte Carlo sampling chains` — các chuỗi lấy mẫu Markov Monte Carlo.

**Register & nuance:** Động cơ tính toán cốt lõi của phần mềm BEAST, MrBayes và RevBayes. Đòi hỏi phải kiểm tra chỉ số ESS (Effective Sample Size > 200) để đảm bảo chuỗi lấy mẫu đã hội tụ đầy đủ.

**Examples:** `The researchers executed tens of millions of iterations of Markov chain Monte Carlo sampling to reach parameter convergence across complex demographic sub-models.` → Các nhà nghiên cứu đã thực thi hàng chục triệu vòng lặp lấy mẫu chuỗi Markov Monte Carlo để đạt được sự hội tụ tham số xuyên suốt các mô hình nhân khẩu học con phức tạp.

**Liên kết tiếng Hàn:** `마르코프 연쇄 몬테카를로 표본추출` (Markov連鎖Monte Carlo標本抽出) — lấy mẫu chuỗi Markov Monte Carlo (MCMC).

---

## 11. discrete trait phylogeography /dɪˈskriːt treɪt ˌfaɪloʊdʒiˈɑɡrəfi/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường là phương pháp mô hình hóa đường di chuyển địa lý (*conduct*, *apply*, *reconstruct*).

**Core meaning — English:** A statistical framework that treats discrete geographic locations, administrative regions, or host species as discrete character states mapped onto phylogenetic tree branches via continuous-time Markov transition matrices.

**Core meaning & mental image — Tiếng Việt:** Địa lý sinh học chủng loại theo tính trạng rời rạc. Hãy tưởng tượng bạn dán các nhãn màu khác nhau lên từng nhánh cây phả hệ (màu xanh là Hà Nội, màu đỏ là Tokyo, màu vàng là Paris): mô hình này tính toán xác suất một nhánh cây đổi màu khi nhảy từ thành phố này sang thành phố khác, vẽ nên đường bay quốc tế chính xác của virus qua từng biên giới.

**Grammar & collocations:** `reconstruct migration routes via discrete trait phylogeography` — tái dựng lộ trình di cư qua địa lý chủng loài tính trạng rời rạc; `discrete trait phylogeography model` — mô hình địa lý sinh học chủng loại tính trạng rời rạc; `spatial diffusion in discrete trait phylogeography` — sự khuếch tán không gian trong địa lý chủng loại tính trạng rời rạc.

**Register & nuance:** Trọng tâm của dịch tễ học không gian (spatial epidemiology). Cần phân biệt với *continuous phylogeography*, vốn sử dụng tọa độ GPS liên tục (kinh độ, vĩ độ) bằng chuyển động Brown (Brownian motion).

**Examples:** `Using discrete trait phylogeography, the global consortium demonstrated that the transatlantic flight corridor served as the primary dispersal vector for the emerging lineage.` → Sử dụng địa lý sinh học chủng loại theo tính trạng rời rạc, liên minh toàn cầu đã chứng minh rằng hành lang các chuyến bay xuyên Đại Tây Dương đóng vai trò là vector phát tán chính của dòng biến chủng mới nổi.

**Liên kết tiếng Hàn:** `이산 형질 계통지리학` (離散形質系統地理學) — địa lý sinh học chủng loại theo tính trạng rời rạc.

---

## 12. founder lineage dispersion /ˈfaʊndər ˈliːniɪdʒ dɪˈspɜrʒən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường đứng làm hiện tượng gieo mầm dịch bệnh tại ổ dịch mới (*observe*, *drive*, *accelerate*).

**Core meaning — English:** The rapid geographic or demographic spread of a newly introduced single ancestral pathogen variant that successfully colonizes an uninfected or susceptible host subpopulation, establishing sustained local transmission chains.

**Core meaning & mental image — Tiếng Việt:** Sự phát tán của dòng biến chủng sáng lập (hiệu ứng sáng lập dòng). Hình ảnh một đốm tàn thuốc đơn lẻ rơi xuống một cánh rừng khô hạn: chỉ cần một người mang một biến chủng virus mới nhập cảnh vào một thành phố chưa có miễn dịch, biến chủng "sáng lập" đó nhân bản với tốc độ vũ bão và nhanh chóng thống trị toàn bộ mạng lưới lây nhiễm của địa phương.

**Grammar & collocations:** `rapid founder lineage dispersion` — sự phát tán nhanh chóng của dòng biến chủng sáng lập; `facilitate founder lineage dispersion` — tạo điều kiện cho sự phát tán dòng sáng lập; `trace founder lineage dispersion` — lần theo dấu vết phát tán của dòng biến chủng sáng lập.

**Register & nuance:** Hiện tượng tiến hóa kết hợp giữa hiệu ứng người sáng lập (founder effect) và dịch tễ học xâm nhập (importation dynamics). Giải thích tại sao một biến chủng ngẫu nhiên có thể chiếm ưu thế tuyệt đối chỉ nhờ đến sớm trước các dòng khác.

**Examples:** `Super-spreader gatherings accelerated founder lineage dispersion, allowing a solitary imported case to seed hundreds of secondary infections throughout the province.` → Các buổi tụ tập siêu lây nhiễm đã đẩy nhanh sự phát tán của dòng biến chủng sáng lập, cho phép một ca bệnh nhập cảnh đơn độc gieo rắc hàng trăm ca nhiễm thứ cấp trên khắp toàn tỉnh.

**Liên kết tiếng Hàn:** `창시자 계통 확산` (創始者系統擴散) — sự phát tán của dòng biến chủng sáng lập.

---

## 13. super-spreader genomic footprint /ˈsuːpər ˈsprɛdər dʒiˈnoʊmɪk ˈfʊtprɪnt/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường là dấu vết cấu trúc hình sao trên cây phả hệ (*detect*, *identify*, *exhibit*).

**Core meaning — English:** The distinctive phylogenetic star-like branching pattern characterized by numerous identical or near-identical viral sequences radiating directly from a single ancestral node, diagnostic of an explosive transmission event driven by an individual host.

**Core meaning & mental image — Tiếng Việt:** Dấu ấn gen của sự kiện siêu lây nhiễm. Trên cây phả hệ di truyền, dấu ấn này bộc lộ như một chùm pháo hoa bung nở (star-like topology): từ một nút duy nhất ở tâm, hàng chục nhánh cành bung ra đồng loạt với bộ gen giống hệt nhau đến từng chữ cái nucleotide, chứng minh một bệnh nhân duy nhất đã ho hoặc thở ra virus lây nhiễm cho hàng trăm người cùng lúc trong một căn phòng kín.

**Grammar & collocations:** `characteristic super-spreader genomic footprint` — dấu ấn gen siêu lây nhiễm đặc trưng; `detect a super-spreader genomic footprint` — phát hiện dấu ấn gen của sự kiện siêu lây nhiễm; `star-like super-spreader genomic footprint` — dấu ấn gen siêu lây nhiễm dạng hình sao.

**Register & nuance:** Bằng chứng kết hợp giữa dịch tễ học phân tử và điều tra dịch tễ thực địa. Giúp phân biệt rạch ròi giữa một chuỗi lây truyền dây chuyền nhiều thế hệ (chain transmission) với một vụ nổ lây nhiễm đơn lẻ (single explosive exposure).

**Examples:** `The massive choir outbreak left an unmistakable super-spreader genomic footprint, with dozens of identical viral sequences radiating outwards from a solitary node.` → Đợt bùng phát lớn tại dàn hợp xướng đã để lại một dấu ấn gen của sự kiện siêu lây nhiễm không thể nhầm lẫn, với hàng chục chuỗi trình tự virus giống hệt nhau tỏa rộng ra từ một nút đơn độc.

**Liên kết tiếng Hàn:** `슈퍼 전파 유전체 발자국` (super傳播誘電體footprint) — dấu ấn di truyền của sự kiện siêu lây nhiễm.

---

## 14. transmission cluster reconstruction /trænzˈmɪʃən ˈklʌstər ˌriːkənˈstrʌkʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường là quy trình điều tra dịch tễ học pháp y (*perform*, *achieve*, *validate*).

**Core meaning — English:** The bioinformatic and epidemiological synthesis of high-resolution genetic sequence differences, shared mutations, and contact-tracing data to reconstruct who infected whom within localized outbreak networks.

**Core meaning & mental image — Tiếng Việt:** Sự tái dựng chùm lây truyền. Hãy tưởng tượng việc ghép một bức tranh xếp hình phức tạp: kết hợp lời khai dịch tễ của bệnh nhân với bản đồ phân tích từng đột biến gen, các nhà khoa học vẽ lại chính xác sơ đồ mạng lưới ai đã lây bệnh cho ai, xác định những mắt xích lây nhiễm vô hình bị bỏ sót trong cộng đồng.

**Grammar & collocations:** `high-resolution transmission cluster reconstruction` — sự tái dựng chùm lây truyền độ phân giải cao; `facilitate transmission cluster reconstruction` — tạo điều kiện tái dựng chùm lây truyền; `transmission cluster reconstruction algorithm` — thuật toán tái dựng chùm lây truyền.

**Register & nuance:** Trọng tâm ứng dụng của điều tra bùng phát dịch tại bệnh viện (nosocomial outbreaks) và cơ sở chăm sóc dài hạn, giúp giải oan hoặc quy trách nhiệm chính xác về nguồn lây.

**Examples:** `High-throughput sequencing enabled near-instantaneous transmission cluster reconstruction, proving that the ward infection originated from a visiting contractor rather than nursing staff.` → Giải trình tự thông lượng cao đã cho phép tái dựng chùm lây truyền gần như tức thời, chứng minh rằng ca nhiễm trong khu bệnh phòng bắt nguồn từ một nhà thầu đến thăm chứ không phải từ đội ngũ điều dưỡng.

**Liên kết tiếng Hàn:** `전파 군집 재구성` (傳播群集再構成) — tái dựng chùm ca bệnh lây truyền.

---

## 15. antigenic drift immune escape /ˌæntɪˈdʒɛnɪk drɪft ɪˈmjuːn ɪˈskeɪp/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường đứng làm cơ chế sinh học vượt rào phòng thủ vắc-xin (*drive*, *cause*, *facilitate*).

**Core meaning — English:** The continuous, incremental evolutionary process in which the progressive accumulation of point mutations in surface viral glycoproteins alters epitope conformations, allowing the virus to evade neutralization by antibodies elicited by prior infection or vaccination.

**Core meaning & mental image — Tiếng Việt:** Sự trốn thoát miễn dịch do trôi dạt kháng nguyên (trôi dạt kháng nguyên né tránh miễn dịch). Hình ảnh một tên tội phạm liên tục phẫu thuật thẩm mỹ từng nét nhỏ trên gương mặt: cứ sau một thời gian, virus lại thay đổi một vài amino acid trên bề mặt gai protein; các kháng thể bảo vệ trong cơ thể (vốn chỉ nhớ mặt chiếc áo cũ) không còn nhận dạng được gương mặt mới của virus, cho phép nó tự do xâm nhập tế bào.

**Grammar & collocations:** `mechanisms of antigenic drift immune escape` — các cơ chế trốn thoát miễn dịch do trôi dạt kháng nguyên; `counter antigenic drift immune escape` — đối phó với sự trốn thoát miễn dịch do trôi dạt kháng nguyên; `antigenic drift immune escape variants` — các biến thể trốn thoát miễn dịch nhờ trôi dạt kháng nguyên.

**Register & nuance:** Nguy cơ hàng đầu khiến vắc-xin cúm mùa và virus corona phải cập nhật thành phần định kỳ hàng năm. Cần phân biệt với *antigenic shift* (đột biến dịch chuyển lớn do tái tổ hợp toàn bộ đoạn gen từ động vật).

**Examples:** `The rapid emergence of sub-lineage mutations fostered substantial antigenic drift immune escape, significantly reducing the protective efficacy of current seasonal booster shots.` → Sự xuất hiện nhanh chóng của các đột biến phân dòng đã thúc đẩy sự trốn thoát miễn dịch do trôi dạt kháng nguyên đáng kể, làm suy giảm nghiêm trọng hiệu lực bảo vệ của các mũi tiêm nhắc lại theo mùa hiện tại.

**Liên kết tiếng Hàn:** `항원 표류 면역 회피` (抗原漂流免疫回避) — trốn thoát miễn dịch do trôi dạt kháng nguyên.

---

## 16. neutral evolutionary expectation /ˈnuːtrəl ˌɛvəˈluːʃənɛri ˌɛksspɛkˈteɪʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường xuất hiện trong các kiểm định thống kê $dN/dS$). Thường làm giả thuyết không (null hypothesis) (*deviate from*, *test*, *assume*).

**Core meaning — English:** The theoretical baseline rate and pattern of genetic variation predicted under the neutral theory of molecular evolution, wherein most mutations are selectively neutral and fix solely through stochastic genetic drift rather than Darwinian positive selection.

**Core meaning & mental image — Tiếng Việt:** Kỳ vọng tiến hóa trung tính (tiến hóa trung tính làm mốc chuẩn). Hãy tưởng tượng mặt nước phẳng lặng của hồ nước tĩnh: nếu không có bất kỳ cơn gió hay dòng chảy chọn lọc nào tác động, các đột biến xuất hiện và trôi dạt hoàn toàn ngẫu nhiên với một tốc độ toán học định trước; hễ một vị trí gen nào đó đột ngột biến đổi nhanh bất thường vượt ra ngoài mặt nước phẳng lặng này, ta biết ngay ở đó đang có một bàn tay chọn lọc thích nghi cực mạnh.

**Grammar & collocations:** `depart from the neutral evolutionary expectation` — đi chệch khỏi kỳ vọng tiến hóa trung tính; `conform to the neutral evolutionary expectation` — phù hợp với kỳ vọng tiến hóa trung tính; `rigorous neutral evolutionary expectation` — kỳ vọng tiến hóa trung tính khắt khe.

**Register & nuance:** Tiền đề cơ bản của lý thuyết trung tính Kimura (Motoo Kimura's Neutral Theory). Bất kỳ khẳng định nào về "đột biến tăng cường độc lực" đều phải chứng minh sự sai lệch có ý nghĩa thống kê so với mốc kỳ vọng trung tính này.

**Examples:** `A statistically significant excess of non-synonymous substitutions departed sharply from the neutral evolutionary expectation, signaling pervasive positive Darwinian selection.` → Sự dư thừa có ý nghĩa thống kê của các đột biến thay thế không đồng nghĩa đã đi chệch mạnh mẽ khỏi kỳ vọng tiến hóa trung tính, báo hiệu sự chọn lọc Darwinian tích cực lan tỏa.

**Liên kết tiếng Hàn:** `중립 진화 기대치` (中立進化期待値) — giá trị kỳ vọng tiến hóa trung tính.

---

## 17. positive selection episodic burst /ˈpɑzətɪv səˈlɛkʃən ˌɛpəˈsɑdɪk bɜrst/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường là bước nhảy vọt tiến hóa bất thình lình của mầm bệnh (*undergo*, *trigger*, *detect*).

**Core meaning — English:** A transient, concentrated surge of Darwinian positive selection acting intensely on specific pathogen gene codons for a brief evolutionary period, rapidly driving adaptive amino acid replacements in response to sudden immune or drug pressure.

**Core meaning & mental image — Tiếng Việt:** Đợt bùng nổ bột phát của chọn lọc tích cực. Hãy hình dung một cuộc đua tăng tốc tên lửa: sau hàng tháng trời virus biến đổi tà tà chậm rãi, cơ thể người bệnh đột ngột dùng thuốc kháng virus mới hoặc sản sinh kháng thể bao vây; dưới áp lực sinh tử ngàn cân treo sợi tóc, virus trải qua một đợt bùng nổ tiến hóa thần tốc, gom góp cùng lúc cả chục đột biến sinh tồn chỉ trong vài ngày để phá vòng vây.

**Grammar & collocations:** `detect a positive selection episodic burst` — phát hiện đợt bùng nổ bột phát của chọn lọc tích cực; `experience a positive selection episodic burst` — trải qua một đợt bùng nổ chọn lọc tích cực; `positive selection episodic burst in surface proteins` — đợt bùng nổ chọn lọc tích cực tại các protein bề mặt.

**Register & nuance:** Khái niệm nâng cao trong phát sinh chủng loài phân tử (sử dụng các thuật toán như MEME hoặc BUSTED trong hệ thống HyPhy). Nhận diện các đợt chọn lọc mang tính thời điểm mà các kiểm định trung bình toàn cây thường bỏ sót.

**Examples:** `The sudden jump of the viral lineage into chronic immunocompromised patients ignited a positive selection episodic burst, creating heavily mutated escape variants.` → Sự lây lan đột ngột của dòng virus vào các bệnh nhân suy giảm miễn dịch mạn tính đã kích hoạt một đợt bùng nổ bột phát của chọn lọc tích cực, tạo ra các biến thể trốn thoát mang đột biến dày đặc.

**Liên kết tiếng Hàn:** `적극적 선택 발작적 분출` (積極的選擇發作的噴出) — đợt bùng nổ bột phát của chọn lọc tích cực.

---

## 18. recombinant lineage mosaicism /riˈkɑmbənənt ˈliːniɪdʒ moʊˈzeɪɪsɪzəm/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường là cấu trúc ghép nối phức tạp của bộ gen mới (*exhibit*, *characterize*, *identify*).

**Core meaning — English:** The complex genomic chimeric architecture of a pathogen lineage containing distinct contiguous segments acquired from two or more divergent ancestral parent lineages via genetic recombination during co-infection.

**Core meaning & mental image — Tiếng Việt:** Cấu trúc khảm của dòng tái tổ hợp (tính chất khảm gen tái tổ hợp). Hãy tưởng tượng một bức tranh khảm mosaic được ghép từ những mảnh gốm vỡ của hai chiếc bình cổ khác màu: khi một bệnh nhân bị nhiễm đồng thời hai biến thể virus khác nhau, bộ máy sao chép gen nhảy qua nhảy lại giữa hai chuỗi RNA, tạo ra một biến chủng "con lai quái vật" mang phần đầu của chủng này nhưng lại mang chiếc đuôi gai của chủng kia.

**Grammar & collocations:** `unambiguous recombinant lineage mosaicism` — cấu trúc khảm của dòng tái tổ hợp rõ ràng; `analyze recombinant lineage mosaicism` — phân tích cấu trúc khảm của dòng tái tổ hợp; `recombinant lineage mosaicism patterns` — các mô thức khảm của dòng tái tổ hợp.

**Register & nuance:** Nguồn gốc tiến hóa của các biến thể lai nguy hiểm (chẳng hạn như các dòng XBB, Deltacron). Đòi hỏi phần mềm phát hiện điểm bẻ gãy tái tổ hợp (như RDP4 hoặc 3Seq) để phân tích độc lập từng đoạn gen.

**Examples:** `Whole-genome alignment confirmed striking recombinant lineage mosaicism, demonstrating that the new variant harbored a structural backbone derived from two distinct clades.` → Việc căn chỉnh toàn bộ hệ gen đã xác nhận cấu trúc khảm của dòng tái tổ hợp nổi bật, chứng minh rằng biến thể mới mang một khung cấu trúc bắt nguồn từ hai nhánh phân loại riêng biệt.

**Liên kết tiếng Hàn:** `재조합 계통 모자이크 현상` (再組合系統mosaic現象) — hiện tượng khảm của dòng tái tổ hợp.

---

## 19. wastewater genomic sequencing /ˈweɪstˌwɔtər dʒiˈnoʊmɪk ˈsiːkwənsɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường đứng làm phương pháp giám sát dịch bệnh cấp quần thể (*implement*, *scale*, *leverage*).

**Core meaning — English:** The high-throughput metagenomic and targeted sequencing of pathogen nucleic acids recovered from municipal sewage influent to survey pathogen diversity, variant frequency, and community incidence independent of clinical testing.

**Core meaning & mental image — Tiếng Việt:** Giải trình tự gen từ nước thải đô thị. Hình ảnh các nhà khoa học lấy mẫu nước từ những cống rãnh đen ngòm của thành phố: dù hàng vạn người dân bị nhiễm bệnh nhẹ không thèm đi khám hay xét nghiệm, virus vẫn bị đào thải theo phân vào hệ thống cống ngầm; máy giải trình tự gen đọc mã toàn bộ các mẫu nước thải này, mang lại bức tranh dịch tễ học trung thực và bao quát toàn bộ hàng triệu cư dân.

**Grammar & collocations:** `routine wastewater genomic sequencing` — giải trình tự gen nước thải định kỳ; `wastewater genomic sequencing surveillance` — giám sát giải trình tự gen nước thải; `power of wastewater genomic sequencing` — sức mạnh của giải trình tự gen nước thải.

**Register & nuance:** Trụ cột của dịch tễ học dựa trên nước thải (Wastewater-Based Epidemiology - WBE). Cho phép cảnh báo sớm trước các làn sóng bùng phát lâm sàng từ 1 đến 2 tuần mà không vi phạm quyền riêng tư cá nhân.

**Examples:** `Public health authorities leveraged wastewater genomic sequencing to track the silent community invasion of emerging sublineages weeks before hospitals registered caseload increases.` → Các cơ quan y tế công cộng đã tận dụng giải trình tự gen từ nước thải để theo dõi sự xâm lấn âm thầm trong cộng đồng của các phân nhánh mới nổi nhiều tuần trước khi các bệnh viện ghi nhận sự gia tăng ca bệnh.

**Liên kết tiếng Hàn:** `하수 유전체 염기서열 분석` (下水誘電體鹽基序列分析) — phân tích trình tự gen nước thải đô thị.

---

## 20. metagenomic target enrichment /ˌmɛtədʒəˈnoʊmɪk ˈtɑrɡɪt ɛnˈrɪtʃmənt/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường là bước chuẩn bị thư viện giải trình tự chuyên sâu (*perform*, *utilize*, *enhance*).

**Core meaning — English:** A specialized molecular library preparation protocol that uses hybrid-capture biotinylated RNA/DNA oligonucleotide probes to selectively pull down and concentrate scarce viral target sequences out of complex, background-dominated metagenomic backgrounds.

**Core meaning & mental image — Tiếng Việt:** Làm giàu mục tiêu siêu gen (làm giàu mục tiêu metagenome). Hãy tưởng tượng bạn đang tìm một chiếc kim dưới đáy đại dương ngổn ngang bùn đất và xác vi khuẩn: kỹ thuật này thả hàng vạn chiếc "nam châm phân tử" tí hon (các đầu dò oligonucleotide) xuống mẫu thử; chúng chỉ bám dính chọn lọc vào các đoạn gen virus mục tiêu rồi dùng hạt từ tính kéo vớt chúng lên, loại bỏ 99.9% rác thải di truyền xung quanh.

**Grammar & collocations:** `probe-based metagenomic target enrichment` — làm giàu mục tiêu siêu gen dựa trên đầu dò; `optimize metagenomic target enrichment` — tối ưu hóa việc làm giàu mục tiêu siêu gen; `efficiency of metagenomic target enrichment` — hiệu quả của việc làm giàu mục tiêu metagenome.

**Register & nuance:** Kỹ thuật cứu tinh cho các mẫu bệnh phẩm môi trường hoặc mẫu lâm sàng có tải lượng virus cực thấp (low viral load). Vượt trội hơn PCR khuếch đại đa mồi về khả năng bao quát các biến chủng phân kỳ cao.

**Examples:** `Implementing hybrid-capture metagenomic target enrichment increased viral sequence reads by four orders of magnitude, converting unreadable wastewater sludge into pristine genomes.` → Việc triển khai làm giàu mục tiêu siêu gen bằng kỹ thuật bắt cặp lai đã làm tăng số lượng đọc trình tự virus lên bốn bậc độ lớn, biến bùn nước thải không thể đọc được thành các bộ gen nguyên vẹn.

**Liên kết tiếng Hàn:** `메타유전체 표적 농축` (metagenome標的濃縮) — làm giàu mục tiêu siêu gen.

---

## 21. amplicon drop-out artifact /ˈæmplɪkɑn drɑp aʊt ˈɑrtəfækt/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm lỗ hổng kỹ thuật trong dữ liệu giải trình tự (*cause*, *identify*, *resolve*).

**Core meaning — English:** The failure of a specific targeted primer binding site during PCR multiplexing due to unexpected template mutations, resulting in a conspicuous artificial gap or missing sequence coverage across that genomic region.

**Core meaning & mental image — Tiếng Việt:** Lỗi mất đoạn khuếch đại mồi (hiện tượng rớt amplicon). Hãy hình dung một chiếc răng bị gãy trên hàm răng cào: bộ mồi PCR được thiết kế để tóm lấy các vị trí gen cố định; thế nhưng khi virus biến đổi đột ngột ngay tại vị trí mồi bám, mồi không thể bám vào được nữa và phản ứng nhân bản bị hỏng, tạo ra một lỗ hổng dữ liệu trống trơn trên bản đồ gen giải mã.

**Grammar & collocations:** `suffer from an amplicon drop-out artifact` — chịu lỗi mất đoạn khuếch đại mồi; `correct for amplicon drop-out artifacts` — hiệu chỉnh các lỗi mất đoạn khuếch đại mồi; `primer mismatch causes an amplicon drop-out artifact` — sự lệch mồi gây ra lỗi mất đoạn khuếch đại amplicon.

**Register & nuance:** Cơn ác mộng của các nhà tin sinh học trong giải trình tự dựa trên amplicon (như giao thức ARTIC). Có thể dẫn đến chẩn đoán sai rằng virus bị xóa đoạn gen trong khi thực tế chỉ là do mồi bám thất bại.

**Examples:** `A single nucleotide mutation within the spike binding locus produced a severe amplicon drop-out artifact, temporarily masking the variant's true lineage designation.` → Một đột biến nucleotide đơn lẻ bên trong quỹ tích liên kết gai đã tạo ra một lỗi mất đoạn khuếch đại mồi nghiêm trọng, tạm thời che giấu việc định danh dòng biến chủng thực sự của virus.

**Liên kết tiếng Hàn:** `증폭산물 누락 가공물` (增幅産物漏落加工物) — sai lỗi kỹ thuật rớt sản phẩm khuếch đại (amplicon drop-out).

---

## 22. lineage deconvolution algorithm /ˈliːniɪdʒ ˌdiːkɑnvəˈluːʃən ˈælɡəˌrɪðəm/

**Loại từ & vị trí trong câu:** `countable noun phrase` (như Freyja hay Alcov). Thường làm công cụ tính toán bóc tách thành phần biến chủng (*apply*, *develop*, *utilize*).

**Core meaning — English:** A specialized computational tool that performs mathematical matrix deconvolution on mixed-variant sequencing reads to resolve and quantify the relative proportional frequencies of distinct co-circulating lineages in a pooled sample.

**Core meaning & mental image — Tiếng Việt:** Thuật toán bóc tách thành phần dòng biến chủng (giải chập dòng dõi). Hãy hình dung một ly sinh tố hoa quả thập cẩm được xay nhuyễn từ táo, cam, chuối và xoài: thuật toán giải chập này giống như một cỗ máy thần kỳ có thể phân tích hương vị ly nước và tuyên bố chính xác: ly này chứa 42% cam, 35% táo, 18% chuối và 5% xoài; trong mẫu nước thải pha tạp, nó cho biết thành phố đang có bao nhiêu phần trăm biến chủng Alpha, Beta, Delta hay Omicron.

**Grammar & collocations:** `run a lineage deconvolution algorithm` — chạy một thuật toán bóc tách thành phần dòng; `lineage deconvolution algorithm accuracy` — độ chính xác của thuật toán bóc tách dòng; `constrained lineage deconvolution algorithm` — thuật toán bóc tách dòng có ràng buộc.

**Register & nuance:** Công cụ toán học không thể thiếu trong dịch tễ học môi trường. Khắc phục rào cản rằng mẫu nước thải chứa hỗn hợp của hàng ngàn cá thể nhiễm các biến chủng khác nhau cùng lúc.

**Examples:** `The state lab utilized a constrained lineage deconvolution algorithm to accurately estimate the weekly prevalence shares of three competing variants from mixed sewage amplicons.` → Phòng thí nghiệm tiểu bang đã sử dụng một thuật toán bóc tách thành phần dòng có ràng buộc để ước tính chính xác tỷ lệ lưu hành hàng tuần của ba biến thể cạnh tranh từ các amplicon nước thải hỗn hợp.

**Liên kết tiếng Hàn:** `계통 분망화 알고리즘` (系統分網化algorithm) — thuật toán bóc tách thành phần dòng biến chủng (deconvolution).

---

## 23. early-warning viral detection /ˈɜrli ˈwɔrnɪŋ ˈvaɪrəl dɪˈtɛkʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chức năng mục tiêu của các hệ thống an ninh sinh học (*provide*, *achieve*, *enable*).

**Core meaning — English:** The surveillance capability to detect, identify, and alert public health authorities to the introduction or resurgence of a pathogenic viral variant within a human population prior to clinical hospitalization surges.

**Core meaning & mental image — Tiếng Việt:** Sự phát hiện virus cảnh báo sớm. Chiếc còi báo động khẩn cấp vang lên trên ngọn hải đăng trước khi sóng thần ập vào bờ: khi bệnh viện vẫn chưa tiếp nhận ca nhập viện nặng nào, hệ thống cảnh báo sớm đã phát hiện dấu vết mầm bệnh từ các trạm quan trắc nước thải và phòng khám ban đầu, giúp chính phủ có thời gian quý báu chuẩn bị giường bệnh và cơ số thuốc men.

**Grammar & collocations:** `provide early-warning viral detection` — cung cấp sự phát hiện virus cảnh báo sớm; `capacity for early-warning viral detection` — năng lực phát hiện virus cảnh báo sớm; `early-warning viral detection framework` — khung phát hiện virus cảnh báo sớm.

**Register & nuance:** Mục tiêu tối thượng của an ninh y tế toàn cầu (Global Health Security). Chuyển dịch y tế công cộng từ thế bị động ứng phó sang thế chủ động ngăn chặn từ xa.

**Examples:** `Metagenomic surveillance of urban wastewater delivered reliable early-warning viral detection, notifying health officials ten days before hospital admissions surged.` → Giám sát siêu gen nước thải đô thị đã mang lại sự phát hiện virus cảnh báo sớm đáng tin cậy, thông báo cho các quan chức y tế mười ngày trước khi số ca nhập viện tăng vọt.

**Liên kết tiếng Hàn:** `조기 경보 바이러스 검출` (早期警報virus檢出) — phát hiện virus cảnh báo sớm.

---

## 24. genomic outbreak surveillance network /dʒiˈnoʊmɪk ˈaʊtbreɪk sərˈveɪləns ˈnɛtwɜrk/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tổ chức hạ tầng y tế quốc tế (*establish*, *coordinate*, *expand*).

**Core meaning — English:** An interconnected consortium of diagnostic laboratories, sequencing cores, bioinformatic hubs, and public health agencies organized to continuously monitor pathogen genomes in real time across geographic boundaries.

**Core meaning & mental image — Tiếng Việt:** Mạng lưới giám sát bùng phát dịch bằng hệ gen. Hãy hình dung một mạng lưới mạng nhện radar bao phủ toàn cầu: hàng trăm phòng xét nghiệm giải trình tự gen từ khắp các châu lục liên tục tải dữ liệu mã gen virus lên một đám mây chung; các siêu máy tính tức thời đối soát và phát tín hiệu cảnh báo đỏ ngay khi một biến thể lạ vừa xuất hiện tại bất kỳ xó xỉnh nào trên trái đất.

**Grammar & collocations:** `establish a genomic outbreak surveillance network` — thiết lập một mạng lưới giám sát bùng phát dịch bằng hệ gen; `global genomic outbreak surveillance network` — mạng lưới giám sát dịch bệnh bằng hệ gen toàn cầu; `participate in the genomic outbreak surveillance network` — tham gia vào mạng lưới giám sát dịch bệnh bằng hệ gen.

**Register & nuance:** Trọng tâm kiến trúc thể chế phòng chống đại dịch thế hệ mới (như WHO Hub for Pandemic and Epidemic Intelligence). Đảm bảo sự công bằng và minh bạch trong chia sẻ dữ liệu sinh học quốc tế.

**Examples:** `The decentralized genomic outbreak surveillance network identified the novel escape variant within forty-eight hours of its initial emergence, sharing raw reads worldwide.` → Mạng lưới giám sát bùng phát dịch bằng hệ gen phi tập trung đã nhận diện biến thể trốn thoát mới nổi trong vòng bốn mươi tám giờ kể từ khi nó xuất hiện lần đầu, chia sẻ các dữ liệu đọc thô trên toàn thế giới.

**Liên kết tiếng Hàn:** `유전체 발발 감시 네트워크` (誘電體勃發監視network) — mạng lưới giám sát bùng phát dịch bệnh bằng hệ gen.

---

## 25. pathogen pan-genome repository /ˈpæθədʒən pæn ˈdʒiːnoʊm rɪˈpɑzəˌtɔri/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm kho lưu trữ dữ liệu tham chiếu quốc tế (*curate*, *host*, *maintain*).

**Core meaning — English:** A comprehensive, open-access computational database that aggregates and indexes the entire set of core and accessory genes found across all sequenced isolates of a pathogenic species.

**Core meaning & mental image — Tiếng Việt:** Kho lưu trữ toàn hệ gen mầm bệnh (pan-genome). Hãy tưởng tượng một bách khoa toàn thư chứa tất cả các biến dị gen có thể có của một loài vi khuẩn: không chỉ lưu trữ một bộ gen tham chiếu duy nhất làm khuôn mẫu, kho lưu trữ này gom toàn bộ các "đồ phụ tùng" gen (gen kháng kháng sinh, gen độc lực, gen trốn thoát miễn dịch) từng được phát hiện ở hàng triệu mẫu bệnh phẩm khắp thế giới để đối chiếu bất cứ lúc nào.

**Grammar & collocations:** `curate a pathogen pan-genome repository` — phụ trách quản lý một kho lưu trữ toàn hệ gen mầm bệnh; `query the pathogen pan-genome repository` — truy vấn kho lưu trữ toàn hệ gen mầm bệnh; `open-source pathogen pan-genome repository` — kho lưu trữ toàn hệ gen mầm bệnh mã nguồn mở.

**Register & nuance:** Tiêu chuẩn đỉnh cao trong tin sinh học vi sinh vật đương đại. Cho phép phân biệt giữa bộ gen lõi (*core genome* - có ở mọi chủng) và bộ gen phụ trợ (*accessory genome* - chỉ có ở các chủng nguy hiểm).

**Examples:** `Bioinformaticians cross-referenced the outbreak sequences against the global pathogen pan-genome repository to determine whether the antimicrobial resistance cassettes were novel or previously cataloged.` → Các chuyên gia tin sinh học đã đối chiếu chéo các trình tự bùng phát dịch với kho lưu trữ toàn hệ gen mầm bệnh toàn cầu để xác định xem các cụm gen kháng kháng sinh là mới xuất hiện hay đã từng được lập danh mục trước đó.

**Liên kết tiếng Hàn:** `병원체 범유전체 저장소` (病院體汎誘電體貯藏所) — kho lưu trữ toàn hệ gen mầm bệnh (pan-genome repository).

---

## Review in context (Part 1: Coalescent theory, evolutionary rates, and phylodynamics)

Deciphering infectious disease dynamics during rapid outbreaks requires robust evolutionary mathematics. Under a rigorous **coalescent theory framework**, epidemiologists infer ancestral population fluctuations by tracing sampled viral sequences backwards in calendar time. To convert accumulated genetic divergences into chronological dates, analysts calibrate the **molecular clock substitution rate** across historical isolates. Rather than enforcing an unrealistic constant pace of evolution, incorporating a **relaxed clock rate calibration** allows branch-specific mutation variations to emerge across divergent transmission environments. To visualize epidemic trajectory without restrictive parametric assumptions, bioinformaticians construct a **Bayesian skyline reconstruction**, revealing the waxing and waning of effective infections over preceding months. From this time-resolved branch architecture, researchers achieve reliable **effective reproductive number estimation**, quantifying whether ongoing transmission sits safely below the epidemic control threshold. As an alternative forward-in-time approach, fitting a parameter-rich **birth-death skyline model** disentangles genuine transmission drops from changes in diagnostic testing intensities. Crucially, resolving the timing of initial cross-species transmission relies on rigorous **most recent common ancestor dating**, pinpointing the precise calendar window when the ancestral strain entered human circulation. When rendering these temporal deductions, results are mapped onto an **ultrametric phylogenetic tree**, where every branch tip aligns seamlessly with calendar time. Geneticists scrutinize these reconstructions by evaluating **tree topology branch credibility**, accepting only cluster nodes supported by overwhelming posterior statistical weight. Navigating these vast multi-parameter probability landscapes necessitates performing extensive **Markov chain Monte Carlo sampling** to ensure complete algorithmic convergence. When investigating geographical lineage transfers across international borders, applying **discrete trait phylogeography** accurately traces flight corridors and inter-regional migration events. In several regional epidemics, high human movement facilitated explosive **founder lineage dispersion**, establishing localized predominance before competing subvariants could gain a foothold.

**Bản dịch tiếng Việt:**

Việc giải mã động lực học bệnh truyền nhiễm trong các đợt bùng phát nhanh đòi hỏi các phương pháp toán học tiến hóa vững chắc. Dưới một **coalescent theory framework** khắt khe, các nhà dịch tễ học suy luận những biến động quần thể tổ tiên bằng cách truy ngược các chuỗi trình tự virus lấy mẫu lùi về quá khứ theo thời gian lịch. Để chuyển đổi các phân kỳ di truyền tích lũy thành niên đại theo thời gian, các nhà phân tích hiệu chuẩn **molecular clock substitution rate** xuyên suốt các mẫu phân lập trong lịch sử. Thay vì áp đặt một tốc độ tiến hóa bất biến thiếu thực tế, việc kết hợp một **relaxed clock rate calibration** cho phép các biến thiên đột biến đặc hiệu cho từng nhánh bộc lộ trên khắp các môi trường lây truyền phân kỳ. Để trực quan hóa quỹ đạo dịch bệnh mà không cần các giả định tham số gượng ép, các chuyên gia tin sinh học xây dựng một **Bayesian skyline reconstruction**, hé lộ sự suy thịnh của số ca nhiễm hiệu dụng trong những tháng trước đó. Từ kiến trúc phân nhánh được giải quyết theo thời gian này, các nhà nghiên cứu đạt được **effective reproductive number estimation** đáng tin cậy, định lượng xem liệu mức lây truyền đang diễn ra có nằm an toàn dưới ngưỡng kiểm soát dịch bệnh hay không. Như một cách tiếp cận xuôi dòng thời gian thay thế, việc khớp một **birth-death skyline model** giàu tham số sẽ bóc tách các đợt sụt giảm lây truyền thực sự khỏi các biến động về cường độ xét nghiệm chẩn đoán. Điều cốt yếu là việc giải quyết thời điểm lây truyền xuyên loài ban đầu dựa vào **most recent common ancestor dating** khắt khe, xác định chính xác cửa sổ thời gian lịch khi chủng tổ tiên xâm nhập vào quần thể người. Khi thể hiện các suy luận thời gian này, các kết quả được ánh xạ lên một **ultrametric phylogenetic tree**, nơi mỗi đầu nhánh cành đều ăn khớp mượt mà với thời gian lịch. Các nhà di truyền học xem xét kỹ lưỡng các bản tái dựng này bằng cách đánh giá **tree topology branch credibility**, chỉ chấp nhận các nút chùm ca bệnh được hỗ trợ bởi trọng số thống kê hậu nghiệm áp đảo. Việc điều hướng các bức tranh xác suất đa tham số khổng lồ này đòi hỏi phải thực hiện **Markov chain Monte Carlo sampling** quy mô lớn để đảm bảo sự hội tụ thuật toán hoàn toàn. Khi điều tra các sự chuyển dịch dòng biến chủng địa lý qua các biên giới quốc tế, việc áp dụng **discrete trait phylogeography** sẽ truy vết chuẩn xác các hành lang bay và các sự kiện di cư liên vùng. Trong một số đợt dịch khu vực, sự di biến động dân cư cao đã tạo điều kiện cho **founder lineage dispersion** bùng nổ, thiết lập ưu thế cục bộ trước khi các phân biến thể cạnh tranh kịp giành được chỗ đứng.

---

## Review in context (Part 2: Molecular epidemiology, variant emergence, and environmental genomics)

Tracking microscopic viral adaptations across clinical and municipal spaces demands comprehensive high-throughput surveillance. At crowded indoor venues, epidemiologists often identify an unmistakable **super-spreader genomic footprint**, where dozens of identical sequence isolates radiate from a solitary index patient. Integrating phylogenetic tree structures with public health interviewing facilitates high-resolution **transmission cluster reconstruction**, determining exact transmission paths across hospital wards. As population immunity consolidates, structural viral proteins experience intense **antigenic drift immune escape**, evading monoclonal antibody treatments and decreasing booster vaccine protection. While neutral baseline mutations adhere strictly to a standard **neutral evolutionary expectation**, rapid spike gene adaptations frequently display a **positive selection episodic burst** driven by therapeutic pressures. When patients harbor multi-lineage co-infections, molecular surveillance occasionally uncovers striking **recombinant lineage mosaicism**, merging disparate viral clades into novel chimeric entities. Beyond passive clinical diagnostics, modern public health relies heavily on continuous **wastewater genomic sequencing**, analyzing community wastewater influent to monitor circulating viral variants. Because pathogenic target RNA is exceptionally dilute within raw sewage, technicians employ hybrid-capture **metagenomic target enrichment** to selectively isolate target viral fragments out of complex metagenomic matrices. During high-throughput amplification, bioinformaticians must quickly identify any disruptive **amplicon drop-out artifact**, preventing false interpretations of gene deletions caused by primer-binding mutations. To quantify lineage shares from mixed sewage samples, analysts run a robust **lineage deconvolution algorithm**, accurately estimating the community prevalence of competing variants. This municipal environmental surveillance provides vital **early-warning viral detection**, alerting public health agencies to variant surges weeks before clinical hospital admissions rise. Coordinating these analytical capabilities internationally requires an active **genomic outbreak surveillance network**, rapidly sharing sequences across continents. Finally, all novel consensus builds and structural annotations are systematically archived in an open-access **pathogen pan-genome repository**, equipping global medical researchers with the vital resources required to anticipate emergent viral threats.

**Bản dịch tiếng Việt:**

Việc theo dấu các thích nghi vi mô của virus xuyên suốt các không gian lâm sàng và đô thị đòi hỏi công tác giám sát thông lượng cao toàn diện. Tại các địa điểm trong nhà đông đúc, các nhà dịch tễ học thường nhận diện một **super-spreader genomic footprint** không thể nhầm lẫn, nơi hàng chục mẫu phân lập trình tự giống hệt nhau tỏa ra từ một bệnh nhân chỉ điểm đơn độc. Việc tích hợp cấu trúc cây phát sinh chủng loại với điều tra dịch tễ học y tế công cộng tạo điều kiện cho **transmission cluster reconstruction** độ phân giải cao, xác định các lộ trình lây truyền chuẩn xác qua các khu bệnh phòng. Khi miễn dịch quần thể được củng cố, các protein cấu trúc của virus trải qua sự **antigenic drift immune escape** mãnh liệt, né tránh các liệu pháp kháng thể đơn dòng và làm giảm mức bảo vệ của vắc-xin tiêm nhắc lại. Trong khi các đột biến nền trung tính tuân thủ nghiêm ngặt một **neutral evolutionary expectation** tiêu chuẩn, các thích nghi nhanh chóng của gen gai thường biểu hiện một **positive selection episodic burst** do áp lực điều trị thúc đẩy. Khi các bệnh nhân mang tình trạng đồng nhiễm nhiều dòng, giám sát phân tử đôi khi phát hiện **recombinant lineage mosaicism** nổi bật, sáp nhập các nhánh virus khác biệt thành các thực thể khảm mới. Vượt ra ngoài các chẩn đoán lâm sàng thụ động, y tế công cộng hiện đại dựa rất nhiều vào **wastewater genomic sequencing** liên tục, phân tích nước thải đô thị đầu vào để giám sát các biến thể virus đang lưu hành. Do RNA mục tiêu gây bệnh cực kỳ loãng trong nước thải thô, các kỹ thuật viên áp dụng **metagenomic target enrichment** bằng bắt cặp lai để phân lập chọn lọc các đoạn virus mục tiêu ra khỏi cơ chất siêu gen phức tạp. Trong quá trình khuếch đại thông lượng cao, các nhà tin sinh học phải nhanh chóng nhận diện bất kỳ **amplicon drop-out artifact** gây nhiễu nào, ngăn chặn các diễn giải sai lầm về đột biến mất đoạn gen do đột biến tại vị trí bám mồi gây ra. Để định lượng tỷ lệ các dòng biến thể từ các mẫu nước thải hỗn hợp, các nhà phân tích chạy một **lineage deconvolution algorithm** mạnh mẽ, ước tính chuẩn xác tỷ lệ lưu hành trong cộng đồng của các biến thể cạnh tranh. Giám sát môi trường đô thị này mang lại sự **early-warning viral detection** sống còn, cảnh báo cho các cơ quan y tế công cộng về các đợt gia tăng biến thể nhiều tuần trước khi số ca nhập viện lâm sàng tăng lên. Việc điều phối các năng lực phân tích này ở quy mô quốc tế đòi hỏi một **genomic outbreak surveillance network** tích cực, chia sẻ nhanh chóng các trình tự qua các châu lục. Cuối cùng, tất cả các bản dựng đồng thuận mới và chú giải cấu trúc đều được lập danh mục có hệ thống trong một **pathogen pan-genome repository** truy cập mở, trang bị cho các nhà nghiên cứu y học toàn cầu các nguồn lực thiết yếu cần thiết để đón đầu các mối đe dọa virus mới nổi.
