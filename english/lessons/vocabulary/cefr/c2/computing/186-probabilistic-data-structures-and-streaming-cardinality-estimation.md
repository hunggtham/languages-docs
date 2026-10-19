# C2 Vocabulary 186 — Probabilistic data structures, streaming sketches, and sublinear cardinality estimation

Ở trình độ C2 trong khoa học dữ liệu quy mô lớn, kỹ thuật cơ sở dữ liệu phân tán và lý thuyết thuật toán dòng (streaming algorithms), việc xử lý hàng tỷ bản ghi mỗi giây với bộ nhớ khả dụng hạn chế đòi hỏi một sự chuyển dịch tư duy căn bản: từ bỏ tính chính xác tuyệt đối để đổi lấy sự gần đúng có bảo đảm toán học khắt khe. Các cấu trúc dữ liệu xác suất và thuật toán phác thảo (sketches) cho phép ước lượng số lượng phần tử duy nhất (cardinality), truy vấn tần suất và nhận diện các phần tử chiếm đa số (heavy hitters) trong không gian bộ nhớ cận tuyến tính (sublinear space) chỉ bằng vài kilobyte RAM. Bài học này trang bị hệ thống thuật ngữ chuẩn mực về bộ đếm thanh ghi HyperLogLog, cận trên ước lượng của Count-Min Sketch, tỷ lệ dương tính giả của Bloom Filter, tính bất biến trong lấy mẫu hồ chứa và các cơ chế xử lý xóa dữ liệu trong Quotient Filter.

Flow của bài học: **hyperloglog register counting** → **count-min sketch overestimation bound** → **bloom filter false-positive ratio** → **reservoir sampling invariance** → **quotient filter tombstone** → **stream summary error guarantee** → **sublinear cardinality estimation** → **hash collision probability** → **probabilistic frequency estimation** → **leading-zero bit counting** → **count-sketch point query** → **cuckoo filter eviction chain** → **streaming quantile sketch** → **geometric distribution of hash prefixes** → **heavy-hitters stream algorithm** → **space-saving algorithm summary** → **sliding-window cardinality sketch** → **false-positive error bound** → **murmurhash distribution uniformity** → **bit-array occupancy fraction** → **t-digest centroid clustering** → **probabilistic membership query** → **mergeable streaming sketch** → **hash function independence assumption** → **sketch estimation variance reduction**.

---

## 1. hyperloglog register counting /ˌhaɪpərˈlɔɡlɔɡ ˈrɛdʒɪstər ˈkaʊntɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm phương pháp hoặc thuật toán trung tâm trong ước lượng lực lượng tập hợp lớn (ví dụ: `implement HyperLogLog register counting`).

**Core meaning — English:** The probabilistic technique of estimating the number of unique elements in a massive stream by partitioning hashed inputs into multiple memory registers, tracking the maximum number of leading zeros in each, and computing their harmonic mean.

**Core meaning & mental image — Tiếng Việt:** Đếm thanh ghi HyperLogLog; hãy hình dung bạn quan sát hàng triệu người tung đồng xu: một người tung được liên tiếp 20 lần mặt ngửa là chuyện vô cùng hiếm gặp; bằng cách chia dữ liệu vào 1.024 chiếc hộp nhỏ (thanh ghi) và chỉ ghi lại chuỗi mặt ngửa dài nhất trong từng hộp, bạn có thể tính ra gần như chính xác đã có bao nhiêu tỷ lượt người tham gia tung xu mà chỉ cần một mẩu giấy nhỏ chưa đầy 1 KB để ghi chép.

**Grammar & collocations:** `accuracy of HyperLogLog register counting` — độ chính xác của việc đếm thanh ghi HyperLogLog; `parallelize HyperLogLog register counting` — song song hóa việc đếm thanh ghi HyperLogLog; `HyperLogLog register counting error rate` — tỷ lệ sai số đếm thanh ghi HyperLogLog.

**Register & nuance:** `distributed database internals & streaming analytics` — thuật ngữ kinh điển của Flajolet; sử dụng trung bình điều hòa (harmonic mean) thay vì trung bình cộng để triệt tiêu ảnh hưởng của các giá trị ngoại lai ngẫu nhiên cực đoan.

**Examples:** `Modern analytical warehouses rely on HyperLogLog register counting to evaluate distinct user counts across petabyte-scale clickstream tables in milliseconds.` → Các kho dữ liệu phân tích hiện đại dựa vào việc đếm thanh ghi HyperLogLog để đánh giá số lượng người dùng duy nhất trên các bảng dữ liệu luồng nhấp chuột quy mô petabyte chỉ trong vài phần nghìn giây.

**Liên kết tiếng Hàn:** `하이퍼로그로그 레지스터 카운팅 / 계수` (HyperLogLog register 計數) — phép đếm thanh ghi của thuật toán HyperLogLog.

---

## 2. count-min sketch overestimation bound /kaʊnt mɪn skɛtʃ ˌoʊvərˌɛstəˈmeɪʃən baʊnd/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là sự bảo đảm toán học một phía về sai số tần suất (ví dụ: `satisfy the count-min sketch overestimation bound`).

**Core meaning — English:** The mathematical proof guaranteeing that a Count-Min Sketch will never underestimate any item's true frequency and will overestimate it by at most $\epsilon N$ with probability at least $1 - \delta$, where $N$ is total stream volume.

**Core meaning & mental image — Tiếng Việt:** Cận trên ước tính quá mức của Count-Min Sketch; hãy hình dung bạn đếm số phiếu bầu bằng cách ghi vào nhiều cuốn sổ khác nhau có khả năng bị trùng tên cử tri; kết quả đếm được luôn luôn lớn hơn hoặc bằng số phiếu thực tế (không bao giờ đếm thiếu), và định lý toán học bảo đảm rằng mức độ đếm thừa tối đa sẽ không bao giờ vượt qua một con số trần định trước với độ tin cậy 99%.

**Grammar & collocations:** `derive the count-min sketch overestimation bound` — dẫn xuất cận trên ước tính quá mức của Count-Min Sketch; `tighten the count-min sketch overestimation bound` — thắt chặt cận trên ước tính quá mức của Count-Min Sketch; `guaranteed by the count-min sketch overestimation bound` — được bảo đảm bởi cận trên ước tính quá mức của Count-Min Sketch.

**Register & nuance:** `algorithmic theory & sublinear data structures` — đặc tính cốt lõi của Count-Min Sketch (Cormode & Muthukrishnan 2005); tính "một phía" (one-sided error) này cực kỳ hữu ích cho việc lọc và giới hạn lưu lượng mạng (rate-limiting).

**Examples:** `According to the count-min sketch overestimation bound, the estimated query frequency is guaranteed to exceed the true frequency by no more than two percent of total stream traffic.` → Theo cận trên ước tính quá mức của Count-Min Sketch, tần suất truy vấn ước tính được bảo đảm không vượt quá tần suất thực tế quá hai phần trăm tổng lưu lượng dòng dữ liệu.

**Liên kết tiếng Hàn:** `카운트-민 스케치 과대평가 상계` (Count-Min sketch 過大評價 上界) — cận trên ước tính vượt mức của Count-Min Sketch.

---

## 3. bloom filter false-positive ratio /bluːm ˈfɪltər fɔls ˈpɑzətɪv ˈreɪʃioʊ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm thông số thiết kế trọng yếu khi cấp phát kích thước mảng bit (ví dụ: `minimize the Bloom filter false-positive ratio`).

**Core meaning — English:** The calculated probability that a Bloom filter erroneously reports that an element is present in a set when it was never inserted, governed by bit array size, number of hash functions, and inserted element count.

**Core meaning & mental image — Tiếng Việt:** Tỷ lệ dương tính giả của Bloom Filter; hãy hình dung một nhân viên gác cổng chỉ nhìn vào các dấu tích trên danh sách: khi tra cứu một người khách lạ, nếu có bất kỳ ô trống nào chưa tích, người đó chắc chắn 100% chưa từng đến (không bao giờ âm tính giả); nhưng nếu tình cờ tất cả các ô dấu tích của người đó đều đã bị những vị khách trước đó tích trùng, nhân viên có thể đoán nhầm là khách đã có mặt (dương tính giả).

**Grammar & collocations:** `tune the Bloom filter false-positive ratio` — tinh chỉnh tỷ lệ dương tính giả của Bloom Filter; `acceptable Bloom filter false-positive ratio` — tỷ lệ dương tính giả Bloom Filter có thể chấp nhận được; `formula for the Bloom filter false-positive ratio` — công thức tính tỷ lệ dương tính giả của Bloom Filter.

**Register & nuance:** `systems programming & networking` — tỷ lệ này $p \approx (1 - e^{-kn/m})^k$ có thể được ép xuống mức cực nhỏ (như 0.01% hoặc 0.001%) chỉ bằng cách tăng thêm vài bit cho mỗi phần tử lưu trữ.

