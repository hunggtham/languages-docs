# C2 Vocabulary — Digital signal processing and filtering

This lesson explores the mathematics and architectural mechanisms behind processing continuous physical phenomena as discrete digital values, focusing on spectral analysis, filter design, and system dynamics.

Flow: **digital signal processor → discrete Fourier transform → fast Fourier transform → finite impulse response → infinite impulse response → Nyquist frequency → anti-aliasing filter → low-pass filter → high-pass filter → band-pass filter → cutoff frequency → phase shift → impulse response → decimation → interpolation → spectral leakage → window function → group delay → dynamic range → moving average → transfer function → zero-padding → linear time-invariant → z-transform → cross-correlation**.

## 1. digital signal processor /ˈdɪdʒɪtl ˈsɪɡnəl ˈprɑːsesər/
**Part of speech:** noun
**Core meaning (English):** a specialized microprocessor optimized for the operational needs of digital signal processing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ vi xử lý tín hiệu số, chip chuyên dụng tính toán phép toán tín hiệu.
**Grammar & collocations:** `digital-signal-processor pipeline` — đường ống.
**Examples:** `The digital signal processor executed the audio filtering loop in a single clock cycle.` → DSP thực thi vòng lặp lọc âm thanh chỉ trong một chu kỳ xung nhịp.
**Liên kết tiếng Hàn:** `디지털 신호 프로세서`.

## 2. discrete Fourier transform /dɪˈskriːt ˈfʊrieɪ ˈtrænsfɔːrm/
**Part of speech:** noun
**Core meaning (English):** a mathematical transformation that converts a sequence of equally spaced samples into the frequency domain.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến đổi Fourier rời rạc, phân tích tín hiệu mẫu thành các thành phần tần số.
**Grammar & collocations:** `discrete-Fourier-transform algorithm` — thuật toán.
**Examples:** `Computing the discrete Fourier transform directly is computationally expensive for large datasets.` → Tính toán biến đổi Fourier rời rạc trực tiếp rất tốn kém tài nguyên với tập dữ liệu lớn.
**Liên kết tiếng Hàn:** `이산 푸리에 변환`.

## 3. fast Fourier transform /fæst ˈfʊrieɪ ˈtrænsfɔːrm/
**Part of speech:** noun
**Core meaning (English):** an efficient algorithm used to compute the discrete Fourier transform and its inverse.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thuật toán biến đổi Fourier nhanh, tối ưu hóa việc tính toán phổ tần số.
**Grammar & collocations:** `fast-Fourier-transform library` — thư viện.
**Examples:** `The audio analyzer applies a fast Fourier transform to visualize the frequency spectrum in real-time.` → Trình phân tích âm thanh áp dụng thuật toán biến đổi Fourier nhanh để trực quan hóa phổ tần số theo thời gian thực.
**Liên kết tiếng Hàn:** `고속 푸리에 변환`.

## 4. finite impulse response /ˈfaɪnaɪt ˈɪmpʌls rɪˈspɑːns/
**Part of speech:** noun
**Core meaning (English):** a filter whose impulse response settles to zero in finite time, often providing linear phase.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đáp ứng xung hữu hạn, bộ lọc ổn định có pha tuyến tính.
**Grammar & collocations:** `finite-impulse-response filter` — bộ lọc.
**Examples:** `They implemented a finite impulse response design to ensure there was no phase distortion in the audio.` → Họ triển khai thiết kế đáp ứng xung hữu hạn để đảm bảo không bị méo pha trong âm thanh.
**Liên kết tiếng Hàn:** `유한 임펄스 응답`.

## 5. infinite impulse response /ˈɪnfɪnət ˈɪmpʌls rɪˈspɑːns/
**Part of speech:** noun
**Core meaning (English):** a filter whose impulse response continues indefinitely, using feedback from previous outputs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đáp ứng xung vô hạn, bộ lọc có phản hồi từ ngõ ra.
**Grammar & collocations:** `infinite-impulse-response filter` — bộ lọc.
**Examples:** `The infinite impulse response filter required less memory but introduced some phase non-linearity.` → Bộ lọc đáp ứng xung vô hạn yêu cầu ít bộ nhớ hơn nhưng gây ra một số phi tuyến tính về pha.
**Liên kết tiếng Hàn:** `무한 임펄스 응답`.

