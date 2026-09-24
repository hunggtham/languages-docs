# C2 Vocabulary 16 — Measurement, evidence, and analytical granularity

Bài này tập trung vào cách phân tích dữ liệu, chất lượng bằng chứng và mức độ chi tiết của một khẳng định. Người học C2 cần biết khi nào phải tách dữ liệu thành nhóm nhỏ, khi nào một biến chỉ là đại diện, và vì sao một kết quả “robust” vẫn có thể phụ thuộc vào cách đo. Flow của bài này là: **disaggregate → granular → heterogeneous → homogeneous → incongruent → indeterminate → intractable → malleable → ordinal → proxy → robust → sensitivity → triangulate → extrapolation → confounder → attrition → baseline → benchmark → denominator → outlier**.

---

## 1. disaggregate /ˌdɪsˈæɡrəˌɡeɪt/

**Loại từ & vị trí trong câu:** `transitive verb` — đi với `data`, `figures`, `results`, `groups` hoặc `categories`.

**Core meaning — English:** To separate combined data or information into smaller groups so that differences become visible.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một con số tổng được tháo thành nhiều ngăn nhỏ. Disaggregate giúp thấy những khác biệt bị che khuất khi mọi nhóm bị gộp chung.

**Grammar & collocations:** `disaggregate data by age` — tách dữ liệu theo tuổi; `disaggregated results` — kết quả đã tách nhóm; `disaggregate a statistic` — phân rã một thống kê.

**Register & nuance:** `formal, analytical/policy` — trang trọng, phân tích và chính sách. Nó đối lập với `aggregate`, gộp nhiều phần thành một tổng.

**Linking:** `break down` — phân tích/tách ra, thông dụng hơn; `stratify` — chia theo tầng/nhóm; `partition` — chia thành phần; `separate` — tách nói chung.

**Examples:** `The report disaggregates the enrollment figures by region and income.` → Báo cáo tách số liệu nhập học theo khu vực và thu nhập. `Disaggregated data revealed that the average concealed a sharp rural-urban gap.` → Dữ liệu đã tách cho thấy mức trung bình che giấu khoảng cách lớn giữa nông thôn và đô thị.

**Liên kết tiếng Hàn:** `세분화하다` — chia nhỏ; `데이터를 분해하다` — phân rã dữ liệu.

## 2. granular /ˈɡrænjələr/

**Loại từ & vị trí trong câu:** `adjective` — mô tả `data`, `analysis`, `detail`, `view` hoặc `control` ở mức rất chi tiết.

**Core meaning — English:** Detailed and organized into small, specific units.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một bề mặt được tạo bởi nhiều hạt nhỏ thay vì một mảng trơn. Phân tích granular cho phép thấy khác biệt tinh vi giữa các trường hợp.

**Grammar & collocations:** `granular data` — dữ liệu chi tiết; `granular analysis` — phân tích ở mức hạt nhỏ; `a granular view of performance` — góc nhìn rất cụ thể về hiệu suất.

**Register & nuance:** `formal-professional/technical` — trang trọng, chuyên nghiệp và kỹ thuật. Trong business Mỹ, granular được dùng rộng hơn nghĩa vật lý “dạng hạt”.

**Linking:** `detailed` — chi tiết; `fine-grained` — chi tiết theo đơn vị nhỏ; `specific` — cụ thể; `microscopic` — cực kỳ nhỏ, đôi khi cường điệu.

**Examples:** `The dashboard gives managers a granular view of where delays occur.` → Bảng thông tin cho quản lý góc nhìn chi tiết về nơi xảy ra chậm trễ. `A granular analysis is useful only if the extra detail improves the decision.` → Phân tích quá chi tiết chỉ hữu ích nếu chi tiết thêm giúp quyết định tốt hơn.

**Liên kết tiếng Hàn:** `세부적인` — chi tiết; `미세 단위의` — ở đơn vị rất nhỏ.

## 3. heterogeneous /ˌhetɚəˈdʒiːniəs/

**Loại từ & vị trí trong câu:** `adjective` — mô tả `population`, `sample`, `group`, `mixture` hoặc `system` gồm các phần khác nhau.

**Core meaning — English:** Made up of different kinds of people, things, or elements rather than being uniform.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một hộp có nhiều vật liệu và màu sắc khác nhau. Heterogeneous nhắc người phân tích không nên giả định mọi thành phần phản ứng như nhau.

