# C2 Vocabulary — Policy-as-code and authorization semantics

This lesson follows an access decision from policy modeling through context enrichment, delegation, conflict resolution, and cache invalidation.

Flow: **policy-as-code → decision table → attribute-based access control → relationship-based access control → principal of least privilege → deny override → permit override → policy combining algorithm → obligation → advice → policy information point → policy administration point → policy enforcement point → policy decision point → context enrichment → authorization graph → delegation chain → purpose limitation → separation of duties → temporal constraint → authorization cache invalidation**.

## 1. policy-as-code /ˈpɑləsi æz koʊd/
**Part of speech:** noun
**Core meaning (English):** expressing authorization or governance rules in a versioned, testable, machine-evaluated form.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy được viết, review và deploy như code.
**Grammar & collocations:** `policy-as-code repository` — repository; `test an authorization rule` — kiểm thử.
**Examples:** `Policy-as-code made the production access rule reviewable in the same change request as the service.` → Policy-as-code giúp review rule cùng change service.
**Liên kết tiếng Hàn:** `코드로서의 정책`.

## 2. decision table /dɪˈsɪʒən ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** a structured table mapping combinations of conditions to authorization outcomes or obligations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảng điều kiện và kết quả allow/deny rõ ràng.
**Grammar & collocations:** `decision-table row` — row; `enumerate policy conditions` — liệt kê.
**Examples:** `The decision table exposed an untested combination of region, device, and data sensitivity.` → Bảng lộ tổ hợp chưa test.
**Liên kết tiếng Hàn:** `의사결정 테이블`.

## 3. attribute-based access control /əˈtrɪbjuːt beɪst ˈæksɛs kənˌtroʊl/
**Part of speech:** noun
**Core meaning (English):** authorization based on attributes of the subject, resource, action, and environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyết định dựa trên thuộc tính user/resource/action/context.
**Grammar & collocations:** `attribute-based-access-control policy` — policy; `evaluate subject attributes` — đánh giá.
**Examples:** `Attribute-based access control allowed analysts to read only de-identified records in approved regions.` → ABAC chỉ cho đọc record đã ẩn danh.
**Liên kết tiếng Hàn:** `속성 기반 접근 제어`.

## 4. relationship-based access control /rɪˈleɪʃənʃɪp beɪst ˈæksɛs kənˌtroʊl/
**Part of speech:** noun
**Core meaning (English):** authorization based on relationships between a principal, resource, organization, or other entities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyền dựa trên quan hệ như user thuộc team sở hữu document.
**Grammar & collocations:** `relationship-based-access-control tuple` — tuple; `traverse an ownership relation` — duyệt.
**Examples:** `Relationship-based access control granted access because the reviewer belonged to the case team.` → RBAC theo quan hệ team–case.
**Liên kết tiếng Hàn:** `관계 기반 접근 제어`.

## 5. principal of least privilege /ˈprɪnsəpəl əv liːst ˈprɪvəlɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the security principle that an identity should receive only the permissions necessary for its approved tasks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identity chỉ có quyền tối thiểu cần dùng.
**Grammar & collocations:** `least-privilege review` — review; `remove unnecessary permissions` — loại bỏ.
**Examples:** `The principal of least privilege removed database-wide write access from the reporting job.` → Nguyên tắc loại quyền write toàn database.
**Liên kết tiếng Hàn:** `최소 권한 원칙`.

## 6. deny override /dɪˈnaɪ ˈoʊvərˌraɪd/
**Part of speech:** noun
**Core meaning (English):** a policy-combining rule in which any applicable deny takes precedence over permits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ cần một deny là quyết định cuối deny.
**Grammar & collocations:** `deny-override algorithm` — algorithm; `enforce a restrictive rule` — thực thi.
**Examples:** `Deny override blocked the export because one data-classification rule prohibited external sharing.` → Deny override chặn export.
**Liên kết tiếng Hàn:** `거부 우선`.