## 6. Nyquist frequency /ˈnaɪkwɪst ˈfriːkwənsi/
**Part of speech:** noun
**Core meaning (English):** the minimum rate at which a signal can be sampled without introducing errors, equal to twice the highest frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tần số Nyquist, ngưỡng tần số lấy mẫu để tránh biến dạng tín hiệu.
**Grammar & collocations:** `Nyquist-frequency limit` — giới hạn.
**Examples:** `To capture human speech accurately, the sample rate must be well above the Nyquist frequency of the highest vocal pitch.` → Để ghi âm giọng nói con người chính xác, tốc độ lấy mẫu phải lớn hơn nhiều giới hạn tần số Nyquist của âm cao nhất.
**Liên kết tiếng Hàn:** `나이퀴스트 주파수`.

## 7. anti-aliasing filter /ˌænti ˈeɪliəsɪŋ ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a filter applied before signal sampling to restrict the bandwidth and prevent aliasing artifacts.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ lọc chống răng cưa/chống méo tín hiệu, cắt các tần số cao trước khi lấy mẫu.
**Grammar & collocations:** `hardware anti-aliasing filter` — bộ lọc phần cứng.
**Examples:** `An analog anti-aliasing filter was placed before the ADC to block high-frequency noise.` → Một bộ lọc chống răng cưa tương tự được đặt trước ADC để chặn nhiễu tần số cao.
**Liên kết tiếng Hàn:** `안티 앨리어싱 필터`.

## 8. low-pass filter /loʊ pæs ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a filter that passes signals with a frequency lower than a selected cutoff and attenuates higher frequencies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ lọc thông thấp, chỉ cho tín hiệu tần số thấp đi qua.
**Grammar & collocations:** `low-pass-filter implementation` — cách triển khai.
**Examples:** `We used a low-pass filter to remove the high-frequency static from the sensor readings.` → Chúng tôi dùng bộ lọc thông thấp để loại bỏ nhiễu nhiễu tĩnh tần số cao từ cảm biến.
**Liên kết tiếng Hàn:** `저역 통과 필터`.

## 9. high-pass filter /haɪ pæs ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a filter that passes signals with a frequency higher than a selected cutoff and attenuates lower frequencies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ lọc thông cao, chỉ cho tín hiệu tần số cao đi qua.
**Grammar & collocations:** `apply a high-pass filter` — áp dụng.
**Examples:** `The engineer added a high-pass filter to eliminate the low-frequency mechanical rumble from the microphone.` → Kỹ sư đã thêm bộ lọc thông cao để loại bỏ tiếng ồn cơ học tần số thấp từ micro.
**Liên kết tiếng Hàn:** `고역 통과 필터`.

## 10. band-pass filter /bænd pæs ˈfɪltər/
**Part of speech:** noun
**Core meaning (English):** a device that passes frequencies within a certain range and rejects frequencies outside that range.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ lọc dải thông, cho phép một khoảng tần số cụ thể đi qua.
**Grammar & collocations:** `band-pass-filter configuration` — cấu hình.
**Examples:** `The radio receiver relies on a strict band-pass filter to isolate the target station's broadcast frequency.` → Bộ thu vô tuyến dựa vào bộ lọc dải thông nghiêm ngặt để cách ly tần số phát sóng của đài mục tiêu.
**Liên kết tiếng Hàn:** `대역 통과 필터`.

