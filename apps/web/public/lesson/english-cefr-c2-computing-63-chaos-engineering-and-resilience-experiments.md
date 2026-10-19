# C2 Vocabulary — Chaos engineering and resilience experiments

This lesson follows a controlled failure experiment from hypothesis and blast-radius limits through recovery evidence and organizational learning.

Flow: **chaos experiment hypothesis → fault injection plan → blast-radius control → steady-state hypothesis → resilience game day → failure-domain targeting → recovery-point test → recovery-time objective test → degraded-mode contract → load-shedding drill → dependency blackhole → latency injection → packet-loss experiment → clock-failure drill → region evacuation → rollback confidence → resilience scorecard → fault budget → experiment stop condition → recovery validation metric**.

## 1. chaos experiment hypothesis /ˈkeɪɑs ɪkˈspɛrəmənt haɪˈpɑθəsɪs/
**Part of speech:** noun
**Core meaning (English):** a testable statement about how a system should behave when a chosen failure is introduced.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giả thuyết kiểm chứng khi cố ý tạo lỗi.
**Grammar & collocations:** `chaos-experiment-hypothesis review` — review; `state an expected invariant` — nêu.
**Examples:** `The chaos experiment hypothesis predicted that checkout would remain usable during cache loss.` → Hypothesis dự đoán checkout vẫn dùng được.
**Liên kết tiếng Hàn:** `카오스 실험 가설`.

## 2. fault injection plan /fɔlt ɪnˈdʒɛkʃən plæn/
**Part of speech:** noun
**Core meaning (English):** a controlled procedure specifying which failure to create, where, when, and under what safeguards.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kế hoạch tạo lỗi có phạm vi và safeguard.
**Grammar & collocations:** `fault-injection-plan approval` — approval; `inject a bounded failure` — đưa vào.
**Examples:** `The fault injection plan limited the experiment to one canary tenant.` → Plan giới hạn vào một tenant canary.
**Liên kết tiếng Hàn:** `결함 주입 계획`.

## 3. blast-radius control /blæst ˈreɪdiəs kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** a mechanism that limits how far an experiment's failure can spread.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế khoanh phạm vi lỗi thử nghiệm.
**Grammar & collocations:** `blast-radius-control boundary` — boundary; `cap affected workloads` — giới hạn.
**Examples:** `Blast-radius control stopped the injected outage at the staging network edge.` → Control chặn outage ở biên staging.
**Liên kết tiếng Hàn:** `영향 범위 제어`.

## 4. steady-state hypothesis /ˈstɛdi steɪt haɪˈpɑθəsɪs/
**Part of speech:** noun
**Core meaning (English):** an explicit claim about normal service behavior against which experimental degradation is compared.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô tả trạng thái bình thường làm mốc so sánh.
**Grammar & collocations:** `steady-state-hypothesis metric` — metric; `define normal latency` — định nghĩa.
**Examples:** `The steady-state hypothesis specified an error rate below one percent before the fault.` → Hypothesis đặt error rate nền dưới một phần trăm.
**Liên kết tiếng Hàn:** `정상 상태 가설`.

## 5. resilience game day /rɪˈzɪliəns ɡeɪm deɪ/
**Part of speech:** noun
**Core meaning (English):** a planned exercise in which teams rehearse response to realistic operational failures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngày diễn tập sự cố và hồi phục.
**Grammar & collocations:** `resilience-game-day briefing` — briefing; `rehearse an escalation path` — diễn tập.
**Examples:** `The resilience game day exposed uncertainty about who could authorize a regional failover.` → Game day lộ ai có quyền failover.
**Liên kết tiếng Hàn:** `복원력 게임 데이`.

## 6. failure-domain targeting /ˈfeɪljər doʊˈmeɪn ˈtɑrɡətɪŋ/
**Part of speech:** noun
**Core meaning (English):** selecting a specific infrastructure or organizational boundary in which to introduce a fault.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn domain lỗi cụ thể để thử.
**Grammar & collocations:** `failure-domain-targeting rule` — rule; `target one availability zone` — chọn.
**Examples:** `Failure-domain targeting isolated the test to one rack rather than the whole region.` → Targeting giới hạn vào một rack.
**Liên kết tiếng Hàn:** `장애 도메인 타겟팅`.

