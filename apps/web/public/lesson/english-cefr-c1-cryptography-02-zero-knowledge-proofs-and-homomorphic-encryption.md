# C1 Vocabulary 02 — Zero-knowledge proofs, post-quantum cryptography, and homomorphic encryption

Bài học C1 này đi sâu vào các cấu trúc mật mã học tiên tiến bảo vệ quyền riêng tư và an ninh điện toán thế hệ mới: giao thức chứng minh không tiết lộ tri thức (zk-SNARKs), cơ chế cam kết đa thức, tính toán trực tiếp trên bản mã thông qua mã hóa đồng hình (homomorphic encryption), và kiến trúc mật mã hậu lượng tử dựa trên lưới (lattice-based cryptography) nhằm duy trì khả năng chống giải mã trước sức mạnh của máy tính lượng tử.

---

## 1. zk-SNARK verification /ˌziːkeɪ ˈsnɑːrk ˌvɛrəfəˈkeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ chỉ quá trình xác thực toán học hoặc làm tân ngữ sau `execute`, `streamline`, `rely on`.

**Core meaning — English:** The mathematical process of validating a zero-knowledge succinct non-interactive argument of knowledge, allowing one party to verify that a statement is true in milliseconds without learning any private computational inputs.

**Core meaning & mental image — Tiếng Việt:** Quá trình xác minh zk-SNARK; kiểm chứng bằng chứng không tri thức súc tích. Hãy hình dung một chiếc máy quét quang học tại sân bay: nó chỉ quét tấm vé đã được mã hóa đặc biệt để xác nhận bạn đủ điều kiện lên máy bay trong vòng một phần nghìn giây mà không hề lưu lại số căn cước, ngày sinh hay tài khoản ngân hàng của bạn.

**Grammar & collocations:** `execute zk-SNARK verification` — thực thi việc xác minh zk-SNARK; `low gas cost of zk-SNARK verification` — chi phí giao dịch thấp của việc xác thực zk-SNARK trên chuỗi; `on-chain zk-SNARK verification` — quy trình xác thực zk-SNARK trực tiếp trên blockchain.

**Register & nuance:** Thuật ngữ chuyên sâu trong kỹ nghệ blockchain lớp 2 (Layer-2 rollups) và mật mã học bảo vệ quyền riêng tư. Khác với việc kiểm toán toàn bộ mã nguồn thực thi (*full computational replay*), việc xác minh zk-SNARK diễn ra gần như tức thì bất kể độ phức tạp của bài toán gốc.

**Examples:** `By offloading state transitions to an off-chain prover, the smart contract needs only a lightweight zk-SNARK verification to finalize thousands of transactions securely.` → Bằng cách chuyển giao các bước chuyển trạng thái cho một bên chứng minh ngoài chuỗi, hợp đồng thông minh chỉ cần một lượt xác minh zk-SNARK gọn nhẹ là có thể chốt hàng ngàn giao dịch một cách an toàn.

**Liên kết tiếng Hàn:** `영지식 스나크 검증` (零知識 SNARK 檢證) — quy trình xác thực bằng chứng không tiết lộ tri thức súc tích phi tương tác.

---

## 2. cryptographic prover /ˌkrɪptəˈɡræfɪk ˈpruːvər/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường đóng vai trò chủ ngữ tạo lập chứng chỉ toán học hoặc đứng làm bổ ngữ kỹ thuật trong mô hình tương tác mật mã.

**Core meaning — English:** The entity, node, or algorithmic process in a zero-knowledge proof system that holds the secret witness data and performs heavy mathematical computations to generate a valid cryptographic proof.

**Core meaning & mental image — Tiếng Việt:** Bên chứng minh mật mã; tiến trình tạo bằng chứng. Hãy hình dung một nhà giải đố thiên tài đứng sau bức màn nhung: người này sở hữu lời giải của một mê cung phức tạp nghìn ngõ ngách, giải xong trong phòng kín rồi chỉ chìa ra một tờ giấy chứng thực toán học cho người giám sát bên ngoài xem.

**Grammar & collocations:** `cryptographic prover overhead` — chi phí tài nguyên tính toán của bên chứng minh mật mã; `run a decentralized cryptographic prover` — vận hành một nút chứng minh mật mã phi tập trung; `prover generate a succinct proof` — bên chứng minh tạo ra một bằng chứng súc tích.

**Register & nuance:** Phân biệt rành mạch với *verifying party* (bên xác minh). Bên chứng minh đòi hỏi năng lực phần cứng GPU/FPGA khổng lồ để tính toán các ma trận đa thức, trong khi bên xác minh tiêu tốn rất ít CPU.

**Examples:** `Generating the proof requires substantial memory, so the cryptographic prover utilizes specialized hardware clusters to accelerate polynomial arithmetic.` → Việc tạo bằng chứng đòi hỏi bộ nhớ đáng kể, vì vậy bên chứng minh mật mã sử dụng các cụm phần cứng chuyên dụng để tăng tốc các phép tính số học đa thức.

**Liên kết tiếng Hàn:** `암호학적 증명자` (暗號學的 證明者) — thực thể hoặc tiến trình đảm nhiệm việc tạo bằng chứng mật mã.

---

## 3. verifying party /ˈvɛrəfaɪɪŋ ˈpɑːrti/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ đưa ra quyết định chấp thuận hoặc tân ngữ chỉ thực thể nhận chứng cứ kiểm toán.

**Core meaning — English:** The participant, smart contract, or protocol client in a cryptographic proof system that inspects the submitted proof against public parameters and decides whether to accept or reject the claim.

**Core meaning & mental image — Tiếng Việt:** Bên xác minh; thực thể kiểm chứng. Hãy hình dung một vị thẩm phán nghiêm cẩn ngồi tại tòa án: vị thẩm phán không cần đích thân đến hiện trường điều tra vụ án mạng mà chỉ đối chiếu các bản niêm phong dấu vân tay và báo cáo giám định pháp y hợp lệ để tuyên án.

**Grammar & collocations:** `convince the verifying party` — thuyết phục bên xác minh; `verifying party accepts the assertion` — bên xác minh chấp nhận khẳng định; `computational burden on the verifying party` — gánh nặng tính toán đặt lên bên xác minh.

**Register & nuance:** Thuật ngữ học thuật và tiêu chuẩn giao thức mật mã. Trong hệ thống *non-interactive*, bên xác minh thường là một hợp đồng thông minh tự động (verifier contract) hoạt động phi tín nhiệm.

**Examples:** `The mathematical beauty of modern proof protocols ensures that the verifying party can confirm the validity of a ten-gigabyte computation in under five milliseconds.` → Vẻ đẹp toán học của các giao thức chứng minh hiện đại bảo đảm rằng bên xác minh có thể xác nhận tính hợp lệ của một phép tính mười gigabyte chỉ trong vòng chưa đầy năm mili-giây.

**Liên kết tiếng Hàn:** `검증 당사자` (檢證 當事者) — bên kiểm tra tính chân thực của chứng cứ toán học.

---

## 4. succinctness /səkˈsɪŋktnəs/

**Loại từ & vị trí trong câu:** `uncountable noun`. Thường làm chủ ngữ biểu thị tính ưu việt của thuật toán hoặc đi sau các giới từ như `in terms of`, `guarantee`.

**Core meaning — English:** The property of a cryptographic proof where the size of the proof and the computational time required to verify it are exponentially smaller than the actual computation being validated.

**Core meaning & mental image — Tiếng Việt:** Tính súc tích; độ cô đọng toán học. Hãy hình dung một cuốn từ điển bách khoa toàn thư đồ sộ dày mười vạn trang được tóm gọn lại thành một công thức tí hon khắc vừa vặn trên mặt một chiếc nhẫn đeo tay, nhưng ai soi kính hiển vi vào cũng đọc được trọn vẹn kết luận chính xác.

**Grammar & collocations:** `exhibit asymptotic succinctness` — thể hiện tính súc tích tiệm cận; `proof succinctness` — tính súc tích của bằng chứng; `achieve verification succinctness` — đạt được sự súc tích trong khâu xác minh.

**Register & nuance:** Tiêu chuẩn phân định giữa các hệ thống chứng minh cổ điển (interactive proofs cồng kềnh) và các hệ thống thế hệ mới (SNARKs/STARKs). "Succinct" ở đây mang nghĩa kỹ thuật chính xác: kích thước bằng chứng chỉ vài trăm byte và thời gian kiểm tra là O(1) hoặc đa thức logarit.

