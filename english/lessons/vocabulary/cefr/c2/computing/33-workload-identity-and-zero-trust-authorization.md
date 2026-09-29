# C2 Vocabulary — Workload identity and zero-trust authorization

This lesson follows a service request from workload identity issuance through policy evaluation, short-lived access, and continuous authorization.

Flow: **workload identity → identity-aware proxy → service identity → short-lived credential → proof-of-possession token → policy decision point → policy enforcement point → continuous authorization → session binding → audience restriction → credential exchange → just-in-time access → authorization context → risk-adaptive access → token exchange → identity federation → service account impersonation → policy simulation → access graph → authorization freshness**.

## 1. workload identity /ˈwɝkloʊd aɪˈdɛntəti/
**Part of speech:** noun
**Core meaning (English):** a verifiable identity assigned to a running application, job, or service rather than to a human user.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** danh tính của workload để service chứng minh “mình là ai”.
**Grammar & collocations:** `workload-identity provider` — provider; `issue a workload identity` — cấp.
**Examples:** `The workload identity let the batch job request storage without embedding a static secret.` → Identity cho job xin storage mà không nhúng secret tĩnh.
**Liên kết tiếng Hàn:** `워크로드 ID`.

## 2. identity-aware proxy /aɪˈdɛntəti əˈwɛr ˈprɑksi/
**Part of speech:** noun
**Core meaning (English):** a proxy that evaluates the caller's identity and context before forwarding a request to an application.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** proxy kiểm tra identity/context trước khi cho request tới app.
**Grammar & collocations:** `identity-aware-proxy rule` — rule; `proxy an authenticated request` — proxy.
**Examples:** `The identity-aware proxy blocked access from a workload without the required service label.` → Proxy chặn workload thiếu label service.
**Liên kết tiếng Hàn:** `ID 인식 프록시`.

## 3. service identity /ˈsɝvɪs aɪˈdɛntəti/
**Part of speech:** noun
**Core meaning (English):** a stable logical identity representing a service across instances, hosts, or deployments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identity logic của service, không đổi dù instance thay đổi.
**Grammar & collocations:** `service-identity document` — document; `rotate service instances` — rotate.
**Examples:** `The service identity stayed constant while the deployment replaced every pod.` → Identity giữ nguyên dù deployment thay toàn bộ pod.
**Liên kết tiếng Hàn:** `서비스 ID`.

## 4. short-lived credential /ʃɔrt lɪvd krəˈdɛnʃəl/
**Part of speech:** noun
**Core meaning (English):** an access credential that expires soon after issuance to reduce the value of theft.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** credential sống ngắn, bị đánh cắp cũng nhanh hết hạn.
**Grammar & collocations:** `short-lived-credential lifetime` — lifetime; `mint a credential` — mint.
**Examples:** `A short-lived credential expired before a copied build could reuse it.` → Credential hết hạn trước khi build copy dùng lại.
**Liên kết tiếng Hàn:** `단기 자격 증명`.

## 5. proof-of-possession token /pruːv əv pəˈzɛʃən ˈtoʊkən/
**Part of speech:** noun
**Core meaning (English):** a token usable only by a caller that can demonstrate possession of a bound private key or secret.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** token gắn với private key, bị copy riêng token thì chưa đủ dùng.
**Grammar & collocations:** `proof-of-possession-token check` — check; `bind a token to a key` — bind.
**Examples:** `The proof-of-possession token stopped a bearer token copied from the log.` → Token ngăn bearer token bị copy từ log.
**Liên kết tiếng Hàn:** `소유 증명 토큰`.

## 6. policy decision point /ˈpɑləsi dɪˈsɪʒən pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** the component that evaluates attributes and decides whether a request should be allowed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nơi ra quyết định allow/deny dựa trên policy và context.
**Grammar & collocations:** `policy-decision-point query` — query; `evaluate an authorization request` — đánh giá.
**Examples:** `The policy decision point denied the export because the purpose did not match the dataset.` → Điểm quyết định từ chối export vì purpose không khớp dataset.
**Liên kết tiếng Hàn:** `정책 결정 지점`.

## 7. policy enforcement point /ˈpɑləsi ɛnˈfɔrsmənt pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** the component that applies an authorization decision by allowing, modifying, or blocking traffic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nơi thực thi quyết định, thật sự chặn hoặc cho request.
**Grammar & collocations:** `policy-enforcement-point placement` — placement; `enforce a deny decision` — thực thi.
**Examples:** `The policy enforcement point rejected the request before it reached the database.` → Điểm thực thi chặn trước database.
**Liên kết tiếng Hàn:** `정책 시행 지점`.

