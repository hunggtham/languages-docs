<!-- source_policy: original explanations, examples, and passage; no source wording is reproduced -->

# 프라이버시를 설계하고 데이터 흐름을 통제하는 말

개인정보 보호는 수집 뒤에 문서를 붙이는 일이 아니라, 처음부터 데이터가 어디로 흐르고 누가 무엇을 알 수 있는지 설계하는 일이다. 아래 표현들은 암호 기술과 운영 규칙을 함께 검토할 때 쓰인다.

<!-- lexical_basis: advanced_native; register: privacy engineering and security architecture; source_lane: news_formal; context: advanced-privacy-engineering-and-data-governance/news_formal -->
### 프라이버시 위협 모델링

**품사:** 명사

**핵심 의미:** 서비스의 데이터 흐름과 공격 가능성을 그려 어떤 개인 정보 위험이 생기는지 설계 단계에서 분석하는 절차다.

**베트남어 뜻:** mô hình hóa mối đe dọa đối với quyền riêng tư.

**뉘앙스와 사용법:** `프라이버시 위협 모델링`은 해킹 취약점만 찾는 작업이 아니다. 누가 어떤 결합 정보로 개인을 추론할 수 있는지, 잘못된 권한이나 보존 기간이 어떤 피해를 만드는지까지 묻는다.

**재사용 가능한 콜로케이션·청크:** `프라이버시 위협 모델링을 수행하다`, `위협 모델링 결과를 설계에 반영하다`, `데이터 흐름을 위협 모델링하다` — thực hiện, phản ánh kết quả và phân tích luồng dữ liệu.

**자주 쓰는 문형과 성분:** `팀이 A를 대상으로 프라이버시 위협 모델링을 하다`, `모델링에서 B를 식별하다`가 자연스럽다. A에는 신규 AI 서비스, B에는 재식별 경로와 과도한 접근이 온다.

**사회적 관계·주제별 register:** 보안 설계·개인정보 영향 검토의 전문어다. 경영진에게는 `데이터가 악용될 수 있는 경로를 출시 전에 그리는 절차`라고 풀어 말한다.

**예문:** 개발팀은 얼굴 인증 기능을 출시하기 전에 프라이버시 위협 모델링으로 오인식과 내부자 접근을 함께 점검했다.

**Dịch:** Trước khi ra mắt tính năng xác thực khuôn mặt, nhóm phát triển dùng mô hình hóa mối đe dọa riêng tư để kiểm tra cả nhận dạng sai và truy cập nội bộ.

**어휘 연결:** `위협 모델링`은 공격과 피해의 경로를 넓게 분석하고, `개인정보 영향평가`는 법적 권리와 처리 정당성까지 문서화하는 절차다.

**영어 참고:** *privacy threat modeling* — quy trình lập bản đồ luồng dữ liệu, tác nhân tấn công và tác động đến cá nhân trước khi triển khai.

---

<!-- lexical_basis: advanced_native; register: privacy statistics and AI governance; source_lane: news_formal; context: advanced-privacy-engineering-and-data-governance/news_formal -->
### 차등프라이버시

**품사:** 명사

**핵심 의미:** 통계 결과에 작은 무작위성을 더해 특정 개인의 포함 여부를 알아내기 어렵게 하면서 집단 수준의 분석은 유지하는 보호 기법이다.

**베트남어 뜻:** quyền riêng tư vi sai, kỹ thuật thêm nhiễu có kiểm soát vào thống kê.

**뉘앙스와 사용법:** `차등프라이버시`는 데이터를 무조건 익명으로 만든다는 약속이 아니라, 한 사람의 데이터가 결과를 얼마나 바꿀 수 있는지를 수학적으로 제한하는 방식이다.

**재사용 가능한 콜로케이션·청크:** `차등프라이버시를 적용하다`, `차등프라이버시 보장`, `차등프라이버시 통계` — áp dụng, bảo đảm và thống kê có bảo vệ vi sai.

**자주 쓰는 문형과 성분:** `기관이 A에 차등프라이버시를 적용하다`, `차등프라이버시가 B를 보장하다`가 자연스럽다. A에는 공개 통계, B에는 개인 포함 여부의 비식별성이 온다.

**사회적 관계·주제별 register:** 통계·머신러닝·공공데이터 연구의 전문어다. 일반 이용자에게는 `한 사람의 참여 여부가 통계에서 드러나지 않게 하는 계산 규칙`이라고 설명한다.

**예문:** 연구기관은 지역별 이동 통계를 공개하면서 차등프라이버시를 적용해 개인의 방문 기록을 추정하기 어렵게 했다.

