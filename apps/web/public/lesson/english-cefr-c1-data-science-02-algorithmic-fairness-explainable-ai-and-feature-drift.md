# C1 Vocabulary 02 — Algorithmic fairness, explainable machine learning, and concept drift

Bài học C1 này tập trung vào các chủ đề cốt lõi trong khoa học dữ liệu và học máy hiện đại: tính công bằng thuật toán (algorithmic fairness), các mô hình giải thích được (explainable AI / SHAP), sự trôi dạt khái niệm theo thời gian (temporal concept drift), độ dịch chuyển đồng biến (covariate shift), các ranh giới vi phân bảo mật (differential privacy bounds), và hệ thống đo từ xa giám sát mô hình trong môi trường sản xuất (model telemetry).

---

## 1. demographic parity /ˌdɛməˈɡræfɪk ˈpærəti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ chỉ chuẩn mực công bằng hoặc tân ngữ sau `enforce`, `satisfy`, `evaluate`.

**Core meaning — English:** A fairness criterion in machine learning stipulating that the likelihood of receiving a positive algorithmic prediction must be statistically identical across all protected demographic sub-groups, regardless of group base rates.

**Core meaning & mental image — Tiếng Việt:** Bình đẳng nhân khẩu học; tỷ lệ chấp thuận đồng đều giữa các nhóm. Hãy hình dung một chiếc máy tuyển dụng tự động duyệt hồ sơ xin việc: dù ứng viên nộp hồ sơ thuộc giới tính nào hay nhóm tuổi nào, chiếc máy đều bảo đảm tỷ lệ phần trăm người được gọi phỏng vấn của mỗi nhóm là hoàn toàn bằng nhau (ví dụ đều đạt 20%).

**Grammar & collocations:** `enforce demographic parity` — thực thi bình đẳng nhân khẩu học; `satisfy demographic parity constraints` — thỏa mãn các ràng buộc về bình đẳng nhân khẩu học; `trade-offs between accuracy and demographic parity` — sự đánh đổi giữa độ chính xác và bình đẳng nhân khẩu học.

**Register & nuance:** Tiêu chuẩn công bằng pháp lý và đạo đức (thường liên quan đến quy tắc "four-fifths rule" trong luật lao động Mỹ). Nhược điểm kỹ thuật là nếu năng lực thực tế giữa các nhóm chênh lệch tự nhiên, việc gò ép bình đẳng nhân khẩu học có thể làm giảm độ chính xác tổng thể của mô hình.

**Examples:** `The compliance team configured the automated loan-screening algorithm to guarantee demographic parity, ensuring that applicants from lower-income postcodes had equal statistical selection odds.` → Nhóm tuân thủ đã cấu hình thuật toán duyệt vay tự động nhằm bảo đảm tính bình đẳng nhân khẩu học, giúp các ứng viên từ các mã vùng thu nhập thấp có cơ hội được lựa chọn thống kê ngang bằng.

**Liên kết tiếng Hàn:** `인구통계학적 패리티` (人口統計學的 parity) — tiêu chuẩn công bằng thuật toán bảo đảm tỷ lệ dự đoán tích cực ngang nhau giữa các nhóm dân số.

---

## 2. equalized odds /ˈiːkwəˌlaɪzd ɑːdz/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm tân ngữ sau `achieve`, `optimize for`, hoặc làm chủ ngữ kiểm soát sai số phân loại.

**Core meaning — English:** A fairness metric requiring that an algorithmic model exhibit identical true-positive rates and false-positive rates across all protected demographic groups, conditioning fairness directly on actual ground truth outcomes.

**Core meaning & mental image — Tiếng Việt:** Tỷ lệ cược cân bằng; xác suất lỗi đồng đều theo thực tế. Hãy hình dung một chiếc máy soi hành lý tại sân bay: nó phát hiện vũ khí chuẩn xác như nhau và báo động nhầm với tỷ lệ thấp như nhau đối với hành khách đến từ bất kỳ quốc gia nào, không thiên vị hay soi xét khắt khe hơn bất kỳ ai có hành vi trong sạch.

**Grammar & collocations:** `optimize for equalized odds` — tối ưu hóa cho tỷ lệ cược cân bằng; `equalized odds fairness constraint` — ràng buộc công bằng theo tỷ lệ cược cân bằng; `demonstrate equalized odds across subgroups` — thể hiện tỷ lệ cược cân bằng xuyên suốt các nhóm phụ.

**Register & nuance:** Khác với *demographic parity* (chỉ nhìn vào kết quả đầu ra), *equalized odds* nhìn vào mối quan hệ giữa kết quả dự đoán và sự thật hiển nhiên (*ground truth*). Thước đo này đòi hỏi mô hình không trừng phạt oan những cá nhân đủ điều kiện trong các nhóm thiểu số.

**Examples:** `By calibrating decision thresholds for equalized odds, the hospital's diagnostic AI ensures that malignant tumors are identified with equal sensitivity regardless of patient ethnicity.` → Bằng cách hiệu chuẩn các ngưỡng quyết định để đạt tỷ lệ cược cân bằng, AI chẩn đoán của bệnh viện bảo đảm các khối u ác tính được phát hiện với độ nhạy ngang nhau bất kể sắc tộc của bệnh nhân.

**Liên kết tiếng Hàn:** `균 đẳng 오즈` / `균등 승산` (均等 勝算) — chỉ số công bằng yêu cầu tỷ lệ dương tính thật và dương tính giả bằng nhau giữa các nhóm.

---

## 3. disparate impact /ˈdɪspərət ˈɪmpækt/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ chỉ sự phân biệt đối xử gián tiếp hoặc tân ngữ sau `suffer from`, `mitigate`, `prohibit`.

**Core meaning — English:** An adverse, discriminatory outcome produced by an ostensibly neutral policy or algorithmic decision system that disproportionately disadvantages members of a protected class.

**Core meaning & mental image — Tiếng Việt:** Tác động phân biệt gián tiếp; ảnh hưởng bất lợi bất cân xứng. Hãy hình dung một quy định tuyển dụng công an yêu cầu ứng viên phải cao từ 1m80 trở lên: bề ngoài quy định có vẻ công bằng vì áp dụng chung cho mọi người, nhưng trên thực tế nó gián tiếp loại bỏ gần như 99% ứng viên nữ giới, tạo ra một tác động bất lợi mang tính phân biệt đối xử sâu sắc.

**Grammar & collocations:** `mitigate disparate impact` — giảm thiểu tác động phân biệt đối xử gián tiếp; `evidence of disparate impact` — bằng chứng về tác động phân biệt bất cân xứng; `disparate impact ratio` — tỷ lệ tác động phân biệt đối xử.

**Register & nuance:** Khái niệm pháp lý danh tiếng bắt nguồn từ phán quyết mang tính bước ngoặt của Tối cao Pháp viện Hoa Kỳ năm 1971 (*Griggs v. Duke Power Co.*). Trong khoa học dữ liệu, ngay cả khi mô hình không dùng biến nhạy cảm (như chủng tộc hay giới tính), sự tương quan gián tiếp qua mã bưu điện vẫn có thể gây ra disparate impact.

**Examples:** `Regulatory auditors penalized the fintech startup after discovering that its credit-scoring model generated a severe disparate impact against single mothers seeking mortgages.` → Các kiểm toán viên cơ quan quản lý đã xử phạt công ty khởi nghiệp công nghệ tài chính sau khi phát hiện mô hình chấm điểm tín dụng của công ty gây ra tác động phân biệt gián tiếp nghiêm trọng đối với các bà mẹ đơn thân xin vay thế chấp.

**Liên kết tiếng Hàn:** `불균등 영향` / `간접 차별` (間接 差別) — sự phân biệt đối xử phát sinh gián tiếp khi một quy tắc trung lập gây bất lợi lớn cho một nhóm được bảo vệ.

---

## 4. Shapley additive explanations /ˈʃæpli ˈædətɪv ˌɛkspləˈneɪʃənz/

**Loại từ & vị trí trong câu:** `plural noun phrase` (thường viết tắt là SHAP). Thường làm tân ngữ sau `compute`, `derive`, hoặc làm chủ ngữ định lượng đóng góp đặc trưng.

**Core meaning — English:** A game-theoretic method for explaining individual machine learning predictions by computing the fair marginal contribution of each feature across all possible feature coalitions.

**Core meaning & mental image — Tiếng Việt:** Giải thích phụ gia Shapley; phương pháp gán giá trị đóng góp công bằng SHAP. Hãy hình dung một đội bóng đá gồm 11 cầu thủ cùng ghi được một bàn thắng đẹp mắt: phương pháp Shapley tính toán tỉ mỉ xem tiền đạo sút bóng đóng góp bao nhiêu phần trăm, tiền vệ chuyền bóng đóng góp bao nhiêu phần trăm, và thủ môn phát bóng lên đóng góp bao nhiêu phần trăm vào bàn thắng đó để chia tiền thưởng sòng phẳng.

