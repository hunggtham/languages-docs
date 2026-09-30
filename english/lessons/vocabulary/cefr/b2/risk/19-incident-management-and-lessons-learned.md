# B2 Vocabulary — Incident management and lessons learned

Chủ đề này đi theo flow: **triage → contain → recover → learn → prevent**. Các mục B2 giúp mô tả cách tổ chức xử lý sự cố, giao tiếp dưới áp lực và biến bằng chứng thành cải tiến.

## 1. incident triage /ˈɪnsɪdənt triːˈɑːʒ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — quá trình nhanh chóng đánh giá sự cố để quyết định mức độ ưu tiên và hướng xử lý.

**Core meaning — English:** The initial assessment of an incident to determine its urgency, scope, impact, and required response.

**Core meaning & mental image — Tiếng Việt:** `Incident triage` là bàn phân loại ở cửa cấp cứu: nhóm xử lý phải biết việc nào cần cứu trước.

**Grammar & collocations:** `conduct incident triage` — thực hiện; `triage process` — quy trình; `triage decision` — quyết định.

**Register & nuance:** Triage không phải điều tra đầy đủ; nó tạo quyết định tạm thời bằng thông tin chưa hoàn chỉnh.

**Examples:** `Incident triage moved the outage to the highest response queue.` → Phân loại sự cố đưa sự cố gián đoạn vào hàng xử lý ưu tiên cao nhất.

## 2. incident impact /ˈɪnsɪdənt ˈɪmˌpækt/

**Loại từ & vị trí trong câu:** `countable noun phrase` — mức ảnh hưởng của sự cố lên người dùng, hoạt động, dữ liệu hoặc mục tiêu kinh doanh.

**Core meaning — English:** The measurable or estimated effect an incident has on services, people, operations, data, or objectives.

**Core meaning & mental image — Tiếng Việt:** `Incident impact` là vòng lan của viên đá rơi xuống nước: đo xem sự cố chạm tới ai và rộng đến đâu.

**Grammar & collocations:** `assess incident impact` — đánh giá; `impact estimate` — ước tính; `customer impact` — ảnh hưởng khách hàng.

**Register & nuance:** Tác động có thể thay đổi khi có thêm bằng chứng; nên ghi rõ điều đã biết và điều còn ước tính.

**Examples:** `The team revised the incident impact after more customers reported failed payments.` → Nhóm sửa đánh giá tác động khi thêm khách hàng báo thanh toán lỗi.

## 3. root cause /ruːt kɔz/

**Loại từ & vị trí trong câu:** `countable noun phrase` — nguyên nhân nền tảng khiến sự cố xảy ra hoặc có thể lặp lại.

**Core meaning — English:** An underlying condition or failure that explains why an incident occurred and may allow it to recur.

**Core meaning & mental image — Tiếng Việt:** `Root cause` là rễ dưới mặt đất: xử lý triệu chứng trên thân cây chưa chắc ngăn cây đổ lần nữa.

**Grammar & collocations:** `identify the root cause` — xác định; `root-cause analysis` — phân tích nguyên nhân gốc; `underlying cause` — nguyên nhân nền.

**Register & nuance:** Không nên gọi lỗi gần nhất là nguyên nhân gốc nếu còn điều kiện hệ thống sâu hơn giải thích vì sao lỗi lọt qua.

**Examples:** `The review traced the outage to a root cause in the deployment process.` → Đánh giá truy sự cố gián đoạn về nguyên nhân gốc trong quy trình triển khai.

## 4. containment action /kənˈteɪnmənt ˈækʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase` — biện pháp tạm thời nhằm giới hạn phạm vi hoặc tốc độ lan của sự cố.

**Core meaning — English:** A short-term measure that limits an incident’s spread or further damage before a permanent fix is available.

**Core meaning & mental image — Tiếng Việt:** `Containment action` là dựng đê quanh chỗ rò: chưa sửa nguồn nhưng ngăn nước lan rộng.

**Grammar & collocations:** `take a containment action` — thực hiện; `containment step` — bước; `contain further damage` — ngăn thiệt hại thêm.

**Register & nuance:** Biện pháp khoanh vùng thường tạo đánh đổi về tốc độ hoặc chức năng; cần ghi rõ khi nào được tháo bỏ.