**Grammar & collocations:** `a heterogeneous population` — dân số đa dạng; `heterogeneous effects` — tác động khác nhau giữa các nhóm; `a heterogeneous sample` — mẫu không đồng nhất.

**Register & nuance:** `formal, scientific/academic` — trang trọng, khoa học và học thuật. Nó đối lập với `homogeneous`, đồng nhất.

**Linking:** `diverse` — đa dạng; `mixed` — pha trộn; `variegated` — nhiều dạng/màu, văn chương hơn; `heterogeneous` — nhấn sự khác biệt cấu trúc giữa các phần.

**Examples:** `The treatment may have heterogeneous effects across age groups.` → Phương pháp điều trị có thể có tác động khác nhau giữa các nhóm tuổi. `A heterogeneous sample requires more careful subgroup analysis.` → Mẫu không đồng nhất đòi hỏi phân tích nhóm phụ cẩn thận hơn.

**Liên kết tiếng Hàn:** `이질적인` — khác loại/không đồng nhất; `다양하게 구성된` — cấu thành đa dạng.

## 4. homogeneous /ˌhoʊməˈdʒiːniəs/

**Loại từ & vị trí trong câu:** `adjective` — mô tả `group`, `population`, `mixture`, `sample` hoặc `system` có thành phần tương tự nhau.

**Core meaning — English:** Consisting of parts that are similar in type, structure, or behavior.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một hộp chứa các viên bi gần như giống hệt nhau. Homogeneous giúp mô hình đơn giản hơn, nhưng giả định đồng nhất có thể che giấu khác biệt thật.

**Grammar & collocations:** `a homogeneous group` — nhóm đồng nhất; `homogeneous mixture` — hỗn hợp đồng nhất; `assume a homogeneous population` — giả định dân số đồng nhất.

**Register & nuance:** `formal, scientific/academic` — trang trọng, khoa học và học thuật. Trong xã hội, gọi một nhóm homogeneous có thể là mô tả thống kê, không phải đánh giá giá trị.

**Linking:** `uniform` — đồng đều; `consistent` — nhất quán; `homogenous` — biến thể chính tả đôi khi gặp nhưng `homogeneous` là dạng chuẩn phổ biến; `heterogeneous` — không đồng nhất.

**Examples:** `The model works well for a homogeneous sample but fails with wider populations.` → Mô hình hoạt động tốt với mẫu đồng nhất nhưng thất bại ở các quần thể rộng hơn. `The city is less homogeneous than the national average suggests.` → Thành phố kém đồng nhất hơn mức trung bình quốc gia gợi ra.

**Liên kết tiếng Hàn:** `동질적인` — đồng nhất; `균질한` — đồng đều/đồng chất.

## 5. incongruent /ɪnˈkɑŋɡruənt/

**Loại từ & vị trí trong câu:** `adjective` — đi với `with`, `evidence`, `behavior`, `result`, `tone` hoặc `pattern` không ăn khớp.

**Core meaning — English:** Not consistent, compatible, or in agreement with something else.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung hai mảnh ghép có hình dạng lệch nhau. Incongruent mô tả sự không khớp giữa dữ liệu, lời nói, hành vi hoặc kỳ vọng.

**Grammar & collocations:** `incongruent with the evidence` — không phù hợp với bằng chứng; `an incongruent result` — kết quả không khớp; `incongruent behavior` — hành vi trái với hình ảnh/lời nói.

**Register & nuance:** `formal, analytical` — trang trọng và phân tích. Nó rộng hơn `inconsistent`: incongruent thường nhấn sự không ăn khớp về hình thức, bối cảnh hoặc kỳ vọng.

**Linking:** `incompatible` — không tương thích; `discordant` — lệch tông; `inconsistent` — không nhất quán; `anomalous` — bất thường so với mẫu.

**Examples:** `The optimistic headline is incongruent with the cautious findings in the report.` → Tiêu đề lạc quan không khớp với các phát hiện thận trọng trong báo cáo. `Her laughter seemed incongruent with the seriousness of the announcement.` → Tiếng cười của cô có vẻ không phù hợp với mức nghiêm trọng của thông báo.

