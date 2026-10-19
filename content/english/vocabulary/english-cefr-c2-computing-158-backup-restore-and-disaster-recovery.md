# C2 Vocabulary — Backup, restore, and disaster recovery

This lesson follows protected data from backup description and retention through geographic isolation, selective restoration, and point-in-time recovery.

Flow: **backup manifest → incremental backup → full backup → differential backup → backup retention → backup verification → checksum verification → cross-region backup → immutable backup → air-gapped copy → offline archive → replica promotion → restore dependency → recovery manifest → data salvage → partial restore → selective restore → point-in-time recovery → log replay → recovery fork**.

## 1. backup manifest /ˈbækʌp ˈmænəˌfest/
**Part of speech:** noun
**Core meaning (English):** a record describing the contents, versions, locations, and integrity data of a backup set.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record mô tả content, version, location và integrity của backup set.
**Grammar & collocations:** `backup-manifest entry` — entry; `enumerate backed-up objects` — liệt kê.
**Examples:** `The backup manifest listed each database segment and its verification checksum.` → Manifest liệt kê segment và checksum.
**Liên kết tiếng Hàn:** `백업 매니페스트`.

## 2. incremental backup /ˌɪŋkrəˈmentəl ˈbækʌp/
**Part of speech:** noun
**Core meaning (English):** a backup containing changes made since an earlier backup of any type.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** backup chỉ chứa thay đổi kể từ một backup trước đó.
**Grammar & collocations:** `incremental-backup chain` — chain; `capture changed blocks` — chụp.
**Examples:** `The incremental backup captured only the blocks changed since last night's run.` → Backup incremental chỉ lấy block đổi từ tối qua.
**Liên kết tiếng Hàn:** `증분 백업`.

## 3. full backup /fʊl ˈbækʌp/
**Part of speech:** noun
**Core meaning (English):** a backup containing a complete selected dataset rather than only its recent changes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** backup chứa toàn bộ dataset chọn, không chỉ thay đổi mới.
**Grammar & collocations:** `full-backup image` — image; `seed a backup chain` — tạo nền.
**Examples:** `The full backup seeded a new retention cycle before incremental copies resumed.` → Full backup tạo nền trước khi incremental tiếp tục.
**Liên kết tiếng Hàn:** `전체 백업`.

## 4. differential backup /ˌdɪfəˈrenʃəl ˈbækʌp/
**Part of speech:** noun
**Core meaning (English):** a backup containing changes since the most recent full backup.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** backup chứa thay đổi từ full backup gần nhất.
**Grammar & collocations:** `differential-backup size` — size; `restore from a full plus differential` — khôi phục.
**Examples:** `The operator restored the database from the full backup and the latest differential copy.` → Operator restore từ full và differential mới nhất.
**Liên kết tiếng Hàn:** `차등 백업`.

## 5. backup retention /ˈbækʌp rɪˈtenʃən/
**Part of speech:** noun
**Core meaning (English):** the policy determining how long backup copies remain available and when they expire.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy quyết định backup giữ bao lâu và khi nào hết hạn.
**Grammar & collocations:** `backup-retention period` — period; `expire an old copy` — hết hạn.
**Examples:** `Backup retention kept monthly copies longer than daily operational snapshots.` → Retention giữ bản tháng lâu hơn snapshot ngày.
**Liên kết tiếng Hàn:** `백업 보존`.

## 6. backup verification /ˈbækʌp ˌverɪfɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** checking that a backup exists, can be read, and contains the expected data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra backup tồn tại, đọc được và có data mong đợi.
**Grammar & collocations:** `backup-verification job` — job; `test a restore path` — test.
**Examples:** `Backup verification opened a sample archive instead of trusting the upload status alone.` → Verification mở archive mẫu thay chỉ tin upload status.
**Liên kết tiếng Hàn:** `백업 검증`.

## 7. checksum verification /ˈtʃeksʌm ˌverɪfɪˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** comparing a calculated digest with a stored digest to detect corruption or alteration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** so digest tính lại với digest lưu để phát hiện hỏng/sửa.
**Grammar & collocations:** `checksum-verification result` — result; `detect a damaged block` — phát hiện.
**Examples:** `Checksum verification detected a damaged archive before restoration began.` → Verification phát hiện archive hỏng trước restore.
**Liên kết tiếng Hàn:** `체크섬 검증`.