**Grammar & collocations:** `compute Shapley additive explanations` — tính toán các giá trị giải thích phụ gia Shapley; `SHAP value attribution` — phân bổ giá trị theo phương pháp SHAP; `tree-based Shapley additive explanations` — phương pháp giải thích phụ gia Shapley cho mô hình dạng cây.

**Register & nuance:** Tiêu chuẩn vàng của khả năng giải thích cục bộ (*local explainability*). Bắt nguồn từ lý thuyết trò chơi của nhà kinh tế học đoạt giải Nobel Lloyd Shapley, phương pháp này bảo đảm tính nhất quán toán học (*consistency*) và tính cộng dồn (*additivity*).

**Examples:** `Data scientists extracted Shapley additive explanations for every denied insurance claim to provide customers with an exact breakdown of which medical risk factors drove the refusal.` → Các nhà khoa học dữ liệu đã trích xuất các giá trị giải thích phụ gia Shapley cho từng hồ sơ bảo hiểm bị từ chối nhằm cung cấp cho khách hàng bảng phân tích chính xác những yếu tố nguy cơ y tế nào đã dẫn tới quyết định từ chối.

**Liên kết tiếng Hàn:** `샤플리 가산 설명` (Shapley 加算 說明) — phương pháp lý thuyết trò chơi giúp phân bổ mức độ đóng góp của từng đặc trưng vào kết quả dự đoán của mô hình.

---

## 5. feature attribution /ˈfiːtʃər ˌætrɪˈbjuːʃən/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ minh giải mô hình hoặc tân ngữ sau `visualize`, `quantify`, `aggregate`.

**Core meaning — English:** The quantitative allocation of numerical credit or blame to individual input variables, reflecting the degree of influence each feature exerted on a specific model prediction.

**Core meaning & mental image — Tiếng Việt:** Sự quy gán tầm quan trọng của đặc trưng; phân bổ mức độ ảnh hưởng của biến số. Hãy hình dung một chiếc cân đĩa cân một gói hàng bí ẩn: bạn lần lượt nhấc từng quả cân nhỏ ra khỏi đĩa và ghi nhận kim đồng hồ dao động thế nào để đo chính xác trọng lượng mà từng quả cân nhỏ đóng góp vào tổng trọng lượng hiển thị.

**Grammar & collocations:** `local feature attribution` — quy gán đặc trưng cục bộ cho từng trường hợp; `feature attribution score` — điểm số quy gán mức độ ảnh hưởng của đặc trưng; `robust feature attribution methods` — các phương pháp quy gán đặc trưng vững chắc.

**Register & nuance:** Thuật ngữ bao quát bao gồm cả SHAP, Integrated Gradients, và LIME. Phân biệt với *global feature importance* (tầm quan trọng chung trên toàn bộ tập dữ liệu): feature attribution tập trung mạnh vào việc giải thích một quyết định dự đoán cụ thể (*local instance*).

**Examples:** `The dashboard displays intuitive feature attribution charts so credit underwriters can immediately see whether high debt-to-income ratios or recent delinquencies caused the score drop.` → Bảng điều khiển hiển thị các biểu đồ quy gán đặc trưng trực quan để các nhân viên thẩm định tín dụng có thể thấy ngay liệu tỷ lệ nợ trên thu nhập cao hay các khoản nợ quá hạn gần đây đã gây ra sự sụt giảm điểm số.

**Liên kết tiếng Hàn:** `특성 기여도` (特性 寄與度) — mức độ đóng góp định lượng của từng biến số đầu vào đối với kết quả phán đoán của thuật toán.

---

## 6. surrogate interpretability model /ˈsɜːrəɡət ɪnˌtɜːrprətəˈbɪləti ˈmɑːdl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ giải mã mô hình hộp đen hoặc tân ngữ sau `train`, `fit`, `interrogate`.

**Core meaning — English:** An inherently interpretable, transparent statistical model (such as a shallow decision tree or linear regressor) trained to approximate and explain the complex prediction logic of an opaque black-box neural network.

**Core meaning & mental image — Tiếng Việt:** Mô hình đại diện giải thích được; mô hình thế chân dễ hiểu. Hãy hình dung một chiếc đồng hồ cơ khí tinh xảo bằng vàng có vỏ kim loại kín mít bên trong chứa hàng vạn bánh răng xoay tít: một người thợ chế tạo một mô hình đồ chơi bằng nhựa trong suốt hoạt động mô phỏng lại các chuyển động chính để giúp học viên hiểu được nguyên lý hoạt động bên trong chiếc đồng hồ vàng.

**Grammar & collocations:** `train a surrogate interpretability model` — huấn luyện một mô hình đại diện giải thích được; `global surrogate interpretability model` — mô hình thế chân giải thích toàn cục; `fidelity of a surrogate interpretability model` — độ trung thực của mô hình đại diện so với mô hình gốc.

**Register & nuance:** Phương pháp cốt lõi của công nghệ LIME (*Local Interpretable Model-agnostic Explanations*). Ưu điểm là hoạt động độc lập với kiến trúc mô hình gốc (*model-agnostic*), nhưng cần chú ý kiểm soát "độ trung thực" (*fidelity*): nếu mô hình đại diện khớp kém, lời giải thích có thể bị sai lệch.

**Examples:** `Because the deep neural ensemble was too complex for banking regulators to audit directly, the data team fitted a shallow surrogate interpretability model to explain the rejection logic.` → Vì cụm mô hình nơ-ron sâu quá phức tạp để các nhà điều hành ngân hàng có thể thanh tra trực tiếp, nhóm dữ liệu đã khớp một mô hình đại diện giải thích được có cấu trúc nông để giải thích logic từ chối.

**Liên kết tiếng Hàn:** `설명 가능한 대리 모델` (說明 可能 代理 model) — mô hình thống kê trong suốt được huấn luyện để giải thích xấp xỉ hành vi của mạng nơ-ron hộp đen.

---

## 7. counterfactual explanation /ˌkaʊntərˈfæktʃuəl ˌɛkspləˈneɪʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `generate`, `deliver`, `request`, hoặc làm chủ ngữ hướng dẫn hành động.

**Core meaning — English:** An explanation that reveals what minimal perturbations or changes to input features would have altered an algorithmic decision from an undesirable outcome to a desirable one.

**Core meaning & mental image — Tiếng Việt:** Lời giải thích phản thực tế; giải trình điều kiện giả định. Hãy hình dung một lá thư trượt đại học gửi kèm lời nhắn chi tiết: "Nếu bạn đạt thêm 0.5 điểm môn Toán và nộp thêm một bài luận về hoạt động tình nguyện, bạn sẽ được nhận vào trường" — thay vì chỉ thông báo ngắn ngủn là bạn đã trượt.

**Grammar & collocations:** `generate a counterfactual explanation` — tạo ra một lời giải thích phản thực tế; `actionable counterfactual explanation` — lời giải thích phản thực tế có thể hành động được; `minimal distance counterfactual explanation` — lời giải thích phản thực tế với sự thay đổi tối thiểu.

**Register & nuance:** Đạt chuẩn mực cao nhất của quyền được giải thích (*Right to Explanation*) theo quy định GDPR của châu Âu. Rất thân thiện với người dùng vì nó không chỉ ra mô hình hoạt động thế nào mà chỉ cho người dùng cách cụ thể để thay đổi kết quả trong tương lai.

**Examples:** `The mortgage platform automatically serves a counterfactual explanation indicating that reducing revolving credit card balances by three thousand dollars would convert the loan rejection into an approval.` → Nền tảng cho vay thế chấp tự động gửi kèm một lời giải thích phản thực tế cho thấy việc giảm ba ngàn đô-la dư nợ thẻ tín dụng tuần hoàn sẽ biến quyết định từ chối vay thành phê duyệt.

**Liên kết tiếng Hàn:** `반사실적 설명` (反事實的 說明) — lời giải thích dựa trên kịch bản giả định tối thiểu để đảo ngược kết quả phán đoán bất lợi.

---

## 8. permutation feature importance /ˌpɜːrmjuˈteɪʃən ˈfiːtʃər ɪmˈpɔːrtns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ đo lường mức độ suy giảm hiệu năng hoặc tân ngữ sau `calculate`, `rank by`.

**Core meaning — English:** A model validation technique that measures the importance of an input variable by calculating the drop in overall model performance when the values of that specific feature are randomly shuffled, breaking its relationship with the target.

**Core meaning & mental image — Tiếng Việt:** Tầm quan trọng của đặc trưng theo phương pháp hoán vị. Hãy hình dung một dàn nhạc giao hưởng đang trình diễn: bạn bịt tai một nhạc công chơi kèn lại hoặc bắt anh ta thổi lung tung một bản nhạc khác; nếu toàn bộ dàn nhạc trở nên hỗn loạn và dở tệ ngay lập tức, chứng tỏ cây kèn đó giữ vai trò sống còn trong bản giao hưởng.

