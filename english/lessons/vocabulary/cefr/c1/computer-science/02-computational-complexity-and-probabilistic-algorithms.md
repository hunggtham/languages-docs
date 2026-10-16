# C1 Vocabulary 02 — Computational complexity, NP-completeness, and randomized approximation

Nhóm từ vựng C1 này tập trung vào các khái niệm nền tảng trong lý thuyết độ phức tạp tính toán (computational complexity), bài toán NP-đầy đủ (NP-completeness), các thuật toán ngẫu nhiên hóa (randomized algorithms) và kỹ thuật xấp xỉ xác suất trong khoa học máy tính hiện đại.

---

## 1. polynomial-time reduction /ˌpɑlɪˈnoʊmiəl taɪm rɪˈdʌkʃən/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm chủ ngữ chứng minh tính chất độ phức tạp hoặc làm tân ngữ sau `construct`, `devise`, `prove via`.

**Core meaning — English:** An algorithm that transforms instances of one computational problem into instances of another problem in polynomial time, proving that the first problem is at most as hard as the second.

**Core meaning & mental image — Tiếng Việt:** Phép quy giảm đa thức; thuật toán chuyển đổi bài toán trong thời gian đa thức. Hãy hình dung một chiếc máy phiên dịch siêu tốc; bất kể bạn đưa vào một bài toán mê cung hóc búa nào, chiếc máy chỉ mất vài giây để biến nó thành một bài toán tìm đường ống nước tương đương mà bạn đã có sẵn cẩm nang giải quyết.

**Grammar & collocations:** `construct a polynomial-time reduction` — xây dựng phép quy giảm thời gian đa thức; `Karp polynomial-time reduction` — phép quy giảm đa thức theo chuẩn Karp; `polynomial-time reduction from 3-SAT` — phép quy giảm thời gian đa thức từ bài toán 3-SAT.

**Register & nuance:** Khái niệm cốt lõi của lý thuyết độ phức tạp tính toán (định nghĩa bởi Richard Karp năm 1972); là công cụ toán học chủ yếu để phân loại độ khó tương đối giữa các bài toán quyết định.

**Examples:** `The computer scientist established the NP-hardness of the new network routing problem by designing a polynomial-time reduction from the classic traveling salesperson problem.` → Nhà khoa học máy tính đã chứng minh tính NP-khó của bài toán định tuyến mạng mới bằng cách thiết kế một phép quy giảm thời gian đa thức từ bài toán người bán hàng kinh điển.

**Liên kết tiếng Hàn:** `다항 시간 환원` (多項 時間 還元) — phép biến đổi và quy giảm bài toán trong thời gian đa thức.

---

## 2. NP-completeness /ˌɛnˈpiː kəmˈplitnəs/

**Loại từ & vị trí trong câu:** `uncountable noun`. Thường làm chủ ngữ mô tả giới hạn giải thuật hoặc làm bổ ngữ/tân ngữ sau `prove`, `demonstrate`, `classify under`.

**Core meaning — English:** The property of a computational decision problem that is both contained within the class NP (nondeterministic polynomial time) and NP-hard, meaning any problem in NP can be reduced to it in polynomial time.

**Core meaning & mental image — Tiếng Việt:** Tính NP-đầy đủ; lớp bài toán khó bậc nhất trong NP. Hãy hình dung một chùm chìa khóa vạn năng cho một tòa lâu đài bí ẩn; nếu bạn tìm ra một chiếc máy vạn năng mở được một ổ khóa NP-đầy đủ trong nháy mắt, thì hàng ngàn cánh cửa hóc búa khác trong toàn bộ lâu đài cũng sẽ tự động bật mở theo.

**Grammar & collocations:** `prove NP-completeness` — chứng minh tính NP-đầy đủ; `the theory of NP-completeness` — lý thuyết về tính NP-đầy đủ; `Cook-Levin theorem on NP-completeness` — định lý Cook-Levin về tính NP-đầy đủ.

**Register & nuance:** Khái niệm trung tâm của bài toán thiên niên kỷ P đối đầu NP (*P vs NP problem*); xác nhận rằng bài toán không có thuật toán giải chính xác thời gian đa thức nào được biết đến, buộc kỹ sư phải chuyển sang thuật toán gần đúng hoặc heuristic.

**Examples:** `Once the research team proved the NP-completeness of the scheduling challenge, they stopped seeking an exact algorithm and instead implemented an approximation strategy.` → Khi nhóm nghiên cứu đã chứng minh được tính NP-đầy đủ của bài toán lập lịch, họ đã ngừng tìm kiếm thuật toán giải chính xác và thay vào đó triển khai chiến lược xấp xỉ.

**Liên kết tiếng Hàn:** `NP-완전성` (NP 完全性) — tính chất NP-đầy đủ trong lý thuyết độ phức tạp.

---

## 3. nondeterministic automaton /ˌnɑndɪˌtɜrməˈnɪstɪk ɔˈtɑməˌtɑn/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường viết tắt là NFA (hoặc NTM cho Turing machine), làm chủ ngữ trong các mô hình lý thuyết hoặc làm tân ngữ sau `simulate`, `construct`, `convert into`.

**Core meaning — English:** A theoretical computational model that, from a given state and input symbol, can branch into multiple possible next states simultaneously, conceptually exploring all paths in parallel.

**Core meaning & mental image — Tiếng Việt:** Ô-tô-mát không đơn định; máy trạng thái không đơn định. Hãy hình dung một người thám hiểm đứng trước một ngã năm trong hang tối; thay vì phải chọn một nhánh để thử và quay lại nếu cụt đường, người thám hiểm lập tức phân thân thành năm bản sao giống hệt nhau để đi vào cả năm nhánh cùng một lúc.

**Grammar & collocations:** `nondeterministic automaton state transitions` — các bước chuyển trạng thái của ô-tô-mát không đơn định; `convert a nondeterministic automaton to a deterministic one` — chuyển đổi một ô-tô-mát không đơn định sang dạng đơn định; `nondeterministic automaton simulation` — mô phỏng ô-tô-mát không đơn định.

**Register & nuance:** Nền tảng của lý thuyết ngôn ngữ hình thức (*formal language theory*) và lớp phức tạp NP; là mô hình toán học trừu tượng chứ không tồn tại trực tiếp như phần cứng vật lý thông thường.

**Examples:** `The theoretical proof relied on a nondeterministic automaton that magically guessed the correct certificate before validating it in linear time.` → Chứng minh lý thuyết dựa trên một ô-tô-mát không đơn định có khả năng đoán trúng chứng chỉ hợp lệ một cách thần kỳ trước khi kiểm tra nó trong thời gian tuyến tính.

**Liên kết tiếng Hàn:** `비결정론적 오토마톤` (非決定論的 automaton) — máy tự động không đơn định.

---

## 4. worst-case approximation ratio /wɜrst keɪs əˌprɑksəˈmeɪʃən ˈreɪʃioʊ/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ định lượng chất lượng thuật toán xấp xỉ hoặc làm tân ngữ sau `achieve`, `bound`, `guarantee`.

**Core meaning — English:** The maximum upper bound on the ratio between the cost of a solution produced by an approximation algorithm and the cost of the optimal solution across all possible inputs.

**Core meaning & mental image — Tiếng Việt:** Tỷ số xấp xỉ trường hợp xấu nhất; hệ số bảo đảm sai số tối đa. Hãy hình dung một chiếc cân ước lượng nhanh bao tải gạo ở bến cảng; chiếc cân này cam kết rằng dù bao tải có hình thù méo mó hay ẩm ướt đến mức nào, con số hiển thị không bao giờ sai lệch quá 1,5 lần so với chiếc cân phân tích chuẩn của phòng thí nghiệm.

**Grammar & collocations:** `achieve a worst-case approximation ratio of 1.5` — đạt được tỷ số xấp xỉ trường hợp xấu nhất là 1,5; `bound the worst-case approximation ratio` — giới hạn tỷ số xấp xỉ trường hợp xấu nhất; `constant worst-case approximation ratio` — tỷ số xấp xỉ trường hợp xấu nhất mang giá trị hằng số.

