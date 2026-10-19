# C1 Vocabulary 26 — Asset pricing and portfolio econometrics

This lesson follows how empirical finance links portfolio returns to systematic risk, no-arbitrage restrictions, and cross-sectional pricing tests.

Flow: **factor model → beta exposure → alpha estimate → stochastic discount factor → Euler equation → idiosyncratic risk → systematic risk → arbitrage pricing → no-arbitrage condition → cumulative abnormal return → Fama-MacBeth regression → cross-sectional pricing → portfolio sorting → factor mimicking portfolio → long-short portfolio → Sharpe ratio → appraisal ratio → pricing kernel → security market line → zero-beta portfolio**.

## 1. factor model /ˈfæktər ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that explains asset returns with exposures to a small set of common economic or financial drivers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model giải thích return bằng exposure với một nhóm driver kinh tế/tài chính chung.
**Grammar & collocations:** `factor-model specification` — specification; `estimate common risk exposures` — ước lượng.
**Examples:** `The factor model linked the fund's returns to market, size, and value movements.` → Factor model nối return của fund với biến động market, size và value.
**Liên kết tiếng Hàn:** `요인 모형`.

## 2. beta exposure /ˈbeɪtə ɪkˈspoʊʒər/
**Part of speech:** noun
**Core meaning (English):** the sensitivity of an asset or portfolio return to a specified common factor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ nhạy return của asset/portfolio với một factor chung.
**Grammar & collocations:** `beta-exposure estimate` — estimate; `load on a market factor` — có exposure.
**Examples:** `The fund reduced its beta exposure before the expected slowdown in the broad market.` → Fund giảm beta exposure trước khi thị trường chung giảm tốc.
**Liên kết tiếng Hàn:** `베타 익스포저`.

## 3. alpha estimate /ˈælfə ˈɛstəˌmeɪt/
**Part of speech:** noun
**Core meaning (English):** an estimated return unexplained by the risk factors included in a pricing model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần return ước lượng không được giải thích bởi factor risk trong model.
**Grammar & collocations:** `alpha-estimate uncertainty` — uncertainty; `test abnormal performance` — kiểm tra.
**Examples:** `The positive alpha estimate disappeared after the analysis added a liquidity factor.` → Alpha dương biến mất sau khi thêm liquidity factor.
**Liên kết tiếng Hàn:** `알파 추정치`.

## 4. stochastic discount factor /stəˈkæstɪk ˈdɪskaʊnt ˌfæktər/
**Part of speech:** noun
**Core meaning (English):** a random pricing weight that converts future payoffs into present values while capturing investors' intertemporal preferences and risk.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trọng số pricing ngẫu nhiên đổi payoff tương lai thành present value và nắm preference/risk của investor.
**Grammar & collocations:** `stochastic-discount-factor restriction` — restriction; `price a future payoff` — định giá.
**Examples:** `The stochastic discount factor assigned lower present value to payoffs that arrived in bad aggregate states.` → Factor gán present value thấp hơn cho payoff đến trong state tổng thể xấu.
**Liên kết tiếng Hàn:** `확률적 할인 요인`.

## 5. Euler equation /ˈɔɪlər ɪˈkweɪʒən/
**Part of speech:** noun
**Core meaning (English):** an equilibrium condition stating that an investor's optimal intertemporal choice makes a weighted expected return satisfy a pricing restriction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện cân bằng nói lựa chọn tối ưu theo thời gian tạo expected return có trọng số thỏa restriction pricing.
**Grammar & collocations:** `Euler-equation moment` — moment; `derive a consumption-based restriction` — suy ra.
**Examples:** `The Euler equation implied that assets paying in recessions should command lower expected returns.` → Euler equation ngụ ý asset trả payoff lúc recession có expected return thấp hơn.
**Liên kết tiếng Hàn:** `오일러 방정식`.