**Grammar & collocations:** `compute permutation feature importance` — tính toán tầm quan trọng đặc trưng theo phép hoán vị; `rank predictors by permutation feature importance` — xếp hạng các biến dự báo theo độ quan trọng hoán vị; `mitigate correlated bias in permutation feature importance` — giảm thiểu sai lệch tương quan trong phương pháp hoán vị đặc trưng.

**Register & nuance:** Ưu việt hơn các chỉ số đo độ quan trọng dựa trên độ giảm bất thuần (*impurity-based feature importance*) trong rừng ngẫu nhiên (Random Forest) vốn hay bị thiên vị đối với các biến có nhiều giá trị phân loại (*high-cardinality features*).

**Examples:** `Permutation feature importance revealed that shuffling the customer's average account tenure degraded predictive accuracy by twenty-five percent, confirming tenure as the strongest churn signal.` → Tầm quan trọng của đặc trưng theo phương pháp hoán vị đã tiết lộ rằng việc xáo trộn thời gian gắn bó tài khoản trung bình của khách hàng làm suy giảm hai mươi lăm phần trăm độ chính xác dự báo, khẳng định thời gian gắn bó là tín hiệu rời bỏ mạnh nhất.

**Liên kết tiếng Hàn:** `순열 특성 중요도` (順列 特性 重要度) — phương pháp đánh giá tầm quan trọng của biến số bằng cách xáo trộn ngẫu nhiên dữ liệu và đo mức độ sụt giảm độ chính xác.

---

## 9. saliency map /ˈseɪliənsi mæp/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `generate`, `inspect`, `overlay`, hoặc làm chủ ngữ trực quan hóa vùng chú ý.

**Core meaning — English:** A visual representation that highlights the specific pixels, image regions, or tokens that contributed most strongly to a neural network's classification decision by projecting gradient magnitudes back onto the input.

**Core meaning & mental image — Tiếng Việt:** Bản đồ độ nổi bật; bản đồ nhiệt vùng chú ý thị giác. Hãy hình dung một bức ảnh chụp một con chó đang ngồi trên bãi cỏ được phủ một lớp bản đồ nhiệt đỏ rực: vùng mắt, mũi và tai của chú chó phát sáng màu đỏ chói lọi, trong khi bãi cỏ xung quanh có màu xanh lam lạnh lẽo, cho bạn thấy mạng nơ-ron nhìn vào đâu để nhận diện đó là con chó.

**Grammar & collocations:** `generate a gradient-weighted saliency map` — tạo bản đồ độ nổi bật dựa trên độ dốc trọng số (Grad-CAM); `inspect the saliency map for artifacts` — kiểm tra bản đồ độ nổi bật để tìm các khiếm khuyết giả tạo; `overlay a saliency map onto medical scans` — xếp chồng bản đồ độ nổi bật lên các ảnh chụp y tế.

**Register & nuance:** Công cụ chẩn đoán không thể thiếu trong thị giác máy tính (*computer vision*). Giúp các bác sĩ và kỹ sư kiểm tra xem mô hình có đưa ra quyết định dựa trên bệnh lý thực sự hay chỉ dựa vào một vết xước ngẫu nhiên trên phim X-quang.

**Examples:** `When evaluating the radiology model, the clinician inspected the saliency map to confirm that the deep network focused on lung nodule contours rather than medical equipment markers.` → Khi đánh giá mô hình X-quang, bác sĩ lâm sàng đã kiểm tra bản đồ độ nổi bật để xác nhận rằng mạng nơ-ron sâu tập trung vào đường viền nốt sần ở phổi thay vì các dấu vết thiết bị y tế.

**Liên kết tiếng Hàn:** `돌출도 맵` / `현저성 맵` (顯著性 map) — bản đồ nhiệt trực quan hóa các vùng điểm ảnh có tác động mạnh nhất đến phán đoán của mạng nơ-ron.

---

## 10. model auditability /ˈmɑːdl ˌɔːdɪtəˈbɪləti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ thể hiện mức độ tuân thủ hoặc tân ngữ sau `ensure`, `enhance`, `mandate`.

**Core meaning — English:** The architectural quality of a machine learning system that allows external regulators, independent auditors, and stakeholders to systematically inspect training data provenance, hyperparameter lineage, and decision paths.

**Core meaning & mental image — Tiếng Việt:** Khả năng kiểm toán của mô hình; tính minh bạch phục vụ thanh tra. Hãy hình dung một chiếc hộp đen máy bay cứu nạn: nó không chỉ ghi lại hướng bay mà còn lưu trữ từng cú kéo cần lái của phi công, từng lệnh điều khiển tự động của máy tính và thông số áp suất buồng lái, giúp các điều tra viên tai nạn có thể tái hiện chính xác từng mili-giây hành trình bay.

**Grammar & collocations:** `ensure end-to-end model auditability` — bảo đảm khả năng kiểm toán mô hình từ đầu đến cuối; `framework for model auditability` — khuôn khổ phục vụ việc kiểm toán mô hình; `statutory model auditability requirements` — các yêu cầu kiểm toán mô hình theo luật định.

**Register & nuance:** Trọng tâm quản trị rủi ro AI trong các ngành tài chính, y tế và hàng không. Bắt buộc hệ thống phải lưu giữ đầy đủ nhật ký huấn luyện, kiểm thử công bằng và phiên bản trọng số để sẵn sàng giải trình trước pháp luật.

**Examples:** `To satisfy rigorous European AI Act directives, the autonomous vehicle consortium introduced comprehensive model auditability protocols capturing every weight update and training dataset hash.` → Để đáp ứng các chỉ thị nghiêm ngặt của Đạo luật AI châu Âu, liên minh xe tự hành đã đưa vào các giao thức kiểm toán mô hình toàn diện ghi nhận mọi lần cập nhật trọng số và mã băm của tập dữ liệu huấn luyện.

**Liên kết tiếng Hàn:** `모델 감사 가능성` (model 監査 可能性) — đặc tính cho phép kiểm tra, truy vết và thẩm tra toàn diện đường ống huấn luyện và logic ra quyết định của mô hình.

---

## 11. algorithmic recourse /ˌælɡəˈrɪðmɪk ˈriːkɔːrs/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ trao quyền cho người dùng hoặc tân ngữ sau `provide`, `guarantee`, `demand`.

**Core meaning — English:** The practical, realistic mechanism provided to an affected individual allowing them to take feasible real-world corrective actions to overturn an unfavorable automated decision.

**Core meaning & mental image — Tiếng Việt:** Quyền cứu hồi thuật toán; cơ chế khắc phục phán đoán bất lợi. Hãy hình dung một người nộp đơn bị từ chối cấp thị thực du học: thay vì chỉ nhận một cánh cửa đóng sầm lạnh lùng, đại sứ quán cung cấp một lộ trình rõ ràng gồm 3 bước cụ thể có thể làm được trong 3 tháng để nộp lại đơn và được chấp thuận chắc chắn.

**Grammar & collocations:** `guarantee meaningful algorithmic recourse` — bảo đảm quyền cứu hồi thuật toán có ý nghĩa thực tế; `actionable algorithmic recourse` — cơ chế khắc phục thuật toán có tính khả thi; `lack of algorithmic recourse in credit decisions` — sự thiếu vắng cơ chế cứu hồi thuật toán trong các quyết định tín dụng.

**Register & nuance:** Khác với *counterfactual explanation* (vốn chỉ mang tính toán học thuần túy, đôi khi đưa ra các gợi ý phi lý như "hãy trẻ lại 10 tuổi"), *algorithmic recourse* bắt buộc các khuyến nghị phải thực tế và con người có thể thực hiện được trong đời thực (*plausible and actionable*).

**Examples:** `Legal advocates argued that denying parole through machine scoring without providing algorithmic recourse violates constitutional due process by trapping inmates in unchallengeable decisions.` → Các luật sư nhân quyền lập luận rằng việc từ chối đặc xá thông qua chấm điểm máy mà không cung cấp quyền cứu hồi thuật toán đã vi phạm quy trình tố tụng hợp pháp theo hiến pháp khi đẩy các tù nhân vào những quyết định không thể kháng cáo.

**Liên kết tiếng Hàn:** `알고리즘적 구제 수단` (algorithm的 救濟 手段) — cơ chế thực tế cho phép cá nhân thực hiện các hành động khả thi để đảo ngược phán quyết tự động bất lợi.

---

## 12. proxy discrimination /ˈprɑːksi dɪˌskrɪməˈneɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ gây lo ngại đạo đức hoặc tân ngữ sau `perpetuate`, `detect`, `eliminate`.

**Core meaning — English:** An indirect form of algorithmic bias wherein a model learns to discriminate against protected groups by relying on seemingly neutral features (such as postal codes or consumer habits) that strongly correlate with protected characteristics.

**Core meaning & mental image — Tiếng Việt:** Phân biệt đối xử qua biến đại diện; thiên vị gián tiếp bằng biến ngụy trang. Hãy hình dung một giám khảo chấm thi tuy bị bịt mắt không nhìn thấy tên hay giới tính thí sinh, nhưng lại ngầm dựa vào loại bút mực và mùi nước hoa vương trên bài thi để thiên vị học sinh con nhà giàu có thói quen dùng hàng hiệu đắt tiền.

