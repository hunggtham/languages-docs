# C2 Vocabulary — Data governance and privacy controls

This lesson follows governed data from ownership and classification through access policy, masking, residency, deletion, and evidence of responsible use.

Flow: **data contract → data product → data steward → data owner → classification taxonomy → classification label → sensitive-field policy → policy tag → policy inheritance → attribute-based access → column masking → row-level security → dynamic data masking → masking exception → tokenized identifier → pseudonymization key → consent ledger → data residency → deletion propagation**.

## 1. data contract /ˈdeɪtə ˈkɒntrækt/
**Part of speech:** noun
**Core meaning (English):** an explicit agreement defining a dataset's fields, semantics, quality expectations, and change obligations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thỏa thuận nêu field, ý nghĩa, chất lượng và trách nhiệm thay đổi của dataset.
**Grammar & collocations:** `data-contract test` — kiểm thử; `honour a producer obligation` — tuân thủ.
**Examples:** `The data contract required the billing team to preserve the meaning of every customer identifier.` → Contract buộc team billing giữ nguyên ý nghĩa identifier.
**Liên kết tiếng Hàn:** `데이터 계약`.

## 2. data product /ˈdeɪtə ˈprɒdʌkt/
**Part of speech:** noun
**Core meaning (English):** a maintained dataset or analytical service with a defined owner, users, quality level, and interface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dataset/service được duy trì với owner, user, chất lượng và interface rõ ràng.
**Grammar & collocations:** `data-product charter` — điều lệ; `publish a reusable interface` — công bố.
**Examples:** `The customer data product exposed a documented, quality-checked view for analysts.` → Data product cung cấp view có tài liệu và kiểm tra chất lượng.
**Liên kết tiếng Hàn:** `데이터 제품`.

## 3. data steward /ˈdeɪtə ˈstjuːəd/
**Part of speech:** noun
**Core meaning (English):** a person responsible for maintaining a dataset's definitions, quality rules, and day-to-day governance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** người duy trì định nghĩa, quy tắc chất lượng và governance hằng ngày.
**Grammar & collocations:** `data-steward review` — rà soát; `resolve a semantic dispute` — giải quyết.
**Examples:** `The data steward clarified whether an inactive account should remain in the metric.` → Steward làm rõ account inactive có tính vào metric không.
**Liên kết tiếng Hàn:** `데이터 스튜어드`.

## 4. data owner /ˈdeɪtə ˈoʊnər/
**Part of speech:** noun
**Core meaning (English):** an accountable authority who approves a dataset's purpose, access rules, and risk decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** authority chịu trách nhiệm duyệt mục đích, quyền truy cập và quyết định rủi ro.
**Grammar & collocations:** `data-owner approval` — phê duyệt; `assign accountability` — giao trách nhiệm.
**Examples:** `The data owner approved restricted access after reviewing the dataset's business purpose.` → Owner duyệt quyền hạn chế sau khi xem mục đích.
**Liên kết tiếng Hàn:** `데이터 소유자`.

## 5. classification taxonomy /ˌklæsɪfɪˈkeɪʃən tæˈsɒnəmi/
**Part of speech:** noun
**Core meaning (English):** a structured vocabulary of sensitivity and handling categories used to classify information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ thống category có cấu trúc để phân loại độ nhạy và cách xử lý thông tin.
**Grammar & collocations:** `classification-taxonomy level` — cấp độ; `map a field to a category` — ánh xạ.
**Examples:** `The classification taxonomy separated public, internal, confidential, and highly restricted records.` → Taxonomy tách bốn mức hồ sơ.
**Liên kết tiếng Hàn:** `분류 체계`.

## 6. classification label /ˌklæsɪfɪˈkeɪʃən ˈleɪbəl/
**Part of speech:** noun
**Core meaning (English):** a machine-readable or human-visible marker stating how data must be handled.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhãn cho biết data phải được xử lý thế nào.
**Grammar & collocations:** `classification-label propagation` — lan truyền; `attach a sensitivity marker` — gắn.
**Examples:** `A confidential classification label followed the export into the reporting workspace.` → Nhãn confidential đi theo bản export.
**Liên kết tiếng Hàn:** `분류 레이블`.

## 7. sensitive-field policy /ˈsensətɪv fiːld ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a rule specifying protection, access, retention, and audit requirements for a sensitive field.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy tắc bảo vệ, truy cập, lưu giữ và audit cho field nhạy cảm.
**Grammar & collocations:** `sensitive-field-policy rule` — quy tắc; `enforce a protection requirement` — thực thi.
**Examples:** `The sensitive-field policy prohibited raw passport numbers from appearing in application logs.` → Policy cấm số hộ chiếu thô trong log.
**Liên kết tiếng Hàn:** `민감 필드 정책`.

