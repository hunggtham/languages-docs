# C2 Vocabulary — Archival storage and retention lifecycle

This lesson follows information from active storage into long-term preservation, retrieval, validation, and authorized disposal.

Flow: **cold archive → immutability period → object lock → restore point → retrieval fee → archive index → deep storage → tiering policy → lifecycle transition → expiration rule → retention tombstone → purge certificate → archival manifest → restore rehearsal → recovery catalog → media migration → bitstream validation → preservation copy → archive accession → retention clock**.

## 1. cold archive /koʊld ˈɑːrkaɪv/
**Part of speech:** noun
**Core meaning (English):** low-access storage optimized for long retention rather than fast everyday retrieval.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** storage ít truy cập, tối ưu lưu lâu thay vì lấy nhanh hằng ngày.
**Grammar & collocations:** `cold-archive tier` — tier; `retrieve a historical object` — lấy.
**Examples:** `The compliance export moved to a cold archive after the investigation closed.` → Export compliance chuyển sang archive lạnh.
**Liên kết tiếng Hàn:** `콜드 아카이브`.

## 2. immutability period /ɪˌmjuːtəˈbɪləti ˈpɪəriəd/
**Part of speech:** noun
**Core meaning (English):** the time during which stored content cannot be altered or deleted by ordinary operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian content không thể sửa/xóa bằng operation thường.
**Grammar & collocations:** `immutability-period setting` — setting; `protect a regulatory record` — bảo vệ.
**Examples:** `The immutability period kept the audit export unchanged for seven years.` → Period giữ export audit không đổi bảy năm.
**Liên kết tiếng Hàn:** `불변 기간`.

## 3. object lock /ˈɒbdʒɪkt lɒk/
**Part of speech:** noun
**Core meaning (English):** a storage control that prevents an object from being overwritten or removed before its retention condition ends.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control ngăn overwrite/xóa object trước khi hết retention.
**Grammar & collocations:** `object-lock mode` — mode; `place a record under governance` — đặt.
**Examples:** `Object lock prevented an administrator from deleting the signed evidence early.` → Lock ngăn admin xóa evidence sớm.
**Liên kết tiếng Hàn:** `객체 잠금`.

## 4. restore point /rɪˈstɔːr pɔɪnt/
**Part of speech:** noun
**Core meaning (English):** a preserved state to which data or a system can be returned after loss or corruption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** state được giữ để đưa data/system về sau loss hoặc corruption.
**Grammar & collocations:** `restore-point selection` — lựa chọn; `recover before the faulty change` — phục hồi.
**Examples:** `The operator selected a restore point from before the accidental deletion.` → Operator chọn point trước khi xóa nhầm.
**Liên kết tiếng Hàn:** `복원 지점`.

## 5. retrieval fee /rɪˈtriːvəl fiː/
**Part of speech:** noun
**Core meaning (English):** a cost charged when data is read from a low-access storage tier.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chi phí tính khi đọc data từ tier ít truy cập.
**Grammar & collocations:** `retrieval-fee estimate` — ước tính; `budget a large restoration` — lập ngân sách.
**Examples:** `The retrieval fee made a full archive scan more expensive than a targeted restore.` → Fee khiến scan toàn archive đắt hơn restore chọn lọc.
**Liên kết tiếng Hàn:** `검색 수수료`.

## 6. archive index /ˈɑːrkaɪv ˈɪndeks/
**Part of speech:** noun
**Core meaning (English):** searchable metadata pointing to preserved objects, versions, locations, and retention status.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata tìm kiếm được trỏ tới object, version, location và retention.
**Grammar & collocations:** `archive-index entry` — entry; `locate a historical partition` — định vị.
**Examples:** `The archive index found every invoice version associated with the investigation.` → Index tìm mọi version invoice liên quan.
**Liên kết tiếng Hàn:** `아카이브 색인`.

## 7. deep storage /diːp ˈstɔːrɪdʒ/
**Part of speech:** noun
**Core meaning (English):** an inexpensive, slow-access layer intended for data that may remain untouched for a long time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tầng rẻ, truy cập chậm dành cho data lâu không đụng.
**Grammar & collocations:** `deep-storage class` — class; `stage a rare retrieval` — chuẩn bị.
**Examples:** `Old telemetry moved to deep storage once its operational value declined.` → Telemetry cũ chuyển deep storage.
**Liên kết tiếng Hàn:** `딥 스토리지`.

