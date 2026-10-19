# C2 Vocabulary — Power-converter topologies and control

This lesson maps common converter topologies from mains correction and startup limiting through feedback control and fault protection.

Flow: **power factor correction → totem-pole pfc → boost converter → buck converter → flyback converter → forward converter → push-pull converter → half-bridge converter → full-bridge converter → resonant converter → llc converter → current-mode control → voltage-mode control → slope compensation → cycle-by-cycle limit → hiccup protection → soft start → inrush limiter → precharge resistor → dc link capacitor**.

## 1. power factor correction /ˈpaʊər ˈfæktər kəˈrekʃən/
**Part of speech:** noun
**Core meaning (English):** shaping input current so it follows the supply voltage and reduces reactive or harmonic loading.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tạo dòng vào đi theo voltage nguồn để giảm tải reactive/harmonic.
**Grammar & collocations:** `power-factor-correction stage` — stage; `shape an input waveform` — tạo hình.
**Examples:** `Power factor correction reduced harmonic current at the equipment inlet.` → PFC giảm dòng harmonic ở đầu vào.
**Liên kết tiếng Hàn:** `역률 보정`.

## 2. totem-pole pfc /ˈtoʊtəm poʊl ˌpiː ɛf ˈsiː/
**Part of speech:** noun
**Core meaning (English):** a bridgeless power-factor-correction topology using actively controlled switches arranged like a totem pole.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** topology PFC không cầu, dùng switch điều khiển xếp như totem pole.
**Grammar & collocations:** `totem-pole-PFC leg` — leg; `reduce bridge conduction loss` — giảm.
**Examples:** `The totem-pole PFC improved efficiency at the high-power input stage.` → Totem-pole PFC tăng hiệu suất stage công suất cao.
**Liên kết tiếng Hàn:** `토템폴 PFC`.

## 3. boost converter /buːst kənˈvɜːrtər/
**Part of speech:** noun
**Core meaning (English):** a converter that produces a higher output voltage from a lower input voltage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** converter tạo output voltage cao hơn input.
**Grammar & collocations:** `boost-converter duty cycle` — duty; `step up a rail` — nâng.
**Examples:** `The boost converter raised the battery voltage for the inverter bus.` → Boost nâng voltage pin cho bus inverter.
**Liên kết tiếng Hàn:** `부스트 컨버터`.

## 4. buck converter /bʌk kənˈvɜːrtər/
**Part of speech:** noun
**Core meaning (English):** a converter that produces a lower output voltage from a higher input voltage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** converter tạo output voltage thấp hơn input.
**Grammar & collocations:** `buck-converter inductor` — inductor; `step down a processor rail` — hạ.
**Examples:** `The buck converter supplied a stable one-volt rail to the processor.` → Buck cấp rail một volt ổn định.
**Liên kết tiếng Hàn:** `벅 컨버터`.

## 5. flyback converter /ˈflaɪˌbæk kənˈvɜːrtər/
**Part of speech:** noun
**Core meaning (English):** an isolated converter that stores energy in a magnetic element during one switch interval and releases it during another.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** converter cách ly trữ energy trong từ tính rồi xả ở interval khác.
**Grammar & collocations:** `flyback-converter transformer` — transformer; `transfer stored energy` — truyền.
**Examples:** `The flyback converter generated several isolated auxiliary rails.` → Flyback tạo nhiều rail phụ cách ly.
**Liên kết tiếng Hàn:** `플라이백 컨버터`.

## 6. forward converter /ˈfɔːrwərd kənˈvɜːrtər/
**Part of speech:** noun
**Core meaning (English):** an isolated converter that transfers energy to its output while the primary switch is on.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** converter cách ly truyền energy sang output khi switch sơ cấp bật.
**Grammar & collocations:** `forward-converter reset winding` — winding; `transfer power directly` — truyền.
**Examples:** `The forward converter reset its core before the next switching cycle.` → Forward reset lõi trước cycle tiếp.
**Liên kết tiếng Hàn:** `포워드 컨버터`.

## 7. push-pull converter /ˈpʊʃ pʊl kənˈvɜːrtər/
**Part of speech:** noun
**Core meaning (English):** a transformer converter whose alternating switches drive opposite halves of the primary winding.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** converter transformer có switch luân phiên drive hai nửa winding sơ cấp.
**Grammar & collocations:** `push-pull-converter balance` — cân bằng; `drive opposite halves` — drive.
**Examples:** `The push-pull converter required matched timing to avoid transformer imbalance.` → Push-pull cần timing khớp để tránh lệch transformer.
**Liên kết tiếng Hàn:** `푸시풀 컨버터`.

