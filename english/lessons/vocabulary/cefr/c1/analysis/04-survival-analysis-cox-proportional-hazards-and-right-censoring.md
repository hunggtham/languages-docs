# C1 Vocabulary 04 — Time-to-event survival analysis, Cox proportional hazards regression, and non-informative right censoring

Chuyên đề từ vựng C1 này tập trung vào các phương pháp phân tích thời gian sống (survival analysis), mô hình hồi quy tỷ lệ hazard Cox, hiện tượng kiểm duyệt phải không cung cấp thông tin, đường cong Kaplan-Meier, ước lượng tỷ số hazard cùng các kỹ thuật thống kê sinh học dọc nâng cao.

---

## 1. time-to-event survival analysis /ˈtaɪm tuː ɪˈvɛnt ˈsɜːrvɪvəl əˈnæləsɪs/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ chỉ phương pháp thống kê hoặc tân ngữ sau các động từ như `perform`, `apply`, `utilize`.

**Core meaning — English:** A branch of statistics dedicated to analyzing the expected duration of time until one or more events of interest, such as death, failure, or disease relapse, occur.

**Core meaning & mental image — Tiếng Việt:** Phân tích thời gian sống theo sự kiện. Hãy hình dung một cuộc đua marathon: nhà thống kê không chỉ quan tâm xem ai về đích trước, mà bấm giờ chính xác từng giây đối với từng vận động viên cho đến khi họ vượt qua vạch đích hoặc bỏ cuộc dọc đường.

**Grammar & collocations:** `perform time-to-event survival analysis` — thực hiện phân tích thời gian sống theo sự kiện; `time-to-event survival analysis methodology` — phương pháp luận phân tích thời gian sống; `longitudinal time-to-event survival analysis` — phân tích thời gian sống theo chiều dọc thời gian.

**Register & nuance:** Thuật ngữ cốt lõi trong thống kê sinh học (*biostatistics*), nghiên cứu lâm sàng (*clinical trials*), và bảo hiểm hành vi, nơi dữ liệu thường không hoàn chỉnh do đối tượng rời khỏi nghiên cứu.

**Examples:** `Time-to-event survival analysis is essential for evaluating whether the experimental oncology drug extends patient lifespan.` → Phân tích thời gian sống theo sự kiện là điều cốt yếu để đánh giá xem loại thuốc ung thư thử nghiệm có kéo dài tuổi thọ của bệnh nhân hay không.

**Liên kết tiếng Hàn:** `생존 분석` (生存 分析) — phương pháp phân tích dữ liệu thời gian sống.

---

## 2. Cox proportional hazards model /kɑːks prəˈpɔːrʃənl ˈhæzərdz ˈmɑːdəl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ mô hình toán học hoặc tân ngữ sau `fit`, `estimate`, `interpret`.

**Core meaning — English:** A semi-parametric regression model commonly used in medical and epidemiological research to investigate the relationship between survival time and one or more predictor variables without making assumptions about the baseline hazard function.

**Core meaning & mental image — Tiếng Việt:** Mô hình tỷ lệ hazard tỷ lệ Cox. Hãy hình dung một chiếc cân đòn nhạy bén đo lường sức nặng của từng yếu tố nguy cơ (như hút thuốc, huyết áp): mô hình cho phép so sánh nguy cơ tử vong giữa các nhóm bệnh nhân mà không cần biết chính xác biểu đồ nguy cơ nền tảng trông như thế nào.

**Grammar & collocations:** `fit a Cox proportional hazards model` — lắp khớp mô hình tỷ lệ hazard Cox; `Cox proportional hazards model assumption` — giả định của mô hình tỷ lệ hazard Cox; `multivariable Cox proportional hazards model` — mô hình tỷ lệ hazard Cox đa biến.

**Register & nuance:** Mô hình thống kê phổ biến nhất trong nghiên cứu y học dọc (*longitudinal medical research*), do nhà thống kê Sir David Cox phát triển.

**Examples:** `Researchers fitted a Cox proportional hazards model to estimate the impact of targeted therapy on patient relapse rates.` → Các nhà nghiên cứu đã lắp khớp mô hình tỷ lệ hazard Cox để ước tính tác động của liệu pháp nhắm trúng đích đối với tỷ lệ tái phát của bệnh nhân.

**Liên kết tiếng Hàn:** `콕스 비례 위험 모델` (Cox 比例 危險 model) — mô hình hồi quy tỷ lệ hazard Cox.

---

## 3. non-informative right censoring /ˌnɑːn ˈɪnfərmətɪv raɪt ˈsɛnsərɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ giả định thống kê hoặc tân ngữ sau `assume`, `handle`, `account for`.

**Core meaning — English:** A statistical phenomenon where the exact survival time of a subject is unknown because the observation ends before the event occurs, but the reason for loss to follow-up is unrelated to the probability of experiencing the event.

**Core meaning & mental image — Tiếng Việt:** Kiểm duyệt phải không cung cấp thông tin. Hãy hình dung một người tham gia nghiên cứu chuyển nhà đến thành phố khác vào năm thứ ba của cuộc thử nghiệm 5 năm: việc họ rời đi hoàn toàn ngẫu nhiên và không dính dáng gì đến việc bệnh tình của họ nặng lên hay thuyên giảm.

**Grammar & collocations:** `assume non-informative right censoring` — giả định kiểm duyệt phải không cung cấp thông tin; `handle non-informative right censoring` — xử lý kiểm duyệt phải không cung cấp thông tin; `bias from non-informative right censoring` — sai lệch do kiểm duyệt phải không cung cấp thông tin.

**Register & nuance:** Giả định nền tảng trong hầu hết các phương pháp phân tích sống còn; nếu việc kiểm duyệt có thông tin (*informative censoring*), kết quả thống kê sẽ bị chệch lạc nghiêm trọng.

**Examples:** `Valid survival estimates rely on the crucial statistical assumption of non-informative right censoring throughout the patient followup period.` → Các ước tính sống còn hợp lệ phụ thuộc vào giả định thống kê tối quan trọng về kiểm duyệt phải không cung cấp thông tin trong suốt thời gian theo dõi bệnh nhân.

**Liên kết tiếng Hàn:** `비정보성 우측 중도탈락` (非情報性 右側 中途脫落) — hiện tượng kiểm duyệt phải không có tính cung cấp thông tin thiên lệch.

---

## 4. Kaplan-Meier survival curve /ˈkæplən ˈmaɪər ˈsɜːrvɪvəl kɜːrv/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `plot`, `generate`, `estimate`.

