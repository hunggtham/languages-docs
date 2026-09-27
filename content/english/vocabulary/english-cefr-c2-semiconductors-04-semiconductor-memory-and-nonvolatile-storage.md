# C2 Vocabulary — Semiconductor memory and nonvolatile storage

This lesson follows semiconductor memory from volatile cell organization and sensing through flash-memory reliability and emerging nonvolatile technologies.

Flow: **SRAM → DRAM → memory cell → wordline → bitline → sense amplifier → refresh cycle → retention time → NAND flash → floating-gate transistor → charge-trap flash → program/erase cycle → endurance → read disturb → program disturb → wear leveling → nonvolatile memory → phase-change memory → magnetoresistive RAM → resistive RAM**.

## 1. SRAM /ˈɛsˌræm/
**Part of speech:** noun
**Core meaning (English):** static random-access memory that stores each bit in a bistable circuit and retains data as long as power is supplied without periodic refresh.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** SRAM; hình dung mỗi bit được giữ bằng một mạch transistor ổn định, rất nhanh nhưng tốn nhiều diện tích hơn DRAM.
**Grammar & collocations:** `SRAM cell` — cell SRAM; `on-chip SRAM` — SRAM trên chip; `SRAM cache` — cache dùng SRAM.
**Examples:** `Processors use SRAM for caches because its access latency is much lower than that of main memory.` → Processor dùng SRAM cho cache vì access latency thấp hơn nhiều so với main memory.
**Liên kết tiếng Hàn:** `에스램`, `정적 램`.

## 2. DRAM /ˈdiːˌræm/
**Part of speech:** noun
**Core meaning (English):** dynamic random-access memory that stores each bit as electrical charge and must be periodically refreshed because that charge leaks away.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** DRAM; hình dung mỗi bit là một lượng điện tích nhỏ trong capacitor, rẻ và mật độ cao nhưng phải được refresh liên tục.
**Grammar & collocations:** `DRAM array` — mảng DRAM; `DRAM module` — module DRAM; `dynamic memory` — bộ nhớ động.
**Examples:** `DRAM provides dense main memory but requires refresh operations even when the stored data is unchanged.` → DRAM cung cấp main memory mật độ cao nhưng vẫn cần refresh dù dữ liệu không thay đổi.
**Liên kết tiếng Hàn:** `디램`, `동적 램`.

## 3. memory cell /ˈmɛməri sɛl/
**Part of speech:** noun
**Core meaning (English):** the smallest physical circuit or device structure designed to store one or more bits of information in a memory array.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cell bộ nhớ; hình dung một “ô” nhỏ nhất trong memory array, nơi bit thực sự được lưu bằng điện tích, trạng thái transistor hoặc vật liệu.
**Grammar & collocations:** `memory-cell array` — mảng cell bộ nhớ; `cell density` — mật độ cell; `cell state` — trạng thái cell.
**Examples:** `Reducing memory-cell area increases capacity but often makes sensing and reliability more difficult.` → Giảm diện tích memory cell làm tăng dung lượng nhưng thường khiến sensing và reliability khó hơn.
**Liên kết tiếng Hàn:** `메모리 셀`.

## 4. wordline /ˈwɝdˌlaɪn/
**Part of speech:** noun
**Core meaning (English):** a control line in a memory array that selects a row of cells for reading, writing, or programming.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường chọn hàng; hình dung wordline chạy ngang qua nhiều cell và bật cả một row để các cell đó có thể được truy cập.
**Grammar & collocations:** `wordline voltage` — điện áp wordline; `activate a wordline` — kích hoạt wordline; `wordline driver` — mạch driver wordline.
**Examples:** `The controller raised the selected wordline while keeping neighboring rows inactive.` → Controller tăng điện áp wordline được chọn trong khi giữ các row lân cận không hoạt động.
**Liên kết tiếng Hàn:** `워드라인`.

