<!-- source_policy: original explanations, examples, and passage; quantum-computing-quantum-error-correction-and-surface-codes terminology cross-checked conceptually, not copied -->
# 양자컴퓨팅 및 양자 오류 정정과 표면 부호 알고리즘의 언어

양자오류정정알고리즘 및 이차원표면부호격자 기반 물리적큐비트오버헤드와 논리적큐비트인코딩 양자컴퓨팅 및 양자 오류 정정과 표면 부호 알고리즘의 언어

---

### 양자오류정정알고리즘

- **발음:** [양:자오:류정:정알:고리즘]
- **품사:** 명사
- **핵심 의미:** 양자 상태의 중첩(Superposition)과 얽힘(Entanglement)을 붕괴시키는 환경적 열 잡음이나 결어긋남(Decoherence) 현상에 맞서, 복제의 불가능성 정리(No-cloning theorem)를 우회하여 여러 물리적 큐비트의 얽힘 패턴 속에 양자 정보를 분산 인코딩하고 오류를 실시간 탐지·교정하는 컴퓨터 알고리즘(Quantum Error Correction, QEC).
- **베트남어 뜻:** Thuật toán sửa lỗi lượng tử Quantum Error Correction Algorithm QEC (thuật toán máy tính mã hóa phân tán thông tin lượng tử bên trong mô hình vướng víu của nhiều qubit vật lý và phát hiện sửa chữa lỗi theo thời gian thực vượt qua định lý cấm nhân bản No-cloning theorem để chống lại tiếng ồn nhiệt môi trường hoặc hiện tượng mất kết hợp decoherence phá vỡ sự chồng chập và vướng víu của trạng thái lượng tử)
- **뉘앙스와 사용법:** Chìa khóa vạn năng biến máy tính lượng tử từ đồ chơi trong phòng thí nghiệm thành cỗ máy siêu điện toán thương mại: không có sửa lỗi lượng tử, máy tính lượng tử không thể chạy bất kỳ phép tính phức tạp nào.
- **재사용 가능한 콜로케이션·청크:**
  - 실시간 양자오류정정알고리즘 (thuật toán sửa lỗi lượng tử thời gian thực)
  - 양자오류정정알고리즘 구현 (hiện thực hóa thuật toán sửa lỗi lượng tử)
  - 양자오류정정알고리즘의 연산 복잡도 (độ phức tạp tính toán của thuật toán sửa lỗi lượng tử)
- **자주 쓰는 문형과 성분:**
  - 양자오류정정알고리즘을(를) 활용하여 외부 환경 노이즈로 인한 큐비트의 정보 손실을 효과적으로 복구하다 (vận dụng thuật toán sửa lỗi lượng tử để phục hồi hiệu quả sự mất mát thông tin của qubit do tiếng ồn môi trường bên ngoài)
  - 양자오류정정알고리즘이(가) 내결함성 양자 컴퓨팅 구현의 가장 핵심적인 전제 조건으로 자리 잡았다 (thuật toán sửa lỗi lượng tử đã trở thành điều kiện tiên quyết cốt lõi nhất để hiện thực hóa tính toán lượng tử chịu lỗi)
- **사회적 관계·주제별 register:** Lý thuyết thông tin lượng tử (Quantum Information Theory), thuật toán máy tính lượng tử, kỹ thuật vật lý lượng tử.
- **예문:**
  - 연구진은 쇼어 알고리즘의 대규모 실행을 위해 효율적인 양자오류정정알고리즘을 칩셋에 탑재했다.
- **Dịch:**
  - Nhóm nghiên cứu đã tích hợp thuật toán sửa lỗi lượng tử hiệu quả vào chipset để thực thi thuật toán Shor trên quy mô lớn.
- **어휘 연결:**
  - 유의어: `내결함성양자컴퓨팅` (tính toán lượng tử chịu lỗi fault-tolerant quantum computing)
  - 관련어: `결어긋남현상` (hiện tượng mất kết hợp decoherence phenomenon)
- **영어 참고:** `quantum error correction algorithm` — thuật toán bảo vệ và khôi phục thông tin lượng tử khỏi nhiễu môi trường

---

### 이차원표면부호격자

- **발음:** [이:차원표:면부:호격짜]
- **품사:** 명사
- **핵심 의미:** 평면 2차원 격자(Lattice) 구조 위에 물리적 데이터 큐비트와 보조 큐비트(Ancilla qubit)를 바둑판 형태로 교대로 배열하고, 오직 인접한 이웃 큐비트 간의 국소적 얽힘 상호작용만을 이용하여 비트 반전 및 위상 반전 오류를 동시에 탐지·교정할 수 있도록 고안된 위상수학적 양자 오류 정정 부호 아키텍처(Surface Code).
- **베트남어 뜻:** Lưới mã bề mặt hai chiều 2D Surface Code Lattice (kiến trúc mã sửa lỗi lượng tử tô pô được thiết kế sắp xếp xen kẽ các qubit dữ liệu vật lý và qubit phụ trợ ancilla theo dạng bàn cờ trên cấu trúc lưới hai chiều phẳng, chỉ sử dụng tương tác vướng víu cục bộ giữa các qubit lân cận để đồng thời phát hiện và sửa chữa cả lỗi đảo bit lẫn lỗi đảo pha)
- **뉘앙스와 사용법:** Tiêu chuẩn công nghiệp hàng đầu hiện nay được Google Quantum AI và IBM lựa chọn vì có ngưỡng chịu lỗi cao nhất (khoảng 1%) và chỉ cần kết nối các qubit nằm sát cạnh nhau.
- **재사용 가능한 콜로케이션·청크:**
  - 확장형 이차원표면부호격자 (lưới mã bề mặt hai chiều có thể mở rộng)
  - 이차원표면부호격자 배열 (bố trí lưới mã bề mặt hai chiều)
  - 이차원표면부호격자의 국소 연결성 (tính kết nối cục bộ của lưới mã bề mặt hai chiều)
- **자주 쓰는 문형과 성분:**
  - 초전도 칩 위에 이차원표면부호격자를(를) 구현하여 장거리 배선 없이 인접 큐비트 간 결합만으로 안정적인 제어를 달성하다 (hiện thực hóa lưới mã bề mặt hai chiều trên chip siêu dẫn để đạt được sự điều khiển ổn định chỉ bằng liên kết giữa các qubit lân cận mà không cần dây nối tầm xa)
  - 이차원표면부호격자의(의) 격자 크기(코드 거리 d)가 증가할수록 논리적 큐비트의 오류 발생 확률이 지수함수적으로 감소한다 (khi kích thước lưới khoảng cách mã d của lưới mã bề mặt hai chiều tăng lên, xác suất phát sinh lỗi của qubit logic sẽ giảm theo hàm số mũ)
- **사회적 관계·주제별 register:** Kiến trúc phần cứng lượng tử (Quantum Hardware Architecture), vật lý chất rắn, thiết kế mạch tích hợp lượng tử.
- **예문:**
  - 구글 연구팀은 72개의 큐비트로 구성된 시카모어 프로세서에서 이차원표면부호격자 동작을 성공적으로 시연했다.
- **Dịch:**
  - Nhóm nghiên cứu của Google đã trình diễn thành công hoạt động của lưới mã bề mặt hai chiều trên bộ xử lý Sycamore gồm 72 qubit.
- **어휘 연결:**
  - 유의어: `코드거리파라미터` (tham số khoảng cách mã code distance parameter d)
  - 관련어: `보조앤실라큐비트` (qubit phụ trợ ancilla qubit)
