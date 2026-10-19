# C2 Vocabulary — Schema compatibility and contract evolution

This lesson follows a data contract from versioning and registration through migration, compatibility testing, and rollout gates.

Flow: **backward compatibility → forward compatibility → reader schema → writer schema → compatibility registry → field deprecation → wire-format version → unknown-field preservation → enum evolution → union widening → default-value semantics → schema fingerprint → contract test → breaking-change budget → migration dual-read → dual-write bridge → consumer-driven contract → payload canonicalization → compatibility gate → schema translation layer**.

## 1. backward compatibility /ˈbækwərd kəmˌpætəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability of an older reader or consumer to continue processing data produced under a newer contract.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reader cũ vẫn đọc được data schema mới.
**Grammar & collocations:** `backward-compatibility rule` — rule; `preserve an old consumer` — bảo vệ.
**Examples:** `Backward compatibility allowed the old mobile client to ignore a newly added optional field.` → Tương thích ngược cho client cũ bỏ qua field mới.
**Liên kết tiếng Hàn:** `하위 호환성`.

## 2. forward compatibility /ˈfɔrwərd kəmˌpætəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability of a newer reader or consumer to process data written under an older contract.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reader mới vẫn đọc được data schema cũ.
**Grammar & collocations:** `forward-compatibility check` — check; `accept an older payload` — chấp nhận.
**Examples:** `Forward compatibility mattered when a new service replayed archived events from before the migration.` → Tương thích xuôi cần khi replay event cũ.
**Liên kết tiếng Hàn:** `상위 호환성`.

## 3. reader schema /ˈriːdər ˈskiːmə/
**Part of speech:** noun
**Core meaning (English):** the schema a consumer uses to interpret fields and types in an incoming payload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** schema bên đọc dùng để hiểu payload.
**Grammar & collocations:** `reader-schema resolution` — resolution; `project incoming fields` — ánh xạ.
**Examples:** `The reader schema supplied a default when an archived event lacked the new currency field.` → Reader schema dùng default cho event cũ.
**Liên kết tiếng Hàn:** `리더 스키마`.

## 4. writer schema /ˈraɪtər ˈskiːmə/
**Part of speech:** noun
**Core meaning (English):** the schema used by a producer to validate and encode a payload before transmission or storage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** schema bên ghi kiểm tra và encode payload.
**Grammar & collocations:** `writer-schema version` — version; `validate a produced record` — xác thực.
**Examples:** `The writer schema rejected a decimal value that exceeded the contract's declared precision.` → Writer schema từ chối decimal vượt precision.
**Liên kết tiếng Hàn:** `라이터 스키마`.

## 5. compatibility registry /kəmˌpætəˈbɪləti ˈrɛdʒəstri/
**Part of speech:** noun
**Core meaning (English):** a service that stores contract versions and evaluates proposed changes against registered consumers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** registry giữ version và kiểm tra change.
**Grammar & collocations:** `compatibility-registry policy` — policy; `register a subject version` — đăng ký.
**Examples:** `The compatibility registry blocked a field removal because three consumers still depended on it.` → Registry chặn xóa field.
**Liên kết tiếng Hàn:** `호환성 레지스트리`.

## 6. field deprecation /fiːld ˌdɛprəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the controlled process of marking a field for eventual removal while maintaining a migration period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đánh dấu field sắp bỏ nhưng vẫn giữ thời gian chuyển.
**Grammar & collocations:** `field-deprecation notice` — notice; `announce a removal deadline` — thông báo.
**Examples:** `Field deprecation began with telemetry showing that no active reader requested the legacy value.` → Deprecation bắt đầu sau telemetry.
**Liên kết tiếng Hàn:** `필드 사용 중단`.

## 7. wire-format version /waɪər ˈfɔrmæt ˈvɝʒən/
**Part of speech:** noun
**Core meaning (English):** a version identifier describing how a payload is encoded for transport or persistence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** version của cách encode payload trên wire.
**Grammar & collocations:** `wire-format-version header` — header; `negotiate an encoding revision` — thương lượng.
**Examples:** `The wire-format version let the gateway select a decoder before reading the body.` → Version cho gateway chọn decoder.
**Liên kết tiếng Hàn:** `와이어 형식 버전`.

