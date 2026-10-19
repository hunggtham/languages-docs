# C2 Vocabulary 212 — Denotational formal semantics, monadic parser combinators, and coinductive corecursive types

## 1. denotational semantic domain
- **IPA:** /ˌdiːnəˈteɪʃənəl səˈmæntɪk doʊˈmeɪn/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); thường làm chủ ngữ hoặc tân ngữ trong ngữ nghĩa học lập trình.
- **Core meaning — English:** A mathematical structure consisting of semantic values and complete partial orders used to assign exact mathematical meanings to computer program constructs.
- **Core meaning & mental image — Tiếng Việt:** Miền ngữ nghĩa ký hiệu. Hình ảnh: Một không gian toán học trừu tượng được quy hoạch cẩn thận, nơi mỗi đoạn mã lập trình được ánh xạ chính xác thành một đối tượng hoặc hàm số toán học.
- **Grammar & collocations:**
  - define a denotational semantic domain (định nghĩa một miền ngữ nghĩa ký hiệu)
  - continuous denotational semantic domain (miền ngữ nghĩa ký hiệu liên tục)
  - domain theory in denotational semantic domains (lý thuyết miền trong các miền ngữ nghĩa ký hiệu)
- **Register & nuance:** Advanced theoretical computer science, compiler design, and programming language semantics.
- **Examples:**
  - *Example 1:* Proving program correctness requires constructing a rigorous denotational semantic domain for every syntactic category. (Việc chứng minh tính đúng đắn của chương trình đòi hỏi việc xây dựng một miền ngữ nghĩa ký hiệu nghiêm ngặt cho mọi danh mục cú pháp.)
  - *Example 2:* Scott domains provide the foundational mathematical framework for denotational semantic domains. (Các miền Scott cung cấp khung toán học nền tảng cho các miền ngữ nghĩa ký hiệu.)
- **Liên kết tiếng Hàn:** 표시적 의미론적 영역 (表示的 意味論的 領域) — Miền toán học dùng để biểu diễn ngữ nghĩa của chương trình máy tính.

## 2. monadic parser combinator
- **IPA:** /məˈnædɪk ˈpɑːrsər ˈkɑːmbɪˌneɪtər/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); chỉ kỹ thuật thiết kế bộ phân tích cú pháp trong lập trình hàm.
- **Core meaning — English:** A higher-order function that combines smaller parsing functions using monadic operations to construct complex, composable parsers for formal grammars.
- **Core meaning & mental image — Tiếng Việt:** Bộ kết hợp phân tích cú pháp đơn tử (monad). Hình ảnh: Những khối Lego chức năng nhỏ gọn được ghép nối khéo léo với nhau bằng các nguyên tắc đơn tử để tạo thành một cỗ máy đọc hiểu cú pháp phức tạp.
- **Grammar & collocations:**
  - build a monadic parser combinator (xây dựng bộ kết hợp phân tích cú pháp đơn tử)
  - elegant monadic parser combinator library (thư viện bộ kết hợp phân tích cú pháp đơn tử thanh lịch)
  - parse text with monadic parser combinators (phân tích văn bản bằng các bộ kết hợp phân tích cú pháp đơn tử)
- **Register & nuance:** Functional programming, compiler construction (Haskell, Scala, Rust parser libraries).
- **Examples:**
  - *Example 1:* The compiler frontend utilizes a monadic parser combinator library to translate source code into abstract syntax trees. (Phần đầu của trình biên dịch sử dụng thư viện bộ kết hợp phân tích cú pháp đơn tử để dịch mã nguồn thành các cây cú pháp trừu tượng.)
  - *Example 2:* Monadic parser combinators make writing recursive descent parsers modular and maintainable. (Bộ kết hợp phân tích cú pháp đơn tử giúp việc viết các bộ phân tích cú pháp đệ quy xuống trở nên mô-đun hóa và dễ bảo trì.)
- **Liên kết tiếng Hàn:** 모나딕 파서 결합자 (monadic parser 結合子) — Hàm bậc cao kết hợp các bộ phân tích cú pháp dựa trên cấu trúc monad.

## 3. coinductive stream corecursion
- **IPA:** /ˌkoʊɪnˈdʌktɪv striːm koʊˈkɜːrʒən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); chỉ phương pháp sinh dữ liệu vô hạn trong lý thuyết kiểu.
- **Core meaning — English:** A method of defining infinite data streams and infinite structures through corecursion, dual to structural induction, allowing productive infinite computations.
- **Core meaning & mental image — Tiếng Việt:** Đệ quy đồng sinh dòng dữ liệu đồng quy nạp. Hình ảnh: Một dòng suối chảy vô tận không bao giờ cạn, nơi mỗi giọt nước tiếp theo được sinh ra từ trạng thái hiện tại một cách đều đặn và có năng suất.
- **Grammar & collocations:**
  - implement coinductive stream corecursion (triển khai đệ quy đồng sinh dòng dữ liệu đồng quy nạp)
  - productive coinductive stream corecursion (đệ quy đồng sinh dòng dữ liệu đồng quy nạp có năng suất)
  - reasoning about coinductive stream corecursion (lập luận về đệ quy đồng sinh dòng dữ liệu đồng quy nạp)
- **Register & nuance:** Advanced type theory, proof assistants (Coq, Agda), and functional programming semantics.
- **Examples:**
  - *Example 1:* Generating infinite sequences of prime numbers safely in total functional languages relies on coinductive stream corecursion. (Việc sinh các chuỗi số nguyên tố vô hạn một cách an toàn trong các ngôn ngữ hàm toàn phần dựa vào đệ quy đồng sinh dòng dữ liệu đồng quy nạp.)
  - *Example 2:* Coinductive stream corecursion guarantees productivity, ensuring that every finite prefix of the stream can be computed in finite time. (Đệ quy đồng sinh dòng dữ liệu đồng quy nạp đảm bảo tính năng suất, bảo đảm mọi tiền tố hữu hạn của dòng có thể được tính toán trong thời gian hữu hạn.)
- **Liên kết tiếng Hàn:** 코귀납적 스트림 코재귀 (coinductive stream corecursion) — Phép sinh cấu trúc dữ liệu vô hạn thông qua đồng quy nạp.

## 4. structural operational semantics
- **IPA:** /ˈstrʌktʃərəl ˌɑːpəˈreɪʃənl səˈmæntɪks/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); mô tả ngữ nghĩa thực thi dựa trên cấu trúc cú pháp.
- **Core meaning — English:** A formal approach to defining programming language semantics by specifying transitions between program states using syntax-directed inference rules (small-step semantics).
- **Core meaning & mental image — Tiếng Việt:** Ngữ nghĩa vận hành cấu trúc. Hình ảnh: Sổ tay hướng dẫn từng bước chi tiết, chỉ rõ cách từng cấu trúc câu lệnh của ngôn ngữ làm thay đổi trạng thái của máy tính.
- **Grammar & collocations:**
  - specify structural operational semantics (chỉ định ngữ nghĩa vận hành cấu trúc)
  - structural operational semantics rules (các quy tắc ngữ nghĩa vận hành cấu trúc)
  - formalize structural operational semantics (hình thức hóa ngữ nghĩa vận hành cấu trúc)
