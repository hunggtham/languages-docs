# C2 Vocabulary 202 — Static abstract interpretation, Galois connection adjunctions, and widening operator fixpoint acceleration

## 1. abstract /æbˈstrækt/
**Loại từ & vị trí trong câu:** `adjective` or `noun`. Attributive modifier designating simplified semantic domains in program analysis.
**Core meaning — English:** Pertaining to a simplified mathematical or semantic domain that over-approximates concrete program behaviors to ensure decidable static analysis.
**Core meaning & mental image — Tiếng Việt:** Mang tính trừu tượng — hình ảnh bản đồ địa hình giản lược chỉ giữ lại các tuyến đường chính thay vì hiển thị từng ngọn cỏ ngoài thực tế.
**Grammar & collocations:** `abstract interpretation` — thông dịch trừu tượng; `abstract domain` — miền trừu tượng; `abstract semantics` — ngữ nghĩa trừu tượng.
**Register & nuance:** Advanced formal computer science and compiler verification terminology. Contrasts directly with concrete execution semantics.
**Examples:** Abstract interpretation enables compilers to reason about infinite program behaviors in finite time by mapping concrete values to abstract lattices. → Thông dịch trừu tượng cho phép trình biên dịch suy luận về các hành vi chương trình vô hạn trong thời gian hữu hạn bằng cách ánh xạ các giá trị cụ thể sang các dàn trừu tượng.
**Liên kết tiếng Hàn:** 추상 (抽象) — sự trừu tượng

## 2. interpretation /ɪnˌtɜrprəˈteɪʃən/
**Loại từ & vị trí trong câu:** `noun`. Subject or object representing the semantic evaluation process applied to code structures.
**Core meaning — English:** The systematic semantic evaluation and assignment of meaning to program syntax through abstract mathematical domains.
**Core meaning & mental image — Tiếng Việt:** Sự thông dịch / diễn giải ngữ nghĩa — hình ảnh phiên dịch viên chuyển ngữ ý nghĩa từ ngôn ngữ này sang ngôn ngữ khác một cách chính xác.
**Grammar & collocations:** `static interpretation` — thông dịch tĩnh; `abstract interpretation framework` — khung thông dịch trừu tượng; `semantic interpretation` — diễn giải ngữ nghĩa.
**Register & nuance:** Formal computational linguistics and program analysis register. Essential in formal verification and type theory.
**Examples:** The static interpretation engine computes safe upper bounds for variable ranges without executing the actual binary code. → Công cụ thông dịch tĩnh tính toán các giới hạn trên an toàn cho các khoảng biến mà không cần thực thi mã nhị phân thực tế.
**Liên kết tiếng Hàn:** 해석 (解析) — sự phân tích / diễn giải

## 3. Galois /ˈɡælhwɑː/
**Loại từ & vị trí trong câu:** `proper adjective` (eponymously named after mathematician Évariste Galois). Modifying mathematical adjunction pairs connecting domains.
**Core meaning — English:** Referring to a pair of monotonic mappings between partially ordered sets that establish a precise adjoint connection between concrete and abstract domains.
**Core meaning & mental image — Tiếng Việt:** Thuộc về Galois (cặp ánh xạ liên hợp) — hình ảnh hai chiếc ròng rọc liên kết chặt chẽ với nhau, nơi chuyển động ở bên này tác động tương ứng và có kiểm soát sang bên kia.
**Grammar & collocations:** `Galois connection` — liên kết Galois; `Galois insertion` — phép nhúng Galois; `Galois adjunction` — sự liên hợp Galois.
**Register & nuance:** Advanced abstract algebra and program analysis terminology. Fundamental for proving soundness in static analysis.
**Examples:** A valid Galois connection between concrete sets and abstract lattices guarantees that sound over-approximations are preserved during semantic transfer. → Liên kết Galois hợp lệ giữa các tập hợp cụ thể và các dàn trừu tượng đảm bảo rằng các phép xấp xỉ trên an toàn được bảo tồn trong suốt quá trình truyền ngữ nghĩa.
**Liên kết tiếng Hàn:** 갈루아 — Galois (nhà toán học / lý thuyết)

