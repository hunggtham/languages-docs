# 구조생물정보학 및 단백질 3차원 구조 예측과 딥러닝 모델의 언어

구조생물정보학, 알파폴드(AlphaFold) 단백질 3차원 접힘 예측, 잔기 간 접촉 맵, 다중 서열 정렬(MSA), 단백질 동역학 시뮬레이션 및 신약 후보물질 결합 부위 분석을 다루는 핵심 어휘

## 학습 안내
- 각 표제어는 B2~C2 수준의 학술적·전문적 맥락에서 사용되는 고급 어휘입니다.
- 예문과 함께 연어, 문형, register 정보를 확인하며 심층적으로 학습하세요.

## 어휘 목록

### 단백질삼차원구조예측딥러닝
- **발음:** [단백찔삼차원구조예측딥러닝]
- **품사:** 명사
- **핵심 의미:** 아미노산 1차 선형 서열 정보만을 입력받아 트랜스포머 기반 신경망을 통해 원자 수준의 정확도를 지닌 단백질의 3차원 입체 구조를 컴퓨터로 예측해내는 인공지능 기술
- **베트남어 뜻:** học sâu dự đoán cấu trúc không gian 3 chiều protein (công nghệ trí tuệ nhân tạo chỉ tiếp nhận thông tin chuỗi tuyến tính bậc một của axit amin rồi dự đoán cấu trúc lập thể 3D cấp độ nguyên tử của protein trên máy tính thông qua mạng nơ-ron Transformer)
- **뉘앙스와 사용법:** 50년간 생물학의 최대 난제였던 '단백질 접힘 문제(Protein Folding Problem)'를 딥러닝과 진화 정보의 결합으로 해결하여 구조생물학 연구의 패러다임을 근본적으로 뒤바꾼 핵심 혁신 기술이다.
- **재사용 가능한 콜로케이션·청크:**
  - 단백질삼차원구조예측딥러닝 기술 (công nghệ học sâu dự đoán cấu trúc không gian 3 chiều protein)
  - 단백질삼차원구조예측딥러닝의 정확도 (độ chính xác của học sâu dự đoán cấu trúc không gian 3 chiều protein)
  - 단백질삼차원구조예측딥러닝을 적용하다 (áp dụng học sâu dự đoán cấu trúc không gian 3 chiều protein)
- **자주 쓰는 문형과 성분:**
  - 단백질삼차원구조예측딥러닝을 활용하여 신약 후보물질의 표적 결합 부위를 즉각 식별하다 (nhận diện tức thì vị trí gắn kết đích của ứng viên thuốc mới nhờ học sâu dự đoán cấu trúc 3 chiều protein)
  - 기존 X선 결정학의 한계를 단백질삼차원구조예측딥러닝으로 보완하다 (bổ khuyết giới hạn của tinh thể học tia X truyền thống bằng học sâu dự đoán cấu trúc protein 3D)
- **사회적 관계·주제별 register:** 구조생물정보학, 전산생물학, 분자약리학 최고 권위 학술지(Nature, Science).
- **예문:** 알파폴드의 등장은 단백질삼차원구조예측딥러닝이 실험적으로 규명되지 않은 수억 개의 미지의 단백질 구조를 수 분 만에 규명할 수 있음을 증명했다.
- **Dịch:** Sự xuất hiện của AlphaFold đã chứng minh rằng công nghệ học sâu dự đoán cấu trúc không gian 3 chiều protein có thể làm sáng tỏ cấu trúc của hàng trăm triệu protein bí ẩn chưa từng được thí nghiệm thực chứng chỉ trong vòng vài phút.
- **어휘 연결:**
  - 알파폴드잔기간거리접촉지도 (bản đồ tiếp xúc khoảng cách giữa các phần dư AlphaFold - dữ liệu đầu ra trung gian cốt lõi)
  - 다중서열정렬공진화정보추출 (trích xuất thông tin đồng tiến hóa từ căn chỉnh đa chuỗi - dữ liệu đầu vào cốt lõi)
- **영어 참고:** protein 3D structure prediction deep learning — công nghệ học sâu dự đoán cấu trúc không gian 3 chiều của protein từ chuỗi axit amin

---

### 알파폴드잔기간거리접촉지도
- **발음:** [알파폴드잔기간거리접촉지도]
- **품사:** 명사
- **핵심 의미:** 단백질 내 모든 아미노산 잔기 쌍 사이의 유클리드 공간 거리 확률 분포와 접촉 가능성을 2차원 행렬(Distogram) 형태로 시각화하고 예측한 구조 정보 지도
- **베트남어 뜻:** bản đồ tiếp xúc khoảng cách giữa các phần dư của AlphaFold (bản đồ thông tin cấu trúc trực quan hóa và dự đoán phân bố xác suất khoảng cách không gian Euclid và khả năng tiếp xúc giữa mọi cặp phần dư axit amin trong protein dưới dạng ma trận 2 chiều distogram)
- **뉘앙스와 사용법:** 단백질의 1차 서열상 멀리 떨어져 있는 잔기들이 접힘(Folding)을 통해 3차원 공간에서 얼마나 가까이 맞닿는지를 확률적으로 추론하여 입체 구조를 조립해내는 핵심 추론 단계이다.
- **재사용 가능한 콜로케이션·청크:**
  - 알파폴드잔기간거리접촉지도를 생성하다 (tạo bản đồ tiếp xúc khoảng cách giữa các phần dư của AlphaFold)
  - 정밀한 알파폴드잔기간거리접촉지도 (bản đồ tiếp xúc khoảng cách phần dư AlphaFold chuẩn xác)
  - 알파폴드잔기간거리접촉지도의 해상도 (độ phân giải của bản đồ tiếp xúc khoảng cách phần dư AlphaFold)
- **자주 쓰는 문형과 성분:**
  - 신경망이 예측한 알파폴드잔기간거리접촉지도를 바탕으로 3차원 원자 좌표를 역산하다 (nghịch đảo tọa độ nguyên tử 3 chiều dựa trên bản đồ tiếp xúc khoảng cách phần dư do mạng nơ-ron dự đoán)
  - 알파폴드잔기간거리접촉지도에서 소수성 코어의 강한 상호작용 클러스터가 확인되다 (cụm tương tác mạnh của lõi kỵ nước được xác nhận trên bản đồ tiếp xúc khoảng cách phần dư AlphaFold)
- **사회적 관계·주제별 register:** 구조생물학, 단백질 공학, 전산 생체분자 모델링 논문.
- **예문:** 연구팀은 알파폴드잔기간거리접촉지도를 분석하여 바이러스 외피 단백질의 특정 루프 구간이宿주 세포 수용체와 밀접하게 접촉함을 사전 확인하였다.
- **Dịch:** Nhóm nghiên cứu đã phân tích bản đồ tiếp xúc khoảng cách giữa các phần dư của AlphaFold để xác nhận trước rằng đoạn thắt vòng cụ thể của protein vỏ virus tiếp xúc rất chặt chẽ với thụ thể tế bào vật chủ.
- **어휘 연결:**
  - 단백질삼차원구조예측딥러닝 (học sâu dự đoán cấu trúc 3D protein - mô hình mẹ sinh ra bản đồ này)
  - 단백질접힘열역학적안정성 (tính ổn định nhiệt động lực học gập cuộn protein - tiêu chí đánh giá hình thái tiếp xúc)
