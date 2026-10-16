# C2+ Vocabulary — Genome variation and single-cell regulation

This lesson follows how genetic variation is organized, how regulatory DNA controls expression, and how single-cell methods separate real biological states from technical artifacts. The network is **pangenome graph → linkage disequilibrium → gene regulatory network → enhancer hijacking → cis-regulatory element → transcriptional bursting → allele-specific expression → single-cell pseudotime → batch effect correction → ambient RNA → doublet detection → multi-omic integration → epistasis → genetic penetrance → expressivity → loss-of-function variant → gain-of-function variant → nonsense-mediated decay → ribosome profiling → codon bias**.

## 1. pangenome graph /ˈpænˌdʒiːnoʊm ɡræf/
**Part of speech:** noun
**Core meaning (English):** a graph-based representation that combines the shared and variable sequences found across many genomes of a species or population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bản đồ genome dạng graph có đường chung và nhánh biến thể, thay vì ép mọi cá thể vào một reference tuyến tính duy nhất.
**Grammar & collocations:** `human pangenome graph` — graph pangenome người; `graph-based alignment` — alignment; `build a pangenome graph` — build.
**Examples:** `The pangenome graph represented structural variants that a single linear reference had missed.` → Pangenome graph biểu diễn các structural variant mà một linear reference bỏ sót.
**Liên kết tiếng Hàn:** `팬게놈 그래프` — đồ thị pangenome.

## 2. linkage disequilibrium /ˈlɪŋkɪdʒ ˌdɪsɪˈkwɪlɪbriəm/
**Part of speech:** noun
**Core meaning (English):** a non-random association between alleles at different genetic loci in a population.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** các allele ở hai vị trí gene đi cùng nhau nhiều hơn mức ngẫu nhiên, như những “toa tàu” thường được di truyền chung.
**Grammar & collocations:** `strong linkage disequilibrium` — disequilibrium mạnh; `LD block` — block LD; `decay of linkage disequilibrium` — suy giảm.
**Examples:** `The marker was useful because it remained in strong linkage disequilibrium with the causal variant.` → Marker hữu ích vì vẫn linkage disequilibrium mạnh với causal variant.
**Liên kết tiếng Hàn:** `연관 불평형` — linkage disequilibrium.

## 3. gene regulatory network /dʒiːn ˈrɛɡjələtɔri ˈnɛtwɜrk/
**Part of speech:** noun
**Core meaning (English):** a network of genes, regulatory elements, and molecular interactions that jointly control patterns of gene expression.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** mạng điều khiển biểu hiện gene; node là gene hoặc regulator, còn edge là quan hệ bật, tắt hoặc điều biến.
**Grammar & collocations:** `gene-regulatory network inference` — suy luận; `network motif` — motif; `reconstruct a network` — reconstruct.
**Examples:** `The gene regulatory network changed when the cells entered a differentiated state.` → Gene regulatory network thay đổi khi tế bào bước vào trạng thái biệt hóa.
**Liên kết tiếng Hàn:** `유전자 조절 네트워크` — mạng điều hòa gene.

## 4. enhancer hijacking /ɪnˈhænsər ˈhaɪdʒɪŋ/
**Part of speech:** noun
**Core meaning (English):** a regulatory rearrangement in which an enhancer is moved or brought near a different gene and drives abnormal expression.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** enhancer bị “cướp” khỏi gene cũ và đặt cạnh gene khác, khiến gene đó bị bật sai thời điểm hoặc sai mô.
**Grammar & collocations:** `oncogenic enhancer hijacking` — hijacking gây ung thư; `enhancer-hijacking event` — event; `rearrangement-driven expression` — biểu hiện do rearrangement.
**Examples:** `Enhancer hijacking caused the normally quiet growth gene to remain active in the tumor.` → Enhancer hijacking khiến gene tăng trưởng vốn yên lặng luôn hoạt động trong tumor.
**Liên kết tiếng Hàn:** `인핸서 탈취` — enhancer hijacking.

## 5. cis-regulatory element /sɪs ˈrɛɡjələtɔri ˈɛləmənt/
**Part of speech:** noun
**Core meaning (English):** a DNA sequence on the same molecule as a gene that regulates that gene's transcription.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** đoạn DNA “cùng phía” với gene đích, như promoter hoặc enhancer, nơi regulator bám vào để điều chỉnh transcription.
**Grammar & collocations:** `cis-regulatory element annotation` — annotation; `functional cis-regulatory element` — element chức năng; `map regulatory elements` — map.
**Examples:** `A conserved cis-regulatory element controlled expression in developing heart tissue.` → Cis-regulatory element bảo tồn điều khiển expression trong mô tim đang phát triển.
**Liên kết tiếng Hàn:** `시스 조절 요소` — phần tử điều hòa cis.

