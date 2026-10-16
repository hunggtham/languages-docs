# C2 Vocabulary 207 — Verifiable credential decentralized identity schemas, zero-knowledge selective disclosure, and cryptographic revocation

## 1. decentralized identifier URI
- **IPA:** /ˌdiːˈsɛntrəlaɪzd ˈaɪdɛntəfaɪər ˌjuːˌɑːˈaɪ/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object, or prepositional object)
- **Core meaning — English:** A globally unique, persistent URI adhering to W3C standards that points to a decentralized identity document containing public keys and service endpoints without requiring a centralized registration authority.
- **Core meaning & mental image — Tiếng Việt:** Định danh phi tập trung URI (định danh duy nhất toàn cầu dựa trên chuẩn W3C, trỏ đến tài liệu danh tính phi tập trung chứa khóa công khai và điểm cuối dịch vụ mà không cần cơ quan đăng ký trung ương). Hình ảnh giống như một tọa độ GPS độc nhất trong không gian số tự trị, không thuộc về bất kỳ máy chủ trung tâm nào.
- **Grammar & collocations:** 
  - resolve a decentralized identifier URI (phân giải định danh phi tập trung URI)
  - register a decentralized identifier URI (đăng ký định danh phi tập trung URI)
  - decentralized identifier URI method (phương thức định danh phi tập trung URI)
- **Register & nuance:** Highly technical, cryptographic, standard-compliant (W3C), formal. Used in SSI (Self-Sovereign Identity) specifications.
- **Examples:**
  - *The application resolves the decentralized identifier URI to fetch the associated public keys and service endpoints.* -> Ứng dụng phân giải định danh phi tập trung URI để lấy các khóa công khai và điểm cuối dịch vụ liên quan.
  - *Each user is assigned a unique decentralized identifier URI upon creating their digital wallet.* -> Mỗi người dùng được cấp một định danh phi tập trung URI duy nhất khi tạo ví kỹ thuật số của họ.
- **Liên kết tiếng Hàn:** 탈중앙화 식별자 (Taljung-ang-hwa sik-byeol-ja) — thuật ngữ kỹ thuật chỉ mã định danh hoạt động độc lập với cơ quan trung ương.

## 2. verifiable credential schema
- **IPA:** /ˈvɛrɪfaɪəbəl krɪˈdɛnʃəl ˈskiːmə/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A machine-readable formal specification defining the structural constraints, data types, and required attributes that a verifiable credential must satisfy to be considered valid by an issuer and verifier.
- **Core meaning & mental image — Tiếng Việt:** Lược đồ thông tin xác thực có thể kiểm chứng (bản quy chuẩn cấu trúc bằng máy định nghĩa ràng buộc dữ liệu, kiểu dữ liệu và thuộc tính bắt buộc mà một chứng thư xác thực phải thỏa mãn). Hình ảnh giống như một chiếc khuôn đúc chính xác để kiểm tra xem một chứng chỉ số có đúng định dạng hay không.
- **Grammar & collocations:**
  - define a verifiable credential schema (định nghĩa lược đồ thông tin xác thực có thể kiểm chứng)
  - validate against a verifiable credential schema (xác thực dựa trên lược đồ thông tin xác thực)
  - verifiable credential schema repository (kho lưu trữ lược đồ thông tin xác thực)
- **Register & nuance:** Technical, specification-level, formal. Essential for semantic interoperability in decentralized ecosystems.
- **Examples:**
  - *Developers must publish the verifiable credential schema to a trusted registry before issuing credentials.* -> Các nhà phát triển phải xuất bản lược đồ thông tin xác thực có thể kiểm chứng lên một cơ quan đăng ký đáng tin cậy trước khi cấp chứng thư.
  - *The verifier checks the incoming credential against the predefined verifiable credential schema.* -> Bên xác thực kiểm tra chứng thư đầu vào so với lược đồ thông tin xác thực đã định nghĩa trước.
- **Liên kết tiếng Hàn:** 검증 가능한 자격 증명 스키마 (Geom-jeung ganeun-han jagyeok jeung-myeong seuk-i-ma) — bản đặc tả cấu trúc dữ liệu cho thông tin xác thực.

## 3. zero-knowledge selective disclosure
- **IPA:** /ˈzɪroʊ ˈnɑlɪdʒ səˈlɛktɪv dɪsˈkləʊʒər/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A cryptographic mechanism allowing a prover to reveal only specific attributes of a credential while withholding all other sensitive information, without leaking any data beyond the truth of the statement.
- **Core meaning & mental image — Tiếng Việt:** Tiết lộ chọn lọc không kiến thức (cơ chế mật mã cho phép người chứng minh chỉ hé lộ một vài thuộc tính cụ thể của chứng thư mà giấu đi mọi thông tin nhạy cảm khác, hoàn toàn không làm lộ dữ liệu thừa). Hình ảnh giống như việc bạn che đi ngày sinh và địa chỉ trên căn cước công dân, chỉ để lộ dấu mộc xác nhận bạn trên 18 tuổi.
- **Grammar & collocations:**
  - implement zero-knowledge selective disclosure (triển khai tiết lộ chọn lọc không kiến thức)
  - enable zero-knowledge selective disclosure (cho phép tiết lộ chọn lọc không kiến thức)
  - zero-knowledge selective disclosure protocol (giao thức tiết lộ chọn lọc không kiến thức)
- **Register & nuance:** Advanced cryptography, privacy-preserving, academic and enterprise standards.
- **Examples:**
  - *Zero-knowledge selective disclosure allows users to prove their age without revealing their exact birthdate.* -> Tiết lộ chọn lọc không kiến thức cho phép người dùng chứng minh độ tuổi của mình mà không cần tiết lộ ngày sinh chính xác.
  - *By leveraging BBS+ signatures, the system achieves efficient zero-knowledge selective disclosure.* -> Bằng cách tận dụng chữ ký BBS+, hệ thống đạt được tính năng tiết lộ chọn lọc không kiến thức hiệu quả.
- **Liên kết tiếng Hàn:** 영지식 선택적 공개 (Yeong-jisik seontaek-jeok gong-gae) — phương pháp mật mã cho phép chứng thực một phần thông tin mà không tiết lộ toàn bộ.

