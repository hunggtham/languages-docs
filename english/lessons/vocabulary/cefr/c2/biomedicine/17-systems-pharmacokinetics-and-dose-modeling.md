# C2 Vocabulary — Systems pharmacokinetics and dose modeling

This lesson follows how pharmacometricians connect dose, concentration, physiology, covariates, and exposure targets when a simple one-size-fits-all regimen is inadequate.

Flow: **population pharmacokinetics → compartment model → nonlinear clearance → volume of distribution → clearance → target-mediated drug disposition → physiologically based pharmacokinetic model → drug-drug interaction → loading dose → maintenance dose → exposure metric → area under the curve → peak concentration → trough concentration → covariate model → allometric scaling → exposure matching → time to steady state → renal clearance → dose proportionality**.

## 1. population pharmacokinetics /ˌpɑpjəˈleɪʃən ˌfɑrməkoʊkəˈnɛtɪks/
**Part of speech:** noun
**Core meaning (English):** the analysis of concentration data from many individuals to estimate typical pharmacokinetic behavior and between-person variability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dược động học quần thể; gộp dữ liệu nhiều người để thấy giá trị điển hình và vì sao từng người lệch khác nhau.
**Grammar & collocations:** `population-pharmacokinetic analysis` — phân tích PK quần thể; `population PK model` — mô hình; `fit population pharmacokinetics` — ước lượng.
**Examples:** `Population pharmacokinetics showed that body size explained part of the exposure variability.` → Population pharmacokinetics cho thấy kích thước cơ thể giải thích một phần biến thiên phơi nhiễm.
**Liên kết tiếng Hàn:** `집단 약동학` (jipdan yakdonghak) — dược động học quần thể.

## 2. compartment model /kəmˈpɑrtmənt ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a mathematical representation that treats the body as connected spaces between which drug amount moves and is eliminated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình ngăn; chia cơ thể thành các “kho” toán học và mô tả thuốc đi vào, đi ra giữa các kho.
**Grammar & collocations:** `two-compartment model` — mô hình hai ngăn; `compartment-model fit` — khớp mô hình; `specify a compartment model` — định nghĩa.
**Examples:** `A two-compartment model captured the rapid distribution phase after intravenous dosing.` → Mô hình hai ngăn nắm được pha phân bố nhanh sau khi dùng thuốc tĩnh mạch.
**Liên kết tiếng Hàn:** `구획 모델` (guhwek model) — mô hình ngăn.

## 3. nonlinear clearance /ˌnɑnˈlɪniɚ ˈklɪrəns/
**Part of speech:** noun
**Core meaning (English):** elimination that changes with concentration or dose instead of remaining proportional across the tested range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thanh thải phi tuyến; enzyme hoặc transporter bão hòa khiến tăng liều không còn làm nồng độ tăng theo cùng tỷ lệ.
**Grammar & collocations:** `saturable nonlinear clearance` — thanh thải phi tuyến bão hòa; `nonlinear-clearance model` — mô hình; `estimate nonlinear clearance` — ước tính.
**Examples:** `Nonlinear clearance caused a disproportionate rise in concentration at the highest dose.` → Nonlinear clearance gây mức tăng nồng độ lớn hơn tỷ lệ ở liều cao nhất.
**Liên kết tiếng Hàn:** `비선형 청소율` (biseonhyeong cheongs yul) — thanh thải phi tuyến.

## 4. volume of distribution /ˈvɑljum əv ˌdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** a proportionality measure relating the amount of drug in the body to its measured plasma concentration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thể tích phân bố; không phải thể tích thật mà là con số cho biết thuốc dường như lan rộng khỏi huyết tương đến mức nào.
**Grammar & collocations:** `apparent volume of distribution` — thể tích phân bố biểu kiến; `large volume of distribution` — thể tích lớn; `estimate volume of distribution` — ước tính.
**Examples:** `The antibody's large volume of distribution reflected extensive movement into tissue spaces.` → Volume of distribution lớn của kháng thể phản ánh việc đi vào các khoang mô rộng.
**Liên kết tiếng Hàn:** `분포 용적` (bunpo yongjeok) — thể tích phân bố.

## 5. clearance /ˈklɪrəns/
**Part of speech:** noun
**Core meaning (English):** the volume of plasma from which a drug is completely removed per unit time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ thanh thải; tốc độ “dọn” thuốc khỏi một thể tích huyết tương quy ước trong mỗi đơn vị thời gian.
**Grammar & collocations:** `total clearance` — thanh thải toàn phần; `clearance estimate` — ước tính; `reduce drug clearance` — giảm thanh thải thuốc.
**Examples:** `Reduced clearance prolonged exposure even though the administered dose was unchanged.` → Clearance giảm kéo dài phơi nhiễm dù liều dùng không đổi.
**Liên kết tiếng Hàn:** `청소율` (cheongs yul) — độ thanh thải.