- **영어 참고:** `2D surface code lattice` — mô hình mạng lưới 2D sắp xếp các qubit để thực hiện mã sửa lỗi bề mặt

---

### 물리적큐비트오버헤드

- **발음:** [물:리적큐:비트오:버헤드]
- **품사:** 명사
- **핵심 의미:** 환경 노이즈로부터 완전히 격리되어 완벽한 연산을 수행하는 단 1개의 무결점 '논리적 큐비트(Logical Qubit)'를 인코딩하고 유지하기 위해 투입되어야 하는 수백에서 수천 개의 실제 하드웨어 '물리적 큐비트(Physical Qubit)'의 양적 비율 및 이에 수반되는 극저온 냉각·배선·제어 장비의 막대한 추가 연산 오버헤드.
- **베트남어 뜻:** Tải phụ trội qubit vật lý Physical Qubit Overhead (tỷ lệ định lượng hàng trăm đến hàng nghìn qubit vật lý phần cứng thực tế bắt buộc phải đưa vào cùng chi phí tải phụ trội tính toán bổ sung khổng lồ về thiết bị làm lạnh cực sâu, dây dẫn và điều khiển đi kèm nhằm mã hóa và duy trì duy nhất một qubit logic hoàn hảo không tì vết được cách ly hoàn toàn khỏi nhiễu môi trường)
- **뉘앙스와 사용법:** Thách thức kỹ thuật lớn nhất của loài người: để giải mã mã hóa RSA 2048-bit cần khoảng vài nghìn qubit logic, đồng nghĩa với việc cần tới hàng triệu qubit vật lý hoạt động đồng thời.
- **재사용 가능한 콜로케이션·청크:**
  - 막대한 물리적큐비트오버헤드 (tải phụ trội qubit vật lý khổng lồ)
  - 물리적큐비트오버헤드 감축 기술 (công nghệ cắt giảm tải phụ trội qubit vật lý)
  - 물리적큐비트오버헤드의 경제성 평가 (đánh giá tính kinh tế của tải phụ trội qubit vật lý)
- **자주 쓰는 문형과 성분:**
  - 표면 부호 방식을 사용할 경우 논리 큐비트 하나당 천 개 이상의 물리적큐비트오버헤드가(이) 소요된다 (khi sử dụng phương thức mã bề mặt, sẽ tiêu tốn tải phụ trội qubit vật lý trên 1.000 qubit cho mỗi qubit logic)
  - 차세대 양자 LDPC 부호를 도입하여 물리적큐비트오버헤드를(를) 기존의 10분의 1 수준으로 획기적으로 낮추다 (áp dụng mã LDPC lượng tử thế hệ mới để hạ thấp đột phá tải phụ trội qubit vật lý xuống mức 1/10 so với trước đây)
- **사회적 관계·주제별 register:** Kỹ thuật hệ thống lượng tử (Quantum Systems Engineering), ước tính tài nguyên phần cứng, kinh tế học siêu máy tính.
- **예문:**
  - 엔지니어들은 양자 컴퓨터의 상용화를 앞당기기 위해 물리적큐비트오버헤드를 획기적으로 줄이는 고효율 압축 부호를 연구 중이다.
- **Dịch:**
  - Các kỹ sư đang nghiên cứu các mã nén hiệu quả cao giúp giảm đáng kể tải phụ trội qubit vật lý nhằm đẩy nhanh quá trình thương mại hóa máy tính lượng tử.
- **어휘 연결:**
  - 유의어: `양자엘디피씨부호` (mã LDPC lượng tử quantum LDPC code)
  - 관련어: `극저온냉각비용` (chi phí làm lạnh cực sâu cryogenic cooling cost)
- **영어 참고:** `physical qubit overhead` — số lượng qubit vật lý cần thiết để tạo lập một qubit logic hoàn hảo không lỗi

---

### 논리적큐비트인코딩

- **발음:** [논:리적큐:비틴:코딩]
- **품사:** 명사
- **핵심 의미:** 단일 물리적 소자의 결함에 취약한 양자 정보를 개별 큐비트에 직접 담지 않고, 양자 얽힘을 이용하여 다수의 물리적 큐비트가 공유하는 거시적 집합 상태(양자 부분공간, Code Subspace) 속에 수학적으로 매핑하여 보호하는 분산 정보 부호화 기법.
- **베트남어 뜻:** Mã hóa qubit logic Logical Qubit Encoding (kỹ thuật mã hóa thông tin phân tán bảo vệ thông tin lượng tử dễ bị tổn thương bởi các khuyết tật của từng phần tử vật lý đơn lẻ bằng cách không lưu trực tiếp lên từng qubit riêng rẽ mà sử dụng vướng víu lượng tử để ánh xạ toán học vào không gian con mã Code Subspace thuộc trạng thái tập hợp vĩ mô được chia sẻ bởi nhiều qubit vật lý)
- **뉘앙스와 사용법:** Đơn vị tính toán chân chính trong thế giới lượng tử tương lai: các phép toán logic sẽ được thực thi trên qubit logic này mà không bao giờ bị gián đoạn bởi các lỗi vụn vặt bên dưới.
- **재사용 가능한 콜로케이션·청크:**
  - 견고한 논리적큐비트인코딩 (mã hóa qubit logic vững chắc)
  - 논리적큐비트인코딩 방식 (phương thức mã hóa qubit logic)
  - 논리적큐비트인코딩의 수명 연장 (kéo dài tuổi thọ của mã hóa qubit logic)
- **자주 쓰는 문형과 성분:**
  - 다수의 큐비트를 얽힘 상태로 묶어 결함 없는 단일 논리적큐비트인코딩을(를) 달성하는 데 성공했다 (đã thành công trong việc liên kết nhiều qubit thành trạng thái vướng víu để đạt được mã hóa qubit logic đơn lẻ không khuyết tật)
  - 논리적큐비트인코딩 상태에서(에서) 수행되는 범용 양자 게이트 연산은 물리적 큐비트보다 훨씬 긴 오류 없는 계산 시간을 제공한다 (các phép toán cổng lượng tử vạn năng thực thi ở trạng thái mã hóa qubit logic cung cấp thời gian tính toán không lỗi dài hơn nhiều so với qubit vật lý)
- **사회적 관계·주제별 register:** Mật mã học lượng tử, lý thuyết mã hóa đại số lượng tử, mô hình tính toán lượng tử.
- **예문:**
  - 하버드 연구팀은 중성 원자 배열을 이용하여 48개의 논리적큐비트인코딩을 구현하고 복잡한 양자 알고리즘을 시연했다.
- **Dịch:**
  - Nhóm nghiên cứu Harvard đã sử dụng mảng nguyên tử trung hòa để hiện thực hóa 48 mã hóa qubit logic và trình diễn các thuật toán lượng tử phức tạp.
- **어휘 연결:**
  - 유의어: `코드부분공간` (không gian con mã code subspace)
  - 관련어: `범용양자게이트` (cổng lượng tử vạn năng universal quantum gate)
- **영어 참고:** `logical qubit encoding` — kỹ thuật phân tán trạng thái lượng tử lên nhiều phần tử để tạo nên một đơn vị tính toán bền vững

---

### 신드롬측정반복사이클

