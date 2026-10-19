# C2 Vocabulary 69 — Ribosomal profiling, translatomic dynamics, and non-canonical microprotein translation

Trong sinh học phân tử hiện đại và hệ gen chức năng (*functional genomics*), cuộc cách mạng công nghệ giải trình tự hệ dịch mã (*translatomics*) đã đập tan giáo điều sinh học kinh điển cho rằng hệ phiên mã mRNA phản ánh trực tiếp lượng protein được tổng hợp. Bài học này trang bị cho người học C2 hệ thống thuật ngữ y sinh chuyên sâu nhất về động học ribosome ở độ phân giải từng nucleotide: từ kỹ thuật định lượng dấu chân ribosome (*ribosome footprint profiling*), cơ chế cố định ribosome bằng cycloheximide (*cycloheximide translation arrest*), hiện tượng khởi đầu dịch mã tại các bộ ba không phải AUG (*non-AUG initiation codons*), vai trò điều hòa tinh vi của các khung đọc mở thượng nguồn (*upstream open reading frames*), động học dừng ribosome (*ribosome stalling kinetics*), cho đến việc giải mã chức năng của các vi peptide ẩn giấu (*micropeptide functional characterization*).

Flow của bài học: **ribosome footprint profiling** → **ribosome-protected fragment** → **cycloheximide translation arrest** → **translatome profiling** → **non-AUG initiation codon** → **upstream open reading frame** → **ribosome stalling kinetics** → **micropeptide functional characterization** → **non-canonical translation initiation** → **ribosome elongation velocity** → **harringtonine run-off assay** → **ribosomal queueing** → **downstream open reading frame** → **short open reading frame** → **ribosome collision sensor** → **ribosome-associated quality control** → **nascent peptide exit tunnel** → **ribosome occupancy density** → **translational readthrough** → **ribosomal frameshifting element** → **non-canonical open reading frame** → **polysome fractionation** → **translatomic concordance** → **stop-codon readthrough efficiency** → **microprotein cellular localization**.

---

## 1. ribosome footprint profiling /ˌraɪbəsoʊm ˈfʊtˌprɪnt ˈproʊfaɪlɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ phương pháp giải trình tự phân tử đột phá hoặc tân ngữ sau `perform`, `employ`, `revolutionize with`.

**Core meaning — English:** A high-throughput sequencing technique that maps the exact positions of actively translating ribosomes across an entire transcriptome at single-nucleotide resolution by enzymatically digesting unprotected RNA and sequencing the protected footprints.

**Core meaning & mental image — Tiếng Việt:** Kỹ thuật lập hồ sơ dấu chân ribosome; hãy hình dung hàng ngàn cỗ máy gặt lúa (ribosome) đang di chuyển dọc theo các cánh đồng lúa mì (chuỗi mRNA); một trận lũ enzyme tràn qua cuốn sạch toàn bộ lúa mì trơ trụi, chỉ để lại những mảnh thân lúa nằm lọt thỏm ngay dưới gầm của mỗi cỗ máy gặt — người nghiên cứu chụp ảnh lại từng mảnh lúa đó để biết chính xác cỗ máy gặt đang dừng ở tọa độ nào.

**Grammar & collocations:** `perform ribosome footprint profiling` — thực hiện kỹ thuật lập hồ sơ dấu chân ribosome; `resolution of ribosome footprint profiling` — độ phân giải của lập hồ sơ dấu chân ribosome; `ribosome footprint profiling dataset` — bộ dữ liệu lập hồ sơ dấu chân ribosome.

**Register & nuance:** `cutting-edge molecular biology, translatomics & genomics (Ingolia & Weissman)` — thường được gọi tắt là *Ribo-seq*; vượt trội hơn RNA-seq thông thường vì nó chỉ ghi nhận những phân tử RNA thực sự đang được dịch mã thành protein chứ không phải lượng mRNA tồn tại thụ động.

**Examples:** `Ribosome footprint profiling revealed that thousands of previously annotated non-coding RNAs are actively engaged by the translation machinery.` → Kỹ thuật lập hồ sơ dấu chân ribosome đã tiết lộ rằng hàng ngàn phân tử RNA từng được chú giải là không mã hóa thực chất đang tham gia tích cực vào bộ máy dịch mã.

**Liên kết tiếng Hàn:** `리보솜 풋프린트 프로파일링 / 리보솜 발자국 분석법` (ribosome footprint profiling / ribosome 足跡 分析法) — phương pháp lập hồ sơ dấu chân ribosome.

---

## 2. ribosome-protected fragment /ˌraɪbəsoʊm prəˈtɛktəd ˈfræɡmənt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ đoạn RNA đích hoặc tân ngữ sau `isolate`, `sequence`, `align`.

**Core meaning — English:** A short stretch of messenger RNA (typically 28 to 32 nucleotides in length) that is physically shielded from ribonuclease digestion by the bulky envelope of an active 80S ribosome during translation.

**Core meaning & mental image — Tiếng Việt:** Đoạn phân tử được ribosome bảo vệ / mảnh dấu chân ribosome; hãy hình dung một người đứng dưới chiếc ô che mưa khổng lồ giữa cơn mưa axit: toàn bộ bộ quần áo bên ngoài bị cháy rụi, chỉ có một mảnh vải nhỏ ngay sát dưới đỉnh ô được giữ nguyên vẹn không hề sứt mẻ.

**Grammar & collocations:** `sequence ribosome-protected fragments` — giải trình tự các đoạn RNA được ribosome bảo vệ; `length distribution of ribosome-protected fragments` — sự phân bố chiều dài của các đoạn được ribosome bảo vệ; `align ribosome-protected fragments to the reference genome` — gióng hàng các mảnh được ribosome bảo vệ với hệ gen tham chiếu.

**Register & nuance:** `biochemical translatomics` — thường viết tắt là *RPF*; độ dài chuẩn xác 28–30 nucleotide phản ánh trạng thái ribosome ở vị trí sau chuyển vị (*post-translocation*), trong khi các đoạn 20–22 nucleotide phản ánh trạng thái tiền chuyển vị (*pre-translocation*).

**Examples:** `Deep sequencing of each ribosome-protected fragment allows investigators to infer the precise codon positioned in the ribosomal catalytic decoding center.` → Việc giải trình tự sâu từng đoạn RNA được ribosome bảo vệ cho phép các nhà điều tra suy luận ra bộ ba mã hóa chuẩn xác đang nằm tại trung tâm giải mã xúc tác của ribosome.

**Liên kết tiếng Hàn:** `리보솜 보호 단편` (ribosome 保護 斷片) — đoạn phân tử được ribosome che chở / bảo vệ.

---

## 3. cycloheximide translation arrest /ˌsaɪkloʊˈhɛksɪmaɪd trænsˈleɪʃən əˈrɛst/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tân ngữ sau `induce`, `rely on`, hoặc làm chủ ngữ trong quy trình chuẩn bị mẫu dịch mã.

**Core meaning — English:** The pharmacological immobilization of translating 80S ribosomes on messenger RNA achieved by administering cycloheximide, which binds the large ribosomal subunit and blocks elongation factor-dependent translocation.

**Core meaning & mental image — Tiếng Việt:** Sự đình chỉ dịch mã bằng cycloheximide; hãy hình dung một dung dịch đông cứng tức thì được phun vào một dây chuyền đóng gói bánh kẹo đang chạy hết tốc lực: tất cả các cánh tay robot bị khóa cứng tại chỗ trong một phần nghìn giây, giữ nguyên trạng thái đóng gói của từng chiếc kẹo.

**Grammar & collocations:** `induce cycloheximide translation arrest` — gây ra sự đình chỉ dịch mã bằng cycloheximide; `kinetics of cycloheximide translation arrest` — động học của sự đình chỉ dịch mã bằng cycloheximide; `sample lysis following cycloheximide translation arrest` — ly giải mẫu sau khi đình chỉ dịch mã bằng cycloheximide.

**Register & nuance:** `experimental translatomics protocol` — cycloheximide là chất ức chế kinh điển giúp cố định ribosome; tuy nhiên, xử lý quá lâu có thể gây ra hiện tượng dịch chuyển giả (*ribosome redistribution artifact*), đòi hỏi phải dùng phương pháp đóng băng nhanh (*flash-freezing*) song song.

**Examples:** `Immediate cycloheximide translation arrest is essential during cell harvesting to capture a snapshot of translational kinetics without in vitro ribosome run-off.` → Sự đình chỉ dịch mã bằng cycloheximide tức thì là điều thiết yếu trong quá trình thu hoạch tế bào để bắt trọn bức ảnh tức thời về động học dịch mã mà không bị trôi ribosome trong ống nghiệm.

