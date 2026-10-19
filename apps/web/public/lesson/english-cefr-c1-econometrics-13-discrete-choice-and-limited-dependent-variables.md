# C1 Vocabulary 13 — Discrete choice and limited dependent variables

This lesson follows how econometric models represent choices, censored outcomes, and selection when the dependent variable is not an unrestricted continuous measurement.

Flow: **limited dependent variable → discrete-choice model → binary response model → latent utility → random utility model → choice probability → multinomial logit → ordered logit → nested logit → conditional logit → mixed logit → random coefficient → marginal effect → average marginal effect → odds ratio → incidence-rate ratio → censored regression → truncated regression → sample selection model → inverse Mills ratio**.

## 1. limited dependent variable /ˈlɪmətəd dɪˈpɛndənt ˈvɛriəbəl/
**Part of speech:** noun
**Core meaning (English):** an outcome variable whose values are restricted, grouped, censored, truncated, or otherwise unable to vary freely over the real line.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến kết quả bị giới hạn; hãy hình dung thước đo bị chặn, gom nhóm hoặc chỉ quan sát được một phần.
**Grammar & collocations:** `limited-dependent-variable model` — model; `observe a restricted outcome` — quan sát.
**Examples:** `A limited dependent variable requires a model that respects the way the outcome is recorded.` → Biến phụ thuộc bị giới hạn cần model tôn trọng cách outcome được ghi nhận.
**Liên kết tiếng Hàn:** `제한 종속변수`.

## 2. discrete-choice model /dɪˈskriːt tʃɔɪs ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model for an outcome in which a person or unit selects one option from a finite set of alternatives.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model cho lựa chọn rời rạc, nơi người hay đơn vị chọn một phương án trong tập hữu hạn.
**Grammar & collocations:** `discrete-choice specification` — specification; `model an individual choice` — mô hình hóa.
**Examples:** `The discrete-choice model treated the traveler's destination as the outcome.` → Model lựa chọn rời rạc xem điểm đến của khách là outcome.
**Liên kết tiếng Hàn:** `이산 선택 모형`.

## 3. binary response model /ˈbaɪnəri rɪˈspɑns ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model for an outcome that has two possible response categories, often coded as zero and one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model cho response chỉ có hai nhóm, thường mã hóa thành 0 và 1.
**Grammar & collocations:** `binary-response outcome` — outcome; `estimate a binary response` — ước lượng.
**Examples:** `The binary response model estimated whether a household adopted the new appliance.` → Model ước lượng hộ gia đình có dùng thiết bị mới hay không.
**Liên kết tiếng Hàn:** `이항 반응 모형`.

## 4. latent utility /ˈleɪtənt juːˈtɪləti/
**Part of speech:** noun
**Core meaning (English):** an unobserved numerical value representing how attractive an option is to a decision-maker.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức hấp dẫn ẩn của một lựa chọn; ta không thấy utility trực tiếp nhưng thấy lựa chọn cuối cùng.
**Grammar & collocations:** `latent-utility difference` — difference; `rank alternatives by utility` — xếp hạng.
**Examples:** `The consumer chose the product with the highest latent utility, even though utility itself was not observed.` → Người tiêu dùng chọn sản phẩm có utility ẩn cao nhất dù utility không được quan sát trực tiếp.
**Liên kết tiếng Hàn:** `잠재 효용`.

## 5. random utility model /ˈrændəm juːˈtɪləti ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a choice model that separates an option's systematic attributes from an unobserved random component.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model tách phần thuộc tính có hệ thống khỏi phần ngẫu nhiên không quan sát được của utility.
**Grammar & collocations:** `random-utility framework` — framework; `compare alternative-specific utility` — so sánh.
**Examples:** `The random utility model allowed price and travel time to shape the probability of choosing a route.` → Model cho giá và thời gian đi ảnh hưởng xác suất chọn tuyến.
**Liên kết tiếng Hàn:** `확률 효용 모형`.

