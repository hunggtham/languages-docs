<!-- source_policy: original explanations, examples, and passage; computer-science-graph-neural-networks-and-message-passing terminology cross-checked conceptually, not copied -->
# 컴퓨터과학 및 그래프 신경망과 메시지 전달 아키텍처의 언어

그래프신경망아키텍처 및 노드메시지전달기법 기반 인접행렬정규화처리와 이웃노드정보집약 컴퓨터과학 및 그래프 신경망과 메시지 전달 아키텍처의 언어

---

### 그래프신경망아키텍처

- **발음:** [그래프신경망아키텍처]
- **품사:** 명사
- **핵심 의미:** 노드와 엣지로 이루어진 비유클리드 공간의 그래프 구조 데이터를 효율적으로 처리하고 위상학적 관계를 학습하도록 설계된 딥러닝 신경망 모델의 전체적인 구조 체계.
- **베트남어 뜻:** Kiến trúc mạng thần kinh đồ thị (hệ thống cấu trúc mô hình mạng nơ-ron học sâu được thiết kế để xử lý và học các mối quan hệ tô-pô trong dữ liệu đồ thị phi Euclid)
- **뉘앙스와 사용법:** Mô hình học máy hiện đại mở rộng mạng nơ-ron từ dữ liệu dạng lưới (lưới ảnh, chuỗi văn bản) sang các mạng lưới phức hợp như mạng xã hội, phân tử sinh học và tri thức.
- **재사용 가능한 콜로케이션·청크:**
  - 고도화된 그래프신경망아키텍처 (kiến trúc mạng thần kinh đồ thị nâng cao)
  - 그래프신경망아키텍처 설계 (thiết kế kiến trúc mạng thần kinh đồ thị)
  - 그래프신경망아키텍처의 확장성 (tính mở rộng của kiến trúc mạng thần kinh đồ thị)
- **자주 쓰는 문형과 성분:**
  - 그래프신경망아키텍처를(을) 대규모 지식 그래프 추천 시스템에 적용하다 (áp dụng kiến trúc mạng thần kinh đồ thị vào hệ thống gợi ý đồ thị tri thức quy mô lớn)
  - 그래프신경망아키텍처가(이) 복잡한 위상학적 특징을 성공적으로 학습하다 (kiến trúc mạng thần kinh đồ thị học thành công các đặc trưng tô-pô phức tạp)
- **사회적 관계·주제별 register:** Trí tuệ nhân tạo, học máy đồ thị, khoa học dữ liệu phức hợp.
- **예문:**
  - 새로운 그래프신경망아키텍처는 수백만 개의 분자 결합 관계를 빠르고 정확하게 분석해 냈다.
- **Dịch:**
  - Kiến trúc mạng thần kinh đồ thị mới đã phân tích nhanh chóng và chuẩn xác các mối quan hệ liên kết phân tử của hàng triệu phân tử.
- **어휘 연결:**
  - 유의어: `그래프합성곱망` (mạng tích chập đồ thị GCN)
  - 관련어: `위상수학적딥러닝` (học sâu tô-pô)
- **영어 참고:** `graph neural network architecture` — kiến trúc mạng nơ-ron đồ thị

---

### 노드메시지전달기법

- **발음:** [노드메시지전달기법]
- **품사:** 명사
- **핵심 의미:** 그래프의 각 노드가 이웃 노드들과 상태 벡터를 교환하고(메시지 전송), 수신된 정보를 집약한 뒤 자신의 표현을 갱신하는 그래프 신경망의 핵심 연산 패러다임(MPNN).
- **베트남어 뜻:** Kỹ thuật truyền thông điệp giữa các nút (cơ chế cốt lõi trong GNN khi mỗi nút trao đổi vector trạng thái với các nút lân cận, tập hợp thông tin nhận được và cập nhật biểu diễn bản thân)
- **뉘앙스와 사용법:** Nguyên lý nền tảng của hầu hết các mạng GNN hiện đại, mô phỏng quá trình lan truyền thông tin qua các liên kết quan hệ trong mạng.
- **재사용 가능한 콜로케이션·청크:**
  - 효율적 노드메시지전달기법 (kỹ thuật truyền thông điệp giữa các nút hiệu quả)
  - 노드메시지전달기법 구현 (hiện thực hóa kỹ thuật truyền thông điệp giữa các nút)
  - 노드메시지전달기법의 계산복잡도 (độ phức tạp tính toán của kỹ thuật truyền thông điệp giữa các nút)
- **자주 쓰는 문형과 성분:**
  - 노드메시지전달기법을(를) 활용하여 공간적 맥락을 임베딩에 반영하다 (tận dụng kỹ thuật truyền thông điệp giữa các nút để phản ánh ngữ cảnh không gian vào nhúng)
  - 노드메시지전달기법이(가) 노드 간의 국소적 상호작용을 포착하다 (kỹ thuật truyền thông điệp giữa các nút nắm bắt các tương tác cục bộ giữa các nút)
- **사회적 관계·주제별 register:** Tính toán song song đồ thị, kiến trúc MPNN, đại số tuyến tính thưa.
- **예문:**
  - 노드메시지전달기법을 몇 단계 거치느냐에 따라 각 노드가 참조하는 이웃 노드의 탐색 반경이 결정된다.
- **Dịch:**
  - Tùy thuộc vào việc trải qua bao nhiêu bước kỹ thuật truyền thông điệp giữa các nút mà bán kính tìm kiếm các nút lân cận được tham chiếu bởi mỗi nút sẽ được quyết định.
