# C2 Vocabulary — Scan test and design-for-test diagnostics

This lesson follows structural test from scan access and timing through fault modeling, signature analysis, and test-power controls.

Flow: **scan chain compression → boundary-scan register → at-speed launch → capture window → path-delay fault → open defect → signature analyzer → test pattern compactor → alias signature → diagnostic resolution → fault dictionary → defect localization → screening escape → test-cost amortization → test point insertion → observation point insertion → pattern inflation → scan shift power → capture power surge**.

## 1. scan chain compression /skæn tʃeɪn kəmˈpreʃən/
**Part of speech:** noun
**Core meaning (English):** reducing external test data and response volume while preserving internal scan coverage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm test data và response bên ngoài mà vẫn giữ scan coverage nội.
**Grammar & collocations:** `scan-chain-compression ratio` — ratio; `compact multiple scan chains` — compact nhiều scan chain.
**Examples:** `Scan chain compression shortened tester time for the large logic partition.` → Compression chain-scan rút tester time cho logic partition lớn.
**Liên kết tiếng Hàn:** `스캔 체인 압축`.

## 2. boundary-scan register /ˈbaʊndəri skæn ˈredʒɪstər/
**Part of speech:** noun
**Core meaning (English):** register cells placed at chip pins to control and observe boundary signals during test.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** register cell ở chip pin để control và observe boundary signal khi test.
**Grammar & collocations:** `boundary-scan-register instruction` — instruction; `observe an interconnect pin` — observe interconnect pin.
**Examples:** `The boundary-scan register isolated a board trace fault from the core logic.` → Register scan-boundary cô lập board trace fault khỏi core logic.
**Liên kết tiếng Hàn:** `경계 스캔 레지스터`.

## 3. at-speed launch /æt spiːd lɔːntʃ/
**Part of speech:** noun
**Core meaning (English):** launching a test transition at the functional operating speed of the circuit.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo test transition ở functional operating speed của circuit.
**Grammar & collocations:** `at-speed-launch pulse` — pulse; `excite a timing path` — excite timing path.
**Examples:** `At-speed launch exposed a delay defect that low-frequency scan missed.` → Launch at-speed lộ delay defect mà scan frequency thấp bỏ sót.
**Liên kết tiếng Hàn:** `고속 런치`.

## 4. capture window /ˈkæptʃər ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** timing interval in which a test response is sampled and stored.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interval timing nơi test response được sample và lưu.
**Grammar & collocations:** `capture-window placement` — placement; `sample a propagated transition` — sample transition đã propagate.
**Examples:** `The capture window was shifted to distinguish a slow path from a stuck response.` → Window capture được dịch để phân biệt path chậm với response stuck.
**Liên kết tiếng Hàn:** `캡처 창`.

## 5. path-delay fault /pæθ dɪˈleɪ fɔːlt/
**Part of speech:** noun
**Core meaning (English):** fault in which a signal path responds too slowly to meet its timing requirement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fault khi signal path response quá chậm để đạt timing requirement.
**Grammar & collocations:** `path-delay-fault pattern` — pattern; `test a critical path` — test critical path.
**Examples:** `The path-delay fault appeared only at the hot voltage corner.` → Fault delay-path chỉ xuất hiện ở voltage corner nóng.
**Liên kết tiếng Hàn:** `경로 지연 결함`.

## 6. open defect /ˈoʊpən ˈdiːfekt/
**Part of speech:** noun
**Core meaning (English):** physical discontinuity that breaks an intended conductor or contact.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** discontinuity vật lý làm đứt conductor hoặc contact dự kiến.
**Grammar & collocations:** `open-defect signature` — signature; `localize a broken interconnect` — định vị interconnect đứt.
**Examples:** `The open defect produced a floating scan response at one package ball.` → Defect open tạo scan response floating ở một package ball.
**Liên kết tiếng Hàn:** `개방 결함`.

## 7. signature analyzer /ˈsɪɡnətʃər ˈænəlaɪzər/
**Part of speech:** noun
**Core meaning (English):** circuit or tool that compresses a response stream into a comparison signature.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** circuit hoặc tool compress response stream thành signature để comparison.
**Grammar & collocations:** `signature-analyzer register` — register; `compare a compact response` — so compact response.
**Examples:** `The signature analyzer detected a mismatch after the second scan pattern.` → Analyzer signature detect mismatch sau scan pattern thứ hai.
**Liên kết tiếng Hàn:** `시그니처 분석기`.

