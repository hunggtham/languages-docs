# C2 Vocabulary — Release engineering and operational readiness

This lesson follows a software change from release planning and deployment strategy through compatibility, migration, admission control, and availability targets.

Flow: **release train → dark launch → dual-environment deployment → rolling deployment → recreate deployment → deployment freeze → release candidate → dependency lockfile → version pinning → semantic versioning → compatibility matrix → deprecation notice → migration guide → upgrade path → operator pattern → custom resource → admission webhook → traffic shadow → request mirroring → availability target**.

## 1. release train /rɪˈliːs treɪn/
**Part of speech:** noun
**Core meaning (English):** a regular schedule that groups planned changes into predictable release windows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lịch đều đặn gom thay đổi vào các cửa sổ release dễ dự đoán.
**Grammar & collocations:** `release-train cadence` — nhịp; `board a scheduled release` — tham gia.
**Examples:** `The team moved the feature to the next release train instead of rushing an untested patch.` → Team chuyển feature sang train kế tiếp thay patch chưa test.
**Liên kết tiếng Hàn:** `릴리스 트레인`.

## 2. dark launch /dɑːrk lɔːntʃ/
**Part of speech:** noun
**Core meaning (English):** deploying a feature to production infrastructure while keeping it hidden from normal users.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** deploy feature vào production nhưng ẩn khỏi user bình thường.
**Grammar & collocations:** `dark-launch cohort` — nhóm; `enable a hidden path` — bật.
**Examples:** `The dark launch collected performance data before the search interface became visible.` → Dark launch thu data performance trước khi interface hiện.
**Liên kết tiếng Hàn:** `다크 런치`.

## 3. dual-environment deployment /ˈduːəl ɪnˈvaɪərənmənt dɪˈplɔɪmənt/
**Part of speech:** noun
**Core meaning (English):** a deployment strategy that keeps separate old and new environments so traffic can switch between them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** strategy giữ environment cũ và mới riêng để chuyển traffic giữa chúng.
**Grammar & collocations:** `dual-environment-deployment switch` — chuyển; `cut traffic to the new environment` — chuyển.
**Examples:** `The dual-environment deployment switched traffic back when the new database migration failed.` → Deployment hai environment chuyển traffic về khi migration database fail.
**Liên kết tiếng Hàn:** `블루-그린 배포`.

## 4. rolling deployment /ˈroʊlɪŋ dɪˈplɔɪmənt/
**Part of speech:** noun
**Core meaning (English):** a deployment that replaces instances gradually while some old and new instances run together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** deploy thay instance dần dần, old/new cùng chạy một thời gian.
**Grammar & collocations:** `rolling-deployment batch` — batch; `replace instances gradually` — thay.
**Examples:** `The rolling deployment limited the change to five workers at a time.` → Deployment rolling giới hạn năm worker mỗi lượt.
**Liên kết tiếng Hàn:** `롤링 배포`.

## 5. recreate deployment /ˌriːkriˈeɪt dɪˈplɔɪmənt/
**Part of speech:** noun
**Core meaning (English):** a deployment strategy that stops the old instances before creating the new ones.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** strategy dừng instance cũ trước rồi tạo instance mới.
**Grammar & collocations:** `recreate-deployment outage` — outage; `replace all instances` — thay.
**Examples:** `The recreate deployment caused a brief outage but avoided running incompatible versions together.` → Recreate gây outage ngắn nhưng tránh version incompatible cùng chạy.
**Liên kết tiếng Hàn:** `재생성 배포`.

## 6. deployment freeze /dɪˈplɔɪmənt friːz/
**Part of speech:** noun
**Core meaning (English):** a temporary rule prohibiting routine production changes during a sensitive period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule tạm cấm change production thường lệ trong thời gian nhạy cảm.
**Grammar & collocations:** `deployment-freeze exception` — ngoại lệ; `enforce a holiday freeze` — áp dụng.
**Examples:** `The deployment freeze protected the payment system during the annual sales event.` → Freeze bảo vệ payment system trong đợt sale.
**Liên kết tiếng Hàn:** `배포 동결`.

## 7. release candidate /rɪˈliːs ˈkændɪdeɪt/
**Part of speech:** noun
**Core meaning (English):** a build considered complete enough to become the final release if no serious defect is found.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** build gần hoàn chỉnh, có thể thành release cuối nếu không có lỗi nặng.
**Grammar & collocations:** `release-candidate build` — build; `sign off a candidate` — phê duyệt.
**Examples:** `The release candidate passed compatibility tests on every supported platform.` → Candidate qua test tương thích trên mọi platform.
**Liên kết tiếng Hàn:** `릴리스 후보`.