**Examples:** `Without succinctness, verifying multi-million-step transactions directly on a decentralized blockchain would choke network bandwidth and cause astronomical node validation costs.` → Nếu không có tính súc tích, việc xác minh các giao dịch hàng triệu bước trực tiếp trên blockchain phi tập trung sẽ làm nghẽn băng thông mạng và gây ra chi phí kiểm thực nút mạng khổng lồ.

**Liên kết tiếng Hàn:** `간결성` (簡潔性) — đặc tính ngắn gọn, cô đọng về kích thước dữ liệu và thời gian xác thực.

---

## 5. arithmetic circuit /ˌærɪθˈmɛtɪk ˈsɜːrkət/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `compile into`, `decompose into`, hoặc làm chủ ngữ mô tả cấu trúc tính toán.

**Core meaning — English:** A computational model consisting of directed acyclic graphs of addition and multiplication gates over a finite field, used to translate arbitrary program logic into polynomial constraints for zero-knowledge proving.

**Core meaning & mental image — Tiếng Việt:** Mạch số học; mạng cổng tính toán trường hữu hạn. Hãy hình dung một bảng mạch điện tử phức tạp nhưng thay vì truyền dòng điện, các dây dẫn truyền tải các con số nguyên lớn qua các cổng cộng và nhân, biến mọi dòng mã lệnh phần mềm thành một mạng lưới phương trình toán học thống nhất.

**Grammar & collocations:** `compile code into an arithmetic circuit` — biên dịch mã nguồn thành mạch số học; `arithmetic circuit satisfiability` — tính thỏa mãn của mạch số học; `gate count of an arithmetic circuit` — số lượng cổng của một mạch số học.

**Register & nuance:** Bước chuyển hóa mấu chốt trong đường ống zk-SNARK (từ code bậc cao như Rust/Circom thành biểu diễn R1CS hoặc PlonKish). Mạch càng nhiều cổng nhân thì thời gian tạo bằng chứng càng chậm.

**Examples:** `Engineers optimized the image-processing algorithm to minimize multiplication gates, reducing the arithmetic circuit footprint by forty percent.` → Các kỹ sư đã tối ưu hóa thuật toán xử lý hình ảnh để giảm thiểu các cổng nhân, cắt giảm bốn mươi phần trăm quy mô mạch số học.

**Liên kết tiếng Hàn:** `산 thuật 회로` / `산술 회로` (算術 回路) — mạch tính toán số học dùng để biểu diễn logic chứng minh.

---

## 6. trusted setup ceremony /ˈtrʌstəd ˈsɛtˌʌp ˈsɛrəˌmoʊni/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ trong các báo cáo bảo mật mạng hoặc tân ngữ sau `participate in`, `execute`.

**Core meaning — English:** A multi-party cryptographic event in which participants generate shared structured reference strings while intentionally destroying the toxic intermediate randomness to ensure no single entity can forge false proofs.

**Core meaning & mental image — Tiếng Việt:** Buổi lễ thiết lập tin cậy; nghi thức khởi tạo tham số mật mã. Hãy hình dung một nhóm thợ rèn danh tiếng cùng nhau đúc ra một chiếc chìa khóa vạn năng rồi ngay lập tức ném các mảnh khuôn mẫu vào lò nung chảy và đổ chì lỏng lên để mãi mãi không ai có thể làm giả chiếc chìa thứ hai.

**Grammar & collocations:** `participate in a trusted setup ceremony` — tham gia một buổi lễ thiết lập tin cậy; `toxic waste of a trusted setup ceremony` — rác thải độc hại (dữ liệu ngẫu nhiên nguy hiểm) của buổi lễ thiết lập tin cậy; `transparent protocol requiring no trusted setup ceremony` — giao thức minh bạch không đòi hỏi lễ thiết lập tin cậy.

**Register & nuance:** Khái niệm gây tranh cãi kinh điển trong mật mã học zk-SNARK thế hệ cũ (như Groth16). Nếu những người tham gia thông đồng giữ lại "toxic waste", họ có thể tạo bằng chứng giả mạo; các hệ thống mới hơn như STARKs hoặc PlonK với KZG phổ quát đã giảm thiểu hoặc loại bỏ hoàn toàn sự lệ thuộc này.

**Examples:** `Over one hundred independent global participants joined the trusted setup ceremony, destroying their hardware afterwards to mathematically guarantee that the system cannot be compromised.` → Hơn một trăm người tham gia độc lập trên toàn cầu đã gia nhập buổi lễ thiết lập tin cậy, phá hủy phần cứng của họ sau đó để bảo đảm chắc chắn về mặt toán học rằng hệ thống không thể bị xâm phạm.

**Liên kết tiếng Hàn:** `신뢰할 수 있는 설정 의식` (信賴 設定 儀式) — nghi thức khởi tạo tham số mật mã đa bên nhằm loại trừ nguy cơ gian lận.

---

## 7. polynomial commitment scheme /ˌpɑːləˈnoʊmiəl kəˈmɪtmənt skiːm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ giải thích cơ chế nén dữ liệu hoặc tân ngữ sau `adopt`, `construct`.

**Core meaning — English:** A cryptographic primitive that enables a committer to commit to a hidden polynomial with a short string and subsequently prove that the polynomial evaluates to a specific value at any queried point without revealing the whole polynomial.

**Core meaning & mental image — Tiếng Việt:** Lược đồ cam kết đa thức. Hãy hình dung bạn vẽ một đường cong phức tạp uốn lượn qua hàng triệu điểm trên tờ giấy to, rồi bạn ép toàn bộ đường cong đó vào một mã tem siêu nhỏ dán lên phong bì; khi ai đó hỏi "ở tọa độ X, đường cong có giá trị Y không?", bạn chỉ cần đưa một bằng chứng tí hon xác nhận đúng mà không cần mở phong bì lộ toàn bộ hình vẽ.

**Grammar & collocations:** `evaluate a polynomial commitment scheme` — lượng giá lược đồ cam kết đa thức; `KZG polynomial commitment scheme` — lược đồ cam kết đa thức KZG; `efficiency of the polynomial commitment scheme` — hiệu năng của lược đồ cam kết đa thức.

**Register & nuance:** Trọng tâm kiến trúc của các hệ thống chứng minh hiện đại (như Halo2, PlonK). Nó quyết định trực tiếp kích thước bằng chứng và mức độ tiêu thụ bộ nhớ của hệ thống.

**Examples:** `By replacing merkelized tree structures with a pairing-friendly polynomial commitment scheme, the protocol slashed proof generation overhead by half.` → Bằng cách thay thế các cấu trúc cây Merkle bằng một lược đồ cam kết đa thức thân thiện với phép ghép cặp, giao thức đã cắt giảm một nửa chi phí tạo bằng chứng.

**Liên kết tiếng Hàn:** `다항식 약정 방식` (多項式 約定 方式) — lược đồ toán học cho phép cam kết và xác minh giá trị điểm của đa thức ẩn.

---

## 8. blinding factor /ˈblaɪndɪŋ ˈfæktər/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `inject`, `multiply by`, `add`, hoặc làm chủ ngữ duy trì tính ẩn danh.

**Core meaning — English:** A randomly chosen secret mathematical value added to a cryptographic commitment or proof input to prevent adversaries from inferring the underlying secret data through exhaustive search or statistical correlation.

**Core meaning & mental image — Tiếng Việt:** Yếu tố gây mù; hệ số làm mờ ngẫu nhiên. Hãy hình dung một chiếc két sắt kính trong suốt đựng một thỏi vàng; để người ngoài nhìn vào không đoán được trọng lượng, bạn đổ đầy vào két một lượng cát màu ngẫu nhiên làm mờ mắt mọi ánh nhìn soi mói.

**Grammar & collocations:** `inject a secret blinding factor` — bơm một yếu tố gây mù bí mật; `randomized blinding factor` — yếu tố gây mù ngẫu nhiên hóa; `strip the blinding factor during verification` — triệt tiêu yếu tố gây mù trong quá trình xác minh.