## 6. target-mediated drug disposition /ˈtɑrɡət ˈmiːdieɪtɪd drʌɡ ˌdɪspəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** drug distribution and elimination shaped by specific, often saturable binding to its pharmacological target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dược động học qua đích; chính target bắt thuốc và kéo thuốc vào tế bào hoặc làm tốc độ loại bỏ thay đổi.
**Grammar & collocations:** `target-mediated drug-disposition model` — mô hình TMDD; `saturable target-mediated disposition` — TMDD bão hòa; `fit a TMDD model` — khớp.
**Examples:** `Target-mediated drug disposition explained the steep exposure increase after target occupancy approached saturation.` → Target-mediated drug disposition giải thích phơi nhiễm tăng dốc khi occupancy của target gần bão hòa.
**Liên kết tiếng Hàn:** `표적 매개 약물 처리` (pyojeok maege yakmul cheori) — dược động học qua đích.

## 7. physiologically based pharmacokinetic model /ˌfɪziəˈlɑdʒɪkəli beɪst ˌfɑrməkoʊkəˈnɛtɪk ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that represents organs, blood flows, tissue composition, and biochemical processes to predict drug concentrations mechanistically.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình PK dựa trên sinh lý; thay các “ngăn” trừu tượng bằng gan, thận, mô và dòng máu có ý nghĩa sinh học.
**Grammar & collocations:** `physiologically based pharmacokinetic simulation` — mô phỏng PBPK; `PBPK model parameter` — tham số; `build a PBPK model` — xây mô hình.
**Examples:** `The physiologically based pharmacokinetic model predicted tissue exposure in a population not yet tested clinically.` → PBPK model dự đoán phơi nhiễm mô ở quần thể chưa được thử lâm sàng.
**Liên kết tiếng Hàn:** `생리학 기반 약동학 모델` (saengnihak giban yakdonghak model) — mô hình PK dựa trên sinh lý.

## 8. drug-drug interaction /drʌɡ drʌɡ ˌɪntəˈrækʃən/
**Part of speech:** noun
**Core meaning (English):** a change in one drug's effect or exposure caused by another drug taken at the same time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tương tác thuốc–thuốc; một thuốc chặn enzyme hoặc transporter khiến thuốc kia tích tụ hoặc mất tác dụng.
**Grammar & collocations:** `clinically relevant drug-drug interaction` — tương tác đáng kể; `DDI study` — nghiên cứu DDI; `predict a drug-drug interaction` — dự đoán.
**Examples:** `The interaction study found a clinically relevant drug-drug interaction through enzyme inhibition.` → Nghiên cứu phát hiện tương tác thuốc–thuốc đáng kể qua ức chế enzyme.
**Liên kết tiếng Hàn:** `약물 상호작용` (yakmul sanghojakyong) — tương tác thuốc–thuốc.

## 9. loading dose /ˈloʊdɪŋ doʊs/
**Part of speech:** noun
**Core meaning (English):** an initial dose chosen to reach a desired concentration more quickly than repeated standard doses would.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** liều nạp; đưa đủ lượng ban đầu để đạt mức điều trị sớm thay vì chờ nhiều lần dùng.
**Grammar & collocations:** `initial loading dose` — liều nạp ban đầu; `calculate a loading dose` — tính; `weight-based loading dose` — liều theo cân nặng.
**Examples:** `A loading dose reached the target concentration before the maintenance schedule began.` → Loading dose đạt nồng độ mục tiêu trước khi bắt đầu lịch maintenance.
**Liên kết tiếng Hàn:** `부하 용량` (buha yongnyang) — liều nạp.

## 10. maintenance dose /ˈmeɪntənəns doʊs/
**Part of speech:** noun
**Core meaning (English):** a repeated dose intended to replace eliminated drug and maintain a desired concentration range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** liều duy trì; bù phần thuốc đã bị loại để nồng độ quanh mức mục tiêu.
**Grammar & collocations:** `maintenance-dose interval` — khoảng cách liều; `adjust the maintenance dose` — điều chỉnh; `daily maintenance dose` — liều duy trì hằng ngày.
**Examples:** `Renal impairment required a lower maintenance dose after the loading dose was completed.` → Suy thận yêu cầu maintenance dose thấp hơn sau khi hoàn tất liều nạp.
**Liên kết tiếng Hàn:** `유지 용량` (yuji yongnyang) — liều duy trì.

