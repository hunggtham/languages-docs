<!-- source_policy: original explanations, examples, and passage; cybersecurity-zero-trust-architecture-and-microsegmentation terminology cross-checked conceptually, not copied -->
# 정보보안 및 제로 트러스트 아키텍처와 마이크로세그멘테이션의 언어

제로트러스트신뢰검증체계 및 네트워크마이크로세그멘테이션 기반 동적지속적인증인가기제와 최소권한접근제어원칙수립 정보보안 및 제로 트러스트 아키텍처와 마이크로세그멘테이션의 언어

---

### 제로트러스트신뢰검증체계

- **발음:** [제로트러스트신:뢰검:증체:계]
- **품사:** 명사
- **핵심 의미:** "절대 신뢰하지 않고 항상 검증한다(Never Trust, Always Verify)"는 철학에 입각하여, 내부 네트워크에 위치한 사용자나 단말이라도 기본적으로 신뢰하지 않고 모든 접근 요청에 대해 엄격한 신원 및 상태 인증을 수행하는 보안 패러다임.
- **베트남어 뜻:** Hệ thống kiểm chứng độ tin cậy Zero Trust Zero Trust Trust Verification Framework (mô hình bảo mật dựa trên triết lý "Không bao giờ tin tưởng, luôn luôn xác thực", không mặc định tin cậy bất kỳ người dùng hay thiết bị nào kể cả khi nằm trong mạng nội bộ, mà thực hiện xác thực danh tính và trạng thái nghiêm ngặt đối với mọi yêu cầu truy cập)
- **뉘앙스와 사용법:** Triết lý an ninh loại bỏ khái niệm "mạng nội bộ an toàn": trước đây ai vào được mạng nội bộ cơ quan là mặc định tin cậy, nay dù sếp hay nhân viên ngồi trong văn phòng thì mỗi lần mở file, truy cập server đều phải xác thực độc lập.
- **재사용 가능한 콜로케이션·청크:**
  - 엔터프라이즈 제로트러스트신뢰검증체계 구축 (xây dựng hệ thống kiểm chứng độ tin cậy Zero Trust cấp doanh nghiệp)
  - 차세대 제로트러스트신뢰검증체계로의 전환 (chuyển đổi sang hệ thống kiểm chứng độ tin cậy Zero Trust thế hệ mới)
  - 제로트러스트신뢰검증체계 표준 가이드라인 준수 (tuân thủ hướng dẫn tiêu chuẩn của hệ thống kiểm chứng độ tin cậy Zero Trust)
- **자주 쓰는 문형과 성분:**
  - 금융 기관들은 해킹 피해를 방지하기 위해 제로트러스트신뢰검증체계를(을) 전면 도입했다 (các tổ chức tài chính đã áp dụng toàn diện hệ thống kiểm chứng độ tin cậy Zero Trust nhằm ngăn chặn thiệt hại do tấn công mạng)
  - 제로트러스트신뢰검증체계가(이) 성공적으로 정착하려면 지속적인 신원 평가와 가시성 확보가 필수적이다 (để hệ thống kiểm chứng độ tin cậy Zero Trust đi vào hoạt động thành công thì việc đánh giá danh tính liên tục và đảm bảo khả năng hiển thị toàn diện là điều bắt buộc)
- **사회적 관계·주제별 register:** An ninh mạng doanh nghiệp, kiến trúc bảo mật CNTT, bảo vệ dữ liệu đám mây.
- **예문:**
  - 국가사이버안보센터는 지능형 랜섬웨어 공격을 무력화하기 위해 정부 부처에 제로트러스트신뢰검증체계 가이드라인을 배포했다.
- **Dịch:**
  - Trung tâm An ninh Mạng Quốc gia đã phân phối tài liệu hướng dẫn hệ thống kiểm chứng độ tin cậy Zero Trust cho các bộ ban ngành chính phủ nhằm vô hiệu hóa các cuộc tấn công ransomware thông minh.
- **어휘 연결:**
  - 유의어: `제로트러스트보안` (bảo mật Zero Trust zero trust security)
  - 관련어: `경계기반보안` (bảo mật dựa trên ranh giới perimeter-based security)
- **영어 참고:** `Zero Trust Trust Verification Framework` — khung kiến trúc an ninh mạng hiện đại áp dụng nguyên tắc xác thực mọi truy cập thay vì tin tưởng mặc định dựa trên vị trí mạng

---

### 네트워크마이크로세그멘테이션

- **발음:** [네:트워:크마이크로세그멘테:이션]
- **품사:** 명사
- **핵심 의미:** 데이터 센터 및 클라우드 환경에서 네트워크를 개별 워크로드, 애플리케이션 또는 서비스 단위의 미세한 구역으로 분할하여 상호 간의 무분별한 트래픽 이동을 엄격히 통제하는 격리 기술.
- **베트남어 뜻:** Phân đoạn vi mô mạng Network Microsegmentation (công nghệ cô lập mạng trong môi trường trung tâm dữ liệu và đám mây bằng cách chia nhỏ mạng thành các phân vùng cực nhỏ theo từng đơn vị dịch vụ, ứng dụng hoặc khối lượng công việc workload riêng biệt, kiểm soát nghiêm ngặt lưu lượng truy cập qua lại lẫn nhau)
- **뉘앙스와 사용법:** Chia nhỏ mạng thành từng "khoang kín" chống chìm tàu: nếu hacker đột nhập được vào một máy chủ web thì lập tức bị chặn lại, không thể nhảy sang máy chủ cơ sở dữ liệu bên cạnh.
- **재사용 가능한 콜로케이션·청크:**
  - 세분화된 네트워크마이크로세그멘테이션 정책 (chính sách phân đoạn vi mô mạng được phân tách chi tiết)
  - 클라우드 환경의 네트워크마이크로세그멘테이션 적용 (áp dụng phân đoạn vi mô mạng trong môi trường đám mây)
  - 네트워크마이크로세그멘테이션을 통한 침해 격리 (cô lập vi phạm thông qua phân đoạn vi mô mạng)
- **자주 쓰는 문형과 성분:**
  - 보안팀은 가상화 스위치 레벨에서 네트워크마이크로세그멘테이션을(를) 구성하여 서버 간 불필요한 통신을 전면 차단했다 (đội ngũ bảo mật đã thiết lập phân đoạn vi mô mạng ở cấp độ bộ chuyển mạch ảo để chặn đứng toàn bộ giao tiếp không cần thiết giữa các máy chủ)
  - 네트워크마이크로세그멘테이션이(가) 제대로 구현되지 않으면 하나의 감염 단말이 전체 인프라로 확산될 위험이 크다 (nếu phân đoạn vi mô mạng không được triển khai đúng cách thì một thiết bị bị nhiễm có nguy cơ lây lan rất lớn ra toàn bộ hạ tầng)
- **사회적 관계·주제별 register:** Kỹ thuật mạng, an ninh hạ tầng đám mây, kiến trúc SDN.
- **예문:**
  - 클라우드 인프라에 네트워크마이크로세그멘테이션을 적용하자 워크로드 간 무단 데이터 전송 시도가 즉시 탐지되어 차단되었다.
- **Dịch:**
  - Khi áp dụng phân đoạn vi mô mạng vào hạ tầng đám mây, các nỗ lực truyền dữ liệu trái phép giữa các workload đã bị phát hiện và ngăn chặn ngay lập tức.
- **어휘 연결:**
  - 유의어: `망분리` (phân tách mạng network isolation)
  - 관련어: `방화벽정책` (chính sách tường lửa firewall policy)