**Register & nuance:** Yếu tố bắt buộc trong các cam kết Pedersen (Pedersen commitments) để thỏa mãn đặc tính "hiding" (bảo đảm hoàn toàn bí mật dữ liệu trước khi mở cam kết).

**Examples:** `The wallet generates a unique blinding factor for each transaction, ensuring that observers cannot link confidential balances to public blockchain addresses.` → Ví tiền điện tử tạo một yếu tố gây mù duy nhất cho mỗi giao dịch, bảo đảm rằng những người quan sát không thể liên kết số dư bảo mật với các địa chỉ ví công khai trên blockchain.

**Liên kết tiếng Hàn:** `블라인딩 팩터` / `차폐 요소` (遮蔽 要素) — hệ số ngẫu nhiên dùng để làm mù và bảo vệ tính ẩn mật của dữ liệu gốc.

---

## 9. non-interactive zero-knowledge proof /ˌnɑːn ˌɪntərˈæktɪv ˌzɪroʊ ˈnɑːlɪdʒ pruːf/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ xác thực phi đồng bộ hoặc tân ngữ sau `broadcast`, `submit`, `verify`.

**Core meaning — English:** A cryptographic zero-knowledge proof that requires only a single message sent from the prover to the verifier, eliminating the need for back-and-forth communication rounds by deriving challenges via a random oracle.

**Core meaning & mental image — Tiếng Việt:** Bằng chứng không tiết lộ tri thức phi tương tác. Hãy hình dung bạn gửi một phong thư niêm phong duy nhất qua bưu điện chứa đầy đủ lời chứng minh hoàn hảo, người nhận chỉ cần mở thư đọc một lần là tin ngay mà không cần phải gọi điện hỏi đi hỏi lại từng câu đối chất với bạn.

**Grammar & collocations:** `publish a non-interactive zero-knowledge proof` — công bố một bằng chứng không tiết lộ tri thức phi tương tác; `convert interactive protocols into a non-interactive zero-knowledge proof` — chuyển đổi giao thức tương tác thành bằng chứng không tri thức phi tương tác; `rely on a non-interactive zero-knowledge proof for consensus` — dựa vào bằng chứng không tri thức phi tương tác để đạt đồng thuận.

**Register & nuance:** Cốt lõi của các ứng dụng phi tập trung thực tế. Nhờ thuật toán biến đổi Fiat-Shamir biến giao thức vấn đáp nhiều vòng thành một tin nhắn duy nhất, hệ thống mới có thể đăng tải bằng chứng lên mạng công khai để toàn bộ thế giới cùng kiểm chứng.

**Examples:** `The decentralized identity protocol issues a non-interactive zero-knowledge proof that users can broadcast to any service to verify their age without revealing their birthdate.` → Giao thức định danh phi tập trung phát hành một bằng chứng không tiết lộ tri thức phi tương tác mà người dùng có thể phát đi tới bất kỳ dịch vụ nào để xác minh độ tuổi mà không làm lộ ngày sinh.

**Liên kết tiếng Hàn:** `비대화형 영지식 증명` (非對話型 零知識 證明) — bằng chứng không tiết lộ tri thức chỉ qua một lần truyền thông điệp duy nhất.

---

## 10. soundness error /ˈsaʊndnəs ˌɛrər/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ định lượng rủi ro gian lận hoặc tân ngữ sau `bound`, `minimize`, `calculate`.

**Core meaning — English:** The maximum probability that a dishonest prover can deceive a verifying party into accepting an invalid statement as true in a cryptographic proof system.

**Core meaning & mental image — Tiếng Việt:** Sai số tính vững; xác suất chấp nhận bằng chứng giả. Hãy hình dung một chiếc máy soi tiền giả tại ngân hàng trung ương: sai số tính vững là xác suất cực kỳ hi hữu (ví dụ một trên một tỷ tỷ) một tờ tiền giả tinh vi lọt qua được mắt thần và bị máy nhận nhầm là tiền thật.

**Grammar & collocations:** `negligible soundness error` — sai số tính vững không đáng kể; `bound the soundness error` — chặn trên mức sai số tính vững; `soundness error of the protocol` — sai số tính vững của giao thức.

**Register & nuance:** Tiêu chuẩn an ninh khắt khe bậc nhất của mọi hệ thống ZK. Để đạt chuẩn an ninh mật mã, sai số tính vững phải nhỏ hơn $2^{-100}$ hoặc $2^{-128}$, khiến cho việc gian lận bằng chứng trở nên bất khả thi về mặt vật lý.

**Examples:** `Cryptographers proved that the modified protocol maintains a negligible soundness error, ensuring that adversaries have less than a one-in-a-quintillion chance of forging a signature.` → Các nhà mật mã học đã chứng minh rằng giao thức cải tiến duy trì một sai số tính vững không đáng kể, bảo đảm rằng kẻ tấn công có ít hơn một phần tỷ tỷ cơ hội làm giả chữ ký.

**Liên kết tiếng Hàn:** `타당성 오류 확률` (妥當性 誤謬 確率) — xác suất kẻ gian thuyết phục thành công bên xác minh tin vào một mệnh đề sai.

---

## 11. witness string /ˈwɪtnəs strɪŋ/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm tân ngữ sau `hold`, `conceal`, `pass into`, hoặc làm chủ ngữ đại diện cho bí mật được chứng minh.

**Core meaning — English:** The secret input or assignment of variables that satisfies the cryptographic relations of an arithmetic circuit, known only to the prover and withheld from public exposure.

**Core meaning & mental image — Tiếng Việt:** Chuỗi nhân chứng; dữ liệu bí mật làm chứng. Hãy hình dung một mật mã mở két gồm dãy số 32 chữ số: bạn dùng chính chuỗi số này làm nhân chứng nhập vào cỗ máy ZK để chứng minh bạn biết cách mở két, nhưng cỗ máy tuyệt đối không để lộ bất kỳ chữ số nào ra bên ngoài.

**Grammar & collocations:** `supply the secret witness string` — cung cấp chuỗi nhân chứng bí mật; `extract the witness string` — trích xuất chuỗi nhân chứng; `satisfy the circuit with a valid witness string` — thỏa mãn mạch tính toán bằng một chuỗi nhân chứng hợp lệ.

**Register & nuance:** Trọng tâm dữ liệu trong bài toán NP-hoàn chỉnh (NP-complete) của mật mã ZK. Bằng chứng chỉ hợp lệ khi và chỉ khi bên chứng minh thực sự sở hữu chuỗi nhân chứng hợp lệ.

**Examples:** `The auditor confirmed that even if an attacker intercepts all network transmissions, the mathematical proof reveals zero bits of the proprietary witness string.` → Kiểm toán viên xác nhận rằng ngay cả khi kẻ tấn công đánh chặn toàn bộ đường truyền mạng, bằng chứng toán học cũng không làm lộ dù chỉ một bit của chuỗi nhân chứng độc quyền.

**Liên kết tiếng Hàn:** `위트니스 문자열` / `비밀 증거열` (秘密 證據列) — chuỗi dữ liệu bí mật đóng vai trò làm nhân chứng thỏa mãn mạch toán học.

---

## 12. cryptographic commitment scheme /ˌkrɪptəˈɡræfɪk kəˈmɪtmənt skiːm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ định hình giao thức bảo vệ trạng thái hoặc tân ngữ sau `implement`, `instantiate`.

**Core meaning — English:** A foundational two-phase protocol that allows a party to commit to a chosen value while keeping it hidden from others (hiding), with the inability to change that value once committed (binding).

**Core meaning & mental image — Tiếng Việt:** Lược đồ cam kết mật mã. Hãy hình dung một cuộc đấu giá kín: mỗi người đấu giá viết con số của mình vào tờ giấy, bỏ vào một chiếc hộp thép khóa kín bằng mật mã rồi đặt lên bàn chung trước sự chứng kiến của mọi người; không ai nhìn trộm được giá bên trong, nhưng người bỏ giá cũng không thể tráo đổi số tiền đã đặt.

**Grammar & collocations:** `binding property of a cryptographic commitment scheme` — đặc tính ràng buộc bất biến của lược đồ cam kết mật mã; `instantiate a cryptographic commitment scheme` — khởi tạo một lược đồ cam kết mật mã; `unconditionally hiding cryptographic commitment scheme` — lược đồ cam kết mật mã có tính ẩn giấu vô điều kiện.

