# 컴퓨터과학 및 그래프 신경망과 메시지 전달 아키텍처의 언어

- 주제 슬러그: `computer-science-graph-neural-networks-and-message-passing`
- 수록 어휘 수: 15개
- 학습 수준: B2–C2 (고급 한국어 및 전문 학술/사회 영역)
- 목표: 컴퓨터과학 및 기계학습 인공지능 분야에서 비유클리드 그래프 데이터의 관계적 특성을 학습하는 그래프 신경망(GNN) 아키텍처, 노드 간 메시지 전달 패러다임, 합성곱 연산과 표현 학습을 다루는 전문 학술 어휘

## 포함 어휘 목록

1. `그래프신경망아키텍처` — Kiến trúc mạng thần kinh đồ thị (hệ thống cấu trúc mô hình mạng nơ-ron học sâu được thiết kế để xử lý và học các mối quan hệ tô-pô trong dữ liệu đồ thị phi Euclid)
2. `노드메시지전달기법` — Kỹ thuật truyền thông điệp giữa các nút (cơ chế cốt lõi trong GNN khi mỗi nút trao đổi vector trạng thái với các nút lân cận, tập hợp thông tin nhận được và cập nhật biểu diễn bản thân)
3. `인접행렬정규화처리` — Xử lý chuẩn hóa ma trận kề (phép toán nhân ma trận kề với căn bậc hai nghịch đảo của ma trận bậc để ngăn chặn sự phân kỳ giá trị do chênh lệch bậc liên kết giữa các nút)
4. `이웃노드정보집약` — Tập hợp thông tin nút lân cận (phép toán gom các vector đặc trưng của các nút lân cận trực tiếp bằng các hàm bất biến hoán vị như trung bình, tổng, max)
5. `그래프합성곱연산` — Phép toán tích chập đồ thị (phép toán tổng quát hóa tích chập bộ lọc của CNN truyền thống sang cấu trúc đồ thị bất quy tắc, biến đổi kết hợp trọng số đặc trưng nút và cấu trúc kết nối lân cận)
6. `과도한평활화문제` — Vấn đề làm phẳng mượt quá mức (hiện tượng nút thắt cổ chai khi xếp chồng quá nhiều tầng GNN khiến vector nhúng của mọi nút trở nên giống hệt nhau không thể phân biệt, làm tụt dốc hiệu năng phân loại)
7. `노드특성임베딩표상` — Biểu diễn nhúng đặc trưng nút (giá trị trạng thái toán học biến đổi thuộc tính vốn có của nút và đặc trưng vị trí trong tô-pô đồ thị thành vector đặc liên tục số chiều thấp)
8. `서브그래프패턴인식` — Nhận diện mẫu đồ thị con (khả năng mô hình phát hiện và học hỏi các hình thái tô-pô đặc trưng của motif kết nối hay đồ thị con nhỏ xuất hiện lặp lại trong toàn bộ đồ thị)
9. `어텐션가중치부여망` — Mạng gán trọng số chú ý (kiến trúc mạng nơ-ron như GAT tính toán và gán trọng số chú ý động mang tính phân hóa tùy theo mức độ liên quan và tầm quan trọng thay vì coi mọi nút lân cận như nhau)
10. `그래프풀링차원축소` — Giảm chiều gộp đồ thị (phép toán gộp cụm các nút và giảm số chiều dựa trên phân cụm nhằm thu nhỏ phân tầng đồ thị khổng lồ hoặc tóm tắt thành một vector kích thước cố định)
11. `엣지연결성예측모델` — Mô hình dự đoán tính kết nối của cạnh (mô hình học máy dự đoán xác suất hình thành cạnh liên kết mới giữa hai nút hoặc sự tồn tại của quan hệ liên kết bị thiếu sót)
12. `동형그래프판별검증` — Kiểm chứng phân biệt đồ thị đẳng cấu (việc xác minh toán học xem hai đồ thị có cùng cấu trúc tô-pô giống hệt nhau dù khác tên nút hay cách bố trí, đo lường giới hạn biểu đạt của GNN qua kiểm định WL)
13. `이종그래프메타경로` — Đường siêu liên kết mạng dị thể (chuỗi đường dẫn kết nối phức hợp được thiết lập để định nghĩa quan hệ ngữ nghĩa cụ thể trong mạng thông tin dị thể HIN gồm nhiều loại nút và cạnh khác nhau)
14. `귀납적학습표현력` — Năng lực biểu đạt học quy nạp (năng lực khái quát hóa của mô hình suy luận ra nhúng chính xác bằng cách áp dụng tham số có sẵn ngay cả khi gặp nút mới toanh hay đồ thị con hoàn toàn mới chưa từng thấy khi huấn luyện)
15. `분자구조예측네트워크` — Mạng dự đoán cấu trúc phân tử (mạng nơ-ron AI chuyên biệt mô hình hóa nguyên tử thành nút và liên kết hóa học thành cạnh để mô phỏng siêu tốc các tính chất phân tử 3D như độc tính, độ tan, ái lực liên kết mục tiêu của thuốc)

## 학습 안내

본 단원의 상세 어휘 해설과 연관 독해 지문은 [05-graph-neural-networks-and-message-passing.md](./05-graph-neural-networks-and-message-passing.md) 파일에서 학습하실 수 있습니다.
