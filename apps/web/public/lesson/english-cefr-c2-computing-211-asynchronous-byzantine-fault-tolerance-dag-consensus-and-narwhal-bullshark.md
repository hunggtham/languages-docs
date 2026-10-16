# C2 Vocabulary 211 — Asynchronous Byzantine Fault Tolerance (aBFT), directed acyclic graph (DAG) consensus, and decoupled data availability

## 1. asynchronous Byzantine fault tolerance
- **IPA:** /eɪˈsɪŋkrənəs ˈbɪzəntiən fɔːlt ˈtɑːrərəns/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); thường làm chủ ngữ hoặc tân ngữ trong các bài báo kỹ thuật về phân tán.
- **Core meaning — English:** A property of distributed consensus protocols that guarantee safety and liveness under asynchronous network conditions even when up to one-third of the validator nodes are maliciously compromised or arbitrarily faulty.
- **Core meaning & mental image — Tiếng Việt:** Khả năng chịu lỗi Byzantine bất đồng bộ. Hình ảnh: Một mạng lưới thông tin liên lạc hỗn loạn, không có đồng hồ chung, nơi một số nút mạng cố tình tung tin sai lệch nhưng hệ thống vẫn đạt được đồng thuận an toàn.
- **Grammar & collocations:**
  - achieve asynchronous Byzantine fault tolerance (đạt được khả năng chịu lỗi Byzantine bất đồng bộ)
  - robust asynchronous Byzantine fault tolerance (khả năng chịu lỗi Byzantine bất đồng bộ vững chắc)
  - protocol with asynchronous Byzantine fault tolerance (giao thức có khả năng chịu lỗi Byzantine bất đồng bộ)
- **Register & nuance:** Highly technical; used in advanced distributed systems, blockchain architecture, and cryptographic protocol design.
- **Examples:**
  - *Example 1:* Designing a consensus mechanism that achieves asynchronous Byzantine fault tolerance eliminates the vulnerability of timing assumptions. (Việc thiết kế cơ chế đồng thuận đạt được khả năng chịu lỗi Byzantine bất đồng bộ loại bỏ điểm yếu về giả định thời gian.)
  - *Example 2:* The protocol relies on asynchronous Byzantine fault tolerance to ensure progress despite severe network delays. (Giao thức dựa vào khả năng chịu lỗi Byzantine bất đồng bộ để đảm bảo tiến độ bất chấp độ trễ mạng nghiêm trọng.)
- **Liên kết tiếng Hàn:** 비동기 비잔틴 결함 허용 (非同期 - 缺陷 - 許可) — Hệ thống đồng thuận phân tán xử lý thông tin bất đồng bộ.

## 2. directed acyclic graph consensus
- **IPA:** /daɪˈrɛktɪd ˈeɪsɪklɪk ɡræf kənˈsɛnsəs/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); thường làm trung tâm của các kiến trúc blockchain thế hệ mới.
- **Core meaning — English:** A distributed ledger consensus mechanism where transaction blocks reference multiple predecessors, forming a directed acyclic graph rather than a linear chain, thereby enabling parallel transaction validation.
- **Core meaning & mental image — Tiếng Việt:** Đồng thuận đồ thị có hướng không có chu trình (DAG). Hình ảnh: Một mạng lưới các khối dữ liệu đan xen nhau như mạng nhện hướng về phía trước, không quay vòng, cho phép xử lý song song thay vì xếp hàng một chiều.
- **Grammar & collocations:**
  - implement directed acyclic graph consensus (triển khai đồng thuận đồ thị có hướng)
  - high-throughput directed acyclic graph consensus (đồng thuận DAG thông lượng cao)
  - directed acyclic graph consensus protocol (giao thức đồng thuận DAG)
- **Register & nuance:** Specialized academic and engineering terminology in distributed ledgers and scalable network topologies.
- **Examples:**
  - *Example 1:* By adopting directed acyclic graph consensus, the network bypasses the bottlenecks inherent in traditional linear blockchains. (Bằng cách áp dụng đồng thuận đồ thị có hướng, mạng lưới vượt qua các nút thắt cổ chai vốn có trong blockchain tuyến tính truyền thống.)
  - *Example 2:* Directed acyclic graph consensus allows multiple validators to propose blocks concurrently without waiting for a single leader. (Đồng thuận DAG cho phép nhiều trình xác thực đề xuất khối đồng thời mà không phải chờ một người dẫn đầu duy nhất.)
- **Liên kết tiếng Hàn:** 방향성 비순환 그래프 합의 (方向性 非循環 - 合意) — Cấu trúc dữ liệu đồ thị không chu trình phục vụ đồng thuận phân tán.

## 3. decoupled data availability engine
- **IPA:** /diːˈkʌpəld ˈdeɪtə əˌveɪləˈbɪləti ˈɛndʒɪn/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); thường làm tân ngữ chỉ thành phần kiến trúc phân tách.
- **Core meaning — English:** An independent architectural subsystem responsible for disseminating, storing, and proving the availability of transaction data separately from the transaction ordering and execution consensus logic.
- **Core meaning & mental image — Tiếng Việt:** Động cơ sẵn có dữ liệu tách rời. Hình ảnh: Một kho chứa hàng độc lập, nơi mọi kiện hàng (dữ liệu) được kiểm tra và lưu trữ riêng biệt với dây chuyền lắp ráp chính (thực thi giao dịch), giúp dây chuyền không bị tắc nghẽn.
- **Grammar & collocations:**
  - deploy a decoupled data availability engine (triển khai động cơ sẵn có dữ liệu tách rời)
  - scalable decoupled data availability engine (động cơ sẵn có dữ liệu tách rời có khả năng mở rộng)
  - architectural decoupled data availability engine (động cơ sẵn có dữ liệu tách rời về mặt kiến trúc)
- **Register & nuance:** Advanced systems engineering and modular blockchain architecture.
- **Examples:**
  - *Example 1:* The new architecture introduces a decoupled data availability engine to guarantee that light clients can verify state transitions securely. (Kiến trúc mới giới thiệu động cơ sẵn có dữ liệu tách rời để đảm bảo các máy khách nhẹ có thể xác minh chuyển đổi trạng thái một cách an toàn.)
  - *Example 2:* Separating consensus from execution requires a robust decoupled data availability engine. (Việc tách biệt đồng thuận khỏi việc thực thi đòi hỏi một động cơ sẵn có dữ liệu tách rời vững chắc.)
- **Liên kết tiếng Hàn:** 분리된 데이터 가용성 엔진 (分離 - 數據 可用性 -) — Động cơ phân tách việc lưu trữ và xác thực dữ liệu.

## 4. Narwhal mempool DAG layer
- **IPA:** /ˈnɑːrwəl ˈmɛmpuːl dæɡ ˈleɪər/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); đóng vai trò tầng lưu trữ tạm thời trong kiến trúc đồng thuận.
- **Core meaning — English:** A high-throughput, DAG-based memory pool protocol that ensures reliable transaction dissemination and batch creation prior to consensus ordering.
- **Core meaning & mental image — Tiếng Việt:** Tầng bộ nhớ đệm đồ thị Narwhal. Hình ảnh: Một trạm trung chuyển dữ liệu dạng mạng lưới rộng lớn, nơi các giao dịch chưa được xác nhận được gom thành các gói và lan truyền nhanh chóng qua các nút mạng.
- **Grammar & collocations:**
  - integrate the Narwhal mempool DAG layer (tích hợp tầng mempool DAG Narwhal)
  - Narwhal mempool DAG layer architecture (kiến trúc tầng mempool DAG Narwhal)
  - optimize the Narwhal mempool DAG layer (tối ưu hóa tầng mempool DAG Narwhal)
