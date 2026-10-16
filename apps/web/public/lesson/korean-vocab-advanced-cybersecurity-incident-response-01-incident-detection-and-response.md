<!-- source_policy: original explanations, examples, and passage; incident-response terminology is used as contemporary Korean learning context -->

# 침해사고를 발견하고 수습하는 흐름

보안팀은 경보 하나를 곧바로 대규모 공격으로 단정하지 않는다. 침해의 징후를 분류하고, 영향을 받는 자산과 공격 흐름을 확인한 뒤, 증거를 보존하면서 서비스와 조직의 피해를 통제한다.

<!-- lexical_basis: advanced_native; register: cybersecurity policy and public incident reporting; source_lane: news_formal; context: advanced-cybersecurity-incident-response/news_formal -->
### 침해사고

**품사:** 명사

**핵심 의미:** 정보 시스템의 기밀성·무결성·가용성이 공격이나 실수로 훼손되었거나 훼손될 가능성이 확인된 보안 사건이다.

**베트남어 뜻:** sự cố xâm nhập an ninh mạng; sự kiện bảo mật trong đó tính bí mật, toàn vẹn hoặc khả dụng của hệ thống bị xâm phạm hoặc có nguy cơ bị xâm phạm.

**뉘앙스와 사용법:** `침해사고`는 단순한 서비스 장애나 취약점의 존재보다 실제 영향 또는 합리적인 침해 의심을 강조한다. 아직 사실관계가 확정되지 않았으면 `침해사고 의심`이나 `침해사고 조사`라고 말해 단정하지 않는다.

**재사용 가능한 콜로케이션·청크:** `침해사고를 신고하다`, `침해사고가 발생하다`, `침해사고 조사에 착수하다` — báo cáo sự cố, sự cố xảy ra và bắt đầu điều tra.

**자주 쓰는 문형과 성분:** `기관에서 N 침해사고가 발생하다`, `기업이 침해사고를 공지하다`처럼 주체·영향받은 자산·공식 조치를 함께 제시한다.

**사회적 관계·주제별 register:** 보안 공지, 감독기관 보고와 언론 보도의 공식어다. 일반 사용자에게는 `시스템이나 계정이 공격으로 실제 영향을 받은 사건`이라고 풀어 말한다.

**예문:** 회사는 고객 정보가 노출됐을 가능성을 확인한 뒤 침해사고 조사에 착수했다.

**Dịch:** Sau khi xác nhận khả năng thông tin khách hàng bị lộ, công ty bắt đầu điều tra sự cố xâm nhập.

**어휘 연결:** `침해사고`는 보안 관점의 사건이고 `보안 사고`는 더 넓고 일반적인 표현이다. `데이터 침해`는 데이터의 노출·변경이라는 결과에 초점을 둔다.

**영어 참고:** *security incident* / *cybersecurity incident* — sự cố an ninh; *breach* thường nhấn mạnh việc quyền truy cập hoặc dữ liệu đã thực sự bị xâm phạm.

---

<!-- lexical_basis: contemporary_native_hot; register: security operations and emergency workplace talk; source_lane: native_spoken; context: advanced-cybersecurity-incident-response/native_spoken -->
### 초동조치

**품사:** 명사

**핵심 의미:** 사고가 확인된 직후 추가 피해와 증거 훼손을 막기 위해 가장 먼저 취하는 긴급 조치다.

**베트남어 뜻:** biện pháp xử lý ban đầu; hành động khẩn cấp được thực hiện ngay sau khi xác nhận sự cố để ngăn thiệt hại thêm và tránh làm hỏng chứng cứ.

**뉘앙스와 사용법:** `초동조치`는 최종 원인 분석이나 완전한 복구가 아니라 첫 몇 분·몇 시간의 우선순위를 가리킨다. 무턱대고 전원을 끄기보다 로그 보존, 영향 범위 확인과 격리 순서를 판단하는 뉘앙스가 있다.

**재사용 가능한 콜로케이션·청크:** `초동조치를 취하다`, `초동조치가 늦어지다`, `초동조치 매뉴얼` — thực hiện biện pháp ban đầu, bị chậm và sổ tay xử lý ban đầu.

**자주 쓰는 문형과 성분:** `대응팀이 N에 대해 초동조치를 취하다`, `초동조치로 A를 격리하다`가 자연스럽다. N은 경보·침해 의심 자산, A는 계정·단말이다.

**사회적 관계·주제별 register:** 관제센터의 긴급 협업과 사고 보고서에서 쓰인다. 외부 공지에서는 `긴급 대응을 시작했다`로 풀어 쓰는 편이 이해하기 쉽다.

**예문:** 관제팀은 감염이 의심된 단말의 네트워크를 끊는 초동조치를 취했다.

