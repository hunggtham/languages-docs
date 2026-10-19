# C2 Vocabulary — Power integrity and transient control

This lesson follows a power rail from layout parasitics through control-loop stability, transient protection, and electromagnetic compliance.

Flow: **load-line regulation → decoupling network → plane resonance → return-current path → via inductance → current sharing → undershoot clamp → overshoot clamp → soft-start ramp → hold-up time → power-good delay → supply rejection → control-loop crossover → phase margin → output capacitor derating → ceramic capacitor bias → bulk capacitance → conducted emission → common-impedance coupling → power-sequencing fault**.

## 1. load-line regulation /ˈloʊd laɪn ˌreɡjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** intentional voltage change with load current that keeps a power converter stable and improves transient sharing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay đổi voltage có chủ ý theo load current để converter ổn định và chia transient tốt.
**Grammar & collocations:** `load-line-regulation slope` — slope; `program a droop characteristic` — lập đặc tính droop.
**Examples:** `Load-line regulation kept the processor rail from overshooting when the current collapsed.` → Regulation load-line giữ rail processor không overshoot khi current sụp.
**Liên kết tiếng Hàn:** `부하선 조정`.

## 2. decoupling network /diːˈkʌplɪŋ ˈnetwɜːrk/
**Part of speech:** noun
**Core meaning (English):** a coordinated set of capacitors and connections that supplies fast current locally and reduces rail impedance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập hợp capacitor và connection phối hợp cấp current nhanh tại chỗ và giảm impedance rail.
**Grammar & collocations:** `decoupling-network placement` — placement; `bypass a switching transient` — bypass transient switching.
**Examples:** `The decoupling network shortened the current path beside the memory package.` → Network decoupling rút ngắn current path cạnh package memory.
**Liên kết tiếng Hàn:** `디커플링 네트워크`.

## 3. plane resonance /pleɪn ˈrezənəns/
**Part of speech:** noun
**Core meaning (English):** a resonant mode of a power or ground plane that amplifies voltage variation at particular frequencies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mode resonance của power hoặc ground plane khuếch đại voltage variation ở frequency nhất định.
**Grammar & collocations:** `plane-resonance peak` — peak; `damp a cavity mode` — giảm mode cavity.
**Examples:** `Plane resonance created a narrow spike in the impedance scan.` → Resonance plane tạo spike hẹp trong scan impedance.
**Liên kết tiếng Hàn:** `평면 공진`.

## 4. return-current path /rɪˈtɜːrn ˈkɜːrənt pæθ/
**Part of speech:** noun
**Core meaning (English):** the physical route taken by current returning from a load to its source or reference.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** route vật lý current đi về từ load tới source hoặc reference.
**Grammar & collocations:** `return-current-path discontinuity` — discontinuity; `keep a reference plane continuous` — giữ reference plane liên tục.
**Examples:** `A split in the return-current path increased loop inductance near the converter.` → Split trong path current-return tăng inductance loop gần converter.
**Liên kết tiếng Hàn:** `귀환 전류 경로`.

## 5. via inductance /ˈviːə ɪnˈdʌktəns/
**Part of speech:** noun
**Core meaning (English):** inductance contributed by a vertical interconnect and its current-loop geometry.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** inductance do interconnect dọc và hình học current-loop của nó đóng góp.
**Grammar & collocations:** `via-inductance estimate` — estimate; `parallel vias` — dùng via song song.
**Examples:** `Via inductance limited how quickly the local capacitor could answer the load step.` → Inductance via giới hạn tốc độ capacitor local đáp ứng load step.
**Liên kết tiếng Hàn:** `비아 인덕턴스`.

## 6. current sharing /ˈkɜːrənt ˈʃerɪŋ/
**Part of speech:** noun
**Core meaning (English):** distribution of load current among parallel phases, devices, or conductors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân bổ load current giữa phase, device hoặc conductor song song.
**Grammar & collocations:** `current-sharing error` — error; `balance parallel phases` — cân bằng phase song song.
**Examples:** `Current sharing improved after the two converter phases received matched sense traces.` → Sharing current cải thiện sau khi hai phase converter có sense trace khớp.
**Liên kết tiếng Hàn:** `전류 분담`.

## 7. undershoot clamp /ˈʌndərʃuːt klæmp/
**Part of speech:** noun
**Core meaning (English):** a circuit or device that limits how far a signal or supply falls below its target.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** circuit giới hạn signal hoặc supply rơi xuống dưới target bao xa.
**Grammar & collocations:** `undershoot-clamp threshold` — threshold; `limit a negative excursion` — giới hạn excursion âm.
**Examples:** `The undershoot clamp protected the sensor input during cable discharge.` → Clamp undershoot bảo vệ input sensor khi cable phóng điện.
**Liên kết tiếng Hàn:** `언더슈트 클램프`.

