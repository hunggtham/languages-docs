# C2 Vocabulary 89 — Formal logic and proof theory

This lesson follows a formal argument from axioms and definitions to proof, computation, and the limits of what a system can establish. It connects mathematical rigor with reasoning about models and algorithms.

Flow: **axiom → theorem → lemma → satisfiability → completeness → consistency → decidable → undecidable → homomorphism → bijection → induction → cardinality → set-theoretic → model theory → reductio ad absurdum → proof by contradiction → quantifier elimination → compactness theorem → soundness → proof assistant**.

## 1. axiom /ˈæksiəm/
**Part of speech:** noun
**Core meaning (English):** a foundational statement accepted as a starting point for a formal system rather than proved within that system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tiên đề; hình ảnh viên đá nền mà mọi suy luận phía trên dựa vào.
**Grammar & collocations:** `axiomatic system` — hệ tiên đề; `choose an axiom` — chọn tiên đề.
**Examples:** `The geometry changes when the parallel axiom is replaced by a different one.` → Hình học thay đổi khi tiên đề song song được thay bằng tiên đề khác.
**Liên kết tiếng Hàn:** `공리` (gongni) — tiên đề.

## 2. theorem /ˈθiərəm/
**Part of speech:** noun
**Core meaning (English):** a statement shown to be true by a valid proof from axioms and previously established results.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** định lý; hình ảnh kết luận đã được chứng minh chắc chắn trong hệ thống.
**Grammar & collocations:** `fundamental theorem` — định lý cơ bản; `prove a theorem` — chứng minh định lý.
**Examples:** `The theorem guarantees that every finite tree has at least one leaf.` → Định lý bảo đảm mọi cây hữu hạn có ít nhất một lá.
**Liên kết tiếng Hàn:** `정리` (jeongni) — định lý.

## 3. lemma /ˈlɛməh/
**Part of speech:** noun
**Core meaning (English):** an auxiliary result proved and used as a step toward a more important theorem.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bổ đề; hình ảnh bậc thang nhỏ giúp đi tới định lý lớn.
**Grammar & collocations:** `technical lemma` — bổ đề kỹ thuật; `establish a lemma` — chứng minh bổ đề.
**Examples:** `The proof relies on a compactness lemma about finite subcollections.` → Chứng minh dựa vào một bổ đề compact về các tập con hữu hạn.
**Liên kết tiếng Hàn:** `보조 정리` (bojo jeongni) — bổ đề.

## 4. satisfiability /ˌsætɪsfaɪəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the property of a set of logical statements having at least one interpretation in which they are all true.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính thỏa được; hình ảnh tìm được một cách gán giá trị khiến mọi điều kiện cùng đúng.
**Grammar & collocations:** `Boolean satisfiability` — tính thỏa được Boolean; `satisfiability problem` — bài toán thỏa được.
**Examples:** `The solver tested the formula's satisfiability before searching for an optimal assignment.` → Bộ giải kiểm tra tính thỏa được của công thức trước khi tìm phép gán tối ưu.
**Liên kết tiếng Hàn:** `만족 가능성` (manjok ganeungseong) — tính thỏa được.

## 5. completeness /kəmˈpliːtnəs/
**Part of speech:** noun
**Core meaning (English):** the property of a formal system in which every statement that is true in its intended models can in principle be derived in the system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính đầy đủ; hình ảnh hệ thống có thể chứng minh mọi mệnh đề đúng trong phạm vi của nó.
**Grammar & collocations:** `semantic completeness` — đầy đủ ngữ nghĩa; `completeness theorem` — định lý đầy đủ.
**Examples:** `Completeness links semantic truth with what the calculus can formally derive.` → Tính đầy đủ nối chân lý ngữ nghĩa với điều phép tính có thể suy ra hình thức.
**Liên kết tiếng Hàn:** `완전성` (wanjeonseong) — tính đầy đủ.

## 6. consistency /kənˈsɪstənsi/
**Part of speech:** noun
**Core meaning (English):** the property of a formal system that does not allow both a statement and its negation to be proved.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính nhất quán; hình ảnh hệ thống không tự chứng minh hai điều mâu thuẫn.
**Grammar & collocations:** `logical consistency` — nhất quán logic; `consistency proof` — chứng minh tính nhất quán.
**Examples:** `A consistency check found that the new rule conflicted with an earlier axiom.` → Kiểm tra nhất quán phát hiện quy tắc mới xung đột với tiên đề trước.
**Liên kết tiếng Hàn:** `무모순성` (mumoseongseong) — không mâu thuẫn.

