<!-- source_policy: original explanations, examples, and passage; networking concepts are used as learning context, not copied source text -->

# 통신망을 지키는 설계와 운영의 핵심어

통신 서비스의 안정성은 신호가 세다는 뜻만이 아니다. 어떤 구간이 끊겨도 사용자의 연결을 살리고, 혼잡이 생겨도 중요한 데이터가 지나가게 하며, 복구 뒤 원인을 설명할 수 있어야 한다.

<!-- lexical_basis: advanced_native; register: network policy and disaster-resilience reporting; source_lane: news_formal; context: advanced-telecommunications-network-resilience/news_formal -->
### 망복원력

**품사:** 명사

**핵심 의미:** 통신망이 장애나 재난을 겪은 뒤에도 서비스를 유지하거나 빠르게 회복하는 능력이다.

**베트남어 뜻:** khả năng phục hồi của mạng; năng lực duy trì hoặc nhanh chóng khôi phục dịch vụ sau sự cố hay thảm họa.

**뉘앙스와 사용법:** `망복원력`은 장애가 전혀 없다는 뜻이 아니라, 충격을 흡수하고 기능을 회복하는 설계·운영 능력을 말한다. 평상시의 성능인 `안정성`보다 사고 뒤의 적응과 복구를 강조한다.

**재사용 가능한 콜로케이션·청크:** `망복원력을 높이다`, `재난 대응형 망복원력`, `망복원력 평가` — nâng cao khả năng phục hồi, khả năng phục hồi trước thảm họa và đánh giá.

**자주 쓰는 문형과 성분:** `사업자가 A를 통해 망복원력을 높이다`에서 A는 이중 경로·분산 센터다. `장애 이후에도 핵심 서비스를 유지하다`와 잘 결합한다.

**사회적 관계·주제별 register:** 정부·통신사 보고서와 재난 대비 기사에서 쓰는 정책·기술어다. 일반 사용자에게는 `망이 끊겨도 빨리 돌아오는 힘`이라고 풀어 말한다.

**예문:** 산불에 광케이블 한 구간이 끊겨도 통신망 복원력이 유지되도록 우회 경로를 미리 확보했다.

**Dịch:** Họ đã chuẩn bị sẵn tuyến đường vòng để khả năng phục hồi của mạng vẫn được duy trì ngay cả khi cáp quang bị đứt do cháy rừng.

**어휘 연결:** `망복원력`은 장애 뒤 회복 능력이고 `망안정성`은 정상 운전 중 흔들리지 않는 성질이다. `재해복구`는 실제 복구 절차에 더 초점을 둔다.

**영어 참고:** *network resilience* — khả năng mạng hấp thụ sự cố và phục hồi; rộng hơn chỉ việc dự phòng thiết bị.

---

<!-- lexical_basis: advanced_native; register: network architecture and infrastructure reporting; source_lane: news_formal; context: advanced-telecommunications-network-resilience/news_formal -->
### 이중화

**품사:** 명사

**핵심 의미:** 같은 기능을 수행할 장비나 경로를 둘 이상 마련해 하나가 고장 나도 서비스를 이어 가는 설계다.

**베트남어 뜻:** dự phòng kép; thiết kế bố trí từ hai thiết bị hoặc tuyến trở lên để dịch vụ tiếp tục khi một bên hỏng.

**뉘앙스와 사용법:** `이중화`는 단순히 장비를 두 개 사는 것이 아니라, 실제 장애 때 대체 장비가 작동하고 전환되는 구조까지 포함한다. 두 장비가 동시에 같은 결함을 갖는 공통 원인은 별도로 점검해야 한다.

**재사용 가능한 콜로케이션·청크:** `이중화 구성을 갖추다`, `서버 이중화`, `이중화 여부를 점검하다` — triển khai cấu hình dự phòng kép, dự phòng máy chủ và kiểm tra.

**자주 쓰는 문형과 성분:** `A를 이중화해 B를 보호하다`에서 A는 회선·전원·라우터, B는 핵심 서비스다. `주 장비와 대기 장비를 나누다`가 자연스럽다.

**사회적 관계·주제별 register:** 데이터센터·기간통신망 설계 문서의 전문어다. 운영자끼리는 `한쪽이 죽어도 다른 쪽이 받게 해 둔다`고 설명할 수 있다.

**예문:** 관제센터는 전원과 국제회선을 이중화해 한 시설의 침수에 대비했다.

**Dịch:** Trung tâm điều hành dự phòng kép cả nguồn điện và tuyến quốc tế để chuẩn bị cho trường hợp một cơ sở bị ngập.

**어휘 연결:** `이중화`는 두 계통을 마련하는 설계이고 `다중화`는 여러 신호·경로를 공유하거나 여러 개로 확장하는 더 넓은 개념이다. `백업`은 데이터 복사까지 포함할 수 있다.

