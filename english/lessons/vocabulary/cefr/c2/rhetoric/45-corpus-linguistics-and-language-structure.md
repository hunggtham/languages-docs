# C2 Vocabulary 45 — Corpus linguistics and language structure

This lesson describes how large collections of language reveal patterns that individual examples can hide. It moves from computational preparation to lexical meaning, grammar, and sound structure.

Flow: **tokenization → lemmatization → stemming → concordance → n-gram → corpus linguistics → lexical bundle → distributional semantics → word embedding → semantic drift → lexicogrammar → collostruction → language model → morphosyntax → allomorph → suppletion → phonotactics → prosody → cliticization → orthography**.

## 1. tokenization /ˌtoʊkənəˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of dividing continuous text into units such as words, punctuation marks, or symbols.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tách token; hình ảnh một dòng văn bản được cắt thành các mảnh máy có thể đếm và xử lý.
**Grammar & collocations:** `text tokenization` — tách token văn bản; `tokenization pipeline` — quy trình tách token.
**Examples:** `Accurate tokenization must preserve contractions and punctuation that carry meaning.` → Tách token chính xác phải giữ các dạng rút gọn và dấu câu mang ý nghĩa.
**Liên kết tiếng Hàn:** `토큰화` (tokeunhwa) — tách thành token.

## 2. lemmatization /ˌlɛmətiˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process of reducing related word forms to a common dictionary form, or lemma.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy về từ nguyên mẫu; hình ảnh “walked”, “walking” và “walks” trở về cùng một mục từ.
**Grammar & collocations:** `morphological lemmatization` — quy về từ nguyên mẫu; `lemmatization algorithm` — thuật toán lemmatization.
**Examples:** `Lemmatization grouped the inflected forms under the lemma “run”.` → Lemmatization gom các dạng biến hình dưới từ nguyên mẫu “run”.
**Liên kết tiếng Hàn:** `표제어 추출` (pyoje-eo chuchul) — trích xuất từ nguyên mẫu.

## 3. stemming /ˈstɛmɪŋ/
**Part of speech:** noun
**Core meaning (English):** the computational reduction of words to a shortened stem, often without checking whether the stem is a real word.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cắt về gốc từ; hình ảnh máy cắt đuôi biến “connected” và “connection” thành một thân chung.
**Grammar & collocations:** `rule-based stemming` — cắt gốc theo quy tắc; `stemming error` — lỗi cắt gốc.
**Examples:** `Aggressive stemming merged words that should have remained distinct.` → Cắt gốc quá mạnh gộp những từ đáng lẽ phải được tách riêng.
**Liên kết tiếng Hàn:** `어간 추출` (eogan chuchul) — trích xuất thân từ.

## 4. concordance /kənˈkɔrdəns/
**Part of speech:** noun
**Core meaning (English):** a display of every occurrence of a word or phrase in a corpus together with its surrounding context.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảng đối chiếu ngữ cảnh; hình ảnh mọi lần xuất hiện của một từ xếp thành các dòng để so sánh.
**Grammar & collocations:** `concordance line` — dòng đối chiếu; `search a concordance` — tra bảng đối chiếu.
**Examples:** `The concordance showed that the verb appeared mostly in legal contexts.` → Bảng đối chiếu cho thấy động từ chủ yếu xuất hiện trong ngữ cảnh pháp lý.
**Liên kết tiếng Hàn:** `용례 색인` (yongnye saegin) — bảng chỉ mục ví dụ sử dụng.

## 5. n-gram /ˈɛn ɡræm/
**Part of speech:** noun
**Core meaning (English):** a sequence of n adjacent linguistic units, such as a pair or triplet of words, used for analysis or prediction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chuỗi n-gram; hình ảnh cửa sổ trượt qua văn bản và ghi lại các nhóm từ liền nhau.
**Grammar & collocations:** `bigram n-gram` — n-gram hai đơn vị; `n-gram frequency` — tần suất n-gram.
**Examples:** `The model used four-word n-grams to estimate likely continuations.` → Mô hình dùng n-gram bốn từ để ước tính phần tiếp theo có khả năng xảy ra.
**Liên kết tiếng Hàn:** `엔그램` (engeuraem) — chuỗi n đơn vị.

