# C2 Vocabulary — Data interoperability and integration

This lesson follows the design of a shared data meaning from canonical modeling and mapping through exchange, negotiation, adaptation, and conflict handling.

Flow: **canonical data model → semantic mapping → entity resolution → reference data → identity spine → crosswalk table → normalization boundary → interoperability profile → exchange schema → envelope format → capability negotiation → compatibility shim → translation layer → data harmonization → canonical identifier → merge policy → source precedence → mapping specification → semantic adapter → integration contract**.

## 1. canonical data model /kəˈnɒnɪkəl ˈdeɪtə ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** a shared representation that gives common structure and meaning to data from different systems.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn chung tạo cấu trúc và ý nghĩa thống nhất cho data từ nhiều hệ thống.
**Grammar & collocations:** `canonical-data-model layer` — tầng; `align a source field` — căn chỉnh.
**Examples:** `The canonical data model gave billing and support one definition of an active account.` → Model chung định nghĩa thống nhất account active.
**Liên kết tiếng Hàn:** `표준 데이터 모델`.

## 2. semantic mapping /sɪˈmæntɪk ˈmæpɪŋ/
**Part of speech:** noun
**Core meaning (English):** relating fields or values across systems according to meaning rather than merely matching names.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** liên hệ field/value theo ý nghĩa, không chỉ theo tên giống nhau.
**Grammar & collocations:** `semantic-mapping rule` — quy tắc; `resolve a meaning mismatch` — giải quyết.
**Examples:** `Semantic mapping showed that two fields called status represented different business states.` → Mapping cho thấy hai field status khác nghĩa.
**Liên kết tiếng Hàn:** `의미 매핑`.

## 3. entity resolution /ˈentəti ˌrezəˈluːʃən/
**Part of speech:** noun
**Core meaning (English):** determining which records from different sources refer to the same real-world entity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác định record từ nguồn khác có nói về cùng entity thật hay không.
**Grammar & collocations:** `entity-resolution confidence` — độ tin cậy; `match two customer records` — ghép.
**Examples:** `Entity resolution linked two customer profiles despite a changed phone number.` → Resolution nối hai profile dù số điện thoại đổi.
**Liên kết tiếng Hàn:** `개체 식별`.

## 4. reference data /ˈrefərəns ˈdeɪtə/
**Part of speech:** noun
**Core meaning (English):** relatively stable codes, labels, or categories used to interpret operational data consistently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code/label/category tương đối ổn định giúp diễn giải data nhất quán.
**Grammar & collocations:** `reference-data table` — table; `publish an approved code set` — công bố.
**Examples:** `The reference data mapped every country code to one approved display name.` → Reference data map code nước với tên chuẩn.
**Liên kết tiếng Hàn:** `참조 데이터`.

## 5. identity spine /aɪˈdentəti spaɪn/
**Part of speech:** noun
**Core meaning (English):** a durable cross-system identity layer that connects identifiers for the same person, organization, or object.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tầng identity bền vững nối identifier của cùng người, tổ chức hoặc vật thể.
**Grammar & collocations:** `identity-spine key` — key; `anchor a cross-system relationship` — neo.
**Examples:** `The identity spine connected a patient number, portal account, and laboratory record.` → Spine nối ba identifier của bệnh nhân.
**Liên kết tiếng Hàn:** `아이덴티티 스파인`.

## 6. crosswalk table /ˈkrɒswɔːk ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** a table explicitly translating codes, identifiers, or categories between two schemes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** table dịch code, identifier hoặc category giữa hai scheme.
**Grammar & collocations:** `crosswalk-table entry` — mục; `translate a legacy code` — dịch.
**Examples:** `The crosswalk table translated the legacy product codes into the new catalog taxonomy.` → Table dịch code sản phẩm cũ.
**Liên kết tiếng Hàn:** `대응표`.

## 7. normalization boundary /ˌnɔːrməlaɪˈzeɪʃən ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** the point in a pipeline where varied source representations are converted into a common normalized form.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm pipeline chuyển biểu diễn nguồn khác nhau thành dạng chuẩn chung.
**Grammar & collocations:** `normalization-boundary rule` — rule; `standardize a source representation` — chuẩn hóa.
**Examples:** `The normalization boundary converted local timestamps into a single UTC representation.` → Boundary đổi timestamp địa phương thành UTC.
**Liên kết tiếng Hàn:** `정규화 경계`.