- **어휘 연결:**
  - 유의어: `메시지집약함수` (hàm tập hợp thông điệp)
  - 관련어: `노드상태갱신` (cập nhật trạng thái nút)
- **영어 참고:** `node message passing technique` — kỹ thuật truyền thông điệp giữa các nút đồ thị

---

### 인접행렬정규화처리

- **발음:** [인접행렬정규화처리]
- **품사:** 명사
- **핵심 의미:** 그래프의 연결 관계를 나타내는 인접 행렬(A)에 차수 행렬(D)의 역제곱근을 곱하여 노드의 차수(연결선 수) 차이에 따른 수치적 발산이나 왜곡을 방지하는 전처리 연산.
- **베트남어 뜻:** Xử lý chuẩn hóa ma trận kề (phép toán nhân ma trận kề với căn bậc hai nghịch đảo của ma trận bậc để ngăn chặn sự phân kỳ giá trị do chênh lệch bậc liên kết giữa các nút)
- **뉘앙스와 사용법:** Bước tiền xử lý toán học bắt buộc trong Graph Convolutional Networks (GCN) của Kipf & Welling để giữ cho gradient ổn định khi truyền qua nhiều tầng.
- **재사용 가능한 콜로케이션·청크:**
  - 대칭적 인접행렬정규화처리 (xử lý chuẩn hóa ma trận kề đối xứng)
  - 인접행렬정규화처리 기법 (kỹ thuật xử lý chuẩn hóa ma trận kề)
  - 인접행렬정규화처리의 수렴속도 (tốc độ hội tụ của xử lý chuẩn hóa ma trận kề)
- **자주 쓰는 문형과 성분:**
  - 인접행렬정규화처리를(를) 수행하여 학습 안정성을 대폭 개선하다 (thực hiện xử lý chuẩn hóa ma trận kề nhằm cải thiện vượt bậc tính ổn định khi học)
  - 인접행렬정규화처리가(이) 고차수 노드로 인한 가중치 쏠림을 보정하다 (xử lý chuẩn hóa ma trận kề hiệu chỉnh sự lệch trọng số do các nút có bậc liên kết cao)
- **사회적 관계·주제별 register:** Lý thuyết phổ đồ thị, đại số ma trận thưa, tối ưu hóa thuật toán GCN.
- **예문:**
  - 학습 초기 발산을 막기 위해 자기 루프를 추가한 후 대칭 인접행렬정규화처리를 거치는 것이 표준적이다.
- **Dịch:**
  - Để ngăn chặn phân kỳ ở giai đoạn đầu huấn luyện, việc thêm liên kết tự thân (self-loop) rồi thực hiện xử lý chuẩn hóa ma trận kề đối xứng là chuẩn mực tiêu chuẩn.
- **어휘 연결:**
  - 유의어: `차수행렬` (ma trận bậc degree matrix)
  - 관련어: `스펙트럴그래프이론` (lý thuyết đồ thị phổ)
- **영어 참고:** `adjacency matrix normalization processing` — xử lý chuẩn hóa ma trận kề

---

### 이웃노드정보집약

- **발음:** [이웃노드정보집약]
- **품사:** 명사
- **핵심 의미:** 중심 노드와 직접 연결된 주변 이웃 노드들의 특징 벡터들을 평균, 합, 최댓값 등의 순열 불변(permutation invariant) 함수로 모으는 연산.
- **베트남어 뜻:** Tập hợp thông tin nút lân cận (phép toán gom các vector đặc trưng của các nút lân cận trực tiếp bằng các hàm bất biến hoán vị như trung bình, tổng, max)
- **뉘앙스와 사용법:** Bảo đảm mô hình nhận diện cấu trúc đồ thị đồng nhất bất kể thứ tự đánh số hay liệt kê các nút lân cận.
- **재사용 가능한 콜로케이션·청크:**
  - 효과적 이웃노드정보집약 (tập hợp thông tin nút lân cận hiệu quả)
  - 이웃노드정보집약 함수 (hàm tập hợp thông tin nút lân cận)
  - 이웃노드정보집약의 순열불변성 (tính bất biến hoán vị của tập hợp thông tin nút lân cận)
- **자주 쓰는 문형과 성분:**
  - 이웃노드정보집약을(를) 통해 국소적 부분 구조의 맥락을 흡수하다 (thông qua việc tập hợp thông tin nút lân cận để hấp thụ ngữ cảnh của cấu trúc bộ phận cục bộ)
  - 이웃노드정보집약이(가) 노드의 최종 표현 벡터 품질을 결정하다 (việc tập hợp thông tin nút lân cận quyết định chất lượng vector biểu diễn cuối cùng của nút)
- **사회적 관계·주제별 register:** Đại số toán tử đồ thị, thuật toán bất biến hoán vị, biểu diễn đặc trưng nơ-ron.
- **예문:**
  - 단순 평균 대신 주의 집중 메커니즘을 적용한 이웃노드정보집약 방식은 노드 분류 정확도를 크게 향상했다.
- **Dịch:**
  - Phương thức tập hợp thông tin nút lân cận áp dụng cơ chế chú ý thay vì trung bình giản đơn đã cải thiện đáng kể độ chính xác phân loại nút.
- **어휘 연결:**
  - 유의어: `순열불변함수` (hàm bất biến hoán vị)
  - 관련어: `어그리게이션연산` (phép toán tập hợp aggregation)
- **영어 참고:** `neighbor node information aggregation` — tập hợp thông tin từ các nút lân cận

---

### 그래프합성곱연산