## 8. tiering policy /ˈtɪərɪŋ ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** rules for moving data among storage classes according to age, access, cost, or importance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule chuyển data giữa class theo tuổi, access, cost hoặc importance.
**Grammar & collocations:** `tiering-policy threshold` — ngưỡng; `demote an inactive object` — hạ tầng.
**Examples:** `The tiering policy moved inactive reports to cheaper storage after ninety days.` → Policy chuyển report inactive sau 90 ngày.
**Liên kết tiếng Hàn:** `계층화 정책`.

## 9. lifecycle transition /ˈlaɪfsaɪkəl trænˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** an automated change from one storage or retention state to another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi tự động từ state storage/retention này sang state khác.
**Grammar & collocations:** `lifecycle-transition rule` — rule; `move an object to archive` — chuyển.
**Examples:** `The lifecycle transition archived completed cases without changing their identifiers.` → Transition archive case hoàn tất mà giữ ID.
**Liên kết tiếng Hàn:** `수명 주기 전환`.

## 10. expiration rule /ˌekspəˈreɪʃən ruːl/
**Part of speech:** noun
**Core meaning (English):** a rule that schedules an object or record to become eligible for deletion after a specified condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule lên lịch object/record đủ điều kiện xóa sau condition.
**Grammar & collocations:** `expiration-rule evaluation` — đánh giá; `calculate a retention deadline` — tính.
**Examples:** `The expiration rule waited for the case to close before starting the retention clock.` → Rule chờ case đóng rồi mới tính retention.
**Liên kết tiếng Hàn:** `만료 규칙`.

## 11. retention tombstone /rɪˈtenʃən ˈtuːmstoʊn/
**Part of speech:** noun
**Core meaning (English):** a durable marker recording that a retained object was intentionally deleted or expired.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** marker bền ghi object retention đã xóa hoặc hết hạn có chủ ý.
**Grammar & collocations:** `retention-tombstone record` — record; `prove an authorized purge` — chứng minh.
**Examples:** `The retention tombstone showed that the message disappeared under an approved policy.` → Tombstone cho thấy message mất theo policy duyệt.
**Liên kết tiếng Hàn:** `보존 툼스톤`.

## 12. purge certificate /pɜːrdʒ sərˈtɪfɪkət/
**Part of speech:** noun
**Core meaning (English):** signed evidence that specified data was deleted from the required storage locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bằng chứng có ký rằng data đã xóa khỏi location cần thiết.
**Grammar & collocations:** `purge-certificate signature` — chữ ký; `attest complete deletion` — chứng nhận.
**Examples:** `The purge certificate confirmed that every replica and cache copy had been removed.` → Certificate xác nhận xóa mọi replica/cache.
**Liên kết tiếng Hàn:** `삭제 인증서`.

## 13. archival manifest /ɑːrˈkaɪvəl ˈmænɪfest/
**Part of speech:** noun
**Core meaning (English):** a record listing the contents, checksums, versions, and locations in an archival package.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record liệt kê content, checksum, version và location của gói archive.
**Grammar & collocations:** `archival-manifest entry` — entry; `reconcile package contents` — đối soát.
**Examples:** `The archival manifest let the curator verify that no scan was missing from the collection.` → Manifest giúp curator kiểm tra không thiếu scan.
**Liên kết tiếng Hàn:** `보관 매니페스트`.

## 14. restore rehearsal /rɪˈstɔːr rɪˈhɜːrsəl/
**Part of speech:** noun
**Core meaning (English):** a planned exercise that restores preserved data to test whether recovery really works.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bài diễn tập restore data lưu để kiểm tra recovery thực sự hoạt động.
**Grammar & collocations:** `restore-rehearsal result` — kết quả; `practice a full recovery` — diễn tập.
**Examples:** `The restore rehearsal found that the archive was intact but the catalog credentials had expired.` → Rehearsal thấy archive tốt nhưng credential catalog hết hạn.
**Liên kết tiếng Hàn:** `복원 리허설`.

## 15. recovery catalog /rɪˈkʌvəri ˈkætəlɒɡ/
**Part of speech:** noun
**Core meaning (English):** metadata that tells recovery tools which backups, versions, dependencies, and procedures are available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata cho recovery biết backup, version, dependency và procedure nào có.
**Grammar & collocations:** `recovery-catalog entry` — entry; `select a compatible backup` — chọn.
**Examples:** `The recovery catalog selected a backup whose schema matched the restoration target.` → Catalog chọn backup schema tương thích.
**Liên kết tiếng Hàn:** `복구 카탈로그`.