**영어 참고:** *redundancy* — thiết kế dư thừa có chủ đích để một thành phần hỏng mà dịch vụ vẫn tiếp tục.

---

<!-- lexical_basis: advanced_native; register: transport-network engineering and carrier operations; source_lane: news_formal; context: advanced-telecommunications-network-resilience/news_formal -->
### 다중화

**품사:** 명사

**핵심 의미:** 여러 신호나 데이터 흐름을 하나의 전송 매체에 함께 실어 효율적으로 보내는 기술이다.

**베트남어 뜻:** ghép kênh; kỹ thuật truyền nhiều tín hiệu hoặc luồng dữ liệu chung trên một môi trường truyền dẫn.

**뉘앙스와 사용법:** `다중화`는 회선을 물리적으로 여러 개로 늘리는 말이 아니라, 하나의 자원을 논리적으로 나누어 함께 쓰는 방식이다. 반대편에서 다시 분리하는 역다중화가 전제된다.

**재사용 가능한 콜로케이션·청크:** `광파장 다중화`, `다중화 장비`, `신호를 다중화하다` — ghép kênh bước sóng quang, thiết bị ghép kênh và ghép tín hiệu.

**자주 쓰는 문형과 성분:** `A 신호를 B 회선에 다중화하다`에서 A는 음성·데이터, B는 광섬유·전송로다. `수신 측에서 분리하다`가 함께 쓰인다.

**사회적 관계·주제별 register:** 광전송망과 기간통신 기술 기사에 쓰이는 전문어다. 일반 설명에서는 `한 통로에 여러 신호를 함께 실어 보내는 기술`이라고 한다.

**예문:** 해저 케이블은 파장 다중화로 한 가닥의 광섬유에 여러 국가의 트래픽을 실어 나른다.

**Dịch:** Cáp ngầm dưới biển dùng ghép kênh bước sóng để truyền lưu lượng của nhiều quốc gia trên một sợi quang.

**어휘 연결:** `다중화`는 전송 자원을 공유하는 방식이고 `이중화`는 장애에 대비해 여분을 두는 방식이다. `분할`은 나누는 행위 일반이고 다중화는 다시 복원할 신호 구조를 전제로 한다.

**영어 참고:** *multiplexing* — ghép nhiều luồng tín hiệu vào một kênh truyền rồi tách ra ở đầu nhận.

---

<!-- lexical_basis: contemporary_native_hot; register: native spoken workplace operations and incident response; source_lane: native_spoken; context: advanced-telecommunications-network-resilience/native_spoken -->
### 페일오버

**품사:** 명사

**핵심 의미:** 주 장비나 경로에 문제가 생겼을 때 대기 중인 장비·경로로 서비스가 자동 또는 신속하게 넘어가는 전환이다.

**베트남어 뜻:** chuyển đổi dự phòng; việc dịch vụ tự động hoặc nhanh chóng chuyển sang thiết bị hay tuyến chờ khi hệ thống chính gặp vấn đề.

**뉘앙스와 사용법:** 현장에서는 `페일오버가 됐다`처럼 장애 대응 결과를 짧게 말한다. 단순 재시작과 달리 대체 자원이 미리 준비되어 있고, 전환 중 세션·데이터 손실을 얼마나 줄였는지가 중요하다.

**재사용 가능한 콜로케이션·청크:** `자동 페일오버`, `페일오버가 걸리다`, `페일오버 테스트` — chuyển đổi dự phòng tự động, chuyển đổi xảy ra và kiểm thử.

**자주 쓰는 문형과 성분:** `A 장애 시 B로 페일오버하다`에서 A는 주 회선·서버, B는 대기 회선·노드다. `전환 후 정상 여부를 확인하다`가 자연스럽다.

**사회적 관계·주제별 register:** 개발자·네트워크 운영자 사이의 현재 실무어이며 기술 문서에도 널리 쓰인다. 비전문가에게는 `고장 나면 예비 쪽으로 자동 전환되는 기능`이라고 풀이한다.

**예문:** 주 회선이 불안정해지자 라우터가 3초 안에 LTE 회선으로 페일오버했다.

**Dịch:** Khi đường truyền chính trở nên không ổn định, bộ định tuyến đã chuyển sang đường LTE dự phòng trong vòng ba giây.

**어휘 연결:** `페일오버`는 장애 순간의 전환이고 `이중화`는 그 전환을 가능하게 하는 구조다. `장애조치`는 원인 확인·복구까지 포함하는 더 넓은 대응 절차다.