- **발음:** [그래프합성곱연산]
- **품사:** 명사
- **핵심 의미:** 전통적인 이미지 CNN의 필터 컨볼루션을 불규칙한 그래프 구조로 일반화하여, 노드의 특성과 이웃 연결 구조를 가중 결합하여 변환하는 연산.
- **베트남어 뜻:** Phép toán tích chập đồ thị (phép toán tổng quát hóa tích chập bộ lọc của CNN truyền thống sang cấu trúc đồ thị bất quy tắc, biến đổi kết hợp trọng số đặc trưng nút và cấu trúc kết nối lân cận)
- **뉘앙스와 사용법:** Có hai trường phái chính: tiếp cận phổ (spectral approach dựa trên Fourier biến đổi đồ thị) và tiếp cận không gian (spatial approach dựa trên láng giềng trực tiếp).
- **재사용 가능한 콜로케이션·청크:**
  - 공간적 그래프합성곱연산 (phép toán tích chập đồ thị không gian)
  - 그래프합성곱연산 레이어 (lớp phép toán tích chập đồ thị)
  - 그래프합성곱연산의 수식체계 (hệ thống công thức của phép toán tích chập đồ thị)
- **자주 쓰는 문형과 성분:**
  - 그래프합성곱연산을(를) 다층으로 적층하여 수용 영역을 넓히다 (xếp chồng nhiều tầng phép toán tích chập đồ thị để mở rộng vùng tiếp nhận receptive field)
  - 그래프합성곱연산이(가) 비유클리드 데이터의 고차원 특징을 효과적으로 추출하다 (phép toán tích chập đồ thị trích xuất hiệu quả các đặc trưng cao chiều của dữ liệu phi Euclid)
- **사회적 관계·주제별 register:** Học sâu hình học, xử lý tín hiệu trên đồ thị, thị giác máy tính đồ thị.
- **예문:**
  - 그래프합성곱연산 레이어를 거치면서 각 원자 노드는 주변 화학 결합의 전자적 성질을 학습하게 된다.
- **Dịch:**
  - Khi đi qua lớp phép toán tích chập đồ thị, mỗi nút nguyên tử sẽ học được tính chất điện tử của các liên kết hóa học xung quanh.
- **어휘 연결:**
  - 유의어: `스펙트럴합성곱` (tích chập phổ)
  - 관련어: `공간기반합성곱` (tích chập dựa trên không gian)
- **영어 참고:** `graph convolution operation` — phép toán tích chập đồ thị

---

### 과도한평활화문제

- **발음:** [과도한평활화문제]
- **품사:** 명사
- **핵심 의미:** 그래프 신경망의 레이어를 깊게 쌓을수록 모든 노드의 임베딩 벡터가 서로 구별할 수 없을 만큼 비슷해져 분류 성능이 급락하는 고질적 병목 현상(Oversmoothing).
- **베트남어 뜻:** Vấn đề làm phẳng mượt quá mức (hiện tượng nút thắt cổ chai khi xếp chồng quá nhiều tầng GNN khiến vector nhúng của mọi nút trở nên giống hệt nhau không thể phân biệt, làm tụt dốc hiệu năng phân loại)
- **뉘앙스와 사용법:** Thách thức lớn nhất cản trở việc xây dựng các mô hình GNN sâu (deep GNNs) tương tự như ResNet trong thị giác máy tính.
- **재사용 가능한 콜로케이션·청크:**
  - 심각한 과도한평활화문제 (vấn đề làm phẳng mượt quá mức nghiêm trọng)
  - 과도한평활화문제 해결 (giải quyết vấn đề làm phẳng mượt quá mức)
  - 과도한평활화문제의 발생원인 (nguyên nhân phát sinh vấn đề làm phẳng mượt quá mức)
- **자주 쓰는 문형과 성분:**
  - 과도한평활화문제를(를) 잔차 연결과 드롭엣지 기법으로 극복하다 (vượt qua vấn đề làm phẳng mượt quá mức bằng liên kết số dư residual và kỹ thuật drop-edge)
  - 과도한평활화문제가(이) 딥 그래프 모델의 층수를 3-4층으로 제한하다 (vấn đề làm phẳng mượt quá mức giới hạn số tầng của mô hình đồ thị sâu ở mức 3-4 tầng)
- **사회적 관계·주제별 register:** Động lực học hội tụ mô hình, tối ưu hóa mạng nơ-ron sâu, phân tích phân phối vector.
- **예문:**
  - 레이어를 8층 이상으로 늘리자 과도한평활화문제가 발생하여 노드 간의 식별력이 급격히 상실되었다.
- **Dịch:**
  - Khi tăng số lớp lên trên 8 tầng, vấn đề làm phẳng mượt quá mức đã phát sinh khiến khả năng phân biệt giữa các nút bị mất đi nhanh chóng.
- **어휘 연결:**
  - 유의어: `오버스무딩` (hiện tượng over-smoothing)
  - 관련어: `노드식별력상실` (mất khả năng nhận diện phân biệt nút)
- **영어 참고:** `oversmoothing problem` — vấn đề làm phẳng mượt quá độ trong GNN

---

### 노드특성임베딩표상