## 5. bitline /ˈbɪtˌlaɪn/
**Part of speech:** noun
**Core meaning (English):** a signal line in a memory array that carries data or sensing current between selected cells and peripheral circuitry.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường dữ liệu của cột; hình dung bitline chạy dọc qua nhiều cell và mang tín hiệu đọc/ghi giữa cell với sense amplifier.
**Grammar & collocations:** `bitline capacitance` — điện dung bitline; `precharge the bitline` — precharge bitline; `bitline pair` — cặp bitline.
**Examples:** `A tiny voltage change on the bitline was amplified into a full digital value.` → Một thay đổi điện áp rất nhỏ trên bitline được khuếch đại thành giá trị digital đầy đủ.
**Liên kết tiếng Hàn:** `비트라인`.

## 6. sense amplifier /sɛns ˈæmpləˌfaɪər/
**Part of speech:** noun
**Core meaning (English):** a circuit that detects and amplifies the small electrical difference produced when a memory cell is read.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạch khuếch đại đọc; hình dung cell chỉ tạo tín hiệu rất nhỏ, sense amplifier biến nó thành 0 hoặc 1 rõ ràng.
**Grammar & collocations:** `sense-amplifier offset` — offset của sense amplifier; `read sensing` — sensing khi đọc; `differential sense amplifier` — sense amplifier vi sai.
**Examples:** `The sense amplifier resolved the weak bitline signal before the data reached the memory controller.` → Sense amplifier phân giải tín hiệu bitline yếu trước khi dữ liệu tới memory controller.
**Liên kết tiếng Hàn:** `센스 앰프`, `감지 증폭기`.

## 7. refresh cycle /rɪˈfrɛʃ ˈsaɪkəl/
**Part of speech:** noun
**Core meaning (English):** a periodic operation that restores charge in volatile memory cells before stored information decays.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chu kỳ refresh; hình dung DRAM phải định kỳ “nạp lại” điện tích vào cell trước khi bit mờ đi.
**Grammar & collocations:** `DRAM refresh cycle` — chu kỳ refresh DRAM; `refresh interval` — khoảng refresh; `refresh overhead` — overhead do refresh.
**Examples:** `Higher temperatures can require more aggressive refresh cycles because stored charge leaks faster.` → Nhiệt độ cao có thể đòi hỏi refresh thường xuyên hơn vì điện tích lưu bị rò nhanh hơn.
**Liên kết tiếng Hàn:** `리프레시 주기`.

## 8. retention time /rɪˈtɛnʃən taɪm/
**Part of speech:** noun
**Core meaning (English):** the length of time a memory cell can preserve its stored state before the information becomes unreliable or must be refreshed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thời gian giữ dữ liệu; hình dung một cell có thể “nhớ” bit trong bao lâu trước khi trạng thái yếu đi.
**Grammar & collocations:** `data-retention time` — thời gian giữ dữ liệu; `retention failure` — lỗi retention; `retention specification` — thông số retention.
**Examples:** `Weak DRAM cells have shorter retention time and must be refreshed sooner than typical cells.` → Cell DRAM yếu có retention time ngắn hơn và phải được refresh sớm hơn cell bình thường.
**Liên kết tiếng Hàn:** `데이터 유지 시간`, `보존 시간`.

## 9. NAND flash /nænd flæʃ/
**Part of speech:** noun
**Core meaning (English):** high-density nonvolatile flash memory organized so strings of memory transistors share connections, enabling compact storage at the cost of more complex access.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** NAND flash; hình dung nhiều transistor memory nối thành chuỗi để đạt mật độ rất cao, dùng phổ biến trong SSD và storage device.
**Grammar & collocations:** `3D NAND flash` — NAND 3D; `NAND array` — mảng NAND; `flash-storage device` — thiết bị lưu trữ flash.
**Examples:** `Modern SSDs rely on dense 3D NAND flash with many vertically stacked layers.` → SSD hiện đại dựa vào NAND flash 3D mật độ cao với nhiều layer xếp dọc.
**Liên kết tiếng Hàn:** `낸드 플래시`.

