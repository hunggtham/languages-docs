# C2 Vocabulary — Compiler front ends and static analysis

This lesson follows source code from characters and grammar through semantic models, static reasoning, diagnostics, and repeatable builds.

Flow: **lexical analyzer → token stream → parser combinator → grammar production → semantic analysis → symbol table → control flow graph → data flow analysis → dead code elimination → call graph → linker script → debug information → source map → macro expansion → partial evaluation → program slice → taint analysis → lint rule → compiler diagnostic → incremental compilation**.

## 1. lexical analyzer /ˈleksɪkəl ˈænəlaɪzər/
**Part of speech:** noun
**Core meaning (English):** a compiler component that converts a character sequence into meaningful tokens.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thành phần compiler đổi chuỗi ký tự thành token có nghĩa.
**Grammar & collocations:** `lexical-analyzer state` — trạng thái; `scan a source file` — quét.
**Examples:** `The lexical analyzer rejected the unterminated string before parsing began.` → Analyzer từ chối chuỗi chưa đóng trước khi parse.
**Liên kết tiếng Hàn:** `어휘 분석기`.

## 2. token stream /ˈtoʊkən striːm/
**Part of speech:** noun
**Core meaning (English):** an ordered sequence of tokens passed from lexical processing to a parser.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dãy token có thứ tự chuyển từ lexical processing sang parser.
**Grammar & collocations:** `token-stream buffer` — buffer; `consume the next token` — đọc.
**Examples:** `The parser inspected the token stream without revisiting the original characters.` → Parser đọc stream mà không quay lại ký tự gốc.
**Liên kết tiếng Hàn:** `토큰 스트림`.

## 3. parser combinator /ˈpɑːrsər ˈkɒmbɪneɪtər/
**Part of speech:** noun
**Core meaning (English):** a reusable parser built by composing smaller parsers as ordinary functions or rules.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** parser tái sử dụng được tạo bằng cách ghép parser nhỏ.
**Grammar & collocations:** `parser-combinator library` — thư viện; `compose an expression parser` — ghép.
**Examples:** `A parser combinator handled optional annotations without duplicating the grammar.` → Combinator xử lý annotation tùy chọn không lặp grammar.
**Liên kết tiếng Hàn:** `파서 조합자`.

## 4. grammar production /ˈɡræmər prəˈdʌkʃən/
**Part of speech:** noun
**Core meaning (English):** one formal rule describing how a language construct can be formed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một rule hình thức mô tả cách tạo construct ngôn ngữ.
**Grammar & collocations:** `grammar-production rule` — rule; `expand a nonterminal` — mở rộng.
**Examples:** `The new grammar production allowed a trailing comma in argument lists.` → Production mới cho phép dấu phẩy cuối danh sách đối số.
**Liên kết tiếng Hàn:** `문법 생성 규칙`.

## 5. semantic analysis /sɪˈmæntɪk əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** compiler processing that checks meaning, types, scope, and other rules beyond syntax.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xử lý compiler kiểm tra nghĩa, type, scope ngoài syntax.
**Grammar & collocations:** `semantic-analysis phase` — phase; `validate a type relationship` — kiểm tra.
**Examples:** `Semantic analysis caught the assignment to a read-only binding.` → Semantic analysis bắt assignment vào binding chỉ đọc.
**Liên kết tiếng Hàn:** `의미 분석`.

## 6. symbol table /ˈsɪmbəl ˈteɪbəl/
**Part of speech:** noun
**Core meaning (English):** a compiler data structure mapping names to declarations, types, scopes, and other metadata.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cấu trúc compiler map tên với declaration, type, scope và metadata.
**Grammar & collocations:** `symbol-table entry` — entry; `resolve a local binding` — phân giải.
**Examples:** `The symbol table recorded the function's generic parameters and visibility.` → Table ghi generic parameter và visibility của function.
**Liên kết tiếng Hàn:** `심볼 테이블`.

## 7. control flow graph /kənˈtroʊl floʊ ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph representing possible execution paths between basic blocks of a program.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph biểu diễn đường chạy giữa các basic block.
**Grammar & collocations:** `control-flow-graph edge` — cạnh; `traverse a branch` — duyệt.
**Examples:** `The optimizer used the control flow graph to identify a branch that could never execute.` → Optimizer dùng graph để tìm nhánh không thể chạy.
**Liên kết tiếng Hàn:** `제어 흐름 그래프`.

