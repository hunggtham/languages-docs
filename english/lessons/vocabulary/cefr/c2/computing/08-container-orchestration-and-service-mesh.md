# C2 Vocabulary — Container orchestration and service mesh

This lesson follows cloud-native workloads from container execution and cluster scheduling through health management, progressive delivery, service-to-service routing, and policy enforcement.

Flow: **container runtime → image layer → control plane → worker node → pod → desired state → reconciliation loop → scheduler → admission controller → service discovery → readiness probe → liveness probe → rolling update → canary deployment → sidecar proxy → service mesh → data plane → mutual TLS → circuit breaking → traffic shaping**.

## 1. container runtime /kənˈteɪnər ˈrʌnˌtaɪm/
**Part of speech:** noun
**Core meaning (English):** software that creates, starts, stops, and manages containers according to an image and isolation configuration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** runtime trực tiếp chạy container; hình dung orchestrator ra lệnh, còn container runtime thực sự tạo process, namespace và filesystem cần thiết.
**Grammar & collocations:** `container-runtime interface` — giao diện runtime; `runtime daemon` — daemon runtime; `launch a container` — khởi chạy container.
**Examples:** `The node asked its container runtime to start the application from the specified image.` → Node yêu cầu container runtime khởi chạy application từ image đã chỉ định.
**Liên kết tiếng Hàn:** `컨테이너 런타임`.

## 2. image layer /ˈɪmɪdʒ ˈleɪər/
**Part of speech:** noun
**Core meaning (English):** one immutable filesystem layer that contributes files and metadata to a container image.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một lớp của container image; hình dung image được xếp như nhiều tấm trong suốt, mỗi layer thêm hoặc thay đổi file.
**Grammar & collocations:** `layer cache` — cache layer; `shared image layer` — layer dùng chung; `layer digest` — digest của layer.
**Examples:** `Reusing an unchanged image layer reduced both build time and registry traffic.` → Tái sử dụng image layer không đổi làm giảm thời gian build và traffic tới registry.
**Liên kết tiếng Hàn:** `이미지 레이어`.

## 3. control plane /kənˈtroʊl pleɪn/
**Part of speech:** noun
**Core meaning (English):** the components that hold cluster state and make management decisions rather than directly carrying application traffic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “bộ não” quản lý cluster; hình dung nơi quyết định workload nên chạy ở đâu và trạng thái mong muốn là gì.
**Grammar & collocations:** `control-plane component` — thành phần control plane; `control-plane availability` — availability của control plane; `cluster control plane` — control plane của cluster.
**Examples:** `The control plane noticed that one replica had disappeared and scheduled a replacement.` → Control plane nhận ra một replica đã biến mất và schedule một replica thay thế.
**Liên kết tiếng Hàn:** `컨트롤 플레인`, `제어 평면`.

## 4. worker node /ˈwɝkər noʊd/
**Part of speech:** noun
**Core meaning (English):** a cluster machine that runs application workloads under instructions from the orchestration control plane.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** máy thực thi workload; control plane quyết định, worker node cung cấp CPU, memory và runtime để chạy workload.
**Grammar & collocations:** `node capacity` — capacity của node; `worker-node pool` — nhóm worker node; `drain a node` — rút workload khỏi node.
**Examples:** `The scheduler placed the workload on a worker node with enough memory and available accelerators.` → Scheduler đặt workload lên worker node có đủ memory và accelerator rảnh.
**Liên kết tiếng Hàn:** `워커 노드`.

## 5. pod /pɑd/
**Part of speech:** noun
**Core meaning (English):** the smallest commonly scheduled workload unit in Kubernetes, containing one or more containers that share networking and selected resources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đơn vị deploy nhỏ nhất trong Kubernetes; hình dung một “vỏ” chứa container cùng chia sẻ network identity.
**Grammar & collocations:** `pod lifecycle` — vòng đời pod; `pod replica` — replica pod; `pod network` — network của pod.
**Examples:** `The application pod contained the main process and a small helper container.` → Pod của application chứa process chính và một helper container nhỏ.
**Liên kết tiếng Hàn:** `파드`.

