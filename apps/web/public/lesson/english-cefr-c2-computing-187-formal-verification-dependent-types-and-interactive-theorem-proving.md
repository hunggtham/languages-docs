# C2 Vocabulary 187 — Formal verification, dependent type theories, and mechanized proof assistants

Ở đỉnh cao của khoa học máy tính lý thuyết, độ tin cậy phần mềm và toán học kiến tạo, các phương pháp hình thức (formal methods) và lý thuyết kiểu phụ thuộc (dependent type theories) chuyển đổi hoàn toàn cách thức nhân loại xây dựng và chứng minh tính đúng đắn của các hệ thống phức tạp. Thay vì dựa vào việc kiểm thử ngẫu nhiên vốn chỉ phát hiện sự hiện diện của lỗi chứ không thể chứng minh sự vắng mặt của chúng, các trợ lý chứng minh cơ giới hóa (mechanized proof assistants như Lean, Coq, Isabelle/HOL, Agda) cho phép lập trình viên mô hình hóa các định lý toán học và hành vi phần mềm thành các kiểu dữ liệu, biến phép biên dịch thành một quá trình kiểm tra chứng minh logic bất khả xâm phạm. Bài học C2 này trang bị cho bạn hệ thống thuật ngữ chuyên sâu nhất về đẳng cấu Curry-Howard, các họ kiểu quy nạp, bất biến đồng quy nạp, chiến thuật giải quyết mục tiêu tự động và sự bảo đảm toán học về tính vững chắc (soundness).

Flow của bài học: **Curry-Howard isomorphism** → **dependent type theory** → **inductive type family** → **proof-carrying code infrastructure** → **mechanized coinductive invariant** → **soundness guarantee** → **interactive theorem prover** → **SMT solver tactic** → **definitional equality** → **propositional extensionality** → **proof irrelevance** → **mechanized formalization** → **type inhabitant** → **erasure semantics** → **well-founded recursion** → **coinductive bisimulation** → **semantic preservation theorem** → **refinement reflection** → **universe polymorphism** → **de Bruijn criterion** → **decidability procedure** → **axiom of functional extensionality** → **conservativity proof** → **automated goal discharge** → **witness extraction**.

---

## 1. Curry-Howard isomorphism /ˌkɜri ˈhaʊərd ˌaɪsəˈmɔrfɪzəm/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là nguyên lý nền tảng hoặc khung lý thuyết cốt lõi kết nối logic học và khoa học máy tính (ví dụ: `formulated under the Curry-Howard isomorphism`, `leverage the Curry-Howard isomorphism`).

**Core meaning — English:** The direct correspondence between formal logical systems and computational type systems, establishing that propositions are types, proofs are programs, and proof normalization is program evaluation.

**Core meaning & mental image — Tiếng Việt:** Đẳng cấu Curry-Howard; hãy hình dung hai thế giới song song soi chiếu hoàn hảo vào nhau: một bên là giới các nhà toán học viết định lý và chứng minh định lý bằng các bước suy luận logic thuần túy, bên kia là các kỹ sư phần mềm viết kiểu dữ liệu và viết mã thực thi; đẳng cấu này hé lộ rằng hai bên thực chất đang làm cùng một việc duy nhất — một mệnh đề logic chính là một kiểu dữ liệu, và một bản chứng minh hợp lệ chính là một chương trình máy tính chạy trơn tru mà không bao giờ bị sập.

**Grammar & collocations:** `grounded in the Curry-Howard isomorphism` — dựa trên nền tảng đẳng cấu Curry-Howard; `manifestation of the Curry-Howard isomorphism` — biểu hiện của đẳng cấu Curry-Howard; `Curry-Howard isomorphism correspondence` — sự tương ứng đẳng cấu Curry-Howard.

**Register & nuance:** `type theory & mathematical logic` — nguyên lý trung tâm của tính toán học kiến tạo; là trụ cột của các ngôn ngữ chứng minh hiện đại; khác biệt với các phép quy đổi cú pháp thông thường ở chỗ nó mang tính bản thể luận sâu sắc về sự đồng nhất giữa chứng minh và chương trình.

**Examples:** `Under the Curry-Howard isomorphism, verifying that a software function conforms to its mathematical specification is strictly equivalent to checking the validity of a constructive proof.` → Theo đẳng cấu Curry-Howard, việc xác minh một hàm phần mềm tuân thủ đặc tả toán học của nó hoàn toàn tương đương với việc kiểm tra tính hợp lệ của một chứng minh kiến tạo.

**Liên kết tiếng Hàn:** `커리-하워드 동형사상` (Curry-Howard 同型寫像) — đẳng cấu Curry-Howard kết nối mệnh đề với kiểu dữ liệu.

---

## 2. dependent type theory /dɪˈpɛndənt taɪp ˈθiəri/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ hệ thống logic hoặc tân ngữ của các động từ hình thức hóa (ví dụ: `formalized within dependent type theory`, `extend dependent type theory`).

**Core meaning — English:** A formal type system in which types are permitted to depend on and be parameterized by terms and runtime values, allowing extraordinarily expressive program specifications and mathematical propositions to be stated within the type system itself.

**Core meaning & mental image — Tiếng Việt:** Lý thuyết kiểu phụ thuộc; hãy hình dung một chiếc khuôn đúc không chỉ biết phân loại "đây là một danh sách số nguyên", mà chiếc khuôn đó có thể biến hình dựa trên số lượng phần tử thực tế bên trong — như "một danh sách gồm đúng $n$ số nguyên đã được sắp xếp tăng dần"; kiểu dữ liệu lúc này gắn chặt vào chính giá trị của dữ liệu, khiến bất kỳ trạng thái vi phạm nào cũng bị máy tính phát hiện ngay từ giai đoạn kiểm tra kiểu.

**Grammar & collocations:** `foundations of dependent type theory` — các nền tảng của lý thuyết kiểu phụ thuộc; `constructive dependent type theory` — lý thuyết kiểu phụ thuộc kiến tạo; `expressiveness of dependent type theory` — tính biểu đạt của lý thuyết kiểu phụ thuộc.

**Register & nuance:** `programming language semantics & automated theorem proving` — là cấp độ cao nhất trong hình khối kiểu (lambda cube) của Barendregt; nền tảng cho Coq (Calculus of Inductive Constructions) và Lean; vượt trội hơn hệ thống kiểu thông thường ở khả năng tích hợp đặc tả vào chữ ký hàm.

**Examples:** `By adopting dependent type theory, the language enables developers to encode intricate boundary constraints and security invariant properties directly into function signatures.` → Bằng cách áp dụng lý thuyết kiểu phụ thuộc, ngôn ngữ cho phép các nhà phát triển mã hóa các ràng buộc biên phức tạp và các thuộc tính bất biến bảo mật trực tiếp vào chữ ký của hàm.

**Liên kết tiếng Hàn:** `종속 타입 이론` (從屬 type 理論) — lý thuyết kiểu phụ thuộc.

---

## 3. inductive type family /ɪnˈdʌktɪv taɪp ˈfæməli/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là cấu trúc dữ liệu hoặc vị từ định nghĩa các quan hệ toán học được tham số hóa (ví dụ: `define an inductive type family`, `instantiate an inductive type family`).

**Core meaning — English:** A parameterized collection of types defined inductively by a collection of constructors, where the indices of the types can vary depending on the constructor applied, enabling the definition of indexed predicates like equality or length-indexed vectors.

**Core meaning & mental image — Tiếng Việt:** Họ kiểu quy nạp / gia đình kiểu quy nạp; hãy hình dung một cây gia phả của các cấu trúc toán học nơi mỗi nhánh con không chỉ sinh ra dữ liệu mà còn mang theo một "thẻ nhận dạng" đo lường trạng thái; ví dụ một họ kiểu quy nạp biểu diễn quan hệ "nhỏ hơn hoặc bằng" giữa hai số, nơi mỗi cấu tử quy nạp là một nấc thang bằng chứng dẫn dắt bạn đi từ trường hợp cơ sở $0 \le n$ đến $m \le n$.

**Grammar & collocations:** `specify an inductive type family` — chỉ định một họ kiểu quy nạp; `constructors of an inductive type family` — các cấu tử của một họ kiểu quy nạp; `eliminate an inductive type family` — khử một họ kiểu quy nạp qua phép đối sánh mẫu.

**Register & nuance:** `constructive mathematics & mechanized proving` — cơ chế căn bản để biểu diễn quan hệ và vị từ trong Calculus of Inductive Constructions; khác với `algebraic data types` thông thường ở chỗ chỉ số kiểu (indices) có thể phụ thuộc vào giá trị của các tham số trước đó.

**Examples:** `The equality predicate in Martin-Löf type theory is formalized as an inductive type family possessing a single reflexivity constructor.` → Vị từ đẳng thức trong lý thuyết kiểu Martin-Löf được hình thức hóa như một họ kiểu quy nạp sở hữu một cấu tử phản xạ duy nhất.

