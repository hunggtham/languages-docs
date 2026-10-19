# C2 Vocabulary 214 — Type-level metaprogramming, Martin-Löf dependent types, and Curry-Howard propositional logic

## 1. Martin-Löf dependent type theory
- **IPA:** /ˌmɑːrtɪn ˈlœːv dɪˈpɛndənt taɪp ˈθɪəri/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); thường làm chủ ngữ hoặc tân ngữ trong lý thuyết kiểu hình thức.
- **Core meaning — English:** A foundational formal system of intuitionistic type theory where types can depend on terms, serving as a constructive framework for mathematics and program verification.
- **Core meaning & mental image — Tiếng Việt:** Lý thuyết kiểu phụ thuộc Martin-Löf. Hình ảnh: Một hệ thống kiến trúc toán học vững chắc nơi các kiểu dữ liệu không còn tĩnh mà uyển chuyển thay đổi hình dạng dựa trên giá trị của các tham số đầu vào.
- **Grammar & collocations:**
  - formulate in Martin-Löf dependent type theory (được hình thức hóa trong lý thuyết kiểu phụ thuộc Martin-Löf)
  - rules of Martin-Löf dependent type theory (các quy tắc của lý thuyết kiểu phụ thuộc Martin-Löf)
  - expressive Martin-Löf dependent type theory (lý thuyết kiểu phụ thuộc Martin-Löf biểu cảm)
- **Register & nuance:** Advanced mathematical logic, type theory, and proof assistant foundations (Agda, Idris).
- **Examples:**
  - *Example 1:* Martin-Löf dependent type theory bridges the gap between formal constructive mathematics and computer program verification. (Lý thuyết kiểu phụ thuộc Martin-Löf thu hẹp khoảng cách giữa toán học kiến thiết hình thức và xác minh chương trình máy tính.)
  - *Example 2:* Proving complex theorems in Martin-Löf dependent type theory requires defining custom inductive families and dependent functions. (Việc chứng minh các định lý phức tạp trong lý thuyết kiểu phụ thuộc Martin-Löf đòi hỏi việc định nghĩa các họ quy nạp tùy chỉnh và các hàm phụ thuộc.)
- **Liên kết tiếng Hàn:** 마르틴뢰프 의존 타입 이론 (Martin-Löf 依存 type 理論) — Lý thuyết kiểu hình thức cho phép các kiểu phụ thuộc vào giá trị thuật ngữ.

## 2. Curry-Howard correspondence isomorphism
- **IPA:** /ˈkɜːri ˈhaʊərd ˌkɒrɪˈspɒndəns ˌaɪsəˈmɔːrfɪzəm/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); sự đẳng cấu tương ứng Curry-Howard.
- **Core meaning — English:** The direct equivalence between computer programs and mathematical proofs, where types correspond to logical propositions and programs correspond to proofs.
- **Core meaning & mental image — Tiếng Việt:** Đẳng cấu tương ứng Curry-Howard. Hình ảnh: Chiếc gương song chiếu hoàn hảo giữa logic học và khoa học máy tính, ở đó mỗi đoạn mã chương trình chính là một chứng minh toán học đầy sức nặng.
- **Grammar & collocations:**
  - apply the Curry-Howard correspondence isomorphism (áp dụng sự đẳng cấu tương ứng Curry-Howard)
  - foundation of the Curry-Howard correspondence isomorphism (nền tảng của sự đẳng cấu tương ứng Curry-Howard)
  - elegance of the Curry-Howard correspondence isomorphism (sự thanh lịch của sự đẳng cấu tương ứng Curry-Howard)
- **Register & nuance:** Theoretical computer science, mathematical logic, and functional programming philosophy.
- **Examples:**
  - *Example 1:* The Curry-Howard correspondence isomorphism implies that writing a type-safe program is logically identical to proving a mathematical theorem. (Sự đẳng cấu tương ứng Curry-Howard ngụ ý rằng việc viết một chương trình an toàn về kiểu hoàn toàn đồng nhất về mặt logic với việc chứng minh một định lý toán học.)
  - *Example 2:* By leveraging the Curry-Howard correspondence isomorphism, proof assistants can extract executable code directly from formal proofs. (Bằng cách tận dụng sự đẳng cấu tương ứng Curry-Howard, các trợ lý chứng minh có thể trích xuất mã có thể thực thi trực tiếp từ các chứng minh hình thức.)
- **Liên kết tiếng Hàn:** 커리-하워드 대응 동형사상 (Curry-Howard 對應 同形思想) — Nguyên lý đồng nhất giữa mệnh đề logic và kiểu dữ liệu trong lập trình.

## 3. type-level compile-time metaprogramming
- **IPA:** /taɪp ˈlɛvəl ˈkʌmpaɪl taɪm ˌmɛtəˈproʊɡræmɪŋ/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); lập trình siêu cấp độ kiểu lúc biên dịch.
- **Core meaning — English:** The programming paradigm of executing computations and transformations over types during the compilation phase to enforce invariants statically.
- **Core meaning & mental image — Tiếng Việt:** Lập trình siêu cấp độ kiểu lúc biên dịch. Hình ảnh: Xưởng cơ khí tự động lắp ráp ngay trong phòng thí nghiệm trước khi sản phẩm chính thức xuất xưởng, đảm bảo mọi chi tiết đều khớp hoàn hảo từ trong trứng nước.
- **Grammar & collocations:**
  - utilize type-level compile-time metaprogramming (tận dụng lập trình siêu cấp độ kiểu lúc biên dịch)
  - advanced type-level compile-time metaprogramming (lập trình siêu cấp độ kiểu lúc biên dịch nâng cao)
  - safety of type-level compile-time metaprogramming (tính an toàn của lập trình siêu cấp độ kiểu lúc biên dịch)
- **Register & nuance:** Advanced template meta-programming (C++, Rust, Scala, Haskell), type system engineering.
- **Examples:**
  - *Example 1:* Type-level compile-time metaprogramming allows developers to catch domain logic errors before a single line of binary is executed. (Lập trình siêu cấp độ kiểu lúc biên dịch cho phép các nhà phát triển bắt các lỗi logic miền trước khi một dòng mã nhị phân nào được thực thi.)
  - *Example 2:* Modern languages harness type-level compile-time metaprogramming to generate highly specialized zero-cost abstractions. (Các ngôn ngữ hiện đại khai thác lập trình siêu cấp độ kiểu lúc biên dịch để tạo ra các trừu tượng hóa chi phí bằng không được chuyên biệt hóa cao.)
- **Liên kết tiếng Hàn:** 타입 레벨 컴파일 타임 메타프로그래밍 (type-level compile-time metaprogramming) — Kỹ thuật tính toán và biến đổi kiểu dữ liệu ngay trong giai đoạn biên dịch.