**Core meaning — English:** A non-parametric descriptive statistic used to estimate the probability of surviving for a given length of time while taking into account censored data, typically visualized as a step function.

**Core meaning & mental image — Tiếng Việt:** Đường cong sống sót Kaplan-Meier. Hãy hình dung một chiếc cầu thang đi xuống: mỗi khi có một bệnh nhân gặp sự kiện (tử vong hoặc tái phát), bậc thang lại sụt xuống một nấc, giúp ta nhìn trực quan tỷ lệ sống sót giảm dần theo thời gian.

**Grammar & collocations:** `plot a Kaplan-Meier survival curve` — vẽ đường cong sống sót Kaplan-Meier; `Kaplan-Meier survival curve estimator` — ước lượng đường cong sống sót Kaplan-Meier; `compare Kaplan-Meier survival curves` — so sánh các đường cong sống sót Kaplan-Meier.

**Register & nuance:** Biểu đồ trực quan mang tính biểu tượng trong mọi bài báo y khoa và sinh học phân tích thời gian sống.

**Examples:** `The Kaplan-Meier survival curve clearly illustrated a significant survival advantage for patients receiving the combination immunotherapy.` → Đường cong sống sót Kaplan-Meier minh họa rõ ràng lợi thế sống sót đáng kể cho những bệnh nhân tiếp nhận liệu pháp miễn dịch kết hợp.

**Liên kết tiếng Hàn:** `카플란-마이어 생존 곡선` (Kaplan-Meier 生存 曲線) — đồ thị đường cong ước lượng xác suất sống sót Kaplan-Meier.

---

## 5. hazard ratio effect estimate /ˈhæzərd ˈreɪʃioʊ ɪˈfɛkt ˈɛstəmɪt/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `calculate`, `report`, `interpret`.

**Core meaning — English:** The comparative statistical measure representing the ratio of the hazard rate in a treatment group versus a control group, indicating the relative risk of the event occurring at any given point in time.

**Core meaning & mental image — Tiếng Việt:** Ước lượng hiệu ứng tỷ số hazard. Hãy hình dung một tỷ lệ cá cược nguy hiểm: nếu tỷ số hazard bằng 0.5, điều đó có nghĩa là nhóm điều trị có nguy cơ gặp sự cố tại bất kỳ thời điểm nào thấp hơn một nửa so với nhóm đối chứng.

**Grammar & collocations:** `report the hazard ratio effect estimate` — báo cáo ước lượng hiệu ứng tỷ số hazard; `adjusted hazard ratio effect estimate` — ước lượng hiệu ứng tỷ số hazard đã hiệu chỉnh; `statistically significant hazard ratio` — tỷ số hazard có ý nghĩa thống kê.

**Register & nuance:** Chỉ số trọng yếu trong các thử nghiệm lâm sàng ngẫu nhiên để định lượng mức độ hiệu quả hoặc độc hại của một can thiệp y tế.

**Examples:** `Clinical trials reported a hazard ratio effect estimate of 0.65, demonstrating a substantial reduction in disease progression risk.` → Các thử nghiệm lâm sàng đã báo cáo ước lượng hiệu ứng tỷ số hazard là 0.65, thể hiện mức giảm đáng kể nguy cơ tiến triển bệnh.

**Liên kết tiếng Hàn:** `위험비 효과 추정치` (危險比 効果 推定値) — giá trị ước lượng hiệu ứng dựa trên tỷ số nguy cơ hazard.

---

## 6. log-rank hypothesis test /lɔːɡ ræŋk haɪˈpɑːθəsɪs tɛst/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `perform`, `conduct`, `apply`.

**Core meaning — English:** A non-parametric hypothesis test used to compare the survival distributions of two or more independent groups by evaluating the differences between observed and expected event counts at each failure time.

**Core meaning & mental image — Tiếng Việt:** Kiểm định giả thuyết log-rank. Hãy hình dung một chiếc cân so tài giữa hai đội bóng: kiểm định dồn tất cả các thời điểm sự kiện xảy ra lại, tính tổng số sự kiện quan sát được so với kỳ vọng để xem nhóm nào sống sót tốt hơn một cách có ý nghĩa thống kê.

**Grammar & collocations:** `perform a log-rank hypothesis test` — thực hiện kiểm định giả thuyết log-rank; `log-rank hypothesis test p-value` — giá trị p của kiểm định log-rank; `statistically powered log-rank test` — kiểm định log-rank có đủ lực mẫu thống kê.

**Register & nuance:** Kiểm định tiêu chuẩn phi tham số để kiểm tra xem hai đường cong Kaplan-Meier có thực sự khác biệt nhau hay không.

**Examples:** `A log-rank hypothesis test confirmed that the difference in survival distributions between the two cohorts was statistically significant.` → Kiểm định giả thuyết log-rank xác định rằng sự khác biệt về phân phối sống sót giữa hai nhóm thuần tập có ý nghĩa thống kê.

**Liên kết tiếng Hàn:** `로그랭크 가설 검정` (log-rank 假說 検定) — phương pháp kiểm định giả thuyết log-rank để so sánh đường cong sống sót.

---

## 7. baseline hazard function /ˈbeɪsˌlaɪn ˈhæzərd ˈfʌŋkʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `estimate`, `model`, `evaluate`.

**Core meaning — English:** The underlying hazard rate over time for an individual whose covariates are all equal to zero in a proportional hazards regression model.

**Core meaning & mental image — Tiếng Việt:** Hàm hazard nền tảng. Hãy hình dung vạch xuất phát của nguy cơ: đó là nhịp độ rủi ro tự nhiên của một người bình thường không mang bất kỳ yếu tố nguy cơ đặc biệt nào khi bước vào nghiên cứu.

**Grammar & collocations:** `estimate the baseline hazard function` — ước lượng hàm hazard nền tảng; `non-parametric baseline hazard function` — hàm hazard nền tảng phi tham số; `flexible baseline hazard function` — hàm hazard nền tảng linh hoạt.

**Register & nuance:** Khái niệm toán học cốt lõi trong mô hình Cox, cho phép mô hình giữ lại tính linh hoạt cao vì hàm nền tảng này không bị ràng buộc bởi bất kỳ phân phối xác suất cố định nào.

**Examples:** `The Cox regression model leaves the baseline hazard function unspecified, focusing entirely on covariate effect estimation.` → Mô hình hồi quy Cox để ngỏ hàm hazard nền tảng mà không xác định trước, tập trung hoàn toàn vào việc ước lượng hiệu ứng hiệp biến.

