# C2 Vocabulary — Robot language grounding and instruction following

This lesson connects a spoken or written instruction to visual entities, actions, and constraints that a robot can execute. The network is **language grounding → instruction following → natural-language command → referring expression → reference resolution → task-oriented dialogue → dialogue state tracking → clarification question → ambiguous instruction → instruction disambiguation → language-conditioned policy → language-conditioned planning → vision-language-action model → multimodal instruction → grounded language model → compositional instruction → spatial preposition → temporal adverb → quantifier grounding → negation handling**.

## 1. language grounding /ˈlæŋɡwɪdʒ ˈɡraʊndɪŋ/
**Part of speech:** noun
**Core meaning (English):** linking language to the objects, actions, and situations it refers to in the world.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** nối language với object, action và situation mà nó nói tới trong thế giới.
**Grammar & collocations:** `language-grounding model` — model; `ground a noun phrase in a scene` — xác định noun phrase trong scene.
**Examples:** `Language grounding linked “the blue bin” to the container beside the conveyor.` → Language grounding nối “thùng màu xanh” với container cạnh conveyor.
**Liên kết tiếng Hàn:** `언어 접지`.

## 2. instruction following /ɪnˈstrʌkʃən ˈfɑːloʊɪŋ/
**Part of speech:** noun
**Core meaning (English):** interpreting and carrying out a person’s stated procedure, request, or constraint.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiểu và thực hiện procedure, request hoặc constraint mà người nêu ra.
**Grammar & collocations:** `instruction-following benchmark` — benchmark; `execute a multi-step request` — thực hiện request nhiều bước.
**Examples:** `Instruction following placed the clean parts on the left and the rejected parts on the right.` → Instruction following đặt part sạch bên trái và part bị loại bên phải.
**Liên kết tiếng Hàn:** `지시 따르기`.

## 3. natural-language command /ˈnætʃərəl ˈlæŋɡwɪdʒ kəˈmænd/
**Part of speech:** noun
**Core meaning (English):** a command expressed in ordinary human language rather than a formal control syntax.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** command nói bằng ngôn ngữ tự nhiên thay vì cú pháp control formal.
**Grammar & collocations:** `natural-language-command parser` — parser; `translate a spoken request` — chuyển request nói.
**Examples:** `The natural-language command “bring me the small wrench” initiated a visual search.` → Natural-language command “đưa tôi chiếc cờ-lê nhỏ” khởi động visual search.
**Liên kết tiếng Hàn:** `자연어 명령`.

## 4. referring expression /rɪˈfɜːrɪŋ ɪkˈspreʃən/
**Part of speech:** noun
**Core meaning (English):** a word or phrase used to identify a particular person, object, place, or event.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** từ hoặc cụm từ dùng để xác định người, object, place hoặc event cụ thể.
**Grammar & collocations:** `referring-expression parser` — parser; `resolve “the second box”` — xác định “hộp thứ hai”.
**Examples:** `The referring expression “behind the red tray” narrowed the search region.` → Referring expression “phía sau khay đỏ” thu hẹp vùng tìm kiếm.
**Liên kết tiếng Hàn:** `지시 표현`.

## 5. reference resolution /ˈrefərəns ˌrezəˈluːʃən/
**Part of speech:** noun
**Core meaning (English):** determining which real entity a word or phrase refers to in the current context.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác định entity thật mà từ hoặc cụm từ đang nói tới trong context hiện tại.
**Grammar & collocations:** `reference-resolution confidence` — confidence; `resolve a pronoun or description` — giải pronoun hoặc mô tả.
**Examples:** `Reference resolution identified “it” as the cup rather than the nearby saucer.` → Reference resolution xác định “nó” là cái cốc chứ không phải đĩa gần đó.
**Liên kết tiếng Hàn:** `지시 대상 해소`.

## 6. task-oriented dialogue /tæsk ˈɔːrientɪd ˈdaɪəlɔːɡ/
**Part of speech:** noun
**Core meaning (English):** a conversation structured to accomplish a practical task or service.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cuộc hội thoại có cấu trúc để hoàn thành task hoặc service thực tế.
**Grammar & collocations:** `task-oriented-dialogue policy` — policy; `confirm a delivery detail` — xác nhận chi tiết delivery.
**Examples:** `The task-oriented dialogue asked which of two identical parcels the user meant.` → Task-oriented dialogue hỏi user muốn parcel nào trong hai parcel giống nhau.
**Liên kết tiếng Hàn:** `작업 지향 대화`.

## 7. dialogue state tracking /ˈdaɪəlɔːɡ steɪt ˈtrækɪŋ/
**Part of speech:** noun
**Core meaning (English):** maintaining a structured estimate of what has been said, requested, confirmed, and left unresolved in a dialogue.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** duy trì estimate có cấu trúc về điều đã nói, yêu cầu, xác nhận và còn bỏ ngỏ trong dialogue.
**Grammar & collocations:** `dialogue-state-tracking error` — error; `update a slot value` — cập nhật giá trị slot.
**Examples:** `Dialogue state tracking remembered that the destination was confirmed but the delivery time was not.` → Dialogue state tracking nhớ destination đã xác nhận nhưng delivery time chưa.
**Liên kết tiếng Hàn:** `대화 상태 추적`.

