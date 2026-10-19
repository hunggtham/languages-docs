# C2 Vocabulary — Clinical data interoperability and standards

This lesson follows a clinical record from structured exchange through terminology binding, consent, audit, and research reuse.

Flow: **FHIR resource → HL7 message → terminology binding → value set → code system → canonical URL → profile constraint → extension element → provenance resource → consent directive → audit event → bulk data export → SMART on FHIR → CDS Hooks → clinical document architecture → openEHR archetype → common data model → phenotype algorithm → data quality rule → record linkage**.

## 1. FHIR resource /faɪər ˈriːsɔrs/
**Part of speech:** noun
**Core meaning (English):** a standardized, addressable representation of a clinical or administrative entity in the FHIR exchange model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** object chuẩn hóa như Patient, Observation hoặc MedicationRequest để trao đổi.
**Grammar & collocations:** `FHIR-resource profile` — profile; `retrieve a FHIR resource` — lấy.
**Examples:** `The application retrieved a FHIR resource for the patient's latest observation.` → Ứng dụng lấy FHIR resource của observation mới nhất.
**Liên kết tiếng Hàn:** `FHIR 리소스`.

## 2. HL7 message /eɪtʃ ɛl sɛvən ˈmɛsɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a structured healthcare message exchanged between systems under an HL7 standard.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** message y tế có cấu trúc để hệ thống bệnh viện gửi nhận.
**Grammar & collocations:** `HL7-message parser` — parser; `send an HL7 message` — gửi.
**Examples:** `The interface engine converted the admission event into an HL7 message.` → Interface engine đổi event nhập viện thành HL7 message.
**Liên kết tiếng Hàn:** `HL7 메시지`.

## 3. terminology binding /ˌtɝməˈnɑlədʒi ˈbaɪndɪŋ/
**Part of speech:** noun
**Core meaning (English):** specifying which coded vocabulary a data element must use and how strictly codes are required.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ràng buộc field vào vocabulary/code chuẩn.
**Grammar & collocations:** `terminology-binding strength` — độ chặt; `bind an element to a value set` — bind.
**Examples:** `The terminology binding required the laboratory result to use an approved code.` → Binding yêu cầu lab result dùng code được duyệt.
**Liên kết tiếng Hàn:** `용어 바인딩`.

## 4. value set /ˈvæljuː sɛt/
**Part of speech:** noun
**Core meaning (English):** a defined collection of permitted codes for a particular data element or clinical use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập code hợp lệ cho một field như status hoặc route.
**Grammar & collocations:** `value-set expansion` — expansion; `validate against a value set` — validate.
**Examples:** `The validator rejected a status code that was not in the value set.` → Validator từ chối status code ngoài value set.
**Liên kết tiếng Hàn:** `값 집합`.

## 5. code system /koʊd ˈsɪstəm/
**Part of speech:** noun
**Core meaning (English):** a managed vocabulary that assigns unique codes and meanings to concepts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ thống định nghĩa code và meaning của concept.
**Grammar & collocations:** `code-system URI` — URI; `publish a code system` — publish.
**Examples:** `The profile referenced a code system for standardized procedure concepts.` → Profile tham chiếu code system cho procedure chuẩn.
**Liên kết tiếng Hàn:** `코드 시스템`.

## 6. canonical URL /kəˈnɑnɪkəl ˌjuː ˈɑr ˈɛl/
**Part of speech:** noun
**Core meaning (English):** a globally stable URL used to identify a specification artifact independently of a particular server instance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** URL định danh chuẩn, không đổi theo server đang host.
**Grammar & collocations:** `canonical-URL identifier` — identifier; `resolve a canonical URL` — resolve.
**Examples:** `The client used the canonical URL to distinguish the approved profile from a local copy.` → Client dùng URL chuẩn để phân biệt profile approved với bản local.
**Liên kết tiếng Hàn:** `표준 URL`.

## 7. profile constraint /ˈproʊfaɪl kənˈstreɪnt/
**Part of speech:** noun
**Core meaning (English):** a rule in a conformance profile that narrows or fixes the allowed structure or values of a base resource.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** constraint làm resource chung chặt hơn cho use case cụ thể.
**Grammar & collocations:** `profile-constraint violation` — violation; `constrain an element` — ràng buộc.
**Examples:** `The profile constraint required an identifier before the resource could be submitted.` → Constraint yêu cầu identifier trước khi submit resource.
**Liên kết tiếng Hàn:** `프로필 제약`.