## 4. cryptographic accumulator revocation
- **IPA:** /ˌkrɪptəˈɡræfɪk əˈkjʊmjəˌleɪtər ˌrɛvəˈkeɪʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A space-efficient cryptographic method that represents a set of non-revoked credentials in a single accumulator value, allowing issuers to prove non-revocation without maintaining large public blacklists.
- **Core meaning & mental image — Tiếng Việt:** Thu hồi bằng bộ tích lũy mật mã (phương pháp mật mã tiết kiệm không gian biểu diễn tập hợp các chứng thư chưa bị thu hồi trong một giá trị tích lũy duy nhất, cho phép chứng minh không bị thu hồi mà không cần duy trì danh sách đen lớn). Hình ảnh giống như việc kiểm tra xem một chiếc vé có nằm trong danh sách hợp lệ hay không thông qua một con dấu tổng hợp gọn nhẹ.
- **Grammar & collocations:**
  - perform cryptographic accumulator revocation (thực hiện thu hồi bằng bộ tích lũy mật mã)
  - cryptographic accumulator revocation check (kiểm tra thu hồi bằng bộ tích lũy mật mã)
  - update cryptographic accumulator (cập nhật bộ tích lũy mật mã)
- **Register & nuance:** Cutting-edge cryptography, high scalability, formal systems architecture.
- **Examples:**
  - *Cryptographic accumulator revocation scales efficiently even when millions of credentials are active.* -> Thu hồi bằng bộ tích lũy mật mã mở rộng quy mô hiệu quả ngay cả khi hàng triệu chứng thư đang hoạt động.
  - *The verifier requests an accumulator membership proof to verify the non-revocation status.* -> Bên xác thực yêu cầu bằng chứng thành viên bộ tích lũy để xác minh trạng thái chưa bị thu hồi.
- **Liên kết tiếng Hàn:** 암호학적 누산기 폐기 (Am-ho-hak-jeok nu-san-gi pye-gi) — kỹ thuật thu hồi thông tin xác thực dùng cấu trúc toán học gọn nhẹ.

## 5. BBS+ signature algorithm
- **IPA:** /ˌbiːˌbiːˈɛs plʌs ˈsɪɡnətʃər ˈɛlɡərɪðəm/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A pairing-based digital signature scheme that supports signing multiple messages and generating zero-knowledge proofs of subsets of those signed messages under a single signature.
- **Core meaning & mental image — Tiếng Việt:** Thuật toán chữ ký BBS+ (hệ thống chữ ký số dựa trên ánh xạ cặp, hỗ trợ ký nhiều thông điệp và tạo bằng chứng không kiến thức cho các tập con của thông điệp đó dưới một chữ ký duy nhất). Hình ảnh giống như một con dấu đa năng có thể bóc tách từng phần thông tin để trình bày mà không làm mất hiệu lực chữ ký gốc.
- **Grammar & collocations:**
  - sign messages with BBS+ signature algorithm (ký thông điệp bằng thuật toán chữ ký BBS+)
  - BBS+ signature algorithm issuance (cấp phát bằng thuật toán chữ ký BBS+)
  - generate proof from BBS+ signature (tạo bằng chứng từ chữ ký BBS+)
- **Register & nuance:** Specialized cryptography, W3C recommended standard for verifiable credentials.
- **Examples:**
  - *The BBS+ signature algorithm is foundational for unlinkable presentations in decentralized identity.* -> Thuật toán chữ ký BBS+ là nền tảng cho các phần trình bày không thể liên kết trong danh tính phi tập trung.
  - *Issuers sign the credential attributes using the BBS+ signature algorithm.* -> Các nhà phát triển ký các thuộc tính thông tin xác thực bằng thuật toán chữ ký BBS+.
- **Liên kết tiếng Hàn:** BBS+ 서명 알고리즘 (BBS+ seom-yeong al-go-ri-jeum) — thuật toán chữ ký số chuyên dụng cho ẩn danh và tiết lộ chọn lọc.

## 6. decentralized key management system
- **IPA:** /ˌdiːˈsɛntrəlaɪzd kiː ˈmænɪdʒmənt ˈsɪstəm/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A distributed architecture for generating, storing, and rotating cryptographic keys across independent nodes or user-controlled devices without relying on a central cloud provider.
- **Core meaning & mental image — Tiếng Việt:** Hệ thống quản lý khóa phi tập trung (kiến trúc phân tán để tạo, lưu trữ và luân phiên các khóa mật mã trên các nút độc lập hoặc thiết bị do người dùng kiểm soát mà không phụ thuộc vào nhà cung cấp đám mây trung tâm). Hình ảnh giống như một hệ thống két sắt phân tán được chia khóa thành nhiều phần giữ ở nhiều nơi an toàn.
- **Grammar & collocations:**
  - deploy a decentralized key management system (triển khai hệ thống quản lý khóa phi tập trung)
  - decentralized key management system architecture (kiến trúc hệ thống quản lý khóa phi tập trung)
  - secure the decentralized key management system (bảo mật hệ thống quản lý khóa phi tập trung)
- **Register & nuance:** Enterprise security, cryptographic infrastructure, highly formal.
- **Examples:**
  - *A robust decentralized key management system prevents single points of failure in key recovery.* -> Hệ thống quản lý khóa phi tập trung mạnh mẽ ngăn chặn điểm lỗi duy nhất trong việc khôi phục khóa.
  - *Users retain absolute control over their private keys within the decentralized key management system.* -> Người dùng giữ quyền kiểm soát tuyệt đối đối với khóa riêng tư của họ trong hệ thống quản lý khóa phi tập trung.
- **Liên kết tiếng Hàn:** 탈중앙화 키 관리 시스템 (Taljung-ang-hwa ki gwan-ri siseu-tem) — hệ thống phân tán quản lý khóa mật mã an toàn.

## 7. credential issuer cryptographic trust
- **IPA:** /krɪˈdɛnʃəl ˈɪʃuər ˌkrɪptəˈɡræfɪk trʌst/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The verifiable chain of cryptographic evidence establishing that a credential was issued by an authentic, authorized entity whose public key is anchored in a trusted registry.
- **Core meaning & mental image — Tiếng Việt:** Niềm tin mật mã của bên cấp chứng thư (chuỗi bằng chứng mật mã có thể kiểm chứng xác lập rằng một chứng thư được cấp bởi một thực thể hợp pháp, có khóa công khai neo trên sổ cái tin cậy). Hình ảnh giống như con dấu nổi hoàng gia được xác thực qua chuỗi quan chức kiểm duyệt đáng tin cậy.
- **Grammar & collocations:**
  - establish credential issuer cryptographic trust (thiết lập niềm tin mật mã của bên cấp chứng thư)
  - verify credential issuer cryptographic trust (xác minh niềm tin mật mã của bên cấp chứng thư)
  - anchor credential issuer cryptographic trust (neo giữ niềm tin mật mã của bên cấp chứng thư)
- **Register & nuance:** Public key infrastructure, trust frameworks, protocol-level security.
- **Examples:**
  - *Verifiers rely on credential issuer cryptographic trust to validate the authenticity of incoming claims.* -> Bên xác thực dựa vào niềm tin mật mã của bên cấp chứng thư để kiểm tính chân thực của các khiếu nại đầu vào.
  - *The trust anchor guarantees credential issuer cryptographic trust across different jurisdictions.* -> Neo tin cậy đảm bảo niềm tin mật mã của bên cấp chứng thư trên các khu vực pháp lý khác nhau.
