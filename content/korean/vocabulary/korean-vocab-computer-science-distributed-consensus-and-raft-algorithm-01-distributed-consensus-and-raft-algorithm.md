<!-- source_policy: original explanations, examples, and passage; computer-science-distributed-consensus-and-raft-algorithm terminology cross-checked conceptually, not copied -->
# 컴퓨터과학 및 분산 합의 알고리즘과 Raft의 언어

분산합의알고리즘 및 리더선출프로토콜 기반 로그복제메커니즘과 비잔틴장애허용 분산시스템 컴퓨터과학

---

### 분산합의알고리즘

- **발음:** [분산합의알고리즘]
- **품사:** 명사
- **핵심 의미:** 네트워크 지연, 패킷 유실, 또는 일부 서버 노드의 충돌 장애(Crash Fault)가 상시 발생하는 비신뢰적 분산 환경에서, 분산 클러스터를 구성하는 독립된 노드들이 데이터의 단일한 상태나 트랜잭션 실행 순서에 대해 완벽하게 일치된 결론에 도달하도록 보장하는 알고리즘(Distributed Consensus Algorithm, 예: Raft, Paxos)
- **베트남어 뜻:** thuật toán đồng thuận phân tán (distributed consensus algorithm)
- **뉘앙스와 사용법:** 클라우드 분산 데이터베이스(Spanner, CockroachDB), 쿠버네티스(etcd), 주키퍼(ZooKeeper) 등 현대 빅데이터 분산 인프라의 데이터 일관성(Consistency)과 고가용성을 유지하는 가장 근본적인 핵심 소프트웨어 엔진입니다.
- **재사용 가능한 콜로케이션·청크:**
  - Raft 기반 고효율 분산합의알고리즘 구현 (hiện thực hóa thuật toán đồng thuận phân tán hiệu quả cao dựa trên Raft)
  - 분산합의알고리즘의 처리량 및 지연 시간 벤치마크 (đo điểm chuẩn thông lượng và độ trễ của thuật toán đồng thuận phân tán)
  - 장애 복구 능력을 갖춘 분산합의알고리즘 (thuật toán đồng thuận phân tán sở hữu năng lực phục hồi lỗi)
- **자주 쓰는 문형과 성분:**
  - 분산합의알고리즘을 + 도입함으로써 클러스터 내의 절반 미만 노드가 다운되더라도 서비스 중단 없이 안전하게 데이터 쓰기 연산을 처리하다
- **사회적 관계·주제별 register:** Hệ thống phân tán (Distributed Systems), điện toán đám mây, kiến trúc cơ sở dữ liệu.
- **예문:** 연구팀은 기존 팩소스의 난해한 구조를 획기적으로 개선하여 이해하기 쉬운 래프트 분산합의알고리즘을 프레임워크에 성공적으로 적용했다.
- **Dịch:** Nhóm nghiên cứu đã cải tiến mang tính đột phá cấu trúc nan giải của Paxos truyền thống, áp dụng thành công thuật toán đồng thuận phân tán Raft dễ hiểu vào framework.
- **어휘 연결:** 리더선출프로토콜 (giao thức bầu cử lãnh đạo), 로그복제메커니즘 (cơ chế sao chép nhật ký), 쿼럼기반합의 (đồng thuận dựa trên túc số)
- **영어 참고:** distributed consensus algorithm

---

### 리더선출프로토콜

- **발음:** [리더선출프로토콜]
- **품사:** 명사
- **핵심 의미:** 분산 합의 시스템에서 모든 클러스터 명령과 로그 복제를 총괄 지휘할 유일한 대표 노드(Leader)가 부재하거나 기존 리더가 장애로 다운되었을 때, 팔로워 노드들이 후보(Candidate)로 전환되어 과반수(Majority) 투표를 획득하여 새로운 리더를 선출하는 일련의 상태 전이 통신 규약(Leader Election Protocol)
- **베트남어 뜻:** giao thức bầu cử lãnh đạo (leader election protocol)
- **뉘앙스와 사용법:** 스플릿 브레인(Split-Brain)을 방지하고 시스템의 단일 진실 공급원(Single Source of Truth)을 확립하기 위해 임기(Term) 번호와 무작위 타임아웃을 정교하게 결합하여 작동합니다.
- **재사용 가능한 콜로케이션·청크:**
  - 무작위 선거 타이머 기반 리더선출프로토콜 (giao thức bầu cử lãnh đạo dựa trên bộ đếm giờ bầu cử ngẫu nhiên)
  - 리더 장애 발생 시 신속한 리더선출프로토콜 개시 (khởi động nhanh chóng giao thức bầu cử lãnh đạo khi lãnh đạo xảy ra lỗi)
  - 과반수 쿼럼 투표를 통한 리더선출프로토콜 완료 (hoàn tất giao thức bầu cử lãnh đạo thông qua bỏ phiếu túc số đa số)
- **자주 쓰는 문형과 성분:**
  - 리더선출프로토콜을 + 실행하여 기존 마스터 서버가 네트워크에서 분리된 지 150밀리초 만에 새로운 리더를 선출하여 서비스를 정상화하다
- **사회적 관계·주제별 register:** Hệ thống phân tán, giao thức mạng, quản lý cụm máy chủ.
- **예문:** 래프트 알고리즘은 무작위 선거 시간 초과 기법을 사용하여 리더선출프로토콜 과정에서 발생하는 투표 분할 충돌을 방지한다.
- **Dịch:** Thuật toán Raft sử dụng kỹ thuật thời gian chờ bầu cử ngẫu nhiên để ngăn ngừa xung đột phân chia phiếu bầu phát sinh trong quá trình giao thức bầu cử lãnh đạo.
- **어휘 연결:** 선거시간초과 (thời gian chờ bầu cử), 임기번호갱신 (gia hạn số nhiệm kỳ), 스플릿브레인현상 (hiện tượng não phân liệt)
- **영어 참고:** leader election protocol

