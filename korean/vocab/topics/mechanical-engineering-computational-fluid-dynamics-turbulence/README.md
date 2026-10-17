# 기계공학 및 전산유체역학(CFD)과 난류 모델링의 언어

- 주제 슬러그: `mechanical-engineering-computational-fluid-dynamics-turbulence`
- 수록 어휘 수: 15개
- 학습 수준: B2–C2 (고급 한국어 및 전문 학술/사회 영역)
- 목표: 기계공학 및 항공우주공학 분야에서 유체 유동의 지배 방정식인 나비에-스토크스 방정식의 수치해석, RANS 및 LES 난류 모델링 기법, 격자 수렴도 및 유동 박리 현상을 다루는 전문 학술 어휘

## 포함 어휘 목록

1. `전산유체역학해석` — Phân tích động lực học chất lưu tính toán CFD (kỹ thuật mô phỏng công học tận dụng năng lực tính toán tốc độ cao của máy tính để giải số trị các phương trình vi phân chi phối hiện tượng nhiệt - dòng chảy phức tạp của chất lưu)
2. `나비에스토크스방정식` — Phương trình Navier-Stokes (phương trình vi phân đạo hàm riêng phi tuyến mô tả định luật bảo toàn động lượng của chất lưu có độ nhớt, chứa đựng các định luật cơ học nền tảng của mọi dòng chảy bao gồm cả dòng rối)
3. `레이놀즈평균난류모델` — Mô hình rối lấy trung bình theo Reynolds RANS (kỹ thuật số trị thực dụng phân tách trường vận tốc rối dao động bất quy tắc thành thành phần trung bình thời gian và thành phần biến động rồi đóng xấp xỉ ứng suất Reynolds bằng mô hình độ nhớt xoáy)
4. `격자생성수렴도` — Độ hội tụ sinh lưới (thước đo xác minh tính độc lập của lưới khi chia nhỏ dần mật độ lưới trong miền tính toán để kết quả đạt tới một giá trị ổn định mà không còn phụ thuộc vào kích thước mắt lưới)
5. `경계층유동박리` — Tách dòng lớp biên (hiện tượng dòng chất lưu chảy dọc bề mặt vật thể không thắng được gradient áp suất nghịch và lực ma sát nên bị bóc tách khỏi bề mặt tạo thành xoáy cuộn cuồn cuộn)
6. `벽면함수근사항` — Số hạng xấp xỉ hàm vách (công thức bán thực nghiệm áp dụng quy luật logarit để tính lực ma sát vách thay vì phải giải chi tiết lớp nhớt sát vách bằng lưới siêu mịn)
7. `와류점성계수추정` — Ước tính hệ số nhớt xoáy (việc mô hình hóa hiệu ứng khuếch tán động lượng do dòng rối bằng độ nhớt xoáy vĩ mô ảo theo giả thuyết Boussinesq thay vì độ nhớt phân tử của chất lưu)
8. `대와류모사기법` — Kỹ thuật mô phỏng xoáy lớn LES (kỹ thuật phân tích độ chính xác cao tính toán trực tiếp các xoáy quy mô lớn mang năng lượng bằng lọc không gian và chỉ xấp xỉ các vi xoáy nhỏ tiêu tán bằng mô hình dưới lưới SGS)
9. `수치확산오차보정` — Hiệu chỉnh sai số khuếch tán số trị (kỹ thuật dùng các phương pháp sai phân bậc cao để khắc phục khuyết tật các biên vật lý bị nhòe mờ do độ nhớt giả tạo nhân tạo - khuếch tán số - sinh ra từ sai phân gió ngược bậc thấp)
10. `압력속도연성해법` — Phương pháp liên kết áp suất - vận tốc (thuật toán số trị lặp lại hiệu chỉnh và giải đồng thời trường vận tốc và áp suất như SIMPLE, PISO để giải bài toán dòng không nén được khi phương trình liên tục không có số hạng áp suất trực tiếp)
11. `난류에너지소산율` — Tỷ lệ tiêu tán năng lượng rối (tỷ lệ năng lượng trên đơn vị khối lượng ký hiệu epsilon mà tại đó các vi xoáy nhỏ bị xé ra từ các xoáy rối lớn bị ma sát tiêu tán thành nhiệt năng bởi độ nhớt phân tử của chất lưu)
12. `마하수압축성영향` — Ảnh hưởng tính nén theo số Mach (hiệu ứng vật lý khi vận tốc chất lưu tiệm cận hoặc vượt qua tốc độ âm thanh với Ma > 0,3 khiến giả định không nén bị phá vỡ do biến thiên mật độ và sóng xung kích, làm sâu sắc thêm liên kết nhiệt động học)
13. `표면마찰저항계수` — Hệ số lực cản ma sát bề mặt (hệ số không thứ nguyên hóa ứng suất cắt ma sát nhớt tác dụng lên bề mặt vật thể bằng áp suất động, phản ánh độ lớn lực cản nhớt cản trở bước tiến của tàu thủy hay máy bay)
14. `유동가시화기법` — Kỹ thuật trực quan hóa dòng chảy (kỹ thuật thực nghiệm dùng khói, thuốc nhuộm, tấm laze PIV hay quang học Schlieren để biến đổi dòng chảy mắt thường không thấy của không khí, nước, xoáy và sóng sốc thành hình ảnh trực quan)
15. `풍동실험수치검증` — Kiểm chứng số trị thí nghiệm hầm gió (hoạt động thực đo lực nâng, lực cản và mômen của mô hình thu nhỏ bằng cảm biến chuẩn xác trong thiết bị hầm gió tạo luồng khí nhân tạo để xác minh tính chính xác và hợp lệ của mô phỏng điện toán)

## 학습 안내

본 단원의 상세 어휘 해설과 연관 독해 지문은 [03-computational-fluid-dynamics-and-turbulence.md](./03-computational-fluid-dynamics-and-turbulence.md) 파일에서 학습하실 수 있습니다.