**Grammar & collocations:** `eliminate proxy discrimination` — loại bỏ phân biệt đối xử qua biến đại diện; `inadvertently learn proxy discrimination` — vô tình học phải sự phân biệt qua biến đại diện; `audit training features for proxy discrimination` — kiểm toán các biến huấn luyện để tìm hiện tượng phân biệt đại diện.

**Register & nuance:** Cạm bẫy nguy hiểm nhất trong khoa học dữ liệu đạo đức. Ngay cả khi các nhà phát triển đã xóa sạch các cột dữ liệu nhạy cảm (*blinded data*), mô hình vẫn tự động chắp vá các mối tương quan ẩn từ lịch sử duyệt web hoặc trường học cũ để tái hiện sự phân biệt đối xử.

**Examples:** `Although the insurance model omitted race, the algorithm engaged in proxy discrimination by using historical neighborhood repair costs, which tightly mirrored historic segregation boundaries.` → Mặc dù mô hình bảo hiểm đã lược bỏ biến chủng tộc, thuật toán vẫn tham gia vào sự phân biệt đối xử qua biến đại diện bằng cách sử dụng chi phí sửa chữa khu dân cư lịch sử, vốn phản chiếu chính xác các ranh giới phân biệt chủng tộc trong quá khứ.

**Liên kết tiếng Hàn:** `대리 변수 차별` (代理 變數 差別) — sự phân biệt đối xử phát sinh gián tiếp khi mô hình khai thác các biến số trung lập có tương quan cao với đặc tính nhạy cảm.

---

## 13. temporal concept drift /ˈtɛmpərəl ˈkɑːnsɛpt drɪft/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ làm xói mòn độ chính xác hoặc tân ngữ sau `detect`, `adapt to`, `mitigate`.

**Core meaning — English:** The gradual or abrupt shift over time in the underlying statistical relationship between input features and target labels, rendering historical predictive assumptions invalid even when input distributions appear unchanged.

**Core meaning & mental image — Tiếng Việt:** Sự trôi dạt khái niệm theo thời gian; biến đổi bản chất quy luật dự báo. Hãy hình dung một mô hình phát hiện gian lận ngân hàng: trước đây, việc mua sắm đồ gia dụng vào lúc 3 giờ sáng luôn là dấu hiệu kẻ trộm dùng thẻ bị đánh cắp; nhưng sau đại dịch, hàng triệu người làm việc ca đêm và mua hàng trực tuyến lúc rạng sáng, khiến hành vi này trở thành thói quen mua sắm bình thường.

**Grammar & collocations:** `suffer from temporal concept drift` — chịu sự trôi dạt khái niệm theo thời gian; `continuous monitoring for temporal concept drift` — giám sát liên tục sự trôi dạt khái niệm theo thời gian; `retrain models upon detecting temporal concept drift` — tái huấn luyện mô hình khi phát hiện sự trôi dạt khái niệm.

**Register & nuance:** Phân biệt rõ với *covariate shift*: trong covariate shift chỉ có phân phối đầu vào P(X) thay đổi; còn trong temporal concept drift, chính mối quan hệ xác suất có điều kiện giữa biến đầu vào và nhãn mục tiêu P(Y|X) đã bị biến đổi hoàn toàn.

**Examples:** `Macroeconomic inflation triggered acute temporal concept drift in the consumer spending model, as past correlations between wage growth and luxury expenditures completely decoupled.` → Lạm phát kinh tế vĩ mô đã kích hoạt sự trôi dạt khái niệm theo thời gian gay gắt trong mô hình chi tiêu tiêu dùng, khi các tương quan trong quá khứ giữa tăng trưởng tiền lương và chi tiêu xa xỉ hoàn toàn bị phá vỡ.

**Liên kết tiếng Hàn:** `시간 경과에 따른 개념 표류` (時間 經過 槪念 漂流) — hiện tượng quy luật dự báo và mối quan hệ giữa biến đầu vào với nhãn mục tiêu bị thay đổi theo thời gian.

---

## 14. covariate shift /koʊˈværiət ʃɪft/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ làm suy giảm năng lực khái quát hóa hoặc tân ngữ sau `correct for`, `encounter`.

**Core meaning — English:** A scenario in machine learning where the marginal probability distribution of input features changes between training and production environments, while the conditional probability distribution of the target given the features remains constant.

**Core meaning & mental image — Tiếng Việt:** Độ dịch chuyển đồng biến; trôi lệch phân phối biến đầu vào. Hãy hình dung bạn huấn luyện một thuật toán lái xe tự động chỉ bằng các video quay trên đường phố California ngập tràn ánh nắng chói chang: khi mang chiếc xe sang chạy giữa trời tuyết rơi trắng xóa và sương mù dày đặc ở Canada, bản chất vật lý của chiếc xe không đổi nhưng hình ảnh đầu vào đã bị dịch chuyển hoàn toàn.

**Grammar & collocations:** `suffer from severe covariate shift` — chịu độ dịch chuyển đồng biến nghiêm trọng; `importance weighting to correct covariate shift` — đánh trọng số tầm quan trọng để hiệu chỉnh độ dịch chuyển đồng biến; `detect covariate shift across domains` — phát hiện độ dịch chuyển đồng biến xuyên suốt các miền dữ liệu.

**Register & nuance:** Hiện tượng rất phổ biến khi chuyển từ môi trường thử nghiệm sang môi trường thực tế (domain adaptation). Mặc dù bản chất bài toán P(Y|X) không đổi, nhưng vì dữ liệu thực tế rơi vào những vùng không gian mà mô hình chưa từng thấy trong tập huấn luyện, tỷ lệ lỗi sẽ tăng vọt.

**Examples:** `Deploying the face-recognition model from daylight cameras to nighttime infrared feeds induced severe covariate shift, precipitating an immediate twenty percent drop in verification accuracy.` → Việc triển khai mô hình nhận diện khuôn mặt từ camera ban ngày sang nguồn dữ liệu hồng ngoại ban đêm đã gây ra độ dịch chuyển đồng biến nghiêm trọng, dẫn đến độ chính xác xác thực sụt giảm ngay lập tức hai mươi phần trăm.

**Liên kết tiếng Hàn:** `공변량 변화` / `공변량 시프트` (共變量 shift) — sự biến đổi phân phối thống kê của các đặc trưng đầu vào giữa tập huấn luyện và môi trường triển khai thực tế.

---

## 15. prior probability shift /ˈpraɪər ˌprɑːbəˈbɪləti ʃɪft/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ làm lệch dự báo nhãn hoặc tân ngữ sau `adjust for`, `suffer from`.

**Core meaning — English:** A form of dataset distribution change where the unconditional distribution of the target labels changes over time, while the conditional probability distribution of features given each class remains unchanged.

**Core meaning & mental image — Tiếng Việt:** Độ dịch chuyển xác suất tiên nghiệm; biến động tỷ lệ phân bổ nhãn mục tiêu. Hãy hình dung một phòng khám bệnh cảm cúm: vào mùa hè, tỷ lệ bệnh nhân mắc cúm chỉ chiếm 2%; nhưng khi mùa đông ập đến với đợt dịch bùng phát, tỷ lệ người mắc cúm vọt lên 60% tổng số người đến khám, cho dù các triệu chứng ho, sốt và nghẹt mũi của từng ca bệnh không hề thay đổi.

**Grammar & collocations:** `account for prior probability shift` — tính toán bù trừ độ dịch chuyển xác suất tiên nghiệm; `prior probability shift during an epidemic` — sự dịch chuyển xác suất tiên nghiệm trong thời kỳ dịch bệnh; `reweight loss functions for prior probability shift` — đánh lại trọng số hàm mất mát để xử lý sự dịch chuyển xác suất tiên nghiệm.

**Register & nuance:** Thường được gọi là *label shift*. Khác với concept drift hay covariate shift, ở đây xác suất P(Y) bị thay đổi mạnh mẽ, đòi hỏi các kỹ sư phải hiệu chỉnh ngưỡng phân loại (*Bayesian prior update*) để tránh việc mô hình dự đoán quá thiên vị về lớp nhãn đa số cũ.

**Examples:** `During the sudden flu epidemic, doctors observed a dramatic prior probability shift, forcing clinicians to re-calibrate automated diagnostic tools to reflect the higher baseline infection prevalence.` → Trong đợt dịch cúm bùng phát bất ngờ, các bác sĩ đã quan sát thấy một độ dịch chuyển xác suất tiên nghiệm mạnh mẽ, buộc các chuyên gia lâm sàng phải hiệu chuẩn lại các công cụ chẩn đoán tự động để phản ánh tỷ lệ nhiễm bệnh nền cao hơn.

**Liên kết tiếng Hàn:** `사전 확률 변화` (事前 確率 變化) — sự thay đổi phân phối xác suất nền của các nhãn mục tiêu theo thời gian.

---