- **Register & nuance:** Formal methods, compiler verification, and programming language theory.
- **Examples:**
  - *Example 1:* Plotkin introduced structural operational semantics to give unambiguous meaning to programming language evaluation steps. (Plotkin đã giới thiệu ngữ nghĩa vận hành cấu trúc để mang lại ý nghĩa không mơ hồ cho các bước đánh giá ngôn ngữ lập trình.)
  - *Example 2:* Type safety proofs often depend on preservation and progress lemmas formulated within structural operational semantics. (Các chứng minh an toàn kiểu thường phụ thuộc vào các bổ đề bảo tồn và tiến triển được hình thành trong ngữ nghĩa vận hành cấu trúc.)
- **Liên kết tiếng Hàn:** 구조적 조작적 의미론 (構造的 操作的 意味論) — Ngữ nghĩa học hình thức định nghĩa qua các quy tắc suy luận theo cấu trúc cú pháp.

## 5. bisimulation equivalence proof
- **IPA:** /ˌbaɪsɪmjuˈleɪʃən ɪˈkwɪvələns pruːf/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); chứng minh tính tương đương song mô phỏng.
- **Core meaning — English:** A rigorous mathematical demonstration that two state transition systems or coinductive processes can mimic each other's behavior step-for-step.
- **Core meaning & mental image — Tiếng Việt:** Chứng minh tương đương song mô phỏng. Hình ảnh: Hai chiếc bóng phản chiếu lẫn nhau qua một tấm gương, mọi cử động của bên này đều được bên kia tái hiện hoàn hảo từng bước một.
- **Grammar & collocations:**
  - conduct a bisimulation equivalence proof (tiến hành chứng minh tương đương song mô phỏng)
  - automated bisimulation equivalence proof (chứng minh tương đương song mô phỏng tự động)
  - verify via bisimulation equivalence proofs (xác minh thông qua các chứng minh tương đương song mô phỏng)
- **Register & nuance:** Concurrency theory, process calculi, and formal verification of reactive systems.
- **Examples:**
  - *Example 1:* The compiler optimization was validated using a comprehensive bisimulation equivalence proof between the source and target ASTs. (Việc tối ưu hóa trình biên dịch được xác thực bằng chứng minh tương đương song mô phỏng toàn diện giữa cây cú pháp nguồn và đích.)
  - *Example 2:* Establishing a bisimulation equivalence proof for infinite state systems can be undecidable in the general case. (Việc thiết lập chứng minh tương đương song mô phỏng cho các hệ thống trạng thái vô hạn có thể không giải quyết được trong trường hợp tổng quát.)
- **Liên kết tiếng Hàn:** 이중 모사 동치 증명 (二重 摸寫 同値 証明) — Phép chứng minh hai hệ thống chuyển đổi trạng thái mô phỏng lẫn nhau.

## 6. complete partial order lattice
- **IPA:** /kəmˈpliːt ˈpɑːrʃəl ˈɔːrdər ˈlætɪs/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); cấu trúc đại số trong lý thuyết miền.
- **Core meaning — English:** A partially ordered set in which every directed subset has a least upper bound, forming the mathematical foundation for recursion and fixed-point semantics.
- **Core meaning & mental image — Tiếng Việt:** Lưới thứ tự bộ phận đầy đủ. Hình ảnh: Một tấm lưới kim loại đa chiều có điểm thấp nhất và mọi tập con đều có điểm trần thấp nhất kết nối chặt chẽ với nhau.
- **Grammar & collocations:**
  - algebraic complete partial order lattice (lưới thứ tự bộ phận đầy đủ đại số)
  - properties of a complete partial order lattice (các tính chất của lưới thứ tự bộ phận đầy đủ)
  - chain-complete partial order lattice (lưới thứ tự bộ phận đầy đủ theo chuỗi)
- **Register & nuance:** Domain theory, denotational semantics, and mathematical logic.
- **Examples:**
  - *Example 1:* Recursive functions are interpreted as fixed points of continuous functionals defined over a complete partial order lattice. (Các hàm đệ quy được diễn giải như các điểm cố định của các hàm phiếm hàm liên tục được định nghĩa trên lưới thứ tự bộ phận đầy đủ.)
  - *Example 2:* Ensuring that data types form a complete partial order lattice allows computer scientists to model general recursion safely. (Việc đảm bảo các kiểu dữ liệu tạo thành lưới thứ tự bộ phận đầy đủ cho phép các nhà khoa học máy tính mô hình hóa đệ quy chung một cách an toàn.)
- **Liên kết tiếng Hàn:** 완비 부분 순서 격자 (完備 部分 順序 格子) — Cấu trúc toán học cơ sở cho lý thuyết miền và đệ quy.

## 7. Kleene fixed-point theorem
- **IPA:** /ˈkliːni fɪkst pɔɪnt ˈθɪərəm/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); định lý điểm cố định Kleene.
- **Core meaning — English:** A mathematical theorem stating that every continuous function on a complete partial order with a bottom element has a least fixed point obtainable by iterating the function.
- **Core meaning & mental image — Tiếng Việt:** Định lý điểm cố định Kleene. Hình ảnh: Quá trình lặp đi lặp lại việc nhúng một biểu thức vào chính nó cho đến khi đạt được điểm cân bằng ổn định không thay đổi nữa.
- **Grammar & collocations:**
  - apply the Kleene fixed-point theorem (áp dụng định lý điểm cố định Kleene)
  - proof using the Kleene fixed-point theorem (chứng minh sử dụng định lý điểm cố định Kleene)
  - consequence of the Kleene fixed-point theorem (hệ quả của định lý điểm cố định Kleene)
- **Register & nuance:** Denotational semantics, program analysis, and theoretical computer science.
- **Examples:**
  - *Example 1:* The semantics of recursive loops are formally defined using the Kleene fixed-point theorem over program state transformers. (Ngữ nghĩa của các vòng lặp đệ quy được định nghĩa hình thức bằng cách sử dụng định lý điểm cố định Kleene trên các bộ biến đổi trạng thái chương trình.)
  - *Example 2:* By invoking the Kleene fixed-point theorem, we guarantee that iterative abstract interpretation converges finitely. (Bằng cách viện dẫn định lý điểm cố định Kleene, chúng ta đảm bảo rằng sự diễn giải trừu tượng lặp hội tụ hữu hạn.)
