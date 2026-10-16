# C2+ Vocabulary 03 — Synthetic control estimators, constrained convex optimization weights, and in-space placebo permutation inference

## 1. synthetic control estimator /sɪnˈθɛtɪk kənˈtroʊl ˈɛstɪmeɪtər/

**Loại từ & vị trí trong câu:** `noun [C]` — Functions as the primary methodological subject or object in econometric evaluation studies.

**Core meaning — English:** A statistical method used in comparative case studies to evaluate the effect of an intervention by constructing a weighted combination of unexposed control units that best mirrors the pre-intervention trajectory of the treated unit.

**Core meaning & mental image — Tiếng Việt:** Ước lượng kiểm soát tổng hợp (phương pháp định lượng tạo ra một đơn vị giả lập từ tổ hợp trọng số các đơn vị chưa xử lý nhằm bắt chước quỹ đạo trước can thiệp của đơn vị bị tác động).

**Grammar & collocations:** `deploy a synthetic control estimator` — apply econometric method; `robust synthetic control estimator` — reliable causal model; `estimate treatment effects via synthetic control` — evaluate policy impact.

**Register & nuance:** Advanced econometrics and causal inference terminology; highly regarded for comparative policy analysis where randomization is impossible.

**Examples:** The researcher deployed a synthetic control estimator to evaluate the economic impact of the 2001 tax reform by comparing the treated state to a weighted average of control states. → Nhà nghiên cứu đã triển khai ước lượng kiểm soát tổng hợp để đánh giá tác động kinh tế của cải cách thuế năm 2001 bằng cách so sánh bang chịu tác động với mức trung bình trọng số của các bang đối chứng.

**Liên kết tiếng Hàn:** 합성 통제 추정량 — ước lượng kiểm soát tổng hợp

---

## 2. constrained convex optimization weights /kənˈstreɪnd ˈkɒnvɛks ˌɒptɪmaɪˈzeɪʃən weɪts/

**Loại từ & vị trí trong câu:** `noun [pl.]` — Acts as the vector of optimization parameters.

**Core meaning — English:** Numerical weighting coefficients derived through mathematical optimization subject to the constraints that all weights must sum to one and remain non-negative, preventing extrapolation.

**Core meaning & mental image — Tiếng Việt:** Trọng số tối ưu hóa lồi có ràng buộc (các hệ số trọng số được tính toán thỏa mãn điều kiện tổng bằng một và không âm nhằm tránh ngoại suy sai lệch).

**Grammar & collocations:** `solve constrained convex optimization weights` — compute donor weights; `non-negative convex optimization weights` — constrained coefficients; `optimal convex weights` — balanced donor mix.

**Register & nuance:** Mathematical optimization and econometric modeling term; ensures transparency and prevents overfitting in synthetic control design.

**Examples:** By imposing constrained convex optimization weights, the algorithm ensured that no single control state dominated the synthetic counterfactual. → Bằng cách áp dụng các trọng số tối ưu hóa lồi có ràng buộc, thuật toán đã đảm bảo rằng không có bang đối chứng đơn lẻ nào thống trị mô hình đối lập tổng hợp.

**Liên kết tiếng Hàn:** 제약 볼록 최적화 가중치 — trọng số tối ưu hóa lồi có ràng buộc

---

## 3. in-space placebo permutation inference /ɪn speɪs pləˈsiːboʊ ˌpɜːrmjuˈteɪʃən ˈɪnfərəns/

**Loại từ & vị trí trong câu:** `noun [U]` — Functions as the statistical hypothesis testing framework noun.

**Core meaning — English:** A permutation-based falsification test in synthetic control studies where the intervention is iteratively reassigned to control units that did not experience the treatment to generate a empirical distribution of placebo treatment effects.

**Core meaning & mental image — Tiếng Việt:** Kiểm định hoán vị giả dược trong không gian (phương pháp kiểm định giả thuyết bằng cách gán giả định can thiệp cho các đơn vị đối chứng để tạo ra phân phối xác suất thực nghiệm nhằm đánh giá ý nghĩa thống kê).

**Grammar & collocations:** `conduct in-space placebo permutation inference` — perform falsification test; `permutation inference p-value` — statistical significance metric; `rigorous in-space placebo test` — validation procedure.

**Register & nuance:** Gold standard inference technique in comparative case studies; replaces traditional asymptotic standard errors with exact randomization distributions.

**Examples:** The authors performed in-space placebo permutation inference by running the synthetic control model across all 40 untreated states in the donor pool. → Các tác giả đã thực hiện kiểm định hoán vị giả dược trong không gian bằng cách chạy mô hình kiểm soát tổng hợp trên tất cả 40 bang chưa nhận can thiệp trong nhóm đối chứng.

**Liên kết tiếng Hàn:** 공간 내 위약 플라시보 순열 추론 — suy luận hoán vị giả dược trong không gian

---

## 4. non-negative weight constrained optimization /nɑːn ˈnɛɡətɪv weɪt kənˈstreɪnd ˌɒptɪmaɪˈzeɪʃən/

**Loại từ & vị trí trong câu:** `noun [U]` — Acts as the mathematical programming problem noun.

**Core meaning — English:** An optimization problem formulation where regression coefficients are strictly restricted from taking negative values, ensuring that the synthetic control is an interpolation rather than an extrapolation of donor units.

**Core meaning & mental image — Tiếng Việt:** Tối ưu hóa có ràng buộc trọng số không âm (bài toán tối ưu trong đó các hệ số bị cấm mang giá trị âm, đảm bảo mô hình chỉ nội suy thay vì ngoại suy dữ liệu).