## 6. desired state /dɪˈzaɪərd steɪt/
**Part of speech:** noun
**Core meaning (English):** the declared configuration that an orchestrator continuously tries to make the actual system match.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trạng thái mong muốn được khai báo; ví dụ “phải luôn có 5 replica”, bất kể hiện tại đang có bao nhiêu.
**Grammar & collocations:** `declare desired state` — khai báo desired state; `actual state` — trạng thái thực tế; `state convergence` — hội tụ trạng thái.
**Examples:** `The deployment's desired state specified five replicas even after one process crashed.` → Desired state của deployment vẫn yêu cầu năm replica dù một process vừa crash.
**Liên kết tiếng Hàn:** `원하는 상태`, `목표 상태`.

## 7. reconciliation loop /ˌrɛkənsɪliˈeɪʃən luːp/
**Part of speech:** noun
**Core meaning (English):** a repeated control process that compares actual state with desired state and takes actions to reduce the difference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vòng lặp tự sửa sai; liên tục hỏi “thực tế có giống khai báo chưa?” rồi tạo, xóa hoặc cập nhật resource.
**Grammar & collocations:** `controller reconciliation` — reconciliation của controller; `reconcile state` — đưa state về đúng; `control loop` — vòng điều khiển.
**Examples:** `The reconciliation loop recreated the missing replica without an operator issuing a manual command.` → Reconciliation loop tự tạo lại replica bị thiếu mà không cần operator ra lệnh thủ công.
**Liên kết tiếng Hàn:** `조정 루프`, `리컨실리에이션 루프`.

## 8. scheduler /ˈskɛdʒələr/
**Part of speech:** noun
**Core meaning (English):** a component that selects an appropriate node on which a pending workload should run.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ chọn node; hình dung nó cân resource, constraint và policy rồi quyết định pod đi tới máy nào.
**Grammar & collocations:** `scheduling constraint` — constraint khi schedule; `scheduler policy` — policy scheduler; `pending workload` — workload đang chờ.
**Examples:** `The scheduler rejected nodes that did not satisfy the workload's topology constraints.` → Scheduler loại các node không đáp ứng topology constraint của workload.
**Liên kết tiếng Hàn:** `스케줄러`.

## 9. admission controller /ədˈmɪʃən kənˈtroʊlər/
**Part of speech:** noun
**Core meaning (English):** a policy component that can validate or modify an API request before a cluster object is persisted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “cổng kiểm duyệt” trước khi resource được chấp nhận; có thể từ chối config nguy hiểm hoặc tự thêm setting bắt buộc.
**Grammar & collocations:** `admission policy` — policy admission; `validating admission` — admission kiểm tra; `mutating admission` — admission chỉnh sửa request.
**Examples:** `The admission controller rejected workloads that requested privileged execution without approval.` → Admission controller từ chối workload yêu cầu privileged execution mà chưa được phê duyệt.
**Liên kết tiếng Hàn:** `어드미션 컨트롤러`.

## 10. service discovery /ˈsɝvɪs dɪˈskʌvəri/
**Part of speech:** noun
**Core meaning (English):** a mechanism that lets clients find the current network locations of service instances without hard-coding individual addresses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cơ chế tìm service động; instance có thể thay đổi IP nhưng client vẫn tìm được qua tên hoặc registry.
**Grammar & collocations:** `service-discovery mechanism` — cơ chế discovery; `service registry` — registry service; `discover an endpoint` — tìm endpoint.
**Examples:** `Service discovery let the client reach healthy replicas even as pods were replaced.` → Service discovery giúp client tới được replica khỏe dù pod liên tục được thay.
**Liên kết tiếng Hàn:** `서비스 디스커버리`, `서비스 검색`.

## 11. readiness probe /ˈrɛdinəs proʊb/
**Part of speech:** noun
**Core meaning (English):** a health check that indicates whether a workload is currently ready to receive normal traffic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra “đã sẵn sàng nhận traffic chưa”; process có thể đang chạy nhưng database connection hoặc warm-up chưa xong.
**Grammar & collocations:** `readiness check` — kiểm tra readiness; `fail readiness` — fail readiness; `ready endpoint` — endpoint đã ready.
**Examples:** `The readiness probe kept the new pod out of service until its cache had warmed.` → Readiness probe giữ pod mới ngoài traffic cho tới khi cache warm xong.
**Liên kết tiếng Hàn:** `레디니스 프로브`, `준비 상태 검사`.