## 8. data flow analysis /ˈdeɪtə floʊ əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** static reasoning about how values or facts move through program paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy luận tĩnh về cách value hoặc fact đi qua path.
**Grammar & collocations:** `data-flow-analysis result` — kết quả; `propagate a fact` — lan truyền.
**Examples:** `Data flow analysis proved that the buffer was initialized on every path.` → Analysis chứng minh buffer được khởi tạo trên mọi path.
**Liên kết tiếng Hàn:** `데이터 흐름 분석`.

## 9. dead code elimination /ded koʊd ɪˌlɪməˈneɪʃən/
**Part of speech:** noun
**Core meaning (English):** removal of computations whose results can never affect observable program behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xóa computation không thể ảnh hưởng behavior quan sát được.
**Grammar & collocations:** `dead-code-elimination pass` — pass; `remove an unreachable block` — xóa.
**Examples:** `Dead code elimination removed the debug branch from the release binary.` → Elimination xóa nhánh debug khỏi binary release.
**Liên kết tiếng Hàn:** `죽은 코드 제거`.

## 10. call graph /kɔːl ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph showing which functions or methods may invoke which other functions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph cho thấy function/method nào có thể gọi function khác.
**Grammar & collocations:** `call-graph node` — node; `follow an indirect call` — lần theo.
**Examples:** `The call graph revealed that the parser could reach the logging adapter.` → Graph cho thấy parser có thể tới logging adapter.
**Liên kết tiếng Hàn:** `호출 그래프`.

## 11. linker script /ˈlɪŋkər skrɪpt/
**Part of speech:** noun
**Core meaning (English):** instructions controlling how a linker lays out sections and symbols in an output image.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chỉ dẫn điều khiển linker sắp section và symbol trong image.
**Grammar & collocations:** `linker-script section` — section; `place code at an address` — đặt.
**Examples:** `The linker script placed the boot vector at the address required by the microcontroller.` → Script đặt boot vector đúng địa chỉ vi điều khiển.
**Liên kết tiếng Hàn:** `링커 스크립트`.

## 12. debug information /ˈdiːbʌɡ ˌɪnfərˈmeɪʃən/
**Part of speech:** noun
**Core meaning (English):** metadata that maps compiled instructions back to source names, lines, and types.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** metadata nối instruction đã compile về tên, dòng và type nguồn.
**Grammar & collocations:** `debug-information section` — section; `inspect a source location` — xem.
**Examples:** `The crash report was useful because the binary retained debug information.` → Report hữu ích vì binary còn debug information.
**Liên kết tiếng Hàn:** `디버그 정보`.

## 13. source map /sɔːrs mæp/
**Part of speech:** noun
**Core meaning (English):** a mapping that relates generated code to the original source files and positions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mapping nối code sinh ra với file và vị trí source gốc.
**Grammar & collocations:** `source-map URL` — URL; `map a stack frame` — ánh xạ.
**Examples:** `The browser used the source map to show the original module in the stack trace.` → Browser dùng map để hiện module gốc.
**Liên kết tiếng Hàn:** `소스 맵`.

## 14. macro expansion /ˈmækroʊ ɪkˈspænʃən/
**Part of speech:** noun
**Core meaning (English):** replacement of a macro invocation with the code or tokens it defines.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay lời gọi macro bằng code hoặc token mà nó định nghĩa.
**Grammar & collocations:** `macro-expansion order` — thứ tự; `expand a conditional macro` — mở rộng.
**Examples:** `Macro expansion inserted the platform-specific guard before type checking.` → Expansion chèn guard theo platform trước type check.
**Liên kết tiếng Hàn:** `매크로 확장`.

## 15. partial evaluation /ˈpɑːrʃəl ɪˌvæljuˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** specializing a program with known inputs so some computation happens before runtime.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuyên biệt hóa program với input đã biết để tính trước một phần.
**Grammar & collocations:** `partial-evaluation stage` — stage; `specialize a configuration path` — chuyên biệt.
**Examples:** `Partial evaluation precomputed the policy table for the fixed deployment.` → Evaluation tính trước policy table cho deployment cố định.
**Liên kết tiếng Hàn:** `부분 평가`.