**영어 참고:** *failover* — chuyển sang hệ thống dự phòng khi hệ thống chính lỗi; trong tiếng Hàn hiện đại thường giữ nguyên dạng mượn này trong hội thoại kỹ thuật.

---

<!-- lexical_basis: advanced_native; register: carrier network architecture and infrastructure reporting; source_lane: news_formal; context: advanced-telecommunications-network-resilience/news_formal -->
### 백홀

**품사:** 명사

**핵심 의미:** 기지국·접속망에서 모인 트래픽을 통신사의 핵심망이나 인터넷 교환 지점으로 운반하는 연결 구간이다.

**베트남어 뜻:** mạng backhaul; đoạn kết nối vận chuyển lưu lượng từ trạm gốc hoặc mạng truy nhập đến mạng lõi hay điểm trao đổi Internet.

**뉘앙스와 사용법:** `백홀`은 사용자 단말과 기지국 사이의 마지막 구간이 아니라, 접속망과 코어망 사이를 잇는 중간 운반층이다. 이 구간의 용량이 부족하면 무선 신호가 좋아도 실제 서비스가 느려질 수 있다.

**재사용 가능한 콜로케이션·청크:** `백홀 용량을 확충하다`, `무선 백홀`, `백홀 병목` — mở rộng dung lượng backhaul, backhaul không dây và nút thắt.

**자주 쓰는 문형과 성분:** `기지국 트래픽을 A로 백홀하다`에서 A는 광망·마이크로파 링크다. `접속 구간과 코어 사이의 용량을 맞추다`가 자연스럽다.

**사회적 관계·주제별 register:** 5G 투자·농어촌 통신·재난 통신 기사에서 쓰는 기술어다. 일반 설명에서는 `기지국에서 본망으로 보내는 중간 길`이라고 한다.

**예문:** 산간 지역에서는 광케이블 대신 무선 백홀을 늘려 기지국의 연결성을 보완했다.

**Dịch:** Ở vùng núi, họ mở rộng backhaul không dây để bổ sung khả năng kết nối của các trạm gốc thay cho cáp quang.

**어휘 연결:** `백홀`은 중간 운반 구간이고 `접속망`은 사용자·기지국이 처음 연결되는 구간이다. `코어망`은 여러 백홀의 트래픽을 집약하고 정책을 처리한다.

**영어 참고:** *backhaul* — đoạn mạng trung chuyển từ mạng truy nhập đến mạng lõi; không phải kết nối cuối cùng tới người dùng.

---

<!-- lexical_basis: advanced_native; register: carrier architecture and public infrastructure reporting; source_lane: news_formal; context: advanced-telecommunications-network-resilience/news_formal -->
### 코어망

**품사:** 명사

**핵심 의미:** 여러 접속망에서 들어온 통신 트래픽을 집약하고 인증·라우팅·서비스 정책을 처리하는 통신사의 중심망이다.

**베트남어 뜻:** mạng lõi; mạng trung tâm của nhà mạng, nơi tập hợp lưu lượng và xử lý xác thực, định tuyến cùng chính sách dịch vụ.

**뉘앙스와 사용법:** `코어망`은 단순히 가장 빠른 회선이라는 뜻이 아니다. 이용자 세션, 요금·보안 정책, 다른 망과의 연결을 통제하는 논리적 중심을 가리킨다.

**재사용 가능한 콜로케이션·청크:** `코어망을 분산 배치하다`, `코어망 장애`, `코어망 고도화` — phân tán mạng lõi, sự cố mạng lõi và nâng cấp.

**자주 쓰는 문형과 성분:** `사업자가 코어망에서 A를 처리하다`에서 A는 인증·라우팅·정책 적용이다. `접속망에서 유입된 트래픽을 집약하다`가 대표적이다.

**사회적 관계·주제별 register:** 이동통신·인터넷 인프라 정책과 장애 보고서의 공식 기술어다. 대중에게는 `통신사의 중심 처리망`으로 설명한다.

**예문:** 코어망을 여러 지역에 분산하면 한 데이터센터 장애가 전국 서비스로 번지는 위험을 줄일 수 있다.

**Dịch:** Phân tán mạng lõi ở nhiều khu vực có thể giảm nguy cơ sự cố tại một trung tâm dữ liệu lan ra dịch vụ toàn quốc.

**어휘 연결:** `코어망`은 중심 처리망이고 `백홀`은 접속망과 코어망을 잇는 운반 구간이다. `접속망`은 사용자에게 더 가까운 가장자리 층이다.

**영어 참고:** *core network* — mạng trung tâm xử lý định tuyến, xác thực và chính sách; đối lập với access network ở phía người dùng.

---

<!-- lexical_basis: advanced_native; register: access infrastructure and digital inclusion reporting; source_lane: news_formal; context: advanced-telecommunications-network-resilience/news_formal -->
### 접속망

