# C1 Vocabulary 27 — State-space and mixed-frequency forecasting

This lesson follows how latent economic states are updated from noisy observations arriving at different frequencies.

Flow: **observation equation → transition equation → Kalman gain → smoothing distribution → latent state → local level model → local trend model → structural time series → diffuse initialization → missing observation → signal extraction → mixed-frequency model → ragged edge → MIDAS regression → dynamic factor model → factor rotation → state equation → filtering distribution → measurement update**.

## 1. observation equation /ˌɑbzərˈveɪʃən ɪˈkweɪʒən/
**Part of speech:** noun
**Core meaning (English):** the equation linking an observed measurement to an unobserved state and measurement noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương trình nối measurement quan sát với state ẩn và noise đo lường.
**Grammar & collocations:** `observation-equation specification` — specification; `map a latent state to data` — ánh xạ.
**Examples:** `The observation equation linked reported inflation to an unobserved trend and survey noise.` → Phương trình nối inflation báo cáo với trend ẩn và noise khảo sát.
**Liên kết tiếng Hàn:** `관측 방정식`.

## 2. transition equation /trænˈzɪʃən ɪˈkweɪʒən/
**Part of speech:** noun
**Core meaning (English):** the equation describing how an unobserved state moves from one period to the next.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương trình mô tả state ẩn chuyển từ kỳ này sang kỳ sau.
**Grammar & collocations:** `transition-equation parameter` — parameter; `evolve a latent process` — tiến triển.
**Examples:** `The transition equation allowed the underlying trend to drift slowly over time.` → Phương trình cho trend nền drift chậm theo thời gian.
**Liên kết tiếng Hàn:** `전이 방정식`.

## 3. Kalman gain /ˈkɑlmən ɡeɪn/
**Part of speech:** noun
**Core meaning (English):** a weight determining how strongly a new observation changes the filtered estimate of a latent state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trọng số quyết định observation mới đổi state estimate đã lọc mạnh đến đâu.
**Grammar & collocations:** `Kalman-gain weight` — weight; `update the filtered state` — cập nhật.
**Examples:** `A large Kalman gain made the estimate respond quickly to a surprising employment release.` → Gain lớn làm estimate phản ứng nhanh với employment release bất ngờ.
**Liên kết tiếng Hàn:** `칼만 이득`.

## 4. smoothing distribution /ˈsmuːðɪŋ ˌdɪstrəˈbjuʃən/
**Part of speech:** noun
**Core meaning (English):** the distribution of a past latent state after using observations from both before and after that state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** distribution của state ẩn quá khứ sau khi dùng observation trước và sau state đó.
**Grammar & collocations:** `smoothing-distribution estimate` — estimate; `revise a past state` — điều chỉnh.
**Examples:** `The smoothing distribution revised the recession probability after later data confirmed the downturn.` → Distribution điều chỉnh xác suất recession sau khi data sau xác nhận downturn.
**Liên kết tiếng Hàn:** `평활 분포`.

## 5. latent state /ˈleɪtənt steɪt/
**Part of speech:** noun
**Core meaning (English):** an unobserved condition or component that generates observed measurements over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** condition/component ẩn tạo ra measurement quan sát theo thời gian.
**Grammar & collocations:** `latent-state estimate` — estimate; `infer an unobserved cycle` — suy ra.
**Examples:** `The latent state represented business-cycle momentum that could not be measured directly.` → State ẩn đại diện momentum chu kỳ kinh doanh không đo trực tiếp được.
**Liên kết tiếng Hàn:** `잠재 상태`.

## 6. local level model /ˈloʊkəl ˈlɛvəl ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a time-series model in which an unobserved level changes gradually as new shocks arrive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model time series có level ẩn đổi dần khi shock mới đến.
**Grammar & collocations:** `local-level-model forecast` — forecast; `allow a drifting mean` — cho phép.
**Examples:** `The local level model treated short-term inflation news as noisy signals around a drifting level.` → Model xem news inflation ngắn hạn là signal nhiễu quanh level drift.
**Liên kết tiếng Hàn:** `국소 수준 모형`.

## 7. local trend model /ˈloʊkəl trɛnd ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model in which both the unobserved level and its slope evolve over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model cho level ẩn và slope đều tiến triển theo thời gian.
**Grammar & collocations:** `local-trend-model slope` — slope; `estimate a changing growth rate` — ước lượng.
**Examples:** `The local trend model captured a recovery whose speed gradually weakened.` → Model nắm recovery có tốc độ yếu dần.
**Liên kết tiếng Hàn:** `국소 추세 모형`.