## 8. dependency lockfile /dɪˈpendənsi ˈlɒkfaɪl/
**Part of speech:** noun
**Core meaning (English):** a file recording exact dependency versions and often their integrity data for repeatable installation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** file ghi version dependency chính xác và integrity để install lặp lại.
**Grammar & collocations:** `dependency-lockfile diff` — diff; `refresh a resolved version` — làm mới.
**Examples:** `The dependency lockfile kept the release build from silently upgrading a parser.` → Lockfile ngăn build tự nâng parser.
**Liên kết tiếng Hàn:** `종속성 잠금 파일`.

## 9. version pinning /ˈvɜːrʒən ˈpɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** explicitly restricting a dependency or tool to a chosen version instead of accepting a moving range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cố định dependency/tool ở version chọn thay vì range thay đổi.
**Grammar & collocations:** `version-pinning policy` — policy; `pin a compiler release` — cố định.
**Examples:** `Version pinning prevented the CI image from receiving an unreviewed compiler change.` → Pinning ngăn CI nhận compiler chưa review.
**Liên kết tiếng Hàn:** `버전 고정`.

## 10. semantic versioning /sɪˈmæntɪk ˈvɜːrʒənɪŋ/
**Part of speech:** noun
**Core meaning (English):** a versioning convention in which version-number changes signal compatible features, fixes, or breaking changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy ước version báo feature tương thích, fix hoặc breaking change qua số version.
**Grammar & collocations:** `semantic-versioning rule` — rule; `publish a major version` — phát hành.
**Examples:** `Semantic versioning marked the removed API as a major release.` → Versioning đánh dấu API bị xóa là major release.
**Liên kết tiếng Hàn:** `유의적 버전 관리`.

## 11. compatibility matrix /kəmˌpætəˈbɪləti ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a table showing which combinations of versions, platforms, or components work together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảng cho thấy tổ hợp version/platform/component nào chạy cùng nhau.
**Grammar & collocations:** `compatibility-matrix entry` — entry; `test a supported combination` — test.
**Examples:** `The compatibility matrix showed that the plugin required the newer runtime.` → Matrix cho thấy plugin cần runtime mới.
**Liên kết tiếng Hàn:** `호환성 매트릭스`.

## 12. deprecation notice /ˌdep rəˈkeɪʃən ˈnoʊtɪs/
**Part of speech:** noun
**Core meaning (English):** a message stating that a feature remains available for now but should no longer be adopted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thông báo feature còn dùng tạm nhưng không nên dùng mới.
**Grammar & collocations:** `deprecation-notice period` — thời hạn; `announce an end-of-support date` — thông báo.
**Examples:** `The deprecation notice gave customers a year to migrate from the old endpoint.` → Notice cho khách một năm migrate endpoint cũ.
**Liên kết tiếng Hàn:** `지원 중단 공지`.

## 13. migration guide /maɪˈɡreɪʃən ɡaɪd/
**Part of speech:** noun
**Core meaning (English):** instructions for moving users, data, or integrations from an old interface or system to a new one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hướng dẫn chuyển user, data hoặc integration từ hệ cũ sang hệ mới.
**Grammar & collocations:** `migration-guide step` — bước; `follow the upgrade instructions` — làm theo.
**Examples:** `The migration guide explained how to rename fields without interrupting ingestion.` → Guide giải thích đổi tên field mà không ngắt ingestion.
**Liên kết tiếng Hàn:** `마이그레이션 가이드`.

## 14. upgrade path /ˈʌpɡreɪd pɑːθ/
**Part of speech:** noun
**Core meaning (English):** a supported sequence of changes that moves a system from its current version to a target version.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi change được hỗ trợ đưa system từ version hiện tại tới version đích.
**Grammar & collocations:** `upgrade-path constraint` — constraint; `skip an unsupported version` — bỏ qua.
**Examples:** `The upgrade path required an intermediate release before the database could move to the new format.` → Path cần release trung gian trước format mới.
**Liên kết tiếng Hàn:** `업그레이드 경로`.

