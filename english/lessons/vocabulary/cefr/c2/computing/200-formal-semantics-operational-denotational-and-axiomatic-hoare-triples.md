# C2 Vocabulary 200 — Programming language formal semantics, big-step versus small-step reductions, and Hoare-triple axiomatic verification

## 1. semantics /sɪˈmæntɪks/

**Loại từ & vị trí trong câu:** `noun [U]` — Subject or object in programming language theory and compiler design discussions.

**Core meaning — English:** The rigorous mathematical study and precise definition of the meaning of programming language constructs and execution behaviors.

**Core meaning & mental image — Tiếng Việt:** Ngữ nghĩa học (hình thức) — Nghiên cứu toán học nghiêm ngặt và định nghĩa chính xác về ý nghĩa của các cấu trúc ngôn ngữ lập trình và hành vi thực thi. Hình dung cuốn từ điển bách khoa toàn thư định nghĩa chính xác từng từ trong một hệ thống pháp luật phức tạp.

**Grammar & collocations:** `formal semantics` — ngữ nghĩa hình thức; `operational semantics` — ngữ nghĩa vận hành; `denotational semantics` — ngữ nghĩa biểu tha.

**Register & nuance:** Formal academic and research vocabulary in computer science and compiler engineering.

**Examples:** Defining formal semantics for concurrent languages requires rigorous mathematical frameworks to prevent ambiguous execution paths. → Việc xác định ngữ nghĩa hình thức cho các ngôn ngữ đồng thời đòi hỏi các khung toán học nghiêm ngặt để ngăn ngừa các đường dẫn thực thi mơ hồ.

**Liên kết tiếng Hàn:** `의미론` (意味論) — Ngữ nghĩa học

---

## 2. operational /ˌɑːpəˈreɪʃənl/

**Loại từ & vị trí trong câu:** `adj.` — Attribute modifying semantics, reduction, or semantics models.

**Core meaning — English:** Pertaining to execution steps and state transitions within an abstract machine model to describe program evaluation.

**Core meaning & mental image — Tiếng Việt:** Thuộc về vận hành / Định hướng thực thi — Liên quan đến các bước thực thi và chuyển đổi trạng thái trong một mô hình máy trừu tượng để mô tả việc đánh giá chương trình. Hình dung từng bước di chuyển của các quân cờ trên bàn cờ theo luật chơi.

**Grammar & collocations:** `operational semantics` — ngữ nghĩa vận hành; `structural operational semantics` — ngữ nghĩa vận hành cấu trúc; `operational model` — mô hình vận hành.

**Register & nuance:** Technical computer science term distinguishing execution-step models from denotational or axiomatic approaches.

**Examples:** Structural operational semantics defines program execution via small-step transition relations between machine states. → Ngữ nghĩa vận hành cấu trúc định nghĩa việc thực thi chương trình thông qua các quan hệ chuyển đổi bước nhỏ giữa các trạng thái máy.

**Liên kết tiếng Hàn:** `조작적` (操作的) — Vận hành / Thao tác

---

## 3. denotational /ˌdiːnoʊˈteɪʃənl/

**Loại từ & vị trí trong câu:** `adj.` — Attribute modifying semantics, domains, or mapping models.

**Core meaning — English:** Pertaining to an approach where programming language constructs are mapped mathematically to denotations in abstract semantic domains, such as mathematical functions or complete partial orders.

**Core meaning & mental image — Tiếng Việt:** Biểu tha / Ký hiệu học — Thuộc về phương pháp trong đó các cấu trúc ngôn ngữ lập trình được ánh xạ toán học sang các biểu tha trong các miền ngữ nghĩa trừu tượng, chẳng hạn như hàm toán học. Hình dung bản dịch chính xác từng ký hiệu âm nhạc sang nốt nhạc trên khuông nhạc.

**Grammar & collocations:** `denotational semantics` — ngữ nghĩa biểu tha; `denotational domain` — miền biểu tha; `denotational mapping` — ánh xạ biểu tha.

**Register & nuance:** Advanced mathematical programming language theory terminology.

**Examples:** Denotational semantics assigns mathematical domain values to syntactic phrases, enabling compositional reasoning about programs. → Ngữ nghĩa biểu tha gán các giá trị miền toán học cho các cụm từ cú pháp, cho phép suy luận thành phần về các chương trình.

**Liên kết tiếng Hàn:** `표외적` (表外的) hoặc `표시적` — Biểu thị / Biểu tha

---

## 4. axiomatic /ˌæksiəˈmætɪk/

**Loại từ & vị trí trong câu:** `adj.` — Attribute modifying semantics, verification, or systems.

**Core meaning — English:** Based on axioms and logical deduction rules; specifically relating to proving program correctness by specifying preconditions and postconditions.

