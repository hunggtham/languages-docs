# B2 Vocabulary 07 — Multi-criteria decision analysis, stakeholder preference weighting, and sensitivity testing

Trong các dự án kỹ thuật quy mô lớn, đầu tư công và hoạch định chiến lược kinh doanh, việc đưa ra quyết định hiếm khi chỉ dựa trên một yếu tố duy nhất như chi phí hay lợi nhuận, mà đòi hỏi phải dung hòa đồng thời nhiều mục tiêu mâu thuẫn: an toàn kỹ thuật, tác động môi trường, sự chấp thuận của cộng đồng và độ bền vững lâu dài. Phương pháp phân tích quyết định đa tiêu chí (*multi-criteria decision analysis — MCDA*) cung cấp một khung khổ toán học và quản trị chặt chẽ giúp lượng hóa các đánh giá định tính, cân bằng các ưu tiên của các bên liên quan và kiểm định độ bền vững của quyết định trước những biến động khó lường. Để thảo luận sâu về mô hình hóa quyết định, kỹ thuật so sánh cặp và kiểm tra độ nhạy ở trình độ B2, người học cần làm chủ các thuật ngữ chuyên môn về khoa học quản lý, lý thuyết tối ưu hóa và phân tích rủi ro. Bài học này kết nối 25 khái niệm then chốt thành hai bức tranh chiến lược hoàn chỉnh: **MCDA Structuring & Weighting** (từ `multi-criteria decision analysis`, `analytic hierarchy process`, `pairwise comparison matrix`, `stakeholder preference weighting`, `criteria normalization`, `attribute scoring rubric`, `consistency ratio verification`, `swing weighting method`, `evaluation criterion hierarchy`, `aggregate utility score`, `performance threshold cutoff` đến `preference elicitation session`) và **Trade-offs, Sensitivity Analysis & Robustness Validation** (từ `trade-off frontier curve`, `pareto optimal frontier`, `one-at-a-time sensitivity test`, `robustness validation test`, `monte carlo decision simulation`, `rank reversal hazard`, `multi-attribute utility function`, `weighting uncertainty range`, `decision threshold shift`, `outranking decision methodology`, `compromise programming approach`, `decision boundary stress-testing` đến `consensus rank order`).

---

## 1. multi-criteria decision analysis /ˈmʌl.ti kraɪˈtɪr.i.ə dɪˈsɪʒ.ən əˌnæl.ə.sɪs/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `apply`, `conduct`, `rely on`.

**Core meaning — English:** A systematic sub-discipline of operations research that evaluates multiple conflicting quantitative and qualitative criteria to rank or select the most suitable option among competing alternatives.

**Core meaning & mental image — Tiếng Việt:** Phân tích quyết định đa tiêu chí (phương pháp đánh giá tổng hợp nhiều tiêu chí mâu thuẫn để lựa chọn phương án tối ưu). Hãy hình dung chiếc cân công lý nhiều đĩa: một đĩa cân đặt chi phí xây dựng, đĩa khác đặt mức độ phát thải carbon, đĩa thứ ba đặt sự an toàn giao thông và sự hài lòng của người dân; công cụ này giúp tính toán chính xác tổng thể để chọn ra phương án xây cầu hay hầm vượt tối ưu nhất cho thành phố.

**Grammar & collocations:** `conduct multi-criteria decision analysis` — tiến hành phân tích quyết định đa tiêu chí; `apply multi-criteria decision analysis` — áp dụng phân tích quyết định đa tiêu chí; `framework for multi-criteria decision analysis` — khuôn khổ phân tích quyết định đa tiêu chí.

**Register & nuance:** Bối cảnh nghiên cứu vận hành và quản trị chính sách công (*operations research & public policy analysis*); viết tắt là MCDA hoặc MCDM.

**Examples:** `The municipal transport committee applied multi-criteria decision analysis to balance construction costs against long-term environmental and social benefits.` → Ủy ban giao thông thành phố đã áp dụng phân tích quyết định đa tiêu chí để cân bằng chi phí xây dựng với các lợi ích môi trường và xã hội lâu dài.

**Liên kết tiếng Hàn:** `다기준 의사결정 분석` (多基準 意思決定 分析) — phân tích quyết định đa tiêu chí.

---

## 2. analytic hierarchy process /ˌæn.əlˈɪt̬.ɪk ˈhaɪ.rɑːr.ki ˈprɑː.ses/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng dạng xác định với `the`). Thường làm chủ ngữ hoặc tân ngữ sau `implement`, `utilize`, `pioneer`.

**Core meaning — English:** A structured mathematical technique pioneered by Thomas Saaty for organizing and analyzing complex decisions by decomposing them into a hierarchy of sub-problems and conducting pairwise comparisons.

**Core meaning & mental image — Tiếng Việt:** Quy trình phân tích thứ bậc (phương pháp AHP chia nhỏ bài toán quyết định thành cây thứ bậc mục tiêu - tiêu chí - phương án). Một cái cây phân nhánh ngược: trên đỉnh là mục tiêu tối thượng 'chọn địa điểm đặt nhà máy mới'; cành lớn bên dưới chia thành chi phí, nguồn nước, giao thông; các cành nhỏ chia thành giá thuê đất, chất lượng nước ngầm; giúp người ra quyết định không bị rối bời trước khối lượng thông tin khổng lồ.

**Grammar & collocations:** `utilize the analytic hierarchy process` — sử dụng quy trình phân tích thứ bậc; `principles of the analytic hierarchy process` — các nguyên tắc của quy trình phân tích thứ bậc; `analytic hierarchy process methodology` — phương pháp luận quy trình phân tích thứ bậc.

**Register & nuance:** Phương pháp ra quyết định kinh điển và phổ biến nhất trong giới học thuật và doanh nghiệp; thường viết tắt là AHP.

**Examples:** `The procurement panel utilized the analytic hierarchy process to decompose vendor selection into distinct technical and financial criteria.` → Hội đồng mua sắm đã sử dụng quy trình phân tích thứ bậc để phân tách việc lựa chọn nhà thầu thành các tiêu chí kỹ thuật và tài chính riêng biệt.

**Liên kết tiếng Hàn:** `계층화 분석법(AHP)` (階層化 分析法) — quy trình phân tích thứ bậc.

---

## 3. pairwise comparison matrix /ˈper.weɪz kəmˈpær.ə.sən ˈmeɪ.trɪks/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `construct`, `populate`, `calculate`.

**Core meaning — English:** A square mathematical grid where decision-makers systematically compare the relative importance of every criterion or alternative directly against every other one using a numerical scale (typically 1 to 9).

**Core meaning & mental image — Tiếng Việt:** Ma trận so sánh cặp (bảng số học đối đầu trực tiếp từng đôi một để chấm điểm mức độ quan trọng). Một bảng cờ caro vuông vức: thay vì so sánh hỗn loạn cùng lúc mười yếu tố, bạn chỉ cần trả lời từng cặp câu hỏi đơn giản: 'Giữa an toàn và chi phí, yếu tố nào quan trọng hơn và quan trọng hơn bao nhiêu lần?'; ma trận sẽ tự động tổng hợp thành trọng số chuẩn xác.

**Grammar & collocations:** `populate a pairwise comparison matrix` — điền dữ liệu vào ma trận so sánh cặp; `construct a pairwise comparison matrix` — xây dựng ma trận so sánh cặp; `eigenvector of a pairwise comparison matrix` — véc-tơ riêng của ma trận so sánh cặp.

**Register & nuance:** Công cụ toán học cốt lõi của phương pháp AHP (*mathematical matrix algebra & decision modeling*).

**Examples:** `Committee members populated a pairwise comparison matrix to judge whether project speed was moderately or strongly more important than capital outlay.` → Các thành viên ủy ban đã điền dữ liệu vào ma trận so sánh cặp để đánh giá xem tiến độ dự án quan trọng hơn chi phí vốn ở mức vừa phải hay mức độ mạnh mẽ.

