# C1 Vocabulary 16 — Errors in variables and misclassification

This lesson follows how econometricians reason about imperfect measurements when a recorded predictor or outcome differs from the underlying quantity of interest.

Flow: **errors-in-variables model → classical measurement error → attenuation bias → validation sample → replicate measurement → reliability ratio → regression calibration → SIMEX → Berkson error → misclassification matrix → nondifferential misclassification → differential misclassification → latent true value → proxy variable → repeated measurement → measurement-error correction → deconvolution estimator → calibration equation → calibration factor → error-prone covariate**.

## 1. errors-in-variables model /ˈɛrərz ɪn ˈvɛriəbəlz ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that explicitly allows an observed predictor to differ from the unobserved quantity it is intended to measure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model thừa nhận predictor quan sát khác quantity thật mà nó muốn đo.
**Grammar & collocations:** `errors-in-variables correction` — correction; `separate signal from noise` — tách.
**Examples:** `The errors-in-variables model treated reported wealth as a noisy version of true wealth.` → Model xem wealth được báo cáo là phiên bản nhiễu của wealth thật.
**Liên kết tiếng Hàn:** `오차가 있는 변수 모형`.

## 2. classical measurement error /ˈklæsɪkəl ˈmɛʒərmənt ˌɛrər/
**Part of speech:** noun
**Core meaning (English):** measurement error in which an observed value equals the true value plus random noise with mean zero that is unrelated to the true value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sai số mà giá trị quan sát bằng giá trị thật cộng nhiễu ngẫu nhiên trung bình bằng không, không liên quan giá trị thật.
**Grammar & collocations:** `classical-measurement-error assumption` — assumption; `add mean-zero noise` — thêm.
**Examples:** `Under classical measurement error, an unreliable income measure can dilute a slope estimate.` → Với classical measurement error, income đo không đáng tin có thể làm loãng slope estimate.
**Liên kết tiếng Hàn:** `고전적 측정 오차`.

## 3. attenuation bias /əˌtɛnjuˈeɪʃən baɪəs/
**Part of speech:** noun
**Core meaning (English):** bias that pulls an estimated coefficient toward zero when a continuously measured predictor contains classical noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bias kéo coefficient về không khi predictor liên tục chứa nhiễu cổ điển.
**Grammar & collocations:** `attenuation-bias factor` — factor; `shrink a slope toward zero` — kéo giảm.
**Examples:** `Attenuation bias made the estimated return to training look smaller than the underlying effect.` → Attenuation bias làm return của training ước lượng nhỏ hơn effect thật.
**Liên kết tiếng Hàn:** `감쇠 편향`.

## 4. validation sample /ˌvæləˈdeɪʃən ˈsæmpəl/
**Part of speech:** noun
**Core meaning (English):** a subset for which both an imperfect measurement and a more accurate reference measurement are available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sample có cả measurement không hoàn hảo và measurement tham chiếu chính xác hơn.
**Grammar & collocations:** `validation-sample design` — design; `estimate a measurement relationship` — ước lượng.
**Examples:** `The validation sample linked a short survey measure to a clinically assessed blood-pressure value.` → Validation sample nối measure khảo sát ngắn với blood pressure được đánh giá lâm sàng.
**Liên kết tiếng Hàn:** `검증 표본`.

## 5. replicate measurement /ˈrɛpləˌkeɪt ˈmɛʒərmənt/
**Part of speech:** noun
**Core meaning (English):** a second or subsequent measurement of the same underlying quantity used to learn about measurement noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lần đo lặp của cùng quantity để biết noise trong measurement.
**Grammar & collocations:** `replicate-measurement variance` — variance; `repeat an instrument reading` — đo lại.
**Examples:** `A replicate measurement allowed the team to distinguish day-to-day variation from instrument noise.` → Measurement lặp giúp phân biệt biến động từng ngày với noise của instrument.
**Liên kết tiếng Hàn:** `반복 측정`.

## 6. reliability ratio /rɪˌlaɪəˈbɪləti ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the fraction of an observed measure's variance attributable to variation in the underlying true quantity rather than measurement noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần variance của measure quan sát đến từ quantity thật thay vì noise.
**Grammar & collocations:** `reliability-ratio estimate` — estimate; `correct an attenuated coefficient` — điều chỉnh.
**Examples:** `A low reliability ratio warned that the survey score would produce substantial attenuation bias.` → Reliability ratio thấp cảnh báo survey score gây attenuation bias đáng kể.
**Liên kết tiếng Hàn:** `신뢰도 비율`.

## 7. regression calibration /rɪˈɡrɛʃən ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** a correction method that replaces an error-prone measure with its predicted true value from a validation relationship.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp thay measure lỗi bằng giá trị thật dự đoán từ quan hệ validation.
**Grammar & collocations:** `regression-calibration correction` — correction; `predict a calibrated exposure` — dự đoán.
**Examples:** `Regression calibration replaced the noisy dietary score with a value predicted from the validation sample.` → Regression calibration thay dietary score nhiễu bằng value dự đoán từ validation sample.
**Liên kết tiếng Hàn:** `회귀 보정`.

