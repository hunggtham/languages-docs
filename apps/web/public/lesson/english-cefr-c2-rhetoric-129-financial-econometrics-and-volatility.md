# C2 Vocabulary 129 — Financial econometrics and volatility

This lesson follows how econometricians model changing risk, dependence, shocks, and expected returns in financial time series.

Flow: **GARCH → stochastic volatility → volatility surface → leverage effect → jump diffusion → heavy-tailed distribution → copula model → tail dependence → cointegration → unit root → state-space model → Kalman filter → regime switching → event study → abnormal return → factor loading → liquidity premium → variance risk premium → forecast error variance → structural break**.

## 1. GARCH /ɡɑrtʃ/
**Part of speech:** noun
**Core meaning (English):** a volatility model in which current conditional variance depends on past squared shocks and past variance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình GARCH; hình dung rủi ro hôm nay phản ứng với cú sốc và mức biến động của những ngày trước.
**Grammar & collocations:** `GARCH model` — mô hình GARCH; `GARCH volatility forecast` — dự báo biến động GARCH; `fit a GARCH model` — ước lượng mô hình GARCH.
**Examples:** `The GARCH model predicted clustered volatility after the announcement.` → Mô hình GARCH dự báo biến động kết cụm sau thông báo.
**Liên kết tiếng Hàn:** `GARCH 모형` (GARCH mohyeong) — mô hình GARCH.

## 2. stochastic volatility /stəˈkæstɪk ˌvɑləˈtɪləti/
**Part of speech:** noun
**Core meaning (English):** a model in which the unobserved volatility itself evolves as a random process over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến động ngẫu nhiên; hình dung mức rủi ro ẩn thay đổi theo một quá trình riêng chứ không chỉ theo lợi suất quan sát.
**Grammar & collocations:** `stochastic-volatility model` — mô hình biến động ngẫu nhiên; `latent stochastic volatility` — biến động ngẫu nhiên ẩn; `estimate volatility` — ước tính biến động.
**Examples:** `The stochastic-volatility model separated measurement noise from latent market risk.` → Mô hình biến động ngẫu nhiên tách nhiễu đo khỏi rủi ro thị trường ẩn.
**Liên kết tiếng Hàn:** `확률적 변동성` (hwakryuljeok byeondongseong) — biến động ngẫu nhiên.

## 3. volatility surface /ˌvɑləˈtɪləti ˈsɝfəs/
**Part of speech:** noun
**Core meaning (English):** a three-dimensional representation of implied volatility across strike prices and maturities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bề mặt biến động; hình dung địa hình rủi ro của quyền chọn theo giá thực hiện và thời hạn.
**Grammar & collocations:** `implied-volatility surface` — bề mặt biến động hàm ý; `volatility-surface interpolation` — nội suy bề mặt; `calibrate a surface` — hiệu chỉnh bề mặt.
**Examples:** `The volatility surface steepened for short-dated out-of-the-money puts.` → Bề mặt biến động dốc hơn với quyền chọn bán ngắn hạn ngoài tiền.
**Liên kết tiếng Hàn:** `변동성 표면` (byeondongseong pyomyeon) — bề mặt biến động.

## 4. leverage effect /ˈlɛvərɪdʒ ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the tendency for a fall in an asset's price or equity value to increase its future volatility.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiệu ứng đòn bẩy; hình dung giá giảm làm tỷ lệ nợ tương đối tăng và rủi ro biến động mạnh hơn.
**Grammar & collocations:** `negative leverage effect` — hiệu ứng đòn bẩy âm; `leverage-effect asymmetry` — bất đối xứng hiệu ứng; `model the effect` — mô hình hóa hiệu ứng.
**Examples:** `The leverage effect made downside returns more informative about future risk.` → Hiệu ứng đòn bẩy khiến lợi suất giảm cung cấp nhiều thông tin hơn về rủi ro tương lai.
**Liên kết tiếng Hàn:** `레버리지 효과` (rebeoriji hyogwa) — hiệu ứng đòn bẩy.

## 5. jump diffusion /ˈdʒʌmp dɪˈfjuːʒən/
**Part of speech:** noun
**Core meaning (English):** a price process combining continuous random movement with occasional discrete jumps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khuếch tán có bước nhảy; hình dung giá vừa dao động liên tục vừa thỉnh thoảng nhảy vọt do tin tức.
**Grammar & collocations:** `jump-diffusion model` — mô hình khuếch tán có bước nhảy; `jump intensity` — cường độ bước nhảy; `estimate jump risk` — ước tính rủi ro bước nhảy.
**Examples:** `Jump diffusion captured the abrupt repricing that a smooth model missed.` → Khuếch tán có bước nhảy nắm được việc định giá lại đột ngột mà mô hình trơn bỏ sót.
**Liên kết tiếng Hàn:** `점프 확산` (jeompeu hwaksan) — khuếch tán có bước nhảy.

