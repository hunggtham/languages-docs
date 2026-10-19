<!-- source_policy: original explanations, examples, and passage; computer-science-post-quantum-cryptography-and-lattice-theory terminology cross-checked conceptually, not copied -->
# 컴퓨터과학 및 양자내성암호·격자 기반 암호 이론의 언어

양자저항서명 및 환오류동반학습 기반 최단벡터문제와 동형암호연산 양자내성암호 컴퓨터과학

---

### 양자저항서명

- **발음:** [양자저항서명]
- **품사:** 명사
- **핵심 의미:** 강력한 양자컴퓨터가 상용화되어 기존 RSA나 타원곡선디지털서명(ECDSA)이 모두 무력화되더라도 쇼어 알고리즘의 양자 연산 공격에 뚫리지 않고 문서와 소프트웨어의 위변조를 방지할 수 있는 차세대 전자서명 기술(Quantum-Resistant Signature / Post-Quantum Signature)
- **베트남어 뜻:** chữ ký số kháng lượng tử, chữ ký số hậu lượng tử (quantum-resistant signature / post-quantum signature)
- **뉘앙스와 사용법:** 미국 국립표준기술연구소(NIST)의 양자내성암호(PQC) 표준으로 최종 선정된 ML-DSA(Dilithium, 모듈 격자 기반)와 SLH-DSA(SPHINCS+, 상태 비저장 해시 기반) 등이 대표적인 양자저항서명의 글로벌 표준입니다.
- **재사용 가능한 콜로케이션·청크:**
  - NIST 표준 양자저항서명 알고리즘 (thuật toán chữ ký số kháng lượng tử tiêu chuẩn NIST)
  - 블록체인 시스템에 양자저항서명 도입 (áp dụng chữ ký số kháng lượng tử vào hệ thống blockchain)
  - 양자저항서명의 키 크기 및 검증 속도 최적화 (tối ưu hóa kích thước khóa và tốc độ xác minh của chữ ký số kháng lượng tử)
- **자주 쓰는 문형과 성분:**
  - 양자저항서명을 + 정부 전자정부 공공 인증서와 소프트웨어 펌웨어 무결성 검증 체계에 전격 적용하다
- **사회적 관계·주제별 register:** Mật mã học lượng tử, an ninh mạng thế hệ mới, tiêu chuẩn hóa mật mã quốc tế NIST.
- **예문:** 연구소는 양자 컴퓨터의 해킹 위협에 대비하여 자체 개발한 블록체인 노드에 격자 기반 양자저항서명 프로토콜을 탑재했다.
- **Dịch:** Viện nghiên cứu đã cài đặt giao thức chữ ký số kháng lượng tử dựa trên lý thuyết lưới vào các nút blockchain tự phát triển để chuẩn bị đối phó với mối đe dọa tấn công của máy tính lượng tử.
- **어휘 연결:** 해시기반서명 (chữ ký số dựa trên hàm băm), 환오류동반학습 (học có lỗi trên vành), 암호화표준선정 (lựa chọn tiêu chuẩn mật mã)
- **영어 참고:** quantum-resistant signature

---

### 환오류동반학습

- **발음:** [환오류동반학습]
- **품사:** 명사
- **핵심 의미:** 기존 오류동반학습(LWE)의 행렬 연산 복잡도와 거대한 키 크기를 획기적으로 줄이기 위해, 다항식 환(Polynomial Ring) 구조를 대수학적으로 도입하여 키 크기를 1/1000 수준으로 축소하면서도 격자의 최단벡터문제에 기반한 강력한 양자 내성 안전성을 유지하는 대수적 암호 기법(Ring-LWE, Learning With Errors over Rings)
- **베트남어 뜻:** học có lỗi trên vành (Ring-LWE, Learning With Errors over Rings)
- **뉘앙스와 사용법:** 고속 푸리에 변환(FFT)이나 수론 변환(NTT)을 활용해 다항식 곱셈을 초고속으로 처리할 수 있어, 실용적인 PQC 공개키 암호(Kyber/ML-KEM) 및 완전동형암호(CKKS, BGV)의 핵심 수학적 엔진으로 쓰입니다.
- **재사용 가능한 콜로케이션·청크:**
  - 환오류동반학습 기반 공개키 암호화 (mã hóa khóa công khai dựa trên Ring-LWE)
  - NTT 알고리즘을 통한 환오류동반학습 연산 가속 (tăng tốc tính toán Ring-LWE qua thuật toán NTT)
  - 환오류동반학습의 대수적 안전성 증명 (chứng minh tính an toàn đại số của Ring-LWE)
- **자주 쓰는 문형과 성분:**
  - 환오류동반학습을 + 활용하여 통신 대역폭 부하를 최소화하면서도 양자 컴퓨터에 뚫리지 않는 고속 키 교환을 구현하다
- **사회적 관계·주제별 register:** Đại số tính toán mật mã, lý thuyết lưới PQC, thiết kế hệ mật mã hiệu năng cao.
- **예문:** 차세대 TLS 인터넷 보안 프로토콜에는 환오류동반학습 변형 기반의 알고리즘이 표준 키 캡슐화 기법으로 채택되었다.
- **Dịch:** Giao thức an ninh Internet TLS thế hệ mới đã tiếp nhận thuật toán dựa trên biến thể học có lỗi trên vành làm cơ chế bao gói khóa tiêu chuẩn.
- **어휘 연결:** 오류동반학습 (học có lỗi LWE), 최단벡터문제 (bài toán véc-tơ ngắn nhất SVP), 동형암호연산 (tính toán mật mã đồng cấu)
- **영어 참고:** Ring-LWE (Learning With Errors over Rings)

---

### 오류동반학습

