# C2 Vocabulary — Semiconductor test flow and package screening

This lesson follows a packaged device through test planning, fault modeling, automated equipment, contact hardware, and screening.

Flow: **test flow → test program → pattern set → test vector → at-speed test → bridging fault → open fault → short fault → delay fault → path delay test → test access port → boundary scan register → automatic test equipment → load board → interface board → probe needle → handler throughput → package screening → burn-in board → socket wear**.

## 1. test flow /ˈtest floʊ/
**Part of speech:** noun
**Core meaning (English):** the ordered sequence of setup, measurements, decisions, and handling steps used to test a device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi setup, measurement, quyết định và handling theo thứ tự để test device.
**Grammar & collocations:** `test-flow revision` — revision; `optimize a screen sequence` — tối ưu.
**Examples:** `The test flow moved continuity checks ahead of the expensive functional vectors.` → Flow đưa check continuity lên trước vector function tốn thời gian.
**Liên kết tiếng Hàn:** `테스트 플로우`.

## 2. test program /ˈtest ˌproʊɡræm/
**Part of speech:** noun
**Core meaning (English):** the software and data that instruct a tester how to exercise and judge a device.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** software và data chỉ tester cách kích thích và đánh giá device.
**Grammar & collocations:** `test-program release` — release; `compile a tester sequence` — biên dịch.
**Examples:** `The new test program added a current limit before enabling the power stage.` → Program mới thêm limit trước bật stage nguồn.
**Liên kết tiếng Hàn:** `테스트 프로그램`.

## 3. pattern set /ˈpætərn set/
**Part of speech:** noun
**Core meaning (English):** a collection of digital or analog stimulus patterns applied during a test.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập pattern digital/analog áp trong test.
**Grammar & collocations:** `pattern-set generation` — tạo; `load a diagnostic pattern` — nạp.
**Examples:** `The pattern set covered normal operation and the rare reset sequence.` → Tập pattern bao gồm operation thường và sequence reset hiếm.
**Liên kết tiếng Hàn:** `패턴 세트`.

## 4. test vector /ˈtest ˈvektər/
**Part of speech:** noun
**Core meaning (English):** one defined set of input values and expected outputs used to test logic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một bộ input và output kỳ vọng để test logic.
**Grammar & collocations:** `test-vector comparison` — so sánh; `apply a stimulus` — áp.
**Examples:** `A failing test vector isolated the arithmetic corner case.` → Vector fail cô lập corner case arithmetic.
**Liên kết tiếng Hàn:** `테스트 벡터`.

## 5. at-speed test /æt spiːd test/
**Part of speech:** noun
**Core meaning (English):** testing a circuit at or near its intended operating frequency rather than at a slow diagnostic rate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test circuit ở frequency vận hành thay vì rate diagnostic chậm.
**Grammar & collocations:** `at-speed-test coverage` — coverage; `exercise a timing path` — kích thích.
**Examples:** `At-speed test exposed a marginal path that static tests never reached.` → Test at-speed lộ path biên mà test tĩnh không tới.
**Liên kết tiếng Hàn:** `실속도 테스트`.

## 6. bridging fault /ˈbrɪdʒɪŋ fɔːlt/
**Part of speech:** noun
**Core meaning (English):** an unintended conductive connection between two otherwise separate circuit nodes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kết nối dẫn điện ngoài ý muốn giữa hai node lẽ ra tách.
**Grammar & collocations:** `bridging-fault model` — model; `detect an adjacent short` — phát hiện.
**Examples:** `The pattern set detected a bridging fault between two control lines.` → Pattern bắt lỗi nối cầu giữa hai line.
**Liên kết tiếng Hàn:** `브리징 결함`.

## 7. open fault /ˈoʊpən fɔːlt/
**Part of speech:** noun
**Core meaning (English):** an unintended break that prevents current or a signal from crossing a circuit path.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đứt ngoài ý muốn ngăn dòng hoặc signal đi qua path.
**Grammar & collocations:** `open-fault signature` — signature; `detect a broken trace` — phát hiện.
**Examples:** `The continuity test identified an open fault at the package lead.` → Test continuity bắt lỗi hở ở chân package.
**Liên kết tiếng Hàn:** `개방 결함`.

