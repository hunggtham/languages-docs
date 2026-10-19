# C1 Vocabulary 59 — Synthetic control and counterfactual panels

This lesson follows how comparative case studies construct a counterfactual path when one unit receives a policy and similar units do not.

Flow: **synthetic control → donor pool → convex weight → pre-treatment fit → post-treatment gap → placebo intervention → in-space placebo → in-time placebo → matrix completion → low-rank completion → interactive fixed effect → factor model counterfactual → synthetic difference-in-differences → augmented synthetic control → generalized synthetic control → counterfactual trajectory → pre-period fit → post-period effect → donor weight → convex combination**.

## 1. synthetic control /sɪnˈθɛtɪk kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** a method that builds a weighted combination of untreated units to approximate the treated unit's untreated outcome path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** method build combination weighted của untreated unit để approximate untreated outcome path của treated unit.
**Grammar & collocations:** `synthetic-control estimator` — estimator; `construct synthetic control` — construct.
**Examples:** `Synthetic control estimated what the city's emissions might have been without the transit reform.` → Control synthetic estimate emission city có thể thế nào nếu không transit reform.
**Liên kết tiếng Hàn:** `합성 대조군`.

## 2. donor pool /ˈdoʊnər puːl/
**Part of speech:** noun
**Core meaning (English):** the set of untreated units eligible to contribute to a synthetic comparison.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** set untreated unit eligible contribute cho comparison synthetic.
**Grammar & collocations:** `restricted donor pool` — pool; `choose a donor pool` — choose.
**Examples:** `The donor pool excluded cities exposed to the same national subsidy.` → Pool donor exclude city cùng exposed với national subsidy.
**Liên kết tiếng Hàn:** `기증자 풀`.

## 3. convex weight /ˈkɑnvɛks weɪt/
**Part of speech:** noun
**Core meaning (English):** a nonnegative weight whose collection sums to one when forming a weighted combination of units.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** weight không negative, tổng weight bằng one khi form combination unit.
**Grammar & collocations:** `nonnegative convex weight` — weight; `estimate convex weights` — estimate.
**Examples:** `A convex weight of 0.6 was assigned to the closest comparison region.` → Weight convex 0.6 assign cho region comparison gần nhất.
**Liên kết tiếng Hàn:** `볼록 가중치`.

## 4. pre-treatment fit /ˌpriːˈtriːtmənt fɪt/
**Part of speech:** noun
**Core meaning (English):** the degree to which a constructed comparison reproduces the treated unit's outcomes before intervention.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức comparison constructed reproduce outcome treated unit trước intervention.
**Grammar & collocations:** `excellent pre-treatment fit` — fit; `assess pre-treatment fit` — assess.
**Examples:** `Strong pre-treatment fit increased confidence in the counterfactual construction.` → Fit pre-treatment mạnh tăng confidence vào counterfactual construction.
**Liên kết tiếng Hàn:** `처치 전 적합도`.

## 5. post-treatment gap /poʊst ˈtriːtmənt ɡæp/
**Part of speech:** noun
**Core meaning (English):** the difference after intervention between the treated unit's observed outcome and its constructed counterfactual.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** difference sau intervention giữa observed outcome treated unit và counterfactual constructed.
**Grammar & collocations:** `persistent post-treatment gap` — gap; `interpret the post-treatment gap` — interpret.
**Examples:** `The post-treatment gap widened after the factory closure.` → Gap post-treatment widen sau factory closure.
**Liên kết tiếng Hàn:** `처치 후 격차`.

## 6. placebo intervention /pləˈsiːboʊ ˌɪntərˈvɛnʃən/
**Part of speech:** noun
**Core meaning (English):** a pretend intervention assigned in an analysis to test whether an estimated effect could arise by chance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** intervention pretend dùng trong analysis để test effect estimate có thể do chance không.
**Grammar & collocations:** `falsification placebo intervention` — intervention; `assign a placebo intervention` — assign.
**Examples:** `A placebo intervention assigned the policy date to an untreated region.` → Intervention placebo assign policy date cho region untreated.
**Liên kết tiếng Hàn:** `위약 개입`.

## 7. in-space placebo /ɪn speɪs pləˈsiːboʊ/
**Part of speech:** noun
**Core meaning (English):** a placebo test that pretends another untreated unit received the intervention.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** placebo test giả định untreated unit khác receive intervention.
**Grammar & collocations:** `in-space placebo test` — test; `run an in-space placebo` — run.
**Examples:** `The in-space placebo showed that the treated city's gap was unusually large.` → Placebo in-space show gap city treated lớn bất thường.
**Liên kết tiếng Hàn:** `공간 내 위약`.

