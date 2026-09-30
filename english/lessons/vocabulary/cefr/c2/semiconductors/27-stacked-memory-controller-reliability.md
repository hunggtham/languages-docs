# C2 Vocabulary — Stacked-memory controller reliability

This lesson follows a high-bandwidth memory path from controller scheduling through training, repair, thermal stress, and field telemetry.

Flow: **high-bandwidth memory → memory-stack controller → through-silicon-via redundancy → rowhammer susceptibility → refresh-window violation → bank-group scheduling → pseudo-channel → data-bus inversion → on-die ECC → error containment code → link training margin → memory repair signature → spare-row remap → thermal-aware refresh → retention failure bin → command-address parity → write leveling → read gate training → stacked-memory interface → memory-controller telemetry**.

## 1. high-bandwidth memory /haɪ ˈbændwɪθ ˈmɛməri/
**Part of speech:** noun
**Core meaning (English):** a memory architecture using many parallel channels or stacked dies to provide very high data throughput.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** memory nhiều channel/stack để đạt throughput cao.
**Grammar & collocations:** `high-bandwidth-memory stack` — stack; `feed an accelerator` — cấp dữ liệu.
**Examples:** `High-bandwidth memory supplied the accelerator without saturating the host socket.` → HBM cấp dữ liệu mà không bão hòa socket host.
**Liên kết tiếng Hàn:** `고대역폭 메모리`.

## 2. memory-stack controller /ˈmɛməri stæk kənˈtroʊlər/
**Part of speech:** noun
**Core meaning (English):** logic that schedules commands, manages timing, and monitors a stack of memory dies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** logic điều phối command, timing và giám sát stack memory.
**Grammar & collocations:** `memory-stack-controller firmware` — firmware; `schedule a burst` — lập lịch.
**Examples:** `The memory-stack controller isolated a weak channel before it corrupted the training run.` → Controller cô lập channel yếu.
**Liên kết tiếng Hàn:** `메모리 스택 컨트롤러`.

## 3. through-silicon-via redundancy /θruː ˈsɪlɪkən ˈvaɪə rɪˈdʌndənsi/
**Part of speech:** noun
**Core meaning (English):** spare or alternate vertical connections that preserve operation when a TSV is defective.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** via dọc dự phòng để chịu lỗi.
**Grammar & collocations:** `through-silicon-via-redundancy map` — map; `route around a failed via` — vòng.
**Examples:** `Through-silicon-via redundancy preserved the channel after one vertical connection opened.` → Redundancy giữ channel sau khi một via hở.
**Liên kết tiếng Hàn:** `실리콘 관통 비아 이중화`.

## 4. rowhammer susceptibility /ˈroʊˌhæmər səˌsɛptəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the tendency of repeated activation of one memory row to disturb data in nearby rows.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** row bị kích lặp làm bit hàng bên cạnh đổi.
**Grammar & collocations:** `rowhammer-susceptibility test` — test; `disturb an adjacent row` — làm nhiễu.
**Examples:** `Rowhammer susceptibility fell after the controller inserted targeted refreshes.` → Susceptibility giảm sau refresh mục tiêu.
**Liên kết tiếng Hàn:** `로우해머 취약성`.

## 5. refresh-window violation /rɪˈfrɛʃ ˈwɪndoʊ ˌvaɪəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** a failure to refresh a memory region within the interval required to preserve its data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** không refresh đúng cửa sổ khiến data mất.
**Grammar & collocations:** `refresh-window-violation counter` — counter; `close a timing gap` — đóng.
**Examples:** `A refresh-window violation appeared when thermal throttling delayed low-priority commands.` → Vi phạm refresh xuất hiện khi throttle làm trễ command.
**Liên kết tiếng Hàn:** `리프레시 윈도우 위반`.

## 6. bank-group scheduling /bæŋk ɡruːp ˈskɛdʒuːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** arranging memory commands across bank groups to balance parallelism, timing limits, and power.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sắp command giữa các bank group để cân bằng song song và timing.
**Grammar & collocations:** `bank-group-scheduling policy` — policy; `interleave independent banks` — xen.
**Examples:** `Bank-group scheduling avoided repeated conflicts on the same timing domain.` → Scheduling tránh xung đột lặp trong cùng domain.
**Liên kết tiếng Hàn:** `뱅크 그룹 스케줄링`.

## 7. pseudo-channel /ˈsuːdoʊ ˈtʃænəl/
**Part of speech:** noun
**Core meaning (English):** a logically independent subchannel exposed within a physical memory channel to improve command concurrency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kênh logic con trong channel vật lý.
**Grammar & collocations:** `pseudo-channel mapping` — mapping; `split command traffic` — chia.
**Examples:** `The scheduler mapped independent tensor tiles to separate pseudo-channels.` → Scheduler map tile tensor vào pseudo-channel riêng.
**Liên kết tiếng Hàn:** `의사 채널`.