**Dịch:** Đội giám sát thực hiện biện pháp ban đầu là ngắt mạng của thiết bị đầu cuối bị nghi nhiễm.

**어휘 연결:** `초동조치`는 시간상 첫 대응이고 `사고대응`은 조사·차단·복구를 포함한 전체 과정이다. `긴급조치`는 보안 외 분야에서도 쓰이는 더 넓은 말이다.

**영어 참고:** *initial response* / *first response action* — hành động đầu tiên khi xử lý sự cố; không đồng nghĩa với toàn bộ quy trình *incident response*.

---

<!-- lexical_basis: advanced_native; register: cybersecurity governance and formal reporting; source_lane: news_formal; context: advanced-cybersecurity-incident-response/news_formal -->
### 사고대응

**품사:** 명사

**핵심 의미:** 보안 사고를 탐지하고 범위를 파악하며 확산을 억제하고 서비스를 복구하는 조직적 대응 과정이다.

**베트남어 뜻:** ứng phó sự cố; quy trình có tổ chức gồm phát hiện, xác định phạm vi, hạn chế lan rộng và khôi phục dịch vụ sau sự cố bảo mật.

**뉘앙스와 사용법:** `사고대응`은 사람·권한·연락망·절차를 포함하는 운영 체계다. 특정 도구 하나를 실행하는 뜻으로 축소하면 안 되며, 의사결정과 기록 책임까지 드러내는 말이다.

**재사용 가능한 콜로케이션·청크:** `사고대응 체계`, `사고대응 역량을 강화하다`, `사고대응 훈련` — hệ thống ứng phó, tăng năng lực và huấn luyện ứng phó.

**자주 쓰는 문형과 성분:** `기관이 사고대응 체계를 마련하다`, `대응팀이 N을 중심으로 사고대응에 나서다`처럼 주체·체계·초점을 함께 말한다.

**사회적 관계·주제별 register:** 기업 보안정책, 공공기관 보고와 전문 회의의 공식어다. 실무자 사이에서는 `탐지부터 복구까지의 대응 흐름`이라고 설명할 수 있다.

**예문:** 금융사는 외부 전문업체와 함께 사고대응 모의훈련을 정기적으로 실시한다.

**Dịch:** Công ty tài chính thường xuyên tiến hành diễn tập ứng phó sự cố cùng đơn vị chuyên môn bên ngoài.

**어휘 연결:** `사고대응`은 조직의 전 과정이고 `초동조치`는 그 시작 단계다. `장애조치`는 서비스 고장 복구에 더 가깝고 공격자 조사까지 반드시 포함하지는 않는다.

**영어 참고:** *incident response* — ứng phó sự cố theo toàn bộ vòng đời; rộng hơn một hành động khắc phục đơn lẻ.

---

<!-- lexical_basis: advanced_native; register: threat intelligence and security policy reporting; source_lane: news_formal; context: advanced-cybersecurity-incident-response/news_formal -->
### 위협인텔리전스

**품사:** 명사

**핵심 의미:** 공격자·도구·목표·전술에 관한 자료를 분석해 실제 보안 의사결정에 쓸 수 있게 만든 정보다.

**베트남어 뜻:** tình báo mối đe dọa; thông tin về kẻ tấn công, công cụ, mục tiêu và chiến thuật đã được phân tích để phục vụ quyết định bảo mật.

**뉘앙스와 사용법:** `위협인텔리전스`는 인터넷에서 수집한 지표를 그대로 모아 둔 목록이 아니다. 출처와 신뢰도, 우리 조직과의 관련성을 판단해 탐지·차단·위험 평가로 연결한다.

**재사용 가능한 콜로케이션·청크:** `위협인텔리전스를 공유하다`, `위협인텔리전스 보고서`, `위협인텔리전스를 탐지에 반영하다` — chia sẻ tình báo, báo cáo và đưa vào phát hiện.

**자주 쓰는 문형과 성분:** `분석가가 A를 바탕으로 위협인텔리전스를 생산하다`, `기관이 N에 위협인텔리전스를 제공하다`가 자연스럽다.

**사회적 관계·주제별 register:** 정부·기업 보안팀과 전문 보도의 기술·정책어다. 일반 설명에서는 `공격자의 수법과 의도를 분석해 대응에 쓰는 정보`라고 한다.

**예문:** 보안센터는 해외 기관이 공유한 위협인텔리전스를 탐지 규칙에 반영했다.

**Dịch:** Trung tâm an ninh đưa thông tin tình báo mối đe dọa do cơ quan nước ngoài chia sẻ vào các quy tắc phát hiện.

**어휘 연결:** `위협인텔리전스`는 분석된 판단 자료이고 `침해지표`는 그 판단에 쓰이는 특정 단서다. `보안정보`는 범위가 더 넓어 장비 상태까지 포함할 수 있다.

