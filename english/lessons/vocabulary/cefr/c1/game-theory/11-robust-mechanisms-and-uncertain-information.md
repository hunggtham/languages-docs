# C1 Vocabulary 11 — Robust mechanisms and uncertain information

This lesson follows how mechanism designers protect incentives and welfare when beliefs, distributions, or private information are uncertain.

Flow: **robust mechanism → prior-independent mechanism → detail-free mechanism → Bayesian incentive compatibility → dominant-strategy incentive compatibility → approximate strategy-proofness → worst-case guarantee → approximation ratio → competitive ratio → regret minimization → adaptive mechanism → information rent → maximin strategy → minimax regret → ambiguity set → distributional uncertainty → ex ante efficiency → interim efficiency → ex post efficiency → prior independence**.

## 1. robust mechanism /roʊˈbʌst ˈmɛkəˌnɪzəm/
**Part of speech:** noun
**Core meaning (English):** a mechanism designed to perform acceptably across a range of beliefs, information structures, or environments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mechanism được thiết kế để hoạt động chấp nhận được qua nhiều belief, information structure hoặc environment.
**Grammar & collocations:** `robust-mechanism design` — design; `stress-test a robust mechanism` — stress-test.
**Examples:** `The robust mechanism preserved truthful reporting when the agency's prior estimate was misspecified.` → Mechanism robust giữ report truthful khi prior estimate của agency bị đặc tả sai.
**Liên kết tiếng Hàn:** `강건한 메커니즘`.

## 2. prior-independent mechanism /ˈpraɪər ˌɪndɪˈpɛndənt ˈmɛkəˌnɪzəm/
**Part of speech:** noun
**Core meaning (English):** a mechanism that does not require the designer to know the participants' prior distribution of private values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mechanism không cần designer biết prior distribution về private value của participant.
**Grammar & collocations:** `prior-independent-mechanism guarantee` — guarantee; `design without a prior` — thiết kế.
**Examples:** `A prior-independent mechanism remained usable when the market lacked reliable historical valuations.` → Mechanism độc lập prior vẫn dùng được khi market thiếu valuation lịch sử đáng tin.
**Liên kết tiếng Hàn:** `사전확률 독립 메커니즘`.

## 3. detail-free mechanism /ˈdiːteɪl friː ˈmɛkəˌnɪzəm/
**Part of speech:** noun
**Core meaning (English):** a mechanism that achieves a target guarantee without requiring detailed knowledge of participants' value distributions or preferences.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mechanism đạt guarantee mục tiêu mà không cần biết chi tiết distribution value hoặc preference.
**Grammar & collocations:** `detail-free-mechanism property` — property; `operate with minimal information` — hoạt động.
**Examples:** `The detail-free mechanism used only submitted bids, not a model of the entire demand distribution.` → Mechanism không cần detail chỉ dùng bid submit, không dùng model toàn distribution demand.
**Liên kết tiếng Hàn:** `세부 정보 불필요 메커니즘`.

## 4. Bayesian incentive compatibility /beɪˈziən ɪnˈsɛntɪv kəmˌpætəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** a condition under which truthful reporting is optimal in expectation, given a participant's type and beliefs about others.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truthful report optimal theo expectation, type của participant và belief về người khác.
**Grammar & collocations:** `Bayesian-incentive-compatibility constraint` — constraint; `check expected truthfulness` — kiểm tra.
**Examples:** `Bayesian incentive compatibility held even though a supplier did not know the buyer's exact cost.` → Compatibility incentive Bayesian đúng dù supplier không biết cost chính xác của buyer.
**Liên kết tiếng Hàn:** `베이지안 유인 적합성`.