## 6. choice probability /tʃɔɪs ˌprɑbəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the model-implied probability that a decision-maker selects a particular alternative.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác suất do model suy ra rằng người ra quyết định chọn một phương án cụ thể.
**Grammar & collocations:** `choice-probability prediction` — prediction; `calculate a predicted probability` — tính.
**Examples:** `A lower fare increased the choice probability of the bus relative to the train.` → Giá vé thấp hơn làm tăng xác suất chọn xe buýt so với tàu.
**Liên kết tiếng Hàn:** `선택 확률`.

## 7. multinomial logit /ˌmʌltɪˈnoʊmiəl ˈlɔɡɪt/
**Part of speech:** noun
**Core meaning (English):** a choice model for several unordered alternatives whose probabilities follow a logit form.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model logit cho nhiều phương án không có thứ tự tự nhiên.
**Grammar & collocations:** `multinomial-logit specification` — specification; `compare unordered categories` — so sánh.
**Examples:** `The multinomial logit assigned probabilities to walking, driving, cycling, and taking the bus.` → Multinomial logit gán xác suất cho đi bộ, lái xe, đạp xe và đi buýt.
**Liên kết tiếng Hàn:** `다항 로짓`.

## 8. ordered logit /ˈɔrdərd ˈlɔɡɪt/
**Part of speech:** noun
**Core meaning (English):** a model for categories that have a meaningful order, such as low, medium, and high satisfaction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model logit cho các nhóm có thứ tự rõ, nhưng khoảng cách giữa nhóm không nhất thiết bằng nhau.
**Grammar & collocations:** `ordered-logit threshold` — threshold; `model ranked responses` — mô hình hóa.
**Examples:** `An ordered logit linked education, income, and the probability of reporting higher satisfaction.` → Ordered logit liên kết education và income với xác suất báo mức hài lòng cao hơn.
**Liên kết tiếng Hàn:** `순서형 로짓`.

## 9. nested logit /ˈnɛstəd ˈlɔɡɪt/
**Part of speech:** noun
**Core meaning (English):** a choice model that groups related alternatives into nests so substitution patterns can differ across groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model xếp lựa chọn liên quan vào các “nhánh” để hành vi thay thế giữa nhóm và trong nhóm khác nhau.
**Grammar & collocations:** `nested-logit structure` — structure; `specify a transport nest` — xác định.
**Examples:** `The nested logit put rail and bus in one public-transit nest and private cars in another branch.` → Nested logit xếp tàu và buýt vào nhánh giao thông công cộng.
**Liên kết tiếng Hàn:** `중첩 로짓`.

## 10. conditional logit /kənˈdɪʃənəl ˈlɔɡɪt/
**Part of speech:** noun
**Core meaning (English):** a logit choice model in which observed characteristics of the alternatives help determine the probability of selection.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** logit dùng đặc điểm quan sát được của từng phương án để giải thích xác suất được chọn.
**Grammar & collocations:** `conditional-logit likelihood` — likelihood; `include alternative-specific attributes` — đưa vào.
**Examples:** `The conditional logit used each airline's fare and departure time rather than only passenger characteristics.` → Conditional logit dùng giá và giờ bay của từng hãng.
**Liên kết tiếng Hàn:** `조건부 로짓`.

## 11. mixed logit /mɪkst ˈlɔɡɪt/
**Part of speech:** noun
**Core meaning (English):** a flexible choice model that allows preference parameters to vary across decision-makers or alternatives.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** logit linh hoạt cho phép sở thích khác nhau giữa người ra quyết định hoặc phương án.
**Grammar & collocations:** `mixed-logit distribution` — distribution; `allow random preferences` — cho phép.
**Examples:** `The mixed logit captured commuters who valued speed differently from commuters who valued low cost.` → Mixed logit nắm sự khác nhau giữa người coi trọng tốc độ và chi phí.
**Liên kết tiếng Hàn:** `혼합 로짓`.