- **Liên kết tiếng Hàn:** 자격 증명 발급자 암호학적 신뢰 (Jagyeok jeung-myeong bal-geup-ja am-ho-hak-jeok sin-roe) — độ tin cậy mật mã gắn liền với thực thể phát hành thông tin xác thực.

## 8. self-sovereign identity architecture
- **IPA:** /sɛlf ˈsɒvrɪn aɪˈdɛntəti ˈɑrkɪtɛktʃər/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A digital identity paradigm where individuals have sole ownership and control over the creation, storage, and sharing of their credentials without intermediary gatekeepers.
- **Core meaning & mental image — Tiếng Việt:** Kiến trúc danh tính tự chủ (mô hình danh tính số nơi cá nhân sở hữu và kiểm soát hoàn toàn việc tạo lập, lưu trữ và chia sẻ chứng thư của mình mà không cần bên trung gian kiểm soát). Hình ảnh giống như việc bạn tự cầm hộ chiếu trong tay và tự quyết định lúc nào đưa cho ai xem mà không qua cơ quan môi giới nào.
- **Grammar & collocations:**
  - design a self-sovereign identity architecture (thiết kế kiến trúc danh tính tự chủ)
  - adopt self-sovereign identity architecture (áp dụng kiến trúc danh tính tự chủ)
  - self-sovereign identity architecture principles (nguyên tắc kiến trúc danh tính tự chủ)
- **Register & nuance:** Architectural design, privacy advocacy, decentralized web (Web3).
- **Examples:**
  - *Self-sovereign identity architecture empowers users with unprecedented data privacy and ownership.* -> Kiến trúc danh tính tự chủ trao quyền cho người dùng về quyền riêng tư và quyền sở hữu dữ liệu chưa từng có.
  - *Enterprise systems are shifting toward self-sovereign identity architecture to reduce liability.* -> Các hệ thống doanh nghiệp đang chuyển dịch sang kiến trúc danh tính tự chủ để giảm trách nhiệm pháp lý.
- **Liên kết tiếng Hàn:** 자기 주권 신자 아키텍처 (Jagi ju-gwon sin-won a-ki-tek-cheo) — mô hình kiến trúc danh tính số tự chủ thuộc quyền kiểm soát cá nhân.

## 9. verifiable presentation proof
- **IPA:** /ˈvɛrɪfaɪəbəl ˌprɛzənˈteɪʃən pruːf/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A cryptographically signed package containing one or more verifiable credentials and claims presented by a holder to a verifier, proving possession and authenticity without unauthorized tracking.
- **Core meaning & mental image — Tiếng Việt:** Bằng chứng trình bày có thể kiểm chứng (gói dữ liệu được ký mật mã chứa một hoặc nhiều chứng thư và yêu cầu xác thực do người nắm giữ trình bày cho bên xác thực, chứng minh quyền sở hữu và tính xác thực). Hình ảnh giống như việc xuất trình thẻ căn cước đi kèm chữ ký điện tử tạm thời để chứng minh ngay tại quầy kiểm tra.
- **Grammar & collocations:**
  - generate a verifiable presentation proof (tạo bằng chứng trình bày có thể kiểm chứng)
  - submit a verifiable presentation proof (nộp bằng chứng trình bày có thể kiểm chứng)
  - verify a verifiable presentation proof (xác minh bằng chứng trình bày có thể kiểm chứng)
- **Register & nuance:** Standardized protocol term (W3C VC Data Model), highly formal.
- **Examples:**
  - *The user wallet constructs a verifiable presentation proof tailored to the verifier's specific request.* -> Ví của người dùng xây dựng bằng chứng trình bày có thể kiểm chứng phù hợp với yêu cầu cụ thể của bên xác thực.
  - *The verifier successfully validates the verifiable presentation proof within milliseconds.* -> Bên xác thực xác minh thành công bằng chứng trình bày có thể kiểm chứng trong vòng vài mili-giây.
- **Liên kết tiếng Hàn:** 검증 가능한 프레젠테이션 증명 (Geom-jeung ganeun-han peu-re-jen-te-isyeon jeung-myeong) — bằng chứng kỹ thuật số được trình bày để xác thực thông tin.

## 10. pairwise pseudonymous identifier
- **IPA:** /ˈpɛərwaɪz suːˈdɒnɪməs aɪˈdɛntəfaɪər/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A unique, unlinked identifier generated for every distinct relationship between a holder and a verifier, preventing cross-domain tracking and correlation of user activities.
- **Core meaning & mental image — Tiếng Việt:** Định danh giả danh theo cặp (mã định danh duy nhất, không liên kết được tạo riêng cho từng mối quan hệ giữa người nắm giữ và bên xác thực, ngăn chặn việc theo dõi và tương quan chéo các hoạt động). Hình ảnh giống như việc bạn dùng một cái tên hoàn toàn khác khi giao dịch với ngân hàng so với khi mua sắm ở siêu thị.
- **Grammar & collocations:**
  - generate a pairwise pseudonymous identifier (tạo định danh giả danh theo cặp)
  - utilize pairwise pseudonymous identifiers (sử dụng các định danh giả danh theo cặp)
  - pairwise pseudonymous identifier generation (việc tạo định danh giả danh theo cặp)
- **Register & nuance:** Privacy-by-design, cryptographic identity, formal standard.
- **Examples:**
  - *Using a pairwise pseudonymous identifier ensures that merchants cannot correlate your purchase history.* -> Việc sử dụng định danh giả danh theo cặp đảm bảo các thương nhân không thể tương quan lịch sử mua hàng của bạn.
  - *The protocol automatically derives a new pairwise pseudonymous identifier for each service provider.* -> Giao thức tự động tạo ra một định danh giả danh theo cặp mới cho mỗi nhà cung cấp dịch vụ.
- **Liên kết tiếng Hàn:** 쌍별 가명 식별자 (Sssang-byeol ga-myeong sik-byeol-ja) — mã định danh giả danh được tạo riêng cho từng cặp thực thể tương tác.

## 11. decentralized public key infrastructure
- **IPA:** /ˌdiːˈsɛntrəlaɪzd ˈpʌblɪk kiː ɪnfrəˈstrʌktʃər/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A cryptographic trust architecture that replaces traditional centralized Certificate Authorities with distributed ledgers or peer-to-peer networks to manage public key registrations and lifecycle events.
- **Core meaning & mental image — Tiếng Việt:** Cơ sở hạ tầng khóa công khai phi tập trung (kiến trúc tin cậy thay thế các Cơ quan chứng thực trung tâm truyền thống bằng sổ cái phân tán hoặc mạng ngang hàng để quản lý việc đăng ký khóa công khai). Hình ảnh giống như một cuốn sổ đăng ký công khai phân tán, nơi mọi người cùng chứng thực chữ ký số thay vì tin vào một cơ quan độc quyền duy nhất.
- **Grammar & collocations:**
  - implement decentralized public key infrastructure (triển khai cơ sở hạ tầng khóa công khai phi tập trung)
  - decentralized public key infrastructure network (mạng cơ sở hạ tầng khóa công khai phi tập trung)
  - secure decentralized public key infrastructure (bảo mật cơ sở hạ tầng khóa công khai phi tập trung)
