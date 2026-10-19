# C1 Vocabulary 57 — Bayesian nonparametric models and processes

This lesson follows how Bayesian models represent flexible distributions, latent functions, and an unknown number of groups without fixing every parameter in advance.

Flow: **Dirichlet process → Chinese restaurant process → stick-breaking process → Gaussian process prior → kernel covariance → nonparametric prior → Bayesian nonparametrics → random measure → base distribution → mixture component → infinite mixture → Dirichlet process mixture → Gaussian process regression → covariance kernel → exchangeable partition → cluster allocation → posterior clustering → nonparametric shrinkage → horseshoe prior → Indian buffet process**.

## 1. Dirichlet process /ˈdɪrɪˌkleɪ prəˈsɛs/
**Part of speech:** noun
**Core meaning (English):** a probability distribution over probability distributions, allowing an unknown number of clusters or flexible groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** probability distribution trên nhiều probability distribution, cho phép số cluster hoặc group chưa biết.
**Grammar & collocations:** `hierarchical Dirichlet process` — process; `place a Dirichlet process prior` — place.
**Examples:** `The Dirichlet process allowed the model to discover customer groups without fixing their number.` → Process Dirichlet cho model discover customer group mà không fix số lượng.
**Liên kết tiếng Hàn:** `디리클레 과정`.

## 2. Chinese restaurant process /ˈtʃaɪniːz ˈrɛstərɑnt ˈprɑsɛs/
**Part of speech:** noun
**Core meaning (English):** a sequential representation of how observations join existing clusters or start new ones under a Dirichlet process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** representation sequential về observation join cluster cũ hoặc start cluster mới dưới Dirichlet process.
**Grammar & collocations:** `Chinese-restaurant-process partition` — partition; `simulate a Chinese restaurant process` — simulate.
**Examples:** `The Chinese restaurant process made the probability of a new cluster depend on previous assignments.` → Process Chinese restaurant làm probability cluster mới phụ thuộc assignment trước.
**Liên kết tiếng Hàn:** `중국집 과정`.

## 3. stick-breaking process /ˈstɪk ˌbreɪkɪŋ ˈprɑsɛs/
**Part of speech:** noun
**Core meaning (English):** a construction that creates mixture weights by repeatedly breaking pieces from a unit-length stick.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** construction tạo mixture weight bằng repeatedly break piece từ stick dài một unit.
**Grammar & collocations:** `stick-breaking representation` — representation; `use a stick-breaking process` — use.
**Examples:** `The stick-breaking process assigned decreasing weights to possible mixture components.` → Process stick-breaking assign weight giảm dần cho mixture component possible.
**Liên kết tiếng Hàn:** `스틱 절단 과정`.

## 4. Gaussian process prior /ˈɡaʊsiən ˈprɑsɛs ˈpraɪər/
**Part of speech:** noun
**Core meaning (English):** a prior over functions in which any finite set of function values follows a joint Gaussian distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prior trên function, nơi finite set function value có joint Gaussian distribution.
**Grammar & collocations:** `smooth Gaussian process prior` — prior; `specify a Gaussian process prior` — specify.
**Examples:** `The Gaussian process prior favored a smooth relationship between temperature and demand.` → Prior process Gaussian favor relationship smooth giữa temperature và demand.
**Liên kết tiếng Hàn:** `가우시안 과정 사전분포`.

## 5. kernel covariance /ˈkɜrnəl koʊˈvɛriəns/
**Part of speech:** noun
**Core meaning (English):** a covariance rule that determines how strongly function values at two inputs are related.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule covariance determine function value ở hai input related mạnh thế nào.
**Grammar & collocations:** `stationary kernel covariance` — covariance; `choose a kernel covariance` — choose.
**Examples:** `The kernel covariance made nearby time points more strongly related than distant points.` → Covariance kernel làm time point gần related mạnh hơn point xa.
**Liên kết tiếng Hàn:** `커널 공분산`.

## 6. nonparametric prior /ˌnɑnˌpærəˈmɛtrɪk ˈpraɪər/
**Part of speech:** noun
**Core meaning (English):** a prior that does not restrict an unknown distribution to a small fixed-dimensional family.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prior không restrict unknown distribution vào family fixed-dimensional nhỏ.
**Grammar & collocations:** `flexible nonparametric prior` — prior; `place a nonparametric prior` — place.
**Examples:** `The nonparametric prior let the income distribution have several unexpected peaks.` → Prior nonparametric cho income distribution có nhiều peak unexpected.
**Liên kết tiếng Hàn:** `비모수 사전분포`.