- **영어 참고:** `network microsegmentation` — phương pháp phân chia trung tâm dữ liệu thành các vùng bảo mật nhỏ lẻ để cô lập các khối lượng công việc riêng biệt

---

### 동적지속적인증인가기제

- **발음:** [동:적지:속쩌긴:증인:가기제]
- **품사:** 명사
- **핵심 의미:** 초기 로그인 시점에 한 번만 신원을 확인하는 정적 인증과 달리, 사용자가 시스템을 이용하는 전체 세션 동안 위험 수준, 위치 변화, 비정상적 행동 등을 실시간으로 재평가하여 권한을 유지하거나 즉시 박탈하는 메커니즘.
- **베트남어 뜻:** Cơ chế xác thực và cấp quyền liên tục mang tính động Dynamic Continuous Authentication and Authorization Mechanism (cơ chế đánh giá lại theo thời gian thực mức độ rủi ro, sự thay đổi vị trí, hành vi bất thường trong suốt phiên sử dụng để duy trì hoặc tước bỏ ngay lập tức quyền hạn, thay vì chỉ xác nhận danh tính một lần duy nhất lúc đăng nhập ban đầu)
- **뉘앙스와 사용법:** Kiểm tra căn cước liên tục từng giây: giống như nhân viên an ninh đi theo giám sát suốt quá trình làm việc, hễ thấy có dấu hiệu lạ là lập tức tịch thu thẻ ra vào ngay tức khắc.
- **재사용 가능한 콜로케이션·청크:**
  - 실시간 동적지속적인증인가기제 구현 (triển khai cơ chế xác thực và cấp quyền liên tục mang tính động theo thời gian thực)
  - 동적지속적인증인가기제 기반 접근 제어 (kiểm soát truy cập dựa trên cơ chế xác thực và cấp quyền liên tục mang tính động)
  - 동적지속적인증인가기제의 위협 대응 효율성 (hiệu quả ứng phó mối đe dọa của cơ chế xác thực và cấp quyền liên tục mang tính động)
- **자주 쓰는 문형과 성분:**
  - 원격 근무 환경의 확산에 따라 단말의 보안 상태를 감시하는 동적지속적인증인가기제의(이) 중요성이 부각되고 있다 (cùng với sự lan rộng của môi trường làm việc từ xa, tầm quan trọng của cơ chế xác thực và cấp quyền liên tục mang tính động giám sát trạng thái bảo mật của thiết bị đang được đề cao)
  - 동적지속적인증인가기제를(을) 적용하면 세션 탈취 공격이 발생하더라도 이상 행위 감지 즉시 접속이 차단된다 (nếu áp dụng cơ chế xác thực và cấp quyền liên tục mang tính động, ngay cả khi xảy ra tấn công chiếm đoạt phiên thì kết nối sẽ bị chặn ngay khi phát hiện hành vi bất thường)
- **사회적 관계·주제별 register:** Quản lý danh tính và truy cập (IAM), bảo mật phiên làm việc.
- **예문:**
  - 이 보안 플랫폼은 동적지속적인증인가기제를 통해 비정상적인 IP 변경이나 야간 대용량 다운로드를 즉각 차단한다.
- **Dịch:**
  - Nền tảng bảo mật này thông qua cơ chế xác thực và cấp quyền liên tục mang tính động để chặn ngay lập tức các thay đổi IP bất thường hoặc hành vi tải xuống dung lượng lớn vào ban đêm.
- **어휘 연결:**
  - 유의어: `세션탈취방지` (phòng chống chiếm đoạt phiên session hijacking prevention)
  - 관련어: `다중요사인증` (xác thực đa yếu tố multi-factor authentication)
- **영어 참고:** `dynamic continuous authentication and authorization mechanism` — cơ chế an ninh mạng liên tục tái đánh giá độ tin cậy và quyền hạn của người dùng trong suốt thời gian kết nối

---

### 최소권한접근제어원칙수립

- **발음:** [최:소권:한접:근제:어원:칙쑤:립]
- **품사:** 명사
- **핵심 의미:** 모든 사용자, 계정, 프로세스에 특정 직무를 수행하는 데 필수불가결한 최소한의 접근 권한만을 부여하고 그 외의 모든 권한은 원천적으로 제한하는 보안 원칙의 공식적인 제정 및 이행.
- **베트남어 뜻:** Sự thiết lập nguyên tắc kiểm soát truy cập đặc quyền tối thiểu Establishment of the Principle of Least Privilege Access Control (việc chính thức ban hành và thực thi nguyên tắc bảo mật chỉ cấp quyền hạn truy cập tối thiểu không thể thiếu cho người dùng, tài khoản hoặc tiến trình để thực hiện một nhiệm vụ cụ thể, đồng thời hạn chế triệt để mọi quyền hạn ngoài phạm vi đó)
- **뉘앙스와 사용법:** Nguyên tắc "chỉ biết những gì cần biết": nhân viên kế toán chỉ được xem sổ cái tài chính, không có quyền mở thư mục mã nguồn hay cấu hình máy chủ, ngăn ngừa việc lạm dụng hoặc lộ lọt tài khoản.
- **재사용 가능한 콜로케이션·청크:**
  - 사내 최소권한접근제어원칙수립 및 시행 (thiết lập và thi hành nguyên tắc kiểm soát truy cập đặc quyền tối thiểu trong nội bộ công ty)
  - 엄격한 최소권한접근제어원칙수립 체계 (hệ thống thiết lập nguyên tắc kiểm soát truy cập đặc quyền tối thiểu nghiêm ngặt)
  - 최소권한접근제어원칙수립을 위한 직무 분석 (phân tích vị trí công việc nhằm thiết lập nguyên tắc kiểm soát truy cập đặc quyền tối thiểu)
- **자주 쓰는 문형과 성분:**
  - 데이터 유출 사고를 방지하려면 관리자 계정에 대해서도 최소권한접근제어원칙수립이(가) 선행되어야 한다 (để phòng ngừa sự cố rò rỉ dữ liệu, việc thiết lập nguyên tắc kiểm soát truy cập đặc quyền tối thiểu ngay cả đối với tài khoản quản trị viên phải được thực hiện trước tiên)
  - 기업은 전사적 차원에서 최소권한접근제어원칙수립을(를) 완료하여 불필요한 루트 권한 남용을 차단했다 (doanh nghiệp đã hoàn tất việc thiết lập nguyên tắc kiểm soát truy cập đặc quyền tối thiểu trên toàn công ty để chặn đứng việc lạm dụng quyền root không cần thiết)
- **사회적 관계·주제별 register:** Quản trị tuân thủ bảo mật, chính sách quản lý rủi ro IT.
- **예문:**
  - 보안 감사는 각 부서별로 최소권한접근제어원칙수립이 실질적으로 준수되고 있는지 여부를 면밀히 점검했다.
- **Dịch:**
  - Cuộc kiểm toán an ninh đã kiểm tra kỹ lưỡng liệu việc thiết lập nguyên tắc kiểm soát truy cập đặc quyền tối thiểu có được tuân thủ thực chất tại từng phòng ban hay không.
- **어휘 연결:**
  - 유의어: `특권계정관리` (quản lý tài khoản đặc quyền PAM privileged access management)
  - 관련어: `직무분리` (phân tách nhiệm vụ separation of duties)
- **영어 참고:** `establishment of least privilege access control principle` — việc ban hành và thực thi chính sách chỉ cấp quyền hạn tối thiểu cần thiết cho từng chủ thể trong hệ thống

---

### 소프트웨어정의경계방어망

