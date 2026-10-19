# C2 Vocabulary — WebAssembly and portable execution

This lesson follows portable code from a WebAssembly module through host integration, capability security, component interfaces, and optimized execution.

Flow: **WebAssembly module → linear memory → import object → export section → host function → capability sandbox → WASI → component model → interface type → canonical ABI → module linking → ahead-of-time compilation → tiered compilation → JIT fallback → stack switching → fuel metering → deterministic execution → runtime embedding → cross-compilation target → feature detection**.

## 1. WebAssembly module /ˈwɛb əˈsɛmbli ˈmɑdʒuːl/
**Part of speech:** noun
**Core meaning (English):** a compiled package of WebAssembly code, declarations, and metadata that a compatible runtime can load.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gói code portable có thể load trong browser, server hoặc ứng dụng nhúng.
**Grammar & collocations:** `compile a WebAssembly module` — biên dịch; `module validation` — kiểm tra module.
**Examples:** `The WebAssembly module loaded in the browser without rebuilding the host application.` → Module WebAssembly chạy trong browser mà không cần build lại host application.
**Liên kết tiếng Hàn:** `웹어셈블리 모듈`.

## 2. linear memory /ˈlɪniər ˈmɛməri/
**Part of speech:** noun
**Core meaning (English):** a contiguous, byte-addressable memory region exposed to WebAssembly code.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vùng nhớ phẳng mà code WebAssembly truy cập bằng địa chỉ byte.
**Grammar & collocations:** `grow linear memory` — mở rộng; `linear-memory bounds` — giới hạn.
**Examples:** `The runtime grew linear memory when the image-processing buffer became larger.` → Runtime mở rộng linear memory khi buffer xử lý ảnh lớn hơn.
**Liên kết tiếng Hàn:** `선형 메모리`.

## 3. import object /ˈɪmpɔrt ˈɑbdʒɛkt/
**Part of speech:** noun
**Core meaning (English):** a host-provided collection of functions, memories, tables, or values required by a module at instantiation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gói dependency mà host đưa cho module khi khởi tạo.
**Grammar & collocations:** `provide an import object` — cung cấp; `resolve imports` — resolve import.
**Examples:** `The import object exposed a clock and a restricted logging function.` → Import object cung cấp clock và logging function bị giới hạn.
**Liên kết tiếng Hàn:** `임포트 객체`.

## 4. export section /ˈɛkspɔrt ˈsɛkʃən/
**Part of speech:** noun
**Core meaning (English):** the part of a module that names functions, memories, tables, or globals visible to its host.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phần khai báo những thành phần module cho phép host gọi hoặc đọc.
**Grammar & collocations:** `declare an export section` — khai báo; `exported function` — function được export.
**Examples:** `The export section exposed only the parser entry point and a status value.` → Export section chỉ lộ parser entry point và một status value.
**Liên kết tiếng Hàn:** `익스포트 섹션`.

## 5. host function /hoʊst ˈfʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** a function implemented by the embedding application and made callable by guest code.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hàm của host được đưa vào để module gọi khi cần dịch vụ bên ngoài.
**Grammar & collocations:** `register a host function` — đăng ký; `host-function boundary` — ranh giới.
**Examples:** `A host function returned the current locale without granting filesystem access.` → Host function trả locale hiện tại mà không cấp quyền filesystem.
**Liên kết tiếng Hàn:** `호스트 함수`.

## 6. capability sandbox /ˌkeɪpəˈbɪləti ˈsændbɑks/
**Part of speech:** noun
**Core meaning (English):** an isolated execution environment whose authority is limited to explicitly granted capabilities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sandbox không chỉ cô lập process mà còn giới hạn đúng capability được cấp.
**Grammar & collocations:** `capability-sandbox policy` — policy; `run inside a capability sandbox` — chạy trong.
**Examples:** `The capability sandbox allowed network access only to the approved endpoint.` → Sandbox chỉ cho phép network tới endpoint đã duyệt.
**Liên kết tiếng Hàn:** `능력 기반 샌드박스`.

## 7. WASI /ˈwɑːsi/
**Part of speech:** noun
**Core meaning (English):** a standardized system interface that lets WebAssembly programs use selected operating-system services through portable APIs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lớp API hệ thống có kiểm soát để WebAssembly chạy ngoài browser.
**Grammar & collocations:** `WASI preview` — phiên bản preview; `WASI interface` — interface WASI.
**Examples:** `The command-line tool used WASI to read an explicitly mounted input file.` → Công cụ dòng lệnh dùng WASI để đọc file input được mount rõ ràng.
**Liên kết tiếng Hàn:** `WASI 시스템 인터페이스`.