## 7. Bayesian nonparametrics /ˈbeɪziən ˌnɑnˌpærəˈmɛtrɪks/
**Part of speech:** noun
**Core meaning (English):** Bayesian modeling that allows the complexity or dimension of an unknown object to grow with the data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** Bayesian modeling cho complexity hoặc dimension unknown object grow theo data.
**Grammar & collocations:** `Bayesian-nonparametrics method` — method; `study Bayesian nonparametrics` — study.
**Examples:** `Bayesian nonparametrics provided flexible clusters without selecting a fixed number first.` → Nonparametrics Bayesian tạo cluster flexible mà không chọn số fixed trước.
**Liên kết tiếng Hàn:** `베이지안 비모수 통계`.

## 8. random measure /ˈrændəm ˈmɛʒər/
**Part of speech:** noun
**Core meaning (English):** a measure whose values are random and can assign probability mass across possible locations or features.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measure có value random, assign probability mass qua location hoặc feature possible.
**Grammar & collocations:** `discrete random measure` — measure; `construct a random measure` — construct.
**Examples:** `The random measure placed more mass near the observed customer profiles.` → Measure random place mass nhiều hơn gần customer profile observe.
**Liên kết tiếng Hàn:** `확률 측도`.

## 9. base distribution /beɪs ˌdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** the reference distribution from which a nonparametric process draws its underlying values or components.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** distribution reference mà process nonparametric draw value hoặc component underlying.
**Grammar & collocations:** `diffuse base distribution` — distribution; `choose a base distribution` — choose.
**Examples:** `The base distribution allowed new clusters to appear around previously unseen patterns.` → Distribution base cho cluster mới xuất hiện quanh pattern chưa thấy.
**Liên kết tiếng Hàn:** `기초 분포`.

## 10. mixture component /ˈmɪkstʃər kəmˈpoʊnənt/
**Part of speech:** noun
**Core meaning (English):** one distributional subgroup contributing part of a mixture model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** subgroup distribution đóng góp một phần trong mixture model.
**Grammar & collocations:** `latent mixture component` — component; `add a mixture component` — add.
**Examples:** `A mixture component represented customers who preferred low-risk products.` → Component mixture represent customer prefer product low-risk.
**Liên kết tiếng Hàn:** `혼합 구성요소`.

## 11. infinite mixture /ˈɪnfənət ˈmɪkstʃər/
**Part of speech:** noun
**Core meaning (English):** a mixture model with potentially unlimited components, although only some receive meaningful posterior weight.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mixture model có component potentially unlimited nhưng chỉ vài component nhận posterior weight meaningful.
**Grammar & collocations:** `truncated infinite mixture` — mixture; `fit an infinite mixture` — fit.
**Examples:** `The infinite mixture represented a population whose number of segments was uncertain.` → Mixture infinite represent population có số segment uncertain.
**Liên kết tiếng Hàn:** `무한 혼합`.

## 12. Dirichlet process mixture /ˈdɪrɪˌkleɪ prəˈsɛs ˈmɪkstʃər/
**Part of speech:** noun
**Core meaning (English):** a mixture model whose number of occupied components is learned through a Dirichlet process prior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mixture model learn number component occupied qua Dirichlet process prior.
**Grammar & collocations:** `Dirichlet-process mixture model` — model; `estimate a Dirichlet process mixture` — estimate.
**Examples:** `The Dirichlet process mixture grouped neighborhoods by similar mobility patterns.` → Mixture process Dirichlet group neighborhood theo mobility pattern tương tự.
**Liên kết tiếng Hàn:** `디리클레 과정 혼합`.

## 13. Gaussian process regression /ˈɡaʊsiən ˈprɑsɛs rɪˈɡrɛʃən/
**Part of speech:** noun
**Core meaning (English):** regression that places a Gaussian process prior on an unknown function linking inputs to outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** regression đặt Gaussian process prior lên unknown function link input với outcome.
**Grammar & collocations:** `nonlinear Gaussian process regression` — regression; `fit Gaussian process regression` — fit.
**Examples:** `Gaussian process regression captured a curved relationship without choosing polynomial degree.` → Regression process Gaussian capture relationship curved mà không chọn polynomial degree.
**Liên kết tiếng Hàn:** `가우시안 과정 회귀`.

## 14. covariance kernel /koʊˈvɛriəns ˈkɜrnəl/
**Part of speech:** noun
**Core meaning (English):** a function that converts distances or similarities between inputs into covariance values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** function convert distance hoặc similarity giữa input thành covariance value.
**Grammar & collocations:** `radial covariance kernel` — kernel; `tune a covariance kernel` — tune.
**Examples:** `The covariance kernel controlled how quickly the predicted curve changed with age.` → Kernel covariance control curve prediction đổi nhanh theo age.
**Liên kết tiếng Hàn:** `공분산 커널`.

