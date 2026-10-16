# C2 Vocabulary — Durable workflow and saga orchestration

This lesson follows a long-running workflow from definition and coordination through retries, approval, cancellation, and replay-safe completion.

Flow: **workflow definition → saga coordinator → activity retry → idempotency fence → human approval gate → execution token → child workflow → fan-in join → timeout transition → cancellation propagation → state transition → terminal state → replay determinism → workflow signal → activity heartbeat → execution history → workflow lease → step output → workflow version → pause token**.

## 1. workflow definition /ˈwɜːrkfloʊ ˌdefɪˈnɪʃən/
**Part of speech:** noun
**Core meaning (English):** a declarative description of steps, dependencies, inputs, outputs, and failure behavior in a long-running process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô tả khai báo về step, dependency, input, output và failure của process dài.
**Grammar & collocations:** `workflow-definition schema` — schema; `declare a compensation path` — khai báo.
**Examples:** `The workflow definition described how an approved refund moved through finance and shipping.` → Definition mô tả refund qua finance và shipping.
**Liên kết tiếng Hàn:** `워크플로 정의`.

## 2. saga coordinator /ˈsɑːɡə koʊˈɔːrdəneɪtər/
**Part of speech:** noun
**Core meaning (English):** a component coordinating local transactions and compensating actions across a distributed business process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component điều phối transaction cục bộ và action bù trong process phân tán.
**Grammar & collocations:** `saga-coordinator state` — state; `invoke a compensating operation` — gọi.
**Examples:** `The saga coordinator released the reservation after the payment participant failed.` → Coordinator giải phóng reservation khi payment fail.
**Liên kết tiếng Hàn:** `사가 코디네이터`.

## 3. activity retry /ækˈtɪvəti riˈtraɪ/
**Part of speech:** noun
**Core meaning (English):** repeating one external or computational workflow activity after a transient failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy lại activity external/compute sau lỗi tạm thời.
**Grammar & collocations:** `activity-retry limit` — giới hạn; `back off before another attempt` — lùi.
**Examples:** `The activity retry handled a temporary shipping API outage without restarting the whole workflow.` → Retry xử lý outage API mà không restart workflow.
**Liên kết tiếng Hàn:** `활동 재시도`.

## 4. idempotency fence /ˌɪdəmpoʊˈtensi fens/
**Part of speech:** noun
**Core meaning (English):** a durable check preventing a retried workflow activity from applying its effect twice.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** check bền ngăn activity retry áp dụng effect hai lần.
**Grammar & collocations:** `idempotency-fence key` — key; `reject a duplicate execution` — từ chối.
**Examples:** `The idempotency fence stopped a retried charge from creating a second payment.` → Fence ngăn charge retry tạo payment thứ hai.
**Liên kết tiếng Hàn:** `멱등성 펜스`.

## 5. human approval gate /ˈhjuːmən əˈpruːvəl ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** a workflow checkpoint that waits for an authorized person's decision before continuing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** checkpoint chờ quyết định của người có quyền trước khi chạy tiếp.
**Grammar & collocations:** `human-approval-gate timeout` — timeout; `approve a high-risk action` — duyệt.
**Examples:** `The human approval gate paused the account closure until compliance reviewed the evidence.` → Gate dừng đóng account đến khi compliance review.
**Liên kết tiếng Hàn:** `인간 승인 게이트`.

## 6. execution token /ˌeksɪˈkjuːʃən ˈtoʊkən/
**Part of speech:** noun
**Core meaning (English):** a credential or lease proving that a worker may perform a specific workflow task.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** credential/lease chứng minh worker được làm task cụ thể.
**Grammar & collocations:** `execution-token expiry` — hết hạn; `claim a pending activity` — nhận.
**Examples:** `The worker renewed its execution token while processing the large export.` → Worker gia hạn token khi xử lý export.
**Liên kết tiếng Hàn:** `실행 토큰`.

## 7. child workflow /tʃaɪld ˈwɜːrkfloʊ/
**Part of speech:** noun
**Core meaning (English):** a separately tracked workflow started by a parent workflow for a bounded sub-process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** workflow riêng được parent khởi động cho subprocess giới hạn.
**Grammar & collocations:** `child-workflow identifier` — identifier; `await a sub-process` — chờ.
**Examples:** `The parent launched a child workflow to validate each regional tax record.` → Parent tạo child validate record từng vùng.
**Liên kết tiếng Hàn:** `자식 워크플로`.