- **발음:** [노드특성임베딩표상]
- **품사:** 명사
- **핵심 의미:** 노드가 지닌 고유한 속성과 그래프 위상 내에서의 위치적 특성을 저차원의 연속적인 밀집 벡터로 변환하여 표현한 수학적 상태값.
- **베트남어 뜻:** Biểu diễn nhúng đặc trưng nút (giá trị trạng thái toán học biến đổi thuộc tính vốn có của nút và đặc trưng vị trí trong tô-pô đồ thị thành vector đặc liên tục số chiều thấp)
- **뉘앙스와 사용법:** Đầu ra cốt lõi của các tầng GNN, đóng vai trò đầu vào cho các tác vụ xuôi dòng như phân loại nút, dự đoán liên kết hay phân cụm.
- **재사용 가능한 콜로케이션·청크:**
  - 고품질 노드특성임베딩표상 (biểu diễn nhúng đặc trưng nút chất lượng cao)
  - 노드특성임베딩표상 추출 (trích xuất biểu diễn nhúng đặc trưng nút)
  - 노드특성임베딩표상의 잠재공간 (không gian tiềm ẩn của biểu diễn nhúng đặc trưng nút)
- **자주 쓰는 문형과 성분:**
  - 노드특성임베딩표상을(를) 생성하여 하류 분류 모델의 입력값으로 쓰다 (tạo ra biểu diễn nhúng đặc trưng nút để dùng làm giá trị đầu vào cho mô hình phân loại hạ nguồn)
  - 노드특성임베딩표상이(가) 복잡한 네트워크 속성을 집약적으로 보존하다 (biểu diễn nhúng đặc trưng nút bảo tồn tập trung các thuộc tính mạng phức hợp)
- **사회적 관계·주제별 register:** Học biểu diễn (representation learning), không gian tiềm ẩn (latent space), phân tích đa chiều.
- **예문:**
  - 학습이 완료된 노드특성임베딩표상을 2차원으로 축소하여 시각화하니 동일 군집 노드들이 명확히 모였다.
- **Dịch:**
  - Khi giảm chiều và trực quan hóa biểu diễn nhúng đặc trưng nút đã học xong sang không gian 2 chiều, các nút cùng cụm đã tụ lại rõ rệt.
- **어휘 연결:**
  - 유의어: `밀집벡터` (vector đặc dense vector)
  - 관련어: `잠재표상공간` (không gian biểu diễn tiềm ẩn)
- **영어 참고:** `node feature embedding representation` — biểu diễn nhúng đặc trưng của nút

---

### 서브그래프패턴인식

- **발음:** [서브그래프패턴인식]
- **품사:** 명사
- **핵심 의미:** 전체 그래프 내부에서 반복적으로 나타나는 특정 연결 모티프나 작은 부분 그래프(고리 구조, 클리크 등)의 특징적 위상 형태를 모델이 탐지하고 학습하는 능력.
- **베트남어 뜻:** Nhận diện mẫu đồ thị con (khả năng mô hình phát hiện và học hỏi các hình thái tô-pô đặc trưng của motif kết nối hay đồ thị con nhỏ xuất hiện lặp lại trong toàn bộ đồ thị)
- **뉘앙스와 사용법:** Tối quan trọng trong hóa học tính toán (nhận diện vòng benzen, nhóm chức) và an ninh mạng (phát hiện chuỗi giao dịch rửa tiền bất thường).
- **재사용 가능한 콜로케이션·청크:**
  - 정밀한 서브그래프패턴인식 (nhận diện mẫu đồ thị con chuẩn xác)
  - 서브그래프패턴인식 알고리즘 (thuật toán nhận diện mẫu đồ thị con)
  - 서브그래프패턴인식의 정확도 (độ chính xác của việc nhận diện mẫu đồ thị con)
- **자주 쓰는 문형과 성분:**
  - 서브그래프패턴인식을(를) 통해 화합물의 유효 약리 작용기를 식별하다 (thông qua nhận diện mẫu đồ thị con để định danh nhóm chức dược lý hữu hiệu của hợp chất)
  - 서브그래프패턴인식이(가) 금융 사기 거래망을 조기에 탐지하다 (việc nhận diện mẫu đồ thị con giúp phát hiện sớm mạng lưới giao dịch gian lận tài chính)
- **사회적 관계·주제별 register:** Khai phá đồ thị (graph mining), sinh tin học cấu trúc, phát hiện bất thường an ninh.
- **예문:**
  - GNN 기반의 서브그래프패턴인식 기술은 단백질 표면의 결합 포켓 구조를 놀라운 속도로 찾아냈다.
- **Dịch:**
  - Công nghệ nhận diện mẫu đồ thị con dựa trên GNN đã tìm ra cấu trúc túi liên kết trên bề mặt protein với tốc độ đáng kinh ngạc.
- **어휘 연결:**
  - 유의어: `네트워크모티프` (motif mạng network motif)
  - 관련어: `클리크탐색` (tìm kiếm nhóm liên kết hoàn chỉnh clique)
- **영어 참고:** `subgraph pattern recognition` — nhận diện mô thức đồ thị con

---

### 어텐션가중치부여망

- **발음:** [어텐션가중치부여망]
- **품사:** 명사
- **핵심 의미:** 모든 이웃 노드를 동등하게 취급하지 않고 중심 노드와의 관련성이나 중요도에 따라 차등적인 어텐션(Attention) 가중치를 동적으로 계산하여 부여하는 신경망 구조(GAT).
- **베트남어 뜻:** Mạng gán trọng số chú ý (kiến trúc mạng nơ-ron như GAT tính toán và gán trọng số chú ý động mang tính phân hóa tùy theo mức độ liên quan và tầm quan trọng thay vì coi mọi nút lân cận như nhau)
- **뉘앙스와 사용법:** Cho phép mô hình tập trung vào các kết nối cốt lõi và bỏ qua nhiễu từ các nút lân cận không liên quan, cải thiện khả năng diễn giải.
- **재사용 가능한 콜로케이션·청크:**
  - 적응형 어텐션가중치부여망 (mạng gán trọng số chú ý thích ứng)
  - 어텐션가중치부여망 구조 (cấu trúc mạng gán trọng số chú ý)
  - 어텐션가중치부여망의 해석가능성 (khả năng giải thích được của mạng gán trọng số chú ý)