## 8. structural time series /ˈstrʌktʃərəl taɪm ˌsɪriz/
**Part of speech:** noun
**Core meaning (English):** a time-series representation that decomposes observations into interpretable components such as trend, cycle, seasonality, and irregular noise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn time series thành trend, cycle, seasonality và noise có thể diễn giải.
**Grammar & collocations:** `structural-time-series decomposition` — decomposition; `separate trend and cycle` — tách.
**Examples:** `The structural time series separated a seasonal retail pattern from a persistent demand trend.` → Structural time series tách pattern mùa vụ khỏi trend demand bền.
**Liên kết tiếng Hàn:** `구조적 시계열`.

## 9. diffuse initialization /dɪˈfjuːs ɪˌnɪʃələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** initialization that represents very weak prior information about the starting value of a latent state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khởi tạo thể hiện information prior rất yếu về state ẩn ban đầu.
**Grammar & collocations:** `diffuse-initialization treatment` — treatment; `start with an uncertain state` — bắt đầu.
**Examples:** `Diffuse initialization prevented an arbitrary starting trend from dominating the early forecast.` → Khởi tạo diffuse ngăn trend đầu tùy ý lấn át forecast sớm.
**Liên kết tiếng Hàn:** `확산 초기화`.

## 10. missing observation /ˈmɪsɪŋ ˌɑbzərˈveɪʃən/
**Part of speech:** noun
**Core meaning (English):** a time point at which the measurement is unavailable even though the latent process continues.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời điểm thiếu measurement dù process ẩn vẫn tiếp tục.
**Grammar & collocations:** `missing-observation update` — update; `propagate the state without a measurement` — truyền.
**Examples:** `The filter propagated the latent state through a missing observation month.` → Filter truyền state qua tháng thiếu observation.
**Liên kết tiếng Hàn:** `누락 관측`.

## 11. signal extraction /ˈsɪɡnəl ɪkˈstrækʃən/
**Part of speech:** noun
**Core meaning (English):** the process of separating an economically meaningful latent signal from noisy observed data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách signal kinh tế ẩn có ý nghĩa khỏi data quan sát nhiễu.
**Grammar & collocations:** `signal-extraction filter` — filter; `remove transitory noise` — loại.
**Examples:** `Signal extraction removed holiday noise before the team assessed the underlying sales trend.` → Signal extraction loại noise ngày lễ trước khi đánh giá trend sales.
**Liên kết tiếng Hàn:** `신호 추출`.

## 12. mixed-frequency model /mɪkst ˈfriːkwənsi ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that combines variables observed at different time frequencies, such as monthly indicators and quarterly output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model ghép biến có tần suất khác, như indicator tháng và output quý.
**Grammar & collocations:** `mixed-frequency-model alignment` — alignment; `combine monthly and quarterly data` — kết hợp.
**Examples:** `The mixed-frequency model used weekly claims to nowcast quarterly employment.` → Model dùng claim hàng tuần để nowcast employment quý.
**Liên kết tiếng Hàn:** `혼합 빈도 모형`.

## 13. ragged edge /ˈræɡəd ɛdʒ/
**Part of speech:** noun
**Core meaning (English):** the uneven endpoint of a real-time dataset when different series have been released through different latest dates.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần cuối không đều của data real-time vì series có ngày release mới nhất khác nhau.
**Grammar & collocations:** `ragged-edge problem` — problem; `align asynchronous releases` — căn chỉnh.
**Examples:** `The ragged edge left industrial production available for the latest month but retail sales one month behind.` → Ragged edge khiến production có data tháng mới còn retail sales chậm một tháng.
**Liên kết tiếng Hàn:** `톱니 모양 끝단`.

## 14. MIDAS regression /ˈmaɪdəs rɪˈɡrɛʃən/
**Part of speech:** noun
**Core meaning (English):** a mixed-frequency regression that uses weighted high-frequency lags to explain a lower-frequency outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hồi quy mixed-frequency dùng lag tần suất cao có trọng số để giải thích outcome tần suất thấp.
**Grammar & collocations:** `MIDAS-regression weight` — weight; `compress high-frequency lags` — nén.
**Examples:** `MIDAS regression used daily financial stress to forecast quarterly investment.` → MIDAS dùng stress tài chính hàng ngày để forecast investment quý.
**Liên kết tiếng Hàn:** `MIDAS 회귀`.