## 5. dominant-strategy incentive compatibility /ˈdɑmənənt ˈstrætədʒi ɪnˈsɛntɪv kəmˌpætəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** a condition under which truthful reporting is optimal for every possible report by the other participants.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** truthful report optimal với mọi report khả dĩ của participant khác.
**Grammar & collocations:** `dominant-strategy incentive-compatibility condition` — condition; `guarantee truth-telling` — bảo đảm.
**Examples:** `The allocation rule satisfied dominant-strategy incentive compatibility without asking bidders to predict one another.` → Rule allocation thỏa compatibility incentive strategy trội mà không cần bidder đoán nhau.
**Liên kết tiếng Hàn:** `지배 전략 유인 적합성`.

## 6. approximate strategy-proofness /əˈprɑksəmət ˈstrætədʒi pruːfnəs/
**Part of speech:** noun
**Core meaning (English):** a property under which misreporting can improve a participant's outcome only by a small bounded amount.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** misreport chỉ có thể cải thiện outcome một amount nhỏ bị giới hạn.
**Grammar & collocations:** `approximate-strategy-proofness bound` — bound; `allow small manipulation gains` — cho phép.
**Examples:** `Approximate strategy-proofness limited the benefit of exaggerating a home's value.` → Strategy-proofness xấp xỉ giới hạn lợi ích phóng đại value nhà.
**Liên kết tiếng Hàn:** `근사 전략 무결성`.

## 7. worst-case guarantee /ˈwɝst keɪs ˌɡærənˈtiː/
**Part of speech:** noun
**Core meaning (English):** a performance or welfare guarantee that holds under the least favorable allowed environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** guarantee performance/welfare đúng trong environment allowed bất lợi nhất.
**Grammar & collocations:** `worst-case-guarantee analysis` — analysis; `prove a worst-case guarantee` — chứng minh.
**Examples:** `The worst-case guarantee protected participants when every value estimate was unfavorable.` → Guarantee worst-case bảo vệ participant khi mọi estimate value đều bất lợi.
**Liên kết tiếng Hàn:** `최악의 경우 보장`.

## 8. approximation ratio /əˌprɑksəˈmeɪʃən ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the ratio comparing an algorithm's or mechanism's outcome with the ideal optimum.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ratio so outcome algorithm/mechanism với optimum lý tưởng.
**Grammar & collocations:** `approximation-ratio bound` — bound; `achieve a constant approximation ratio` — đạt.
**Examples:** `The mechanism achieved a two-thirds approximation ratio relative to the efficient benchmark.` → Mechanism đạt ratio xấp xỉ hai phần ba so với benchmark efficient.
**Liên kết tiếng Hàn:** `근사 비율`.

## 9. competitive ratio /kəmˈpɛtətɪv ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the worst-case comparison between an online decision procedure and an ideal procedure that knows the future.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** comparison worst-case giữa procedure online và procedure ideal biết future.
**Grammar & collocations:** `competitive-ratio analysis` — analysis; `bound the competitive ratio` — bound.
**Examples:** `The online allocation rule had a strong competitive ratio despite not knowing future arrivals.` → Rule allocation online có ratio competitive mạnh dù không biết arrival future.
**Liên kết tiếng Hàn:** `경쟁 비율`.

## 10. regret minimization /rɪˈɡrɛt ˌmɪnəˌməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of choosing actions to reduce the loss from not having selected the best action in hindsight.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn action để giảm loss vì không chọn action tốt nhất khi nhìn lại.
**Grammar & collocations:** `regret-minimization algorithm` — algorithm; `minimize cumulative regret` — giảm.
**Examples:** `Regret minimization helped the platform adjust prices while demand was still uncertain.` → Minimization regret giúp platform điều chỉnh price khi demand vẫn bất định.
**Liên kết tiếng Hàn:** `후회 최소화`.

