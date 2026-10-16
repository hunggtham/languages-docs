# C2 Vocabulary — Authorization policy evaluation

This lesson follows an access request from subject and resource facts through policy combination, delegation, caching, and an auditable decision.

Flow: **subject attribute → resource attribute → action context → conflict resolution algorithm → obligation handler → advice expression → policy bundle → decision cache → trust boundary → delegated authority → impersonation scope → capability token → macaroon caveat → policy evaluation trace → entitlement set → privilege boundary → permission shadowing → identity proof → access decision → policy combiner**.

## 1. subject attribute /ˈsʌbdʒɪkt əˈtrɪbjuːt/
**Part of speech:** noun
**Core meaning (English):** a fact about the requester, such as role, department, device state, or authentication strength.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fact về requester như role, department, trạng thái device hoặc độ mạnh xác thực.
**Grammar & collocations:** `subject-attribute assertion` — assertion; `evaluate a user's department` — đánh giá.
**Examples:** `The policy required a subject attribute showing that the requester belonged to the billing team.` → Policy cần attribute chứng minh requester thuộc billing.
**Liên kết tiếng Hàn:** `주체 속성`.

## 2. resource attribute /rɪˈsɔːrs əˈtrɪbjuːt/
**Part of speech:** noun
**Core meaning (English):** a fact about the object being accessed, such as owner, classification, region, or lifecycle state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fact về object được truy cập như owner, classification, region hoặc lifecycle.
**Grammar & collocations:** `resource-attribute label` — nhãn; `inspect a data classification` — kiểm tra.
**Examples:** `A resource attribute marked the document as restricted to its owning region.` → Attribute đánh dấu document chỉ ở region owner.
**Liên kết tiếng Hàn:** `리소스 속성`.

## 3. action context /ˈækʃən ˈkɒntekst/
**Part of speech:** noun
**Core meaning (English):** information about the requested operation and circumstances in which it will occur.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thông tin về operation và hoàn cảnh lúc request xảy ra.
**Grammar & collocations:** `action-context field` — field; `consider a read-only operation` — xem xét.
**Examples:** `The action context showed that the request came through an approved emergency workflow.` → Context cho thấy request qua workflow khẩn cấp được duyệt.
**Liên kết tiếng Hàn:** `행동 컨텍스트`.

## 4. conflict resolution algorithm /ˈkɒnflɪkt ˌrezəˈluːʃən ˈælɡərɪðəm/
**Part of speech:** noun
**Core meaning (English):** a defined method for choosing a result when applicable policy rules disagree.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phương pháp chọn kết quả khi rule policy áp dụng mâu thuẫn.
**Grammar & collocations:** `conflict-resolution-algorithm step` — bước; `prefer an explicit deny` — ưu tiên.
**Examples:** `The conflict resolution algorithm chose the stricter rule when a broad permit met a resource-specific deny.` → Algorithm chọn deny cụ thể nghiêm hơn.
**Liên kết tiếng Hàn:** `충돌 해결 알고리즘`.

## 5. obligation handler /ˌɒblɪˈɡeɪʃən ˈhændlər/
**Part of speech:** noun
**Core meaning (English):** a component that performs required side effects attached to an authorization decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component thực hiện side effect bắt buộc gắn với decision.
**Grammar & collocations:** `obligation-handler failure` — lỗi; `record an access event` — ghi.
**Examples:** `The obligation handler logged the export before the service returned the permitted file.` → Handler ghi export trước khi trả file.
**Liên kết tiếng Hàn:** `의무 처리기`.

## 6. advice expression /ədˈvaɪs ɪkˈspreʃən/
**Part of speech:** noun
**Core meaning (English):** optional guidance returned with a policy decision that a caller may use without being required to enforce it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hướng dẫn tùy chọn đi kèm decision, caller có thể dùng nhưng không bắt buộc.
**Grammar & collocations:** `advice-expression field` — field; `suggest a safer workflow` — gợi ý.
**Examples:** `The advice expression suggested stronger authentication even though the read was allowed.` → Advice gợi ý xác thực mạnh hơn dù read được phép.
**Liên kết tiếng Hàn:** `조언 표현`.

## 7. policy bundle /ˈpɒləsi ˈbʌndəl/
**Part of speech:** noun
**Core meaning (English):** a versioned package of related policy rules, schemas, and evaluation metadata.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gói có version gồm rule, schema và metadata đánh giá liên quan.
**Grammar & collocations:** `policy-bundle signature` — chữ ký; `promote a reviewed package` — đưa lên.
**Examples:** `The policy bundle grouped regional privacy rules with their test cases.` → Bundle gom rule privacy vùng và test.
**Liên kết tiếng Hàn:** `정책 번들`.