**Liên kết tiếng Hàn:** `기준 위험 함수` (基準 危險 函數) — hàm nguy cơ nền tảng trong mô hình Cox.

---

## 8. cumulative hazard rate metric /ˈkjuːmjəˌleɪtɪv ˈhæzərd reɪt ˈmɛtrɪk/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `calculate`, `plot`, `analyze`.

**Core meaning — English:** A statistical metric representing the total accumulated risk of experiencing the event of interest from time zero up to a specified time point.

**Core meaning & mental image — Tiếng Việt:** Thước đo tỷ lệ hazard tích lũy. Hãy hình dung một chiếc đồng hồ đo lượng mưa tích lũy suốt mùa bão: không chỉ đo lượng mưa từng giờ, thước đo này cộng dồn toàn bộ lượng nguy cơ rủi ro đã đổ xuống theo thời gian.

**Grammar & collocations:** `calculate the cumulative hazard rate metric` — tính toán thước đo tỷ lệ hazard tích lũy; `Nelson-Aalen cumulative hazard rate` — tỷ lệ hazard tích lũy Nelson-Aalen; `plot cumulative hazard curves` — vẽ các đường cong hazard tích lũy.

**Register & nuance:** Công cụ quan trọng để kiểm tra các giả định mô hình và đánh giá tổng lượng rủi ro mà một đối tượng phải gánh chịu trong nghiên cứu dài hạn.

**Examples:** `Epidemiologists analyzed the cumulative hazard rate metric to visualize disease accumulation across different age brackets.` → Các nhà dịch tễ học đã phân tích thước đo tỷ lệ hazard tích lũy để hình dung sự tích tụ bệnh lý qua các nhóm tuổi khác nhau.

**Liên kết tiếng Hàn:** `누적 위험률 측정항목` (累積 危險率 測定項目) — thước đo tỷ lệ nguy cơ tích lũy theo thời gian.

---

## 9. time-varying covariate coefficient /ˈtaɪm ˌvɛrɪɪŋ koʊˈvɛriət ˌkoʊəˈfɪʃənt/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `estimate`, `test`, `incorporate`.

**Core meaning — English:** A statistical coefficient in an advanced regression model that captures predictors whose values or effects on the hazard rate change dynamically as time progresses.

**Core meaning & mental image — Tiếng Việt:** Hệ số hiệp biến biến đổi theo thời gian. Hãy hình dung một loại thuốc mà tác dụng giảm dần theo từng tháng: hệ số này cho phép mô hình ghi nhận rằng sức mạnh bảo vệ của thuốc không giữ nguyên cố định mà thay đổi theo năm tháng.

**Grammar & collocations:** `incorporate a time-varying covariate coefficient` — tích hợp hệ số hiệp biến biến đổi theo thời gian; `test for time-varying covariate coefficients` — kiểm định các hệ số hiệp biến biến đổi theo thời gian; `estimate time-varying coefficients` — ước lượng các hệ số biến đổi theo thời gian.

**Register & nuance:** Cần thiết khi giả định tỷ lệ hazard bị vi phạm, cho phép mô hình thích ứng với các tác động y tế thay đổi theo thời hạn theo dõi.

**Examples:** `Accounting for treatment fatigue required incorporating a time-varying covariate coefficient into the survival regression.` → Việc tính toán sự suy giảm hiệu quả điều trị đòi hỏi phải tích hợp hệ số hiệp biến biến đổi theo thời gian vào mô hình hồi quy sống còn.

**Liên kết tiếng Hàn:** `시간 괼변수 공변량 계수` (時間 可變數 共變量 係數) — hệ số biến đổi theo thời gian của biến hiệp biến trong mô hình.

---

## 10. proportional hazards assumption test /prəˈpɔːrʃənl ˈhæzərdz əˈsʌmpʃən tɛst/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `perform`, `run`, `satisfy`.

**Core meaning — English:** A diagnostic evaluation procedure to check whether the effect of each covariate on the hazard rate remains constant over time (i.e., hazards are proportional).

**Core meaning & mental image — Tiếng Việt:** Kiểm định giả định tỷ lệ hazard tỷ lệ. Hãy hình dung việc kiểm tra hai chiếc xe chạy song song trên đường cao tốc: ta phải xác minh xem khoảng cách tỷ lệ tốc độ giữa hai xe có giữ nguyên không đổi suốt chuyến đi hay cứ giãn ra/thu hẹp lại.

**Grammar & collocations:** `perform a proportional hazards assumption test` — thực hiện kiểm định giả định tỷ lệ hazard tỷ lệ; `violate the proportional hazards assumption test` — vi phạm kiểm định giả định tỷ lệ hazard tỷ lệ; `satisfy the proportional hazards assumption` — thỏa mãn giả định tỷ lệ hazard tỷ lệ.

**Register & nuance:** Kiểm tra chẩn đoán bắt buộc trước khi diễn giải bất kỳ mô hình hồi quy Cox nào; sự vi phạm giả định này làm mất hiệu lực của các hệ số hazard ratio.

**Examples:** `Running a proportional hazards assumption test using Schoenfeld residuals revealed that the treatment effect varied over time.` → Việc chạy kiểm định giả định tỷ lệ hazard tỷ lệ bằng phần dư Schoenfeld đã tiết lộ rằng hiệu ứng điều trị thay đổi theo thời gian.

**Liên kết tiếng Hàn:** `비례 위험 가정 검정` (比例 危險 假定 検定) — kiểm định chẩn đoán tính đúng đắn của giả định tỷ lệ hazard không đổi.

---

## 11. Schoenfeld residuals plot /ˈʃoʊnfɛld rɪˈzɪduəlz plɑːt/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `generate`, `examine`, `plot`.

**Core meaning — English:** A graphical diagnostic tool used to assess whether the proportional hazards assumption holds by plotting scaled residuals against transformed survival time.

**Core meaning & mental image — Tiếng Việt:** Biểu đồ phần dư Schoenfeld. Hãy hình dung một biểu đồ phân tán đường ngang: nếu các điểm dữ liệu nằm phẳng ngang đều đặn theo thời gian, nghĩa là giả định tỷ lệ hazard được giữ vững; nếu dốc lên hoặc chúc xuống, giả định đã bị phá vỡ.

**Grammar & collocations:** `examine a Schoenfeld residuals plot` — kiểm tra biểu đồ phần dư Schoenfeld; `generate Schoenfeld residuals plots` — tạo các biểu đồ phần dư Schoenfeld; `interpret Schoenfeld residuals` — diễn giải phần dư Schoenfeld.

