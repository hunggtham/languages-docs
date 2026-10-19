# C2 Vocabulary — Formal verification of cryptographic protocols

This lesson follows a protocol-verification workflow from symbolic abstractions and algebraic assumptions through invariants, traces, counterexamples, and mechanized proofs.

Flow: **symbolic model → computational soundness → protocol invariant → freshness predicate → correspondence assertion → trace property → process equivalence → observational equivalence → applied pi calculus → term rewriting → equational theory → mechanized proof → dependent refinement → model checker → bounded-state exploration → state-space explosion → counterexample witness → verification obligation → verification condition → symbolic execution trace**.

## 1. symbolic model /sɪmˈbɒlɪk ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** an abstract representation that treats cryptographic operations as ideal symbols with specified equations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình trừu tượng coi phép mật mã là ký hiệu lý tưởng có phương trình.
**Grammar & collocations:** `symbolic-model assumption` — assumption; `abstract a cryptographic primitive` — trừu tượng.
**Examples:** `The symbolic model hid implementation timing so the proof could focus on message flow.` → Mô hình ẩn timing để proof tập trung luồng message.
**Liên kết tiếng Hàn:** `기호 모델`.

## 2. computational soundness /ˌkɒmpjuˈteɪʃənəl ˈsaʊndnəs/
**Part of speech:** noun
**Core meaning (English):** a guarantee that security proved in an abstract model transfers to concrete computational attackers under stated assumptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo đảm proof trừu tượng vẫn đúng với attacker tính toán cụ thể.
**Grammar & collocations:** `computational-soundness theorem` — theorem; `transfer a symbolic result` — chuyển.
**Examples:** `Computational soundness connected the protocol proof to a reduction against the encryption scheme.` → Soundness nối proof với reduction.
**Liên kết tiếng Hàn:** `계산적 건전성`.

## 3. protocol invariant /ˈproʊtəkɒl ɪnˈveəriənt/
**Part of speech:** noun
**Core meaning (English):** a property that remains true at every reachable stage of a protocol execution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuộc tính luôn đúng ở mọi trạng thái có thể đạt của protocol.
**Grammar & collocations:** `protocol-invariant proof` — proof; `preserve an invariant` — bảo toàn.
**Examples:** `The protocol invariant stated that an accepted session always had a matching authenticated peer.` → Invariant yêu cầu session có peer xác thực.
**Liên kết tiếng Hàn:** `프로토콜 불변식`.

## 4. freshness predicate /ˈfreʃnəs ˈpredɪkeɪt/
**Part of speech:** noun
**Core meaning (English):** a logical condition asserting that a nonce, challenge, or session value has not been reused.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều kiện logic xác nhận nonce hoặc challenge chưa bị dùng lại.
**Grammar & collocations:** `freshness-predicate check` — check; `prove a nonce is new` — chứng minh.
**Examples:** `The freshness predicate ruled out replaying a challenge from an earlier session.` → Predicate loại replay challenge cũ.
**Liên kết tiếng Hàn:** `신선성 술어`.

## 5. correspondence assertion /ˌkɒrəˈspɒndəns əˈsɜːrʃən/
**Part of speech:** noun
**Core meaning (English):** a claim that one protocol event can occur only if another related event occurred as required.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khẳng định một event chỉ xảy ra khi event liên quan đã xảy ra.
**Grammar & collocations:** `correspondence-assertion proof` — proof; `link an acceptance event` — liên kết.
**Examples:** `The correspondence assertion linked a server's acceptance event to a client's prior authorization.` → Assertion nối accept của server với authorize của client.
**Liên kết tiếng Hàn:** `대응 주장`.

## 6. trace property /treɪs ˈprɒpərti/
**Part of speech:** noun
**Core meaning (English):** a requirement evaluated over the sequence of events produced by an execution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** yêu cầu đánh giá trên chuỗi event của một lần chạy.
**Grammar & collocations:** `trace-property specification` — specification; `inspect an execution trace` — kiểm tra.
**Examples:** `The trace property prohibited a secret from appearing in any public output.` → Property cấm secret xuất hiện trong output công khai.
**Liên kết tiếng Hàn:** `추적 속성`.

## 7. process equivalence /ˈprɒses ɪˈkwɪvələns/
**Part of speech:** noun
**Core meaning (English):** a relation stating that two concurrent protocol processes exhibit indistinguishable observable behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quan hệ cho rằng hai process đồng thời có hành vi quan sát như nhau.
**Grammar & collocations:** `process-equivalence proof` — proof; `compare concurrent processes` — so sánh.
**Examples:** `Process equivalence showed that replacing a key with a fresh key preserved the public behavior.` → Equivalence cho thấy thay key mới vẫn giữ behavior.
**Liên kết tiếng Hàn:** `프로세스 동치`.

