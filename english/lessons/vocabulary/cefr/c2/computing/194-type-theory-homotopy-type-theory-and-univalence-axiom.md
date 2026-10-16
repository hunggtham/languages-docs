# C2 Vocabulary 194 — Homotopy type theory, higher inductive types, and the Voevodsky univalence axiom

Lý thuyết kiểu đồng luân (Homotopy Type Theory - HoTT) đại diện cho cuộc cách mạng nền tảng toán học sâu sắc nhất kể từ khi lý thuyết tập hợp Zermelo-Fraenkel ra đời. Được khởi xướng bởi nhà toán học đoạt huy chương Fields Vladimir Voevodsky cùng các nhà logic học đương đại, HoTT thiết lập một cây cầu tuyệt mỹ giữa lý thuyết kiểu phụ thuộc (dependent type theory), tô pô đại số (algebraic topology) và lý thuyết phạm trù bậc cao (higher category theory). Trong HoTT, một kiểu (type) không còn đơn thuần là một tập hợp các phần tử rời rạc, mà được diễn giải như một không gian tô pô nhiều chiều (higher-dimensional topological space); một phần tử của kiểu tương ứng với một điểm trong không gian; và kiểu đồng nhất (identity type) giữa hai phần tử chính là một đường đi liên tục (path / equivalence path) nối giữa hai điểm đó. Định đề đơn trị Voevodsky (Voevodsky univalence axiom) phát biểu một chân lý mang tính cách mạng: hai cấu trúc đẳng cấu (isomorphic) hoặc tương đương (equivalent) thì đồng nhất tuyệt đối với nhau (`isomorphism is equality`). Bên cạnh đó, các kiểu quy nạp bậc cao (higher inductive types - HITs) cho phép định nghĩa các không gian hình học như đường tròn, hình cầu, và các giới hạn trực tiếp thông qua các hàm dựng điểm và hàm dựng đường đi. Bài học C2 này trang bị cho bạn 25 khái niệm tinh hoa nhất về toán học kiến tạo, lý thuyết kiểu khối (cubical type theory) và cơ sở toán học hình thức hóa cho tương lai.

Flow của bài học: **Voevodsky univalence axiom** → **identity type equivalence path** → **higher inductive type constructor** → **homotopy n-type truncation** → **contractible topological fibration** → **synthetic homotopy sphere invariant** → **path induction J-eliminator** → **structure identity principle** → **cubical type theory kan composition** → **higher-dimensional topological groupoid** → **intensional identity type reflexivity** → **homotopy fiber contractibility** → **univalent universe equivalence** → **circle higher inductive type** → **suspension type loop space** → **Freudenthal suspension theorem formalization** → **truncated homotopy level h-level** → **transport along path operation** → **dependent path over equivalence** → **coherent higher homotopy commutativity** → **synthetic homotopy fundamental group** → **univalent category equivalence criterion** → **pushout higher inductive colimit** → **Hopf fibration synthetic construction** → **constructive univalence computational canonicity**.

---

## 1. Voevodsky univalence axiom /vɔɪˈvɑːd.ski juː.nəˈveɪ.ləns ˈæk.si.əm/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ hoặc đối tượng tiên đề trong lý thuyết kiểu đồng luân (ví dụ: `postulate the Voevodsky univalence axiom`, `consequences of the Voevodsky univalence axiom`).

**Core meaning — English:** A foundational axiom in Homotopy Type Theory, formulated by Vladimir Voevodsky, asserting that the canonical comparison map from identity of types to type equivalences is itself an equivalence, formalizing the principle that equivalent types are equal.

**Core meaning & mental image — Tiếng Việt:** Tiên đề đơn trị Voevodsky; hãy hình dung hai cuốn từ điển song ngữ: một cuốn viết bằng tiếng Anh, một cuốn viết bằng một ngôn ngữ ngoài hành tinh hoàn hảo có sự tương ứng 1-1 chính xác về mọi khái niệm, ngữ pháp và cấu trúc (tương đương kiểu - equivalence); toán học cổ điển coi chúng là hai vật thể hoàn toàn khác nhau chỉ vì chúng dùng bảng chữ cái khác nhau; tiên đề Voevodsky tuyên bố dứt khoát: nếu hai thế giới toán học đẳng cấu với nhau hoàn hảo thì chúng là một, cho phép ta dịch chuyển mọi định lý đã chứng minh từ thế giới này sang thế giới kia một cách tự động và chính danh.

**Grammar & collocations:** `adopt the Voevodsky univalence axiom` — chấp nhận tiên đề đơn trị Voevodsky; `formalize via the Voevodsky univalence axiom` — hình thức hóa thông qua tiên đề đơn trị Voevodsky; `computational content of the Voevodsky univalence axiom` — nội dung tính toán của tiên đề đơn trị Voevodsky.

**Register & nuance:** `foundations of mathematics & Homotopy Type Theory` — một trong những đột phá toán học lớn nhất thế kỷ 21; biến trực giác thực hành của các nhà toán học ("các cấu trúc đẳng cấu có thể coi như đồng nhất") thành một định lý toán học hình thức chặt chẽ trong các hệ thống chứng minh như Coq hay Agda.

**Examples:** `By asserting that type equivalence implies identity, the Voevodsky univalence axiom eliminates the tedious boilerplate required to transfer theorems across isomorphic mathematical structures.` → Bằng cách khẳng định rằng sự tương đương kiểu hàm ý sự đồng nhất, tiên đề đơn trị Voevodsky loại bỏ những đoạn mã mẫu tẻ nhạt cần thiết để chuyển giao các định lý qua các cấu trúc toán học đẳng cấu.

**Liên kết tiếng Hàn:** `보에보드스키 단가 공리` (Voevodsky 單價 公理) — tiên đề nền tảng trong HoTT khẳng định rằng sự tương đương giữa các kiểu tương đương với sự đồng nhất của chúng.

---

## 2. identity type equivalence path /aɪˈdɛn.t̬ə.t̬i taɪp ɪˈkwɪv.ə.ləns pæθ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là phần tử đường đi chứng minh sự tương đương trong kiểu đồng nhất (ví dụ: `construct an identity type equivalence path`).

**Core meaning — English:** A term inhabiting an identity type `Id_A(x, y)` interpreted topologically as a continuous geometric path connecting point `x` to point `y` within the space represented by type `A`.

**Core meaning & mental image — Tiếng Việt:** Đường đi tương đương trong kiểu đồng nhất; hãy hình dung bề mặt của một quả địa cầu: hai điểm x và y không chỉ đơn thuần là bằng nhau hay không bằng nhau theo kiểu nhị phân 0-1 của logic cổ điển; một bằng chứng cho thấy x bằng y là một sợi dây tơ liên tục (đường đi) nối từ x tới y; nếu có nhiều sợi dây tơ khác nhau nối x và y, chúng đại diện cho các cách đồng nhất khác nhau; các sợi dây tơ này có thể uốn lượn và biến dạng liên tục thành nhau (đồng luân), biến logic học thành hình học tô pô sống động.

**Grammar & collocations:** `traverse an identity type equivalence path` — đi qua một đường đi tương đương trong kiểu đồng nhất; `deform an identity type equivalence path` — làm biến dạng một đường đi tương đương trong kiểu đồng nhất; `inhabit an identity type equivalence path` — cư trú trong một đường đi tương đương trong kiểu đồng nhất.

**Register & nuance:** `HoTT semantics (Martin-Löf identity types)` — bước ngoặt tư duy triệt để; trong lý thuyết tập hợp, quan hệ bằng nhau là một mệnh đề đúng hoặc sai; trong HoTT, sự bằng nhau là một kiểu dữ liệu chứa các đường đi cụ thể, và hai đường đi lại có thể có đường đi cấp 2 nối giữa chúng (higher paths).

**Examples:** `In Homotopy Type Theory, an identity type equivalence path between two functions is constructed directly from a pointwise homotopy witness.` → Trong Lý thuyết kiểu đồng luân, một đường đi tương đương trong kiểu đồng nhất giữa hai hàm được xây dựng trực tiếp từ một bằng chứng đồng luân từng điểm.

**Liên kết tiếng Hàn:** `동일성 유형 동치 경로` (同一性 類型 同値 經路) — phần tử của kiểu đồng nhất được diễn giải về mặt tô pô như một đường đi liên tục nối hai điểm trong không gian kiểu.

---

## 3. higher inductive type constructor /ˈhaɪ.ər ɪnˈdʌk.tɪv taɪp kənˈstrʌk.tər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm toán tử xây dựng điểm hoặc đường đi cho kiểu quy nạp bậc cao (ví dụ: `define a higher inductive type constructor`).

**Core meaning — English:** A syntactic generation rule in Homotopy Type Theory that specifies not only the point elements of a data type, but also explicitly introduces higher-dimensional path constructors (equalities) between those elements.

**Core meaning & mental image — Tiếng Việt:** Hàm dựng kiểu quy nạp bậc cao; hãy hình dung một thợ rèn làm một chiếc nhẫn vàng: trong toán học cổ điển, kiểu quy nạp thông thường chỉ cho phép bạn tạo ra các hạt cườm rời rạc (hàm dựng điểm: hạt 1, hạt 2); nhưng với kiểu quy nạp bậc cao (HIT), người thợ rèn được cung cấp thêm một cây kìm hàn đặc biệt (hàm dựng đường đi - path constructor): uốn cong thanh vàng và hàn hai đầu lại với nhau thành một vòng tròn khép kín; chiếc nhẫn thành phẩm vừa có điểm vừa có đường viền không thể tháo rời.