**Register & nuance:** Chỉ số vàng trong thiết kế thuật toán xấp xỉ (*approximation algorithms*); bảo đảm bằng toán học nghiêm ngặt rằng kết quả không bao giờ tồi tệ hơn ngưỡng quy định, bất kể đầu vào có hiểm hóc đến đâu.

**Examples:** `Christofides' algorithm guarantees a worst-case approximation ratio of 1.5 for metric traveling salesperson instances, ensuring solutions remain close to the theoretical optimum.` → Thuật toán Christofides bảo đảm tỷ số xấp xỉ trường hợp xấu nhất là 1,5 đối với các trường hợp bài toán người bán hàng theo không gian metric, bảo đảm lời giải luôn sát với điểm tối ưu lý thuyết.

**Liên kết tiếng Hàn:** `최악 조건 근사비` (最惡 條件 近似比) — tỷ số xấp xỉ trong trường hợp xấu nhất.

---

## 5. Monte Carlo algorithm /ˈmɑnti ˈkɑrloʊ ˈælɡəˌrɪðəm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ mô tả phương pháp tính toán hoặc tân ngữ sau `execute`, `design`, `accelerate via`.

**Core meaning — English:** A randomized algorithm whose execution running time is deterministic and strictly bounded, but whose output has a small, quantifiable probability of being incorrect.

**Core meaning & mental image — Tiếng Việt:** Thuật toán Monte Carlo; thuật toán ngẫu nhiên hóa thời gian cố định có xác suất sai. Hãy hình dung một kỳ thi trắc nghiệm có giới hạn thời gian nghiêm ngặt 30 phút; bạn làm bài cực nhanh và nộp đúng giờ, chấp nhận rủi ro rất nhỏ là có thể khoanh nhầm 1 trong 100 câu hỏi, nhưng luôn bảo đảm không bao giờ bị thu bài muộn.

**Grammar & collocations:** `implement a Monte Carlo algorithm` — triển khai thuật toán Monte Carlo; `Monte Carlo algorithm with two-sided error` — thuật toán Monte Carlo với sai số hai phía; `amplify the success probability of a Monte Carlo algorithm` — khuếch đại xác suất thành công của thuật toán Monte Carlo.

**Register & nuance:** Khác với thuật toán Las Vegas; Monte Carlo bảo đảm về mặt thời gian chạy (*guaranteed fast runtime*) nhưng chấp nhận xác suất sai sót nhỏ (*probabilistic error*), thường dùng trong kiểm tra tính nguyên tố (như Miller-Rabin).

**Examples:** `The cryptography framework deployed a polynomial Monte Carlo algorithm to rapidly test whether massive 4096-bit integers were prime.` → Khung bảo mật mật mã đã triển khai một thuật toán Monte Carlo thời gian đa thức để kiểm tra nhanh chóng liệu các số nguyên khổng lồ 4096-bit có phải là số nguyên tố hay không.

**Liên kết tiếng Hàn:** `몬테카를로 알고리즘` — thuật toán Monte Carlo với thời gian cố định và xác suất sai số có thể kiểm soát.

---

## 6. Las Vegas algorithm /lɑs ˈveɪɡəs ˈælɡəˌrɪðəm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ chỉ giải thuật hoặc làm tân ngữ sau `run`, `formulate`, `analyze`.

**Core meaning — English:** A randomized algorithm that always outputs a strictly correct result, but whose running time is a random variable dependent on internal coin flips.

**Core meaning & mental image — Tiếng Việt:** Thuật toán Las Vegas; thuật toán ngẫu nhiên luôn cho kết quả đúng với thời gian chạy biến thiên. Hãy hình dung một tay thợ mở khóa lành nghề; anh ta rút ngẫu nhiên từng chiếc chìa trong chùm để thử; có lúc chỉ mất ba giây là mở được két sắt, có lúc mất mười lăm phút, nhưng một khi két sắt đã mở ra thì chắc chắn là đúng chiếc chìa chính xác 100%.

**Grammar & collocations:** `expected runtime of a Las Vegas algorithm` — thời gian chạy kỳ vọng của một thuật toán Las Vegas; `design a Las Vegas algorithm for sorting` — thiết kế thuật toán Las Vegas cho bài toán sắp xếp; `convert a Las Vegas algorithm into a Monte Carlo algorithm` — chuyển đổi thuật toán Las Vegas thành thuật toán Monte Carlo.

**Register & nuance:** Đối trọng kinh điển với Monte Carlo; Las Vegas cam kết độ chính xác tuyệt đối (*always correct*), điển hình như giải thuật sắp xếp nhanh ngẫu nhiên (*Randomized Quicksort*).

**Examples:** `Randomized quicksort operates as an ideal Las Vegas algorithm because it guarantees perfectly sorted output while achieving an optimal expected runtime of O(n log n).` → Thuật toán sắp xếp nhanh ngẫu nhiên hoạt động như một thuật toán Las Vegas lý tưởng vì nó bảo đảm đầu ra được sắp xếp hoàn hảo trong khi đạt thời gian chạy kỳ vọng tối ưu là O(n log n).

**Liên kết tiếng Hàn:** `라스베이거스 알고리즘` — thuật toán Las Vegas luôn cho kết quả đúng với thời gian chạy ngẫu nhiên.

---

## 7. sublinear-time verification /sʌbˈlɪniər taɪm ˌvɛrəfəˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ khẳng định hiệu quả kiểm tra dữ liệu lớn hoặc tân ngữ sau `achieve`, `enable`, `conduct`.

**Core meaning — English:** An algorithmic verification process that inspects only a tiny, randomly sampled fraction of an input or proof certificate, verifying global properties in asymptotically less time than reading the entire input.

**Core meaning & mental image — Tiếng Việt:** Quy trình xác minh trong thời gian dưới tuyến tính; kiểm tra siêu tốc không cần đọc hết dữ liệu. Hãy hình dung một nhân viên kiểm định chất lượng ngũ cốc của một toa tàu hàng ngàn tấn; thay vì soi từng hạt lúa mì mất cả tháng trời, anh ta chọc ngẫu nhiên chiếc que thăm vào mười điểm khác nhau để thẩm định độ tinh khiết của cả toa tàu chỉ trong vài phút.

**Grammar & collocations:** `perform sublinear-time verification` — thực hiện việc xác minh thời gian dưới tuyến tính; `sublinear-time verification of cryptographic proofs` — xác minh chứng minh mật mã trong thời gian dưới tuyến tính; `sublinear-time verification algorithms` — các thuật toán xác minh thời gian dưới tuyến tính.

**Register & nuance:** Đột phá trong lý thuyết kiểm tra tính chất (*property testing*) và chứng minh có thể kiểm tra xác suất (*PCP theorem*); rất quan trọng trong xác thực giao dịch trên các chuỗi khối (blockchain) có quy mô terabyte.

**Examples:** `Using probabilistically checkable proofs, the system achieved sublinear-time verification, validating a gigabyte-scale computation by inspecting merely a few dozen randomized bit coordinates.` → Sử dụng các chứng minh có thể kiểm tra xác suất, hệ thống đã đạt được quy trình xác minh trong thời gian dưới tuyến tính, thẩm định một phép tính quy mô gigabyte bằng cách chỉ kiểm tra vài chục tọa độ bit ngẫu nhiên.

**Liên kết tiếng Hàn:** `준선형 시간 검증` (準線形 時間 檢證) — kiểm chứng trong thời gian dưới tuyến tính.

---

## 8. decision problem /dɪˈsɪʒən ˈprɑbləm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ phân loại hình thức hoặc tân ngữ sau `formulate as`, `solve`, `map to`.

**Core meaning — English:** A computational problem that can be formally posed as a yes-or-no question of an input string, serving as the standard formal abstraction for studying computational complexity.