- **발음:** [신:드롬측쩡반:복싸이클]
- **품사:** 명사
- **핵심 의미:** 표면 부호 격자에서 데이터 큐비트에 직접 손을 대어 양자 중첩 정보를 파괴하지 않고, 보조 큐비트와의 얽힘 게이트 연산을 거쳐 보조 큐비트만을 고속으로 측정함으로써, 데이터 큐비트 어딘가에서 오류가 발생했는지(신드롬 값)를 1마이크로초 안팎의 극도로 짧은 주기로 끊임없이 되풀이하여 읽어내는 오류 감시 주기 단계.
- **베트남어 뜻:** Chu kỳ lặp lại đo hội chứng Syndrome Measurement Repetition Cycle (giai đoạn chu kỳ giám sát lỗi đọc đi đọc lại liên tục trong chu kỳ cực ngắn khoảng 1 micro giây xem có phát sinh lỗi ở đâu đó trên các qubit dữ liệu hay không giá trị hội chứng syndrome, thông qua các phép toán cổng vướng víu với qubit phụ trợ rồi đo đạc tốc độ cao duy nhất các qubit phụ trợ mà không trực tiếp chạm vào qubit dữ liệu làm phá vỡ thông tin chồng chập lượng tử trong lưới mã bề mặt)
- **뉘앙스와 사용법:** Hơi thở nhịp đập của máy tính lượng tử: giống như hệ thống radar quét liên tục hàng triệu lần mỗi giây để phát hiện vết nứt lỗi ngay khi nó vừa xuất hiện.
- **재사용 가능한 콜로케이션·청크:**
  - 초고속 신드롬측정반복사이클 (chu kỳ lặp lại đo hội chứng siêu tốc)
  - 신드롬측정반복사이클 최적화 (tối ưu hóa chu kỳ lặp lại đo hội chứng)
  - 신드롬측정반복사이클 동안의 잡음 제어 (kiểm soát tiếng ồn trong chu kỳ lặp lại đo hội chứng)
- **자주 쓰는 문형과 성분:**
  - 실시간 양자 오류 정정을 완벽히 달성하기 위해서는 신드롬측정반복사이클을(를) 결맞음 시간보다 훨씬 빠르게 수행해야 한다 (để đạt được sự sửa lỗi lượng tử theo thời gian thực hoàn hảo, chu kỳ lặp lại đo hội chứng phải được thực hiện nhanh hơn nhiều so với thời gian kết hợp)
  - 신드롬측정반복사이클에서(에서) 누적된 이진 신드롬 히스토리를 분석하여 시공간 그래프 상의 최적 오류 경로를 추적하다 (phân tích lịch sử hội chứng nhị phân tích tụ trong chu kỳ lặp lại đo hội chứng để truy vết lộ trình lỗi tối ưu trên đồ thị không-thời gian)
- **사회적 관계·주제별 register:** Hệ thống điều khiển thời gian thực lượng tử (Quantum FPGA Control), điện tử học vi ba cực thấp nhiệt, xử lý tín hiệu lượng tử.
- **예문:**
  - 양자 제어 보드는 수백 나노초 단위의 정밀 신드롬측정반복사이클을 지원하도록 특수 설계된 전용 회로를 내장했다.
- **Dịch:**
  - Bo mạch điều khiển lượng tử đã nhúng mạch chuyên dụng được thiết kế đặc thù để hỗ trợ chu kỳ lặp lại đo hội chứng chuẩn xác ở đơn vị vài trăm nano giây.
- **어휘 연결:**
  - 유의어: `오류신드롬추출` (trích xuất hội chứng lỗi error syndrome extraction)
  - 관련어: `양자비파괴측정` (đo lường không phá hủy lượng tử quantum non-demolition QND measurement)
- **영어 참고:** `syndrome measurement repetition cycle` — tiến trình lặp đi lặp lại việc đo đạc các qubit phụ trợ để phát hiện sai lệch mà không làm hỏng dữ liệu

---

### 안정자연산자측정값

- **발음:** [안:정자연:산자측쩡값]
- **품사:** 명사
- **핵심 의미:** 안정자 부호(Stabilizer Code)에서 격자 상의 인접 큐비트들에 대해 정의된 파울리 연산자(X 연산자 또는 Z 연산자)들의 곱으로 구성된 국소 관측량(예: X-안정자 및 Z-안정자)을 측정했을 때 출력되는 고윳값(+1 또는 -1)으로, 오류의 발생 유무와 종류를 정확히 판별해 주는 이진 신드롬 정보.
- **베트남어 뜻:** Giá trị đo toán tử ổn định Stabilizer Operator Measurement Value (giá trị riêng +1 hoặc -1 thu được khi đo lường các đại lượng quan sát cục bộ như X-stabilizer và Z-stabilizer cấu tạo từ tích của các toán tử Pauli toán tử X hoặc toán tử Z được định nghĩa đối với các qubit lân cận trên lưới trong mã ổn định Stabilizer Code, là thông tin hội chứng nhị phân giúp phân định chuẩn xác sự có mặt và chủng loại của lỗi)
- **뉘앙스와 사용법:** Khi giá trị đo bằng +1, trạng thái hoàn toàn bình thường; khi chuyển sang -1, chứng tỏ đã có một hạt lỗi (quasiparticle) xuất hiện tại nút đó.
- **재사용 가능한 콜로케이션·청크:**
  - 이진 안정자연산자측정값 (giá trị đo toán tử ổn định nhị phân)
  - 안정자연산자측정값 판독 (đọc giá trị đo toán tử ổn định)
  - 안정자연산자측정값의 불일치 분석 (phân tích sự bất nhất của giá trị đo toán tử ổn định)
- **자주 쓰는 문형과 성분:**
  - 안정자연산자측정값이(가) 정상 상태인 +1에서 오류 상태인 -1로 반전되는 순간 디코더가 즉각적인 복구 동작에 돌입한다 (khoảnh khắc giá trị đo toán tử ổn định bị đảo từ +1 trạng thái bình thường sang -1 trạng thái lỗi, bộ giải mã lập tức bước vào hoạt động phục hồi)
  - 모든 격자 꼭짓점에서 안정자연산자측정값을(를) 동시에 병렬로 취합하여 2차원 결함 분포 맵을 실시간으로 생성하다 (thu thập song song đồng thời các giá trị đo toán tử ổn định tại mọi đỉnh lưới để tạo lập bản đồ phân bố khuyết tật hai chiều theo thời gian thực)
- **사회적 관계·주제별 register:** Hình thức luận đại số ổn định (Stabilizer Formalism), cơ học lượng tử toán học, lý thuyết toán tử Pauli.
- **예문:**
  - 양자 프로세서는 고유한 안정자연산자측정값을 초고속 판독하여 큐비트의 비트 플립 여부를 단숨에 감지해냈다.
- **Dịch:**
  - Bộ xử lý lượng tử đã đọc cực nhanh giá trị đo toán tử ổn định đặc thù để phát hiện trong chớp mắt xem có xảy ra lỗi lật bit của qubit hay không.
- **어휘 연결:**
  - 유의어: `파울리고윳값` (giá trị riêng Pauli Pauli eigenvalue)
  - 관련어: `안정자형식론` (hình thức luận ổn định stabilizer formalism)
- **영어 참고:** `stabilizer operator measurement value` — kết quả đo lường toán tử ổn định phản ánh sự tồn tại của lỗi thông qua giá trị +1 hoặc -1

---

### 내결함성양자연산회로

