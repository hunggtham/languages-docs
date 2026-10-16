# C2 Vocabulary 197 — Binary session types, linear pi-calculus duality, and distributed protocol conformance

This lesson explores advanced concepts in **binary session types**, **linear pi-calculus duality**, and **distributed protocol conformance**. The 25 headwords cover session type channel endpoint duality, global multiparty protocol choreography, deadlock-freedom static guarantees, communication protocol projection, linear channel linearity consumption, and session subtyping polymorphism.

## 1. duality /ˈduːælɪti/

**Loại từ & vị trí trong câu:** `noun [C/U]`. Typically functions as a subject or object representing the structural mirroring between communicating channel endpoints in session-typed systems.

**Core meaning — English:** The principle that two interacting session endpoints possess complementary channel behaviors, such that sending in one corresponds precisely to receiving in the other.

**Core meaning & mental image — Tiếng Việt:** Tính đối ngẫu; hình ảnh chiếc khóa và chìa khóa khớp hoàn hảo, nơi hành vi truyền tin ở một đầu phản chiếu chính xác đầu kia.

**Grammar & collocations:** `endpoint duality` — sự đối ngẫu đầu cuối; `structural duality` — tính đối ngẫu cấu trúc; `duality violation` — sự vi phạm tính đối ngẫu.

**Register & nuance:** Highly technical, used in formal type theory, process calculi, and distributed systems architecture.

**Examples:** `<The type system enforces strict endpoint duality to guarantee that neither communicating participant deadlocks nor encounters unexpected message payloads.> → Hệ thống kiểu thực thi tính đối ngẫu đầu cuối nghiêm ngặt để đảm bảo rằng không bên tham gia giao tiếp nào bị kẹt deadlock hoặc gặp phải tải trọng thông điệp bất ngờ.`

**Liên kết tiếng Hàn:** `이중성` (二重性) — Tính nhị nguyên / đối ngẫu.

---

## 2. session /ˈsɛʃən/

**Loại/vị trí:** `noun [C]`. Serves as a primary noun denoting an established, protocol-governed bidirectional communication dialogue between participating processes.

**Core meaning:** A structured, multi-step sequence of interleaved communications adhering to a predetermined protocol between two or more participants.

**Core meaning & mental image:** Phiên giao tiếp; hình ảnh một cuộc hội thoại có cấu trúc chặt chẽ theo kịch bản định sẵn, nơi mỗi bước đi đều được quy định rõ ràng.

**Grammar & collocations:** `session type` — kiểu phiên; `session delegation` — sự ủy quyền phiên; `session initialization` — việc khởi tạo phiên.

**Register & nuance:** Standard terminology in concurrency theory and protocol verification.

**Examples:** `<Each concurrent session is statically tracked by the compiler to prevent unauthorized message interleaving or premature channel closure.> → Mỗi phiên đồng thời được trình biên dịch theo dõi tĩnh để ngăn chặn việc đan xen thông điệp trái phép hoặc đóng kênh sớm.`

**Liên kết tiếng Hàn:** `세션` — Phiên giao tiếp.

---

## 3. linearity /ˌlɪniˈærɪti/

**Loại/vị trí:** `noun [U]`. Functions as a property descriptor denoting resource usage constraints where values must be used exactly once.

**Core meaning:** A substructural type property requiring that a channel or resource be consumed precisely once during execution, preventing leaks or unauthorized duplication.

**Core meaning & mental image:** Tính tuyến tính; hình ảnh một chiếc vé chỉ dùng đúng một lần rồi xé bỏ, không được phép nhân bản hay bỏ quên.

**Grammar & collocations:** `channel linearity` — tính tuyến tính của kênh; `linearity constraint` — ràng buộc tuyến tính; `enforce linearity` — thực thi tính tuyến tính.

**Register & nuance:** Found in linear logic, affine type systems, and resource-aware programming languages like Rust or Clean.

**Examples:** `<Channel linearity ensures that message endpoints cannot be silently dropped or duplicated, eliminating orphaned socket connections.> → Tính tuyến tính của kênh đảm bảo rằng các đầu mối thông điệp không thể bị bỏ quên hoặc nhân bản âm thầm, loại bỏ các kết nối socket mồ côi.`

**Liên kết tiếng Hàn:** `선형성` (線形性) — Tính tuyến tính.

---

## 4. choreography /ˌkɔːriˈɑːɡrəfi/