## 8. fan-in join /ˈfæn ɪn dʒɔɪn/
**Part of speech:** noun
**Core meaning (English):** a synchronization point that waits for multiple parallel branches to produce their required results.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm đồng bộ chờ nhiều branch song song trả result.
**Grammar & collocations:** `fan-in-join barrier` — barrier; `combine branch outputs` — gộp.
**Examples:** `The fan-in join waited for all regional checks before issuing one compliance report.` → Join chờ check vùng trước report.
**Liên kết tiếng Hàn:** `팬인 조인`.

## 9. timeout transition /ˈtaɪmaʊt trænˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** a defined state change that occurs when a workflow step exceeds its permitted duration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** state change định trước khi step vượt duration cho phép.
**Grammar & collocations:** `timeout-transition rule` — rule; `move to manual review` — chuyển.
**Examples:** `The timeout transition moved the stalled payment to a reconciliation queue.` → Transition đưa payment đứng vào queue đối soát.
**Liên kết tiếng Hàn:** `시간 초과 전환`.

## 10. cancellation propagation /ˌkænsəˈleɪʃən ˌprɒpəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** carrying a cancellation request from a parent workflow to active child steps and external activities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lan yêu cầu hủy từ parent tới child step và activity external.
**Grammar & collocations:** `cancellation-propagation delay` — độ trễ; `stop a downstream task` — dừng.
**Examples:** `Cancellation propagation stopped the export workers after the customer withdrew the request.` → Propagation dừng worker khi customer rút request.
**Liên kết tiếng Hàn:** `취소 전파`.

## 11. state transition /steɪt trænˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** a recorded movement from one workflow state to another under a defined event or condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển state được ghi nhận theo event/condition định trước.
**Grammar & collocations:** `state-transition guard` — guard; `advance a pending case` — chuyển.
**Examples:** `The state transition changed the case from awaiting evidence to ready for review.` → Transition đổi case sang ready review.
**Liên kết tiếng Hàn:** `상태 전환`.

## 12. terminal state /ˈtɜːrmɪnəl steɪt/
**Part of speech:** noun
**Core meaning (English):** a final workflow state from which no further ordinary steps are scheduled.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** state cuối, không còn step thường được schedule.
**Grammar & collocations:** `terminal-state reason` — lý do; `mark a workflow completed` — đánh dấu.
**Examples:** `The workflow entered a terminal state after the refund and notification both succeeded.` → Workflow vào state cuối sau refund và notify.
**Liên kết tiếng Hàn:** `종료 상태`.

## 13. replay determinism /ˈriːpleɪ dɪˈtɜːrmɪnɪzəm/
**Part of speech:** noun
**Core meaning (English):** the property that replaying the same workflow history produces the same decisions and state changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** replay cùng history tạo cùng decision và state change.
**Grammar & collocations:** `replay-determinism test` — kiểm thử; `avoid a nondeterministic clock call` — tránh.
**Examples:** `Replay determinism required the workflow to derive random choices from recorded inputs.` → Determinism cần random choice từ input ghi lại.
**Liên kết tiếng Hàn:** `재생 결정성`.

## 14. workflow signal /ˈwɜːrkfloʊ ˈsɪɡnəl/
**Part of speech:** noun
**Core meaning (English):** an external message that tells a running workflow to adapt, continue, pause, or record information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** message ngoài báo workflow đang chạy thích ứng, tiếp tục, dừng hoặc ghi data.
**Grammar & collocations:** `workflow-signal handler` — handler; `send an approval signal` — gửi.
**Examples:** `The workflow signal supplied the missing account number without restarting the process.` → Signal bổ sung account number không restart.
**Liên kết tiếng Hàn:** `워크플로 신호`.

## 15. activity heartbeat /ækˈtɪvəti ˈhɑːrtbiːt/
**Part of speech:** noun
**Core meaning (English):** a periodic progress signal proving that a long-running activity is still alive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu định kỳ chứng minh activity dài vẫn sống.
**Grammar & collocations:** `activity-heartbeat timeout` — timeout; `report a processed range` — báo.
**Examples:** `The activity heartbeat prevented the coordinator from retrying a healthy archive export.` → Heartbeat ngăn retry export còn khỏe.
**Liên kết tiếng Hàn:** `활동 하트비트`.