**Liên kết tiếng Hàn:** `시클로헥시미드 번역 정지` (cycloheximide 飜譯 停止) — sự chặn đứng dịch mã bằng cycloheximide.

---

## 4. translatome profiling /trænsˈleɪtoʊm ˈproʊfaɪlɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Làm chủ ngữ hoặc tân ngữ chỉ chiến lược khảo sát toàn diện các phân tử RNA đang được dịch mã trong tế bào.

**Core meaning — English:** The comprehensive, global qualitative and quantitative characterization of all actively translated RNA transcripts within a specific cell, tissue, or pathophysiological condition at a given time point.

**Core meaning & mental image — Tiếng Việt:** Lập hồ sơ toàn bộ hệ dịch mã; hãy hình dung việc một thanh tra không kiểm tra số lượng sách nằm im trên giá sách thư viện (transcriptome), mà chỉ ghi chép tỉ mỉ danh sách những cuốn sách đang mở ra trên bàn và có độc giả đang thực sự đọc từng dòng chữ (translatome).

**Grammar & collocations:** `conduct translatome profiling` — tiến hành lập hồ sơ toàn bộ hệ dịch mã; `insights from translatome profiling` — các phát hiện sâu sắc từ lập hồ sơ hệ dịch mã; `translatome profiling across neurodegenerative models` — lập hồ sơ hệ dịch mã trên các mô hình thoái hóa thần kinh.

**Register & nuance:** `systems biology & translational genomics` — phân biệt với *transcriptome profiling* (đo mức RNA tổng) và *proteome profiling* (đo mức protein tích lũy); hệ dịch mã nắm bắt tốc độ sản xuất protein thực tế theo thời gian thực (*real-time protein synthesis rate*).

**Examples:** `Translatome profiling demonstrated that cancer cells rapidly reshape their protein output in response to hypoxia without altering steady-state mRNA abundance.` → Việc lập hồ sơ toàn bộ hệ dịch mã đã chứng minh rằng các tế bào ung thư nhanh chóng tái định hình sản lượng protein của mình để đáp ứng với tình trạng thiếu oxy mà không làm thay đổi lượng mRNA ở trạng thái ổn định.

**Liên kết tiếng Hàn:** `번역체 프로파일링 / 트랜스레이톰 분석` (飜譯體 profiling / translatome 分析) — lập hồ sơ phân tích toàn bộ hệ dịch mã.

---

## 5. non-AUG initiation codon /ˌnɑn eɪ juː ˈdʒiː ɪˌnɪʃiˈeɪʃən ˈkoʊdɑn/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò chủ ngữ hoặc tân ngữ chỉ các bộ ba khởi đầu dịch mã không điển hình (ví dụ: `recognize a non-AUG initiation codon`).

**Core meaning — English:** An alternative triplet nucleotide sequence—most frequently CUG, GUG, or UUG—that is recognized by initiator tRNA complexes to commence protein translation instead of the canonical methionine start codon AUG.

**Core meaning & mental image — Tiếng Việt:** Bộ ba mở đầu không phải AUG / codon khởi đầu phi điển hình; hãy hình dung một ga tàu hỏa bình thường chỉ cho phép đoàn tàu xuất phát khi đèn tín hiệu màu xanh lá cây (AUG) bật sáng; bỗng nhiên các đoàn tàu bắt đầu khởi hành ngay khi đèn tín hiệu màu vàng hoặc màu tím (CUG, GUG) nhấp nháy, mở ra những tuyến đường sắt bí mật chưa từng có trên bản đồ.

**Grammar & collocations:** `initiate translation at a non-AUG initiation codon` — khởi đầu dịch mã tại một bộ ba không phải AUG; `efficiency of non-AUG initiation codons` — hiệu quả của các codon khởi đầu phi điển hình; `screen for non-AUG initiation codons` — sàng lọc các bộ ba mở đầu không phải AUG.

**Register & nuance:** `molecular genetics & non-canonical translation` — từng bị coi là lỗi ngẫu nhiên hoặc hiếm gặp; nay được công nhận là cơ chế thích ứng phổ biến giúp tế bào tổng hợp protein trong điều kiện căng thẳng (*cellular stress*) khi yếu tố khởi đầu chuẩn eIF2 bị bất hoạt.

**Examples:** `The stress-induced kinase is translated via a non-AUG initiation codon, enabling its production even when canonical translation initiation is heavily suppressed.` → Kinase cảm ứng với căng thẳng được dịch mã thông qua một bộ ba mở đầu không phải AUG, cho phép sản xuất nó ngay cả khi sự khởi đầu dịch mã điển hình bị ức chế nặng nề.

**Liên kết tiếng Hàn:** `비-AUG 개시 코돈` (非-AUG 開始 codon) — codon khởi đầu không phải AUG.

---

## 6. upstream open reading frame /ˈʌpˌstriːm ˈoʊpən ˈridɪŋ freɪm/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ yếu tố điều hòa dịch mã hoặc tân ngữ sau `harbor`, `translate`, `derepress`. Viết tắt là `uORF`.

**Core meaning — English:** A protein-coding sequence located within the 5' untranslated region (5' UTR) of a messenger RNA, positioned upstream of the primary coding sequence and functioning primarily as a regulatory brake on main-protein translation.

**Core meaning & mental image — Tiếng Việt:** Khung đọc mở thượng nguồn; hãy hình dung một trạm thu phí phụ nhỏ nằm ngay trước cổng vào của đường cao tốc chính: các phương tiện giao thông (ribosome) bị hút vào trạm thu phí phụ này để nộp tiền và dỡ hàng, khiến chỉ có một số ít xe tiếp tục chạy thẳng vào đường cao tốc chính phía sau.

**Grammar & collocations:** `repress translation via an upstream open reading frame` — kìm hãm dịch mã thông qua một khung đọc mở thượng nguồn; `bypass an upstream open reading frame` — vượt qua khung đọc mở thượng nguồn; `uORF-mediated translational control` — sự kiểm soát dịch mã do khung đọc mở thượng nguồn làm trung gian.

**Register & nuance:** `post-transcriptional gene regulation` — khoảng một nửa số gen của người chứa ít nhất một uORF; khi uORF được dịch mã mạnh, khung đọc chính (*CDS*) bị ức chế; nhưng khi gặp stress, ribosome có thể nhảy cóc qua uORF (*leaky scanning*) để dịch mã gen chính.

**Examples:** `Under nutrient abundance, translation of the upstream open reading frame intercepts scanning ribosomes, preventing synthesis of the downstream transcription factor.` → Dưới điều kiện dư thừa dinh dưỡng, sự dịch mã của khung đọc mở thượng nguồn đã chặn bắt các ribosome đang quét, ngăn chặn sự tổng hợp của yếu tố phiên mã hạ nguồn.

**Liên kết tiếng Hàn:** `상류 열린 판독틀 / uORF` (上流 열린 判讀틀) — khung đọc mở thượng nguồn.

---

## 7. ribosome stalling kinetics /ˌraɪbəsoʊm ˈstɔlɪŋ kəˈnɛtɪks/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ đo lường tốc độ dừng của bộ máy dịch mã hoặc tân ngữ sau `quantify`, `characterize`.

**Core meaning — English:** The quantitative measurement and physical rates at which translating ribosomes decelerate, pause, or become persistently arrested at specific mRNA codons or difficult-to-translate structural motifs.

**Core meaning & mental image — Tiếng Việt:** Động học dừng ribosome / tốc độ đình trệ dịch mã; hãy hình dung việc đo lường tốc độ xe chạy trên đường: bình thường xe lao vun vút 100 km/h, nhưng khi đi qua một khúc cua gấp có ổ gà lồi lõm (chuỗi codon hiếm hoặc poly-proline), tốc độ xe đột ngột giảm xuống 5 km/h tạo thành một điểm nghẽn giao thông cục bộ.

**Grammar & collocations:** `quantify ribosome stalling kinetics` — định lượng động học dừng ribosome; `determinants of ribosome stalling kinetics` — các yếu tố quyết định động học đình trệ ribosome; `alterations in ribosome stalling kinetics` — các biến đổi trong động học dừng ribosome.

