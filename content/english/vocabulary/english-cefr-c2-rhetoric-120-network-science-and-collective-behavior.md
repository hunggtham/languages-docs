# C2 Vocabulary 120 — Network science and collective behavior

This lesson follows a network from its microscopic ties to large-scale diffusion, showing how structure shapes influence, coordination, contagion, and collective outcomes.

Flow: **centrality → homophily → assortativity → community detection → preferential attachment → small-world network → scale-free network → diffusion cascade → threshold model → structural hole → brokerage → multiplex network → temporal network → echo chamber → network contagion → weak tie → network externality → collective action → triadic closure → cumulative advantage**.

## 1. centrality /sɛnˈtræləti/
**Part of speech:** noun
**Core meaning (English):** a measure of how important or strategically positioned a node is within a network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ trung tâm; hình dung nút nào nằm ở vị trí then chốt vì có nhiều liên kết, nằm giữa các nhóm hoặc dễ tiếp cận toàn mạng.
**Grammar & collocations:** `network centrality` — độ trung tâm mạng; `centrality measure` — thước đo độ trung tâm; `high betweenness centrality` — độ trung tâm trung gian cao.
**Examples:** `The analyst used centrality to identify accounts that connected otherwise separate communities.` → Nhà phân tích dùng độ trung tâm để xác định các tài khoản nối những cộng đồng vốn tách biệt.
**Liên kết tiếng Hàn:** `중심성` (jungsimseong) — độ trung tâm.

## 2. homophily /hoʊˈmɑfəli/
**Part of speech:** noun
**Core meaning (English):** the tendency for people or organizations with similar attributes to form ties with one another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính đồng chất; hình dung những người giống nhau về sở thích, nghề nghiệp hoặc niềm tin có xu hướng kết nối với nhau.
**Grammar & collocations:** `social homophily` — tính đồng chất xã hội; `homophily index` — chỉ số đồng chất; `homophilous network` — mạng có tính đồng chất.
**Examples:** `Political homophily made the online discussion more ideologically uniform over time.` → Tính đồng chất chính trị khiến cuộc thảo luận trực tuyến ngày càng đồng nhất về ý thức hệ.
**Liên kết tiếng Hàn:** `동질성` (dongjilseong) — tính đồng chất.

## 3. assortativity /əˌsɔrtəˈtɪvəti/
**Part of speech:** noun
**Core meaning (English):** the tendency for nodes with similar properties, such as degree or status, to connect to one another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính kết nối đồng loại; hình dung các nút “cùng hạng” thích nối với nhau thay vì nối ngẫu nhiên với nút bất kỳ.
**Grammar & collocations:** `degree assortativity` — tính đồng loại theo bậc; `assortativity coefficient` — hệ số đồng loại; `positive assortativity` — tính đồng loại dương.
**Examples:** `High degree assortativity meant that highly connected institutions tended to partner with one another.` → Tính đồng loại theo bậc cao cho thấy các tổ chức có nhiều kết nối thường hợp tác với nhau.
**Liên kết tiếng Hàn:** `동류성` (dongnyuseong) — tính kết nối đồng loại.

## 4. community detection /kəˈmjuːnəti dɪˈtɛkʃən/
**Part of speech:** noun
**Core meaning (English):** the identification of groups of nodes that are more densely connected to one another than to the rest of a network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phát hiện cộng đồng; hình dung chia mạng thành các cụm liên kết chặt, như những khu phố trong một thành phố lớn.
**Grammar & collocations:** `network community detection` — phát hiện cộng đồng mạng; `community-detection algorithm` — thuật toán phát hiện cộng đồng; `detect network communities` — phát hiện cộng đồng mạng.
**Examples:** `Community detection revealed clusters of users who shared the same sources.` → Phát hiện cộng đồng cho thấy các cụm người dùng chia sẻ cùng nguồn thông tin.
**Liên kết tiếng Hàn:** `커뮤니티 탐지` (keomyuniti tamji) — phát hiện cộng đồng.