## 16. program slice /ˈproʊɡræm slaɪs/
**Part of speech:** noun
**Core meaning (English):** the subset of statements relevant to a chosen variable, output, or program behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập statement liên quan đến variable, output hoặc behavior được chọn.
**Grammar & collocations:** `program-slice criterion` — tiêu chí; `slice backward from an error` — truy ngược.
**Examples:** `The investigator extracted a program slice around the value that reached the database write.` → Investigator lấy slice quanh value tới database write.
**Liên kết tiếng Hàn:** `프로그램 슬라이스`.

## 17. taint analysis /teɪnt əˈnæləsɪs/
**Part of speech:** noun
**Core meaning (English):** tracking data marked as untrusted to see whether it reaches sensitive operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** theo dõi data không đáng tin để xem có tới operation nhạy cảm không.
**Grammar & collocations:** `taint-analysis source` — nguồn; `propagate an untrusted label` — lan.
**Examples:** `Taint analysis warned that request input could reach the shell command builder.` → Analysis cảnh báo input request tới bộ dựng shell command.
**Liên kết tiếng Hàn:** `오염 분석`.

## 18. lint rule /lɪnt ruːl/
**Part of speech:** noun
**Core meaning (English):** an automated check that flags a style, correctness, safety, or maintainability pattern.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** check tự động báo pattern về style, đúng, an toàn hoặc maintainability.
**Grammar & collocations:** `lint-rule configuration` — cấu hình; `suppress a justified warning` — suppress.
**Examples:** `The lint rule flagged an unchecked promise before it reached code review.` → Rule báo promise chưa check trước review.
**Liên kết tiếng Hàn:** `린트 규칙`.

## 19. compiler diagnostic /kəmˈpaɪlər ˌdaɪəɡˈnɒstɪk/
**Part of speech:** noun
**Core meaning (English):** a compiler message explaining an error, warning, note, or suggested repair.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** message compiler giải thích error, warning, note hoặc cách sửa.
**Grammar & collocations:** `compiler-diagnostic span` — vùng; `emit a helpful note` — phát.
**Examples:** `The compiler diagnostic pointed to the missing lifetime annotation and suggested a fix.` → Diagnostic chỉ annotation lifetime thiếu và gợi ý sửa.
**Liên kết tiếng Hàn:** `컴파일러 진단`.

## 20. incremental compilation /ˌɪŋkrəˈmentəl ˌkɒmpɪˈleɪʃən/
**Part of speech:** noun
**Core meaning (English):** rebuilding only the affected parts of a program after a source change.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** build lại chỉ phần bị ảnh hưởng sau khi source đổi.
**Grammar & collocations:** `incremental-compilation cache` — cache; `recompile a dependent module` — compile lại.
**Examples:** `Incremental compilation shortened the feedback loop after a single interface edit.` → Compilation rút ngắn vòng phản hồi sau một edit interface.
**Liên kết tiếng Hàn:** `증분 컴파일`.

## Review in context

A **lexical analyzer** turns characters into a **token stream**, which a **parser combinator** expands through each **grammar production**. **Semantic analysis** records declarations in a **symbol table**, then builds a **control flow graph** for **data flow analysis**. **Dead code elimination** removes irrelevant paths while a **call graph** describes reachable calls. A **linker script** arranges the image; **debug information** and a **source map** connect it back to source. **Macro expansion** prepares generated tokens, and **partial evaluation** specializes known inputs. A **program slice** isolates relevant statements, **taint analysis** follows untrusted data, a **lint rule** catches risky patterns, a **compiler diagnostic** explains the issue, and **incremental compilation** rebuilds only affected modules.

**Bản dịch tiếng Việt:** **Lexical analyzer** đổi ký tự thành **token stream**, rồi **parser combinator** mở rộng chúng qua từng **grammar production**. **Semantic analysis** ghi declaration vào **symbol table**, sau đó dựng **control flow graph** cho **data flow analysis**. **Dead code elimination** xóa path không liên quan còn **call graph** mô tả lời gọi có thể tới. **Linker script** sắp xếp image; **debug information** và **source map** nối image về source. **Macro expansion** chuẩn bị token sinh ra, còn **partial evaluation** chuyên biệt input đã biết. **Program slice** cô lập statement liên quan, **taint analysis** theo dõi data không tin cậy, **lint rule** bắt pattern rủi ro, **compiler diagnostic** giải thích lỗi, còn **incremental compilation** chỉ build lại module bị ảnh hưởng.