**Register & nuance:** Công cụ hình ảnh không thể thiếu trong bộ công cụ phân tích chẩn đoán mô hình Cox của các nhà thống kê sinh học.

**Examples:** `The researcher examined the Schoenfeld residuals plot to verify that the proportional hazards assumption was not violated for age.` → Nhà nghiên cứu đã kiểm tra biểu đồ phần dư Schoenfeld để xác minh rằng giả định tỷ lệ hazard không bị vi phạm đối với biến độ tuổi.

**Liên kết tiếng Hàn:** `숀펠드 잔차 그림` (Schoenfeld 殘差 plot) — biểu đồ chẩn đoán phần dư Schoenfeld trong phân tích sống còn.

---

## 12. left truncation entry delay /lɛft trʌŋˈkeɪʃən ˈɛntri dɪˈleɪ/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm chủ ngữ hiện tượng dữ liệu hoặc tân ngữ sau `account for`, `adjust for`.

**Core meaning — English:** A data structure phenomenon where subjects enter a survival study at a delayed age or time point after the true time origin, meaning those who experienced the event prior to entry are entirely unobserved.

**Core meaning & mental image — Tiếng Việt:** Sự cắt cụt trái và độ trễ gia nhập. Hãy hình dung một nghiên cứu về chứng mất trí nhớ chỉ tuyển các cụ từ 70 tuổi trở lên: những người đã mắc bệnh và tử vong trước 70 tuổi bị bỏ sót hoàn toàn khỏi dữ liệu quan sát.

**Grammar & collocations:** `account for left truncation entry delay` — tính đến độ trễ gia nhập do cắt cụt trái; `left truncation and right censoring` — cắt cụt trái và kiểm duyệt phải; `bias from left truncation` — sai lệch do cắt cụt trái.

**Register & nuance:** Hiện tượng thống kê phức tạp đòi hỏi các phương pháp điều chỉnh đặc biệt để tránh sai lệch chọn mẫu (*selection bias*).

**Examples:** `Failure to account for left truncation entry delay in the occupational cohort study introduced severe survivor bias.` → Việc không tính đến độ trễ gia nhập do cắt cụt trái trong nghiên cứu thuần tập nghề nghiệp đã gây ra sai lệch người sống sót nghiêm trọng.

**Liên kết tiếng Hàn:** `좌측 절단 진입 지연` (左側 切斷 進入 遲延) — hiện tượng cắt cụt dữ liệu bên trái do độ trễ thời điểm gia nhập nghiên cứu.

---

## 13. competing risks cumulative incidence /kəmˈpiːtɪŋ rɪsks ˈkjuːmjəˌleɪtɪv ˈɪnsɪdəns/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm tân ngữ sau `estimate`, `calculate`, `model`.

**Core meaning — English:** An epidemiological statistical approach used when subjects are exposed to multiple mutually exclusive event types (e.g., dying from heart disease versus dying from cancer), preventing the occurrence of the primary event of interest.

**Core meaning & mental image — Tiếng Việt:** Tỷ lệ mới mắc tích lũy rủi ro cạnh tranh. Hãy hình dung một cuộc đua mà các vận động viên có thể bị loại vì ngã xe hoặc bị loại vì chấn thương cơ: sự kiện này loại trừ khả năng xảy ra sự kiện kia, đòi hỏi phương pháp tính toán tách biệt.

**Grammar & collocations:** `estimate competing risks cumulative incidence` — ước lượng tỷ lệ mới mắc tích lũy rủi ro cạnh tranh; `competing risks regression model` — mô hình hồi quy rủi ro cạnh tranh; `cumulative incidence function for competing risks` — hàm tỷ lệ mới mắc tích lũy cho rủi ro cạnh tranh.

**Register & nuance:** Cực kỳ quan trọng trong ung thư học và lão khoa, nơi bệnh nhân lớn tuổi có nguy cơ tử vong vì nhiều nguyên nhân khác nhau.

**Examples:** `Using a competing risks cumulative incidence framework prevented overestimating cancer mortality by accounting for deaths from cardiovascular disease.` → Việc sử dụng khung tỷ lệ mới mắc tích lũy rủi ro cạnh tranh đã ngăn chặn việc ước tính quá cao tỷ lệ tử vong do ung thư bằng cách tính đến các trường hợp tử vong do bệnh tim mạch.

**Liên kết tiếng Hàn:** `경쟁 위험 누적 발생률` (競爭 危險 累積 發生率) — tỷ lệ tích lũy của các nguyên nhân rủi ro cạnh tranh lẫn nhau.

---

## 14. median survival duration estimate /ˈmiːdiən ˈsɜːrvɪvəl dʊˈreɪʃən ˈɛstəmɪt/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `calculate`, `report`, `estimate`.

**Core meaning — English:** The estimated time point at which exactly 50 percent of the study population is projected to have experienced the event of interest.

**Core meaning & mental image — Tiếng Việt:** Ước lượng thời gian sống trung vị. Hãy hình dung vạch mốc chính giữa của đám đông: đó là thời điểm mà một nửa số bệnh nhân trong nhóm thử nghiệm vẫn còn sống và một nửa đã không may qua đời.

**Grammar & collocations:** `calculate the median survival duration estimate` — tính toán ước lượng thời gian sống trung vị; `median survival duration of twelve months` — thời gian sống trung vị mười hai tháng; `report median survival` — báo cáo thời gian sống trung vị.

**Register & nuance:** Chỉ số dễ hiểu và được sử dụng rộng rãi nhất để thông báo hiệu quả điều trị cho bệnh nhân và bác sĩ lâm sàng.

**Examples:** `The clinical trial reported a median survival duration estimate of 24.5 months for patients receiving the novel targeted antibody.` → Thử nghiệm lâm sàng đã báo cáo ước lượng thời gian sống trung vị là 24.5 tháng cho những bệnh nhân tiếp nhận kháng thể nhắm trúng đích mới.

**Liên kết tiếng Hàn:** `중앙 생존 기간 추정치` (中央 生存 期間 推定値) — giá trị ước lượng thời gian sống trung vị của 50% nhóm nghiên cứu.

---

## 15. parametric Weibull survival model /ˌpærəˈtrɪk ˈweɪbʊl ˈsɜːrvɪvəl ˈmɑːdəl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `fit`, `utilize`, `compare`.

**Core meaning — English:** A fully parametric regression model that assumes the underlying survival time follows a Weibull probability distribution, allowing for monotonically increasing or decreasing hazard rates over time.