**Grammar & collocations:** `formulate non-negative weight constrained optimization` — set up quadratic program; `solve non-negative weight optimization` — compute valid donor weights; `strict non-negative weight constraints` — interpolation boundaries.

**Register & nuance:** Fundamental econometric constraint in synthetic control methods; prevents absurd counterfactuals driven by negative extrapolation.

**Examples:** Enforcing non-negative weight constrained optimization prevented the model from assigning negative economic importance to donor states with divergent trends. → Việc thực thi tối ưu hóa có ràng buộc trọng số không âm đã ngăn mô hình gán tầm quan trọng kinh tế âm cho các bang đối chứng có xu hướng phân kỳ.

**Liên kết tiếng Hàn:** 비음수 가중치 제약 최적화 — tối ưu hóa ràng buộc trọng số không âm

---

## 5. pre-intervention donor pool trajectory balancing /priː ˌɪntərˈvɛnʃən ˈdoʊnər puːl trəˈdʒɛktəri ˈbælənsɪŋ/

**Loại từ & vị trí trong câu:** `noun [U]` — Acts as the pre-treatment matching process noun.

**Core meaning — English:** The process of selecting and weighting a pool of unexposed control units so that their pre-treatment economic or social outcomes match the historical trajectory of the treated unit as closely as possible.

**Core meaning & mental image — Tiếng Việt:** Cân bằng quỹ đạo nhóm đối chứng trước can thiệp (quá trình lựa chọn và gán trọng số cho các đơn vị đối chứng sao cho kết quả quá khứ của chúng bám sát quỹ đạo của đơn vị bị tác động).

**Grammar & collocations:** `achieve pre-intervention donor pool trajectory balancing` — match pre-treatment trends; `optimal donor pool balancing` — close historical alignment; `failed trajectory balancing` — mismatched pre-trends.

**Register & nuance:** Core diagnostic phase of synthetic control analysis; visual and numerical pre-fit quality determines study credibility.

**Examples:** Careful pre-intervention donor pool trajectory balancing ensured that the control composite mirrored the treated region's business cycle across the entire 15-year baseline period. → Việc cân bằng quỹ đạo nhóm đối chứng trước can thiệp cẩn thận đã đảm bảo rằng tổ hợp đối chứng phản ánh đúng chu kỳ kinh tế của vùng chịu tác động xuyên suốt toàn bộ 15 năm cơ sở.

**Liên kết tiếng Hàn:** 개입 전 기증자 풀 궤적 균형 맞추기 — cân bằng quỹ đạo nhóm đối chứng trước can thiệp

---

## 6. Root Mean Squared Prediction Error /ˈruːt miːn skwɛrəd prɪˈdɪkʃən ˈɛrər/

**Loại từ & vị trí trong câu:** `noun [C]` — Acts as the quantitative goodness-of-fit metric.

**Core meaning — English:** A quadratic scoring rule measuring the square root of the average squared discrepancies between predicted synthetic outcomes and actual observed outcomes during the pre-treatment or post-treatment period.

**Core meaning & mental image — Tiếng Việt:** Sai số bình quân phương gốc - RMSPE (thước đo thống kê lượng hóa độ lệch bình quân giữa giá trị dự báo tổng hợp và giá trị quan sát thực tế).

**Grammar & collocations:** `minimize pre-treatment Root Mean Squared Prediction Error` — optimize model fit; `post-intervention Root Mean Squared Prediction Error ratio` — treatment effect magnitude metric; `calculate RMSPE` — compute prediction error.

**Register & nuance:** Essential diagnostic statistic in synthetic control literature; used to rank placebo model fits against the treated unit.

**Examples:** A low pre-treatment Root Mean Squared Prediction Error indicated an exceptional fit between the synthetic control and the treated state prior to policy implementation. → Sai số bình quân phương gốc trước can thiệp thấp cho thấy mức độ khớp đặc biệt giữa nhóm kiểm soát tổng hợp và bang chịu tác động trước khi thực thi chính sách.

**Liên kết tiếng Hàn:** 제곱평균제곱근 오차 (RMSPE) — sai số bình quân phương gốc

---

## 7. in-time placebo test /ɪn taɪm pləˈsiːboʊ tɛst/

**Loại từ & vị trí trong câu:** `noun [C]` — Acts as the falsification robustness check noun.

**Core meaning — English:** A validation test where the intervention date is artificially shifted to an earlier, unaffected historical period to check whether the synthetic control model detects spurious treatment effects where none should exist.

**Core meaning & mental image — Tiếng Việt:** Kiểm định giả dược theo thời gian (kiểm định độ bền vững bằng cách dịch chuyển giả định thời điểm can thiệp về quá khứ để xem mô hình có phát hiện sai tác động giả hay không).

**Grammar & collocations:** `execute an in-time placebo test` — run temporal falsification; `fail the in-time placebo test` — detect false positive effects; `robust in-time placebo validation` — temporal robustness check.

**Register & nuance:** Standard falsification procedure in econometric studies; guards against spurious findings caused by unobserved shocks.

**Examples:** To rule out pre-existing structural breaks, the researcher conducted an in-time placebo test by setting the pseudo-treatment year to 1995 instead of 2005. → Để loại bỏ các đứt gãy cấu trúc sẵn có, nhà nghiên cứu đã thực hiện kiểm định giả dược theo thời gian bằng cách đặt năm giả can thiệp là 1995 thay vì 2005.

**Liên kết tiếng Hàn:** 시간 내 위약 플라시보 검정 — kiểm định giả dược theo thời gian

---