**Examples:** `Allocating ten bits per key configured the Bloom filter false-positive ratio to approximately one percent, eliminating ninety-nine percent of unnecessary solid-state disk reads.` → Việc cấp phát mười bit cho mỗi khóa đã định cấu hình tỷ lệ dương tính giả của Bloom Filter về khoảng một phần trăm, loại bỏ chín mươi chín phần trăm các lần đọc đĩa thể rắn không cần thiết.

**Liên kết tiếng Hàn:** `블룸 필터 위양성률` (Bloom filter 僞陽性率) — tỷ lệ dương tính giả của cấu trúc Bloom filter.

---

## 4. reservoir sampling invariance /ˈrɛzərvwɑr ˈsæmplɪŋ ɪnˈvɛriəns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là thuộc tính toán học bảo đảm tính đại diện công bằng của mẫu ngẫu nhiên (ví dụ: `prove reservoir sampling invariance`).

**Core meaning — English:** The mathematical property of reservoir algorithms ensuring that every item arriving in an arbitrary, unbounded data stream retains an exactly equal probability ($k/n$) of being included in the sample of size $k$.

**Core meaning & mental image — Tiếng Việt:** Tính bất biến trong lấy mẫu hồ chứa; hãy hình dung một chiếc thuyền nhỏ chỉ chở được đúng 10 hành khách (hồ chứa dung lượng $k$): hàng triệu người lần lượt đi qua cầu tàu vô tận; thuật toán bảo đảm rằng dù một người bước lên cầu tàu ở vị trí thứ 10 hay ở vị trí thứ 10 triệu, xác suất cuối cùng để người đó có mặt trên thuyền khi chuyến đi kết thúc là hoàn toàn bình đẳng như nhau.

**Grammar & collocations:** `maintain reservoir sampling invariance` — duy trì tính bất biến trong lấy mẫu hồ chứa; `proof of reservoir sampling invariance` — chứng minh tính bất biến trong lấy mẫu hồ chứa; `rely on reservoir sampling invariance` — dựa trên tính bất biến trong lấy mẫu hồ chứa.

**Register & nuance:** `probabilistic sampling & randomized algorithms` — thuật ngữ kinh điển gắn liền với Thuật toán R của Alan G. Waterman và Jeffrey Vitter; cho phép lấy mẫu ngẫu nhiên đồng nhất mà không cần biết trước độ dài dòng dữ liệu ($n$).

**Examples:** `Mathematical induction proves reservoir sampling invariance, demonstrating that every item processed from the infinite stream has an identical likelihood of persisting in the final sample buffer.` → Quy nạp toán học chứng minh tính bất biến trong lấy mẫu hồ chứa, chứng minh rằng mọi phần tử được xử lý từ dòng dữ liệu vô hạn đều có khả năng giống hệt nhau để tồn lưu trong bộ đệm mẫu cuối cùng.

**Liên kết tiếng Hàn:** `저수지 샘플링 불변성` (貯水池 sampling 不變性) — tính bất biến trong kỹ thuật lấy mẫu hồ chứa (reservoir sampling).

---

## 5. quotient filter tombstone /ˈkwoʊʃənt ˈfɪltər ˈtuːmstoʊn/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường xuất hiện trong phần thiết kế cơ chế xóa phần tử của bộ lọc thương số (ví dụ: `manage quotient filter tombstones`).

**Core meaning — English:** A special sentinel marker or metadata flag placed in a Quotient Filter slot upon element deletion to preserve cluster continuity and probing sequences without breaking lookup chains for existing items.

**Core meaning & mental image — Tiếng Việt:** Bia mộ của bộ lọc thương số; hãy hình dung một dãy ghế liền kề trong rạp hát nơi người đến muộn phải dồn ghế sang bên cạnh; khi một vị khách ra về sớm, người ta đặt lên chiếc ghế trống một tấm biển "bia mộ" đánh dấu: người soát vé nhìn thấy bia mộ sẽ biết chiếc ghế này hiện đang trống nhưng không được dừng việc tìm kiếm mà phải tiếp tục kiểm tra các ghế bên cạnh vì dây chuyền ngồi dồn vẫn còn tiếp diễn.

**Grammar & collocations:** `insert a quotient filter tombstone` — chèn một bia mộ bộ lọc thương số; `garbage collection of quotient filter tombstones` — thu gom rác các bia mộ bộ lọc thương số; `overhead of quotient filter tombstones` — chi phí phụ tải của các bia mộ bộ lọc thương số.

**Register & nuance:** `cache-friendly probabilistic filtering` — ưu thế lớn của Quotient Filter so với Bloom Filter truyền thống (vốn hoàn toàn không hỗ trợ thao tác xóa dữ liệu); tương tự khái niệm tombstone trong bảng băm mở (open-addressing hash tables).

**Examples:** `Rather than corrupting clustered run lengths during record deletion, the system places a quotient filter tombstone that sustains lookup chain integrity until table reorganization.` → Thay vì làm sai lệch độ dài các đoạn chạy cụm trong quá trình xóa bản ghi, hệ thống đặt một bia mộ bộ lọc thương số giúp duy trì tính toàn vẹn của chuỗi tra cứu cho đến khi tái cấu trúc bảng.

**Liên kết tiếng Hàn:** `몫 필터 묘비 / 툼스톤` (몫 filter 墓碑 / tombstone) — ký hiệu bia mộ đánh dấu phần tử đã xóa trong bộ lọc thương số.

---

## 6. stream summary error guarantee /striːm ˈsʌməri ˈɛrər ˌɡærənˈtiː/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tiêu chuẩn toán học bảo đảm độ chính xác trong các thuật toán Space-Saving (ví dụ: `satisfy the stream summary error guarantee`).

**Core meaning — English:** The theoretical upper bound ensuring that estimated frequencies produced by deterministic streaming algorithms (such as Space-Saving or Lossy Counting) diverge from actual values by at most a defined fraction of stream length.

**Core meaning & mental image — Tiếng Việt:** Sự bảo đảm sai số của bản tóm tắt dòng dữ liệu; hãy hình dung một bản hợp đồng bảo hiểm toán học: nhà cung cấp dịch vụ cam kết bằng văn bản rằng dù dòng dữ liệu có biến động dữ dội đến đâu, kết quả thống kê tần suất đưa ra cho bất kỳ phần tử nào cũng không bao giờ lệch quá 0,1% tổng khối lượng dữ liệu đã xử lý.

**Grammar & collocations:** `provable stream summary error guarantee` — sự bảo đảm sai số của bản tóm tắt dòng dữ liệu có thể chứng minh được; `meet the stream summary error guarantee` — đáp ứng sự bảo đảm sai số của bản tóm tắt dòng; `deterministic stream summary error guarantee` — sự bảo đảm sai số của bản tóm tắt dòng mang tính tất định.

**Register & nuance:** `theoretical computer science & heavy-hitter algorithms` — khác với Count-Min Sketch (vốn dựa trên xác suất Monte Carlo), các thuật toán Space-Saving với cấu trúc Stream-Summary đem lại sự bảo đảm sai số hoàn toàn tất định (deterministic guarantee).

**Examples:** `The space-saving algorithm enforces a deterministic stream summary error guarantee, assuring that no element with frequency exceeding the epsilon threshold is ever omitted.` → Thuật toán tiết kiệm không gian thực thi một sự bảo đảm sai số của bản tóm tắt dòng dữ liệu mang tính tất định, bảo đảm rằng không có phần tử nào có tần suất vượt quá ngưỡng epsilon bị bỏ sót.

**Liên kết tiếng Hàn:** `스트림 요약 오차 보증` (stream 要約 誤差 保證) — sự bảo đảm sai số trong tóm tắt luồng dữ liệu.

---

## 7. sublinear cardinality estimation /sʌbˈlɪniər ˌkɑrdəˈnæləti ˌɛstəˈmeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là mục tiêu thuật toán tối thượng trong phân tích dữ liệu lớn (ví dụ: `achieve sublinear cardinality estimation`).

**Core meaning — English:** The computational calculation of the approximate count of unique distinct items in a dataset using memory space that grows strictly slower than linearly (typically logarithmically, $O(\log \log N)$) relative to cardinality.

**Core meaning & mental image — Tiếng Việt:** Ước lượng lực lượng tập hợp cận tuyến tính; hãy hình dung việc đo chiều cao của một ngọn núi khổng lồ: thay vì phải xếp từng viên gạch từ chân núi lên đỉnh núi (chi phí bộ nhớ tuyến tính $O(N)$ đòi hỏi hàng tỷ viên gạch), bạn sử dụng một thiết bị đo áp suất khí quyển cầm tay siêu nhỏ (chi phí $O(\log \log N)$), chỉ cần vài byte thông tin là tính ra ngay độ cao ngọn núi.

