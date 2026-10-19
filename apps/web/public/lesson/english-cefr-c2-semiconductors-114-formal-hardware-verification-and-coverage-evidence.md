# C2 Vocabulary — Formal hardware verification and coverage evidence

This lesson connects properties, formal proofs, randomized stimulus, and coverage evidence into a defensible hardware-verification argument.

Flow: **property assertion → temporal assertion → cover property → formal equivalence → inductive invariant → symbolic simulation → constraint randomization → functional coverage → cross-coverage bin → waiver rationale → assertion vacuity → proof depth → cone of influence → assumption guarantee → formal harness → reachable state → mutation score → test intent → stimulus legality → checker latency**.

## 1. property assertion /ˈprɑːpərti əˈsɜːrʃən/
**Part of speech:** noun
**Core meaning (English):** executable statement that a design behavior must always satisfy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** statement executable mà design behavior luôn phải satisfy.
**Grammar & collocations:** `property-assertion failure` — failure; `state a protocol rule` — nêu protocol rule.
**Examples:** `The property assertion failed when a response arrived before the request was accepted.` → Assertion property fail khi response tới trước request được accept.
**Liên kết tiếng Hàn:** `속성 어설션`.

## 2. temporal assertion /ˈtempərəl əˈsɜːrʃən/
**Part of speech:** noun
**Core meaning (English):** assertion describing an allowed sequence of events across clock cycles or time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** assertion mô tả sequence event cho phép qua clock cycle hoặc time.
**Grammar & collocations:** `temporal-assertion sequence` — sequence; `require a response within two cycles` — yêu cầu response trong hai cycle.
**Examples:** `The temporal assertion required reset to remain low until power-good was stable.` → Assertion temporal yêu cầu reset thấp đến khi power-good ổn định.
**Liên kết tiếng Hàn:** `시간적 어설션`.

## 3. cover property /ˈkʌvər ˈprɑːpərti/
**Part of speech:** noun
**Core meaning (English):** formal property whose successful activation demonstrates that a scenario is reachable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** property formal mà activation thành công chứng minh scenario reachable.
**Grammar & collocations:** `cover-property hit` — hit; `demonstrate a rare sequence` — chứng minh sequence hiếm.
**Examples:** `The cover property reached the overflow recovery state after a long symbolic search.` → Property cover đạt overflow recovery state sau symbolic search dài.
**Liên kết tiếng Hàn:** `커버 속성`.

## 4. formal equivalence /ˈfɔːrməl ˌɪkwɪvəˈləns/
**Part of speech:** noun
**Core meaning (English):** proof that two design representations produce equivalent behavior under stated assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** proof hai design representation tạo behavior equivalent dưới assumption đã nêu.
**Grammar & collocations:** `formal-equivalence run` — run; `compare revised RTL with a reference` — so RTL sửa với reference.
**Examples:** `Formal equivalence detected a reset polarity change hidden by ordinary simulation.` → Equivalence formal phát hiện reset polarity change bị simulation thường che.
**Liên kết tiếng Hàn:** `형식적 등가`.

## 5. inductive invariant /ɪnˈdʌktɪv ɪnˈveriənt/
**Part of speech:** noun
**Core meaning (English):** property that holds initially and remains true after every legal transition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** property đúng ban đầu và vẫn đúng sau mọi transition hợp lệ.
**Grammar & collocations:** `inductive-invariant strengthening` — strengthening; `prove a state bound` — chứng minh state bound.
**Examples:** `The inductive invariant proved that the FIFO count could never exceed its depth.` → Invariant inductive chứng minh FIFO count không thể vượt depth.
**Liên kết tiếng Hàn:** `귀납 불변식`.

## 6. symbolic simulation /sɪmˈbɑːlɪk ˌsɪmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** simulation that represents inputs or states as symbolic values rather than one concrete test vector.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** simulation biểu diễn input hoặc state bằng value symbolic thay vì test vector cụ thể.
**Grammar & collocations:** `symbolic-simulation path` — path; `explore many input combinations` — explore nhiều combination input.
**Examples:** `Symbolic simulation found a corner sequence that directed testing had not imagined.` → Simulation symbolic tìm sequence corner mà directed test chưa nghĩ.
**Liên kết tiếng Hàn:** `기호 시뮬레이션`.