## 8. unknown-field preservation /ʌnˈnoʊn fiːld ˌprɛzərˈveɪʃən/
**Part of speech:** noun
**Core meaning (English):** retaining fields a reader does not understand so a later writer does not silently erase them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ field lạ khi đọc–ghi lại.
**Grammar & collocations:** `unknown-field-preservation mode` — mode; `round-trip an extension` — giữ vòng.
**Examples:** `Unknown-field preservation allowed an old proxy to forward a new privacy flag.` → Preservation cho proxy cũ chuyển flag mới.
**Liên kết tiếng Hàn:** `알 수 없는 필드 보존`.

## 9. enum evolution /ˈiːnəm ˌɛvəˈluːʃən/
**Part of speech:** noun
**Core meaning (English):** changing the set of allowed symbolic values while keeping old readers and validation logic safe.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mở rộng/chỉnh enum mà reader cũ vẫn an toàn.
**Grammar & collocations:** `enum-evolution policy` — policy; `handle an unknown symbol` — xử lý.
**Examples:** `Enum evolution required old clients to map the new status to an explicit fallback state.` → Enum mới cần fallback rõ ở client cũ.
**Liên kết tiếng Hàn:** `열거형 진화`.

## 10. union widening /ˈjuːnjən ˈwaɪdənɪŋ/
**Part of speech:** noun
**Core meaning (English):** expanding a tagged union so a field may legally contain additional variants.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** union được mở rộng thêm variant hợp lệ.
**Grammar & collocations:** `union-widening change` — change; `decode a new variant` — giải mã.
**Examples:** `Union widening added a structured error without changing the representation of existing successes.` → Widening thêm error có cấu trúc.
**Liên kết tiếng Hàn:** `유니온 확장`.

## 11. default-value semantics /dɪˈfɔlt ˈvæljuː səˈmæntɪks/
**Part of speech:** noun
**Core meaning (English):** rules defining when a missing field receives a default and how that default affects meaning.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule field thiếu nhận default và default mang nghĩa gì.
**Grammar & collocations:** `default-value-semantics note` — note; `distinguish absent from zero` — phân biệt.
**Examples:** `Default-value semantics treated an absent consent flag as unknown rather than false.` → Default coi flag thiếu là unknown.
**Liên kết tiếng Hàn:** `기본값 의미론`.

## 12. schema fingerprint /ˈskiːmə ˈfɪŋɡərˌprɪnt/
**Part of speech:** noun
**Core meaning (English):** a compact identifier derived from a schema's normalized structure and used to recognize versions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ID ngắn từ cấu trúc schema chuẩn hóa.
**Grammar & collocations:** `schema-fingerprint cache` — cache; `match a payload to a contract` — đối chiếu.
**Examples:** `The schema fingerprint prevented a decoder from applying the wrong field order.` → Fingerprint ngăn decoder dùng nhầm order.
**Liên kết tiếng Hàn:** `스키마 지문`.

## 13. contract test /ˈkɑntrækt tɛst/
**Part of speech:** noun
**Core meaning (English):** an automated test that verifies an interface remains compatible with the expectations of its consumers or providers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test tự động kiểm tra interface không phá consumer/provider.
**Grammar & collocations:** `contract-test fixture` — fixture; `verify a consumer expectation` — xác minh.
**Examples:** `The contract test failed before deployment because the service renamed a required field.` → Contract test fail trước deploy.
**Liên kết tiếng Hàn:** `계약 테스트`.

## 14. breaking-change budget /ˈbreɪkɪŋ tʃeɪndʒ ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** an explicit limit on incompatible changes a platform may introduce during a release period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách giới hạn change phá tương thích.
**Grammar & collocations:** `breaking-change-budget review` — review; `spend a compatibility exception` — dùng.
**Examples:** `The breaking-change budget allowed one major version cut but no emergency field removals.` → Budget cho một major version.
**Liên kết tiếng Hàn:** `호환성 파괴 변경 예산`.