## 11. cutoff frequency /ˈkʌtɔːf ˈfriːkwənsi/
**Part of speech:** noun
**Core meaning (English):** the boundary in a system's frequency response at which energy flowing through begins to be reduced.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tần số cắt, điểm mà tại đó biên độ tín hiệu bị suy giảm mạnh.
**Grammar & collocations:** `adjust the cutoff frequency` — điều chỉnh.
**Examples:** `Setting the cutoff frequency too low will muffle the audio signal.` → Việc đặt tần số cắt quá thấp sẽ làm bóp nghẹt tín hiệu âm thanh.
**Liên kết tiếng Hàn:** `차단 주파수`.

## 12. phase shift /feɪz ʃɪft/
**Part of speech:** noun
**Core meaning (English):** the change in the phase of a signal as it passes through a filter or system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ lệch pha, sự thay đổi góc pha khi tín hiệu đi qua hệ thống.
**Grammar & collocations:** `linear phase shift` — lệch pha tuyến tính.
**Examples:** `The active noise cancellation works by introducing an exact 180-degree phase shift to the incoming sound wave.` → Chống ồn chủ động hoạt động bằng cách tạo ra độ lệch pha chính xác 180 độ so với sóng âm tới.
**Liên kết tiếng Hàn:** `위상 천이`.

## 13. impulse response /ˈɪmpʌls rɪˈspɑːns/
**Part of speech:** noun
**Core meaning (English):** the reaction of a dynamic system in response to a brief input signal or impulse.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đáp ứng xung, tín hiệu đầu ra khi đầu vào là một xung kích chuẩn.
**Grammar & collocations:** `measure the impulse response` — đo.
**Examples:** `By analyzing the room's impulse response, the software can digitally recreate its specific reverb characteristics.` → Bằng cách phân tích đáp ứng xung của phòng, phần mềm có thể tái tạo kỹ thuật số các đặc điểm vang cụ thể của nó.
**Liên kết tiếng Hàn:** `임펄스 응답`.

## 14. decimation /ˌdesɪˈmeɪʃn/
**Part of speech:** noun
**Core meaning (English):** the process of reducing the sampling rate of a signal, typically by keeping every N-th sample.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm tốc độ lấy mẫu, kỹ thuật bỏ bớt mẫu để giảm dữ liệu.
**Grammar & collocations:** `signal decimation` — sự suy giảm.
**Examples:** `After applying the low-pass filter, decimation was used to lower the data rate for transmission.` → Sau khi áp dụng bộ lọc thông thấp, việc giảm tốc độ lấy mẫu được dùng để giảm tốc độ dữ liệu truyền đi.
**Liên kết tiếng Hàn:** `데시메이션 (샘플링 속도 감소)`.

## 15. interpolation /ɪnˌtɜːrpəˈleɪʃn/
**Part of speech:** noun
**Core meaning (English):** the process of increasing the sampling rate of a signal by inserting zero-valued samples and filtering.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nội suy / tăng tốc độ lấy mẫu, chèn thêm mẫu vào tín hiệu số.
**Grammar & collocations:** `polynomial interpolation` — nội suy đa thức.
**Examples:** `The audio upscaler relies on interpolation to reconstruct missing samples when converting from 44.1kHz to 96kHz.` → Trình nâng cấp âm thanh dựa vào nội suy để tái tạo các mẫu bị thiếu khi chuyển đổi từ 44.1kHz lên 96kHz.
**Liên kết tiếng Hàn:** `보간`.

## 16. spectral leakage /ˈspektrəl ˈliːkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** the effect where energy from a signal component spreads into adjacent frequencies due to finite observation time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rò rỉ phổ, sự phân tán năng lượng tần số do giới hạn thời gian quan sát.
**Grammar & collocations:** `minimize spectral leakage` — giảm thiểu.
**Examples:** `The engineer noticed severe spectral leakage because the sample block did not contain an integer number of wave cycles.` → Kỹ sư nhận thấy rò rỉ phổ nghiêm trọng vì khối lấy mẫu không chứa một số nguyên chu kỳ sóng.
**Liên kết tiếng Hàn:** `스펙트럼 누출`.