## 5. preferential attachment /ˌprɛfəˈrɛnʃəl əˈtætʃmənt/
**Part of speech:** noun
**Core meaning (English):** a growth process in which new nodes are more likely to connect to nodes that already have many connections.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gắn kết ưu tiên; hình dung “giàu càng giàu”: nút nổi tiếng tiếp tục thu hút thêm liên kết mới.
**Grammar & collocations:** `preferential-attachment model` — mô hình gắn kết ưu tiên; `preferential attachment process` — quá trình gắn kết ưu tiên; `grow through preferential attachment` — phát triển nhờ gắn kết ưu tiên.
**Examples:** `Preferential attachment helped explain why a few websites accumulated most incoming links.` → Gắn kết ưu tiên giúp giải thích vì sao một vài website tích lũy phần lớn liên kết đến.
**Liên kết tiếng Hàn:** `선호적 연결` (seonhojeok yeongyeol) — gắn kết ưu tiên.

## 6. small-world network /smɔl wɝld ˈnɛtwɝk/
**Part of speech:** noun
**Core meaning (English):** a network with dense local connections but short average paths between distant nodes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạng thế giới nhỏ; hình dung mỗi người quen một nhóm gần gũi nhưng chỉ cần vài bước là có thể tới người ở rất xa.
**Grammar & collocations:** `small-world network structure` — cấu trúc mạng thế giới nhỏ; `small-world property` — tính chất thế giới nhỏ; `small-world topology` — topology thế giới nhỏ.
**Examples:** `The brain's small-world network balances local processing with rapid long-distance communication.` → Mạng thế giới nhỏ của não cân bằng xử lý cục bộ với giao tiếp nhanh trên khoảng cách xa.
**Liên kết tiếng Hàn:** `좁은 세상 네트워크` (jobeun sesang neteuwokeu) — mạng thế giới nhỏ.

## 7. scale-free network /skeɪl friː ˈnɛtwɝk/
**Part of speech:** noun
**Core meaning (English):** a network whose degree distribution follows a heavy-tailed pattern, with a few hubs holding exceptionally many links.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạng không tỷ lệ; hình dung mạng có vài “siêu nút” cực nhiều liên kết và rất nhiều nút nhỏ chỉ có ít liên kết.
**Grammar & collocations:** `scale-free network model` — mô hình mạng không tỷ lệ; `scale-free degree distribution` — phân phối bậc không tỷ lệ; `scale-free topology` — topology không tỷ lệ.
**Examples:** `A scale-free network can be robust to random failures but vulnerable when its hubs are targeted.` → Mạng không tỷ lệ có thể bền trước hỏng hóc ngẫu nhiên nhưng dễ tổn thương khi các hub bị nhắm tới.
**Liên kết tiếng Hàn:** `척도 없는 네트워크` (cheokdo eomneun neteuwokeu) — mạng không tỷ lệ.

## 8. diffusion cascade /dɪˈfjuːʒən kæˈskeɪd/
**Part of speech:** noun
**Core meaning (English):** a chain reaction in which adoption or transmission by some nodes causes further spread through a network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thác lan truyền; hình dung một hành vi hoặc thông tin chuyền từ người này sang người khác rồi tăng tốc thành làn sóng.
**Grammar & collocations:** `information-diffusion cascade` — thác lan truyền thông tin; `trigger a diffusion cascade` — kích hoạt thác lan truyền; `cascade size` — quy mô thác lan truyền.
**Examples:** `A misleading headline created a diffusion cascade before fact-checkers responded.` → Một tiêu đề gây hiểu lầm tạo ra thác lan truyền trước khi người kiểm chứng kịp phản hồi.
**Liên kết tiếng Hàn:** `확산 연쇄` (hwaksan yeonswae) — thác lan truyền.

