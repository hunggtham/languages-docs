# C2 Vocabulary — Mechanistic dose modeling and virtual patients

This lesson follows a mechanistic drug model from equations and patient variability to simulation, qualification, and dose selection.

Flow: **mechanistic model → ordinary differential equation → parameter identifiability → parameter estimation → local sensitivity analysis → virtual population → absorption compartment → distribution compartment → clearance pathway → bioavailability fraction → nonlinear elimination → covariate effect → model-informed drug development → simulation scenario → posterior predictive check → dose optimization → exposure target → covariate stratification → model qualification → scenario analysis**.

## 1. mechanistic model /ˌmɛkəˈnɪstɪk ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that represents a system through proposed biological or physical mechanisms rather than only empirical correlations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model mô tả cơ chế bên trong, như absorption, binding và clearance, thay vì chỉ fit một đường cong.
**Grammar & collocations:** `mechanistic pharmacology model` — model dược lý cơ chế; `build a mechanistic model` — xây model.
**Examples:** `The mechanistic model linked tissue binding to the drug's delayed effect.` → Mechanistic model nối binding mô với tác dụng chậm của thuốc.
**Liên kết tiếng Hàn:** `기전론적 모델`.

## 2. ordinary differential equation /ˈɔrdəˌnɛri ˌdɪfəˈrɛnʃəl ɪˈkweɪʒən/
**Part of speech:** noun
**Core meaning (English):** an equation describing how one or more quantities change with respect to a single independent variable, usually time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương trình mô tả lượng thuốc đổi theo thời gian trong từng compartment.
**Grammar & collocations:** `ODE system` — hệ ODE; `solve an ordinary differential equation` — giải ODE.
**Examples:** `The model used an ordinary differential equation for each drug compartment.` → Model dùng một ODE cho mỗi compartment thuốc.
**Liên kết tiếng Hàn:** `상미분방정식`.

## 3. parameter identifiability /pəˈræmətər aɪˌdɛntəfəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the degree to which available data can uniquely determine a model parameter.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data có đủ thông tin để phân biệt một parameter thật sự hay nhiều giá trị đều fit được không.
**Grammar & collocations:** `structural identifiability` — identifiability cấu trúc; `assess parameter identifiability` — đánh giá.
**Examples:** `Sparse sampling weakened parameter identifiability for the slow distribution phase.` → Lấy mẫu thưa làm yếu identifiability của pha phân bố chậm.
**Liên kết tiếng Hàn:** `매개변수 식별 가능성`.

## 4. parameter estimation /pəˈræmətər ˌɛstəˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of estimating model values from observed experimental or clinical data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm giá trị parameter khiến model phù hợp với concentration hoặc response đo được.
**Grammar & collocations:** `population parameter estimation` — estimation cấp quần thể; `estimate model parameters` — ước tính.
**Examples:** `Parameter estimation used concentration data from three dose levels.` → Parameter estimation dùng data concentration của ba mức liều.
**Liên kết tiếng Hàn:** `매개변수 추정`.

## 5. local sensitivity analysis /ˈloʊkəl ˌsɛnsəˈtɪvəti əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** analysis of how small changes around a chosen parameter set affect model outputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi parameter một chút quanh giá trị hiện tại để xem output nhạy với gì.
**Grammar & collocations:** `sensitivity coefficient` — coefficient sensitivity; `run a local sensitivity analysis` — chạy.
**Examples:** `Local sensitivity analysis showed that clearance dominated the late concentration profile.` → Phân tích sensitivity cục bộ cho thấy clearance chi phối profile cuối.
**Liên kết tiếng Hàn:** `국소 민감도 분석`.

## 6. virtual population /ˈvɝtʃuəl ˌpɑpjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** a simulated set of individuals whose biological parameters vary within realistic ranges.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quần thể bệnh nhân ảo, mỗi người có weight, age, organ function và parameter khác nhau.
**Grammar & collocations:** `generate a virtual population` — tạo quần thể; `virtual-patient simulation` — mô phỏng.
**Examples:** `The virtual population exposed a subgroup at risk of excessive exposure.` → Virtual population lộ subgroup có nguy cơ exposure quá cao.
**Liên kết tiếng Hàn:** `가상 집단`.

## 7. absorption compartment /əbˈzɔrpʃən kəmˈpɑrtmənt/
**Part of speech:** noun
**Core meaning (English):** a model compartment representing drug movement from the administration site into systemic circulation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngăn mô phỏng nơi thuốc được hấp thu trước khi vào máu.
**Grammar & collocations:** `first-order absorption compartment` — compartment hấp thu bậc một; `absorption-rate constant` — hằng số tốc độ.
**Examples:** `The oral model added an absorption compartment before the central compartment.` → Model uống thêm absorption compartment trước central compartment.
**Liên kết tiếng Hàn:** `흡수 구획`.