**Core meaning & mental image — Tiếng Việt:** Mô hình sống sót Weibull tham số hóa. Hãy hình dung một chiếc khuôn đúc toán học có sẵn hình dáng cong mềm mại: thay vì để dữ liệu tự do tự tại như mô hình Cox, mô hình này ép thời gian sống vào một đường cong xác suất chuẩn xác.

**Grammar & collocations:** `fit a parametric Weibull survival model` — lắp khớp mô hình sống sót Weibull tham số; `Weibull survival model acceleration factor` — hệ số gia tốc của mô hình sống sót Weibull; `compare Weibull versus Cox models` — so sánh mô hình Weibull với mô hình Cox.

**Register & nuance:** Hữu ích khi hình dạng của tỷ lệ hazard đã được biết trước (ví dụ: tăng dần hoặc giảm dần theo tuổi thọ sản phẩm hoặc bệnh lý).

**Examples:** `Engineers fitted a parametric Weibull survival model to forecast the reliability lifespan of industrial lithium-ion batteries.` → Các kỹ sư đã lắp khớp mô hình sống sót Weibull tham số để dự báo thời gian tuổi thọ độ tin cậy của pin lithium-ion công nghiệp.

**Liên kết tiếng Hàn:** `모수적 와이불 생존 모델` (母數的 Weibull 生存 model) — mô hình phân phối sống sót Weibull dạng tham số.

---

## 16. censored observation dropout /ˈsɛnsərd ˌɑːbzərˈveɪʃən ˈdrɑːˌpaʊt/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm chủ ngữ chỉ hiện tượng mất dấu hoặc tân ngữ sau `account for`, `minimize`.

**Core meaning — English:** The clinical trial phenomenon where participants withdraw consent, move away, or stop responding, resulting in censored observations before the primary endpoint is reached.

**Core meaning & mental image — Tiếng Việt:** Hiện tượng bỏ cuộc của quan sát bị kiểm duyệt. Hãy hình dung một cuộc đua đường dài mà vài vận động viên tự ý rời khỏi đường chạy vì lý do cá nhân trước khi trọng tài kịp ghi nhận kết quả về đích của họ.

**Grammar & collocations:** `minimize censored observation dropout` — giảm thiểu tình trạng bỏ cuộc của quan sát bị kiểm duyệt; `dropout rate in survival studies` — tỷ lệ bỏ cuộc trong các nghiên cứu sống sót; `account for participant dropout` — tính đến sự bỏ cuộc của người tham gia.

**Register & nuance:** Thách thức lớn trong thiết kế nghiên cứu dọc; tỷ lệ bỏ cuộc quá cao làm suy yếu lực lượng thống kê và gây sai lệch kết quả.

**Examples:** `Investigators implemented aggressive tracking protocols to minimize censored observation dropout during the five-year clinical followup.` → Các nhà điều tra đã triển khai các giao thức theo dõi quyết liệt để giảm thiểu tình trạng bỏ cuộc của quan sát bị kiểm duyệt trong suốt quá trình theo dõi lâm sàng 5 năm.

**Liên kết tiếng Hàn:** `중도 탈락 관측치` (中途 脫落 觀測値) — các quan sát bị kiểm duyệt do đối tượng bỏ cuộc giữa chừng.

---

## 17. clinical endpoint event tracking /ˈklɪnɪkəl ˈɛntpɔɪnt ɪˈvɛnt ˈtrækɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ quản lý dữ liệu hoặc tân ngữ sau `manage`, `optimize`, `automate`.

**Core meaning — English:** The rigorous systematic process of monitoring, adjudicating, and recording the precise occurrence dates of primary medical events across trial participants.

**Core meaning & mental image — Tiếng Việt:** Theo dõi sự kiện điểm kết cục lâm sàng. Hãy hình dung một trung tâm điều khiển không gian theo dõi từng giây phút tàu vũ trụ chạm mốc quỹ đạo: mọi sự kiện bệnh lý quan trọng đều được ghi nhận ngày giờ chính xác bằng hệ thống kiểm định độc lập.

**Grammar & collocations:** `ensure rigorous clinical endpoint event tracking` — đảm bảo theo dõi sự kiện điểm kết cục lâm sàng nghiêm ngặt; `clinical endpoint event tracking committee` — hội đồng theo dõi sự kiện điểm kết cục lâm sàng; `standardized endpoint event tracking` — theo dõi sự kiện điểm kết cục chuẩn hóa.

**Register & nuance:** Hoạt động cốt lõi trong quản lý thử nghiệm lâm sàng ngẫu nhiên (*RCTs*), đảm bảo tính chính xác tuyệt đối của dữ liệu đầu vào.

**Examples:** `Independent adjudication committees oversaw clinical endpoint event tracking to eliminate any potential reporting bias.` → Các hội đồng thẩm định độc lập đã giám sát việc theo dõi sự kiện điểm kết cục lâm sàng nhằm loại bỏ mọi sai lệch báo cáo tiềm ẩn.

**Liên kết tiếng Hàn:** `임상 종점 이벤트 추적` (臨床 終點 event 追跡) — quá trình theo dõi và ghi nhận chính xác các sự kiện điểm kết cục trong nghiên cứu lâm sàng.

---

## 18. restricted mean survival time /rɪˈstrɪktɪd miːn ˈsɜːrvɪvəl taɪm/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm tân ngữ sau `calculate`, `estimate`, `report`.

**Core meaning — English:** A robust alternative summary measure in survival analysis representing the expected survival time restricted up to a specified time horizon, particularly useful when proportional hazards assumptions fail.

**Core meaning & mental image — Tiếng Việt:** Thời gian sống trung bình bị giới hạn. Hãy hình dung diện tích nằm dưới đường cong sống sót được cắt gọt gọn gàng tại mốc năm năm: nó đo lường tổng số năm sống trung mà một bệnh nhân có thể kỳ vọng đạt được trong khoảng thời gian giới hạn đó.

**Grammar & collocations:** `calculate the restricted mean survival time` — tính toán thời gian sống trung bình bị giới hạn; `restricted mean survival time difference` — sự khác biệt về thời gian sống trung bình bị giới hạn; `report restricted mean survival time` — báo cáo thời gian sống trung bình bị giới hạn.

**Register & nuance:** Ngày càng được ưa chuộng trong các thử nghiệm ung thư học hiện đại khi các đường cong sống sót giao nhau và tỷ số hazard không còn giữ được tính hằng định.

