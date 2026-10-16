# C2 Vocabulary 196 — Girardian linear logic, proof nets geometric correctness, and resource-bounded cut-elimination

Được phát minh bởi nhà logic học người Pháp Jean-Yves Girard vào năm 1987, Logic tuyến tính (Linear Logic) đại diện cho cuộc tái cấu trúc mang tính kiến tạo sâu sắc nhất đối với logic toán học kể từ thời Aristotle và Frege. Trong logic cổ điển và logic trực giác, các tiền đề và giả thiết được xem là những "chân lý vĩnh cửu": một khi một sự thật đã được chứng minh, nó có thể được tái sử dụng vô hạn lần (sao chép - contraction) hoặc bị lờ đi không dùng đến (vứt bỏ - weakening) mà không làm suy chuyển tính hợp lệ của hệ thống. Girard nhận ra rằng cách tiếp cận này hoàn toàn xa rời thực tế tính toán vật lý, nơi mọi thao tác đều tiêu tốn tài nguyên hữu hạn (bộ nhớ, năng lượng, thời gian, trạng thái lượng tử). Bằng cách loại bỏ hai quy tắc cấu trúc suy diễn này, logic tuyến tính biến các mệnh đề thành các **tài nguyên tiêu hao** (consumable resources): mỗi giả thiết phải được tiêu thụ chính xác một lần duy nhất. Đột phá này phân tách phép hội và phép tuyển cổ điển thành hai cặp liên từ hoàn toàn mới: nhóm nhân tính (multiplicatives: tensor $\otimes$ và par $\wp$) đại diện cho sự kết hợp và chia sẻ đồng thời, và nhóm cộng tính (additives: with $\&\&$ và plus $\oplus$) đại diện cho sự lựa chọn và phương án thay thế. Để biểu diễn các chứng minh tuyến tính mà không bị ràng buộc bởi sự tùy tiện của trật tự dòng chữ viết (bộ máy tuần tự hóa hình thức), Girard sáng tạo ra **Lưới chứng minh** (Proof Nets) — một biểu diễn hình học đồ thị thuần khiết, nơi việc khử nhát cắt (cut-elimination) tương ứng trực tiếp với sự rút gọn đồ thị tính toán không xung đột. Bài học C2 này cung cấp 25 thuật ngữ học thuật tinh hoa nhất về logic tài nguyên, ngữ nghĩa trò chơi (game semantics) và tính toán hình học lượng tử.

Flow của bài học: **Girardian linear logic** → **resource-bounded cut-elimination** → **linear logic proof net** → **multiplicative conjunction tensor** → **multiplicative disjunction par** → **additive conjunction with** → **additive disjunction plus** → **exponential modality bang** → **exponential modality why-not** → **Danthos-Regnier switching criterion** → **proof net geometric correctness** → **cut-elimination confluence** → **linear logic game semantics** → **structural contraction rule elimination** → **structural weakening rule prohibition** → **no-cloning logical theorem** → **linear negation involutive duality** → **coherent space denotational semantics** → **resource sensitivity invariant** → **bounded linear logic complexity** → **light linear logic polynomiality** → **interaction net graph reduction** → **geometry of interaction invariant** → **multiplicative linear logic soundness** → **proof net sequentialization theorem**.

---

## 1. Girardian linear logic /ʒiːˈrɑːr.di.ən ˈlɪn.i.ɚ ˈlɑː.dʒɪk/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ hoặc đối tượng nghiên cứu lý thuyết kiểu và logic toán học (ví dụ: `formulate Girardian linear logic`, `foundations of Girardian linear logic`).

**Core meaning — English:** The resource-conscious logical substructural framework introduced by Jean-Yves Girard in 1987, which refines classical and intuitionistic logic by treating propositions as consumable physical resources that must be used exactly once, rather than reusable static truths.

**Core meaning & mental image — Tiếng Việt:** Logic tuyến tính Girard; hãy hình dung bạn cầm một tờ tiền 100 đô la bước vào nhà hàng: trong logic cổ điển, bạn có thể dùng tờ 100 đô đó mua một bữa ăn thịnh soạn, rồi sau đó vẫn giữ nguyên tờ tiền đó để mua tiếp một chiếc áo khoác (sao chép vô tận); nhưng trong thế giới thực và trong logic tuyến tính Girard, tờ tiền 100 đô là một tài nguyên: một khi bạn đã đổi nó lấy bữa ăn, tờ tiền đó lập tức biến mất (bị tiêu thụ); mệnh đề không còn là tri thức vĩnh hằng mà là một vật thể hữu hình tuân theo định luật bảo toàn.

**Grammar & collocations:** `principles of Girardian linear logic` — các nguyên lý của logic tuyến tính Girard; `semantics of Girardian linear logic` — ngữ nghĩa của logic tuyến tính Girard; `constructive power of Girardian linear logic` — sức mạnh kiến tạo của logic tuyến tính Girard.

**Register & nuance:** `theoretical computer science & mathematical logic` — bước ngoặt cách mạng kết nối logic hình thức với tính toán song song, ngôn ngữ lập trình tuyến tính (Rust ownership/borrowing), và cơ học lượng tử.

**Examples:** `Girardian linear logic revolutionized theoretical computer science by establishing a direct correspondence between logical proof normalization and physical resource consumption.` → Logic tuyến tính Girard đã cách mạng hóa khoa học máy tính lý thuyết bằng cách thiết lập sự tương ứng trực tiếp giữa việc chuẩn hóa chứng minh logic và sự tiêu thụ tài nguyên vật lý.

**Liên kết tiếng Hàn:** `지라르 선형 논리` (Girard 線型 論理) — hệ thống logic phi cấu trúc do Jean-Yves Girard đề xuất coi các mệnh đề như tài nguyên bị tiêu hao chính xác một lần thay vì chân lý có thể tái sử dụng.

---

## 2. resource-bounded cut-elimination /ˈriː.sɔːrs ˈbaʊn.dɪd kʌt ɪˌlɪm.əˈneɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là quá trình chuẩn hóa chứng minh bảo đảm độ phức tạp tính toán bị giới hạn nghiêm ngặt (ví dụ: `guarantee resource-bounded cut-elimination`).

**Core meaning — English:** The constructive procedure of removing cut inferences (lemmas) from a linear logic proof net or sequent derivation under explicit polynomial, elementary, or logarithmic bounds on execution steps and resource footprint.

**Core meaning & mental image — Tiếng Việt:** Khử nhát cắt bị giới hạn tài nguyên; hãy hình dung bạn giải một bài toán hình học phức tạp bằng cách đặt ra các bổ đề trung gian (nhát cắt - cut); quá trình khử nhát cắt giống như một cỗ máy tự động thay thế tất cả các bổ đề gián tiếp bằng các lập luận trực tiếp nối thẳng từ giả thiết đến kết luận; trong logic tuyến tính, cỗ máy rút gọn này được lắp một chiếc đồng hồ đo năng lượng nghiêm ngặt: nó bảo đảm toàn bộ quá trình biến đổi chứng minh (tương đương với việc chạy một chương trình máy tính) sẽ dừng lại sau đúng một số bước hữu hạn được khống chế chặt chẽ.

**Grammar & collocations:** `execute resource-bounded cut-elimination` — thực thi việc khử nhát cắt bị giới hạn tài nguyên; `complexity of resource-bounded cut-elimination` — độ phức tạp của việc khử nhát cắt bị giới hạn tài nguyên; `resource-bounded cut-elimination algorithm` — thuật toán khử nhát cắt bị giới hạn tài nguyên.

**Register & nuance:** `implicit computational complexity (ICC)` — phân nhánh tinh tế của logic tuyến tính (như Bounded Linear Logic, Light Linear Logic); bảo đảm việc thực thi chương trình tự động thuộc lớp thời gian đa thức (PTIME) mà không cần giám sát thời gian chạy từ bên ngoài.

**Examples:** `By calibrating exponential modalities, light linear logic guarantees that resource-bounded cut-elimination terminates in polynomial time with respect to the initial proof size.` → Bằng cách hiệu chỉnh các thể thức lũy thừa, logic tuyến tính nhẹ bảo đảm rằng việc khử nhát cắt bị giới hạn tài nguyên sẽ dừng lại trong thời gian đa thức đối với kích thước chứng minh ban đầu.

**Liên kết tiếng Hàn:** `자원 제한적 컷 제거` (資源 制限的 cut 除去) — quy trình chuẩn hóa chứng minh loại bỏ các suy diễn trung gian dưới các giới hạn nghiêm ngặt về số bước và tài nguyên tính toán.

---

## 3. linear logic proof net /ˈlɪn.i.ɚ ˈlɑː.dʒɪk pruːf nɛt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm cấu trúc hình học biểu diễn chứng minh phi cú pháp (ví dụ: `construct a linear logic proof net`, `reduce a linear logic proof net`).

**Core meaning — English:** A graph-theoretic, geometric syntax for linear logic proofs that abstracts away irrelevant bureaucratic permutations of inference rules, representing logical formulas as nodes and logical inferences as typed links.

**Core meaning & mental image — Tiếng Việt:** Lưới chứng minh logic tuyến tính; hãy hình dung một mạch vi mạch điện tử in trên bo mạch: thay vì viết ra một bài văn dài dòng miêu tả từng bước dòng điện chạy qua điện trở nào trước, tụ điện nào sau (sự quan liêu của trật tự dòng chữ); lưới chứng minh là chính bản vẽ sơ đồ mạch hình học: các dây nối (links) nối trực tiếp các chân linh kiện lại với nhau; hai bài viết chứng minh khác nhau về thứ tự dòng chữ nhưng có cùng bản chất suy luận sẽ cho ra đúng một tấm lưới bo mạch duy nhất.

