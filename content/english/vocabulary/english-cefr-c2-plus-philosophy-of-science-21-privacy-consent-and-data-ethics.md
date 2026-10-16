# C2+ Vocabulary — Privacy, consent, and data ethics

This lesson follows how research teams protect people, govern data access, and reason about privacy risk. The network is **de-identification → reversible de-identification → equivalence-class anonymity → randomized privacy guarantee → re-identification risk → record-linkage attack → quasi-identifier → privacy-loss budget → generated surrogate data → collection minimization → purpose-bound processing → participant authorization → broad consent → dynamic consent → withdrawal right → downstream reuse → data access committee → trusted research environment → confidential enclave → federated analysis → privacy-preserving record linkage → consent waiver → incidental privacy risk → collective privacy → collective consent**.

## 1. de-identification /ˌdiːaɪˌdɛntəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** removal or transformation of direct identifiers so that records are less readily linked to named individuals.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** de-identification bỏ/đổi direct identifier để giảm link record với người cụ thể.
**Grammar & collocations:** `de-identification procedure` — procedure; `de-identify a dataset` — de-identify; `direct identifier` — identifier.
**Examples:** `De-identification removed names and exact addresses before the dataset left the hospital.` → Dataset bỏ name/address trước khi rời hospital.
**Liên kết tiếng Hàn:** `비식별화` — de-identification.

## 2. reversible de-identification /rɪˈvɜrsəbəl ˌdiːaɪˌdɛntəfəˈkeɪʃən/
**Part of speech:** noun
**Core meaning (English):** de-identification in which a protected key or mapping can reconnect a record to its source person under authorized conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** reversible de-identification giữ key bí mật để reconnect khi được authorize.
**Grammar & collocations:** `reversible-de-identification key` — key; `reidentify under authorization` — reidentify; `protected mapping` — mapping.
**Examples:** `Reversible de-identification allowed clinicians to contact participants about a serious incidental result.` → Có thể contact participant khi serious result.
**Liên kết tiếng Hàn:** `가역적 비식별화` — reversible de-identification.

## 3. equivalence-class anonymity /ɪˈkwɪvələns klæs ˌænəˈnɪməti/
**Part of speech:** noun
**Core meaning (English):** privacy protection achieved when each record is indistinguishable from a specified number of records on selected identifying attributes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** equivalence-class anonymity làm mỗi record giống một nhóm record khác trên quasi-identifier.
**Grammar & collocations:** `equivalence-class-anonymity target` — target; `form an equivalence class` — form; `identifying attribute` — attribute.
**Examples:** `The release required equivalence-class anonymity before publishing neighborhood-level statistics.` → Release cần anonymity trước publish.
**Liên kết tiếng Hàn:** `동치류 익명성` — equivalence-class anonymity.

## 4. randomized privacy guarantee /ˈrændəmˌaɪzd ˈpraɪvəsi ˌɡærənˈtiː/
**Part of speech:** noun
**Core meaning (English):** a formal guarantee that a randomized data mechanism limits how much any individual's participation changes the released information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** randomized privacy guarantee dùng randomness để bound influence của một individual's participation.
**Grammar & collocations:** `randomized-privacy guarantee` — guarantee; `bound disclosure risk` — bound; `randomize a release` — randomize.
**Examples:** `The agency used a randomized privacy guarantee when publishing small-area counts.` → Agency dùng guarantee cho count vùng nhỏ.
**Liên kết tiếng Hàn:** `무작위화된 개인정보 보호 보장` — randomized privacy guarantee.

## 5. re-identification risk /ˌriːaɪˌdɛntəfəˈkeɪʃən rɪsk/
**Part of speech:** noun
**Core meaning (English):** the possibility that a supposedly de-identified record can be linked back to a specific person.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** re-identification risk là nguy cơ record “ẩn danh” vẫn link được về người.
**Grammar & collocations:** `re-identification-risk assessment` — assessment; `reidentify a record` — reidentify; `linkage pathway` — pathway.
**Examples:** `The team estimated re-identification risk before combining mobility and health records.` → Team estimate risk trước khi combine data.
**Liên kết tiếng Hàn:** `재식별 위험` — re-identification risk.

## 6. record-linkage attack /ˈrɛkərd ˈlɪŋkɪdʒ əˈtæk/
**Part of speech:** noun
**Core meaning (English):** an attempt to identify people by matching released records with another dataset containing identifying information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record-linkage attack match dataset này với dataset khác để tìm identity.
**Grammar & collocations:** `record-linkage attack model` — model; `match records` — match; `external identifying dataset` — dataset.
**Examples:** `The privacy review simulated a record-linkage attack using public voter files.` → Review simulate attack với voter file.
**Liên kết tiếng Hàn:** `기록 연결 공격` — record-linkage attack.

