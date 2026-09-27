# C2 Vocabulary 53 — Algorithms and computational theory

This lesson describes how computational problems are represented, solved, and bounded. It connects practical programming techniques with formal questions about language, complexity, and what machines can decide.

Flow: **asymptotic → amortized → recursion → memoization → backtracking → branch-and-bound → greedy → dynamic programming → NP-complete → tractable → decidability → halting → automaton → regular language → context-free → parser → compiler → bytecode → garbage collection → concurrency**.

## 1. asymptotic /ˌæsɪmˈtɑtɪk/
**Part of speech:** adjective
**Core meaning (English):** describing how the performance or size of a function behaves as its input becomes very large.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tiệm cận; hình ảnh nhìn tốc độ tăng của thuật toán khi dữ liệu phình ra vô hạn.
**Grammar & collocations:** `asymptotic complexity` — độ phức tạp tiệm cận; `asymptotic analysis` — phân tích tiệm cận.
**Examples:** `The asymptotic analysis showed that the new method scales linearly rather than quadratically.` → Phân tích tiệm cận cho thấy phương pháp mới tăng tuyến tính thay vì bậc hai.
**Liên kết tiếng Hàn:** `점근적` (jeomgeunjeok) — mang tính tiệm cận.

## 2. amortized /ˈæmərˌtaɪzd/
**Part of speech:** adjective
**Core meaning (English):** describing an average cost distributed across a sequence of operations, even when some individual operations are expensive.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân bổ chi phí; hình ảnh một lần mở rộng đắt được chia đều cho nhiều thao tác rẻ.
**Grammar & collocations:** `amortized cost` — chi phí phân bổ; `amortized analysis` — phân tích chi phí phân bổ.
**Examples:** `Dynamic-array insertion has constant amortized cost despite occasional resizing.` → Chèn vào mảng động có chi phí phân bổ hằng số dù đôi lúc phải đổi kích thước.
**Liên kết tiếng Hàn:** `분할 상환된` (bunhal sanghwan doen) — được phân bổ chi phí.

## 3. recursion /rɪˈkɝʒən/
**Part of speech:** noun
**Core meaning (English):** a method in which a function solves a problem by calling itself on smaller instances of the same problem.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đệ quy; hình ảnh một bài toán chứa phiên bản nhỏ hơn của chính nó.
**Grammar & collocations:** `recursive function` — hàm đệ quy; `recursion depth` — độ sâu đệ quy.
**Examples:** `The tree traversal uses recursion to visit each nested branch.` → Duyệt cây dùng đệ quy để đi qua từng nhánh lồng nhau.
**Liên kết tiếng Hàn:** `재귀` (jaegwi) — đệ quy.

## 4. memoization /ˌmɛməraɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** storing the results of previous function calls so repeated inputs can be answered without recomputation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghi nhớ kết quả; hình ảnh máy giữ đáp án cũ trong bộ nhớ thay vì tính lại.
**Grammar & collocations:** `function memoization` — ghi nhớ kết quả hàm; `memoization cache` — bộ nhớ đệm memoization.
**Examples:** `Memoization reduced the recursive algorithm's running time dramatically.` → Memoization giảm đáng kể thời gian chạy của thuật toán đệ quy.
**Liên kết tiếng Hàn:** `메모이제이션` (memoijeisyeon) — lưu kết quả để tái sử dụng.

## 5. backtracking /ˈbækˌtrækɪŋ/
**Part of speech:** noun
**Core meaning (English):** a search method that builds a candidate solution and reverses choices when they lead to failure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quay lui; hình ảnh đi vào mê cung rồi lùi lại khi gặp ngõ cụt.
**Grammar & collocations:** `backtracking search` — tìm kiếm quay lui; `backtracking algorithm` — thuật toán quay lui.
**Examples:** `Backtracking found a valid schedule by abandoning partial schedules that caused conflicts.` → Quay lui tìm lịch hợp lệ bằng cách bỏ lịch từng phần gây xung đột.
**Liên kết tiếng Hàn:** `백트래킹` (baekteuraeking) — quay lui.

