# C1 Vocabulary 03 — Causal directed acyclic graphs (DAGs), d-separation criteria, and do-calculus backdoor adjustment

## 1. nonparametric directed acyclic graph
- Pronunciation: /ˈkɔːzəl daɪˈrektɪd eɪˈsɪklɪk ɡræf/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ, bổ ngữ)
- Core meaning — English: A probabilistic graphical model representing causal relationships among variables using directed edges without directed cycles.
- Core meaning & mental image — Tiếng Việt: Đồ thị chu trình có hướng nhân quả (DAG) — Hình dung một sơ đồ các nút (biến) nối với nhau bằng mũi tên một chiều biểu diễn quan hệ nguyên nhân-kết quả mà không có vòng lặp khép kín.
- Grammar & collocations:
  - construct a nonparametric directed acyclic graph (xây dựng đồ thị chu trình có hướng nhân quả)
  - represent assumptions via causal directed acyclic graphs (biểu diễn các giả định qua đồ thị DAG nhân quả)
  - formal nonparametric directed acyclic graph (đồ thị DAG nhân quả chính thức)
- Register & nuance: Academic / Causal Inference (Dùng trong thống kê học hiện đại, kinh tế lượng và dịch tễ học).
- Examples:
  - Researchers rely on a nonparametric directed acyclic graph to visualize confounding structures before running regressions. (Các nhà nghiên cứu dựa vào đồ thị chu trình có hướng nhân quả để hình dung cấu trúc nhiễu trước khi chạy hồi quy.)
- Liên kết tiếng Hàn: 인과 방향성 비순환 그래프 (ingwa banghyangseong bisunhwan geurapeu) — Đồ thị DAG nhân quả biểu diễn quan hệ nhân quả.

## 2. d-separation conditional independence
- Pronunciation: /diː ˌsepəˈreɪʃən kənˈdɪʃənl ˌɪndɪˈpendəns/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: A graphical criterion used to determine whether a set of variables is conditionally independent of another given a third set, based on path blocking in a DAG.
- Core meaning & mental image — Tiếng Việt: Tiêu chuẩn tách biệt d và độc lập có điều kiện — Hình dung việc kiểm tra xem con đường truyền tín hiệu nhân quả giữa các biến có bị "chặn" hoàn toàn qua một tập hợp điều kiện hay không.
- Grammar & collocations:
  - test for d-separation conditional independence (kiểm tra tính độc lập có điều kiện theo tiêu chuẩn d-separation)
  - imply d-separation conditional independence (gợi ý tính độc lập có điều kiện d-separation)
  - graphical d-separation conditional independence (tính độc lập d-separation trên đồ thị)
- Register & nuance: Formal / Advanced Statistics (Thuộc lý thuyết đồ thị xác suất và suy luận nhân quả).
- Examples:
  - By applying the rules of d-separation conditional independence, we can prove which variables are unassociated once mediators are controlled. (Bằng cách áp dụng các quy tắc độc lập có điều kiện d-separation, chúng ta có thể chứng minh biến nào không còn liên quan khi các biến trung gian được kiểm soát.)
- Liên kết tiếng Hàn: d-분리 조건부 독립 (d-bunli jogonbu독립) — Tiêu chuẩn d-separation về độc lập có điều kiện trên đồ thị.

## 3. backdoor criterion adjustment
- Pronunciation: /ˈbækˌdɔːr kraɪˈtɪriən ˈʌdʒʌstmənt/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: A graphical method for identifying the causal effect of an intervention by blocking all spurious backdoor paths between treatment and outcome.
- Core meaning & mental image — Tiếng Việt: Điều chỉnh tiêu chuẩn cửa sau — Hình dung việc chặn đứng tất cả các con đường vòng phía sau (nhiễu chung) giữa nguyên nhân và kết quả để đo lường tác động nguyên bản.
- Grammar & collocations:
  - satisfy the backdoor criterion adjustment (thỏa mãn sự điều chỉnh tiêu chuẩn cửa sau)
  - perform backdoor criterion adjustment (thực hiện điều chỉnh tiêu chuẩn cửa sau)
  - valid backdoor criterion adjustment (sự điều chỉnh tiêu chuẩn cửa sau hợp lệ)
- Register & nuance: Academic / Econometrics (Cốt lõi trong phương pháp phân tích nhân quả của Judea Pearl).
- Examples:
  - To estimate the unbiased treatment effect, the epidemiologist performed a backdoor criterion adjustment using age and baseline health. (Để ước lượng hiệu ứng điều trị không chệch, nhà dịch tễ học đã thực hiện điều chỉnh tiêu chuẩn cửa sau bằng cách sử dụng tuổi và sức khỏe ban đầu.)
- Liên kết tiếng Hàn: 백도 기준 보정 (baekdo gijun bojeong) — Phương pháp hiệu chỉnh đường cửa sau để loại bỏ nhiễu.

## 4. Pearlian do-calculus operator
- Pronunciation: /ˈpɜːrliən duː ˈkælkjʊləs ˈɑːpəreɪtər/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: A formal logical system of rules created by Judea Pearl for manipulating conditional probabilities under physical interventions.
- Core meaning & mental image — Tiếng Việt: Toán tử tính toán do-calculus theo trường phái Pearl — Hình dung ký hiệu toán học $do(X)$ mô phỏng hành động can thiệp vật lý làm thay đổi hệ thống khác với việc chỉ quan sát thuần túy.
- Grammar & collocations:
  - apply the Pearlian do-calculus operator (áp dụng toán tử do-calculus của Pearl)
  - rules of the Pearlian do-calculus operator (các quy tắc của toán tử do-calculus Pearl)
  - formal Pearlian do-calculus operator (toán tử do-calculus chính thức của Pearl)