## 8. donor pool cherry-picking overfitting /ˈdoʊnər puːl ˈtʃɛri pɪkɪŋ ˌoʊvərˈfɪtɪŋ/

**Loại từ & vị trí trong câu:** `noun [U]` — Acts as the methodological pitfall noun.

**Core meaning — English:** The flawed practice of selectively including or excluding control units from the donor pool to manufacture a desired treatment effect or achieve an artificially perfect pre-treatment fit.

**Core meaning & mental image — Tiếng Việt:** Hiện tượng chọn lọc chủ quan nhóm đối chứng gây quá khớp (sai lầm phương pháp luận khi chọn lựa có chủ ý các đơn vị đối chứng nhằm tạo ra kết quả mong muốn hoặc độ khớp giả tạo).

**Grammar & collocations:** `avoid donor pool cherry-picking overfitting` — prevent data manipulation; `susceptible to cherry-picking overfitting` — vulnerable model specification; `guard against donor pool overfitting` — ensure objective selection.

**Register & nuance:** Critical warning in causal econometrics; threatens the internal validity of comparative case studies.

**Examples:** Pre-specifying the donor pool criteria prevented researchers from engaging in donor pool cherry-picking overfitting that could invalidate their causal claims. → Việc quy định trước các tiêu chí nhóm đối chứng đã ngăn các nhà nghiên cứu rơi vào bẫy chọn lọc chủ quan gây quá khớp có thể làm mất hiệu lực tuyên bố nguyên nhân.

**Liên kết tiếng Hàn:** 기증자 풀 체리피킹 과적합 — quá khớp do chọn lọc chủ quan nhóm đối chứng

---

## 9. sparse convex combination uniqueness /spɑːrs ˈkɒnvɛks ˌkɒmbɪˈneɪʃən juːˈniːknəs/

**Loại từ & vị trí trong câu:** `noun [U]` — Acts as the mathematical property noun.

**Core meaning — English:** The mathematical characteristic whereby optimization algorithms tend to assign positive weights to only a very small subset of available donor units, yielding a sparse and interpretable weighting vector.

**Core meaning & mental image — Tiếng Việt:** Tính duy nhất của tổ hợp lồi thưa (đặc tính toán học khiến thuật toán tối ưu chỉ gán trọng số dương cho một tập hợp rất nhỏ các đơn vị đối chứng, tạo ra véc-tơ trọng số tinh gọn).

**Grammar & collocations:** `analyze sparse convex combination uniqueness` — examine weight sparsity; `maintain sparse convex weights` — keep donor subset small; `unique sparse convex combination` — distinct weighting solution.

**Register & nuance:** Advanced mathematical programming concept in constrained regression and synthetic controls.

**Examples:** Due to the geometry of quadratic programming constraints, the synthetic control exhibited sparse convex combination uniqueness, selecting only three states out of forty. → Do hình học của các ràng buộc quy hoạch bậc hai, mô hình kiểm soát tổng hợp thể hiện tính duy nhất của tổ hợp lồi thưa, chỉ chọn ra ba bang trong số bốn mươi bang.

**Liên kết tiếng Hàn:** 희소 볼록 결합 고유성 — tính duy nhất của tổ hợp lồi thưa

---

## 10. convex hull interpolation boundary /ˈkɒnvɛks hʌl ɪnˌtɜːrpəˈleɪʃən ˈbaʊndəri/

**Loại từ & vị trí trong câu:** `noun [C]` — Acts as the geometric boundary noun.

**Core meaning — English:** The multidimensional geometric boundary defining the limits of linear combinations of donor units, outside of which any synthetic estimate would constitute invalid extrapolation.

**Core meaning & mental image — Tiếng Việt:** Ranh giới nội suy bao lồi (giới hạn hình học đa chiều xác định các tổ hợp tuyến tính hợp lệ của nhóm đối chứng, vượt ra ngoài đó sẽ là ngoại suy sai lệch).

**Grammar & collocations:** `respect the convex hull interpolation boundary` — avoid invalid extrapolation; `outside the convex hull boundary` — extrapolation risk; `convex hull constraint` — interpolation limit.

**Register & nuance:** Geometric and econometric constraint; protects researchers from making counterfactual claims unsupported by data.

**Examples:** Because the treated unit's pre-treatment characteristics fell outside the convex hull interpolation boundary of the control pool, the synthetic control method could not be reliably applied. → Vì các đặc trưng trước can thiệp của đơn vị chịu tác động nằm ngoài ranh giới nội suy bao lồi của nhóm đối chứng, phương pháp kiểm soát tổng hợp không thể áp dụng đáng tin cậy.

**Liên kết tiếng Hàn:** 볼록 껍질 보간 경계 — ranh giới nội suy bao lồi

---

## 11. penalized synthetic control estimator /ˈpɛnəlaɪzd sɪnˈθɛtɪk kənˈtroʊl ˈɛstɪmeɪtər/

**Loại từ & vị trí trong câu:** `noun [C]` — Acts as the regularized econometric model noun.

**Core meaning — English:** An extension of the standard synthetic control method that incorporates regularization penalties (such as ridge or lasso penalties) to handle high-dimensional donor pools and multicollinearity.

**Core meaning & mental image — Tiếng Việt:** Ước lượng kiểm soát tổng hợp có phạt (biến thể của phương pháp kiểm soát tổng hợp tích hợp các hình phạt điều tiết nhằm xử lý nhóm đối chứng đa chiều và đa cộng tuyến).

**Grammar & collocations:** `implement a penalized synthetic control estimator` — apply regularized model; `lasso-penalized synthetic control` — sparse weighting estimator; `ridge-penalized synthetic control weights` — regularized coefficients.

