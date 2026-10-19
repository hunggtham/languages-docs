# C2 Vocabulary — Configuration, experimentation, and policy rollout

This lesson follows a setting from its source and precedence through templating, validation, controlled exposure, and safety guardrails.

Flow: **configuration source → configuration precedence → default override → runtime toggle → feature exposure → targeting rule → experiment assignment → treatment group → experiment guardrail → metric guardrail → configuration checksum → secret reference → environment overlay → template render → variable interpolation → schema validation → configuration linter → allowlist rule → blocklist rule → exception request**.

## 1. configuration source /kənˌfɪɡəˈreɪʃən sɔːrs/
**Part of speech:** noun
**Core meaning (English):** the file, service, flag store, or other origin from which a setting is obtained.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** file, service, flag store hoặc nguồn nơi setting được lấy.
**Grammar & collocations:** `configuration-source priority` — priority; `read from a central store` — đọc.
**Examples:** `The configuration source changed from a local file to the managed flag service.` → Source config đổi từ file local sang flag service.
**Liên kết tiếng Hàn:** `구성 소스`.

## 2. configuration precedence /kənˌfɪɡəˈreɪʃən ˈpresɪdəns/
**Part of speech:** noun
**Core meaning (English):** the order used to decide which setting wins when several sources define the same key.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thứ tự quyết định setting nào thắng khi nhiều source định nghĩa cùng key.
**Grammar & collocations:** `configuration-precedence rule` — rule; `override a file value` — ghi đè.
**Examples:** `Configuration precedence made the deployment variable override the repository default.` → Precedence cho biến deployment ghi đè default repository.
**Liên kết tiếng Hàn:** `구성 우선순위`.

## 3. default override /dɪˈfɔːlt ˈoʊvərraɪd/
**Part of speech:** noun
**Core meaning (English):** an explicit setting that replaces a built-in or documented default.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** setting rõ ràng thay default có sẵn hoặc được document.
**Grammar & collocations:** `default-override flag` — flag; `supply an explicit value` — cung cấp.
**Examples:** `The default override increased the connection pool only for the batch worker.` → Override tăng pool chỉ cho batch worker.
**Liên kết tiếng Hàn:** `기본값 재정의`.

## 4. runtime toggle /ˈrʌntaɪm ˈtɒɡəl/
**Part of speech:** noun
**Core meaning (English):** a switch that changes behavior while a running system remains online.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** switch đổi behavior khi system vẫn đang chạy.
**Grammar & collocations:** `runtime-toggle state` — state; `turn a safeguard on` — bật.
**Examples:** `The operator enabled the runtime toggle without restarting the API.` → Operator bật toggle mà không restart API.
**Liên kết tiếng Hàn:** `런타임 토글`.

## 5. feature exposure /ˈfiːtʃər ɪkˈspoʊʒər/
**Part of speech:** noun
**Core meaning (English):** the degree and audience to which a new feature is made available.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức độ và audience được cho dùng feature mới.
**Grammar & collocations:** `feature-exposure percentage` — phần trăm; `increase exposure gradually` — tăng.
**Examples:** `Feature exposure stayed at ten percent until error rates matched the baseline.` → Exposure giữ 10% đến khi error khớp baseline.
**Liên kết tiếng Hàn:** `기능 노출`.

## 6. targeting rule /ˈtɑːrɡɪtɪŋ ruːl/
**Part of speech:** noun
**Core meaning (English):** a rule selecting which users, regions, devices, or contexts receive a behavior or experiment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule chọn user, region, device hoặc context nhận behavior/experiment.
**Grammar & collocations:** `targeting-rule predicate` — predicate; `target a customer segment` — nhắm.
**Examples:** `The targeting rule limited the preview to employees in the test region.` → Rule giới hạn preview cho employee ở vùng test.
**Liên kết tiếng Hàn:** `타기팅 규칙`.

## 7. experiment assignment /ɪkˈsperɪmənt əˈsaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** the stable decision that places a subject into one branch of an experiment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyết định ổn định đưa subject vào một nhánh experiment.
**Grammar & collocations:** `experiment-assignment key` — key; `assign a user deterministically` — phân.
**Examples:** `Experiment assignment kept the same account in one branch throughout the trial.` → Assignment giữ account ở cùng nhánh suốt trial.
**Liên kết tiếng Hàn:** `실험 할당`.