**Loại/vị trí:** `noun [C/U]`. Used as a technical noun describing global interaction specifications among multiple distributed participants.

**Core meaning:** A global specification framework describing the holistic message exchanges and control flow among all participants in a distributed protocol.

**Core meaning & mental image:** Sơ đồ phối hợp tổng thể; hình ảnh biên đạo múa thiết kế toàn bộ đội hình và bước nhảy cho nhiều vũ công trên sân khấu.

**Grammar & collocations:** `global choreography` — sơ đồ phối hợp toàn cục; `choreography projection` — sự chiếu sơ đồ phối hợp; `protocol choreography` — sự phối hợp giao thức.

**Register & nuance:** Essential in multiparty session types (MPST) and service-oriented computing.

**Examples:** `<The global choreography outlines the expected message sequence between the client, authenticator, and database nodes before endpoint projection takes place.> → Sơ đồ phối hợp toàn cục phác thảo trình tự thông điệp dự kiến giữa các nút khách, bộ xác thực và cơ sở dữ liệu trước khi thực hiện chiếu đầu cuối.`

**Liên kết tiếng Hàn:** `안무 / 전체 프로토콜 설계` — Sự phối hợp / thiết kế giao thức tổng thể.

---

## 5. projection /prəˈdɛkʃən/

**Loại/vị trí:** `noun [C/U]`. Functions as a noun denoting the extraction of local behaviors from a global specification.

**Core meaning:** The algorithmic derivation of a local session type for a specific participant from a global choreography specification.

**Core meaning & mental image:** Phép chiếu; hình ảnh ngọn đèn chiếu bóng vật thể 3D lên tường phẳng để lấy góc nhìn của một người quan sát cụ thể.

**Grammar & collocations:** `endpoint projection` — phép chiếu đầu cuối; `projection failure` — lỗi phép chiếu; `projected local type` — kiểu cục bộ được chiếu.

**Register & nuance:** Core operation in multiparty session type verification.

**Examples:** `<Successful endpoint projection guarantees that each participant's local implementation faithfully adheres to the global multiparty design.> → Phép chiếu đầu cuối thành công đảm bảo rằng việc thực thi cục bộ của từng người tham gia tuân thủ trung thành thiết kế đa bên toàn cục.`

**Liên kết tiếng Hàn:** `투영` (投影) — Phép chiếu.

---

## 6. endpoint /ˈɛndpɔɪnt/

**Loại/vị trí:** `noun [C]`. Serves as a noun representing a distinct communication handle or channel participant in a session type.

**Core meaning:** One side of a bidirectional communication channel possessing a specific protocol type that dictates permitted send and receive operations.

**Core meaning & mental image:** Đầu mối giao tiếp; hình ảnh hai đầu ống nghe điện thoại dây thép nối giữa hai người, mỗi đầu có quy tắc riêng được phép nói hay nghe.

**Grammar & collocations:** `channel endpoint` — đầu mối kênh; `endpoint type` — kiểu đầu mối; `remote endpoint` — đầu mối từ xa.

**Register & nuance:** Widely used in networking and session type theory.

**Examples:** `<The type checker analyzes each endpoint independently to verify that communication actions proceed in strict protocol order.> → Trình kiểm tra kiểu phân tích từng đầu mối độc lập để xác minh rằng các hành động giao tiếp diễn ra theo đúng thứ tự giao thức nghiêm ngặt.`

**Liên kết tiếng Hàn:** `엔드포인트 / 종단점` (終端點) — Điểm cuối / đầu mối.

---

## 7. delegation /ˌdɛlɪˈɡeɪʃən/

**Loại/vị trí:** `noun [C/U]`. Used as a noun indicating the transfer of channel ownership or communication capability across processes.

**Core meaning:** The capability within session types to transmit an active channel endpoint as a payload inside another message, transferring communication rights.

**Core meaning & mental image:** Quyền ủy nhiệm kênh; hình ảnh trao tay một chiếc chìa khóa phòng họp đặc biệt cho người khác để họ tiếp tục làm việc thay mình.

**Grammar & collocations:** `channel delegation` — ủy nhiệm kênh; `session delegation` — ủy nhiệm phiên; `delegated capability` — năng lực được ủy nhiệm.

**Register & nuance:** Advanced feature in session-typed concurrency allowing dynamic network topology evolution.

**Examples:** `<Session delegation enables a worker thread to hand off an active database stream to a dedicated logging process securely.> → Việc ủy nhiệm phiên cho phép một luồng công việc bàn giao luồng cơ sở dữ liệu đang hoạt động cho một tiến trình ghi log chuyên dụng một cách an toàn.`

