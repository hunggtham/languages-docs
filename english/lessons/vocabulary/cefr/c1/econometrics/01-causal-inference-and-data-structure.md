# C1 Vocabulary 01 — Causal inference and data structure

Nhóm từ này mô tả cách kinh tế lượng dùng dữ liệu để ước tính quan hệ nhân quả, đồng thời kiểm soát sai lệch và cấu trúc quan sát. Flow của bài là: **econometrics → causal inference → endogeneity → instrumental variable → identification → confounding → omitted variable → panel data → time series → cross-sectional → heteroskedasticity → autocorrelation → stationarity → ordinary least squares → difference-in-differences**.

---

## 1. econometrics /ɪˌkɑnəˈmetrɪks/

**Loại từ & vị trí trong câu:** `uncountable noun` — lĩnh vực kết hợp kinh tế học, toán và thống kê để ước lượng và kiểm định quan hệ trong dữ liệu kinh tế.

**Core meaning — English:** The use of economics, mathematics, and statistics to estimate and test relationships in economic data.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung biến câu hỏi kinh tế thành mô hình, dữ liệu và ước lượng có thể kiểm tra.

**Grammar & collocations:** `applied econometrics` — kinh tế lượng ứng dụng; `econometrics model` — mô hình kinh tế lượng; `study econometrics` — học kinh tế lượng.

**Register & nuance:** Econometrics không chỉ là chạy hồi quy; thiết kế nghiên cứu, giả định và diễn giải nhân quả quan trọng không kém.

**Examples:** `Econometrics helped estimate the effect of a tax change.` → Kinh tế lượng giúp ước tính tác động của thay đổi thuế. `The course combines econometrics with public policy.` → Khóa học kết hợp kinh tế lượng với chính sách công.

**Liên kết tiếng Hàn:** `계량경제학` — kinh tế lượng.

## 2. causal inference /ˈkɔzəl ˈɪnfərəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — quá trình suy luận liệu một can thiệp hoặc nguyên nhân có tạo ra thay đổi trong kết quả hay không.

**Core meaning — English:** The process of determining whether an intervention or cause produces a change in an outcome.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung hỏi “điều gì sẽ xảy ra nếu cùng đối tượng không nhận can thiệp?” thay vì chỉ thấy hai biến đi cùng nhau.

**Grammar & collocations:** `causal-inference method` — phương pháp suy luận nhân quả; `causal-inference framework` — khung suy luận nhân quả; `draw causal inference` — suy luận nhân quả.

**Register & nuance:** Causal inference cần thiết kế hoặc giả định mạnh hơn tương quan; dữ liệu quan sát không tự biến thành bằng chứng nhân quả.

**Examples:** `The study used causal inference to evaluate the subsidy.` → Nghiên cứu dùng suy luận nhân quả để đánh giá trợ cấp. `Causal inference required a credible comparison group.` → Suy luận nhân quả cần một nhóm so sánh đáng tin.

**Liên kết tiếng Hàn:** `인과 추론` — suy luận nhân quả.

## 3. endogeneity /ˌendoʊdʒəˈniəti/

**Loại từ & vị trí trong câu:** `uncountable noun` — tình trạng biến giải thích liên quan đến phần sai số, khiến ước lượng quan hệ bị sai lệch.

**Core meaning — English:** A condition in which an explanatory variable is related to the error term, biasing estimated relationships.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một nguyên nhân quan trọng bị giấu trong sai số nhưng lại liên quan đến biến ta đang dùng để giải thích.

**Grammar & collocations:** `endogeneity problem` — vấn đề nội sinh; `address endogeneity` — xử lý nội sinh; `source of endogeneity` — nguồn nội sinh.

**Register & nuance:** Endogeneity có thể đến từ biến bỏ sót, quan hệ hai chiều hoặc sai số đo; thêm biến tùy ý không luôn giải quyết được.

