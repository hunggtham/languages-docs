# C2 Vocabulary — Data compression and encoding

This lesson follows how systems represent repeated, numeric, and structured data more compactly while preserving the fidelity and decoding guarantees an application requires.

Flow: **entropy coding → Huffman coding → arithmetic coding → run-length encoding → delta encoding → dictionary encoding → columnar storage → compression ratio → decompression → codec → block compression → bit packing → lossless compression → lossy compression → encoding density → frame of reference → transcoding → adaptive coding → canonical code → compression window**.

## 1. entropy coding /ˈɛntəpi ˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** a coding method that assigns shorter representations to more probable symbols and longer ones to less probable symbols.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã hóa entropy; hình dung symbol thường gặp được cấp mã ngắn để giảm số bit trung bình.
**Grammar & collocations:** `statistical entropy coding` — mã hóa entropy thống kê; `entropy-coding stage` — bước mã hóa entropy; `apply entropy coding` — áp dụng mã hóa entropy.
**Examples:** `Entropy coding removed the remaining statistical redundancy after the image transform.` → Mã hóa entropy loại bỏ phần dư thừa thống kê còn lại sau phép biến đổi ảnh.
**Liên kết tiếng Hàn:** `엔트로피 부호화` (enteuropi buhohwa) — mã hóa entropy.

## 2. Huffman coding /ˈhʌfmən ˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** a prefix-code method that builds a binary tree to give the most frequent symbols the shortest codewords.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã hóa Huffman; hình dung cây nhị phân đặt symbol hay gặp gần gốc để đường mã ngắn hơn.
**Grammar & collocations:** `Huffman tree` — cây Huffman; `Huffman codebook` — bảng mã Huffman; `build a Huffman code` — xây mã Huffman.
**Examples:** `The encoder rebuilt its Huffman tree when the symbol frequencies changed substantially.` → Bộ mã hóa xây lại cây Huffman khi tần số symbol thay đổi đáng kể.
**Liên kết tiếng Hàn:** `허프만 부호화` (heopeuman buhohwa) — mã hóa Huffman.

## 3. arithmetic coding /ˌærɪθˈmɛtɪk ˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** an entropy-coding method that represents an entire symbol sequence as a progressively narrowed numerical interval.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã hóa số học; hình dung cả chuỗi được co vào một khoảng số ngày càng hẹp thay vì tách thành mã nguyên symbol.
**Grammar & collocations:** `binary arithmetic coding` — mã hóa số học nhị phân; `arithmetic coder` — bộ mã hóa số học; `renormalize the interval` — chuẩn hóa lại khoảng.
**Examples:** `Arithmetic coding achieved a smaller file than the fixed codebook at the same probability model.` → Arithmetic coding tạo file nhỏ hơn codebook cố định với cùng mô hình xác suất.
**Liên kết tiếng Hàn:** `산술 부호화` (sansul buhohwa) — mã hóa số học.

## 4. run-length encoding /ˈrʌn lɛŋθ ɪnˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** a method that replaces a consecutive run of identical symbols with the symbol and its repetition count.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã hóa độ dài chuỗi; thay mười ký tự giống nhau bằng một ký tự kèm số lần lặp.
**Grammar & collocations:** `run-length encoded bitmap` — bitmap mã hóa chuỗi; `run-length pair` — cặp symbol–độ dài; `apply run-length encoding` — áp dụng RLE.
**Examples:** `Run-length encoding worked well because the mask contained long stretches of the same pixel value.` → Run-length encoding hiệu quả vì mask chứa những dải dài cùng giá trị pixel.
**Liên kết tiếng Hàn:** `런 길이 부호화` (reon giri buhohwa) — mã hóa độ dài chuỗi.

## 5. delta encoding /ˈdɛltə ɪnˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** a method that stores changes between successive values instead of storing every full value independently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã hóa sai phân; lưu mức chênh lệch giữa các giá trị gần nhau để con số nhỏ hơn và dễ nén hơn.
**Grammar & collocations:** `delta-encoded sequence` — chuỗi mã hóa sai phân; `first-value anchor` — giá trị neo đầu tiên; `encode deltas` — mã hóa sai phân.
**Examples:** `Delta encoding made the monotonically increasing timestamps much more compact.` → Delta encoding làm các timestamp tăng đều nhỏ gọn hơn nhiều.
**Liên kết tiếng Hàn:** `델타 부호화` (delta buhohwa) — mã hóa sai phân.