## 6. branch-and-bound /ˌbræntʃ ən ˈbaʊnd/
**Part of speech:** noun
**Core meaning (English):** an optimization method that explores alternatives while using bounds to discard branches that cannot improve the best solution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nhánh và cận; hình ảnh cắt bỏ cả nhánh cây khi cận trên cho thấy nó không thể thắng.
**Grammar & collocations:** `branch-and-bound algorithm` — thuật toán nhánh và cận; `branch-and-bound search` — tìm kiếm nhánh và cận.
**Examples:** `Branch-and-bound pruned most routes before the exact optimum was found.` → Nhánh và cận loại bỏ hầu hết tuyến trước khi tìm tối ưu chính xác.
**Liên kết tiếng Hàn:** `분기 한정법` (bungi hanjeongbeop) — phương pháp nhánh và cận.

## 7. greedy /ˈɡriːdi/
**Part of speech:** adjective
**Core meaning (English):** choosing the best-looking option at each step without revising earlier choices.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tham lam; hình ảnh luôn lấy lợi ích trước mắt và hy vọng tổng thể vẫn tối ưu.
**Grammar & collocations:** `greedy algorithm` — thuật toán tham lam; `greedy choice` — lựa chọn tham lam.
**Examples:** `A greedy algorithm is optimal for this particular scheduling problem.` → Thuật toán tham lam tối ưu cho bài toán lập lịch cụ thể này.
**Liên kết tiếng Hàn:** `탐욕적` (tam yokjeok) — tham lam.

## 8. dynamic programming /daɪˈnæmɪk ˈproʊɡræmɪŋ/
**Part of speech:** noun phrase
**Core meaning (English):** solving a complex problem by dividing it into overlapping subproblems and storing their solutions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy hoạch động; hình ảnh xây đáp án lớn từ các ô kết quả nhỏ đã lưu.
**Grammar & collocations:** `dynamic-programming recurrence` — công thức truy hồi quy hoạch động; `dynamic-programming table` — bảng quy hoạch động.
**Examples:** `Dynamic programming turned the exponential recurrence into a manageable table.` → Quy hoạch động biến công thức tăng theo hàm mũ thành bảng có thể xử lý.
**Liên kết tiếng Hàn:** `동적 계획법` (dongjeok gyehoekbeop) — quy hoạch động.

## 9. NP-complete /ˌɛn pi kəmˈpliːt/
**Part of speech:** adjective
**Core meaning (English):** describing a problem that is both in NP and at least as hard as every problem in NP.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** NP-đầy đủ; hình ảnh bài toán khó có thể kiểm tra nhanh nhưng chưa biết cách giải nhanh tổng quát.
**Grammar & collocations:** `NP-complete problem` — bài toán NP-đầy đủ; `prove NP-complete` — chứng minh NP-đầy đủ.
**Examples:** `The team recognized the routing task as NP-complete and used an approximation.` → Nhóm nhận ra bài toán định tuyến NP-đầy đủ và dùng lời giải xấp xỉ.
**Liên kết tiếng Hàn:** `NP-완전` (enpi wanjeon) — NP-đầy đủ.

## 10. tractable /ˈtræktəbəl/
**Part of speech:** adjective
**Core meaning (English):** solvable or manageable with available computational resources.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** khả giải; hình ảnh bài toán đủ nhỏ hoặc đủ hiệu quả để máy xử lý trong thời gian chấp nhận được.
**Grammar & collocations:** `computationally tractable` — khả giải về mặt tính toán; `make a problem tractable` — làm bài toán khả giải.
**Examples:** `The approximation made the originally impossible search tractable for daily use.` → Lời giải xấp xỉ làm tìm kiếm vốn bất khả thi trở nên khả giải cho sử dụng hằng ngày.
**Liên kết tiếng Hàn:** `다루기 쉬운` (darugi swiun) — dễ xử lý, khả giải.