**Dịch:** Viện nghiên cứu áp dụng quyền riêng tư vi sai khi công bố thống kê di chuyển theo vùng, khiến khó suy đoán lịch sử ghé thăm của cá nhân.

**어휘 연결:** `차등프라이버시`는 통계 공개의 수학적 보장이고, `가명 처리`는 식별자를 바꾸는 데이터 처리라서 보호 논리가 다르다.

**영어 참고:** *differential privacy* — bảo đảm toán học giới hạn mức độ một cá nhân ảnh hưởng đến kết quả thống kê.

---

<!-- lexical_basis: advanced_native; register: privacy measurement and model governance; source_lane: news_formal; context: advanced-privacy-engineering-and-data-governance/news_formal -->
### 프라이버시 예산

**품사:** 명사

**핵심 의미:** 차등프라이버시에서 허용할 정보 노출량을 수치로 관리하는 한도다.

**베트남어 뜻:** ngân sách quyền riêng tư, giới hạn mức rò rỉ thông tin cho phép.

**뉘앙스와 사용법:** `프라이버시 예산`은 돈이 아니라 여러 번의 질의와 공개가 누적시키는 노출 위험의 총량이다. 예산을 많이 쓰면 통계는 선명해지지만 보호 수준은 낮아질 수 있다.

**재사용 가능한 콜로케이션·청크:** `프라이버시 예산을 배분하다`, `예산을 소진하다`, `프라이버시 예산을 재설정하다` — phân bổ, tiêu hao và thiết lập lại giới hạn.

**자주 쓰는 문형과 성분:** `A가 프라이버시 예산을 소진하다`, `예산 안에서 B를 공개하다`가 자연스럽다. A에는 반복 질의와 모델 학습이, B에는 집계 통계가 온다.

**사회적 관계·주제별 register:** 데이터 분석팀과 감사·연구 보고서의 전문어다. 비전문가에게는 `공개를 반복할수록 줄어드는 개인정보 보호 한도`라고 말한다.

**예문:** 대시보드가 같은 이용자 집단에 지나치게 많은 질의를 보내 프라이버시 예산을 예상보다 빨리 소진했다.

**Dịch:** Bảng điều khiển gửi quá nhiều truy vấn đến cùng một nhóm người dùng nên tiêu hao ngân sách riêng tư nhanh hơn dự kiến.

**어휘 연결:** `프라이버시 예산`은 노출의 누적 한도이고 `프라이버시 손실`은 특정 처리에서 실제로 발생한 보호 저하를 측정하는 개념이다.

**영어 참고:** *privacy budget* — giới hạn tổng mức phơi lộ được phép trong các phép tính bảo vệ riêng tư.

---

<!-- lexical_basis: advanced_native; register: cryptography and data collaboration; source_lane: news_formal; context: advanced-privacy-engineering-and-data-governance/news_formal -->
### 동형암호

**품사:** 명사

**핵심 의미:** 암호화된 상태의 데이터를 복호화하지 않고도 특정 계산을 수행할 수 있게 하는 암호 기술이다.

**베트남어 뜻:** mã hóa đồng cấu, cho phép tính toán trên dữ liệu đã mã hóa.

**뉘앙스와 사용법:** `동형암호`는 서버가 원자료를 읽지 못하게 하면서 계산 결과를 돌려주는 설계에 적합하다. 다만 계산 비용과 키 관리가 실제 도입의 중요한 제약이다.

**재사용 가능한 콜로케이션·청크:** `동형암호를 적용하다`, `암호화 상태에서 계산하다`, `동형암호 연산 비용` — áp dụng, tính toán khi mã hóa và chi phí vận hành.

**자주 쓰는 문형과 성분:** `기관이 A를 동형암호로 처리하다`, `동형암호가 B를 노출하지 않다`가 자연스럽다. A에는 의료 데이터, B에는 원자료의 민감성이 온다.

**사회적 관계·주제별 register:** 암호학·의료 AI·금융 공동분석의 고급 기술어다. 제품 설명에서는 `원자료를 보여 주지 않고 계산하는 암호`라고 풀어 쓴다.

**예문:** 병원들은 동형암호를 사용해 환자 원자료를 서로 공개하지 않고 공동 위험 점수를 계산했다.

**Dịch:** Các bệnh viện dùng mã hóa đồng cấu để tính điểm rủi ro chung mà không tiết lộ dữ liệu gốc của bệnh nhân cho nhau.

**어휘 연결:** `동형암호`는 암호문 위에서 계산하고, `기밀 컴퓨팅`은 보호된 실행 환경에서 복호화된 데이터를 처리한다. 둘은 위협 모델과 비용이 다르다.

**영어 참고:** *homomorphic encryption* — mã hóa cho phép thực hiện phép tính trên bản mã mà không cần giải mã dữ liệu gốc.