## 15. operator pattern /ˈɒpəreɪtər ˈpætərn/
**Part of speech:** noun
**Core meaning (English):** a controller pattern that automates operational knowledge for a specialized application or workload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pattern controller tự động hóa kiến thức vận hành cho workload chuyên biệt.
**Grammar & collocations:** `operator-pattern controller` — controller; `automate a backup cycle` — tự động.
**Examples:** `The operator pattern created replicas and repaired them when a node disappeared.` → Pattern tạo replica và sửa khi node mất.
**Liên kết tiếng Hàn:** `오퍼레이터 패턴`.

## 16. custom resource /ˈkʌstəm ˈriːsɔːrs/
**Part of speech:** noun
**Core meaning (English):** an extension object that adds a domain-specific resource type to a declarative control system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** object mở rộng thêm resource type riêng cho control system khai báo.
**Grammar & collocations:** `custom-resource definition` — definition; `reconcile a desired object` — reconcile.
**Examples:** `The platform stored the database cluster as a custom resource watched by its controller.` → Platform lưu cluster database thành resource custom.
**Liên kết tiếng Hàn:** `사용자 정의 리소스`.

## 17. admission webhook /ədˈmɪʃən ˈwebhʊk/
**Part of speech:** noun
**Core meaning (English):** a callback that validates or mutates an object before a control plane accepts it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** callback validate hoặc mutate object trước khi control plane nhận.
**Grammar & collocations:** `admission-webhook policy` — policy; `reject an unsafe object` — từ chối.
**Examples:** `The admission webhook rejected a deployment that lacked an approved image signature.` → Webhook từ chối deployment thiếu signature image.
**Liên kết tiếng Hàn:** `승인 웹훅`.

## 18. traffic shadow /ˈtræfɪk ˈʃædoʊ/
**Part of speech:** noun
**Core meaning (English):** a copy of production requests sent to another version for observation without using its responses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản copy request production gửi version khác để quan sát, không dùng response.
**Grammar & collocations:** `traffic-shadow stream` — stream; `compare shadow responses` — so sánh.
**Examples:** `Traffic shadow exposed a serialization problem before the new service received real users.` → Shadow lộ lỗi serialization trước user thật.
**Liên kết tiếng Hàn:** `트래픽 섀도`.

## 19. request mirroring /rɪˈkwest ˈmɪrərɪŋ/
**Part of speech:** noun
**Core meaning (English):** forwarding a copy of a request to a secondary destination while the primary response remains authoritative.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển bản copy request tới đích phụ, response chính vẫn authoritative.
**Grammar & collocations:** `request-mirroring route` — route; `mirror selected traffic` — mirror.
**Examples:** `Request mirroring sent checkout calls to the rewritten service for comparison.` → Mirroring gửi call checkout tới service viết lại để so.
**Liên kết tiếng Hàn:** `요청 미러링`.

## 20. availability target /əˌveɪləˈbɪləti ˈtɑːrɡɪt/
**Part of speech:** noun
**Core meaning (English):** a stated level of service uptime or accessibility that a system is expected to achieve.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức uptime/accessibility service được kỳ vọng đạt.
**Grammar & collocations:** `availability-target breach` — breach; `measure monthly uptime` — đo.
**Examples:** `The regional outage pushed the service below its availability target for the quarter.` → Outage vùng kéo service dưới target availability quý.
**Liên kết tiếng Hàn:** `가용성 목표`.

## Review in context

A **release train** schedules changes; a **dark launch** hides a feature while a **dual-environment deployment**, **rolling deployment**, or **recreate deployment** changes production. A **deployment freeze** protects sensitive periods, and a **release candidate** awaits approval. A **dependency lockfile** and **version pinning** make builds repeatable; **semantic versioning** and a **compatibility matrix** explain support. A **deprecation notice**, **migration guide**, and **upgrade path** help users move safely. An **operator pattern** manages a **custom resource**, while an **admission webhook** validates it. **Traffic shadow** and **request mirroring** test a new path without changing the primary response, and an **availability target** measures the outcome.

**Bản dịch tiếng Việt:** **Release train** lên lịch change; **dark launch** ẩn feature trong khi **dual-environment deployment**, **rolling deployment** hoặc **recreate deployment** đổi production. **Deployment freeze** bảo vệ thời gian nhạy cảm, còn **release candidate** chờ duyệt. **Dependency lockfile** và **version pinning** làm build lặp lại; **semantic versioning** và **compatibility matrix** giải thích support. **Deprecation notice**, **migration guide** và **upgrade path** giúp user chuyển an toàn. **Operator pattern** quản lý **custom resource**, còn **admission webhook** validate nó. **Traffic shadow** và **request mirroring** test path mới mà không đổi response chính, còn **availability target** đo kết quả.
