# C2+ Vocabulary 03 — Predictive coding, precision-weighted prediction errors, and hierarchical active inference

This lesson explores advanced computational neuroscience, predictive processing, and free energy minimization. It covers hierarchical generative models, precision-weighted prediction errors, cortical laminar circuits, sensory attenuation, epistemic foraging, and Bayesian perceptual inference.

---

## 1. predictive coding architecture /prɪˈdɪktɪv ˈkoʊdɪŋ ˈɑːrkɪtɛktʃər/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ trong các nghiên cứu về lý thuyết hệ thống thần kinh (*propose*, *implement*, *model*).

**Core meaning — English:** A hierarchical brain organization framework in which higher cortical areas continuously generate descending top-down predictions to suppress ascending sensory prediction errors across laminar projection circuits.

**Core meaning & mental image — Tiếng Việt:** Kiến trúc mã hóa dự đoán. Hình ảnh một trung tâm chỉ huy quân sự đa tầng: cấp trên liên tục gửi các bản dự báo chiến lược xuống các cấp dưới để đoán trước tình hình; các cấp dưới chỉ báo cáo lại những bất ngờ hoặc sai lệch so với dự báo thay vì gửi toàn bộ dữ liệu thô, giúp tiết kiệm tối đa năng lượng truyền tải.

**Grammar & collocations:** `propose a predictive coding architecture` — đề xuất kiến trúc mã hóa dự đoán; `hierarchical predictive coding architecture` — kiến trúc mã hóa dự đoán phân cấp; `neural implementation of predictive coding architecture` — sự thể hiện thần kinh của kiến trúc mã hóa dự đoán.

**Register & nuance:** Lý thuyết thần kinh nhận thức tính toán (Karl Friston, Andy Clark). Thuật ngữ chuyên sâu dùng để giải thích cơ chế hoạt động của não bộ như một cỗ máy suy luận Bayesian thay vì bộ thu nhận dữ liệu thụ động.

**Examples:** `The new computational model demonstrates how a predictive coding architecture minimizes metabolic energy expenditure during complex visual processing.` → Mô hình tính toán mới minh họa cách kiến trúc mã hóa dự đoán giảm thiểu mức tiêu hao năng lượng trao đổi chất trong quá trình xử lý thị giác phức tạp.

**Liên kết tiếng Hàn:** `예측 부호화 아키텍처` (予測 符号化 architecture) — kiến trúc mã hóa dự đoán.

---

## 2. precision-weighted prediction error /prɪˈsɪʒən ˈwɛtɪd prɪˈdɪkʃən ˈɛrər/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ hoặc chủ ngữ trong các phương trình toán học thần kinh (*calculate*, *modulate*, *minimize*).

**Core meaning — English:** A sensory mismatch signal scaled by the estimated reliability or uncertainty of incoming sensory channels, determining its synaptic gain and impact on belief updating.

**Core meaning & mental image — Tiếng Việt:** Sai số dự đoán được trọng số hóa độ chính xác. Hình ảnh một người kiểm tra chất lượng trong nhà máy: nếu tiếng động cơ quá ồn ào và nhiễu loạn (độ bất định cao), tiếng động lạ nhỏ sẽ bị gạt bỏ trọng số; nếu không gian hoàn toàn yên tĩnh (độ chính xác cao), một tiếng cọt kẹt nhỏ lập tức được khuếch đại để kích hoạt báo động.

**Grammar & collocations:** `compute precision-weighted prediction errors` — tính toán các sai số dự đoán có trọng số độ chính xác; `modulate precision-weighted prediction error signals` — điều hòa các tín hiệu sai số dự đoán có trọng số độ chính xác; `precision-weighted prediction error gain` — độ lợi sai số dự đoán có trọng số độ chính xác.

**Register & nuance:** Cơ chế chú ý và neuromodulation trong lý thuyết suy luận tích cực (active inference). Độ chính xác (precision) đóng vai trò là biến điều khiển độ nhạy của hệ thống thần kinh trước nhiễu loạn môi trường.

**Examples:** `Attention is mathematically formalized in this framework as the dynamic upregulation of the precision-weighted prediction error in sensory cortices.` → Sự chú ý được mô hình hóa toán học trong khung này như sự tăng cường động học của sai số dự đoán có trọng số độ chính xác tại các vùng vỏ não cảm giác.

**Liên kết tiếng Hàn:** `정밀도 가중 예측 오차` (精度 加重 予測 誤差) — sai số dự đoán có trọng số độ chính xác.

---

## 3. hierarchical active inference /ˌhaɪəˈrɑːrkɪkəl ˈæktɪv ˈɪnfərəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc phương pháp luận cốt lõi trong lý thuyết nhận thức (*formalize*, *simulate*, *underlie*).

**Core meaning — English:** A generalized neurocomputational scheme wherein an organism simultaneously optimizes internal perceptual beliefs and engages in action to actively sample the environment in order to minimize free energy across nested temporal scales.

**Core meaning & mental image — Tiếng Việt:** Suy luận tích cực phân cấp. Hình ảnh một người leo núi trong đêm mù sương: não bộ vừa liên tục đoán xem địa hình trước mặt là gì (suy luận nhận thức), vừa liên tục bước đi dò dẫng để kiểm chứng và thu thập thêm dữ liệu xúc giác (hành động tích cực), với các tầng chỉ huy từ phản xạ cơ bắp tức thời đến chiến lược hành trình dài hạn.

**Grammar & collocations:** `framework of hierarchical active inference` — khung suy luận tích cực phân cấp; `simulate hierarchical active inference` — mô phỏng suy luận tích cực phân cấp; `hierarchical active inference agent` — tác nhân suy luận tích cực phân cấp.

**Register & nuance:** Lý thuyết thống kê sinh học cấp cao (Free Energy Principle). Đây là mô hình thống nhất cho cả nhận thức, hành động, học tập và kiểm soát nội môi trong sinh học thần kinh hiện đại.

**Examples:** `Hierarchical active inference explains not only how we perceive sensory inputs but also how homeostatic reflexes and purposeful behaviors originate from a single thermodynamic imperative.` → Suy luận tích cực phân cấp giải thích không chỉ cách chúng ta nhận thức đầu vào cảm giác mà cả cách các phản xạ nội môi và hành vi có mục đích bắt nguồn từ một mệnh lệnh nhiệt động lực học duy nhất.

**Liên kết tiếng Hàn:** `계층적 능동 추론` (階層的 能動 推論) — suy luận tích cực phân cấp.

---

## 4. generative perceptual model /ˌdʒɛnəˈreɪtɪv pərˈsɛptʃuəl ˈmɑːdəl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ khi não bộ xây dựng hoặc cập nhật (*construct*, *update*, *parameterize*).

**Core meaning — English:** An internal probabilistic representation maintained by the brain that simulates the hidden causal environmental states responsible for generating sensory data.

