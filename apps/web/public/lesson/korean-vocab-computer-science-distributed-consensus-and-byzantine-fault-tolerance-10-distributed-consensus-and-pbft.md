<!-- source_policy: original explanations, examples, and passage; computer-science-distributed-consensus-and-byzantine-fault-tolerance terminology cross-checked conceptually, not copied -->
# 컴퓨터과학 및 분산 합의 알고리즘과 비잔틴 장애 허용의 언어

분산합의프로토콜 및 실용적비잔틴장애허용 기반 상태기계복제모델와 합의쿼럼정족수조건 컴퓨터과학 및 분산 합의 알고리즘과 비잔틴 장애 허용의 언어

---

### 분산합의프로토콜

- **발음:** [분:산하비프로토콜]
- **품사:** 명사
- **핵심 의미:** 물리적으로 분리되어 있고 신뢰할 수 없는 네트워크로 연결된 여러 독립 노드(컴퓨터)들이 시스템 장애나 메시지 지연 속에서도 특정 값이나 트랜잭션의 실행 순서에 대해 모두 동일한 결론에 도달하도록 보장하는 분산 컴퓨팅의 핵심 통신 규약.
- **베트남어 뜻:** Giao thức đồng thuận phân tán Distributed Consensus Protocol (quy ước truyền thông cốt lõi của tính toán phân tán bảo đảm rằng nhiều nút độc lập phân tách về mặt vật lý và kết nối qua mạng không đáng tin cậy cùng đi đến một kết luận giống nhau duy nhất về một giá trị cụ thể hoặc thứ tự thực thi của các giao dịch ngay cả khi hệ thống gặp sự cố hoặc xảy ra độ trễ thông điệp)
- **뉘앙스와 사용법:** Trái tim của điện toán đám mây và blockchain; không có giao thức đồng thuận, các máy chủ phân tán không thể giữ được dữ liệu đồng nhất và sẽ dẫn đến tình trạng phân mảnh dữ liệu.
- **재사용 가능한 콜로케이션·청크:**
  - 무결점 분산합의프로토콜 (giao thức đồng thuận phân tán không tì vết)
  - 분산합의프로토콜 설계 (thiết kế giao thức đồng thuận phân tán)
  - 분산합의프로토콜의 지연시간 (độ trễ thời gian của giao thức đồng thuận phân tán)
- **자주 쓰는 문형과 성분:**
  - 분산합의프로토콜을(를) 활용하여 여러 데이터 센터에 분산된 데이터베이스의 트랜잭션 일관성을 완벽히 유지하다 (vận dụng giao thức đồng thuận phân tán để duy trì hoàn hảo tính nhất quán giao dịch của cơ sở dữ liệu phân tán trên nhiều trung tâm dữ liệu)
  - 분산합의프로토콜이(가) 네트워크 파티션이나 노드 장애 상황에서도 시스템 전체의 정지 없이 계속해서 합의를 도출해내다 (giao thức đồng thuận phân tán tiếp tục đưa ra được sự đồng thuận mà không làm tê liệt toàn bộ hệ thống ngay cả trong tình huống phân vùng mạng hoặc lỗi nút)
- **사회적 관계·주제별 register:** Hệ thống phân tán (Distributed Systems), kiến trúc cơ sở dữ liệu, công nghệ blockchain.
- **예문:**
  - 금융 분산 원장 네트워크는 고속 트랜잭션 처리를 위해 지연 시간을 최소화한 새로운 분산합의프로토콜을 채택했다.
- **Dịch:**
  - Mạng lưới sổ cái phân tán tài chính đã áp dụng một giao thức đồng thuận phân tán mới giảm thiểu độ trễ để xử lý giao dịch tốc độ cao.
- **어휘 연결:**
  - 유의어: `상태기계복제` (sao chép máy trạng thái state machine replication SMR)
  - 관련어: `단일장애점제거` (loại bỏ điểm lỗi đơn single point of failure elimination)
- **영어 참고:** `distributed consensus protocol` — giao thức giúp các máy tính phân tán thống nhất về một giá trị duy nhất

---

### 실용적비잔틴장애허용

- **발음:** [시룡쩍비:잔틴장:애허용]
- **품사:** 명사
- **핵심 의미:** 미구엘 카스트로와 바바라 리스코프(Castro & Liskov, 1999)가 제안한 PBFT(Practical Byzantine Fault Tolerance) 알고리즘으로, 전체 노드 수 n개 중 악의적 공격이나 임의의 오작동을 일으키는 비잔틴 노드가 f개 존재할 때, n ≥ 3f + 1 조건을 만족하면 비동기 네트워크 환경에서도 O(n²)의 다항 시간 복잡도로 안전성과 생존성을 보장하는 실용적 합의 기법.
- **베트남어 뜻:** Chịu lỗi Byzantine thực tế Practical Byzantine Fault Tolerance PBFT (thuật toán PBFT do Castro và Liskov đề xuất năm 1999, là kỹ thuật đồng thuận mang tính thực tiễn bảo đảm tính an toàn và sống còn với độ phức tạp thời gian đa thức O(n²) trong môi trường mạng bất đồng bộ nếu thỏa mãn điều kiện n ≥ 3f + 1 khi trong tổng số n nút có f nút Byzantine thực hiện các hành vi tấn công độc hại hoặc trục trặc ngẫu nhiên)
- **뉘앙스와 사용법:** Biến bài toán lý thuyết bất khả thi của Lamport (Byzantine Generals Problem) thành một phần mềm thực thi được trong đời thực; nền tảng của các mạng blockchain liên minh (consortium blockchain) như Hyperledger Fabric.
- **재사용 가능한 콜로케이션·청크:**
  - 카스트로-리스코프 실용적비잔틴장애허용 (thuật toán chịu lỗi Byzantine thực tế của Castro-Liskov)
  - 실용적비잔틴장애허용 알고리즘 구현 (hiện thực hóa thuật toán chịu lỗi Byzantine thực tế)
  - 실용적비잔틴장애허용의 메시지 복잡도 (độ phức tạp thông điệp của chịu lỗi Byzantine thực tế)
- **자주 쓰는 문형과 성분:**
  - 실용적비잔틴장애허용 기법은(는) 프리프리페어, 프리페어, 커밋의 3단계 메시지 교환 절차를 통해 악의적인 거짓 노드의 교란을 원천 봉쇄한다 (kỹ thuật chịu lỗi Byzantine thực tế phong tỏa tận gốc sự quấy nhiễu của các nút giả mạo độc hại thông qua quy trình trao đổi thông điệp 3 giai đoạn pre-prepare, prepare và commit)
  - 기업용 블록체인 시스템은 에너지 소모가 큰 작업증명 대신 실용적비잔틴장애허용을(를) 엔진으로 도입하여 초당 수천 건의 트랜잭션을 확정한다 (hệ thống blockchain doanh nghiệp đưa chịu lỗi Byzantine thực tế vào làm động cơ thay cho chứng minh công việc tốn năng lượng để xác thực hàng nghìn giao dịch mỗi giây)
- **사회적 관계·주제별 register:** Thuật toán chịu lỗi (Fault-tolerant Algorithms), mật mã ứng dụng, hệ thống cấp doanh nghiệp.
- **예문:**
  - 엔터프라이즈 프라이빗 체인은 빠른 최종성과 비잔틴 공격 방어를 위해 실용적비잔틴장애허용 메커니즘을 기본 탑재했다.
- **Dịch:**
  - Chuỗi khối riêng cấp doanh nghiệp đã tích hợp mặc định cơ chế chịu lỗi Byzantine thực tế nhằm bảo đảm tính dứt khoát nhanh chóng và phòng thủ các cuộc tấn công Byzantine.