**Liên kết tiếng Hàn:** `귀납적 타입 계열` (歸納的 type 系列) — họ kiểu quy nạp / gia đình kiểu quy nạp.

---

## 4. proof-carrying code infrastructure /pruːf ˈkæriɪŋ koʊd ˌɪnfrəˈstrʌktʃər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm hệ thống phòng thủ hoặc kiến trúc thực thi an toàn trong các môi trường điện toán không tin cậy (ví dụ: `deploy a proof-carrying code infrastructure`).

**Core meaning — English:** A comprehensive software framework and verification architecture in which untrusted executable binaries are bundled alongside explicit formal mathematical proofs of their safety properties, allowing host runtimes to validate them via automated proof checkers before execution.

**Core meaning & mental image — Tiếng Việt:** Cơ sở hạ tầng mã mang chứng minh; hãy hình dung một kiện hàng phần mềm bí ẩn được gửi đến một căn cứ quân sự tối mật: thay vì phải tin tưởng người gửi hay tiến hành quét mã độc tốn kém, kiện hàng này được đính kèm một chứng chỉ toán học bất biến, và người gác cổng chỉ cần cho chứng chỉ qua một máy đọc logic nhỏ gọn để khẳng định chắc chắn 100% rằng kiện hàng sẽ không bao giờ gây tràn bộ nhớ hay truy cập trái phép.

**Grammar & collocations:** `establish a proof-carrying code infrastructure` — thiết lập cơ sở hạ tầng mã mang chứng minh; `validation within proof-carrying code infrastructure` — việc thẩm định bên trong cơ sở hạ tầng mã mang chứng minh; `overhead of proof-carrying code infrastructure` — chi phí phụ tải của cơ sở hạ tầng mã mang chứng minh.

**Register & nuance:** `systems security, formal methods & compiler architecture` — thuật ngữ tiên phong bởi George Necula và Peter Lee; chuyển gánh nặng tính toán chứng minh sang máy biên dịch của nhà sản xuất, trong khi máy chủ tiêu thụ chỉ cần chạy bộ kiểm tra chứng minh siêu nhẹ.

**Examples:** `The aerospace operating system integrated a proof-carrying code infrastructure to ensure that untrusted third-party control algorithms could execute without compromising avionics memory isolation.` → Hệ điều hành hàng không vũ trụ đã tích hợp một cơ sở hạ tầng mã mang chứng minh để bảo đảm rằng các thuật toán điều khiển của bên thứ ba không tin cậy có thể thực thi mà không làm tổn hại đến sự cô lập bộ nhớ của hệ thống điện tử hàng không.

**Liên kết tiếng Hàn:** `증명 탑재 코드 기반구조` (證明 搭載 code 基盤構造) — cơ sở hạ tầng mã mang chứng minh logic.

---

## 5. mechanized coinductive invariant /ˈmɛkənaɪzd koʊɪnˈdʌktɪv ɪnˈvɛriənt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là thuộc tính bảo toàn cho các quá trình vô hạn hoặc luồng tương tác liên tục (ví dụ: `verify a mechanized coinductive invariant`).

**Core meaning — English:** A formal invariant property mathematically proven within an interactive theorem prover to hold perpetually across non-terminating, reactive, or infinite-stream computations using the principles of coinduction and guarded corecursion.

**Core meaning & mental image — Tiếng Việt:** Bất biến đồng quy nạp cơ giới hóa; hãy hình dung một chiếc đồng hồ nguyên tử quay vĩnh cửu không bao giờ dừng: vì tiến trình không có điểm kết thúc nên bạn không thể dùng phép quy nạp toán học thông thường (vốn đòi hỏi trường hợp cơ sở dừng); thay vào đó, bạn dựng lên một "chiếc lồng bảo hộ" toán học chứng minh rằng ở mọi tích tắc tiếp theo của tương lai vô hạn, trạng thái của hệ thống luôn nằm trọn vẹn trong vùng an toàn định trước.

**Grammar & collocations:** `preserve a mechanized coinductive invariant` — bảo tồn một bất biến đồng quy nạp cơ giới hóa; `formulate a mechanized coinductive invariant` — xây dựng một bất biến đồng quy nạp cơ giới hóa; `guardedness of a mechanized coinductive invariant` — tính được bảo hộ của bất biến đồng quy nạp cơ giới hóa.

**Register & nuance:** `formal verification & reactive systems semantics` — đồng quy nạp (coinduction) là đối ngẫu toán học của quy nạp (induction); dùng đặc thù cho các luồng dữ liệu vô hạn (lazy streams), hệ điều hành và giao thức truyền thông không có điểm kết thúc.

**Examples:** `Engineers established a mechanized coinductive invariant proving that the autonomous vehicle's steering controller would never transition into an unrecoverable deadlock state over an infinite execution trace.` → Các kỹ sư đã thiết lập một bất biến đồng quy nạp cơ giới hóa chứng minh rằng bộ điều khiển lái của xe tự hành sẽ không bao giờ chuyển sang trạng thái bế tắc không thể phục hồi trên một vết thực thi vô hạn.

**Liên kết tiếng Hàn:** `기계화된 공귀납적 불변식` (機械化된 共歸納的 不變式) — bất biến đồng quy nạp được cơ giới hóa / kiểm chứng bằng máy.

---

## 6. soundness guarantee /ˈsaʊndnəs ˌɡærənˈtiː/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là lời cam kết toán học tối thượng của một hệ thống logic hoặc công cụ kiểm chứng (ví dụ: `provide an absolute soundness guarantee`, `undermine the soundness guarantee`).

**Core meaning — English:** The mathematical assurance provided by a logical proof system or type checker asserting that every provable theorem or well-typed statement is genuinely true in the underlying semantics, precluding false claims.

**Core meaning & mental image — Tiếng Việt:** Sự bảo đảm tính vững chắc; hãy hình dung một chiếc cân vàng lý tưởng tuyệt đối: nếu chiếc cân phát ra tiếng chuông báo "đây là vàng nguyên chất 100%", thì vật đặt lên đĩa nhất định phải là vàng thật chứ không bao giờ có chuyện hợp kim giả mạo đánh lừa được chiếc cân; tính vững chắc bảo đảm rằng hệ thống không bao giờ chứng minh một điều sai trái.

**Grammar & collocations:** `uncompromising soundness guarantee` — sự bảo đảm tính vững chắc không khoan nhượng; `breach the soundness guarantee` — vi phạm sự bảo đảm tính vững chắc; `backed by a formal soundness guarantee` — được bảo đảm bằng một cam kết tính vững chắc hình thức.

**Register & nuance:** `mathematical logic & static analysis` — phân biệt sâu sắc với `completeness` (tính đầy đủ): tính vững chắc (soundness) bảo đảm "hễ chứng minh được là đúng", trong khi tính đầy đủ bảo đảm "hễ đúng là chứng minh được". Trong thẩm định an ninh phần mềm, soundness luôn là ưu tiên tối thượng.

**Examples:** `Because the microkernel type checker enforces an uncompromising soundness guarantee, no malformed memory transaction can ever be admitted into the execution pipeline.` → Bởi vì bộ kiểm tra kiểu của vi nhân thực thi một sự bảo đảm tính vững chắc không khoan nhượng, không một giao dịch bộ nhớ dị dạng nào có thể được chấp thuận vào đường ống thực thi.

**Liên kết tiếng Hàn:** `건전성 보증` (健全性 保證) — sự bảo đảm tính vững chắc của hệ thống logic.

---

## 7. interactive theorem prover /ˌɪntərˈæktɪv ˈθiərəm ˈpruːvər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ công cụ phần mềm hoặc môi trường làm việc của nhà toán học và kỹ sư xác minh (ví dụ: `implemented in an interactive theorem prover`, `the interactive theorem prover checks each step`).

**Core meaning — English:** A specialized software environment and proof assistant that assists humans in formalizing mathematical theorems and software models, interactively validating each deductive proof step against a trusted logical kernel.

**Core meaning & mental image — Tiếng Việt:** Trợ lý chứng minh định lý tương tác; hãy hình dung một bàn cờ thế giữa con người và một trọng tài logic siêu phàm: con người đưa ra các nước đi chiến lược (các chiến thuật phân tách mục tiêu), còn vị trọng tài máy tính kiểm tra ngay tức khắc xem nước đi đó có phạm bất kỳ quy tắc suy luận nào không; máy tính sẽ từ chối nếu có sơ hở và chỉ xác nhận khi mọi mục tiêu đã được giải quyết trọn vẹn.

**Grammar & collocations:** `work within an interactive theorem prover` — làm việc bên trong một trợ lý chứng minh định lý tương tác; `capabilities of an interactive theorem prover` — năng lực của trợ lý chứng minh định lý tương tác; `interactive theorem prover kernel` — nhân của trợ lý chứng minh định lý tương tác.