- **Register & nuance:** Specific to modern high-performance BFT consensus frameworks (e.g., Mysticeti, Sui, Aptos ecosystem technologies).
- **Examples:**
  - *Example 1:* The Narwhal mempool DAG layer decouples transaction dissemination from consensus ordering to maximize throughput. (Tầng mempool DAG Narwhal tách biệt việc truyền phát giao dịch khỏi việc sắp xếp đồng thuận nhằm tối đa hóa thông lượng.)
  - *Example 2:* Transactions are validated and stored in the Narwhal mempool DAG layer before being processed by Bullshark. (Các giao dịch được xác thực và lưu trữ trong tầng mempool DAG Narwhal trước khi được Bullshark xử lý.)
- **Liên kết tiếng Hàn:** 날왈 멤풀 DAG 레이어 (Narwhal mempool DAG layer) — Tầng lưu trữ tạm thời dựa trên DAG của hệ thống Narwhal.

## 5. Bullshark consensus ordering
- **IPA:** /ˈbʊlʃɑːrk kənˈsɛnsəs ˈɔːrdərɪŋ/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); thường làm chủ ngữ hoặc tân ngữ chỉ thuật toán sắp xếp thứ tự khối.
- **Core meaning — English:** A leaderless, asynchronous-ready consensus protocol that orders DAG-structured batches of transactions with minimal message overhead and high fault tolerance.
- **Core meaning & mental image — Tiếng Việt:** Thuật toán sắp xếp đồng thuận Bullshark. Hình ảnh: Một làn sóng đồng thuận quét qua mạng lưới đồ thị để sắp xếp các khối giao dịch thành một chuỗi tổng thể theo thứ tự nhân quả mà không cần bầu chọn lãnh đạo.
- **Grammar & collocations:**
  - execute Bullshark consensus ordering (thực thi việc sắp xếp đồng thuận Bullshark)
  - deterministic Bullshark consensus ordering (sắp xếp đồng thuận Bullshark tất định)
  - latency of Bullshark consensus ordering (độ trễ của việc sắp xếp đồng thuận Bullshark)
- **Register & nuance:** Advanced distributed ledger technology and protocol design.
- **Examples:**
  - *Example 1:* Bullshark consensus ordering provides robust liveness guarantees even during periods of intermittent network partitions. (Sắp xếp đồng thuận Bullshark cung cấp đảm bảo liveness mạnh mẽ ngay cả trong các giai đoạn phân vùng mạng gián đoạn.)
  - *Example 2:* By removing synchronous leader rotation, Bullshark consensus ordering accelerates block finality. (Bằng cách loại bỏ việc luân phiên người lãnh đạo đồng bộ, sắp xếp đồng thuận Bullshark thúc đẩy nhanh tính kết Finality của khối.)
- **Liên kết tiếng Hàn:** 불샤크 합의 순서화 (Bullshark 合意 順序化) — Cơ chế sắp xếp khối phi tập trung không cần lãnh đạo.

## 6. round-based DAG certificate
- **IPA:** /raʊnd beɪst dæɡ sərˈtɪfɪkət/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); chỉ văn bản xác thực trong từng vòng đồng thuận.
- **Core meaning — English:** A cryptographic proof formed by collecting threshold signatures from a quorum of validators for a specific DAG round, certifying the inclusion and availability of transaction batches.
- **Core meaning & mental image — Tiếng Việt:** Chứng thực DAG theo vòng. Hình ảnh: Một con dấu phê duyệt kỹ thuật số có chữ ký của đa số thành viên trong một vòng họp, xác nhận rằng các giao dịch trong vòng đó đã được ghi nhận hợp lệ.
- **Grammar & collocations:**
  - issue a round-based DAG certificate (phát hành chứng thực DAG theo vòng)
  - verify a round-based DAG certificate (xác minh chứng thực DAG theo vòng)
  - aggregate round-based DAG certificates (tổng hợp các chứng thực DAG theo vòng)
- **Register & nuance:** Cryptographic protocols and distributed consensus engineering.
- **Examples:**
  - *Example 1:* Each validator must broadcast its votes to construct a valid round-based DAG certificate before advancing to the next epoch. (Mỗi trình xác thực phải phát tán các phiếu bầu của mình để xây dựng chứng thực DAG theo vòng hợp lệ trước khi chuyển sang kỷ nguyên tiếp theo.)
  - *Example 2:* The round-based DAG certificate serves as a cryptographic anchor linking consecutive waves of consensus. (Chứng thực DAG theo vòng đóng vai trò là mỏ neo mật mã liên kết các đợt đồng thuận liên tiếp.)
- **Liên kết tiếng Hàn:** 라운드 기반 DAG 인증서 (round 基盤 DAG 認證書) — Chứng thư mật mã xác nhận hoàn thành một vòng DAG.

## 7. quorum intersection guarantee
- **IPA:** /ˈkwɔːrəm ˌɪntərˈsɛkʃən ˈɡɛrənti/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); biểu thị đặc tính toán học của đa số tin cậy trong hệ thống phân tán.
- **Core meaning — English:** The fundamental property in distributed systems ensuring that any two quorums of validator nodes share at least one honest node, thereby preventing conflicting state commitments.
- **Core meaning & mental image — Tiếng Việt:** Đảm bảo giao điểm hạn mức đa số. Hình ảnh: Hai nhóm hội đồng lớn trong một tổ chức luôn có ít nhất một thành viên chung đáng tin cậy tham gia cả hai, đảm bảo không có quyết định mâu thuẫn nào được thông qua ở cả hai phía.
- **Grammar & collocations:**
  - satisfy the quorum intersection guarantee (thỏa mãn đảm bảo giao điểm đa số)
  - rely on quorum intersection guarantee (dựa vào đảm bảo giao điểm đa số)
  - mathematical quorum intersection guarantee (đảm bảo giao điểm đa số mang tính toán học)
- **Register & nuance:** Core theoretical distributed computing and consensus theory.
- **Examples:**
  - *Example 1:* Safety in Byzantine fault tolerant protocols fundamentally depends on maintaining the strict quorum intersection guarantee. (Tính an toàn trong các giao thức chịu lỗi Byzantine phụ thuộc cơ bản vào việc duy trì đảm bảo giao điểm đa số nghiêm ngặt.)
  - *Example 2:* If the number of faulty nodes exceeds one-third, the quorum intersection guarantee fails. (Nếu số lượng nút lỗi vượt quá một phần ba, đảm bảo giao điểm đa số sẽ bị phá vỡ.)
- **Liên kết tiếng Hàn:** 쿼럼 교집합 보장 (quorum 交集合 保障) — Định lý toán học đảm bảo sự chồng chéo giữa các tập hợp đa số nút.