**Core meaning & mental image — Tiếng Việt:** Bài toán quyết định; bài toán phân định Đúng/Sai. Hãy hình dung một cánh cổng kiểm soát hộ chiếu tự động tại sân bay; máy chỉ có một nhiệm vụ duy nhất: đọc dữ liệu trên chip và đưa ra tín hiệu đèn xanh (Hợp lệ / CÓ) hoặc đèn đỏ (Không hợp lệ / KHÔNG).

**Grammar & collocations:** `formulate as a decision problem` — định hình dưới dạng bài toán quyết định; `undecidable decision problem` — bài toán quyết định không thể giải được; `complement of a decision problem` — bài toán bù của bài toán quyết định.

**Register & nuance:** Mô hình chuẩn hóa trong lý thuyết máy tính (Alan Turing); hầu hết các bài toán tối ưu hóa (*optimization problems*) đều có thể chuyển đổi thành bài toán quyết định thông qua việc đặt một ngưỡng giá trị mục tiêu.

**Examples:** `In computational complexity theory, the optimization task of finding the shortest route is recast as a decision problem asking whether a route shorter than length k exists.` → Trong lý thuyết độ phức tạp tính toán, nhiệm vụ tối ưu hóa việc tìm đường đi ngắn nhất được đúc kết lại thành một bài toán quyết định hỏi xem liệu có tồn tại một đường đi ngắn hơn độ dài k hay không.

**Liên kết tiếng Hàn:** `결정 문제` (決定 問題) — bài toán quyết định đúng sai nhị phân.

---

## 9. computational intractability /ˌkɑmpjəˈteɪʃənəl ɪnˌtræktəˈbɪləti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường đứng làm chủ ngữ giải thích rào cản tính toán hoặc tân ngữ sau `encounter`, `circumvent`, `exploit`.

**Core meaning — English:** The property of a mathematical problem for which no efficient algorithm exists, meaning any known exact algorithm requires super-polynomial resources (such as exponential time or memory).

**Core meaning & mental image — Tiếng Việt:** Tính bất khả thi về mặt tính toán; sự nan giải tính toán. Hãy hình dung một chiếc két sắt có hàng tỷ tỷ dãy số kết hợp; dù bạn có gom toàn bộ các siêu máy tính trên thế giới lại để chạy thử từng mã, vũ trụ này có thể sẽ tàn lụi trước khi chiếc máy tính kịp thử hết các khả năng.

**Grammar & collocations:** `face computational intractability` — đối mặt với sự nan giải về mặt tính toán; `exploit computational intractability for cryptography` — khai thác tính nan giải tính toán phục vụ mật mã học; `barrier of computational intractability` — rào cản bất khả thi về mặt tính toán.

**Register & nuance:** Khái niệm cơ sở cho nền mật mã học khóa công khai (*public-key cryptography*); trong khi các nhà tối ưu hóa xem đây là trở ngại lớn, các chuyên gia an ninh mạng lại biến nó thành chiếc khiên bảo vệ dữ liệu.

**Examples:** `Modern encryption schemes like RSA fundamentally rely on the computational intractability of factoring large composite semiprimes within a human lifespan.` → Các cơ chế mã hóa hiện đại như RSA về mặt căn bản dựa vào tính bất khả thi về mặt tính toán của việc phân tích các số bán nguyên tố hợp số khổng lồ trong một vòng đời con người.

**Liên kết tiếng Hàn:** `계산적 난해성` (計算的 難解性) — tính chất nan giải không thể tính toán hiệu quả.

---

## 10. asymptotic upper bound /ˌæsɪmpˈtɑtɪk ˈʌpər baʊnd/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ biểu thị cận trên toán học hoặc tân ngữ sau `establish`, `calculate`, `denote via Big-O`.

**Core meaning — English:** A mathematical function that sets a ceiling on the growth rate of an algorithm's resource consumption (time or memory) as the input size approaches infinity, formally represented by Big-O notation.

**Core meaning & mental image — Tiếng Việt:** Cận trên tiệm cận; giới hạn tăng trưởng tiệm cận trên. Hãy hình dung một mái trần kính nghiêng vô hình bên trên đầu của bạn khi bạn leo núi; dù bước chân bạn có nhanh hay chậm, đỉnh đầu bạn không bao giờ được phép va chạm vượt qua mái trần kính đó khi bạn tiến ra xa vô tận.

**Grammar & collocations:** `derive the asymptotic upper bound` — rút ra cận trên tiệm cận; `tight asymptotic upper bound` — cận trên tiệm cận chặt chẽ; `express as an asymptotic upper bound` — biểu diễn dưới dạng cận trên tiệm cận.

**Register & nuance:** Ngôn ngữ toán học chuẩn mực trong phân tích thuật toán; phân biệt rõ với cận dưới (*asymptotic lower bound - Big-Omega*) và cận chặt chẽ (*tight bound - Big-Theta*).

**Examples:** `The researchers demonstrated that the graph traversal algorithm operates within an asymptotic upper bound of O(V + E), proving its viability on massive social networks.` → Các nhà nghiên cứu đã chứng minh rằng thuật toán duyệt đồ thị vận hành trong cận trên tiệm cận O(V + E), khẳng định tính khả thi của nó trên các mạng xã hội khổng lồ.

**Liên kết tiếng Hàn:** `점근적 상한` (漸近的 上限) — giới hạn trên tiệm cận của độ phức tạp.

---

## 11. hardness reduction /ˈhɑrdnəs rɪˈdʌkʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ chứng minh giới hạn hiệu năng hoặc tân ngữ sau `formulate`, `execute`, `verify`.

**Core meaning — English:** A formal mapping from a known computationally intractable problem to a target problem, proving that the target problem cannot be solved faster than the source problem unless a major complexity breakthrough occurs.

**Core meaning & mental image — Tiếng Việt:** Phép quy giảm độ khó; chứng minh độ khó bài toán qua quy giảm. Hãy hình dung bạn muốn chứng minh rằng việc nhấc một tảng đá bí ẩn là bất khả thi; bạn chế tạo một chiếc ròng rọc nối tảng đá đó với một ngọn núi khổng lồ đã được cả thế giới công nhận là không thể lay chuyển.

**Grammar & collocations:** `establish NP-hardness via hardness reduction` — xác lập tính NP-khó thông qua phép quy giảm độ khó; `hardness reduction from Circuit-SAT` — phép quy giảm độ khó từ bài toán Circuit-SAT; `intricate hardness reduction proof` — chứng minh quy giảm độ khó phức tạp.

**Register & nuance:** Thuật ngữ chuyên ngành cao cấp trong lý thuyết thuật toán; phân biệt giữa việc tìm giải thuật giải quyết bài toán với việc chứng minh bài toán không thể giải quyết hiệu quả (*conditional lower bound*).

**Examples:** `Through an elegant hardness reduction from the 3-dimensional matching problem, the paper showed that optimizing warehouse robotic routes is inherently NP-hard.` → Thông qua một phép quy giảm độ khó tao nhã từ bài toán ghép cặp 3 chiều, bài báo đã chứng minh rằng việc tối ưu hóa đường đi của robot nhà kho vốn dĩ là một bài toán NP-khó.

**Liên kết tiếng Hàn:** `난이도 환원` (難易度 還元) — phép quy giảm chứng minh độ khó của bài toán.

---

## 12. deterministic simulation /dɪˌtɜrməˈnɪstɪk ˌsɪmjəˈleɪʃən/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ trong các định lý chuyển đổi hoặc làm tân ngữ sau `perform`, `require`, `rely on`.

**Core meaning — English:** The emulation of a randomized, nondeterministic, or quantum computational process using a purely deterministic machine, systematically tracking all potential branches or state spaces.

**Core meaning & mental image — Tiếng Việt:** Sự mô phỏng đơn định; quá trình mô phỏng tuần tự xác định. Hãy hình dung một người chơi cờ vua phải ghi chép lại toàn bộ hàng triệu nước cờ phân nhánh khả dĩ trên những cuốn sổ khổng lồ để dự đoán kết quả của một ván cờ, thay vì tung xúc xắc chọn nước đi ngẫu nhiên.