**Liên kết tiếng Hàn:** `위임` (委任) — Sự ủy nhiệm / ủy quyền.

---

## 8. interleave /ˈɪntərliːv/

**Loại/vị trí:** `verb [I/T]` or `noun [C]`. Functions as a verb describing the non-deterministic execution ordering of concurrent operations.

**Core meaning:** To combine or alternate execution steps from multiple concurrent processes such that their actions overlap in time without violating safety properties.

**Core meaning & mental image:** Đan xen; hình ảnh hai bộ bài được trộn lẫn vào nhau (shuffling), xen kẽ các lá bài từ bộ này sang bộ khác nhưng vẫn giữ thứ tự nội bộ.

**Grammar & collocations:** `message interleaving` — sự đan xen thông điệp; `interleaved execution` — quá trình thực thi đan xen; `arbitrary interleaving` — sự đan xen tùy ý.

**Register & nuance:** Fundamental concept in concurrency theory and model checking.

**Examples:** `<The verification engine explores every possible message interleaving to detect hidden race conditions and deadlocks.> → Công cụ kiểm định khám phá mọi khả năng đan xen thông điệp có thể xảy ra để phát hiện các điều kiện tranh chấp ẩn và kẹt deadlock.`

**Liên kết tiếng Hàn:** `인터리브 / 끼워넣기` — Đan xen / xen kẽ.

---

## 9. deadlock /ˈdɛdˌlɑːk/

**Loại/vị trí:** `noun [C/U]` or `verb`. Used as a noun denoting a permanent freezing state of interacting processes waiting on each other.

**Core meaning:** A systemic condition where two or more competing concurrent processes are permanently blocked because each is waiting for a resource or message held by another.

**Core meaning & mental image:** Trạng thái bế tắc; hình ảnh hai chiếc xe trên đường hẹp cùng lùi lại nhưng vướng nhau, không ai nhường ai và cả hai đứng im mãi mãi.

**Grammar & collocations:** `deadlock freedom` — tính tự do bế tắc; `potential deadlock` — nguy cơ bế tắc; `deadlock-free protocol` — giao thức không có bế tắc.

**Register & nuance:** Critical safety property in operating systems, databases, and session-typed languages.

**Examples:** `<Static session typing guarantees deadlock freedom by ensuring that communication graphs remain acyclic and properly dualized.> → Kiểu phiên tĩnh đảm bảo tính tự do bế tắc bằng cách đảm bảo rằng các đồ thị giao tiếp vẫn không có chu trình và được đối ngẫu đúng cách.`

**Liên kết tiếng Hàn:** `교착 상태` (交錯狀態) — Trạng thái bế tắc / Deadlock.

---

## 10. subtyping /ˈsʌbˌtaɪpɪŋ/

**Loại/vị trí:** `noun [U]`. Functions as a noun representing the relation where a type can be safely substituted in place of another.

**Core meaning:** A polymorphic relation allowing a session type to be replaced by a more permissive or specialized one (contravariant on input, covariant on output).

**Core meaning & mental image:** Tính phân loại con; hình ảnh một tấm vé đa năng có thể dùng ở nhiều cổng kiểm soát hơn mức yêu cầu tối thiểu của một sự kiện cụ thể.

**Grammar & collocations:** `session subtyping` — tính phân loại con phiên; `subtyping relation` — quan hệ phân loại con; `contravariant subtyping` — tính phân loại con đảo chiều.

**Register & nuance:** Advanced type theory concept ensuring flexible yet safe interface substitution.

**Examples:** `<Session subtyping permits a server to accept a wider range of input payloads than strictly requested without breaking protocol contracts.> → Tính phân loại con phiên cho phép máy chủ chấp nhận dải tải trọng đầu vào rộng hơn mức yêu cầu nghiêm ngặt mà không làm hỏng hợp đồng giao thức.`

**Liên kết tiếng Hàn:** `서브타이핑 / 하위 타입화` — Tính phân loại con.

---

## 11. pi-calculus /paɪ ˈkælkjʊləs/

**Loại/vị trí:** `noun [U]`. Serves as a formal noun representing the process calculus model of concurrent computation involving name passing.

**Core meaning:** A process calculus introduced by Milner, Parrow, and Walker in which process interactions occur by communicating channel names over communication links.