- **발음:** [소프트웨어정:의경:계방:어망]
- **품사:** 명사
- **핵심 의미:** 하드웨어 기반 방화벽이나 VPN 대신 소프트웨어를 통해 중앙 집중식으로 인가된 사용자에게만 특정 애플리케이션에 대한 "블랙 클라우드" 형태의 보이지 않는 암호화 연결을 제공하는 차세대 경계 보안 아키텍처.
- **베트남어 뜻:** Mạng phòng thủ ranh giới định nghĩa bằng phần mềm Software-Defined Perimeter (SDP) Defense Network (kiến trúc an ninh ranh giới thế hệ mới cung cấp kết nối mã hóa vô hình dạng "đám mây đen" đến ứng dụng chỉ dành cho người dùng được cấp quyền tập trung thông qua phần mềm thay vì tường lửa phần cứng hoặc VPN truyền thống)
- **뉘앙스와 사용법:** Ẩn giấu hoàn toàn máy chủ trước con mắt kẻ tấn công: hạ tầng mạng như tàng hình trên Internet, hacker quét cổng không thấy máy chủ tồn tại, chỉ người dùng đã xác thực mới thấy và kết nối được.
- **재사용 가능한 콜로케이션·청크:**
  - 원격 접속용 소프트웨어정의경계방어망 구축 (xây dựng mạng phòng thủ ranh giới định nghĩa bằng phần mềm dùng cho truy cập từ xa)
  - 소프트웨어정의경계방어망 기반 제로트러스트 모델 (mô hình Zero Trust dựa trên mạng phòng thủ ranh giới định nghĩa bằng phần mềm)
  - 소프트웨어정의경계방어망의 은폐 제어 기술 (công nghệ kiểm soát ẩn giấu của mạng phòng thủ ranh giới định nghĩa bằng phần mềm)
- **자주 쓰는 문형과 성분:**
  - 기업은 레거시 VPN을 대체하여 보안성이 뛰어난 소프트웨어정의경계방어망을(를) 사내 인프라에 구축했다 (doanh nghiệp đã thay thế VPN kế thừa để xây dựng mạng phòng thủ ranh giới định nghĩa bằng phần mềm có tính bảo mật vượt trội vào hạ tầng nội bộ)
  - 소프트웨어정의경계방어망이(가) 가동되면 인증되지 않은 외부 단말에는 서버의 IP 주소와 포트 자체가 노출되지 않는다 (khi mạng phòng thủ ranh giới định nghĩa bằng phần mềm hoạt động, địa chỉ IP và cổng của máy chủ hoàn toàn không bị lộ ra trước các thiết bị bên ngoài chưa được xác thực)
- **사회적 관계·주제별 register:** An ninh mạng đám mây, kiến trúc mạng SDP, thay thế VPN.
- **예문:**
  - 소프트웨어정의경계방어망은 인가된 사용자에게만 제한적으로 인프라를 노출시켜 디도스 공격과 포트 스캐닝을 원천 무력화한다.
- **Dịch:**
  - Mạng phòng thủ ranh giới định nghĩa bằng phần mềm chỉ để lộ hạ tầng một cách hạn chế cho người dùng được ủy quyền, qua đó vô hiệu hóa triệt để các cuộc tấn công DDoS và quét cổng port scanning.
- **어휘 연결:**
  - 유의어: `소프트웨어정의경계` (ranh giới định nghĩa bằng phần mềm SDP)
  - 관련어: `가상사설망대체` (thay thế mạng riêng ảo VPN replacement)
- **영어 참고:** `software-defined perimeter defense network` — mô hình an ninh ẩn toàn bộ hạ tầng mạng Internet đằng sau một rào chắn phần mềm chỉ mở ra sau khi xác thực thành công

---

### 상시위험기반접근평가엔진

- **발음:** [상:시위:험기:반접:근평:가엔:진]
- **품사:** 명사
- **핵심 의미:** 접속자의 IP, 지리적 위치, 단말 무결성, 접속 시간대, 사용자 행동 분석(UBA) 지표를 머신러닝 알고리즘으로 실시간 종합 분석하여 매 순간의 위험 점수를 산출하고 접근 여부를 판단하는 지능형 보안 엔진.
- **베트남어 뜻:** Động cơ đánh giá truy cập dựa trên rủi ro thường trực Continuous Risk-Based Access Evaluation Engine (công cụ bảo mật thông minh sử dụng thuật toán máy học để phân tích tổng hợp theo thời gian thực các chỉ số IP, vị trí địa lý, tính toàn vẹn thiết bị, khung giờ truy cập và phân tích hành vi người dùng UBA nhằm tính toán điểm rủi ro tại mỗi thời điểm và ra quyết định cho phép truy cập hay không)
- **뉘앙스와 사용법:** Bộ não tính điểm nguy cơ tự động: nếu nhân viên vừa đăng nhập ở Seoul rồi 5 phút sau lại thấy đăng nhập từ châu Âu, engine tính điểm rủi ro vọt lên mức tối đa và kích hoạt chặn tức thì.
- **재사용 가능한 콜로케이션·청크:**
  - 인공지능 탑재 상시위험기반접근평가엔진 (động cơ đánh giá truy cập dựa trên rủi ro thường trực tích hợp trí tuệ nhân tạo)
  - 상시위험기반접근평가엔진의 위험 스코어링 로직 (logic chấm điểm rủi ro của động cơ đánh giá truy cập dựa trên rủi ro thường trực)
  - 상시위험기반접근평가엔진 연동 보안 정책 (chính sách bảo mật liên kết với động cơ đánh giá truy cập dựa trên rủi ro thường trực)
- **자주 쓰는 문형과 성분:**
  - 회사는 비인가 접근을 선제적으로 차단하기 위해 상시위험기반접근평가엔진을(를) 인증 게이트웨이에 통합했다 (công ty đã tích hợp động cơ đánh giá truy cập dựa trên rủi ro thường trực vào cổng xác thực nhằm chủ động ngăn chặn các truy cập trái phép)
  - 상시위험기반접근평가엔진이(가) 비정상적인 트래픽 패턴을 탐지하는 순간 관리자 승인 절차가 강제로 요구된다 (khoảnh khắc động cơ đánh giá truy cập dựa trên rủi ro thường trực phát hiện mẫu lưu lượng bất thường, quy trình phê duyệt của quản trị viên sẽ bị cưỡng chế yêu cầu)
- **사회적 관계·주제별 register:** Bảo mật AI, đánh giá rủi ro thích ứng, công nghệ IAM tiên tiến.
- **예문:**
  - 상시위험기반접근평가엔진은 다크웹에 유출된 자격증명으로 로그인하려는 시도를 높은 위험 점수로 분류하여 즉시 차단했다.
- **Dịch:**
  - Động cơ đánh giá truy cập dựa trên rủi ro thường trực đã phân loại nỗ lực đăng nhập bằng thông tin xác thực bị rò rỉ trên dark web vào mức điểm rủi ro cao và lập tức ngăn chặn.
- **어휘 연결:**
  - 유의어: `위험기반인증` (xác thực dựa trên rủi ro risk-based authentication)
  - 관련어: `사용자행동분석` (phân tích hành vi người dùng user behavior analytics UEBA)
- **영어 참고:** `continuous risk-based access evaluation engine` — hệ thống AI liên tục đo lường mức độ nguy hiểm của từng yêu cầu truy cập dựa trên ngữ cảnh thiết bị và hành vi

---

### 내부자공격횡적이동차단