## 11. exposure metric /ɪkˈspoʊʒɚ ˈmɛtrɪk/
**Part of speech:** noun
**Core meaning (English):** a quantitative measure summarizing how much drug concentration a patient experiences over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ số phơi nhiễm; biến đường cong nồng độ–thời gian thành con số để so liều và response.
**Grammar & collocations:** `exposure metric target` — mục tiêu; `individual exposure metric` — chỉ số cá nhân; `calculate an exposure metric` — tính.
**Examples:** `The exposure metric was more predictive of response than the nominal dose alone.` → Exposure metric dự đoán response tốt hơn chỉ nominal dose.
**Liên kết tiếng Hàn:** `노출 지표` (nochul j ipyo) — chỉ số phơi nhiễm.

## 12. area under the curve /ˈɛriə ˈʌndər ðə kɝv/
**Part of speech:** noun
**Core meaning (English):** the integral of a concentration–time curve, commonly used as a measure of total systemic drug exposure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** diện tích dưới đường cong AUC; cộng toàn bộ “lượng nồng độ theo thời gian” mà cơ thể trải qua.
**Grammar & collocations:** `plasma area under the curve` — AUC huyết tương; `AUC estimate` — ước tính; `compare area under the curve` — so sánh.
**Examples:** `The extended-release formulation produced a similar area under the curve with a lower peak.` → Công thức giải phóng kéo dài tạo AUC tương tự nhưng peak thấp hơn.
**Liên kết tiếng Hàn:** `곡선하면적` (gokseonhamyeonjeok) — diện tích dưới đường cong.

## 13. peak concentration /piːk ˌkɑnsənˈtreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the highest measured or predicted drug concentration during a dosing interval.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nồng độ đỉnh; điểm cao nhất của đường cong sau khi thuốc được hấp thu hoặc truyền vào.
**Grammar & collocations:** `peak plasma concentration` — nồng độ đỉnh huyết tương; `peak-concentration threshold` — ngưỡng; `lower the peak concentration` — hạ đỉnh.
**Examples:** `The slower infusion lowered peak concentration and reduced infusion-related symptoms.` → Truyền chậm hơn làm peak concentration thấp hơn và giảm triệu chứng liên quan truyền.
**Liên kết tiếng Hàn:** `최고 농도` (choego nongdo) — nồng độ đỉnh.

## 14. trough concentration /trɔf ˌkɑnsənˈtreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the lowest drug concentration in a dosing interval, usually measured immediately before the next dose.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nồng độ đáy; mức thấp nhất ngay trước liều kế tiếp, thường dùng để tránh tụt dưới ngưỡng hiệu quả.
**Grammar & collocations:** `trough-concentration monitoring` — theo dõi; `predose trough concentration` — nồng độ đáy trước liều; `target the trough` — nhắm mức đáy.
**Examples:** `The clinician increased the interval frequency after the trough concentration fell below the efficacy target.` → Bác sĩ tăng tần suất liều sau khi trough concentration thấp hơn mục tiêu hiệu quả.
**Liên kết tiếng Hàn:** `최저 농도` (choejeo nongdo) — nồng độ đáy.

## 15. covariate model /ˈkoʊˌvɛriət ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a pharmacometric model that explains individual parameter differences using measurable characteristics such as weight, age, or organ function.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình hiệp biến; đưa cân nặng, tuổi, xét nghiệm hoặc bệnh nền vào để giải thích vì sao PK từng người khác nhau.
**Grammar & collocations:** `covariate-model selection` — chọn mô hình; `clinically relevant covariate` — hiệp biến liên quan; `add a covariate` — thêm hiệp biến.
**Examples:** `The covariate model linked clearance to kidney function and body size.` → Covariate model liên kết clearance với chức năng thận và kích thước cơ thể.
**Liên kết tiếng Hàn:** `공변량 모델` (gongbyeollyang model) — mô hình hiệp biến.

## 16. allometric scaling /ˌæləˈmɛtrɪk ˈskeɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** scaling a biological parameter across body sizes using a power-law relationship.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** co giãn allometric; không tăng liều tỷ lệ thẳng với cân nặng mà dùng quy luật lũy thừa sinh học.
**Grammar & collocations:** `allometric-scaling exponent` — số mũ; `body-size allometric scaling` — scaling theo kích thước; `apply allometric scaling` — áp dụng.
**Examples:** `Allometric scaling provided a starting clearance estimate for the first-in-human dose.` → Allometric scaling cho ước tính clearance ban đầu cho liều đầu tiên trên người.
**Liên kết tiếng Hàn:** `알로메트릭 스케일링` (allometeurik seukeilling) — co giãn allometric.