## 4. dependent function type (pi-type)
- **IPA:** /dɪˈpɛndənt ˈfʌŋkʃən taɪp (paɪ taɪp)/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); kiểu hàm phụ thuộc (pi-type).
- **Core meaning — English:** A type constructor in dependent type theory that generalizes function types, where the return type depends on the specific value of the input argument.
- **Core meaning & mental image — Tiếng Việt:** Kiểu hàm phụ thuộc (pi-type). Hình ảnh: Chiếc máy biến hình thông minh thay đổi sản phẩm đầu ra tùy thuộc chính xác vào con số đầu vào mà bạn nạp vào.
- **Grammar & collocations:**
  - define a dependent function type (pi-type) (định nghĩa một kiểu hàm phụ thuộc)
  - universal quantification as a dependent function type (lượng hóa phổ quát dưới dạng kiểu hàm phụ thuộc)
  - polymorphism via dependent function types (tính đa hình thông qua các kiểu hàm phụ thuộc)
- **Register & nuance:** Type theory, proof assistants, and constructive logic.
- **Examples:**
  - *Example 1:* A dependent function type (pi-type) can represent functions that accept a natural number $n$ and return a vector of length $n$. (Kiểu hàm phụ thuộc có thể đại diện cho các hàm nhận một số tự nhiên $n$ và trả về một véc-tơ có độ dài $n$.)
  - *Example 2:* In constructive logic, the dependent function type (pi-type) corresponds to universal quantification ($\forall$). (Trong logic kiến thiết, kiểu hàm phụ thuộc tương ứng với lượng hóa phổ quát.)
- **Liên kết tiếng Hàn:** 의존 함수 타입 (pi-type) (依存 函數 type) — Kiểu dữ liệu hàm mà kiểu trả về phụ thuộc vào giá trị đầu vào.

## 5. dependent pair type (sigma-type)
- **IPA:** /dɪˈpɛndənt pɛər taɪp (ˈsɪɡmə taɪp)/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); kiểu cặp phụ thuộc (sigma-type).
- **Core meaning — English:** A type constructor representing dependent pairs where the type of the second element depends on the runtime value of the first element.
- **Core meaning & mental image — Tiếng Việt:** Kiểu cặp phụ thuộc (sigma-type). Hình ảnh: Gói quà đôi gắn kết chặt chẽ, trong đó món quà thứ hai được thiết kế riêng tùy thuộc vào kích thước và trọng lượng của món quà thứ nhất.
- **Grammar & collocations:**
  - construct a dependent pair type (sigma-type) (xây dựng một kiểu cặp phụ thuộc)
  - existential quantification in dependent pair types (lượng hóa tồn tại trong các kiểu cặp phụ thuộc)
  - projections from a dependent pair type (các phép chiếu từ kiểu cặp phụ thuộc)
- **Register & nuance:** Intuitionistic type theory, proof verification, and existential proofs.
- **Examples:**
  - *Example 1:* The dependent pair type (sigma-type) is used to pair a data structure with a proof of its structural invariants. (Kiểu cặp phụ thuộc được sử dụng để ghép một cấu trúc dữ liệu với một chứng minh về các bất biến cấu trúc của nó.)
  - *Example 2:* Under the Curry-Howard correspondence, the dependent pair type (sigma-type) models existential quantification ($\exists$). (Dưới sự tương ứng Curry-Howard, kiểu cặp phụ thuộc mô hình hóa lượng hóa tồn tại.)
- **Liên kết tiếng Hàn:** 의존 쌍 타입 (sigma-type) (依存 pair type) — Kiểu dữ liệu cặp mà thành phần thứ hai phụ thuộc vào giá trị của thành phần thứ nhất.

## 6. inductive type family constructor
- **IPA:** /ɪnˈdʌktɪv taɪp ˈfæmɪli kənˈstrʌktər/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); bộ kiến tạo họ kiểu quy nạp.
- **Core meaning — English:** A mechanism for defining families of data types indexed by values, enabling precise representation of dependent data structures like bounded vectors and syntax trees.
- **Core meaning & mental image — Tiếng Việt:** Bộ kiến tạo họ kiểu quy nạp. Hình ảnh: Khuôn đúc đa năng tự động sinh ra cả một gia đình các kiểu dữ liệu có liên kết chặt chẽ dựa trên các chỉ số tham số hóa.
- **Grammar & collocations:**
  - define an inductive type family constructor (định nghĩa một bộ kiến tạo họ kiểu quy nạp)
  - dependently typed inductive type family constructor (bộ kiến tạo họ kiểu quy nạp phụ thuộc kiểu)
  - pattern matching on inductive type family constructors (khớp mẫu trên các bộ kiến tạo họ kiểu quy nạp)
- **Register & nuance:** Dependent type programming, proof engineering, and datatype design.
- **Examples:**
  - *Example 1:* Using an inductive type family constructor, programmers can define vectors whose lengths are safely tracked at compile time. (Bằng cách sử dụng bộ kiến tạo họ kiểu quy nạp, các lập trình viên có thể định nghĩa các véc-tơ có độ dài được theo dõi an toàn lúc biên dịch.)
  - *Example 2:* The type checker verifies recursive functions over the inductive type family constructor to ensure termination. (Trình kiểm tra kiểu xác minh các hàm đệ quy trên bộ kiến tạo họ kiểu quy nạp để đảm bảo tính dừng.)
- **Liên kết tiếng Hàn:** 귀납적 타입 패밀리 생성자 (歸納的 type family 生成子) — Công cụ định nghĩa các họ kiểu dữ liệu được lập chỉ mục bởi giá trị trong lý thuyết kiểu.

## 7. propositions-as-types principle
- **IPA:** /prəˈpɒzɪʃənz æz taɪps ˈprɪnsɪpəl/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); nguyên lý mệnh đề như là kiểu.
- **Core meaning — English:** The foundational tenet that logical propositions are identical to data types, and constructing a term of that type equates to proving the proposition.
- **Core meaning & mental image — Tiếng Việt:** Nguyên lý mệnh đề như là kiểu. Hình ảnh: Sổ tay đồng nhất coi một bài toán logic chính là một bản thiết kế kiểu dữ liệu, giải được bài toán tương đương với việc viết thành công chương trình.
- **Grammar & collocations:**
  - embody the propositions-as-types principle (hiện thực hóa nguyên lý mệnh đề như là kiểu)
  - core of the propositions-as-types principle (cốt lõi của nguyên lý mệnh đề như là kiểu)
  - reasoning under the propositions-as-types principle (lập luận theo nguyên lý mệnh đề như là kiểu)
- **Register & nuance:** Mathematical logic, type theory, and formal theorem proving.
- **Examples:**
  - *Example 1:* The propositions-as-types principle transforms mathematical theorem proving into standard software compilation tasks. (Nguyên lý mệnh đề như là kiểu biến việc chứng minh định lý toán học thành các tác vụ biên dịch phần mềm tiêu chuẩn.)
  - *Example 2:* Proof assistants are engineered directly around the propositions-as-types principle to guarantee absolute proof validity. (Các trợ lý chứng minh được thiết kế xoay quanh nguyên lý mệnh đề như là kiểu để đảm bảo tính hợp lệ tuyệt đối của chứng minh.)
