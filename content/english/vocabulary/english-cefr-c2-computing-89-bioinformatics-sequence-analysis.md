# C2 Vocabulary — Bioinformatics and sequence analysis

This lesson follows a sequencing analysis from k-mer structure and read mapping through variants, transcript models, and single-cell interpretation.

Flow: **k-mer spectrum → sequence alignment → seed-and-extend → de Bruijn graph → variant calling → haplotype phasing → read mapping → reference bias → allele fraction → breakpoint graph → copy-number state → gene ontology → ortholog inference → metagenomic binning → taxonomic classifier → single-cell barcode → transcript isoform → splice junction → expression count matrix → batch correction**.

## 1. k-mer spectrum /ˈkeɪ mɜːr ˈspektrəm/
**Part of speech:** noun
**Core meaning (English):** the frequency distribution of short fixed-length sequences observed in sequencing reads.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** phân phối tần suất của các đoạn sequence ngắn cùng độ dài.
**Grammar & collocations:** `k-mer-spectrum peak` — peak; `count a repeated word` — đếm.
**Examples:** `The k-mer spectrum revealed a repetitive region before assembly began.` → Spectrum lộ vùng lặp.
**Liên kết tiếng Hàn:** `k-머 스펙트럼`.

## 2. sequence alignment /ˈsiːkwəns əˈlaɪnmənt/
**Part of speech:** noun
**Core meaning (English):** arranging biological sequences to expose likely matches, substitutions, insertions, and deletions.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** căn sequence để thấy match, thay thế, chèn và xóa.
**Grammar & collocations:** `sequence-alignment score` — score; `align a query to a reference` — căn.
**Examples:** `Sequence alignment placed the unknown fragment beside its closest reference gene.` → Alignment đặt fragment cạnh gene gần nhất.
**Liên kết tiếng Hàn:** `서열 정렬`.

## 3. seed-and-extend /siːd ænd ɪkˈstend/
**Part of speech:** noun
**Core meaning (English):** a search strategy that finds a short exact seed and then extends it into a longer approximate match.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tìm seed khớp rồi mở rộng thành match dài có thể sai.
**Grammar & collocations:** `seed-and-extend heuristic` — heuristic; `extend a matching seed` — mở rộng.
**Examples:** `Seed-and-extend reduced the search space for millions of short reads.` → Heuristic giảm không gian tìm.
**Liên kết tiếng Hàn:** `시드-확장`.

## 4. de Bruijn graph /də ˈbrɔɪn ɡrɑːf/
**Part of speech:** noun
**Core meaning (English):** a graph whose nodes or edges encode overlapping k-mers for reconstructing sequence paths.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph mã hóa k-mer chồng lấn để dựng path sequence.
**Grammar & collocations:** `de-Bruijn-graph traversal` — traversal; `assemble an Eulerian path` — lắp ráp.
**Examples:** `The de Bruijn graph connected overlapping reads into a candidate contig.` → Graph nối read thành contig.
**Liên kết tiếng Hàn:** `드 브라위인 그래프`.

## 5. variant calling /ˈveriənt ˈkɔːlɪŋ/
**Part of speech:** noun
**Core meaning (English):** inferring genomic differences from aligned sequencing evidence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy ra khác biệt genome từ read đã căn.
**Grammar & collocations:** `variant-calling threshold` — threshold; `call a heterozygous site` — gọi.
**Examples:** `Variant calling identified a rare substitution supported by many independent reads.` → Calling tìm substitution hiếm.
**Liên kết tiếng Hàn:** `변이 호출`.

## 6. haplotype phasing /ˈhælətaɪp ˈfeɪzɪŋ/
**Part of speech:** noun
**Core meaning (English):** determining which variants occur together on the same inherited chromosome copy.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** xác định variant nào cùng nằm trên một bản sao chromosome.
**Grammar & collocations:** `haplotype-phasing algorithm` — algorithm; `phase linked variants` — pha.
**Examples:** `Haplotype phasing showed that the two mutations were inherited from different parents.` → Phasing cho thấy mutation khác nguồn.
**Liên kết tiếng Hàn:** `일배체형 위상 결정`.

## 7. read mapping /riːd ˈmæpɪŋ/
**Part of speech:** noun
**Core meaning (English):** assigning sequencing reads to their most plausible positions in a reference or assembled sequence.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gán read vào vị trí hợp lý trên reference.
**Grammar & collocations:** `read-mapping quality` — quality; `map a read to a locus` — map.
**Examples:** `Read mapping left several ambiguous fragments in the duplicated region.` → Mapping để lại fragment mơ hồ.
**Liên kết tiếng Hàn:** `리드 매핑`.