**Grammar & collocations:** `evaluate a linear logic proof net` — đánh giá một lưới chứng minh logic tuyến tính; `topology of a linear logic proof net` — tô pô của một lưới chứng minh logic tuyến tính; `linear logic proof net normalization` — sự chuẩn hóa lưới chứng minh logic tuyến tính.

**Register & nuance:** `proof theory & geometric syntax` — phát kiến thiên tài của Girard; loại bỏ hoàn toàn hiện tượng "bureaucracy" (sự quan liêu cú pháp) trong hệ thống chứng minh dãy (sequent calculus) của Gentzen.

**Examples:** `Representing the functional program as a linear logic proof net reveals inherent concurrency, as independent subgraphs can be reduced in parallel without coordination.` → Việc biểu diễn chương trình hàm dưới dạng một lưới chứng minh logic tuyến tính làm lộ rõ tính đồng thời cố hữu, vì các đồ thị con độc lập có thể được rút gọn song song mà không cần điều phối.

**Liên kết tiếng Hàn:** `선형 논리 증명망` (線型 論理 證明網) — cấu trúc đồ thị hình học biểu diễn các chứng minh logic tuyến tính giúp loại bỏ sự tùy tiện về thứ tự áp dụng quy tắc suy diễn cú pháp.

---

## 4. multiplicative conjunction tensor /ˌmʌl.təˈplɪk.ə.t̬ɪv kənˈdʒʌŋk.ʃən ˈtɛn.sɚ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là liên từ nhân tính hội kết hợp đồng thời hai tài nguyên (ví dụ: `bind via multiplicative conjunction tensor`).

**Core meaning — English:** The linear logic connective $\otimes$ (tensor) denoting the simultaneous, joint availability of two distinct resources, requiring both components to be present and consumed together.

**Core meaning & mental image — Tiếng Việt:** Liên từ nhân tính tensor; hãy hình dung một chiếc bánh burger kẹp thịt: để có được chiếc burger hoàn chỉnh, bạn bắt buộc phải có cả miếng thịt bò VÀ miếng bánh mì (A $\otimes$ B); bạn không thể chọn một trong hai, cũng không thể dùng một thứ hai lần; hai tài nguyên này tồn tại song hành và gắn kết chặt chẽ với nhau trong cùng một không gian, cả hai đều phải được tiêu thụ đồng thời trong một bữa ăn.

**Grammar & collocations:** `introduce a multiplicative conjunction tensor` — giới thiệu một liên từ nhân tính tensor; `decompose a multiplicative conjunction tensor` — phân rã một liên từ nhân tính tensor; `multiplicative conjunction tensor semantics` — ngữ nghĩa của liên từ nhân tính tensor.

**Register & nuance:** `linear type systems & monoidal category theory` — tương ứng với tích tensor trong phạm trù đơn vị (symmetric monoidal category) và kiểu cặp đôi độc lập (pair type / linear tuple) trong các ngôn ngữ lập trình hướng tài nguyên.

**Examples:** `In linear logic, the formula A tensor B represents the concurrent possession of both resource A and resource B, requiring the linear context to be split strictly between them.` → Trong logic tuyến tính, công thức A tensor B đại diện cho việc sở hữu đồng thời cả tài nguyên A và tài nguyên B, đòi hỏi ngữ cảnh tuyến tính phải được phân chia nghiêm ngặt giữa chúng.

**Liên kết tiếng Hàn:** `승법적 연언 텐서` (乘法的 連言 tensor) — liên từ nhân tính $\otimes$ trong logic tuyến tính biểu thị sự hiện diện và tiêu thụ đồng thời của hai tài nguyên riêng biệt.

---

## 5. multiplicative disjunction par /ˌmʌl.təˈplɪk.ə.t̬ɪv dɪsˈdʒʌŋk.ʃən pɑːr/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm liên từ đối ngẫu nhân tính biểu thị sự liên lạc song song (ví dụ: `satisfy multiplicative disjunction par`).

**Core meaning — English:** The linear logic connective $\wp$ (par), the De Morgan dual of tensor, representing concurrent communication or potential mutual dependency where one resource becomes available if the dual of the other is consumed.

**Core meaning & mental image — Tiếng Việt:** Liên từ nhân tính par; hãy hình dung một đường ống thông tin liên lạc hai chiều giữa hai căn phòng: par (A $\wp$ B) không phải là bạn có A hoặc B theo kiểu rời rạc; nó đại diện cho một kênh kết nối đồng thời: nếu bạn cung cấp đầu vào phủ định của A ở phòng này, thì B lập tức xuất hiện ở phòng bên kia; nó tương đương với một lời hứa chuyển giao thông điệp song song (concurrency / continuation).

**Grammar & collocations:** `evaluate multiplicative disjunction par` — đánh giá liên từ nhân tính par; `duality of multiplicative disjunction par` — tính đối ngẫu của liên từ nhân tính par; `multiplicative disjunction par link` — liên kết liên từ nhân tính par.

**Register & nuance:** `linear logic duality & process calculi (pi-calculus)` — liên từ khó nắm bắt nhất trong logic tuyến tính đối với người học cổ điển; tương đương logic với phép kéo theo tuyến tính ($A \multimap B \equiv A^\perp \wp B$), biểu diễn sự liên lạc song song giữa hai tiến trình.

**Examples:** `The multiplicative disjunction par embodies concurrent communication, allowing a proof of A par B to interact dynamically with an incoming dual environment.` → Liên từ nhân tính par hiện thân cho sự liên lạc đồng thời, cho phép một chứng minh của A par B tương tác động với một môi trường đối ngẫu đi vào.

**Liên kết tiếng Hàn:** `승법적 선언 파` (乘法的 選言 par) — liên từ nhân tính $\wp$ trong logic tuyến tính, là đối ngẫu De Morgan của tensor, biểu diễn sự liên lạc đồng thời hoặc sự phụ thuộc lẫn nhau.

---

## 6. additive conjunction with /ˈæd.ə.t̬ɪv kənˈdʒʌŋk.ʃən wɪð/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là liên từ cộng tính đại diện cho sự lựa chọn từ phía người dùng (ví dụ: `apply additive conjunction with`).

**Core meaning — English:** The additive connective $\&\&$ (with) in linear logic representing an internal or external choice offered to the environment, providing the capacity to choose either resource A or resource B from a single shared context, but not both.

**Core meaning & mental image — Tiếng Việt:** Liên từ cộng tính with; hãy hình dung thực đơn combo trưa tại một nhà hàng: với giá 10 đô la, bạn được chọn HOẶC là một ly trà đào HOẶC là một tách cà phê (A $\&\&$ B); nhà hàng có khả năng cung cấp cả hai món (chứng minh tồn tại cho cả A và B), nhưng khi bạn đã đưa ra quyết định chọn cà phê, ly trà đào sẽ không bao giờ được làm ra; bạn chỉ được nhận đúng một món từ ngân sách tài nguyên đã chi trả.

**Grammar & collocations:** `resolve an additive conjunction with` — giải quyết một liên từ cộng tính with; `additive conjunction with operator` — toán tử liên từ cộng tính with; `external choice of additive conjunction with` — sự lựa chọn bên ngoài của liên từ cộng tính with.

**Register & nuance:** `session types & categorical products` — tương ứng với tích Descartes (cartesian product) trong lý thuyết phạm trù và kiểu dữ liệu bản ghi có phương thức (object/record with methods), nơi người gọi quyết định phương thức nào sẽ được triệu gọi.

**Examples:** `Under the additive conjunction with, the environment is granted the authority to select whether it will extract resource A or resource B from the single linear proof.` → Dưới liên từ cộng tính with, môi trường được trao quyền chọn liệu nó sẽ trích xuất tài nguyên A hay tài nguyên B từ chứng minh tuyến tính duy nhất.

**Liên kết tiếng Hàn:** `가법적 연언 위드` (加法的 連言 with) — liên từ cộng tính $\&\&$ trong logic tuyến tính biểu thị sự lựa chọn bên ngoài, nơi môi trường có thể chọn nhận tài nguyên A hoặc B từ một ngữ cảnh duy nhất.

---

## 7. additive disjunction plus /ˈæd.ə.t̬ɪv dɪsˈdʒʌŋk.ʃən plʌs/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm liên từ cộng tính đại diện cho sự lựa chọn nội tại của hệ thống (ví dụ: `instantiate an additive disjunction plus`).

**Core meaning — English:** The additive connective $\oplus$ (plus) in linear logic representing internal choice or state branching, where the system produces either resource A or resource B, and the environment must be prepared to handle whichever arrives.

**Core meaning & mental image — Tiếng Việt:** Liên từ cộng tính plus; hãy hình dung một chiếc máy bán kẹo bí ẩn: bạn nhét đồng xu vào máy (tiêu thụ tài nguyên), máy sẽ tự động quay số ngẫu nhiên và nhả ra HOẶC là một viên kẹo dâu HOẶC là một viên kẹo cam (A $\oplus$ B); quyền quyết định viên kẹo nào xuất hiện thuộc về chiếc máy (internal choice), người chơi không được chọn mà phải mở cả hai tay sẵn sàng đón nhận bất kỳ loại kẹo nào máy nhả ra.

**Grammar & collocations:** `branch on additive disjunction plus` — rẽ nhánh trên liên từ cộng tính plus; `additive disjunction plus injection` — phép nhúng của liên từ cộng tính plus; `pattern match on additive disjunction plus` — khớp mẫu trên liên từ cộng tính plus.