**Examples:** `Disabling the feature was a containment action while engineers prepared a patch.` → Tắt tính năng là biện pháp khoanh vùng trong khi kỹ sư chuẩn bị bản vá.

## 5. recovery action /rɪˈkʌvəri ˈækʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase` — hành động đưa dịch vụ, dữ liệu hoặc quy trình trở lại trạng thái hoạt động chấp nhận được.

**Core meaning — English:** A step taken to restore service, data, or operations after the immediate danger has been controlled.

**Core meaning & mental image — Tiếng Việt:** `Recovery action` là kéo xe ra khỏi rãnh: đưa hệ thống trở lại đường chạy an toàn.

**Grammar & collocations:** `plan a recovery action` — lập; `recovery step` — bước; `restore service` — khôi phục dịch vụ.

**Register & nuance:** Khôi phục không đồng nghĩa mọi vấn đề đã được giải quyết; vẫn cần xác nhận dữ liệu và theo dõi sau khi mở lại.

**Examples:** `The recovery action restored the database from a verified backup.` → Hành động khôi phục đưa cơ sở dữ liệu trở lại từ bản sao lưu đã xác minh.

## 6. lessons learned /ˈlɛsənz lɜrnd/

**Loại từ & vị trí trong câu:** `plural noun phrase` — kiến thức và thay đổi được rút ra sau khi xem xét một sự cố hoặc dự án.

**Core meaning — English:** Specific insights and improvements identified from an experience and intended to guide future work.

**Core meaning & mental image — Tiếng Việt:** `Lessons learned` là hạt giống sau vụ mùa: biến chuyện đã xảy ra thành cách làm tốt hơn.

**Grammar & collocations:** `capture lessons learned` — ghi lại; `lesson-learned report` — báo cáo; `share lessons` — chia sẻ.

**Register & nuance:** Bài học chỉ có giá trị vận hành khi gắn với chủ sở hữu, thời hạn và thay đổi có thể kiểm chứng.

**Examples:** `The lessons learned led to a clearer rollback checklist.` → Các bài học rút ra dẫn đến một danh sách kiểm tra hoàn tác rõ hơn.

## 7. near miss /nɪr mɪs/

**Loại từ & vị trí trong câu:** `countable noun phrase` — sự kiện gần gây thiệt hại nhưng được phát hiện hoặc ngăn chặn trước khi hậu quả xảy ra.

**Core meaning — English:** An event that could have caused harm or failure but did not because of chance or timely intervention.

**Core meaning & mental image — Tiếng Việt:** `Near miss` là viên đá sượt qua cửa sổ: chưa vỡ kính nhưng cho biết hướng nguy hiểm.

**Grammar & collocations:** `report a near miss` — báo cáo; `near-miss event` — sự kiện; `learn from near misses` — học từ sự cố suýt xảy ra.

**Register & nuance:** Văn hóa ghi nhận near miss giúp học sớm; không nên đợi thiệt hại thật mới xem bằng chứng là quan trọng.

**Examples:** `The near miss exposed a gap in the approval checklist.` → Sự cố suýt xảy ra cho thấy một lỗ hổng trong danh sách kiểm tra phê duyệt.

## 8. incident timeline /ˈɪnsɪdənt ˈtaɪmˌlaɪn/

**Loại từ & vị trí trong câu:** `countable noun phrase` — trình tự có mốc thời gian của sự kiện, tín hiệu, quyết định và hành động trong một sự cố.

**Core meaning — English:** A chronological record of what happened, when it happened, and how responders reacted during an incident.

**Core meaning & mental image — Tiếng Việt:** `Incident timeline` là thước phim có dấu giờ: nối tín hiệu với quyết định thay vì dựa vào trí nhớ rời rạc.

**Grammar & collocations:** `construct an incident timeline` — dựng; `timeline entry` — mục; `timestamped event` — sự kiện có dấu thời gian.

**Register & nuance:** Dòng thời gian nên tách sự kiện quan sát được khỏi nhận định hồi tưởng để tránh biến giả thuyết thành sự thật.

**Examples:** `The incident timeline showed that the alert arrived before the customer complaint.` → Dòng thời gian cho thấy cảnh báo đến trước khi khách hàng phàn nàn.