## 6. heavy-tailed distribution /ˌhɛvi teɪld ˌdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** a probability distribution that assigns more mass to extreme observations than a normal distribution does.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân phối đuôi nặng; hình dung các biến cố cực đoan xuất hiện thường hơn giả định chuông chuẩn.
**Grammar & collocations:** `heavy-tailed return distribution` — phân phối lợi suất đuôi nặng; `heavy-tail behavior` — hành vi đuôi nặng; `fit a distribution` — khớp phân phối.
**Examples:** `A heavy-tailed distribution gave the stress test more realistic crash probabilities.` → Phân phối đuôi nặng cho kiểm định sức chịu đựng xác suất sụp đổ thực tế hơn.
**Liên kết tiếng Hàn:** `두꺼운 꼬리 분포` (dukkeoun kkor i bunpo) — phân phối đuôi nặng.

## 7. copula model /ˈkoʊpjələ ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that joins separate marginal distributions to represent the dependence structure among variables.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình copula; hình dung nối các phân phối riêng bằng một “khớp nối” mô tả chúng cùng biến động ra sao.
**Grammar & collocations:** `Gaussian copula model` — mô hình copula Gaussian; `copula dependence` — phụ thuộc copula; `calibrate a copula` — hiệu chỉnh copula.
**Examples:** `The copula model represented dependence between credit losses without forcing identical marginals.` → Mô hình copula biểu diễn phụ thuộc giữa các khoản lỗ tín dụng mà không ép các phân phối biên giống nhau.
**Liên kết tiếng Hàn:** `코퓰라 모형` (kopyulla mohyeong) — mô hình copula.

## 8. tail dependence /teɪl dɪˈpɛndəns/
**Part of speech:** noun
**Core meaning (English):** the tendency of variables to experience extreme outcomes together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phụ thuộc đuôi; hình dung hai tài sản cùng rơi vào vùng cực đoan dù quan hệ bình thường có vẻ yếu.
**Grammar & collocations:** `upper-tail dependence` — phụ thuộc đuôi trên; `lower-tail dependence` — phụ thuộc đuôi dưới; `estimate tail dependence` — ước tính phụ thuộc đuôi.
**Examples:** `Lower-tail dependence rose when banks faced the same funding shock.` → Phụ thuộc đuôi dưới tăng khi các ngân hàng cùng đối mặt cú sốc tài trợ.
**Liên kết tiếng Hàn:** `꼬리 의존성` (kkori uij eonseong) — phụ thuộc đuôi.

## 9. cointegration /ˌkoʊɪntəˈɡreɪʃən/
**Part of speech:** noun
**Core meaning (English):** a long-run equilibrium relationship among nonstationary time series whose combination is stationary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồng liên kết; hình dung các chuỗi cùng trôi nhưng bị một quan hệ dài hạn kéo lại gần nhau.
**Grammar & collocations:** `cointegration rank` — hạng đồng liên kết; `cointegration test` — kiểm định đồng liên kết; `establish cointegration` — xác lập đồng liên kết.
**Examples:** `Cointegration suggested that the two prices shared a long-run equilibrium.` → Đồng liên kết gợi ý hai mức giá cùng chia sẻ cân bằng dài hạn.
**Liên kết tiếng Hàn:** `공적분` (gongjeokbun) — đồng liên kết.

## 10. unit root /ˈjuːnɪt ruːt/
**Part of speech:** noun
**Core meaning (English):** a characteristic root of a time-series process that makes shocks persistent and the level nonstationary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nghiệm đơn vị; hình dung cú sốc không tự mất đi mà làm thay đổi lâu dài mức chuỗi.
**Grammar & collocations:** `unit-root test` — kiểm định nghiệm đơn vị; `unit-root process` — quá trình có nghiệm đơn vị; `test for a unit root` — kiểm tra nghiệm đơn vị.
**Examples:** `The unit-root test failed to reject a persistent stochastic trend.` → Kiểm định nghiệm đơn vị không bác bỏ xu hướng ngẫu nhiên dai dẳng.
**Liên kết tiếng Hàn:** `단위근` (danwigeun) — nghiệm đơn vị.

## 11. state-space model /ˈsteɪt speɪs ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that represents observations as noisy measurements of an evolving hidden state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình không gian trạng thái; hình dung biến ẩn di chuyển theo thời gian và tạo ra dữ liệu quan sát nhiễu.
**Grammar & collocations:** `linear state-space model` — mô hình không gian trạng thái tuyến tính; `state-space representation` — biểu diễn không gian trạng thái; `fit a model` — ước lượng mô hình.
**Examples:** `The state-space model separated a slow trend from short-term market noise.` → Mô hình không gian trạng thái tách xu hướng chậm khỏi nhiễu thị trường ngắn hạn.
**Liên kết tiếng Hàn:** `상태 공간 모형` (sangtae gonggan mohyeong) — mô hình không gian trạng thái.