**Register & nuance:** `linear sum types & tagged unions` — tương ứng với tổng rời rạc (coproduct) trong lý thuyết phạm trù và kiểu `Either` hoặc `enum` trong các ngôn ngữ hàm; hệ thống thông báo trạng thái rẽ nhánh cho môi trường.

**Examples:** `The server response is modeled as an additive disjunction plus, emitting either an authorization token or an explicit authentication failure payload.` → Phản hồi của máy chủ được mô hình hóa như một liên từ cộng tính plus, phát ra hoặc là một mã thông báo ủy quyền hoặc là một tải trọng thất bại xác thực rõ ràng.

**Liên kết tiếng Hàn:** `가법적 선언 플러스` (加法的 選言 plus) — liên từ cộng tính $\oplus$ trong logic tuyến tính biểu thị sự lựa chọn nội tại, nơi hệ thống tự quyết định tạo ra tài nguyên A hoặc B và môi trường phải xử lý cả hai trường hợp.

---

## 8. exponential modality bang /ˌɛk.spoʊˈnɛn.ʃəl moʊˈdæl.ə.t̬i bæŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là toán tử mở khóa khả năng sao chép và tái sử dụng tài nguyên (ví dụ: `prefix with exponential modality bang`).

**Core meaning — English:** The linear logic unary operator $!$ (of course / bang) that marks a proposition as an unrestricted, reusable resource, reintroducing the classical capabilities of contraction (duplication) and weakening (erasure).

**Core meaning & mental image — Tiếng Việt:** Thể thức lũy thừa bang (!); hãy hình dung một cuốn sách quý: bình thường bạn chỉ có một cuốn sách giấy độc bản (tài nguyên tuyến tính tiêu hao); nhưng nếu bạn chụp ảnh cuốn sách đó và tải file PDF lên một máy in vô tận (áp dụng thể thức bang: $!A$), bạn có thể in ra 1 bản, 1000 bản để phát cho mọi người (sao chép - contraction), hoặc xóa file vứt đi mà không ai bận tâm (vứt bỏ - weakening); thể thức bang là chiếc máy photocopy kỳ diệu đưa logic cổ điển trở lại bên trong logic tuyến tính.

**Grammar & collocations:** `license via exponential modality bang` — cấp phép thông qua thể thức lũy thừa bang; `promote using exponential modality bang` — thăng cấp sử dụng thể thức lũy thừa bang; `exponential modality bang semantics` — ngữ nghĩa của thể thức lũy thừa bang.

**Register & nuance:** `substructural logic embedding & comonads` — một comonad trong lý thuyết phạm trù; cho phép logic tuyến tính bao hàm toàn bộ logic cổ điển và logic trực giác như một trường hợp đặc biệt thông qua phép dịch Girard ($A \to B \equiv !A \multimap B$).

**Examples:** `Prefixing a formula with the exponential modality bang indicates that the underlying resource can be replicated arbitrarily or discarded without consuming linear context.` → Việc thêm tiền tố thể thức lũy thừa bang vào một công thức chỉ ra rằng tài nguyên nền tảng có thể được nhân bản tùy ý hoặc loại bỏ mà không làm tiêu hao ngữ cảnh tuyến tính.

**Liên kết tiếng Hàn:** `지수 양상 뱅` (指數 樣相 bang) — toán tử $!$ trong logic tuyến tính đánh dấu một mệnh đề là tài nguyên không bị giới hạn, cho phép sao chép hoặc vứt bỏ như trong logic cổ điển.

---

## 9. exponential modality why-not /ˌɛk.spoʊˈnɛn.ʃəl moʊˈdæl.ə.t̬i waɪ nɑːt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm toán tử đối ngẫu của bang biểu diễn khả năng nhận tài nguyên lặp lại (ví dụ: `adjoin an exponential modality why-not`).

**Core meaning — English:** The linear logic unary operator $?$ (why not) that serves as the De Morgan dual of bang ($!$), representing the potential consumption or aggregation of an indeterminate number of dual resources.

**Core meaning & mental image — Tiếng Việt:** Thể thức lũy thừa why-not (?); hãy hình dung một chiếc hòm thư công cộng ở góc phố: hòm thư sẵn sàng nhận 0 lá thư, 1 lá thư, hoặc 100 lá thư gửi đến từ nhiều người khác nhau (?A); nó là đối ngẫu hoàn hảo của nhà máy in ấn: nếu bang ($!$) là nguồn phát tài nguyên vô tận, thì why-not ($?$) là chiếc phễu khổng lồ có khả năng hấp thụ và gom góp vô số phản hồi tài nguyên mà không làm vỡ cấu trúc của hệ thống.

**Grammar & collocations:** `dualize via exponential modality why-not` — đối ngẫu hóa thông qua thể thức lũy thừa why-not; `exponential modality why-not dereliction` — sự buông bỏ của thể thức lũy thừa why-not; `scope of exponential modality why-not` — phạm vi của thể thức lũy thừa why-not.

**Register & nuance:** `linear logic duality & monads` — đóng vai trò monad trong phạm trù học; hoàn thiện tính đối xứng thanh lịch tuyệt đối của logic tuyến tính, biến nó thành một hình học đối xứng đa chiều hoàn mỹ.

**Examples:** `The exponential modality why-not acts as a sink for reusable hypotheses, perfectly balancing the generative capacity of the bang operator.` → Thể thức lũy thừa why-not đóng vai trò như một bể chứa cho các giả thiết có thể tái sử dụng, cân bằng hoàn hảo năng lực sinh tạo của toán tử bang.

**Liên kết tiếng Hàn:** `지수 양상 와이낫` (指數 樣相 why-not) — toán tử $?$ trong logic tuyến tính, là đối ngẫu De Morgan của $!$, biểu diễn khả năng hấp thụ hoặc tích lũy một số lượng tài nguyên tùy ý.

---

## 10. Danthos-Regnier switching criterion /dɑːnˈtɔːs rɛnˈjeɪ ˈswɪtʃ.ɪŋ kraɪˈtɪr.i.ən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là tiêu chuẩn đồ thị kiểm tra tính đúng đắn của lưới chứng minh (ví dụ: `verify the Danthos-Regnier switching criterion`).

**Core meaning — English:** A graph-theoretic correctness criterion, formulated by Vincent Danos and Laurent Regnier, proving that a multiplicative proof structure is a valid proof net if and only if every switching graph obtained by disconnecting one edge of each par link is connected and acyclic (a tree).

**Core meaning & mental image — Tiếng Việt:** Tiêu chuẩn chuyển mạch Danos-Regnier; hãy hình dung một hệ thống đường ray xe lửa phức tạp có các nút bẻ ghi hai chiều (nút par): để kiểm tra xem hệ thống đường ray này có thông suốt và không bao giờ bị nghẽn mạch hay đâm nhau hay không; tiêu chuẩn Danos-Regnier yêu cầu: với mỗi nút bẻ ghi, bạn tùy ý gạt cần sang trái hoặc sang phải; nếu với MỌI cách gạt cần có thể xảy ra, mạng lưới đường ray còn lại luôn tạo thành một cái cây duy nhất (kết nối liền mạch từ đầu tới cuối và không có bất kỳ vòng tròn luẩn quẩn nào - acyclic), thì bản thiết kế chứng minh đó là hoàn toàn đúng đắn.

**Grammar & collocations:** `satisfy the Danthos-Regnier switching criterion` — thỏa mãn tiêu chuẩn chuyển mạch Danos-Regnier; `complexity of Danthos-Regnier switching criterion` — độ phức tạp của tiêu chuẩn chuyển mạch Danos-Regnier; `apply the Danthos-Regnier switching criterion` — áp dụng tiêu chuẩn chuyển mạch Danos-Regnier.

**Register & nuance:** `geometric proof theory (MLL correctness)` — tiêu chuẩn thanh lịch và hiệu quả nhất trong lý thuyết lưới chứng minh; thay thế tiêu chuẩn gốc phức tạp hơn của Girard bằng một thuật toán đồ thị trực quan và dễ cài đặt trên máy tính.

**Examples:** `To validate a candidate proof structure, the compiler checks the Danthos-Regnier switching criterion to confirm that all induced switching graphs form acyclic trees.` → Để xác thực một cấu trúc chứng minh ứng viên, trình biên dịch kiểm tra tiêu chuẩn chuyển mạch Danos-Regnier để xác nhận rằng mọi đồ thị chuyển mạch được tạo ra đều tạo thành các cây phi chu trình.

**Liên kết tiếng Hàn:** `다노스-레니에 스위칭 기준` (Danos-Regnier switching 基準) — tiêu chuẩn lý thuyết đồ thị chứng minh một cấu trúc chứng minh là lưới chứng minh hợp lệ khi và chỉ khi mọi đồ thị chuyển mạch thu được đều liên thông và không có chu trình.

---

## 11. proof net geometric correctness /pruːf nɛt ˌdʒiː.əˈmɛt.rɪk kəˈrɛkt.nəs/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm thuộc tính hợp lệ hình học của một lưới chứng minh (ví dụ: `establish proof net geometric correctness`).

**Core meaning — English:** The global topological condition ensuring that an arbitrary link graph (proof structure) corresponds to a legitimate linear logic proof, certifying freedom from deadlocks, cycles, and disconnected inferences.