- **발음:** [내:결함썽양:자연:산회:로]
- **품사:** 명사
- **핵심 의미:** 회로를 구성하는 물리적 양자 게이트, 배선, 측정 소자, 메모리 저장소 중 일부에서 임의의 물리적 오류가 발생하더라도, 그 오류가 인접 큐비트로 걷잡을 수 없이 전파(Catastrophic cascade)되지 않고 국소적으로 억제·정정되도록 설계된 수학적으로 검증된 결함 허용 양자 회로(Fault-Tolerant Quantum Circuit).
- **베트남어 뜻:** Mạch tính toán lượng tử chịu lỗi Fault-Tolerant Quantum Circuit (mạch lượng tử chịu lỗi được kiểm chứng toán học được thiết kế sao cho ngay cả khi phát sinh các lỗi vật lý ngẫu nhiên ở một phần của các cổng lượng tử vật lý, dây dẫn, phần tử đo lường hoặc kho lưu trữ bộ nhớ cấu thành mạch, thì lỗi đó cũng không bị lan truyền mất kiểm soát sang các qubit lân cận mà được kiềm chế và sửa chữa cục bộ)
- **뉘앙스와 사용법:** Nguyên tắc thiết kế tối cao của John Preskill: bảo đảm rằng quá trình sửa lỗi không vô tình làm đẻ thêm nhiều lỗi mới nguy hiểm hơn bản thân lỗi ban đầu.
- **재사용 가능한 콜로케이션·청크:**
  - 범용 내결함성양자연산회로 (mạch tính toán lượng tử chịu lỗi vạn năng)
  - 내결함성양자연산회로 설계 (thiết kế mạch tính toán lượng tử chịu lỗi)
  - 내결함성양자연산회로의 게이트 충실도 (độ trung thực cổng của mạch tính toán lượng tử chịu lỗi)
- **자주 쓰는 문형과 성분:**
  - 매직 상태 증류 기법을 결합하여 비클리포드 T 게이트를 지원하는 완벽한 내결함성양자연산회로을(를) 구현하다 (kết hợp kỹ thuật chưng cất trạng thái ma thuật để hiện thực hóa mạch tính toán lượng tử chịu lỗi hoàn hảo hỗ trợ cổng T phi Clifford)
  - 내결함성양자연산회로의(의) 이론적 안전성이 입증됨으로써 암호 해독 및 신약 분자 시뮬레이션의 현실화 가능성이 열렸다 (tính an toàn lý thuyết của mạch tính toán lượng tử chịu lỗi được chứng minh đã mở ra khả năng hiện thực hóa việc giải mã mật mã và mô phỏng phân tử thuốc mới)
- **사회적 관계·주제별 register:** Thiết kế máy tính lượng tử tương lai, lý thuyết ngưỡng dung sai (Threshold Theorem), khoa học máy tính lượng tử.
- **예문:**
  - 양자 알고리즘 개발자들은 노이즈 환경에서도 안정적으로 동작하는 내결함성양자연산회로 모델을 소프트웨어에 적용했다.
- **Dịch:**
  - Các nhà phát triển thuật toán lượng tử đã áp dụng mô hình mạch tính toán lượng tử chịu lỗi vận hành ổn định ngay cả trong môi trường nhiễu vào phần mềm.
- **어휘 연결:**
  - 유의어: `매직상태증류` (chưng cất trạng thái ma thuật magic state distillation)
  - 관련어: `클리포드군연산` (phép toán nhóm Clifford Clifford group operations)
- **영어 참고:** `fault-tolerant quantum circuit` — mạch điện toán lượng tử được thiết kế để cô lập và xử lý lỗi không cho lan rộng

---

### 위상수학적양자보호

- **발음:** [위:상수:학쩍양:자보:호]
- **품사:** 명사
- **핵심 의미:** 양자 정보를 개별 소자의 미시적인 물리량(스핀, 전하)에 담지 않고, 격자 전체의 대역적 위상수학적 성질(위상적 불변량, 닫힌 루프, 애니온 브레이딩 등)에 분산 저장함으로써, 국소적인 환경 요동이나 미세한 외부 전자기 잡음이 시스템 전체의 양자 정보를 결코 교란할 수 없도록 원천 차단하는 물리적 보호 원리.
- **베트남어 뜻:** Bảo vệ lượng tử tô pô Topological Quantum Protection (nguyên lý bảo vệ vật lý ngăn chặn tận gốc việc các dao động môi trường cục bộ hay nhiễu điện từ bên ngoài siêu nhỏ làm nhiễu loạn thông tin lượng tử toàn hệ thống, bằng cách lưu trữ phân tán thông tin lượng tử vào các tính chất tô pô toàn cục của toàn bộ lưới như bất biến lượng tô pô, vòng lặp kín, bện bện anyon thay vì lưu vào các đại lượng vật lý vi mô của từng phần tử riêng lẻ như spin hay điện tích)
- **뉘앙스와 사용법:** Giống như việc thắt nút một sợi dây thừng: bạn có thể rung lắc sợi dây tùy thích nhưng nút thắt (thông tin tô pô) sẽ không bao giờ bị tuột ra trừ khi cắt đứt cả sợi dây.
- **재사용 가능한 콜로케이션·청크:**
  - 선천적 위상수학적양자보호 (bảo vệ lượng tử tô pô bẩm sinh)
  - 위상수학적양자보호 기전 (cơ chế bảo vệ lượng tử tô pô)
  - 위상수학적양자보호의 물리적 견고성 (độ bền bỉ vật lý của bảo vệ lượng tử tô pô)
- **자주 쓰는 문형과 성분:**
  - 표면 부호는 위상수학적양자보호 메커니즘을 통해 큐비트 격자 내의 국소적 결함을 자연스럽게 무력화한다 (mã bề mặt vô hiệu hóa một cách tự nhiên các khuyết tật cục bộ trong lưới qubit thông qua cơ chế bảo vệ lượng tử tô pô)
  - 마요라나 페르미온을 이용한 비아벨 애니온 브레이딩은 궁극적인 하드웨어 기반 위상수학적양자보호을(를) 제공할 것으로 기대된다 (việc bện anyon phi Abel sử dụng fermion Majorana được kỳ vọng sẽ cung cấp sự bảo vệ lượng tử tô pô dựa trên phần cứng tối hậu)
- **사회적 관계·주제별 register:** Vật lý vật chất ngưng tụ tô pô (Topological Condensed Matter), bất biến lượng tô pô, máy tính lượng tử tô pô.
- **예문:**
  - 물리학자들은 2차원 초전도 격자에서 구현된 위상수학적양자보호 덕분에 큐비트의 생존 시간을 수백 배 연장할 수 있었다.
- **Dịch:**
  - Các nhà vật lý học đã có thể kéo dài thời gian sống của qubit lên hàng trăm lần nhờ sự bảo vệ lượng tử tô pô được hiện thực hóa trên lưới siêu dẫn 2 chiều.
- **어휘 연결:**
  - 유의어: `비아벨애니온` (anyon phi Abel non-Abelian anyon)
  - 관련어: `위상적불변량` (bất biến lượng tô pô topological invariant)
- **영어 참고:** `topological quantum protection` — nguyên lý bảo vệ thông tin lượng tử dựa trên cấu trúc hình học tô pô không đổi của hệ thống

---

### 비트반전오류정정코드

