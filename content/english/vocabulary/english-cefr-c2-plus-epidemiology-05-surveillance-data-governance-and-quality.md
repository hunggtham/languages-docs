# C2+ Vocabulary — Surveillance data governance and quality

This lesson follows how surveillance systems define cases, protect people, connect records, and turn imperfect data into responsible warnings. The network is **surveillance case ascertainment → data provenance chain → record linkage error → duplicate-resolution threshold → missing-data mechanism → denominator drift → reporting lag correction → right-censoring bias → privacy-constrained linkage → surveillance purpose boundary → minimum necessary data → role-based data access → data stewardship agreement → cross-border data transfer → public-health exception → identity inference exposure → small-cell suppression → geospatial masking → syndromic data stream → surveillance interoperability → case-notification standard → data quality audit → surveillance signal ratio → early-warning indicator → governance escalation pathway**.

## 1. surveillance case ascertainment /sərˈveɪləns keɪs ˌæsərˈteɪnmənt/
**Part of speech:** noun
**Core meaning (English):** the process by which a surveillance system identifies and counts people who meet a defined case criterion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** surveillance case ascertainment quyết định ai được đưa vào case count.
**Grammar & collocations:** `surveillance-case ascertainment` — ascertainment; `ascertain a case` — ascertain; `case-finding protocol` — protocol.
**Examples:** `Surveillance case ascertainment changed when clinics began using a broader screening definition.` → Case count phụ thuộc definition.
**Liên kết tiếng Hàn:** `감시 사례 확인` — surveillance case ascertainment.

## 2. data provenance chain /ˈdeɪtə ˈprɑvənəns tʃeɪn/
**Part of speech:** noun
**Core meaning (English):** a documented record of where data originated, how it was transformed, and who handled it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data provenance chain cho biết data đi từ source tới dashboard qua những bước nào.
**Grammar & collocations:** `data-provenance chain` — chain; `document data provenance` — document; `transformation history` — history.
**Examples:** `The data provenance chain revealed that a batch of dates had been shifted during import.` → Provenance giúp truy lỗi.
**Liên kết tiếng Hàn:** `데이터 계보 사슬` — data provenance chain.

## 3. record linkage error /ˈrɛkərd ˈlɪŋkɪdʒ ˈɛrər/
**Part of speech:** noun
**Core meaning (English):** an incorrect match or failure to match records that refer to the same person, event, or entity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record linkage error có thể gộp nhầm hai người hoặc tách một người thành hai record.
**Grammar & collocations:** `record-linkage error rate` — rate; `detect a false match` — detect; `linkage quality` — quality.
**Examples:** `Record linkage error inflated the apparent number of repeat admissions.` → Link sai làm burden sai.
**Liên kết tiếng Hàn:** `기록 연계 오류` — record linkage error.

## 4. duplicate-resolution threshold /ˈduːplɪkət ˌrɛzəˈluːʃən ˈθrɛʃhoʊld/
**Part of speech:** noun
**Core meaning (English):** the similarity score or rule above which two records are treated as duplicates and reviewed or merged.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** duplicate-resolution threshold quyết định khi nào hai record được xem là cùng một case.
**Grammar & collocations:** `duplicate-resolution threshold` — threshold; `resolve duplicate records` — resolve; `similarity score` — score.
**Examples:** `The duplicate-resolution threshold was lowered after manual review found many missed matches.` → Threshold cần calibration.
**Liên kết tiếng Hàn:** `중복 해결 임계치` — duplicate-resolution threshold.

## 5. missing-data mechanism /ˈmɪsɪŋ ˈdeɪtə ˈmɛkənɪzəm/
**Part of speech:** noun
**Core meaning (English):** the process or pattern that determines why values are absent from a dataset.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** missing-data mechanism hỏi field trống vì random, workflow hay vì group nào đó khó tiếp cận.
**Grammar & collocations:** `missing-data mechanism` — mechanism; `model missingness` — model; `missing-not-at-random pattern` — pattern.
**Examples:** `The missing-data mechanism was related to language access, so a simple average would mislead.` → Missingness có thể tạo bias.
**Liên kết tiếng Hàn:** `결측 데이터 메커니즘` — missing-data mechanism.

## 6. denominator drift /dɪˈnɑməˌneɪtər drɪft/
**Part of speech:** noun
**Core meaning (English):** gradual change in the population represented by a rate's denominator, making comparisons over time misleading.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** denominator drift làm rate đổi vì population base đổi chứ không hẳn disease đổi.
**Grammar & collocations:** `denominator-drift check` — check; `monitor the denominator` — monitor; `population-base change` — change.
**Examples:** `Denominator drift followed a change from resident counts to registered patients.` → Rate cần cùng base để so.
**Liên kết tiếng Hàn:** `분모 변동` — denominator drift.