## 16. model telemetry /ˈmɑːdl təˈlɛmətri/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hỗ trợ cảnh báo thời gian thực hoặc tân ngữ sau `stream`, `analyze`, `ingest`.

**Core meaning — English:** The real-time automated streaming, collection, and analytical measurement of production machine learning performance metrics, operational latencies, inference payloads, and prediction confidence scores.

**Core meaning & mental image — Tiếng Việt:** Dữ liệu đo từ xa của mô hình; hệ thống viễn trắc theo dõi mô hình. Hãy hình dung các cảm biến điện tử trên một con tàu vũ trụ liên tục gửi tín hiệu về trung tâm điều khiển mặt đất của NASA: các kỹ sư ngồi trước màn hình theo dõi từng nhịp rung của động cơ, nhiệt độ buồng đốt và tốc độ bay để phát hiện bất kỳ dấu hiệu bất thường nào trước khi sự cố xảy ra.

**Grammar & collocations:** `stream real-time model telemetry` — truyền phát dữ liệu đo từ xa của mô hình theo thời gian thực; `model telemetry pipeline` — đường ống thu thập dữ liệu đo từ xa của mô hình; `alert on anomalies in model telemetry` — cảnh báo các dị thường trong dữ liệu viễn trắc mô hình.

**Register & nuance:** Trọng tâm thực hành MLOps hiện đại. Thiếu viễn trắc sản xuất, mô hình AI sẽ hoạt động như một "hộp đen mù", khiến các kỹ sư không thể biết khi nào mô hình bắt đầu đưa ra những dự đoán sai lầm hàng loạt.

**Examples:** `The MLOps platform captures live model telemetry from edge gateways, alerting the engineering on-call rotation the moment prediction confidence distributions begin to skew.` → Nền tảng MLOps thu thập dữ liệu đo từ xa của mô hình trực tiếp từ các cổng biên, phát cảnh báo tới ca trực kỹ thuật ngay giây phút phân phối độ tin cậy dự báo bắt đầu bị lệch.

**Liên kết tiếng Hàn:** `모델 원격 측정` (model 遠格 測定) — hệ thống thu thập và phân tích dữ liệu vận hành thời gian thực của mô hình AI trong sản xuất.

---

## 17. differential privacy bounds /ˌdɪfəˈrɛnʃəl ˈpraɪvəsi baʊndz/

**Loại từ & vị trí trong câu:** `plural noun phrase`. Thường làm tân ngữ sau `enforce`, `guarantee`, `verify`, hoặc làm chủ ngữ giới hạn rò rỉ thông tin.

**Core meaning — English:** Rigorous mathematical theoretical limits (traditionally quantified by parameters epsilon and delta) that strictly bound the probability that an observer can deduce an individual's private records from aggregate machine learning outputs.

**Core meaning & mental image — Tiếng Việt:** Ranh giới vi phân bảo mật; giới hạn rò rỉ dữ liệu riêng tư. Hãy hình dung một chiếc két sắt kính mờ: dù kẻ quan sát bên ngoài có dùng kính lúp hay máy đo quang phổ tối tân đến đâu, ranh giới vi phân bảo mật như một tấm màng lọc toán học bảo đảm rằng xác suất kẻ đó phân biệt được trong két có hay không có hồ sơ bệnh án của bạn không bao giờ vượt qua một con số vô cùng nhỏ.

**Grammar & collocations:** `establish differential privacy bounds` — thiết lập các ranh giới vi phân bảo mật; `provable differential privacy bounds` — các ranh giới vi phân bảo mật có thể chứng minh được bằng toán học; `tight differential privacy bounds` — các ranh giới vi phân bảo mật chặt chẽ.

**Register & nuance:** Chuẩn mực bảo vệ quyền riêng tư toán học khắt khe nhất thế giới hiện nay. Tham số $\epsilon$ (epsilon) càng nhỏ thì mức độ bảo vệ càng cao, bảo đảm dữ liệu của từng cá nhân không thể bị tái nhận dạng (*re-identification attack*).

**Examples:** `To allow commercial researchers access to medical telemetry without violating statutory health codes, the hospital enforced strict differential privacy bounds across all SQL analytical queries.` → Để cho phép các nhà nghiên cứu thương mại truy cập dữ liệu đo từ xa y tế mà không vi phạm các quy chuẩn y tế theo luật định, bệnh viện đã thực thi các ranh giới vi phân bảo mật nghiêm ngặt xuyên suốt mọi truy vấn phân tích SQL.

**Liên kết tiếng Hàn:** `차분 프라이버시 경계` (差分 privacy 境界) — giới hạn toán học chặt chẽ bảo đảm không làm lộ dữ liệu cá nhân từ các kết quả phân tích tổng hợp.

---

## 18. Laplace noise mechanism /ləˈplɑːs nɔɪz ˈmɛkəˌnɪzəm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ che chắn giá trị nhạy cảm hoặc tân ngữ sau `calibrate`, `apply`, `inject`.

**Core meaning — English:** A fundamental differential privacy perturbation algorithm that achieves privacy guarantees by adding random noise drawn from a zero-mean symmetric Laplace distribution, scaled proportionally to the global query sensitivity.

**Core meaning & mental image — Tiếng Việt:** Cơ chế nhiễu Laplace; thuật toán bơm nhiễu phân phối Laplace. Hãy hình dung bạn muốn công bố mức lương trung bình của một công ty nhỏ nhưng không muốn làm lộ lương của sếp: chiếc máy tính tính ra con số chính xác rồi tung một viên xúc xắc có phân phối hình tháp nhọn Laplace để cộng thêm hoặc trừ bớt đi vài trăm đô-la ngẫu nhiên, làm mờ đi con số thực sự mà vẫn giữ được giá trị thống kê hữu ích.

**Grammar & collocations:** `inject noise via the Laplace noise mechanism` — bơm nhiễu thông qua cơ chế nhiễu Laplace; `calibrate the Laplace noise mechanism to query sensitivity` — hiệu chuẩn cơ chế nhiễu Laplace theo độ nhạy của truy vấn; `theoretical guarantees of the Laplace noise mechanism` — các cam kết lý thuyết của cơ chế nhiễu Laplace.

**Register & nuance:** Phương pháp kinh điển của Cynthia Dwork trong vi phân bảo mật. Thường áp dụng cho các truy vấn trả về kết quả là một số thực duy nhất (như hàm đếm hoặc hàm tính trung bình).

**Examples:** `The statistical agency calibrated the Laplace noise mechanism according to the query's global sensitivity, guaranteeing that released demographic counts preserved privacy without sacrificing research utility.` → Cơ quan thống kê đã hiệu chuẩn cơ chế nhiễu Laplace dựa theo độ nhạy toàn cục của truy vấn, bảo đảm rằng số liệu nhân khẩu học được công bố vẫn giữ được quyền riêng tư mà không làm mất đi tính hữu ích nghiên cứu.

**Liên kết tiếng Hàn:** `라플라스 노이즈 메커니즘` (Laplace noise mechanism) — thuật toán cộng nhiễu phân phối Laplace để bảo vệ tính riêng tư vi phân cho dữ liệu thống kê.

---

## 19. data degradation /ˈdeɪtə ˌdɛɡrəˈdeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ làm hỏng đường ống học máy hoặc tân ngữ sau `suffer from`, `prevent`, `monitor`.

**Core meaning — English:** The gradual deterioration in the quality, consistency, completeness, or integrity of data streams due to sensor malfunctions, pipeline software bugs, schema mismatches, or network corruptions over time.

**Core meaning & mental image — Tiếng Việt:** Sự thoái hóa chất lượng dữ liệu; suy giảm độ tin cậy của dữ liệu. Hãy hình dung một đường ống dẫn nước tinh khiết vào thành phố: qua nhiều năm tháng, các vết rỉ sét và rêu phong bám vào thành ống, khiến dòng nước trong vắt ban đầu dần chuyển sang màu đục ngầu và lẫn đầy cặn bẩn nếu không được súc rửa thường xuyên.

**Grammar & collocations:** `suffer from gradual data degradation` — chịu sự thoái hóa chất lượng dữ liệu dần dần; `early detection of data degradation` — phát hiện sớm sự suy giảm chất lượng dữ liệu; `mitigate pipeline data degradation` — giảm thiểu sự thoái hóa dữ liệu trên đường ống dẫn.

**Register & nuance:** Nguyên nhân số một khiến các mô hình AI trong sản xuất bị sụp đổ bất ngờ. Thường xuất phát từ tầng kỹ nghệ dữ liệu (data engineering) chứ không phải do bản thân thuật toán máy học.

**Examples:** `Undetected format conversions in the customer onboarding portal caused severe data degradation, corrupting thirty percent of mobile phone entries before reaching the training pipeline.` → Các bước chuyển đổi định dạng không được phát hiện trên cổng tiếp nhận khách hàng đã gây ra sự thoái hóa chất lượng dữ liệu nghiêm trọng, làm hỏng ba mươi phần trăm các mục nhập số điện thoại trước khi tới được đường ống huấn luyện.