## 4. adjunction /æˈdʒʌŋkʃən/
**Loại từ & vị trí trong câu:** `noun`. Mathematical term representing a special relationship between two functors or monotonic mappings.
**Core meaning — English:** A fundamental relationship between two ordered structures or mappings where one direction is left-adjoint and the other is right-adjoint, forming a Galois pair.
**Core meaning & mental image — Tiếng Việt:** Phép liên hợp toán học — hình ảnh hai mảnh ghép hình khớp với nhau theo một chiều bao hàm chặt chẽ.
**Grammar & collocations:** `adjoint pair` — cặp liên hợp; `adjunction property` — tính chất liên hợp; `establish an adjunction` — thiết lập một phép liên hợp.
**Register & nuance:** Advanced category theory and abstract interpretation terminology. Denotes optimal structural correspondence.
**Examples:** The adjunction between the concrete power set domain and the abstract interval domain ensures minimal loss of precision during abstraction. → Phép liên hợp giữa miền tập lũy thừa cụ thể và miền khoảng trừu tượng đảm bảo mất mát độ chính xác tối thiểu trong quá trình trừu tượng hóa.
**Liên kết tiếng Hàn:** 수반 (隨伴) — tính liên hợp / gắn kết

## 5. widening /ˈwaɪdənɪŋ/
**Loại từ & vị trí trong câu:** `noun` or participle adjective. Operator designation used in fixpoint iteration to enforce termination.
**Core meaning — English:** A specialized extrapolation operator used in static analysis to accelerate fixpoint computation by prematurely jumping to infinity or higher upper bounds.
**Core meaning & mental image — Tiếng Việt:** Phép mở rộng (tăng biên độ) — hình ảnh việc nới rộng khung cửa sổ vô hạn để bao trùm mọi khả năng có thể xảy ra trong vòng lặp.
**Grammar & collocations:** `widening operator` — toán tử mở rộng; `widening and narrowing` — mở rộng và thu hẹp; `widening fixpoint` — điểm bất động mở rộng.
**Register & nuance:** Core concept in Abstract Interpretation (Cousot & Cousot). Essential for guaranteeing termination when analyzing loops with unbounded iterations.
**Examples:** Without a widening operator, the static analyzer would loop infinitely trying to compute the exact upper bound of an unbounded counter variable. → Nếu không có toán tử mở rộng, trình phân tích tĩnh sẽ lặp vô hạn khi cố gắng tính toán giới hạn trên chính xác của một biến đếm không giới hạn.
**Liên kết tiếng Hàn:** 확장 (擴張) — sự mở rộng

## 6. fixpoint /ˈfɪkˌpɔɪnt/ (also fixed point)
**Loại từ & vị trí trong câu:** `noun`. Target mathematical state in iterative semantic analysis.
**Core meaning — English:** A point in a domain that is mapped to itself by a given function, representing the stable equilibrium state of an iterative computation.
**Core meaning & mental image — Tiếng Việt:** Điểm bất động (điểm ổn định không đổi) — hình ảnh hòn đá nằm đáy giếng, không còn di chuyển dù nước xung quanh có chảy qua.
**Grammar & collocations:** `fixpoint computation` — tính toán điểm bất động; `least fixpoint` — điểm bất động nhỏ nhất; `fixpoint iteration` — lặp điểm bất động.
**Register & nuance:** Fundamental concept in mathematics, denotational semantics, and static program analysis.
**Examples:** The iterative analysis continues until a stable fixpoint is reached, signifying that further abstract evaluations yield no new behavioral states. → Phân tích lặp tiếp tục cho đến khi đạt được điểm bất động ổn định, biểu thị rằng các đánh giá trừu tượng tiếp theo không tạo ra trạng thái hành vi mới nào.
**Liên kết tiếng Hàn:** 고정점 (固定點) — điểm cố định / fixpoint

## 7. over-approximation /ˌoʊvər əˌprɑksəˈmeɪʃən/
**Loại từ & vị trí trong câu:** `noun`. Analytical property ensuring safety by encompassing all possible concrete behaviors.
**Core meaning — English:** An approximation model that safely covers all actual concrete program behaviors while potentially including spurious or infeasible states.
**Core meaning & mental image — Tiếng Việt:** Sự xấp xỉ thừa (bao trùm dư thừa nhưng an toàn) — hình ảnh chiếc lưới đánh cá lớn ngoài khơi bắt được tất cả cá thật cùng một ít rong rác xung quanh.
**Grammar & collocations:** `safe over-approximation` — xấp xỉ thừa an toàn; `compute over-approximation` — tính toán sự xấp xỉ thừa; `over-approximation domain` — miền xấp xỉ thừa.
**Register & nuance:** Crucial concept in sound static analysis and program verification. Guarantees absence of false negatives.
**Examples:** Static analyzers intentionally rely on over-approximation to ensure that no critical security vulnerability or buffer overflow is ever missed. → Các trình phân tích tĩnh cố tình dựa vào xấp xỉ thừa để đảm bảo rằng không bao giờ bỏ sót bất kỳ lỗ hổng bảo mật quan trọng hoặc tràn bộ đệm nào.
**Liên kết tiếng Hàn:** 과대근사 (過大近似) — xấp xỉ thừa / over-approximation