- **영어 참고:** AlphaFold residue-residue distance contact map — ma trận khoảng cách xác suất tiếp xúc giữa các axit amin trong mô hình AlphaFold

---

### 다중서열정렬공진화정보추출
- **발음:** [다중서열정렬공진화정보추출]
- **품사:** 명사
- **핵심 의미:** 서로 다른 종에서 발견된 상동 단백질 서열들을 나란히 정렬(MSA)하여 아미노산 변이의 동시 발생 패턴을 분석함으로써 잔기 간의 물리적 접촉 관계를 역추적하는 기법
- **베트남어 뜻:** trích xuất thông tin đồng tiến hóa từ căn chỉnh đa chuỗi (kỹ thuật xếp gióng thẳng hàng các chuỗi protein tương đồng tìm thấy ở nhiều loài khác nhau MSA để phân tích quy luật biến dị đồng thời của các axit amin, qua đó truy ngược mối quan hệ tiếp xúc vật lý giữa các phần dư)
- **뉘앙스와 사용법:** 생물학적 진화 과정에서 한 아미노산에 돌연변이가 생겼을 때 결합 파트너 아미노산도 구조 유지를 위해 상보적으로 함께 변이(Co-evolution)한다는 원리를 딥러닝 피처로 활용하는 기술이다.
- **재사용 가능한 콜로케이션·청크:**
  - 다중서열정렬공진화정보추출을 수행하다 (thực hiện trích xuất thông tin đồng tiến hóa từ căn chỉnh đa chuỗi)
  - 고품질 다중서열정렬공진화정보추출 (trích xuất thông tin đồng tiến hóa từ căn chỉnh đa chuỗi chất lượng cao)
  - 다중서열정렬공진화정보추출 알고리즘 (thuật toán trích xuất thông tin đồng tiến hóa từ căn chỉnh đa chuỗi)
- **자주 쓰는 문형과 성분:**
  - 다중서열정렬공진화정보추출 파이프라인을 거쳐 단백질 접힘 구조의 숨은 제약 조건을 찾아내다 (tìm ra các điều kiện ràng buộc ẩn của cấu trúc gập cuộn protein qua quy trình trích xuất thông tin đồng tiến hóa MSA)
  - 진화적 보존성과 상관 변이를 다중서열정렬공진화정보추출 기법으로 통합 정량화하다 (định lượng tích hợp tính bảo tồn tiến hóa và biến dị tương quan bằng kỹ thuật trích xuất thông tin đồng tiến hóa MSA)
- **사회적 관계·주제별 register:** 생물정보학, 진화유전체학, 알파폴드 알고리즘 파이프라인 명세서.
- **예문:** 희귀 유전자군에 대해 수만 종의 미생물 유전체를 탐색하여 다중서열정렬공진화정보추출을 마침으로써 단백질 구조 예측의 정확도를 획기적으로 끌어올렸다.
- **Dịch:** Bằng cách tìm kiếm bộ gen của hàng vạn loài vi sinh vật cho nhóm gen hiếm và hoàn tất việc trích xuất thông tin đồng tiến hóa từ căn chỉnh đa chuỗi, nhóm đã nâng cao vượt bậc độ chuẩn xác của dự đoán cấu trúc protein.
- **어휘 연결:**
  - 단백질삼차원구조예측딥러닝 (học sâu dự đoán cấu trúc 3 chiều protein - sử dụng dữ liệu MSA làm đầu vào)
  - 상동성모델링단백질주형구조 (cấu trúc khuôn protein mô hình hóa tương đồng - phương pháp cổ điển so sánh chuỗi)
- **영어 참고:** multiple sequence alignment co-evolution information extraction — trích xuất thông tin tương quan đồng biến dị tiến hóa từ căn chỉnh đa chuỗi sinh học

---

### 단백질접힘열역학적안정성
- **발음:** [단백찔접힘열역학쩍안정성]
- **품사:** 명사
- **핵심 의미:** 단백질이 펼쳐진 변성 상태(Unfolded)와 고유한 3차원 입체 구조(Native state) 사이에서 나타내는 깁스 자유에너지 차이(ΔG)로 표현되는 물리화학적 구조 유지 능력
- **베트남어 뜻:** tính ổn định nhiệt động lực học gập cuộn protein (năng lực duy trì cấu trúc vật lý hóa học của protein được biểu thị bằng độ chênh lệch năng lượng tự do Gibbs ΔG giữa trạng thái duỗi biến tính và trạng thái không gian 3 chiều bản địa tự nhiên)
- **뉘앙스와 사용법:** 열, pH 변화, 화학적 변성제에 대항하여 단백질이 올바른 3차원 활성 구조를 유지할 수 있는 내구성을 뜻하며, 바이오의약품의 장기 보관 안정성과 효능 발현에 직결된다.
- **재사용 가능한 콜로케이션·청크:**
  - 단백질접힘열역학적안정성을 측정하다 (đo lường tính ổn định nhiệt động lực học gập cuộn protein)
  - 높은 단백질접힘열역학적안정성 (tính ổn định nhiệt động lực học gập cuộn protein cao)
  - 단백질접힘열역학적안정성의 저하 (sự suy giảm tính ổn định nhiệt động lực học gập cuộn protein)
- **자주 쓰는 문형과 성분:**
  - 점돌연변이가 단백질접힘열역학적안정성에 미치는 영향을 자유에너지 변화량으로 계산하다 (tính toán ảnh hưởng của đột biến điểm lên tính ổn định nhiệt động gập cuộn protein bằng biến thiên năng lượng tự do)
  - 단백질접힘열역학적안정성을 인위적으로 증대시켜 산업용 내열 효소를 설계하다 (tăng cường nhân tạo tính ổn định nhiệt động gập cuộn protein để thiết kế enzyme chịu nhiệt công nghiệp)
- **사회적 관계·주제별 register:** 생물물리학, 생화학, 단백질 신약 제형학(Biopharmaceutical Formulation) 논문.
- **예문:** 이황화 결합을 추가 도입한 유전자 재조합 항체는 융해 온도(Tm)가 8도 상승하여 뛰어난 단백질접힘열역학적안정성을 나타냈다.
- **Dịch:** Kháng thể tái tổ hợp gen được bổ sung thêm liên kết disulfide có nhiệt độ nóng chảy Tm tăng thêm 8 độ C, thể hiện tính ổn định nhiệt động lực học gập cuộn protein vượt trội.
- **어휘 연결:**
  - 돌연변이구조안정성변화예측 (dự đoán biến đổi tính ổn định cấu trúc đột biến - tính toán biến thiên ΔΔG)
  - 결합친화도자유에너지섭동계산 (tính toán nhiễu loạn năng lượng tự do ái lực liên kết - phương pháp tính nhiệt động học)