---

<!-- lexical_basis: advanced_native; register: machine learning and health-data governance; source_lane: news_formal; context: advanced-privacy-engineering-and-data-governance/news_formal -->
### 연합학습

**품사:** 명사

**핵심 의미:** 여러 기관이나 기기에서 원자료를 중앙 서버로 보내지 않고 각자 모델을 학습한 뒤 업데이트만 결합하는 방식이다.

**베트남어 뜻:** học liên kết, huấn luyện mô hình tại chỗ rồi chỉ kết hợp cập nhật.

**뉘앙스와 사용법:** `연합학습`은 원자료를 이동시키지 않는다는 장점이 있지만, 업데이트에서 정보가 새거나 참여 기관의 데이터 편향이 남을 수 있다.

**재사용 가능한 콜로케이션·청크:** `연합학습을 도입하다`, `연합학습 참여 기관`, `모델 업데이트를 집계하다` — triển khai, cơ quan tham gia và tổng hợp cập nhật mô hình.

**자주 쓰는 문형과 성분:** `A가 연합학습으로 B를 학습하다`, `기관들이 업데이트를 공동 집계하다`가 자연스럽다. A에는 병원·스마트폰, B에는 진단 모델·키보드 모델이 온다.

**사회적 관계·주제별 register:** AI 연구·의료 협력·모바일 서비스의 기술어다. 운영 회의에서는 `데이터를 모으지 않고 모델만 함께 훈련하는 방식`이라고 한다.

**예문:** 병원 네 곳은 환자 기록을 외부로 보내지 않기 위해 연합학습으로 희귀 질환 모델을 공동 개발했다.

**Dịch:** Bốn bệnh viện cùng phát triển mô hình bệnh hiếm bằng học liên kết để không gửi hồ sơ bệnh nhân ra ngoài.

**어휘 연결:** `연합학습`은 데이터가 각 기관에 남고 모델 업데이트를 합치며, `동형암호`는 계산 과정에서 원자료를 암호화한다. 함께 사용할 수도 있다.

**영어 참고:** *federated learning* — huấn luyện phân tán, giữ dữ liệu tại nơi phát sinh và chia sẻ cập nhật mô hình.

---

<!-- lexical_basis: advanced_native; register: cryptographic protocol and inter-organizational governance; source_lane: news_formal; context: advanced-privacy-engineering-and-data-governance/news_formal -->
### 안전한 다자간 계산

**품사:** 명사

**핵심 의미:** 서로 신뢰하지 않는 여러 기관이 각자의 비밀 입력을 공개하지 않고 공동 계산의 결과만 얻는 암호 프로토콜이다.

**베트남어 뜻:** tính toán đa bên an toàn, giao thức cùng tính mà không tiết lộ đầu vào riêng.

**뉘앙스와 사용법:** `안전한 다자간 계산`은 기관 간 원자료 공유를 피하면서 교집합·통계·위험 점수를 계산하는 데 쓰인다. 참여자 수, 속도, 악의적 참여자 가정에 따라 설계가 달라진다.

**재사용 가능한 콜로케이션·청크:** `안전한 다자간 계산 프로토콜`, `비밀 입력을 보호하다`, `공동 계산 결과만 공개하다` — giao thức, bảo vệ đầu vào bí mật và chỉ công bố kết quả.

**자주 쓰는 문형과 성분:** `A와 B가 안전한 다자간 계산으로 C를 산출하다`가 자연스럽다. A와 B에는 금융기관·병원이, C에는 중복 고객 수와 위험 통계가 온다.

**사회적 관계·주제별 register:** 암호 연구와 기관 간 데이터 협력의 공식 기술어다. 협약서에서는 `서로의 원자료를 열지 않고 공동 계산하는 방법`이라고 설명한다.

**예문:** 금융기관들은 고객 명단을 넘기지 않고 안전한 다자간 계산으로 공동 사기 패턴을 확인했다.

**Dịch:** Các tổ chức tài chính kiểm tra mẫu gian lận chung bằng tính toán đa bên an toàn mà không trao danh sách khách hàng cho nhau.

**어휘 연결:** `연합학습`은 모델 학습을 분산하고, `안전한 다자간 계산`은 정해진 함수의 입력과 결과를 보호한다. 목적과 프로토콜이 다르다.

**영어 참고:** *secure multi-party computation* — giao thức mật mã cho phép nhiều bên tính toán chung mà không lộ dữ liệu đầu vào riêng.

---

<!-- lexical_basis: advanced_native; register: cryptography and identity assurance; source_lane: news_formal; context: advanced-privacy-engineering-and-data-governance/news_formal -->
### 영지식증명

**품사:** 명사