## 8. clarification question /ˌklærəfəˈkeɪʃən ˈkwestʃən/
**Part of speech:** noun
**Core meaning (English):** a question asked to remove uncertainty before an instruction is executed.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** câu hỏi để loại uncertainty trước khi execute instruction.
**Grammar & collocations:** `clarification-question policy` — policy; `ask for a missing attribute` — hỏi attribute còn thiếu.
**Examples:** `The clarification question asked whether “the red tool” meant the handle or the case.` → Clarification question hỏi “tool đỏ” là tay cầm hay hộp.
**Liên kết tiếng Hàn:** `명확화 질문`.

## 9. ambiguous instruction /æmˈbɪɡjuəs ɪnˈstrʌkʃən/
**Part of speech:** noun
**Core meaning (English):** an instruction that permits two or more materially different interpretations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** instruction cho phép từ hai cách hiểu khác nhau trở lên.
**Grammar & collocations:** `ambiguous-instruction detector` — detector; `flag multiple interpretations` — đánh dấu nhiều cách hiểu.
**Examples:** `The robot paused because “put it over there” was an ambiguous instruction.` → Robot tạm dừng vì “đặt nó ở đằng kia” là ambiguous instruction.
**Liên kết tiếng Hàn:** `모호한 지시`.

## 10. instruction disambiguation /ɪnˈstrʌkʃən dɪsˌæmbɪɡjuˈeɪʃən/
**Part of speech:** noun
**Core meaning (English):** resolving competing interpretations of an instruction using context, questions, or additional sensing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** giải các cách hiểu cạnh tranh bằng context, câu hỏi hoặc sensing thêm.
**Grammar & collocations:** `instruction-disambiguation step` — bước; `choose the contextually likely parse` — chọn parse phù hợp context.
**Examples:** `Instruction disambiguation used the previous mention of the tray to select the correct object.` → Instruction disambiguation dùng mention trước đó về khay để chọn đúng object.
**Liên kết tiếng Hàn:** `지시 모호성 해소`.

## 11. language-conditioned policy /ˈlæŋɡwɪdʒ kənˈdɪʃənd ˈpɑːləsi/
**Part of speech:** noun
**Core meaning (English):** a policy whose action depends on a language instruction as well as the observed state.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** policy có action phụ thuộc cả instruction language và state quan sát.
**Grammar & collocations:** `language-conditioned-policy input` — input; `condition behavior on a phrase` — condition behavior theo phrase.
**Examples:** `The language-conditioned policy chose a gentle grasp after hearing “handle it carefully.”` → Language-conditioned policy chọn grasp nhẹ sau khi nghe “xử lý cẩn thận”.
**Liên kết tiếng Hàn:** `언어 조건 정책`.

## 12. language-conditioned planning /ˈlæŋɡwɪdʒ kənˈdɪʃənd ˈplænɪŋ/
**Part of speech:** noun
**Core meaning (English):** planning whose goals, constraints, or preferences are supplied through language.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** planning có goal, constraint hoặc preference được cung cấp qua language.
**Grammar & collocations:** `language-conditioned-planning query` — query; `turn “avoid the wet area” into a constraint` — biến câu thành constraint.
**Examples:** `Language-conditioned planning routed the robot around the wet area mentioned by the cleaner.` → Language-conditioned planning đưa robot vòng vùng ướt mà cleaner nhắc.
**Liên kết tiếng Hàn:** `언어 조건 계획`.

## 13. vision-language-action model /ˈvɪʒən ˈlæŋɡwɪdʒ ˈækʃən ˈmɑːdəl/
**Part of speech:** noun
**Core meaning (English):** a model that maps visual observations and language instructions to robot actions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model chuyển visual observation và language instruction thành robot action.
**Grammar & collocations:** `vision-language-action-model output` — output; `predict an end-effector command` — dự đoán command end-effector.
**Examples:** `The vision-language-action model placed the labeled parcel on the matching shelf.` → Vision-language-action model đặt parcel có nhãn lên kệ tương ứng.
**Liên kết tiếng Hàn:** `시각-언어-행동 모델`.

## 14. multimodal instruction /ˌmʌltiˈmoʊdəl ɪnˈstrʌkʃən/
**Part of speech:** noun
**Core meaning (English):** an instruction that combines language with gestures, images, pointing, or other modalities.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** instruction kết hợp language với gesture, image, pointing hoặc modality khác.
**Grammar & collocations:** `multimodal-instruction parser` — parser; `combine speech with a pointing cue` — gộp lời nói với cue chỉ tay.
**Examples:** `The multimodal instruction said “take this one” while the user pointed at the upper bin.` → Multimodal instruction nói “lấy cái này” trong khi user chỉ bin trên.
**Liên kết tiếng Hàn:** `다중 모달 지시`.

