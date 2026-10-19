# C2+ Vocabulary 02 — Sharp and fuzzy regression discontinuity designs, running variable manipulation testing, and optimal bandwidth selection

This lesson explores the econometric theory, identifying assumptions, and non-parametric estimation frontier of regression discontinuity designs (RDD). The curriculum advances through running variable continuity, McCrary manipulation diagnostics, and predetermined covariate balance to local polynomial kernel architectures, Imbens-Kalyanaraman and CCT bandwidth optimization, fuzzy compliance instruments, and multi-cutoff spatial generalizations.

---

## 1. sharp regression discontinuity design /ʃɑrp rɪˈɡrɛʃən ˌdɪskɑntəˈnuːəti dɪˈzaɪn/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng số ít chỉ một thiết kế nghiên cứu cụ thể). Thường làm chủ ngữ hoặc tân ngữ chỉ phương pháp luận chuẩn xác (*employ*, *exploit*, *estimate*).

**Core meaning — English:** A quasi-experimental causal identification strategy where treatment assignment status changes deterministically from zero to one the exact instant an observed continuous running variable crosses a known, fixed cutoff threshold.

**Core meaning & mental image — Tiếng Việt:** Thiết kế hồi quy gián đoạn sắc nét (Sharp RDD). Hãy hình dung một chiếc công tắc điện bật tắt tuyệt đối: học sinh đạt 79,9 điểm trượt học bổng (0%), nhưng chỉ cần nhích lên đúng 80,0 điểm là 100% được nhận học bổng; sự nhảy vọt dứt khoát tại đúng ngưỡng ranh giới này tạo ra một cuộc thử nghiệm ngẫu nhiên tự nhiên hoàn hảo.

**Grammar & collocations:** `implement a sharp regression discontinuity design` — triển khai thiết kế hồi quy gián đoạn sắc nét; `assumptions of sharp regression discontinuity design` — các giả định của thiết kế hồi quy gián đoạn sắc nét; `validity of a sharp regression discontinuity design` — tính hợp lệ của thiết kế hồi quy gián đoạn sắc nét.

**Register & nuance:** Kinh tế lượng vi mô và đánh giá chính sách công (applied microeconometrics & program evaluation). Phân biệt với thiết kế mờ (*fuzzy RDD*); ở thiết kế sắc nét, không có sự bất tuân thủ (no non-compliance), tỷ lệ can thiệp nhảy vọt chính xác một bước từ 0 lên 1 ($P(D=1|X) = 1$ khi $X \ge c$).

**Examples:** `The economists exploited a sharp regression discontinuity design based on the legal drinking age cutoff to isolate the causal impact of alcohol access on mortality.` → Các nhà kinh tế học đã khai thác thiết kế hồi quy gián đoạn sắc nét dựa trên ngưỡng tuổi uống rượu hợp pháp để cô lập tác động nhân quả của việc tiếp cận đồ uống có cồn đối với tỷ lệ tử vong.

**Liên kết tiếng Hàn:** `명확한 회귀 불연속 설계` (明確한回歸不連續設計) — thiết kế hồi quy gián đoạn sắc nét (Sharp RDD).

---

## 2. fuzzy regression discontinuity design /ˈfʌzi rɪˈɡrɛʃən ˌdɪskɑntəˈnuːəti dɪˈzaɪn/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ hoặc bổ ngữ chỉ mô hình phân tích trong điều kiện có sự bất tuân thủ (*formulate*, *estimate via*, *apply*).

**Core meaning — English:** A quasi-experimental design where crossing a threshold creates a discontinuous jump or increase in the probability of receiving treatment, but where compliance is imperfect, requiring instrumental variables methods.

**Core meaning & mental image — Tiếng Việt:** Thiết kế hồi quy gián đoạn mờ (Fuzzy RDD). Hãy hình dung ngưỡng 80 điểm mở ra cánh cửa mời bạn vào lớp chuyên, nhưng một số học sinh từ chối tham gia và một số học sinh dưới điểm vẫn tìm cách xin vào; tỷ lệ nhận điều trị chỉ nhảy vọt từ 10% lên 70% chứ không phải 100%, tạo nên một ranh giới "mờ" cần đo lường bằng biến công cụ.

**Grammar & collocations:** `rely on a fuzzy regression discontinuity design` — dựa vào thiết kế hồi quy gián đoạn mờ; `estimate effects in a fuzzy regression discontinuity design` — ước lượng các tác động trong thiết kế hồi quy gián đoạn mờ; `fuzzy regression discontinuity design framework` — khuôn khổ thiết kế hồi quy gián đoạn mờ.

**Register & nuance:** Kinh tế lượng ứng dụng cao cấp. Trong Fuzzy RDD, việc vượt qua ngưỡng điểm đóng vai trò như một biến công cụ (instrumental variable) cho việc thực tế nhận điều trị, và tham số ước lượng được chính là tác động điều trị trung bình cục bộ cho nhóm tuân thủ (*complier LATE*).

**Examples:** `Because enrollment in the subsidized training program was voluntary for eligible applicants, the researchers adopted a fuzzy regression discontinuity design.` → Bởi vì việc tham gia chương trình đào tạo trợ cấp là tự nguyện đối với các ứng viên đủ điều kiện, các nhà nghiên cứu đã áp dụng thiết kế hồi quy gián đoạn mờ.

**Liên kết tiếng Hàn:** `퍼지 회귀 불연속 설계` (fuzzy回歸不連續設計) — thiết kế hồi quy gián đoạn mờ (Fuzzy RDD).

---

## 3. continuous running variable /kənˈtɪnjuəs ˈrʌnɪŋ ˈvɛriəbəl/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng số ít). Thường làm chủ ngữ hoặc tân ngữ chỉ biến số phân loại trung tâm (*observe*, *plot*, *condition on*), còn gọi là *forcing variable* hoặc *assignment variable*.

**Core meaning — English:** The observable continuous numerical score, index, or measurement (such as test score, age, or income) that determines an individual unit's eligibility for treatment based on its position relative to a threshold.

**Core meaning & mental image — Tiếng Việt:** Biến chạy liên tục (biến định vị gán điều trị). Hình ảnh một chiếc thước đo vạch chia liên tục từ 0 đến 100 trải dài dưới trục hoành: từng cá nhân rơi vào từng tọa độ chính xác trên thước đo đó, và vị trí của họ so với một vạch kẻ son đỏ duy nhất sẽ quyết định vận mệnh họ có được nhận chính sách hay không.

**Grammar & collocations:** `define the continuous running variable` — xác định biến chạy liên tục; `distribution of the continuous running variable` — phân phối của biến chạy liên tục; `smoothness of the continuous running variable` — độ mượt mà của biến chạy liên tục.

**Register & nuance:** Thuật ngữ cốt lõi của RDD. Biến chạy phải có tính chất liên tục về mặt toán học quanh ngưỡng; nếu biến chạy bị rời rạc hóa thô sơ (như chỉ có 5 nấc điểm) hoặc bị đứt gãy mật độ, các giả định nhận dạng nhân quả của RDD sẽ bị đe dọa nghiêm trọng.

**Examples:** `The poverty index served as the continuous running variable, partitioning municipalities into aid recipients and excluded controls at the index value of fifty.` → Chỉ số nghèo đói đóng vai trò là biến chạy liên tục, phân chia các đô thị thành nhóm nhận viện trợ và nhóm đối chứng bị loại trừ tại giá trị chỉ số bằng năm mươi.

**Liên kết tiếng Hàn:** `연속 실행 변수` (連續實行變數) — biến chạy liên tục (forcing variable).

---

## 4. deterministic treatment threshold /dɪˌtɜrmənˈɪstɪk ˈtriːtmənt ˈθrɛʃhoʊld/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm bổ ngữ vị trí hoặc tân ngữ chỉ ranh giới quyết định (*cross*, *exceed*, *set at*).

**Core meaning — English:** An exogenous, rigid, non-negotiable numerical boundary value along the running variable that strictly dictates treatment assignment without discretionary administrative exceptions.

**Core meaning & mental image — Tiếng Việt:** Ngưỡng điều trị tất định (ngưỡng phân bổ dứt khoát). Hãy tưởng tượng một bức tường chắn ranh giới bằng bê tông cốt thép đặt đúng mốc 50%: bất kỳ ai ở mức 49,99% đều bị chặn lại hoàn toàn, và bất kỳ ai đạt 50,00% đều được bước qua, không một viên chức nào có quyền châm chước hay can thiệp ngoại lệ.

**Grammar & collocations:** `establish a deterministic treatment threshold` — thiết lập một ngưỡng điều trị tất định; `cross the deterministic treatment threshold` — vượt qua ngưỡng điều trị tất định; `arbitrary deterministic treatment threshold` — ngưỡng điều trị tất định có tính võ đoán.