## 7. permit override /pərˈmɪt ˈoʊvərˌraɪd/
**Part of speech:** noun
**Core meaning (English):** a policy-combining rule in which an applicable permit can take precedence over otherwise unresolved decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** permit được ưu tiên trong cách combine đã chọn.
**Grammar & collocations:** `permit-override behavior` — behavior; `resolve a policy conflict` — giải quyết.
**Examples:** `Permit override allowed the emergency role to proceed after ordinary rules returned no decision.` → Permit override cho role khẩn cấp chạy.
**Liên kết tiếng Hàn:** `허가 우선`.

## 8. policy combining algorithm /ˈpɑləsi kəmˈbaɪnɪŋ ˈælgəˌrɪðəm/
**Part of speech:** noun
**Core meaning (English):** the defined procedure for merging results from multiple policies into one authorization decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuật toán gộp nhiều policy thành kết quả cuối.
**Grammar & collocations:** `policy-combining-algorithm rule` — rule; `combine nested policies` — gộp.
**Examples:** `The policy combining algorithm treated a missing obligation as an indeterminate result.` → Algorithm xử lý obligation thiếu là indeterminate.
**Liên kết tiếng Hàn:** `정책 결합 알고리즘`.

## 9. obligation /ˌɑbləˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** an action that must be performed when an authorization decision is enforced.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** việc bắt buộc đi kèm quyết định allow/deny.
**Grammar & collocations:** `policy obligation` — obligation; `apply a masking obligation` — áp dụng.
**Examples:** `The permit carried an obligation to mask national-identification numbers before display.` → Permit bắt buộc mask số định danh.
**Liên kết tiếng Hàn:** `의무`.

## 10. advice /ədˈvaɪs/
**Part of speech:** noun
**Core meaning (English):** an optional action or recommendation returned with an authorization decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gợi ý đi kèm, không bắt buộc như obligation.
**Grammar & collocations:** `policy advice` — advice; `emit a logging recommendation` — phát.
**Examples:** `The decision included advice to record the access reason for later review.` → Decision gợi ý ghi reason.
**Liên kết tiếng Hàn:** `권고`.

## 11. policy information point /ˈpɑləsi ˌɪnfərˈmeɪʃən pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a component that supplies subject, resource, environmental, or external attributes needed for a decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nơi cung cấp context/attribute cho policy.
**Grammar & collocations:** `policy-information-point query` — query; `retrieve a device posture` — lấy.
**Examples:** `The policy information point supplied the device's patch level and geographic region.` → PIP cung cấp patch level và region.
**Liên kết tiếng Hàn:** `정책 정보 지점`.

## 12. policy administration point /ˈpɑləsi ədˌmɪnəˈstreɪʃən pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** the component where authorization policies are authored, approved, versioned, or distributed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nơi viết, duyệt và phát hành policy.
**Grammar & collocations:** `policy-administration-point workflow` — workflow; `publish a policy revision` — phát hành.
**Examples:** `The policy administration point required two reviewers before publishing the exception.` → PAP cần hai reviewer.
**Liên kết tiếng Hàn:** `정책 관리 지점`.

## 13. policy enforcement point /ˈpɑləsi ɛnˈfɔrsmənt pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** the component that applies an authorization result by allowing, blocking, transforming, or logging a request.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nơi thực thi kết quả allow/deny.
**Grammar & collocations:** `policy-enforcement-point placement` — placement; `enforce a deny result` — thực thi.
**Examples:** `The policy enforcement point blocked the request before it reached the storage service.` → PEP chặn trước storage.
**Liên kết tiếng Hàn:** `정책 시행 지점`.

## 14. policy decision point /ˈpɑləsi dɪˈsɪʒən pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** the component that evaluates policies and context to produce an authorization decision.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nơi đánh giá policy và context để trả quyết định.
**Grammar & collocations:** `policy-decision-point latency` — latency; `evaluate an access request` — đánh giá.
**Examples:** `The policy decision point returned permit with a masking obligation.` → PDP trả permit kèm obligation mask.
**Liên kết tiếng Hàn:** `정책 결정 지점`.

## 15. context enrichment /ˈkɑntɛkst ɪnˈrɪtʃmənt/
**Part of speech:** noun
**Core meaning (English):** adding trusted identity, device, location, risk, or resource metadata before evaluating authorization.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bổ sung context đáng tin trước khi quyết định.
**Grammar & collocations:** `context-enrichment step` — step; `attach risk metadata` — gắn.
**Examples:** `Context enrichment added the workload's deployment region and current risk score.` → Enrichment thêm region và risk score.
**Liên kết tiếng Hàn:** `컨텍스트 강화`.

