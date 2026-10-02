# C2 Vocabulary — Motor control and inverter modulation

This lesson follows an inverter from switching modulation and current regulation to rotor feedback, torque optimization, and braking.

Flow: **motor control → field-oriented control → space-vector modulation → pulse-width modulation → carrier frequency → dead-band time → current loop → speed loop → position loop → resolver feedback → quadrature encoder → hall commutation → back emf → sensorless control → maximum torque per ampere → flux weakening → regenerative braking → dc bus ripple → torque ripple → cogging torque**.

## 1. motor control /ˈmoʊtər kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** regulating a motor's voltage, current, speed, torque, or position to meet a command.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều chỉnh voltage, current, speed, torque hoặc position motor theo lệnh.
**Grammar & collocations:** `motor-control firmware` — firmware; `close a torque loop` — khép.
**Examples:** `The motor control limited acceleration when the battery temperature rose.` → Control motor giới hạn acceleration khi nhiệt pin tăng.
**Liên kết tiếng Hàn:** `모터 제어`.

## 2. field-oriented control /ˌfiːld ˈɔːrientɪd kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** controlling motor current in rotating reference axes so flux and torque can be regulated separately.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều khiển current theo trục quay để tách regulation flux và torque.
**Grammar & collocations:** `field-oriented-control transform` — transform; `decouple flux from torque` — tách.
**Examples:** `Field-oriented control delivered smooth torque across the motor's speed range.` → FOC cho torque mượt trong range speed.
**Liên kết tiếng Hàn:** `벡터 제어`.

## 3. space-vector modulation /ˈspeɪs ˈvektər ˌmɑːdʒəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** selecting inverter switch states to approximate a rotating voltage vector efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chọn state switch inverter để xấp xỉ voltage vector quay hiệu quả.
**Grammar & collocations:** `space-vector-modulation sector` — sector; `synthesize a reference vector` — tổng hợp.
**Examples:** `Space-vector modulation used the DC bus more fully than the basic sinusoidal command.` → SVM tận dụng bus DC tốt hơn lệnh sin cơ bản.
**Liên kết tiếng Hàn:** `공간 벡터 변조`.

## 4. pulse-width modulation /ˈpʌls wɪdθ ˌmɑːdʒəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** controlling average voltage by varying the duty width of repeated switching pulses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** điều khiển voltage trung bình bằng đổi độ rộng duty của pulse lặp.
**Grammar & collocations:** `pulse-width-modulation carrier` — carrier; `vary the duty cycle` — đổi.
**Examples:** `Pulse-width modulation synthesized three phase voltages from a fixed DC link.` → PWM tạo ba voltage pha từ link DC cố định.
**Liên kết tiếng Hàn:** `펄스 폭 변조`.

## 5. carrier frequency /ˈkæriər ˈfriːkwənsi/
**Part of speech:** noun
**Core meaning (English):** the switching frequency of the waveform that carries a modulation command.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** frequency switching của waveform mang lệnh modulation.
**Grammar & collocations:** `carrier-frequency tradeoff` — tradeoff; `raise the switching rate` — tăng.
**Examples:** `A higher carrier frequency reduced audible noise but increased switching loss.` → Frequency cao giảm noise nghe được nhưng tăng loss.
**Liên kết tiếng Hàn:** `반송파 주파수`.

## 6. dead-band time /ˈded bænd taɪm/
**Part of speech:** noun
**Core meaning (English):** a short intentional delay between turning one switch off and its complementary switch on.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** delay ngắn giữa tắt switch này và bật switch bổ sung.
**Grammar & collocations:** `dead-band-time insertion` — chèn; `prevent cross conduction` — ngăn.
**Examples:** `Too much dead-band time distorted the low-speed voltage command.` → Dead-band quá dài làm méo lệnh voltage tốc độ thấp.
**Liên kết tiếng Hàn:** `데드 밴드 시간`.

## 7. current loop /ˈkɜːrənt luːp/
**Part of speech:** noun
**Core meaning (English):** a feedback loop that makes measured motor current follow a commanded value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loop feedback khiến current đo bám value lệnh.
**Grammar & collocations:** `current-loop bandwidth` — bandwidth; `regulate phase current` — điều chỉnh.
**Examples:** `The current loop rejected a sudden load disturbance within one PWM cycle.` → Loop dòng loại disturbance trong một cycle PWM.
**Liên kết tiếng Hàn:** `전류 루프`.