## 12. liveness probe /ˈlaɪvnəs proʊb/
**Part of speech:** noun
**Core meaning (English):** a health check used to determine whether a workload is still functioning or should be restarted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra “process còn sống đúng nghĩa không”; nếu treo lâu, orchestrator có thể restart.
**Grammar & collocations:** `liveness failure` — lỗi liveness; `restart policy` — policy restart; `health probe` — health probe.
**Examples:** `A failed liveness probe caused the runtime to restart the unresponsive container.` → Liveness probe thất bại khiến runtime restart container không phản hồi.
**Liên kết tiếng Hàn:** `라이브니스 프로브`, `생존 검사`.

## 13. rolling update /ˈroʊlɪŋ ˈʌpˌdeɪt/
**Part of speech:** noun
**Core meaning (English):** a deployment strategy that gradually replaces old workload instances with new ones while keeping the service available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** update cuốn chiếu; thay từng nhóm instance thay vì tắt toàn bộ hệ thống một lần.
**Grammar & collocations:** `rolling-update strategy` — chiến lược rolling update; `rollout progress` — tiến độ rollout; `max unavailable` — số instance tối đa được phép unavailable.
**Examples:** `The rolling update replaced two replicas at a time to preserve capacity.` → Rolling update thay hai replica mỗi lần để giữ capacity.
**Liên kết tiếng Hàn:** `롤링 업데이트`.

## 14. canary deployment /kəˈnɛri dɪˈplɔɪmənt/
**Part of speech:** noun
**Core meaning (English):** a release strategy that exposes a new version to a small subset of traffic or users before broader rollout.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thả bản mới cho một nhóm nhỏ để quan sát rủi ro trước; giống “chim hoàng yến” cảnh báo sớm.
**Grammar & collocations:** `canary release` — release canary; `canary traffic` — traffic canary; `promote the canary` — mở rộng canary.
**Examples:** `The team sent five percent of requests to a canary deployment before expanding the rollout.` → Nhóm gửi 5% request tới canary deployment trước khi mở rộng rollout.
**Liên kết tiếng Hàn:** `카나리 배포`.

## 15. sidecar proxy /ˈsaɪdˌkɑr ˈprɑksi/
**Part of speech:** noun
**Core meaning (English):** a proxy process deployed beside an application instance to handle networking functions on its behalf.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** proxy “đi kèm” application; app không cần tự implement routing, TLS hay telemetry vì sidecar xử lý.
**Grammar & collocations:** `sidecar injection` — chèn sidecar; `proxy container` — container proxy; `intercept traffic` — chặn và xử lý traffic.
**Examples:** `The sidecar proxy encrypted outbound service calls without requiring application code changes.` → Sidecar proxy mã hóa call đi ra mà không cần sửa code application.
**Liên kết tiếng Hàn:** `사이드카 프록시`.

## 16. service mesh /ˈsɝvɪs mɛʃ/
**Part of speech:** noun
**Core meaning (English):** infrastructure that manages service-to-service communication through a coordinated network of proxies and control components.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lớp network quản lý communication giữa microservice; hình dung nhiều proxy phối hợp thành một “lưới” chung cho routing, security và telemetry.
**Grammar & collocations:** `mesh policy` — policy của mesh; `service-mesh architecture` — kiến trúc service mesh; `mesh traffic` — traffic trong mesh.
**Examples:** `The service mesh standardized retries, encryption, and tracing across dozens of teams.` → Service mesh chuẩn hóa retry, encryption và tracing trên hàng chục team.
**Liên kết tiếng Hàn:** `서비스 메시`.

## 17. data plane /ˈdeɪtə pleɪn/
**Part of speech:** noun
**Core meaning (English):** the components that directly process and forward application traffic according to rules provided by a control system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần thực sự chạm packet/request; control plane quyết định rule, data plane áp rule lên traffic đang chạy.
**Grammar & collocations:** `data-plane proxy` — proxy data plane; `forward traffic` — forward traffic; `control-plane policy` — policy từ control plane.
**Examples:** `The mesh data plane enforced routing rules on every request between services.` → Data plane của mesh áp routing rule lên mọi request giữa các service.
**Liên kết tiếng Hàn:** `데이터 플레인`, `데이터 평면`.

