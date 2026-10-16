# C1 Vocabulary 14 — Nonparametric and semiparametric estimation

This lesson follows how economists estimate flexible relationships when imposing a fully specified functional form would hide important structure.

Flow: **nonparametric estimation → semiparametric model → kernel estimator → kernel bandwidth → smoothing parameter → local polynomial regression → regression spline → smoothing spline → generalized additive model → partial residual plot → series estimator → sieve estimator → asymptotic linearity → root-n consistency → undersmoothing → cross-fitting → orthogonal score → nuisance parameter → double machine learning → debiased estimator**.

## 1. nonparametric estimation /ˌnɑnpærəˈmɛtrɪk ˌɛstəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** estimation that leaves the shape of a relationship relatively unrestricted instead of fixing it with a small set of parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ước lượng linh hoạt, không ép quan hệ vào một dạng hàm đơn giản với ít parameter cố định.
**Grammar & collocations:** `nonparametric-estimation method` — method; `allow the curve to adapt` — cho phép thích ứng.
**Examples:** `Nonparametric estimation revealed a sharp income effect that a linear model had missed.` → Ước lượng nonparametric cho thấy income effect tăng gắt mà linear model bỏ sót.
**Liên kết tiếng Hàn:** `비모수 추정`.

## 2. semiparametric model /ˌsɛmiˌpærəˈmɛtrɪk ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that combines a structured parametric component with a flexible component whose shape is estimated from the data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model ghép một phần có cấu trúc parameter với một phần linh hoạt học hình dạng từ data.
**Grammar & collocations:** `semiparametric specification` — specification; `separate structural and flexible effects` — tách.
**Examples:** `The semiparametric model imposed a constant treatment effect but left the baseline response flexible.` → Model giữ treatment effect cố định nhưng để baseline response linh hoạt.
**Liên kết tiếng Hàn:** `반모수 모형`.

## 3. kernel estimator /ˈkɝnəl ˌɛstəˈmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator that gives nearby observations more influence than distant observations by applying a weighting function.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator cho observation gần trọng số lớn hơn observation xa bằng một hàm weighting.
**Grammar & collocations:** `kernel-estimator weight` — weight; `smooth neighboring observations` — làm trơn.
**Examples:** `The kernel estimator placed the greatest weight on firms with similar market shares.` → Kernel estimator đặt trọng số lớn nhất cho công ty có market share tương tự.
**Liên kết tiếng Hàn:** `커널 추정량`.

## 4. kernel bandwidth /ˈkɝnəl ˈbændˌwɪdθ/
**Part of speech:** noun
**Core meaning (English):** the neighborhood width that determines how far an observation can influence a local estimate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ rộng vùng lân cận quyết định observation xa đến đâu vẫn ảnh hưởng estimate cục bộ.
**Grammar & collocations:** `kernel-bandwidth choice` — choice; `select a narrow bandwidth` — chọn.
**Examples:** `A narrow kernel bandwidth followed local fluctuations, while a wide bandwidth produced a smoother curve.` → Kernel bandwidth hẹp bám dao động cục bộ, bandwidth rộng tạo curve trơn hơn.
**Liên kết tiếng Hàn:** `대역폭`.

## 5. smoothing parameter /ˈsmuːðɪŋ pəˈræmətər/
**Part of speech:** noun
**Core meaning (English):** a tuning value that controls how much irregular variation is removed from an estimated relationship.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị điều chỉnh mức làm trơn, quyết định curve giữ lại bao nhiêu dao động nhỏ.
**Grammar & collocations:** `smoothing-parameter selection` — selection; `control roughness` — kiểm soát độ gồ ghề.
**Examples:** `Cross-validation selected a smoothing parameter that balanced fit against excessive wiggles.` → Cross-validation chọn parameter cân bằng độ khớp và việc curve ngoằn ngoèo quá mức.
**Liên kết tiếng Hàn:** `평활 매개변수`.