**Liên kết tiếng Hàn:** `불일치하는` — không nhất quán; `어울리지 않는` — không ăn khớp.

## 6. indeterminate /ˌɪndɪˈtɝmənət/

**Loại từ & vị trí trong câu:** `adjective` — mô tả `outcome`, `cause`, `boundary`, `number`, `status` hoặc `result` chưa xác định.

**Core meaning — English:** Not fixed, known, or clearly decided.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một đường biên chưa được vẽ nét rõ. Điều indeterminate có thể do thiếu dữ liệu, nhiều khả năng hoặc bản chất chưa thể quyết định.

**Grammar & collocations:** `an indeterminate outcome` — kết quả chưa xác định; `of indeterminate origin` — có nguồn gốc chưa rõ; `remain indeterminate` — vẫn chưa thể xác định.

**Register & nuance:** `formal, analytical/legal` — trang trọng, phân tích và pháp lý. Nó không nhất thiết có nghĩa “random”; chỉ là chưa được xác định.

**Linking:** `uncertain` — không chắc; `undetermined` — chưa quyết định; `ambiguous` — có nhiều cách hiểu; `indefinite` — không giới hạn rõ hoặc chưa định thời gian.

**Examples:** `The long-term impact remains indeterminate because the follow-up period was short.` → Tác động dài hạn vẫn chưa xác định vì thời gian theo dõi ngắn. `The document is of indeterminate date.` → Ngày của tài liệu chưa thể xác định.

**Liên kết tiếng Hàn:** `불확정적인` — chưa xác định; `결정되지 않은` — chưa được quyết định.

## 7. intractable /ɪnˈtræktəbəl/

**Loại từ & vị trí trong câu:** `adjective` — mô tả `problem`, `conflict`, `dispute`, `disease` hoặc `difficulty` rất khó giải quyết.

**Core meaning — English:** Extremely difficult to manage, solve, or change.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một nút thắt càng kéo càng chặt. Vấn đề intractable không chỉ khó; nó chống lại các giải pháp thông thường hoặc sự can thiệp đơn giản.

**Grammar & collocations:** `an intractable conflict` — xung đột khó hóa giải; `an intractable problem` — vấn đề nan giải; `intractable poverty` — nghèo đói dai dẳng khó giải quyết.

**Register & nuance:** `formal, strongly evaluative` — trang trọng và đánh giá mạnh. Nó không có nghĩa tuyệt đối “impossible”; chỉ nói việc giải quyết cực kỳ khó.

**Linking:** `intransigent` — không chịu nhượng bộ, nói về người/lập trường; `intractable` — khó xử lý, nói về vấn đề; `intractable` cũng dùng trong y khoa cho bệnh khó kiểm soát.

**Examples:** `The commission faced an intractable dispute over land and historical claims.` → Ủy ban đối mặt tranh chấp nan giải về đất đai và các yêu sách lịch sử. `An intractable problem may require changing the system rather than adding another rule.` → Vấn đề nan giải có thể đòi hỏi thay đổi hệ thống thay vì thêm một quy tắc khác.

**Liên kết tiếng Hàn:** `해결하기 어려운` — khó giải quyết; `난치성의` — khó chữa/khó xử lý.

## 8. malleable /ˈmæliəbəl/

**Loại từ & vị trí trong câu:** `adjective` — mô tả `material`, `identity`, `belief`, `public opinion` hoặc `institution` dễ định hình/thay đổi.

**Core meaning — English:** Easily shaped, changed, or influenced.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung kim loại mềm có thể uốn mà không vỡ. Nghĩa bóng của malleable nói về con người, niềm tin hoặc thể chế dễ bị định hình bởi tác động bên ngoài.

**Grammar & collocations:** `malleable material` — vật liệu dễ uốn; `malleable identity` — bản sắc có thể biến đổi; `malleable public opinion` — dư luận dễ bị ảnh hưởng.

**Register & nuance:** `formal-neutral` — trang trọng vừa phải. Với người hoặc niềm tin, từ này có thể trung tính hoặc gợi nguy cơ bị thao túng.

**Linking:** `flexible` — linh hoạt; `塑` `plastic` — có thể định hình, kỹ thuật; `impressionable` — dễ bị ảnh hưởng, thường nói về người; `adaptable` — có khả năng thích ứng.