**Register & nuance:** Khái niệm pháp lý và phương pháp luận chính sách. Tính ngoại sinh và tính bắt buộc tuyệt đối (*strict exogeneity and non-discretion*) là chìa khóa; nếu người quản lý chương trình có quyền linh hoạt "du di" cho người quen vượt ngưỡng, thiết kế sẽ mất tính tất định và chuyển thành thiết kế mờ hoặc bị thiên lệch chọn lọc.

**Examples:** `Federal statute imposed a deterministic treatment threshold at 130 percent of the federal poverty line, leaving caseworkers zero discretion over food stamp allocation.` → Quy chế liên bang đã áp đặt một ngưỡng điều trị tất định tại mức 130 phần trăm chuẩn nghèo liên bang, khiến các nhân viên phúc lợi không có quyền tự ý linh hoạt trong việc cấp phát tem phiếu thực phẩm.

**Liên kết tiếng Hàn:** `결정론적 처치 임계값` (決定論的處置臨界値) — ngưỡng can thiệp tất định.

---

## 5. McCrary density test discontinuity /məˈkrɛri ˈdɛnsəti tɛst ˌdɪskɑntəˈnuːəti/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ chỉ kết quả kiểm định chẩn đoán (*reveal*, *indicate*, *rule out*) trong các bài báo kinh tế lượng hàng đầu.

**Core meaning — English:** A formal statistical test developed by Justin McCrary that tests for an unnatural jump or gap in the estimated marginal density function of the running variable at the cutoff, which would signify fraudulent sorting or sorting manipulation.

**Core meaning & mental image — Tiếng Việt:** Bước nhảy gián đoạn kiểm định mật độ McCrary. Hãy hình dung bạn vẽ biểu đồ đếm số lượng người đứng xếp hàng dọc theo thang điểm: nếu đồ thị đường cong mượt mà bỗng dưng đứt gãy và dựng đứng vọt lên như một vách đá ngay sát bên phải điểm 80, điều đó vạch trần việc người ta đã gian lận điểm số hoặc cố tình nhích bài thi để chen chân qua ngưỡng.

**Grammar & collocations:** `detect a McCrary density test discontinuity` — phát hiện bước nhảy gián đoạn kiểm định mật độ McCrary; `absence of McCrary density test discontinuity` — sự vắng mặt của bước nhảy gián đoạn kiểm định McCrary; `run the McCrary density test discontinuity check` — chạy kiểm định bước nhảy gián đoạn mật độ McCrary.

**Register & nuance:** Tiêu chuẩn vàng để kiểm tra thao túng biến chạy (manipulation diagnostic gold standard). Một kết quả có ý nghĩa thống kê ($p < 0.05$) từ kiểm định McCrary là "bản án tử hình" đối với nghiên cứu RDD, bởi vì nó chứng minh các đối tượng nghiên cứu đã chủ động thao túng vị trí điểm số của mình quanh ngưỡng.

**Examples:** `The econometrician reported a statistically significant McCrary density test discontinuity, proving that school administrators had systematically bumped students just above the passing score.` → Chuyên gia kinh tế lượng đã báo cáo một bước nhảy gián đoạn kiểm định mật độ McCrary có ý nghĩa thống kê, chứng minh rằng ban giám hiệu nhà trường đã nâng điểm có hệ thống cho học sinh vừa chạm ngưỡng đỗ.

**Liên kết tiếng Hàn:** `맥크레리 밀도 검정 불연속` (McCrary密度檢定不連續) — bước nhảy gián đoạn kiểm định mật độ McCrary.

---

## 6. continuity of potential outcomes /ˌkɑntəˈnuːəti ʌv pəˈtɛnʃəl ˈaʊtkʌmz/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường đóng vai trò là giả định nhận dạng nền tảng (*assume*, *require*, *underpin*) của toàn bộ phương pháp hồi quy gián đoạn.

**Core meaning — English:** The fundamental identification assumption requiring that the conditional expectation functions of potential treated and untreated outcomes ($E[Y(1)|X]$ and $E[Y(0)|X]$) vary smoothly across the cutoff threshold in the hypothetical absence of the treatment.

**Core meaning & mental image — Tiếng Việt:** Tính liên tục của các kết quả tiềm năng. Hãy tưởng tượng nếu chính sách học bổng đột nhiên biến mất, đường biểu diễn năng lực học tập thực sự của học sinh từ 79,9 điểm sang 80,1 điểm sẽ chỉ là một đường dốc thoai thoải mượt mà liên tục; hai đứa trẻ đứng sát hai bên vách ngăn về bản chất có tố chất thông minh y hệt nhau.

**Grammar & collocations:** `invoke continuity of potential outcomes` — viện dẫn tính liên tục của các kết quả tiềm năng; `violate continuity of potential outcomes` — vi phạm tính liên tục của các kết quả tiềm năng; `plausibility of continuity of potential outcomes` — tính hợp lý của tính liên tục kết quả tiềm năng.

**Register & nuance:** Khái niệm nhận dạng nhân quả cốt tử (core identification condition). Không giống như giả định độc lập có điều kiện (*unconfoundedness*), RDD không đòi hỏi điều trị phải ngẫu nhiên trên toàn bộ mẫu, mà chỉ cần tiềm năng kết quả không bị gãy khúc đột ngột ngay tại ngưỡng.

**Examples:** `Causal attribution in RDD hinges entirely on the continuity of potential outcomes, meaning unobserved confounders do not jump discontinuously at the policy border.` → Việc quy kết nhân quả trong RDD phụ thuộc hoàn toàn vào tính liên tục của các kết quả tiềm năng, nghĩa là các yếu tố nhiễu không quan sát được không được phép nhảy vọt gián đoạn tại ranh giới chính sách.

**Liên kết tiếng Hàn:** `잠재적 결과의 연속성` (潛在的結果의連續性) — tính liên tục của kết quả tiềm năng.

---

## 7. running variable manipulation testing /ˈrʌnɪŋ ˈvɛriəbəl məˌnɪpjəˈleɪʃən ˈtɛstɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ chỉ quy trình kiểm định bắt buộc (*conduct*, *execute*, *pass*).

**Core meaning — English:** Diagnostic statistical procedures and hypothesis tests designed to assess whether economic agents possess precise, one-sided manipulation capabilities over their running variable scores to strategically secure treatment.

**Core meaning & mental image — Tiếng Việt:** Kiểm định hành vi thao túng biến chạy. Hình ảnh thanh tra kinh tế lượng soi kính lúp vào dữ liệu điểm số, tài sản hay thuế: kiểm tra xem các đối tượng có khả năng "lách luật" kê khai gian dối để ép điểm rơi trúng phóc vào vùng nhận trợ cấp hay không; nếu họ không thể kiểm soát điểm số tới từng ly từng tí, RDD vẫn giữ vững giá trị.

**Grammar & collocations:** `perform running variable manipulation testing` — thực hiện kiểm định thao túng biến chạy; `results of running variable manipulation testing` — kết quả của kiểm định thao túng biến chạy; `satisfy running variable manipulation testing` — thỏa mãn kiểm định thao túng biến chạy.

**Register & nuance:** Quy trình thẩm định độ tin cậy thực nghiệm (empirical validation procedure). Thao túng chỉ làm mất hiệu lực RDD khi nó mang tính chính xác (*precise manipulation*); nếu các đối tượng chỉ có thể nỗ lực nhưng điểm số vẫn chứa sai số ngẫu nhiên ngoài tầm kiểm soát, tính ngẫu nhiên cục bộ quanh ngưỡng vẫn được bảo toàn.

**Examples:** `Extensive running variable manipulation testing confirmed that taxpayers could not fine-tune their reported earnings to cluster strategically just beneath the higher tax bracket.` → Các kiểm định hành vi thao túng biến chạy sâu rộng đã xác nhận rằng người nộp thuế không thể tinh chỉnh thu nhập báo cáo của mình để tập trung chiến lược ngay dưới bậc thuế cao hơn.

**Liên kết tiếng Hàn:** `실행 변수 조작 검정` (實行變數操作檢定) — kiểm định thao túng biến chạy.

---

## 8. predetermined covariate balance test /ˌpriːdɪˈtɜrmənd koʊˈvɛriət ˈbæləns tɛst/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ hoặc chủ ngữ mô tả bài kiểm tra chẩn đoán độ vững (*conduct*, *demonstrate*, *pass*).

**Core meaning — English:** An empirical placebo validation test estimating RDD models on baseline characteristics established before treatment assignment (such as gender, parental education, or historical income) to confirm that no spurious discontinuities exist at the threshold.

**Core meaning & mental image — Tiếng Việt:** Kiểm định cân bằng hiệp biến tiền định. Hãy hình dung bạn kiểm tra ngày sinh, giới tính hay chiều cao của các ứng viên đứng sát hai bên lằn ranh 80 điểm: nếu tỷ lệ nam nữ hay trình độ học vấn của cha mẹ ở hai bên vạch kẻ giống hệt nhau không một vết đứt đoạn, bạn có thể tự tin khẳng định hai nhóm hoàn toàn tương đương nhau trước khi nhận học bổng.

