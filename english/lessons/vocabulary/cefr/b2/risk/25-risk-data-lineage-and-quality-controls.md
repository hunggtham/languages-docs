# B2 Vocabulary — Risk data lineage and quality controls

Chủ đề này đi theo flow: **source → define → reconcile → aggregate → attest**. Các mục B2 giúp mô tả cách theo dõi dòng dữ liệu rủi ro, kiểm soát chất lượng và bảo đảm báo cáo có thể truy ngược.

## 1. risk data lineage /rɪsk ˈdeɪtə ˈlɪniɪdʒ/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — bản đồ và bằng chứng về đường đi của dữ liệu rủi ro từ nguồn đến báo cáo.

**Core meaning — English:** The documented path showing how risk data is sourced, transformed, moved, and used in reporting or decisions.

**Core meaning & mental image — Tiếng Việt:** `Risk data lineage` là dòng sông có bản đồ: biết dữ liệu bắt đầu ở đâu và đã đổi thế nào.

**Grammar & collocations:** `document risk data lineage` — ghi; `lineage trace` — dấu vết; `data path` — đường dữ liệu.

**Register & nuance:** Dòng dữ liệu giúp điều tra lỗi và chứng minh báo cáo; nó cần cập nhật khi hệ thống hoặc phép biến đổi đổi.

**Examples:** `Risk data lineage linked the capital report to three source systems.` → Dòng dữ liệu rủi ro liên kết báo cáo vốn với ba hệ thống nguồn.

## 2. source system /sɔrs ˈsɪstəm/

**Loại từ & vị trí trong câu:** `countable noun phrase` — hệ thống nơi dữ liệu gốc được tạo hoặc ghi nhận lần đầu.

**Core meaning — English:** The originating application, database, or process that first records a data element used downstream.

**Core meaning & mental image — Tiếng Việt:** `Source system` là giếng đầu nguồn: nếu nước ở đây sai, các kênh phía sau cũng bị ảnh hưởng.

**Grammar & collocations:** `identify a source system` — xác định; `source record` — bản ghi nguồn; `system extract` — dữ liệu trích xuất.

**Register & nuance:** Một báo cáo có thể có nhiều nguồn; cần biết nguồn nào có thẩm quyền khi giá trị xung đột.

**Examples:** `The source system stored the customer limit before the reporting layer transformed it.` → Hệ thống nguồn lưu giới hạn khách hàng trước khi tầng báo cáo biến đổi.

## 3. lineage custodian /ˈlɪniɪdʒ kəˈstoʊdiən/

**Loại từ & vị trí trong câu:** `countable noun phrase` — người hoặc nhóm duy trì bản đồ dòng dữ liệu và các bằng chứng liên quan.

**Core meaning — English:** The person or function responsible for keeping data-lineage documentation accurate and reviewable.

**Core meaning & mental image — Tiếng Việt:** `Lineage custodian` là người trông bản đồ đường sông: cập nhật cây cầu mới và đánh dấu chỗ đổi dòng.

**Grammar & collocations:** `appoint a lineage custodian` — chỉ định; `custodian review` — xem xét; `lineage ownership` — quyền sở hữu dòng dữ liệu.

**Register & nuance:** Người trông dòng dữ liệu phối hợp nhiều chủ hệ thống nhưng không nhất thiết sở hữu giá trị kinh doanh của từng trường.

**Examples:** `The lineage custodian documented the new transformation before the report was released.` → Người trông dòng dữ liệu ghi phép biến đổi mới trước khi phát hành báo cáo.

## 4. metric definition /ˈmɛtrɪk ˌdɛfəˈnɪʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase` — mô tả chính thức về ý nghĩa, công thức, phạm vi và đơn vị của một chỉ số.

**Core meaning — English:** A documented explanation of what a metric measures, how it is calculated, and where it applies.

**Core meaning & mental image — Tiếng Việt:** `Metric definition` là từ điển của con số: cùng một tên phải chỉ cùng một ý nghĩa.

**Grammar & collocations:** `approve a metric definition` — phê duyệt; `definition note` — ghi chú; `metric owner` — người phụ trách chỉ số.

**Register & nuance:** Định nghĩa tránh tranh luận giả về số liệu; thay đổi công thức cần lưu phiên bản và tác động.