## 8. asynchronous network model timing
- **IPA:** /eɪˈsɪŋkrənəs ˈnɛtwɜːrk ˈmɑːdəl ˈtaɪmɪŋ/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); mô tả môi trường mạng không giả định thời gian phản hồi.
- **Core meaning — English:** A network communication assumption where messages can be delayed arbitrarily long by an adversary, requiring consensus protocols to make zero assumptions about clock synchronization or message delivery bounds.
- **Core meaning & mental image — Tiếng Việt:** Thời gian mô hình mạng bất đồng bộ. Hình ảnh: Một hệ thống bưu chính mà ở đó thư từ có thể bị giữ lại vô thời hạn bởi kẻ xấu, buộc người gửi phải thiết kế quy trình không bao giờ phụ thuộc vào việc "thư phải đến trong 5 phút".
- **Grammar & collocations:**
  - operate under an asynchronous network model timing (vận hành dưới thời gian mô hình mạng bất đồng bộ)
  - robust asynchronous network model timing (thời gian mô hình mạng bất đồng bộ vững chắc)
  - challenge of asynchronous network model timing (thách thức của thời gian mô hình mạng bất đồng bộ)
- **Register & nuance:** Distributed systems theory and academic computer science.
- **Examples:**
  - *Example 1:* Under asynchronous network model timing, protocols cannot guarantee liveness during active network partitions without randomized techniques. (Dưới thời gian mô hình mạng bất đồng bộ, các giao thức không thể đảm bảo tính sống trong khi phân vùng mạng diễn ra mà không có các kỹ thuật ngẫu nhiên hóa.)
  - *Example 2:* Designing for asynchronous network model timing ensures maximum resilience against denial-of-service attacks on networking links. (Việc thiết kế cho thời gian mô hình mạng bất đồng bộ đảm bảo khả năng chống chịu tối đa trước các cuộc tấn công từ chối dịch vụ trên liên kết mạng.)
- **Liên kết tiếng Hàn:** 비동기 네트워크 모델 타이밍 (非同期 network model timing) — Giả định mô hình mạng không giới hạn thời gian truyền tin.

## 9. leaderless consensus round
- **IPA:** /ˈliːdərləs kənˈsɛnsəs raʊnd/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); chỉ vòng đồng thuận không phân định vai trò lãnh đạo duy nhất.
- **Core meaning — English:** A phase of a distributed protocol where all participating validator nodes concurrently propose and validate blocks without relying on a designated sequencer or leader node.
- **Core meaning & mental image — Tiếng Việt:** Vòng đồng thuận không có lãnh đạo. Hình ảnh: Một buổi thảo luận bàn tròn bình đẳng, nơi mọi thành viên đều đồng thời đưa ra ý kiến và biểu quyết thay vì chờ đợi sự cho phép của chủ tọa.
- **Grammar & collocations:**
  - execute a leaderless consensus round (thực thi một vòng đồng thuận không có lãnh đạo)
  - initiate a leaderless consensus round (khởi động một vòng đồng thuận không có lãnh đạo)
  - efficiency of a leaderless consensus round (hiệu quả của một vòng đồng thuận không có lãnh đạo)
- **Register & nuance:** Modern decentralized consensus architectures aimed at eliminating single points of failure and censorship.
- **Examples:**
  - *Example 1:* By utilizing a leaderless consensus round, the network prevents targeted bribery or denial-of-service attacks against single block proposers. (Bằng cách tận dụng vòng đồng thuận không có lãnh đạo, mạng lưới ngăn chặn các cuộc tấn công hối lộ hoặc từ chối dịch vụ nhắm vào các nhà đề xuất khối đơn lẻ.)
  - *Example 2:* Every node contributes transaction certificates actively during a leaderless consensus round. (Mọi nút mạng đóng góp chứng chỉ giao dịch một cách chủ động trong một vòng đồng thuận không có lãnh đạo.)
- **Liên kết tiếng Hàn:** 리더 없는 합의 라운드 (leader 없는 合意 round) — Vòng đồng thuận phân tán không phụ thuộc vào nút chủ trì.

## 10. Byzantine node censorship resistance
- **IPA:** /ˈbɪzəntiən noʊd ˈsɛnsərʃɪp rɪˈzɪstəns/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); chỉ khả năng kháng kiểm duyệt trước các nút gian lận.
- **Core meaning — English:** The architectural resilience of a distributed network that prevents malicious or faulty validator nodes from permanently blocking or dropping specific valid transactions.
- **Core meaning & mental image — Tiếng Việt:** Khả năng chống kiểm duyệt của nút Byzantine. Hình ảnh: Một hệ thống bưu chính kiên cố, nơi ngay cả khi một phần ba nhân viên cố tình giấu thư của bạn, những nhân viên trung thực khác vẫn đảm bảo thư của bạn được chuyển đi.
- **Grammar & collocations:**
  - maintain Byzantine node censorship resistance (duy trì khả năng chống kiểm duyệt của nút Byzantine)
  - enhance Byzantine node censorship resistance (nâng cao khả năng chống kiểm duyệt của nút Byzantine)
  - robust Byzantine node censorship resistance (khả năng chống kiểm duyệt của nút Byzantine vững chắc)
- **Register & nuance:** Blockchain governance, peer-to-peer security, and decentralized finance engineering.
- **Examples:**
  - *Example 1:* Ensuring Byzantine node censorship resistance is critical for permissionless financial infrastructure. (Đảm bảo khả năng chống kiểm duyệt của nút Byzantine là tối quan trọng đối với cơ sở hạ tầng tài chính không cần cấp phép.)
  - *Example 2:* The DAG-based mempool architecture inherently improves Byzantine node censorship resistance by multi-path transaction dissemination. (Kiến trúc mempool dựa trên DAG cải thiện bản chất khả năng chống kiểm duyệt của nút Byzantine bằng việc truyền phát giao dịch đa đường dẫn.)
- **Liên kết tiếng Hàn:** 비잔틴 노드 검열 저항성 (非同期 node 檢閱 抵抗性) — Khả năng chống kiểm duyệt trước các tác nhân phá hoại trong mạng lưới.

## 11. state machine replication throughput
- **IPA:** /steɪt məˈʃiːn ˌrɛplɪˈkeɪʃən ˈθruːpʊt/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); đo lường hiệu suất xử lý của hệ thống sao chép trạng thái.
- **Core meaning — English:** The rate at which a distributed system processes, orders, and executes state-changing transactions across all replicating nodes.
- **Core meaning & mental image — Tiếng Việt:** Thông lượng sao chép máy trạng thái. Hình ảnh: Băng chuyền công nghiệp đo lường số lượng sản phẩm hoàn thiện được xuất xưởng mỗi phút từ hàng chục nhà máy bản sao đồng bộ.
- **Grammar & collocations:**
  - maximize state machine replication throughput (tối đa hóa thông lượng sao chép máy trạng thái)
  - high state machine replication throughput (thông lượng sao chép máy trạng thái cao)
  - benchmark state machine replication throughput (đo chuẩn thông lượng sao chép máy trạng thái)
