# C2 Vocabulary — Container runtime and workload scheduling

This lesson follows a container workload from image materialization and isolation through probes, resources, placement, and disruption.

Flow: **container layer → overlay filesystem → image manifest → registry tag → runtime snapshot → namespace isolation → cgroup limit → pod eviction → sidecar container → init container → readiness gate → startup probe → resource request → resource limit → node taint → toleration rule → affinity rule → pod disruption budget → rollout controller → image pull policy**.

## 1. container layer /kənˈteɪnər ˈleɪər/
**Part of speech:** noun
**Core meaning (English):** an immutable filesystem layer combined with other layers to form a container image or root filesystem.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** layer filesystem bất biến gộp với layer khác thành image/rootfs.
**Grammar & collocations:** `container-layer digest` — digest; `reuse a shared base` — tái dùng.
**Examples:** `The container layer stored the common runtime once for many application images.` → Layer lưu runtime chung một lần.
**Liên kết tiếng Hàn:** `컨테이너 레이어`.

## 2. overlay filesystem /ˌoʊvərˈleɪ ˈfaɪlˌsɪstəm/
**Part of speech:** noun
**Core meaning (English):** a filesystem combining read-only lower layers with a writable upper layer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** filesystem gộp layer read-only dưới với layer writable trên.
**Grammar & collocations:** `overlay-filesystem mount` — mount; `copy up a changed file` — copy.
**Examples:** `The overlay filesystem kept the image layers shared while writes went to a private upper layer.` → Overlay giữ layer chung và write lên upper riêng.
**Liên kết tiếng Hàn:** `오버레이 파일 시스템`.

## 3. image manifest /ˈɪmɪdʒ ˈmænɪfest/
**Part of speech:** noun
**Core meaning (English):** metadata listing an image's layers, configuration, architecture, and content digests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata liệt kê layer, config, architecture và digest image.
**Grammar & collocations:** `image-manifest entry` — entry; `resolve a platform variant` — resolve.
**Examples:** `The image manifest selected the ARM64 layers for the edge device.` → Manifest chọn layer ARM64.
**Liên kết tiếng Hàn:** `이미지 매니페스트`.

## 4. registry tag /ˈredʒəstri tæɡ/
**Part of speech:** noun
**Core meaning (English):** a mutable human-readable name pointing to an image version in a container registry.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tên dễ đọc có thể đổi, trỏ tới version image trong registry.
**Grammar & collocations:** `registry-tag update` — update; `pin a tag to a digest` — ghim.
**Examples:** `The deployment used a digest instead of trusting a registry tag that could move.` → Deploy dùng digest thay tag mutable.
**Liên kết tiếng Hàn:** `레지스트리 태그`.

## 5. runtime snapshot /ˈrʌntaɪm ˈsnæpʃɒt/
**Part of speech:** noun
**Core meaning (English):** a saved state of a running container or process that can be restored or inspected later.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** state lưu của container/process đang chạy để restore/inspect.
**Grammar & collocations:** `runtime-snapshot restore` — restore; `capture a paused process` — chụp.
**Examples:** `The runtime snapshot preserved the worker's in-memory queue before node maintenance.` → Snapshot giữ queue memory trước maintenance.
**Liên kết tiếng Hàn:** `런타임 스냅샷`.

## 6. namespace isolation /ˈneɪmspeɪs ˌaɪsəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** separating a workload's view of processes, networks, mounts, or users from other workloads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách view process, network, mount hoặc user của workload.
**Grammar & collocations:** `namespace-isolation boundary` — boundary; `hide host processes` — ẩn.
**Examples:** `Namespace isolation prevented the test container from seeing host process IDs.` → Isolation chặn container thấy process host.
**Liên kết tiếng Hàn:** `네임스페이스 격리`.

## 7. cgroup limit /ˈsiːɡruːp ˈlɪmɪt/
**Part of speech:** noun
**Core meaning (English):** a control limiting a workload's CPU, memory, or I/O consumption through a control group.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control giới hạn CPU, memory hoặc I/O của workload qua cgroup.
**Grammar & collocations:** `cgroup-limit breach` — vi phạm; `throttle excess CPU` — throttle.
**Examples:** `The cgroup limit terminated the worker after it exceeded its memory allowance.` → Limit terminate worker vượt memory.
**Liên kết tiếng Hàn:** `c그룹 제한`.