**품사:** 명사

**핵심 의미:** 이용자 단말이나 현장 장비를 통신사의 핵심망에 처음 연결하는 가장자리 네트워크다.

**베트남어 뜻:** mạng truy nhập; mạng ở lớp biên kết nối đầu cuối người dùng hoặc thiết bị hiện trường với mạng lõi của nhà mạng.

**뉘앙스와 사용법:** `접속망`은 집·기지국·기업 현장처럼 이용자와 가까운 구간을 묶는 기술어다. 지역별 회선 품질과 디지털 격차를 말할 때도 쓰이며, 단순한 로그인 접속 행위와는 다르다.

**재사용 가능한 콜로케이션·청크:** `접속망을 확충하다`, `유선 접속망`, `접속망 품질 격차` — mở rộng mạng truy nhập, mạng truy nhập hữu tuyến và chênh lệch chất lượng.

**자주 쓰는 문형과 성분:** `A 지역에 접속망을 구축하다`에서 A는 농촌·산업단지다. `접속망에서 코어망으로 트래픽을 넘기다`가 자연스럽다.

**사회적 관계·주제별 register:** 광대역 정책·통신 복지·5G 구축 기사에 쓰인다. 일반 설명에서는 `사용자 가까이에서 본망으로 이어 주는 구간`이라고 한다.

**예문:** 도서 지역의 접속망을 보강하지 않으면 해저 케이블을 늘려도 주민이 체감하는 속도는 나아지지 않는다.

**Dịch:** Nếu không củng cố mạng truy nhập ở vùng đảo thì dù tăng cáp ngầm, tốc độ người dân cảm nhận cũng không cải thiện.

**어휘 연결:** `접속망`은 이용자 쪽 네트워크이고 `백홀`은 그 트래픽을 본망으로 운반하는 구간이다. `코어망`은 접속망에서 올라온 세션과 정책을 처리한다.

**영어 참고:** *access network* — mạng ở phía người dùng, kết nối thiết bị đầu cuối với mạng lõi; không chỉ là hành động truy cập.

---

<!-- lexical_basis: advanced_native; register: network monitoring and service-quality operations; source_lane: native_spoken; context: advanced-telecommunications-network-resilience/native_spoken -->
### 패킷손실

**품사:** 명사

**핵심 의미:** 전송한 데이터 패킷 일부가 목적지에 도착하지 못하거나 폐기되는 현상이다.

**베트남어 뜻:** mất gói; hiện tượng một phần gói dữ liệu đã truyền không tới đích hoặc bị loại bỏ.

**뉘앙스와 사용법:** `패킷손실`이 생기면 영상이 끊기거나 음성이 잘리고, 재전송이 필요한 서비스의 지연이 커진다. 속도 측정값이 높아도 손실률이 높으면 사용 경험은 나쁠 수 있다.

**재사용 가능한 콜로케이션·청크:** `패킷손실률이 오르다`, `패킷손실을 추적하다`, `손실 구간을 좁히다` — tỷ lệ mất gói tăng, theo dõi mất gói và khoanh vùng.

**자주 쓰는 문형과 성분:** `A 구간에서 패킷손실이 발생하다`에서 A는 무선 구간·백홀이다. `손실률을 기준 이하로 낮추다`가 자연스럽다.

**사회적 관계·주제별 register:** 운영자 장애 회의와 품질 분석에서 쓰는 실무어다. 사용자에게는 `데이터 조각이 중간에 사라지는 현상`이라고 풀어 말한다.

**예문:** 화상회의가 끊긴 원인을 찾으려고 운영자는 특정 시간대의 패킷손실률을 비교했다.

**Dịch:** Để tìm nguyên nhân cuộc họp video bị gián đoạn, kỹ thuật viên đã so sánh tỷ lệ mất gói ở những khung giờ cụ thể.

**어휘 연결:** `패킷손실`은 데이터가 사라지는 문제이고 `지연변동`은 도착 시간의 흔들림이다. `대역폭 부족`은 손실을 일으킬 수 있지만 두 개념과 동일하지 않다.

**영어 참고:** *packet loss* — các gói dữ liệu bị mất trên đường truyền; ảnh hưởng rõ tới thoại, video và ứng dụng tương tác.

---

<!-- lexical_basis: advanced_native; register: real-time service operations and network engineering; source_lane: native_spoken; context: advanced-telecommunications-network-resilience/native_spoken -->
### 지연변동

**품사:** 명사

**핵심 의미:** 데이터 패킷이 목적지에 도착하는 시간이 일정하지 않고 들쭉날쭉해지는 현상이다.

**베트남어 뜻:** biến động độ trễ; hiện tượng thời gian các gói dữ liệu đến đích không đều mà dao động.