**Register & nuance:** `biophysical translatomics & enzymology` — điểm dừng dịch mã không phải lúc nào cũng là lỗi; nó có thể là cơ chế được lập trình để giúp chuỗi polypeptide mới sinh (*nascent peptide*) kịp cuộn gập cấu trúc 3D chính xác trước khi ra khỏi ribosome.

**Examples:** `Ribosome stalling kinetics at consecutive proline residues reveal how the specialized elongation factor eIF5A is recruited to rescue stalled translation complexes.` → Động học dừng ribosome tại các gốc proline liên tiếp tiết lộ cách thức yếu tố kéo dài chuyên biệt eIF5A được chiêu mộ để giải cứu các phức hợp dịch mã bị đình trệ.

**Liên kết tiếng Hàn:** `리보솜 정체 동역학` (ribosome 停滯 動力學) — động học của sự đình trệ / dừng lại của ribosome.

---

## 8. micropeptide functional characterization /ˌmaɪkroʊˈpɛptaɪd ˈfʌŋkʃənəl ˌkærəktərəˈzeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm tân ngữ của `pursue`, `achieve`, `undertake`, hoặc làm chủ ngữ trong các báo cáo sinh học phân tử hiện đại.

**Core meaning — English:** The systematic experimental determination of the biological roles, molecular binding partners, and physiological necessity of tiny proteins (typically fewer than 100 amino acids) encoded by non-canonical open reading frames.

**Core meaning & mental image — Tiếng Việt:** Giải mã đặc tính chức năng của vi peptide; hãy hình dung các nhà khảo cổ học tìm thấy những mẩu chìa khóa bằng đồng thau tí hon nằm lẫn trong đống đổ nát mà trước đây ai cũng nghĩ là rác thải vô giá trị; họ kiên nhẫn kiểm tra xem chiếc chìa khóa tí hon ấy mở được cánh cửa bí mật nào trong lâu đài tế bào.

**Grammar & collocations:** `achieve micropeptide functional characterization` — đạt được sự giải mã đặc tính chức năng của vi peptide; `framework for micropeptide functional characterization` — khuôn khổ để giải mã chức năng vi peptide; `challenges in micropeptide functional characterization` — các thách thức trong việc xác định chức năng vi peptide.

**Register & nuance:** `functional proteomics & chemical biology` — các vi peptide (như myoregulin, sarcolipin) từng bị bỏ sót do các thuật toán gen lọc bỏ mọi khung đọc dưới 100 codon; việc làm rõ chức năng của chúng đã mở ra một kỷ nguyên mới trong dược lý học.

**Examples:** `Rigorous micropeptide functional characterization demonstrated that a 46-amino-acid peptide encoded within an lncRNA binds directly to SERCA, regulating muscle contractility.` → Việc giải mã đặc tính chức năng của vi peptide một cách nghiêm ngặt đã chứng minh rằng một peptide dài 46 axit amin được mã hóa bên trong một lncRNA liên kết trực tiếp với SERCA, điều hòa sự co cơ.

**Liên kết tiếng Hàn:** `미세펩타이드 기능 특성 규명` (微細peptide 機能 特性 糾明) — làm rõ đặc tính chức năng của vi peptide.

---

## 9. non-canonical translation initiation /ˌnɑn kəˈnɑnɪkəl trænsˈleɪʃən ɪˌnɪʃiˈeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Làm chủ ngữ hoặc tân ngữ chỉ các con đường khởi động dịch mã độc lập với cơ chế chụp mũ 5' kinh điển.

**Core meaning — English:** Any non-standard molecular pathway used by ribosomes to assemble and begin polypeptide synthesis, bypassing standard cap-dependent ribosomal scanning from a 5' AUG codon.

**Core meaning & mental image — Tiếng Việt:** Sự khởi đầu dịch mã phi điển hình; hãy hình dung một hành khách không đi qua cổng an ninh chính của sân bay (cap 5'), mà nhảy dù thẳng xuống đường băng hoặc chui qua một cửa ngách bí mật (IRES hoặc non-AUG) để leo thẳng lên máy bay và cất cánh.

**Grammar & collocations:** `mechanism of non-canonical translation initiation` — cơ chế khởi đầu dịch mã phi điển hình; `trigger non-canonical translation initiation` — kích hoạt sự khởi đầu dịch mã phi chuẩn; `prevalence of non-canonical translation initiation` — tính phổ biến của khởi đầu dịch mã phi điển hình.

**Register & nuance:** `biochemical genetics & RNA biology` — bao gồm dịch mã phụ thuộc cấu trúc IRES (*internal ribosome entry site*), quét rò rỉ (*leaky scanning*), và dịch mã khởi đầu bằng các axit amin không phải methionine; đóng vai trò chủ chốt trong sinh lý học ung thư và nhiễm virus.

**Examples:** `During viral infection, cellular cap-dependent machinery is shut down, prompting the pathogen to exploit non-canonical translation initiation to synthesize its structural coat.` → Trong quá trình nhiễm virus, bộ máy phụ thuộc mũ cap của tế bào bị tắt, thúc đẩy mầm bệnh khai thác sự khởi đầu dịch mã phi điển hình để tổng hợp lớp vỏ cấu trúc của nó.

**Liên kết tiếng Hàn:** `비정형적 번역 개시` (非定型的 飜譯 開始) — sự khởi đầu dịch mã không theo quy chuẩn / phi điển hình.

---

## 10. ribosome elongation velocity /ˌraɪbəsoʊm ˌiːlɔŋˈɡeɪʃən vàˈlɑsəti/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ đo lường tốc độ sinh học hoặc tân ngữ sau `measure`, `modulate`, `slow`.

**Core meaning — English:** The physical rate, expressed in codons or amino acids per second, at which a translating ribosome traverses a transcript and incorporates amino acids into the growing polypeptide chain.

**Core meaning & mental image — Tiếng Việt:** Tốc độ kéo dài của ribosome; hãy hình dung một thợ dệt kim đan len thoăn thoắt với tốc độ 6 mũi đan mỗi giây: nếu thợ dệt đan quá nhanh, các mũi len có thể bị tuột hoặc thắt nút sai; nếu đan chậm lại ở các hoa văn phức tạp, tấm khăn len sẽ đạt được độ tinh xảo hoàn hảo.

**Grammar & collocations:** `measure ribosome elongation velocity` — đo lường tốc độ kéo dài của ribosome; `factors tuning ribosome elongation velocity` — các yếu tố tinh chỉnh tốc độ kéo dài của ribosome; `uniform ribosome elongation velocity` — tốc độ kéo dài đồng đều của ribosome.

**Register & nuance:** `molecular biophysics` — trong tế bào động vật có vú, tốc độ kéo dài trung bình khoảng 5–6 codon/giây; tốc độ này bị ảnh hưởng bởi độ phong phú của tRNA nạp axit amin, cấu trúc thứ cấp của RNA, và thành phần axit amin của chuỗi mới sinh.

**Examples:** `Synonymous codon usage biases directly modulate ribosome elongation velocity, ensuring nascent domain folding occurs in coordinated temporal steps.` → Xu hướng sử dụng codon đồng nghĩa trực tiếp điều hòa tốc độ kéo dài của ribosome, đảm bảo sự cuộn gập của các miền chức năng mới sinh diễn ra theo các bước thời gian phối hợp.

**Liên kết tiếng Hàn:** `리보솜 신장 속도` (ribosome 伸長 速度) — tốc độ kéo dài / dịch chuyển của ribosome.

---

## 11. harringtonine run-off assay /hærɪŋˈtoʊniːn ˈrʌn ɔf ˈæseɪ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ xét nghiệm thực nghiệm hoặc tân ngữ sau `employ`, `execute`.

**Core meaning — English:** A translatomic assay where cells are treated with harringtonine to immobilize newly initiating ribosomes precisely at start codons while permitting already elongating ribosomes to run off mRNA, enabling pinpoint mapping of initiation sites.

**Core meaning & mental image — Tiếng Việt:** Xét nghiệm giải phóng ribosome bằng harringtonine; hãy hình dung việc một người gác cổng hạ thanh chắn cấm tiệt mọi chiếc xe mới vào đường cao tốc, nhưng để cho tất cả các xe đang chạy trên đường phóng hết về đích: sau 15 phút, người ta chỉ việc nhìn vào vạch xuất phát để đếm chính xác những chiếc xe vừa mới nổ máy.

**Grammar & collocations:** `deploy a harringtonine run-off assay` — triển khai xét nghiệm giải phóng ribosome bằng harringtonine; `initiation mapping via harringtonine run-off assay` — lập bản đồ vị trí khởi đầu thông qua xét nghiệm giải phóng ribosome harringtonine; `readouts of the harringtonine run-off assay` — các kết quả đo lường của xét nghiệm giải phóng ribosome harringtonine.

**Register & nuance:** `high-resolution Ribo-seq methodology` — là tiêu chuẩn vàng để phân biệt giữa codon khởi đầu dịch mã thực thụ (*true initiation sites*) và các vị trí dừng ngẫu nhiên (*stalling sites*) dọc theo thân phân tử mRNA.

**Examples:** `By combining ribosome profiling with a harringtonine run-off assay, researchers pinpointed thousands of cryptic translation initiation sites across human 5' UTRs.` → Bằng cách kết hợp lập hồ sơ dấu chân ribosome với xét nghiệm giải phóng ribosome bằng harringtonine, các nhà nghiên cứu đã xác định chuẩn xác hàng ngàn vị trí khởi đầu dịch mã ẩn giấu xuyên suốt các vùng 5' UTR của người.

**Liên kết tiếng Hàn:** `해링토닌 런오프 분석법` (harringtonine run-off 分析法) — phương pháp phân tích giải phóng ribosome bằng harringtonine.

---

## 12. ribosomal queueing /ˌraɪbəˈsoʊməl ˈkjuːɪŋ/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Đóng vai trò chủ ngữ hoặc tân ngữ chỉ hiện tượng dồn ứ các ribosome phía sau một vị trí tắc nghẽn.

**Core meaning — English:** The physical stacking and collision of multiple translating ribosomes behind an arrested or stalled ribosome on an mRNA transcript, forming tandem disomes or polysome traffic jams.

**Core meaning & mental image — Tiếng Việt:** Sự dồn ứ hàng ngũ ribosome / sự tắc nghẽn ribosome xếp hàng; hãy hình dung một chiếc xe tải bị chết máy giữa một đường hầm một chiều: hàng loạt các xe ô tô chạy phía sau không thể vượt lên, lần lượt đâm vào đuôi nhau và xếp thành một hàng dài dằng dặc bấm còi inh ỏi.

**Grammar & collocations:** `trigger ribosomal queueing` — kích hoạt sự dồn ứ hàng ngũ ribosome; `disome formation via ribosomal queueing` — sự hình thành disome thông qua hiện tượng ribosome xếp hàng dồn ứ; `detect ribosomal queueing` — phát hiện sự dồn ứ hàng ngũ ribosome.

**Register & nuance:** `ribosome dynamics & surveillance pathways` — hiện tượng này tạo ra các cấu trúc hai ribosome chạm đuôi nhau (*disomes*) hoặc ba ribosome (*trisomes*); đây chính là tín hiệu kích hoạt hệ thống giám sát kiểm định chất lượng phân rã RNA của tế bào.

**Examples:** `Defects in tRNA aminoacylation provoke severe ribosomal queueing, alerting cellular stress sensors to target the jammed transcript for immediate degradation.` → Các khiếm khuyết trong quá trình nạp axit amin vào tRNA gây ra sự dồn ứ hàng ngũ ribosome trầm trọng, cảnh báo các thụ thể cảm ứng stress của tế bào tiêu hủy ngay lập tức bản sao chép bị tắc nghẽn.

**Liên kết tiếng Hàn:** `리보솜 줄서기 / 리보솜 병목 대기` (ribosome 줄서기 / ribosome 甁頸 待期) — hiện tượng ribosome xếp hàng / dồn ứ tại điểm nghẽn.

---

## 13. downstream open reading frame /ˈdaʊnˌstriːm ˈoʊpən ˈridɪŋ freɪm/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ khung đọc mở phụ hoặc tân ngữ sau `identify`, `translate`. Viết tắt là `dORF`.

**Core meaning — English:** An open reading frame located within the 3' untranslated region (3' UTR) downstream of the canonical stop codon of a messenger RNA, capable of being translated under non-standard conditions.