- Register & nuance: Advanced Academic / Artificial Intelligence (Thuộc lý thuyết trí tuệ nhân tạo và nhân quả hình thức).
- Examples:
  - The Pearlian do-calculus operator allows researchers to translate interventional queries into purely observational formulas. (Toán tử do-calculus của Pearl cho phép các nhà nghiên cứu chuyển đổi các truy vấn can thiệp thành các công thức thuần quan sát.)
- Liên kết tiếng Hàn: 펄리안 두-미적분 연산자 (peollian du-mijeokbun yeonsanja) — Toán tử tính toán do-calculus của Judea Pearl.

## 5. collider variable conditioning bias
- Pronunciation: /kəˈlaɪdər ˈvɛriəbəl kənˈdɪʃənɪŋ ˈbaɪəs/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: A distortion in statistical association created when conditioning on a common effect (collider) of two independent variables.
- Core meaning & mental image — Tiếng Việt: Sai lệch điều kiện hóa biến va chạm (collider) — Hình dung việc vô tình khóa một nút chung nơi hai mũi tên đâm vào, khiến tạo ra mối liên hệ giả tạo giữa hai nguyên nhân độc lập.
- Grammar & collocations:
  - avoid collider variable conditioning bias (tránh sai lệch do điều kiện hóa biến va chạm)
  - introduce collider variable conditioning bias (gây ra sai lệch do biến va chạm)
  - severe collider variable conditioning bias (sai lệch điều kiện hóa biến va chạm nghiêm trọng)
- Register & nuance: Academic / Statistical Methodology (Cảnh báo sai lầm kinh điển trong thiết kế nghiên cứu).
- Examples:
  - Controlling for hospital admission can introduce collider variable conditioning bias, distorting the link between disease severity and recovery. (Việc kiểm soát biến nhập viện có thể dẫn đến sai lệch điều kiện hóa biến va chạm, làm méo mó mối liên hệ giữa mức độ nặng của bệnh và sự hồi phục.)
- Liên kết tiếng Hàn: 충돌 변수 조건화 편향 (chungdol byeonsu jogonhwa pyeonhyang) — Hiện tượng sai lệch thống kê khi điều kiện hóa biến va chạm (collider).

## 6. unobserved confounding variable
- Pronunciation: /ˌʌnəbˈzɜːrvd kənˈfaʊndɪŋ ˈvɛriəbəl/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: A hidden factor that influences both the treatment and the outcome, threatening causal inference validity if omitted.
- Core meaning & mental image — Tiếng Việt: Biến nhiễu không quan sát được — Hình dung một yếu tố ngầm khuất lấp gây ảnh hưởng đồng thời đến cả nguyên nhân lẫn kết quả, tạo ra mối quan hệ nhân quả giả.
- Grammar & collocations:
  - account for unobserved confounding variables (tính đến các biến nhiễu không quan sát được)
  - control for unobserved confounding variables (kiểm soát các biến nhiễu ẩn)
  - potential unobserved confounding variable (biến nhiễu ẩn tiềm tàng)
- Register & nuance: Formal / Econometric & Epidemiological (Thách thức lớn nhất trong phân tích dữ liệu quan sát).
- Examples:
  - Instrumental variables are often deployed to tackle the pervasive issue of unobserved confounding variables. (Biến công cụ thường được triển khai để giải quyết vấn đề lan man của các biến nhiễu không quan sát được.)
- Liên kết tiếng Hàn: 관측되지 않은 교란 변수 (gwancheokdwej-eun gyoran byeonsu) — Biến nhiễu tiềm ẩn không được đo lường trong dữ liệu.

## 7. frontdoor causal adjustment
- Pronunciation: /ˈfrʌntdɔːr ˈkɔːzəl ˈʌdʒʌstmənt/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: An identification strategy used when direct confounding is unmeasured, leveraging a valid mediator mechanism between treatment and outcome.
- Core meaning & mental image — Tiếng Việt: Điều chỉnh nhân quả qua cửa trước — Hình dung phương pháp cứu cánh khi không đo được đường cửa sau, bằng cách đi qua biến trung gian hoàn toàn rõ ràng ở cửa trước.
- Grammar & collocations:
  - apply frontdoor causal adjustment (áp dụng điều chỉnh nhân quả cửa trước)
  - valid frontdoor causal adjustment (sự điều chỉnh nhân quả cửa trước hợp lệ)
  - utilize frontdoor causal adjustment (tận dụng điều chỉnh nhân quả cửa trước)
- Register & nuance: Academic / Advanced Causal Inference (Kỹ thuật thông minh trong lý thuyết của Pearl).
- Examples:
  - When unobserved confounding blocks backdoor adjustments, researchers can turn to frontdoor causal adjustment via mediators. (Khi nhiễu ẩn chặn các điều chỉnh cửa sau, các nhà nghiên cứu có thể chuyển sang điều chỉnh nhân quả cửa trước thông qua các biến trung gian.)
- Liên kết tiếng Hàn: 프론트도어 인과 보정 (peurontodeo ingwa bojeong) — Phương pháp hiệu chỉnh nhân quả qua đường cửa trước (frontdoor).

