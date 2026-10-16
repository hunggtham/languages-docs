# C2 Vocabulary — Schema evolution and contract compatibility

This lesson follows a shared schema through safe extension, compatibility checks, migration bridges, and a controlled cutover.

Flow: **compatibility mode → breaking change → additive change → default value → union type → enum extension → nullable widening → field alias → migration bridge → dual writer → dual reader → cutover marker → backfill trigger → contract violation → consumer census → version pin → rollout compatibility → schema diff → wire format → field removal**.

## 1. compatibility mode /kəmˌpætəˈbɪləti moʊd/
**Part of speech:** noun
**Core meaning (English):** a selected rule set describing which old and new schema versions may read or write together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ rule quy định schema cũ/mới nào được đọc hoặc ghi cùng nhau.
**Grammar & collocations:** `compatibility-mode setting` — setting; `enforce backward reads` — thực thi.
**Examples:** `The registry used a backward-compatible mode while older consumers were still active.` → Registry dùng mode backward khi consumer cũ còn chạy.
**Liên kết tiếng Hàn:** `호환성 모드`.

## 2. breaking change /ˈbreɪkɪŋ tʃeɪndʒ/
**Part of speech:** noun
**Core meaning (English):** a schema or interface modification that can make an existing consumer fail or misinterpret data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi khiến consumer cũ fail hoặc hiểu sai data.
**Grammar & collocations:** `breaking-change review` — review; `reject an incompatible removal` — từ chối.
**Examples:** `Renaming the field without an alias would be a breaking change for archived readers.` → Đổi tên không alias sẽ phá reader cũ.
**Liên kết tiếng Hàn:** `호환성 파괴 변경`.

## 3. additive change /ˈædətɪv tʃeɪndʒ/
**Part of speech:** noun
**Core meaning (English):** a modification that adds optional information without invalidating existing readers or writers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi thêm thông tin optional mà không làm hỏng reader/writer cũ.
**Grammar & collocations:** `additive-change rule` — rule; `introduce an optional field` — thêm.
**Examples:** `Adding an optional locale field was an additive change for every existing client.` → Thêm locale optional là thay đổi additive.
**Liên kết tiếng Hàn:** `추가 변경`.

## 4. default value /dɪˈfɔːlt ˈvæljuː/
**Part of speech:** noun
**Core meaning (English):** a value supplied when an older record or writer does not provide a newly expected field.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value được điền khi record/writer cũ không có field mới.
**Grammar & collocations:** `default-value semantics` — ngữ nghĩa; `backfill a missing field` — điền.
**Examples:** `The default value treated records without a notification setting as opted out.` → Default coi record thiếu setting là opt out.
**Liên kết tiếng Hàn:** `기본값`.

## 5. union type /ˈjuːnjən taɪp/
**Part of speech:** noun
**Core meaning (English):** a type allowing a field to contain one of several explicitly defined alternatives.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** type cho phép field chứa một trong nhiều alternative định nghĩa rõ.
**Grammar & collocations:** `union-type discriminator` — discriminator; `parse either representation` — phân tích.
**Examples:** `The union type allowed a payment reference to be either a string or a structured object.` → Union cho reference là string hoặc object.
**Liên kết tiếng Hàn:** `합집합 타입`.

## 6. enum extension /ˈiːnəm ɪkˈstenʃən/
**Part of speech:** noun
**Core meaning (English):** adding a new member to an enumerated set while preserving how older consumers handle unknown values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thêm member vào enum mà consumer cũ vẫn xử lý value lạ an toàn.
**Grammar & collocations:** `enum-extension check` — kiểm tra; `tolerate an unknown state` — chịu.
**Examples:** `The enum extension added “paused,” which old clients displayed as a generic status.` → Extension thêm paused, client cũ hiện generic.
**Liên kết tiếng Hàn:** `열거형 확장`.

## 7. nullable widening /ˈnʌləbəl ˈwaɪdənɪŋ/
**Part of speech:** noun
**Core meaning (English):** changing a required field so that it may also contain a null or missing value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi field bắt buộc để cho phép null hoặc thiếu.
**Grammar & collocations:** `nullable-widening risk` — rủi ro; `handle an absent value` — xử lý.
**Examples:** `Nullable widening forced the billing consumer to distinguish zero from an unknown amount.` → Widening buộc phân biệt zero và unknown.
**Liên kết tiếng Hàn:** `널 허용 확장`.