## 16. execution history /ˌeksɪˈkjuːʃən ˈhɪstəri/
**Part of speech:** noun
**Core meaning (English):** the durable sequence of events, inputs, decisions, and outputs used to recover or replay a workflow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi bền gồm event, input, decision, output để recovery/replay.
**Grammar & collocations:** `execution-history size` — kích thước; `compact an old prefix` — nén.
**Examples:** `The execution history showed why the workflow chose manual review instead of automatic approval.` → History cho thấy lý do chọn manual review.
**Liên kết tiếng Hàn:** `실행 기록`.

## 17. workflow lease /ˈwɜːrkfloʊ liːs/
**Part of speech:** noun
**Core meaning (English):** a time-limited claim that a worker or coordinator owns responsibility for advancing a workflow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** claim có hạn chứng minh worker/coordinator sở hữu trách nhiệm tiến workflow.
**Grammar & collocations:** `workflow-lease renewal` — gia hạn; `fence an abandoned worker` — chặn.
**Examples:** `The workflow lease expired when the coordinator stopped renewing after a node failure.` → Lease hết khi coordinator không renew.
**Liên kết tiếng Hàn:** `워크플로 임대`.

## 18. step output /step ˈaʊtpʊt/
**Part of speech:** noun
**Core meaning (English):** the durable result produced by one workflow step and made available to later steps.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** result bền của một step, được step sau dùng.
**Grammar & collocations:** `step-output schema` — schema; `persist a validated result` — lưu.
**Examples:** `The step output contained the verified address needed by the shipping activity.` → Output chứa address đã verify.
**Liên kết tiếng Hàn:** `단계 출력`.

## 19. workflow version /ˈwɜːrkfloʊ ˈvɜːrʒən/
**Part of speech:** noun
**Core meaning (English):** an identified revision of workflow logic that determines how new and existing executions behave.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** revision có ID của logic workflow quyết định execution mới/cũ.
**Grammar & collocations:** `workflow-version pin` — pin; `route existing cases safely` — định tuyến.
**Examples:** `The workflow version kept existing refunds on the old compensation path during migration.` → Version giữ refund cũ ở path bù cũ.
**Liên kết tiếng Hàn:** `워크플로 버전`.

## 20. pause token /pɔːz ˈtoʊkən/
**Part of speech:** noun
**Core meaning (English):** a durable marker authorizing a workflow to remain paused until a specified event or decision occurs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** marker bền cho phép workflow pause đến event/decision cụ thể.
**Grammar & collocations:** `pause-token expiry` — hết hạn; `resume after approval` — tiếp tục.
**Examples:** `The pause token held the shipment workflow until customs documents arrived.` → Token giữ workflow đến khi có giấy hải quan.
**Liên kết tiếng Hàn:** `일시 중지 토큰`.

## Review in context

A **workflow definition** describes a process, and a **saga coordinator** manages distributed effects. **Activity retry** handles transient failure, an **idempotency fence** prevents duplicate effects, and a **human approval gate** waits for judgment. An **execution token** authorizes work; a **child workflow** and **fan-in join** structure parallel steps. A **timeout transition** changes state, **cancellation propagation** stops descendants, and a **state transition** moves the case toward a **terminal state**. **Replay determinism** makes recovery safe, a **workflow signal** carries new input, an **activity heartbeat** proves progress, and **execution history** preserves evidence. A **workflow lease** fences ownership, **step output** feeds later work, **workflow version** controls migration, and a **pause token** holds execution deliberately.

**Bản dịch tiếng Việt:** **Workflow definition** mô tả process, còn **saga coordinator** quản lý effect phân tán. **Activity retry** xử lý lỗi tạm, **idempotency fence** ngăn effect trùng, và **human approval gate** chờ quyết định. **Execution token** cấp quyền làm việc; **child workflow** và **fan-in join** tổ chức step song song. **Timeout transition** đổi state, **cancellation propagation** dừng nhánh con, và **state transition** đưa case tới **terminal state**. **Replay determinism** giúp recovery an toàn, **workflow signal** mang input mới, **activity heartbeat** chứng minh tiến độ, còn **execution history** giữ evidence. **Workflow lease** chặn ownership cũ, **step output** cấp dữ liệu cho việc sau, **workflow version** quản lý migration, và **pause token** giữ execution có chủ ý.