## 8. speed loop /ˈspiːd luːp/
**Part of speech:** noun
**Core meaning (English):** a feedback loop that adjusts torque-producing commands to make motor speed follow a target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loop chỉnh lệnh torque để speed motor bám target.
**Grammar & collocations:** `speed-loop bandwidth` — bandwidth; `track a velocity reference` — bám.
**Examples:** `The speed loop slowed the conveyor smoothly when the target changed.` → Loop tốc độ làm băng tải chậm mượt khi target đổi.
**Liên kết tiếng Hàn:** `속도 루프`.

## 9. position loop /pəˈzɪʃən luːp/
**Part of speech:** noun
**Core meaning (English):** a feedback loop that commands speed or torque to make a mechanism reach a target position.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** loop lệnh speed/torque để cơ cấu tới position target.
**Grammar & collocations:** `position-loop error` — error; `settle at a commanded angle` — ổn định.
**Examples:** `The position loop held the robot joint within a fraction of a degree.` → Loop giữ joint trong phần nhỏ của degree.
**Liên kết tiếng Hàn:** `위치 루프`.

## 10. resolver feedback /rɪˈzɑːlvər ˈfiːdbæk/
**Part of speech:** noun
**Core meaning (English):** rotor-angle information obtained from an analog resolver and used by a motor controller.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thông tin góc rotor từ resolver analog cho controller motor.
**Grammar & collocations:** `resolver-feedback demodulation` — giải điều chế; `estimate rotor angle` — ước tính.
**Examples:** `Resolver feedback remained reliable in the hot, electrically noisy actuator.` → Feedback resolver vẫn tin cậy trong actuator nóng/nhiễu.
**Liên kết tiếng Hàn:** `리졸버 피드백`.

## 11. quadrature encoder /ˈkwɑːdrətʃər ɪnˈkoʊdər/
**Part of speech:** noun
**Core meaning (English):** an encoder with two phase-shifted digital signals that reveal position and direction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** encoder có hai signal lệch pha cho biết position và direction.
**Grammar & collocations:** `quadrature-encoder count` — count; `decode direction` — giải mã.
**Examples:** `The quadrature encoder reported shaft movement even at very low speed.` → Encoder báo chuyển động shaft ở speed rất thấp.
**Liên kết tiếng Hàn:** `쿼드러처 엔코더`.

## 12. hall commutation /hɔːl ˌkɑːməˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** switching motor phases according to the discrete rotor-position signals from Hall sensors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** switch phase motor theo signal position rời rạc từ sensor Hall.
**Grammar & collocations:** `Hall-commutation table` — table; `advance a phase state` — chuyển.
**Examples:** `Hall commutation started the motor before the encoder became active.` → Commutation Hall khởi động motor trước encoder.
**Liên kết tiếng Hàn:** `홀 정류`.

## 13. back emf /ˈbæk ˌiː ɛm ˈef/
**Part of speech:** noun
**Core meaning (English):** voltage generated by a rotating motor that opposes the applied voltage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** voltage motor quay tạo ra, chống lại voltage áp vào.
**Grammar & collocations:** `back-EMF waveform` — waveform; `estimate rotor speed` — ước tính.
**Examples:** `The controller measured back emf during the unpowered phase.` → Controller đo back EMF trong phase không cấp.
**Liên kết tiếng Hàn:** `역기전력`.

## 14. sensorless control /ˈsensərləs kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** motor control that estimates rotor position or speed without a dedicated position sensor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** control ước tính position/speed rotor không cần sensor riêng.
**Grammar & collocations:** `sensorless-control observer` — observer; `start from standstill` — khởi động.
**Examples:** `Sensorless control became less accurate near zero speed.` → Control sensorless kém chính xác gần speed zero.
**Liên kết tiếng Hàn:** `센서리스 제어`.

## 15. maximum torque per ampere /ˈmæksəməm tɔːrk pər ˈæmpɪr/
**Part of speech:** noun
**Core meaning (English):** a control strategy that chooses current angle to produce the most torque for a given current magnitude.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chiến lược chọn góc current để tạo torque lớn nhất với magnitude dòng cho trước.
**Grammar & collocations:** `maximum-torque-per-ampere trajectory` — trajectory; `optimize copper loss` — tối ưu.
**Examples:** `Maximum torque per ampere improved efficiency during steady acceleration.` → MTPA tăng hiệu suất khi tăng tốc ổn định.
**Liên kết tiếng Hàn:** `최대 토크/전류`.