**Examples:** `When the proportional hazards assumption failed, statisticians reported the restricted mean survival time as a primary effect measure.` → Khi giả định tỷ lệ hazard không thỏa mãn, các nhà thống kê đã báo cáo thời gian sống trung bình bị giới hạn làm thước đo hiệu ứng chính.

**Liên kết tiếng Hàn:** `제한된 평균 생존 시간` (制限된 平均 生存 時間) — chỉ số thời gian sống trung bình bị giới hạn trong một khoảng thời gian xác định.

---

## 19. martingale residual outlier check /ˈmɑːrtɪŋɡeɪl rɪˈzɪduəlz ˈaʊtˌlaɪər tʃɛk/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `perform`, `execute`, `run`.

**Core meaning — English:** A diagnostic procedure utilizing martingale residuals from a Cox model to detect severe data outliers, non-linearity in continuous covariates, or model misspecifications.

**Core meaning & mental image — Tiếng Việt:** Kiểm tra điểm ngoại lai bằng phần dư martingale. Hãy hình dung một chiếc máy quét siêu âm rọi vào các sai số còn sót lại của mô hình: điểm dữ liệu nào có phần dư vọt hẳn lên cao bất thường sẽ bị phơi bày như một dị vật cần được xem xét lại.

**Grammar & collocations:** `perform a martingale residual outlier check` — thực hiện kiểm tra điểm ngoại lai bằng phần dư martingale; `plot martingale residuals` — vẽ biểu đồ phần dư martingale; `identify outliers via martingale residuals` — nhận diện điểm ngoại lai qua phần dư martingale.

**Register & nuance:** Công cụ chẩn đoán chuyên sâu trong phân tích hồi quy sống còn giúp kiểm tra dạng hàm đúng của các biến liên tục.

**Examples:** `Executing a martingale residual outlier check helped statisticians identify three anomalous patient records that heavily skewed the regression coefficients.` → Việc thực hiện kiểm tra điểm ngoại lai bằng phần dư martingale đã giúp các nhà thống kê nhận diện ba hồ sơ bệnh nhân dị thường làm bóp méo nặng nề các hệ số hồi quy.

**Liên kết tiếng Hàn:** `마팅게일 잔차 이상치 검사` (martingale 殘差 異常値 檢査) — phương pháp kiểm tra giá trị ngoại lai bằng phần dư martingale.

---

## 20. prospective patient cohort followup /prəˈspɛktɪv ˈpeɪʃənt ˈkoʊhɔːrt ˈfɑːloʊˌwʌp/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ nghiên cứu hoặc tân ngữ sau `design`, `conduct`, `initiate`.

**Core meaning — English:** A longitudinal research design where a group of healthy or newly diagnosed individuals is assembled and tracked forward in time to observe the incidence of clinical events.

**Core meaning & mental image — Tiếng Việt:** Quá trình theo dõi thuần tập bệnh nhân tiến cứu. Hãy hình dung một đoàn thám hiểm lên đường từ hôm nay, cùng nhau bước đi về phía trước qua từng năm tháng để ghi chép lại ai sẽ gặp thử thách nào trên đường đi.

**Grammar & collocations:** `design a prospective patient cohort followup` — thiết kế theo dõi thuần tập bệnh nhân tiến cứu; `multicenter prospective cohort followup` — theo dõi thuần tập tiến cứu đa trung tâm; `prospective cohort study design` — thiết kế nghiên cứu thuần tập tiến cứu.

**Register & nuance:** Thiết kế dịch tễ học mạnh mẽ, cung cấp dữ liệu chất lượng cao cho phân tích sống còn vì thông tin được thu thập theo thời gian thực thay vì hồi cứu quá khứ.

**Examples:** `The ten-year prospective patient cohort followup provided definitive evidence linking dietary habits to cardiovascular survival rates.` → Quá trình theo dõi thuần tập bệnh nhân tiến cứu trong mười năm đã cung cấp bằng chứng quyết định liên kết thói quen ăn uống với tỷ lệ sống sót tim mạch.

**Liên kết tiếng Hàn:** `전향적 환자 코호트 추적관찰` (前向き 患者 cohort 追跡觀察) — nghiên cứu theo dõi đoàn 50 bệnh nhân theo hướng tiến cứu thời gian thực.

---

## 21. multivariable adjusted hazard /ˌmʌltiˈvɜːrɪəbəl əˈdʒʌstɪd ˈhæzərd/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm tân ngữ sau `calculate`, `estimate`, `report`.

**Core meaning — English:** The estimated risk of an event associated with a specific exposure after mathematically controlling and adjusting for confounding variables in a multivariable model.

**Core meaning & mental image — Tiếng Việt:** Hazard đã được hiệu chỉnh đa biến. Hãy hình dung việc gọt giũa một bức tượng: sau khi loại bỏ mọi yếu tố nhiễu tạp xung quanh (như tuổi tác, giới tính, bệnh nền), ta chỉ giữ lại đường nét tinh khiết của riêng yếu tố nguy cơ đang xét.

**Grammar & collocations:** `calculate the multivariable adjusted hazard` — tính toán hazard đã hiệu chỉnh đa biến; `multivariable adjusted hazard ratio` — tỷ số hazard đã hiệu chỉnh đa biến; `report multivariable adjusted estimates` — báo cáo các ước lượng đã hiệu chỉnh đa biến.

**Register & nuance:** Tiêu chuẩn vàng trong dịch tễ học và y học lâm sàng để loại trừ các biến nhiễu (*confounders*) trước khi đưa ra kết luận nhân quả.

**Examples:** `After adjusting for age, smoking status, and baseline comorbidities, the multivariable adjusted hazard ratio remained statistically significant.` → Sau khi hiệu chỉnh cho độ tuổi, tình trạng hút thuốc và các bệnh đồng mắc nền, tỷ số hazard hiệu chỉnh đa biến vẫn duy trì ý nghĩa thống kê.

**Liên kết tiếng Hàn:** `다변량 보정 위험도` (多變量 補正 危險度) — mức độ nguy cơ đã được điều chỉnh đa biến số trong mô hình thống kê.

---

## 22. immortal time bias avoidance /ɪˈmɔːrtəl taɪm ˈbaɪəs əˈvɔɪdəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ chiến lược phương pháp luận hoặc tân ngữ sau `ensure`, `achieve`.

**Core meaning — English:** The methodological prevention of a common observational study bias where subjects must survive a certain period without the event to be classified into a specific treatment group, granting them artificial "immortal" survival time.

