# B2 Vocabulary 08 — Meta-analysis methodology, study heterogeneity, and publication bias detection

Trong phương pháp luận nghiên cứu khoa học thực chứng và y học chứng cứ (*evidence-based medicine*), tổng quan hệ thống và phân tích gộp (*systematic review & meta-analysis*) được tôn vinh là đỉnh cao của tháp bằng chứng, cho phép các nhà khoa học tổng hợp dữ liệu định lượng từ hàng chục thử nghiệm độc lập để rút ra kết luận khái quát nhất. Để đánh giá sức mạnh can thiệp, kiểm định sự không đồng nhất giữa các mẫu nghiên cứu và phát hiện thiên kiến xuất bản ở trình độ B2, người học cần nắm vững hệ thống thuật ngữ thống kê và phương pháp luận tổng hợp số liệu chuẩn xác. Bài học này kết nối 25 khái niệm then chốt thành hai mạng lưới học thuật tương hỗ: **Quantitative Synthesis & Forest Plot Modeling** (từ `pooled effect size`, `forest plot visualization`, `heterogeneity statistic`, `between-study variance`, `random-effects model`, `fixed-effect model`, `effect size weighting`, `confidence interval band`, `statistical pooling`, `standardized mean difference`, `summary odds ratio` đến `meta-analytic synthesis`) và **Bias Detection, Moderation & Sensitivity Analyses** (từ `funnel plot asymmetry`, `publication bias detection`, `trim-and-fill method`, `Egger regression test`, `fail-safe N calculation`, `subgroup meta-regression`, `sensitivity sub-analysis`, `leave-one-out sensitivity test`, `systematic search filter`, `study inclusion criteria`, `risk of bias tool`, `gray literature retrieval` đến `cumulative meta-analysis`).

---

## 1. pooled effect size /puːld ɪˈfekt saɪz/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `calculate`, `estimate`, `report`, `derive`.

**Core meaning — English:** The weighted average statistical metric calculated across multiple independent empirical studies, summarizing the overall strength and direction of an intervention or relationship.

**Core meaning & mental image — Tiếng Việt:** Quy mô hiệu ứng gộp (chỉ số bình quân gia quyền đo lường sức mạnh can thiệp chung). Hình ảnh gom hàng chục con suối nhỏ về một dòng sông chính: thay vì nhìn vào từng thử nghiệm riêng lẻ với quy mô mẫu vài chục bệnh nhân, nhà dịch tễ học kết hợp toàn bộ dữ liệu để tính ra một con số bình quân chung duy nhất, biểu thị chính xác mức độ giảm huyết áp thực sự của loại thuốc mới.

**Grammar & collocations:** `calculate a pooled effect size` — tính toán quy mô hiệu ứng gộp; `statistically significant pooled effect size` — quy mô hiệu ứng gộp có ý nghĩa thống kê; `estimate the pooled effect size across trials` — ước tính quy mô hiệu ứng gộp qua các thử nghiệm.

**Register & nuance:** Bối cảnh dịch tễ học lâm sàng và thống kê học ứng dụng (*clinical epidemiology & biostatistics*); là phát hiện cốt lõi của bất kỳ công trình phân tích gộp nào.

**Examples:** `The meta-analysis derived a statistically significant pooled effect size indicating that daily aerobic exercise reduces mild depressive symptoms.` → Công trình phân tích gộp đã rút ra một quy mô hiệu ứng gộp có ý nghĩa thống kê cho thấy việc tập thể dục nhịp điệu hàng ngày giúp giảm các triệu chứng trầm cảm nhẹ.

**Liên kết tiếng Hàn:** `통합 효과 크기` (統合效果크기) — quy mô hiệu ứng gộp.

---

## 2. forest plot visualization /ˈfɔːr.ɪst plɑːt ˌvɪʒ.u.əl.əˈzeɪ.ʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase` (hoặc `uncountable noun phrase`). Thường làm tân ngữ sau `generate`, `interpret`, `display`.

**Core meaning — English:** The graphical depiction of meta-analytic results, where each study is shown as a horizontal line representing its confidence interval and a box sized according to its statistical weight, anchored by a summary diamond.

**Core meaning & mental image — Tiếng Việt:** Biểu đồ rừng / trực quan hóa biểu đồ rừng (bản đồ hình học tổng hợp các nghiên cứu). Một "khu rừng" gồm các đường ngang nằm song song xếp từ trên xuống dưới: mỗi đường ngang biểu thị biên độ tin cậy của một thử nghiệm lâm sàng, chiếc hộp hình vuông ở giữa càng to thể hiện mẫu càng lớn, và ở đáy rừng là một hình thoi tỏa sáng đại diện cho kết quả gộp sau cùng.

**Grammar & collocations:** `interpret a forest plot visualization` — diễn giải trực quan hóa biểu đồ rừng; `generate a forest plot visualization` — tạo lập biểu đồ rừng; `the summary diamond in a forest plot visualization` — hình thoi tóm tắt trên biểu đồ rừng.

**Register & nuance:** Thuật ngữ kinh điển trong phần trình bày kết quả y học chứng cứ (*Cochrane Systematic Reviews*); nếu hình thoi không chạm vào đường thẳng đứng vô hiệu (*line of null effect*), can thiệp có ý nghĩa thống kê.

**Examples:** `The published paper included a clear forest plot visualization that immediately illustrated clinical superiority over standard therapy.` → Bài báo đã xuất bản bao gồm một trực quan hóa biểu đồ rừng rõ ràng giúp minh họa ngay lập tức sự vượt trội lâm sàng so với liệu pháp điều trị tiêu chuẩn.

**Liên kết tiếng Hàn:** `포레스트 플롯 시각화` (forest plot 視覺化) — trực quan hóa biểu đồ rừng.

---

## 3. heterogeneity statistic /ˌhet̬.ɚ.oʊ.dʒəˈniː.ə.t̬i stəˈtɪs.tɪk/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng trong bối cảnh các chỉ số như Cochrane's Q hay I-squared: `the heterogeneity statistic`). Thường làm chủ ngữ hoặc tân ngữ sau `compute`, `evaluate`, `assess`.

