# C2 Vocabulary — Durable workflows and task orchestration

This lesson follows a long-running workflow from dependency planning through retries, compensation, replay, and human approval.

Flow: **workflow DAG → task dependency → critical path → idempotent task → retry policy → exponential backoff → compensation step → saga orchestrator → workflow checkpoint → durable timer → event trigger → fan-out → fan-in → dynamic parallelism → exactly-once activity → deterministic replay → workflow versioning → cancellation scope → timeout budget → human task**.

## 1. workflow DAG /ˈwɝkˌfloʊ diː eɪ dʒiː/
**Part of speech:** noun
**Core meaning (English):** a directed acyclic graph representing tasks and their execution dependencies in a workflow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồ thị task không có vòng lặp, quyết định thứ tự chạy.
**Grammar & collocations:** `workflow-DAG scheduler` — scheduler; `compile a workflow graph` — biên dịch.
**Examples:** `The workflow DAG blocked shipment creation until payment authorization completed.` → DAG chặn tạo shipment tới khi authorize xong.
**Liên kết tiếng Hàn:** `워크플로 DAG`.

## 2. task dependency /tæsk dɪˈpɛndənsi/
**Part of speech:** noun
**Core meaning (English):** a relation requiring one task to wait for the result or state of another task.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** task này phải chờ task kia hoàn tất hoặc trả state.
**Grammar & collocations:** `task-dependency edge` — edge; `declare a prerequisite` — khai báo.
**Examples:** `The task dependency ensured that the invoice was generated only after tax calculation.` → Dependency bảo đảm invoice tạo sau tính thuế.
**Liên kết tiếng Hàn:** `작업 종속성`.

## 3. critical path /ˈkrɪtɪkəl pæθ/
**Part of speech:** noun
**Core meaning (English):** the longest dependency chain determining the minimum possible completion time of a workflow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi task dài nhất quyết định thời gian tối thiểu.
**Grammar & collocations:** `critical-path analysis` — analysis; `shorten the dependency chain` — rút ngắn.
**Examples:** `The team optimized the critical path instead of speeding up tasks that already ran in parallel.` → Team tối ưu critical path.
**Liên kết tiếng Hàn:** `임계 경로`.

## 4. idempotent task /ˌaɪdəmpoʊˈtɛnt tæsk/
**Part of speech:** noun
**Core meaning (English):** a task that can be executed more than once without changing the final result beyond its first successful execution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** task retry nhiều lần vẫn cho state cuối như cũ.
**Grammar & collocations:** `idempotent-task key` — key; `safely retry an activity` — retry.
**Examples:** `The idempotent task used the order ID to avoid charging the customer twice.` → Task dùng order ID để tránh charge hai lần.
**Liên kết tiếng Hàn:** `멱등 작업`.

## 5. retry policy /ˈriːtraɪ ˈpɑləsi/
**Part of speech:** noun
**Core meaning (English):** rules specifying when a failed task should run again, how often, and under which errors it should stop.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy quy định retry lúc nào và lỗi nào không retry.
**Grammar & collocations:** `retry-policy limit` — limit; `classify a transient error` — phân loại.
**Examples:** `The retry policy retried network timeouts but stopped immediately on invalid credentials.` → Policy retry timeout mạng nhưng dừng credential sai.
**Liên kết tiếng Hàn:** `재시도 정책`.

## 6. exponential backoff /ˌɛkspəˈnɛnʃəl ˈbækˌɔf/
**Part of speech:** noun
**Core meaning (English):** increasing the delay between retries, usually by a multiplicative factor, to reduce pressure on a failing dependency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** delay retry tăng dần theo cấp số nhân.
**Grammar & collocations:** `exponential-backoff schedule` — schedule; `jitter a retry delay` — thêm jitter.
**Examples:** `Exponential backoff prevented thousands of workers from retrying the unavailable service simultaneously.` → Backoff ngăn hàng nghìn worker retry cùng lúc.
**Liên kết tiếng Hàn:** `지수 백오프`.

## 7. compensation step /ˌkɑmpənˈseɪʃən stɛp/
**Part of speech:** noun
**Core meaning (English):** an action that semantically reverses or offsets a completed task when a later workflow step fails.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bước bù để hoàn tác ý nghĩa của task trước.
**Grammar & collocations:** `compensation-step handler` — handler; `release a reserved resource` — giải phóng.
**Examples:** `The compensation step released the seat reservation after payment confirmation failed.` → Bước bù giải phóng ghế khi payment fail.
**Liên kết tiếng Hàn:** `보상 단계`.