- **발음:** [오류동반학습]
- **품사:** 명사
- **핵심 의미:** 오데드 레게브(Oded Regev)가 2005년 제안한 문제로, 무작위 선형 연립방정식에 가우스 분포를 따르는 작은 노이즈(오류)를 더했을 때 미지의 비밀 벡터를 복원해 내는 것이 고차원 격자의 최단벡터문제(SVP)만큼이나 계산 복잡도상 극도로 어렵다는 원리에 기반한 현대 암호학의 최고 핵심 난제(LWE, Learning With Errors)
- **베트남어 뜻:** học có lỗi (learning with errors, LWE)
- **뉘앙스와 사용법:** LWE 문제는 양자 컴퓨터로도 다항 시간(Polynomial Time) 내에 풀 수 없는 최악의 경우(Worst-case)와 평균적인 경우(Average-case)의 계산적 동등성이 수학적으로 엄밀히 증명되어 현대 PQC 및 동형암호의 절대적인 안전성 보루로 군림하고 있습니다.
- **재사용 가능한 콜로케이션·청크:**
  - 오류동반학습 난제의 최악 경우 안전성 환원 (quy đổi an toàn trường hợp xấu nhất của bài toán LWE)
  - 오류동반학습 기반 암호 알고리즘 (thuật toán mật mã dựa trên LWE)
  - 노이즈 분포에 따른 오류동반학습 난이도 분석 (phân tích độ khó của bài toán LWE theo phân bố nhiễu)
- **자주 쓰는 문형과 성분:**
  - 오류동반학습을 + 기반으로 설계된 암호는 양자 알고리즘의 공격에도 완벽한 지수함수적 계산 복잡도를 보장한다
- **사회적 관계·주제별 register:** Lý thuyết độ phức tạp tính toán, toán học mật mã học, an toàn lượng tử nền tảng.
- **예문:** 현대 격자 암호 연구자들은 모든 공개키 암호화 체계의 안전성을 LWE 오류동반학습의 계산적 난이도로 환원하여 증명한다.
- **Dịch:** Các nhà nghiên cứu mật mã lưới hiện đại chứng minh tính an toàn của mọi hệ thống mã hóa khóa công khai bằng cách quy đổi về độ khó tính toán của bài toán học có lỗi LWE.
- **어휘 연결:** 환오류동반학습 (học có lỗi trên vành Ring-LWE), 최단벡터문제 (bài toán véc-tơ ngắn nhất), 양자컴퓨팅위협 (mối đe dọa điện toán lượng tử)
- **영어 참고:** learning with errors (LWE)

---

### 쇼어알고리즘

