# C2 Vocabulary 101 — Satellite communications and radio networks

This lesson follows a signal from a ground station to orbit and back. It connects coding, antennas, propagation, timing, and the practical limits of reliable wireless links.

Flow: **modulation → demodulation → latency → uplink → downlink → multiplexing → spread spectrum → antenna gain → beamforming → Doppler shift → link budget → attenuation → polarization → ground station → low Earth orbit → medium Earth orbit → handover → telecommand → telemetry link → error correction**.

## 1. modulation /ˌmɑdʒəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of varying a carrier signal so it can encode information.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều chế; hình ảnh thông tin làm thay đổi sóng mang để truyền đi xa.
**Grammar & collocations:** `digital modulation` — điều chế số; `modulation scheme` — sơ đồ điều chế.
**Examples:** `The modem selected a modulation scheme that matched the channel conditions.` → Modem chọn sơ đồ điều chế phù hợp với điều kiện kênh.
**Liên kết tiếng Hàn:** `변조` (byeonjo) — điều chế.

## 2. demodulation /diːˌmɑdʒəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of extracting encoded information from a received carrier signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giải điều chế; hình ảnh máy thu tách thông tin ra khỏi sóng mang.
**Grammar & collocations:** `coherent demodulation` — giải điều chế đồng bộ; `demodulation circuit` — mạch giải điều chế.
**Examples:** `Demodulation recovered the audio after the signal crossed the noisy channel.` → Giải điều chế khôi phục âm thanh sau khi tín hiệu đi qua kênh nhiễu.
**Liên kết tiếng Hàn:** `복조` (bokjo) — giải điều chế.

## 3. latency /ˈleɪtənsi/
**Part of speech:** noun
**Core meaning (English):** the delay between sending information and receiving or responding to it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ trễ; hình ảnh tín hiệu phải mất thời gian đi qua khoảng cách trước khi phản hồi.
**Grammar & collocations:** `通信 latency` — độ trễ truyền thông; `low-latency link` — liên kết độ trễ thấp.
**Examples:** `High latency made real-time control difficult across the satellite link.` → Độ trễ cao làm điều khiển thời gian thực khó khăn qua liên kết vệ tinh.
**Liên kết tiếng Hàn:** `지연 시간` (jiyeon sigan) — thời gian trễ.

## 4. uplink /ˈʌpˌlɪŋk/
**Part of speech:** noun
**Core meaning (English):** a communication path carrying signals from a ground station or lower network node to a satellite or higher node.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường lên; hình ảnh tín hiệu đi từ mặt đất hướng lên vệ tinh.
**Grammar & collocations:** `satellite uplink` — đường lên vệ tinh; `uplink frequency` — tần số đường lên.
**Examples:** `The operator encrypted the uplink before sending the command sequence.` → Người vận hành mã hóa đường lên trước khi gửi chuỗi lệnh.
**Liên kết tiếng Hàn:** `상향 링크` (sanghyang ringkeu) — đường lên.

## 5. downlink /ˈdaʊnˌlɪŋk/
**Part of speech:** noun
**Core meaning (English):** a communication path carrying signals from a satellite or higher network node to a ground receiver.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường xuống; hình ảnh dữ liệu từ vệ tinh truyền về trạm mặt đất.
**Grammar & collocations:** `high-rate downlink` — đường xuống tốc độ cao; `downlink antenna` — ăng-ten đường xuống.
**Examples:** `The downlink delivered high-resolution images during the brief visibility window.` → Đường xuống truyền ảnh độ phân giải cao trong khoảng nhìn thấy ngắn.
**Liên kết tiếng Hàn:** `하향 링크` (hahang ringkeu) — đường xuống.