- **발음:** [비:트반:전오:류정:정코드]
- **품사:** 명사
- **핵심 의미:** 고전 컴퓨터의 0과 1이 뒤바뀌는 것처럼 양자 큐비트의 상태가 |0>에서 |1>로 원치 않게 뒤집히는 파울리 X 오류(Bit-flip error)를 탐지하고, 3개 이상의 물리적 큐비트를 얽어 다수결 원리와 패리티 측정을 통해 본래의 상태로 역회전 복원하는 기본 오류 정정 부호.
- **베트남어 뜻:** Mã sửa lỗi đảo bit Bit-Flip Error Correction Code (mã sửa lỗi cơ bản phát hiện lỗi Pauli X bit-flip error khi trạng thái của qubit lượng tử bị lật không mong muốn từ |0> sang |1> giống như việc đảo lộn giữa 0 và 1 của máy tính cổ điển, và liên kết từ 3 qubit vật lý trở lên để quay ngược phục hồi về trạng thái ban đầu thông qua nguyên tắc biểu quyết đa số và đo chẵn lẻ parity)
- **뉘앙스와 사용법:** Bước đi đầu tiên của Peter Shor: chứng minh cho thế giới thấy rằng trạng thái lượng tử mong manh hoàn toàn có thể được sửa lỗi mà không làm sụp đổ hàm sóng.
- **재사용 가능한 콜로케이션·청크:**
  - 단순 비트반전오류정정코드 (mã sửa lỗi đảo bit đơn giản)
  - 비트반전오류정정코드 알고리즘 (thuật toán mã sửa lỗi đảo bit)
  - 비트반전오류정정코드의 패리티 검사 (kiểm tra chẵn lẻ của mã sửa lỗi đảo bit)
- **자주 쓰는 문형과 성분:**
  - 3-큐비트 비트반전오류정정코드를(를) 적용하여 개별 소자에서 발생한 파울리 X 오류를 즉각 복구하다 (áp dụng mã sửa lỗi đảo bit 3-qubit để lập tức phục hồi lỗi Pauli X phát sinh ở từng phần tử riêng lẻ)
  - 비트반전오류정정코드만으로는(으로는) 양자 고유의 위상 오류를 막을 수 없으므로 위상 반전 코드와의 결합이 필수적이다 (chỉ riêng mã sửa lỗi đảo bit thì không thể ngăn chặn lỗi pha đặc thù của lượng tử nên việc kết hợp với mã đảo pha là bắt buộc)
- **사회적 관계·주제별 register:** Lý thuyết mã hóa lượng tử cổ điển, mạch lượng tử sơ cấp, kiểm soát lỗi phần cứng.
- **예문:**
  - 양자 컴퓨팅 입문 강의에서는 가장 직관적인 모델로 3-큐비트 비트반전오류정정코드의 수학적 원리를 다룬다.
- **Dịch:**
  - Trong bài giảng nhập môn điện toán lượng tử, nguyên lý toán học của mã sửa lỗi đảo bit 3-qubit được giảng dạy như mô hình trực quan nhất.
- **어휘 연결:**
  - 유의어: `파울리엑스오류` (lỗi Pauli X Pauli-X error bit flip)
  - 관련어: `패리티측정회로` (mạch đo tính chẵn lẻ parity measurement circuit)
- **영어 참고:** `bit-flip error correction code` — mã sửa lỗi lượng tử chuyên biệt để phát hiện và khôi phục sự đảo lộn trạng thái bit |0> và |1>

---

### 위상반전오류추적기법

- **발음:** [위:상반:전오:류추:적기법]
- **품사:** 명사
- **핵심 의미:** 고전 컴퓨터에는 존재하지 않고 양자역학에서만 나타나는 현상으로, 큐비트의 확률 진폭은 유지된 채 상대적 위상만이 반전되는 파울리 Z 오류(|0> + |1> 이 |0> - |1> 로 변질되는 Phase-flip error)를 아다마르(Hadamard) 변환을 통해 비트 반전 오류로 치환하여 정밀하게 위치를 추적하고 교정하는 기술.
- **베트남어 뜻:** Kỹ thuật truy vết lỗi đảo pha Phase-Flip Error Tracking Technique (kỹ thuật truy vết vị trí và sửa chữa chuẩn xác bằng cách sử dụng biến đổi Hadamard để chuyển đổi lỗi Pauli Z phase-flip error - hiện tượng không tồn tại ở máy tính cổ điển mà chỉ xuất hiện trong cơ học lượng tử, khi biên độ xác suất của qubit được giữ nguyên nhưng pha tương đối bị đảo ngược biến đổi từ |0> + |1> thành |0> - |1> - thành lỗi đảo bit)
- **뉘앙스와 사용법:** Điểm khác biệt căn bản giữa sửa lỗi cổ điển và sửa lỗi lượng tử: phải xử lý cả sự biến đổi vô hình của pha sóng mà mắt thường không thể nhìn thấy.
- **재사용 가능한 콜로케이션·청크:**
  - 정밀 위상반전오류추적기법 (kỹ thuật truy vết lỗi đảo pha chuẩn xác)
  - 위상반전오류추적기법 도입 (đưa vào kỹ thuật truy vết lỗi đảo pha)
  - 위상반전오류추적기법의 신뢰도 (độ tin cậy của kỹ thuật truy vết lỗi đảo pha)
- **자주 쓰는 문형과 성분:**
  - 아다마르 게이트를 전후에 배치하는 위상반전오류추적기법을(를) 활용하여 위상 오류를 X-신드롬 측정으로 변환하다 (vận dụng kỹ thuật truy vết lỗi đảo pha bố trí các cổng Hadamard ở phía trước và sau để chuyển đổi lỗi pha thành phép đo X-syndrome)
  - 위상반전오류추적기법이(가) 완벽히 결합되어야만 비로소 임의의 연속적인 양자 오류를 모두 커버할 수 있다 (chỉ khi kỹ thuật truy vết lỗi đảo pha được kết hợp hoàn hảo thì mới có thể bao quát toàn bộ mọi lỗi lượng tử liên tục ngẫu nhiên)
- **사회적 관계·주제별 register:** Vật lý lượng tử quang học, hình thức luận toán tử mật độ, đo lường lượng tử chính xác.
- **예문:**
  - 연구소는 환경 전자기장 요동에 취약한 큐비트의 결맞음을 유지하기 위해 고속 위상반전오류추적기법을 개발했다.
- **Dịch:**
  - Viện nghiên cứu đã phát triển kỹ thuật truy vết lỗi đảo pha tốc độ cao nhằm duy trì tính kết hợp của các qubit dễ bị tổn thương trước sự dao động của điện từ trường môi trường.
- **어휘 연결:**
  - 유의어: `파울리지오류` (lỗi Pauli Z Pauli-Z error phase flip)
  - 관련어: `아다마르기저변환` (chuyển đổi cơ sở Hadamard Hadamard basis transformation)
- **영어 참고:** `phase-flip error tracking technique` — phương pháp phát hiện và chỉnh sửa sự lệch pha sóng lượng tử giữa các trạng thái cơ sở

---

### 최소무게완전매칭