## 11. decidability /dɪˌsaɪdəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** the property of a problem for which an algorithm can always determine the correct yes-or-no answer.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính quyết định được; hình ảnh có một thủ tục chắc chắn kết thúc và trả lời đúng.
**Grammar & collocations:** `decidability question` — câu hỏi về tính quyết định; `prove decidability` — chứng minh tính quyết định.
**Examples:** `The proof established decidability for the restricted version of the language.` → Chứng minh xác lập tính quyết định cho phiên bản giới hạn của ngôn ngữ.
**Liên kết tiếng Hàn:** `결정 가능성` (gyeoljeong ganeungseong) — khả năng quyết định.

## 12. halting /ˈhɔltɪŋ/
**Part of speech:** adjective
**Core meaning (English):** relating to whether a program eventually stops rather than running forever.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** dừng; hình ảnh chương trình phải có điểm kết thúc thay vì chạy vô hạn.
**Grammar & collocations:** `halting problem` — bài toán dừng; `halting condition` — điều kiện dừng.
**Examples:** `No general algorithm can solve the halting problem for every possible program.` → Không có thuật toán tổng quát nào giải bài toán dừng cho mọi chương trình.
**Liên kết tiếng Hàn:** `정지` (jeongji) — dừng, đình chỉ.

## 13. automaton /ɔːˈtɑːmətən/
**Part of speech:** noun
**Core meaning (English):** an abstract machine that reads symbols and changes state according to formal rules.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** máy tự động trừu tượng; hình ảnh một cỗ máy đi qua các trạng thái khi đọc từng ký hiệu.
**Grammar & collocations:** `finite automaton` — máy tự động hữu hạn; `automaton state` — trạng thái máy tự động.
**Examples:** `The finite automaton accepted strings ending in an even number of zeros.` → Máy tự động hữu hạn chấp nhận chuỗi kết thúc bằng số lượng số không chẵn.
**Liên kết tiếng Hàn:** `오토마톤` (otomat on) — máy tự động trừu tượng.

## 14. regular language /ˈrɛɡjələr ˈlæŋɡwɪdʒ/
**Part of speech:** noun phrase
**Core meaning (English):** a formal language that can be recognized by a finite automaton.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngôn ngữ chính quy; hình ảnh tập chuỗi được nhận diện bằng bộ nhớ hữu hạn.
**Grammar & collocations:** `regular-language expression` — biểu thức ngôn ngữ chính quy; `class of regular languages` — lớp ngôn ngữ chính quy.
**Examples:** `A regular language can be described by a finite automaton or a regular expression.` → Ngôn ngữ chính quy có thể được mô tả bằng máy tự động hữu hạn hoặc biểu thức chính quy.
**Liên kết tiếng Hàn:** `정규 언어` (jeonggyu eoneo) — ngôn ngữ chính quy.

## 15. context-free /ˌkɑntɛkst ˈfriː/
**Part of speech:** adjective
**Core meaning (English):** describing a grammar whose production rules can be applied independently of surrounding symbols.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phi ngữ cảnh; hình ảnh một ký hiệu được thay thế theo quy tắc riêng không cần nhìn hàng xóm.
**Grammar & collocations:** `context-free grammar` — văn phạm phi ngữ cảnh; `context-free language` — ngôn ngữ phi ngữ cảnh.
**Examples:** `A context-free grammar captures the nested structure of balanced parentheses.` → Văn phạm phi ngữ cảnh mô tả cấu trúc lồng nhau của ngoặc cân bằng.
**Liên kết tiếng Hàn:** `문맥 자유` (munmaek jayu) — phi ngữ cảnh.

## 16. parser /ˈpɑrsər/
**Part of speech:** noun
**Core meaning (English):** a program that analyzes a sequence of symbols according to a grammar and builds a structural representation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ phân tích cú pháp; hình ảnh máy đọc câu lệnh và dựng cây cấu trúc.
**Grammar & collocations:** `syntax parser` — bộ phân tích cú pháp; `parser generator` — trình sinh parser.
**Examples:** `The parser rejected the expression because a closing bracket was missing.` → Bộ phân tích từ chối biểu thức vì thiếu dấu ngoặc đóng.
**Liên kết tiếng Hàn:** `파서` (paseo) — bộ phân tích cú pháp.