**Core meaning & mental image:** Hệ tích chập Pi; hình ảnh một mạng lưới các thực thể trao đổi các địa chỉ liên lạc động cho nhau để thiết lập các kênh trò chuyện mới.

**Grammar & collocations:** `linear pi-calculus` — hệ tích chập pi tuyến tính; `pi-calculus process` — tiến trình hệ tích chập pi; `typed pi-calculus` — hệ tích chập pi có kiểu.

**Register & nuance:** Foundational theoretical model in concurrency theory and distributed systems formal verification.

**Examples:** `<Linear extensions to the pi-calculus allow researchers to model resource consumption alongside message passing rigorously.> → Các phần mở rộng tuyến tính cho hệ tích chập pi cho phép các nhà nghiên cứu mô hình hóa việc tiêu thụ tài nguyên song song với việc truyền thông điệp một cách chặt chẽ.`

**Liên kết tiếng Hàn:** `파이 계산법` (Pi 計算法) — Phép tính Pi (Pi-calculus).

---

## 12. polymorphism /ˌpɑːliˈmɔːrfɪzəm/

**Loại/vị trí:** `noun [U]`. Functions as a noun denoting the provision of a single interface to entities of different types.

**Core meaning:** The ability of code or session specifications to operate generically over varying data types or channel structures without recompilation.

**Core meaning & mental image:** Tính đa hình; hình ảnh một chiếc chìa vạn năng có thể mở nhiều ổ khóa có hình dáng răng cưa khác nhau.

**Grammar & collocations:** `session polymorphism` — tính đa hình phiên; `parametric polymorphism` — tính đa hình tham số; `polymorphic channel` — kênh đa hình.

**Register & nuance:** Standard in modern programming languages and advanced type systems.

**Examples:** `<Polymorphic session types allow libraries to abstract over payload formats while maintaining strict protocol compliance.> → Các kiểu phiên đa hình cho phép các thư viện trừu tượng hóa các định dạng tải trọng trong khi vẫn duy trì sự tuân thủ giao thức nghiêm ngặt.`

**Liên kết tiếng Hàn:** `다형성` (多形性) — Tính đa hình.

---

## 13. invariant /ɪnˈvɛriənt/

**Loại/vị trí:** `noun [C]` or `adjective`. Used as a noun or adjective describing properties that remain unchanged throughout execution.

**Core meaning:** A condition or logical assertion that holds true across all valid states and transitions of a running concurrent system.

**Core meaning & mental image:** Bất biến; hình ảnh cột trụ trung tâm của ngôi nhà không bao giờ dịch chuyển dù các bức tường xung quanh có thay đổi thế nào.

**Grammar & collocations:** `type invariant` — bất biến kiểu; `structural invariant` — bất biến cấu trúc; `maintain invariant` — duy trì bất biến.

**Register & nuance:** Essential for formal verification, program correctness, and runtime safety.

**Examples:** `<The type checker enforces protocol invariants across all distributed nodes to prevent unauthorized state transitions.> → Trình kiểm tra kiểu thực thi các bất biến giao thức trên tất cả các nút phân tán để ngăn chặn các chuyển đổi trạng thái trái phép.`

**Liên kết tiếng Hàn:** `불변식 / 불변량` (不變式) — Biểu thức bất biến.

---

## 14. branch /bræntʃ/

**Loại/vị trí:** `noun [C]` or `verb`. Used as a noun representing internal choice points in session-typed protocols.

**Core meaning:** A protocol primitive allowing a participant to offer or select among multiple alternative continuation paths based on incoming runtime choices.

**Core meaning & mental image:** Nhánh rẽ; hình ảnh ngã ba đường nơi người đi đường phải chọn rẽ trái hoặc rẽ phải tùy theo biển chỉ dẫn tiếp theo.

**Grammar & collocations:** `internal choice branch` — nhánh lựa chọn nội bộ; `external choice branch` — nhánh lựa chọn bên ngoài; `branching protocol` — giao thức rẽ nhánh.

**Register & nuance:** Core feature in session types handling conditional logic and protocol branching.

**Examples:** `<The server offers a binary branch where the client can choose either to authenticate or terminate the session immediately.> → Máy chủ cung cấp một nhánh nhị phân nơi máy khách có thể chọn xác thực hoặc chấm dứt phiên ngay lập tức.`

**Liên kết tiếng Hàn:** `분기` (分岐) — Nhánh rẽ / Phân nhánh.

---