---

### 로그복제메커니즘

- **발음:** [로그복제메커니즘]
- **품사:** 명사
- **핵심 의미:** 클라이언트로부터 수신된 상태 변경 명령어를 리더 노드가 자신의 로컬 로그에 추가(Append)한 뒤, AppendEntries 원격 프로시저 호출(RPC)을 통해 모든 팔로워 노드에 복제 전송하고, 과반수 노드에 안전하게 기록된 것이 확인되면 명령어를 최종 커밋(Commit)하는 데이터 동기화 파이프라인(Log Replication Mechanism)
- **베트남어 뜻:** cơ chế sao chép nhật ký (log replication mechanism)
- **뉘앙스와 사용법:** 분산 시스템에서 데이터 일관성을 보장하는 핵심 척추입니다; 리더는 팔로워의 로그가 자신과 불일치할 경우 강제로 리더의 로그와 일치하도록 덮어쓰게 하여 클러스터 전체의 로그 일관성을 절대적으로 유지합니다.
- **재사용 가능한 콜로케이션·청크:**
  - 비동기 파이프라인을 통한 고속 로그복제메커니즘 (cơ chế sao chép nhật ký tốc độ cao qua đường ống bất đồng bộ)
  - 로그복제메커니즘의 커밋 지연 시간 단축 (rút ngắn độ trễ cam kết của cơ chế sao chép nhật ký)
  - 노드 재부팅 후 누락된 데이터에 대한 로그복제메커니즘 작동 (vận hành cơ chế sao chép nhật ký đối với dữ liệu bị thiếu sau khi khởi động lại nút)
- **자주 쓰는 문형과 성분:**
  - 로그복제메커니즘을 + 통해 모든 상태 변경 트랜잭션을 최소 3개 이상의 독립된 서버에 영구 기록한 후 클라이언트에 성공 응답을 반환하다
- **사회적 관계·주제별 register:** Kỹ thuật cơ sở dữ liệu phân tán, sao chép nhật ký giao dịch, lưu trữ đám mây.
- **예문:** 분산 데이터베이스는 강력한 로그복제메커니즘 덕분에 특정 데이터 센터가 정전되더라도 단 한 건의 결제 데이터 유실도 발생하지 않았다.
- **Dịch:** Cơ sở dữ liệu phân tán nhờ cơ chế sao chép nhật ký vững mạnh nên ngay cả khi một trung tâm dữ liệu cụ thể bị mất điện cũng không phát sinh việc thất thoát dù chỉ một dữ liệu thanh toán.
- **어휘 연결:** 로그일관성검증 (kiểm chứng tính nhất quán nhật ký), 상태머신복제 (sao chép máy trạng thái), 원자적커밋프로토콜 (giao thức cam kết nguyên tử)
- **영어 참고:** log replication mechanism

---

### 안전성보장조건

- **발음:** [안전성보장조건]
- **품사:** 명사
- **핵심 의미:** 분산 시스템에서 '결코 나쁜 일이 일어나지 않는다(Something bad never happens)'는 불변의 안전성(Safety) 속성으로, Raft에서 선출 안전성(단일 임기 내 최대 1명의 리더), 리더 완전성(특정 임기에 커밋된 로그는 이후 모든 상위 임기 리더에게 반드시 포함됨), 상태 머신 안전성 등을 보장하는 수학적·논리적 제약 조건(Safety Guarantee Conditions)
- **베트남어 뜻:** điều kiện bảo đảm tính an toàn (safety guarantee conditions)
- **뉘앙스와 사용법:** 활성성(Liveness, 결국 좋은 일이 일어남)과 대비되는 분산 컴퓨팅 이론의 핵심입니다; 네트워크가 쪼개지거나 패킷이 지연되더라도 데이터의 모순(Inconsistency)이나 손실이 발생하는 것을 원천적으로 차단합니다.
- **재사용 가능한 콜로케이션·청크:**
  - Raft 합의의 5가지 핵심 안전성보장조건 증명 (chứng minh 5 điều kiện bảo đảm tính an toàn cốt lõi của đồng thuận Raft)
  - 네트워크 파티션 상황에서의 안전성보장조건 충족 (thỏa mãn các điều kiện bảo đảm tính an toàn trong tình huống phân vùng mạng)
  - 안전성보장조건 위반에 따른 데이터 오염 방지 (phòng chống ô nhiễm dữ liệu theo sau sự vi phạm điều kiện bảo đảm tính an toàn)
- **자주 쓰는 문형과 성분:**
  - 안전성보장조건을 + 수학적으로 입증함으로써 어떠한 비동기 네트워크 결함 상황에서도 커밋된 트랜잭션이 절대 번복되지 않음을 보장하다
- **사회적 관계·주제별 register:** Lý thuyết khoa học máy tính, kiểm chứng hình thức (Formal Verification), hệ thống phân tán.
- **예문:** 개발팀은 TLA+ 정형 명세 도구를 활용하여 새로 설계한 분산 프로토콜이 모든 안전성보장조건을 완벽히 만족함을 검증했다.
- **Dịch:** Đội ngũ phát triển đã sử dụng công cụ quy chuẩn hình thức TLA+ để kiểm chứng rằng giao thức phân tán mới thiết kế thỏa mãn hoàn hảo mọi điều kiện bảo đảm tính an toàn.
- **어휘 연결:** 분산합의알고리즘 (thuật toán đồng thuận phân tán), 스플릿브레인현상 (hiện tượng não phân liệt), 상태머신복제 (sao chép máy trạng thái)
- **영어 참고:** safety guarantee conditions