## 7. reporting lag correction /rɪˈpɔrtɪŋ læɡ kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** adjustment for the delay between an event occurring and its appearance in a surveillance database.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reporting lag correction tránh đọc ngày cuối như thể case thật sự giảm.
**Grammar & collocations:** `reporting-lag correction` — correction; `adjust for reporting delay` — adjust; `nowcast case counts` — nowcast.
**Examples:** `Reporting lag correction prevented a false weekend decline in the dashboard.` → Lag tạo pattern giả.
**Liên kết tiếng Hàn:** `보고 지연 보정` — reporting lag correction.

## 8. right-censoring bias /raɪt ˈsɛnsərɪŋ baɪəs/
**Part of speech:** noun
**Core meaning (English):** bias that occurs when recent observations have not had enough time for later outcomes to be recorded.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** right-censoring bias làm recent cases trông nhẹ hơn vì outcome chưa kịp xuất hiện.
**Grammar & collocations:** `right-censoring bias` — bias; `account for incomplete follow-up` — account; `outcome delay` — delay.
**Examples:** `Right-censoring bias made the latest hospitalization-fatality estimate unstable.` → Recent cohort chưa đủ follow-up.
**Liên kết tiếng Hàn:** `우측 검열 편향` — right-censoring bias.

## 9. privacy-constrained linkage /ˈpraɪvəsi kənˈstreɪndʒ ˈlɪŋkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** record matching designed to preserve confidentiality while using only permitted identifying information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** privacy-constrained linkage link được record nhưng giới hạn exposure của identity.
**Grammar & collocations:** `privacy-constrained linkage` — linkage; `link records securely` — link; `hashed identifier` — identifier.
**Examples:** `Privacy-constrained linkage connected laboratory and hospital data without sharing full names.` → Linkage và privacy có thể cùng tồn tại.
**Liên kết tiếng Hàn:** `개인정보 제약 연계` — privacy-constrained linkage.

## 10. surveillance purpose boundary /sərˈveɪləns ˈpɜrpəs ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** a stated limit on which uses of collected surveillance data are authorized and appropriate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** surveillance purpose boundary ngăn data thu cho outbreak bị dùng vô hạn cho mục đích khác.
**Grammar & collocations:** `surveillance-purpose boundary` — boundary; `define an authorized purpose` — define; `secondary use` — use.
**Examples:** `The surveillance purpose boundary excluded employment screening from the outbreak dataset.` → Purpose rõ giúp giữ trust.
**Liên kết tiếng Hàn:** `감시 목적 경계` — surveillance purpose boundary.

## 11. minimum necessary data /ˈmɪnəməm ˈnɛsəˌsɛri ˈdeɪtə/
**Part of speech:** noun
**Core meaning (English):** the smallest amount of information needed to achieve a legitimate surveillance or response purpose.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** minimum necessary data là nguyên tắc “đủ dùng, không thu thừa”.
**Grammar & collocations:** `minimum-necessary-data rule` — rule; `collect only necessary data` — collect; `data minimization` — minimization.
**Examples:** `The team removed exact street addresses because minimum necessary data required only neighborhood-level location.` → Ít data hơn nhưng vẫn đủ action.
**Liên kết tiếng Hàn:** `최소 필요 데이터` — minimum necessary data.

## 12. role-based data access /roʊl beɪst ˈdeɪtə ˈæksɛs/
**Part of speech:** noun
**Core meaning (English):** access control that gives people only the data and functions required for their assigned role.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** role-based data access tách quyền của analyst, clinician, manager và public viewer.
**Grammar & collocations:** `role-based-data access` — access; `assign access by role` — assign; `least-privilege control` — control.
**Examples:** `Role-based data access allowed analysts to see trends without viewing direct identifiers.` → Quyền theo role giảm exposure.
**Liên kết tiếng Hàn:** `역할 기반 데이터 접근` — role-based data access.

## 13. data stewardship agreement /ˈdeɪtə ˈstjuərdʃɪp əˈɡriːmənt/
**Part of speech:** noun
**Core meaning (English):** an agreement that assigns responsibilities for data quality, security, permitted use, and retention.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data stewardship agreement ghi rõ ai giữ data và chịu trách nhiệm gì.
**Grammar & collocations:** `data-stewardship agreement` — agreement; `assign stewardship duties` — assign; `retention schedule` — schedule.
**Examples:** `The data stewardship agreement named the agency responsible for correcting errors.` → Ownership rõ giúp sửa nhanh.
**Liên kết tiếng Hàn:** `데이터 관리 협약` — data stewardship agreement.