**Register & nuance:** Trụ cột của mật mã học tương tác, chữ ký số và hệ thống bầu cử điện tử. Hai đặc tính bất di bất dịch của nó là *hiding* (không ai đoán được giá trị trước khi mở) và *binding* (người cam kết không thể chối bỏ hay thay đổi giá trị).

**Examples:** `The decentralized voting platform leverages a cryptographic commitment scheme so citizens can lock their votes during the poll and reveal them simultaneously after tallying begins.` → Nền tảng bỏ phiếu phi tập trung tận dụng một lược đồ cam kết mật mã để người dân có thể khóa phiếu bầu trong suốt cuộc bỏ phiếu và mở đồng thời sau khi bắt đầu kiểm phiếu.

**Liên kết tiếng Hàn:** `암호학적 약정 방식` (暗號學的 約定 方式) — cơ chế toán học bảo đảm hai tính chất che giấu và ràng buộc không thể thay đổi giá trị.

---

## 13. homomorphic encryption scheme /ˌhoʊməˈmɔːrfɪk ɪnˈkrɪpʃən skiːm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường làm chủ ngữ chi phối phương pháp xử lý dữ liệu đám mây hoặc tân ngữ sau `deploy`, `parameterize`.

**Core meaning — English:** A cryptographic framework allowing mathematical operations to be performed directly on ciphertexts, generating an encrypted result that, when decrypted, matches the outcome of operations performed on plaintext.

**Core meaning & mental image — Tiếng Việt:** Lược đồ mã hóa đồng hình. Hãy hình dung bạn gửi một khối vàng thỏi khóa chặt trong một chiếc hộp găng tay cao su chịu lực kín mít tới một xưởng kim hoàn: thợ bạc luồn tay vào găng chế tác vàng thành một chiếc nhẫn tinh xảo mà bàn tay chưa từng chạm trực tiếp vào vàng trần, sau đó gửi trả chiếc hộp đã khóa cho bạn mở ra lấy nhẫn.

**Grammar & collocations:** `deploy a homomorphic encryption scheme` — triển khai lược đồ mã hóa đồng hình; `leveled homomorphic encryption scheme` — lược đồ mã hóa đồng hình đa mức; `performance penalties of a homomorphic encryption scheme` — sự đánh đổi về hiệu năng của một lược đồ mã hóa đồng hình.

**Register & nuance:** Chén thánh của điện toán đám mây bảo vệ quyền riêng tư (*confidential cloud computing*). Cho phép máy chủ thuê ngoài xử lý dữ liệu bệnh án hoặc tài chính mà không bao giờ nhìn thấy dữ liệu thô.

**Examples:** `By parameterizing a modern homomorphic encryption scheme, the hospital outsourced genomic sequencing analysis to commercial cloud servers without exposing patient genomes.` → Bằng cách thiết lập tham số cho một lược đồ mã hóa đồng hình hiện đại, bệnh viện đã thuê ngoài các máy chủ đám mây thương mại phân tích giải trình tự gen mà không làm lộ bộ gen của bệnh nhân.

**Liên kết tiếng Hàn:** `동형 암호화 방식` (同形 暗號化 方式) — phương thức mã hóa cho phép tính toán trực tiếp trên dữ liệu đang bị khóa.

---

## 14. ciphertext computation /ˈsaɪfərtɛkst ˌkɑːmpjʊˈteɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ giải thích quy trình xử lý an toàn hoặc tân ngữ sau `enable`, `accelerate`, `perform`.

**Core meaning — English:** The mathematical manipulation and transformation of encrypted data values without first decrypting them back to clear plaintext.

**Core meaning & mental image — Tiếng Việt:** Tính toán trên bản mã. Hãy hình dung một chiếc máy tính cộng trừ nhân chia hoạt động trong căn phòng tối om: nó nhận vào hai khối đá số hóa bị bọc kín vải đen, nghiền và nhào nặn chúng thành một khối đá thứ ba, nhưng bất cứ ai bật đèn lên cũng thấy kết quả giải mã bên trong khớp chính xác với phép tính ban đầu.

**Grammar & collocations:** `perform direct ciphertext computation` — thực hiện tính toán trực tiếp trên bản mã; `ciphertext computation throughput` — thông lượng tính toán trên bản mã; `hardware acceleration for ciphertext computation` — tăng tốc phần cứng cho việc tính toán trên bản mã.

**Register & nuance:** Thuật ngữ then chốt phân biệt giữa bảo mật dữ liệu đang nghỉ (data-at-rest), dữ liệu đang truyền (data-in-transit), và dữ liệu đang dùng (data-in-use).

**Examples:** `Advanced medical imaging models execute ciphertext computation directly in untrusted cloud environments, ensuring patient scans remain mathematically confidential throughout inference.` → Các mô hình chẩn đoán hình ảnh y tế tiên tiến thực thi việc tính toán trên bản mã trực tiếp trong môi trường đám mây không tin cậy, bảo đảm kết quả chụp chiếu của bệnh nhân luôn được bảo mật tuyệt đối về mặt toán học trong suốt quá trình suy luận.

**Liên kết tiếng Hàn:** `암호문 상의 연산` (暗號文 演算) — việc thực hiện các phép toán trực tiếp trên dữ liệu đã bị mã hóa.

---

## 15. fully homomorphic encryption /ˈfʊli ˌhoʊməˈmɔːrfɪk ɪnˈkrɪpʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường viết tắt là FHE, đóng vai trò chủ ngữ đại diện cho mô hình tính toán tối thượng hoặc làm tân ngữ sau `implement`.

**Core meaning — English:** A form of encryption that permits arbitrary computations—consisting of unlimited sequential additions and multiplications—to be executed indefinitely over encrypted data without requiring decryption keys.

**Core meaning & mental image — Tiếng Việt:** Mã hóa đồng hình toàn phần. Hãy hình dung một chiếc máy giặt tự động kỳ diệu: bạn bỏ quần áo bẩn đã đóng trong các túi vải niêm phong kín vào thùng máy, máy giặt xả vắt và là ủi phẳng phiu mọi ngóc ngách mà không cần mở bất kỳ chiếc túi nào, trả lại quần áo sạch sẽ nguyên niêm phong.

**Grammar & collocations:** `breakthroughs in fully homomorphic encryption` — những bước đột phá trong mã hóa đồng hình toàn phần; `computational overhead of fully homomorphic encryption` — chi phí tính toán đồ sộ của mã hóa đồng hình toàn phần; `practical applications of fully homomorphic encryption` — các ứng dụng thực tiễn của mã hóa đồng hình toàn phần.

**Register & nuance:** Khác với *partially homomorphic encryption* (chỉ cho phép phép cộng HOẶC phép nhân đơn lẻ), FHE cho phép chạy mọi chương trình phần mềm tùy ý Turing-complete trên dữ liệu mã hóa.

**Examples:** `Although fully homomorphic encryption historically imposed an impractical million-fold slowdown, recent algorithmic breakthroughs and dedicated ASICs have made real-time private database queries viable.` → Mặc dù trong lịch sử mã hóa đồng hình toàn phần từng làm chậm tốc độ tới hàng triệu lần, những đột phá thuật toán gần đây và chip ASIC chuyên dụng đã biến các truy vấn cơ sở dữ liệu riêng tư thời gian thực thành hiện thực khả thi.

**Liên kết tiếng Hàn:** `완전 동형 암호` (完全 同形 暗號) — dạng mã hóa cho phép thực hiện tùy ý mọi phép tính cộng và nhân vô hạn trên dữ liệu khóa.

---

## 16. cryptographic bootstrapping /ˌkrɪptəˈɡræfɪk ˈbuːtˌstræpɪŋ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ diễn tả thao tác làm sạch tín hiệu hoặc tân ngữ sau `execute`, `invoke`.

**Core meaning — English:** An algorithmic procedure in fully homomorphic encryption where an encrypted ciphertext evaluates its own decryption circuit to refresh its accumulated mathematical noise, resetting the noise budget for further calculations.

**Core meaning & mental image — Tiếng Việt:** Quá trình tự nâng (bootstrapping) mật mã; quy trình làm mới bản mã. Hãy hình dung một chiếc xe tải việt dã đang bò qua đầm lầy bùn đất: sau mỗi chặng đường bùn bám đầy bánh khiến xe sắp trượt bánh chết máy, hệ thống tự động phụt tia nước áp lực cực mạnh rửa trôi sạch bùn đất để chiếc xe tiếp tục hành trình vô tận.