## 7. decidable /dɪˈsaɪdəbəl/
**Part of speech:** adjective
**Core meaning (English):** describing a problem for which an algorithm can always determine the correct answer in finite time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quyết định được; hình ảnh có thủ tục chắc chắn dừng lại và trả lời đúng.
**Grammar & collocations:** `decidable theory` — lý thuyết quyết định được; `decidable fragment` — mảnh quyết định được.
**Examples:** `The restricted language is decidable even though the full system is not.` → Ngôn ngữ bị giới hạn quyết định được dù hệ thống đầy đủ thì không.
**Liên kết tiếng Hàn:** `결정 가능` (gyeoljeong ganeung) — quyết định được.

## 8. undecidable /ˌʌndɪˈsaɪdəbəl/
**Part of speech:** adjective
**Core meaning (English):** describing a problem for which no algorithm can correctly decide every possible instance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không quyết định được; hình ảnh không có chương trình chung nào luôn trả lời đúng và dừng.
**Grammar & collocations:** `undecidable problem` — bài toán không quyết định được; `prove undecidability` — chứng minh tính không quyết định được.
**Examples:** `The halting problem is undecidable, so no universal termination checker can exist.` → Bài toán dừng không quyết định được nên không thể có bộ kiểm tra kết thúc chung.
**Liên kết tiếng Hàn:** `결정 불가능` (gyeoljeong bulganeung) — không quyết định được.

## 9. homomorphism /ˌhoʊmoʊˈmɔrfɪzəm/
**Part of speech:** noun
**Core meaning (English):** a structure-preserving map between algebraic or logical systems that may collapse distinct elements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đồng cấu; hình ảnh ánh xạ giữ phép toán nhưng có thể gộp các phần tử khác nhau.
**Grammar & collocations:** `group homomorphism` — đồng cấu nhóm; `homomorphism map` — ánh xạ đồng cấu.
**Examples:** `The homomorphism preserved addition while mapping several inputs to one output.` → Đồng cấu giữ phép cộng trong khi ánh xạ nhiều đầu vào vào một đầu ra.
**Liên kết tiếng Hàn:** `준동형 사상` (jundonghyeong sasang) — ánh xạ đồng cấu.

## 10. bijection /baɪˈdʒɛkʃən/
**Part of speech:** noun
**Core meaning (English):** a one-to-one and onto mapping that pairs every element of one set with exactly one element of another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** song ánh; hình ảnh hai tập hợp được ghép đôi hoàn toàn không thừa không thiếu.
**Grammar & collocations:** `bijection between sets` — song ánh giữa các tập; `construct a bijection` — xây dựng song ánh.
**Examples:** `A bijection proves that the two finite sets have the same cardinality.` → Song ánh chứng minh hai tập hữu hạn có cùng lực lượng.
**Liên kết tiếng Hàn:** `전단사` (jeondansa) — song ánh.

## 11. induction /ɪnˈdʌkʃən/
**Part of speech:** noun
**Core meaning (English):** a proof method that establishes a base case and then shows that truth for one case implies truth for the next.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy nạp; hình ảnh đẩy quân domino từ bước đầu để tất cả bước sau đổ theo.
**Grammar & collocations:** `mathematical induction` — quy nạp toán học; `inductive step` — bước quy nạp.
**Examples:** `Induction proved the formula for every positive integer, not just the tested examples.` → Quy nạp chứng minh công thức cho mọi số nguyên dương, không chỉ ví dụ đã thử.
**Liên kết tiếng Hàn:** `수학적 귀납법` (suhakjeok guinbeop) — quy nạp toán học.

