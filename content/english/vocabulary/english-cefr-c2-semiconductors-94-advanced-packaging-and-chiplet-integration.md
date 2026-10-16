# C2 Vocabulary — Advanced packaging and chiplet integration

This lesson connects chiplet assembly, fine-pitch interconnects, package co-design, and reliability evidence across electrical and thermal domains.

Flow: **chiplet interconnect → bond void → thermocompression bond → fine-pitch redistribution → fan-out package → substrate escape → package co-design → signal-integrity co-simulation → thermal-mechanical co-design → assembly yield → interposer leakage → bump electromigration → dielectric interposer → mold compound bleed → package keep-out → stiffener frame → substrate resonance → warpage metrology → bond-line thickness → void fraction**.

## 1. chiplet interconnect /ˈtʃɪplət ˌɪntərkəˈnekt/
**Part of speech:** noun
**Core meaning (English):** a connection network that links separately fabricated chiplets inside one package.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** network connection nối các chiplet chế tạo riêng trong cùng package.
**Grammar & collocations:** `chiplet-interconnect topology` — topology; `route die-to-die traffic` — route traffic giữa die.
**Examples:** `The chiplet interconnect carried cache traffic across the silicon bridge.` → Interconnect chiplet mang cache traffic qua silicon bridge.
**Liên kết tiếng Hàn:** `칩렛 인터커넥트`.

## 2. bond void /bɑːnd vɔɪd/
**Part of speech:** noun
**Core meaning (English):** an unbonded pocket trapped between surfaces that should form a continuous joint.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pocket không bonded bị kẹt giữa các surface lẽ ra tạo joint liên tục.
**Grammar & collocations:** `bond-void inspection` — inspection; `remove trapped gas` — loại gas bị kẹt.
**Examples:** `A bond void reduced the thermal path beneath the high-power chiplet.` → Void bond làm giảm thermal path dưới chiplet công suất cao.
**Liên kết tiếng Hàn:** `접합 공극`.

## 3. thermocompression bond /ˌθɜːrmoʊkəmˈpreʃən bɑːnd/
**Part of speech:** noun
**Core meaning (English):** a joint formed by applying heat and pressure to create metallic or hybrid bonding.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** joint tạo bằng nhiệt và pressure để hình thành bonding kim loại hoặc hybrid.
**Grammar & collocations:** `thermocompression-bond profile` — profile; `apply controlled bonding force` — áp lực bonding có kiểm soát.
**Examples:** `The thermocompression bond required a narrow temperature window to avoid substrate bow.` → Bond thermocompression cần temperature window hẹp để tránh bow substrate.
**Liên kết tiếng Hàn:** `열압착 접합`.

## 4. fine-pitch redistribution /faɪn pɪtʃ ˌriːdɪstrəˈbjuːʃən/
**Part of speech:** noun
**Core meaning (English):** rerouting dense die connections into a larger-pitch pattern through very small package traces.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** route lại connection die dày thành pattern pitch lớn hơn bằng trace package rất nhỏ.
**Grammar & collocations:** `fine-pitch-redistribution layer` — layer; `fan signals to package balls` — fan signal tới ball package.
**Examples:** `Fine-pitch redistribution shortened the escape route but tightened overlay tolerance.` → Redistribution pitch nhỏ rút ngắn escape route nhưng siết tolerance overlay.
**Liên kết tiếng Hàn:** `미세 피치 재배선`.

## 5. fan-out package /fæn aʊt ˈpækɪdʒ/
**Part of speech:** noun
**Core meaning (English):** a package in which connections extend beyond the footprint of the original die.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** package có connection mở rộng ra ngoài footprint die ban đầu.
**Grammar & collocations:** `fan-out-package substrate` — substrate; `extend package I/O` — mở rộng I/O package.
**Examples:** `The fan-out package increased I/O count without a conventional laminate substrate.` → Package fan-out tăng I/O mà không cần laminate substrate thông thường.
**Liên kết tiếng Hàn:** `팬아웃 패키지`.

## 6. substrate escape /ˈsʌbstreɪt ɪˈskeɪp/
**Part of speech:** noun
**Core meaning (English):** routing that moves dense package connections through or away from a substrate region.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** routing đưa connection package dày qua hoặc ra khỏi vùng substrate.
**Grammar & collocations:** `substrate-escape constraint` — constraint; `clear a dense ball field` — mở đường qua ball field dày.
**Examples:** `Substrate escape determined the minimum spacing between the two chiplets.` → Escape substrate quyết định spacing tối thiểu giữa hai chiplet.
**Liên kết tiếng Hàn:** `기판 이스케이프`.