## 8. extension element /ɪkˈstɛnʃən ˈɛləmənt/
**Part of speech:** noun
**Core meaning (English):** a formally defined element that adds information not present in a base standard structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** element mở rộng có định nghĩa rõ, không phá chuẩn gốc.
**Grammar & collocations:** `extension-element definition` — definition; `populate an extension` — điền.
**Examples:** `The extension element carried a local screening score without changing the base resource.` → Extension mang screening score local mà không đổi resource gốc.
**Liên kết tiếng Hàn:** `확장 요소`.

## 9. provenance resource /ˈprɑvənəns ˈriːsɔrs/
**Part of speech:** noun
**Core meaning (English):** a structured record describing how a clinical resource was created, transformed, or attributed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** record kể nguồn gốc, agent và transformation của dữ liệu lâm sàng.
**Grammar & collocations:** `provenance-resource target` — target; `record data lineage` — ghi lineage.
**Examples:** `The provenance resource identified the device that produced the measurement.` → Provenance chỉ ra device tạo measurement.
**Liên kết tiếng Hàn:** `출처 리소스`.

## 10. consent directive /kənˈsɛnt dəˈrɛktɪv/
**Part of speech:** noun
**Core meaning (English):** a structured instruction describing what uses of a person's data are permitted or prohibited.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ thị consent nói data được dùng vào đâu và cấm dùng vào đâu.
**Grammar & collocations:** `consent-directive scope` — scope; `enforce a consent directive` — enforce.
**Examples:** `The consent directive allowed quality improvement but prohibited commercial reuse.` → Directive cho phép quality improvement nhưng cấm reuse thương mại.
**Liên kết tiếng Hàn:** `동의 지시`.

## 11. audit event /ˈɔdɪt ɪˈvɛnt/
**Part of speech:** noun
**Core meaning (English):** a structured record of an action on a clinical system or resource for accountability and security review.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** event log ai đã đọc, sửa hoặc gửi resource nào.
**Grammar & collocations:** `audit-event record` — record; `emit an audit event` — phát event.
**Examples:** `The system emitted an audit event when a researcher opened the restricted record.` → Hệ thống phát audit event khi researcher mở record hạn chế.
**Liên kết tiếng Hàn:** `감사 이벤트`.

## 12. bulk data export /bʌlk ˈdeɪtə ˈɛkspɔrt/
**Part of speech:** noun
**Core meaning (English):** exporting large volumes of standardized records for analytics or research rather than retrieving them one by one.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** export số lượng lớn record chuẩn cho nghiên cứu/analytics.
**Grammar & collocations:** `bulk-data-export job` — job; `schedule an export` — schedule.
**Examples:** `Bulk data export delivered de-identified observations to the research warehouse overnight.` → Export bulk chuyển observation đã de-identify tới warehouse qua đêm.
**Liên kết tiếng Hàn:** `대량 데이터 내보내기`.

## 13. SMART on FHIR /smɑrt ɑn faɪər/
**Part of speech:** noun
**Core meaning (English):** an application-launch and authorization framework for connecting apps to FHIR data in a clinical context.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** framework để app launch trong EHR và xin quyền FHIR an toàn.
**Grammar & collocations:** `SMART-on-FHIR launch` — launch; `request SMART scopes` — xin scope.
**Examples:** `SMART on FHIR let the clinician launch the scheduling app inside the hospital record.` → SMART on FHIR cho clinician mở app scheduling trong hồ sơ bệnh viện.
**Liên kết tiếng Hàn:** `SMART on FHIR`.

## 14. CDS Hooks /siː diː ɛs hʊks/
**Part of speech:** noun
**Core meaning (English):** a mechanism for invoking decision-support services at defined points in a clinical workflow.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hook gọi decision support đúng lúc trong workflow EHR.
**Grammar & collocations:** `CDS-Hooks card` — card; `invoke a decision-support hook` — gọi.
**Examples:** `CDS Hooks displayed a medication warning when the clinician opened the order screen.` → CDS Hooks hiện cảnh báo khi clinician mở order screen.
**Liên kết tiếng Hàn:** `CDS Hooks`.

## 15. clinical document architecture /ˈklɪnɪkəl ˈdɑkjəmənt ˈɑrkəˌtɛktʃər/
**Part of speech:** noun
**Core meaning (English):** a standard for representing clinical documents with structured headers and narrative content.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuẩn document có header cấu trúc và phần narrative lâm sàng.
**Grammar & collocations:** `clinical-document-architecture template` — template; `render a document` — render.
**Examples:** `Clinical document architecture preserved the discharge narrative alongside coded sections.` → Chuẩn giữ narrative discharge cùng section có code.
**Liên kết tiếng Hàn:** `임상 문서 아키텍처`.