**Grammar & collocations:** `execute a predetermined covariate balance test` — thực hiện kiểm định cân bằng hiệp biến tiền định; `pass the predetermined covariate balance test` — vượt qua kiểm định cân bằng hiệp biến tiền định; `covariate jumps in a predetermined covariate balance test` — các bước nhảy hiệp biến trong kiểm định cân bằng hiệp biến tiền định.

**Register & nuance:** Tiêu chuẩn thẩm định độ tin cậy bắt buộc của mọi bài báo RDD. Nếu một biến số cố định từ quá khứ (như năm sinh) lại nhảy vọt gián đoạn tại ngưỡng, điều đó chứng minh mẫu nghiên cứu đã bị thiên lệch chọn lọc hoặc ngưỡng chính sách đã bị lồng ghép với một can thiệp ngầm khác.

**Examples:** `The study gained immense credibility when a predetermined covariate balance test verified that student demographics were perfectly smooth across the admission cutoff.` → Nghiên cứu đã đạt được độ tin cậy to lớn khi kiểm định cân bằng hiệp biến tiền định xác minh rằng đặc điểm nhân khẩu học của học sinh biến thiên hoàn toàn mượt mà băng qua ngưỡng tuyển sinh.

**Liên kết tiếng Hàn:** `사전 공변량 균형 검정` (事前共變量均衡檢定) — kiểm định cân bằng hiệp biến tiền định.

---

## 9. donut-hole sensitivity check /ˈdoʊnʌt hoʊl ˌsɛnsəˈtɪvəti tʃɛk/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ của *perform*, *conduct*, hoặc chủ ngữ minh chứng cho độ bền vững của ước lượng (*show*, *confirm*).

**Core meaning — English:** A robustness diagnostic in RDD where observations located in an immediate micro-interval surrounding the threshold (the "hole" of the donut) are deliberately discarded, and the local polynomial model is re-estimated on the remaining data to check for sorting bias.

**Core meaning & mental image — Tiếng Việt:** Kiểm tra độ nhạy dạng "lỗ bánh donut". Hãy hình dung chiếc bánh donut có một lỗ tròn rỗng ở giữa: nhà nghiên cứu chủ động khoét bỏ một khoảng dữ liệu sát sạt hai bên ngưỡng (nơi dễ xảy ra gian lận hoặc làm tròn số nhất), rồi chỉ dùng phần dữ liệu "vành bánh" xung quanh để ước lượng xem kết quả nhân quả có còn giữ nguyên hay không.

**Grammar & collocations:** `apply a donut-hole sensitivity check` — áp dụng kiểm tra độ nhạy lỗ bánh donut; `re-estimate using a donut-hole sensitivity check` — ước lượng lại bằng kiểm tra độ nhạy lỗ donut; `robustness under a donut-hole sensitivity check` — độ vững dưới kiểm tra độ nhạy lỗ donut.

**Register & nuance:** Kỹ thuật kinh tế lượng thực nghiệm hiện đại (modern sensitivity analysis). Giúp đập tan mối hoài nghi về hiện tượng thao túng cục bộ; nếu hệ số tác động điều trị vẫn giữ nguyên độ lớn và ý nghĩa thống kê ngay cả khi đã cắt bỏ vùng dữ liệu nhạy cảm quanh ngưỡng, kết luận nghiên cứu trở nên vững như bàn thạch.

**Examples:** `Subjecting the model to a donut-hole sensitivity check confirmed that excluding schools with borderline test scores did not alter the estimated enrollment effect.` → Việc đưa mô hình vào kiểm tra độ nhạy dạng lỗ bánh donut đã xác nhận rằng việc loại trừ các trường có điểm thi sát ranh giới không làm thay đổi tác động tuyển sinh ước lượng được.

**Liên kết tiếng Hàn:** `도넛 홀 민감도 분석` (donut hole敏感度分析) — phân tích độ nhạy dạng lỗ bánh donut.

---

## 10. heaping on the running variable /ˈhiːpɪŋ ɑn ðə ˈrʌnɪŋ ˈvɛriəbəl/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ diễn tả lỗi dữ liệu (*occur*, *bias*, *distort*) hoặc tân ngữ của *address*, *correct for*.

**Core meaning — English:** Abnormal, non-random data accumulation or spike frequencies at specific discrete round numbers, digits, or reporting thresholds along the running variable, caused by rounding errors, memory recall bias, or administrative grading habits.

**Core meaning & mental image — Tiếng Việt:** Hiện tượng vun đống trên biến chạy (tích tụ dữ liệu dạng cột nhọn). Hãy tưởng tượng trên biểu đồ phân bố thu nhập tự khai, các cột dữ liệu tại đúng các mốc số tròn trĩnh như 1.000$, 2.000$ hay 5.000$ bỗng dưng vọt cao chót vót như những ngọn núi nhọn hoắt do người dân có thói quen làm tròn số, làm biến dạng độ mượt mà của mật độ xác suất.

**Grammar & collocations:** `suffer from heaping on the running variable` — chịu ảnh hưởng của hiện tượng vun đống trên biến chạy; `correct for heaping on the running variable` — hiệu chỉnh hiện tượng tích tụ trên biến chạy; `spurious jumps driven by heaping on the running variable` — các bước nhảy giả tạo do hiện tượng vun đống trên biến chạy gây ra.

**Register & nuance:** Bẫy kinh tế lượng thực địa (econometric measurement pathology). Cần phân biệt giữa hành vi gian lận (*manipulation*) và thói quen làm tròn số (*heaping*); tuy nhiên, nếu điểm ngưỡng chính sách lại tình cờ trùng đúng vào một điểm vun đống số tròn, các ước lượng RDD sẽ bị chệch nghiêm trọng nếu không có phương pháp lọc đặc thù.

**Examples:** `Extensive survey rounding produced severe heaping on the running variable at multiples of ten, necessitating specialized de-heaping algorithms.` → Thói quen làm tròn diện rộng trong khảo sát đã tạo ra hiện tượng vun đống trên biến chạy dữ dội tại các bội số của mười, đòi hỏi phải sử dụng các thuật toán giải tích khử tích tụ chuyên dụng.

**Liên kết tiếng Hàn:** `실행 변수 집중 누적 현상` (實行變數集中累積現象) — hiện tượng tập trung tích tụ dữ liệu trên biến chạy.

---

## 11. placebo cutoff test /pləˈsiːboʊ ˈkʌtɔf tɛst/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau *run*, *estimate*, *conduct* trong phần phân tích độ vững của nghiên cứu.

**Core meaning — English:** A falsification diagnostic where artificial, non-policy threshold values (such as the median or tertiles) are tested in the RDD specification to confirm that estimated outcome jumps appear exclusively at the true policy threshold and vanish everywhere else.

**Core meaning & mental image — Tiếng Việt:** Kiểm định ngưỡng giả dược (ngưỡng đối chứng giả tạo). Hãy tưởng tượng bạn thử đặt giả định ngưỡng chính sách tại điểm 60 hay 70 thay vì điểm 80 thực tế: mô hình toán học phải cho ra kết quả nhảy vọt bằng đúng 0; điều này chứng minh bước nhảy quan sát được tại mốc 80 thực sự là do chính sách tạo ra chứ không phải do sự trồi sụt ngẫu nhiên của số liệu.

**Grammar & collocations:** `conduct a placebo cutoff test` — tiến hành kiểm định ngưỡng giả dược; `pass the placebo cutoff test` — vượt qua bài kiểm định ngưỡng giả dược; `zero effects in a placebo cutoff test` — tác động bằng không trong kiểm định ngưỡng giả dược.

**Register & nuance:** Phương pháp giả định bác bỏ kinh tế lượng (falsification test methodology). Là bằng chứng đanh thép đập tan lập luận của phản biện rằng "hàm hồi quy vốn dĩ đã có độ cong phức tạp hoặc có nhiều điểm gián đoạn tự nhiên khắp nơi".

**Examples:** `Running a series of placebo cutoff tests at ten pseudo-thresholds yielded precisely estimated zero discontinuities, reinforcing the causal validity of the primary threshold.` → Việc chạy một loạt các kiểm định ngưỡng giả dược tại mười ngưỡng giả định đã mang lại các bước nhảy bằng không được ước lượng chuẩn xác, củng cố tính giá trị nhân quả của ngưỡng chính.

**Liên kết tiếng Hàn:** `위약 임계값 검정` (僞藥臨界値檢定) — kiểm định ngưỡng giả dược (Placebo cutoff test).

---

## 12. complier local average treatment effect /kəmˈplaɪər ˈloʊkəl ˈævərɪdʒ ˈtriːtmənt ɪˈfɛkt/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng số ít, viết tắt là complier LATE). Làm chủ ngữ hoặc tân ngữ chỉ tham số nhân quả đích (*identify*, *estimate*, *interpret*).

**Core meaning — English:** The specific causal estimand identified in a fuzzy RDD, representing the average treatment effect strictly for the subpopulation of marginal units whose treatment uptake status was flipped from zero to one solely by crossing the threshold.