## 12. random coefficient /ˈrændəm ˌkoʊəˈfɪʃənt/
**Part of speech:** noun
**Core meaning (English):** a model parameter whose value is allowed to vary across units instead of being identical for everyone.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ số được phép thay đổi giữa các đơn vị, không ép mọi người có cùng preference.
**Grammar & collocations:** `random-coefficient distribution` — distribution; `estimate preference heterogeneity` — ước lượng.
**Examples:** `A random coefficient on travel time represented different sensitivities among commuters.` → Hệ số ngẫu nhiên của travel time thể hiện độ nhạy khác nhau.
**Liên kết tiếng Hàn:** `확률 계수`.

## 13. marginal effect /ˈmɑrdʒənəl ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the change in a predicted outcome associated with a small change in one explanatory variable, holding the model's other inputs as specified.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức outcome dự đoán thay đổi khi một biến giải thích đổi một lượng nhỏ.
**Grammar & collocations:** `marginal-effect estimate` — estimate; `evaluate a change at the mean` — đánh giá.
**Examples:** `The marginal effect of a ten-minute delay was largest for travelers with tight connections.` → Marginal effect của trễ mười phút lớn nhất với người nối chuyến gấp.
**Liên kết tiếng Hàn:** `한계 효과`.

## 14. average marginal effect /ˈævərɪdʒ ˈmɑrdʒənəl ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the average of unit-specific marginal effects across the observed population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trung bình các marginal effect riêng của từng đơn vị trong population quan sát.
**Grammar & collocations:** `average-marginal-effect calculation` — calculation; `average effects over respondents` — lấy trung bình.
**Examples:** `The average marginal effect showed how a fare increase changed bus choice across all respondents.` → Average marginal effect cho thấy tăng giá vé đổi lựa chọn buýt trên toàn respondent.
**Liên kết tiếng Hàn:** `평균 한계 효과`.

## 15. odds ratio /ˈɑdz ˌreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the ratio of the odds of an outcome under one condition to the odds under a reference condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỉ số odds giữa hai điều kiện; odds là xác suất xảy ra chia cho xác suất không xảy ra.
**Grammar & collocations:** `odds-ratio interpretation` — interpretation; `report an adjusted odds ratio` — báo cáo.
**Examples:** `An odds ratio above one indicated greater odds of choosing the premium plan after controlling for income.` → Odds ratio trên một cho thấy odds chọn gói premium cao hơn sau khi kiểm soát income.
**Liên kết tiếng Hàn:** `승산비`.

## 16. incidence-rate ratio /ˈɪnsədəns reɪt ˌreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the ratio of two event rates when outcomes are counted over exposure time or another defined period at risk.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỉ số giữa hai event rate, có tính đến thời gian hoặc khoảng phơi nhiễm.
**Grammar & collocations:** `incidence-rate-ratio estimate` — estimate; `compare event rates` — so sánh.
**Examples:** `The incidence-rate ratio suggested that the intervention group experienced fewer service failures per month.` → Tỉ số incidence cho thấy nhóm intervention ít lỗi dịch vụ hơn mỗi tháng.
**Liên kết tiếng Hàn:** `발생률비`.

## 17. censored regression /ˈsɛnsərd rɪˈɡrɛʃən/
**Part of speech:** noun
**Core meaning (English):** a regression model for an outcome whose value is only known up to a lower or upper limit for some observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hồi quy khi một số outcome chỉ biết bị chặn ở dưới hoặc ở trên, không biết giá trị thật beyond the limit.
**Grammar & collocations:** `censored-regression likelihood` — likelihood; `account for an upper limit` — tính đến.
**Examples:** `Censored regression treated reported income at the survey ceiling as a lower bound rather than an exact value.` → Censored regression xem income chạm trần khảo sát là cận dưới của giá trị thật.
**Liên kết tiếng Hàn:** `중도 절단 회귀`.