## 8. overshoot clamp /ˈoʊvərʃuːt klæmp/
**Part of speech:** noun
**Core meaning (English):** a circuit or device that limits a transient rise above a target voltage or current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** circuit giới hạn transient rise vượt target voltage hoặc current.
**Grammar & collocations:** `overshoot-clamp response` — response; `shunt excess energy` — shunt năng lượng thừa.
**Examples:** `The overshoot clamp absorbed the inductive spike when the relay opened.` → Clamp overshoot hấp thụ spike cảm ứng khi relay mở.
**Liên kết tiếng Hàn:** `오버슈트 클램프`.

## 9. soft-start ramp /sɔːft stɑːrt ræmp/
**Part of speech:** noun
**Core meaning (English):** a controlled increase of voltage or current during startup to limit inrush and stress.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tăng voltage hoặc current có kiểm soát lúc startup để giảm inrush và stress.
**Grammar & collocations:** `soft-start-ramp duration` — duration; `limit startup current` — giới hạn current startup.
**Examples:** `The soft-start ramp prevented the bulk capacitors from collapsing the upstream rail.` → Ramp soft-start ngăn bulk capacitor làm sụp rail upstream.
**Liên kết tiếng Hàn:** `소프트 스타트 램프`.

## 10. hold-up time /ˈhoʊld ʌp taɪm/
**Part of speech:** noun
**Core meaning (English):** the time a supply maintains an acceptable output after its input disappears or sags.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian supply giữ output chấp nhận được sau khi input mất hoặc sụt.
**Grammar & collocations:** `hold-up-time requirement` — requirement; `ride through an input dropout` — vượt qua dropout input.
**Examples:** `The hold-up time covered the interval required for the backup source to connect.` → Time hold-up bao phủ interval cần để source backup kết nối.
**Liên kết tiếng Hàn:** `홀드업 시간`.

## 11. power-good delay /ˈpaʊər ɡʊd dɪˈleɪ/
**Part of speech:** noun
**Core meaning (English):** intentional delay between a rail entering tolerance and declaring it ready to downstream logic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** delay có chủ ý giữa rail vào tolerance và báo sẵn sàng cho logic downstream.
**Grammar & collocations:** `power-good-delay timer` — timer; `sequence a processor reset` — điều phối reset processor.
**Examples:** `The power-good delay allowed the reference clock to settle before release.` → Delay power-good cho clock reference ổn định trước khi release.
**Liên kết tiếng Hàn:** `전원 양호 지연`.

## 12. supply rejection /səˈplaɪ rɪˈdʒekʃən/
**Part of speech:** noun
**Core meaning (English):** the ability of a circuit to prevent supply variation from appearing at its output or signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả năng circuit ngăn variation supply xuất hiện ở output hoặc signal.
**Grammar & collocations:** `supply-rejection ratio` — ratio; `attenuate rail ripple` — giảm ripple rail.
**Examples:** `Supply rejection fell at high frequency because the bypass path was inductive.` → Rejection supply giảm ở frequency cao vì bypass path có inductive.
**Liên kết tiếng Hàn:** `전원 제거율`.

## 13. control-loop crossover /kənˈtroʊl luːp ˈkrɔːsoʊvər/
**Part of speech:** noun
**Core meaning (English):** the frequency at which a feedback loop's open-loop gain crosses unity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** frequency nơi gain open-loop của feedback loop cắt unity.
**Grammar & collocations:** `control-loop-crossover frequency` — frequency; `set a bandwidth target` — đặt bandwidth target.
**Examples:** `The control-loop crossover moved lower after the output capacitor was derated.` → Crossover control-loop hạ xuống sau khi derate output capacitor.
**Liên kết tiếng Hàn:** `제어 루프 교차 주파수`.

## 14. phase margin /feɪz ˈmɑːrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** the remaining phase separation from instability at the loop's unity-gain crossover.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng cách phase còn lại tới instability tại crossover gain unity.
**Grammar & collocations:** `phase-margin measurement` — measurement; `damp control-loop ringing` — giảm ringing loop.
**Examples:** `Phase margin fell below the design target and the rail began to ring.` → Margin phase xuống dưới target design và rail bắt đầu ringing.
**Liên kết tiếng Hàn:** `위상 여유`.

## 15. output capacitor derating /ˈaʊtpʊt kəˈpæsɪtər ˈdiːreɪtɪŋ/
**Part of speech:** noun
**Core meaning (English):** reduction of usable capacitor value or rating under voltage, temperature, frequency, or aging.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giảm capacitance hoặc rating hữu dụng dưới voltage, temperature, frequency hoặc aging.
**Grammar & collocations:** `output-capacitor-derating curve` — curve; `recalculate ripple margin` — tính lại margin ripple.
**Examples:** `Output capacitor derating reduced the effective loop damping at the maximum bias voltage.` → Derating capacitor output giảm damping loop hiệu dụng ở bias voltage tối đa.
**Liên kết tiếng Hàn:** `출력 커패시터 디레이팅`.