## 8. policy tag /ˈpɒləsi tæɡ/
**Part of speech:** noun
**Core meaning (English):** metadata attached to a resource so automated systems can apply a governance rule.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata gắn vào resource để hệ thống tự áp dụng rule governance.
**Grammar & collocations:** `policy-tag matcher` — bộ khớp; `inherit a protection rule` — kế thừa.
**Examples:** `A policy tag marked the column as export-restricted before the query was submitted.` → Tag đánh dấu column bị hạn chế export.
**Liên kết tiếng Hàn:** `정책 태그`.

## 9. policy inheritance /ˈpɒləsi ɪnˈherɪtəns/
**Part of speech:** noun
**Core meaning (English):** the propagation of a governing rule from a parent resource to its children or derived outputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule governance lan từ resource cha sang resource con hoặc output dẫn xuất.
**Grammar & collocations:** `policy-inheritance chain` — chuỗi; `override a parent restriction` — ghi đè.
**Examples:** `Policy inheritance kept the source table's export restriction on a derived view.` → Inheritance giữ hạn chế export trên view.
**Liên kết tiếng Hàn:** `정책 상속`.

## 10. attribute-based access /əˈtrɪbjuːt beɪst ˈækses/
**Part of speech:** noun
**Core meaning (English):** authorization decided from attributes of the requester, resource, action, or environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyền được quyết định từ thuộc tính của người dùng, resource, action hoặc môi trường.
**Grammar & collocations:** `attribute-based-access rule` — rule; `evaluate a contextual attribute` — đánh giá.
**Examples:** `Attribute-based access allowed doctors to view records only for their assigned clinic.` → Access theo attribute giới hạn theo clinic.
**Liên kết tiếng Hàn:** `속성 기반 접근 제어`.

## 11. column masking /ˈkɒləm ˈmɑːskɪŋ/
**Part of speech:** noun
**Core meaning (English):** transforming a column's returned value so unauthorized readers cannot see its sensitive content.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến đổi giá trị trả về để người không có quyền không thấy nội dung nhạy cảm.
**Grammar & collocations:** `column-masking expression` — biểu thức; `mask a national identifier` — che.
**Examples:** `Column masking replaced the middle digits of each phone number with asterisks.` → Masking thay chữ số giữa bằng dấu sao.
**Liên kết tiếng Hàn:** `열 마스킹`.

## 12. row-level security /roʊ ˈlevəl sɪˈkjʊərəti/
**Part of speech:** noun
**Core meaning (English):** a database control that filters which rows a requester may read or modify.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control database lọc row được đọc hoặc sửa theo requester.
**Grammar & collocations:** `row-level-security predicate` — predicate; `isolate a tenant's rows` — cô lập.
**Examples:** `Row-level security prevented one tenant from selecting another tenant's invoices.` → Security chặn tenant đọc invoice của tenant khác.
**Liên kết tiếng Hàn:** `행 수준 보안`.

## 13. dynamic data masking /daɪˈnæmɪk ˈdeɪtə ˈmɑːskɪŋ/
**Part of speech:** noun
**Core meaning (English):** applying a context-dependent display transformation to sensitive data without changing the stored value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến đổi cách hiển thị theo context mà không đổi giá trị lưu trữ.
**Grammar & collocations:** `dynamic-data-masking rule` — rule; `reveal a value to an auditor` — hiển thị.
**Examples:** `Dynamic data masking showed support agents only the last four digits of a card.` → Masking chỉ cho agent thấy bốn số cuối.
**Liên kết tiếng Hàn:** `동적 데이터 마스킹`.

## 14. masking exception /ˈmɑːskɪŋ ɪkˈsepʃən/
**Part of speech:** noun
**Core meaning (English):** a narrowly approved case in which a normally masked value may be revealed or handled differently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngoại lệ được duyệt để lộ hoặc xử lý khác giá trị thường bị che.
**Grammar & collocations:** `masking-exception approval` — phê duyệt; `time-box an emergency reveal` — giới hạn thời gian.
**Examples:** `The incident team recorded a masking exception before inspecting the exposed identifier.` → Team ghi exception trước khi xem identifier.
**Liên kết tiếng Hàn:** `마스킹 예외`.

## 15. tokenized identifier /ˈtoʊkənaɪzd aɪˈdentɪfaɪər/
**Part of speech:** noun
**Core meaning (English):** a surrogate value that represents an identifier while reducing exposure of the original value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giá trị thay thế đại diện identifier nhưng giảm lộ giá trị gốc.
**Grammar & collocations:** `tokenized-identifier vault` — kho; `replace a raw identifier` — thay thế.
**Examples:** `The analytics pipeline joined records by tokenized identifier instead of copying the raw account number.` → Pipeline join bằng token thay vì số tài khoản.
**Liên kết tiếng Hàn:** `토큰화된 식별자`.