**Core meaning & mental image — Tiếng Việt:** Tính đúng đắn hình học của lưới chứng minh; hãy hình dung việc đan một chiếc áo len: bạn có những sợi len và các mối móc; nếu bạn móc các mũi len tùy tiện, bạn sẽ tạo ra một mớ bòng bong rối rắm bị thắt nút hoặc đứt rời làm đôi; tính đúng đắn hình học là chứng chỉ bảo đảm tấm lưới len đó được móc theo đúng quy tắc tô pô: không có mối thòng lọng nào bị kẹt cứng (deadlock-free), toàn bộ chiếc áo là một thể thống nhất hoàn chỉnh có thể mở phẳng ra mà không rách.

**Grammar & collocations:** `decide proof net geometric correctness` — quyết định tính đúng đắn hình học của lưới chứng minh; `guarantee proof net geometric correctness` — bảo đảm tính đúng đắn hình học của lưới chứng minh; `invariants of proof net geometric correctness` — các bất biến của tính đúng đắn hình học của lưới chứng minh.

**Register & nuance:** `constructive logic foundations` — nét độc đáo nhất của logic tuyến tính: tính đúng đắn của một lập luận triết học hay chương trình máy tính không được kiểm tra bằng các bảng chân trị tĩnh mà bằng các đặc trưng tô pô hình học toàn cục của đồ thị.

**Examples:** `Proof net geometric correctness ensures that every reduction step preserves logical validity without degenerating into disconnected components.` → Tính đúng đắn hình học của lưới chứng minh bảo đảm rằng mọi bước rút gọn đều bảo tồn tính hợp lệ logic mà không bị thoái hóa thành các thành phần rời rạc.

**Liên kết tiếng Hàn:** `증명망 기하학적 정당성` (證明網 幾何學的 正當性) — điều kiện tô pô toàn cục bảo đảm một đồ thị liên kết tương ứng với một chứng minh logic tuyến tính hợp lệ, không có bế tắc hay chu trình thừa.

---

## 12. cut-elimination confluence /kʌt ɪˌlɪm.əˈneɪ.ʃən ˈkɑːn.fluː.əns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là tính hợp lưu của quá trình chuẩn hóa chứng minh (ví dụ: `prove cut-elimination confluence`).

**Core meaning — English:** The Church-Rosser mathematical property establishing that regardless of the order in which cut links are eliminated within a proof net, the graph reduction process will always terminate at the identical unique normal form.

**Core meaning & mental image — Tiếng Việt:** Tính hợp lưu của việc khử nhát cắt; hãy hình dung một con sông lớn chia thành nhiều nhánh nhỏ chảy qua các thung lũng khác nhau: dù các dòng nước rẽ sang ngách nào trước, ngách nào sau, cuối cùng tất cả các nhánh sông đều hội tụ về đúng một cửa biển duy nhất; trong lưới chứng minh, nếu có nhiều nhát cắt có thể khử cùng lúc, bạn có thể chọn khử nhát cắt nào trước cũng được; kết quả cuối cùng của chương trình luôn luôn là duy nhất, không phụ thuộc vào thứ tự thực thi.

**Grammar & collocations:** `demonstrate cut-elimination confluence` — chứng minh tính hợp lưu của việc khử nhát cắt; `strong cut-elimination confluence` — tính hợp lưu mạnh của việc khử nhát cắt; `preserve cut-elimination confluence` — bảo tồn tính hợp lưu của việc khử nhát cắt.

**Register & nuance:** `rewriting theory & Church-Rosser theorem` — nền tảng bảo đảm tính đơn định (determinism) của các ngôn ngữ lập trình hàm và hệ thống tính toán dựa trên logic tuyến tính.

**Examples:** `Because cut-elimination confluence holds strictly for proof nets, compilers can reorder optimization steps without altering the observable output of the computation.` → Vì tính hợp lưu của việc khử nhát cắt giữ vững nghiêm ngặt đối với các lưới chứng minh, các trình biên dịch có thể sắp xếp lại các bước tối ưu hóa mà không làm thay đổi đầu ra có thể quan sát được của phép tính.

**Liên kết tiếng Hàn:** `컷 제거 합류성` (cut 除去 合流性) — đặc tính toán học Church-Rosser khẳng định rằng bất kể trật tự khử các liên kết nhát cắt trong lưới chứng minh ra sao, quá trình rút gọn luôn dẫn tới một dạng chuẩn duy nhất.

---

## 13. linear logic game semantics /ˈlɪn.i.ɚ ˈlɑː.dʒɪk ɡeɪm sɪˈmæn.tɪks/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm lý thuyết ngữ nghĩa mô hình hóa logic tuyến tính bằng các trò chơi đối kháng (ví dụ: `formalize via linear logic game semantics`).

**Core meaning — English:** A dynamic model of computation and logic, advanced by Martin Hyland, Luke Ong, and Andreas Blass, where formulas are interpreted as games between two players (Proponent and Opponent), and proofs correspond to winning interactive strategies.

**Core meaning & mental image — Tiếng Việt:** Ngữ nghĩa trò chơi trong logic tuyến tính; hãy hình dung một ván cờ vua giữa hai kỳ thủ: một bên là người chứng minh (Proponent - hệ thống tính toán), một bên là người phản biện (Opponent - môi trường bên ngoài); một công thức logic không phải là một phát biểu tĩnh mà là bộ luật của bàn cờ; mỗi bước đi cờ của Opponent là một câu hỏi hoặc yêu cầu tài nguyên, và bước đáp trả của Proponent là sự cung cấp tài nguyên tương ứng; một chứng minh đúng đắn chính là một chiến thuật chơi cờ bất bại (winning strategy), luôn luôn đáp ứng được mọi đòn tấn công của đối thủ.

**Grammar & collocations:** `interpret through linear logic game semantics` — diễn giải thông qua ngữ nghĩa trò chơi trong logic tuyến tính; `framework of linear logic game semantics` — khung ngữ nghĩa trò chơi trong logic tuyến tính; `interactive linear logic game semantics` — ngữ nghĩa trò chơi trong logic tuyến tính có tính tương tác.

**Register & nuance:** `denotational semantics & interactive computation` — giải quyết trọn vẹn bài toán trừu tượng hóa hoàn toàn (full abstraction); cung cấp cái nhìn sâu sắc nhất về bản chất của tính toán: tính toán không phải là hàm số đóng kín mà là sự tương tác đối thoại động qua lại giữa chương trình và thế giới bên ngoài.

**Examples:** `Linear logic game semantics models computation as an interactive dialogue between system and environment, interpreting proofs as deterministic winning strategies.` → Ngữ nghĩa trò chơi trong logic tuyến tính mô hình hóa tính toán như một cuộc đối thoại tương tác giữa hệ thống và môi trường, diễn giải các chứng minh như những chiến thuật chiến thắng đơn định.

**Liên kết tiếng Hàn:** `선형 논리 게임 의미론` (線型 論理 game 意味論) — mô hình ngữ nghĩa biểu thị các công thức logic như các trò chơi giữa hai bên đối kháng và chứng minh là các chiến thuật thắng cuộc tương tác.

---

## 14. structural contraction rule elimination /ˈstrʌk.tʃɚ.əl kənˈtræk.ʃən ruːl ɪˌlɪm.əˈneɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là sự loại bỏ quy tắc sao chép giả thiết trong các hệ thống logic phi cấu trúc (ví dụ: `enforce structural contraction rule elimination`).

**Core meaning — English:** The removal of the structural inference rule that permits duplicating a premise ($A \vdash A \wedge A$), preventing programs from implicitly cloning resources or spawning unbounded copies of memory pointers.

**Core meaning & mental image — Tiếng Việt:** Sự loại bỏ quy tắc co rút cấu trúc; hãy hình dung một chiếc máy ATM phát tiền: trong logic truyền thống cho phép quy tắc co rút (contraction), bạn có một tờ 500 nghìn trong tài khoản và bạn có thể rút ra hai tờ 500 nghìn giống hệt nhau mà số dư không đổi; việc loại bỏ quy tắc co rút cấu trúc là việc gắn một cảm biến chống nhân bản vào máy: nếu bạn dùng giả thiết A, bạn không được phép tự nhân đôi nó thành A và A; muốn sao chép, bạn phải được sự cho phép rõ ràng thông qua một toán tử chuyên dụng ($!A$).

**Grammar & collocations:** `stipulate structural contraction rule elimination` — quy định sự loại bỏ quy tắc co rút cấu trúc; `consequences of structural contraction rule elimination` — hậu quả của sự loại bỏ quy tắc co rút cấu trúc; `impose structural contraction rule elimination` — áp đặt sự loại bỏ quy tắc co rút cấu trúc.

**Register & nuance:** `substructural logic taxonomy` — chìa khóa biến logic thông thường thành affine logic hoặc linear logic; nền tảng toán học cho các hệ thống kiểu sở hữu độc quyền (move semantics trong C++ và affine type system trong Rust).

**Examples:** `Structural contraction rule elimination is the precise mathematical constraint that prevents concurrent systems from duplicating unique hardware capabilities.` → Sự loại bỏ quy tắc co rút cấu trúc là ràng buộc toán học chính xác ngăn các hệ thống đồng thời nhân bản các năng lực phần cứng duy nhất.

**Liên kết tiếng Hàn:** `구조적 축약 규칙 제거` (構造的 縮約 規則 除去) — việc loại bỏ quy tắc suy diễn cho phép nhân bản tiền đề ($A \vdash A \wedge A$), ngăn chặn các chương trình tự ý sao chép tài nguyên bộ nhớ.

---