**Register & nuance:** Frontier econometric methodology for handling large panel datasets with numerous potential control units.

**Examples:** When facing hundreds of potential control cities, the econometrician turned to a penalized synthetic control estimator to prevent overfitting. → Khi đối mặt với hàng trăm thành phố đối chứng tiềm năng, chuyên gia kinh tế lượng đã chuyển sang sử dụng ước lượng kiểm soát tổng hợp có phạt để ngăn chặn hiện tượng quá khớp.

**Liên kết tiếng Hàn:** 페널티가 적용된 합성 통제 추정량 — ước lượng kiểm soát tổng hợp có hình phạt

---

## 12. staggered adoption synthetic control /ˈstæɡərd əˈdɒpʃən sɪnˈθɛtɪk kənˈtroʊl/

**Loại từ & vị trí trong câu:** `noun [U]` — Acts as the multi-treatment timing evaluation framework.

**Core meaning — English:** A specialized synthetic control framework designed for settings where different units adopt a policy or treatment at various distinct points in time rather than simultaneously.

**Core meaning & mental image — Tiếng Việt:** Kiểm soát tổng hợp với thời điểm áp dụng so le (khung phân tích kiểm soát tổng hợp dành cho các trường hợp các đơn vị nhận can thiệp tại các thời điểm khác nhau thay vì đồng thời).

**Grammar & collocations:** `model staggered adoption synthetic control` — evaluate multi-period policy; `staggered treatment timing` — asynchronous policy rollout; `staggered synthetic control estimator` — multi-adoption causal model.

**Register & nuance:** Advanced panel data econometric topic addressing complex policy rollout schedules.

**Examples:** Evaluating the minimum wage hikes across fifty states required a staggered adoption synthetic control approach due to varying implementation years. → Việc đánh giá các đợt tăng lương tối thiểu trên năm mươi bang đòi hỏi phương pháp kiểm soát tổng hợp với thời điểm áp dụng so le do các năm triển khai khác nhau.

**Liên kết tiếng Hàn:** 시차가 있는 채택 합성 통제 — kiểm soát tổng hợp áp dụng so le thời gian

---

## 13. root mean square error ratio /ˈruːt miːn skwɛr ˈɛrər ˈreɪʃioʊ/

**Loại từ & vị trí trong câu:** `noun [C]` — Acts as the inferential ratio metric.

**Core meaning — English:** The ratio of post-intervention RMSPE to pre-intervention RMSPE for a given unit, used in synthetic control inference to gauge whether post-treatment divergence is unusually large relative to pre-treatment fit.

**Core meaning & mental image — Tiếng Việt:** Tỷ số sai số bình quân phương gốc (tỷ lệ giữa RMSPE sau can thiệp và RMSPE trước can thiệp, dùng trong suy luận kiểm soát tổng hợp để đánh giá mức độ bất thường của hiệu ứng).

**Grammar & collocations:** `calculate the root mean square error ratio` — compute inferential statistic; `large root mean square error ratio` — strong treatment effect; `distribution of error ratios` — permutation test metric.

**Register & nuance:** Core test statistic in Abadie-style synthetic control permutation inference.

**Examples:** Units with an exceptionally high root mean square error ratio compared to placebo states provided strong evidence of a genuine treatment effect. → Các đơn vị có tỷ số sai số bình quân phương gốc cao đặc biệt so với các bang giả dược đã cung cấp bằng chứng mạnh mẽ về hiệu ứng can thiệp thực sự.

**Liên kết tiếng Hàn:** 제곱평균제곱근 오차 비율 — tỷ số sai số bình quân phương gốc

---

## 14. counterfactual trajectory extrapolation /ˌkaʊntərˈfæktʃuəl trəˈdʒɛktəri ɪkˌstræpəˈleɪʃən/

**Loại từ & vị trí trong câu:** `noun [U]` — Acts as the counterfactual projection process noun.

**Core meaning — English:** The estimation of what would have happened to the treated unit in the absence of the intervention, projected forward using weighted control outcomes.

**Core meaning & mental image — Tiếng Việt:** Ngoại suy quỹ đạo đối lập (việc ước tính điều gì sẽ xảy ra với đơn vị chịu tác động nếu không có can thiệp, được dự báo dựa trên kết quả trọng số của nhóm đối chứng).

**Grammar & collocations:** `project counterfactual trajectory extrapolation` — estimate unexposed path; `valid counterfactual trajectory` — credible unexposed projection; `divergence from counterfactual extrapolation` — measured treatment effect.

**Register & nuance:** Fundamental conceptual cornerstone of all modern causal inference frameworks.

**Examples:** The shaded area between the actual treated outcome and the counterfactual trajectory extrapolation visually represented the net policy impact. → Vùng được tô bóng giữa kết quả thực tế bị tác động và phép ngoại suy quỹ đạo đối lập thể hiện trực quan tác động ròng của chính sách.

**Liên kết tiếng Hàn:** 반사실적 궤적 외삽 — ngoại suy quỹ đạo phản thực tế

---

## 15. donor pool contamination /ˈdoʊnər puːl kənˌtæmɪˈneɪʃən/

**Loại từ & vị trí trong câu:** `noun [U]` — Acts as the identification violation noun.

**Core meaning — English:** The violation of the Stable Unit Treatment Value Assumption (SUTVA) occurring when control units in the donor pool are indirectly affected by the intervention, biasing the synthetic control estimate.

**Core meaning & mental image — Tiếng Việt:** Sự ô nhiễm nhóm đối chứng (vi phạm giả định SUTVA khi các đơn vị đối chứng trong nhóm bị ảnh hưởng gián tiếp bởi can thiệp, làm lệch ước lượng kiểm soát tổng hợp).