## 16. authorization graph /ˌɔθərəˈzeɪʃən ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph representing principals, resources, relationships, and permission paths used to answer access questions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph thể hiện đường từ identity tới quyền trên resource.
**Grammar & collocations:** `authorization-graph traversal` — traversal; `find an inherited permission` — tìm.
**Examples:** `The authorization graph revealed that access was inherited through an obsolete group.` → Graph lộ quyền kế thừa từ group cũ.
**Liên kết tiếng Hàn:** `인가 그래프`.

## 17. delegation chain /ˌdɛləˈɡeɪʃən tʃeɪn/
**Part of speech:** noun
**Core meaning (English):** a sequence of identities or authorities through which permission is delegated from an original owner to a caller.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi ủy quyền từ owner tới caller cuối.
**Grammar & collocations:** `delegation-chain validation` — validation; `trace delegated authority` — truy vết.
**Examples:** `The verifier rejected the request because one link in the delegation chain had expired.` → Verifier từ chối vì một mắt xích hết hạn.
**Liên kết tiếng Hàn:** `위임 체인`.

## 18. purpose limitation /ˈpɝpəs ˌlɪməˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** restricting use of data or permission to the declared and authorized purpose for which access was granted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data chỉ được dùng đúng mục đích đã khai báo.
**Grammar & collocations:** `purpose-limitation rule` — rule; `bind access to a declared purpose` — gắn.
**Examples:** `Purpose limitation allowed the analyst to study safety but not to contact individual customers.` → Giới hạn mục đích chặn liên hệ khách hàng.
**Liên kết tiếng Hàn:** `목적 제한`.

## 19. separation of duties /ˌsɛpəˈreɪʃən əv ˈduːtiz/
**Part of speech:** noun
**Core meaning (English):** dividing a sensitive action across multiple people or roles so no single principal controls the entire process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách quyền duyệt và thực hiện để giảm gian lận.
**Grammar & collocations:** `separation-of-duties constraint` — constraint; `require dual approval` — yêu cầu.
**Examples:** `Separation of duties required one person to request deletion and another to approve it.` → Tách nhiệm vụ yêu cầu hai người.
**Liên kết tiếng Hàn:** `직무 분리`.

## 20. temporal constraint /ˈtɛmpərəl kənˈstreɪnt/
**Part of speech:** noun
**Core meaning (English):** an authorization condition limiting access by time, expiry, schedule, or freshness of a credential.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyền chỉ hợp lệ trong khoảng thời gian hoặc tới expiry.
**Grammar & collocations:** `temporal-constraint check` — check; `expire an emergency grant` — hết hạn.
**Examples:** `The temporal constraint expired the emergency grant after four hours.` → Constraint làm grant khẩn cấp hết hạn sau bốn giờ.
**Liên kết tiếng Hàn:** `시간 제약`.

## Review in context

**Policy-as-code** can render a **decision table** for **attribute-based access control** or **relationship-based access control** under the **principal of least privilege**. A **policy combining algorithm** may use **deny override** or **permit override**, returning an **obligation** or **advice**. The **policy information point** supplies context; the **policy administration point** publishes rules; the **policy decision point** evaluates them; and the **policy enforcement point** applies them. **Context enrichment** supports an **authorization graph** and **delegation chain**. **Purpose limitation**, **separation of duties**, and a **temporal constraint** narrow the final grant.

**Bản dịch tiếng Việt:** **Policy-as-code** có thể biểu diễn **decision table** cho **attribute-based access control** hoặc **relationship-based access control** theo **principal of least privilege**. **Policy combining algorithm** có thể dùng **deny override** hoặc **permit override**, trả về **obligation** hay **advice**. **Policy information point** cung cấp context; **policy administration point** phát hành rule; **policy decision point** đánh giá; và **policy enforcement point** thực thi. **Context enrichment** hỗ trợ **authorization graph** và **delegation chain**. **Purpose limitation**, **separation of duties** và **temporal constraint** thu hẹp quyền cuối.