## 8. saga orchestrator /ˈsɑɡə ˈɔrkəˌstreɪtər/
**Part of speech:** noun
**Core meaning (English):** a coordinator that drives a sequence of local transactions and invokes compensations when the distributed business process fails.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** coordinator điều phối saga và gọi bước bù.
**Grammar & collocations:** `saga-orchestrator state` — state; `coordinate local transactions` — điều phối.
**Examples:** `The saga orchestrator marked the reservation cancelled after the payment service timed out.` → Orchestrator đánh dấu reservation hủy.
**Liên kết tiếng Hàn:** `사가 오케스트레이터`.

## 9. workflow checkpoint /ˈwɝkˌfloʊ ˈtʃɛkˌpɔɪnt/
**Part of speech:** noun
**Core meaning (English):** durable state recording completed tasks and workflow data so execution can resume after failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** checkpoint lưu task đã xong để resume.
**Grammar & collocations:** `workflow-checkpoint store` — store; `persist execution state` — lưu.
**Examples:** `The workflow checkpoint let the process resume after the worker host was replaced.` → Checkpoint cho workflow resume sau thay host.
**Liên kết tiếng Hàn:** `워크플로 체크포인트`.

## 10. durable timer /ˈdjʊrəbəl ˈtaɪmər/
**Part of speech:** noun
**Core meaning (English):** a timer whose scheduled wake-up survives process restarts and host failures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timer được lưu bền, restart vẫn thức đúng lúc.
**Grammar & collocations:** `durable-timer event` — event; `schedule a delayed wake-up` — lên lịch.
**Examples:** `The durable timer resumed the approval workflow after the required cooling period.` → Timer đánh thức workflow sau thời gian chờ.
**Liên kết tiếng Hàn:** `내구성 타이머`.

## 11. event trigger /ɪˈvɛnt ˈtrɪɡər/
**Part of speech:** noun
**Core meaning (English):** an external event that starts, advances, or changes the state of a workflow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event bên ngoài kích hoạt hoặc đẩy workflow tiến lên.
**Grammar & collocations:** `event-trigger condition` — condition; `wake a waiting workflow` — đánh thức.
**Examples:** `The event trigger advanced the claim when the insurer uploaded a decision.` → Trigger đẩy claim khi insurer upload quyết định.
**Liên kết tiếng Hàn:** `이벤트 트리거`.

## 12. fan-out /fæn aʊt/
**Part of speech:** noun
**Core meaning (English):** distributing one workflow item into multiple independent tasks that can run concurrently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một item tỏa ra nhiều task song song.
**Grammar & collocations:** `fan-out stage` — stage; `spawn parallel activities` — sinh.
**Examples:** `Fan-out sent the document to regional validators at the same time.` → Fan-out gửi document tới validator vùng đồng thời.
**Liên kết tiếng Hàn:** `팬아웃`.

## 13. fan-in /fæn ɪn/
**Part of speech:** noun
**Core meaning (English):** joining multiple completed or partial task results before a workflow continues.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom nhiều nhánh về một điểm tiếp tục.
**Grammar & collocations:** `fan-in barrier` — barrier; `join branch results` — gom.
**Examples:** `Fan-in waited for every regional validation before issuing the final report.` → Fan-in chờ mọi vùng trước report cuối.
**Liên kết tiếng Hàn:** `팬인`.

## 14. dynamic parallelism /daɪˈnæmɪk ˈpærəˌlɛlɪzəm/
**Part of speech:** noun
**Core meaning (English):** creating or adjusting parallel task branches at runtime according to data size or discovered work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số nhánh song song đổi theo dữ liệu thật.
**Grammar & collocations:** `dynamic-parallelism limit` — limit; `expand a task set` — mở rộng.
**Examples:** `Dynamic parallelism created one validation task for each attachment found in the case.` → Parallelism tạo task theo attachment.
**Liên kết tiếng Hàn:** `동적 병렬성`.