- **Register & nuance:** Cryptographic systems, decentralized web, highly formal.
- **Examples:**
  - *Decentralized public key infrastructure eliminates single points of failure associated with traditional CAs.* -> Cơ sở hạ tầng khóa công khai phi tập trung loại bỏ điểm lỗi duy nhất gắn liền với các CA truyền thống.
  - *Nodes across the network synchronize the decentralized public key infrastructure state.* -> Các nút trên toàn mạng đồng bộ hóa trạng thái cơ sở hạ tầng khóa công khai phi tập trung.
- **Liên kết tiếng Hàn:** 탈중앙화 공개 키 기반 구조 (Taljung-ang-hwa gong-gae ki giban gu-jo) — hạ tầng khóa công khai vận hành trên nền tảng phi tập trung.

## 12. verifiable data registry ledger
- **IPA:** /ˈvɛrɪfaɪəbəl ˈdeɪtə ˈrɛdʒɪstri ˈlɛdʒər/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning & foundational term:** A distributed, immutable ledger or database system that provides verifiable records of decentralized identifiers, schemas, and cryptographic revocation statuses.
- **Core meaning & mental image — Tiếng Việt:** Sổ cái cơ sở dữ liệu có thể kiểm chứng (hệ thống sổ cái hoặc cơ sở dữ liệu phân tán, bất biến cung cấp các bản ghi có thể kiểm chứng về định danh, lược đồ và trạng thái thu hồi). Hình ảnh giống như một cuốn sổ cái kế toán vĩnh viễn được khắc đá, không ai có thể sửa đổi hay xóa bỏ lịch sử.
- **Grammar & collocations:**
  - query a verifiable data registry ledger (truy vấn sổ cái cơ sở dữ liệu có thể kiểm chứng)
  - write to a verifiable data registry ledger (ghi vào sổ cái cơ sở dữ liệu có thể kiểm chứng)
  - verifiable data registry ledger synchronization (sự đồng bộ hóa sổ cái cơ sở dữ liệu có thể kiểm chứng)
- **Register & nuance:** Blockchain/distributed ledger technology terminology, technical specification.
- **Examples:**
  - *The agent queries the verifiable data registry ledger to check the current status of the credential.* -> Tác nhân truy vấn sổ cái cơ sở dữ liệu có thể kiểm chứng để kiểm tra trạng thái hiện tại của chứng thư.
  - *Anchoring hashes to the verifiable data registry ledger ensures tamper-evident record keeping.* -> Việc neo các hàm băm vào sổ cái cơ sở dữ liệu có thể kiểm chứng đảm bảo lưu trữ hồ sơ chống giả mạo.
- **Liên kết tiếng Hàn:** 검증 가능한 데이터 레지스트리 원장 (Geom-jeung ganeun-han de-i-ta re-ji-seu-teu-ri won-jang) — sổ cái phân tán lưu trữ dữ liệu xác thực phi tập trung.

## 13. claim attribute predicate proof
- **IPA:** /kleɪm ˈætrɪbjuːt ˈprɛdɪkət pruːf/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A cryptographic proof demonstrating that a specific attribute satisfies a logical predicate (e.g., greater than a threshold) without revealing the underlying numerical value.
- **Core meaning & mental image — Tiếng Việt:** Bằng chứng vị từ thuộc tính yêu cầu (bằng chứng mật mã chứng minh rằng một thuộc tính cụ thể thỏa mãn một mệnh đề logic mà không làm lộ giá trị số bên dưới). Hình ảnh giống như việc chứng minh bạn có đủ số dư tài khoản lớn hơn 1000 đô la mà không cần cho ai biết chính xác bạn có bao nhiêu tiền trong tài khoản.
- **Grammar & collocations:**
  - generate claim attribute predicate proof (tạo bằng chứng vị từ thuộc tính yêu cầu)
  - evaluate claim attribute predicate proof (đánh giá bằng chứng vị từ thuộc tính yêu cầu)
  - valid claim attribute predicate proof (bằng chứng vị từ thuộc tính yêu cầu hợp lệ)
- **Register & nuance:** Advanced zero-knowledge proofs, privacy engineering, formal logic.
- **Examples:**
  - *The system generates a claim attribute predicate proof to confirm the holder is over twenty-one years old.* -> Hệ thống tạo bằng chứng vị từ thuộc tính yêu cầu để xác nhận người nắm giữ trên 21 tuổi.
  - *Verifiers evaluate the claim attribute predicate proof without accessing raw personal records.* -> Bên xác thực đánh giá bằng chứng vị từ thuộc tính yêu cầu mà không truy cập hồ sơ cá nhân thô.
- **Liên kết tiếng Hàn:** 클레임 속성 술어 증명 (Keul-re-im sok-seong sul-eo jeung-myeong) — bằng chứng mật mã xác thực tính đúng đắn của thuộc tính theo điều kiện logic.

## 14. digital identity holder wallet
- **IPA:** /ˈdɪdʒɪtəl aɪˈdɛntəti ˈhhoʊldər ˈwɒlɪt/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A secure software or hardware application controlled by an end user that stores private keys, verifiable credentials, and generates cryptographic presentations.
- **Core meaning & mental image — Tiếng Việt:** Ví giữ danh tính số (ứng dụng phần mềm hoặc phần cứng an toàn do người dùng cuối kiểm soát, lưu trữ khóa riêng tư, chứng thư xác thực và tạo các phần trình bày mật mã). Hình ảnh giống như một chiếc ví da vật lý đựng đầy thẻ căn cước và thẻ thành viên, nhưng được bảo mật bằng mã hóa lượng tử hoặc vân tay.
- **Grammar & collocations:**
  - initialize a digital identity holder wallet (khởi tạo ví giữ danh tính số)
  - backup digital identity holder wallet (sao lưu ví giữ danh tính số)
  - digital identity holder wallet storage (kho lưu trữ của ví giữ danh tính số)
- **Register & nuance:** User-centric security, application software, SSI architecture.
- **Examples:**
  - *The user imports their credentials into the digital identity holder wallet securely.* -> Người dùng nhập các chứng thư của họ vào ví giữ danh tính số một cách an toàn.
  - *Loss of the seed phrase can result in permanent abandonment of the digital identity holder wallet.* -> Mất cụm từ khôi phục có thể dẫn đến việc vĩnh viễn bỏ quên ví giữ danh tính số.
