# C2 Vocabulary — Data encoding and transfer efficiency

This lesson follows a payload from representation and framing through compression, integrity checks, streaming decode, and controlled transfer.

Flow: **content encoding → dictionary compression → columnar encoding → frame header → chunk boundary → checksum footer → integrity tag → decompression bomb → transfer window → retransmission budget → adaptive compression → codec negotiation → payload budget → wire overhead → streaming decoder → truncation marker → compression dictionary → block framing → content length → range request**.

## 1. content encoding /ˈkɒntent enˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** the representation and transformation used to serialize a payload for storage or transmission.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dạng biểu diễn và biến đổi dùng để serialize payload khi lưu/truyền.
**Grammar & collocations:** `content-encoding header` — header; `decode a compressed body` — giải mã.
**Examples:** `The content encoding told the receiver to decompress the body before parsing JSON.` → Encoding cho receiver biết phải giải nén trước parse JSON.
**Liên kết tiếng Hàn:** `콘텐츠 인코딩`.

## 2. dictionary compression /ˈdɪkʃəneri kəmˈpreʃən/
**Part of speech:** noun
**Core meaning (English):** reducing data size by replacing repeated strings or patterns with shorter references to a shared dictionary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm size bằng cách thay pattern lặp bằng reference ngắn tới dictionary chung.
**Grammar & collocations:** `dictionary-compression table` — bảng; `reuse a frequent token` — tái sử dụng.
**Examples:** `Dictionary compression made repeated field names inexpensive in the event stream.` → Compression làm field name lặp rẻ hơn.
**Liên kết tiếng Hàn:** `사전 압축`.

## 3. columnar encoding /kəˈlʌmnər enˈkoʊdɪŋ/
**Part of speech:** noun
**Core meaning (English):** storing values from the same column together so similar types and patterns compress efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lưu value cùng column cạnh nhau để type/pattern tương tự nén tốt.
**Grammar & collocations:** `columnar-encoding layout` — layout; `encode a numeric column` — mã hóa.
**Examples:** `Columnar encoding compressed the timestamp column more effectively than a row-by-row layout.` → Encoding column nén timestamp tốt hơn theo row.
**Liên kết tiếng Hàn:** `열 지향 인코딩`.

## 4. frame header /freɪm ˈhedər/
**Part of speech:** noun
**Core meaning (English):** metadata at the start of a framed payload describing length, type, version, or decoding requirements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata đầu frame nêu length, type, version hoặc yêu cầu decode.
**Grammar & collocations:** `frame-header parser` — parser; `read a payload length` — đọc.
**Examples:** `The frame header identified the codec before the receiver allocated a decode buffer.` → Header nêu codec trước khi cấp buffer.
**Liên kết tiếng Hàn:** `프레임 헤더`.

## 5. chunk boundary /tʃʌŋk ˈbaʊndəri/
**Part of speech:** noun
**Core meaning (English):** a defined split between adjacent pieces of a larger payload or stream.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới chia các mảnh liền nhau của payload/stream lớn.
**Grammar & collocations:** `chunk-boundary marker` — marker; `resume at a clean split` — tiếp tục.
**Examples:** `The chunk boundary aligned with record boundaries so a failed transfer could resume safely.` → Boundary căn theo record để resume an toàn.
**Liên kết tiếng Hàn:** `청크 경계`.

## 6. checksum footer /ˈtʃeksʌm ˈfʊtər/
**Part of speech:** noun
**Core meaning (English):** a trailing value used to detect corruption in the preceding frame or chunk.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value ở cuối dùng phát hiện corruption của frame/chunk trước đó.
**Grammar & collocations:** `checksum-footer validation` — validation; `reject a damaged chunk` — từ chối.
**Examples:** `The checksum footer exposed a damaged block before it reached the storage engine.` → Footer phát hiện block hỏng trước storage.
**Liên kết tiếng Hàn:** `체크섬 푸터`.

## 7. integrity tag /ɪnˈteɡrəti tæɡ/
**Part of speech:** noun
**Core meaning (English):** an authenticated value proving that protected content was not altered by an unauthorized party.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** value xác thực chứng minh content bảo vệ không bị sửa trái phép.
**Grammar & collocations:** `integrity-tag verification` — xác minh; `authenticate ciphertext` — xác thực.
**Examples:** `The integrity tag failed after one byte of the encrypted payload was changed.` → Tag fail sau khi một byte đổi.
**Liên kết tiếng Hàn:** `무결성 태그`.