- **Liên kết tiếng Hàn:** 클리니 고정점 정리 (Kleene 固定点 定理) — Định lý toán học xác định điểm cố định của hàm liên tục trên miền có thứ tự.

## 8. monadic failure and backtracking
- **IPA:** /məˈnædɪk ˈfeɪljər ənd ˈbæktrækɪŋ/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); cơ chế xử lý lỗi và quay lui trong đơn tử.
- **Core meaning — English:** A computational pattern encapsulated by monads that allows parsers or search algorithms to fail gracefully and try alternative execution paths without crashing.
- **Core meaning & mental image — Tiếng Việt:** Lỗi đơn tử và quay lui. Hình ảnh: Người đi trong mê cung gặp ngõ cụt thì tự động quay bước lại ngã rẽ trước đó để thử con đường khác một cách mượt mà.
- **Grammar & collocations:**
  - implement monadic failure and backtracking (triển khai lỗi đơn tử và quay lui)
  - handle monadic failure and backtracking (xử lý lỗi đơn tử và quay lui)
  - efficient monadic failure and backtracking (lỗi đơn tử và quay lui hiệu quả)
- **Register & nuance:** Advanced functional programming, parser writing, and logic programming.
- **Examples:**
  - *Example 1:* The combinator library handles ambiguous grammars seamlessly through monadic failure and backtracking. (Thư viện kết hợp xử lý các văn phạm mơ hồ một cách mượt mà thông qua lỗi đơn tử và quay lui.)
  - *Example 2:* When a syntax rule fails to match, monadic failure and backtracking restores the input stream to its prior offset. (Khi một quy tắc cú pháp khớp thất bại, lỗi đơn tử và quay lui khôi phục dòng đầu vào về vị trí trước đó.)
- **Liên kết tiếng Hàn:** 모나딕 실패와 백트래킹 (monadic 失敗 - backtracking) — Cơ chế đơn tử cho phép quay lui khi gặp lỗi phân tích.

## 9. infinite data stream productivity
- **IPA:** /ˈɪnfɪnət ˈdeɪtə striːm ˌprʌdʌkˈtɪvəti/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); tính năng suất của dòng dữ liệu vô hạn.
- **Core meaning — English:** The property of a corecursive program that guarantees it continuously yields successive elements of an infinite structure without getting trapped in silent internal loops.
- **Core meaning & mental image — Tiếng Việt:** Tính năng suất của dòng dữ liệu vô hạn. Hình ảnh: Một cỗ máy ép trái cây hoạt động liên tục, cứ mỗi vòng quay là cho ra một ly nước ép mới đều đặn, không bao giờ bị kẹt máy hay quay vòng vô ích bên trong.
- **Grammar & collocations:**
  - prove infinite data stream productivity (chứng minh tính năng suất của dòng dữ liệu vô hạn)
  - ensure infinite data stream productivity (đảm bảo tính năng suất của dòng dữ liệu vô hạn)
  - check infinite data stream productivity (kiểm tra tính năng suất của dòng dữ liệu vô hạn)
- **Register & nuance:** Type theory, theorem proving, and co-pattern matching semantics.
- **Examples:**
  - *Example 1:* Type checkers in dependently typed languages verify infinite data stream productivity before accepting corecursive definitions. (Các trình kiểm tra kiểu trong các ngôn ngữ có kiểu phụ thuộc xác minh tính năng suất của dòng dữ liệu vô hạn trước khi chấp nhận các định nghĩa đệ quy đồng sinh.)
  - *Example 2:* Lack of productivity in infinite data stream definitions leads to non-terminating internal evaluation loops. (Việc thiếu tính năng suất trong các định nghĩa dòng dữ liệu vô hạn dẫn đến các vòng lặp đánh giá nội bộ không bao giờ kết thúc.)
- **Liên kết tiếng Hàn:** 무한 데이터 스트림 생산성 (無限 data stream 生産性) — Tính đảm bảo sinh dữ liệu liên tục của cấu trúc vô hạn.

## 10. greatest fixed point definition
- **IPA:** /ˈɡreɪtɪst fɪkst pɔɪnt ˌdɛfɪˈnɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); định nghĩa điểm cố định lớn nhất.
- **Core meaning — English:** A corecursive specification mechanism used in type theory and domain theory to define infinite coinductive types and behavioral properties.
- **Core meaning & mental image — Tiếng Việt:** Định nghĩa điểm cố định lớn nhất. Hình ảnh: Chiếc vòng tròn lớn nhất ôm trọn toàn bộ các hành vi tuần hoàn và vô hạn của một hệ thống phản ứng.
- **Grammar & collocations:**
  - formulate a greatest fixed point definition (đưa ra định nghĩa điểm cố định lớn nhất)
  - semantics of greatest fixed point definitions (ngữ nghĩa của các định nghĩa điểm cố định lớn nhất)
  - compute the greatest fixed point definition (tính toán định nghĩa điểm cố định lớn nhất)
- **Register & nuance:** Advanced mathematical logic, semantics, and concurrency theory.
- **Examples:**
  - *Example 1:* Infinite streams and lazy lists are formally introduced via greatest fixed point definitions in type theory. (Các dòng vô hạn và danh sách lười được giới thiệu chính thức thông qua các định nghĩa điểm cố định lớn nhất trong lý thuyết kiểu.)
  - *Example 2:* Bisimilarity between reactive processes is captured mathematically by the greatest fixed point definition. (Tính tương đương song giữa các tiến trình phản ứng được nắm bắt toán học bởi định nghĩa điểm cố định lớn nhất.)
- **Liên kết tiếng Hàn:** 최대 고정점 정의 (最大 固定点 定義) — Định nghĩa toán học dùng để mô hình hóa cấu trúc vô hạn và đồng quy nạp.

## 11. typed lambda calculus reduction
- **IPA:** /taɪpt ˈlæmdə ˈvælkjʊləs rɪˈdʌkʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); phép khử trong hệ thống lambda tính toán có kiểu.
- **Core meaning — English:** The process of simplifying typed lambda expressions through beta-reduction while preserving type safety and strong normalization guarantees.
- **Core meaning & mental image — Tiếng Việt:** Phép khử trong tích phân lambda có kiểu. Hình ảnh: Quá trình rút gọn các biểu thức toán học phức tạp thành kết quả tối giản từng bước một mà không làm thay đổi bản chất hay kiểu dữ liệu ban đầu.
- **Grammar & collocations:**
  - perform typed lambda calculus reduction (thực hiện phép khử trong tích phân lambda có kiểu)
  - strong normalization of typed lambda calculus reduction (sự chuẩn hóa mạnh của phép khử lambda có kiểu)
  - rules of typed lambda calculus reduction (các quy tắc khử lambda có kiểu)