**Examples:** `Endogeneity made the price coefficient unreliable.` → Nội sinh khiến hệ số giá không đáng tin. `The researchers used an instrument to address endogeneity.` → Các nhà nghiên cứu dùng biến công cụ để xử lý nội sinh.

**Liên kết tiếng Hàn:** `내생성` — tính nội sinh.

## 4. instrumental variable /ˌɪnstrəˈmentəl ˈveriəbəl/

**Loại từ & vị trí trong câu:** `countable noun phrase` — biến liên quan đến biến giải thích nhưng không liên quan trực tiếp đến sai số kết quả, dùng để tách biến thiên ngoại sinh.

**Core meaning — English:** A variable related to an explanatory variable but not directly related to the outcome error, used to isolate exogenous variation.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một đòn bẩy bên ngoài làm thay đổi mức can thiệp nhưng không tự tác động vào kết quả ngoài kênh đó.

**Grammar & collocations:** `valid instrumental variable` — biến công cụ hợp lệ; `instrumental-variable estimate` — ước lượng biến công cụ; `choose an instrumental variable` — chọn biến công cụ.

**Register & nuance:** Instrumental variable cần điều kiện liên quan và độc lập loại trừ; biến có tương quan thôi chưa đủ để hợp lệ.

**Examples:** `Distance to a college served as an instrumental variable.` → Khoảng cách đến trường đại học đóng vai trò biến công cụ. `The instrumental-variable estimate differed from ordinary regression.` → Ước lượng biến công cụ khác hồi quy thông thường.

**Liên kết tiếng Hàn:** `도구 변수` — biến công cụ.

## 5. identification /aɪˌdentəfɪˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun` — khả năng xác định riêng một tham số hoặc hiệu ứng nhân quả từ dữ liệu và giả định của mô hình.

**Core meaning — English:** The ability to determine a parameter or causal effect uniquely from data and model assumptions.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung dữ liệu có đủ “dấu vết” để tách tác động cần đo khỏi những tác động khác.

**Grammar & collocations:** `causal identification` — nhận dạng nhân quả; `identification strategy` — chiến lược nhận dạng; `identification assumption` — giả định nhận dạng.

**Register & nuance:** Identification là câu hỏi “có thể biết gì?”, khác estimation là “ước lượng giá trị bao nhiêu?” khi đã nhận dạng.

**Examples:** `The policy change created a useful identification strategy.` → Thay đổi chính sách tạo chiến lược nhận dạng hữu ích. `Identification depended on a no-confounding assumption.` → Nhận dạng phụ thuộc giả định không nhiễu gây nhiễu.

**Liên kết tiếng Hàn:** `식별`, `식별 전략` — nhận dạng, chiến lược nhận dạng.

## 6. confounding /kənˈfaʊndɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun` — hiện tượng một biến thứ ba liên quan đến cả nguyên nhân và kết quả, làm quan hệ quan sát bị lẫn.

**Core meaning — English:** The distortion caused by a third variable related to both a possible cause and an outcome.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung kem bán chạy và đuối nước cùng tăng vì thời tiết nóng, chứ kem không gây đuối nước.

**Grammar & collocations:** `confounding variable` — biến gây nhiễu; `control for confounding` — kiểm soát nhiễu; `confounding bias` — thiên lệch nhiễu.

**Register & nuance:** Confounding là một nguồn sai lệch nhân quả; điều chỉnh thống kê chỉ hữu ích nếu đo đúng biến và mô hình phù hợp.

**Examples:** `Age was a potential confounding variable.` → Tuổi là một biến gây nhiễu tiềm tàng. `The design reduced confounding by random assignment.` → Thiết kế giảm nhiễu bằng phân nhóm ngẫu nhiên.

**Liên kết tiếng Hàn:** `교란`, `교란 변수` — nhiễu, biến gây nhiễu.

## 7. omitted variable /oʊˈmɪtɪd ˈveriəbəl/