## 8. decompression bomb /ˌdiːkəmˈpreʃən bɒm/
**Part of speech:** noun
**Core meaning (English):** a compact input that expands into an unexpectedly huge amount of data and exhausts resources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** input nén nhỏ nhưng bung thành data cực lớn làm cạn resource.
**Grammar & collocations:** `decompression-bomb defense` — phòng vệ; `cap expanded size` — giới hạn.
**Examples:** `The decompression bomb defense stopped an archive from allocating terabytes of memory.` → Defense chặn archive cấp terabyte memory.
**Liên kết tiếng Hàn:** `압축 폭탄`.

## 9. transfer window /ˈtrænsfər ˈwɪndoʊ/
**Part of speech:** noun
**Core meaning (English):** a bounded interval in which a transfer may send, retry, or acknowledge data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng giới hạn để transfer gửi, retry hoặc acknowledge data.
**Grammar & collocations:** `transfer-window expiry` — hết hạn; `complete an upload within the window` — hoàn tất.
**Examples:** `The transfer window closed before the slow satellite link could send the final chunk.` → Window đóng trước khi link gửi chunk cuối.
**Liên kết tiếng Hàn:** `전송 창`.

## 10. retransmission budget /ˌriːtrænzˈmɪʃən ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** a limit on extra sends allowed after loss, corruption, or missing acknowledgment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giới hạn số lần gửi thêm sau loss, corruption hoặc thiếu ack.
**Grammar & collocations:** `retransmission-budget exhaustion` — cạn; `retry a missing segment` — retry.
**Examples:** `The retransmission budget prevented a failing link from consuming the entire batch schedule.` → Budget ngăn link lỗi chiếm lịch batch.
**Liên kết tiếng Hàn:** `재전송 예산`.

## 11. adaptive compression /əˈdæptɪv kəmˈpreʃən/
**Part of speech:** noun
**Core meaning (English):** changing the compression method or level in response to data characteristics, CPU cost, or network conditions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi method/level nén theo data, CPU hoặc điều kiện network.
**Grammar & collocations:** `adaptive-compression policy` — policy; `trade CPU for bandwidth` — đánh đổi.
**Examples:** `Adaptive compression used a stronger level when the network narrowed and CPU was available.` → Compression tăng level khi network hẹp.
**Liên kết tiếng Hàn:** `적응형 압축`.

## 12. codec negotiation /ˈkoʊdek nɪˌɡoʊʃiˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** an exchange in which endpoints agree on a codec and its parameters before sending data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trao đổi để endpoint thống nhất codec và parameter trước khi gửi.
**Grammar & collocations:** `codec-negotiation handshake` — handshake; `select a mutually supported codec` — chọn.
**Examples:** `Codec negotiation selected a hardware decoder available on both devices.` → Negotiation chọn decoder phần cứng hai thiết bị cùng có.
**Liên kết tiếng Hàn:** `코덱 협상`.

## 13. payload budget /ˈpeɪloʊd ˈbʌdʒɪt/
**Part of speech:** noun
**Core meaning (English):** the maximum size or cost a message may consume within a protocol or resource plan.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** size hoặc cost tối đa message được phép dùng trong protocol/resource plan.
**Grammar & collocations:** `payload-budget check` — kiểm tra; `reject an oversized message` — từ chối.
**Examples:** `The payload budget forced the service to move verbose diagnostics into a separate object.` → Budget buộc diagnostics dài sang object riêng.
**Liên kết tiếng Hàn:** `페이로드 예산`.

## 14. wire overhead /waɪər ˈoʊvərhed/
**Part of speech:** noun
**Core meaning (English):** bytes transmitted for framing, metadata, checks, or protocol control beyond the useful payload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** byte truyền cho frame, metadata, check và control ngoài payload hữu ích.
**Grammar & collocations:** `wire-overhead ratio` — tỷ lệ; `reduce per-message headers` — giảm.
**Examples:** `Wire overhead dominated the transfer because thousands of tiny messages carried identical headers.` → Overhead chiếm transfer vì message nhỏ lặp header.
**Liên kết tiếng Hàn:** `전송 오버헤드`.

## 15. streaming decoder /ˈstriːmɪŋ diːˈkoʊdər/
**Part of speech:** noun
**Core meaning (English):** a decoder that processes arriving data incrementally without waiting for the complete payload.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** decoder xử lý data từng phần khi đến, không chờ payload đầy đủ.
**Grammar & collocations:** `streaming-decoder buffer` — buffer; `emit a record incrementally` — phát.
**Examples:** `The streaming decoder began indexing records before the archive finished downloading.` → Decoder bắt đầu index trước khi tải xong.
**Liên kết tiếng Hàn:** `스트리밍 디코더`.