**Core meaning & mental image — Tiếng Việt:** Tiên đề / Dựa trên hệ thống tiên đề — Dựa trên các tiên đề và quy tắc suy luận logic; đặc biệt liên quan đến việc chứng minh tính đúng đắn của chương trình bằng cách chỉ định điều kiện tiên quyết và điều kiện hậu quyết. Hình dung các định lý hình học Euclid được chứng minh từ các tiên đề cơ bản nhất.

**Grammar & collocations:** `axiomatic semantics` — ngữ nghĩa tiên đề; `axiomatic verification` — xác minh tiên đề; `axiomatic system` — hệ thống tiên đề.

**Register & nuance:** Formal verification and mathematical logic terminology.

**Examples:** Axiomatic semantics provides the theoretical foundation for verifying software safety properties through logical assertions. → Ngữ nghĩa tiên đề cung cấp nền tảng lý thuyết để xác minh các thuộc tính an toàn của phần mềm thông qua các khẳng định logic.

**Liên kết tiếng Hàn:** `공리적` (公理的) — Tính tiên đề

---

## 5. reduction /rɪˈdʌkʃən/

**Loại từ & vị trí trong câu:** `noun [U, C]` — Subject or object in reduction semantics and lambda calculus discussions.

**Core meaning — English:** The step-by-step evaluation or rewriting of an expression or program term into a simpler canonical form according to evaluation rules.

**Core meaning & mental image — Tiếng Việt:** Phép rút gọn / Sự giảm thiểu — Việc đánh giá hoặc viết lại từng bước của một biểu thức hoặc thuật ngữ chương trình thành một dạng chuẩn đơn giản hơn theo các quy tắc đánh giá. Hình dung việc thu gọn một biểu thức đại số phức tạp thành kết quả tối giản.

**Grammar & collocations:** `small-step reduction` — rút gọn bước nhỏ; `big-step reduction` — rút gọn bước lớn; `beta reduction` — phép rút gọn beta.

**Register & nuance:** Fundamental concept in operational semantics and functional programming theory.

**Examples:** Small-step reduction relations formally specify each intermediate state transformation during program execution. → Các quan hệ rút gọn bước nhỏ xác định hình thức từng phép biến đổi trạng thái trung gian trong quá trình thực thi chương trình.

**Liên kết tiếng Hàn:** `축약` (縮約) 또는 `환원` (還元) — Sự rút gọn / Khử

---

## 6. transition /trænˈzɪʃən/

**Loại từ & vị trí trong câu:** `noun [U, C]` — Subject or object in state machine and operational semantics discussions.

**Core meaning — English:** The permitted movement from one program execution state to another governed by evaluation rules or semantic relations.

**Core meaning & mental image — Tiếng Việt:** Sự chuyển đổi (trạng thái) — Sự dịch chuyển được cho phép từ trạng thái thực thi chương trình này sang trạng thái khác do các quy tắc đánh giá hoặc quan hệ ngữ nghĩa chi phối. Hình dung cửa tự động chuyển từ trạng thái đóng sang trạng thái mở khi có người đến gần.

**Grammar & collocations:** `state transition` — chuyển đổi trạng thái; `transition relation` — quan hệ chuyển đổi; `labeled transition system` — hệ thống chuyển đổi được dán nhãn.

**Register & nuance:** Standard terminology in automata theory, operational semantics, and concurrency.

**Examples:** Transition rules in operational semantics dictate how syntactic expressions step forward into updated configurations. → Các quy tắc chuyển đổi trong ngữ nghĩa vận hành chi phối cách các biểu thức cú pháp bước tiến vào các cấu hình được cập nhật.

**Liên kết tiếng Hàn:** `전이` (轉移) — Sự chuyển đổi

---

## 7. derivation /ˌderɪˈveɪʃən/

**Loại từ & vị trí trong câu:** `noun [U, C]` — Subject or object in grammar and proof theory discussions.

**Core meaning — English:** The valid sequence of inference steps or reduction rules that proves how a program evaluates or how a syntactic term is formed.

**Core meaning & mental image — Tiếng Việt:** Phép dẫn xuất / Sự suy diễn — Chuỗi các bước suy luận hoặc quy tắc rút gọn hợp lệ chứng minh cách một chương trình đánh giá hoặc cách một thuật ngữ cú pháp được hình thành. Hình dung sơ đồ cây phân rã câu thành các thành phần ngữ pháp chủ ngữ, vị ngữ.

**Grammar & collocations:** `semantic derivation` — phép dẫn xuất ngữ nghĩa; `derivation tree` — cây dẫn xuất; `valid derivation` — dẫn xuất hợp lệ.

**Register & nuance:** Formal academic terminology in logic, linguistics, and programming language theory.