**Loại từ & vị trí trong câu:** `countable noun phrase` — biến liên quan bị bỏ khỏi mô hình dù có liên hệ với biến giải thích và kết quả.

**Core meaning — English:** A relevant variable left out of a model even though it relates to both an explanatory variable and the outcome.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một nguyên nhân nằm ngoài bảng phân tích nhưng làm hệ số của biến khác gánh phần tác động thay nó.

**Grammar & collocations:** `omitted-variable bias` — thiên lệch biến bỏ sót; `omitted variable problem` — vấn đề biến bỏ sót; `account for an omitted variable` — tính đến biến bỏ sót.

**Register & nuance:** Không phải mọi biến bỏ sót đều gây thiên lệch; vấn đề xảy ra khi nó liên quan đồng thời đến biến giải thích và kết quả.

**Examples:** `An omitted variable biased the estimated return to education.` → Biến bỏ sót làm lệch lợi suất ước tính của giáo dục. `The authors discussed possible omitted variables.` → Tác giả thảo luận các biến có thể bị bỏ sót.

**Liên kết tiếng Hàn:** `누락 변수` — biến bị bỏ sót.

## 8. panel data /ˈpænəl ˌdeɪtə/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — dữ liệu theo dõi nhiều cá thể, công ty hoặc khu vực qua nhiều thời điểm.

**Core meaning — English:** Data tracking multiple individuals, firms, or places across multiple time periods.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung bảng có hàng là tỉnh hoặc người và cột thời gian, cho phép theo dõi cùng đối tượng qua năm.

**Grammar & collocations:** `panel-data model` — mô hình dữ liệu bảng; `balanced panel data` — dữ liệu bảng cân bằng; `panel-data regression` — hồi quy dữ liệu bảng.

**Register & nuance:** Panel data kết hợp chiều không gian và thời gian, nhưng dữ liệu mất kỳ, thay đổi mẫu và tương quan nội cá thể cần xử lý.

**Examples:** `Panel data captured wage changes within firms.` → Dữ liệu bảng ghi nhận thay đổi lương trong từng công ty. `The panel-data model included firm fixed effects.` → Mô hình dữ liệu bảng gồm hiệu ứng cố định của công ty.

**Liên kết tiếng Hàn:** `패널 데이터`, `패널 자료` — dữ liệu bảng.

## 9. time series /ˈtaɪm ˌsɪriz/

**Loại từ & vị trí trong câu:** `countable noun phrase` — chuỗi quan sát của một biến theo thứ tự thời gian.

**Core meaning — English:** A sequence of observations on a variable ordered over time.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung đường biểu diễn doanh thu, nhiệt độ hoặc tỷ giá chạy từng ngày, tháng hoặc quý.

**Grammar & collocations:** `time-series model` — mô hình chuỗi thời gian; `time-series forecast` — dự báo chuỗi thời gian; `time-series data` — dữ liệu chuỗi thời gian.

**Register & nuance:** Time series có phụ thuộc theo thời gian, mùa vụ và xu hướng; xáo trộn thứ tự có thể phá hỏng ý nghĩa.

**Examples:** `The analyst modeled the time series of monthly inflation.` → Nhà phân tích mô hình hóa chuỗi thời gian lạm phát hằng tháng. `Time-series forecasts weakened during the crisis.` → Dự báo chuỗi thời gian yếu đi trong khủng hoảng.

**Liên kết tiếng Hàn:** `시계열`, `시계열 자료` — chuỗi thời gian, dữ liệu chuỗi thời gian.

## 10. cross-sectional /ˌkrɔs ˈsekʃənəl/

**Loại từ & vị trí trong câu:** `adjective` — liên quan đến dữ liệu quan sát nhiều đối tượng tại cùng một thời điểm hoặc khoảng thời gian ngắn.

**Core meaning — English:** Relating to data observed across many units at one point or short period in time.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung chụp một lát cắt của nhiều hộ gia đình hoặc tỉnh cùng lúc thay vì theo dõi từng hộ qua năm.