## 12. Kalman filter /ˈkɑlmən ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a recursive algorithm that estimates a changing hidden state from noisy sequential observations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ lọc Kalman; hình dung cập nhật ước tính trạng thái sau mỗi quan sát mới, cân bằng dự báo và tín hiệu.
**Grammar & collocations:** `standard Kalman filter` — bộ lọc Kalman chuẩn; `Kalman-filter update` — bước cập nhật Kalman; `apply a filter` — áp dụng bộ lọc.
**Examples:** `The Kalman filter updated the latent trend whenever a new price arrived.` → Bộ lọc Kalman cập nhật xu hướng ẩn mỗi khi có giá mới.
**Liên kết tiếng Hàn:** `칼만 필터` (kalman pilteo) — bộ lọc Kalman.

## 13. regime switching /ˈreɪʒiːm ˈswɪtʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** modeling a time series as moving among distinct unobserved states with different dynamics.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển chế độ; hình dung thị trường luân phiên giữa trạng thái bình ổn, biến động và khủng hoảng.
**Grammar & collocations:** `Markov regime switching` — chuyển chế độ Markov; `regime-switching model` — mô hình chuyển chế độ; `identify regimes` — nhận diện chế độ.
**Examples:** `Regime switching identified a high-volatility state after the policy shock.` → Chuyển chế độ nhận diện trạng thái biến động cao sau cú sốc chính sách.
**Liên kết tiếng Hàn:** `체제 전환` (cheje jeonhwan) — chuyển chế độ.

## 14. event study /ɪˈvɛnt ˈstʌdi/
**Part of speech:** noun
**Core meaning (English):** an empirical method that measures how a discrete event affects security prices around its date.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nghiên cứu sự kiện; hình dung so sánh lợi suất quanh ngày tin tức để ước tính tác động.
**Grammar & collocations:** `event-study window` — cửa sổ nghiên cứu sự kiện; `conduct an event study` — tiến hành nghiên cứu; `event-study design` — thiết kế nghiên cứu.
**Examples:** `The event study measured the market reaction to the merger announcement.` → Nghiên cứu sự kiện đo phản ứng thị trường với thông báo sáp nhập.
**Liên kết tiếng Hàn:** `사건 연구` (sageon yeongu) — nghiên cứu sự kiện.

## 15. abnormal return /æbˈnɔrməl rɪˈtɝn/
**Part of speech:** noun
**Core meaning (English):** the difference between an asset's actual return and the return predicted by a benchmark model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lợi suất bất thường; hình dung phần lợi nhuận vượt hoặc hụt so với điều đáng lẽ xảy ra.
**Grammar & collocations:** `cumulative abnormal return` — lợi suất bất thường tích lũy; `estimate abnormal return` — ước tính lợi suất bất thường; `abnormal-return window` — cửa sổ lợi suất.
**Examples:** `The stock showed a positive abnormal return on the disclosure date.` → Cổ phiếu có lợi suất bất thường dương vào ngày công bố.
**Liên kết tiếng Hàn:** `초과 수익률` (choga su ikryul) — lợi suất bất thường.

## 16. factor loading /ˈfæktər ˈloʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** the sensitivity of an asset's return to a systematic risk factor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ số tải nhân tố; hình dung mức một tài sản “mang” rủi ro thị trường, quy mô hoặc giá trị.
**Grammar & collocations:** `factor-loading estimate` — ước tính hệ số tải; `time-varying factor loading` — hệ số tải biến đổi; `factor-loading matrix` — ma trận hệ số tải.
**Examples:** `The defensive fund had a low market factor loading.` → Quỹ phòng thủ có hệ số tải nhân tố thị trường thấp.
**Liên kết tiếng Hàn:** `요인 적재량` (yoin jeokjaeryang) — hệ số tải nhân tố.

## 17. liquidity premium /lɪˈkwɪdəti ˈpriːmiəm/
**Part of speech:** noun
**Core meaning (English):** additional expected return demanded for holding an asset that is difficult or costly to trade.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần bù thanh khoản; hình dung nhà đầu tư đòi lợi suất cao hơn để chịu rủi ro khó bán.
**Grammar & collocations:** `liquidity-premium estimate` — ước tính phần bù thanh khoản; `liquidity-premium factor` — nhân tố phần bù; `earn a premium` — nhận phần bù.
**Examples:** `Thinly traded bonds carried a substantial liquidity premium.` → Trái phiếu giao dịch mỏng mang phần bù thanh khoản đáng kể.
**Liên kết tiếng Hàn:** `유동성 프리미엄` (yudongseong peur imieom) — phần bù thanh khoản.