## 16. flux weakening /ˈflʌks ˈwiːkənɪŋ/
**Part of speech:** noun
**Core meaning (English):** reducing effective magnetic flux so a motor can operate above its base speed within voltage limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm flux hiệu dụng để motor chạy trên base speed trong giới hạn voltage.
**Grammar & collocations:** `flux-weakening region` — region; `extend the speed range` — mở rộng.
**Examples:** `Flux weakening let the spindle exceed its base speed without raising the bus voltage.` → Weakening cho spindle vượt base speed mà không tăng bus.
**Liên kết tiếng Hàn:** `약계자 제어`.

## 17. regenerative braking /rɪˈdʒenərətɪv ˈbreɪkɪŋ/
**Part of speech:** noun
**Core meaning (English):** braking that converts mechanical energy back into electrical energy instead of wasting it as heat.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phanh đổi energy cơ về điện thay vì đốt thành nhiệt.
**Grammar & collocations:** `regenerative-braking current` — current; `recharge the battery` — sạc lại.
**Examples:** `Regenerative braking returned energy to the battery during descent.` → Phanh tái sinh trả energy về pin khi xuống.
**Liên kết tiếng Hàn:** `회생 제동`.

## 18. dc bus ripple /ˌdiː siː bʌs ˈrɪpəl/
**Part of speech:** noun
**Core meaning (English):** periodic voltage variation on the DC bus that supplies an inverter or motor drive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến thiên voltage tuần hoàn trên bus DC cấp inverter/drive.
**Grammar & collocations:** `DC-bus-ripple current` — current; `filter a twice-line component` — lọc.
**Examples:** `The controller limited torque when dc bus ripple exceeded the measurement margin.` → Controller giới hạn torque khi ripple vượt margin.
**Liên kết tiếng Hàn:** `DC 버스 리플`.

## 19. torque ripple /ˈtɔːrk ˈrɪpəl/
**Part of speech:** noun
**Core meaning (English):** periodic variation in motor torque around its commanded average value.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** torque motor dao động tuần hoàn quanh average target.
**Grammar & collocations:** `torque-ripple spectrum` — spectrum; `smooth a commutation step` — làm mượt.
**Examples:** `The revised current table reduced torque ripple at low speed.` → Table dòng mới giảm ripple torque ở speed thấp.
**Liên kết tiếng Hàn:** `토크 리플`.

## 20. cogging torque /ˈkɑːɡɪŋ tɔːrk/
**Part of speech:** noun
**Core meaning (English):** position-dependent torque caused by magnetic attraction between rotor magnets and stator teeth when little current flows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** torque phụ thuộc position do hút từ giữa magnet rotor và răng stator khi dòng nhỏ.
**Grammar & collocations:** `cogging-torque profile` — profile; `reduce detent motion` — giảm.
**Examples:** `The designer skewed the magnets to reduce cogging torque at startup.` → Designer skew magnet để giảm torque cogging lúc start.
**Liên kết tiếng Hàn:** `코깅 토크`.

## Review in context

**motor control** may use **field-oriented control**, **space-vector modulation**, and **pulse-width modulation**; **carrier frequency** and **dead-band time** affect switching loss. Nested **current loop**, **speed loop**, and **position loop** use **resolver feedback**, a **quadrature encoder**, or **hall commutation**. **back emf** supports **sensorless control**. **maximum torque per ampere** and **flux weakening** extend efficient operation, while **regenerative braking** returns energy. Engineers manage **dc bus ripple**, **torque ripple**, and **cogging torque** for smooth motion.

**Bản dịch tiếng Việt:** **motor control** có thể dùng **field-oriented control**, **space-vector modulation** và **pulse-width modulation**; **carrier frequency** và **dead-band time** ảnh hưởng switching loss. Các **current loop**, **speed loop** và **position loop** lồng nhau dùng **resolver feedback**, **quadrature encoder** hoặc **hall commutation**. **back emf** hỗ trợ **sensorless control**. **maximum torque per ampere** và **flux weakening** mở rộng vận hành hiệu quả, còn **regenerative braking** trả energy về. Kỹ sư quản lý **dc bus ripple**, **torque ripple** và **cogging torque** để chuyển động mượt.