**Examples:** `Public memory is more malleable than official archives suggest.` → Ký ức công chúng dễ biến đổi hơn các kho lưu trữ chính thức gợi ra. `The material is malleable when heated but rigid when cool.` → Vật liệu dễ uốn khi nóng nhưng cứng khi nguội.

**Liên kết tiếng Hàn:** `유연한` — linh hoạt; `영향받기 쉬운` — dễ bị ảnh hưởng.

## 9. ordinal /ˈɔrdənəl/

**Loại từ & vị trí trong câu:** `adjective` và `noun` — trong đo lường, chỉ dữ liệu biểu thị thứ tự nhưng khoảng cách giữa các hạng không nhất thiết bằng nhau.

**Core meaning — English:** Relating to an order or ranking in which positions matter but exact numerical distances may not.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung bảng xếp hạng nhất–nhì–ba: biết thứ tự nhưng không biết người nhất hơn người nhì bao nhiêu. Dữ liệu ordinal không nên được xử lý như số đo có khoảng cách đều.

**Grammar & collocations:** `ordinal scale` — thang đo thứ bậc; `ordinal variable` — biến thứ bậc; `ordinal ranking` — xếp hạng theo thứ tự.

**Register & nuance:** `formal, statistical` — trang trọng và thống kê. `First`, `second`, và mức độ hài lòng từ thấp đến cao là ví dụ; chúng không tự động cho phép tính trung bình có ý nghĩa.

**Linking:** `ranking` — xếp hạng; `categorical` — thuộc phạm trù; `nominal` — chỉ nhãn không có thứ tự; `interval` — thang có khoảng cách đều.

**Examples:** `The survey uses an ordinal scale from “strongly disagree” to “strongly agree.”` → Khảo sát dùng thang thứ bậc từ “hoàn toàn không đồng ý” đến “hoàn toàn đồng ý”. `Ordinal data show order but not the size of the gap between responses.` → Dữ liệu thứ bậc cho thấy thứ tự nhưng không cho biết độ lớn khoảng cách giữa các câu trả lời.

**Liên kết tiếng Hàn:** `서열 척도의` — thuộc thang thứ bậc; `순서형의` — thuộc dạng thứ tự.

## 10. proxy /ˈprɑksi/

**Loại từ & vị trí trong câu:** `countable noun` — một biến hoặc đại diện được dùng thay cho điều khó đo trực tiếp; cũng là `proxy measure`.

**Core meaning — English:** A substitute measure or representative used when the thing of interest cannot be observed directly.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung dùng bóng của vật để ước lượng vật thật. Proxy hữu ích nhưng chỉ đáng tin nếu nó liên hệ đủ chặt với điều muốn đo.

**Grammar & collocations:** `a proxy for income` — biến đại diện cho thu nhập; `proxy measure` — phép đo thay thế; `use X as a proxy` — dùng X làm đại diện.

**Register & nuance:** `formal, statistical/policy` — trang trọng, thống kê và chính sách. Proxy không phải bản thân hiện tượng; nhầm hai thứ có thể tạo kết luận sai.

**Linking:** `indicator` — chỉ báo; `surrogate` — vật/biến thay thế; `stand-in` — vật đại diện, thông dụng; `correlate` — biến có tương quan.

**Examples:** `Researchers used school attendance as a proxy for household stability.` → Các nhà nghiên cứu dùng việc đi học làm biến đại diện cho sự ổn định hộ gia đình. `A proxy can be misleading if the relationship changes across groups.` → Biến đại diện có thể gây hiểu lầm nếu mối liên hệ thay đổi giữa các nhóm.

**Liên kết tiếng Hàn:** `대리 지표` — chỉ báo đại diện; `대용물` — vật thay thế.

## 11. robust /roʊˈbʌst/

**Loại từ & vị trí trong câu:** `adjective` — mô tả `method`, `finding`, `model`, `system`, `evidence` hoặc `health` chịu được biến động.

**Core meaning — English:** Strong and reliable enough to remain valid under difficult conditions or reasonable changes in assumptions.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một cây cầu vẫn đứng khi gió đổi hướng. Một kết quả robust không sụp ngay khi thay đổi cách đo, mẫu hoặc giả định hợp lý.

**Grammar & collocations:** `robust evidence` — bằng chứng vững; `robust findings` — phát hiện bền vững; `a robust model` — mô hình chịu được kiểm tra.