## 15. recursion /rɪˈkɜːrʒən/

**Loại/vị trí:** `noun [U]`. Functions as a noun describing self-referential protocol definitions enabling infinite loops.

**Core meaning:** A foundational mechanism in session types allowing protocols to specify repeating message sequences and infinite conversation loops finitely.

**Core meaning & mental image:** Đệ quy; hình ảnh hai chiếc gương đặt đối diện nhau tạo ra chuỗi phản chiếu kéo dài vô tận vào sâu bên trong.

**Grammar & collocations:** `protocol recursion` — đệ quy giao thức; `recursive session type` — kiểu phiên đệ quy; `infinite recursion` — đệ quy vô hạn.

**Register & nuance:** Necessary for describing iterative network services like database servers or command-line shells.

**Examples:** `<Protocol recursion is modeled using fixpoint operators to permit indefinitely repeating request-response interactions safely.> → Đệ quy giao thức được mô hình hóa bằng các toán tử điểm cố định cho phép các tương tác yêu cầu-phản hồi lặp lại vô thời hạn một cách an toàn.`

**Liên kết tiếng Hàn:** `재귀` (再歸) — Đệ quy.

---

## 16. payload /ˈpeɪˌloʊd/

**Loại/vị trí:** `noun [C]`. Serves as a noun representing the actual data content transmitted alongside control metadata.

**Core meaning:** The substantive data values or encapsulated channel endpoints carried within a network message packet.

**Core meaning & mental image:** Tải trọng thông điệp; hình ảnh khoang chứa hàng của máy bay chở khách, chứa các kiện hàng thực sự thay vì chỉ là vỏ máy bay.

**Grammar & collocations:** `payload type` — kiểu tải trọng; `serialized payload` — tải trọng được tuần tự hóa; `payload validation` — kiểm tra tải trọng.

**Register & nuance:** Ubiquitous in networking, distributed systems, and compiler design.

**Examples:** `<The protocol type specifies both the exact payload data type and the continuation behavior expected after transmission.> → Kiểu giao thức chỉ định cả kiểu dữ liệu tải trọng chính xác lẫn hành vi tiếp nối dự kiến sau khi truyền.`

**Liên kết tiếng Hàn:** `페이로드 / 유효 데이터` — Tải trọng / Dữ liệu thực thi.

---

## 17. race /ˈreɪs/

**Loại/vị trí:** `noun [C]` or `verb`. Used as a noun referring to unintended concurrency bugs where execution order affects correctness.

**Core meaning:** A concurrency hazard where multiple threads or processes access shared resources or communication channels simultaneously without proper synchronization.

**Core meaning & mental image:** Tranh chấp dữ liệu; hình ảnh hai vận động viên lao vào cùng một ô cửa hẹp cùng một lúc gây va chạm hỗn loạn.

**Grammar & collocations:** `data race` — tranh chấp dữ liệu; `race condition` — điều kiện tranh chấp; `race-free guarantee` — đảm bảo không có tranh chấp.

**Register & nuance:** Major source of bugs in concurrent software; session types eliminate communication races by design.

**Examples:** `<Linear session types completely eradicate message races by statically enforcing unique ownership of channel endpoints.> → Các kiểu phiên tuyến tính hoàn toàn xóa bỏ tranh chấp thông điệp bằng cách thực thi tĩnh quyền sở hữu duy nhất đối với các đầu mối kênh.`

**Liên kết tiếng Hàn:** `경쟁 상태` (競爭狀態) — Điều kiện tranh chấp (Race condition).

---

## 18. soundness /ˈsaʊndnɪs/

**Loại/vị trí:** `noun [U]`. Functions as a noun representing the mathematical guarantee that a type system only accepts truly safe programs.

**Core meaning:** The formal property stating that if a type system or verification tool approves a program, that program is guaranteed to satisfy its safety specifications (e.g., freedom from deadlocks).

**Core meaning & mental image:** Tính đúng đắn vững chắc; hình ảnh cây cầu được kiểm định kỹ sư chứng nhận không bao giờ sập dưới tải trọng thiết kế.

**Grammar & collocations:** `type soundness` — tính đúng đắn của hệ thống kiểu; `soundness theorem` — định lý tính đúng đắn; `logical soundness` — tính đúng đắn logic.

**Register & nuance:** Rigorous mathematical concept in formal methods and programming language semantics.