## 8. observational equivalence /ˌɒbzərˈveɪʃənəl ɪˈkwɪvələns/
**Part of speech:** noun
**Core meaning (English):** equality of systems judged only by what an external observer can distinguish.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hai hệ thống bằng nhau theo những gì observer bên ngoài phân biệt được.
**Grammar & collocations:** `observational-equivalence argument` — argument; `hide an internal state` — che.
**Examples:** `Observational equivalence concealed whether a secret branch or a public branch had run.` → Equivalence che nhánh nội bộ.
**Liên kết tiếng Hàn:** `관찰적 동치`.

## 9. applied pi calculus /əˈplaɪd paɪ ˈkælkjələs/
**Part of speech:** noun
**Core meaning (English):** a process calculus extended with functions and equations for modeling applied cryptographic operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** calculus process mở rộng bằng function và equation cho phép mật mã.
**Grammar & collocations:** `applied-pi-calculus model` — model; `encode a protocol role` — mã hóa.
**Examples:** `The applied pi calculus represented channels, replication, and cryptographic destructors explicitly.` → Applied pi biểu diễn channel và destructor.
**Liên kết tiếng Hàn:** `응용 파이 계산법`.

## 10. term rewriting /tɜːrm ˈraɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** repeatedly replacing a formal expression with an equivalent expression according to directed rules.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay biểu thức bằng biểu thức tương đương theo rule có hướng.
**Grammar & collocations:** `term-rewriting system` — system; `normalize an expression` — chuẩn hóa.
**Examples:** `Term rewriting simplified nested encryption terms before the verifier searched for attacks.` → Rewriting rút gọn term trước khi tìm attack.
**Liên kết tiếng Hàn:** `항 재작성`.

## 11. equational theory /ɪˈkweɪʒənəl ˈθɪəri/
**Part of speech:** noun
**Core meaning (English):** a collection of equations that defines when symbolic cryptographic expressions should be considered equivalent.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập equation định nghĩa các expression mật mã tương đương.
**Grammar & collocations:** `equational-theory solver` — solver; `declare a cancellation law` — khai báo.
**Examples:** `The equational theory captured how decryption cancels encryption with the matching key.` → Theory mô tả giải mã triệt tiêu mã hóa.
**Liên kết tiếng Hàn:** `등식 이론`.

## 12. mechanized proof /ˈmekənaɪzd pruːf/
**Part of speech:** noun
**Core meaning (English):** a proof checked by software that verifies each formal inference step.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** proof được phần mềm kiểm tra từng bước suy luận.
**Grammar & collocations:** `mechanized-proof artifact` — artifact; `check a formal lemma` — kiểm tra.
**Examples:** `The mechanized proof made the security argument reproducible across reviewers.` → Proof cơ giới hóa giúp tái lập lập luận.
**Liên kết tiếng Hàn:** `기계화된 증명`.

## 13. dependent refinement /dɪˈpendənt rɪˈfaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** a type refinement whose allowed values depend on a logical proposition or another value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** refinement type phụ thuộc proposition hoặc value khác.
**Grammar & collocations:** `dependent-refinement type` — type; `encode a length invariant` — mã hóa.
**Examples:** `Dependent refinement guaranteed that a parsed ciphertext had the declared length.` → Refinement đảm bảo ciphertext đúng độ dài.
**Liên kết tiếng Hàn:** `종속 정제`.

## 14. model checker /ˈmɒdəl ˈtʃekər/
**Part of speech:** noun
**Core meaning (English):** a tool that exhaustively explores a finite transition system against a temporal specification.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công cụ duyệt hết transition system hữu hạn theo đặc tả thời gian.
**Grammar & collocations:** `model-checker backend` — backend; `explore a transition graph` — duyệt.
**Examples:** `The model checker found a replay trace that manual inspection had missed.` → Checker tìm replay trace bị bỏ sót.
**Liên kết tiếng Hàn:** `모델 검사기`.

## 15. bounded-state exploration /ˈbaʊndɪd steɪt ˌekspləˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** systematic analysis limited to executions with a specified number of states, sessions, or messages.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân tích có giới hạn số state, session hoặc message.
**Grammar & collocations:** `bounded-state-exploration result` — result; `cap the session count` — giới hạn.
**Examples:** `Bounded-state exploration exposed an interleaving bug after three concurrent sessions.` → Exploration lộ bug sau ba session.
**Liên kết tiếng Hàn:** `경계 상태 탐색`.

