# C1 Vocabulary 10 — Sensitivity and robustness analysis

This lesson develops the language for asking how much hidden bias, analytic choice, or modeling flexibility would be needed to change a conclusion.

Flow: **E-value → placebo outcome → bounds analysis → partial identification → Manski bounds → worst-case bounds → Rosenbaum bound → hidden bias → confounding function → bias function → robustness value → omitted-variable bias → specification curve → multiverse analysis → sensitivity contour → confounding strength → selection odds → bias amplification → unmeasured selection → robustness frontier**.

## 1. E-value /ˈiː ˌvælju/
**Part of speech:** noun
**Core meaning (English):** a measure of the minimum strength of an unmeasured confounder needed to explain away an observed association under stated assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức confounder ẩn tối thiểu cần để xóa association quan sát.
**Grammar & collocations:** `E-value calculation` — calculation; `quantify unmeasured confounding` — lượng hóa.
**Examples:** `The E-value was large enough that a modest omitted factor could not easily explain the program effect.` → E-value lớn nên factor bỏ sót nhỏ khó xóa effect.
**Liên kết tiếng Hàn:** `E값`.

## 2. placebo outcome /pləˈsiːboʊ ˈaʊtˌkʌm/
**Part of speech:** noun
**Core meaning (English):** an outcome that should not be affected by the treatment and is used to detect residual bias.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** outcome lẽ ra không bị treatment, dùng dò bias còn lại.
**Grammar & collocations:** `placebo-outcome check` — check; `test for spurious association` — kiểm tra.
**Examples:** `The placebo outcome was last year's address, which the new policy could not plausibly change.` → Outcome giả là địa chỉ năm trước.
**Liên kết tiếng Hàn:** `위약 결과`.

## 3. bounds analysis /baʊndz əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** analysis that reports a range of causal values compatible with data and deliberately limited assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích báo khoảng effect phù hợp data và assumption giới hạn.
**Grammar & collocations:** `bounds-analysis interval` — interval; `limit a causal conclusion` — giới hạn.
**Examples:** `Bounds analysis showed that the treatment effect could be positive or near zero under weak assumptions.` → Bounds cho effect dương hoặc gần zero.
**Liên kết tiếng Hàn:** `경계 분석`.

## 4. partial identification /ˈpɑrʃəl aɪˌdɛntəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** identification that narrows a causal quantity to a set or interval rather than one exact value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ xác định effect trong tập/khoảng, không có một value duy nhất.
**Grammar & collocations:** `partial-identification region` — region; `report an identified set` — báo cáo.
**Examples:** `Partial identification was more honest than a precise estimate unsupported by the design.` → Partial identification trung thực hơn estimate giả chính xác.
**Liên kết tiếng Hàn:** `부분 식별`.

## 5. Manski bounds /ˈmɑnski baʊndz/
**Part of speech:** noun
**Core meaning (English):** broad bounds on a treatment effect obtained with minimal assumptions about missing potential outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng effect rộng với rất ít assumption về outcome tiềm năng thiếu.
**Grammar & collocations:** `Manski-bounds interval` — interval; `avoid unsupported extrapolation` — tránh.
**Examples:** `Manski bounds were wide because the untreated outcomes of treated units were almost unrestricted.` → Bounds rộng vì outcome control thiếu bị hạn chế rất ít.
**Liên kết tiếng Hàn:** `만스키 경계`.

## 6. worst-case bounds /ˈwɝst keɪs baʊndz/
**Part of speech:** noun
**Core meaning (English):** a deliberately conservative range calculated under the most unfavorable specified assignment of missing or hidden outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng bảo thủ dưới gán outcome ẩn bất lợi nhất đã định.
**Grammar & collocations:** `worst-case-bounds calculation` — calculation; `stress an unfavorable scenario` — stress-test.
**Examples:** `Worst-case bounds still excluded a large harmful effect, although they included no benefit.` → Bounds xấu nhất vẫn loại harm lớn nhưng không đảm bảo benefit.
**Liên kết tiếng Hàn:** `최악의 경우 경계`.

## 7. Rosenbaum bound /ˈroʊzənˌbɔm baʊnd/
**Part of speech:** noun
**Core meaning (English):** a sensitivity limit describing how strong hidden selection bias could be before a matched comparison would lose its conclusion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn bias chọn ẩn trước khi kết luận matching mất.
**Grammar & collocations:** `Rosenbaum-bound sensitivity` — sensitivity; `vary hidden odds` — thay đổi.
**Examples:** `The Rosenbaum bound indicated that the matched result survived moderate hidden selection bias.` → Bound cho thấy result chịu bias ẩn vừa.
**Liên kết tiếng Hàn:** `로젠바움 경계`.

