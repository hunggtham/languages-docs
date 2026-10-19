# C2+ Vocabulary — Scientific modeling and simulation

This lesson follows how computational models are built, checked, compared, and used to explore scenarios. The network is **agent-based model → cellular automaton → microsimulation → system dynamics model → stock-flow diagram → parameter scan → uncertainty transport → emulator model → surrogate modeling → live system replica → model-form discrepancy → structural error → code verification → solution validation → verification and validation → benchmark case → convergence study → sensitivity surface → scenario branching → ensemble spread → hindcast → real-time state estimate → downscaling → bias correction → model intercomparison**.

## 1. agent-based model /ˈeɪdʒənt beɪst ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model that represents individual agents with rules for behavior and lets system-level patterns emerge from their interactions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** agent-based model bắt đầu từ actor nhỏ và rule local, rồi xem macro pattern emerge.
**Grammar & collocations:** `agent-based-model simulation` — simulation; `model individual agents` — model; `emergent pattern` — pattern.
**Examples:** `The agent-based model simulated how households changed routes during a heat warning.` → Model simulate household đổi route trong heat warning.
**Liên kết tiếng Hàn:** `행위자 기반 모형` — agent-based model.

## 2. cellular automaton /ˈsɛljələr ɔˈtɑmətɑn/
**Part of speech:** noun
**Core meaning (English):** a grid-based model in which local update rules generate changing spatial or temporal patterns.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cellular automaton chia space thành cell và update theo local rule.
**Grammar & collocations:** `cellular-automaton rule` — rule; `update a cell` — update; `grid-based simulation` — simulation.
**Examples:** `The cellular automaton reproduced the spread of a wildfire across a lattice.` → Automaton reproduce wildfire spread trên lattice.
**Liên kết tiếng Hàn:** `세포 자동자` — cellular automaton.

## 3. microsimulation /ˌmaɪkroʊˌsɪmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** simulation that represents many individual people, households, firms, or events to estimate aggregate outcomes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** microsimulation chạy nhiều unit cá nhân rồi aggregate thành policy outcome.
**Grammar & collocations:** `microsimulation model` — model; `simulate household decisions` — simulate; `aggregate outcome` — outcome.
**Examples:** `The microsimulation estimated how a tax change would affect households at different incomes.` → Microsimulation estimate tax change theo income.
**Liên kết tiếng Hàn:** `미시 시뮬레이션` — microsimulation.

## 4. system dynamics model /ˈsɪstəm daɪˈnæmɪks ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model of stocks, flows, feedbacks, and delays that represent how a system changes over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** system dynamics model tập trung stock, flow, feedback và delay ở cấp system.
**Grammar & collocations:** `system-dynamics model` — model; `represent a feedback loop` — represent; `stock-and-flow structure` — structure.
**Examples:** `The system dynamics model showed how delayed maintenance amplified infrastructure decline.` → Model cho thấy maintenance delay amplify decline.
**Liên kết tiếng Hàn:** `시스템 다이내믹스 모형` — system dynamics model.

## 5. stock-flow diagram /stɑk floʊ ˈdaɪəˌɡræm/
**Part of speech:** noun
**Core meaning (English):** a diagram showing quantities that accumulate as stocks and the rates that add to or remove them as flows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** stock-flow diagram vẽ quantity tích lũy và flow làm nó tăng/giảm.
**Grammar & collocations:** `stock-flow diagram` — diagram; `accumulate a stock` — accumulate; `flow rate` — rate.
**Examples:** `The stock-flow diagram linked reservoir storage to inflow, demand, and evaporation.` → Diagram nối reservoir stock với inflow, demand và evaporation.
**Liên kết tiếng Hàn:** `저량-유량 도표` — stock-flow diagram.

## 6. parameter scan /pəˈræmətər skæn/
**Part of speech:** noun
**Core meaning (English):** systematic evaluation of a model across a range of parameter values to reveal sensitivity, thresholds, or regimes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parameter scan chạy model qua nhiều value để tìm sensitivity và threshold.
**Grammar & collocations:** `parameter-scan experiment` — experiment; `scan a parameter range` — scan; `threshold behavior` — behavior.
**Examples:** `A parameter scan identified a narrow region in which the epidemic became self-sustaining.` → Scan tìm region hẹp epidemic tự sustain.
**Liên kết tiếng Hàn:** `매개변수 스캔` — parameter scan.