**Examples:** `The metric definition clarified whether charged-off accounts were included.` → Định nghĩa chỉ số làm rõ tài khoản đã xóa nợ có được tính không.

## 5. reconciliation check /ˌrɛkənsɪliˈeɪʃən tʃɛk/

**Loại từ & vị trí trong câu:** `countable noun phrase` — phép kiểm tra so sánh hai nguồn hoặc hai bước dữ liệu để tìm chênh lệch.

**Core meaning — English:** A check that compares related data sets or totals to identify unexplained differences.

**Core meaning & mental image — Tiếng Việt:** `Reconciliation check` là cân hai đĩa: nếu lệch, phải tìm xem vật nào bị bỏ hoặc đếm hai lần.

**Grammar & collocations:** `perform a reconciliation check` — thực hiện; `reconciliation break` — chênh lệch; `matched total` — tổng khớp.

**Register & nuance:** Kiểm tra đối soát cần ngưỡng và quy tắc xử lý chênh lệch; khớp tổng không chứng minh mọi bản ghi đúng.

**Examples:** `The reconciliation check found a timing difference between the ledger and the report.` → Kiểm tra đối soát tìm thấy chênh lệch thời điểm giữa sổ cái và báo cáo.

## 6. data quality issue /ˈdeɪtə ˈkwɑləti ˈɪʃuː/

**Loại từ & vị trí trong câu:** `countable noun phrase` — vấn đề về tính đúng, đủ, kịp thời, nhất quán hoặc phù hợp của dữ liệu.

**Core meaning — English:** A defect or limitation that reduces the reliability or usefulness of data for reporting or decisions.

**Core meaning & mental image — Tiếng Việt:** `Data quality issue` là viên sỏi trong hộp nguyên liệu: nhỏ nhưng có thể làm cả phép đo lệch.

**Grammar & collocations:** `log a data quality issue` — ghi; `quality defect` — lỗi chất lượng; `issue owner` — người phụ trách.

**Register & nuance:** Vấn đề chất lượng nên được phân loại theo tác động và nguồn, không chỉ theo số bản ghi bị lỗi.

**Examples:** `The data quality issue affected the regional concentration report.` → Vấn đề chất lượng dữ liệu ảnh hưởng báo cáo tập trung khu vực.

## 7. reporting cut-off /rɪˈpɔrtɪŋ ˈkʌtˌɔf/

**Loại từ & vị trí trong câu:** `countable noun phrase` — thời điểm chốt dữ liệu cho một kỳ báo cáo.

**Core meaning — English:** The defined time after which new or changed data is excluded from a reporting cycle or handled separately.

**Core meaning & mental image — Tiếng Việt:** `Reporting cut-off` là đường đóng cửa: dữ liệu sau mốc này phải chờ kỳ sau hoặc được chú thích.

**Grammar & collocations:** `set a reporting cut-off` — đặt; `cut-off time` — giờ chốt; `late data` — dữ liệu đến muộn.

**Register & nuance:** Mốc chốt giúp báo cáo ổn định nhưng cần quy tắc cho dữ liệu muộn và điều chỉnh trọng yếu.

**Examples:** `The reporting cut-off was Friday evening for the monthly risk pack.` → Mốc chốt báo cáo là tối thứ Sáu cho bộ báo cáo rủi ro tháng.

## 8. manual adjustment /ˈmænjuəl əˈdʒʌstmənt/

**Loại từ & vị trí trong câu:** `countable noun phrase` — thay đổi thủ công vào dữ liệu hoặc tổng số sau bước hệ thống tự động.

**Core meaning — English:** A human-entered change to a data value or report total outside the standard automated process.

**Core meaning & mental image — Tiếng Việt:** `Manual adjustment` là nét bút trên bảng tính: có thể cần thiết nhưng phải có lý do và dấu vết.

**Grammar & collocations:** `approve a manual adjustment` — phê duyệt; `adjustment reason` — lý do; `manual-entry log` — nhật ký nhập tay.

**Register & nuance:** Điều chỉnh tay tăng rủi ro lỗi và thao túng; cần phân quyền, bằng chứng và xem xét độc lập phù hợp.

