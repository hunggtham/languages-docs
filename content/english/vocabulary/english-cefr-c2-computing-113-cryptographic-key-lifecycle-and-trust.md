# C2 Vocabulary — Cryptographic key lifecycle and trust

This lesson follows a protected secret from generation and trust establishment through use limits, compromise response, rotation, and retirement.

Flow: **key hierarchy → cryptographic boundary → nonce reuse → key compromise → certificate pinning → certificate rollover → revocation list → key ceremony → secret zero → cryptoperiod → algorithm agility → cipher suite policy → forward secrecy → key inventory → revocation reason → attestation policy → key version → encryption context → plaintext boundary → key usage constraint**.

## 1. key hierarchy /kiː ˈhaɪərɑːrki/
**Part of speech:** noun
**Core meaning (English):** an organized relationship in which root, wrapping, and data keys protect one another at different levels.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ có tổ chức giữa root, wrapping và data key ở nhiều tầng bảo vệ nhau.
**Grammar & collocations:** `key-hierarchy level` — cấp; `wrap a subordinate key` — bọc.
**Examples:** `The key hierarchy let the service rotate a data key without exposing the root key.` → Hierarchy cho phép đổi data key mà không lộ root.
**Liên kết tiếng Hàn:** `키 계층`.

## 2. cryptographic boundary /ˌkrɪptəˈɡræfɪk ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** the defined perimeter within which cryptographic operations and protected key material are controlled.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới nơi operation mã hóa và key material được kiểm soát.
**Grammar & collocations:** `cryptographic-boundary review` — review; `keep plaintext outside the module` — giữ.
**Examples:** `The cryptographic boundary kept private keys inside the hardware security module.` → Boundary giữ private key trong HSM.
**Liên kết tiếng Hàn:** `암호 경계`.

## 3. nonce reuse /nɒns riːˈjuːs/
**Part of speech:** noun
**Core meaning (English):** using the same one-time value more than once where a cryptographic construction requires uniqueness.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dùng lại value một lần trong khi scheme mã hóa yêu cầu unique.
**Grammar & collocations:** `nonce-reuse vulnerability` — lỗ hổng; `detect a repeated nonce` — phát hiện.
**Examples:** `Nonce reuse exposed a pattern that the authenticated-encryption design was meant to hide.` → Reuse làm lộ pattern đáng lẽ phải che.
**Liên kết tiếng Hàn:** `논스 재사용`.

## 4. key compromise /kiː ˈkɒmprəmaɪz/
**Part of speech:** noun
**Core meaning (English):** a loss of confidence that a cryptographic key remains secret or under authorized control.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mất niềm tin rằng key còn bí mật hoặc nằm trong quyền kiểm soát.
**Grammar & collocations:** `key-compromise response` — phản ứng; `revoke an exposed key` — thu hồi.
**Examples:** `The suspected key compromise triggered immediate revocation and a forensic review.` → Nghi compromise kích hoạt revoke và điều tra.
**Liên kết tiếng Hàn:** `키 손상`.

## 5. certificate pinning /sərˈtɪfɪkət ˈpɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** restricting a client to an expected certificate or public-key identity instead of trusting every otherwise valid issuer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn client vào certificate/public key dự kiến thay vì tin mọi issuer hợp lệ.
**Grammar & collocations:** `certificate-pinning rule` — rule; `reject an unexpected chain` — từ chối.
**Examples:** `Certificate pinning rejected a connection that used a valid but unauthorized intermediate.` → Pinning từ chối intermediate hợp lệ nhưng không được phép.
**Liên kết tiếng Hàn:** `인증서 피닝`.

## 6. certificate rollover /sərˈtɪfɪkət ˈroʊloʊvər/
**Part of speech:** noun
**Core meaning (English):** replacing an expiring certificate while coordinating overlap so clients continue to trust the service.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay certificate sắp hết hạn và phối hợp overlap để client vẫn trust.
**Grammar & collocations:** `certificate-rollover window` — khoảng; `publish a successor chain` — công bố.
**Examples:** `The certificate rollover published the new chain before the old certificate expired.` → Rollover công bố chain mới trước khi cũ hết hạn.
**Liên kết tiếng Hàn:** `인증서 롤오버`.

## 7. revocation list /ˌrevəˈkeɪʃən lɪst/
**Part of speech:** noun
**Core meaning (English):** a published collection of certificates or credentials that must no longer be trusted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** danh sách công bố certificate/credential không còn được trust.
**Grammar & collocations:** `revocation-list update` — cập nhật; `check a serial number` — kiểm tra.
**Examples:** `The client downloaded the revocation list before accepting the partner certificate.` → Client tải list trước khi chấp nhận certificate.
**Liên kết tiếng Hàn:** `폐기 목록`.