**Liên kết tiếng Hàn:** `데이터 품질 저하` (data 品質 低下) — sự suy giảm dần về tính nhất quán, độ chính xác và độ toàn vẹn của luồng dữ liệu theo thời gian.

---

## 20. prediction latency /prɪˈdɪkʃən ˈleɪtənsi/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ quyết định trải nghiệm người dùng hoặc tân ngữ sau `minimize`, `benchmark`, `profile`.

**Core meaning — English:** The total elapsed time taken by a machine learning model to receive an input payload, perform mathematical feature transformations and forward tensor operations, and return a finalized inference output.

**Core meaning & mental image — Tiếng Việt:** Độ trễ dự báo; thời gian phản hồi suy luận mô hình. Hãy hình dung một chiếc xe hơi tự hành nhìn thấy một người băng qua đường: độ trễ dự báo là khoảng thời gian tính bằng mili-giây từ khi camera thu lại hình ảnh người đi bộ đến khi bộ não máy tính tính toán xong lệnh phanh gấp gửi tới các bánh xe.

**Grammar & collocations:** `minimize prediction latency` — giảm thiểu độ trễ dự báo; `sub-millisecond prediction latency` — độ trễ dự báo dưới một mili-giây; `benchmark prediction latency under load` — đo kiểm độ trễ dự báo dưới tải cao.

**Register & nuance:** Thước đo sống còn trong các hệ thống thời gian thực (real-time trading, autonomous driving, live ad auctions). Khác với *throughput* (số lượng dự đoán xử lý mỗi giây), latency đo thời gian phản hồi của từng yêu cầu đơn lẻ.

**Examples:** `By quantizing model weights from 32-bit floating-point to 8-bit integers, the team compressed prediction latency from eighty milliseconds down to twelve.` → Bằng cách lượng tử hóa trọng số mô hình từ số thực 32-bit sang số nguyên 8-bit, nhóm kỹ thuật đã nén độ trễ dự báo từ tám mươi mili-giây xuống chỉ còn mười hai mili-giây.

**Liên kết tiếng Hàn:** `예측 지연 시간` (豫測 遲延 時間) — tổng thời gian từ khi mô hình tiếp nhận dữ liệu đầu vào đến khi trả về kết quả suy luận.

---

## 21. model decay /ˈmɑːdl dɪˈkeɪ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ làm giảm doanh thu hoặc tân ngữ sau `combat`, `track`, `anticipate`.

**Core meaning — English:** The inevitable progressive decline in the real-world predictive accuracy, calibration, and business value of a production model caused by evolving user behaviors, macroeconomic shifts, and data drift over time.

**Core meaning & mental image — Tiếng Việt:** Sự thoái hóa của mô hình; hiện tượng hao mòn độ chính xác theo thời gian. Hãy hình dung một chiếc đồng hồ quả lắc lên dây cót hoàn hảo: nếu bạn không định kỳ lên lại dây cót và nhỏ dầu bảo dưỡng, sau vài tháng chiếc đồng hồ sẽ chạy chậm dần từng phút, rồi cuối cùng chỉ giờ sai lệch hoàn toàn so với đồng hồ thiên văn.

**Grammar & collocations:** `combat model decay via continuous learning` — chống lại sự thoái hóa mô hình thông qua học liên tục; `rate of model decay` — tốc độ thoái hóa của mô hình; `prevent sudden model decay` — ngăn ngừa sự thoái hóa đột ngột của mô hình.

**Register & nuance:** Còn gọi là *model drift* hoặc *model rot*. Nhấn mạnh tính chất tất yếu: không có mô hình học máy nào có thể "huấn luyện một lần rồi dùng mãi mãi" mà luôn đòi hỏi quy trình tái huấn luyện và giám sát liên tục.

**Examples:** `Due to rapid shifts in consumer fashion preferences, the recommendation engine suffered acute model decay within six months, cutting click-through rates by a third.` → Do sự thay đổi nhanh chóng trong sở thích thời trang của người tiêu dùng, công cụ gợi ý đã phải chịu sự thoái hóa của mô hình sâu sắc chỉ trong vòng sáu tháng, làm giảm một phần ba tỷ lệ nhấp chuột.

**Liên kết tiếng Hàn:** `모델 성능 저하` / `모델 감쇠` (model 減衰) — sự suy giảm dần độ chính xác và tính hữu dụng của mô hình trong môi trường sản xuất theo thời gian.

---

## 22. adversarial sample injection /ˌædvərˈsɛriəl ˈsæmpl ɪnˈdʒɛkʃən/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ làm sụp đổ hệ thống an ninh hoặc tân ngữ sau `detect`, `thwart`, `simulate`.

**Core meaning — English:** A targeted security attack wherein malicious actors deliberately introduce imperceptibly perturbed data points into model inference or training pipelines to induce confident misclassifications or corrupt learned parameters.

**Core meaning & mental image — Tiếng Việt:** Sự bơm mẫu tấn công đối kháng; cài cắm dữ liệu độc hại. Hãy hình dung một tên gián điệp mặc chiếc áo có in họa tiết hoa văn đặc biệt đánh lừa camera nhận diện khuôn mặt AI: mắt người nhìn vào chỉ thấy một chiếc áo hoa sặc sỡ bình thường, nhưng các cảm biến thị giác của AI lại bị hoa mắt và nhận nhầm tên gián điệp thành vị tổng thống của đất nước.

**Grammar & collocations:** `thwart adversarial sample injection` — ngăn chặn việc bơm mẫu tấn công đối kháng; `detect adversarial sample injection in network traffic` — phát hiện việc cài cắm mẫu đối kháng trong lưu lượng mạng; `adversarial sample injection vulnerability` — lỗ hổng trước các cuộc tấn công cài mẫu đối kháng.

**Register & nuance:** Trọng tâm bảo mật AI (AI Security / Robustness). Khác với dữ liệu nhiễu ngẫu nhiên thông thường (*random noise*), các mẫu đối kháng được tối ưu hóa toán học bằng cách lần theo độ dốc nghịch đảo (*gradient ascent*) để khai thác chính xác điểm mù của mô hình.

**Examples:** `Cybersecurity analysts confirmed that fraudulent transactions bypassed the perimeter filter via adversarial sample injection that carefully disguised illicit wire parameters as routine supplier invoices.` → Các nhà phân tích an ninh mạng xác nhận rằng các giao dịch gian lận đã vượt qua bộ lọc phòng thủ thông qua sự bơm mẫu tấn công đối kháng vốn ngụy trang khéo léo các tham số chuyển tiền bất hợp pháp thành hóa đơn nhà cung cấp thông thường.

**Liên kết tiếng Hàn:** `적대적 샘플 주입` (敵對的 sample 注入) — hành vi cố tình đưa dữ liệu bị chỉnh sửa tinh vi vào mô hình nhằm gây ra phán đoán sai lầm nghiêm trọng.

---

## 23. out-of-distribution detection /aʊt əv ˌdɪstrəˈbjuːʃən dɪˈtɛkʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường viết tắt là OOD detection, làm chủ ngữ bảo vệ tính an toàn hoặc tân ngữ sau `implement`, `benchmark`.

**Core meaning — English:** The capability of a machine learning system to reliably identify and flag input samples that originate from probability distributions fundamentally distinct from the distribution of its training dataset, triggering human fallback.

**Core meaning & mental image — Tiếng Việt:** Phát hiện dữ liệu lệch phân phối; nhận biết mẫu dữ liệu ngoài vùng hiểu biết. Hãy hình dung một bác sĩ đa khoa chuyên chữa bệnh cho người bỗng nhiên nhìn thấy một con mèo bước vào phòng khám: vị bác sĩ lập tức nhận ra đây là sinh vật nằm ngoài phạm vi chuyên môn y khoa người của mình và từ chối kê đơn, hướng dẫn chủ nhân mang con mèo tới trạm thú y.

**Grammar & collocations:** `implement robust out-of-distribution detection` — triển khai cơ chế phát hiện dữ liệu lệch phân phối vững chắc; `out-of-distribution detection score` — điểm số phát hiện mẫu ngoài phân phối; `benchmark out-of-distribution detection algorithms` — đo kiểm các thuật toán phát hiện dữ liệu ngoài vùng huấn luyện.

**Register & nuance:** Yếu tố bắt buộc trong các hệ thống tự hành quan trọng tính mạng (*mission-critical safety*). Mô hình tốt không chỉ là mô hình dự đoán chính xác, mà phải biết nói "Tôi không biết" khi gặp những dữ liệu hoàn toàn xa lạ thay vì tự tin đưa ra câu trả lời sai chết người.

**Examples:** `The self-driving vision system uses out-of-distribution detection to identify unusual road debris, handing over steering control to the human driver whenever incoming imagery departs from trained distributions.` → Hệ thống thị giác tự lái sử dụng tính năng phát hiện dữ liệu lệch phân phối để nhận diện các mảnh vỡ bất thường trên đường, bàn giao quyền kiểm soát tay lái cho tài xế con người bất cứ khi nào hình ảnh thu vào lệch khỏi các phân phối đã huấn luyện.