## 6. corpus linguistics /ˈkɔrpəs lɪŋˈɡwɪstɪks/
**Part of speech:** noun phrase
**Core meaning (English):** the study of language through systematically collected bodies of spoken or written data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngôn ngữ học corpus; hình ảnh hàng triệu câu nói được lưu thành kho để tìm mô thức thật.
**Grammar & collocations:** `corpus-linguistics method` — phương pháp ngôn ngữ học corpus; `corpus-linguistics research` — nghiên cứu ngôn ngữ học corpus.
**Examples:** `Corpus linguistics challenged the textbook claim about how often the phrase is used.` → Ngôn ngữ học corpus thách thức khẳng định trong giáo trình về tần suất dùng cụm từ.
**Liên kết tiếng Hàn:** `코퍼스 언어학` (kopeoseu eoneohak) — ngôn ngữ học corpus.

## 7. lexical bundle /ˈlɛksɪkəl ˈbʌndəl/
**Part of speech:** noun phrase
**Core meaning (English):** a frequently recurring sequence of words that functions as a building block of a register or genre.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bó từ vựng; hình ảnh vài từ luôn đi cùng nhau như một viên gạch trong văn học thuật.
**Grammar & collocations:** `academic lexical bundle` — bó từ vựng học thuật; `identify lexical bundles` — nhận diện bó từ vựng.
**Examples:** `“On the other hand” is a lexical bundle that helps organize contrast.` → “On the other hand” là bó từ vựng giúp tổ chức ý tương phản.
**Liên kết tiếng Hàn:** `어휘 다발` (eohwi dabar) — bó từ vựng.

## 8. distributional semantics /ˌdɪstrəˈbjuːʃənəl səˈmæntɪks/
**Part of speech:** noun phrase
**Core meaning (English):** an approach that models word meaning through the contexts and patterns in which words occur.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngữ nghĩa phân bố; hình ảnh vị trí của một từ trong mạng ngữ cảnh hé lộ nghĩa của nó.
**Grammar & collocations:** `distributional-semantics model` — mô hình ngữ nghĩa phân bố; `distributional semantics` — ngữ nghĩa phân bố.
**Examples:** `Distributional semantics represents words by the contexts that surround them.` → Ngữ nghĩa phân bố biểu diễn từ bằng những ngữ cảnh bao quanh chúng.
**Liên kết tiếng Hàn:** `분포 의미론` (bunpo uimiron) — ngữ nghĩa phân bố.

## 9. word embedding /ˈwɝd ɛmˌbɛdɪŋ/
**Part of speech:** noun phrase
**Core meaning (English):** a numerical representation of a word that captures relationships learned from language data.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biểu diễn vector của từ; hình ảnh mỗi từ có tọa độ trong không gian dựa trên các từ thường đi cùng.
**Grammar & collocations:** `train a word embedding` — huấn luyện biểu diễn từ; `embedding space` — không gian biểu diễn.
**Examples:** `The word embedding placed related occupations near one another but also reproduced social stereotypes.` → Biểu diễn từ đặt các nghề liên quan gần nhau nhưng cũng tái tạo định kiến xã hội.
**Liên kết tiếng Hàn:** `단어 임베딩` (daneo imbedding) — biểu diễn từ bằng vector.

## 10. semantic drift /səˈmæntɪk drɪft/
**Part of speech:** noun phrase
**Core meaning (English):** gradual change in a word's meaning as its uses and associations shift over time.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trôi dạt ngữ nghĩa; hình ảnh nghĩa của từ trôi khỏi bến cũ qua nhiều thế hệ người dùng.
**Grammar & collocations:** `track semantic drift` — theo dõi biến đổi nghĩa; `semantic-drift process` — quá trình trôi dạt ngữ nghĩa.
**Examples:** `The corpus revealed semantic drift in the word as technology changed everyday practice.` → Corpus cho thấy nghĩa của từ biến đổi khi công nghệ thay đổi thực hành hằng ngày.
**Liên kết tiếng Hàn:** `의미 변화` (uimi byeonhwa) — biến đổi nghĩa.

## 11. lexicogrammar /ˌlɛksɪkoʊˈɡræmər/
**Part of speech:** noun
**Core meaning (English):** the view that vocabulary and grammar form an interconnected system rather than separate levels.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** từ-pháp; hình ảnh lựa chọn từ và cấu trúc câu đan vào nhau để tạo nghĩa.
**Grammar & collocations:** `lexicogrammatical pattern` — mô thức từ-pháp; `lexicogrammar analysis` — phân tích từ-pháp.
**Examples:** `The study treats tense and vocabulary as one lexicogrammatical choice.` → Nghiên cứu xem thì và từ vựng là một lựa chọn từ-pháp thống nhất.
**Liên kết tiếng Hàn:** `어휘문법` (eohwimunbeop) — hệ thống từ và ngữ pháp.