**Core meaning & mental image — Tiếng Việt:** Tác động điều trị trung bình cục bộ cho nhóm tuân thủ (Complier LATE). Hãy hình dung một nhóm người đứng lấp lửng ở ranh giới: nếu không có bức thư thông báo vượt ngưỡng điểm, họ sẽ không bao giờ nộp đơn xin trợ cấp; nhưng hễ nhận được thư, họ lập tức tham gia; tác động nhân quả đo lường được chỉ đại diện đúng cho nhóm người nhạy cảm và biết vâng lời này.

**Grammar & collocations:** `identify the complier local average treatment effect` — nhận dạng tác động điều trị trung bình cục bộ cho nhóm tuân thủ; `magnitude of the complier local average treatment effect` — độ lớn của complier LATE; `estimate the complier local average treatment effect` — ước lượng complier LATE.

**Register & nuance:** Bản chất nhận dạng của thiết kế RDD mờ (Fuzzy RDD estimand). Nhóm luôn nhận (*always-takers*) và nhóm không bao giờ nhận (*never-takers*) hoàn toàn bị triệt tiêu khỏi phép tính; nhà nghiên cứu không thể tùy tiện khái quát hóa tác động này cho toàn bộ dân số mà chỉ áp dụng cho nhóm tuân thủ ngay tại ngưỡng.

**Examples:** `The fuzzy RDD identified a substantial complier local average treatment effect, indicating that marginal credit vouchers dramatically boosted revenue for receptive smallholder farms.` → Thiết kế RDD mờ đã nhận dạng được một tác động điều trị trung bình cục bộ cho nhóm tuân thủ rất đáng kể, chỉ ra rằng các phiếu tín dụng cận biên đã thúc đẩy doanh thu mạnh mẽ cho các trang trại hộ nhỏ biết tiếp nhận.

**Liên kết tiếng Hàn:** `순응자 국소 평균 처치 효과` (順應者局所平均處置效果) — tác động điều trị trung bình cục bộ cho nhóm tuân thủ (Complier LATE).

---

## 13. local polynomial kernel estimator /ˈloʊkəl ˌpɑləˈnoʊmiəl ˈkɜrnəl ˈɛstəmeɪtər/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ chỉ phương pháp ước lượng phi tham số (*minimize*, *estimate*, *fit*) hoặc tân ngữ của *implement*.

**Core meaning — English:** A non-parametric regression method that fits a weighted low-degree polynomial (typically local linear or quadratic) separately on each side of the cutoff within a localized bandwidth window, weighting observations via a kernel function.

**Core meaning & mental image — Tiếng Việt:** Bộ ước lượng phi tham số đa thức cục bộ nhân trọng số. Hãy tưởng tượng thay vì cố uốn một sợi dây thép dài ngoằn ngoèo qua toàn bộ đám mây dữ liệu, bạn chỉ dùng kính lúp soi vào một đoạn ngắn ngay sát vách ngăn, rồi đặt hai chiếc thước kẻ thẳng tắp hai bên mép kính để xem hai đầu thước kẻ lệch nhau bao nhiêu milimét tại đúng điểm cắt.

**Grammar & collocations:** `deploy a local polynomial kernel estimator` — triển khai bộ ước lượng phi tham số đa thức cục bộ nhân trọng số; `order of the local polynomial kernel estimator` — bậc của bộ ước lượng đa thức cục bộ; `properties of local polynomial kernel estimator` — các đặc tính của bộ ước lượng đa thức cục bộ.

**Register & nuance:** Tiêu chuẩn ước lượng hiện đại của RDD (modern non-parametric estimation standard). Hoàn toàn thay thế phương pháp hồi quy đa thức bậc cao toàn cục (*global higher-order polynomials*) vốn đã bị Gelman & Imbens chứng minh là dễ tạo ra các bước nhảy giả tạo nguy hiểm tại biên dữ liệu.

**Examples:** `Econometricians uniformly prefer a local polynomial kernel estimator over global polynomials because it prevents boundary swings from generating spurious policy effects.` → Các chuyên gia kinh tế lượng đều đồng thuận ưa chuộng bộ ước lượng đa thức cục bộ nhân trọng số hơn các đa thức toàn cục vì nó ngăn chặn các biến động ở biên tạo ra các tác động chính sách giả tạo.

**Liên kết tiếng Hàn:** `국소 다항식 커널 추정량` (局所多項式kernel推定量) — bộ ước lượng phi tham số đa thức cục bộ nhân trọng số.

---

## 14. triangular kernel weighting /traɪˈæŋɡjələr ˈkɜrnəl ˈweɪtɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm bổ ngữ phương thức cho các câu lệnh ước lượng (*apply*, *specify*, *utilize*).

**Core meaning — English:** A boundary-optimal weighting function ($K(u) = (1 - |u|) \cdot \mathbf{1}(|u| \le 1)$) that assigns maximum weight to observations directly adjacent to the cutoff, linearly discounting the influence of data points as they approach bandwidth boundaries.

**Core meaning & mental image — Tiếng Việt:** Phép gán trọng số nhân hình tam giác (nhân tam giác). Hãy hình dung một chiếc mũ chóp tam giác đặt úp ngay tại điểm ngưỡng: những người đứng sát mép ngưỡng nhận được điểm trọng số cao chót vót ở đỉnh chóp, trong khi những người càng đứng xa ngưỡng thì trọng số tụt dốc đều đặn về 0 ở hai góc đáy tam giác.

**Grammar & collocations:** `implement triangular kernel weighting` — áp dụng phép gán trọng số nhân tam giác; `optimality of triangular kernel weighting` — tính tối ưu của phép gán trọng số nhân tam giác; `triangular kernel weighting scheme` — lược đồ gán trọng số nhân tam giác.

**Register & nuance:** Hàm trọng số tối ưu hóa tại biên (boundary-optimal weighting). Được Fan & Gijbels chứng minh về mặt toán học là hàm nhân tối ưu để ước lượng hồi quy cục bộ tại các điểm biên (*boundary points*), vượt trội hơn nhân chữ nhật đều (*uniform kernel*) và nhân Gauss (*Epanechnikov* hay *Gaussian*).

**Examples:** `Specifying triangular kernel weighting ensured that data points closest to the voucher threshold exerted the strongest leverage on the estimated intercept jump.` → Việc chỉ định phép gán trọng số nhân hình tam giác đảm bảo rằng các điểm dữ liệu nằm gần nhất với ngưỡng phiếu quà tặng tạo ra đòn bẩy mạnh nhất lên bước nhảy tung độ ước lượng được.

**Liên kết tiếng Hàn:** `삼각 커널 가중치 부여` (三角kernel加重値附與) — phép gán trọng số nhân tam giác.

---

## 15. Imbens-Kalyanaraman optimal bandwidth /ˈɪmbənz ˌkæljənəˈrɑmən ˈɑptəməl ˈbændwɪdθ/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng số ít, ký hiệu là $h_{IK}$). Làm tân ngữ hoặc chủ ngữ chỉ thuật toán lựa chọn cửa sổ dữ liệu (*compute*, *select*, *yield*).

**Core meaning — English:** A data-driven, asymptotically plug-in bandwidth selection algorithm developed by Guido Imbens and Karthik Kalyanaraman that minimizes the asymptotic mean squared error (MSE) of the local linear RDD point estimator.

**Core meaning & mental image — Tiếng Việt:** Độ rộng dải băng tối ưu Imbens-Kalyanaraman (băng thông IK). Hãy hình dung bạn điều chỉnh độ mở của ống kính máy ảnh: mở quá hẹp thì hình ảnh bị nhiễu hạt mờ mịt (phương sai lớn), mở quá rộng thì cảnh vật xung quanh làm loãng nét tâm điểm (thiên lệch lớn); thuật toán IK tự động tìm ra độ mở tiêu cự hoàn hảo nhất để ảnh chụp bước nhảy nhân quả sắc nét nhất.

**Grammar & collocations:** `calculate the Imbens-Kalyanaraman optimal bandwidth` — tính toán băng thông tối ưu Imbens-Kalyanaraman; `formula for Imbens-Kalyanaraman optimal bandwidth` — công thức băng thông tối ưu Imbens-Kalyanaraman; `derive the Imbens-Kalyanaraman optimal bandwidth` — suy dẫn băng thông tối ưu Imbens-Kalyanaraman.

**Register & nuance:** Thuật toán băng thông kinh điển (classic automated bandwidth algorithm, 2012). Mặc dù sau này được phát triển thêm bởi Calonico, Cattaneo và Titiunik (CCT), thuật toán IK vẫn là cột mốc đột phá đầu tiên giải phóng các nhà kinh tế học khỏi việc tự ý chọn băng thông bằng cảm tính chủ quan.