## 6. transcriptional bursting /trænˈskrɪpʃənəl ˈbɜrstɪŋ/
**Part of speech:** noun
**Core meaning (English):** the intermittent production of multiple RNA molecules in short bursts separated by quieter periods of transcription.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gene không chảy RNA đều như vòi nước; nó bật thành “đợt” rồi tắt, tạo biến thiên giữa các tế bào.
**Grammar & collocations:** `transcriptional-burst frequency` — tần suất burst; `burst size` — kích thước; `measure transcriptional bursting` — đo.
**Examples:** `Transcriptional bursting made genetically identical cells express the reporter at different times.` → Transcriptional bursting khiến các tế bào giống gene biểu hiện reporter ở thời điểm khác nhau.
**Liên kết tiếng Hàn:** `전사 버스팅` — biểu hiện phiên mã theo đợt.

## 7. allele-specific expression /əˈliːl spəˈsɪfɪk ɪkˈsprɛʃən/
**Part of speech:** noun
**Core meaning (English):** unequal expression of two alleles of the same gene in a diploid individual.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hai bản sao gene không nói cùng “âm lượng”; một allele tạo nhiều RNA hơn do regulatory variant, imprinting hoặc cơ chế khác.
**Grammar & collocations:** `allele-specific-expression analysis` — analysis; `allele imbalance` — mất cân bằng; `detect allele-specific expression` — detect.
**Examples:** `Allele-specific expression revealed that the disease-associated haplotype was more active in immune cells.` → Allele-specific expression cho thấy haplotype liên quan disease hoạt động mạnh hơn trong immune cells.
**Liên kết tiếng Hàn:** `대립유전자 특이적 발현` — biểu hiện đặc hiệu allele.

## 8. single-cell pseudotime /ˈsɪŋɡəl sɛl ˈsuːdoʊtaɪm/
**Part of speech:** noun
**Core meaning (English):** an inferred ordering of single cells along a biological process, such as differentiation, even when the cells were measured only once.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** “thời gian giả” xếp các cell snapshot thành đường phát triển, không phải timestamp thật.
**Grammar & collocations:** `single-cell pseudotime trajectory` — trajectory; `infer pseudotime` — infer; `pseudotime ordering` — ordering.
**Examples:** `Single-cell pseudotime placed the progenitor cells before the mature secretory population.` → Single-cell pseudotime đặt progenitor trước population secretory trưởng thành.
**Liên kết tiếng Hàn:** `단일세포 의사시간` — pseudotime của single-cell.

## 9. batch effect correction /bætʃ ɪˈfɛkt kəˈrɛkʃən/
**Part of speech:** noun
**Core meaning (English):** the removal or modeling of systematic differences caused by processing samples in separate experimental batches rather than by biology.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** sửa “dấu tay của ngày chạy máy” để khác biệt còn lại phản ánh biology chứ không phải batch.
**Grammar & collocations:** `batch-effect correction method` — method; `overcorrect for batch effects` — sửa quá mức; `assess correction` — assess.
**Examples:** `Batch effect correction aligned the control samples without erasing the treatment response.` → Batch effect correction căn chỉnh control mà không xóa treatment response.
**Liên kết tiếng Hàn:** `배치 효과 보정` — hiệu chỉnh batch effect.

## 10. ambient RNA /ˈæmbiənt ɑr ɛn ˈeɪ/
**Part of speech:** noun
**Core meaning (English):** RNA released from broken or lysed cells that contaminates the fluid around intact cells in a single-cell experiment.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** RNA “trôi nổi” ngoài cell thật; droplet có thể nhận nhầm RNA này và tưởng cell đang biểu hiện gene đó.
**Grammar & collocations:** `ambient-RNA contamination` — contamination; `estimate ambient RNA` — estimate; `remove ambient signal` — remove.
**Examples:** `Ambient RNA made a few empty droplets appear to contain immune-cell transcripts.` → Ambient RNA khiến vài droplet rỗng trông như chứa transcript của immune cell.
**Liên kết tiếng Hàn:** `주변 RNA` — RNA môi trường.

## 11. doublet detection /ˈdʌblət dɪˈtɛkʃən/
**Part of speech:** noun
**Core meaning (English):** the identification of droplets or partitions that accidentally captured two cells and therefore show a mixed expression profile.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phát hiện “hai cell trong một droplet”; profile lai có thể bị hiểu nhầm là một cell mới.
**Grammar & collocations:** `single-cell doublet detection` — detection; `doublet score` — score; `flag a doublet` — flag.
**Examples:** `Doublet detection removed droplets expressing incompatible lineage markers at the same time.` → Doublet detection loại các droplet biểu hiện đồng thời marker của những lineage không tương thích.
**Liên kết tiếng Hàn:** `이중 세포 검출` — phát hiện doublet.