- **발음:** [최:소무:게완:전매:칭]
- **품사:** 명사
- **핵심 의미:** 표면 부호 격자에서 결함(신드롬 값 -1)들이 감지되었을 때, 시공간 신드롬 그래프 상에서 발생한 결함 꼭짓점 쌍들을 가장 적은 수의 물리적 오류 연쇄(가장 작은 총 가중치)로 연결하는 짝을 찾아내어 본래 상태로 되돌릴 최적의 복구 경로를 다항 시간 내에 계산해내는 핵심 그래프 디코딩 알고리즘(Minimum-Weight Perfect Matching, MWPM).
- **베트남어 뜻:** Ghép cặp hoàn hảo trọng số tối thiểu Minimum-Weight Perfect Matching MWPM (thuật toán giải mã đồ thị cốt lõi tính toán trong thời gian đa thức lộ trình phục hồi tối ưu để đưa về trạng thái ban đầu, bằng cách tìm ra các cặp liên kết các đỉnh khuyết tật phát sinh trên đồ thị hội chứng không-thời gian bằng chuỗi lỗi vật lý ít nhất hay tổng trọng số nhỏ nhất khi phát hiện các khuyết tật giá trị hội chứng -1 trên lưới mã bề mặt)
- **뉘앙스와 사용법:** Bộ não giải mã của máy tính lượng tử: biến bài toán đoán lỗi vô cùng hóc búa thành một bài toán tìm đường đi ngắn nhất trên đồ thị (Jack Edmonds blossom algorithm) chạy cực nhanh trong chip FPGA.
- **재사용 가능한 콜로케이션·청크:**
  - 고속 최소무게완전매칭 (ghép cặp hoàn hảo trọng số tối thiểu tốc độ cao)
  - 최소무게완전매칭 디코더 구현 (hiện thực hóa bộ giải mã ghép cặp hoàn hảo trọng số tối thiểu)
  - 최소무게완전매칭의 시간 복잡도 (độ phức tạp thời gian của ghép cặp hoàn hảo trọng số tối thiểu)
- **자주 쓰는 문형과 성분:**
  - 신드롬 그래프에서 결함 쌍을 최단 거리로 묶어주는 최소무게완전매칭 알고리즘을(를) 통해 오류 복구 속도를 획기적으로 개선하다 (thông qua thuật toán ghép cặp hoàn hảo trọng số tối thiểu gộp các cặp khuyết tật bằng khoảng cách ngắn nhất trên đồ thị hội chứng, cải thiện đột phá tốc độ phục hồi lỗi)
  - 최소무게완전매칭 처리가(이) 다음 신드롬 측정 주기보다 늦어지면 디코딩 지연이 누적되어 시스템이 붕괴될 수 있다 (nếu việc xử lý ghép cặp hoàn hảo trọng số tối thiểu chậm hơn chu kỳ đo hội chứng tiếp theo, độ trễ giải mã sẽ tích tụ và hệ thống có thể sụp đổ)
- **사회적 관계·주제별 register:** Lý thuyết đồ thị tổ hợp, thuật toán giải mã lượng tử (Quantum Decoding), phần cứng FPGA thời gian thực.
- **예문:**
  - 엔지니어들은 실시간 디코딩 병목을 해결하기 위해 블라썸 알고리즘 기반의 하드웨어 가속 최소무게완전매칭 모듈을 제작했다.
- **Dịch:**
  - Các kỹ sư đã chế tạo mô-đun ghép cặp hoàn hảo trọng số tối thiểu tăng tốc bằng phần cứng dựa trên thuật toán Blossom để giải quyết điểm nghẽn giải mã thời gian thực.
- **어휘 연결:**
  - 유의어: `블라썸알고리즘` (thuật toán Blossom Blossom algorithm)
  - 관련어: `신드롬그래프해석` (phân tích đồ thị hội chứng syndrome graph interpretation)
- **영어 참고:** `minimum-weight perfect matching` — thuật toán đồ thị tìm kiếm cấu hình lỗi có khả năng xảy ra cao nhất dựa trên dữ liệu hội chứng

---

### 문턱오류율한계극복

- **발음:** [문:터고:류율한:계극뽁]
- **품사:** 명사
- **핵심 의미:** 양자 오류 정정이 성공하기 위해 개별 물리적 게이트와 측정의 오류율이 반드시 만족해야 하는 이론적 상한선(문턱 오류율, Fault-tolerance Threshold, 표면 부호의 경우 약 1%) 미만으로 실제 하드웨어의 노이즈 수준을 낮추는 데 성공하여, 큐비트 수를 늘릴수록 시스템 전체의 오류율이 오히려 지수적으로 감소하는 진정한 내결함성 단계에 도달하는 물리적 돌파구.
- **베트남어 뜻:** Khắc phục giới hạn tỷ lệ lỗi ngưỡng Fault-Tolerance Threshold Barrier Overcoming (bước đột phá vật lý hạ thấp mức độ nhiễu của phần cứng thực tế xuống dưới giới hạn trên lý thuyết ngưỡng tỷ lệ lỗi khoảng 1% đối với mã bề mặt mà tỷ lệ lỗi của từng cổng vật lý và phép đo bắt buộc phải thỏa mãn để việc sửa lỗi lượng tử thành công, đạt tới giai đoạn chịu lỗi đích thực khi càng tăng số lượng qubit thì tỷ lệ lỗi của toàn bộ hệ thống lại càng giảm theo hàm số mũ)
- **뉘앙스와 사용법:** Ranh giới giữa sự sống và cái chết của máy tính lượng tử: nếu trên ngưỡng, càng thêm qubit càng sinh thêm nhiều lỗi; nếu dưới ngưỡng, càng thêm qubit thì máy tính càng trở nên hoàn hảo không tì vết.
- **재사용 가능한 콜로케이션·청크:**
  - 결정적 문턱오류율한계극복 (khắc phục giới hạn tỷ lệ lỗi ngưỡng mang tính quyết định)
  - 문턱오류율한계극복 실증 (kiểm chứng việc khắc phục giới hạn tỷ lệ lỗi ngưỡng)
  - 문턱오류율한계극복과 물리적 큐비트 성능 (khắc phục giới hạn tỷ lệ lỗi ngưỡng và hiệu năng qubit vật lý)
- **자주 쓰는 문형과 성분:**
  - 하드웨어의 물리 게이트 오차율을 0.1% 이하로 낮춤으로써 마침내 문턱오류율한계극복에(에) 성공하여 양자 우위를 다졌다 (bằng cách hạ thấp tỷ lệ sai số cổng vật lý của phần cứng xuống dưới 0,1%, cuối cùng đã thành công trong việc khắc phục giới hạn tỷ lệ lỗi ngưỡng, củng cố ưu thế lượng tử)
  - 문턱오류율한계극복이(가) 달성되지 않은 상태에서 단순히 큐비트 숫자만을 늘리는 것은 아무런 실질적 연산 이점을 제공하지 못한다 (trong trạng thái việc khắc phục giới hạn tỷ lệ lỗi ngưỡng chưa đạt được, việc chỉ đơn thuần tăng số lượng qubit không mang lại bất kỳ lợi thế tính toán thực chất nào)
- **사회적 관계·주제별 register:** Vật lý lượng tử thực nghiệm, lý thuyết ngưỡng chịu lỗi (Threshold Theorem), kiểm chuẩn phần cứng lượng tử.
- **예문:**
  - 학계는 주요 양자 컴퓨팅 기업이 표면 부호의 문턱오류율한계극복을 실험적으로 증명한 역사적 순간을 대대적으로 보도했다.
- **Dịch:**
  - Giới học thuật đã đưa tin rầm rộ về khoảnh khắc lịch sử khi tập đoàn điện toán lượng tử lớn chứng minh thực nghiệm việc khắc phục giới hạn tỷ lệ lỗi ngưỡng của mã bề mặt.
- **어휘 연결:**
  - 유의어: `내결함성임계값` (giá trị ngưỡng chịu lỗi fault-tolerance threshold value)
  - 관련어: `지수적오류억제` (ức chế lỗi theo hàm số mũ exponential error suppression)
- **영어 참고:** `fault-tolerance threshold barrier overcoming` — bước đột phá vượt qua ngưỡng tỷ lệ lỗi tới hạn để việc thêm qubit giúp giảm lỗi tổng thể

---

### 양자게이트충실도향상