- **Register & nuance:** Distributed databases, fault-tolerant replication, and high-performance computing.
- **Examples:**
  - *Example 1:* Decoupling ordering from execution drastically boosts state machine replication throughput in modern blockchains. (Việc tách biệt việc sắp xếp khỏi việc thực thi thúc đẩy mạnh mẽ thông lượng sao chép máy trạng thái trong các blockchain hiện đại.)
  - *Example 2:* The benchmark test demonstrated a state machine replication throughput exceeding one hundred thousand transactions per second. (Bài kiểm tra chuẩn cho thấy thông lượng sao chép máy trạng thái vượt quá một trăm nghìn giao dịch mỗi giây.)
- **Liên kết tiếng Hàn:** 상태 機器 複製 通量 (狀態 機 器 複製 通量 / 상태 머신 복제 처리량) — Khả năng xử lý giao dịch của hệ thống sao chép trạng thái.

## 12. crash-recovery fault tolerance
- **IPA:** /kræʃ rɪˈkʌvəri fɔːlt ˈtɑːrərəns/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); khả năng phục hồi sau sự cố sập nguồn hoặc lỗi phần mềm.
- **Core meaning — English:** The capability of a distributed node or system to resume correct operation after experiencing an abrupt system crash, using persistent write-ahead logs and state snapshots.
- **Core meaning & mental image — Tiếng Việt:** Khả năng chịu lỗi khôi phục sau sự cố sập. Hình ảnh: Một máy tính tự động khôi phục lại toàn bộ tài liệu dang dở từ bản ghi nhớ tạm thời ngay sau khi bị ngắt điện đột ngột.
- **Grammar & collocations:**
  - implement crash-recovery fault tolerance (triển khai khả năng chịu lỗi khôi phục sau sự cố)
  - crash-recovery fault tolerance model (mô hình chịu lỗi khôi phục sau sự cố)
  - robust crash-recovery fault tolerance (khả năng chịu lỗi khôi phục sau sự cố vững chắc)
- **Register & nuance:** Operating systems, database engines, and distributed storage engineering.
- **Examples:**
  - *Example 1:* Nodes must implement crash-recovery fault tolerance to handle transient power outages without losing committed state. (Các nút mạng phải triển khai khả năng chịu lỗi khôi phục sau sự cố để xử lý tình trạng mất điện tạm thời mà không mất trạng thái đã cam kết.)
  - *Example 2:* The storage engine's write-ahead log is foundational to achieving crash-recovery fault tolerance. (Nhật ký ghi trước của động cơ lưu trữ là nền tảng để đạt được khả năng chịu lỗi khôi phục sau sự cố.)
- **Liên kết tiếng Hàn:** 크래시 복구 결함 허용 (crash 復舊 缺陷 許可) — Cơ chế chịu lỗi cho phép hệ thống khôi phục sau khi bị sập.

## 13. cryptographic threshold signature verification
- **IPA:** /ˌkrɪptəˈɡræfɪk ˈθrɛʃhoʊld ˈsɪɡnətʃər ˌvɛrɪfɪˈkeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); quy trình xác thực chữ ký ngưỡng mật mã.
- **Core meaning — English:** The computational process of validating a single compact digital signature formed by combining partial signatures from a threshold fraction of participants.
- **Core meaning & mental image — Tiếng Việt:** Xác thực chữ ký ngưỡng mật mã. Hình ảnh: Việc ghép nối các mảnh ghép của một con dấu bảo mật lại với nhau; chỉ khi đủ số mảnh tối thiểu thì con dấu mới hợp lệ trước hệ thống.
- **Grammar & collocations:**
  - perform cryptographic threshold signature verification (thực hiện xác thực chữ ký ngưỡng mật mã)
  - fast cryptographic threshold signature verification (xác thực chữ ký ngưỡng mật mã nhanh chóng)
  - decentralized cryptographic threshold signature verification (xác thực chữ ký ngưỡng mật mã phi tập trung)
- **Register & nuance:** Advanced cryptography, multi-party computation (MPC), and blockchain security.
- **Examples:**
  - *Example 1:* Cryptographic threshold signature verification reduces on-chain storage overhead by compressing thousands of validator approvals into one signature. (Xác thực chữ ký ngưỡng mật mã làm giảm chi phí lưu trữ trên chuỗi bằng cách nén hàng nghìn sự chấp thuận của trình xác thực thành một chữ ký duy nhất.)
  - *Example 2:* The protocol accelerates finality through efficient cryptographic threshold signature verification. (Giao thức đẩy nhanh tính kết Finality thông qua việc xác thực chữ ký ngưỡng mật mã hiệu quả.)
- **Liên kết tiếng Hàn:** 암호학적 임계 서명 검증 (暗號學的 臨界 署名 検証) — Quy trình kiểm tra chữ ký số được tạo từ nhiều phần khóa riêng biệt.

## 14. DAG garbage collection epoch
- **IPA:** /dæɡ ˈɡɑːrbɪdʒ kəˈlɛkʃən ˈɛpɑːk/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); kỷ nguyên thu gom rác bộ nhớ của cấu trúc DAG.
- **Core meaning — English:** A designated time period or block height boundary after which historical DAG nodes and older transaction batches are pruned to prevent unbounded memory growth.
- **Core meaning & mental image — Tiếng Việt:** Kỷ nguyên thu gom rác DAG. Hình ảnh: Xe gom rác định kỳ đến dọn sạch các thùng chứa dữ liệu cũ ở các vòng trước để giải phóng không gian cho kho chứa mới.
- **Grammar & collocations:**
  - trigger a DAG garbage collection epoch (kích hoạt kỷ nguyên thu gom rác DAG)
  - manage DAG garbage collection epochs (quản lý các kỷ nguyên thu gom rác DAG)
  - automatic DAG garbage collection epoch (kỷ nguyên thu gom rác DAG tự động)
- **Register & nuance:** Memory management in high-throughput graph-based distributed ledgers.
- **Examples:**
  - *Example 1:* Validators execute a DAG garbage collection epoch periodically to discard certified historical rounds and maintain optimal RAM usage. (Các trình xác thực thực hiện kỷ nguyên thu gom rác DAG định kỳ để loại bỏ các vòng lịch sử đã chứng thực và duy trì mức sử dụng RAM tối ưu.)
  - *Example 2:* Stale transaction batches from past epochs are purged during the DAG garbage collection epoch. (Các lô giao dịch cũ từ các kỷ nguyên trước được dọn sạch trong kỷ nguyên thu gom rác DAG.)
- **Liên kết tiếng Hàn:** DAG 가비지 컬렉션 에폭 (DAG garbage collection epoch) — Chu kỳ dọn dẹp bộ nhớ dữ liệu DAG cũ.

## 15. total order broadcast primitive
- **IPA:** /ˈtoʊtəl ˈɔːrdər ˈbrɔːdkæst ˈprɪmɪtɪv/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); nguyên hàm phát sóng thứ tự toàn cục.
- **Core meaning — English:** A fundamental communication abstraction in distributed systems that ensures all correct nodes deliver the exact same set of messages in the identical sequential order.
- **Core meaning & mental image — Tiếng Việt:** Nguyên hàm phát sóng thứ tự toàn cục. Hình ảnh: Một hệ thống phát thanh truyền đi các bản tin đến mọi trạm thu trên toàn quốc, đảm bảo mọi trạm đều nhận được các bản tin theo đúng một trình tự chính xác tuyệt đối.
- **Grammar & collocations:**
  - implement a total order broadcast primitive (triển khai nguyên hàm phát sóng thứ tự toàn cục)
  - reliable total order broadcast primitive (nguyên hàm phát sóng thứ tự toàn cục đáng tin cậy)
  - build upon a total order broadcast primitive (xây dựng dựa trên nguyên hàm phát sóng thứ tự toàn cục)
