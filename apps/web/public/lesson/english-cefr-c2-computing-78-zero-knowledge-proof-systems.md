# C2 Vocabulary — Zero-knowledge proof systems

This lesson follows a zero-knowledge proof from commitments and challenge responses through extractors, polynomial commitments, setup choices, and recursive composition.

Flow: **knowledge soundness → special soundness → honest-verifier zero knowledge → simulator trapdoor → Fiat-Shamir transform → commitment scheme → binding property → hiding property → interactive oracle proof → polynomial commitment → proof composition → recursive proof → proof aggregation → succinct argument → transparent setup → trusted setup ceremony → witness indistinguishability → knowledge extractor → algebraic group model → proof-carrying data**.

## 1. knowledge soundness /ˈnɒlɪdʒ ˈsaʊndnəs/
**Part of speech:** noun
**Core meaning (English):** a proof-system property requiring a successful prover to possess or be able to reveal a valid witness.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prover thành công phải có hoặc tiết lộ witness hợp lệ.
**Grammar & collocations:** `knowledge-soundness theorem` — theorem; `extract a witness` — trích.
**Examples:** `Knowledge soundness prevented a prover from convincing the verifier without knowing the secret.` → Soundness ngăn thuyết phục mà không biết secret.
**Liên kết tiếng Hàn:** `지식 건전성`.

## 2. special soundness /ˈspeʃəl ˈsaʊndnəs/
**Part of speech:** noun
**Core meaning (English):** a property allowing an extractor to recover a witness from accepting transcripts with different challenges.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** extractor lấy witness từ transcript accept với challenge khác nhau.
**Grammar & collocations:** `special-soundness extractor` — extractor; `fork two transcripts` — tách.
**Examples:** `Special soundness turned two valid challenge responses into an explicit witness.` → Soundness biến hai response thành witness.
**Liên kết tiếng Hàn:** `특수 건전성`.

## 3. honest-verifier zero knowledge /ˈɒnɪst ˈverɪfaɪər ˈzɪəroʊ ˈnɒlɪdʒ/
**Part of speech:** noun
**Core meaning (English):** zero knowledge guaranteed when the verifier follows the prescribed challenge-generation procedure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** zero knowledge khi verifier tạo challenge đúng quy trình.
**Grammar & collocations:** `honest-verifier-zero-knowledge proof` — proof; `simulate a transcript` — mô phỏng.
**Examples:** `Honest-verifier zero knowledge simplified the simulator because challenges were predictable.` → HVZK đơn giản hóa simulator.
**Liên kết tiếng Hàn:** `정직한 검증자 영지식`.

## 4. simulator trapdoor /ˈsɪmjəleɪtər ˈtræpdɔːr/
**Part of speech:** noun
**Core meaning (English):** hidden simulation information that lets a proof simulator construct convincing transcripts without the witness.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thông tin ẩn giúp simulator tạo transcript mà không cần witness.
**Grammar & collocations:** `simulator-trapdoor assumption` — assumption; `program a challenge` — lập trình.
**Examples:** `The simulator trapdoor was erased after setup so it could not forge later proofs.` → Trapdoor bị xóa sau setup.
**Liên kết tiếng Hàn:** `시뮬레이터 트랩도어`.

## 5. Fiat-Shamir transform /ˌfiːɑːt ʃəˈmɪər ˈtrænsfɔːrm/
**Part of speech:** noun
**Core meaning (English):** a transformation that replaces an interactive verifier challenge with a hash of the transcript.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đổi challenge tương tác bằng hash của transcript.
**Grammar & collocations:** `Fiat-Shamir-transform hash` — hash; `make a protocol noninteractive` — làm noninteractive.
**Examples:** `The Fiat-Shamir transform removed the extra network round from the proof.` → Transform bỏ một round mạng.
**Liên kết tiếng Hàn:** `피아트-샤미르 변환`.

## 6. commitment scheme /kəˈmɪtmənt skiːm/
**Part of speech:** noun
**Core meaning (English):** a protocol that lets a party commit to a value while delaying its disclosure.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** protocol khóa value trước rồi mới tiết lộ.
**Grammar & collocations:** `commitment-scheme opening` — opening; `commit to a polynomial` — cam kết.
**Examples:** `The commitment scheme fixed the prover's polynomial before the challenge arrived.` → Scheme khóa polynomial trước challenge.
**Liên kết tiếng Hàn:** `커밋먼트 방식`.

## 7. binding property /ˈbaɪndɪŋ ˈprɒpərti/
**Part of speech:** noun
**Core meaning (English):** the guarantee that a commitment cannot be opened as two different values.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** commitment không thể mở thành hai value khác nhau.
**Grammar & collocations:** `binding-property reduction` — reduction; `prevent equivocal opening` — ngăn.
**Examples:** `The binding property stopped the prover from changing its polynomial after seeing the challenge.` → Binding ngăn đổi polynomial.
**Liên kết tiếng Hàn:** `구속성`.