## 6. multiplexing /ˈmʌltəˌplɛksɪŋ/
**Part of speech:** noun
**Core meaning (English):** combining multiple signals so they can share one communication channel.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghép kênh; hình ảnh nhiều luồng dữ liệu cùng đi qua một đường truyền.
**Grammar & collocations:** `frequency-division multiplexing` — ghép kênh phân chia tần số; `multiplexing method` — phương pháp ghép kênh.
**Examples:** `Multiplexing allowed voice, navigation, and sensor data to share the link.` → Ghép kênh cho phép thoại, định vị và dữ liệu cảm biến dùng chung liên kết.
**Liên kết tiếng Hàn:** `다중화` (dajunghwa) — ghép kênh.

## 7. spread spectrum /ˈsprɛd ˌspɛktrəm/
**Part of speech:** noun phrase
**Core meaning (English):** a transmission method that distributes a signal over a wider frequency range than the information itself requires.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trải phổ; hình ảnh tín hiệu được dàn rộng để chống nhiễu và khó bị phát hiện.
**Grammar & collocations:** `spread-spectrum signal` — tín hiệu trải phổ; `spread-spectrum modulation` — điều chế trải phổ.
**Examples:** `Spread spectrum improved resistance to narrowband interference.` → Trải phổ tăng khả năng chống nhiễu băng hẹp.
**Liên kết tiếng Hàn:** `확산 스펙트럼` (hwaksan seupekteureom) — trải phổ.

## 8. antenna gain /ænˈtɛnə ɡeɪn/
**Part of speech:** noun phrase
**Core meaning (English):** a measure of how strongly an antenna concentrates transmitted or received energy in a particular direction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ lợi ăng-ten; hình ảnh ăng-ten gom năng lượng về một hướng thay vì phát đều mọi phía.
**Grammar & collocations:** `high antenna gain` — độ lợi ăng-ten cao; `antenna-gain pattern` — đồ thị độ lợi.
**Examples:** `The dish's high antenna gain compensated for the long distance to the spacecraft.` → Độ lợi cao của đĩa bù cho khoảng cách dài tới tàu.
**Liên kết tiếng Hàn:** `안테나 이득` (antena ideuk) — độ lợi ăng-ten.

## 9. beamforming /ˈbiːmˌfɔrmɪŋ/
**Part of speech:** noun
**Core meaning (English):** controlling the phase and amplitude of signals from multiple antenna elements to steer a focused beam.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo chùm; hình ảnh nhiều phần tử ăng-ten phối hợp để bẻ hướng chùm sóng.
**Grammar & collocations:** `digital beamforming` — tạo chùm số; `adaptive beamforming` — tạo chùm thích nghi.
**Examples:** `Beamforming kept the connection pointed at the moving terminal.` → Tạo chùm giữ liên kết hướng vào thiết bị đầu cuối đang di chuyển.
**Liên kết tiếng Hàn:** `빔포밍` (bimpoming) — tạo chùm.

## 10. Doppler shift /ˈdɑplər ʃɪft/
**Part of speech:** noun phrase
**Core meaning (English):** the change in a received signal's frequency caused by relative motion between transmitter and receiver.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dịch Doppler; hình ảnh tần số nghe được đổi khi vệ tinh hoặc máy thu chuyển động.
**Grammar & collocations:** `Doppler-shift correction` — hiệu chỉnh dịch Doppler; `large Doppler shift` — dịch Doppler lớn.
**Examples:** `The receiver applied Doppler-shift correction as the satellite passed overhead.` → Máy thu hiệu chỉnh dịch Doppler khi vệ tinh bay qua đầu.
**Liên kết tiếng Hàn:** `도플러 편이` (dopeulleo pyeoni) — dịch Doppler.

## 11. link budget /ˈlɪŋk ˌbʌdʒət/
**Part of speech:** noun phrase
**Core meaning (English):** an accounting of all gains and losses that determine whether a communication link will meet its performance target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngân sách liên kết; hình ảnh cộng độ lợi rồi trừ suy hao để xem tín hiệu còn đủ mạnh không.
**Grammar & collocations:** `satellite link budget` — ngân sách liên kết vệ tinh; `link-budget analysis` — phân tích ngân sách liên kết.
**Examples:** `The link budget left only a small margin during heavy rain.` → Ngân sách liên kết chỉ còn biên nhỏ trong mưa lớn.
**Liên kết tiếng Hàn:** `링크 버짓` (ringkeu beojit) — ngân sách liên kết.

