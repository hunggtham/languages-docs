# C2 Vocabulary — AI evaluation, safety, and governance

This lesson follows a model evaluation from rubric design and human labels through benchmarks, adversarial testing, and refusal behavior.

Flow: **evaluation rubric → reference answer → judge model → pairwise preference → rating scale → human annotation → inter-annotator agreement → label policy → quality rubric → benchmark suite → challenge set → stress benchmark → out-of-distribution test → safety evaluation → red-team exercise → jailbreak attempt → prompt attack → instruction hierarchy → refusal behavior → harmlessness test**.

## 1. evaluation rubric /ɪˌvæljuˈeɪʃən ˈruːbrɪk/
**Part of speech:** noun
**Core meaning (English):** a structured set of criteria used to judge the quality, safety, or usefulness of a model output.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bộ criteria có cấu trúc để chấm quality, safety hoặc usefulness của output.
**Grammar & collocations:** `evaluation-rubric criterion` — criterion; `score an answer consistently` — chấm.
**Examples:** `The evaluation rubric separated factual accuracy from writing style.` → Rubric tách accuracy fact khỏi style.
**Liên kết tiếng Hàn:** `평가 루브릭`.

## 2. reference answer /ˈrefərəns ˈɑːnsər/
**Part of speech:** noun
**Core meaning (English):** a reviewed answer used as a comparison point for evaluating another response.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** answer đã review dùng làm điểm so cho response khác.
**Grammar & collocations:** `reference-answer set` — set; `compare semantic coverage` — so.
**Examples:** `The grader compared the generated explanation with a reference answer written by a subject expert.` → Grader so explanation với answer chuyên gia.
**Liên kết tiếng Hàn:** `참조 답변`.

## 3. judge model /dʒʌdʒ ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** a model used to score or compare outputs from another model according to an evaluation instruction.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model dùng để chấm/so output model khác theo instruction đánh giá.
**Grammar & collocations:** `judge-model calibration` — calibration; `ask a model to rank answers` — yêu cầu.
**Examples:** `The judge model explained why the shorter answer omitted a required caveat.` → Model giám khảo giải thích answer thiếu caveat.
**Liên kết tiếng Hàn:** `심사 모델`.

## 4. pairwise preference /ˈperwaɪz ˈprefərəns/
**Part of speech:** noun
**Core meaning (English):** a judgment identifying which of two outputs is better according to a stated criterion.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** judgment chọn output tốt hơn trong hai output theo criterion.
**Grammar & collocations:** `pairwise-preference label` — label; `prefer one response` — ưu tiên.
**Examples:** `Pairwise preference made small improvements visible even when absolute scores were noisy.` → Preference từng cặp lộ cải thiện nhỏ dù score nhiễu.
**Liên kết tiếng Hàn:** `쌍별 선호`.

## 5. rating scale /ˈreɪtɪŋ skeɪl/
**Part of speech:** noun
**Core meaning (English):** an ordered set of values used to express the degree of quality, risk, or agreement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập value có thứ tự thể hiện mức quality, risk hoặc agreement.
**Grammar & collocations:** `rating-scale anchor` — mốc; `assign a five-point score` — chấm.
**Examples:** `The rating scale defined examples for every point so annotators used it similarly.` → Scale định nghĩa ví dụ cho từng điểm.
**Liên kết tiếng Hàn:** `평가 척도`.

## 6. human annotation /ˈhjuːmən ˌænəˈteɪʃən/
**Part of speech:** noun
**Core meaning (English):** people adding labels, judgments, or explanations to data for training or evaluation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** người thêm label, judgment hoặc explanation vào data.
**Grammar & collocations:** `human-annotation task` — task; `label an ambiguous example` — gắn nhãn.
**Examples:** `Human annotation identified sarcasm that the automatic filter had missed.` → Annotation người nhận ra sarcasm filter bỏ sót.
**Liên kết tiếng Hàn:** `인간 주석`.

## 7. inter-annotator agreement /ˌɪntər ˈænəteɪtər əˈɡriːmənt/
**Part of speech:** noun
**Core meaning (English):** the degree to which independent annotators assign the same labels or judgments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mức annotator độc lập gắn label/judgment giống nhau.
**Grammar & collocations:** `inter-annotator-agreement score` — score; `resolve a disagreement` — giải quyết.
**Examples:** `Low inter-annotator agreement showed that the label policy needed clearer examples.` → Agreement thấp cho thấy policy cần ví dụ rõ hơn.
**Liên kết tiếng Hàn:** `주석자 간 일치도`.