- **Liên kết tiếng Hàn:** 명제-타입 원리 (命題-type 原理) — Nguyên lý đồng nhất mệnh đề logic với kiểu dữ liệu trong lập trình.

## 8. constructive mathematical proof witness
- **IPA:** /kənˈstrʌktɪv ˌmæθəˈmætɪkəl pruːf ˈwɪtnɪs/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); nhân chứng chứng minh toán học kiến thiết.
- **Core meaning — English:** An explicit computational object produced by a constructive proof that demonstrates the existence of a mathematical entity by actually constructing it.
- **Core meaning & mental image — Tiếng Việt:** Nhân chứng chứng minh toán học kiến thiết. Hình ảnh: Tang vật hiển hiện tận mắt trên bàn làm việc, chứng minh sự tồn tại của sự việc bằng cách trưng ra sản phẩm thật thay vì lời hứa suông.
- **Grammar & collocations:**
  - extract a constructive mathematical proof witness (trích xuất nhân chứng chứng minh toán học kiến thiết)
  - compute a constructive mathematical proof witness (tính toán nhân chứng chứng minh toán học kiến thiết)
  - explicit constructive mathematical proof witness (nhân chứng chứng minh toán học kiến thiết tường minh)
- **Register & nuance:** Constructive mathematics, intuitionism, and program extraction.
- **Examples:**
  - *Example 1:* Unlike classical non-constructive proofs, a constructive mathematical proof witness provides an algorithm to compute the solution. (Khác với các chứng minh phi kiến thiết cổ điển, nhân chứng chứng minh toán học kiến thiết cung cấp một thuật toán để tính toán nghiệm.)
  - *Example 2:* The proof assistant extracted a valid constructive mathematical proof witness directly from the theorem verification tree. (Trợ lý chứng minh đã trích xuất nhân chứng chứng minh toán học kiến thiết hợp lệ trực tiếp từ cây xác minh định lý.)
- **Liên kết tiếng Hàn:** 구성적 수학적 증명 증인 (構成的 數學的 證明 證人) — Đối tượng tính toán tường minh được sinh ra từ một chứng minh toán học kiến thiết.

## 9. decidability of type checking
- **IPA:** /dɪˌsaɪdəˈbɪləti ʌv taɪp ˈtʃɛkɪŋ/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); tính giải quyết được của việc kiểm tra kiểu.
- **Core meaning — English:** The mathematical property that an algorithm can always determine in finite time whether a given term possesses a valid type within a formal system.
- **Core meaning & mental image — Tiếng Việt:** Tính giải quyết được của việc kiểm tra kiểu. Hình ảnh: Chiếc máy kiểm định tự động luôn đưa ra kết luận rõ ràng (đúng hoặc sai) trong thời gian hữu hạn, không bao giờ rơi vào vòng lặp vô tận.
- **Grammar & collocations:**
  - prove decidability of type checking (chứng minh tính giải quyết được của việc kiểm tra kiểu)
  - ensure decidability of type checking (đảm bảo tính giải quyết được của việc kiểm tra kiểu)
  - loss of decidability of type checking (sự mất tính giải quyết được của việc kiểm tra kiểu)
- **Register & nuance:** Type system design, algorithmic complexity, and program verification.
- **Examples:**
  - *Example 1:* Preserving the decidability of type checking is a paramount design goal when extending dependently typed programming languages. (Việc bảo tồn tính giải quyết được của việc kiểm tra kiểu là mục tiêu thiết kế tối quan trọng khi mở rộng các ngôn ngữ lập trình có kiểu phụ thuộc.)
  - *Example 2:* Undecidable type systems can prevent compilers from terminating when evaluating complex type-level expressions. (Các hệ thống kiểu không giải quyết được có thể ngăn cản các trình biên dịch dừng lại khi đánh giá các biểu thức cấp độ kiểu phức tạp.)
- **Liên kết tiếng Hàn:** 타입 검사의 decidability (type 檢査의 decidability) — Tính chất thuật toán luôn xác định được tính hợp lệ của kiểu trong thời gian hữu hạn.

## 10. universe polymorphism hierarchy
- **IPA:** /ˈjuːnɪvɜːrs ˌpɒliˈmɔːrfɪzəm ˈhaɪərɑːrki/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); phân cấp đa hình vũ trụ.
- **Core meaning — English:** A stratifying hierarchy of type universes used in type theory to avoid paradoxes like Russell's paradox by ensuring types cannot contain themselves.
- **Core meaning & mental image — Tiếng Việt:** Phân cấp đa hình vũ trụ. Hình ảnh: Các tầng không gian vũ trụ xếp chồng lên nhau theo thứ tự nghiêm ngặt, ngăn chặn hiện tượng chiếc hộp chứa chính nó gây sụp đổ toàn bộ hệ thống logic.
- **Grammar & collocations:**
  - navigate a universe polymorphism hierarchy (điều hướng phân cấp đa hình vũ trụ)
  - level in a universe polymorphism hierarchy (cấp độ trong phân cấp đa hình vũ trụ)
  - eliminate paradoxes with universe polymorphism hierarchies (loại bỏ nghịch lý bằng các phân cấp đa hình vũ trụ)
- **Register & nuance:** Advanced dependent type systems (Coq, Lean, Agda), foundational logic.
- **Examples:**
  - *Example 1:* Implementing generic libraries in Agda requires leveraging a universe polymorphism hierarchy to avoid type-level restriction errors. (Việc triển khai các thư viện tổng quát trong Agda đòi hỏi phải tận dụng phân cấp đa hình vũ trụ để tránh các lỗi hạn chế cấp độ kiểu.)
  - *Example 2:* Russell's paradox was successfully resolved in modern type theory through the introduction of the universe polymorphism hierarchy. (Nịch lý Russell đã được giải quyết thành công trong lý thuyết kiểu hiện đại thông qua việc giới thiệu phân cấp đa hình vũ trụ.)
- **Liên kết tiếng Hàn:** 유니버스 다형성 계층 구조 (universe 多形性 階層 構造) — Hệ thống phân cấp các vũ trụ kiểu dữ liệu nhằm ngăn ngừa nghịch lý tập hợp.

## 11. intensional vs extensional equality
- **IPA:** /ɪnˈtɛnʃənl vərɪs ˌɛkstɛnˈʃənl ɪˈkwɑːləti/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); sự khác biệt giữa bằng nhau nội hàm và ngoại diên.
- **Core meaning — English:** The distinction between equality based on structural definition (intensional) versus equality based on identical observable behavior or outputs (extensional).
- **Core meaning & mental image — Tiếng Việt:** Bằng nhau nội hàm so với ngoại diên. Hình ảnh: So sánh hai cỗ máy được cấu tạo từ linh kiện bên trong khác nhau (nội hàm) nhưng lại cho ra kết quả hành vi bên ngoài hoàn toàn giống hệt nhau (ngoại diên).
- **Grammar & collocations:**
  - distinguish intensional vs extensional equality (phân biệt bằng nhau nội hàm và ngoại diên)
  - intensional type theory and extensional equality (lý thuyết kiểu nội hàm và tính bằng nhau ngoại diên)
  - principles of extensional equality (các nguyên lý của tính bằng nhau ngoại diên)