**뉘앙스와 사용법:** `지연변동`은 평균 지연이 짧은지와 별개로, 패킷 사이의 도착 간격이 흔들리는 문제를 가리킨다. 음성·게임·원격제어처럼 시간 순서가 중요한 서비스에서 특히 민감하다.

**재사용 가능한 콜로케이션·청크:** `지연변동을 줄이다`, `지연변동이 커지다`, `지연변동 측정` — giảm biến động độ trễ, biến động tăng và đo lường.

**자주 쓰는 문형과 성분:** `혼잡 시간대에 지연변동이 커지다`, `버퍼로 지연변동을 흡수하다`가 자연스럽다. 대상은 영상·음성·제어 신호로 자주 온다.

**사회적 관계·주제별 register:** 네트워크 운영자와 실시간 서비스 개발자의 실무어다. 일반 사용자에게는 `데이터가 도착하는 간격이 고르지 않은 상태`라고 말한다.

**예문:** 평균 응답 속도는 괜찮았지만 지연변동이 커서 원격 수업의 음성이 자주 겹쳤다.

**Dịch:** Tốc độ phản hồi trung bình ổn nhưng biến động độ trễ lớn khiến âm thanh của lớp học từ xa thường chồng lên nhau.

**어휘 연결:** `지연변동`은 지연의 흔들림이고 `평균 지연`은 전체적으로 걸린 시간이다. `패킷손실`은 도착 자체가 실패하는 문제라서 별도로 측정한다.

**영어 참고:** *jitter* — sự dao động thời gian đến của các gói; đặc biệt quan trọng với âm thanh, video và điều khiển thời gian thực.

---

<!-- lexical_basis: advanced_native; register: traffic engineering and carrier operations; source_lane: news_formal; context: advanced-telecommunications-network-resilience/news_formal -->
### 혼잡제어

**품사:** 명사

**핵심 의미:** 네트워크에 데이터가 몰릴 때 전송량과 속도를 조절해 과부하와 연쇄 지연을 막는 방식이다.

**베트남어 뜻:** kiểm soát tắc nghẽn; phương thức điều chỉnh lượng và tốc độ truyền để ngăn quá tải, chậm trễ dây chuyền khi dữ liệu dồn vào mạng.

**뉘앙스와 사용법:** `혼잡제어`는 사용자를 무조건 차단하는 정책이 아니라, 현재 경로의 처리 여유를 관찰하며 송신 속도와 재전송을 조절하는 기술이다. 공정한 자원 배분과 안정적인 품질이 함께 쟁점이 된다.

**재사용 가능한 콜로케이션·청크:** `혼잡제어 알고리즘`, `혼잡제어를 적용하다`, `혼잡 신호를 감지하다` — thuật toán, áp dụng kiểm soát và phát hiện tín hiệu tắc nghẽn.

**자주 쓰는 문형과 성분:** `프로토콜이 A를 보고 전송률을 낮추다`에서 A는 손실·지연 신호다. `혼잡이 풀리면 점진적으로 회복하다`가 자연스럽다.

**사회적 관계·주제별 register:** 인터넷 프로토콜·통신 정책·서비스 품질 문서의 전문어다. 일반 설명에서는 `길이 막힐 때 데이터 속도를 조절하는 방식`이라고 한다.

**예문:** 영상 플랫폼은 접속자가 급증한 시간에 혼잡제어를 적용해 전체 사용자의 끊김을 줄였다.

**Dịch:** Nền tảng video áp dụng kiểm soát tắc nghẽn vào giờ lượng truy cập tăng vọt để giảm gián đoạn cho toàn bộ người dùng.

**어휘 연결:** `혼잡제어`는 데이터 흐름을 조절하는 기술이고 `트래픽엔지니어링`은 경로·용량·정책을 넓게 설계하는 운영 활동이다. `속도 제한`은 그중 한 조치일 뿐이다.

**영어 참고:** *congestion control* — điều chỉnh tốc độ gửi và luồng dữ liệu khi mạng quá tải; không đồng nghĩa với chặn người dùng.

---

<!-- lexical_basis: contemporary_native_hot; register: 5G architecture and technology reporting; source_lane: news_formal; context: advanced-telecommunications-network-resilience/news_formal -->
### 망분할

**품사:** 명사

**핵심 의미:** 하나의 물리적 통신망을 목적·품질·보안 요구가 다른 여러 논리적 네트워크로 나누어 운영하는 기술이다.

**베트남어 뜻:** phân chia mạng; kỹ thuật chia một mạng vật lý thành nhiều mạng logic có mục đích, chất lượng và yêu cầu bảo mật khác nhau.