**Core meaning & mental image — Tiếng Việt:** Khung đọc mở hạ nguồn; hãy hình dung một toa hành lý phụ bí mật được gắn vào phía sau cùng của toa tàu trưởng ga: sau khi đoàn tàu kết thúc hành trình chính thức, toa hành lý phụ này bỗng mở cửa và bắt đầu dỡ những món hàng độc đáo xuống một sân ga ngầm.

**Grammar & collocations:** `translation of a downstream open reading frame` — sự dịch mã của một khung đọc mở hạ nguồn; `functional roles of downstream open reading frames` — các vai trò chức năng của khung đọc mở hạ nguồn; `identify downstream open reading frames` — nhận diện các khung đọc mở hạ nguồn.

**Register & nuance:** `functional RNA biology` — đối xứng với *uORF*; từng bị coi là vùng 3' UTR "phi mã hóa" hoàn toàn, việc phát hiện dORF đang dịch mã đã làm thay đổi hiểu biết về chức năng điều hòa của đuôi mRNA.

**Examples:** `Ribosome footprint density in the 3' UTR provided incontrovertible evidence for active translation of a downstream open reading frame encoding a mitochondrial microprotein.` → Mật độ dấu chân ribosome tại vùng 3' UTR đã cung cấp bằng chứng không thể bác bỏ về sự dịch mã chủ động của một khung đọc mở hạ nguồn mã hóa một vi protein ty thể.

**Liên kết tiếng Hàn:** `하류 열린 판독틀 / dORF` (下流 열린 判讀틀) — khung đọc mở hạ nguồn.

---

## 14. short open reading frame /ʃɔrt ˈoʊpən ˈridɪŋ freɪm/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Làm chủ ngữ hoặc tân ngữ chỉ các chuỗi mã hóa cực ngắn (thường dưới 300 nucleotide). Viết tắt là `sORF`.

**Core meaning — English:** A nucleotide sequence possessing start and stop codons that spans fewer than 100 codons, historically dismissed as transcriptional noise but now recognized as encoding functional micropeptides.

**Core meaning & mental image — Tiếng Việt:** Khung đọc mở ngắn; hãy hình dung một cuốn cẩm nang dày 500 trang: ở phần phụ lục phía sau có vài dòng ghi chú ngắn chỉ vỏn vẹn một câu thơ, nhưng chính câu thơ ngắn ngủi ấy lại chứa mật mã để giải phóng một kho báu khổng lồ.

**Grammar & collocations:** `encode a short open reading frame` — mã hóa một khung đọc mở ngắn; `evolutionary conservation of short open reading frames` — sự bảo tồn tiến hóa của các khung đọc mở ngắn; `annotate short open reading frames` — chú giải các khung đọc mở ngắn.

**Register & nuance:** `comparative genomics & microproteomics` — các thuật toán gen cổ điển từng dùng ngưỡng cắt (*cutoff*) cứng nhắc 100 axit amin để tránh báo cáo kết quả dương tính giả; sORF là cuộc phục thù của các đoạn mã siêu nhỏ nhưng có hoạt tính sinh học khổng lồ.

**Examples:** `Bioinformatic pipelines traditionally discarded any short open reading frame, overlooking hundreds of vital transmembrane regulators.` → Các quy trình tin sinh học theo truyền thống đã vứt bỏ bất kỳ khung đọc mở ngắn nào, bỏ sót hàng trăm chất điều hòa xuyên màng sống còn.

**Liên kết tiếng Hàn:** `짧은 열린 판독틀 / sORF` (짧은 열린 判讀틀) — khung đọc mở ngắn.

---

## 15. ribosome collision sensor /ˌraɪbəsoʊm kəˈlɪʒən ˈsɛnsər/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ phân tử nhận diện va chạm ribosome hoặc bổ ngữ sau `act as`, `recruit`.

**Core meaning — English:** A specialized cellular surveillance protein (such as ZAKalpha or the E3 ligase ZNF598) that physically recognizes the distinct interface formed when a trailing ribosome crashes into a stalled leading ribosome.

**Core meaning & mental image — Tiếng Việt:** Cảm biến va chạm ribosome; hãy hình dung một túi khí an toàn thông minh trên xe hơi: ngay khi cản trước của xe đâm sầm vào đuôi xe phía trước, cảm biến chấn động lập tức kích hoạt chuông báo động cứu hộ và ngắt dòng nhiên liệu động cơ khẩn cấp.

**Grammar & collocations:** `activate a ribosome collision sensor` — kích hoạt cảm biến va chạm ribosome; `binding of the ribosome collision sensor` — sự liên kết của cảm biến va chạm ribosome; `ribosome collision sensor pathway` — con đường tín hiệu cảm biến va chạm ribosome.