**Examples:** The typechecker constructs a derivation tree to prove that the expression adheres to all typing invariants. → Bộ kiểm tra kiểu xây dựng một cây dẫn xuất để chứng minh rằng biểu thức tuân thủ tất cả các bất biến về kiểu.

**Liên kết tiếng Hàn:** `유도` (誘導) — Sự dẫn xuất / Suy diễn

---

## 8. triple /ˈtrɪpl/

**Loại từ & vị trí trong câu:** `noun [C]` — Subject or object in Hoare logic and program verification.

**Core meaning — English:** A logical assertion consisting of a precondition, a command or statement, and a postcondition (written {P} C {Q}) used to reason about program correctness.

**Core meaning & mental image — Tiếng Việt:** Bộ ba (Hoare) — Khẳng định logic bao gồm điều kiện tiên quyết, một câu lệnh và điều kiện hậu quyết dùng để suy luận về tính đúng đắn của chương trình. Hình dung một chiếc kẹp ba kẹp chặt trước, giữa và sau hành động để đảm bảo an toàn.

**Grammar & collocations:** `Hoare triple` — bộ ba Hoare; `axiomatic triple` — bộ ba tiên đề; `valid triple` — bộ ba hợp lệ.

**Register & nuance:** Essential terminology in formal verification and program correctness proofs.

**Examples:** A valid Hoare triple ensures that if precondition P holds before executing command C, postcondition Q will hold afterward. → Một bộ ba Hoare hợp lệ đảm bảo rằng nếu điều kiện tiên quyết P đúng trước khi thực thi lệnh C, điều kiện hậu quyết Q sẽ đúng sau đó.

**Liên kết tiếng Hàn:** `삼중주` 또는 `호어 삼중항` — Bộ ba Hoare

---

## 9. precondition /ˈpriːkəndɪʃn/

**Loại từ & vị trí trong câu:** `noun [C]` — Subject or object in logical assertions and software specifications.

**Core meaning — English:** A logical assertion that must be true prior to the execution of a program block or function for the subsequent behavior or postcondition to be guaranteed.

**Core meaning & mental image — Tiếng Việt:** Điều kiện tiên quyết — Khẳng định logic phải đúng trước khi thực hiện một khối chương trình hoặc hàm để hành vi tiếp theo hoặc điều kiện hậu quyết được đảm bảo. Hình dung việc kiểm tra xem bình nhiên liệu có đầy không trước khi khởi động tên lửa.

**Grammar & collocations:** `weakest precondition` — điều kiện tiên quyết yếu nhất; `assert precondition` — khẳng định điều kiện tiên quyết; `precondition violation` — vi phạm điều kiện tiên quyết.

**Register & nuance:** Standard software engineering and formal verification terminology.

**Examples:** The weakest precondition calculus computes the exact minimal assumption required for the program to execute safely without failure. → Phép tính điều kiện tiên quyết yếu nhất tính toán giả định tối thiểu chính xác cần thiết để chương trình thực thi an toàn mà không gặp lỗi.

**Liên kết tiếng Hàn:** `전제 조건` (前提條件) — Điều kiện tiên quyết

---

## 10. postcondition /ˈpoʊstkəndɪʃn/

**Loại từ & vị trí trong câu:** `noun [C]` — Subject or object in contract-based programming and formal verification.

**Core meaning — English:** A logical assertion that is guaranteed to hold true upon the successful completion of a program command or function execution.

**Core meaning & mental image — Tiếng Việt:** Điều kiện hậu quyết — Khẳng định logic được đảm bảo đúng sau khi hoàn thành thành công một lệnh chương trình hoặc việc thực thi hàm. Hình dung kiểm tra xem hóa đơn đã được thanh toán và hàng đã ra khỏi kho sau khi giao dịch hoàn tất.

**Grammar & collocations:** `strongest postcondition` — điều kiện hậu quyết mạnh nhất; `guarantee postcondition` — đảm bảo điều kiện hậu quyết; `postcondition satisfaction` — sự thỏa mãn điều kiện hậu quyết.

**Register & nuance:** Essential concept in design-by-contract and Hoare logic verification.

**Examples:** The strongest postcondition transformer derives all facts guaranteed to be true immediately following the execution of a command. → Bộ biến đổi điều kiện hậu quyết mạnh nhất suy ra tất cả các sự thật được đảm bảo là đúng ngay sau khi thực thi một lệnh.

**Liên kết tiếng Hàn:** `사후 조건` (事後條件) — Điều kiện hậu quyết

---

## 11. calculus /ˈvælkjʊləs/ (calc - /ˈkælkjʊləs/)

**Loại từ & vị trí trong câu:** `noun [U, C]` — Subject or object in formal logic and semantic analysis.

**Core meaning — English:** A formal system of calculation and logical deduction rules designed to manipulate expressions and compute semantic properties.