## 7. package co-design /ˈpækɪdʒ koʊ dɪˈzaɪn/
**Part of speech:** noun
**Core meaning (English):** joint optimization of die, package, substrate, power, thermal, and signal structures.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tối ưu chung die, package, substrate, power, thermal và signal structure.
**Grammar & collocations:** `package-co-design workflow` — workflow; `trade routing against cooling` — cân routing với cooling.
**Examples:** `Package co-design moved a capacitor closer to the chiplet edge.` → Co-design package đưa capacitor gần mép chiplet hơn.
**Liên kết tiếng Hàn:** `패키지 공동 설계`.

## 8. signal-integrity co-simulation /ˈsɪɡnəl ɪnˈteɡrəti koʊ ˌsɪmjəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** simulation that combines package, board, driver, receiver, and channel models to predict link behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** simulation gộp model package, board, driver, receiver và channel để dự đoán link.
**Grammar & collocations:** `signal-integrity-co-simulation deck` — deck; `correlate package and board models` — correlate model package và board.
**Examples:** `Signal-integrity co-simulation predicted eye closure before the prototype was assembled.` → Co-simulation integrity signal dự đoán eye closure trước khi lắp prototype.
**Liên kết tiếng Hàn:** `신호 무결성 공동 시뮬레이션`.

## 9. thermal-mechanical co-design /ˈθɜːrməl məˈkænɪkəl koʊ dɪˈzaɪn/
**Part of speech:** noun
**Core meaning (English):** joint design of heat flow and mechanical stress so that cooling does not create damaging deformation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thiết kế chung heat flow và stress cơ để cooling không tạo deformation gây damage.
**Grammar & collocations:** `thermal-mechanical-co-design constraint` — constraint; `balance cooling and warpage` — cân cooling và warpage.
**Examples:** `Thermal-mechanical co-design reduced stress at the corner solder joints.` → Co-design thermal-mechanical giảm stress ở solder joint góc.
**Liên kết tiếng Hàn:** `열-기계 공동 설계`.

## 10. assembly yield /əˈsembli jiːld/
**Part of speech:** noun
**Core meaning (English):** the fraction of packages that complete assembly while meeting structural and electrical requirements.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** fraction package hoàn tất assembly và đạt requirement structural, electrical.
**Grammar & collocations:** `assembly-yield loss` — loss; `improve placement accuracy` — cải thiện accuracy placement.
**Examples:** `Assembly yield fell when the new tool increased bond misalignment.` → Yield assembly giảm khi tool mới tăng misalignment bond.
**Liên kết tiếng Hàn:** `조립 수율`.

## 11. interposer leakage /ˌɪntərˈpoʊzər ˈliːkɪdʒ/
**Part of speech:** noun
**Core meaning (English):** unwanted current flowing through or across an interposer dielectric or routing structure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** current không mong muốn chạy qua dielectric hoặc routing structure của interposer.
**Grammar & collocations:** `interposer-leakage path` — path; `isolate adjacent supplies` — cô lập supply liền kề.
**Examples:** `Interposer leakage increased after humidity entered a cracked dielectric layer.` → Leakage interposer tăng sau khi ẩm vào layer dielectric nứt.
**Liên kết tiếng Hàn:** `인터포저 누설`.

## 12. bump electromigration /bʌmp ɪˌlektrəʊmaɪˈɡreɪʃən/
**Part of speech:** noun
**Core meaning (English):** current-driven atomic movement that degrades a fine solder or metal bump.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** atom movement do current làm degradation solder bump hoặc metal bump mảnh.
**Grammar & collocations:** `bump-electromigration lifetime` — lifetime; `balance current density` — cân current density.
**Examples:** `Bump electromigration concentrated at the hottest power-delivery corner.` → Electromigration bump tập trung ở góc power-delivery nóng nhất.
**Liên kết tiếng Hàn:** `범프 일렉트로마이그레이션`.

## 13. dielectric interposer /ˌdaɪɪˈlektrɪk ˌɪntərˈpoʊzər/
**Part of speech:** noun
**Core meaning (English):** an insulating interposer that routes signals or power through embedded conductors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** interposer cách điện route signal hoặc power bằng conductor embedded.
**Grammar & collocations:** `dielectric-interposer loss` — loss; `embed a redistribution layer` — embed layer redistribution.
**Examples:** `The dielectric interposer reduced parasitic capacitance between adjacent chiplets.` → Interposer dielectric giảm capacitance ký sinh giữa chiplet liền kề.
**Liên kết tiếng Hàn:** `유전체 인터포저`.

## 14. mold compound bleed /moʊld ˈkɑːmpaʊnd bliːd/
**Part of speech:** noun
**Core meaning (English):** unwanted flow of molding compound into a protected gap, pad, or optical opening.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mold compound chảy vào gap, pad hoặc optical opening cần bảo vệ.
**Grammar & collocations:** `mold-compound-bleed defect` — defect; `mask a sensitive opening` — che opening nhạy.
**Examples:** `Mold compound bleed covered part of the fine-pitch redistribution pad.` → Bleed compound mold phủ một phần pad redistribution pitch nhỏ.
**Liên kết tiếng Hàn:** `몰드 컴파운드 번짐`.