- **영어 참고:** protein folding thermodynamic stability — độ bền cấu trúc bậc ba của protein dựa trên mức chênh lệch năng lượng tự do Gibbs

---

### 수용체리간드분자도킹시뮬레이션
- **발음:** [수용체리간드분자도킹시뮬레이션]
- **품사:** 명사
- **핵심 의미:** 표적 질환 단백질 수용체의 활성 부위에 저분자 화합물(리간드)이 결합하는 최적의 3차원 입체 배좌와 결합 에너지 친화도를 컴퓨터 알고리즘으로 탐색하는 모의실험
- **베트남어 뜻:** mô phỏng gắn kết phân tử thụ thể - phối tử (phép mô phỏng thuật toán máy tính nhằm tìm kiếm tư thế lập thể 3D tối ưu và ái lực năng lượng liên kết khi phân tử nhỏ phối tử gắn vào vị trí hoạt động của thụ thể protein mục tiêu gây bệnh)
- **뉘앙스와 사용법:** 가상 스크리닝(Virtual Screening)을 통해 수백만 개의 신약 후보 물질 중 표적 단백질에 강력하고 특이적으로 결합할 수 있는 화합물을 고속으로 선별해내는 컴퓨터 기반 신약 발굴(CADD)의 핵심 기법이다.
- **재사용 가능한 콜로케이션·청크:**
  - 수용체리간드분자도킹시뮬레이션을 수행하다 (tiến hành mô phỏng gắn kết phân tử thụ thể - phối tử)
  - 대규모 수용체리간드분자도킹시뮬레이션 (mô phỏng gắn kết phân tử thụ thể - phối tử quy mô lớn)
  - 수용체리간드분자도킹시뮬레이션 결과 (kết quả mô phỏng gắn kết phân tử thụ thể - phối tử)
- **자주 쓰는 문형과 성분:**
  - 수용체리간드분자도킹시뮬레이션을 통해 결합 포켓 내 수소결합 네트워크를 정밀 규명하다 (làm sáng tỏ chính xác mạng lưới liên kết hydro trong túi gắn kết qua mô phỏng docking thụ thể - ligand)
  - 수십만 종의 화합물 라이브러리에 대해 수용체리간드분자도킹시뮬레이션을 신속히 스크리닝하다 (sàng lọc nhanh chóng mô phỏng docking thụ thể - ligand cho thư viện hàng trăm nghìn hợp chất)
- **사회적 관계·주제별 register:** 의약화학(Medicinal Chemistry), 구조기반 약물설계, 계산독성학 전문 학술지.
- **예문:** 암 유발 키나아제의 ATP 결합 부위를 겨냥한 수용체리간드분자도킹시뮬레이션을 거쳐 나노몰 수준의 강력한 저해 효능을 가진 선도물질을 도출했다.
- **Dịch:** Thông qua mô phỏng gắn kết phân tử thụ thể - phối tử nhắm vào vị trí gắn kết ATP của kinase gây ung thư, nhóm đã rút ra được chất dẫn đường có hoạt tính ức chế mạnh mẽ ở cấp độ nanomol.
- **어휘 연결:**
  - 컴퓨터기반표적신약후보설계 (thiết kế ứng viên thuốc nhắm đích trên máy tính - mục đích ứng dụng trực tiếp)
  - 결합친화도자유에너지섭동계산 (tính toán nhiễu loạn năng lượng tự do ái lực - bước tinh chỉnh định lượng sau docking)
- **영어 참고:** receptor-ligand molecular docking simulation — mô phỏng điện toán sự tương tác khớp hình học và năng lượng giữa thụ thể và phân tử thuốc

---

### 단백질구조도메인상호작용망
- **발음:** [단백찔구조도메인상호작용망]
- **품사:** 명사
- **핵심 의미:** 독립적으로 접히고 기능을 수행하는 단백질 도메인들 사이의 물리적 접촉과 결합 관계를 그래프 이론을 바탕으로 네트워크화하여 생체 내 신호전달 체계를 분석하는 모형
- **베트남어 뜻:** mạng lưới tương tác miền cấu trúc protein (mô hình dựa trên lý thuyết đồ thị mạng lưới hóa các tiếp xúc vật lý và mối quan hệ gắn kết giữa các miền protein có khả năng gập cuộn và thực thi chức năng độc lập nhằm phân tích hệ thống truyền tín hiệu trong cơ thể)
- **뉘앙스와 사용법:** 단순한 단백질 간 상호작용(PPI)을 넘어, 각 단백질 내부의 구체적인 구조 도메인(SH2, Kinase 등) 단위로 인터랙톰(Interactome)을 분해하여 세포 내 분자 기전의 교란을 정밀 해석한다.
- **재사용 가능한 콜로케이션·청크:**
  - 단백질구조도메인상호작용망을 구축하다 (xây dựng mạng lưới tương tác miền cấu trúc protein)
  - 복잡한 단백질구조도메인상호작용망 (mạng lưới tương tác miền cấu trúc protein phức tạp)
  - 단백질구조도메인상호작용망의 중심성 분석 (phân tích tính trung tâm của mạng lưới tương tác miền cấu trúc protein)
- **자주 쓰는 문형과 성분:**
  - 암 변이 유전자가 단백질구조도메인상호작용망의 연결 허브를 어떻게 교란하는지 추적하다 (truy vết cách thức các gen đột biến ung thư gây nhiễu loạn các nút trung tâm hub của mạng tương tác miền cấu trúc protein)
  - 전신 단백질체 데이터를 바탕으로 단백질구조도메인상호작용망 지도를 완성하다 (hoàn thành bản đồ mạng tương tác miền cấu trúc protein dựa trên dữ liệu toàn diện hệ protein thể)
- **사회적 관계·주제별 register:** 시스템생물학, 기능유전체학, 네트워크 의학(Network Medicine) 논문.
- **예문:** 자가면역질환 환자의 전사체 데이터를 단백질구조도메인상호작용망에 매핑하여 염증 신호를 폭주시키는 핵심 키나아제 허브를 발견하였다.
- **Dịch:** Bằng cách ánh xạ dữ liệu phiên mã của bệnh nhân mắc bệnh tự miễn lên mạng lưới tương tác miền cấu trúc protein, các nhà khoa học đã phát hiện ra nút trung tâm kinase cốt lõi gây bùng phát dữ dội các tín hiệu viêm.
- **어휘 연결:**
  - 단백질알로스테릭입체배열변화 (biến đổi phối trí lập thể allosteric protein - hiện tượng truyền tín hiệu xuyên miền)
  - 전유전자체단백질체구조주석 (chú giải cấu trúc hệ protein thể toàn bộ gen - nguồn dữ liệu xây dựng mạng lưới)
- **영어 참고:** protein structural domain interaction network — mạng lưới đồ thị tương tác vật lý giữa các miền cấu trúc chức năng của protein

---

