# C2 Vocabulary — Compiled artifacts and runtime linking

This lesson follows a source module through name resolution, code generation, binary interfaces, and the loader that assembles a running process.

Flow: **module resolver → name resolution → type checker → code generation → optimization pass → parser recovery → syntax error → semantic error → build artifact → cross compilation → binary interface → application binary interface → object file → relocation entry → symbol visibility → dynamic loader → shared library → static library → link-time optimization → whole-program optimization**.

## 1. module resolver /ˈmɒdjuːl rɪˈzɒlvər/
**Part of speech:** noun
**Core meaning (English):** a tool that maps an imported module name to the source or package that provides it.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tool map tên module import tới source hoặc package cung cấp nó.
**Grammar & collocations:** `module-resolver cache` — cache; `resolve an import specifier` — phân giải.
**Examples:** `The module resolver selected the workspace copy instead of the published package.` → Resolver chọn bản workspace thay package đã publish.
**Liên kết tiếng Hàn:** `모듈 확인자`.

## 2. name resolution /neɪm ˌrezəˈluːʃən/
**Part of speech:** noun
**Core meaning (English):** determining which declaration a name refers to in its scope and context.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác định name trỏ tới declaration nào trong scope và context.
**Grammar & collocations:** `name-resolution rule` — rule; `resolve an overloaded identifier` — phân giải.
**Examples:** `Name resolution chose the local method before considering an inherited overload.` → Resolution chọn method local trước overload kế thừa.
**Liên kết tiếng Hàn:** `이름 확인`.

## 3. type checker /taɪp ˈtʃekər/
**Part of speech:** noun
**Core meaning (English):** a compiler component that verifies whether expressions and operations use compatible types.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thành phần compiler kiểm tra expression/operation dùng type tương thích.
**Grammar & collocations:** `type-checker error` — lỗi; `check a generic constraint` — kiểm tra.
**Examples:** `The type checker rejected the callback because its result could be null.` → Checker từ chối callback vì kết quả có thể null.
**Liên kết tiếng Hàn:** `타입 검사기`.

## 4. code generation /koʊd ˌdʒenəˈreɪʃən/
**Part of speech:** noun
**Core meaning (English):** producing target instructions or executable representation from an analyzed program.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sinh instruction đích hoặc representation thực thi từ program đã phân tích.
**Grammar & collocations:** `code-generation backend` — backend; `emit target instructions` — phát.
**Examples:** `Code generation emitted vector instructions for the loop over pixels.` → Generation phát instruction vector cho loop pixel.
**Liên kết tiếng Hàn:** `코드 생성`.

## 5. optimization pass /ˌɒptɪmaɪˈzeɪʃən pɑːs/
**Part of speech:** noun
**Core meaning (English):** one compiler transformation that attempts to improve speed, size, energy use, or another metric.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một phép biến đổi compiler nhằm cải thiện speed, size, energy hoặc metric khác.
**Grammar & collocations:** `optimization-pass pipeline` — pipeline; `run a profitability check` — chạy.
**Examples:** `The optimization pass simplified the branch only when the code-size budget allowed it.` → Pass chỉ đơn giản branch khi đủ ngân sách size.
**Liên kết tiếng Hàn:** `최적화 패스`.

## 6. parser recovery /ˈpɑːrsər rɪˈkʌvəri/
**Part of speech:** noun
**Core meaning (English):** a parser strategy for continuing after a syntax problem so it can report further errors.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chiến lược parser tiếp tục sau lỗi syntax để báo thêm lỗi.
**Grammar & collocations:** `parser-recovery boundary` — boundary; `synchronize at a delimiter` — đồng bộ.
**Examples:** `Parser recovery let the editor underline three malformed declarations in one pass.` → Recovery giúp editor gạch ba declaration sai trong một lượt.
**Liên kết tiếng Hàn:** `파서 복구`.

## 7. syntax error /ˈsɪntæks ˈerər/
**Part of speech:** noun
**Core meaning (English):** a violation of the formal structure required by a programming language.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** vi phạm cấu trúc hình thức mà ngôn ngữ lập trình yêu cầu.
**Grammar & collocations:** `syntax-error span` — vùng; `report an unexpected token` — báo.
**Examples:** `The missing closing brace caused a syntax error before type checking.` → Thiếu brace đóng gây lỗi syntax trước type check.
**Liên kết tiếng Hàn:** `구문 오류`.