**Grammar & collocations:** `specify a higher inductive type constructor` — chỉ định một hàm dựng kiểu quy nạp bậc cao; `evaluate higher inductive type constructors` — đánh giá các hàm dựng kiểu quy nạp bậc cao; `higher inductive type constructor semantics` — ngữ nghĩa của hàm dựng kiểu quy nạp bậc cao.

**Register & nuance:** `constructive homotopy & proof assistant language design` — mở rộng mạnh mẽ khái niệm kiểu dữ liệu đại số (ADT); cho phép các hệ thống hình thức hóa định nghĩa trực tiếp các hình học tô pô (như torus, quả cầu $S^n$) mà không cần viện dẫn đến số thực hay giải tích cổ điển.

**Examples:** `The circle is formalized by providing a point constructor 'base' alongside a higher inductive type constructor 'loop' that equates 'base' with itself.` → Đường tròn được hình thức hóa bằng cách cung cấp một hàm dựng điểm 'base' bên cạnh một hàm dựng kiểu quy nạp bậc cao 'loop' đồng nhất 'base' với chính nó.

**Liên kết tiếng Hàn:** `고차 귀납적 유형 생성자` (高次 歸納的 類型 生成子) — quy tắc sinh trong HoTT cho phép tạo ra không chỉ các phần tử điểm mà cả các hàm dựng đường đi (đẳng thức) giữa chúng.

---

## 4. homotopy n-type truncation /həˈmɑː.t̬ə.pi ˈɛn taɪp trʌŋˈkeɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là phép thao tác làm phẳng các chiều đồng luân cao hơn cấp n (ví dụ: `apply homotopy n-type truncation`).

**Core meaning — English:** An operation that collapses all non-trivial homotopy groups of a type above dimension `n`, turning a complex higher space into an `n`-truncated space where all `(n+1)`-dimensional paths are trivial.

**Core meaning & mental image — Tiếng Việt:** Phép cắt cụt kiểu đồng luân cấp n; hãy hình dung một bức tượng điêu khắc đất sét 3 chiều vô cùng tinh xảo: nếu bạn chiếu ánh đèn lên bức tượng để in bóng của nó lên một bức tường phẳng 2 chiều (cắt cụt cấp 1), toàn bộ độ sâu chiều thứ 3 sẽ bị ép phẳng; phép cắt cụt cấp n giống như một chiếc máy ép không gian: nó ép phẳng tất cả các nếp gấp và vòng lặp ở các chiều cao hơn n, biến một không gian tô pô nhiều chiều phức tạp thành một cấu trúc đơn giản hơn (như biến thành tập hợp rời rạc khi n=0, hoặc thành mệnh đề khi n=-1).

**Grammar & collocations:** `compute homotopy n-type truncation` — tính toán phép cắt cụt kiểu đồng luân cấp n; `properties of homotopy n-type truncation` — các tính chất của phép cắt cụt kiểu đồng luân cấp n; `homotopy n-type truncation operator` — toán tử cắt cụt kiểu đồng luân cấp n.

**Register & nuance:** `homotopical algebra & categorical stratification` — đóng vai trò sống còn để thu hồi lại toán học cổ điển bên trong HoTT; một 0-type chính là một tập hợp (set), một (-1)-type là một mệnh đề logic (mere proposition), bảo đảm tính tương thích ngược tuyệt đối.

**Examples:** `Applying homotopy n-type truncation to a topological space yields an n-groupoid where all higher coherence cells beyond level n contract to reflexivity.` → Việc áp dụng phép cắt cụt kiểu đồng luân cấp n lên một không gian tô pô sẽ tạo ra một n-groupoid nơi tất cả các ô mạch lạc bậc cao vượt quá cấp n đều co về phép phản xạ.

**Liên kết tiếng Hàn:** `호모토피 n-유형 절단` (homotopy n-類型 切斷) — thao tác triệt tiêu các nhóm đồng luân bậc cao hơn cấp n để đưa một kiểu về không gian n chiều đơn giản hơn.

---

## 5. contractible topological fibration /kənˈtræk.tə.bəl ˌtɑː.pəˈlɑː.dʒɪ.kəl faɪˈbreɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm đối tượng không gian phân thớ có thớ co rút được về một điểm duy nhất (ví dụ: `exhibit a contractible topological fibration`).

**Core meaning — English:** A fiber bundle or type family over a base space whose total space or fiber components are homotopically equivalent to a single point, possessing no non-trivial topological holes or cycles.

**Core meaning & mental image — Tiếng Việt:** Phân thớ tô pô co rút được; hãy hình dung một chiếc ô che mưa: khi giương ô ra, các nan ô tạo thành một bề mặt rộng; nhưng khi bạn gập chiếc ô lại, toàn bộ cấu trúc thu gọn hoàn toàn về một thanh kim loại thẳng tắp duy nhất; một phân thớ co rút được là một cấu trúc hình học mà mọi đường đi, mọi vòng cung bên trong nó đều có thể bị kéo co dần lại về đúng một điểm mà không gặp bất kỳ lỗ thủng hay rào cản nào, tương đương với việc kiểu đó chỉ chứa duy nhất một thông tin hiển nhiên.

**Grammar & collocations:** `prove a contractible topological fibration` — chứng minh một phân thớ tô pô co rút được; `fiber of a contractible topological fibration` — thớ của một phân thớ tô pô co rút được; `characterize contractible topological fibrations` — đặc trưng hóa các phân thớ tô pô co rút được.

**Register & nuance:** `higher category theory & abstract homotopy theory` — tính co rút được (contractibility) là biểu hiện cao nhất của sự tầm thường (triviality) trong tô pô; một kiểu co rút được (isContr) được định nghĩa là tồn tại một phần tử trung tâm và mọi phần tử khác đều có đường đi nối tới phần tử đó.

**Examples:** `In Martin-Löf type theory, the singleton type family centered at a point forms a contractible topological fibration over the ambient base space.` → Trong lý thuyết kiểu Martin-Löf, họ kiểu đơn tử tập trung tại một điểm tạo thành một phân thớ tô pô co rút được trên không gian cơ sở xung quanh.

**Liên kết tiếng Hàn:** `수축 가능 위상 파이브레이션` (收縮 可能 位相 fibration) — cấu trúc phân thớ tô pô có các thớ hoặc toàn bộ không gian có thể co rút đồng luân về một điểm đơn lẻ.

---

## 6. synthetic homotopy sphere invariant /sɪnˈθɛt̬.ɪk həˈmɑː.t̬ə.pi sfɪr ɪnˈvɛr.i.ənt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là đại lượng bất biến đồng luân của hình cầu được xây dựng bằng phương pháp tổng hợp (ví dụ: `compute synthetic homotopy sphere invariants`).

**Core meaning — English:** A topological characteristic (such as a homotopy group $\pi_k(S^n)$) derived entirely within the constructive language of Homotopy Type Theory without ever referencing the metric continuum or Dedekind real numbers.

**Core meaning & mental image — Tiếng Việt:** Bất biến hình cầu đồng luân tổng hợp; hãy hình dung việc đo đạc hình học của một hành tinh: thay vì phải thả những chiếc thước đo vật lý dài vô tận bằng kim loại (sử dụng số thực giải tích cổ điển), bạn chỉ dùng các quy tắc lắp ghép các khối hình học trừu tượng và các mối nối logic thuần khiết; bất biến hình cầu đồng luân tổng hợp tính toán chính xác các lỗ hổng và vòng xoắn của quả cầu n chiều bằng các bước suy luận hình thức, được máy tính kiểm chứng tự động 100%.

**Grammar & collocations:** `calculate synthetic homotopy sphere invariants` — tính toán các bất biến hình cầu đồng luân tổng hợp; `formalize synthetic homotopy sphere invariants` — hình thức hóa các bất biến hình cầu đồng luân tổng hợp; `derivation of synthetic homotopy sphere invariants` — sự dẫn xuất các bất biến hình cầu đồng luân tổng hợp.

**Register & nuance:** `synthetic topology (HoTT Book Chapter 8)` — thuật ngữ "synthetic" đối lập với "analytic"; trong giải tích cổ điển ta định nghĩa hình cầu qua tọa độ $x^2+y^2+z^2=1$; trong tô pô tổng hợp ta định nghĩa hình cầu trực tiếp qua kiểu quy nạp bậc cao và tính toán các nhóm đồng luân bằng phép quy nạp đường đi.

**Examples:** `Guillaume Brunerie verified the synthetic homotopy sphere invariant proving that the fourth homotopy group of the three-sphere is isomorphic to the cyclic group of order two.` → Guillaume Brunerie đã kiểm chứng bất biến hình cầu đồng luân tổng hợp chứng minh rằng nhóm đồng luân thứ tư của hình cầu ba chiều đẳng cấu với nhóm cyclic bậc hai.

**Liên kết tiếng Hàn:** `종합적 호모토피 구 불변량` (綜合的 homotopy 球 不變量) — đại lượng bất biến tô pô của hình cầu được tính toán thuần túy bằng ngôn ngữ hình thức kiến tạo của HoTT mà không dùng giải tích số thực.

---

## 7. path induction J-eliminator /pæθ ɪnˈdʌk.ʃən ˈdʒeɪ ɪˌlɪm.əˈneɪ.t̬ər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm toán tử khử J thực hiện quy nạp đường đi (ví dụ: `apply the path induction J-eliminator`).

**Core meaning — English:** The fundamental elimination rule for identity types in dependent type theory, stating that to prove a property for all paths in a space, it suffices to prove it exclusively for the degenerate reflexivity path at each point.