## 8. label policy /ˈleɪbəl ˈpɒləsi/
**Part of speech:** noun
**Core meaning (English):** instructions defining how annotators should assign labels in common and borderline cases.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hướng dẫn cách annotator gắn label ở case thường và borderline.
**Grammar & collocations:** `label-policy exception` — exception; `apply a decision rule` — áp dụng.
**Examples:** `The label policy instructed reviewers to mark unverifiable claims as uncertain.` → Policy yêu cầu đánh dấu claim không verify là uncertain.
**Liên kết tiếng Hàn:** `라벨 정책`.

## 9. quality rubric /ˈkwɒləti ˈruːbrɪk/
**Part of speech:** noun
**Core meaning (English):** criteria for judging whether a response is clear, complete, relevant, and well supported.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** criteria chấm response rõ, đủ, liên quan và có support.
**Grammar & collocations:** `quality-rubric dimension` — dimension; `penalize unsupported detail` — trừ điểm.
**Examples:** `The quality rubric rewarded a concise answer that still covered every required step.` → Rubric thưởng answer gọn nhưng đủ step.
**Liên kết tiếng Hàn:** `품질 루브릭`.

## 10. benchmark suite /ˈbentʃmɑːrk swiːt/
**Part of speech:** noun
**Core meaning (English):** a collection of standardized tests used to compare models or versions across defined capabilities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập test chuẩn hóa để so model/version trên capability định nghĩa.
**Grammar & collocations:** `benchmark-suite result` — result; `run a capability benchmark` — chạy.
**Examples:** `The benchmark suite covered reasoning, retrieval, coding, and safety behavior.` → Suite bao reasoning, retrieval, coding và safety.
**Liên kết tiếng Hàn:** `벤치마크 모음`.

## 11. challenge set /ˈtʃælɪndʒ set/
**Part of speech:** noun
**Core meaning (English):** a small collection of deliberately difficult or revealing examples designed to expose a known weakness.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tập example khó được thiết kế để lộ weakness cụ thể.
**Grammar & collocations:** `challenge-set item` — item; `probe a known failure mode` — thăm dò.
**Examples:** `The challenge set tested whether the model followed a negation in a long instruction.` → Set test model có theo negation trong instruction dài không.
**Liên kết tiếng Hàn:** `도전 세트`.

## 12. stress benchmark /stres ˈbentʃmɑːrk/
**Part of speech:** noun
**Core meaning (English):** a benchmark that pushes scale, load, length, or unusual conditions to reveal performance limits.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** benchmark đẩy scale/load/length/condition để lộ giới hạn.
**Grammar & collocations:** `stress-benchmark load` — load; `drive a system past normal volume` — đẩy.
**Examples:** `The stress benchmark exposed memory growth when thousands of long contexts ran together.` → Benchmark lộ memory tăng khi chạy nhiều context dài.
**Liên kết tiếng Hàn:** `스트레스 벤치마크`.

## 13. out-of-distribution test /aʊt əv ˌdɪstrɪˈbjuːʃən test/
**Part of speech:** noun
**Core meaning (English):** an evaluation using inputs unlike those represented in the training or ordinary validation distribution.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** evaluation dùng input khác distribution train/validation thông thường.
**Grammar & collocations:** `out-of-distribution-test case` — case; `measure transfer robustness` — đo.
**Examples:** `The out-of-distribution test used a new dialect absent from the training corpus.` → Test dùng dialect mới không có trong corpus train.
**Liên kết tiếng Hàn:** `분포 외 테스트`.

## 14. safety evaluation /ˈseɪfti ɪˌvæljuˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** systematic testing of whether a system avoids harmful, disallowed, or dangerously misleading behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test có hệ thống xem system tránh behavior harmful/disallowed/misleading nguy hiểm không.
**Grammar & collocations:** `safety-evaluation protocol` — protocol; `measure refusal consistency` — đo.
**Examples:** `The safety evaluation checked both direct answers and indirect suggestions for harmful instructions.` → Evaluation kiểm tra answer trực tiếp và gợi ý gián tiếp.
**Liên kết tiếng Hàn:** `안전성 평가`.

## 15. red-team exercise /ˈred tiːm ˈeksərsaɪz/
**Part of speech:** noun
**Core meaning (English):** a deliberate exercise in which testers try to make a system fail, leak, or violate its safeguards.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** diễn tập tester cố làm system fail, leak hoặc vi phạm safeguard.
**Grammar & collocations:** `red-team-exercise finding` — finding; `probe an abuse path` — thăm dò.
**Examples:** `The red-team exercise found that a polite rephrasing bypassed the first refusal rule.` → Red team thấy rephrase lịch sự bypass rule đầu.
**Liên kết tiếng Hàn:** `레드팀 훈련`.