- **발음:** [쇼어알고리즘]
- **품사:** 명사
- **핵심 의미:** 피터 쇼어(Peter Shor)가 1994년 발표한 양자 알고리즘으로, 양자 중첩과 양자 푸리에 변환(QFT)을 활용하여 거대한 합성수의 소인수분해와 이산대수 문제를 기존 고전 컴퓨터의 지수 시간이 아닌 다항 시간(O((log N)^3)) 안에 초고속으로 풀어버리는 혁명적 양자 알고리즘(Shor's Algorithm)
- **베트남어 뜻:** thuật toán Shor (Shor's algorithm)
- **뉘앙스와 사용법:** 현재 전 세계 금융, 국방, 전자상거래의 보안을 책임지는 RSA 암호, 타원곡선암호(ECC), 디피-헬만(DH) 키 교환을 단숨에 붕괴시킬 수 있는 핵폭탄급 알고리즘입니다; 이 쇼어알고리즘의 위협 때문에 전 세계가 PQC(양자내성암호)로의 대전환을 서두르고 있습니다.
- **재사용 가능한 콜로케이션·청크:**
  - 쇼어알고리즘에 의한 RSA 암호 무력화 (vô hiệu hóa mật mã RSA bằng thuật toán Shor)
  - 양자 푸리에 변환 기반 쇼어알고리즘 (thuật toán Shor dựa trên biến đổi Fourier lượng tử)
  - 쇼어알고리즘 가동에 필요한 논리 큐비트 수 계산 (tính toán số lượng qubit logic cần thiết để vận hành thuật toán Shor)
- **자주 쓰는 문형과 성분:**
  - 쇼어알고리즘이 + 충분한 큐비트를 갖춘 결함허용 양자컴퓨터에서 실행되는 순간 2048비트 RSA 암호는 수 시간 내에 해독된다
- **사회적 관계·주제별 register:** Điện toán lượng tử lý thuyết, an ninh mạng chiến lược, thuật toán phá mã lượng tử.
- **예문:** 국방 안보 전문가들은 쇼어알고리즘을 탑재한 양자 컴퓨터가 등장할 'Q-Day'에 대비하여 국가 기밀 통신망의 PQC 전환을 서두르고 있다.
- **Dịch:** Các chuyên gia an ninh quốc phòng đang đẩy nhanh việc chuyển đổi mạng thông tin mật quốc gia sang PQC để chuẩn bị cho 'Ngày Q-Day' khi máy tính lượng tử trang bị thuật toán Shor xuất hiện.
- **어휘 연결:** 양자컴퓨팅위협 (mối đe dọa điện toán lượng tử), 소인수분해 (phân tích thừa số nguyên tố prime factorization), 공개키기반구조 (hạ tầng khóa công khai PKI)
- **영어 참고:** Shor's algorithm

---

### 최단벡터문제

- **발음:** [최단벡터문제]
- **품사:** 명사
- **핵심 의미:** n차원 유클리드 공간에 무한히 퍼져 있는 이산적인 점들의 집합인 격자(Lattice)에서, 원점(0)을 제외하고 원점으로부터의 유클리드 거리가 가장 짧은 0이 아닌 격자 벡터를 찾아내는 기하학적 계산 난제(SVP, Shortest Vector Problem)
- **베트남어 뜻:** bài toán véc-tơ ngắn nhất (shortest vector problem, SVP)
- **뉘앙스와 사용법:** 격자의 차원 n이 500~1000차원 이상으로 커지면 고전 컴퓨터는 물론 양자 컴퓨터로도 다항 시간 내에 최단 벡터를 근사조차 할 수 없다는 NP-난해(NP-hard) 특성을 가집니다; 격자 기반 양자내성암호가 안전하다고 신뢰받는 궁극적인 수학적 근거입니다.
- **재사용 가능한 콜로케이션·청크:**
  - 최단벡터문제의 근사 난이도 (độ khó xấp xỉ của bài toán véc-tơ ngắn nhất)
  - 고차원 격자에서의 최단벡터문제 해결 알고리즘 (thuật toán giải bài toán véc-tơ ngắn nhất trong lưới nhiều chiều)
  - 최단벡터문제에 기반한 격자 암호의 비도 추정 (ước tính độ an toàn của mật mã lưới dựa trên bài toán SVP)
- **자주 쓰는 문형과 성분:**
  - 최단벡터문제를 + 푸는 가장 빠른 격자 기저 축소(BKZ) 알고리즘의 연산 복잡도를 기준으로 128비트 양자 보안 등급을 설계하다
- **사회적 관계·주제별 register:** Hình học số học (Geometry of numbers), lý thuyết độ phức tạp mật mã, đại số tuyến tính cao chiều.
- **예문:** 연구진은 1,024차원 격자에서 최단벡터문제를 푸는 데 필요한 양자 연산 횟수가 우주의 나이보다 길다는 사실을 수학적으로 입증했다.
- **Dịch:** Nhóm nghiên cứu đã chứng minh bằng toán học rằng số phép tính lượng tử cần thiết để giải bài toán véc-tơ ngắn nhất trong lưới 1.024 chiều lớn hơn cả tuổi của vũ trụ.
- **어휘 연결:** 격자기저축소 (thu hẹp cơ sở lưới lattice basis reduction BKZ), 오류동반학습 (học có lỗi LWE), 양자저항서명 (chữ ký số kháng lượng tử)
- **영어 참고:** shortest vector problem (SVP)

---

### 다변수공개키

- **발음:** [다변수공개키]
- **품사:** 명사
- **핵심 의미:** 유한체(Finite Field) 상에서 정의된 수십~수백 개의 미지수를 갖는 다변수 연립 2차 다항식 방정식계(MQ Problem)를 푸는 것이 NP-완전(NP-complete) 난제라는 점을 이용한 양자내성 공개키 암호 체계(Multivariate Public Key Cryptography, MPKC)
- **베트남어 뜻:** mật mã khóa công khai đa biến (multivariate public key cryptography, MPKC)
- **뉘앙스와 사용법:** Rainbow나 GeMSS 같은 전자서명 알고리즘이 대표적입니다; 공개키 크기는 수십 킬로바이트로 다소 큰 편이지만, 암호화 및 서명 생성·검증 속도가 격자 암호보다도 훨씬 빠르고 극도로 가벼운 IoT 저전력 기기에 매우 유리하다는 독보적인 장점을 지닙니다.
- **재사용 가능한 콜로케이션·청크:**
  - 다변수공개키 기반 전자서명 (chữ ký điện tử dựa trên mật mã khóa công khai đa biến)
  - MQ 연립방정식 난제와 다변수공개키 (bài toán hệ phương trình MQ và mật mã khóa công khai đa biến)
  - 다변수공개키 암호의 서명 검증 초고속 연산 (tính toán siêu tốc xác minh chữ ký của mật mã khóa công khai đa biến)
- **자주 쓰는 문형과 성분:**
  - 다변수공개키를 + 차량용 마이크로컨트롤러에 탑재하여 초소형 임베디드 칩에서도 지연 없는 고속 전자서명을 실현하다
- **사회적 관계·주제별 register:** Mật mã học phi tuyến hữu hạn, an ninh phần cứng nhúng (Embedded security), giải thuật chữ ký số nhanh.
- **예문:** 다변수공개키 방식은 키 크기가 다소 크다는 단점에도 불구하고 서명 검증 속도가 밀리초 이하로 극도로 빨라 자율주행 V2X 통신용으로 주목받고 있다.
- **Dịch:** Phương thức mật mã khóa công khai đa biến, bất chấp nhược điểm kích thước khóa tương đối lớn, đang thu hút sự chú ý dùng cho truyền thông V2X lái xe tự hành nhờ tốc độ xác minh chữ ký cực nhanh dưới một phần nghìn giây.
- **어휘 연결:** 양자저항서명 (chữ ký số kháng lượng tử), 다변수이차방정식 (hệ phương trình bậc hai đa biến MQ), 임베디드암호 (mật mã nhúng embedded cryptography)
- **영어 참고:** multivariate public key cryptography (MPKC)

---

### 해시기반서명

- **발음:** [해시기반서명]
- **품사:** 명사
- **핵심 의미:** 오직 안전성이 오랜 기간 철저히 검증된 암호학적 일방향 해시 함수(SHA-2, SHA-3)의 역상 저항성(Preimage Resistance)과 머클 트리(Merkle Tree) 구조에만 의존하여 전자서명을 생성하는 양자내성 서명 기법(예: SPHINCS+, XMSS, LMS)
- **베트남어 뜻:** chữ ký số dựa trên hàm băm (hash-based digital signature)
- **뉘앙스와 사용법:** 격자나 다변수 암호처럼 복잡한 대수학적 구조적 결함(히든 대칭성 등)에 취약할 위험이 원천적으로 없습니다; 해시 함수 자체의 충돌 저항성이 깨지지 않는 한 수학적으로 100% 안전하므로 가장 보수적이고 신뢰도가 높은 '궁극의 안전성 보루'로 평가받습니다.
- **재사용 가능한 콜로케이션·청크:**
  - 머클 트리 기반 해시기반서명 구조 (cấu trúc chữ ký số dựa trên hàm băm bằng cây Merkle)
  - 상태 비저장 해시기반서명 SPHINCS+ (chữ ký số dựa trên hàm băm không lưu trạng thái SPHINCS+)
  - 해시기반서명의 양자 충돌 공격 저항성 (khả năng kháng tấn công va chạm lượng tử của chữ ký số dựa trên hàm băm)
- **자주 쓰는 문형과 성분:**
  - 해시기반서명을 + 안전한 펌웨어 코드 서명과 루트 인증서 발급에 적용하여 백만 년 이상의 장기 보안성을 담보하다
- **사회적 관계·주제별 register:** Cấu trúc dữ liệu an ninh Merkle, mật mã học phi đại số, xác thực phần sụn cấp cao.
- **예문:** NIST는 격자 암호가 향후 수학적 취약점으로 무너질 경우를 대비한 가장 안전한 백업 표준으로 해시기반서명인 SPHINCS+를 공식 채택했다.
- **Dịch:** NIST đã chính thức tiếp nhận SPHINCS+ - một dạng chữ ký số dựa trên hàm băm - làm tiêu chuẩn dự phòng an toàn nhất để chuẩn bị cho trường hợp mật mã lưới bị sụp đổ bởi các lỗ hổng toán học trong tương lai.
- **어휘 연결:** 머클트리 (cây Merkle Merkle tree), 일방향해시함수 (hàm băm một chiều one-way hash function), 양자저항서명 (chữ ký số kháng lượng tử)
- **영어 참고:** hash-based digital signature

---

### 아이소제니암호

- **발음:** [아이소제니암호]
- **품사:** 명사
- **핵심 의미:** 초특이 타원곡선(Supersingular Elliptic Curves) 간의 부분군 사상인 아이소제니(Isogeny, 동종사상) 그래프에서 두 곡선 사이의 최단 경로를 탐색하는 것이 고전 및 양자 컴퓨터 모두에 대해 극도로 어렵다는 난제에 기반한 암호 체계(Isogeny-Based Cryptography, CSIDH 등)
- **베트남어 뜻:** mật mã đẳng cấu đường cong elliptic, mật mã dựa trên đồng cấu isogeny (isogeny-based cryptography)
- **뉘앙스와 사용법:** 키 크기가 수백 바이트(기존 RSA나 ECC와 유사)로 모든 PQC 후보 중 가장 작다는 압도적인 장점이 있어 각광받았으나, SIKE 방식이 고전 알고리즘에 의해 공격당하는 부침을 겪은 후 현재는 가환 군 작용 기반(CSIDH)이나 대안 아이소제니 서명(SQISign)을 중심으로 엄밀한 연구가 지속되고 있습니다.
- **재사용 가능한 콜로케이션·청크:**
  - 초특이 타원곡선 아이소제니암호 그래프 (đồ thị mật mã đẳng cấu đường cong elliptic siêu đặc biệt)
  - 가장 작은 키 크기를 자랑하는 아이소제니암호 (mật mã đẳng cấu sở hữu kích thước khóa nhỏ nhất)
  - 아이소제니암호의 동종사상 경로 탐색 난제 (bài toán khó tìm đường đồng cấu trong mật mã isogeny)
- **자주 쓰는 문형과 성분:**
  - 아이소제니암호를 + 연구하여 격자 기반 암호보다 훨씬 짧은 공개키 크기로 양자 내성 키 교환을 달성하는 새로운 수학적 경로를 모색하다
- **사회적 관계·주제별 register:** Hình học đại số số học, lý thuyết đường cong elliptic cao cấp, mật mã học hậu lượng tử tiên phong.
- **예문:** SQISign은 아이소제니암호의 강점을 살려 서명 크기를 불과 200바이트 수준으로 압축한 혁신적인 차세대 서명 프로토콜이다.
- **Dịch:** SQISign là giao thức chữ ký thế hệ mới mang tính đột phá, phát huy thế mạnh của mật mã đẳng cấu để nén kích thước chữ ký xuống mức chỉ vỏn vẹn 200 byte.
- **어휘 연결:** 초특이타원곡선 (đường cong elliptic siêu đặc biệt supersingular elliptic curve), 암호키교환프로토콜 (giao thức trao đổi khóa mật mã), 공개키기반구조 (hạ tầng khóa công khai)
- **영어 참고:** isogeny-based cryptography

---

### 암호화표준선정

- **발음:** [암호화표준선정]
- **품사:** 명사
- **핵심 의미:** 양자 컴퓨터의 도래에 대비하여 전 세계 정부 기관(미국 NIST, 한국 국가정보원 등)이 주도하여 수년에 걸쳐 전 세계 암호학자들이 제안한 수십 개의 양자내성 암호 알고리즘의 안전성, 성능, 하드웨어 효율성을 공개 경쟁 검증하고 국가 표준으로 공식 지정하는 글로벌 절차
- **베트남어 뜻:** lựa chọn tiêu chuẩn mật mã hóa, quy chuẩn hóa thuật toán mật mã (cryptographic standard selection)
- **뉘앙스와 사용법:** NIST는 2016년부터 8년간의 엄격한 라운드별 심사를 거쳐 2024년 최초의 공식 PQC 표준(FIPS 203 ML-KEM, FIPS 204 ML-DSA, FIPS 205 SLH-DSA)을 공표했으며, 한국도 K-PQC 사업을 통해 한국형 양자내성 암호화표준선정을 진행 중입니다.
- **재사용 가능한 콜로케이션·청크:**
  - NIST 주도의 글로벌 PQC 암호화표준선정 (lựa chọn tiêu chuẩn mật mã hóa PQC toàn cầu do NIST dẫn dắt)
  - 차세대 국가 암호화표준선정 공표 (công bố lựa chọn tiêu chuẩn mật mã hóa quốc gia thế hệ mới)
  - 암호화표준선정을 위한 양자 알고리즘 해킹 검증 (kiểm chứng tấn công thuật toán lượng tử phục vụ lựa chọn tiêu chuẩn mật mã)
- **자주 쓰는 문형과 성분:**
  - 암호화표준선정이 + 공식 완료됨에 따라 전 세계 IT 기업들은 기존 보안 인프라를 새로운 표준 알고리즘으로 마이그레이션하기 시작했다
- **사회적 관계·주제별 register:** Chính sách tiêu chuẩn an ninh quốc gia, quản trị an toàn thông tin toàn cầu, tiêu chuẩn FIPS.
- **예문:** 정부는 금융 및 국가 전산망의 안전을 지키기 위해 글로벌 기준과 호환되는 자체 양자내성 암호화표준선정 작업을 최종 마무리했다.
- **Dịch:** Chính phủ đã hoàn tất khâu cuối cùng trong công tác lựa chọn tiêu chuẩn mật mã hóa kháng lượng tử tự chủ tương thích với tiêu chuẩn toàn cầu để bảo vệ an toàn cho mạng thông tin tài chính và quốc gia.
- **어휘 연결:** 양자저항서명 (chữ ký số kháng lượng tử), 환오류동반학습 (học có lỗi trên vành), 암호키교환프로토콜 (giao thức trao đổi khóa mật mã)
- **영어 참고:** cryptographic standard selection

---

### 동형암호연산

- **발음:** [동형암호연산]
- **품사:** 명사
- **핵심 의미:** 데이터를 복호화(암호 해제)하여 평문으로 되돌리지 않고도 암호화된 상태 그대로 덧셈, 곱셈, 기계학습 모델 추론 등의 복잡한 계산을 수행한 후, 그 결과만을 복호화하면 평문으로 계산한 결과와 완전히 일치하도록 보장하는 혁신적 프라이버시 보존 암호 기술(FHE, Fully Homomorphic Encryption)
- **베트남어 뜻:** tính toán mật mã đồng cấu, xử lý dữ liệu trên bản mã hóa (homomorphic encryption computation, FHE)
- **뉘앙스와 사용법:** 2009년 크레이그 젠트리(Craig Gentry)에 의해 격자(Lattice) 이론을 기반으로 최초 구현되었습니다; 민감한 의료 데이터나 금융 정보를 클라우드 서버에 암호화된 채로 올려 AI로 분석해도 서버 관리자조차 원본 데이터를 전혀 볼 수 없으므로 궁극의 데이터 보안 기술로 꼽힙니다.
- **재사용 가능한 콜로케이션·청크:**
  - 완전 동형암호연산 처리 가속 (tăng tốc xử lý tính toán mật mã đồng cấu hoàn toàn)
  - 격자 기반 동형암호연산 라이브러리 (thư viện tính toán mật mã đồng cấu dựa trên lý thuyết lưới)
  - 프라이버시 보존형 머신러닝을 위한 동형암호연산 (tính toán mật mã đồng cấu dùng cho học máy bảo toàn quyền riêng tư)
- **자주 쓰는 문형과 성분:**
  - 동형암호연산을 + 활용하여 환자의 민감한 유전체 정보를 암호화된 상태로 인공지능에 입력하고 암호화된 질병 진단 결과를 도출하다
- **사회적 관계·주제별 register:** Công nghệ tăng cường quyền riêng tư (PETs), học máy bảo mật (Privacy-preserving ML), toán học mật mã cao cấp.
- **예문:** 동형암호연산 전용 가속기 칩의 개발로 암호화 상태에서의 딥러닝 추론 속도가 수천 배 빨라져 상용화 단계에 접어들었다.
- **Dịch:** Nhờ sự phát triển của chip tăng tốc chuyên dụng cho tính toán mật mã đồng cấu, tốc độ suy luận học sâu ở trạng thái mã hóa đã nhanh hơn hàng nghìn lần, bước vào giai đoạn thương mại hóa.
- **어휘 연결:** 환오류동반학습 (học có lỗi trên vành Ring-LWE), 격자기반암호 (mật mã dựa trên lý thuyết lưới), 부트스트래핑 (kỹ thuật khử nhiễu bootstrapping)
- **영어 참고:** homomorphic encryption computation (FHE)

---

### 사이드채널공격방어

- **발음:** [사이드채널공격방어]
- **품사:** 명사
- **핵심 의미:** 암호 알고리즘 자체의 수학적 결함이 아니라 암호 칩이 실제로 연산을 수행할 때 발생하는 소비 전력의 미세한 변화, 전자기파 방출, 연산 소요 시간(타이밍), 오류 발생 양상 등 물리적 누출 정보를 도청하여 비밀키를 빼내는 부채널 공격(Side-Channel Attack)을 하드웨어 및 소프트웨어적으로 차단하는 보안 기술
- **베트남어 뜻:** phòng thủ tấn công kênh bên, bảo vệ chống tấn công kênh phụ (side-channel attack defense)
- **뉘앙스와 사용법:** 양자내성암호(PQC) 알고리즘이 수학적으로 아무리 완벽해도 스마트카드나 HSM 칩에 구현되었을 때 차분전력분석(DPA) 공격에 뚫릴 수 있습니다; 이를 막기 위해 연산 시간을 입력값과 무관하게 일정하게 맞추는 상수 시간(Constant-Time) 구현과 마스킹(Masking) 기법이 필수적입니다.
- **재사용 가능한 콜로케이션·청크:**
  - 상수 시간 코딩을 통한 사이드채널공격방어 (phòng thủ tấn công kênh bên thông qua mã hóa thời gian hằng số constant-time)
  - PQC 하드웨어 칩의 사이드채널공격방어 검증 (kiểm chứng phòng thủ tấn công kênh bên của chip phần cứng PQC)
  - 전력 분석 차단을 위한 마스킹 사이드채널공격방어 (phòng thủ tấn công kênh bên bằng kỹ thuật che mặt nạ masking để ngăn chặn phân tích công suất)
- **자주 쓰는 문형과 성분:**
  - 사이드채널공격방어를 + 내재화하여 전력 파형 측정 장비를 동원한 외부 해커의 암호키 탈취 시도를 원천 무력화하다
- **사회적 관계·주제별 register:** An ninh phần cứng (Hardware security), đánh giá lỗ hổng vi mạch mật mã, tấn công vật lý bán dẫn.
- **예문:** 보안 반도체 기업은 격자 다항식 곱셈 연산 시 무작위 노이즈를 섞는 고급 마스킹 기술을 적용하여 강력한 사이드채널공격방어 기능을 구현했다.
- **Dịch:** Doanh nghiệp bán dẫn an ninh đã áp dụng kỹ thuật che mặt nạ nâng cao trộn lẫn nhiễu ngẫu nhiên khi thực hiện phép nhân đa thức lưới để hiện thực hóa tính năng phòng thủ tấn công kênh bên mạnh mẽ.
- **어휘 연결:** 차분전력분석 (phân tích công suất vi sai DPA), 상수시간구현 (thực thi thời gian hằng số constant-time execution), 하드웨어보안모듈 (mô-đun bảo mật phần cứng HSM)
- **영어 참고:** side-channel attack defense

---

### 영지식증명체계

- **발음:** [영지식증명체계]
- **품사:** 명사
- **핵심 의미:** 증명자(Prover)가 검증자(Verifier)에게 자신이 특정 비밀 정보(예: 비밀번호, 개인 식별 번호, 암호키)를 알고 있다는 사실 외에는 그 비밀 정보의 구체적인 내용에 대해 '단 1비트의 정보도 누설하지 않고(Zero-Knowledge)' 참임을 완벽하게 증명해 보이는 암호학적 대화형·비대화형 증명 시스템(ZKP, Zero-Knowledge Proof)
- **베트남어 뜻:** hệ thống chứng minh không tri thức (zero-knowledge proof system, ZKP)
- **뉘앙스와 사용법:** 완전성(Completeness), 건전성(Soundness), 영지식성(Zero-knowledge)의 3대 공리를 만족합니다; zk-SNARKs, zk-STARKs 등으로 발전하여 블록체인의 프라이버시 코인, 롤업(Rollup) 확장성 솔루션, 비식별 분산 신원 인증(DID)의 핵심 원천 기술로 쓰입니다.
- **재사용 가능한 콜로케이션·청크:**
  - 비대화형 영지식증명체계 zk-SNARK (hệ thống chứng minh không tri thức phi tương tác zk-SNARK)
  - 블록체인 프라이버시 보호용 영지식증명체계 (hệ thống chứng minh không tri thức bảo vệ quyền riêng tư blockchain)
  - 영지식증명체계의 계산 오버헤드 최적화 (tối ưu hóa chi phí phụ trội tính toán của hệ thống chứng minh không tri thức)
- **자주 쓰는 문형과 성분:**
  - 영지식증명체계를 + 적용하여 성인의 주민등록번호나 생년월일을 직접 노출하지 않고도 19세 이상 성인임을 완벽히 입증하다
- **사회적 관계·주제별 register:** Giao thức mật mã nâng cao, công nghệ blockchain phân tán, kiến trúc danh tính số tự chủ (DID).
- **예문:** 금융 앱은 사용자의 금융 자산 잔액을 공개하지 않고도 대출 자격 요건을 충족한다는 사실만을 증명하는 영지식증명체계를 도입했다.
- **Dịch:** Ứng dụng tài chính đã đưa vào áp dụng hệ thống chứng minh không tri thức chứng minh duy nhất sự thật rằng người dùng đáp ứng đủ điều kiện vay vốn mà không cần tiết lộ số dư tài sản tài chính thực tế.
- **어휘 연결:** 영지식스나크 (zk-SNARK), 분산신원인증 (xác thực danh tính phi tập trung DID), 완전성건전성 (tính hoàn chỉnh và tính đúng đắn completeness and soundness)
- **영어 참고:** zero-knowledge proof system (ZKP)

---

### 양자컴퓨팅위협

- **발음:** [양자컴퓨팅위협]
- **품사:** 명사
- **핵심 의미:** 초전도체, 이온트랩, 광학 기술을 활용한 고성능 결함허용(Fault-Tolerant) 양자 컴퓨터가 개발됨에 따라, 현대 인터넷과 금융, 군사 통신망의 보안 근간인 RSA, ECC 등 기존 공개키 암호 체계가 일시에 강제 해독되고 무력화될 수 있는 현실적 안보 위기(Quantum Computing Threat / Harvest Now, Decrypt Later)
- **베트남어 뜻:** mối đe dọa điện toán lượng tử (quantum computing threat)
- **뉘앙스와 사용법:** 특히 적대 세력이 현재 암호화된 국가 기밀 데이터를 일단 대량으로 수집·도청해 저장해 둔 뒤, 10년 후 양자 컴퓨터가 완성되면 사후에 일괄 해독하는 '지금 수집하고 나중에 해독한다(HNDL, Harvest Now, Decrypt Later)' 전략이 현실화되면서 즉각적인 PQC 전환이 시급해졌습니다.
- **재사용 가능한 콜로케이션·청크:**
  - HNDL 전술에 기반한 양자컴퓨팅위협 (mối đe dọa điện toán lượng tử dựa trên chiến thuật HNDL)
  - 국가 기간 시설에 대한 양자컴퓨팅위협 대응 (ứng phó mối đe dọa điện toán lượng tử đối với cơ sở hạ tầng trọng yếu quốc gia)
  - 양자컴퓨팅위협 평가 보고서 발간 (phát hành báo cáo đánh giá mối đe dọa điện toán lượng tử)
- **자주 쓰는 문형과 성분:**
  - 양자컴퓨팅위협에 + 선제적으로 대비하지 못한 국가의 금융망과 군사 지휘 체계는 한순간에 암호 주권을 상실하게 된다
- **사회적 관계·주제별 register:** Chiến lược an ninh mạng quốc gia, tình báo tín hiệu (SIGINT), quản trị rủi ro công nghệ đột phá.
- **예문:** 미국 백악관은 모든 연방 기관에 2035년까지 기존 취약 암호 체계를 양자내성 암호로 전면 교체하도록 지시하는 양자컴퓨팅위협 대응 국가 안보 각서를 발표했다.
- **Dịch:** Nhà Trắng đã ban hành bản ghi nhớ an ninh quốc gia ứng phó mối đe dọa điện toán lượng tử, chỉ thị cho mọi cơ quan liên bang phải thay thế toàn diện các hệ thống mật mã dễ tổn thương hiện có sang mật mã kháng lượng tử trước năm 2035.
- **어휘 연결:** 쇼어알고리즘 (thuật toán Shor), 사후해독위협 (mối đe dọa thu thập trước giải mã sau HNDL), 양자저항서명 (chữ ký số kháng lượng tử)
- **영어 참고:** quantum computing threat

---

### 암호키교환프로토콜

- **발음:** [암호키교환프로토콜]
- **품사:** 명사
- **핵심 의미:** 도청 위험이 상존하는 공개된 통신망(인터넷)을 통해 송신자와 수신자가 사전에 만난 적이 없더라도 양자 공격에 안전한 동일한 대칭키(비밀 세션키)를 안전하게 생성하고 공유할 수 있도록 규정한 통신 규약(Key Encapsulation Mechanism, KEM / Key Exchange Protocol)
- **베트남어 뜻:** giao thức trao đổi khóa mật mã, cơ chế đóng gói khóa (cryptographic key exchange protocol / KEM)
- **뉘앙스와 사용법:** 전통적인 디피-헬만(Diffie-Hellman) 키 교환을 대체하여, NIST 표준으로 선정된 ML-KEM(CRYSTALS-Kyber, 모듈 격자 기반) 등 키 캡슐화 메커니즘(KEM)이 차세대 웹 브라우저(HTTPS/TLS 1.3) 암호키교환프로토콜의 글로벌 표준으로 전격 도입되었습니다.
- **재사용 가능한 콜로케이션·청크:**
  - 포스트 퀀텀 하이브리드 암호키교환프로토콜 (giao thức trao đổi khóa mật mã lai ghép hậu lượng tử)
  - ML-KEM 기반 암호키교환프로토콜 구현 (hiện thực hóa giao thức trao đổi khóa mật mã dựa trên ML-KEM)
  - 암호키교환프로토콜의 순방향 비밀성 보장 (bảo đảm tính bảo mật chuyển tiếp forward secrecy của giao thức trao đổi khóa)
- **자주 쓰는 문형과 성분:**
  - 암호키교환프로토콜을 + 거쳐 클라이언트와 웹 서버가 양자 컴퓨터로도 도청 불가능한 고유의 AES 대칭키를 안전하게 공유하다
- **사회적 관계·주제별 register:** Giao thức an toàn Internet TLS, kỹ thuật bắt tay mã hóa mạng (Cryptographic handshake), tiêu chuẩn IETF.
- **예문:** 구글 크롬과 주요 웹 브라우저들은 양자 컴퓨터 해킹에 대비하여 기존 타원곡선과 PQC 격자 키를 결합한 하이브리드 암호키교환프로토콜을 기본 탑재했다.
- **Dịch:** Google Chrome và các trình duyệt web lớn đã tích hợp mặc định giao thức trao đổi khóa mật mã lai ghép kết hợp đường cong elliptic hiện có và khóa lưới PQC để chuẩn bị đối phó với việc bị máy tính lượng tử tấn công.
- **어휘 연결:** 키캡슐화메커니즘 (cơ chế đóng gói khóa KEM), 순방향비밀성 (tính bảo mật chuyển tiếp forward secrecy), 환오류동반학습 (học có lỗi trên vành)
- **영어 참고:** cryptographic key exchange protocol / KEM

---

### 공개키기반구조

- **발음:** [공개키기반구조]
- **품사:** 명사
- **핵심 의미:** 신뢰받는 공인인증기관(CA)이 개인이나 조직의 디지털 신원과 그들의 공개키를 수학적으로 결합한 디지털 인증서를 발급, 갱신, 검증, 폐기함으로써 인터넷 전자상거래와 금융 거래의 기밀성, 무결성, 인증, 부인방지를 보장하는 종합 보안 인프라 체계(PKI, Public Key Infrastructure)
- **베트남어 뜻:** hạ tầng khóa công khai (public key infrastructure, PKI)
- **뉘앙스와 사용법:** 현대 전 세계 인터넷 보안(HTTPS 자물쇠 아이콘)의 절대적 기둥입니다; 현재의 PKI는 RSA 및 타원곡선 암호 기반이므로, 양자 컴퓨터 시대에 인터넷이 통째로 마비되지 않으려면 루트 CA 인증서부터 하위 인증서까지 양자내성 PQC 알고리즘으로 전면 교체(PQC PKI 마이그레이션)되어야 합니다.
- **재사용 가능한 콜로케이션·청크:**
  - 국가 공인 공개키기반구조 체계 (hệ thống hạ tầng khóa công khai được quốc gia công nhận)
  - 양자내성 공개키기반구조로의 전환 로드맵 (lộ trình chuyển đổi sang hạ tầng khóa công khai kháng lượng tử PQC PKI)
  - 공개키기반구조 인증서 폐지 목록(CRL) 관리 (quản lý danh sách thu hồi chứng thư số CRL trong hạ tầng PKI)
- **자주 쓰는 문형과 성분:**
  - 공개키기반구조를 + 통해 은행 송금 시 사용자의 전자서명이 위조되지 않았음을 실시간으로 인증하고 거래 부인을 방지하다
- **사회적 관계·주제별 register:** Quản trị chứng thư số công cộng, an ninh thông tin ngân hàng và chính phủ điện tử, chứng thực điện tử.
- **예문:** 정부는 국가 전산망에 적용된 낡은 공개키기반구조를 차세대 양자저항 알고리즘으로 업그레이드하는 대규모 차세대 PKI 전환 사업을 발주했다.
- **Dịch:** Chính phủ đã phát động dự án quy mô lớn chuyển đổi sang PKI thế hệ mới nhằm nâng cấp hạ tầng khóa công khai cũ kỹ đang áp dụng trong mạng lưới điện toán quốc gia sang các thuật toán kháng lượng tử thế hệ tiếp theo.
- **어휘 연결:** 공인인증기관 (cơ quan chứng thực CA certificate authority), 디지털인증서 (chứng thư số digital certificate), 부인방지 (chống chối bỏ non-repudiation)
- **영어 참고:** public key infrastructure (PKI)

---

## 단원 종합 읽기 자료: 컴퓨터과학 및 양자내성암호·격자 기반 암호 이론의 언어
<!-- passage_word_count: 105 Korean eojeol; target_set: 양자저항서명, 환오류동반학습, 오류동반학습, 쇼어알고리즘, 최단벡터문제, 다변수공개키, 해시기반서명, 아이소제니암호, 암호화표준선정, 동형암호연산, 사이드채널공격방어, 영지식증명체계, 양자컴퓨팅위협, 암호키교환프로토콜, 공개키기반구조 -->
국가 미래 정보 통신 보안 연구소 전문 연구진은 국가적 차원의 거대한 차세대 양자컴퓨팅위협 선제적으로 대비하고 대응하기 위해 정부 차원의 신규 암호화표준선정 로드맵에 맞춘 차세대 암호키교환프로토콜 보안 체계를 전면 개편한다. 국내외 기존 공개키기반구조 RSA 소인수분해 알고리즘 취약점을 집중 공략하는 쇼어알고리즘 연산을 무력화하고자 신뢰할 수 있는 양자저항서명 첨단 기술과 해시기반서명 방식을 전격 도입한다. 연구진은 고차원 격자 이론의 최단벡터문제 계산 복잡도를 안전성 기반으로 삼는 환오류동반학습 및 오류동반학습 기반 신규 보안 암호 알고리즘을 체계적으로 설계하고 다변수공개키 체계와 수학적 아이소제니암호 기법을 다각도로 정밀하게 비교 분석한다. 아울러 완전 동형암호연산 데이터 처리 속도를 획기적으로 가속하고 사이드채널공격방어 물리적 보안 하드웨어 전용 회로와 영지식증명체계 결합하여 국가 최고 등급의 데이터 기밀성을 확고하고 완벽하고 영구하게 보장했다.

**베트남어 번역:**
Đội ngũ chuyên gia nghiên cứu Viện Nghiên cứu An toàn Thông tin Truyền thông Tương lai Quốc gia tiến hành cải tổ toàn diện hệ thống an ninh giao thức trao đổi khóa mật mã thế hệ mới phù hợp với lộ trình lựa chọn tiêu chuẩn mật mã hóa mới ở cấp độ chính phủ nhằm chủ động chuẩn bị và ứng phó với mối đe dọa điện toán lượng tử thế hệ tiếp theo khổng lồ ở cấp độ quốc gia. Để vô hiệu hóa các phép tính của thuật toán Shor tập trung tấn công vào điểm yếu thuật toán phân tích nhân tử nguyên tố RSA của hạ tầng khóa công khai hiện có trong và ngoài nước, viện áp dụng chớp nhoáng công nghệ tiên tiến chữ ký số kháng lượng tử đáng tin cậy và phương thức chữ ký số dựa trên hàm băm. Đội ngũ nghiên cứu thiết kế có hệ thống các thuật toán mật mã an ninh mới dựa trên học có lỗi trên vành và học có lỗi lấy độ phức tạp tính toán của bài toán véc-tơ ngắn nhất trong lý thuyết lưới nhiều chiều làm nền tảng an toàn, đồng thời so sánh phân tích chuẩn xác đa chiều với hệ thống khóa công khai đa biến và kỹ thuật mật mã đẳng cấu toán học. Ngoài ra, viện đẩy nhanh một cách đột phá tốc độ xử lý dữ liệu tính toán mật mã đồng cấu hoàn toàn và kết hợp mạch chuyên dụng phần cứng bảo mật vật lý phòng thủ tấn công kênh bên cùng hệ thống chứng minh không tri thức để bảo đảm vững chắc, hoàn hảo và vĩnh viễn tính bảo mật dữ liệu cấp độ tối cao của quốc gia.