### 상동성모델링단백질주형구조
- **발음:** [상동성모델링단백찔주형구조]
- **품사:** 명사
- **핵심 의미:** 실험적으로 3차원 구조가 이미 규명된 유사 단백질(템플릿)의 원자 좌표를 골격으로 삼아, 서열 상동성을 가진 미지의 대상 단백질 입체 구조를 컴퓨터로 합성 구축하는 주형
- **베트남어 뜻:** cấu trúc khuôn protein trong mô hình hóa tương đồng (khung tọa độ nguyên tử của protein tương tự khuôn mẫu đã được xác định cấu trúc 3 chiều qua thực nghiệm dùng làm xương sống để xây dựng cấu trúc lập thể của protein mục tiêu chưa biết dựa trên độ tương đồng chuỗi)
- **뉘앙스와 사용법:** 단백질 서열 일치도가 30% 이상일 때 매우 효과적인 비교 구조 모델링(Comparative Modeling) 기법으로, 딥러닝 기술 이전부터 구조생물학의 핵심 표준으로 널리 활용되어 온 방법론이다.
- **재사용 가능한 콜로케이션·청크:**
  - 상동성모델링단백질주형구조를 선별하다 (chọn lọc cấu trúc khuôn protein trong mô hình hóa tương đồng)
  - 적합한 상동성모델링단백질주형구조 (cấu trúc khuôn protein trong mô hình hóa tương đồng phù hợp)
  - 상동성모델링단백질주형구조의 좌표 데이터 (dữ liệu tọa độ của cấu trúc khuôn protein trong mô hình hóa tương đồng)
- **자주 쓰는 문형과 성분:**
  - 단백질 데이터 은행(PDB)에서 가장 일치도가 높은 상동성모델링단백질주형구조를 검색하다 (tìm kiếm cấu trúc khuôn protein mô hình hóa tương đồng có độ trùng khớp cao nhất trong Ngân hàng Dữ liệu Protein PDB)
  - 상동성모델링단백질주형구조를 기반으로 표적 효소의 활성 부위를 모델링하다 (mô hình hóa vị trí hoạt động của enzyme đích dựa trên cấu trúc khuôn protein mô hình hóa tương đồng)
- **사회적 관계·주제별 register:** 전산구조생물학, 생물정보학 데이터베이스 파이프라인, 분자설계 가이드라인.
- **예문:** 신종 박테리아의 내성 인자에 대한 실험 데이터가 전무한 상황에서 상동성모델링단백질주형구조를 활용해 85% 이상의 높은 신뢰도를 갖는 입체 모델을 조립했다.
- **Dịch:** Trong bối cảnh hoàn toàn thiếu dữ liệu thực nghiệm về yếu tố kháng thuốc của chủng vi khuẩn mới, nhóm nghiên cứu đã tận dụng cấu trúc khuôn protein trong mô hình hóa tương đồng để lắp ráp mô hình không gian 3 chiều với độ tin cậy cao trên 85%.
- **어휘 연결:**
  - 다중서열정렬공진화정보추출 (trích xuất thông tin đồng tiến hóa MSA - bước tìm kiếm khuôn mẫu tương đồng)
  - 동결전자현미경밀도지도피팅 (khớp bản đồ mật độ kính hiển vi điện tử nghiệm lạnh - phương pháp thực nghiệm cung cấp cấu trúc khuôn)
- **영어 참고:** homology modeling protein template structure — cấu trúc tinh thể khuôn mẫu dùng để mô hình hóa cấu trúc protein tương đồng

---

### 전유전자체단백질체구조주석
- **발음:** [전유전자체단백찔체구조주석]
- **품사:** 명사
- **핵심 의미:** 생물체의 전체 게놈이 암호화하는 수만 개 단백질의 서열에 대해 3차원 입체 구조를 예측하고 생화학적 활성 부위와 돌연변이 영향력을 전수 컴퓨터 데이터베이스화하는 작업
- **베트남어 뜻:** chú giải cấu trúc hệ protein thể toàn bộ hệ gen (công việc dự đoán cấu trúc lập thể 3D cho hàng vạn chuỗi protein được mã hóa bởi toàn bộ bộ gen của sinh vật và lập cơ sở dữ liệu vi tính toàn diện về các vị trí hoạt tính sinh hóa và tác động của đột biến)
- **뉘앙스와 사용법:** 포스트 게놈 시대의 핵심 빅데이터 프로젝트로, 단순히 염기 서열을 읽는 단계를 넘어 모든 유전자 산물의 3차원 형태와 물리화학적 기능을 시스템 차원에서 통합 매핑하는 고도화된 생물정보학 과업이다.
- **재사용 가능한 콜로케이션·청크:**
  - 전유전자체단백질체구조주석을 완료하다 (hoàn thành chú giải cấu trúc hệ protein thể toàn bộ gen)
  - 대규모 전유전자체단백질체구조주석 (chú giải cấu trúc hệ protein thể toàn bộ gen quy mô lớn)
  - 전유전자체단백질체구조주석 데이터베이스 (cơ sở dữ liệu chú giải cấu trúc hệ protein thể toàn bộ gen)
- **자주 쓰는 문형과 성분:**
  - 알파폴드 데이터베이스와 연계하여 인간 전유전자체단백질체구조주석 프로젝트를 완수하다 (hoàn tất dự án chú giải cấu trúc hệ protein thể toàn bộ gen người liên kết với cơ sở dữ liệu AlphaFold)
  - 전유전자체단백질체구조주석을 통해 기능 미지의 고아 단백질의 생화학적 역할을 규명하다 (làm sáng tỏ vai trò sinh hóa của các protein mồ côi chưa rõ chức năng qua chú giải cấu trúc proteome toàn hệ gen)
- **사회적 관계·주제별 register:** 구조유전체학, 기능생물정보학, 국가 바이오 빅데이터 인프라 구축 보고서.
- **예문:** 인간 질환 연구재단은 암 관련 변이의 병리학적 원인을 밝히기 위해 전유전자체단백질체구조주석 작업을 선제적으로 수행하여 연구자들에게 전면 개방했다.
- **Dịch:** Quỹ nghiên cứu bệnh tật con người đã chủ động thực hiện công việc chú giải cấu trúc hệ protein thể toàn bộ gen và mở cửa hoàn toàn cho các nhà nghiên cứu nhằm làm sáng tỏ nguyên nhân bệnh lý của các đột biến liên quan đến ung thư.
- **어휘 연결:**
  - 단백질삼차원구조예측딥러닝 (học sâu dự đoán cấu trúc 3 chiều protein - động lực thúc đẩy chú giải quy mô lớn)
  - 단백질구조도메인상호작용망 (mạng tương tác miền cấu trúc protein - ứng dụng dữ liệu chú giải để phân tích mạng)
- **영어 참고:** genome-wide proteome structural annotation — chú giải cấu trúc lập thể không gian ba chiều cho toàn bộ hệ protein thể của bộ gen

---