**영어 참고:** *threat intelligence* — thông tin tình báo đã được phân tích để hành động; không chỉ là danh sách địa chỉ IP đáng ngờ.

---

<!-- lexical_basis: advanced_native; register: cybersecurity architecture and risk reporting; source_lane: news_formal; context: advanced-cybersecurity-incident-response/news_formal -->
### 공격표면

**품사:** 명사

**핵심 의미:** 공격자가 접근하거나 악용할 수 있는 시스템·서비스·계정·인터페이스의 전체 범위다.

**베트남어 뜻:** bề mặt tấn công; toàn bộ phạm vi hệ thống, dịch vụ, tài khoản và giao diện mà kẻ tấn công có thể tiếp cận hoặc khai thác.

**뉘앙스와 사용법:** `공격표면`은 취약점의 개수만 세는 말이 아니라 외부에 노출된 진입점과 권한 연결을 함께 보는 개념이다. 클라우드 자산, 협력업체 계정과 오래된 API도 표면을 넓힐 수 있다.

**재사용 가능한 콜로케이션·청크:** `공격표면을 줄이다`, `공격표면 관리`, `외부 공격표면을 점검하다` — thu hẹp, quản lý và kiểm tra bề mặt tấn công bên ngoài.

**자주 쓰는 문형과 성분:** `조직이 A로 공격표면을 줄이다`, `감사팀이 N의 공격표면을 식별하다`가 대표적이다. A는 접근통제·자산 정리 같은 수단이다.

**사회적 관계·주제별 register:** 보안 설계, 위험평가와 경영진 보고의 전문어다. 비전문가에게는 `공격자가 들어올 수 있는 문과 창문의 전체 수`로 비유한다.

**예문:** 사용하지 않는 원격 접속 계정을 닫자 회사의 공격표면이 눈에 띄게 줄었다.

**Dịch:** Khi đóng các tài khoản truy cập từ xa không sử dụng, bề mặt tấn công của công ty đã giảm rõ rệt.

**어휘 연결:** `공격표면`은 가능한 진입점의 총합이고 `침투경로`는 특정 사건에서 실제로 이용된 길이다. `취약점`은 표면을 구성하는 결함 중 하나일 수 있다.

**영어 참고:** *attack surface* — tổng các điểm có thể bị tấn công; rộng hơn một lỗ hổng cụ thể.

---

<!-- lexical_basis: advanced_native; register: incident investigation and technical reporting; source_lane: news_formal; context: advanced-cybersecurity-incident-response/news_formal -->
### 침투경로

**품사:** 명사

**핵심 의미:** 공격자가 시스템이나 조직 안으로 들어오기 위해 이용한 구체적인 연결·취약점·계정의 경로다.

**베트남어 뜻:** đường xâm nhập; tuyến kết nối, lỗ hổng hoặc tài khoản cụ thể mà kẻ tấn công sử dụng để vào hệ thống hay tổ chức.

**뉘앙스와 사용법:** `침투경로`는 공격이 가능했다는 추상적 위험보다 실제 사건의 흐름을 재구성할 때 쓰인다. 피싱 메일에서 탈취 계정, 원격 접속으로 이어지는 것처럼 여러 단계로 설명할 수 있다.

**재사용 가능한 콜로케이션·청크:** `침투경로를 추적하다`, `침투경로를 차단하다`, `최초 침투경로` — truy vết, chặn và đường xâm nhập ban đầu.

**자주 쓰는 문형과 성분:** `분석팀이 N을 통해 침투경로를 확인하다`, `공격자가 A를 침투경로로 삼다`가 자연스럽다. N·A는 메일, 취약 서버, 도난 계정이다.

**사회적 관계·주제별 register:** 사고 조사 보고서와 보안 브리핑의 전문어다. 대외 발표에서는 `공격이 시작된 경로`라고 풀어 쓸 수 있다.

**예문:** 조사팀은 오래된 VPN 계정이 최초 침투경로였다는 정황을 확보했다.

**Dịch:** Nhóm điều tra thu được dấu hiệu cho thấy tài khoản VPN cũ là đường xâm nhập ban đầu.

**어휘 연결:** `침투경로`는 실제로 사용된 진입 흐름이고 `공격표면`은 이용될 수 있었던 전체 범위다. `공격 벡터`는 같은 뜻으로도 쓰이지만 기술 문서의 차용어 느낌이 더 강하다.

**영어 참고:** *intrusion path* / *attack vector* — đường xâm nhập hoặc phương thức tấn công; *path* nhấn mạnh diễn tiến cụ thể hơn.

---

<!-- lexical_basis: advanced_native; register: security operations and technical workplace talk; source_lane: native_spoken; context: advanced-cybersecurity-incident-response/native_spoken -->
### 권한상승