- **발음:** [양:자게:이트충:실도향:상]
- **품사:** 명사
- **핵심 의미:** 초전도 회로나 이온 트랩에서 큐비트를 회전시키고 얽히게 만드는 1큐비트 및 2큐비트 양자 논리 게이트 연산이 수학적으로 이상적인 유니터리 변환(Unitary transformation)과 얼마나 완벽하게 일치하는지를 나타내는 지표인 게이트 충실도(Gate Fidelity)를 99.9% 이상으로 정밀하게 끌어올리는 극초정밀 마이크로파 제어 기술.
- **베트남어 뜻:** Nâng cao độ trung thực cổng lượng tử Quantum Gate Fidelity Enhancement (công nghệ điều khiển vi ba cực kỳ chuẩn xác nâng cao độ trung thực của cổng Gate Fidelity lên trên 99,9% - chỉ số biểu thị mức độ các phép toán cổng logic lượng tử 1-qubit và 2-qubit làm quay và vướng víu các qubit trong mạch siêu dẫn hoặc bẫy ion trùng khớp hoàn hảo với phép biến đổi unita lý tưởng về mặt toán học)
- **뉘앙스와 사용법:** Đặc biệt là cổng 2-qubit (như CNOT hay CZ): vì tương tác giữa 2 qubit rất dễ bị nhiễu, việc đẩy độ trung thực của cổng 2-qubit lên trên 99,9% là điều kiện tiên quyết để chạm tới ngưỡng sửa lỗi.
- **재사용 가능한 콜로케이션·청크:**
  - 극대화된 양자게이트충실도향상 (nâng cao độ trung thực cổng lượng tử được tối đa hóa)
  - 양자게이트충실도향상 기술 개발 (phát triển công nghệ nâng cao độ trung thực cổng lượng tử)
  - 양자게이트충실도향상과 무작위 벤치마킹 (nâng cao độ trung thực cổng lượng tử và kiểm chuẩn ngẫu nhiên hóa)
- **자주 쓰는 문형과 성분:**
  - 정교한 펄스 셰이핑(Pulse Shaping) 기법을 도입하여 2큐비트 양자게이트충실도향상을(를) 99.5%까지 달성했다 (áp dụng kỹ thuật định hình xung tinh vi để đạt được nâng cao độ trung thực cổng lượng tử 2-qubit lên tới 99,5%)
  - 양자게이트충실도향상이(가) 뒷받침되어야만 수천 단계의 심층 양자 회로를 오류 없이 연속적으로 가동할 수 있다 (chỉ khi việc nâng cao độ trung thực cổng lượng tử được bảo đảm thì mới có thể vận hành liên tục hàng nghìn bước mạch lượng tử chuyên sâu mà không gặp lỗi)
- **사회적 관계·주제별 register:** Điều khiển vi ba lượng tử (Microwave Quantum Control), kiểm chuẩn lượng tử ngẫu nhiên (Randomized Benchmarking), vật lý thực nghiệm.
- **예문:**
  - 연구팀은 극저온 감쇄기를 최적화하여 펄스 왜곡을 줄이고 양자게이트충실도향상을 성공적으로 실현했다.
- **Dịch:**
  - Nhóm nghiên cứu đã tối ưu hóa bộ suy hao nhiệt độ cực thấp để giảm méo xung và hiện thực hóa thành công việc nâng cao độ trung thực cổng lượng tử.
- **어휘 연결:**
  - 유의어: `무작위벤치마킹평가` (đánh giá kiểm chuẩn ngẫu nhiên randomized benchmarking RB)
  - 관련어: `이큐비트결합게이트` (cổng kết hợp hai qubit two-qubit entangling gate)
- **영어 참고:** `quantum gate fidelity enhancement` — kỹ thuật tinh chỉnh xung điều khiển để các phép tính lượng tử đạt độ chính xác gần như tuyệt đối

---

### 초전도트랜스몬소자

- **발음:** [초:전도트랜:스몬소:자]
- **품사:** 명사
- **핵심 의미:** 조셉슨 접합(Josephson Junction)과 대용량 션트 커패시터(Shunt Capacitor)를 병렬로 결합하여 전하 잡음(Charge Noise)에 대한 민감도를 획기적으로 둔화시키고 인공 원자처럼 비조화 진동자(Anharmonic Oscillator) 에너지 준위를 형성하도록 설계된 대표적인 고체 초전도 큐비트 소자(Transmon Qubit).
- **베트남어 뜻:** Phần tử transmon siêu dẫn Superconducting Transmon Qubit Device (phần tử qubit siêu dẫn thể rắn tiêu biểu được thiết kế bằng cách kết hợp song song tiếp giáp Josephson với tụ điện rẽ nhánh shunt dung lượng lớn để làm suy giảm đột phá độ nhạy đối với nhiễu điện tích charge noise và hình thành các mức năng lượng dao động phi điều hòa anharmonic oscillator giống như nguyên tử nhân tạo)
- **뉘앙스와 사용법:** Ngựa thồ của nền công nghiệp máy tính lượng tử: là loại qubit được chế tạo bằng công nghệ quang khắc bán dẫn tiêu chuẩn và được Google, IBM, Rigetti dùng để chế tạo các siêu máy tính lượng tử hiện nay.
- **재사용 가능한 콜로케이션·청크:**
  - 집적형 초전도트랜스몬소자 (phần tử transmon siêu dẫn tích hợp)
  - 초전도트랜스몬소자의 결맞음 수명 (tuổi thọ kết hợp của phần tử transmon siêu dẫn)
  - 초전도트랜스몬소자 제조 공정 (quy trình chế tạo phần tử transmon siêu dẫn)
- **자주 쓰는 문형과 성분:**
  - 초전도트랜스몬소자는(은) 조셉슨 비선형 인덕턴스를 이용하여 인접한 두 에너지 준위만을 선택적으로 분리해 큐비트로 활용한다 (phần tử transmon siêu dẫn sử dụng độ tự cảm phi tuyến Josephson để phân tách có chọn lọc hai mức năng lượng liền kề làm qubit)
  - 초전도트랜스몬소자 간의 잔류 정전용량 결합을 차단하기 위해 튜너블 커플러 회로를 칩에 통합 배치하다 (tích hợp bố trí mạch ghép nối có thể điều chỉnh trên chip nhằm chặn đứng sự ghép nối điện dung tàn dư giữa các phần tử transmon siêu dẫn)
- **사회적 관계·주제별 register:** Vật lý thiết bị siêu dẫn, mạch điện lượng tử vĩ mô (cQED), chế tạo vi cơ điện tử bán dẫn.
- **예문:**
  - 밀리켈빈 극저온 희석 냉동기 내부에서 작동하는 초전도트랜스몬소자는 마이크로파 펄스로 상태가 제어된다.
- **Dịch:**
  - Phần tử transmon siêu dẫn hoạt động bên trong tủ lạnh pha loãng nhiệt độ cực thấp milli-Kelvin được điều khiển trạng thái bằng các xung vi ba.
- **어휘 연결:**
  - 유의어: `조셉슨접합소자` (phần tử tiếp giáp Josephson Josephson junction device)
  - 관련어: `비조화진동준위` (mức dao động phi điều hòa anharmonic oscillation level)
- **영어 참고:** `superconducting transmon qubit device` — loại qubit siêu dẫn được thiết kế để giảm thiểu nhiễu điện tích và ổn định pha năng lượng

---

### 결맞음시간보존기술

