# C2 Vocabulary — Production AI governance and accountability

This lesson follows a deployed AI feature from fairness and privacy review through controls, user recourse, and accountable release decisions.

Flow: **bias audit → subgroup analysis → privacy attack → safety policy → policy classifier → risk taxonomy → mitigation plan → approval gate → deployment gate → evaluation report → model release note → usage restriction → access tier → rate limit → abuse monitor → appeal process → human review queue → post-deployment monitor → model incident → safety case**.

## 1. bias audit /baɪəs ˈɔːdɪt/
**Part of speech:** noun
**Core meaning (English):** a systematic review for unequal errors, treatment, or outcomes across relevant groups.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** review có hệ thống tìm error/treatment/outcome không đều giữa các nhóm.
**Grammar & collocations:** `bias-audit finding` — finding; `compare error rates by group` — so.
**Examples:** `The bias audit found that rejection rates differed sharply between language groups.` → Audit thấy rejection rate khác mạnh giữa nhóm ngôn ngữ.
**Liên kết tiếng Hàn:** `편향 감사`.

## 2. subgroup analysis /ˈsʌbɡruːp əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** examining performance or risk separately for a defined subset of users or cases.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích performance/risk riêng cho một subset user/case.
**Grammar & collocations:** `subgroup-analysis result` — result; `disaggregate a metric` — tách.
**Examples:** `Subgroup analysis showed that the overall accuracy hid poor results for older devices.` → Phân tích nhóm lộ accuracy kém ở device cũ.
**Liên kết tiếng Hàn:** `하위 그룹 분석`.

## 3. privacy attack /ˈpraɪvəsi əˈtæk/
**Part of speech:** noun
**Core meaning (English):** an attempt to infer protected information about people or training data from a system's outputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nỗ lực suy ra information bảo vệ từ output system hoặc data train.
**Grammar & collocations:** `privacy-attack surface` — surface; `infer membership in a dataset` — suy ra.
**Examples:** `The privacy attack used repeated queries to estimate whether a record was in training data.` → Attack dùng query lặp để đo record có trong train không.
**Liên kết tiếng Hàn:** `개인정보 공격`.

## 4. safety policy /ˈseɪfti ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** a documented rule defining harmful uses, required safeguards, and permitted responses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule document về use harmful, safeguard bắt buộc và response được phép.
**Grammar & collocations:** `safety-policy clause` — clause; `enforce a prohibited-use rule` — áp dụng.
**Examples:** `The safety policy prohibited automated decisions about emergency medical treatment.` → Policy cấm quyết định tự động về điều trị cấp cứu.
**Liên kết tiếng Hàn:** `안전 정책`.

## 5. policy classifier /ˈpɒləsi ˈklæsɪfaɪər/
**Part of speech:** noun
**Core meaning (English):** a model or rule system that labels requests or outputs according to a safety or governance policy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model/rule gắn label request/output theo policy safety/governance.
**Grammar & collocations:** `policy-classifier threshold` — threshold; `route a risky request` — định tuyến.
**Examples:** `The policy classifier routed ambiguous requests to human review instead of blocking them automatically.` → Classifier đưa request mơ hồ tới người review.
**Liên kết tiếng Hàn:** `정책 분류기`.

## 6. risk taxonomy /rɪsk tæˈsɒnəmi/
**Part of speech:** noun
**Core meaning (English):** a structured classification of risk types, severities, causes, and affected stakeholders.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân loại có cấu trúc về loại, severity, cause và stakeholder bị ảnh hưởng.
**Grammar & collocations:** `risk-taxonomy category` — category; `classify a new hazard` — phân loại.
**Examples:** `The risk taxonomy separated privacy harm from reliability and misuse risks.` → Taxonomy tách harm privacy khỏi reliability/misuse.
**Liên kết tiếng Hàn:** `위험 분류 체계`.

## 7. mitigation plan /ˌmɪtɪˈɡeɪʃən plæn/
**Part of speech:** noun
**Core meaning (English):** a documented set of actions intended to reduce a known risk and its potential impact.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập action document để giảm risk và impact tiềm ẩn.
**Grammar & collocations:** `mitigation-plan owner` — owner; `reduce an identified exposure` — giảm.
**Examples:** `The mitigation plan combined stricter access with a second review for high-impact cases.` → Plan gộp access chặt hơn và review thứ hai.
**Liên kết tiếng Hàn:** `완화 계획`.