## 6. idiosyncratic risk /ˌɪdiəˌsɪŋkrətɪk rɪsk/
**Part of speech:** noun
**Core meaning (English):** asset-specific uncertainty that can largely be diversified away because it is not shared across the market.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** uncertainty riêng của asset, thường đa dạng hóa được vì không chung với thị trường.
**Grammar & collocations:** `idiosyncratic-risk component` — component; `diversify firm-specific shocks` — đa dạng hóa.
**Examples:** `A broad portfolio reduced idiosyncratic risk from a single firm's product failure.` → Portfolio rộng giảm risk riêng do một firm thất bại sản phẩm.
**Liên kết tiếng Hàn:** `고유 위험`.

## 7. systematic risk /ˌsɪstəˈmætɪk rɪsk/
**Part of speech:** noun
**Core meaning (English):** risk shared across many assets that cannot be eliminated simply by holding more securities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** risk chung nhiều asset, không loại được chỉ bằng giữ thêm nhiều security.
**Grammar & collocations:** `systematic-risk premium` — premium; `price economy-wide shocks` — định giá.
**Examples:** `Systematic risk rose when inflation and interest-rate uncertainty moved together.` → Risk hệ thống tăng khi uncertainty lạm phát và lãi suất cùng đổi.
**Liên kết tiếng Hàn:** `체계적 위험`.

## 8. arbitrage pricing /ˈɑrbəˌtrɑʒ ˈpraɪsɪŋ/
**Part of speech:** noun
**Core meaning (English):** pricing based on the idea that portfolios with the same risk exposures cannot have persistently different expected returns without creating a profitable trade.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pricing dựa trên ý tưởng portfolio cùng exposure risk không thể có expected return khác bền vững nếu không tạo trade có lời.
**Grammar & collocations:** `arbitrage-pricing restriction` — restriction; `rule out a free-profit strategy` — loại trừ.
**Examples:** `Arbitrage pricing treated the difference between two factor-matched portfolios as temporary.` → Arbitrage pricing xem chênh giữa hai portfolio cùng factor là tạm thời.
**Liên kết tiếng Hàn:** `차익 거래 가격 결정`.

## 9. no-arbitrage condition /noʊ ˈɑrbəˌtrɑʒ kənˈdɪʃən/
**Part of speech:** noun
**Core meaning (English):** a restriction requiring that no zero-net-investment strategy can deliver a guaranteed positive payoff.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** restriction không strategy đầu tư ròng bằng zero nào tạo payoff dương chắc chắn.
**Grammar & collocations:** `no-arbitrage-condition test` — test; `rule out a free lunch` — loại trừ.
**Examples:** `The no-arbitrage condition forced equivalent claims to have the same price.` → Điều kiện no-arbitrage buộc claim tương đương có cùng giá.
**Liên kết tiếng Hàn:** `무차익 조건`.

## 10. cumulative abnormal return /ˈkjuːmjələtɪv æbˈnɔrməl rɪˈtɝn/
**Part of speech:** noun
**Core meaning (English):** the sum of an asset's abnormal returns over an event window.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tổng abnormal return của asset qua khoảng thời gian quanh event.
**Grammar & collocations:** `cumulative-abnormal-return window` — window; `aggregate event-day surprises` — cộng dồn.
**Examples:** `The stock's cumulative abnormal return was negative over the week after the announcement.` → Return bất thường tích lũy âm trong tuần sau announcement.
**Liên kết tiếng Hàn:** `누적 비정상 수익률`.

## 11. Fama-MacBeth regression /ˈfɑmə məˈkɛθ rɪˈɡrɛʃən/
**Part of speech:** noun
**Core meaning (English):** a two-pass procedure that estimates factor exposures over time and then tests average cross-sectional pricing relations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** procedure hai bước: estimate exposure theo thời gian rồi test quan hệ pricing cross-sectional trung bình.
**Grammar & collocations:** `Fama-MacBeth-regression standard error` — standard error; `estimate a factor risk premium` — ước lượng.
**Examples:** `The Fama-MacBeth regression estimated whether beta exposure predicted average returns across firms.` → Regression kiểm tra beta có dự đoán return trung bình giữa firm không.
**Liên kết tiếng Hàn:** `Fama-MacBeth 회귀`.