## 8. test pattern compactor /test ˈpætərn kəmˈpæktər/
**Part of speech:** noun
**Core meaning (English):** logic that compresses many test responses into a smaller observable result.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** logic compress nhiều test response thành result observe nhỏ hơn.
**Grammar & collocations:** `test-pattern-compactor alias` — alias; `reduce response bandwidth` — giảm response bandwidth.
**Examples:** `The test pattern compactor lowered tester memory without hiding the seeded fault.` → Compactor pattern-test giảm tester memory mà không che fault seeded.
**Liên kết tiếng Hàn:** `테스트 패턴 압축기`.

## 9. alias signature /ˈeɪliəs ˈsɪɡnətʃər/
**Part of speech:** noun
**Core meaning (English):** identical compact result produced by different underlying fault or response patterns.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** compact result giống nhau do fault hoặc response pattern underlying khác.
**Grammar & collocations:** `alias-signature risk` — risk; `distinguish colliding faults` — phân biệt fault collide.
**Examples:** `Alias signature made two unrelated open defects look identical.` → Signature alias làm hai open defect không liên quan trông giống nhau.
**Liên kết tiếng Hàn:** `앨리어스 시그니처`.

## 10. diagnostic resolution /ˌdaɪəɡˈnɑːstɪk ˌrezəˈluːʃən/
**Part of speech:** noun
**Core meaning (English):** ability of a test method to distinguish among nearby fault locations or mechanisms.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng test method phân biệt fault location hoặc mechanism gần nhau.
**Grammar & collocations:** `diagnostic-resolution target` — target; `separate neighboring suspects` — tách suspect lân cận.
**Examples:** `Diagnostic resolution improved after an observation point was inserted.` → Resolution diagnostic cải thiện sau khi insert observation point.
**Liên kết tiếng Hàn:** `진단 분해능`.

## 11. fault dictionary /fɔːlt ˈdɪkʃəneri/
**Part of speech:** noun
**Core meaning (English):** database mapping test responses to likely fault locations or classes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** database map test response với fault location hoặc class có thể.
**Grammar & collocations:** `fault-dictionary lookup` — lookup; `rank candidate defects` — xếp hạng defect candidate.
**Examples:** `The fault dictionary ranked a package open above a logic timing fault.` → Dictionary fault xếp package open cao hơn logic timing fault.
**Liên kết tiếng Hàn:** `고장 사전`.

## 12. defect localization /ˈdiːfekt ˌloʊkəlaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** narrowing a failing unit to a physical site or small region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thu hẹp failing unit về physical site hoặc region nhỏ.
**Grammar & collocations:** `defect-localization workflow` — workflow; `pinpoint a failing cell` — pinpoint cell lỗi.
**Examples:** `Defect localization reduced the search from the full die to one metal segment.` → Localization defect giảm search từ die toàn bộ xuống một metal segment.
**Liên kết tiếng Hàn:** `결함 위치 추적`.

## 13. screening escape /ˈskriːnɪŋ ɪˈskeɪp/
**Part of speech:** noun
**Core meaning (English):** defective unit that passes a production screen and reaches a later stage or customer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** unit defect qua production screen và tới stage sau hoặc customer.
**Grammar & collocations:** `screening-escape analysis` — analysis; `tighten a production pattern` — siết production pattern.
**Examples:** `A screening escape led to a new at-speed pattern for the marginal path.` → Escape screening dẫn tới at-speed pattern mới cho path marginal.
**Liên kết tiếng Hàn:** `선별 누출`.

## 14. test-cost amortization /test kɔːst əˌmɔːrtəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** spreading test-development or equipment cost across the units or products that use it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân bổ test-development hoặc equipment cost qua units hoặc product dùng nó.
**Grammar & collocations:** `test-cost-amortization model` — model; `justify an expensive screen` — justify screen đắt.
**Examples:** `Test-cost amortization favored reusable scan infrastructure across product generations.` → Amortization cost-test ủng hộ scan infrastructure tái dùng qua product generation.
**Liên kết tiếng Hàn:** `시험 비용 상각`.