**Core meaning & mental image — Tiếng Việt:** Phép tính (hình thức / logic) — Hệ thống tính toán chính thức và các quy tắc suy luận logic được thiết kế để thao tác các biểu thức và tính toán các thuộc tính ngữ nghĩa. Hình dung một bộ quy tắc toán học cẩn thận giúp giải quyết các bài toán tích phân phức tạp.

**Grammar & collocations:** `lambda calculus` — phép tính lambda; `process calculus` — phép tính tiến trình; `wp calculus` — phép tính điều kiện tiên quyết yếu nhất.

**Register & nuance:** Advanced mathematical and theoretical computer science vocabulary.

**Examples:** Lambda calculus serves as the foundational computational model underlying functional programming languages and semantics. → Phép tính lambda đóng vai trò là mô hình tính toán nền tảng làm cơ sở cho các ngôn ngữ lập trình hàm và ngữ nghĩa.

**Liên kết tiếng Hàn:** `계산법` (計算法) 또는 `미적분` — Phép tính / Giải tích

---

## 12. soundness /ˈsaʊndnɪs/

**Loại từ & vị trí trong câu:** `noun [U]` — Subject or object in type theory and program verification.

**Core meaning & mental image — Tiếng Việt:** Tính đúng đắn / Tính vững chắc — Thuộc tính của một hệ thống hình thức đảm bảo rằng bất kỳ điều gì được chứng minh hoặc suy ra đều thực sự đúng trong mô hình ngữ nghĩa. Hình dung một chiếc cầu được thiết kế theo các nguyên lý vật lý vững chắc để không bao giờ sập dưới tải trọng.

**Core meaning — English:** The formal property stating that a verification system or type checker only proves properties that hold true in actual execution semantics.

**Grammar & collocations:** `type soundness` — tính vững chắc của kiểu; `semantic soundness` — tính đúng đắn ngữ nghĩa; `soundness theorem` — định lý tính đúng đắn.

**Register & nuance:** Crucial theoretical guarantee in compiler engineering and program analysis.

**Examples:** Proving type soundness ensures that well-typed programs will never encounter runtime type mismatch errors during execution. → Chứng minh tính vững chắc của kiểu đảm bảo rằng các chương trình được gõ kiểu đúng sẽ không bao giờ gặp lỗi không khớp kiểu khi chạy.

**Liên kết tiếng Hàn:** `건전성` (健全性) — Tính vững chắc / Tính lành mạnh

---

## 13. completeness /kəmˈpliːtnɪs/

**Loại từ & vị trí trong câu:** `noun [U]` — Subject or object in logical systems and verification theory.

**Core meaning — English:** The formal property stating that a verification system or logic can prove every true semantic statement or property expressible within its domain.

**Core meaning & mental image — Tiếng Việt:** Tính đầy đủ — Thuộc tính hình thức nêu rõ rằng một hệ thống logic hoặc xác minh có thể chứng minh mọi phát biểu hoặc thuộc tính ngữ nghĩa chân thực có thể biểu diễn trong miền của nó. Hình dung một bộ sưu tập tem chứa toàn bộ các con tem từng được phát hành trong lịch sử một quốc gia.

**Grammar & collocations:** `semantic completeness` — tính đầy đủ ngữ nghĩa; `completeness theorem` — định lý tính đầy đủ; `relative completeness` — tính đầy đủ tương đối.

**Register & nuance:** Companion theoretical property to soundness in mathematical logic.

**Examples:** Gödel's incompleteness theorems proved that sufficiently expressive formal systems cannot be both consistent and complete. → Các định lý bất toàn của Gödel đã chứng minh rằng các hệ thống hình thức đủ biểu cảm không thể vừa nhất quán vừa đầy đủ.

**Liên kết tiếng Hàn:** `완전성` ( 완전성 ) — Tính đầy đủ

---

## 14. domain /doʊˈmeɪn/

**Loại từ & vị trí trong câu:** `noun [C]` — Subject or object in denotational semantics and mathematical modeling.

**Core meaning — English:** In denotational semantics, a structured mathematical space (such as a complete partial order) used to interpret programming language types and values.

**Core meaning & mental image — Tiếng Việt:** Miền (ngữ nghĩa / toán học) — Trong ngữ nghĩa biểu tha, một không gian toán học có cấu trúc (như thứ tự bộ phận đầy đủ) dùng để diễn giải các kiểu và giá trị ngôn ngữ lập trình. Hình dung một khu vực đất đai được quy hoạch rõ ràng cho các mục đích sử dụng khác nhau.

**Grammar & collocations:** `semantic domain` — miền ngữ nghĩa; `domain theory` — lý thuyết miền; `abstract domain` — miền trừu tượng.

**Register & nuance:** Advanced mathematical programming language semantics terminology.