**Grammar & collocations:** `execute cryptographic bootstrapping` — thực thi việc làm mới bản mã bằng thuật toán tự nâng; `bootstrapping cycle latency` — độ trễ của chu kỳ làm mới bootstrapping; `expensive cryptographic bootstrapping operation` — thao tác tự nâng mật mã tốn kém tài nguyên.

**Register & nuance:** Phát minh mang tính bản lề của Craig Gentry (2009) mở đường cho FHE. Thao tác này tiêu tốn nhiều thời gian CPU nhất trong toàn bộ đường ống mã hóa đồng hình.

**Examples:** `Whenever accumulated errors threaten calculation accuracy, the cryptographic bootstrapping routine steps in to regenerate a pristine ciphertext with an entirely refreshed noise margin.` → Bất cứ khi nào sai số tích lũy đe dọa độ chính xác của phép tính, quy trình tự nâng mật mã sẽ can thiệp để tái tạo một bản mã nguyên sơ với biên độ dung sai nhiễu được làm mới hoàn toàn.

**Liên kết tiếng Hàn:** `암호학적 부트스트래핑` (暗號學的 bootstrapping) — quy trình làm mới và triệt tiêu nhiễu toán học tích lũy trong bản mã đồng hình.

---

## 17. noise budget depletion /ˈnɔɪz ˌbʌdʒɪt dɪˈpliːʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ giải thích hiện tượng hỏng dữ liệu hoặc tân ngữ sau `monitor`, `prevent`, `suffer from`.

**Core meaning — English:** The progressive exhaustion of an encrypted ciphertext's tolerance for arithmetic errors resulting from successive multiplications, which, if fully drained, corrupts the underlying plaintext upon decryption.

**Core meaning & mental image — Tiếng Việt:** Sự cạn kiệt dung sai nhiễu; hao hụt ngân sách nhiễu. Hãy hình dung một tấm kính trong suốt bị phủ một lớp bụi mờ sau mỗi lần gõ búa: sau mười phát gõ, lớp bụi dày đặc tới mức ánh sáng không thể lọt qua, khiến bức tranh phía sau trở thành một mảng đen vô nghĩa khi mở rèm.

**Grammar & collocations:** `cause noise budget depletion` — gây ra sự cạn kiệt dung sai nhiễu; `monitor noise budget depletion` — giám sát sự hao hụt ngân sách nhiễu; `prevent fatal noise budget depletion` — ngăn chặn sự cạn kiệt ngân sách nhiễu chí mạng.

**Register & nuance:** Khái niệm cốt lõi trong thiết kế thuật toán FHE/SHE. Các phép nhân làm tăng nhiễu theo cấp số nhân, do đó các nhà phát triển phải liên tục đo lường mức độ hao mòn này để kịp thời kích hoạt thao tác bootstrapping.

**Examples:** `If multiplication depth is configured too aggressively without intermediate refreshes, rapid noise budget depletion will make successful plaintext recovery impossible.` → Nếu độ sâu của các phép nhân được cấu hình quá dày mà không có các bước làm mới trung gian, sự cạn kiệt dung sai nhiễu nhanh chóng sẽ khiến việc khôi phục bản rõ thành công trở nên bất khả thi.

**Liên kết tiếng Hàn:** `노이즈 버짓 고갈` (noise budget 枯渴) — hiện tượng cạn kiệt dung lượng nhiễu cho phép trong mã hóa đồng hình dẫn đến sai lệch kết quả giải mã.

---

## 18. lattice-based cryptography /ˈlætɪs beɪst krɪpˈtɑːɡrəfi/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ mở ra kỷ nguyên bảo mật mới hoặc tân ngữ sau `transition to`, `standardize`.

**Core meaning — English:** A cryptographic framework grounded in the computational hardness of finding the shortest or closest vectors in high-dimensional geometric point grids, believed to be inherently resistant to quantum cryptanalysis.

**Core meaning & mental image — Tiếng Việt:** Mật mã học dựa trên lưới; cấu trúc mật mã lưới không gian đa chiều. Hãy hình dung một mê cung không gian một nghìn chiều chứa hàng tỷ tỷ điểm tinh thể đan cài: việc tìm điểm lưới gần nhất giống như mò một hạt cát đặc biệt trong vũ trụ bao la, ngay cả siêu máy tính lượng tử cũng bị lạc lối trong mê cung đó.

**Grammar & collocations:** `adopt lattice-based cryptography` — áp dụng mật mã học dựa trên cấu trúc lưới; `mathematical security of lattice-based cryptography` — độ an toàn toán học của mật mã lưới; `lattice-based cryptography standards` — các tiêu chuẩn mật mã học dựa trên lưới.

**Register & nuance:** Hướng đi chủ đạo được Viện Tiêu chuẩn và Kỹ thuật Quốc gia Hoa Kỳ (NIST) phê duyệt cho chuẩn mã hóa hậu lượng tử (như CRYSTALS-Kyber và CRYSTALS-Dilithium).

**Examples:** `Global financial institutions are rapidly adopting lattice-based cryptography to protect sovereign ledgers against prospective quantum computing attacks.` → Các định chế tài chính toàn cầu đang nhanh chóng áp dụng mật mã học dựa trên lưới để bảo vệ sổ cái quốc gia trước các cuộc tấn công tiềm tàng của máy tính lượng tử.

**Liên kết tiếng Hàn:** `격자 기반 암호학` (格子 基盤 暗號學) — mật mã học dựa trên độ khó của các bài toán hình học lưới đa chiều.

---

## 19. learning with errors hardness /ˈlɜːrnɪŋ wɪð ˈɛrərz ˈhɑːrdnəs/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường viết tắt là LWE hardness, làm chủ ngữ bảo đảm an ninh hoặc tân ngữ sau `rely on`, `reduce to`.

**Core meaning — English:** The proven computational intractability of distinguishing linear equations perturbed by small Gaussian noise from uniformly random choices, serving as the security cornerstone for post-quantum algorithms.

**Core meaning & mental image — Tiếng Việt:** Độ khó của bài toán học kèm nhiễu (LWE). Hãy hình dung việc giải một hệ phương trình đại số tuyến tính nghìn ẩn số nhưng mỗi đáp án lại bị cộng thêm một chút hạt bụi ngẫu nhiên: việc loại trừ hạt bụi để tìm chính xác bộ nghiệm ban đầu đòi hỏi thời gian tính toán vượt qua tuổi thọ của vũ trụ.

**Grammar & collocations:** `rely on learning with errors hardness` — dựa vào độ khó của bài toán học kèm nhiễu; `ring learning with errors hardness` — độ khó của bài toán học kèm nhiễu trên vành (Ring-LWE); `security reductions to learning with errors hardness` — các quy giảm an ninh về độ khó của bài toán LWE.

**Register & nuance:** Nền tảng toán học của hầu hết các thuật toán hậu lượng tử và FHE hiện đại (như CKKS, BGV). Nó cung cấp bảo đảm "trường hợp xấu nhất tương đương trường hợp trung bình" (*worst-case to average-case reduction*).

**Examples:** `The security guarantee of next-generation public keys relies directly on learning with errors hardness, which has withstood decades of adversarial mathematical scrutiny.` → Cam kết an ninh của các khóa công khai thế hệ mới dựa trực tiếp vào độ khó của bài toán học kèm nhiễu, một bài toán đã đứng vững trước nhiều thập kỷ kiểm tra toán học đối kháng.

**Liên kết tiếng Hàn:** `오류 학습 문제의 난수성` (誤謬 學習 問題 難酬性) — độ khó tính toán toán học của bài toán LWE làm nền móng an ninh cho mật mã hậu lượng tử.

---

## 20. quantum decryption resistance /ˈkwɑːntəm diːˈkrɪpʃən rɪˈzɪstəns/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ biểu thị sức bền mật mã hoặc tân ngữ sau `achieve`, `demonstrate`, `certify`.

**Core meaning — English:** The capacity of a cryptographic system to remain secure and computationally impenetrable against decryption algorithms running on future large-scale, fault-tolerant quantum computers.