- **발음:** [결:마듬시:간보:존기술]
- **품사:** 명사
- **핵심 의미:** 초전도 회로, 이온 트랩, 다이아몬드 NV 센터 등 큐비트 하드웨어가 외부 환경의 열 진동, 자성 불순물, 전자기파 노이즈와 상호작용하여 양자 중첩 정보(T1 이완 시간)와 위상 결맞음(T2 탈위상 시간)을 잃어버리는 결어긋남을 물리적 재료 개선, 표면 세정, 자기 차폐, 동적 디커플링(Dynamical Decoupling) 펄스를 통해 극대화하여 연장하는 최첨단 양자 보존 기술.
- **베트남어 뜻:** Công nghệ bảo tồn thời gian kết hợp Coherence Time Preservation Technology (công nghệ bảo tồn lượng tử tối tân kéo dài tối đa hiện tượng mất kết hợp - khi phần cứng qubit như mạch siêu dẫn, bẫy ion hay tâm NV kim cương tương tác với dao động nhiệt, tạp chất từ tính và tiếng ồn sóng điện từ của môi trường bên ngoài làm mất thông tin chồng chập lượng tử thời gian hồi phục T1 và kết hợp pha thời gian mất pha T2 - thông qua cải tiến vật liệu vật lý, làm sạch bề mặt, che chắn từ tính và các xung tách rời động học Dynamical Decoupling)
- **뉘앙스와 사용법:** Cuộc chạy đua từng micro giây: nếu thời gian kết hợp quá ngắn, qubit sẽ "quên" sạch dữ liệu trước khi các thuật toán sửa lỗi kịp ra tay can thiệp.
- **재사용 가능한 콜로케이션·청크:**
  - 혁신적 결맞음시간보존기술 (công nghệ bảo tồn thời gian kết hợp mang tính đổi mới)
  - 결맞음시간보존기술 개발 (phát triển công nghệ bảo tồn thời gian kết hợp)
  - 동적 디커플링 기반 결맞음시간보존기술 (công nghệ bảo tồn thời gian kết hợp dựa trên tách rời động học)
- **자주 쓰는 문형과 성분:**
  - 초전도 기판 표면의 유전 손실을 줄이는 특수 식각 공정을 도입하여 독자적인 결맞음시간보존기술을(를) 확립했다 (đưa vào quy trình khắc đặc thù giúp giảm tổn hao điện môi trên bề mặt đế siêu dẫn để xác lập công nghệ bảo tồn thời gian kết hợp độc đắc)
  - 결맞음시간보존기술을(를) 통해 T2 시간을 기존의 수십 마이크로초에서 밀리초 단위로 수십 배 이상 연장하는 데 성공했다 (thông qua công nghệ bảo tồn thời gian kết hợp, đã thành công trong việc kéo dài thời gian T2 từ hàng chục micro giây trước đây lên đơn vị mili giây gấp hàng chục lần)
- **사회적 관계·주제별 register:** Khoa học vật liệu lượng tử, kỹ thuật màng mỏng siêu sạch, điều khiển lượng tử động học.
- **예문:**
  - 양자 센서의 감도를 극대화하기 위해 나노 다이아몬드 내부의 결맞음시간보존기술을 적용한 연구가 활발하다.
- **Dịch:**
  - Nghiên cứu áp dụng công nghệ bảo tồn thời gian kết hợp bên trong kim cương nano nhằm tối đa hóa độ nhạy của cảm biến lượng tử đang diễn ra sôi nổi.
- **어휘 연결:**
  - 유의어: `동적디커플링펄스` (xung tách rời động học dynamical decoupling pulse)
  - 관련어: `종방향이완시간` (thời gian hồi phục dọc longitudinal relaxation time T1)
- **영어 참고:** `coherence time preservation technology` — các giải pháp kỹ thuật và vật liệu nhằm kéo dài thời gian duy trì trạng thái lượng tử của qubit

---

## 단원 종합 읽기 자료: 양자컴퓨팅 및 양자 오류 정정과 표면 부호 알고리즘의 언어
<!-- passage_word_count: 105 Korean eojeol; target_set: 양자오류정정알고리즘, 이차원표면부호격자, 물리적큐비트오버헤드, 논리적큐비트인코딩, 신드롬측정반복사이클, 안정자연산자측정값, 내결함성양자연산회로, 위상수학적양자보호, 비트반전오류정정코드, 위상반전오류추적기법, 최소무게완전매칭, 문턱오류율한계극복, 양자게이트충실도향상, 초전도트랜스몬소자, 결맞음시간보존기술 -->
한국 표준 과학 연구원 산하 국가 양자정보연구소 시스템 전문 엔지니어링 팀은 초전도트랜스몬소자 기반 집적 칩에서 물리적 위상수학적양자보호 원리를 완벽히 구현하기 위해 정밀 고도화된 이차원표면부호격자 아키텍터를 성공적으로 배치했다. 이번에 개발된 첨단 차세대 제어 시스템은 비트반전오류정정코드 방식과 정밀 위상반전오류추적기법 체계를 유기적으로 결합한 실시간 양자오류정정알고리즘 엔진을 전격 가동하였다. 비록 상당한 물리적큐비트오버헤드 연산 비용이 불가피하게 발생하지만 단일 논리적큐비트인코딩 안정성을 극대화하기 위해 매 마이크로초 단위마다 고정밀 신드롬측정반복사이클 핵심 단계를 빈틈없이 실행했다. 상태를 해치지 않는 안정자연산자측정값 판독 데이터를 실시간 최소무게완전매칭 고속 디코더로 처리하여 복잡한 누적 오류 체인을 정확히 복원했다. 지속적인 양자게이트충실도향상 노력과 독자적 결맞음시간보존기술 혁신 개발을 통해 마침내 문턱오류율한계극복 실증에 성공함으로써 대규모 확장형 내결함성양자연산회로 구현을 향한 새롭고 결정적 기술 이정표를 확립했다.

**베트남어 번역:**
Nhóm hệ thống thuộc viện nghiên cứu thông tin lượng tử quốc gia đã bố trí thành công kiến trúc lưới mã bề mặt hai chiều tiên tiến nhằm hiện thực hóa nguyên lý bảo vệ lượng tử tô pô trên chip dựa trên phần tử transmon siêu dẫn. Hệ thống này đã vận hành động cơ thuật toán sửa lỗi lượng tử theo thời gian thực kết hợp hữu cơ phương thức mã sửa lỗi đảo bit và hệ thống kỹ thuật truy vết lỗi đảo pha chuẩn xác. Mặc dù phát sinh chi phí tải phụ trội qubit vật lý khổng lồ, họ đã thực thi không kẽ hở các bước chu kỳ lặp lại đo hội chứng sau mỗi micro giây để tối đa hóa tính ổn định của việc mã hóa qubit logic đơn lẻ. Dữ liệu đọc giá trị đo toán tử ổn định không làm tổn hại trạng thái vướng víu được bộ giải mã ghép cặp hoàn hảo trọng số tối thiểu xử lý tốc độ cao theo thời gian thực để phục hồi chính xác chuỗi lỗi. Thông qua nỗ lực nâng cao độ trung thực cổng lượng tử liên tục và phát triển công nghệ bảo tồn thời gian kết hợp độc đắc, cuối cùng họ đã thành công trong việc kiểm chứng khắc phục giới hạn tỷ lệ lỗi ngưỡng, xác lập cột mốc công nghệ mang tính quyết định hướng tới hiện thực hóa mạch tính toán lượng tử chịu lỗi có thể mở rộng quy mô lớn.