## 7. quasi-identifier /ˌkwɑzi aɪˈdɛntəˌfaɪər/
**Part of speech:** noun
**Core meaning (English):** a variable that does not identify a person alone but can help identify one when combined with other information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quasi-identifier như age, ZIP, date có thể identify khi combine.
**Grammar & collocations:** `quasi-identifier set` — set; `combine quasi-identifiers` — combine; `indirect identifier` — identifier.
**Examples:** `Birth month and postal region acted as quasi-identifiers in the released table.` → Birth month/region là quasi-identifier.
**Liên kết tiếng Hàn:** `준식별자` — quasi-identifier.

## 8. privacy-loss budget /ˈpraɪvəsi lɔs ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a bounded amount of privacy exposure that can be spent across repeated data releases or analyses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** privacy-loss budget giới hạn tổng exposure qua nhiều query/release.
**Grammar & collocations:** `privacy-loss budget` — budget; `spend a privacy budget` — spend; `repeated query` — query.
**Examples:** `The dashboard stopped accepting new queries after the privacy-loss budget was exhausted.` → Dashboard stop khi budget hết.
**Liên kết tiếng Hàn:** `개인정보 손실 예산` — privacy-loss budget.

## 9. generated surrogate data /ˈdʒɛnəˌreɪtɪd ˈsɜrəɡət ˈdeɪtə/
**Part of speech:** noun
**Core meaning (English):** data generated to reproduce useful statistical structure without directly releasing the original sensitive records.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** generated surrogate data giữ pattern/statistical structure mà không public raw sensitive record.
**Grammar & collocations:** `generated-surrogate-data release` — release; `generate synthetic records` — generate; `preserve statistical structure` — preserve.
**Examples:** `Generated surrogate data let developers test the interface without seeing patient records.` → Developer test interface mà không xem record thật.
**Liên kết tiếng Hàn:** `생성 대체 데이터` — generated surrogate data.

## 10. collection minimization /kəˈlɛkʃən ˌmɪnəməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** limiting data collection to information necessary for a legitimate research purpose.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** collection minimization chỉ collect data thật sự cần cho purpose hợp lệ.
**Grammar & collocations:** `collection-minimization rule` — rule; `minimize data collection` — minimize; `necessary field` — field.
**Examples:** `Collection minimization removed exact location from a survey that only needed travel distance.` → Survey chỉ cần distance, bỏ exact location.
**Liên kết tiếng Hàn:** `수집 최소화` — collection minimization.

## 11. purpose-bound processing /ˈpɜrpəs baʊnd ˈprɑsɛsɪŋ/
**Part of speech:** noun
**Core meaning (English):** processing data only for the specified purposes for which collection and permission were justified.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** purpose-bound processing không tùy ý dùng data cho purpose mới ngoài permission.
**Grammar & collocations:** `purpose-bound-processing rule` — rule; `process for a stated purpose` — process; `scope limitation` — limitation.
**Examples:** `Purpose-bound processing prohibited the insurer from using the research survey for marketing.` → Insurer không được dùng survey cho marketing.
**Liên kết tiếng Hàn:** `목적 제한 처리` — purpose-bound processing.

## 12. participant authorization /pɑrˈtɪsəpənt ˌɔːθərɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a participant's informed permission for specified data collection, use, sharing, or retention.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** participant authorization là permission cụ thể, không phải chữ ký chung chung.
**Grammar & collocations:** `participant-authorization form` — form; `authorize data use` — authorize; `specified purpose` — purpose.
**Examples:** `Participant authorization covered data sharing with approved academic collaborators.` → Authorization cover sharing với collaborator approved.
**Liên kết tiếng Hàn:** `참여자 승인` — participant authorization.

## 13. broad consent /brɔd kənˈsɛnt/
**Part of speech:** noun
**Core meaning (English):** consent allowing future research uses within a defined domain rather than naming every later study in advance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** broad consent cho phép future use trong domain đã định, không phải mọi use vô hạn.
**Grammar & collocations:** `broad-consent framework` — framework; `consent to future research` — consent; `defined research domain` — domain.
**Examples:** `Broad consent allowed later studies on immune disorders under the stated governance rules.` → Consent cho later study trong domain immune.
**Liên kết tiếng Hàn:** `포괄적 동의` — broad consent.