## 15. test point insertion /test pɔɪnt ɪnˈsɜːrʃən/
**Part of speech:** noun
**Core meaning (English):** adding controllability or observability points to improve structural test access.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thêm point controllability hoặc observability để cải thiện structural test access.
**Grammar & collocations:** `test-point-insertion overhead` — overhead; `expose an internal node` — expose node nội.
**Examples:** `Test point insertion improved coverage but added routing and area cost.` → Insertion point-test cải thiện coverage nhưng thêm routing và area cost.
**Liên kết tiếng Hàn:** `테스트 포인트 삽입`.

## 16. observation point insertion /ˌɑːbzərˈveɪʃən pɔɪnt ɪnˈsɜːrʃən/
**Part of speech:** noun
**Core meaning (English):** adding a point that exposes an internal signal to a test response path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thêm point expose internal signal vào test response path.
**Grammar & collocations:** `observation-point-insertion strategy` — strategy; `improve diagnostic visibility` — cải thiện visibility diagnostic.
**Examples:** `Observation point insertion separated two faults with the same compressed signature.` → Insertion point-observation tách hai fault có signature compressed giống.
**Liên kết tiếng Hàn:** `관찰점 삽입`.

## 17. pattern inflation /ˈpætərn ɪnˈfleɪʃən/
**Part of speech:** noun
**Core meaning (English):** growth in test-pattern count or data volume caused by added coverage and constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test-pattern count hoặc data volume tăng do coverage và constraint thêm.
**Grammar & collocations:** `pattern-inflation estimate` — estimate; `balance coverage against test time` — cân coverage với test time.
**Examples:** `Pattern inflation threatened the tester schedule after new corner constraints were added.` → Inflation pattern đe dọa tester schedule sau khi thêm corner constraint.
**Liên kết tiếng Hàn:** `패턴 팽창`.

## 18. scan shift power /skæn ʃɪft ˈpaʊər/
**Part of speech:** noun
**Core meaning (English):** power consumed while scan chains shift test data through many sequential elements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** power tiêu thụ khi scan chain shift test data qua nhiều sequential element.
**Grammar & collocations:** `scan-shift-power limit` — limit; `stagger scan activity` — stagger scan activity.
**Examples:** `Scan shift power exceeded the package thermal limit during the longest chain.` → Power shift-scan vượt thermal limit package trong chain dài nhất.
**Liên kết tiếng Hàn:** `스캔 시프트 전력`.

## 19. capture power surge /ˈkæptʃər ˈpaʊər sɜːrdʒ/
**Part of speech:** noun
**Core meaning (English):** brief power increase when many functional nodes switch during test capture.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** power tăng ngắn khi nhiều functional node switch trong test capture.
**Grammar & collocations:** `capture-power-surge limit` — limit; `stagger launch activity` — stagger launch activity.
**Examples:** `Capture power surge caused a supply droop that looked like a logic failure.` → Surge power-capture gây supply droop trông như logic failure.
**Liên kết tiếng Hàn:** `캡처 전력 급증`.

## 20. test clock skew /test klɑːk skjuː/
**Part of speech:** noun
**Core meaning (English):** timing difference among test clock arrivals at different scan or capture regions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** timing difference giữa test clock arrival ở scan hoặc capture region khác.
**Grammar & collocations:** `test-clock-skew budget` — budget; `balance clock tree delays` — cân clock tree delay.
**Examples:** `Test clock skew reduced at-speed launch margin on the farthest chain.` → Skew clock-test giảm at-speed launch margin trên chain xa nhất.
**Liên kết tiếng Hàn:** `테스트 클록 스큐`.

## Review in context

**Scan chain compression**, **boundary-scan register**, **at-speed launch**, and **capture window** expose a **path-delay fault** or **open defect** through a **signature analyzer**, **test pattern compactor**, and **alias signature**. **Diagnostic resolution**, a **fault dictionary**, **defect localization**, and **screening escape** guide **test-cost amortization**, **test point insertion**, and **observation point insertion**. **Pattern inflation**, **scan shift power**, **capture power surge**, and **test clock skew** determine production feasibility.

**Bản dịch tiếng Việt:** **Scan chain compression**, **boundary-scan register**, **at-speed launch** và **capture window** làm lộ **path-delay fault** hoặc **open defect** qua **signature analyzer**, **test pattern compactor** và **alias signature**. **Diagnostic resolution**, **fault dictionary**, **defect localization** và **screening escape** định hướng **test-cost amortization**, **test point insertion** và **observation point insertion**. **Pattern inflation**, **scan shift power**, **capture power surge** và **test clock skew** quyết định tính khả thi production.