## 15. migration dual-read /maɪˈɡreɪʃən ˈduːəl riːd/
**Part of speech:** noun
**Core meaning (English):** a migration phase in which a service reads both old and new representations while comparing or preferring one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giai đoạn đọc song song format cũ và mới.
**Grammar & collocations:** `migration-dual-read phase` — phase; `compare decoded values` — so sánh.
**Examples:** `Migration dual-read exposed a timezone conversion difference before the new format became primary.` → Dual-read lộ khác biệt timezone.
**Liên kết tiếng Hàn:** `마이그레이션 이중 읽기`.

## 16. dual-write bridge /ˈduːəl raɪt brɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a temporary component that writes equivalent data to both an old and a new contract during migration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component tạm ghi cả format cũ và mới.
**Grammar & collocations:** `dual-write-bridge rollback` — rollback; `keep representations synchronized` — đồng bộ.
**Examples:** `The dual-write bridge fed the legacy export until every downstream reader migrated.` → Bridge tiếp tục feed export cũ.
**Liên kết tiếng Hàn:** `이중 쓰기 브리지`.

## 17. consumer-driven contract /kənˈsuːmər ˈdrɪvən ˈkɑntrækt/
**Part of speech:** noun
**Core meaning (English):** an interface contract whose compatibility requirements are derived from explicit consumer expectations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** contract được định hình bởi nhu cầu consumer.
**Grammar & collocations:** `consumer-driven-contract suite` — suite; `publish an expectation` — công bố.
**Examples:** `The consumer-driven contract captured a mobile client's requirement for stable error codes.` → Contract ghi yêu cầu error code ổn định.
**Liên kết tiếng Hàn:** `소비자 주도 계약`.

## 18. payload canonicalization /ˈpeɪloʊd kənˌɑnɪkələˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** transforming equivalent payloads into one normalized representation for comparison, signing, or hashing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuẩn hóa payload tương đương về một dạng.
**Grammar & collocations:** `payload-canonicalization step` — step; `normalize field ordering` — chuẩn hóa.
**Examples:** `Payload canonicalization made signatures stable despite different map serialization orders.` → Canonicalization giữ signature ổn định.
**Liên kết tiếng Hàn:** `페이로드 정규화`.

## 19. compatibility gate /kəmˌpætəˈbɪləti ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** a release checkpoint that blocks deployment until contract changes pass compatibility checks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cổng release chặn change chưa tương thích.
**Grammar & collocations:** `compatibility-gate failure` — failure; `block a schema release` — chặn.
**Examples:** `The compatibility gate stopped rollout when an archived consumer could not decode the new union.` → Gate dừng rollout khi consumer cũ không decode được.
**Liên kết tiếng Hàn:** `호환성 게이트`.

## 20. schema translation layer /ˈskiːmə trænzˈleɪʃən ˈleɪər/
**Part of speech:** noun
**Core meaning (English):** a component that converts one contract representation into another while preserving intended meaning.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lớp chuyển đổi giữa hai schema mà giữ nghĩa.
**Grammar & collocations:** `schema-translation-layer adapter` — adapter; `map legacy fields` — ánh xạ.
**Examples:** `The schema translation layer isolated legacy naming from the new domain model.` → Translation layer cô lập tên cũ khỏi model mới.
**Liên kết tiếng Hàn:** `스키마 변환 계층`.

## Review in context

**Backward compatibility** and **forward compatibility** depend on a **reader schema**, **writer schema**, and **compatibility registry**. **Field deprecation**, a **wire-format version**, **unknown-field preservation**, **enum evolution**, **union widening**, and **default-value semantics** protect meaning. A **schema fingerprint** and **contract test** enforce a **breaking-change budget**. During migration, **migration dual-read** and a **dual-write bridge** support a **consumer-driven contract**. **Payload canonicalization**, a **compatibility gate**, and a **schema translation layer** make rollout auditable.

**Bản dịch tiếng Việt:** **Backward compatibility** và **forward compatibility** phụ thuộc **reader schema**, **writer schema** và **compatibility registry**. **Field deprecation**, **wire-format version**, **unknown-field preservation**, **enum evolution**, **union widening** và **default-value semantics** bảo vệ ý nghĩa. **Schema fingerprint** và **contract test** thực thi **breaking-change budget**. Khi migration, **migration dual-read** và **dual-write bridge** hỗ trợ **consumer-driven contract**. **Payload canonicalization**, **compatibility gate** và **schema translation layer** làm rollout audit được.