## 15. dynamic factor model /daɪˈnæmɪk ˈfæktər ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that extracts a small number of evolving common factors from many time series.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model rút một số factor chung tiến triển từ nhiều time series.
**Grammar & collocations:** `dynamic-factor-model estimate` — estimate; `summarize a large data panel` — tóm tắt.
**Examples:** `The dynamic factor model summarized hundreds of indicators into a real-time growth signal.` → Model tóm tắt hàng trăm indicator thành signal growth real-time.
**Liên kết tiếng Hàn:** `동적 요인 모형`.

## 16. factor rotation /ˈfæktər roʊˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a transformation of estimated factors and loadings that preserves their span while changing their orientation or interpretation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến đổi factor/loading giữ nguyên không gian chung nhưng đổi hướng hoặc cách diễn giải.
**Grammar & collocations:** `factor-rotation choice` — choice; `interpret common components` — diễn giải.
**Examples:** `Factor rotation produced components that were easier to label as demand and supply.` → Rotation tạo component dễ gán nhãn demand và supply hơn.
**Liên kết tiếng Hàn:** `요인 회전`.

## 17. state equation /steɪt ɪˈkweɪʒən/
**Part of speech:** noun
**Core meaning (English):** an equation describing the evolution of a hidden state, including its persistence and new shocks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương trình mô tả state ẩn tiến triển, persistence và shock mới.
**Grammar & collocations:** `state-equation shock` — shock; `model latent persistence` — mô hình hóa.
**Examples:** `The state equation allowed the unobserved trend to respond to a productivity shock.` → State equation cho trend ẩn phản ứng với productivity shock.
**Liên kết tiếng Hàn:** `상태 방정식`.

## 18. filtering distribution /ˈfɪltərɪŋ ˌdɪstrəˈbjuʃən/
**Part of speech:** noun
**Core meaning (English):** the probability distribution of the current latent state conditional only on observations available up to the current time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** distribution của state hiện tại chỉ condition theo observation đã có đến thời điểm đó.
**Grammar & collocations:** `filtering-distribution update` — update; `condition on information to date` — điều kiện.
**Examples:** `The filtering distribution widened when the latest indicator arrived with a large measurement error.` → Distribution lọc rộng hơn khi indicator mới có measurement error lớn.
**Liên kết tiếng Hàn:** `필터링 분포`.

## 19. measurement update /ˈmɛʒərmənt ʌpˈdeɪt/
**Part of speech:** noun
**Core meaning (English):** the step that revises a predicted latent state after a new observation is received.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bước sửa state ẩn dự đoán sau khi nhận observation mới.
**Grammar & collocations:** `measurement-update step` — step; `revise a prior prediction` — điều chỉnh.
**Examples:** `The measurement update lowered the estimated unemployment trend after the survey release.` → Update hạ trend thất nghiệp ước lượng sau release khảo sát.
**Liên kết tiếng Hàn:** `측정 업데이트`.

## 20. innovation covariance /ˌɪnəˈveɪʃən koʊˈvɛriəns/
**Part of speech:** noun
**Core meaning (English):** the variance of the new observation's prediction error used to determine how informative that observation is.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variance của prediction error observation mới, cho biết observation informative đến đâu.
**Grammar & collocations:** `innovation-covariance estimate` — estimate; `scale the update weight` — điều chỉnh.
**Examples:** `A large innovation covariance reduced the weight assigned to the noisy release.` → Covariance lớn giảm trọng số cho release nhiễu.
**Liên kết tiếng Hàn:** `혁신 공분산`.

## Review in context

An **observation equation** links data to a hidden process, while a **transition equation** describes movement between states. The **Kalman gain** determines how strongly new information changes the estimate; a **smoothing distribution** can revise a past **latent state**. A **local level model**, **local trend model**, or **structural time series** may use **diffuse initialization** and handle a **missing observation** during **signal extraction**. A **mixed-frequency model** must address the **ragged edge**; **MIDAS regression** and a **dynamic factor model** combine information, sometimes after **factor rotation**. The **state equation**, **filtering distribution**, **measurement update**, and **innovation covariance** keep the latent forecast coherent.

**Bản dịch tiếng Việt:** **Observation equation** nối data với process ẩn, còn **transition equation** mô tả state chuyển đổi. **Kalman gain** quyết định information mới đổi estimate mạnh ra sao; **smoothing distribution** có thể sửa state ẩn quá khứ. **Local level model**, **local trend model** hoặc **structural time series** có thể dùng **diffuse initialization** và xử lý **missing observation** khi **signal extraction**. **Mixed-frequency model** phải xử lý **ragged edge**; **MIDAS regression** và **dynamic factor model** ghép information, đôi khi sau **factor rotation**. **State equation**, **filtering distribution**, **measurement update** và **innovation covariance** giữ forecast ẩn nhất quán.