## 8. approval gate /əˈpruːvəl ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** a required decision point at which an authorized person must approve progress.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điểm bắt buộc cần người có quyền duyệt trước khi tiến.
**Grammar & collocations:** `approval-gate record` — record; `obtain documented sign-off` — lấy.
**Examples:** `The approval gate required the privacy lead to sign the launch assessment.` → Gate cần privacy lead ký assessment.
**Liên kết tiếng Hàn:** `승인 게이트`.

## 9. deployment gate /dɪˈplɔɪmənt ɡeɪt/
**Part of speech:** noun
**Core meaning (English):** an automated or human check that must pass before a model or feature reaches an environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** check tự động/người phải pass trước khi model/feature vào environment.
**Grammar & collocations:** `deployment-gate failure` — failure; `block an unverified model` — chặn.
**Examples:** `The deployment gate blocked the model because its safety evaluation was incomplete.` → Gate chặn model vì evaluation safety chưa xong.
**Liên kết tiếng Hàn:** `배포 게이트`.

## 10. evaluation report /ɪˌvæljuˈeɪʃən rɪˈpɔːrt/
**Part of speech:** noun
**Core meaning (English):** a document summarizing methods, results, limitations, and decisions from an evaluation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** document tóm tắt method, result, limitation và decision của evaluation.
**Grammar & collocations:** `evaluation-report appendix` — phụ lục; `record a confidence limit` — ghi.
**Examples:** `The evaluation report documented failures that the headline score did not reveal.` → Report ghi failure mà score chính không lộ.
**Liên kết tiếng Hàn:** `평가 보고서`.

## 11. model release note /ˈmɒdəl rɪˈliːs noʊt/
**Part of speech:** noun
**Core meaning (English):** a published note describing a model version's changes, known limits, and operational implications.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** note công bố change, limit đã biết và implication vận hành của version model.
**Grammar & collocations:** `model-release-note entry` — entry; `announce a known limitation` — thông báo.
**Examples:** `The model release note warned that multilingual performance had not been measured equally.` → Note cảnh báo performance đa ngôn ngữ chưa đo đều.
**Liên kết tiếng Hàn:** `모델 릴리스 노트`.

## 12. usage restriction /ˈjuːsɪdʒ rɪˈstrɪkʃən/
**Part of speech:** noun
**Core meaning (English):** a rule limiting who may use a system, for what purpose, or under which conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule giới hạn ai dùng, dùng vì mục đích gì hoặc điều kiện nào.
**Grammar & collocations:** `usage-restriction clause` — clause; `limit a high-risk application` — giới hạn.
**Examples:** `The usage restriction barred the model from making final hiring decisions.` → Restriction cấm model quyết định tuyển dụng cuối.
**Liên kết tiếng Hàn:** `사용 제한`.

## 13. access tier /ˈækses tɪər/
**Part of speech:** noun
**Core meaning (English):** a permission level that determines which capabilities, data, or model limits a user receives.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức quyền quyết định capability, data hoặc limit model user nhận.
**Grammar & collocations:** `access-tier assignment` — assignment; `promote a verified operator` — nâng.
**Examples:** `The access tier allowed researchers to test the model but not export raw prompts.` → Tier cho researcher test nhưng không export prompt thô.
**Liên kết tiếng Hàn:** `접근 계층`.

## 14. rate limit /reɪt ˈlɪmɪt/
**Part of speech:** noun
**Core meaning (English):** a cap on how many requests or operations an identity may make in a period.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn số request/operation một identity được làm trong khoảng thời gian.
**Grammar & collocations:** `rate-limit bucket` — bucket; `throttle repeated requests` — điều tiết.
**Examples:** `The rate limit reduced automated scraping without affecting ordinary interactive use.` → Limit giảm scraping mà không ảnh hưởng dùng thường.
**Liên kết tiếng Hàn:** `속도 제한`.

## 15. abuse monitor /əˈbjuːs ˈmɒnɪtər/
**Part of speech:** noun
**Core meaning (English):** a system that looks for patterns suggesting misuse, evasion, or harmful automated activity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** system tìm pattern misuse, né tránh hoặc hoạt động tự động harmful.
**Grammar & collocations:** `abuse-monitor signal` — signal; `flag coordinated requests` — báo.
**Examples:** `The abuse monitor detected coordinated account creation followed by identical prompts.` → Monitor phát hiện tạo account phối hợp với prompt giống nhau.
**Liên kết tiếng Hàn:** `오용 모니터`.