## 12. cross-sectional pricing /ˌkrɔs ˈsɛkʃənəl ˈpraɪsɪŋ/
**Part of speech:** noun
**Core meaning (English):** analysis of how differences in asset characteristics or risk exposures explain differences in expected returns across assets at a given time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích chênh return kỳ vọng giữa asset tại cùng thời điểm theo characteristic/exposure khác nhau.
**Grammar & collocations:** `cross-sectional-pricing test` — test; `compare assets at one date` — so sánh.
**Examples:** `Cross-sectional pricing linked higher carbon exposure to a lower average return.` → Pricing cross-sectional nối carbon exposure cao với return trung bình thấp hơn.
**Liên kết tiếng Hàn:** `횡단면 가격 결정`.

## 13. portfolio sorting /pɔrtˈfoʊlioʊ ˈsɔrtɪŋ/
**Part of speech:** noun
**Core meaning (English):** grouping assets into portfolios according to a measured characteristic or estimated risk exposure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm asset thành portfolio theo characteristic hoặc exposure risk ước lượng.
**Grammar & collocations:** `portfolio-sorting procedure` — procedure; `form decile portfolios` — tạo.
**Examples:** `Portfolio sorting placed firms into deciles by their investment intensity.` → Sorting xếp firm vào decile theo investment intensity.
**Liên kết tiếng Hàn:** `포트폴리오 정렬`.

## 14. factor mimicking portfolio /ˈfæktər ˈmɪmɪkɪŋ pɔrtˈfoʊlioʊ/
**Part of speech:** noun
**Core meaning (English):** a traded portfolio constructed to reproduce the return pattern of a specified risk factor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** portfolio giao dịch được tạo để tái tạo pattern return của factor risk.
**Grammar & collocations:** `factor-mimicking-portfolio return` — return; `replicate factor exposure` — tái tạo.
**Examples:** `The factor mimicking portfolio bought low-price-to-book stocks and sold high-price-to-book stocks.` → Portfolio mua stock price-to-book thấp và bán stock cao.
**Liên kết tiếng Hàn:** `요인 모방 포트폴리오`.

## 15. long-short portfolio /ˈlɔŋ ʃɔrt pɔrtˈfoʊlioʊ/
**Part of speech:** noun
**Core meaning (English):** a portfolio that buys one group of assets and sells another group short to isolate a relative return.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** portfolio mua một nhóm asset và short nhóm khác để tách return tương đối.
**Grammar & collocations:** `long-short-portfolio spread` — spread; `go long and short` — mua và bán khống.
**Examples:** `The long-short portfolio earned a positive spread when quality stocks outperformed distressed stocks.` → Portfolio long-short có spread dương khi stock quality vượt stock distressed.
**Liên kết tiếng Hàn:** `롱숏 포트폴리오`.

## 16. Sharpe ratio /ˈʃɑrp ˌreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the average excess return of a portfolio divided by the standard deviation of its return.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** excess return trung bình chia cho standard deviation của return.
**Grammar & collocations:** `Sharpe-ratio comparison` — comparison; `measure return per unit of volatility` — đo.
**Examples:** `The diversified strategy had a higher Sharpe ratio despite a lower raw return.` → Strategy đa dạng hóa có Sharpe ratio cao hơn dù raw return thấp hơn.
**Liên kết tiếng Hàn:** `샤프 비율`.