- **어휘 연결:**
  - 유의어: `비잔틴장군문제` (bài toán các vị tướng Byzantine Byzantine Generals Problem)
  - 관련어: `삼단계메시지교환` (trao đổi thông điệp ba giai đoạn three-phase message exchange)
- **영어 참고:** `Practical Byzantine Fault Tolerance` — thuật toán PBFT cho phép hệ thống phân tán đạt đồng thuận ngay cả khi có nút thù địch

---

### 상태기계복제모델

- **발음:** [상:태기계복쩨모델]
- **품사:** 명사
- **핵심 의미:** 동일한 초기 상태를 가진 결정론적 상태 기계(Deterministic State Machine)들을 여러 분산 서버에 복제해 두고, 분산 합의 알고리즘을 통해 모든 서버가 완전히 동일한 순서의 입력 명령(로그)을 순차적으로 실행하게 함으로써 시스템의 고가용성과 무중단 무결성을 보장하는 분산 시스템 설계 모델(SMR).
- **베트남어 뜻:** Mô hình sao chép máy trạng thái State Machine Replication Model SMR (mô hình thiết kế hệ thống phân tán bảo đảm tính sẵn sàng cao và tính toàn vẹn không gián đoạn của hệ thống bằng cách sao chép các máy trạng thái tiền định sở hữu trạng thái ban đầu giống nhau trên nhiều máy chủ phân tán và sử dụng thuật toán đồng thuận phân tán để tất cả các máy chủ thực thi tuần tự các lệnh đầu vào hay nhật ký theo đúng thứ tự giống hệt nhau)
- **뉘앙스와 사용법:** Nguyên lý kiến trúc tối thượng đằng sau mọi cơ sở dữ liệu phân tán bền bỉ (ZooKeeper, etcd, Google Spanner); nếu các nút khởi đầu giống nhau và nhận cùng một chuỗi lệnh, chúng sẽ luôn có cùng trạng thái cuối cùng.
- **재사용 가능한 콜로케이션·청크:**
  - 결정론적 상태기계복제모델 (mô hình sao chép máy trạng thái tiền định)
  - 상태기계복제모델 아키텍처 (kiến trúc mô hình sao chép máy trạng thái)
  - 상태기계복제모델의 선형화가능성 (khả năng tuyến tính hóa của mô hình sao chép máy trạng thái)
- **자주 쓰는 문형과 성분:**
  - 상태기계복제모델을(를) 채택하면 클러스터 내부의 일부 서버가 다운되더라도 나머지 정상 서버들이 동일한 서비스를 끊김 없이 제공할 수 있다 (nếu áp dụng mô hình sao chép máy trạng thái, ngay cả khi một số máy chủ trong cụm gặp sự cố thì các máy chủ bình thường còn lại vẫn có thể cung cấp dịch vụ đồng nhất không bị gián đoạn)
  - 상태기계복제모델의(의) 핵심은 모든 분산 노드가 입력 트랜잭션을 사전에 합의된 절대적 순서에 따라 처리하도록 보장하는 데 있다 (cốt lõi của mô hình sao chép máy trạng thái nằm ở việc bảo đảm tất cả các nút phân tán xử lý các giao dịch đầu vào theo một thứ tự tuyệt đối đã đồng thuận trước)
- **사회적 관계·주제별 register:** Kiến trúc phần mềm phân tán, lý thuyết hệ điều hành phân tán, cơ sở dữ liệu ACID.
- **예문:**
  - 분산 키-값 저장소는 강력한 데이터 일관성을 구현하기 위해 래프트 기반의 상태기계복제모델을 채택했다.
- **Dịch:**
  - Kho lưu trữ khóa-giá trị phân tán đã áp dụng mô hình sao chép máy trạng thái dựa trên Raft để hiện thực hóa tính nhất quán dữ liệu mạnh mẽ.
- **어휘 연결:**
  - 유의어: `결정론적상태전이` (chuyển trạng thái tiền định deterministic state transition)
  - 관련어: `순차적로그일치` (nhất quán nhật ký tuần tự sequential log consistency)
- **영어 참고:** `State Machine Replication model` — mô hình kiến trúc sao chép máy trạng thái đảm bảo các bản sao luôn đồng bộ tuyệt đối

---

### 합의쿼럼정족수조건

- **발음:** [하비쿼:럼정:족쑤조건]
- **품사:** 명사
- **핵심 의미:** 분산 시스템에서 특정 제안이나 블록을 최종 확정(Commit)하기 위해 반드시 획득해야 하는 응답 노드들의 최소 집합 크기 규정으로, 노드 간의 겹침(Intersection) 속성을 보장하여 동시에 두 개의 상반된 결정이 내려지는 분할 뇌(Split-Brain) 현상을 방지하는 수학적 정족수 요건.
- **베트남어 뜻:** Điều kiện số đại biểu túc số đồng thuận Consensus Quorum Requirement (quy định kích thước tập hợp nút phản hồi tối thiểu bắt buộc phải thu được để xác nhận dứt khoát commit một đề xuất hoặc một khối trong hệ thống phân tán, bảo đảm thuộc tính giao nhau giữa các tập hợp nút nhằm ngăn chặn hiện tượng não phân liệt Split-Brain khi hai quyết định trái ngược nhau được đưa ra cùng một lúc)
- **뉘앙스와 사용법:** Trong hệ thống chịu lỗi sự cố (Crash Fault Tolerance như Raft) 쿼럼 là quá bán Q = ⌊n/2⌋ + 1; trong hệ thống Byzantine (PBFT) 쿼럼 phải là 2f + 1 trên tổng số 3f + 1 để hai tập 쿼럼 bất kỳ luôn giao nhau tại ít nhất một nút trung thực.
- **재사용 가능한 콜로케이션·청크:**
  - 최소 합의쿼럼정족수조건 (điều kiện số đại biểu túc số đồng thuận tối thiểu)
  - 합의쿼럼정족수조건 충족 (đáp ứng điều kiện số đại biểu túc số đồng thuận)
  - 합의쿼럼정족수조건의 수학적 증명 (chứng minh toán học của điều kiện số đại biểu túc số đồng thuận)
- **자주 쓰는 문형과 성분:**
  - 합의쿼럼정족수조건을(를) 달성하지 못하면 제안된 블록은 승인되지 못하고 타임아웃 처리되어 다음 라운드로 넘어간다 (nếu không đạt được điều kiện số đại biểu túc số đồng thuận, khối được đề xuất sẽ không được phê duyệt và bị xử lý hết giờ chuyển sang vòng tiếp theo)
  - 모든 유효한 쿼럼 쌍이 최소 하나 이상의 정직한 노드를 공유하도록 합의쿼럼정족수조건을(를) 엄밀하게 설정해야 데이터 무결성이 보장된다 (tính toàn vẹn dữ liệu chỉ được bảo đảm khi thiết lập chặt chẽ điều kiện số đại biểu túc số đồng thuận sao cho mọi cặp túc số hợp lệ đều chia sẻ ít nhất một nút trung thực)
- **사회적 관계·주제별 register:** Lý thuyết hệ thống phân tán, toán học rời rạc, giao thức mạng máy tính.
- **예문:**
  - 시스템 아키텍트는 네트워크 단절 시에도 split-brain이 발생하지 않도록 합의쿼럼정족수조건을 엄격히 검증했다.
- **Dịch:**
  - Kiến trúc sư hệ thống đã kiểm chứng nghiêm ngặt điều kiện số đại biểu túc số đồng thuận để hiện tượng split-brain không phát sinh ngay cả khi mạng bị đứt đoạn.
- **어휘 연결:**
  - 유의어: `쿼럼교집합속성` (thuộc tính giao nhau của túc số quorum intersection property)
  - 관련어: `스플릿브레인방지` (chống hiện tượng não phân liệt split-brain prevention)
