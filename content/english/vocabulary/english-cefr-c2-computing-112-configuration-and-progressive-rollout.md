# C2 Vocabulary — Configuration and progressive rollout

This lesson follows a configuration change from versioned intent through controlled exposure, safeguards, rollback, and long-term drift prevention.

Flow: **configuration snapshot → rollout cohort → configuration drift → immutable setting → default deny → secret rotation → key escrow → config precedence → dynamic reload → hot reload → restart boundary → validation schema → rollout pause → exposure ramp → blast threshold → rollback plan → configuration bundle → flag dependency → rollout gate → progressive delivery**.

## 1. configuration snapshot /kənˌfɪɡjəˈreɪʃən ˈsnæpʃɒt/
**Part of speech:** noun
**Core meaning (English):** a versioned record of configuration values and metadata at a particular point in time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record có version của value config và metadata tại một thời điểm.
**Grammar & collocations:** `configuration-snapshot hash` — mã băm; `restore a known state` — khôi phục.
**Examples:** `The configuration snapshot let operators compare the failing deployment with the last healthy state.` → Snapshot giúp so sánh deployment lỗi với state khỏe.
**Liên kết tiếng Hàn:** `구성 스냅샷`.

## 2. rollout cohort /ˈroʊlaʊt ˈkoʊhɔːrt/
**Part of speech:** noun
**Core meaning (English):** a defined group of users, devices, regions, or requests receiving a change together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm user, device, vùng hoặc request nhận thay đổi cùng nhau.
**Grammar & collocations:** `rollout-cohort identifier` — identifier; `expand the exposed group` — mở rộng.
**Examples:** `The rollout cohort contained employees in one region before external customers were included.` → Cohort đầu gồm nhân viên một vùng.
**Liên kết tiếng Hàn:** `롤아웃 코호트`.

## 3. configuration drift /kənˌfɪɡjəˈreɪʃən drɪft/
**Part of speech:** noun
**Core meaning (English):** gradual divergence between the intended configuration and the values actually running in an environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sự lệch dần giữa config mong muốn và value thực tế đang chạy.
**Grammar & collocations:** `configuration-drift detector` — bộ phát hiện; `reconcile an unmanaged change` — đồng bộ.
**Examples:** `Configuration drift left one worker with a longer timeout than the rest of the cluster.` → Drift khiến một worker timeout khác cluster.
**Liên kết tiếng Hàn:** `구성 드리프트`.

## 4. immutable setting /ɪˈmjuːtəbəl ˈsetɪŋ/
**Part of speech:** noun
**Core meaning (English):** a configuration value that cannot change during a component's lifetime without replacement or restart.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** config không đổi trong lifetime của component nếu không replace/restart.
**Grammar & collocations:** `immutable-setting constraint` — ràng buộc; `bake a value into an image` — đóng gói.
**Examples:** `The database endpoint was an immutable setting, so changing it required a new container.` → Endpoint immutable cần container mới.
**Liên kết tiếng Hàn:** `불변 설정`.

## 5. default deny /dɪˈfɔːlt dɪˈnaɪ/
**Part of speech:** noun
**Core meaning (English):** a security posture in which an unlisted action or resource is refused unless an explicit rule permits it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trạng thái security từ chối mọi thứ chưa được rule cho phép rõ.
**Grammar & collocations:** `default-deny rule` — rule; `grant an explicit exception` — cấp ngoại lệ.
**Examples:** `Default deny blocked a newly introduced endpoint until its policy was reviewed.` → Default deny chặn endpoint mới.
**Liên kết tiếng Hàn:** `기본 거부`.

## 6. secret rotation /ˈsiːkrət roʊˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** replacing a credential or encryption secret on a planned schedule or after suspected exposure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay credential hoặc secret mã hóa theo lịch hoặc sau nghi lộ.
**Grammar & collocations:** `secret-rotation window` — khoảng; `revoke an old credential` — thu hồi.
**Examples:** `Secret rotation issued a new database password before the previous one expired.` → Rotation cấp password mới trước khi cũ hết hạn.
**Liên kết tiếng Hàn:** `비밀 회전`.

## 7. key escrow /kiː ˈeskroʊ/
**Part of speech:** noun
**Core meaning (English):** controlled storage of a cryptographic key so an authorized process can recover or use it under defined conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lưu key mã hóa có kiểm soát để quy trình được quyền phục hồi/dùng khi đủ điều kiện.
**Grammar & collocations:** `key-escrow approval` — phê duyệt; `recover a protected key` — phục hồi.
**Examples:** `Key escrow allowed the compliance team to decrypt an archived record after dual approval.` → Escrow cho team giải mã sau hai phê duyệt.
**Liên kết tiếng Hàn:** `키 에스크로`.