**Grammar & collocations:** `algorithms for sublinear cardinality estimation` — các thuật toán ước lượng lực lượng tập hợp cận tuyến tính; `breakthrough in sublinear cardinality estimation` — bước đột phá trong ước lượng lực lượng tập hợp cận tuyến tính; `sublinear cardinality estimation complexity` — độ phức tạp ước lượng lực lượng tập hợp cận tuyến tính.

**Register & nuance:** `streaming algorithms & big data theory` — cột mốc phân định giữa các giải pháp lưu trữ thô sơ (như HashSet tốn gigabyte) và các hệ thống thời gian thực hiện đại (chỉ dùng vài kilobyte).

**Examples:** `Sublinear cardinality estimation algorithms permit real-time monitoring of distinct IP addresses across global transit routers using mere kilobytes of embedded SRAM.` → Các thuật toán ước lượng lực lượng tập hợp cận tuyến tính cho phép giám sát thời gian thực các địa chỉ IP duy nhất trên khắp các bộ định tuyến trung chuyển toàn cầu chỉ bằng vài kilobyte SRAM nhúng.

**Liên kết tiếng Hàn:** `아선형 기수 추정` (亞線形 基數 推定) — ước tính lực lượng tập hợp (số phần tử duy nhất) ở quy mô dưới tuyến tính.

---

## 8. hash collision probability /hæʃ kəˈlɪʒən ˌprɑbəˈbɪləti/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm đại lượng phân tích rủi ro trong thiết kế bảng băm và cấu trúc dữ liệu phác thảo (ví dụ: `calculate the hash collision probability`).

**Core meaning — English:** The mathematical likelihood that two distinct inputs map to the identical output hash value within a finite digest space, dictated by the birthday paradox and digest bit-width.

**Core meaning & mental image — Tiếng Việt:** Xác suất va chạm băm; hãy hình dung một lớp học có 30 học sinh: nghịch lý ngày sinh nhật chỉ ra rằng xác suất có ít nhất hai người trùng ngày sinh là trên 70%; xác suất va chạm băm là khả năng hai bức thư có nội dung hoàn toàn khác biệt tình cờ được nhét vào cùng một chiếc hộp thư có mã số giống hệt nhau.

**Grammar & collocations:** `minimize hash collision probability` — giảm thiểu xác suất va chạm băm; `theoretical hash collision probability` — xác suất va chạm băm trên lý thuyết; `negligible hash collision probability` — xác suất va chạm băm không đáng kể.

**Register & nuance:** `cryptography & hash table design` — là nguồn gốc căn bản sinh ra hiện tượng dương tính giả trong Bloom Filters và hiện tượng ước lượng vượt mức trong Count-Min Sketches.

**Examples:** `Expanding the 32-bit hash function to a 64-bit domain pushed the hash collision probability to near-zero levels, virtually eradicating false index aliasing.` → Việc mở rộng hàm băm từ 32 bit lên miền 64 bit đã đẩy xác suất va chạm băm xuống mức gần như bằng 0, hầu như triệt tiêu hiện tượng chồng lấn chỉ mục giả tạo.

**Liên kết tiếng Hàn:** `해시 충돌 확률` (hash 衝突 確率) — xác suất va chạm hàm băm.

---

## 9. probabilistic frequency estimation /ˌprɑbəbəˈlɪstɪk ˈfriːkwənsi ˌɛstəˈmeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm nhiệm vụ xử lý thống kê luồng dữ liệu liên tục (ví dụ: `perform probabilistic frequency estimation`).

**Core meaning — English:** The process of estimating the occurrence count of individual elements within high-volume data streams using compact sketched data structures without storing the raw elements themselves.

**Core meaning & mental image — Tiếng Việt:** Ước lượng tần suất theo xác suất; hãy hình dung một người đứng đếm lượng ô tô chạy qua một trạm thu phí cao tốc: thay vì ghi lại biển số của từng chiếc xe vào sổ (quá chậm và tốn giấy), người đó dùng các nút bấm gạt cơ học trên một bàn phím thu nhỏ để ước tính gần đúng số lượt xuất hiện của từng dòng xe một cách thần tốc.

**Grammar & collocations:** `conduct probabilistic frequency estimation` — tiến hành ước lượng tần suất theo xác suất; `framework for probabilistic frequency estimation` — khuôn khổ ước lượng tần suất theo xác suất; `unbiased probabilistic frequency estimation` — ước lượng tần suất theo xác suất không chệch.

**Register & nuance:** `streaming analytics & telecommunications monitoring` — giải pháp trung tâm trong việc phát hiện tấn công từ chối dịch vụ (DDoS) và phân tích lưu lượng truy cập mạng theo thời gian thực.

**Examples:** `Network switches utilize probabilistic frequency estimation to instantly identify malicious flow identifiers generating anomalous packet volumes without stalling line-rate forwarding.` → Các thiết bị chuyển mạch mạng sử dụng phương pháp ước lượng tần suất theo xác suất để nhận diện ngay lập tức các định danh luồng độc hại tạo ra khối lượng gói tin bất thường mà không làm đình trệ tốc độ chuyển tiếp đường truyền.

**Liên kết tiếng Hàn:** `확률적 빈도 추정` (確率的 頻度 推定) — ước lượng tần suất xuất hiện theo phương pháp xác suất.

---

## 10. leading-zero bit counting /ˈliːdɪŋ zɪroʊ bɪt ˈkaʊntɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là thao tác xử lý bit nguyên tử then chốt trong thuật toán HyperLogLog (ví dụ: `accelerate via leading-zero bit counting`).

**Core meaning — English:** The mathematical operation of counting the number of consecutive zero bits immediately preceding the first set bit (1) in the binary representation of a hashed value.

**Core meaning & mental image — Tiếng Việt:** Đếm số bit 0 ở đầu; hãy hình dung bạn nhìn vào một dãy số nhị phân: `00001011...`; thao tác này chỉ đơn giản là đếm xem có bao nhiêu số 0 đứng ở đầu hàng trước khi chạm tới số 1 đầu tiên (ở đây là 4 số 0); số lượng số 0 ở đầu càng nhiều thì xác suất xuất hiện của chuỗi đó càng hiếm, phản ánh quy mô dữ liệu càng khổng lồ.

**Grammar & collocations:** `efficient leading-zero bit counting` — đếm số bit 0 ở đầu hiệu quả; `hardware instruction for leading-zero bit counting` — lệnh phần cứng cho việc đếm số bit 0 ở đầu; `leading-zero bit counting primitive` — hàm nguyên thủy đếm số bit 0 ở đầu.

**Register & nuance:** `bitwise algorithms & low-level CPU optimization` — được tối ưu hóa ở cấp độ vi kiến trúc phần cứng thông qua các lệnh hợp ngữ chuyên dụng như `CLZ` (Count Leading Zeros) trên ARM hoặc `BSR`/`LZCNT` trên x86.

**Examples:** `Modern processors provide a dedicated hardware primitive for leading-zero bit counting, executing the core HyperLogLog observation step in a single clock cycle.` → Các bộ xử lý hiện đại cung cấp một lệnh nguyên thủy phần cứng chuyên dụng cho việc đếm số bit 0 ở đầu, thực thi bước quan sát cốt lõi của HyperLogLog chỉ trong một chu kỳ xung nhịp duy nhất.

**Liên kết tiếng Hàn:** `선행 영 비트 계수` (先行 0 bit 計數 / CLZ) — phép đếm các bit 0 đứng đầu trong chuỗi nhị phân.

---

## 11. count-sketch point query /kaʊnt skɛtʃ pɔɪnt ˈkwɪri/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm thao tác đọc dữ liệu để lấy ước lượng tần suất của một phần tử cụ thể (ví dụ: `answer a count-sketch point query`).

**Core meaning — English:** A retrieval operation on a Count-Sketch data structure that hashes an item across multiple rows with random signs ($\pm 1$), extracting the median of row estimates to yield an unbiased frequency estimate.

**Core meaning & mental image — Tiếng Việt:** Truy vấn điểm của Count-Sketch; hãy hình dung bạn hỏi ý kiến của 5 vị trọng tài độc lập: mỗi vị trọng tài cộng hoặc trừ ngẫu nhiên giá trị của bạn vào tài khoản của họ; khi bạn muốn biết số dư thật của mình, bạn thu thập 5 ước tính đó và lấy giá trị trung vị (median) ở chính giữa để triệt tiêu hoàn toàn mọi sự thiên lệch tích cực hay tiêu cực.

**Grammar & collocations:** `evaluate a count-sketch point query` — đánh giá một truy vấn điểm của Count-Sketch; `unbiased count-sketch point query` — truy vấn điểm Count-Sketch không chệch; `latency of a count-sketch point query` — độ trễ của một truy vấn điểm Count-Sketch.