## 12. attenuation /əˌtɛnjuˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the weakening of a signal as it travels through distance, material, or the atmosphere.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy hao; hình ảnh tín hiệu yếu dần khi đi xa hoặc xuyên môi trường.
**Grammar & collocations:** `rain attenuation` — suy hao do mưa; `signal attenuation` — suy hao tín hiệu.
**Examples:** `Rain attenuation reduced the received power at the high-frequency band.` → Suy hao do mưa làm giảm công suất thu ở băng tần cao.
**Liên kết tiếng Hàn:** `감쇠` (gamswae) — suy hao.

## 13. polarization /ˌpoʊlərəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the orientation of the electric field in an electromagnetic wave.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân cực; hình ảnh điện trường của sóng rung theo một hướng xác định.
**Grammar & collocations:** `circular polarization` — phân cực tròn; `polarization mismatch` — lệch phân cực.
**Examples:** `Polarization mismatch caused an unexpected loss when the antennas were rotated.` → Lệch phân cực gây mất tín hiệu khi các ăng-ten bị xoay.
**Liên kết tiếng Hàn:** `편파` (pyeonpa) — phân cực.

## 14. ground station /ˈɡraʊnd ˌsteɪʃən/
**Part of speech:** noun phrase
**Core meaning (English):** a facility on Earth that communicates with, tracks, and controls satellites.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trạm mặt đất; hình ảnh cơ sở có ăng-ten theo dõi và trao đổi dữ liệu với vệ tinh.
**Grammar & collocations:** `satellite ground station` — trạm mặt đất vệ tinh; `ground-station pass` — lượt vệ tinh qua trạm.
**Examples:** `The ground station scheduled a pass to download the stored images.` → Trạm mặt đất lên lịch một lượt qua để tải ảnh đã lưu.
**Liên kết tiếng Hàn:** `지상국` (jisang-guk) — trạm mặt đất.

## 15. low Earth orbit /ˌloʊ ɝθ ˈɔrbət/
**Part of speech:** noun phrase
**Core meaning (English):** an orbit relatively close to Earth, commonly used by observation and communications satellites.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quỹ đạo Trái đất thấp; hình ảnh vệ tinh bay gần Trái đất để giảm độ trễ và chụp chi tiết.
**Grammar & collocations:** `low-Earth-orbit constellation` — chòm vệ tinh quỹ đạo thấp; `LEO satellite` — vệ tinh LEO.
**Examples:** `A low Earth orbit reduces signal delay but requires frequent handovers.` → Quỹ đạo thấp giảm trễ tín hiệu nhưng cần chuyển giao thường xuyên.
**Liên kết tiếng Hàn:** `저궤도` (jeogwedo) — quỹ đạo thấp.

## 16. medium Earth orbit /ˌmiːdiəm ɝθ ˈɔrbət/
**Part of speech:** noun phrase
**Core meaning (English):** an orbit between low Earth orbit and geostationary orbit, often used for navigation systems.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quỹ đạo Trái đất trung; hình ảnh quỹ đạo cân bằng độ phủ và độ trễ cho định vị.
**Grammar & collocations:** `medium-Earth-orbit navigation` — định vị quỹ đạo trung; `MEO satellite` — vệ tinh MEO.
**Examples:** `The navigation service uses medium Earth orbit satellites for broad regional coverage.` → Dịch vụ định vị dùng vệ tinh quỹ đạo trung để phủ vùng rộng.
**Liên kết tiếng Hàn:** `중궤도` (jungwedo) — quỹ đạo trung.