**Grammar & collocations:** `exponential overhead of deterministic simulation` — chi phí hàm mũ của việc mô phỏng đơn định; `perform deterministic simulation of probabilistic Turing machines` — thực hiện việc mô phỏng đơn định các máy Turing xác suất; `efficient deterministic simulation` — mô phỏng đơn định hiệu quả.

**Register & nuance:** Trọng tâm trong các nỗ lực giải quyết câu hỏi liệu ngẫu nhiên hóa có thực sự giúp tính toán nhanh hơn không (*P vs BPP*); nếu tồn tại mô phỏng đơn định đa thức, tính ngẫu nhiên chỉ là một tiện ích chứ không mở rộng sức mạnh tính toán.

**Examples:** `The theoretical dilemma hinges on whether every probabilistic algorithm admits an efficient deterministic simulation without exponential slowdown.` → Thế tiến thoái lưỡng nan lý thuyết xoay quanh việc liệu mọi thuật toán xác suất có cho phép một sự mô phỏng đơn định hiệu quả mà không bị chậm đi theo cấp số nhân hay không.

**Liên kết tiếng Hàn:** `결정론적 모뮬레이션` (決定論的 simulation) — sự mô phỏng đơn định hóa các quy trình tính toán ngẫu nhiên.

---

## 13. probabilistic polynomial-time /ˌprɑbəbəˈlɪstɪk ˌpɑlɪˈnoʊmiəl taɪm/

**Loại từ & vị trí trong câu:** `noun phrase / adjective phrase`. Thường làm thuộc ngữ bổ nghĩa cho thuật toán hoặc danh từ chỉ lớp độ phức tạp (BPP).

**Core meaning — English:** A class of computational algorithms that utilize access to unbiased random bits and run in polynomial time, yielding the correct answer with high probability.

**Core meaning & mental image — Tiếng Việt:** Thời gian đa thức xác suất; thuật toán xác suất thời gian đa thức. Hãy hình dung một chiếc máy tính có gắn thêm một con xúc xắc xúc xắc siêu nhỏ; nó gieo xúc xắc hàng triệu lần mỗi giây để chọn lối đi tắt và đưa ra câu trả lời chính xác tới 99,9999% chỉ sau vài cái chớp mắt.

**Grammar & collocations:** `probabilistic polynomial-time algorithm` — thuật toán thời gian đa thức xác suất; `probabilistic polynomial-time Turing machine` — máy Turing xác suất thời gian đa thức; `bounded-error probabilistic polynomial-time` — thời gian đa thức xác suất với sai số giới hạn (lớp BPP).

**Register & nuance:** Định nghĩa hình thức của lớp độ phức tạp BPP (Bounded-error Probabilistic Polynomial-time); được nhiều nhà khoa học máy tính coi là mô hình thực tế nhất cho những gì có thể tính toán hiệu quả trong thế giới thực.

**Examples:** `Cryptographic protocols require that adversary models be constrained to probabilistic polynomial-time algorithms, ensuring encryption cannot be cracked through sheer brute force.` → Các giao thức mật mã học yêu cầu các mô hình kẻ tấn công phải bị giới hạn trong các thuật toán thời gian đa thức xác suất, bảo đảm việc mã hóa không thể bị bẻ khóa bằng brute-force thông thường.

**Liên kết tiếng Hàn:** `확률적 다항 시간` (確率的 多項 時間) — thời gian đa thức mang tính xác suất.

---

## 14. randomized rounding /ˈrændəmaɪzd ˈraʊndɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường đứng làm tân ngữ sau `apply`, `utilize`, `pioneer` hoặc làm chủ ngữ mô tả kỹ thuật giải xấp xỉ.

**Core meaning — English:** A powerful algorithmic technique that solves a continuous linear programming relaxation of an integer problem and treats the fractional variables as probabilities for rounding to integers.

**Core meaning & mental image — Tiếng Việt:** Kỹ thuật làm tròn ngẫu nhiên; làm tròn xác suất từ nghiệm thực sang nghiệm nguyên. Hãy hình dung bạn giải ra kết quả phân bổ một chiếc xe buýt là 0,8 chiếc cho tuyến phố A; thay vì làm tròn thô bạo lên 1, bạn quay một chiếc vòng quay may mắn với 80% cung màu xanh để quyết định có điều hẳn 1 chiếc xe buýt đến đó hay không.

**Grammar & collocations:** `apply randomized rounding to fractional relaxations` — áp dụng kỹ thuật làm tròn ngẫu nhiên cho các nghiệm nới lỏng phân số; `provable bounds via randomized rounding` — các cận chứng minh được thông qua làm tròn ngẫu nhiên; `randomized rounding with Chernoff bounds` — làm tròn ngẫu nhiên kết hợp với bất đẳng thức Chernoff.

**Register & nuance:** Thuật ngữ sáng tạo do Raghavan và Tompson phát minh năm 1987; là trụ cột trong thiết kế thuật toán xấp xỉ hiện đại cho các bài toán tối ưu tổ hợp NP-khó như bài toán phủ tập hợp (*set cover*).

**Examples:** `By applying randomized rounding to the linear program's fractional solution, the engineers obtained an integer schedule with provably near-optimal throughput.` → Bằng cách áp dụng kỹ thuật làm tròn ngẫu nhiên vào nghiệm phân số của bài toán quy hoạch tuyến tính, các kỹ sư đã thu được một lịch trình nghiệm nguyên có thông lượng gần như tối ưu đã được chứng minh.

**Liên kết tiếng Hàn:** `무작위 반올림` (無作爲 반올림) / `확률적 정수화` — kỹ thuật làm tròn ngẫu nhiên hóa các biến số liên tục.

---

## 15. amortized analysis /ˈæmərˌtaɪzd əˈnæləsɪs/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ phân tích chi phí hoặc làm tân ngữ sau `conduct`, `rely on`, `demonstrate through`.

**Core meaning — English:** A method of analyzing algorithm performance that averages the running time of a sequence of operations over all operations performed, showing that an occasional expensive operation does not prevent a low average cost.

**Core meaning & mental image — Tiếng Việt:** Phân tích chi phí bù trừ; phân tích thời gian khấu hao. Hãy hình dung một chiếc hồ bơi lớn; mỗi ngày bạn chỉ mất vài giây nhặt rác lá cây (thao tác rẻ), nhưng cứ sau ba tháng bạn phải tốn một ngày xả cạn nước để cọ rửa đáy hồ (thao tác đắt); nếu chia đều tổng công sức cho 365 ngày thì mỗi ngày công việc dọn hồ vẫn là cực kỳ nhẹ nhàng.

**Grammar & collocations:** `perform an amortized analysis` — thực hiện phân tích chi phí bù trừ; `amortized analysis using the potential method` — phân tích bù trừ bằng phương pháp hàm thế năng; `amortized analysis guarantees constant time` — phân tích khấu hao bảo đảm thời gian hằng số O(1).

**Register & nuance:** Trọng tâm trong việc đánh giá cấu trúc dữ liệu động (như mảng động *dynamic array resizing* hoặc cây *splay tree*); khác với phân tích thời gian trường hợp trung bình (*average-case analysis*) vì không giả định bất kỳ phân phối xác suất nào của đầu vào.

**Examples:** `Through amortized analysis, computer scientists proved that inserting elements into an expanding dynamic array requires an average of O(1) time per append.` → Thông qua phân tích chi phí bù trừ, các nhà khoa học máy tính đã chứng minh rằng việc chèn các phần tử vào một mảng động mở rộng chỉ đòi hỏi trung bình thời gian O(1) cho mỗi lần thêm vào cuối.

**Liên kết tiếng Hàn:** `분할 상환 분석` (分割 償還 分析) — phân tích chi phí khấu hao bù trừ qua chuỗi thao tác.

---

## 16. derandomization /diˌrændəmaɪˈzeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun`. Thường làm chủ ngữ trong lý thuyết thuật toán hoặc làm tân ngữ sau `achieve`, `explore`, `prove via`.

**Core meaning — English:** The mathematical process of converting a randomized algorithm into an equally efficient deterministic algorithm without degrading its performance or accuracy guarantees.