## 8. config precedence /kənˈfɪɡ ˈpresɪdəns/
**Part of speech:** noun
**Core meaning (English):** the ordering that decides which configuration source wins when several sources define the same value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thứ tự quyết định source config nào thắng khi nhiều source cùng định nghĩa value.
**Grammar & collocations:** `config-precedence rule` — rule; `override a baked-in default` — ghi đè.
**Examples:** `Config precedence made the environment variable override the value in the deployment file.` → Precedence cho env variable thắng file deploy.
**Liên kết tiếng Hàn:** `구성 우선순위`.

## 9. dynamic reload /daɪˈnæmɪk riːˈloʊd/
**Part of speech:** noun
**Core meaning (English):** applying a changed configuration to a running component without replacing the process.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** áp dụng config mới cho component đang chạy mà không thay process.
**Grammar & collocations:** `dynamic-reload handler` — handler; `apply a threshold at runtime` — áp dụng.
**Examples:** `Dynamic reload changed the cache limit without interrupting active requests.` → Reload đổi cache limit không gián đoạn request.
**Liên kết tiếng Hàn:** `동적 재로드`.

## 10. hot reload /hɒt riːˈloʊd/
**Part of speech:** noun
**Core meaning (English):** refreshing code, rules, or configuration in a live component while preserving its running session where possible.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** refresh code/rule/config trong component live và cố giữ session đang chạy.
**Grammar & collocations:** `hot-reload boundary` — ranh giới; `refresh a routing rule` — làm mới.
**Examples:** `Hot reload updated the routing table while existing connections remained open.` → Hot reload cập nhật route mà giữ connection.
**Liên kết tiếng Hàn:** `핫 리로드`.

## 11. restart boundary /ˈriːstɑːrt ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** the point at which a component must restart before a configuration change can take effect.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm config mới chỉ có hiệu lực sau khi component restart.
**Grammar & collocations:** `restart-boundary analysis` — phân tích; `schedule a controlled restart` — lên lịch.
**Examples:** `The restart boundary forced the team to drain traffic before changing the memory allocator.` → Boundary buộc drain traffic trước đổi allocator.
**Liên kết tiếng Hàn:** `재시작 경계`.

## 12. validation schema /ˌvælɪˈdeɪʃən ˈskiːmə/
**Part of speech:** noun
**Core meaning (English):** a formal description used to reject configuration values with invalid types, ranges, or relationships.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô tả formal dùng để từ chối config sai type, range hoặc relationship.
**Grammar & collocations:** `validation-schema error` — lỗi; `reject an inconsistent combination` — từ chối.
**Examples:** `The validation schema rejected a retry limit that exceeded the timeout budget.` → Schema chặn retry limit vượt timeout.
**Liên kết tiếng Hàn:** `검증 스키마`.

## 13. rollout pause /ˈroʊlaʊt pɔːz/
**Part of speech:** noun
**Core meaning (English):** a deliberate stop in increasing exposure while operators inspect evidence from the current cohort.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dừng có chủ ý việc mở rộng exposure để xem evidence cohort hiện tại.
**Grammar & collocations:** `rollout-pause condition` — điều kiện; `hold at ten percent` — giữ.
**Examples:** `The rollout pause held exposure at ten percent while the error-rate trend was investigated.` → Pause giữ exposure 10% để điều tra.
**Liên kết tiếng Hàn:** `롤아웃 일시 중지`.

## 14. exposure ramp /ɪkˈspoʊʒər ræmp/
**Part of speech:** noun
**Core meaning (English):** a planned sequence for increasing the share of traffic or users receiving a change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi kế hoạch tăng tỷ lệ traffic/user nhận thay đổi.
**Grammar & collocations:** `exposure-ramp step` — bước; `increase traffic gradually` — tăng dần.
**Examples:** `The exposure ramp moved from one to five to twenty percent after each healthy interval.` → Ramp tăng 1, 5, 20% sau mỗi interval khỏe.
**Liên kết tiếng Hàn:** `노출 램프`.

## 15. blast threshold /blɑːst ˈθreʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** a measured limit beyond which a rollout's impact is considered unsafe.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngưỡng đo được mà vượt qua thì ảnh hưởng rollout bị coi là nguy hiểm.
**Grammar & collocations:** `blast-threshold alert` — cảnh báo; `stop before widespread harm` — dừng.
**Examples:** `The blast threshold stopped the rollout when checkout failures exceeded two percent.` → Threshold dừng rollout khi lỗi checkout quá 2%.
**Liên kết tiếng Hàn:** `영향 임계값`.