**뉘앙스와 사용법:** `망분할`은 선을 물리적으로 여러 개 까는 것이 아니라 자원과 정책을 논리적으로 격리하는 발상이다. 5G에서는 자율주행·응급통신처럼 지연과 가용성 요구가 다른 서비스를 별도 슬라이스로 다룬다.

**재사용 가능한 콜로케이션·청크:** `망분할 기술`, `서비스별 망분할`, `망분할 정책을 적용하다` — công nghệ phân chia, phân chia theo dịch vụ và áp dụng chính sách.

**자주 쓰는 문형과 성분:** `사업자가 A와 B를 망분할로 격리하다`에서 A·B는 업무망·공공망이다. `품질 보장 조건을 다르게 설정하다`가 자연스럽다.

**사회적 관계·주제별 register:** 5G·클라우드·기업망 구축을 다루는 최신 기술 보도에서 쓰인다. 일반 설명에서는 `한 망 안에 목적별 전용 차선을 만드는 것`이라고 한다.

**예문:** 병원은 환자 데이터와 의료기기 제어 트래픽을 망분할로 나누어 보안과 지연 요구를 따로 관리했다.

**Dịch:** Bệnh viện chia dữ liệu bệnh nhân và lưu lượng điều khiển thiết bị y tế bằng phân chia mạng để quản lý riêng yêu cầu bảo mật và độ trễ.

**어휘 연결:** `망분할`은 논리적 격리이고 `이중화`는 여분 자원을 두는 구조다. `가상망`은 분리된 논리 네트워크 자체를 가리킬 수 있어 개념상 겹치지만 목적은 다르다.

**영어 참고:** *network slicing* — chia mạng vật lý thành các lát logic với cam kết dịch vụ khác nhau; thường dùng trong 5G.

---

<!-- lexical_basis: advanced_native; register: service-level engineering and infrastructure assurance; source_lane: news_formal; context: advanced-telecommunications-network-resilience/news_formal -->
### 망가용성

**품사:** 명사

**핵심 의미:** 정해진 기간 동안 통신망이 실제로 서비스를 제공할 수 있는 상태로 운영된 비율이다.

**베트남어 뜻:** độ sẵn sàng của mạng; tỷ lệ mạng thực sự có thể cung cấp dịch vụ trong một khoảng thời gian nhất định.

**뉘앙스와 사용법:** `망가용성`은 장비가 켜져 있다는 뜻보다 사용자가 서비스를 이용할 수 있었는지를 강조한다. 예정 점검 시간, 장애 시간, 복구 속도를 함께 계산하므로 단순한 신뢰감과는 다르다.

**재사용 가능한 콜로케이션·청크:** `망가용성 목표`, `망가용성을 측정하다`, `가용성 지표를 공개하다` — mục tiêu, đo lường và công bố chỉ số độ sẵn sàng.

**자주 쓰는 문형과 성분:** `사업자가 망가용성을 A%로 보장하다`에서 A는 서비스 수준 목표다. `장애 시간을 줄여 지표를 높이다`가 자연스럽다.

**사회적 관계·주제별 register:** 통신사 SLA·공공망 계약·장애 보고서의 공식어다. 사용자에게는 `필요할 때 실제로 쓸 수 있었던 비율`이라고 설명한다.

**예문:** 재난 통신 계약에는 평상시 속도뿐 아니라 망가용성 목표와 복구 시간도 명시돼 있다.

**Dịch:** Hợp đồng liên lạc trong thảm họa ghi rõ không chỉ tốc độ bình thường mà cả mục tiêu độ sẵn sàng của mạng và thời gian khôi phục.

**어휘 연결:** `망가용성`은 서비스를 쓸 수 있었던 비율이고 `망복원력`은 장애를 견디고 회복하는 능력이다. `신뢰성`은 고장 없이 기능을 지속하는 성질까지 넓게 포함한다.

**영어 참고:** *network availability* — tỷ lệ thời gian dịch vụ sẵn sàng sử dụng; thường được đo cùng SLA và thời gian gián đoạn.

---

<!-- lexical_basis: advanced_native; register: carrier operations and traffic policy; source_lane: news_formal; context: advanced-telecommunications-network-resilience/news_formal -->
### 트래픽엔지니어링

**품사:** 명사

**핵심 의미:** 네트워크의 경로·용량·우선순위를 분석해 데이터 흐름을 효율적이고 안정적으로 배치하는 운영 활동이다.

**베트남어 뜻:** kỹ thuật điều phối lưu lượng; hoạt động phân tích tuyến, dung lượng và ưu tiên để bố trí luồng dữ liệu hiệu quả, ổn định.