**Core meaning & mental image — Tiếng Việt:** Mô hình sinh nhận thức. Hình ảnh một trình giả lập thực tế ảo cực kỳ tinh vi chạy ngầm bên trong đầu một phi công: trước khi nhìn thấy bảng điều khiển thực tế, trình giả lập nội tâm này đã vẽ sẵn vô số kịch bản về các biến số bay để đối chiếu liên tục với thực tại bên ngoài.

**Grammar & collocations:** `build a generative perceptual model` — xây dựng mô hình sinh nhận thức; `update the generative perceptual model` — cập nhật mô hình sinh nhận thức; `complexity of the generative perceptual model` — độ phức tạp của mô hình sinh nhận thức.

**Register & nuance:** Nhận thức luận tính toán và trí tuệ nhân tạo phỏng sinh. Mô hình sinh giả định rằng não không phải là chiếc máy ảnh chụp ảnh thực tại, mà là một nhà khoa học nội tâm luôn tạo ra các giả thuyết nhân quả để giải thích thế giới.

**Examples:** `Pathologies in the generative perceptual model are increasingly implicated in clinical conditions such as autism spectrum disorders and schizophrenia.` → Các bệnh lý trong mô hình sinh nhận thức ngày càng được cho là có liên quan đến các tình trạng lâm sàng như rối loạn phổ tự kỷ và tâm thần phân liệt.

**Liên kết tiếng Hàn:** `생성적 지각 모델` (生成的地覺 model) — mô hình sinh nhận thức.

---

## 5. top-down prior expectation /ˌtɑːp ˈdaʊn ˈpraɪər ˌɛkspɛkˈsteɪʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tác nhân điều phối nhận thức (*violate*, *bias*, *generate*).

**Core meaning — English:** A descending neural signal originating from higher-order cortical regions that encodes statistical beliefs and prior probabilities about upcoming sensory events.

**Core meaning & mental image — Tiếng Việt:** Kỳ vọng tiên nghiệm từ trên xuống. Hình ảnh một người bước vào căn phòng quen thuộc trong bóng tối: mặc dù mắt chưa nhìn rõ chi tiết, bộ não đã áp đặt sẵn hình ảnh chiếc ghế sofa và bàn cà phê quen thuộc vào không gian, khiến chúng ta hành động cứ như thể ánh sáng đang bật sáng rực rỡ.

**Grammar & collocations:** `violate top-down prior expectations` — vi phạm các kỳ vọng tiên nghiệm từ trên xuống; `influence perception via top-down prior expectations` — chi phối tri giác thông qua các kỳ vọng tiên nghiệm từ trên xuống; `strength of top-down prior expectations` — cường độ của các kỳ vọng tiên nghiệm từ trên xuống.

**Register & nuance:** Tâm lý học nhận thức và sinh lý học thần kinh thị giác. Kỳ vọng tiên nghiệm giúp tiết kiệm năng lượng tính toán bằng cách giải thích trước phần lớn cấu trúc tĩnh của môi trường.

**Examples:** `Strong top-down prior expectations can override ambiguous bottom-up visual data, leading to robust perceptual illusions in structured laboratory settings.` → Các kỳ vọng tiên nghiệm từ trên xuống mạnh mẽ có thể lấn át dữ liệu thị giác từ dưới lên mập mờ, dẫn đến các ảo ảnh tri giác vững chắc trong các thiết lập phòng thí nghiệm có cấu trúc.

**Liên kết tiếng Hàn:** `하향식 사전 기대` (下向式 事前 期待) — kỳ vọng tiên nghiệm từ trên xuống.

---

## 6. bottom-up sensory prediction error /ˌbɑːtəm ˈʌp ˈsɛnsəri prɪˈdɪkʃən ˈɛrər/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ trong các dòng truyền tin thần kinh hướng tâm (*propagate*, *suppress*, *signal*).

**Core meaning — English:** An ascending neural signal generated when incoming sensory data deviates from descending predictions, driving synaptic plasticity and belief revision in superficial cortical layers.

**Core meaning & mental image — Tiếng Việt:** Sai số dự đoán cảm giác từ dưới lên. Hình ảnh một chiếc chuông báo động réo lên inh ỏi tại tầng trệt của tòa nhà khi có một vị khách bất ngờ bước vào mà hệ thống an ninh không hề dự báo trước, buộc toàn bộ các tầng phía trên phải lập tức thay đổi phương án ứng phó.

**Grammar & collocations:** `propagate bottom-up sensory prediction errors` — truyền đi các sai số dự đoán cảm giác từ dưới lên; `suppress bottom-up sensory prediction errors` — kìm hãm các sai số dự đoán cảm giác từ dưới lên; `magnitude of bottom-up sensory prediction errors` — độ lớn của các sai số dự đoán cảm giác từ dưới lên.

**Register & nuance:** Giải phẫu sinh lý thần kinh vỏ não (laminar cortical processing). Sai số này được truyền chủ yếu qua các sợi trục xuất phát từ lớp nông (superficial layers II/III) lên các vùng não cấp cao hơn.

**Examples:** `Unpredicted acoustic shocks trigger powerful bottom-up sensory prediction errors that rapidly capture focal attention across auditory cortices.` → Những cú sốc âm thanh bất ngờ kích hoạt các sai số dự đoán cảm giác từ dưới lên mạnh mẽ, nhanh chóng thu hút sự chú ý tập trung trên các vùng vỏ não thính giác.

**Liên kết tiếng Hàn:** `상향식 감각 예측 오차` (上向式 感覺 予測 誤差) — sai số dự đoán cảm giác từ dưới lên.

---

## 7. free energy minimization principle /friː ˈɛnərdʒi ˌmɪnɪmaɪˈzeɪʃən ˈprɪnsɪpəl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc nền tảng lý thuyết cho sinh học hệ thống (*postulate*, *govern*, *unify*).

**Core meaning — English:** The overarching mathematical principle stating that any self-organizing biological system must minimize its variational free energy to resist entropic decay and maintain structural and functional integrity.

**Core meaning & mental image — Tiếng Việt:** Nguyên lý tối thiểu hóa năng lượng tự do. Hình ảnh một giọt nước hình cầu căng tròn giữa không trung: nó luôn tự động co lại ở mức năng lượng tối thiểu để chống lại sự tan rã và duy trì hình dạng ổn định trước tác động của môi trường hỗn loạn xung quanh.

**Grammar & collocations:** `formulate the free energy minimization principle` — xây dựng nguyên lý tối thiểu hóa năng lượng tự do; `governed by the free energy minimization principle` — chịu sự chi phối của nguyên lý tối thiểu hóa năng lượng tự do; `implications of the free energy minimization principle` — các hàm ý của nguyên lý tối thiểu hóa năng lượng tự do.