## 15. package keep-out /ˈpækɪdʒ kiːp aʊt/
**Part of speech:** noun
**Core meaning (English):** a reserved area where components, traces, or mechanical features must not be placed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng reserved không được đặt component, trace hoặc feature cơ.
**Grammar & collocations:** `package-keep-out region` — region; `reserve space for thermal expansion` — dành chỗ cho thermal expansion.
**Examples:** `The package keep-out protected the lid hinge from a tall capacitor.` → Keep-out package bảo vệ hinge lid khỏi capacitor cao.
**Liên kết tiếng Hàn:** `패키지 배치 금지 영역`.

## 16. stiffener frame /ˈstɪfənər freɪm/
**Part of speech:** noun
**Core meaning (English):** a reinforcing frame that limits package flexure during handling, bonding, or operation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** frame gia cường giới hạn flexure package khi handling, bonding hoặc vận hành.
**Grammar & collocations:** `stiffener-frame attachment` — attachment; `reduce package bending` — giảm bending package.
**Examples:** `The stiffener frame reduced warpage during the reflow cycle.` → Frame stiffener giảm warpage trong reflow cycle.
**Liên kết tiếng Hàn:** `보강 프레임`.

## 17. substrate resonance /ˈsʌbstreɪt ˈrezənəns/
**Part of speech:** noun
**Core meaning (English):** a mechanical or electrical resonant mode of a package substrate.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mode resonance cơ hoặc điện của substrate package.
**Grammar & collocations:** `substrate-resonance mode` — mode; `damp a board vibration` — giảm rung board.
**Examples:** `Substrate resonance coupled package vibration into the optical alignment.` → Resonance substrate ghép rung package vào alignment quang.
**Liên kết tiếng Hàn:** `기판 공진`.

## 18. warpage metrology /ˈwɔːrpɪdʒ məˈtrɑːlədʒi/
**Part of speech:** noun
**Core meaning (English):** measurement of package or substrate deformation across temperature or assembly stages.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** measurement deformation package hoặc substrate qua temperature hoặc stage assembly.
**Grammar & collocations:** `warpage-metrology scan` — scan; `map out-of-plane displacement` — map displacement ngoài mặt phẳng.
**Examples:** `Warpage metrology found a peak after molding but before singulation.` → Metrology warpage tìm peak sau molding nhưng trước singulation.
**Liên kết tiếng Hàn:** `뒤틀림 계측`.

## 19. bond-line thickness /bɑːnd laɪn ˈθɪknəs/
**Part of speech:** noun
**Core meaning (English):** the thickness of adhesive, solder, or bonding material between joined surfaces.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** độ dày adhesive, solder hoặc bonding material giữa các surface joined.
**Grammar & collocations:** `bond-line-thickness uniformity` — uniformity; `control a thermal interface gap` — kiểm soát gap interface nhiệt.
**Examples:** `Bond-line thickness varied near the corner and raised local thermal resistance.` → Thickness line-bond thay đổi gần góc và tăng thermal resistance cục bộ.
**Liên kết tiếng Hàn:** `접합선 두께`.

## 20. void fraction /vɔɪd ˈfrækʃən/
**Part of speech:** noun
**Core meaning (English):** the proportion of a bonded or molded volume occupied by empty regions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ volume bonded hoặc molded bị chiếm bởi vùng rỗng.
**Grammar & collocations:** `void-fraction limit` — limit; `quantify internal porosity` — định lượng porosity bên trong.
**Examples:** `The void fraction stayed below the thermal qualification limit.` → Fraction void vẫn dưới limit qualification thermal.
**Liên kết tiếng Hàn:** `공극 분율`.

## Review in context

A **chiplet interconnect** depends on a reliable **bond void** limit, **thermocompression bond**, **fine-pitch redistribution**, **fan-out package**, and **substrate escape**. **Package co-design**, **signal-integrity co-simulation**, and **thermal-mechanical co-design** protect **assembly yield** from **interposer leakage** and **bump electromigration**. A **dielectric interposer**, **mold compound bleed**, **package keep-out**, and **stiffener frame** affect **substrate resonance**, **warpage metrology**, **bond-line thickness**, and final **void fraction**.

**Bản dịch tiếng Việt:** **Chiplet interconnect** phụ thuộc vào giới hạn **bond void** đáng tin, **thermocompression bond**, **fine-pitch redistribution**, **fan-out package** và **substrate escape**. **Package co-design**, **signal-integrity co-simulation** và **thermal-mechanical co-design** bảo vệ **assembly yield** khỏi **interposer leakage** và **bump electromigration**. **Dielectric interposer**, **mold compound bleed**, **package keep-out** và **stiffener frame** ảnh hưởng **substrate resonance**, **warpage metrology**, **bond-line thickness** và **void fraction** cuối cùng.