## 8. hiding property /ˈhaɪdɪŋ ˈprɒpərti/
**Part of speech:** noun
**Core meaning (English):** the guarantee that a commitment reveals negligible information about the committed value before opening.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** commitment hầu như không lộ value trước opening.
**Grammar & collocations:** `hiding-property proof` — proof; `mask a committed message` — che.
**Examples:** `The hiding property kept the witness private while the verifier checked the commitment.` → Hiding giữ witness kín.
**Liên kết tiếng Hàn:** `은닉성`.

## 9. interactive oracle proof /ˌɪntərˈæktɪv ˈɔːrəkəl pruːf/
**Part of speech:** noun
**Core meaning (English):** a proof protocol in which a prover exposes an encoded oracle and the verifier samples a few positions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** prover đưa oracle mã hóa, verifier lấy mẫu vài vị trí.
**Grammar & collocations:** `interactive-oracle-proof query` — query; `sample a codeword position` — lấy mẫu.
**Examples:** `The interactive oracle proof tested a few locations instead of reading the entire computation.` → IOP test vài vị trí.
**Liên kết tiếng Hàn:** `대화형 오라클 증명`.

## 10. polynomial commitment /ˌpɒlɪˈnoʊmiəl kəˈmɪtmənt/
**Part of speech:** noun
**Core meaning (English):** a commitment to a polynomial that supports short proofs about evaluations at selected points.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** commitment polynomial hỗ trợ proof ngắn về evaluation.
**Grammar & collocations:** `polynomial-commitment opening` — opening; `prove an evaluation` — chứng minh.
**Examples:** `The polynomial commitment let the verifier check one evaluation without downloading all coefficients.` → Commitment cho check một evaluation.
**Liên kết tiếng Hàn:** `다항식 커밋먼트`.

## 11. proof composition /pruːf ˌkɒmpəˈzɪʃən/
**Part of speech:** noun
**Core meaning (English):** combining several proofs so that their guarantees jointly establish a larger statement.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghép nhiều proof để chứng minh statement lớn.
**Grammar & collocations:** `proof-composition rule` — rule; `compose independent claims` — ghép.
**Examples:** `Proof composition combined range, membership, and consistency claims into one result.` → Composition gộp ba claim.
**Liên kết tiếng Hàn:** `증명 조합`.

## 12. recursive proof /rɪˈkɜːrsɪv pruːf/
**Part of speech:** noun
**Core meaning (English):** a proof that verifies another proof, allowing large computations to be summarized incrementally.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** proof xác minh proof khác để tóm tắt computation lớn.
**Grammar & collocations:** `recursive-proof circuit` — circuit; `fold an earlier proof` — gấp.
**Examples:** `The recursive proof compressed a long chain of state transitions into one certificate.` → Proof đệ quy nén chain dài.
**Liên kết tiếng Hàn:** `재귀 증명`.

## 13. proof aggregation /pruːf ˌæɡrɪˈɡeɪʃən/
**Part of speech:** noun
**Core meaning (English):** merging several proofs into a single proof with shared verification work.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gộp nhiều proof thành một để chia sẻ công việc verify.
**Grammar & collocations:** `proof-aggregation protocol` — protocol; `batch verification` — xác minh batch.
**Examples:** `Proof aggregation reduced the verifier's cost for a batch of independent transactions.` → Aggregation giảm cost verify batch.
**Liên kết tiếng Hàn:** `증명 집계`.

## 14. succinct argument /səkˈsɪŋkt ˈɑːrɡjəmənt/
**Part of speech:** noun
**Core meaning (English):** a proof-like argument whose communication and verification costs are much smaller than the computation described.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** argument ngắn và verify rẻ hơn computation được mô tả.
**Grammar & collocations:** `succinct-argument size` — size; `verify a compressed claim` — xác minh.
**Examples:** `The succinct argument summarized a large execution in a few kilobytes.` → Argument tóm execution lớn trong vài KB.
**Liên kết tiếng Hàn:** `간결한 논증`.

## 15. transparent setup /trænsˈpærənt ˈsetʌp/
**Part of speech:** noun
**Core meaning (English):** proof-system initialization whose public randomness can be generated without hidden secret parameters.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** setup dùng randomness công khai, không secret parameter ẩn.
**Grammar & collocations:** `transparent-setup transcript` — transcript; `derive public randomness` — suy ra.
**Examples:** `Transparent setup avoided the need to trust a party that generated secret randomness.` → Setup minh bạch bỏ nhu cầu tin bên tạo random.
**Liên kết tiếng Hàn:** `투명한 설정`.