**핵심 의미:** 어떤 사실이 참이라는 것을 그 사실의 구체적인 비밀 자체를 공개하지 않고 증명하는 암호 기술이다.

**베트남어 뜻:** bằng chứng không tiết lộ, chứng minh đúng mà không lộ bí mật.

**뉘앙스와 사용법:** `영지식증명`은 비밀번호나 전체 신원 문서를 보여 주지 않고도 자격·조건 충족을 증명할 수 있게 한다. 증명할 명제와 검증자의 신뢰 가정을 분명히 해야 한다.

**재사용 가능한 콜로케이션·청크:** `영지식증명을 생성하다`, `영지식증명으로 자격을 입증하다`, `영지식증명 검증` — tạo, chứng minh tư cách và xác minh.

**자주 쓰는 문형과 성분:** `사용자가 A를 공개하지 않고 영지식증명으로 B를 입증하다`가 자연스럽다. A에는 생년월일·잔액, B에는 성인 여부·최소 잔액이 온다.

**사회적 관계·주제별 register:** 디지털 신원·블록체인·전자증명 분야의 고급어다. 이용자 안내에서는 `비밀은 숨긴 채 조건을 만족한다는 사실만 증명하는 기술`로 풀어 말한다.

**예문:** 전자 신원 지갑은 생년월일 전체를 공개하지 않고 성인이라는 사실을 영지식증명으로 보여 줄 수 있다.

**Dịch:** Ví định danh điện tử có thể chứng minh người dùng là người trưởng thành bằng bằng chứng không tiết lộ mà không công khai toàn bộ ngày sinh.

**어휘 연결:** `영지식증명`은 특정 명제의 참을 입증하고, `가명정보`는 식별자를 바꾼 데이터를 뜻하므로 서로 대체할 수 없다.

**영어 참고:** *zero-knowledge proof* — bằng chứng mật mã cho phép xác minh một mệnh đề mà không tiết lộ bí mật làm mệnh đề đúng.

---

<!-- lexical_basis: advanced_native; register: cloud security and confidential computing; source_lane: news_formal; context: advanced-privacy-engineering-and-data-governance/news_formal -->
### 신뢰실행환경

**품사:** 명사

**핵심 의미:** 프로세서가 코드와 데이터를 일반 운영체제나 관리자에게서 격리해 실행하도록 제공하는 하드웨어 기반 보호 영역이다.

**베트남어 뜻:** môi trường thực thi tin cậy, vùng phần cứng cô lập mã và dữ liệu.

**뉘앙스와 사용법:** `신뢰실행환경`은 클라우드 운영자도 실행 중인 데이터를 쉽게 읽지 못하게 하는 장치지만, 초기 부팅·키 관리·측정값 검증을 함께 신뢰해야 한다.

**재사용 가능한 콜로케이션·청크:** `신뢰실행환경에서 실행하다`, `실행환경의 무결성을 검증하다`, `신뢰실행환경 기반 격리` — chạy, xác minh toàn vẹn và cô lập dựa trên môi trường tin cậy.

**자주 쓰는 문형과 성분:** `서비스가 A를 신뢰실행환경에서 처리하다`, `검증기가 B를 확인하다`가 자연스럽다. A에는 민감한 모델·키, B에는 부팅 측정값과 코드 무결성이 온다.

**사회적 관계·주제별 register:** 클라우드 보안과 하드웨어 보안 설계의 전문어다. 계약 검토에서는 `서버 관리자에게서도 실행 중인 자료를 격리하는 영역`이라고 설명한다.

**예문:** 의료기관은 클라우드 사업자의 신뢰실행환경에서 암호 키와 진료 모델을 분리해 처리했다.

**Dịch:** Cơ sở y tế xử lý khóa mã hóa và mô hình khám chữa tách biệt trong môi trường thực thi tin cậy của nhà cung cấp đám mây.

**어휘 연결:** `신뢰실행환경`은 격리된 실행 영역이고 `기밀 컴퓨팅`은 이런 하드웨어·소프트웨어 기술을 이용해 사용 중 데이터까지 보호하는 더 넓은 개념이다.

**영어 참고:** *trusted execution environment (TEE)* — vùng thực thi được phần cứng cô lập để bảo vệ mã và dữ liệu đang sử dụng.

---

<!-- lexical_basis: contemporary_native_hot; register: cloud security and enterprise architecture; source_lane: native_spoken; context: advanced-privacy-engineering-and-data-governance/native_spoken -->
### 기밀 컴퓨팅

**품사:** 명사

**핵심 의미:** 저장·전송뿐 아니라 사용 중인 데이터도 보호된 실행 환경에서 처리해 클라우드 운영자나 다른 테넌트의 접근을 줄이는 보안 방식이다.