## 8. reference bias /ˈrefərəns baɪəs/
**Part of speech:** noun
**Core meaning (English):** systematic preference for reads that match the chosen reference allele more closely than an alternative allele.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** pipeline ưu tiên read khớp reference hơn allele thay thế.
**Grammar & collocations:** `reference-bias correction` — correction; `underestimate an alternate allele` — đánh giá thấp.
**Examples:** `Reference bias reduced the apparent support for the non-reference haplotype.` → Bias làm giảm support haplotype khác.
**Liên kết tiếng Hàn:** `참조 편향`.

## 9. allele fraction /əˈliːl ˈfrækʃən/
**Part of speech:** noun
**Core meaning (English):** the fraction of informative reads supporting one allele at a genomic position.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** tỷ lệ read có thông tin ủng hộ một allele.
**Grammar & collocations:** `allele-fraction estimate` — estimate; `measure alternate support` — đo.
**Examples:** `The allele fraction was consistent with a mutation present in only part of the tumor.` → Fraction phù hợp mutation chỉ ở một phần u.
**Liên kết tiếng Hàn:** `대립유전자 비율`.

## 10. breakpoint graph /ˈbreɪkpɔɪnt ɡrɑːf/
**Part of speech:** noun
**Core meaning (English):** a graph representing rearrangement breakpoints and the adjacencies they create between genomic segments.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** graph biểu diễn điểm gãy và adjacency mới của genome.
**Grammar & collocations:** `breakpoint-graph path` — path; `infer a rearrangement` — suy ra.
**Examples:** `The breakpoint graph explained how two distant segments became adjacent.` → Graph giải thích hai segment nối nhau.
**Liên kết tiếng Hàn:** `절단점 그래프`.

## 11. copy-number state /ˈkɒpi ˈnʌmbər steɪt/
**Part of speech:** noun
**Core meaning (English):** the estimated number of copies of a genomic segment in a cell or sample.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** số bản sao ước tính của segment genome.
**Grammar & collocations:** `copy-number-state segmentation` — segmentation; `infer an amplification` — suy ra.
**Examples:** `The copy-number state indicated a deletion spanning three adjacent genes.` → State chỉ deletion qua ba gene.
**Liên kết tiếng Hàn:** `복제 수 상태`.

## 12. gene ontology /dʒiːn ɒnˈtɒlədʒi/
**Part of speech:** noun
**Core meaning (English):** a controlled vocabulary describing gene functions, biological processes, and cellular locations.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** từ vựng chuẩn mô tả function, process và location của gene.
**Grammar & collocations:** `gene-ontology enrichment` — enrichment; `annotate a molecular function` — chú giải.
**Examples:** `Gene ontology enrichment highlighted immune processes among the differentially expressed genes.` → Ontology làm nổi process miễn dịch.
**Liên kết tiếng Hàn:** `유전자 온톨로지`.

## 13. ortholog inference /ˈɔːrθəlɒɡ ˈɪnfərəns/
**Part of speech:** noun
**Core meaning (English):** inferring genes in different species that descended from the same ancestral gene.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** suy ra gene khác loài cùng nguồn tổ tiên.
**Grammar & collocations:** `ortholog-inference confidence` — confidence; `compare conserved genes` — so sánh.
**Examples:** `Ortholog inference transferred a carefully qualified functional annotation across species.` → Inference chuyển annotation có điều kiện.
**Liên kết tiếng Hàn:** `상동 유전자 추론`.

## 14. metagenomic binning /ˌmetədʒiːnoʊˈmɪk ˈbɪnɪŋ/
**Part of speech:** noun
**Core meaning (English):** grouping assembled fragments that likely come from the same organism in a mixed microbial sample.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** gom fragment thuộc cùng organism trong mẫu vi sinh hỗn hợp.
**Grammar & collocations:** `metagenomic-binning cluster` — cluster; `assign a contig to a genome` — gán.
**Examples:** `Metagenomic binning separated a low-abundance bacterium from the dominant community.` → Binning tách bacterium ít abundance.
**Liên kết tiếng Hàn:** `메타게놈 비닝`.