**Register & nuance:** `molecular cell biology & ribotoxic stress response` — phát hiện mang tính đột phá gần đây: khi hai ribosome va chạm tạo thành *disome*, cấu trúc không gian đặc thù tại vị trí tiếp xúc sẽ thu hút cảm biến ZNF598 để gắn ubiquitin, quyết định số phận sống còn của tế bào.

**Examples:** `The kinase ZAK serves as an indispensable ribosome collision sensor, transmitting ribotoxic stress signals to activate apoptotic cell death programs.` → Kinase ZAK đóng vai trò như một cảm biến va chạm ribosome không thể thiếu, truyền các tín hiệu căng thẳng độc tính ribosome để kích hoạt các chương trình chết tế bào theo chương trình.

**Liên kết tiếng Hàn:** `리보솜 충돌 감지체` (ribosome 衝突 感知體) — cảm biến nhận biết sự va chạm ribosome.

---

## 16. ribosome-associated quality control /ˌraɪbəsoʊm əˈsoʊsiˌeɪtəd ˈkwɑləti kənˈtroʊl/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Làm chủ ngữ hoặc tân ngữ chỉ con đường cứu hộ tế bào phân hủy chuỗi protein bị hỏng. Viết tắt là `RQC`.

**Core meaning — English:** An evolutionarily conserved multiprotein surveillance pathway that disassembles stalled ribosomal complexes and directs aberrant nascent polypeptide chains to proteasomal degradation to prevent toxic protein aggregation.

**Core meaning & mental image — Tiếng Việt:** Cơ chế kiểm soát chất lượng liên kết ribosome; hãy hình dung một đội cứu hộ kỹ thuật đặc nhiệm bước vào xưởng sản xuất: họ nhanh chóng tháo rời cỗ máy gặt lúa bị kẹt, kéo đứt đoạn xích bị hỏng và quẳng ngay vào lò đốt rác kim loại để dây chuyền không bị nổ tung.

**Grammar & collocations:** `engage ribosome-associated quality control` — kích hoạt cơ chế kiểm soát chất lượng liên kết ribosome; `components of ribosome-associated quality control` — các thành phần của kiểm soát chất lượng liên kết ribosome; `defects in ribosome-associated quality control` — các khiếm khuyết trong cơ chế kiểm soát chất lượng liên kết ribosome.

**Register & nuance:** `proteostasis & neurobiology` — gồm các yếu tố như LTN1, NEMF và listerin; nếu cơ chế RQC bị đột biến, các chuỗi peptide chưa hoàn thiện sẽ kết tụ thành mảng độc hại gây bệnh thoái hóa thần kinh như ALS.

**Examples:** `Failure of ribosome-associated quality control allows incomplete, aberrant polypeptides to accumulate, triggering severe motor neuron degeneration.` → Sự thất bại của cơ chế kiểm soát chất lượng liên kết ribosome cho phép các polypeptide dị thường chưa hoàn thiện tích tụ, kích hoạt sự thoái hóa nơ-ron vận động nghiêm trọng.

**Liên kết tiếng Hàn:** `리보솜 연계 품질 관리 / RQC` (ribosome 連繫 品質 管理) — kiểm soát chất lượng liên kết với ribosome.

---

## 17. nascent peptide exit tunnel /ˈneɪsənt ˈpɛptaɪd ˈɛɡzɪt ˈtʌnəl/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm bổ ngữ nơi chốn hoặc tân ngữ sau `traverse`, `interact with`, `obstruct`.

**Core meaning — English:** The narrow, aqueous conduit (approximately 100 angstroms long) traversing the large ribosomal subunit, through which a newly synthesized polypeptide chain must pass before emerging into the cellular cytoplasm.

**Core meaning & mental image — Tiếng Việt:** Đường hầm thoát chuỗi peptide mới sinh; hãy hình dung một đường hầm ngầm hẹp dài xuyên qua lòng một ngọn núi đá: dòng dung nham nóng đỏ (chuỗi peptide mới sinh) phải luồn lách qua đường hầm trơn trượt này trước khi chảy tràn ra thung lũng lộ thiên bên ngoài để nguội đi và đông cứng thành hình thù xác định.

**Grammar & collocations:** `traverse the nascent peptide exit tunnel` — đi xuyên qua đường hầm thoát chuỗi peptide mới sinh; `constriction site within the nascent peptide exit tunnel` — vị trí thắt hẹp bên trong đường hầm thoát peptide; `interactions in the nascent peptide exit tunnel` — các tương tác trong đường hầm thoát chuỗi peptide.

**Register & nuance:** `structural ribosome biology & antibiotic pharmacology` — không phải là một chiếc ống nhựa trơn bóng thụ động; các bức vách của đường hầm chứa các gốc ribosome RNA tương tác chủ động với chuỗi peptide, có thể cảm nhận tín hiệu để làm dừng hoặc điều chỉnh tốc độ dịch mã.

**Examples:** `Macrolide antibiotics exert their antimicrobial activity by physically plugging the nascent peptide exit tunnel, thereby preventing nascent chain elongation.` → Các kháng sinh nhóm macrolide thực hiện hoạt tính kháng khuẩn của mình bằng cách bịt kín về mặt vật lý đường hầm thoát chuỗi peptide mới sinh, từ đó ngăn chặn sự kéo dài chuỗi polypeptide.

**Liên kết tiếng Hàn:** `초생 펩타이드 출구 터널` (初生 peptide 出口 tunnel) — đường hầm thoát của chuỗi peptide mới sinh.

---

## 18. ribosome occupancy density /ˌraɪbəsoʊm ˈɑkjəpənsi ˈdɛnsəti/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ đo lường mức độ dịch mã của mRNA hoặc tân ngữ sau `calculate`, `correlate with`.

**Core meaning — English:** The quantitative frequency or number of actively translating ribosomes bound per unit length of an mRNA transcript, reflecting the translational efficiency and throughput of that message.

**Core meaning & mental image — Tiếng Việt:** Mật độ chiếm chỗ của ribosome; hãy hình dung mật độ xe cộ lưu thông trên đường cao tốc vào giờ cao điểm: nếu mỗi mét đường đều có một chiếc xe bám sát đuôi nhau di chuyển nhịp nhàng, con đường đó có mật độ chiếm chỗ cực cao và lưu lượng hàng hóa vận chuyển đạt tối đa.

**Grammar & collocations:** `high ribosome occupancy density` — mật độ chiếm chỗ ribosome cao; `normalize ribosome occupancy density` — chuẩn hóa mật độ chiếm chỗ của ribosome; `peaks of ribosome occupancy density` — các đỉnh mật độ chiếm chỗ của ribosome.

**Register & nuance:** `quantitative translatomics` — được trích xuất từ dữ liệu Ribo-seq; mật độ cao ở một vị trí cụ thể có thể biểu thị hiệu suất dịch mã lớn (*high efficiency*) hoặc ngược lại là một điểm nghẽn dịch mã cục bộ (*local ribosome stall*).

**Examples:** `A dramatic spike in ribosome occupancy density at codon 45 highlighted a translational pause site where the ribosome pauses to coordinate membrane insertion.` → Một sự gia tăng đột biến về mật độ chiếm chỗ của ribosome tại codon 45 đã làm nổi bật một điểm dừng dịch mã nơi ribosome tạm dừng để phối hợp chèn chuỗi protein vào màng.

**Liên kết tiếng Hàn:** `리보솜 점유 밀도` (ribosome 占有 密度) — mật độ chiếm chỗ của ribosome.

---

## 19. translational readthrough /trænsˈleɪʃənəl ˈriːdˌθruː/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Làm chủ ngữ hoặc tân ngữ chỉ hiện tượng ribosome vượt qua bộ ba kết thúc (ví dụ: `stimulate translational readthrough`).

**Core meaning — English:** The biological event wherein a translating ribosome misinterprets or suppresses a stop codon (UAA, UAG, or UGA), inserting an amino acid instead and continuing elongation into the 3' untranslated region to generate an extended protein isoform.

**Core meaning & mental image — Tiếng Việt:** Hiện tượng đọc xuyên dịch mã; hãy hình dung một tài xế xe buýt nhìn thấy tấm biển "Điểm dừng cuối cùng" ở cuối bến, nhưng thay vì đạp phanh cho hành khách xuống xe, ông ta nhấn ga phóng thẳng qua tấm biển chạy tiếp thêm 5 km vào khu rừng ngoại ô để tạo ra một tuyến đường mới toanh.