**Core meaning & mental image — Tiếng Việt:** Tránh sai lệch thời gian bất tử. Hãy hình dung một cạm bẫy thống kê: nếu ta tính khoảng thời gian trước khi bệnh nhân nhận thuốc vào nhóm điều trị, vô tình ta đã ban cho họ một "khoảng thời gian bất tử" không thể chết, làm sai lệch hẳn kết quả.

**Grammar & collocations:** `ensure immortal time bias avoidance` — đảm bảo tránh sai lệch thời gian bất tử; `immortal time bias in observational studies` — sai lệch thời gian bất tử trong các nghiên cứu quan sát; `methods for immortal time bias avoidance` — các phương pháp tránh sai lệch thời gian bất tử.

**Register & nuance:** Lỗi phương pháp luận khét tiếng trong các nghiên cứu quan sát dựa trên cơ sở dữ liệu y tế lớn (*claims databases*).

**Examples:** `Proper study design execution ensured immortal time bias avoidance by accurately indexing the start of treatment exposure.` → Việc thực thi thiết kế nghiên cứu đúng đắn đã đảm bảo tránh sai lệch thời gian bất tử bằng cách lập chỉ mục chính xác thời điểm bắt đầu tiếp nhận điều trị.

**Liên kết tiếng Hàn:** `불멸 시간 편향 회피` (不滅 時間 偏向 回避) — phương pháp loại bỏ sai lệch thời gian bất tử trong nghiên cứu quan sát.

---

## 23. survival probability confidence band /sɜːrvɪvəl ˌprɑːbəˈbɪləti ˈkɑːnfɪdəns bænd/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `calculate`, `plot`, `estimate`.

**Core meaning — English:** A statistical interval estimate that provides simultaneous confidence bounds around an entire survival curve over a specified time range, rather than at a single time point.

**Core meaning & mental image — Tiếng Việt:** Vải băng độ tin cậy xác suất sống sót. Hãy hình dung một chiếc áo khoác co giãn ôm trọn lấy đường cong Kaplan-Meier: thay vì chỉ có một điểm tin cậy đơn lẻ, dải băng này che chở toàn bộ đường cong trong một biên độ an toàn xác suất.

**Grammar & collocations:** `calculate a survival probability confidence band` — tính toán dải băng độ tin cậy xác suất sống sót; `simultaneous survival confidence band` — dải băng độ tin cậy sống sót đồng thời; `plot confidence bands` — vẽ các dải băng độ tin cậy.

**Register & nuance:** Cung cấp mức độ bảo vệ thống kê khắt khe hơn so với các khoảng tin cậy điểm rời rạc (*pointwise confidence intervals*).

**Examples:** `The statistical software plotted the ninety-five percent survival probability confidence band around the estimated Kaplan-Meier trajectory.` → Phần mềm thống kê đã vẽ dải băng độ tin cậy xác suất sống sót 95% xung quanh quỹ đạo Kaplan-Meier ước lượng.

**Liên kết tiếng Hàn:** `생존 확률 신뢰대` (生存 確栗 信頼帶) — dải khoảng tin cậy đồng thời cho toàn bộ đường cong xác suất sống sót.

---

## 24. biostatistical epidemiological trial /ˌbaɪoʊstəˈtɪstɪkəl ˌɛpɪˌdiːmiˈɑːlɪdʒɪkəl ˈtraɪəl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ nghiên cứu quy mô lớn hoặc tân ngữ sau `design`, `conduct`, `sponsor`.

**Core meaning — English:** A large-scale population-based research investigation combining rigorous biostatistical methods and epidemiological principles to evaluate health interventions or risk factors.

**Core meaning & mental image — Tiếng Việt:** Thử nghiệm dịch tễ học thống kê sinh học. Hãy hình dung một chiến dịch y tế cộng đồng khổng lồ huy động hàng vạn chuyên gia thống kê và bác sĩ dịch tễ học để theo dõi sức khỏe của cả một quốc gia qua hàng thập kỷ.

**Grammar & collocations:** `conduct a biostatistical epidemiological trial` — tiến hành một thử nghiệm dịch tễ học thống kê sinh học; `biostatistical epidemiological trial design` — thiết kế thử nghiệm dịch tễ học thống kê sinh học; `multicenter biostatistical trial` — thử nghiệm thống kê sinh học đa trung tâm.

**Register & nuance:** Thuật ngữ học thuật chỉ các nghiên cứu đỉnh cao định hình các hướng dẫn y tế công cộng toàn cầu (*clinical guidelines*).

**Examples:** `The biostatistical epidemiological trial successfully established population-level risk factors associated with chronic neurodegenerative diseases.` → Thử nghiệm dịch tễ học thống kê sinh học đã thiết lập thành công các yếu tố nguy cơ cấp độ quần thể liên quan đến các bệnh lý thoái hóa thần kinh mạn tính.

**Liên kết tiếng Hàn:** `생물통계학적 역학 임상시험` (生物統計學的 疫學 臨床試驗) — thử nghiệm lâm sàng dịch tễ học kết hợp phương pháp thống kê sinh học.

---

## 25. rigorous longitudinal biostatistics /ˈrɪɡərəs ˌlɑːndʒəˈtuːdəl ˌbaɪoʊstəˈtɪstɪks/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ lĩnh vực chuyên môn hoặc tân ngữ sau `master`, `advance`, `apply`.

**Core meaning — English:** The advanced branch of applied statistics encompassing rigorous methodologies for analyzing correlated and repeated measurements over time, including survival, trajectory, and panel data models.

**Core meaning & mental image — Tiếng Việt:** Thống kê sinh học dọc nghiêm ngặt. Hãy hình dung một bộ công cụ phân tích tối tân như kính thiên văn không gian James Webb: nó cho phép các nhà khoa học soi thấu mọi biến động phức tạp của dữ liệu y tế diễn ra xuyên suốt theo chiều dài thời gian.

**Grammar & collocations:** `advance rigorous longitudinal biostatistics` — thúc đẩy thống kê sinh học dọc nghiêm ngặt; `master rigorous longitudinal biostatistics` — làm chủ thống kê sinh học dọc nghiêm ngặt; `principles of rigorous longitudinal biostatistics` — các nguyên tắc thống kê sinh học dọc nghiêm ngặt.

**Register & nuance:** Đỉnh cao của phương pháp luận phân tích dữ liệu y tế và sinh học, kết hợp toán học cao cấp với thực tiễn chăm sóc sức khỏe con người.