## 7. uncertainty transport /ʌnˈsɜrtənti ˈtrænspɔrt/
**Part of speech:** noun
**Core meaning (English):** propagation of uncertainty from inputs, assumptions, or parameters through a model to its outputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** uncertainty transport theo dõi uncertainty đi từ input/assumption sang output.
**Grammar & collocations:** `uncertainty-transport analysis` — analysis; `transport uncertainty through a model` — transport; `output interval` — interval.
**Examples:** `Uncertainty transport widened the projected flood range after rainfall variance was updated.` → Transport làm flood range rộng hơn.
**Liên kết tiếng Hàn:** `불확실성 전파` — uncertainty transport.

## 8. emulator model /ˈɛmjəˌleɪtər ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a fast statistical approximation of an expensive simulator, trained to reproduce its input–output behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** emulator model là bản nhanh của simulator đắt, dùng để explore nhiều scenario.
**Grammar & collocations:** `emulator-model surrogate` — surrogate; `emulate a simulator` — emulate; `expensive forward model` — model.
**Examples:** `The emulator model made thousands of policy scenarios computationally feasible.` → Emulator làm hàng nghìn scenario khả thi.
**Liên kết tiếng Hàn:** `에뮬레이터 모형` — emulator model.

## 9. surrogate modeling /ˈsɜrəɡət ˈmɑdəlɪŋ/
**Part of speech:** noun
**Core meaning (English):** construction and use of a simpler model that stands in for a costly, inaccessible, or slow computational model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** surrogate modeling xây model thay thế để giảm cost, nhưng phải check transfer.
**Grammar & collocations:** `surrogate-modeling workflow` — workflow; `stand in for a simulator` — stand in; `reduced computation` — computation.
**Examples:** `Surrogate modeling allowed uncertainty analysis around a complex combustion code.` → Surrogate modeling cho phép uncertainty analysis quanh combustion code.
**Liên kết tiếng Hàn:** `대리 모델링` — surrogate modeling.

## 10. live system replica /laɪv ˈsɪstəm ˈrɛplɪkə/
**Part of speech:** noun
**Core meaning (English):** a continuously updated digital representation of an operating physical or social system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** live system replica cập nhật theo data thật để mirror system đang chạy.
**Grammar & collocations:** `live-system replica` — replica; `update a digital representation` — update; `real-time feed` — feed.
**Examples:** `The live system replica displayed the plant's current energy use and predicted bottlenecks.` → Replica hiển thị energy use hiện tại và bottleneck dự đoán.
**Liên kết tiếng Hàn:** `실시간 시스템 복제본` — live system replica.

## 11. model-form discrepancy /ˈmɑdəl fɔrm dɪˈskrɛpənsi/
**Part of speech:** noun
**Core meaning (English):** systematic difference between a model's structural assumptions and the behavior of the target system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model-form discrepancy là mismatch do structure/assumption sai, không chỉ parameter noise.
**Grammar & collocations:** `model-form discrepancy term` — term; `diagnose structural mismatch` — diagnose; `target-system behavior` — behavior.
**Examples:** `Model-form discrepancy explained why better calibration did not fix the seasonal error.` → Discrepancy giải thích calibration tốt vẫn không sửa seasonal error.
**Liên kết tiếng Hàn:** `모형 형태 불일치` — model-form discrepancy.

## 12. structural error /ˈstrʌktʃərəl ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** error caused by an incorrect model structure, missing pathway, or wrong functional relationship.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** structural error nằm ở architecture của model, không phải chỉ value parameter.
**Grammar & collocations:** `structural-error diagnosis` — diagnosis; `omit a pathway` — omit; `wrong functional form` — form.
**Examples:** `The forecast bias was a structural error caused by omitting groundwater recharge.` → Forecast bias là structural error do omit recharge.
**Liên kết tiếng Hàn:** `구조적 오류` — structural error.

## 13. code verification /koʊd ˌvɛrəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** checking that software implements the intended equations, algorithms, and numerical procedures correctly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code verification hỏi code có implement đúng model/maths không.
**Grammar & collocations:** `code-verification test` — test; `verify an implementation` — verify; `unit test` — test.
**Examples:** `Code verification caught a sign error in the diffusion routine.` → Verification bắt sign error trong diffusion routine.
**Liên kết tiếng Hàn:** `코드 검증` — code verification.

