# C2 Vocabulary — Robot testing and verification practice

This lesson follows a robot test program from component interfaces to long-running, adversarial, and risk-based evidence. The network is **robot software testing → robot integration testing → robot system testing → robot acceptance testing → hardware acceptance test → interface contract test → chaos testing → stress testing → soak testing → endurance testing → regression testing → scenario replay → coverage criterion → path coverage → condition coverage → requirement coverage → risk-based testing → adversarial testing → safe test mode → golden reference**.

## 1. robot software testing /ˈroʊbɑːt ˈsɔːftwer ˈtestɪŋ/
**Part of speech:** noun
**Core meaning (English):** evaluating robot software for correctness, safety, timing, and behavior under expected and unexpected conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đánh giá software robot về correctness, safety, timing và behavior trong condition thường và bất ngờ.
**Grammar & collocations:** `robot-software-testing suite` — suite; `exercise a control node` — exercise control node.
**Examples:** `Robot software testing found that a stale map could survive a process restart.` → Robot software testing phát hiện map cũ có thể còn sau process restart.
**Liên kết tiếng Hàn:** `로봇 소프트웨어 테스트`.

## 2. robot integration testing /ˈroʊbɑːt ˌɪntəˈɡreɪʃən ˈtestɪŋ/
**Part of speech:** noun
**Core meaning (English):** testing how robot components work together across their real interfaces and timing boundaries.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test component robot phối hợp qua interface và timing boundary thật.
**Grammar & collocations:** `robot-integration-testing environment` — environment; `connect perception to control` — nối perception với control.
**Examples:** `Robot integration testing exposed a timestamp mismatch between lidar and the planner.` → Robot integration testing làm lộ timestamp mismatch giữa lidar và planner.
**Liên kết tiếng Hàn:** `로봇 통합 테스트`.

## 3. robot system testing /ˈroʊbɑːt ˈsɪstəm ˈtestɪŋ/
**Part of speech:** noun
**Core meaning (English):** testing the complete robot in representative environments and missions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test toàn bộ robot trong environment và mission đại diện.
**Grammar & collocations:** `robot-system-testing campaign` — campaign; `evaluate end-to-end behavior` — đánh giá behavior end-to-end.
**Examples:** `Robot system testing measured recovery after a person unexpectedly blocked the route.` → Robot system testing đo recovery sau khi người bất ngờ chặn route.
**Liên kết tiếng Hàn:** `로봇 시스템 테스트`.

## 4. robot acceptance testing /ˈroʊbɑːt əkˈseptəns ˈtestɪŋ/
**Part of speech:** noun
**Core meaning (English):** testing that determines whether a delivered robot meets agreed operational and contractual criteria.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test quyết định robot bàn giao có đạt tiêu chí operation và contract đã thỏa thuận không.
**Grammar & collocations:** `robot-acceptance-testing protocol` — protocol; `sign off a delivery criterion` — sign off criterion bàn giao.
**Examples:** `Robot acceptance testing required ten successful pallet cycles without a safety stop.` → Robot acceptance testing yêu cầu mười cycle pallet thành công không safety stop.
**Liên kết tiếng Hàn:** `로봇 인수 테스트`.

## 5. hardware acceptance test /ˈhɑːrdwer əkˈseptəns test/
**Part of speech:** noun
**Core meaning (English):** a test confirming that physical hardware meets specified performance, safety, and interface requirements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test xác nhận hardware thật đạt performance, safety và interface requirement.
**Grammar & collocations:** `hardware-acceptance-test fixture` — fixture; `verify a rated load` — xác minh rated load.
**Examples:** `The hardware acceptance test verified braking distance with the maximum payload.` → Hardware acceptance test xác minh braking distance với payload tối đa.
**Liên kết tiếng Hàn:** `하드웨어 인수 테스트`.

## 6. interface contract test /ˈɪntərfeɪs ˈkɑːntrækt test/
**Part of speech:** noun
**Core meaning (English):** a test that checks whether two components honor their agreed data, timing, and error-handling interface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test component tôn trọng data, timing và error-handling interface đã thỏa thuận.
**Grammar & collocations:** `interface-contract-test fixture` — fixture; `validate a message schema` — validate message schema.
**Examples:** `The interface contract test rejected a camera driver that omitted the frame timestamp.` → Interface contract test reject camera driver bỏ frame timestamp.
**Liên kết tiếng Hàn:** `인터페이스 계약 테스트`.

## 7. chaos testing /ˈkeɪɑːs ˈtestɪŋ/
**Part of speech:** noun
**Core meaning (English):** deliberately introducing realistic failures or disruptions to test system resilience.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cố ý đưa failure hoặc disruption thực tế vào để test resilience của system.
**Grammar & collocations:** `chaos-testing experiment` — experiment; `terminate a dependency` — terminate dependency.
**Examples:** `Chaos testing disconnected the map service while the robot was carrying a load.` → Chaos testing ngắt map service khi robot đang mang tải.
**Liên kết tiếng Hàn:** `카오스 테스트`.

