# C2 Vocabulary — Secure firmware lifecycle and rolling updates

This milestone lesson treats firmware as a controlled lifecycle: authenticate an image, stage it safely, observe health, and recover from failure.

Flow: **firmware manifest → image authenticity → rollback index → measurement root → update capsule → staged rollout → canary device → activation reset → recovery partition → dual-bank firmware → boot failure counter → watchdog escalation → field-update window → version skew → configuration migration → update dependency graph → health gate → cohort quarantine → delta image → attestation nonce**.

## 1. firmware manifest /ˈfɜːrmwer ˈmænəˌfest/
**Part of speech:** noun
**Core meaning (English):** a signed description of an image's version, contents, dependencies, and installation requirements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô tả được ký về version, contents, dependency và requirement cài đặt của image.
**Grammar & collocations:** `firmware-manifest parser` — parser; `verify declared dependencies` — verify dependency khai báo.
**Examples:** `The firmware manifest rejected an image whose dependency range excluded the installed bootloader.` → Manifest firmware từ chối image có dependency range loại bootloader đang cài.
**Liên kết tiếng Hàn:** `펌웨어 매니페스트`.

## 2. image authenticity /ˈɪmɪdʒ ˌɔːθenˈtɪsəti/
**Part of speech:** noun
**Core meaning (English):** assurance that a software image came from an approved signer and was not altered.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** assurance image đến từ signer được approve và không bị thay đổi.
**Grammar & collocations:** `image-authenticity check` — check; `validate a signature chain` — validate chain chữ ký.
**Examples:** `Image authenticity failed before the device wrote any new code to flash.` → Authenticity image fail trước khi device ghi code mới vào flash.
**Liên kết tiếng Hàn:** `이미지 진본성`.

## 3. rollback index /ˈroʊlbæk ˈɪndeks/
**Part of speech:** noun
**Core meaning (English):** a monotonic version value that prevents installation of an older or revoked image.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** version value tăng một chiều ngăn cài image cũ hoặc bị revoke.
**Grammar & collocations:** `rollback-index comparison` — comparison; `reject a stale build` — reject build cũ.
**Examples:** `The rollback index blocked a vulnerable image restored from an old service bundle.` → Index rollback chặn image dễ bị tấn công khôi phục từ bundle cũ.
**Liên kết tiếng Hàn:** `롤백 인덱스`.

## 4. measurement root /ˈmeʒərmənt ruːt/
**Part of speech:** noun
**Core meaning (English):** the trusted starting point from which a device records or verifies the state of later boot components.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm bắt đầu đáng tin để device record hoặc verify state của boot component sau.
**Grammar & collocations:** `measurement-root register` — register; `extend a boot measurement` — extend measurement boot.
**Examples:** `The measurement root recorded the bootloader before the operating image was released.` → Root measurement ghi bootloader trước khi release operating image.
**Liên kết tiếng Hàn:** `측정 루트`.

## 5. update capsule /ˈʌpdeɪt ˈkæpsəl/
**Part of speech:** noun
**Core meaning (English):** a packaged update object containing image data, metadata, and installation instructions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** object update đóng gói gồm image data, metadata và instruction cài đặt.
**Grammar & collocations:** `update-capsule format` — format; `unpack a signed payload` — unpack payload ký.
**Examples:** `The update capsule included a recovery image and a post-install health check.` → Capsule update gồm recovery image và health check sau cài.
**Liên kết tiếng Hàn:** `업데이트 캡슐`.

## 6. staged rollout /steɪdʒd ˈroʊlaʊt/
**Part of speech:** noun
**Core meaning (English):** deployment that expands gradually across defined groups instead of updating every device at once.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** deployment mở rộng dần qua group thay vì update mọi device cùng lúc.
**Grammar & collocations:** `staged-rollout policy` — policy; `expand a deployment cohort` — mở rộng cohort deployment.
**Examples:** `The staged rollout paused after the second cohort showed elevated boot failures.` → Rollout staged dừng sau khi cohort thứ hai có boot failure tăng.
**Liên kết tiếng Hàn:** `단계적 배포`.

## 7. canary device /ˈkænəri dɪˈvaɪs/
**Part of speech:** noun
**Core meaning (English):** a small representative device group updated first to reveal problems before broad deployment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm device đại diện nhỏ được update trước để lộ vấn đề.
**Grammar & collocations:** `canary-device cohort` — cohort; `observe early deployment health` — observe health deployment sớm.
**Examples:** `A canary device exposed a thermal regression before the update reached the fleet.` → Device canary lộ regression thermal trước khi update tới fleet.
**Liên kết tiếng Hàn:** `카나리아 장치`.