**품사:** 명사

**핵심 의미:** 공격자나 프로그램이 원래 허용된 수준보다 높은 시스템 권한을 얻는 행위 또는 과정이다.

**베트남어 뜻:** leo thang đặc quyền; hành vi hoặc quá trình kẻ tấn công hay chương trình đạt được quyền hệ thống cao hơn mức vốn được phép.

**뉘앙스와 사용법:** `권한상승`은 단순한 로그인 성공이 아니라 일반 사용자 권한에서 관리자·시스템 권한으로 올라가는 변화를 가리킨다. 취약점 악용, 잘못된 설정과 탈취된 관리자 계정이 원인이 될 수 있다.

**재사용 가능한 콜로케이션·청크:** `권한상승을 시도하다`, `권한상승 취약점`, `비정상적인 권한상승` — cố gắng leo thang, lỗ hổng leo thang và leo thang bất thường.

**자주 쓰는 문형과 성분:** `공격자가 A를 이용해 권한상승을 시도하다`가 자연스럽다. A에는 취약점·스크립트·잘못된 설정이 온다.

**사회적 관계·주제별 register:** 관제 분석가와 침투 테스트 보고서에서 쓰는 전문어다. 일반 설명에서는 `허용된 사용자보다 더 센 열쇠를 얻는 것`이라고 비유한다.

**예문:** 분석가는 일반 계정 로그인 뒤 권한상승이 이어졌는지 명령 실행 기록을 확인했다.

**Dịch:** Nhà phân tích kiểm tra nhật ký thực thi lệnh xem sau khi đăng nhập bằng tài khoản thường có xảy ra leo thang đặc quyền hay không.

**어휘 연결:** `권한상승`은 권한 수준의 변화이고 `접근 권한`은 원래 부여된 허용 범위다. `계정 탈취`가 권한상승의 원인이 될 수 있지만 두 개념은 같지 않다.

**영어 참고:** *privilege escalation* — nâng quyền vượt quá mức được cấp; có thể là *vertical* hoặc *horizontal* tùy loại quyền.

---

<!-- lexical_basis: advanced_native; register: security operations and incident investigation; source_lane: native_spoken; context: advanced-cybersecurity-incident-response/native_spoken -->
### 측면이동

**품사:** 명사

**핵심 의미:** 공격자가 한 시스템이나 계정에 들어온 뒤 같은 조직의 다른 장치·서버·계정으로 옮겨 가는 행위다.

**베트남어 뜻:** di chuyển ngang; hành vi kẻ tấn công di chuyển từ hệ thống hoặc tài khoản đã vào sang thiết bị, máy chủ hay tài khoản khác trong cùng tổ chức.

**뉘앙스와 사용법:** `측면이동`은 외부에서 안으로 들어오는 최초 침투와 다르며, 내부에서 영향 범위를 넓히는 단계다. 공유 자격 증명, 관리 도구와 파일 공유가 악용될 수 있어 정상 관리 작업과 구별해야 한다.

**재사용 가능한 콜로케이션·청크:** `측면이동을 탐지하다`, `측면이동 흔적`, `내부 측면이동을 차단하다` — phát hiện, dấu vết và chặn di chuyển ngang.

**자주 쓰는 문형과 성분:** `공격자가 A에서 B로 측면이동하다`, `관제팀이 N을 근거로 측면이동을 의심하다`가 자연스럽다.

**사회적 관계·주제별 register:** 보안관제와 사고 분석가 사이의 전문 실무어다. 경영진 설명에서는 `한 대의 감염이 내부 다른 시스템으로 번진 과정`이라고 풀어 말한다.

**예문:** 비정상적인 관리자 도구 사용은 공격자의 측면이동 가능성을 높였다.

**Dịch:** Việc sử dụng công cụ quản trị bất thường làm tăng khả năng kẻ tấn công di chuyển ngang.

**어휘 연결:** `측면이동`은 내부 확산이고 `침투경로`는 최초 진입 또는 특정 진입 흐름이다. `확산`은 결과를 넓게 말하고, 측면이동은 공격자의 이동 행위를 강조한다.

**영어 참고:** *lateral movement* — di chuyển trong mạng nội bộ sau khi đã có chỗ đứng; không phải việc lan truyền tự động của phần mềm.

---

<!-- lexical_basis: contemporary_native_hot; register: security operations and emergency workplace talk; source_lane: native_spoken; context: advanced-cybersecurity-incident-response/native_spoken -->
### 격리조치

**품사:** 명사

**핵심 의미:** 감염되었거나 위험이 의심되는 장치·계정·네트워크를 정상 자원과 분리해 추가 확산을 막는 조치다.