## 8. component model /kəmˈpoʊnənt ˈmɑdʒuːl/
**Part of speech:** noun
**Core meaning (English):** a specification for composing portable WebAssembly components through typed interfaces and standardized boundaries.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình ghép các component WebAssembly khác ngôn ngữ qua interface có kiểu.
**Grammar & collocations:** `component-model adapter` — adapter; `compose components` — ghép component.
**Examples:** `The component model let a Rust service call a function implemented in another language.` → Component model cho service Rust gọi function viết bằng ngôn ngữ khác.
**Liên kết tiếng Hàn:** `컴포넌트 모델`.

## 9. interface type /ˈɪntərfeɪs taɪp/
**Part of speech:** noun
**Core meaning (English):** a language-neutral type used to describe values exchanged across a component boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểu dữ liệu chung giúp hai component hiểu string, record, list hoặc result.
**Grammar & collocations:** `interface-type definition` — định nghĩa; `map an interface type` — ánh xạ.
**Examples:** `The interface type described a result record with an error list and a retry hint.` → Interface type mô tả record kết quả có danh sách lỗi và gợi ý retry.
**Liên kết tiếng Hàn:** `인터페이스 타입`.

## 10. canonical ABI /kəˈnɑnɪkəl ˌeɪ biː ˈaɪ/
**Part of speech:** noun
**Core meaning (English):** a standardized calling convention that converts component-level values into a representation suitable for a WebAssembly boundary.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy tắc ABI chung để đổi kiểu dữ liệu giàu thông tin thành dạng truyền qua boundary.
**Grammar & collocations:** `canonical ABI lowering` — hạ biểu diễn; `canonical ABI lift` — nâng biểu diễn.
**Examples:** `The canonical ABI lowered a string into a pointer and length before the call.` → Canonical ABI hạ string thành pointer và length trước khi gọi.
**Liên kết tiếng Hàn:** `표준 ABI`.

## 11. module linking /ˈmɑdʒuːl ˈlɪŋkɪŋ/
**Part of speech:** noun
**Core meaning (English):** the process of connecting imports and exports from separate modules so they operate as one composition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nối module độc lập bằng cách ghép đúng import với export tương ứng.
**Grammar & collocations:** `module-linking step` — bước linking; `link modules` — link module.
**Examples:** `Module linking connected the policy engine to the host's authorization service.` → Module linking nối policy engine với authorization service của host.
**Liên kết tiếng Hàn:** `모듈 연결`.

## 12. ahead-of-time compilation /əˌhɛd əv ˈtaɪm ˌkɑmpəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** compilation performed before execution so a runtime can start with prebuilt native code.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** compile trước khi chạy, đổi thời gian khởi động lấy artifact được chuẩn bị sẵn.
**Grammar & collocations:** `ahead-of-time compiler` — compiler; `AOT compilation cache` — cache AOT.
**Examples:** `Ahead-of-time compilation shortened startup for a command that ran only once.` → AOT rút ngắn startup cho command chỉ chạy một lần.
**Liên kết tiếng Hàn:** `사전 컴파일`.

## 13. tiered compilation /tɪrd ˌkɑmpəˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** an execution strategy that begins with inexpensive code generation and later applies more expensive optimization to hot code.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** compile theo tầng: chạy nhanh trước, tối ưu sâu sau khi biết đoạn code nóng.
**Grammar & collocations:** `tiered-compilation policy` — policy; `promote hot code` — nâng code nóng.
**Examples:** `Tiered compilation gave the service quick startup and optimized its busiest handler later.` → Tiered compilation giúp startup nhanh rồi tối ưu handler bận nhất.
**Liên kết tiếng Hàn:** `계층적 컴파일`.

## 14. JIT fallback /dʒɪt ˈfɔlˌbæk/
**Part of speech:** noun
**Core meaning (English):** a just-in-time compilation path used when precompiled code cannot support the current target or feature set.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đường dự phòng compile lúc chạy khi artifact có sẵn không phù hợp.
**Grammar & collocations:** `trigger a JIT fallback` — kích hoạt; `fallback compiler` — compiler dự phòng.
**Examples:** `The runtime used a JIT fallback when the cached native artifact lacked a required instruction.` → Runtime dùng JIT fallback khi artifact cache thiếu instruction cần thiết.
**Liên kết tiếng Hàn:** `JIT 대체 경로`.

## 15. stack switching /stæk ˈswɪtʃɪŋ/
**Part of speech:** noun
**Core meaning (English):** changing the active call stack so execution can move between coroutines, fibers, or separately managed tasks.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi stack đang hoạt động để chuyển sang coroutine hoặc task khác.
**Grammar & collocations:** `stack-switching primitive` — primitive; `perform a stack switch` — thực hiện.
**Examples:** `Stack switching let the runtime suspend a guest task without blocking the host thread.` → Stack switching cho runtime tạm dừng guest task mà không block host thread.
**Liên kết tiếng Hàn:** `스택 전환`.