**Liên kết tiếng Hàn:** `쌍대 비교 행렬` (雙對 比較 行列) — ma trận so sánh cặp.

---

## 4. stakeholder preference weighting /ˈsteɪkˌhoʊl.dɚ ˈpref.ər.əns ˈweɪ.tɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `incorporate`, `assign`, `calibrate`.

**Core meaning — English:** The quantitative process of assigning mathematical numerical coefficients to different decision criteria based on the expressed values, priorities, and interests of affected groups.

**Core meaning & mental image — Tiếng Việt:** Việc gán trọng số ưu tiên của các bên liên quan (quy đổi nguyện vọng của các nhóm đối tượng thành tỷ lệ phần trăm toán học). Lắng nghe tiếng nói của các bên: người dân sống gần đó muốn 40% trọng số cho giảm tiếng ồn, cổ đông muốn 35% cho tỷ suất sinh lời, cơ quan môi trường muốn 25% cho bảo tồn rừng cây; các con số này được hòa trộn để tạo nên một phương trình quyết định công bằng.

**Grammar & collocations:** `incorporate stakeholder preference weighting` — kết hợp việc gán trọng số ưu tiên của các bên liên quan; `adjust stakeholder preference weighting` — điều chỉnh trọng số ưu tiên của các bên liên quan; `consensus on stakeholder preference weighting` — sự đồng thuận về gán trọng số ưu tiên.

**Register & nuance:** Bối cảnh quản trị các bên liên quan và tham vấn cộng đồng (*stakeholder management & governance*).

**Examples:** `City planners calibrated stakeholder preference weighting so local resident safety concerns carried equal mathematical weight with commercial developer profits.` → Các nhà quy hoạch thành phố đã hiệu chuẩn việc gán trọng số ưu tiên của các bên liên quan sao cho mối quan ngại về an toàn của cư dân địa phương có trọng số toán học tương đương với lợi nhuận của các nhà phát triển thương mại.

**Liên kết tiếng Hàn:** `이해관계자 선호도 가중치 부여` (利害關係者 先好度 加重値 附與) — việc gán trọng số ưu tiên của các bên liên quan.

---

## 5. criteria normalization /kraɪˈtɪr.i.ə ˌnɔːr.mə.ləˈzeɪ.ʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `apply`, `perform`, `ensure`.

**Core meaning — English:** The mathematical transformation that scales divergent measurements (such as dollars, decibels, years, and satisfaction ratings) into a common dimensionless scale between 0 and 1 so they can be meaningfully aggregated.

**Core meaning & mental image — Tiếng Việt:** Sự chuẩn hóa các tiêu chí (quy đổi các đơn vị đo lường khác nhau về cùng một thang đo không thứ nguyên từ 0 đến 1). Giống như việc quy đổi tiền tệ từ Yên Nhật, Bảng Anh và Đô la về cùng một đồng tiền chung: chi phí tính bằng hàng triệu USD, độ ồn tính bằng decibel, thời gian tính bằng tháng đều được nén về dải điểm chuẩn từ 0 đến 1, giúp so sánh quả táo với quả cam một cách khoa học.

**Grammar & collocations:** `perform criteria normalization` — thực hiện sự chuẩn hóa các tiêu chí; `methods for criteria normalization` — các phương pháp chuẩn hóa tiêu chí; `linear criteria normalization` — chuẩn hóa tiêu chí tuyến tính.

**Register & nuance:** Kỹ thuật tiền xử lý dữ liệu bắt buộc trong phân tích định lượng (*quantitative data transformation & vector normalization*).

**Examples:** `Analysts performed criteria normalization using linear scaling so decibel noise levels and capital expenditure dollars could be combined into a single score.` → Các chuyên viên phân tích đã thực hiện sự chuẩn hóa các tiêu chí bằng cách sử dụng tỷ lệ tuyến tính để mức độ tiếng ồn tính bằng decibel và chi phí vốn bằng đô la có thể kết hợp thành một điểm số duy nhất.

**Liên kết tiếng Hàn:** `기준 정규화` (基準 正規化) — sự chuẩn hóa tiêu chí.

---

## 6. attribute scoring rubric /ˈæt.rɪ.bjuːt ˈskɔːr.ɪŋ ˈruː.brɪk/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `develop`, `apply`, `standardize`.

**Core meaning — English:** A clearly defined grading matrix establishing objective descriptive criteria and numerical thresholds for evaluating how effectively a proposal meets a specific performance requirement.

**Core meaning & mental image — Tiếng Việt:** Thang điểm tiêu chí định lượng (bảng hướng dẫn chấm điểm chi tiết từng mức độ đạt được của một thuộc tính). Một barem chấm thi rõ ràng: điểm 5 là giao hàng dưới 24 giờ, điểm 3 là giao từ 24 đến 48 giờ, điểm 1 là trên 48 giờ; giúp ban giám khảo chấm điểm khách quan như máy đo, không bị cảm xúc hay sự thiên vị chi phối.

**Grammar & collocations:** `develop an attribute scoring rubric` — phát triển thang điểm tiêu chí định lượng; `apply the attribute scoring rubric` — áp dụng thang điểm tiêu chí định lượng; `standardized attribute scoring rubric` — thang điểm tiêu chí định lượng đã được chuẩn hóa.

**Register & nuance:** Đấu thầu doanh nghiệp và đánh giá đề xuất kỹ thuật (*RFP procurement & proposal evaluation*).

**Examples:** `The evaluation panel drafted a transparent attribute scoring rubric that defined exact evidence required to achieve top ratings for technical reliability.` → Hội đồng đánh giá đã soạn thảo một thang điểm tiêu chí định lượng minh bạch xác định bằng chứng chính xác cần có để đạt điểm xếp hạng cao nhất về độ tin cậy kỹ thuật.

**Liên kết tiếng Hàn:** `속성 평가 루브릭` (屬性 評價 rubric) — thang điểm tiêu chí định lượng.

---

## 7. consistency ratio verification /kənˈsɪs.tən.si ˈreɪ.ʃi.oʊ ˌver.ə.fəˈkeɪ.ʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `pass`, `conduct`, `require`.

**Core meaning — English:** A mathematical validation test within AHP that measures whether a human decision-maker's pairwise judgments are logically coherent and transitive, requiring a ratio below 0.10 to be considered valid.

**Core meaning & mental image — Tiếng Việt:** Sự kiểm chứng tỷ số nhất quán (phép tính kiểm tra xem các nhận định đánh giá có bị mâu thuẫn logic với nhau hay không). Nếu bạn nói 'A tốt hơn B gấp 2 lần, B tốt hơn C gấp 3 lần' nhưng lại phán 'C tốt hơn A', hệ thống toán học sẽ lập tức rung chuông báo động: tỷ số CR vượt quá 10%, buộc bạn phải ngồi lại suy ngẫm và điều chỉnh lại nhận định cho logic.

**Grammar & collocations:** `conduct consistency ratio verification` — tiến hành kiểm chứng tỷ số nhất quán; `pass consistency ratio verification` — vượt qua phép kiểm chứng tỷ số nhất quán; `threshold for consistency ratio verification` — ngưỡng kiểm chứng tỷ số nhất quán.

**Register & nuance:** Bối cảnh kiểm định độ tin cậy toán học trong AHP (*mathematical validation in decision science*); thường viết tắt là CR (Consistency Ratio).

**Examples:** `Before finalizing the rankings, the team conducted consistency ratio verification to confirm that their pairwise evaluations did not contain contradictory logic.` → Trước khi hoàn thiện bảng xếp hạng, nhóm đã tiến hành sự kiểm chứng tỷ số nhất quán để xác nhận rằng các đánh giá so sánh cặp của họ không chứa đựng logic mâu thuẫn.

**Liên kết tiếng Hàn:** `일관성 비율 검증` (一貫性 比率 檢證) — sự kiểm chứng tỷ số nhất quán.

---

## 8. swing weighting method /swɪŋ ˈweɪ.tɪŋ ˌmeθ.əd/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng dạng xác định với `the`). Thường làm chủ ngữ hoặc tân ngữ sau `apply`, `utilize`, `recommend`.

