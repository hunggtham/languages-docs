# 컴퓨터과학 및 영지식 증명과 zk-SNARKs 암호학의 언어

- 주제 슬러그: `computer-science-zero-knowledge-proofs-and-zk-snarks`
- 수록 어휘 수: 15개
- 학습 수준: B2–C2 (고급 한국어 및 전문 학술/사회 영역)
- 목표: 현대 암호학 및 분산 컴퓨팅 분야에서 비밀 정보의 노출 없이 명제의 참을 증명하는 영지식 증명(ZKP), 비대화형 간결 영지식 증명(zk-SNARKs), 타원곡선 페어링 및 블록체인 프라이버시 확장을 규명하는 전문 컴퓨터과학 어휘

## 포함 어휘 목록

1. `영지식증명프로토콜` — Giao thức bằng chứng không tiết lộ tri thức (giao thức mật mã học trong đó bên chứng minh Prover chứng minh cho bên xác minh Verifier biết một mệnh đề là đúng hoặc mình nắm giữ bí mật mà tuyệt đối không tiết lộ bất kỳ thông tin cụ thể nào khác về bản thân nội dung bí mật đó)
2. `간결한비대화형증명` — Bằng chứng ngắn gọn phi tương tác zk-SNARKs (đặc tính mật mã học trong đó không cần các vòng đối thoại qua lại tương tác thời gian thực giữa bên chứng minh và bên xác minh, chỉ cần truyền một chuỗi bằng chứng duy nhất cực kỳ ngắn gọn vài trăm byte và thời gian xác minh diễn ra chớp nhoáng trong vài mili giây)
3. `신뢰설정세레머니` — Nghi thức thiết lập đáng tin cậy Trusted Setup Ceremony (giai đoạn khởi tạo hệ thống để tạo khóa chứng minh và khóa xác minh cho một số giao thức zk-SNARKs, trong đó nhiều bên tham gia phân tán cùng sinh ra các tham số bí mật rồi tiêu hủy hoàn toàn "chất thải độc hại" Toxic Waste để triệt tiêu vĩnh viễn nguy cơ làm giả bằng chứng)
4. `타원곡선페어링연산` — Phép toán ghép cặp trên đường cong elliptic Elliptic Curve Pairing (phép toán hàm song tuyến tính ánh xạ các phần tử từ hai nhóm điểm trên đường cong elliptic thành một phần tử của nhóm trường hữu hạn thứ ba, công cụ toán học then chốt cho phép kiểm tra hiệu quả mối quan hệ nhân trong trạng thái mã hóa của bằng chứng không tri thức)
5. `연산회로다항식변환` — Chuyển đổi mạch số học thành đa thức QAP (quá trình tiền xử lý toán học chuyển đổi một chương trình tính toán tùy ý gồm các cổng cộng và nhân của mạch số học qua hệ ràng buộc bậc nhất R1CS thành dạng phương trình đa thức QAP để thuật toán bằng chứng không tri thức có thể xử lý)
6. `증명자검증자상호작용` — Tương tác giữa bên chứng minh và bên xác minh (chuỗi quy trình trao đổi hỏi đáp đa bước trong hệ thống ZKP tương tác, nơi bên chứng minh gửi cam kết Commitment, bên xác minh tung ra thử thách ngẫu nhiên Challenge, và bên chứng minh gửi lại phản hồi Response)
7. `완전성건전성검증` — Kiểm chứng tính toàn vẹn và tính vững chắc (hành vi thẩm định mật mã học chứng minh bằng toán học hai thuộc tính sống còn: Tính toàn vẹn Completeness bảo đảm nếu mệnh đề là đúng thì người chứng minh trung thực luôn thuyết phục được người kiểm tra; và Tính vững chắc Soundness bảo đảm nếu mệnh đề là sai thì kẻ gian lận không bao giờ có thể lừa được người kiểm tra)
8. `비밀정보영지식보호` — Bảo vệ thông tin bí mật bằng không tiết lộ tri thức (tính năng bảo vệ quyền riêng tư triệt để thông qua cấu trúc toán học ZKP ngăn chặn từ gốc rễ việc dữ liệu bí mật đã mã hóa Witness bị rò rỉ trong bộ nhớ hoặc bị nghe lén trên đường truyền mạng trong toàn bộ quá trình xác thực, tính toán và thẩm định)
9. `영지식롤업확장성` — Khả năng mở rộng của ZK-Rollup (giải pháp mở rộng quy mô Layer-2 bằng cách gom hàng nghìn giao dịch xử lý hàng loạt ngoài chuỗi off-chain ngoài mạng chính L1, sau đó chỉ ghi duy nhất một bằng chứng không tri thức ngắn gọn vào mạng chính để bảo chứng tính hợp lệ, qua đó tối đa hóa thông lượng TPS)
10. `다항식약속스킴` — Cơ chế cam kết đa thức Polynomial Commitment Scheme (kỹ thuật mật mã học như KZG hay FRI cho phép người chứng minh cố định một đa thức bằng giá trị cam kết ngắn gọn, sau đó khi người kiểm tra đưa ra một điểm z bất kỳ, người chứng minh có thể chứng minh giá trị tính toán P(z) là chính xác mà không cần công khai toàn bộ đa thức đó)
11. `블록체인프라이버시코인` — Đồng tiền mã hóa bảo mật quyền riêng tư Privacy Coin (loại tiền mã hóa được thiết kế tận dụng công nghệ ZKP hoặc chữ ký vòng để mã hóa hoàn hảo toàn bộ lịch sử giao dịch gồm địa chỉ ví người gửi, người nhận và số tiền chuyển, khiến không thể truy vết trên các trình duyệt khối blockchain)
12. `동형암호결합연산` — Phép toán kết hợp mật mã đồng cấu và không tri thức (kỹ thuật tính toán an toàn thế hệ mới kết hợp giữa Mật mã đồng cấu toàn phần FHE cho phép thực hiện phép cộng và nhân trực tiếp trên dữ liệu đang mã hóa mà không cần giải mã sang văn bản gốc, và Bằng chứng không tri thức ZKP để xác thực kết quả tính toán được thực thi chính xác)
13. `검증계산복잡도단축` — Rút ngắn độ phức tạp tính toán xác minh (sự cải tiến thuật toán giúp cắt giảm tối đa các bước tính toán và độ phức tạp thời gian mà bên kiểm tra phải thực hiện xuống thời gian logarit O(log n) hoặc hằng số O(1) dù cho việc tạo bằng chứng đòi hỏi nhiều tài nguyên, giúp ngay cả các thiết bị siêu nhẹ cũng có thể xác minh tức thì)
14. `공개입력비공개위트니스` — Đầu vào công khai và nhân chứng bí mật Witness (hai loại giá trị dữ liệu được đưa vào mạch không tri thức: Đầu vào công khai Public Input là tham số công cộng mà bên xác minh cũng biết rõ, và Nhân chứng bí mật Private Witness là dữ liệu bằng chứng mật tuyệt đối không được phép rò rỉ ra bên ngoài)
15. `양자내성영지식증명` — Bằng chứng không tiết lộ tri thức kháng lượng tử (thế hệ ZKP mới như zk-STARKs được thiết kế áp dụng mật mã dựa trên mạng lưới hình học Lattice hoặc hàm băm để ngay cả các siêu máy tính lượng tử tương lai trang bị thuật toán Shor giải được bài toán logarit rời rạc trên đường cong elliptic cũng không thể giải mã hay phá vỡ)

## 학습 안내

본 단원의 상세 어휘 해설과 연관 독해 지문은 [10-zero-knowledge-proofs-and-zk-snarks.md](./10-zero-knowledge-proofs-and-zk-snarks.md) 파일에서 학습하실 수 있습니다.