## 6. local polynomial regression /ˈloʊkəl ˌpɑləˈnoʊmiəl rɪˈɡrɛʃən/
**Part of speech:** noun
**Core meaning (English):** a regression that fits a low-degree polynomial separately around each target point, using nearby observations more heavily.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hồi quy fit polynomial bậc thấp quanh từng điểm, ưu tiên observation gần.
**Grammar & collocations:** `local-polynomial-regression fit` — fit; `estimate a boundary shape` — ước lượng.
**Examples:** `Local polynomial regression captured the flattening of demand near the price ceiling.` → Local polynomial regression nắm được cầu phẳng dần gần trần giá.
**Liên kết tiếng Hàn:** `국소 다항 회귀`.

## 7. regression spline /rɪˈɡrɛʃən splaɪn/
**Part of speech:** noun
**Core meaning (English):** a flexible regression function built from polynomial pieces joined smoothly at selected knot locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm hồi quy linh hoạt ghép các đoạn polynomial và nối trơn tại các knot.
**Grammar & collocations:** `regression-spline basis` — basis; `place knots at quantiles` — đặt.
**Examples:** `The regression spline allowed the wage profile to bend differently at several experience levels.` → Regression spline cho wage profile uốn khác nhau tại vài mức kinh nghiệm.
**Liên kết tiếng Hàn:** `회귀 스플라인`.

## 8. smoothing spline /ˈsmuːðɪŋ splaɪn/
**Part of speech:** noun
**Core meaning (English):** a spline estimate that trades goodness of fit against a penalty for excessive curvature.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** spline cân bằng độ khớp và penalty cho curve cong quá mức.
**Grammar & collocations:** `smoothing-spline penalty` — penalty; `penalize curvature` — phạt.
**Examples:** `The smoothing spline avoided chasing every short-lived fluctuation in electricity demand.` → Smoothing spline tránh bám mọi dao động ngắn của nhu cầu điện.
**Liên kết tiếng Hàn:** `평활 스플라인`.

## 9. generalized additive model /ˈdʒɛnərəlˌaɪzd ˈædətɪv ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that adds separate smooth functions of several predictors while retaining an additive outcome structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model cộng các hàm trơn riêng của nhiều predictor, vẫn giữ cấu trúc outcome dạng additive.
**Grammar & collocations:** `generalized-additive-model term` — term; `plot a partial smooth` — vẽ.
**Examples:** `The generalized additive model let temperature and pollution have different nonlinear contributions to hospital visits.` → Model cho temperature và pollution đóng góp phi tuyến khác nhau vào lượt nhập viện.
**Liên kết tiếng Hàn:** `일반화 가법 모형`.

## 10. partial residual plot /ˈpɑrʃəl rɪˈzɪdʒuəl plɑt/
**Part of speech:** noun
**Core meaning (English):** a diagnostic plot that displays the apparent relationship between one predictor and the outcome after accounting for the model's other terms.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu đồ chẩn đoán cho thấy quan hệ của một predictor với outcome sau khi tính các term khác.
**Grammar & collocations:** `partial-residual-plot pattern` — pattern; `inspect remaining curvature` — xem.
**Examples:** `The partial residual plot suggested that the linear income term was too restrictive.` → Partial residual plot gợi ý term income tuyến tính quá cứng.
**Liên kết tiếng Hàn:** `부분 잔차 도표`.

## 11. series estimator /ˈsɪriz ˌɛstəˈmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator that approximates an unknown function with a finite set of basis functions whose size can grow with the sample.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator xấp xỉ hàm chưa biết bằng tập basis hữu hạn, số basis có thể tăng theo sample.
**Grammar & collocations:** `series-estimator basis` — basis; `expand the approximation space` — mở rộng.
**Examples:** `The series estimator used polynomials to approximate the unknown response surface.` → Series estimator dùng polynomial để xấp xỉ response surface chưa biết.
**Liên kết tiếng Hàn:** `급수 추정량`.