## 8. decision cache /dɪˈsɪʒən kæʃ/
**Part of speech:** noun
**Core meaning (English):** stored authorization results reused while the identities, attributes, and policies remain fresh enough.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết quả authorization lưu lại để dùng khi identity, attribute và policy còn đủ mới.
**Grammar & collocations:** `decision-cache entry` — entry; `invalidate a permission result` — vô hiệu.
**Examples:** `The decision cache reduced policy latency but expired entries after a role change.` → Cache giảm latency nhưng hết hạn khi role đổi.
**Liên kết tiếng Hàn:** `결정 캐시`.

## 9. trust boundary /trʌst ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** a boundary across which identity, data, or authority must be revalidated rather than assumed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới qua đó identity, data hoặc authority phải validate lại.
**Grammar & collocations:** `trust-boundary crossing` — crossing; `revalidate a delegated identity` — xác thực lại.
**Examples:** `The service rechecked the token at the trust boundary between the customer network and the platform.` → Service check token lại tại boundary.
**Liên kết tiếng Hàn:** `신뢰 경계`.

## 10. delegated authority /ˈdeləɡeɪtɪd əˈθɔːrəti/
**Part of speech:** noun
**Core meaning (English):** permission passed from one principal to another for a limited purpose, resource, or time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyền được principal này truyền cho principal khác với mục đích/resource/time giới hạn.
**Grammar & collocations:** `delegated-authority chain` — chain; `grant a narrow scope` — cấp.
**Examples:** `Delegated authority let the support service read one customer's records without receiving broad admin rights.` → Quyền ủy nhiệm chỉ cho support đọc một customer.
**Liên kết tiếng Hàn:** `위임된 권한`.

## 11. impersonation scope /ɪmˌpɜːrsəˈneɪʃən skoʊp/
**Part of speech:** noun
**Core meaning (English):** the exact actions and resources a service may use while acting on behalf of another identity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** action và resource chính xác service được dùng khi đại diện identity khác.
**Grammar & collocations:** `impersonation-scope restriction` — restriction; `act for a single tenant` — hành động.
**Examples:** `The impersonation scope allowed invoice lookup but prohibited changing payment settings.` → Scope cho lookup nhưng cấm đổi payment.
**Liên kết tiếng Hàn:** `가장 범위`.

## 12. capability token /ˌkeɪpəˈbɪləti ˈtoʊkən/
**Part of speech:** noun
**Core meaning (English):** a bearer credential that directly encodes permission to perform a particular operation on a resource.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** credential mang quyền trực tiếp để làm operation cụ thể trên resource.
**Grammar & collocations:** `capability-token audience` — audience; `present a narrow capability` — trình.
**Examples:** `The upload service issued a capability token limited to one object and one write.` → Service cấp token chỉ cho một object và write.
**Liên kết tiếng Hàn:** `능력 토큰`.

## 13. macaroon caveat /ˌmækəˈruːn ˈkæviæt/
**Part of speech:** noun
**Core meaning (English):** a restriction attached to a delegable token that narrows when, where, or how it may be used.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** restriction gắn token có thể ủy nhiệm để thu hẹp điều kiện dùng.
**Grammar & collocations:** `macaroon-caveat check` — kiểm tra; `attenuate a delegated token` — thu hẹp.
**Examples:** `The macaroon caveat restricted the download token to requests from one network range.` → Caveat giới hạn token trong một network range.
**Liên kết tiếng Hàn:** `마카롱 조건`.

## 14. policy evaluation trace /ˈpɒləsi ɪˌvæljuˈeɪʃən treɪs/
**Part of speech:** noun
**Core meaning (English):** an auditable record of rules, attributes, and intermediate results used to reach an access decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record audit về rule, attribute và kết quả trung gian dẫn tới decision.
**Grammar & collocations:** `policy-evaluation-trace field` — field; `explain a denied request` — giải thích.
**Examples:** `The policy evaluation trace showed that a stale device attribute caused the denial.` → Trace cho thấy attribute device cũ gây deny.
**Liên kết tiếng Hàn:** `정책 평가 추적`.