**베트남어 뜻:** điện toán bảo mật, bảo vệ dữ liệu ngay khi đang được xử lý.

**뉘앙스와 사용법:** `기밀 컴퓨팅`은 제품 하나의 이름이 아니라 하드웨어 격리, 원격 검증, 키 관리 등을 묶어 설명하는 시장·설계 용어다. 데이터가 보호된다고 해서 애플리케이션 권한 설계가 자동으로 안전해지는 것은 아니다.

**재사용 가능한 콜로케이션·청크:** `기밀 컴퓨팅을 도입하다`, `사용 중 데이터 보호`, `기밀 컴퓨팅 기반 분석` — triển khai, bảo vệ dữ liệu đang dùng và phân tích dựa trên điện toán bảo mật.

**자주 쓰는 문형과 성분:** `팀이 A를 기밀 컴퓨팅으로 보호하다`, `기밀 컴퓨팅이 B의 노출면을 줄이다`가 자연스럽다. A에는 공동 분석, B에는 클라우드 관리자 접근이 온다.

**사회적 관계·주제별 register:** 클라우드 영업·보안 아키텍처 회의에서 현재 많이 쓰는 기술어다. 비개발자에게는 `계산하는 동안에도 자료를 격리하는 클라우드 보안 방식`이라고 한다.

**예문:** 두 회사는 서로의 원자료를 맡기기 불안해 기밀 컴퓨팅 기반 분석 환경을 공동으로 검토했다.

**Dịch:** Hai công ty lo ngại khi giao dữ liệu gốc cho nhau nên cùng xem xét môi trường phân tích dựa trên điện toán bảo mật.

**어휘 연결:** `기밀 컴퓨팅`은 실행 중 데이터의 보호라는 넓은 전략이고 `동형암호`는 암호화된 상태에서 계산하는 특정 암호 기술이다.

**영어 참고:** *confidential computing* — chiến lược bảo vệ dữ liệu khi đang được xử lý bằng vùng thực thi và cơ chế xác minh.

---

<!-- lexical_basis: contemporary_native_hot; register: advertising measurement and data collaboration; source_lane: native_spoken; context: advanced-privacy-engineering-and-data-governance/native_spoken -->
### 데이터 클린룸

**품사:** 명사

**핵심 의미:** 서로 다른 조직이 원자료를 직접 주고받지 않고 제한된 규칙과 분석 결과만 공유하도록 만든 통제형 데이터 협업 환경이다.

**베트남어 뜻:** phòng sạch dữ liệu, môi trường hợp tác dữ liệu bị giới hạn và kiểm soát.

**뉘앙스와 사용법:** `데이터 클린룸`은 광고 측정에서 많이 들리지만, 이름만으로 개인정보 위험이 사라지는 것은 아니다. 어떤 질의를 허용하고 재식별 결과를 막는지 운영 규칙이 핵심이다.

**재사용 가능한 콜로케이션·청크:** `데이터 클린룸을 구축하다`, `클린룸에서 매칭하다`, `원자료 반출을 제한하다` — xây dựng, đối sánh và hạn chế đưa dữ liệu gốc ra ngoài.

**자주 쓰는 문형과 성분:** `A와 B가 데이터 클린룸에서 C를 분석하다`가 자연스럽다. A와 B에는 광고주·매체사가, C에는 도달률과 중복 이용자 수가 온다.

**사회적 관계·주제별 register:** 광고·유통·의료 연구의 실무 신조어에 가깝다. 회의에서는 `원자료를 서로 보지 않고 정해진 분석만 하는 방`이라고 풀어 쓴다.

**예문:** 광고주는 데이터 클린룸에서 캠페인 도달률을 확인했지만 개별 고객 목록은 내려받을 수 없었다.

**Dịch:** Nhà quảng cáo kiểm tra tỷ lệ tiếp cận chiến dịch trong phòng sạch dữ liệu nhưng không thể tải danh sách khách hàng riêng lẻ.

**어휘 연결:** `데이터 클린룸`은 협업 환경이고 `동형암호`나 `안전한 다자간 계산`은 그 안에서 사용할 수 있는 보호 기술이다.

**영어 참고:** *data clean room* — môi trường hợp tác nơi các bên chỉ được chạy phân tích được phép mà không lấy dữ liệu gốc.

---

<!-- lexical_basis: advanced_native; register: data engineering and governance; source_lane: news_formal; context: advanced-privacy-engineering-and-data-governance/news_formal -->
### 데이터 계약

**품사:** 명사

**핵심 의미:** 데이터를 제공하고 사용하는 팀 사이에서 스키마, 품질, 갱신 주기와 변경 책임을 기계적으로 합의한 약속이다.