**Core meaning & mental image — Tiếng Việt:** Khử tính ngẫu nhiên; chuyển đổi giải thuật ngẫu nhiên sang đơn định. Hãy hình dung một nhà ảo thuật rút ngẫu nhiên những lá bài may rủi từ hộp kín; sau đó một nhà toán học bước tới, giải mã trật tự sắp xếp của bộ bài và viết ra một công thức chính xác giúp rút trúng quân Át mỗi lần mà không cần dựa vào vận may nữa.

**Grammar & collocations:** `achieve full derandomization` — đạt được sự khử tính ngẫu nhiên hoàn toàn; `conditional derandomization based on circuit lower bounds` — khử ngẫu nhiên có điều kiện dựa trên cận dưới mạch tính toán; `derandomization of the Miller-Rabin test` — khử ngẫu nhiên hóa thuật toán kiểm tra Miller-Rabin.

**Register & nuance:** Lĩnh vực nghiên cứu sâu sắc kết nối lý thuyết độ phức tạp với hàm sinh số giả ngẫu nhiên (*pseudorandom generators*); nghiên cứu xem liệu giả thuyết P = BPP có đúng hay không.

**Examples:** `Theoretical computer scientists achieved derandomization for the max-cut approximation algorithm using the method of conditional expectations.` → Các nhà khoa học máy tính lý thuyết đã đạt được sự khử tính ngẫu nhiên cho thuật toán xấp xỉ lát cắt cực đại bằng cách sử dụng phương pháp kỳ vọng có điều kiện.

**Liên kết tiếng Hàn:** `탈무작위화` (脫無作爲化) — quá trình loại bỏ yếu tố ngẫu nhiên trong giải thuật.

---

## 17. interactive proof system /ˌɪntərˈæktɪv pruːf ˈsɪstəm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường viết tắt là IPS hoặc lớp IP, làm chủ ngữ mở rộng định lý hoặc tân ngữ sau `design`, `interrogate`.

**Core meaning — English:** An abstract computational model where a computationally bounded verifier exchanges randomized messages with an all-powerful prover to establish the validity of a mathematical assertion.

**Core meaning & mental image — Tiếng Việt:** Hệ thống chứng minh tương tác; mô hình kiểm chứng qua đối thoại. Hãy hình dung một viên thanh tra đặt hàng chục câu hỏi bất ngờ và hóc búa cho một nghi phạm tự xưng là thiên tài; dù nghi phạm có ma mãnh đến đâu, nếu hắn nói dối, các câu hỏi tương tác ngẫu nhiên của thanh tra sẽ lập tức phát hiện ra sơ hở.

**Grammar & collocations:** `class of languages decided by an interactive proof system` — lớp ngôn ngữ được quyết định bởi hệ thống chứng minh tương tác; `interactive proof system protocol` — giao thức của hệ thống chứng minh tương tác; `the IP equals PSPACE theorem for interactive proof systems` — định lý IP bằng PSPACE cho các hệ thống chứng minh tương tác.

**Register & nuance:** Khái niệm đột phá của Goldwasser, Micali và Rackoff (1985); thay đổi vĩnh viễn định nghĩa cổ điển về "chứng minh toán học" từ một văn bản tĩnh sang một cuộc đối thoại tương tác xác suất.

**Examples:** `The breakthrough theorem asserting IP equals PSPACE demonstrated the unexpected power of an interactive proof system to verify complex combinatorial games.` → Định lý đột phá khẳng định IP bằng PSPACE đã chứng minh sức mạnh bất ngờ của một hệ thống chứng minh tương tác trong việc kiểm chứng các trò chơi tổ hợp phức tạp.

**Liên kết tiếng Hàn:** `대화형 증명 시스템` (對話型 證明 system) — hệ thống chứng minh qua đối thoại tương tác xác suất.

---

## 18. certificate verification /sərˈtɪfəkət ˌvɛrəfəˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ xác định lớp NP hoặc làm tân ngữ sau `accelerate`, `streamline`, `perform`.

**Core meaning — English:** The algorithmic process of checking whether a concise mathematical witness (certificate) correctly validates an input instance as belonging to a specific formal language in polynomial time.

**Core meaning & mental image — Tiếng Việt:** Quy trình xác minh chứng chỉ; kiểm tra nhân chứng giải thuật. Hãy hình dung việc tìm ra lối thoát khỏi một mê cung khổng lồ mất cả tuần trời; nhưng nếu ai đó đưa cho bạn một sợi chỉ dẫn đường từ đầu đến cuối (chứng chỉ), bạn chỉ mất mười phút đi theo sợi chỉ để kiểm tra xem lối thoát đó có đúng hay không.

**Grammar & collocations:** `polynomial-time certificate verification` — xác minh chứng chỉ trong thời gian đa thức; `certificate verification algorithm` — thuật toán kiểm tra chứng chỉ; `streamline certificate verification` — tinh gọn hóa quy trình xác minh chứng chỉ.

**Register & nuance:** Bản chất định nghĩa của lớp NP; một bài toán thuộc NP nếu và chỉ nếu nó có cơ chế xác minh chứng chỉ chạy trong thời gian đa thức bởi một máy Turing đơn định.

**Examples:** `While solving the Hamiltonian path problem requires exponential search, certificate verification merely takes linear time by checking that the proposed sequence visits every vertex once.` → Trong khi việc tìm đường đi Hamilton đòi hỏi việc tìm kiếm hàm mũ, việc xác minh chứng chỉ chỉ mất thời gian tuyến tính bằng cách kiểm tra xem chuỗi đề xuất có đi qua mỗi đỉnh đúng một lần hay không.

**Liên kết tiếng Hàn:** `증명서 검증` (證明書 檢證) / `인증값 검증` — quy trình thẩm định tính hợp lệ của chứng chỉ giải thuật.

---

## 19. oracle machine /ˈɔrəkəl məˈʃin/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ trong các chứng minh tương đối hóa hoặc tân ngữ sau `query`, `equip with`, `model as`.

**Core meaning — English:** A theoretical Turing machine connected to a black-box subroutine ("oracle") capable of solving a designated computational problem in a single operational step, used to study relative complexity.

**Core meaning & mental image — Tiếng Việt:** Máy Turing có hộp tiên tri; máy tính truy vấn hộp đen. Hãy hình dung một nhà nghiên cứu sở hữu một chiếc máy điện thoại kết nối thẳng với thần thánh; mỗi khi gặp một bài toán hóc búa, ông chỉ cần nhấc máy bấm một phím và đầu dây bên kia lập tức trả lời "Đúng" hoặc "Sai" mà không tốn một giây suy nghĩ.

**Grammar & collocations:** `query the oracle machine` — truy vấn máy tiên tri; `Turing reductions with an oracle machine` — các phép quy giảm Turing sử dụng máy tiên tri; `relativized complexity classes via an oracle machine` — các lớp độ phức tạp tương đối hóa thông qua máy tiên tri.

**Register & nuance:** Khái niệm do Alan Turing đưa ra năm 1938; công cụ thiết yếu để xây dựng hệ thống phân cấp độ phức tạp (*polynomial hierarchy*) và chứng minh các rào cản tương đối hóa (*relativization barriers*).

**Examples:** `The Baker-Gill-Solovay theorem utilized an oracle machine to prove that classical diagonalization techniques cannot resolve whether P equals NP.` → Định lý Baker-Gill-Solovay đã sử dụng một máy Turing có hộp tiên tri để chứng minh rằng các kỹ thuật chéo hóa cổ điển không thể giải quyết được câu hỏi liệu P có bằng NP hay không.

**Liên kết tiếng Hàn:** `오라클 기계` (oracle 機械) — mô hình máy Turing gắn hộp đen tiên tri giải toán tức thời.

---

## 20. approximation guarantee /əˌprɑksəˈmeɪʃən ˌɡærənˈtiː/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `provide`, `establish`, `improve` hoặc làm chủ ngữ xác định chất lượng thuật toán.

**Core meaning — English:** A rigorous mathematical theorem ensuring that the objective value produced by an algorithm will not deviate from the optimal value by more than a specified multiplicative or additive factor.