## 8. structural causal model equation
- Pronunciation: /ˈstrʌktʃərəl ˈkɔːzəl ˈmɑːdəl ɪˈkweɪʒən/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: A mathematical representation detailing how each endogenous variable is determined by its parents and stochastic error terms in a system.
- Core meaning & mental image — Tiếng Việt: Phương trình mô hình nhân quả cấu trúc — Hình dung công thức toán học tường minh biểu diễn cơ chế sinh ra một biến từ các nguyên nhân trực tiếp và sai số ngẫu nhiên.
- Grammar & collocations:
  - specify a structural causal model equation (xác định phương trình mô hình nhân quả cấu trúc)
  - estimate parameters in a structural causal model equation (ước lượng tham số trong phương trình mô hình nhân quả)
  - system of structural causal model equations (hệ phương trình mô hình nhân quả cấu trúc)
- Register & nuance: Formal / Econometrics & Statistics (Chuyên ngành mô hình hóa phương trình cấu trúc SEM).
- Examples:
  - Each structural causal model equation explicitly encodes asymmetric cause-effect assignments within the network system. (Mỗi phương trình mô hình nhân quả cấu trúc mã hóa tường minh các phân công nguyên nhân-kết quả bất đối xứng trong hệ thống mạng.)
- Liên kết tiếng Hàn: 구조적 인과 모형 방정식 (gujojeok ingwa mohyeong bang-jeongsiik) — Phương trình mô hình nhân quả cấu trúc.

## 9. counterfactual potential outcome
- Pronunciation: /ˌkaʊntərˈfæktʃuəl pəˈtʃɛnʃəl ˈaʊtˌkʌm/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: The result that would have occurred under a treatment alternative to the one actually received by an individual.
- Core meaning & mental image — Tiếng Việt: Kết quả tiềm năng phản thực tế — Hình dung viễn cảnh "điều gì sẽ xảy ra nếu" một bệnh nhân không uống thuốc, so với thực tế họ đã uống thuốc.
- Grammar & collocations:
  - estimate counterfactual potential outcomes (ước lượng các kết quả tiềm năng phản thực tế)
  - fundamental problem of counterfactual potential outcomes (vấn đề cốtLõi của kết quả tiềm năng phản thực tế)
  - missing counterfactual potential outcome (kết quả tiềm năng phản thực tế bị khuyết thiếu)
- Register & nuance: Academic / Rubin Causal Model (Khung lý thuyết nền tảng trong thống kê nhân quả).
- Examples:
  - Because we can never observe both states simultaneously, the unreceived counterfactual potential outcome remains permanently missing. (Vì chúng ta không bao giờ có thể quan sát cả hai trạng thái cùng lúc, kết quả tiềm năng phản thực tế chưa nhận vẫn vĩnh viễn bị khuyết thiếu.)
- Liên kết tiếng Hàn: 반사실적 잠재적 결과 (bansasiljeok jamjaejeok gyeolgwa) — Kết quả tiềm năng phản thực tế trong suy luận nhân quả.

## 10. instrumental variable DAG identification
- Pronunciation: /ˌɪstrəˈmɛntəl ˈvɛriəbəl dæɡ aɪˌdɛntəfɪˈkeɪʃən/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: The graphical validation and use of an external instrument that affects treatment exclusively through the causal pathway, bypassing unmeasured confounders.
- Core meaning & mental image — Tiếng Việt: Nhận diện biến công cụ qua DAG — Hình dung việc tìm một công cụ tác động trực tiếp lên biến điều trị nhưng không hề dính líu gì đến biến nhiễu ẩn hay kết quả trực tiếp.
- Grammar & collocations:
  - achieve instrumental variable DAG identification (đạt được nhận diện biến công cụ qua DAG)
  - valid instrumental variable DAG identification (nhận diện biến công cụ qua DAG hợp lệ)
  - assumption for instrumental variable DAG identification (giả định cho việc nhận diện biến công cụ qua DAG)
- Register & nuance: Advanced Econometrics / Biostatistics (Kỹ thuật vàng trong xác định quan hệ nhân quả thực nghiệm).
- Examples:
  - Instrumental variable DAG identification requires proving that the instrument is conditionally independent of the outcome given treatment and confounders. (Nhận diện biến công cụ qua DAG đòi hỏi chứng minh rằng công cụ độc lập có điều kiện với kết quả khi đã xét đến điều trị và biến nhiễu.)
- Liên kết tiếng Hàn: 도구 변수 DAG 식별 (dogu byeonsu DAG sigbyeol) — Phương pháp nhận diện biến công cụ sử dụng đồ thị DAG.

## 11. causal Markov condition assumption
- Pronunciation: /ˈkɔːzəl ˈmɑːrkɔːv kənˈdɪʃən əˈsʌmpʃən/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: The core assumption stating that every node in a causal DAG is conditionally independent of its non-descendants given its direct parents.
- Core meaning & mental image — Tiếng Việt: Giả định điều kiện Markov nhân quả — Hình dung quy tắc cốt lõi rằng một biến trên đồ thị DAG chỉ phụ thuộc vào cha mẹ trực tiếp của nó khi đã biết các thông tin khác không phải hậu duệ.
- Grammar & collocations:
  - invoke the causal Markov condition assumption (viện dẫn giả định điều kiện Markov nhân quả)
  - violate the causal Markov condition assumption (vi phạm giả định điều kiện Markov nhân quả)
  - foundational causal Markov condition assumption (giả định điều kiện Markov nhân quả nền tảng)
- Register & nuance: Mathematical Statistics / Probabilistic Graphical Models (Thuộc lý thuyết nền tảng của mạng Bayes nhân quả).
- Examples:
  - Most graphical discovery algorithms depend heavily on the causal Markov condition assumption to link topology with probability. (Hầu hết các thuật toán khám phá đồ thị đều phụ thuộc lớn vào giả định điều kiện Markov nhân quả để liên kết cấu trúc hình học với xác suất.)