## 16. ceramic capacitor bias /səˈræmɪk kəˈpæsɪtər ˈbaɪəs/
**Part of speech:** noun
**Core meaning (English):** the reduction in ceramic capacitance caused by applied DC voltage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** capacitance ceramic giảm do DC voltage áp vào.
**Grammar & collocations:** `ceramic-capacitor-bias curve` — curve; `measure capacitance under DC` — đo capacitance dưới DC.
**Examples:** `Ceramic capacitor bias left half the nominal value available during the load step.` → Bias capacitor ceramic chỉ còn nửa giá trị danh nghĩa trong load step.
**Liên kết tiếng Hàn:** `세라믹 커패시터 바이어스`.

## 17. bulk capacitance /bʌlk kəˈpæsɪtəns/
**Part of speech:** noun
**Core meaning (English):** larger energy-storage capacitance that supports slower load changes and input interruptions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** capacitance lưu trữ năng lượng lớn hỗ trợ load change chậm và input interruption.
**Grammar & collocations:** `bulk-capacitance bank` — bank; `support a low-frequency load` — hỗ trợ load tần số thấp.
**Examples:** `Bulk capacitance maintained the rail while the source switch changed state.` → Capacitance bulk giữ rail khi source switch đổi state.
**Liên kết tiếng Hàn:** `벌크 커패시턴스`.

## 18. conducted emission /kənˈdʌktɪd ɪˈmɪʃən/
**Part of speech:** noun
**Core meaning (English):** unwanted electromagnetic energy carried along power or signal conductors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** năng lượng điện từ không mong muốn đi theo conductor power hoặc signal.
**Grammar & collocations:** `conducted-emission scan` — scan; `filter switching harmonics` — lọc harmonic switching.
**Examples:** `Conducted emission exceeded the limit near the converter's switching frequency.` → Emission conducted vượt limit gần switching frequency của converter.
**Liên kết tiếng Hàn:** `전도 방출`.

## 19. common-impedance coupling /ˈkɑːmən ɪmˈpiːdəns ˈkʌplɪŋ/
**Part of speech:** noun
**Core meaning (English):** interference created when two circuits share an impedance through which one circuit's current produces voltage for the other.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interference do hai circuit share impedance khiến current một circuit tạo voltage cho circuit kia.
**Grammar & collocations:** `common-impedance-coupling path` — path; `separate noisy return currents` — tách return current nhiễu.
**Examples:** `Common-impedance coupling injected the converter ripple into the analog reference.` → Coupling impedance-common đưa ripple converter vào reference analog.
**Liên kết tiếng Hàn:** `공통 임피던스 결합`.

## 20. power-sequencing fault /ˈpaʊər ˈsiːkwənsɪŋ fɔːlt/
**Part of speech:** noun
**Core meaning (English):** an error in the order or timing of supply rails that can prevent safe startup or shutdown.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi thứ tự hoặc timing rail supply làm startup hoặc shutdown không an toàn.
**Grammar & collocations:** `power-sequencing-fault log` — log; `enforce rail dependencies` — áp dependency giữa rail.
**Examples:** `A power-sequencing fault released reset before the memory rail was valid.` → Fault sequencing power release reset trước khi rail memory hợp lệ.
**Liên kết tiếng Hàn:** `전원 시퀀싱 결함`.

## Review in context

**Load-line regulation**, a **decoupling network**, and **plane resonance** shape the **return-current path**, **via inductance**, and **current sharing**. An **undershoot clamp**, **overshoot clamp**, and **soft-start ramp** protect the rail, while **hold-up time** and **power-good delay** coordinate recovery. **Supply rejection**, **control-loop crossover**, and **phase margin** depend on **output capacitor derating**, **ceramic capacitor bias**, and **bulk capacitance**. Finally, **conducted emission**, **common-impedance coupling**, and a **power-sequencing fault** reveal system-level power-integrity limits.

**Bản dịch tiếng Việt:** **Load-line regulation**, **decoupling network** và **plane resonance** định hình **return-current path**, **via inductance** và **current sharing**. **Undershoot clamp**, **overshoot clamp** và **soft-start ramp** bảo vệ rail, còn **hold-up time** và **power-good delay** điều phối phục hồi. **Supply rejection**, **control-loop crossover** và **phase margin** phụ thuộc vào **output capacitor derating**, **ceramic capacitor bias** và **bulk capacitance**. Cuối cùng, **conducted emission**, **common-impedance coupling** và **power-sequencing fault** cho thấy giới hạn power-integrity cấp hệ.