- **자주 쓰는 문형과 성분:**
  - 어텐션가중치부여망을(를) 활용하여 핵심 상관관계를 시각화하다 (tận dụng mạng gán trọng số chú ý để trực quan hóa các mối tương quan cốt lõi)
  - 어텐션가중치부여망이(가) 노이즈성 엣지의 영향을 효과적으로 걸러내다 (mạng gán trọng số chú ý lọc bỏ hiệu quả ảnh hưởng của các cạnh liên kết nhiễu)
- **사회적 관계·주제별 register:** Đồ thị tự chú ý (Graph Attention Network), cơ chế chú ý nơ-ron, học sâu diễn giải.
- **예문:**
  - 어텐션가중치부여망을 도입하자 분자 내에서 활성에 가장 크게 기여하는 원자 쌍의 연결 강도가 뚜렷이 드러났다.
- **Dịch:**
  - Khi áp dụng mạng gán trọng số chú ý, cường độ liên kết của các cặp nguyên tử đóng góp lớn nhất vào hoạt tính trong phân tử đã lộ rõ.
- **어휘 연결:**
  - 유의어: `그래프어텐션네트워크` (mạng chú ý đồ thị GAT)
  - 관련어: `소프트맥스정규화` (chuẩn hóa softmax)
- **영어 참고:** `attention weighting network` — mạng gán trọng số chú ý

---

### 그래프풀링차원축소

- **발음:** [그래프풀링차원축소]
- **품사:** 명사
- **핵심 의미:** 노드 수가 많은 거대 그래프를 계층적으로 축소하거나 하나의 고정 크기 벡터로 요약하기 위해 클러스터링 기반으로 노드를 묶고 차원을 줄이는 연산(DiffPool 등).
- **베트남어 뜻:** Giảm chiều gộp đồ thị (phép toán gộp cụm các nút và giảm số chiều dựa trên phân cụm nhằm thu nhỏ phân tầng đồ thị khổng lồ hoặc tóm tắt thành một vector kích thước cố định)
- **뉘앙스와 사용법:** Cần thiết cho bài toán phân loại toàn đồ thị (graph-level classification) như dự đoán tính chất của cả một phân tử hay văn bản.
- **재사용 가능한 콜로케이션·청크:**
  - 계층적 그래프풀링차원축소 (giảm chiều gộp đồ thị mang tính phân tầng)
  - 그래프풀링차원축소 기법 (kỹ thuật giảm chiều gộp đồ thị)
  - 그래프풀링차원축소의 정보보존율 (tỷ lệ bảo tồn thông tin của giảm chiều gộp đồ thị)
- **자주 쓰는 문형과 성분:**
  - 그래프풀링차원축소를(를) 거쳐 그래프 단위의 단일 표상 벡터를 도출하다 (qua bước giảm chiều gộp đồ thị rút ra vector biểu diễn đơn nhất ở cấp độ đồ thị)
  - 그래프풀링차원축소가(이) 연산 복잡도를 줄이면서 전역적 위상 특징을 유지하다 (việc giảm chiều gộp đồ thị duy trì các đặc trưng tô-pô toàn cục trong khi giảm độ phức tạp tính toán)
- **사회적 관계·주제별 register:** Phân cấp đồ thị (hierarchical pooling), phân loại toàn thể đồ thị, tối ưu hóa tính toán.
- **예문:**
  - 미분 가능한 그래프풀링차원축소 알고리즘은 거대한 분자 그래프의 전역 구조적 특징을 손실 없이 압축했다.
- **Dịch:**
  - Thuật toán giảm chiều gộp đồ thị khả vi đã nén các đặc trưng cấu trúc toàn cục của đồ thị phân tử khổng lồ mà không làm mất mát thông tin.
- **어휘 연결:**
  - 유의어: `계층적풀링` (gộp phân tầng hierarchical pooling)
  - 관련어: `글로벌애버리지풀링` (gộp trung bình toàn cục)
- **영어 참고:** `graph pooling dimensionality reduction` — giảm chiều gộp thông tin đồ thị

---

### 엣지연결성예측모델

- **발음:** [엣지연결성예측모델]
- **품사:** 명사
- **핵심 의미:** 그래프 내에서 두 노드 사이에 새로운 연결선(엣지)이 형성될 확률이나 기존에 누락된 연결 관계의 유무를 예측하는 머신러닝 모델(Link Prediction).
- **베트남어 뜻:** Mô hình dự đoán tính kết nối của cạnh (mô hình học máy dự đoán xác suất hình thành cạnh liên kết mới giữa hai nút hoặc sự tồn tại của quan hệ liên kết bị thiếu sót)
- **뉘앙스와 사용법:** Ứng dụng trực tiếp vào tính năng gợi ý kết bạn trên Facebook, gợi ý mua kèm sản phẩm trên sàn thương mại điện tử hoặc tương tác thuốc - thuốc.
- **재사용 가능한 콜로케이션·청크:**
  - 정교한 엣지연결성예측모델 (mô hình dự đoán tính kết nối của cạnh tinh vi)
  - 엣지연결성예측모델 평가 (đánh giá mô hình dự đoán tính kết nối của cạnh)
  - 엣지연결성예측모델의 정확도 (độ chính xác của mô hình dự đoán tính kết nối của cạnh)
