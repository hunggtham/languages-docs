# C2 Vocabulary — Probabilistic model selection and measurement diagnostics

This lesson extends active calibration with likelihood geometry, probabilistic model comparison, robust estimation, and diagnostics for nonideal measurement streams.

Flow: **likelihood surface → Cramér–Rao bound → sparse prior → Gaussian process surrogate → emulator discrepancy → model evidence → expected information gain → confidence calibration → nonstationary noise → change-point detection → drift compensation → profile likelihood → experimental nuisance → measurement allocation → replicate shot → heteroscedastic noise → robust estimator → variance component → spectral leakage → window function**.

## 1. likelihood surface /ˈlaɪklihʊd ˈsɜːrfɪs/
**Part of speech:** noun
**Core meaning (English):** the landscape of how well different parameter values explain observed measurements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bề mặt cho thấy mỗi giá trị parameter giải thích measurement đã quan sát tốt đến đâu.
**Grammar & collocations:** `likelihood-surface ridge` — dải ridge; `map a parameter landscape` — lập bản đồ landscape parameter.
**Examples:** `The likelihood surface contained a long ridge because amplitude and detuning traded off.` → Bề mặt likelihood có một ridge dài vì amplitude và detuning bù trừ cho nhau.
**Liên kết tiếng Hàn:** `가능도 표면`.

## 2. Cramér–Rao bound /ˌkrɑːmər ˈraʊ baʊnd/
**Part of speech:** noun
**Core meaning (English):** a lower bound on the variance of an unbiased parameter estimate under a specified measurement model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn dưới của variance của ước tính parameter không chệch trong model measurement đã chọn.
**Grammar & collocations:** `Cramér–Rao-bound analysis` — phân tích; `approach the information limit` — tiến gần giới hạn information.
**Examples:** `The measured variance was above the Cramér–Rao bound because readout noise was unmodeled.` → Variance đo được cao hơn Cramér–Rao bound vì readout noise chưa được model.
**Liên kết tiếng Hàn:** `크라메르-라오 하한`.

## 3. sparse prior /spɑːrs ˈpraɪər/
**Part of speech:** noun
**Core meaning (English):** a prior distribution that favors only a small number of nonzero or important effects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prior ưu tiên chỉ một số ít effect khác không hoặc thực sự quan trọng.
**Grammar & collocations:** `sparse-prior regularization` — regularization; `shrink weak couplings` — co coupling yếu.
**Examples:** `A sparse prior suppressed implausible long-range couplings in the reconstructed model.` → Sparse prior làm giảm các coupling xa không hợp lý trong model tái dựng.
**Liên kết tiếng Hàn:** `희소 사전분포`.

## 4. Gaussian process surrogate /ˈɡaʊsiən ˈprɑːses ˈsɜːrəɡət/
**Part of speech:** noun
**Core meaning (English):** a probabilistic approximation that predicts a costly experiment or simulator from previously sampled settings.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xấp xỉ xác suất dự đoán experiment hoặc simulator tốn kém từ các setting đã lấy mẫu.
**Grammar & collocations:** `Gaussian-process-surrogate prediction` — dự đoán; `query an expensive simulator` — truy vấn simulator đắt.
**Examples:** `The Gaussian process surrogate proposed pulse settings before the device was queried again.` → Surrogate Gaussian process đề xuất setting pulse trước khi truy vấn thiết bị lần nữa.
**Liên kết tiếng Hàn:** `가우시안 프로세스 대리모델`.

## 5. emulator discrepancy /ˈemjəleɪtər dɪˈskrepənsi/
**Part of speech:** noun
**Core meaning (English):** the systematic difference between an emulator's prediction and the physical system it represents.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khác biệt có hệ thống giữa dự đoán của emulator và hệ vật lý mà nó đại diện.
**Grammar & collocations:** `emulator-discrepancy term` — term; `correct a simulator bias` — sửa bias simulator.
**Examples:** `The fit included an emulator discrepancy so simulator certainty did not hide hardware error.` → Fit thêm discrepancy emulator để certainty của simulator không che lỗi hardware.
**Liên kết tiếng Hàn:** `에뮬레이터 불일치`.

## 6. model evidence /ˈmɑːdəl ˈevɪdəns/
**Part of speech:** noun
**Core meaning (English):** the probability of the observed data after averaging over a model's parameter uncertainty.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác suất của data quan sát sau khi trung bình qua uncertainty parameter của model.
**Grammar & collocations:** `model-evidence comparison` — so sánh; `integrate over parameter space` — tích phân qua không gian parameter.
**Examples:** `Model evidence favored the two-timescale noise model despite its extra parameter.` → Evidence model ủng hộ model noise hai thang thời gian dù có thêm parameter.
**Liên kết tiếng Hàn:** `모델 증거`.

