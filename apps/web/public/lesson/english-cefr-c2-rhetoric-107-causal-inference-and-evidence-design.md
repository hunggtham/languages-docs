# C2 Vocabulary 107 — Causal inference and evidence design

This lesson follows a causal question from the target quantity a study wants to estimate through design choices, bias, missing data, and the limits of generalization.

Flow: **collider bias → identification → inverse-probability weighting → mediation → moderation → regression discontinuity → difference-in-differences → randomization inference → attrition bias → reproducibility crisis → estimand → positivity → consistency assumption → heterogeneous treatment effect → spillover effect → selection on observables → measurement error → missingness mechanism → intention-to-treat → per-protocol effect**.

## 1. collider bias /ˈkɑɪlər baɪəs/
**Part of speech:** noun
**Core meaning (English):** bias created when an analysis conditions on a variable influenced by two other variables, thereby creating or strengthening a misleading association between them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiên lệch collider; hình dung hai con đường cùng đổ vào một “cửa lọc”, rồi việc chỉ nhìn những người qua cửa làm hai nguyên nhân tưởng như liên quan.
**Grammar & collocations:** `induce collider bias` — tạo thiên lệch collider; `condition on a collider` — điều kiện hóa theo collider; `collider-bias diagram` — sơ đồ thiên lệch collider.
**Examples:** `Adjusting for hospital admission can create collider bias if both illness and access affect admission.` → Điều chỉnh theo việc nhập viện có thể tạo thiên lệch collider nếu cả bệnh tật và khả năng tiếp cận đều ảnh hưởng đến việc nhập viện.
**Liên kết tiếng Hàn:** `콜라이더 편향` (kollaideo pyeonhyang) — thiên lệch collider.

## 2. identification /aɪˌdɛntəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the condition in which the available data and assumptions determine a causal quantity uniquely enough to estimate it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính nhận dạng; hình dung câu hỏi nhân quả có đủ thông tin và giả định để chỉ còn một lời giải hợp lý.
**Grammar & collocations:** `causal identification` — nhận dạng nhân quả; `identification strategy` — chiến lược nhận dạng; `identify an effect from observational data` — nhận dạng tác động từ dữ liệu quan sát.
**Examples:** `The natural experiment provided a stronger identification strategy than a simple before-and-after comparison.` → Thí nghiệm tự nhiên cung cấp chiến lược nhận dạng mạnh hơn so với so sánh trước–sau đơn giản.
**Liên kết tiếng Hàn:** `식별` (sikbyeol) — nhận dạng/nhận diện.

## 3. inverse-probability weighting /ˌɪnvɝs ˌprɑbəˈbɪləti ˈweɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** a method that weights observations by the inverse of their estimated probability of receiving the treatment or remaining observed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trọng số xác suất nghịch đảo; hình dung những trường hợp hiếm được “tăng tiếng nói” để mẫu đã cân bằng hơn về mặt xác suất.
**Grammar & collocations:** `inverse-probability weighting estimator` — ước lượng viên dùng trọng số xác suất nghịch đảo; `apply inverse-probability weighting` — áp dụng trọng số xác suất nghịch đảo; `stabilized weights` — trọng số ổn định hóa.
**Examples:** `Inverse-probability weighting made the treatment groups more comparable on measured characteristics.` → Trọng số xác suất nghịch đảo khiến các nhóm điều trị dễ so sánh hơn về những đặc điểm đã đo.
**Liên kết tiếng Hàn:** `역확률 가중` (yeokhwakryul gajung) — trọng số xác suất nghịch đảo.

## 4. mediation /ˌmiːdiˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process by which an exposure or treatment affects an outcome partly through an intermediate variable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trung gian hóa; hình dung tác động đi qua một “cây cầu” ở giữa, chẳng hạn chính sách làm thay đổi hành vi rồi hành vi làm thay đổi kết quả.
**Grammar & collocations:** `mediation analysis` — phân tích trung gian; `mediating pathway` — con đường trung gian; `partial mediation` — trung gian hóa một phần.
**Examples:** `The mediation analysis suggested that improved sleep explained part of the intervention's effect on mood.` → Phân tích trung gian cho thấy giấc ngủ được cải thiện giải thích một phần tác động của can thiệp lên tâm trạng.
**Liên kết tiếng Hàn:** `매개` (maegae) — trung gian/đóng vai trò trung gian.