**Core meaning & mental image — Tiếng Việt:** Bảo đảm xấp xỉ; sự cam kết giới hạn sai số giải thuật. Hãy hình dung một bản hợp đồng bảo hiểm xây dựng; nhà thầu cam kết bằng văn bản có đóng dấu đỏ rằng chi phí phát sinh thực tế khi hoàn thiện công trình sẽ không bao giờ vượt quá 10% so với dự toán ban đầu.

**Grammar & collocations:** `provide a provable approximation guarantee` — cung cấp một sự bảo đảm xấp xỉ có thể chứng minh được; `tighten the approximation guarantee` — thắt chặt giới hạn bảo đảm xấp xỉ; `approximation guarantee for metric TSP` — sự cam kết xấp xỉ cho bài toán người bán hàng metric.

**Register & nuance:** Tiêu chuẩn bắt buộc đối với một thuật toán xấp xỉ lý thuyết (*theoretical approximation algorithm*); phân biệt nó với các phương pháp heuristic thuần túy vốn chạy nhanh nhưng không có bất kỳ cam kết toán học nào về chất lượng nghiệm.

**Examples:** `The greedy heuristic was upgraded to a formal approximation algorithm that provides a rigorous approximation guarantee of within two times the optimal vertex cover size.` → Phương pháp heuristic tham lam đã được nâng cấp thành một thuật toán xấp xỉ chính thức cung cấp một sự bảo đảm xấp xỉ nghiêm ngặt trong phạm vi không quá hai lần kích thước phủ đỉnh tối ưu.

**Liên kết tiếng Hàn:** `근사 보증` (近似 保證) — cam kết toán học về giới hạn sai số xấp xỉ.

---

## 21. worst-case complexity /wɜrst keɪs kəmˈplɛksəti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ đánh giá độ an toàn hoặc làm tân ngữ sau `analyze`, `mitigate`, `upper-bound`.

**Core meaning — English:** The maximum amount of computational resources (time, memory, or communication) consumed by an algorithm over all possible inputs of a given size n.

**Core meaning & mental image — Tiếng Việt:** Độ phức tạp trường hợp xấu nhất; chi phí tài nguyên kịch trần. Hãy hình dung một chiếc cầu treo được thiết kế chịu lực; các kỹ sư tính toán tải trọng dựa trên kịch bản hàng trăm chiếc xe tải chở đá nặng nhất cùng phanh gấp trên cầu giữa một trận cuồng phong bão cấp 12.

**Grammar & collocations:** `evaluate worst-case complexity` — đánh giá độ phức tạp trường hợp xấu nhất; `quadratic worst-case complexity` — độ phức tạp trường hợp xấu nhất bậc hai O(n²); `worst-case complexity analysis` — phân tích độ phức tạp trường hợp xấu nhất.

**Register & nuance:** Tiêu chuẩn đánh giá an toàn truyền thống và nghiêm ngặt nhất trong khoa học máy tính; đối lập với độ phức tạp trường hợp trung bình (*average-case complexity*) hay trường hợp tốt nhất (*best-case complexity*).

**Examples:** `Although quicksort boasts fast performance in practice, its worst-case complexity degenerates to O(n²) when the input array is already sorted and bad pivots are chosen.` → Mặc dù sắp xếp nhanh tự hào có hiệu năng thực tế nhanh, nhưng độ phức tạp trường hợp xấu nhất của nó bị suy biến thành O(n²) khi mảng đầu vào đã được sắp xếp sẵn và các phần tử chốt tồi được chọn.

**Liên kết tiếng Hàn:** `최악의 경우 복잡도` (最惡의 境遇 複雜度) — độ phức tạp trong kịch bản xấu nhất.

---

## 22. bounded-error probability /ˈbaʊndɪd ˈɛrər ˌprɑbəˈbɪləti/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ kiểm soát rủi ro tính toán hoặc tân ngữ sau `achieve`, `guarantee`, `reduce via repetition`.

**Core meaning — English:** A property of randomized decision algorithms ensuring that the probability of producing an incorrect classification is strictly less than a fixed constant below one-half (such as 1/3), allowing exponential reduction through repetition.

**Core meaning & mental image — Tiếng Việt:** Xác suất sai số có chặn; tỷ lệ lỗi bị chặn dưới ngưỡng an toàn. Hãy hình dung một thiết bị phát hiện khói báo cháy có tỷ lệ trục trặc luôn nhỏ hơn 10%; bằng cách gắn ba chiếc máy độc lập cùng nhau, xác suất để cả ba chiếc cùng báo sai sẽ lập tức giảm xuống chỉ còn một phần nghìn.

**Grammar & collocations:** `ensure bounded-error probability` — bảo đảm xác suất sai số có chặn; `algorithms with bounded-error probability` — các thuật toán với xác suất sai số có chặn; `amplify bounded-error probability via majority voting` — khuếch đại xác suất thành công từ ngưỡng lỗi có chặn thông qua bỏ phiếu đa số.

**Register & nuance:** Khái niệm cốt tử định hình lớp phức tạp BPP; sự tồn tại của chặn sai số cố định (nhỏ hơn 1/2) cho phép kỹ thuật khuếch đại xác suất (*probability amplification*) ép sai số về gần số không một cách nhanh chóng.

**Examples:** `Because the randomized testing routine exhibits a bounded-error probability of at most one-third, repeating the trial twenty times reduced the odds of a false positive to less than one in a million.` → Bởi vì quy trình kiểm tra ngẫu nhiên hóa thể hiện xác suất sai số có chặn tối đa là một phần ba, việc lặp lại phép thử hai mươi lần đã làm giảm tỷ lệ dương tính giả xuống dưới một phần triệu.

**Liên kết tiếng Hàn:** `유계 오차 확률` (有界 誤差 確率) — xác suất sai số bị giới hạn dưới ngưỡng nhất định.

---

## 23. space complexity class /speɪs kəmˈplɛksəti klæs/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ phân loại bài toán bộ nhớ hoặc tân ngữ sau `belong to`, `characterize`, `investigate`.

**Core meaning — English:** A formal grouping of decision problems defined by the maximum amount of computer memory or tape storage an algorithm requires to run as a function of the input length.

**Core meaning & mental image — Tiếng Việt:** Lớp độ phức tạp không gian bộ nhớ. Hãy hình dung các loại xe chở hàng; lớp "xe máy" chỉ được chở chiếc balo nhỏ (bộ nhớ logarit L), lớp "xe tải" được chở một thùng container (bộ nhớ đa thức PSPACE), và mỗi bài toán được xếp vào loại xe tương ứng với lượng hàng nó cần mang.

**Grammar & collocations:** `belong to the space complexity class PSPACE` — thuộc về lớp độ phức tạp không gian PSPACE; `logarithmic space complexity class` — lớp độ phức tạp không gian logarit; `separation of space complexity classes` — sự phân tách giữa các lớp độ phức tạp không gian.

**Register & nuance:** Phân biệt với độ phức tạp thời gian (*time complexity class*); theo định lý Savitch, sự khác biệt giữa đơn định và không đơn định trong không gian bộ nhớ hẹp hơn rất nhiều so với thời gian.

**Examples:** `The game of generalized geography is complete for the space complexity class PSPACE, meaning it demands polynomial memory regardless of how long the verification takes.` → Trò chơi địa lý tổng quát hóa là bài toán đầy đủ cho lớp độ phức tạp không gian PSPACE, có nghĩa là nó đòi hỏi bộ nhớ đa thức bất kể việc kiểm chứng kéo dài bao lâu.

**Liên kết tiếng Hàn:** `공간 복잡도 계열` (空間 複雜度 系列) — lớp độ phức tạp theo dung lượng bộ nhớ.

---

## 24. heuristic optimization /hjuˈrɪstɪk ˌɑptəməˈzeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ giải quyết bài toán quy mô lớn hoặc tân ngữ sau `deploy`, `tune`, `favor over exact solvers`.