**Core meaning & mental image — Tiếng Việt:** Khả năng chống giải mã lượng tử; sức bền trước tấn công máy tính lượng tử. Hãy hình dung một bức tường thành được xây bằng hợp kim titan chịu nhiệt siêu việt: dù đối phương mang tới những khẩu súng laser plasma lượng tử có khả năng làm bốc hơi mọi bức tường gạch đá cổ xưa, bức thành kiên cố này vẫn trơ trơ không suy suyển.

**Grammar & collocations:** `achieve quantum decryption resistance` — đạt được khả năng chống giải mã lượng tử; `benchmark quantum decryption resistance` — đo lường đánh giá năng lực chống giải mã lượng tử; `long-term quantum decryption resistance` — khả năng chống giải mã lượng tử dài hạn.

**Register & nuance:** Trọng tâm an ninh quốc phòng và cơ sở hạ tầng trọng yếu nhằm đối phó với mối đe dọa "Harvest Now, Decrypt Later" (thu thập dữ liệu mã hóa ngay bây giờ để chờ máy tính lượng tử tương lai giải mã).

**Examples:** `Defense intelligence agencies prioritize algorithms with certified quantum decryption resistance to safeguard classified diplomatic cables that must remain confidential for fifty years.` → Các cơ quan tình báo quốc phòng ưu tiên các thuật toán có chứng nhận khả năng chống giải mã lượng tử để bảo vệ các bức điện ngoại giao tuyệt mật vốn bắt buộc phải giữ kín trong suốt năm mươi năm.

**Liên kết tiếng Hàn:** `양자 복호화 내성` (量子 復號化 耐性) — khả năng chống chịu trước các thuật toán giải mã của máy tính lượng tử.

---

## 21. post-quantum migration /ˌpoʊst ˈkwɑːntəm maɪˈɡreɪʃən/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường làm chủ ngữ mô tả lộ trình công nghệ hoặc tân ngữ sau `accelerate`, `coordinate`, `budget for`.

**Core meaning — English:** The comprehensive organizational and infrastructural process of replacing legacy public-key cryptosystems (such as RSA and elliptic curves) with quantum-resistant mathematical alternatives across global software ecosystems.

**Core meaning & mental image — Tiếng Việt:** Cuộc chuyển dịch hậu lượng tử; lộ trình nâng cấp mật mã hậu lượng tử. Hãy hình dung một chiến dịch thay thế toàn bộ hệ thống ổ khóa cơ khí của mọi tòa nhà trong một siêu đô thị sang khóa sinh trắc học thông minh trước ngày một toán trộm sở hữu chìa vạn năng công nghệ cao đổ bộ.

**Grammar & collocations:** `accelerate post-quantum migration` — đẩy nhanh cuộc chuyển dịch hậu lượng tử; `roadmap for post-quantum migration` — lộ trình chuyển dịch mật mã hậu lượng tử; `challenges of enterprise post-quantum migration` — những thách thức trong quá trình chuyển dịch hậu lượng tử của doanh nghiệp.

**Register & nuance:** Thuật ngữ chỉ sự biến đổi kỹ nghệ quy mô lớn nhất ngành IT kể từ sự cố Y2K, bao gồm cập nhật giao thức TLS, chứng chỉ số x.509, phần cứng HSM và mã hóa cơ sở dữ liệu.

**Examples:** `Financial regulators mandated that tier-one commercial banks establish a formal roadmap for post-quantum migration by next year to eliminate vulnerabilities in core clearing networks.` → Các nhà điều hành tài chính đã bắt buộc các ngân hàng thương mại hạng nhất phải thiết lập một lộ trình chính thức cho cuộc chuyển dịch hậu lượng tử vào năm tới để loại bỏ các lỗ hổng trong các mạng thanh toán bù trừ cốt lõi.

**Liên kết tiếng Hàn:** `양자 내성 암호 전환` (量子 耐性 暗號 轉換) — tiến trình nâng cấp và thay thế toàn diện hệ thống mật mã cũ sang chuẩn hậu lượng tử.

---

## 22. key encapsulation mechanism /kiː ɪnˌkæpsjʊˈleɪʃən ˈmɛkəˌnɪzəm/

**Loại từ & vị trí trong câu:** `countable noun phrase`. Thường viết tắt là KEM, làm tân ngữ sau `implement`, `standardize`, hoặc làm chủ ngữ thiết lập khóa phiên.

**Core meaning — English:** A cryptographic technique that uses public-key encryption to securely generate, wrap, and transmit a symmetric secret key between communicating parties over an untrusted channel.

**Core meaning & mental image — Tiếng Việt:** Cơ chế đóng gói khóa mật mã. Hãy hình dung bạn gửi một phong bì gia cố đặc biệt qua đường bưu điện: bạn bỏ vào trong một chiếc thẻ khóa bí mật ngẫu nhiên, niêm phong lại bằng ổ khóa số của người nhận; chỉ người có mã số mới mở được phong bì lấy thẻ khóa ra để thiết lập đường dây điện thoại mật.

**Grammar & collocations:** `lattice-based key encapsulation mechanism` — cơ chế đóng gói khóa dựa trên lưới; `execute a key encapsulation mechanism` — thực thi cơ chế đóng gói khóa; `key encapsulation mechanism standard` — tiêu chuẩn cơ chế đóng gói khóa (như ML-KEM).

**Register & nuance:** Phương thức thiết lập khóa đối xứng hiện đại thay thế cho thỏa thuận khóa trao đổi Diffie-Hellman cổ điển trong kiến trúc mật mã hậu lượng tử.

**Examples:** `NIST officially standardized the Kyber lattice algorithm as the primary key encapsulation mechanism for securing future internet communications.` → NIST đã chính thức tiêu chuẩn hóa thuật toán lưới Kyber làm cơ chế đóng gói khóa chủ đạo để bảo đảm an toàn cho các kết nối truyền thông internet trong tương lai.

**Liên kết tiếng Hàn:** `키 캡슐화 메커니즘` (key 構造化 mechanism) — cơ chế đóng gói và truyền tải khóa mật mã an toàn qua kênh công khai.

---

## 23. quantum speedup vulnerability /ˈkwɑːntəm ˈspiːdˌʌp ˌvʌlnərəˈbɪləti/

**Loại từ & vị trí trong câu:** `countable/uncountable noun phrase`. Thường làm chủ ngữ chỉ mối nguy cơ hoặc tân ngữ sau `expose to`, `assess`, `remedy`.

**Core meaning — English:** The exposure of a cryptographic algorithm to catastrophic efficiency gains by quantum algorithms—such as Shor's algorithm for factoring or Grover's algorithm for symmetric search—drastically degrading mathematical security levels.

**Core meaning & mental image — Tiếng Việt:** Lỗ hổng trước gia tốc lượng tử; nguy cơ bị máy tính lượng tử phá vỡ thần tốc. Hãy hình dung một bức tường đá từng mất một triệu năm để đục thủng bằng búa đục thông thường bỗng chốc sụp đổ chỉ sau ba phút khi đối phương mang máy khoan tia âm thanh cộng hưởng lượng tử tới khoan vào các thớ đá.

**Grammar & collocations:** `suffer from a quantum speedup vulnerability` — chịu lỗ hổng trước bước gia tốc tính toán lượng tử; `mitigate quantum speedup vulnerability` — giảm thiểu nguy cơ bị phá vỡ bởi gia tốc lượng tử; `assess quantum speedup vulnerability in legacy ciphers` — đánh giá lỗ hổng gia tốc lượng tử trong các cipher cũ.

**Register & nuance:** Phân biệt rõ tác động: thuật toán Shor mang lại bước tăng tốc hàm mũ (*exponential speedup*) làm vỡ tan RSA/ECC, trong khi thuật toán Grover chỉ mang lại bước tăng tốc bậc hai (*quadratic speedup*), chỉ đòi hỏi tăng gấp đôi độ dài khóa AES từ 128 lên 256 bit.

**Examples:** `Because integer factorization exhibits an exponential quantum speedup vulnerability under Shor's algorithm, legacy 2048-bit RSA certificates will be completely defenseless.` → Bởi vì phép phân tích thừa số nguyên chịu một lỗ hổng trước gia tốc lượng tử dạng hàm mũ theo thuật toán Shor, các chứng chỉ RSA 2048-bit cũ sẽ hoàn toàn mất khả năng tự vệ.