**Examples:** `<The soundness proof of the session type system relies on preservation and progress lemmas for concurrent processes.> → Chứng minh tính đúng đắn của hệ thống kiểu phiên dựa vào các bổ đề bảo toàn và tiến triển cho các tiến trình đồng thời.`

**Liên kết tiếng Hàn:** `건전성 / 타당성` (健全性) — Tính lành mạnh / đúng đắn.

---

## 19. completeness /kəmˈpliːtnɪs/

**Loại/vị trí:** `noun [U]`. Used as a noun describing the dual property that all valid safe programs can be successfully typed or verified.

**Core meaning:** The formal property confirming that a type system or verification engine can successfully approve all programs that are semantically safe and well-behaved.

**Core meaning & mental image:** Tính đầy đủ; hình ảnh chiếc lưới đánh cá gom bắt được toàn bộ cá ngon trong vùng nước mà không bỏ sót con nào hợp lệ.

**Grammar & collocations:** `completeness theorem` — định lý tính đầy đủ; `relative completeness` — tính đầy đủ tương đối; `expressive completeness` — tính đầy đủ biểu cảm.

**Register & nuance:** Complements soundness in formal logic and type checking theory.

**Examples:** `<While absolute completeness is often undecidable for rich process calculi, syntactic approximations achieve high practical utility.> → Mặc dù tính đầy đủ tuyệt đối thường không thể quyết định đối với các hệ tích chập tiến trình phong phú, các xấp chỉ cú pháp đạt được tính hữu dụng thực tế cao.`

**Liên kết tiếng Hàn:** `완전성` (完全性) — Tính đầy đủ.

---

## 20. serialization /ˌsɪriəlaɪˈzeɪʃən/

**Loại/vị trí:** `noun [U]`. Functions as a noun denoting the conversion of complex data structures into byte streams.

**Core meaning:** The process of translating in-memory data structures, channel endpoints, or object graphs into a flat byte format suitable for network transmission.

**Core meaning & mental image:** Tuần tự hóa; hình ảnh gấp gọn món đồ chơi mô hình 3D thành một dải băng phẳng dài để dễ dàng nhét vào phong bì gửi qua bưu điện.

**Grammar & collocations:** `type-safe serialization` — tuần tự hóa an toàn kiểu; `serialization overhead` — chi phí tuần tự hóa; `deserialization failure` — lỗi giải tuần tự hóa.

**Register & nuance:** Essential for distributed systems communication and persistent storage.

**Examples:** `<Network-level protocols require robust serialization layers to transmit session-typed payloads across heterogeneous operating systems.> → Các giao thức cấp mạng yêu cầu các lớp tuần tự hóa mạnh mẽ để truyền tải trọng được nhập phiên qua các hệ điều hành dị thể.`

**Liên列 kết tiếng Hàn:** `직렬화` (序列化) — Sự tuần tự hóa.

---

## 21. choreography /ˌkɔːriˈɑːɡrəfi/ (Repeated alternative: orchestration) -> orchestration /ˌɔːrstrɪˈqeɪʃən/ -> let's use orchestration /ˌɔːrstrɪˈeɪʃən/

**Loại/vị trí:** `noun [U]`. Serves as a noun describing centralized coordination of distributed services.

**Core meaning:** The automated arrangement, coordination, and management of complex computer systems, middleware, and services through a centralized controller.

**Core meaning & mental image:** Sự điều phối trung tâm; hình ảnh người nhạc trưởng đứng trước dàn nhạc chỉ huy nhịp điệu cho từng nhạc cụ vang lên đúng lúc.

**Grammar & collocations:** `service orchestration` — điều phối dịch vụ; `container orchestration` — điều phối container; `centralized orchestration` — điều phối tập trung.

**Register & nuance:** Contrasts with choreography; orchestration relies on a central coordinator, whereas choreography is decentralized.

**Examples:** `<Unlike decentralized choreography, protocol orchestration relies on a dedicated mediator node to route and supervise all session messages.> → Không giống như sự phối hợp phi tập trung, sự điều phối giao thức dựa vào một nút trung gian chuyên dụng để định tuyến và giám sát tất cả các thông điệp phiên.`

**Liên kết tiếng Hàn:** `오케스트레이션 / 조율` — Sự điều phối hệ thống.

---

## 22. session /sɛʃən/ (already used) -> Let's use `stub` /stʌb/

**Loại/vị trí:** `noun [C]`. Functions as a noun denoting a placeholder or proxy module generated from interface specifications.

