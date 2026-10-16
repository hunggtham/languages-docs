# C2 Vocabulary — Robot cybersecurity and secure operations

This lesson follows a connected robot from its attack surface through authenticated commands, resilient communication, and privacy-aware sensing. The network is **robot cybersecurity → robot attack surface → firmware attestation → firmware signing → secure update → key provisioning → command authentication → message integrity → replay protection → nonce management → secure time → anomaly detection → behavioral intrusion detection → sensor spoofing → actuator spoofing → GPS spoofing → jamming resilience → denial-of-service resilience → network segmentation → privacy-preserving perception**.

## 1. robot cybersecurity /ˈroʊbɑːt ˌsaɪbərsɪˈkjʊrəti/
**Part of speech:** noun
**Core meaning (English):** the practices that protect a robot’s software, hardware, communications, and data from unauthorized or harmful actions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các practice bảo vệ software, hardware, communication và data của robot khỏi action trái phép hoặc có hại.
**Grammar & collocations:** `robot-cybersecurity program` — chương trình; `protect a connected platform` — bảo vệ platform kết nối.
**Examples:** `Robot cybersecurity covered the control network as well as the cloud dashboard.` → Robot cybersecurity bao phủ control network cũng như cloud dashboard.
**Liên kết tiếng Hàn:** `로봇 사이버 보안`.

## 2. robot attack surface /ˈroʊbɑːt əˈtæk ˈsɜːrfɪs/
**Part of speech:** noun
**Core meaning (English):** all interfaces through which a robot could be reached, influenced, or compromised.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mọi interface mà qua đó robot có thể bị truy cập, tác động hoặc compromise.
**Grammar & collocations:** `robot-attack-surface inventory` — inventory; `reduce an exposed interface` — giảm interface lộ.
**Examples:** `The audit found that a maintenance port expanded the robot attack surface.` → Audit phát hiện maintenance port mở rộng robot attack surface.
**Liên kết tiếng Hàn:** `로봇 공격 표면`.

## 3. firmware attestation /ˈfɜːrmwer ˌætəˈsteɪʃən/
**Part of speech:** noun
**Core meaning (English):** evidence that a device is running approved firmware and configuration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bằng chứng device đang chạy firmware và configuration được duyệt.
**Grammar & collocations:** `firmware-attestation report` — report; `verify a measured boot state` — xác minh boot state đã đo.
**Examples:** `Firmware attestation blocked the controller whose image hash did not match the approved release.` → Firmware attestation chặn controller có image hash không khớp release được duyệt.
**Liên kết tiếng Hàn:** `펌웨어 증명`.

## 4. firmware signing /ˈfɜːrmwer ˈsaɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** applying a cryptographic signature so a device can verify the origin and authenticity of firmware.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gắn chữ ký cryptographic để device xác minh origin và authenticity của firmware.
**Grammar & collocations:** `firmware-signing key` — key; `verify a release signature` — xác minh signature release.
**Examples:** `Firmware signing prevented an altered controller image from entering production.` → Firmware signing ngăn controller image bị sửa vào production.
**Liên kết tiếng Hàn:** `펌웨어 서명`.

## 5. secure update /sɪˈkjʊr ʌpˈdeɪt/
**Part of speech:** noun
**Core meaning (English):** a software or firmware update delivered with authenticity, integrity, and recovery protections.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** update software/firmware có bảo vệ authenticity, integrity và recovery.
**Grammar & collocations:** `secure-update mechanism` — mechanism; `install an authenticated image` — cài image đã xác thực.
**Examples:** `The secure update resumed after a network interruption without leaving the robot unbootable.` → Secure update tiếp tục sau network interruption mà không làm robot không boot được.
**Liên kết tiếng Hàn:** `보안 업데이트`.

## 6. key provisioning /kiː prəˈvɪʒənɪŋ/
**Part of speech:** noun
**Core meaning (English):** securely creating, installing, and managing cryptographic keys for a device or service.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo, cài và quản lý cryptographic key an toàn cho device hoặc service.
**Grammar & collocations:** `key-provisioning ceremony` — quy trình; `inject a device credential` — nạp credential device.
**Examples:** `Key provisioning gave each robot a unique credential before it joined the factory network.` → Key provisioning cấp credential riêng cho mỗi robot trước khi vào factory network.
**Liên kết tiếng Hàn:** `키 프로비저닝`.

## 7. command authentication /kəˈmænd ɔːˌθentəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** verifying that a control command came from an authorized source.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác minh control command đến từ nguồn được phép.
**Grammar & collocations:** `command-authentication tag` — tag; `reject an unauthorized command` — reject command trái phép.
**Examples:** `Command authentication rejected a remote stop request with an unknown credential.` → Command authentication reject stop request từ xa có credential lạ.
**Liên kết tiếng Hàn:** `명령 인증`.