## 16. state-space explosion /ˈsteɪt speɪs ɪkˈsploʊʒən/
**Part of speech:** noun
**Core meaning (English):** rapid growth in the number of reachable system states as components or sessions are added.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số state tăng bùng nổ khi thêm component hoặc session.
**Grammar & collocations:** `state-space-explosion mitigation` — mitigation; `prune equivalent states` — cắt.
**Examples:** `State-space explosion forced the team to abstract network scheduling.` → Bùng nổ state buộc trừu tượng hóa scheduling.
**Liên kết tiếng Hàn:** `상태 공간 폭발`.

## 17. counterexample witness /ˈkaʊntərɪɡˌzæmpəl ˈwɪtnəs/
**Part of speech:** noun
**Core meaning (English):** a concrete execution fragment demonstrating that a claimed property fails.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đoạn execution cụ thể chứng minh property thất bại.
**Grammar & collocations:** `counterexample-witness trace` — trace; `replay a violating path` — phát lại.
**Examples:** `The counterexample witness showed exactly when the attacker learned the session token.` → Witness chỉ rõ lúc attacker biết token.
**Liên kết tiếng Hàn:** `반례 증인`.

## 18. verification obligation /ˌverɪfɪˈkeɪʃən ˌɒblɪˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** a formal proposition that must be discharged before a program or protocol transformation is accepted.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mệnh đề formal phải chứng minh trước khi chấp nhận biến đổi.
**Grammar & collocations:** `verification-obligation queue` — queue; `discharge an obligation` — hoàn tất.
**Examples:** `Each parser branch generated a verification obligation about bounds and error handling.` → Mỗi nhánh parser tạo obligation về bounds.
**Liên kết tiếng Hàn:** `검증 의무`.

## 19. verification condition /ˌverɪfɪˈkeɪʃən kənˈdɪʃən/
**Part of speech:** noun
**Core meaning (English):** a logical formula whose validity proves that a program meets a stated precondition and postcondition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** công thức logic chứng minh program đạt precondition và postcondition.
**Grammar & collocations:** `verification-condition generator` — generator; `prove a postcondition` — chứng minh.
**Examples:** `The verification condition required the decryption routine to preserve message integrity.` → Condition yêu cầu routine giữ toàn vẹn message.
**Liên kết tiếng Hàn:** `검증 조건`.

## 20. symbolic execution trace /sɪmˈbɒlɪk ˌeksɪˈkjuːʃən treɪs/
**Part of speech:** noun
**Core meaning (English):** a path record whose inputs are symbolic constraints rather than concrete values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản ghi path dùng constraint symbolic thay vì value cụ thể.
**Grammar & collocations:** `symbolic-execution-trace constraint` — constraint; `solve a path formula` — giải.
**Examples:** `The symbolic execution trace preserved attacker-controlled inputs for later satisfiability checking.` → Trace giữ input do attacker kiểm soát.
**Liên kết tiếng Hàn:** `기호 실행 추적`.

## Review in context

An analyst starts with a **symbolic model** and proves **computational soundness** for its assumptions. A **protocol invariant**, **freshness predicate**, **correspondence assertion**, and **trace property** describe the intended behavior. **Process equivalence** and **observational equivalence** compare alternative designs in the **applied pi calculus**; **term rewriting** and an **equational theory** simplify their expressions. A **mechanized proof** may use **dependent refinement**, a **model checker**, and **bounded-state exploration**, although **state-space explosion** remains a constraint. A **counterexample witness** exposes failure, while each **verification obligation** and **verification condition** must be discharged. Finally, a **symbolic execution trace** records the constraints behind a suspicious path.

**Bản dịch tiếng Việt:** Nhà phân tích bắt đầu bằng **mô hình symbolic** và chứng minh **soundness tính toán** cho các giả định. **Bất biến protocol**, **predicate tính mới**, **khẳng định tương ứng** và **thuộc tính trace** mô tả hành vi mong muốn. **Tương đương process** và **tương đương quan sát** so sánh các thiết kế trong **applied pi calculus**; **term rewriting** và **lý thuyết phương trình** đơn giản hóa biểu thức. **Proof cơ giới hóa** có thể dùng **refinement phụ thuộc**, **model checker** và **duyệt state có giới hạn**, dù **bùng nổ không gian trạng thái** vẫn là ràng buộc. **Witness phản ví dụ** phơi bày lỗi, còn từng **nghĩa vụ kiểm chứng** và **điều kiện kiểm chứng** phải được hoàn tất. Cuối cùng, **trace thực thi symbolic** ghi lại constraint phía sau path đáng ngờ.