- Liên kết tiếng Hàn: 인과 마르코프 조건 가정 (ingwa mareukopeu jogon gajeong) — Giả định điều kiện Markov nhân quả trong mô hình đồ thị.

## 12. faithfulness assumption violation
- Pronunciation: /ˈfeɪθfʊlnəs əˈsʌmpʃən ˌvaɪəˈleɪʃən/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: A scenario where conditional independence relations in the probability distribution do not match the d-separation facts in the DAG.
- Core meaning & mental image — Tiếng Việt: Sự vi phạm giả định trung thành (faithfulness) — Hình dung trường hợp các tác động triệt tiêu lẫn nhau một cách tình cờ, khiến đồ thị không phản ánh đúng thực tế độc lập thống kê.
- Grammar & collocations:
  - test for faithfulness assumption violation (kiểm tra sự vi phạm giả định trung thành)
  - risk of faithfulness assumption violation (nguy cơ vi phạm giả định trung thành)
  - handle faithfulness assumption violation (xử lý sự vi phạm giả định trung thành)
- Register & nuance: Advanced Econometrics / Machine Learning (Thách thức trong việc khôi phục cấu trúc nhân quả từ dữ liệu).
- Examples:
  - Exact cancellations of opposing causal paths can lead to a faithfulness assumption violation during network recovery. (Sự triệt tiêu chính xác của các con đường nhân quả đối lập có thể dẫn đến việc vi phạm giả định trung thành trong quá trình phục hồi mạng.)
- Liên kết tiếng Hàn: 충실성 가정 위반 (chung-silsim gajeong wiban) — Hiện tượng vi phạm giả định faithfulness trong học đồ thị nhân quả.

## 13. path analysis direct indirect effect
- Pronunciation: /pæθ əˈnæləsɪs dəˈrɛkt ɪndəˈrɛkt ɪˈfɛkt/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: The decomposition of total effects into direct impacts and indirect pathways mediated through intermediate variables in a path model.
- Core meaning & mental image — Tiếng Việt: Phân tích đường dẫn tác động trực tiếp và gián tiếp — Hình dung việc mổ xẻ tổng tác động thành các nhánh đi thẳng và các nhánh đi vòng qua trung gian.
- Grammar & collocations:
  - conduct path analysis direct indirect effect (thực hiện phân tích đường dẫn hiệu ứng trực tiếp gián tiếp)
  - estimate path analysis direct indirect effects (ước lượng các hiệu ứng trực tiếp và gián tiếp trong phân tích đường dẫn)
  - structural path analysis direct indirect effect (phân tích đường dẫn cấu trúc hiệu ứng trực tiếp gián tiếp)
- Register & nuance: Academic / Applied Statistics (Phương pháp kinh điển trong tâm lý học và xã hội học định lượng).
- Examples:
  - The software package automatically computes path analysis direct indirect effects using structural equation modeling. (Gói phần mềm tự động tính toán các hiệu ứng trực tiếp và gián tiếp của phân tích đường dẫn bằng mô hình phương trình cấu trúc.)
- Liên kết tiếng Hàn: 경로 분석 직접 간접 효과 (gyeongno bun-seok jikjeop ganjup hyogwa) — Phân tích tác động trực tiếp và gián tiếp trong mô hình đường dẫn.

## 14. M-bias graph structure
- Pronunciation: /ɛm ˈbaɪəs ɡræf ˈstrʌktʃər/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: A specific graphical configuration where controlling for an exogenous collider (the M-bias structure) spuriously opens a backdoor path, introducing bias.
- Core meaning & mental image — Tiếng Việt: Cấu trúc đồ thị M-bias — Hình dung sơ đồ hình chữ M trong đó việc kiểm soát một biến ở đáy chữ M vô tình tạo ra đường nhiễu độc hại.
- Grammar & collocations:
  - avoid M-bias graph structures (tránh các cấu trúc đồ thị M-bias)
  - identify an M-bias graph structure (nhận diện cấu trúc đồ thị M-bias)
  - classic M-bias graph structure (cấu trúc đồ thị M-bias kinh điển)
- Register & nuance: Academic / Causal Methodology (Cạm bẫy thống kê tinh vi trong việc lựa chọn biến kiểm soát).
- Examples:
  - Epidemiologists must be cautious when selecting covariates to ensure they do not accidentally condition on an M-bias graph structure. (Các nhà dịch tễ học phải thận trọng khi chọn các biến hiệp biến để đảm bảo họ không vô tình điều kiện hóa trên cấu trúc đồ thị M-bias.)
- Liên kết tiếng Hàn: M-바이어스 그래프 구조 (M-baieoseu geurapeu gujo) — Cấu trúc đồ thị M-bias gây sai lệch kiểm soát.

## 15. intermediate mediator variable
- Pronunciation: [ˌɪntərˈmidiət ˈmiːdieɪtər ˈvɛriəbəl]
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: A variable that lies on the causal pathway between a treatment and an outcome, transmitting part or all of the causal effect.
- Core meaning & mental image — Tiếng Việt: Biến trung gian trung gian — Hình dung một trạm dừng chân nằm giữa nguyên nhân và kết quả; nguyên nhân tác động lên biến trung gian, rồi biến trung gian mới tác động lên kết quả.
- Grammar & collocations:
  - isolate an intermediate mediator variable (cô lập một biến trung gian)
  - condition on an intermediate mediator variable (điều kiện hóa trên biến trung gian)
  - crucial intermediate mediator variable (biến trung gian quan trọng)