## 10. floating-gate transistor /ˈfloʊtɪŋ ɡeɪt trænˈzɪstər/
**Part of speech:** noun
**Core meaning (English):** a transistor containing an electrically isolated gate that stores charge and thereby changes the device's threshold voltage.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** transistor floating gate; hình dung một gate “cô lập” có thể giữ electron lâu dài, và lượng điện tích đó biểu diễn dữ liệu.
**Grammar & collocations:** `floating-gate charge` — điện tích floating gate; `program the floating gate` — nạp floating gate; `threshold shift` — dịch threshold.
**Examples:** `Programming the floating-gate transistor changes its threshold voltage by adding stored charge.` → Programming transistor floating gate làm đổi threshold voltage bằng cách thêm điện tích lưu trữ.
**Liên kết tiếng Hàn:** `플로팅 게이트 트랜지스터`.

## 11. charge-trap flash /tʃɑrdʒ træp flæʃ/
**Part of speech:** noun
**Core meaning (English):** flash memory that stores electrons in localized trapping sites within an insulating layer rather than in one continuous floating conductor.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** flash dùng lớp bẫy điện tích; hình dung electron được giữ ở nhiều trap nhỏ trong dielectric thay vì nằm trên một floating gate kim loại liên tục.
**Grammar & collocations:** `charge-trap layer` — lớp bẫy điện tích; `charge-trap memory` — memory dùng charge trap; `trap distribution` — phân bố trap.
**Examples:** `Charge-trap flash is widely used in vertically stacked NAND architectures.` → Charge-trap flash được dùng rộng rãi trong kiến trúc NAND xếp chồng theo chiều dọc.
**Liên kết tiếng Hàn:** `차지 트랩 플래시`, `전하 트랩 메모리`.

## 12. program/erase cycle /ˈproʊɡræm ɪˈreɪs ˈsaɪkəl/
**Part of speech:** noun
**Core meaning (English):** one complete sequence of writing charge into a nonvolatile memory cell and later erasing or resetting that stored state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một chu kỳ ghi/xóa; hình dung mỗi lần flash được program rồi erase là một vòng stress lên vật liệu cách điện và cell.
**Grammar & collocations:** `P/E cycle` — chu kỳ program/erase; `cycle count` — số chu kỳ; `cycling stress` — stress do lặp ghi/xóa.
**Examples:** `Repeated program/erase cycles gradually degrade the tunnel dielectric in flash memory.` → Các program/erase cycle lặp lại dần làm suy giảm tunnel dielectric trong flash memory.
**Liên kết tiếng Hàn:** `프로그램/소거 사이클`, `P/E 사이클`.

## 13. endurance /ɪnˈdʊrəns/
**Part of speech:** noun
**Core meaning (English):** the number of write or program/erase operations a memory device can tolerate before reliability falls below specification.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ bền ghi/xóa; hình dung memory có “tuổi thọ thao tác” giới hạn — có thể rewrite bao nhiêu lần trước khi cell xuống cấp.
**Grammar & collocations:** `write endurance` — độ bền ghi; `endurance limit` — giới hạn endurance; `high-endurance memory` — memory chịu nhiều lần ghi.
**Examples:** `Enterprise storage workloads demand higher endurance because the same physical blocks may be rewritten frequently.` → Workload storage doanh nghiệp cần endurance cao hơn vì cùng block vật lý có thể bị rewrite thường xuyên.
**Liên kết tiếng Hàn:** `쓰기 내구성`, `내구성`.