**Register & nuance:** Lý thuyết thống kê sinh học do Karl Friston khởi xướng. Đây được coi là khung lý thuyết thống nhất giải thích hành vi sinh học từ cấp độ tế bào đơn bào đến hệ thống thần kinh người.

**Examples:** `According to the free energy minimization principle, the brain acts as an inference engine whose primary existential mandate is the evasion of surprise.` → Theo nguyên lý tối thiểu hóa năng lượng tự do, bộ não hoạt động như một cỗ máy suy luận có sứ mệnh hiện sinh cốt lõi là né tránh sự ngạc nhiên (entropy).

**Liên kết tiếng Hàn:** `자유 에너지 최소화 원리` (自由 energy 最小化 原理) — nguyên lý tối thiểu hóa năng lượng tự do.

---

## 8. sensory attenuation gating /ˈsɛnsəri əˌtɛnjuˈeɪʃən ˈɡeɪtɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc cơ chế thần kinh học động học (*exhibit*, *impair*, *mediate*).

**Core meaning — English:** The neural mechanism by which self-generated movements attenuate expected sensory feedback, preventing one from tickling oneself and distinguishing active agency from passive perception.

**Core meaning & mental image — Tiếng Việt:** Cơ chế điều tiết giảm nhẹ cảm giác. Hình ảnh một người tự cù lét chính mình nhưng không thấy nhột chút nào, vì não bộ đã biết trước cử động của ngón tay và chủ động tắt bớt tín hiệu phản hồi cảm giác ở lòng bàn tay, giống như việc tự bịt tai trước một tiếng động do chính mình tạo ra.

**Grammar & collocations:** `exhibit sensory attenuation gating` — biểu hiện cơ chế điều tiết giảm nhẹ cảm giác; `impairment in sensory attenuation gating` — sự suy giảm trong cơ chế điều tiết giảm nhẹ cảm giác; `neural circuitry of sensory attenuation gating` — mạch thần kinh của cơ chế điều tiết giảm nhẹ cảm giác.

**Register & nuance:** Tâm lý học vận động và tâm thần học lâm sàng (thường bị suy giảm ở bệnh nhân tâm thần phân liệt, dẫn đến hiện tượng tưởng lầm hành động của mình do người khác làm).

**Examples:** `Schizophrenic patients often display aberrant sensory attenuation gating, which contributes to delusions of alien control over their own limbs.` → Bệnh nhân tâm thần phân liệt thường biểu hiện sự suy giảm cơ chế điều tiết giảm nhẹ cảm giác, góp phần gây ra những hoang tưởng về việc bị người khác kiểm soát các chi của chính mình.

**Liên kết tiếng Hàn:** `감각 감쇠 게이팅` (感覺 減衰 gating) — cơ chế điều tiết giảm nhẹ cảm giác.

---

## 9. neuromodulatory precision tuning /ˌnʊroʊˈmɑːdjəleɪtɔːri prɪˈsɪʒən ˈtuːnɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm tân ngữ hoặc quá trình sinh hóa thần kinh (*mediate*, *alter*, *dysregulate*).

**Core meaning — English:** The biochemical modulation of synaptic gain by neurotransmitters like acetylcholine, dopamine, and norepinephrine to dynamically adjust the relative trust placed in sensory inputs versus prior expectations.

**Core meaning & mental image — Tiếng Việt:** Sự tinh chỉnh độ chính xác qua điều biến thần kinh. Hình ảnh một kỹ thuật viên âm thanh vặn các nút điều chỉnh âm lượng (gain knobs) trên bàn trộn: khi có tín hiệu quan trọng cần tập trung, hóa chất thần kinh được bơm vào làm tăng độ nhạy của các kênh thu tín hiệu như một thấu kính zoom sắc nét.

**Grammar & collocations:** `achieve neuromodulatory precision tuning` — đạt được sự tinh chỉnh độ chính xác qua điều biến thần kinh; `neuromodulatory precision tuning of synapses` — sự tinh chỉnh độ chính xác qua điều biến thần kinh của các khớp thần kinh; `disorder of neuromodulatory precision tuning` — rối loạn sự tinh chỉnh độ chính xác qua điều biến thần kinh.

**Register & nuance:** Dược lý thần kinh và lý thuyết mã hóa dự đoán phân tử. Giải thích cách các chất dẫn truyền thần kinh trung ương điều khiển sự chú ý và độ nhạy cảm giác ở mức độ synapse.

**Examples:** `Acetylcholine is hypothesized to drive neuromodulatory precision tuning by amplifying bottom-up sensory gain during states of high attentional demand.` → Acetylcholine được giả thuyết là thúc đẩy sự tinh chỉnh độ chính xác qua điều biến thần kinh bằng cách khuếch đại độ lợi cảm giác từ dưới lên trong các trạng thái đòi hỏi sự chú ý cao độ.

**Liên kết tiếng Hàn:** `신경조절적 정밀도 조율` (神經調節的 精度 調律) — sự tinh chỉnh độ chính xác qua điều biến thần kinh.

---

## 10. cortical laminar segregation /ˈkɔːrtɪkl ˈlæmɪnər ˌsɛɡrɪˈɡeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ trong các nghiên cứu giải phẫu cấu trúc vỏ não (*reveal*, *maintain*, *exhibit*).

**Core meaning — English:** The anatomical and functional separation of ascending prediction error signals (arising from superficial cortical layers) and descending prediction signals (originating from deep cortical layers).

**Core meaning & mental image — Tiếng Việt:** Sự phân tách theo lớp vỏ não. Hình ảnh một tòa nhà chung cư cao tầng có quy hoạch nghiêm ngặt: tầng trệt và lầu một chuyên tiếp nhận và phản hồi thông tin khiếu nại từ bên ngoài (lớp nông truyền lỗi dự đoán), trong khi tầng thượng và các tầng sâu chuyên phát ra các chỉ thị điều hành xuống dưới (lớp sâu truyền dự đoán), tuyệt đối không giẫm chân lên nhau.

**Grammar & collocations:** `maintain cortical laminar segregation` — duy trì sự phân tách theo lớp vỏ não; `functional role of cortical laminar segregation` — vai trò chức năng của sự phân tách theo lớp vỏ não; `microscopic examination of cortical laminar segregation` — kiểm tra vi thể sự phân tách theo lớp vỏ não.

**Register & nuance:** Giải phẫu thần kinh vi thể (micro-circuitry of the neocortex). Nền tảng cấu trúc giúp hệ thống thần kinh xử lý đồng thời hai chiều thông tin ngược chiều nhau mà không bị nhiễu tín hiệu.

**Examples:** `Ultra-high-field functional MRI at 7 Tesla allows neuroscientists to non-invasively probe cortical laminar segregation in human sensory processing.` → Chụp cộng hưởng từ chức năng siêu trường cực cao ở mức 7 Tesla cho phép các nhà thần kinh học thăm dò không xâm lấn sự phân tách theo lớp vỏ não trong quá trình xử lý cảm giác ở con người.