- Register & nuance: Formal / Statistics & Psychology (Chuyên ngành phân tích trung gian - mediation analysis).
- Examples:
  - Income serves as an intermediate mediator variable explaining how education improves overall life expectancy. (Thu nhập đóng vai trò là biến trung gian giải thích cách giáo dục cải thiện tuổi thọ tổng thể.)
- Liên kết tiếng Hàn: 매개 변수 (maegae byeonsu) — Biến trung gian nằm giữa nguyên nhân và kết quả.

## 16. average treatment effect on treated
- Pronunciation: /ˈævərɪdʒ ˈtriːtmənt ɪˈfɛkt ɑːn ˈtriːtɪd/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: The expected causal effect of a treatment specifically for those individuals who actually chose or received the treatment.
- Core meaning & mental image — Tiếng Việt: Hiệu ứng điều trị trung bình trên nhóm được điều trị (ATT) — Hình dung mức lợi ích thực tế mà những người tham gia chương trình đã thực sự nhận được so với khi họ không tham gia.
- Grammar & collocations:
  - estimate the average treatment effect on treated (ước lượng hiệu ứng điều trị trung bình trên nhóm được điều trị)
  - differ from the average treatment effect (khác biệt với hiệu ứng điều trị trung bình tổng thể)
  - calculate the average treatment effect on treated (tính toán hiệu ứng điều trị trung bình trên nhóm điều trị)
- Register & nuance: Formal / Econometrics & Policy Evaluation (Chỉ tiêu quan trọng trong đánh giá chính sách).
- Examples:
  - Policymakers focused on the average treatment effect on treated to evaluate whether the job training program benefited its actual participants. (Các nhà hoạch định chính sách tập trung vào hiệu ứng điều trị trung bình trên nhóm được điều trị để đánh giá xem chương trình đào tạo nghề có mang lại lợi ích cho các học viên thực tế của nó hay không.)
- Liên kết tiếng Hàn: 처치받은 집단에 대한 평균 처치 효과 (cheochibadeun jibdan-e daehan pyeong-gyun cheochi hyogwa) — Hiệu ứng điều trị trung bình trên nhóm thực tế nhận điều trị (ATT).

## 17. observational observational data causal claim
- Pronunciation: /ˌɑːbzərˈveɪʃənl ˈdeɪtə ˈkɔːzəl kleɪm/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: An assertion of cause and effect derived solely from passive observational data rather than randomized controlled experiments.
- Core meaning & mental image — Tiếng Việt: Tuyên bố nhân quả từ dữ liệu quan sát thuần túy — Hình dung việc cố gắng rút ra kết luận "A gây ra B" chỉ từ việc nhìn ngắm dữ liệu thu thập thụ động thay vì làm thí nghiệm ngẫu nhiên.
- Grammar & collocations:
  - substantiate an observational data causal claim (chứng minh một tuyên bố nhân quả từ dữ liệu quan sát)
  - skepticism toward observational data causal claims (sự hoài nghi đối với các tuyên bố nhân quả từ dữ liệu quan sát)
  - validate an observational data causal claim (xác thực tuyên bố nhân quả từ dữ liệu quan sát)
- Register & nuance: Academic / Scientific Research Methodology (Thận trọng đối với tuyên bố nhân quả không thí nghiệm).
- Examples:
  - Reviewers demanded rigorous adjustment methods before accepting any observational data causal claim in the medical paper. (Các phản biện yêu cầu các phương pháp điều chỉnh ngặt nghèo trước khi chấp nhận bất kỳ tuyên bố nhân quả từ dữ liệu quan sát nào trong bài báo y khoa.)
- Liên kết tiếng Hàn: 관측 데이터 기반 인과 주장 (gwancheok deiteo giban ingwa jujang) — Tuyên bố quan hệ nhân quả dựa trên dữ liệu quan sát thuần túy.

## 18. natural direct and indirect effect
- Pronunciation: /ˈnætʃərəl dəˈrɛkt ænd ɪndəˈrɛkt ɪˈfɛkt/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: Measures within mediation analysis defined using nested counterfactuals to isolate the path operating through vs. bypassing a mediator.
- Core meaning & mental image — Tiếng Việt: Hiệu ứng trực tiếp và gián tiếp tự nhiên — Hình dung việc tách bạch lượng tác động đi thẳng từ nguyên nhân đến kết quả so với lượng đi vòng qua trung gian dưới góc nhìn phản thực tế.
- Grammar & collocations:
  - decompose into natural direct and indirect effects (phân rã thành các hiệu ứng trực tiếp và gián tiếp tự nhiên)
  - estimate natural direct and indirect effects (ước lượng hiệu ứng trực tiếp và gián tiếp tự nhiên)
  - define natural direct and indirect effects (định nghĩa các hiệu ứng trực tiếp và gián tiếp tự nhiên)
- Register & nuance: Advanced Academic / Causal Mediation (Lý thuyết nâng cao về phân tích trung gian phản thực tế).
- Examples:
  - Pearl's structural framework allows researchers to define and compute natural direct and indirect effects even in nonlinear models. (Khung cấu trúc của Pearl cho phép các nhà nghiên cứu định nghĩa và tính toán các hiệu ứng trực tiếp và gián tiếp tự nhiên ngay cả trong các mô hình phi tuyến tính.)