**베트남어 뜻:** biện pháp cách ly; tách thiết bị, tài khoản hoặc mạng bị nhiễm hay bị nghi ngờ khỏi tài nguyên bình thường để ngăn lan rộng.

**뉘앙스와 사용법:** `격리조치`는 문제 자산을 곧바로 삭제하거나 포맷한다는 뜻이 아니다. 증거를 보존하면서 통신·로그인·실행 범위를 제한하는 임시 통제라는 점이 중요하다.

**재사용 가능한 콜로케이션·청크:** `단말 격리조치`, `계정을 격리조치하다`, `격리조치를 해제하다` — cách ly thiết bị, tài khoản và gỡ biện pháp cách ly.

**자주 쓰는 문형과 성분:** `대응팀이 N에 격리조치를 적용하다`, `A를 격리해 B를 보호하다`가 자연스럽다. N은 자산, A는 감염 단말, B는 업무망이다.

**사회적 관계·주제별 register:** 관제센터와 IT 운영팀의 즉시 실행 지시에서 쓰인다. 사용자 공지에서는 `해당 기기를 네트워크에서 분리했다`라고 설명한다.

**예문:** 대응팀은 랜섬웨어가 실행된 서버에 격리조치를 적용하고 백업 저장소의 연결을 끊었다.

**Dịch:** Đội ứng phó áp dụng biện pháp cách ly cho máy chủ đã chạy ransomware và ngắt kết nối với kho sao lưu.

**어휘 연결:** `격리조치`는 확산을 막는 통제이고 `차단`은 특정 연결·행위를 막는 더 좁은 조치일 수 있다. `복구`는 격리 뒤 정상 기능을 되돌리는 단계다.

**영어 참고:** *containment measure* / *isolation action* — biện pháp khoanh vùng hoặc cô lập; thường là bước tạm thời trước loại bỏ và khôi phục.

---

<!-- lexical_basis: contemporary_native_hot; register: threat hunting and security operations; source_lane: native_spoken; context: advanced-cybersecurity-incident-response/native_spoken -->
### 위협사냥

**품사:** 명사

**핵심 의미:** 아직 경보로 드러나지 않은 공격자의 흔적을 가설과 자료 분석으로 능동적으로 찾아내는 보안 활동이다.

**베트남어 뜻:** săn tìm mối đe dọa; hoạt động bảo mật chủ động tìm dấu vết của kẻ tấn công chưa lộ ra qua cảnh báo bằng giả thuyết và phân tích dữ liệu.

**뉘앙스와 사용법:** `위협사냥`은 들어온 경보를 처리하는 수동 관제와 다르다. 분석가가 의심스러운 행위 가설을 세우고 여러 로그와 단말 자료를 가로질러 확인한다.

**재사용 가능한 콜로케이션·청크:** `위협사냥을 수행하다`, `위협사냥 가설`, `정기적인 위협사냥` — thực hiện threat hunting, giả thuyết và hoạt động săn tìm định kỳ.

**자주 쓰는 문형과 성분:** `분석가가 A를 가설로 위협사냥을 진행하다`, `로그를 가로질러 N을 찾다`가 대표적이다.

**사회적 관계·주제별 register:** 보안관제센터와 고급 분석팀의 실무어다. 일반 설명에서는 `경보가 울리기 전에 이상 징후를 직접 찾아보는 일`이라고 한다.

**예문:** 사고가 진정된 뒤에도 분석팀은 같은 공격자의 흔적을 찾기 위해 위협사냥을 이어 갔다.

**Dịch:** Ngay cả sau khi sự cố lắng xuống, đội phân tích vẫn tiếp tục săn tìm mối đe dọa để tìm dấu vết của cùng kẻ tấn công.

**어휘 연결:** `위협사냥`은 가설을 세워 능동적으로 찾는 과정이고 `행위기반탐지`는 특정 행동을 규칙이나 모델로 감지하는 기술이다. `모니터링`은 계속 관찰한다는 더 넓은 말이다.

**영어 참고:** *threat hunting* — săn tìm chủ động các mối đe dọa ẩn; khác với việc chỉ xử lý cảnh báo đã tạo sẵn.

---

<!-- lexical_basis: advanced_native; register: incident investigation and threat reporting; source_lane: news_formal; context: advanced-cybersecurity-incident-response/news_formal -->
### 침해지표

**품사:** 명사

**핵심 의미:** 시스템이 공격이나 악성 활동의 영향을 받았음을 뒷받침하는 파일·주소·도메인·행위 등의 관찰 가능한 단서다.

**베트남어 뜻:** chỉ dấu xâm nhập; manh mối quan sát được như tệp, địa chỉ, tên miền hoặc hành vi giúp chứng minh hệ thống chịu ảnh hưởng của cuộc tấn công hay hoạt động độc hại.