## 12. collostruction /ˌkɑləˈstrʌkʃən/
**Part of speech:** noun
**Core meaning (English):** a statistical measure of how strongly a word is associated with a particular grammatical construction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** liên kết từ-cấu trúc; hình ảnh một từ có “sức hút” đặc biệt với một khuôn ngữ pháp.
**Grammar & collocations:** `collostruction analysis` — phân tích liên kết từ-cấu trúc; `collostruction strength` — độ mạnh liên kết.
**Examples:** `Collostruction analysis showed which verbs strongly favored the caused-motion pattern.` → Phân tích liên kết cho thấy động từ nào ưa khuôn chuyển động gây ra.
**Liên kết tiếng Hàn:** `구문 결합도` (gुमun gyeolhapdo) — độ liên kết từ với cấu trúc.

## 13. language model /ˈlæŋɡwɪdʒ ˈmɑdəl/
**Part of speech:** noun phrase
**Core meaning (English):** a computational model that estimates the likelihood or sequence of linguistic forms.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mô hình ngôn ngữ; hình ảnh hệ thống dự đoán từ tiếp theo dựa trên mô thức đã học.
**Grammar & collocations:** `train a language model` — huấn luyện mô hình ngôn ngữ; `large language model` — mô hình ngôn ngữ lớn.
**Examples:** `The language model generated fluent sentences but sometimes invented unsupported details.` → Mô hình ngôn ngữ tạo câu trôi chảy nhưng đôi khi bịa chi tiết không có căn cứ.
**Liên kết tiếng Hàn:** `언어 모델` (eoneo model) — mô hình ngôn ngữ.

## 14. morphosyntax /ˌmɔrfoʊˈsɪntæks/
**Part of speech:** noun
**Core meaning (English):** the study of how word forms and sentence structure interact.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hình thái-cú pháp; hình ảnh đuôi từ và vị trí trong câu cùng quyết định quan hệ ngữ pháp.
**Grammar & collocations:** `morphosyntactic feature` — đặc điểm hình thái-cú pháp; `morphosyntax of a language` — hình thái-cú pháp của ngôn ngữ.
**Examples:** `The analysis compares morphosyntax in languages with rich case marking.` → Phân tích so sánh hình thái-cú pháp ở các ngôn ngữ có biến cách phong phú.
**Liên kết tiếng Hàn:** `형태통사론` (hyeongtaetong saron) — hình thái-cú pháp.

## 15. allomorph /ˈæləˌmɔrf/
**Part of speech:** noun
**Core meaning (English):** one of several different forms that represent the same morpheme in different environments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** biến thể hình vị; hình ảnh cùng một ý nghĩa ngữ pháp đổi hình thức theo âm hoặc môi trường.
**Grammar & collocations:** `allomorphic variation` — biến thể hình vị; `allomorph of a suffix` — biến thể của hậu tố.
**Examples:** `The plural endings /s/, /z/, and /ɪz/ are allomorphs conditioned by sound context.` → Các đuôi số nhiều /s/, /z/ và /ɪz/ là các biến thể hình vị do ngữ cảnh âm thanh chi phối.
**Liên kết tiếng Hàn:** `이형태` (ihyeongtae) — biến thể hình vị.

## 16. suppletion /səˈpliːʃən/
**Part of speech:** noun
**Core meaning (English):** the use of an entirely different form to express a grammatical relation within a paradigm.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thay thế hình thái hoàn toàn; hình ảnh “go” đổi thành “went” thay vì thêm đuôi thông thường.
**Grammar & collocations:** `suppletive form` — dạng thay thế; `suppletion in a paradigm` — hiện tượng thay thế trong hệ hình thái.
**Examples:** `The pair “good” and “better” illustrates suppletion rather than regular comparison.` → Cặp “good” và “better” minh họa thay thế hình thái chứ không phải so sánh đều đặn.
**Liên kết tiếng Hàn:** `보충법` (bochungbeop) — hiện tượng thay thế hình thái.