**Register & nuance:** `randomized algorithms & linear sketches` — phân biệt với Count-Min Sketch (vốn luôn ước lượng thừa và lấy giá trị min); Count-Sketch (Charikar et al.) dùng hàm băm dấu $\pm 1$ để tạo ra ước tính không chệch (unbiased estimate) và dùng median để giảm phương sai.

**Examples:** `Executing a count-sketch point query provides an unbiased estimate of an item's frequency, with error bounded tightly by the Frobenius norm of the stream vector.` → Thực thi một truy vấn điểm của Count-Sketch mang lại một ước lượng không chệch về tần suất của một phần tử, với sai số được giới hạn chặt chẽ bởi chuẩn Frobenius của vector dòng dữ liệu.

**Liên kết tiếng Hàn:** `카운트-스케치 포인트 쿼리 / 점 질의` (Count-Sketch point query) — truy vấn điểm xác định tần suất trong cấu trúc Count-Sketch.

---

## 12. cuckoo filter eviction chain /ˈkʊkuː ˈfɪltər ɪˈvɪkʃən tʃeɪn/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường xuất hiện trong phần phân tích độ trễ và độ phức tạp khi chèn phần tử vào Cuckoo Filter (ví dụ: `trigger a cuckoo filter eviction chain`).

**Core meaning — English:** The cascading sequence of kicking existing fingerprint entries out of their current bucket slots to their alternate candidate locations to accommodate a newly inserted item.

**Core meaning & mental image — Tiếng Việt:** Chuỗi đẩy trục xuất của Cuckoo Filter; hãy hình dung tập tính loài chim cúc cu: một con chim non mới nở đẩy quả trứng của chim chủ nhà ra khỏi tổ; quả trứng đó rơi sang một chiếc tổ láng giềng, lại đẩy tiếp một con chim khác bay sang chiếc tổ tiếp theo; chuỗi đẩy dồn liên tiếp này diễn ra cho đến khi tìm được một chiếc tổ trống hoặc chạm ngưỡng tối đa thì dừng lại.

**Grammar & collocations:** `initiate a cuckoo filter eviction chain` — khởi xướng một chuỗi đẩy trục xuất của Cuckoo Filter; `length of the cuckoo filter eviction chain` — độ dài của chuỗi đẩy trục xuất Cuckoo Filter; `failure in a cuckoo filter eviction chain` — thất bại trong chuỗi đẩy trục xuất Cuckoo Filter.

**Register & nuance:** `probabilistic data structures & hashing theory` — Cuckoo Filter lưu giữ dấu vân tay băm (fingerprints) thay vì các bit đơn lẻ, hỗ trợ xóa phần tử dễ dàng; chuỗi đẩy trục xuất bị giới hạn (thường là max 500 bước) để tránh vòng lặp vô hạn khi bộ lọc đầy.

**Examples:** `High table load factors lengthen the cuckoo filter eviction chain, increasing worst-case insertion latency when relocating fingerprints across candidate buckets.` → Hệ số tải bảng cao làm kéo dài chuỗi đẩy trục xuất của Cuckoo Filter, làm tăng độ trễ chèn trong trường hợp xấu nhất khi tái định vị các dấu vân tay qua các xô ứng viên.

**Liên kết tiếng Hàn:** `뻐꾸기 필터 축출 체인 / 연쇄 밀어내기` (cuckoo filter 逐出 chain) — chuỗi trục xuất dồn chỗ trong bộ lọc cúc cu.

---

## 13. streaming quantile sketch /ˈstriːmɪŋ ˈkwɑntaɪl skɛtʃ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là cấu trúc dữ liệu phác thảo xấp xỉ các phân vị như P50, P95, P99 trong giám sát hiệu năng (ví dụ: `maintain a streaming quantile sketch`).

**Core meaning — English:** A compact data structure that processes unbounded numeric data streams in a single pass to estimate arbitrary rank quantiles (such as the 99th percentile) within provable approximation bounds.

**Core meaning & mental image — Tiếng Việt:** Phác thảo phân vị dòng dữ liệu; hãy hình dung bạn muốn biết thời gian phản hồi ở phân vị thứ 99 (P99) của hàng triệu lượt người dùng: thay vì sắp xếp lại toàn bộ hàng triệu con số (đòi hỏi lưu trữ toàn bộ dữ liệu trong RAM), bản phác thảo nén các con số thành một tập hợp các cụm trọng số nhỏ gọn, cho phép tra cứu phân vị P99 tức thì với độ sai lệch cực nhỏ.

**Grammar & collocations:** `query a streaming quantile sketch` — truy vấn một phác thảo phân vị dòng dữ liệu; `merge streaming quantile sketches` — hợp nhất các phác thảo phân vị dòng dữ liệu; `accuracy of a streaming quantile sketch` — độ chính xác của phác thảo phân vị dòng dữ liệu.

**Register & nuance:** `observability & systems metrics` — nền tảng của các thuật toán như Greenwald-Khanna (GK), DDSketch và t-digest; ứng dụng trong đo lường độ trễ SLA/SLO của vi dịch vụ.

**Examples:** `DevOps dashboards query a streaming quantile sketch to track the p99.9 latency of microservices across millions of API calls without recording raw timestamps.` → Các bảng điều khiển DevOps truy vấn một phác thảo phân vị dòng dữ liệu để theo dõi độ trễ p99.9 của các vi dịch vụ trên hàng triệu lệnh gọi API mà không cần ghi lại các mốc thời gian thô.

**Liên kết tiếng Hàn:** `스트리밍 분위수 스케치` (streaming 分位數 sketch) — bản phác thảo ước tính phân vị dòng dữ liệu.

---

## 14. geometric distribution of hash prefixes /ˌdʒiːəˈmɛtrɪk ˌdɪstrəˈbjuːʃən əv hæʃ ˈpriːfɪksɪz/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm nền tảng xác suất toán học của các thuật toán ước lượng lực lượng như Flajolet-Martin và LogLog (ví dụ: `rely on the geometric distribution of hash prefixes`).

**Core meaning — English:** The discrete probability distribution wherein the chance of observing a hash value starting with exactly $k$ consecutive zeros equals $(1/2)^{k+1}$, providing an exponential yardstick for cardinality.

**Core meaning & mental image — Tiếng Việt:** Phân phối hình học của các tiền tố băm; hãy hình dung quy luật xác suất khi tung đồng xu: xác suất tung được mặt ngửa đầu tiên ở lần thứ nhất là 1/2, ở lần thứ hai là 1/4, ở lần thứ ba là 1/8, và ở lần thứ 10 là 1/1024; quy luật phân phối hình học này bảo đảm rằng độ dài chuỗi số 0 ở đầu hàm băm tỷ lệ thuận với số lượng phần tử độc nhất đã đi qua.

**Grammar & collocations:** `exploit the geometric distribution of hash prefixes` — khai thác phân phối hình học của các tiền tố băm; `properties of the geometric distribution of hash prefixes` — các đặc tính của phân phối hình học các tiền tố băm; `governed by the geometric distribution of hash prefixes` — bị chi phối bởi phân phối hình học của tiền tố băm.

**Register & nuance:** `probabilistic combinatorics & hashing mathematics` — tiền đề lý thuyết quyết định tính hợp lệ của ước lượng HyperLogLog; phụ thuộc hoàn toàn vào giả định phân phối đều của hàm băm.

**Examples:** `The mathematical elegance of LogLog estimators rests upon the geometric distribution of hash prefixes, linking observed bit patterns directly to stream volume.` → Sự thanh lịch toán học của các bộ ước lượng LogLog dựa trên phân phối hình học của các tiền tố băm, liên kết các mẫu bit quan sát được trực tiếp với dung lượng dòng dữ liệu.

**Liên kết tiếng Hàn:** `해시 접두사의 기하분포` (hash 接頭辭의 幾何分布) — phân phối hình học của tiền tố chuỗi băm.

---

## 15. heavy-hitters stream algorithm /ˈhɛvi ˈhɪtərz striːm ˈælɡəˌrɪðəm/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm phương pháp phát hiện các phần tử chiếm tỷ trọng vượt trội trong dòng dữ liệu (ví dụ: `deploy a heavy-hitters stream algorithm`).

**Core meaning — English:** A streaming algorithmic technique designed to identify all items whose individual frequencies exceed a designated fraction (such as $\theta N$) of the total stream volume using sublinear memory.

**Core meaning & mental image — Tiếng Việt:** Thuật toán dòng dữ liệu tìm phần tử chủ chốt; hãy hình dung việc tìm kiếm các từ khóa thịnh hành nhất (trending topics) trên mạng xã hội giữa hàng tỷ dòng trạng thái mỗi phút: thuật toán không thèm nhớ những từ chỉ xuất hiện một vài lần mà chỉ duy trì một danh sách VIP nhỏ gồm những chủ đề được nhắc lại liên tục vượt qua ngưỡng quy định.