## 7. recovery-point test /rɪˈkʌvəri pɔɪnt tɛst/
**Part of speech:** noun
**Core meaning (English):** a test of how much recent data can be recovered after a failure or restoration event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test lượng data mới nhất còn khôi phục được.
**Grammar & collocations:** `recovery-point-test result` — result; `measure lost writes` — đo.
**Examples:** `The recovery-point test found a twelve-minute gap in replicated transactions.` → Test lộ gap mười hai phút.
**Liên kết tiếng Hàn:** `복구 지점 테스트`.

## 8. recovery-time objective test /rɪˈkʌvəri taɪm əbˈdʒɛktɪv tɛst/
**Part of speech:** noun
**Core meaning (English):** a test of whether service can be restored within the maximum acceptable outage duration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test thời gian phục hồi có đạt RTO.
**Grammar & collocations:** `recovery-time-objective-test evidence` — evidence; `time a restoration path` — bấm giờ.
**Examples:** `The recovery-time objective test failed because DNS propagation consumed the remaining budget.` → Test fail vì DNS chiếm thời gian.
**Liên kết tiếng Hàn:** `복구 시간 목표 테스트`.

## 9. degraded-mode contract /dɪˈɡreɪdɪd moʊd ˈkɑntrækt/
**Part of speech:** noun
**Core meaning (English):** an explicit promise about which reduced functions remain available during partial failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** contract định nghĩa chức năng còn lại khi lỗi một phần.
**Grammar & collocations:** `degraded-mode-contract guarantee` — guarantee; `serve a reduced response` — phục vụ.
**Examples:** `The degraded-mode contract allowed order lookup but disabled personalized recommendations.` → Contract giữ lookup, tắt recommendation.
**Liên kết tiếng Hàn:** `저하 모드 계약`.

## 10. load-shedding drill /loʊd ˈʃɛdɪŋ drɪl/
**Part of speech:** noun
**Core meaning (English):** an exercise that tests deliberate rejection or reduction of work under overload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** diễn tập bỏ bớt tải khi quá tải.
**Grammar & collocations:** `load-shedding-drill scenario` — scenario; `preserve critical requests` — giữ.
**Examples:** `The load-shedding drill verified that health checks survived while reports were rejected.` → Drill xác minh health check vẫn sống.
**Liên kết tiếng Hàn:** `부하 차단 훈련`.

## 11. dependency blackhole /dɪˈpɛndənsi ˈblækˌhoʊl/
**Part of speech:** noun
**Core meaning (English):** an experiment that makes a dependency silently accept or discard requests without returning useful responses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dependency nuốt request, không phản hồi hữu ích.
**Grammar & collocations:** `dependency-blackhole injection` — injection; `observe timeout behavior` — quan sát.
**Examples:** `The dependency blackhole revealed that callers had no bounded timeout or fallback.` → Blackhole lộ caller không timeout/fallback.
**Liên kết tiếng Hàn:** `종속성 블랙홀`.

## 12. latency injection /ˈleɪtənsi ɪnˈdʒɛkʃən/
**Part of speech:** noun
**Core meaning (English):** deliberate addition of delay to test system behavior under slow dependencies or networks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cố ý thêm delay để thử hệ thống chậm.
**Grammar & collocations:** `latency-injection profile` — profile; `add a variable delay` — thêm.
**Examples:** `Latency injection triggered a queue buildup that ordinary load tests had missed.` → Injection gây queue buildup.
**Liên kết tiếng Hàn:** `지연 주입`.

## 13. packet-loss experiment /ˈpækɪt lɔs ɪkˈspɛrəmənt/
**Part of speech:** noun
**Core meaning (English):** a controlled test that drops network packets to examine retry, timeout, and degradation behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thử mất packet có kiểm soát.
**Grammar & collocations:** `packet-loss-experiment rate` — rate; `drop a bounded fraction` — bỏ.
**Examples:** `The packet-loss experiment exposed duplicate writes from an unsafe retry loop.` → Experiment lộ write trùng.
**Liên kết tiếng Hàn:** `패킷 손실 실험`.

## 14. clock-failure drill /klɑk ˈfeɪljər drɪl/
**Part of speech:** noun
**Core meaning (English):** an exercise that tests system behavior when time sources become unavailable, inaccurate, or inconsistent.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** diễn tập lỗi nguồn thời gian.
**Grammar & collocations:** `clock-failure-drill checklist` — checklist; `fail over to holdover time` — chuyển.
**Examples:** `The clock-failure drill found that certificate validation broke when nodes disagreed about time.` → Drill lộ validation certificate fail.
**Liên kết tiếng Hàn:** `시계 장애 훈련`.