**Examples:** `The empirical software automatically computed the Imbens-Kalyanaraman optimal bandwidth as 4.3 test score points, establishing an objective window for estimation.` → Phần mềm thực nghiệm đã tự động tính toán độ rộng dải băng tối ưu Imbens-Kalyanaraman là 4,3 điểm thi, thiết lập một cửa sổ khách quan cho việc ước lượng.

**Liên kết tiếng Hàn:** `임벤스-칼리아나라만 최적 대역폭` (Imbens-Kalyanaraman最適帶域幅) — độ rộng dải băng tối ưu Imbens-Kalyanaraman (băng thông IK).

---

## 16. Calonico-Cattaneo-Titiunik robust inference /kəˈlɑnɪkoʊ kəˈtænioʊ tɪtiˈuːnɪk roʊˈbʌst ˈɪnfərəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` (thường gọi tắt là suy luận CCT hoặc CCT robust inference). Thường làm tân ngữ sau *adopt*, *employ*, *report* trong các phân tích RDD hiện đại.

**Core meaning — English:** An advanced econometric framework providing bias-corrected point estimators and corrected standard errors that deliver valid asymptotic confidence intervals robust to bandwidth shrinkage rates and boundary bias.

**Core meaning & mental image — Tiếng Việt:** Phương pháp suy luận vững Calonico-Cattaneo-Titiunik (suy luận CCT vững). Hãy hình dung khi bạn hiệu chỉnh trừ đi độ lệch thước đo, bản thân công thức hiệu chỉnh đó cũng làm phát sinh thêm một độ rung lắc không chắc chắn mới; phương pháp CCT tự động cộng thêm độ rung lắc này vào khoảng tin cậy, giúp kết luận kiểm định không bao giờ bị "tự tin thái quá" dẫn tới công bố sai lầm.

**Grammar & collocations:** `conduct Calonico-Cattaneo-Titiunik robust inference` — tiến hành suy luận vững CCT; `confidence intervals from Calonico-Cattaneo-Titiunik robust inference` — các khoảng tin cậy từ suy luận vững CCT; `standard errors in Calonico-Cattaneo-Titiunik robust inference` — sai số chuẩn trong suy luận vững CCT.

**Register & nuance:** Tiêu chuẩn thực hành kinh tế lượng hiện đại tối tân (state-of-the-art econometric standard, 2014-nay). Là gói lệnh `rdrobust` thống trị tuyệt đối trong phần mềm Stata và R; loại bỏ triệt để hiện tượng tỷ lệ bao phủ của khoảng tin cậy bị tụt dốc dưới mức 95% danh nghĩa.

**Examples:** `Adopting Calonico-Cattaneo-Titiunik robust inference widened the confidence intervals slightly, yet the positive employment effect retained statistical significance.` → Việc áp dụng phương pháp suy luận vững Calonico-Cattaneo-Titiunik đã nới rộng nhẹ các khoảng tin cậy, tuy nhiên tác động việc làm tích cực vẫn giữ nguyên ý nghĩa thống kê.

**Liên kết tiếng Hàn:** `칼로니코-카타네오-티티우닉 로버스트 추론` (CCT robust推論) — phương pháp suy luận vững Calonico-Cattaneo-Titiunik.

---

## 17. mean squared error optimal bandwidth /miːn skwɛrd ˈɛrər ˈɑptəməl ˈbændwɪdθ/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường ký hiệu là $h_{MSE}$). Thường làm chủ ngữ hoặc tân ngữ chỉ tiêu chí tối ưu hóa sai số (*minimize*, *select*, *converge*).

**Core meaning — English:** The bandwidth parameter that achieves the optimal mathematical balance between asymptotic squared bias (which expands with wider windows) and sampling variance (which explodes with narrower windows), minimizing total MSE.

**Core meaning & mental image — Tiếng Việt:** Độ rộng dải băng tối ưu hóa sai số bình phương trung bình (băng thông tối ưu MSE). Hãy tưởng tượng một chiếc bập bênh: một bên là quả tạ thiên lệch (bias), bên kia là quả tạ biến thiên (variance); băng thông tối ưu MSE chính là vị trí điểm tựa hoàn hảo nơi tổng gánh nặng sai số rơi xuống mức thấp nhất có thể.

**Grammar & collocations:** `rate of the mean squared error optimal bandwidth` — tốc độ hội tụ của băng thông tối ưu MSE; `estimate via mean squared error optimal bandwidth` — ước lượng qua băng thông tối ưu MSE; `bias-variance trade-off in mean squared error optimal bandwidth` — sự đánh đổi thiên lệch-phương sai trong băng thông tối ưu MSE.

**Register & nuance:** Tiêu chuẩn tối ưu hóa điểm ước lượng (point estimation criterion). Băng thông tối ưu MSE hội tụ về 0 theo tốc độ $n^{-1/5}$; đây là độ rộng cửa sổ chuẩn xác nhất để tìm ra độ lớn của hệ số tác động, nhưng lại không thể dùng trực tiếp để xây dựng khoảng tin cậy nếu không có hiệu chỉnh chệch.

**Examples:** `The regression discontinuity package settled on a mean squared error optimal bandwidth of six months, trading off sample size against functional form bias.` → Gói lệnh hồi quy gián đoạn đã chọn được độ rộng dải băng tối ưu hóa sai số bình phương trung bình là sáu tháng, đánh đổi quy mô mẫu với độ chệch dạng hàm.

**Liên kết tiếng Hàn:** `평균 제곱 오차 최적 대역폭` (平均제곱誤差最適帶域幅) — độ rộng dải băng tối ưu hóa sai số bình phương trung bình (MSE-optimal bandwidth).

---

## 18. non-parametric boundary bias correction /ˌnɑnpærəˈmɛtrɪk ˈbaʊndəri ˈbaɪəs kəˈrɛkʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ mô tả cơ chế triệt tiêu sai số biên (*adjust for*, *compensate*, *incorporate*) trong các thuật toán ước lượng.

**Core meaning — English:** An analytical correction procedure that estimates and subtracts the inherent asymptotic bias term arising when fitting local polynomial regressions at extreme boundary points of data support, where data exists on only one side.

**Core meaning & mental image — Tiếng Việt:** Hiệu chỉnh thiên lệch biên phi tham số. Hãy tưởng tượng việc bạn cố gắng dự đoán độ cao mép bờ vực bằng một cây thước đặt chênh vênh một nửa trên không trung: mép thước luôn có xu hướng bị chúi xuống do thiếu điểm tựa bên ngoài; thuật toán hiệu chỉnh biên toán học sẽ tính toán lực chúi này và nhấc cây thước lên đúng vị trí thực tế của nó.

**Grammar & collocations:** `implement non-parametric boundary bias correction` — thực hiện hiệu chỉnh thiên lệch biên phi tham số; `formula for non-parametric boundary bias correction` — công thức hiệu chỉnh thiên lệch biên phi tham số; `necessity of non-parametric boundary bias correction` — sự cần thiết của việc hiệu chỉnh thiên lệch biên phi tham số.

**Register & nuance:** Lý thuyết xấp xỉ hồi quy phi tham số (non-parametric boundary asymptotics). Tại các điểm nằm sâu bên trong tập dữ liệu (*interior points*), sai số thiên lệch triệt tiêu tự nhiên; nhưng tại các điểm cắt biên RDD, sai số bậc một luôn tồn tại và bắt buộc phải dùng đa thức bậc cao hơn để ước lượng và trừ khử nó.

**Examples:** `Without non-parametric boundary bias correction, the estimated discontinuity parameter will systematically diverge from the true treatment effect under asymmetric sample densities.` → Nếu không có sự hiệu chỉnh thiên lệch biên phi tham số, tham số bước nhảy ước lượng được sẽ phân kỳ có hệ thống khỏi tác động điều trị thực tế dưới mật độ mẫu bất đối xứng.

**Liên kết tiếng Hàn:** `비모수 경계 편향 보정` (非母數境界偏向補正) — hiệu chỉnh thiên lệch biên phi tham số.

---

## 19. coverage error rate optimal bandwidth /ˈkʌvərɪdʒ ˈɛrər reɪt ˈɑptəməl ˈbændwɪdθ/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường ký hiệu là $h_{CER}$). Làm tân ngữ hoặc chủ ngữ đối trọng với $h_{MSE}$ trong việc thiết lập suy luận thống kê.

**Core meaning — English:** An alternative bandwidth selection criterion engineered specifically to minimize the coverage error rate of hypothesis tests and confidence intervals around the cutoff rather than minimizing the mean squared error of the point estimate.

**Core meaning & mental image — Tiếng Việt:** Độ rộng dải băng tối ưu hóa tỷ lệ lỗi bao phủ (băng thông CER). Hãy hình dung mục tiêu của bạn không phải là ném phi tiêu trúng tâm điểm đơn thuần, mà là giăng một chiếc lưới bảo đảm tóm gọn sự thật đúng 95 lần trong 100 lần tung lưới; băng thông CER thu hẹp dải dữ liệu lại để chiếc lưới khoảng tin cậy không bao giờ bị rách thủng.