## 15. entitlement set /ɪnˈtaɪtəlmənt set/
**Part of speech:** noun
**Core meaning (English):** the complete collection of permissions a principal is currently entitled to exercise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập đầy đủ permission principal hiện có quyền dùng.
**Grammar & collocations:** `entitlement-set refresh` — refresh; `compare effective permissions` — so sánh.
**Examples:** `The entitlement set changed when the employee moved to a regulated project.` → Set đổi khi employee chuyển project.
**Liên kết tiếng Hàn:** `권한 집합`.

## 16. privilege boundary /ˈprɪvəlɪdʒ ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** a point beyond which a component cannot exercise more authority without an explicit transition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm component không thể dùng thêm quyền nếu không transition rõ.
**Grammar & collocations:** `privilege-boundary crossing` — crossing; `drop elevated rights` — hạ.
**Examples:** `The worker crossed a privilege boundary only after a human approved the maintenance action.` → Worker chỉ nâng quyền sau duyệt.
**Liên kết tiếng Hàn:** `권한 경계`.

## 17. permission shadowing /pərˈmɪʃən ˈʃædoʊɪŋ/
**Part of speech:** noun
**Core meaning (English):** a condition in which a broad grant hides or makes ineffective a more specific permission rule.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** grant rộng che hoặc làm rule permission cụ thể mất hiệu lực.
**Grammar & collocations:** `permission-shadowing bug` — bug; `surface an unexpected grant` — làm lộ.
**Examples:** `Permission shadowing made a carefully scoped deny ineffective under the inherited admin role.` → Shadowing làm deny cụ thể vô hiệu.
**Liên kết tiếng Hàn:** `권한 섀도잉`.

## 18. identity proof /aɪˈdentəti pruːf/
**Part of speech:** noun
**Core meaning (English):** verifiable evidence linking a requester to a claimed identity or credential.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bằng chứng xác minh requester gắn với identity/credential đã khai.
**Grammar & collocations:** `identity-proof verifier` — bộ xác minh; `check a signed assertion` — kiểm tra.
**Examples:** `The gateway required an identity proof before accepting the delegated authority.` → Gateway cần proof trước nhận quyền ủy nhiệm.
**Liên kết tiếng Hàn:** `신원 증명`.

## 19. access decision /ˈækses dɪˈsɪʒən/
**Part of speech:** noun
**Core meaning (English):** the final permit, deny, or conditional result returned for an authorization request.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết quả cuối permit, deny hoặc conditional của request authorization.
**Grammar & collocations:** `access-decision reason` — lý do; `enforce a denied result` — thực thi.
**Examples:** `The access decision permitted the read but required the export to be redacted.` → Decision cho read nhưng yêu cầu redact export.
**Liên kết tiếng Hàn:** `접근 결정`.

## 20. policy combiner /ˈpɒləsi kəmˈbaɪnər/
**Part of speech:** noun
**Core meaning (English):** a component that merges results from multiple policy modules according to a defined combining rule.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component gộp result nhiều policy theo rule kết hợp định trước.
**Grammar & collocations:** `policy-combiner strategy` — strategy; `combine regional and corporate rules` — gộp.
**Examples:** `The policy combiner required both the regional and corporate policies to permit access.` → Combiner cần cả hai policy cho phép.
**Liên kết tiếng Hàn:** `정책 결합기`.

## Review in context

A **subject attribute**, **resource attribute**, and **action context** feed a **conflict resolution algorithm**. An **obligation handler** performs required effects, while an **advice expression** offers optional guidance. A signed **policy bundle** can support a **decision cache**, but a **trust boundary** requires revalidation. **Delegated authority**, an **impersonation scope**, a **capability token**, and a **macaroon caveat** narrow power. A **policy evaluation trace** explains the result; an **entitlement set** describes current rights, a **privilege boundary** limits elevation, and **permission shadowing** reveals hidden grants. An **identity proof** supports the **access decision**, which a **policy combiner** derives from multiple modules.

**Bản dịch tiếng Việt:** **Subject attribute**, **resource attribute** và **action context** đưa dữ liệu vào **conflict resolution algorithm**. **Obligation handler** làm side effect bắt buộc, còn **advice expression** đưa hướng dẫn tùy chọn. **Policy bundle** có chữ ký hỗ trợ **decision cache**, nhưng **trust boundary** yêu cầu validate lại. **Delegated authority**, **impersonation scope**, **capability token** và **macaroon caveat** thu hẹp quyền. **Policy evaluation trace** giải thích kết quả; **entitlement set** mô tả quyền hiện tại, **privilege boundary** giới hạn nâng quyền, và **permission shadowing** làm lộ grant ẩn. **Identity proof** hỗ trợ **access decision**, do **policy combiner** suy ra từ nhiều module.