**Grammar & collocations:** `promote translational readthrough` — thúc đẩy hiện tượng đọc xuyên dịch mã; `programmed translational readthrough` — hiện tượng đọc xuyên dịch mã được lập trình; `efficiency of translational readthrough` — hiệu quả của sự đọc xuyên dịch mã.

**Register & nuance:** `molecular medicine & RNA therapeutics` — là mục tiêu của các loại thuốc đọc xuyên (*readthrough drugs* như aminoglycoside) nhằm điều trị các bệnh di truyền do đột biến vô nghĩa (*nonsense mutations*) như bệnh xơ nang (*cystic fibrosis*).

**Examples:** `Small-molecule drugs that induce programmed translational readthrough enable patients with nonsense mutations to produce functional full-length dystrophin.` → Các loại thuốc phân tử nhỏ kích ứng hiện tượng đọc xuyên dịch mã được lập trình cho phép các bệnh nhân có đột biến vô nghĩa sản xuất dystrophin chiều dài đầy đủ có chức năng.

**Liên kết tiếng Hàn:** `번역 통과독 / 번역 연속독` (飜譯 通過讀 / 飜譯 連續讀) — hiện tượng dịch mã đọc xuyên qua codon kết thúc.

---

## 20. ribosomal frameshifting element /ˌraɪbəˈsoʊməl ˈfreɪmˌʃɪftɪŋ ˈɛləmənt/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ cấu trúc RNA đặc hiệu hoặc tân ngữ sau `harbor`, `engineer`.

**Core meaning — English:** A specialized cis-acting structural RNA sequence—typically consisting of a slippery heptanucleotide motif followed by a stable pseudoknot—that forces translating ribosomes to shift their reading frame by one or two nucleotides.

**Core meaning & mental image — Tiếng Việt:** Trình diện dịch khung ribosome / yếu tố dịch khung đọc ribosome; hãy hình dung một đường ray xe lửa có một đoạn ray bị uốn cong đặc biệt: khi bánh xe lửa trượt qua chỗ ngoặt gấp đó, toàn bộ bánh xe bị nhảy trượt sang rãnh ray bên cạnh một nấc, khiến cả đoàn tàu tiếp tục chạy trên một quỹ đạo đường ray hoàn toàn mới.

**Grammar & collocations:** `programmed ribosomal frameshifting element` — yếu tố dịch khung ribosome được lập trình; `efficiency of a ribosomal frameshifting element` — hiệu quả của yếu tố dịch khung ribosome; `target a ribosomal frameshifting element with antivirals` — nhắm mục tiêu vào yếu tố dịch khung ribosome bằng thuốc kháng virus.

**Register & nuance:** `virology & structural genetics` — phổ biến ở retrovirus như HIV và coronavirus như SARS-CoV-2 (sử dụng -1 frameshift để tạo enzyme RdRp); can thiệp vào yếu tố này là chiến lược kháng virus cực kỳ tiềm năng.

**Examples:** `Coronaviruses rely on a conserved -1 ribosomal frameshifting element to precisely regulate the stoichiometric ratio between structural and replicative proteins.` → Các coronavirus dựa vào một yếu tố dịch khung ribosome -1 được bảo tồn để điều hòa chuẩn xác tỷ lệ hàm lượng hợp thức giữa các protein cấu trúc và protein sao chép.

**Liên kết tiếng Hàn:** `리보솜 틀이동 요소` (ribosome 틀移動 要素) — yếu tố gây dịch khung đọc ribosome.

---

## 21. non-canonical open reading frame /ˌnɑn kəˈnɑnɪkəl ˈoʊpən ˈridɪŋ freɪm/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Làm chủ ngữ hoặc tân ngữ chỉ các khung đọc mở nằm ngoài định nghĩa sách giáo khoa truyền thống.

**Core meaning — English:** Any translatable genetic sequence residing in untranslated regions, overlapping classical genes, or located on annotated non-coding RNAs, which lacks the canonical features of standard protein-coding sequences.

**Core meaning & mental image — Tiếng Việt:** Khung đọc mở phi điển hình; hãy hình dung một cuốn sách lịch sử chính thức: bên lề của mỗi trang sách, hoặc giữa các khoảng trắng của từng dòng chữ in hoa, có những dòng chữ mực tàng hình viết bằng nước chanh chỉ hiện rõ khi hơ qua lửa ấm.

**Grammar & collocations:** `discover a non-canonical open reading frame` — phát hiện một khung đọc mở phi điển hình; `translation of non-canonical open reading frames` — sự dịch mã của các khung đọc mở phi chuẩn; `catalogue non-canonical open reading frames` — lập danh mục các khung đọc mở phi điển hình.

**Register & nuance:** `proteogenomics & translatome annotation` — khái niệm bao trùm chứa cả uORF, dORF và các sORF trên lncRNA; chứng minh rằng bản đồ hệ gen của con người phong phú và phức tạp hơn rất nhiều so với danh mục protein quy ước.

**Examples:** `Proteogenomics platforms are systematically annotating non-canonical open reading frames, many of which yield peptides presented on MHC-I complexes in cancer.` → Các nền tảng hệ gen-protein học đang chú giải có hệ thống các khung đọc mở phi điển hình, nhiều khung trong số đó sản sinh các peptide được trình diện trên các phức hợp MHC-I trong ung thư.

**Liên kết tiếng Hàn:** `비정형 열린 판독틀` (非定型 열린 判讀틀) — khung đọc mở phi điển hình / không theo quy chuẩn.

---

## 22. polysome fractionation /ˈpɑliˌsoʊm ˌfrækʃəˈneɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ chỉ kỹ thuật sinh hóa kinh điển hoặc tân ngữ sau `perform`, `subject to`.

**Core meaning — English:** A classical biochemical method that separates messenger ribonucleoprotein complexes across a sucrose density gradient by ultracentrifugation, isolating mRNAs loaded with multiple ribosomes (polysomes) from poorly translated monosomes.

**Core meaning & mental image — Tiếng Việt:** Phân đoạn polysome / phân tách thể đa ribosome; hãy hình dung việc đổ một hỗn hợp các chiếc thuyền chở đầy người vào một bể chất lỏng sánh đặc có độ đậm đặc tăng dần từ trên xuống dưới: chiếc thuyền nào chở càng nhiều người (nhiều ribosome gắn vào mRNA) thì chìm càng sâu xuống đáy bể khi quay li tâm.

**Grammar & collocations:** `perform polysome fractionation` — thực hiện phân đoạn polysome; `sucrose gradient polysome fractionation` — phân đoạn polysome trên thang nồng độ sucrose; `fractions from polysome fractionation` — các phân đoạn thu được từ phân đoạn polysome.

**Register & nuance:** `biochemical assay & translational control` — tiền thân và công cụ bổ trợ thiết yếu của Ribo-seq; cho phép tách biệt rõ ràng giữa các mRNA dịch mã hiệu quả cao (*heavy polysomes*) và các mRNA dịch mã kém (*monosomes/sub-polysomes*).

**Examples:** `Polysome fractionation revealed that despite unchanged total mRNA levels, the transcription factor transcript shifted dramatically into heavy polysome fractions upon mitogen stimulation.` → Phân đoạn polysome đã tiết lộ rằng mặc dù mức mRNA tổng thể không thay đổi, bản mã hóa yếu tố phiên mã đã dịch chuyển mạnh mẽ vào các phân đoạn polysome nặng khi được kích thích bởi chất phân bào.

**Liên kết tiếng Hàn:** `폴리솜 분획법` (polysome 分劃法) — phương pháp phân đoạn / tách chiết polysome.

---

## 23. translatomic concordance /trænsleɪˈtɑmɪk kənˈkɔrdəns/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ đánh giá mức độ tương quan phân tử hoặc tân ngữ sau `assess`, `correlate`.

**Core meaning — English:** The quantitative degree of agreement or correlation between the abundance of an mRNA transcript and its actual rate of translation into polypeptide product across different physiological states.

**Core meaning & mental image — Tiếng Việt:** Sự tương đồng hệ dịch mã / độ phù hợp giữa phiên mã và dịch mã; hãy hình dung việc đối chiếu danh sách đơn đặt hàng gửi tới nhà máy (mức mRNA) với số lượng sản phẩm thực tế được đóng thùng xuất xưởng trên băng chuyền (mức dịch mã): nếu hai con số này khớp nhau 100%, ta có sự tương đồng tuyệt đối.