**Examples:** `The analyst recorded a manual adjustment for a late settlement.` → Chuyên viên ghi điều chỉnh thủ công cho một giao dịch thanh toán muộn.

## 9. data aggregation /ˈdeɪtə ˌæɡrəˈɡeɪʃən/

**Loại từ & vị trí trong câu:** `uncountable noun phrase` — việc gom nhiều bản ghi hoặc giá trị thành tổng, nhóm hoặc chỉ số.

**Core meaning — English:** The process of combining detailed data into grouped totals or measures for analysis and reporting.

**Core meaning & mental image — Tiếng Việt:** `Data aggregation` là gom nhiều dòng suối thành hồ: tiện nhìn nhưng cần biết nước đến từ đâu.

**Grammar & collocations:** `perform data aggregation` — thực hiện; `aggregation level` — cấp gom; `grouped total` — tổng theo nhóm.

**Register & nuance:** Gom dữ liệu có thể che ngoại lệ hoặc lỗi phân loại; cần giữ khả năng drill-down khi rủi ro cao.

**Examples:** `Data aggregation combined desk exposures into a group-level measure.` → Gom dữ liệu kết hợp phơi nhiễm các bàn thành một chỉ số cấp nhóm.

## 10. control total /kənˈtroʊl ˈtoʊtəl/

**Loại từ & vị trí trong câu:** `countable noun phrase` — tổng hoặc số kiểm tra dùng để xác nhận dữ liệu truyền đúng giữa các bước.

**Core meaning — English:** A reference total or count used to verify that data has not been lost, duplicated, or altered during processing.

**Core meaning & mental image — Tiếng Việt:** `Control total` là con số trên phiếu giao hàng: dùng để đếm lại trước và sau khi chuyển.

**Grammar & collocations:** `compare a control total` — so sánh; `control count` — số kiểm tra; `tie out` — khớp.

**Register & nuance:** Tổng kiểm tra phát hiện mất hoặc nhân bản dữ liệu nhưng không tự chứng minh từng giá trị đúng.

**Examples:** `The control total did not match after the overnight data load.` → Tổng kiểm tra không khớp sau lần nạp dữ liệu qua đêm.

## 11. reporting exception /rɪˈpɔrtɪŋ ɪkˈsɛpʃən/

**Loại từ & vị trí trong câu:** `countable noun phrase` — trường hợp dữ liệu hoặc báo cáo không đáp ứng quy tắc chuẩn và cần giải thích.

**Core meaning — English:** A documented departure from normal reporting requirements, controls, or data-quality expectations.

**Core meaning & mental image — Tiếng Việt:** `Reporting exception` là lá cờ trên bảng báo cáo: nói rõ chỗ nào đang khác chuẩn.

**Grammar & collocations:** `record a reporting exception` — ghi; `exception reason` — lý do; `exception approval` — phê duyệt ngoại lệ.

**Register & nuance:** Ngoại lệ báo cáo cần người sở hữu và thời hạn xử lý; nếu lặp lại, nó có thể chỉ ra lỗi quy trình.

**Examples:** `The report included a reporting exception for an unavailable counterparty file.` → Báo cáo gồm ngoại lệ vì thiếu hồ sơ đối tác.

## 12. source map /sɔrs mæp/

**Loại từ & vị trí trong câu:** `countable noun phrase` — sơ đồ nối các trường báo cáo với nguồn dữ liệu và phép biến đổi.

**Core meaning — English:** A structured map linking report fields to their source records, transformations, and responsible systems.

**Core meaning & mental image — Tiếng Việt:** `Source map` là bản đồ kho báu: từ ô báo cáo lần ngược được đến nơi dữ liệu bắt đầu.

**Grammar & collocations:** `maintain a source map` — duy trì; `source mapping` — lập bản đồ; `field mapping` — ánh xạ trường.

**Register & nuance:** Sơ đồ nguồn giúp kiểm tra tác động khi thay hệ thống hoặc công thức; nó cần phiên bản và chủ sở hữu.

**Examples:** `The source map showed which database supplied the liquidity field.` → Bản đồ nguồn cho thấy cơ sở dữ liệu nào cung cấp trường thanh khoản.

## 13. data dependency /ˈdeɪtə dɪˈpɛndənsi/