**Examples:** Scott domain theory provides the mathematical structures necessary to model recursive functions and infinite loops in denotational semantics. → Lý thuyết miền Scott cung cấp các cấu trúc toán học cần thiết để mô hình hóa các hàm đệ quy và vòng lặp vô hạn trong ngữ nghĩa biểu tha.

**Liên kết tiếng Hàn:** `영역` (領域) hoặc `도메인` — Miền / Lĩnh vực

---

## 15. fixpoint /ˈfɪksˌpɔɪnt/ (fixed point)

**Loại từ & vị trí trong câu:** `noun [C]` — Subject or object in semantics and iterative computation.

**Core meaning — English:** A value or function that remains unchanged when a specific mathematical operation or semantic function is applied to it (i.e., $f(x) = x$).

**Core meaning & mental image — Tiếng Việt:** Điểm bất động / Điểm cố định — Một giá trị hoặc hàm không thay đổi khi áp dụng một phép toán cụ thể hoặc hàm ngữ nghĩa lên nó. Hình dung một tấm gương phản chiếu chính nó một cách hoàn hảo mà không làm biến đổi hình ảnh.

**Grammar & collocations:** `least fixpoint` — điểm bất động nhỏ nhất; `fixpoint semantics` — ngữ nghĩa điểm bất động; `fixpoint iteration` — lặp điểm bất động.

**Register & nuance:** Essential mathematical concept used in semantics, abstract interpretation, and recursive function analysis.

**Examples:** The meaning of recursive loops in denotational semantics is rigorously defined as the least fixpoint of a continuous semantic functional. → Ý nghĩa của các vòng lặp đệ quy trong ngữ nghĩa biểu tha được định nghĩa nghiêm ngặt là điểm bất động nhỏ nhất của một hàm ngữ nghĩa liên tục.

**Liên kết tiếng Hàn:** `고정점` (固定點) — Điểm cố định / Điểm bất động

---

## 16. compositional /ˌkɑːmpəˈzɪʃənl/

**Loại từ & vị trí trong câu:** `adj.` — Attribute modifying semantics, reasoning, or verification approaches.

**Core meaning — English:** Pertaining to a property where the meaning or correctness of a complex program phrase can be computed directly from the meanings or correctness of its immediate syntactic subparts.

**Core meaning & mental image — Tiếng Việt:** Tính cấu thành / Tính kết hợp — Thuộc tính trong đó ý nghĩa hoặc tính đúng đắn của một cụm từ chương trình phức tạp có thể được tính toán trực tiếp từ ý nghĩa hoặc tính đúng đắn của các phần con cú pháp trực tiếp của nó. Hình dung việc ghép các khối lego nhỏ thành mô hình lớn, tính chất của mô hình lớn được suy ra từ từng khối nhỏ.

**Grammar & collocations:** `compositional semantics` — ngữ nghĩa cấu thành; `compositional reasoning` — suy luận cấu thành; `compositional verification` — xác minh cấu thành.

**Register & nuance:** Highly prized architectural and semantic property enabling modular program analysis.

**Examples:** Denotational semantics is inherently compositional, allowing engineers to reason about large programs by analyzing individual functions in isolation. → Ngữ nghĩa biểu tha vốn dĩ mang tính cấu thành, cho phép các kỹ sư suy luận về các chương trình lớn bằng cách phân tích từng hàm riêng lẻ trong sự cô lập.

**Liên kết tiếng Hàn:** `합성적` (合成的) — Tính cấu thành / Tính kết hợp

---

## 17. assertion /əˈsɜːrʃən/

**Loại từ & vị trí trong câu:** `noun [C]` — Subject or object in axiomatic verification and program logic.

**Core meaning — English:** A mathematical statement or logical predicate placed within program text or specifications that asserts a property guaranteed to hold at that execution point.

**Core meaning & mental image — Tiếng Việt:** Khẳng định / Mệnh đề quả quyết — Một phát biểu toán học hoặc vị từ logic được đặt trong văn bản chương trình khẳng định một thuộc tính được đảm bảo giữ đúng tại điểm thực thi đó. Hình dung biển báo giao thông trên đường khẳng định tốc độ tối đa tại đoạn đường đó.

**Grammar & collocations:** `logical assertion` — khẳng định logic; `assert statement` — câu lệnh khẳng định; `assertion violation` — vi phạm khẳng định.

**Register & nuance:** Standard terminology in program verification, debugging, and formal logic.

**Examples:** Programmers insert logical assertions into critical code paths to catch invariant violations during testing. → Các lập trình viên chèn các khẳng định logic vào các đường dẫn mã quan trọng để bắt lỗi vi phạm bất biến trong quá trình thử nghiệm.

**Liên kết tiếng Hàn:** `단언` (斷言) hoặc `어설션` — Sự khẳng định / Lệnh assert

---

## 18. invariant /ɪnˈvɛriənt/