---

### 비잔틴장애허용

- **발음:** [비잔틴장애허용]
- **품사:** 명사
- **핵심 의미:** 단순히 전원이 꺼지거나 응답을 멈추는 충돌 장애(Fail-stop)를 넘어, 클러스터 내부의 악의적인 해커 노드나 소프트웨어 버그 노드가 거짓 정보를 유포하거나 위조된 메시지를 전송하는 비잔틴 결함(Byzantine Fault) 상황에서도 정직한 노드들이 올바른 합의에 도달할 수 있도록 보장하는 내고장성 체계(Byzantine Fault Tolerance, BFT)
- **베트남어 뜻:** khả năng chịu lỗi Byzantine, tính chịu lỗi Byzantine (byzantine fault tolerance, BFT)
- **뉘앙스와 사용법:** Raft나 Paxos는 신뢰된 내부 노드(Crash 장애만 고려)를 전제하는 반면, PBFT나 블록체인 합의(PoW, PoS)는 참가자를 믿을 수 없는 개방형 환경에서 전체 노드의 3분의 1 미만의 배신자가 존재하더라도 시스템 무결성을 지켜냅니다.
- **재사용 가능한 콜로케이션·청크:**
  - 실용적 비잔틴장애허용(PBFT) 알고리즘 적용 (áp dụng thuật toán chịu lỗi Byzantine thực tế PBFT)
  - 블록체인 분산 원장의 비잔틴장애허용 한계 분석 (phân tích giới hạn chịu lỗi Byzantine của sổ cái phân tán blockchain)
  - 비잔틴장애허용을 위한 암호학적 디지털 서명 검증 (kiểm chứng chữ ký số mật mã học dùng cho tính chịu lỗi Byzantine)
- **자주 쓰는 문형과 성분:**
  - 비잔틴장애허용을 + 구현하여 악의적인 노드가 서로 다른 노드에게 상반된 거짓 투표 결과를 조작해 보내더라도 올바른 합의를 도출하다
- **사회적 관계·주제별 register:** Mật mã học ứng dụng, công nghệ chuỗi khối (Blockchain), an ninh mạng phân tán.
- **예문:** 금융 결제 블록체인 네트워크는 고성능 비잔틴장애허용 합의 엔진을 탑재하여 악의적 해킹 공격을 방어했다.
- **Dịch:** Mạng lưới blockchain thanh toán tài chính được trang bị động cơ đồng thuận chịu lỗi Byzantine hiệu năng cao để phòng thủ các cuộc tấn công hack độc hại.
- **어휘 연결:** 분산합의알고리즘 (thuật toán đồng thuận phân tán), 쿼럼기반합의 (đồng thuận dựa trên túc số), 안전성보장조건 (điều kiện bảo đảm tính an toàn)
- **영어 참고:** byzantine fault tolerance

---

### 스플릿브레인현상

- **발음:** [스플릿브레인현상]
- **품사:** 명사
- **핵심 의미:** 네트워크 단절(Network Partition)이나 심각한 통신 지연으로 인해 단일 분산 클러스터가 둘 이상의 고립된 서브네트워크로 쪼개졌을 때, 각 파티션이 상대방의 생존을 확인하지 못하고 서로 독자적인 리더를 중복 선출하여 동일한 데이터에 상반된 쓰기 작업을 독립적으로 수행함으로써 데이터 일관성이 영구 파괴되는 치명적인 분열 장애(Split-Brain Phenomenon)
- **베트남어 뜻:** hiện tượng não phân liệt, sự chia cắt cụm máy chủ (split-brain phenomenon)
- **뉘앙스와 사용법:** 마치 뇌의 좌우 반구가 절단되어 두 인격이 제각기 몸을 제어하려는 상황과 같습니다; 이를 방지하기 위해 분산 시스템은 항상 홀수 개의 노드를 배치하고 전체 노드의 엄격한 과반수(Majority Quorum)를 얻은 파티션에서만 리더가 동작하도록 강제합니다.
- **재사용 가능한 콜로케이션·청크:**
  - 네트워크 단절 시 스플릿브레인현상 방지 대책 (biện pháp phòng chống hiện tượng não phân liệt khi đứt đoạn mạng)
  - 스플릿브레인현상으로 인한 데이터베이스 충돌과 불일치 (xung đột và không nhất quán cơ sở dữ liệu do hiện tượng não phân liệt)
  - 과반수 쿼럼 펜싱 메커니즘을 통한 스플릿브레인현상 차단 (ngăn chặn hiện tượng não phân liệt thông qua cơ chế fencing túc số đa số)
- **자주 쓰는 문형과 성분:**
  - 스플릿브레인현상을 + 차단하기 위해 고립된 소수 파티션의 노드들은 스스로 읽기 전용 상태로 전환하여 쓰기 요청을 거부하다
- **사회적 관계·주제별 register:** Kiến trúc sẵn sàng cao (High Availability), quản trị hạ tầng đám mây, an toàn cơ sở dữ liệu.
- **예문:** 서버실 간 해저 광케이블 단선으로 파티션이 발생했으나 쿼럼 규칙 덕분에 스플릿브레인현상 없이 서비스가 안전하게 유지되었다.
- **Dịch:** Đứt cáp quang biển giữa các phòng máy chủ gây ra phân vùng mạng, nhưng nhờ quy tắc túc số quorum mà dịch vụ được duy trì an toàn không xảy ra hiện tượng não phân liệt.
- **어휘 연결:** 네트워크파티션극복 (vượt qua phân vùng mạng), 쿼럼기반합의 (đồng thuận dựa trên túc số), 리더선출프로토콜 (giao thức bầu cử lãnh đạo)
- **영어 참고:** split-brain phenomenon