- **발음:** [내:부자공:격횡:정니:동차:단]
- **품사:** 명사
- **핵심 의미:** 초기 침투에 성공한 악의적 공격자나 악성코드가 내부 네트워크의 다른 취약한 호스트, 도메인 컨트롤러, 데이터베이스 등으로 옆으로 확산(Lateral Movement)되는 것을 격리와 세분화된 접근 제어로 봉쇄하는 방어 기법.
- **베트남어 뜻:** Sự ngăn chặn di chuyển ngang của kẻ tấn công nội bộ Blocking Lateral Movement of Insider Attacks (kỹ thuật phòng thủ phong tỏa việc kẻ tấn công độc hại hoặc mã độc sau khi xâm nhập bước đầu thành công sẽ lây lan sang các máy chủ, bộ điều khiển miền hoặc cơ sở dữ liệu dễ bị tổn thương khác trong mạng nội bộ thông qua việc cô lập và kiểm soát truy cập phân đoạn)
- **뉘앙스와 사용법:** Chặn đứng chuỗi lây lan ngầm: ngăn chặn tin tặc sau khi chiếm được một máy tính của nhân viên cấp thấp không thể dùng các lệnh PowerShell hay Pass-the-Hash để lẻn sang server chứa bí mật kinh doanh.
- **재사용 가능한 콜로케이션·청크:**
  - 랜섬웨어 확산 방지를 위한 내부자공격횡적이동차단 (ngăn chặn di chuyển ngang của kẻ tấn công nội bộ nhằm phòng ngừa phát tán mã độc tống tiền)
  - 내부자공격횡적이동차단 전용 방어 솔루션 (giải pháp phòng thủ chuyên dụng ngăn chặn di chuyển ngang của kẻ tấn công nội bộ)
  - 내부자공격횡적이동차단의 실효성 검증 테스트 (thử nghiệm kiểm chứng tính hiệu quả thực tế của việc ngăn chặn di chuyển ngang của kẻ tấn công nội bộ)
- **자주 쓰는 문형과 성분:**
  - 마이크로세그멘테이션 솔루션을 적용함으로써 내부자공격횡적이동차단을(를) 완벽히 달성할 수 있었다 (nhờ áp dụng giải pháp phân đoạn vi mô, việc ngăn chặn di chuyển ngang của kẻ tấn công nội bộ đã được thực hiện một cách hoàn hảo)
  - 초기 침투가 발생하더라도 내부자공격횡적이동차단이(가) 작동하면 핵심 자산의 침해를 막을 수 있다 (ngay cả khi xảy ra sự xâm nhập bước đầu, nếu cơ chế ngăn chặn di chuyển ngang của kẻ tấn công nội bộ hoạt động thì có thể ngăn ngừa tổn hại cho các tài sản cốt lõi)
- **사회적 관계·주제별 register:** Phòng thủ an ninh mạng, ứng phó sự cố IR, phân tích tấn công APT.
- **예문:**
  - 공격자가 피싱 메일로 PC를 장악했으나 내부자공격횡적이동차단 정책에 막혀 데이터베이스 서버로 접근하지 못했다.
- **Dịch:**
  - Kẻ tấn công đã chiếm quyền điều khiển máy tính cá nhân bằng email lừa đảo phishing nhưng đã bị chính sách ngăn chặn di chuyển ngang của kẻ tấn công nội bộ chặn đứng, không thể tiếp cận máy chủ cơ sở dữ liệu.
- **어휘 연결:**
  - 유의어: `횡적이동탐지` (phát hiện di chuyển ngang lateral movement detection)
  - 관련어: `지능형지속위협` (mối đe dọa dai dẳng nâng cao APT advanced persistent threat)
- **영어 참고:** `blocking lateral movement of insider attacks` — chiến lược ngăn chặn mã độc hoặc kẻ tấn công mở rộng phạm vi kiểm soát bên trong mạng nội bộ sau khi vượt qua tường rào

---

### 엔드포인트상태무결성검증

- **발음:** [엔:드포인트상:태무:결썽검:증]
- **품사:** 명사
- **핵심 의미:** 네트워크나 사내 업무 시스템에 접속하려는 사용자 단말(PC, 스마트폰 등)이 최신 보안 패치를 적용했는지, 백신이 정상 작동 중인지, 루팅이나 탈옥이 발생하지 않았는지 등 단말의 건강 상태와 위변조 여부를 접속 전후로 확인하는 절차.
- **베트남어 뜻:** Sự kiểm chứng tính toàn vẹn trạng thái điểm cuối Endpoint Posture Integrity Verification (quy trình xác nhận tình trạng an toàn và việc có bị can thiệp trái phép hay không của thiết bị người dùng như PC, smartphone trước và sau khi truy cập, bao gồm việc đã cài bản vá bảo mật mới nhất, phần mềm diệt virus đang chạy bình thường, không bị bẻ khóa jailbreak hay root)
- **뉘앙스와 사용법:** Kiểm tra sức khỏe thiết bị trước khi cho vào cổng: máy tính của nhân viên dù có mật khẩu đúng nhưng nếu chưa cập nhật bản vá lỗ hổng hoặc tắt diệt virus thì hệ thống vẫn kiên quyết từ chối kết nối.
- **재사용 가능한 콜로케이션·청크:**
  - 접속 전 엔드포인트상태무결성검증 수행 (thực hiện kiểm chứng tính toàn vẹn trạng thái điểm cuối trước khi kết nối)
  - 엔드포인트상태무결성검증 정책의 엄격한 적용 (áp dụng nghiêm ngặt chính sách kiểm chứng tính toàn vẹn trạng thái điểm cuối)
  - 엔드포인트상태무결성검증 실패에 따른 접속 차단 (chặn kết nối do thất bại trong việc kiểm chứng tính toàn vẹn trạng thái điểm cuối)
- **자주 쓰는 문형과 성분:**
  - 제로 트러스트 환경에서는 엔드포인트상태무결성검증을(를) 통과하지 못한 기기는 사내망 접속이 거부된다 (trong môi trường Zero Trust, thiết bị không vượt qua được bước kiểm chứng tính toàn vẹn trạng thái điểm cuối sẽ bị từ chối kết nối vào mạng nội bộ)
  - 엔드포인트상태무결성검증이(가) 실시간으로 이루어져 단말 내 악성 파일 유입 시 즉시 격리 조치가 시행된다 (việc kiểm chứng tính toàn vẹn trạng thái điểm cuối được thực hiện theo thời gian thực nên khi có file độc hại xâm nhập vào thiết bị, biện pháp cô lập sẽ được triển khai ngay lập tức)
- **사회적 관계·주제별 register:** Bảo mật điểm cuối EDR, quản lý thiết bị di động MDM, tuân thủ truy cập.
- **예문:**
  - 사내 보안 에이전트는 엔드포인트상태무결성검증을 통해 비인가 프로그램이 실행 중인 노트북의 사내망 접근을 즉각 차단했다.
- **Dịch:**
  - Agent bảo mật nội bộ thông qua việc kiểm chứng tính toàn vẹn trạng thái điểm cuối đã chặn ngay lập tức quyền truy cập mạng nội bộ của máy tính xách tay đang chạy chương trình trái phép.
- **어휘 연결:**
  - 유의어: `단말상태평가` (đánh giá trạng thái thiết bị endpoint posture assessment)
  - 관련어: `엔드포인트탐지대응` (phát hiện và phản ứng điểm cuối EDR endpoint detection and response)
- **영어 참고:** `endpoint posture integrity verification` — quá trình rà soát tình trạng an toàn kỹ thuật của thiết bị trước khi cấp quyền truy cập tài nguyên doanh nghiệp