## 8. key ceremony /kiː ˈserəmoʊni/
**Part of speech:** noun
**Core meaning (English):** a controlled procedure in which trusted participants generate, split, transfer, or activate important keys.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy trình kiểm soát để participant tin cậy tạo, chia, chuyển hoặc kích hoạt key quan trọng.
**Grammar & collocations:** `key-ceremony record` — biên bản; `require dual control` — yêu cầu.
**Examples:** `The key ceremony required two officers to activate the root signing key.` → Ceremony cần hai officer kích hoạt root key.
**Liên kết tiếng Hàn:** `키 세리머니`.

## 9. secret zero /ˈsiːkrət ˈzɪroʊ/
**Part of speech:** noun
**Core meaning (English):** the initial credential needed to bootstrap access to a secret-management system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** credential đầu tiên để bootstrap quyền vào hệ quản lý secret.
**Grammar & collocations:** `secret-zero problem` — vấn đề; `bootstrap trust without embedding a password` — khởi tạo.
**Examples:** `The deployment solved the secret zero problem with workload identity instead of a baked-in password.` → Deployment giải quyết bằng workload identity.
**Liên kết tiếng Hàn:** `시크릿 제로`.

## 10. cryptoperiod /ˈkrɪptoʊˌpɪəriəd/
**Part of speech:** noun
**Core meaning (English):** the approved time span during which a cryptographic key may be used.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng thời gian được duyệt mà key mã hóa được phép dùng.
**Grammar & collocations:** `cryptoperiod expiry` — hết hạn; `retire a key on schedule` — ngừng.
**Examples:** `The signing key reached the end of its cryptoperiod and was replaced during maintenance.` → Key hết cryptoperiod và được thay.
**Liên kết tiếng Hàn:** `암호 기간`.

## 11. algorithm agility /ˈælɡərɪðəm əˈdʒɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability to replace a cryptographic algorithm or parameter without redesigning the whole system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng thay algorithm/parameter mà không thiết kế lại toàn hệ thống.
**Grammar & collocations:** `algorithm-agility plan` — kế hoạch; `migrate away from a weak primitive` — chuyển.
**Examples:** `Algorithm agility allowed the service to disable the deprecated digest through configuration.` → Agility cho phép tắt digest cũ bằng config.
**Liên kết tiếng Hàn:** `암호 알고리즘 민첩성`.

## 12. cipher suite policy /ˈsaɪfər swiːt ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a rule selecting which combinations of encryption, authentication, and key-exchange algorithms a connection may use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule chọn tổ hợp mã hóa, xác thực và trao đổi key cho connection.
**Grammar & collocations:** `cipher-suite-policy exception` — ngoại lệ; `disable a legacy suite` — tắt.
**Examples:** `The cipher suite policy removed algorithms that lacked forward protection.` → Policy bỏ algorithm thiếu bảo vệ forward.
**Liên kết tiếng Hàn:** `암호 스위트 정책`.

## 13. forward secrecy /ˈfɔːrwərd ˈsiːkrəsi/
**Part of speech:** noun
**Core meaning (English):** a property preventing later compromise of a long-term key from decrypting previously recorded sessions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** property ngăn key dài hạn bị lộ sau này giải mã session đã ghi trước đó.
**Grammar & collocations:** `forward-secrecy guarantee` — bảo đảm; `derive an ephemeral session key` — dẫn xuất.
**Examples:** `Forward secrecy limited the damage after an old server certificate was exposed.` → Forward secrecy giới hạn thiệt hại.
**Liên kết tiếng Hàn:** `순방향 비밀성`.

## 14. key inventory /kiː ˈɪnvəntɔːri/
**Part of speech:** noun
**Core meaning (English):** an authoritative register of keys, owners, purposes, locations, versions, and lifecycle states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sổ authoritative ghi key, owner, purpose, location, version và lifecycle state.
**Grammar & collocations:** `key-inventory record` — record; `identify an unowned key` — nhận diện.
**Examples:** `The key inventory revealed an encryption key whose owner had left the company.` → Inventory lộ key không còn owner.
**Liên kết tiếng Hàn:** `키 인벤토리`.