**Register & nuance:** `formal-professional` — trang trọng và chuyên nghiệp. Robust không có nghĩa chắc chắn tuyệt đối; nó nói về độ ổn định trước các kiểm tra hợp lý.

**Linking:** `resilient` — có khả năng phục hồi; `reliable` — đáng tin; `sound` — vững về logic/phương pháp; `rigorous` — nghiêm ngặt trong quy trình.

**Examples:** `The conclusion remained robust after the analysts tested several alternative specifications.` → Kết luận vẫn vững sau khi các nhà phân tích thử nhiều đặc tả thay thế. `A robust system should continue operating when one component fails.` → Hệ thống vững nên tiếp tục hoạt động khi một bộ phận hỏng.

**Liên kết tiếng Hàn:** `견고한` — vững chắc; `신뢰할 수 있는` — đáng tin.

## 12. sensitivity /ˌsensəˈtɪvətɪ/

**Loại từ & vị trí trong câu:** `uncountable noun` — trong phân tích, mức độ kết quả thay đổi khi đầu vào hoặc giả định thay đổi; cũng là sự nhạy cảm nói chung.

**Core meaning — English:** The degree to which a result or system changes in response to small changes in conditions.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một chiếc cân chỉ cần chạm nhẹ là kim dịch chuyển. Sensitivity analysis kiểm tra kết luận có phụ thuộc quá mức vào một giả định hay không.

**Grammar & collocations:** `sensitivity analysis` — phân tích độ nhạy; `sensitivity to assumptions` — độ nhạy với giả định; `test sensitivity` — kiểm tra độ nhạy.

**Register & nuance:** `formal, statistical/scientific` — trang trọng, thống kê và khoa học. Nó khác `specificity`, khả năng phân biệt đúng mục tiêu trong một số kiểm định.

**Linking:** `responsiveness` — mức phản ứng; `vulnerability` — dễ bị tác động theo hướng tiêu cực; `elasticity` — độ co giãn; `stability` — độ ổn định.

**Examples:** `The authors report sensitivity to different assumptions about future demand.` → Các tác giả báo cáo độ nhạy với những giả định khác nhau về nhu cầu tương lai. `Sensitivity analysis showed that the ranking changed when the weighting changed slightly.` → Phân tích độ nhạy cho thấy thứ hạng đổi khi trọng số thay đổi nhẹ.

**Liên kết tiếng Hàn:** `민감도` — độ nhạy; `민감성 분석` — phân tích độ nhạy.

## 13. triangulate /traɪˈæŋɡjəˌleɪt/

**Loại từ & vị trí trong câu:** `transitive verb` — đi với `evidence`, `data`, `sources`, `findings` hoặc `a claim`.

**Core meaning — English:** To check or establish a finding by using several independent sources, methods, or perspectives.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung xác định vị trí một điểm bằng nhiều góc đo khác nhau. Triangulate làm kết luận đáng tin hơn khi các nguồn độc lập cùng chỉ về một hướng.

**Grammar & collocations:** `triangulate evidence` — đối chiếu nhiều nguồn bằng chứng; `triangulate findings` — kiểm chứng phát hiện; `triangulate across methods` — đối chiếu qua nhiều phương pháp.

**Register & nuance:** `formal, research/analytical` — trang trọng, nghiên cứu và phân tích. Nhiều nguồn không tự động độc lập; nếu tất cả dựa trên cùng sai lệch, triangulation vẫn yếu.

**Linking:** `corroborate` — xác nhận bằng nguồn khác; `cross-check` — kiểm tra chéo; `validate` — xác nhận tính hợp lệ; `converge` — hội tụ về cùng kết luận.

**Examples:** `The team triangulated interview data with administrative records and field observations.` → Nhóm đối chiếu dữ liệu phỏng vấn với hồ sơ hành chính và quan sát thực địa. `Triangulating sources reduced the risk of relying on one witness's memory.` → Đối chiếu nhiều nguồn giảm nguy cơ phụ thuộc vào ký ức của một nhân chứng.

**Liên kết tiếng Hàn:** `삼각검증하다` — kiểm chứng tam giác; `여러 자료로 교차 검증하다` — kiểm chứng chéo bằng nhiều nguồn.