**Loại từ & vị trí trong câu:** `noun [C]` or `adj.` — Subject or property description in program correctness.

**Core meaning — English:** A logical property or condition that remains continuously true throughout the execution of a loop or a specified region of program code.

**Core meaning & mental image — Tiếng Việt:** Bất biến — Một thuộc tính hoặc điều kiện logic vẫn tiếp tục đúng trong suốt quá trình thực thi của vòng lặp hoặc vùng mã chương trình được chỉ định. Hình dung mực nước trong bể cá tự động luôn giữ nguyên một mức dù nước chảy ra vào liên tục.

**Grammar & collocations:** `loop invariant` — bất biến vòng lặp; `type invariant` — bất biến kiểu; `maintain invariant` — duy trì bất biến.

**Register & nuance:** Fundamental concept in software engineering, correctness proofs, and algorithm design.

**Examples:** Identifying the correct loop invariant is the most crucial step when proving the partial correctness of iterative algorithms. → Xác định bất biến vòng lặp chính xác là bước quan trọng nhất khi chứng minh tính đúng đắn một phần của các thuật toán lặp.

**Liên kết tiếng Hàn:** `불변량` (不變量) — Bất biến

---

## 19. predicate /ˈprɛdɪkət/

**Loại từ & vị trí trong câu:** `noun [C]` — Subject or object in mathematical logic and verification specifications.

**Core meaning — English:** A boolean-valued function or logical statement taking variables and returning true or false, used extensively in pre- and postconditions.

**Core meaning & mental image — Tiếng Việt:** Vị từ / Hàm mệnh đề — Một hàm mang giá trị boolean hoặc phát biểu logic nhận các biến và trả về đúng hoặc sai, được sử dụng rộng rãi trong điều kiện tiên quyết và hậu quyết. Hình dung câu hỏi kiểm tra "Số này có lớn hơn mười không?" trả về có hoặc không.

**Grammar & collocations:** `logical predicate` — vị từ logic; `predicate transformer` — bộ biến đổi vị từ; `predicate calculus` — phép tính vị từ.

**Register & nuance:** Formal logic and verification terminology.

**Examples:** Predicate transformer semantics calculates how assertions change as they propagate backward through program statements. → Ngữ nghĩa biến đổi vị từ tính toán cách các khẳng định thay đổi khi chúng lan truyền ngược qua các câu lệnh chương trình.

**Liên kết tiếng Hàn:** `술어` (述語) — Vị từ

---

## 20. transformer /trænsˈfɔːrmər/

**Loại từ & vị trí trong câu:** `noun [C]` — Subject or object in program semantics and predicate logic.

**Core meaning — English:** An operator that maps one predicate or assertion to another across the execution of a command or program statement.

**Core meaning & mental image — Tiếng Việt:** Bộ biến đổi (vị từ / trạng thái) — Một toán tử ánh xạ một vị từ hoặc khẳng định này sang vị từ khác thông qua việc thực thi một câu lệnh hoặc lệnh chương trình. Hình dung cỗ máy biến đổi hình dạng từ ô tô thành robot trong phim khoa học viễn tưởng.

**Grammar & collocations:** `predicate transformer` — bộ biến đổi vị từ; `weakest precondition transformer` — bộ biến đổi điều kiện tiên quyết yếu nhất; `strongest postcondition transformer` — bộ biến đổi điều kiện hậu quyết mạnh nhất.

**Register & nuance:** Technical vocabulary originating from Edsger Dijkstra's work on weakest preconditions.

**Examples:** The predicate transformer computes the exact weakest precondition required to guarantee the target postcondition. → Bộ biến đổi vị từ tính toán điều kiện tiên quyết yếu nhất chính xác cần thiết để đảm bảo điều kiện hậu quyết mục tiêu.

**Liên kết tiếng Hàn:** `변환기` (变换機) — Bộ biến đổi

---

## 21. syntax /ˈsɪntæks/

**Loại từ & vị trí trong câu:** `noun [U, C]` — Subject or object in programming language design and compilation.

**Core meaning — English:** The set of grammatical rules and structural constraints governing how valid programs and expressions are written in a programming language.

**Core meaning & mental image — Tiếng Việt:** Cú pháp — Tập hợp các quy tắc ngữ pháp và ràng buộc cấu trúc chi phối cách các chương trình và biểu thức hợp lệ được viết trong một ngôn ngữ lập trình. Hình dung ngữ pháp tiếng Anh quy định vị trí của chủ ngữ, động từ trong câu.

**Grammar & collocations:** `abstract syntax` — cú pháp trừu tượng; `concrete syntax` — cú pháp cụ thể; `syntax tree` — cây cú pháp.

**Register & nuance:** Fundamental computer science term contrasted with semantics (meaning).