## 14. solution validation /səˈluːʃən ˌvæləˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** checking whether a computed solution adequately represents the behavior of the intended real-world system for its purpose.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** solution validation hỏi output computed có đủ represent reality cho purpose không.
**Grammar & collocations:** `solution-validation benchmark` — benchmark; `validate a solution` — validate; `real-world observation` — observation.
**Examples:** `Solution validation compared the simulated plume with measurements from the river.` → Validation compare plume simulated với river measurement.
**Liên kết tiếng Hàn:** `해 검증` — solution validation.

## 15. verification and validation /ˌvɛrəfəˈkeɪʃən ænd ˌvæləˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the paired practice of checking whether a model is implemented correctly and whether it is fit for its intended real-world use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** verification hỏi “build đúng model chưa?”, validation hỏi “model có đúng target/use không?”.
**Grammar & collocations:** `verification-and-validation plan` — plan; `verify and validate` — verify; `fitness for purpose` — fitness.
**Examples:** `The project required verification and validation before the model informed emergency planning.` → Project cần V&V trước emergency planning.
**Liên kết tiếng Hàn:** `검증 및 타당화` — verification and validation.

## 16. benchmark case /ˈbɛntʃmɑrk keɪs/
**Part of speech:** noun
**Core meaning (English):** a standard problem with a trusted solution or behavior used to test a model, code, or algorithm.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** benchmark case là bài test chuẩn để so code/model với known behavior.
**Grammar & collocations:** `benchmark-case library` — library; `test against a benchmark` — test; `trusted solution` — solution.
**Examples:** `The solver reproduced the benchmark case before it was applied to the new geometry.` → Solver reproduce benchmark trước geometry mới.
**Liên kết tiếng Hàn:** `벤치마크 사례` — benchmark case.

## 17. convergence study /kənˈvɜrdʒəns ˈstʌdi/
**Part of speech:** noun
**Core meaning (English):** a study of how a numerical solution changes as grid size, time step, sample size, or computational resolution is refined.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** convergence study xem output ổn định khi resolution/grid/time step được refine.
**Grammar & collocations:** `convergence-study result` — result; `refine a mesh` — refine; `converged solution` — solution.
**Examples:** `The convergence study showed that doubling the grid no longer changed the plume location materially.` → Study cho thấy refine thêm không đổi plume đáng kể.
**Liên kết tiếng Hàn:** `수렴 연구` — convergence study.

## 18. sensitivity surface /ˌsɛnsəˈtɪvəti ˈsɜrfɪs/
**Part of speech:** noun
**Core meaning (English):** a multidimensional representation of how an output changes across combinations of input parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sensitivity surface cho thấy output đổi theo nhiều parameter cùng lúc, không chỉ từng parameter riêng.
**Grammar & collocations:** `sensitivity-surface plot` — plot; `map parameter interactions` — map; `output response` — response.
**Examples:** `The sensitivity surface exposed a ridge where two parameters compensated for each other.` → Surface lộ ridge nơi hai parameter bù nhau.
**Liên kết tiếng Hàn:** `민감도 표면` — sensitivity surface.

## 19. scenario branching /səˈnɛrioʊ ˈbræntʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** creation of alternative model pathways from a shared starting point to represent different assumptions or decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** scenario branching tách future theo assumption/decision khác nhau từ cùng baseline.
**Grammar & collocations:** `scenario-branching tree` — tree; `branch a pathway` — branch; `alternative assumption` — assumption.
**Examples:** `Scenario branching compared a conservation pathway with a high-demand pathway.` → Branching compare conservation và high-demand pathway.
**Liên kết tiếng Hàn:** `시나리오 분기` — scenario branching.

## 20. ensemble spread /ɑnˈsɑmbəl sprɛd/
**Part of speech:** noun
**Core meaning (English):** the range or dispersion of outputs across members of a model ensemble.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ensemble spread biểu diễn model/initial-condition uncertainty qua range output.
**Grammar & collocations:** `ensemble-spread estimate` — estimate; `spread across runs` — spread; `ensemble member` — member.
**Examples:** `Ensemble spread widened after the models entered the uncertain transition regime.` → Spread rộng hơn ở transition regime.
**Liên kết tiếng Hàn:** `앙상블 분산` — ensemble spread.

## 21. hindcast /ˈhaɪndˌkæst/
**Part of speech:** noun
**Core meaning (English):** a retrospective prediction made for a past period using only information that would have been available at that time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hindcast giả lập forecast quá khứ với information khi đó, để test model.
**Grammar & collocations:** `hindcast evaluation` — evaluation; `run a hindcast` — run; `historical period` — period.
**Examples:** `The hindcast reproduced the drought onset three months before the observed peak.` → Hindcast reproduce drought onset trước peak.
**Liên kết tiếng Hàn:** `과거 예측` — hindcast.