**Register & nuance:** `formal mathematics & verified software engineering` — viết tắt là ITP; bao gồm các công cụ tiêu biểu như Coq, Lean, Isabelle/HOL; khác với `automated theorem provers` (ATP) ở chỗ đòi hỏi sự cộng tác định hướng chiến lược từ con người thay vì tìm kiếm mù quáng.

**Examples:** `Mathematicians utilized the Lean interactive theorem prover to formally verify Peter Scholze's complex proof of condensed mathematics down to foundational axioms.` → Các nhà toán học đã sử dụng trợ lý chứng minh định lý tương tác Lean để kiểm chứng hình thức hóa chứng minh phức tạp của Peter Scholze về toán học cô đọng xuống tận các tiên đề nền tảng.

**Liên kết tiếng Hàn:** `대화형 정리 증명기` (對話型 定理 證明機) — trợ lý chứng minh định lý tương tác.

---

## 8. SMT solver tactic /ˌɛs ɛm ˈtiː ˈsɑlvər ˈtæktɪk/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là phương pháp hoặc chỉ thị tự động hóa trong quy trình chứng minh (ví dụ: `invoke an SMT solver tactic`, `discharge subgoals using an SMT solver tactic`).

**Core meaning — English:** A specialized proof automation command or meta-program within a proof assistant that translates open subgoals into first-order satisfiability modulo theories queries and delegates their automated resolution to external SMT engines like Z3 or CVC5.

**Core meaning & mental image — Tiếng Việt:** Chiến thuật bộ giải SMT; hãy hình dung bạn đang giải một bài toán hình học phức tạp nhưng gặp phải một đống phép tính đại số lặt vặt tẻ nhạt; thay vì ngồi tính tay từng bước, bạn ném các biểu thức này vào một "cỗ máy nghiền phương trình" cực nhanh (như Z3); cỗ máy sẽ tự động tìm lời giải hoặc khẳng định phương trình thỏa mãn chỉ trong tích tắc rồi đưa kết quả chứng thực trở lại bàn cờ.

**Grammar & collocations:** `discharge with an SMT solver tactic` — xả hết mục tiêu con bằng một chiến thuật bộ giải SMT; `construct a custom SMT solver tactic` — xây dựng một chiến thuật bộ giải SMT tùy chỉnh; `delegation via an SMT solver tactic` — sự ủy quyền qua một chiến thuật bộ giải SMT.

**Register & nuance:** `automated deduction & interactive verification` — kết hợp sức mạnh biểu đạt vô hạn của kiểu phụ thuộc với tốc độ quyết định tự động của lý thuyết mô-đun thỏa mãn (Satisfiability Modulo Theories); giúp nhà nghiên cứu giải phóng sức lao động khỏi các phép tính số học tuyến tính nhàm chán.

**Examples:** `Rather than manually expanding dozens of trivial arithmetic lemmas, the verifier discharged the intermediate constraints effortlessly using an SMT solver tactic.` → Thay vì phải khai triển thủ công hàng chục bổ đề số học vụn vặt, người kiểm chứng đã giải quyết các ràng buộc trung gian một cách dễ dàng nhờ sử dụng một chiến thuật bộ giải SMT.

**Liên kết tiếng Hàn:** `SMT 솔버 전술` (SMT solver 戰術) — chiến thuật tự động hóa mục tiêu thông qua bộ giải SMT.

---

## 9. definitional equality /ˌdɛfəˈnɪʃənəl ɪˈkwɑləti/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tiêu chuẩn so sánh ngầm định trong quá trình kiểm tra kiểu (ví dụ: `hold by definitional equality`, `rely on definitional equality`).

**Core meaning — English:** The strict, automatic equality of two terms within a formal type theory resulting purely from syntactic abbreviation, macro expansion, and deterministic computation (normalization) without requiring any explicit mathematical proof steps.

**Core meaning & mental image — Tiếng Việt:** Đẳng thức định nghĩa / tính bằng nhau theo định nghĩa; hãy hình dung việc bạn viết $2 + 2$ và $4$: bộ não bạn không cần ai chứng minh một định lý phức tạp nào cả, mà chỉ cần thực hiện phép tính rút gọn rút lui (computation) là hai biểu thức tự động trùng khít lên nhau; trong hệ thống kiểu, hai thuật ngữ bằng nhau theo định nghĩa có thể thay thế cho nhau một cách hoàn toàn tự động và vô hình.

**Grammar & collocations:** `coincide by definitional equality` — trùng khớp theo đẳng thức định nghĩa; `check definitional equality` — kiểm tra tính bằng nhau theo định nghĩa; `boundary of definitional equality` — ranh giới của đẳng thức định nghĩa.

**Register & nuance:** `dependent type theory & proof theory` — còn gọi là `judgmental equality` ($t \equiv u$); hoàn toàn khác với `propositional equality` ($t = u$), vốn đòi hỏi một chuỗi chứng minh cụ thể bằng các tiên đề hoặc cấu tử.

**Examples:** `Because the type system recognizes beta-reduction as definitional equality, the compiler treats the applied lambda abstraction and its evaluated result as identical without demanding user intervention.` → Bởi vì hệ thống kiểu công nhận phép rút gọn beta là đẳng thức định nghĩa, trình biên dịch xử lý trừu tượng lambda được áp dụng và kết quả đánh giá của nó là giống hệt nhau mà không đòi hỏi sự can thiệp của người dùng.

**Liên kết tiếng Hàn:** `정의적 동일성` (定義的 同一性) — tính đồng nhất theo định nghĩa / đẳng thức định nghĩa.

---

## 10. propositional extensionality /ˌprɑpəˈzɪʃənəl ˌɛkstɛnʃəˈnæləti/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là tiên đề hoặc nguyên lý logic đồng nhất hóa các mệnh đề tương đương (ví dụ: `assume propositional extensionality`, `admit propositional extensionality`).

**Core meaning — English:** An axiom or logical principle stating that two propositions that mutually imply each other (are logically equivalent) are themselves identical and can be substituted for one another within any proposition or context.

**Core meaning & mental image — Tiếng Việt:** Tính ngoại diên mệnh đề; hãy hình dung hai chiếc chìa khóa có hình dáng răng cưa khác nhau nhưng đều mở được chính xác cùng một ổ khóa; nguyên lý ngoại diên mệnh đề tuyên bố rằng miễn là hai mệnh đề $P$ và $Q$ kéo theo nhau ($P \leftrightarrow Q$), hệ thống coi chúng là cùng một thực thể duy nhất ($P = Q$), cho phép hoán đổi vị trí của chúng ở bất kỳ đâu mà không làm suy chuyển chân lý.

**Grammar & collocations:** `postulate propositional extensionality` — thừa nhận tiên đề tính ngoại diên mệnh đề; `consistency of propositional extensionality` — tính nhất quán của tính ngoại diên mệnh đề; `provable under propositional extensionality` — có thể chứng minh được dưới tính ngoại diên mệnh đề.

**Register & nuance:** `higher-order logic & intensional type theories` — là một phần mở rộng quen thuộc trong Lean và Calculus of Constructions; biến đổi tương đương logic thành sự bằng nhau định đề thực thụ, giúp đơn giản hóa các phép biến đổi toán học.

**Examples:** `By invoking propositional extensionality, the proof script seamlessly replaced an unwieldy conjunction of constraints with an equivalent simplified predicate.` → Bằng cách viện dẫn tính ngoại diên mệnh đề, tập lệnh chứng minh đã hoán đổi liền mạch một phép hội các ràng buộc cồng kềnh bằng một vị từ đơn giản hóa tương đương.

**Liên kết tiếng Hàn:** `명제적 외연성` (命題的 外延性) — tính ngoại diên của mệnh đề logic.

---

## 11. proof irrelevance /pruːf ɪˈrɛləvəns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm thuộc tính của kiểu dữ liệu mệnh đề hoặc chế độ tối ưu hóa của bộ kiểm chứng (ví dụ: `enforce proof irrelevance`, `subject to proof irrelevance`).

**Core meaning — English:** The foundational principle in constructive logic and type systems stating that any two proofs of the same proposition are computationally identical, meaning that the specific structure of a proof holds no operational significance once its existence is established.

**Core meaning & mental image — Tiếng Việt:** Tính bất liên quan của chứng minh; hãy hình dung chiếc vé vào cửa một buổi hòa nhạc: người soát vé chỉ cần nhìn thấy bạn có chiếc vé hợp lệ trên tay để cho bạn bước qua cửa; việc bạn mua vé bằng tiền mặt, thẻ tín dụng, hay được tặng một cách tình cờ hoàn toàn không quan trọng; một khi một mệnh đề đã được chứng minh, chi tiết râu ria của cách chứng minh đó bị lãng quên để tránh làm phình to bộ nhớ chương trình.