**베트남어 뜻:** hợp đồng dữ liệu, thỏa thuận máy đọc được về cấu trúc, chất lượng và trách nhiệm dữ liệu.

**뉘앙스와 사용법:** `데이터 계약`은 법률 계약서만 뜻하지 않는다. 생산자와 소비자가 기대하는 필드·형식·결측 허용치가 깨졌을 때 파이프라인이 조기에 알리도록 만드는 운영 규칙이다.

**재사용 가능한 콜로케이션·청크:** `데이터 계약을 정의하다`, `계약 위반을 탐지하다`, `스키마 변경을 계약에 반영하다` — định nghĩa, phát hiện vi phạm và phản ánh thay đổi lược đồ.

**자주 쓰는 문형과 성분:** `생산자와 소비자가 A에 대한 데이터 계약을 맺다`, `계약이 깨지다`가 자연스럽다. A에는 이벤트 필드, 품질 기준과 보존 조건이 온다.

**사회적 관계·주제별 register:** 데이터 플랫폼·분석 조직의 실무 전문어다. 비개발자에게는 `데이터를 넘길 때 지켜야 할 형식과 책임을 미리 정한 약속`이라고 설명한다.

**예문:** 결제팀은 고객 행동 로그를 분석팀에 넘기기 전에 데이터 계약으로 필드 정의와 보존 기간을 확정했다.

**Dịch:** Trước khi chuyển nhật ký hành vi khách hàng cho nhóm phân tích, nhóm thanh toán chốt định nghĩa trường và thời hạn lưu giữ bằng hợp đồng dữ liệu.

**어휘 연결:** `데이터 계약`은 데이터 생산·소비 사이의 실행 약속이고 `정책 코드화`는 그 약속과 규칙을 시스템이 자동 집행하게 만드는 방식이다.

**영어 참고:** *data contract* — thỏa thuận rõ ràng, có thể kiểm tra tự động, giữa bên tạo và bên dùng dữ liệu.

---

<!-- lexical_basis: contemporary_native_hot; register: data product and analytics organization; source_lane: native_spoken; context: advanced-privacy-engineering-and-data-governance/native_spoken -->
### 데이터 제품

**품사:** 명사

**핵심 의미:** 일회성 추출 파일이 아니라 특정 이용자에게 지속적으로 품질·문서·접근 정책을 제공하도록 운영하는 데이터 자산이다.

**베트남어 뜻:** sản phẩm dữ liệu, tài sản dữ liệu được vận hành lâu dài cho người dùng cụ thể.

**뉘앙스와 사용법:** `데이터 제품`은 대시보드만 뜻하지 않는다. 담당 팀, 품질 지표, 발견 가능성, 권한, 갱신과 폐기까지 포함해 누군가가 믿고 재사용할 수 있어야 한다.

**재사용 가능한 콜로케이션·청크:** `데이터 제품을 운영하다`, `데이터 제품 소유자`, `제품의 품질 지표` — vận hành, chủ sở hữu và chỉ số chất lượng.

**자주 쓰는 문형과 성분:** `팀이 A를 데이터 제품으로 제공하다`, `데이터 제품에 B를 붙이다`가 자연스럽다. A에는 공급망 지표, B에는 문서·접근권한·품질 경보가 온다.

**사회적 관계·주제별 register:** 데이터 메시·분석 조직에서 쓰는 현재적 경영·기술어다. 경영진에게는 `반복 사용을 전제로 책임지고 관리하는 데이터 서비스`라고 한다.

**예문:** 데이터 제품 담당자는 지표를 공개하는 것뿐 아니라 누가 어떤 목적으로 접근했는지도 정기적으로 검토했다.

**Dịch:** Người phụ trách sản phẩm dữ liệu không chỉ công khai chỉ số mà còn định kỳ xem xét ai đã truy cập vì mục đích gì.

**어휘 연결:** `데이터 제품`은 이용자와 운영 책임을 포함한 자산이고 `데이터 클린룸`은 제한된 협업 환경이다. 제품이 클린룸 안에서 제공될 수도 있다.

**영어 참고:** *data product* — tài sản hoặc dịch vụ dữ liệu được quản lý liên tục với người dùng, chất lượng và quyền truy cập rõ ràng.

---

<!-- lexical_basis: advanced_native; register: compliance automation and data governance; source_lane: news_formal; context: advanced-privacy-engineering-and-data-governance/news_formal -->
### 정책 코드화

**품사:** 명사

**핵심 의미:** 접근·보존·공유 같은 조직의 정책을 사람이 읽는 문서에만 두지 않고 시스템이 검사하고 집행할 수 있는 규칙으로 바꾸는 일이다.

**베트남어 뜻:** mã hóa chính sách, chuyển quy tắc quản trị thành luật máy có thể kiểm tra và thực thi.