**Grammar & collocations:** `implement a heavy-hitters stream algorithm` — triển khai một thuật toán dòng dữ liệu tìm phần tử chủ chốt; `efficiency of the heavy-hitters stream algorithm` — hiệu quả của thuật toán dòng dữ liệu tìm phần tử chủ chốt; `heavy-hitters stream algorithm threshold` — ngưỡng của thuật toán dòng dữ liệu tìm phần tử chủ chốt.

**Register & nuance:** `network traffic engineering & real-time analytics` — giải quyết bài toán "băng thông voi" (elephant flows) trong định tuyến mạng hoặc phát hiện sản phẩm bán chạy nhất trong thương mại điện tử.

**Examples:** `Routers deploy a heavy-hitters stream algorithm to instantly flag distributed denial-of-service attack vectors consuming disproportionate slices of transit bandwidth.` → Các bộ định tuyến triển khai một thuật toán dòng dữ liệu tìm phần tử chủ chốt để gắn cờ ngay lập tức các vector tấn công từ chối dịch vụ phân tán tiêu tốn các phần băng thông trung chuyển lớn bất thường.

**Liên kết tiếng Hàn:** `헤비 히터 스트림 알고리즘 / 주요 원소 식별 알고리즘` (heavy hitters stream algorithm) — thuật toán xác định các phần tử có tần suất áp đảo trong luồng dữ liệu.

---

## 16. space-saving algorithm summary /speɪs ˈseɪvɪŋ ˈælɡəˌrɪðəm ˈsʌməri/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm cấu trúc dữ liệu duy trì danh sách ứng viên tần suất cao (ví dụ: `maintain a space-saving algorithm summary`).

**Core meaning — English:** The bounded-size associative list (frequently implemented via Stream-Summary) used in Metwally's Space-Saving algorithm to track candidate frequent items and their maximum possible overestimation errors.

**Core meaning & mental image — Tiếng Việt:** Bản tóm tắt thuật toán tiết kiệm không gian; hãy hình dung một chiếc bảng vàng chỉ ghi đúng 100 cái tên học sinh xuất sắc nhất: khi có một học sinh mới xuất hiện, nếu bảng chưa đầy, tên em được viết vào; nếu bảng đã kín chỗ, tên em học sinh có số điểm thấp nhất ở cuối bảng sẽ bị gạch đi và thay bằng tên học sinh mới, đồng thời ghi chú thêm sai số ước tính để không bao giờ bỏ sót nhân tài thực sự.

**Grammar & collocations:** `update the space-saving algorithm summary` — cập nhật bản tóm tắt thuật toán tiết kiệm không gian; `data structures for space-saving algorithm summary` — các cấu trúc dữ liệu cho bản tóm tắt thuật toán tiết kiệm không gian; `space-saving algorithm summary capacity` — dung lượng bản tóm tắt thuật toán tiết kiệm không gian.

**Register & nuance:** `deterministic sketch algorithms` — giải thuật của Metwally, Agrawal, và El Abbadi (2005); vượt trội hơn Count-Min Sketch ở chỗ chỉ cần một bảng băm kết hợp danh sách liên kết kép (doubly-linked list) là có thể cập nhật trong thời gian $O(1)$.

**Examples:** `By tracking items in a doubly linked Stream-Summary structure, the space-saving algorithm summary executes updates in constant time while maintaining rigorous error guarantees.` → Bằng cách theo dõi các phần tử trong một cấu trúc Stream-Summary liên kết kép, bản tóm tắt thuật toán tiết kiệm không gian thực thi các cập nhật trong thời gian hằng số trong khi vẫn duy trì các sự bảo đảm sai số nghiêm ngặt.

**Liên kết tiếng Hàn:** `공간 절약 알고리즘 요약 구조` (空間 節約 algorithm 要約 構造 / Space-Saving summary) — cấu trúc tóm tắt của thuật toán tiết kiệm không gian bộ nhớ.

---

## 17. sliding-window cardinality sketch /ˈslaɪdɪŋ ˈwɪndoʊ ˌkɑrdəˈnæləti skɛtʃ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường dùng để đếm số phần tử duy nhất trong một khoảng thời gian trượt gần nhất (ví dụ: `maintain a sliding-window cardinality sketch`).

**Core meaning — English:** A time-decayed probabilistic sketch that estimates unique items present strictly within the most recent $W$ time units or events, discarding stale historic data without storing raw timestamps.

**Core meaning & mental image — Tiếng Việt:** Phác thảo lực lượng tập hợp cửa sổ trượt; hãy hình dung một chiếc kính tiềm vọng chỉ nhìn thấy đoạn đường trong vòng 10 phút vừa qua: các sự kiện cũ hơn 10 phút tự động mờ dần và biến mất khỏi bức ảnh phác thảo; bạn luôn luôn biết chính xác có bao nhiêu người dùng duy nhất đang hoạt động trong 10 phút gần nhất mà không cần lưu lại lịch sử chi tiết của cả ngày hôm qua.

**Grammar & collocations:** `update a sliding-window cardinality sketch` — cập nhật một phác thảo lực lượng tập hợp cửa sổ trượt; `sliding-window cardinality sketch algorithms` — các thuật toán phác thảo lực lượng tập hợp cửa sổ trượt; `accuracy of sliding-window cardinality sketch` — độ chính xác của phác thảo lực lượng tập hợp cửa sổ trượt.

**Register & nuance:** `real-time analytics & temporal sketches` — giải quyết bài toán "thời gian thực" (recent activity) thay vì toàn bộ lịch sử từ trước đến nay; các biến thể như Sliding HyperLogLog hoặc WavingSketch.

**Examples:** `The telemetry system maintains a sliding-window cardinality sketch to measure active unique hosts over the past sixty minutes without retaining historical connection logs.` → Hệ thống đo từ xa duy trì một phác thảo lực lượng tập hợp cửa sổ trượt để đo lường các máy chủ duy nhất đang hoạt động trong vòng sáu mươi phút qua mà không cần lưu giữ nhật ký kết nối lịch sử.

**Liên kết tiếng Hàn:** `슬라이딩 윈도우 기수 스케치` (sliding window 基數 sketch) — bản phác thảo ước tính số phần tử duy nhất trong cửa sổ trượt thời gian.

---

## 18. false-positive error bound /fɔls ˈpɑzətɪv ˈɛrər baʊnd/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tiêu chuẩn an toàn trong thiết kế thuật toán lọc xác suất (ví dụ: `enforce a strict false-positive error bound`).

**Core meaning — English:** The mathematically established upper limit on the probability of receiving an erroneous positive assertion from a probabilistic membership query structure.

**Core meaning & mental image — Tiếng Việt:** Cận sai số dương tính giả; hãy hình dung một ranh giới cam kết an toàn: bạn lắp một hệ thống báo động chống trộm và nhà sản xuất cam kết trên giấy tờ rằng xác suất chuông báo động kêu oan do một chú mèo đi qua sẽ không bao giờ vượt quá 1 trên 10.000 trường hợp; con số trần tối đa đó chính là cận sai số dương tính giả.

**Grammar & collocations:** `satisfy the false-positive error bound` — thỏa mãn cận sai số dương tính giả; `strict false-positive error bound` — cận sai số dương tính giả nghiêm ngặt; `derive a false-positive error bound` — dẫn xuất một cận sai số dương tính giả.

**Register & nuance:** `algorithmic reliability & systems guarantees` — tiêu chí thiết kế cốt lõi trong an ninh mạng (phát hiện URL độc hại) và bộ nhớ đệm (cache filtering).

**Examples:** `System architects sized the cache membership filter to enforce a false-positive error bound of zero point zero zero one, preventing unnecessary backend lookups.` → Các kiến trúc sư hệ thống đã định cỡ bộ lọc thành viên bộ nhớ đệm để thực thi một cận sai số dương tính giả là 0,001, ngăn chặn các lần tra cứu phụ trợ không cần thiết.

**Liên kết tiếng Hàn:** `위양성 오차 상한 / 한계` (僞陽性 誤差 上限) — giới hạn trên / cận sai số dương tính giả.

---

## 19. murmurhash distribution uniformity /ˈmɜrmərhæʃ ˌdɪstrəˈbjuːʃən ˌjunəˈfɔrməti/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là đặc tính chất lượng của hàm băm phi mật mã (ví dụ: `rely on MurmurHash distribution uniformity`).

**Core meaning — English:** The statistical property of the non-cryptographic MurmurHash function ensuring that output hash digests are distributed uniformly and pseudo-randomly across the entire hash range with excellent avalanche behavior.