**뉘앙스와 사용법:** `트래픽엔지니어링`은 단순히 회선을 증설하는 일이 아니라, 어느 경로가 막히는지 예측하고 필요하면 우회·우선순위를 적용하는 종합적 관리다. 성능과 비용, 공정성 사이의 판단이 들어간다.

**재사용 가능한 콜로케이션·청크:** `트래픽엔지니어링 정책`, `경로를 트래픽엔지니어링으로 조정하다`, `트래픽엔지니어링 최적화` — chính sách, điều chỉnh tuyến và tối ưu hóa.

**자주 쓰는 문형과 성분:** `운영자가 A를 고려해 B를 조정하다`에서 A는 혼잡·지연·서비스 우선순위, B는 경로·대역폭이다. `수요를 분산하다`와 자주 결합한다.

**사회적 관계·주제별 register:** 통신사 관제·클라우드 네트워크와 대규모 서비스 운영의 전문어다. 일반 설명에서는 `데이터가 다닐 길을 상황에 맞게 배치하는 관리`라고 한다.

**예문:** 운영팀은 국제 회선의 혼잡을 예측해 트래픽엔지니어링 규칙을 새벽 전에 조정했다.

**Dịch:** Đội vận hành dự đoán tắc nghẽn trên tuyến quốc tế và điều chỉnh quy tắc điều phối lưu lượng trước rạng sáng.

**어휘 연결:** `트래픽엔지니어링`은 경로와 정책을 넓게 조정하고 `혼잡제어`는 송신 흐름을 직접 낮추는 기술이다. `라우팅`은 경로 선택 자체에 더 좁게 초점을 둔다.

**영어 참고:** *traffic engineering* — tối ưu luồng và tuyến dữ liệu theo tải, ưu tiên và mục tiêu dịch vụ; rộng hơn định tuyến đơn lẻ.

---

<!-- lexical_basis: advanced_native; register: carrier fault recovery and field operations; source_lane: native_spoken; context: advanced-telecommunications-network-resilience/native_spoken -->
### 회선절체

**품사:** 명사

**핵심 의미:** 통신 회선에 장애나 점검이 있을 때 연결을 다른 회선으로 바꾸는 조치다.

**베트남어 뜻:** chuyển mạch đường truyền; biện pháp đổi kết nối sang đường truyền khác khi tuyến hiện tại gặp sự cố hoặc được bảo trì.

**뉘앙스와 사용법:** `회선절체`는 예비 회선으로 물리적·논리적 연결을 바꾸는 현장 용어다. 자동으로 이뤄질 수도 있지만, 작업자가 수동으로 절체하고 통신 품질을 확인하는 경우도 있다.

**재사용 가능한 콜로케이션·청크:** `회선절체를 실시하다`, `예비 회선으로 절체하다`, `절체 작업을 공지하다` — thực hiện chuyển mạch, chuyển sang tuyến dự phòng và thông báo công việc.

**자주 쓰는 문형과 성분:** `운영자가 A를 B로 회선절체하다`에서 A는 주 회선, B는 예비 회선이다. `서비스 중단을 최소화하다`와 잘 쓴다.

**사회적 관계·주제별 register:** 통신 관제센터와 현장 유지보수의 실무어다. 고객 공지에서는 `예비 회선으로 연결을 전환한다`고 풀어 쓴다.

**예문:** 야간 광케이블 공사 전에 운영자는 기업 고객의 회선을 예비 경로로 절체했다.

**Dịch:** Trước khi thi công cáp quang ban đêm, kỹ thuật viên đã chuyển đường truyền của khách hàng doanh nghiệp sang tuyến dự phòng.

**어휘 연결:** `회선절체`는 회선을 바꾸는 구체적 조치이고 `페일오버`는 시스템이 자동으로 대체 자원으로 넘어가는 동작이다. `우회`는 경로를 달리하는 일반 표현이라 범위가 넓다.

**영어 참고:** *line switching* — chuyển kết nối sang một đường truyền khác; nhấn mạnh thao tác trên circuit hơn là toàn bộ hệ thống dự phòng.

---

<!-- lexical_basis: advanced_native; register: incident management and service operations; source_lane: native_spoken; context: advanced-telecommunications-network-resilience/native_spoken -->
### 장애조치

**품사:** 명사

**핵심 의미:** 통신 장애의 영향을 줄이고 원인을 찾아 서비스를 정상화하기 위해 취하는 일련의 대응이다.

**베트남어 뜻:** xử lý sự cố; chuỗi ứng phó nhằm giảm ảnh hưởng, tìm nguyên nhân và đưa dịch vụ viễn thông về bình thường.

**뉘앙스와 사용법:** `장애조치`는 버튼 하나를 누르는 행위가 아니라 탐지·격리·우회·복구·사후 기록을 이어 가는 운영 절차다. 현장 회의에서는 우선순위와 담당자를 정하는 뜻으로도 자주 쓴다.