- **Register & nuance:** Type theory, homotopy type theory (HoTT), and formal semantics.
- **Examples:**
  - *Example 1:* Standard dependently typed languages rely on intensional equality, making proofs of function equivalence surprisingly delicate. (Các ngôn ngữ có kiểu phụ thuộc tiêu chuẩn dựa trên tính bằng nhau nội hàm, khiến các chứng minh tương đương hàm trở nên tinh tế một cách đáng ngạc nhiên.)
  - *Example 2:* Extensional equality allows two functions to be treated as identical if they produce the same output for every input. (Tính bằng nhau ngoại diên cho phép hai hàm được coi là giống hệt nhau nếu chúng tạo ra cùng một kết quả cho mọi đầu vào.)
- **Liên kết tiếng Hàn:** 내포적 대 외포적 동치 (內包的 對 外包的 同値) — Sự phân biệt giữa bằng nhau theo cấu trúc bên trong và bằng nhau theo hành vi bên ngoài.

## 12. vector length-indexed type
- **IPA:** /ˈvɛktər lɛŋθ ˈɪndɛkst taɪp/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); kiểu dữ liệu véc-tơ được lập chỉ mục theo độ dài.
- **Core meaning — English:** A dependently typed container type where the exact length of the vector is embedded as a compile-time parameter, preventing out-of-bounds errors statically.
- **Core meaning & mental image — Tiếng Việt:** Kiểu véc-tơ lập chỉ mục theo độ dài. Hình ảnh: Chiếc hộp đựng đồ có kích thước được khắc trực tiếp lên nhãn bên ngoài, ngăn chặn tuyệt đối việc nhét nhầm vật phẩm quá khổ vào bên trong từ trước khi mở hộp.
- **Grammar & collocations:**
  - implement a vector length-indexed type (triển khai kiểu véc-tơ lập chỉ mục theo độ dài)
  - safe operations on vector length-indexed types (các thao tác an toàn trên các kiểu véc-tơ lập chỉ mục theo độ dài)
  - compile-time guarantees for vector length-indexed types (đảm bảo lúc biên dịch cho các kiểu véc-tơ lập chỉ mục theo độ dài)
- **Register & nuance:** Dependently typed programming (Idris, Agda, Dependent Rust/Scala libraries).
- **Examples:**
  - *Example 1:* Using a vector length-indexed type ensures that matrix multiplication checks dimension compatibility at compile time. (Sử dụng kiểu véc-tơ lập chỉ mục theo độ dài đảm bảo rằng phép nhân ma trận kiểm tra tính tương thích số chiều ngay lúc biên dịch.)
  - *Example 2:* Out-of-bounds indexing becomes impossible when working with vector length-indexed types in dependently typed languages. (Việc truy cập chỉ mục vượt quá giới hạn trở nên bất khả thi khi làm việc với kiểu véc-tơ lập chỉ mục theo độ dài trong các ngôn ngữ có kiểu phụ thuộc.)
- **Liên kết tiếng Hàn:** 벡터 길이 인덱스 타입 (vector length indexed type) — Kiểu dữ liệu véc-tơ lưu trữ trực tiếp độ dài trong kiểu lúc biên dịch.

## 13. interactive theorem prover Agda Coq
- **IPA:** /ˌɪntərˈæktɪv ˈθɪərəm ˈpruːvər ˈɑːɡdə koʊk/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); trợ lý định lý tương tác Agda Coq.
- **Core meaning — English:** A software environment that assists human mathematicians and computer scientists in interactively constructing machine-checked formal mathematical proofs.
- **Core meaning & mental image — Tiếng Việt:** Trợ lý định lý tương tác Agda Coq. Hình ảnh: Người đồng hành thông thái ngồi cạnh bạn trong phòng thí nghiệm logic, liên tục kiểm tra từng bước suy luận và tự động lấp đầy những khoảng trống còn thiếu.
- **Grammar & collocations:**
  - develop proofs in an interactive theorem prover like Agda or Coq (phát triển các chứng minh trong trợ lý định lý tương tác như Agda hoặc Coq)
  - power of interactive theorem provers Agda and Coq (sức mạnh của các trợ lý định lý tương tác Agda và Coq)
  - verified software via interactive theorem provers Agda Coq (phần mềm được xác minh thông qua các trợ lý định lý tương tác Agda Coq)
- **Register & nuance:** Formal verification, automated reasoning, and mathematical proof assistants.
- **Examples:**
  - *Example 1:* The interactive theorem provers Agda and Coq are widely used to verify the correctness of cryptographic protocols and operating systems. (Các trợ lý định lý tương tác Agda và Coq được sử dụng rộng rãi để xác minh tính đúng đắn của các giao thức mật mã và hệ điều hành.)
  - *Example 2:* Working with an interactive theorem prover Agda Coq requires mastering tactic-based proof scripting and dependent types. (Làm việc với trợ lý định lý tương tác Agda Coq đòi hỏi phải làm chủ việc viết kịch bản chứng minh dựa trên chiến thuật và kiểu phụ thuộc.)
- **Liên kết tiếng Hàn:** 대화형 정리 증명기 Agda Coq (對話型 定理 證明器 Agda Coq) — Phần mềm hỗ trợ con người xây dựng và kiểm tra chứng minh toán học hình thức.

## 14. proof irrelevance axiom
- **IPA:** /pruːf ɪˈrɛləvəns ˈæksiəm/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); tiên đề tính không quan trọng của chứng minh.
- **Core meaning — English:** A logical axiom stating that any two proofs of the same proposition are considered equal, since only the truth of the proposition matters, not how it was proved.
- **Core meaning & mental image — Tiếng Việt:** Tiên đề tính không quan trọng của chứng minh. Hình ảnh: Miễn là bạn đã vượt qua vạch đích, chiếc huy chương vàng trao cho bạn là như nhau bất kể bạn chạy bằng phong cách nào.
- **Grammar & collocations:**
  - assume the proof irrelevance axiom (giả định tiên đề tính không quan trọng của chứng minh)
  - consistency with the proof irrelevance axiom (tính nhất quán với tiên đề tính không quan trọng của chứng minh)
  - applications of the proof irrelevance axiom (các ứng dụng của tiên đề tính không quan trọng của chứng minh)
- **Register & nuance:** Proof theory, Lean, Coq, and proof assistant optimization.
- **Examples:**
  - *Example 1:* The proof irrelevance axiom simplifies equality checking in dependently typed systems by ignoring internal proof term variations. (Tiên đề tính không quan trọng của chứng minh đơn giản hóa việc kiểm tra tính bằng nhau trong các hệ thống có kiểu phụ thuộc bằng cách phớt lờ các biến thể thuật ngữ chứng minh bên trong.)
  - *Example 2:* Lean incorporates the proof irrelevance axiom natively to streamline complex mathematical proof developments. (Lean tích hợp sẵn tiên đề tính không quan trọng của chứng minh để tinh giản việc phát triển các chứng minh toán học phức tạp.)