## 17. appraisal ratio /əˈpreɪzəl ˌreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** an alpha estimate divided by the standard deviation of the portfolio's residual or idiosyncratic return.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** alpha estimate chia cho độ lệch chuẩn của residual/idiosyncratic return.
**Grammar & collocations:** `appraisal-ratio estimate` — estimate; `evaluate manager-specific performance` — đánh giá.
**Examples:** `The fund's appraisal ratio fell when its residual volatility increased.` → Appraisal ratio giảm khi residual volatility tăng.
**Liên kết tiếng Hàn:** `평가 비율`.

## 18. pricing kernel /ˈpraɪsɪŋ ˈkɝnəl/
**Part of speech:** noun
**Core meaning (English):** a function or stochastic weight that maps future payoffs into current prices under a pricing model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm/trọng số ngẫu nhiên biến payoff tương lai thành giá hiện tại.
**Grammar & collocations:** `pricing-kernel estimate` — estimate; `discount state-contingent payoffs` — chiết khấu.
**Examples:** `The pricing kernel assigned high value to payoffs received when household consumption was low.` → Pricing kernel gán value cao cho payoff khi consumption hộ thấp.
**Liên kết tiếng Hàn:** `가격 커널`.

## 19. security market line /səˈkjʊrəti ˈmɑrkət laɪn/
**Part of speech:** noun
**Core meaning (English):** the relationship between an asset's expected excess return and its market beta under a one-factor equilibrium model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ giữa expected excess return và market beta theo equilibrium một factor.
**Grammar & collocations:** `security-market-line slope` — slope; `plot expected return against beta` — vẽ.
**Examples:** `The security market line predicted a higher expected return for assets with greater market beta.` → Security market line dự đoán asset beta cao có expected return cao hơn.
**Liên kết tiếng Hàn:** `증권시장선`.

## 20. zero-beta portfolio /ˈzɪroʊ ˈbeɪtə pɔrtˈfoʊlioʊ/
**Part of speech:** noun
**Core meaning (English):** a portfolio with zero covariance, or effectively zero beta, relative to a specified benchmark portfolio.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** portfolio có covariance/beta bằng zero với benchmark chỉ định.
**Grammar & collocations:** `zero-beta-portfolio return` — return; `construct a benchmark-neutral portfolio` — tạo.
**Examples:** `The zero-beta portfolio provided a benchmark for testing whether market risk alone explained expected returns.` → Portfolio zero-beta làm benchmark để test market risk có đủ giải thích return kỳ vọng không.
**Liên kết tiếng Hàn:** `제로 베타 포트폴리오`.

## Review in context

A **factor model** describes an asset's **beta exposure** and leaves an **alpha estimate** after common risks are removed. A **stochastic discount factor** and an **Euler equation** express pricing restrictions; **idiosyncratic risk** can be diversified, while **systematic risk** motivates **arbitrage pricing** and the **no-arbitrage condition**. Around an announcement, analysts may sum a **cumulative abnormal return** and use a **Fama-MacBeth regression** for **cross-sectional pricing**. **Portfolio sorting**, a **factor mimicking portfolio**, and a **long-short portfolio** reveal spreads; the **Sharpe ratio** and **appraisal ratio** summarize performance. A **pricing kernel**, **security market line**, and **zero-beta portfolio** provide additional equilibrium perspectives.

**Bản dịch tiếng Việt:** **Factor model** mô tả **beta exposure** và để lại **alpha estimate** sau khi loại risk chung. **Stochastic discount factor** và **Euler equation** biểu diễn restriction pricing; **idiosyncratic risk** có thể đa dạng hóa, còn **systematic risk** thúc đẩy **arbitrage pricing** và **no-arbitrage condition**. Quanh announcement, analyst cộng **cumulative abnormal return** và dùng **Fama-MacBeth regression** cho **cross-sectional pricing**. **Portfolio sorting**, **factor mimicking portfolio** và **long-short portfolio** cho thấy spread; **Sharpe ratio** và **appraisal ratio** tóm tắt performance. **Pricing kernel**, **security market line** và **zero-beta portfolio** đưa ra các góc nhìn equilibrium khác.