## 16. pseudonymization key /ˌsuːdəˌnɪməˈzeɪʃən kiː/
**Part of speech:** noun
**Core meaning (English):** a secret or controlled mapping key that permits authorized linkage between a pseudonym and its original identity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** key bí mật cho phép người có quyền nối pseudonym với identity gốc.
**Grammar & collocations:** `pseudonymization-key custody` — lưu giữ; `rotate a linkage secret` — xoay vòng.
**Examples:** `The research team stored the pseudonymization key separately from the study dataset.` → Team lưu key tách khỏi dataset nghiên cứu.
**Liên kết tiếng Hàn:** `가명화 키`.

## 17. consent ledger /kənˈsent ˈledʒər/
**Part of speech:** noun
**Core meaning (English):** an auditable record of consent grants, scopes, timestamps, withdrawals, and related evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sổ audit ghi grant, phạm vi, thời điểm và withdrawal của consent.
**Grammar & collocations:** `consent-ledger entry` — mục ghi; `honour a withdrawal` — tôn trọng.
**Examples:** `The consent ledger showed that the participant had withdrawn permission before the mailing job ran.` → Ledger cho thấy người tham gia rút phép trước job.
**Liên kết tiếng Hàn:** `동의 원장`.

## 18. data residency /ˈdeɪtə ˈrezɪdənsi/
**Part of speech:** noun
**Core meaning (English):** the geographic requirement governing where data is stored, processed, or backed up.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** yêu cầu địa lý về nơi data được lưu, xử lý hoặc backup.
**Grammar & collocations:** `data-residency constraint` — ràng buộc; `keep records in-region` — giữ trong vùng.
**Examples:** `The data residency rule kept health records inside the approved regional boundary.` → Rule giữ hồ sơ y tế trong vùng duyệt.
**Liên kết tiếng Hàn:** `데이터 레지던시`.

## 19. deletion propagation /dɪˈliːʃən ˌprɒpəˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the controlled spread of a deletion request across replicas, caches, indexes, backups, and derived datasets.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** việc lan truyền yêu cầu xóa qua replica, cache, index, backup và dataset dẫn xuất.
**Grammar & collocations:** `deletion-propagation job` — job; `revoke a derived copy` — thu hồi.
**Examples:** `Deletion propagation removed the former subscriber from the warehouse and its recommendation index.` → Propagation xóa subscriber khỏi warehouse và index.
**Liên kết tiếng Hàn:** `삭제 전파`.

## 20. retention exception /rɪˈtenʃən ɪkˈsepʃən/
**Part of speech:** noun
**Core meaning (English):** an approved departure from a normal retention period for a documented legal, operational, or research reason.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngoại lệ được duyệt khỏi thời hạn lưu giữ vì lý do pháp lý, vận hành hoặc nghiên cứu.
**Grammar & collocations:** `retention-exception register` — sổ; `document a justified extension` — ghi nhận.
**Examples:** `The retention exception preserved the audit record until the regulatory investigation ended.` → Exception giữ audit record đến khi điều tra kết thúc.
**Liên kết tiếng Hàn:** `보존 예외`.

## Review in context

A **data contract** gives a **data product** clear obligations, while a **data steward** and **data owner** divide operational and accountable decisions. A **classification taxonomy** assigns a **classification label**; a **sensitive-field policy**, **policy tag**, and **policy inheritance** carry that decision into enforcement. **Attribute-based access**, **column masking**, **row-level security**, and **dynamic data masking** restrict exposure, with a documented **masking exception** when necessary. A **tokenized identifier** and **pseudonymization key** support controlled linkage, while a **consent ledger** records permission. **Data residency** limits geography, **deletion propagation** carries erasure across copies, and a **retention exception** records a justified extension.

**Bản dịch tiếng Việt:** **Data contract** đặt nghĩa vụ rõ cho **data product**, còn **data steward** và **data owner** chia trách nhiệm vận hành và quyết định. **Classification taxonomy** gán **classification label**; **sensitive-field policy**, **policy tag** và **policy inheritance** đưa quyết định đó vào thực thi. **Attribute-based access**, **column masking**, **row-level security** và **dynamic data masking** hạn chế lộ dữ liệu, với **masking exception** được ghi nhận khi cần. **Tokenized identifier** và **pseudonymization key** hỗ trợ liên kết có kiểm soát, còn **consent ledger** ghi quyền cho phép. **Data residency** giới hạn địa lý, **deletion propagation** lan việc xóa qua các bản sao, và **retention exception** ghi lý do gia hạn.