- **Liên kết tiếng Hàn:** 증명 무관성 공리 (證明 無關性 公理) — Tiên đề logic quy định mọi chứng minh của cùng một mệnh đề đều tương đương nhau.

## 15. totality checking termination metric
- **IPA:** /toʊˈtæləti ˈtʃɛkɪŋ ˌtɜːrmɪˈneɪʃən ˈmɛtrɪk/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); thước đo chấm dứt kiểm tra tính toàn phần.
- **Core meaning — English:** A compiler mechanism that analyzes recursive functions to guarantee they always terminate on all valid inputs, ensuring total functional programming safety.
- **Core meaning & mental image — Tiếng Việt:** Thước đo chấm dứt kiểm tra tính toàn phần. Hình ảnh: Trọng tài nghiêm khắc kiểm tra từng chiếc đồng hồ bấm giờ của các vòng lặp đệ quy, kiên quyết loại bỏ mọi nguy cơ lún sâu vào vòng lặp vô tận.
- **Grammar & collocations:**
  - pass totality checking termination metrics (vượt qua các thước đo chấm dứt kiểm tra tính toàn phần)
  - enforce totality checking termination metrics (áp dụng các thước đo chấm dứt kiểm tra tính toàn phần)
  - failure of totality checking termination metrics (sự thất bại của các thước đo chấm dứt kiểm tra tính toàn phần)
- **Register & nuance:** Total functional programming, Agda, Idris, and compiler verification.
- **Examples:**
  - *Example 1:* Total functional languages use a strict totality checking termination metric to prevent non-terminating recursive loops. (Các ngôn ngữ hàm toàn phần sử dụng thước đo chấm dứt kiểm tra tính toàn phần nghiêm ngặt để ngăn chặn các vòng lặp đệ quy không bao giờ dừng.)
  - *Example 2:* The compiler rejected the function because its structural decrease failed the totality checking termination metric. (Trình biên dịch đã từ chối hàm vì sự sụt giảm cấu trúc của nó không vượt qua thước đo chấm dứt kiểm tra tính toàn phần.)
- **Liên kết tiếng Hàn:** 전역성 검사 종료 메트릭 (全域性 檢査 終了 metric) — Cơ chế trình biên dịch đảm bảo mọi hàm đệ quy đều phải dừng trong thời gian hữu hạn.

## 16. higher inductive type homotopy
- **IPA:** /ˈhaɪər ɪnˈdʌktɪv taɪp hɒˈmɒtəpi/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); tính đồng luân kiểu quy nạp bậc cao.
- **Core meaning — English:** A central concept in Homotopy Type Theory (HoTT) that allows defining types not just by point constructors, but also by path constructors and higher-dimensional equality paths.
- **Core meaning & mental image — Tiếng Việt:** Tính đồng luân kiểu quy nạp bậc cao. Hình ảnh: Không gian điêu khắc linh hoạt nơi các điểm không chỉ kết nối bằng đường thẳng mà còn uốn lượn thành các mặt phẳng và khối cầu đa chiều.
- **Grammar & collocations:**
  - construct a higher inductive type homotopy (xây dựng tính đồng luân kiểu quy nạp bậc cao)
  - foundations of higher inductive type homotopies (nền tảng của tính đồng luân kiểu quy nạp bậc cao)
  - topological spaces via higher inductive type homotopies (không gian tô-pô thông qua tính đồng luân kiểu quy nạp bậc cao)
- **Register & nuance:** Homotopy Type Theory (HoTT), algebraic topology, and advanced foundational mathematics.
- **Examples:**
  - *Example 1:* Higher inductive type homotopies enable mathematicians to define circles and spheres natively inside constructive type theory. (Tính đồng luân kiểu quy nạp bậc cao cho phép các nhà toán học định nghĩa các hình tròn và mặt cầu một cách tự nhiên bên trong lý thuyết kiểu kiến thiết.)
  - *Example 2:* The circle type in HoTT is defined as a higher inductive type homotopy possessing a base point and a loop path. (Kiểu hình tròn trong HoTT được định nghĩa như một tính đồng luân kiểu quy nạp bậc cao sở hữu một điểm gốc và một đường vòng lặp.)
- **Liên kết tiếng Hàn:** 고차 귀납적 타입 호모토피 (高次 歸納的 type homotopy) — Khái niệm trong HoTT cho phép định nghĩa các không gian tô-pô thông qua đường đi và điểm.

## 17. univalence axiom identity equivalence
- **IPA:** /ˈjuːnɪvələns ˈæksiəm aɪˈdɛntɪti ɪˈkwɪvələns/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); sự tương đương đồng nhất tiên đề đơn trị.
- **Core meaning — English:** Voevodsky's univalence axiom stating that isomorphic types are equal, formalizing the mathematical intuition that equivalent structures can be substituted interchangeably.
- **Core meaning & mental image — Tiếng Việt:** Sự tương đương đồng nhất tiên đề đơn trị. Hình ảnh: Chiếc cầu nối kỳ diệu khẳng định hai cấu trúc có hình dáng và tính năng tương đương nhau thì thực chất chính là một.
- **Grammar & collocations:**
  - apply the univalence axiom identity equivalence (áp dụng sự tương đương đồng nhất tiên đề đơn trị)
  - consequences of the univalence axiom identity equivalence (hệ quả của sự tương đương đồng nhất tiên đề đơn trị)
  - Voevodsky's univalence axiom identity equivalence (sự tương đương đồng nhất tiên đề đơn trị của Voevodsky)
- **Register & nuance:** Homotopy Type Theory (HoTT), univalent foundations, and advanced topology.
- **Examples:**
  - *Example 1:* The univalence axiom identity equivalence revolutionizes formalized mathematics by equating isomorphism with genuine equality. (Sự tương đương đồng nhất tiên đề đơn trị cách mạng hóa toán học hình thức hóa bằng cách đánh đồng tính đẳng cấu với sự bằng nhau thực sự.)
  - *Example 2:* Working with the univalence axiom identity equivalence requires careful management of universe levels and path inductions. (Làm việc với sự tương đương đồng nhất tiên đề đơn trị đòi hỏi sự quản lý cẩn thận các cấp độ vũ trụ và quy nạp đường đi.)
- **Liên kết tiếng Hàn:** 단일가 공리 정체성 동치 (單一價 公理 正體性 同値) — Tiên đề Voevodsky khẳng định các kiểu đẳng cấu là hoàn toàn bằng nhau.