---

### 상태머신복제

- **발음:** [상태머신복제]
- **품사:** 명사
- **핵심 의미:** 동일한 초기 상태를 가진 여러 독립된 서버 노드들에 동일한 순서로 정렬된 명령어 로그(Log)를 차례대로 실행시키면, 모든 노드가 완전히 동일한 최종 상태(State)와 출력을 산출하게 된다는 결정론적(Deterministic) 원리에 기초한 분산 결함 감내 소프트웨어 아키텍처(State Machine Replication, SMR)
- **베트남어 뜻:** sao chép máy trạng thái (state machine replication, SMR)
- **뉘앙스와 사용법:** 현대 분산 데이터 저장소의 이론적 토대입니다; 분산 합의 알고리즘(Raft)은 바로 이 상태 머신에 입력될 명령어 로그의 순서를 모든 노드가 한 치의 오차도 없이 일치시키기 위해 존재하는 것입니다.
- **재사용 가능한 콜로케이션·청크:**
  - 결정론적 상태머신복제 아키텍처 설계 (thiết kế kiến trúc sao chép máy trạng thái mang tính tiền định)
  - Raft 로그를 통한 상태머신복제의 일관성 보장 (bảo đảm tính nhất quán của sao chép máy trạng thái qua nhật ký Raft)
  - 상태머신복제 기반의 고가용성 키-값 저장소 구현 (hiện thực hóa kho lưu trữ khóa-giá trị tính sẵn sàng cao dựa trên sao chép máy trạng thái)
- **자주 쓰는 문형과 성분:**
  - 상태머신복제를 + 통해 클러스터 내의 특정 노드가 다운되더라도 살아남은 노드들이 동일한 메모리 상태를 유지하여 중단 없는 서비스를 제공하다
- **사회적 관계·주제별 register:** Lý thuyết hệ thống phân tán, kiến trúc phần mềm, cơ sở dữ liệu phi tập trung.
- **예문:** etcd 분산 저장소는 상태머신복제 모델을 채택하여 쿠버네티스 마스터 노드들의 클러스터 설정 데이터를 완벽히 동기화한다.
- **Dịch:** Kho lưu trữ phân tán etcd áp dụng mô hình sao chép máy trạng thái để đồng bộ hóa hoàn hảo dữ liệu thiết lập cụm của các nút chính Kubernetes.
- **어휘 연결:** 로그복제메커니즘 (cơ chế sao chép nhật ký), 원자적커밋프로토콜 (giao thức cam kết nguyên tử), 안전성보장조건 (điều kiện bảo đảm tính an toàn)
- **영어 참고:** state machine replication

---

### 원자적커밋프로토콜

- **발음:** [원자적커밋프로토콜]
- **품사:** 명사
- **핵심 의미:** 여러 대의 분산 데이터베이스 노드에 걸쳐 실행되는 트랜잭션에 대해, 모든 참여 노드가 변경 사항을 영구 반영(Commit)하거나 어느 한 노드라도 실패하면 모든 노드가 변경 사항을 전면 취소(Rollback)하도록 보장하는 '전부 아니면 전무(All-or-Nothing)' 합의 프로토콜(Atomic Commit Protocol, 예: 2단계 커밋 2PC, 3단계 커밋 3PC)
- **베트남어 뜻:** giao thức cam kết nguyên tử (atomic commit protocol)
- **뉘앙스와 사용법:** 분산 은행 송금처럼 'A 계좌 출금'과 'B 계좌 입금'이 반드시 동시에 성공하거나 동시에 취소되어야 할 때 필수적입니다; 합의 알고리즘(Raft)과 결합되어 분산 트랜잭션의 ACID 원자성을 완성합니다.
- **재사용 가능한 콜로케이션·청크:**
  - 2단계 원자적커밋프로토콜(2PC)의 블로킹 한계 (giới hạn chặn blocking của giao thức cam kết nguyên tử hai giai đoạn 2PC)
  - 분산 트랜잭션 처리를 위한 원자적커밋프로토콜 최적화 (tối ưu hóa giao thức cam kết nguyên tử dùng xử lý giao dịch phân tán)
  - 네트워크 장애 상황에서의 원자적커밋프로토콜 복구 (phục hồi giao thức cam kết nguyên tử trong tình huống lỗi mạng)
- **자주 쓰는 문형과 성분:**
  - 원자적커밋프로토콜을 + 적용하여 글로벌 분산 데이터베이스 전반에 걸친 대규모 결제 트랜잭션의 원자성을 완벽히 수호하다
- **사회적 관계·주제별 register:** Xử lý giao dịch phân tán, kiến trúc cơ sở dữ liệu ACID, kỹ thuật tài chính đám mây.
- **예문:** 구글 스패너는 Raft 합의 그룹 간에 분산 2단계 원자적커밋프로토콜을 연계하여 전 세계적 데이터 일관성을 구현했다.
- **Dịch:** Google Spanner đã liên kết giao thức cam kết nguyên tử hai giai đoạn phân tán giữa các nhóm đồng thuận Raft để hiện thực hóa tính nhất quán dữ liệu toàn cầu.
- **어휘 연결:** 상태머신복제 (sao chép máy trạng thái), 로그복제메커니즘 (cơ chế sao chép nhật ký), 분산합의알고리즘 (thuật toán đồng thuận phân tán)
- **영어 참고:** atomic commit protocol

---

### 쿼럼기반합의