## 15. exchangeable partition /ɪksˈtʃeɪndʒəbəl pɑrˈtɪʃən/
**Part of speech:** noun
**Core meaning (English):** a random grouping whose probability does not depend on the order in which observations are listed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** grouping random có probability không phụ thuộc thứ tự list observation.
**Grammar & collocations:** `exchangeable partition probability` — probability; `model an exchangeable partition` — model.
**Examples:** `The exchangeable partition treated the order of customer arrivals as irrelevant.` → Partition exchangeable xem order customer arrive là irrelevant.
**Liên kết tiếng Hàn:** `교환 가능한 분할`.

## 16. cluster allocation /ˈklʌstər ˌæləˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the assignment of observations to latent groups or mixture components.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** assign observation vào latent group hoặc mixture component.
**Grammar & collocations:** `uncertain cluster allocation` — allocation; `update cluster allocation` — update.
**Examples:** `Cluster allocation changed when the model received more information about household size.` → Allocation cluster đổi khi model nhận thêm information về household size.
**Liên kết tiếng Hàn:** `군집 할당`.

## 17. posterior clustering /pɑˈstɪriər ˈklʌstərɪŋ/
**Part of speech:** noun
**Core meaning (English):** grouping observations according to their posterior probabilities of belonging to latent clusters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** group observation theo posterior probability thuộc latent cluster.
**Grammar & collocations:** `posterior clustering uncertainty` — uncertainty; `summarize posterior clustering` — summarize.
**Examples:** `Posterior clustering showed that several neighborhoods could belong to two segments.` → Clustering posterior show vài neighborhood có thể thuộc hai segment.
**Liên kết tiếng Hàn:** `사후 군집화`.

## 18. nonparametric shrinkage /ˌnɑnˌpærəˈmɛtrɪk ˈʃrɪŋkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** flexible regularization that pulls many effects toward simpler patterns while allowing unusually large signals to remain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** regularization flexible pull effect về pattern simple nhưng giữ signal unusually large.
**Grammar & collocations:** `adaptive nonparametric shrinkage` — shrinkage; `use nonparametric shrinkage` — use.
**Examples:** `Nonparametric shrinkage reduced noise among thousands of weak signals.` → Shrinkage nonparametric giảm noise giữa hàng nghìn signal yếu.
**Liên kết tiếng Hàn:** `비모수 수축`.

## 19. horseshoe prior /ˈhɔrsˌʃuː ˈpraɪər/
**Part of speech:** noun
**Core meaning (English):** a shrinkage prior that strongly pulls most small effects toward zero while keeping heavy tails for a few large effects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prior shrinkage kéo effect nhỏ về zero nhưng giữ heavy tail cho vài effect lớn.
**Grammar & collocations:** `sparse horseshoe prior` — prior; `place a horseshoe prior` — place.
**Examples:** `The horseshoe prior isolated a small set of strong predictors from many weak ones.` → Prior horseshoe isolate một số predictor mạnh khỏi nhiều predictor yếu.
**Liên kết tiếng Hàn:** `말발굽 사전분포`.

## 20. Indian buffet process /ˈɪndiən bəˈfɛt ˈprɑsɛs/
**Part of speech:** noun
**Core meaning (English):** a nonparametric process for modeling an unknown number of latent binary features shared across observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** process nonparametric model số binary feature latent chưa biết, share giữa observation.
**Grammar & collocations:** `Indian-buffet-process feature model` — model; `use an Indian buffet process` — use.
**Examples:** `The Indian buffet process discovered latent product features shared by different customers.` → Process Indian buffet discover product feature latent được nhiều customer share.
**Liên kết tiếng Hàn:** `인도식 뷔페 과정`.

## Review in context

A **Dirichlet process** can be represented by a **Chinese restaurant process** or a **stick-breaking process**, while a **Gaussian process prior** uses **kernel covariance** to describe functions. A **nonparametric prior** is central to **Bayesian nonparametrics**, where a **random measure** is built from a **base distribution** and flexible **mixture components**. An **infinite mixture** can become a **Dirichlet process mixture**, while **Gaussian process regression** relies on a **covariance kernel**. An **exchangeable partition** supports **cluster allocation** and **posterior clustering**. **Nonparametric shrinkage**, a **horseshoe prior**, and an **Indian buffet process** provide additional ways to learn sparse effects or latent features.

**Bản dịch tiếng Việt:** **Dirichlet process** có thể represent bằng **Chinese restaurant process** hoặc **stick-breaking process**, còn **Gaussian process prior** dùng **kernel covariance** để describe function. **Nonparametric prior** là trung tâm của **Bayesian nonparametrics**, nơi **random measure** xây từ **base distribution** và **mixture component** flexible. **Infinite mixture** có thể thành **Dirichlet process mixture**, còn **Gaussian process regression** dựa vào **covariance kernel**. **Exchangeable partition** support **cluster allocation** và **posterior clustering**. **Nonparametric shrinkage**, **horseshoe prior** và **Indian buffet process** cung cấp thêm cách learn sparse effect hoặc latent feature.