## 16. openEHR archetype /ˌoʊpən iː eɪtʃ ɑrkəˌtaɪp/
**Part of speech:** noun
**Core meaning (English):** a reusable clinical information model that defines the structure and meaning of a specific health concept.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** archetype mô tả chuẩn một concept như blood pressure hoặc assessment.
**Grammar & collocations:** `openEHR-archetype template` — template; `bind an archetype` — bind.
**Examples:** `The openEHR archetype represented repeated blood-pressure observations with clear meaning.` → Archetype biểu diễn observation huyết áp lặp lại với meaning rõ.
**Liên kết tiếng Hàn:** `openEHR 아키타입`.

## 17. common data model /ˈkɑmən ˈdeɪtə ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a shared schema that makes clinical data from different sources comparable for analysis.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** schema chung để data bệnh viện khác nhau phân tích cùng cách.
**Grammar & collocations:** `common-data-model mapping` — mapping; `transform into the common data model` — chuyển.
**Examples:** `The study transformed claims and laboratory tables into a common data model.` → Nghiên cứu chuyển claims và lab table vào model chung.
**Liên kết tiếng Hàn:** `공통 데이터 모델`.

## 18. phenotype algorithm /ˈfiːnoʊtaɪp ˈælɡəˌrɪðəm/
**Part of speech:** noun
**Core meaning (English):** a rule or computation that identifies a clinical condition from coded records, measurements, or events.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuật toán tìm cohort bệnh từ code, lab, medication và event.
**Grammar & collocations:** `phenotype-algorithm validation` — validation; `define a computable phenotype` — định nghĩa.
**Examples:** `The phenotype algorithm identified diabetes using diagnoses, prescriptions, and laboratory values.` → Algorithm tìm diabetes bằng diagnosis, thuốc và lab.
**Liên kết tiếng Hàn:** `표현형 알고리즘`.

## 19. data quality rule /ˈdeɪtə ˈkwɑləti ruːl/
**Part of speech:** noun
**Core meaning (English):** a test that checks whether a clinical data element meets expected completeness, format, range, or relationship constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule kiểm tra data đủ, đúng format, range và relation.
**Grammar & collocations:** `data-quality-rule failure` — failure; `run a quality rule` — chạy.
**Examples:** `The data quality rule rejected an observation whose unit did not match its value.` → Rule từ chối observation có unit không khớp value.
**Liên kết tiếng Hàn:** `데이터 품질 규칙`.

## 20. record linkage /ˈrɛkərd ˈlɪŋkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** matching records that refer to the same person, event, or entity across systems.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nối record cùng một người/sự kiện dù identifier hoặc format khác nhau.
**Grammar & collocations:** `record-linkage key` — key; `link duplicate patient records` — nối.
**Examples:** `Record linkage matched the laboratory feed to the longitudinal patient registry.` → Linkage nối feed lab với registry bệnh nhân dài hạn.
**Liên kết tiếng Hàn:** `레코드 연결`.

## Review in context

A **FHIR resource** may travel inside an **HL7 message**, with **terminology binding** pointing to a **value set** and **code system** identified by a **canonical URL**. A **profile constraint** narrows the base structure, while an **extension element** adds local detail. A **provenance resource** records origin, a **consent directive** controls permitted use, and an **audit event** records access. **Bulk data export** supports research; **SMART on FHIR** authorizes apps, and **CDS Hooks** invokes workflow advice. **Clinical document architecture** preserves narrative, while an **openEHR archetype** models a concept. A **common data model** supports analysis, a **phenotype algorithm** defines a cohort, a **data quality rule** tests records, and **record linkage** connects sources.

**Bản dịch tiếng Việt:** **FHIR resource** có thể đi trong **HL7 message**, với **terminology binding** trỏ tới **value set** và **code system** được định danh bằng **canonical URL**. **Profile constraint** thu hẹp cấu trúc gốc, còn **extension element** thêm chi tiết local. **Provenance resource** ghi nguồn, **consent directive** kiểm soát việc dùng, và **audit event** ghi truy cập. **Bulk data export** hỗ trợ nghiên cứu; **SMART on FHIR** cấp quyền cho app, còn **CDS Hooks** gọi advice trong workflow. **Clinical document architecture** giữ narrative, còn **openEHR archetype** mô hình hóa concept. **Common data model** hỗ trợ phân tích, **phenotype algorithm** định nghĩa cohort, **data quality rule** kiểm tra record, và **record linkage** nối các nguồn.