## 18. type-level arithmetic reflection
- **IPA:** /taɪp ˈlɛvəl əˈrɪθmətɪk rɪˈflɛkʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); sự phản xạ số học cấp độ kiểu.
- **Core meaning — English:** A metaprogramming technique where arithmetic computations and proofs over numbers are evaluated automatically by the type checker at compile time.
- **Core meaning & mental image — Tiếng Việt:** Sự phản xạ số học cấp độ kiểu. Hình ảnh: Chiếc máy tính bỏ túi thông minh được tích hợp thẳng vào hệ thống kiểm tra kiểu, tự động tính toán và giải quyết các bài toán cộng trừ nhân chia ngay lúc biên dịch.
- **Grammar & collocations:**
  - implement type-level arithmetic reflection (triển khai sự phản xạ số học cấp độ kiểu)
  - automated type-level arithmetic reflection (sự phản xạ số học cấp độ kiểu tự động)
  - compile-time proofs via type-level arithmetic reflection (các chứng minh lúc biên dịch thông qua sự phản xạ số học cấp độ kiểu)
- **Register & nuance:** Advanced dependent typing, Scala shapeless, Rust typenum, and Idris programming.
- **Examples:**
  - *Example 1:* Type-level arithmetic reflection enables the compiler to verify matrix dimension bounds without runtime overhead. (Sự phản xạ số học cấp độ kiểu cho phép trình biên dịch xác minh các giới hạn kích thước ma trận mà không tốn chi phí lúc chạy.)
  - *Example 2:* Developers use type-level arithmetic reflection to prove algebraic properties of fixed-size buffers statically. (Các nhà phát triển sử dụng sự phản xạ số học cấp độ kiểu để chứng minh các tính chất đại số của các bộ đệm kích thước cố định một cách tĩnh.)
- **Liên kết tiếng Hàn:** 타입 레벨 산술 반사 (type-level 算術 反射) — Kỹ thuật tự động tính toán và chứng minh số học ngay tại cấp độ kiểu lúc biên dịch.

## 19. compile-time invariant enforcement
- **IPA:** /ˈkʌmpaɪl taɪm ɪnˈvɛriənt ɪnˈfɔːrsmənt/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); sự cưỡng chế bất biến lúc biên dịch.
- **Core meaning — English:** The static guarantee that invalid program states or broken business rules are rejected by the type system before the software can be compiled.
- **Core meaning & mental image — Tiếng Việt:** Sự cưỡng chế bất biến lúc biên dịch. Hình ảnh: Cổng kiểm tra an ninh tự động khóa sập ngay lập tức trước khi ai đó kịp mang hàng cấm bước lên chuyến tàu xuất phát.
- **Grammar & collocations:**
  - achieve compile-time invariant enforcement (đạt được sự cưỡng chế bất biến lúc biên dịch)
  - robust compile-time invariant enforcement (sự cưỡng chế bất biến lúc biên dịch mạnh mẽ)
  - rely on compile-time invariant enforcement (dựa vào sự cưỡng chế bất biến lúc biên dịch)
- **Register & nuance:** High-assurance software engineering, static analysis, and type-driven development.
- **Examples:**
  - *Example 1:* Compile-time invariant enforcement eliminates entire categories of runtime bugs by leveraging expressive type systems. (Sự cưỡng chế bất biến lúc biên dịch loại bỏ toàn bộ các loại lỗi khi chạy bằng cách tận dụng các hệ thống kiểu biểu cảm.)
  - *Example 2:* Financial ledger applications benefit immensely from strict compile-time invariant enforcement of double-entry balancing rules. (Các ứng dụng sổ cái tài chính hưởng lợi vô cùng lớn từ sự cưỡng chế bất biến lúc biên dịch nghiêm ngặt đối với các quy tắc cân đối ghi sổ kép.)
- **Liên kết tiếng Hàn:** 컴파일 타임 불변식 강제 (compile-time 不變式 強制) — Việc hệ thống kiểu chặn đứng các trạng thái sai trái ngay trước khi biên dịch mã.

## 20. verified software formal certification
- **IPA:** /ˈvɛrɪfaɪd ˈsɒftwɛər ˈfɔːrməl ˌsɜːrtɪfɪˈkeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); chứng nhận hình thức phần mềm đã được kiểm chứng.
- **Core meaning — English:** An authoritative mathematical guarantee and accompanying machine-checked proof artifact certifying that a software system satisfies its formal specification.
- **Core meaning & mental image — Tiếng Việt:** Chứng nhận hình thức phần mềm đã được kiểm chứng. Hình ảnh: Con dấu chất lượng cao bằng vàng được khắc bằng toán học tuyệt đối, chứng nhận sản phẩm phần mềm hoàn hảo không một vết xước logic.
- **Grammar & collocations:**
  - obtain verified software formal certification (đạt được chứng nhận hình thức phần mềm đã được kiểm chứng)
  - rigor of verified software formal certification (sự nghiêm ngặt của chứng nhận hình thức phần mềm đã được kiểm chứng)
  - standards for verified software formal certification (các tiêu chuẩn cho chứng nhận hình thức phần mềm đã được kiểm chứng)
- **Register & nuance:** Safety-critical systems, aerospace software, formal verification, and high-assurance engineering.
- **Examples:**
  - *Example 1:* Mission-critical avionics software must acquire verified software formal certification before deployment. (Phần mềm hàng không vũ trụ tối quan trọng phải đạt được chứng nhận hình thức phần mềm đã được kiểm chứng trước khi triển khai.)
  - *Example 2:* The project successfully secured verified software formal certification using Coq interactive proofs. (Dự án đã đảm bảo thành công chứng nhận hình thức phần mềm đã được kiểm chứng bằng cách sử dụng các chứng minh tương tác Coq.)
- **Liên kết tiếng Hàn:** 검증된 소프트웨어 형식 인증 (檢證된 software 形式 認証) — Chứng nhận toán học chính thức rằng phần mềm tuân thủ tuyệt đối đặc tả hình thức.

## 21. term reduction Church-Turing
- **IPA:** /tɜːrm rɪˈdʌkʃən ˈtʃɜːrtʃ ˈtʊrɪŋ/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); sự rút gọn thuật ngữ Church-Turing.
- **Core meaning — English:** The foundational process of evaluating lambda terms or computational expressions to their normal forms, reflecting the principles of the Church-Turing thesis.
- **Core meaning & mental image — Tiếng Việt:** Sự rút gọn thuật ngữ Church-Turing. Hình ảnh: Chiếc máy xay sinh tố thu gọn biểu thức rối rắm thành dạng tinh chất cơ bản nhất qua từng bước biến đổi gọn gàng.
- **Grammar & collocations:**
  - compute term reduction in Church-Turing systems (tính toán sự rút gọn thuật ngữ trong các hệ thống Church-Turing)
  - rules of term reduction (các quy tắc rút gọn thuật ngữ)
  - termination of term reduction (sự kết thúc của quá trình rút gọn thuật ngữ)