## 14. cross-border data transfer /krɔs ˈbɔrdər ˈdeɪtə ˈtrænsfər/
**Part of speech:** noun
**Core meaning (English):** movement of data across national or legal jurisdictions for analysis, care, or response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cross-border data transfer đưa data qua jurisdiction khác với rule khác.
**Grammar & collocations:** `cross-border-data transfer` — transfer; `authorize international sharing` — authorize; `data-jurisdiction review` — review.
**Examples:** `Cross-border data transfer required a documented security assessment and retention limit.` → Transfer cần governance trước.
**Liên kết tiếng Hàn:** `국경 간 데이터 이전` — cross-border data transfer.

## 15. public-health exception /ˈpʌblɪk hɛlθ ɪkˈsɛpʃən/
**Part of speech:** noun
**Core meaning (English):** a legally defined allowance for using or sharing information when necessary to protect population health.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** public-health exception mở một số data use nhưng không xóa mọi privacy duty.
**Grammar & collocations:** `public-health exception` — exception; `invoke a legal exception` — invoke; `necessary disclosure` — disclosure.
**Examples:** `The public-health exception permitted urgent notification but not unrestricted secondary analysis.` → Exception có boundary.
**Liên kết tiếng Hàn:** `공중보건 예외` — public-health exception.

## 16. identity inference exposure /aɪˈdɛntəti ˈɪnfərəns ɪkˈspoʊʒər/
**Part of speech:** noun
**Core meaning (English):** the possibility that a person can be recognized by combining supposedly non-identifying data fields.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** identity inference exposure xảy ra khi nhiều “mảnh nhỏ” ghép lại thành một người.
**Grammar & collocations:** `identity-inference exposure` — exposure; `infer an identity` — infer; `quasi-identifier` — identifier.
**Examples:** `Rare age, location, and admission combinations increased identity inference exposure.` → Quasi-identifiers cũng có risk.
**Liên kết tiếng Hàn:** `신원 추론 노출` — identity inference exposure.

## 17. small-cell suppression /smɔl sɛl səˈprɛʃən/
**Part of speech:** noun
**Core meaning (English):** hiding or aggregating very small counts to reduce the chance that individuals can be identified.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** small-cell suppression che các ô count quá nhỏ trước khi công khai table.
**Grammar & collocations:** `small-cell suppression rule` — rule; `suppress a count` — suppress; `disclosure control` — control.
**Examples:** `Small-cell suppression hid counts below five in the public dashboard.` → Count nhỏ dễ lộ identity.
**Liên kết tiếng Hàn:** `소수 셀 억제` — small-cell suppression.

## 18. geospatial masking /ˌdʒiːoʊˈspeɪʃəl ˈmæskɪŋ/
**Part of speech:** noun
**Core meaning (English):** altering or coarsening geographic coordinates to protect location privacy while retaining useful spatial patterns.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** geospatial masking làm location bớt chính xác nhưng vẫn giữ pattern vùng.
**Grammar & collocations:** `geospatial-masking method` — method; `mask precise coordinates` — mask; `spatial disclosure risk` — risk.
**Examples:** `Geospatial masking replaced household points with larger neighborhood cells.` → Masking giữ utility và giảm risk.
**Liên kết tiếng Hàn:** `지리공간 마스킹` — geospatial masking.

## 19. syndromic data stream /sɪnˈdrɑmɪk ˈdeɪtə striːm/
**Part of speech:** noun
**Core meaning (English):** a continuing flow of symptom, diagnosis, attendance, or service-use data used to detect unusual patterns.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** syndromic data stream chạy trước lab confirmation bằng symptom và service signal.
**Grammar & collocations:** `syndromic-data stream` — stream; `monitor a symptom stream` — monitor; `anomaly detection` — detection.
**Examples:** `The syndromic data stream showed a rise in respiratory visits before test results were complete.` → Stream làm early signal.
**Liên kết tiếng Hàn:** `증후군 데이터 흐름` — syndromic data stream.

## 20. surveillance interoperability /sərˈveɪləns ˌɪntərˌɑpərəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the ability of surveillance systems to exchange and interpret data consistently across organizations and technologies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** surveillance interoperability giúp system khác nhau “nói chuyện” bằng field và standard chung.
**Grammar & collocations:** `surveillance-interoperability standard` — standard; `exchange structured data` — exchange; `system compatibility` — compatibility.
**Examples:** `Surveillance interoperability reduced manual re-entry between laboratories and local health departments.` → Interoperability giảm delay và lỗi.
**Liên kết tiếng Hàn:** `감시 상호운용성` — surveillance interoperability.

## 21. case-notification standard /keɪs ˌnoʊtɪfɪˈkeɪʃən ˈstændərd/
**Part of speech:** noun
**Core meaning (English):** a shared specification for reporting case fields, timing, coding, and status across surveillance partners.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** case-notification standard làm các agency báo case theo cùng rule.
**Grammar & collocations:** `case-notification standard` — standard; `submit a notification` — submit; `reporting field` — field.
**Examples:** `The case-notification standard required onset date, specimen date, and confirmation status.` → Field chung giúp ghép data.
**Liên kết tiếng Hàn:** `사례 통보 표준` — case-notification standard.