### 동결전자현미경밀도지도피팅
- **발음:** [동결전자현미경밀도지도피팅]
- **품사:** 명사
- **핵심 의미:** 액체 에탄에서 급속 동결된 생체 분자의 초저온 투과전자현미경 이미지로부터 재구성된 3차원 전자 밀도 지도에 아미노산 원자 모델을 정밀하게 끼워 맞추는 정교한 구조 해석 과정
- **베트남어 뜻:** khớp mô hình nguyên tử vào bản đồ mật độ kính hiển vi điện tử nghiệm lạnh (quá trình giải mã cấu trúc tinh vi ghép nối chính xác mô hình nguyên tử axit amin vào bản đồ mật độ electron 3 chiều được tái dựng từ hình ảnh hiển vi điện tử truyền qua nhiệt độ siêu lạnh của các phân tử sinh học đóng băng cấp tốc trong ethan lỏng)
- **뉘앙스와 사용법:** cryo-EM 분야의 핵심 후처리 단계로, 분자량 수백만 달톤에 이르는 거대 단백질 복합체나 세포막 단백질의 고해상도 밀도 윤곽선(Coulomb Potential Map)에 단백질 골격과 곁사슬을 유연하게 맞추는(Flexible Fitting) 연산이다.
- **재사용 가능한 콜로케이션·청크:**
  - 동결전자현미경밀도지도피팅을 최적화하다 (tối ưu hóa việc khớp mô hình vào bản đồ mật độ kính hiển vi điện tử nghiệm lạnh)
  - 정밀한 동결전자현미경밀도지도피팅 (khớp bản đồ mật độ kính hiển vi điện tử nghiệm lạnh chuẩn xác)
  - 동결전자현미경밀도지도피팅 소프트웨어 (phần mềm khớp mô hình vào bản đồ mật độ cryo-EM)
- **자주 쓰는 문형과 성분:**
  - 동결전자현미경밀도지도피팅 과정을 거쳐 리보솜 복합체의 원자 수준 구조를 규명하다 (làm sáng tỏ cấu trúc cấp độ nguyên tử của phức hợp ribosome qua quy trình khớp bản đồ mật độ cryo-EM)
  - 인공지능 모델로 예측된 구조를 동결전자현미경밀도지도피팅의 초기 주형으로 활용하다 (ứng dụng cấu trúc do AI dự đoán làm khuôn mẫu ban đầu cho việc khớp bản đồ mật độ cryo-EM)
- **사회적 관계·주제별 register:** 극저온전자현미경학(Cryo-EM), 생체거대분자 구조화학, 구조생물학 실험 프로토콜.
- **예문:** 연구팀은 2.5옹스트롬 고해상도로 획득한 단백질 복합체에 대해 동결전자현미경밀도지도피팅을 정밀하게 수행하여 저해제가 결합된 약물 작용 메커니즘을 시각화했다.
- **Dịch:** Nhóm nghiên cứu đã thực hiện chuẩn xác việc khớp mô hình vào bản đồ mật độ kính hiển vi điện tử nghiệm lạnh đối với phức hợp protein thu được ở độ phân giải cao 2,5 Angstrom để trực quan hóa cơ chế tác dụng của thuốc khi có chất ức chế gắn kết.
- **어휘 연결:**
  - 단백질골격비틀림각도분포 (phân bố góc xoắn xương sống protein - kiểm tra tính hợp lệ của mô hình sau khi fitting)
  - 상동성모델링단백질주형구조 (cấu trúc khuôn protein mô hình hóa tương đồng - cung cấp cấu trúc ban đầu)
- **영어 참고:** cryo-EM density map atomic model fitting — kỹ thuật khớp mô hình tọa độ nguyên tử vào bản đồ mật độ điện tử của kính hiển vi điện tử lạnh

---

### 단백질골격비틀림각도분포
- **발음:** [단백찔골겯비틀림각또분포]
- **품사:** 명사
- **핵심 의미:** 단백질 주쇄(골격)의 인접한 화학 결합 주위로 회전하는 두 면각인 파이(φ)와 프사이(ψ) 각도의 2차원 좌표 분포로, 입체 장애 없는 안정한 구조 영역을 나타내는 척도
- **베트남어 뜻:** phân bố góc xoắn xương sống protein (sự phân bố tọa độ hai chiều của hai góc nhị diện phi φ và psi ψ xoay quanh các liên kết hóa học liền kề của chuỗi chính xương sống protein, là thước đo biểu thị vùng cấu trúc ổn định không bị cản trở không gian)
- **뉘앙스와 사용법:** 라마찬드란 도면(Ramachandran Plot)의 수학적 기초가 되는 개념으로, 알파 나선(Alpha Helix)과 베타 병풍(Beta Sheet) 등 단백질 2차 구조의 기하학적 정당성과 입체화학적 품질을 검증하는 절대적 기준이다.
- **재사용 가능한 콜로케이션·청크:**
  - 단백질골격비틀림각도분포를 검증하다 (kiểm chứng phân bố góc xoắn xương sống protein)
  - 안정한 단백질골격비틀림각도분포 (phân bố góc xoắn xương sống protein ổn định)
  - 단백질골격비틀림각도분포의 허용 영역 (vùng cho phép của phân bố góc xoắn xương sống protein)
- **자주 쓰는 문형과 성분:**
  - 예측된 단백질 구조가 라마찬드란 도면상 정상적인 단백질골격비틀림각도분포 영역에 들어오는지 평가하다 (đánh giá xem cấu trúc protein dự đoán có nằm trong vùng phân bố góc xoắn xương sống protein bình thường trên biểu đồ Ramachandran hay không)
  - 돌연변이 발생 시 특정 잔기의 단백질골격비틀림각도분포가 왜곡되다 (khi xảy ra đột biến, phân bố góc xoắn xương sống protein của phần dư cụ thể bị bóp méo)
- **사회적 관계·주제별 register:** 단백질 결정학, 분자 기하학, 구조 유효성 검증(Validation) 표준 규격.
- **예문:** 컴퓨터로 디자인된 인공 단백질의 모든 잔기가 라마찬드란 허용 구역 내 단백질골격비틀림각도분포를 유지함으로써 열역학적으로 안정된 구조임을 증명했다.
- **Dịch:** Mọi phần dư của protein nhân tạo được thiết kế trên máy tính đều duy trì sự phân bố góc xoắn xương sống protein nằm trong vùng cho phép của Ramachandran, qua đó chứng minh đây là cấu trúc ổn định về mặt nhiệt động học.
- **어휘 연결:**
  - 동결전자현미경밀도지도피팅 (khớp bản đồ mật độ cryo-EM - sử dụng phân bố góc xoắn để tinh chỉnh stereochemistry)
  - 단백질접힘열역학적안정성 (tính ổn định nhiệt động gập cuộn protein - phản ánh chất lượng góc xoắn xương sống)
- **영어 참고:** protein backbone dihedral torsion angle distribution — sự phân bố các góc nhị diện phi và psi của khung xương sống peptide theo đồ thị Ramachandran

---