- **영어 참고:** `consensus quorum requirement` — số lượng nút tối thiểu cần thiết để đạt được thỏa thuận hợp lệ trong hệ thống phân tán

---

### 뷰변화장애복구절차

- **발음:** [뷰:변:화장:애복꾸절차]
- **품사:** 명사
- **핵심 의미:** 리더(Primary) 노드가 고장 나거나 네트워크 지연으로 응답하지 않거나 악의적으로 잘못된 메시지를 유포할 때, 백업 노드들이 타이머 만료와 정족수 투표를 통해 현재의 뷰(View) 번호를 증가시키고 다음 순번의 노드를 새로운 리더로 선출하여 합의 작업을 정상화하는 장애 극복 메커니즘.
- **베트남어 뜻:** Quy trình chuyển đổi phục hồi sự cố thay đổi góc nhìn View Change Fault Recovery Procedure (cơ chế khắc phục sự cố trong đó khi nút lãnh đạo chính gặp trục trặc, không phản hồi do trễ mạng hoặc phát tán thông điệp sai trái một cách ác ý thì các nút dự phòng thông qua việc hết hạn bộ đếm thời gian và bỏ phiếu túc số sẽ tăng số thứ tự góc nhìn view hiện tại và bầu nút kế tiếp làm lãnh đạo mới để bình thường hóa hoạt động đồng thuận)
- **뉘앙스와 사용법:** Bảo đảm tính "sống còn" (Liveness) của PBFT: ngăn chặn một nút lãnh đạo xấu có thể làm đóng băng vĩnh viễn toàn bộ mạng lưới phân tán.
- **재사용 가능한 콜로케이션·청크:**
  - 자동 뷰변화장애복구절차 (quy trình chuyển đổi phục hồi sự cố thay đổi góc nhìn tự động)
  - 뷰변화장애복구절차 개시 (khởi động quy trình chuyển đổi phục hồi sự cố thay đổi góc nhìn)
  - 뷰변화장애복구절차의 지연 시간 (thời gian trễ của quy trình chuyển đổi phục hồi sự cố thay đổi góc nhìn)
- **자주 쓰는 문형과 성분:**
  - 리더 노드가 제한 시간 내에 유효한 블록을 제안하지 못하자 백업 노드들이 즉시 뷰변화장애복구절차을(를) 발동했다 (khi nút lãnh đạo không thể đề xuất một khối hợp lệ trong thời gian giới hạn, các nút dự phòng đã kích hoạt ngay quy trình chuyển đổi phục hồi sự cố thay đổi góc nhìn)
  - 뷰변화장애복구절차 동안에는(에는) 진행 중이던 미체결 트랜잭션의 상태를 안전하게 검증하여 새 리더에게 인계해야 한다 (trong quy trình chuyển đổi phục hồi sự cố thay đổi góc nhìn, trạng thái của các giao dịch chưa khớp đang tiến hành phải được kiểm chứng an toàn để bàn giao cho lãnh đạo mới)
- **사회적 관계·주제별 register:** Giao thức chịu lỗi Byzantine (PBFT/BFT), chuyển đổi dự phòng (Failover), tính sẵn sàng cao.
- **예문:**
  - 네트워크 부하로 리더의 응답이 지연되자 클러스터는 뷰변화장애복구절차에 돌입하여 뷰 번호를 v에서 v+1로 전환했다.
- **Dịch:**
  - Khi phản hồi của nút lãnh đạo bị trễ do quá tải mạng, cụm máy chủ đã bước vào quy trình chuyển đổi phục hồi sự cố thay đổi góc nhìn để chuyển số góc nhìn từ v sang v+1.
- **어휘 연결:**
  - 유의어: `새로운리더선출` (bầu chọn lãnh đạo mới new leader election)
  - 관련어: `생존성보장메커니즘` (cơ chế bảo đảm tính sống còn liveness guarantee mechanism)
- **영어 참고:** `view change fault recovery procedure` — quy trình thay thế nút chính bị lỗi bằng cách chuyển sang góc nhìn mới để khôi phục tiến trình

---

### 리더노드제안검증

- **발음:** [리:더노:드제:안검:증]
- **품사:** 명사
- **핵심 의미:** 분산 합의 라운드에서 리더로 지정된 노드가 브로드캐스트한 제안 메시지(블록, 트랜잭션 목록, 상태 전이 명령 등)에 대해, 수신한 모든 참여 노드(검증자)들이 메시지 서명의 유효성, 트랜잭션의 무결성, 뷰 번호의 일치 여부를 독립적으로 대조·심사하는 단계.
- **베트남어 뜻:** Kiểm chứng đề xuất nút lãnh đạo Leader Node Proposal Verification (công đoạn trong đó đối với thông điệp đề xuất như khối, danh sách giao dịch, lệnh chuyển trạng thái do nút được chỉ định làm lãnh đạo phát sóng trong vòng đồng thuận phân tán, tất cả các nút tham gia nhận được người kiểm chứng sẽ độc lập đối chiếu và thẩm định tính hợp lệ của chữ ký thông điệp, tính toàn vẹn của giao dịch và sự trùng khớp của số thứ tự góc nhìn)
- **뉘앙스와 사용법:** Lớp phòng thủ chống gian lận đầu tiên: nếu nút lãnh đạo bị nhiễm mã độc và cố tình chèn giao dịch rút tiền trái phép, quá trình kiểm chứng này sẽ lập tức phát hiện và từ chối.
- **재사용 가능한 콜로케이션·청크:**
  - 철저한 리더노드제안검증 (kiểm chứng đề xuất nút lãnh đạo triệt để)
  - 리더노드제안검증 통과 (vượt qua kiểm chứng đề xuất nút lãnh đạo)
  - 리더노드제안검증 실패에 따른 거부 (từ chối do thất bại kiểm chứng đề xuất nút lãnh đạo)
- **자주 쓰는 문형과 성분:**
  - 참여 노드들은 리더노드제안검증을(를) 마친 후 제안이 정당하다고 판단될 때에만 준비(Prepare) 메시지를 전체 네트워크에 전파한다 (các nút tham gia chỉ lan truyền thông điệp chuẩn bị Prepare ra toàn mạng sau khi đã hoàn tất kiểm chứng đề xuất nút lãnh đạo và phán đoán rằng đề xuất là chính đáng)
  - 리더노드제안검증 과정에서(에서) 이중 지불이나 위조된 디지털 서명이 적발되면 해당 리더는 즉각 탄핵 대상이 된다 (nếu phát hiện chi tiêu kép hoặc chữ ký số giả mạo trong quá trình kiểm chứng đề xuất nút lãnh đạo, nút lãnh đạo đó sẽ ngay lập tức trở thành đối tượng bị bãi nhiệm)
- **사회적 관계·주제별 register:** Xác thực phân tán (Distributed Validation), mật mã học bất đối xứng, kiểm tra tính đúng đắn.
- **예문:**
  - 검증 노드들은 리더노드제안검증을 병렬 스레드로 가속화하여 블록 처리 처리량을 극대화했다.
- **Dịch:**
  - Các nút kiểm chứng đã đẩy nhanh quá trình kiểm chứng đề xuất nút lãnh đạo bằng các luồng song song để tối đa hóa thông lượng xử lý khối.
- **어휘 연결:**
  - 유의어: `디지털서명검증` (kiểm chứng chữ ký số digital signature verification)
  - 관련어: `이중지불차단` (chặn chi tiêu kép double-spending prevention)
- **영어 참고:** `leader node proposal verification` — tiến trình thẩm tra tính hợp lệ và đúng đắn của đề xuất do nút điều phối đưa ra

---

### 네트워크파티션허용