## 14. extrapolation /ɪkˌstræpəˈleɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun` — quá trình mở rộng xu hướng hoặc kết luận từ dữ liệu đã biết sang vùng chưa quan sát.

**Core meaning — English:** The act of estimating beyond known data by extending an observed pattern or relationship.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung kéo dài một đường biểu đồ vượt ra ngoài các điểm đã đo. Extrapolation hữu ích cho dự báo nhưng dễ sai nếu mô hình không còn phù hợp ở vùng mới.

**Grammar & collocations:** `linear extrapolation` — ngoại suy tuyến tính; `extrapolation from a small sample` — ngoại suy từ mẫu nhỏ; `cautious extrapolation` — ngoại suy thận trọng.

**Register & nuance:** `formal, statistical/technical` — trang trọng, thống kê và kỹ thuật. Nó khác `interpolation`, ước tính bên trong khoảng dữ liệu đã biết.

**Linking:** `projection` — dự phóng; `forecast` — dự báo; `generalization` — khái quát; `inference` — suy luận.

**Examples:** `The forecast depends on extrapolation from only two years of unusually high growth.` → Dự báo phụ thuộc vào việc ngoại suy từ chỉ hai năm tăng trưởng cao bất thường. `Careful extrapolation requires checking whether the underlying mechanism remains stable.` → Ngoại suy cẩn trọng đòi hỏi kiểm tra cơ chế nền có còn ổn định không.

**Liên kết tiếng Hàn:** `외삽` — ngoại suy; `추세 연장 추정` — ước tính bằng kéo dài xu hướng.

## 15. confounder /kənˈfaʊndɚ/

**Loại từ & vị trí trong câu:** `countable noun` — trong nghiên cứu, một biến ảnh hưởng cả nguyên nhân được xét và kết quả, làm quan hệ có vẻ nhân quả.

**Core meaning — English:** A variable that is related to both a suspected cause and an outcome, making their relationship difficult to interpret.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một sợi dây thứ ba kéo cả hai biến, khiến ta tưởng một biến trực tiếp kéo biến kia. Confounder có thể tạo tương quan giả hoặc làm phóng đại/che khuất tác động.

**Grammar & collocations:** `a potential confounder` — biến gây nhiễu tiềm tàng; `control for confounders` — kiểm soát biến gây nhiễu; `an unmeasured confounder` — biến gây nhiễu chưa đo.

**Register & nuance:** `formal, statistical/medical` — trang trọng, thống kê và y khoa. Confounder không đơn giản là “bias”; nó là một biến cụ thể trong cấu trúc quan hệ.

**Linking:** `confounding variable` — biến gây nhiễu; `mediator` — biến trung gian; `moderator` — biến làm thay đổi mức/tác động; `spurious factor` — yếu tố giả.

**Examples:** `Age was a confounder because it affected both treatment choice and recovery.` → Tuổi là biến gây nhiễu vì ảnh hưởng cả lựa chọn điều trị lẫn khả năng hồi phục. `The analysis adjusted for several known confounders.` → Phân tích đã điều chỉnh cho một số biến gây nhiễu đã biết.

**Liên kết tiếng Hàn:** `교란 변수` — biến gây nhiễu; `혼란 요인` — yếu tố làm rối.

## 16. attrition /əˈtrɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun` — trong nghiên cứu/tổ chức, sự giảm số người hoặc nguồn lực do rời đi dần dần.

**Core meaning — English:** A gradual reduction in participants, employees, members, or strength, especially through withdrawal or departure.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một hàng người mỏng dần khi từng người rời khỏi. Attrition có thể làm mẫu nghiên cứu hoặc đội ngũ thay đổi theo cách không ngẫu nhiên.

**Grammar & collocations:** `participant attrition` — hao hụt người tham gia; `staff attrition` — nhân sự rời đi; `attrition rate` — tỷ lệ hao hụt.

**Register & nuance:** `formal, research/business` — trang trọng, nghiên cứu và business. Nó khác `turnover`: turnover thường nói vòng thay thế nhân sự, còn attrition nhấn sự giảm dần hoặc mất người.

**Linking:** `dropout` — bỏ cuộc/rời nghiên cứu; `depletion` — cạn kiệt; `erosion` — bào mòn; `turnover` — thay thế nhân sự.