**Core meaning:** A small piece of code generated automatically from a session type specification that handles network marshalling and unmarshalling on behalf of client applications.

**Core meaning & mental image:** Đoạn mã giả / mã đệm; hình ảnh đoạn chân giả gắn vào khớp để kết nối cơ thể với thiết bị bên ngoài.

**Grammar & collocations:** `client stub` — mã đệm máy khách; `generated stub` — mã đệm được tạo tự động; `stub compilation` — việc biên dịch mã đệm.

**Register & nuance:** Common in RPC frameworks, remote method invocation, and session type compiler toolchains.

**Examples:** `<The compiler automatically generates type-safe stubs from the projected local session types to simplify network programming.> → Trình biên dịch tự động tạo ra các mã đệm an toàn kiểu từ các kiểu phiên cục bộ được chiếu để đơn giản hóa lập trình mạng.`

**Liên kết tiếng Hàn:** `스텁` — Mã đệm / Stub.

---

## 23. monitor /ˈmɑːnɪtər/

**Loại/vị trí:** `noun [C]` or `verb`. Used as a noun or verb describing runtime enforcement of protocol compliance.

**Core meaning:** A runtime mechanism or assertion checker that intercepts network traffic to verify that interacting components adhere strictly to specified session types.

**Core meaning & mental image:** Bộ giám sát; hình ảnh camera an ninh theo dõi hành vi của người ra vào tòa nhà để đảm bảo không ai vi phạm nội quy.

**Grammar & collocations:** `runtime monitor` — bộ giám sát thời gian chạy; `protocol monitor` — bộ giám sát giao thức; `monitor enforcement` — việc thực thi giám sát.

**Register & nuance:** Useful when complete static verification is infeasible due to untrusted external components.

**Examples:** `<A dynamic protocol monitor intercepts incoming messages at runtime to safeguard legacy components against malicious session violations.> → Bộ giám sát giao thức động chặn các thông điệp đến ở thời gian chạy để bảo vệ các thành phần cũ chống lại các vi phạm phiên độc hại.`

**Liên kết tiếng Hàn:** `모니터 / 감시 장치` — Bộ giám sát.

---

## 24. channel /ˈtʃænl/

**Loại/vị trí:** `noun [C]`. Serves as a noun representing the communication conduit between concurrent processes.

**Core meaning:** A typed communication pathway through which concurrent processes exchange messages in accordance with a specified session protocol.

**Core meaning & mental image:** Kênh truyền thông; hình ảnh ống nước nối liền hai bồn chứa, dòng nước chảy qua mang theo dữ liệu giữa các tiến trình.

**Grammar & collocations:** `typed channel` — kênh có kiểu; `unidirectional channel` — kênh một chiều; `channel contraction` — sự thu gọn kênh.

**Register & nuance:** Fundamental abstraction in concurrent programming models like Go, Erlang, and session-typed languages.

**Examples:** `<Passing a typed channel across another channel enables dynamic reconfiguration of the distributed communication topology.> → Truyền một kênh có kiểu qua một kênh khác cho phép cấu hình lại động topology giao tiếp phân tán.`

**Liên kết tiếng Hàn:** `채널` — Kênh truyền.

---

## 25. subtyping /sʌbˌtaɪpɪŋ/ (already used) -> Let's use `session` (already used) -> Let's use `bound` /baʊnd/

**Loại/vị trí:** `noun [C]` or `adjective`. Functions as a noun or adjective representing constraints placed on type variables or values.

**Core meaning:** A formal limitation or constraint placed upon polymorphic type variables in session specifications to ensure safe substitution.

**Core meaning & mental image:** Giới hạn ràng buộc; hình ảnh hàng rào biên giới quy định phạm vi di chuyển tối đa của đàn gia súc.

**Grammar & collocations:** `type bound` — giới hạn kiểu; `upper bound` — giới hạn trên; `lower bound` — giới hạn dưới.

**Register & nuance:** Standard terminology in type theory and generic programming.

**Examples:** `<Session type bounds ensure that parameterized protocol templates only accept channel endpoints satisfying exact capability requirements.> → Các giới hạn kiểu phiên đảm bảo rằng các mẫu giao thức được tham số hóa chỉ chấp nhận các đầu mối kênh thỏa mãn các yêu cầu năng lực chính xác.`

**Liên kết tiếng Hàn:** `바운드 / 상하한선` (Bound) — Giới hạn ràng buộc.

---