## 7. expected information gain /ɪkˈspektɪd ˌɪnfərˈmeɪʃən ɡeɪn/
**Part of speech:** noun
**Core meaning (English):** the expected reduction in uncertainty produced by a proposed measurement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức giảm uncertainty kỳ vọng do một phép đo đề xuất tạo ra.
**Grammar & collocations:** `expected-information-gain score` — điểm; `choose the most informative shot` — chọn shot nhiều thông tin nhất.
**Examples:** `Expected information gain ranked the resonance edge above the flat center.` → Information gain kỳ vọng xếp mép resonance cao hơn vùng giữa phẳng.
**Liên kết tiếng Hàn:** `기대 정보 이득`.

## 8. confidence calibration /ˈkɑːnfɪdəns ˌkælɪˈbreɪʃən/
**Part of speech:** noun
**Core meaning (English):** checking whether stated confidence levels match the actual frequency of successful coverage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra confidence được nêu có khớp với tần suất bao phủ đúng trong thực tế không.
**Grammar & collocations:** `confidence-calibration curve` — đường cong; `check interval coverage` — kiểm tra coverage của interval.
**Examples:** `Confidence calibration showed that nominal ninety-five-percent intervals covered too few repeats.` → Calibration confidence cho thấy interval danh nghĩa 95 phần trăm bao phủ quá ít lần lặp.
**Liên kết tiếng Hàn:** `신뢰도 보정`.

## 9. nonstationary noise /ˌnɑːnˈsteɪʃəneri nɔɪz/
**Part of speech:** noun
**Core meaning (English):** noise whose statistical properties change with time or operating conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** noise có tính chất thống kê thay đổi theo thời gian hoặc điều kiện vận hành.
**Grammar & collocations:** `nonstationary-noise model` — model; `track time-varying variance` — theo dõi variance đổi theo thời gian.
**Examples:** `Nonstationary noise widened the late-night posterior even though the mean signal stayed stable.` → Noise nonstationary làm posterior ban đêm rộng hơn dù mean signal ổn định.
**Liên kết tiếng Hàn:** `비정상 잡음`.

## 10. change-point detection /ˈtʃeɪndʒ pɔɪnt dɪˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** identifying a time at which the statistical behavior of a measured sequence changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác định thời điểm hành vi thống kê của sequence đo thay đổi.
**Grammar & collocations:** `change-point-detection alarm` — cảnh báo; `segment a time series` — chia đoạn time series.
**Examples:** `Change-point detection flagged a refrigerator cycle that altered the readout variance.` → Detection change-point báo một chu kỳ tủ lạnh làm đổi variance readout.
**Liên kết tiếng Hàn:** `변화점 탐지`.

## 11. drift compensation /drɪft ˌkɑːmpənˈseɪʃən/
**Part of speech:** noun
**Core meaning (English):** adjustment that counteracts a gradual change in a device parameter or measurement baseline.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều chỉnh bù lại thay đổi dần của parameter thiết bị hoặc baseline measurement.
**Grammar & collocations:** `drift-compensation update` — update; `offset a thermal shift` — bù dịch nhiệt.
**Examples:** `Drift compensation kept the readout threshold centered during the overnight run.` → Compensation drift giữ threshold readout ở giữa trong lần chạy qua đêm.
**Liên kết tiếng Hàn:** `드리프트 보상`.

## 12. profile likelihood /ˈproʊfaɪl ˈlaɪklihʊd/
**Part of speech:** noun
**Core meaning (English):** a likelihood for one parameter after optimizing or eliminating the remaining nuisance parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** likelihood của một parameter sau khi tối ưu hoặc loại các nuisance parameter còn lại.
**Grammar & collocations:** `profile-likelihood interval` — interval; `optimize nuisance coordinates` — tối ưu tọa độ nuisance.
**Examples:** `The profile likelihood gave an asymmetric interval for the weak coupling.` → Likelihood profile cho interval bất đối xứng của coupling yếu.
**Liên kết tiếng Hàn:** `프로파일 가능도`.

## 13. experimental nuisance /ɪkˌsperəˈmentəl ˈnuːsəns/
**Part of speech:** noun
**Core meaning (English):** a measurement or setup effect that must be modeled but is not the scientific parameter of interest.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** effect của measurement hoặc setup cần model nhưng không phải parameter khoa học cần tìm.
**Grammar & collocations:** `experimental-nuisance parameter` — parameter; `marginalize setup uncertainty` — marginalize uncertainty setup.
**Examples:** `The fit marginalized an experimental nuisance caused by a slowly changing detector gain.` → Fit marginalize nuisance experiment do gain detector đổi chậm.
**Liên kết tiếng Hàn:** `실험적 방해 요인`.

## 14. measurement allocation /ˈmeʒərmənt ˌæləˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the distribution of a limited number of measurements across settings, channels, or time windows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân bổ số measurement hữu hạn giữa setting, channel hoặc time window.
**Grammar & collocations:** `measurement-allocation policy` — policy; `spend shots where sensitivity is high` — dùng shot nơi sensitivity cao.
**Examples:** `Measurement allocation shifted repetitions from a saturated region to the steep transition.` → Phân bổ measurement chuyển repetitions từ vùng bão hòa sang transition dốc.
**Liên kết tiếng Hàn:** `측정 할당`.