## 8. data-bus inversion /ˈdeɪtə bʌs ɪnˈvɝʒən/
**Part of speech:** noun
**Core meaning (English):** encoding that inverts a data word when doing so reduces simultaneous signal transitions and power.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đảo data word để giảm chuyển mức và power bus.
**Grammar & collocations:** `data-bus-inversion bit` — bit; `reduce switching activity` — giảm.
**Examples:** `Data-bus inversion lowered peak interface current during a wide write burst.` → Đảo bus giảm dòng peak khi write rộng.
**Liên kết tiếng Hàn:** `데이터 버스 반전`.

## 9. on-die ECC /ɑn daɪ iː siː siː/
**Part of speech:** noun
**Core meaning (English):** error-correcting logic integrated inside a memory die before data reaches the external interface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ECC nằm trong die sửa lỗi trước interface ngoài.
**Grammar & collocations:** `on-die-ECC correction` — correction; `mask an internal bit error` — che.
**Examples:** `On-die ECC corrected a weak-cell error without raising an external alert.` → ECC trong die sửa lỗi cell yếu mà không báo ngoài.
**Liên kết tiếng Hàn:** `다이 내 ECC`.

## 10. error containment code /ˈɛrər kənˈteɪnmənt koʊd/
**Part of speech:** noun
**Core meaning (English):** a code or metadata scheme that helps confine the effect of an error to a known word, lane, or transaction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã khoanh vùng lỗi vào word/lane/transaction.
**Grammar & collocations:** `error-containment-code field` — field; `localize a corrupt burst` — khoanh.
**Examples:** `The error containment code prevented one lane fault from invalidating the whole tensor.` → Mã containment ngăn lỗi một lane làm hỏng tensor.
**Liên kết tiếng Hàn:** `오류 격리 코드`.

## 11. link training margin /lɪŋk ˈtreɪnɪŋ ˈmɑrdʒɪn/
**Part of speech:** noun
**Core meaning (English):** the measured separation between trained signal settings and the boundary at which a memory link fails.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khoảng đệm giữa setting link và biên fail.
**Grammar & collocations:** `link-training-margin report` — report; `sweep receiver settings` — quét.
**Examples:** `Link training margin narrowed after the package connector aged.` → Margin training hẹp lại sau khi connector già hóa.
**Liên kết tiếng Hàn:** `링크 트레이닝 마진`.

## 12. memory repair signature /ˈmɛməri rɪˈpɛr ˈsɪɡnətʃər/
**Part of speech:** noun
**Core meaning (English):** the recorded pattern showing which memory rows, columns, or lanes required repair.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mẫu ghi lại vùng memory cần repair.
**Grammar & collocations:** `memory-repair-signature database` — database; `classify a defect pattern` — phân loại.
**Examples:** `The memory repair signature predicted a marginal stack before final assembly.` → Signature repair dự đoán stack biên trước lắp cuối.
**Liên kết tiếng Hàn:** `메모리 수리 서명`.

## 13. spare-row remap /spɛr roʊ riˈmæp/
**Part of speech:** noun
**Core meaning (English):** redirecting accesses from a defective memory row to a reserved replacement row.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyển địa chỉ row hỏng sang row dự phòng.
**Grammar & collocations:** `spare-row-remap table` — table; `retire a weak row` — loại.
**Examples:** `Spare-row remap restored capacity after manufacturing found a stuck bitline.` → Remap row dự phòng phục hồi capacity.
**Liên kết tiếng Hàn:** `예비 행 재매핑`.

## 14. thermal-aware refresh /ˈθɝməl əˈwɛr rɪˈfrɛʃ/
**Part of speech:** noun
**Core meaning (English):** adjusting refresh behavior according to temperature-dependent data-retention risk.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** refresh đổi theo nhiệt vì retention phụ thuộc nhiệt.
**Grammar & collocations:** `thermal-aware-refresh policy` — policy; `increase refresh rate` — tăng.
**Examples:** `Thermal-aware refresh protected the hottest stack during sustained accelerator load.` → Refresh theo nhiệt bảo vệ stack nóng.
**Liên kết tiếng Hàn:** `열 인식 리프레시`.