**뉘앙스와 사용법:** `침해지표`는 의심을 좁히는 단서이지 그 자체로 공격자의 의도나 사건 전체를 증명하지는 않는다. 오래된 지표는 정상 서비스와 겹치거나 이미 무력화될 수 있어 맥락과 최신성을 함께 확인한다.

**재사용 가능한 콜로케이션·청크:** `침해지표를 수집하다`, `침해지표를 공유하다`, `침해지표를 검색하다` — thu thập, chia sẻ và tìm kiếm chỉ dấu.

**자주 쓰는 문형과 성분:** `분석가가 N에서 침해지표를 추출하다`, `기관이 A를 침해지표로 배포하다`처럼 자료 출처와 활용 목적을 함께 말한다.

**사회적 관계·주제별 register:** 사고 보고서, 위협정보 공유와 관제 운영의 기술어다. 일반인에게는 `공격이 있었을 가능성을 보여 주는 디지털 단서`라고 풀이한다.

**예문:** 보안팀은 악성 도메인과 비정상 프로세스를 침해지표로 정리해 협력사에 전달했다.

**Dịch:** Đội an ninh tổng hợp tên miền độc hại và tiến trình bất thường thành các chỉ dấu xâm nhập rồi chuyển cho đối tác.

**어휘 연결:** `침해지표`는 관찰 가능한 단서이고 `위협인텔리전스`는 여러 단서를 분석한 판단 자료다. `로그`는 지표가 발견될 수 있는 원천 기록이다.

**영어 참고:** *indicator of compromise (IoC)* — chỉ dấu cho thấy một hệ thống có thể đã bị xâm nhập; không phải mọi cảnh báo đều là IoC đã xác nhận.

---

<!-- lexical_basis: advanced_native; register: detection engineering and security operations; source_lane: native_spoken; context: advanced-cybersecurity-incident-response/native_spoken -->
### 행위기반탐지

**품사:** 명사

**핵심 의미:** 파일 이름이나 고정된 주소보다 프로세스·접속·명령의 이상한 행동 패턴을 분석해 위협을 찾아내는 탐지 방식이다.

**베트남어 뜻:** phát hiện dựa trên hành vi; phương thức tìm mối đe dọa bằng cách phân tích mẫu hành vi bất thường của tiến trình, kết nối hoặc lệnh thay vì chỉ dựa vào tên tệp hay địa chỉ cố định.

**뉘앙스와 사용법:** `행위기반탐지`는 변종 악성코드처럼 이름과 지문이 바뀌어도 이상 행동을 포착할 수 있다. 반면 정상 관리 도구도 비슷한 행동을 보여 오탐이 늘 수 있으므로 업무 맥락과 예외 조건이 중요하다.

**재사용 가능한 콜로케이션·청크:** `행위기반탐지를 적용하다`, `행위기반탐지 엔진`, `행위기반탐지 정확도` — áp dụng, công cụ và độ chính xác của phát hiện dựa trên hành vi.

**자주 쓰는 문형과 성분:** `관제시스템이 A를 행위기반탐지로 포착하다`, `분석가가 N을 정상 행위와 구분하다`가 자연스럽다.

**사회적 관계·주제별 register:** 보안 제품 설명과 관제팀 회의의 전문어다. 비전문가에게는 `무엇이라는 이름보다 실제 움직임을 보고 잡는 방식`이라고 설명한다.

**예문:** 새 변종은 파일 지문이 달랐지만 비정상 명령 연결은 행위기반탐지에 포착됐다.

**Dịch:** Biến thể mới có dấu vân tay tệp khác, nhưng kết nối lệnh bất thường vẫn bị phát hiện dựa trên hành vi bắt được.

**어휘 연결:** `행위기반탐지`는 탐지 원리이고 `탐지규칙`은 그 원리를 시스템에 구현한 조건이다. `서명기반탐지`는 알려진 파일 지문이나 패턴을 더 직접적으로 비교한다.

**영어 참고:** *behavior-based detection* — phát hiện dựa trên hành vi; thường bổ sung cho *signature-based detection* chứ không phải lúc nào cũng thay thế hoàn toàn.

---

<!-- lexical_basis: contemporary_native_hot; register: detection engineering and technical workplace talk; source_lane: native_spoken; context: advanced-cybersecurity-incident-response/native_spoken -->
### 탐지규칙

**품사:** 명사

**핵심 의미:** 특정 로그·이벤트·행동 조합이 나타났을 때 경보를 내도록 보안 시스템에 설정한 조건이다.

**베트남어 뜻:** quy tắc phát hiện; điều kiện được cấu hình trong hệ thống bảo mật để tạo cảnh báo khi xuất hiện tổ hợp nhật ký, sự kiện hoặc hành vi nhất định.