## 17. window function /ˈwɪndoʊ ˈfʌŋkʃn/
**Part of speech:** noun
**Core meaning (English):** a mathematical function that is zero-valued outside of some chosen interval, used to reduce spectral leakage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm cửa sổ, hàm dùng để mượt hóa hai đầu của một đoạn tín hiệu.
**Grammar & collocations:** `apply a window function` — áp dụng.
**Examples:** `Applying a Hanning window function before the FFT greatly improved the clarity of the spectral peaks.` → Việc áp dụng hàm cửa sổ Hanning trước FFT đã cải thiện đáng kể độ rõ của các đỉnh phổ.
**Liên kết tiếng Hàn:** `창 함수`.

## 18. group delay /ɡruːp dɪˈleɪ/
**Part of speech:** noun
**Core meaning (English):** the time delay of the amplitude envelopes of the various sinusoidal components of a signal through a device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trễ nhóm, độ trễ thời gian của các thành phần tần số khác nhau.
**Grammar & collocations:** `constant group delay` — trễ nhóm không đổi.
**Examples:** `A linear phase filter is preferred in audio processing because it maintains a constant group delay across all frequencies.` → Bộ lọc pha tuyến tính được ưa chuộng trong xử lý âm thanh vì nó duy trì trễ nhóm không đổi trên mọi tần số.
**Liên kết tiếng Hàn:** `군 지연`.

## 19. dynamic range /daɪˈnæmɪk reɪndʒ/
**Part of speech:** noun
**Core meaning (English):** the ratio between the largest and smallest values of a changeable quantity, such as in an audio signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dải động, tỷ lệ giữa giá trị tín hiệu lớn nhất và nhỏ nhất.
**Grammar & collocations:** `compress the dynamic range` — nén.
**Examples:** `The 24-bit ADC offers a vastly superior dynamic range compared to older 16-bit converters.` → ADC 24-bit cung cấp dải động vượt trội hơn rất nhiều so với các bộ chuyển đổi 16-bit cũ.
**Liên kết tiếng Hàn:** `동적 범위`.

## 20. moving average /ˈmuːvɪŋ ˈævərɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a calculation to analyze data points by creating a series of averages of different subsets of the full data set.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trung bình động, phép lọc san bằng nhiễu bằng cách lấy trung bình các mẫu lân cận.
**Grammar & collocations:** `moving-average filter` — bộ lọc.
**Examples:** `A simple moving average was sufficient to smooth out the jittery temperature sensor data.` → Một thuật toán trung bình động đơn giản là đủ để làm mượt dữ liệu cảm biến nhiệt độ bị nhiễu.
**Liên kết tiếng Hàn:** `이동 평균`.

## 21. transfer function /ˈtrænsfɜːr ˈfʌŋkʃn/
**Part of speech:** noun
**Core meaning (English):** a mathematical representation of the relation between the input and output of a linear time-invariant system.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm truyền, biểu thức toán học mô tả quan hệ vào-ra của hệ thống.
**Grammar & collocations:** `derive the transfer function` — rút ra.
**Examples:** `By plotting the transfer function, we could easily see where the system would resonate and become unstable.` → Bằng cách vẽ đồ thị hàm truyền, chúng tôi có thể dễ dàng thấy hệ thống sẽ cộng hưởng và trở nên không ổn định ở đâu.
**Liên kết tiếng Hàn:** `전달 함수`.

## 22. zero-padding /ˈzɪroʊ ˈpædɪŋ/
**Part of speech:** noun
**Core meaning (English):** the practice of appending zeros to a signal before computing its Fourier transform to increase spectral resolution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chèn số không, thêm mẫu giá trị không để tăng độ phân giải phổ.
**Grammar & collocations:** `zero-padding technique` — kỹ thuật.
**Examples:** `Using zero-padding artificially lengthened the signal, yielding a much smoother frequency plot after the FFT.` → Sử dụng kỹ thuật chèn số không làm dài tín hiệu một cách nhân tạo, mang lại đồ thị tần số mượt mà hơn nhiều sau FFT.
**Liên kết tiếng Hàn:** `제로 패딩`.