## 8. SIMEX /ˈsaɪˌmɛks/
**Part of speech:** noun
**Core meaning (English):** a simulation-based method that adds known amounts of measurement error, extrapolates the resulting estimates, and corrects toward zero added error.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp mô phỏng thêm error đã biết, ngoại suy estimate rồi sửa về mức không thêm error.
**Grammar & collocations:** `SIMEX correction` — correction; `extrapolate along an error path` — ngoại suy.
**Examples:** `SIMEX moved the slope away from zero after the analyst simulated additional noise in the exposure.` → SIMEX kéo slope ra khỏi không sau khi mô phỏng noise thêm vào exposure.
**Liên kết tiếng Hàn:** `SIMEX 보정`.

## 9. Berkson error /ˈbɝksən ˌɛrər/
**Part of speech:** noun
**Core meaning (English):** error in which the true value varies around a recorded or assigned value, rather than the record varying around the true value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị thật dao động quanh value được gán, ngược với việc record dao động quanh value thật.
**Grammar & collocations:** `Berkson-error structure` — structure; `assign a group-level exposure` — gán.
**Examples:** `Berkson error arose because every worker in a plant was assigned the plant's average exposure.` → Berkson error xuất hiện vì mọi công nhân nhận exposure trung bình của nhà máy.
**Liên kết tiếng Hàn:** `Berkson 오차`.

## 10. misclassification matrix /ˌmɪsklæ səfəˈkeɪʃən ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a table of probabilities linking a true category to the category recorded by an imperfect classification procedure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảng xác suất nối category thật với category bị ghi bởi procedure phân loại lỗi.
**Grammar & collocations:** `misclassification-matrix entry` — entry; `map true and observed classes` — ánh xạ.
**Examples:** `The misclassification matrix showed that mild cases were often labeled as moderate.` → Ma trận cho thấy case nhẹ thường bị gắn nhãn moderate.
**Liên kết tiếng Hàn:** `오분류 행렬`.

## 11. nondifferential misclassification /ˌnɑndɪfəˈrɛnʃəl ˌmɪsklæ səfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** classification error whose probabilities do not vary with the comparison group or another variable under study.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi phân loại có xác suất không đổi theo group so sánh hoặc biến đang nghiên cứu.
**Grammar & collocations:** `nondifferential-misclassification assumption` — assumption; `classify exposure independently of outcome` — phân loại.
**Examples:** `Nondifferential misclassification of exposure usually weakened the observed association in this setting.` → Nondifferential misclassification của exposure thường làm association quan sát yếu đi.
**Liên kết tiếng Hàn:** `비차별적 오분류`.

## 12. differential misclassification /ˌdɪfəˈrɛnʃəl ˌmɪsklæ səfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** classification error whose probability differs across groups, outcomes, or levels of another relevant variable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi phân loại có xác suất khác nhau giữa group, outcome hoặc mức của biến liên quan.
**Grammar & collocations:** `differential-misclassification pattern` — pattern; `distort an association in either direction` — làm lệch.
**Examples:** `Differential misclassification could either inflate or reverse the estimated treatment contrast.` → Differential misclassification có thể phóng đại hoặc đảo ngược treatment contrast ước lượng.
**Liên kết tiếng Hàn:** `차별적 오분류`.

## 13. latent true value /ˈleɪtənt tru ˈvælju/
**Part of speech:** noun
**Core meaning (English):** the unobserved quantity that an imperfect instrument or classification is intended to represent.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quantity thật nhưng ẩn mà instrument hoặc classification lỗi muốn đại diện.
**Grammar & collocations:** `latent-true-value distribution` — distribution; `infer an unobserved construct` — suy ra.
**Examples:** `The latent true value was blood pressure before rounding and device error were introduced.` → Latent true value là blood pressure trước khi làm tròn và thêm lỗi thiết bị.
**Liên kết tiếng Hàn:** `잠재 참값`.

## 14. proxy variable /ˈprɑksi ˈvɛriəbəl/
**Part of speech:** noun
**Core meaning (English):** an observed variable used as an indirect stand-in for a target quantity that is difficult or impossible to measure directly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến quan sát dùng thay gián tiếp cho quantity mục tiêu khó đo trực tiếp.
**Grammar & collocations:** `proxy-variable quality` — quality; `stand in for permanent income` — đại diện.
**Examples:** `Education served as a proxy variable for long-run earning capacity in the simple model.` → Education làm proxy variable cho năng lực kiếm tiền dài hạn.
**Liên kết tiếng Hàn:** `대리 변수`.

## 15. repeated measurement /rɪˈpiːtəd ˈmɛʒərmənt/
**Part of speech:** noun
**Core meaning (English):** multiple observations of the same underlying unit or quantity collected to separate persistent signal from temporary noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhiều observation của cùng unit để tách signal bền khỏi noise tạm thời.
**Grammar & collocations:** `repeated-measurement design` — design; `average noisy readings` — lấy trung bình.
**Examples:** `Repeated measurement of weekly hours improved the estimate of a worker's usual schedule.` → Đo lặp số giờ hàng tuần cải thiện estimate lịch làm thường lệ.
**Liên kết tiếng Hàn:** `반복 측정`.