## Review in context (Part 1: Binary Session Types and Linear Pi-Calculus Duality)
Modern distributed systems require rigorous correctness guarantees, leading researchers to adopt **binary session types** and **linear pi-calculus duality**. When designing a **session**, developers rely on **linearity** to ensure that every **endpoint** is consumed precisely once without leaks or duplication. A global **choreography** defines the overall communication flow, which is then transformed via **projection** into local **endpoint** specifications. Because multiple processes run concurrently, their operations may **interleave** in complex ways. However, static type systems guarantee **deadlock** freedom by enforcing strict **duality** and channel protocol rules. Furthermore, advanced systems support **subtyping** and **polymorphism**, allowing flexible protocol extension and reusable communication components.

**Bản dịch tiếng Việt:**
Các hệ thống phân tán hiện đại đòi hỏi các đảm bảo tính đúng đắn nghiêm ngặt, dẫn đến việc các nhà nghiên cứu áp dụng **kiểu phiên nhị phân** và **tính đối ngẫu hệ tích chập pi tuyến tính**. Khi thiết kế một **phiên**, các nhà phát triển dựa vào **tính tuyến tính** để đảm bảo rằng mọi **đầu mối** được tiêu thụ chính xác một lần mà không bị rò rỉ hoặc nhân bản. Một **sơ đồ phối hợp** toàn cục xác định luồng giao thông tổng thể, sau đó được biến đổi thông qua **phép chiếu** thành các thông số kỹ thuật **đầu mối** cục bộ. Do nhiều tiến trình chạy đồng thời, các hoạt động của chúng có thể **đan xen** theo những cách phức tạp. Tuy nhiên, các hệ thống kiểu tĩnh đảm bảo tính tự do **bế tắc** bằng cách thực thi nghiêm ngặt **tính đối ngẫu** và các quy tắc giao thức kênh. Hơn nữa, các hệ thống tiên tiến hỗ trợ **phân loại con** và **tính đa hình**, cho phép mở rộng giao thức linh hoạt và các thành phần giao tiếp có thể tái sử dụng.

---

## Review in context (Part 2: Distributed Protocols, Invariants, and Runtime Monitors)
To maintain system safety, engineers establish strict protocol **invariants** across all participating nodes. During protocol execution, participants choose among alternative paths using a **branch** primitive, while infinite communication loops are modeled cleanly through **recursion**. Every transmitted message carries a specific **payload** that must conform to type definitions. By enforcing channel ownership statically, the architecture eliminates any potential **race** condition. The theoretical **soundness** of the type system ensures that approved programs never fail at runtime, while **completeness** reflects its expressive power. Before transmission, data structures undergo strict **serialization**, and generated **stubs** simplify remote procedure calls. While static verification is ideal, a dynamic **monitor** can intercept network traffic to enforce policies. Ultimately, each typed **channel** operates within a well-defined **bound**, guaranteeing reliable distributed execution.

**Bản dịch tiếng Việt:**
Để duy trì an toàn hệ thống, các kỹ sư thiết lập các **bất biến** giao thức nghiêm ngặt trên tất cả các nút tham gia. Trong quá trình thực thi giao thức, những người tham gia chọn giữa các đường dẫn thay thế bằng cách sử dụng nguyên thủy **nhánh rẽ**, trong khi các vòng lặp giao tiếp vô hạn được mô hình hóa gọn gàng thông qua **đệ quy**. Mọi thông điệp được truyền đi đều mang một **tải trọng** cụ thể phải tuân thủ các định nghĩa kiểu. Bằng cách thực thi quyền sở hữu kênh một cách tĩnh, kiến trúc loại bỏ mọi điều kiện **tranh chấp** tiềm ẩn. Tính **đúng đắn** lý thuyết của hệ thống kiểu đảm bảo rằng các chương trình được phê duyệt không bao giờ thất bại khi chạy, trong khi tính **đầy đủ** phản ánh sức mạnh biểu cảm của nó. Trước khi truyền, các cấu trúc dữ liệu trải qua quá trình **tuần tự hóa** nghiêm ngặt và các **mã đệm** được tạo đơn giản hóa các lệnh gọi thủ tục từ xa. Mặc dù xác minh tĩnh là lý tưởng, một **bộ giám sát** động có thể chặn lưu lượng mạng để thực thi các chính sách. Cuối cùng, mỗi **kênh** có kiểu hoạt động trong một **giới hạn** được xác định rõ ràng, đảm bảo việc thực thi phân tán đáng tin cậy.