## 17. exposure matching /ɪkˈspoʊʒɚ ˈmætʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** adjusting a dose or regimen so that exposure in one population or formulation resembles a reference exposure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khớp phơi nhiễm; chỉnh liều để nhóm mới đạt mức AUC hoặc nồng độ tương đương nhóm tham chiếu.
**Grammar & collocations:** `exposure-matching strategy` — chiến lược; `match exposure across populations` — khớp; `exposure-matched dose` — liều đã khớp.
**Examples:** `Exposure matching supported a lower dose for participants with reduced renal function.` → Exposure matching ủng hộ liều thấp hơn cho người có chức năng thận giảm.
**Liên kết tiếng Hàn:** `노출 맞춤` (nochul matchum) — khớp phơi nhiễm.

## 18. time to steady state /taɪm tə ˈstɛdi steɪt/
**Part of speech:** noun
**Core meaning (English):** the time required for repeated dosing or infusion to approach a stable pattern of concentration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian đến trạng thái ổn định; chờ đủ lâu để lượng vào và lượng bị loại cân bằng quanh mức lặp lại.
**Grammar & collocations:** `time-to-steady-state estimate` — ước tính; `shorten time to steady state` — rút ngắn; `reach steady state` — đạt ổn định.
**Examples:** `The long time to steady state made early concentration samples misleading.` → Time to steady state dài khiến mẫu nồng độ sớm dễ gây hiểu lầm.
**Liên kết tiếng Hàn:** `정상 상태 도달 시간` (jeongsang sangtae dodal sigan) — thời gian đến ổn định.

## 19. renal clearance /ˈriːnəl ˈklɪrəns/
**Part of speech:** noun
**Core meaning (English):** the portion of total drug clearance attributable to removal through the kidneys.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thanh thải qua thận; lọc hoặc bài tiết ở thận quyết định một phần tốc độ thuốc rời cơ thể.
**Grammar & collocations:** `renal-clearance estimate` — ước tính; `reduced renal clearance` — thanh thải thận giảm; `adjust for renal clearance` — điều chỉnh.
**Examples:** `The dose was reduced because renal clearance declined during the acute illness.` → Liều được giảm vì renal clearance suy giảm trong đợt bệnh cấp.
**Liên kết tiếng Hàn:** `신장 청소율` (sinjang cheongs yul) — thanh thải qua thận.

## 20. dose proportionality /doʊs ˌproʊpɔrʃəˈnæləti/
**Part of speech:** noun
**Core meaning (English):** the extent to which exposure increases in direct proportion to an increase in dose.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính tỷ lệ theo liều; nếu liều tăng gấp đôi mà AUC cũng gần gấp đôi thì PK có dose proportionality.
**Grammar & collocations:** `dose-proportional exposure` — phơi nhiễm tỷ lệ; `assess dose proportionality` — đánh giá; `depart from dose proportionality` — lệch tỷ lệ.
**Examples:** `The analysis found dose proportionality at low doses but saturation at the upper range.` → Phân tích thấy dose proportionality ở liều thấp nhưng bão hòa ở dải cao.
**Liên kết tiếng Hàn:** `용량 비례성` (yongnyang biryeseong) — tính tỷ lệ theo liều.

## Review in context

**Population pharmacokinetics** can begin with a **compartment model** and test whether **nonlinear clearance** or a changing **volume of distribution** is needed. Total **clearance** may be shaped by **target-mediated drug disposition**, while a **physiologically based pharmacokinetic model** can represent organs and flows. A **drug-drug interaction** may require a new **loading dose** or **maintenance dose**. Investigators compare an **exposure metric**, especially **area under the curve**, **peak concentration**, and **trough concentration**. A **covariate model** and **allometric scaling** explain between-person differences; **exposure matching** can then align regimens. The **time to steady state**, **renal clearance**, and **dose proportionality** determine whether the proposed schedule behaves as expected.

**Bản dịch tiếng Việt:**

Population pharmacokinetics có thể bắt đầu bằng compartment model và kiểm tra xem có cần nonlinear clearance hoặc volume of distribution thay đổi không. Total clearance có thể chịu ảnh hưởng của target-mediated drug disposition, còn physiologically based pharmacokinetic model có thể biểu diễn các cơ quan và dòng chảy. Drug-drug interaction có thể đòi hỏi loading dose hoặc maintenance dose mới. Nhà nghiên cứu so sánh exposure metric, đặc biệt là area under the curve, peak concentration và trough concentration. Covariate model và allometric scaling giải thích khác biệt giữa người; exposure matching sau đó có thể căn chỉnh các phác đồ. Time to steady state, renal clearance và dose proportionality quyết định lịch dùng đề xuất có vận hành như dự kiến hay không.