## 12. sieve estimator /saɪv ˌɛstəˈmeɪtər/
**Part of speech:** noun
**Core meaning (English):** a flexible estimator that searches over an expanding sequence of approximation spaces to represent a complex unknown function.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator tìm trong các không gian xấp xỉ mở rộng dần để biểu diễn hàm phức tạp.
**Grammar & collocations:** `sieve-estimator approximation` — approximation; `increase the sieve dimension` — tăng.
**Examples:** `The sieve estimator increased its basis dimension as more observations became available.` → Sieve estimator tăng số chiều basis khi có thêm observation.
**Liên kết tiếng Hàn:** `체 추정량`.

## 13. asymptotic linearity /ˌæsɪmˈtɑtɪk ˌlɪniˈærəti/
**Part of speech:** noun
**Core meaning (English):** a large-sample property in which an estimator can be approximated by a linear average plus a remainder that becomes negligible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính chất mẫu lớn: estimator gần một average tuyến tính cộng remainder ngày càng không đáng kể.
**Grammar & collocations:** `asymptotic-linearity expansion` — expansion; `derive an influence representation` — suy ra.
**Examples:** `Asymptotic linearity made it possible to derive standard errors for the flexible estimator.` → Asymptotic linearity cho phép suy ra standard error cho estimator linh hoạt.
**Liên kết tiếng Hàn:** `점근적 선형성`.

## 14. root-n consistency /ˌruːt ɛn kənˈsɪstənsi/
**Part of speech:** noun
**Core meaning (English):** consistency at a rate proportional to the inverse square root of sample size, the rate that supports many normal approximations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator hội tụ với tốc độ căn bậc hai của cỡ mẫu, tốc độ thường giúp dùng xấp xỉ chuẩn.
**Grammar & collocations:** `root-n-consistency rate` — rate; `obtain a standard asymptotic distribution` — đạt.
**Examples:** `The estimator retained root-n consistency after the nuisance function was estimated flexibly.` → Estimator vẫn có root-n consistency sau khi nuisance function được ước lượng linh hoạt.
**Liên kết tiếng Hàn:** `루트 n 일관성`.

## 15. undersmoothing /ˌʌndərˈsmuːðɪŋ/
**Part of speech:** noun
**Core meaning (English):** deliberate use of less smoothing than prediction-oriented tuning would choose so that approximation bias becomes small enough for inference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cố ý làm trơn ít hơn mức tối ưu cho prediction để bias xấp xỉ đủ nhỏ cho inference.
**Grammar & collocations:** `undersmoothing choice` — choice; `reduce smoothing bias` — giảm.
**Examples:** `The confidence band required undersmoothing so that curvature bias did not dominate its width.` → Confidence band cần undersmoothing để bias curvature không lấn át độ rộng.
**Liên kết tiếng Hàn:** `과소 평활`.

## 16. cross-fitting /ˈkrɔs ˌfɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** a sample-splitting procedure that estimates auxiliary functions on one fold and evaluates the target score on another fold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia sample thành fold, học hàm phụ ở fold này rồi đánh giá score mục tiêu ở fold khác.
**Grammar & collocations:** `cross-fitting fold` — fold; `rotate training and evaluation samples` — luân phiên.
**Examples:** `Cross-fitting reduced overfitting when the nuisance model used many predictors.` → Cross-fitting giảm overfit khi nuisance model dùng nhiều predictor.
**Liên kết tiếng Hàn:** `교차 적합`.

## 17. orthogonal score /ɔrˈθɑɡənəl skɔr/
**Part of speech:** noun
**Core meaning (English):** an estimating score designed so that small errors in nuisance-function estimates have little first-order effect on the target parameter.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** score được thiết kế để lỗi nhỏ của nuisance function ít ảnh hưởng bậc nhất đến parameter mục tiêu.
**Grammar & collocations:** `orthogonal-score condition` — condition; `protect the target estimate` — bảo vệ.
**Examples:** `The orthogonal score protected the treatment estimate from moderate prediction error in the propensity model.` → Orthogonal score bảo vệ treatment estimate khỏi lỗi dự đoán vừa phải.
**Liên kết tiếng Hàn:** `직교 점수`.