## 8. field alias /fiːld ˈeɪliəs/
**Part of speech:** noun
**Core meaning (English):** an alternate name accepted for a field during a transition between schema versions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tên thay thế được chấp nhận trong thời kỳ chuyển schema.
**Grammar & collocations:** `field-alias map` — map; `accept a legacy name` — chấp nhận.
**Examples:** `The field alias let new readers accept both “postal_code” and “zip_code.”` → Alias cho reader nhận hai tên.
**Liên kết tiếng Hàn:** `필드 별칭`.

## 9. migration bridge /maɪˈɡreɪʃən brɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a temporary adapter or path that lets old and new data representations coexist during migration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** adapter/path tạm cho representation cũ và mới cùng tồn tại khi migrate.
**Grammar & collocations:** `migration-bridge lifetime` — vòng đời; `translate a legacy payload` — chuyển.
**Examples:** `The migration bridge translated legacy events until every producer adopted the new schema.` → Bridge dịch event cũ đến khi producer đổi.
**Liên kết tiếng Hàn:** `마이그레이션 브리지`.

## 10. dual writer /ˈdjuːəl ˈraɪtər/
**Part of speech:** noun
**Core meaning (English):** a producer that writes equivalent information in both an old and a new representation during transition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** producer ghi thông tin tương đương ở dạng cũ và mới trong thời gian chuyển.
**Grammar & collocations:** `dual-writer phase` — phase; `keep representations synchronized` — đồng bộ.
**Examples:** `The dual writer populated the new table while the old export remained supported.` → Writer kép điền table mới và giữ export cũ.
**Liên kết tiếng Hàn:** `이중 라이터`.

## 11. dual reader /ˈdjuːəl ˈriːdər/
**Part of speech:** noun
**Core meaning (English):** a consumer able to interpret both old and new representations during a migration window.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** consumer hiểu được dạng cũ và mới trong migration window.
**Grammar & collocations:** `dual-reader fallback` — fallback; `prefer the new field` — ưu tiên.
**Examples:** `The dual reader preferred the normalized address but fell back to the legacy text.` → Reader kép ưu tiên address chuẩn và fallback text cũ.
**Liên kết tiếng Hàn:** `이중 리더`.

## 12. cutover marker /ˈkʌtˌoʊvər ˈmɑːrkər/
**Part of speech:** noun
**Core meaning (English):** an explicit signal identifying the point after which a new representation becomes authoritative.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tín hiệu đánh dấu từ thời điểm representation mới trở thành authoritative.
**Grammar & collocations:** `cutover-marker timestamp` — timestamp; `switch the source of truth` — chuyển.
**Examples:** `The cutover marker told readers when they could stop checking the legacy column.` → Marker cho reader biết lúc bỏ column cũ.
**Liên kết tiếng Hàn:** `전환 마커`.

## 13. backfill trigger /ˈbækfɪl ˈtrɪɡər/
**Part of speech:** noun
**Core meaning (English):** a condition or event that starts populating a new field or table from historical data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện/event kích hoạt điền field/table mới từ data lịch sử.
**Grammar & collocations:** `backfill-trigger event` — event; `start a historical rewrite` — bắt đầu.
**Examples:** `The backfill trigger started after the new column passed compatibility checks.` → Trigger chạy sau khi column mới pass check.
**Liên kết tiếng Hàn:** `백필 트리거`.

## 14. contract violation /ˈkɒntrækt ˌvaɪəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** behavior that breaks a documented data or interface promise between a producer and its consumers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hành vi phá lời hứa data/interface đã tài liệu hóa giữa producer và consumer.
**Grammar & collocations:** `contract-violation alert` — cảnh báo; `reject an undocumented type change` — từ chối.
**Examples:** `Sending an empty string where null was promised caused a contract violation.` → Gửi empty string thay null là vi phạm contract.
**Liên kết tiếng Hàn:** `계약 위반`.

## 15. consumer census /kənˈsuːmər ˈsensəs/
**Part of speech:** noun
**Core meaning (English):** an inventory of active consumers, versions, owners, and usage patterns before a schema change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** danh sách consumer active, version, owner và usage trước khi đổi schema.
**Grammar & collocations:** `consumer-census report` — report; `identify an unregistered reader` — nhận diện.
**Examples:** `The consumer census found a forgotten batch job still reading the deprecated field.` → Census tìm batch job bị quên vẫn đọc field cũ.
**Liên kết tiếng Hàn:** `소비자 조사`.