**Core meaning & mental image — Tiếng Việt:** Toán tử khử J quy nạp đường đi; hãy hình dung bạn muốn chứng minh một định lý áp dụng cho mọi chuyến bay trên toàn thế giới: thay vì phải đi khảo sát từng chuyến bay thực tế dài ngắn ngoằn ngoèo khác nhau, quy tắc khử J thần kỳ cho phép bạn chỉ cần chứng minh định lý đó đúng cho các "chuyến bay đứng yên tại chỗ" (chuyến bay có điểm đầu trùng điểm cuối - reflexivity); vì mọi chuyến bay đều có thể co rút liên tục về một điểm đứng yên trong không gian phân thớ, định lý lập tức tự động đúng cho toàn bộ mọi chuyến bay bất kỳ.

**Grammar & collocations:** `invoke the path induction J-eliminator` — viện dẫn toán tử khử J quy nạp đường đi; `definition of path induction J-eliminator` — định nghĩa của toán tử khử J quy nạp đường đi; `computation rule for path induction J-eliminator` — quy tắc tính toán cho toán tử khử J quy nạp đường đi.

**Register & nuance:** `type theory fundamentals (Per Martin-Löf)` — nguyên lý suy luận sâu sắc nhất của lý thuyết kiểu phụ thuộc; là công cụ vạn năng để chứng minh mọi tính chất đối xứng, bắc cầu và tương thích của quan hệ bằng nhau.

**Examples:** `Using the path induction J-eliminator, the proof engineer demonstrates that every path possesses an inverse path that satisfies groupoid inversion laws.` → Bằng cách sử dụng toán tử khử J quy nạp đường đi, kỹ sư chứng minh chỉ ra rằng mọi đường đi đều sở hữu một đường đi nghịch đảo thỏa mãn các định luật nghịch đảo groupoid.

**Liên kết tiếng Hàn:** `경로 귀납 J-제거자` (經路 歸納 J-除去子) — quy tắc khử cơ bản cho kiểu đồng nhất cho phép chứng minh tính chất của mọi đường đi chỉ bằng cách kiểm tra đường đi phản xạ tại điểm.

---

## 8. structure identity principle /ˈstrʌk.tʃər aɪˈdɛn.t̬ə.t̬i ˈprɪn.sə.pəl/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là nguyên lý toán học khẳng định cấu trúc đồng hình thì đồng nhất (ví dụ: `establish the structure identity principle`).

**Core meaning — English:** A meta-theorem enabled by the Univalence Axiom asserting that for any mathematical structure (such as groups, rings, or topological spaces), an isomorphism between two instances is logically equivalent to an identity between them.

**Core meaning & mental image — Tiếng Việt:** Nguyên lý đồng nhất cấu trúc; hãy hình dung hai dàn nhạc giao hưởng: một dàn nhạc ở New York và một dàn nhạc ở London; dù các nhạc công mang quốc tịch khác nhau và dùng nhạc cụ từ các xưởng khác nhau, nhưng họ chơi cùng một bản giao hưởng Beethoven với cùng nhịp điệu và bè phối chính xác tuyệt đối (đẳng cấu); nguyên lý đồng nhất cấu trúc khẳng định rằng về mặt bản chất toán học, hai dàn nhạc đó là một thực thể đồng nhất; mọi lời khen ngợi hay phân tích nghệ thuật đúng với dàn nhạc New York đều có thể chuyển giao trọn vẹn sang dàn nhạc London.

**Grammar & collocations:** `invoke the structure identity principle` — viện dẫn nguyên lý đồng nhất cấu trúc; `consequences of the structure identity principle` — các hệ quả của nguyên lý đồng nhất cấu trúc; `structure identity principle for algebraic systems` — nguyên lý đồng nhất cấu trúc cho các hệ đại số.

**Register & nuance:** `categorical logic & formal mathematics` — hiện thực hóa giấc mơ của Bourbaki về "cấu trúc toán học"; giải quyết triệt để vấn đề muôn thuở trong toán học cổ điển nơi các nhà toán học nói "A và B về cơ bản là giống nhau" nhưng không thể viết dấu bằng hình thức $A = B$.

**Examples:** `The structure identity principle guarantees that any property proven for the cyclic group Z_2 automatically holds for any isomorphic group of order two without reproof.` → Nguyên lý đồng nhất cấu trúc bảo đảm rằng bất kỳ tính chất nào được chứng minh cho nhóm cyclic Z_2 đều tự động giữ nguyên cho bất kỳ nhóm đẳng cấu bậc hai nào mà không cần chứng minh lại.

**Liên kết tiếng Hàn:** `구조 동일성 원리` (構造 同一性 原理) — nguyên lý toán học suy ra từ tiên đề đơn trị khẳng định rằng hai cấu trúc đại số đẳng cấu thì đồng nhất hình thức với nhau.

---

## 9. cubical type theory kan composition /ˈkjuː.bɪ.kəl taɪp ˈθiː.ər.i kɑːn ˌkɑːm.pəˈzɪʃ.ən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm phép toán điền đầy khối lập phương để mang lại nội dung tính toán cho HoTT (ví dụ: `evaluate cubical type theory kan composition`).

**Core meaning — English:** An algorithmic operation in cubical type systems that synthesizes the missing lid of an open cubical box, directly providing constructive and computational content to path composition and the Univalence Axiom.

**Core meaning & mental image — Tiếng Việt:** Phép hợp thành Kan trong lý thuyết kiểu khối; hãy hình dung một chiếc hộp giấy hình lập phương bị mất nắp đậy trên cùng (chỉ có đáy và 4 mặt bên); phép hợp thành Kan là một cỗ máy tự động gấp một chiếc nắp hoàn hảo và đậy kín chiếc hộp lại; trong lý thuyết kiểu khối, phép toán này cho phép máy tính tự động tính toán ra kết quả thực tế của việc nối các đường đi và thực thi tiên đề đơn trị thành các chương trình máy tính chạy được, thay vì chỉ là một tiên đề trừu tượng không thể tính toán.

**Grammar & collocations:** `compute cubical type theory kan composition` — tính toán phép hợp thành Kan trong lý thuyết kiểu khối; `algorithms for cubical type theory kan composition` — các thuật toán cho phép hợp thành Kan trong lý thuyết kiểu khối; `kan composition primitives` — các nguyên ngữ hợp thành Kan.

**Register & nuance:** `computational type theory (Cubical Agda, CCHM model)` — giải quyết khiếm khuyết lớn nhất của HoTT nguyên thủy; trong HoTT của Voevodsky, tiên đề đơn trị là một giả định (axiom) làm kẹt quá trình tính toán (canonicity lost); lý thuyết kiểu khối khôi phục hoàn toàn tính toán được bằng cách thay thế đường đi bằng các hình khối (cubes).

**Examples:** `Cubical Agda relies on cubical type theory kan composition to compute the normal forms of proofs involving univalence without getting stuck on formal postulates.` → Cubical Agda dựa vào phép hợp thành Kan trong lý thuyết kiểu khối để tính toán các dạng chuẩn tắc của các chứng minh liên quan đến tính đơn trị mà không bị tắc nghẽn ở các giả định hình thức.

**Liên kết tiếng Hàn:** `큐비컬 유형론 칸 합성` (cubical 類型論 Kan 合成) — thao tác lấp đầy hình khối mở trong lý thuyết kiểu khối mang lại nội dung tính toán kiến tạo cho phép nối đường đi và tiên đề đơn trị.

---

## 10. higher-dimensional topological groupoid /ˈhaɪ.ər dɪˈmɛn.ʃən.əl ˌtɑː.pəˈlɑː.dʒɪ.kəl ˈɡruː.pɔɪd/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là mô hình đại số biểu diễn không gian tô pô nhiều tầng (ví dụ: `form a higher-dimensional topological groupoid`).

**Core meaning — English:** An algebraic structure where objects represent spatial points, 1-morphisms represent paths between points, 2-morphisms represent homotopies between paths, and so forth up to infinity, satisfying weak groupoid laws up to coherent equivalence.

**Core meaning & mental image — Tiếng Việt:** Groupoid tô pô nhiều chiều; hãy hình dung một vũ trụ tổ ong vô tận: các nút giao là các hành tinh (chiều 0); các đường bay nối giữa các hành tinh là các tuyến giao thông (chiều 1); giữa hai tuyến giao thông song song lại có các màn sương biến đổi mềm mại nối chúng lại (chiều 2); giữa hai màn sương lại có các trường năng lượng biến đổi ở chiều thứ 3; một groupoid nhiều chiều là một hệ thống toán học mô tả toàn bộ mạng lưới phân tầng vô tận này, nơi mọi thao tác đảo ngược đường đi đều hoàn hảo ở mọi tầng chiều.

**Grammar & collocations:** `model as a higher-dimensional topological groupoid` — mô hình hóa như một groupoid tô pô nhiều chiều; `structure of a higher-dimensional topological groupoid` — cấu trúc của một groupoid tô pô nhiều chiều; `weak higher-dimensional topological groupoid` — groupoid tô pô nhiều chiều yếu.

**Register & nuance:** `Grothendieck's homotopy hypothesis` — cầu nối vĩ đại giữa hình học và đại số; Alexander Grothendieck đưa ra giả thuyết rằng các không gian tô pô đồng luân và các $\infty$-groupoid là hai cách nhìn khác nhau của cùng một đối tượng toán học duy nhất.

**Examples:** `According to the homotopy interpretation, every type in Homotopy Type Theory naturally carries the structure of an infinite higher-dimensional topological groupoid.` → Theo diễn giải đồng luân, mọi kiểu trong Lý thuyết kiểu đồng luân đều tự nhiên mang cấu trúc của một groupoid tô pô nhiều chiều vô hạn.

**Liên kết tiếng Hàn:** `고차원 위상 그루포이드` (高次元 位相 groupoid) — cấu trúc đại số phân tầng trong đó các đối tượng là điểm, cấu xạ bậc 1 là đường đi, cấu xạ bậc 2 là đồng luân giữa các đường đi, kéo dài vô hạn.