## 22. data quality audit /ˈdeɪtə ˈkwɑləti ˈɔdɪt/
**Part of speech:** noun
**Core meaning (English):** a structured review of data completeness, validity, consistency, timeliness, and fitness for use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data quality audit hỏi data có đủ, đúng, nhất quán và đến đúng lúc không.
**Grammar & collocations:** `data-quality audit` — audit; `audit data completeness` — audit; `quality-control finding` — finding.
**Examples:** `The data quality audit found inconsistent postcode formats across reporting sites.` → Format lệch làm analysis khó.
**Liên kết tiếng Hàn:** `데이터 품질 감사` — data quality audit.

## 23. surveillance signal ratio /sərˈveɪləns ˈsɪɡnəl ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the relative strength of an actionable disease signal compared with background noise and routine variation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** surveillance signal ratio hỏi alert có đủ mạnh so với noise để đáng hành động không.
**Grammar & collocations:** `surveillance-signal ratio` — ratio; `separate signal from noise` — separate; `actionable alert` — alert.
**Examples:** `The surveillance signal ratio improved after seasonal patterns were modeled explicitly.` → Model background giúp alert rõ hơn.
**Liên kết tiếng Hàn:** `감시 신호 비율` — surveillance signal ratio.

## 24. early-warning indicator /ˈɜrli ˈwɔrnɪŋ ˈɪndəˌkeɪtər/
**Part of speech:** noun
**Core meaning (English):** a measurable change that may precede a larger outbreak, service disruption, or health emergency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** early-warning indicator xuất hiện trước khi burden lớn và cho phép chuẩn bị.
**Grammar & collocations:** `early-warning indicator` — indicator; `monitor an early signal` — monitor; `pre-event change` — change.
**Examples:** `Emergency-department crowding became an early-warning indicator for respiratory pressure.` → Service data có thể báo trước.
**Liên kết tiếng Hàn:** `조기 경보 지표` — early-warning indicator.

## 25. governance escalation pathway /ˈɡʌvərnəns ˌɛskəˈleɪʃən ˈpæθweɪ/
**Part of speech:** noun
**Core meaning (English):** a defined route for raising data, privacy, quality, or legal concerns to the authority able to resolve them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** governance escalation pathway biến concern thành route có owner và deadline.
**Grammar & collocations:** `governance-escalation pathway` — pathway; `escalate a privacy concern` — escalate; `decision authority` — authority.
**Examples:** `The governance escalation pathway paused publication until the disclosure risk was reviewed.` → Escalation bảo vệ quality và trust.
**Liên kết tiếng Hàn:** `거버넌스 상향 경로` — governance escalation pathway.

## Review in context — Part 1

Reliable **surveillance case ascertainment** depends on a documented **data provenance chain** and controls for **record linkage error**. A **duplicate-resolution threshold**, the **missing-data mechanism**, and **denominator drift** can change the apparent burden. **Reporting lag correction** and protection against **right-censoring bias** keep recent trends interpretable. **Privacy-constrained linkage** should follow a clear **surveillance purpose boundary** and collect only **minimum necessary data**.

**Bản dịch tiếng Việt — Phần 1:**

**Surveillance case ascertainment** đáng tin cần **data provenance chain** được ghi rõ và kiểm soát **record linkage error**. **Duplicate-resolution threshold**, **missing-data mechanism** và **denominator drift** có thể làm burden nhìn khác đi. **Reporting lag correction** và việc bảo vệ khỏi **right-censoring bias** giúp trend gần đây dễ diễn giải hơn. **Privacy-constrained linkage** phải tuân theo **surveillance purpose boundary** rõ ràng và chỉ thu **minimum necessary data**.

## Review in context — Part 2

**Role-based data access** and a **data stewardship agreement** clarify responsibility. A **cross-border data transfer** may rely on a **public-health exception**, but **identity inference exposure**, **small-cell suppression**, and **geospatial masking** still require review. A **syndromic data stream**, **surveillance interoperability**, and a shared **case-notification standard** improve speed. A **data quality audit** measures the **surveillance signal ratio**; an **early-warning indicator** can then enter a **governance escalation pathway** when action is needed.

**Bản dịch tiếng Việt — Phần 2:**

**Role-based data access** và **data stewardship agreement** làm rõ trách nhiệm. **Cross-border data transfer** có thể dựa vào **public-health exception**, nhưng **identity inference exposure**, **small-cell suppression** và **geospatial masking** vẫn cần review. **Syndromic data stream**, **surveillance interoperability** và **case-notification standard** chung giúp tăng tốc. **Data quality audit** đo **surveillance signal ratio**; sau đó **early-warning indicator** có thể đi vào **governance escalation pathway** khi cần hành động.