**Liên kết tiếng Hàn:** `분포 외 데이터 감지` (分布 外 data 感知) — khả năng nhận diện các dữ liệu đầu vào xa lạ chưa từng xuất hiện trong tập huấn luyện để tránh phán đoán sai lầm.

---

## 24. shadow deployment /ˈʃædoʊ dɪˈplɔɪmənt/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm tân ngữ sau `conduct`, `initiate`, `evaluate under`, hoặc làm chủ ngữ kiểm thử an toàn.

**Core meaning — English:** A low-risk deployment strategy where a newly trained machine learning candidate model receives and scores real-world production traffic in parallel with the incumbent model, but its predictions are logged silently without impacting live user decisions.

**Core meaning & mental image — Tiếng Việt:** Triển khai bóng tối; chạy thử nghiệm song song ngầm định. Hãy hình dung một thực tập sinh phẫu thuật đứng sau lưng một bác sĩ trưởng khoa: mỗi khi bác sĩ trưởng khoa đưa ra một quyết định điều trị cho bệnh nhân, thực tập sinh cũng âm thầm ghi vào cuốn sổ tay phương án của mình để sau ca mổ đối chiếu xem phương án của mình có chính xác và an toàn không mà không hề gây nguy hiểm cho bệnh nhân.

**Grammar & collocations:** `run a model in shadow deployment` — vận hành mô hình theo hình thức triển khai bóng tối; `shadow deployment architecture` — kiến trúc triển khai bóng tối; `validate model stability via shadow deployment` — xác thực độ ổn định của mô hình thông qua triển khai bóng tối.

**Register & nuance:** An toàn hơn nhiều so với thử nghiệm A/B (*A/B testing*). Trong A/B testing, một bộ phận người dùng thật sẽ phải gánh chịu rủi ro nếu mô hình mới bị lỗi; trong shadow deployment, người dùng hoàn toàn không bị ảnh hưởng vì các kết quả mới chỉ được ghi lại để phân tích nội bộ.

**Examples:** `Before replacing the core underwriting engine, engineers conducted a three-month shadow deployment, confirming that the new gradient-boosted trees reduced false rejections without increasing default rates.` → Trước khi thay thế công cụ thẩm định cốt lõi, các kỹ sư đã tiến hành triển khai bóng tối trong ba tháng, xác nhận rằng mô hình cây tăng cường độ dốc mới đã giảm các vụ từ chối oan mà không làm tăng tỷ lệ vỡ nợ.

**Liên kết tiếng Hàn:** `섀도 배포` / `그림자 배포` (shadow 配布) — phương thức triển khai mô hình song song ngầm để thẩm định trên dữ liệu thực tế mà không ảnh hưởng trực tiếp đến người dùng.

---

## 25. model lineage /ˈmɑːdl ˈlɪniɪdʒ/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ bảo đảm tính truy nguyên hoặc tân ngữ sau `track`, `trace`, `document`.

**Core meaning — English:** The complete historical record and dependency provenance of a machine learning asset, encompassing exact training datasets, preprocessing pipelines, hyperparameter configurations, source code revisions, and evaluation artifacts.

**Core meaning & mental image — Tiếng Việt:** Phả hệ mô hình; gia phả nguồn gốc và lịch sử huấn luyện mô hình. Hãy hình dung một cuốn gia phả dòng họ quý tộc ghi chép tỉ mỉ qua mười đời: mỗi thế hệ đều ghi rõ ngày sinh, cha mẹ, hôn nhân và nghề nghiệp; phả hệ mô hình cũng ghi chép chính xác mô hình sinh ra từ tập dữ liệu nào, ai huấn luyện, dùng mã nguồn commit nào và kết quả thi đấu ra sao.

**Grammar & collocations:** `trace complete model lineage` — truy vết toàn bộ phả hệ nguồn gốc của mô hình; `model lineage metadata` — siêu dữ liệu phả hệ mô hình; `guarantee reproducibility through model lineage` — bảo đảm khả năng tái lập thông qua phả hệ mô hình.

**Register & nuance:** Trọng tâm tuân thủ quản trị AI doanh nghiệp. Giúp các tổ chức trả lời rành mạch câu hỏi: "Mô hình nào đang chạy trên máy chủ này, ai huấn luyện nó, dựa trên dữ liệu bản quyền nào và có an toàn không?".

**Examples:** `Whenever an unexpected prediction anomaly is reported by customer service, engineers trace the model lineage back to the precise Git commit and data warehouse partition that created the artifact.` → Bất cứ khi nào bộ phận chăm sóc khách hàng báo cáo một dị thường dự báo bất ngờ, các kỹ sư sẽ truy vết phả hệ mô hình ngược về chính xác mã cam kết Git và phân vùng kho dữ liệu đã tạo ra phiên bản mô hình đó.

**Liên kết tiếng Hàn:** `모델 계보` / `모델 이력 추적` (model 系譜 / 履歷 追跡) — lịch sử ghi nhận nguồn gốc xuất xứ, dữ liệu huấn luyện và phiên bản mã nguồn của một mô hình học máy.

---

## Review in context (Part 1: Algorithmic Fairness, Explainability, and Model Auditing)

When deploying automated decision-making engines in regulated sectors like mortgage lending and public employment, organizations must reconcile predictive performance with constitutional civil rights. In many jurisdictions, statutory guidelines mandate strict **demographic parity**, demanding that algorithmic approval rates remain consistent across all protected social groups. However, because historical socio-economic inequities often distort baseline qualification rates, technical teams frequently calibrate classification thresholds to achieve **equalized odds**, verifying that both false-positive and true-positive error rates remain balanced across diverse demographics. Unchecked models often produce severe **disparate impact**, inadvertently penalizing minority communities despite omitting explicit demographic labels. To prevent such covert bias, compliance officers inspect feature sets to root out **proxy discrimination**, ensuring that innocuous variables like postal codes or mobile phone models do not serve as covert surrogates for race or socioeconomic status. To demystify complex neural architectures, data teams extract **Shapley additive explanations**, utilizing cooperative game theory to quantify the precise mathematical contribution of each variable to individual predictions. This fine-grained **feature attribution** enables customer-facing agents to justify difficult rejections with absolute quantitative transparency. In high-dimensional computer vision pipelines, clinicians inspect an overlaid **saliency map** to verify that diagnostic networks focus on authentic pathological lesions rather than irrelevant background imaging artifacts. When dealing with opaque tree ensembles, developers fit a lightweight **surrogate interpretability model**, enabling rapid black-box approximation. At the macro level, data scientists measure global predictor weights through **permutation feature importance**, identifying the most critical variables across validation sets. For affected loan applicants, institutions generate an actionable **counterfactual explanation**, outlining the minimum financial adjustments required to achieve an approval. Beyond mere diagnostic metrics, regulators demand meaningful **algorithmic recourse**, empowering citizens to overturn automated errors through verifiable real-world actions. Ultimately, these rigorous interpretability and fairness frameworks establish comprehensive **model auditability**, ensuring algorithmic pipelines remain fully accountable to judicial oversight.

**Bản dịch tiếng Việt:**