## 15. revocation reason /ˌrevəˈkeɪʃən ˈriːzən/
**Part of speech:** noun
**Core meaning (English):** the documented explanation for withdrawing trust from a certificate or credential.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lý do được ghi nhận khi rút trust khỏi certificate/credential.
**Grammar & collocations:** `revocation-reason code` — code; `record suspected exposure` — ghi.
**Examples:** `The revocation reason stated that the private key might have been copied.` → Reason ghi private key có thể bị copy.
**Liên kết tiếng Hàn:** `폐기 사유`.

## 16. attestation policy /ˌætestˈeɪʃən ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a rule defining which measured platform state is trusted to perform a protected action.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule định nghĩa platform state nào được trust để làm action bảo vệ.
**Grammar & collocations:** `attestation-policy decision` — quyết định; `accept a measured boot state` — chấp nhận.
**Examples:** `The attestation policy released the decryption key only to an approved firmware measurement.` → Policy chỉ release key cho firmware measurement chuẩn.
**Liên kết tiếng Hàn:** `증명 정책`.

## 17. key version /kiː ˈvɜːrʒən/
**Part of speech:** noun
**Core meaning (English):** a distinct lifecycle revision of a cryptographic key used to select the correct protection material.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** revision lifecycle riêng của key để chọn material bảo vệ đúng.
**Grammar & collocations:** `key-version identifier` — identifier; `decrypt with a historical version` — giải mã.
**Examples:** `The archive stored the key version beside each encrypted object for future recovery.` → Archive lưu version cạnh object mã hóa.
**Liên kết tiếng Hàn:** `키 버전`.

## 18. encryption context /ɪnˈkrɪpʃən ˈkɒntekst/
**Part of speech:** noun
**Core meaning (English):** authenticated metadata that binds encrypted data to an intended resource, purpose, or condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata được xác thực, gắn data mã hóa với resource, purpose hoặc điều kiện.
**Grammar & collocations:** `encryption-context mismatch` — mismatch; `bind ciphertext to a tenant` — gắn.
**Examples:** `The encryption context prevented a ciphertext copied from one tenant from opening under another.` → Context ngăn ciphertext tenant này mở ở tenant khác.
**Liên kết tiếng Hàn:** `암호화 컨텍스트`.

## 19. plaintext boundary /ˈpleɪntekst ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** the point in a system where protected ciphertext becomes readable plaintext or vice versa.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm system chuyển ciphertext bảo vệ thành plaintext đọc được hoặc ngược lại.
**Grammar & collocations:** `plaintext-boundary control` — control; `minimize cleartext exposure` — giảm.
**Examples:** `The plaintext boundary stayed inside the payment enclave rather than the application server.` → Boundary nằm trong enclave payment.
**Liên kết tiếng Hàn:** `평문 경계`.

## 20. key usage constraint /kiː ˈjuːs kənˈstreɪnt/
**Part of speech:** noun
**Core meaning (English):** a rule limiting what operation, data, identity, or environment may use a particular key.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule giới hạn operation, data, identity hoặc environment được dùng key.
**Grammar & collocations:** `key-usage-constraint check` — kiểm tra; `separate signing from encryption` — tách.
**Examples:** `The key usage constraint allowed signing but refused decryption with the service identity.` → Constraint cho sign nhưng cấm decrypt.
**Liên kết tiếng Hàn:** `키 사용 제약`.

## Review in context

A **key hierarchy** places secrets inside a **cryptographic boundary**, where **nonce reuse** is prevented and **key compromise** can be contained. **Certificate pinning**, **certificate rollover**, a **revocation list**, and a documented **key ceremony** maintain trust. **Secret zero** bootstraps access; a **cryptoperiod**, **algorithm agility**, and a **cipher suite policy** govern change, while **forward secrecy** protects old sessions. A **key inventory** records ownership, a **revocation reason** explains withdrawal, and an **attestation policy** decides which platform may receive a key. **Key version** selects historical material, **encryption context** binds ciphertext, a **plaintext boundary** limits exposure, and a **key usage constraint** restricts operations.

**Bản dịch tiếng Việt:** **Key hierarchy** đặt secret trong **cryptographic boundary**, nơi ngăn **nonce reuse** và xử lý **key compromise**. **Certificate pinning**, **certificate rollover**, **revocation list** và **key ceremony** duy trì trust. **Secret zero** khởi tạo quyền; **cryptoperiod**, **algorithm agility** và **cipher suite policy** quản lý thay đổi, còn **forward secrecy** bảo vệ session cũ. **Key inventory** ghi ownership, **revocation reason** giải thích việc thu hồi, và **attestation policy** quyết định platform nào nhận key. **Key version** chọn material lịch sử, **encryption context** gắn ciphertext, **plaintext boundary** giới hạn lộ, còn **key usage constraint** hạn chế operation.