## 8. half-bridge converter /ˈhæf brɪdʒ kənˈvɜːrtər/
**Part of speech:** noun
**Core meaning (English):** a converter using two switches and a midpoint to apply alternating voltage to a transformer or load.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** converter dùng hai switch và midpoint áp voltage luân phiên.
**Grammar & collocations:** `half-bridge-converter midpoint` — midpoint; `balance switch timing` — cân.
**Examples:** `The half-bridge converter reduced switch voltage compared with a single-ended stage.` → Half-bridge giảm voltage switch.
**Liên kết tiếng Hàn:** `하프 브리지 컨버터`.

## 9. full-bridge converter /ˈfʊl brɪdʒ kənˈvɜːrtər/
**Part of speech:** noun
**Core meaning (English):** a converter using four switches to apply both polarities of a voltage to a transformer or load.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** converter bốn switch áp cả hai polarity voltage.
**Grammar & collocations:** `full-bridge-converter leg` — leg; `commutate a transformer` — chuyển.
**Examples:** `The full-bridge converter delivered high power with controlled phase shift.` → Full-bridge truyền công suất cao với phase shift.
**Liên kết tiếng Hàn:** `풀 브리지 컨버터`.

## 10. resonant converter /ˈrezənənt kənˈvɜːrtər/
**Part of speech:** noun
**Core meaning (English):** a converter that uses an inductor-capacitor resonance to shape current or voltage during switching.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** converter dùng resonance LC để tạo hình current/voltage khi switching.
**Grammar & collocations:** `resonant-converter tank` — tank; `operate near resonance` — chạy.
**Examples:** `The resonant converter reduced switching loss near its design frequency.` → Resonant giảm loss gần frequency thiết kế.
**Liên kết tiếng Hàn:** `공진 컨버터`.

## 11. llc converter /ˌel el ˈsiː kənˈvɜːrtər/
**Part of speech:** noun
**Core meaning (English):** a resonant converter using two inductive elements and one capacitor to transfer isolated power efficiently.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resonant converter dùng hai phần tử cảm và một capacitor truyền power cách ly hiệu quả.
**Grammar & collocations:** `LLC-converter gain curve` — curve; `regulate by frequency` — điều chỉnh.
**Examples:** `The LLC converter maintained soft switching across a broad load range.` → LLC giữ switching mềm trong range load rộng.
**Liên kết tiếng Hàn:** `LLC 컨버터`.

## 12. current-mode control /ˈkɜːrənt moʊd kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** feedback control that uses inductor or switch current as an inner control signal.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** feedback dùng current inductor/switch làm signal control bên trong.
**Grammar & collocations:** `current-mode-control loop` — loop; `sense a peak current` — sense.
**Examples:** `Current-mode control responded quickly to a sudden load step.` → Control mode dòng đáp ứng nhanh khi load đổi.
**Liên kết tiếng Hàn:** `전류 모드 제어`.

## 13. voltage-mode control /ˈvoʊltɪdʒ moʊd kənˈtroʊl/
**Part of speech:** noun
**Core meaning (English):** feedback control that compares output voltage with a reference and modulates the switch command.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** feedback so output voltage với reference rồi điều chế lệnh switch.
**Grammar & collocations:** `voltage-mode-control compensator` — compensator; `shape a control ramp` — tạo.
**Examples:** `Voltage-mode control required a carefully designed compensation network.` → Control mode voltage cần network compensation kỹ.
**Liên kết tiếng Hàn:** `전압 모드 제어`.

## 14. slope compensation /sloʊp ˌkɑːmpənˈseɪʃən/
**Part of speech:** noun
**Core meaning (English):** adding a stabilizing ramp to current-mode control to prevent subharmonic oscillation at high duty cycles.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thêm ramp ổn định vào control dòng để tránh dao động subharmonic.
**Grammar & collocations:** `slope-compensation ramp` — ramp; `stabilize a peak-current loop` — ổn định.
**Examples:** `Slope compensation stabilized the converter above fifty percent duty cycle.` → Bù slope ổn định converter trên duty 50%.
**Liên kết tiếng Hàn:** `슬로프 보상`.

## 15. cycle-by-cycle limit /ˈsaɪkəl baɪ ˈsaɪkəl ˈlɪmət/
**Part of speech:** noun
**Core meaning (English):** protection that stops or shortens each switching cycle when current exceeds a threshold.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo vệ dừng/rút ngắn từng cycle khi current vượt threshold.
**Grammar & collocations:** `cycle-by-cycle-limit comparator` — comparator; `terminate a pulse` — kết thúc.
**Examples:** `The cycle-by-cycle limit protected the switch during a temporary overload.` → Limit bảo vệ switch khi overload tạm.
**Liên kết tiếng Hàn:** `주기별 제한`.