- **Register & nuance:** Theoretical computer science, programming language foundations, and type theory.
- **Examples:**
  - *Example 1:* Every well-typed expression under typed lambda calculus reduction eventually terminates in a normal form. (Mọi biểu thức có kiểu tốt dưới phép khử lambda có kiểu cuối cùng đều kết thúc ở dạng chuẩn.)
  - *Example 2:* The compiler uses typed lambda calculus reduction strategies to inline functions and eliminate dead code. (Trình biên dịch sử dụng các chiến lược khử lambda có kiểu để nhúng hàm nội tuyến và loại bỏ mã chết.)
- **Liên kết tiếng Hàn:** 타입 람다 대수 축소 (type 람다 大數 縮小) — Quá trình rút gọn biểu thức lambda có kiểu bảo toàn an toàn kiểu.

## 12. Church-Rosser confluence theorem
- **IPA:** /tʃɜːrtʃ ˈrɒsər ˈkɒnfluəns ˈθɪərəm/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); định lý hội tụ Church-Rosser.
- **Core meaning — English:** A fundamental property of rewriting systems stating that if an expression can be reduced in two different ways, the resulting terms can always be further reduced to a common identical term.
- **Core meaning & mental image — Tiếng Việt:** Định lý hội tụ Church-Rosser. Hình ảnh: Hai dòng suối tách ra từ một nguồn rồi uốn lượn theo hai hướng khác nhau, nhưng cuối cùng lại chảy vào cùng một hồ chứa duy nhất.
- **Grammar & collocations:**
  - apply the Church-Rosser confluence theorem (áp dụng định lý hội tụ Church-Rosser)
  - consequence of the Church-Rosser confluence theorem (hệ quả của định lý hội tụ Church-Rosser)
  - proof of the Church-Rosser confluence theorem (chứng minh định lý hội tụ Church-Rosser)
- **Register & nuance:** Mathematical logic, lambda calculus, and rewriting systems theory.
- **Examples:**
  - *Example 1:* The Church-Rosser confluence theorem ensures that evaluation order does not affect the final computed result in pure lambda calculus. (Định lý hội tụ Church-Rosser đảm bảo rằng thứ tự đánh giá không ảnh hưởng đến kết quả tính toán cuối cùng trong tích phân lambda thuần túy.)
  - *Example 2:* Because of the Church-Rosser confluence theorem, term rewriting systems possess deterministic limiting outcomes. (Do định lý hội tụ Church-Rosser, các hệ thống viết lại thuật ngữ có kết quả giới hạn tất định.)
- **Liên kết tiếng Hàn:** 처치-로서 합류 정리 (Church-Rosser 合流 定理) — Định lý chứng minh tính độc lập thứ tự đánh giá trong hệ thống viết lại biểu thức.

## 13. abstract syntax tree parsing
- **IPA:** /ˈæbstrækt ˈsɪntæks triː ˈpɑːrsɪŋ/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); phân tích cú pháp cây trừu tượng.
- **Core meaning — English:** The computational phase where source code text tokens are transformed into a hierarchical tree representation reflecting the syntactic structure of the language grammar.
- **Core meaning & mental image — Tiếng Việt:** Phân tích cú pháp cây cú pháp trừu tượng. Hình ảnh: Cỗ máy bóc tách từng từ trong câu văn lập trình rồi sắp xếp chúng thành một sơ đồ cây phả hệ mạch lạc, rõ ràng từng nhánh.
- **Grammar & collocations:**
  - perform abstract syntax tree parsing (thực hiện phân tích cú pháp cây trừu tượng)
  - efficient abstract syntax tree parsing (phân tích cú pháp cây trừu tượng hiệu quả)
  - phase of abstract syntax tree parsing (giai đoạn phân tích cú pháp cây trừu tượng)
- **Register & nuance:** Compiler design, static analysis tools, and language tooling.
- **Examples:**
  - *Example 1:* Modern linters rely on abstract syntax tree parsing to inspect code patterns and detect potential bugs. (Các công cụ kiểm tra lỗi mã nguồn hiện đại dựa vào việc phân tích cú pháp cây trừu tượng để kiểm tra các mẫu mã và phát hiện lỗi tiềm ẩn.)
  - *Example 2:* Abstract syntax tree parsing translates raw character streams into structured node hierarchies for type checking. (Phân tích cú pháp cây trừu tượng dịch các dòng ký tự thô thành các hệ thống phân cấp nút có cấu trúc để kiểm tra kiểu.)
- **Liên kết tiếng Hàn:** 추상 구문 트리 파싱 (抽象 構文 tree parsing) — Quá trình chuyển đổi mã nguồn thành cấu trúc cây cú pháp trừu tượng.

## 14. semantic continuation passing style
- **IPA:** /sɪˈmæntɪk kənˌtɪnjuˈeɪʃən ˈpæsɪŋ staɪl/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); phong cách truyền tiếp diễn nghĩa.
- **Core meaning — English:** A functional programming transformation style where control flow is explicitly represented as a continuation function passed to every computation step.
- **Core meaning & mental image — Tiếng Việt:** Phong cách truyền tiếp diễn nghĩa. Hình ảnh: Cuộc chạy tiếp sức, nơi mỗi vận động viên chạy xong không chỉ trao cây gậy mà còn giao kèm bức thư chỉ dẫn chi tiết về việc người tiếp theo phải làm gì kế tiếp.
- **Grammar & collocations:**
  - convert to semantic continuation passing style (chuyển đổi sang phong cách truyền tiếp diễn nghĩa)
  - semantic continuation passing style transformation (phép biến đổi phong cách truyền tiếp diễn nghĩa)
  - analyze semantic continuation passing style (phân tích phong cách truyền tiếp diễn nghĩa)
- **Register & nuance:** Advanced compiler optimization, asynchronous programming, and denotational semantics.
- **Examples:**
  - *Example 1:* Compilers translate complex control flow structures into semantic continuation passing style to simplify code generation. (Các trình biên dịch chuyển đổi các cấu trúc luồng điều khiển phức tạp sang phong cách truyền tiếp diễn nghĩa để đơn giản hóa việc tạo mã.)
  - *Example 2:* Semantic continuation passing style makes non-local exits and exceptions trivial to implement in functional languages. (Phong cách truyền tiếp diễn nghĩa giúp việc thoát khỏi phạm vi cục bộ và ngoại lệ trở nên dễ dàng triển khai trong các ngôn ngữ hàm.)
- **Liên kết tiếng Hàn:** 의미론적 지속 전달 스타일 (意味論的 持續 傳達 style) — Kỹ thuật lập trình biểu diễn luồng điều khiển bằng các hàm tiếp diễn tường minh.