## 9. threshold model /ˈθrɛʃhoʊld ˈmɑdəl/
**Part of speech:** noun
**Core meaning (English):** a model in which a node adopts a behavior when the share or number of its neighbors already adopting it reaches a personal threshold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình ngưỡng; hình dung mỗi người có một mức áp lực xã hội riêng, chỉ hành động khi đủ nhiều người xung quanh đã làm.
**Grammar & collocations:** `behavioral threshold model` — mô hình ngưỡng hành vi; `adoption threshold` — ngưỡng chấp nhận; `threshold-model simulation` — mô phỏng mô hình ngưỡng.
**Examples:** `The threshold model predicted a rapid shift once enough households installed solar panels.` → Mô hình ngưỡng dự đoán sự chuyển đổi nhanh khi đủ hộ gia đình lắp pin mặt trời.
**Liên kết tiếng Hàn:** `임계값 모형` (imgyegap mohyeong) — mô hình ngưỡng.

## 10. structural hole /ˈstrʌktʃərəl hoʊl/
**Part of speech:** noun
**Core meaning (English):** a gap between otherwise disconnected groups in a social or organizational network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗ hổng cấu trúc; hình dung một khoảng trống giữa hai nhóm không nói chuyện với nhau nhưng có thể được nối bởi một trung gian.
**Grammar & collocations:** `bridge a structural hole` — bắc cầu qua lỗ hổng cấu trúc; `structural-hole position` — vị trí lỗ hổng cấu trúc; `benefit from structural holes` — hưởng lợi từ lỗ hổng cấu trúc.
**Examples:** `The consultant occupied a structural hole between the engineering and marketing teams.` → Cố vấn đứng ở lỗ hổng cấu trúc giữa nhóm kỹ thuật và marketing.
**Liên kết tiếng Hàn:** `구조적 공백` (gujojeok gongbaek) — lỗ hổng cấu trúc.

## 11. brokerage /ˈbroʊkərɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the activity of connecting otherwise separate people or groups and controlling the exchange between them.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vai trò môi giới mạng; hình dung một người đứng giữa các nhóm và chuyển thông tin, cơ hội hoặc nguồn lực từ bên này sang bên kia.
**Grammar & collocations:** `network brokerage` — môi giới mạng; `brokerage position` — vị trí môi giới; `act as a broker` — đóng vai trò môi giới.
**Examples:** `Her brokerage role gave her early access to ideas moving between research communities.` → Vai trò môi giới giúp cô tiếp cận sớm các ý tưởng di chuyển giữa những cộng đồng nghiên cứu.
**Liên kết tiếng Hàn:** `중개` (junggae) — môi giới.

## 12. multiplex network /ˈmʌltəˌplɛks ˈnɛtwɝk/
**Part of speech:** noun
**Core meaning (English):** a network in which the same nodes are connected through several distinct types of relationship or interaction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạng đa lớp; hình dung cùng một nhóm người vừa có quan hệ bạn bè, công việc, trao đổi tiền và chia sẻ thông tin.
**Grammar & collocations:** `multiplex-network analysis` — phân tích mạng đa lớp; `multiplex layer` — lớp quan hệ trong mạng đa lớp; `model a multiplex network` — mô hình hóa mạng đa lớp.
**Examples:** `The multiplex network combined friendship ties with professional collaboration.` → Mạng đa lớp kết hợp các quan hệ bạn bè với hợp tác nghề nghiệp.
**Liên kết tiếng Hàn:** `다중 네트워크` (dajung neteuwokeu) — mạng đa lớp.

## 13. temporal network /ˈtɛmpərəl ˈnɛtwɝk/
**Part of speech:** noun
**Core meaning (English):** a network whose nodes or links change over time and whose timing affects possible paths of interaction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạng theo thời gian; hình dung mạng không đứng yên mà các liên kết xuất hiện, biến mất và chỉ truyền được khi đúng lúc.
**Grammar & collocations:** `temporal-network analysis` — phân tích mạng theo thời gian; `time-respecting path` — đường đi tôn trọng thứ tự thời gian; `temporal network data` — dữ liệu mạng theo thời gian.
**Examples:** `A temporal network showed that two people were connected in theory but never online at the same time.` → Mạng theo thời gian cho thấy hai người có thể nối về lý thuyết nhưng chưa bao giờ trực tuyến cùng lúc.
**Liên kết tiếng Hàn:** `시간 네트워크` (sigan neteuwokeu) — mạng theo thời gian.