## 8. short fault /ˈʃɔːrt fɔːlt/
**Part of speech:** noun
**Core meaning (English):** an unintended low-resistance connection that diverts current or joins incompatible nodes.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nối điện trở thấp ngoài ý muốn, làm lệch dòng hoặc nối node không hợp.
**Grammar & collocations:** `short-fault protection` — bảo vệ; `isolate a supply rail` — cô lập.
**Examples:** `The tester shut down the rail after detecting a short fault on the output.` → Tester tắt rail sau bắt short ở output.
**Liên kết tiếng Hàn:** `단락 결함`.

## 9. delay fault /dɪˈleɪ fɔːlt/
**Part of speech:** noun
**Core meaning (English):** a defect that makes a signal arrive too late even though its final logic value is correct.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** defect làm signal đến trễ dù giá trị logic cuối đúng.
**Grammar & collocations:** `delay-fault coverage` — coverage; `miss a timing limit` — lỡ.
**Examples:** `The at-speed screen caught a delay fault after temperature rose.` → Screen at-speed bắt delay fault khi nhiệt tăng.
**Liên kết tiếng Hàn:** `지연 결함`.

## 10. path delay test /pæθ dɪˈleɪ test/
**Part of speech:** noun
**Core meaning (English):** a test that launches and captures transitions to measure a specific logic path's timing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test phát và thu transition để đo timing một logic path cụ thể.
**Grammar & collocations:** `path-delay-test pattern` — pattern; `launch and capture` — phát/thu.
**Examples:** `The path delay test ranked the slowest paths before final binning.` → Test xếp các path chậm trước binning cuối.
**Liên kết tiếng Hàn:** `경로 지연 테스트`.

## 11. test access port /ˈtest ˈækses pɔːrt/
**Part of speech:** noun
**Core meaning (English):** a standardized interface used to enter test mode and shift data into or out of internal test logic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interface chuẩn để vào test mode và shift data với logic test bên trong.
**Grammar & collocations:** `test-access-port controller` — controller; `shift a scan instruction` — shift.
**Examples:** `The test access port exposed the internal chain without changing functional pins.` → Port test lộ chain mà không đổi pin function.
**Liên kết tiếng Hàn:** `테스트 액세스 포트`.

## 12. boundary scan register /ˈbaʊndəri skæn ˈredʒɪstər/
**Part of speech:** noun
**Core meaning (English):** a register of test cells placed around a chip boundary to observe or drive package pins.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** register cell test quanh biên chip để quan sát/drive pin package.
**Grammar & collocations:** `boundary-scan-register bit` — bit; `capture a pin state` — chụp.
**Examples:** `The boundary scan register checked the connector pins before system assembly.` → Register scan kiểm tra pin connector trước assembly.
**Liên kết tiếng Hàn:** `경계 스캔 레지스터`.

## 13. automatic test equipment /ˌɔːtəˈmætɪk test ɪˈkwɪpmənt/
**Part of speech:** noun
**Core meaning (English):** programmable equipment that supplies stimuli, measures responses, and makes test decisions automatically.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết bị lập trình tự cấp stimulus, đo response và quyết định.
**Grammar & collocations:** `automatic-test-equipment platform` — platform; `run a production screen` — chạy.
**Examples:** `The automatic test equipment synchronized power, patterns, and thermal control.` → ATE đồng bộ nguồn, pattern và nhiệt.
**Liên kết tiếng Hàn:** `자동 테스트 장비`.

## 14. load board /ˈloʊd bɔːrd/
**Part of speech:** noun
**Core meaning (English):** the tester board that routes signals and supplies power between equipment and a device under test.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** board tester route signal và nguồn giữa equipment và DUT.
**Grammar & collocations:** `load-board impedance` — impedance; `route a high-speed channel` — route.
**Examples:** `The load board added controlled termination near the device socket.` → Board thêm termination kiểm soát gần socket.
**Liên kết tiếng Hàn:** `로드 보드`.