## 16. rollback plan /ˈroʊlbæk plæn/
**Part of speech:** noun
**Core meaning (English):** a prepared sequence for returning a changed system to a known safe version or configuration.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi chuẩn bị sẵn để đưa system về version/config an toàn.
**Grammar & collocations:** `rollback-plan rehearsal` — diễn tập; `restore the prior artifact` — phục hồi.
**Examples:** `The rollback plan restored the previous model and cleared the new feature flag.` → Plan phục hồi model cũ và xóa flag mới.
**Liên kết tiếng Hàn:** `롤백 계획`.

## 17. configuration bundle /kənˌfɪɡjəˈreɪʃən ˈbʌndəl/
**Part of speech:** noun
**Core meaning (English):** a packaged, versioned set of related settings released as one coherent change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ setting liên quan được đóng gói, version hóa và release cùng nhau.
**Grammar & collocations:** `configuration-bundle manifest` — manifest; `promote a tested package` — đưa lên.
**Examples:** `The configuration bundle kept the timeout and retry changes synchronized across regions.` → Bundle giữ timeout và retry đồng bộ.
**Liên kết tiếng Hàn:** `구성 번들`.

## 18. flag dependency /flæɡ dɪˈpendənsi/
**Part of speech:** noun
**Core meaning (English):** a relationship in which one feature flag's safe behavior depends on another flag's state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ trong đó flag này chỉ an toàn khi flag khác ở state phù hợp.
**Grammar & collocations:** `flag-dependency graph` — graph; `activate prerequisites first` — kích hoạt trước.
**Examples:** `The flag dependency required the new schema reader before the dashboard feature could open.` → Dependency cần schema reader trước dashboard.
**Liên kết tiếng Hàn:** `플래그 종속성`.

## 19. rollout gate /ˈroʊlaʊt ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** an automated or human checkpoint that must pass before exposure expands.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** checkpoint tự động/thủ công phải đạt trước khi mở exposure.
**Grammar & collocations:** `rollout-gate metric` — metric; `approve the next cohort` — duyệt.
**Examples:** `The rollout gate required stable latency and zero new data-integrity alerts.` → Gate yêu cầu latency ổn và không có alert integrity mới.
**Liên kết tiếng Hàn:** `롤아웃 게이트`.

## 20. progressive delivery /prəˈɡresɪv dɪˈlɪvəri/
**Part of speech:** noun
**Core meaning (English):** releasing a change in controlled stages so evidence can guide whether exposure expands or stops.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** release theo giai đoạn có kiểm soát để evidence quyết định mở rộng hay dừng.
**Grammar & collocations:** `progressive-delivery workflow` — workflow; `expand a verified release` — mở rộng.
**Examples:** `Progressive delivery exposed the new search ranking to small cohorts before the global launch.` → Delivery mở ranking mới cho cohort nhỏ trước launch.
**Liên kết tiếng Hàn:** `점진적 배포`.

## Review in context

A **configuration snapshot** records intent for a **rollout cohort**, while **configuration drift** reveals divergence. An **immutable setting**, **default deny**, **secret rotation**, and **key escrow** protect critical values; **config precedence** decides which source wins. **Dynamic reload** and **hot reload** avoid interruption, but a **restart boundary** may remain. A **validation schema** rejects unsafe values, a **rollout pause** holds exposure, and an **exposure ramp** expands it gradually. A **blast threshold** stops harmful change, a **rollback plan** restores safety, and a **configuration bundle** keeps related settings together. A **flag dependency** orders activation, a **rollout gate** checks evidence, and **progressive delivery** turns those controls into a release process.

**Bản dịch tiếng Việt:** **Configuration snapshot** ghi lại ý định cho **rollout cohort**, còn **configuration drift** cho thấy sự lệch. **Immutable setting**, **default deny**, **secret rotation** và **key escrow** bảo vệ value quan trọng; **config precedence** quyết định source thắng. **Dynamic reload** và **hot reload** tránh gián đoạn, nhưng có thể vẫn cần **restart boundary**. **Validation schema** từ chối value nguy hiểm, **rollout pause** giữ exposure, còn **exposure ramp** mở rộng dần. **Blast threshold** dừng thay đổi gây hại, **rollback plan** phục hồi an toàn, và **configuration bundle** giữ setting liên quan cùng nhau. **Flag dependency** sắp thứ tự kích hoạt, **rollout gate** kiểm tra evidence, còn **progressive delivery** biến các control thành quy trình release.