**Examples:** `High participant attrition weakened the reliability of the final comparison.` → Hao hụt người tham gia cao làm giảm độ tin cậy của so sánh cuối. `The nonprofit faces staff attrition because the workload is unsustainable.` → Tổ chức phi lợi nhuận đối mặt tình trạng nhân viên rời đi vì khối lượng công việc không bền vững.

**Liên kết tiếng Hàn:** `탈락` — rời/bỏ cuộc; `감소` — sự giảm.

## 17. baseline /ˈbeɪsˌlaɪn/

**Loại từ & vị trí trong câu:** `countable noun` — mốc hoặc mức ban đầu dùng để so sánh thay đổi về sau.

**Core meaning — English:** An initial measurement or standard against which later change or performance is compared.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung vạch xuất phát trên thước đo. Không có baseline, ta khó biết một kết quả là cải thiện, suy giảm hay chỉ khác do cách đo.

**Grammar & collocations:** `establish a baseline` — xác lập mốc ban đầu; `baseline measurement` — phép đo ban đầu; `against the baseline` — so với mốc chuẩn.

**Register & nuance:** `formal, research/business/policy` — trang trọng, nghiên cứu, business và chính sách. Baseline có thể là số đo thực tế hoặc chuẩn quy ước, nên phải nêu rõ nguồn.

**Linking:** `benchmark` — chuẩn so sánh; `starting point` — điểm bắt đầu; `reference level` — mức tham chiếu; `control` — nhóm/điều kiện đối chứng.

**Examples:** `The survey established a baseline before the literacy program began.` → Khảo sát xác lập mốc ban đầu trước khi chương trình đọc viết bắt đầu. `Later results were compared with the baseline rather than with an ideal target.` → Kết quả sau đó được so với mốc ban đầu thay vì một mục tiêu lý tưởng.

**Liên kết tiếng Hàn:** `기준선` — đường/mốc cơ sở; `초기 기준` — tiêu chuẩn ban đầu.

## 18. benchmark /ˈbentʃˌmɑrk/

**Loại từ & vị trí trong câu:** `countable noun` và `transitive verb` — chuẩn dùng để so sánh hiệu suất hoặc mức độ.

**Core meaning — English:** A standard, reference point, or comparison used to judge quality, progress, or performance.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một cột mốc bên đường cho biết ta đang ở đâu so với chuẩn. Benchmark có thể là mức lịch sử, đối thủ, tiêu chuẩn ngành hoặc mục tiêu đã thống nhất.

**Grammar & collocations:** `industry benchmark` — chuẩn ngành; `benchmark performance` — so sánh hiệu suất; `benchmark against peers` — đối chiếu với nhóm tương đương.

**Register & nuance:** `formal-professional` — trang trọng và chuyên nghiệp. `Baseline` là mốc ban đầu của chính đối tượng; `benchmark` thường là chuẩn bên ngoài hoặc mức so sánh.

**Linking:** `standard` — tiêu chuẩn; `yardstick` — thước đo, thông dụng hơn; `metric` — chỉ số; `reference point` — điểm tham chiếu.

**Examples:** `The hospital benchmarked its waiting times against comparable regional centers.` → Bệnh viện đối chiếu thời gian chờ với các trung tâm khu vực tương đương. `A benchmark is useful only when the populations being compared are genuinely comparable.` → Chuẩn so sánh chỉ hữu ích khi các nhóm được so sánh thật sự tương đồng.

**Liên kết tiếng Hàn:** `벤치마크` — chuẩn đối chiếu; `비교 기준` — tiêu chuẩn so sánh.

## 19. denominator /dɪˈnɑməˌneɪtɚ/

**Loại từ & vị trí trong câu:** `countable noun` — trong phân số/thống kê, số ở dưới dùng để xác định tổng nhóm hoặc cơ sở tính tỷ lệ.

**Core meaning — English:** The number or group used as the total against which a rate, proportion, or percentage is calculated.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung mẫu số là toàn bộ chiếc bánh trước khi tính một phần chiếm bao nhiêu. Chọn denominator sai có thể làm cùng một số trường hợp trông lớn hoặc nhỏ khác hẳn.

**Grammar & collocations:** `the denominator of a fraction` — mẫu số của phân số; `a changing denominator` — mẫu số thay đổi; `define the denominator` — xác định nhóm cơ sở.