## 6. dictionary encoding /ˈdɪkʃəˌnɛri ɪnˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** a method that replaces repeated values with short references to a shared table of distinct values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã hóa từ điển; lưu mỗi nhãn dài một lần rồi dùng index ngắn cho những lần lặp.
**Grammar & collocations:** `dictionary-encoded column` — cột mã hóa từ điển; `dictionary page` — trang từ điển; `build a dictionary` — xây từ điển.
**Examples:** `Dictionary encoding reduced the memory footprint of the country column with only a few hundred distinct values.` → Dictionary encoding giảm footprint bộ nhớ của cột quốc gia chỉ có vài trăm giá trị khác nhau.
**Liên kết tiếng Hàn:** `사전 부호화` (sajeon buhohwa) — mã hóa từ điển.

## 7. columnar storage /kəˈlʌmnər ˈstɔrɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a storage layout that keeps values from the same table column together rather than interleaving complete rows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lưu trữ dạng cột; dữ liệu cùng trường nằm cạnh nhau nên dễ nén và chỉ đọc cột cần thiết.
**Grammar & collocations:** `columnar-storage format` — định dạng lưu dạng cột; `columnar scan` — quét dạng cột; `column-oriented file` — file hướng cột.
**Examples:** `Columnar storage made dictionary encoding and predicate-free projection efficient for the analytical query.` → Columnar storage làm dictionary encoding và việc chỉ chọn cột hiệu quả cho truy vấn phân tích.
**Liên kết tiếng Hàn:** `컬럼형 저장소` (keolleomhyeong jeojangso) — lưu trữ dạng cột.

## 8. compression ratio /kəmˈprɛʃən ˈreɪʃioʊ/
**Part of speech:** noun
**Core meaning (English):** the size of the original data divided by the size of its compressed representation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ nén; ratio càng lớn nghĩa là cùng lượng thông tin được chứa trong file nén càng nhỏ.
**Grammar & collocations:** `high compression ratio` — tỷ lệ nén cao; `compression-ratio estimate` — ước tính tỷ lệ nén; `improve the ratio` — cải thiện tỷ lệ.
**Examples:** `The new format delivered a higher compression ratio without slowing random access beyond the service budget.` → Định dạng mới cho tỷ lệ nén cao hơn mà không làm truy cập ngẫu nhiên chậm quá ngân sách service.
**Liên kết tiếng Hàn:** `압축률` (apchungnyul) — tỷ lệ nén.

## 9. decompression /ˌdiːkəmˈprɛʃən/
**Part of speech:** noun
**Core meaning (English):** the process of reconstructing usable data from a compressed representation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giải nén; khôi phục stream hoặc file về dạng ứng dụng có thể đọc sau khi truyền hay lưu trữ.
**Grammar & collocations:** `hardware decompression` — giải nén phần cứng; `decompression cost` — chi phí giải nén; `streaming decompression` — giải nén streaming.
**Examples:** `Hardware decompression kept the storage controller from consuming CPU cycles on every read.` → Giải nén phần cứng giúp storage controller không tiêu tốn chu kỳ CPU ở mỗi lần đọc.
**Liên kết tiếng Hàn:** `압축 해제` (apchung haeje) — giải nén.

## 10. codec /ˈkoʊdɛk/
**Part of speech:** noun
**Core meaning (English):** a software or hardware component that encodes and decodes a particular data format.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** codec; hình dung một cặp bộ máy chịu trách nhiệm biến dữ liệu sang dạng nén và đưa nó trở lại.
**Grammar & collocations:** `video codec` — codec video; `codec profile` — profile codec; `select a codec` — chọn codec.
**Examples:** `The client negotiated a codec that both endpoints could decode in real time.` → Client thương lượng một codec mà cả hai endpoint đều có thể giải mã theo thời gian thực.
**Liên kết tiếng Hàn:** `코덱` (kodek) — codec.

## 11. block compression /blɑk kəmˈprɛʃən/
**Part of speech:** noun
**Core meaning (English):** compression that divides a stream into independently encoded blocks for bounded memory use or localized access.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nén theo block; chia dữ liệu thành khối để có thể giải nén một phần mà không cần đọc cả file.
**Grammar & collocations:** `independent block compression` — nén block độc lập; `block-compression header` — header nén block; `compress a block` — nén một block.
**Examples:** `Block compression let the query engine fetch one stripe without decompressing the entire table.` → Block compression cho phép query engine lấy một stripe mà không giải nén cả bảng.
**Liên kết tiếng Hàn:** `블록 압축` (beullok apchuk) — nén theo block.