---

## 11. intensional identity type reflexivity /ɪnˈtɛn.ʃən.əl aɪˈdɛn.t̬ə.t̬i taɪp ˌriː.flɛkˈsɪv.ə.t̬i/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm hàm dựng phản xạ cơ bản của kiểu đồng nhất nội hàm (ví dụ: `construct intensional identity type reflexivity`).

**Core meaning — English:** The canonical constructor `refl` that witnesses the trivial, stationary path from an element `x` to itself within an intensional identity type, serving as the sole primitive proof of self-identity.

**Core meaning & mental image — Tiếng Việt:** Tính phản xạ của kiểu đồng nhất nội hàm; hãy hình dung một chiếc gương hoàn hảo đặt trước mặt bạn: hình ảnh phản chiếu trong gương và chính bạn tại đúng thời điểm hiện tại trùng khít nhau một cách tuyệt đối mà không cần di chuyển một milimet nào; phần tử `refl` chính là sự đứng yên tại chỗ đó; nó là viên gạch nền tảng duy nhất được định nghĩa sẵn trong hệ thống: một điểm luôn luôn bằng chính nó mà không cần bất kỳ công sức chứng minh nào.

**Grammar & collocations:** `apply intensional identity type reflexivity` — áp dụng tính phản xạ của kiểu đồng nhất nội hàm; `uniqueness of intensional identity type reflexivity` — tính duy nhất của phản xạ kiểu đồng nhất nội hàm; `reduce to intensional identity type reflexivity` — rút gọn về tính phản xạ của kiểu đồng nhất nội hàm.

**Register & nuance:** `constructive type theory syntax` — khác với logic ngoại hàm (extensional) nơi hai hàm bằng nhau nếu cho ra cùng kết quả, logic nội hàm (intensional) chỉ coi hai phần tử bằng nhau về mặt định nghĩa nếu chúng có cùng cú pháp hoặc rút gọn về cùng một biểu thức thông qua `refl`.

**Examples:** `When two terms evaluate to identical normal forms under conversion rules, the proof discharges instantly by applying intensional identity type reflexivity.` → Khi hai số hạng đánh giá về các dạng chuẩn tắc giống hệt nhau theo các quy tắc chuyển đổi, chứng minh được giải phóng ngay lập tức bằng cách áp dụng tính phản xạ của kiểu đồng nhất nội hàm.

**Liên kết tiếng Hàn:** `내포적 동일성 유형 반사성` (內包的 同一性 類型 反射性) — hàm dựng cơ bản `refl` chứng minh một phần tử luôn đồng nhất với chính nó mà không cần biến đổi.

---

## 12. homotopy fiber contractibility /həˈmɑː.t̬ə.pi ˈfaɪ.bər kənˌtræk.təˈbɪl.ə.t̬i/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là điều kiện co rút được của thớ đồng luân xác định sự tương đương của hàm (ví dụ: `prove homotopy fiber contractibility`).

**Core meaning — English:** The mathematical condition that for every point `y` in the codomain of a function `f`, the preimage space consisting of pairs `(x, path: f(x) = y)` is homotopically contractible, characterizing `f` as an equivalence.

**Core meaning & mental image — Tiếng Việt:** Tính co rút được của thớ đồng luân; hãy hình dung một cỗ máy chiếu phim chiếu ánh sáng từ cuộn phim lên màn ảnh: đối với mỗi điểm sáng trên màn ảnh, bạn muốn kiểm tra xem có bao nhiêu khung hình trên cuộn phim tạo ra nó; nếu thớ đồng luân co rút được, điều đó có nghĩa là trên cuộn phim chỉ có đúng một điểm duy nhất chiếu ra điểm sáng đó, và không có bất kỳ điểm nhiễu nào khác; điều này khẳng định cỗ máy chiếu phim là một phép biến đổi tương đương 1-1 hoàn hảo giữa cuộn phim và màn ảnh.

**Grammar & collocations:** `verify homotopy fiber contractibility` — xác minh tính co rút được của thớ đồng luân; `condition of homotopy fiber contractibility` — điều kiện co rút được của thớ đồng luân; `homotopy fiber contractibility proof` — chứng minh tính co rút được của thớ đồng luân.

**Register & nuance:** `Voevodsky's definition of equivalence (isEquiv)` — định nghĩa chuẩn quy của HoTT; ưu việt hơn định nghĩa truyền thống "tồn tại hàm ngược trái và phải" vì tính co rút được của thớ đồng luân là một mệnh đề đơn thuần (mere proposition), không chứa thông tin dư thừa cấp cao.

**Examples:** `A function qualifies as a categorical equivalence if and only if it exhibits homotopy fiber contractibility at every point in its codomain.` → Một hàm đủ điều kiện là một tương đương phạm trù khi và chỉ khi nó thể hiện tính co rút được của thớ đồng luân tại mỗi điểm trong đối miền của nó.

**Liên kết tiếng Hàn:** `호모토피 올 수축성` (homotopy 올 收縮性) — điều kiện trong đó không gian nghịch ảnh đồng luân của mỗi điểm đều co rút về một điểm duy nhất, định nghĩa một hàm là tương đương kiểu.

---

## 13. univalent universe equivalence /juː.nəˈveɪ.lənt ˈjuː.nə.vɜːrs ɪˈkwɪv.ə.ləns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tính chất vũ trụ toán học thỏa mãn tiên đề đơn trị (ví dụ: `rely on univalent universe equivalence`).

**Core meaning — English:** The property of a universe of types `U` asserting that for any types `A, B : U`, the natural map sending identities `Id_U(A, B)` to equivalences `A ≃ B` is an equivalence of types.

**Core meaning & mental image — Tiếng Việt:** Tương đương vũ trụ đơn trị; hãy hình dung một cuốn bách khoa toàn thư chứa tất cả các thế giới toán học: nếu bạn lật trang tìm kiếm thế giới của các số nguyên và thế giới của các số đếm nhị phân, cuốn bách khoa toàn thư cho phép bạn dùng một chiếc thước đo để đo khoảng cách giữa hai thế giới đó; tính tương đương vũ trụ đơn trị bảo đảm rằng chiếc thước đo đó đo ra cùng một kết quả với việc đo số lượng cầu nối tương đương giữa hai thế giới; vũ trụ không phân biệt đối xử giữa "tên gọi" và "bản chất hoạt động".

**Grammar & collocations:** `enforce univalent universe equivalence` — thực thi tương đương vũ trụ đơn trị; `model of univalent universe equivalence` — mô hình tương đương vũ trụ đơn trị; `consistency of univalent universe equivalence` — tính nhất quán của tương đương vũ trụ đơn trị.

**Register & nuance:** `higher topos theory & simplicial set models` — mô hình toán học đột phá được Voevodsky xây dựng bằng các tập hợp đơn hình (simplicial sets), chứng minh rằng tiên đề đơn trị là nhất quán tuyệt đối với toán học kiến tạo.

**Examples:** `The univalent universe equivalence guarantees that whenever a type theorist discovers an isomorphism between two groups, they can equate the groups directly inside universe U.` → Sự tương đương vũ trụ đơn trị bảo đảm rằng bất cứ khi nào một nhà lý thuyết kiểu khám phá ra một đẳng cấu giữa hai nhóm, họ có thể đồng nhất các nhóm đó trực tiếp bên trong vũ trụ U.

**Liên kết tiếng Hàn:** `단가 우주 동치` (單價 宇宙 同値) — thuộc tính của một vũ trụ kiểu trong đó ánh xạ từ kiểu đồng nhất sang kiểu tương đương là một phép tương đương.

---

## 14. circle higher inductive type /ˈsɜːr.kəl ˈhaɪ.ər ɪnˈdʌk.tɪv taɪp/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là kiểu quy nạp bậc cao biểu diễn đường tròn tô pô $S^1$ (ví dụ: `formalize the circle higher inductive type`).

**Core meaning — English:** The canonical higher inductive type `S^1` defined by exactly two constructors: a point constructor `base : S^1` and a path constructor `loop : base = base`.

**Core meaning & mental image — Tiếng Việt:** Kiểu quy nạp bậc cao đường tròn; hãy hình dung việc vẽ một đường tròn hoàn mỹ chỉ bằng hai lệnh tối giản: lệnh thứ nhất cắm một chiếc cọc xuống mặt đất (base); lệnh thứ hai buộc một sợi dây thừng vào chiếc cọc, quay một vòng tròn 360 độ rồi buộc đầu dây còn lại vào chính chiếc cọc đó (loop); đường tròn này không cần bất kỳ phương trình sin cos hay bán kính nào; cấu trúc tô pô thuần khiết của nó lập tức sinh ra toàn bộ các tính chất của đường tròn hình học thực tế.

**Grammar & collocations:** `instantiate the circle higher inductive type` — khởi tạo kiểu quy nạp bậc cao đường tròn; `elimination rule for the circle higher inductive type` — quy tắc khử cho kiểu quy nạp bậc cao đường tròn; `fundamental group of the circle higher inductive type` — nhóm cơ bản của kiểu quy nạp bậc cao đường tròn.

**Register & nuance:** `elementary HoTT geometry` — ví dụ mở đầu kinh điển trong giáo trình HoTT; là đối tượng đầu tiên chứng minh rằng HoTT có thể tổng hợp được các khái niệm tô pô đại số phi tầm thường mà không cần dùng đến không gian mêtric.

**Examples:** `By defining the circle higher inductive type with a base point and a non-trivial loop, researchers proved constructively that its fundamental group is the integers.` → Bằng cách định nghĩa kiểu quy nạp bậc cao đường tròn với một điểm cơ sở và một vòng lặp phi tầm thường, các nhà nghiên cứu đã chứng minh một cách kiến tạo rằng nhóm cơ bản của nó là tập các số nguyên.