**Grammar & collocations:** `cross-sectional data` — dữ liệu chéo; `cross-sectional study` — nghiên cứu cắt ngang; `cross-sectional variation` — biến thiên cắt ngang.

**Register & nuance:** Cross-sectional data thuận tiện nhưng khó tách khác biệt giữa các cá thể khỏi thay đổi theo thời gian.

**Examples:** `The survey provided cross-sectional data on health spending.` → Khảo sát cung cấp dữ liệu cắt ngang về chi tiêu y tế. `Cross-sectional evidence could not establish timing.` → Bằng chứng cắt ngang không xác lập được thứ tự thời gian.

**Liên kết tiếng Hàn:** `횡단면`, `횡단면 자료` — cắt ngang, dữ liệu cắt ngang.

## 11. heteroskedasticity /ˌhetəroʊskəˈdæstəsəti/

**Loại từ & vị trí trong câu:** `uncountable noun` — tình trạng phương sai của sai số thay đổi theo mức của biến giải thích hoặc quan sát.

**Core meaning — English:** A condition in which the variance of errors changes with the level of an explanatory variable or observation.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung các điểm quanh đường hồi quy xòe rộng dần như chiếc loa thay vì có độ phân tán đều.

**Grammar & collocations:** `heteroskedasticity-robust standard error` — sai số chuẩn vững với dị phương sai; `test for heteroskedasticity` — kiểm định dị phương sai; `heteroskedasticity problem` — vấn đề dị phương sai.

**Register & nuance:** Heteroskedasticity có thể làm sai suy luận về sai số chuẩn dù hệ số OLS vẫn hữu ích dưới điều kiện khác.

**Examples:** `Heteroskedasticity made the usual standard errors misleading.` → Dị phương sai làm sai số chuẩn thông thường gây hiểu lầm. `The researchers reported heteroskedasticity-robust errors.` → Các nhà nghiên cứu báo cáo sai số vững với dị phương sai.

**Liên kết tiếng Hàn:** `이분산성` — dị phương sai.

## 12. autocorrelation /ˌɔtoʊkɔrəˈleɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun` — tương quan giữa sai số hoặc giá trị của một biến ở các thời điểm khác nhau.

**Core meaning — English:** Correlation between errors or values of a variable at different points in time.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung sai số tháng này vẫn “nhớ” sai số tháng trước, khiến thông tin không độc lập.

**Grammar & collocations:** `serial autocorrelation` — tự tương quan chuỗi; `test for autocorrelation` — kiểm định tự tương quan; `autocorrelation function` — hàm tự tương quan.

**Register & nuance:** Autocorrelation phổ biến trong time series và có thể làm sai sai số chuẩn, hiệu quả dự báo hoặc kiểm định.

**Examples:** `Autocorrelation remained in the residuals after the first model.` → Tự tương quan còn trong phần dư sau mô hình đầu. `The analyst adjusted for autocorrelation in the time series.` → Nhà phân tích điều chỉnh tự tương quan trong chuỗi thời gian.

**Liên kết tiếng Hàn:** `자기상관` — tự tương quan.

## 13. stationarity /ˌsteɪʃəˈnerəti/

**Loại từ & vị trí trong câu:** `uncountable noun` — tính chất của chuỗi thời gian có các đặc điểm thống kê cơ bản ổn định theo thời gian.

**Core meaning — English:** The property of a time series whose key statistical characteristics remain stable over time.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung chuỗi dao động quanh mức và độ biến thiên tương đối ổn định thay vì trôi không ngừng.

**Grammar & collocations:** `weak stationarity` — tính dừng yếu; `test stationarity` — kiểm định tính dừng; `stationarity assumption` — giả định tính dừng.

**Register & nuance:** Stationarity là khái niệm theo mô hình; sai phân hoặc loại xu hướng có thể biến chuỗi không dừng thành dừng.