- **발음:** [쿼럼기반합의]
- **품사:** 명사
- **핵심 의미:** 전체 노드 수 N개 중 사전에 정의된 최소한의 정족수(Quorum, 통상 과반수인 ⌊N/2⌋+1개) 노드의 동의를 얻어야만 리더 선출이나 데이터 쓰기 커밋이 유효하다고 인정하는 다수결 기반 분산 의사결정 방식(Quorum-based Consensus)
- **베트남어 뜻:** đồng thuận dựa trên túc số, đồng thuận dựa trên túc chuẩn (quorum-based consensus)
- **뉘앙스와 사용법:** 비둘기집 원리에 의해 어떤 두 쿼럼을 선택하더라도 최소한 1개 이상의 공통 노드(중첩 노드)가 반드시 존재하므로, 최신 상태를 가진 노드가 다음 쿼럼에 항상 포함되어 이전 결정을 절대 번복할 수 없게 만드는 수학적 아름다움을 지닙니다.
- **재사용 가능한 콜로케이션·청크:**
  - 과반수 쿼럼기반합의를 통한 데이터 무결성 보장 (bảo đảm tính toàn vẹn dữ liệu qua đồng thuận dựa trên túc số đa số)
  - 읽기 쿼럼과 쓰기 쿼럼의 교집합 성질 증명 (chứng minh tính chất giao nhau giữa túc số đọc và túc số ghi)
  - 노드 장애 시 동적 쿼럼기반합의 재구성 (tái cấu trúc đồng thuận dựa trên túc số động khi nút gặp sự cố)
- **자주 쓰는 문형과 성분:**
  - 쿼럼기반합의를 + 충족하기 위해 5대 중 3대 이상의 서버 노드로부터 승인 서명을 획득한 후 트랜잭션을 최종 확정하다
- **사회적 관계·주제별 register:** Hệ thống lưu trữ phân tán, lý thuyết túc số, phân tích khả năng chịu lỗi.
- **예문:** 5개의 노드로 구성된 클러스터는 3개의 노드로 쿼럼기반합의를 형성하므로 최대 2대의 노드가 고장 나도 정상 작동한다.
- **Dịch:** Cụm máy chủ bao gồm 5 nút hình thành sự đồng thuận dựa trên túc số bằng 3 nút, nên ngay cả khi tối đa 2 nút bị hỏng vẫn hoạt động bình thường.
- **어휘 연결:** 스플릿브레인현상 (hiện tượng não phân liệt), 리더선출프로토콜 (giao thức bầu cử lãnh đạo), 안전성보장조건 (điều kiện bảo đảm tính an toàn)
- **영어 참고:** quorum-based consensus

---

### 로그일관성검증

- **발음:** [로그일관성검증]
- **품사:** 명사
- **핵심 의미:** Raft 알고리즘에서 리더가 팔로워에게 새로운 로그 엔트리를 전송할 때, 바로 직전 로그의 인덱스(Index)와 임기 번호(Term)가 팔로워의 로컬 로그와 완벽히 일치하는지 먼저 대조하여, 일치할 때만 새 로그를 추가하고 불일치하면 거부하여 이전 로그를 역추적해 맞추는 일관성 강제 기전(Log Matching Property / Consistency Check)
- **베트남어 뜻:** kiểm chứng tính nhất quán của nhật ký (log consistency check)
- **뉘앙스와 사용법:** 귀납법(Induction)의 원리에 의해 한 번 일치성이 입증되면 그 이전의 모든 로그 항목이 리더와 팔로워 간에 100% 동일하다는 것을 수학적으로 보증하는 Raft의 핵심 메커니즘입니다.
- **재사용 가능한 콜로케이션·청크:**
  - AppendEntries RPC 호출 시 엄밀한 로그일관성검증 (kiểm chứng tính nhất quán nhật ký nghiêm ngặt khi gọi AppendEntries RPC)
  - 로그일관성검증 실패 시 이전 인덱스 역추적 (truy vết ngược chỉ số trước đó khi kiểm chứng tính nhất quán nhật ký thất bại)
  - 분산 노드 간 데이터 동기화를 위한 로그일관성검증 (kiểm chứng tính nhất quán nhật ký nhằm đồng bộ hóa dữ liệu giữa các nút phân tán)
- **자주 쓰는 문형과 성분:**
  - 로그일관성검증을 + 통과하지 못한 팔로워 노드는 불일치하는 과거 로그 항목들을 리더의 최신 로그로 완전히 덮어써 일치시킨다
- **사회적 관계·주제별 register:** Giao thức phân tán Raft, an toàn dữ liệu, lập trình hệ thống.
- **예문:** 리더 노드는 로그일관성검증을 통해 네트워크 단절 동안 뒤처졌던 복구 노드의 로컬 데이터를 안전하게 최신화했다.
- **Dịch:** Nút lãnh đạo thông qua việc kiểm chứng tính nhất quán của nhật ký đã cập nhật mới nhất an toàn dữ liệu cục bộ của nút phục hồi vốn bị tụt hậu trong thời gian đứt đoạn mạng.
- **어휘 연결:** 로그복제메커니즘 (cơ chế sao chép nhật ký), 상태머신복제 (sao chép máy trạng thái), 안전성보장조건 (điều kiện bảo đảm tính an toàn)
- **영어 참고:** log consistency check

---

### 하트비트메커니즘