Khi triển khai các công cụ ra quyết định tự động trong các lĩnh vực chịu sự quản lý chặt chẽ như cho vay thế chấp và tuyển dụng công, các tổ chức phải dung hòa giữa hiệu năng dự báo với các quyền công dân theo hiến pháp. Tại nhiều khu vực pháp lý, các hướng dẫn theo luật định bắt buộc thực thi sự bình đẳng nhân khẩu học (**demographic parity**) nghiêm ngặt, đòi hỏi tỷ lệ phê duyệt thuật toán phải duy trì tính nhất quán trên mọi nhóm xã hội được bảo vệ. Tuy nhiên, vì những bất bình đẳng kinh tế - xã hội trong lịch sử thường làm sai lệch tỷ lệ đủ điều kiện nền tảng, các nhóm kỹ thuật thường hiệu chuẩn các ngưỡng phân loại để đạt được tỷ lệ cược cân bằng (**equalized odds**), xác minh rằng cả tỷ lệ lỗi dương tính giả lẫn dương tính thật đều được cân bằng xuyên suốt các nhóm nhân khẩu học đa dạng. Các mô hình không được kiểm soát thường tạo ra tác động phân biệt gián tiếp (**disparate impact**) nghiêm trọng, vô tình trừng phạt các cộng đồng thiểu số cho dù đã lược bỏ các nhãn nhân khẩu học rõ ràng. Để ngăn chặn sự thiên vị ngầm như vậy, các cán bộ tuân thủ thanh tra các tập biến số để loại bỏ sự phân biệt đối xử qua biến đại diện (**proxy discrimination**), bảo đảm rằng các biến số vô hại như mã bưu điện hoặc mẫu điện thoại di động không đóng vai trò làm các biến ngụy trang che đậy chủng tộc hoặc tình trạng kinh tế xã hội. Để giải mã các kiến trúc nơ-ron phức tạp, các nhóm dữ liệu trích xuất các giá trị giải thích phụ gia Shapley (**Shapley additive explanations**), tận dụng lý thuyết trò chơi hợp tác để định lượng mức đóng góp toán học chính xác của từng biến số vào các dự đoán cá nhân. Sự quy gán tầm quan trọng của đặc trưng (**feature attribution**) chi tiết này cho phép các nhân viên giao dịch khách hàng giải trình những quyết định từ chối khó khăn với sự minh bạch định lượng tuyệt đối. Trong các đường ống thị giác máy tính đa chiều, các bác sĩ lâm sàng kiểm tra một bản đồ độ nổi bật (**saliency map**) được xếp chồng để xác minh rằng các mạng chẩn đoán tập trung vào các tổn thương bệnh lý đích thực thay vì các khiếm khuyết hình ảnh nền không liên quan. Khi làm việc với các cụm mô hình cây mờ đục, các nhà phát triển khớp một mô hình đại diện giải thích được (**surrogate interpretability model**) gọn nhẹ, cho phép xấp xỉ nhanh chóng hành vi hộp đen. Ở cấp độ vĩ mô, các nhà khoa học dữ liệu đo lường trọng số của các biến dự báo tổng thể thông qua tầm quan trọng của đặc trưng theo phương pháp hoán vị (**permutation feature importance**), xác định những biến số sống còn nhất trên các tập kiểm thực. Đối với những người nộp đơn xin vay bị ảnh hưởng, các định chế tạo ra một lời giải thích phản thực tế (**counterfactual explanation**) có thể hành động được, vạch ra các điều chỉnh tài chính tối thiểu cần thiết để đạt được sự phê duyệt. Vượt lên trên những chỉ số chẩn đoán đơn thuần, các nhà điều hành đòi hỏi quyền cứu hồi thuật toán (**algorithmic recourse**) có ý nghĩa thực tế, trao quyền cho công dân lật ngược các sai sót tự động thông qua các hành động khả thi trong đời thực. Rút cuộc, những khuôn khổ giải thích và công bằng khắt khe này thiết lập một khả năng kiểm toán của mô hình (**model auditability**) toàn diện, bảo đảm các đường ống thuật toán luôn hoàn toàn chịu trách nhiệm trước sự giám sát của pháp luật.

---

## Review in context (Part 2: Production Telemetry, Data Drift, and Privacy Bounds)

Maintaining reliable machine learning systems in production requires continuous operational vigilance far beyond offline model training. Over prolonged operational lifecycles, evolving user habits and macro trends inevitably induce acute **temporal concept drift**, quietly invalidating historical correlations between features and targets. Concurrently, shifts in user demographics or geographical expansion introduce substantial **covariate shift**, where incoming feature spaces diverge sharply from the training corpus. In dynamic health crises, epidemiologists also encounter a dramatic **prior probability shift**, requiring Bayesian threshold re-weighting to adapt to surges in disease prevalence. Left unaddressed, these statistical divergences trigger pervasive **model decay**, steadily degrading predictive accuracy and business value. Upstream infrastructure bugs can also cause silent **data degradation**, corrupting feature pipelines through dropped telemetry packets or malformed schema conversions. To detect these operational hazards before they inflict financial losses, platforms stream live **model telemetry**, continuously logging latency metrics, drift indicators, and inference distribution changes. In mission-critical environments like robotic surgery or autonomous driving, engineers rigorously benchmark **prediction latency**, ensuring that forward passes complete within strict sub-millisecond windows. Safety frameworks also integrate real-time **out-of-distribution detection**, flagging novel edge-case scenarios and safely transferring operational control back to human supervisors. When deploying analytical APIs across multi-tenant environments, security teams defend pipelines against malicious **adversarial sample injection**, preventing engineered perturbations from deceiving fraud filters. To permit medical data sharing without violating privacy laws, researchers establish rigorous **differential privacy bounds**, mathematically guaranteeing that single patient records cannot be inferred from aggregate calculations. When fulfilling analytical aggregation queries, databases inject precisely calibrated noise via a randomized **Laplace noise mechanism**, masking outlier contributions without sacrificing statistical utility. Before releasing candidate algorithms into mission-critical production pipelines, engineers mandate an extended **shadow deployment**, validating model inference accuracy on mirrored live traffic without exposing end users to operational risks. Finally, every validated parameter checkpoint, dataset snapshot, and container digest is immutably documented within the platform's **model lineage**, establishing an unassailable audit trail for regulatory compliance.

**Bản dịch tiếng Việt:**

Việc duy trì các hệ thống học máy tin cậy trong môi trường sản xuất đòi hỏi sự cảnh giác vận hành liên tục vượt xa khỏi giai đoạn huấn luyện mô hình ngoại tuyến. Qua các vòng đời vận hành kéo dài, thói quen người dùng biến đổi và các xu hướng vĩ mô chắc chắn sẽ gây ra sự trôi dạt khái niệm theo thời gian (**temporal concept drift**) sâu sắc, âm thầm làm vô hiệu hóa các tương quan lịch sử giữa các biến số và nhãn mục tiêu. Đồng thời, những thay đổi trong nhân khẩu học người dùng hoặc việc mở rộng địa lý mang tới độ dịch chuyển đồng biến (**covariate shift**) đáng kể, nơi không gian đặc trưng thu vào bị phân kỳ rõ rệt so với tập huấn luyện ban đầu. Trong các cuộc khủng hoảng y tế biến động, các nhà dịch tễ học cũng gặp phải độ dịch chuyển xác suất tiên nghiệm (**prior probability shift**) mạnh mẽ, đòi hỏi việc đánh lại trọng số ngưỡng Bayes để thích ứng với các đợt bùng phát tỷ lệ nhiễm bệnh. Nếu không được xử lý, những phân kỳ thống kê này sẽ kích hoạt sự thoái hóa của mô hình (**model decay**) bao trùm, làm suy giảm đều đặn độ chính xác dự báo và giá trị kinh doanh. Các lỗi hạ tầng ở thượng nguồn cũng có thể gây ra sự thoái hóa chất lượng dữ liệu (**data degradation**) âm thầm, làm hỏng các đường ống đặc trưng thông qua việc rơi gói tin viễn trắc hoặc các bước chuyển đổi lược đồ dị dạng. Để phát hiện những mối nguy hiểm vận hành này trước khi chúng gây ra tổn thất tài chính, các nền tảng truyền phát dữ liệu đo từ xa của mô hình (**model telemetry**) trực tiếp, liên tục ghi nhật ký các chỉ số độ trễ, các dấu hiệu trôi dạt và các biến đổi phân phối suy luận. Trong các môi trường sống còn như phẫu thuật bằng robot hoặc lái xe tự hành, các kỹ sư đo kiểm độ trễ dự báo (**prediction latency**) một cách khắt khe, bảo đảm các bước truyền xuôi hoàn tất bên trong các cửa sổ dưới một mili-giây nghiêm ngặt. Các khuôn khổ an toàn cũng tích hợp tính năng phát hiện dữ liệu lệch phân phối (**out-of-distribution detection**) thời gian thực, gắn cờ các tình huống dị biệt mới lạ và bàn giao quyền kiểm soát vận hành an toàn trở lại cho người giám sát con người. Khi triển khai các API phân tích trên các môi trường đa người dùng, các đội ngũ bảo mật bảo vệ các đường ống trước sự bơm mẫu tấn công đối kháng (**adversarial sample injection**) hiểm độc, ngăn chặn các nhiễu loạn được thiết kế có chủ đích đánh lừa các bộ lọc gian lận. Để cho phép chia sẻ dữ liệu y tế mà không vi phạm luật riêng tư, các nhà nghiên cứu thiết lập các ranh giới vi phân bảo mật (**differential privacy bounds**) khắt khe, bảo đảm về mặt toán học rằng hồ sơ bệnh nhân đơn lẻ không thể bị suy luận ra từ các phép tính tổng hợp. Khi thực hiện các truy vấn tổng hợp phân tích, cơ sở dữ liệu bơm lượng nhiễu được hiệu chuẩn chính xác thông qua một cơ chế nhiễu Laplace (**Laplace noise mechanism**) ngẫu nhiên hóa, che giấu các đóng góp dị biệt mà không làm mất đi tính hữu ích thống kê. Trước khi phát hành các thuật toán ứng viên vào các đường ống sản xuất trọng yếu, các kỹ sư bắt buộc thực hiện một đợt triển khai bóng tối (**shadow deployment**) kéo dài, xác thực độ chính xác suy luận của mô hình trên lưu lượng thực tế được nhân bản mà không khiến người dùng cuối gặp phải các rủi ro vận hành. Cuối cùng, mọi điểm kiểm tra tham số đã được xác thực, ảnh chụp nhanh tập dữ liệu và bản tóm lược container đều được lập hồ sơ bất biến bên trong phả hệ mô hình (**model lineage**) của nền tảng, thiết lập một đường vết kiểm toán vững chắc phục vụ việc tuân thủ quy định quản lý.