**Register & nuance:** `formal, mathematical/statistical` — trang trọng, toán học và thống kê. Trong báo cáo công chúng, nêu rõ denominator rất quan trọng để người đọc hiểu tỷ lệ.

**Linking:** `numerator` — tử số; `base population` — quần thể cơ sở; `sample size` — cỡ mẫu; `proportion` — tỷ lệ.

**Examples:** `The percentage looks high because the denominator includes only active users.` → Tỷ lệ có vẻ cao vì mẫu số chỉ gồm người dùng đang hoạt động. `Analysts debated whether the denominator should include people who never applied.` → Các nhà phân tích tranh luận liệu mẫu số có nên gồm những người chưa từng nộp đơn hay không.

**Liên kết tiếng Hàn:** `분모` — mẫu số; `기준 모집단` — quần thể cơ sở.

## 20. outlier /ˈaʊtˌlaɪɚ/

**Loại từ & vị trí trong câu:** `countable noun` — điểm dữ liệu, kết quả hoặc trường hợp nằm xa phần lớn mẫu.

**Core meaning — English:** A person, observation, or result that differs markedly from the main pattern or group.

**Core meaning & mental image — Tiếng Việt:** Hãy hình dung một chấm nằm xa cụm chấm chính trên biểu đồ. Outlier có thể là lỗi đo, trường hợp hiếm hoặc tín hiệu về một cơ chế mà trung bình che khuất.

**Grammar & collocations:** `a statistical outlier` — điểm ngoại lệ thống kê; `identify outliers` — xác định điểm ngoại lệ; `an influential outlier` — ngoại lệ có ảnh hưởng lớn đến mô hình.

**Register & nuance:** `formal, statistical/analytical` — trang trọng, thống kê và phân tích. Không nên tự động xóa outlier; cần tìm hiểu vì sao nó khác.

**Linking:** `anomaly` — bất thường; `exception` — ngoại lệ; `extreme value` — giá trị cực đoan; `deviation` — độ lệch.

**Examples:** `The analyst checked the outlier before calculating the average.` → Nhà phân tích kiểm tra điểm ngoại lệ trước khi tính trung bình. `The outlier was not an error; it represented a small community with unusually high participation.` → Điểm ngoại lệ không phải lỗi; nó đại diện cho một cộng đồng nhỏ có mức tham gia đặc biệt cao.

**Liên kết tiếng Hàn:** `이상치` — giá trị ngoại lệ; `특이값` — giá trị khác thường.

---

# Review in context

## Making a careful comparison

The analysts **disaggregated** the results and used a **granular** measure because the population was **heterogeneous**, not **homogeneous**. One result was **incongruent** with the others, while the long-term effect remained **indeterminate** because the problem was **intractable** and public opinion was **malleable**. The survey used an **ordinal** scale and a school-attendance **proxy**; the conclusion looked **robust**, but a **sensitivity** test showed how much it depended on one assumption. Researchers **triangulated** the sources and warned against **extrapolation** beyond the sample. They identified a possible **confounder**, measured participant **attrition**, established a **baseline**, and chose a regional **benchmark**. Finally, they explained the **denominator**, inspected an **outlier**, and refused to present a percentage without showing how it had been calculated.

## Nghĩa tiếng Việt

Các nhà phân tích tách kết quả thành nhóm nhỏ và dùng phép đo chi tiết vì quần thể không đồng nhất. Một kết quả không khớp với các kết quả khác, còn tác động dài hạn vẫn chưa xác định vì vấn đề nan giải và dư luận dễ bị định hình. Khảo sát dùng thang thứ bậc và việc đi học làm biến đại diện; kết luận có vẻ vững, nhưng kiểm tra độ nhạy cho thấy nó phụ thuộc nhiều đến mức nào vào một giả định. Các nhà nghiên cứu đối chiếu nhiều nguồn và cảnh báo không được ngoại suy vượt ra ngoài mẫu. Họ xác định một biến gây nhiễu tiềm tàng, đo mức hao hụt người tham gia, xác lập mốc ban đầu và chọn một chuẩn so sánh khu vực. Cuối cùng, họ giải thích mẫu số, kiểm tra một điểm ngoại lệ và từ chối trình bày tỷ lệ nếu không cho biết nó được tính như thế nào.