## 16. trusted setup ceremony /ˈtrʌstɪd ˈsetʌp ˈserəmoʊni/
**Part of speech:** noun
**Core meaning (English):** a multi-party procedure intended to generate public parameters while destroying hidden toxic waste.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** thủ tục nhiều bên tạo parameter và hủy toxic waste.
**Grammar & collocations:** `trusted-setup-ceremony transcript` — transcript; `destroy toxic waste` — hủy.
**Examples:** `The trusted setup ceremony recorded contributions so one honest participant could preserve soundness.` → Ceremony ghi contribution để giữ soundness.
**Liên kết tiếng Hàn:** `신뢰 설정 의식`.

## 17. witness indistinguishability /ˈwɪtnəs ˌɪndɪˌstɪŋɡwɪʃəˈbɪləti/
**Part of speech:** noun
**Core meaning (English):** a property that prevents a verifier from distinguishing which of several valid witnesses produced a proof.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** verifier không phân biệt witness nào trong nhiều witness hợp lệ.
**Grammar & collocations:** `witness-indistinguishability argument` — argument; `hide witness choice` — che.
**Examples:** `Witness indistinguishability hid which authorization path the prover had used.` → Property che path authorize.
**Liên kết tiếng Hàn:** `증인 비구별성`.

## 18. knowledge extractor /ˈnɒlɪdʒ ɪkˈstræktər/
**Part of speech:** noun
**Core meaning (English):** a conceptual algorithm that obtains a witness from a prover that succeeds with sufficient probability.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** algorithm khái niệm lấy witness từ prover thành công đủ xác suất.
**Grammar & collocations:** `knowledge-extractor experiment` — experiment; `rewind a prover` — chạy lại.
**Examples:** `The knowledge extractor rewound the prover with a fresh challenge to recover the witness.` → Extractor chạy lại với challenge mới.
**Liên kết tiếng Hàn:** `지식 추출기`.

## 19. algebraic group model /ˌældʒəˈbreɪɪk ɡruːp ˈmɒdəl/
**Part of speech:** noun
**Core meaning (English):** an idealized model in which an adversary can manipulate group elements only through explicitly represented algebraic operations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model lý tưởng giới hạn thao tác group theo operation algebraic rõ.
**Grammar & collocations:** `algebraic-group-model assumption` — assumption; `query a group oracle` — hỏi.
**Examples:** `The reduction was proven in an algebraic group model before concrete instantiation.` → Reduction chứng minh trong model trước triển khai.
**Liên kết tiếng Hàn:** `대수적 군 모델`.

## 20. proof-carrying data /pruːf ˈkæriɪŋ ˈdeɪtə/
**Part of speech:** noun
**Core meaning (English):** data accompanied by a compact proof that it satisfies a specified computation or consistency condition.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** data đi cùng proof ngắn về computation hoặc consistency.
**Grammar & collocations:** `proof-carrying-data stream` — stream; `verify a state transition` — xác minh.
**Examples:** `Proof-carrying data let a small client verify a remote database update.` → Data mang proof cho client nhỏ verify update.
**Liên kết tiếng Hàn:** `증명을 포함한 데이터`.

## Review in context

**Knowledge soundness** and **special soundness** support an **honest-verifier zero knowledge** protocol whose **simulator trapdoor** can produce transcripts. The **Fiat-Shamir transform** makes a **commitment scheme** noninteractive; its **binding property** and **hiding property** protect the value. An **interactive oracle proof** and **polynomial commitment** support **proof composition**, **recursive proof**, and **proof aggregation** inside a **succinct argument**. A **transparent setup** avoids secrets, while a **trusted setup ceremony** records contributions. **Witness indistinguishability** hides the chosen witness, a **knowledge extractor** supports the reduction, the **algebraic group model** states an assumption, and **proof-carrying data** lets small verifiers check large computations.

**Bản dịch tiếng Việt:** **Soundness tri thức** và **soundness đặc biệt** hỗ trợ protocol **zero-knowledge với verifier trung thực**, trong đó **trapdoor simulator** tạo transcript. **Biến đổi Fiat-Shamir** làm **commitment scheme** thành noninteractive; **tính binding** và **tính hiding** bảo vệ value. **Interactive oracle proof** và **polynomial commitment** hỗ trợ **composition proof**, **proof đệ quy** và **aggregation proof** trong **succinct argument**. **Setup minh bạch** tránh secret, còn **ceremony setup tin cậy** ghi lại contribution. **Tính không phân biệt witness** che witness, **knowledge extractor** hỗ trợ reduction, **model group đại số** nêu giả định, và **data mang proof** cho phép verifier nhỏ kiểm tra computation lớn.