**뉘앙스와 사용법:** `탐지규칙`은 단순한 설정값이 아니라 어떤 위협 가설과 대응 목적을 반영한 운영 자산이다. 너무 넓으면 오탐이 많고, 너무 좁으면 공격을 놓치므로 지속적인 튜닝과 검증이 필요하다.

**재사용 가능한 콜로케이션·청크:** `탐지규칙을 배포하다`, `탐지규칙을 튜닝하다`, `탐지규칙의 우선순위` — triển khai, tinh chỉnh và ưu tiên quy tắc phát hiện.

**자주 쓰는 문형과 성분:** `분석가가 A를 조건으로 탐지규칙을 작성하다`, `시스템이 N을 탐지규칙에 따라 경보로 전환하다`가 대표적이다.

**사회적 관계·주제별 register:** SIEM·EDR 운영과 보안 개발 업무에서 쓰는 실무어다. 경영진에게는 `이상 행동을 경보로 바꾸는 조건`이라고 풀어 말한다.

**예문:** 분석가는 정상적인 배포 작업을 제외하도록 관리자 도구 관련 탐지규칙을 튜닝했다.

**Dịch:** Nhà phân tích tinh chỉnh quy tắc phát hiện liên quan đến công cụ quản trị để loại trừ các tác vụ triển khai bình thường.

**어휘 연결:** `탐지규칙`은 경보를 만드는 조건이고 `침해지표`는 그 조건에 들어갈 수 있는 단서다. `정책`은 허용·차단의 조직 원칙까지 포함해 범위가 더 넓다.

**영어 참고:** *detection rule* — điều kiện tạo cảnh báo; cần được kiểm thử để cân bằng *false positives* và *false negatives*.

---

<!-- lexical_basis: advanced_native; register: incident governance and root-cause reporting; source_lane: news_formal; context: advanced-cybersecurity-incident-response/news_formal -->
### 근본원인

**품사:** 명사

**핵심 의미:** 표면에 드러난 장애나 침해를 일으킨 더 깊은 기술적·조직적 원인이다.

**베트남어 뜻:** nguyên nhân gốc rễ; nguyên nhân kỹ thuật hoặc tổ chức sâu hơn đã gây ra sự cố hay việc xâm nhập biểu hiện ở bề mặt.

**뉘앙스와 사용법:** `근본원인`은 처음 발견된 취약점 하나를 지목하는 것으로 끝나지 않는다. 패치 지연, 자산 관리 부재, 권한 설계와 감독 공백처럼 재발을 가능하게 한 조건까지 묻는다.

**재사용 가능한 콜로케이션·청크:** `근본원인을 규명하다`, `근본원인 분석`, `근본원인을 제거하다` — xác định, phân tích và loại bỏ nguyên nhân gốc rễ.

**자주 쓰는 문형과 성분:** `조사팀이 N의 근본원인을 규명하다`, `A가 사고의 근본원인으로 지목되다`가 자연스럽다. A는 설정 오류·관리 공백이다.

**사회적 관계·주제별 register:** 감사·사고 보고서와 경영진 회의에서 쓰이는 공식어다. 비난보다 시스템 개선을 강조할 때 유용하다.

**예문:** 보고서는 한 직원의 실수보다 오래된 권한 정책의 부재를 침해의 근본원인으로 보았다.

**Dịch:** Báo cáo coi sự thiếu vắng một chính sách quyền hạn phù hợp đã tồn tại lâu hơn là nguyên nhân gốc rễ của vụ xâm nhập, thay vì lỗi của một nhân viên.

**어휘 연결:** `근본원인`은 재발을 설명하는 깊은 원인이고 `직접 원인`은 바로 앞에서 사건을 촉발한 요인이다. `원인 분석`은 두 층위를 모두 포함할 수 있다.

**영어 참고:** *root cause* — nguyên nhân gốc rễ; thường được dùng trong *root-cause analysis* để tránh chỉ xử lý triệu chứng.

---

<!-- lexical_basis: advanced_native; register: post-incident governance and security reporting; source_lane: news_formal; context: advanced-cybersecurity-incident-response/news_formal -->
### 사후분석

**품사:** 명사

**핵심 의미:** 사고가 안정된 뒤 대응 과정과 원인·영향·의사결정을 되짚어 다음 사고의 예방과 대응 개선에 쓰는 분석이다.

**베트남어 뜻:** phân tích sau sự cố; phân tích nguyên nhân, ảnh hưởng và quyết định sau khi sự cố ổn định để phòng ngừa và cải thiện ứng phó lần sau.

**뉘앙스와 사용법:** `사후분석`은 누가 잘못했는지를 찾는 징계 절차와 다르다. 타임라인, 놓친 신호, 의사소통 지연과 통제의 빈틈을 사실에 근거해 기록하고 개선 항목으로 바꾼다.