## 8. continuous authorization /kənˈtɪnjuəs ˌɔθərəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** repeatedly reevaluating access during a session as identity, device, or risk conditions change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không authorize một lần rồi mãi mãi; context đổi thì đánh giá lại.
**Grammar & collocations:** `continuous-authorization loop` — loop; `reevaluate access` — đánh giá lại.
**Examples:** `Continuous authorization revoked the session when the workload changed its network location.` → Authorization liên tục revoke session khi workload đổi network.
**Liên kết tiếng Hàn:** `지속적 인가`.

## 9. session binding /ˈsɛʃən ˈbaɪndɪŋ/
**Part of speech:** noun
**Core meaning (English):** linking a credential or authorization decision to a specific session, channel, or cryptographic context.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** credential chỉ dùng được trong đúng session/channel đã bind.
**Grammar & collocations:** `session-binding claim` — claim; `bind a token to a channel` — bind.
**Examples:** `Session binding prevented a valid token from being replayed on another connection.` → Binding ngăn token hợp lệ bị replay connection khác.
**Liên kết tiếng Hàn:** `세션 바인딩`.

## 10. audience restriction /ˈɔdiəns rɪˈstrɪkʃən/
**Part of speech:** noun
**Core meaning (English):** limiting a credential or token so it is accepted only by named services or relying parties.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** token chỉ dành cho đúng audience/service.
**Grammar & collocations:** `audience-restriction claim` — claim; `validate the audience` — validate.
**Examples:** `Audience restriction stopped the analytics token from being presented to the billing API.` → Restriction ngăn token analytics đưa cho billing API.
**Liên kết tiếng Hàn:** `대상 제한`.

## 11. credential exchange /krəˈdɛnʃəl ɪksˈtʃeɪndʒ/
**Part of speech:** noun
**Core meaning (English):** exchanging one trusted credential for another credential scoped to a downstream service or purpose.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi credential tổng thành credential hẹp hơn cho service sau.
**Grammar & collocations:** `credential-exchange endpoint` — endpoint; `exchange an identity token` — đổi.
**Examples:** `Credential exchange produced a storage token with read-only scope.` → Exchange tạo storage token chỉ đọc.
**Liên kết tiếng Hàn:** `자격 증명 교환`.

## 12. just-in-time access /dʒʌst ɪn taɪm ˈæksɛs/
**Part of speech:** noun
**Core meaning (English):** granting a narrowly scoped privilege only when it is needed and for a limited duration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấp quyền đúng lúc, vừa đủ và tự hết hạn.
**Grammar & collocations:** `just-in-time-access request` — request; `approve temporary privilege` — duyệt.
**Examples:** `Just-in-time access granted the operator database inspection for fifteen minutes.` → Access cấp quyền inspect database 15 phút.
**Liên kết tiếng Hàn:** `적시 접근`.

## 13. authorization context /ˌɔθərəˈzeɪʃən ˈkɑntɛkst/
**Part of speech:** noun
**Core meaning (English):** the identity, purpose, device, location, risk, and resource facts used to make an access decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** toàn bộ context mà policy dùng để quyết định.
**Grammar & collocations:** `authorization-context claim` — claim; `enrich the context` — bổ sung.
**Examples:** `The authorization context included the job purpose and the dataset classification.` → Context gồm purpose job và classification dataset.
**Liên kết tiếng Hàn:** `인가 컨텍스트`.

## 14. risk-adaptive access /rɪsk əˈdæptɪv ˈæksɛs/
**Part of speech:** noun
**Core meaning (English):** changing access requirements or privilege according to a current risk assessment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** risk tăng thì yêu cầu mạnh hơn hoặc giảm quyền.
**Grammar & collocations:** `risk-adaptive-access rule` — rule; `step up authentication` — tăng xác thực.
**Examples:** `Risk-adaptive access required reauthentication after an unusual export pattern.` → Access adaptive yêu cầu xác thực lại sau pattern export lạ.
**Liên kết tiếng Hàn:** `위험 적응형 접근`.