**Grammar & collocations:** `select the coverage error rate optimal bandwidth` — lựa chọn băng thông tối ưu hóa tỷ lệ lỗi bao phủ; `narrower coverage error rate optimal bandwidth` — băng thông CER hẹp hơn; `properties of coverage error rate optimal bandwidth` — các đặc tính của băng thông tối ưu CER.

**Register & nuance:** Chuẩn mực suy luận giả thuyết nâng cao (inference-oriented bandwidth). Trong khi băng thông MSE hội tụ theo tốc độ $n^{-1/5}$, băng thông CER co hẹp nhanh hơn theo tốc độ $n^{-1/7}$ hoặc $n^{-1/9}$; điều này tạo ra hiện tượng làm mịn dưới (*undersmoothing*) tự nhiên, giúp các kiểm định giả thuyết đạt tỷ lệ lỗi bao phủ danh nghĩa hoàn hảo.

**Examples:** `Researchers prioritized the coverage error rate optimal bandwidth to construct robust confidence intervals with exact nominal 95 percent coverage.` → Các nhà nghiên cứu đã ưu tiên độ rộng dải băng tối ưu hóa tỷ lệ lỗi bao phủ để xây dựng các khoảng tin cậy vững với tỷ lệ bao phủ danh nghĩa 95 phần trăm chuẩn xác.

**Liên kết tiếng Hàn:** `포함 오류율 최적 대역폭` (包含誤謬率最適帶域幅) — độ rộng dải băng tối ưu hóa tỷ lệ lỗi bao phủ (CER-optimal bandwidth).

---

## 20. first-stage compliance discontinuity /fɜrst steɪdʒ kəmˈplaɪəns ˌdɪskɑntəˈnuːəti/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng số ít). Làm đại lượng đo lường độ mạnh của biến công cụ (*measure*, *quantify*, *exhibit*).

**Core meaning — English:** The magnitude of the discontinuous jump in the actual probability of treatment uptake occurring precisely at the running variable threshold in a fuzzy RDD ($P(D=1|X=c^+) - P(D=1|X=c^-)$), representing the strength of the first-stage instrument.

**Core meaning & mental image — Tiếng Việt:** Bước nhảy gián đoạn tuân thủ giai đoạn một (độ gián đoạn phương trình cấp 1). Hãy tưởng tượng đồ thị thể hiện xác suất nhận học bổng: tại điểm 80, đường biểu diễn đột ngột nhảy vọt một nấc thẳng đứng từ 5% lên 65%; độ cao 60% của bậc thang nhảy vọt này chính là sức mạnh của bước nhảy giai đoạn một, làm bệ đỡ vững chắc cho việc chia tỷ số đo lường hiệu quả chính sách.

**Grammar & collocations:** `demonstrate a strong first-stage compliance discontinuity` — chứng minh một bước nhảy gián đoạn tuân thủ giai đoạn một mạnh mẽ; `magnitude of first-stage compliance discontinuity` — độ lớn của bước nhảy tuân thủ giai đoạn một; `weak first-stage compliance discontinuity` — bước nhảy tuân thủ giai đoạn một yếu ớt.

**Register & nuance:** Kinh tế lượng biến công cụ trong RDD (instrumental variable RDD diagnostics). Nếu bước nhảy tuân thủ này quá nhỏ (ví dụ chỉ nhảy từ 10% lên 12%), thiết kế sẽ rơi vào vấn đề biến công cụ yếu (*weak instruments*), khiến ước lượng Wald ratio bị bùng nổ phương sai và không thể tin cậy.

**Examples:** `A massive first-stage compliance discontinuity of forty percentage points dispelled any concerns regarding weak instrumental variable bias in the fuzzy design.` → Một bước nhảy gián đoạn tuân thủ giai đoạn một khổng lồ lên tới bốn mươi điểm phần trăm đã xua tan mọi lo ngại liên quan đến thiên lệch biến công cụ yếu trong thiết kế mờ.

**Liên kết tiếng Hàn:** `1단계 순응 불연속성` (1段階順應不連續性) — bước nhảy gián đoạn tuân thủ giai đoạn một.

---

## 21. Wald ratio boundary estimator /wɔld ˈreɪʃioʊ ˈbaʊndəri ˈɛstəmeɪtər/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ chỉ công thức tính toán tác động nhân quả (*calculate*, *divide*, *scale*) trong Fuzzy RDD.

**Core meaning — English:** The non-parametric instrumental variable estimator that computes the complier local average treatment effect in fuzzy RDD as the quotient of the jump in the outcome equation divided by the jump in the treatment adoption equation at the cutoff.

**Core meaning & mental image — Tiếng Việt:** Bộ ước lượng tỷ số Wald tại biên. Hãy hình dung bạn lấy độ nhảy vọt của thu nhập (tử số, ví dụ tăng 600$) chia cho độ nhảy vọt của tỷ lệ được đào tạo nghề (mẫu số, ví dụ tăng 60%); tỷ số Wald 600$ / 0,6 = 1.000$ chính là thu nhập tăng thêm thực sự của một người đã tuân thủ tham gia khóa học nhờ vượt qua ngưỡng điểm.

**Grammar & collocations:** `compute via the Wald ratio boundary estimator` — tính toán qua bộ ước lượng tỷ số Wald tại biên; `properties of the Wald ratio boundary estimator` — các đặc tính của bộ ước lượng tỷ số Wald tại biên; `asymptotic variance of the Wald ratio boundary estimator` — phương sai tiệm cận của bộ ước lượng tỷ số Wald tại biên.

**Register & nuance:** Công thức cốt lõi của hồi quy gián đoạn mờ (Fuzzy RDD core estimator). Xuất phát từ công thức tỷ số Wald cổ điển của Abraham Wald; đồng quy tuyệt đối với ước lượng bình phương bé nhất hai giai đoạn (*2SLS - Two-Stage Least Squares*) áp dụng cục bộ trong dải băng thông quanh ngưỡng.

**Examples:** `The econometrician utilized the Wald ratio boundary estimator to rescale the modest outcome jump by the sixty-percent take-up rate across the eligibility cutoff.` → Chuyên gia kinh tế lượng đã sử dụng bộ ước lượng tỷ số Wald tại biên để tái tỷ lệ hóa bước nhảy kết quả khiêm tốn theo tỷ lệ tham gia sáu mươi phần trăm băng qua ngưỡng đủ điều kiện.

**Liên kết tiếng Hàn:** `경계 왈드 비 추정량` (境界Wald比推定量) — bộ ước lượng tỷ số Wald tại biên.

---

## 22. bandwidth sensitivity curve /ˈbændwɪdθ ˌsɛnsəˈtɪvəti kɜrv/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau *plot*, *inspect*, *generate* trong các phụ lục kiểm tra độ vững của luận án kinh tế học.

**Core meaning — English:** A diagnostic visualization plotting estimated treatment effect coefficients and their corresponding confidence bands across a continuous spectrum of bandwidth widths (ranging from ultra-narrow to wide) to verify empirical stability.

**Core meaning & mental image — Tiếng Việt:** Đường cong độ nhạy băng thông. Hãy hình dung một đồ thị vẽ đường biểu diễn hệ số tác động nhân quả khi bạn từ từ kéo dãn dải băng thông từ hẹp sang rộng: nếu đường biểu diễn nằm ngang phẳng lì và khoảng tin cậy luôn bao quanh một con số dương ổn định, người đọc sẽ hoàn toàn bị thuyết phục rằng kết quả không phải do "chọn bừa" một băng thông thuận lợi.

**Grammar & collocations:** `plot a bandwidth sensitivity curve` — vẽ một đường cong độ nhạy băng thông; `stability shown in the bandwidth sensitivity curve` — tính ổn định thể hiện trong đường cong độ nhạy băng thông; `inspect the bandwidth sensitivity curve` — kiểm tra đường cong độ nhạy băng thông.

**Register & nuance:** Tiêu chuẩn trình bày minh bạch thực nghiệm (empirical transparency standard). Giúp phòng ngừa triệt để hành vi thao túng dữ liệu (*p-hacking* hoặc *bandwidth shopping*); người đọc có thể tự mắt chứng kiến hệ số tác động ứng xử ra sao dưới mọi kịch bản lựa chọn cửa sổ mẫu.

**Examples:** `The published paper featured a smooth bandwidth sensitivity curve, demonstrating that the estimated wage premium remained remarkably stable regardless of window size.` → Bài báo được công bố đã làm nổi bật một đường cong độ nhạy băng thông mượt mà, chứng minh rằng mức chênh lệch tiền lương ước lượng được vẫn duy trì sự ổn định đáng kể bất kể quy mô cửa sổ dữ liệu.

**Liên kết tiếng Hàn:** `대역폭 민감도 곡선` (帶域幅敏感度曲線) — đường cong độ nhạy dải băng thông.

---