## 15. retention failure bin /rɪˈtɛnʃən ˈfeɪljər bɪn/
**Part of speech:** noun
**Core meaning (English):** a manufacturing or test category for devices that lose stored data before the required retention interval.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhóm phân loại device không giữ data đủ lâu.
**Grammar & collocations:** `retention-failure-bin threshold` — threshold; `bin a marginal die` — phân loại.
**Examples:** `The retention failure bin grew when the low-voltage lot was tested at high temperature.` → Bin lỗi retention tăng ở lot điện áp thấp, nhiệt cao.
**Liên kết tiếng Hàn:** `보존 실패 빈`.

## 16. command-address parity /kəˈmænd əˈdrɛs ˈpærəti/
**Part of speech:** noun
**Core meaning (English):** a parity check applied to command and address signals to detect transfer corruption.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parity kiểm tra command và address.
**Grammar & collocations:** `command-address-parity error` — error; `flag a corrupted command` — đánh dấu.
**Examples:** `Command-address parity caught a single-bit fault before it selected the wrong bank.` → Parity bắt lỗi bit trước khi chọn nhầm bank.
**Liên kết tiếng Hàn:** `명령 주소 패리티`.

## 17. write leveling /raɪt ˈlɛvəlɪŋ/
**Part of speech:** noun
**Core meaning (English):** calibrating write timing so signals arrive within the valid window at each memory component.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** căn timing write cho từng die/channel.
**Grammar & collocations:** `write-leveling sequence` — sequence; `align a strobe` — căn.
**Examples:** `Write leveling compensated for unequal trace lengths between the controller and stacked dies.` → Leveling bù độ dài trace không đều.
**Liên kết tiếng Hàn:** `쓰기 레벨링`.

## 18. read gate training /riː ɡeɪt ˈtreɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** calibrating the timing window that captures valid read data from a memory interface.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** căn cửa sổ đọc data hợp lệ.
**Grammar & collocations:** `read-gate-training sweep` — sweep; `center a capture window` — căn giữa.
**Examples:** `Read gate training centered the sampling window after temperature changed the flight time.` → Training căn cửa sổ sau khi nhiệt đổi flight time.
**Liên kết tiếng Hàn:** `읽기 게이트 트레이닝`.

## 19. stacked-memory interface /stækt ˈmɛməri ˈɪntərˌfeɪs/
**Part of speech:** noun
**Core meaning (English):** the electrical and protocol boundary connecting a controller to a multi-die memory stack.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới điện/protocol giữa controller và stack.
**Grammar & collocations:** `stacked-memory-interface budget` — budget; `qualify a wide link` — qualification.
**Examples:** `The stacked-memory interface met bandwidth targets but failed the cold-start margin.` → Interface đạt bandwidth nhưng fail margin khởi động lạnh.
**Liên kết tiếng Hàn:** `적층 메모리 인터페이스`.

## 20. memory-controller telemetry /ˈmɛməri kənˈtroʊlər təˈlɛmɪtri/
**Part of speech:** noun
**Core meaning (English):** runtime measurements from a memory controller about errors, temperature, timing margin, and traffic behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** telemetry runtime của controller về lỗi, nhiệt, timing và traffic.
**Grammar & collocations:** `memory-controller-telemetry stream` — stream; `trend correctable errors` — theo dõi.
**Examples:** `Memory-controller telemetry showed a rising correctable-error rate before an uncorrectable event.` → Telemetry cho thấy lỗi sửa được tăng trước lỗi không sửa được.
**Liên kết tiếng Hàn:** `메모리 컨트롤러 텔레메트리`.

## Review in context

**High-bandwidth memory** relies on a **memory-stack controller** and **through-silicon-via redundancy**. **Rowhammer susceptibility** and a **refresh-window violation** are influenced by **bank-group scheduling** and **pseudo-channel** traffic. **Data-bus inversion**, **on-die ECC**, and an **error containment code** reduce interface risk, while **link training margin** and a **memory repair signature** guide qualification. **Spare-row remap**, **thermal-aware refresh**, and a **retention failure bin** handle weak regions. **Command-address parity**, **write leveling**, **read gate training**, the **stacked-memory interface**, and **memory-controller telemetry** complete the reliability picture.

**Bản dịch tiếng Việt:** **High-bandwidth memory** dựa vào **memory-stack controller** và **through-silicon-via redundancy**. **Rowhammer susceptibility** và **refresh-window violation** chịu ảnh hưởng của traffic **bank-group scheduling** và **pseudo-channel**. **Data-bus inversion**, **on-die ECC** và **error containment code** giảm rủi ro interface, còn **link training margin** và **memory repair signature** hỗ trợ qualification. **Spare-row remap**, **thermal-aware refresh** và **retention failure bin** xử lý vùng yếu. **Command-address parity**, **write leveling**, **read gate training**, **stacked-memory interface** và **memory-controller telemetry** hoàn tất bức tranh reliability.