- **Register & nuance:** Distributed systems algorithms, state machine replication theory, and consensus protocols.
- **Examples:**
  - *Example 1:* State machine replication can be formally reduced to solving the total order broadcast primitive. (Sao chép máy trạng thái có thể được quy giảm hình thức về việc giải quyết nguyên hàm phát sóng thứ tự toàn cục.)
  - *Example 2:* The consensus layer acts as a high-performance total order broadcast primitive for distributed smart contracts. (Tầng đồng thuận đóng vai trò là nguyên hàm phát sóng thứ tự toàn cục hiệu suất cao cho các hợp đồng thông minh phân tán.)
- **Liên kết tiếng Hàn:** 전체 순서 브로드캐스트 프리미티브 (全体 順序 broadcast primitive) — Giao thức truyền thông đảm bảo mọi nút nhận thông điệp theo cùng một thứ tự.

## 16. causal ordering dependency graph
- **IPA:** /ˈkɔːzəl ˈɔːrdərɪŋ dɪˈpɛndənsi ɡræf/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); đồ thị phụ thuộc thứ tự nhân quả.
- **Core meaning — English:** A directed graph structure that tracks happen-before relationships and dependencies between asynchronous transaction events to ensure logically correct execution.
- **Core meaning & mental image — Tiếng Việt:** Đồ thị phụ thuộc thứ tự nhân quả. Hình ảnh: Sơ đồ tư duy nối các sự kiện theo chuỗi "việc này xảy ra thì việc kia mới được làm", ngăn chặn việc đảo lộn nguyên nhân và kết quả.
- **Grammar & collocations:**
  - construct a causal ordering dependency graph (xây dựng đồ thị phụ thuộc thứ tự nhân quả)
  - analyze a causal ordering dependency graph (phân tích đồ thị phụ thuộc thứ tự nhân quả)
  - resolve conflicts in a causal ordering dependency graph (giải quyết xung đột trong đồ thị phụ thuộc thứ tự nhân quả)
- **Register & nuance:** Distributed data systems, concurrent programming, and DAG-based protocols.
- **Examples:**
  - *Example 1:* The execution engine traverses the causal ordering dependency graph to process transactions without violating state pre-requisites. (Động cơ thực thi duyệt qua đồ thị phụ thuộc thứ tự nhân quả để xử lý các giao dịch mà không vi phạm các điều kiện tiên quyết về trạng thái.)
  - *Example 2:* Causal ordering dependency graphs prevent double-spending by mapping transaction antecedents explicitly. (Đồ thị phụ thuộc thứ tự nhân quả ngăn chặn việc chi tiêu hai lần bằng cách ánh xạ rõ ràng các tiền bối giao dịch.)
- **Liên kết tiếng Hàn:** 인과적 순서화 의존성 그래프 (因果的 順序化 依存性 graph) — Đồ thị theo dõi quan hệ nhân quả giữa các sự kiện phân tán.

## 17. network partition liveness preservation
- **IPA:** /ˈnɛtwɜːrk pɑːrˈtɪʃən ˈlɪvnəs ˌprɛzərˈveɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); bảo tồn tính sống khi mạng bị chia cắt.
- **Core meaning — English:** The system design attribute that allows at least one network component or the majority partition to continue making forward progress and processing transactions during a network split.
- **Core meaning & mental image — Tiếng Việt:** Bảo tồn tính sống khi phân vùng mạng. Hình ảnh: Một tòa nhà bị cắt đôi đường dây điện thoại thành hai nửa, nhưng nửa lớn hơn vẫn duy trì hoạt động kinh doanh bình thường thay vì tê liệt hoàn toàn.
- **Grammar & collocations:**
  - ensure network partition liveness preservation (đảm bảo bảo tồn tính sống khi phân vùng mạng)
  - challenge of network partition liveness preservation (thách thức của việc bảo tồn tính sống khi phân vùng mạng)
  - protocol ensuring network partition liveness preservation (giao thức đảm bảo bảo tồn tính sống khi phân vùng mạng)
- **Register & nuance:** Distributed systems fault tolerance and network engineering.
- **Examples:**
  - *Example 1:* Asynchronous protocols balance safety and network partition liveness preservation through randomized voting mechanisms. (Các giao thức bất đồng bộ cân bằng giữa tính an toàn và việc bảo tồn tính sống khi phân vùng mạng thông qua các cơ chế bỏ phiếu ngẫu nhiên.)
  - *Example 2:* Achieving network partition liveness preservation requires careful quorum threshold tuning. (Đạt được việc bảo tồn tính sống khi phân vùng mạng đòi hỏi việc tinh chỉnh ngưỡng đa số cẩn thận.)
- **Liên kết tiếng Hàn:** 네트워크 파티션 생존성 보장 (network partition 生存性 保障) — Khả năng duy trì hoạt động hệ thống khi mạng bị chia cắt thành các phần độc lập.

## 18. zero-overhead block proposal
- **IPA:** /ˈzɪroʊ ˈoʊvərˌhɛd blɑːk prəˈpoʊzəl/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); đề xuất khối không gây tốn tài nguyên phụ.
- **Core meaning — English:** A transaction packaging mechanism where block proposals add virtually no additional cryptographic or serialization bandwidth cost on top of the raw transaction data.
- **Core meaning & mental image — Tiếng Việt:** Đề xuất khối không tốn chi phí phụ. Hình ảnh: Việc gom các món hàng vào một chiếc túi trong suốt sẵn có mà không cần đóng thêm thùng gỗ hay băng dính cồng kềnh nào khác.
- **Grammar & collocations:**
  - achieve zero-overhead block proposal (đạt được đề xuất khối không tốn chi phí phụ)
  - design a zero-overhead block proposal mechanism (thiết kế cơ chế đề xuất khối không tốn chi phí phụ)
  - efficiency of zero-overhead block proposals (hiệu quả của các đề xuất khối không tốn chi phí phụ)
- **Register & nuance:** High-performance blockchain engineering and protocol optimization.
- **Examples:**
  - *Example 1:* Narwhal achieves a zero-overhead block proposal by referencing batches through lightweight cryptographic hashes. (Narwhal đạt được đề xuất khối không tốn chi phí phụ bằng cách tham chiếu các lô thông qua các hàm băm mật mã nhẹ.)
  - *Example 2:* The zero-overhead block proposal structure prevents network congestion during peak transaction volume. (Cấu trúc đề xuất khối không tốn chi phí phụ ngăn chặn tình trạng tắc nghẽn mạng trong thời gian giao dịch đạt đỉnh.)
- **Liên kết tiếng Hàn:** 제로 오버헤드 블록 제안 (zero overhead block 提案) — Cơ chế đề xuất khối dữ liệu không làm tăng thêm chi phí băng thông hay xử lý.