## 8. treatment group /ˈtriːtmənt ɡruːp/
**Part of speech:** noun
**Core meaning (English):** the experiment group that receives the new behavior or intervention being evaluated.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm experiment nhận behavior/intervention mới đang được đánh giá.
**Grammar & collocations:** `treatment-group metric` — metric; `compare treatment with control` — so.
**Examples:** `The treatment group saw the redesigned checkout while the control kept the old flow.` → Nhóm treatment dùng checkout mới, control giữ flow cũ.
**Liên kết tiếng Hàn:** `처리 그룹`.

## 9. experiment guardrail /ɪkˈsperɪmənt ˈɡɑːrdreɪl/
**Part of speech:** noun
**Core meaning (English):** a safety condition that pauses or limits an experiment when harmful effects appear.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện an toàn pause/giới hạn experiment khi effect xấu xuất hiện.
**Grammar & collocations:** `experiment-guardrail threshold` — threshold; `halt a risky variant` — dừng.
**Examples:** `The experiment guardrail stopped the rollout when payment failures exceeded the limit.` → Guardrail dừng rollout khi payment fail vượt limit.
**Liên kết tiếng Hàn:** `실험 가드레일`.

## 10. metric guardrail /ˈmetrɪk ˈɡɑːrdreɪl/
**Part of speech:** noun
**Core meaning (English):** a monitored metric threshold that prevents a change from worsening an important outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngưỡng metric monitor để ngăn change làm xấu outcome quan trọng.
**Grammar & collocations:** `metric-guardrail breach` — breach; `protect conversion rate` — bảo vệ.
**Examples:** `The latency metric guardrail blocked a wider rollout of the slower build.` → Guardrail latency chặn rollout build chậm.
**Liên kết tiếng Hàn:** `메트릭 가드레일`.

## 11. configuration checksum /kənˌfɪɡəˈreɪʃən ˈtʃeksʌm/
**Part of speech:** noun
**Core meaning (English):** a digest used to detect whether a configuration document or bundle has changed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** digest phát hiện config document/bundle có đổi không.
**Grammar & collocations:** `configuration-checksum annotation` — annotation; `compare a deployed digest` — so.
**Examples:** `The controller restarted the worker after the configuration checksum changed.` → Controller restart worker khi checksum đổi.
**Liên kết tiếng Hàn:** `구성 체크섬`.

## 12. secret reference /ˈsiːkrət ˈrefərəns/
**Part of speech:** noun
**Core meaning (English):** an indirect pointer to a protected secret rather than the secret value itself.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pointer gián tiếp tới secret bảo vệ, không chứa value thật.
**Grammar & collocations:** `secret-reference identifier` — identifier; `resolve a vault key` — resolve.
**Examples:** `The deployment stored a secret reference instead of placing the database password in plain text.` → Deployment lưu reference thay password rõ.
**Liên kết tiếng Hàn:** `비밀 참조`.

## 13. environment overlay /ɪnˈvaɪərənmənt ˈoʊvərleɪ/
**Part of speech:** noun
**Core meaning (English):** a layer of settings applied on top of a shared base configuration for one environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lớp setting đặt trên config base chung cho một environment.
**Grammar & collocations:** `environment-overlay file` — file; `apply production-specific values` — áp dụng.
**Examples:** `The environment overlay changed the endpoints and replica count for production.` → Overlay đổi endpoint và replica production.
**Liên kết tiếng Hàn:** `환경 오버레이`.

## 14. template render /ˈtemplət ˈrendər/
**Part of speech:** noun
**Core meaning (English):** producing a concrete configuration or document by applying values to a template.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sinh config/document cụ thể bằng cách áp value vào template.
**Grammar & collocations:** `template-render output` — output; `render a deployment manifest` — render.
**Examples:** `The template render produced one manifest for each cluster region.` → Render tạo manifest cho từng region.
**Liên kết tiếng Hàn:** `템플릿 렌더링`.

## 15. variable interpolation /ˈveriəbəl ɪnˌtɜːrpəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** replacing a placeholder with the value of a variable while processing a template or command.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay placeholder bằng value variable khi xử lý template/command.
**Grammar & collocations:** `variable-interpolation syntax` — syntax; `expand an environment variable` — mở rộng.
**Examples:** `Variable interpolation inserted the region name into the storage path.` → Interpolation chèn tên region vào path storage.
**Liên kết tiếng Hàn:** `변수 보간`.