**뉘앙스와 사용법:** `정책 코드화`는 문서를 없애는 것이 아니라 문서의 의도를 조건·허용 목록·차단 규칙으로 구체화하는 작업이다. 예외 승인과 변경 이력도 함께 관리해야 한다.

**재사용 가능한 콜로케이션·청크:** `정책을 코드화하다`, `정책 코드화로 자동 차단하다`, `정책 변경을 배포하다` — mã hóa, tự động chặn và triển khai thay đổi.

**자주 쓰는 문형과 성분:** `보안팀이 A 정책을 코드화하다`, `시스템이 B를 자동 집행하다`가 자연스럽다. A에는 보존·접근·국외 이전 정책, B에는 권한 회수와 삭제가 온다.

**사회적 관계·주제별 register:** 컴플라이언스·클라우드 플랫폼·데이터 거버넌스의 전문어다. 조직 회의에서는 `규정을 시스템이 자동으로 확인하게 만드는 것`이라고 풀어 말한다.

**예문:** 회사는 퇴사자의 접근권한을 회수하라는 정책 코드화를 적용해 계정 삭제 누락을 줄였다.

**Dịch:** Công ty áp dụng mã hóa chính sách thu hồi quyền truy cập của người nghỉ việc để giảm bỏ sót khi xóa tài khoản.

**어휘 연결:** `정책 코드화`는 규칙의 자동 집행이고 `데이터 계약`은 생산자와 소비자가 지켜야 할 데이터 조건의 약속이다. 계약을 코드화할 수도 있다.

**영어 참고:** *policy as code* — biểu diễn chính sách dưới dạng luật máy có thể kiểm thử, giám sát và tự động thực thi.

---

<!-- lexical_basis: advanced_native; register: privacy risk assessment and adversarial security; source_lane: news_formal; context: advanced-privacy-engineering-and-data-governance/news_formal -->
### 재식별 공격

**품사:** 명사

**핵심 의미:** 가명·익명 처리된 자료를 다른 데이터와 결합하거나 패턴을 분석해 특정 개인을 다시 알아내려는 공격이다.

**베트남어 뜻:** tấn công tái nhận dạng, suy ra lại danh tính từ dữ liệu đã che giấu.

**뉘앙스와 사용법:** `재식별 공격`은 암호를 깨는 경우만이 아니라 희소한 위치·시간·행동 조합을 이용하는 추론도 포함한다. 공개 전에는 공격자 지식과 결합 가능한 외부 자료를 가정해야 한다.

**재사용 가능한 콜로케이션·청크:** `재식별 공격을 시뮬레이션하다`, `재식별 가능성을 낮추다`, `재식별 공격에 대응하다` — mô phỏng, giảm khả năng và ứng phó.

**자주 쓰는 문형과 성분:** `공격자가 A를 결합해 B를 재식별하다`가 자연스럽다. A에는 이동·구매·공개 통계, B에는 개인의 신원이 온다.

**사회적 관계·주제별 register:** 개인정보 보호 감사와 학술·정책 보고서의 강한 보안어다. 대중에게는 `가려진 이름을 다른 단서로 다시 맞히는 공격`이라고 설명한다.

**예문:** 연구팀은 공개된 이동 통계와 소셜미디어 게시 시간을 결합한 재식별 공격을 가정해 공개 수준을 낮췄다.

**Dịch:** Nhóm nghiên cứu giả định một cuộc tấn công tái nhận dạng kết hợp thống kê di chuyển công khai với thời điểm đăng mạng xã hội nên đã hạ mức công bố.

**어휘 연결:** `재식별 위험`은 가능성이나 노출 상태를 말하고, `재식별 공격`은 그 가능성을 실제로 이용하려는 행위에 초점을 둔다.

**영어 참고:** *re-identification attack* — tấn công kết hợp các nguồn dữ liệu để khôi phục danh tính từ dữ liệu đã khử nhận dạng.

---

<!-- lexical_basis: advanced_native; register: privacy accounting and statistical disclosure control; source_lane: news_formal; context: advanced-privacy-engineering-and-data-governance/news_formal -->
### 프라이버시 손실

**품사:** 명사

**핵심 의미:** 데이터 처리나 공개 때문에 개인의 정보가 추론될 가능성이 이전보다 얼마나 커졌는지를 나타내는 위험의 양이다.

**베트남어 뜻:** tổn thất quyền riêng tư, mức tăng rủi ro suy đoán thông tin cá nhân.

**뉘앙스와 사용법:** `프라이버시 손실`은 피해가 이미 발생했다는 뜻만이 아니라, 어떤 메커니즘이 허용하는 최악의 정보 노출을 계산하는 기술적 지표이기도 하다.