## 7. constraint randomization /kənˈstreɪnt ˌrændəməˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** generating varied legal stimulus by randomizing values within declared constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo stimulus hợp lệ đa dạng bằng random value trong constraint khai báo.
**Grammar & collocations:** `constraint-randomization seed` — seed; `generate legal traffic` — generate traffic hợp lệ.
**Examples:** `Constraint randomization exposed an unusual burst length at the arbitration boundary.` → Randomization constraint lộ burst length bất thường ở arbitration boundary.
**Liên kết tiếng Hàn:** `제약 랜덤화`.

## 8. functional coverage /ˈfʌŋkʃənəl ˈkʌvərɪdʒ/
**Part of speech:** noun
**Core meaning (English):** measurement of which intended behaviors, scenarios, or feature combinations have been exercised.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measurement behavior, scenario hoặc feature combination dự kiến nào đã exercise.
**Grammar & collocations:** `functional-coverage target` — target; `close a scenario gap` — đóng scenario gap.
**Examples:** `Functional coverage remained low for simultaneous power and reset transitions.` → Coverage functional vẫn thấp cho power và reset transition đồng thời.
**Liên kết tiếng Hàn:** `기능 커버리지`.

## 9. cross-coverage bin /krɔːs ˈkʌvərɪdʒ bɪn/
**Part of speech:** noun
**Core meaning (English):** coverage bucket representing a combination of two or more independently sampled conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bucket coverage biểu diễn combination nhiều condition sample độc lập.
**Grammar & collocations:** `cross-coverage-bin hit` — hit; `exercise a rare combination` — exercise combination hiếm.
**Examples:** `The cross-coverage bin for low voltage and maximum burst remained empty.` → Bin coverage-cross cho voltage thấp và burst tối đa vẫn trống.
**Liên kết tiếng Hàn:** `교차 커버리지 빈`.

## 10. waiver rationale /ˈweɪvər ˌræʃəˈnæl/
**Part of speech:** noun
**Core meaning (English):** documented technical reason for accepting an uncovered or failing check without fixing it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lý do kỹ thuật document cho việc accept check thiếu hoặc fail mà không sửa.
**Grammar & collocations:** `waiver-rationale review` — review; `justify an unreachable bin` — justify bin unreachable.
**Examples:** `The waiver rationale explained why a debug-only state could not occur in silicon.` → Rationale waiver giải thích state debug-only không thể xảy ra trong silicon.
**Liên kết tiếng Hàn:** `면제 근거`.

## 11. assertion vacuity /əˈsɜːrʃən vəˈkjuːəti/
**Part of speech:** noun
**Core meaning (English):** apparent proof of an assertion that succeeds only because its triggering condition never occurs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** proof apparent thành công vì triggering condition không bao giờ xảy ra.
**Grammar & collocations:** `assertion-vacuity check` — check; `prove the antecedent is reachable` — chứng minh antecedent reachable.
**Examples:** `Assertion vacuity hid the fact that the request condition was overconstrained.` → Vacuity assertion che việc request condition bị overconstrain.
**Liên kết tiếng Hàn:** `어설션 공허성`.

## 12. proof depth /pruːf depθ/
**Part of speech:** noun
**Core meaning (English):** number of transitions or cycles explored in a bounded formal proof.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số transition hoặc cycle explore trong bounded formal proof.
**Grammar & collocations:** `proof-depth limit` — limit; `increase the exploration horizon` — tăng horizon exploration.
**Examples:** `Proof depth had to increase before the delayed timeout became visible.` → Depth proof phải tăng trước khi timeout trễ lộ.
**Liên kết tiếng Hàn:** `증명 깊이`.

## 13. cone of influence /koʊn əv ˈɪnfluəns/
**Part of speech:** noun
**Core meaning (English):** subset of logic that can affect a selected output, property, or state variable.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** subset logic có thể ảnh hưởng output, property hoặc state variable chọn.
**Grammar & collocations:** `cone-of-influence reduction` — reduction; `prune irrelevant logic` — loại logic không liên quan.
**Examples:** `Cone of influence reduction made the formal proof tractable.` → Reduction influence-cone làm formal proof tractable.
**Liên kết tiếng Hàn:** `영향 원뿔`.

## 14. assumption guarantee /əˈsʌmpʃən ˌɡærənˈtiː/
**Part of speech:** noun
**Core meaning (English):** paired formal contract in which the environment promises assumptions and the design promises guarantees.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** contract formal gồm environment promise assumption và design promise guarantee.
**Grammar & collocations:** `assumption-guarantee contract` — contract; `bound an interface environment` — bound interface environment.
**Examples:** `The assumption guarantee stated that the upstream producer would not drop a handshake.` → Guarantee assumption nêu upstream producer không drop handshake.
**Liên kết tiếng Hàn:** `가정-보장 계약`.