**Grammar & collocations:** `exhibit proof irrelevance` — thể hiện tính bất liên quan của chứng minh; `strict proof irrelevance` — tính bất liên quan nghiêm ngặt của chứng minh; `benefit from proof irrelevance` — hưởng lợi từ tính bất liên quan của chứng minh.

**Register & nuance:** `constructive type theory & compiler extraction` — phân biệt giữa thế giới tính toán dữ liệu (`Type`) và thế giới logic thuần túy (`Prop`). Cho phép trình biên dịch vứt bỏ toàn bộ mã chứng minh khi trích xuất ra mã nhị phân mà vẫn giữ nguyên tính đúng đắn.

**Examples:** `Lean classifies mathematical propositions into the Prop universe, where proof irrelevance guarantees that different derivations of the same inequality are treated as definitionally indistinguishable.` → Lean phân loại các mệnh đề toán học vào vũ trụ Prop, nơi tính bất liên quan của chứng minh bảo đảm rằng các dẫn xuất khác nhau của cùng một bất đẳng thức được coi là không thể phân biệt theo định nghĩa.

**Liên kết tiếng Hàn:** `증명 무관성` (證明 無關性) — tính bất liên quan của chi tiết chứng minh.

---

## 12. mechanized formalization /ˈmɛkənaɪzd ˌfɔrmələˈzeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là sản phẩm hoặc quá trình chuyển đổi tri thức toán học thành mã kiểm chứng máy (ví dụ: `complete a mechanized formalization`, `undertake a mechanized formalization`).

**Core meaning — English:** The rigorous process of expressing mathematical theories, program specifications, or system semantics into the machine-checkable language of an interactive proof assistant, eliminating any informal ambiguity or hidden deductive gaps.

**Core meaning & mental image — Tiếng Việt:** Sự hình thức hóa cơ giới hóa; hãy hình dung việc dịch một cuốn sách dạy nấu ăn viết bằng tay đầy những ước lệ mơ hồ như "nêm một chút muối" thành một chương trình điều khiển cánh tay robot chính xác đến từng microgam: mọi khái niệm, mọi bước suy luận trung gian và mọi tiền đề ngầm định đều được biến thành các dòng mã logic mà máy tính có thể quét qua và xác nhận không có một kẽ hở nào.

**Grammar & collocations:** `rigorous mechanized formalization` — sự hình thức hóa cơ giới hóa nghiêm ngặt; `achieve mechanized formalization` — đạt được sự hình thức hóa cơ giới hóa; `mechanized formalization effort` — nỗ lực hình thức hóa cơ giới hóa.

**Register & nuance:** `formal verification & verified mathematics` — tiêu chuẩn vàng hiện đại trong việc khẳng định tính đúng đắn của các công trình toán học lớn (như Four Color Theorem, Feit-Thompson Theorem, hay dự án seL4).

**Examples:** `The complete mechanized formalization of the CompCert C compiler established an unprecedented benchmark in verified systems research.` → Sự hình thức hóa cơ giới hóa hoàn chỉnh của trình biên dịch CompCert C đã thiết lập một chuẩn mực chưa từng có trong nghiên cứu các hệ thống được kiểm chứng.

**Liên kết tiếng Hàn:** `기계화된 형식화` (機械化된 形式化) — sự hình thức hóa được kiểm chứng bằng máy móc.

---

## 13. type inhabitant /taɪp ɪnˈhæbətənt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm đối tượng cụ thể tồn tại trong một không gian kiểu (ví dụ: `construct a type inhabitant`, `the existence of a type inhabitant`).

**Core meaning — English:** A specific term, expression, or computational value whose static type matches a given type; within constructive logic, a type inhabitant serves as an explicit mathematical witness or proof of the proposition represented by that type.

**Core meaning & mental image — Tiếng Việt:** Cư dân của kiểu / phần tử thuộc kiểu; hãy hình dung một ngôi nhà có địa chỉ là một định lý toán học: nếu ngôi nhà đó hoàn toàn trống rỗng không có ai ở, định lý đó chưa được chứng minh (hoặc vô nghiệm); nhưng chỉ cần bạn đưa vào ngôi nhà một "cư dân" cụ thể — một hàm số tính toán hợp lệ — sự hiện diện bằng xương bằng thịt của cư dân đó chính là bằng chứng xác thực rằng định lý là có thật.

**Grammar & collocations:** `construct a valid type inhabitant` — kiến tạo một cư dân kiểu hợp lệ; `empty type without inhabitants` — kiểu rỗng không có cư dân; `witnessed by a type inhabitant` — được làm chứng bởi một cư dân kiểu.

**Register & nuance:** `type theory & constructive mathematics` — một kiểu được gọi là "inhabited" nếu tồn tại ít nhất một giá trị thuộc kiểu đó; liên hệ trực tiếp với bài toán kiểm tra tính thỏa mãn logic.

**Examples:** `Under the Curry-Howard paradigm, discovering a well-typed program that serves as a type inhabitant for an arbitrary proposition proves that the theorem is unconditionally true.` → Dưới mô hình Curry-Howard, việc khám phá ra một chương trình được định kiểu đúng đóng vai trò là cư dân của kiểu cho một mệnh đề bất kỳ chứng minh rằng định lý đó là đúng đắn vô điều kiện.

**Liên kết tiếng Hàn:** `타입 거주자 / 원소` (type 居住者 / 元素) — phần tử thuộc kiểu / bằng chứng cụ thể của kiểu dữ liệu.

---

## 14. erasure semantics /ɪˈreɪʒər sɪˈmæntɪks/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là chiến lược biên dịch hoặc mô hình thực thi loại bỏ metadata (ví dụ: `compiled under erasure semantics`, `govern by erasure semantics`).

**Core meaning — English:** An operational semantics model and compiler translation phase in which all purely logical types, proofs, and non-computational indices are stripped away before code generation, yielding lean, high-performance runtime executables.

**Core meaning & mental image — Tiếng Việt:** Ngữ nghĩa học xóa bỏ / cơ chế loại bỏ chứng minh khi biên dịch; hãy hình dung một giàn giáo khổng lồ bao quanh một tòa nhà chọc trời trong suốt quá trình xây dựng để các thanh tra kiểm tra từng mối hàn chịu lực; khi tòa nhà đã vững chãi hoàn thành, toàn bộ giàn giáo được tháo dỡ sạch sẽ chỉ để lại khối kiến trúc bê tông cốt thép tinh giản; ngữ nghĩa xóa bỏ vứt bỏ mọi dòng mã chứng minh cồng kềnh, chỉ giữ lại mã thực thi thuần túy chạy ở tốc độ cao nhất.

**Grammar & collocations:** `implement erasure semantics` — triển khai ngữ nghĩa học xóa bỏ; `soundness of erasure semantics` — tính vững chắc của ngữ nghĩa học xóa bỏ; `subject to erasure semantics` — chịu sự chi phối của ngữ nghĩa học xóa bỏ.

**Register & nuance:** `compiler design & verified languages` — đặc tính sống còn của các ngôn ngữ kiểu phụ thuộc như Idris, Agda, và Coq; bảo đảm rằng việc bổ sung hàng ngàn trang chứng minh hình thức không gây ra bất kỳ suy giảm hiệu năng nào trong quá trình thực thi thực tế.

**Examples:** `Thanks to rigorous erasure semantics, the verified cryptographic primitives compiled into optimized machine instructions without retaining any runtime verification overhead.` → Nhờ ngữ nghĩa học xóa bỏ nghiêm ngặt, các nguyên thủy mật mã học được kiểm chứng đã biên dịch thành các chỉ lệnh máy tối ưu mà không giữ lại bất kỳ chi phí xác minh thời gian chạy nào.

**Liên kết tiếng Hàn:** `소거 의미론` (消去 意味論) — ngữ nghĩa học xóa bỏ siêu dữ liệu kiểm chứng khi biên dịch.

---

## 15. well-founded recursion /wɛl ˈfaʊndɪd rɪˈkɜrʒən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm cơ chế bảo đảm kết thúc hàm trong các ngôn ngữ hàm thuần túy (ví dụ: `terminate via well-founded recursion`, `define by well-founded recursion`).

**Core meaning — English:** A recursive definition scheme guaranteed to terminate because every recursive invocation operates on arguments that strictly decrease according to a mathematically well-founded relation that contains no infinite descending chains.

**Core meaning & mental image — Tiếng Việt:** Đệ quy trên quan hệ nền tảng tốt / đệ quy giảm dần có đáy; hãy hình dung bạn đi lùi xuống một cầu thang xoắn ốc: bạn không thể rơi vào vòng lặp bước lùi vô tận vì đáy cầu thang là một sàn nhà kiên cố ($0$); đệ quy nền tảng tốt bảo đảm rằng mỗi lần gọi lại hàm, một thước đo toán học nào đó luôn bị trừ bớt đi và bắt buộc phải chạm đáy sau một số bước hữu hạn, ngăn chặn triệt để nguy cơ treo máy vĩnh viễn.