## 15. interface board /ˈɪntərfeɪs bɔːrd/
**Part of speech:** noun
**Core meaning (English):** an intermediate board that adapts tester signals, mechanics, or power to a package or module.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** board trung gian chuyển signal, cơ khí hoặc nguồn cho package/module.
**Grammar & collocations:** `interface-board revision` — revision; `adapt a pinout` — chuyển.
**Examples:** `The interface board translated the tester pinout to the multi-die module.` → Board chuyển pinout tester sang module multi-die.
**Liên kết tiếng Hàn:** `인터페이스 보드`.

## 16. probe needle /ˈproʊb ˈniːdəl/
**Part of speech:** noun
**Core meaning (English):** a fine conductive tip that makes temporary contact with a test pad or package feature.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đầu dẫn điện nhỏ chạm tạm vào test pad/package.
**Grammar & collocations:** `probe-needle mark` — vết; `replace a worn tip` — thay.
**Examples:** `A bent probe needle created unstable contact during the memory screen.` → Kim probe cong tạo contact không ổn.
**Liên kết tiếng Hàn:** `프로브 바늘`.

## 17. handler throughput /ˈhændlər ˈθruːpʊt/
**Part of speech:** noun
**Core meaning (English):** the rate at which a handler loads, moves, and unloads devices for testing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tốc độ handler load, chuyển và unload device để test.
**Grammar & collocations:** `handler-throughput limit` — giới hạn; `index a package` — chuyển bước.
**Examples:** `Handler throughput became the bottleneck after test time was reduced.` → Throughput handler thành bottleneck sau giảm test time.
**Liên kết tiếng Hàn:** `핸들러 처리량`.

## 18. package screening /ˈpækɪdʒ ˈskriːnɪŋ/
**Part of speech:** noun
**Core meaning (English):** testing packaged devices to remove units with latent mechanical, electrical, or environmental weaknesses.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test device đóng gói để loại weakness cơ khí, điện hoặc môi trường tiềm ẩn.
**Grammar & collocations:** `package-screening flow` — flow; `screen a latent defect` — sàng lọc.
**Examples:** `Package screening removed units with weak wire bonds before shipment.` → Screening loại unit bond dây yếu trước giao.
**Liên kết tiếng Hàn:** `패키지 스크리닝`.

## 19. burn-in board /ˈbɜːrn ɪn bɔːrd/
**Part of speech:** noun
**Core meaning (English):** a board that powers many devices during elevated-stress operation for burn-in testing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** board cấp nguồn nhiều device trong operation stress cao để burn-in.
**Grammar & collocations:** `burn-in-board socket` — socket; `age a batch` — chạy già hóa.
**Examples:** `The burn-in board held ninety-six packages at the elevated voltage.` → Board burn-in giữ 96 package ở voltage cao.
**Liên kết tiếng Hàn:** `번인 보드`.

## 20. socket wear /ˈsɑːkət wer/
**Part of speech:** noun
**Core meaning (English):** gradual degradation of a test socket's mechanical or electrical contact after repeated insertions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** contact cơ khí/điện của socket test xuống cấp sau nhiều lần cắm.
**Grammar & collocations:** `socket-wear limit` — giới hạn; `replace a contactor` — thay.
**Examples:** `Socket wear increased contact resistance and created intermittent rejects.` → Mòn socket tăng resistance và tạo reject chập chờn.
**Liên kết tiếng Hàn:** `소켓 마모`.

## Review in context

A production **test flow** runs a **test program** with a **pattern set** and each **test vector**; an **at-speed test** exposes timing defects. Models include a **bridging fault**, **open fault**, **short fault**, and **delay fault**, while a **path delay test** measures a specific path. A **test access port** and **boundary scan register** observe package pins. **automatic test equipment** drives a **load board** and **interface board** through each **probe needle**. **handler throughput** limits output, so **package screening** uses a **burn-in board** while tracking **socket wear**.

**Bản dịch tiếng Việt:** **Test flow** production chạy **test program** với **pattern set** và từng **test vector**; **at-speed test** lộ lỗi timing. Model gồm **bridging fault**, **open fault**, **short fault** và **delay fault**, còn **path delay test** đo path cụ thể. **Test access port** và **boundary scan register** quan sát pin package. **automatic test equipment** điều khiển **load board** và **interface board** qua từng **probe needle**. **handler throughput** giới hạn output, nên **package screening** dùng **burn-in board** và theo dõi **socket wear**.
