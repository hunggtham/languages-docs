# C2 Vocabulary — Model evaluation and uncertainty

This lesson follows a deployed model from calibration and abstention through distribution shift, robust testing, and evaluation governance.

Flow: **expected calibration error → selective prediction → abstention policy → conformal prediction → prediction set → coverage guarantee → out-of-distribution detection → drift detector → benchmark contamination → data leakage audit → robustness envelope → stress distribution → slice-based evaluation → counterfactual test → metamorphic test → reliability diagram → decision threshold → error taxonomy → evaluation harness → model card update**.

## 1. expected calibration error /ɪkˈspɛktɪd ˌkæləˈbreɪʃən ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** a measure of the difference between predicted confidence and observed accuracy across confidence bins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đo confidence model nói ra có khớp với tỷ lệ đúng thực tế không.
**Grammar & collocations:** `expected-calibration-error metric` — metric; `reduce calibration error` — giảm.
**Examples:** `Expected calibration error fell after the classifier was recalibrated on recent cases.` → Calibration error giảm sau khi classifier được calibrate lại trên case gần đây.
**Liên kết tiếng Hàn:** `기대 보정 오차`.

## 2. selective prediction /sɪˈlɛktɪv prɪˈdɪkʃən/
**Part of speech:** noun
**Core meaning (English):** prediction that allows a model to decline uncertain cases instead of always returning an answer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model chỉ trả lời case đủ tự tin, còn lại chuyển cho người hoặc hệ thống khác.
**Grammar & collocations:** `selective-prediction curve` — curve; `selectively predict` — dự đoán có chọn lọc.
**Examples:** `Selective prediction improved precision by routing ambiguous scans to a specialist.` → Dự đoán chọn lọc tăng precision bằng cách chuyển scan mơ hồ cho specialist.
**Liên kết tiếng Hàn:** `선택적 예측`.

## 3. abstention policy /əbˈstɛnʃən ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** a rule specifying when a model must withhold a prediction or request human review.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy quyết định lúc nào model phải “không chắc” và dừng trả lời.
**Grammar & collocations:** `abstention-policy threshold` — threshold; `trigger abstention` — kích hoạt.
**Examples:** `The abstention policy triggered when confidence and image quality disagreed.` → Policy kích hoạt khi confidence và chất lượng ảnh mâu thuẫn.
**Liên kết tiếng Hàn:** `기권 정책`.

## 4. conformal prediction /kənˈfɔrməl prɪˈdɪkʃən/
**Part of speech:** noun
**Core meaning (English):** a distribution-free method that wraps model outputs in prediction sets or intervals with a target error rate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thêm lớp thống kê để tạo interval/set có mức đảm bảo coverage.
**Grammar & collocations:** `conformal-prediction interval` — interval; `calibrate conformal scores` — calibrate.
**Examples:** `Conformal prediction returned a set of plausible labels rather than one unsupported guess.` → Conformal trả một set nhãn khả dĩ thay vì một đoán đoán thiếu cơ sở.
**Liên kết tiếng Hàn:** `적합 예측`.

## 5. prediction set /prɪˈdɪkʃən sɛt/
**Part of speech:** noun
**Core meaning (English):** a collection of candidate outcomes returned when uncertainty makes a single prediction inappropriate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** set các nhãn có thể đúng, thay vì ép model chọn một nhãn.
**Grammar & collocations:** `prediction-set size` — kích thước; `construct a prediction set` — tạo.
**Examples:** `The prediction set contained two diagnoses for the borderline case.` → Set gồm hai chẩn đoán cho case ranh giới.
**Liên kết tiếng Hàn:** `예측 집합`.

## 6. coverage guarantee /ˈkʌvərɪdʒ ˌɡærənˈtiː/
**Part of speech:** noun
**Core meaning (English):** a statistical promise that a prediction interval or set contains the true outcome at a specified rate under stated assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cam kết tỷ lệ outcome thật nằm trong interval/set.
**Grammar & collocations:** `coverage-guarantee level` — mức; `provide marginal coverage` — cung cấp.
**Examples:** `The interval was reported with a ninety-percent coverage guarantee under exchangeability.` → Interval được báo cáo với guarantee 90% dưới giả định exchangeability.
**Liên kết tiếng Hàn:** `포괄 보장`.

## 7. out-of-distribution detection /aʊt əv ˌdɪstrəˈbjuːʃən dɪˈtɛkʃən/
**Part of speech:** noun
**Core meaning (English):** identifying inputs whose characteristics differ substantially from the data used to train a model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phát hiện input ngoài phân phối train, nơi model có thể không đáng tin.
**Grammar & collocations:** `out-of-distribution score` — score; `flag an OOD input` — đánh dấu.
**Examples:** `Out-of-distribution detection flagged a camera type absent from the training set.` → OOD detection đánh dấu loại camera không có trong data train.
**Liên kết tiếng Hàn:** `분포 외 감지`.