## 12. bit packing /bɪt ˈpækɪŋ/
**Part of speech:** noun
**Core meaning (English):** the practice of placing fixed-width values into the smallest available sequence of bits instead of using a full machine word for each value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đóng gói bit; xếp nhiều giá trị nhỏ sát nhau trong byte/word để không lãng phí bit trống.
**Grammar & collocations:** `bit-packed representation` — biểu diễn đóng gói bit; `pack fields into bits` — đóng field vào bit; `bit-packing routine` — routine đóng gói.
**Examples:** `Bit packing stored thousands of Boolean flags in a fraction of the space used by separate integers.` → Bit packing lưu hàng nghìn cờ Boolean trong một phần nhỏ không gian so với integer riêng.
**Liên kết tiếng Hàn:** `비트 패킹` (biteu paeking) — đóng gói bit.

## 13. lossless compression /ˈlɔsləs kəmˈprɛʃən/
**Part of speech:** noun
**Core meaning (English):** compression from which the original data can be recovered exactly, bit for bit or value for value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nén không mất dữ liệu; giải nén xong phải khôi phục đúng từng bit, phù hợp code, database và archive.
**Grammar & collocations:** `lossless-compression algorithm` — thuật toán nén không mất; `lossless archive` — archive không mất; `guarantee lossless recovery` — bảo đảm khôi phục nguyên vẹn.
**Examples:** `The scientific archive required lossless compression because a one-bit change could alter the measurement.` → Archive khoa học yêu cầu lossless compression vì thay đổi một bit có thể làm đổi phép đo.
**Liên kết tiếng Hàn:** `무손실 압축` (musonsil apchuk) — nén không mất dữ liệu.

## 14. lossy compression /ˈlɔsi kəmˈprɛʃən/
**Part of speech:** noun
**Core meaning (English):** compression that discards information judged less important in exchange for a smaller representation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nén mất dữ liệu; bỏ phần ít nhận thấy để file nhỏ hơn, đổi lại bản khôi phục không hoàn toàn giống bản gốc.
**Grammar & collocations:** `lossy-compression artifact` — tạo tác do nén mất; `lossy image format` — định dạng ảnh mất dữ liệu; `control lossy quality` — điều chỉnh chất lượng lossy.
**Examples:** `Lossy compression was acceptable for the preview thumbnail but not for the archival master.` → Lossy compression chấp nhận được cho ảnh xem trước nhưng không cho bản master lưu trữ.
**Liên kết tiếng Hàn:** `손실 압축` (sonsil apchuk) — nén mất dữ liệu.

## 15. encoding density /ɪnˈkoʊdɪŋ ˈdɛnsəti/
**Part of speech:** noun
**Core meaning (English):** the amount of information represented per unit of encoded storage or transmission space.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mật độ mã hóa; cùng một số bit chứa được bao nhiêu giá trị hoặc bao nhiêu thông tin hữu ích.
**Grammar & collocations:** `high encoding density` — mật độ mã hóa cao; `encoding-density trade-off` — đánh đổi mật độ mã hóa; `increase encoded density` — tăng mật độ.
**Examples:** `Bit packing increased encoding density but made field updates more expensive.` → Bit packing tăng encoding density nhưng làm cập nhật từng field tốn kém hơn.
**Liên kết tiếng Hàn:** `인코딩 밀도` (inkoding mildo) — mật độ mã hóa.

## 16. frame of reference /freɪm əv ˈrɛfərəns/
**Part of speech:** noun
**Core meaning (English):** a stored baseline value used so that nearby values can be encoded as small offsets from it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mốc tham chiếu; lưu một giá trị nền rồi biểu diễn các giá trị còn lại bằng khoảng cách nhỏ so với mốc.
**Grammar & collocations:** `frame-of-reference encoding` — mã hóa theo mốc; `choose a reference frame` — chọn mốc tham chiếu; `offset from the frame` — độ lệch so với mốc.
**Examples:** `The column used a frame of reference for each page because sensor readings stayed within a narrow range.` → Cột dùng một frame of reference cho mỗi page vì số đo cảm biến nằm trong khoảng hẹp.
**Liên kết tiếng Hàn:** `기준 프레임` (gijun peureim) — mốc tham chiếu.