## 12. cardinality /ˌkɑrdəˈnæləti/
**Part of speech:** noun
**Core meaning (English):** the size of a set, measured by the number of elements it contains or by an equivalent notion for infinite sets.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lực lượng tập hợp; hình ảnh đếm “bao nhiêu phần tử” kể cả khi tập là vô hạn.
**Grammar & collocations:** `finite cardinality` — lực lượng hữu hạn; `cardinality comparison` — so sánh lực lượng.
**Examples:** `The bijection established equal cardinality without listing every element.` → Song ánh xác lập lực lượng bằng nhau mà không cần liệt kê mọi phần tử.
**Liên kết tiếng Hàn:** `기수` (gisu) — lực lượng tập hợp.

## 13. set-theoretic /ˌsɛtθiəˈrɛtɪk/
**Part of speech:** adjective
**Core meaning (English):** relating to the formal study of sets and the structures built from them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuộc lý thuyết tập hợp; hình ảnh mọi đối tượng toán học được xây từ các tập và quan hệ giữa chúng.
**Grammar & collocations:** `set-theoretic foundation` — nền tảng lý thuyết tập hợp; `set-theoretic construction` — cấu tạo theo lý thuyết tập hợp.
**Examples:** `The set-theoretic definition treats a function as a collection of ordered pairs.` → Định nghĩa theo lý thuyết tập hợp xem hàm là tập các cặp có thứ tự.
**Liên kết tiếng Hàn:** `집합론적` (jiphapronjeok) — thuộc lý thuyết tập hợp.

## 14. model theory /ˈmɑdəl ˌθiəri/
**Part of speech:** noun phrase
**Core meaning (English):** the study of the relationships between formal languages, logical theories, and the mathematical structures that satisfy them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lý thuyết mô hình; hình ảnh kiểm tra một hệ mệnh đề đúng trong những cấu trúc nào.
**Grammar & collocations:** `model-theoretic property` — tính chất lý thuyết mô hình; `model theory of arithmetic` — lý thuyết mô hình số học.
**Examples:** `Model theory asks which structures satisfy the same first-order sentences.` → Lý thuyết mô hình hỏi những cấu trúc nào thỏa cùng các câu bậc nhất.
**Liên kết tiếng Hàn:** `모형 이론` (mohyeong iron) — lý thuyết mô hình.

## 15. reductio ad absurdum /rɪˈdʌktioʊ æd əbˈsɝdəm/
**Part of speech:** noun phrase
**Core meaning (English):** a proof strategy that assumes a claim and derives an impossible or contradictory consequence from it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phản chứng; hình ảnh tạm nhận điều cần bác bỏ rồi đi đến điều vô lý.
**Grammar & collocations:** `reductio ad absurdum proof` — chứng minh phản chứng; `use reductio ad absurdum` — dùng phản chứng.
**Examples:** `The proof uses reductio ad absurdum by showing that the assumed counterexample cannot exist.` → Chứng minh dùng phản chứng bằng cách chỉ ra phản ví dụ giả định không thể tồn tại.
**Liên kết tiếng Hàn:** `귀류법` (gwiryubeop) — phản chứng.

## 16. proof by contradiction /ˈpruːf baɪ kəntrəˈdɪkʃən/
**Part of speech:** noun phrase
**Core meaning (English):** a proof that assumes the negation of a proposition and derives a contradiction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chứng minh bằng mâu thuẫn; hình ảnh giả sử ngược lại rồi cho thấy giả sử đó tự phá vỡ hệ logic.
**Grammar & collocations:** `proof by contradiction` — chứng minh bằng mâu thuẫn; `contradiction argument` — lập luận mâu thuẫn.
**Examples:** `A proof by contradiction shows that no rational number has the required square.` → Chứng minh bằng mâu thuẫn cho thấy không có số hữu tỷ nào có bình phương cần thiết.
**Liên kết tiếng Hàn:** `모순 증명` (mosun jeungmyeong) — chứng minh bằng mâu thuẫn.

## 17. quantifier elimination /ˈkwɑntəˌfaɪər ɪˌlɪməˈneɪʃən/
**Part of speech:** noun phrase
**Core meaning (English):** a procedure for replacing quantified formulas with equivalent formulas that contain no quantifiers.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khử lượng từ; hình ảnh biến câu “tồn tại/mọi” thành điều kiện trực tiếp dễ kiểm tra hơn.
**Grammar & collocations:** `quantifier-elimination procedure` — thủ tục khử lượng từ; `admit quantifier elimination` — cho phép khử lượng từ.
**Examples:** `Quantifier elimination makes the theory decidable over the ordered real numbers.` → Khử lượng từ làm lý thuyết quyết định được trên các số thực có thứ tự.
**Liên kết tiếng Hàn:** `양화사 제거` (yanghwasa jegeo) — khử lượng từ.