---

### 맥락인지적접근통제정책

- **발음:** [맥:낭닌:지적접:근통:제정:책]
- **품사:** 명사
- **핵심 의미:** 단순한 아이디와 비밀번호 일치 여부를 넘어, 접속 시간, 물리적 위치, 네트워크 종류, 기기 상태, 요청 대상 데이터의 기밀 등급 등 다양한 환경적 맥락을 종합적으로 인지하여 접근 권한을 동적으로 결정하는 정책.
- **베트남어 뜻:** Chính sách kiểm soát truy cập nhận biết ngữ cảnh Context-Aware Access Control Policy (chính sách quyết định động quyền hạn truy cập bằng cách nhận biết tổng hợp các ngữ cảnh môi trường đa dạng như thời gian kết nối, vị trí vật lý, loại mạng, trạng thái thiết bị, cấp độ bảo mật của dữ liệu được yêu cầu thay vì chỉ dựa vào sự trùng khớp ID và mật khẩu đơn thuần)
- **뉘앙스와 사용법:** Kiểm soát thông minh theo hoàn cảnh: nếu cùng một tài khoản đăng nhập tại văn phòng vào giờ hành chính thì được xem dữ liệu, nhưng nếu đăng nhập qua Wi-Fi công cộng lúc nửa đêm thì chỉ cho phép đọc thông báo công khai.
- **재사용 가능한 콜로케이션·청크:**
  - 정교한 맥락인지적접근통제정책 수립 (thiết lập chính sách kiểm soát truy cập nhận biết ngữ cảnh tinh vi)
  - 맥락인지적접근통제정책에 따른 조건부 허용 (cho phép có điều kiện theo chính sách kiểm soát truy cập nhận biết ngữ cảnh)
  - 클라우드 자원 대상 맥락인지적접근통제정책 배포 (triển khai chính sách kiểm soát truy cập nhận biết ngữ cảnh cho tài nguyên đám mây)
- **자주 쓰는 문형과 성분:**
  - 관리자는 외부 출장자의 접속을 보호하기 위해 맥락인지적접근통제정책을(를) 사내 시스템에 적용했다 (quản trị viên đã áp dụng chính sách kiểm soát truy cập nhận biết ngữ cảnh vào hệ thống công ty nhằm bảo vệ kết nối của nhân viên đi công tác bên ngoài)
  - 맥락인지적접근통제정책이(가) 활성화되면 해외 IP에서의 비정상적인 데이터베이스 조회가 원천 차단된다 (khi chính sách kiểm soát truy cập nhận biết ngữ cảnh được kích hoạt, các truy vấn cơ sở dữ liệu bất thường từ địa chỉ IP nước ngoài sẽ bị chặn đứng triệt để)
- **사회적 관계·주제별 register:** Quản lý chính sách an ninh, kiểm soát truy cập đám mây, kiến trúc SASE.
- **예문:**
  - 맥락인지적접근통제정책은 공용 와이파이에서 접속한 사용자에 대해 기밀 문서의 다운로드를 금지하고 화면 열람만 허용했다.
- **Dịch:**
  - Chính sách kiểm soát truy cập nhận biết ngữ cảnh đã cấm người dùng kết nối từ Wi-Fi công cộng tải xuống tài liệu mật mà chỉ cho phép xem trên màn hình.
- **어휘 연결:**
  - 유의어: `속성기반접근제어` (kiểm soát truy cập dựa trên thuộc tính ABAC)
  - 관련어: `조건부접근` (truy cập có điều kiện conditional access)
- **영어 참고:** `context-aware access control policy` — chính sách an ninh dựa trên việc phân tích các yếu tố ngữ cảnh xung quanh yêu cầu truy cập để cấp quyền phù hợp

---

### 신원기반경계없는보안망

- **발음:** [신:원기:반경:계엄:는보:안망]
- **품사:** 명사
- **핵심 의미:** 물리적 사무실이나 전용 내부망 같은 전통적인 물리적 경계에 의존하지 않고, 강력한 사용자 신원(Identity)과 단말 인증을 새로운 보안 경계로 삼아 어디서든 안전하게 업무 자원에 접속할 수 있도록 설계된 네트워크 체계.
- **베트남어 뜻:** Mạng lưới bảo mật không ranh giới dựa trên danh tính Identity-Based Perimeterless Security Network (hệ thống mạng được thiết kế để truy cập tài nguyên công việc an toàn từ mọi nơi mà không dựa vào ranh giới vật lý truyền thống như văn phòng hay mạng nội bộ chuyên dụng, lấy danh tính người dùng mạnh mẽ và xác thực thiết bị làm đường ranh giới bảo mật mới)
- **뉘앙스와 사용법:** Danh tính chính là bức tường thành mới: không cần biết nhân viên ngồi ở quán cà phê hay ở nhà, hệ thống bảo vệ tài nguyên xoay quanh danh tính và quyền hạn của cá nhân đó chứ không dựa vào dây cáp mạng.
- **재사용 가능한 콜로케이션·청크:**
  - 차세대 신원기반경계없는보안망으로의 도약 (bước nhảy vọt sang mạng lưới bảo mật không ranh giới dựa trên danh tính thế hệ mới)
  - 글로벌 원격 근무를 지원하는 신원기반경계없는보안망 (mạng lưới bảo mật không ranh giới dựa trên danh tính hỗ trợ làm việc từ xa toàn cầu)
  - 신원기반경계없는보안망의 아키텍처 설계 (thiết kế kiến trúc của mạng lưới bảo mật không ranh giới dựa trên danh tính)
- **자주 쓰는 문형과 성분:**
  - 클라우드 마이그레이션이 가속화되면서 신원기반경계없는보안망의(이) 도입이 필연적인 과제로 떠올랐다 (khi việc di chuyển lên đám mây được đẩy nhanh, việc áp dụng mạng lưới bảo mật không ranh giới dựa trên danh tính đã nổi lên như một bài toán tất yếu)
  - 기업들은 신원기반경계없는보안망을(를) 구축하여 임직원이 전 세계 어디서든 본사 리소스에 안전하게 접속하도록 지원한다 (các doanh nghiệp xây dựng mạng lưới bảo mật không ranh giới dựa trên danh tính để hỗ trợ nhân viên kết nối an toàn tới tài nguyên trụ sở từ bất kỳ đâu trên thế giới)
- **사회적 관계·주제별 register:** Chiến lược bảo mật doanh nghiệp, chuyển đổi số đám mây, kiến trúc BeyondCorp.
- **예문:**
  - 신원기반경계없는보안망 덕분에 직원들은 사내 VPN 없이도 언제 어디서나 안전하게 클라우드 개발 서버에 접속할 수 있다.
- **Dịch:**
  - Nhờ có mạng lưới bảo mật không ranh giới dựa trên danh tính, các nhân viên có thể kết nối an toàn tới máy chủ phát triển đám mây mọi lúc mọi nơi mà không cần VPN nội bộ.
- **어휘 연결:**
  - 유의어: `아이덴티티보안` (bảo mật danh tính identity security)
  - 관련어: `경계없는네트워크` (mạng không biên giới borderless networking)
- **영어 참고:** `identity-based perimeterless security network` — mô hình an ninh coi danh tính người dùng và thiết bị là ranh giới bảo vệ duy nhất thay cho mạng vật lý truyền thống

---

### 통합보안관제실시간가시성