## 14. dynamic consent /daɪˈnæmɪk kənˈsɛnt/
**Part of speech:** noun
**Core meaning (English):** an ongoing consent process that lets participants review, change, or renew permissions as research uses evolve.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dynamic consent cho participant update permission theo study/use mới.
**Grammar & collocations:** `dynamic-consent portal` — portal; `renew permission` — renew; `change a consent choice` — change.
**Examples:** `The dynamic consent portal let participants approve genomic sharing separately from commercial use.` → Portal cho approve từng use.
**Liên kết tiếng Hàn:** `동적 동의` — dynamic consent.

## 15. withdrawal right /wɪðˈdrɔəl raɪt/
**Part of speech:** noun
**Core meaning (English):** a participant's right to stop participation or request limits on future use, subject to clearly stated practical limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** withdrawal right cho participant stop/limit future use, nhưng cần nói rõ data đã aggregate ra sao.
**Grammar & collocations:** `withdrawal-right policy` — policy; `withdraw from a study` — withdraw; `future-use limit` — limit.
**Examples:** `The withdrawal right applied to new analyses but not to an already published aggregate result.` → Right áp dụng future analysis, không undo aggregate đã publish.
**Liên kết tiếng Hàn:** `철회 권리` — withdrawal right.

## 16. downstream reuse /ˈdaʊnˌstriːm riˈjuːs/
**Part of speech:** noun
**Core meaning (English):** later use of data, samples, code, or outputs by people or projects beyond the original collection team.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** downstream reuse là use tiếp theo ngoài team collect ban đầu.
**Grammar & collocations:** `downstream-reuse condition` — condition; `reuse a dataset` — reuse; `later research project` — project.
**Examples:** `The agreement allowed downstream reuse for public-health research but not individual profiling.` → Agreement allow reuse cho public health, cấm profiling.
**Liên kết tiếng Hàn:** `후속 재사용` — downstream reuse.

## 17. data access committee /ˈdeɪtə ˈæksɛs kəˈmɪti/
**Part of speech:** noun
**Core meaning (English):** a body that reviews requests for controlled data and decides whether proposed uses meet ethical, scientific, and security requirements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data access committee review ai xin data, dùng làm gì, safeguard đủ không.
**Grammar & collocations:** `data-access committee review` — review; `approve a request` — approve; `controlled dataset` — dataset.
**Examples:** `The data access committee required a stronger plan for deleting downloaded copies.` → Committee yêu cầu deletion plan.
**Liên kết tiếng Hàn:** `데이터 접근 위원회` — data access committee.

## 18. trusted research environment /ˈtrʌstɪd rɪˈsɜrtʃ ɪnˈvaɪrənmənt/
**Part of speech:** noun
**Core meaning (English):** a controlled technical and governance setting in which sensitive data can be analyzed without unrestricted copying or export.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trusted research environment cho analysis trong sandbox có control copy/export.
**Grammar & collocations:** `trusted-research-environment policy` — policy; `analyze in a secure workspace` — analyze; `restrict export` — restrict.
**Examples:** `Researchers used a trusted research environment to analyze linked health and education records.` → Researcher analyze linked record trong environment.
**Liên kết tiếng Hàn:** `신뢰할 수 있는 연구 환경` — trusted research environment.

## 19. confidential enclave /ˌkɑnfəˈdɛnʃəl ˈɛnkleɪv/
**Part of speech:** noun
**Core meaning (English):** an isolated computing area designed to protect sensitive data and computation from unauthorized access.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** confidential enclave là vùng compute cô lập để protect data/process.
**Grammar & collocations:** `confidential-enclave service` — service; `run inside an enclave` — run; `isolate sensitive computation` — isolate.
**Examples:** `The model was trained inside a confidential enclave and only aggregate metrics could leave.` → Chỉ aggregate metric được export.
**Liên kết tiếng Hàn:** `기밀 실행 영역` — confidential enclave.

## 20. federated analysis /ˈfɛdəˌreɪtɪd əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** analysis performed across distributed datasets by sending code or summaries to the data rather than pooling raw records centrally.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** federated analysis đưa code tới nơi data, không kéo raw data về một chỗ.
**Grammar & collocations:** `federated-analysis protocol` — protocol; `analyze data in place` — analyze; `distributed site` — site.
**Examples:** `Federated analysis combined hospital estimates without moving patient-level records.` → Analysis combine estimate mà không move raw record.
**Liên kết tiếng Hàn:** `연합 분석` — federated analysis.

## 21. privacy-preserving record linkage /ˈpraɪvəsi prɪˈzɜrvɪŋ ˈrɛkərd ˈlɪŋkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** matching records across sources while limiting exposure of the identifiers used for matching.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** privacy-preserving record linkage link record mà không expose identifier thô.
**Grammar & collocations:** `privacy-preserving-record-linkage method` — method; `match records securely` — match; `protected identifier` — identifier.
**Examples:** `Privacy-preserving record linkage connected registries without sharing names between institutions.` → Link registry mà không share name.
**Liên kết tiếng Hàn:** `개인정보 보호 기록 연결` — privacy-preserving record linkage.