## 15. exactly-once activity /ɪɡˈzæktli wʌns ækˈtɪvəti/
**Part of speech:** noun
**Core meaning (English):** a workflow activity whose externally visible effect is committed once despite retries or worker recovery.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** activity tạo đúng một effect ngoài hệ thống.
**Grammar & collocations:** `exactly-once-activity contract` — contract; `commit an external side effect` — commit.
**Examples:** `The exactly-once activity issued one shipping label despite two worker retries.` → Activity chỉ phát một label dù retry.
**Liên kết tiếng Hàn:** `정확히 한 번 활동`.

## 16. deterministic replay /dɪˌtɝməˈnɪstɪk riˈpleɪ/
**Part of speech:** noun
**Core meaning (English):** reconstructing workflow state by re-executing recorded history with the same decisions and results.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** replay history phải ra cùng quyết định như lần đầu.
**Grammar & collocations:** `deterministic-replay constraint` — constraint; `replay workflow history` — replay.
**Examples:** `Deterministic replay exposed a nonrepeatable random-number call inside the workflow code.` → Replay lộ call random không lặp được.
**Liên kết tiếng Hàn:** `결정론적 재생`.

## 17. workflow versioning /ˈwɝkˌfloʊ ˈvɝʒənɪŋ/
**Part of speech:** noun
**Core meaning (English):** managing changes to workflow definitions so already-running instances continue with compatible behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi workflow mà instance cũ vẫn chạy đúng.
**Grammar & collocations:** `workflow-versioning rule` — rule; `migrate a running instance` — migrate.
**Examples:** `Workflow versioning kept older claims on the previous approval path during rollout.` → Versioning giữ claim cũ trên path cũ.
**Liên kết tiếng Hàn:** `워크플로 버전 관리`.

## 18. cancellation scope /ˌkænsəˈleɪʃən skoʊp/
**Part of speech:** noun
**Core meaning (English):** the defined set of child tasks and cleanup actions affected when a workflow or branch is cancelled.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phạm vi task con bị hủy và cleanup đi kèm.
**Grammar & collocations:** `cancellation-scope policy` — policy; `propagate cancellation` — lan truyền.
**Examples:** `The cancellation scope stopped parallel uploads but preserved the audit task.` → Scope dừng upload nhưng giữ audit.
**Liên kết tiếng Hàn:** `취소 범위`.

## 19. timeout budget /ˈtaɪmˌaʊt ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the remaining time a workflow may spend before a deadline is exceeded and recovery or compensation begins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách thời gian còn lại trước deadline.
**Grammar & collocations:** `timeout-budget propagation` — propagation; `reserve time for compensation` — dành.
**Examples:** `The timeout budget left enough time to compensate the inventory reservation.` → Budget còn đủ thời gian bù reservation.
**Liên kết tiếng Hàn:** `타임아웃 예산`.

## 20. human task /ˈhjuːmən tæsk/
**Part of speech:** noun
**Core meaning (English):** a workflow step requiring a person to review, approve, classify, or provide information before execution continues.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bước cần con người quyết định.
**Grammar & collocations:** `human-task assignment` — assignment; `route an approval request` — chuyển.
**Examples:** `The human task paused release until a compliance officer approved the exception.` → Task người dùng dừng release tới khi compliance duyệt.
**Liên kết tiếng Hàn:** `인간 작업`.

## Review in context

A **workflow DAG** encodes each **task dependency** and exposes the **critical path**. An **idempotent task** follows a **retry policy** with **exponential backoff**; failed business steps may require a **compensation step** coordinated by a **saga orchestrator**. A **workflow checkpoint** and **durable timer** survive restarts, while an **event trigger** advances execution. **Fan-out**, **fan-in**, and **dynamic parallelism** manage branches; an **exactly-once activity** controls external effects. **Deterministic replay**, **workflow versioning**, a **cancellation scope**, and a **timeout budget** protect long-running instances, including a human approval **human task**.

**Bản dịch tiếng Việt:** **Workflow DAG** mã hóa **task dependency** và cho thấy **critical path**. **Idempotent task** theo **retry policy** với **exponential backoff**; bước nghiệp vụ thất bại có thể cần **compensation step** do **saga orchestrator** điều phối. **Workflow checkpoint** và **durable timer** sống qua restart, còn **event trigger** đẩy execution. **Fan-out**, **fan-in** và **dynamic parallelism** quản lý nhánh; **exactly-once activity** kiểm soát effect bên ngoài. **Deterministic replay**, **workflow versioning**, **cancellation scope** và **timeout budget** bảo vệ instance dài hạn, gồm cả **human task**.