- **발음:** [통:합뽀:안관:제실:시간가:시성]
- **품사:** 명사
- **핵심 의미:** 온프레미스, 클라우드, 엔드포인트 등 분산된 IT 인프라 전체에서 발생하는 네트워크 패킷, 로그, 이벤트 데이터를 중앙에서 실시간으로 수집·분석하여 사각지대 없이 모든 이상 징후를 한눈에 파악할 수 있는 능력.
- **베트남어 뜻:** Khả năng hiển thị toàn diện theo thời gian thực trong giám sát an ninh tích hợp Integrated Security Operations Real-Time Visibility (năng lực thu thập và phân tích tập trung theo thời gian thực các dữ liệu gói mạng, nhật ký log và sự kiện phát sinh từ toàn bộ hạ tầng CNTT phân tán như on-premise, đám mây và điểm cuối, giúp nắm bắt mọi dấu hiệu bất thường trong nháy mắt mà không có điểm mù)
- **뉘앙스와 사용법:** Mắt thần quan sát 360 độ: không một hành động mở file, gửi mail hay kết nối mạng nào bị bỏ sót, giúp đội phản ứng sự cố nhìn thấy toàn bộ đường đi nước bước của kẻ tấn công trong vài giây.
- **재사용 가능한 콜로케이션·청크:**
  - 전사 통합보안관제실시간가시성 확보 (đảm bảo khả năng hiển thị toàn diện theo thời gian thực trong giám sát an ninh tích hợp trên toàn doanh nghiệp)
  - 통합보안관제실시간가시성을 제공하는 SIEM 플랫폼 (nền tảng SIEM cung cấp khả năng hiển thị toàn diện theo thời gian thực trong giám sát an ninh tích hợp)
  - 통합보안관제실시간가시성의 사각지대 제거 (loại bỏ điểm mù trong khả năng hiển thị toàn diện theo thời gian thực trong giám sát an ninh tích hợp)
- **자주 쓰는 문형과 성분:**
  - 침해 사고를 조기에 탐지하려면 통합보안관제실시간가시성이(가) 인프라 전 영역에서 완벽하게 유지되어야 한다 (để phát hiện sớm sự cố xâm nhập, khả năng hiển thị toàn diện theo thời gian thực trong giám sát an ninh tích hợp phải được duy trì hoàn hảo trên toàn bộ các lĩnh vực hạ tầng)
  - 보안 운영 센터(SOC)는 통합보안관제실시간가시성을(를) 바탕으로 악성 트래픽을 즉시 추적하여 차단했다 (Trung tâm Điều hành An ninh SOC dựa trên khả năng hiển thị toàn diện theo thời gian thực trong giám sát an ninh tích hợp đã truy vết và ngăn chặn ngay lập tức lưu lượng độc hại)
- **사회적 관계·주제별 register:** Trung tâm điều hành an ninh SOC, phân tích SIEM/SOAR, hiển thị hạ tầng.
- **예문:**
  - 통합보안관제실시간가시성이 확보되지 않은 환경에서는 고도화된 APT 공격의 침투 경로를 추적하기가 사실상 불가능하다.
- **Dịch:**
  - Trong môi trường không đảm bảo được khả năng hiển thị toàn diện theo thời gian thực trong giám sát an ninh tích hợp thì việc truy vết đường đi xâm nhập của cuộc tấn công APT tinh vi là điều bất khả thi trên thực tế.
- **어휘 연결:**
  - 유의어: `보안정보이벤트관리` (quản lý sự kiện thông tin bảo mật SIEM)
  - 관련어: `보안오케스트레이션` (điều phối và tự động hóa bảo mật SOAR)
- **영어 참고:** `integrated security operations real-time visibility` — khả năng theo dõi và hiểu rõ toàn bộ mọi hoạt động mạng và hệ thống theo thời gian thực để ngăn ngừa vi phạm

---

### 암호화통신세션동적격리

- **발음:** [암:호화통:신세:션동:쩍꼑:리]
- **품사:** 명사
- **핵심 의미:** 특정 통신 세션에서 의심스러운 트래픽이나 비정상 행위가 감지되었을 때, 전체 네트워크 연결을 끊지 않고 해당 암호화 터널 및 세션만을 즉각적으로 다른 자원으로부터 격리하여 위험의 파급을 차단하는 기술.
- **베트남어 뜻:** Sự cô lập động phiên giao tiếp được mã hóa Dynamic Isolation of Encrypted Communication Sessions (kỹ thuật khi phát hiện lưu lượng đáng ngờ hoặc hành vi bất thường trong một phiên giao tiếp cụ thể sẽ cô lập ngay lập tức đường hầm mã hóa và phiên đó khỏi các tài nguyên khác mà không ngắt toàn bộ kết nối mạng, nhằm ngăn chặn sự lan truyền rủi ro)
- **뉘앙스와 사용법:** Khoanh vùng kiểm dịch tức thì cho từng luồng dữ liệu: giống như đưa một hành khách bị sốt vào phòng cách ly riêng trên máy bay mà không cần phải hủy toàn bộ chuyến bay của mọi người.
- **재사용 가능한 콜로케이션·청크:**
  - 의심 단말의 암호화통신세션동적격리 조치 (biện pháp cô lập động phiên giao tiếp được mã hóa đối với thiết bị đáng ngờ)
  - 암호화통신세션동적격리를 통한 위협 확산 방지 (phòng chống phát tán mối đe dọa thông qua việc cô lập động phiên giao tiếp được mã hóa)
  - 자동화된 암호화통신세션동적격리 프로세스 (quy trình cô lập động phiên giao tiếp được mã hóa tự động hóa)
- **자주 쓰는 문형과 성분:**
  - 보안 방화벽은 감염 징후가 포착된 단말의 암호화통신세션동적격리를(을) 실행하여 피해를 사전에 봉쇄했다 (tường lửa bảo mật đã thực thi việc cô lập động phiên giao tiếp được mã hóa của thiết bị bị nghi nhiễm để phong tỏa thiệt hại từ trước)
  - 암호화통신세션동적격리가(이) 완료되면 공격자는 더 이상 다른 서버와 통신할 수 없게 된다 (khi việc cô lập động phiên giao tiếp được mã hóa hoàn tất, kẻ tấn công sẽ không thể giao tiếp với các máy chủ khác được nữa)
- **사회적 관계·주제별 register:** An ninh mạng chuyên sâu, phản ứng tự động SOAR, bảo mật TLS/SSL.
- **예문:**
  - 침해 탐지 시스템은 랜섬웨어 통신 패턴을 보이는 즉시 해당 워크로드의 암호화통신세션동적격리를 단행했다.
- **Dịch:**
  - Hệ thống phát hiện xâm nhập ngay khi nhận thấy mẫu giao tiếp của ransomware đã tiến hành cô lập động phiên giao tiếp được mã hóa của khối lượng công việc workload đó.
- **어휘 연결:**
  - 유의어: `세션격리` (cô lập phiên session isolation)
  - 관련어: `자동위협대응` (phản ứng mối đe dọa tự động automated threat response)
- **영어 참고:** `dynamic isolation of encrypted communication sessions` — phương pháp tự động phong tỏa và cách ly các phiên truyền thông được mã hóa khi phát hiện dấu hiệu xâm phạm

---

### 조건부접근정책엔포스먼트