**Liên kết tiếng Hàn:** `피질 층류 분리` (皮質 層流 分離) — sự phân tách theo lớp vỏ não.

---

## 11. motor command reflex cancellation /ˈmoʊtər kəˈmænd ˈriːflɛks ˌkænsəˈleɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm tân ngữ hoặc cơ chế điều hòa vận động (*execute*, *mediate*, *study*).

**Core meaning — English:** The predictive dampening of spinal reflex arcs during voluntary movement execution to prevent self-induced sensory signals from triggering unwanted corrective muscle contractions.

**Core meaning & mental image — Tiếng Việt:** Sự triệt tiêu phản xạ lệnh vận động. Hình ảnh một tay súng đang nín thở bóp cò: hệ thống thần kinh chủ động ngắt hoặc kìm hãm các cung phản xạ giật mình ở tủy sống để cánh tay không bị rung lên bởi chính tiếng nổ hay chuyển động cơ bắp của mình.

**Grammar & collocations:** `execute motor command reflex cancellation` — thực hiện sự triệt tiêu phản xạ lệnh vận động; `efficiency of motor command reflex cancellation` — hiệu suất của sự triệt tiêu phản xạ lệnh vận động; `neural basis of motor command reflex cancellation` — cơ sở thần kinh của sự triệt tiêu phản xạ lệnh vận động.

**Register & nuance:** Sinh lý học thần kinh vận động. Đảm bảo các cử động chủ ý được thực hiện trơn tru mà không bị cản trở bởi các phản xạ căng cơ cục bộ vốn dành cho tác nhân ngoại lai.

**Examples:** `Precise motor command reflex cancellation enables athletes to execute lightning-fast coordinated movements without destabilizing postural reflexes.` → Sự triệt tiêu phản xạ lệnh vận động chính xác cho phép các vận động viên thực hiện các động tác phối hợp nhanh như chớp mà không làm mất ổn định các phản xạ giữ tư thế.

**Liên kết tiếng Hàn:** `운동 명령 반사 상쇄` (運動 命令 反射 相殺) — sự triệt tiêu phản xạ lệnh vận động.

---

## 12. Bayesian perceptual inference /ˈbeɪziən pərˈsɛptʃuəl ˈɪnfərəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc mô hình toán học nhận thức (*model*, *illustrate*, *underpin*).

**Core meaning — English:** The mathematical process by which the brain combines noisy sensory likelihoods with prior beliefs to compute optimal posterior estimates of external environmental causes.

**Core meaning & mental image — Tiếng Việt:** Suy luận tri giác theo định lý Bayes. Hình ảnh một thám tử tài ba đang cân nhắc giữa bằng chứng mờ nhạt từ hiện trường vụ án (độ likelihood) và hồ sơ tiền án của nghi phạm (prior belief) để đưa ra kết luận chính xác nhất về hung thủ (posterior).

**Grammar & collocations:** `model Bayesian perceptual inference` — mô hình hóa suy luận tri giác theo định lý Bayes; `principles of Bayesian perceptual inference` — các nguyên tắc của suy luận tri giác theo định lý Bayes; `computational principles of Bayesian perceptual inference` — các nguyên tắc tính toán của suy luận tri giác theo định lý Bayes.

**Register & nuance:** Trí tuệ nhân tạo và khoa học nhận thức toán học (Helmholtz, Thomas Bayes). Khung lý thuyết nền tảng cho mọi hoạt động giải mã thực tại của não bộ.

**Examples:** `Optical illusions reveal how Bayesian perceptual inference automatically weighs sensory ambiguity against learned statistical regularities of the natural world.` → Các ảo ảnh quang học tiết lộ cách suy luận tri giác theo định lý Bayes tự động cân nhắc sự mập mờ của cảm giác với các quy luật thống kê đã học của thế giới tự nhiên.

**Liên kết tiếng Hàn:** `베이즈 지각 추론` (Bayes 知覺 推論) — suy luận tri giác theo định lý Bayes.

---

## ## Review in context: Part 1 (items 1–12 bolded **headword**) + Vietnamese translation

Recent advances in theoretical neuroscience suggest that the brain functions as a complex **predictive coding architecture** (1), continuously issuing top-down expectations and minimizing **precision-weighted prediction errors** (2) through a overarching framework of **hierarchical active inference** (3). At the heart of this system lies a sophisticated **generative perceptual model** (4) that shapes conscious experience by balancing **top-down prior expectations** (5) against ascending **bottom-up sensory prediction errors** (6). This thermodynamic optimization complies strictly with the **free energy minimization principle** (7), ensuring biological systems resist entropic decay. During voluntary actions, specialized mechanisms such as **sensory attenuation gating** (8) and **motor command reflex cancellation** (11) prevent self-generated sensations from disrupting purposeful behavior, while **neuromodulatory precision tuning** (9) dynamically adjusts synaptic gain across regions characterized by strict **cortical laminar segregation** (10). Ultimately, these computational processes instantiate **Bayesian perceptual inference** (12), allowing agents to navigate an uncertain world with remarkable adaptive precision.

**Bản dịch tiếng Việt:**
Những tiến bộ gần đây trong lĩnh vực thần kinh học lý thuyết cho thấy bộ não hoạt động như một **kiến trúc mã hóa dự đoán** (1) phức tạp, liên tục phát ra các kỳ vọng từ trên xuống và tối thiểu hóa các **sai số dự đoán có trọng số độ chính xác** (2) thông qua khung tổng thể về **suy luận tích cực phân cấp** (3). Trọng tâm của hệ thống này là một **mô hình sinh nhận thức** (4) tinh vi, định hình trải nghiệm ý thức bằng cách cân bằng giữa **kỳ vọng tiên nghiệm từ trên xuống** (5) và các **sai số dự đoán cảm giác từ dưới lên** (6) hướng tâm. Sự tối ưu hóa nhiệt động lực học này tuân thủ nghiêm ngặt **nguyên lý tối thiểu hóa năng lượng tự do** (7), đảm bảo các hệ thống sinh học chống lại sự tan rã entropy. Trong các hành động tự chủ, các cơ chế chuyên biệt như **cơ chế điều tiết giảm nhẹ cảm giác** (8) và **sự triệt tiêu phản xạ lệnh vận động** (11) ngăn cản các cảm giác do chính cơ thể tạo ra làm gián đoạn hành vi có mục đích, trong khi **sự tinh chỉnh độ chính xác qua điều biến thần kinh** (9) điều chỉnh động học độ lợi synapse trên các vùng được đặc trưng bởi **sự phân tách theo lớp vỏ não** (10) nghiêm ngặt. Cuối cùng, các quá trình tính toán này thể hiện **suy luận tri giác theo định lý Bayes** (12), cho phép các tác nhân điều hướng thế giới đầy bất biến với độ chính xác thích ứng đáng kinh ngạc.