- **Register & nuance:** Lambda calculus, theory of computation, and functional programming semantics.
- **Examples:**
  - *Example 1:* Evaluating functional programs relies fundamentally on confluent term reduction conforming to Church-Turing models. (Việc đánh giá các chương trình hàm phụ thuộc cơ bản vào sự rút gọn thuật ngữ hội tụ phù hợp với các mô hình Church-Turing.)
  - *Example 2:* The interpreter performs step-by-step term reduction until reaching a normal form. (Trình thông dịch thực hiện rút gọn thuật ngữ từng bước cho đến khi đạt được dạng chuẩn.)
- **Liên kết tiếng Hàn:** 텀 리덕션 Church-Turing (term reduction Church-Turing) — Quá trình rút gọn biểu thức tính toán theo mô hình tính toán nền tảng.

## 22. empty type ex falso quodlibet
- **IPA:** /ˈɛmpti taɪp ɛks ˈfælsoʊ kwɒdˈlɪbɛt/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); kiểu rỗng ex falso quodlibet.
- **Core meaning — English:** The principle in intuitionistic logic and type theory that from an empty type (representing falsity), any arbitrary type or conclusion can be logically derived.
- **Core meaning & mental image — Tiếng Việt:** Kiểu rỗng ex falso quodlibet. Hình ảnh: Căn phòng hoàn toàn trống rỗng (vô lý), từ sự vô lý đó bạn có thể suy diễn ra bất kỳ điều gì trên đời.
- **Grammar & collocations:**
  - eliminate contradictions using the empty type ex falso quodlibet (loại bỏ mâu thuẫn bằng kiểu rỗng ex falso quodlibet)
  - principle of the empty type ex falso quodlibet (nguyên lý của kiểu rỗng ex falso quodlibet)
  - proofs involving empty type ex falso quodlibet (các chứng minh liên quan đến kiểu rỗng ex falso quodlibet)
- **Register & nuance:** Intuitionistic logic, type theory, and proof assistant reasoning.
- **Examples:**
  - *Example 1:* In constructive type theory, refuting an impossible assumption constructs a term of the empty type ex falso quodlibet. (Trong lý thuyết kiểu kiến thiết, việc bác bỏ một giả định bất khả thi xây dựng nên một thuật ngữ của kiểu rỗng ex falso quodlibet.)
  - *Example 2:* The eliminator for the empty type embodies the logical rule of ex falso quodlibet, proving anything from absurdity. (Bộ loại bỏ cho kiểu rỗng hiện thân cho quy tắc logic ex falso quodlibet, chứng minh bất cứ điều gì từ sự vô lý.)
- **Liên kết tiếng Hàn:** 공집합 타입 ex falso quodlibet (空集合 type ex falso quodlibet) — Nguyên lý logic từ tiền đề sai lầm có thể suy diễn ra mọi kết luận.

## 23. unit type trivial truth
- **IPA:** /ˈjuːnɪt taɪp ˈtrɪviəl truːθ/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); kiểu đơn vị chân lý hiển nhiên.
- **Core meaning — English:** A type possessing exactly one inhabitant, representing a trivial truth or logically valid proposition that requires no complex proof.
- **Core meaning & mental image — Tiếng Việt:** Kiểu đơn vị chân lý hiển nhiên. Hình ảnh: Chiếc hộp chứa đúng một món quà duy nhất luôn có sẵn, đại diện cho chân lý hiển nhiên ai cũng công nhận.
- **Grammar & collocations:**
  - inhabit a unit type trivial truth (chứa kiểu đơn vị chân lý hiển nhiên)
  - represent logical truth with a unit type trivial truth (đại diện cho chân lý logic bằng kiểu đơn vị chân lý hiển nhiên)
  - trivial proof using unit type trivial truth (chứng minh hiển nhiên sử dụng kiểu đơn vị chân lý hiển nhiên)
- **Register & nuance:** Type theory, Curry-Howard correspondence, and foundational logic.
- **Examples:**
  - *Example 1:* The unit type trivial truth corresponds to the logical proposition of true ($\top$), possessing a single canonical element. (Kiểu đơn vị chân lý hiển nhiên tương ứng với mệnh đề logic đúng, sở hữu một phần tử kinh điển duy nhất.)
  - *Example 2:* Proving tautologies in proof assistants often concludes by inhabiting the unit type trivial truth. (Việc chứng minh các hằng đúng trong các trợ lý chứng minh thường kết thúc bằng cách lấp đầy kiểu đơn vị chân lý hiển nhiên.)
- **Liên kết tiếng Hàn:** 유닛 타입 자명한 진리 (unit type 自明한 眞理) — Kiểu dữ liệu chứa đúng một phần tử đại diện cho chân lý hiển nhiên trong logic.

## 24. dependent pattern matching with-clause
- **IPA:** /dɪˈpɛndənt ˈpætərn ˈmætʃɪŋ wɪð klɔːz/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); mệnh đề phụ thuộc khớp mẫu với-clause.
- **Core meaning — English:** An advanced language feature in dependently typed programming that refines dependent indices during pattern matching across multiple constructor branches.
- **Core meaning & mental image — Tiếng Việt:** Mệnh đề phụ thuộc khớp mẫu với-clause. Hình ảnh: Chiếc chìa khóa thông minh tự động tinh chỉnh các rãnh bên trong khi mở từng chiếc ổ khóa khác nhau trong một chuỗi các nhánh rẽ phức tạp.
- **Grammar & collocations:**
  - write a dependent pattern matching with-clause (viết mệnh đề phụ thuộc khớp mẫu với-clause)
  - refine types with dependent pattern matching with-clauses (tinh chỉnh các kiểu bằng các mệnh đề phụ thuộc khớp mẫu với-clause)
  - complexity of dependent pattern matching with-clauses (độ phức tạp của các mệnh đề phụ thuộc khớp mẫu với-clause)
- **Register & nuance:** Dependently typed programming languages (Agda, Idris, Coq).
- **Examples:**
  - *Example 1:* Implementing vector reverse in Agda requires a careful dependent pattern matching with-clause to reconcile length indices. (Việc triển khai đảo ngược véc-tơ trong Agda đòi hỏi một mệnh đề phụ thuộc khớp mẫu với-clause cẩn thận để điều hòa các chỉ số độ dài.)
  - *Example 2:* The with-clause enables dependent pattern matching by bringing intermediate equality constraints into local scope. (Mệnh đề with-clause cho phép khớp mẫu phụ thuộc bằng cách đưa các ràng buộc đẳng cục bộ vào phạm vi cục bộ.)
- **Liên kết tiếng Hàn:** 의존 패턴 매칭 with-clause (依存 pattern matching with-clause) — Cú pháp khớp mẫu nâng cao trong lập trình kiểu phụ thuộc để tinh chỉnh chỉ số.