## 15. soundness and completeness theorem
- **IPA:** /ˈsaʊndnəs ənd kəmˈpliːtnəs ˈθɪərəm/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); định lý tính đúng đắn và tính đầy đủ.
- **Core meaning — English:** A pair of logical properties showing that a deductive system or type system proves only valid semantic truths (soundness) and can prove all semantic truths (completeness).
- **Core meaning & mental image — Tiếng Việt:** Định lý tính đúng đắn và tính đầy đủ. Hình ảnh: Chiếc cân kiểm định hoàn hảo: mọi thứ được cân là hàng thật (soundness), và mọi hàng thật đều được cân đúng trọng lượng mà không bỏ sót món nào (completeness).
- **Grammar & collocations:**
  - prove the soundness and completeness theorem (chứng minh định lý tính đúng đắn và tính đầy đủ)
  - soundness and completeness theorem for logic (định lý tính đúng đắn và tính đầy đủ cho logic)
  - verify soundness and completeness theorems (xác minh các định lý tính đúng đắn và tính đầy đủ)
- **Register & nuance:** Mathematical logic, automated theorem proving, and type-theoretic verification.
- **Examples:**
  - *Example 1:* Establishing the soundness and completeness theorem for the verification engine ensures that no false proofs are accepted. (Việc thiết lập định lý tính đúng đắn và tính đầy đủ cho động cơ xác minh đảm bảo không có chứng minh sai nào được chấp nhận.)
  - *Example 2:* While first-order logic enjoys full completeness, higher-order logics often sacrifice completeness while preserving soundness. (Trong khi logic bậc nhất có tính đầy đủ trọn vẹn, các hệ logic bậc cao thường hy sinh tính đầy đủ trong khi vẫn giữ vững tính đúng đắn.)
- **Liên kết tiếng Hàn:** 건전성과 완전성 정리 (健全性 - 完整性 定理) — Định lý xác nhận hệ thống logic chứng minh đúng và đủ các mệnh đề hợp lệ.

## 16. hoare triple axiomatic verification
- **IPA:** /hɔːr ˈtrɪpəl ˌæksiəˈmætɪk ˌvɛrɪfɪˈkeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); xác minh tiên đề bộ ba Hoare.
- **Core meaning — English:** A formal verification technique using logical assertions of the form {Precondition} Code {Postcondition} to mathematically prove program correctness.
- **Core meaning & mental image — Tiếng Việt:** Xác minh tiên đề bộ ba Hoare. Hình ảnh: Hợp đồng pháp lý ba phần rõ ràng: Trạng thái trước khi vào phòng, nội dung công việc thực hiện bên trong, và trạng thái cam kết chắc chắn sau khi bước ra.
- **Grammar & collocations:**
  - apply hoare triple axiomatic verification (áp dụng xác minh tiên đề bộ ba Hoare)
  - soundness of hoare triple axiomatic verification (tính đúng đắn của xác minh tiên đề bộ ba Hoare)
  - automate hoare triple axiomatic verification (tự động hóa xác minh tiên đề bộ ba Hoare)
- **Register & nuance:** Program verification, software correctness, and formal methods.
- **Examples:**
  - *Example 1:* Safety-critical software modules are rigorously proven using hoare triple axiomatic verification before deployment. (Các mô-đun phần mềm an toàn trọng yếu được chứng minh nghiêm ngặt bằng xác minh tiên đề bộ ba Hoare trước khi triển khai.)
  - *Example 2:* The loop invariant is the most challenging component to construct during hoare triple axiomatic verification. (Bất biến vòng lặp là thành phần thách thức nhất cần xây dựng trong quá trình xác minh tiên đề bộ ba Hoare.)
- **Liên kết tiếng Hàn:** 호어 삼중항 공리적 검증 (Hoare 三重項 公理的 検証) — Phương pháp xác minh chương trình bằng các mệnh đề tiền điều kiện và hậu điều kiện.

## 17. Scott domain continuity
- **IPA:** /skɑːt doʊˈmeɪn ˌkɑːntɪˈnuːəti/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); tính liên tục miền Scott trong ngữ nghĩa học.
- **Core meaning — English:** A mathematical property of functions over partial orders where limits of directed chains are preserved, ensuring that recursive computations converge correctly.
- **Core meaning & mental image — Tiếng Việt:** Tính liên tục miền Scott. Hình ảnh: Một bề mặt cao su co giãn mượt mà, nơi việc dịch chuyển các điểm giới hạn của chuỗi không làm rách hay đứt gãy cấu trúc không gian bên dưới.
- **Grammar & collocations:**
  - ensure Scott domain continuity (đảm bảo tính liên tục miền Scott)
  - mathematical Scott domain continuity (tính liên tục miền Scott về mặt toán học)
  - function satisfying Scott domain continuity (hàm thỏa mãn tính liên tục miền Scott)
- **Register & nuance:** Domain theory, denotational semantics, and topology in computer science.
- **Examples:**
  - *Example 1:* Dana Scott demonstrated that computable functions over information systems must exhibit Scott domain continuity. (Dana Scott đã chứng minh rằng các hàm tính được trên hệ thống thông tin phải thể hiện tính liên tục miền Scott.)
  - *Example 2:* Scott domain continuity guarantees that infinite loops compute well-defined partial values rather than undefined noise. (Tính liên tục miền Scott đảm bảo rằng các vòng lặp vô hạn tính toán ra các giá trị một phần được xác định rõ ràng thay vì nhiễu loạn không xác định.)
- **Liên kết tiếng Hàn:** 스콧 도메인 연속성 (Scott domain 連續性) — Tính liên tục của hàm trên miền Scott trong ngữ nghĩa học.

## 18. coinductive proof by bisimilarity
- **IPA:** /ˌkoʊɪnˈdʌktɪv pruːf baɪ ˌbaɪsɪmjuˈلærəti/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); chứng minh đồng quy nạp bằng tính tương đương song mô phỏng.
- **Core meaning — English:** A proof technique for infinite structures and reactive processes where equivalence is established by exhibiting a bisimulation relation containing the target terms.
- **Core meaning & mental image — Tiếng Việt:** Chứng minh đồng quy nạp bằng tính song mô phỏng. Hình ảnh: Việc chứng minh hai hệ thống vô tận là giống hệt nhau bằng cách tìm ra một chiếc gương chung phản chiếu từng hành vi qua lại giữa chúng.
- **Grammar & collocations:**
  - construct a coinductive proof by bisimilarity (xây dựng chứng minh đồng quy nạp bằng tính song mô phỏng)
  - verify streams via coinductive proof by bisimilarity (xác minh các dòng thông qua chứng minh đồng quy nạp bằng tính song mô phỏng)
  - elegant coinductive proof by bisimilarity (chứng minh đồng quy nạp bằng tính song mô phỏng thanh lịch)