## 16. measurement-error correction /ˈmɛʒərmənt ˌɛrər kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** an adjustment intended to reduce bias caused by inaccurate observation of a predictor, outcome, or categorical status.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều chỉnh để giảm bias do quan sát không chính xác predictor, outcome hoặc status phân loại.
**Grammar & collocations:** `measurement-error-correction method` — method; `adjust an observed association` — điều chỉnh.
**Examples:** `The measurement-error correction changed the policy estimate after the noisy income variable was modeled.` → Correction đổi policy estimate sau khi model hóa income nhiễu.
**Liên kết tiếng Hàn:** `측정 오차 보정`.

## 17. deconvolution estimator /ˌdiːkənvəˈluːʃən ˌɛstəˈmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator that attempts to recover a distribution or relationship after accounting for the blurring effect of measurement noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator khôi phục distribution hoặc quan hệ sau khi tính hiệu ứng làm nhòe của noise.
**Grammar & collocations:** `deconvolution-estimator bandwidth` — bandwidth; `recover a latent density` — khôi phục.
**Examples:** `The deconvolution estimator recovered a sharper income distribution from rounded survey reports.` → Deconvolution estimator khôi phục income distribution sắc hơn từ báo cáo khảo sát bị làm tròn.
**Liên kết tiếng Hàn:** `탈합성 추정량`.

## 18. calibration equation /ˌkælɪˈbreɪʃən ɪˈkweɪʒən/
**Part of speech:** noun
**Core meaning (English):** an equation that relates an imperfect measurement to a reference or latent true value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương trình nối measurement lỗi với reference hoặc true value ẩn.
**Grammar & collocations:** `calibration-equation fit` — fit; `link an instrument reading to a standard` — nối.
**Examples:** `The calibration equation translated the cheap sensor reading into an estimate on the laboratory scale.` → Calibration equation chuyển reading của sensor rẻ thành estimate theo thang phòng thí nghiệm.
**Liên kết tiếng Hàn:** `보정 방정식`.

## 19. calibration factor /ˌkælɪˈbreɪʃən ˈfæktər/
**Part of speech:** noun
**Core meaning (English):** a multiplicative or additive value used to adjust an observed measurement toward a reference scale.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị nhân hoặc cộng dùng kéo measurement quan sát về thang tham chiếu.
**Grammar & collocations:** `calibration-factor estimate` — estimate; `rescale an instrument output` — đổi thang.
**Examples:** `The laboratory supplied a calibration factor that corrected the monitor's systematic underreading.` → Phòng thí nghiệm cung cấp factor sửa việc monitor đọc thấp có hệ thống.
**Liên kết tiếng Hàn:** `보정 계수`.

## 20. error-prone covariate /ˈɛrər proʊn ˈkoʊˌvɛriət/
**Part of speech:** noun
**Core meaning (English):** a predictor measured with enough inaccuracy that treating it as exact can bias estimation or inference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** predictor đo sai đủ lớn để việc coi nó là chính xác gây bias estimate hoặc inference.
**Grammar & collocations:** `error-prone-covariate adjustment` — adjustment; `model covariate uncertainty` — mô hình hóa.
**Examples:** `The analyst modeled the error-prone covariate instead of treating the self-reported dose as exact.` → Analyst model hóa covariate lỗi thay vì coi dose tự báo cáo là chính xác.
**Liên kết tiếng Hàn:** `오류가 많은 공변량`.

## Review in context

An **errors-in-variables model** distinguishes a **classical measurement error** process from the underlying signal; otherwise **attenuation bias** can shrink a coefficient. A **validation sample** or a **replicate measurement** can estimate a **reliability ratio** and support **regression calibration** or **SIMEX**. A **Berkson error** has the opposite assignment pattern. For categories, a **misclassification matrix** describes **nondifferential misclassification** and **differential misclassification**. Analysts may model the **latent true value**, use a **proxy variable**, collect a **repeated measurement**, and apply **measurement-error correction**. A **deconvolution estimator**, **calibration equation**, and **calibration factor** can recover a less distorted scale for an **error-prone covariate**.

**Bản dịch tiếng Việt:** **Errors-in-variables model** phân biệt quá trình **classical measurement error** với signal thật; nếu không, **attenuation bias** có thể kéo coefficient nhỏ đi. **Validation sample** hoặc **replicate measurement** giúp ước lượng **reliability ratio** và hỗ trợ **regression calibration** hay **SIMEX**. **Berkson error** có kiểu gán ngược lại. Với category, **misclassification matrix** mô tả **nondifferential misclassification** và **differential misclassification**. Analyst có thể model **latent true value**, dùng **proxy variable**, thu **repeated measurement** và áp dụng **measurement-error correction**. **Deconvolution estimator**, **calibration equation** và **calibration factor** có thể khôi phục thang ít méo hơn cho **error-prone covariate**.