**Grammar & collocations:** `avoid donor pool contamination` — prevent spillover bias; `spillover and donor pool contamination` — indirect treatment interference; `mitigate contamination in the donor pool` — clean control selection.

**Register & nuance:** Critical econometric threat to validity; requires careful geographic or economic isolation of control units.

**Examples:** Because neighboring states experienced economic spillovers from the regional tax cut, researchers worried about potential donor pool contamination. → Do các bang láng giềng chịu sự lan tỏa kinh tế từ đợt cắt giảm thuế khu vực, các nhà nghiên cứu lo ngại về khả năng ô nhiễm nhóm đối chứng.

**Liên kết tiếng Hàn:** 기증자 풀 오염 — ô nhiễm nhóm đối chứng

---

## 16. leave-one-out cross-validation /liːv wʌn aʊt ˈkrɔːs ˌvælɪˈdeɪʃən/

**Loại từ & vị trí trong câu:** `noun [U]` — Acts as the model validation technique noun.

**Core meaning — English:** A robust validation procedure where each control unit in the donor pool is iteratively omitted to test whether the synthetic control weights and treatment effect estimates are sensitive to any single donor.

**Core meaning & mental image — Tiếng Việt:** Kiểm định chéo bỏ-một-đơn vị (phương pháp kiểm tra độ bền vững bằng cách lần lượt loại bỏ từng đơn vị đối chứng để xem trọng số và kết quả có bị chi phối bởi một đơn vị đơn lẻ nào không).

**Grammar & collocations:** `perform leave-one-out cross-validation` — test model robustness; `leave-one-out donor sensitivity analysis` — check weight stability; `rigorous leave-one-out validation` — specification check.

**Register & nuance:** Standard diagnostic test in empirical economics to ensure findings are not driven by an outlier control unit.

**Examples:** The authors conducted leave-one-out cross-validation to demonstrate that dropping any single control state did not alter the core findings. → Các tác giả đã thực hiện kiểm định chéo bỏ-một-đơn vị để chứng minh rằng việc loại bỏ bất kỳ bang đối chứng đơn lẻ nào cũng không làm thay đổi các kết quả cốt lõi.

**Liên kết tiếng Hàn:** 유의성 검증 교차 검증 (LOOCV) — kiểm định chéo để lại một

---

## 17. placebo permutation p-value /pləˈsiːboʊ ˌpɜːrmjuˈteɪʃən piː væljuː/

**Loại từ & vị trí trong câu:** `noun [C]` — Acts as the exact statistical significance metric.

**Core meaning — English:** The exact p-value calculated from an in-space placebo permutation test, representing the proportion of placebo units that yield a post-to-pre RMSPE ratio as large as or larger than the treated unit.

**Core meaning & mental image — Tiếng Việt:** Giá trị p hoán vị giả dược (chỉ số ý nghĩa thống kê chính xác tính bằng tỷ lệ các đơn vị giả dược có tỷ số RMSPE lớn hơn hoặc bằng đơn vị bị tác động).

**Grammar & collocations:** `calculate a placebo permutation p-value` — determine exact significance; `statistically significant placebo p-value` — robust treatment effect; `non-parametric permutation p-value` — exact inference metric.

**Register & nuance:** Non-parametric alternative to traditional parametric p-values; exceptionally persuasive in published econometric research.

**Examples:** With only 40 control states in the donor pool, the lowest achievable placebo permutation p-value was 1/41, or approximately 0.024. → Với chỉ 40 bang đối chứng trong nhóm, giá trị p hoán vị giả dược thấp nhất có thể đạt được là 1/41, tức là khoảng 0,024.

**Liên kết tiếng Hàn:** 플라시보 순열 p값 — giá trị p hoán vị giả dược

---

## 18. high-dimensional covariate balancing /haɪ dɪˈmɛnʃənəl ˈkoʊvəriət ˈbælənsɪŋ/

**Loại từ & vị trí trong câu:** `noun [U]` — Acts as the multivariate balancing process noun.

**Core meaning — English:** The econometric process of matching treatment and synthetic control units across a large number of pre-intervention predictor variables simultaneously.

**Core meaning & mental image — Tiếng Việt:** Cân bằng hiệp biến đa chiều (quá trình khớp các đơn vị can thiệp và kiểm soát tổng hợp trên một số lượng lớn các biến dự báo trước can thiệp cùng lúc).

**Grammar & collocations:** `achieve high-dimensional covariate balancing` — match multiple predictors; `regularized covariate balancing` — penalized matching method; `multivariate covariate balancing` — balanced pre-treatment traits.

**Register & nuance:** Advanced methodological challenge when synthesizing controls with extensive economic or demographic characteristics.

**Examples:** Modern machine learning extensions of synthetic controls utilize penalized regression to achieve high-dimensional covariate balancing without overfitting. → Các phần mở rộng học máy hiện đại của phương pháp kiểm soát tổng hợp sử dụng hồi quy có phạt để đạt được sự cân bằng hiệp biến đa chiều mà không bị quá khớp.

**Liên kết tiếng Hàn:** 고차원 공변량 균형 — cân bằng hiệp biến đa chiều

---

## 19. unobserved confounder mitigation /ˌʌnəbˈzɜːrvd kənˈfaʊndər ˌmɪtɪˈgeɪʃən/

**Loại từ & vị trí trong câu:** `noun [U]` — Acts as the identification strength noun.

**Core meaning — English:** The methodological advantage of synthetic control methods in absorbing time-varying unobserved confounders by matching on pre-intervention trajectory paths.