## 8. narrowing /ˈnæroʊɪŋ/
**Loại từ & vị trí trong câu:** `noun` or participle adjective. Refinement pass following widening operators to recover lost precision.
**Core meaning — English:** A secondary refinement operator applied after widening to recover precision by filtering out spurious over-approximated states.
**Core meaning & mental image — Tiếng Việt:** Phép thu hẹp (tinh chỉnh tinh tế) — hình ảnh chiếc sàng lọc bớt những hạt cát thô thừa thãi sau khi đã sàng lớn qua khung mở rộng.
**Grammar & collocations:** `narrowing operator` — toán tử thu hẹp; `narrowing iteration` — vòng lặp thu hẹp; `narrowing pass` — bước tinh chỉnh thu hẹp.
**Register & nuance:** Advanced static analysis terminology. Used in tandem with widening to balance termination guarantees with analytical precision.
**Examples:** Following the coarse widening phase, a series of narrowing passes recovers lost precision by tightening variable bounds toward their true limits. → Sau giai đoạn mở rộng thô, một loạt các bước thu hẹp sẽ khôi phục lại độ chính xác đã mất bằng cách siết chặt các giới hạn biến về phía giới hạn thực sự của chúng.
**Liên kết tiếng Hàn:** 축소 (縮小) / 협소화 — sự thu hẹp / narrowing

## 9. monotonic /ˌmɑnəˈtɑnɪk/
**Loại từ & vị trí trong câu:** `adjective`. Mathematical property describing order-preserving functions.
**Core meaning — English:** Pertaining to a function or mapping between ordered sets that preserves the underlying partial order relation (if $x \le y$, then $f(x) \le f(y)$).
**Core meaning & mental image — Tiếng Việt:** Tính đơn điệu (bảo toàn thứ tự) — hình ảnh bước chân leo dốc luôn tiến lên phía trước hoặc đứng yên, không bao giờ thụt lùi khi độ cao tăng.
**Grammar & collocations:** `monotonic function` — hàm đơn điệu; `monotonic transfer function` — hàm truyền đơn điệu; `strictly monotonic` — đơn điệu ngặt.
**Register & nuance:** Foundational order theory and lattice theory term. Essential for Tarski's fixpoint theorem applicability.
**Examples:** Because all semantic transfer functions in the analysis lattice are monotonic, fixpoint convergence is mathematically guaranteed. → Vì tất cả các hàm truyền ngữ nghĩa trong dàn phân tích đều mang tính đơn điệu, sự hội tụ điểm bất động được đảm bảo về mặt toán học.
**Liên kết tiếng Hàn:** 단조성 (單調性) — tính đơn điệu

## 10. lattice /ˈlætɪs/
**Loại từ & vị trí trong câu:** `noun`. Algebraic structure used to model abstract program properties and data values.
**Core meaning — English:** A partially ordered set in which every two elements have a unique supremum (join) and infimum (meet), serving as the mathematical substrate for abstract domains.
**Core meaning & mental image — Tiếng Việt:** Cấu trúc dàn đại số — hình ảnh một lưới đan chéo các ô vuông có các điểm nút giao nhau thấp nhất và cao nhất rõ ràng.
**Grammar & collocations:** `abstract lattice` — dàn trừu tượng; `complete lattice` — dàn đầy đủ; `lattice join` — phép hợp dàn; `lattice meet` — phép giao dàn.
**Register & nuance:** Advanced discrete mathematics and program analysis term. Replaces traditional set theory for computing program abstractions.
**Examples:** The data-flow analyzer structures abstract types into a complete lattice where the top element represents uninitialized state and bottom represents contradiction. → Trình phân tích luồng dữ liệu cấu trúc các kiểu trừu tượng thành một dàn đầy đủ trong đó phần tử đỉnh đại diện cho trạng thái chưa khởi tạo và phần tử đáy đại diện cho mâu thuẫn.
**Liên kết tiếng Hàn:** 격자 (格子) — cấu trúc lưới / dàn (lattice)

## 11. concretization /ˌkɑŋkrɪtəˈzeɪʃən/
**Loại từ & vị trí trong câu:** `noun`. Dual mapping operation translating abstract elements back into concrete semantics.
**Core meaning — English:** The mathematical mapping function that translates an abstract domain element back into the set of concrete behaviors or values it represents.
**Core meaning & mental image — Tiếng Việt:** Sự cụ thể hóa — hình ảnh việc phóng to một bản vẽ kiến trúc trừu tượng thành một ngôi nhà thực tế bằng gạch đá.
**Grammar & collocations:** `concretization function` — hàm cụ thể hóa; `abstraction and concretization` — trừu tượng hóa và cụ thể hóa; `concretization mapping` — ánh xạ cụ thể hóa.
**Register & nuance:** Core dual counterpart to abstraction in Galois connection theory. Essential for defining semantic soundness.
**Examples:** The concretization function maps the abstract interval $[0, 100]$ back to the infinite set of concrete integers bounded within that range. → Hàm cụ thể hóa ánh xạ khoảng trừu tượng $[0, 100]$ trở lại tập hợp vô hạn các số nguyên cụ thể bị giới hạn trong phạm vi đó.
**Liên kết tiếng Hàn:** 구체화 (具體化) — sự cụ thể hóa