---

## 13. variational message passing /ˈvɛəriˈeɪʃənl ˈmɛsɪdʒ ˈpæsɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm thuật ngữ kỹ thuật trong giải thuật tính toán thần kinh (*implement*, *execute*, *approximate*).

**Core meaning — English:** An iterative message-passing algorithm used on factor graphs to compute approximate Bayesian posterior distributions by minimizing free energy across coupled neural populations.

**Core meaning & mental image — Tiếng Việt:** Thuật toán truyền thông điệp biến phân. Hình ảnh một mạng lưới các trạm phát thanh địa phương liên tục truyền các bản tin cập nhật dự báo thời tiết cho nhau qua loa phát thanh, mỗi trạm tinh chỉnh lại con số của mình cho đến khi toàn bộ mạng lưới đạt được sự đồng thuận tối ưu.

**Grammar & collocations:** `implement variational message passing` — thực hiện thuật toán truyền thông điệp biến phân; `approximate via variational message passing` — xấp xỉ thông qua truyền thông điệp biến phân; `equations of variational message passing` — các phương trình truyền thông điệp biến phân.

**Register & nuance:** Toán học thống kê và giải thuật máy tính phỏng sinh. Cung cấp cơ chế sinh học khả thi về cách các quần thể neuron trao đổi thông tin để tính toán xác suất.

**Examples:** `In neurocomputational simulations, variational message passing mimics how cortical microcircuits perform approximate Bayesian inference in real time.` → Trong các mô phỏng tính toán thần kinh, truyền thông điệp biến phân bắt chước cách các vi mạch vỏ não thực hiện suy luận Bayes xấp xỉ theo thời gian thực.

**Liên kết tiếng Hàn:** `변분 메시지 패싱` (變分 message passing) — truyền thông điệp biến phân.

---

## 14. canonical microcircuit prediction /kəˈnɑːnɪkl ˈmaɪkroʊsɜːrkɪt prɪˈdɪkʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc cấu trúc mạch thần kinh chuẩn (*model*, *instantiate*, *propose*).

**Core meaning — English:** The stereotyped six-layered neocortical circuit motif wherein superficial and deep pyramidal neurons interact locally with inhibitory interneurons to compute and update prediction errors.

**Core meaning & mental image — Tiếng Việt:** Dự đoán vi mạch chuẩn. Hình ảnh một mô-đun vi mạch lặp đi lặp lại hàng triệu lần khắp vỏ não giống như những viên gạch Lego tiêu chuẩn: mỗi viên gạch đều có sẵn các bộ phận thu nhận tín hiệu cấp trên, xử lý tín hiệu cấp dưới và phát chuông cảnh báo khi có sai lệch.

**Grammar & collocations:** `canonical microcircuit prediction model` — mô hình dự đoán vi mạch chuẩn; `architecture of the canonical microcircuit prediction` — kiến trúc của dự đoán vi mạch chuẩn; `dysfunction in canonical microcircuit prediction` — rối loạn trong dự đoán vi mạch chuẩn.

**Register & nuance:** Sinh học thần kinh hệ thống (Bastos et al.). Cung cấp cơ sở giải phẫu học thần kinh cụ thể cho lý thuyết mã hóa dự đoán.

**Examples:** `The canonical microcircuit prediction framework maps specific laminar layers to distinct computational roles in predictive processing.` → Khung dự đoán vi mạch chuẩn ánh xạ các lớp laminar cụ thể vào các vai trò tính toán riêng biệt trong quá trình xử lý dự đoán.

**Liên kết tiếng Hàn:** `정형화된 미세회로 예측` (定型化된 微細回路 予測) — dự đoán vi mạch chuẩn.

---

## 15. empirical Bayes hierarchy /ɛmˈpɪrɪkl ˈbeɪz ˈhaɪərɑːrki/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm mô hình thống kê phân cấp (*construct*, *estimate*, *apply*).

**Core meaning — English:** A statistical framework in which priors at higher levels of a hierarchical model are estimated directly from data at lower levels, enabling self-consistent multi-scale inference.

**Core meaning & mental image — Tiếng Việt:** Cấp bậc Bayes thực nghiệm. Hình ảnh một chiếc thang dây nhiều bậc: mỗi bậc phía trên không lơ lửng vô căn cứ mà dựa trực tiếp vào trọng lượng và lực kéo của các bậc phía dưới để tự điều chỉnh độ căng vững chắc cho toàn bộ chiếc thang.

**Grammar & collocations:** `formulate an empirical Bayes hierarchy` — xây dựng một cấp bậc Bayes thực nghiệm; `parameters of the empirical Bayes hierarchy` — các tham số của cấp bậc Bayes thực nghiệm; `estimation in empirical Bayes hierarchy` — sự ước lượng trong cấp bậc Bayes thực nghiệm.

**Register & nuance:** Thống kê toán học và hình ảnh học thần kinh (Friston SPM). Cho phép mô hình hóa các hệ thống phức tạp mà không cần giả định các tiên nghiệm hoàn toàn áp đặt từ bên ngoài.

**Examples:** `An empirical Bayes hierarchy allows the brain to optimize its perceptual hypotheses by using lower-level variances to constrain higher-level parameters.` → Cấp bậc Bayes thực nghiệm cho phép bộ não tối ưu hóa các giả thuyết tri giác của mình bằng cách sử dụng các phương sai cấp thấp để ràng buộc các tham số cấp cao.

**Liên kết tiếng Hàn:** `경험적 베이즈 계층` (經驗적 Bayes 階層) — cấp bậc Bayes thực nghiệm.

---

## 16. interoceptive predictive inference /ˌɪntəroʊˈsɛptɪv prɪˈdɪktɪv ˈɪnfərəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc cơ chế điều hòa nội tạng (*regulate*, *mediate*, *model*).

**Core meaning — English:** The predictive processing mechanism by which the central nervous system anticipates and regulates internal bodily states, visceral sensations, and autonomic physiological needs.

**Core meaning & mental image — Tiếng Việt:** Suy luận dự đoán nội thụ cảm. Hình ảnh một hệ thống điều hòa thông minh trong nhà kính nông nghiệp: máy tính không đợi nhiệt độ tụt sâu mới bật sưởi, mà dự đoán trước thời tiết lạnh ban đêm để tự động điều chỉnh nhiệt độ hơi ấm trước khi cảm giác lạnh thực sự chạm tới các luống cây bên trong.

**Grammar & collocations:** `engage in interoceptive predictive inference` — tham gia vào suy luận dự đoán nội thụ cảm; `model of interoceptive predictive inference` — mô hình suy luận dự đoán nội thụ cảm; `disorders of interoceptive predictive inference` — các rối loạn suy luận dự đoán nội thụ cảm.