## 18. truncated regression /ˈtrʌŋkeɪtəd rɪˈɡrɛʃən/
**Part of speech:** noun
**Core meaning (English):** a regression model for a sample in which observations outside a cutoff are absent rather than merely recorded at the cutoff.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hồi quy khi dữ liệu ngoài ngưỡng bị loại khỏi sample hoàn toàn, không chỉ bị ghi chặn.
**Grammar & collocations:** `truncated-regression sample` — sample; `condition on selection into the data` — điều kiện hóa.
**Examples:** `Truncated regression was appropriate because households below the spending threshold never entered the dataset.` → Truncated regression phù hợp vì hộ dưới ngưỡng chi tiêu không hề vào dataset.
**Liên kết tiếng Hàn:** `절단 회귀`.

## 19. sample selection model /ˈsæmpəl səˈlɛkʃən ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that accounts for a nonrandom process determining which units have an outcome observed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model tính đến quá trình không ngẫu nhiên quyết định đơn vị nào có outcome được quan sát.
**Grammar & collocations:** `sample-selection correction` — correction; `model observation status` — mô hình hóa.
**Examples:** `The sample selection model separated the decision to work from the wage observed among workers.` → Model tách quyết định đi làm khỏi wage chỉ quan sát ở người đang làm.
**Liên kết tiếng Hàn:** `표본 선택 모형`.

## 20. inverse Mills ratio /ˈɪnvɝs mɪlz ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** a transformation of the selection equation's predicted index used to represent the expected selection-related component in a second-stage outcome equation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phép biến đổi từ index dự đoán selection, đưa phần liên quan đến selection vào phương trình outcome giai đoạn hai.
**Grammar & collocations:** `inverse-Mills-ratio term` — term; `include a selection correction` — đưa correction vào.
**Examples:** `The wage equation included the inverse Mills ratio to adjust for who chose to enter employment.` → Phương trình wage thêm inverse Mills ratio để điều chỉnh ai chọn tham gia việc làm.
**Liên kết tiếng Hàn:** `역 밀스 비율`.

## Review in context

A **limited dependent variable** often calls for a **discrete-choice model** rather than ordinary least squares. A **binary response model** can describe two outcomes by assuming an unobserved **latent utility** within a **random utility model**; the resulting **choice probability** can be estimated with a **multinomial logit**, **ordered logit**, **nested logit**, or **conditional logit**. A **mixed logit** and a **random coefficient** allow preferences to vary. Analysts interpret a **marginal effect**, average it as an **average marginal effect**, and summarize multiplicative changes with an **odds ratio** or an **incidence-rate ratio**. For continuous outcomes, **censored regression** handles values recorded at a limit, whereas **truncated regression** handles observations missing beyond a cutoff. A **sample selection model** can add an **inverse Mills ratio** when outcome observation depends on a prior decision.

**Bản dịch tiếng Việt:** **Limited dependent variable** thường cần **discrete-choice model** thay vì bình phương tối thiểu thông thường. **Binary response model** mô tả hai outcome bằng **latent utility** không quan sát trong **random utility model**; từ đó có **choice probability** được ước lượng bằng **multinomial logit**, **ordered logit**, **nested logit** hoặc **conditional logit**. **Mixed logit** và **random coefficient** cho phép sở thích thay đổi. Analyst diễn giải **marginal effect**, lấy trung bình thành **average marginal effect**, và tóm tắt thay đổi nhân bằng **odds ratio** hoặc **incidence-rate ratio**. Với outcome liên tục, **censored regression** xử lý giá trị ghi tại một giới hạn, còn **truncated regression** xử lý observation biến mất ngoài ngưỡng. **Sample selection model** có thể thêm **inverse Mills ratio** khi việc quan sát outcome phụ thuộc quyết định trước đó.