- **Liên kết tiếng Hàn:** 디지털 신원 소지자 지갑 (Dijiteol sin-won so-ji-ja ji-gap) — ứng dụng ví điện tử lưu trữ danh tính và chứng thư cá nhân.

## 15. replay attack prevention nonce
- **IPA:** /riːˈpleɪ əˈtæk prɪˈvɛnʃən nɒns/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A unique, randomly generated cryptographic number included in an authentication challenge to ensure that captured valid messages cannot be maliciously retransmitted by an attacker.
- **Core meaning & mental image — Tiếng Việt:** Số ngẫu nhiên chống tấn công phát lại (một số mật mã duy nhất, ngẫu nhiên được đưa vào thử thách xác thực để đảm bảo các thông điệp hợp lệ bị bắt giữ không thể bị kẻ tấn công truyền lại độc hại). Hình ảnh giống như một mã xác thực dùng một lần ngẫu nhiên xuất hiện trên màn hình giao dịch ngân hàng.
- **Grammar & collocations:**
  - include a replay attack prevention nonce (bao gồm số ngẫu nhiên chống tấn công phát lại)
  - validate replay attack prevention nonce (xác thực số ngẫu nhiên chống tấn công phát lại)
  - generate replay attack prevention nonce (tạo số ngẫu nhiên chống tấn công phát lại)
- **Register & nuance:** Cryptographic protocols, network security, highly formal.
- **Examples:**
  - *The protocol requires a unique replay attack prevention nonce in every authentication round.* -> Giao thức yêu cầu một số ngẫu nhiên chống tấn công phát lại duy nhất trong mọi vòng xác thực.
  - *If the nonce is reused or expired, the verifier rejects the presentation immediately.* -> Nếu số ngẫu nhiên bị dùng lại hoặc hết hạn, bên xác thực từ chối phần trình bày ngay lập tức.
- **Liên kết tiếng Hàn:** 리플레이 공격 방지 넌스 (Ri-peul-lae gong-gyeok bang-ji neon-seu) — chuỗi số ngẫu nhiên một lần ngăn chặn việc phát lại gói tin.

## 16. privacy-preserving authentication protocol
- **IPA:** /ˈprɪvəsi prɪˈzɜrvɪŋ ɔːˌθɛntɪˈkeɪʃən ˈproʊtəˌkɑːl/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A set of cryptographic rules allowing a user to authenticate to a system without revealing identifying traits or tracking metadata beyond what is strictly necessary.
- **Core meaning & mental image — Tiếng Việt:** Giao thức xác thực bảo vệ quyền riêng tư (tập hợp các quy tắc mật mã cho phép người dùng xác thực với hệ thống mà không tiết lộ đặc điểm nhận dạng hoặc siêu dữ liệu theo dõi ngoài mức thiết yếu). Hình ảnh giống như việc quét mã QR vào cửa câu lạc bộ VIP mà cửa không hề lưu lại tên tuổi hay khuôn mặt của bạn.
- **Grammar & collocations:**
  - execute a privacy-preserving authentication protocol (thực thi giao thức xác thực bảo vệ quyền riêng tư)
  - design a privacy-preserving authentication protocol (thiết kế giao thức xác thực bảo vệ quyền riêng tư)
  - privacy-preserving authentication protocol standards (tiêu chuẩn giao thức xác thực bảo vệ quyền riêng tư)
- **Register & nuance:** Cybersecurity protocols, privacy engineering, academic and industrial standards.
- **Examples:**
  - *Our enterprise adopted a privacy-preserving authentication protocol to comply with strict privacy regulations.* -> Doanh nghiệp của chúng tôi đã áp dụng giao thức xác thực bảo vệ quyền riêng tư để tuân thủ các quy định bảo mật nghiêm ngặt.
  - *The privacy-preserving authentication protocol guarantees zero tracking across different sessions.* -> Giao thức xác thực bảo vệ quyền riêng tư đảm bảo không theo dõi qua các phiên làm việc khác nhau.
- **Liên kết tiếng Hàn:** 프라이버시보호 인증 프로토콜 (Pura-ibeo-si bo-ho in-jeung peuro-to-kol) — giao thức xác thực danh tính giữ kín thông tin cá nhân.

## 17. decentralized governance framework
- **IPA:** /ˌdiːˈsɛntrəlaɪzd ˈɡʌvərnəns ˈfreɪmwɜːrk/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A distributed set of rules, voting mechanisms, and consensus procedures used by stakeholders to manage trust registries, schemas, and policy updates in an SSI ecosystem.
- **Core meaning & mental image — Tiếng Việt:** Khung quản trị phi tập trung (tập hợp phân tán các quy tắc, cơ chế biểu quyết và thủ tục đồng thuận được các bên liên quan sử dụng để quản lý kho tin cậy, lược đồ và cập nhật chính sách). Hình ảnh giống như một hội đồng công dân toàn cầu cùng bỏ phiếu sửa đổi hiến pháp mà không có tổng thống độc tài nào.
- **Grammar & collocations:**
  - establish a decentralized governance framework (thịết lập khung quản trị phi tập trung)
  - participate in decentralized governance framework (tham gia vào khung quản trị phi tập trung)
  - decentralized governance framework guidelines (hướng dẫn khung quản trị phi tập trung)
- **Register & nuance:** Governance, distributed systems, organizational policy.
- **Examples:**
  - *A transparent decentralized governance framework ensures equitable decision-making among network participants.* -> Khung quản trị phi tập trung minh bạch đảm bảo việc ra quyết định công bằng giữa những người tham gia mạng.
  - *Changes to credential schemas must be approved through the decentralized governance framework.* -> Các thay đổi đối với lược đồ thông tin xác thực phải được phê duyệt thông qua khung quản trị phi tập trung.
- **Liên kết tiếng Hàn:** 탈중앙화 거버넌스 프레임워크 (Taljung-ang-hwa geo-beo-neon-seu peu-reim-wo-keu) — khung chính sách và quản trị phân tán cho hệ thống.

## 18. biometric credential binding
- **IPA:** /ˌbaɪoʊˈmɛtrɪk krɪˈdɛnʃəl ˈbaɪndɪŋ/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The cryptographic linking of a verifiable credential to a user's local biometric template (such as facial geometry or fingerprint data) inside a secure hardware enclave.
- **Core meaning & mental image — Tiếng Việt:** Liên kết thông tin xác thực sinh biometric (việc liên kết mật mã của chứng thư xác thực với mẫu sinh trắc học cục bộ của người dùng bên trong vùng cách ly phần cứng an toàn). Hình ảnh giống như việc dán ảnh chân dung vân tay độc quyền vào hộ chiếu ngay bên trong két sắt sinh trắc học của điện thoại.
- **Grammar & collocations:**
  - implement biometric credential binding (triển khai liên kết thông tin xác thực sinh trắc học)
  - biometric credential binding security (bảo mật liên kết thông tin xác thực sinh trắc học)
  - enforce biometric credential binding (thực thi liên kết thông tin xác thực sinh trắc học)