- Liên kết tiếng Hàn: 자연 직접 및 간접 효과 (jayeon jikjeop mit ganjup hyogwa) — Hiệu ứng trực tiếp và gián tiếp tự nhiên trong phân tích nhân quả.

## 19. selection bias collider conditioning
- Pronunciation: /səˈlɛkʃən ˈbaɪəs kəˈlaɪdər kənˈdɪʃənɪŋ/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: Distortion caused by filtering or selecting a sample based on a collider variable, leading to false statistical associations.
- Core meaning & mental image — Tiếng Việt: Sai lệch lựa chọn do điều kiện hóa biến va chạm — Hình dung việc chỉ lấy mẫu những người qua vòng sơ loại (biến va chạm), từ đó làm biến dạng hoàn toàn mối quan hệ tổng thể.
- Grammar & collocations:
  - suffer from selection bias collider conditioning (gặp phải sai lệch lựa chọn do điều kiện hóa biến va chạm)
  - adjust for selection bias collider conditioning (hiệu chỉnh sai lệch lựa chọn do điều kiện hóa biến va chạm)
  - mitigate selection bias collider conditioning (giảm thiểu sai lệch lựa chọn do điều kiện hóa biến va chạm)
- Register & nuance: Academic / Statistics & Survey Design (Lỗi phân tích phổ biến trong nghiên cứu khảo sát).
- Examples:
  - Restricting the study sample to patients who survived the initial phase introduces severe selection bias collider conditioning. (Việc giới hạn mẫu nghiên cứu ở những bệnh nhân sống sót qua giai đoạn đầu gây ra sai lệch lựa chọn do điều kiện hóa biến va chạm nghiêm trọng.)
- Liên kết tiếng Hàn: 선택 편향 충돌 변수 조건화 (seontaek pyeonhyang chungdol byeonsu jogonhwa) — Sai lệch chọn mẫu do điều kiện hóa biến va chạm.

## 20. graphical causal model discovery
- Pronunciation: /ˈɡræfɪkəl ˈkɔːzəl ˈmɑːdəl dɪˈskʌvəri/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: Algorithmic processes that learn causal directed acyclic graphs directly from observational data distribution properties.
- Core meaning & mental image — Tiếng Việt: Khám phá mô hình nhân quả đồ thị — Hình dung việc sử dụng máy tính và thuật toán để tự động vẽ ra sơ đồ nhân quả từ ma trận dữ liệu thô.
- Grammar & collocations:
  - pioneer graphical causal model discovery (tiên phong trong khám phá mô hình nhân quả đồ thị)
  - algorithms for graphical causal model discovery (các thuật toán khám phá mô hình nhân quả đồ thị)
  - automated graphical causal model discovery (khám phá mô hình nhân quả đồ thị tự động)
- Register & nuance: Artificial Intelligence / Machine Learning (Lĩnh vực hot trong AI và học máy nhân quả).
- Examples:
  - Recent advances in graphical causal model discovery enable computers to recover causal DAGs from observational time-series data. (Những tiến bộ gần đây trong việc khám phá mô hình nhân quả đồ thị cho phép máy tính khôi phục các DAG nhân quả từ dữ liệu chuỗi thời gian quan sát.)
- Liên kết tiếng Hàn: 그래픽 인과 모형 탐색 (geuraepik ingwa mohyeong tam-saek) — Khám phá tự động mô hình nhân quả dạng đồ thị từ dữ liệu.

## 21. acyclic node topological order
- Pronunciation: /eɪˈsɪklɪk noʊd ˌtɑːpəˈlɑːdʒɪkəl ˈɔːrdər/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: A linear ordering of nodes in a DAG such that every directed edge points from an earlier node to a later node in the sequence.
- Core meaning & mental image — Tiếng Việt: Thứ tự topo của nút không chu trình — Hình dung việc xếp hàng các nút từ trái sang phải sao cho mũi tên chỉ tiến về phía trước chứ không bao giờ quay đầu lại phía sau.
- Grammar & collocations:
  - determine the acyclic node topological order (xác định thứ tự topo của nút không chu trình)
  - valid acyclic node topological order (thứ tự topo nút không chu trình hợp lệ)
  - compute the acyclic node topological order (tính toán thứ tự topo nút không chu trình)
- Register & nuance: Computer Science / Graph Theory (Thuật toán cấu trúc dữ liệu và đồ thị).
- Examples:
  - Sorting the variables into an acyclic node topological order simplifies the factorization of joint probability distributions. (Sắp xếp các biến theo thứ tự topo nút không chu trình giúp đơn giản hóa việc phân rã phân phối xác suất đồng thời.)
- Liên kết tiếng Hàn: 비순환 노드 위상 순서 (bisunhwan nodeu wisang sunseo) — Thứ tự topo của các nút trong đồ thị không chu trình.

## 22. covariate adjustment set selection
- Pronunciation: /koʊˈvɛriɪt ˈʌdʒʌstmənt sɛt sɪˈlɛkʃən/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: The principled process of choosing which variables to control for in a regression model to estimate unbiased causal effects.
- Core meaning & mental image — Tiếng Việt: Lựa chọn tập hợp điều chỉnh hiệp biến — Hình dung việc quyết định chọn đưa biến nào vào mô hình hồi quy để khử nhiễu mà không làm hỏng cấu trúc nhân quả.
- Grammar & collocations:
  - optimize covariate adjustment set selection (tối ưu hóa việc lựa chọn tập điều chỉnh hiệp biến)
  - rules for covariate adjustment set selection (các quy tắc lựa chọn tập điều chỉnh hiệp biến)
  - optimal covariate adjustment set selection (lựa chọn tập điều chỉnh hiệp biến tối ưu)