## 19. validator stake weight distribution
- **IPA:** /ˈvælɪdeɪtər steɪk weɪt ˌdɪstrɪˈbjuːʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); phân phối trọng số cổ phần của trình xác thực.
- **Core meaning — English:** The mathematical allocation of voting power and consensus influence among participating validator nodes proportional to their locked economic stake.
- **Core meaning & mental image — Tiếng Việt:** Phân phối trọng số cổ phần của trình xác thực. Hình ảnh: Tỷ lệ quyền biểu quyết trong đại hội cổ đông tương ứng chính xác với số lượng cổ phần mà mỗi người đang nắm giữ.
- **Grammar & collocations:**
  - analyze validator stake weight distribution (phân tích phân phối trọng số cổ phần trình xác thực)
  - decentralized validator stake weight distribution (phân phối trọng số cổ phần trình xác thực phi tập trung)
  - skew in validator stake weight distribution (sự lệch lạc trong phân phối trọng số cổ phần trình xác thực)
- **Register & nuance:** Proof-of-stake economics, blockchain security, and governance analysis.
- **Examples:**
  - *Example 1:* A balanced validator stake weight distribution prevents oligopolistic capture of the consensus protocol. (Phân phối trọng số cổ phần trình xác thực cân bằng ngăn chặn việc kiểm soát độc quyền đối với giao thức đồng thuận.)
  - *Example 2:* Consensus weight in Bullshark is computed directly from the live validator stake weight distribution table. (Trọng số đồng thuận trong Bullshark được tính toán trực tiếp từ bảng phân phối trọng số cổ phần trình xác thực trực tuyến.)
- **Liên kết tiếng Hàn:** 검증자 스테이크 가중치 분배 (検証者 stake 加重値 分配) — Sự phân bổ quyền lực biểu quyết dựa trên lượng cổ phần khóa của các nút.

## 20. optimistic sub-second transaction finality
- **IPA:** /ˌɑːptɪˈmɪstɪk səb ˈsɛkənd trænzˈækʃən fəˈnæləti/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); tính kết Finality giao dịch lạc quan dưới một giây.
- **Core meaning — English:** A performance characteristic where transactions are considered effectively final and irreversible within milliseconds under normal operating assumptions.
- **Core meaning & mental image — Tiếng Việt:** Tính kết luận giao dịch lạc quan dưới một giây. Hình ảnh: Một cú gật đầu thỏa thuận nhanh chóng giữa hai đối tác kinh doanh đáng tin cậy, hoàn tất giao dịch ngay lập tức trước khi làm thủ tục giấy tờ chính thức.
- **Grammar & collocations:**
  - achieve optimistic sub-second transaction finality (đạt được tính kết giao dịch lạc quan dưới một giây)
  - provide optimistic sub-second transaction finality (cung cấp tính kết giao dịch lạc quan dưới một giây)
  - target optimistic sub-second transaction finality (nhắm tới tính kết giao dịch lạc quan dưới một giây)
- **Register & nuance:** High-frequency decentralized finance, user experience engineering in Web3.
- **Examples:**
  - *Example 1:* By integrating advanced DAG ordering pipelines, the network delivers optimistic sub-second transaction finality. (Bằng cách tích hợp các đường ống sắp xếp DAG tiên tiến, mạng lưới mang lại tính kết giao dịch lạc quan dưới một giây.)
  - *Example 2:* Users experience instant confirmation similar to centralized payment rails thanks to optimistic sub-second transaction finality. (Người dùng trải nghiệm sự xác nhận tức thì tương tự như các hệ thống thanh toán tập trung nhờ tính kết giao dịch lạc quan dưới một giây.)
- **Liên kết tiếng Hàn:** 낙관적 1초 미만 거래 확정 (樂觀的 - 未滿 交易 確定) — Khả năng hoàn tất giao dịch trong vòng chưa đầy một giây dưới điều kiện lý tưởng.

## 21. front-running mitigation orderbook
- **IPA:** /ˈfrʌnt ˌrʌnɪŋ ˌmɪtɪˈɡeɪʃən ˈɔːrdərbʊk/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); sổ lệnh giảm thiểu giao dịch đón đầu.
- **Core meaning — English:** A decentralized exchange or matching engine architecture designed to prevent predatory bots from reordering user transactions for profit.
- **Core meaning & mental image — Tiếng Việt:** Sổ lệnh giảm thiểu giao dịch đón đầu. Hình ảnh: Một phòng đấu giá mù, nơi mọi đơn đặt hàng được niêm phong kín đáo và chỉ được khớp theo thứ tự công bằng, ngăn chặn kẻ gian nhìn trộm đơn hàng để chen chân trục lợi.
- **Grammar & collocations:**
  - build a front-running mitigation orderbook (xây dựng sổ lệnh giảm thiểu giao dịch đón đầu)
  - implement front-running mitigation orderbooks (triển khai các sổ lệnh giảm thiểu giao dịch đón đầu)
  - advanced front-running mitigation orderbook (sổ lệnh giảm thiểu giao dịch đón đầu tiên tiến)
- **Register & nuance:** Decentralized finance (DeFi), automated market makers, and trading system architecture.
- **Examples:**
  - *Example 1:* The trading platform utilizes a cryptographic batching mechanism inside its front-running mitigation orderbook. (Nền tảng giao dịch sử dụng cơ chế gom lô mã hóa bên trong sổ lệnh giảm thiểu giao dịch đón đầu của mình.)
  - *Example 2:* Traders prefer liquidity pools backed by a front-running mitigation orderbook to protect against toxic MEV extraction. (Các nhà giao dịch ưa chuộng các bể thanh khoản được hỗ trợ bởi sổ lệnh giảm thiểu giao dịch đón đầu để bảo vệ khỏi việc khai thác MEV độc hại.)
- **Liên kết tiếng Hàn:** 프론트런닝 완화 오더북 (front-running 緩和 orderbook) — Sổ lệnh giao dịch thiết kế chống các bot trục lợi chèn lệnh trước.

## 22. distributed key generation ceremony
- **IPA:** /dɪˈstrɪbjuːtɪd kiː ˌdʒɛnəˈreɪʃən ˈsɜːrəmoʊni/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); buổi lễ tạo khóa phân tán.
- **Core meaning — English:** A secure cryptographic protocol executed jointly by multiple independent parties to generate a shared public-private key pair without any single party ever knowing the complete private key.
- **Core meaning & mental image — Tiếng Việt:** Nghi lễ tạo khóa phân tán. Hình ảnh: Nhiều người giữ các mảnh chìa khóa khác nhau của một két sắt; họ cùng nhau vặn khóa trong một nghi lễ chung mà không ai nhìn thấy toàn bộ chìa khóa gốc.
- **Grammar & collocations:**
  - conduct a distributed key generation ceremony (tiến hành nghi lễ tạo khóa phân tán)
  - participate in a distributed key generation ceremony (tham gia vào nghi lễ tạo khóa phân tán)
  - secure distributed key generation ceremony (nghi lễ tạo khóa phân tán bảo mật)