## 15. taxonomic classifier /tækˈsɒnəmɪk ˈklæsɪfaɪər/
**Part of speech:** noun
**Core meaning (English):** a model that assigns sequence evidence to a hierarchical biological taxon.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** model gán evidence sequence vào taxon phân cấp.
**Grammar & collocations:** `taxonomic-classifier confidence` — confidence; `assign a species label` — gán.
**Examples:** `The taxonomic classifier reported a genus-level result because species evidence was weak.` → Classifier chỉ tin tới genus.
**Liên kết tiếng Hàn:** `분류학적 분류기`.

## 16. single-cell barcode /ˈsɪŋɡəl sel ˈbɑːrkoʊd/
**Part of speech:** noun
**Core meaning (English):** a short identifier used to attribute a sequencing read or molecule to its originating cell.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ID ngắn gán read hoặc molecule cho cell nguồn.
**Grammar & collocations:** `single-cell-barcode correction` — correction; `demultiplex a droplet` — tách.
**Examples:** `The single-cell barcode assigned the transcript to a particular droplet.` → Barcode gán transcript cho droplet.
**Liên kết tiếng Hàn:** `단일 세포 바코드`.

## 17. transcript isoform /ˈtrænskrɪpt ˈaɪsəfɔːrm/
**Part of speech:** noun
**Core meaning (English):** one of several RNA transcripts produced from the same gene through alternative processing.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** một transcript RNA khác nhau từ cùng gene nhờ xử lý alternative.
**Grammar & collocations:** `transcript-isoform quantification` — quantification; `distinguish an exon choice` — phân biệt.
**Examples:** `The transcript isoform was abundant only in the differentiated cell state.` → Isoform nhiều ở state biệt hóa.
**Liên kết tiếng Hàn:** `전사체 아이소폼`.

## 18. splice junction /splaɪs ˈdʒʌŋkʃən/
**Part of speech:** noun
**Core meaning (English):** the boundary where two exons are joined in a processed RNA transcript.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** ranh giới nơi hai exon nối trong RNA đã xử lý.
**Grammar & collocations:** `splice-junction read` — read; `support an exon skip` — ủng hộ.
**Examples:** `The splice junction suggested that the sample used an alternative exon.` → Junction cho thấy exon thay thế.
**Liên kết tiếng Hàn:** `스플라이싱 접합부`.

## 19. expression count matrix /ɪkˈspreʃən kaʊnt ˈmeɪtrɪks/
**Part of speech:** noun
**Core meaning (English):** a table of measured transcript or gene counts across samples or individual cells.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bảng count gene/transcript theo sample hoặc cell.
**Grammar & collocations:** `expression-count-matrix normalization` — normalization; `filter a low-count gene` — lọc.
**Examples:** `The expression count matrix contained thousands of mostly zero entries for single cells.` → Matrix có nhiều zero.
**Liên kết tiếng Hàn:** `발현 카운트 행렬`.

## 20. batch correction /bætʃ kəˈrekʃən/
**Part of speech:** noun
**Core meaning (English):** removing systematic technical differences between experimental batches without erasing real biological variation.
**Nghĩa cốt lõi & hình ảnh ghi nhớ:** bỏ khác biệt kỹ thuật giữa batch mà giữ variation sinh học thật.
**Grammar & collocations:** `batch-correction method` — method; `separate technical from biological variation` — tách.
**Examples:** `Batch correction aligned the two sequencing runs while preserving the disease signal.` → Correction căn run và giữ signal bệnh.
**Liên kết tiếng Hàn:** `배치 보정`.

## Review in context

A **k-mer spectrum**, **sequence alignment**, **seed-and-extend**, and a **de Bruijn graph** support assembly; **variant calling**, **haplotype phasing**, and **read mapping** interpret differences. **Reference bias**, **allele fraction**, a **breakpoint graph**, and a **copy-number state** describe genomic structure. **Gene ontology** and **ortholog inference** add function, while **metagenomic binning** and a **taxonomic classifier** separate organisms. A **single-cell barcode**, **transcript isoform**, **splice junction**, **expression count matrix**, and **batch correction** connect sequencing evidence to cell biology.

**Bản dịch tiếng Việt:** **K-mer spectrum**, **sequence alignment**, **seed-and-extend** và **de Bruijn graph** hỗ trợ lắp ráp; **variant calling**, **haplotype phasing** và **read mapping** diễn giải khác biệt. **Reference bias**, **allele fraction**, **breakpoint graph** và **copy-number state** mô tả cấu trúc genome. **Gene ontology** và **ortholog inference** thêm chức năng, còn **metagenomic binning** và **taxonomic classifier** tách organism. **Single-cell barcode**, **transcript isoform**, **splice junction**, **expression count matrix** và **batch correction** nối evidence sequence với sinh học tế bào.