## 23. linear time-invariant /ˈlɪniər taɪm ɪnˈveriənt/
**Part of speech:** noun
**Core meaning (English):** a system property where the relationship between the input and output does not depend on when the input is applied.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ thống tuyến tính bất biến theo thời gian, tính chất cơ bản trong xử lý tín hiệu.
**Grammar & collocations:** `linear time-invariant system` — hệ thống.
**Examples:** `Most classical DSP theory assumes the system is strictly linear time-invariant for equations to hold true.` → Hầu hết lý thuyết DSP cổ điển đều giả định hệ thống hoàn toàn là tuyến tính bất biến theo thời gian để các phương trình đúng.
**Liên kết tiếng Hàn:** `선형 시불변`.

## 24. z-transform /zi ˈtrænsfɔːrm/
**Part of speech:** noun
**Core meaning (English):** a mathematical tool that converts a discrete-time signal into a complex frequency-domain representation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến đổi Z, công cụ toán học chuyển tín hiệu rời rạc sang miền tần số phức.
**Grammar & collocations:** `compute the z-transform` — tính toán.
**Examples:** `The z-transform makes it possible to analyze the stability of discrete feedback loops mathematically.` → Biến đổi Z giúp phân tích toán học độ ổn định của các vòng phản hồi rời rạc.
**Liên kết tiếng Hàn:** `Z 변환`.

## 25. cross-correlation /krɔːs ˌkɔːrəˈleɪʃn/
**Part of speech:** noun
**Core meaning (English):** a measure of similarity of two series as a function of the displacement of one relative to the other.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tương quan chéo, thước đo sự giống nhau giữa hai tín hiệu có độ trễ.
**Grammar & collocations:** `calculate cross-correlation` — tính toán.
**Examples:** `Radar systems use cross-correlation to compare the transmitted pulse against the received echo to determine target distance.` → Hệ thống radar dùng tương quan chéo để so sánh xung truyền đi với tiếng vang dội lại nhằm xác định khoảng cách mục tiêu.
**Liên kết tiếng Hàn:** `상호 상관`.

## Review in contex

Modern radar and audio equipment heavily rely on the **digital signal processor** to run complex mathematics in real time. For frequency analysis, engineers rarely compute the full **discrete Fourier transform** directly; instead, the highly optimized **fast Fourier transform** is deployed to instantly identify spectral components. To clean up noisy inputs, systems often cascade a **finite impulse response** filter—prized for its constant **group delay** and lack of phase distortion—with an **infinite impulse response** filter, which uses feedback for steeper frequency cutoffs at the expense of potential instability.

Before physical signals even reach the analog-to-digital converter, they must pass through an **anti-aliasing filter** to scrub any frequencies exceeding the **Nyquist frequency**, preventing false signals from folding back into the baseband. Once digitized, a **low-pass filter** might strip away high-frequency hiss, while a **high-pass filter** blocks low-end rumble. A dedicated **band-pass filter** with a strict **cutoff frequency** is then applied to isolate the specific channel of interest, all while engineers carefully monitor any unwanted **phase shift**.

Analyzing a system's true behavior often requires measuring its **impulse response**. When engineers adjust data rates, **decimation** lowers the sample rate by discarding points, while **interpolation** raises it by guessing values between existing samples. To mitigate the **spectral leakage** that occurs when chopping continuous signals into finite blocks, a mathematical **window function** fades the edges of the data chunk. Extending the block size with **zero-padding** before the transform artificially boosts the display resolution, making the spectral plots easier to read over the system's entire **dynamic range**.

To model these digital operations mathematically, engineers assume the components form a **linear time-invariant** system, allowing them to map inputs to outputs via a clear **transfer function**. For discrete signals, the **z-transform** maps time-domain samples into a complex frequency domain, revealing exactly where feedback loops might spin out of control. Meanwhile, in the time domain, operations range from a simple **moving average** to smooth out jitter, all the way to complex **cross-correlation**, which compares returning echoes against original pulses to pinpoint a target's exact distance.

### Bản dịch tham khảo