- **Register & nuance:** Hardware security, identity verification, high security context.
- **Examples:**
  - *Biometric credential binding prevents stolen wallets from being used by unauthorized individuals.* -> Liên kết thông tin xác thực sinh trắc học ngăn chặn ví bị đánh cắp bị sử dụng bởi các cá nhân trái phép.
  - *The secure enclave handles biometric credential binding without exposing raw sensor data.* -> Vùng cách ly an toàn xử lý việc liên kết thông tin xác thực sinh trắc học mà không làm lộ dữ liệu cảm biến thô.
- **Liên kết tiếng Hàn:** 생체 인식 자격 증명 바인딩 (Saeng-che in-sik jagyeok jeung-myeong ba-in-ding) — kỹ thuật gắn kết chứng thư số với dữ liệu sinh trắc học cá nhân.

## 19. credential revocation list status
- **IPA:** /krɪˈdɛnʃəl ˌrɛvəˈkeɪʃən lɪst ˈsteɪtəs/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The real-time validity status of a credential, checked against a public list or dynamic registry to determine whether the issuer has invalidated the credential before its expiration date.
- **Core meaning & mental image — Tiếng Việt:** Trạng thái danh sách thu hồi chứng thư (trạng thái hiệu lực thời gian thực của một chứng thư, được kiểm tra dựa trên danh sách công khai hoặc sổ đăng ký động để xác định bên cấp đã vô hiệu hóa chứng thư chưa). Hình ảnh giống như việc tra cứu danh sách thẻ tín dụng bị báo mất tại máy quẹt thẻ cửa hàng.
- **Grammar & collocations:**
  - check credential revocation list status (kiểm tra trạng thái danh sách thu hồi chứng thư)
  - update credential revocation list status (cập nhật trạng thái danh sách thu hồi chứng thư)
  - credential revocation list status check (việc kiểm tra trạng thái danh sách thu hồi)
- **Register & nuance:** Public key infrastructure, operational maintenance, standard protocol.
- **Examples:**
  - *Verifiers must query the credential revocation list status before accepting any high-value certificate.* -> Bên xác thực phải truy vấn trạng thái danh sách thu hồi chứng thư trước khi chấp nhận bất kỳ chứng chỉ giá trị cao nào.
  - *The issuer signed a new credential revocation list status update this morning.* -> Nhà phát hành đã ký bản cập nhật trạng thái danh sách thu hồi chứng thư mới vào sáng nay.
- **Liên kết tiếng Hàn:** 자격 증명 폐기 목록 상태 (Jagyeok jeung-myeong pye-gi mok-rok sang-tae) — trạng thái hiệu lực kiểm tra từ danh sách chứng thư bị thu hồi.

## 20. trust registry ecosystem
- **IPA:** /trʌst ˈrɛdʒɪstri ˈiːkoʊˌsɪstəm/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A coordinated network of trusted issuers, schemas, and governance frameworks that interoperate to provide legally and technically binding credentials across industries.
- **Core meaning & mental image — Tiếng Việt:** Hệ sinh thái sổ đăng ký tin cậy (mạng lưới phối hợp gồm các nhà phát hành đáng tin cậy, lược đồ và khung quản trị hoạt động tương tác để cung cấp chứng thư có giá trị pháp lý và kỹ thuật). Hình ảnh giống như một mạng lưới các cơ quan công chứng toàn cầu công nhận lẫn nhau qua các con dấu chuẩn hóa.
- **Grammar & collocations:**
  - join a trust registry ecosystem (tham gia vào hệ sinh thái sổ đăng ký tin cậy)
  - expand the trust registry ecosystem (mở rộng hệ sinh thái sổ đăng ký tin cậy)
  - trust registry ecosystem interoperability (tính tương tác của hệ sinh thái sổ đăng ký tin cậy)
- **Register & nuance:** Enterprise architecture, ecosystem governance, cross-industry standards.
- **Examples:**
  - *Healthcare providers and insurers collaborate within a shared trust registry ecosystem.* -> Các nhà cung cấp dịch vụ y tế và công ty bảo hiểm hợp tác trong một hệ sinh thái sổ đăng ký tin cậy chia sẻ.
  - *Participation in the trust registry ecosystem requires adherence to strict cryptographic policies.* -> Việc tham gia vào hệ sinh thái sổ đăng ký tin cậy đòi hỏi tuân thủ các chính sách mật mã nghiêm ngặt.
- **Liên kết tiếng Hàn:** 신뢰 레지스트리 생태계 (Sin-roe re-ji-seu-teu-ri saeng-tae-gye) — hệ sinh thái các cơ quan và sổ đăng ký có độ tin cậy cao.

## 21. cryptographic key rotation ceremony
- **IPA:** /ˌkrɪptəˈɡræfɪk kiː roʊˈteɪʃən ˈsɛrəmoʊni/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A formally structured, audited operational procedure in which administrative root keys or issuer signing keys are systematically retired and replaced with new cryptographic keys.
- **Core meaning & mental image — Tiếng Việt:** Buổi lễ luân phiên khóa mật mã (quy trình vận hành được cấu trúc và kiểm toán chính thức, trong đó các khóa gốc quản trị hoặc khóa ký của nhà phát hành được thay thế bằng khóa mới). Hình ảnh giống như nghi thức thay đổi chìa khóa kho bạc quốc gia dưới sự chứng kiến của nhiều nhân chứng có thẩm quyền.
- **Grammar & collocations:**
  - conduct a cryptographic key rotation ceremony (tiến hành buổi lễ luân phiên khóa mật mã)
  - schedule a cryptographic key rotation ceremony (lên lịch buổi lễ luân phiên khóa mật mã)
  - cryptographic key rotation ceremony protocol (giao thức lễ luân phiên khóa mật mã)
- **Register & nuance:** High security, enterprise infrastructure, compliance audit.
- **Examples:**
  - *The security team performed the annual cryptographic key rotation ceremony under strict multi-signature control.* -> Nhóm bảo mật đã thực hiện buổi lễ luân phiên khóa mật mã hàng năm dưới sự kiểm soát đa chữ ký nghiêm ngặt.
  - *During the cryptographic key rotation ceremony, old signing keys were securely archived.* -> Trong buổi lễ luân phiên khóa mật mã, các khóa ký cũ đã được lưu trữ an toàn.
- **Liên kết tiếng Hàn:** 암호학적 키 교체 의식 (Am-ho-hak-jeok ki gyo-che ui-sik) — quy trình trang trọng thay thế và cập nhật khóa mật mã hệ thống.