## 5. moderation /ˌmɑdəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** a situation in which the size or direction of an effect changes according to the level of another variable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều tiết; hình dung cùng một can thiệp tạo tác động khác nhau tùy nhóm tuổi, mức độ phơi nhiễm hoặc điều kiện đi kèm.
**Grammar & collocations:** `moderation analysis` — phân tích điều tiết; `effect modifier` — biến điều chỉnh tác động; `moderating variable` — biến điều tiết.
**Examples:** `The study found moderation by baseline risk: the benefit was larger among high-risk patients.` → Nghiên cứu phát hiện tác động được điều tiết bởi nguy cơ ban đầu: lợi ích lớn hơn ở bệnh nhân nguy cơ cao.
**Liên kết tiếng Hàn:** `조절 효과` (jojeol hyogwa) — hiệu ứng điều tiết.

## 6. regression discontinuity /rɪˈɡrɛʃən ˌdɪskənˈtɪnuəti/
**Part of speech:** noun
**Core meaning (English):** a quasi-experimental design that estimates an effect by comparing units just above and below a cutoff that determines treatment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hồi quy gián đoạn; hình dung một ngưỡng điểm chia người tham gia thành hai phía gần như giống nhau, chỉ khác quyền nhận can thiệp.
**Grammar & collocations:** `regression-discontinuity design` — thiết kế hồi quy gián đoạn; `cutoff-based assignment` — phân bổ theo ngưỡng; `local regression-discontinuity estimate` — ước lượng hồi quy gián đoạn cục bộ.
**Examples:** `A regression discontinuity design compared students just above and below the scholarship cutoff.` → Thiết kế hồi quy gián đoạn so sánh những học sinh ngay trên và ngay dưới ngưỡng học bổng.
**Liên kết tiếng Hàn:** `불연속 회귀` (buryeonsok hoegwi) — hồi quy gián đoạn.

## 7. difference-in-differences /ˈdɪfərəns ɪn ˈdɪfərənsɪz/
**Part of speech:** noun
**Core meaning (English):** a design that compares the change over time in a treated group with the change over time in a comparison group.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sai khác trong sai khác; hình dung lấy mức thay đổi của nhóm được can thiệp trừ đi mức thay đổi tự nhiên của nhóm đối chứng.
**Grammar & collocations:** `difference-in-differences estimator` — ước lượng viên sai khác trong sai khác; `parallel-trends assumption` — giả định xu hướng song song; `run a difference-in-differences analysis` — chạy phân tích sai khác trong sai khác.
**Examples:** `The difference-in-differences estimate treated the neighboring county as a comparison group.` → Ước lượng sai khác trong sai khác dùng quận lân cận làm nhóm đối chứng.
**Liên kết tiếng Hàn:** `이중차분법` (ijung chabunbeop) — phương pháp sai khác trong sai khác.

## 8. randomization inference /ˌrændəməˈzeɪʃən ˈɪnfərəns/
**Part of speech:** noun
**Core meaning (English):** a method that evaluates a treatment effect by repeatedly applying the study's random assignment rule to the observed outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy luận ngẫu nhiên hóa; hình dung xáo lại nhãn điều trị theo đúng luật phân bổ để xem kết quả thật có hiếm đến mức nào.
**Grammar & collocations:** `randomization-inference test` — kiểm định suy luận ngẫu nhiên hóa; `permutation distribution` — phân phối hoán vị; `conduct randomization inference` — thực hiện suy luận ngẫu nhiên hóa.
**Examples:** `Randomization inference produced a sharp test without relying on a large-sample approximation.` → Suy luận ngẫu nhiên hóa tạo ra kiểm định chính xác mà không dựa vào xấp xỉ mẫu lớn.
**Liên kết tiếng Hàn:** `무작위화 추론` (mujawiha churon) — suy luận ngẫu nhiên hóa.

## 9. attrition bias /əˈtrɪʃən baɪəs/
**Part of speech:** noun
**Core meaning (English):** bias caused when participants leave a study in a way related to treatment, outcome, or risk.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiên lệch do hao hụt mẫu; hình dung những người rời nghiên cứu không phải ngẫu nhiên, khiến phần còn lại không còn đại diện cho nhóm ban đầu.
**Grammar & collocations:** `differential attrition bias` — thiên lệch hao hụt khác biệt; `assess attrition bias` — đánh giá thiên lệch do hao hụt; `loss to follow-up` — mất theo dõi.
**Examples:** `High attrition bias weakened the apparent benefit because dissatisfied participants were more likely to drop out.` → Thiên lệch hao hụt cao làm suy yếu lợi ích có vẻ thấy được vì những người không hài lòng dễ bỏ cuộc hơn.
**Liên kết tiếng Hàn:** `탈락 편향` (talrak pyeonhyang) — thiên lệch do bỏ cuộc.