**Grammar & collocations:** `assess translatomic concordance` — đánh giá sự tương đồng hệ dịch mã; `lack of translatomic concordance` — sự thiếu vắng tính tương đồng của hệ dịch mã; `high translatomic concordance under basal conditions` — độ phù hợp hệ dịch mã cao dưới điều kiện cơ bản.

**Register & nuance:** `systems biology & integrative multi-omics` — trong nhiều tế bào ung thư hoặc trạng thái stress, sự tương đồng này giảm xuống rất thấp (*poor concordance*), chứng tỏ sự điều hòa sau phiên mã đóng vai trò quyết định kiểu hình tế bào.

**Examples:** `A striking lack of translatomic concordance was observed during viral infection, where host transcripts remained abundant but were completely excluded from ribosomes.` → Sự thiếu vắng tính tương đồng hệ dịch mã đáng kinh ngạc đã được quan sát thấy trong quá trình nhiễm virus, nơi các bản mã hóa của vật chủ vẫn dồi dào nhưng hoàn toàn bị loại khỏi các ribosome.

**Liên kết tiếng Hàn:** `번역체 일치도` (飜譯體 一致度) — độ phù hợp / mức độ tương đồng của hệ dịch mã.

---

## 24. stop-codon readthrough efficiency /ˈstɑp ˌkoʊdɑn ˈriːdˌθruː ɪˈfɪʃənsi/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Thường làm chủ ngữ đo lường xác suất vượt rào hoặc tân ngữ sau `quantify`, `modulate`.

**Core meaning — English:** The statistical percentage of translating ribosomes that successfully bypass a physiological or premature termination codon rather than terminating translation and releasing the peptide chain.

**Core meaning & mental image — Tiếng Việt:** Hiệu quả đọc xuyên qua bộ ba kết thúc; hãy hình dung một trạm kiểm soát biên giới: cứ 100 chiếc xe chạy đến thì có 98 chiếc dừng lại theo luật, nhưng có 2 chiếc xe phóng vượt rào thành công — tỷ lệ 2% đó chính là hiệu quả đọc xuyên.

**Grammar & collocations:** `quantify stop-codon readthrough efficiency` — định lượng hiệu quả đọc xuyên qua bộ ba kết thúc; `elevated stop-codon readthrough efficiency` — hiệu quả đọc xuyên codon kết thúc tăng cao; `determinants of stop-codon readthrough efficiency` — các yếu tố quyết định hiệu quả đọc xuyên codon kết thúc.

**Register & nuance:** `biochemical therapeutics & molecular genetics` — bình thường chỉ dao động từ 0.01% đến 1%, nhưng có thể được tăng lên tới 10–20% bằng các phân tử nhỏ để cứu chữa bệnh nhân mang đột biến vô nghĩa gây chết người.

**Examples:** `The therapeutic efficacy of ataluren depends heavily upon elevating stop-codon readthrough efficiency without inducing widespread proteome toxicity.` → Hiệu quả điều trị của ataluren phụ thuộc nặng nề vào việc nâng cao hiệu quả đọc xuyên qua bộ ba kết thúc mà không gây ra độc tính diện rộng trên toàn hệ protein.

**Liên kết tiếng Hàn:** `종결 코돈 통과독 효율` (終結 codon 通過讀 效率) — hiệu quả đọc xuyên qua codon kết thúc dịch mã.

---

## 25. microprotein cellular localization /ˌmaɪkroʊˈproʊtin ˈsɛljələr ˌloʊkələˈzeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase` — cụm danh từ. Làm chủ ngữ hoặc tân ngữ xác định đích đến của các peptide siêu nhỏ trong bào quan (ví dụ: `determine microprotein cellular localization`).

**Core meaning — English:** The specific subcellular organelle, membrane compartment, or macromolecular complex to which a translated microprotein traffics and performs its biological duties.

**Core meaning & mental image — Tiếng Việt:** Sự định vị tế bào của vi protein; hãy hình dung một chiếc thẻ ra vào văn phòng tí hon được gắn nam châm: nó tự động bị hút dính vào cánh cửa của phòng máy chủ (màng ty thể) hoặc bàn làm việc của giám đốc (nhân tế bào) để kích hoạt hệ thống bảo mật.

**Grammar & collocations:** `determine microprotein cellular localization` — xác định sự định vị tế bào của vi protein; `organellar microprotein cellular localization` — sự định vị tế bào của vi protein tại các bào quan; `patterns of microprotein cellular localization` — các mô hình định vị tế bào của vi protein.

**Register & nuance:** `cell biology & imaging mass spectrometry` — rất nhiều vi protein định vị tại màng trong ty thể hoặc màng lưới nội chất (*ER*), nơi chúng đóng vai trò như các tiểu đơn vị điều hòa lắp ráp bơm ion và phức hợp hô hấp.

**Examples:** `Immunofluorescence microscopy confirmed the microprotein cellular localization to the outer mitochondrial membrane, where it modulates cristae remodeling.` → Kính hiển vi huỳnh quang miễn dịch đã xác nhận sự định vị tế bào của vi protein tại màng ngoài ty thể, nơi nó điều hòa sự tái cấu trúc gờ màng.

**Liên kết tiếng Hàn:** `미세단백질 세포내 국소화` (微細蛋白質 細胞內 局所化) — sự định vị cục bộ trong tế bào của vi protein.

---

## Review in context (Part 1: Translatomic Resolution and Translation Kinetics)

The advent of **ribosome footprint profiling** fundamentally dismantled the simplistic dogma that cellular protein production mirrors mRNA transcript copy numbers. By capturing each protected mRNA fragment physically sheltered inside the catalytic center, researchers can isolate the **ribosome-protected fragment** at single-nucleotide precision. To freeze translation events without introducing procedural artifacts during tissue harvesting, protocols enforce immediate **cycloheximide translation arrest**, preserving a faithful snapshot of active elongation complexes. When deployed on a systemic scale, **translatome profiling** captures dynamic translational reprogramming across diverse cellular stress states. Intriguingly, high-resolution footprint libraries revealed that translation frequently begins at an unconventional **non-AUG initiation codon**, such as CUG or GUG, expanding the functional genetic code beyond the standard AUG initiator. In many regulatory transcripts, scanning ribosomal subunits encounter an **upstream open reading frame** within the 5' leader, which intercepts initiation complexes and acts as a repressive barrier against the main downstream protein. Along the coding sequence, measuring **ribosome stalling kinetics** illuminates how ribosomes pause at challenging motifs, such as consecutive proline repeats, to facilitate nascent polypeptide folding. Investigating these cryptic translation events has accelerated **micropeptide functional characterization**, confirming that tiny, neglected peptides execute vital metabolic and physiological functions. Under pathophysiological stress, cells deliberately bypass classical cap-binding factors to activate **non-canonical translation initiation**, maintaining vital synthesis even when global translation is suppressed. Biophysical calculations demonstrate that **ribosome elongation velocity** varies dynamically along mRNA strands, fine-tuned by codon bias and tRNA charging states. To definitively map novel translation starts across transcripts, investigators execute a **harringtonine run-off assay**, which freezes newly initiating ribosomes precisely at start codons while allowing elongating complexes to run off the transcript. When an elongating ribosome suffers a protracted pause, it inevitably provokes severe **ribosomal queueing**, causing trailing ribosomes to collide and assemble into aberrant disome structures.

**Bản dịch tiếng Việt:**