- **발음:** [하트비트메커니즘]
- **품사:** 명사
- **핵심 의미:** 리더 노드가 자신이 정상적으로 살아있음을 클러스터의 모든 팔로워 노드들에게 알리고 리더 권한을 연장하기 위해, 새로운 로그가 없더라도 데이터가 비어 있는 주기적인 심장 박동(Heartbeat, AppendEntries RPC) 신호를 일정한 주기(수십 밀리초 단위)로 끊임없이 발송하는 생존 신호 규약(Heartbeat Mechanism)
- **베트남어 뜻:** cơ chế nhịp tim, cơ chế kiểm tra sự sống (heartbeat mechanism)
- **뉘앙스와 사용법:** 팔로워들은 이 하트비트를 수신하는 동안에는 선거 타이머를 리셋하고 순종적인 팔로워 상태를 유지하지만, 하트비트가 끊기면 즉시 리더 사망으로 간주하고 스스로 후보로 전환하여 새로운 선거를 개시합니다.
- **재사용 가능한 콜로케이션·청크:**
  - 주기적인 빈 AppendEntries RPC를 통한 하트비트메커니즘 (cơ chế nhịp tim thông qua AppendEntries RPC rỗng định kỳ)
  - 네트워크 지연에 따른 하트비트메커니즘 타임아웃 감지 (phát hiện hết giờ cơ chế nhịp tim theo độ trễ mạng)
  - 하트비트메커니즘의 주기와 선거 타임아웃 간격 최적화 (tối ưu hóa chu kỳ cơ chế nhịp tim và khoảng thời gian chờ bầu cử)
- **자주 쓰는 문형과 성분:**
  - 하트비트메커니즘을 + 통해 리더의 생존 상태를 지속 감시함으로써 마스터 노드의 장애를 수백 밀리초 이내에 자동 감지하다
- **사회적 관계·주제별 register:** Giám sát hệ thống phân tán, cơ chế phát hiện lỗi (Failure Detection), kiến trúc máy chủ.
- **예문:** 리더가 하드웨어 결함으로 다운되어 하트비트메커니즘 신호가 끊기자, 대기 중이던 팔로워 노드가 즉시 새 선거를 시작했다.
- **Dịch:** Khi lãnh đạo bị sập do lỗi phần cứng khiến tín hiệu cơ chế nhịp tim bị đứt đoạn, nút theo sau đang chờ lập tức bắt đầu cuộc bầu cử mới.
- **어휘 연결:** 선거시간초과 (thời gian chờ bầu cử), 리더선출프로토콜 (giao thức bầu cử lãnh đạo), 임기번호갱신 (gia hạn số nhiệm kỳ)
- **영어 참고:** heartbeat mechanism

---

### 임기번호갱신

- **발음:** [임기번호갱신]
- **품사:** 명사
- **핵심 의미:** Raft 알고리즘에서 논리적 시간(Logical Clock) 역할을 하는 임기(Term) 번호를 선거가 시작될 때마다 1씩 증가시키고, 통신 중 자신보다 높은 임기 번호를 가진 메시지를 수신한 노드가 즉시 자신의 임기를 그 큰 번호로 올리고 자신을 팔로워 상태로 강등시키는 동기화 절차(Term Number Updating)
- **베트남어 뜻:** sự gia hạn số nhiệm kỳ, cập nhật số nhiệm kỳ (term number updating)
- **뉘앙스와 사용법:** 물리적 서버 시계의 오차(Clock Drift)에 의존하지 않고 과거의 퇴출된 옛 리더가 뒤늦게 나타나 권력을 행사하려는 유령 리더 문제를 완전히 방지하는 논리적 서열 기준입니다.
- **재사용 가능한 콜로케이션·청크:**
  - 새 선거 개시 시 단조 증가하는 임기번호갱신 (gia hạn số nhiệm kỳ tăng đơn điệu khi bắt đầu bầu cử mới)
  - 상위 임기를 발견한 구 리더의 자발적 강등과 임기번호갱신 (sự tự nguyện giáng cấp và gia hạn số nhiệm kỳ của lãnh đạo cũ khi phát hiện nhiệm kỳ cao hơn)
  - 논리적 시계로서의 임기번호갱신 규칙 (quy tắc gia hạn số nhiệm kỳ với tư cách đồng hồ logic)
- **자주 쓰는 문형과 성분:**
  - 임기번호갱신을 + 통해 네트워크가 복구된 뒤 나타난 과거의 구 리더를 즉각 일반 팔로워로 강등시키고 명령을 무효화하다
- **사회적 관계·주제별 register:** Lý thuyết đồng hồ logic Lamport, thuật toán phân tán, quản lý trạng thái nút.
- **예문:** 분리되었던 노드는 재연결 직후 최신 임기번호갱신을 확인하고 자신의 미커밋 로그를 폐기한 뒤 새 리더를 따랐다.
- **Dịch:** Nút bị chia cắt ngay sau khi kết nối lại đã xác nhận việc gia hạn số nhiệm kỳ mới nhất, hủy bỏ các nhật ký chưa cam kết của mình và tuân theo lãnh đạo mới.
- **어휘 연결:** 리더선출프로토콜 (giao thức bầu cử lãnh đạo), 하트비트메커니즘 (cơ chế nhịp tim), 스플릿브레인현상 (hiện tượng não phân liệt)
- **영어 참고:** term number updating

---

### 선거시간초과