## 22. consent waiver /kənˈsɛnt ˈweɪvər/
**Part of speech:** noun
**Core meaning (English):** authorized permission to conduct specified research without obtaining ordinary individual consent when strict conditions are met.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** consent waiver là exception có điều kiện, không phải bỏ qua ethics.
**Grammar & collocations:** `consent-waiver request` — request; `waive consent` — waive; `minimal-risk study` — study.
**Examples:** `The board granted a consent waiver for analysis of fully de-identified emergency records.` → Board grant waiver cho record de-identified.
**Liên kết tiếng Hàn:** `동의 면제` — consent waiver.

## 23. incidental privacy risk /ˌɪnsəˈdɛntl ˈpraɪvəsi rɪsk/
**Part of speech:** noun
**Core meaning (English):** an unexpected privacy harm that arises while pursuing a legitimate research or service purpose.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** incidental privacy risk xuất hiện ngoài main purpose, như phát hiện identity qua rare combination.
**Grammar & collocations:** `incidental-privacy-risk assessment` — assessment; `expose an identity` — expose; `unexpected disclosure` — disclosure.
**Examples:** `The mapping project discovered an incidental privacy risk for households near the rare disease cluster.` → Map tạo risk cho household gần cluster.
**Liên kết tiếng Hàn:** `우발적 개인정보 위험` — incidental privacy risk.

## 24. collective privacy /kəˈlɛktɪv ˈpraɪvəsi/
**Part of speech:** noun
**Core meaning (English):** privacy protection concerning groups whose members may be exposed or inferred collectively even when individual records are masked.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** collective privacy bảo vệ group khỏi inference/stigma dù individual record đã mask.
**Grammar & collocations:** `collective-privacy concern` — concern; `protect a group` — protect; `aggregate inference` — inference.
**Examples:** `Collective privacy was threatened when the dashboard revealed a rare condition in a tiny village.` → Dashboard lộ condition của village nhỏ.
**Liên kết tiếng Hàn:** `집단 개인정보 보호` — collective privacy.

## 25. collective consent /kəˈlɛktɪv kənˈsɛnt/
**Part of speech:** noun
**Core meaning (English):** permission or governance agreement made with a community or group when research affects shared resources, identity, or collective interests.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** collective consent thêm group governance khi research đụng shared resource/identity.
**Grammar & collocations:** `collective-consent process` — process; `seek community approval` — seek; `shared interest` — interest.
**Examples:** `The archive required collective consent before publishing recordings from a ceremonial event.` → Archive cần community approval.
**Liên kết tiếng Hàn:** `집단 동의` — collective consent.

## Review in context

**De-identification** can become **reversible de-identification** when an authorized key exists, but **equivalence-class anonymity**, a **randomized privacy guarantee**, and assessment of **re-identification risk** are still needed. A **record-linkage attack** may exploit a **quasi-identifier**, so a **privacy-loss budget** and **generated surrogate data** can reduce exposure. **Collection minimization**, **purpose-bound processing**, and **participant authorization** define legitimate use; **broad consent**, **dynamic consent**, and a **withdrawal right** govern change over time. **Downstream reuse** may require a **data access committee**, a **trusted research environment**, or a **confidential enclave**. **Federated analysis** and **privacy-preserving record linkage** keep raw data distributed. A **consent waiver** needs strict justification, and an **incidental privacy risk** can affect **collective privacy** and require **collective consent**.

**Bản dịch tiếng Việt:**

**De-identification** có thể là **reversible de-identification** khi có key được authorize, nhưng vẫn cần **equivalence-class anonymity**, **randomized privacy guarantee** và đánh giá **re-identification risk**. **Record-linkage attack** có thể khai thác **quasi-identifier**, nên **privacy-loss budget** và **generated surrogate data** giúp giảm exposure. **Collection minimization**, **purpose-bound processing** và **participant authorization** định nghĩa use hợp lệ; **broad consent**, **dynamic consent** và **withdrawal right** quản lý thay đổi theo time. **Downstream reuse** có thể cần **data access committee**, **trusted research environment** hoặc **confidential enclave**. **Federated analysis** và **privacy-preserving record linkage** giữ raw data phân tán. **Consent waiver** cần justification chặt, còn **incidental privacy risk** có thể ảnh hưởng **collective privacy** và cần **collective consent**.