## 8. stress testing /stres ˈtestɪŋ/
**Part of speech:** noun
**Core meaning (English):** testing under unusually high load, traffic, demand, or environmental pressure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test dưới load, traffic, demand hoặc environmental pressure cao bất thường.
**Grammar & collocations:** `stress-testing profile` — profile; `drive the system beyond nominal load` — đẩy system vượt nominal load.
**Examples:** `Stress testing filled the warehouse with synthetic jobs to expose queue saturation.` → Stress testing lấp warehouse bằng job synthetic để làm lộ queue saturation.
**Liên kết tiếng Hàn:** `스트레스 테스트`.

## 9. soak testing /soʊk ˈtestɪŋ/
**Part of speech:** noun
**Core meaning (English):** running a system continuously for an extended period to reveal slow leaks, drift, or accumulation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy system liên tục lâu để lộ leak, drift hoặc accumulation chậm.
**Grammar & collocations:** `soak-testing duration` — duration; `observe long-run memory growth` — theo dõi memory growth dài hạn.
**Examples:** `Soak testing revealed a small memory leak after twelve hours of navigation.` → Soak testing phát hiện memory leak nhỏ sau mười hai giờ navigation.
**Liên kết tiếng Hàn:** `소크 테스트`.

## 10. endurance testing /ɪnˈdjʊrəns ˈtestɪŋ/
**Part of speech:** noun
**Core meaning (English):** testing repeated operation over a long usage period to assess durability and degradation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test operation lặp lại lâu để đánh giá durability và degradation.
**Grammar & collocations:** `endurance-testing cycle` — cycle; `measure wear after repeated motion` — đo wear sau motion lặp.
**Examples:** `Endurance testing showed that the gripper spring lost force after a million cycles.` → Endurance testing cho thấy spring gripper mất force sau một triệu cycle.
**Liên kết tiếng Hàn:** `내구성 테스트`.

## 11. regression testing /rɪˈɡreʃən ˈtestɪŋ/
**Part of speech:** noun
**Core meaning (English):** rerunning tests after a change to ensure previously correct behavior has not broken.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy lại test sau change để bảo đảm behavior trước đây không hỏng.
**Grammar & collocations:** `regression-testing suite` — suite; `catch an unintended behavior change` — bắt behavior change ngoài ý muốn.
**Examples:** `Regression testing caught a new planner timeout after the collision module was optimized.` → Regression testing bắt planner timeout mới sau khi collision module được optimize.
**Liên kết tiếng Hàn:** `회귀 테스트`.

## 12. scenario replay /səˈnɛrioʊ riˈpleɪ/
**Part of speech:** noun
**Core meaning (English):** rerunning recorded sensor, command, and environment events to reproduce a situation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy lại sensor, command và environment event đã ghi để tái tạo situation.
**Grammar & collocations:** `scenario-replay harness` — harness; `reproduce a field failure` — tái tạo field failure.
**Examples:** `Scenario replay reproduced the near miss with the same pedestrian timing.` → Scenario replay tái tạo near miss với pedestrian timing y hệt.
**Liên kết tiếng Hàn:** `시나리오 재생`.

## 13. coverage criterion /ˈkʌvərɪdʒ kraɪˈtɪriən/
**Part of speech:** noun
**Core meaning (English):** a rule defining which code paths, requirements, states, or scenarios count as tested.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule định nghĩa code path, requirement, state hoặc scenario nào được coi là test.
**Grammar & collocations:** `coverage-criterion threshold` — threshold; `define meaningful test completion` — định nghĩa completion test có nghĩa.
**Examples:** `The coverage criterion required every safety state and transition to be exercised.` → Coverage criterion yêu cầu exercise mọi safety state và transition.
**Liên kết tiếng Hàn:** `커버리지 기준`.

## 14. path coverage /pæθ ˈkʌvərɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the proportion of distinct execution paths exercised by a test suite.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ execution path khác nhau được test suite exercise.
**Grammar & collocations:** `path-coverage report` — report; `exercise an exception branch` — exercise branch exception.
**Examples:** `Path coverage remained low around the recovery branch that ran only after sensor loss.` → Path coverage thấp ở recovery branch chỉ chạy sau sensor loss.
**Liên kết tiếng Hàn:** `경로 커버리지`.