**Core meaning — English:** A multi-attribute elicitation technique where stakeholders assign weights by evaluating the value gained when swinging an attribute from its worst conceivable level to its best possible level.

**Core meaning & mental image — Tiếng Việt:** Phương pháp gán trọng số theo biên độ dao động (kỹ thuật chấm điểm dựa trên mức độ quan trọng khi một tiêu chí chuyển từ mức tệ nhất lên mức tốt nhất). Hãy tưởng tượng một chiếc xích đu: nếu tiêu chí chi phí 'đu' từ đắt nhất xuống rẻ nhất, bạn cảm thấy giá trị nhận được lớn đến mức nào so với việc chất lượng 'đu' từ mức kém lên mức hoàn hảo? Từ việc so sánh biên độ này, trọng số thực sự sẽ lộ diện.

**Grammar & collocations:** `utilize the swing weighting method` — sử dụng phương pháp gán trọng số theo biên độ dao động; `principles of the swing weighting method` — các nguyên tắc của phương pháp swing weighting; `advantages of the swing weighting method` — ưu điểm của phương pháp gán trọng số dao động.

**Register & nuance:** Kỹ thuật kinh điển trong lý thuyết ra quyết định đa thuộc tính (SMARTS / SMART); giúp người tham gia không nhầm lẫn giữa tầm quan trọng trừu tượng và biên độ biến thiên thực tế.

**Examples:** `Facilitators utilized the swing weighting method to help executives appreciate that improving delivery time from three days to two was less impactful than halving defect rates.` → Các điều phối viên đã sử dụng phương pháp gán trọng số theo biên độ dao động để giúp các nhà điều hành nhận thức rằng việc cải thiện thời gian giao hàng từ ba ngày xuống hai ngày ít tác động hơn so với việc giảm một nửa tỷ lệ lỗi.

**Liên kết tiếng Hàn:** `스윙 가중치 부여법` (swing 加重値 附與法) — phương pháp gán trọng số dao động.

---

## 9. evaluation criterion hierarchy /ɪˌvæl.juˈeɪ.ʃən kraɪˈtɪr.i.ən ˈhaɪ.rɑːr.ki/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `structure`, `build`, `diagram`.

**Core meaning — English:** A multi-level inverted tree structure breaking down an overall decision goal into primary strategic dimensions, secondary sub-criteria, and specific measurable operational metrics.

**Core meaning & mental image — Tiếng Việt:** Cây thứ bậc tiêu chí đánh giá (sơ đồ phân nhánh hình kim tự tháp thể hiện mối quan hệ từ mục tiêu chiến lược xuống các chỉ số vận hành). Từ mục tiêu bao trùm 'chọn phần mềm doanh nghiệp' phân nhánh xuống 3 trụ cột: 'bảo mật', 'tính năng', 'chi phí'; mỗi trụ cột lại rẽ nhánh thành các tiêu chuẩn đo lường cụ thể, tạo thành một khung xương phân tích hoàn chỉnh.

**Grammar & collocations:** `structure an evaluation criterion hierarchy` — cấu trúc cây thứ bậc tiêu chí đánh giá; `levels within the evaluation criterion hierarchy` — các cấp bậc trong cây thứ bậc tiêu chí đánh giá; `diagram the evaluation criterion hierarchy` — vẽ sơ đồ cây thứ bậc tiêu chí đánh giá.

**Register & nuance:** Bối cảnh cấu trúc hóa bài toán phân tích quyết định (*decision structuring & systems engineering*).

**Examples:** `System architects diagrammed a four-level evaluation criterion hierarchy before gathering performance telemetry from participating software vendors.` → Các kiến trúc sư hệ thống đã vẽ sơ đồ một cây thứ bậc tiêu chí đánh giá gồm bốn cấp bậc trước khi thu thập dữ liệu đo xa hiệu suất từ các nhà cung cấp phần mềm tham gia.

**Liên kết tiếng Hàn:** `평가 기준 계층 구조` (評價 基準 階層 構造) — cây thứ bậc tiêu chí đánh giá.

---

## 10. aggregate utility score /ˈæɡ.rɪ.ɡət juːˈtɪl.ə.t̬i skɔːr/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `compute`, `calculate`, `rank by`.

**Core meaning — English:** The overall consolidated numerical value representing the total desirability or satisfaction provided by a specific alternative, calculated by summing its normalized scores multiplied by their criteria weights.

**Core meaning & mental image — Tiếng Việt:** Điểm hữu dụng tổng hợp (tổng điểm quy đổi cuối cùng phản ánh mức độ thỏa mãn toàn diện của một phương án). Mỗi phương án có điểm thành phần nhân với trọng số tương ứng: điểm kỹ thuật nhân 40%, điểm giá nhân 30%, điểm bảo hành nhân 30%; cộng dồn lại ra con số tổng kết duy nhất (ví dụ: 87.5/100) để phân định thắng thua một cách sòng phẳng.

**Grammar & collocations:** `compute the aggregate utility score` — tính toán điểm hữu dụng tổng hợp; `rank alternatives by aggregate utility score` — xếp hạng các phương án theo điểm hữu dụng tổng hợp; `highest aggregate utility score` — điểm hữu dụng tổng hợp cao nhất.

**Register & nuance:** Thuật ngữ kinh tế lượng và lý thuyết hữu dụng đa thuộc tính (MAUT).

**Examples:** `The cloud platform option that achieved the highest aggregate utility score was selected for deployment across the European division.` → Lựa chọn nền tảng đám mây đạt được điểm hữu dụng tổng hợp cao nhất đã được lựa chọn để triển khai trên toàn bộ khối chi nhánh châu Âu.

**Liên kết tiếng Hàn:** `종합 효용 점수` (綜合 效用 點數) — điểm hữu dụng tổng hợp.

---

## 11. performance threshold cutoff /pɚˈfɔːr.məns ˈθreʃ.hoʊld ˈkʌt.ɑːf/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `establish`, `apply`, `fall below`.

**Core meaning — English:** A non-negotiable minimum or maximum acceptable boundary on a critical criterion below which an alternative is immediately disqualified, regardless of how exceptionally it scores elsewhere.

**Core meaning & mental image — Tiếng Việt:** Ngưỡng cắt hiệu suất tối thiểu (vạch ranh giới bắt buộc, nếu không đạt sẽ bị loại ngay lập tức bất kể các mặt khác có xuất sắc đến đâu). Giống như bài thi lái xe có lỗi loại trực tiếp: chiếc xe có tiện nghi và tiết kiệm xăng đến mấy nhưng nếu thời gian phanh khẩn cấp vượt quá 40 mét thì bị gạch tên ngay từ vòng gửi xe mà không cần tính tổng điểm.

**Grammar & collocations:** `establish a performance threshold cutoff` — thiết lập ngưỡng cắt hiệu suất tối thiểu; `fall below the performance threshold cutoff` — rơi xuống dưới ngưỡng cắt hiệu suất; `strict performance threshold cutoff` — ngưỡng cắt hiệu suất nghiêm ngặt.

**Register & nuance:** Kỹ thuật loại trừ theo khía cạnh liên hợp (conjunctive screening / satisficing filter).

**Examples:** `Proposals were eliminated immediately if their latency failed to meet the strict performance threshold cutoff of fifty milliseconds.` → Các đề xuất đã bị loại bỏ ngay lập tức nếu độ trễ của chúng không đáp ứng được ngưỡng cắt hiệu suất nghiêm ngặt là năm mươi phần nghìn giây.

**Liên kết tiếng Hàn:** `성능 임계 컷오프` (性能 臨界 cutoff) — ngưỡng cắt hiệu suất tối thiểu.

---

## 12. preference elicitation session /ˈpref.ər.əns ɪˌlɪs.əˈteɪ.ʃən ˈseʃ.ən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `conduct`, `facilitate`, `participate in`.