## 8. interoperability profile /ˌɪntərˌɒpərəˈbɪləti ˈproʊfaɪl/
**Part of speech:** noun
**Core meaning (English):** a constrained set of standards, versions, and optional features that systems agree to support together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ tiêu chuẩn, version và feature tùy chọn mà hệ thống cùng cam kết hỗ trợ.
**Grammar & collocations:** `interoperability-profile requirement` — yêu cầu; `conform to a shared subset` — tuân theo.
**Examples:** `The interoperability profile excluded optional message features that older clinics could not parse.` → Profile bỏ feature clinic cũ không parse được.
**Liên kết tiếng Hàn:** `상호 운용성 프로필`.

## 9. exchange schema /ɪksˈtʃeɪndʒ ˈskiːmə/
**Part of speech:** noun
**Core meaning (English):** a schema designed for data sent between systems rather than for one system's private storage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** schema dành cho data trao đổi giữa hệ thống, không phải storage nội bộ.
**Grammar & collocations:** `exchange-schema field` — field; `serialize a public message` — serialize.
**Examples:** `The exchange schema used stable names even though each service stored the value differently.` → Schema dùng tên ổn định dù storage khác nhau.
**Liên kết tiếng Hàn:** `교환 스키마`.

## 10. envelope format /ˈenvəloʊ ˈfɔːrmæt/
**Part of speech:** noun
**Core meaning (English):** a wrapper structure carrying a payload together with metadata such as version, sender, and trace information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** wrapper chứa payload và metadata như version, sender, trace.
**Grammar & collocations:** `envelope-format header` — header; `attach a correlation identifier` — gắn.
**Examples:** `The envelope format carried the event version and correlation identifier around the business payload.` → Envelope bọc version và correlation ID.
**Liên kết tiếng Hàn:** `봉투 형식`.

## 11. capability negotiation /ˌkeɪpəˈbɪləti nɪˌɡoʊʃiˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** an exchange in which peers discover which features, encodings, or operations they can support.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trao đổi để peer biết feature, encoding hoặc operation nào hỗ trợ được.
**Grammar & collocations:** `capability-negotiation handshake` — bắt tay; `select a mutually supported mode` — chọn.
**Examples:** `Capability negotiation selected compressed batches because both endpoints supported them.` → Negotiation chọn batch nén mà hai đầu cùng hỗ trợ.
**Liên kết tiếng Hàn:** `기능 협상`.

## 12. compatibility shim /kəmˌpætəˈbɪləti ʃɪm/
**Part of speech:** noun
**Core meaning (English):** a small adapter that lets an older interface work with a newer representation or behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** adapter nhỏ giúp interface cũ làm việc với representation/behavior mới.
**Grammar & collocations:** `compatibility-shim layer` — layer; `bridge a deprecated field` — nối.
**Examples:** `A compatibility shim translated the old status flag until every client adopted the new enum.` → Shim dịch flag cũ đến khi client đổi.
**Liên kết tiếng Hàn:** `호환성 심`.

## 13. translation layer /trænzˈleɪʃən ˈleɪər/
**Part of speech:** noun
**Core meaning (English):** a software layer that converts structures, names, or semantics between incompatible interfaces.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** layer phần mềm chuyển structure, name hoặc semantics giữa interface không tương thích.
**Grammar & collocations:** `translation-layer boundary` — ranh giới; `convert an external payload` — chuyển đổi.
**Examples:** `The translation layer converted the partner's nested address into the platform's flat fields.` → Layer đổi address lồng thành field phẳng.
**Liên kết tiếng Hàn:** `번역 계층`.

## 14. data harmonization /ˈdeɪtə ˌhɑːrmənaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** making data from multiple sources comparable by aligning definitions, units, formats, and timing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** căn chỉnh definition, unit, format và timing để data nhiều nguồn so sánh được.
**Grammar & collocations:** `data-harmonization pass` — lượt; `align measurement units` — căn chỉnh.
**Examples:** `Data harmonization converted pounds and kilograms before the regional comparison.` → Harmonization đổi pound và kg trước so sánh.
**Liên kết tiếng Hàn:** `데이터 조화`.

## 15. canonical identifier /kəˈnɒnɪkəl aɪˈdentɪfaɪər/
**Part of speech:** noun
**Core meaning (English):** the preferred stable identifier used to represent an entity across integrated systems.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identifier ổn định được ưu tiên để đại diện entity trên các hệ thống tích hợp.
**Grammar & collocations:** `canonical-identifier registry` — registry; `issue a stable key` — cấp.
**Examples:** `The integration assigned one canonical identifier to records arriving from three hospitals.` → Integration gán một ID chuẩn cho ba bệnh viện.
**Liên kết tiếng Hàn:** `표준 식별자`.