## 8. semantic error /sɪˈmæntɪk ˈerər/
**Part of speech:** noun
**Core meaning (English):** a program error in meaning or constraints even though its syntax is valid.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** lỗi về nghĩa hoặc constraint dù syntax hợp lệ.
**Grammar & collocations:** `semantic-error message` — message; `reject an invalid conversion` — từ chối.
**Examples:** `The compiler reported a semantic error because the resource was used after disposal.` → Compiler báo lỗi nghĩa vì resource dùng sau dispose.
**Liên kết tiếng Hàn:** `의미 오류`.

## 9. build artifact /bɪld ˈɑːrtɪfækt/
**Part of speech:** noun
**Core meaning (English):** a file or package produced by a build, such as a binary, archive, or generated manifest.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** file/package do build sinh ra như binary, archive hoặc manifest.
**Grammar & collocations:** `build-artifact repository` — repository; `publish a signed artifact` — phát hành.
**Examples:** `The pipeline attached the build artifact to the release record with a checksum.` → Pipeline gắn artifact với release và checksum.
**Liên kết tiếng Hàn:** `빌드 산출물`.

## 10. cross compilation /krɔːs ˌkɒmpɪˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** compiling software on one platform so that it runs on a different target platform.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** compile trên platform này để chạy trên target platform khác.
**Grammar & collocations:** `cross-compilation toolchain` — toolchain; `target an embedded board` — nhắm.
**Examples:** `Cross compilation produced the firmware on a server that used a different processor.` → Compilation sinh firmware trên server khác processor.
**Liên kết tiếng Hàn:** `크로스 컴파일`.

## 11. binary interface /ˈbaɪnəri ˈɪntərfeɪs/
**Part of speech:** noun
**Core meaning (English):** the machine-level contract governing how compiled components exchange calls and data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** contract cấp máy quy định component compiled trao đổi call và data.
**Grammar & collocations:** `binary-interface compatibility` — compatibility; `preserve a layout contract` — giữ.
**Examples:** `The vendor changed the binary interface and required every plugin to be rebuilt.` → Vendor đổi interface khiến plugin phải build lại.
**Liên kết tiếng Hàn:** `바이너리 인터페이스`.

## 12. application binary interface /ˌæplɪˈkeɪʃən ˈbaɪnəri ˈɪntərfeɪs/
**Part of speech:** noun
**Core meaning (English):** a platform-specific convention for calls, data layout, registers, and binary compatibility.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy ước platform về call, layout data, register và tương thích binary.
**Grammar & collocations:** `application-binary-interface version` — version; `match the platform ABI` — khớp.
**Examples:** `The extension matched the host application binary interface after a compiler upgrade.` → Extension khớp ABI host sau nâng compiler.
**Liên kết tiếng Hàn:** `애플리케이션 바이너리 인터페이스`.

## 13. object file /ˈɒbdʒɪkt faɪl/
**Part of speech:** noun
**Core meaning (English):** a partially linked compiled file containing code, data, symbols, and unresolved references.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** file compiled chưa link hết, chứa code, data, symbol và reference chưa resolve.
**Grammar & collocations:** `object-file section` — section; `inspect an undefined symbol` — kiểm tra.
**Examples:** `The linker combined each object file after resolving its external references.` → Linker ghép object sau khi resolve reference ngoài.
**Liên kết tiếng Hàn:** `오브젝트 파일`.

## 14. relocation entry /ˌriːləˈkeɪʃən ˈentri/
**Part of speech:** noun
**Core meaning (English):** metadata telling a linker or loader how to adjust an address when code is placed elsewhere.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata bảo linker/loader chỉnh địa chỉ khi code đặt nơi khác.
**Grammar & collocations:** `relocation-entry type` — type; `patch an absolute address` — vá.
**Examples:** `The loader applied a relocation entry when it mapped the library at a randomized address.` → Loader áp entry khi map library ở địa chỉ ngẫu nhiên.
**Liên kết tiếng Hàn:** `재배치 항목`.