## 15. replicate shot /ˈreplɪkeɪt ʃɑːt/
**Part of speech:** noun
**Core meaning (English):** a repeated measurement taken under the same nominal experimental conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measurement lặp lại dưới cùng điều kiện experiment danh nghĩa.
**Grammar & collocations:** `replicate-shot variance` — variance; `repeat an identical sequence` — lặp sequence giống hệt.
**Examples:** `Each replicate shot tested whether the apparent phase shift exceeded ordinary sampling noise.` → Mỗi shot replicate kiểm tra phase shift có vượt sampling noise thường không.
**Liên kết tiếng Hàn:** `반복 측정 샷`.

## 16. heteroscedastic noise /ˌhetəroʊskəˈdæstɪk nɔɪz/
**Part of speech:** noun
**Core meaning (English):** noise whose variance changes with the signal level or another predictor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** noise có variance thay đổi theo signal level hoặc predictor khác.
**Grammar & collocations:** `heteroscedastic-noise likelihood` — likelihood; `weight observations by variance` — gán trọng số theo variance.
**Examples:** `Heteroscedastic noise required lower weights for shots near detector saturation.` → Noise heteroscedastic cần trọng số thấp hơn cho shot gần bão hòa detector.
**Liên kết tiếng Hàn:** `이분산 잡음`.

## 17. robust estimator /roʊˈbʌst ˈestəmeɪtər/
**Part of speech:** noun
**Core meaning (English):** an estimator designed to remain reliable when data contain outliers or mild model violations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** estimator được thiết kế vẫn đáng tin khi data có outlier hoặc vi phạm model nhẹ.
**Grammar & collocations:** `robust-estimator loss` — loss; `downweight an outlier` — giảm trọng số outlier.
**Examples:** `A robust estimator prevented one clipped trace from moving the calibration target.` → Estimator robust ngăn một trace bị clip làm dịch target calibration.
**Liên kết tiếng Hàn:** `강건 추정량`.

## 18. variance component /ˈveriəns kəmˈpoʊnənt/
**Part of speech:** noun
**Core meaning (English):** a separable contribution to total variability from a source such as device, run, or shot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đóng góp tách riêng vào variability tổng từ nguồn như device, run hoặc shot.
**Grammar & collocations:** `variance-component analysis` — phân tích; `partition between-run variability` — chia variability giữa các run.
**Examples:** `The variance component from day-to-day drift exceeded the within-shot component.` → Component variance do drift từng ngày vượt component trong shot.
**Liên kết tiếng Hàn:** `분산 성분`.

## 19. spectral leakage /ˈspektrəl ˈliːkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** spreading of signal power into neighboring frequencies because a finite record does not contain an exact number of cycles.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** năng lượng signal lan sang frequency lân cận vì record hữu hạn không chứa số chu kỳ nguyên.
**Grammar & collocations:** `spectral-leakage artifact` — artifact; `window a finite record` — áp window cho record hữu hạn.
**Examples:** `Spectral leakage made the weak sideband look broader than it really was.` → Leakage phổ làm sideband yếu trông rộng hơn thực tế.
**Liên kết tiếng Hàn:** `스펙트럼 누설`.

## 20. window function /ˈwɪndoʊ ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a weighting function applied to a finite time record before spectral analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm trọng số áp lên time record hữu hạn trước khi phân tích phổ.
**Grammar & collocations:** `window-function choice` — lựa chọn; `suppress sidelobes` — giảm sidelobe.
**Examples:** `The window function suppressed sidelobes but broadened the main spectral peak.` → Hàm window giảm sidelobe nhưng làm đỉnh phổ chính rộng hơn.
**Liên kết tiếng Hàn:** `창 함수`.

## Review in context

A **likelihood surface** can be sharpened by the **Cramér–Rao bound**, a **sparse prior**, and a **Gaussian process surrogate**, while **emulator discrepancy** and **model evidence** compare competing explanations. **Expected information gain** guides **confidence calibration** when **nonstationary noise** and **change-point detection** reveal a regime shift; **drift compensation** then stabilizes the run. A **profile likelihood** handles an **experimental nuisance**, and **measurement allocation** reserves each **replicate shot** wisely. **Heteroscedastic noise** motivates a **robust estimator** and a **variance component** audit, while **spectral leakage** is controlled with a suitable **window function**.

**Bản dịch tiếng Việt:** **Likelihood surface** có thể được làm sắc hơn bằng **Cramér–Rao bound**, **sparse prior** và **Gaussian process surrogate**, trong khi **emulator discrepancy** và **model evidence** so sánh các cách giải thích cạnh tranh. **Expected information gain** định hướng **confidence calibration** khi **nonstationary noise** và **change-point detection** phát hiện đổi chế độ; sau đó **drift compensation** ổn định lần chạy. **Profile likelihood** xử lý **experimental nuisance**, còn **measurement allocation** phân bổ khôn ngoan từng **replicate shot**. **Heteroscedastic noise** thúc đẩy audit bằng **robust estimator** và **variance component**, còn **spectral leakage** được kiểm soát bằng **window function** phù hợp.