## 16. appeal process /əˈpiːl ˈprəʊses/
**Part of speech:** noun
**Core meaning (English):** a defined way for a person to challenge a decision, restriction, or automated outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy trình để người dùng phản đối decision, restriction hoặc outcome tự động.
**Grammar & collocations:** `appeal-process deadline` — deadline; `submit supporting evidence` — nộp.
**Examples:** `The appeal process let the customer contest an incorrect account restriction.` → Process cho khách phản đối restriction sai.
**Liên kết tiếng Hàn:** `이의 제기 절차`.

## 17. human review queue /ˈhjuːmən rɪˈvjuː kjuː/
**Part of speech:** noun
**Core meaning (English):** an ordered set of cases waiting for a qualified person to inspect and decide.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập case có thứ tự chờ người đủ chuyên môn inspect và quyết định.
**Grammar & collocations:** `human-review-queue priority` — priority; `triage an ambiguous case` — phân loại.
**Examples:** `The human review queue prioritized cases involving imminent physical harm.` → Queue ưu tiên case có nguy cơ harm thể chất.
**Liên kết tiếng Hàn:** `인간 검토 대기열`.

## 18. post-deployment monitor /ˌpoʊst dɪˈplɔɪmənt ˈmɒnɪtər/
**Part of speech:** noun
**Core meaning (English):** a monitor that checks a deployed model for performance, safety, drift, and unexpected use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** monitor model deploy về performance, safety, drift và use bất ngờ.
**Grammar & collocations:** `post-deployment-monitor alert` — alert; `watch production behavior` — theo dõi.
**Examples:** `The post-deployment monitor noticed a new error pattern after the traffic mix changed.` → Monitor thấy pattern error mới khi traffic mix đổi.
**Liên kết tiếng Hàn:** `배포 후 모니터`.

## 19. model incident /ˈmɒdəl ˈɪnsɪdənt/
**Part of speech:** noun
**Core meaning (English):** an event in which a deployed model causes or contributes to material harm, failure, or policy violation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event model deploy gây/góp phần vào harm, failure hoặc vi phạm policy đáng kể.
**Grammar & collocations:** `model-incident report` — report; `contain a harmful behavior` — khoanh vùng.
**Examples:** `The team opened a model incident after the assistant exposed another customer's summary.` → Team mở incident khi assistant lộ summary khách khác.
**Liên kết tiếng Hàn:** `모델 사고`.

## 20. safety case /ˈseɪfti keɪs/
**Part of speech:** noun
**Core meaning (English):** a structured argument supported by evidence that a system is acceptably safe for a defined use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lập luận có cấu trúc và evidence rằng system đủ an toàn cho use định nghĩa.
**Grammar & collocations:** `safety-case claim` — claim; `support an assurance argument` — hỗ trợ.
**Examples:** `The safety case linked each deployment restriction to a tested hazard reduction.` → Safety case nối restriction với hazard reduction đã test.
**Liên kết tiếng Hàn:** `안전 사례`.

## Review in context

A **bias audit** and **subgroup analysis** examine unequal outcomes, while a **privacy attack** tests disclosure risk. A **safety policy** can be enforced by a **policy classifier** organized around a **risk taxonomy** and **mitigation plan**. An **approval gate** and **deployment gate** precede an **evaluation report** and **model release note**. A **usage restriction**, **access tier**, and **rate limit** control exposure; an **abuse monitor** detects misuse. An **appeal process** sends difficult cases to a **human review queue**. A **post-deployment monitor** detects a **model incident**, and a **safety case** connects evidence to an acceptable release decision.

**Bản dịch tiếng Việt:** **Bias audit** và **subgroup analysis** xem outcome không đều, còn **privacy attack** test rủi ro lộ data. **Safety policy** có thể được thực thi bởi **policy classifier** dựa trên **risk taxonomy** và **mitigation plan**. **Approval gate** và **deployment gate** đứng trước **evaluation report** và **model release note**. **Usage restriction**, **access tier** và **rate limit** kiểm soát exposure; **abuse monitor** phát hiện misuse. **Appeal process** đưa case khó vào **human review queue**. **Post-deployment monitor** phát hiện **model incident**, còn **safety case** nối evidence với quyết định release chấp nhận được.