Sự ra đời của **kỹ thuật lập hồ sơ dấu chân ribosome** đã đập tan về căn bản giáo điều đơn giản cho rằng sản lượng protein tế bào phản ánh số lượng bản sao chép mRNA. Bằng cách bắt giữ từng đoạn mRNA được bảo vệ nằm lọt thỏm bên trong trung tâm xúc tác, các nhà nghiên cứu có thể phân lập **đoạn phân tử được ribosome bảo vệ** ở độ chuẩn xác từng nucleotide đơn lẻ. Để đóng băng các biến cố dịch mã mà không đưa vào các sai số quy trình trong quá trình thu hoạch mô, các giao thức thực thi **sự đình chỉ dịch mã bằng cycloheximide** tức thì, bảo tồn một bức ảnh chụp nhanh trung thực về các phức hợp kéo dài đang hoạt động. Khi được triển khai trên quy mô toàn hệ thống, việc **lập hồ sơ toàn bộ hệ dịch mã** nắm bắt sự tái lập trình dịch mã năng động trên các trạng thái căng thẳng tế bào đa dạng. Điều thú vị là các thư viện dấu chân độ phân giải cao tiết lộ rằng quá trình dịch mã thường xuyên bắt đầu tại một **bộ ba mở đầu không phải AUG** độc đáo, chẳng hạn như CUG hoặc GUG, mở rộng mã di truyền chức năng vượt ra ngoài codon khởi đầu AUG tiêu chuẩn. Trong nhiều bản phiên mã điều hòa, các tiểu đơn vị ribosome đang quét gặp phải một **khung đọc mở thượng nguồn** bên trong đoạn dẫn đầu 5', thứ đánh chặn các phức hợp khởi đầu và hoạt động như một rào cản kìm hãm chống lại protein chính ở hạ nguồn. Dọc theo trình tự mã hóa, việc đo lường **động học dừng ribosome** làm sáng tỏ cách thức ribosome tạm dừng tại các mô-típ khó, chẳng hạn như các đoạn lặp proline liên tiếp, để tạo điều kiện thuận lợi cho sự cuộn gập polypeptide mới sinh. Việc điều tra các biến cố dịch mã ẩn giấu này đã đẩy nhanh việc **giải mã đặc tính chức năng của vi peptide**, xác nhận rằng các peptide nhỏ bé từng bị bỏ quên thực thi các chức năng chuyển hóa và sinh lý sống còn. Dưới căng thẳng bệnh lý học, các tế bào cố tình bỏ qua các yếu tố gắn mũ cap cổ điển để kích hoạt **sự khởi đầu dịch mã phi điển hình**, duy trì sự tổng hợp thiết yếu ngay cả khi dịch mã toàn cầu bị ức chế. Các tính toán lý sinh chứng minh rằng **tốc độ kéo dài của ribosome** thay đổi năng động dọc theo các sợi mRNA, được tinh chỉnh bởi xu hướng sử dụng codon và trạng thái nạp tRNA. Để lập bản đồ dứt khoát các vị trí bắt đầu dịch mã mới trên các bản phiên mã, các nhà điều tra thực hiện **xét nghiệm giải phóng ribosome bằng harringtonine**, thứ làm đông cứng các ribosome mới khởi đầu chính xác tại các codon bắt đầu trong khi cho phép các phức hợp đang kéo dài chạy hết khỏi bản sao chép. Khi một ribosome đang kéo dài chịu sự tạm dừng kéo dài, nó tất yếu kích hoạt **sự dồn ứ hàng ngũ ribosome** trầm trọng, khiến các ribosome chạy phía sau va chạm và lắp ráp thành các cấu trúc disome dị thường.

---

## Review in context (Part 2: Cryptic Open Reading Frames and Ribosome Surveillance)

Beyond canonical coding regions, computational pipelines have identified the widespread translation of a **downstream open reading frame** within the 3' untranslated region, expanding the coding potential of mature mRNAs. Many of these elements represent an evolutionary conserved **short open reading frame**, which generates bioactive microproteins shorter than one hundred amino acids. Whenever an unresolved translational stall leads to multi-ribosome collisions, the collided disome interface recruits an active **ribosome collision sensor**, alerting the cell to molecular traffic jams. Once bound, this sensor recruits downstream effectors to execute **ribosome-associated quality control**, pulling apart stalled ribosome subunits and targeting the nascent chain for proteasomal destruction. Throughout standard translation, the newly polymerized amino acid chain must navigate the interior of the **nascent peptide exit tunnel**, where sequence-specific contacts can modulate elongation kinetics or induce programmed stalling. When translatomic data are aligned to global genomic coordinates, the calculated **ribosome occupancy density** exposes subtle translational pause sites and structural bottlenecks with remarkable clarity. In certain cellular contexts, ribosomes deliberately disregard stop signals through **translational readthrough**, producing C-terminally extended proteins equipped with alternate localization tags. In viral genomes, ribosomal progression is strategically manipulated by a **ribosomal frameshifting element**, forcing ribosomes to slip into an overlapping reading frame to generate polyprotein enzymes. Modern annotation platforms increasingly validate that translation of a **non-canonical open reading frame** is not mere biological noise, but an evolutionarily conserved regulatory layer. To separate actively translating messages from untranslated transcripts, researchers frequently couple sequencing with classical **polysome fractionation**, analyzing mRNAs partitioned into dense sucrose layers. Across metabolic adaptations, comparing translational footprints with total RNA levels quantifies **translatomic concordance**, revealing whether protein output matches transcript abundance. In translational medicine, boosting **stop-codon readthrough efficiency** with therapeutic compounds offers a promising strategy to treat fatal premature termination codon diseases. Finally, determining **microprotein cellular localization** to organelles such as the endoplasmic reticulum or mitochondria provides crucial mechanistic insight into how these newly discovered micropeptides regulate human health.

**Bản dịch tiếng Việt:**

Vượt ra ngoài các vùng mã hóa kinh điển, các quy trình tính toán đã xác định sự dịch mã phổ biến của một **khung đọc mở hạ nguồn** bên trong vùng không dịch mã 3', mở rộng tiềm năng mã hóa của các mRNA trưởng thành. Nhiều yếu tố trong số này đại diện cho một **khung đọc mở ngắn** được bảo tồn qua tiến hóa, thứ tạo ra các vi protein có hoạt tính sinh học ngắn hơn một trăm axit amin. Bất cứ khi nào sự đình trệ dịch mã không được giải quyết dẫn đến sự va chạm của nhiều ribosome, bề mặt tiếp xúc của disome va chạm sẽ chiêu mộ một **cảm biến va chạm ribosome** hoạt động, cảnh báo tế bào về sự tắc nghẽn giao thông phân tử. Sau khi liên kết, cảm biến này tuyển mộ các yếu tố tác động hạ nguồn để thực thi **cơ chế kiểm soát chất lượng liên kết ribosome**, tháo rời các tiểu đơn vị ribosome bị đình trệ và nhắm mục tiêu chuỗi mới sinh cho sự phá hủy bởi thể tiêu protein proteasome. Xuyên suốt quá trình dịch mã tiêu chuẩn, chuỗi axit amin mới được trùng hợp phải điều hướng bên trong **đường hầm thoát chuỗi peptide mới sinh**, nơi các tiếp xúc đặc hiệu theo trình tự có thể điều chỉnh động học kéo dài hoặc gây ra sự dừng được lập trình. Khi dữ liệu hệ dịch mã được gióng hàng với các tọa độ hệ gen toàn cầu, **mật độ chiếm chỗ của ribosome** được tính toán phơi bày các vị trí dừng dịch mã tinh vi và các điểm nghẽn cấu trúc với độ rõ nét đáng kể. Trong một số bối cảnh tế bào nhất định, các ribosome cố tình phớt lờ các tín hiệu dừng thông qua **hiện tượng đọc xuyên dịch mã**, tạo ra các protein kéo dài ở đầu C được trang bị các thẻ định vị thay thế. Trong các hệ gen virus, sự tiến triển của ribosome bị thao túng một cách chiến lược bởi một **yếu tố dịch khung đọc ribosome**, buộc các ribosome trượt vào một khung đọc chồng lấn để tạo ra các enzyme polyprotein. Các nền tảng chú giải hiện đại ngày càng xác thực rằng sự dịch mã của một **khung đọc mở phi điển hình** không phải là tiếng ồn sinh học đơn thuần, mà là một lớp điều hòa được bảo tồn qua tiến hóa. Để tách biệt các thông điệp đang dịch mã tích cực khỏi các bản phiên mã chưa dịch mã, các nhà nghiên cứu thường xuyên kết hợp giải trình tự với phương pháp **phân đoạn polysome** cổ điển, phân tích các mRNA được phân vùng vào các lớp sucrose đậm đặc. Xuyên suốt các sự thích ứng chuyển hóa, việc so sánh các dấu chân dịch mã với mức RNA tổng số định lượng **sự tương đồng hệ dịch mã**, tiết lộ xem liệu sản lượng protein có khớp với độ phong phú của bản phiên mã hay không. Trong y học chuyển dịch, việc thúc đẩy **hiệu quả đọc xuyên qua bộ ba kết thúc** bằng các hợp chất điều trị mang lại một chiến lược đầy hứa hẹn để điều trị các bệnh do bộ ba kết thúc sớm gây tử vong. Cuối cùng, việc xác định **sự định vị tế bào của vi protein** tới các bào quan như lưới nội chất hoặc ty thể cung cấp sự thấu hiểu cơ chế then chốt về cách thức các vi peptide mới được phát hiện này điều hòa sức khỏe con người.