- Register & nuance: Formal / Statistics & Econometrics (Quy trình ra quyết định cốt lõi trong phân tích định lượng).
- Examples:
  - Using DAG-based back-door criteria ensures correct covariate adjustment set selection without falling into collider traps. (Sử dụng tiêu chuẩn cửa sau dựa trên DAG đảm bảo việc lựa chọn tập điều chỉnh hiệp biến chính xác mà không sa vào bẫy biến va chạm.)
- Liên kết tiếng Hàn: 공변량 보정 집합 선택 (gongbyeon-ryang bojeong jibhap seontaek) — Lựa chọn tập hợp các biến hiệp biến cần điều chỉnh trong mô hình.

## 23. sensitivity analysis unmeasured confounding
- Pronunciation: /ˌsɛnsəˈtɪvəti əˈnæləsɪs ˌʌnˈmɛʒərd kənˈfaʊndɪŋ/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: A statistical procedure testing how robust study findings are to potential hidden biases from unobserved confounders.
- Core meaning & mental image — Tiếng Việt: Phân tích độ nhạy đối với biến nhiễu không đo lường — Hình dung việc đặt câu hỏi: "Kết quả của tôi sẽ sụp đổ thế nào nếu có một biến ẩn mạnh cỡ X xuất hiện?"
- Grammar & collocations:
  - perform sensitivity analysis for unmeasured confounding (thực hiện phân tích độ nhạy đối với biến nhiễu ẩn)
  - robust sensitivity analysis unmeasured confounding (phân tích độ nhạy vững chãi đối với biến nhiễu ẩn)
  - conduct sensitivity analysis unmeasured confounding (tiến hành phân tích độ nhạy biến nhiễu không đo lường)
- Register & nuance: Academic / Epidemiological & Econometric Rigor (Tiêu chuẩn kiểm định độ tin cậy nâng cao).
- Examples:
  - To strengthen their causal claims, the authors included a sensitivity analysis for unmeasured confounding showing high robustness. (Để củng cố các tuyên bố nhân quả, các tác giả đã đính kèm phân tích độ nhạy đối với biến nhiễu ẩn cho thấy tính vững chãi cao.)
- Liên kết tiếng Hàn: 미측정 교란 변수에 대한 민감도 분석 (micheukjeong gyoran byeonsu-e daehan mingamdo bunseok) — Phân tích độ nhạy đối với các biến nhiễu chưa được đo lường.

## 24. causal inference identification theorem
- Pronunciation: /ˈkɔːzəl ˈɪnfərəns aɪˌdɛntəfɪˈkeɪʃən ˈθɪərəm/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: A mathematical theorem proving under what graphical or experimental conditions a causal quantity can be estimated from observational distributions.
- Core meaning & mental image — Tiếng Việt: Định lý nhận diện suy luận nhân quả — Hình dung định lý toán học chứng minh chắc chắn khi nào một ẩn số nhân quả có thể tính ra được từ dữ liệu quan sát thông thường.
- Grammar & collocations:
  - prove a causal inference identification theorem (chứng minh định lý nhận diện suy luận nhân quả)
  - apply the causal inference identification theorem (áp dụng định lý nhận diện suy luận nhân quả)
  - foundational causal inference identification theorem (định lý nhận diện suy luận nhân quả nền tảng)
- Register & nuance: Mathematical Statistics / Theoretical Causal Inference (Đỉnh cao lý thuyết toán học nhân quả).
- Examples:
  - Pearl's do-calculus completeness theorems serve as a universal causal inference identification theorem for DAGs. (Các định lý đầy đủ do-calculus của Pearl đóng vai trò như một định lý nhận diện suy luận nhân quả phổ quát cho các đồ thị DAG.)
- Liên kết tiếng Hàn: 인과 추론 식별 정리 (ingwa churon sigbyeol jeong-i) — Định lý toán học về khả năng nhận diện nhân quả.

## 25. empirical causal discovery algorithm
- Pronunciation: /ɛmˈpɪrɪkəl ˈkɔːzəl dɪˈskʌvəri ˈælgəˌrɪðəm/
- Loại từ & vị trí trong câu: Noun phrase (chủ ngữ, tân ngữ)
- Core meaning — English: A computational procedure applied to empirical datasets to uncover underlying causal graphs and dependency structures.
- Core meaning & mental image — Tiếng Việt: Thuật toán khám phá nhân quả thực nghiệm — Hình dung chương trình máy tính quét qua dữ liệu thực tế để tự động phác thảo sơ đồ nguyên nhân kết quả.
- Grammar & collocations:
  - run an empirical causal discovery algorithm (chạy thuật toán khám phá nhân quả thực nghiệm)
  - evaluate empirical causal discovery algorithms (đánh giá các thuật toán khám phá nhân quả thực nghiệm)
  - state-of-the-art empirical causal discovery algorithm (thuật toán khám phá nhân quả thực nghiệm tiên tiến nhất)
- Register & nuance: Computer Science / Data Science (Ứng dụng thực tế trong khai phá dữ liệu lớn).
- Examples:
  - The data science team deployed an empirical causal discovery algorithm to map gene regulatory networks from microarray expression data. (Nhóm khoa học dữ liệu đã triển khai thuật toán khám phá nhân quả thực nghiệm để vẽ bản đồ mạng lưới điều hòa gen từ dữ liệu biểu hiện microarray.)
- Liên kết tiếng Hàn: 경험적 인과 탐색 알고리즘 (gyeongheomjeok ingwa tamsaek al-gori-jeum) — Thuật toán khám phá nhân quả dựa trên dữ liệu thực nghiệm.

