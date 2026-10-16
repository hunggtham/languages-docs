# C2 Vocabulary — Formal methods and type-theoretic verification

This lesson follows a software property from mathematical semantics through type systems, model checking, and machine-checked proof.

Flow: **operational semantics → denotational semantics → type soundness → progress theorem → preservation theorem → dependent type → refinement type → effect system → linear type → ownership type → abstract interpretation → model checking → temporal logic → bisimulation → weakest precondition → Hoare triple → proof-carrying code → theorem prover → counterexample trace → formal methods**.

## 1. operational semantics /ˌɑpəˈreɪʃənəl səˈmæntɪks/
**Part of speech:** noun
**Core meaning (English):** a description of program meaning in terms of the individual computation steps an abstract machine performs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô tả chương trình bằng từng bước máy trừu tượng thực hiện.
**Grammar & collocations:** `operational-semantics rule` — rule; `define an evaluation step` — định nghĩa.
**Examples:** `Operational semantics showed exactly when the interpreter should allocate a new environment.` → Semantics chỉ rõ lúc interpreter cấp environment mới.
**Liên kết tiếng Hàn:** `작동 의미론`.

## 2. denotational semantics /dɪˌnoʊˈteɪʃənəl səˈmæntɪks/
**Part of speech:** noun
**Core meaning (English):** a mathematical account of program meaning that maps constructs to objects such as functions or domains.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ánh xạ construct chương trình vào đối tượng toán học như function hoặc domain.
**Grammar & collocations:** `denotational-semantics model` — model; `assign a mathematical meaning` — gán.
**Examples:** `Denotational semantics made two syntactically different programs comparable by their resulting functions.` → Hai chương trình khác cú pháp nhưng so được qua function kết quả.
**Liên kết tiếng Hàn:** `지시 의미론`.

## 3. type soundness /taɪp ˈsaʊndnəs/
**Part of speech:** noun
**Core meaning (English):** the property that a well-typed program cannot reach an execution state ruled out by its type system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chương trình type đúng không rơi vào trạng thái sai mà type system cấm.
**Grammar & collocations:** `type-soundness proof` — proof; `establish soundness` — chứng minh.
**Examples:** `The language designers proved type soundness before adding concurrency primitives.` → Nhà thiết kế chứng minh soundness trước khi thêm primitive đồng thời.
**Liên kết tiếng Hàn:** `타입 건전성`.

## 4. progress theorem /ˈprɑɡrɛs ˈθiərəm/
**Part of speech:** noun
**Core meaning (English):** a theorem stating that a well-typed, non-final program can take another valid evaluation step.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** term type đúng hoặc đã là value, hoặc còn bước chạy hợp lệ.
**Grammar & collocations:** `progress-theorem lemma` — lemma; `show that a term can step` — chứng minh.
**Examples:** `The progress theorem ruled out a well-typed expression becoming mysteriously stuck.` → Định lý loại trừ expression type đúng bị kẹt không rõ lý do.
**Liên kết tiếng Hàn:** `진행 정리`.

## 5. preservation theorem /ˌprɛzərˈveɪʃən ˈθiərəm/
**Part of speech:** noun
**Core meaning (English):** a theorem stating that evaluation preserves the type of a well-typed program.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chạy một bước không làm term mất type đã chứng minh.
**Grammar & collocations:** `preservation-theorem proof` — proof; `preserve a typing judgment` — bảo toàn.
**Examples:** `The preservation theorem covered substitution across a polymorphic function call.` → Định lý bảo toàn cả substitution trong call đa hình.
**Liên kết tiếng Hàn:** `보존 정리`.

## 6. dependent type /dɪˈpɛndənt taɪp/
**Part of speech:** noun
**Core meaning (English):** a type whose definition or permitted values depend on a term, often encoding a property such as a length.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** type phụ thuộc value, ví dụ vector mang luôn độ dài.
**Grammar & collocations:** `dependent-type elaboration` — elaboration; `encode a length in the type` — mã hóa.
**Examples:** `A dependent type expressed that the returned matrix had exactly three rows.` → Dependent type ghi rõ matrix trả về có đúng ba hàng.
**Liên kết tiếng Hàn:** `종속 타입`.

## 7. refinement type /rɪˈfaɪnmənt taɪp/
**Part of speech:** noun
**Core meaning (English):** a type restricted by a logical predicate that states an additional property its values must satisfy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** type cơ sở cộng điều kiện logic, như số nguyên dương.
**Grammar & collocations:** `refinement-type predicate` — predicate; `refine an input contract` — tinh chỉnh.
**Examples:** `The refinement type rejected a port number outside the valid network range.` → Type từ chối port ngoài range hợp lệ.
**Liên kết tiếng Hàn:** `정제 타입`.