**Liên kết tiếng Hàn:** `원 고차 귀납적 유형` (圓 高次 歸納的 類型) — kiểu quy nạp bậc cao $S^1$ được định nghĩa bằng một điểm cơ sở và một hàm dựng đường đi vòng lặp nối điểm đó với chính nó.

---

## 15. suspension type loop space /səˈspɛn.ʃən taɪp luːp speɪs/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm cặp đối ngẫu giữa phép treo không gian và không gian vòng lặp (ví dụ: `study the suspension type loop space adjunction`).

**Core meaning — English:** The fundamental categorical adjunction in synthetic homotopy theory linking the suspension of a type `Σ(A)` (adding two poles connected by meridians) to its dual loop space `Ω(B)` (the space of self-paths at a basepoint).

**Core meaning & mental image — Tiếng Việt:** Không gian vòng lặp kiểu phép treo; hãy hình dung hai thao tác hình học đối lập: phép treo giống như việc lấy một vòng tròn xích đạo rồi kéo dài về hai cực Bắc và Nam để tạo thành một quả cầu rỗng (tăng thêm 1 chiều); ngược lại, không gian vòng lặp giống như việc thu gom tất cả các sợi dây thun buộc vào cực Bắc rồi thả trôi tự do (giảm đi 1 chiều); mối quan hệ đối ngẫu này cho phép các nhà toán học chuyển đổi các bài toán hình học hóc búa ở chiều cao về các bài toán đại số ở chiều thấp hơn.

**Grammar & collocations:** `compute the suspension type loop space adjunction` — tính toán mối liên hợp không gian vòng lặp kiểu phép treo; `iterate suspension type loop spaces` — lặp lại các không gian vòng lặp kiểu phép treo; `homotopy groups of suspension type loop space` — các nhóm đồng luân của không gian vòng lặp kiểu phép treo.

**Register & nuance:** `higher homotopy machinery` — trụ cột của lý thuyết đồng luân hiện đại; cho phép định nghĩa các nhóm đồng luân bậc cao $\pi_n(X)$ thông qua việc lấy không gian vòng lặp lặp lại n lần: $\pi_n(X) = \pi_0(\Omega^n X)$.

**Examples:** `The adjunction between the suspension type loop space enables a direct synthetic proof of Freudenthal's suspension theorem within proof assistants.` → Mối liên hợp giữa không gian vòng lặp kiểu phép treo cho phép một chứng minh tổng hợp trực tiếp về định lý phép treo Freudenthal bên trong các bộ hỗ trợ chứng minh.

**Liên kết tiếng Hàn:** `현수 유형 고리 공간` (懸垂 類型 고리 空間) — quan hệ liên hợp giữa phép treo không gian $\Sigma(A)$ và không gian vòng lặp $\Omega(B)$ trong lý thuyết đồng luân tổng hợp.

---

## 16. Freudenthal suspension theorem formalization /ˈfrɔɪ.dənˌθɑːl səˈspɛn.ʃən ˈθiː.ər.əm ˌfɔːr.mə.ləˈzeɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là sự hình thức hóa định lý phép treo Freudenthal trong các trợ lý chứng minh (ví dụ: `achieve the Freudenthal suspension theorem formalization`).

**Core meaning — English:** The mechanized verification in a formal proof assistant establishing that the suspension homomorphism on homotopy groups of an `n`-connected space becomes an isomorphism in dimensions up to `2n`, founding stable homotopy theory.

**Core meaning & mental image — Tiếng Việt:** Sự hình thức hóa định lý phép treo Freudenthal; hãy hình dung bạn thổi một quả bóng bay từ từ: ở những nhịp thổi đầu tiên, hình dạng quả bóng có thể méo mó, biến dạng bất thường; nhưng khi quả bóng đã căng phồng tới một kích thước nhất định (đạt ngưỡng ổn định), việc thổi thêm một hơi nữa (áp dụng phép treo) sẽ không làm thay đổi các hoa văn và nếp gấp trên bề mặt bóng nữa; định lý Freudenthal chứng minh rằng sau một số chiều nhất định, cấu trúc hình học của không gian sẽ trở nên hoàn toàn ổn định và bất biến.

**Grammar & collocations:** `complete the Freudenthal suspension theorem formalization` — hoàn thành việc hình thức hóa định lý phép treo Freudenthal; `machinery of Freudenthal suspension theorem formalization` — bộ máy của việc hình thức hóa định lý phép treo Freudenthal; `implications of Freudenthal suspension theorem formalization` — các hàm ý của việc hình thức hóa định lý phép treo Freudenthal.

**Register & nuance:** `mechanized stable homotopy theory` — một trong những cột mốc vĩ đại nhất của HoTT; chứng minh định lý sâu sắc của Hans Freudenthal hoàn toàn bằng logic kiến tạo mà không dùng đến giải tích mêtric hay tam giác đạc đa diện phức tạp.

**Examples:** `Peter LeFanu Lumsdaine led the Freudenthal suspension theorem formalization in Agda, demonstrating the expressive power of higher inductive types for synthetic algebraic topology.` → Peter LeFanu Lumsdaine đã dẫn dắt việc hình thức hóa định lý phép treo Freudenthal trong Agda, chứng minh sức mạnh biểu đạt của các kiểu quy nạp bậc cao cho tô pô đại số tổng hợp.

**Liên kết tiếng Hàn:** `프로이덴탈 현수 정리 형식화` (Freudenthal 懸垂 定理 形式化) — việc cơ giới hóa chứng minh định lý Freudenthal trong hệ thống chứng minh hình thức chứng minh tính ổn định của các nhóm đồng luân qua phép treo.

---

## 17. truncated homotopy level h-level /ˈtrʌŋ.keɪ.t̬ɪd həˈmɑː.t̬ə.pi ˈlɛv.əl ˈeɪtʃ ˌlɛv.əl/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chỉ số phân tầng độ phức tạp tô pô của kiểu (ví dụ: `classify types by truncated homotopy level h-level`).

**Core meaning — English:** A numerical classification (h-level) in HoTT measuring the topological depth of a type, beginning at h-level 0 for contractible types, h-level 1 for mere propositions, h-level 2 for sets, and continuing into general n-groupoids.

**Core meaning & mental image — Tiếng Việt:** Cấp độ đồng luân cắt cụt (h-level); hãy hình dung một chiếc thang phân cấp độ tự do của các vật thể: tầng trệt (h-level 0) là một vật thể bị đông cứng hoàn toàn, không thể cựa quậy (co rút được về 1 điểm); tầng 1 (h-level 1) là một chiếc công tắc đèn chỉ có hai trạng thái bật hoặc tắt (mệnh đề); tầng 2 (h-level 2) là một chiếc rổ đựng các quả táo riêng biệt (tập hợp các phần tử rời rạc); càng lên các tầng cao hơn, các sợi dây nối và không gian biến dạng càng trở nên tự do và phức tạp hơn.

**Grammar & collocations:** `determine the truncated homotopy level h-level` — xác định cấp độ đồng luân cắt cụt; `induction on truncated homotopy level h-level` — quy nạp theo cấp độ đồng luân cắt cụt; `stratify by truncated homotopy level h-level` — phân tầng theo cấp độ đồng luân cắt cụt.

**Register & nuance:** `HoTT structural hierarchy (n-types)` — hệ thống phân cấp cốt lõi của Voevodsky; cho phép các nhà logic học định vị chính xác vị trí của từng đối tượng toán học trong vũ trụ: mệnh đề $\subset$ tập hợp $\subset$ 1-groupoid $\subset$ 2-groupoid...

**Examples:** `A type theorist proves that a type is a set by verifying that its truncated homotopy level h-level is two, meaning all path spaces between its points are propositions.` → Một nhà lý thuyết kiểu chứng minh một kiểu là một tập hợp bằng cách xác minh rằng cấp độ đồng luân cắt cụt của nó là hai, có nghĩa là mọi không gian đường đi giữa các điểm của nó đều là các mệnh đề.

**Liên kết tiếng Hàn:** `절단된 호모토피 수준 h-레벨` (切斷된 homotopy 水準 h-level) — chỉ số phân tầng hình thức đo lường độ sâu tô pô của một kiểu bắt đầu từ co rút được, mệnh đề, tập hợp tới n-groupoid.

---

## 18. transport along path operation /ˈtræns.pɔːrt əˈlɔːŋ pæθ ˌɑː.pəˈreɪ.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là thao tác tịnh tiến song song một phần tử dọc theo đường đi bằng nhau (ví dụ: `execute the transport along path operation`).

**Core meaning — English:** The canonical dependent type operation that takes a continuous path `p : x = y` in a base type `A` and lifts an element `u : P(x)` in a fiber over `x` to a corresponding element in the fiber `P(y)` over `y`.

**Core meaning & mental image — Tiếng Việt:** Thao tác tịnh tiến dọc theo đường đi; hãy hình dung một toa tàu hỏa di chuyển trên đường ray từ ga x đến ga y (đường đi p): bên trong toa tàu có một hành khách mang theo một vali hành lý (phần tử u); khi con tàu cập bến tại ga y, người hành khách cùng chiếc vali tự nhiên bước xuống sân ga mới; thao tác tịnh tiến chính là chuyến tàu này: nó vận chuyển an toàn mọi thuộc tính toán học đã được chứng minh tại điểm x sang điểm y dọc theo đường ray bằng nhau.

**Grammar & collocations:** `perform the transport along path operation` — thực hiện thao tác tịnh tiến dọc theo đường đi; `functoriality of the transport along path operation` — tính hàm tử của thao tác tịnh tiến dọc theo đường đi; `coherence of transport along path operation` — tính mạch lạc của thao tác tịnh tiến dọc theo đường đi.