**Register & nuance:** Tâm lý học thần kinh cảm xúc và y học tâm thể (Lisa Feldman Barrett, Anil Seth). Giải thích cơ chế cảm xúc, sự lo âu và cảm giác cơ thể (như nhịp tim, nhịp thở).

**Examples:** `Interoceptive predictive inference plays a critical role in generating emotional feelings by predicting visceral responses before they fully manifest in the body.` → Suy luận dự đoán nội thụ cảm đóng vai trò quan trọng trong việc tạo ra cảm xúc bằng cách dự đoán các phản ứng nội tạng trước khi chúng biểu hiện hoàn toàn trong cơ thể.

**Liên kết tiếng Hàn:** `내수용성 예측 추론` (內受용성 予測 推論) — suy luận dự đoán nội thụ cảm.

---

## 17. epistemic foraging curiosity /ˌɛpɪˈstɛmɪk ˈfɔːrɪdʒɪŋ ˌkjʊriˈɑːsəti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc động lực hành vi khám phá (*drive*, *exhibit*, *quantify*).

**Core meaning — English:** The active sampling of ambiguous environments driven by the imperative to reduce uncertainty and acquire information that improves the brain's generative model.

**Core meaning & mental image — Tiếng Việt:** Sự tò mò tìm kiếm nhận thức. Hình ảnh một chú mèo tò mò vạch chiếc hộp kín để nhìn vào bên trong: chú không tìm thức ăn hay nước uống ngay lập tức, mà đang tìm kiếm thông tin thuần túy để giải tỏa sự mơ hồ và làm sáng tỏ bí ẩn trong đầu.

**Grammar & collocations:** `drive epistemic foraging curiosity` — thúc đẩy sự tò mò tìm kiếm nhận thức; `value of epistemic foraging curiosity` — giá trị của sự tò mò tìm kiếm nhận thức; `neural substrate of epistemic foraging curiosity` — nền tảng thần kinh của sự tò mò tìm kiếm nhận thức.

**Register & nuance:** Hành vi học tính toán và lý thuyết suy luận tích cực (epistemic value vs. pragmatic value). Giải thích động lực học tập và khám phá của con người và động vật.

**Examples:** `Epistemic foraging curiosity motivates organisms to explore novel environments, trading immediate metabolic comfort for long-term model reduction of uncertainty.` → Sự tò mò tìm kiếm nhận thức thúc đẩy các sinh vật khám phá môi trường mới, đánh đổi sự thoải mái trao đổi chất tức thời để giảm thiểu sự bất định lâu dài của mô hình.

**Liên kết tiếng Hàn:** `인식적 탐색 호기심` (認識的 探索 好奇心) — sự tò mò tìm kiếm nhận thức.

---

## 18. perceptual belief updating /pərˈsɛptʃuəl bɪˈliːf ˌʌpˈdeɪtɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm tân ngữ hoặc quá trình nhận thức (*facilitate*, *impair*, *undergo*).

**Core meaning — English:** The dynamic revision of internal mental models and probability distributions in response to weighted prediction errors and new environmental evidence.

**Core meaning & mental image — Tiếng Việt:** Sự cập nhật niềm tin tri giác. Hình ảnh một nhà thám hiểm đang sửa đổi bản đồ địa lý ngay trên đường đi: cứ mỗi lần gặp một ngã rẽ thực tế khác với dự tính trên giấy, ông liền gạch xóa và vẽ lại đường đi mới một cách linh hoạt.

**Grammar & collocations:** `facilitate perceptual belief updating` — thúc đẩy sự cập nhật niềm tin tri giác; `rate of perceptual belief updating` — tốc độ cập nhật niềm tin tri giác; `impairment in perceptual belief updating` — sự suy giảm trong việc cập nhật niềm tin tri giác.

**Register & nuance:** Tâm lý học nhận thức và tâm thần học tính toán. Quá trình này bị đình trệ trong các rối loạn cố chấp (rigidity) hoặc diễn giải sai lệch trong các bệnh lý tâm thần.

**Examples:** `Flexible perceptual belief updating allows adaptive agents to adjust rapidly to sudden environmental shifts without falling prey to persistent delusions.` → Sự cập nhật niềm tin tri giác linh hoạt cho phép các tác nhân thích ứng điều chỉnh nhanh chóng trước những biến động môi trường đột ngột mà không rơi vào bẫy hoang tưởng cố chấp.

**Liên kết tiếng Hàn:** `지각적 신념 갱신` (知覺的 信念 更新) — sự cập nhật niềm tin tri giác.

---

## 19. dopaminergic precision encoding /ˌdoʊpəˈmɜːrdʒɪk prɪˈsɪʒən ɪnˈkoʊdɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc cơ chế hóa học thần kinh trung ương (*modulate*, *mediate*, *subserve*).

**Core meaning — English:** The signaling role of dopamine in modulating synaptic gain and encoding the reliability or precision of prediction errors across cortico-striatal circuits.

**Core meaning & mental image — Tiếng Việt:** Sự mã hóa độ chính xác nhờ dopamin. Hình ảnh một nút chỉnh âm lượng màu vàng sáng được kích hoạt bởi dòng suối dopamine, làm bừng sáng và nâng tầm quan trọng của một tín hiệu cụ thể giữa hàng ngàn tín hiệu nhiễu loạn trong não.

**Grammar & collocations:** `mediate dopaminergic precision encoding` — làm trung gian cho sự mã hóa độ chính xác nhờ dopamin; `dysfunction in dopaminergic precision encoding` — rối loạn trong sự mã hóa độ chính xác nhờ dopamin; `role of dopaminergic precision encoding` — vai trò của sự mã hóa độ chính xác nhờ dopamin.

**Register & nuance:** Dược lý thần kinh hiện đại (Friston, Schwartenbeck). Đổi mới cách nhìn về dopamine: không chỉ là chất dẫn truyền "phần thưởng" (reward) đơn thuần, mà là tín hiệu điều tiết độ chính xác của sai số dự đoán.

**Examples:** `Contemporary computational psychiatry posits that aberrant dopaminergic precision encoding underlies the formation of aberrant salience in psychotic disorders.` → Tâm thần học tính toán đương đại giả định rằng sự mã hóa độ chính xác nhờ dopamin bất thường là cơ sở cho sự hình thành độ nổi bật sai lệch (aberrant salience) trong các rối loạn tâm thần.

**Liên kết tiếng Hàn:** `도파민성 정밀도 부호화` (dopamine性 精度 符号化) — sự mã hóa độ chính xác nhờ dopamin.

---

## 20. predictive sensory attenuation /prɪˈdɪktɪv ˈsɛnsəri əˌtɛnjuˈeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc cơ chế thần kinh (*exhibit*, *disrupt*, *quantify*).

**Core meaning — English:** The anticipatory suppression of neural responses to expected self-produced stimuli, separating active bodily movements from external environmental disturbances.