- **발음:** [조:건부접:근정:책엔포:스먼트]
- **품사:** 명사
- **핵심 의미:** 사용자의 위치, 디바이스의 컴플라이언스 준수 여부, 애플리케이션의 중요도 등 사전 정의된 보안 조건들을 평가하여 접속 허용, 차단, 또는 다중요사인증(MFA) 요구를 강제 집행(Enforcement)하는 기술 및 프로세스.
- **베트남어 뜻:** Sự cưỡng chế thực thi chính sách truy cập có điều kiện Conditional Access Policy Enforcement (công nghệ và quy trình đánh giá các điều kiện bảo mật được định nghĩa trước như vị trí người dùng, sự tuân thủ quy chuẩn của thiết bị, mức độ quan trọng của ứng dụng để cưỡng chế thực thi việc cho phép, ngăn chặn hoặc yêu cầu xác thực đa yếu tố MFA)
- **뉘앙스와 사용법:** Cảnh sát giao thông thông minh tại cửa ngõ hệ thống: tự động áp đặt biện pháp an ninh phù hợp với từng tình huống, không có ngoại lệ cho bất kỳ ai vi phạm tiêu chuẩn.
- **재사용 가능한 콜로케이션·청크:**
  - 클라우드 포털의 조건부접근정책엔포스먼트 활성화 (kích hoạt sự cưỡng chế thực thi chính sách truy cập có điều kiện trên cổng thông tin đám mây)
  - 엄격한 조건부접근정책엔포스먼트 메커니즘 (cơ chế cưỡng chế thực thi chính sách truy cập có điều kiện nghiêm ngặt)
  - 조건부접근정책엔포스먼트를 통한 비인가 기기 차단 (chặn thiết bị trái phép thông qua sự cưỡng chế thực thi chính sách truy cập có điều kiện)
- **자주 쓰는 문형과 성분:**
  - 정보보안 책임자는 모든 SaaS 애플리케이션에 대해 조건부접근정책엔포스먼트를(을) 필수 요건으로 지정했다 (trưởng bộ phận an toàn thông tin đã chỉ định việc cưỡng chế thực thi chính sách truy cập có điều kiện là yêu cầu bắt buộc đối với mọi ứng dụng SaaS)
  - 조건부접근정책엔포스먼트가(이) 철저히 이루어지면 미등록 개인 기기의 사내 내부망 무단 접속이 원천 불가능해진다 (nếu việc cưỡng chế thực thi chính sách truy cập có điều kiện được thực hiện triệt để, việc thiết bị cá nhân chưa đăng ký tự ý kết nối vào mạng nội bộ công ty sẽ là điều hoàn toàn không thể)
- **사회적 관계·주제별 register:** Quản lý chính sách bảo mật, Azure AD/Entra ID, bảo mật dịch vụ SaaS.
- **예문:**
  - 조직은 관리되지 않는 단말기에 대해 조건부접근정책엔포스먼트를 적용하여 회사 데이터에 대한 다운로드를 금지했다.
- **Dịch:**
  - Tổ chức đã áp dụng sự cưỡng chế thực thi chính sách truy cập có điều kiện đối với các thiết bị không được quản lý để cấm tải xuống dữ liệu công ty.
- **어휘 연결:**
  - 유의어: `조건부액세스` (truy cập có điều kiện conditional access)
  - 관련어: `정책강제집행` (cưỡng chế thực thi chính sách policy enforcement)
- **영어 참고:** `conditional access policy enforcement` — cơ chế tự động kích hoạt các biện pháp kiểm soát truy cập dựa trên các quy tắc và điều kiện an ninh định sẵn

---

### 보안사고피해반경최소화

- **발음:** [보:안사:고피:해반:경최:소화]
- **품사:** 명사
- **핵심 의미:** 특정 시스템이나 계정이 해킹 공격을 받아 침해되더라도, 격리 기술과 권한 제한을 통해 침해 사고의 폭발 반경(Blast Radius)을 최소화하여 기업 전체 비즈니스로의 마비를 막는 방어 목표.
- **베트남어 뜻:** Sự tối thiểu hóa bán kính thiệt hại sự cố an ninh Minimization of Security Incident Blast Radius (mục tiêu phòng thủ nhằm giảm thiểu tối đa bán kính vụ nổ blast radius của sự cố xâm nhập thông qua các kỹ thuật cô lập và hạn chế quyền hạn, ngay cả khi một tài khoản hoặc hệ thống cụ thể bị tấn công mạng xâm phạm, ngăn ngừa tê liệt toàn bộ hoạt động kinh doanh của doanh nghiệp)
- **뉘앙스와 사용법:** Kiểm soát thiệt hại khi xảy ra hỏa hoạn: nhà có nhiều cửa chống cháy tự động đóng lại, dù một phòng bị cháy thì các phòng khác và cả tòa nhà vẫn an toàn nguyên vẹn.
- **재사용 가능한 콜로케이션·청크:**
  - 마이크로세그멘테이션을 통한 보안사고피해반경최소화 (tối thiểu hóa bán kính thiệt hại sự cố an ninh thông qua phân đoạn vi mô)
  - 보안사고피해반경최소화 전략 수립 (thiết lập chiến lược tối thiểu hóa bán kính thiệt hại sự cố an ninh)
  - 보안사고피해반경최소화의 성과 지표 측정 (đo lường chỉ số thành quả của việc tối thiểu hóa bán kính thiệt hại sự cố an ninh)
- **자주 쓰는 문형과 성분:**
  - 제로 트러스트 아키텍처의 궁극적인 설계 목적은 침해 발생 시 보안사고피해반경최소화를(을) 달성하는 것이다 (mục đích thiết kế tối hậu của kiến trúc Zero Trust là đạt được sự tối thiểu hóa bán kính thiệt hại sự cố an ninh khi xảy ra xâm phạm)
  - 각 서브넷을 엄격히 분리하자 감염 피해가 해당 서버에만 국한되어 보안사고피해반경최소화가(이) 실현되었다 (khi phân tách nghiêm ngặt từng mạng con, thiệt hại lây nhiễm chỉ giới hạn ở máy chủ đó giúp sự tối thiểu hóa bán kính thiệt hại sự cố an ninh được hiện thực hóa)
- **사회적 관계·주제별 register:** Chiến lược bảo mật thông tin, quản trị rủi ro doanh nghiệp, khả năng phục hồi mạng.
- **예문:**
  - 사내망에 구획별 격리 방화벽을 촘촘히 배치함으로써 침해 발생 시 보안사고피해반경최소화에 성공했다.
- **Dịch:**
  - Bằng cách bố trí dày đặc các tường lửa cách ly theo từng khu vực trong mạng nội bộ, chúng tôi đã thành công trong việc tối thiểu hóa bán kính thiệt hại sự cố an ninh khi xảy ra xâm nhập.
- **어휘 연결:**
  - 유의어: `폭발반경축소` (thu hẹp bán kính ảnh hưởng blast radius reduction)
  - 관련어: `사이버회복력` (khả năng phục hồi không gian mạng cyber resilience)
- **영어 참고:** `minimization of security incident blast radius` — chiến lược hạn chế phạm vi lây lan và tác động tiêu cực của một cuộc tấn công mạng khi nó xảy ra

---

### 적응형신원인증보안체계