- **Register & nuance:** Threshold cryptography, institutional custody solutions, and blockchain validator setup.
- **Examples:**
  - *Example 1:* Validator nodes must participate in a distributed key generation ceremony before the consensus epoch begins. (Các trình xác thực phải tham gia vào nghi lễ tạo khóa phân tán trước khi kỷ nguyên đồng thuận bắt đầu.)
  - *Example 2:* The success of the threshold signature scheme depends entirely on the integrity of the distributed key generation ceremony. (Sự thành công của chữ ký ngưỡng phụ thuộc hoàn toàn vào tính toàn vẹn của nghi lễ tạo khóa phân tán.)
- **Liên kết tiếng Hàn:** 분산 키 생성 세라모니 (分散 key 生成 ceremony) — Quy trình đa bên tạo ra cặp khóa mã hóa chia sẻ mà không lộ khóa riêng lẻ.

## 23. high-throughput blockchain pipeline
- **IPA:** /haɪ ˈθruːpʊt ˈblɑːktʃeɪn ˈpaɪplaɪn/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); đường ống xử lý blockchain thông lượng cao.
- **Core meaning — English:** A multi-stage computing architecture that separates transaction ingestion, mempool propagation, consensus ordering, and state execution into concurrent parallel stages.
- **Core meaning & mental image — Tiếng Việt:** Đường ống blockchain thông lượng cao. Hình ảnh: Dây chuyền sản xuất tự động nhiều công đoạn chạy song song, nơi việc nhận nguyên liệu, kiểm tra, lắp ráp và đóng gói diễn ra liên tục không gián đoạn.
- **Grammar & collocations:**
  - design a high-throughput blockchain pipeline (thiết kế đường ống blockchain thông lượng cao)
  - optimize a high-throughput blockchain pipeline (tối ưu hóa đường ống blockchain thông lượng cao)
  - bottleneck in a high-throughput blockchain pipeline (nút thắt trong đường ống blockchain thông lượng cao)
- **Register & nuance:** Advanced blockchain systems engineering and distributed architectures.
- **Examples:**
  - *Example 1:* Modern Layer-1 networks engineer a high-throughput blockchain pipeline to handle global payment volumes seamlessly. (Các mạng Layer-1 hiện đại thiết kế đường ống blockchain thông lượng cao để xử lý khối lượng thanh toán toàn cầu một cách mượt mà.)
  - *Example 2:* Every stage in the high-throughput blockchain pipeline is independently optimized for low latency. (Mọi công đoạn trong đường ống blockchain thông lượng cao đều được tối ưu hóa độc lập để có độ trễ thấp.)
- **Liên kết tiếng Hàn:** 고통량 블록체인 파이프라인 (高通量 blockchain pipeline) — Hệ thống đường ống xử lý giao dịch blockchain hiệu năng cao.

## 24. equivocation detection mechanism
- **IPA:** /ɪˌkwɪvəˈkeɪʃən dɪˈtɛkʃən ˈɛkənɪzəm/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); cơ chế phát hiện gian lận kép / nói hai lời.
- **Core meaning — English:** A cryptographic auditing system that identifies and penalizes validator nodes that sign conflicting messages or proposals for the same consensus round.
- **Core meaning & mental image — Tiếng Việt:** Cơ chế phát hiện gian lận nói hai lời. Hình ảnh: Một hệ thống giám sát phát hiện ngay lập tức khi một đại biểu ký tên vào hai bản cam kết mâu thuẫn nhau trong cùng một cuộc họp để làm bằng chứng trừng phạt.
- **Grammar & collocations:**
  - implement an equivocation detection mechanism (triển khai cơ chế phát hiện gian lận nói hai lời)
  - automated equivocation detection mechanism (cơ chế phát hiện gian lận tự động)
  - slash stake via equivocation detection mechanisms (cắt giảm cổ phần thông qua cơ chế phát hiện gian lận)
- **Register & nuance:** Proof-of-stake security, cryptographic auditing, and Byzantine fault detection.
- **Examples:**
  - *Example 1:* The protocol features an automated equivocation detection mechanism that immediately slashes the stake of double-signing validators. (Giao thức có tính năng cơ chế phát hiện gian lận tự động lập tức cắt giảm cổ phần của các trình xác thực ký kép.)
  - *Example 2:* Cryptographic proofs generated by the equivocation detection mechanism are broadcasted to the entire network as indisputable evidence. (Các bằng chứng mật mã do cơ chế phát hiện gian lận tạo ra được phát sóng đến toàn mạng như bằng chứng không thể chối cãi.)
- **Liên kết tiếng Hàn:** 이중 서명 탐지 메커니즘 (二重 署名 探知 mechanism) — Cơ chế phát hiện và trừng phạt hành vi ký nhiều thông điệp mâu thuẫn.

## 25. fault-tolerant distributed ledger
- **IPA:** /fɔːlt ˈtɑːrərənt dɪˈstrɪbjuːtɪd ˈlɛdʒər/
- **Loại từ & vị trí trong câu:** Noun phrase (Danh ngữ); sổ cái phân tán chịu lỗi.
- **Core meaning — English:** A decentralized append-only database maintained across independent computers that continues to operate correctly and maintain ledger consistency despite node failures and malicious attacks.
- **Core meaning & mental image — Tiếng Việt:** Sổ cái phân tán chịu lỗi. Hình ảnh: Một cuốn sổ ghi chép kế toán được sao chép đồng thời ở hàng nghìn két sắt khác nhau; dù một số két bị phá hủy hay chiếm đoạt, cuốn sổ gốc vẫn nguyên vẹn và chính xác.
- **Grammar & collocations:**
  - maintain a fault-tolerant distributed ledger (duy trì sổ cái phân tán chịu lỗi)
  - secure fault-tolerant distributed ledger (sổ cái phân tán chịu lỗi bảo mật)
  - scalable fault-tolerant distributed ledger (sổ cái phân tán chịu lỗi có khả năng mở rộng)
- **Register & nuance:** Distributed systems, blockchain technology, and fault-tolerant computing.
- **Examples:**
  - *Example 1:* Asynchronous DAG consensus algorithms provide the foundational engine for next-generation fault-tolerant distributed ledgers. (Các thuật toán đồng thuận DAG bất đồng bộ cung cấp động cơ nền tảng cho các sổ cái phân tán chịu lỗi thế hệ mới.)
  - *Example 2:* Enterprises rely on fault-tolerant distributed ledgers to achieve unalterable audit trails across untrusted supply chain partners. (Các doanh nghiệp dựa vào sổ cái phân tán chịu lỗi để đạt được các dấu vết kiểm toán không thể thay đổi giữa các đối tác chuỗi cung ứng không đáng tin cậy.)
- **Liên kết tiếng Hàn:** 결함 허용 분산 원장 (缺陷 許可 分散 原賬) — Hệ thống sổ cái phân tán duy trì tính chính xác khi có sự cố nút mạng.

---

## Review in context: Part 1 (items 1–12)

Modern high-performance decentralized systems rely heavily on advanced consensus architectures. To build a truly scalable blockchain, engineers must first achieve **asynchronous Byzantine fault tolerance**, ensuring that the system remains safe and live even when network timing is completely unpredictable under an **asynchronous network model timing**. Moving away from traditional linear chains, modern networks implement **directed acyclic graph consensus**, where transactions form a **causal ordering dependency graph**. In this architecture, the **Narwhal mempool DAG layer** acts as a high-speed ingestion buffer, disseminating transaction batches across multiple paths. Before transactions are finalized, the system issues a **round-based DAG certificate** backed by cryptographic signatures. 