## 14. echo chamber /ˈɛkoʊ ˌtʃeɪmbɚ/
**Part of speech:** noun
**Core meaning (English):** an environment in which people mostly encounter opinions that repeat and reinforce their existing beliefs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** buồng vang; hình dung ý kiến dội đi dội lại trong một nhóm mà gần như không có tiếng nói trái chiều.
**Grammar & collocations:** `online echo chamber` — buồng vang trực tuyến; `echo-chamber effect` — hiệu ứng buồng vang; `trap users in an echo chamber` — nhốt người dùng trong buồng vang.
**Examples:** `The recommendation system pushed the user deeper into an echo chamber of identical political claims.` → Hệ thống đề xuất đẩy người dùng sâu hơn vào buồng vang gồm những khẳng định chính trị giống nhau.
**Liên kết tiếng Hàn:** `에코 챔버` (eko chaembeo) — buồng vang.

## 15. network contagion /ˈnɛtwɝk kənˈteɪdʒən/
**Part of speech:** noun
**Core meaning (English):** the spread of a behavior, belief, emotion, or failure through connected nodes by social or structural transmission.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lây lan qua mạng; hình dung một hành vi, cảm xúc hoặc cú sốc truyền qua các mối nối như một dạng lây nhiễm.
**Grammar & collocations:** `financial network contagion` — lây lan qua mạng tài chính; `contagion pathway` — đường lây lan; `model network contagion` — mô hình hóa lây lan qua mạng.
**Examples:** `The stress test examined whether network contagion could spread one bank's failure to solvent institutions.` → Kiểm tra sức chịu đựng xem liệu lây lan qua mạng có thể truyền sự sụp đổ của một ngân hàng sang các tổ chức còn lành mạnh không.
**Liên kết tiếng Hàn:** `네트워크 전염` (neteuwokeu jeonyeom) — lây lan qua mạng.

## 16. weak tie /wiːk taɪ/
**Part of speech:** noun
**Core meaning (English):** a relatively infrequent or less intimate connection that can nevertheless link a person to information or groups outside their close circle.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** liên kết yếu; hình dung một người quen không thân nhưng mở cánh cửa tới cơ hội mà nhóm bạn thân không có.
**Grammar & collocations:** `strength of weak ties` — sức mạnh của các liên kết yếu; `weak-tie connection` — kết nối liên kết yếu; `maintain weak ties` — duy trì liên kết yếu.
**Examples:** `A weak tie to a former classmate led her to a job outside her usual industry.` → Một liên kết yếu với bạn học cũ đưa cô đến công việc ngoài ngành quen thuộc.
**Liên kết tiếng Hàn:** `약한 연결` (yakan yeongyeol) — liên kết yếu.

## 17. network externality /ˈnɛtwɝk ˌɛkstɚˈnæləti/
**Part of speech:** noun
**Core meaning (English):** an effect in which the value of a product or service changes as more people use the same network.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngoại tác mạng; hình dung một nền tảng càng có nhiều người dùng thì càng hữu ích hoặc đôi khi càng gây chi phí cho người khác.
**Grammar & collocations:** `positive network externality` — ngoại tác mạng tích cực; `network-externality effect` — hiệu ứng ngoại tác mạng; `benefit from network externalities` — hưởng lợi từ ngoại tác mạng.
**Examples:** `The messaging app grew rapidly because of a strong positive network externality.` → Ứng dụng nhắn tin phát triển nhanh nhờ ngoại tác mạng tích cực mạnh.
**Liên kết tiếng Hàn:** `네트워크 외부성` (neteuwokeu oebuseong) — ngoại tác mạng.

## 18. collective action /kəˈlɛktɪv ˈækʃən/
**Part of speech:** noun
**Core meaning (English):** coordinated action by individuals or groups to pursue a shared outcome.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hành động tập thể; hình dung nhiều người phối hợp để đạt lợi ích chung mà một cá nhân khó tự tạo ra.
**Grammar & collocations:** `collective-action problem` — vấn đề hành động tập thể; `coordinate collective action` — phối hợp hành động tập thể; `collective-action dilemma` — thế lưỡng nan hành động tập thể.
**Examples:** `The platform's design lowered the cost of collective action during the emergency.` → Thiết kế của nền tảng hạ chi phí phối hợp hành động tập thể trong tình huống khẩn cấp.
**Liên kết tiếng Hàn:** `집단 행동` (jipdan haengdong) — hành động tập thể.