- **발음:** [네:트워:크파:티션허:용]
- **품사:** 명사
- **핵심 의미:** 라우터 고장이나 해저 케이블 단선 등으로 인해 분산 네트워크가 서로 통신할 수 없는 둘 이상의 독립된 하위 네트워크(파티션)로 물리적·논리적으로 쪼개지더라도, 시스템 전체가 파국적인 데이터 불일치나 영구 중단에 빠지지 않고 사전 정의된 일관성 또는 가용성 보장 정책에 따라 견고하게 동작을 유지하는 분산 내결함성(CAP 정리의 P).
- **베트남어 뜻:** Dung nạp phân vùng mạng Network Partition Tolerance (khả năng chịu lỗi phân tán chữ P trong định lý CAP, biểu thị rằng ngay cả khi mạng phân tán bị chia cắt về mặt vật lý hoặc logic thành hai hay nhiều mạng con độc lập không thể giao tiếp với nhau do hỏng router hoặc đứt cáp quang biển thì toàn bộ hệ thống vẫn không bị rơi vào sự bất nhất dữ liệu thảm họa hay đình trệ vĩnh viễn mà kiên cường duy trì hoạt động theo chính sách bảo đảm tính sẵn sàng hoặc tính nhất quán đã định trước)
- **뉘앙스와 사용법:** Yếu tố bắt buộc của mạng phân tán thực tế: mạng Internet luôn có thể bị đứt cáp bất cứ lúc nào, nên một hệ thống không dung nạp phân vùng mạng thì không thể triển khai trên quy mô toàn cầu.
- **재사용 가능한 콜로케이션·청크:**
  - 강력한 네트워크파티션허용 (dung nạp phân vùng mạng mạnh mẽ)
  - 네트워크파티션허용 보장 (bảo đảm dung nạp phân vùng mạng)
  - CAP 정리와 네트워크파티션허용 (định lý CAP và dung nạp phân vùng mạng)
- **자주 쓰는 문형과 성분:**
  - CAP 정리에 따르면 어떤 분산 시스템도 네트워크파티션허용 상황에서(에서) 일관성(C)과 가용성(A)을 동시에 완벽히 만족할 수는 없다 (theo định lý CAP, không một hệ thống phân tán nào có thể thỏa mãn hoàn hảo cùng lúc cả tính nhất quán C và tính sẵn sàng A trong tình huống dung nạp phân vùng mạng)
  - 네트워크파티션허용 설계를(를) 고도화하여 단절된 노드들이 과반수 쿼럼을 형성하지 못할 경우 안전하게 읽기 전용 모드로 전환되도록 조치했다 (nâng cấp thiết kế dung nạp phân vùng mạng để có biện pháp an toàn chuyển sang chế độ chỉ đọc nếu các nút bị cô lập không hình thành được túc số quá bán)