- **자주 쓰는 문형과 성분:**
  - 엣지연결성예측모델을(를) 구축하여 잠재적 단백질 상호작용을 발굴하다 (xây dựng mô hình dự đoán tính kết nối của cạnh để khai phá các tương tác protein tiềm năng)
  - 엣지연결성예측모델이(가) 사용자 간의 숨겨진 친밀도를 포착하다 (mô hình dự đoán tính kết nối của cạnh nắm bắt độ thân thiết tiềm ẩn giữa những người dùng)
- **사회적 관계·주제별 register:** Dự đoán liên kết (link prediction), mạng xã hội học toán, tin sinh học tương tác.
- **예문:**
  - 연구팀은 엣지연결성예측모델을 통해 기존 문헌에 보고되지 않은 새로운 약물 부작용 상호작용을 예측했다.
- **Dịch:**
  - Nhóm nghiên cứu thông qua mô hình dự đoán tính kết nối của cạnh đã dự đoán các tương tác tác dụng phụ thuốc mới chưa từng được báo cáo trong y văn.
- **어휘 연결:**
  - 유의어: `링크예측` (dự đoán liên kết link prediction)
  - 관련어: `인접확률추정` (ước lượng xác suất kề lân)
- **영어 참고:** `edge connectivity prediction model` — mô hình dự đoán kết nối cạnh liên kết

---

### 동형그래프판별검증

- **발음:** [동형그래프판별검증]
- **품사:** 명사
- **핵심 의미:** 두 개의 그래프가 노드의 이름이나 레이아웃만 다를 뿐 위상학적으로 동일한 구조를 지니고 있는지 수학적으로 판별하고 GNN의 표현력 한계를 측정하는 검증(Weisfeiler-Lehman 테스트).
- **베트남어 뜻:** Kiểm chứng phân biệt đồ thị đẳng cấu (việc xác minh toán học xem hai đồ thị có cùng cấu trúc tô-pô giống hệt nhau dù khác tên nút hay cách bố trí, đo lường giới hạn biểu đạt của GNN qua kiểm định WL)
- **뉘앙스와 사용법:** Thước đo lý thuyết chuẩn (1-WL test) để đánh giá xem một kiến trúc GNN có khả năng phân biệt các cấu trúc đồ thị khác nhau mạnh tới đâu.
- **재사용 가능한 콜로케이션·청크:**
  - 엄밀한 동형그래프판별검증 (kiểm chứng phân biệt đồ thị đẳng cấu chặt chẽ)
  - 동형그래프판별검증 수행 (tiến hành kiểm chứng phân biệt đồ thị đẳng cấu)
  - 동형그래프판별검증의 한계치 (ngưỡng giới hạn của kiểm chứng phân biệt đồ thị đẳng cấu)
- **자주 쓰는 문형과 성분:**
  - 동형그래프판별검증을(를) 통해 신경망의 구조적 표현력을 이론적으로 증명하다 (thông qua kiểm chứng phân biệt đồ thị đẳng cấu để chứng minh lý thuyết năng lực biểu đạt cấu trúc của mạng nơ-ron)
  - 동형그래프판별검증이(가) 모델이 특정 대칭 구조를 구별하지 못함을 밝혀내다 (kiểm chứng phân biệt đồ thị đẳng cấu làm sáng tỏ việc mô hình không thể phân biệt một số cấu trúc đối xứng cụ thể)
- **사회적 관계·주제별 register:** Lý thuyết đồ thị toán học, bài toán đẳng cấu đồ thị (Graph Isomorphism), lý thuyết độ phức tạp tính toán.
- **예문:**
  - 표준적인 GCN 모델은 1차 WL 동형그래프판별검증 수준의 표현력 한계를 벗어나지 못한다는 한계가 있다.
- **Dịch:**
  - Mô hình GCN tiêu chuẩn có hạn chế là không thể vượt qua giới hạn năng lực biểu đạt ở mức kiểm chứng phân biệt đồ thị đẳng cấu WL bậc 1.
- **어휘 연결:**
  - 유의어: `바이스파일러레만검정` (kiểm định Weisfeiler-Lehman)
  - 관련어: `그래프동형성` (tính đẳng cấu đồ thị)
- **영어 참고:** `graph isomorphism discrimination verification` — kiểm chứng phân biệt đẳng cấu đồ thị

---

### 이종그래프메타경로

- **발음:** [이종그래프메타경로]
- **품사:** 명사
- **핵심 의미:** 다양한 유형의 노드(저자, 논문, 학회 등)와 엣지로 구성된 이종 정보 네트워크(HIN)에서 특정 의미론적 관계를 정의하기 위해 구성된 복합 연결 경로(Meta-path).
- **베트남어 뜻:** Đường siêu liên kết mạng dị thể (chuỗi đường dẫn kết nối phức hợp được thiết lập để định nghĩa quan hệ ngữ nghĩa cụ thể trong mạng thông tin dị thể HIN gồm nhiều loại nút và cạnh khác nhau)
- **뉘앙스와 사용법:** Ví dụ đường dẫn 저자-논문-저자 (Tác giả - Bài báo - Tác giả) biểu thị quan hệ đồng tác giả, giúp mô hình khai thác ngữ nghĩa đa tầng phong phú.
- **재사용 가능한 콜로케이션·청크:**
  - 의미론적 이종그래프메타경로 (đường siêu liên kết mạng dị thể mang tính ngữ nghĩa)
  - 이종그래프메타경로 탐색 (tìm kiếm đường siêu liên kết mạng dị thể)
  - 이종그래프메타경로 기반 추천 (gợi ý dựa trên đường siêu liên kết mạng dị thể)