**Examples:** `The analyst tested stationarity before fitting the model.` → Nhà phân tích kiểm định tính dừng trước khi khớp mô hình. `Non-stationarity produced a misleading regression.` → Không dừng tạo hồi quy gây hiểu lầm.

**Liên kết tiếng Hàn:** `정상성`, `정상성 가정` — tính dừng, giả định tính dừng.

## 14. ordinary least squares /ˌɔrdəneri liːst ˈskwerz/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — phương pháp ước lượng hệ số bằng cách tối thiểu hóa tổng bình phương phần dư.

**Core meaning — English:** A method that estimates coefficients by minimizing the sum of squared residuals.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung chọn đường hồi quy làm tổng khoảng cách bình phương từ các điểm đến đường nhỏ nhất.

**Grammar & collocations:** `ordinary-least-squares estimator` — ước lượng bình phương tối thiểu thông thường; `fit by ordinary least squares` — khớp bằng OLS; `ordinary least squares regression` — hồi quy OLS.

**Register & nuance:** Ordinary least squares dễ diễn giải nhưng cần giả định để suy luận hoặc nhân quả; tối thiểu hóa sai số không chứng minh mô hình đúng.

**Examples:** `The researchers estimated the coefficient by ordinary least squares.` → Các nhà nghiên cứu ước lượng hệ số bằng OLS. `Ordinary least squares was sensitive to an influential outlier.` → OLS nhạy với một điểm ngoại lệ có ảnh hưởng.

**Liên kết tiếng Hàn:** `최소제곱법`, `통상최소제곱법` — phương pháp bình phương tối thiểu, OLS.

## 15. difference-in-differences /ˌdɪfərəns ɪn ˈdɪfərənsɪz/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — thiết kế so sánh thay đổi theo thời gian giữa nhóm được can thiệp và nhóm đối chứng.

**Core meaning — English:** A design that compares changes over time in a treated group with changes in a comparison group.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung lấy “mức thay đổi của nhóm can thiệp” trừ “mức thay đổi của nhóm đối chứng” để loại xu hướng chung.

**Grammar & collocations:** `difference-in-differences estimator` — ước lượng sai khác trong sai khác; `difference-in-differences design` — thiết kế sai khác trong sai khác; `parallel-trends assumption` — giả định xu hướng song song.

**Register & nuance:** Difference-in-differences cần giả định xu hướng trước can thiệp tương đồng; kiểm tra pre-trend và thay đổi đồng thời là thiết yếu.

**Examples:** `The study used difference-in-differences to evaluate the minimum wage.` → Nghiên cứu dùng sai khác trong sai khác để đánh giá lương tối thiểu. `The result depended on the parallel-trends assumption.` → Kết quả phụ thuộc giả định xu hướng song song.

**Liên kết tiếng Hàn:** `이중차분법` — phương pháp sai khác trong sai khác.

## Review in context

In **econometrics**, the team used **causal inference** to estimate a policy effect. **Endogeneity**, **confounding**, and an **omitted variable** threatened identification, so an **instrumental variable** supported the **identification** strategy. The researchers combined **panel data**, **time series**, and **cross-sectional** evidence, checking **heteroskedasticity**, **autocorrelation**, and **stationarity** before fitting **ordinary least squares**. A **difference-in-differences** design compared treated and untreated regions over time.

Trong **kinh tế lượng**, nhóm dùng **suy luận nhân quả** để ước tính tác động chính sách. **Nội sinh**, **nhiễu** và một **biến bỏ sót** đe dọa nhận dạng, nên một **biến công cụ** hỗ trợ chiến lược **nhận dạng**. Các nhà nghiên cứu kết hợp **dữ liệu bảng**, **chuỗi thời gian** và bằng chứng **cắt ngang**, kiểm tra **dị phương sai**, **tự tương quan** và **tính dừng** trước khi khớp **bình phương tối thiểu thông thường**. Thiết kế **sai khác trong sai khác** so sánh các vùng được can thiệp và không được can thiệp theo thời gian.