**Core meaning & mental image — Tiếng Việt:** Giảm thiểu nhiễu chưa quan sát (ưu điểm phương pháp luận của kiểm soát tổng hợp trong việc kiểm soát các yếu tố nhiễu thay đổi theo thời gian thông qua việc khớp quỹ đạo trước can thiệp).

**Grammar & collocations:** `achieve unobserved confounder mitigation` — control for hidden bias; `effective unobserved confounder control` — robust identification; `mitigate unobserved time-varying confounders` — handle hidden shocks.

**Register & nuance:** Key selling point of synthetic controls over standard difference-in-differences when parallel trends are questionable.

**Examples:** By matching on lagged outcome variables throughout the entire pre-treatment decade, the synthetic control method ensured robust unobserved confounder mitigation. → Bằng cách khớp các biến kết quả trễ xuyên suốt toàn bộ thập kỷ trước can thiệp, phương pháp kiểm soát tổng hợp đã đảm bảo giảm thiểu hiệu quả các yếuu tố nhiễu chưa quan sát.

**Liên kết tiếng Hàn:** 미관측 교란 팩터 완화 — giảm thiểu yếu tố nhiễu chưa quan sát

---

## 20. interpolation weight extrapolation bias /ɪnˌtɜːrpəˈleɪʃən weɪt ɪkˌstræpəˈleɪʃən ˈbaɪəσ/

**Loại từ & vị trí trong câu:** `noun [U]` — Acts as the specification error noun.

**Core meaning — English:** The estimation bias that occurs if optimization constraints are violated and negative or out-of-bounds weights force the synthetic unit to extrapolate far beyond the convex hull of the donor pool.

**Core meaning & mental image — Tiếng Việt:** Sai số ngoại suy do trọng số nội suy (sai số ước lượng xảy ra khi vi phạm ràng buộc tối ưu hóa khiến đơn vị tổng hợp ngoại suy vượt quá bao lồi của nhóm đối chứng).

**Grammar & collocations:** `prevent interpolation weight extrapolation bias` — avoid out-of-bounds errors; `minimize extrapolation bias` — correct weighting specification; `severe interpolation bias` — flawed synthetic fit.

**Register & nuance:** Technical econometric warning regarding the dangers of unconstrained regression weights in synthetic design.

**Examples:** Restricting weights to sum to one and remain non-positive-free eliminated interpolation weight extrapolation bias entirely. → Việc giới hạn các trọng số có tổng bằng một và không âm đã loại bỏ hoàn toàn sai số ngoại suy do trọng số nội suy.

**Liên kết tiếng Hàn:** 보간 가중치 외삽 편향 — sai số ngoại suy trọng số nội suy

---

## 21. post-intervention divergence magnitude /poʊst ɪntərˈvɛnʃən daɪˈvɜːrdʒəns ˈmæɡɪtuːd/

**Loại từ & vị trí trong câu:** `noun [U]` — Acts as the treatment effect size metric.

**Core meaning — English:** The quantitative gap between the observed trajectory of the treated unit and its synthetic control counterpart following the policy intervention.

**Core meaning & mental image — Tiếng Việt:** Mức độ phân kỳ sau can thiệp (khoảng cách định lượng giữa quỹ đạo quan sát thực tế của đơn vị chịu tác động và đối thủ kiểm soát tổng hợp sau khi chính sách diễn ra).

**Grammar & collocations:** `measure post-intervention divergence magnitude` — quantify policy effect; `large post-intervention divergence` — substantial treatment impact; `sustained divergence magnitude` — long-term policy effect.

**Register & nuance:** Core visual and numerical indicator of policy effectiveness in synthetic control plots.

**Examples:** The post-intervention divergence magnitude widened steadily over five years, signaling a cumulative positive economic effect from the regional investment initiative. → Mức độ phân kỳ sau sáng kiến đầu tư khu vực đã nới rộng đều đặn trong suốt năm năm, báo hiệu tác động kinh tế tích lũy tích cực.

**Liên kết tiếng Hàn:** 개입 후 발산 크기 — mức độ phân kỳ sau can thiệp

---

## 22. pseudo-intervention timing falsification /ˈsuːdoʊ ɪntərˈvɛnʃən ˈtaɪmɪŋ ˌfɒlsɪfɪˈkeɪʃən/

**Loại từ & vị trí trong câu:** `noun [U]` — Acts as the falsification test procedure noun.

**Core meaning — English:** A robustness test where the treatment date is falsely placed prior to the actual policy implementation to verify that no artificial effect is detected before the intervention occurred.

**Core meaning & mental image — Tiếng Việt:** Kiểm định giả mạo thời điểm giả can thiệp (kiểm nghiệm độ bền vững bằng cách đặt giả vờ thời điểm can thiệp trước thực tế để đảm bảo không có hiệu ứng ảo nào xuất hiện trước khi chính sách bắt đầu).

**Grammar & collocations:** `execute pseudo-intervention timing falsification` — run false timing check; `pass pseudo-intervention timing falsification` — verify pre-treatment stability; `robust timing falsification test` — temporal validation.

**Register & nuance:** Essential validation check in high-stakes empirical policy evaluation.

**Examples:** Passing the pseudo-intervention timing falsification test gave the researchers immense confidence that their estimated effect was truly driven by the 2010 reform. → Việc vượt qua kiểm định giả mạo thời điểm giả can thiệp đã mang lại cho các nhà nghiên cứu niềm tin vững chắc rằng hiệu ứng ước tính của họ thực sự xuất phát từ cải cách năm 2010.