## 23. clustering at the cutoff /ˈklʌstərɪŋ æt ðə ˈkʌtɔf/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ mô tả phương pháp hiệu chỉnh sai số chuẩn (*account for*, *adjust*, *inflate*) hoặc tân ngữ sau *apply*.

**Core meaning — English:** An econometric inferential procedure adjusting standard errors for the discrete clustering of observations when the continuous running variable is measured coarsely at discrete lattice points (such as age in integer months or discrete test scores).

**Core meaning & mental image — Tiếng Việt:** Hiệu chỉnh sai số cụm tại ngưỡng (phân cụm tại ngưỡng). Hãy hình dung thay vì phân bố rải rác mượt mà, hàng ngàn học sinh cùng mang đúng một điểm số nguyên là 79 hoặc 80: các quan sát này bị dính chùm vào các nấc rời rạc như những chùm nho; nếu không gom cụm các quả nho này lại để tính sai số, máy tính sẽ đánh giá sai và phóng đại độ chính xác một cách nguy hiểm.

**Grammar & collocations:** `account for clustering at the cutoff` — tính đến hiện tượng phân cụm tại ngưỡng; `standard errors with clustering at the cutoff` — các sai số chuẩn có hiệu chỉnh phân cụm tại ngưỡng; `necessity of clustering at the cutoff` — sự cần thiết của việc phân cụm tại ngưỡng.

**Register & nuance:** Phương pháp luận suy luận thống kê rời rạc (inference with discrete running variables do Lee & Card đề xuất). Khi biến chạy có tính chất rời rạc, không thể giả định các phần dư độc lập hoàn toàn; việc gộp cụm theo từng giá trị rời rạc của biến chạy là bắt buộc để ngăn chặn hiện tượng bác bỏ giả thuyết không quá mức (*over-rejection of null*).

**Examples:** `Because student test scores were recorded strictly as discrete integers, accounting for clustering at the cutoff was essential to prevent anti-conservative standard errors.` → Bởi vì điểm thi của học sinh được ghi nhận nghiêm ngặt dưới dạng các số nguyên rời rạc, việc tính đến hiện tượng phân cụm tại ngưỡng là điều thiết yếu để ngăn chặn các sai số chuẩn thiếu thận trọng.

**Liên kết tiếng Hàn:** `임계값 군집 표준오차 보정` (臨界値群集標準誤差補正) — hiệu chỉnh sai số chuẩn phân cụm tại ngưỡng.

---

## 24. extrapolation away from the threshold /ɪkˌstræpəˈleɪʃən əˈweɪ frʌm ðə ˈθrɛʃhoʊld/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ hoặc tân ngữ chỉ giới hạn ngoại suy của mô hình (*warrant*, *restrict*, *caution against*).

**Core meaning — English:** The inferential leap and methodological hazard of projecting locally identified treatment effects from the immediate neighborhood of the cutoff to populations positioned distant from the threshold where baseline characteristics diverge.

**Core meaning & mental image — Tiếng Việt:** Sự ngoại suy xa khỏi ngưỡng ranh giới. Hãy tưởng tượng bạn chứng minh được một liều thuốc cực kỳ hiệu quả đối với những bệnh nhân đang mấp mé ở bờ vực bệnh tật (ngưỡng 50% chỉ số máu): nhưng nếu bạn vội vã kết luận liều thuốc đó cũng sẽ có tác dụng thần kỳ y hệt cho những người hoàn toàn khỏe mạnh hoặc những người sắp hấp hối, bạn đã phạm phải sai lầm ngoại suy xa khỏi ngưỡng.

**Grammar & collocations:** `caution against extrapolation away from the threshold` — cảnh báo chống lại việc ngoại suy xa khỏi ngưỡng; `hazards of extrapolation away from the threshold` — những mối nguy hại của việc ngoại suy xa khỏi ngưỡng; `validity of extrapolation away from the threshold` — tính hợp lệ của việc ngoại suy xa khỏi ngưỡng.

**Register & nuance:** Tính giá trị bên ngoài của nghiên cứu RDD (external validity limitation). RDD có tính giá trị bên trong (*internal validity*) cao nhất trong các phương pháp bán thực nghiệm, gần như tương đương với thử nghiệm ngẫu nhiên có đối chứng RCT; tuy nhiên, cái giá phải trả là tính giá trị bên ngoài bị giới hạn cục bộ tại đúng điểm ngưỡng.

**Examples:** `The authors explicitly cautioned against extrapolation away from the threshold, noting that wealthy households far above the poverty line might respond entirely differently to the transfer.` → Các tác giả đã cảnh báo dứt khoát chống lại việc ngoại suy xa khỏi ngưỡng, lưu ý rằng các hộ gia đình giàu có nằm rất xa trên chuẩn nghèo có thể phản ứng hoàn toàn khác đối với khoản trợ cấp.

**Liên kết tiếng Hàn:** `임계값 이탈 외삽` (臨界値離脫外揷) — sự ngoại suy xa khỏi điểm ngưỡng.

---

## 25. multi-cutoff regression discontinuity /ˈmʌlti ˈkʌtɔf rɪˈɡrɛʃən ˌdɪskɑntəˈnuːəti/

**Loại từ & vị trí trong câu:** `countable noun phrase` (thường dùng số ít hoặc số nhiều biểu thị khung thiết kế). Làm chủ ngữ hoặc tân ngữ chỉ phương pháp mở rộng quy mô RDD (*formulate*, *analyze*, *exploit*).

**Core meaning — English:** An advanced generalization of RDD wherein assignment eligibility is governed by multiple distinct geographic, administrative, or score cutoffs simultaneously, permitting the aggregation of local effects across heterogeneous threshold contexts.

**Core meaning & mental image — Tiếng Việt:** Thiết kế hồi quy gián đoạn đa ngưỡng (Multi-cutoff RDD). Hãy hình dung thay vì chỉ có một trường đại học với một điểm chuẩn duy nhất, bạn có 50 trường đại học trên toàn quốc với 50 điểm chuẩn khác nhau trải dài từ 50 đến 90 điểm: thiết kế đa ngưỡng chuẩn hóa tất cả các ngưỡng này về mốc 0 và tổng hợp lại, giúp mở rộng tầm nhìn nhận dạng nhân quả ra toàn bộ đất nước.

**Grammar & collocations:** `estimate a multi-cutoff regression discontinuity` — ước lượng mô hình hồi quy gián đoạn đa ngưỡng; `normalizing scores in multi-cutoff regression discontinuity` — chuẩn hóa điểm số trong hồi quy gián đoạn đa ngưỡng; `heterogeneity in multi-cutoff regression discontinuity` — tính không đồng nhất trong hồi quy gián đoạn đa ngưỡng.

**Register & nuance:** Kinh tế lượng RDD mở rộng (generalized RDD frontier do Cattaneo et al. phát triển). Cho phép các nhà kinh tế học khắc phục điểm yếu ngoại suy hạn hẹp của thiết kế đơn ngưỡng truyền thống, khai thác sự biến thiên giữa các ngưỡng khác nhau để vẽ nên một bức tranh nhân quả toàn diện hơn nhiều.

**Examples:** `Exploiting a multi-cutoff regression discontinuity across twenty municipal school districts allowed the research team to evaluate how voucher efficacy varied across diverse socio-economic baselines.` → Việc khai thác thiết kế hồi quy gián đoạn đa ngưỡng trên khắp hai mươi khu học chánh đô thị đã cho phép nhóm nghiên cứu đánh giá hiệu quả của phiếu học bổng biến thiên ra sao trên các nền tảng kinh tế xã hội đa dạng.

**Liên kết tiếng Hàn:** `다중 임계값 회귀 불연속 설계` (多重臨界値回歸不連續設計) — thiết kế hồi quy gián đoạn đa ngưỡng (Multi-cutoff RDD).

---

## Review in context (Part 1: Identifying assumptions, running variable dynamics, and falsification diagnostics)

In modern causal inference, the regression discontinuity design represents one of the most credible quasi-experimental methodologies. When policy rules enforce strict administrative compliance, researchers deploy a **sharp regression discontinuity design**, in which treatment switches deterministically from zero to one. Conversely, when program participation involves selective uptake or administrative exemptions, analysts formulate a **fuzzy regression discontinuity design**, treating crossing the threshold as an instrumental nudge. Central to both architectures is the presence of an observable **continuous running variable**, along which assignment is governed by an exogenous **deterministic treatment threshold**. The foundational bedrock of identification rests upon the **continuity of potential outcomes**, requiring that absent the intervention, average potential outcomes would transition smoothly across the boundary. To validate this non-testable assumption, applied econometricians subject the data to rigorous **running variable manipulation testing**. Foremost among these diagnostics is the search for a **McCrary density test discontinuity**, which detects whether strategic agents fraudulently bunched right above the passing mark. Furthermore, researchers execute a **predetermined covariate balance test**, verifying that fixed background traits display zero discontinuous breaks. When survey data suffer from discrete rounding habits, analysts must address **heaping on the running variable** to avoid conflating measurement artifacts with true policy impacts. As an additional safeguard against localized sorting, investigators perform a **donut-hole sensitivity check**, purging observations immediately adjacent to the cutoff. To confirm that observed jumps are not random fluctuations, researchers conduct a **placebo cutoff test** at multiple artificial thresholds where no jump should occur. Under these stringent conditions, the fuzzy design identifies a highly localized yet policy-relevant metric: the **complier local average treatment effect**, capturing the causal response of marginal compliers induced into treatment solely by crossing the boundary.