## 8. activation reset /ˌæktəˈveɪʃən rɪˈset/
**Part of speech:** noun
**Core meaning (English):** a restart that switches a prepared image into the active boot slot.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** restart chuyển image đã chuẩn bị vào boot slot active.
**Grammar & collocations:** `activation-reset sequence` — sequence; `switch the active slot` — đổi slot active.
**Examples:** `The activation reset occurred only after the capsule passed all preboot checks.` → Reset activation chỉ xảy ra sau khi capsule qua mọi preboot check.
**Liên kết tiếng Hàn:** `활성화 리셋`.

## 9. recovery partition /rɪˈkʌvəri pɑːrˈtɪʃən/
**Part of speech:** noun
**Core meaning (English):** a reserved storage region containing software that can restore a device after a failed update.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng storage reserved chứa software restore device sau update fail.
**Grammar & collocations:** `recovery-partition integrity` — integrity; `boot a rescue image` — boot rescue image.
**Examples:** `The recovery partition restored the previous image after repeated boot failure.` → Partition recovery restore image trước sau boot failure lặp.
**Liên kết tiếng Hàn:** `복구 파티션`.

## 10. dual-bank firmware /ˈduəl bæŋk ˈfɜːrmwer/
**Part of speech:** noun
**Core meaning (English):** firmware storage with two independently bootable image banks for safer replacement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** storage firmware có hai bank image boot độc lập để replace an toàn.
**Grammar & collocations:** `dual-bank-firmware selector` — selector; `keep a known-good bank` — giữ bank tốt đã biết.
**Examples:** `Dual-bank firmware let the controller test the new image without erasing the known-good bank.` → Firmware dual-bank cho controller test image mới mà không xóa bank tốt.
**Liên kết tiếng Hàn:** `이중 뱅크 펌웨어`.

## 11. boot failure counter /buːt ˈfeɪljər ˈkaʊntər/
**Part of speech:** noun
**Core meaning (English):** persistent count of unsuccessful boots used to trigger fallback or service action.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** count persistent của boot không thành công dùng kích hoạt fallback hoặc service.
**Grammar & collocations:** `boot-failure-counter threshold` — threshold; `select a fallback slot` — chọn slot fallback.
**Examples:** `The boot failure counter selected recovery after three consecutive invalid starts.` → Counter failure-boot chọn recovery sau ba start invalid liên tiếp.
**Liên kết tiếng Hàn:** `부팅 실패 카운터`.

## 12. watchdog escalation /ˈwɑːtʃdɔːɡ ˌeskəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** progressively stronger reset or containment actions after a watchdog observes repeated nonresponse.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** action reset hoặc containment mạnh dần sau watchdog thấy nonresponse lặp.
**Grammar & collocations:** `watchdog-escalation ladder` — ladder; `advance from task reset to cold reset` — chuyển từ task reset sang cold reset.
**Examples:** `Watchdog escalation isolated the controller before it corrupted the update journal.` → Escalation watchdog cô lập controller trước khi làm hỏng update journal.
**Liên kết tiếng Hàn:** `워치독 에스컬레이션`.

## 13. field-update window /fiːld ˈʌpdeɪt ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** an approved time interval in which a deployed device may interrupt service for an update.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng time được approve để device deployed interrupt service cho update.
**Grammar & collocations:** `field-update-window schedule` — schedule; `coordinate customer downtime` — phối hợp downtime customer.
**Examples:** `The field-update window opened only after the backup link became available.` → Window update-field chỉ mở sau khi backup link sẵn sàng.
**Liên kết tiếng Hàn:** `현장 업데이트 창`.

## 14. version skew /ˈvɜːrʒən skjuː/
**Part of speech:** noun
**Core meaning (English):** incompatibility caused by different software or firmware versions communicating in one system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** incompatibility do software hoặc firmware version khác giao tiếp cùng system.
**Grammar & collocations:** `version-skew detector` — detector; `negotiate a compatible protocol` — negotiate protocol tương thích.
**Examples:** `Version skew appeared when the new controller met an older backplane service.` → Skew version xuất hiện khi controller mới gặp service backplane cũ.
**Liên kết tiếng Hàn:** `버전 불일치`.