**재사용 가능한 콜로케이션·청크:** `긴급 장애조치`, `장애조치 현황`, `장애조치를 완료하다` — xử lý khẩn cấp, tình hình xử lý và hoàn tất xử lý.

**자주 쓰는 문형과 성분:** `운영팀이 A에 대해 B 장애조치를 취하다`에서 A는 서비스·구간, B는 우회·재기동이다. `복구 후 재발 방지를 검토하다`가 함께 쓰인다.

**사회적 관계·주제별 register:** 관제센터·고객지원·장애 보고서의 실무어다. 고객에게는 `문제를 확인하고 서비스를 복구하는 대응`이라고 설명한다.

**예문:** 운영팀은 원인 분석과 병행해 긴급 장애조치로 공공 신고 시스템의 접속을 우회시켰다.

**Dịch:** Song song với phân tích nguyên nhân, đội vận hành đã xử lý sự cố khẩn cấp bằng cách chuyển hướng truy cập hệ thống khai báo công cộng.

**어휘 연결:** `장애조치`는 대응 전체이고 `회선절체`는 그 안에서 회선을 바꾸는 한 단계다. `복구`는 정상 상태로 돌리는 결과나 과정에 더 초점을 둔다.

**영어 참고:** *incident response* — quy trình phản ứng với sự cố từ phát hiện đến khôi phục và rút kinh nghiệm.

---

## 읽기: 끊겨도 이어지는 통신망

<!-- passage_word_count: 115 Korean eojeol; target_set: 망복원력, 이중화, 다중화, 페일오버, 백홀, 코어망, 접속망, 패킷손실, 지연변동, 혼잡제어, 망분할, 망가용성, 트래픽엔지니어링, 회선절체, 장애조치 -->

재난 대응 통신망을 설계할 때는 단순히 기지국 수를 늘리는 것보다 전체 구조의 망복원력을 먼저 평가해야 한다. 핵심 장비와 전원, 국제 회선은 이중화하고, 한 광섬유에 여러 신호를 보내는 다중화 장비의 장애 범위도 따져야 한다. 주 장비가 멈추면 자동 페일오버가 일어나도록 하되, 전환이 성공했다는 이유만으로 서비스 품질을 낙관해서는 안 된다. 기지국에서 코어망으로 올라가는 백홀의 용량이 부족하면 접속망의 신호가 좋아도 패킷손실과 지연변동이 커질 수 있다. 관제팀은 혼잡제어와 트래픽엔지니어링으로 중요한 신고 트래픽을 우선 배치하고, 업무망과 제어망은 망분할로 격리한다. 사업자는 망가용성 목표를 공개하고, 공사나 침수에 대비해 예비 회선으로 회선절체하는 순서를 훈련해야 한다. 실제 장애가 발생하면 담당자는 장애조치 기록에 탐지 시각, 우회 경로, 고객 영향과 복구 근거를 남긴다. 이렇게 해야 복구 속도뿐 아니라 다음 재난에서 무엇을 바꿔야 하는지도 설명할 수 있다.

**Dịch:** Khi thiết kế mạng liên lạc ứng phó thảm họa, trước hết phải đánh giá khả năng phục hồi của toàn bộ cấu trúc thay vì chỉ tăng số trạm gốc. Thiết bị cốt lõi, nguồn điện và tuyến quốc tế được dự phòng kép, đồng thời phải xem xét phạm vi ảnh hưởng khi thiết bị ghép kênh truyền nhiều tín hiệu trên một sợi quang gặp sự cố. Khi thiết bị chính dừng, cần có chuyển đổi dự phòng tự động, nhưng không nên lạc quan về chất lượng dịch vụ chỉ vì việc chuyển đổi thành công. Nếu dung lượng backhaul từ trạm gốc lên mạng lõi thiếu, mất gói và biến động độ trễ có thể tăng dù tín hiệu của mạng truy nhập tốt. Đội giám sát dùng kiểm soát tắc nghẽn và điều phối lưu lượng để ưu tiên lưu lượng báo cáo quan trọng, đồng thời cô lập mạng nghiệp vụ và mạng điều khiển bằng phân chia mạng. Nhà mạng công khai mục tiêu độ sẵn sàng, luyện trình tự chuyển tuyến dự phòng khi có thi công hoặc ngập lụt. Khi sự cố thật xảy ra, người phụ trách ghi lại thời điểm phát hiện, tuyến vòng, ảnh hưởng khách hàng và căn cứ khôi phục trong hồ sơ xử lý sự cố. Nhờ vậy có thể giải thích không chỉ tốc độ khôi phục mà cả điều cần thay đổi ở thảm họa kế tiếp.