## 18. nuisance parameter /ˈnuːsəns pəˈræmətər/
**Part of speech:** noun
**Core meaning (English):** a parameter or function needed to estimate the target of interest but not itself the main object of inference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parameter/function phụ cần cho target chính nhưng không phải đối tượng inference chính.
**Grammar & collocations:** `nuisance-parameter estimate` — estimate; `learn a propensity function` — học.
**Examples:** `The propensity score was a nuisance parameter in the treatment-effect calculation.` → Propensity score là nuisance parameter trong tính treatment effect.
**Liên kết tiếng Hàn:** `성가신 매개변수`.

## 19. double machine learning /ˈdʌbəl məˈʃiːn ˈlɝnɪŋ/
**Part of speech:** noun
**Core meaning (English):** an inference framework that uses flexible machine-learning estimates for nuisance functions together with orthogonal scores and sample splitting.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** framework inference dùng machine learning linh hoạt cho hàm phụ, kết hợp orthogonal score và chia sample.
**Grammar & collocations:** `double-machine-learning estimator` — estimator; `debias a causal parameter` — khử bias.
**Examples:** `Double machine learning estimated the policy effect while allowing nonlinear controls.` → Double machine learning ước lượng policy effect nhưng cho control phi tuyến.
**Liên kết tiếng Hàn:** `이중 머신러닝`.

## 20. debiased estimator /diːˈbaɪəst ˌɛstəˈmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator adjusted to remove or reduce systematic error introduced by regularization, selection, or flexible first-stage estimation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator được điều chỉnh để loại hoặc giảm bias do regularization, selection hay bước ước lượng linh hoạt.
**Grammar & collocations:** `debiased-estimator correction` — correction; `recover a target coefficient` — khôi phục.
**Examples:** `The debiased estimator recovered a treatment coefficient that the penalized fit had shrunk toward zero.` → Debiased estimator khôi phục treatment coefficient mà fit có penalty đã kéo về không.
**Liên kết tiếng Hàn:** `편향 보정 추정량`.

## Review in context

**Nonparametric estimation** leaves a relationship flexible, while a **semiparametric model** combines a structured part with a data-shaped part. A **kernel estimator** uses a **kernel bandwidth** and a **smoothing parameter**; **local polynomial regression**, a **regression spline**, a **smoothing spline**, and a **generalized additive model** offer other ways to trace curvature, often checked with a **partial residual plot**. A **series estimator** or **sieve estimator** approximates an unknown function with expanding bases. For inference, **asymptotic linearity** and **root-n consistency** matter; analysts may use **undersmoothing**, **cross-fitting**, and an **orthogonal score** to limit bias from a **nuisance parameter**. **Double machine learning** combines these ideas, and a **debiased estimator** corrects shrinkage or regularization bias.

**Bản dịch tiếng Việt:** **Nonparametric estimation** để quan hệ linh hoạt, còn **semiparametric model** ghép một phần có cấu trúc với một phần có hình dạng do data quyết định. **Kernel estimator** dùng **kernel bandwidth** và **smoothing parameter**; **local polynomial regression**, **regression spline**, **smoothing spline** và **generalized additive model** là các cách khác để theo dõi độ cong, thường được kiểm tra bằng **partial residual plot**. **Series estimator** hoặc **sieve estimator** xấp xỉ hàm chưa biết bằng các basis mở rộng. Với inference, **asymptotic linearity** và **root-n consistency** quan trọng; analyst có thể dùng **undersmoothing**, **cross-fitting** và **orthogonal score** để hạn chế bias từ **nuisance parameter**. **Double machine learning** kết hợp các ý tưởng này, còn **debiased estimator** sửa bias do shrinkage hoặc regularization.