**Core meaning & mental image — Tiếng Việt:** Tính đồng nhất phân phối của MurmurHash; hãy hình dung việc rải một nắm cát mịn lên mặt bàn phẳng: các hạt cát rơi rải đều tăm tắp khắp mọi ngóc ngách của chiếc bàn, không hề có chỗ nào bị vón cục thành đống và cũng không có ô nào bị bỏ trống hoàn toàn; sự phân bố ngẫu nhiên hoàn hảo này bảo đảm các thanh ghi bộ nhớ nhận dữ liệu đều đặn như nhau.

**Grammar & collocations:** `leverage MurmurHash distribution uniformity` — tận dụng tính đồng nhất phân phối của MurmurHash; `validate MurmurHash distribution uniformity` — xác thực tính đồng nhất phân phối của MurmurHash; `MurmurHash distribution uniformity benchmark` — bộ chuẩn đối sánh tính đồng nhất phân phối của MurmurHash.

**Register & nuance:** `fast non-cryptographic hashing` — MurmurHash3 là tiêu chuẩn công nghiệp cho HyperLogLog và Bloom Filter; tốc độ băm nhanh gấp hàng chục lần SHA-256 trong khi vẫn vượt qua bài kiểm tra tính đồng nhất nghiêm ngặt SMHasher.

**Examples:** `HyperLogLog implementations rely upon MurmurHash distribution uniformity to prevent localized bucket clustering that could bias the harmonic mean estimate.` → Các triển khai HyperLogLog dựa vào tính đồng nhất phân phối của MurmurHash để ngăn chặn hiện tượng tụ cụm xô cục bộ vốn có thể làm sai lệch ước lượng trung bình điều hòa.

**Liên kết tiếng Hàn:** `머머해시 분포 균일성` (MurmurHash 分布 均一性) — tính đồng nhất trong phân phối đầu ra của hàm băm MurmurHash.

---

## 20. bit-array occupancy fraction /bɪt əˈreɪ ˈɑkjəpənsi ˈfrækʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chỉ số đo lường độ bão hòa của bộ lọc Bloom (ví dụ: `monitor the bit-array occupancy fraction`).

**Core meaning — English:** The proportion of bits set to logic one relative to the total length of the bit vector in a Bloom filter, directly indicating saturation and impending degradation of the false-positive rate.

**Core meaning & mental image — Tiếng Việt:** Tỷ lệ lấp đầy mảng bit; hãy hình dung một bãi đỗ xe gồm 1.000 chỗ đậu: tỷ lệ lấp đầy là tỷ lệ số ô đã có xe đỗ so với tổng số 1.000 ô; khi bãi xe đã kín 95% chỗ, khả năng một chiếc xe mới vào không tìm được chỗ trống (hoặc gây nhầm lẫn) là cực kỳ cao; theo dõi tỷ lệ này cho biết khi nào cần mở rộng bãi đỗ xe mới.

**Grammar & collocations:** `critical bit-array occupancy fraction` — tỷ lệ lấp đầy mảng bit tới hạn; `measure bit-array occupancy fraction` — đo lường tỷ lệ lấp đầy mảng bit; `optimal bit-array occupancy fraction` — tỷ lệ lấp đầy mảng bit tối ưu (thường là 50% khi đạt dung lượng thiết kế).

**Register & nuance:** `data structures monitoring & capacity planning` — theo lý thuyết xác suất, tại điểm tối ưu của Bloom filter ($k = (m/n) \ln 2$), tỷ lệ lấp đầy bit xấp xỉ đúng 50% ($0.5$).

**Examples:** `When the bit-array occupancy fraction crossed seventy percent, the system automatically initiated table resizing to avoid degrading filter discriminative capacity.` → Khi tỷ lệ lấp đầy mảng bit vượt quá bảy mươi phần trăm, hệ thống tự động khởi tạo việc định lại kích thước bảng nhằm tránh làm suy giảm năng lực phân biệt của bộ lọc.

**Liên kết tiếng Hàn:** `비트 배열 점유율` (bit 配列 占有率) — tỷ lệ chiếm dụng / lấp đầy của mảng bit.

---

## 21. t-digest centroid clustering /ˈtiː ˌdaɪdʒɛst ˈsɛntrɔɪd ˈklʌstərɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm cơ chế nén dữ liệu phân vị có độ chính xác cực cao tại hai đầu đuôi phân phối (ví dụ: `perform t-digest centroid clustering`).

**Core meaning — English:** The dynamic algorithmic merging of numeric samples into an ordered sequence of weighted centroids whose allowable sizes are scaled strictly smaller near the distribution tails, providing extreme accuracy at extreme percentiles.

**Core meaning & mental image — Tiếng Việt:** Phân cụm tâm điểm t-digest; hãy hình dung một chiếc kính lúp đa tiêu cự: ở khu vực giữa bình thường (P50), chiếc kính nhìn hơi mờ và gom nhiều người vào một nhóm lớn; nhưng ở hai rìa ngoài mép kính nơi tập trung các hiện tượng cực đoan hiếm gặp (P99, P99.9), chiếc kính phóng đại siêu nét và giữ các nhóm hạt tâm điểm cực nhỏ, giúp đo lường đuôi phân phối với độ chính xác tuyệt hảo.

**Grammar & collocations:** `dynamic t-digest centroid clustering` — phân cụm tâm điểm t-digest động; `accuracy of t-digest centroid clustering` — độ chính xác của phân cụm tâm điểm t-digest; `compress via t-digest centroid clustering` — nén thông qua phân cụm tâm điểm t-digest.

**Register & nuance:** `numerical streaming algorithms` — phát minh bởi Ted Dunning; là thuật toán chuẩn mực được tích hợp trong Elasticsearch và Prometheus để tính toán các chỉ số độ trễ SLA khắt khe.

**Examples:** `By constraining cluster sizes near the extremes, t-digest centroid clustering achieves sub-percentile accuracy for ninety-ninth and ninety-nine-point-ninth latency percentiles.` → Bằng cách hạn chế kích thước các cụm ở gần các vùng cực đoan, phân cụm tâm điểm t-digest đạt được độ chính xác dưới phân vị cho các phân vị độ trễ thứ 99 và thứ 99,9.

**Liên kết tiếng Hàn:** `t-다이제스트 센트로이드 군집화` (t-digest centroid 群集化) — phân cụm trọng tâm trong cấu trúc dữ liệu t-digest.

---

## 22. probabilistic membership query /ˌprɑbəbəˈlɪstɪk ˈmɛmbərʃɪp ˈkwɪri/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm thao tác kiểm tra sự hiện diện của một phần tử trong tập hợp với dung lượng bộ nhớ nhỏ (ví dụ: `execute a probabilistic membership query`).

**Core meaning — English:** An operation testing whether a given search key belongs to a set using an approximate data structure, returning either a definitive negative answer or a probabilistic positive answer.

**Core meaning & mental image — Tiếng Việt:** Truy vấn tư cách thành viên theo xác suất; hãy hình dung một cánh cổng kiểm soát tự động: khi quét thẻ, nếu máy báo "Không có trong danh sách", bạn chắc chắn 100% không phải thành viên (không bao giờ từ chối nhầm); nhưng nếu máy báo "Có", có một xác suất nhỏ là máy nhận diện nhầm do trùng mã băm, lúc này hệ thống mới cần lục hồ sơ gốc để kiểm tra lại.

**Grammar & collocations:** `answer a probabilistic membership query` — trả lời một truy vấn tư cách thành viên theo xác suất; `latency of probabilistic membership query` — độ trễ của truy vấn tư cách thành viên theo xác suất; `probabilistic membership query structures` — các cấu trúc truy vấn tư cách thành viên theo xác suất.

**Register & nuance:** `theoretical computer science & approximate computing` — bao gồm các cấu trúc nổi tiếng như Bloom filters, Cuckoo filters, Quotient filters và Morton filters.

**Examples:** `Before querying the distributed database cluster across the network, the client executes a local probabilistic membership query to bypass non-existent keys.` → Trước khi truy vấn cụm cơ sở dữ liệu phân tán qua mạng, máy khách thực thi một truy vấn tư cách thành viên theo xác suất cục bộ để bỏ qua các khóa không tồn tại.

**Liên kết tiếng Hàn:** `확률적 멤버십 질의` (確率的 membership 質疑) — truy vấn kiểm tra thành viên mang tính xác suất.

---

## 23. mergeable streaming sketch /ˈmɜrdʒəbəl ˈstriːmɪŋ skɛtʃ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò là tính chất kiến trúc bắt buộc cho các hệ thống tính toán phân tán như MapReduce hay Apache Spark (ví dụ: `aggregate mergeable streaming sketches`).

**Core meaning — English:** A summary data structure possessing homomorphic or algebraic properties that allow sketches computed independently on separate data partitions to be combined losslessly into a single valid sketch.