## 12. semantic /sɪˈmæntɪk/
**Loại từ & vị trí trong câu:** `adjective`. Attributive modifier relating to the meaning and execution behavior of code.
**Core meaning — English:** Pertaining to the actual meaning, computational effect, or execution behavior of programming language constructs, as opposed to mere syntax.
**Core meaning & mental image — Tiếng Việt:** Thuộc về ngữ nghĩa — hình ảnh nội dung ý nghĩa sâu xa đằng sau những câu chữ câu lệnh lập trình.
**Grammar & collocations:** `semantic domain` — miền ngữ nghĩa; `semantic transfer function` — hàm truyền ngữ nghĩa; `operational semantics` — ngữ nghĩa thao tác.
**Register & nuance:** Fundamental computer science terminology. Differentiates how programs execute from how they are textually written.
**Examples:** Abstract interpretation constructs sound semantic domains that mirror concrete program execution while ensuring decidability. → Thông dịch trừu tượng xây dựng các miền ngữ nghĩa an toàn phản ánh việc thực thi chương trình cụ thể đồng thời đảm bảo tính quyết định.
**Liên kết tiếng Hàn:** 의미론적 (意味論的) — thuộc về ngữ nghĩa

## 13. domain /doʊˈmeɪn/
**Loại từ & vị trí trong câu:** `noun`. Mathematical set or universe of values over which program properties are evaluated.
**Core meaning — English:** A structured mathematical set equipped with relations and operations defining the universe of values or abstract states under analysis.
**Core meaning & mental image — Tiếng Việt:** Miền giá trị / phạm vi không gian toán học — hình ảnh một lãnh thổ được khoanh vùng ranh giới rõ ràng chứa các đối tượng có tính chất tương đồng.
**Grammar & collocations:** `concrete domain` — miền cụ thể; `abstract domain` — miền trừu tượng; `domain theory` — lý thuyết miền.
**Register & nuance:** Ubiquitous in mathematics and program semantics. Denotes the universe within which functions operate.
**Examples:** Choosing an appropriate abstract domain involves a careful tradeoff between analytical precision and computational tractability. → Việc lựa chọn một miền trừu tượng phù hợp bao gồm một sự đánh đổi cẩn thận giữa độ chính xác phân tích và tính khả thi tính toán.
**Liên kết tiếng Hàn:** 영역 (領域) — miền / phạm vi