## 11. adaptive mechanism /əˈdæptɪv ˈmɛkəˌnɪzəm/
**Part of speech:** noun
**Core meaning (English):** a mechanism that changes its rules or recommendations in response to observed behavior or outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mechanism đổi rule hoặc recommendation theo behavior/outcome quan sát.
**Grammar & collocations:** `adaptive-mechanism update` — update; `adapt to observed bids` — thích nghi.
**Examples:** `The adaptive mechanism lowered the reserve after repeated auctions attracted no buyer.` → Mechanism adaptive hạ reserve sau nhiều auction không có buyer.
**Liên kết tiếng Hàn:** `적응형 메커니즘`.

## 12. information rent /ˌɪnfərˈmeɪʃən rɛnt/
**Part of speech:** noun
**Core meaning (English):** extra payoff left to an informed participant so that the participant will reveal or act on private information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** payoff thêm để participant có information chịu reveal hoặc act theo private information.
**Grammar & collocations:** `information-rent extraction` — extraction; `leave information rent` — để lại.
**Examples:** `The buyer paid information rent to induce the supplier to reveal a low production cost.` → Buyer trả rent information để supplier reveal production cost thấp.
**Liên kết tiếng Hàn:** `정보 지대`.

## 13. maximin strategy /ˈmæksəˌmɪn ˈstrætədʒi/
**Part of speech:** noun
**Core meaning (English):** a strategy that chooses the action with the highest payoff among the worst outcomes it could face.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn action có payoff cao nhất trong các outcome tệ nhất có thể gặp.
**Grammar & collocations:** `maximin-strategy rule` — rule; `maximize the minimum payoff` — tối đa hóa.
**Examples:** `The regulator used a maximin strategy to protect consumers under uncertain supplier costs.` → Regulator dùng strategy maximin để bảo vệ consumer dưới cost supplier bất định.
**Liên kết tiếng Hàn:** `최소극대 전략`.

## 14. minimax regret /ˈmɪnəˌmæks rɪˈɡrɛt/
**Part of speech:** noun
**Core meaning (English):** a decision rule that chooses the action with the smallest possible maximum regret.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule chọn action có maximum regret khả dĩ nhỏ nhất.
**Grammar & collocations:** `minimax-regret criterion` — criterion; `apply minimax regret` — áp dụng.
**Examples:** `Minimax regret favored a flexible contract because no single forecast was reliable.` → Minimax regret favor contract flexible vì không forecast nào reliable.
**Liên kết tiếng Hàn:** `최소최대 후회`.

## 15. ambiguity set /ˌæmbəˈɡjuəti sɛt/
**Part of speech:** noun
**Core meaning (English):** a collection of probability distributions considered plausible when the decision-maker does not trust one precise model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập distribution probability plausible khi decision-maker không tin một model precise duy nhất.
**Grammar & collocations:** `ambiguity-set restriction` — restriction; `specify an ambiguity set` — đặc tả.
**Examples:** `The ambiguity set included several demand distributions consistent with the limited data.` → Set ambiguity gồm nhiều distribution demand phù hợp data hạn chế.
**Liên kết tiếng Hàn:** `모호성 집합`.

## 16. distributional uncertainty /ˌdɪstrəˈbjuːʃənəl ʌnˈsɝtənti/
**Part of speech:** noun
**Core meaning (English):** uncertainty about which probability distribution correctly describes future states or private information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bất định về distribution probability nào mô tả đúng future state hoặc private information.
**Grammar & collocations:** `distributional-uncertainty model` — model; `manage distributional uncertainty` — quản lý.
**Examples:** `Distributional uncertainty made a narrow prior look less defensible than a range of models.` → Uncertainty distribution khiến prior hẹp kém defend hơn range model.
**Liên kết tiếng Hàn:** `분포 불확실성`.

## 17. ex ante efficiency /ˌɛks ˈænti ɪˈfɪʃənsi/
**Part of speech:** noun
**Core meaning (English):** efficiency evaluated before private information is realized, using expected welfare across possible states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** efficiency đánh giá trước khi private information realized, dựa expected welfare qua state khả dĩ.
**Grammar & collocations:** `ex-ante-efficiency criterion` — criterion; `compare expected welfare` — so sánh.
**Examples:** `The lottery satisfied ex ante efficiency even though one realized allocation later looked unequal.` → Lottery thỏa efficiency ex ante dù allocation realized sau đó trông bất bình đẳng.
**Liên kết tiếng Hàn:** `사전 효율성`.