## 15. condition coverage /kənˈdɪʃən ˈkʌvərɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the extent to which each Boolean condition has been evaluated as both true and false.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức mỗi Boolean condition được evaluate cả true lẫn false.
**Grammar & collocations:** `condition-coverage target` — target; `exercise both sides of a guard` — exercise hai phía guard.
**Examples:** `Condition coverage showed that the low-battery branch had never been tested with a full queue.` → Condition coverage cho thấy low-battery branch chưa test khi queue đầy.
**Liên kết tiếng Hàn:** `조건 커버리지`.

## 16. requirement coverage /rɪˈkwaɪərmənt ˈkʌvərɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the degree to which each stated requirement is linked to a test or other evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức mỗi requirement được nối với test hoặc evidence khác.
**Grammar & collocations:** `requirement-coverage matrix` — matrix; `trace a requirement to a test` — trace requirement về test.
**Examples:** `Requirement coverage exposed a safety limit that had no executable acceptance test.` → Requirement coverage làm lộ safety limit chưa có acceptance test chạy được.
**Liên kết tiếng Hàn:** `요구사항 커버리지`.

## 17. risk-based testing /rɪsk beɪst ˈtestɪŋ/
**Part of speech:** noun
**Core meaning (English):** prioritizing test effort according to the likelihood and consequence of failures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ưu tiên test theo likelihood và consequence của failure.
**Grammar & collocations:** `risk-based-testing priority` — priority; `focus on a high-consequence failure` — tập trung failure consequence cao.
**Examples:** `Risk-based testing exercised emergency braking before cosmetic display behavior.` → Risk-based testing exercise emergency braking trước display cosmetic.
**Liên kết tiếng Hàn:** `위험 기반 테스트`.

## 18. adversarial testing /ˌædvərˈseriəl ˈtestɪŋ/
**Part of speech:** noun
**Core meaning (English):** testing designed to expose weaknesses by presenting difficult, deceptive, or intentionally hostile inputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test đưa input khó, đánh lừa hoặc hostile để làm lộ weakness.
**Grammar & collocations:** `adversarial-testing case` — case; `perturb a perception input` — perturb perception input.
**Examples:** `Adversarial testing placed a patterned sticker where the detector expected a plain marker.` → Adversarial testing đặt sticker có pattern nơi detector mong marker trơn.
**Liên kết tiếng Hàn:** `적대적 테스트`.

## 19. safe test mode /seɪf test moʊd/
**Part of speech:** noun
**Core meaning (English):** an operating mode that limits speed, energy, workspace, or authority while tests are running.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mode giới hạn speed, energy, workspace hoặc authority khi test.
**Grammar & collocations:** `safe-test-mode boundary` — boundary; `run a new policy at reduced speed` — chạy policy mới với speed giảm.
**Examples:** `Safe test mode allowed the new grasp policy to run with a lightweight dummy payload.` → Safe test mode cho grasp policy mới chạy với payload dummy nhẹ.
**Liên kết tiếng Hàn:** `안전 테스트 모드`.

## 20. golden reference /ˈɡoʊldən ˈrefərəns/
**Part of speech:** noun
**Core meaning (English):** a trusted output, dataset, trajectory, or configuration used as a comparison standard.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** output, dataset, trajectory hoặc configuration đáng tin dùng làm chuẩn so sánh.
**Grammar & collocations:** `golden-reference file` — file; `compare a new build against the baseline` — so build mới với baseline.
**Examples:** `The golden reference preserved the expected torque trace for the certified lift.` → Golden reference giữ torque trace expected cho lift đã certify.
**Liên kết tiếng Hàn:** `골든 레퍼런스`.

## Review in context

**Robot software testing**, **robot integration testing**, and **robot system testing** lead to **robot acceptance testing** and a **hardware acceptance test**; an **interface contract test** checks each boundary. **Chaos testing**, **stress testing**, **soak testing**, and **endurance testing** expose different failure timescales, while **regression testing** and **scenario replay** protect known behavior. A **coverage criterion** can require **path coverage**, **condition coverage**, and **requirement coverage**. **Risk-based testing** prioritizes consequence, **adversarial testing** challenges assumptions, **safe test mode** limits harm, and a **golden reference** provides a trusted comparison.

**Bản dịch tiếng Việt:** **Robot software testing**, **robot integration testing** và **robot system testing** dẫn tới **robot acceptance testing** và **hardware acceptance test**; **interface contract test** kiểm tra từng boundary. **Chaos testing**, **stress testing**, **soak testing** và **endurance testing** làm lộ failure ở các timescale khác nhau, còn **regression testing** và **scenario replay** bảo vệ behavior đã biết. **Coverage criterion** có thể yêu cầu **path coverage**, **condition coverage** và **requirement coverage**. **Risk-based testing** ưu tiên consequence, **adversarial testing** thử thách assumption, **safe test mode** giới hạn harm, còn **golden reference** cung cấp chuẩn so sánh đáng tin.