## 10. reproducibility crisis /ˌriːprədjuːsəˈbɪləti ˈkraɪsɪs/
**Part of speech:** noun
**Core meaning (English):** a broad concern that many published findings cannot be reproduced reliably when independent researchers repeat the analysis or experiment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khủng hoảng khả năng tái lập; hình dung một kết quả nổi tiếng nhưng không đứng vững khi nhóm khác thử lại bằng dữ liệu hoặc quy trình tương đương.
**Grammar & collocations:** `address the reproducibility crisis` — giải quyết khủng hoảng tái lập; `reproducibility-crisis debate` — tranh luận về khủng hoảng tái lập; `reproducible workflow` — quy trình có thể tái lập.
**Examples:** `Open data and transparent code are often proposed as responses to the reproducibility crisis.` → Dữ liệu mở và mã minh bạch thường được đề xuất để ứng phó với khủng hoảng khả năng tái lập.
**Liên kết tiếng Hàn:** `재현성 위기` (jaehyeonseong wigi) — khủng hoảng khả năng tái lập.

## 11. estimand /ˈɛstəˌmænd/
**Part of speech:** noun
**Core meaning (English):** the precise population quantity that a study is designed to estimate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đại lượng mục tiêu; hình dung câu hỏi nghiên cứu được viết thật chính xác trước khi chọn dữ liệu và mô hình.
**Grammar & collocations:** `target estimand` — đại lượng mục tiêu; `define an estimand` — xác định đại lượng mục tiêu; `estimand framework` — khung đại lượng mục tiêu.
**Examples:** `The protocol defined the estimand as the average treatment effect under continued access to rescue medication.` → Đề cương xác định đại lượng mục tiêu là tác động điều trị trung bình khi người bệnh vẫn được tiếp cận thuốc cứu hộ.
**Liên kết tiếng Hàn:** `추정 대상량` (chujeong daesangnyang) — đại lượng cần ước lượng.

## 12. positivity /pɑzəˈtɪvəti/
**Part of speech:** noun
**Core meaning (English):** the assumption that every relevant subgroup has a nonzero probability of receiving each treatment option being compared.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính dương; hình dung trong mỗi nhóm cần so sánh vẫn có cơ hội thực tế để nhận từng lựa chọn điều trị.
**Grammar & collocations:** `positivity assumption` — giả định tính dương; `violate positivity` — vi phạm tính dương; `practical positivity` — tính dương trên thực tế.
**Examples:** `Positivity failed because no older patients received the intensive regimen.` → Tính dương thất bại vì không có bệnh nhân lớn tuổi nào nhận phác đồ chuyên sâu.
**Liên kết tiếng Hàn:** `양성 가정` (yangseong gajeong) — giả định tính dương.

## 13. consistency assumption /kənˈsɪstənsi əˈsʌmpʃən/
**Part of speech:** noun
**Core meaning (English):** the assumption that a person's observed outcome under the treatment received equals the potential outcome for that treatment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giả định nhất quán; hình dung nhãn điều trị quan sát được thật sự tương ứng với phiên bản tác động mà mô hình đang định nghĩa.
**Grammar & collocations:** `causal consistency assumption` — giả định nhất quán nhân quả; `state a consistency assumption` — nêu giả định nhất quán; `violate consistency` — vi phạm tính nhất quán.
**Examples:** `The analysis required a consistency assumption linking the recorded dose to the treatment definition.` → Phân tích cần giả định nhất quán nối liều được ghi nhận với định nghĩa điều trị.
**Liên kết tiếng Hàn:** `일관성 가정` (ilgwanseong gajeong) — giả định nhất quán.