### 돌연변이구조안정성변화예측
- **발음:** [도련벼니구조안정성변화예측]
- **품사:** 명사
- **핵심 의미:** 단백질 서열 내 특정 아미노산이 다른 잔기로 치환되었을 때 전체 3차원 입체 구조의 깁스 자유에너지 변화값(ΔΔG)을 분자역학이나 머신러닝으로 계산하여 안정성 증감을 예측하는 분석
- **베트남어 뜻:** dự đoán biến đổi tính ổn định cấu trúc do đột biến (phép phân tích tính toán độ biến thiên năng lượng tự do Gibbs ΔΔG của toàn bộ cấu trúc lập thể 3D bằng cơ học phân tử hoặc máy học khi một axit amin trong chuỗi protein bị thay thế bởi phần dư khác nhằm dự báo sự tăng giảm độ bền)
- **뉘앙스와 사용법:** 유전성 질환을 유발하는 병원성 돌연변이의 분자적 기전을 해석하고, 단백질 공학에서 열이나 효소에 강한 변이체를 합리적으로 설계하기 위한 필수 전산 도구이다.
- **재사용 가능한 콜로케이션·청크:**
  - 돌연변이구조안정성변화예측을 실행하다 (thực thi việc dự đoán biến đổi tính ổn định cấu trúc do đột biến)
  - 정량적 돌연변이구조안정성변화예측 (dự đoán biến đổi tính ổn định cấu trúc do đột biến mang tính định lượng)
  - 돌연변이구조안정성변화예측의 신뢰도 (độ tin cậy của việc dự đoán biến đổi tính ổn định cấu trúc do đột biến)
- **자주 쓰는 문형과 성분:**
  - 암 유발 환자의 유전체 변이에 대해 돌연변이구조안정성변화예측을 수행하여 질병 위험도를 판정하다 (tiến hành dự đoán biến đổi tính ổn định cấu trúc do đột biến đối với biến dị gen của bệnh nhân ung thư để phân định mức độ nguy cơ bệnh tật)
  - 자유에너지 섭동법을 적용해 돌연변이구조안정성변화예측의 오차를 1kcal/mol 미만으로 줄이다 (áp dụng phương pháp nhiễu loạn năng lượng tự do để giảm sai số dự đoán biến đổi tính ổn định cấu trúc đột biến xuống dưới 1 kcal/mol)
- **사회적 관계·주제별 register:** 임상유전체학, 분자진단학, 단백질 엔지니어링 및 계산생물리학 논문.
- **예문:** 연구팀은 인공지능 기반 돌연변이구조안정성변화예측 알고리즘을 활용하여 코로나 바이러스 스파이크 단백질의 변이로 인한 결합력 강화 원인을 조기에 규명했다.
- **Dịch:** Nhóm nghiên cứu đã ứng dụng thuật toán dự đoán biến đổi tính ổn định cấu trúc do đột biến dựa trên trí tuệ nhân tạo để làm sáng tỏ sớm nguyên nhân gia tăng lực gắn kết do đột biến ở protein gai của virus corona.
- **어휘 연결:**
  - 단백질접힘열역학적안정성 (tính ổn định nhiệt động gập cuộn protein - đại lượng trực tiếp bị thay đổi bởi đột biến)
  - 결합친화도자유에너지섭동계산 (tính toán nhiễu loạn năng lượng tự do ái lực liên kết - phương pháp tính toán chính xác)
- **영어 참고:** mutation-induced structural stability change prediction — dự báo định lượng biến thiên năng lượng tự do gập cuộn delta-delta-G khi protein xuất hiện đột biến điểm

---

### 단백질알로스테릭입체배열변화
- **발음:** [단백찔알로스테릭입체배열변화]
- **품사:** 명사
- **핵심 의미:** 단백질의 활성 부위가 아닌 다른 원격 부위(알로스테릭 부위)에 조절 인자가 결합함으로써 유발되는 단백질 전체의 가역적인 3차원 입체 배좌 구조의 변형 현상
- **베트남어 뜻:** biến đổi phối trí lập thể allosteric protein (hiện tượng biến dạng cấu trúc phối trí lập thể 3 chiều thuận nghịch của toàn bộ protein được kích hoạt khi yếu tố điều hòa gắn kết vào một vị trí từ xa khác vị trí hoạt động chính - vị trí allosteric)
- **뉘앙스와 사용법:** 효소의 활성화 및 비활성화, 헤모글로빈의 산소 친화도 조절 등 생체 내 비선형 신호 조절의 핵심 물리 기전으로, 부작용이 적은 혁신적인 알로스테릭 조절 신약 개발의 표적이 된다.
- **재사용 가능한 콜로케이션·청크:**
  - 단백질알로스테릭입체배열변화를 유도하다 (kích hoạt biến đổi phối trí lập thể allosteric protein)
  - 극적인 단백질알로스테릭입체배열변화 (biến đổi phối trí lập thể allosteric protein đầy kịch tính)
  - 단백질알로스테릭입체배열변화의 전파 경로 (con đường lan truyền của biến đổi phối trí lập thể allosteric protein)
- **자주 쓰는 문형과 성분:**
  - 원격 부위에 결합한 소분자가 단백질알로스테릭입체배열변화를 일으켜 효소 활성을 차단하다 (phân tử nhỏ gắn vào vị trí từ xa gây ra biến đổi phối trí lập thể allosteric protein để chặn đứng hoạt tính enzyme)
  - 분자동역학 시뮬레이션으로 단백질알로스테릭입체배열변화의 나노초 단위 동적 궤적을 추적하다 (theo dõi quỹ đạo động học cấp độ nano giây của biến đổi phối trí lập thể allosteric protein bằng mô phỏng động lực học phân tử)
- **사회적 관계·주제별 register:** 구조생화학, 분자약리학, 알로스테릭 약물 발굴 컨퍼런스.
- **예문:** 표적 수용체에 결합한 새로운 신약 후보물질은 세포막을 관통하는 단백질알로스테릭입체배열변화를 촉발하여 하위 세포 내 신호전달을 정밀하게 제어하였다.
- **Dịch:** Ứng viên thuốc mới gắn vào thụ thể đích đã kích hoạt sự biến đổi phối trí lập thể allosteric của protein xuyên qua màng tế bào, kiểm soát chuẩn xác chuỗi truyền tín hiệu bên trong tế bào ở hạ lưu.
- **어휘 연결:**
  - 단백질구조도메인상호작용망 (mạng tương tác miền cấu trúc protein - con đường truyền tải biến đổi allosteric giữa các miền)
  - 수용체리간드분자도킹시뮬레이션 (mô phỏng docking phối tử - thụ thể - khảo sát docking tại vị trí allosteric)
- **영어 참고:** protein allosteric conformational change — sự biến đổi hình thái không gian ba chiều của protein do tương tác tại vị trí dị lập thể từ xa

---