**Liên kết tiếng Hàn:** `양자 가속 취약성` (量子 加速 脆弱性) — lỗ hổng an ninh phát sinh khi máy tính lượng tử rút ngắn thời gian phá mã theo cấp số nhân.

---

## 24. side-channel leakage mitigation /ˈsaɪdˌtʃænəl ˈliːkɪdʒ ˌmɪtəˈɡeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase`. Thường làm chủ ngữ phòng thủ phần cứng hoặc tân ngữ sau `incorporate`, `validate`, `require`.

**Core meaning — English:** Engineering techniques implemented in software and silicon to prevent physical operational signatures—such as power consumption fluctuations, electromagnetic radiation, or execution timing variations—from revealing secret cryptographic keys.

**Core meaning & mental image — Tiếng Việt:** Sự giảm thiểu rò rỉ kênh phụ; biện pháp triệt tiêu thông tin rò rỉ vật lý. Hãy hình dung một thợ mở két sắt nghe tiếng "tách" khe khẽ của bi khóa qua ống nghe y tế: biện pháp phòng thủ ở đây là bật máy phát tiếng ồn trắng thật to và bọc lớp cách âm dày quanh ổ khóa để tiếng bi nhảy không bao giờ lọt ra ngoài.

**Grammar & collocations:** `rigorous side-channel leakage mitigation` — sự giảm thiểu rò rỉ kênh phụ nghiêm ngặt; `hardware-level side-channel leakage mitigation` — biện pháp giảm thiểu rò rỉ kênh phụ ở tầng phần cứng; `side-channel leakage mitigation via constant-time code` — triệt tiêu rò rỉ kênh phụ thông qua mã nguồn thực thi thời gian hằng số.

**Register & nuance:** Ngay cả khi thuật toán có độ an toàn toán học hoàn hảo (mathematically unbreakable), việc thiếu các biện pháp triệt tiêu rò rỉ vật lý có thể khiến khóa riêng bị lộ chỉ qua phân tích dòng điện tiêu thụ (*differential power analysis*).

**Examples:** `Post-quantum algorithms must implement constant-time polynomial multiplication as a primary side-channel leakage mitigation to prevent microarchitectural cache-timing exploits.` → Các thuật toán hậu lượng tử phải triển khai phép nhân đa thức theo thời gian hằng số như một biện pháp giảm thiểu rò rỉ kênh phụ tiên quyết nhằm ngăn ngừa các cuộc khai thác đo thời gian bộ nhớ đệm vi kiến trúc.

**Liên kết tiếng Hàn:** `부채널 누설 완화` (副채널 漏洩 緩和) — các biện pháp kỹ thuật ngăn chặn rò rỉ khóa bí mật qua các dấu hiệu vật lý như điện năng và thời gian thực thi.

---

## 25. public-key infrastructure /ˈpʌblɪk kiː ˈɪnfrəˌstrʌktʃər/

**Loại từ & vị trí trong câu:** `uncountable/countable noun phrase`. Thường viết tắt là PKI, làm chủ ngữ quản trị danh tính số hoặc tân ngữ sau `overhaul`, `modernize`, `govern`.

**Core meaning — English:** The comprehensive framework of hardware, software, policies, cryptographic certificates, and certificate authorities used to generate, manage, distribute, and revoke digital public-key certificates across distributed networks.

**Core meaning & mental image — Tiếng Việt:** Hạ tầng khóa công khai; hệ sinh thái chứng thực số. Hãy hình dung mạng lưới cục quản lý xuất nhập cảnh và hộ chiếu toàn cầu: họ in phôi hộ chiếu chống giả, đóng dấu mộc quốc gia, cập nhật danh sách hộ chiếu bị mất cắp để bảo đảm mọi hải quan trên thế giới đều nhận diện chính xác danh tính người xuất nhập cảnh.

**Grammar & collocations:** `enterprise public-key infrastructure` — hạ tầng khóa công khai cấp doanh nghiệp; `overhaul the existing public-key infrastructure` — đại tu hạ tầng khóa công khai hiện hữu; `public-key infrastructure certificate lifecycle` — vòng đời chứng chỉ trong hạ tầng khóa công khai.

**Register & nuance:** Nền tảng niềm tin của toàn bộ internet (từ giao thức HTTPS, chữ ký số tài liệu đến thẻ căn cước công dân gắn chip). Việc chuẩn bị PKI trước mối đe dọa lượng tử là ưu tiên cấp thiết của các giám đốc an ninh thông tin (CISO).

**Examples:** `Modernizing the federal public-key infrastructure involves certifying hybrid digital certificates that combine classical elliptic curves with post-quantum signature schemes.` → Việc hiện đại hóa hạ tầng khóa công khai liên bang bao gồm việc cấp chứng chỉ số lai ghép kết hợp đường cong elliptic cổ điển với các lược đồ chữ ký hậu lượng tử.

**Liên kết tiếng Hàn:** `공개 키 기반 구조` (公開 key 基盤 構造) — khuôn khổ tổng thể quản lý việc cấp phát, chứng thực và thu hồi các khóa công khai.

---

## Review in context (Part 1: Zero-Knowledge Verification and Cryptographic Commitments)

In high-throughput decentralized ledgers, verifying complex transactions directly on-chain would quickly paralyze block validation. Instead, the network delegates heavy computational proofs to an off-chain **cryptographic prover**, which transforms transaction logic into a dense **arithmetic circuit** composed of addition and multiplication gates. The developer compiles private transaction inputs into a hidden **witness string**, ensuring sensitive balances never touch the public ledger. To guarantee that observers cannot extract clues about transaction amounts through statistical frequency analysis, the wallet injects a randomized **blinding factor** into each numerical state transition. The system then evaluates the computational polynomial using an advanced **polynomial commitment scheme**, compressing thousands of computational constraints into a tiny cryptographic footprint. Decades ago, creating such proofs required cumbersome back-and-forth challenges, but modern networks utilize a **non-interactive zero-knowledge proof**, allowing the prover to package the proof in a single broadcast payload. To achieve initial parameter trust without a centralized authority, international participants joined a structured **trusted setup ceremony**, destroying ephemeral secret randomness to prevent backdoor creation. When validators receive the payload, they execute an instantaneous **zk-SNARK verification**, confirming that the mathematical statement holds true within milliseconds. Because of this architectural design, the system exhibits unprecedented **succinctness**, maintaining sub-kilobyte proof sizes regardless of computational complexity. Rigorous mathematical analysis ensures a negligible **soundness error**, providing statistical certainty that malicious actors cannot convince the network of a false assertion. Ultimately, the entire protocol relies on a robust **cryptographic commitment scheme** that binds parties irreversibly to their inputs while satisfying the strict verification rules of the **verifying party**.

**Bản dịch tiếng Việt:**