## 15. grounded language model /ˈɡraʊndɪd ˈlæŋɡwɪdʒ ˈmɑːdəl/
**Part of speech:** noun
**Core meaning (English):** a language model whose interpretations are tied to observations, actions, or entities in an environment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** language model có interpretation gắn với observation, action hoặc entity trong environment.
**Grammar & collocations:** `grounded-language-model output` — output; `tie a phrase to a visible object` — gắn phrase với object thấy được.
**Examples:** `The grounded language model rejected “empty shelf” after detecting a box behind the flap.` → Grounded language model bác “kệ trống” sau khi detect box sau flap.
**Liên kết tiếng Hàn:** `접지된 언어 모델`.

## 16. compositional instruction /ˌkɑːmpəˈzɪʃənəl ɪnˈstrʌkʃən/
**Part of speech:** noun
**Core meaning (English):** an instruction whose meaning is built by combining smaller descriptions, actions, or constraints.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** instruction có meaning tạo bởi việc ghép description, action hoặc constraint nhỏ.
**Grammar & collocations:** `compositional-instruction parser` — parser; `combine color, location, and action` — gộp màu, vị trí và action.
**Examples:** `The compositional instruction “pick the small cup beside the plate” combined size, object, and relation.` → Compositional instruction “lấy cốc nhỏ cạnh đĩa” gộp size, object và relation.
**Liên kết tiếng Hàn:** `구성적 지시`.

## 17. spatial preposition /ˈspeɪʃəl ˌprepəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** a word such as “inside,” “behind,” or “beside” that expresses a spatial relation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** từ như “inside”, “behind”, “beside” biểu đạt quan hệ không gian.
**Grammar & collocations:** `spatial-preposition parser` — parser; `interpret “under the table”` — hiểu “dưới bàn”.
**Examples:** `The spatial preposition “between” selected the gap separating the two carts.` → Spatial preposition “between” chọn khoảng giữa hai xe đẩy.
**Liên kết tiếng Hàn:** `공간 전치사`.

## 18. temporal adverb /ˈtempərəl ˈædvɜːrb/
**Part of speech:** noun
**Core meaning (English):** an adverb that locates an action in time or describes its timing or frequency.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** trạng từ định vị action theo time hoặc mô tả timing/frequency của nó.
**Grammar & collocations:** `temporal-adverb scope` — phạm vi; `interpret “then” as a sequence cue` — hiểu “sau đó” là cue sequence.
**Examples:** `The temporal adverb “first” forced the inspection to precede the lift.` → Temporal adverb “first” buộc inspection diễn ra trước lift.
**Liên kết tiếng Hàn:** `시간 부사`.

## 19. quantifier grounding /ˈkwɑːntəfaɪər ˈɡraʊndɪŋ/
**Part of speech:** noun
**Core meaning (English):** determining which entities and how many of them a quantity word refers to in a scene.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác định entity nào và bao nhiêu entity mà quantity word nói tới trong scene.
**Grammar & collocations:** `quantifier-grounding rule` — rule; `interpret “both boxes”` — hiểu “cả hai hộp”.
**Examples:** `Quantifier grounding selected exactly three bolts from the tray of ten.` → Quantifier grounding chọn đúng ba bolt trong khay có mười cái.
**Liên kết tiếng Hàn:** `수량사 접지`.

## 20. negation handling /nɪˈɡeɪʃən ˈhændlɪŋ/
**Part of speech:** noun
**Core meaning (English):** interpreting words such as “not” or “without” so the robot avoids the excluded action or entity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hiểu từ như “not” hoặc “without” để robot tránh action hoặc entity bị loại.
**Grammar & collocations:** `negation-handling module` — module; `exclude a forbidden object` — loại object bị cấm.
**Examples:** `Negation handling prevented the robot from touching the containers without labels.` → Negation handling ngăn robot chạm các container không có nhãn.
**Liên kết tiếng Hàn:** `부정 처리`.

## Review in context

**Language grounding** enables **instruction following** for a **natural-language command** containing a **referring expression**; **reference resolution** identifies its target. A **task-oriented dialogue** uses **dialogue state tracking** and a **clarification question** when an **ambiguous instruction** needs **instruction disambiguation**. A **language-conditioned policy** and **language-conditioned planning** may be driven by a **vision-language-action model**, a **multimodal instruction**, or a **grounded language model**. **Compositional instruction** handling parses each **spatial preposition**, **temporal adverb**, and **quantifier grounding** decision, while **negation handling** protects excluded objects and actions.

**Bản dịch tiếng Việt:** **Language grounding** giúp **instruction following** thực hiện **natural-language command** có **referring expression**; **reference resolution** xác định target. **Task-oriented dialogue** dùng **dialogue state tracking** và **clarification question** khi **ambiguous instruction** cần **instruction disambiguation**. **Language-conditioned policy** và **language-conditioned planning** có thể được dẫn bởi **vision-language-action model**, **multimodal instruction** hoặc **grounded language model**. Xử lý **compositional instruction** phân tích từng **spatial preposition**, **temporal adverb** và quyết định **quantifier grounding**, còn **negation handling** bảo vệ object và action bị loại.