## 17. handover /ˈhændˌoʊvər/
**Part of speech:** noun
**Core meaning (English):** the transfer of an active communication session from one satellite, cell, or access point to another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển giao; hình ảnh kết nối đổi sang trạm hoặc vệ tinh kế tiếp mà không rớt phiên.
**Grammar & collocations:** `seamless handover` — chuyển giao liền mạch; `handover procedure` — quy trình chuyển giao.
**Examples:** `The terminal completed a seamless handover as the first satellite set below the horizon.` → Thiết bị hoàn tất chuyển giao liền mạch khi vệ tinh đầu lặn dưới đường chân trời.
**Liên kết tiếng Hàn:** `핸드오버` (haendeuobeo) — chuyển giao.

## 18. telecommand /ˈtɛlɪkəˌmænd/
**Part of speech:** noun
**Core meaning (English):** a command sent to a remote spacecraft or system through a communication link.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lệnh điều khiển từ xa; hình ảnh mặt đất gửi lệnh để thiết bị quỹ đạo thực hiện hành động.
**Grammar & collocations:** `encrypted telecommand` — lệnh điều khiển mã hóa; `telecommand sequence` — chuỗi lệnh.
**Examples:** `The telecommand changed the spacecraft's orientation before the imaging pass.` → Lệnh điều khiển đổi hướng tàu trước lượt chụp.
**Liên kết tiếng Hàn:** `원격 명령` (wongyeok myeongnyeong) — lệnh từ xa.

## 19. telemetry link /təˈlɛmətri lɪŋk/
**Part of speech:** noun phrase
**Core meaning (English):** a communication channel that carries measurements and status data from a remote system to operators.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** liên kết đo xa; hình ảnh thiết bị gửi nhiệt độ, điện áp và trạng thái về trung tâm.
**Grammar & collocations:** `redundant telemetry link` — liên kết đo xa dự phòng; `telemetry-link outage` — mất liên kết đo xa.
**Examples:** `The redundant telemetry link confirmed that the payload was still operating.` → Liên kết đo xa dự phòng xác nhận tải trọng vẫn hoạt động.
**Liên kết tiếng Hàn:** `원격 측정 링크` (wongyeok cheukjeong ringkeu) — liên kết đo xa.

## 20. error correction /ˈɛrər kəˈrɛkʃən/
**Part of speech:** noun phrase
**Core meaning (English):** methods that add structured information so a receiver can detect and repair some transmission errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sửa lỗi; hình ảnh dữ liệu dư giúp máy thu khôi phục bit bị nhiễu.
**Grammar & collocations:** `forward error correction` — sửa lỗi thuận; `error-correction code` — mã sửa lỗi.
**Examples:** `Error correction preserved the image even when several packets were corrupted.` → Sửa lỗi giữ được ảnh dù vài gói tin bị hỏng.
**Liên kết tiếng Hàn:** `오류 정정` (oryu jeongjeong) — sửa lỗi.

## Review in context

**Modulation** prepares information for transmission, and **demodulation** recovers it. **Latency** matters on an **uplink** and **downlink**; **multiplexing** shares a channel, while **spread spectrum** resists interference. **Antenna gain** and **beamforming** focus energy, but **Doppler shift**, a **link budget**, and **attenuation** still limit performance. **Polarization** must match at the **ground station**. Satellites in **low Earth orbit** or **medium Earth orbit** require a **handover**. A **telecommand** travels up, a **telemetry link** returns status, and **error correction** repairs damaged data.

**Bản dịch tiếng Việt:**

Điều chế chuẩn bị thông tin để truyền, còn giải điều chế khôi phục thông tin. Độ trễ quan trọng trên đường lên và đường xuống; ghép kênh dùng chung kênh, còn trải phổ chống nhiễu. Độ lợi ăng-ten và tạo chùm tập trung năng lượng, nhưng dịch Doppler, ngân sách liên kết và suy hao vẫn giới hạn hiệu năng. Phân cực phải khớp tại trạm mặt đất. Vệ tinh ở quỹ đạo thấp hoặc trung cần chuyển giao. Lệnh điều khiển đi lên, liên kết đo xa trả trạng thái, và sửa lỗi khôi phục dữ liệu hỏng.