### 결합친화도자유에너지섭동계산
- **발음:** [결합친화도자유에너지섭동계산]
- **품사:** 명사
- **핵심 의미:** 열역학적 적분과 통계역학 원리를 적용하여 컴퓨터 시뮬레이션상에서 분자의 원자를 점진적으로 변환해가며 결합 자유에너지(ΔGbind)의 차이를 극도로 정밀하게 산출하는 계산 기법
- **베트남어 뜻:** tính toán nhiễu loạn năng lượng tự do ái lực liên kết (kỹ thuật tính toán áp dụng tích phân nhiệt động lực học và nguyên lý cơ học thống kê để biến đổi dần dần các nguyên tử của phân tử trên mô phỏng máy tính nhằm tính ra độ chênh lệch năng lượng tự do liên kết delta-G-bind cực kỳ chuẩn xác)
- **뉘앙스와 사용법:** FEP(Free Energy Perturbation) 계산으로, 약물 후보 물질의 미세한 작용기 변형이 표적 단백질과의 결합력에 미치는 효과를 실험 오차 범위(1kcal/mol 이내)로 예측하여 신약 합성 비용을 획기적으로 줄여준다.
- **재사용 가능한 콜로케이션·청크:**
  - 결합친화도자유에너지섭동계산을 수행하다 (tiến hành tính toán nhiễu loạn năng lượng tự do ái lực liên kết)
  - 정밀한 결합친화도자유에너지섭동계산 (tính toán nhiễu loạn năng lượng tự do ái lực liên kết chuẩn xác)
  - 결합친화도자유에너지섭동계산의 수렴성 (tính hội tụ của phép tính toán nhiễu loạn năng lượng tự do ái lực)
- **자주 쓰는 문형과 성분:**
  - 슈퍼컴퓨터를 활용한 결합친화도자유에너지섭동계산으로 최적의 신약 선도물질을 도출하다 (rút ra chất dẫn đường thuốc tối ưu bằng tính toán nhiễu loạn năng lượng tự do ái lực liên kết trên siêu máy tính)
  - 결합친화도자유에너지섭동계산 결과가 시험관 내 결합 측정치와 일치함을 검증하다 (kiểm chứng kết quả tính toán nhiễu loạn năng lượng tự do ái lực liên kết trùng khớp với trị số đo liên kết in vitro)
- **사회적 관계·주제별 register:** 계산화학, 컴퓨터지원약물설계(CADD), 제약바이오 분자모델링 논문.
- **예문:** 선도 화합물의 벤젠 고리에 메틸기를 추가하는 화학적 개조의 유효성을 결합친화도자유에너지섭동계산으로 사전 입증하여 불필요한 합성을 방지했다.
- **Dịch:** Hiệu quả của việc biến đổi hóa học bổ sung nhóm methyl vào vòng benzen của hợp chất dẫn đường đã được chứng minh trước thông qua tính toán nhiễu loạn năng lượng tự do ái lực liên kết, giúp ngăn ngừa các khâu tổng hợp không cần thiết.
- **어휘 연결:**
  - 수용체리간드분자도킹시뮬레이션 (mô phỏng docking thụ thể - phối tử - bước sơ bộ trước khi tính FEP tinh vi)
  - 컴퓨터기반표적신약후보설계 (thiết kế ứng viên thuốc nhắm đích trên máy tính - ứng dụng đỉnh cao của FEP)
- **영어 참고:** binding affinity free energy perturbation calculation — phương pháp tính toán cơ học thống kê FEP xác định chính xác năng lượng tự do liên kết giữa protein và phối tử

---

### 막단백질소수성막관통나선예측
- **발음:** [막단백찔소수성막관통나선예측]
- **품사:** 명사
- **핵심 의미:** 지질 이중층 세포막을 관통하는 단백질의 20~25개 소수성 아미노산으로 이루어진 알파 나선 구간의 위치와 막 통과 배향성을 전산 알고리즘으로 판별하는 기법
- **베트남어 뜻:** dự đoán chuỗi xoắn alpha xuyên màng kỵ nước của protein màng (kỹ thuật thuật toán vi tính phân định vị trí và hướng xuyên màng của các đoạn xoắn alpha gồm 20-25 axit amin kỵ nước trong protein xuyên qua màng sinh chất hai lớp lipid)
- **뉘앙스와 사용법:** 전체 약물 표적의 60% 이상을 차지하는 G단백질 결합 수용체(GPCR)나 이온 채널 등 결정화가 극히 어려운 막단백질(Membrane Protein)의 세포막 내 삽입 구조를 규명하는 기초 단계이다.
- **재사용 가능한 콜로케이션·청크:**
  - 막단백질소수성막관통나선예측을 수행하다 (thực hiện dự đoán chuỗi xoắn alpha xuyên màng kỵ nước của protein màng)
  - 정확한 막단백질소수성막관통나선예측 (dự đoán chuỗi xoắn alpha xuyên màng kỵ nước chuẩn xác)
  - 막단백질소수성막관통나선예측 알고리즘 (thuật toán dự đoán chuỗi xoắn alpha xuyên màng kỵ nước)
- **자주 쓰는 문형과 성분:**
  - 하이드로파시 플롯을 기반으로 막단백질소수성막관통나선예측의 정확도를 높이다 (nâng cao độ chính xác của dự đoán chuỗi xoắn xuyên màng kỵ nước dựa trên biểu đồ tính kỵ nước hydropathy plot)
  - 막단백질소수성막관통나선예측을 통해 세포 외 결합 도메인의 경계를 획정하다 (phân định ranh giới miền gắn kết ngoại bào thông qua dự đoán chuỗi xoắn xuyên màng kỵ nước)
- **사회적 관계·주제별 register:** 생체막생물학, 분자수송체 연구, GPCR 구조약리학 논문.
- **예문:** 신규 분리된 신경 전달 물질 수용체에 대해 막단백질소수성막관통나선예측을 실행한 결과, 7개의 세포막 관통 나선을 가진 전형적인 GPCR 구조임이 밝혀졌다.
- **Dịch:** Kết quả thực thi dự đoán chuỗi xoắn alpha xuyên màng kỵ nước của protein màng đối với thụ thể chất dẫn truyền thần kinh mới phân lập đã làm sáng tỏ đây là cấu trúc GPCR điển hình sở hữu 7 chuỗi xoắn xuyên màng sinh chất.
- **어휘 연결:**
  - 단백질삼차원구조예측딥러닝 (học sâu dự đoán cấu trúc 3 chiều protein - giải quyết độ cong màng phức tạp)
  - 컴퓨터기반표적신약후보설계 (thiết kế ứng viên thuốc nhắm đích trên máy tính - nhắm vào các thụ thể màng này)
- **영어 참고:** membrane protein hydrophobic transmembrane helix prediction — dự đoán các đoạn xoắn alpha kỵ nước xuyên qua lớp màng lipid kép của tế bào

---

### 컴퓨터기반표적신약후보설계
- **발음:** [컴퓨터기반표적신약후보설계]
- **품사:** 명사
- **핵심 의미:** 질병 유발 표적 단백질의 3차원 입체 구조와 결합 포켓의 원자적 특성을 바탕으로, 최적의 치료 효능을 발휘할 혁신 화합물을 인공지능과 분자 모델링으로 가상 설계하는 첨단 신약 개발 체계
- **베트남어 뜻:** thiết kế ứng viên thuốc nhắm đích trên máy tính (hệ thống phát triển thuốc tiên tiến dựa trên cấu trúc lập thể 3D và đặc tính nguyên tử của túi gắn kết protein mục tiêu gây bệnh, sử dụng trí tuệ nhân tạo và mô hình hóa phân tử để thiết kế ảo các hợp chất đổi mới mang lại hiệu quả điều trị tối ưu)
- **뉘앙스와 사용법:** CADD(Computer-Aided Drug Design) 및 인공지능 신약 개발의 집대성으로, 고전적인 무작위 합성 방식(Trial and Error)에서 탈피하여 약물 후보물질 발굴에 소요되는 기간과 수천억 원의 연구 개발 비용을 절감하는 현대 제약의 정점 기술이다.
- **재사용 가능한 콜로케이션·청크:**
  - 컴퓨터기반표적신약후보설계를 도입하다 (áp dụng thiết kế ứng viên thuốc nhắm đích trên máy tính)
  - 혁신적인 컴퓨터기반표적신약후보설계 (thiết kế ứng viên thuốc nhắm đích trên máy tính đổi mới sáng tạo)
  - 컴퓨터기반표적신약후보설계의 파이프라인 (quy trình chuỗi dẫn truyền thiết kế ứng viên thuốc nhắm đích trên máy tính)