## 14. heterogeneous treatment effect /ˌhɛtərədʒiˈniəs ˈtriːtmənt ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** a treatment effect that differs across people, settings, subgroups, or levels of baseline risk.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tác động điều trị không đồng nhất; hình dung cùng một can thiệp không tạo ra một mức lợi ích duy nhất cho mọi người.
**Grammar & collocations:** `heterogeneous treatment effects` — các tác động điều trị không đồng nhất; `estimate treatment-effect heterogeneity` — ước lượng tính không đồng nhất của tác động; `effect-heterogeneity analysis` — phân tích tính không đồng nhất tác động.
**Examples:** `The trial revealed a heterogeneous treatment effect rather than one benefit shared equally by all participants.` → Thử nghiệm cho thấy tác động điều trị không đồng nhất chứ không phải một lợi ích được mọi người hưởng như nhau.
**Liên kết tiếng Hàn:** `이질적 치료 효과` (ijiljeok chilyo hyogwa) — tác động điều trị không đồng nhất.

## 15. spillover effect /ˈspɪloʊˌvɚ ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** an effect of a treatment or exposure on people who did not directly receive it, often through interaction or shared resources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiệu ứng lan tỏa; hình dung tác động tràn sang người ngoài nhóm can thiệp qua tiếp xúc, hành vi hoặc môi trường chung.
**Grammar & collocations:** `positive spillover effect` — hiệu ứng lan tỏa tích cực; `account for spillover effects` — tính đến các hiệu ứng lan tỏa; `spillover between treatment arms` — lan tỏa giữa các nhánh điều trị.
**Examples:** `A vaccination campaign may create a spillover effect by reducing transmission among unvaccinated neighbors.` → Chiến dịch tiêm chủng có thể tạo hiệu ứng lan tỏa bằng cách giảm lây truyền ở hàng xóm chưa tiêm.
**Liên kết tiếng Hàn:** `파급 효과` (pageup hyogwa) — hiệu ứng lan tỏa.

## 16. selection on observables /səˈlɛkʃən ɑn əbˈzɝvəbəlz/
**Part of speech:** noun
**Core meaning (English):** an assumption that all important differences affecting treatment choice and outcome are captured in measured covariates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lựa chọn dựa trên biến quan sát; hình dung sau khi kiểm soát những đặc điểm đã đo, không còn khác biệt ẩn nào cùng gây ra việc chọn điều trị và kết quả.
**Grammar & collocations:** `selection-on-observables assumption` — giả định lựa chọn dựa trên biến quan sát; `rely on selection on observables` — dựa vào giả định lựa chọn dựa trên biến quan sát; `unobserved confounding` — nhiễu chưa quan sát.
**Examples:** `The estimate depended on selection on observables, which could not be tested directly.` → Ước lượng phụ thuộc vào lựa chọn dựa trên biến quan sát, điều không thể kiểm tra trực tiếp.
**Liên kết tiếng Hàn:** `관측 변수에 의한 선택` (gwanchuk byeonsue uihan seontaek) — lựa chọn dựa trên biến quan sát.

## 17. measurement error /ˈmɛʒərmənt ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** the difference between a recorded value and the underlying quantity it is intended to represent.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sai số đo lường; hình dung thước đo hoặc câu trả lời khảo sát lệch khỏi giá trị thật mà nhà nghiên cứu muốn biết.
**Grammar & collocations:** `nondifferential measurement error` — sai số đo lường không khác biệt; `measurement-error model` — mô hình sai số đo lường; `correct for measurement error` — hiệu chỉnh sai số đo lường.
**Examples:** `Measurement error in self-reported income blurred the association with health outcomes.` → Sai số đo lường trong thu nhập tự báo cáo làm mờ mối liên hệ với kết quả sức khỏe.
**Liên kết tiếng Hàn:** `측정 오차` (cheukjeong ocha) — sai số đo lường.

## 18. missingness mechanism /ˈmɪsɪŋnəs ˈmɛkəˌnɪzəm/
**Part of speech:** noun
**Core meaning (English):** the process or pattern that determines why values are absent from a dataset.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế thiếu dữ liệu; hình dung dữ liệu biến mất theo một quy luật có thể liên quan hoặc không liên quan đến những gì chưa quan sát được.
**Grammar & collocations:** `missingness mechanism assumption` — giả định về cơ chế thiếu dữ liệu; `model the missingness mechanism` — mô hình hóa cơ chế thiếu dữ liệu; `missing-not-at-random mechanism` — cơ chế thiếu không ngẫu nhiên.
**Examples:** `The researchers tested whether the missingness mechanism was related to patients' worsening symptoms.` → Các nhà nghiên cứu kiểm tra xem cơ chế thiếu dữ liệu có liên quan đến triệu chứng xấu đi của bệnh nhân hay không.
**Liên kết tiếng Hàn:** `결측 메커니즘` (gyeolcheuk mekeonijeum) — cơ chế thiếu dữ liệu.