**Core meaning — English:** A structured workshop or interview conducted by a decision analyst to systematically extract, clarify, and quantify the underlying trade-off priorities and risk attitudes of stakeholders.

**Core meaning & mental image — Tiếng Việt:** Buổi khai thác sở thích ưu tiên (buổi hội thảo chuyên sâu do chuyên gia điều phối để làm rõ mong muốn và sự đánh đổi của các bên liên quan). Chuyên gia phân tích ngồi lại cùng ban giám đốc và đại diện cộng đồng: đặt ra các tình huống giả định, dùng phần mềm tương tác để các bên tự kéo thanh trượt cân nhắc, từ đó bộc lộ chân thật những ưu tiên thầm kín mà bình thường khó nói thành lời.

**Grammar & collocations:** `facilitate a preference elicitation session` — điều phối một buổi khai thác sở thích ưu tiên; `insights from a preference elicitation session` — các hiểu biết sâu sắc từ buổi khai thác ưu tiên; `schedule a preference elicitation session` — lên lịch một buổi khai thác sở thích ưu tiên.

**Register & nuance:** Bối cảnh tư vấn quản trị chiến lược và điều phối quyết định (*facilitated decision analysis & group decision making*).

**Examples:** `The lead consultant facilitated an interactive preference elicitation session to resolve long-standing trade-off disputes between engineering and marketing executives.` → Chuyên viên tư vấn trưởng đã điều phối một buổi khai thác sở thích ưu tiên mang tính tương tác để giải quyết các tranh chấp đánh đổi kéo dài giữa các nhà điều hành kỹ thuật và tiếp thị.

**Liên kết tiếng Hàn:** `선호도 도출 세션` (先好度 導出 session) — buổi khai thác sở thích ưu tiên.

---

## 13. trade-off frontier curve /ˈtreɪd.ɑːf frʌnˈtɪr kɝːv/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `plot`, `map`, `shift`.

**Core meaning — English:** A visual graphical line illustrating the maximum achievable balance between two competing objectives (such as cost versus performance), showing where improvement in one demands sacrifice in the other.

**Core meaning & mental image — Tiếng Việt:** Đường cong biên giới đánh đổi (đồ thị thể hiện giới hạn tối ưu khi phải hy sinh tiêu chí này để đạt được tiêu chí kia). Một đường cong uốn lượn trên đồ thị tọa độ: muốn tốc độ xe nhanh hơn thì mức tiêu hao nhiên liệu phải tăng lên; các điểm nằm trên đường cong này đại diện cho những thiết kế hoàn hảo nhất về mặt kỹ thuật, không thể cải thiện mặt này nếu không chịu lùi bước ở mặt khác.

**Grammar & collocations:** `plot a trade-off frontier curve` — vẽ đường cong biên giới đánh đổi; `points along the trade-off frontier curve` — các điểm dọc theo đường cong biên giới đánh đổi; `shift the trade-off frontier curve` — dịch chuyển đường cong biên giới đánh đổi.

**Register & nuance:** Bối cảnh kinh tế học vi mô và tối ưu hóa đa mục tiêu (*multi-objective optimization & microeconomics*).

**Examples:** `Engineers plotted a trade-off frontier curve to demonstrate that achieving higher structural durability would exponentially inflate manufacturing costs.` → Các kỹ sư đã vẽ một đường cong biên giới đánh đổi để chứng minh rằng việc đạt được độ bền kết cấu cao hơn sẽ làm tăng chi phí sản xuất theo cấp số nhân.

**Liên kết tiếng Hàn:** `트레이드오프 프런티어 곡선` (tradeoff frontier 曲線) — đường cong biên giới đánh đổi.

---

## 14. pareto optimal frontier /pəˈreɪ.t̬oʊ ˈɑːp.tə.məl frʌnˈtɪr/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng dạng xác định với `the`). Thường làm chủ ngữ hoặc tân ngữ sau `identify`, `locate along`, `dominate`.

**Core meaning — English:** The mathematical set of non-dominated solutions in a multi-objective space where no single criterion can be improved without making at least one other criterion worse.

**Core meaning & mental image — Tiếng Việt:** Biên giới tối ưu Pareto (tập hợp các giải pháp tối ưu mà không thể làm tốt hơn ở mặt này mà không làm xấu đi mặt khác). Trong đám mây hàng nghìn phương án thiết kế máy bay, các kỹ sư lọc ra một đường viền ngoài cùng: mọi phương án nằm bên trong đường viền đều bị coi là kém cỏi vì có phương án khác vừa rẻ hơn vừa bay nhanh hơn; chỉ những phương án nằm ngay trên đường biên Pareto mới xứng đáng được đưa lên bàn nghị sự.

**Grammar & collocations:** `identify the pareto optimal frontier` — xác định biên giới tối ưu Pareto; `lie along the pareto optimal frontier` — nằm dọc theo biên giới tối ưu Pareto; `solutions on the pareto optimal frontier` — các giải pháp trên biên giới tối ưu Pareto.

**Register & nuance:** Khái niệm cốt lõi của lý thuyết tối ưu hóa toán học do Vilfredo Pareto đặt nền móng (*mathematical economics & operations research*).

**Examples:** `All architectural concepts lying along the pareto optimal frontier represent non-dominated designs that warrant detailed structural inspection.` → Tất cả các ý niệm kiến trúc nằm dọc theo biên giới tối ưu Pareto đều đại diện cho các thiết kế không bị chi phối xứng đáng được thanh tra kết cấu chi tiết.

**Liên kết tiếng Hàn:** `파레토 최적 프런티어` (Pareto 最適 frontier) — biên giới tối ưu Pareto.

---

## 15. one-at-a-time sensitivity test /wʌn ət ə taɪm ˌsen.səˈtɪv.ə.t̬i test/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `run`, `perform`, `interpret`.

**Core meaning — English:** A sensitivity analysis procedure that varies a single parameter or criterion weight across its plausible range while holding all other inputs strictly constant to observe its isolated effect on final rankings.

**Core meaning & mental image — Tiếng Việt:** Phép thử độ nhạy từng biến một (phương pháp kiểm tra độ nhạy bằng cách thay đổi một trọng số duy nhất trong khi giữ nguyên các yếu tố khác). Giống như việc vặn thử một nút xoay âm trầm trên dàn loa trong khi giữ nguyên nút âm bổng: bạn tăng dần trọng số chi phí từ 10% lên 50% xem khi nào thứ hạng phương án A bị tụt xuống nhường chỗ cho phương án B, từ đó biết quyết định nhạy cảm với tiêu chí nào nhất.

**Grammar & collocations:** `run a one-at-a-time sensitivity test` — chạy phép thử độ nhạy từng biến một; `results of the one-at-a-time sensitivity test` — kết quả của phép thử độ nhạy từng biến; `conduct a one-at-a-time sensitivity test` — tiến hành thử nghiệm độ nhạy từng biến đơn lẻ.

**Register & nuance:** Kỹ thuật kiểm tra độ nhạy cơ bản và phổ biến nhất (OAT sensitivity analysis).

**Examples:** `Analysts executed a one-at-a-time sensitivity test on fuel inflation assumptions to see if the chosen logistics provider remained the most cost-effective.` → Các chuyên viên phân tích đã thực hiện một phép thử độ nhạy từng biến một đối với các giả định lạm phát giá nhiên liệu để xem liệu nhà cung cấp hậu cần được chọn có còn là bên hiệu quả về chi phí nhất hay không.

**Liên kết tiếng Hàn:** `일원 감도 분석 시험` (一元 感度 分析 試驗) — phép thử độ nhạy từng biến một.

---

## 16. robustness validation test /roʊˈbʌst.nəs ˌvæl.əˈdeɪ.ʃən test/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `conduct`, `pass`, `require`.

**Core meaning — English:** A rigorous computational procedure that checks whether the recommended top-ranked decision alternative remains dominant under varying parameter shifts, uncertainty distributions, and subjective weighting disagreements.