## 15. symbol visibility /ˈsɪmbəl ˌvɪzəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** rules determining which compiled names can be referenced from outside their component.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** rule quyết định tên compiled nào được component ngoài tham chiếu.
**Grammar & collocations:** `symbol-visibility attribute` — attribute; `hide an internal helper` — ẩn.
**Examples:** `Symbol visibility kept the helper private and reduced the exported surface.` → Visibility giữ helper private và giảm surface export.
**Liên kết tiếng Hàn:** `심볼 가시성`.

## 16. dynamic loader /daɪˈnæmɪk ˈloʊdər/
**Part of speech:** noun
**Core meaning (English):** an operating-system component that maps shared code and resolves its runtime dependencies.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thành phần OS map code dùng chung và resolve dependency lúc chạy.
**Grammar & collocations:** `dynamic-loader search path` — search path; `load a dependency lazily` — nạp.
**Examples:** `The dynamic loader found the compatible library before starting the service.` → Loader tìm library tương thích trước khi start service.
**Liên kết tiếng Hàn:** `동적 로더`.

## 17. shared library /ʃerd ˈlaɪbreri/
**Part of speech:** noun
**Core meaning (English):** compiled code that multiple processes can load and use from one maintained image.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** code compiled nhiều process cùng load và dùng từ một image.
**Grammar & collocations:** `shared-library dependency` — dependency; `load a versioned library` — nạp.
**Examples:** `The service reused a shared library instead of embedding another copy of the parser.` → Service dùng library chung thay vì nhúng parser khác.
**Liên kết tiếng Hàn:** `공유 라이브러리`.

## 18. static library /ˈstætɪk ˈlaɪbreri/
**Part of speech:** noun
**Core meaning (English):** an archive of object files copied into a program during linking.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** archive object files được copy vào program lúc link.
**Grammar & collocations:** `static-library archive` — archive; `link a selected object` — link.
**Examples:** `The embedded image linked the crypto routines from a static library.` → Image nhúng link routine crypto từ library tĩnh.
**Liên kết tiếng Hàn:** `정적 라이브러리`.

## 19. link-time optimization /ˈlɪŋk taɪm ˌɒptɪmaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** optimization performed while linking, when the compiler can inspect multiple compiled units together.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tối ưu lúc link khi compiler xem được nhiều unit compiled cùng nhau.
**Grammar & collocations:** `link-time-optimization flag` — flag; `inline across a module boundary` — inline.
**Examples:** `Link-time optimization removed a wrapper that separate compilation had preserved.` → LTO xóa wrapper mà compile riêng giữ lại.
**Liên kết tiếng Hàn:** `링크 시간 최적화`.

## 20. whole-program optimization /hoʊl ˈproʊɡræm ˌɒptɪmaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** optimization that reasons about the complete program rather than one module at a time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tối ưu suy luận trên toàn program thay vì từng module.
**Grammar & collocations:** `whole-program-optimization budget` — ngân sách; `prove a function is unreachable` — chứng minh.
**Examples:** `Whole-program optimization proved that the compatibility shim was never called.` → Optimization chứng minh shim tương thích không bao giờ được gọi.
**Liên kết tiếng Hàn:** `전체 프로그램 최적화`.

## Review in context

A **module resolver** performs **name resolution** before a **type checker** validates use. **Code generation** emits target instructions, and an **optimization pass** improves them; **parser recovery** keeps reporting after a **syntax error**, while a **semantic error** concerns valid form with invalid meaning. The compiler emits a **build artifact** and may use **cross compilation**. Its **binary interface** and **application binary interface** govern compatibility; an **object file** carries a **relocation entry**, and **symbol visibility** controls exports. A **dynamic loader** maps a **shared library**, while a **static library** is copied during linking. **Link-time optimization** and **whole-program optimization** can then reason across module boundaries.

**Bản dịch tiếng Việt:** **Module resolver** thực hiện **name resolution** trước khi **type checker** xác nhận cách dùng. **Code generation** sinh instruction đích, còn **optimization pass** cải thiện chúng; **parser recovery** tiếp tục báo lỗi sau **syntax error**, trong khi **semantic error** là form hợp lệ nhưng nghĩa sai. Compiler sinh **build artifact** và có thể dùng **cross compilation**. **Binary interface** và **application binary interface** quy định tương thích; **object file** mang **relocation entry**, còn **symbol visibility** kiểm soát export. **Dynamic loader** map **shared library**, còn **static library** được copy lúc link. **Link-time optimization** và **whole-program optimization** có thể suy luận qua ranh giới module.