## 12. multi-omic integration /ˌmʌlti oʊˈmɪk ˌɪntəˈɡreɪʃən/
**Part of speech:** noun
**Core meaning (English):** the coordinated analysis of multiple molecular layers, such as RNA, chromatin accessibility, protein, and DNA variation, from related cells or samples.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ghép nhiều lớp “omics” để nối chromatin, RNA và protein thành một chuỗi regulation thay vì xem từng lớp riêng.
**Grammar & collocations:** `single-cell multi-omic integration` — integration; `integrate modalities` — integrate; `cross-omic correspondence` — correspondence.
**Examples:** `Multi-omic integration linked an open enhancer to the transcript it regulated.` → Multi-omic integration nối enhancer mở với transcript mà nó điều hòa.
**Liên kết tiếng Hàn:** `다중 오믹스 통합` — tích hợp multi-omics.

## 13. epistasis /ɪˈpɪstəsɪs/
**Part of speech:** noun
**Core meaning (English):** a situation in which the effect of one genetic variant depends on the presence of another variant.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** allele không có “giá trị cố định”; effect của nó đổi theo allele ở gene khác, như hai công tắc tương tác.
**Grammar & collocations:** `genetic epistasis` — epistasis; `epistatic interaction` — interaction; `test for epistasis` — test.
**Examples:** `Epistasis explained why the same resistance allele protected one strain but harmed another.` → Epistasis giải thích vì sao cùng resistance allele bảo vệ strain này nhưng gây hại strain khác.
**Liên kết tiếng Hàn:** `상위성` — tương tác epistasis.

## 14. genetic penetrance /dʒəˈnɛtɪk ˈpɛnətrəns/
**Part of speech:** noun
**Core meaning (English):** the proportion of individuals with a particular genotype who display the associated phenotype.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gene có “bật ra thành phenotype” ở bao nhiêu phần trăm người mang nó; penetrance không nhất thiết là 100%.
**Grammar & collocations:** `incomplete genetic penetrance` — penetrance không hoàn toàn; `penetrance estimate` — estimate; `high-penetrance variant` — variant penetrance cao.
**Examples:** `The variant had high genetic penetrance but still showed age-dependent onset.` → Variant có genetic penetrance cao nhưng onset vẫn phụ thuộc tuổi.
**Liên kết tiếng Hàn:** `유전적 침투도` — độ penetrance di truyền.

## 15. expressivity /ˌɛkˌsprɛˈsɪvəti/
**Part of speech:** noun
**Core meaning (English):** the degree or range of phenotypic expression among individuals who share a genotype and show the trait.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** những người cùng có gene và cùng biểu hiện trait nhưng mức độ nặng nhẹ khác nhau; đó là expressivity.
**Grammar & collocations:** `variable expressivity` — expressivity biến thiên; `phenotypic expressivity` — expressivity phenotype; `measure expressivity` — đo.
**Examples:** `Variable expressivity produced mild symptoms in some carriers and severe symptoms in others.` → Variable expressivity tạo triệu chứng nhẹ ở một số carrier và nặng ở người khác.
**Liên kết tiếng Hàn:** `발현도` — mức độ biểu hiện phenotype.

## 16. loss-of-function variant /lɔs əv ˈfʌŋkʃən ˈvɛriənt/
**Part of speech:** noun
**Core meaning (English):** a genetic variant that reduces or eliminates the normal activity of the protein or regulatory product it affects.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variant làm mất một phần hoặc toàn bộ chức năng bình thường, như enzyme bị tắt hoặc giảm công suất.
**Grammar & collocations:** `pathogenic loss-of-function variant` — variant gây bệnh; `loss-of-function allele` — allele; `annotate a variant` — annotate.
**Examples:** `A loss-of-function variant reduced the receptor's ability to respond to the hormone.` → Loss-of-function variant làm giảm khả năng receptor đáp ứng hormone.
**Liên kết tiếng Hàn:** `기능 상실 변이` — biến thể mất chức năng.

## 17. gain-of-function variant /ɡeɪn əv ˈfʌŋʃən ˈvɛriənt/
**Part of speech:** noun
**Core meaning (English):** a genetic variant that gives a protein or regulatory product increased, new, or misdirected activity.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** variant khiến protein hoạt động mạnh hơn, có chức năng mới hoặc bật sai nơi; “gain” không nhất thiết là có lợi.
**Grammar & collocations:** `gain-of-function mutation` — mutation; `activating gain-of-function variant` — variant activating; `acquire a new function` — acquire.
**Examples:** `The gain-of-function variant kept the signaling kinase active without its normal stimulus.` → Gain-of-function variant giữ kinase signaling hoạt động dù không có stimulus bình thường.
**Liên kết tiếng Hàn:** `기능 획득 변이` — biến thể gain-of-function.