**Core meaning & mental image — Tiếng Việt:** Phép kiểm định tính bền vững của quyết định (bài kiểm tra độ vững chãi xác nhận phương án được chọn vẫn giữ vững vị trí quán quân trước mọi sự đổi thay). Một chiếc xe địa hình được đưa vào hầm gió, bão cát và đường ngập lụt: dù kịch bản tương lai có biến thiên theo hướng lạc quan hay bi quan, trọng số có bị thay đổi đôi chút thì phương án được đề xuất vẫn chứng tỏ là lựa chọn khôn ngoan nhất.

**Grammar & collocations:** `conduct a robustness validation test` — tiến hành phép kiểm định tính bền vững; `pass the robustness validation test` — vượt qua phép kiểm định tính bền vững; `rigorous robustness validation test` — phép kiểm định tính bền vững nghiêm ngặt.

**Register & nuance:** Bối cảnh quản trị quyết định chiến lược và thẩm định rủi ro (*risk assurance & strategic validation*).

**Examples:** `The selected hospital expansion proposal passed the robustness validation test, proving it maintained superior cost-benefit metrics across all economic scenarios.` → Đề xuất mở rộng bệnh viện được chọn đã vượt qua phép kiểm định tính bền vững của quyết định, chứng minh nó duy trì các chỉ số chi phí-lợi ích vượt trội trên mọi kịch bản kinh tế.

**Liên kết tiếng Hàn:** `강건성 검증 시험` (强健性 檢證 試驗) — phép kiểm định tính bền vững.

---

## 17. monte carlo decision simulation /ˈmɑːn.t̬i ˈkɑːr.loʊ dɪˈsɪʒ.ən ˌsɪm.jəˈleɪ.ʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `run`, `execute`, `model with`.

**Core meaning — English:** A computerized mathematical modeling method that simulates thousands of random iterations of uncertain criteria scores and weights to calculate the probability distribution of decision outcomes.

**Core meaning & mental image — Tiếng Việt:** Mô phỏng quyết định Monte Carlo (phương pháp máy tính gieo hạt ngẫu nhiên hàng chục nghìn lần để tính xác suất thành công của các phương án). Máy tính giống như một sòng bạc xác suất: chạy thử 100.000 kịch bản ngẫu nhiên với biến động giá vật liệu, tỷ giá hối đoái và thời tiết; kết quả cho thấy phương án A có tới 89% khả năng giữ vững vị trí đứng đầu, đem lại sự an tâm tuyệt đối cho hội đồng quản trị.

**Grammar & collocations:** `run a monte carlo decision simulation` — chạy mô phỏng quyết định Monte Carlo; `results from a monte carlo decision simulation` — kết quả từ mô phỏng quyết định Monte Carlo; `model uncertainty using a monte carlo decision simulation` — mô hình hóa sự bất định bằng mô phỏng quyết định Monte Carlo.

**Register & nuance:** Khoa học dữ liệu tài chính và quản trị rủi ro lượng hóa (*quantitative risk modeling & stochastic simulation*).

**Examples:** `Risk managers ran a monte carlo decision simulation with fifty thousand iterations to determine the likelihood of cost overruns under volatile commodity pricing.` → Các nhà quản lý rủi ro đã chạy một mô phỏng quyết định Monte Carlo với năm mươi nghìn lần lặp để xác định khả năng đội vốn trong điều kiện định giá hàng hóa biến động.

**Liên kết tiếng Hàn:** `몬테카를로 의사결정 시뮬레이션` (Monte Carlo 意思決定 simulation) — mô phỏng quyết định Monte Carlo.

---

## 18. rank reversal hazard /ræŋk rɪˈvɝː.səl ˈhæz.ɚd/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `mitigate`, `address`, `be vulnerable to`.

**Core meaning — English:** The mathematical anomaly in some decision models (like classic AHP) where adding or removing an irrelevant alternative causes the relative ranking of the original, unaltered alternatives to inadvertently swap.

**Core meaning & mental image — Tiếng Việt:** Nguy cơ đảo ngược thứ bậc (nguy cơ phương án đang dẫn đầu bất ngờ bị tụt xuống thứ hai khi bổ sung thêm một phương án thứ ba không liên quan). Một nghịch lý kỳ lạ: bạn đang phân vân giữa hai căn hộ A và B, hệ thống xếp A nhất, B nhì; nhưng khi người môi giới đưa thêm căn hộ C tồi tàn vào danh sách, thuật toán lại bất ngờ đổi thành B nhất, A nhì; đây là một hiểm họa toán học mà chuyên gia phải chủ động ngăn ngừa.

**Grammar & collocations:** `mitigate the rank reversal hazard` — giảm thiểu nguy cơ đảo ngược thứ bậc; `vulnerable to rank reversal hazard` — dễ bị ảnh hưởng bởi nguy cơ đảo ngược thứ bậc; `mathematical anomalies causing rank reversal hazard` — các dị thường toán học gây ra nguy cơ đảo ngược thứ bậc.

**Register & nuance:** Bối cảnh tranh luận học thuật sâu sắc trong lý thuyết quyết định (*decision theory critique & axiomatic validation*).

**Examples:** `Economists cautioned against naive weighting formulas to prevent the rank reversal hazard from flipping the preferred vendor when a third bidder was disqualified.` → Các nhà kinh tế đã cảnh báo chống lại các công thức gán trọng số ngây thơ nhằm ngăn chặn nguy cơ đảo ngược thứ bậc làm đảo lộn nhà thầu được ưu tiên khi nhà thầu thứ ba bị loại.

**Liên kết tiếng Hàn:** `순위 역전 위험` (順位 逆轉 危險) — nguy cơ đảo ngược thứ bậc.

---

## 19. multi-attribute utility function /ˈmʌl.ti ˈæt.rɪ.bjuːt juːˈtɪl.ə.t̬i ˈfʌŋk.ʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `formulate`, `calibrate`, `fit`.

**Core meaning — English:** A mathematical formula that aggregates a decision-maker's non-linear risk preferences, marginal utilities, and trade-offs across distinct dimensions into a single unified utility value.

**Core meaning & mental image — Tiếng Việt:** Hàm hữu dụng đa thuộc tính (hàm toán học mô tả chính xác sự thỏa mãn phi tuyến tính và thái độ chấp nhận rủi ro của người ra quyết định). Một công thức đại số tinh vi: phản ánh việc kiếm thêm 1 triệu USD đầu tiên đem lại niềm vui lớn hơn kiếm 1 triệu USD thứ mười, đồng thời gắn kết mức độ ghét rủi ro của ban giám đốc vào từng con số đánh giá.

**Grammar & collocations:** `formulate a multi-attribute utility function` — xây dựng hàm hữu dụng đa thuộc tính; `calibrate the multi-attribute utility function` — hiệu chuẩn hàm hữu dụng đa thuộc tính; `properties of a multi-attribute utility function` — các đặc tính của hàm hữu dụng đa thuộc tính.

**Register & nuance:** Lý thuyết kinh tế vi mô cao cấp và lý thuyết quyết định chuẩn tắc (*normative decision theory & MAUT*).

**Examples:** `The research team calibrated a multi-attribute utility function to accurately represent the municipality's strict aversion to public safety hazards.` → Nhóm nghiên cứu đã hiệu chuẩn một hàm hữu dụng đa thuộc tính để đại diện chính xác cho sự bài xích nghiêm ngặt của chính quyền thành phố đối với các mối nguy an toàn công cộng.

**Liên kết tiếng Hàn:** `다속성 효용 함수` (多屬性 效用 函數) — hàm hữu dụng đa thuộc tính.

---

## 20. weighting uncertainty range /ˈweɪ.tɪŋ ʌnˈsɝː.tən.ti reɪndʒ/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `define`, `explore`, `bracket`.

**Core meaning — English:** An interval or confidence band (e.g., environmental weight between 20% and 35%) reflecting the lack of absolute consensus or measurement precision regarding the true priority of a criterion.