## 15. region evacuation /ˈriːdʒən ɪˌvækjuˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** deliberately moving traffic and workloads away from a region to test continuity and restoration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chủ động chuyển workload khỏi region.
**Grammar & collocations:** `region-evacuation plan` — plan; `drain a regional cluster` — rút.
**Examples:** `Region evacuation showed that one stateful service could not yet follow its users.` → Evacuation lộ service stateful chưa theo user.
**Liên kết tiếng Hàn:** `리전 대피`.

## 16. rollback confidence /ˈroʊlˌbæk ˈkɑnfədəns/
**Part of speech:** noun
**Core meaning (English):** evidence that a deployment can be safely returned to a previous version if an experiment or release fails.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức tin cậy khi quay về version cũ.
**Grammar & collocations:** `rollback-confidence assessment` — assessment; `restore a known-good release` — phục hồi.
**Examples:** `Rollback confidence was low because the migration had already removed an old field.` → Confidence thấp vì migration xóa field cũ.
**Liên kết tiếng Hàn:** `롤백 신뢰도`.

## 17. resilience scorecard /rɪˈzɪliəns ˈskɔrˌkɑrd/
**Part of speech:** noun
**Core meaning (English):** a structured summary of resilience capabilities, observed gaps, recovery evidence, and follow-up actions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảng tổng hợp năng lực và gap resilience.
**Grammar & collocations:** `resilience-scorecard review` — review; `rank unresolved weaknesses` — xếp hạng.
**Examples:** `The resilience scorecard showed strong detection but weak cross-region recovery.` → Scorecard cho thấy detect mạnh nhưng recovery yếu.
**Liên kết tiếng Hàn:** `복원력 스코어카드`.

## 18. fault budget /fɔlt ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a bounded allowance for controlled failures or reliability risk that a team may spend on learning.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách lỗi được phép dùng để học.
**Grammar & collocations:** `fault-budget policy` — policy; `spend an experiment allowance` — dùng.
**Examples:** `The team paused experiments after the fault budget was consumed by an unrelated outage.` → Team dừng khi budget đã dùng.
**Liên kết tiếng Hàn:** `장애 예산`.

## 19. experiment stop condition /ɪkˈspɛrəmənt stɑp kənˈdɪʃən/
**Part of speech:** noun
**Core meaning (English):** a predefined observation that requires a resilience experiment to pause or terminate immediately.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện buộc dừng thử nghiệm.
**Grammar & collocations:** `experiment-stop-condition alert` — alert; `abort on customer impact` — dừng.
**Examples:** `The experiment stop condition fired when error rates crossed the customer-impact threshold.` → Stop condition kích hoạt khi error vượt threshold.
**Liên kết tiếng Hàn:** `실험 중지 조건`.

## 20. recovery validation metric /rɪˈkʌvəri ˌvæləˈdeɪʃən ˈmɛtrɪk/
**Part of speech:** noun
**Core meaning (English):** a measurable criterion used to confirm that restored service is healthy and functionally complete.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metric xác nhận service phục hồi đầy đủ.
**Grammar & collocations:** `recovery-validation-metric threshold` — threshold; `verify business invariants` — xác minh.
**Examples:** `The recovery validation metric included successful writes, queue age, and customer-visible latency.` → Metric gồm write thành công, queue age và latency.
**Liên kết tiếng Hàn:** `복구 검증 지표`.

## Review in context

A **chaos experiment hypothesis** is tested with a **fault injection plan**, **blast-radius control**, and **steady-state hypothesis** during a **resilience game day**. **Failure-domain targeting**, a **recovery-point test**, and a **recovery-time objective test** evaluate a **degraded-mode contract** and **load-shedding drill**. A **dependency blackhole**, **latency injection**, **packet-loss experiment**, **clock-failure drill**, and **region evacuation** expose gaps. **Rollback confidence**, a **resilience scorecard**, **fault budget**, **experiment stop condition**, and **recovery validation metric** govern learning.

**Bản dịch tiếng Việt:** **Chaos experiment hypothesis** được thử với **fault injection plan**, **blast-radius control** và **steady-state hypothesis** trong **resilience game day**. **Failure-domain targeting**, **recovery-point test** và **recovery-time objective test** đánh giá **degraded-mode contract** và **load-shedding drill**. **Dependency blackhole**, **latency injection**, **packet-loss experiment**, **clock-failure drill** và **region evacuation** lộ khoảng trống. **Rollback confidence**, **resilience scorecard**, **fault budget**, **experiment stop condition** và **recovery validation metric** điều phối việc học.