## 16. hiccup protection /ˈhɪkʌp prəˈtekʃən/
**Part of speech:** noun
**Core meaning (English):** a fault response that repeatedly shuts down and briefly retries a converter instead of delivering continuous overload current.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảo vệ tắt và thử lại converter theo chu kỳ thay vì cấp dòng overload liên tục.
**Grammar & collocations:** `hiccup-protection delay` — delay; `retry after a timeout` — thử lại.
**Examples:** `Hiccup protection kept the shorted output from overheating the transformer.` → Bảo vệ hiccup ngăn output chập làm nóng transformer.
**Liên kết tiếng Hàn:** `히컵 보호`.

## 17. soft start /ˈsɔːft stɑːrt/
**Part of speech:** noun
**Core meaning (English):** gradually increasing a converter's duty cycle or output so startup stress and surge are limited.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tăng duty/output từ từ để giới hạn stress và surge lúc khởi động.
**Grammar & collocations:** `soft-start ramp` — ramp; `charge an output capacitor gently` — nạp.
**Examples:** `Soft start prevented the large output capacitor from demanding its full current at once.` → Soft start ngăn capacitor đòi full current ngay.
**Liên kết tiếng Hàn:** `소프트 스타트`.

## 18. inrush limiter /ˈɪnˌrʌʃ ˈlɪmətər/
**Part of speech:** noun
**Core meaning (English):** a component or control that restricts the brief input current surge when equipment is energized.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** component/control hạn chế surge dòng đầu vào khi cấp điện.
**Grammar & collocations:** `inrush-limiter thermistor` — thermistor; `limit capacitor charging` — giới hạn.
**Examples:** `The inrush limiter protected the connector contacts during plug-in.` → Limiter bảo vệ contact connector lúc cắm.
**Liên kết tiếng Hàn:** `돌입 전류 제한기`.

## 19. precharge resistor /ˈpriːtʃɑːrdʒ rɪˈzɪstər/
**Part of speech:** noun
**Core meaning (English):** a resistor that initially charges a large DC-link capacitor before a lower-loss bypass path closes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** resistor nạp capacitor DC-link trước khi đóng đường bypass ít loss.
**Grammar & collocations:** `precharge-resistor bypass` — bypass; `limit startup current` — giới hạn.
**Examples:** `The precharge resistor limited the current before the contactor closed.` → Resistor precharge giới hạn dòng trước contactor đóng.
**Liên kết tiếng Hàn:** `프리차지 저항`.

## 20. dc link capacitor /ˌdiː siː lɪŋk kəˈpæsɪtər/
**Part of speech:** noun
**Core meaning (English):** a capacitor that stabilizes the intermediate DC bus between rectification and an inverter stage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** capacitor ổn định bus DC trung gian giữa chỉnh lưu và inverter.
**Grammar & collocations:** `DC-link-capacitor ripple` — ripple; `buffer a rectified bus` — đệm.
**Examples:** `The dc link capacitor absorbed twice-line-frequency ripple before the inverter.` → Capacitor DC-link hấp thụ ripple trước inverter.
**Liên kết tiếng Hàn:** `DC 링크 커패시터`.

## Review in context

**power factor correction** may use a **totem-pole pfc** before a **boost converter**; a **buck converter**, **flyback converter**, **forward converter**, **push-pull converter**, **half-bridge converter**, or **full-bridge converter** then creates the required rail. A **resonant converter** such as an **llc converter** reduces switching stress. **current-mode control**, **voltage-mode control**, and **slope compensation** shape feedback, while a **cycle-by-cycle limit** and **hiccup protection** handle faults. **soft start**, an **inrush limiter**, a **precharge resistor**, and a **dc link capacitor** control startup energy.

**Bản dịch tiếng Việt:** **power factor correction** có thể dùng **totem-pole pfc** trước **boost converter**; **buck converter**, **flyback converter**, **forward converter**, **push-pull converter**, **half-bridge converter** hoặc **full-bridge converter** tạo rail cần thiết. **resonant converter** như **llc converter** giảm stress switching. **current-mode control**, **voltage-mode control** và **slope compensation** định hình feedback, còn **cycle-by-cycle limit** và **hiccup protection** xử lý fault. **soft start**, **inrush limiter**, **precharge resistor** và **dc link capacitor** kiểm soát năng lượng startup.