**Liên kết tiếng Hàn:** 의사 개입 시점 위조 검증 — kiểm định giả mạo thời điểm giả can thiệp

---

## 23. donor pool covariate similarity /ˈdoʊnər puːl ˈkoʊvəriət sɪˈmɪlɪti/

**Loại từ & vị trí trong câu:** `noun [U]` — Acts as the pre-treatment matching criterion noun.

**Core meaning — English:** The degree of statistical resemblance in pre-intervention economic, social, and demographic characteristics between potential control units and the treated unit.

**Core meaning & mental image — Tiếng Việt:** Sự tương đồng hiệp biến của nhóm đối chứng (mức độ giống nhau về mặt thống kê trong các đặc trưng trước can thiệp giữa các đơn vị đối chứng tiềm năng và đơn vị bị tác động).

**Grammar & collocations:** `maximize donor pool covariate similarity` — improve pre-treatment match; `high donor pool covariate similarity` — closely matched control units; `poor covariate similarity` — divergent control pool.

**Register & nuance:** Central principle governing donor pool selection in credible comparative case studies.

**Examples:** Selecting control states with high donor pool covariate similarity ensured that the resulting synthetic counterfactual was economically credible. → Việc lựa chọn các bang đối chứng có sự tương đồng hiệp biến cao đã đảm bảo rằng đối lập tổng hợp thu được có độ tin cậy kinh tế cao.

**Liên kết tiếng Hàn:** 기증자 풀 공변량 유사성 — sự tương đồng hiệp biến của nhóm đối chứng

---

## 24. penalized synthetic optimization objective /ˈpɛnəlaɪzd sɪnˈθɛtɪk ˌɒptɪmaɪˈzeɪʃən əbˈdʒɛktɪv/

**Loại từ & vị trí trong câu:** `noun [C]` — Acts as the objective function noun.

**Core meaning — English:** The mathematical loss function in regularized synthetic control models that minimizes both pre-treatment prediction error and a penalty term on weight complexity.

**Core meaning & mental image — Tiếng Việt:** Hàm mục tiêu tối ưu hóa tổng hợp có phạt (hàm mất mát toán học trong các mô hình kiểm soát tổng hợp điều tiết nhằm thiểu hóa đồng thời sai số dự báo trước can thiệp và độ phức tạp của trọng số).

**Grammar & collocations:** `optimize penalized synthetic optimization objective` — solve regularized loss function; `penalized objective function` — regularized minimization criterion; `minimize the synthetic optimization objective` — fit control weights.

**Register & nuance:** Advanced mathematical formulation in machine learning approaches to causal panel data models.

**Examples:** By incorporating an L1 norm penalty into the penalized synthetic optimization objective, the algorithm successfully shrank noisy irrelevant donor weights to zero. → Bằng cách tích hợp hình phạt chuẩn L1 vào hàm mục tiêu tối ưu hóa tổng hợp có phạt, thuật toán đã thu gọn thành công các trọng số đối chứng nhiễu không liên quan về bằng không.

**Liên kết tiếng Hàn:** 페널티가 적용된 합성 최적화 목적 함수 — hàm mục tiêu tối ưu hóa tổng hợp có phạt

---

## 25. comparative case study identification strategy /kəmˈpærətɪv keɪs ˈstʌdi aɪˌdɛntɪfɪˈkeɪʃən ˈstrætədi/

**Loại từ & vị trí trong câu:** `noun [C]` — Acts as the overarching causal methodology noun.

**Core meaning — English:** The comprehensive methodological framework combining data-driven weighting, counterfactual construction, and permutation inference to establish causal claims in comparative observational settings.

**Core meaning & mental image — Tiếng Việt:** Chiến lược nhận diện nghiên cứu tình huống so sánh (khung phương pháp luận toàn diện kết hợp trọng số hướng dữ liệu, xây dựng đối lập và suy luận hoán vị để thiết lập nhân quả trong bối cảnh quan sát so sánh).

**Grammar & collocations:** `design a robust comparative case study identification strategy` — build causal framework; `innovative comparative case study identification strategy` — advanced econometric design; `credibility of the identification strategy` — causal validity.

**Register & nuance:** Fundamental overarching concept in modern applied microeconomics and policy evaluation.

**Examples:** The peer reviewers praised the paper's rigorous comparative case study identification strategy, noting that the combination of synthetic controls and placebo permutation inference was exemplary. → Các phản biện viên đã ca ngợi chiến lược nhận diện nghiên cứu tình huống so sánh nghiêm ngặt của bài báo, lưu ý rằng sự kết hợp giữa kiểm soát tổng hợp và suy luận hoán vị giả dược là kiểu mẫu.

**Liên kết tiếng Hàn:** 비교 사례 연구 식별 전략 — chiến lược nhận diện nghiên cứu tình huống so sánh

---

## Review in context (Part 1: Synthetic control estimation and optimization foundations)
Evaluating the impact of major public policy interventions often requires advanced econometric tools when randomized controlled trials are infeasible. Researchers frequently deploy a **synthetic control estimator**, which constructs a weighted combination of unexposed control units to mirror the treated unit's historical path. To ensure this counterfactual is economically meaningful, the model solves for **constrained convex optimization weights**, enforcing a **non-negative weight constrained optimization** protocol that prevents absurd negative extrapolation. This mathematical rigor guarantees **sparse convex combination uniqueness**, meaning only a select few relevant donor units receive positive weights. The entire matching process relies on meticulous **pre-intervention donor pool trajectory balancing** across the baseline period, evaluated quantitatively via the **Root Mean Squared Prediction Error**. Furthermore, maintaining strict adherence to the **convex hull interpolation boundary** prevents researchers from making claims outside the valid span of the data, while avoiding **interpolation weight extrapolation bias**. To account for potential challenges, analysts must guard against **donor pool contamination** from spillover effects and carefully maximize **donor pool covariate similarity**.