## 16. fuel metering /fjuəl ˈmiːtərɪŋ/
**Part of speech:** noun
**Core meaning (English):** limiting execution by charging an instruction budget that is consumed as code runs.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mỗi instruction “đốt fuel”; hết ngân sách thì guest bị dừng để tránh chạy vô hạn.
**Grammar & collocations:** `fuel-metering limit` — giới hạn; `consume execution fuel` — tiêu thụ fuel.
**Examples:** `Fuel metering stopped an untrusted module after it exceeded its instruction budget.` → Fuel metering dừng module không tin cậy khi vượt ngân sách instruction.
**Liên kết tiếng Hàn:** `연료 계량`.

## 17. deterministic execution /dɪˌtɝmɪˈnɪstɪk ˌɛksəˈkjuːʃən/
**Part of speech:** noun
**Core meaning (English):** execution whose observable result is reproducible for the same inputs and controlled environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cùng input và môi trường kiểm soát thì kết quả lặp lại được.
**Grammar & collocations:** `deterministic-execution mode` — chế độ; `preserve determinism` — giữ tính xác định.
**Examples:** `Deterministic execution made the policy test reproducible across build machines.` → Deterministic execution khiến test policy tái lập được trên nhiều máy build.
**Liên kết tiếng Hàn:** `결정론적 실행`.

## 18. runtime embedding /ˈrʌnˌtaɪm ɛmˈbɛdɪŋ/
**Part of speech:** noun
**Core meaning (English):** integrating a language runtime inside another application so the application can load and execute guest code.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhúng runtime vào app chính để app load và chạy code guest.
**Grammar & collocations:** `runtime-embedding API` — API; `embed a runtime` — nhúng runtime.
**Examples:** `Runtime embedding allowed the database to execute user-defined filters in isolation.` → Runtime embedding cho database chạy filter do user định nghĩa trong isolation.
**Liên kết tiếng Hàn:** `런타임 임베딩`.

## 19. cross-compilation target /ˌkrɔs kəmˌpəˈleɪʃən ˈtɑrɡət/
**Part of speech:** noun
**Core meaning (English):** a platform specification for which a compiler produces code while running on a different platform.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** target platform khác với máy đang compile, rất hữu ích cho deployment đa kiến trúc.
**Grammar & collocations:** `select a cross-compilation target` — chọn; `target triple` — bộ ba target.
**Examples:** `The build selected a cross-compilation target for a small ARM gateway.` → Build chọn cross-compilation target cho gateway ARM nhỏ.
**Liên kết tiếng Hàn:** `크로스 컴파일 대상`.

## 20. feature detection /ˈfiːtʃər dɪˈtɛkʃən/
**Part of speech:** noun
**Core meaning (English):** checking at runtime whether a platform or module supports a particular instruction, API, or capability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** kiểm tra capability thực tế trước khi chọn code path tương thích.
**Grammar & collocations:** `feature-detection check` — kiểm tra; `detect SIMD support` — phát hiện hỗ trợ SIMD.
**Examples:** `Feature detection selected the vectorized path only when the target supported it.` → Feature detection chỉ chọn path vector khi target hỗ trợ.
**Liên kết tiếng Hàn:** `기능 감지`.

## Review in context

A **WebAssembly module** uses **linear memory** and receives an **import object** while exposing an **export section**. A **host function** runs across a **capability sandbox**, and **WASI** supplies selected system services. The **component model** connects modules through an **interface type** and a **canonical ABI**; **module linking** joins the pieces. **Ahead-of-time compilation** can provide fast startup, while **tiered compilation** and a **JIT fallback** optimize code later. **Stack switching** supports cooperative tasks, **fuel metering** limits untrusted work, and **deterministic execution** improves reproducibility. Through **runtime embedding**, an application can choose a **cross-compilation target** and use **feature detection** before selecting an implementation.

**Bản dịch tiếng Việt:** Một **WebAssembly module** dùng **linear memory** và nhận **import object**, đồng thời công khai **export section**. **Host function** chạy qua **capability sandbox**, còn **WASI** cung cấp một số dịch vụ hệ thống được chọn. **Component model** kết nối module bằng **interface type** và **canonical ABI**; **module linking** ghép các phần lại. **Ahead-of-time compilation** có thể giúp startup nhanh, còn **tiered compilation** và **JIT fallback** tối ưu code về sau. **Stack switching** hỗ trợ task hợp tác, **fuel metering** giới hạn công việc không tin cậy, và **deterministic execution** cải thiện khả năng tái lập. Qua **runtime embedding**, ứng dụng có thể chọn **cross-compilation target** và dùng **feature detection** trước khi chọn implementation.