**Register & nuance:** `dependent elimination & fibration mechanics` — trong hình học vi phân cổ điển, đây chính là sự tịnh tiến song song (parallel transport) của các vector dọc theo đường trắc địa; trong HoTT, nó được suy ra tự động từ quy tắc khử J mà không cần bất kỳ liên kết vi phân (connection) nào.

**Examples:** `The transport along path operation carries algebraic invariants established for the integer representation cleanly across to the binary representation.` → Thao tác tịnh tiến dọc theo đường đi mang các bất biến đại số đã được thiết lập cho biểu diễn số nguyên sang biểu diễn nhị phân một cách sạch sẽ.

**Liên kết tiếng Hàn:** `경로 수송 연산` (經路 輸送 運算) — thao tác chuyển dời một phần tử trong một họ kiểu phụ thuộc từ thớ tại x sang thớ tại y dọc theo đường đi đồng nhất.

---

## 19. dependent path over equivalence /dɪˈpɛn.dənt pæθ ˈoʊ.vər ɪˈkwɪv.ə.ləns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm đường đi nằm trên một đường đi cơ sở trong không gian phân thớ (ví dụ: `formulate a dependent path over equivalence`).

**Core meaning — English:** A path within a dependent type family whose endpoints reside in distinct fibers lying over the source and target of an underlying equivalence path in the base type space.

**Core meaning & mental image — Tiếng Việt:** Đường đi phụ thuộc bên trên đường tương đương; hãy hình dung hai người leo núi leo trên hai sườn núi dốc đứng: người thứ nhất đi men theo chân núi từ điểm x đến điểm y (đường đi cơ sở p); người thứ hai đi trên một cây cầu treo dây văng bắc lơ lửng trên không trung ở đỉnh núi, với điểm đầu neo trên sườn x và điểm cuối neo trên sườn y; cây cầu treo đó chính là một đường đi phụ thuộc: nó vừa bắc cầu giữa hai độ cao khác nhau, vừa di chuyển tương ứng theo bước chân của người đi dưới chân núi.

**Grammar & collocations:** `construct a dependent path over equivalence` — xây dựng một đường đi phụ thuộc bên trên đường tương đương; `reasoning with dependent paths over equivalence` — suy luận với các đường đi phụ thuộc bên trên đường tương đương; `dependent path over equivalence in fibrations` — đường đi phụ thuộc bên trên đường tương đương trong các phân thớ.

**Register & nuance:** `heterogeneous equality (PathP in Cubical Type Theory)` — vượt qua giới hạn của kiểu bằng nhau thông thường (vốn bắt buộc hai vế phải có cùng một kiểu tĩnh); cho phép so sánh hai phần tử có kiểu khác nhau nhưng các kiểu đó được nối với nhau bằng một đường đi trong vũ trụ.

**Examples:** `In Cubical Agda, proving lemmas about fibered structures requires constructing a dependent path over equivalence that tracks fiber deformation along the base coordinate.` → Trong Cubical Agda, việc chứng minh các bổ đề về các cấu trúc có thớ đòi hỏi phải xây dựng một đường đi phụ thuộc bên trên đường tương đương để theo dõi sự biến dạng của thớ dọc theo tọa độ cơ sở.

**Liên kết tiếng Hàn:** `동치 위의 종속 경로` (同値 위의 從屬 經路) — đường đi nằm trong họ kiểu phụ thuộc nối hai phần tử ở các thớ khác nhau bên trên một đường đi ở không gian đáy.

---

## 20. coherent higher homotopy commutativity /koʊˈhɪr.ənt ˈhaɪ.ər həˈmɑː.t̬ə.pi kəˌmjuː.t̬əˈtɪv.ə.t̬i/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là tính giao hoán đồng luân bậc cao có tính mạch lạc (ví dụ: `enforce coherent higher homotopy commutativity`).

**Core meaning — English:** The infinite hierarchy of higher-dimensional homotopies ensuring that commutative diagrams between paths do not merely commute up to equivalence, but that the equivalences themselves satisfy higher compatibility cells up to infinity.

**Core meaning & mental image — Tiếng Việt:** Tính giao hoán đồng luân bậc cao mạch lạc; hãy hình dung một chuỗi thỏa thuận giữa nhiều quốc gia: nếu hiệp ước A tương đương hiệp ước B, và B tương đương C, thì sự chuyển đổi từ A sang C không chỉ đơn thuần là có thể làm được; sự chuyển đổi đó phải tương thích hoàn toàn với việc bạn đi trực tiếp từ A sang C; và giữa hai cách đi đó lại phải có một hiệp ước hòa giải cấp 2; tính mạch lạc bậc cao bảo đảm rằng không bao giờ có bất kỳ sự mâu thuẫn hay xoắn vặn nào xuất hiện ở bất kỳ tầng thứ bao nhiêu của hệ thống.

**Grammar & collocations:** `guarantee coherent higher homotopy commutativity` — bảo đảm tính giao hoán đồng luân bậc cao mạch lạc; `diagrams of coherent higher homotopy commutativity` — các biểu đồ về tính giao hoán đồng luân bậc cao mạch lạc; `failures of coherent higher homotopy commutativity` — các thất bại của tính giao hoán đồng luân bậc cao mạch lạc.

**Register & nuance:** `higher category theory (infinity-categories, Stasheff associahedra)` — thách thức kỹ thuật lớn nhất của toán học hiện đại; trong đại số thông thường ta chỉ cần $a \cdot b = b \cdot a$; trong HoTT, ta phải duy trì toàn bộ kim tự tháp các tế bào đồng luân mạch lạc ($E_\infty$-operads) để tránh nghịch lý.

**Examples:** `Constructing an algebraic group structure inside Homotopy Type Theory requires establishing coherent higher homotopy commutativity across associativity pentagons and inversion cylinders.` → Việc xây dựng một cấu trúc nhóm đại số bên trong Lý thuyết kiểu đồng luân đòi hỏi phải thiết lập tính giao hoán đồng luân bậc cao mạch lạc trên các ngũ giác kết hợp và các trụ nghịch đảo.

**Liên kết tiếng Hàn:** `일관된 고차 호모토피 가환성` (一貫된 高次 homotopy 可換性) — hệ thống các phép đồng luân bậc cao bảo đảm các biểu đồ giao hoán không chỉ tương đương mà các ô tương đương còn tương thích vô hạn với nhau.

---

## 21. synthetic homotopy fundamental group /sɪnˈθɛt̬.ɪk həˈmɑː.t̬ə.pi ˌfʌn.dəˈmɛn.təl ɡruːp/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm nhóm cơ bản $\pi_1(X)$ được tính toán bằng phương pháp đồng luân tổng hợp (ví dụ: `compute the synthetic homotopy fundamental group`).

**Core meaning — English:** The 0-truncation of the loop space of a pointed type `||Ω(X, x_0)||_0`, capturing the algebraic group of equivalence classes of closed paths under concatenation within HoTT.

**Core meaning & mental image — Tiếng Việt:** Nhóm cơ bản đồng luân tổng hợp; hãy hình dung bạn đứng tại một điểm trên một chiếc phao cứu sinh (hình vành khăn - torus): bạn buộc một sợi dây vào chân và bắt đầu đi dạo rồi quay trở về chỗ cũ; sợi dây của bạn có thể quấn một vòng qua lỗ thủng của chiếc phao, hoặc quấn quanh thân ngoài của phao; nhóm cơ bản đồng luân tổng hợp gom tất cả các kiểu quấn dây khác nhau này lại thành một hệ thống số học; nó cho biết có bao nhiêu cách quấn dây độc lập mà không thể tháo rời ra được.

**Grammar & collocations:** `calculate the synthetic homotopy fundamental group` — tính toán nhóm cơ bản đồng luân tổng hợp; `isomorphism of synthetic homotopy fundamental groups` — đẳng cấu của các nhóm cơ bản đồng luân tổng hợp; `properties of synthetic homotopy fundamental groups` — các tính chất của nhóm cơ bản đồng luân tổng hợp.

**Register & nuance:** `constructive algebraic topology` — thành tựu vang dội đầu tiên của HoTT; Licata và Shulman đã tính ra $\pi_1(S^1) \simeq \mathbb{Z}$ trực tiếp trong Coq chỉ bằng vài trăm dòng mã mà không cần dùng đến giải tích thực hay đường cong giải tích.

**Examples:** `By analyzing the universal cover of the circle, researchers computed the synthetic homotopy fundamental group of the circle and proved it isomorphic to the discrete group of integers.` → Bằng cách phân tích không gian phủ phổ quát của đường tròn, các nhà nghiên cứu đã tính toán nhóm cơ bản đồng luân tổng hợp của đường tròn và chứng minh nó đẳng cấu với nhóm rời rạc các số nguyên.

**Liên kết tiếng Hàn:** `종합적 호모토피 기본군` (綜合的 homotopy 基本群) — nhóm cơ bản $\pi_1$ của không gian được xây dựng bằng cách lấy phép cắt cụt cấp 0 của không gian vòng lặp trong HoTT.

---

## 22. univalent category equivalence criterion /juː.nəˈveɪ.lənt ˈkæt̬.ə.ɡɔːr.i ɪˈkwɪv.ə.ləns kraɪˈtɪr.i.ən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là tiêu chí xác định phạm trù đơn trị trong lý thuyết phạm trù hình thức (ví dụ: `satisfy the univalent category equivalence criterion`).

**Core meaning — English:** The foundational condition that a category is univalent if and only if for every pair of objects, the natural map from their identity type to the type of categorical isomorphisms is an equivalence.