**Grammar & collocations:** `prove termination by well-founded recursion` — chứng minh sự kết thúc bằng đệ quy trên quan hệ nền tảng tốt; `well-founded recursion on measure` — đệ quy trên quan hệ nền tảng tốt dựa trên thước đo; `admit well-founded recursion` — chấp nhận đệ quy trên quan hệ nền tảng tốt.

**Register & nuance:** `total functional programming & proof assistants` — trong các hệ thống như Lean hoặc Coq, mọi hàm đều phải dừng (totality) để bảo toàn tính vững chắc logic; well-founded recursion là công cụ vạn năng nhất khi phép quy nạp cấu trúc đơn giản không đủ đáp ứng.

**Examples:** `The compiler accepted the complex graph traversal algorithm only after the engineer supplied a metric demonstrating well-founded recursion along the unvisited node count.` → Trình biên dịch chỉ chấp nhận thuật toán duyệt đồ thị phức tạp sau khi kỹ sư cung cấp một thước đo chứng minh đệ quy trên quan hệ nền tảng tốt dọc theo số lượng nút chưa được truy cập.

**Liên kết tiếng Hàn:** `정초 재귀 / 올바른 기초 재귀` (整礎 再歸) — đệ quy trên quan hệ thứ tự tốt / đệ quy bảo đảm kết thúc.

---

## 16. coinductive bisimulation /koʊɪnˈdʌktɪv ˌbaɪsɪmjuˈleɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là quan hệ tương đương hành vi giữa hai hệ thống trạng thái hoặc luồng vô hạn (ví dụ: `establish a coinductive bisimulation`, `prove equivalence by coinductive bisimulation`).

**Core meaning — English:** A coinductively defined relational equivalence between two state transition systems or infinite structures, asserting that each observable step taken by one system can be matched by an identical observable step in the other while preserving relational consistency forever.

**Core meaning & mental image — Tiếng Việt:** Mô phỏng song hướng đồng quy nạp; hãy hình dung hai vũ công khiêu vũ trong hai căn phòng cách biệt: người xem đứng ngoài quan sát thấy bất cứ khi nào vũ công thứ nhất bước sang trái hay xoay người, vũ công thứ hai lập tức thực hiện động tác tương ứng giống hệt; dù điệu nhảy kéo dài vô tận đến muôn đời, hai vũ công không bao giờ lệch nhịp; quan hệ này chứng minh hai chương trình vô hạn có hành vi bên ngoài hoàn toàn giống hệt nhau.

**Grammar & collocations:** `construct a coinductive bisimulation` — xây dựng một mô phỏng song hướng đồng quy nạp; `coinductive bisimulation game` — trò chơi mô phỏng song hướng đồng quy nạp; `witnessed by coinductive bisimulation` — được làm chứng bởi mô phỏng song hướng đồng quy nạp.

**Register & nuance:** `concurrency theory, process calculi & formal verification` — công cụ toán học chủ lực của Robin Milner và David Park; phương pháp tiêu chuẩn để chứng minh tính tương đương hành vi của các giao thức mạng, luồng tương tác và tiểu trình đồng thời.

**Examples:** `The security engineers proved that the optimized asynchronous event handler was functionally identical to the reference specification via a coinductive bisimulation.` → Các kỹ sư bảo mật đã chứng minh rằng bộ xử lý sự kiện bất đồng bộ được tối ưu hóa có chức năng giống hệt với đặc tả tham chiếu thông qua một mô phỏng song hướng đồng quy nạp.

**Liên kết tiếng Hàn:** `공귀납적 상호시뮬레이션` (共歸納的 相互simulation) — mô phỏng song hướng đồng quy nạp.

---

## 17. semantic preservation theorem /sɪˈmæntɪk ˌprɛzərˈveɪʃən ˈθiərəm/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là thành tựu trung tâm trong các trình biên dịch được kiểm chứng (ví dụ: `prove the semantic preservation theorem`, `satisfy the semantic preservation theorem`).

**Core meaning — English:** A meta-theoretic theorem asserting that an optimizing compiler transformation or program translation produces target code whose observable execution behavior strictly mirrors the dynamic semantics of the original source program.

**Core meaning & mental image — Tiếng Việt:** Định lý bảo toàn ngữ nghĩa; hãy hình dung một dịch giả chuyển thể một bản trường ca cổ sang một ngôn ngữ hiện đại: định lý bảo toàn ngữ nghĩa là bằng chứng toán học chứng thực rằng không có bất kỳ sắc thái biểu cảm, câu chữ hay ý nghĩa tinh tế nào bị méo mó, thêm thắt hay mất đi qua lăng kính chuyển đổi; trình biên dịch có thể tái sắp xếp hàng ngàn chỉ lệnh để chạy nhanh hơn nhưng hành vi cuối cùng đối với thế giới bên ngoài là bất biến.

**Grammar & collocations:** `establish a semantic preservation theorem` — thiết lập một định lý bảo toàn ngữ nghĩa; `proof of the semantic preservation theorem` — chứng minh định lý bảo toàn ngữ nghĩa; `rely on the semantic preservation theorem` — dựa trên định lý bảo toàn ngữ nghĩa.

**Register & nuance:** `verified compilation & program correctness` — trái tim của các dự án vĩ đại như CompCert và CakeML; xóa bỏ hoàn toàn rủi ro việc trình biên dịch tối ưu hóa vô tình chèn thêm lỗi bảo mật vào mã nhị phân.

**Examples:** `The compiler's semantic preservation theorem guarantees that all memory safety properties verified at the source level remain rigorously intact within the emitted assembly binaries.` → Định lý bảo toàn ngữ nghĩa của trình biên dịch bảo đảm rằng mọi thuộc tính an toàn bộ nhớ được kiểm chứng ở cấp mã nguồn đều được duy trì nguyên vẹn một cách nghiêm ngặt bên trong các mã nhị phân hợp ngữ được phát ra.

**Liên kết tiếng Hàn:** `의미 보존 정리` (意味 保存 定理) — định lý bảo toàn ngữ nghĩa chương trình qua biên dịch.

---

## 18. refinement reflection /rɪˈfaɪnmənt rɪˈflɛkʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm kỹ thuật tự động hóa kết nối mã hàm và chứng minh logic (ví dụ: `enable refinement reflection`, `apply refinement reflection`).

**Core meaning — English:** A formal verification technique that translates user-defined functions into logical formulas within refinement types, allowing automated SMT solvers to reason about deep function properties without manual theorem proving.

**Core meaning & mental image — Tiếng Việt:** Phản xạ kiểu tinh chỉnh; hãy hình dung việc bạn đặt một tấm gương ma thuật trước một đoạn mã hàm: tấm gương lập tức phản chiếu đoạn mã đó thành các phương trình logic thuần khiết mà các cỗ máy giải toán tự động có thể nhìn thấy, phân tích và giải quyết trực tiếp; kỹ thuật này cho phép các lập trình viên bình thường tận hưởng sức mạnh chứng minh toán học mà không cần phải tự tay viết các kịch bản chứng minh phức tạp.

**Grammar & collocations:** `leverage refinement reflection` — tận dụng phản xạ kiểu tinh chỉnh; `principles of refinement reflection` — các nguyên lý của phản xạ kiểu tinh chỉnh; `refinement reflection architecture` — kiến trúc phản xạ kiểu tinh chỉnh.

**Register & nuance:** `Liquid Types & automated formal verification` — phát triển bởi Ranjit Jhala và nhóm Liquid Haskell; thu hẹp khoảng cách giữa lập trình thực tế và các công cụ chứng minh định lý tương tác truyền thống.

**Examples:** `Through refinement reflection, Liquid Haskell reflects recursive data structure definitions directly into the logic of an underlying SMT solver, automating inductive proofs.` → Thông qua phản xạ kiểu tinh chỉnh, Liquid Haskell phản chiếu các định nghĩa cấu trúc dữ liệu đệ quy trực tiếp vào logic của một bộ giải SMT nền tảng, tự động hóa các chứng minh quy nạp.

**Liên kết tiếng Hàn:** `정제 반영 / 정제 반영 기법` (精製 反映 技法) — kỹ thuật phản xạ kiểu tinh chỉnh vào bộ giải logic.

---

## 19. universe polymorphism /ˈjuːnəvɜrs ˌpɑliˈmɔrfɪzəm/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là cơ chế siêu kiểu trừu tượng hóa trên các cấp bậc tầng vũ trụ (ví dụ: `feature universe polymorphism`, `parameterized by universe polymorphism`).

**Core meaning — English:** A language feature in advanced type theories enabling definitions, types, and lemmas to be quantified over hierarchical type universe levels ($Type_u$), preventing paradoxes like Girard's paradox while avoiding code duplication across universe levels.