## 22. real-time state estimate /riːəl taɪm steɪt ˈɛstəmət/
**Part of speech:** noun
**Core meaning (English):** an estimate of a system's current hidden state produced as observations arrive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** real-time state estimate infer state hiện tại từ streaming observation và model.
**Grammar & collocations:** `real-time-state estimate` — estimate; `update a hidden state` — update; `streaming observation` — observation.
**Examples:** `The real-time state estimate detected a pressure anomaly before the alarm threshold was crossed.` → Estimate phát hiện anomaly trước alarm.
**Liên kết tiếng Hàn:** `실시간 상태 추정` — real-time state estimate.

## 23. downscaling /ˈdaʊnˌskeɪlɪŋ/
**Part of speech:** noun
**Core meaning (English):** conversion of coarse-resolution model information into estimates at a finer spatial or temporal scale.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** downscaling đưa climate/global output xuống local scale có ích cho planning.
**Grammar & collocations:** `statistical downscaling` — downscaling; `downscale a projection` — downscale; `fine-resolution estimate` — estimate.
**Examples:** `Downscaling translated the regional climate projection into neighborhood heat maps.` → Downscaling biến projection thành heat map neighborhood.
**Liên kết tiếng Hàn:** `다운스케일링` — downscaling.

## 24. bias correction /ˈbaɪəs kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** adjustment of systematic model error using reference observations or a calibration relationship.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bias correction adjust systematic lệch của model bằng observation reference, nhưng không chữa mọi structural error.
**Grammar & collocations:** `bias-correction method` — method; `correct a systematic bias` — correct; `reference period` — period.
**Examples:** `Bias correction aligned the simulated temperature distribution with the station record.` → Correction align temperature distribution với station record.
**Liên kết tiếng Hàn:** `편향 보정` — bias correction.

## 25. model intercomparison /ˈmɑdəl ˌɪntərkəmˈpɛrɪsən/
**Part of speech:** noun
**Core meaning (English):** systematic comparison of multiple models using common inputs, outputs, metrics, or scenarios.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model intercomparison đặt nhiều model trên cùng protocol để thấy agreement và divergence.
**Grammar & collocations:** `model-intercomparison project` — project; `compare model outputs` — compare; `common evaluation protocol` — protocol.
**Examples:** `The model intercomparison revealed that flood timing was more robust than flood magnitude.` → Intercomparison cho thấy timing robust hơn magnitude.
**Liên kết tiếng Hàn:** `모형 상호 비교` — model intercomparison.

## Review in context

An **agent-based model**, **cellular automaton**, **microsimulation**, or **system dynamics model** can represent different levels of a system; a **stock-flow diagram** makes accumulation explicit. A **parameter scan**, **uncertainty transport**, **emulator model**, and **surrogate modeling** explore expensive simulations, while a **live system replica** follows an operating target. **Model-form discrepancy** and **structural error** require more than calibration. **Code verification**, **solution validation**, and **verification and validation** use a **benchmark case**, a **convergence study**, and a **sensitivity surface**. **Scenario branching** and **ensemble spread** represent alternative futures. A **hindcast** tests historical skill, a **real-time state estimate** updates the present, **downscaling** moves information to finer scales, **bias correction** addresses systematic offsets, and **model intercomparison** compares competing systems.

**Bản dịch tiếng Việt:**

**Agent-based model**, **cellular automaton**, **microsimulation** hoặc **system dynamics model** biểu diễn các level khác nhau; **stock-flow diagram** làm accumulation rõ. **Parameter scan**, **uncertainty transport**, **emulator model** và **surrogate modeling** explore simulation đắt, còn **live system replica** theo dõi target đang vận hành. **Model-form discrepancy** và **structural error** cần hơn calibration. **Code verification**, **solution validation** và **verification and validation** dùng **benchmark case**, **convergence study** và **sensitivity surface**. **Scenario branching** và **ensemble spread** biểu diễn future khác nhau. **Hindcast** test historical skill, **real-time state estimate** cập nhật hiện tại, **downscaling** đưa information xuống scale nhỏ, **bias correction** xử lý systematic offset và **model intercomparison** so sánh model cạnh tranh.