## 8. message integrity /ˈmesɪdʒ ɪnˈteɡrəti/
**Part of speech:** noun
**Core meaning (English):** assurance that a message was not altered between its sender and receiver.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo đảm message không bị sửa giữa sender và receiver.
**Grammar & collocations:** `message-integrity check` — check; `detect a modified packet` — detect packet bị sửa.
**Examples:** `Message integrity exposed a changed velocity command before the drive applied it.` → Message integrity phát hiện velocity command bị đổi trước khi drive áp dụng.
**Liên kết tiếng Hàn:** `메시지 무결성`.

## 9. replay protection /rɪˈpleɪ prəˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** defenses that prevent an attacker from reusing a valid old message as if it were new.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** defense ngăn attacker dùng lại message cũ hợp lệ như message mới.
**Grammar & collocations:** `replay-protection window` — cửa sổ; `reject a stale command` — reject command cũ.
**Examples:** `Replay protection ignored an old unlock packet captured during testing.` → Replay protection bỏ qua unlock packet cũ bị capture trong lúc test.
**Liên kết tiếng Hàn:** `재생 공격 방지`.

## 10. nonce management /nɑːns ˈmænɪdʒmənt/
**Part of speech:** noun
**Core meaning (English):** generating and tracking values used once to make messages distinguishable and resistant to replay.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo và theo dõi value dùng một lần để phân biệt message và chống replay.
**Grammar & collocations:** `nonce-management policy` — policy; `ensure a value is never reused` — bảo đảm value không reuse.
**Examples:** `Nonce management detected that two commands carried the same sequence value.` → Nonce management phát hiện hai command có cùng sequence value.
**Liên kết tiếng Hàn:** `논스 관리`.

## 11. secure time /sɪˈkjʊr taɪm/
**Part of speech:** noun
**Core meaning (English):** a trustworthy time reference protected well enough to support authentication, ordering, and safety decisions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** time reference đủ đáng tin và được bảo vệ để hỗ trợ authentication, ordering và safety decision.
**Grammar & collocations:** `secure-time source` — source; `validate a timestamp` — validate timestamp.
**Examples:** `Secure time let the gateway reject commands whose timestamps were far outside the allowed window.` → Secure time cho gateway reject command có timestamp lệch xa window cho phép.
**Liên kết tiếng Hàn:** `보안 시간`.

## 12. anomaly detection /əˈnɑːməli dɪˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** identifying behavior or data that deviates significantly from an expected pattern.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhận diện behavior hoặc data lệch đáng kể khỏi pattern expected.
**Grammar & collocations:** `anomaly-detection threshold` — threshold; `flag an unusual command burst` — đánh dấu burst command bất thường.
**Examples:** `Anomaly detection flagged a sudden stream of high-speed commands at midnight.` → Anomaly detection đánh dấu stream high-speed command đột ngột lúc nửa đêm.
**Liên kết tiếng Hàn:** `이상 탐지`.

## 13. behavioral intrusion detection /bɪˈheɪvjərəl ɪnˈtruːʒən dɪˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** intrusion detection based on deviations in system or user behavior rather than only known signatures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** detect intrusion dựa trên deviation behavior của system/user thay vì chỉ signature biết trước.
**Grammar & collocations:** `behavioral-intrusion-detection model` — model; `learn a normal command profile` — học command profile bình thường.
**Examples:** `Behavioral intrusion detection noticed that a service account was controlling an unfamiliar joint.` → Behavioral intrusion detection nhận ra service account điều khiển joint lạ.
**Liên kết tiếng Hàn:** `행동 기반 침입 탐지`.

## 14. sensor spoofing /ˈsensər ˈspuːfɪŋ/
**Part of speech:** noun
**Core meaning (English):** feeding a sensor false signals so the robot forms an incorrect view of the world.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đưa signal giả vào sensor để robot hình thành view sai về thế giới.
**Grammar & collocations:** `sensor-spoofing attack` — attack; `inject a false range` — chèn range giả.
**Examples:** `Sensor spoofing made the robot believe that the clear corridor was blocked.` → Sensor spoofing khiến robot tin corridor trống bị chặn.
**Liên kết tiếng Hàn:** `센서 스푸핑`.

## 15. actuator spoofing /ˈæktʃueɪtər ˈspuːfɪŋ/
**Part of speech:** noun
**Core meaning (English):** falsifying actuator feedback or commands so the robot’s motion differs from what its controller believes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** làm giả actuator feedback hoặc command khiến motion lệch với điều controller tin.
**Grammar & collocations:** `actuator-spoofing scenario` — scenario; `forge a position report` — làm giả position report.
**Examples:** `Actuator spoofing reported a safe joint angle while the mechanism was actually near its stop.` → Actuator spoofing báo joint angle an toàn dù mechanism thật gần stop.
**Liên kết tiếng Hàn:** `구동기 스푸핑`.