## 8. hidden bias /ˈhɪdən baɪəs/
**Part of speech:** noun
**Core meaning (English):** systematic distortion from a relevant factor that was not recorded or adequately controlled.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lệch hệ thống do factor liên quan bị ẩn/chưa control.
**Grammar & collocations:** `hidden-bias sensitivity` — sensitivity; `stress an unobserved selection factor` — stress-test.
**Examples:** `Hidden bias could remain if families chose programs based on private information.` → Bias ẩn còn nếu family chọn dựa information riêng.
**Liên kết tiếng Hàn:** `숨은 편향`.

## 9. confounding function /kənˈfaʊndɪŋ ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a function specifying how an unobserved confounder relates to treatment assignment or the outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm mô tả confounder ẩn liên hệ assignment/outcome.
**Grammar & collocations:** `confounding-function sensitivity` — sensitivity; `parameterize hidden dependence` — tham số hóa.
**Examples:** `The confounding function allowed motivation to affect both program uptake and later scores.` → Function cho motivation ảnh hưởng uptake và score.
**Liên kết tiếng Hàn:** `교란 함수`.

## 10. bias function /ˈbaɪəs ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a function describing how a specified source of distortion changes an estimator or causal contrast.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm mô tả nguồn bias làm estimate/contrast đổi ra sao.
**Grammar & collocations:** `bias-function parameter` — parameter; `map hidden distortion to effect` — ánh xạ.
**Examples:** `The bias function translated a plausible reporting error into a smaller treatment estimate.` → Function chuyển reporting error thành estimate nhỏ hơn.
**Liên kết tiếng Hàn:** `편향 함수`.

## 11. robustness value /roʊˈbʌstnəs ˈvælju/
**Part of speech:** noun
**Core meaning (English):** the smallest strength of unmeasured confounding that would reduce an estimated effect to a chosen target, such as zero.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức confounding ẩn nhỏ nhất làm effect về target, thường là zero.
**Grammar & collocations:** `robustness-value calculation` — calculation; `reduce an estimate to the null` — đưa về null.
**Examples:** `The robustness value showed that a moderate hidden factor could erase the reported advantage.` → Value cho thấy factor ẩn vừa có thể xóa advantage.
**Liên kết tiếng Hàn:** `강건성 값`.

## 12. omitted-variable bias /oʊˈmɪtɪd ˈveriəbəl baɪəs/
**Part of speech:** noun
**Core meaning (English):** distortion in an estimate caused by leaving out a relevant variable related to both a predictor and an outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bias vì bỏ variable liên quan predictor và outcome.
**Grammar & collocations:** `omitted-variable-bias formula` — formula; `bound omitted-variable bias` — giới hạn.
**Examples:** `Omitted-variable bias could make the training coefficient absorb prior management quality.` → Bias làm hệ số training gánh management quality trước.
**Liên kết tiếng Hàn:** `누락 변수 편향`.

## 13. specification curve /ˌspɛsəfəˈkeɪʃən kɝv/
**Part of speech:** noun
**Core meaning (English):** a display of results across many defensible analytic specifications rather than one selected model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồ thị kết quả qua nhiều specification hợp lý.
**Grammar & collocations:** `specification-curve plot` — plot; `show analytic sensitivity` — hiển thị.
**Examples:** `The specification curve showed a positive effect under most, but not all, reasonable models.` → Curve cho effect dương ở hầu hết model hợp lý.
**Liên kết tiếng Hàn:** `모형 설정 곡선`.

## 14. multiverse analysis /ˈmʌltiˌvɝs əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** systematic analysis of results across a predeclared set of plausible data-processing and modeling choices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy có hệ thống nhiều lựa chọn xử lý/model hợp lý đã định.
**Grammar & collocations:** `multiverse-analysis grid` — grid; `enumerate analytic choices` — liệt kê.
**Examples:** `The multiverse analysis revealed that the conclusion depended on how missing values were handled.` → Analysis lộ conclusion phụ thuộc cách xử lý missing.
**Liên kết tiếng Hàn:** `다중 우주 분석`.

## 15. sensitivity contour /ˌsɛnsəˈtɪvəti ˈkɑntʊr/
**Part of speech:** noun
**Core meaning (English):** a line or surface showing combinations of hidden-bias values that produce the same estimated conclusion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường/mặt phẳng các combination bias ẩn cho cùng conclusion.
**Grammar & collocations:** `sensitivity-contour plot` — plot; `map assumptions jointly` — lập bản đồ.
**Examples:** `The sensitivity contour showed which combinations of selection and outcome bias would reverse the effect.` → Contour cho thấy combination bias làm effect đảo.
**Liên kết tiếng Hàn:** `민감도 등고선`.