Các thiết bị radar và âm thanh hiện đại phụ thuộc rất nhiều vào **bộ vi xử lý tín hiệu số (digital signal processor)** để chạy các phép toán phức tạp trong thời gian thực. Để phân tích tần số, các kỹ sư hiếm khi tính toán toàn bộ **biến đổi Fourier rời rạc (discrete Fourier transform)** một cách trực tiếp; thay vào đó, **thuật toán biến đổi Fourier nhanh (fast Fourier transform)** được tối ưu hóa cao được triển khai để nhận dạng ngay lập tức các thành phần phổ. Để dọn dẹp các đầu vào bị nhiễu, các hệ thống thường nối tiếp một bộ lọc **đáp ứng xung hữu hạn (finite impulse response)**—được đánh giá cao nhờ **trễ nhóm (group delay)** không đổi và không bị méo pha—với một bộ lọc **đáp ứng xung vô hạn (infinite impulse response)**, sử dụng phản hồi để cắt tần số dốc hơn nhưng bù lại có thể gây ra mất ổn định.

Trước khi các tín hiệu vật lý chạm tới bộ chuyển đổi tương tự-sang-số, chúng phải đi qua một **bộ lọc chống răng cưa (anti-aliasing filter)** để loại bỏ bất kỳ tần số nào vượt quá **tần số Nyquist (Nyquist frequency)**, ngăn chặn các tín hiệu giả gập lại vào dải tần cơ sở. Sau khi được số hóa, một **bộ lọc thông thấp (low-pass filter)** có thể tước bỏ tiếng rít tần số cao, trong khi một **bộ lọc thông cao (high-pass filter)** chặn tiếng ầm ầm ở dải thấp. Một **bộ lọc dải thông (band-pass filter)** chuyên dụng với **tần số cắt (cutoff frequency)** nghiêm ngặt sau đó được áp dụng để cách ly kênh quan tâm cụ thể, trong khi tất cả các kỹ sư theo dõi cẩn thận bất kỳ **độ lệch pha (phase shift)** không mong muốn nào.

Việc phân tích hành vi thực sự của một hệ thống thường đòi hỏi phải đo **đáp ứng xung (impulse response)** của nó. Khi các kỹ sư điều chỉnh tốc độ dữ liệu, **giảm tốc độ lấy mẫu (decimation)** làm giảm tốc độ mẫu bằng cách loại bỏ bớt các điểm, trong khi **nội suy (interpolation)** làm tăng tốc độ bằng cách phỏng đoán các giá trị giữa các mẫu hiện có. Để giảm bớt **rò rỉ phổ (spectral leakage)** xảy ra khi cắt các tín hiệu liên tục thành các khối hữu hạn, một **hàm cửa sổ (window function)** toán học làm mờ các cạnh của khối dữ liệu. Việc mở rộng kích thước khối bằng **chèn số không (zero-padding)** trước khi biến đổi làm tăng độ phân giải hiển thị một cách nhân tạo, giúp các đồ thị phổ dễ đọc hơn trên toàn bộ **dải động (dynamic range)** của hệ thống.

Để lập mô hình các hoạt động kỹ thuật số này về mặt toán học, các kỹ sư giả định rằng các thành phần tạo thành một **hệ thống tuyến tính bất biến theo thời gian (linear time-invariant)**, cho phép họ ánh xạ đầu vào với đầu ra thông qua một **hàm truyền (transfer function)** rõ ràng. Đối với các tín hiệu rời rạc, **biến đổi Z (z-transform)** ánh xạ các mẫu trong miền thời gian sang miền tần số phức, tiết lộ chính xác nơi các vòng lặp phản hồi có thể vượt khỏi tầm kiểm soát. Trong khi đó, ở miền thời gian, các hoạt động trải dài từ một **trung bình động (moving average)** đơn giản để làm mượt sự dao động, cho đến **tương quan chéo (cross-correlation)** phức tạp, so sánh các tiếng vang dội lại với các xung gốc để xác định chính xác khoảng cách của một mục tiêu.