**Core meaning & mental image — Tiếng Việt:** Dải bất định của trọng số (khoảng dao động của tỷ lệ phần trăm ưu tiên do các bên chưa hoàn toàn đồng thuận). Thay vì ép buộc một con số cứng nhắc 25%, các nhà nghiên cứu thừa nhận một dải dao động từ 20% đến 30%: kiểm tra xem quyết định có bị đảo lộn không nếu trọng số chạy lăng xăng bên trong dải biến thiên này.

**Grammar & collocations:** `define a weighting uncertainty range` — xác định dải bất định của trọng số; `explore the weighting uncertainty range` — khảo sát dải bất định của trọng số; `bracket parameters within a weighting uncertainty range` — đóng khung các tham số trong dải bất định trọng số.

**Register & nuance:** Bối cảnh mô hình hóa quyết định dưới điều kiện thông tin không hoàn hảo (*decision making under deep uncertainty*).

**Examples:** `Rather than assuming an exact thirty percent weight for ecological impact, planners evaluated a weighting uncertainty range spanning from twenty to forty percent.` → Thay vì giả định một trọng số chính xác ba mươi phần trăm cho tác động sinh thái, các nhà quy hoạch đã đánh giá một dải bất định của trọng số kéo dài từ hai mươi đến bốn mươi phần trăm.

**Liên kết tiếng Hàn:** `가중치 불확실성 범위` (加重値 不確實性 範圍) — dải bất định của trọng số.

---

## 21. decision threshold shift /dɪˈsɪʒ.ən ˈθreʃ.hoʊld ʃɪft/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `trigger`, `observe`, `calculate`.

**Core meaning — English:** The critical point or numerical inflection at which a minor adjustment in an input weight or score causes the recommended top-choice alternative to be replaced by another option.

**Core meaning & mental image — Tiếng Việt:** Sự dịch chuyển ngưỡng quyết định (điểm bùng phát mà tại đó một thay đổi nhỏ về trọng số làm đổi ngôi vị trí quán quân của phương án). Điểm giao nhau kịch tính trên biểu đồ: khi trọng số chi phí chỉ cần nhích từ 32% lên 33%, phương án B lập tức vượt mặt phương án A để trở thành lựa chọn số 1; việc nắm rõ ngưỡng này giúp lãnh đạo biết ranh giới mong manh của sự lựa chọn.

**Grammar & collocations:** `calculate a decision threshold shift` — tính toán sự dịch chuyển ngưỡng quyết định; `trigger a decision threshold shift` — kích hoạt sự dịch chuyển ngưỡng quyết định; `vulnerability to a decision threshold shift` — tính nhạy cảm trước sự dịch chuyển ngưỡng quyết định.

**Register & nuance:** Phân tích độ nhạy biên (*marginal sensitivity analysis & tipping point identification*).

**Examples:** `Sensitivity graphs revealed that a mere two percent increase in maintenance weighting triggered a sudden decision threshold shift favoring vendor B.` → Các đồ thị độ nhạy tiết lộ rằng sự gia tăng chỉ hai phần trăm trong trọng số bảo trì đã kích hoạt một sự dịch chuyển ngưỡng quyết định đột ngột nghiêng về phía nhà thầu B.

**Liên kết tiếng Hàn:** `의사결정 임계값 변 động` (意思決定 臨界값 變動) — sự dịch chuyển ngưỡng quyết định.

---

## 22. outranking decision methodology /ˌaʊtˈræŋk.ɪŋ dɪˈsɪʒ.ən ˌmeθ.əˈdɑː.lə.dʒi/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `apply`, `implement`, `contrast with`.

**Core meaning — English:** A non-compensatory decision framework (such as ELECTRE or PROMETHEE) that evaluates whether alternative A is at least as good as alternative B by comparing concordant support and discordant opposition.

**Core meaning & mental image — Tiếng Việt:** Phương pháp luận quyết định vượt trội (trường phái ra quyết định kiểu châu Âu không cho phép bù trừ vô tội vạ, so sánh xem phương án A có thực sự lấn át phương án B hay không). Khác với phương pháp cộng điểm thông thường nơi điểm cao ở mặt này có thể bù đắp cho điểm liệt ở mặt khác, phương pháp này lập luận: 'Phương án A vượt trội phương án B nếu đa số tiêu chí ủng hộ nó và không có tiêu chí nào bị phản đối kịch liệt'.

**Grammar & collocations:** `apply an outranking decision methodology` — áp dụng phương pháp luận quyết định vượt trội; `principles of outranking decision methodology` — các nguyên tắc của phương pháp quyết định vượt trội; `outranking decision methodology frameworks` — các khuôn khổ phương pháp luận quyết định vượt trội.

**Register & nuance:** Bối cảnh trường phái phân tích quyết định của Pháp/Châu Âu (French School of MCDA); phân biệt với trường phái bù trừ của Mỹ (AHP / MAUT).

**Examples:** `The environmental agency chose an outranking decision methodology because it prevented excellent economic returns from compensating for catastrophic biodiversity loss.` → Cơ quan môi trường đã chọn một phương pháp luận quyết định vượt trội vì nó ngăn không cho lợi nhuận kinh tế xuất sắc bù đắp cho sự mất mát đa dạng sinh học thảm khốc.

**Liên kết tiếng Hàn:** `아웃랭킹 의사결정 방법론` (outranking 意思決定 方法論) — phương pháp luận quyết định vượt trội.

---

## 23. compromise programming approach /ˈkɑːm.prə.maɪz ˈproʊ.ɡræm.ɪŋ əˌproʊtʃ/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng dạng xác định với `the`). Thường làm chủ ngữ hoặc tân ngữ sau `adopt`, `formulate`, `solve via`.

**Core meaning — English:** A mathematical optimization method that identifies the realistic compromise alternative closest to an unattainable ideal reference point using geometric distance metrics (such as Lp metrics).

**Core meaning & mental image — Tiếng Việt:** Cách tiếp cận quy hoạch thỏa hiệp (phương pháp toán học tìm phương án thực tế gần nhất với điểm lý tưởng không tưởng). Điểm lý tưởng là giấc mơ không có thật: vừa rẻ nhất vừa bền nhất vừa giao hàng ngay lập tức; phương pháp quy hoạch thỏa hiệp đo khoảng cách hình học từ mọi phương án thực tế đến điểm lý tưởng đó và chọn ra phương án nào có khoảng cách ngắn nhất, tức là mức độ nuối tiếc ít nhất.

**Grammar & collocations:** `adopt the compromise programming approach` — tiếp nhận cách tiếp cận quy hoạch thỏa hiệp; `solutions generated by the compromise programming approach` — các giải pháp được tạo ra bởi cách tiếp cận quy hoạch thỏa hiệp; `formulate a compromise programming approach` — xây dựng cách tiếp cận quy hoạch thỏa hiệp.

**Register & nuance:** Bối cảnh quy hoạch toán học đa mục tiêu (*multi-objective mathematical programming*).

**Examples:** `Water resource managers adopted a compromise programming approach to identify dam operating schedules that minimized the distance from ideal agricultural and ecological targets.` → Các nhà quản lý tài nguyên nước đã tiếp nhận cách tiếp cận quy hoạch thỏa hiệp để xác định lịch trình vận hành đập nhằm giảm thiểu khoảng cách tới các mục tiêu sinh thái và nông nghiệp lý tưởng.

**Liên kết tiếng Hàn:** `절충 계획법 접근법` (折衷 計劃法 接近法) — cách tiếp cận quy hoạch thỏa hiệp.

---

## 24. decision boundary stress-testing /dɪˈsɪʒ.ən ˈbaʊn.dɚ.i ˈstres ˌtes.tɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ sau `subject to`, `perform`, `conduct`.

**Core meaning — English:** The intentional simulation of extreme, worst-case input conditions and severe data inaccuracies to test whether the preferred strategic option breaks down or preserves acceptable utility.