## 22. non-correlatable credential assertion
- **IPA:** /nɒn ˈkɒrəleɪtəbəl krɪˈdɛnʃəl əˈsɜːʃən/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A cryptographic statement presented by a user that proves valid claims without allowing verifiers or observers to link multiple presentations back to the same user identity.
- **Core meaning & mental image — Tiếng Việt:** Khẳng định thông tin xác thực không thể tương quan (tuyên bố mật mã do người dùng trình bày chứng minh các yêu cầu hợp lệ mà không cho phép bên xác thực liên kết nhiều lần trình bày về cùng một danh tính). Hình ảnh giống như việc bạn đưa ra các mảnh giấy trúng thưởng khác nhau ở các quầy khác nhau mà người bán không thể biết đó là cùng một người chơi.
- **Grammar & collocations:**
  - make a non-correlatable credential assertion (đưa ra khẳng định thông tin xác thực không thể tương quan)
  - ensure non-correlatable credential assertion (đảm bảo khẳng định thông tin xác thực không thể tương quan)
  - non-correlatable credential assertion technique (kỹ thuật khẳng định thông tin xác thực không thể tương quan)
- **Register & nuance:** Advanced privacy tech, cryptographic anonymity, formal specs.
- **Examples:**
  - *The protocol achieves complete anonymity through non-correlatable credential assertions across verifiers.* -> Giao thức đạt được tính ẩn danh hoàn toàn thông qua các khẳng định thông tin xác thực không thể tương quan giữa các bên xác thực.
  - *Each session generates a unique non-correlatable credential assertion.* -> Mỗi phiên làm việc tạo ra một khẳng định thông tin xác thực không thể tương quan duy nhất.
- **Liên kết tiếng Hàn:** 상호 연관 불가능한 자격 증명 주장 (Sang-ho yeon-gwan bul-gan-neun-han jagyeok jeung-myeong ju-jang) — tuyên bố thông tin xác thực ngăn chặn việc truy nguyên danh tính chéo.

## 23. cross-border identity interoperability
- **IPA:** /krɔːs ˈbɔːrdər aɪˈdɛntəti ˌɪntərˌɒpərəˈbɪləti/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** The technical and semantic capability of different national or regional identity systems to recognize, process, and validate verifiable credentials issued across international jurisdictions.
- **Core meaning & mental image — Tiếng Việt:** Khả năng tương tác danh tính xuyên biên giới (khả năng kỹ thuật và ngữ nghĩa của các hệ thống danh tính quốc gia khác nhau trong việc công nhận, xử lý và xác thực chứng thư được cấp ở các khu vực quốc tế). Hình ảnh giống như việc hộ chiếu điện tử của bạn được máy quét tự động nhận diện tại sân bay của mọi quốc gia trên thế giới.
- **Grammar & collocations:**
  - achieve cross-border identity interoperability (đạt được khả năng tương tác danh tính xuyên biên giới)
  - promote cross-border identity interoperability (thúc đẩy khả năng tương tác danh tính xuyên biên giới)
  - cross-border identity interoperability framework (khung tương tác danh tính xuyên biên giới)
- **Register & nuance:** International standards, legal compliance, geopolitical tech policy.
- **Examples:**
  - *Standardized schemas are crucial for achieving seamless cross-border identity interoperability.* -> Các lược đồ chuẩn hóa rất quan trọng để đạt được khả năng tương tác danh tính xuyên biên giới liền mạch.
  - *The European Union initiative aims to establish full cross-border identity interoperability.* -> Sáng kiến của Liên minh Châu Âu nhằm thiết lập khả năng tương tác danh tính xuyên biên giới đầy đủ.
- **Liên kết tiếng Hàn:** 국경 간 신원 상호 운용성 (Guk-gyeong gan sin-won sang-ho un-yong-seong) — khả năng tương thích và công nhận danh tính số giữa các quốc gia.

## 24. cryptographic zero-knowledge range proof
- **IPA:** /ˌkrɪptəˈɡræfɪk ˈzɪroʊ ˈnɑlɪdʒ reɪndʒ pruːf/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A mathematical proof demonstrating that a secret number lies within a specific numeric range (e.g., between 18 and 100) without revealing the exact number itself.
- **Core meaning & mental image — Tiếng Việt:** Bằng chứng khoảng giá trị không kiến thức mật mã (bằng chứng toán học chứng minh một con số bí mật nằm trong một khoảng xác định mà không làm lộ con số chính xác). Hình ảnh giống như việc bạn chứng minh chiều cao của mình nằm trong khoảng từ 1m6 đến 1m8 mà không cần đứng lên thước đo cụ thể.
- **Grammar & collocations:**
  - generate a cryptographic zero-knowledge range proof (tạo bằng chứng khoảng giá trị không kiến thức mật mã)
  - verify a cryptographic zero-knowledge range proof (xác minh bằng chứng khoảng giá trị không kiến thức mật mã)
  - efficient cryptographic zero-knowledge range proof (bằng chứng khoảng giá trị không kiến thức mật mã hiệu quả)
- **Register & nuance:** Advanced zero-knowledge cryptography, bulletproofs, formal math.
- **Examples:**
  - *Bulletproofs provide an efficient cryptographic zero-knowledge range proof for confidential transactions.* -> Bulletproofs cung cấp bằng chứng khoảng giá trị không kiến thức mật mã hiệu quả cho các giao dịch bảo mật.
  - *The verifier checks the cryptographic zero-knowledge range proof to ensure the value is positive.* -> Bên xác thực kiểm tra bằng chứng khoảng giá trị không kiến thức mật mã để đảm bảo giá trị là dương.
- **Liên kết tiếng Hàn:** 암호학적 영지식 범위 증명 (Am-ho-hak-jeok yeong-jisik beom-wi jeung-myeong) — chứng thực mật mã xác nhận giá trị nằm trong khoảng cho phép mà không lộ số cụ thể.

## 25. post-quantum verifiable credential
- **IPA:** /poʊst ˈkwɒntəm ˈvɛrɪfaɪəbəl krɪˈdɛnʃəl/
- **Loại từ & vị trí trong câu:** Noun phrase (Subject, direct object)
- **Core meaning — English:** A verifiable credential secured by post-quantum cryptographic signature algorithms designed to remain secure against attacks executed by quantum computers.
- **Core meaning & mental image — Tiếng Việt:** Thông tin xác thực chống lượng tử có thể kiểm chứng (chứng thư xác thực được bảo vệ bởi các thuật toán chữ ký mật mã chống lượng tử, thiết kế để an toàn trước các cuộc tấn công từ máy tính lượng tử). Hình ảnh giống như một chiếc két sắt được đúc bằng vật liệu đặc biệt có thể chịu được sức công phá của máy tính siêu việt trong tương lai.
- **Grammar & collocations:**
  - issue a post-quantum verifiable credential (cấp thông tin xác thực chống lượng tử)
  - transition to post-quantum verifiable credentials (chuyển sang thông tin xác thực chống lượng tử)
  - post-quantum verifiable credential security (bảo mật thông tin xác thực chống lượng tử)