## 18. mutual TLS /ˈmjuːtʃuəl ˌtiː ɛl ˈɛs/
**Part of speech:** noun
**Core meaning (English):** TLS authentication in which both communicating parties present and validate certificates rather than authenticating only the server.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** TLS hai chiều; cả client lẫn server đều phải chứng minh identity bằng certificate.
**Grammar & collocations:** `mTLS connection` — kết nối mTLS; `certificate rotation` — xoay certificate; `mutual authentication` — xác thực hai chiều.
**Examples:** `Mutual TLS prevented an untrusted workload from impersonating an internal service.` → Mutual TLS ngăn workload không tin cậy giả danh internal service.
**Liên kết tiếng Hàn:** `상호 TLS`, `mTLS`.

## 19. circuit breaking /ˈsɝkɪt ˈbreɪkɪŋ/
**Part of speech:** noun
**Core meaning (English):** a resilience technique that temporarily stops calls to an unhealthy dependency after failures cross a threshold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngắt call như cầu dao điện; khi downstream đang lỗi liên tục, hệ thống dừng gửi thêm để tránh làm sự cố lan rộng.
**Grammar & collocations:** `circuit breaker` — cơ chế circuit breaker; `open the circuit` — mở circuit, chặn call; `failure threshold` — ngưỡng lỗi.
**Examples:** `Circuit breaking stopped repeated requests from overwhelming the failing payment service.` → Circuit breaking ngăn request lặp lại làm payment service đang lỗi bị quá tải thêm.
**Liên kết tiếng Hàn:** `서킷 브레이커`, `회로 차단 패턴`.

## 20. traffic shaping /ˈtræfɪk ˈʃeɪpɪŋ/
**Part of speech:** noun
**Core meaning (English):** deliberate control of how network traffic is distributed, limited, delayed, or prioritized to achieve operational goals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “nắn dòng” traffic; chủ động quyết định bao nhiêu request đi đường nào hoặc version nào thay vì để traffic chảy tự do.
**Grammar & collocations:** `shape traffic` — điều tiết traffic; `traffic split` — chia traffic; `rate policy` — policy tốc độ.
**Examples:** `Traffic shaping gradually shifted requests from the old release to the new version.` → Traffic shaping dần chuyển request từ release cũ sang version mới.
**Liên kết tiếng Hàn:** `트래픽 셰이핑`, `트래픽 제어`.

## Review in context

A **container runtime** starts workloads from reusable **image layers** on each **worker node**, while the cluster **control plane** manages a declared **desired state**. In Kubernetes, a **pod** is placed by the **scheduler**, and a **reconciliation loop** keeps actual resources aligned with the declaration. An **admission controller** can reject or modify objects before creation. Once running, **service discovery** lets clients find replicas, a **readiness probe** decides whether they should receive traffic, and a **liveness probe** can trigger restart of a stuck workload. Teams often ship changes with a **rolling update** or a smaller **canary deployment**. In a **service mesh**, a **sidecar proxy** commonly forms part of the **data plane**, applying policies such as **mutual TLS**, **circuit breaking**, and **traffic shaping** to service-to-service communication.

**Bản dịch tiếng Việt:** **Container runtime** khởi chạy workload từ các **image layer** có thể tái sử dụng trên từng **worker node**, còn **control plane** quản lý **desired state** đã khai báo. Trong Kubernetes, **pod** được **scheduler** đặt lên node và **reconciliation loop** giữ resource thực tế khớp với khai báo. **Admission controller** có thể từ chối hoặc chỉnh object trước khi tạo. Sau khi chạy, **service discovery** giúp client tìm replica, **readiness probe** quyết định replica có nhận traffic hay chưa, còn **liveness probe** có thể kích hoạt restart workload bị treo. Team thường release bằng **rolling update** hoặc **canary deployment** nhỏ hơn. Trong **service mesh**, **sidecar proxy** thường là một phần của **data plane**, áp các policy như **mutual TLS**, **circuit breaking** và **traffic shaping** cho communication giữa các service.