## 8. cross-region backup /ˌkrɒs ˈriːdʒən ˈbækʌp/
**Part of speech:** noun
**Core meaning (English):** a backup copied to a geographically separate region to survive a regional outage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** backup copy sang region địa lý khác để sống qua outage vùng.
**Grammar & collocations:** `cross-region-backup lag` — lag; `replicate data overseas` — sao chép.
**Examples:** `The cross-region backup remained available after the primary region lost power.` → Backup cross-region còn sau khi vùng chính mất điện.
**Liên kết tiếng Hàn:** `리전 간 백업`.

## 9. immutable backup /ɪˈmjuːtəbəl ˈbækʌp/
**Part of speech:** noun
**Core meaning (English):** a backup protected from modification or deletion for a defined retention period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** backup được bảo vệ khỏi sửa/xóa trong thời hạn.
**Grammar & collocations:** `immutable-backup lock` — lock; `preserve a recovery copy` — giữ.
**Examples:** `The immutable backup survived the ransomware attempt because its retention lock was active.` → Backup immutable sống qua ransomware vì lock còn.
**Liên kết tiếng Hàn:** `불변 백업`.

## 10. air-gapped copy /ˈer ɡæpt ˈkɒpi/
**Part of speech:** noun
**Core meaning (English):** a copy kept disconnected from ordinary networks so remote compromise cannot reach it directly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản copy tách khỏi network thường để compromise từ xa không tới trực tiếp.
**Grammar & collocations:** `air-gapped-copy vault` — vault; `mount media offline` — gắn offline.
**Examples:** `The incident team retrieved an air-gapped copy after online backups were suspected to be altered.` → Team lấy copy air-gap khi backup online nghi bị sửa.
**Liên kết tiếng Hàn:** `에어갭 복사본`.

## 11. offline archive /ˈɒflaɪn ˈɑːrkaɪv/
**Part of speech:** noun
**Core meaning (English):** long-term data storage that is not continuously connected to production systems.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** storage dài hạn không kết nối liên tục với production.
**Grammar & collocations:** `offline-archive catalog` — catalog; `retrieve historical media` — lấy.
**Examples:** `The auditor requested an offline archive of records older than seven years.` → Auditor yêu cầu archive offline record hơn bảy năm.
**Liên kết tiếng Hàn:** `오프라인 아카이브`.

## 12. replica promotion /ˈreplɪkə prəˈmoʊʃən/
**Part of speech:** noun
**Core meaning (English):** making a synchronized secondary copy the authoritative primary after a failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa bản sao đồng bộ thành primary authoritative sau failure.
**Grammar & collocations:** `replica-promotion procedure` — procedure; `fence the old primary` — cô lập.
**Examples:** `Replica promotion moved writes after the old primary stopped responding.` → Promotion chuyển write khi primary cũ mất phản hồi.
**Liên kết tiếng Hàn:** `복제본 승격`.

## 13. restore dependency /rɪˈstɔːr dɪˈpendənsi/
**Part of speech:** noun
**Core meaning (English):** a service, key, network, or prerequisite that must be available before a backup can be restored correctly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** service/key/network/prerequisite cần có trước khi restore đúng.
**Grammar & collocations:** `restore-dependency order` — thứ tự; `rebuild a required service` — dựng lại.
**Examples:** `The runbook listed the key service as a restore dependency for the encrypted database.` → Runbook nêu key service là dependency của database mã hóa.
**Liên kết tiếng Hàn:** `복원 종속성`.

## 14. recovery manifest /rɪˈkʌvəri ˈmænəˌfest/
**Part of speech:** noun
**Core meaning (English):** a structured plan identifying what to restore, in what order, and with which versions or settings.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** plan có cấu trúc nêu restore gì, thứ tự nào, version/setting nào.
**Grammar & collocations:** `recovery-manifest entry` — entry; `sequence restoration steps` — sắp.
**Examples:** `The recovery manifest restored identity before applications that depended on it.` → Manifest restore identity trước app phụ thuộc.
**Liên kết tiếng Hàn:** `복구 매니페스트`.

## 15. data salvage /ˈdeɪtə ˈsælvɪdʒ/
**Part of speech:** noun
**Core meaning (English):** recovering usable information from damaged, incomplete, or partially inaccessible storage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cứu data còn dùng được từ storage hỏng/thiếu/khó truy cập.
**Grammar & collocations:** `data-salvage operation` — operation; `extract readable records` — trích.
**Examples:** `Data salvage recovered readable invoices from the damaged volume.` → Salvage lấy lại invoice đọc được từ volume hỏng.
**Liên kết tiếng Hàn:** `데이터 복구`.