- **Register & nuance:** Future-proofing, post-quantum cryptography (PQC), highly advanced.
- **Examples:**
  - *Organizations are beginning to transition toward post-quantum verifiable credentials to future-proof identity systems.* -> Các tổ chức đang bắt đầu chuyển đổi sang thông tin xác thực chống lượng tử để bảo vệ hệ thống danh tính trước tương lai.
  - *A post-quantum verifiable credential relies on lattice-based cryptography signatures.* -> Thông tin xác thực chống lượng tử dựa vào các chữ ký mật mã dựa trên lưới.
- **Liên kết tiếng Hàn:** 포스트 양자 검증 가능한 자격 증명 (Poseuteu yang-ja geom-jeung ganeun-han jagyeok jeung-myeong) — thông tin xác thực được mã hóa an toàn trước máy tính lượng tử.

## Review in context: Part 1 (items 1–12)

In modern decentralized architectures, establishing self-sovereign trust begins when a user generates a **decentralized identifier URI** to anchor their digital identity on a **verifiable data registry ledger**. Rather than depending on traditional authorities, the system operates through a **decentralized public key infrastructure** managed via a **decentralized key management system**. To ensure that issuers maintain ultimate authority without exposing users, applications rely on **credential issuer cryptographic trust** backed by a robust **trust registry ecosystem**. When a user stores their credentials in a **digital identity holder wallet**, they adhere strictly to a **verifiable credential schema**. Furthermore, advanced privacy is achieved through **zero-knowledge selective disclosure** powered by the **bbs+ signature algorithm**, allowing holders to prove specific attributes without revealing raw data. To handle revocations efficiently without bloating blacklists, systems utilize **cryptographic accumulator revocation**, while maintaining complete unlinkability via **pairwise pseudonymous identifiers** under a comprehensive **self-sovereign identity architecture**.

### Vietnamese Translation — Phần 1
Trong các kiến trúc phi tập trung hiện đại, việc thiết lập niềm tin tự chủ bắt đầu khi người dùng tạo ra một **định danh phi tập trung URI** để neo danh tính số của họ trên một **sổ cái cơ sở dữ liệu có thể kiểm chứng**. Thay vì phụ thuộc vào các cơ quan truyền thống, hệ thống hoạt động thông qua **cơ sở hạ tầng khóa công khai phi tập trung** được quản lý bằng **hệ thống quản lý khóa phi tập trung**. Để đảm bảo các nhà phát hành duy trì thẩm quyền tối cao mà không phơi bày người dùng, các ứng dụng dựa vào **niềm tin mật mã của bên cấp chứng thư** được hỗ trợ bởi một **hệ sinh thái sổ đăng ký tin cậy** vững chắc. Khi người dùng lưu trữ chứng thư của họ trong **ví giữ danh tính số**, họ tuân thủ nghiêm ngặt **lược đồ thông tin xác thực có thể kiểm chứng**. Hơn nữa, quyền riêng tư nâng cao đạt được thông qua **tiết lộ chọn lọc không kiến thức** được cung cấp năng lượng bởi **thuật toán chữ ký bbs+**, cho phép người nắm giữ chứng minh các thuộc tính cụ thể mà không tiết lộ dữ liệu thô. Để xử lý các việc thu hồi hiệu quả mà không làm phình danh sách đen, các hệ thống sử dụng **thu hồi bằng bộ tích lũy mật mã**, đồng thời duy trì tính không thể liên kết hoàn toàn thông qua **các định danh giả danh theo cặp** dưới một **kiến trúc danh tính tự chủ** toàn diện.

## Review in context: Part 2 (items 13–25)

During an authentication transaction, the user's wallet generates a **verifiable presentation proof** combined with a **claim attribute predicate proof** to confirm criteria such as age or eligibility. To safeguard against malicious interception, every challenge incorporates a **replay attack prevention nonce**, ensuring that the **privacy-preserving authentication protocol** remains completely secure against replay vectors. Underpinning these interactions is a **decentralized governance framework** that dictates policy updates and schema revisions. Enhanced security features include **biometric credential binding** inside secure hardware enclaves, while verifiers continuously monitor **credential revocation list status** to invalidate compromised assertions. Organizations undergo regular **cryptographic key rotation ceremony** procedures to maintain root key integrity, ensuring that every **non-correlatable credential assertion** remains unlinkable across domains. As international compliance evolves, systems achieve seamless **cross-border identity interoperability** using **cryptographic zero-knowledge range proofs**. Looking ahead, the integration of **post-quantum verifiable credentials** guarantees long-term resilience against quantum computational threats.

### Vietnamese Translation — Phần 2
Trong một giao dịch xác thực, ví của người dùng tạo ra một **bằng chứng trình bày có thể kiểm chứng** kết hợp với **bằng chứng vị từ thuộc tính yêu cầu** để xác nhận các tiêu chí như độ tuổi hoặc tính đủ điều kiện. Để bảo vệ chống lại sự chặn bắt độc hại, mọi thử thách đều kết hợp một **số ngẫu nhiên chống tấn công phát lại**, đảm bảo rằng **giao thức xác thực bảo vệ quyền riêng tư** vẫn hoàn toàn an toàn trước các véc-tơ phát lại. Nền tảng cho các tương tác này là một **khung quản trị phi tập trung** quyết định các cập nhật chính sách và sửa đổi lược đồ. Các tính năng bảo mật nâng cao bao gồm **liên kết thông tin xác thực sinh trắc học** bên trong các vùng cách ly phần cứng an toàn, trong khi bên xác thực liên tục giám sát **trạng thái danh sách thu hồi chứng thư** để vô hiệu hóa các khẳng định bị thỏa hiệp. Các tổ chức trải qua các quy trình **buổi lễ luân phiên khóa mật mã** thường xuyên để duy trì tính toàn vẹn của khóa gốc, đảm bảo mọi **khẳng định thông tin xác thực không thể tương quan** vẫn không thể liên kết qua các miền. Khi tuân thủ quốc tế phát triển, các hệ thống đạt được **khả năng tương tác danh tính xuyên biên giới** liền mạch bằng cách sử dụng **bằng chứng khoảng giá trị không kiến thức mật mã**. Nhìn về tương lai, việc tích hợp **thông tin xác thực chống lượng tử có thể kiểm chứng** đảm bảo khả năng phục hồi lâu dài trước các mốiε đe dọa tính toán lượng tử.