## 16. jailbreak attempt /ˈdʒeɪlbreɪk əˈtempt/
**Part of speech:** noun
**Core meaning (English):** an effort to persuade or manipulate a model into ignoring its intended restrictions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nỗ lực thuyết phục/manipulate model bỏ restriction.
**Grammar & collocations:** `jailbreak-attempt pattern` — pattern; `detect a policy bypass` — phát hiện.
**Examples:** `The monitor flagged the jailbreak attempt because it asked the model to reveal hidden instructions.` → Monitor báo attempt vì yêu cầu lộ instruction ẩn.
**Liên kết tiếng Hàn:** `탈옥 시도`.

## 17. prompt attack /prɒmpt əˈtæk/
**Part of speech:** noun
**Core meaning (English):** input crafted to override instructions, extract protected information, or induce unsafe model behavior.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** input được chế để override instruction, lấy info bảo vệ hoặc dụ behavior unsafe.
**Grammar & collocations:** `prompt-attack surface` — surface; `sanitize untrusted content` — làm sạch.
**Examples:** `The gateway isolated retrieved text so a prompt attack could not change the system instruction.` → Gateway cô lập text retrieve để attack không đổi instruction.
**Liên kết tiếng Hàn:** `프롬프트 공격`.

## 18. instruction hierarchy /ɪnˈstrʌkʃən ˈhaɪərɑːrki/
**Part of speech:** noun
**Core meaning (English):** an ordered set of authority levels determining which instructions take priority when they conflict.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các cấp authority có thứ tự quyết định instruction nào ưu tiên khi conflict.
**Grammar & collocations:** `instruction-hierarchy rule` — rule; `honor a higher-priority instruction` — tuân theo.
**Examples:** `The instruction hierarchy kept a user request from overriding the system's privacy constraint.` → Hierarchy ngăn user override constraint privacy.
**Liên kết tiếng Hàn:** `지침 계층`.

## 19. refusal behavior /rɪˈfjuːzəl bɪˈheɪvjər/
**Part of speech:** noun
**Core meaning (English):** the way a system declines a request that is unsafe, unauthorized, or outside its allowed scope.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cách system từ chối request unsafe, unauthorized hoặc ngoài scope.
**Grammar & collocations:** `refusal-behavior consistency` — consistency; `offer a safe alternative` — đưa ra.
**Examples:** `Refusal behavior explained the boundary and offered a safe way to learn the concept.` → Behavior giải thích boundary và đưa cách học an toàn.
**Liên kết tiếng Hàn:** `거부 행동`.

## 20. harmlessness test /ˈhɑːrmləsnəs test/
**Part of speech:** noun
**Core meaning (English):** a test checking that normal-looking requests do not produce dangerous instructions or effects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** test xem request trông bình thường có tạo instruction/effect nguy hiểm không.
**Grammar & collocations:** `harmlessness-test corpus` — corpus; `screen a benign request` — sàng lọc.
**Examples:** `The harmlessness test ensured that an educational chemistry question did not trigger unsafe procedural detail.` → Test đảm bảo câu hỏi giáo dục không sinh chi tiết nguy hiểm.
**Liên kết tiếng Hàn:** `무해성 테스트`.

## Review in context

An **evaluation rubric** compares an output with a **reference answer**; a **judge model** may make a **pairwise preference** using a **rating scale**. **Human annotation**, **inter-annotator agreement**, and a **label policy** improve a **quality rubric**. A **benchmark suite**, **challenge set**, and **stress benchmark** expose different weaknesses, while an **out-of-distribution test** probes transfer. A **safety evaluation** includes a **red-team exercise**, a **jailbreak attempt**, and a **prompt attack**. An **instruction hierarchy** resolves conflicts; **refusal behavior** sets boundaries, and a **harmlessness test** checks benign-looking requests.

**Bản dịch tiếng Việt:** **Evaluation rubric** so output với **reference answer**; **judge model** có thể dùng **pairwise preference** trên **rating scale**. **Human annotation**, **inter-annotator agreement** và **label policy** cải thiện **quality rubric**. **Benchmark suite**, **challenge set** và **stress benchmark** lộ weakness khác nhau, còn **out-of-distribution test** thăm dò transfer. **Safety evaluation** gồm **red-team exercise**, **jailbreak attempt** và **prompt attack**. **Instruction hierarchy** giải quyết conflict; **refusal behavior** đặt boundary, còn **harmlessness test** kiểm tra request trông vô hại.