**Core meaning & mental image — Tiếng Việt:** Đa hình tầng vũ trụ; hãy hình dung một bộ búp bê Nga Matryoshka vô tận: con búp bê nhỏ nằm trong con lớn hơn, con lớn hơn lại nằm trong con lớn hơn nữa để tránh nghịch lý "búp bê chứa chính bản thân nó"; đa hình tầng vũ trụ cho phép bạn viết một công thức toán học một lần duy nhất mà công thức đó có thể áp dụng vừa vặn cho mọi kích cỡ búp bê mà không cần bạn phải sao chép định nghĩa cho từng tầng.

**Grammar & collocations:** `support universe polymorphism` — hỗ trợ đa hình tầng vũ trụ; `universe polymorphism hierarchy` — thứ bậc đa hình tầng vũ trụ; `instantiate universe polymorphism` — cụ thể hóa đa hình tầng vũ trụ.

**Register & nuance:** `pure type systems & foundational proof assistants` — thiết yếu trong Lean và Coq để quản lý các cấu trúc toán học lớn như phạm trù học (category theory), nơi "phạm trù của mọi tập hợp" đòi hỏi phải sống ở một tầng vũ trụ cao hơn các tập hợp thông thường.

**Examples:** `Universe polymorphism allows category theory libraries in Lean to define functors across arbitrary universe levels without triggering logical inconsistencies.` → Đa hình tầng vũ trụ cho phép các thư viện lý thuyết phạm trù trong Lean định nghĩa các functor qua các tầng vũ trụ tùy ý mà không kích hoạt các mâu thuẫn logic.

**Liên kết tiếng Hàn:** `우주 다형성 / 유니버스 다형성` (宇宙 多形性) — tính đa hình trên các tầng vũ trụ kiểu dữ liệu.

---

## 20. de Bruijn criterion /də ˈbrɔɪn kraɪˈtɪriən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tiêu chuẩn thiết kế kiến trúc cho độ tin cậy của trợ lý chứng minh (ví dụ: `adhere to the de Bruijn criterion`, `satisfy the de Bruijn criterion`).

**Core meaning — English:** The foundational architectural principle that a proof assistant must rely on a tiny, isolated, and easily auditable logical kernel to validate proofs, ensuring that the correctness of verified theorems does not depend on the correctness of large elaboration or tactic engines.

**Core meaning & mental image — Tiếng Việt:** Tiêu chuẩn de Bruijn; hãy hình dung một ngân hàng khổng lồ có hàng ngàn nhân viên tư vấn, môi giới và kế toán viên tác nghiệp phức tạp bên ngoài; nhưng chiếc két sắt ngầm chứa vàng ở tầng hầm chỉ do đúng một người gác cổng già duy nhất nắm giữ chìa khóa và kiểm tra độc lập; dù các nhân viên bên ngoài có mắc sai sót gì chăng nữa, người gác cổng ở nhân cốt lõi sẽ lập tức chặn lại và không bao giờ để vàng giả lọt vào két.

**Grammar & collocations:** `conform to the de Bruijn criterion` — tuân thủ tiêu chuẩn de Bruijn; `implement the de Bruijn criterion` — triển khai tiêu chuẩn de Bruijn; `philosophical virtue of the de Bruijn criterion` — ưu điểm triết học của tiêu chuẩn de Bruijn.

**Register & nuance:** `proof assistant architecture & metamathematics` — đặt theo tên nhà toán học Nicolaas Govert de Bruijn (người sáng tạo hệ thống Automath); phân biệt rõ giữa "tìm kiếm chứng minh" (có thể dùng thuật toán khổng lồ, không cần tin cậy) và "kiểm tra chứng minh" (phải dùng nhân siêu nhỏ, được kiểm toán cẩn mật).

**Examples:** `Because the interactive theorem prover strictly adheres to the de Bruijn criterion, a bug in the automated tactic generator cannot compromise the mathematical validity of checked proofs.` → Bởi vì trợ lý chứng minh định lý tương tác tuân thủ nghiêm ngặt tiêu chuẩn de Bruijn, một lỗi trong bộ sinh chiến thuật tự động không thể làm tổn hại tính hợp lệ toán học của các chứng minh đã được kiểm tra.

**Liên kết tiếng Hàn:** `드 브라위헌 기준` (de Bruijn 基準) — tiêu chuẩn thiết kế nhân kiểm tra chứng minh tối thiểu de Bruijn.

---

## 21. decidability procedure /dɪˌsaɪdəˈbɪləti prəˈsiːdʒər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là thuật toán tất định giải quyết vị từ logic (ví dụ: `implement a decidability procedure`, `invoke a decidability procedure`).

**Core meaning — English:** An effective, terminating computational algorithm capable of determining in finite time whether any given instance of a specific mathematical property or predicate evaluates to true or false.

**Core meaning & mental image — Tiếng Việt:** Thủ tục tính quyết định được; hãy hình dung một chiếc máy quét đèn xanh - đèn đỏ tự động: khi bạn đưa bất kỳ câu hỏi logic nào thuộc một lớp bài toán cụ thể vào máy, máy được bảo đảm toán học là sẽ không bao giờ bị đơ hay suy nghĩ vô tận, mà chắc chắn sẽ bật đèn xanh (đúng) hoặc đèn đỏ (sai) sau một khoảng thời gian hữu hạn.

**Grammar & collocations:** `construct an effective decidability procedure` — xây dựng một thủ tục tính quyết định được hữu hiệu; `decidability procedure for subtyping` — thủ tục tính quyết định được cho quan hệ kiểu con; `guaranteed by a decidability procedure` — được bảo đảm bởi một thủ tục tính quyết định được.

**Register & nuance:** `computability theory & formal logic` — trong toán học kiến tạo, một vị từ $P$ được gọi là decidable nếu ta có thể kiến tạo được một hàm tính toán trả về giá trị boolean cùng chứng minh đi kèm; đối lập với các bài toán bất khả quyết định (undecidable) như bài toán dừng của Turing.

**Examples:** `The proof assistant relies on an automated decidability procedure to effortlessly resolve syntactic equivalence between complex type expressions.` → Trợ lý chứng minh dựa vào một thủ tục tính quyết định được tự động để giải quyết dễ dàng sự tương đương cú pháp giữa các biểu thức kiểu phức tạp.

**Liên kết tiếng Hàn:** `결정가능성 절차` (決定可能性 節次) — thủ tục / thuật toán quyết định tính đúng sai hữu hạn.

---

## 22. axiom of functional extensionality /ˈæksiəm ʌv ˈfʌŋkʃənəl ˌɛkstɛnʃəˈnæləti/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là tiên đề mở rộng trong các hệ thống logic nội hàm (ví dụ: `assume the axiom of functional extensionality`, `require the axiom of functional extensionality`).

**Core meaning — English:** The mathematical principle asserting that two functions are identical if and only if they produce identical outputs for every possible input argument, equating behavioral equivalence with formal propositional equality.

**Core meaning & mental image — Tiếng Việt:** Tiên đề ngoại diên hàm; hãy hình dung hai chiếc máy chế biến cà phê: một máy sử dụng bánh răng đồng cổ điển, một máy sử dụng vi mạch điện tử siêu hiện đại bên trong; tuy nhiên, với mọi loại hạt cà phê đưa vào, cả hai máy đều cho ra những tách cà phê có hương vị, thể tích và nhiệt độ giống hệt nhau đến từng phân tử; tiên đề ngoại diên hàm tuyên bố rằng hai chiếc máy đó về bản chất toán học là một.

**Grammar & collocations:** `postulate the axiom of functional extensionality` — thừa nhận tiên đề ngoại diên hàm; `independence of the axiom of functional extensionality` — tính độc lập của tiên đề ngoại diên hàm; `apply the axiom of functional extensionality` — áp dụng tiên đề ngoại diên hàm.

**Register & nuance:** `foundational logic & intensional type theories` — trong lý thuyết kiểu nội hàm thuần túy (như Martin-Löf type theory), hai hàm có cùng bảng giá trị không tự động bằng nhau nếu chúng có cấu trúc mã khác nhau; tiên đề này bổ sung cầu nối cần thiết để thống nhất chúng.

**Examples:** `Without introducing the axiom of functional extensionality, one cannot formally prove that two distinct sorting algorithms yielding identical outputs are propositionally equal.` → Nếu không đưa vào tiên đề ngoại diên hàm, người ta không thể chứng minh hình thức rằng hai thuật toán sắp xếp khác nhau nhưng tạo ra các đầu ra giống hệt nhau là bằng nhau theo mệnh đề.

**Liên kết tiếng Hàn:** `함수 외연성 공리` (函數 外延性 公理) — tiên đề tính ngoại diên của hàm số.

---