- **발음:** [선거시간초과]
- **품사:** 명사
- **핵심 의미:** 팔로워 노드가 리더로부터 하트비트나 유효한 로그를 수신하지 못한 채 대기하는 최대 제한 시간으로, 이 제한 시간이 만료되면 팔로워가 리더의 고장을 확신하고 즉시 후보(Candidate) 상태로 전이하여 자신의 임기를 올리고 투표를 요청하게 만드는 타이머 이벤트(Election Timeout)
- **베트남어 뜻:** thời gian chờ bầu cử, hết giờ bầu cử (election timeout)
- **뉘앙스와 사용법:** Raft의 천재적인 설계는 각 노드의 선거시간초과를 고정하지 않고 '150~300ms' 사이에서 무작위(Randomized)로 분산시키는 것입니다; 이를 통해 여러 노드가 동시에 후보로 출마하여 표가 갈리는 스플릿 보트(Split Vote)를 방지합니다.
- **재사용 가능한 콜로케이션·청크:**
  - 무작위 선거시간초과(Randomized Election Timeout) 설정 (thiết lập thời gian chờ bầu cử ngẫu nhiên)
  - 선거시간초과 발생에 따른 후보자 상태 전이 (chuyển trạng thái sang ứng viên theo sau việc phát sinh thời gian chờ bầu cử)
  - 네트워크 지연 환경에 맞춘 선거시간초과 임계치 튜닝 (tinh chỉnh ngưỡng thời gian chờ bầu cử phù hợp với môi trường trễ mạng)
- **자주 쓰는 문형과 성분:**
  - 선거시간초과를 + 무작위로 부여함으로써 가장 먼저 타임아웃된 단 하나의 노드가 신속하게 과반수 표를 독점하여 리더로 당선되게 하다
- **사회적 관계·주제별 register:** Kỹ thuật tối ưu hóa thuật toán phân tán, lập trình mạng không đồng bộ.
- **예문:** 무작위 선거시간초과 덕분에 3개 노드가 동시에 출마하는 충돌 없이 단 한 번의 투표 라운드로 새 리더가 확정되었다.
- **Dịch:** Nhờ thời gian chờ bầu cử ngẫu nhiên, lãnh đạo mới đã được xác định chỉ qua một vòng bỏ phiếu duy nhất mà không có xung đột 3 nút cùng ứng cử cùng lúc.
- **어휘 연결:** 리더선출프로토콜 (giao thức bầu cử lãnh đạo), 하트비트메커니즘 (cơ chế nhịp tim), 쿼럼기반합의 (đồng thuận dựa trên túc số)
- **영어 참고:** election timeout

---

### 네트워크파티션극복

- **발음:** [네트워크파티션극복]
- **품사:** 명사
- **핵심 의미:** 스위치 장애나 광케이블 절단으로 인해 클러스터 노드들 간의 상호 통신이 일시적으로 단절되어 분할(Partition)된 극단적 상황에서도, CAP 정리에 따라 과반수 쿼럼을 확보한 주 파티션은 안전하게 서비스를 지속하고, 소수 파티션은 쓰기를 차단한 뒤 네트워크가 재연결되었을 때 데이터를 자동으로 치유·재동기화하는 결함 극복 능력(Network Partition Recovery)
- **베트남어 뜻:** vượt qua phân vùng mạng, khắc phục sự cố chia cắt mạng (network partition recovery)
- **뉘앙스와 사용법:** 분산 시스템이 현실의 열악한 네트워크 인프라에서 살아남기 위한 필수 요건입니다; 파티션 동안 발생한 데이터 불일치를 로그 롤백과 덮어쓰기를 통해 완벽히 수습하여 단일 일관성을 회복합니다.
- **재사용 가능한 콜로케이션·청크:**
  - CAP 정리 관점에서의 고효율 네트워크파티션극복 전략 (chiến lược vượt qua phân vùng mạng hiệu quả cao dưới góc nhìn định lý CAP)
  - 네트워크파티션극복 후 자동 로그 재동기화 (tự động tái đồng bộ hóa nhật ký sau khi vượt qua phân vùng mạng)
  - 카오스 엔지니어링을 통한 네트워크파티션극복 내구성 시험 (thử nghiệm độ bền vượt qua phân vùng mạng qua kỹ thuật Chaos Engineering)
- **자주 쓰는 문형과 성분:**
  - 네트워크파티션극복을 + 완벽히 수행하여 데이터 센터 간 통신망이 단절된 비상 상황에서도 단 한 건의 결제 데이터 유실 없이 서비스를 지속하다
- **사회적 관계·주제별 register:** Kiến trúc hệ thống chịu lỗi (Fault-Tolerant Architecture), DevOps, kỹ thuật đám mây.
- **예문:** 클라우드 인프라 팀은 인위적인 케이블 차단 훈련을 통해 시스템의 네트워크파티션극복 복원력을 실증 검증했다.
- **Dịch:** Đội ngũ hạ tầng đám mây thông qua diễn tập ngắt cáp nhân tạo đã kiểm chứng thực chứng khả năng phục hồi vượt qua phân vùng mạng của hệ thống.
- **어휘 연결:** 스플릿브레인현상 (hiện tượng não phân liệt), 쿼럼기반합의 (đồng thuận dựa trên túc số), 안전성보장조건 (điều kiện bảo đảm tính an toàn)
- **영어 참고:** network partition recovery

---

### 노드합류탈퇴

- **발음:** [노드합류탈퇴]
- **품사:** 명사
- **핵심 의미:** 분산 클러스터가 무중단 운용되는 도중 노드의 증설(Scale-out), 유지보수를 위한 장비 교체, 또는 영구 고장 노드의 제거를 위해 클러스터 구성원(Membership)을 동적으로 안전하게 변경할 때, 일시적으로 두 개의 독립된 과반수가 공존하여 합의가 깨지는 위험을 방지하는 클러스터 형상 동적 재구성 절차(Cluster Membership Changes, Join & Leave)
- **베트남어 뜻:** sự gia nhập và rút lui của các nút, thay đổi thành viên cụm máy chủ (cluster membership changes, node join and leave)
- **뉘앙스와 사용법:** Raft는 구 구성(C_old)과 신 구성(C_new)이 겹치는 과도기 동안 '공동 합의(Joint Consensus)' 단계 또는 단일 노드 순차 변경 규칙을 적용하여 안전성 위반 없이 클러스터를 자유자재로 늘리거나 줄일 수 있게 지원합니다.
- **재사용 가능한 콜로케이션·청크:**
  - 공동 합의(Joint Consensus)를 이용한 안전한 노드합류탈퇴 (gia nhập và rút lui nút an toàn sử dụng đồng thuận chung Joint Consensus)
  - 무중단 클러스터 확장을 위한 동적 노드합류탈퇴 지원 (hỗ trợ gia nhập và rút lui nút mang tính động nhằm mở rộng cụm không gián đoạn)
  - 장애 노드 감지 후 자동 노드합류탈퇴 트리거 (kích hoạt tự động gia nhập và rút lui nút sau khi phát hiện nút lỗi)