**Examples:** `Mastering rigorous longitudinal biostatistics enables researchers to extract valid causal insights from complex, incomplete medical databases.` → Việc làm chủ thống kê sinh học dọc nghiêm ngặt cho phép các nhà nghiên cứu rút ra những hiểu biết nhân quả hợp lệ từ các cơ sở dữ liệu y tế phức tạp, không hoàn chỉnh.

**Liên kết tiếng Hàn:** `엄격한 종단적 생물통계학` (嚴格한 縱斷的 生物統計學) — chuyên ngành thống kê sinh học theo chiều dọc thời gian một cách khắt khe.

---

## Review in context: Part 1 (items 1–12)

In modern medical research, evaluating patient longevity requires sophisticated **time-to-event survival analysis**. When investigators seek to quantify the impact of clinical predictors, fitting a **Cox proportional hazards model** becomes standard practice. A fundamental premise of this approach relies on **non-informative right censoring**, ensuring that patient dropouts are unrelated to the event of interest. To visualize this data, researchers routinely plot a **Kaplan-Meier survival curve**, followed by calculating a precise **hazard ratio effect estimate** to measure treatment efficacy. To formally test group differences, a **log-rank hypothesis test** is conducted. Within the Cox model framework, the **baseline hazard function** remains unspecified, while the **cumulative hazard rate metric** tracks total accumulated risk over time. When treatment effects fluctuate, incorporating a **time-varying covariate coefficient** is necessary. Furthermore, investigators must perform a **proportional hazards assumption test**, frequently utilizing a **Schoenfeld residuals plot** to check for violations. Finally, researchers must carefully account for **left truncation entry delay** to prevent severe sample selection bias.

**Bản dịch tiếng Việt (Phần 1):**
Trong nghiên cứu y học hiện đại, việc đánh giá tuổi thọ của bệnh nhân đòi hỏi phương pháp **phân tích thời gian sống theo sự kiện** tinh vi. Khi các nhà điều tra tìm cách định lượng tác động của các yếu tố dự báo lâm sàng, việc lắp khớp **mô hình tỷ lệ hazard Cox** trở thành quy chuẩn thực hành. Tiền đề cơ bản của phương pháp này dựa trên giả định **giải phẫu kiểm duyệt phải không cung cấp thông tin**, đảm bảo rằng việc bệnh nhân bỏ cuộc không liên quan đến sự kiện quan tâm. Để trực quan hóa dữ liệu này, các nhà nghiên cứu thường xuyên vẽ **đường cong sống sót Kaplan-Meier**, tiếp theo là tính toán **ước lượng hiệu ứng tỷ số hazard** chính xác nhằm đo lường hiệu quả điều trị. Để kiểm định chính thức sự khác biệt giữa các nhóm, **kiểm định giả thuyết log-rank** được tiến hành. Trong khuôn khổ mô hình Cox, **hàm hazard nền tảng** được để ngỏ không xác định, trong khi **thước đo tỷ lệ hazard tích lũy** theo dõi tổng lượng rủi ro tích tụ theo thời gian. Khi hiệu ứng điều trị biến động, việc tích hợp **hệ số hiệp biến biến đổi theo thời gian** là cần thiết. Hơn nữa, các nhà điều tra phải thực hiện **kiểm định giả định tỷ lệ hazard tỷ lệ**, thường xuyên sử dụng **biểu đồ phần dư Schoenfeld** để kiểm tra các vi phạm. Cuối cùng, các nhà nghiên cứu phải cẩn trọng tính đến **độ trễ gia nhập do cắt cụt trái** để ngăn chặn sai lệch chọn mẫu nghiêm trọng.

---

## Review in context: Part 2 (items 13–25)

Beyond standard survival endpoints, clinical trials frequently encounter complex scenarios requiring a **competing risks cumulative incidence** framework. To summarize overall clinical benefit, researchers report the **median survival duration estimate**, or alternatively fit a **parametric Weibull survival model** when distributional shapes are known. Throughout the trial, managing **censored observation dropout** requires meticulous **clinical endpoint event tracking**. When proportional hazards fail, the **restricted mean survival time** offers a robust alternative summary measure. Analysts also perform a **martingale residual outlier check** to identify anomalous data points. Conducting a **prospective patient cohort followup** ensures high-quality real-world data collection, yielding reliable **multivariable adjusted hazard** estimates. Methodological rigor also demands strict **immortal time bias avoidance** and the calculation of a **survival probability confidence band** around the survival trajectory. Ultimately, these advanced methods form the foundation of every major **biostatistical epidemiological trial**, defining the pinnacle of **rigorous longitudinal biostatistics**.

**Bản dịch tiếng Việt (Phần 2):**
Ngoài các điểm kết cục sống sót tiêu chuẩn, các thử nghiệm lâm sàng thường gặp các kịch bản phức tạp đòi hỏi khung **tỷ lệ mới mắc tích lũy rủi ro cạnh tranh**. Để tóm tắt tổng lợi ích lâm sàng, các nhà nghiên cứu báo cáo **ước lượng thời gian sống trung vị**, hoặc thay vào đó lắp khớp **mô hình sống sót Weibull tham số** khi hình dạng phân phối đã được biết rõ. Trong suốt quá trình thử nghiệm, việc quản lý **tình trạng bỏ cuộc của quan sát bị kiểm duyệt** đòi hỏi quá trình **theo dõi sự kiện điểm kết cục lâm sàng** tỉ mỉ. Khi tỷ lệ hazard không thỏa mãn, **thước đo thời gian sống trung bình bị giới hạn** cung cấp một thước đo tóm tắt thay thế vững chắc. Các nhà phân tích cũng thực hiện **kiểm tra điểm ngoại lai bằng phần dư martingale** để nhận diện các điểm dữ liệu bất thường. Việc tiến hành **quá trình theo dõi thuần tập bệnh nhân tiến cứu** đảm bảo thu thập dữ liệu thế giới thực chất lượng cao, mang lại các ước lượng **hazard đã hiệu chỉnh đa biến** đáng tin cậy. Sự nghiêm ngặt về phương pháp luận cũng đòi hỏi **tránh sai lệch thời gian bất tử** một cách nghiêm ngặt và tính toán **dải băng độ tin cậy xác suất sống sót** xung quanh quỹ đạo sống sót. Cuối cùng, những phương pháp tiên tiến này tạo thành nền tảng của mọi **thử nghiệm dịch tễ học thống kê sinh học** lớn, định nghĩa đỉnh cao của **thống kê sinh học dọc nghiêm ngặt**.