## 8. drift detector /drɪft dɪˈtɛktər/
**Part of speech:** noun
**Core meaning (English):** a monitor that detects changes in input, output, or error patterns over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ theo dõi nhận ra data/model behavior đang lệch dần.
**Grammar & collocations:** `drift-detector alert` — cảnh báo; `detect covariate drift` — phát hiện.
**Examples:** `The drift detector alerted the team when referral patterns changed after a policy update.` → Detector cảnh báo khi pattern referral đổi sau policy mới.
**Liên kết tiếng Hàn:** `드리프트 감지기`.

## 9. benchmark contamination /ˈbɛntʃˌmɑrk kənˌtæməˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** accidental or intentional overlap between evaluation data and material used to train or tune a model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** benchmark bị “nhiễm” dữ liệu đã thấy, làm điểm test cao giả tạo.
**Grammar & collocations:** `benchmark-contamination check` — check; `contaminate an evaluation set` — làm nhiễm.
**Examples:** `Benchmark contamination inflated the reported score because test prompts appeared in training logs.` → Contamination làm điểm cao giả vì prompt test nằm trong log train.
**Liên kết tiếng Hàn:** `벤치마크 오염`.

## 10. data leakage audit /ˈdeɪtə ˈliːkɪdʒ ˈɔdɪt/
**Part of speech:** noun
**Core meaning (English):** a review that checks whether information from validation or test data entered training, feature creation, or deployment decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** audit tìm xem data test có vô tình chảy vào train/tuning hay không.
**Grammar & collocations:** `data-leakage-audit trail` — trail; `audit feature generation` — audit.
**Examples:** `The data leakage audit found that a future timestamp had entered the training feature.` → Audit phát hiện timestamp tương lai lọt vào feature train.
**Liên kết tiếng Hàn:** `데이터 누수 감사`.

## 11. robustness envelope /roʊˈbʌstnəs ˈɛnvəˌloʊp/
**Part of speech:** noun
**Core meaning (English):** the range of perturbations, environments, or operating conditions in which a model is expected to remain acceptable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “vùng an toàn” của model trước noise, shift hoặc điều kiện khác.
**Grammar & collocations:** `robustness-envelope test` — test; `define an operating envelope` — định nghĩa.
**Examples:** `The robustness envelope covered moderate blur but excluded severe sensor failure.` → Envelope bao phủ blur vừa nhưng loại sensor failure nặng.
**Liên kết tiếng Hàn:** `강건성 범위`.

## 12. stress distribution /strɛs ˌdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** a deliberately difficult input distribution used to probe failure behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân phối test khó được thiết kế để ép model lộ điểm yếu.
**Grammar & collocations:** `stress-distribution sample` — sample; `evaluate under stress` — đánh giá.
**Examples:** `A stress distribution with rare lighting conditions exposed unstable detection thresholds.` → Stress distribution với ánh sáng hiếm lộ threshold detection không ổn định.
**Liên kết tiếng Hàn:** `스트레스 분포`.

## 13. slice-based evaluation /slaɪs beɪst ɪˌvæljuˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** evaluating performance separately on meaningful subgroups or slices rather than only reporting an overall average.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách data thành slice để thấy model tốt/xấu ở nhóm nào.
**Grammar & collocations:** `slice-based-evaluation report` — report; `define demographic slices` — định nghĩa.
**Examples:** `Slice-based evaluation revealed a large recall gap for low-light images.` → Evaluation theo slice lộ gap recall lớn ở ảnh thiếu sáng.
**Liên kết tiếng Hàn:** `슬라이스 기반 평가`.

## 14. counterfactual test /ˌkaʊntərˈfæktʃuəl tɛst/
**Part of speech:** noun
**Core meaning (English):** a test that changes a relevant input factor while holding other factors as constant as possible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi một yếu tố giả định để xem prediction có thay đổi hợp lý không.
**Grammar & collocations:** `counterfactual-test pair` — cặp test; `hold context constant` — giữ cố định.
**Examples:** `The counterfactual test changed the patient's age while keeping the clinical narrative unchanged.` → Test đổi tuổi bệnh nhân nhưng giữ narrative lâm sàng.
**Liên kết tiếng Hàn:** `반사실적 테스트`.

## 15. metamorphic test /ˌmɛtəˈmɔrfɪk tɛst/
**Part of speech:** noun
**Core meaning (English):** a test that checks whether predictions obey a known relation after a controlled transformation of the input.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến đổi input theo quy tắc, rồi kiểm tra output phải biến đổi tương ứng.
**Grammar & collocations:** `metamorphic-test relation` — relation; `apply a metamorphic transformation` — áp dụng.
**Examples:** `A metamorphic test checked that a harmless crop did not change the document classification.` → Test kiểm tra crop vô hại không đổi phân loại tài liệu.
**Liên kết tiếng Hàn:** `메타모픽 테스트`.