## 8. pod eviction /pɒd ɪˈvɪkʃən/
**Part of speech:** noun
**Core meaning (English):** removing a workload from a node because resources, health, or disruption conditions require it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ workload khỏi node vì resource, health hoặc disruption.
**Grammar & collocations:** `pod-eviction reason` — lý do; `reschedule a displaced workload` — schedule lại.
**Examples:** `Pod eviction moved the batch worker after the node reached memory pressure.` → Eviction chuyển worker khi node thiếu memory.
**Liên kết tiếng Hàn:** `파드 축출`.

## 9. sidecar container /ˈsaɪdkɑːr kənˈteɪnər/
**Part of speech:** noun
**Core meaning (English):** a companion container running beside an application container to provide supporting behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** container phụ chạy cạnh app để cung cấp behavior hỗ trợ.
**Grammar & collocations:** `sidecar-container lifecycle` — lifecycle; `collect application logs` — thu thập.
**Examples:** `The sidecar container forwarded application logs without changing the main process.` → Sidecar forward log mà không đổi process chính.
**Liên kết tiếng Hàn:** `사이드카 컨테이너`.

## 10. init container /ɪˈnɪt kənˈteɪnər/
**Part of speech:** noun
**Core meaning (English):** a container that must finish a setup task before the main application containers start.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** container setup phải xong trước khi app chính start.
**Grammar & collocations:** `init-container step` — step; `prepare a shared volume` — chuẩn bị.
**Examples:** `The init container downloaded a schema before the API process started.` → Init tải schema trước API.
**Liên kết tiếng Hàn:** `초기화 컨테이너`.

## 11. readiness gate /ˈredinəs ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** a condition that must pass before a workload is considered eligible to receive traffic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện phải đạt trước khi workload nhận traffic.
**Grammar & collocations:** `readiness-gate condition` — condition; `hold traffic until warm` — giữ.
**Examples:** `The readiness gate waited for the cache to warm before advertising the service.` → Gate chờ cache warm.
**Liên kết tiếng Hàn:** `준비성 게이트`.

## 12. startup probe /ˈstɑːrtʌp proʊb/
**Part of speech:** noun
**Core meaning (English):** a health check used during startup so slow initialization is not mistaken for a failed running service.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** health check lúc start để init chậm không bị coi là service fail.
**Grammar & collocations:** `startup-probe delay` — delay; `allow a long initialization` — cho phép.
**Examples:** `The startup probe gave the model server time to load its weights before liveness checks began.` → Probe cho server load weights.
**Liên kết tiếng Hàn:** `시작 프로브`.

## 13. resource request /rɪˈsɔːrs rɪˈkwest/
**Part of speech:** noun
**Core meaning (English):** the amount of CPU, memory, or other capacity a workload asks the scheduler to reserve.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng CPU, memory hoặc capacity workload yêu cầu scheduler giữ.
**Grammar & collocations:** `resource-request declaration` — khai báo; `schedule according to needs` — schedule.
**Examples:** `The resource request reserved two CPUs before the workload was placed.` → Request giữ hai CPU trước placement.
**Liên kết tiếng Hàn:** `리소스 요청`.

## 14. resource limit /rɪˈsɔːrs ˈlɪmɪt/
**Part of speech:** noun
**Core meaning (English):** the maximum amount of a resource a workload may consume.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lượng resource tối đa workload được dùng.
**Grammar & collocations:** `resource-limit enforcement` — enforcement; `throttle a burst` — throttle.
**Examples:** `The resource limit stopped a debugging process from consuming the node's entire memory.` → Limit ngăn process chiếm hết memory.
**Liên kết tiếng Hàn:** `리소스 제한`.

## 15. node taint /noʊd teɪnt/
**Part of speech:** noun
**Core meaning (English):** a node marker causing ordinary workloads to avoid the node unless they explicitly tolerate it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** marker node khiến workload thường tránh nếu không tolerate.
**Grammar & collocations:** `node-taint effect` — effect; `reserve hardware for special jobs` — dành.
**Examples:** `The node taint reserved the accelerator host for workloads with a matching requirement.` → Taint dành host accelerator.
**Liên kết tiếng Hàn:** `노드 테인트`.