## 15. structural weakening rule prohibition /ˈstrʌk.tʃɚ.əl ˈwiː.kən.ɪŋ ruːl ˌproʊ.hɪˈbɪʃ.ən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm điều kiện cấm vứt bỏ tài nguyên mà không sử dụng (ví dụ: `adhere to structural weakening rule prohibition`).

**Core meaning — English:** The syntactic restriction forbidding the omission or silent discard of unconsumed hypotheses, ensuring that every allocated resource must be actively accounted for and reclaimed by the program.

**Core meaning & mental image — Tiếng Việt:** Sự cấm chỉ quy tắc làm yếu cấu trúc; hãy hình dung một nhân viên xử lý rác thải hạt nhân: anh ta được giao nhận 5 thanh nhiên liệu phóng xạ; trong logic cổ điển (có weakening), anh ta có thể chỉ dùng 4 thanh vào lò phản ứng và lờ thanh thứ 5 đi, vứt nó vào ngăn kéo bàn làm việc mà không ai hay biết; sự cấm chỉ quy tắc làm yếu cấu trúc bắt buộc anh ta phải sử dụng hoặc xử lý an toàn đúng toàn bộ cả 5 thanh nhiên liệu; không một tài nguyên nào được phép "bỏ rơi" (loại bỏ hoàn toàn rò rỉ bộ nhớ - memory leak).

**Grammar & collocations:** `mandate structural weakening rule prohibition` — bắt buộc sự cấm chỉ quy tắc làm yếu cấu trúc; `principle of structural weakening rule prohibition` — nguyên lý cấm chỉ quy tắc làm yếu cấu trúc; `verify structural weakening rule prohibition` — xác minh sự cấm chỉ quy tắc làm yếu cấu trúc.

**Register & nuance:** `strict resource linearity vs affine logic` — trong logic affine (như Rust), weakening được cho phép (tài nguyên có thể bị hủy tự động bằng destructor); nhưng trong logic tuyến tính thuần khiết của Girard, weakening bị cấm tuyệt đối, bảo đảm 100% mọi tài nguyên đều phải được tiêu thụ hữu hình.

**Examples:** `By enforcing structural weakening rule prohibition, strict linear languages guarantee that every allocated file handle and network socket is cleanly finalized.` → Bằng cách áp đặt sự cấm chỉ quy tắc làm yếu cấu trúc, các ngôn ngữ tuyến tính nghiêm ngặt bảo đảm rằng mọi trình xử lý tệp và socket mạng được cấp phát đều được hoàn tất sạch sẽ.

**Liên kết tiếng Hàn:** `구조적 약화 규칙 금지` (構造的 弱化 規則 禁止) — hạn chế cú pháp cấm việc âm thầm bỏ rơi các giả thiết không dùng đến, bảo đảm mọi tài nguyên cấp phát đều phải được tiêu thụ hoặc thu hồi chủ động.

---

## 16. no-cloning logical theorem /noʊ ˈkloʊn.ɪŋ ˈlɑː.dʒɪ.kəl ˈθiː.ɚ.əm/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là định lý logic chứng minh sự bất khả thi của việc sao chép trạng thái tùy ý (ví dụ: `formulate the no-cloning logical theorem`).

**Core meaning — English:** The linear logic manifestation of the quantum no-cloning principle, establishing that there exists no uniform linear derivation capable of duplicating an arbitrary un-banged proposition $A$ into $A \otimes A$.

**Core meaning & mental image — Tiếng Việt:** Định lý logic không nhân bản; hãy hình dung trong vật lý lượng tử: bạn không thể nào sao chép một trạng thái lượng tử chưa biết mà không làm sụp đổ nó; định lý logic không nhân bản chứng minh điều tương tự bằng ngôn ngữ toán học thuần túy: trong một thế giới tuyến tính, không tồn tại bất kỳ cỗ máy logic tổng quát nào có thể nhận một đầu vào A tùy ý và tạo ra hai bản sao $A \otimes A$ hoàn chỉnh; mọi trạng thái độc nhất đều có tính cá thể tuyệt đối và không thể bị sao chép lậu.

**Grammar & collocations:** `implications of the no-cloning logical theorem` — các hàm ý của định lý logic không nhân bản; `prove the no-cloning logical theorem` — chứng minh định lý logic không nhân bản; `no-cloning logical theorem in quantum computing` — định lý logic không nhân bản trong tính toán lượng tử.

**Register & nuance:** `quantum foundations & linear type systems` — mối liên kết trực tiếp giữa logic toán học và vật lý lượng tử; chứng minh rằng logic tuyến tính chính là ngôn ngữ tự nhiên đích thực để mô hình hóa các mạch tính toán lượng tử (quantum circuits).

**Examples:** `The no-cloning logical theorem proves that arbitrary linear states cannot be copied, cementing linear logic as the premier foundation for quantum programming languages.` → Định lý logic không nhân bản chứng minh rằng các trạng thái tuyến tính tùy ý không thể bị sao chép, củng cố vị thế của logic tuyến tính như nền tảng hàng đầu cho các ngôn ngữ lập trình lượng tử.

**Liên kết tiếng Hàn:** `복제 불가능 논리 정리` (複製 不可能 論理 定理) — định lý trong logic tuyến tính tương ứng với nguyên lý không nhân bản lượng tử, khẳng định không thể sao chép một mệnh đề tuyến tính tùy ý thành hai bản sao.

---

## 17. linear negation involutive duality /ˈlɪn.i.ɚ nɪˈɡeɪ.ʃən ˌɪn.vəˈluː.t̬ɪv duːˈæl.ə.t̬i/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tính chất đối ngẫu hoàn hảo của phép phủ định tuyến tính (ví dụ: `exhibit linear negation involutive duality`).

**Core meaning — English:** The mathematical property of linear negation ($A^{\perp}$) wherein taking the dual twice yields the original formula ($A^{\perp\perp} \cong A$), establishing perfect symmetry between assertions and refutations without classical truth tables.

**Core meaning & mental image — Tiếng Việt:** Tính đối ngẫu đối hợp của phủ định tuyến tính; hãy hình dung một chiếc găng tay da tinh xảo: khi bạn lộn mặt trong của chiếc găng tay ra ngoài (phủ định lần 1: $A^\perp$), bạn có mặt trái của chiếc găng; khi bạn lộn mặt trái đó ra ngoài một lần nữa (phủ định lần 2: $A^{\perp\perp}$), bạn lấy lại chính xác 100% hình dáng ban đầu của chiếc găng tay mặt phải; không giống như logic trực giác nơi hai lần phủ định không tương đương với khẳng định, phủ định tuyến tính là một phép đối ngẫu đối hợp hoàn hảo, giống như sự lật mặt của một đồng xu.

**Grammar & collocations:** `satisfy linear negation involutive duality` — thỏa mãn tính đối ngẫu đối hợp của phủ định tuyến tính; `symmetry of linear negation involutive duality` — tính đối xứng của tính đối ngẫu đối hợp của phủ định tuyến tính; `exploit linear negation involutive duality` — khai thác tính đối ngẫu đối hợp của phủ định tuyến tính.

**Register & nuance:** `proof theory & classical linear logic (CLL)` — sự thanh lịch vượt bậc của logic tuyến tính cổ điển; kết hợp được cả tính kiến tạo (constructive nature) của logic trực giác và tính đối xứng hoàn mỹ ($A = \neg \neg A$) của logic cổ điển.

**Examples:** `Through linear negation involutive duality, consumer and producer roles in concurrent protocols become completely symmetric reflections of one another.` → Thông qua tính đối ngẫu đối hợp của phủ định tuyến tính, các vai trò của bên tiêu thụ và bên sản xuất trong các giao thức đồng thời trở thành những hình ảnh phản chiếu đối xứng hoàn hảo của nhau.

**Liên kết tiếng Hàn:** `선형 부정 대합 쌍대성` (線型 否定 對合 雙對性) — đặc tính toán học trong đó phủ định tuyến tính hai lần đưa trở lại chính xác công thức ban đầu ($A^{\perp\perp} \cong A$), tạo ra sự đối xứng hoàn hảo.

---

## 18. coherent space denotational semantics /koʊˈhɪr.ənt speɪs ˌdiː.noʊˈteɪ.ʃən.əl sɪˈmæn.tɪks/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là mô hình ngữ nghĩa biểu thị ban đầu do Girard sáng tạo ra (ví dụ: `construct coherent space denotational semantics`).

**Core meaning — English:** The pioneering mathematical semantics developed by Girard, interpreting types as graphs of mutually compatible (coherent) atomic tokens and programs as stable cliques, which originally led to the discovery of linear logic.

**Core meaning & mental image — Tiếng Việt:** Ngữ nghĩa biểu thị không gian mạch lạc; hãy hình dung một mạng lưới các mảnh ghép lego: mỗi mảnh ghép là một mẩu thông tin nguyên tử; hai mảnh ghép được gọi là "mạch lạc" (coherent) với nhau nếu chúng có thể lắp khớp vào nhau một cách hài hòa mà không bị xung đột gãy vỡ; một chương trình máy tính hợp lệ là một tập hợp các mảnh ghép hoàn toàn tương thích (stable clique); chính khi nghiên cứu cấu trúc hình học của các mạng lưới mạch lạc này, Girard đã phát hiện ra các phép toán tuyến tính phân tách sâu sắc hơn các liên từ logic cổ điển.

**Grammar & collocations:** `formulate coherent space denotational semantics` — xây dựng ngữ nghĩa biểu thị không gian mạch lạc; `cliques in coherent space denotational semantics` — các clique trong ngữ nghĩa biểu thị không gian mạch lạc; `coherent space denotational semantics model` — mô hình ngữ nghĩa biểu thị không gian mạch lạc.