**Loại từ & vị trí trong câu:** `countable noun phrase` — mối liên hệ trong đó một báo cáo, chỉ số hoặc quyết định phụ thuộc vào dữ liệu khác.

**Core meaning — English:** A relationship in which one data product, report, or control relies on another data source or transformation.

**Core meaning & mental image — Tiếng Việt:** `Data dependency` là dây chuyền móc nối: một mắt xích đổi có thể kéo nhiều báo cáo đổi theo.

**Grammar & collocations:** `identify a data dependency` — xác định; `dependency map` — bản đồ phụ thuộc; `upstream data` — dữ liệu thượng nguồn.

**Register & nuance:** Biết phụ thuộc giúp đánh giá tác động và lập kế hoạch khi nguồn dữ liệu ngừng hoặc đổi.

**Examples:** `The team documented a data dependency on the overnight pricing feed.` → Nhóm ghi nhận sự phụ thuộc vào nguồn giá qua đêm.

## 14. quality threshold /ˈkwɑləti ˈθrɛʃˌhoʊld/

**Loại từ & vị trí trong câu:** `countable noun phrase` — mức chất lượng tối thiểu dữ liệu phải đạt để được dùng hoặc báo cáo.

**Core meaning — English:** A defined minimum standard for data completeness, accuracy, timeliness, or consistency.

**Core meaning & mental image — Tiếng Việt:** `Quality threshold` là vạch nước sạch: dưới mức đó, dữ liệu phải được cảnh báo hoặc giữ lại.

**Grammar & collocations:** `set a quality threshold` — đặt; `threshold breach` — vi phạm ngưỡng; `quality metric` — chỉ số chất lượng.

**Register & nuance:** Ngưỡng nên gắn với mục đích và tác động; cùng một tỷ lệ thiếu có thể chấp nhận ở báo cáo này nhưng không ở báo cáo khác.

**Examples:** `The feed failed the quality threshold because records arrived too late.` → Nguồn dữ liệu không đạt ngưỡng chất lượng vì bản ghi đến quá muộn.

## 15. sign-off pack /saɪn ɑf pæk/

**Loại từ & vị trí trong câu:** `countable noun phrase` — gói báo cáo, bằng chứng và giải thích được dùng để xin xác nhận cuối.

**Core meaning — English:** A structured package of results, exceptions, evidence, and commentary presented for formal approval or attestation.

**Core meaning & mental image — Tiếng Việt:** `Sign-off pack` là tập hồ sơ trước khi đóng dấu: người duyệt thấy số liệu và điều kiện đi kèm.

**Grammar & collocations:** `prepare a sign-off pack` — chuẩn bị; `pack review` — xem gói; `formal attestation` — xác nhận chính thức.

**Register & nuance:** Gói xác nhận không nên che ngoại lệ; nó phải đưa cả giới hạn và điểm chưa giải quyết để người ký quyết định có thông tin.

**Examples:** `The sign-off pack included the reconciliation results and unresolved data-quality issues.` → Gói xác nhận gồm kết quả đối soát và các vấn đề chất lượng dữ liệu chưa giải quyết.

## Review in context

The **risk data lineage** began at a **source system**, with a **lineage custodian** maintaining the **metric definition**. A **reconciliation check** found a **data quality issue** just before the **reporting cut-off**. The analyst documented a **manual adjustment**, reran **data aggregation**, and compared the **control total**. A **reporting exception** was linked through the **source map** to a wider **data dependency**. After the feed met the **quality threshold**, the evidence was added to the **sign-off pack**.

**Bản dịch tiếng Việt:**

Dòng dữ liệu rủi ro bắt đầu ở một hệ thống nguồn, với người trông dòng dữ liệu duy trì định nghĩa chỉ số. Kiểm tra đối soát phát hiện một vấn đề chất lượng dữ liệu ngay trước mốc chốt báo cáo. Chuyên viên ghi điều chỉnh thủ công, chạy lại bước gom dữ liệu và so sánh tổng kiểm tra. Một ngoại lệ báo cáo được nối qua bản đồ nguồn với một sự phụ thuộc dữ liệu rộng hơn. Sau khi nguồn đạt ngưỡng chất lượng, bằng chứng được thêm vào gói xác nhận.