**Core meaning & mental image — Tiếng Việt:** Sự giảm nhẹ cảm giác mang tính dự đoán. Hình ảnh chiếc xe ô tô tự động bật chế độ lọc tiếng ồn động cơ bên trong cabin trước khi xe lăn bánh, giúp hành khách không phải nghe tiếng gầm rú cơ khí khó chịu suốt hành trình.

**Grammar & collocations:** `exhibit predictive sensory attenuation` — thể hiện sự giảm nhẹ cảm giác mang tính dự đoán; `loss of predictive sensory attenuation` — sự mất đi của sự giảm nhẹ cảm giác mang tính dự đoán; `measure predictive sensory attenuation` — đo lường sự giảm nhẹ cảm giác mang tính dự đoán.

**Register & nuance:** Sinh lý thần kinh vận động và cảm giác. Cơ chế cốt lõi phân biệt "cái tôi" với "thế giới bên ngoài".

**Examples:** `Electroencephalography studies demonstrate robust predictive sensory attenuation during self-initiated tactile stimulation compared to externally applied touch.` → Các nghiên cứu điện não đồ chứng minh sự giảm nhẹ cảm giác mang tính dự đoán mạnh mẽ trong kích thích xúc giác do chính bản thân khởi xướng so với chạm từ bên ngoài áp vào.

**Liên kết tiếng Hàn:** `예측적 감각 감쇠` (予測的 感覺 減衰) — sự giảm nhẹ cảm giác mang tính dự đoán.

---

## 21. cybernetic loop closure /ˌsaɪbərˈnɛtɪk luːp ˈkloʊʒər/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ hoặc trạng thái hệ thống điều khiển (*achieve*, *maintain*, *establish*).

**Core meaning — English:** The integration of perception and action into a continuous bidirectional feedback loop that stabilizes the agent-environment dynamic system against entropic disruptions.

**Core meaning & mental image — Tiếng Việt:** Sự khép kín vòng lặp điều khiển học. Hình ảnh chiếc máy điều hòa nhiệt độ thông minh tự động đo nhiệt độ phòng, điều chỉnh luồng gió, rồi lại đọc lại nhiệt độ mới tạo ra một vòng tròn khép kín hoàn hảo không có điểm đứt gãy giữa máy và căn phòng.

**Grammar & collocations:** `achieve cybernetic loop closure` — đạt được sự khép kín vòng lặp điều khiển học; `maintain cybernetic loop closure` — duy trì sự khép kín vòng lặp điều khiển học; `stability of cybernetic loop closure` — tính ổn định của sự khép kín vòng lặp điều khiển học.

**Register & nuance:** Lý thuyết điều khiển học (cybernetics) và sinh học hệ thống. Mô tả cách sinh vật duy trì trạng thái hằng định nội môi qua tương tác vòng tròn liên tục với môi trường.

**Examples:** `Successful robotic control systems rely on strict cybernetic loop closure to adapt fluidly to unpredictable physical obstructions.` → Các hệ thống điều khiển robot thành công phụ thuộc vào sự khép kín vòng lặp điều khiển học nghiêm ngặt để thích ứng uyển chuyển với các vật cản vật lý không lường trước.

**Liên kết tiếng Hàn:** `사이버네틱 루프 폐쇄` (cybernetic loop 閉鎖) — sự khép kín vòng lặp điều khiển học.

---

## 22. cognitive allostasis regulation /ˈkɑːɡnətɪv ˌæləˈstoʊsɪs ˌrɛɡjuˈleɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc cơ chế điều tiết sinh lý thần kinh (*orchestrate*, *maintain*, *model*).

**Core meaning — English:** The predictive physiological regulation whereby the brain anticipates future metabolic and energetic demands and adjusts internal bodily resources proactively rather than reactively.

**Core meaning & mental image — Tiếng Việt:** Sự điều tiết ổn định nội môi dự chủ. Hình ảnh một người quản lý kho vận thông minh không đợi đến khi khách hàng đến mua sạch hàng mới gọi xe chở tới, mà dự đoán trước đợt cao điểm ngày lễ để chủ động điều hàng về kho trước từ tuần trước.

**Grammar & collocations:** `engage in cognitive allostasis regulation` — tham gia vào sự điều tiết ổn định nội môi dự chủ; `mechanisms of cognitive allostasis regulation` — các cơ chế điều tiết ổn định nội môi dự chủ; `dysregulation of cognitive allostasis regulation` — sự rối loạn điều tiết ổn định nội môi dự chủ.

**Register & nuance:** Y học tâm thể và khoa học thần kinh nhận thức (Sterling & Eyer). Phân biệt với homeostasis (phản ứng thụ động sau khi mất cân bằng); allostasis là lập kế hoạch giữ cân bằng trước dựa trên dự đoán.

**Examples:** `Cognitive allostasis regulation allows elite athletes to mobilize glucose reserves before a grueling race even commences.` → Sự điều tiết ổn định nội môi dự chủ cho phép các vận động viên đỉnh cao huy động các dự trữ glucose trước khi một cuộc đua khắc nghiệt thực sự bắt đầu.

**Liên kết tiếng Hàn:** `인지적 알로스타시스 조절` (認知的 allostasis 調節) — sự điều tiết ổn định nội môi dự chủ.

---

## 23. sensory likelihood mapping /ˈsɛnsəri ˈlaɪklihʊd ˈmæpɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm tân ngữ hoặc quá trình tính toán thần kinh (*compute*, *generate*, *estimate*).

**Core meaning — English:** The neural computation of the probability distribution of raw sensory evidence given various hidden environmental causes.

**Core meaning & mental image — Tiếng Việt:** Bản đồ xác suất khả năng cảm giác. Hình ảnh một radar quét sóng liên tục trên màn hình tròn: các chấm sáng mờ nhạt xuất hiện thể hiện mức độ xác suất khả năng xuất hiện của mục tiêu ở từng góc phương vị khác nhau.

**Grammar & collocations:** `compute sensory likelihood mapping` — tính toán bản đồ xác suất khả năng cảm giác; `neural circuitry for sensory likelihood mapping` — mạch thần kinh cho bản đồ xác suất khả năng cảm giác; `precision of sensory likelihood mapping` — độ chính xác của bản đồ xác suất khả năng cảm giác.

**Register & nuance:** Toán học nhận thức và xử lý tín hiệu thần kinh. Thành phần cốt lõi trong mô hình suy luận Bayes của tri giác.

**Examples:** `Primary visual areas perform rapid sensory likelihood mapping to convert ambiguous retinal light distributions into probabilistic spatial representations.` → Các vùng thị giác sơ cấp thực hiện bản đồ xác suất khả năng cảm giác nhanh chóng để chuyển đổi các phân bố ánh sáng võng mạc mập mờ thành các biểu diễn không gian xác suất.