**Core meaning & mental image — Tiếng Việt:** Thử nghiệm ứng suất ranh giới quyết định (ép mô hình quyết định vào các kịch bản tận cùng của khủng hoảng để xem ranh giới lựa chọn có bị phá vỡ hay không). Đưa mô hình vào 'máy rung chấn': thử tưởng tượng lạm phát tăng vọt 200%, nguồn cung bị cắt đứt 6 tháng và ngân sách bị cắt giảm một nửa; nếu phương án được chọn vẫn giúp doanh nghiệp sống sót thì ranh giới quyết định đó thực sự vững như bàn thạch.

**Grammar & collocations:** `conduct decision boundary stress-testing` — tiến hành thử nghiệm ứng suất ranh giới quyết định; `subject alternatives to decision boundary stress-testing` — đặt các phương án vào thử nghiệm ứng suất ranh giới quyết định; `resilience under decision boundary stress-testing` — tính kiên cường dưới thử nghiệm ứng suất ranh giới quyết định.

**Register & nuance:** Bối cảnh quản trị rủi ro chiến lược và lập kế hoạch ứng phó khủng hoảng (*strategic risk resilience & crisis planning*).

**Examples:** `Before authorizing the capital project, the investment board mandated rigorous decision boundary stress-testing against combined supply chain collapse and currency devaluation.` → Trước khi phê duyệt dự án vốn, ban đầu tư đã bắt buộc phải có thử nghiệm ứng suất ranh giới quyết định nghiêm ngặt trước sự kết hợp giữa sụp đổ chuỗi cung ứng và sự mất giá của tiền tệ.

**Liên kết tiếng Hàn:** `의사결정 경계 스트레스 테스트` (意思決定 境界 stress test) — thử nghiệm ứng suất ranh giới quyết định.

---

## 25. consensus rank order /kənˈsen.səs ræŋk ˈɔːr.dɚ/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng dạng số ít với `the`). Thường làm chủ ngữ hoặc tân ngữ sau `reach`, `establish`, `publish`.

**Core meaning — English:** The finalized hierarchical sequence of alternatives agreed upon collectively by diverse stakeholders following iterative scoring, weight negotiation, and sensitivity analysis.

**Core meaning & mental image — Tiếng Việt:** Thứ tự xếp hạng đồng thuận (bảng xếp hạng cuối cùng được tất cả các bên liên quan cùng nhất trí thông qua sau quá trình đối thoại và phân tích khoa học). Sau nhiều ngày tranh luận sôi nổi, thử nghiệm độ nhạy và điều chỉnh trọng số minh bạch, toàn thể hội đồng cùng ký tên vào văn bản công bố thứ tự từ hạng 1 đến hạng cuối; không còn nghi ngờ hay ấm ức vì mọi phán quyết đều được chứng minh bằng dữ liệu và sự đồng lòng.

**Grammar & collocations:** `establish a consensus rank order` — thiết lập thứ tự xếp hạng đồng thuận; `reach a consensus rank order` — đạt được thứ tự xếp hạng đồng thuận; `validate the consensus rank order` — xác thực thứ tự xếp hạng đồng thuận.

**Register & nuance:** Kết quả chung cuộc của quy trình ra quyết định nhóm có cấu trúc (*collaborative group decision-making outcome*).

**Examples:** `After reconciling individual weighting preferences, the city council agreed upon a final consensus rank order for municipal light rail extensions.` → Sau khi hòa giải các sở thích gán trọng số cá nhân, hội đồng thành phố đã nhất trí về một thứ tự xếp hạng đồng thuận cuối cùng cho các tuyến mở rộng đường sắt nhẹ đô thị.

**Liên kết tiếng Hàn:** `합의된 순위 서열` (合意된 順位 序列) — thứ tự xếp hạng đồng thuận.

---

## Review in context (Part 1: MCDA Structuring & Weighting)

Complex infrastructure initiatives involve conflicting environmental, fiscal, and engineering priorities that single-metric cost models cannot resolve. To establish an auditable evaluation trail, municipal agencies apply formal **multi-criteria decision analysis**, decomposing multi-dimensional public investments into structured trade-offs. The evaluation committee relies heavily on the **analytic hierarchy process**, structuring complex community trade-offs into manageable sub-goals. To eliminate arbitrary bias, each expert committee member fills out an interactive **pairwise comparison matrix**, evaluating whether ecological preservation is moderately or strongly more important than immediate construction speed.

Recognizing that diverse civic groups hold conflicting community priorities, facilitators actively incorporate **stakeholder preference weighting**, balancing neighborhood safety demands against commercial economic development. To combine disparate metrics like decibels, dollars, and satisfaction indices into cohesive models, researchers perform mathematical **criteria normalization** to map disparate units onto a uniform zero-to-one scale. Each sub-committee benchmarks competing proposals against a rigorous **attribute scoring rubric**, guaranteeing objective scoring based on empirical evidence rather than persuasive marketing rhetoric. Before validating initial weighting distributions, technical analysts conduct **consistency ratio verification** to confirm that pairwise preferences remain logically sound and mathematically coherent.

During technical evaluations, facilitators often employ the **swing weighting method**, challenging team members to weigh the real-world value gained when swinging attributes between extreme performance boundaries. The evaluation committee maps out an expansive **evaluation criterion hierarchy**, creating a transparent structural breakdown from executive mission statements down to operational engineering benchmarks. Multiplying normalized scores by validated criteria weights yields an **aggregate utility score** for each vendor proposal, offering an initial objective ranking. Crucially, proposals must satisfy a mandatory **performance threshold cutoff** in structural safety; failure to achieve this baseline results in immediate disqualification. Throughout this calibration phase, consultants facilitate an intensive **preference elicitation session**, helping executive stakeholders articulate subjective trade-offs with rigorous analytical precision.

**Bản dịch tiếng Việt:**

Các sáng kiến cơ sở hạ tầng phức tạp liên quan đến các ưu tiên mâu thuẫn về môi trường, tài chính và kỹ thuật mà các mô hình chi phí đơn chỉ số không thể giải quyết. Để thiết lập một dấu vết đánh giá có thể kiểm toán, các cơ quan thành phố áp dụng **phân tích quyết định đa tiêu chí** (**multi-criteria decision analysis**) chính thức, phân tách các khoản đầu tư công đa chiều thành các sự đánh đổi có cấu trúc. Ủy ban đánh giá dựa nhiều vào **quy trình phân tích thứ bậc** (**analytic hierarchy process**), cấu trúc các sự đánh đổi phức tạp của cộng đồng thành các tiểu mục tiêu có thể quản lý được. Để loại bỏ sự thiên vị tùy tiện, mỗi thành viên ủy ban chuyên gia điền vào một **ma trận so sánh cặp** (**pairwise comparison matrix**) tương tác, đánh giá xem việc bảo tồn sinh thái quan trọng hơn tốc độ thi công ngay lập tức ở mức độ vừa phải hay mạnh mẽ.

Nhận thức rằng các nhóm dân sự khác nhau nắm giữ các ưu tiên cộng đồng mâu thuẫn nhau, các điều phối viên chủ động kết hợp **việc gán trọng số ưu tiên của các bên liên quan** (**stakeholder preference weighting**), cân bằng các yêu cầu về an toàn khu dân cư với sự phát triển kinh tế thương mại. Để kết hợp các số đo khác nhau như decibel, đô la và các chỉ số hài lòng vào các mô hình gắn kết, các nhà nghiên cứu thực hiện **sự chuẩn hóa các tiêu chí** (**criteria normalization**) toán học để ánh xạ các đơn vị đo khác nhau lên một thang đo đồng nhất từ 0 đến 1. Mỗi tiểu ban đánh giá chuẩn đối sánh các đề xuất cạnh tranh dựa trên một **thang điểm tiêu chí định lượng** (**attribute scoring rubric**) nghiêm ngặt, bảo đảm việc chấm điểm khách quan dựa trên bằng chứng thực nghiệm thay vì những lời hoa mỹ tiếp thị thuyết phục. Trước khi xác thực các phân phối trọng số ban đầu, các nhà phân tích kỹ thuật tiến hành **sự kiểm chứng tỷ số nhất quán** (**consistency ratio verification**) để xác nhận rằng các ưu tiên so sánh cặp vẫn đúng đắn về mặt logic và gắn kết về mặt toán học.