- **발음:** [저:긍형신:원인:증보:안체:계]
- **품사:** 명사
- **핵심 의미:** 사용자의 로그인 요청 시 주변 상황, 기기 신뢰도, 과거 행동 패턴, 현재의 위협 인텔리전스 정보를 종합적으로 고려하여 인증 난이도(생체 인증, OTP, 거부 등)를 유연하게 변경 적용하는 지능형 인증 프레임워크.
- **베트남어 뜻:** Hệ thống bảo mật xác thực danh tính mang tính thích ứng Adaptive Identity Authentication Security Framework (khung xác thực thông minh linh hoạt thay đổi áp dụng mức độ khó của bước xác thực như sinh trắc học, OTP hoặc từ chối dựa trên việc xem xét tổng hợp thông tin tình báo mối đe dọa hiện tại, mẫu hành vi trong quá khứ, độ tin cậy của thiết bị và hoàn cảnh xung quanh khi người dùng yêu cầu đăng nhập)
- **뉘앙스와 사용법:** Khóa cửa nhận diện thông minh: người nhà về ban ngày chỉ cần bấm vân tay nhẹ nhàng là vào, nhưng nếu có người mở cửa lúc 3 giờ sáng thì bắt buộc phải nhập mã PIN 10 chữ số kèm quét mống mắt.
- **재사용 가능한 콜로케이션·청크:**
  - 인공지능 기반 적응형신원인증보안체계 도입 (áp dụng hệ thống bảo mật xác thực danh tính mang tính thích ứng dựa trên trí tuệ nhân tạo)
  - 적응형신원인증보안체계를 통한 사용자 편의성과 보안성 동시 확보 (vừa đảm bảo tính tiện lợi cho người dùng vừa đảm bảo tính bảo mật thông qua hệ thống bảo mật xác thực danh tính mang tính thích ứng)
  - 기업용 적응형신원인증보안체계 고도화 사업 (dự án nâng cấp hệ thống bảo mật xác thực danh tính mang tính thích ứng dành cho doanh nghiệp)
- **자주 쓰는 문형과 성분:**
  - 금융권은 모바일 뱅킹 사용자의 부정 거래를 차단하기 위해 적응형신원인증보안체계를(을) 구축했다 (ngành tài chính đã xây dựng hệ thống bảo mật xác thực danh tính mang tính thích ứng nhằm ngăn chặn các giao dịch gian lận của người dùng ngân hàng di động)
  - 적응형신원인증보안체계가(이) 도입되면 정상적인 환경에서는 간편 인증을 제공하고 위험 감지 시에만 강화된 인증을 요구한다 (khi hệ thống bảo mật xác thực danh tính mang tính thích ứng được áp dụng, nó sẽ cung cấp xác thực đơn giản trong môi trường bình thường và chỉ yêu cầu xác thực tăng cường khi phát hiện rủi ro)
- **사회적 관계·주제별 register:** Xác thực bảo mật thông minh, Fintech, bảo vệ người dùng IAM.
- **예문:**
  - 적응형신원인증보안체계는 평소와 다른 위치에서 고액 이체를 시도하는 사용자에게 추가적인 영상 안면 인증을 즉각 요구했다.
- **Dịch:**
  - Hệ thống bảo mật xác thực danh tính mang tính thích ứng đã lập tức yêu cầu xác thực khuôn mặt qua video bổ sung đối với người dùng đang cố gắng chuyển khoản số tiền lớn từ một địa điểm khác thường ngày.
- **어휘 연결:**
  - 유의어: `적응형인증` (xác thực thích ứng adaptive authentication)
  - 관련어: `생체인증보안` (bảo mật xác thực sinh trắc học biometric authentication security)
- **영어 참고:** `adaptive identity authentication security framework` — hệ thống xác thực động tự điều chỉnh mức độ nghiêm ngặt của phương thức xác thực dựa trên mức độ rủi ro ngữ cảnh

---

## 단원 종합 읽기 자료: 정보보안 및 제로 트러스트 아키텍처와 마이크로세그멘테이션의 언어
<!-- passage_word_count: 105 Korean eojeol; target_set: 제로트러스트신뢰검증체계, 네트워크마이크로세그멘테이션, 동적지속적인증인가기제, 최소권한접근제어원칙수립, 소프트웨어정의경계방어망, 상시위험기반접근평가엔진, 내부자공격횡적이동차단, 엔드포인트상태무결성검증, 맥락인지적접근통제정책, 신원기반경계없는보안망, 통합보안관제실시간가시성, 암호화통신세션동적격리, 조건부접근정책엔포스먼트, 보안사고피해반경최소화, 적응형신원인증보안체계 -->
국가사이버안보센터는 지능형 지속 위협(APT)과 악성 랜섬웨어 사이버 테러 공격을 무력화하기 위하여 신뢰하지 않고 항상 검증하는 제로트러스트신뢰검증체계 표준 가이드라인을 전면 발표했다. 이 프레임워크는 과거의 경계 중심 방어망을 탈피하여 네트워크마이크로세그멘테이션 기법을 도입함으로써 내부자공격횡적이동차단 방어선을 철저히 구축하고 침해 사고 발생 시 보안사고피해반경최소화 목표를 달성한다. 모든 네트워크 트래픽은 단말의 엔드포인트상태무결성검증 과정을 거쳐야 하며 소프트웨어정의경계방어망 기반 위에서 신원기반경계없는보안망 터널을 형성한다. 보안 관제 플랫폼은 상시위험기반접근평가엔진 분석을 통해 사용자의 위치와 기기 위험도를 실시간 측정하고 맥락인지적접근통제정책 규칙에 따라 동적지속적인증인가기제 프로세스를 구동한다. 또한 최소권한접근제어원칙수립 기준과 엄격한 조건부접근정책엔포스먼트 체계를 적용하여 비인가 접근을 원천 차단하고 암호화통신세션동적격리 기술과 적응형신원인증보안체계 솔루션을 상호 통합하여 국내외 모든 기업 클라우드 환경 전반의 통합보안관제실시간가시성 수준을 보안 업계 최고 수준으로 확실하게 완전하게 끌어올렸다.

**베트남어 번역:**
Trung tâm An ninh Mạng Quốc gia đã công bố toàn diện hướng dẫn tiêu chuẩn hệ thống kiểm chứng độ tin cậy Zero Trust nhằm vô hiệu hóa các cuộc tấn công mã độc tống tiền ransomware và mối đe dọa dai dẳng nâng cao APT. Khung làm việc này thoát ly khỏi mạng lưới phòng thủ lấy ranh giới làm trọng tâm, đưa vào kỹ thuật phân đoạn vi mô mạng để thiết lập tuyến phòng thủ chặn đứng sự dịch chuyển ngang của các cuộc tấn công nội bộ và đạt được mục tiêu tối thiểu hóa bán kính thiệt hại do sự cố bảo mật khi xảy ra sự cố xâm nhập. Mọi lưu lượng mạng đều phải trải qua quy trình kiểm chứng tính toàn vẹn trạng thái điểm cuối của thiết bị và hình thành đường hầm mạng lưới bảo mật không biên giới dựa trên danh tính phía trên nền tảng mạng phòng thủ ranh giới định nghĩa bằng phần mềm. Nền tảng kiểm soát an ninh thông qua phân tích của công cụ đánh giá tiếp cận dựa trên rủi ro thường trực sẽ đo lường rủi ro thiết bị và vị trí người dùng theo thời gian thực và vận hành quy trình cơ chế cấp phép xác thực liên tục mang tính động theo các quy tắc chính sách kiểm soát tiếp cận nhận biết ngữ cảnh. Thêm vào đó, việc áp dụng hệ thống thực thi chính sách tiếp cận có điều kiện nghiêm ngặt và tiêu chuẩn xác lập nguyên tắc kiểm soát tiếp cận đặc quyền tối thiểu đã ngăn chặn từ gốc rễ các tiếp cận trái phép, đồng thời tích hợp giải pháp hệ thống bảo mật xác thực danh tính thích ứng với công nghệ cách ly động các phiên truyền thông mã hóa để nâng tầm mức độ trực quan hóa thời gian thực kiểm soát an ninh tích hợp trên toàn bộ đám mây doanh nghiệp lên mức cao nhất.