## 25. fully mechanized proof assistant
- **IPA:** /ˈfʊli ˈmɛkənaɪzd pruːf əˈsɪstənt/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); trợ lý chứng minh được cơ giới hóa hoàn toàn.
- **Core meaning — English:** A rigorous software system that checks every single logical inference step of a mathematical proof with absolute machine precision, leaving no room for human error.
- **Core meaning & mental image — Tiếng Việt:** Trợ lý chứng minh được cơ giới hóa hoàn toàn. Hình ảnh: Cỗ máy kiểm định tự động tối tân rà soát từng dòng suy luận nhỏ nhất của nhà toán học, đảm bảo không một hạt bụi sai sót nào có thể lọt qua.
- **Grammar & collocations:**
  - build systems using a fully mechanized proof assistant (xây dựng các hệ thống sử dụng trợ lý chứng minh được cơ giới hóa hoàn toàn)
  - reliability of a fully mechanized proof assistant (độ tin cậy của trợ lý chứng minh được cơ giới hóa hoàn toàn)
  - verify mathematics via a fully mechanized proof assistant (xác minh toán học thông qua trợ lý chứng minh được cơ giới hóa hoàn toàn)
- **Register & nuance:** Formal mathematics, software verification, and high-assurance engineering.
- **Examples:**
  - *Example 1:* Modern computer science research increasingly relies on a fully mechanized proof assistant to verify monumental mathematical theorems. (Nghiên cứu khoa học máy tính hiện đại ngày càng dựa vào trợ lý chứng minh được cơ giới hóa hoàn toàn để xác minh các định lý toán học vĩ đại.)
  - *Example 2:* Trust in the verified kernel is absolute when using a fully mechanized proof assistant backed by a small trusted code base. (Niềm tin vào nhân được xác minh là tuyệt đối khi sử dụng trợ lý chứng minh được cơ giới hóa hoàn toàn được hỗ trợ bởi một cơ sở mã tin cậy nhỏ.)
- **Liên kết tiếng Hàn:** 완전 기계화된 증명 조교 (完全 機械化된 證明 助敎) — Hệ thống phần mềm tự động kiểm tra từng bước suy luận logic của chứng minh toán học.

---

## Review in context: Part 1 (items 1–12)

Advanced programming language theory and rigorous software verification find their ultimate expression in dependent type systems. At the foundational core is **Martin-Löf dependent type theory**, which embodies the elegant **Curry-Howard correspondence isomorphism**, treating logic propositions and data types as one and the same under the **propositions-as-types principle**. To build robust software, engineers leverage **type-level compile-time metaprogramming**, utilizing **dependent function types (pi-types)** and **dependent pair types (sigma-types)** to construct precise data structures. By employing an **inductive type family constructor**, programmers define advanced abstractions like a **vector length-indexed type**, ensuring safety via **compile-time invariant enforcement**. When theorems are established, they yield an explicit **constructive mathematical proof witness**. Furthermore, maintaining the **decidability of type checking** is crucial, while a **universe polymorphism hierarchy** prevents logical paradoxes, and distinguishing **intensional vs extensional equality** clarifies structural versus behavioral equivalence.

### Vietnamese translation — Phần 1:
Lý thuyết ngôn ngữ lập trình nâng cao và xác minh phần mềm nghiêm ngặt tìm thấy sự thể hiện tối ưu của chúng trong các hệ thống kiểu phụ thuộc. Ở cốt lõi nền tảng là **lý thuyết kiểu phụ thuộc Martin-Löf**, hiện thực hóa **sự đẳng cấu tương ứng Curry-Howard** thanh lịch, đối xử với các mệnh đề logic và kiểu dữ liệu là một dưới **nguyên lý mệnh đề như là kiểu**. Để xây dựng phần mềm vững chắc, các kỹ sư tận dụng **lập trình siêu cấp độ kiểu lúc biên dịch**, sử dụng **kiểu hàm phụ thuộc (pi-type)** và **kiểu cặp phụ thuộc (sigma-type)** để xây dựng các cấu trúc dữ liệu chính xác. Bằng cách sử dụng **bộ kiến tạo họ kiểu quy nạp**, các lập trình viên định nghĩa các trừu tượng hóa nâng cao như **kiểu véc-tơ lập chỉ mục theo độ dài**, đảm bảo an toàn thông qua **sự cưỡng chế bất biến lúc biên dịch**. Khi các định lý được thiết lập, chúng tạo ra một **nhân chứng chứng minh toán học kiến thiết** tường minh. Hơn nữa, việc duy trì **tính giải quyết được của việc kiểm tra kiểu** là vô cùng quan trọng, trong khi **phân cấp đa hình vũ trụ** ngăn chặn các nghịch lý logic, và việc phân biệt **bằng nhau nội hàm và ngoại diên** làm rõ tính tương đương cấu trúc so với hành vi.

---

## Review in context: Part 2 (items 13–25)

To guarantee absolute software correctness, researchers utilize an **interactive theorem prover Agda Coq** as a **fully mechanized proof assistant**. Within these systems, the **proof irrelevance axiom** simplifies proof terms, while a strict **totality checking termination metric** ensures that all recursive functions terminate successfully. Advanced systems extend into **higher inductive type homotopy** and explore the profound **univalence axiom identity equivalence**. To automate complex reasoning, developers deploy **type-level arithmetic reflection**. Computationally, expressions undergo systematic **term reduction Church-Turing**, while logical foundations are anchored by the **empty type ex falso quodlibet** and the **unit type trivial truth**. When working with complex dependently typed functions, mastering **dependent pattern matching with-clauses** is essential. Ultimately, these rigorous techniques culminate in **verified software formal certification**, guaranteeing absolute reliability.

### Vietnamese translation — Phần 2:
Để đảm bảo tính đúng đắn tuyệt đối của phần mềm, các nhà nghiên cứu sử dụng **trợ lý định lý tương tác Agda Coq** như một **trợ lý chứng minh được cơ giới hóa hoàn toàn**. Bên trong các hệ thống này, **tiên đề tính không quan trọng của chứng minh** đơn giản hóa các thuật ngữ chứng minh, trong khi **thước đo chấm dứt kiểm tra tính toàn phần** nghiêm ngặt đảm bảo rằng mọi hàm đệ quy đều kết thúc thành công. Các hệ thống nâng cao mở rộng sang **tính đồng luân kiểu quy nạp bậc cao** và khám phá **sự tương đương đồng nhất tiên đề đơn trị** sâu sắc. Để tự động hóa việc suy luận phức tạp, các nhà phát triển triển khai **sự phản xạ số học cấp độ kiểu**. Về mặt tính toán, các biểu thức trải qua **sự rút gọn thuật ngữ Church-Turing** có hệ thống, trong khi các nền tảng logic được neo giữ bởi **kiểu rỗng ex falso quodlibet** và **kiểu đơn vị chân lý hiển nhiên**. Khi làm việc với các hàm phụ thuộc phức tạp, việc làm chủ **mệnh đề phụ thuộc khớp mẫu với-clause** là điều thiết yếu. Cuối cùng, những kỹ thuật nghiêm ngặt này hội tụ thành **chứng nhận hình thức phần mềm đã được kiểm chứng**, đảm bảo độ tin cậy tuyệt đối.