## 18. compactness theorem /kəmˈpæktnəs ˈθiərəm/
**Part of speech:** noun phrase
**Core meaning (English):** a theorem stating that if every finite subset of a theory has a model, then the whole theory has a model.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** định lý compact; hình ảnh mọi phần hữu hạn đều làm được thì toàn bộ hệ cũng có mô hình.
**Grammar & collocations:** `compactness theorem` — định lý compact; `apply compactness` — áp dụng tính compact.
**Examples:** `The compactness theorem produced a model with an element larger than every standard integer.` → Định lý compact tạo ra mô hình có phần tử lớn hơn mọi số nguyên chuẩn.
**Liên kết tiếng Hàn:** `콤팩트성 정리` (kompaekseong jeongni) — định lý compact.

## 19. soundness /ˈsaʊndnəs/
**Part of speech:** noun
**Core meaning (English):** the property of a proof system that every statement it derives is true in all intended models.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính đúng đắn; hình ảnh hệ thống không chứng minh ra điều sai nếu luật suy diễn được dùng đúng.
**Grammar & collocations:** `soundness theorem` — định lý đúng đắn; `prove soundness` — chứng minh tính đúng đắn.
**Examples:** `Soundness guarantees that an accepted proof does not establish a false conclusion.` → Tính đúng đắn bảo đảm một chứng minh được chấp nhận không thiết lập kết luận sai.
**Liên kết tiếng Hàn:** `건전성` (geonjeonseong) — tính đúng đắn logic.

## 20. proof assistant /ˈpruːf əˌsɪstənt/
**Part of speech:** noun phrase
**Core meaning (English):** a software system that checks formal proofs and helps users construct them step by step.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trợ lý chứng minh; hình ảnh phần mềm kiểm tra từng bước suy luận thay vì chỉ tin kết quả cuối.
**Grammar & collocations:** `interactive proof assistant` — trợ lý chứng minh tương tác; `formalize in a proof assistant` — hình thức hóa trong trợ lý chứng minh.
**Examples:** `The researcher formalized the combinatorics result in a proof assistant.` → Nhà nghiên cứu hình thức hóa kết quả tổ hợp trong một trợ lý chứng minh.
**Liên kết tiếng Hàn:** `증명 보조기` (jeungmyeong boјogi) — trợ lý chứng minh.

## Review in context

An **axiom** provides a starting point, a **theorem** states a proved result, and a **lemma** supplies an intermediate step. A theory's **satisfiability**, **completeness**, and **consistency** describe what models and proofs can do. A problem may be **decidable** or **undecidable**; a **homomorphism** preserves structure, while a **bijection** pairs sets exactly. **Induction** proves an infinite sequence, and **cardinality** measures set size. **Set-theoretic** foundations support **model theory**. **Reductio ad absurdum** and **proof by contradiction** expose impossible assumptions; **quantifier elimination** simplifies formulas, the **compactness theorem** links finite and whole theories, **soundness** protects conclusions, and a **proof assistant** checks each formal step.

**Bản dịch tiếng Việt:**

Tiên đề cung cấp điểm bắt đầu, định lý nêu kết quả đã chứng minh, còn bổ đề cung cấp bước trung gian. Tính thỏa được, tính đầy đủ và tính nhất quán của lý thuyết mô tả mô hình và chứng minh có thể làm gì. Một bài toán có thể quyết định được hoặc không quyết định được; đồng cấu bảo toàn cấu trúc, còn song ánh ghép đôi các tập hoàn toàn. Quy nạp chứng minh chuỗi vô hạn, và lực lượng đo kích thước tập. Nền tảng lý thuyết tập hợp hỗ trợ lý thuyết mô hình. Phản chứng và chứng minh bằng mâu thuẫn phơi bày giả định bất khả; khử lượng từ làm đơn giản công thức, định lý compact nối các lý thuyết hữu hạn với toàn bộ, tính đúng đắn bảo vệ kết luận, còn trợ lý chứng minh kiểm tra từng bước hình thức.