**Register & nuance:** `historical origins of linear logic (Girard 1986)` — mô hình ngữ nghĩa biểu thị đầu tiên làm nảy sinh logic tuyến tính; mở đường cho việc hiểu các hàm số không chỉ là các ánh xạ liên tục (Scott domains) mà là các ánh xạ tuyến tính và ổn định (stable functions).

**Examples:** `The breakthrough of linear logic arose directly from Girard's analysis of coherent space denotational semantics, where stable functions naturally decomposed into linear maps.` → Bước đột phá của logic tuyến tính nảy sinh trực tiếp từ phân tích của Girard về ngữ nghĩa biểu thị không gian mạch lạc, nơi các hàm ổn định tự nhiên phân rã thành các ánh xạ tuyến tính.

**Liên kết tiếng Hàn:** `연관 공간 표시 의미론` (連貫 空間 表示 意味論) — mô hình ngữ nghĩa toán học tiên phong do Girard phát triển diễn giải các kiểu như các đồ thị mảnh thông tin tương thích và chương trình là các clique ổn định.

---

## 19. resource sensitivity invariant /ˈriː.sɔːrs ˌsɛn.səˈtɪv.ə.t̬i ɪnˈvɛr.i.ənt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm bất biến bảo đảm việc tiêu thụ tài nguyên được theo dõi chính xác tuyệt đối (ví dụ: `preserve the resource sensitivity invariant`).

**Core meaning — English:** The fundamental property asserting that type checking and proof transformation preserve the exact accounting of resources, guaranteeing that no capability is created or destroyed without explicit syntactic accounting.

**Core meaning & mental image — Tiếng Việt:** Bất biến độ nhạy tài nguyên; hãy hình dung một bảng cân đối kế toán tài chính cấp độ nguyên tử: mỗi đồng xu đi vào (input) phải được đối ứng chính xác với một đồng xu đi ra (output); bất biến độ nhạy tài nguyên bảo đảm rằng dù chương trình có trải qua bao nhiêu bước tối ưu hóa mã, biên dịch hoặc tái cấu trúc đồ thị chứng minh, tổng số lượng tài nguyên được cấp phát và tiêu thụ luôn cân bằng tuyệt đối, không một xu nào bị thất thoát hay tự nhiên sinh ra từ hư vô.

**Grammar & collocations:** `maintain the resource sensitivity invariant` — duy trì bất biến độ nhạy tài nguyên; `violate the resource sensitivity invariant` — vi phạm bất biến độ nhạy tài nguyên; `enforce the resource sensitivity invariant` — áp đặt bất biến độ nhạy tài nguyên.

**Register & nuance:** `substructural type systems & static analysis` — tính chất cốt lõi giúp các hệ thống kiểu tuyến tính phát hiện lỗi rò rỉ tài nguyên (resource leaks) hoặc lỗi sử dụng sau khi giải phóng (use-after-free) ngay tại thời điểm biên dịch (compile-time).

**Examples:** `The static analyzer verifies that the resource sensitivity invariant holds across all compilation passes, proving that cryptographic keys are sanitized immediately after use.` → Trình phân tích tĩnh xác minh rằng bất biến độ nhạy tài nguyên được giữ vững qua mọi lượt biên dịch, chứng minh rằng các khóa mật mã được dọn sạch ngay sau khi sử dụng.

**Liên kết tiếng Hàn:** `자원 민감성 불변량` (資源 敏感性 不變量) — đặc tính nền tảng khẳng định rằng việc kiểm tra kiểu và biến đổi chứng minh luôn duy trì việc hạch toán chính xác tài nguyên, không để thất thoát hay tạo mới tùy tiện.

---

## 20. bounded linear logic complexity /ˈbaʊn.dɪd ˈlɪn.i.ɚ ˈlɑː.dʒɪk kəmˈplɛk.sə.t̬i/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là độ phức tạp tính toán được kiểm soát trong hệ thống logic tuyến tính có chặn (ví dụ: `characterize bounded linear logic complexity`).

**Core meaning — English:** The sub-recursive logical stratification, pioneered by Girard, Scedrov, and Scott, where exponential modalities are indexed by explicit polynomials or bounds, constraining proof normalization to polynomial-time execution.

**Core meaning & mental image — Tiếng Việt:** Độ phức tạp logic tuyến tính có chặn; hãy hình dung một chiếc xe hơi được gắn thiết bị kiểm soát tốc độ cơ học: bình thường động cơ có thể tăng tốc độ vô hạn; nhưng trong logic tuyến tính có chặn, mỗi khi bạn muốn dùng chức năng sao chép (toán tử bang), bạn buộc phải ghi rõ một con số chỉ số đa thức lên nhãn dán: chỉ được nhân bản tối đa $p(n)$ lần; chiếc kiểm soát cơ học này khống chế toàn bộ cỗ máy chứng minh, bảo đảm chiếc xe không bao giờ chạy quá giới hạn thời gian đa thức (PTIME).

**Grammar & collocations:** `governed by bounded linear logic complexity` — được chi phối bởi độ phức tạp logic tuyến tính có chặn; `bounds of bounded linear logic complexity` — các giới hạn của độ phức tạp logic tuyến tính có chặn; `analyze bounded linear logic complexity` — phân tích độ phức tạp logic tuyến tính có chặn.

**Register & nuance:** `implicit computational complexity (Girard, Scedrov, Scott 1992)` — một thành tựu vĩ đại nối kết logic toán với lý thuyết độ phức tạp tính toán; trả lời câu hỏi: làm thế nào để thiết kế một ngôn ngữ lập trình mà mọi chương trình viết ra đều bảo đảm chạy trong thời gian đa thức mà không bị lỗi vòng lặp vô tận.

**Examples:** `Through indexed exponential modalities, bounded linear logic complexity provides a purely logical characterization of the complexity class PTIME.` → Thông qua các thể thức lũy thừa có chỉ số, độ phức tạp logic tuyến tính có chặn cung cấp một đặc trưng hóa hoàn toàn mang tính logic cho lớp độ phức tạp PTIME.

**Liên kết tiếng Hàn:** `유계 선형 논리 복잡도` (有界 線型 論理 複雜度) — phân tầng logic trong đó các thể thức lũy thừa được gắn chỉ số đa thức, hạn chế quá trình chuẩn hóa chứng minh luôn chạy trong thời gian đa thức.

---

## 21. light linear logic polynomiality /laɪt ˈlɪn.i.ɚ ˈlɑː.dʒɪk ˌpɑː.liˌnoʊ.miˈæl.ə.t̬i/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm đặc tính thời gian đa thức nội tại của logic tuyến tính nhẹ (ví dụ: `demonstrate light linear logic polynomiality`).

**Core meaning — English:** The mathematical property of Girard's Light Linear Logic (LLL), which simplifies bounded logic by removing explicit polynomials and employing structural modalities (paragraph § and bang !) to enforce polynomial-time normalization intrinsically.

**Core meaning & mental image — Tiếng Việt:** Tính đa thức của logic tuyến tính nhẹ; hãy hình dung một cấu trúc kiến trúc không cần dùng đến các thanh giằng số học cồng kềnh (không cần viết rõ công thức đa thức $n^2$): tòa nhà tự nó đứng vững và chịu tải trọng đa thức nhờ chính cách sắp đặt góc nghiêng của các cột trụ (thể thức đoạn văn § và thể thức bang !); sự thanh thoát này cho phép hệ thống tự động giam giữ các chu trình tính toán bên trong biên độ đa thức một cách tự nhiên và thanh lịch tuyệt đối.

**Grammar & collocations:** `proof of light linear logic polynomiality` — chứng minh tính đa thức của logic tuyến tính nhẹ; `achieve light linear logic polynomiality` — đạt được tính đa thức của logic tuyến tính nhẹ; `invariants of light linear logic polynomiality` — các bất biến của tính đa thức của logic tuyến tính nhẹ.

**Register & nuance:** `Girard's 1998 breakthrough` — một bước tiến vượt bậc so với Bounded Linear Logic; loại bỏ các chỉ số đa thức phi tự nhiên trên các toán tử, đưa tính toán thời gian đa thức trở thành thuộc tính nội tại của chính cú pháp suy diễn.

**Examples:** `Girard achieved light linear logic polynomiality by decomposing the exponential modality into two milder modalities that forbid explosive proof dilation.` → Girard đã đạt được tính đa thức của logic tuyến tính nhẹ bằng cách phân rã thể thức lũy thừa thành hai thể thức nhẹ hơn ngăn chặn sự phình to bùng nổ của chứng minh.

**Liên kết tiếng Hàn:** `경량 선형 논리 다항식성` (輕量 線型 論理 多項式性) — đặc tính toán học của Logic tuyến tính nhẹ của Girard, áp đặt thời gian chuẩn hóa đa thức một cách nội tại thông qua các thể thức cấu trúc mà không cần chỉ số số học.

---

## 22. interaction net graph reduction /ˌɪn.t̬ɚˈæk.ʃən nɛt ɡræf rɪˈdʌk.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là mô hình tính toán phân tán dựa trên việc rút gọn đồ thị cục bộ (ví dụ: `execute interaction net graph reduction`).

**Core meaning — English:** A massively parallel distributed computation model, developed by Yves Lafont from linear logic proof nets, where evaluation proceeds entirely via local graph rewriting rules when two agents meet at their principal ports.