To maintain order without central bottlenecks, the network executes a **leaderless consensus round**, utilizing **Bullshark consensus ordering** to process blocks efficiently. Security and liveness are mathematically guaranteed by the **quorum intersection guarantee**, which ensures overlapping honest nodes across quorums. Furthermore, systems maintain robust **Byzantine node censorship resistance**, protecting users against malicious validators trying to drop transactions. Behind the scenes, the **decoupled data availability engine** separates storage from execution, pushing **state machine replication throughput** past hundreds of thousands of transactions per second, while built-in **crash-recovery fault tolerance** ensures that nodes recover seamlessly from unexpected system failures.

### Vietnamese translation — Phần 1:
Các hệ thống phi tập trung hiệu suất cao hiện đại phụ thuộc nhiều vào kiến trúc đồng thuận tiên tiến. Để xây dựng một blockchain thực sự có khả năng mở rộng, các kỹ sư trước hết phải đạt được **khả năng chịu lỗi Byzantine bất đồng bộ**, đảm bảo hệ thống luôn an toàn và hoạt động ngay cả khi thời gian mạng hoàn toàn không thể đoán trước dưới **thời gian mô hình mạng bất đồng bộ**. Thoát khỏi các chuỗi tuyến tính truyền thống, các mạng hiện đại triển khai **đồng thuận đồ thị có hướng**, nơi các giao dịch hình thành một **đồ thị phụ thuộc thứ tự nhân quả**. Trong kiến trúc này, **tầng mempool DAG Narwhal** đóng vai trò là bộ đệm nhận dữ liệu tốc độ cao, lan truyền các lô giao dịch qua nhiều đường dẫn. Trước khi các giao dịch được hoàn tất, hệ thống phát hành một **chứng thực DAG theo vòng** được hỗ trợ bởi các chữ ký mật mã.

Để duy trì thứ tự mà không gặp nút thắt trung tâm, mạng lưới thực hiện một **vòng đồng thuận không có lãnh đạo**, sử dụng **sắp xếp đồng thuận Bullshark** để xử lý các khối một cách hiệu quả. Tính an toàn và sống được đảm bảo toán học bởi **đảm bảo giao điểm đa số**, giúp đảm bảo sự chồng chéo của các nút trung thực giữa các hạn mức đa số. Hơn nữa, các hệ thống duy trì **khả năng chống kiểm duyệt của nút Byzantine** vững chắc, bảo vệ người dùng trước các trình xác thực độc hại cố gắng loại bỏ giao dịch. Đằng sau hậu trường, **động cơ sẵn có dữ liệu tách rời** tách biệt việc lưu trữ khỏi việc thực thi, đẩy **thông lượng sao chép máy trạng thái** vượt qua hàng trăm nghìn giao dịch mỗi giây, trong khi **khả năng chịu lỗi khôi phục sau sự cố** tích hợp đảm bảo các nút khôi phục suôn sẻ sau các sự cố hệ thống bất ngờ.

---

## Review in context: Part 2 (items 13–25)

Securing high-throughput decentralized ledgers requires rigorous cryptographic foundations and resilient engineering. When validators approve transaction blocks, the network performs **cryptographic threshold signature verification** to compress massive approval sets into compact cryptographic proofs. To prevent memory exhaustion, nodes periodically trigger a **DAG garbage collection epoch** to prune stale historical batches. At the protocol core, the **total order broadcast primitive** ensures that all correct nodes deliver identical sequences of transaction messages.

During severe network disruptions, protocols rely on **network partition liveness preservation** to keep the majority partition operating. Block proposals achieve maximum efficiency through a **zero-overhead block proposal** design, while validator voting power strictly mirrors the **validator stake weight distribution**. Users enjoy **optimistic sub-second transaction finality**, making decentralized payments feel instantaneous. To protect traders against predatory bots, modern matching engines integrate a **front-running mitigation orderbook**. Before consensus epochs begin, validator sets participate in a **distributed key generation ceremony** to establish shared keys securely. 

Furthermore, the overall **high-throughput blockchain pipeline** orchestrates ingestion, dissemination, and execution concurrently. If any validator attempts to sign conflicting proposals, the **equivocation detection mechanism** immediately triggers slashing penalties backed by undeniable evidence. Ultimately, these innovations converge into a robust, **fault-tolerant distributed ledger** capable of powering mission-critical financial infrastructure worldwide.

### Vietnamese translation — Phần 2:
Việc bảo mật các sổ cái phân tán thông lượng cao đòi hỏi nền tảng mật mã nghiêm ngặt và kỹ thuật kiên cường. Khi các trình xác thực phê duyệt các khối giao dịch, mạng lưới thực hiện **xác thực chữ ký ngưỡng mật mã** để nén các tập hợp phê duyệt lớn thành các bằng chứng mật mã gọn nhẹ. Để ngăn ngừa cạn kiệt bộ nhớ, các trình xác thực định kỳ kích hoạt một **kỷ nguyên thu gom rác DAG** để dọn sạch các lô lịch sử cũ. Ở cốt lõi giao thức, **nguyên hàm phát sóng thứ tự toàn cục** đảm bảo mọi nút chính xác đều phân phối các chuỗi thông điệp giao dịch hoàn toàn giống nhau.

Trong các sự cố gián đoạn mạng nghiêm trọng, các giao thức dựa vào **bảo tồn tính sống khi phân vùng mạng** để giữ cho phần đa số tiếp tục hoạt động. Các đề xuất khối đạt hiệu quả tối đa thông qua thiết kế **đề xuất khối không tốn chi phí phụ**, trong khi quyền biểu quyết của trình xác thực phản ánh chính xác **phân phối trọng số cổ phần trình xác thực**. Người dùng tận hưởng **tính kết giao dịch lạc quan dưới một giây**, làm cho các khoản thanh toán phi tập trung có cảm giác tức thì. Để bảo vệ nhà giao dịch khỏi các bot trục lợi, các khớp lệnh hiện đại tích hợp **sổ lệnh giảm thiểu giao dịch đón đầu**. Trước khi các kỷ nguyên đồng thuận bắt đầu, các tập hợp trình xác thực tham gia vào một **nghi lễ tạo khóa phân tán** để thiết lập khóa chia sẻ một cách an toàn.

Hơn nữa, **đường ống blockchain thông lượng cao** tổng thể điều phối việc tiếp nhận, lan truyền và thực thi một cách đồng thời. Nếu bất kỳ trình xác thực nào cố gắng ký các đề xuất mâu thuẫn, **cơ chế phát hiện gian lận nói hai lời** lập tức kích hoạt các hình phạt cắt giảm cổ phần dựa trên bằng chứng không thể chối cãi. Cuối cùng, những đổi mới này hội tụ thành một **sổ cái phân tán chịu lỗi** vững chắc, đủ khả năng vận hành cơ sở hạ tầng tài chính cốt lõi trên toàn cầu.