## 17. transcoding /trænsˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** converting data from one encoded format or codec into another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển mã; giải mã dạng này rồi mã hóa lại sang dạng khác để phù hợp thiết bị hoặc giao thức đích.
**Grammar & collocations:** `real-time transcoding` — chuyển mã thời gian thực; `transcoding pipeline` — pipeline chuyển mã; `avoid unnecessary transcoding` — tránh chuyển mã không cần.
**Examples:** `The media gateway performed transcoding only when the receiver lacked the source codec.` → Media gateway chỉ transcoding khi receiver không có codec nguồn.
**Liên kết tiếng Hàn:** `트랜스코딩` (teuraenseukoding) — chuyển mã.

## 18. adaptive coding /əˈdæptɪv ˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** coding that updates its model or code structure as it observes the data being encoded.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã hóa thích nghi; bộ mã theo dõi stream rồi thay đổi model khi phân bố symbol thay đổi.
**Grammar & collocations:** `adaptive arithmetic coding` — arithmetic coding thích nghi; `adaptive code model` — model mã thích nghi; `update adaptively` — cập nhật thích nghi.
**Examples:** `Adaptive coding recovered compression efficiency when the document changed from prose to tabular data.` → Adaptive coding khôi phục hiệu quả nén khi tài liệu chuyển từ văn xuôi sang dữ liệu bảng.
**Liên kết tiếng Hàn:** `적응형 부호화` (jeogeunghyeong buhohwa) — mã hóa thích nghi.

## 19. canonical code /kəˈnɑnɪkəl koʊd/
**Part of speech:** noun
**Core meaning (English):** a compact representation of a prefix code in which codewords are derived from their lengths and symbol order.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã chuẩn tắc; chỉ cần lưu độ dài và thứ tự symbol để bên giải mã dựng lại toàn bộ codebook.
**Grammar & collocations:** `canonical Huffman code` — mã Huffman chuẩn tắc; `canonical-code table` — bảng mã chuẩn tắc; `reconstruct a canonical code` — dựng lại mã.
**Examples:** `A canonical code made the compressed header smaller because it did not store every bit pattern explicitly.` → Canonical code làm header nén nhỏ hơn vì không phải lưu rõ từng mẫu bit.
**Liên kết tiếng Hàn:** `정규 부호` (jeonggyu buho) — mã chuẩn tắc.

## 20. compression window /kəmˈprɛʃən ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** the bounded region of recent or nearby data that a compressor can inspect for repeated patterns.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cửa sổ nén; compressor chỉ nhìn một vùng dữ liệu gần để tìm chuỗi lặp, đổi lại dùng ít bộ nhớ hơn.
**Grammar & collocations:** `sliding compression window` — cửa sổ nén trượt; `window size` — kích thước cửa sổ; `expand the compression window` — mở rộng cửa sổ.
**Examples:** `A larger compression window found longer matches but increased memory use and latency.` → Compression window lớn tìm được match dài hơn nhưng tăng mức dùng bộ nhớ và độ trễ.
**Liên kết tiếng Hàn:** `압축 윈도우` (apchuk windou) — cửa sổ nén.

## Review in context

A storage format may begin with **columnar storage**, then use **delta encoding**, **dictionary encoding**, and **frame of reference** values to make each page compact. **Run-length encoding** handles repeated symbols, while **bit packing** raises **encoding density**. An **entropy coding** stage can choose **Huffman coding**, **arithmetic coding**, or an **adaptive coding** model; a **canonical code** keeps the resulting header small. **Block compression** limits memory use and makes partial **decompression** practical. The chosen **codec**, **compression window**, and **compression ratio** determine the balance between speed and size. **Lossless compression** preserves every value, whereas **lossy compression** discards information that a human or application may tolerate. A service may perform **transcoding** when a client needs another format, but each conversion adds work.

**Bản dịch tiếng Việt:**

Một định dạng lưu trữ có thể bắt đầu bằng columnar storage, sau đó dùng delta encoding, dictionary encoding và các giá trị frame of reference để làm từng page gọn hơn. Run-length encoding xử lý symbol lặp, còn bit packing tăng encoding density. Bước entropy coding có thể chọn Huffman coding, arithmetic coding hoặc model adaptive coding; canonical code giữ header kết quả nhỏ. Block compression giới hạn mức dùng bộ nhớ và làm cho việc decompression từng phần khả thi. Codec, compression window và compression ratio được chọn sẽ quyết định sự cân bằng giữa tốc độ và kích thước. Lossless compression giữ nguyên mọi giá trị, trong khi lossy compression loại bỏ thông tin mà con người hoặc ứng dụng có thể chấp nhận. Service có thể thực hiện transcoding khi client cần định dạng khác, nhưng mỗi lần chuyển đổi đều thêm công việc.