**재사용 가능한 콜로케이션·청크:** `프라이버시 손실을 측정하다`, `손실을 제한하다`, `누적 프라이버시 손실` — đo, giới hạn và tổn thất tích lũy.

**자주 쓰는 문형과 성분:** `A가 프라이버시 손실을 키우다`, `B를 통해 손실을 제한하다`가 자연스럽다. A에는 반복 질의와 세밀한 공개가, B에는 노이즈·접근 제한이 온다.

**사회적 관계·주제별 register:** 차등프라이버시·통계 공개·모델 감사의 전문어다. 비전문가에게는 `데이터를 내놓으면서 개인을 추측하기 쉬워지는 정도`라고 풀어 말한다.

**예문:** 같은 이용자에 대한 세부 통계를 여러 번 공개하면 각각의 결과가 작아 보여도 누적 프라이버시 손실은 커질 수 있다.

**Dịch:** Nếu công bố thống kê chi tiết về cùng người dùng nhiều lần, tổn thất riêng tư tích lũy có thể tăng dù từng kết quả có vẻ nhỏ.

**어휘 연결:** `프라이버시 손실`은 처리로 생기는 노출량이고 `프라이버시 예산`은 그 손실을 누적해 관리하는 허용 한도다.

**영어 참고:** *privacy loss* — lượng thông tin riêng tư bị phơi lộ hoặc mức tăng khả năng suy đoán do một phép xử lý.

## 읽기: 보호 기술과 운영 규칙을 함께 설계하기

<!-- passage_word_count: 105 Korean eojeol; target_set: 프라이버시 위협 모델링, 차등프라이버시, 프라이버시 예산, 동형암호, 연합학습, 안전한 다자간 계산, 영지식증명, 신뢰실행환경, 기밀 컴퓨팅, 데이터 클린룸, 데이터 계약, 데이터 제품, 정책 코드화, 재식별 공격, 프라이버시 손실 -->

새로운 의료 데이터 서비스를 준비한 팀은 먼저 프라이버시 위협 모델링으로 환자 기록이 어디에서 결합되고 누가 접근할 수 있는지 그렸다. 병원마다 자료를 모으지 않기 위해 연합학습을 시험하고, 공동 통계를 계산할 때는 안전한 다자간 계산과 동형암호를 비교했다. 외부 서버에서 모델을 돌릴 경우에는 신뢰실행환경과 기밀 컴퓨팅이 실제로 어떤 관리자 접근을 막는지 검증했다. 공개 통계에는 차등프라이버시를 적용하고, 반복 질의가 프라이버시 예산을 넘지 않도록 프라이버시 손실을 누적해 기록했다. 광고 분석팀과 협력할 때는 데이터 클린룸에서 허용된 결과만 내보내고, 데이터 계약에 필드·보존 기간·책임자를 적었다. 그 자료를 데이터 제품으로 운영하면서 접근·삭제 정책 코드화를 적용했고, 전자 동의는 영지식증명으로 필요한 조건만 확인하게 했다. 마지막으로 외부 자료와의 결합을 가정한 재식별 공격을 실시해 보호 장치를 다시 조정했다.

**Dịch:** Khi chuẩn bị dịch vụ dữ liệu y tế mới, nhóm trước hết lập mô hình mối đe dọa riêng tư để vẽ nơi hồ sơ bệnh nhân được kết hợp và ai có thể truy cập. Để không tập trung dữ liệu từ từng bệnh viện, họ thử học liên kết và so sánh tính toán đa bên an toàn với mã hóa đồng cấu khi tính thống kê chung. Khi chạy mô hình trên máy chủ bên ngoài, họ xác minh môi trường thực thi tin cậy và điện toán bảo mật thực sự ngăn được quyền truy cập nào của quản trị viên. Họ áp dụng quyền riêng tư vi sai cho thống kê công khai, đồng thời ghi nhận tổn thất riêng tư tích lũy để các truy vấn lặp lại không vượt ngân sách riêng tư. Khi hợp tác với nhóm phân tích quảng cáo, họ chỉ xuất kết quả được phép từ phòng sạch dữ liệu và ghi trường dữ liệu, thời hạn lưu giữ cùng người chịu trách nhiệm vào hợp đồng dữ liệu. Trong quá trình vận hành dữ liệu đó như một sản phẩm dữ liệu, họ mã hóa chính sách truy cập và xóa, còn sự đồng ý điện tử chỉ xác minh điều kiện cần thiết bằng bằng chứng không tiết lộ. Cuối cùng, họ giả lập tấn công tái nhận dạng bằng cách kết hợp nguồn bên ngoài rồi điều chỉnh lại biện pháp bảo vệ.