## 16. media migration /ˈmiːdiə maɪˈɡreɪʃən/
**Part of speech:** noun
**Core meaning (English):** moving preserved data from one physical or logical storage medium to another before the old medium fails or becomes unsupported.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển data lưu từ medium này sang medium khác trước khi cũ hỏng/lỗi thời.
**Grammar & collocations:** `media-migration batch` — batch; `copy a preservation set` — sao chép.
**Examples:** `Media migration moved the archive from aging tape cartridges to a supported object store.` → Migration chuyển archive từ tape cũ sang object store.
**Liên kết tiếng Hàn:** `미디어 마이그레이션`.

## 17. bitstream validation /ˈbɪtstriːm ˌvælɪˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** checking that preserved bytes still conform to their format and remain readable after transfer or time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra byte lưu còn đúng format và đọc được sau chuyển/thời gian.
**Grammar & collocations:** `bitstream-validation report` — report; `parse a migrated file` — parse.
**Examples:** `Bitstream validation caught a file that had a valid checksum but an unreadable internal structure.` → Validation bắt file checksum đúng nhưng structure hỏng.
**Liên kết tiếng Hàn:** `비트스트림 검증`.

## 18. preservation copy /ˌprezərˈveɪʃən ˈkɒpi/
**Part of speech:** noun
**Core meaning (English):** a protected duplicate maintained specifically to preserve an original record's long-term integrity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản duplicate bảo vệ riêng để giữ integrity record gốc lâu dài.
**Grammar & collocations:** `preservation-copy checksum` — checksum; `separate an access derivative` — tách.
**Examples:** `The preservation copy remained untouched while researchers worked from a lower-resolution derivative.` → Copy giữ nguyên, researcher dùng derivative.
**Liên kết tiếng Hàn:** `보존 사본`.

## 19. archive accession /ˈɑːrkaɪv ækˈseʃən/
**Part of speech:** noun
**Core meaning (English):** the formal act of accepting and registering a collection into an archive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hành động chính thức nhận và đăng ký collection vào archive.
**Grammar & collocations:** `archive-accession number` — số; `register a new collection` — đăng ký.
**Examples:** `The archive accession assigned a stable identifier to the donated research collection.` → Accession gán ID ổn định cho collection.
**Liên kết tiếng Hàn:** `보관 등록`.

## 20. retention clock /rɪˈtenʃən klɒk/
**Part of speech:** noun
**Core meaning (English):** the tracked timer that determines when a record reaches its retention deadline.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timer theo dõi đến khi record chạm hạn retention.
**Grammar & collocations:** `retention-clock start` — bắt đầu; `pause a legal timer` — tạm dừng.
**Examples:** `The retention clock started when the case closed rather than when the file was uploaded.` → Clock bắt đầu khi case đóng.
**Liên kết tiếng Hàn:** `보존 시계`.

## Review in context

A **cold archive** uses an **immutability period** and **object lock** to protect old data. A **restore point** supports recovery, but a **retrieval fee** makes planning important; an **archive index** locates content in **deep storage**. A **tiering policy** drives a **lifecycle transition**, while an **expiration rule** starts deletion. A **retention tombstone** records the event and a **purge certificate** proves it. An **archival manifest** lists contents, a **restore rehearsal** tests reality, and a **recovery catalog** guides selection. **Media migration** moves aging data, **bitstream validation** checks readability, a **preservation copy** protects the original, **archive accession** registers a collection, and a **retention clock** tracks the deadline.

**Bản dịch tiếng Việt:** **Cold archive** dùng **immutability period** và **object lock** để bảo vệ data cũ. **Restore point** hỗ trợ recovery, nhưng **retrieval fee** khiến planning quan trọng; **archive index** tìm content trong **deep storage**. **Tiering policy** điều khiển **lifecycle transition**, còn **expiration rule** bắt đầu xóa. **Retention tombstone** ghi sự kiện và **purge certificate** chứng minh. **Archival manifest** liệt kê content, **restore rehearsal** thử thực tế, còn **recovery catalog** hướng dẫn chọn backup. **Media migration** chuyển data cũ, **bitstream validation** kiểm tra khả năng đọc, **preservation copy** giữ bản gốc, **archive accession** đăng ký collection, và **retention clock** theo dõi hạn.