## 18. variance risk premium /ˈvɛəriəns rɪsk ˈpriːmiəm/
**Part of speech:** noun
**Core meaning (English):** the difference between the variance investors price into derivatives and the variance later realized.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần bù rủi ro phương sai; hình dung giá quyền chọn phản ánh mức sợ biến động khác với biến động thực tế sau đó.
**Grammar & collocations:** `variance-risk-premium trade` — giao dịch phần bù rủi ro phương sai; `negative variance risk premium` — phần bù âm; `estimate the premium` — ước tính phần bù.
**Examples:** `The variance risk premium became more negative during calm markets.` → Phần bù rủi ro phương sai trở nên âm hơn trong các thị trường yên tĩnh.
**Liên kết tiếng Hàn:** `분산 위험 프리미엄` (bunsan wiheom peurimieom) — phần bù rủi ro phương sai.

## 19. forecast error variance /ˈfɔrˌkæst ˈɛrər ˈvɛəriəns/
**Part of speech:** noun
**Core meaning (English):** the variance of the difference between predicted and observed outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương sai sai số dự báo; hình dung mức các dự báo lệch khỏi kết quả thực tế đến đâu.
**Grammar & collocations:** `forecast-error variance decomposition` — phân rã phương sai sai số; `reduce forecast error variance` — giảm phương sai sai số; `estimate error variance` — ước tính phương sai.
**Examples:** `The new indicators reduced forecast error variance for quarterly growth.` → Các chỉ báo mới giảm phương sai sai số dự báo tăng trưởng quý.
**Liên kết tiếng Hàn:** `예측 오차 분산` (yecheuk ocha bunsan) — phương sai sai số dự báo.

## 20. structural break /ˈstrʌktʃərəl breɪk/
**Part of speech:** noun
**Core meaning (English):** a permanent or persistent change in the parameters or data-generating process of a time series.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm gãy cấu trúc; hình dung một biến cố làm quy luật vận động của chuỗi đổi sang chế độ mới.
**Grammar & collocations:** `multiple structural breaks` — nhiều điểm gãy; `structural-break test` — kiểm định điểm gãy; `detect a break` — phát hiện điểm gãy.
**Examples:** `The crisis created a structural break in the relationship between inflation and yields.` → Khủng hoảng tạo điểm gãy cấu trúc trong quan hệ giữa lạm phát và lợi suất.
**Liên kết tiếng Hàn:** `구조적 단절` (gujojeok danjeol) — điểm gãy cấu trúc.

## Review in context

A **GARCH** model captures changing variance, while **stochastic volatility** treats risk as a hidden process and a **volatility surface** maps option expectations. The **leverage effect** creates asymmetry, and **jump diffusion** captures abrupt moves. A **heavy-tailed distribution**, **copula model**, and **tail dependence** describe extreme co-movement. **Cointegration** models long-run relations, while a **unit root** makes shocks persistent. A **state-space model** and **Kalman filter** update hidden trends; **regime switching** allows different market states. An **event study** estimates **abnormal return**. **Factor loading** measures systematic exposure, while a **liquidity premium** and **variance risk premium** price risk. **Forecast error variance** evaluates prediction uncertainty, and a **structural break** warns that old parameters may no longer apply.

**Bản dịch tiếng Việt:**

Mô hình GARCH nắm bắt phương sai thay đổi, trong khi biến động ngẫu nhiên xem rủi ro là một quá trình ẩn và bề mặt biến động lập bản đồ kỳ vọng quyền chọn. Hiệu ứng đòn bẩy tạo bất đối xứng, còn khuếch tán có bước nhảy mô tả biến động đột ngột. Phân phối đuôi nặng, mô hình copula và phụ thuộc đuôi mô tả đồng biến động cực đoan. Đồng liên kết mô hình hóa quan hệ dài hạn, còn nghiệm đơn vị khiến cú sốc dai dẳng. Mô hình không gian trạng thái và bộ lọc Kalman cập nhật xu hướng ẩn; chuyển chế độ cho phép các trạng thái thị trường khác nhau. Nghiên cứu sự kiện ước tính lợi suất bất thường. Hệ số tải nhân tố đo mức phơi nhiễm hệ thống, còn phần bù thanh khoản và phần bù rủi ro phương sai định giá rủi ro. Phương sai sai số dự báo đánh giá bất định dự báo, và điểm gãy cấu trúc cảnh báo rằng tham số cũ có thể không còn phù hợp.