Trong các sổ cái phi tập trung có thông lượng cao, việc xác minh các giao dịch phức tạp trực tiếp trên chuỗi sẽ nhanh chóng làm tê liệt quá trình kiểm thực khối. Thay vào đó, mạng lưới giao phó các chứng cứ tính toán nặng nề cho một bên chứng minh mật mã (**cryptographic prover**) ngoài chuỗi, bên này sẽ chuyển đổi logic giao dịch thành một mạch số học (**arithmetic circuit**) dày đặc bao gồm các cổng cộng và cổng nhân. Nhà phát triển biên dịch các đầu vào giao dịch riêng tư thành một chuỗi nhân chứng (**witness string**) ẩn giấu, bảo đảm số dư nhạy cảm không bao giờ chạm tới sổ cái công khai. Để bảo đảm rằng những người quan sát không thể trích xuất manh mối về số tiền giao dịch thông qua phân tích tần suất thống kê, ví điện tử bơm một yếu tố gây mù (**blinding factor**) ngẫu nhiên hóa vào từng bước chuyển trạng thái số liệu. Hệ thống sau đó lượng giá đa thức tính toán bằng một lược đồ cam kết đa thức (**polynomial commitment scheme**) tiên tiến, nén hàng ngàn ràng buộc tính toán vào một dung lượng mật mã nhỏ bé. Nhiều thập kỷ trước, việc tạo ra các bằng chứng như vậy đòi hỏi các vòng chất vấn qua lại cồng kềnh, nhưng các mạng lưới hiện đại sử dụng một bằng chứng không tiết lộ tri thức phi tương tác (**non-interactive zero-knowledge proof**), cho phép bên chứng minh đóng gói chứng cứ trong một gói tải duy nhất phát đi toàn mạng. Để đạt được niềm tin tham số ban đầu mà không cần cơ quan tập trung, các thành viên quốc tế đã tham gia vào một buổi lễ thiết lập tin cậy (**trusted setup ceremony**) có cấu trúc, phá hủy dữ liệu ngẫu nhiên bí mật tạm thời để ngăn ngừa việc tạo cửa sau gian lận. Khi các nút kiểm thực nhận được gói tin, họ thực thi một lượt xác minh zk-SNARK (**zk-SNARK verification**) tức thì, xác nhận rằng mệnh đề toán học là chính xác chỉ trong vài mili-giây. Nhờ thiết kế kiến trúc này, hệ thống thể hiện tính súc tích (**succinctness**) chưa từng có, duy trì kích thước bằng chứng dưới mức kilobyte bất kể độ phức tạp của bài toán. Phân tích toán học khắt khe bảo đảm một sai số tính vững (**soundness error**) không đáng kể, mang lại sự chắc chắn tuyệt đối về mặt thống kê rằng những kẻ xấu không thể thuyết phục mạng lưới tin vào một khẳng định sai lệch. Rút cuộc, toàn bộ giao thức dựa trên một lược đồ cam kết mật mã (**cryptographic commitment scheme**) vững chắc giúp ràng buộc các bên không thể đảo ngược các dữ liệu đã nhập trong khi vẫn thỏa mãn các quy tắc xác thực nghiêm ngặt của bên xác minh (**verifying party**).

---

## Review in context (Part 2: Homomorphic Computing and Post-Quantum Cryptography)

As confidential workloads migrate to public multi-tenant clouds, enterprise data architects increasingly mandate a robust **homomorphic encryption scheme** to protect sensitive intellectual property while in active computational use. Rather than decrypting customer databases to execute analytical queries, modern cloud platforms perform direct **ciphertext computation**, operating purely on mathematically obfuscated representations. For general-purpose enterprise software requiring limitless operational depth, researchers implement **fully homomorphic encryption**, eliminating the historical constraint of bounded circuit depths. However, because successive multiplications continuously introduce stochastic perturbations, engineers must closely monitor **noise budget depletion** to prevent algebraic corruption of raw plaintext. To sustain continuous processing loops without deciphering data, the software periodically invokes **cryptographic bootstrapping**, a computationally demanding routine that evaluates the cipher's own internal decryption circuit to reset the noise threshold. Concurrently, national security directives are confronting the looming reality of quantum supremacy. Because classical asymmetric algorithms suffer from an exponential **quantum speedup vulnerability** under Shor's algorithm, legacy cryptosystems face imminent obsolescence. To defend critical digital assets against future interception, engineers are turning toward **lattice-based cryptography**, which constructs mathematical trapdoors inside multi-dimensional geometric grids. These schemes derive their ironclad security foundations from **learning with errors hardness**, providing provable resistance against both classical and quantum adversaries. By demonstrating verifiable **quantum decryption resistance**, these post-quantum primitives guarantee that classified transmissions intercepted today cannot be decoded decades later. System architects are now executing a phased **post-quantum migration**, systematically auditing firmware, digital signatures, and hardware security modules. To establish secure ephemeral session keys across quantum-vulnerable communication links, networks are deploying an approved **key encapsulation mechanism** as the default handshake primitive. During implementation, developers mandate constant-time mathematical routines for **side-channel leakage mitigation**, preventing physical power spikes from leaking key bits. Ultimately, every upgraded enterprise certificate, revocation list, and trust root is coordinated under a modernized **public-key infrastructure**, anchoring planetary communications against future quantum decryption breakthroughs.

**Bản dịch tiếng Việt:**

Khi các khối lượng công việc bảo mật chuyển dịch sang các đám mây công cộng đa người dùng, các kiến trúc sư dữ liệu doanh nghiệp ngày càng bắt buộc áp dụng một lược đồ mã hóa đồng hình (**homomorphic encryption scheme**) mạnh mẽ để bảo vệ sở hữu trí tuệ nhạy cảm ngay trong quá trình tính toán tích cực. Thay vì giải mã các cơ sở dữ liệu khách hàng để thực thi các truy vấn phân tích, các nền tảng đám mây hiện đại thực hiện tính toán trên bản mã (**ciphertext computation**) trực tiếp, thao tác hoàn toàn trên các biểu diễn toán học đã được làm mờ. Đối với phần mềm doanh nghiệp đa năng đòi hỏi độ sâu vận hành không giới hạn, các nhà nghiên cứu triển khai mã hóa đồng hình toàn phần (**fully homomorphic encryption**), xóa bỏ rào cản lịch sử về độ sâu mạch tính toán hữu hạn. Tuy nhiên, vì các phép nhân liên tiếp liên tục đưa vào các nhiễu loạn ngẫu nhiên, các kỹ sư phải giám sát chặt chẽ sự cạn kiệt dung sai nhiễu (**noise budget depletion**) để ngăn ngừa sự sai lệch đại số của dữ liệu bản rõ thô. Để duy trì các vòng lặp xử lý liên tục mà không cần giải mã dữ liệu, phần mềm định kỳ kích hoạt quá trình tự nâng mật mã (**cryptographic bootstrapping**), một quy trình tốn kém tài nguyên tính toán giúp lượng giá chính mạch giải mã nội bộ của cipher nhằm thiết lập lại ngưỡng nhiễu an toàn. Đồng thời, các chỉ thị an ninh quốc gia đang đối mặt với thực tế nhãn tiền của ưu thế lượng tử. Bởi vì các thuật toán bất đối xứng cổ điển phải chịu một lỗ hổng trước gia tốc lượng tử (**quantum speedup vulnerability**) theo cấp số nhân dưới thuật toán Shor, các hệ thống mật mã cũ đang đứng trước nguy cơ lỗi thời cận kề. Để bảo vệ các tài sản số trọng yếu trước nguy cơ đánh chặn trong tương lai, các kỹ sư đang chuyển hướng sang mật mã học dựa trên lưới (**lattice-based cryptography**), vốn xây dựng các cửa bẫy toán học bên trong các mạng lưới hình học đa chiều. Các lược đồ này bắt nguồn nền tảng an ninh vững chắc như bàn thạch từ độ khó của bài toán học kèm nhiễu (**learning with errors hardness**), mang lại khả năng kháng cự đã được chứng minh trước cả đối thủ điện toán cổ điển lẫn lượng tử. Bằng cách thể hiện khả năng chống giải mã lượng tử (**quantum decryption resistance**) có thể kiểm chứng, các nguyên thủy hậu lượng tử này bảo đảm rằng các thông tin truyền dẫn tuyệt mật bị đánh chặn ngày hôm nay sẽ không thể bị giải mã hàng thập kỷ sau. Các kiến trúc sư hệ thống hiện đang thực hiện một cuộc chuyển dịch hậu lượng tử (**post-quantum migration**) theo từng giai đoạn, kiểm toán một cách có hệ thống từ firmware, chữ ký số đến các mô-đun bảo mật phần cứng. Để thiết lập các khóa phiên tạm thời an toàn qua các liên kết truyền thông dễ bị tổn thương trước máy tính lượng tử, các mạng lưới đang triển khai một cơ chế đóng gói khóa mật mã (**key encapsulation mechanism**) đã được phê duyệt làm phương thức bắt tay mặc định. Trong quá trình triển khai, các nhà phát triển bắt buộc áp dụng các quy trình toán học thời gian hằng số nhằm phục vụ việc giảm thiểu rò rỉ kênh phụ (**side-channel leakage mitigation**), ngăn chặn các đợt tăng vọt điện năng vật lý làm lộ các bit khóa bí mật. Rút cuộc, mọi chứng chỉ doanh nghiệp, danh sách thu hồi và gốc tin cậy được nâng cấp đều được điều phối dưới một hạ tầng khóa công khai (**public-key infrastructure**) hiện đại hóa, giữ vững nền tảng truyền thông toàn cầu trước những bước đột phá giải mã lượng tử trong tương lai.