- **사회적 관계·주제별 register:** Định lý CAP (Brewer's CAP Theorem), lý thuyết mạng phân tán, kỹ thuật độ tin cậy hệ thống (SRE).
- **예문:**
  - 글로벌 클라우드 플랫폼은 대륙 간 해저 케이블 절단 사고에 대비해 완벽한 네트워크파티션허용 아키텍처를 구축했다.
- **Dịch:**
  - Nền tảng đám mây toàn cầu đã xây dựng kiến trúc dung nạp phân vùng mạng hoàn hảo để phòng ngừa sự cố đứt cáp quang biển liên lục địa.
- **어휘 연결:**
  - 유의어: `캡정리선택` (lựa chọn định lý CAP CAP theorem tradeoff)
  - 관련어: `망분리내구성` (độ bền bỉ khi phân tách mạng network isolation resilience)
- **영어 참고:** `network partition tolerance` — khả năng tiếp tục vận hành an toàn của hệ thống phân tán khi mạng lưới bị chia cắt thành nhiều phân vùng

---

### 래프트합의알고리즘

- **발음:** [래:프터하비알:고리즘]
- **품사:** 명사
- **핵심 의미:** 디에고 옹가로와 존 오스터하우트(Ongaro & Ousterhout, 2014)가 악명 높은 Paxos의 난해한 복잡성을 극복하고 개발자의 이해 용이성(Understandability)을 최우선으로 설계한 분산 합의 알고리즘으로, 리더 선출(Leader Election), 로그 복제(Log Replication), 안전성(Safety)의 세 가지 명확한 독립 하위 문제로 분할하여 상태 기계 복제를 구현한 기술.
- **베트남어 뜻:** Thuật toán đồng thuận Raft Raft Consensus Algorithm (thuật toán đồng thuận phân tán do Diego Ongaro và John Ousterhout sáng tạo năm 2014 nhằm khắc phục sự phức tạp khó hiểu khét tiếng của Paxos và lấy tính dễ hiểu cho lập trình viên làm ưu tiên thiết kế hàng đầu, hiện thực hóa sao chép máy trạng thái bằng cách chia nhỏ thành 3 bài toán con độc lập rõ ràng gồm bầu cử lãnh đạo, sao chép nhật ký và tính an toàn)
- **뉘앙스와 사용법:** Tiêu chuẩn vàng của hạ tầng đám mây hiện đại: etcd (trái tim của Kubernetes), TiKV, Consul đều dùng Raft để điều phối hàng triệu máy chủ container.
- **재사용 가능한 콜로케이션·청크:**
  - 현대적 래프트합의알고리즘 (thuật toán đồng thuận Raft hiện đại)
  - 래프트합의알고리즘 기반 클러스터 (cụm máy chủ dựa trên thuật toán đồng thuận Raft)
  - 래프트합의알고리즘의 동작 메커니즘 (cơ chế hoạt động của thuật toán đồng thuận Raft)
- **자주 쓰는 문형과 성분:**
  - 쿠버네티스의 메타데이터 저장소인 etcd는 노드 간의 엄격한 일관성을 유지하기 위해 래프트합의알고리즘을(를) 엔진으로 사용한다 (etcd - kho lưu trữ siêu dữ liệu của Kubernetes - sử dụng thuật toán đồng thuận Raft làm động cơ để duy trì tính nhất quán nghiêm ngặt giữa các nút)
  - 래프트합의알고리즘은(는) 리더가 모든 권한을 독점하는 강력한 리더십 모델을 통해 로그 불일치를 단순하고 효율적으로 해결한다 (thuật toán đồng thuận Raft giải quyết sự bất nhất nhật ký một cách đơn giản và hiệu quả thông qua mô hình quyền lực lãnh đạo mạnh mẽ trong đó lãnh đạo độc quyền mọi quyền hạn)
- **사회적 관계·주제별 register:** Phần mềm nguồn mở phân tán, điều phối container (Kubernetes), thiết kế hệ thống chịu lỗi.
- **예문:**
  - 엔지니어링 팀은 복잡한 팍소스 대신 직관적이고 검증된 래프트합의알고리즘을 분산 캐시 동기화에 도입했다.
- **Dịch:**
  - Đội ngũ kỹ thuật đã đưa thuật toán đồng thuận Raft trực quan và đã được kiểm chứng vào đồng bộ hóa bộ nhớ cache phân tán thay vì Paxos phức tạp.
- **어휘 연결:**
  - 유의어: `리더선출프로세스` (tiến trình bầu cử lãnh đạo leader election process)
  - 관련어: `로그일관성보장` (bảo đảm tính nhất quán nhật ký log consistency guarantee)
- **영어 참고:** `Raft consensus algorithm` — thuật toán đồng thuận phân tán chú trọng tính dễ hiểu và dễ triển khai

---

### 안전성생존성보장

- **발음:** [안:전썽생:존썽보:장]
- **품사:** 명사
- **핵심 의미:** 분산 합의 알고리즘의 완전성을 수학적으로 증명할 때 사용되는 두 가지 필수 성질로, '나쁜 일이 결코 일어나지 않는다'(Safety, 즉 어떤 노드들도 서로 모순된 값을 합의하지 않음)는 안전성과, '좋은 일이 결국에는 일어난다'(Liveness, 즉 시스템이 교착 상태에 빠지지 않고 결국에는 합의에 도달함)는 생존성을 동시에 만족하는 상태.
- **베트남어 뜻:** Bảo đảm an toàn và sống còn Safety and Liveness Guarantee (trạng thái đồng thời thỏa mãn hai thuộc tính bắt buộc dùng khi chứng minh toán học tính hoàn bị của một thuật toán đồng thuận phân tán, gồm an toàn Safety nghĩa là điều tồi tệ không bao giờ xảy ra - không có các nút nào đồng thuận về các giá trị mâu thuẫn nhau - và sống còn Liveness nghĩa là điều tốt đẹp rốt cuộc sẽ xảy ra - hệ thống không bị rơi vào bế tắc deadlock mà cuối cùng sẽ đạt được sự đồng thuận)
- **뉘앙스와 사용법:** Nguyên lý toán học của Leslie Lamport: một thuật toán chỉ đứng yên không làm gì thì đạt Safety hoàn hảo nhưng vô dụng vì thiếu Liveness; ngược lại, thuật toán trả về kết quả ngẫu nhiên ngay lập tức thì có Liveness nhưng vi phạm Safety.
- **재사용 가능한 콜로케이션·청크:**
  - 수학적 안전성생존성보장 (bảo đảm an toàn và sống còn mang tính toán học)
  - 안전성생존성보장 증명 (chứng minh bảo đảm an toàn và sống còn)
  - 안전성생존성보장의 상충 관계 (mối quan hệ đánh đổi trong bảo đảm an toàn và sống còn)
- **자주 쓰는 문형과 성분:**
  - FLP 불가능성 정리에 따르면 순수 비동기 네트워크에서는 단 하나의 노드 장애만으로도 완벽한 안전성생존성보장을(를) 동시에 달성하는 결정론적 합의 알고리즘은 존재할 수 없다 (theo định lý bất khả thi FLP, trong mạng thuần bất đồng bộ không thể tồn tại một thuật toán đồng thuận tiền định nào đồng thời đạt được việc bảo đảm an toàn và sống còn hoàn hảo chỉ với sự cố của một nút duy nhất)
  - 부분 동기식 네트워크 가정을 도입함으로써 현실적인 조건 하에서 분산 원장의 안전성생존성보장을(를) 성공적으로 입증해내다 (thông qua việc đưa vào giả định mạng bán đồng bộ, đã chứng minh thành công việc bảo đảm an toàn và sống còn của sổ cái phân tán dưới các điều kiện thực tế)
- **사회적 관계·주제별 register:** Toán học lý thuyết máy tính, lý thuyết xác minh hình thức (Formal Verification), logic thời gian.
- **예문:**
  - 새로 제안된 블록체인 합의 엔진은 형식 검증 도구를 통해 안전성생존성보장을 엄격하게 증명했다.
- **Dịch:**
  - Động cơ đồng thuận blockchain mới đề xuất đã chứng minh nghiêm ngặt việc bảo đảm an toàn và sống còn thông qua các công cụ xác minh hình thức.
- **어휘 연결:**
  - 유의어: `에프엘피불가능성정리` (định lý bất khả thi FLP Fischer-Lynch-Paterson impossibility theorem)
  - 관련어: `형식검증기법` (kỹ thuật xác minh hình thức formal verification technique)
- **영어 참고:** `safety and liveness guarantee` — hai thuộc tính cốt lõi chứng minh tính đúng đắn và khả năng tiến triển của hệ thống phân tán

---

### 메시지서명검증부하

- **발음:** [메:시지서:명검:증부:하]
- **품사:** 명사
- **핵심 의미:** PBFT와 같은 비잔틴 장애 허용 합의 시스템에서, 노드들이 브로드캐스트하는 수많은 제안, 준비, 커밋 메시지의 위조 여부를 판별하기 위해 타원곡선 암호(ECDSA)나 RSA 기반의 비대칭 디지털 서명을 해석하고 수학적으로 검증하는 과정에서 CPU와 메모리에 가해지는 극심한 연산 오버헤드.
- **베트남어 뜻:** Gánh nặng tải kiểm chứng chữ ký thông điệp Message Signature Verification Overhead (chi phí tính toán phụ trội cực kỳ lớn đè nặng lên CPU và bộ nhớ trong quá trình phân tích và kiểm chứng toán học các chữ ký số bất đối xứng dựa trên mật mã đường cong elliptic ECDSA hoặc RSA để xác định tính giả mạo của vô số thông điệp đề xuất, chuẩn bị và cam kết do các nút phát sóng trong các hệ thống đồng thuận chịu lỗi Byzantine như PBFT)
- **뉘앙스와 사용법:** Điểm nghẽn thắt cổ chai lớn nhất khiến PBFT truyền thống không thể mở rộng lên hàng trăm hàng nghìn nút; để khắc phục, người ta phát triển chữ ký ngưỡng (threshold signatures) hoặc chữ ký BLS cho phép gộp hàng nghìn chữ ký thành một.
- **재사용 가능한 콜로케이션·청크:**
  - 과도한 메시지서명검증부하 (gánh nặng tải kiểm chứng chữ ký thông điệp quá mức)
  - 메시지서명검증부하 경감 (giảm nhẹ gánh nặng tải kiểm chứng chữ ký thông điệp)
  - 메시지서명검증부하로 인한 처리 지연 (chậm trễ xử lý do gánh nặng tải kiểm chứng chữ ký thông điệp)
- **자주 쓰는 문형과 성분:**
  - 노드 수가 증가함에 따라 기하급수적으로 폭증하는 메시지서명검증부하을(를) 줄이기 위해 BLS 다중 서명 집약 기술을 도입했다 (để giảm bớt gánh nặng tải kiểm chứng chữ ký thông điệp bùng nổ theo cấp số nhân khi số lượng nút tăng lên, công nghệ gom cụm đa chữ ký BLS đã được đưa vào)
  - 메시지서명검증부하가(이) 시스템의 최대 트랜잭션 처리량(TPS)을 제약하는 주된 병목 구간으로 작용하고 있다 (gánh nặng tải kiểm chứng chữ ký thông điệp đang hoạt động như một điểm nghẽn cổ chai chính hạn chế thông lượng xử lý giao dịch tối đa TPS của hệ thống)
- **사회적 관계·주제별 register:** Tối ưu hóa hiệu năng hệ thống phân tán, mật mã học hiệu năng cao, kỹ thuật tăng tốc phần cứng.
- **예문:**
  - 개발팀은 암호화 가속 카드를 서버에 장착하여 노드의 메시지서명검증부하를 70% 이상 대폭 절감했다.
- **Dịch:**
  - Đội ngũ phát triển đã lắp đặt các card tăng tốc mã hóa vào máy chủ để cắt giảm mạnh mẽ hơn 70% gánh nặng tải kiểm chứng chữ ký thông điệp của nút.
- **어휘 연결:**
  - 유의어: `비엘에스서명집약` (gom cụm chữ ký BLS BLS signature aggregation)
  - 관련어: `연산오버헤드감축` (cắt giảm chi phí tính toán phụ trội computational overhead reduction)
- **영어 참고:** `message signature verification overhead` — tải tính toán phát sinh từ việc kiểm tra chữ ký số trong các bước đồng thuận

---

### 로그복제동기화절차

- **발음:** [로:그복쩨동:기화절차]
- **품사:** 명사
- **핵심 의미:** 리더 노드가 클라이언트로부터 수신한 일련의 상태 변경 명령들을 자신의 로컬 로그에 추가한 뒤 모든 팔로워(Follower) 노드들에게 RPC(AppendEntries)를 통해 전송하고, 정족수의 과반수가 안전하게 기록했음을 확인한 후 상태 머신에 반영하여 전체 노드의 로그를 완전히 일치시키는 동기화 파이프라인.
- **베트남어 뜻:** Quy trình đồng bộ sao chép nhật ký Log Replication Synchronization Procedure (đường ống đồng bộ hóa trong đó nút lãnh đạo sau khi thêm một chuỗi các lệnh thay đổi trạng thái nhận từ máy khách vào nhật ký cục bộ của mình sẽ truyền tới tất cả các nút đi theo thông qua RPC AppendEntries và sau khi xác nhận đa số túc số đã ghi lại an toàn sẽ phản ánh vào máy trạng thái để làm cho nhật ký của toàn bộ các nút trùng khớp hoàn toàn)
- **뉘앙스와 사용법:** Xương sống của tính nhất quán trong Raft và Paxos: bảo đảm rằng mọi nút đều lưu giữ một cuốn nhật ký lịch sử y hệt nhau, không bao giờ có chuyện sửa đổi nhật ký đã chốt.
- **재사용 가능한 콜로케이션·청크:**
  - 완전한 로그복제동기화절차 (quy trình đồng bộ sao chép nhật ký hoàn chỉnh)
  - 로그복제동기화절차 최적화 (tối ưu hóa quy trình đồng bộ sao chép nhật ký)
  - 로그복제동기화절차의 지연 극복 (khắc phục sự chậm trễ trong quy trình đồng bộ sao chép nhật ký)
- **자주 쓰는 문형과 성분:**
  - 리더는 장애에서 복구되어 뒤처진 팔로워 노드의 로그 인덱스를 신속히 추적하여 맞춤형 로그복제동기화절차을(를) 수행한다 (nút lãnh đạo nhanh chóng truy vết chỉ mục nhật ký của nút đi theo bị tụt hậu sau khi phục hồi từ sự cố để thực hiện quy trình đồng bộ sao chép nhật ký may đo riêng)
  - 배치 처리 및 비동기 디스크 플러시 기법을 결합하여 대규모 트래픽 환경에서도 로그복제동기화절차의(의) 처리 속도를 극대화하다 (kết hợp kỹ thuật xử lý theo lô và xả đĩa bất đồng bộ để tối đa hóa tốc độ xử lý của quy trình đồng bộ sao chép nhật ký ngay cả trong môi trường lưu lượng khổng lồ)
- **사회적 관계·주제별 register:** Lưu trữ phân tán, kỹ thuật ghi nhật ký giao dịch (WAL), giao thức RPC phân tán.
- **예문:**
  - 데이터베이스 클러스터는 디스크 I/O 병목을 해소하기 위해 메모리 매핑 기반의 고속 로그복제동기화절차를 구축했다.
- **Dịch:**
  - Cụm cơ sở dữ liệu đã xây dựng quy trình đồng bộ sao chép nhật ký tốc độ cao dựa trên ánh xạ bộ nhớ để giải tỏa điểm nghẽn I/O đĩa.
- **어휘 연결:**
  - 유의어: `로그추가원격프로시저호출` (gọi thủ tục từ xa thêm nhật ký AppendEntries RPC)
  - 관련어: `선행기록로그저장` (lưu trữ nhật ký ghi trước write-ahead log WAL)
- **영어 참고:** `log replication synchronization procedure` — quy trình sao chép và đồng bộ hóa các bản ghi nhật ký tuần tự giữa các nút

---

### 비잔틴노드악의적행동

- **발음:** [비:잔틴노:드아기적행:동]
- **품사:** 명사
- **핵심 의미:** 단순한 시스템 충돌(Crash)이나 침묵(Fail-silent)을 넘어, 해킹당하거나 오작동하여 다른 노드들에게 서로 다른 거짓 정보를 전달(이중 제안, Equivocation)하거나, 서명을 위조하고 유효한 메시지를 고의로 누락시키는 등 시스템 전체의 합의를 파탄 내기 위해 수행하는 모든 예측 불가능하고 기만적인 적대적 행위.
- **베트남어 뜻:** Hành vi độc hại của nút Byzantine Malicious Behavior of Byzantine Nodes (tất cả các hành vi thù địch lừa dối và không thể dự đoán trước vượt ra ngoài sự sụp đổ hệ thống hay im lặng đơn thuần, phát sinh khi nút bị tin tặc tấn công hoặc gặp trục trặc truyền đạt các thông tin giả mạo khác nhau cho các nút khác như phát ngôn hai lời Equivocation, giả mạo chữ ký hoặc cố tình bỏ sót các thông điệp hợp lệ nhằm phá vỡ sự đồng thuận của toàn bộ hệ thống)
- **뉘앙스와 사용법:** Mô hình lỗi khắc nghiệt nhất trong khoa học máy tính: hệ thống không thể tin tưởng bất kỳ ai tuyệt đối vì bất kỳ nút nào cũng có thể là kẻ phản bội hai mang.
- **재사용 가능한 콜로케이션·청크:**
  - 조직적인 비잔틴노드악의적행동 (hành vi độc hại của nút Byzantine có tổ chức)
  - 비잔틴노드악의적행동 차단 (chặn đứng hành vi độc hại của nút Byzantine)
  - 비잔틴노드악의적행동 탐지 알고리즘 (thuật toán phát hiện hành vi độc hại của nút Byzantine)
- **자주 쓰는 문형과 성분:**
  - 합의 프로토콜은 최대 f개의 비잔틴노드악의적행동이(가) 동시에 발생하더라도 전체 네트워크의 데이터 무결성을 결코 침해당하지 않도록 설계되어야 한다 (giao thức đồng thuận phải được thiết kế sao cho tính toàn vẹn dữ liệu của toàn mạng không bao giờ bị xâm phạm ngay cả khi có tối đa f hành vi độc hại của nút Byzantine phát sinh đồng thời)
  - 이중 서명을 통해 서로 다른 블록을 제안하는 비잔틴노드악의적행동을(를) 적발한 시스템은 해당 검증자의 예치금을 전액 몰수하는 슬래싱을 단행했다 (hệ thống phát hiện hành vi độc hại của nút Byzantine đề xuất các khối khác nhau thông qua ký kép đã tiến hành trừng phạt slashing tịch thu toàn bộ tiền ký quỹ của người kiểm chứng đó)
- **사회적 관계·주제별 register:** Mô hình hóa mối đe dọa (Threat Modeling), an toàn thông tin phân tán, kinh tế học tiền mã hóa (Cryptoeconomics).
- **예문:**
  - 보안 분석가들은 적대적 공격자가 네트워크를 마비시키기 위해 시도한 비잔틴노드악의적행동 패턴을 역추적했다.
- **Dịch:**
  - Các nhà phân tích bảo mật đã truy vết ngược lại các mẫu hành vi độc hại của nút Byzantine do kẻ tấn công thù địch cố gắng thực hiện nhằm làm tê liệt mạng lưới.
- **어휘 연결:**
  - 유의어: `이중발언기만행위` (hành vi lừa dối phát ngôn hai lời equivocation fraud)
  - 관련어: `지분몰수패널티` (hình phạt tịch thu tiền cọc slashing penalty)
- **영어 참고:** `malicious behavior of Byzantine nodes` — các hành vi cố ý truyền tin sai lệch hoặc phá hoại quy trình đồng thuận của nút phản bội

---

### 선출타임아웃임계값

- **발음:** [선:출타임아웃임:계값]
- **품사:** 명사
- **핵심 의미:** Raft와 같은 합의 프로토콜에서 팔로워 노드가 리더로부터 일정 시간 하트비트(Heartbeat) 메시지를 받지 못했을 때 리더 고장으로 간주하고 스스로 후보자(Candidate)로 전환하여 선거를 시작하기까지 대기하는 시간 한계선(보통 스플릿 보트를 방지하기 위해 150ms~300ms 사이의 무작위 값으로 설정됨).
- **베트남어 뜻:** Ngưỡng thời gian chờ bầu cử Election Timeout Threshold (giới hạn thời gian chờ đợi trong các giao thức đồng thuận như Raft khi nút đi theo không nhận được thông điệp nhịp tim Heartbeat từ nút lãnh đạo trong một khoảng thời gian nhất định sẽ coi như lãnh đạo gặp sự cố và tự chuyển thành ứng viên Candidate để khởi động cuộc bầu cử, thường được thiết lập là giá trị ngẫu nhiên từ 150ms đến 300ms nhằm ngăn chặn hiện tượng chia rẽ phiếu bầu split vote)
- **뉘앙스와 사용법:** Sự ngẫu nhiên hóa (Randomized Timeout) chính là nét thiên tài của Raft: nhờ các nút có ngưỡng thời gian chờ khác nhau nên hầu như không bao giờ có chuyện hai nút cùng ứng cử một lúc gây bế tắc.
- **재사용 가능한 콜로케이션·청크:**
  - 무작위 선출타임아웃임계값 (ngưỡng thời gian chờ bầu cử ngẫu nhiên)
  - 선출타임아웃임계값 조정 (điều chỉnh ngưỡng thời gian chờ bầu cử)
  - 선출타임아웃임계값의 최적 범위 (phạm vi tối ưu của ngưỡng thời gian chờ bầu cử)
- **자주 쓰는 문형과 성분:**
  - 네트워크 지연이 심한 지리적 분산 환경에서는 불필요한 잦은 리더 선거를 방지하기 위해 선출타임아웃임계값을(를) 적절히 늘려주어야 한다 (trong môi trường phân tán địa lý có độ trễ mạng lớn, cần tăng ngưỡng thời gian chờ bầu cử một cách thích hợp nhằm ngăn chặn các cuộc bầu cử lãnh đạo diễn ra quá thường xuyên không cần thiết)
  - 각 노드가 독립적인 난수로 선출타임아웃임계재을(를) 설정함으로써 여러 노드가 동시에 후보자로 출마하여 표가 갈리는 현상을 원천 차단하다 (mỗi nút thiết lập ngưỡng thời gian chờ bầu cử bằng số ngẫu nhiên độc lập ngăn chặn tận gốc hiện tượng nhiều nút cùng lúc ra ứng cử khiến lá phiếu bị phân tán)
- **사회적 관계·주제별 register:** Giao thức mạng thời gian thực, điều chỉnh tham số hạt nhân (Tuning), thiết kế độ tin cậy cụm máy chủ.
- **예문:**
  - 시스템 관리자는 패킷 손실률이 높은 클라우드 존의 선출타임아웃임계값을 500밀리초로 상향 조정했다.
- **Dịch:**
  - Quản trị viên hệ thống đã điều chỉnh tăng ngưỡng thời gian chờ bầu cử của vùng đám mây có tỷ lệ mất gói tin cao lên 500 mili giây.
- **어휘 연결:**
  - 유의어: `하트비트주기설정` (thiết lập chu kỳ nhịp tim heartbeat interval setting)
  - 관련어: `스플릿보트방지` (ngăn ngừa chia rẽ phiếu bầu split vote prevention)
- **영어 참고:** `election timeout threshold` — ngưỡng thời gian chờ trước khi nút chuyển sang trạng thái ứng viên để bầu lãnh đạo mới

---

### 비동기통신지연극복

- **발음:** [비:동기통:신지연극뽁]
- **품사:** 명사
- **핵심 의미:** 물리적 거리, 인터넷 라우팅 혼잡, 패킷 손실 등으로 인해 노드 간의 메시지 전달 시간이 임의로 길어지거나 도착 순서가 뒤바뀌는 비동기 네트워크 환경의 한계를 극복하고, 타이머 기반 점진적 백오프(Exponential Backoff), 파이프라이닝, 부분 동기성 가정을 결합하여 합의가 멈추지 않도록 보장하는 시스템 최적화 기법.
- **베트남어 뜻:** Khắc phục độ trễ truyền thông bất đồng bộ Asynchronous Communication Latency Overcoming (kỹ thuật tối ưu hóa hệ thống khắc phục các hạn chế của môi trường mạng bất đồng bộ nơi thời gian truyền thông điệp giữa các nút có thể bị kéo dài tùy ý hoặc thứ tự đến bị xáo trộn do khoảng cách vật lý, tắc nghẽn định tuyến Internet hay mất gói tin, kết hợp cơ chế lùi dần theo hàm mũ dựa trên bộ đếm thời gian, kỹ thuật đường ống hóa pipelining và giả định bán đồng bộ để bảo đảm tiến trình đồng thuận không bị đình trệ)
- **뉘앙스와 사용법:** Điểm khác biệt giữa lý thuyết hàn lâm và sản phẩm công nghiệp: biến một mạng Internet chập chờn thành một cỗ máy phân tán chạy mượt mà như một máy chủ duy nhất.
- **재사용 가능한 콜로케이션·청크:**
  - 효율적 비동기통신지연극복 (khắc phục độ trễ truyền thông bất đồng bộ hiệu quả)
  - 비동기통신지연극복 전략 (chiến lược khắc phục độ trễ truyền thông bất đồng bộ)
  - 비동기통신지연극복을 위한 네트워크 튜닝 (tinh chỉnh mạng để khắc phục độ trễ truyền thông bất đồng bộ)
- **자주 쓰는 문형과 성분:**
  - 대륙 간에 걸쳐 분산된 데이터 노드들은 적응형 타임아웃 메커니즘을 통해 비동기통신지연극복에(에) 성공했다 (các nút dữ liệu phân tán xuyên lục địa đã thành công trong việc khắc phục độ trễ truyền thông bất đồng bộ thông qua cơ chế thời gian chờ thích ứng)
  - 비동기통신지연극복 기술이(가) 뒷받침되지 않으면 글로벌 스케일의 분산 합의 엔진은 지연 시간 폭증으로 인해 실용적 서비스를 제공할 수 없다 (nếu không có công nghệ khắc phục độ trễ truyền thông bất đồng bộ làm điểm tựa, động cơ đồng thuận phân tán quy mô toàn cầu không thể cung cấp dịch vụ thực tiễn do độ trễ bùng nổ)
- **사회적 관계·주제별 register:** Tối ưu hóa giao thức mạng WAN (Wide Area Network Optimization), điện toán đám mây toàn cầu, kiến trúc microservices.
- **예문:**
  - 연구소는 글로벌 금융 원장의 실시간성을 보장하기 위해 고급 패킷 압축 알고리즘을 통한 비동기통신지연극복 방안을 발표했다.
- **Dịch:**
  - Viện nghiên cứu đã công bố phương án khắc phục độ trễ truyền thông bất đồng bộ thông qua thuật toán nén gói tin cao cấp nhằm bảo đảm tính thời gian thực của sổ cái tài chính toàn cầu.
- **어휘 연결:**
  - 유의어: `부분동기화가정` (giả định bán đồng bộ partial synchrony assumption)
  - 관련어: `지수백오프알고리즘` (thuật toán lùi số mũ exponential backoff algorithm)
- **영어 참고:** `asynchronous communication latency overcoming` — phương pháp giải quyết độ trễ và sự xáo trộn thông điệp trong mạng phân tán bất đồng bộ

---

### 원자적브로드캐스트

- **발음:** [원:자적브로드캐스트]
- **품사:** 명사
- **핵심 의미:** 분산 시스템의 모든 정상 노드들이 브로드캐스트된 메시지를 '전부 수신하거나 전부 수신하지 않아야 한다'는 원자성(All-or-Nothing)과, '모든 노드가 정확히 동일한 순서로 메시지를 수신하여 처리해야 한다'는 전순서화(Total Order) 성질을 동시에 엄격하게 만족하는 최고 수준의 신뢰성 있는 통신 프리미티브.
- **베트남어 뜻:** Truyền phát sóng nguyên tử Atomic Broadcast / Total Order Broadcast (nguyên thủy truyền thông có độ tin cậy cao nhất đồng thời thỏa mãn nghiêm ngặt tính nguyên tử nghĩa là tất cả các nút bình thường của hệ thống phân tán phải nhận được toàn bộ thông điệp hoặc hoàn toàn không nhận được gì và tính thứ tự toàn phần nghĩa là tất cả các nút phải nhận và xử lý các thông điệp theo đúng một thứ tự giống hệt nhau)
- **뉘앙스와 사용법:** Được chứng minh toán học là hoàn toàn tương đương với bài toán đồng thuận phân tán: giải quyết được Atomic Broadcast đồng nghĩa với giải quyết được bài toán đồng thuận.
- **재사용 가능한 콜로케이션·청크:**
  - 신뢰성 있는 원자적브로드캐스트 (truyền phát sóng nguyên tử đáng tin cậy)
  - 원자적브로드캐스트 프로토콜 (giao thức truyền phát sóng nguyên tử)
  - 원자적브로드캐스트의 전순서 보장 (bảo đảm thứ tự toàn phần của truyền phát sóng nguyên tử)
- **자주 쓰는 문형과 성분:**
  - 분산 트랜잭션의 ACID 속성을 보장하기 위해서는 데이터 변경 로그가 반드시 원자적브로드캐스트을(를) 통해 모든 복제본에 전달되어야 한다 (để bảo đảm các thuộc tính ACID của giao dịch phân tán, nhật ký thay đổi dữ liệu bắt buộc phải được truyền tải tới tất cả các bản sao thông qua truyền phát sóng nguyên tử)
  - 원자적브로드캐스트이(가) 완벽히 구현됨으로써 네트워크 지연이나 노드 재부팅 상황에서도 분산 장부의 거래 순서가 뒤바뀌는 치명적 오류를 방지하다 (nhờ truyền phát sóng nguyên tử được hiện thực hóa hoàn hảo, ngăn chặn lỗi chí mạng đảo lộn thứ tự giao dịch của sổ cái phân tán ngay cả trong tình huống trễ mạng hoặc khởi động lại nút)
- **사회적 관계·주제별 register:** Lý thuyết truyền thông nhóm (Group Communication Systems), toán học phân tán, kiến trúc cơ sở dữ liệu phân tán.
- **예문:**
  - 분산 금융 시스템은 전 세계 노드 간의 거래 순서 일관성을 확립하기 위해 결함 허용 원자적브로드캐스트 라이브러리를 내장했다.
- **Dịch:**
  - Hệ thống tài chính phân tán đã nhúng thư viện truyền phát sóng nguyên tử chịu lỗi để xác lập tính nhất quán về thứ tự giao dịch giữa các nút trên toàn thế giới.
- **어휘 연결:**
  - 유의어: `전순서방송속성` (thuộc tính phát sóng thứ tự toàn phần total order broadcast property)
  - 관련어: `분산트랜잭션원자성` (tính nguyên tử của giao dịch phân tán distributed transaction atomicity)
- **영어 참고:** `atomic broadcast` — cơ chế phát sóng đảm bảo mọi nút đều nhận cùng một tập thông điệp theo cùng một thứ tự duy nhất

---

## 단원 종합 읽기 자료: 컴퓨터과학 및 분산 합의 알고리즘과 비잔틴 장애 허용의 언어
<!-- passage_word_count: 105 Korean eojeol; target_set: 분산합의프로토콜, 실용적비잔틴장애허용, 상태기계복제모델, 합의쿼럼정족수조건, 뷰변화장애복구절차, 리더노드제안검증, 네트워크파티션허용, 래프트합의알고리즘, 안전성생존성보장, 메시지서명검증부하, 로그복제동기화절차, 비잔틴노드악의적행동, 선출타임아웃임계값, 비동기통신지연극복, 원자적브로드캐스트 -->
분산시스템 소프트웨어 연구팀은 차세대 결함 감내형 분산합의프로토콜 엔진 코어에 수학적으로 증명된 실용적비잔틴장애허용 컨센서스 메커니즘을 결합하여 고가용성 상태기계복제모델 플랫폼을 완벽히 구축하였다. 시스템은 분산 노드 간 합의쿼럼정족수조건 충족 검증을 엄밀히 수행하고 리더 결함 발생 시 신속한 뷰변화장애복구절차 전환 프로세스를 가동하여 제안된 블록 리더노드제안검증 과정의 무결성을 지켜냈다. 이 프레임워크는 분산 네트워크파티션허용 내구성 복원력을 탑재하고 분산 합의에 최적화된 래프트합의알고리즘 장애 허용 계층을 유기적으로 통합하여 시스템 안전성생존성보장 정량 지표를 완벽하게 만족하였다. 아울러 타원곡선 기반 메시지서명검증부하 연산 오버헤드를 획기적으로 낮추고 안전한 로그복제동기화절차 파이프라인을 확립하여 적대적 비잔틴노드악의적행동 교란 침해를 철저히 차단했다. 끝으로 네트워크 상황별 선출타임아웃임계값 조절을 통해 비동기통신지연극복 네트워크 성능을 강화하고 무결점 원자적브로드캐스트 메시지 순서화를 완벽히 실현하여 엔터프라이즈 분산 트랜잭션의 신뢰성을 확보했다.

**베트남어 번역:**
Nhóm nghiên cứu phần mềm hệ thống phân tán đã xây dựng hoàn hảo nền tảng mô hình sao chép máy trạng thái tính sẵn sàng cao bằng cách kết hợp cơ chế đồng thuận chịu lỗi Byzantine thực tế đã được chứng minh toán học vào lõi động cơ giao thức đồng thuận phân tán chịu lỗi thế hệ mới. Hệ thống thực hiện nghiêm ngặt việc kiểm chứng đáp ứng điều kiện số đại biểu túc số đồng thuận giữa các nút phân tán và khởi động quy trình chuyển đổi phục hồi sự cố thay đổi góc nhìn nhanh chóng khi xảy ra sự cố nút lãnh đạo, giữ vững tính toàn vẹn của quá trình kiểm chứng đề xuất nút lãnh đạo khối được đưa ra. Khung làm việc này được trang bị khả năng phục hồi độ bền dung nạp phân vùng mạng phân tán và tích hợp hữu cơ tầng chịu lỗi thuật toán đồng thuận Raft được tối ưu hóa cho đồng thuận phân tán, thỏa mãn hoàn hảo các chỉ số định lượng bảo đảm an toàn và sống còn của hệ thống. Cùng với đó, việc hạ thấp đột phá chi phí tải tính toán kiểm chứng chữ ký thông điệp dựa trên đường cong elliptic và xác lập đường ống quy trình đồng bộ sao chép nhật ký an toàn đã ngăn chặn triệt để sự xâm phạm quấy nhiễu hành vi độc hại của nút Byzantine thù địch. Cuối cùng, thông qua điều chỉnh ngưỡng thời gian chờ bầu cử theo tình huống mạng, họ đã tăng cường hiệu năng mạng khắc phục độ trễ truyền thông bất đồng bộ và hiện thực hóa hoàn hảo việc sắp xếp thứ tự thông điệp truyền phát sóng nguyên tử không khuyết tật, bảo đảm độ tin cậy của các giao dịch phân tán cấp doanh nghiệp.