## 8. in-time placebo /ɪn taɪm pləˈsiːboʊ/
**Part of speech:** noun
**Core meaning (English):** a placebo test that assigns a false intervention date before the actual intervention.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** placebo test assign intervention date giả trước date thật.
**Grammar & collocations:** `early in-time placebo` — placebo; `conduct an in-time placebo` — conduct.
**Examples:** `The in-time placebo produced no comparable gap before the reform.` → Placebo in-time không tạo gap tương tự trước reform.
**Liên kết tiếng Hàn:** `시간 내 위약`.

## 9. matrix completion /ˈmeɪtrɪks kəmˈpliːʃən/
**Part of speech:** noun
**Core meaning (English):** a method that fills missing entries in a data matrix by exploiting patterns across units and time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** method fill entry missing trong matrix data bằng pattern giữa unit và time.
**Grammar & collocations:** `interactive matrix completion` — completion; `apply matrix completion` — apply.
**Examples:** `Matrix completion estimated the untreated outcome path from shared time patterns.` → Completion matrix estimate untreated outcome path từ pattern time chung.
**Liên kết tiếng Hàn:** `행렬 완성`.

## 10. low-rank completion /loʊ ræŋk kəmˈpliːʃən/
**Part of speech:** noun
**Core meaning (English):** matrix completion that assumes the outcome matrix can be represented by a small number of latent factors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** completion matrix assume outcome matrix represent bằng ít latent factor.
**Grammar & collocations:** `regularized low-rank completion` — completion; `fit low-rank completion` — fit.
**Examples:** `Low-rank completion captured common economic cycles across regions.` → Completion low-rank capture economic cycle chung giữa region.
**Liên kết tiếng Hàn:** `저랭크 완성`.

## 11. interactive fixed effect /ˌɪntərˈæktɪv fɪkst ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** a panel effect created by interactions between unit-specific loadings and time-varying latent factors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** panel effect từ interaction giữa loading riêng unit và latent factor đổi theo time.
**Grammar & collocations:** `interactive fixed-effects model` — model; `estimate interactive fixed effects` — estimate.
**Examples:** `Interactive fixed effect absorbed region-specific responses to national shocks.` → Effect fixed interactive absorb response riêng region với national shock.
**Liên kết tiếng Hàn:** `상호작용 고정효과`.

## 12. factor model counterfactual /ˈfæktər ˈmɑdəl ˌkaʊntərˈfæktʃuəl/
**Part of speech:** noun
**Core meaning (English):** a counterfactual outcome generated by a latent-factor model for the treated unit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** counterfactual outcome tạo bởi latent-factor model cho treated unit.
**Grammar & collocations:** `latent factor model counterfactual` — counterfactual; `construct a factor model counterfactual` — construct.
**Examples:** `The factor model counterfactual followed the region's pre-policy response to national growth.` → Counterfactual model factor follow response region trước policy với national growth.
**Liên kết tiếng Hàn:** `요인 모형 반사실`.

## 13. synthetic difference-in-differences /sɪnˈθɛtɪk ˈdɪfərəns ɪn ˈdɪfərənsɪz/
**Part of speech:** noun
**Core meaning (English):** a method combining reweighting across units and time with difference-in-differences comparison.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** method combine reweight unit và time với comparison difference-in-differences.
**Grammar & collocations:** `synthetic difference-in-differences estimator` — estimator; `apply synthetic difference-in-differences` — apply.
**Examples:** `Synthetic difference-in-differences balanced both pre-policy levels and trends.` → Difference-in-differences synthetic balance level và trend trước policy.
**Liên kết tiếng Hàn:** `합성 이중차분`.

## 14. augmented synthetic control /ɔɡˈmɛntɪd sɪnˈθɛtɪk kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** a synthetic-control method that combines donor weighting with an outcome model to improve counterfactual prediction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** method synthetic-control combine donor weighting với outcome model để improve counterfactual prediction.
**Grammar & collocations:** `augmented synthetic-control estimator` — estimator; `use augmented synthetic control` — use.
**Examples:** `Augmented synthetic control remained useful when no donor matched every pre-treatment outcome.` → Control synthetic augmented vẫn hữu ích khi không donor nào match mọi outcome pre-treatment.
**Liên kết tiếng Hàn:** `증강 합성 대조군`.