- **자주 쓰는 문형과 성분:**
  - 노드합류탈퇴를 + 온라인 상에서 무중단으로 실행하여 트래픽 폭증에 대비해 서버 노드를 3대에서 7대로 안전하게 증설하다
- **사회적 관계·주제별 register:** Quản trị cụm phân tán, điện toán đàn hồi (Elastic Computing), kỹ thuật SRE.
- **예문:** 쿠버네티스는 etcd의 노드합류탈퇴 기능을 활용하여 마스터 노드의 교체와 스케일아웃을 서비스 중단 없이 완벽히 처리한다.
- **Dịch:** Kubernetes tận dụng tính năng gia nhập và rút lui của các nút trong etcd để xử lý hoàn hảo việc thay thế và mở rộng quy mô các nút chính mà không làm gián đoạn dịch vụ.
- **어휘 연결:** 분산합의알고리즘 (thuật toán đồng thuận phân tán), 쿼럼기반합의 (đồng thuận dựa trên túc số), 리더선출프로토콜 (giao thức bầu cử lãnh đạo)
- **영어 참고:** node join and leave

---

## 단원 종합 읽기 자료: 컴퓨터과학 및 분산 합의 알고리즘과 Raft의 언어
<!-- passage_word_count: 105 Korean eojeol; target_set: 분산합의알고리즘, 리더선출프로토콜, 로그복제메커니즘, 안전성보장조건, 비잔틴장애허용, 스플릿브레인현상, 상태머신복제, 원자적커밋프로토콜, 쿼럼기반합의, 로그일관성검증, 하트비트메커니즘, 임기번호갱신, 선거시간초과, 네트워크파티션극복, 노드합류탈퇴 -->
클라우드 분산 시스템 아키텍처 연구소는 네트워크 지연과 노드 장애 속에서도 높은 고가용성을 유지하기 위해 Raft 기반 분산합의알고리즘 시스템을 구현하고 신속한 무중단 리더선출프로토콜 현장에서 가동했다. 전체 클러스터는 모든 명령어를 안전하게 동기화하는 견고한 로그복제메커니즘 바탕으로 데이터 불일치를 원천 차단하는 엄격한 안전성보장조건 만족시켰으며 악의적 노드 공격을 방어하는 비잔틴장애허용 체계를 꼼꼼히 점검했다. 네트워크 단절로 인해 여러 리더가 동시에 등장하여 상호 충돌하는 치명적인 스플릿브레인현상 방지하고 모든 노드가 동일한 연산 결과를 생성하는 상태머신복제 기술과 분산 트랜잭션을 일괄 처리하는 원자적커밋프로토콜 통합했다. 과반수 노드의 동의를 얻는 쿼럼기반합의 및 엄밀한 로그일관성검증 수행하고 주기적인 하트비트메커니즘 통해 리더 지위를 유지했다. 지도자 부재 시 임기번호갱신 및 무작위 선거시간초과 기법을 적용하여 물리적인 네트워크파티션극복 달성하고 동적인 노드합류탈퇴 유연하게 처리했다.

**베트남어 번역:**
Viện nghiên cứu kiến trúc hệ thống phân tán điện toán đám mây, nhằm luôn duy trì tính sẵn sàng cao ngay cả trong tình trạng độ trễ mạng và lỗi nút, đã hiện thực hóa hệ thống thuật toán đồng thuận phân tán dựa trên Raft và vận hành giao thức bầu cử lãnh đạo không gián đoạn nhanh chóng tại hiện trường. Toàn bộ cụm máy chủ, dựa trên cơ chế sao chép nhật ký vững chắc đồng bộ hóa an toàn mọi lệnh, đã thỏa mãn các điều kiện bảo đảm tính an toàn nghiêm ngặt ngăn chặn từ gốc sự không nhất quán dữ liệu, đồng thời kiểm tra kỹ lưỡng hệ thống chịu lỗi Byzantine phòng thủ các cuộc tấn công nút độc hại. Nhóm đã ngăn chặn hiện tượng não phân liệt chia cắt cụm chết người nơi nhiều lãnh đạo xuất hiện cùng lúc do đứt đoạn mạng gây xung đột lẫn nhau, tích hợp kỹ thuật sao chép máy trạng thái nơi mọi nút tạo ra cùng một kết quả tính toán cùng giao thức cam kết nguyên tử xử lý hàng loạt các giao dịch phân tán. Hệ thống thực hiện đồng thuận dựa trên túc số túc chuẩn giành được sự đồng ý của đa số nút và kiểm chứng tính nhất quán của nhật ký nghiêm ngặt, duy trì vị thế lãnh đạo thông qua cơ chế nhịp tim định kỳ. Khi vắng mặt lãnh đạo, bằng cách áp dụng kỹ thuật gia hạn số nhiệm kỳ và thời gian chờ bầu cử ngẫu nhiên, hệ thống đã vượt qua phân vùng mạng vật lý và xử lý linh hoạt việc gia nhập và rút lui của các nút mang tính động.