## 8. distribution compartment /ˌdɪstrəˈbjuːʃən kəmˈpɑrtmənt/
**Part of speech:** noun
**Core meaning (English):** a model compartment representing drug movement into tissues outside the central circulation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngăn mô phỏng thuốc đi vào mô ngoại vi và quay lại máu.
**Grammar & collocations:** `peripheral distribution compartment` — compartment ngoại vi; `distribution-rate constant` — hằng số.
**Examples:** `A second distribution compartment captured the prolonged tissue phase.` → Distribution compartment thứ hai mô tả pha mô kéo dài.
**Liên kết tiếng Hàn:** `분포 구획`.

## 9. clearance pathway /ˈklɪrəns ˈpæθˌweɪ/
**Part of speech:** noun
**Core meaning (English):** a biological route through which drug leaves the body, such as renal excretion or metabolism.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** con đường loại thuốc khỏi cơ thể, gồm thận, gan hoặc enzyme cụ thể.
**Grammar & collocations:** `renal clearance pathway` — đường clearance thận; `identify a clearance pathway` — xác định.
**Examples:** `The model separated hepatic and renal clearance pathways.` → Model tách đường clearance gan và thận.
**Liên kết tiếng Hàn:** `청소 경로`.

## 10. bioavailability fraction /ˌbaɪoʊəˌveɪləˈbɪləti ˈfrækʃən/
**Part of speech:** noun
**Core meaning (English):** the fraction of an administered dose that reaches systemic circulation unchanged.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần liều thật sự vào circulation; uống thường thấp hơn tiêm vì absorption và first-pass effect.
**Grammar & collocations:** `absolute bioavailability` — bioavailability tuyệt đối; `estimate the bioavailability fraction` — ước tính.
**Examples:** `Food increased the bioavailability fraction of the oral formulation.` → Thức ăn tăng bioavailability fraction của formulation uống.
**Liên kết tiếng Hàn:** `생체이용률 분율`.

## 11. nonlinear elimination /ˌnɑnˈlɪniər ɪˌlɪməˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** drug removal that does not increase proportionally with concentration or dose.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** clearance thay đổi theo concentration vì enzyme hoặc transporter bị bão hòa.
**Grammar & collocations:** `capacity-limited elimination` — elimination giới hạn capacity; `nonlinear-elimination model` — model.
**Examples:** `Nonlinear elimination caused exposure to rise more than proportionally at the higher dose.` → Nonlinear elimination khiến exposure tăng hơn tỷ lệ ở liều cao.
**Liên kết tiếng Hàn:** `비선형 제거`.

## 12. covariate effect /ˈkoʊˌveriət ɪˈfɛkt/
**Part of speech:** noun
**Core meaning (English):** the influence of a measurable patient or treatment characteristic on a model parameter or response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ảnh hưởng của age, weight, kidney function hoặc co-medication lên parameter.
**Grammar & collocations:** `body-weight covariate effect` — effect theo cân nặng; `test a covariate effect` — kiểm tra.
**Examples:** `Kidney function had a strong covariate effect on clearance.` → Chức năng thận có covariate effect mạnh lên clearance.
**Liên kết tiếng Hàn:** `공변량 효과`.

## 13. model-informed drug development /ˈmɑdəl ɪnˈfɔrmd drʌɡ dɪˈvɛləpmənt/
**Part of speech:** noun
**Core meaning (English):** the use of quantitative models to guide decisions about drug dose, trials, and development strategy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng model định lượng để chọn dose, thiết kế trial và giảm thử-sai.
**Grammar & collocations:** `MIDD framework` — framework MIDD; `apply model-informed drug development` — áp dụng.
**Examples:** `Model-informed drug development supported a smaller confirmatory trial.` → MIDD hỗ trợ một trial confirmatory nhỏ hơn.
**Liên kết tiếng Hàn:** `모델 기반 의약품 개발`.

## 14. simulation scenario /ˌsɪmjəˈleɪʃən səˈnɛrioʊ/
**Part of speech:** noun
**Core meaning (English):** a defined combination of patient, dose, timing, and clinical assumptions used in a model run.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một kịch bản cụ thể để model chạy, như dose cao ở bệnh nhân suy thận.
**Grammar & collocations:** `base-case simulation scenario` — scenario cơ sở; `compare scenarios` — so sánh.
**Examples:** `Each simulation scenario tested a different dosing interval.` → Mỗi simulation scenario test một khoảng cách liều khác.
**Liên kết tiếng Hàn:** `시뮬레이션 시나리오`.