**Core meaning & mental image — Tiếng Việt:** Phác thảo dòng dữ liệu có thể hợp nhất; hãy hình dung 10 chi nhánh ngân hàng ở 10 quốc gia khác nhau cùng tóm tắt dữ liệu giao dịch vào 10 cuốn sổ tay nhỏ có cùng kích thước chuẩn; cuối ngày, người ta chỉ cần xếp chồng 10 cuốn sổ lại và cộng các trang tương ứng để tạo thành một cuốn sổ cái duy nhất phản ánh chính xác bức tranh toàn cầu mà không cần gửi dữ liệu thô về trụ sở.

**Grammar & collocations:** `combine mergeable streaming sketches` — kết hợp các phác thảo dòng dữ liệu có thể hợp nhất; `property of mergeable streaming sketches` — đặc tính của các phác thảo dòng dữ liệu có thể hợp nhất; `distributed mergeable streaming sketches` — các phác thảo dòng dữ liệu có thể hợp nhất phân tán.

**Register & nuance:** `distributed systems & parallel query engines` — tính chất toán học quan trọng (thường là một semi-group hoặc monoid); cho phép tính toán song song hoàn toàn trên hàng nghìn worker nodes mà không có độ lệch kết quả.

**Examples:** `HyperLogLog and Count-Min Sketches are inherently mergeable streaming sketches, permitting worker nodes in a distributed query engine to aggregate partial sketches in parallel.` → HyperLogLog và Count-Min Sketches vốn dĩ là các phác thảo dòng dữ liệu có thể hợp nhất, cho phép các nút thợ trong một công cụ truy vấn phân tán tổng hợp các phác thảo bộ phận một cách song song.

**Liên kết tiếng Hàn:** `병합 가능한 스트리밍 스케치` (倂合 可能한 streaming sketch) — bản phác thảo luồng dữ liệu có khả năng sáp nhập / hợp nhất.

---

## 24. hash function independence assumption /hæʃ ˈfʌŋkʃən ˌɪndɪˈpɛndəns əˈsʌmpʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm giả định lý thuyết cần được kiểm chứng khi phân tích độ tin cậy của thuật toán băm (ví dụ: `rely on the hash function independence assumption`).

**Core meaning — English:** The mathematical premise in randomized algorithmic proofs asserting that multiple hash functions produce outputs that are statistically mutually independent and uncorrelated.

**Core meaning & mental image — Tiếng Việt:** Giả định tính độc lập của các hàm băm; hãy hình dung việc tung 5 con xúc xắc khác nhau cùng một lúc: bạn giả định rằng kết quả của con xúc xắc này hoàn toàn không có mối liên hệ hay bị ảnh hưởng bởi kết quả của 4 con xúc xắc còn lại; nếu các con xúc xắc bị dính dây vô hình với nhau (các hàm băm bị tương quan), mọi công thức tính xác suất trước đó sẽ sụp đổ.

**Grammar & collocations:** `validity of the hash function independence assumption` — tính hợp lệ của giả định tính độc lập của các hàm băm; `violate the hash function independence assumption` — vi phạm giả định tính độc lập của các hàm băm; `under the hash function independence assumption` — dưới giả định tính độc lập của các hàm băm.

**Register & nuance:** `theoretical computer science & probabilistic proofs` — trong thực tế, các lập trình viên thường dùng kỹ thuật băm kép của Kirsch-Mitzenmacher ($h_i(x) = h_1(x) + i \cdot h_2(x)$) để mô phỏng tính độc lập mà không cần tạo ra $k$ hàm băm riêng biệt.

**Examples:** `Theoretical error bounds for Bloom filters hold strictly under the hash function independence assumption, which can be approximated practically via double hashing techniques.` → Các cận sai số lý thuyết cho Bloom filter được giữ vững nghiêm ngặt dưới giả định tính độc lập của các hàm băm, điều này có thể được xấp xỉ trong thực tế thông qua các kỹ thuật băm kép.

**Liên kết tiếng Hàn:** `해시 함수 독립성 가정` (hash 函數 獨立性 假定) — giả định về tính độc lập của các hàm băm.

---

## 25. sketch estimation variance reduction /skɛtʃ ˌɛstəˈmeɪʃən ˈvɛriəns rɪˈdʌkʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm mục tiêu tối ưu hóa thống kê trong thiết kế các bộ ước lượng dòng dữ liệu (ví dụ: `achieve sketch estimation variance reduction`).

**Core meaning — English:** Algorithmic strategies (such as register averaging, bias correction, and median-of-means pooling) that decrease the statistical variance of sketched estimators, tightening confidence intervals.

**Core meaning & mental image — Tiếng Việt:** Giảm phương sai ước tính của phác thảo; hãy hình dung một xạ thủ bắn súng: thay vì các phát bắn tản mát rộng khắp tấm bia (phương sai lớn), người xạ thủ điều chỉnh kính ngắm và giữ vững báng súng để tất cả các viên đạn chụm lại sát nút trong một vòng tròn nhỏ quanh hồng tâm; kết quả ước lượng trở nên ổn định và đáng tin cậy hơn qua từng lần đo.

**Grammar & collocations:** `techniques for sketch estimation variance reduction` — các kỹ thuật giảm phương sai ước tính của phác thảo; `achieve sketch estimation variance reduction` — đạt được sự giảm phương sai ước tính của phác thảo; `impact of sketch estimation variance reduction` — tác động của việc giảm phương sai ước tính phác thảo.

**Register & nuance:** `statistical data analysis & estimator theory` — ví dụ tiêu biểu là cải tiến HyperLogLog++ của Google sử dụng các bảng hiệu chỉnh thực nghiệm để triệt tiêu độ lệch và phương sai ở vùng lực lượng tập hợp nhỏ.

**Examples:** `Applying empirical bias correction tables achieves significant sketch estimation variance reduction when counting sets with low cardinality in HyperLogLog++.` → Việc áp dụng các bảng hiệu chỉnh độ lệch thực nghiệm đạt được sự giảm phương sai ước tính của phác thảo đáng kể khi đếm các tập hợp có lực lượng nhỏ trong HyperLogLog++.

**Liên kết tiếng Hàn:** `스케치 추정 분산 감소` (sketch 推定 分散 減少) — giảm phương sai trong phép ước tính của bản phác thảo.

---

## Review in context (Part 1: Cardinality Estimation, Sketch Bounds, and Sublinear Streaming)

When architecting real-time analytical engines capable of ingesting millions of events per second, computing exact metrics quickly exhausts memory reserves. Instead, distributed platforms implement **sublinear cardinality estimation** to track distinct visitors across unbounded clickstreams in logarithmic space. A foundational building block of this approach is **hyperloglog register counting**, which hashes stream keys into separate buckets and tracks extreme bit observations. Inside each register, processors execute rapid **leading-zero bit counting** using dedicated assembly instructions, deriving statistical estimates from observed prefix lengths. The accuracy of all hash-based structures remains fundamentally constrained by the **hash collision probability**, which dictates how frequently unrelated keys produce colliding index fingerprints. In streaming systems, engineers monitor set memberships with a calibrated **bloom filter false-positive ratio**, keeping disk read amplifications negligible. When records must occasionally be retracted from compact quotient filters, the insertion of a **quotient filter tombstone** preserves probing sequence continuity without invalidating existing entries. As an alternative dynamic filter, high load factors can precipitate a cascading **cuckoo filter eviction chain**, moving displaced fingerprints through successive alternate buckets. For continuous traffic tracking, distributed stream engines implement **probabilistic frequency estimation** to profile network anomalies without buffering bulky raw event payloads. For basic frequency estimation, systems turn to the Count-Min Sketch, relying upon the mathematical certainty of the **count-min sketch overestimation bound** to guarantee that frequency lookups never underestimate true occurrence. When unbiased estimates are required, engineers evaluate a **count-sketch point query**, which leverages median pooling over random signs to cancel out overestimation noise. Deterministic counting algorithms further satisfy an explicit **stream summary error guarantee**, assuring users that estimated counts will never drift arbitrarily from ground truth. Furthermore, when generating unbiased random audit samples from continuous logs, practitioners depend upon **reservoir sampling invariance** to ensure that every historical item maintains an identical probability of retention.

**Bản dịch tiếng Việt:**