## Review in context: Part 1 (items 1–12)
When building a **nonparametric directed acyclic graph**, researchers map out theoretical assumptions before analyzing data. By carefully testing for **d-separation conditional independence**, analysts ensure that conditional relationships match graphical paths. To eliminate spurious correlations, one must perform a **backdoor criterion adjustment**, or alternatively apply the **Pearlian do-calculus operator** when direct interventional symbols are needed. However, analysts must remain vigilant against **collider variable conditioning bias**, which occurs when conditioning on a common effect creates false associations. Furthermore, the presence of an **unobserved confounding variable** can invalidate standard regressions, prompting the use of **frontdoor causal adjustment** as an ingenious workaround. Each relationship in the system can be formalized via a **structural causal model equation**, defining the **counterfactual potential outcome** framework. When dealing with randomized instruments, **instrumental variable DAG identification** relies on the fundamental **causal Markov condition assumption**, provided there is no unexpected **faithfulness assumption violation**.

*(Bản dịch tiếng Việt phần 1)*
Khi xây dựng một **đồ thị chu trình có hướng nhân quả (DAG)**, các nhà nghiên cứu phác thảo các giả định lý thuyết trước khi phân tích dữ liệu. Bằng cách kiểm tra cẩn thận **tính độc lập có điều kiện d-separation**, các nhà phân tích đảm bảo rằng các mối quan hệ có điều kiện khớp với các đường dẫn trên đồ thị. Để loại bỏ các mối tương quan giả mạo, người ta phải thực hiện **điều chỉnh tiêu chuẩn cửa sau**, hoặc thay vào đó áp dụng **toán tử do-calculus của Pearl** khi cần các ký hiệu can thiệp trực tiếp. Tuy nhiên, các nhà phân tích phải cảnh giác với **sai lệch điều kiện hóa biến va chạm (collider)**, xảy ra khi việc điều kiện hóa trên một hiệu ứng chung tạo ra các mối liên hệ sai lầm. Hơn nữa, sự hiện diện của một **biến nhiễu không quan sát được** có thể làm mất hiệu lực của các phép hồi quy tiêu chuẩn, thúc đẩy việc sử dụng **điều chỉnh nhân quả cửa trước** như một giải pháp thay thế khéo léo. Mỗi mối quan hệ trong hệ thống có thể được chính thức hóa thông qua một **phương trình mô hình nhân quả cấu trúc**, xác định khung **kết quả tiềm năng phản thực tế**. Khi xử lý các công cụ ngẫu nhiên, **nhận diện biến công cụ qua DAG** dựa trên **giả định điều kiện Markov nhân quả** nền tảng, miễn là không có **sự vi phạm giả định trung thành (faithfulness)** bất ngờ nào xảy ra.

## Review in context: Part 2 (items 13–25)
Beyond basic graphs, advanced researchers perform **path analysis direct indirect effect** decompositions to understand mediating mechanisms. One must carefully avoid an **M-bias graph structure**, which inadvertently opens backdoor paths when conditioning on an exogenous collider. By identifying each **intermediate mediator variable**, scientists can better estimate the **average treatment effect on treated** rather than relying blindly on any **observational data causal claim**. With complex mediation paths, defining the **natural direct and indirect effect** helps clarify underlying mechanisms, though researchers must still watch out for **selection bias collider conditioning**. Modern data science relies heavily on **graphical causal model discovery** algorithms, which sort nodes into an **acyclic node topological order** to automate **covariate adjustment set selection**. Finally, rigorous studies always incorporate a **sensitivity analysis unmeasured confounding** check, supported by the **causal inference identification theorem** and implemented via an efficient **empirical causal discovery algorithm**.

*(Bản dịch tiếng Việt phần 2)*
Ngoài các đồ thị cơ bản, các nhà nghiên cứu nâng cao thực hiện phân tích **phân tích đường dẫn tác động trực tiếp và gián tiếp** để hiểu rõ các cơ chế trung gian. Người ta phải cẩn thận tránh **cấu trúc đồ thị M-bias**, vốn vô tình mở ra các đường cửa sau khi điều kiện hóa trên một biến va chạm ngoại sinh. Bằng cách xác định từng **biến trung gian**, các nhà khoa học có thể ước lượng tốt hơn **hiệu ứng điều trị trung bình trên nhóm được điều trị** thay vì dựa dẫm một cách mù quáng vào bất kỳ **tuyên bố nhân quả từ dữ liệu quan sát thuần túy** nào. Với các đường dẫn trung gian phức tạp, việc xác định **hiệu ứng trực tiếp và gián tiếp tự nhiên** giúp làm sáng tỏ các cơ chế nền tảng, mặc dù các nhà nghiên cứu vẫn phải cảnh giác với **sai lệch lựa chọn do điều kiện hóa biến va chạm**. Khoa học dữ liệu hiện đại phụ thuộc nhiều vào các thuật toán **khám phá mô hình nhân quả đồ thị**, sắp xếp các nút theo **thứ tự topo của nút không chu trình** để tự động hóa **lựa chọn tập hợp điều chỉnh hiệp biến**. Cuối cùng, các nghiên cứu nghiêm ngặt luôn kết hợp kiểm tra **phân tích độ nhạy đối với biến nhiễu không đo lường**, được hỗ trợ bởi **định lý nhận diện suy luận nhân quả** và được triển khai thông qua một **thuật toán khám phá nhân quả thực nghiệm** hiệu quả.