## 15. configuration migration /kənˌfɪɡjəˈreɪʃən maɪˈɡreɪʃən/
**Part of speech:** noun
**Core meaning (English):** converting stored settings from an older schema into the format required by a new release.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển setting lưu từ schema cũ sang format release mới yêu cầu.
**Grammar & collocations:** `configuration-migration tool` — tool; `preserve user policy` — giữ policy user.
**Examples:** `Configuration migration preserved the thermal limit while renaming the obsolete field.` → Migration configuration giữ thermal limit khi đổi tên field obsolete.
**Liên kết tiếng Hàn:** `구성 마이그레이션`.

## 16. update dependency graph /ˈʌpdeɪt dɪˈpendənsi ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph showing which components must be updated before others can safely change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph cho thấy component nào phải update trước component khác.
**Grammar & collocations:** `update-dependency-graph cycle` — cycle; `topologically order upgrades` — xếp upgrade theo topology.
**Examples:** `The update dependency graph required the bootloader before the storage driver.` → Graph dependency update yêu cầu bootloader trước storage driver.
**Liên kết tiếng Hàn:** `업데이트 의존성 그래프`.

## 17. health gate /helθ ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** a measured condition that must pass before rollout proceeds to the next cohort.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** condition đo được phải pass trước khi rollout sang cohort kế.
**Grammar & collocations:** `health-gate threshold` — threshold; `block promotion on regressions` — block promotion khi regression.
**Examples:** `The health gate required stable boot time and zero new media errors.` → Gate health yêu cầu boot time ổn định và không có media error mới.
**Liên kết tiếng Hàn:** `상태 게이트`.

## 18. cohort quarantine /ˈkoʊhɔːrt ˈkwɔːrəntiːn/
**Part of speech:** noun
**Core meaning (English):** isolating one deployment group so its behavior cannot spread to later update groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cô lập một deployment group để behavior không lan sang group update sau.
**Grammar & collocations:** `cohort-quarantine rule` — rule; `freeze a suspect population` — freeze population nghi ngờ.
**Examples:** `Cohort quarantine stopped the rollout after a rare watchdog reset appeared.` → Quarantine cohort dừng rollout sau khi watchdog reset hiếm xuất hiện.
**Liên kết tiếng Hàn:** `코호트 격리`.

## 19. delta image /ˈdeltə ˈɪmɪdʒ/
**Part of speech:** noun
**Core meaning (English):** an update containing only the differences between an installed image and a target image.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** update chỉ chứa khác biệt giữa image installed và image target.
**Grammar & collocations:** `delta-image size` — size; `apply a binary patch` — apply binary patch.
**Examples:** `The delta image shortened the field-update window on the low-bandwidth link.` → Image delta rút ngắn window update-field trên link bandwidth thấp.
**Liên kết tiếng Hàn:** `델타 이미지`.

## 20. attestation nonce /ˌæteˈsteɪʃən nɑːns/
**Part of speech:** noun
**Core meaning (English):** a fresh challenge value that prevents replay of an older device-attestation response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** challenge value mới ngăn replay response attestation device cũ.
**Grammar & collocations:** `attestation-nonce freshness` — freshness; `bind evidence to a session` — bind evidence vào session.
**Examples:** `The attestation nonce bound the measured boot report to the current update session.` → Nonce attestation bind boot report measured vào session update hiện tại.
**Liên kết tiếng Hàn:** `증명 논스`.

## Review in context

A **firmware manifest**, **image authenticity**, **rollback index**, and **measurement root** validate an **update capsule** before a **staged rollout** reaches a **canary device** and an **activation reset**. A **recovery partition** and **dual-bank firmware** contain a **boot failure counter** and **watchdog escalation** during the **field-update window**. **Version skew**, **configuration migration**, and an **update dependency graph** are checked by a **health gate**; **cohort quarantine**, a **delta image**, and an **attestation nonce** complete safe deployment.

**Bản dịch tiếng Việt:** **Firmware manifest**, **image authenticity**, **rollback index** và **measurement root** xác thực **update capsule** trước khi **staged rollout** tới **canary device** và **activation reset**. **Recovery partition** và **dual-bank firmware** kiểm soát **boot failure counter** và **watchdog escalation** trong **field-update window**. **Version skew**, **configuration migration** và **update dependency graph** được kiểm tra bởi **health gate**; **cohort quarantine**, **delta image** và **attestation nonce** hoàn tất deployment an toàn.