**Core meaning — English:** Practical problem-solving methodologies—such as genetic algorithms, simulated annealing, and tabu search—designed to discover high-quality solutions to intractable problems swiftly, without formal guarantees of mathematical optimality.

**Core meaning & mental image — Tiếng Việt:** Tối ưu hóa phỏng đoán; phương pháp tối ưu hóa kinh nghiệm thực dụng. Hãy hình dung bạn đi lạc trong một khu rừng rậm phủ sương mù dày đặc và muốn tìm đỉnh đồi cao nhất; bạn chỉ cần áp dụng một mẹo đơn giản: bước chân cứ cảm thấy đất dốc lên là bước tiếp, không cần phải vẽ lại bản đồ toàn diện của cả khu rừng.

**Grammar & collocations:** `deploy heuristic optimization for supply chain routing` — triển khai tối ưu hóa phỏng đoán cho việc định tuyến chuỗi cung ứng; `hybrid heuristic optimization algorithms` — các thuật toán tối ưu hóa phỏng đoán lai ghép; `limits of heuristic optimization` — những giới hạn của tối ưu hóa kinh nghiệm.

**Register & nuance:** Ứng dụng phổ biến trong kỹ thuật phần mềm công nghiệp; chấp nhận từ bỏ bằng chứng toán học nghiêm ngặt để đổi lấy tốc độ và khả năng xử lý các dữ liệu khổng lồ trong thế giới thực.

**Examples:** `When confronted with a million-variable logistics bottleneck, the data engineering team turned to heuristic optimization, achieving workable schedules in seconds.` → Khi đối mặt với nút thắt hậu cần cả triệu biến số, đội ngũ kỹ thuật dữ liệu đã chuyển sang phương pháp tối ưu hóa phỏng đoán, đạt được các lịch trình khả thi chỉ trong vài giây.

**Liên kết tiếng Hàn:** `휴리스틱 최적화` (heuristic 最適化) — tối ưu hóa theo phương pháp phỏng đoán kinh nghiệm thực tế.

---

## 25. zero-knowledge protocol /ˈzɪroʊ ˈnɑlɪdʒ ˈproʊtəˌkɑl/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ bảo vệ tính riêng tư mật mã hoặc tân ngữ sau `implement`, `verify`, `construct`.

**Core meaning — English:** A cryptographic method allowing one party (the prover) to mathematically convince another party (the verifier) that a given statement is true without conveying any collateral information beyond the statement's validity.

**Core meaning & mental image — Tiếng Việt:** Giao thức không tiết lộ tri thức; xác thực không tiết lộ bí mật. Hãy hình dung bạn biết mật mã mở cánh cửa thần bí trong một hang động hình tròn; bạn chứng minh cho người bạn đứng ngoài cửa hang thấy bạn bước vào từ cửa trái và đi ra từ cửa phải một cách dễ dàng mà không bao giờ cần nói ra mật mã bí mật đó là gì.

**Grammar & collocations:** `deploy a non-interactive zero-knowledge protocol` — triển khai một giao thức không tiết lộ tri thức phi tương tác (zk-SNARK); `soundness of a zero-knowledge protocol` — tính đúng đắn của một giao thức không tiết lộ tri thức; `zero-knowledge protocol for anonymous transactions` — giao thức không tiết lộ tri thức cho các giao dịch ẩn danh.

**Register & nuance:** Đỉnh cao của lý thuyết mật mã hiện đại; là nền tảng cốt lõi của các hệ thống bảo vệ quyền riêng tư trên Web3, tiền kỹ thuật số và kiểm thực danh tính bảo mật cao.

**Examples:** `The digital identity platform leveraged a zero-knowledge protocol, enabling users to prove they were over twenty-one years old without disclosing their actual birthdates or names.` → Nền tảng định danh kỹ thuật số đã tận dụng giao thức không tiết lộ tri thức, cho phép người dùng chứng minh họ đã trên hai mươi mốt tuổi mà không cần tiết lộ ngày sinh thực tế hay tên tuổi của mình.

**Liên kết tiếng Hàn:** `영지식 프로토콜` (零知識 protocol) — giao thức chứng minh không tiết lộ thông tin bí mật.

---

## Review in context (Part 1: Complexity Classes, Hardness & Automata)

In theoretical computer science, mapping the boundaries of tractability begins with the concept of a **polynomial-time reduction**, which allows researchers to transform an unsolved query into an established problem. When a problem satisfies the rigorous criteria of **NP-completeness**, it represents the hardest challenges within the non-deterministic class, meaning an efficient exact solution would trigger an unprecedented collapse of computational hierarchies. Underpinning these complexity definitions is the abstract model of the **nondeterministic automaton**, which conceptually branches across infinite parallel computations to evaluate validity. When exact polynomial algorithms prove unattainable, algorithm designers pivot toward measuring the **worst-case approximation ratio**, establishing mathematical ceilings on how far an approximation can stray from optimality. To tackle difficult problems in practice, engineers often employ a **Monte Carlo algorithm**, which runs within a strictly fixed time budget while accepting a minuscule, bounded risk of calculation error. Conversely, when absolute correctness is mandatory, researchers turn to a **Las Vegas algorithm**, ensuring completely accurate outputs at the expense of an unpredictable, randomized runtime. For massive data streams exceeding memory limits, computer scientists develop **sublinear-time verification** schemes that evaluate dataset properties by sampling only tiny fractions of the input. Every theoretical classification begins by expressing a computational objective as a formal **decision problem**, translating optimization challenges into clean yes-or-no inquiries. Encountering **computational intractability** forces developers to abandon brute-force approaches in favor of structured approximations. By establishing a rigorous **asymptotic upper bound** using Big-O notation, analysts guarantee that an algorithm's resource consumption remains bounded as datasets scale toward infinity. To prove that a new task cannot be conquered in polynomial time, theoreticians construct an intricate **hardness reduction** from a known NP-complete baseline. Finally, evaluating whether randomized efficiency can be duplicated without coin flips requires a meticulous **deterministic simulation**, bridging the gap between theoretical randomness and classical hardware.

**Bản dịch tiếng Việt:**
Trong khoa học máy tính lý thuyết, việc vẽ bản đồ các ranh giới của tính khả thi tính toán bắt đầu bằng khái niệm phép quy giảm đa thức (**polynomial-time reduction**), cho phép các nhà nghiên cứu biến đổi một truy vấn chưa có lời giải thành một bài toán đã được xác lập. Khi một bài toán thỏa mãn các tiêu chí khắt khe của tính NP-đầy đủ (**NP-completeness**), nó đại diện cho những thách thức khó khăn nhất bên trong lớp không đơn định, đồng nghĩa với việc một giải thuật giải chính xác hiệu quả sẽ kích hoạt một sự sụp đổ chưa từng có của các hệ thống phân cấp tính toán. Làm nền móng cho các định nghĩa độ phức tạp này là mô hình trừu tượng của ô-tô-mát không đơn định (**nondeterministic automaton**), vốn phân nhánh qua các tính toán song song vô hạn trên mặt khái niệm để đánh giá tính hợp lệ. Khi các thuật toán đa thức chính xác tỏ ra không thể đạt được, các nhà thiết kế thuật toán chuyển hướng sang việc đo đạc tỷ số xấp xỉ trường hợp xấu nhất (**worst-case approximation ratio**), thiết lập các giới hạn toán học kịch trần về mức độ mà một nghiệm xấp xỉ có thể chệch khỏi điểm tối ưu. Để giải quyết các bài toán khó khăn trong thực tế, các kỹ sư thường sử dụng một thuật toán Monte Carlo (**Monte Carlo algorithm**), vốn vận hành trong một ngân sách thời gian cố định nghiêm ngặt trong khi chấp nhận một rủi ro sai số tính toán nhỏ bé và có giới hạn. Ngược lại, khi tính chính xác tuyệt đối là bắt buộc, các nhà nghiên cứu chuyển sang thuật toán Las Vegas (**Las Vegas algorithm**), bảo đảm các đầu ra hoàn toàn chuẩn xác với sự đánh đổi là thời gian chạy ngẫu nhiên hóa và không thể dự đoán trước. Đối với các luồng dữ liệu khổng lồ vượt quá giới hạn bộ nhớ, các nhà khoa học máy tính phát triển các cơ chế xác minh trong thời gian dưới tuyến tính (**sublinear-time verification**) nhằm đánh giá các đặc tính của tập dữ liệu bằng cách chỉ lấy mẫu các phân số cực nhỏ của đầu vào. Mọi sự phân loại lý thuyết đều bắt đầu bằng việc diễn đạt một mục tiêu tính toán dưới dạng một bài toán quyết định (**decision problem**) chính thức, chuyển đổi các thách thức tối ưu hóa thành các câu hỏi Có/Không rành mạch. Việc đối mặt với sự nan giải tính toán (**computational intractability**) buộc các lập trình viên phải từ bỏ các phương pháp duyệt cạn để chuyển sang các phép xấp xỉ có cấu trúc. Bằng cách thiết lập một cận trên tiệm cận (**asymptotic upper bound**) nghiêm ngặt thông qua ký hiệu Big-O, các nhà phân tích bảo đảm rằng mức tiêu thụ tài nguyên của một thuật toán luôn bị chặn lại khi các tập dữ liệu mở rộng tiến tới vô cùng. Để chứng minh rằng một tác vụ mới không thể bị chinh phục trong thời gian đa thức, các nhà lý thuyết xây dựng một phép quy giảm độ khó (**hardness reduction**) phức tạp từ một đường cơ sở NP-đầy đủ đã biết. Cuối cùng, việc đánh giá liệu hiệu năng ngẫu nhiên hóa có thể được tái tạo mà không cần tung đồng xu hay không đòi hỏi một sự mô phỏng đơn định (**deterministic simulation**) tỉ mỉ, bắc nhịp cầu nối giữa tính ngẫu nhiên lý thuyết và phần cứng cổ điển.