## 8. effect system /ɪˈfɛkt ˈsɪstəm/
**Part of speech:** noun
**Core meaning (English):** a type-system extension that tracks computational effects such as mutation, exceptions, I/O, or asynchronous suspension.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** type system ghi cả “tác dụng phụ” của function.
**Grammar & collocations:** `effect-system annotation` — annotation; `track an I/O effect` — theo dõi.
**Examples:** `The effect system made a database write visible in the function's static signature.` → Effect system làm write database hiện trong signature.
**Liên kết tiếng Hàn:** `효과 시스템`.

## 9. linear type /ˈlɪniər taɪp/
**Part of speech:** noun
**Core meaning (English):** a type that requires a value to be consumed exactly once unless the type system explicitly permits another usage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resource phải dùng đúng một lần, giúp tránh double-use hoặc quên giải phóng.
**Grammar & collocations:** `linear-type discipline` — discipline; `consume a resource` — tiêu thụ.
**Examples:** `A linear type prevented two callbacks from closing the same file descriptor.` → Linear type ngăn hai callback đóng cùng descriptor.
**Liên kết tiếng Hàn:** `선형 타입`.

## 10. ownership type /ˈoʊnərʃɪp taɪp/
**Part of speech:** noun
**Core meaning (English):** a type-system construct that expresses which component owns a resource and controls its lifetime or mutation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** type ghi ai sở hữu resource và ai được sửa hoặc giải phóng.
**Grammar & collocations:** `ownership-type annotation` — annotation; `transfer ownership` — chuyển quyền.
**Examples:** `The ownership type made a buffer transfer explicit at the API boundary.` → Ownership type làm rõ việc chuyển buffer ở biên API.
**Liên kết tiếng Hàn:** `소유권 타입`.

## 11. abstract interpretation /ˈæbstrækt ɪnˌtɝprəˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** a static-analysis framework that computes a safe approximation of program behavior in an abstract domain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích xấp xỉ nhưng an toàn thay vì chạy mọi input thật.
**Grammar & collocations:** `abstract-interpretation domain` — domain; `compute an invariant` — tính bất biến.
**Examples:** `Abstract interpretation proved that an array index stayed within its allocated range.` → Phân tích trừu tượng chứng minh index nằm trong range.
**Liên kết tiếng Hàn:** `추상 해석`.

## 12. model checking /ˈmɑdəl ˌtʃɛkɪŋ/
**Part of speech:** noun
**Core meaning (English):** exhaustive exploration of a finite or symbolically represented state space to test whether a formal property holds.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** duyệt các state để xem property có luôn đúng không.
**Grammar & collocations:** `model-checking engine` — engine; `check a transition system` — kiểm tra.
**Examples:** `Model checking found an interleaving in which the lock was never released.` → Model checking tìm interleaving khiến lock không bao giờ release.
**Liên kết tiếng Hàn:** `모델 검사`.

## 13. temporal logic /ˈtɛmpərəl ˈlɑdʒɪk/
**Part of speech:** noun
**Core meaning (English):** a logic for expressing how propositions must hold across states and over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** logic mô tả điều kiện xảy ra trước/sau hoặc luôn luôn/cuối cùng.
**Grammar & collocations:** `temporal-logic formula` — formula; `state an eventuality property` — nêu.
**Examples:** `The temporal logic formula required every request to be followed eventually by a response.` → Formula yêu cầu mọi request cuối cùng có response.
**Liên kết tiếng Hàn:** `시간 논리`.

## 14. bisimulation /ˌbaɪˌsɪmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** a relation showing that two transition systems match each other's observable behavior step by step.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hai system mô phỏng lẫn nhau qua mọi bước quan sát được.
**Grammar & collocations:** `bisimulation relation` — relation; `prove behavioral equivalence` — chứng minh.
**Examples:** `Bisimulation established that the optimized protocol preserved the reference server's behavior.` → Bisimulation chứng minh protocol tối ưu giữ hành vi server gốc.
**Liên kết tiếng Hàn:** `쌍시뮬레이션`.

## 15. weakest precondition /ˈwiːkəst priːkənˈdɪʃən/
**Part of speech:** noun
**Core meaning (English):** the least restrictive condition that must hold before a command to guarantee a desired condition afterward.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện đầu vào yếu nhất nhưng đủ để đảm bảo postcondition.
**Grammar & collocations:** `weakest-precondition calculus` — calculus; `derive a precondition` — suy ra.
**Examples:** `The weakest precondition required the buffer length to exceed the copied payload.` → Điều kiện yếu nhất yêu cầu buffer dài hơn payload.
**Liên kết tiếng Hàn:** `최약 전조건`.