## 14. read disturb /riːd dɪˈstɝb/
**Part of speech:** noun
**Core meaning (English):** unintended alteration or degradation of stored data caused by repeatedly reading nearby or selected memory cells.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi disturb do đọc; hình dung chỉ đọc dữ liệu nhiều lần cũng tạo điện áp stress lên cell lân cận và có thể làm trạng thái của chúng trôi dần.
**Grammar & collocations:** `read-disturb error` — lỗi read disturb; `read-disturb mitigation` — giảm read disturb; `disturb threshold` — ngưỡng disturb.
**Examples:** `The controller periodically relocates data from blocks approaching the read-disturb limit.` → Controller định kỳ chuyển dữ liệu khỏi các block gần chạm giới hạn read disturb.
**Liên kết tiếng Hàn:** `읽기 교란`, `리드 디스터브`.

## 15. program disturb /ˈproʊɡræm dɪˈstɝb/
**Part of speech:** noun
**Core meaning (English):** unintended change in unselected memory cells caused by the voltages applied while programming neighboring cells.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi disturb do ghi; hình dung khi ghi một cell, điện áp cao cũng tác động lên cell xung quanh và có thể đẩy trạng thái của chúng lệch đi.
**Grammar & collocations:** `program-disturb failure` — lỗi program disturb; `disturb coupling` — coupling gây disturb; `program inhibit` — cơ chế ngăn cell không được chọn bị program.
**Examples:** `Careful biasing reduces program disturb in densely packed NAND strings.` → Biasing cẩn thận giúp giảm program disturb trong các chuỗi NAND mật độ cao.
**Liên kết tiếng Hàn:** `프로그램 교란`, `프로그램 디스터브`.

## 16. wear leveling /wɛr ˈlɛvəlɪŋ/
**Part of speech:** noun
**Core meaning (English):** a storage-management technique that distributes writes across physical memory blocks so no small set wears out prematurely.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân bố hao mòn; hình dung controller không ghi mãi vào vài block quen thuộc mà xoay vòng để toàn bộ flash “mòn đều”.
**Grammar & collocations:** `dynamic wear leveling` — wear leveling động; `static wear leveling` — wear leveling tĩnh; `wear-leveling algorithm` — thuật toán wear leveling.
**Examples:** `Wear leveling extends SSD lifetime by spreading erase cycles across many flash blocks.` → Wear leveling kéo dài tuổi thọ SSD bằng cách phân tán erase cycle trên nhiều block flash.
**Liên kết tiếng Hàn:** `웨어 레벨링`, `마모 평준화`.

## 17. nonvolatile memory /ˌnɑnvɑlətəl ˈmɛməri/
**Part of speech:** noun
**Core meaning (English):** memory that retains stored information even after electrical power is removed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ nhớ không mất dữ liệu khi tắt nguồn; đối lập với SRAM/DRAM phải có điện để giữ trạng thái.
**Grammar & collocations:** `nonvolatile storage` — lưu trữ không bay hơi; `embedded nonvolatile memory` — NVM tích hợp; `persistent state` — trạng thái được giữ lâu dài.
**Examples:** `Nonvolatile memory allows configuration data to survive a complete power cycle.` → Nonvolatile memory cho phép dữ liệu cấu hình tồn tại sau khi tắt và bật nguồn hoàn toàn.
**Liên kết tiếng Hàn:** `비휘발성 메모리`.

## 18. phase-change memory /feɪz tʃeɪndʒ ˈmɛməri/
**Part of speech:** noun
**Core meaning (English):** nonvolatile memory that stores data by switching a material between structural phases with different electrical resistance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ nhớ đổi pha; hình dung vật liệu chuyển giữa trạng thái crystalline và amorphous, mỗi trạng thái có resistance khác nhau để biểu diễn bit.
**Grammar & collocations:** `PCM cell` — cell phase-change memory; `phase-change material` — vật liệu đổi pha; `resistance state` — trạng thái điện trở.
**Examples:** `Phase-change memory encodes information by controlling the resistance of a nanoscale material region.` → Phase-change memory mã hóa thông tin bằng cách điều khiển điện trở của một vùng vật liệu nano.
**Liên kết tiếng Hàn:** `상변화 메모리`, `PCM`.