- **Register & nuance:** Interactive theorem proving (Coq, Isabelle), concurrency theory, and formal semantics.
- **Examples:**
  - *Example 1:* Proving that two infinite stream generators produce identical elements requires a coinductive proof by bisimilarity. (Việc chứng minh rằng hai bộ sinh dòng vô hạn tạo ra các phần tử y hệt nhau đòi hỏi một chứng minh đồng quy nạp bằng tính song mô phỏng.)
  - *Example 2:* Proof assistants streamline coinductive proofs by bisimilarity using co-fixpoint tactics. (Các trợ lý chứng minh đơn giản hóa các chứng minh đồng quy nạp bằng tính song mô phỏng bằng cách sử dụng các chiến thuật điểm cố định đồng sinh.)
- **Liên kết tiếng Hàn:** 이중 모사성을 이용한 코귀납적 증명 (二重 模寫性 - 利用 - coinductive 証明) — Phép chứng minh tính tương đương cấu trúc vô hạn qua quan hệ song mô phỏng.

## 19. lexerless parsing expression grammar
- **IPA:** /ˈlɛksərləs ˈpɑːrsɪŋ ɪkˈsprɛʃən ˈɡræmər/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); văn phong biểu thức phân tích không cần bộ tách từ.
- **Core meaning — English:** A parsing formalism that combines lexical analysis and syntactic parsing into a unified grammar, avoiding separate tokenization phases.
- **Core meaning & mental image — Tiếng Việt:** Văn phạm biểu thức phân tích không cần bộ tách từ. Hình ảnh: Một cỗ máy đọc hiểu trực tiếp từng ký tự thô của văn bản thành cấu trúc ý nghĩa mà không cần bước lọc qua một bộ sàng lọc từ vựng riêng biệt.
- **Grammar & collocations:**
  - implement a lexerless parsing expression grammar (triển khai văn phạm biểu thức phân tích không cần bộ tách từ)
  - efficiency of lexerless parsing expression grammars (hiệu quả của văn phạm biểu thức phân tích không cần bộ tách từ)
  - parser using lexerless parsing expression grammars (trình phân tích sử dụng văn phạm biểu thức phân tích không cần bộ tách từ)
- **Register & nuance:** Modern parser generator tools, domain-specific languages, and compiler engineering.
- **Examples:**
  - *Example 1:* By adopting a lexerless parsing expression grammar, the compiler avoids ambiguous token boundary conflicts. (Bằng cách áp dụng văn phạm biểu thức phân tích không cần bộ tách từ, trình biên dịch tránh được các xung đột ranh giới từ vựng mơ hồ.)
  - *Example 2:* Lexerless parsing expression grammars simplify whitespace and comment handling directly inside the grammar rules. (Văn phạm biểu thức phân tích không cần bộ tách từ đơn giản hóa việc xử lý khoảng trắng và chú thích ngay bên trong các quy tắc văn phạm.)
- **Liên kết tiếng Hàn:** 렉서리스 파싱 표현 문법 (lexerless parsing 表現 文法) — Hệ thống văn phạm phân tích cú pháp trực tiếp từ chuỗi ký tự thô không cần bộ tách từ.

## 20. monadic state transformer
- **IPA:** /məˈnædɪk steɪt trænzˈfɔːrmər/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); bộ biến đổi trạng thái đơn tử.
- **Core meaning — English:** A design pattern in functional programming that wraps a stateful computation inside a monad, threading state implicitly through successive execution steps.
- **Core meaning & mental image — Tiếng Việt:** Bộ biến đổi trạng thái đơn tử. Hình ảnh: Một chiếc ba lô mang theo trạng thái thay đổi liên tục, tự động truyền qua từng người trong hàng dài mà không ai phải tự tay xách nó một cách tường minh.
- **Grammar & collocations:**
  - use a monadic state transformer (sử dụng bộ biến đổi trạng thái đơn tử)
  - monadic state transformer pattern (mẫu thiết kế bộ biến đổi trạng thái đơn tử)
  - combine monadic state transformers (kết hợp các bộ biến đổi trạng thái đơn tử)
- **Register & nuance:** Functional programming design patterns (Haskell `State` monad, Scala cats).
- **Examples:**
  - *Example 1:* State management within the compiler pass is elegantly handled using a monadic state transformer. (Quản lý trạng thái trong lượt biên dịch được xử lý thanh lịch bằng cách sử dụng bộ biến đổi trạng thái đơn tử.)
  - *Example 2:* Monadic state transformers eliminate the need for manual state parameter passing across function calls. (Bộ biến đổi trạng thái đơn tử loại bỏ nhu cầu truyền tham số trạng thái thủ công qua các lời gọi hàm.)
- **Liên kết tiếng Hàn:** 모나딕 상태 변환기 (monadic 狀態 變換器) — Mẫu thiết kế lập trình hàm quản lý trạng thái ngầm qua cấu trúc monad.

## 21. category-theoretic monad law
- **IPA:** /ˈkætəɡəri θiːˈɛtɪk ˈmɑːnæd lɔː/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); định luật đơn tử theo lý thuyết phạm trù.
- **Core meaning — English:** The mathematical laws (left identity, right identity, and associativity) that any categorical monad or programming monad must satisfy to behave correctly.
- **Core meaning & mental image — Tiếng Việt:** Định luật đơn tử lý thuyết phạm trù. Hình ảnh: Các quy tắc giao thông toán học nghiêm ngặt bảo đảm việc kết hợp và bao bọc dữ liệu luôn tuân thủ đúng trật tự logic mà không bị lệch hướng.
- **Grammar & collocations:**
  - satisfy category-theoretic monad laws (thỏa mãn các định luật đơn tử lý thuyết phạm trù)
  - verify category-theoretic monad laws (xác minh các định luật đơn tử lý thuyết phạm trù)
  - axioms of category-theoretic monad laws (các tiên đề của định luật đơn tử lý thuyết phạm trù)
- **Register & nuance:** Category theory, functional programming language theory, and algebraic design.
- **Examples:**
  - *Example 1:* Custom monad implementations must verify category-theoretic monad laws to prevent unexpected runtime side effects. (Các triển khai monad tùy chỉnh phải xác minh các định luật đơn tử lý thuyết phạm trù để ngăn ngừa các tác dụng phụ khi chạy không mong muốn.)
  - *Example 2:* Associativity and identity form the core axioms of every category-theoretic monad law. (Tính kết hợp và tính đồng nhất tạo thành các tiên đề cốt lõi của mọi định luật đơn tử lý thuyết phạm trù.)
- **Liên kết tiếng Hàn:** 범주론적 모나드 법칙 (範疇論的 monad 法則) — Các định luật toán học bắt buộc của monad trong lý thuyết phạm trù.