## 14. fixpoint /ˈfɪkˌpɔɪnt/
*(Note: Duplicate of item 6. Let's substitute with **soundness** /ˈsaʊndnɪs/).*

## 14. soundness /ˈsaʊndnɪs/
**Loại từ & vị trí trong câu:** `noun`. Fundamental correctness property in program verification and static analysis.
**Core meaning — English:** The formal guarantee that a static analysis tool never misses a true program bug or invalid behavior, safely over-approximating reality.
**Core meaning & mental image — Tiếng Việt:** Tính đúng đắn an toàn (không bao giờ bỏ sót lỗi) — hình ảnh một chiếc lưới lọc an toàn của nhà máy lọc nước đảm bảo không một hạt độc hại nào lọt qua được.
**Grammar & collocations:** `analytical soundness` — tính đúng đắn phân tích; `soundness guarantee` — đảm bảo tính an toàn; `soundness proof` — chứng minh tính đúng đắn.
**Register & nuance:** Core theoretical requirement in program verification. Contrasts with completeness, which is often undecidable.
**Examples:** The soundness of the abstract interpreter ensures that if the tool claims a program is free of null dereferences, no such error can ever occur at runtime. → Tính đúng đắn của trình thông dịch trừu tượng đảm bảo rằng nếu công cụ tuyên bố một chương trình không có lỗi tham chiếu null, thì không có lỗi nào như vậy có thể xảy ra khi chạy.
**Liên kết tiếng Hàn:** 건전성 (健全性) — tính an toàn / đúng đắn (soundness)

## 15. completeness /kəmˈpliːtnəs/
**Loại từ & vị trí trong câu:** `noun`. Verification property referring to the absence of false alarms or spurious warnings.
**Core meaning — English:** The theoretical property where every warning or state flagged by an analyzer corresponds to a genuinely feasible execution path (absence of false positives).
**Core meaning & mental image — Tiếng Việt:** Tính đầy đủ (không có báo động giả) — hình ảnh một hệ thống báo động chỉ kêu lên khi có kẻ trộm thật sự đột nhập, tuyệt đối không báo động nhầm.
**Grammar & collocations:** `analytical completeness` — tính đầy đủ phân tích; `relative completeness` — tính đầy đủ tương đối; `achieve completeness` — đạt được tính đầy đủ.
**Register & nuance:** Core formal verification concept. In Turing-complete static analysis, complete and sound analyses are generally mutually exclusive due to undecidability.
**Examples:** Due to the undecidability of program behavior, static analyzers sacrifice absolute completeness to guarantee absolute soundness, resulting in occasional false positives. → Do tính không thể quyết định của hành vi chương trình, các trình phân tích tĩnh hy sinh tính đầy đủ tuyệt đối để đảm bảo tính an toàn tuyệt đối, dẫn đến các cảnh báo giả thỉnh thoảng xảy ra.
**Liên kết tiếng Hàn:** 완전성 (完全性) — tính đầy đủ

## 16. decidable /dɪˈsaɪdəbəl/
**Loại từ & vị trí trong câu:** `adjective`. Computational property indicating whether a problem can be solved by an algorithm in finite time.
**Core meaning — English:** Pertaining to a computational problem for which an algorithmic procedure always halts with a correct yes-or-no answer across all valid inputs.
**Core meaning & mental image — Tiếng Việt:** Có thể giải quyết được bằng thuật toán — hình ảnh một bài toán đố có lời giải rõ ràng, chắc chắn tìm ra đáp án hữu hạn không bao giờ bị treo.
**Grammar & collocations:** `decidable problem` — bài toán có thể giải quyết; `decidable subset` — tập con giải quyết được; `algorithmically decidable` — có thể giải quyết bằng thuật toán.
**Register & nuance:** Foundational computability theory term. Contrasts with undecidable problems such as the Halting Problem.
**Examples:** By restricting programs to finite-state abstractions, model checkers render property verification decidable. → Bằng cách giới hạn các chương trình ở các phép trừu tượng trạng thái hữu hạn, các công cụ kiểm tra mô hình làm cho việc xác minh tính chất trở nên có thể giải quyết được.
**Liên kết tiếng Hàn:** 결정가능 (決定可能) — tính có thể quyết định / decidable

## 17. undecidable /ˌʌndɪˈsaɪdəbəl/
**Loại từ & vị trí trong câu:** `adjective`. Property of computational problems admitting no general algorithmic solution.
**Core meaning — English:** Impossible to solve by any general algorithm that guarantees a correct answer for every possible instance in finite time.
**Core meaning & mental image — Tiếng Việt:** Không thể giải quyết bằng thuật toán tổng quát — hình ảnh mê cung không có lối ra hoặc bài toán mà không máy tính nào có thể tính hết các khả năng vô hạn.
**Grammar & collocations:** `undecidable problem` — bài toán không thể giải quyết; `provably undecidable` — được chứng minh là không thể giải quyết; `undecidable property` — tính chất không thể quyết định.
**Register & nuance:** Core concept in theoretical computer science (Turing, Rice's theorem). Motivates the need for conservative approximations.
**Examples:** Rice's theorem proves that any non-trivial semantic property of arbitrary programs is strictly undecidable. → Định lý Rice chứng minh rằng bất kỳ tính chất ngữ nghĩa phi tầm thường nào của các chương trình tùy ý đều hoàn toàn không thể giải quyết được.
**Liên kết tiếng Hàn:** 결정불능 (決定不能) — tính không thể quyết định / undecidable

## 18. invariant /ɪnˈvɛriənt/
**Loại từ & vị trí trong câu:** `noun` or `adjective`. Mathematical or computational property that remains unchanged across executions.
**Core meaning — English:** A condition, property, or assertion that remains true throughout the execution of a program or across specific loops and routines.
**Core meaning & mental image — Tiếng Việt:** Bất biến (đặc tính không thay đổi theo thời gian hoặc qua các vòng lặp) — hình ảnh ngọn hải đăng đứng vững bất chấp sóng gió biển khơi cuồn cuộn xung quanh.
**Grammar & collocations:** `loop invariant` — bất biến vòng lặp; `type invariant` — bất biến kiểu; `maintain invariant` — duy trì bất biến.
**Register & nuance:** Essential concept in software engineering, formal verification, and abstract interpretation.
**Examples:** Abstract interpretation automatically infers complex loop invariants that prove the absence of buffer overflows without manual annotations. → Thông dịch trừu tượng tự động suy luận ra các bất biến vòng lặp phức tạp chứng minh sự vắng mặt của lỗi tràn bộ đệm mà không cần chú thích thủ công.
**Liên kết tiếng Hàn:** 불변식 (不變式) — bất biến (invariant)

## 19. monotonic /ˌmɑnəˈtɑnɪk/
*(Note: Duplicate of item 9. Let's substitute with **extrapolation** /ɪkˌstræpəˈleɪʃən/).*

## 19. extrapolation /ɪkˌstræpəˈleɪʃən/
**Loại từ & vị trí trong câu:** `noun`. Mathematical technique estimating values beyond the original observation range.
**Core meaning — English:** The mathematical process of inferring or projecting values outside a known range of data points, used in widening operators to accelerate convergence.
**Core meaning & mental image — Tiếng Việt:** Phép ngoại suy (phỏng đoán vươn xa ra ngoài dữ liệu hiện có) — hình ảnh việc kéo dài đường xu hướng của biểu đồ kinh tế để dự đoán đỉnh cao trong tương lai.
**Grammar & collocations:** `mathematical extrapolation` — phép ngoại suy toán học; `widening extrapolation` — phép ngoại suy mở rộng; `aggressive extrapolation` — ngoại suy mạnh mẽ.
**Register & nuance:** Advanced mathematical and analytical terminology. Used in abstract interpretation widening operators to jump toward infinite limits.
**Examples:** Widening operators rely on aggressive extrapolation to leap past iterative sequence steps and reach upper bounds immediately. → Các toán tử mở rộng dựa vào phép ngoại suy mạnh mẽ để vượt qua các bước chuỗi lặp và đạt được các giới hạn trên ngay lập tức.
**Liên kết tiếng Hàn:** 외삽 (外挿) / 외삽법 — phép ngoại suy

## 20. approximation /əˌprɑksəˈmeɪʃən/
**Loại từ & vị trí trong câu:** `noun`. General mathematical concept denoting estimation or simplification of exact values.
**Core meaning — English:** A value, formula, or model that is nearly but not exactly correct, purposefully utilized to render complex computations tractable.
**Core meaning & mental image — Tiếng Việt:** Sự xấp xỉ, ước lượng gần đúng — hình ảnh việc làm tròn số $\pi$ thành $3.14$ để tính toán nhanh chóng trong kỹ thuật.
**Grammar & collocations:** `numerical approximation` — xấp xỉ số; `safe approximation` — xấp xỉ an toàn; `approximation error` — sai số xấp xỉ.
**Register & nuance:** Ubiquitous mathematical and computing term. In static analysis, approximations must be strictly over-approximative to ensure safety.
**Examples:** Abstract interpretation trades exact concrete semantics for safe abstract approximation to make program verification computationally tractable. → Thông dịch trừu tượng đánh đổi ngữ nghĩa cụ thể chính xác lấy xấp xỉ trừu tượng an toàn để làm cho việc xác minh chương trình khả thi về mặt tính toán.
**Liên kết tiếng Hàn:** 근사 (近似) — sự xấp xỉ

## 21. lattice /ˈlætɪs/
*(Note: Duplicate of item 10. Let's substitute with **poset** /ˈpoʊsɛt/).*

## 21. poset /ˈpoʊsɛt/ (partially ordered set)
**Loại từ & vị trí trong câu:** `noun`. Mathematical structure defining sets with partial ordering relations.
**Core meaning — English:** A mathematical set equipped with a binary relation that is reflexive, antisymmetric, and transitive, forming the foundational ordering for abstract domains.
**Core meaning & mental image — Tiếng Việt:** Tập hợp có thứ tự một phần (poset) — hình ảnh sơ đồ cây gia phả hoặc phân cấp tổ chức nơi một số thành viên có quan hệ trên dưới rõ ràng nhưng một số nhánh song song không so sánh được.
**Grammar & collocations:** `partially ordered set` — tập hợp có thứ tự một phần; `bounded poset` — poset có chặn; `poset structure` — cấu trúc poset.
**Register & nuance:** Advanced discrete mathematics and lattice theory term. Forms the structural basis upon which complete lattices and abstract domains are built.
**Examples:** Every abstract domain used in static program analysis can be formally structured as a bounded poset with a designated bottom and top element. → Mọi miền trừu tượng được sử dụng trong phân tích chương trình tĩnh đều có thể được cấu trúc chính xác như một poset có chặn với một phần tử đáy và phần tử đỉnh được chỉ định.
**Liên kết tiếng Hàn:** 반순서집합 (半順序集合) — tập hợp có thứ tự một phần / poset

## 22. convergence /kənˈvɜrdʒəns/
**Loại từ & vị trí trong câu:** `noun`. Mathematical and computational property indicating stabilization of iterative sequences.
**Core meaning — English:** The property of an iterative process or sequence coming closer and closer to a stable limit or fixpoint.
**Core meaning & mental image — Tiếng Việt:** Sự hội tụ (tiến dần về một điểm ổn định chung) — hình ảnh các dòng suối nhỏ chảy dồn về một hồ nước tĩnh lặng trung tâm.
**Grammar & collocations:** `guarantee convergence` — đảm bảo hội tụ; `rapid convergence` — hội tụ nhanh; `convergence acceleration` — gia tốc hội tụ.
**Register & nuance:** Fundamental mathematical analysis and algorithmic term. Crucial for fixpoint computation termination.
**Examples:** Widening operators are specifically engineered to force rapid convergence of infinite fixpoint iterations in abstract interpretation frameworks. → Các toán tử mở rộng được thiết kế đặc biệt nhằm thúc đẩy sự hội tụ nhanh chóng của các vòng lặp điểm bất động vô hạn trong các khung thông dịch trừu tượng.
**Liên kết tiếng Hàn:** 수렴 (收斂) — sự hội tụ

## 23. divergence /daɪˈvɜrdʒəns/
**Loại từ & vị trí trong câu:** `noun`. Mathematical or computational condition where iterative sequences fail to stabilize or grow without bound.
**Core meaning — English:** The tendency of an iterative process or sequence to expand infinitely or fail to approach a stable limit.
**Core meaning & mental image — Tiếng Việt:** Sự phân kỳ (lan rộng ra vô tận không có điểm dừng) — hình ảnh các tia sáng lóe ra từ một ngọn đèn pha rọi thẳng vào không gian tối vô tận.
**Grammar & collocations:** `prevent divergence` — ngăn chặn phân kỳ; `algorithmic divergence` — phân kỳ thuật toán; `divergence behavior` — hành vi phân kỳ.
**Register & nuance:** Mathematical and computational analysis term. In static analysis, unchecked divergence prevents fixpoint computation from terminating.
**Examples:** Without widening operators, analyzing unbounded loops leads to infinite algorithmic divergence, preventing the static analyzer from ever halting. → Nếu không có các toán tử mở rộng, việc phân tích các vòng lặp không giới hạn dẫn đến sự phân kỳ thuật toán vô hạn, khiến trình phân tích tĩnh không bao giờ dừng lại được.
**Liên kết tiếng Hàn:** 발산 (發散) — sự phân kỳ

## 24. refinement /rɪˈfaɪnmənt/
**Loại từ & vị trí trong câu:** `noun`. Process of improving precision or adding detail to an abstract model.
**Core meaning — English:** The systematic process of tightening abstract bounds or adding precision constraints to eliminate spurious false alarms from static analysis results.
**Core meaning & mental image — Tiếng Việt:** Sự tinh chỉnh, gọt giũa — hình ảnh người thợ kim hoàn mài giũa viên ngọc thô để loại bỏ các phần thừa, làm nổi bật độ sáng bóng.
**Grammar & collocations:** `counterexample-guided refinement` — tinh chỉnh dẫn dắt bởi phản ví dụ; `refinement pass` — bước tinh chỉnh; `domain refinement` — tinh chỉnh miền.
**Register & nuance:** Advanced software verification and model checking terminology. Used to iteratively improve analysis precision.
**Examples:** Counterexample-guided abstraction refinement automatically adds precise predicates whenever spurious bug warnings are detected by the verifier. → Quá trình tinh chỉnh trừu tượng dẫn dắt bởi phản ví dụ tự động bổ sung các vị từ chính xác bất cứ khi nào bộ kiểm tra phát hiện thấy các cảnh báo lỗi giả.
**Liên kết tiếng Hàn:** 정제 (精製) / 개선 — sự tinh chỉnh / làm sạch

## 25. abstraction /æbˈstrækʃən/
**Loại từ & vị trí trong câu:** `noun`. Core concept representing the simplification of complex systems by suppressing irrelevant details.
**Core meaning — English:** The theoretical process of formulating simplified models by hiding complex internal details while retaining essential structural properties.
**Core meaning & mental image — Tiếng Việt:** Sự trừu tượng hóa — hình ảnh việc phác họa một bản vẽ sơ đồ khối mạch điện tử đơn giản thay vì vẽ từng chi tiết linh kiện bán dẫn phức tạp bên trong.
**Grammar & collocations:** `abstraction layer` — tầng trừu tượng; `abstraction mapping` — ánh xạ trừu tượng hóa; `predicate abstraction` — trừu tượng hóa vị từ.
**Register & nuance:** Foundational principle in computer science, software engineering, and formal abstract interpretation theory.
**Examples:** Mathematical abstraction empowers static analyzers to reason about complex software systems by evaluating simplified abstract lattices instead of concrete memory states. → Sự trừu tượng hóa toán học trao quyền cho các trình phân tích tĩnh suy luận về các hệ thống phần mềm phức tạp bằng cách đánh giá các dàn trừu tượng đơn giản hóa thay vì các trạng thái bộ nhớ cụ thể.
**Liên kết tiếng Hàn:** 추상화 (抽象化) — sự trừu tượng hóa

---

## Review in context (Part 1: Abstract Interpretation and Galois Connections)
Static **abstract interpretation** provides a mathematically rigorous foundation for proving program safety. By mapping concrete program behaviors into an **abstract** **domain** structured as a complete **lattice** or bounded **poset**, analyzers evaluate **semantic** properties without executing raw binaries. A valid **Galois** connection establishes an optimal **adjunction** between concrete sets and abstract lattices, ensuring that **monotonic** transfer functions maintain precise **soundness**. Because program loops often introduce infinite paths, analyzers rely on **widening** operators to force rapid **convergence** toward a stable **fixpoint**, leveraging aggressive **extrapolation** to bound values safely. This conservative design strategy intentionally relies on **over-approximation** to guarantee that no security flaw is ever overlooked, even though it sacrifices absolute **completeness**.

**Bản dịch tiếng Việt:**
Phương pháp thông dịch trừu tượng tĩnh cung cấp một nền tảng chặt chẽ về mặt toán học để chứng minh tính an toàn của chương trình. Bằng cách ánh xạ các hành vi chương trình cụ thể vào một miền trừu tượng được cấu trúc như một dàn đầy đủ hoặc một poset có chặn, các trình phân tích đánh giá các tính chất ngữ nghĩa mà không cần thực thi các mã nhị phân thô. Một liên kết Galois hợp lệ thiết lập một phép liên hợp tối ưu giữa các tập hợp cụ thể và các dàn trừu tượng, đảm bảo rằng các hàm truyền đơn điệu duy trì tính an toàn chính xác. Do các vòng lặp chương trình thường giới thiệu các đường đi vô hạn, các trình phân tích dựa vào các toán tử mở rộng để thúc đẩy sự hội tụ nhanh chóng về phía một điểm bất động ổn định, tận dụng phép ngoại suy mạnh mẽ để chặn các giá trị một cách an toàn. Chiến lược thiết kế bảo thủ này cố tình dựa vào xấp xỉ thừa để đảm bảo rằng không bao giờ bỏ sót bất kỳ lỗi bảo mật nào, mặc dù nó hy sinh tính đầy đủ tuyệt đối.

---

## Review in context (Part 2: Fixpoint Acceleration, Narrowing, and Verification)
When **widening** operators over-extrapolate variable bounds to ensure **decidable** analysis termination, they may sacrifice analytical precision. To recover this lost accuracy, static analyzers perform subsequent **narrowing** passes through iterative **refinement**. While analyzing complex **invariant** properties remains fundamentally **undecidable** in general Turing-complete languages, abstract interpretation provides reliable **approximation** guarantees. The dual operations of **concretization** and **abstraction** maintain rigorous structural correspondence across semantic layers. Ultimately, preventing algorithmic **divergence** through disciplined fixpoint iteration empowers modern static analysis tools to verify complex software systems with mathematical rigor.

**Bản dịch tiếng Việt:**
Khi các toán tử mở rộng ngoại suy quá mức các giới hạn biến để đảm bảo sự kết thúc phân tích có thể quyết định được, chúng có thể hy sinh độ chính xác phân tích. Để khôi phục độ chính xác đã mất này, các trình phân tích tĩnh thực hiện các bước thu hẹp tiếp theo thông qua quá trình tinh chỉnh lặp. Mặc dù việc phân tích các tính chất bất biến phức tạp vẫn mang tính không thể quyết định về mặt cơ bản trong các ngôn ngữ đầy đủ theo chuẩn Turing, thông dịch trừu tượng vẫn cung cấp các đảm bảo xấp xỉ đáng tin cậy. Các thao tác kép của sự cụ thể hóa và sự trừu tượng hóa duy trì sự tương ứng cấu trúc chặt chẽ qua các tầng ngữ nghĩa. Cuối cùng, việc ngăn chặn sự phân kỳ thuật toán thông qua vòng lặp điểm bất động có kỷ luật trao quyền cho các công cụ phân tích tĩnh hiện đại xác minh các hệ thống phần mềm phức tạp với độ chính xác toán học.