- **자주 쓰는 문형과 성분:**
  - 이종그래프메타경로를(를) 설정하여 학술 논문 간의 잠재적 인용 관계를 포착하다 (thiết lập đường siêu liên kết mạng dị thể để nắm bắt quan hệ trích dẫn tiềm năng giữa các bài báo khoa học)
  - 이종그래프메타경로가(이) 복잡한 상호작용의 도메인 지식을 효과적으로 반영하다 (đường siêu liên kết mạng dị thể phản ánh hiệu quả tri thức miền của các tương tác phức hợp)
- **사회적 관계·주제별 register:** Mạng dị thể (Heterogeneous Information Network), đồ thị tri thức ngữ nghĩa, công cụ tìm kiếm học thuật.
- **예문:**
  - 사용자-상품-카테고리-상품으로 이어지는 이종그래프메타경로는 전자상거래 추천 알고리즘의 정밀도를 크게 끌어올렸다.
- **Dịch:**
  - Đường siêu liên kết mạng dị thể Người dùng - Sản phẩm - Danh mục - Sản phẩm đã nâng cao đáng kể độ chính xác của thuật toán gợi ý thương mại điện tử.
- **어휘 연결:**
  - 유의어: `이종정보네트워크` (mạng thông tin dị thể HIN)
  - 관련어: `시맨틱경로분석` (phân tích đường đi ngữ nghĩa)
- **영어 참고:** `heterogeneous graph meta-path` — đường siêu quan hệ trên đồ thị dị thể

---

### 귀납적학습표현력

- **발음:** [귀납적학습표현력]
- **품사:** 명사
- **핵심 의미:** 학습 과정에서 전혀 보지 못했던 새로운 노드나 완전히 새로운 서브그래프가 주어졌을 때도 기존 파라미터를 일반화하여 정확한 임베딩을 추론해 낼 수 있는 모델의 일반화 역량(Inductive Capability).
- **베트남어 뜻:** Năng lực biểu đạt học quy nạp (năng lực khái quát hóa của mô hình suy luận ra nhúng chính xác bằng cách áp dụng tham số có sẵn ngay cả khi gặp nút mới toanh hay đồ thị con hoàn toàn mới chưa từng thấy khi huấn luyện)
- **뉘앙스와 사용법:** Phân biệt giữa mô hình truyền dẫn (transductive như DeepWalk chỉ nhúng các nút cố định có sẵn) và mô hình quy nạp (inductive như GraphSAGE có thể nhúng nút mới xuất hiện bất kỳ lúc nào).
- **재사용 가능한 콜로케이션·청크:**
  - 우수한 귀납적학습표현력 (năng lực biểu đạt học quy nạp xuất sắc)
  - 귀납적학습표현력 검증 (kiểm chứng năng lực biểu đạt học quy nạp)
  - 귀납적학습표현력의 확장 (mở rộng năng lực biểu đạt học quy nạp)
- **자주 쓰는 문형과 성분:**
  - 귀납적학습표현력을(를) 입증하여 실시간 스트리밍 소셜 네트워크에 배치하다 (chứng minh năng lực biểu đạt học quy nạp để triển khai vào mạng xã hội luồng thời gian thực)
  - 귀납적학습표현력이(가) 신규 유입 사용자의 초기 콜드스타트 문제를 해결하다 (năng lực biểu đạt học quy nạp giải quyết bài toán khởi động lạnh ban đầu của người dùng mới gia nhập)
- **사회적 관계·주제별 register:** Học quy nạp (Inductive learning), bài toán khởi động lạnh (Cold-start), học máy động thái.
- **예문:**
  - GraphSAGE 프레임워크는 강력한 귀납적학습표현력을 갖추고 있어 신규 노드 추가 시 전체 재학습이 필요 없다.
- **Dịch:**
  - Khung làm việc GraphSAGE sở hữu năng lực biểu đạt học quy nạp mạnh mẽ nên không cần huấn luyện lại toàn bộ khi thêm các nút mới.
- **어휘 연결:**
  - 유의어: `인덕티브러닝` (học quy nạp inductive learning)
  - 관련어: `트랜스덕티브한계` (hạn chế của học truyền dẫn transductive)
- **영어 참고:** `inductive learning expressive power` — năng lực biểu đạt học quy nạp

---

### 분자구조예측네트워크

- **발음:** [분자구조예측네트워크]
- **품사:** 명사
- **핵심 의미:** 원자를 노드로, 화학 결합을 엣지로 모델링하여 신약 후보 물질의 독성, 용해도, 표적 단백질 결합 친화도 등 3차원 분자 물성을 고속으로 시뮬레이션하는 특화된 인공지능 신경망.
- **베트남어 뜻:** Mạng dự đoán cấu trúc phân tử (mạng nơ-ron AI chuyên biệt mô hình hóa nguyên tử thành nút và liên kết hóa học thành cạnh để mô phỏng siêu tốc các tính chất phân tử 3D như độc tính, độ tan, ái lực liên kết mục tiêu của thuốc)
- **뉘앙스와 사용법:** Ứng dụng mang tính cách mạng của GNN trong hóa tin học và phát triển thuốc (AI Drug Discovery) thay thế cho các thí nghiệm ướt tốn kém hàng năm trời.
- **재사용 가능한 콜로케이션·청크:**
  - 첨단 분자구조예측네트워크 (mạng dự đoán cấu trúc phân tử tiên tiến)
  - 분자구조예측네트워크 훈련 (huấn luyện mạng dự đoán cấu trúc phân tử)
  - 분자구조예측네트워크의 예측정밀도 (độ chuẩn xác dự đoán của mạng dự đoán cấu trúc phân tử)