## 22. formal language syntactic ambiguity
- **IPA:** /ˈfɔːrməl ˈlæŋɡwɪʤ sɪnˈtæktɪk æmˈbɪɡwəti/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); sự mơ hồ cú pháp trong ngôn ngữ hình thức.
- **Core meaning — English:** A property of a grammar where a single valid sentence has multiple distinct parse trees or syntactic interpretations.
- **Core meaning & mental image — Tiếng Việt:** Sự mơ hồ cú pháp ngôn ngữ hình thức. Hình ảnh: Một câu nói có hai nghĩa khác nhau, khiến người nghe bối rối không biết nên hiểu theo cấu trúc cây nào mới đúng ý tác giả.
- **Grammar & collocations:**
  - resolve formal language syntactic ambiguity (giải quyết sự mơ hồ cú pháp ngôn ngữ hình thức)
  - detect formal language syntactic ambiguity (phát hiện sự mơ hồ cú pháp ngôn ngữ hình thức)
  - inherent formal language syntactic ambiguity (sự mơ hồ cú pháp ngôn ngữ hình thức vốn có)
- **Register & nuance:** Compiler design, formal grammar theory, and linguistics.
- **Examples:**
  - *Example 1:* The compiler emits a syntax error when formal language syntactic ambiguity prevents deterministic expression parsing. (Trình biên dịch phát ra lỗi cú pháp khi sự mơ hồ cú pháp ngôn ngữ hình thức cản trở việc phân tích biểu thức tất định.)
  - *Example 2:* Disambiguation rules are necessary to eliminate formal language syntactic ambiguity in programming language specifications. (Các quy tắc phân định là cần thiết để loại bỏ sự mơ hồ cú pháp ngôn ngữ hình thức trong các thông số kỹ thuật ngôn ngữ lập trình.)
- **Liên kết tiếng Hàn:** 형식 언어 구문적 모호성 (形式 言語 構文的 母護性) — Tính chất một câu lệnh có nhiều cây phân tích cú pháp khác nhau trong ngôn ngữ hình thức.

## 23. coinductive type corecursor
- **IPA:** /ˌkoʊɪnˈdʌktɪv taɪp ˈkɔːrkɜːrsər/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); hàm sinh kiểu đồng quy nạp.
- **Core meaning — English:** A foundational recursion scheme dual to structural induction that generates infinite coinductive data structures through productive corecursion steps.
- **Core meaning & mental image — Tiếng Việt:** Hàm sinh kiểu đồng quy nạp. Hình ảnh: Cần cẩu tự động liên tục vươn tay nối dài cấu trúc vô hạn ra phía trước dựa trên trạng thái cung cấp hiện tại.
- **Grammar & collocations:**
  - define a coinductive type corecursor (định nghĩa một hàm sinh kiểu đồng quy nạp)
  - productive coinductive type corecursor (hàm sinh kiểu đồng quy nạp có năng suất)
  - use a coinductive type corecursor (sử dụng hàm sinh kiểu đồng quy nạp)
- **Register & nuance:** Dependent type theory, proof assistants, and functional data structures.
- **Examples:**
  - *Example 1:* The infinite stream type is equipped with a coinductive type corecursor to construct lazy sequences securely. (Kiểu dòng vô hạn được trang bị hàm sinh kiểu đồng quy nạp để xây dựng các chuỗi lười một cách an toàn.)
  - *Example 2:* Termination checkers ensure that every coinductive type corecursor remains productive under guardedness conditions. (Các trình kiểm tra tính dừng đảm bảo rằng mọi hàm sinh kiểu đồng quy nạp vẫn duy trì tính năng suất dưới các điều kiện được bảo vệ.)
- **Liên kết tiếng Hàn:** 코귀납적 타입 코레커서 (coinductive type corecursor) — Toán tử sinh cấu trúc dữ liệu vô hạn trong lý thuyết kiểu.

## 24. denotational semantic valuation
- **IPA:** /ˌdiːnəˈteɪʃənəl səˈmæntɪk ˌvæljuˈeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); hàm định giá ngữ nghĩa ký hiệu.
- **Core meaning — English:** A semantic function that maps syntactic program phrases directly into their mathematical denotations within semantic domains.
- **Core meaning & mental image — Tiếng Việt:** Hàm định giá ngữ nghĩa ký hiệu. Hình ảnh: Bộ mã hóa quy đổi từng câu lệnh chữ viết thành các con số và hàm số toán học chính xác trong không gian ký hiệu.
- **Grammar & collocations:**
  - compute denotational semantic valuation (tính toán định giá ngữ nghĩa ký hiệu)
  - denotational semantic valuation function (hàm định giá ngữ nghĩa ký hiệu)
  - define denotational semantic valuations (định nghĩa các định giá ngữ nghĩa ký hiệu)
- **Register & nuance:** Denotational semantics, program analysis, and compiler correctness theory.
- **Examples:**
  - *Example 1:* The denotational semantic valuation function maps while-loops into fixed points of continuous state transformations. (Hàm định giá ngữ nghĩa ký hiệu ánh xạ các vòng lặp while thành các điểm cố định của các phép biến đổi trạng thái liên tục.)
  - *Example 2:* Verifying compiler correctness requires proving that the denotational semantic valuation commutes with compilation passes. (Việc xác minh tính đúng đắn của trình biên dịch đòi hỏi chứng minh rằng định giá ngữ nghĩa ký hiệu giao hoán với các lượt biên dịch.)
- **Liên kết tiếng Hàn:** 표시적 의미론적 평가 (表示的 意味論的 評價) — Hàm ánh xạ cú pháp chương trình thành giá trị toán học tương ứng.

## 25. verified compiler frontend
- **IPA:** /ˈvɛrɪfaɪd kəmˈpaɪlər ˈfrʌntɛnd/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); phần đầu trình biên dịch đã được xác minh hình thức.
- **Core meaning — English:** The lexical, syntactic, and semantic analysis phase of a compiler that has been mathematically proven correct using interactive theorem provers.
- **Core meaning & mental image — Tiếng Việt:** Phần đầu trình biên dịch đã được kiểm chứng. Hình ảnh: Cổng kiểm tra an ninh tối tân được chứng nhận bằng toán học tuyệt đối, bảo đảm không có lỗi dịch mã nào lọt qua được trước khi bước vào giai đoạn sinh mã máy.
- **Grammar & collocations:**
  - develop a verified compiler frontend (phát triển phần đầu trình biên dịch đã được kiểm chứng)
  - correctness of a verified compiler frontend (tính đúng đắn của phần đầu trình biên dịch đã được kiểm chứng)
  - verified compiler frontend architecture (kiến trúc phần đầu trình biên dịch đã được kiểm chứng)