## 16. version pin /ˈvɜːrʒən pɪn/
**Part of speech:** noun
**Core meaning (English):** an explicit choice to keep a producer or consumer on one schema version until a planned upgrade.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lựa chọn giữ producer/consumer ở một version đến upgrade có kế hoạch.
**Grammar & collocations:** `version-pin policy` — policy; `hold a client on v2` — giữ.
**Examples:** `The version pin protected a regulated integration until its certification was renewed.` → Pin bảo vệ integration được quản lý.
**Liên kết tiếng Hàn:** `버전 고정`.

## 17. rollout compatibility /ˈroʊlaʊt kəmˌpætəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability of a schema change to remain safe while different versions are deployed simultaneously.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng schema change an toàn khi nhiều version chạy đồng thời.
**Grammar & collocations:** `rollout-compatibility matrix` — ma trận; `deploy readers before writers` — deploy.
**Examples:** `Rollout compatibility required the new readers to ship before producers emitted the new field.` → Compatibility yêu cầu reader mới đi trước producer.
**Liên kết tiếng Hàn:** `롤아웃 호환성`.

## 18. schema diff /ˈskiːmə dɪf/
**Part of speech:** noun
**Core meaning (English):** a structured comparison showing fields, types, constraints, and semantics changed between schema versions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so sánh có cấu trúc về field, type, constraint và semantics giữa version.
**Grammar & collocations:** `schema-diff report` — report; `classify a compatible change` — phân loại.
**Examples:** `The schema diff identified a type narrowing that the automated check had missed.` → Diff lộ việc thu hẹp type.
**Liên kết tiếng Hàn:** `스키마 차이`.

## 19. wire format /waɪər ˈfɔːrmæt/
**Part of speech:** noun
**Core meaning (English):** the concrete byte or text representation transmitted between systems.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dạng byte/text cụ thể truyền giữa hệ thống.
**Grammar & collocations:** `wire-format parser` — parser; `decode a binary payload` — giải mã.
**Examples:** `The wire format stayed compact even though the logical schema gained optional fields.` → Wire format vẫn gọn dù schema thêm field.
**Liên kết tiếng Hàn:** `와이어 형식`.

## 20. field removal /fiːld rɪˈmuːvəl/
**Part of speech:** noun
**Core meaning (English):** permanently deleting a schema field after its consumers have migrated or stopped depending on it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xóa vĩnh viễn field sau khi consumer đã migrate hoặc bỏ phụ thuộc.
**Grammar & collocations:** `field-removal date` — ngày; `retire a deprecated member` — ngừng.
**Examples:** `Field removal waited until the consumer census showed no remaining legacy readers.` → Removal chờ census không còn reader cũ.
**Liên kết tiếng Hàn:** `필드 제거`.

## Review in context

A **compatibility mode** distinguishes a safe **breaking change** from an **additive change**; a **default value**, **union type**, **enum extension**, **nullable widening**, and **field alias** shape that decision. A **migration bridge**, **dual writer**, and **dual reader** let versions coexist until a **cutover marker** appears. A **backfill trigger** fills history, while a **contract violation** exposes a broken promise. A **consumer census** finds dependencies, a **version pin** buys time, and **rollout compatibility** protects mixed deployments. A **schema diff** explains the change, a **wire format** carries it, and **field removal** waits until migration is complete.

**Bản dịch tiếng Việt:** **Compatibility mode** phân biệt **breaking change** và **additive change** an toàn; **default value**, **union type**, **enum extension**, **nullable widening** và **field alias** định hình quyết định. **Migration bridge**, **dual writer** và **dual reader** cho version cùng tồn tại đến **cutover marker**. **Backfill trigger** điền lịch sử, còn **contract violation** lộ lời hứa bị phá. **Consumer census** tìm phụ thuộc, **version pin** mua thời gian, và **rollout compatibility** bảo vệ deploy hỗn hợp. **Schema diff** giải thích thay đổi, **wire format** mang nó, còn **field removal** chỉ xảy ra khi migrate xong.