- **자주 쓰는 문형과 성분:**
  - 다국적 제약사들이 컴퓨터기반표적신약후보설계 기술을 적용하여 신약 개발 주기를 절반으로 단축하다 (các tập đoàn dược phẩm đa quốc gia rút ngắn một nửa chu kỳ phát triển thuốc mới nhờ áp dụng công nghệ thiết kế thuốc nhắm đích trên máy tính)
  - 단백질 3차원 구조 규명 직후 컴퓨터기반표적신약후보설계를 가동하여 맞춤형 저해제를 합성하다 (ngay sau khi làm sáng tỏ cấu trúc protein 3D, khởi động thiết kế thuốc nhắm đích trên máy tính để tổng hợp chất ức chế cá nhân hóa)
- **사회적 관계·주제별 register:** 제약바이오 산업 R&D, 의약화학 총설, 분자약리학 첨단 개발 로드맵.
- **예문:** 내성 암세포를 사멸시키기 위해 연구진은 표적 효소의 변이 구조를 바탕으로 컴퓨터기반표적신약후보설계를 추진하여 부작용을 극소화한 표적 항암제 후보물질을 도출했다.
- **Dịch:** Để tiêu diệt các tế bào ung thư kháng thuốc, đội ngũ nghiên cứu đã thúc đẩy thiết kế ứng viên thuốc nhắm đích trên máy tính dựa trên cấu trúc biến dị của enzyme đích, rút ra ứng viên thuốc chống ung thư trúng đích với tác dụng phụ được giảm thiểu tối đa.
- **어휘 연결:**
  - 수용체리간드분자도킹시뮬레이션 (mô phỏng docking phối tử - thụ thể - thành tố cốt lõi của quy trình CADD)
  - 결합친화도자유에너지섭동계산 (tính toán FEP năng lượng tự do - bảo đảm độ chuẩn xác cho thiết kế thuốc)
- **영어 참고:** computer-aided target drug candidate design — hệ thống thiết kế cấu trúc phân tử thuốc mới dựa trên máy tính và tương tác cấu trúc đích

## 본문 읽기: 종합 학술 텍스트

첨단 구조생물정보학 연구진은 생명현상의 핵심적인 분자적 기전을 정밀하게 규명하고자 단백질삼차원구조예측딥러닝 알고리즘을 혁신적으로 발전시켰다. 연구팀은 알파폴드잔기간거리접촉지도 예측 모델을 체계적으로 구축하여 복잡한 단백질 폴딩 과정을 정밀하게 추적했으며, 다중서열정렬공진화정보추출 기법을 폭넓게 활용해 아미노산 간 상호작용을 파악했다. 또한 물리화학적 단백질접힘열역학적안정성 조건을 면밀히 계산하여 신약 표적과의 수용체리간드분자도킹시뮬레이션 정확도를 대폭 끌어올렸다. 세포 내 단백질구조도메인상호작용망 분석을 위해 상동성모델링단백질주형구조 데이터베이스를 활용했으며, 나아가 전유전자체단백질체구조주석 프로젝트를 성공적으로 완수했다. 고해상도 동결전자현미경밀도지도피팅 검증 과정에서는 단백질골격비틀림각도분포 특성을 면밀히 평가하여 입체 구조의 정밀도를 완벽히 보증했다. 연구진은 돌연변이구조안정성변화예측 계산을 통해 질환 유발 변이를 선별하고, 신호 전달에 따른 단백질알로스테릭입체배열변화 양상을 동역학적으로 추적했다. 아울러 정밀한 결합친화도자유에너지섭동계산 기법으로 유효 후보물질의 결합력을 평가하고, 난치성 막단백질소수성막관통나선예측 결과를 바탕으로 차세대 컴퓨터기반표적신약후보설계 연구의 새로운 지평을 활짝 열었다.

**베트남어 번역:**

Nhóm nghiên cứu sinh tin học cấu trúc tiên tiến đã phát triển mang tính đột phá các thuật toán học sâu dự đoán cấu trúc 3D protein nhằm làm sáng tỏ chuẩn xác các cơ chế phân tử cốt lõi của hiện tượng sống. Nhóm nghiên cứu đã xây dựng có hệ thống mô hình dự đoán bản đồ tiếp xúc khoảng cách giữa các gốc AlphaFold để truy vết chuẩn xác quá trình cuộn gập protein phức tạp, đồng thời ứng dụng sâu rộng kỹ thuật trích xuất thông tin đồng tiến hóa gióng hàng đa trình tự để nắm bắt tương tác giữa các axit amin. Ngoài ra, việc tính toán tỉ mỉ các điều kiện độ ổn định nhiệt động học cuộn gập protein hóa lý đã nâng cao đáng kể độ chính xác của mô phỏng docking phân tử thụ thể - phối tử với các mục tiêu thuốc mới. Họ đã khai thác cơ sở dữ liệu cấu trúc khuôn mẫu protein mô hình hóa tương đồng để phân tích mạng lưới tương tác miền cấu trúc protein nội bào, hơn thế nữa còn hoàn thành xuất sắc dự án chú giải cấu trúc hệ protein toàn bộ hệ gen. Trong quy trình kiểm chứng khớp bản đồ mật độ kính hiển vi điện tử đông lạnh Cryo-EM độ phân giải cao, các đặc tính phân bố góc xoắn khung xương protein đã được đánh giá kỹ lưỡng nhằm bảo đảm hoàn hảo độ chuẩn xác của cấu trúc lập thể. Nhóm nghiên cứu đã sàng lọc các biến dị gây bệnh thông qua tính toán dự đoán biến đổi độ ổn định cấu trúc đột biến, đồng thời theo dõi động học diện mạo biến đổi cấu hình lập thể dị lập thể protein theo quá trình truyền tín hiệu. Thêm vào đó, bằng kỹ thuật tính toán nhiễu loạn năng lượng tự do ái lực liên kết chuẩn xác, họ đã đánh giá lực liên kết của các hoạt chất ứng viên tiềm năng, mở ra chân trời mới cho nghiên cứu thiết kế ứng viên thuốc trúng đích dựa trên máy tính thế hệ mới dựa trên kết quả dự đoán xoắn ốc xuyên màng kỵ nước protein màng khó trị.