## 9. escalation criteria /ˌɛskəˈleɪʃən kraɪˈtɪriə/

**Loại từ & vị trí trong câu:** `plural noun phrase` — các điều kiện xác định khi nào phải chuyển sự cố lên cấp hoặc nhóm có quyền hạn cao hơn.

**Core meaning — English:** Defined conditions that require an incident to be transferred to a more senior or specialized response team.

**Core meaning & mental image — Tiếng Việt:** `Escalation criteria` là vạch đỏ trên bảng điều khiển: vượt vạch thì gọi thêm người và quyền quyết định.

**Grammar & collocations:** `define escalation criteria` — định nghĩa; `meet the criteria` — đáp ứng; `escalation path` — đường chuyển cấp.

**Register & nuance:** Tiêu chí tốt phải đủ cụ thể để hành động nhanh nhưng cho phép phán đoán khi dữ liệu ban đầu còn thiếu.

**Examples:** `The team escalated the case because it met the data-loss escalation criteria.` → Nhóm chuyển cấp vì vụ việc đáp ứng tiêu chí chuyển cấp về mất dữ liệu.

## 10. response playbook /rɪˈspɑns ˈpleɪˌbʊk/

**Loại từ & vị trí trong câu:** `countable noun phrase` — tài liệu hướng dẫn các bước, vai trò và quyết định cho một loại sự cố.

**Core meaning — English:** A prepared guide describing roles, actions, checks, and communication steps for a recurring incident type.

**Core meaning & mental image — Tiếng Việt:** `Response playbook` là kịch bản bên cạnh sân: mọi người biết lượt mình khi trận đấu bất ngờ.

**Grammar & collocations:** `follow a response playbook` — theo; `playbook step` — bước; `incident response guide` — hướng dẫn.

**Register & nuance:** Playbook hỗ trợ phán đoán chứ không thay thế nó; cần cập nhật sau diễn tập và sự cố thật.

**Examples:** `The response playbook told the on-call engineer which service to isolate first.` → Sổ tay ứng phó cho kỹ sư trực biết dịch vụ nào cần cô lập trước.

## 11. stakeholder update /ˈsteɪkˌhoʊldər ˈʌpˌdeɪt/

**Loại từ & vị trí trong câu:** `countable noun phrase` — thông tin có cấu trúc gửi cho những người bị ảnh hưởng hoặc có quyền quyết định.

**Core meaning — English:** A concise communication describing an incident’s current status, impact, actions, uncertainty, and next update.

**Core meaning & mental image — Tiếng Việt:** `Stakeholder update` là bảng thông tin ở ga: nói rõ tàu đang ở đâu, ảnh hưởng gì và khi nào có tin mới.

**Grammar & collocations:** `send a stakeholder update` — gửi; `status update` — cập nhật trạng thái; `update cadence` — nhịp cập nhật.

**Register & nuance:** Cập nhật đáng tin nên phân biệt sự thật, ước tính và điều chưa biết thay vì hứa thời gian phục hồi quá sớm.

**Examples:** `The stakeholder update explained the customer impact without speculating about the root cause.` → Cập nhật cho bên liên quan giải thích ảnh hưởng khách hàng mà không suy đoán nguyên nhân gốc.

## 12. post-incident review /ˌpoʊst ˈɪnsɪdənt rɪˈvjuː/

**Loại từ & vị trí trong câu:** `countable noun phrase` — buổi hoặc tài liệu xem xét có cấu trúc sau khi sự cố kết thúc.

**Core meaning — English:** A structured examination of an incident, response, decisions, and improvements after service has stabilized.

**Core meaning & mental image — Tiếng Việt:** `Post-incident review` là tua lại trận đấu bằng băng hình: tìm điểm cải thiện, không chỉ tìm người chịu lỗi.

**Grammar & collocations:** `hold a post-incident review` — tổ chức; `review meeting` — cuộc họp; `review finding` — phát hiện.

**Register & nuance:** Review không đổ lỗi cần tập trung vào hệ thống, điều kiện và quyết định mà người khác có thể học được.

**Examples:** `The post-incident review identified two controls that should be automated.` → Đánh giá sau sự cố xác định hai kiểm soát nên được tự động hóa.