## 23. conservativity proof /kənˌsɜrvəˈtɪvəti pruːf/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm đối tượng chứng minh meta-logic khi mở rộng hệ thống (ví dụ: `deliver a conservativity proof`, `establish a conservativity proof`).

**Core meaning — English:** A formal meta-mathematical demonstration establishing that extending a logical system with new axioms or language primitives does not make any previously unprovable statements in the original base language provable.

**Core meaning & mental image — Tiếng Việt:** Chứng minh tính bảo thủ / chứng minh tính bảo toàn logic; hãy hình dung bạn mở rộng một khu bảo tồn thiên nhiên bằng cách xây thêm một phòng trưng bày nghệ thuật ở cổng vào: chứng minh tính bảo toàn bảo đảm rằng việc bổ sung phòng tranh này hoàn toàn không làm xáo trộn cuộc sống hoang dã tự nhiên bên trong khu rừng, và bất kỳ định luật sinh thái cũ nào vẫn giữ nguyên giá trị mà không sinh ra các hiện tượng kỳ dị mới.

**Grammar & collocations:** `construct a rigorous conservativity proof` — xây dựng một chứng minh tính bảo thủ nghiêm ngặt; `conservativity proof of an extension` — chứng minh tính bảo thủ của một phần mở rộng; `rely upon a conservativity proof` — dựa vào một chứng minh tính bảo thủ.

**Register & nuance:** `proof theory & foundational metamathematics` — bảo đảm rằng việc thêm các tiên đề tiện ích (như functional extensionality hay choice) không dẫn đến mâu thuẫn (inconsistency) trong ngôn ngữ gốc.

**Examples:** `The logicians published a groundbreaking conservativity proof confirming that adding classical axioms to their constructive framework preserved the computational consistency of all numeric extractions.` → Các nhà logic học đã công bố một chứng minh tính bảo thủ mang tính đột phá xác nhận rằng việc thêm các tiên đề cổ điển vào khung kiến tạo của họ vẫn bảo tồn tính nhất quán tính toán của mọi phép trích xuất số học.

**Liên kết tiếng Hàn:** `보존성 증명` (保存性 證明) — chứng minh tính bảo thủ / bảo tồn logic của lý thuyết mở rộng.

---

## 24. automated goal discharge /ˈɔtəmeɪtɪd ɡoʊl ˈdɪstʃɑrdʒ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là mục tiêu hoặc thành tựu trong tự động hóa kịch bản chứng minh (ví dụ: `achieve automated goal discharge`, `rely on automated goal discharge`).

**Core meaning — English:** The successful, hands-free resolution and elimination of intermediate proof obligations or open subgoals within a proof assistant by algorithmic decision procedures and tactics without requiring manual user intervention.

**Core meaning & mental image — Tiếng Việt:** Sự xả mục tiêu tự động / giải quyết mục tiêu tự động; hãy hình dung bạn đang đứng trước một màn hình radar hiển thị 50 chấm đỏ đe dọa (các nghĩa vụ chứng minh con); thay vì phải tự tay ngắm bắn từng chấm, bạn nhấn nút kích hoạt hệ thống phòng thủ tự động: hệ thống quét qua toàn bộ, bắn hạ đồng loạt 48 chấm đỏ vụn vặt trong chớp mắt, giải phóng toàn bộ tâm trí của bạn để tập trung xử lý 2 mục tiêu chiến lược cốt lõi nhất.

**Grammar & collocations:** `facilitate automated goal discharge` — tạo điều kiện cho việc xả mục tiêu tự động; `rate of automated goal discharge` — tỷ lệ xả mục tiêu tự động; `leverage automated goal discharge` — tận dụng việc giải quyết mục tiêu tự động.

**Register & nuance:** `mechanized proof engineering & interactive proving` — yếu tố quyết định năng suất làm việc của các kỹ sư xác minh phần mềm; giảm thiểu hàng vạn dòng kịch bản chứng minh thủ công dễ gãy.

**Examples:** `Advanced tactic metaprograms enabled automated goal discharge for over ninety percent of the routine inductive cases generated during protocol verification.` → Các siêu chương trình chiến thuật tiên tiến đã cho phép giải quyết mục tiêu tự động cho hơn chín mươi phần trăm các trường hợp quy nạp thông thường phát sinh trong quá trình xác minh giao thức.

**Liên kết tiếng Hàn:** `자동화된 목표 해소` (自動化된 目標 解消) — sự giải quyết mục tiêu con tự động trong chứng minh máy.

---

## 25. witness extraction /ˈwɪtnəs ɪkˈstrækʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm giai đoạn cuối cùng trong quy trình phần mềm được kiểm chứng (ví dụ: `perform witness extraction`, `rely on witness extraction`).

**Core meaning — English:** The algorithmic derivation and extraction of an executable computational object, counterexample, or constructive algorithm embedded within a validated mathematical existential proof.

**Core meaning & mental image — Tiếng Việt:** Sự trích xuất nhân chứng / trích xuất đối tượng chứng thực; hãy hình dung bạn có một bản đồ kho báu chứng minh chắc chắn rằng "tồn tại một chiếc rương vàng chôn dưới gốc cây sồi": trích xuất nhân chứng giống như việc biến lời khẳng định trừu tượng đó thành một cánh tay cơ khí đào thẳng xuống đất và nhấc chiếc rương vàng thật đặt lên bàn; trong logic kiến tạo, khi bạn chứng minh một vật tồn tại, thuật toán có thể rút ra chính vật đó để sử dụng trực tiếp.

**Grammar & collocations:** `enable witness extraction` — cho phép trích xuất nhân chứng; `witness extraction algorithm` — thuật toán trích xuất nhân chứng; `constructive witness extraction` — sự trích xuất nhân chứng mang tính kiến tạo.

**Register & nuance:** `constructive mathematics, synthesis & verified software` — đặc trưng của logic kiến tạo (constructive logic) nơi chứng minh mệnh đề $\exists x. P(x)$ bắt buộc phải chứa một giá trị $x$ cụ thể cùng chứng minh $P(x)$, cho phép tổng hợp chương trình trực tiếp từ đặc tả.

**Examples:** `Because the existential assertion was formulated constructively, the theorem prover performed automated witness extraction to synthesize a certified sorting function.` → Bởi vì khẳng định tồn tại được xây dựng theo lối kiến tạo, trợ lý chứng minh định lý đã thực hiện việc trích xuất nhân chứng tự động để tổng hợp ra một hàm sắp xếp đã được cấp chứng nhận.

**Liên kết tiếng Hàn:** `증거자 추출` (證據者 抽出) — sự trích xuất nhân chứng / đối tượng cụ thể từ chứng minh tồn tại.

---

## Review in context (Part 1: Foundational Type Systems, Interactive Proving, and Proof Theory)

Formal methods have revolutionized our capacity to guarantee system correctness at the most fundamental level. Grounded philosophically in the **Curry-Howard isomorphism**, modern proof engineering treats specifications as types and functioning algorithms as their mathematical justifications. By advancing into **dependent type theory**, designers can express sophisticated invariant relationships directly within code signatures. Within these mechanized environments, defining an **inductive type family** allows practitioners to construct nuanced data structures where types vary according to computational indices. To deploy these verified artifacts across distributed environments without requiring blind faith, architects construct a **proof-carrying code infrastructure** that allows hosts to validate untrusted binaries via standalone checkers. For reactive architectures and operating system components operating over infinite runtimes, engineers formalize a **mechanized coinductive invariant** to ensure that safety properties remain perpetually unbroken across continuous execution streams. Every resulting artifact delivers an ironclad **soundness guarantee**, certifying that admitted theorems correspond to genuine truths. When embarking upon high-assurance projects, researchers collaborate within an **interactive theorem prover**, interacting with deductive engines to incrementally conquer daunting conjectures. To eliminate manual drudgery across routine algebraic manipulations, the author invokes a specialized **SMT solver tactic** that delegates intermediate arithmetic constraints to automated external engines. The engine evaluates computational identities automatically whenever two expressions align by **definitional equality**, avoiding unnecessary proof overhead. When establishing equivalence between logically interchangeable statements, the proof engineer applies **propositional extensionality** to substitute interchangeable formulas seamlessly. At the same time, maintaining **proof irrelevance** ensures that the system disregards the exact derivation details of logical propositions, dramatically reducing proof footprint. Together, these unified capabilities enable the rigorous, end-to-end **mechanized formalization** of complex software systems down to primitive axiomatic roots.

**Bản dịch tiếng Việt:**