**재사용 가능한 콜로케이션·청크:** `사후분석을 실시하다`, `사후분석 보고서`, `사후분석 결과를 반영하다` — tiến hành phân tích, báo cáo và phản ánh kết quả.

**자주 쓰는 문형과 성분:** `대응팀이 사고 종료 후 사후분석을 실시하다`, `N을 다음 훈련에 반영하다`가 대표적이다.

**사회적 관계·주제별 register:** 보안·IT 운영의 회고와 이사회·감독기관 보고에서 쓰인다. 조직 안에서는 책임 추궁보다 학습을 위한 `무비난 회고`와 함께 설명되기도 한다.

**예문:** 회사는 서비스가 정상화된 뒤 일주일 동안의 타임라인을 바탕으로 사후분석을 진행했다.

**어휘 연결:** `사후분석`은 사건 뒤 학습 과정이고 `근본원인`은 그 분석에서 찾아야 할 설명 대상이다. `장애 보고`는 사실 전달에 머물 수 있지만 사후분석은 개선 조치까지 연결한다.

**영어 참고:** *post-incident review* / *lessons learned* — rà soát sau sự cố và bài học rút ra; không nhất thiết là bản kiểm điểm cá nhân.

---

## 읽기 지문 — 경보를 대응으로 바꾸는 하루

<!-- passage_word_count: 114 Korean eojeol; target_set: 침해사고, 초동조치, 사고대응, 위협인텔리전스, 공격표면, 침투경로, 권한상승, 측면이동, 격리조치, 위협사냥, 침해지표, 행위기반탐지, 탐지규칙, 근본원인, 사후분석 -->

월요일 새벽, 관제센터는 평소와 다른 로그인과 파일 실행을 묶어 침해사고 의심 경보를 올렸다. 당직자는 서둘러 서버를 초기화하지 않고 로그와 메모리를 보존하는 초동조치를 취한 뒤 사고대응 책임자와 개발팀을 호출했다. 분석팀은 최신 위협인텔리전스를 대조해 외부에 노출된 공격표면을 다시 확인하고, 피싱 메일에서 탈취된 계정이 최초 침투경로였을 가능성을 좁혀 갔다. 해당 계정에서 권한상승과 측면이동이 이어졌는지 살피기 위해 명령 실행과 원격 접속 기록을 시간순으로 재구성했다. 감염이 의심된 노트북에는 격리조치를 적용했지만, 증거를 보존하려고 디스크를 바로 지우지는 않았다. 이후 분석가는 위협사냥으로 다른 장비의 침해지표를 찾고, 행위기반탐지와 탐지규칙이 왜 이 움직임을 늦게 포착했는지 점검했다. 서비스가 안정된 뒤에는 단순한 사용자 실수로 결론내리지 않고 권한 설계와 패치 관리의 근본원인을 검토했다. 보안팀은 타임라인과 판단 근거를 함께 기록한 사후분석 보고서를 작성해 다음 훈련과 규칙 개선에 반영했다.

**Dịch:** Vào rạng sáng thứ Hai, trung tâm giám sát phát cảnh báo nghi ngờ có sự cố xâm nhập sau khi nhóm các lần đăng nhập và chạy tệp khác thường. Nhân viên trực không vội khởi tạo lại máy chủ mà thực hiện biện pháp ban đầu là bảo toàn nhật ký và bộ nhớ, rồi gọi người phụ trách ứng phó sự cố cùng đội phát triển. Nhóm phân tích đối chiếu tình báo mối đe dọa mới nhất, kiểm tra lại bề mặt tấn công lộ ra bên ngoài và thu hẹp khả năng tài khoản bị đánh cắp từ email lừa đảo là đường xâm nhập ban đầu. Họ dựng lại theo trình tự thời gian các lệnh và kết nối từ xa để xem có leo thang đặc quyền và di chuyển ngang hay không. Máy tính xách tay bị nghi nhiễm được cách ly nhưng không xóa đĩa ngay để bảo toàn chứng cứ. Sau đó, nhà phân tích săn tìm mối đe dọa trên các thiết bị khác, kiểm tra chỉ dấu xâm nhập, đồng thời xem vì sao cơ chế phát hiện dựa trên hành vi và quy tắc phát hiện nhận ra chuyển động này quá muộn. Sau khi dịch vụ ổn định, họ xem xét nguyên nhân gốc rễ trong thiết kế quyền hạn và quản lý bản vá thay vì kết luận đơn giản là lỗi người dùng. Đội an ninh viết báo cáo phân tích sau sự cố, ghi cả dòng thời gian và căn cứ phán đoán, rồi đưa vào huấn luyện và cải thiện quy tắc lần sau.