## 18. interim efficiency /ˈɪntərəm ɪˈfɪʃənsi/
**Part of speech:** noun
**Core meaning (English):** efficiency evaluated after a participant receives private information but before other uncertainty is resolved.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** efficiency đánh giá sau private information của participant nhưng trước uncertainty khác được giải quyết.
**Grammar & collocations:** `interim-efficiency condition` — condition; `evaluate interim welfare` — đánh giá.
**Examples:** `Interim efficiency required the mechanism to use each supplier's private cost information responsibly.` → Efficiency interim yêu cầu mechanism dùng cost private của supplier có trách nhiệm.
**Liên kết tiếng Hàn:** `중간 효율성`.

## 19. ex post efficiency /ˌɛks ˈpoʊst ɪˈfɪʃənsi/
**Part of speech:** noun
**Core meaning (English):** efficiency evaluated after all relevant private information and uncertainty have been realized.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** efficiency đánh giá sau mọi private information và uncertainty liên quan đã realized.
**Grammar & collocations:** `ex-post-efficiency benchmark` — benchmark; `achieve ex post efficiency` — đạt.
**Examples:** `The final assignment achieved ex post efficiency after every capacity constraint became known.` → Assignment cuối đạt efficiency ex post sau khi mọi capacity constraint được biết.
**Liên kết tiếng Hàn:** `사후 효율성`.

## 20. prior independence /ˈpraɪər ˌɪndɪˈpɛndəns/
**Part of speech:** noun
**Core meaning (English):** the property of a mechanism's performance not depending on a correctly specified prior distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** performance mechanism không phụ thuộc prior distribution được đặc tả đúng.
**Grammar & collocations:** `prior-independence property` — property; `preserve prior independence` — giữ.
**Examples:** `Prior independence made the rule easier to deploy in a new market with little historical data.` → Independence prior khiến rule dễ triển khai ở market mới ít data lịch sử.
**Liên kết tiếng Hàn:** `사전확률 독립성`.

## Review in context

A **robust mechanism** may be a **prior-independent mechanism** or a **detail-free mechanism**, while **Bayesian incentive compatibility** and **dominant-strategy incentive compatibility** impose different truth-telling requirements. **Approximate strategy-proofness** can provide a bounded guarantee. Designers compare a **worst-case guarantee**, an **approximation ratio**, and a **competitive ratio**, then use **regret minimization** or an **adaptive mechanism**. **Information rent** may be necessary. Under uncertainty, a **maximin strategy**, **minimax regret**, an **ambiguity set**, and **distributional uncertainty** shape decisions. Finally, **ex ante efficiency**, **interim efficiency**, **ex post efficiency**, and **prior independence** distinguish when a mechanism performs well.

**Bản dịch tiếng Việt:**

Một **robust mechanism** có thể là **prior-independent mechanism** hoặc **detail-free mechanism**, còn **Bayesian incentive compatibility** và **dominant-strategy incentive compatibility** đặt yêu cầu truthful khác nhau. **Approximate strategy-proofness** có thể cho guarantee bị giới hạn. Designer so sánh **worst-case guarantee**, **approximation ratio** và **competitive ratio**, rồi dùng **regret minimization** hoặc **adaptive mechanism**. **Information rent** có thể cần thiết. Dưới uncertainty, **maximin strategy**, **minimax regret**, **ambiguity set** và **distributional uncertainty** định hình decision. Cuối cùng, **ex ante efficiency**, **interim efficiency**, **ex post efficiency** và **prior independence** phân biệt lúc mechanism hoạt động tốt.