## 19. magnetoresistive RAM /mæɡˌniːtoʊrɪˈzɪstɪv ræm/
**Part of speech:** noun
**Core meaning (English):** nonvolatile random-access memory that stores information in magnetic states whose relative orientation changes electrical resistance.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** MRAM; hình dung bit được lưu bằng hướng từ của các layer, và hướng tương đối làm resistance khác nhau để đọc 0/1.
**Grammar & collocations:** `MRAM cell` — cell MRAM; `spin-transfer torque MRAM` — STT-MRAM; `magnetic tunnel junction` — junction xuyên hầm từ.
**Examples:** `Magnetoresistive RAM combines nonvolatility with fast random access and high write endurance.` → MRAM kết hợp khả năng giữ dữ liệu khi mất nguồn với random access nhanh và write endurance cao.
**Liên kết tiếng Hàn:** `자기저항 메모리`, `MRAM`.

## 20. resistive RAM /rɪˈzɪstɪv ræm/
**Part of speech:** noun
**Core meaning (English):** nonvolatile memory that stores information by switching a material or device between distinct resistance states.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ReRAM/RRAM; hình dung một cấu trúc vật liệu có thể tạo hoặc phá đường dẫn dẫn điện cực nhỏ, từ đó chuyển giữa resistance cao và thấp.
**Grammar & collocations:** `ReRAM cell` — cell ReRAM; `resistive switching` — chuyển trạng thái điện trở; `conductive filament` — filament dẫn điện.
**Examples:** `Resistive RAM stores bits by creating and rupturing conductive paths inside a switching layer.` → ReRAM lưu bit bằng cách tạo và phá các đường dẫn dẫn điện bên trong lớp switching.
**Liên kết tiếng Hàn:** `저항변화 메모리`, `ReRAM`.

## Review in context

Modern chips use **SRAM** when very low latency matters and **DRAM** when high density is more important. In either case, a **memory cell** is selected through a **wordline** and communicates over a **bitline**, while a **sense amplifier** turns a weak physical signal into a reliable digital value. DRAM also requires a periodic **refresh cycle** because each cell has finite **retention time**. For persistent storage, **NAND flash** uses devices such as the **floating-gate transistor** or **charge-trap flash**. Repeated **program/erase cycles** limit write **endurance**, and dense arrays must manage both **read disturb** and **program disturb**. SSD controllers use **wear leveling** to spread this damage across blocks. More broadly, **nonvolatile memory** includes emerging technologies such as **phase-change memory**, **magnetoresistive RAM**, and **resistive RAM**, each of which stores information through a different physical state rather than relying on ordinary volatile charge storage.

**Bản dịch tiếng Việt:** Chip hiện đại dùng **SRAM** khi cần latency cực thấp và **DRAM** khi mật độ cao quan trọng hơn. Trong cả hai trường hợp, một **memory cell** được chọn qua **wordline** và truyền tín hiệu qua **bitline**, còn **sense amplifier** biến tín hiệu vật lý yếu thành giá trị digital đáng tin cậy. DRAM còn cần **refresh cycle** định kỳ vì mỗi cell có **retention time** hữu hạn. Với storage giữ dữ liệu lâu dài, **NAND flash** dùng các thiết bị như **floating-gate transistor** hoặc **charge-trap flash**. Các **program/erase cycle** lặp lại giới hạn **endurance**, và mảng mật độ cao phải kiểm soát cả **read disturb** lẫn **program disturb**. SSD controller dùng **wear leveling** để phân tán sự hao mòn này giữa các block. Rộng hơn, **nonvolatile memory** còn gồm các công nghệ mới như **phase-change memory**, **magnetoresistive RAM** và **resistive RAM**, mỗi loại lưu thông tin bằng một trạng thái vật lý khác nhau thay vì dựa vào lưu điện tích volatile thông thường.