## 19. triadic closure /traɪˈædɪk ˈkloʊʒɚ/
**Part of speech:** noun
**Core meaning (English):** the tendency for two people who share a mutual friend to form a direct tie themselves.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đóng tam giác; hình dung hai nút cùng nối với một nút thứ ba rồi dần nối trực tiếp với nhau.
**Grammar & collocations:** `triadic-closure process` — quá trình đóng tam giác; `triadic-closure mechanism` — cơ chế đóng tam giác; `measure triadic closure` — đo mức đóng tam giác.
**Examples:** `Triadic closure predicted that two colleagues would connect after repeatedly attending the same meetings.` → Đóng tam giác dự đoán hai đồng nghiệp sẽ kết nối sau khi nhiều lần dự cùng các cuộc họp.
**Liên kết tiếng Hàn:** `삼각 폐쇄` (samgak pyeswae) — đóng tam giác.

## 20. cumulative advantage /ˈkjuːmjələtɪv ədˈvæntɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a process in which an early advantage attracts resources or opportunities that create still greater advantage over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lợi thế tích lũy; hình dung một khởi đầu tốt kéo theo thêm cơ hội, khiến khoảng cách với người khác ngày càng lớn.
**Grammar & collocations:** `cumulative-advantage process` — quá trình lợi thế tích lũy; `cumulative advantage in careers` — lợi thế tích lũy trong sự nghiệp; `reinforce cumulative advantage` — củng cố lợi thế tích lũy.
**Examples:** `Cumulative advantage helped a highly visible researcher attract more collaborations and citations.` → Lợi thế tích lũy giúp nhà nghiên cứu nổi bật thu hút thêm hợp tác và trích dẫn.
**Liên kết tiếng Hàn:** `누적 이점` (nuj eop) — lợi thế tích lũy.

## Review in context

Network analysts measure **centrality**, observe **homophily** and **assortativity**, and use **community detection** to find groups. **Preferential attachment** can create a **small-world network** or a **scale-free network** with powerful hubs. A **diffusion cascade** may begin when a **threshold model** is crossed, while a **structural hole** creates room for **brokerage**. A **multiplex network** records several kinds of ties, and a **temporal network** records when those ties exist. An **echo chamber** can amplify **network contagion**, but a **weak tie** may carry information beyond the close circle. A **network externality** changes value as participation grows, and **collective action** depends on coordinating people across the structure. **Triadic closure** creates new local ties, while **cumulative advantage** can make early prominence self-reinforcing.

**Bản dịch tiếng Việt:**

Các nhà phân tích mạng đo độ trung tâm, quan sát tính đồng chất và tính kết nối đồng loại, rồi dùng phát hiện cộng đồng để tìm các nhóm. Gắn kết ưu tiên có thể tạo ra mạng thế giới nhỏ hoặc mạng không tỷ lệ với những hub quyền lực. Một thác lan truyền có thể bắt đầu khi mô hình ngưỡng bị vượt qua, trong khi lỗ hổng cấu trúc tạo không gian cho vai trò môi giới. Mạng đa lớp ghi lại nhiều loại liên kết, còn mạng theo thời gian ghi lại thời điểm các liên kết tồn tại. Buồng vang có thể khuếch đại lây lan qua mạng, nhưng một liên kết yếu có thể mang thông tin ra ngoài vòng thân cận. Ngoại tác mạng thay đổi giá trị khi số người tham gia tăng, còn hành động tập thể phụ thuộc vào việc phối hợp mọi người trong cấu trúc đó. Đóng tam giác tạo ra các liên kết cục bộ mới, trong khi lợi thế tích lũy có thể khiến sự nổi bật ban đầu tự củng cố.