## 17. compiler /kəmˈpaɪlər/
**Part of speech:** noun
**Core meaning (English):** a program that translates source code into machine code or another lower-level representation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trình biên dịch; hình ảnh ngôn ngữ con người viết được chuyển thành lệnh máy.
**Grammar & collocations:** `optimizing compiler` — trình biên dịch tối ưu; `compiler error` — lỗi biên dịch.
**Examples:** `The compiler detected the type mismatch before the program was executed.` → Trình biên dịch phát hiện không khớp kiểu trước khi chương trình chạy.
**Liên kết tiếng Hàn:** `컴파일러` (keompa ille reo) — trình biên dịch.

## 18. bytecode /ˈbaɪtˌkoʊd/
**Part of speech:** noun
**Core meaning (English):** an intermediate instruction format designed to be executed by a virtual machine.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mã byte; hình ảnh mã nguồn dừng ở ngôn ngữ trung gian trước khi chạy trên máy ảo.
**Grammar & collocations:** `generate bytecode` — sinh mã byte; `bytecode interpreter` — trình thông dịch mã byte.
**Examples:** `The language compiler generated bytecode that ran on several operating systems.` → Trình biên dịch ngôn ngữ sinh mã byte chạy trên nhiều hệ điều hành.
**Liên kết tiếng Hàn:** `바이트코드` (baiteukodeu) — mã byte.

## 19. garbage collection /ˈɡɑrbɪdʒ kəˈlɛkʃən/
**Part of speech:** noun phrase
**Core meaning (English):** automatic identification and reclamation of memory that a program can no longer use.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thu gom rác; hình ảnh hệ thống dọn vùng nhớ không còn đối tượng trỏ tới.
**Grammar & collocations:** `automatic garbage collection` — thu gom rác tự động; `garbage-collection pause` — khoảng dừng thu gom rác.
**Examples:** `The service reduced garbage-collection pauses by changing how it allocated short-lived objects.` → Dịch vụ giảm thời gian dừng thu gom rác bằng cách đổi cách cấp phát đối tượng ngắn hạn.
**Liên kết tiếng Hàn:** `가비지 컬렉션` (gabiji keolleksyeon) — thu gom rác bộ nhớ.

## 20. concurrency /kənˈkɝrənsi/
**Part of speech:** noun
**Core meaning (English):** the management of multiple tasks that make progress during overlapping periods of time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tính đồng thời; hình ảnh nhiều việc cùng tiến triển dù không nhất thiết chạy đúng cùng một khoảnh khắc.
**Grammar & collocations:** `concurrency model` — mô hình đồng thời; `concurrency bug` — lỗi đồng thời.
**Examples:** `The concurrency bug appeared only when two requests updated the same record together.` → Lỗi đồng thời chỉ xuất hiện khi hai yêu cầu cùng cập nhật một bản ghi.
**Liên kết tiếng Hàn:** `동시성` (dong siseong) — tính đồng thời.

## Review in context

The engineer compared **asymptotic** and **amortized** costs before choosing **recursion** with **memoization**. A **backtracking** search and **branch-and-bound** bound alternatives, while a **greedy** method and **dynamic programming** offered different trade-offs for an **NP-complete** task. The resulting approximation was **tractable**, but **decidability** and the **halting** problem marked formal limits. An **automaton** recognized a **regular language**, whereas a **context-free** grammar required a **parser**. A **compiler** produced **bytecode**, **garbage collection** reclaimed unused memory, and **concurrency** coordinated simultaneous requests.

**Bản dịch tiếng Việt:**

Kỹ sư so sánh chi phí tiệm cận và chi phí phân bổ trước khi chọn đệ quy cùng memoization. Tìm kiếm quay lui và nhánh-cận cắt các phương án, còn phương pháp tham lam và quy hoạch động đưa ra đánh đổi khác nhau cho bài toán NP-đầy đủ. Lời giải xấp xỉ trở nên khả giải, nhưng tính quyết định và bài toán dừng đánh dấu giới hạn hình thức. Máy tự động nhận diện ngôn ngữ chính quy, còn văn phạm phi ngữ cảnh cần bộ phân tích cú pháp. Trình biên dịch tạo mã byte, thu gom rác giải phóng bộ nhớ không dùng và tính đồng thời điều phối các yêu cầu chồng lấn.