**Bản dịch tiếng Việt:**

Trong suy luận nhân quả hiện đại, thiết kế hồi quy gián đoạn đại diện cho một trong những phương pháp luận bán thực nghiệm đáng tin cậy nhất. Khi các quy định chính sách thực thi sự tuân thủ hành chính nghiêm ngặt, các nhà nghiên cứu triển khai một **sharp regression discontinuity design**, trong đó tình trạng điều trị chuyển đổi tất định từ không sang một. Ngược lại, khi việc tham gia chương trình có sự tiếp nhận chọn lọc hoặc các trường hợp miễn trừ hành chính, các nhà phân tích xây dựng một **fuzzy regression discontinuity design**, coi việc vượt qua ngưỡng như một cú hích biến công cụ. Cốt lõi của cả hai kiến trúc là sự hiện diện của một **continuous running variable** quan sát được, dọc theo đó việc phân bổ được điều hành bởi một **deterministic treatment threshold** ngoại sinh. Nền tảng nhận dạng căn bản dựa trên **continuity of potential outcomes**, đòi hỏi rằng nếu không có sự can thiệp, các kết quả tiềm năng trung bình sẽ biến thiên mượt mà băng qua ranh giới. Để xác thực giả định không thể kiểm định trực tiếp này, các nhà kinh tế lượng ứng dụng đưa dữ liệu vào quy trình **running variable manipulation testing** nghiêm ngặt. Nổi bật nhất trong số các phép chẩn đoán này là việc tìm kiếm một **McCrary density test discontinuity**, giúp phát hiện xem các chủ thể chiến lược có gian lận gom cụm ngay phía trên ngưỡng đỗ hay không. Hơn nữa, các nhà nghiên cứu thực hiện một **predetermined covariate balance test**, xác minh rằng các đặc điểm nền tảng cố định không biểu hiện bất kỳ vết đứt đoạn gián đoạn nào. Khi dữ liệu khảo sát chịu ảnh hưởng từ thói quen làm tròn số rời rạc, các nhà phân tích phải xử lý hiện tượng **heaping on the running variable** để tránh nhầm lẫn các sai số đo đạc với các tác động chính sách thực sự. Như một biện pháp bảo vệ bổ sung chống lại sự sắp xếp cục bộ, các điều tra viên thực hiện một **donut-hole sensitivity check**, loại bỏ các quan sát nằm sát sạt bên cạnh ngưỡng. Để khẳng định rằng các bước nhảy quan sát được không phải là các dao động ngẫu nhiên, các nhà nghiên cứu tiến hành một **placebo cutoff test** tại nhiều ngưỡng nhân tạo nơi không được phép xuất hiện bước nhảy. Dưới các điều kiện nghiêm ngặt này, thiết kế mờ sẽ nhận dạng một số đo cục bộ cao độ nhưng giàu ý nghĩa chính sách: **complier local average treatment effect**, nắm bắt phản ứng nhân quả của những người tuân thủ cận biên được thúc đẩy nhận điều trị chỉ nhờ vào việc bước qua ranh giới.

---

## Review in context (Part 2: Non-parametric estimation, bandwidth optimization, and structural generalizations)

Once the identifying assumptions of RDD are validated, focus shifts toward non-parametric boundary estimation. Rather than fitting volatile global polynomials, modern standards mandate a **local polynomial kernel estimator** fit within a localized neighborhood of the cutoff. To optimize estimation at the boundary, econometricians apply **triangular kernel weighting**, which discounts distant observations linearly. Determining the optimal window width is critical; historically, analysts computed the asymptotic **Imbens-Kalyanaraman optimal bandwidth** to objectively anchor empirical studies. In contemporary practice, applied researchers routinely rely on **Calonico-Cattaneo-Titiunik robust inference**, which supplies robust bias-corrected confidence intervals. The mathematical derivation of window width typically balances squared approximation bias against variance, yielding a **mean squared error optimal bandwidth**. Because regression functions suffer from asymmetric data truncation at threshold borders, algorithms must incorporate **non-parametric boundary bias correction** to eliminate first-order asymptotic drift. However, when the primary research objective is hypothesis testing rather than point estimation, theorists advocate utilizing a **coverage error rate optimal bandwidth**, which contracts faster to ensure exact nominal confidence coverage. In fuzzy formulations, the presence of a pronounced **first-stage compliance discontinuity** guarantees strong instrumental relevance, allowing the **Wald ratio boundary estimator** to rescale the outcome gap into a consistent causal estimand. To demonstrate that conclusions do not hinge on arbitrary tuning parameters, researchers publish a comprehensive **bandwidth sensitivity curve**, tracking stability across expanding windows. Furthermore, when the running score is recorded in discrete integer intervals, researchers must account for **clustering at the cutoff** to prevent anti-conservative standard errors. While internal validity remains pristine, analysts must exercise restraint against unwarranted **extrapolation away from the threshold**, since localized estimates cannot automatically characterize distant populations. Finally, where programs feature diverse regional criteria, implementing a **multi-cutoff regression discontinuity** permits researchers to pool normalized cutoffs, illuminating treatment effect heterogeneity across diverse institutional landscapes.

**Bản dịch tiếng Việt:**

Một khi các giả định nhận dạng của RDD được xác thực, trọng tâm chuyển sang việc ước lượng biên phi tham số. Thay vì khớp các đa thức toàn cục dễ biến động, các tiêu chuẩn hiện đại bắt buộc phải dùng một **local polynomial kernel estimator** được khớp bên trong một vùng lân cận cục bộ của ngưỡng. Để tối ưu hóa việc ước lượng tại biên, các nhà kinh tế lượng áp dụng **triangular kernel weighting**, giúp chiết khấu tuyến tính các quan sát ở xa. Việc xác định độ rộng cửa sổ tối ưu mang tính quyết định; trong lịch sử, các nhà phân tích đã tính toán **Imbens-Kalyanaraman optimal bandwidth** tiệm cận để neo giữ các nghiên cứu thực nghiệm một cách khách quan. Trong thực hành đương đại, các nhà nghiên cứu ứng dụng thường xuyên dựa vào **Calonico-Cattaneo-Titiunik robust inference**, cung cấp các khoảng tin cậy được hiệu chỉnh thiên lệch vững vàng. Việc suy dẫn toán học về độ rộng cửa sổ thường cân bằng giữa sai số xấp xỉ bình phương và phương sai, mang lại một **mean squared error optimal bandwidth**. Bởi vì các hàm hồi quy chịu sự cắt cụt dữ liệu bất đối xứng tại các ranh giới ngưỡng, các thuật toán phải tích hợp **non-parametric boundary bias correction** để triệt tiêu độ trôi dạt tiệm cận bậc một. Tuy nhiên, khi mục tiêu nghiên cứu chính là kiểm định giả thuyết thay vì ước lượng điểm, các nhà lý thuyết ủng hộ việc sử dụng một **coverage error rate optimal bandwidth**, vốn co hẹp nhanh hơn để đảm bảo tỷ lệ bao phủ tin cậy danh nghĩa chuẩn xác. Trong các công thức mờ, sự hiện diện của một **first-stage compliance discontinuity** rõ rệt đảm bảo mức độ phù hợp công cụ mạnh mẽ, cho phép **Wald ratio boundary estimator** tái tỷ lệ hóa khoảng cách kết quả thành một tham số ước lượng nhân quả nhất quán. Để chứng minh rằng các kết luận không phụ thuộc vào các tham số tinh chỉnh tùy tiện, các nhà nghiên cứu công bố một **bandwidth sensitivity curve** toàn diện, theo dõi tính ổn định qua các cửa sổ mở rộng. Hơn nữa, khi điểm chạy được ghi nhận dưới các khoảng số nguyên rời rạc, các nhà nghiên cứu phải tính đến hiện tượng **clustering at the cutoff** để ngăn chặn các sai số chuẩn thiếu thận trọng. Mặc dù tính giá trị bên trong vẫn nguyên sơ, các nhà phân tích phải thận trọng chống lại sự **extrapolation away from the threshold** vô căn cứ, bởi vì các ước lượng cục bộ không thể tự động đặc trưng hóa các quần thể ở xa. Cuối cùng, nơi các chương trình có các tiêu chí khu vực đa dạng, việc triển khai một **multi-cutoff regression discontinuity** cho phép các nhà nghiên cứu gộp các ngưỡng đã chuẩn hóa lại, làm sáng tỏ tính không đồng nhất của tác động điều trị trên các bối cảnh thể chế đa dạng.