## 15. token exchange /ˈtoʊkən ɪksˈtʃeɪndʒ/
**Part of speech:** noun
**Core meaning (English):** obtaining a new token for a different audience, scope, or protocol using an existing trusted token.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi token hiện tại lấy token đúng audience/scope mới.
**Grammar & collocations:** `token-exchange grant` — grant; `exchange for a scoped token` — đổi.
**Examples:** `Token exchange gave the worker a short-lived token for one queue only.` → Exchange cấp token ngắn hạn cho một queue.
**Liên kết tiếng Hàn:** `토큰 교환`.

## 16. identity federation /aɪˈdɛntəti ˌfɛdəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** trusting identities issued by another organization or domain through agreed protocols and claims.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** domain này tin identity do domain khác phát hành.
**Grammar & collocations:** `identity-federation trust` — trust; `federate an identity provider` — liên kết.
**Examples:** `Identity federation let the research partner access the portal without creating local passwords.` → Federation cho partner vào portal mà không tạo password local.
**Liên kết tiếng Hàn:** `ID 연합`.

## 17. service account impersonation /ˈsɝvɪs əˈkaʊnt ɪmˌpɝsəˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** temporarily acting as a service account under an explicitly granted delegation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** actor được phép “đóng vai” service account trong phạm vi rõ.
**Grammar & collocations:** `service-account-impersonation grant` — grant; `delegate narrowly` — delegate.
**Examples:** `Service account impersonation allowed the deployer to rotate one certificate without broad admin rights.` → Impersonation cho deployer rotate một certificate mà không có admin rộng.
**Liên kết tiếng Hàn:** `서비스 계정 가장`.

## 18. policy simulation /ˈpɑləsi ˌsɪmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** evaluating proposed authorization rules against recorded or synthetic requests before enforcing them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thử policy trên request mẫu trước khi bật thật.
**Grammar & collocations:** `policy-simulation report` — report; `simulate a policy change` — mô phỏng.
**Examples:** `Policy simulation found that the new deny rule would break nightly data exports.` → Simulation lộ rule deny mới làm hỏng export đêm.
**Liên kết tiếng Hàn:** `정책 시뮬레이션`.

## 19. access graph /ˈæksɛs ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph representing principals, resources, roles, and the paths by which access can be obtained.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph cho thấy ai đi qua role/path nào để tới resource.
**Grammar & collocations:** `access-graph traversal` — traversal; `find an indirect path` — tìm đường gián tiếp.
**Examples:** `The access graph exposed an indirect route from a test role to production storage.` → Graph lộ đường gián tiếp từ role test tới storage production.
**Liên kết tiếng Hàn:** `접근 그래프`.

## 20. authorization freshness /ˌɔθərəˈzeɪʃən ˈfrɛʃnəs/
**Part of speech:** noun
**Core meaning (English):** how recently an access decision or credential was evaluated against current identity and risk information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** decision còn mới hay đã cũ so với context hiện tại.
**Grammar & collocations:** `authorization-freshness window` — window; `require a fresh decision` — yêu cầu.
**Examples:** `The API required authorization freshness of less than five minutes for sensitive exports.` → API yêu cầu decision mới trong vòng 5 phút.
**Liên kết tiếng Hàn:** `인가 최신성`.

## Review in context

**Workload identity** reaches an **identity-aware proxy**, which checks a **service identity** and a **short-lived credential**. A **proof-of-possession token** resists replay. A **policy decision point** evaluates the **authorization context**, while a **policy enforcement point** applies the result. **Continuous authorization** checks **session binding**, **audience restriction**, and **authorization freshness**. **Credential exchange**, **just-in-time access**, and **token exchange** narrow privilege. **Risk-adaptive access** can require stronger proof; **identity federation** and **service account impersonation** support delegation. Teams use **policy simulation** and an **access graph** to find unintended paths.

**Bản dịch tiếng Việt:** **Workload identity** tới **identity-aware proxy**, nơi kiểm tra **service identity** và **short-lived credential**. **Proof-of-possession token** chống replay. **Policy decision point** đánh giá **authorization context**, còn **policy enforcement point** thực thi kết quả. **Continuous authorization** kiểm tra **session binding**, **audience restriction** và **authorization freshness**. **Credential exchange**, **just-in-time access** và **token exchange** thu hẹp quyền. **Risk-adaptive access** có thể yêu cầu bằng chứng mạnh hơn; **identity federation** và **service account impersonation** hỗ trợ ủy quyền. Team dùng **policy simulation** và **access graph** để tìm đường truy cập ngoài ý muốn.