**Core meaning — English:** A quantitative metric (such as Cochran's Q or the I² index) that measures the percentage of variation across study outcomes that is due to true clinical or methodological diversity rather than chance.

**Core meaning & mental image — Tiếng Việt:** Chỉ số thống kê về tính không đồng nhất (thước đo mức độ chênh lệch thực chất giữa các nghiên cứu). Thước đo xem các thử nghiệm lâm sàng có đang "nói cùng một thứ ngôn ngữ" hay không: nếu chỉ số I² vượt quá 75%, điều đó có nghĩa là các nghiên cứu quá khác biệt nhau về liều lượng, độ tuổi người tham gia hay môi trường bệnh viện, chứ không đơn thuần là sai số ngẫu nhiên.

**Grammar & collocations:** `compute the heterogeneity statistic` — tính toán chỉ số thống kê tính không đồng nhất; `an elevated heterogeneity statistic` — một chỉ số không đồng nhất tăng cao; `assess variability using a heterogeneity statistic` — đánh giá mức độ biến thiên bằng chỉ số tính không đồng nhất.

**Register & nuance:** Bối cảnh thống kê nâng cao; chỉ số I² dao động từ 0% đến 100%, phản ánh tỷ lệ phương sai giữa các nghiên cứu trên tổng phương sai quan sát được.

**Examples:** `An elevated heterogeneity statistic prompted the research team to investigate differences in drug dosage across the included trials.` → Chỉ số thống kê về tính không đồng nhất tăng cao đã thôi thúc nhóm nghiên cứu điều tra những sự khác biệt về liều lượng thuốc giữa các thử nghiệm được đưa vào.

**Liên kết tiếng Hàn:** `이질성 통계량` (異質性統計量) — chỉ số thống kê về tính không đồng nhất.

---

## 4. between-study variance /bɪˈtwiːn ˈstʌd.i ˈver.i.əns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (thường ký hiệu là Tau-squared, $\tau^2$). Thường làm chủ ngữ hoặc tân ngữ sau `estimate`, `account for`, `quantify`.

**Core meaning — English:** The statistical parameter representing genuine dispersion among true effect sizes across diverse study environments, independent of within-study sampling errors.

**Core meaning & mental image — Tiếng Việt:** Phương sai giữa các nghiên cứu (mức độ phân tán của hiệu quả thực tế giữa các trung tâm nghiên cứu độc lập). Sự khác biệt nội tại giữa một bệnh viện vùng nhiệt đới và một viện nghiên cứu xứ lạnh: dù cùng thử nghiệm một loại vắc-xin, sự chênh lệch trong chế độ dinh dưỡng và gen của bệnh nhân tạo nên một độ lệch thực sự giữa các nghiên cứu, không thể triệt tiêu chỉ bằng cách tăng cỡ mẫu.

**Grammar & collocations:** `estimate between-study variance` — ước tính phương sai giữa các nghiên cứu; `account for between-study variance` — tính đến phương sai giữa các nghiên cứu; `tau-squared represents between-study variance` — tau bình phương đại diện cho phương sai giữa các nghiên cứu.

**Register & nuance:** Tham số kỹ thuật then chốt trong mô hình hiệu ứng ngẫu nhiên (*random-effects modeling*); phân biệt với phương sai nội tại nghiên cứu (*within-study sampling error*).

**Examples:** `Statisticians estimated the between-study variance to determine whether differences in participant age explained fluctuating success rates.` → Các nhà thống kê đã ước tính phương sai giữa các nghiên cứu để xác định xem những khác biệt về độ tuổi của người tham gia có giải thích cho tỷ lệ thành công biến động hay không.

**Liên kết tiếng Hàn:** `연구 간 분산` (硏究間分散) — phương sai giữa các nghiên cứu.

---

## 5. random-effects model /ˈræn.dəm ɪˈfekts ˌmɑː.dəl/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng ở dạng số ít: `a random-effects model`). Thường làm tân ngữ sau `apply`, `fit`, `select`, `implement`.

**Core meaning — English:** A statistical meta-analytic meta-framework assuming that true effect sizes vary across studies following a distribution, making findings generalizable to a broader theoretical population.

**Core meaning & mental image — Tiếng Việt:** Mô hình hiệu ứng ngẫu nhiên (mô hình thống kê thừa nhận sự biến thiên đa dạng của thực tế khách quan). Giả định rằng không có một chân lý duy nhất bất biến: thuốc hạ sốt có thể phát huy tác dụng hơi khác nhau tùy cơ địa từng nhóm dân cư; mô hình này mở rộng vòng tay chấp nhận sự phân tán tự nhiên đó, phân bổ trọng số công bằng hơn giữa các nghiên cứu nhỏ và lớn.

**Grammar & collocations:** `apply a random-effects model` — áp dụng mô hình hiệu ứng ngẫu nhiên; `prefer a random-effects model due to clinical heterogeneity` — ưu tiên mô hình hiệu ứng ngẫu nhiên do tính không đồng nhất lâm sàng; `fit data using a random-effects model` — làm khớp dữ liệu bằng mô hình hiệu ứng ngẫu nhiên.

**Register & nuance:** Thường được coi là thận trọng và mang tính thực tế cao hơn mô hình hiệu ứng cố định (*fixed-effect model*) trong y sinh và khoa học xã hội.

**Examples:** `Given the substantial diversity among hospital settings, investigators selected a random-effects model for their primary synthesis.` → Trước sự đa dạng đáng kể giữa các bối cảnh bệnh viện, các điều tra viên đã lựa chọn mô hình hiệu ứng ngẫu nhiên cho công trình tổng hợp chính của họ.

**Liên kết tiếng Hàn:** `변량 효과 모형` (變量效果模型) — mô hình hiệu ứng ngẫu nhiên.

---

## 6. fixed-effect model /fɪkst ɪˈfekt ˌmɑː.dəl/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng ở dạng số ít: `a fixed-effect model`). Thường làm tân ngữ sau `employ`, `assume`, `compare with`.

**Core meaning — English:** A statistical model presupposing that a single identical true effect size underlies all included studies, and that any observed variability stems solely from random sampling error.

**Core meaning & mental image — Tiếng Việt:** Mô hình hiệu ứng cố định (mô hình thống kê giả định một giá trị thực duy nhất tuyệt đối). Một cái cân chuẩn xác tuyệt đối đặt trong môi trường chân không lý tưởng: giả định rằng mọi nghiên cứu đều đang đo cùng một con số duy nhất, và bất kỳ sự chênh lệch nào ghi nhận được chỉ là do vận may rủi khi bốc thăm ngẫu nhiên bệnh nhân.

**Grammar & collocations:** `employ a fixed-effect model` — sử dụng mô hình hiệu ứng cố định; `the assumptions of a fixed-effect model` — các giả định của mô hình hiệu ứng cố định; `fixed-effect model vs random-effects model` — mô hình hiệu ứng cố định đối chiếu với mô hình hiệu ứng ngẫu nhiên.

**Register & nuance:** Bối cảnh thống kê chặt chẽ; chỉ nên sử dụng khi các nghiên cứu có thiết kế giống hệt nhau về đối tượng, liều lượng và phương pháp đo lường.

**Examples:** `Employing a fixed-effect model when significant heterogeneity exists yields dangerously narrow confidence intervals.` → Việc sử dụng mô hình hiệu ứng cố định khi tồn tại tính không đồng nhất đáng kể sẽ tạo ra các khoảng tin cậy hẹp đến mức nguy hiểm.

**Liên kết tiếng Hàn:** `고정 효과 모형` (固定效果模型) — mô hình hiệu ứng cố định.

---

## 7. effect size weighting /ɪˈfekt saɪz ˈweɪ.tɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `assign`, `calculate`, `adjust`.

**Core meaning — English:** The mathematical procedure of assigning relative importance to each individual study result based inversely on its variance or sample precision when computing the overall average.

**Core meaning & mental image — Tiếng Việt:** Việc gán trọng số cho quy mô hiệu ứng (phép tính chia quyền lực tiếng nói dựa trên độ chính xác của nghiên cứu). Cán cân biểu quyết theo cổ phần: một thử nghiệm lâm sàng thực hiện trên 10.000 bệnh nhân có độ chuẩn xác cực cao sẽ được gán trọng số nặng gấp trăm lần một nghiên cứu nhỏ lẻ chỉ có 30 người tham gia, đảm bảo kết luận chung không bị bóp méo bởi dữ liệu yếu ớt.

**Grammar & collocations:** `inverse-variance effect size weighting` — việc gán trọng số hiệu ứng theo nghịch đảo phương sai; `assign effect size weighting` — phân bổ trọng số quy mô hiệu ứng; `the mechanics of effect size weighting` — cơ chế tính trọng số quy mô hiệu ứng.

**Register & nuance:** Thuật ngữ kỹ thuật toán thống kê; là nền tảng của quy trình gộp số liệu (*data pooling*).

**Examples:** `Inverse-variance effect size weighting ensures that larger, methodologically rigorous clinical trials dominate the aggregate analysis.` → Việc gán trọng số quy mô hiệu ứng theo nghịch đảo phương sai đảm bảo rằng các thử nghiệm lâm sàng lớn hơn và chặt chẽ hơn về phương pháp luận sẽ chi phối bài phân tích tổng hợp.

**Liên kết tiếng Hàn:** `효과 크기 가중치 부여` (效果크기加重値附與) — việc gán trọng số cho quy mô hiệu ứng.

---

## 8. confidence interval band /ˈkɑːn.fə.dəns ˈɪn.t̬ɚ.vəl bænd/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `span`, `narrow`, `cross`, `plot`.

**Core meaning — English:** The estimated range of statistical values around a point estimate that is expected to contain the true population parameter with a designated level of certainty (typically 95%).

**Core meaning & mental image — Tiếng Việt:** Dải khoảng tin cậy (dải biên độ giá trị ước lượng có xác suất trúng đích cao). Tấm lưới đánh cá bao quanh hồng tâm: thay vì chỉ đưa ra một điểm ước tính đơn độc, nhà khoa học giăng ra một dải giá trị từ 2,5 đến 5,8 để khẳng định rằng với độ tin cậy 95%, hiệu quả trị bệnh thực sự của loại thuốc này chắc chắn sẽ nằm gọn trong phạm vi đó.

**Grammar & collocations:** `narrow the confidence interval band` — thu hẹp dải khoảng tin cậy; `the 95 percent confidence interval band` — dải khoảng tin cậy 95%; `a confidence interval band crossing zero` — một dải khoảng tin cậy cắt qua giá trị không.

**Register & nuance:** Khái niệm thống kê phổ quát; nếu dải khoảng tin cậy của chênh lệch trung bình cắt qua giá trị 0, kết quả không đạt ý nghĩa thống kê ở mức alpha 0.05.

**Examples:** `Because the 95 percent confidence interval band crossed the zero threshold, authors could not conclude that the drug was effective.` → Do dải khoảng tin cậy 95% cắt qua ngưỡng số không, các tác giả đã không thể kết luận rằng loại thuốc này mang lại hiệu quả.

**Liên kết tiếng Hàn:** `신뢰구간 대 (구간)` (信賴區間帶) — dải khoảng tin cậy.

---

## 9. statistical pooling /stəˈtɪs.tɪ.kəl ˈpuː.lɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `perform`, `preclude`, `warrant`.

**Core meaning — English:** The mathematical aggregation of disparate numerical data points or effect estimates from separate studies into a unified quantitative synthesis.

**Core meaning & mental image — Tiếng Việt:** Sự gộp dữ liệu thống kê (phép toán hợp nhất dữ liệu từ nhiều nguồn độc lập). Gom những giọt thủy ngân rời rạc thành một giọt lớn sáng loáng: gom số liệu thô hoặc tỷ số chênh từ 20 bệnh viện trên khắp thế giới để đưa vào một thuật toán xử lý dữ liệu hợp nhất, tạo ra sức mạnh thống kê vượt trội.

**Grammar & collocations:** `perform statistical pooling` — thực hiện việc gộp dữ liệu thống kê; `preclude statistical pooling due to heterogeneity` — ngăn cản việc gộp thống kê do tính không đồng nhất quá lớn; `validity of statistical pooling` — tính giá trị của việc gộp dữ liệu thống kê.

**Register & nuance:** Bối cảnh tổng quan hệ thống (*systematic reviews*); nếu các nghiên cứu quá khác biệt về mặt lâm sàng, các tác giả phải trình bày tổng quan định tính (*narrative synthesis*) thay vì gộp thống kê.

**Examples:** `High methodological divergence among educational experiments precluded statistical pooling, forcing authors to present a narrative summary.` → Sự phân kỳ phương pháp luận cao giữa các thử nghiệm giáo dục đã ngăn cản việc gộp dữ liệu thống kê, buộc các tác giả phải trình bày một bản tóm tắt định tính.

**Liên kết tiếng Hàn:** `통계적 통합 (풀링)` (統計的統合) — sự gộp dữ liệu thống kê.

---

## 10. standardized mean difference /ˈstæn.dɚ.daɪzd miːn ˈdɪf.ɚ.əns/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường viết tắt là SMD; ví dụ Cohen's d hoặc Hedges' g). Thường làm tân ngữ sau `express in`, `calculate`, `compare`.

**Core meaning — English:** A summary statistic used in meta-analyses when different studies measure the same underlying conceptual outcome using distinct measurement scales or questionnaires.

**Core meaning & mental image — Tiếng Việt:** Chênh lệch trung bình chuẩn hóa (thước đo quy đổi các thang đo khác nhau về cùng một mẫu số chung). Thước đo quy đổi tiền tệ phổ quát: một nghiên cứu đo mức độ lo âu bằng thang điểm 10, một nghiên cứu khác đo bằng bảng hỏi 100 điểm; nhà phân tích gộp chia chênh lệch điểm số cho độ lệch chuẩn gộp để chuyển tất cả về chỉ số SMD thống nhất, giúp so sánh trực tiếp như quy đổi mọi loại tiền tệ về đồng USD.

**Grammar & collocations:** `express outcomes as a standardized mean difference` — thể hiện kết quả dưới dạng chênh lệch trung bình chuẩn hóa; `calculate Cohen's standardized mean difference` — tính toán chênh lệch trung bình chuẩn hóa của Cohen; `interpret the standardized mean difference` — diễn giải chỉ số chênh lệch trung bình chuẩn hóa.

**Register & nuance:** Thuật ngữ học thuật thiết yếu trong tâm lý học và giáo dục học; Cohen's d = 0.2 là nhỏ, 0.5 là trung bình, và 0.8 là lớn.

**Examples:** `Because individual trials used distinct depression scales, researchers expressed the collective outcome as a standardized mean difference.` → Do các thử nghiệm riêng lẻ sử dụng các thang đo trầm cảm khác nhau, các nhà nghiên cứu đã biểu thị kết quả tập thể dưới dạng chênh lệch trung bình chuẩn hóa.

**Liên kết tiếng Hàn:** `표준화된 평균 차이` (標準化된平均差異) — chênh lệch trung bình chuẩn hóa.

---

## 11. summary odds ratio /ˈsʌm.ɚ.i ɑːdz ˈreɪ.ʃi.oʊ/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng ở dạng số ít: `the summary odds ratio`). Thường làm tân ngữ sau `compute`, `derive`, `report`.

**Core meaning — English:** An aggregated epidemiological measure of association for binary outcomes that calculates the pooled odds of an event occurring in an intervention group compared to a control group.

**Core meaning & mental image — Tiếng Việt:** Tỷ số chênh tóm tắt (chỉ số xác suất biến cố gộp giữa nhóm can thiệp và nhóm đối chứng). So sánh cơ may trúng thưởng: chỉ số đo lường xem xác suất sống sót của bệnh nhân dùng kháng sinh mới cao gấp bao nhiêu lần so với nhóm dùng giả dược trên toàn bộ 15 nghiên cứu lâm sàng được tổng hợp lại.

**Grammar & collocations:** `compute the summary odds ratio` — tính toán tỷ số chênh tóm tắt; `a summary odds ratio below one indicating protection` — tỷ số chênh tóm tắt dưới 1 biểu thị tác dụng bảo vệ; `interpret the summary odds ratio in clinical trials` — diễn giải tỷ số chênh tóm tắt trong các thử nghiệm lâm sàng.

**Register & nuance:** Rất phổ biến trong dịch tễ học y khoa cho các biến nhị phân (*binary endpoints* như sống/chết, khỏi bệnh/tái phát); giá trị OR = 1 biểu thị không có sự khác biệt.

**Examples:** `A summary odds ratio of 0.65 revealed a 35 percent reduction in stroke recurrence among hypertensive patients taking the therapy.` → Tỷ số chênh tóm tắt bằng 0,65 đã tiết lộ mức giảm 35% nguy cơ tái phát đột quỵ ở những bệnh nhân tăng huyết áp dùng liệu pháp này.

**Liên kết tiếng Hàn:** `요약 오즈비 (승산비)` (要約오즈比) — tỷ số chênh tóm tắt.

---

## 12. meta-analytic synthesis /ˌmet̬.ə.æn.əˈlɪt̬.ɪk ˈsɪn.θə.sɪs/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `conduct`, `publish`, `yield`.

**Core meaning — English:** The formal, overarching procedure of integrating quantitative empirical findings across a comprehensive body of literature to establish evidence-based conclusions.

**Core meaning & mental image — Tiếng Việt:** Công trình tổng hợp phân tích gộp (bản đúc kết định lượng tối cao của toàn bộ y văn khoa học). Bức tranh ghép khảm mosaic hoàn chỉnh: ghép từng mảnh ghép nhỏ từ hàng trăm bài báo khoa học rời rạc được xuất bản suốt 20 năm qua thành một bức tranh toàn cảnh vĩ đại, mang lại bằng chứng không thể bác bỏ để định hình các hướng dẫn điều trị quốc gia.

**Grammar & collocations:** `conduct a rigorous meta-analytic synthesis` — tiến hành một công trình tổng hợp phân tích gộp chặt chẽ; `findings from the meta-analytic synthesis` — các phát hiện từ công trình tổng hợp phân tích gộp; `publish a definitive meta-analytic synthesis` — công bố một bài tổng hợp phân tích gộp mang tính định hình.

**Register & nuance:** Văn phong học thuật đỉnh cao; kết hợp cả đánh giá hệ thống định tính và các thuật toán gộp định lượng.

**Examples:** `The World Health Organization relied on a monumental meta-analytic synthesis to formulate global pandemic vaccination guidelines.` → Tổ chức Y tế Thế giới đã dựa vào một công trình tổng hợp phân tích gộp đồ sộ để xây dựng các hướng dẫn tiêm chủng đại dịch toàn cầu.

**Liên kết tiếng Hàn:** `메타분석적 종합` (meta分析的綜合) — công trình tổng hợp phân tích gộp.

---

## 13. funnel plot asymmetry /ˈfʌn.əl plɑːt eɪˈsɪm.ə.tri/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `detect`, `inspect for`, `indicate`.

**Core meaning — English:** A skewed or uneven distribution of study results when plotted on a scatter diagram of effect size against precision, classically suggesting the suppression or non-publication of small, negative trials.

**Core meaning & mental image — Tiếng Việt:** Sự bất đối xứng của biểu đồ hình phễu (dấu hiệu lộ diện của việc giấu nhẹm các nghiên cứu thất bại). Một chiếc phễu úp ngược bằng thủy tinh: nếu dữ liệu trung thực, các nghiên cứu nhỏ sẽ phân tán đều ở hai bên mép đáy phễu; nhưng nếu góc dưới bên trái hoàn toàn trống trơn một cách bất thường, đó là bằng chứng cho thấy những nghiên cứu cho kết quả thuốc không hiệu quả đã bị nhét vào ngăn kéo tủ và không bao giờ được gửi đăng báo.

**Grammar & collocations:** `inspect a scatter plot for funnel plot asymmetry` — kiểm tra biểu đồ phân tán để tìm sự bất đối xứng hình phễu; `funnel plot asymmetry indicates publication bias` — sự bất đối xứng biểu đồ hình phễu chỉ ra thiên kiến xuất bản; `statistical tests for funnel plot asymmetry` — các kiểm định thống kê cho sự bất đối xứng biểu đồ hình phễu.

**Register & nuance:** Bối cảnh kiểm định chất lượng nghiên cứu y sinh; bất đối xứng có thể do thiên kiến xuất bản (*publication bias*) hoặc do hiệu ứng nghiên cứu nhỏ (*small-study effect*).

**Examples:** `Statistical inspection confirmed funnel plot asymmetry, suggesting that small trials showing no pharmaceutical benefit had been suppressed.` → Việc kiểm tra thống kê đã xác nhận sự bất đối xứng của biểu đồ hình phễu, gợi ý rằng các thử nghiệm nhỏ không cho thấy lợi ích dược lý đã bị ém nhẹm.

**Liên kết tiếng Hàn:** `깔때기 플롯 비대칭` (깔때기 plot 非對稱) — sự bất đối xứng của biểu đồ hình phễu.

---

## 14. publication bias detection /ˌpʌb.ləˈkeɪ.ʃən ˈbaɪ.əs dɪˈtek.ʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `perform`, `undertake`, `incorporate`.

**Core meaning — English:** Methodological procedures designed to discover whether a published body of literature systematically favors statistically positive or novel findings over neutral and contradictory evidence.

**Core meaning & mental image — Tiếng Việt:** Sự phát hiện thiên kiến xuất bản (hoạt động thanh tra khoa học nhằm vạch trần thói quen chuộng tin vui). Đội điều tra độc lập lật mở hậu trường: các tạp chí khoa học thường rất thích đăng các nghiên cứu phát hiện ra thuốc mới thần kỳ và từ chối các bài báo "thuốc vô tác dụng"; quy trình phát hiện thiên kiến này dùng thuật toán để tính toán xem có bao nhiêu nghiên cứu tiêu cực đã bị giấu kín khỏi công chúng.

**Grammar & collocations:** `rigorous publication bias detection` — sự phát hiện thiên kiến xuất bản chặt chẽ; `protocols for publication bias detection` — các quy trình nhằm phát hiện thiên kiến xuất bản; `advance publication bias detection methodologies` — cải tiến các phương pháp phát hiện thiên lệch xuất bản.

**Register & nuance:** Tiêu chuẩn đạo đức và học thuật bắt buộc theo hướng dẫn PRISMA (*Preferred Reporting Items for Systematic Reviews and Meta-Analyses*).

**Examples:** `Modern peer reviewers insist that every systematic review incorporate explicit publication bias detection before reaching final conclusions.` → Các chuyên gia bình duyệt hiện đại kiên quyết yêu cầu mọi bài tổng quan hệ thống phải lồng ghép quy trình phát hiện thiên kiến xuất bản rõ ràng trước khi đưa ra kết luận cuối cùng.

**Liên kết tiếng Hàn:** `출판 편향 탐지` (出版偏向探知) — sự phát hiện thiên kiến xuất bản.

---

## 15. trim-and-fill method /trɪm ænd fɪl ˈmeθ.əd/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng ở dạng số ít: `the trim-and-fill method`). Thường làm tân ngữ sau `implement`, `apply`, `utilize`.

**Core meaning — English:** A non-parametric iterative technique that estimates the number of missing studies suppressed due to publication bias, mathematically imputes them, and recalculates an adjusted effect size.

**Core meaning & mental image — Tiếng Việt:** Phương pháp cắt tỉa và bù đắp (kỹ thuật toán học tự động phục dựng các nghiên cứu bị chôn vùi). Cắt gọt và bù xi-măng để cân bằng chiếc phễu nghiêng: thuật toán cắt tỉa những nghiên cứu cực đoan ở bên phải gây mất cân đối, sau đó tạo ra các nghiên cứu "ảo" tương ứng ở bên trái để lấp đầy khoảng trống, rồi tính toán lại xem quy mô hiệu ứng thực tế sau khi tính đến các bài bị giấu còn lại bao nhiêu.

**Grammar & collocations:** `apply Duval and Tweedie's trim-and-fill method` — áp dụng phương pháp cắt tỉa và bù đắp của Duval và Tweedie; `the trim-and-fill method adjusts the effect size` — phương pháp cắt tỉa và bù đắp điều chỉnh lại quy mô hiệu ứng; `results generated by the trim-and-fill method` — các kết quả được tạo ra bởi phương pháp cắt tỉa và bù đắp.

**Register & nuance:** Bối cảnh phân tích độ nhạy (*sensitivity analysis*); giúp kiểm tra xem kết luận của phân tích gộp có bị sụp đổ nếu các nghiên cứu âm tính được tính đến hay không.

**Examples:** `Applying the trim-and-fill method imputed four unpublished negative trials, modestly attenuating the perceived efficacy of the surgical intervention.` → Việc áp dụng phương pháp cắt tỉa và bù đắp đã phục dựng bốn thử nghiệm âm tính chưa được xuất bản, làm giảm nhẹ hiệu quả được cảm nhận của can thiệp phẫu thuật.

**Liên kết tiếng Hàn:** `절삭 및 보완 기법 (트림 앤 필)` (切削補完技法) — phương pháp cắt tỉa và bù đắp.

---

## 16. Egger regression test /ˈeɡ.ɚ rɪˈɡreʃ.ən test/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng ở dạng số ít: `the Egger regression test`). Thường làm chủ ngữ hoặc tân ngữ sau `run`, `perform`, `conduct`.

**Core meaning — English:** A statistical linear regression test quantifying funnel plot asymmetry by evaluating whether the intercept of a standardized effect size regressed against precision deviates significantly from zero.

**Core meaning & mental image — Tiếng Việt:** Kiểm định hồi quy Egger (phép đo toán học chính xác vạch trần độ méo mó của biểu đồ hình phễu). Cây thước đo góc chuẩn xác: thay vì chỉ nhìn bằng mắt thường để đoán xem cái phễu có bị lệch hay không, nhà toán học chạy một đường thẳng hồi quy; nếu điểm cắt của đường thẳng lệch khỏi số 0 với giá trị p < 0.05, đó là bằng chứng đanh thép khẳng định có sự can thiệp của bàn tay vô hình giấu giếm dữ liệu.

**Grammar & collocations:** `run an Egger regression test` — chạy một kiểm định hồi quy Egger; `p-value derived from the Egger regression test` — giá trị p thu được từ kiểm định hồi quy Egger; `the Egger regression test confirms small-study effects` — kiểm định hồi quy Egger xác nhận các hiệu ứng nghiên cứu nhỏ.

**Register & nuance:** Tiêu chuẩn thống kê định lượng phổ biến nhất để kiểm định thiên lệch xuất bản khi có ít nhất 10 nghiên cứu trong phân tích gộp.

**Examples:** `A statistically significant p-value from the Egger regression test alerted researchers to the presence of systemic reporting distortion.` → Giá trị p có ý nghĩa thống kê từ kiểm định hồi quy Egger đã cảnh báo các nhà nghiên cứu về sự hiện diện của tình trạng bóp méo báo cáo mang tính hệ thống.

**Liên kết tiếng Hàn:** `에거 회귀 분석 검정` (Egger回歸分析檢定) — kiểm định hồi quy Egger.

---

## 17. fail-safe N calculation /feɪl seɪf en ˌkæl.kjəˈleɪ.ʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng ở dạng số ít: `the fail-safe N calculation`). Thường làm tân ngữ sau `execute`, `report`, `compute`.

**Core meaning — English:** A metric estimating the number of undiscovered or unpublished non-significant studies with an effect size of zero required to nullify the statistically significant findings of a meta-analysis.

**Core meaning & mental image — Tiếng Việt:** Phép tính chỉ số N an toàn (con số đo độ trâu bò của kết luận khoa học). Bức tường thành chịu đạn: phép tính cho biết cần phải có bao nhiêu nghiên cứu thất bại đang bị chôn giấu trong ngăn kéo (ví dụ: cần tới 500 bài báo âm tính) thì mới có thể đánh sập được kết luận rằng loại thuốc này hiệu quả; con số N an toàn càng cao hàng nghìn bài, công trình càng vững như bàn thạch.

**Grammar & collocations:** `compute Rosenthal's fail-safe N calculation` — tính toán chỉ số N an toàn của Rosenthal; `a reassuringly large fail-safe N calculation` — một phép tính chỉ số N an toàn lớn mang lại sự an tâm; `criticisms of the fail-safe N calculation` — những lời chỉ trích đối với phép tính chỉ số N an toàn.

**Register & nuance:** Được Robert Rosenthal giới thiệu; rất trực quan cho người đọc không chuyên dù các nhà thống kê hiện đại ưa chuộng các mô hình lựa chọn (*selection models*) hơn.

**Examples:** `The fail-safe N calculation revealed that over 400 zero-effect studies would be needed to overturn the meta-analysis's core conclusion.` → Phép tính chỉ số N an toàn tiết lộ rằng cần hơn 400 nghiên cứu không mang lại hiệu quả mới có thể lật ngược kết luận cốt lõi của bài phân tích gộp.

**Liên kết tiếng Hàn:** `안전 N 계산` (安全N計算) — phép tính chỉ số N an toàn.

---

## 18. subgroup meta-regression /ˈsʌb.ɡruːp ˌmet̬.ə.rɪˈɡreʃ.ən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (hoặc `countable noun phrase`). Thường làm tân ngữ sau `perform`, `conduct`, `utilize`.

**Core meaning — English:** An extension of meta-analysis that uses regression techniques to evaluate whether study-level characteristics (moderator variables like age, dosage, or study year) explain observed heterogeneity.

**Core meaning & mental image — Tiếng Việt:** Hồi quy phân tích gộp theo phân nhóm (kỹ thuật bóc tách nguyên nhân gây ra sự chênh lệch hiệu quả giữa các nhóm đối tượng). Lăng kính phân tích quang phổ: bóc tách dữ liệu tổng hợp thành từng lát cắt (nhóm người già đối chiếu với người trẻ, liều cao đối chiếu với liều thấp) để tìm ra biến số then chốt nào quyết định sự thành bại của phương pháp điều trị.

**Grammar & collocations:** `conduct subgroup meta-regression` — tiến hành hồi quy phân tích gộp theo phân nhóm; `identify moderators via subgroup meta-regression` — xác định các biến điều tiết thông qua hồi quy phân tích gộp phân nhóm; `subgroup meta-regression demonstrates treatment interactions` — hồi quy gộp phân nhóm chứng minh các tương tác điều trị.

**Register & nuance:** Bối cảnh giải thích tính không đồng nhất (*exploring heterogeneity*); đòi hỏi cỡ mẫu nghiên cứu đủ lớn để tránh vấn đề khai thác dữ liệu quá đà (*data dredging*).

**Examples:** `Subgroup meta-regression demonstrated that the cognitive intervention was significantly more potent in trials lasting longer than eight weeks.` → Hồi quy phân tích gộp theo phân nhóm đã chứng minh rằng can thiệp nhận thức có hiệu lực mạnh hơn đáng kể trong các thử nghiệm kéo dài hơn tám tuần.

**Liên kết tiếng Hàn:** `하위집단 메타회귀분석` (下位集團meta回歸分析) — hồi quy phân tích gộp theo phân nhóm.

---

## 19. sensitivity sub-analysis /ˌsen.səˈtɪv.ə.t̬i ˈsʌb.əˌnæl.ə.sɪs/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `perform`, `run`, `confirm`.

**Core meaning — English:** A secondary mathematical re-evaluation of meta-analytic data that tests whether overall findings remain robust when specific questionable studies or analytical assumptions are altered.

**Core meaning & mental image — Tiếng Việt:** Phân tích độ nhạy phụ (phép thử độ bền của kết quả khi thay đổi giả định hoặc loại trừ dữ liệu nghi vấn). Thử thách va đập cho chiếc xe hơi: nhà nghiên cứu thử loại bỏ tất cả những thử nghiệm lâm sàng không được làm mù đôi hoặc đổi sang một công thức tính khác xem kết luận chính có bị rung lắc hay sụp đổ không; nếu kết quả vẫn giữ nguyên, bài nghiên cứu đạt độ tin cậy tuyệt đối.

**Grammar & collocations:** `perform a sensitivity sub-analysis` — thực hiện một phân tích độ nhạy phụ; `the sensitivity sub-analysis corroborated the primary findings` — phân tích độ nhạy phụ đã chứng thực các phát hiện chính; `plan sensitivity sub-analyses a priori` — lên kế hoạch phân tích độ nhạy phụ từ trước.

**Register & nuance:** Bắt buộc trong các báo cáo thử nghiệm lâm sàng và tổng quan hệ thống chất lượng cao để chứng minh tính vững chắc (*robustness*).

**Examples:** `A sensitivity sub-analysis excluding low-quality open-label trials confirmed that the therapeutic benefit was statistically robust.` → Một phân tích độ nhạy phụ loại trừ các thử nghiệm nhãn mở chất lượng thấp đã xác nhận rằng lợi ích điều trị thực sự vững chắc về mặt thống kê.

**Liên kết tiếng Hàn:** `민감도 하위 분석` (敏感度下位分析) — phân tích độ nhạy phụ.

---

## 20. leave-one-out sensitivity test /liːv wʌn aʊt ˌsen.səˈtɪv.ə.t̬i test/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `conduct`, `apply`, `execute`.

**Core meaning — English:** An iterative validation procedure in which a meta-analysis is re-calculated repeatedly, omitting one individual study at a time, to verify that no single trial disproportionately skews the pooled result.

**Core meaning & mental image — Tiếng Việt:** Kiểm định độ nhạy loại trừ từng nghiên cứu (phép thử rút từng viên gạch để kiểm tra độ vững của công trình). Rút từng thanh gỗ trong trò chơi rút gỗ Jenga: thuật toán lần lượt rút bỏ nghiên cứu thứ nhất rồi tính lại, rút nghiên cứu thứ hai rồi tính lại; nếu rút một nghiên cứu khổng lồ ra mà kết quả gộp lập tức đảo chiều từ hiệu quả thành vô tác dụng, điều đó cảnh báo cả công trình đang phụ thuộc quá mức vào một nguồn đơn lẻ.

**Grammar & collocations:** `conduct a leave-one-out sensitivity test` — tiến hành kiểm định độ nhạy loại trừ từng nghiên cứu; `results from the leave-one-out sensitivity test` — các kết quả từ kiểm định độ nhạy loại trừ từng phần tử; `verify stability via a leave-one-out sensitivity test` — xác minh tính ổn định thông qua kiểm định độ nhạy loại trừ từng nghiên cứu.

**Register & nuance:** Phương pháp thẩm định toán học cực kỳ minh bạch và thuyết phục trong các phần mềm thống kê như R (*metafor package*) và Stata.

**Examples:** `Executing a leave-one-out sensitivity test verified that the aggregate conclusion did not rely on any single influential outlier trial.` → Việc thực hiện kiểm định độ nhạy loại trừ từng nghiên cứu đã xác minh rằng kết luận tổng hợp không hề bị phụ thuộc vào bất kỳ một thử nghiệm ngoại lai có ảnh hưởng lớn nào.

**Liên kết tiếng Hàn:** `단일 연구 제외 민감도 검정` (單一硏究除外敏感度檢定) — kiểm định độ nhạy loại trừ từng nghiên cứu.

---

## 21. systematic search filter /ˌsɪs.təˈmæt̬.ɪk sɝːtʃ ˈfɪl.tɚ/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `develop`, `apply`, `calibrate`, `execute`.

**Core meaning — English:** A pre-tested combination of Boolean operators, MeSH subject headings, and text keywords designed to exhaustively retrieve relevant citations from biomedical and scientific databases.

**Core meaning & mental image — Tiếng Việt:** Bộ lọc tìm kiếm có hệ thống (lưới quét y văn thông minh và toàn diện). Tấm lưới quét chuyên dụng quét đáy đại dương: kết hợp các từ khóa, thuật ngữ chuẩn MeSH cùng các toán tử logic AND, OR, NOT để quét sạch mọi bài báo liên quan trong hàng triệu bài lưu trữ trên PubMed hay Embase mà không để lọt bất kỳ thử nghiệm lâm sàng quan trọng nào.

**Grammar & collocations:** `develop a systematic search filter` — phát triển một bộ lọc tìm kiếm có hệ thống; `apply a validated systematic search filter` — áp dụng một bộ lọc tìm kiếm có hệ thống đã được kiểm chứng; `calibrate the systematic search filter for sensitivity` — hiệu chuẩn bộ lọc tìm kiếm có hệ thống để đạt độ nhạy tối đa.

**Register & nuance:** Bối cảnh khoa học thông tin y sinh học (*medical informatics & evidence synthesis*); đóng vai trò sống còn ở giai đoạn đầu của một bài tổng quan hệ thống.

**Examples:** `Librarians calibrated a validated systematic search filter across PubMed and Embase to ensure that zero relevant randomized trials were missed.` → Các thủ thư đã hiệu chuẩn một bộ lọc tìm kiếm có hệ thống đã được kiểm chứng trên PubMed và Embase để đảm bảo không bỏ sót bất kỳ thử nghiệm ngẫu nhiên liên quan nào.

**Liên kết tiếng Hàn:** `체계적 검색 필터` (體系的檢索filter) — bộ lọc tìm kiếm có hệ thống.

---

## 22. study inclusion criteria /ˈstʌd.i ɪnˈkluː.ʒən kraɪˌtɪr.i.ə/

**Loại từ & vị trí trong câu:** `plural noun phrase` (dạng số ít: `study inclusion criterion`). Thường làm chủ ngữ hoặc tân ngữ sau `define`, `establish`, `meet`, `adhere to`.

**Core meaning — English:** The predefined explicit methodological and demographic standards that research papers must satisfy to be incorporated into a systematic review and meta-analysis.

**Core meaning & mental image — Tiếng Việt:** Tiêu chí đưa vào nghiên cứu (bộ tiêu chuẩn tuyển chọn gắt gao ngay tại cổng vào). Cánh cửa an ninh của câu lạc bộ danh giá: văn bản quy định rõ ràng chỉ những thử nghiệm ngẫu nhiên có đối chứng (*RCT*), bệnh nhân trên 18 tuổi, thời gian theo dõi tối thiểu 12 tuần mới được phép bước qua cánh cửa để vào bài tổng hợp, loại bỏ mọi nghiên cứu chắp vá, thiếu minh bạch.

**Grammar & collocations:** `establish transparent study inclusion criteria` — thiết lập các tiêu chí đưa vào nghiên cứu minh bạch; `meet strict study inclusion criteria` — đáp ứng các tiêu chí đưa vào nghiên cứu nghiêm ngặt; `adhere strictly to predefined study inclusion criteria` — tuân thủ nghiêm ngặt các tiêu chí đưa vào nghiên cứu đã định trước.

**Register & nuance:** Tiêu chuẩn phương pháp luận cốt lõi; phải được công bố trước trong đề cương trên các hệ thống đăng ký như PROSPERO để ngăn chặn việc lựa chọn thiên vị.

**Examples:** `Only thirteen out of five thousand retrieved abstracts satisfied the strict study inclusion criteria established in the registered protocol.` → Chỉ có mười ba trong số năm nghìn bài tóm tắt được tìm thấy đáp ứng các tiêu chí đưa vào nghiên cứu nghiêm ngặt được thiết lập trong đề cương đã đăng ký.

**Liên kết tiếng Hàn:** `연구 포함 기준` (硏究包含基準) — tiêu chí đưa vào nghiên cứu.

---

## 23. risk of bias tool /rɪsk əv ˈbaɪ.əs tuːl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `apply`, `utilize`, `score with`.

**Core meaning — English:** A standardized assessment instrument (such as Cochrane RoB 2 or ROBINS-I) used to systematically evaluate flaws in study design, conduct, randomization, or reporting.

**Core meaning & mental image — Tiếng Việt:** Bộ công cụ đánh giá nguy cơ sai lệch (bảng kiểm tra chất lượng kỹ thuật của nghiên cứu). Kính hiển vi của giám định viên: soi xét từng chi tiết của bài báo khoa học xem quy trình phân bổ ngẫu nhiên có bị lộ không, bác sĩ có bị ảnh hưởng tâm lý khi biết ai dùng thuốc thật ai dùng giả dược không, và số liệu bệnh nhân bỏ cuộc có bị xóa dấu vết không để chấm điểm nguy cơ sai lệch cao, thấp hay đáng lo ngại.

**Grammar & collocations:** `apply the Cochrane risk of bias tool` — áp dụng bộ công cụ đánh giá nguy cơ sai lệch của Cochrane; `score trials using a risk of bias tool` — chấm điểm các thử nghiệm bằng bộ công cụ nguy cơ sai lệch; `domains within the risk of bias tool` — các khía cạnh trong bộ công cụ đánh giá nguy cơ sai lệch.

**Register & nuance:** Tiêu chuẩn đánh giá chất lượng học thuật cao nhất; phân biệt với các thang điểm cộng gộp chất lượng kiểu cũ (*quality scales*) vốn bị chỉ trích là thiếu tính cơ chế.

**Examples:** `Two independent reviewers utilized the revised Cochrane risk of bias tool to evaluate sequence generation and blinding protocols.` → Hai chuyên gia bình duyệt độc lập đã sử dụng bộ công cụ đánh giá nguy cơ sai lệch Cochrane sửa đổi để đánh giá quy trình tạo chuỗi ngẫu nhiên và làm mù.

**Liên kết tiếng Hàn:** `삐뚤림 (바이어스) 위험 평가 도구` (삐뚤림危險評價道具) — bộ công cụ đánh giá nguy cơ sai lệch / thiên kiến.

---

## 24. gray literature retrieval /ɡreɪ ˈlɪt̬.ɚ.ə.tʃɚ rɪˈtriː.vəl/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `conduct`, `prioritize`, `facilitate`.

**Core meaning — English:** The active searching and collection of research produced outside traditional commercial or academic publishing channels, including dissertations, conference proceedings, government reports, and clinical trial registries.

**Core meaning & mental image — Tiếng Việt:** Sự thu thập tài liệu xám (chiến dịch lùng sục các nghiên cứu chưa từng được xuất bản chính thức). Thợ lặn mò ngọc dưới đáy biển sâu: không chỉ đọc các bài báo lộng lẫy trên các tạp chí danh giá, nhà nghiên cứu cất công đào bới các luận án tiến sĩ lưu trữ trong thư viện, các kỷ yếu hội nghị hay các báo cáo nội bộ của bộ y tế để tìm những kết quả chân thực chưa từng được in ấn thương mại.

**Grammar & collocations:** `conduct thorough gray literature retrieval` — tiến hành thu thập tài liệu xám kỹ lưỡng; `broaden evidence via gray literature retrieval` — mở rộng bằng chứng thông qua việc tìm kiếm tài liệu xám; `challenges in gray literature retrieval` — những thách thức trong việc thu thập tài liệu xám.

**Register & nuance:** Yếu tố then chốt để chống lại thiên kiến xuất bản (*combating publication bias*); tài liệu xám thường chứa tỷ lệ nghiên cứu có kết quả âm tính hoặc không có ý nghĩa thống kê cao hơn.

**Examples:** `Comprehensive gray literature retrieval through clinical trial registries uncovered three unpublished trials with neutral findings.` → Việc thu thập tài liệu xám toàn diện thông qua các cơ sở đăng ký thử nghiệm lâm sàng đã phát hiện ba thử nghiệm chưa công bố mang lại kết quả trung tính.

**Liên kết tiếng Hàn:** `회색 문헌 수집 (검색)` (灰色文獻蒐集) — sự thu thập tài liệu xám.

---

## 25. cumulative meta-analysis /ˈkjuː.mjə.lə.t̬ɪv ˌmet̬.ə.əˈnæl.ə.sɪs/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `perform`, `reveal`, `plot`.

**Core meaning — English:** A sequential meta-analytic approach where studies are added chronologically to repeatedly recalculate the pooled effect size, revealing precisely when an intervention attained definitive statistical proof.

**Core meaning & mental image — Tiếng Việt:** Phân tích gộp tích lũy (bản ghi thời gian chiếu chậm sự hội tụ của chân lý khoa học). Cuộn phim tài liệu lịch sử theo dòng thời gian: bắt đầu từ nghiên cứu đầu tiên năm 1980 rồi lần lượt cộng dồn nghiên cứu năm 1985, 1990; cho thấy rõ mồn một vào đúng năm nào bằng chứng đã đủ mạnh để khẳng định phương pháp có tác dụng, vạch trần sự lãng phí tiền bạc vào những thử nghiệm lâm sàng thừa thãi sau đó.

**Grammar & collocations:** `perform a cumulative meta-analysis` — thực hiện một phân tích gộp tích lũy; `cumulative meta-analysis illustrates historical trends` — phân tích gộp tích lũy minh họa các xu hướng lịch sử; `reveal early efficacy using cumulative meta-analysis` — phát hiện hiệu quả sớm bằng cách sử dụng phân tích gộp tích lũy.

**Register & nuance:** Công cụ mang tính lịch sử và đạo đức học y khoa mạnh mẽ; chứng minh khi nào một phương pháp điều trị đã đạt đủ bằng chứng để dừng các thử nghiệm giả dược nhằm bảo vệ bệnh nhân.

**Examples:** `A cumulative meta-analysis revealed that the life-saving benefit of thrombolytic therapy had reached statistical certainty a decade before guidelines changed.` → Một bài phân tích gộp tích lũy đã tiết lộ rằng lợi ích cứu sống tính mạng của liệu pháp tiêu sợi huyết đã đạt đến độ chắc chắn thống kê từ một thập kỷ trước khi các phác đồ thay đổi.

**Liên kết tiếng Hàn:** `누적 메타분석` (累積meta分析) — phân tích gộp tích lũy.

---

## Review in context (Part 1: Quantitative Synthesis & Forest Plot Modeling)

In modern evidence-based medicine, syntheses of empirical literature have largely replaced single clinical trials as the foundation for authoritative health policies. When combining dozens of decentralized trials, biometricians calculate an aggregate **pooled effect size** to quantify the overarching therapeutic impact of an experimental drug. To communicate this synthesized finding intuitively to practitioners, investigators generate a clear **forest plot visualization**, plotting point estimates alongside individual confidence boundaries. However, prior to celebrating an apparent medical breakthrough, analysts must inspect the corresponding **heterogeneity statistic**, assessing whether observed variance across study outcomes reflects clinical differences or random variation.

If the empirical data exhibits substantial divergence across testing environments, modelers quantify the underlying **between-study variance** to isolate true methodological disparities from sample flukes. When genuine clinical diversity is discovered, statisticians universally advocate fitting a flexible **random-effects model**, which assumes that true effect sizes naturally fluctuate across geographic territories. In contrast, researchers rarely implement an unyielding **fixed-effect model**, as its strict assumption of a singular identical population effect is routinely violated in complex human interventions. Throughout this aggregation pipeline, assigning rigorous **effect size weighting** ensures that large trials with superior precision wield proportionate mathematical influence.

Careful scrutiny of the graphic display centers on the calculated **confidence interval band** surrounding the summary diamond; if this interval intersects the vertical threshold of no difference, claims of efficacy must be tempered. When methodological disparities among studies prove too erratic, rigorous guidelines formally prohibit premature **statistical pooling**, requiring authors to restrict their work to qualitative narrative summaries. When trials measure psychological outcomes through varied rating scales, analysts convert raw outcomes into a uniform **standardized mean difference** to establish direct comparability. For categorical survival metrics, investigators compute a definitive **summary odds ratio** to summarize risk reductions cleanly. Ultimately, a well-executed **meta-analytic synthesis** establishes an incontrovertible benchmark for clinical practice, eliminating the guesswork of interpreting fragmented individual papers.

**Bản dịch tiếng Việt:**

Trong y học chứng cứ hiện đại, các công trình tổng hợp y văn thực chứng phần lớn đã thay thế các thử nghiệm lâm sàng đơn lẻ để làm nền tảng cho các chính sách y tế có thẩm quyền. Khi kết hợp hàng chục thử nghiệm phân tán, các nhà thống kê sinh học sẽ tính toán một **quy mô hiệu ứng gộp** tổng hợp để định lượng tác động điều trị bao quát của một loại thuốc thử nghiệm. Để truyền đạt phát hiện tổng hợp này một cách trực quan cho các bác sĩ thực hành, các nhà điều tra tạo ra một **trực quan hóa biểu đồ rừng** rõ ràng, vẽ các ước tính điểm cùng với các ranh giới độ tin cậy riêng lẻ. Tuy nhiên, trước khi ăn mừng một bước đột phá y học rõ ràng, các nhà phân tích phải kiểm tra **chỉ số thống kê về tính không đồng nhất** tương ứng, đánh giá xem sự biến thiên quan sát được giữa các kết quả nghiên cứu phản ánh những khác biệt lâm sàng hay chỉ là sự biến thiên ngẫu nhiên.

Nếu dữ liệu thực chứng thể hiện sự phân kỳ đáng kể giữa các môi trường thử nghiệm, các nhà mô hình hóa sẽ định lượng **phương sai giữa các nghiên cứu** nền tảng để tách biệt các sai khác phương pháp luận thực sự khỏi những ngẫu nhiên của mẫu. Khi sự đa dạng lâm sàng thực sự được phát hiện, các nhà thống kê đều chủ trương áp dụng một **mô hình hiệu ứng ngẫu nhiên** linh hoạt, vốn giả định rằng quy mô hiệu ứng thực sự biến động một cách tự nhiên qua các vùng địa lý. Ngược lại, các nhà nghiên cứu hiếm khi triển khai một **mô hình hiệu ứng cố định** cứng nhắc, vì giả định nghiêm ngặt của nó về một hiệu ứng quần thể đồng nhất duy nhất thường xuyên bị vi phạm trong các can thiệp phức tạp ở con người. Xuyên suốt đường ống tổng hợp này, việc gán **trọng số cho quy mô hiệu ứng** nghiêm ngặt đảm bảo rằng các thử nghiệm lớn với độ chính xác vượt trội sẽ nắm giữ ảnh hưởng toán học tương xứng.

Việc xem xét kỹ lưỡng màn hình đồ họa tập trung vào **dải khoảng tin cậy** được tính toán bao quanh hình thoi tóm tắt; nếu khoảng này cắt qua ngưỡng thẳng đứng của sự không khác biệt, các tuyên bố về hiệu quả phải được tiết chế lại. Khi sự khác biệt về phương pháp luận giữa các nghiên cứu tỏ ra quá thất thường, các hướng dẫn nghiêm ngặt chính thức cấm đoán việc **gộp dữ liệu thống kê** sớm, yêu cầu các tác giả giới hạn công việc của họ trong các bản tóm tắt định tính. Khi các thử nghiệm đo lường các kết quả tâm lý thông qua các thang đánh giá đa dạng, các nhà phân tích sẽ chuyển đổi các kết quả thô thành một chỉ số **chênh lệch trung bình chuẩn hóa** thống nhất để thiết lập khả năng so sánh trực tiếp. Đối với các thước đo khả năng sống sót theo phân loại, các nhà điều tra tính toán một **tỷ số chênh tóm tắt** dứt khoát để tóm tắt các mức giảm rủi ro một cách rõ ràng. Cuối cùng, một **công trình tổng hợp phân tích gộp** được thực hiện tốt sẽ thiết lập một tiêu chuẩn không thể chối cãi cho thực hành lâm sàng, xóa bỏ sự phỏng đoán khi phải tự diễn giải các bài báo riêng lẻ chắp vá.

---

## Review in context (Part 2: Bias Detection, Moderation & Sensitivity Analyses)

Evaluating the validity of any systematic evidence requires rigorous tools to unmask suppressed findings and methodological vulnerabilities. When generating scatter plots of sample precision against reported effect sizes, the detection of prominent **funnel plot asymmetry** sounds an immediate methodological alarm. This visual skewness represents the primary signature utilized in automated **publication bias detection**, indicating that small studies reporting unfavorable or neutral conclusions have likely been concealed. To correct for this omission, statisticians apply the non-parametric **trim-and-fill method**, which mathematically imputes hypothetical missing negative trials and recomputes an adjusted, less biased effect estimate.

To substantiate visual interpretations with numerical rigor, researchers perform the standardized **Egger regression test**, confirming whether the regression intercept deviates significantly from zero. In parallel, analysts frequently report a reassuring **fail-safe N calculation**, demonstrating how many hundreds of unpublished null trials would be theoretically required to overturn the synthesis's statistical significance. When significant between-study heterogeneity persists, researchers deploy **subgroup meta-regression** to examine whether underlying trial characteristics—such as participant age cohorts or treatment durations—act as powerful effect moderators. To verify that findings do not collapse under altered mathematical assumptions, analysts conduct an exhaustive **sensitivity sub-analysis** across predefined methodological parameters.

One of the most revealing diagnostic steps involves running an iterative **leave-one-out sensitivity test**, which sequentially removes each clinical study to guarantee that the primary effect estimate is not artificially buoyed by a single dramatic outlier. At the very outset of any project, information specialists build a highly sensitive **systematic search filter**, combining Boolean keywords and controlled vocabularies to identify every potential paper. These retrieved citations are then screened strictly against transparent **study inclusion criteria** registered openly prior to data extraction. To evaluate internal validity, independent reviewers apply a formal **risk of bias tool**, appraising potential flaws in allocation concealment and trial blinding. Crucially, authors protect their syntheses against commercial distortion by conducting extensive **gray literature retrieval**, searching doctoral dissertations and regulatory trial registers for unindexed data. Finally, plotting a chronological **cumulative meta-analysis** tracks how statistical certainty evolved historically, proving precisely when medical consensus solidified and rendering redundant patient trials unnecessary.

**Bản dịch tiếng Việt:**

Việc đánh giá giá trị của bất kỳ bằng chứng mang tính hệ thống nào đều đòi hỏi các công cụ nghiêm ngặt để vạch trần các phát hiện bị ỉm đi và các lỗ hổng về phương pháp luận. Khi tạo ra các biểu đồ phân tán giữa độ chính xác của mẫu và quy mô hiệu ứng được báo cáo, việc phát hiện **sự bất đối xứng của biểu đồ hình phễu** nổi bật sẽ gióng lên một hồi chuông cảnh báo phương pháp luận ngay lập tức. Độ lệch trực quan này đại diện cho dấu hiệu chính được sử dụng trong quy trình **phát hiện thiên kiến xuất bản** tự động, chỉ ra rằng các nghiên cứu nhỏ báo cáo kết luận không thuận lợi hoặc trung tính có khả năng đã bị giấu kín. Để khắc phục sự thiếu sót này, các nhà thống kê áp dụng **phương pháp cắt tỉa và bù đắp** phi tham số, vốn phục dựng các thử nghiệm âm tính giả định bị thiếu theo phương pháp toán học và tính toán lại một ước tính hiệu ứng đã điều chỉnh, ít thiên lệch hơn.

Để chứng minh các diễn giải trực quan bằng sự chặt chẽ của các con số, các nhà nghiên cứu thực hiện **kiểm định hồi quy Egger** được chuẩn hóa, xác nhận xem điểm cắt hồi quy có lệch đáng kể so với số không hay không. Song song đó, các nhà phân tích thường xuyên báo cáo một **phép tính chỉ số N an toàn** mang lại sự an tâm, chứng minh cần có bao nhiêu trăm thử nghiệm vô hiệu chưa được xuất bản về mặt lý thuyết để lật ngược ý nghĩa thống kê của bài tổng hợp. Khi tính không đồng nhất đáng kể giữa các nghiên cứu vẫn tồn tại dai dẳng, các nhà nghiên cứu triển khai **hồi quy phân tích gộp theo phân nhóm** để xem xét liệu các đặc điểm cơ bản của thử nghiệm—chẳng hạn như các nhóm tuổi của người tham gia hoặc thời lượng điều trị—có đóng vai trò như các biến điều tiết hiệu ứng mạnh mẽ hay không. Để xác minh rằng các phát hiện không bị sụp đổ dưới các giả định toán học bị thay đổi, các nhà phân tích tiến hành một **phân tích độ nhạy phụ** toàn diện trên các tham số phương pháp luận đã định trước.

Một trong những bước chẩn đoán hé lộ nhiều điều nhất liên quan đến việc chạy một **kiểm định độ nhạy loại trừ từng nghiên cứu** lặp đi lặp lại, vốn lần lượt loại bỏ từng nghiên cứu lâm sàng để đảm bảo rằng ước tính hiệu ứng chính không bị thổi phồng một cách giả tạo bởi một nghiên cứu ngoại lai gây chấn động đơn lẻ. Ngay từ đầu của bất kỳ dự án nào, các chuyên gia thông tin đã xây dựng một **bộ lọc tìm kiếm có hệ thống** có độ nhạy cao, kết hợp các từ khóa Boolean và từ vựng có kiểm soát để xác định mọi bài báo tiềm năng. Những trích dẫn tìm được này sau đó được sàng lọc nghiêm ngặt dựa trên các **tiêu chí đưa vào nghiên cứu** minh bạch được đăng ký công khai trước khi trích xuất dữ liệu. Để đánh giá giá trị nội tại, các chuyên gia bình duyệt độc lập áp dụng một **bộ công cụ đánh giá nguy cơ sai lệch** chính thức, đánh giá các sai sót tiềm ẩn trong việc che giấu phân bổ và làm mù thử nghiệm. Quan trọng không kém, các tác giả bảo vệ các công trình tổng hợp của họ chống lại sự bóp méo thương mại bằng cách tiến hành **sự thu thập tài liệu xám** sâu rộng, lục tìm các luận án tiến sĩ và sổ đăng ký thử nghiệm của cơ quan quản lý để lấy dữ liệu chưa được lập chỉ mục. Cuối cùng, việc vẽ một đồ thị **phân tích gộp tích lũy** theo trình tự thời gian sẽ theo dõi mức độ chắc chắn thống kê đã phát triển như thế nào trong lịch sử, chứng minh chính xác thời điểm sự đồng thuận y khoa được củng cố và khiến các thử nghiệm bệnh nhân thừa thãi sau đó trở nên không còn cần thiết.