## 13. corrective measure /kəˈrɛktɪv ˈmɛʒər/

**Loại từ & vị trí trong câu:** `countable noun phrase` — hành động nhằm sửa nguyên nhân hoặc giảm khả năng sự cố lặp lại.

**Core meaning — English:** A planned action that addresses a cause, weakness, or control gap revealed by an incident.

**Core meaning & mental image — Tiếng Việt:** `Corrective measure` là miếng gia cố sau vết nứt: sửa điểm yếu để lần sau không mở lại.

**Grammar & collocations:** `implement a corrective measure` — triển khai; `corrective action` — hành động khắc phục; `measure owner` — người phụ trách.

**Register & nuance:** Biện pháp khắc phục cần tiêu chí hoàn thành và cách kiểm tra hiệu quả, không chỉ một lời hứa chung.

**Examples:** `Adding a validation gate was the main corrective measure.` → Thêm cổng xác nhận là biện pháp khắc phục chính.

## 14. recurring incident /rɪˈkɜrɪŋ ˈɪnsɪdənt/

**Loại từ & vị trí trong câu:** `countable noun phrase` — sự cố xảy ra lặp lại hoặc có cùng mẫu nguyên nhân dù đã được xử lý trước đó.

**Core meaning — English:** An incident that happens repeatedly or follows a recognizable pattern over time.

**Core meaning & mental image — Tiếng Việt:** `Recurring incident` là chuông báo lặp: mỗi lần dập tắt mà không sửa nguồn, nó lại reo.

**Grammar & collocations:** `track a recurring incident` — theo dõi; `recurrence pattern` — mẫu lặp; `repeat failure` — lỗi lặp.

**Register & nuance:** Tính lặp có thể chỉ ra kiểm soát tạm thời đang che dấu nguyên nhân hệ thống.

**Examples:** `The recurring incident continued because the temporary workaround was never replaced.` → Sự cố lặp lại vì cách xử lý tạm thời chưa bao giờ được thay thế.

## 15. incident owner /ˈɪnsɪdənt ˌoʊnər/

**Loại từ & vị trí trong câu:** `countable noun phrase` — người chịu trách nhiệm điều phối phản ứng, quyết định và cập nhật trong một sự cố.

**Core meaning — English:** The person accountable for coordinating an incident response and ensuring actions, decisions, and communications stay aligned.

**Core meaning & mental image — Tiếng Việt:** `Incident owner` là người cầm bản đồ trong bão: không tự làm mọi việc nhưng giữ hướng và nhịp phối hợp.

**Grammar & collocations:** `assign an incident owner` — chỉ định; `owner handover` — bàn giao; `response coordination` — điều phối ứng phó.

**Register & nuance:** Chủ sự cố khác với người sửa kỹ thuật; vai trò này giữ toàn cảnh, ưu tiên và quyết định khi nhóm đông.

**Examples:** `The incident owner confirmed the next stakeholder update before the handover.` → Chủ sự cố xác nhận lần cập nhật tiếp theo trước khi bàn giao.

## Review in context

During **incident triage**, the team estimated the **incident impact** and searched for a likely **root cause**. A **containment action** limited further damage, while a **recovery action** restored the service. The team recorded **lessons learned** from a **near miss** and built an **incident timeline**. Clear **escalation criteria** and a **response playbook** helped the **incident owner** coordinate a timely **stakeholder update**. At the **post-incident review**, the group agreed on a **corrective measure** for the **recurring incident** instead of relying on another temporary fix.

**Bản dịch tiếng Việt:**

Trong lúc phân loại sự cố, nhóm ước tính tác động và tìm nguyên nhân gốc có khả năng nhất. Một biện pháp khoanh vùng hạn chế thiệt hại thêm, còn hành động khôi phục đưa dịch vụ hoạt động trở lại. Nhóm ghi lại bài học từ một sự cố suýt xảy ra và dựng dòng thời gian. Tiêu chí chuyển cấp rõ ràng cùng sổ tay ứng phó giúp chủ sự cố điều phối một cập nhật kịp thời cho bên liên quan. Tại buổi đánh giá sau sự cố, nhóm thống nhất một biện pháp khắc phục cho sự cố lặp lại thay vì tiếp tục dựa vào một cách sửa tạm thời khác.