## 16. toleration rule /ˌtɒləˈreɪʃən ruːl/
**Part of speech:** noun
**Core meaning (English):** a workload rule allowing it to run on a node carrying a matching taint.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule workload cho phép chạy trên node có taint tương ứng.
**Grammar & collocations:** `toleration-rule match` — match; `accept a dedicated node` — chấp nhận.
**Examples:** `The toleration rule allowed only the licensed inference service onto the restricted node.` → Rule chỉ cho inference service có license.
**Liên kết tiếng Hàn:** `톨러레이션 규칙`.

## 17. affinity rule /əˈfɪnəti ruːl/
**Part of speech:** noun
**Core meaning (English):** a placement rule preferring or requiring workloads to run near or away from selected nodes or workloads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule placement ưu tiên/bắt workload ở gần hoặc xa node/workload khác.
**Grammar & collocations:** `affinity-rule weight` — trọng số; `co-locate a cache` — đặt cùng.
**Examples:** `The affinity rule placed the API beside its low-latency cache.` → Rule đặt API cạnh cache.
**Liên kết tiếng Hàn:** `어피니티 규칙`.

## 18. pod disruption budget /pɒd dɪsˈrʌpʃən ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a policy limiting how many replicas may be voluntarily disrupted at once.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy giới hạn số replica bị disruption chủ động cùng lúc.
**Grammar & collocations:** `pod-disruption-budget violation` — vi phạm; `protect service capacity` — bảo vệ.
**Examples:** `The pod disruption budget delayed maintenance until enough replicas were healthy.` → Budget trì hoãn maintenance.
**Liên kết tiếng Hàn:** `파드 중단 예산`.

## 19. rollout controller /ˈroʊlaʊt kənˈtroʊlər/
**Part of speech:** noun
**Core meaning (English):** a controller that replaces workload instances gradually while monitoring readiness and failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** controller thay instance dần và theo dõi readiness/failure.
**Grammar & collocations:** `rollout-controller state` — state; `pause a failed replacement` — dừng.
**Examples:** `The rollout controller stopped after the new replicas failed their startup probes.` → Controller dừng khi replica mới fail probe.
**Liên kết tiếng Hàn:** `롤아웃 컨트롤러`.

## 20. image pull policy /ˈɪmɪdʒ pʊl ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a rule deciding when a node downloads an image instead of using a locally cached copy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule quyết định lúc node pull image thay vì dùng cache local.
**Grammar & collocations:** `image-pull-policy setting` — setting; `force a fresh digest` — buộc.
**Examples:** `The image pull policy forced a fresh download for the mutable development tag.` → Policy buộc pull mới cho tag dev.
**Liên kết tiếng Hàn:** `이미지 풀 정책`.

## Review in context

A **container layer**, **overlay filesystem**, and **image manifest** materialize an image; a **registry tag** may move, while a **runtime snapshot** preserves state. **Namespace isolation** separates views, a **cgroup limit** bounds use, and **pod eviction** removes unhealthy work. A **sidecar container** supports the app, an **init container** prepares it, and a **readiness gate** delays traffic; a **startup probe** handles slow boot. A **resource request** reserves capacity, a **resource limit** caps it, a **node taint** excludes ordinary work, a **toleration rule** permits exceptions, and an **affinity rule** shapes placement. A **pod disruption budget** protects replicas, a **rollout controller** stages replacement, and an **image pull policy** controls freshness.

**Bản dịch tiếng Việt:** **Container layer**, **overlay filesystem** và **image manifest** tạo image; **registry tag** có thể đổi, còn **runtime snapshot** giữ state. **Namespace isolation** tách view, **cgroup limit** giới hạn dùng, và **pod eviction** bỏ workload lỗi. **Sidecar container** hỗ trợ app, **init container** chuẩn bị, **readiness gate** trì hoãn traffic, còn **startup probe** xử lý boot chậm. **Resource request** giữ capacity, **resource limit** chặn mức dùng, **node taint** loại workload thường, **toleration rule** cho ngoại lệ, và **affinity rule** định placement. **Pod disruption budget** bảo vệ replica, **rollout controller** thay dần, còn **image pull policy** kiểm soát độ mới.