## 16. truncation marker /trʌŋˈkeɪʃən ˈmɑːrkər/
**Part of speech:** noun
**Core meaning (English):** an explicit indicator that content was intentionally shortened or cut off before completion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** marker cho biết content bị rút ngắn hoặc cắt trước khi hoàn tất.
**Grammar & collocations:** `truncation-marker field` — field; `distinguish partial content` — phân biệt.
**Examples:** `The truncation marker told the reader that the diagnostic text was incomplete rather than empty.` → Marker cho biết text thiếu, không phải rỗng.
**Liên kết tiếng Hàn:** `잘림 표식`.

## 17. compression dictionary /kəmˈpreʃən ˈdɪkʃəneri/
**Part of speech:** noun
**Core meaning (English):** a shared collection of patterns used by an encoder and decoder to represent repeated content compactly.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** collection pattern chung để encoder/decoder biểu diễn content lặp gọn.
**Grammar & collocations:** `compression-dictionary version` — version; `train a domain dictionary` — huấn luyện.
**Examples:** `The compression dictionary was trained on log phrases common to the service's traffic.` → Dictionary train từ phrase log phổ biến.
**Liên kết tiếng Hàn:** `압축 사전`.

## 18. block framing /blɒk ˈfreɪmɪŋ/
**Part of speech:** noun
**Core meaning (English):** dividing a stream into independently identifiable blocks for transport, validation, or parallel processing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chia stream thành block độc lập để transport, validate hoặc xử lý song song.
**Grammar & collocations:** `block-framing scheme` — scheme; `decode one block independently` — giải mã.
**Examples:** `Block framing allowed damaged segments to be retried without replaying the entire object.` → Framing cho retry segment hỏng riêng.
**Liên kết tiếng Hàn:** `블록 프레이밍`.

## 19. content length /ˈkɒntent leŋθ/
**Part of speech:** noun
**Core meaning (English):** the declared size of a payload so a receiver knows how much content to read.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kích thước khai báo để receiver biết cần đọc bao nhiêu content.
**Grammar & collocations:** `content-length header` — header; `validate the declared size` — xác thực.
**Examples:** `The receiver rejected the message when content length exceeded the negotiated limit.` → Receiver từ chối khi length vượt limit.
**Liên kết tiếng Hàn:** `콘텐츠 길이`.

## 20. range request /reɪndʒ rɪˈkwest/
**Part of speech:** noun
**Core meaning (English):** a request for a specific byte or record interval instead of the complete object.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** request chỉ lấy khoảng byte/record cụ thể thay vì toàn object.
**Grammar & collocations:** `range-request header` — header; `resume a partial download` — tiếp tục.
**Examples:** `The range request resumed the upload from the last verified chunk.` → Request tiếp tục từ chunk đã verify cuối.
**Liên kết tiếng Hàn:** `범위 요청`.

## Review in context

**Content encoding** chooses a representation; **dictionary compression** and **columnar encoding** reduce size. A **frame header**, **chunk boundary**, **checksum footer**, and **integrity tag** make transfer explicit, while a **decompression bomb** defense limits expansion. A **transfer window** and **retransmission budget** control retries; **adaptive compression** and **codec negotiation** match conditions. A **payload budget** exposes **wire overhead**, a **streaming decoder** handles partial input, and a **truncation marker** makes loss visible. A **compression dictionary** and **block framing** support efficient recovery, **content length** states expected size, and a **range request** resumes only the needed interval.

**Bản dịch tiếng Việt:** **Content encoding** chọn dạng biểu diễn; **dictionary compression** và **columnar encoding** giảm size. **Frame header**, **chunk boundary**, **checksum footer** và **integrity tag** làm rõ transfer, còn defense **decompression bomb** giới hạn việc bung dữ liệu. **Transfer window** và **retransmission budget** kiểm soát retry; **adaptive compression** và **codec negotiation** thích ứng điều kiện. **Payload budget** cho thấy **wire overhead**, **streaming decoder** xử lý input từng phần, còn **truncation marker** làm lộ thiếu dữ liệu. **Compression dictionary** và **block framing** hỗ trợ recovery, **content length** nêu size kỳ vọng, và **range request** chỉ tải lại khoảng cần thiết.