## 15. formal harness /ˈfɔːrməl ˈhɑːrnɪs/
**Part of speech:** noun
**Core meaning (English):** wrapper logic and constraints that connect a design to a formal property engine.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** wrapper logic và constraint nối design với formal property engine.
**Grammar & collocations:** `formal-harness assumption` — assumption; `bind a monitor to RTL` — bind monitor vào RTL.
**Examples:** `The formal harness modeled the memory response without importing the full software stack.` → Harness formal model memory response mà không import full software stack.
**Liên kết tiếng Hàn:** `형식 검증 하네스`.

## 16. reachable state /ˈriːtʃəbəl steɪt/
**Part of speech:** noun
**Core meaning (English):** state that can actually be entered from reset through a legal sequence of transitions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** state thực sự enter được từ reset qua sequence transition hợp lệ.
**Grammar & collocations:** `reachable-state analysis` — analysis; `exclude an impossible configuration` — loại configuration impossible.
**Examples:** `The reachable state analysis removed a false coverage gap caused by an impossible mode.` → Analysis state-reachable loại coverage gap giả do mode impossible.
**Liên kết tiếng Hàn:** `도달 가능 상태`.

## 17. mutation score /mjuːˈteɪʃən skɔːr/
**Part of speech:** noun
**Core meaning (English):** fraction of injected design changes detected by the verification suite.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fraction design change inject được verification suite detect.
**Grammar & collocations:** `mutation-score trend` — trend; `kill a seeded fault` — kill fault seeded.
**Examples:** `Mutation score exposed monitors that passed nominal tests but missed control inversions.` → Score mutation lộ monitor qua nominal test nhưng miss control inversion.
**Liên kết tiếng Hàn:** `변이 점수`.

## 18. test intent /test ɪnˈtent/
**Part of speech:** noun
**Core meaning (English):** documented purpose explaining which risk or behavior a test is meant to exercise.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** purpose document giải thích risk hoặc behavior test định exercise.
**Grammar & collocations:** `test-intent statement` — statement; `trace a test to a requirement` — trace test tới requirement.
**Examples:** `The test intent distinguished protocol coverage from simple line execution.` → Intent test phân biệt protocol coverage với line execution đơn giản.
**Liên kết tiếng Hàn:** `시험 의도`.

## 19. stimulus legality /ˈstɪmjələs lɪˈɡæləti/
**Part of speech:** noun
**Core meaning (English):** whether generated input obeys the real interface protocol and physical operating constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** input generated có tuân protocol interface thật và physical constraint không.
**Grammar & collocations:** `stimulus-legality checker` — checker; `reject an impossible sequence` — reject sequence impossible.
**Examples:** `Stimulus legality prevented the random test from using an invalid power transition.` → Legality stimulus ngăn random test dùng power transition invalid.
**Liên kết tiếng Hàn:** `자극 적법성`.

## 20. checker latency /ˈtʃekər ˈleɪtənsi/
**Part of speech:** noun
**Core meaning (English):** delay between a design event and the checker decision that reports pass or failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** delay giữa design event và checker decision báo pass hoặc failure.
**Grammar & collocations:** `checker-latency alignment` — alignment; `correlate a delayed failure` — correlate failure trễ.
**Examples:** `Checker latency caused the scoreboard to attribute a response to the wrong request.` → Latency checker khiến scoreboard gán response cho request sai.
**Liên kết tiếng Hàn:** `검사기 지연`.

## Review in context

A **property assertion**, **temporal assertion**, **cover property**, and **formal equivalence** rely on an **inductive invariant** or **symbolic simulation**. **Constraint randomization**, **functional coverage**, and a **cross-coverage bin** expose scenarios, while a **waiver rationale**, **assertion vacuity**, **proof depth**, and **cone of influence** qualify the evidence. An **assumption guarantee**, **formal harness**, **reachable state**, **mutation score**, **test intent**, **stimulus legality**, and **checker latency** connect proof results to executable verification.

**Bản dịch tiếng Việt:** **Property assertion**, **temporal assertion**, **cover property** và **formal equivalence** dựa vào **inductive invariant** hoặc **symbolic simulation**. **Constraint randomization**, **functional coverage** và **cross-coverage bin** làm lộ scenario, còn **waiver rationale**, **assertion vacuity**, **proof depth** và **cone of influence** qualify evidence. **Assumption guarantee**, **formal harness**, **reachable state**, **mutation score**, **test intent**, **stimulus legality** và **checker latency** nối proof result với verification executable.