## 19. intention-to-treat /ɪnˈtɛnʃən tə ˈtriːt/
**Part of speech:** noun
**Core meaning (English):** an analysis that compares participants according to the groups to which they were originally assigned, regardless of adherence or treatment switching.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích theo ý định điều trị; hình dung giữ nguyên nhóm phân bổ ban đầu để bảo toàn lợi ích của việc ngẫu nhiên hóa.
**Grammar & collocations:** `intention-to-treat analysis` — phân tích theo ý định điều trị; `intention-to-treat principle` — nguyên tắc theo ý định điều trị; `analyze by intention to treat` — phân tích theo nhóm phân bổ ban đầu.
**Examples:** `The intention-to-treat analysis preserved the trial's original comparison even when some participants switched treatments.` → Phân tích theo ý định điều trị giữ nguyên so sánh ban đầu dù một số người tham gia đổi phương pháp điều trị.
**Liên kết tiếng Hàn:** `치료 의도 분석` (chilyo uido bunseok) — phân tích theo ý định điều trị.

## 20. per-protocol effect /pɚ ˈproʊtəkɔl ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the effect that would be expected if participants followed the treatment protocol as specified.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tác động theo đúng phác đồ; hình dung câu hỏi “điều gì xảy ra nếu mọi người tuân thủ đầy đủ cách can thiệp đã định?”.
**Grammar & collocations:** `estimate the per-protocol effect` — ước lượng tác động theo đúng phác đồ; `per-protocol analysis` — phân tích theo đúng phác đồ; `protocol adherence` — mức tuân thủ phác đồ.
**Examples:** `The per-protocol effect was larger than the intention-to-treat effect because adherence was incomplete.` → Tác động theo đúng phác đồ lớn hơn tác động theo ý định điều trị vì mức tuân thủ chưa đầy đủ.
**Liên kết tiếng Hàn:** `계획서 준수 효과` (gyehoekseo junsu hyogwa) — tác động theo đúng phác đồ.

## Review in context

An analyst begins by defining the **estimand** and checking **identification**: can the data and assumptions answer the causal question? A graph can reveal **collider bias**, while **inverse-probability weighting** can rebalance observed treatment opportunities. **Mediation** asks how an effect travels through an intermediate step, whereas **moderation** asks whether its size changes across groups. Designs such as **regression discontinuity**, **difference-in-differences**, and **randomization inference** create different routes to credible comparison. Researchers still worry about **attrition bias** and the **reproducibility crisis**. Assumptions about **positivity**, a **consistency assumption**, and **selection on observables** must be stated clearly. Effects may be a **heterogeneous treatment effect** with a **spillover effect** on neighbors. **Measurement error** and the **missingness mechanism** can distort the evidence. Finally, **intention-to-treat** answers the effect of assignment, while the **per-protocol effect** describes adherence to the planned treatment.

**Bản dịch tiếng Việt:**

Nhà phân tích bắt đầu bằng việc xác định đại lượng mục tiêu và kiểm tra tính nhận dạng: dữ liệu cùng các giả định có trả lời được câu hỏi nhân quả không? Một đồ thị có thể cho thấy thiên lệch collider, còn trọng số xác suất nghịch đảo có thể cân bằng lại cơ hội nhận điều trị đã quan sát. Trung gian hóa hỏi tác động đi qua bước trung gian nào, trong khi điều tiết hỏi quy mô tác động có thay đổi giữa các nhóm không. Những thiết kế như hồi quy gián đoạn, sai khác trong sai khác và suy luận ngẫu nhiên hóa tạo ra các con đường khác nhau để có so sánh đáng tin cậy. Nhà nghiên cứu vẫn phải lo về thiên lệch do hao hụt và khủng hoảng khả năng tái lập. Các giả định về tính dương, giả định nhất quán và lựa chọn dựa trên biến quan sát cần được nêu rõ. Tác động có thể không đồng nhất giữa các nhóm và lan tỏa sang những người xung quanh. Sai số đo lường và cơ chế thiếu dữ liệu có thể làm méo bằng chứng. Cuối cùng, phân tích theo ý định điều trị trả lời tác động của việc được phân bổ, còn tác động theo đúng phác đồ mô tả kết quả khi tuân thủ can thiệp đã định.