## 16. GPS spoofing /ˌdʒiː piː ˈes ˈspuːfɪŋ/
**Part of speech:** noun
**Core meaning (English):** transmitting false satellite-navigation signals that make a receiver calculate the wrong position or time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phát signal satellite-navigation giả khiến receiver tính sai position hoặc time.
**Grammar & collocations:** `GPS-spoofing detector` — detector; `cross-check inertial position` — kiểm tra chéo position inertial.
**Examples:** `GPS spoofing was detected when the inertial estimate disagreed with the reported map position.` → GPS spoofing bị phát hiện khi inertial estimate lệch map position báo về.
**Liên kết tiếng Hàn:** `GPS 스푸핑`.

## 17. jamming resilience /ˈdʒæmɪŋ rɪˈzɪliəns/
**Part of speech:** noun
**Core meaning (English):** the ability to continue useful operation when a communication or navigation signal is deliberately disrupted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng tiếp tục hoạt động hữu ích khi communication hoặc navigation signal bị phá có chủ ý.
**Grammar & collocations:** `jamming-resilience mode` — mode; `fall back to local navigation` — fallback về navigation cục bộ.
**Examples:** `Jamming resilience let the rover finish its return path using onboard odometry.` → Jamming resilience cho rover hoàn thành đường về bằng odometry onboard.
**Liên kết tiếng Hàn:** `재밍 회복력`.

## 18. denial-of-service resilience /dɪˌnaɪəl əv ˈsɜːrvɪs rɪˈzɪliəns/
**Part of speech:** noun
**Core meaning (English):** the ability to preserve critical service when resources or communication are deliberately exhausted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giữ critical service khi resource hoặc communication bị làm cạn có chủ ý.
**Grammar & collocations:** `denial-of-service-resilience design` — thiết kế; `rate-limit abusive traffic` — giới hạn traffic abusive.
**Examples:** `Denial-of-service resilience kept the emergency stop channel available during the traffic flood.` → Denial-of-service resilience giữ emergency stop channel hoạt động trong traffic flood.
**Liên kết tiếng Hàn:** `서비스 거부 회복력`.

## 19. network segmentation /ˈnetwɜːrk ˌseɡmənˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** dividing a network into controlled zones so compromise in one zone cannot freely spread to others.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia network thành zone có kiểm soát để compromise một zone không lan tự do sang zone khác.
**Grammar & collocations:** `network-segmentation policy` — policy; `isolate the safety bus` — cô lập safety bus.
**Examples:** `Network segmentation kept the visitor Wi-Fi away from the motor-control subnet.` → Network segmentation giữ visitor Wi-Fi cách xa motor-control subnet.
**Liên kết tiếng Hàn:** `네트워크 분할`.

## 20. privacy-preserving perception /ˈpraɪvəsi prɪˈzɜːrvɪŋ pərˈsepʃən/
**Part of speech:** noun
**Core meaning (English):** sensing and interpretation designed to provide useful robot awareness while limiting unnecessary personal data exposure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sensing/interpretation giúp robot nhận thức hữu ích nhưng hạn chế lộ personal data không cần thiết.
**Grammar & collocations:** `privacy-preserving-perception pipeline` — pipeline; `blur an identifying face` — làm mờ khuôn mặt nhận dạng được.
**Examples:** `Privacy-preserving perception stored body silhouettes instead of raw hallway video.` → Privacy-preserving perception lưu silhouette body thay vì video hành lang thô.
**Liên kết tiếng Hàn:** `개인정보 보호 지각`.

## Review in context

**Robot cybersecurity** begins with an inventory of the **robot attack surface**. **Firmware attestation**, **firmware signing**, a **secure update**, and **key provisioning** establish device trust; **command authentication**, **message integrity**, **replay protection**, **nonce management**, and **secure time** protect live traffic. **Anomaly detection** and **behavioral intrusion detection** can expose **sensor spoofing**, **actuator spoofing**, or **GPS spoofing**. **Jamming resilience** and **denial-of-service resilience** preserve critical functions, **network segmentation** limits spread, and **privacy-preserving perception** reduces unnecessary exposure of people and places.

**Bản dịch tiếng Việt:** **Robot cybersecurity** bắt đầu bằng inventory của **robot attack surface**. **Firmware attestation**, **firmware signing**, **secure update** và **key provisioning** tạo trust cho device; **command authentication**, **message integrity**, **replay protection**, **nonce management** và **secure time** bảo vệ traffic đang chạy. **Anomaly detection** và **behavioral intrusion detection** có thể làm lộ **sensor spoofing**, **actuator spoofing** hoặc **GPS spoofing**. **Jamming resilience** và **denial-of-service resilience** giữ function quan trọng, **network segmentation** hạn chế lan truyền, còn **privacy-preserving perception** giảm lộ không cần thiết về người và nơi chốn.