---

## Review in context (Part 2: Randomized Algorithms, Bounds & Proof Systems)

In modern algorithm design, efficiency is frequently redefined through **probabilistic polynomial-time** models, where computers harness coin flips to solve combinatorial bottlenecks with exceptional speed. When converting fractional solutions into discrete configurations, theorists apply **randomized rounding**, treating continuous variables as probabilities to generate valid integer solutions without catastrophic loss of quality. To evaluate multi-stage operations that alternate between cheap insertions and expensive restructuring, engineers depend on **amortized analysis**, proving that average costs remain exceptionally low across complete sequences. The ultimate goal in complexity theory remains full **derandomization**, seeking algorithmic methods that replace random bit generators with deterministic formulas without sacrificing runtime. In advanced cryptography, verifying complex computations is often delegated to an **interactive proof system**, where an unconstrained prover convinces a skeptical verifier through randomized rounds of interrogation. At the core of the class NP lies **certificate verification**, an efficient procedure that verifies a proposed solution in polynomial time. To explore theoretical limits beyond standard computation, logicians postulate an **oracle machine**, granting access to an instantaneous black-box solver to analyze relativized complexity classes. When deploying approximation routines in high-stakes logistics, managers demand a mathematically certified **approximation guarantee**, ensuring that output schedules will never perform worse than a fixed factor of the optimum. Rigorous system design requires understanding **worst-case complexity**, guaranteeing that extreme inputs cannot trigger system crashes or memory exhaustion. By establishing a **bounded-error probability**, probabilistic protocols ensure that repeating an algorithm reduces error rates exponentially toward zero. Memory-constrained devices are fundamentally categorized under an appropriate **space complexity class**, dictating how physical storage scales with input size. In real-world enterprise scheduling where provable bounds are unavailable, engineers embrace **heuristic optimization**, using genetic algorithms to rapidly identify workable schedules. Finally, privacy-preserving blockchain systems achieve confidential identity authentication by deploying a **zero-knowledge protocol**, enabling parties to establish mathematical truth without disclosing any underlying secrets.

**Bản dịch tiếng Việt:**
Trong thiết kế thuật toán hiện đại, tính hiệu quả thường được định nghĩa lại thông qua các mô hình thời gian đa thức xác suất (**probabilistic polynomial-time**), nơi các máy tính khai thác các phép tung đồng xu để giải quyết các nút thắt tổ hợp với tốc độ vượt trội. Khi chuyển đổi các nghiệm phân số thành các cấu hình rời rạc, các nhà lý thuyết áp dụng kỹ thuật làm tròn ngẫu nhiên (**randomized rounding**), coi các biến liên tục như các xác suất để tạo ra các nghiệm nguyên hợp lệ mà không làm suy giảm chất lượng thảm hại. Để đánh giá các thao tác đa giai đoạn xen kẽ giữa các phép chèn rẻ tiền và tái cấu trúc đắt đỏ, các kỹ sư phụ thuộc vào phân tích chi phí bù trừ (**amortized analysis**), chứng minh rằng chi phí trung bình vẫn cực kỳ thấp trên toàn bộ các chuỗi thao tác hoàn chỉnh. Mục tiêu tối thượng trong lý thuyết độ phức tạp vẫn là sự khử tính ngẫu nhiên (**derandomization**) hoàn toàn, tìm kiếm các phương pháp giải thuật thay thế các bộ sinh bit ngẫu nhiên bằng các công thức đơn định mà không phải hy sinh thời gian chạy. Trong mật mã học tiên tiến, việc kiểm chứng các phép tính phức tạp thường được giao phó cho một hệ thống chứng minh tương tác (**interactive proof system**), nơi một bên chứng minh không bị giới hạn thuyết phục một bên xác minh đa nghi thông qua các vòng thẩm vấn ngẫu nhiên hóa. Nằm ở trung tâm của lớp NP là quy trình xác minh chứng chỉ (**certificate verification**), một quy trình hiệu quả giúp kiểm tra một nghiệm đề xuất trong thời gian đa thức. Để khám phá các giới hạn lý thuyết vượt ra ngoài khả năng tính toán tiêu chuẩn, các nhà logic học giả định một máy Turing có hộp tiên tri (**oracle machine**), cấp quyền truy cập vào một bộ giải hộp đen tức thời để phân tích các lớp độ phức tạp tương đối hóa. Khi triển khai các quy trình xấp xỉ trong các hoạt động hậu cần có độ rủi ro cao, các nhà quản lý đòi hỏi một sự bảo đảm xấp xỉ (**approximation guarantee**) được chứng nhận bằng toán học, bảo đảm rằng các lịch trình đầu ra sẽ không bao giờ hoạt động kém hơn một hệ số cố định so với điểm tối ưu. Thiết kế hệ thống nghiêm ngặt đòi hỏi phải hiểu rõ độ phức tạp trường hợp xấu nhất (**worst-case complexity**), bảo đảm rằng các đầu vào cực đoan không thể kích hoạt sự sụp đổ hệ thống hoặc cạn kiệt bộ nhớ. Bằng cách thiết lập một xác suất sai số có chặn (**bounded-error probability**), các giao thức xác suất bảo đảm rằng việc lặp lại một thuật toán sẽ làm giảm tỷ lệ lỗi theo cấp số nhân về gần bằng không. Các thiết bị bị hạn chế bộ nhớ về căn bản được phân loại theo một lớp độ phức tạp không gian bộ nhớ (**space complexity class**) thích hợp, quy định dung lượng lưu trữ vật lý sẽ mở rộng như thế nào theo kích thước đầu vào. Trong việc lập lịch doanh nghiệp thực tế nơi các cận chứng minh được không có sẵn, các kỹ sư đón nhận phương pháp tối ưu hóa phỏng đoán (**heuristic optimization**), sử dụng các thuật toán di truyền để nhanh chóng xác định các lịch trình khả thi. Cuối cùng, các hệ thống chuỗi khối bảo vệ quyền riêng tư đạt được sự xác thực danh tính bảo mật bằng cách triển khai một giao thức không tiết lộ tri thức (**zero-knowledge protocol**), cho phép các bên xác lập chân lý toán học mà không cần tiết lộ bất kỳ bí mật cơ sở nào.