## 18. nonsense-mediated decay /ˈnɑnsɛns ˈmiːdiˌeɪtɪd dɪˈkeɪ/
**Part of speech:** noun
**Core meaning (English):** a quality-control pathway that detects messenger RNAs with premature stop codons and promotes their degradation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** hệ thống “dọn rác” mRNA có stop codon quá sớm, ngăn tế bào tạo protein bị cắt cụt và có thể độc.
**Grammar & collocations:** `trigger nonsense-mediated decay` — trigger; `NMD pathway` — pathway; `escape NMD` — escape.
**Examples:** `The premature-stop transcript was reduced by nonsense-mediated decay before much protein accumulated.` → Transcript stop sớm bị nonsense-mediated decay giảm trước khi tích lũy nhiều protein.
**Liên kết tiếng Hàn:** `넌센스 매개 분해` — phân hủy qua nonsense-mediated decay.

## 19. ribosome profiling /ˈraɪbəsoʊm ˈproʊfəlɪŋ/
**Part of speech:** noun
**Core meaning (English):** a sequencing method that maps ribosome-protected RNA fragments to measure which transcripts are being translated and where.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** chụp “dấu chân” ribosome trên mRNA để biết transcript nào thật sự được dịch và ribosome đang dừng ở codon nào.
**Grammar & collocations:** `ribosome-profiling data` — data; `translation footprint` — footprint; `perform ribosome profiling` — perform.
**Examples:** `Ribosome profiling showed that the transcript was abundant but translated inefficiently.` → Ribosome profiling cho thấy transcript nhiều nhưng được dịch kém hiệu quả.
**Liên kết tiếng Hàn:** `리보솜 프로파일링` — lập hồ sơ hoạt động ribosome.

## 20. codon bias /ˈkoʊdən baɪəs/
**Part of speech:** noun
**Core meaning (English):** the unequal use of synonymous codons in a genome or set of genes, often reflecting tRNA availability, expression level, or evolutionary history.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** cùng một amino acid có nhiều codon nhưng genome “ưa” một số codon hơn, như chọn từ đồng nghĩa theo thói quen của hệ dịch mã.
**Grammar & collocations:** `species-specific codon bias` — bias đặc trưng loài; `codon-usage bias` — cách dùng codon; `optimize codons` — optimize.
**Examples:** `Codon bias affected how efficiently the recombinant protein was produced in yeast.` → Codon bias ảnh hưởng hiệu suất tạo recombinant protein trong nấm men.
**Liên kết tiếng Hàn:** `코돈 편향` — thiên lệch codon.

## Review in context

A **pangenome graph** represents sequence diversity more honestly than one reference, while **linkage disequilibrium** records which variants travel together. A **gene regulatory network** depends on each **cis-regulatory element**, and **enhancer hijacking** can redirect that network. Even one cell can vary through **transcriptional bursting** and **allele-specific expression**. In single-cell data, **single-cell pseudotime** orders states, **batch effect correction** removes processing artifacts, **ambient RNA** explains contamination, and **doublet detection** flags droplets containing two cells. **Multi-omic integration** connects these expression patterns to chromatin and DNA. Across individuals, **epistasis**, **genetic penetrance**, and **expressivity** shape phenotype; a **loss-of-function variant** differs from a **gain-of-function variant** in how activity changes. At the RNA and translation levels, **nonsense-mediated decay**, **ribosome profiling**, and **codon bias** reveal why a DNA variant does not always predict a simple protein output.

**Bản dịch tiếng Việt:**

**Pangenome graph** biểu diễn diversity của sequence trung thực hơn một reference duy nhất, còn **linkage disequilibrium** ghi lại các variant nào thường di truyền cùng nhau. **Gene regulatory network** phụ thuộc vào từng **cis-regulatory element**, và **enhancer hijacking** có thể chuyển hướng network đó. Ngay cả một tế bào cũng có thể biến thiên qua **transcriptional bursting** và **allele-specific expression**. Trong dữ liệu single-cell, **single-cell pseudotime** sắp xếp các state, **batch effect correction** loại artifact do xử lý, **ambient RNA** giải thích contamination, còn **doublet detection** đánh dấu droplet chứa hai cell. **Multi-omic integration** nối pattern biểu hiện với chromatin và DNA. Giữa các cá thể, **epistasis**, **genetic penetrance** và **expressivity** định hình phenotype; **loss-of-function variant** khác **gain-of-function variant** ở cách hoạt động thay đổi. Ở tầng RNA và dịch mã, **nonsense-mediated decay**, **ribosome profiling** và **codon bias** cho thấy vì sao DNA variant không phải lúc nào cũng dự đoán một protein output đơn giản.