## 15. generalized synthetic control /ˈdʒɛnərələzd sɪnˈθɛtɪk kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** a synthetic-control framework using latent factors to allow flexible outcome trajectories across units.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** framework synthetic-control dùng latent factor cho outcome trajectory flexible giữa unit.
**Grammar & collocations:** `generalized synthetic-control model` — model; `fit generalized synthetic control` — fit.
**Examples:** `Generalized synthetic control allowed regions to respond differently to national conditions.` → Control synthetic generalized cho region respond khác với national condition.
**Liên kết tiếng Hàn:** `일반화 합성 대조군`.

## 16. counterfactual trajectory /ˌkaʊntərˈfæktʃuəl trəˈdʒɛktəri/
**Part of speech:** noun
**Core meaning (English):** the sequence of outcomes a treated unit would be expected to experience without the intervention.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sequence outcome treated unit expected experience nếu không intervention.
**Grammar & collocations:** `estimated counterfactual trajectory` — trajectory; `plot a counterfactual trajectory` — plot.
**Examples:** `The counterfactual trajectory rose slowly while observed employment rose sharply.` → Trajectory counterfactual tăng chậm trong khi employment observe tăng mạnh.
**Liên kết tiếng Hàn:** `반사실적 궤적`.

## 17. pre-period fit /priː ˈpɪriəd fɪt/
**Part of speech:** noun
**Core meaning (English):** the quality of a constructed comparison during the time before treatment begins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quality comparison constructed trong time trước treatment start.
**Grammar & collocations:** `close pre-period fit` — fit; `evaluate pre-period fit` — evaluate.
**Examples:** `Close pre-period fit supported the use of the comparison for the policy forecast.` → Fit pre-period close support dùng comparison cho policy forecast.
**Liên kết tiếng Hàn:** `처리 전 기간 적합도`.

## 18. post-period effect /poʊst ˈpɪriəd ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** an estimated intervention effect measured during the period after treatment begins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** intervention effect estimate trong period sau treatment start.
**Grammar & collocations:** `average post-period effect` — effect; `estimate the post-period effect` — estimate.
**Examples:** `The post-period effect persisted for three years after the reform.` → Effect post-period persist ba năm sau reform.
**Liên kết tiếng Hàn:** `처리 후 기간 효과`.

## 19. donor weight /ˈdoʊnər weɪt/
**Part of speech:** noun
**Core meaning (English):** the contribution assigned to an untreated comparison unit in a constructed counterfactual.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** contribution assign cho untreated comparison unit trong counterfactual constructed.
**Grammar & collocations:** `large donor weight` — weight; `inspect donor weights` — inspect.
**Examples:** `One neighboring region received most of the donor weight because its pre-policy path matched closely.` → Region neighbor nhận phần lớn weight donor vì path pre-policy match close.
**Liên kết tiếng Hàn:** `기증자 가중치`.

## 20. convex combination /ˈkɑnvɛks ˌkɑmbəˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** a weighted average in which all weights are nonnegative and sum to one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** weighted average có weight không negative và tổng bằng one.
**Grammar & collocations:** `weighted convex combination` — combination; `form a convex combination` — form.
**Examples:** `The counterfactual was a convex combination of four comparison regions.` → Counterfactual là combination convex của bốn region comparison.
**Liên kết tiếng Hàn:** `볼록 결합`.

## Review in context

**Synthetic control** begins with a **donor pool**, assigns a **convex weight**, and checks **pre-treatment fit** before interpreting a **post-treatment gap**. A **placebo intervention**, an **in-space placebo**, or an **in-time placebo** can test whether the gap is unusual. **Matrix completion** and **low-rank completion** use latent structure, while an **interactive fixed effect** creates a **factor model counterfactual**. **Synthetic difference-in-differences**, **augmented synthetic control**, and **generalized synthetic control** offer alternative constructions. The final **counterfactual trajectory**, **pre-period fit**, **post-period effect**, **donor weight**, and **convex combination** should all be reported transparently.

**Bản dịch tiếng Việt:** **Synthetic control** bắt đầu với **donor pool**, assign **convex weight** và check **pre-treatment fit** trước khi interpret **post-treatment gap**. **Placebo intervention**, **in-space placebo** hoặc **in-time placebo** có thể test gap có unusual không. **Matrix completion** và **low-rank completion** dùng latent structure, còn **interactive fixed effect** tạo **factor model counterfactual**. **Synthetic difference-in-differences**, **augmented synthetic control** và **generalized synthetic control** là alternative construction. **Counterfactual trajectory**, **pre-period fit**, **post-period effect**, **donor weight** và **convex combination** đều nên report minh bạch.