## 16. merge policy /mɜːrd ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a rule deciding when records may be combined and which values survive the combination.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule quyết định khi nào gộp record và value nào được giữ.
**Grammar & collocations:** `merge-policy conflict` — xung đột; `retain the most recent value` — giữ.
**Examples:** `The merge policy kept the verified address when an older source disagreed.` → Policy giữ address đã verify.
**Liên kết tiếng Hàn:** `병합 정책`.

## 17. source precedence /sɔːrs ˈpresɪdəns/
**Part of speech:** noun
**Core meaning (English):** an ordering that determines which source is trusted when multiple sources provide conflicting values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thứ tự quyết định nguồn nào đáng tin khi value xung đột.
**Grammar & collocations:** `source-precedence rule` — rule; `prefer an authoritative feed` — ưu tiên.
**Examples:** `Source precedence preferred the registry over a stale spreadsheet during the merge.` → Precedence ưu tiên registry hơn spreadsheet cũ.
**Liên kết tiếng Hàn:** `소스 우선순위`.

## 18. mapping specification /ˈmæpɪŋ ˌspesɪfɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a precise document describing how fields, values, transformations, and exceptions move between schemas.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tài liệu chi tiết field, value, transform và exception giữa các schema.
**Grammar & collocations:** `mapping-specification review` — review; `document a conditional transform` — ghi.
**Examples:** `The mapping specification documented how missing middle names should be represented downstream.` → Spec ghi cách biểu diễn middle name thiếu.
**Liên kết tiếng Hàn:** `매핑 사양`.

## 19. semantic adapter /sɪˈmæntɪk əˈdæptər/
**Part of speech:** noun
**Core meaning (English):** an adapter that changes the meaning or interpretation of data as well as its technical shape.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** adapter đổi cả ý nghĩa/diễn giải data, không chỉ hình dạng kỹ thuật.
**Grammar & collocations:** `semantic-adapter test` — kiểm thử; `reinterpret a lifecycle state` — diễn giải lại.
**Examples:** `The semantic adapter converted the partner's “closed” state into the platform's “settled” state.` → Adapter đổi closed thành settled theo nghĩa nền tảng.
**Liên kết tiếng Hàn:** `의미 어댑터`.

## 20. integration contract /ˌɪntəˈɡreɪʃən ˈkɒntrækt/
**Part of speech:** noun
**Core meaning (English):** an agreement defining the messages, timing, errors, ownership, and compatibility obligations between connected systems.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thỏa thuận về message, timing, error, ownership và compatibility giữa hệ thống nối nhau.
**Grammar & collocations:** `integration-contract test` — kiểm thử; `honour an availability promise` — tuân thủ.
**Examples:** `The integration contract required the partner to retry safely and preserve event identifiers.` → Contract buộc partner retry an toàn và giữ event ID.
**Liên kết tiếng Hàn:** `통합 계약`.

## Review in context

A **canonical data model** gives **semantic mapping** a shared target, while **entity resolution**, **reference data**, and an **identity spine** connect records to real entities. A **crosswalk table** and **normalization boundary** make conversions explicit; an **interoperability profile**, **exchange schema**, and **envelope format** define what crosses the boundary. **Capability negotiation** selects a common feature set, a **compatibility shim** and **translation layer** protect older interfaces, and **data harmonization** aligns units and meanings. A **canonical identifier**, **merge policy**, and **source precedence** govern identity and conflicts. A **mapping specification**, **semantic adapter**, and **integration contract** preserve the details needed for reliable cooperation.

**Bản dịch tiếng Việt:** **Canonical data model** tạo đích chung cho **semantic mapping**, còn **entity resolution**, **reference data** và **identity spine** nối record với entity thật. **Crosswalk table** và **normalization boundary** làm rõ chuyển đổi; **interoperability profile**, **exchange schema** và **envelope format** định nghĩa dữ liệu đi qua ranh giới. **Capability negotiation** chọn feature chung, **compatibility shim** và **translation layer** bảo vệ interface cũ, còn **data harmonization** căn chỉnh unit và ý nghĩa. **Canonical identifier**, **merge policy** và **source precedence** quản lý identity và xung đột. **Mapping specification**, **semantic adapter** và **integration contract** giữ chi tiết cần thiết cho hợp tác đáng tin cậy.