## 16. schema validation /ˈskiːmə ˌvæləˈdeɪʃən/
**Part of speech:** noun
**Core meaning (English):** checking that a configuration or data object matches its declared fields, types, and constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra object khớp field, type và constraint trong schema.
**Grammar & collocations:** `schema-validation error` — lỗi; `reject an unknown field` — từ chối.
**Examples:** `Schema validation rejected the deployment because its replica count was negative.` → Validation từ chối deployment vì replica âm.
**Liên kết tiếng Hàn:** `스키마 검증`.

## 17. configuration linter /kənˌfɪɡəˈreɪʃən ˈlɪntər/
**Part of speech:** noun
**Core meaning (English):** an automated checker that flags risky, inconsistent, or discouraged configuration patterns.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** checker tự động báo pattern config nguy hiểm, không nhất quán hoặc không nên dùng.
**Grammar & collocations:** `configuration-linter rule` — rule; `flag an insecure default` — báo.
**Examples:** `The configuration linter flagged a public endpoint before the change was submitted.` → Linter báo endpoint public trước khi submit.
**Liên kết tiếng Hàn:** `구성 린터`.

## 18. allowlist rule /ˈælaʊlɪst ruːl/
**Part of speech:** noun
**Core meaning (English):** a rule permitting only explicitly named identities, values, or actions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule chỉ cho phép identity, value hoặc action được nêu rõ.
**Grammar & collocations:** `allowlist-rule entry` — entry; `permit a registered client` — cho phép.
**Examples:** `The allowlist rule admitted only the signed images approved by the release team.` → Rule chỉ nhận image ký được release team duyệt.
**Liên kết tiếng Hàn:** `허용 목록 규칙`.

## 19. blocklist rule /ˈblɒklɪst ruːl/
**Part of speech:** noun
**Core meaning (English):** a rule rejecting specifically named identities, values, or actions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule từ chối identity, value hoặc action được liệt kê.
**Grammar & collocations:** `blocklist-rule update` — update; `deny a compromised token` — chặn.
**Examples:** `The blocklist rule rejected the token after the security team marked it compromised.` → Rule từ chối token bị đánh dấu compromise.
**Liên kết tiếng Hàn:** `차단 목록 규칙`.

## 20. exception request /ɪkˈsepʃən rɪˈkwest/
**Part of speech:** noun
**Core meaning (English):** a documented request to temporarily deviate from a standard policy or configuration rule.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** request có ghi nhận để tạm lệch policy/config rule chuẩn.
**Grammar & collocations:** `exception-request expiry` — expiry; `approve a time-bound deviation` — duyệt.
**Examples:** `The exception request allowed the legacy client to connect until its migration finished.` → Request cho client cũ kết nối đến khi migrate xong.
**Liên kết tiếng Hàn:** `예외 요청`.

## Review in context

A **configuration source** supplies settings, and **configuration precedence** decides conflicts; a **default override** or **runtime toggle** changes behavior. **Feature exposure** follows a **targeting rule** and an **experiment assignment** that places users in a **treatment group**. An **experiment guardrail** and **metric guardrail** stop harmful rollout. A **configuration checksum** detects change, while a **secret reference** avoids exposing values. An **environment overlay** feeds a **template render**, and **variable interpolation** expands placeholders. **Schema validation** checks structure; a **configuration linter** finds risky patterns. An **allowlist rule** permits named values, a **blocklist rule** rejects them, and an **exception request** records a temporary deviation.

**Bản dịch tiếng Việt:** **Configuration source** cung cấp setting, còn **configuration precedence** giải quyết xung đột; **default override** hoặc **runtime toggle** đổi behavior. **Feature exposure** theo **targeting rule** và **experiment assignment** đưa user vào **treatment group**. **Experiment guardrail** và **metric guardrail** dừng rollout có hại. **Configuration checksum** phát hiện thay đổi, còn **secret reference** tránh lộ value. **Environment overlay** cấp cho **template render**, còn **variable interpolation** mở placeholder. **Schema validation** kiểm tra structure; **configuration linter** tìm pattern rủi ro. **Allowlist rule** cho value nêu rõ, **blocklist rule** từ chối chúng, còn **exception request** ghi nhận lệch tạm thời.