**Core meaning & mental image — Tiếng Việt:** Tiêu chí tương đương phạm trù đơn trị; hãy hình dung một câu lạc bộ các nhà toán học: trong câu lạc bộ đó, hai thành viên chỉ được coi là hai con người khác nhau nếu họ có năng lực toán học thực sự khác nhau; nếu hai thành viên có cùng trình độ và bằng cấp hoàn toàn như nhau (đẳng cấu), câu lạc bộ xem họ là cùng một người duy nhất; tiêu chí phạm trù đơn trị bảo đảm rằng một phạm trù không chứa bất kỳ bản sao rác vô nghĩa nào của các đối tượng đẳng cấu.

**Grammar & collocations:** `meet the univalent category equivalence criterion` — đáp ứng tiêu chí tương đương phạm trù đơn trị; `formalize univalent category equivalence criteria` — hình thức hóa các tiêu chí tương đương phạm trù đơn trị; `univalent category equivalence criterion verification` — kiểm chứng tiêu chí tương đương phạm trù đơn trị.

**Register & nuance:** `category theory inside HoTT (Rezk completion)` — giải quyết "nghịch lý bình thường" của các nhà toán học khi viết các câu lệnh phân biệt giữa hai đối tượng đẳng cấu; một phạm trù thỏa mãn tiêu chí này sẽ không bao giờ mắc lỗi "evil" (phân biệt các đối tượng đẳng cấu).

**Examples:** `The category of sets satisfies the univalent category equivalence criterion, ensuring that isomorphic sets can be formally substituted in any categorical statement.` → Phạm trù các tập hợp thỏa mãn tiêu chí tương đương phạm trù đơn trị, bảo đảm rằng các tập hợp đẳng cấu có thể được thay thế hình thức trong bất kỳ phát biểu phạm trù nào.

**Liên kết tiếng Hàn:** `단가 범주 동치 기준` (單價 範疇 同値 基準) — tiêu chuẩn quy định một phạm trù là đơn trị khi ánh xạ từ kiểu đồng nhất giữa các đối tượng sang kiểu đẳng cấu giữa chúng là một phép tương đương.

---

## 23. pushout higher inductive colimit /ˈpʊʃ.aʊt ˈhaɪ.ər ɪnˈdʌk.tɪv ˈkoʊˌlɪm.ɪt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm giới hạn trực tiếp dán hai không gian dọc theo một không gian chung (ví dụ: `construct a pushout higher inductive colimit`).

**Core meaning — English:** A general higher inductive type construction representing the topological gluing of two spaces along a shared subspace mapped into both, generalizing suspensions, wedges, and cell attachments.

**Core meaning & mental image — Tiếng Việt:** Giới hạn trực tiếp dán ghép kiểu quy nạp bậc cao; hãy hình dung bạn có hai mảnh vải ren và một dải ruy băng chung ở giữa: bạn dùng kim chỉ khâu mép mảnh vải thứ nhất vào dải ruy băng, và khâu mép mảnh vải thứ hai vào dải ruy băng đó; toàn bộ tấm rèm hoàn chỉnh được tạo thành chính là một pushout; giới hạn trực tiếp này cho phép các nhà hình học dán ghép các không gian tô pô phức tạp từ các mảnh đơn giản thông qua các đường đi dán (gluing paths).

**Grammar & collocations:** `compute the pushout higher inductive colimit` — tính toán giới hạn trực tiếp dán ghép kiểu quy nạp bậc cao; `universal property of pushout higher inductive colimit` — tính chất phổ quát của giới hạn trực tiếp dán ghép kiểu quy nạp bậc cao; `pushout higher inductive colimit semantics` — ngữ nghĩa của giới hạn trực tiếp dán ghép kiểu quy nạp bậc cao.

**Register & nuance:** `synthetic homotopy constructions (van Kampen theorem)` — công cụ vạn năng để xây dựng mọi không gian phức phức hợp (CW-complexes); định lý Seifert-van Kampen trong HoTT được phát biểu cực kỳ thanh lịch thông qua pushout của các groupoid cơ bản.

**Examples:** `The suspension of a type is formally defined as a pushout higher inductive colimit gluing two unit poles along the equator type.` → Phép treo của một kiểu được định nghĩa hình thức như một giới hạn trực tiếp dán ghép kiểu quy nạp bậc cao dán hai cực đơn vị dọc theo kiểu xích đạo.

**Liên kết tiếng Hàn:** `푸시아웃 고차 귀납적 여극한` (pushout 高次 歸納的 餘極限) — cấu trúc dán hai không gian tô pô lại với nhau dọc theo một không gian con dùng chung bằng kiểu quy nạp bậc cao.

---

## 24. Hopf fibration synthetic construction /hɔːpf faɪˈbreɪ.ʃən sɪnˈθɛt̬.ɪk kənˈstrʌk.ʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là sự xây dựng phân thớ Hopf nổi tiếng bằng phương pháp tổng hợp (ví dụ: `execute the Hopf fibration synthetic construction`).

**Core meaning — English:** The internal HoTT formulation of Heinz Hopf's celebrated map from the 3-sphere to the 2-sphere with circular fibers, constructed constructively using higher inductive types and suspension pushouts.

**Core meaning & mental image — Tiếng Việt:** Sự xây dựng phân thớ Hopf tổng hợp; hãy hình dung một hiện tượng kỳ diệu trong hình học 4 chiều: một quả cầu 3 chiều trong không gian 4 chiều có thể được lấp đầy hoàn toàn bằng vô số các vòng tròn lồng vào nhau, sao cho cứ hai vòng tròn bất kỳ đều móc khóa vào nhau như hai mắt xích; sau đó các vòng tròn này được chiếu xuống bề mặt một quả cầu 2 chiều thông thường; việc xây dựng tổng hợp phân thớ Hopf cho phép máy tính kiểm chứng sự tồn tại của hiện tượng hình học mê hoặc này bằng các bước logic hoàn toàn tinh khiết.

**Grammar & collocations:** `derive the Hopf fibration synthetic construction` — dẫn xuất sự xây dựng phân thớ Hopf tổng hợp; `milestone of Hopf fibration synthetic construction` — cột mốc của sự xây dựng phân thớ Hopf tổng hợp; `formalize the Hopf fibration synthetic construction` — hình thức hóa sự xây dựng phân thớ Hopf tổng hợp.

**Register & nuance:** `advanced synthetic topology` — một trong những minh chứng rực rỡ nhất cho thấy HoTT không chỉ là một hệ thống logic khô khan mà thực sự là một môi trường hình học trực quan sâu sắc; mở đường cho việc tính toán nhóm đồng luân $\pi_3(S^2) \simeq \mathbb{Z}$.

**Examples:** `Ulrik Buchholtz and Egbert Rijke completed the Hopf fibration synthetic construction in HoTT, confirming that S^3 fibers over S^2 with fiber S^1.` → Ulrik Buchholtz và Egbert Rijke đã hoàn thành sự xây dựng phân thớ Hopf tổng hợp trong HoTT, xác nhận rằng S^3 phân thớ trên S^2 với thớ là S^1.

**Liên kết tiếng Hàn:** `호프 파이브레이션 종합적 구성` (Hopf fibration 綜合的 構成) — việc xây dựng ánh xạ phân thớ Hopf từ hình cầu $S^3$ xuống $S^2$ với các thớ hình tròn $S^1$ bằng phương pháp kiến tạo thuần túy trong HoTT.

---

## 25. constructive univalence computational canonicity /kənˈstrʌk.tɪv juː.nəˈveɪ.ləns ˌkɑːm.pjʊˈteɪ.ʃən.əl ˌkæn.əˈnɪs.ə.t̬i/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm thuộc tính chuẩn tắc tính toán được của tính đơn trị kiến tạo (ví dụ: `achieve constructive univalence computational canonicity`).

**Core meaning — English:** The foundational computational property of cubical type systems proving that every closed term of an inductive type (such as natural numbers) evaluates to a canonical constructor, even when proofs rely fundamentally on the univalence axiom.

**Core meaning & mental image — Tiếng Việt:** Tính chuẩn tắc tính toán của tính đơn trị kiến tạo; hãy hình dung một chiếc máy tính bỏ túi: trong toán học cổ điển, khi bạn nhập một phương trình có chứa các tiên đề trừu tượng vô hạn, máy tính sẽ báo lỗi "không thể tính được" (kẹt phép tính); nhưng với tính chuẩn tắc tính toán của tính đơn trị kiến tạo, ngay cả khi bạn sử dụng các phép biến đổi đồng luân và tiên đề đơn trị siêu phức tạp, cỗ máy vẫn luôn luôn chạy tới đích và in ra một con số cụ thể (như 42) trên màn hình; mọi định lý toán học đều đồng thời là một chương trình máy tính thực thi được.

**Grammar & collocations:** `establish constructive univalence computational canonicity` — thiết lập tính chuẩn tắc tính toán của tính đơn trị kiến tạo; `proof of constructive univalence computational canonicity` — chứng minh tính chuẩn tắc tính toán của tính đơn trị kiến tạo; `break constructive univalence computational canonicity` — phá vỡ tính chuẩn tắc tính toán của tính đơn trị kiến tạo.

**Register & nuance:** `constructive mathematics & proof assistant foundations` — đỉnh cao của trường phái trực giác (intuitionism) và kiến tạo; hiện thực hóa trọn vẹn triết lý "Toán học là Tính toán" (Curry-Howard correspondence) cho toàn bộ hình học tô pô hiện đại.

**Examples:** `The development of cubical type theories finally delivered constructive univalence computational canonicity, ensuring univalence proofs compute to canonical numerical values.` → Sự phát triển của các lý thuyết kiểu khối cuối cùng đã mang lại tính chuẩn tắc tính toán của tính đơn trị kiến tạo, bảo đảm các chứng minh đơn trị tính toán ra các giá trị số chuẩn tắc.