Trong quá trình đánh giá kỹ thuật, các điều phối viên thường sử dụng **phương pháp gán trọng số theo biên độ dao động** (**swing weighting method**), thách thức các thành viên trong nhóm cân nhắc giá trị thực tế đạt được khi thay đổi các thuộc tính giữa các ranh giới hiệu suất cực hạn. Ủy ban đánh giá vạch ra một **cây thứ bậc tiêu chí đánh giá** (**evaluation criterion hierarchy**) sâu rộng, tạo ra một sự phân tách cấu trúc minh bạch từ các tuyên bố sứ mệnh điều hành cho đến các chuẩn mực kỹ thuật vận hành. Việc nhân các điểm số đã chuẩn hóa với các trọng số tiêu chí đã được xác thực mang lại một **điểm hữu dụng tổng hợp** (**aggregate utility score**) cho từng đề xuất của nhà thầu, cung cấp một bảng xếp hạng khách quan ban đầu. Điều cốt yếu là, các đề xuất phải thỏa mãn một **ngưỡng cắt hiệu suất tối thiểu** (**performance threshold cutoff**) bắt buộc về an toàn kết cấu; việc không đạt được đường cơ sở này sẽ dẫn đến việc bị loại ngay lập tức. Trong suốt giai đoạn hiệu chuẩn này, các chuyên gia tư vấn điều phối một **buổi khai thác sở thích ưu tiên** (**preference elicitation session**) chuyên sâu, giúp các bên liên quan điều hành nêu rõ các sự đánh đổi chủ quan với độ chính xác phân tích nghiêm ngặt.

---

## Review in context (Part 2: Trade-offs, Sensitivity Analysis & Robustness Validation)

Once initial decision scores are computed, decision scientists examine the **trade-off frontier curve** to illustrate where enhancing operational durability demands financial sacrifices. From this curve, analysts identify the non-dominated configurations defining the **pareto optimal frontier**, eliminating inferior designs that are outperformed across all dimensions. Because stakeholder consensus on criteria weights is rarely absolute, analysts execute a systematic **one-at-a-time sensitivity test** to observe how adjusting a single priority weight alters alternative standings. To ensure durability against real-world uncertainties, the top-ranked alternative must successfully pass an extensive **robustness validation test**, verifying that its superiority holds across diverse political and market futures.

To model compound uncertainties across supply networks, the team executes a **monte carlo decision simulation**, stress-testing thousands of stochastic score combinations. Methodologists scrutinize the algorithmic formulation to avoid the notorious **rank reversal hazard**, ensuring that introducing a secondary alternative never inverts the relative standing of original contenders. For complex initiatives involving risk aversion, decision analysts formulate a rigorous **multi-attribute utility function**, capturing non-linear stakeholder preferences. Instead of treating criteria importance as fixed points, researchers define a wide **weighting uncertainty range**, evaluating alternative performance across plausible priority variations.

During sensitivity simulations, graphical outputs highlight any impending **decision threshold shift**, alerting executive leadership to the exact points where minor weight adjustments dethrone the leading choice. When criteria interactions resist simple linear compensation, agencies adopt an **outranking decision methodology**, determining whether one option convincingly outclasses another without masking severe flaws. In multi-objective resource distribution, optimization teams implement a **compromise programming approach**, selecting designs closest to an ideal performance benchmark. Before final capital allocation, risk managers perform extreme **decision boundary stress-testing**, verifying that the chosen strategy survives supply shocks and regulatory disruptions. Finally, the steering committee unites behind an agreed-upon **consensus rank order**, moving forward into implementation with shared confidence and analytical credibility.

**Bản dịch tiếng Việt:**

Khi các điểm số quyết định ban đầu được tính toán xong, các nhà khoa học quyết định xem xét **đường cong biên giới đánh đổi** (**trade-off frontier curve**) để minh họa nơi mà việc nâng cao độ bền vận hành đòi hỏi những hy sinh về mặt tài chính. Từ đường cong này, các chuyên viên phân tích xác định các cấu hình không bị chi phối định hình nên **biên giới tối ưu Pareto** (**pareto optimal frontier**), loại bỏ các thiết kế kém cỏi vốn bị vượt trội trên mọi khía cạnh. Bởi vì sự đồng thuận của các bên liên quan về trọng số tiêu chí hiếm khi là tuyệt đối, các nhà phân tích thực thi một **phép thử độ nhạy từng biến một** (**one-at-a-time sensitivity test**) có hệ thống để quan sát xem việc điều chỉnh một trọng số ưu tiên đơn lẻ làm thay đổi thứ hạng của phương án như thế nào. Để bảo đảm độ bền vững trước những bất định trong thế giới thực, phương án xếp hạng cao nhất phải vượt qua thành công một **phép kiểm định tính bền vững của quyết định** (**robustness validation test**) sâu rộng, xác minh rằng tính ưu việt của nó vẫn giữ vững trên các bối cảnh tương lai chính trị và thị trường đa dạng.

Để mô hình hóa các bất định phức hợp trên khắp các mạng lưới cung ứng, nhóm nghiên cứu thực thi một **mô phỏng quyết định Monte Carlo** (**monte carlo decision simulation**), thử nghiệm ứng suất hàng nghìn sự kết hợp điểm số ngẫu nhiên. Các nhà phương pháp luận xem xét kỹ lưỡng công thức thuật toán để tránh **nguy cơ đảo ngược thứ bậc** (**rank reversal hazard**) khét tiếng, bảo đảm rằng việc đưa vào một phương án phụ không bao giờ làm đảo lộn vị thế tương đối của các đối thủ cạnh tranh ban đầu. Đối với các sáng kiến phức tạp liên quan đến sự bài xích rủi ro, các nhà phân tích quyết định xây dựng một **hàm hữu dụng đa thuộc tính** (**multi-attribute utility function**) nghiêm ngặt, nắm bắt các sở thích phi tuyến tính của các bên liên quan. Thay vì coi tầm quan trọng của tiêu chí như các điểm cố định, các nhà nghiên cứu xác định một **dải bất định của trọng số** (**weighting uncertainty range**) rộng, đánh giá hiệu suất của phương án trên khắp các biến thiên ưu tiên hợp lý.

Trong các mô phỏng độ nhạy, các đầu ra đồ họa làm nổi bật bất kỳ **sự dịch chuyển ngưỡng quyết định** (**decision threshold shift**) nào sắp xảy ra, cảnh báo cho ban lãnh đạo điều hành về các điểm chuẩn xác nơi mà các điều chỉnh trọng số nhỏ sẽ phế truất lựa chọn hàng đầu. Khi các tương tác tiêu chí chống lại sự bù trừ tuyến tính đơn giản, các cơ quan áp dụng một **phương pháp luận quyết định vượt trội** (**outranking decision methodology**), xác định xem một lựa chọn có vượt trội một cách thuyết phục lựa chọn khác hay không mà không che giấu những sai sót nghiêm trọng. Trong việc phân bổ nguồn lực đa mục tiêu, các nhóm tối ưu hóa triển khai một **cách tiếp cận quy hoạch thỏa hiệp** (**compromise programming approach**), lựa chọn các thiết kế gần nhất với điểm chuẩn hiệu suất lý tưởng. Trước khi phân bổ vốn cuối cùng, các nhà quản lý rủi ro thực hiện **thử nghiệm ứng suất ranh giới quyết định** (**decision boundary stress-testing**) cực hạn, xác minh rằng chiến lược được chọn vẫn sống sót qua các cú sốc nguồn cung và sự gián đoạn quy định. Cuối cùng, ủy ban chỉ đạo đoàn kết đằng sau một **thứ tự xếp hạng đồng thuận** (**consensus rank order**) đã được nhất trí, tiến tới việc thực thi với sự tự tin chung và uy tín phân tích vững chắc.