**Core meaning & mental image — Tiếng Việt:** Rút gọn đồ thị lưới tương tác; hãy hình dung một vũ điệu của các phân tử hóa học trong dung dịch: mỗi phân tử có các cổng kết nối; khi hai phân tử chạm mặt nhau đúng tại các cổng chính (principal ports), một phản ứng hóa học cục bộ lập tức diễn ra, phân rã và tái cấu trúc thành các liên kết mới; hàng triệu phản ứng như vậy diễn ra đồng thời khắp nơi trong bình thí nghiệm mà không cần một người chỉ huy trung tâm; không bao giờ xảy ra xung đột hay tranh chấp vì mỗi phân tử chỉ tương tác cục bộ với đối tác trực tiếp của mình.

**Grammar & collocations:** `concurrency of interaction net graph reduction` — tính đồng thời của việc rút gọn đồ thị lưới tương tác; `implement interaction net graph reduction` — cài đặt việc rút gọn đồ thị lưới tương tác; `interaction net graph reduction engine` — động cơ rút gọn đồ thị lưới tương tác.

**Register & nuance:** `Lafont's interaction nets (1990)` — hiện thực hóa tính toán không khóa, phân tán tối thượng; là nền t trạng cho các runtime hiệu năng cao hiện đại như HVM (Higher-order Virtual Machine) và ngôn ngữ Bend.

**Examples:** `Interaction net graph reduction executes entirely without global synchronization locks, as each rewrite rule operates strictly on a localized pair of interacting agents.` → Việc rút gọn đồ thị lưới tương tác thực thi hoàn toàn không cần các khóa đồng bộ toàn cục, vì mỗi quy tắc viết lại hoạt động nghiêm ngặt trên một cặp tác nhân tương tác cục bộ.

**Liên kết tiếng Hàn:** `상호작용 망 그래프 축약` (相互作用 網 graph 縮約) — mô hình tính toán song song phân tán của Yves Lafont phát triển từ lưới chứng minh, trong đó việc tính toán diễn ra thông qua việc viết lại đồ thị cục bộ khi hai tác nhân gặp nhau tại cổng chính.

---

## 23. geometry of interaction invariant /dʒiːˈɑː.mə.tri əv ˌɪn.t̬ɚˈæk.ʃən ɪnˈvɛr.i.ənt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm đại lượng bất biến toán học trong chương trình Hình học của sự tương tác (ví dụ: `formulate the geometry of interaction invariant`).

**Core meaning — English:** A mathematical invariant derived from operator algebras and Hilbert spaces, developed by Girard, interpreting proof normalization as the calculation of flows and particle trajectories through an invariant feedback loop.

**Core meaning & mental image — Tiếng Việt:** Bất biến hình học của sự tương tác (GoI); hãy hình dung một hệ thống gương phản xạ quang học và lăng kính: một chùm tia laser (dòng thông tin) được bắn vào hệ thống gương; ánh sáng phản xạ, khúc xạ và chạy vòng lặp qua lại giữa các gương cho đến khi thoát ra ở một cảm biến đích; Hình học của sự tương tác mô hình hóa việc thực thi chương trình không phải như việc biến đổi cây cú pháp, mà như quỹ đạo chuyển động thực tế của hạt photon chạy qua một mê cung phản xạ, được bảo toàn bởi các toán tử đại số von Neumann trên không gian Hilbert.

**Grammar & collocations:** `calculate the geometry of interaction invariant` — tính toán bất biến hình học của sự tương tác; `principles of geometry of interaction invariant` — các nguyên lý của bất biến hình học của sự tương tác; `operator semantics of geometry of interaction invariant` — ngữ nghĩa toán tử của bất biến hình học của sự tương tác.

**Register & nuance:** `Girard's Geometry of Interaction (GoI I, II, III)` — đỉnh cao triết học và toán học của Girard; kết nối logic toán học với đại số toán tử (von Neumann algebras), $C^*$-algebras và vật lý lý thuyết.

**Examples:** `In Girard's framework, the geometry of interaction invariant models cut-elimination as an invariant trace over linear operators on a Hilbert space.` → Trong khung lý thuyết của Girard, bất biến hình học của sự tương tác mô hình hóa việc khử nhát cắt như một vết bất biến trên các toán tử tuyến tính trên không gian Hilbert.

**Liên kết tiếng Hàn:** `상호작용의 기하학 불변량` (相互作用의 幾何學 不變量) — đại lượng bất biến toán học từ đại số toán tử do Girard phát triển diễn giải việc chuẩn hóa chứng minh như quỹ đạo dòng chảy hạt qua các vòng lặp phản hồi.

---

## 24. multiplicative linear logic soundness /ˌmʌl.təˈplɪk.ə.t̬ɪv ˈlɪn.i.ɚ ˈlɑː.dʒɪk ˈsaʊnd.nəs/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là định lý tính đúng đắn của mảnh logic tuyến tính nhân tính (ví dụ: `prove multiplicative linear logic soundness`).

**Core meaning — English:** The formal metatheoretic theorem establishing that any syntactically derivable sequent or geometrically correct proof net in Multiplicative Linear Logic (MLL) evaluates to a valid morphism in every *-autonomous category.

**Core meaning & mental image — Tiếng Việt:** Tính đúng đắn của logic tuyến tính nhân tính; hãy hình dung bạn thiết kế một chiếc cầu treo dựa trên các phương trình giải tích trên giấy; định lý tính đúng đắn bảo đảm rằng bất kỳ cây cầu nào được vẽ đúng theo bản vẽ kỹ thuật nhân tính (MLL) đều bảo đảm đứng vững 100% trong thế giới vật lý thực tế (*-autonomous category), không bao giờ có chuyện bản vẽ đúng mà cây cầu thực tế lại sập đổ; mọi suy luận cú pháp đều phản ánh một chân lý cấu trúc khách quan.

**Grammar & collocations:** `demonstrate multiplicative linear logic soundness` — chứng minh tính đúng đắn của logic tuyến tính nhân tính; `corollaries of multiplicative linear logic soundness` — các hệ quả của tính đúng đắn của logic tuyến tính nhân tính; `categorical multiplicative linear logic soundness` — tính đúng đắn phạm trù của logic tuyến tính nhân tính.

**Register & nuance:** `categorical logic (*-autonomous categories)` — mảnh logic cơ bản nhất nhưng hoàn mỹ nhất của logic tuyến tính; được chứng minh tương thích hoàn toàn với các phạm trù sao-tự trị (star-autonomous categories) do Michael Barr đề xuất.

**Examples:** `Categorical multiplicative linear logic soundness guarantees that every valid proof net interprets faithfully as an arrow within a star-autonomous category.` → Tính đúng đắn của logic tuyến tính nhân tính theo nghĩa phạm trù bảo đảm rằng mọi lưới chứng minh hợp lệ đều được diễn giải trung thành như một mũi tên bên trong một phạm trù sao-tự trị.

**Liên kết tiếng Hàn:** `승법적 선형 논리 건전성` (乘法的 線型 論理 健全性) — định lý siêu lý thuyết chứng minh rằng mọi chứng minh dẫn xuất được trong MLL đều hợp lệ trong các phạm trù sao-tự trị.

---

## 25. proof net sequentialization theorem /pruːf nɛt sɪˌkwɛn.ʃəl.əˈzeɪ.ʃən ˈθiː.ɚ.əm/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm định lý cầu nối chuyển đổi lưới hình học thành chứng minh suy diễn tuần tự (ví dụ: `establish the proof net sequentialization theorem`).

**Core meaning — English:** The fundamental bridge theorem of linear logic proving that every geometric proof net satisfying the correctness criteria can be deconstructed and translated back into a valid inductive sequent calculus derivation.

**Core meaning & mental image — Tiếng Việt:** Định lý tuần tự hóa lưới chứng minh; hãy hình dung bạn có một bản đồ 3 chiều tuyệt đẹp về một tòa lâu đài: định lý tuần tự hóa là một thuật toán kỳ diệu có thể phân rã bản vẽ 3 chiều này thành một bản hướng dẫn thi công từng bước một bằng chữ viết từ dưới lên trên; nó chứng minh rằng việc nhảy thoát ra ngoài không gian hình học đồ thị tự do không làm mất đi tính trật tự logic: bất kỳ đồ thị hình học hợp lệ nào cũng đều có thể chuyển đổi ngược lại thành một bài chứng minh dòng chữ truyền thống từng bước một.

**Grammar & collocations:** `proof of the proof net sequentialization theorem` — chứng minh của định lý tuần tự hóa lưới chứng minh; `algorithmic proof net sequentialization theorem` — định lý tuần tự hóa lưới chứng minh có tính thuật toán; `rely on the proof net sequentialization theorem` — dựa vào định lý tuần tự hóa lưới chứng minh.

**Register & nuance:** `proof theory foundations (Girard 1987)` — định lý khó nhất và vĩ đại nhất trong lý thuyết lưới chứng minh; chứng minh sự tương đương hai chiều hoàn hảo giữa cú pháp quy nạp tuần tự (sequent calculus) và hình học tô pô song song (proof nets).

**Examples:** `The proof net sequentialization theorem guarantees that geometric correctness is sufficient to reconstruct a traditional step-by-step sequent derivation.` → Định lý tuần tự hóa lưới chứng minh bảo đảm rằng tính đúng đắn hình học là đủ để tái tạo một dẫn xuất dãy từng bước truyền thống.

**Liên kết tiếng Hàn:** `증명망 순차화 정리` (證明網 順次化 定理) — định lý nền tảng chứng minh rằng mọi lưới chứng minh hình học thỏa mãn tiêu chuẩn đúng đắn đều có thể chuyển đổi ngược thành chứng minh suy diễn dãy tuần tự hợp lệ.