## 16. partial restore /ˈpɑːrʃəl rɪˈstɔːr/
**Part of speech:** noun
**Core meaning (English):** restoring only a selected dataset, table, service, or time range rather than the entire system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** restore một phần dataset/table/service/time thay toàn system.
**Grammar & collocations:** `partial-restore filter` — filter; `restore one tenant` — khôi phục.
**Examples:** `The team performed a partial restore of the affected tenant without replacing the whole cluster.` → Team restore riêng tenant mà không thay cluster.
**Liên kết tiếng Hàn:** `부분 복원`.

## 17. selective restore /sɪˈlektɪv rɪˈstɔːr/
**Part of speech:** noun
**Core meaning (English):** restoring only chosen objects or records according to explicit selection criteria.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** restore object/record được chọn theo criteria rõ.
**Grammar & collocations:** `selective-restore query` — query; `extract matching records` — trích.
**Examples:** `Selective restore brought back the deleted contracts but not the obsolete drafts.` → Restore chọn lọc đưa contract đã xóa về, không draft cũ.
**Liên kết tiếng Hàn:** `선택적 복원`.

## 18. point-in-time recovery /ˌpɔɪnt ɪn taɪm rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** restoring a system to the state it had at a chosen moment by combining backups with subsequent logs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa system về thời điểm chọn bằng backup và log sau đó.
**Grammar & collocations:** `point-in-time-recovery target` — target; `restore before the bad write` — khôi phục.
**Examples:** `Point-in-time recovery returned the database to just before the accidental deletion.` → Recovery đưa database về ngay trước deletion.
**Liên kết tiếng Hàn:** `특정 시점 복구`.

## 19. log replay /lɒɡ ˈriːpleɪ/
**Part of speech:** noun
**Core meaning (English):** applying recorded operations again to reconstruct or advance a restored state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** áp operation đã ghi lại để dựng/tiến state restore.
**Grammar & collocations:** `log-replay position` — position; `reapply committed events` — áp lại.
**Examples:** `Log replay applied committed orders after the snapshot had been mounted.` → Replay áp order commit sau khi mount snapshot.
**Liên kết tiếng Hàn:** `로그 재생`.

## 20. recovery fork /rɪˈkʌvəri fɔːrk/
**Part of speech:** noun
**Core meaning (English):** a temporary restored copy used to investigate, validate, or extract data without changing the production system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản restore tạm để điều tra/validate/trích data mà không đổi production.
**Grammar & collocations:** `recovery-fork environment` — environment; `inspect a historical state` — kiểm tra.
**Examples:** `The team opened a recovery fork to verify the suspected deletion without touching production.` → Team mở fork để verify deletion mà không đụng production.
**Liên kết tiếng Hàn:** `복구 포크`.

## Review in context

A **backup manifest** describes a set that may contain an **incremental backup**, **full backup**, or **differential backup**. **Backup retention** keeps copies, **backup verification** tests them, and **checksum verification** detects corruption. A **cross-region backup**, **immutable backup**, **air-gapped copy**, and **offline archive** protect against different failures. **Replica promotion** restores authority, but a **restore dependency** must be ready; a **recovery manifest** sequences the work. **Data salvage** rescues damaged records, while a **partial restore** or **selective restore** limits scope. **Point-in-time recovery** combines a snapshot with **log replay**, and a **recovery fork** lets investigators work safely.

**Bản dịch tiếng Việt:** **Backup manifest** mô tả set có thể gồm **incremental backup**, **full backup** hoặc **differential backup**. **Backup retention** giữ bản, **backup verification** test chúng, còn **checksum verification** phát hiện hỏng. **Cross-region backup**, **immutable backup**, **air-gapped copy** và **offline archive** bảo vệ trước các failure khác nhau. **Replica promotion** khôi phục authority, nhưng **restore dependency** phải sẵn sàng; **recovery manifest** sắp thứ tự. **Data salvage** cứu record hỏng, còn **partial restore** hoặc **selective restore** giới hạn phạm vi. **Point-in-time recovery** ghép snapshot với **log replay**, còn **recovery fork** cho investigator làm việc an toàn.