**Examples:** Parsing transforms concrete character strings into an abstract syntax tree representing the hierarchical structure of the program. → Phân tích cú pháp biến đổi các chuỗi ký tự cụ thể thành một cây cú pháp trừu tượng đại diện cho cấu trúc phân cấp của chương trình.

**Liên kết tiếng Hàn:** `구문` (句文) 또는 `통사론` — Cú pháp

---

## 22. evaluation /ɪˌvæljuˈeɪʃən/

**Loại từ & vị trí trong câu:** `noun [U, C]` — Subject or object in interpreter design and semantics.

**Core meaning — English:** The process of computing the value of an expression or executing a program phrase to yield a resulting value or final state.

**Core meaning & mental image — Tiếng Việt:** Quá trình đánh giá / Tính toán giá trị — Quá trình tính toán giá trị của một biểu thức hoặc thực thi một cụm từ chương trình để mang lại giá trị kết quả hoặc trạng thái cuối cùng. Hình dung việc bấm máy tính bỏ túi để tính ra kết quả của phép tính phức tạp.

**Grammar & collocations:** `expression evaluation` — đánh giá biểu thức; `lazy evaluation` — đánh giá lười; `strict evaluation` — đánh giá nghiêm ngặt.

**Register & nuance:** Standard computer science terminology in runtime environments and semantics.

**Examples:** Big-step operational semantics models the complete evaluation of an expression directly to its final value. → Ngữ nghĩa vận hành bước lớn mô hình hóa quá trình đánh giá hoàn chỉnh của một biểu thức trực tiếp đến giá trị cuối cùng của nó.

**Liên kết tiếng Hàn:** `평가` (評價) — Sự đánh giá

---

## 23. rewriting /ˈriːˌraɪtɪŋ/

**Loại từ & vị trí trong câu:** `noun [U]` — Subject or object in term rewriting systems and operational semantics.

**Core meaning — English:** The process of systematically replacing subexpressions or program terms with equivalent forms based on defined reduction rules.

**Core meaning & mental image — Tiếng Việt:** Phép viết lại (biểu thức / thuật ngữ) — Quá trình thay thế có hệ thống các biểu thức con hoặc thuật ngữ chương trình bằng các dạng tương đương dựa trên các quy tắc giảm đã xác định. Hình dung việc thay thế các đại lượng bằng giá trị tương đương trong một phương trình toán học dài.

**Grammar & collocations:** `term rewriting` — viết lại thuật ngữ; `rewriting system` — hệ thống viết lại; `equational rewriting` — viết lại đẳng thức.

**Register & nuance:** Advanced mathematical and compiler optimization terminology.

**Examples:** Term rewriting systems form the mathematical basis for algebraic simplification and operational reduction semantics. → Các hệ thống viết lại thuật ngữ tạo thành nền tảng toán học cho sự đơn giản hóa đại số và ngữ nghĩa rút gọn vận hành.

**Liên kết tiếng Hàn:** `재작성` (再作成) — Sự viết lại

---

## 24. domain-theoretic /doʊˌmeɪn θiːəˈrɛtɪk/

**Loại từ & vị trí trong câu:** `adj.` — Attribute modifying semantics, modeling, or structures.

**Core meaning — English:** Pertaining to domain theory, the mathematical branch studying partially ordered sets and complete partial orders used in denotational semantics.

**Core meaning & mental image — Tiếng Việt:** Thuộc lý thuyết miền — Liên quan đến lý thuyết miền, nhánh toán học nghiên cứu các tập hợp có thứ tự một phần và thứ tự bộ phận đầy đủ được sử dụng trong ngữ nghĩa biểu tha. Hình dung việc sử dụng các bản đồ cấu trúc liên kết không gian phức tạp để mô tả các dòng chảy dữ liệu.

**Grammar & collocations:** `domain-theoretic semantics` — ngữ nghĩa học lý thuyết miền; `domain-theoretic model` — mô hình lý thuyết miền; `domain-theoretic foundation` — nền tảng lý thuyết miền.

**Register & nuance:** Highly specialized theoretical computer science and mathematics terminology.

**Examples:** Domain-theoretic models provide the rigorous topological machinery required to interpret higher-order recursive procedures. → Các mô hình lý thuyết miền cung cấp cỗ máy cấu trúc không gian nghiêm ngặt cần thiết để diễn giải các thủ tục đệ quy bậc cao.

**Liên kết tiếng Hàn:** `영역 이론적` — Thuộc lý thuyết miền

---

## 25. partial /ˈpɑːrʃl/

**Loại từ & vị trí trong câu:** `adj.` — Attribute modifying correctness, functions, or orders in semantics.

**Core meaning — English:** In verification and semantics, applying when a function may fail to terminate or when correctness is guaranteed only upon successful termination.