---

## Review in context (Part 1: Linear Connectives, Correctness, and Normalization)

Modern type theory and proof theory owe their profound geometric clarity to **Girardian linear logic**, which overturned static truth by treating assertions as physical, consumable entities. In this resource-aware domain, computation corresponds to **resource-bounded cut-elimination**, transforming logical proofs into simplified normal forms under rigorous polynomial constraints. Rather than writing traditional sequential proofs laden with syntactic bureaucracy, theorists map inferences onto a **linear logic proof net**, revealing the innate parallelism of deductions through geometric graphs. Within this structural framework, classical conjunction splits into two distinct modalities: the **multiplicative conjunction tensor** binds resources that must be consumed concurrently, whereas the **multiplicative disjunction par** encapsulates dynamic concurrent channels between dual processes. Conversely, alternative options are governed by additive operations: an **additive conjunction with** presents an external menu from which the user selects one branch, while an **additive disjunction plus** denotes an internal branch determined unilaterally by the computing system. To seamlessly incorporate unrestricted reusable data, the system introduces the **exponential modality bang**, granting classical permissions to duplicate or erase specific hypotheses. Its De Morgan reflection, the **exponential modality why-not**, serves as an accommodating receptacle for aggregated dual resources. To certify that an arbitrary web of links forms a legitimate proof, mathematicians evaluate the **Danthos-Regnier switching criterion**, checking whether every induced switching configuration collapses into an acyclic tree. Satisfying this topological check verifies **proof net geometric correctness**, guaranteeing that reduction steps will never deadlock. Finally, because reduction paths converge deterministically, the rewrite system exhibits strict **cut-elimination confluence**, ensuring that every evaluation sequence terminates at an identical normal form.

**Bản dịch tiếng Việt:**

Lý thuyết kiểu hiện đại và lý thuyết chứng minh có được sự rõ ràng về mặt hình học sâu sắc là nhờ vào **Girardian linear logic**, hệ thống đã lật đổ chân lý tĩnh bằng cách xử lý các khẳng định như những thực thể vật lý có thể tiêu hao. Trong miền nhận thức tài nguyên này, tính toán tương ứng với **resource-bounded cut-elimination**, biến đổi các chứng minh logic thành các dạng chuẩn được đơn giản hóa dưới các ràng buộc đa thức nghiêm ngặt. Thay vì viết các chứng minh tuần tự truyền thống chứa đầy sự quan liêu cú pháp, các nhà lý thuyết ánh xạ các suy diễn lên một **linear logic proof net**, làm lộ rõ tính song song bẩm sinh của các suy luận thông qua các đồ thị hình học. Bên trong khung cấu trúc này, phép hội cổ điển tách thành hai thể thức riêng biệt: **multiplicative conjunction tensor** liên kết các tài nguyên phải được tiêu thụ đồng thời, trong khi **multiplicative disjunction par** đóng gói các kênh đồng thời động giữa các tiến trình đối ngẫu. Ngược lại, các phương án thay thế được chi phối bởi các phép toán cộng tính: một **additive conjunction with** đưa ra một thực đơn bên ngoài mà từ đó người dùng chọn một nhánh, trong khi một **additive disjunction plus** biểu thị một nhánh nội tại được quyết định đơn phương bởi hệ thống tính toán. Để kết hợp liền mạch dữ liệu có thể tái sử dụng không bị hạn chế, hệ thống giới thiệu **exponential modality bang**, cấp các quyền cổ điển để nhân bản hoặc xóa bỏ các giả thiết cụ thể. Sự phản chiếu De Morgan của nó, **exponential modality why-not**, đóng vai trò như một vật chứa thích ứng cho các tài nguyên đối ngẫu được tổng hợp. Để chứng nhận rằng một mạng lưới liên kết tùy ý tạo thành một chứng minh hợp lệ, các nhà toán học đánh giá **Danthos-Regnier switching criterion**, kiểm tra xem mọi cấu hình chuyển mạch được tạo ra có sụp đổ thành một cây phi chu trình hay không. Việc thỏa mãn phép kiểm tra tô pô này xác minh **proof net geometric correctness**, bảo đảm rằng các bước rút gọn sẽ không bao giờ bị bế tắc. Cuối cùng, vì các đường đi rút gọn hội tụ một cách đơn định, hệ thống viết lại thể hiện **cut-elimination confluence** nghiêm ngặt, bảo đảm rằng mọi chuỗi đánh giá đều kết thúc tại một dạng chuẩn giống hệt nhau.

---

## Review in context (Part 2: Duality, Structural Rules, and Complexity)

Exploring the computational dynamics of substructural logic illuminates the bridge between interactive processes and geometric invariants. Interpreting computations as strategic games, **linear logic game semantics** characterizes proofs as winning strategies in dialogues between system proponents and environmental opponents. At the axiomatic core, preventing unbounded data replication requires **structural contraction rule elimination**, restricting variables from being cloned implicitly. Simultaneously, enforcing strict resource cleanup relies on **structural weakening rule prohibition**, forbidding hypotheses from being discarded without explicit deallocation. In quantum computing architectures, this resource preservation manifests directly as the **no-cloning logical theorem**, proving that arbitrary quantum states cannot be duplicated. The symmetry of linear logic is anchored by **linear negation involutive duality**, ensuring that double negation restores the original resource without classical truth tables. Historically, these insights crystallized through **coherent space denotational semantics**, where stable functions decomposed naturally into linear and non-linear components. Throughout program transformations, the type checker enforces the **resource sensitivity invariant**, verifying that every allocated capability is accounted for at compile time. By indexing modalities, theorists circumscribe complexity classes through **bounded linear logic complexity**, capturing polynomial-time algorithms purely via proof systems. Refining this approach, Girard proved **light linear logic polynomiality**, removing indices to achieve intrinsic polynomial bounds via structural modalities alone. In distributed systems, these graphs execute via **interaction net graph reduction**, rewriting localized agent pairs concurrently without global locks. At the mathematical summit, the **geometry of interaction invariant** reformulates proof normalization as operator flows across Hilbert spaces. The foundational integrity of the system is cemented by **multiplicative linear logic soundness**, validating proofs inside star-autonomous categories. Finally, the seminal **proof net sequentialization theorem** closes the loop, proving that every topologically sound geometric net corresponds faithfully to an inductive step-by-step derivation.

**Bản dịch tiếng Việt:**

Khám phá động lực tính toán của logic phi cấu trúc làm sáng tỏ cây cầu nối giữa các tiến trình tương tác và các bất biến hình học. Diễn giải các phép tính như các trò chơi chiến thuật, **linear logic game semantics** đặc trưng hóa các chứng minh như các chiến thuật chiến thắng trong các cuộc đối thoại giữa bên ủng hộ hệ thống và bên phản biện môi trường. Tại cốt lõi tiên đề, việc ngăn chặn sự nhân bản dữ liệu không bị ràng buộc đòi hỏi **structural contraction rule elimination**, hạn chế các biến bị nhân bản ngầm định. Đồng thời, việc áp đặt việc dọn dẹp tài nguyên nghiêm ngặt dựa vào **structural weakening rule prohibition**, cấm các giả thiết bị loại bỏ mà không có sự giải phóng rõ ràng. Trong các kiến trúc tính toán lượng tử, sự bảo tồn tài nguyên này thể hiện trực tiếp như **no-cloning logical theorem**, chứng minh rằng các trạng thái lượng tử tùy ý không thể bị sao chép. Tính đối xứng của logic tuyến tính được neo giữ bởi **linear negation involutive duality**, bảo đảm rằng phủ định kép khôi phục lại tài nguyên ban đầu mà không cần các bảng chân trị cổ điển. Về mặt lịch sử, những hiểu biết sâu sắc này đã kết tinh thông qua **coherent space denotational semantics**, nơi các hàm ổn định phân rã tự nhiên thành các thành phần tuyến tính và phi tuyến. Trong suốt các biến đổi chương trình, trình kiểm tra kiểu áp đặt **resource sensitivity invariant**, xác minh rằng mọi năng lực được cấp phát đều được hạch toán tại thời điểm biên dịch. Bằng cách gắn chỉ số cho các thể thức, các nhà lý thuyết giới hạn các lớp độ phức tạp thông qua **bounded linear logic complexity**, nắm bắt các thuật toán thời gian đa thức thuần túy thông qua các hệ thống chứng minh. Tinh chỉnh cách tiếp cận này, Girard đã chứng minh **light linear logic polynomiality**, loại bỏ các chỉ số để đạt được các giới hạn đa thức nội tại chỉ thông qua các thể thức cấu trúc. Trong các hệ thống phân tán, các đồ thị này thực thi thông qua **interaction net graph reduction**, viết lại các cặp tác nhân cục bộ đồng thời mà không cần các khóa toàn cục. Tại đỉnh cao toán học, **geometry of interaction invariant** tái cấu trúc việc chuẩn hóa chứng minh như các dòng toán tử trên các không gian Hilbert. Tính toàn vẹn nền tảng của hệ thống được củng cố bởi **multiplicative linear logic soundness**, xác thực các chứng minh bên trong các phạm trù sao-tự trị. Cuối cùng, **proof net sequentialization theorem** mang tính bước ngoặt khép lại vòng lặp, chứng minh rằng mọi lưới hình học vững chắc về mặt tô pô đều tương ứng một cách trung thực với một dẫn xuất từng bước quy nạp.