Khi kiến trúc các công cụ phân tích thời gian thực có khả năng tiếp nhận hàng triệu sự kiện mỗi giây, việc tính toán các chỉ số chính xác sẽ nhanh chóng làm cạn kiệt nguồn dự trữ bộ nhớ. Thay vào đó, các nền tảng phân tán triển khai **ước lượng lực lượng tập hợp cận tuyến tính** để theo dõi số khách truy cập duy nhất trên các luồng nhấp chuột vô hạn trong không gian logarit. Một khối xây dựng nền tảng của cách tiếp cận này là **đếm thanh ghi HyperLogLog**, giúp băm các khóa dòng dữ liệu vào các xô riêng biệt và theo dõi các quan sát bit cực đoan. Bên trong mỗi thanh ghi, các bộ xử lý thực thi thao tác **đếm số bit 0 ở đầu** nhanh chóng bằng cách sử dụng các lệnh hợp ngữ chuyên dụng, dẫn xuất các ước lượng thống kê từ các độ dài tiền tố quan sát được. Độ chính xác của mọi cấu trúc dựa trên băm về căn bản vẫn bị ràng buộc bởi **xác suất va chạm băm**, điều này chi phối tần suất các khóa không liên quan tạo ra các dấu vân tay chỉ mục va chạm nhau. Trong các hệ thống dòng, các kỹ sư giám sát tư cách thành viên tập hợp với một **tỷ lệ dương tính giả của Bloom Filter** được hiệu chuẩn, giữ cho sự khuếch đại đọc đĩa ở mức không đáng kể. Khi các bản ghi thỉnh thoảng phải được rút lại từ các bộ lọc thương số gọn nhẹ, việc chèn một **bia mộ của bộ lọc thương số** giúp bảo tồn tính liên tục của chuỗi dò tìm mà không làm mất hiệu lực của các mục hiện có. Như một giải pháp bộ lọc động thay thế, hệ số tải cao có thể dẫn đến một **chuỗi đẩy trục xuất của Cuckoo Filter** dồn dập, di chuyển các dấu vân tay bị chiếm chỗ qua các xô ứng viên kế tiếp. Để theo dõi lưu lượng liên tục, các công cụ dòng phân tán triển khai **ước lượng tần suất theo xác suất** để lập hồ sơ các bất thường mạng mà không cần lưu đệm các tải trọng sự kiện thô cồng kềnh. Đối với việc ước lượng tần suất cơ bản, các hệ thống chuyển sang Count-Min Sketch, dựa vào sự chắc chắn toán học của **cận trên ước tính quá mức của Count-Min Sketch** để bảo đảm rằng việc tra cứu tần suất không bao giờ đánh giá thấp sự xuất hiện thực tế. Khi cần các ước lượng không chệch, các kỹ sư đánh giá một **truy vấn điểm của Count-Sketch**, tận dụng việc gộp trung vị trên các dấu ngẫu nhiên để triệt tiêu nhiễu ước lượng vượt mức. Các thuật toán đếm tất định còn thỏa mãn một **sự bảo đảm sai số của bản tóm tắt dòng dữ liệu** rõ ràng, bảo đảm với người dùng rằng số đếm ước tính sẽ không bao giờ trôi dạt tùy tiện khỏi sự thật thực tế. Hơn nữa, khi tạo các mẫu kiểm toán ngẫu nhiên không chệch từ các nhật ký liên tục, các học viên dựa vào **tính bất biến trong lấy mẫu hồ chứa** để bảo đảm rằng mọi phần tử lịch sử đều duy trì một xác suất lưu giữ giống hệt nhau.

---

## Review in context (Part 2: Probabilistic Querying, Quantiles, and Distributed Merging)

Building responsive telemetry systems demands balancing processing throughput against strict statistical precision. For tracking service-level percentiles such as p99 response times, teams deploy a **streaming quantile sketch**, providing immediate rank approximations across billions of telemetry samples. When extreme accuracy is demanded at the distribution edges, engines turn to **t-digest centroid clustering**, compressing samples into variable-width centroids that narrow sharply near distribution tails. The mathematical validity of LogLog estimators rests upon the **geometric distribution of hash prefixes**, linking observed bit patterns directly to stream volume. To protect these estimates from systematic bias, engineers rely upon **murmurhash distribution uniformity**, ensuring that keys scatter uniformly without localized clustering. Parallel detection of high-volume network flows relies upon a dedicated **heavy-hitters stream algorithm**, flagging denial-of-service traffic at wire speed. A deterministic alternative is provided by the **space-saving algorithm summary**, which tracks frequent keys within an associative doubly linked structure with strict accuracy boundaries. In temporal pipelines, calculating distinct visitor trends requires maintaining a **sliding-window cardinality sketch**, which smoothly ages out outdated items while retaining recent activity. To protect downstream storage layers from excessive query amplifications, applications run a rapid **probabilistic membership query** against local filters before touching physical disks. To maintain operational safety in mission-critical filters, system administrators enforce a provable **false-positive error bound**, ensuring that accidental false triggers remain below critical thresholds. Throughout query execution, analytical backends monitor the **bit-array occupancy fraction**, triggering automatic resizing routines before saturated arrays compromise filtering efficiency. Across distributed worker nodes, massive parallel efficiency is unlocked because sketches belong to the family of the **mergeable streaming sketch**, permitting local digests to be unified without loss of accuracy. In proving these behavioral properties, theoretical bounds rely strictly upon the **hash function independence assumption**, postulating that distinct hash outputs remain statistically uncorrelated. Finally, combining algorithmic corrections with empirical calibrations drives ongoing **sketch estimation variance reduction**, allowing engineers to extract precise analytical insights from compact memory footprints.

**Bản dịch tiếng Việt:**

Xây dựng các hệ thống đo từ xa có độ phản hồi cao đòi hỏi phải cân bằng thông lượng xử lý với độ chính xác thống kê nghiêm ngặt. Để theo dõi các phân vị cấp độ dịch vụ như thời gian phản hồi p99, các nhóm triển khai một **phác thảo phân vị dòng dữ liệu**, cung cấp các phép xấp xỉ thứ hạng tức thì trên hàng tỷ mẫu đo từ xa. Khi đòi hỏi độ chính xác cực độ tại các rìa phân phối, các công cụ chuyển sang **phân cụm tâm điểm t-digest**, nén các mẫu thành các tâm điểm có độ rộng thay đổi thu hẹp mạnh mẽ ở gần các đuôi phân phối. Tính hợp lệ toán học của các bộ ước lượng LogLog dựa trên **phân phối hình học của các tiền tố băm**, liên kết các mẫu bit quan sát được trực tiếp với dung lượng dòng dữ liệu. Để bảo vệ các ước lượng này khỏi độ chệch hệ thống, các kỹ sư dựa vào **tính đồng nhất phân phối của MurmurHash**, bảo đảm rằng các khóa phân tán đồng đều mà không bị tụ cụm cục bộ. Việc phát hiện song song các luồng mạng khối lượng lớn dựa vào một **thuật toán dòng dữ liệu tìm phần tử chủ chốt** chuyên dụng, gắn cờ lưu lượng từ chối dịch vụ ở tốc độ đường truyền. Một giải pháp thay thế tất định được cung cấp bởi **bản tóm tắt thuật toán tiết kiệm không gian**, theo dõi các khóa thường xuyên bên trong một cấu trúc liên kết kép kết hợp với các ranh giới độ chính xác nghiêm ngặt. Trong các quy trình thời gian, việc tính toán xu hướng khách truy cập duy nhất đòi hỏi phải duy trì một **phác thảo lực lượng tập hợp cửa sổ trượt**, giúp loại bỏ mượt mà các phần tử lỗi thời trong khi vẫn giữ lại hoạt động gần đây. Để bảo vệ các tầng lưu trữ hạ nguồn khỏi các đợt khuếch đại truy vấn quá mức, các ứng dụng chạy một **truy vấn tư cách thành viên theo xác suất** nhanh chóng đối với các bộ lọc cục bộ trước khi chạm vào các đĩa vật lý. Để duy trì tính an toàn vận hành trong các bộ lọc quan trọng, các quản trị viên hệ thống thực thi một **cận sai số dương tính giả** có thể chứng minh được, bảo đảm rằng các kích hoạt sai ngẫu nhiên luôn ở dưới các ngưỡng tới hạn. Trong suốt quá trình thực thi truy vấn, các phần phụ trợ phân tích giám sát **tỷ lệ lấp đầy mảng bit**, kích hoạt các quy trình định lại kích thước tự động trước khi các mảng bão hòa làm tổn hại hiệu quả lọc. Trên khắp các nút thợ phân tán, hiệu quả song song khổng lồ được khai mở vì các bản phác thảo thuộc về họ **phác thảo dòng dữ liệu có thể hợp nhất**, cho phép các bản tóm tắt cục bộ được thống nhất mà không làm mất độ chính xác. Trong việc chứng minh các đặc tính hành vi này, các cận lý thuyết dựa nghiêm ngặt vào **giả định tính độc lập của các hàm băm**, giả định rằng các đầu ra băm riêng biệt vẫn không tương quan về mặt thống kê. Cuối cùng, việc kết hợp các hiệu chỉnh thuật toán với các hiệu chuẩn thực nghiệm thúc đẩy **sự giảm phương sai ước tính của phác thảo** liên tục, cho phép các kỹ sư trích xuất những hiểu biết phân tích chính xác từ những dấu chân bộ nhớ nhỏ gọn.