- **Register & nuance:** Verified software systems (e.g., CompCert ecosystem, CakeML), formal verification, and high-assurance systems.
- **Examples:**
  - *Example 1:* CompCert pioneered the engineering of verified compiler frontends to guarantee absolute translation correctness. (CompCert đã tiên phong trong việc kỹ thuật hóa phần đầu trình biên dịch đã được kiểm chứng nhằm đảm bảo tính đúng đắn tuyệt đối của việc dịch mã.)
  - *Example 2:* The verified compiler frontend uses monadic parser combinators formally proven sound in Coq. (Phần đầu trình biên dịch đã được kiểm chứng sử dụng các bộ kết hợp phân tích cú pháp đơn tử được chứng minh hình thức là hợp lệ trong Coq.)
- **Liên kết tiếng Hàn:** 검증된 컴파일러 프론트엔드 (検証 - compiler frontend) — Phần đầu trình biên dịch được chứng minh đúng đắn bằng toán học hình thức.

---

## Review in context: Part 1 (items 1–12)

Advanced programming language theory and compiler engineering rely heavily on rigorous mathematical foundations. To give precise meaning to computer programs, researchers construct a **denotational semantic domain**, where programs are interpreted as mathematical objects within a **complete partial order lattice**. The convergence of recursive functions is rigorously guaranteed by the **Kleene fixed-point theorem** and **Scott domain continuity**. 

For parsing and processing source code, modern functional programmers build robust parsers using a **monadic parser combinator**, which supports advanced error handling through **monadic failure and backtracking**. When parsing complex grammars, tools often utilize a **lexerless parsing expression grammar** to convert text directly into an **abstract syntax tree parsing** structure. To manage states cleanly during compilation passes, engineers employ a **monadic state transformer**, ensuring compliance with every **category-theoretic monad law**. Furthermore, program behavior is formally analyzed using **structural operational semantics** and **typed lambda calculus reduction**, while the **Church-Rosser confluence theorem** guarantees that evaluation order remains consistent. For infinite data streams, **coinductive stream corecursion** ensures **infinite data stream productivity**, supported formally by a **greatest fixed point definition**.

### Vietnamese translation — Phần 1:
Lý thuyết ngôn ngữ lập trình nâng cao và kỹ thuật biên dịch phụ thuộc rất nhiều vào các nền tảng toán học nghiêm ngặt. Để mang lại ý nghĩa chính xác cho các chương trình máy tính, các nhà nghiên cứu xây dựng một **miền ngữ nghĩa ký hiệu**, nơi các chương trình được diễn giải như các đối tượng toán học bên trong một **lưới thứ tự bộ phận đầy đủ**. Sự hội tụ của các hàm đệ quy được đảm bảo nghiêm ngặt bởi **định lý điểm cố định Kleene** và **tính liên tục miền Scott**.

Để phân tích cú pháp và xử lý mã nguồn, các lập trình viên hàm hiện đại xây dựng các bộ phân tích cú pháp mạnh mẽ bằng cách sử dụng **bộ kết hợp phân tích cú pháp đơn tử**, hỗ trợ xử lý lỗi nâng cao thông qua **lỗi đơn tử và quay lui**. Khi phân tích các văn phạm phức tạp, các công cụ thường tận dụng **văn phạm biểu thức phân tích không cần bộ tách từ** để chuyển đổi văn bản trực tiếp thành cấu trúc **phân tích cú pháp cây trừu tượng**. Để quản lý trạng thái sạch sẽ trong các lượt biên dịch, các kỹ sư sử dụng **bộ biến đổi trạng thái đơn tử**, đảm bảo tuân thủ mọi **định luật đơn tử lý thuyết phạm trù**. Hơn nữa, hành vi chương trình được phân tích hình thức bằng **ngữ nghĩa vận hành cấu trúc** và **phép khử lambda có kiểu**, trong khi **định lý hội tụ Church-Rosser** đảm bảo rằng thứ tự đánh giá vẫn nhất quán. Đối với các dòng dữ liệu vô hạn, **đệ quy đồng sinh dòng dữ liệu đồng quy nạp** đảm bảo **tính năng suất của dòng dữ liệu vô hạn**, được hỗ trợ chính thức bởi **định nghĩa điểm cố định lớn nhất**.

---

## Review in context: Part 2 (items 13–25)

Rigorous software verification ensures that systems execute without logical flaws. Compilers transform control flow structures into a **semantic continuation passing style** to optimize execution paths and simplify code generation. To eliminate ambiguities, developers resolve **formal language syntactic ambiguity** through rigorous grammar specifications. Mathematical correctness of deductive reasoning is established via the **soundness and completeness theorem**, while **hoare triple axiomatic verification** provides formal guarantees for imperative program fragments.

In concurrency and reactive process theory, systems are verified using a **bisimulation equivalence proof** backed by a **coinductive proof by bisimilarity**. When dealing with infinite structures, engineers implement a **coinductive type corecursor** to generate lazy sequences safely. To evaluate program meanings formally, a **denotational semantic valuation** maps syntactic phrases directly into their mathematical denotations. Ultimately, these advanced theoretical components culminate in a fully **verified compiler frontend**, which guarantees absolute translation fidelity and program correctness.

### Vietnamese translation — Phần 2:
Việc xác minh phần mềm nghiêm ngặt đảm bảo rằng các hệ thống thực thi mà không có lỗi logic. Các trình biên dịch chuyển đổi các cấu trúc luồng điều khiển sang **phong cách truyền tiếp diễn nghĩa** để tối ưu hóa các đường dẫn thực thi và đơn giản hóa việc tạo mã. Để loại bỏ sự mơ hồ, các nhà phát triển giải quyết **sự mơ hồ cú pháp ngôn ngữ hình thức** thông qua các thông số kỹ thuật văn phạm nghiêm ngặt. Tính đúng đắn toán học của suy luận diễn dịch được thiết lập thông qua **định lý tính đúng đắn và tính đầy đủ**, trong khi **xác minh tiên đề bộ ba Hoare** cung cấp các đảm bảo hình thức cho các phân đoạn chương trình mệnh lệnh.

Trong lý thuyết đồng thời và tiến trình phản ứng, các hệ thống được xác minh bằng **chứng minh tương đương song mô phỏng** được hỗ trợ bởi **chứng minh đồng quy nạp bằng tính song mô phỏng**. Khi xử lý các cấu trúc vô hạn, các kỹ sư triển khai **hàm sinh kiểu đồng quy nạp** để tạo ra các chuỗi lười một cách an toàn. Để đánh giá ngữ nghĩa chương trình một cách hình thức, **hàm định giá ngữ nghĩa ký hiệu** ánh xạ các cụm từ cú pháp trực tiếp thành các biểu thị toán học của chúng. Cuối cùng, các thành phần lý thuyết tiên tiến này hội tụ thành một **phần đầu trình biên dịch đã được kiểm chứng** hoàn chỉnh, đảm bảo độ trung thực dịch mã tuyệt đối và tính đúng đắn của chương trình.