## 16. reliability diagram /rɪˌlaɪəˈbɪləti ˈdaɪəˌɡræm/
**Part of speech:** noun
**Core meaning (English):** a plot comparing predicted confidence with empirical accuracy across bins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu đồ cho thấy confidence 0.8 có đúng khoảng 80% không.
**Grammar & collocations:** `reliability-diagram bin` — bin; `plot calibration` — vẽ calibration.
**Examples:** `The reliability diagram showed overconfidence in the highest probability bin.` → Diagram cho thấy model quá tự tin ở bin xác suất cao nhất.
**Liên kết tiếng Hàn:** `신뢰도 다이어그램`.

## 17. decision threshold /dɪˈsɪʒən ˈθrɛʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** a cutoff on a score or probability that determines which action or class is selected.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mốc score để đổi prediction thành hành động/class.
**Grammar & collocations:** `decision-threshold tuning` — tuning; `raise the threshold` — tăng.
**Examples:** `Raising the decision threshold reduced false alarms but missed more borderline cases.` → Tăng threshold giảm false alarm nhưng bỏ sót nhiều case ranh giới.
**Liên kết tiếng Hàn:** `결정 임계값`.

## 18. error taxonomy /ˈɛrər tæˈsɑnəmi/
**Part of speech:** noun
**Core meaning (English):** a structured classification of failure types used to analyze and prioritize model errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ phân loại lỗi giúp biết lỗi thuộc nhóm nào và ưu tiên sửa.
**Grammar & collocations:** `error-taxonomy label` — label; `refine the taxonomy` — tinh chỉnh.
**Examples:** `The error taxonomy separated localization mistakes from unsupported abstentions.` → Taxonomy tách lỗi định vị khỏi abstention không được hỗ trợ.
**Liên kết tiếng Hàn:** `오류 분류 체계`.

## 19. evaluation harness /ɪˌvæljuˈeɪʃən ˈhɑrnəs/
**Part of speech:** noun
**Core meaning (English):** a repeatable system that runs datasets, metrics, slices, and checks under controlled evaluation settings.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ khung chạy evaluation nhất quán qua nhiều model/version.
**Grammar & collocations:** `evaluation-harness configuration` — config; `run the harness` — chạy.
**Examples:** `The evaluation harness regenerated every metric after the tokenizer changed.` → Harness chạy lại mọi metric sau khi tokenizer đổi.
**Liên kết tiếng Hàn:** `평가 하네스`.

## 20. model card update /ˈmɑdəl kɑrd ʌpˈdeɪt/
**Part of speech:** noun
**Core meaning (English):** a documented revision to a model card that records new performance, limitations, risks, or intended uses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cập nhật “hồ sơ” model sau evaluation hoặc thay đổi deployment.
**Grammar & collocations:** `model-card-update checklist` — checklist; `document a limitation` — ghi limitation.
**Examples:** `The model card update recorded the new abstention rule and its subgroup effects.` → Update ghi rule abstention mới và ảnh hưởng theo subgroup.
**Liên kết tiếng Hàn:** `모델 카드 업데이트`.

## Review in context

**Expected calibration error** compares confidence with accuracy, while **selective prediction** and an **abstention policy** let a system decline uncertain cases. **Conformal prediction** can return a **prediction set** with a stated **coverage guarantee**. **Out-of-distribution detection** and a **drift detector** watch for changing inputs. Evaluation must check **benchmark contamination** through a **data leakage audit** and define a **robustness envelope** with a difficult **stress distribution**. **Slice-based evaluation** examines subgroups; a **counterfactual test** or **metamorphic test** probes controlled changes. A **reliability diagram** supports **decision-threshold** tuning, an **error taxonomy** organizes failures, an **evaluation harness** reruns checks, and a **model card update** records the result.

**Bản dịch tiếng Việt:** **Expected calibration error** so sánh confidence với accuracy, còn **selective prediction** và **abstention policy** cho hệ thống từ chối case không chắc. **Conformal prediction** có thể trả **prediction set** với **coverage guarantee** đã nêu. **Out-of-distribution detection** và **drift detector** theo dõi input thay đổi. Evaluation phải kiểm tra **benchmark contamination** bằng **data leakage audit** và định nghĩa **robustness envelope** với **stress distribution** khó. **Slice-based evaluation** xem từng subgroup; **counterfactual test** hoặc **metamorphic test** kiểm tra thay đổi có kiểm soát. **Reliability diagram** hỗ trợ chỉnh **decision threshold**, **error taxonomy** sắp xếp lỗi, **evaluation harness** chạy lại check, còn **model card update** ghi kết quả.