**Bản dịch tiếng Việt:**
Đánh giá tác động của các can thiệp chính sách công lớn thường đòi hỏi các công cụ kinh tế lượng tiên tiến khi các thử nghiệm đối chứng ngẫu nhiên không khả thi. Các nhà nghiên cứu thường triển khai **ước lượng kiểm soát tổng hợp**, xây dựng một tổ hợp trọng số các đơn vị đối chứng chưa phơi nhiễm nhằm phản ánh đúng quỹ đạo lịch sử của đơn vị chịu tác động. Để đảm bảo đối lập này có ý nghĩa kinh tế, mô hình giải quyết bài toán **trọng số tối ưu hóa lồi có ràng buộc**, thực thi quy tắc **tối ưu hóa có ràng buộc trọng số không âm** nhằm ngăn chặn ngoại suy âm vô lý. Sự nghiêm ngặt toán học này đảm bảo **tính duy nhất của tổ hợp lồi thưa**, nghĩa là chỉ một số ít đơn vị đối chứng có liên quan nhận được trọng số dương. Toàn bộ quá trình khớp phụ thuộc vào việc **cân bằng quỹ đạo nhóm đối chứng trước can thiệp** tỉ mỉ xuyên suốt thời kỳ cơ sở, được đánh giá định lượng thông qua **sai số bình quân phương gốc - RMSPE**. Hơn nữa, việc tuân thủ nghiêm ngặt **ranh giới nội suy bao lồi** giúp ngăn các nhà nghiên cứu đưa ra tuyên bố nằm ngoài khoảng dữ liệu hợp lệ, đồng thời tránh **sai số ngoại suy do trọng số nội suy**. Để giải quyết các thách thức tiềm ẩn, các nhà phân tích phải đề phòng **sự ô nhiễm nhóm đối chứng** từ các hiệu ứng lan tỏa và tối đa hóa cẩn thận **sự tương đồng hiệp biến của nhóm đối chứng**.

---

## Review in context (Part 2: Robustness checks, permutation inference, and identification strategies)
Even with a well-fitted baseline, establishing genuine causality requires rigorous falsification and validation checks. Analysts frequently execute an **in-time placebo test**, shifting the intervention date backward to detect spurious effects, alongside **pseudo-intervention timing falsification** checks. To handle high-dimensional settings, researchers may utilize a **penalized synthetic control estimator** driven by a **penalized synthetic optimization objective**, or apply a **staggered adoption synthetic control** framework for multi-period rollouts. Furthermore, performing **leave-one-out cross-validation** ensures that empirical findings are not driven by a single influential control unit, shielding the study against **donor pool cherry-picking overfitting**. To determine statistical significance without relying on asymptotic assumptions, studies employ **in-space placebo permutation inference**, generating empirical p-values from the distribution of placebo effects. By examining the **root mean square error ratio** and evaluating the **post-intervention divergence magnitude** relative to the **counterfactual trajectory extrapolation**, researchers calculate an exact **placebo permutation p-value**. Ultimately, combining these validation steps within a transparent **comparative case study identification strategy**—while leveraging **unobserved confounder mitigation**—forms the gold standard of modern empirical policy evaluation.

**Bản dịch tiếng Việt:**
Ngay cả với một đường cơ sở khớp tốt, việc thiết lập nhân quả thực sự vẫn đòi hỏi các kiểm tra giả mạo và thẩm định nghiêm ngặt. Các nhà phân tích thường thực hiện **kiểm định giả dược theo thời gian**, dịch chuyển lùi thời điểm can thiệp để phát hiện các hiệu ứng giả, bên cạnh các kiểm tra **giả mạo thời điểm giả can thiệp**. Để xử lý các bối cảnh đa chiều, các nhà nghiên cứu có thể sử dụng **ước lượng kiểm soát tổng hợp có phạt** được điều khiển bởi **hàm mục tiêu tối ưu hóa tổng hợp có phạt**, hoặc áp dụng khung **kiểm soát tổng hợp với thời điểm áp dụng so le** cho các đợt triển khai đa giai đoạn. Hơn nữa, việc thực hiện **kiểm định chéo bỏ-một-đơn vị** đảm bảo rằng các kết quả thực nghiệm không bị chi phối bởi một đơn vị đối chứng có ảnh hưởng duy nhất, bảo vệ nghiên cứu khỏi hiện tượng **quá khớp do chọn lọc chủ quan nhóm đối chứng**. Để xác định ý nghĩa thống kê mà không dựa vào các giả định tiệm cận, các nghiên cứu sử dụng **suy luận hoán vị giả dược trong không gian**, tạo ra các giá trị p thực nghiệm từ phân phối hiệu ứng giả dược. Bằng cách kiểm tra **tỷ số sai số bình quân phương gốc** và đánh giá **mức độ phân kỳ sau can thiệp** so với **ngoại suy quỹ đạo phản thực tế**, các nhà nghiên cứu tính toán chính xác **giá trị p hoán vị giả dược**. Cuối cùng, việc kết hợp các bước thẩm định này trong một **chiến lược nhận diện nghiên cứu tình huống so sánh** minh họa — đồng thời tận dụng **giảm thiểu yếu tố nhiễu chưa quan sát** — tạo nên tiêu chuẩn vàng của đánh giá chính sách thực nghiệm hiện đại.