- **자주 쓰는 문형과 성분:**
  - 분자구조예측네트워크를(를) 가동하여 항암 신약 후보 물질을 신속히 스크리닝하다 (vận hành mạng dự đoán cấu trúc phân tử để sàng lọc nhanh chóng các chất ứng viên thuốc chống ung thư mới)
  - 분자구조예측네트워크가(이) 양자역학적 분자 궤도 에너지를 정확히 근사하다 (mạng dự đoán cấu trúc phân tử xấp xỉ chính xác năng lượng orbital phân tử cơ học lượng tử)
- **사회적 관계·주제별 register:** Phát triển thuốc AI (AI Drug Discovery), hóa tin học tính toán, sinh học phân tử cấu trúc.
- **예문:**
  - 연구진이 개발한 분자구조예측네트워크는 후보 물질 수만 개의 생체 흡수율을 단 몇 시간 만에 스크리닝해 냈다.
- **Dịch:**
  - Mạng dự đoán cấu trúc phân tử do nhóm nghiên cứu phát triển đã sàng lọc tỷ lệ hấp thu sinh học của hàng vạn chất ứng viên chỉ trong vài giờ.
- **어휘 연결:**
  - 유의어: `신약개발인공지능` (trí tuệ nhân tạo phát triển thuốc mới)
  - 관련어: `화합물물성예측` (dự đoán tính chất hợp chất hóa học)
- **영어 참고:** `molecular structure prediction network` — mạng dự đoán cấu trúc phân tử

---

## 단원 종합 읽기 자료: 컴퓨터과학 및 그래프 신경망과 메시지 전달 아키텍처의 언어
<!-- passage_word_count: 105 Korean eojeol; target_set: 그래프신경망아키텍처, 노드메시지전달기법, 인접행렬정규화처리, 이웃노드정보집약, 그래프합성곱연산, 과도한평활화문제, 노드특성임베딩표상, 서브그래프패턴인식, 어텐션가중치부여망, 그래프풀링차원축소, 엣지연결성예측모델, 동형그래프판별검증, 이종그래프메타경로, 귀납적학습표현력, 분자구조예측네트워크 -->
첨단 인공지능 딥러닝 연구진은 비유클리드 기하학적 공간 데이터를 효과적으로 학습하기 위해 차세대 그래프신경망아키텍처 딥러닝 학습 모델을 새롭게 구축했다. 학습 효율을 높이는 차수 불균형을 해소하는 정밀 인접행렬정규화처리 과정을 거쳐 고속 노드메시지전달기법 루틴을 실행하고 이웃노드정보집약 함수를 통해 공간적 그래프합성곱연산 과정을 완벽히 수행했다. 계층이 깊어질수록 모든 노드의 특징이 같아지는 고질적인 과도한평활화문제 현상을 방지하고자 스킵 잔차 연결 구조를 설계하고 저차원 노드특성임베딩표상 변별력을 유지했다. 동적 어텐션가중치부여망 모듈과 계층적 그래프풀링차원축소 기법을 유기적으로 결합하여 복잡한 서브그래프패턴인식 성능을 대폭 끌어올렸다. 또한 미지의 노드 쌍에 대한 엣지연결성예측모델 정확도를 확보하고 복잡한 이종그래프메타경로 기반의 관계적 위상 관계성을 정밀 학습했다. 나아가 바이오 신약 발굴을 위한 분자구조예측네트워크 구축에 동형그래프판별검증 테스트를 거쳐 귀납적학습표현력 한계를 비약적으로 극복하는 혁신적인 성과를 거두었다.

**베트남어 번역:**
Đội ngũ nghiên cứu học sâu trí tuệ nhân tạo tiên tiến nhằm học tập hiệu quả dữ liệu không gian hình học phi Euclid đã xây dựng mới mô hình học sâu học tập kiến trúc mạng thần kinh đồ thị thế hệ mới. Trải qua quá trình xử lý chuẩn hóa ma trận kề chuẩn xác giải quyết mất cân bằng bậc đỉnh nâng cao hiệu quả học tập, họ đã thực thi chu trình kỹ thuật truyền thông điệp nút tốc độ cao và hoàn tất xuất sắc quá trình phép toán tích chập đồ thị không gian thông qua hàm tổng hợp thông tin nút láng giềng. Nhằm ngăn chặn hiện tượng vấn đề làm mịn quá mức kinh niên khi các đặc trưng của mọi nút trở nên giống nhau khi các tầng sâu hơn, họ thiết kế cấu trúc kết nối phần dư bỏ qua và duy trì khả năng phân biệt của biểu diễn nhúng đặc trưng nút hạ chiều. Kết hợp hữu cơ mô-đun mạng gán trọng số chú ý động và kỹ thuật giảm chiều gộp đồ thị phân tầng, hiệu năng nhận dạng mẫu đồ thị con phức tạp đã được nâng cao đáng kể. Thêm vào đó, họ đã đảm bảo độ chính xác của mô hình dự đoán tính kết nối cạnh đối với các cặp nút chưa biết và học chuẩn xác các quan hệ hình thái mang tính quan hệ dựa trên đường dẫn meta đồ thị dị thể phức tạp. Xa hơn nữa, trong việc xây dựng mạng dự đoán cấu trúc phân tử phục vụ phát hiện thuốc mới y sinh, trải qua bài kiểm tra kiểm chứng phân biệt đồ thị đẳng cấu, họ đã đạt được thành quả đổi mới vượt qua bước ngoặt giới hạn năng lực biểu diễn học tập quy nạp.