**Core meaning & mental image — Tiếng Việt:** Một phần / Không toàn phần — Trong xác minh và ngữ nghĩa, áp dụng khi một hàm có thể không kết thúc hoặc khi tính đúng đắn chỉ được đảm bảo sau khi kết thúc thành công. Hình dung một lời hứa chỉ được thực hiện nếu công việc hoàn thành, còn nếu bị kẹt giữa chừng thì không bắt buộc.

**Grammar & collocations:** `partial correctness` — tính đúng đắn một phần; `partial function` — hàm không toàn phần; `partial order` — thứ tự bộ phận.

**Register & nuance:** Essential technical distinction in program verification (contrasted with total correctness).

**Examples:** Proving partial correctness ensures that if a program terminates, its final state satisfies the required postcondition. → Chứng minh tính đúng đắn một phần đảm bảo rằng nếu một chương trình kết thúc, trạng thái cuối cùng của nó thỏa mãn điều kiện hậu quyết được yêu cầu.

**Liên kết tiếng Hàn:** `부분적` (部分적) — Một phần / Không toàn phần

---

## Review in context (Part 1: Operational and Denotational Semantics)
The rigorous study of programming languages relies heavily on formal **semantics** to give precise meaning to syntax. In structural operational models, execution is defined via small-step **reduction** and state **transition** relations, where each intermediate **derivation** is explicitly tracked. Conversely, **denotational** semantics maps syntactic constructs into abstract **domain**-theoretic structures, using continuous functions and **fixpoint** theorems to model recursion. Because these semantic frameworks are **compositional**, the meaning of complex phrases is derived directly from their syntactic subparts. Furthermore, **evaluation** engines execute programs either by small-step rewriting or big-step reduction, ensuring that language definitions remain mathematically rigorous.

**Bản dịch tiếng Việt:**
Việc nghiên cứu nghiêm ngặt các ngôn ngữ lập trình phụ thuộc rất nhiều vào **ngữ nghĩa** hình thức để gán ý nghĩa chính xác cho cú pháp. Trong các mô hình vận hành cấu trúc, việc thực thi được định nghĩa thông qua các quan hệ **rút gọn** bước nhỏ và **chuyển đổi** trạng thái, trong đó mỗi **phép dẫn xuất** trung gian được theo dõi rõ ràng. Ngược lại, ngữ nghĩa **biểu tha** ánh xạ các cấu trúc cú pháp thành các cấu trúc thuộc **lý thuyết miền**, sử dụng các hàm liên tục và các định lý **điểm bất động** để mô hình hóa đệ quy. Bởi vì các khung ngữ nghĩa này mang tính **cấu thành**, ý nghĩa của các cụm từ phức tạp được suy ra trực tiếp từ các phần con cú pháp của chúng. Hơn nữa, các bộ **đánh giá** thực thi các chương trình bằng cách viết lại bước nhỏ hoặc rút gọn bước lớn, đảm bảo rằng các định nghĩa ngôn ngữ vẫn giữ nguyên tính nghiêm ngặt về mặt toán học.

---

## Review in context (Part 2: Axiomatic Verification and Hoare Triples)
To verify software correctness without executing code, computer scientists employ **axiomatic** semantics based on logical **assertions** and **predicates**. A standard **Hoare triple** encapsulates a precondition, a command, and a postcondition, written to specify program behavior. Using weakest **precondition** and strongest **postcondition** **transformers**, automated verifiers compute exact logical conditions required for safety. Central to this process is identifying loop **invariants** that hold continuously throughout execution. When formal verification tools are proven to possess mathematical **soundness**, developers are guaranteed that verified programs adhere strictly to specifications, bridging the gap between abstract program **calculus** and reliable software execution.

**Bản dịch tiếng Việt:**
Để xác minh tính đúng đắn của phần mềm mà không cần thực thi mã, các nhà khoa học máy tính sử dụng ngữ nghĩa **tiên đề** dựa trên các **khẳng định** logic và các **vị từ**. Một **bộ ba Hoare** chuẩn bao gồm điều kiện tiên quyết, một câu lệnh và điều kiện hậu quyết, được viết để chỉ định hành vi của chương trình. Bằng cách sử dụng các **bộ biến đổi** **điều kiện tiên quyết** yếu nhất và **điều kiện hậu quyết** mạnh nhất, các trình xác minh tự động tính toán các điều kiện logic chính xác cần thiết cho sự an toàn. Trọng tâm của quá trình này là xác định các **bất biến** vòng lặp giữ nguyên liên tục trong suốt quá trình thực thi. Khi các công cụ xác minh hình thức được chứng minh là có tính **vững chắc** toán học, các nhà phát triển được đảm bảo rằng các chương trình đã được xác minh tuân thủ nghiêm ngặt các thông số kỹ thuật, thu hẹp khoảng cách giữa **phép tính** chương trình trừu tượng và việc thực thi phần mềm đáng tin cậy.