## 16. Hoare triple /ˈhɔr triːpəl/
**Part of speech:** noun
**Core meaning (English):** a formal assertion written as precondition, command, and postcondition to reason about program correctness.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ ba `{P} C {Q}`: trước, lệnh, sau.
**Grammar & collocations:** `Hoare-triple proof` — proof; `verify a postcondition` — kiểm chứng.
**Examples:** `The Hoare triple captured that a successful withdrawal reduced the balance by the requested amount.` → Triple ghi rút tiền thành công giảm balance đúng amount.
**Liên kết tiếng Hàn:** `호어 트리플`.

## 17. proof-carrying code /pruːf ˈkæriɪŋ koʊd/
**Part of speech:** noun
**Core meaning (English):** executable code distributed with a machine-checkable proof that it satisfies specified safety properties.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code mang theo proof để bên nhận tự kiểm tra trước khi chạy.
**Grammar & collocations:** `proof-carrying-code package` — package; `check a safety certificate` — kiểm tra.
**Examples:** `Proof-carrying code let the sandbox reject an extension whose certificate did not match its binary.` → Sandbox từ chối extension có certificate lệch binary.
**Liên kết tiếng Hàn:** `증명 휴대 코드`.

## 18. theorem prover /ˈθiərəm ˈpruːvər/
**Part of speech:** noun
**Core meaning (English):** a software system that constructs or checks formal proofs from logical rules and definitions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công cụ xây hoặc kiểm tra proof theo rule logic.
**Grammar & collocations:** `theorem-prover kernel` — kernel; `formalize a lemma` — formal hóa.
**Examples:** `The theorem prover checked the arithmetic lemma used by the verified compiler pass.` → Theorem prover kiểm tra lemma số học của compiler pass.
**Liên kết tiếng Hàn:** `정리 증명기`.

## 19. counterexample trace /ˌkaʊntərɪɡˈzæmpəl treɪs/
**Part of speech:** noun
**Core meaning (English):** a concrete sequence of states or events showing how a verified property fails.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường đi cụ thể dẫn tới state vi phạm property.
**Grammar & collocations:** `counterexample-trace replay` — replay; `inspect a failing trace` — xem.
**Examples:** `The counterexample trace showed that a timeout raced with the cancellation callback.` → Trace cho thấy timeout race với callback hủy.
**Liên kết tiếng Hàn:** `반례 추적`.

## 20. formal methods /ˈfɔrməl ˈmɛθədz/
**Part of speech:** noun
**Core meaning (English):** mathematically based techniques for specifying, analyzing, and proving properties of software or hardware.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm phương pháp toán học để đặc tả, phân tích và chứng minh hệ thống.
**Grammar & collocations:** `formal-methods workflow` — workflow; `apply formal methods` — áp dụng.
**Examples:** `Formal methods exposed an assumption that ordinary integration tests had never exercised.` → Phương pháp hình thức lộ assumption mà integration test không chạm tới.
**Liên kết tiếng Hàn:** `형식 방법`.

## Review in context

**Operational semantics** explains execution step by step, while **denotational semantics** maps a program to a mathematical meaning. A type system can establish **type soundness** through a **progress theorem** and a **preservation theorem**. Richer systems use a **dependent type**, **refinement type**, **effect system**, **linear type**, or **ownership type**. Static reasoning may rely on **abstract interpretation**; exhaustive reasoning may use **model checking** and **temporal logic**. **Bisimulation** compares transition systems, while a **weakest precondition** and **Hoare triple** express program-correctness obligations. **Proof-carrying code** ships evidence checked by a **theorem prover**. When a property fails, a **counterexample trace** guides the broader practice of **formal methods**.

**Bản dịch tiếng Việt:** **Operational semantics** giải thích execution từng bước, còn **denotational semantics** ánh xạ chương trình vào ý nghĩa toán học. Type system có thể chứng minh **type soundness** qua **progress theorem** và **preservation theorem**. Hệ thống phong phú hơn dùng **dependent type**, **refinement type**, **effect system**, **linear type** hoặc **ownership type**. Suy luận tĩnh có thể dùng **abstract interpretation**; suy luận vét cạn dùng **model checking** và **temporal logic**. **Bisimulation** so sánh các hệ chuyển trạng thái, còn **weakest precondition** và **Hoare triple** diễn đạt nghĩa vụ đúng đắn. **Proof-carrying code** mang bằng chứng được **theorem prover** kiểm tra. Khi property thất bại, **counterexample trace** dẫn đường cho toàn bộ thực hành **formal methods**.