**Liên kết tiếng Hàn:** `감각 가능도 매핑` (感覺 可能度 mapping) — bản đồ xác suất khả năng cảm giác.

---

## 24. somatosensory prediction matching /ˌsoʊmoʊˈsɛnsəri prɪˈdɪkʃən ˈmætʃɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm tân ngữ hoặc quá trình kiểm tra xúc giác (*evaluate*, *execute*, *monitor*).

**Core meaning — English:** The neural comparison process between expected tactile feedback and actual cutaneous sensations to evaluate body ownership and spatial interaction.

**Core meaning & mental image — Tiếng Việt:** Sự khớp nối dự đoán xúc giác. Hình ảnh một người thợ mộc sờ tay vào bề mặt gỗ mịn: bộ não liên tục đối chiếu cảm giác chạm thực tế dưới các đầu ngón tay với hình dung trong đầu xem mặt gỗ đã đạt độ nhẵn hoàn hảo chưa.

**Grammar & collocations:** `facilitate somatosensory prediction matching` — thúc đẩy sự khớp nối dự đoán xúc giác; `errors in somatosensory prediction matching` — các lỗi trong sự khớp nối dự đoán xúc giác; `neural correlates of somatosensory prediction matching` — các tương quan thần kinh của sự khớp nối dự đoán xúc giác.

**Register & nuance:** Thần kinh học xúc giác và nhận thức thể xác (somatosception). Đảm bảo cảm giác cơ thể phản hồi đúng với dự tính thần kinh vận động.

**Examples:** `Impaired somatosensory prediction matching underlies the rubber hand illusion breakdown observed in certain neurological examinations.` → Sự khớp nối dự đoán xúc giác bị suy giảm là nguyên nhân làm sụp đổ ảo ảnh bàn tay cao su được quan sát thấy trong một số cuộc kiểm tra thần kinh học.

**Liên kết tiếng Hàn:** `체성감각 예측 매칭` (体性感覺 予測 matching) — sự khớp nối dự đoán xúc giác.

---

## 25. computational neuropsychiatry model /ˌkɑːmpjuˈteɪʃənl ˌnʊroʊsaɪkiˈætri ˈmɑːdəl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc khung lý thuyết chẩn đoán tâm thần mới (*develop*, *apply*, *validate*).

**Core meaning — English:** A formal mathematical and algorithmic framework that conceptualizes psychiatric disorders as aberrant belief updating, disrupted precision weighting, or faulty hierarchical inference.

**Core meaning & mental image — Tiếng Việt:** Mô hình tâm thần kinh học tính toán. Hình ảnh một phòng thí nghiệm chẩn đoán y khoa kỹ thuật số: thay vì chỉ dựa vào các triệu chứng bên ngoài, bác sĩ sử dụng các thuật toán giải mã phương trình toán học thần kinh để tìm ra chính xác lỗi phần cứng hoặc phần mềm tính toán nào trong não đang gây ra bệnh lý tâm thần.

**Grammar & collocations:** `develop a computational neuropsychiatry model` — phát triển mô hình tâm thần kinh học tính toán; `clinical applications of computational neuropsychiatry models` — các ứng dụng lâm sàng của mô hình tâm thần kinh học tính toán; `validity of the computational neuropsychiatry model` — tính hợp lệ của mô hình tâm thần kinh học tính toán.

**Register & nuance:** Tâm thần học hiện đại và y học chuyển dịch (Friston, Montague, Paulus). Cuộc cách mạng thay đổi cách hiểu và điều trị các bệnh tâm thần từ mô tả triệu chứng sang định lượng cơ chế tính toán.

**Examples:** `A computational neuropsychiatry model of psychosis recasts hallucinations not as random noise, but as over-weighted prior expectations overriding sensory evidence.` → Mô hình tâm thần kinh học tính toán về chứng loạn thần coi các triệu chứng ảo giác không phải là tiếng ồn ngẫu nhiên, mà là các kỳ vọng tiên nghiệm có trọng số quá mức lấn át cả bằng chứng cảm giác.

**Liên kết tiếng Hàn:** `전산 신경정신과 모델` (電算 神經精神科 model) — mô hình tâm thần kinh học tính toán.

---

## ## Review in context: Part 2 (items 13–25 bolded **headword**) + Vietnamese translation

Advanced theoretical formulations often employ **variational message passing** (13) to approximate belief updates within the **canonical microcircuit prediction** (14) framework, operating across an **empirical Bayes hierarchy** (15). Beyond exteroception, **interoceptive predictive inference** (16) regulates visceral states and drives **epistemic foraging curiosity** (17), ensuring that **perceptual belief updating** (18) remains responsive to environmental shifts. Within these cortico-striatal circuits, **dopaminergic precision encoding** (19) adjusts synaptic gains, reinforcing **predictive sensory attenuation** (20) to maintain a stable **cybernetic loop closure** (21). Furthermore, proactive physiological adjustments are orchestrated through **cognitive allostasis regulation** (22), while primary cortices execute **sensory likelihood mapping** (23) and **somatosensory prediction matching** (24) to verify bodily interactions. Together, these breakthroughs converge into a powerful **computational neuropsychiatry model** (25), revolutionizing our understanding of mental health and neurological dysfunction.

**Bản dịch tiếng Việt:**
Các công thức lý thuyết tiên tiến thường áp dụng **thuật toán truyền thông điệp biến phân** (13) để xấp xỉ các cập nhật niềm tin trong khung **dự đoán vi mạch chuẩn** (14), hoạt động xuyên suốt một **cấp bậc Bayes thực nghiệm** (15). Vượt ra ngoài cảm giác ngoại vi, **suy luận dự đoán nội thụ cảm** (16) điều hòa các trạng thái nội tạng và thúc đẩy **sự tò mò tìm kiếm nhận thức** (17), đảm bảo rằng **sự cập nhật niềm tin tri giác** (18) luôn phản hồi nhạy bén với các biến động môi trường. Bên trong các mạch vỏ não - thể vân này, **sự mã hóa độ chính xác nhờ dopamin** (19) điều chỉnh độ lợi synapse, củng cố **sự giảm nhẹ cảm giác mang tính dự đoán** (20) để duy trì một **sự khép kín vòng lặp điều khiển học** (21) ổn định. Hơn nữa, các điều chỉnh sinh lý chủ động được điều phối thông qua **sự điều tiết ổn định nội môi dự chủ** (22), trong khi các vùng vỏ não sơ cấp thực hiện **bản đồ xác suất khả năng cảm giác** (23) và **sự khớp nối dự đoán xúc giác** (24) để xác minh các tương tác cơ thể. Cùng nhau, những bước đột phá này hội tụ thành một **mô hình tâm thần kinh học tính toán** (25) mạnh mẽ, cách mạng hóa sự hiểu biết của chúng ta về sức khỏe tâm thần và rối loạn thần kinh.