**Liên kết tiếng Hàn:** `구성적 단가성의 계산적 정규성` (構成的 單價性의 計算的 正規性) — thuộc tính trong đó mọi chứng minh dựa trên tiên đề đơn trị đều có thể chạy và tính toán ra kết quả cụ thể trong hệ thống kiểu khối.

---

## Review in context (Part 1: Univalence, Paths, and Topological Foundations)

Modern foundations of mathematics have undergone a seismic paradigm shift through the synthesis of type theory and topology. At the pinnacle of this revolution stands the **Voevodsky univalence axiom**, which asserts that equivalent types are fundamentally equal. Within this geometric framework, equality between mathematical entities is no longer a static boolean assertion, but rather an active **identity type equivalence path** connecting points within an abstract space. To model geometric domains directly, mathematicians introduce a **higher inductive type constructor**, specifying path relationships between points alongside ordinary data constructors. In order to calibrate the dimensionality of these spaces, they perform a **homotopy n-type truncation**, effectively flattening topological fluctuations above level n. When investigating fibered structures, demonstrating a **contractible topological fibration** guarantees that all fibers collapse homotopically to a single point. Topological invariants of spheres are computed rigorously as a **synthetic homotopy sphere invariant**, bypassing traditional metric spaces entirely. Proof engines perform inductive reasoning over continuous curves by deploying the **path induction J-eliminator**, checking properties exclusively on degenerate reflexivity loops. Across algebraic structures, the framework yields the **structure identity principle**, guaranteeing that isomorphic algebraic systems share identical provable properties. To grant these topological abstractions constructive meaning, computational engines evaluate **cubical type theory kan composition**, mechanically filling boundary cubes to synthesize composite paths. Every type naturally manifests the structure of an infinite **higher-dimensional topological groupoid**, where morphisms and higher homotopies compose coherently. Basic proofs of self-identity reduce directly to **intensional identity type reflexivity**, serving as the trivial stationary loop. Finally, proving that an arbitrary function constitutes an equivalence requires validating **homotopy fiber contractibility** across every point of the target domain.

**Bản dịch tiếng Việt:**

Các nền tảng hiện đại của toán học đã trải qua một sự chuyển dịch mô hình địa chấn thông qua sự tổng hợp giữa lý thuyết kiểu và tô pô. Tại đỉnh cao của cuộc cách mạng này là **Voevodsky univalence axiom**, khẳng định rằng các kiểu tương đương về cơ bản là bằng nhau. Bên trong khung hình học này, sự bình đẳng giữa các thực thể toán học không còn là một khẳng định boolean tĩnh, mà là một **identity type equivalence path** tích cực nối các điểm trong một không gian trừu tượng. Để mô hình hóa trực tiếp các miền hình học, các nhà toán học giới thiệu một **higher inductive type constructor**, chỉ định các mối quan hệ đường đi giữa các điểm cùng với các hàm dựng dữ liệu thông thường. Để hiệu chỉnh số chiều của các không gian này, họ thực hiện một **homotopy n-type truncation**, làm phẳng hiệu quả các dao động tô pô trên cấp n. Khi nghiên cứu các cấu trúc phân thớ, việc chứng minh một **contractible topological fibration** bảo đảm rằng tất cả các thớ đều co rút đồng luân về một điểm đơn lẻ. Các bất biến tô pô của các hình cầu được tính toán chặt chẽ như một **synthetic homotopy sphere invariant**, bỏ qua hoàn toàn các không gian mêtric truyền thống. Các động cơ chứng minh thực hiện suy luận quy nạp trên các đường cong liên tục bằng cách triển khai **path induction J-eliminator**, chỉ kiểm tra các tính chất trên các vòng lặp phản xạ thoái hóa. Trên khắp các cấu trúc đại số, khung lý thuyết mang lại **structure identity principle**, bảo đảm rằng các hệ thống đại số đẳng cấu chia sẻ các tính chất có thể chứng minh giống hệt nhau. Để trao cho những sự trừu tượng hóa tô pô này ý nghĩa kiến tạo, các động cơ tính toán đánh giá **cubical type theory kan composition**, lấp đầy các khối ranh giới bằng máy móc để tổng hợp các đường đi phức hợp. Mọi kiểu đều thể hiện tự nhiên cấu trúc của một **higher-dimensional topological groupoid** vô hạn, nơi các cấu xạ và các đồng luân bậc cao kết hợp một cách mạch lạc. Các chứng minh cơ bản về sự tự đồng nhất rút gọn trực tiếp về **intensional identity type reflexivity**, đóng vai trò như vòng lặp đứng yên tầm thường. Cuối cùng, việc chứng minh rằng một hàm tùy ý cấu thành một tương đương đòi hỏi phải xác thực **homotopy fiber contractibility** trên mỗi điểm của miền đích.

---

## Review in context (Part 2: Higher Inductive Types, Suspensions, and Computational Canonicity)

Expanding synthetic topology into higher dimensions reveals the rich algebraic nature of dependent types. Within universe structures, theorists formulate the **univalent universe equivalence**, equating type identities with type equivalences inside the ambient universe. The simplest geometric space is represented by the **circle higher inductive type**, capturing circular winding numbers through a base point and an explicit loop constructor. Investigating continuous loops around higher spaces relies on the **suspension type loop space** adjunction, shifting topological problems between spatial suspensions and loop spaces. In formal proof assistants, researchers achieved the historic **Freudenthal suspension theorem formalization**, confirming that homotopy groups stabilize as suspension dimensions increase. Types are stratified by topological depth through their **truncated homotopy level h-level**, systematically classifying propositions, sets, and higher groupoids. When fibers change along a base path, terms are relocated smoothly via the **transport along path operation**, preserving dependent typing constraints. Reasoning about equality across varying fibers is achieved by defining a **dependent path over equivalence**, tracking geometric deformations over base curves. To ensure that algebraic operations on paths compose without paradoxical twisting, structures must satisfy **coherent higher homotopy commutativity** up to infinite dimensions. The topological connectivity of a pointed space is computed by extracting its **synthetic homotopy fundamental group**, converting geometric loops into discrete algebraic elements. In formal category theory, categories avoid evil distinctions by satisfying the **univalent category equivalence criterion**, ensuring isomorphic objects are truly identical. Complicated spatial gluing is achieved through a **pushout higher inductive colimit**, joining disparate spaces along a common intersection. One of the greatest milestones of synthetic topology was the **Hopf fibration synthetic construction**, demonstrating non-trivial higher spherical mappings purely within type theory. Ultimately, cubical systems achieve the holy grail of constructive logic by delivering **constructive univalence computational canonicity**, enabling every univalence-dependent proof to compute directly to canonical values.

**Bản dịch tiếng Việt:**

Việc mở rộng tô pô tổng hợp vào các chiều cao hơn bộc lộ bản chất đại số phong phú của các kiểu phụ thuộc. Bên trong các cấu trúc vũ trụ, các nhà lý thuyết xây dựng **univalent universe equivalence**, đồng nhất các đồng nhất kiểu với các tương đương kiểu bên trong vũ trụ bao quanh. Không gian hình học đơn giản nhất được đại diện bởi **circle higher inductive type**, nắm bắt các số cuộn tròn thông qua một điểm cơ sở và một hàm dựng vòng lặp rõ ràng. Việc nghiên cứu các vòng lặp liên tục xung quanh các không gian cao hơn dựa vào mối liên hợp **suspension type loop space**, chuyển dịch các bài toán tô pô giữa các phép treo không gian và các không gian vòng lặp. Trong các bộ hỗ trợ chứng minh hình thức, các nhà nghiên cứu đã đạt được **Freudenthal suspension theorem formalization** mang tính lịch sử, xác nhận rằng các nhóm đồng luân ổn định khi các chiều treo tăng lên. Các kiểu được phân tầng theo độ sâu tô pô thông qua **truncated homotopy level h-level** của chúng, phân loại có hệ thống các mệnh đề, tập hợp và các groupoid bậc cao. Khi các thớ thay đổi dọc theo một đường đi cơ sở, các số hạng được chuyển dời trơn tru thông qua **transport along path operation**, bảo tồn các ràng buộc kiểu phụ thuộc. Việc suy luận về sự bình đẳng trên các thớ khác nhau đạt được bằng cách định nghĩa một **dependent path over equivalence**, theo dõi các biến dạng hình học trên các đường cong cơ sở. Để bảo đảm rằng các thao tác đại số trên các đường đi kết hợp mà không bị xoắn nghịch lý, các cấu trúc phải thỏa mãn **coherent higher homotopy commutativity** lên tới các chiều vô hạn. Tính liên thông tô pô của một không gian có điểm được tính toán bằng cách trích xuất **synthetic homotopy fundamental group** của nó, chuyển đổi các vòng lặp hình học thành các phần tử đại số rời rạc. Trong lý thuyết phạm trù hình thức, các phạm trù tránh được sự phân biệt sai lệch bằng cách thỏa mãn **univalent category equivalence criterion**, bảo đảm các đối tượng đẳng cấu thực sự là đồng nhất. Việc dán ghép không gian phức tạp đạt được thông qua một **pushout higher inductive colimit**, kết hợp các không gian khác biệt dọc theo một giao điểm chung. Một trong những cột mốc vĩ đại nhất của tô pô tổng hợp là **Hopf fibration synthetic construction**, chứng minh các ánh xạ hình cầu bậc cao phi tầm thường thuần túy bên trong lý thuyết kiểu. Cuối cùng, các hệ thống khối đạt được chén thánh của logic kiến tạo bằng cách mang lại **constructive univalence computational canonicity**, cho phép mọi chứng minh phụ thuộc vào tính đơn trị tính toán trực tiếp ra các giá trị chuẩn tắc.