## 17. phonotactics /ˌfoʊnoʊˈtæktɪks/
**Part of speech:** noun
**Core meaning (English):** the rules governing which sound combinations are possible or permitted in a language.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quy tắc kết hợp âm; hình ảnh mỗi ngôn ngữ có hàng rào cho phép một số chuỗi âm và chặn chuỗi khác.
**Grammar & collocations:** `phonotactic constraint` — ràng buộc kết hợp âm; `phonotactics of a language` — quy tắc kết hợp âm của ngôn ngữ.
**Examples:** `The borrowed name was adapted to English phonotactics by inserting a vowel.` → Tên vay mượn được điều chỉnh theo quy tắc âm tiếng Anh bằng cách chèn một nguyên âm.
**Liên kết tiếng Hàn:** `음운 배열론` (eumun baeyeolron) — quy tắc kết hợp âm.

## 18. prosody /ˈprɑsədi/
**Part of speech:** noun
**Core meaning (English):** the rhythm, stress, intonation, and timing patterns of speech or verse.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ngữ điệu và nhịp điệu; hình ảnh cao độ, trọng âm và nhịp làm câu nói có sắc thái khác nhau.
**Grammar & collocations:** `prosodic pattern` — mô thức ngữ điệu; `prosody of spoken English` — prosody tiếng Anh nói.
**Examples:** `Prosody signaled that the speaker intended irony rather than a literal complaint.` → Prosody cho thấy người nói có ý mỉa mai chứ không phàn nàn theo nghĩa đen.
**Liên kết tiếng Hàn:** `운율` (unyul) — nhịp điệu, ngữ điệu.

## 19. cliticization /ˌklɪtəsaɪˈzeɪʃən/
**Part of speech:** noun
**Core meaning (English):** the process by which an independent word becomes a phonologically dependent clitic.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** quá trình hóa phụ tố liên kết; hình ảnh một từ yếu dần và bám vào từ lân cận trong phát âm.
**Grammar & collocations:** `cliticization process` — quá trình clitic hóa; `cliticization of a pronoun` — clitic hóa đại từ.
**Examples:** `Cliticization explains why the reduced pronoun cannot carry independent stress.` → Cliticization giải thích vì sao đại từ rút gọn không thể mang trọng âm độc lập.
**Liên kết tiếng Hàn:** `접어화` (jeobeohwa) — quá trình biến thành clitic.

## 20. orthography /ɔrˈθɑɡrəfi/
**Part of speech:** noun
**Core meaning (English):** the conventional system of writing a language, including spelling, punctuation, and related rules.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chính tả học; hình ảnh quy tắc biến âm thanh thành chữ viết thống nhất.
**Grammar & collocations:** `standard orthography` — chính tả chuẩn; `orthographic reform` — cải cách chính tả.
**Examples:** `The reform simplified orthography without changing pronunciation.` → Cải cách đơn giản hóa chính tả mà không thay đổi phát âm.
**Liên kết tiếng Hàn:** `정서법` (jeongseobeop) — hệ thống chính tả.

## Review in context

The pipeline began with **tokenization**, followed by **lemmatization** and **stemming**, before a **concordance** counted each **n-gram**. **Corpus linguistics** identified a recurring **lexical bundle**, while **distributional semantics** and a **word embedding** revealed **semantic drift**. A **lexicogrammar** account used **collostruction** evidence, and a **language model** estimated likely sequences. Researchers then compared **morphosyntax**, an **allomorph**, and an instance of **suppletion**. They checked **phonotactics** and **prosody**, modeled **cliticization**, and documented the language's **orthography**.

**Bản dịch tiếng Việt:**

Quy trình bắt đầu bằng tách token, tiếp đến quy về từ nguyên mẫu và cắt gốc, trước khi bảng đối chiếu đếm từng n-gram. Ngôn ngữ học corpus nhận diện một bó từ vựng lặp lại, còn ngữ nghĩa phân bố và biểu diễn từ cho thấy sự trôi dạt ngữ nghĩa. Phân tích từ-pháp dùng bằng chứng liên kết từ-cấu trúc, và mô hình ngôn ngữ ước tính các chuỗi có khả năng. Nhà nghiên cứu sau đó so sánh hình thái-cú pháp, một biến thể hình vị và một trường hợp thay thế hình thái. Họ kiểm tra quy tắc kết hợp âm và prosody, mô hình hóa cliticization và ghi lại chính tả của ngôn ngữ.