## 16. confounding strength /kənˈfaʊndɪŋ strɛŋθ/
**Part of speech:** noun
**Core meaning (English):** the magnitude of association a hidden common cause would need with treatment and outcome to alter a result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ mạnh liên hệ mà nguyên nhân ẩn cần có với treatment/outcome.
**Grammar & collocations:** `confounding-strength threshold` — threshold; `calibrate a hidden association` — hiệu chuẩn.
**Examples:** `The required confounding strength exceeded the strongest measured baseline association.` → Strength cần thiết lớn hơn association baseline mạnh nhất.
**Liên kết tiếng Hàn:** `교란 강도`.

## 17. selection odds /səˈlɛkʃən ɑdz/
**Part of speech:** noun
**Core meaning (English):** the odds that a unit receives or remains in a condition relative to another unit under a selection process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** odds một unit được chọn/ở lại condition so với unit khác.
**Grammar & collocations:** `selection-odds ratio` — ratio; `compare hidden assignment chances` — so.
**Examples:** `The sensitivity analysis varied selection odds for equally qualified applicants.` → Analysis thay odds chọn applicant đủ điều kiện ngang nhau.
**Liên kết tiếng Hàn:** `선택 오즈`.

## 18. bias amplification /baɪəs ˌæmpləfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** an increase in distortion caused by an adjustment, measurement, or selection process intended to reduce another problem.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bias tăng lên do adjustment/selection nhằm giảm vấn đề khác.
**Grammar & collocations:** `bias-amplification risk` — risk; `trade one distortion for another` — đánh đổi.
**Examples:** `Aggressive adjustment produced bias amplification when the control variable was measured poorly.` → Adjustment mạnh làm bias phồng vì covariate đo kém.
**Liên kết tiếng Hàn:** `편향 증폭`.

## 19. unmeasured selection /ˌʌnˈmɛʒərd səˈlɛkʃən/
**Part of speech:** noun
**Core meaning (English):** systematic entry into treatment or observation groups based on characteristics that were not recorded.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vào group treatment/observation theo đặc điểm không được ghi.
**Grammar & collocations:** `unmeasured-selection mechanism` — mechanism; `stress selective entry` — stress-test.
**Examples:** `Unmeasured selection was plausible because applicants knew about a local eligibility exception.` → Selection ẩn hợp lý vì applicant biết exception.
**Liên kết tiếng Hàn:** `측정되지 않은 선택`.

## 20. robustness frontier /roʊˈbʌstnəs frʌnˈtɪr/
**Part of speech:** noun
**Core meaning (English):** the boundary between assumptions under which a conclusion holds and assumptions under which it fails.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới assumption còn giữ conclusion và làm conclusion mất.
**Grammar & collocations:** `robustness-frontier plot` — plot; `locate a conclusion reversal` — tìm.
**Examples:** `The robustness frontier lay beyond the range of confounding strengths observed in prior studies.` → Frontier nằm ngoài range strength từng thấy.
**Liên kết tiếng Hàn:** `강건성 경계`.

## Review in context

An **E-value**, **placebo outcome**, and **bounds analysis** ask how much hidden structure a conclusion can withstand. **Partial identification**, **Manski bounds**, and **worst-case bounds** report ranges; a **Rosenbaum bound** focuses on hidden selection in matched data. A **confounding function** or **bias function** can quantify **hidden bias**, while a **robustness value** and **omitted-variable bias** calculation translate assumptions into effect changes. A **specification curve** and **multiverse analysis** reveal analytic sensitivity. A **sensitivity contour** maps assumptions jointly; **confounding strength**, **selection odds**, **bias amplification**, and **unmeasured selection** define possible threats. The **robustness frontier** marks where the conclusion finally fails.

**Bản dịch tiếng Việt:** **E-value**, **placebo outcome** và **bounds analysis** hỏi conclusion chịu được hidden structure đến đâu. **Partial identification**, **Manski bounds** và **worst-case bounds** báo khoảng; **Rosenbaum bound** tập trung selection ẩn trong matching. **Confounding function** hoặc **bias function** lượng hóa **hidden bias**, còn **robustness value** và tính **omitted-variable bias** chuyển assumption thành thay đổi effect. **Specification curve** và **multiverse analysis** lộ sensitivity theo analytic choice. **Sensitivity contour** lập bản đồ assumption cùng lúc; **confounding strength**, **selection odds**, **bias amplification** và **unmeasured selection** mô tả threat. **Robustness frontier** đánh dấu nơi conclusion mất.