## 15. posterior predictive check /pɑˈstɪriər prɪˈdɪktɪv tʃɛk/
**Part of speech:** noun
**Core meaning (English):** a comparison between observed data and data simulated from a fitted probabilistic model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model fit xong được dùng mô phỏng lại data để xem có tái hiện pattern thật không.
**Grammar & collocations:** `posterior predictive distribution` — phân phối; `perform a posterior predictive check` — thực hiện.
**Examples:** `The posterior predictive check showed that the model missed the early peak.` → Check cho thấy model bỏ lỡ peak sớm.
**Liên kết tiếng Hàn:** `사후 예측 검증`.

## 16. dose optimization /doʊs ˌɑptəməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the selection of a dose and schedule that balance expected benefit, exposure, and risk.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn liều/lịch tối ưu thay vì chỉ chọn liều cao nhất.
**Grammar & collocations:** `dose-optimization algorithm` — thuật toán; `perform dose optimization` — tối ưu.
**Examples:** `Dose optimization reduced peak toxicity while preserving target coverage.` → Dose optimization giảm toxicity đỉnh mà vẫn giữ coverage target.
**Liên kết tiếng Hàn:** `용량 최적화`.

## 17. exposure target /ɪkˈspoʊʒər ˈtɑrɡət/
**Part of speech:** noun
**Core meaning (English):** a desired range or level of drug exposure associated with adequate response and acceptable risk.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng exposure mục tiêu cần đạt để đủ hiệu quả mà không quá độc.
**Grammar & collocations:** `therapeutic exposure target` — target exposure điều trị; `hit the exposure target` — đạt.
**Examples:** `The individualized dose was chosen to keep exposure near the target.` → Liều cá thể hóa được chọn để giữ exposure gần target.
**Liên kết tiếng Hàn:** `노출 목표`.

## 18. covariate stratification /ˈkoʊˌveriət ˌstrætəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** dividing a population into groups according to a patient characteristic that affects response or exposure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia nhóm theo kidney function, age hoặc weight để dose phù hợp hơn.
**Grammar & collocations:** `renal-function stratification` — stratification theo thận; `stratify by a covariate` — chia theo.
**Examples:** `Covariate stratification separated patients with normal and impaired renal function.` → Stratification tách bệnh nhân thận bình thường và suy giảm.
**Liên kết tiếng Hàn:** `공변량 층화`.

## 19. model qualification /ˈmɑdəl ˌkwɑləfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** documented evidence that a model is adequate for a stated purpose and decision context.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chứng minh model đủ tin cậy cho một mục đích cụ thể, không phải đúng tuyệt đối mọi nơi.
**Grammar & collocations:** `model-qualification report` — report; `qualify a model` — qualification.
**Examples:** `Model qualification covered predictive accuracy, limitations, and intended use.` → Qualification bao phủ độ chính xác, giới hạn và mục đích dùng.
**Liên kết tiếng Hàn:** `모델 적격성 평가`.

## 20. scenario analysis /səˈnɛrioʊ əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** systematic comparison of model outcomes under different plausible assumptions or conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so sánh nhiều giả định để xem quyết định có bền vững khi hoàn cảnh đổi không.
**Grammar & collocations:** `what-if scenario analysis` — phân tích what-if; `scenario-analysis result` — kết quả.
**Examples:** `Scenario analysis tested missed doses, delayed absorption, and changing kidney function.` → Scenario analysis test quên liều, hấp thu trễ và kidney function thay đổi.
**Liên kết tiếng Hàn:** `시나리오 분석`.

## Review in context

A **mechanistic model** uses an **ordinary differential equation** for each process, but **parameter identifiability** must be checked before **parameter estimation**. **Local sensitivity analysis** shows which inputs matter, and a **virtual population** can vary an **absorption compartment**, **distribution compartment**, **clearance pathway**, and **bioavailability fraction**. **Nonlinear elimination** and a **covariate effect** may support **model-informed drug development**. Each **simulation scenario** is checked with a **posterior predictive check**. **Dose optimization** aims for an **exposure target** through **covariate stratification**; **model qualification** documents fitness for purpose, while **scenario analysis** tests uncertainty.

**Bản dịch tiếng Việt:** **Mechanistic model** dùng **ordinary differential equation** cho từng process, nhưng phải kiểm tra **parameter identifiability** trước **parameter estimation**. **Local sensitivity analysis** cho biết input nào quan trọng, còn **virtual population** có thể thay đổi **absorption compartment**, **distribution compartment**, **clearance pathway** và **bioavailability fraction**. **Nonlinear elimination** và **covariate effect** có thể hỗ trợ **model-informed drug development**. Mỗi **simulation scenario** được kiểm tra bằng **posterior predictive check**. **Dose optimization** hướng tới **exposure target** qua **covariate stratification**; **model qualification** ghi nhận model đủ phù hợp, còn **scenario analysis** kiểm tra uncertainty.