Các phương pháp hình thức đã tạo nên một cuộc cách mạng trong năng lực bảo đảm tính đúng đắn của hệ thống ở cấp độ nền tảng nhất. Được xây dựng về mặt triết học dựa trên **đẳng cấu Curry-Howard**, kỹ thuật chứng minh hiện đại xử lý các đặc tả như các kiểu dữ liệu và các thuật toán hoạt động như những lời biện minh toán học của chúng. Bằng cách tiến lên **lý thuyết kiểu phụ thuộc**, các nhà thiết kế có thể diễn đạt các mối quan hệ bất biến phức tạp trực tiếp bên trong chữ ký mã. Bên trong các môi trường cơ giới hóa này, việc định nghĩa một **họ kiểu quy nạp** cho phép các học viên xây dựng các cấu trúc dữ liệu tinh tế nơi các kiểu thay đổi theo các chỉ số tính toán. Để triển khai các tạo tác đã được kiểm chứng này trên các môi trường phân tán mà không đòi hỏi niềm tin mù quáng, các kiến trúc sư xây dựng một **cơ sở hạ tầng mã mang chứng minh** cho phép các máy chủ thẩm định các mã nhị phân không tin cậy thông qua các bộ kiểm tra độc lập. Đối với các kiến trúc phản ứng và các thành phần hệ điều hành hoạt động trên các thời gian chạy vô hạn, các kỹ sư hình thức hóa một **bất biến đồng quy nạp cơ giới hóa** để bảo đảm rằng các thuộc tính an toàn luôn được duy trì liên tục qua các luồng thực thi liên tục. Mỗi tạo tác kết quả đều mang lại một **sự bảo đảm tính vững chắc** đanh thép, chứng nhận rằng các định lý được công nhận tương ứng với những chân lý thực sự. Khi bắt tay vào các dự án có độ tin cậy cao, các nhà nghiên cứu cộng tác bên trong một **trợ lý chứng minh định lý tương tác**, tương tác với các công cụ suy luận để từng bước chinh phục các giả thuyết cam go. Để loại bỏ sự cực nhọc thủ công qua các biến đổi đại số thông thường, tác giả viện dẫn một **chiến thuật bộ giải SMT** chuyên dụng nhằm ủy quyền các ràng buộc số học trung gian cho các công cụ tự động bên ngoài. Công cụ đánh giá các đồng nhất thức tính toán một cách tự động bất cứ khi nào hai biểu thức căn chỉnh bằng **đẳng thức định nghĩa**, tránh được các chi phí chứng minh không cần thiết. Khi thiết lập sự tương đương giữa các phát biểu có thể hoán đổi logic cho nhau, kỹ sư chứng minh áp dụng **tính ngoại diên mệnh đề** để thay thế các công thức có thể hoán đổi một cách liền mạch. Đồng thời, việc duy trì **tính bất liên quan của chứng minh** bảo đảm rằng hệ thống bỏ qua các chi tiết dẫn xuất chính xác của các mệnh đề logic, làm giảm đáng kể dấu chân chứng minh. Cùng nhau, các năng lực thống nhất này cho phép **sự hình thức hóa cơ giới hóa** nghiêm ngặt từ đầu đến cuối của các hệ thống phần mềm phức tạp xuống tận các gốc rễ tiên đề nguyên thủy.

---

## Review in context (Part 2: Operational Semantics, Invariants, and Extraction)

Bridging the gap between pure mathematical proof and production execution requires a sophisticated semantic apparatus. Under constructive type systems, establishing that a proposition holds is achieved by demonstrating the concrete construction of a valid **type inhabitant**. Once properties are verified, the compilation toolchain invokes **erasure semantics** to discard computational proofs and phantom types, emitting lean executables completely devoid of runtime verification overhead. When defining complex recursive algorithms that cannot be checked by rudimentary structural decreasing rules, developers prove termination through **well-founded recursion**, tracking formal metrics that strictly decrease toward a well-ordered base. For continuously interacting concurrent processes, behavioral equivalence is established via **coinductive bisimulation**, matching observable interaction traces across infinite temporal sequences. To guarantee that low-level optimizations do not introduce security regressions, the verified compiler satisfies an overarching **semantic preservation theorem**, ensuring that emitted machine code faithfully reflects the behavioral contracts of the high-level source. Bridging the developer workflow with automated solvers, **refinement reflection** turns recursive functional definitions into logical formulas digestible by automated solvers. When architecting foundational mathematical libraries, adopting **universe polymorphism** prevents type-theoretic paradoxes while allowing polymorphic structures to scale across infinite hierarchical levels. To safeguard the entire verification pipeline against implementation flaws, modern engines adhere strictly to the **de Bruijn criterion**, isolating proof verification within a minimal, auditable logical core. Whenever an algorithm requires runtime validation of finite conditions, developers supply an automated **decidability procedure** that guarantees a deterministic true or false judgment. In handling higher-order functional mappings, asserting equivalence requires the **axiom of functional extensionality**, establishing that identical point-wise behaviors guarantee structural identity. When augmenting type systems with these non-computational principles, logicians validate their additions via a formal **conservativity proof**, ensuring that existing constructive theorems remain uncorrupted. During daily verification workflows, sophisticated metaprograms facilitate massive **automated goal discharge**, resolving routine subgoals in milliseconds. Finally, constructive logic fulfills its engineering promise through automated **witness extraction**, distilling proven existential guarantees into real-world, executable programs.

**Bản dịch tiếng Việt:**

Thu hẹp khoảng cách giữa chứng minh toán học thuần túy và việc thực thi trong môi trường sản xuất đòi hỏi một bộ máy ngữ nghĩa tinh vi. Dưới các hệ thống kiểu kiến tạo, việc thiết lập một mệnh đề đúng đắn đạt được bằng cách chứng minh sự kiến tạo cụ thể của một **cư dân của kiểu** hợp lệ. Một khi các thuộc tính đã được kiểm chứng, chuỗi công cụ biên dịch sẽ viện dẫn **ngữ nghĩa học xóa bỏ** để loại bỏ các chứng minh tính toán và các kiểu bóng ma, phát ra các tệp thực thi tinh gọn hoàn toàn không có chi phí xác minh thời gian chạy. Khi định nghĩa các thuật toán đệ quy phức tạp không thể kiểm tra bằng các quy tắc giảm cấu trúc thô sơ, các nhà phát triển chứng minh sự kết thúc thông qua **đệ quy trên quan hệ nền tảng tốt**, theo dõi các thước đo hình thức giảm nghiêm ngặt về phía một đáy có thứ tự tốt. Đối với các tiến trình đồng thời tương tác liên tục, sự tương đương hành vi được thiết lập thông qua **mô phỏng song hướng đồng quy nạp**, khớp các vết tương tác có thể quan sát được qua các chuỗi thời gian vô hạn. Để bảo đảm rằng các tối ưu hóa cấp thấp không gây ra các thoái lui bảo mật, trình biên dịch được kiểm chứng thỏa mãn một **định lý bảo toàn ngữ nghĩa** bao trùm, bảo đảm rằng mã máy được phát ra phản ánh trung thực các hợp đồng hành vi của mã nguồn cấp cao. Kết nối quy trình làm việc của nhà phát triển với các bộ giải tự động, **phản xạ kiểu tinh chỉnh** biến các định nghĩa hàm đệ quy thành các công thức logic mà các bộ giải tự động có thể hiểu được. Khi kiến trúc các thư viện toán học nền tảng, việc áp dụng **đa hình tầng vũ trụ** giúp ngăn ngừa các nghịch lý lý thuyết kiểu trong khi cho phép các cấu trúc đa hình mở rộng qua các tầng thứ bậc vô hạn. Để bảo vệ toàn bộ đường ống xác minh khỏi các khiếm khuyết triển khai, các công cụ hiện đại tuân thủ nghiêm ngặt **tiêu chuẩn de Bruijn**, cô lập việc xác minh chứng minh bên trong một nhân logic tối thiểu, có thể kiểm toán được. Bất cứ khi nào một thuật toán đòi hỏi xác minh thời gian chạy của các điều kiện hữu hạn, các nhà phát triển cung cấp một **thủ tục tính quyết định được** tự động bảo đảm phán đoán đúng hoặc sai tất định. Trong việc xử lý các ánh xạ hàm bậc cao, việc khẳng định sự tương đương đòi hỏi **tiên đề ngoại diên hàm**, thiết lập rằng các hành vi giống hệt nhau trên từng điểm bảo đảm tính đồng nhất về cấu trúc. Khi tăng cường các hệ thống kiểu bằng các nguyên lý phi tính toán này, các nhà logic học thẩm định các bổ sung của họ thông qua một **chứng minh tính bảo thủ** hình thức, bảo đảm rằng các định lý kiến tạo hiện có vẫn không bị làm sai lệch. Trong các quy trình làm việc xác minh hàng ngày, các siêu chương trình tinh vi tạo điều kiện cho **sự xả mục tiêu tự động** ồ ạt, giải quyết các mục tiêu con thông thường trong vài phần nghìn giây. Cuối cùng, logic kiến tạo hoàn thành lời hứa kỹ thuật của mình thông qua **sự trích xuất nhân chứng** tự động, chắt lọc các bảo đảm tồn tại đã được chứng minh thành các chương trình thực thi trong thế giới thực.
