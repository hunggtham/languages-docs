# C2+ Vocabulary 02 — Reproducing kernel Hilbert spaces (RKHS), Mercer kernel spectral decomposition, and Tikhonov function regularization

## 1. reproducing kernel Hilbert space (RKHS) /ˌriːprəˈduːsɪŋ ˈkɜːrnəl ˈhɪlbərt speɪs/

**Loại từ & vị trí trong câu:** `noun phrase`. Acts as subject or direct object in advanced functional analysis and machine learning theory.

**Core meaning — English:** A complete inner product function space in which all evaluation functionals are continuous, permitting kernel trick representations and linear function estimation.

**Core meaning & mental image — Tiếng Việt:** Không gian Hilbert hạt nhân tái sinh (Không gian hàm tích vô hướng hoàn chỉnh trong đó mọi phiếm hàm đánh giá đều liên tục, cho phép biểu diễn kernel và ước lượng hàm tuyến tính). Hình ảnh một cấu trúc không gian vô hạn chiều mượt mà nơi mỗi điểm đánh giá tương ứng với phép lấy tích vô hướng với một hàm nhân cố định.

**Grammar & collocations:** `norm in an RKHS` — chuẩn trong không gian RKHS; `RKHS embedding theorem` — định lý nhúng RKHS; `infinite-dimensional RKHS` — không gian RKHS vô hạn chiều.

**Register & nuance:** Highly rigorous mathematical and machine learning theory terminology used in kernel methods, support vector machines, and Gaussian processes.

**Examples:** By defining the hypothesis class within a reproducing kernel Hilbert space, the learning algorithm guarantees a unique global minimizer via the representer theorem. → Bằng cách xác định lớp giả thuyết trong không gian Hilbert hạt nhân tái sinh, thuật toán học máy đảm bảo một nghiệm tối thiểu toàn cục duy nhất thông qua định lý người biểu diễn.

**Liên kết tiếng Hàn:** `재생 핵 힐베르트 공간` (再生核Hilbert空間) — không gian Hilbert hạt nhân tái sinh.

---

## 2. Mercer kernel /ˈmɜːrsər ˈkɜːrnl/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as subject or object in spectral theorem and kernel method discussions.

**Core meaning — English:** A symmetric, continuous, positive semi-definite kernel function that admits an orthogonal series expansion in terms of eigenfunctions and eigenvalues.

**Core meaning & mental image — Tiếng Việt:** Hạt nhân Mercer (Hàm nhân đối xứng, liên tục, bán xác định dương, cho phép khai triển chuỗi trực giao theo các hàm riêng và giá trị riêng). Hình ảnh ma trận tương tự vô hạn chiều tỏa ra các hướng trực giao với trọng số thực không âm.

**Grammar & collocations:** `Mercer kernel condition` — điều kiện hạt nhân Mercer; `positive semi-definite Mercer kernel` — hạt nhân Mercer bán xác định dương; `Mercer's theorem expansion` — khai triển định lý Mercer.

**Register & nuance:** Foundational concept in functional analysis and kernel machine learning, ensuring valid inner product spaces in higher dimensions.

**Examples:** Mercer kernels allow algorithms to compute inner products in high-dimensional feature spaces implicitly without ever evaluating the mapping function explicitly. → Hạt nhân Mercer cho phép các thuật toán tính toán tích vô hướng trong các không gian đặc trưng chiều cao một cách ngầm định mà không cần thực sự tính toán hàm ánh xạ một cách tường minh.

**Liên kết tiếng Hàn:** `머서 커널` (Mercer kernel) — hạt nhân Mercer.

---

## 3. Tikhonov regularization /ˈtɪkənɔːf ˌrɛɡjʊlərɪˈzeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase`. Acts as subject or direct object in optimization and inverse problem theory.

**Core meaning — English:** A mathematical technique that adds a penalty term proportional to the squared norm of the solution to an ill-posed optimization problem to ensure stability and uniqueness.

**Core meaning & mental image — Tiếng Việt:** Phương pháp chuẩn hóa Tikhonov (Kỹ thuật toán học thêm một thành phần phạt tỷ lệ với bình phương chuẩn của nghiệm vào bài toán tối ưu hóa không chỉnh định để đảm bảo tính ổn định và duy nhất). Hình ảnh việc uốn nắn một đường cong dao động bất định thành một đường trơn tru, ổn định bằng cách kìm hãm độ lớn của các hệ số.

**Grammar & collocations:** `Tikhonov regularization parameter` — tham số chuẩn hóa Tikhonov; `apply Tikhonov regularization` — áp dụng chuẩn hóa Tikhonov; `Tikhonov penalty term` — số hạng phạt Tikhonov.

**Register & nuance:** Standard terminology in statistics, numerical analysis, and machine learning, synonymous with ridge regression in linear models.

**Examples:** To prevent overfitting on noisy sensor data, the model incorporated Tikhonov regularization, penalizing excessively large parameter weights. → Để ngăn chặn hiện tượng quá khớp trên dữ liệu cảm biến có nhiễu, mô hình đã kết hợp phương pháp chuẩn hóa Tikhonov, phạt các trọng số tham số quá lớn.

**Liên kết tiếng Hàn:** `티호노프 정규화` (Tikhonov正規化) — chuẩn hóa Tikhonov, điều chuẩn Tikhonov.

---

## 4. reproducing property /ˌriːprəˈduːsɪŋ ˈprɑːpərti/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as subject or object in functional analysis proofs.

**Core meaning — English:** The fundamental algebraic characteristic of an RKHS where evaluating a function at a point is equivalent to taking the inner product with the kernel function.

**Core meaning & mental image — Tiếng Việt:** Tính chất tái sinh (Đặc tính đại số cơ bản của không gian RKHS trong đó việc đánh giá giá trị của một hàm tại một điểm tương đương với việc lấy tích vô hướng với hàm hạt nhân). Hình ảnh hạt nhân đóng vai trò như một chiếc gương phản chiếu chính xác giá trị hàm tại bất kỳ điểm nào qua phép tích vô hướng.

**Grammar & collocations:** `leveraging the reproducing property` — tận dụng tính chất tái sinh; `proof via reproducing property` — chứng minh qua tính chất tái sinh; `reproducing property equation` — phương trình tính chất tái sinh.

**Register & nuance:** Advanced mathematical definition distinguishing reproducing kernel Hilbert spaces from general Hilbert spaces.

**Examples:** The proof hinges on the reproducing property, which allows us to evaluate continuous linear functionals as inner products within the Hilbert space. → Phép chứng minh mấu chốt ở tính chất tái sinh, cho phép chúng ta đánh giá các phiếm hàm tuyến tính liên tục như các tích vô hướng trong không gian Hilbert.

**Liên kết tiếng Hàn:** `재생 성질` (再生性質) — tính chất tái sinh.

---

## 5. positive semi-definite /ˈpɑːzətɪv ˈsɛmi ˈdɛfɪnɪt/

**Loại từ & vị trí trong câu:** `adjective phrase`. Modifies matrices, kernels, or quadratic forms.

**Core meaning — English:** Having all eigenvalues greater than or equal to zero, ensuring that associated quadratic forms never yield negative values.

**Core meaning & mental image — Tiếng Việt:** Bán xác định dương (Có tất cả các giá trị riêng lớn hơn hoặc bằng không, đảm bảo dạng toàn phương liên quan không bao giờ cho giá trị âm). Hình ảnh một bề mặt hình nón hoặc paraboloid úp lên phía trên, không có điểm nào thụt xuống phía dưới mức không.

**Grammar & collocations:** `positive semi-definite matrix` — ma trận bán xác định dương; `positive semi-definite kernel` — hạt nhân bán xác định dương; `prove positive semi-definiteness` — chứng minh tính bán xác định dương.

**Register & nuance:** Crucial mathematical condition in linear algebra, optimization, and kernel design for machine learning.

**Examples:** A valid kernel function must be symmetric and positive semi-definite to ensure the corresponding Gram matrix is invertible or pseudo-invertible. → Một hàm hạt nhân hợp lệ phải đối xứng và bán xác định dương để đảm bảo ma trận Gram tương ứng khả nghịch hoặc giả khả nghịch.

**Liên kết tiếng Hàn:** `반정치 행렬` / `양의 준정치` (陽의準정치) — bán xác định dương.

---

## 6. spectral decomposition /ˈspɛktrəl ˌdiːkɑːmpəˈzɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as subject or object in linear algebra and operator theory.

**Core meaning — English:** The representation of a matrix or linear operator in terms of its eigenvalues and eigenvectors or eigenfunctions.

**Core meaning & mental image — Tiếng Việt:** Phân rã phổ / Phân tích phổ (Sự biểu diễn một ma trận hoặc toán tử tuyến tính qua các giá trị riêng và véctơ riêng hoặc hàm riêng của nó). Hình ảnh việc tháo rời một cỗ máy phức tạp thành các thành phần quay độc lập cơ bản nhất của nó.

**Grammar & collocations:** `spectral decomposition theorem` — định lý phân rã phổ; `perform spectral decomposition` — thực hiện phân rã phổ; `eigenvalue spectral decomposition` — phân rã phổ giá trị riêng.

**Register & nuance:** Fundamental mathematical technique across physics, statistics, and machine learning (e.g., PCA, kernel methods).

**Examples:** By applying spectral decomposition to the empirical covariance matrix, principal component analysis extracts orthogonal directions of maximum variance. → Bằng cách áp dụng phân rã phổ cho ma trận hiệp phương sai thực nghiệm, phân tích thành phần chính trích xuất các hướng trực giao có phương sai cực đại.

**Liên kết tiếng Hàn:** `스펙트럼 분해` — phân rã phổ.

---

## 7. infinite-dimensional feature map /ˈɪnfɪnət daɪˈmɛnʃənəl ˈfiːtʃər mæp/

**Loại từ & vị trí trong câu:** `noun phrase`. Acts as subject or direct object in kernel machine learning descriptions.

**Core meaning — English:** A mathematical transformation mapping input data into a Hilbert space of infinite dimensions where non-linear patterns become linearly separable.

**Core meaning & mental image — Tiếng Việt:** Ánh sáng đặc trưng vô hạn chiều (Phép biến đổi toán học ánh xạ dữ liệu đầu vào vào không gian Hilbert vô hạn chiều nơi các mẫu phi tuyến tính trở nên có thể tách rời tuyến tính). Hình ảnh kéo giãn mặt phẳng dữ liệu rối rắm thành một không gian vô tận chiều cao ráo, nơi các lớp dữ liệu tự động tách rời nhau.

**Grammar & collocations:** `implicit infinite-dimensional feature map` — ánh xạ đặc trưng vô hạn chiều ngầm định; `infinite-dimensional feature space` — không gian đặc trưng vô hạn chiều; `define feature map` — định nghĩa ánh xạ đặc trưng.

**Register & nuance:** Advanced theoretical concept in kernel methods, explaining how kernels bypass computational bottlenecks of high dimensions.

**Examples:** Kernel methods bypass the explicit computation of the infinite-dimensional feature map by evaluating pairwise inner products directly via the kernel trick. → Các phương pháp hạt nhân bỏ qua việc tính toán tường minh của ánh xạ đặc trưng vô hạn chiều bằng cách đánh giá các tích vô hướng từng đôi một trực tiếp qua thủ thuật kernel.

**Liên kết tiếng Hàn:** `무한 차원 특징 맵` — ánh xạ đặc trưng vô hạn chiều.

---

## 8. representer theorem /ˌrɛprɪˈzɛntər ˈθɪrəm/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as subject or object in statistical learning theory.

**Core meaning — English:** A foundational theorem stating that the minimizer of a regularized empirical risk functional in an RKHS can always be expressed as a finite linear combination of kernel evaluations at training points.

**Core meaning & mental image — Tiếng Việt:** Định lý người biểu diễn (Định lý nền tảng phát biểu rằng nghiệm tối thiểu của phiếm hàm rủi ro thực nghiệm có chuẩn hóa trong RKHS luôn có thể được biểu diễn dưới dạng tổ hợp tuyến tính hữu hạn của các hàm nhân tại các điểm huấn luyện). Hình ảnh một bài toán vô hạn chiều phức tạp bỗng chốc thu gọn lại thành một tổng hữu hạn gọn gàng tại các điểm dữ liệu thực tế.

**Grammar & collocations:** `proof of the representer theorem` — chứng minh định lý người biểu diễn; `invoke the representer theorem` — viện dẫn định lý người biểu diễn; `representer theorem formulation` — công thức định lý người biểu diễn.

**Register & nuance:** Core theoretical pillar in kernel-based learning algorithms (SVMs, kernel ridge regression), bridging infinite and finite dimensions.

**Examples:** Thanks to the representer theorem, optimization problems in infinite-dimensional RKHS spaces simplify into finite-dimensional coefficient search problems. → Nhờ định lý người biểu diễn, các bài toán tối ưu hóa trong không gian RKHS vô hạn chiều đơn giản hóa thành các bài toán tìm kiếm hệ số hữu hạn chiều.

**Liên kết tiếng Hàn:** `표현 정리` (表現定理) — định lý biểu diễn, định lý representer.

---

## 9. empirical risk minimization /ɪmˈpɪrɪkl rɪsk ˌmɪnɪmaɪˈzeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase`. Acts as subject or object in statistical learning theory and machine learning optimization.

**Core meaning — English:** A principle in statistical learning theory that defines an algorithm by attempting to minimize the error observed on a fixed training dataset.

**Core meaning & mental image — Tiếng Việt:** Cực tiểu hóa rủi ro thực nghiệm (Nguyên lý trong lý thuyết học thống kê định nghĩa một thuật toán bằng cách cố gắng giảm thiểu sai số quan sát được trên một tập dữ liệu huấn luyện cố định). Hình ảnh việc liên tục điều chỉnh các thông số mô hình để vá víu tất cả các lỗi sai trên tập dữ liệu mẫu sẵn có.

**Grammar & collocations:** `empirical risk minimization principle` — nguyên lý cực tiểu hóa rủi ro thực nghiệm; `consistent empirical risk minimization` — cực tiểu hóa rủi ro thực nghiệm nhất quán; `empirical risk bound` — cận rủi ro thực nghiệm.

**Register & nuance:** Fundamental learning theory terminology, contrasted with structural risk minimization which penalizes model complexity.

**Examples:** Unconstrained empirical risk minimization often leads to severe overfitting if model capacity is too large relative to the sample size. → Cực tiểu hóa rủi ro thực nghiệm không ràng buộc thường dẫn đến hiện tượng quá khớp nghiêm trọng nếu dung lượng mô hình quá lớn so với kích thước mẫu.

**Liên kết tiếng Hàn:** `경험적 위험 최소화` (經驗的危險最小化) — cực tiểu hóa rủi ro thực nghiệm.

---

## 10. eigenfunction /ˈaɪɡənˌfʌŋkʃən/

**Loại từ & vị trí trong câu:** `noun`. Functions as subject or object in differential equations and operator spectral theory.

**Core meaning — English:** A non-zero function that, when acted upon by a linear operator, yields a scalar multiple of itself called the corresponding eigenvalue.

**Core meaning & mental image — Tiếng Việt:** Hàm riêng (Hàm khác không mà khi chịu tác động của một toán tử tuyến tính, sẽ trả về một bội số vô hướng của chính nó gọi là giá trị riêng tương ứng). Hình ảnh sóng đứng hoặc dạng dao động cơ bản của một hệ thống chịu biến đổi mà vẫn giữ nguyên hình dạng, chỉ thay đổi biên độ.

**Grammar & collocations:** `orthonormal eigenfunctions` — các hàm riêng trực chuẩn; `eigenfunction expansion` — khai triển hàm riêng; `compute eigenfunctions` — tính toán các hàm riêng.

**Register & nuance:** Core mathematical term in spectral theory, quantum mechanics, and kernel integral equations.

**Examples:** Mercer’s theorem decomposes continuous positive semi-definite kernels into an infinite sum of products of their eigenvalues and eigenfunctions. → Định lý Mercer phân tách các hạt nhân bán xác định dương liên tục thành tổng vô hạn các tích của các giá trị riêng và hàm riêng của chúng.

**Liên kết tiếng Hàn:** `고유 함수` (固有函數) — hàm riêng.

---

## 11. eigenvalue /ˈaɪɡənˌvæluː/

**Loại từ & vị trí trong câu:** `noun`. Functions as subject or object in linear algebra and matrix computations.

**Core meaning — English:** A scalar associated with a linear system of equations (a matrix or operator) that characterizes the factor by which an eigenvector is scaled during transformation.

**Core meaning & mental image — Tiếng Việt:** Giá trị riêng (Hệ số vô hướng đặc trưng cho mức độ co giãn của véctơ riêng khi đi qua phép biến đổi tuyến tính). Hình ảnh hệ số phóng đại hoặc thu nhỏ của một hướng không gian nhất định dưới tác động của ma trận.

**Grammar & collocations:** `positive eigenvalue` — giá trị riêng dương; `eigenvalue spectrum` — phổ giá trị riêng; `dominant eigenvalue` — giá trị riêng trội.

**Register & nuance:** Ubiquitous mathematical concept across all quantitative disciplines involving vector spaces and transformations.

**Examples:** The magnitude of each eigenvalue in kernel spectral decomposition reflects the variance captured along the corresponding eigenfunction direction. → Độ lớn của từng giá trị riêng trong phân rã phổ hạt nhân phản ánh phương sai được nắm bắt dọc theo hướng hàm riêng tương ứng.

**Liên kết tiếng Hàn:** `고유값` (固有値) — giá trị riêng.

---

## 12. Gram matrix /ˈɡræm ˈmeɪtrɪks/

**Loại từ & vị trí trong câu:** `noun phrase`. Acts as subject or direct object in linear algebra and kernel method implementations.

**Core meaning — English:** A Hermitian matrix of inner products of a set of vectors in an inner product space, widely used in kernel methods to encode pairwise similarities.

**Core meaning & mental image — Tiếng Việt:** Ma trận Gram (Ma trận Hermite chứa các tích vô hướng của một tập hợp véctơ trong không gian tích vô hướng, được dùng rộng rãi trong phương pháp kernel để mã hóa độ tương đồng từng đôi một). Hình ảnh tấm lưới đối xứng ghi lại mọi mức độ gắn kết và tương đồng giữa mọi cặp điểm dữ liệu trong tập mẫu.

**Grammar` & collocations:** `symmetric Gram matrix` — ma trận Gram đối xứng; `compute the Gram matrix` — tính toán ma trận Gram; `positive semi-definite Gram matrix` — ma trận Gram bán xác định dương.

**Register & nuance:** Core computational object in kernel algorithms, kernel PCA, and Gaussian processes.

**Examples:** Evaluating the kernel function across all pairs of training samples generates the kernel Gram matrix, which replaces input data representations in dual formulations. → Việc đánh giá hàm hạt nhân trên mọi cặp mẫu huấn luyện tạo ra ma trận Gram hạt nhân, thay thế cho các biểu diễn dữ liệu đầu vào trong các công thức đối ngẫu.

**Liên kết tiếng Hàn:** `그램 행렬` (Gram matrix) — ma trận Gram.

---

## 13. kernel trick /ˈkɜːrnl trɪk/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as subject or direct object in machine learning literature.

**Core meaning — English:** A computational technique that enables algorithms to operate in high-dimensional feature spaces by computing inner products directly in the input space via kernel functions.

**Core meaning & mental image — Tiếng Việt:** Thủ thuật hạt nhân / Mẹo hạt nhân (Kỹ thuật tính toán cho phép các thuật toán vận hành trong không gian đặc trưng số chiều cực cao bằng cách tính tích vô hướng trực tiếp trong không gian đầu vào thông qua hàm hạt nhân). Hình ảnh phép “phù phép” toán học giúp né tránh hoàn toàn việc tính toán trong không gian vô hạn chiều đắt đỏ.

**Grammar & collocations:** `apply the kernel trick` — áp dụng thủ thuật hạt nhân; `kernel trick formulation` — công thức thủ thuật hạt nhân; `power of the kernel trick` — sức mạnh của thủ thuật hạt nhân.

**Register & nuance:** Extremely popular and intuitive term in machine learning, referring to the elegant substitution of dot products by kernel evaluations.

**Examples:** The kernel trick allows support vector machines to construct complex non-linear decision boundaries with the computational complexity of linear models. → Thủ thuật hạt nhân cho phép máy véc-tơ hỗ trợ xây dựng các ranh giới quyết định phi tuyến tính phức tạp với độ phức tạp tính toán của các mô hình tuyến tính.

**Liên kết tiếng Hàn:** `커널 트릭` (kernel trick) — thủ thuật kernel, thủ thuật hạt nhân.

---

## 14. ill-posed problem /ɪl poʊzd ˈprɑːbləm/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as subject or object in mathematical modeling and inverse problems.

**Core meaning — English:** A mathematical model that fails to satisfy Hadamard’s well-posedness criteria, typically lacking existence, uniqueness, or continuous dependence on input data.

**Core meaning & mental image — Tiếng Việt:** Bài toán không chỉnh định / Bài toán đặt không đúng (Mô hình toán học không thỏa mãn các tiêu chí chỉnh định của Hadamard, thường thiếu nghiệm, thiếu tính duy nhất hoặc không phụ thuộc liên tục vào dữ liệu đầu vào). Hình ảnh một bài toán bấp bênh, nơi một chút nhiễu nhỏ ở đầu vào tạo ra sự bùng nổ sai số khổng lồ ở kết quả.

**Grammar & collocations:** `solve an ill-posed problem` — giải bài toán không chỉnh định; `regularize an ill-posed problem` — chuẩn hóa bài toán không chỉnh định; `inherently ill-posed problem` — bài toán bản chất không chỉnh định.

**Register & nuance:** Essential terminology in inverse problems, differential equations, and statistical regularization theory.

**Examples:** Fitting a high-degree polynomial to sparse, noisy data is an ill-posed problem that requires regularization to yield meaningful parameter estimates. → Việc khớp một đa thức bậc cao với dữ liệu thưa thớt, có nhiễu là một bài toán không chỉnh định đòi hỏi phải chuẩn hóa để mang lại các ước lượng tham số có ý nghĩa.

**Liên kết tiếng Hàn:** `부적절한 문제` / `일정치 않은 문제` — bài toán không chỉnh định.

---

## 15. smoothing regularization /ˈsmuːðɪŋ ˌrɛɡjʊlərɪˈzeɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase`. Acts as subject or object in regression and nonparametric function estimation.

**Core meaning — English:** A penalty-driven regularization approach that penalizes rapid fluctuations or high-frequency derivatives in estimated functions to enforce smoothness.

**Core meaning & mental image — Tiếng Việt:** Chuẩn hóa làm mượt (Phương pháp chuẩn hóa dựa trên hình phạt trừng phạt các biến động đột ngột hoặc đạo hàm tần số cao trong các hàm được ước lượng nhằm ép buộc tính trơn tru). Hình ảnh việc dùng bàn là phẳng ủi phẳng những nếp gấp nhấp nhô, gồ ghề của một đường cong đồ thị nhiều nhiễu.

**Grammar & collocations:** `smoothing regularization penalty` — hình phạt chuẩn hóa làm mượt; `optimal smoothing regularization` — chuẩn hóa làm mượt tối ưu; `control smoothing regularization` — kiểm soát chuẩn hóa làm mượt.

**Register & nuance:** Core concept in nonparametric regression, spline smoothing, and functional data analysis.

**Examples:** Smoothing regularization ensures that the fitted regression curve generalizes well to unseen test points by discouraging erratic, wiggly functions. → Chuẩn hóa làm mượt đảm bảo rằng đường cong hồi quy khớp có khả năng tổng quát hóa tốt với các điểm kiểm tra chưa thấy bằng cách ngăn cản các hàm ngoằn ngoèo, thất thường.

**Liên kết tiếng Hàn:** `평활 정규화` (平滑正規化) — chuẩn hóa làm mượt.

---

## 16. dual formulation /ˈduːəl ˈfɔːrmjəˈleɪʃən/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as subject or object in optimization theory and machine learning.

**Core meaning — English:** An alternative mathematical representation of an optimization problem expressed in terms of Lagrange multipliers or inner products, often simplifying computations when dimensionality is high.

**Core meaning & mental image — Tiếng Việt:** Biểu thức đối ngẫu / Công thức đối ngẫu (Biểu diễn toán học thay thế của một bài toán tối ưu hóa được diễn tả qua các nhân tử Lagrange hoặc tích vô hướng, thường làm đơn giản hóa các phép tính khi số chiều cao). Hình ảnh nhìn nhận một bài toán từ mặt bên hoặc mặt sau, nơi các biến số ban đầu biến thành các hệ số trọng số tương tác qua lại.

**Grammar` & collocations:** `derive the dual formulation` — dẫn ra biểu thức đối ngẫu; `primal and dual formulations` — biểu thức nguyên gốc và đối ngẫu; `dual formulation optimization` — tối ưu hóa biểu thức đối ngẫu.

**Register & nuance:** Advanced mathematical optimization and machine learning terminology (e.g., Lagrangian duality in SVMs and kernel methods).

**Examples:** Transforming the support vector machine optimization problem into its dual formulation allows the direct substitution of dot products with kernel functions. → Việc chuyển đổi bài toán tối ưu hóa máy véc-tơ hỗ trợ sang dạng đối ngẫu cho phép thay thế trực tiếp các tích vô hướng bằng các hàm hạt nhân.

**Liên kết tiếng Hàn:** `쌍대 형식` (雙對形式) — công thức đối ngẫu, biểu thức đối ngẫu.

---

## 17. functional analysis /ˈfʌŋkʃənl əˈnæləsɪs/

**Loại từ & vị trí trong câu:** `noun phrase`. Acts as subject or object in advanced mathematics.

**Core meaning — English:** A branch of mathematical analysis concerned with the study of vector spaces and operators acting on function spaces, such as Hilbert and Banach spaces.

**Core meaning & mental image — Tiếng Việt:** Giải tích hàm (Nhánh của giải tích toán học nghiên cứu về không gian véctơ và các toán tử tác động trên không gian hàm, chẳng hạn như không gian Hilbert và Banach). Hình ảnh bức tranh vĩ mô nghiên cứu các không gian có vô hạn chiều thay vì chỉ các không gian hữu hạn chiều quen thuộc.

**Grammar` & collocations:** `foundations of functional analysis` — nền tảng giải tích hàm; `advanced functional analysis` — giải tích hàm nâng cao; `tools of functional analysis` — các công cụ của giải tích hàm.

**Register & nuance:** High-level pure and applied mathematics discipline underlying quantum mechanics, differential equations, and machine learning theory.

**Examples:** Rigorous machine learning theory relies heavily on functional analysis to prove convergence and stability properties of kernel-based estimators. → Lý thuyết học máy nghiêm ngặt phụ thuộc rất nhiều vào giải tích hàm để chứng minh các tính chất hội tụ và ổn định của các ước lượng dựa trên hạt nhân.

**Liên kết tiếng Hàn:** `함수 해석학` (函數解析學) — giải tích hàm.

---

## 18. continuous kernel /ˈkɑːntɪnjuəs ˈkɜːrnl/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as subject or object in integral equations and kernel theory.

**Core meaning — English:** A bivariate function $k(x, y)$ that varies continuously across its domain, serving as the foundation for integral operators and Mercer kernel expansions.

**Core meaning & mental image — Tiếng Việt:** Hạt nhân liên tục (Hàm hai biến biến thiên liên tục trên miền xác định của nó, đóng vai trò là nền tảng cho các toán tử tích phân và khai triển hạt nhân Mercer). Hình ảnh một bề mặt dạng mái vòm mượt mà không có điểm đứt gãy hay gián đoạn nào trên toàn bộ mặt phẳng tọa độ.

**Grammar & collocations:** `bounded continuous kernel` — hạt nhân liên tục bị chặn; `symmetric continuous kernel` — hạt nhân liên tục đối xứng; `continuous kernel function` — hàm hạt nhân liên tục.

**Register & nuance:** Standard terminology in integral equations, functional analysis, and kernel machine learning.

**Examples:** Provided the kernel is a bounded continuous kernel on a compact metric space, Mercer's theorem guarantees an expansion into orthogonal eigenfunctions. → Miễn là hạt nhân là một hạt nhân liên tục bị chặn trên không gian mêtric compact, định lý Mercer đảm bảo việc khai triển thành các hàm riêng trực giao.

**Liên kết tiếng Hàn:** `연속 커널` — hạt nhân liên tục.

---

## 19. positive definite operator /ˈpɑːzətɪv ˈdɛfɪnɪt ˈɑːpəreɪtər/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as subject or object in operator theory and linear algebra.

**Core meaning — English:** A linear operator on an inner product space that yields a strictly positive inner product for any non-zero vector in its domain.

**Core meaning & mental image — Tiếng Việt:** Toán tử xác định dương (Toán tử tuyến tính trên không gian tích vô hướng cho ra tích vô hướng dương nghiêm ngặt cho bất kỳ véctơ khác không nào trong miền của nó). Hình ảnh một toán tử luôn kéo giãn các véctơ theo hướng cùng chiều, tạo ra năng lượng hoặc góc nhọn tuyệt đối.

**Grammar & collocations:** `invertible positive definite operator` — toán tử xác định dương khả nghịch; `self-adjoint positive definite operator` — toán tử tự liên hợp xác định dương; `bounded positive definite operator` — toán tử xác định dương bị chặn.

**Register & nuance:** Advanced mathematical physics and functional analysis terminology ensuring unique solvability of operator equations.

**Examples:** Integral operators induced by strict Mercer kernels act as positive definite operators on the underlying Hilbert space. → Các toán tử tích phân được sinh bởi các hạt nhân Mercer nghiêm ngặt đóng vai trò là các toán tử xác định dương trên không gian Hilbert cơ sở.

**Liên kết tiếng Hàn:** `양의 정부호 작용소` (陽의定符號作用素) — toán tử xác định dương.

---

## 20. generalization error bounds /ˌdɛnərəlɪˈzeɪʃən ˈɛrər baʊndz/

**Loại từ & vị trí trong câu:** `noun phrase`. Acts as subject or direct object in statistical learning theory.

**Core meaning — English:** Mathematical guarantees limiting the difference between expected test error and empirical training error based on sample size and model complexity.

**Core meaning & mental image — Tiếng Việt:** Cận sai số tổng quát hóa (Các đảm bảo toán học giới hạn sự khác biệt giữa sai số kiểm tra kỳ vọng và sai số huấn luyện thực nghiệm dựa trên kích thước mẫu và độ phức tạp của mô hình). Hình ảnh hàng rào bảo vệ toán học ngăn không cho mô hình ảo tưởng về độ chính xác của mình trên dữ liệu mới.

**Grammar & collocations:** `derive generalization error bounds` — dẫn ra các cận sai số tổng quát hóa; `tight generalization error bounds` — cận sai số tổng quát hóa chặt chẽ; `PAC generalization error bounds` — cận sai số tổng quát hóa PAC.

**Register & nuance:** Central theoretical metric in statistical learning theory and VC dimension / Rademacher complexity analysis.

**Examples:** Advanced learning theory uses Rademacher complexity to establish tight generalization error bounds for kernel ridge regression models. → Lý thuyết học máy nâng cao sử dụng độ phức tạp Rademacher để thiết lập các cận sai số tổng quát hóa chặt chẽ cho các mô hình hồi quy ridge hạt nhân.

**Liên kết tiếng Hàn:** `일반화 오차 한계` — cận sai số tổng quát hóa.

---

## 21. regularization parameter /ˌrɛɡjʊlərɪˈzeɪʃən pəˈræmɪtər/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as subject or direct object in model training and optimization.

**Core meaning — English:** A tuning hyperparameter that controls the trade-off between fitting training data accurately and penalizing model complexity to prevent overfitting.

**Core meaning & mental image — Tiếng Việt:** Tham số chuẩn hóa / Siêu tham số điều chuẩn (Siêu tham số điều chỉnh sự đánh đổi giữa việc khớp dữ liệu huấn luyện chính xác và việc phạt độ phức tạp của mô hình để ngăn ngừa quá khớp). Hình ảnh núm vặn điều chỉnh độ căng của lò xo, cân bằng giữa việc uốn theo sát từng điểm dữ liệu và giữ cho đường cong thẳng thắn mượt mà.

**Grammar & collocations:** `tune the regularization parameter` — điều chỉnh tham số chuẩn hóa; `optimal regularization parameter` — tham số chuẩn hóa tối ưu; `regularization parameter lambda` — tham số chuẩn hóa lambda.

**Register & nuance:** Ubiquitous practical term in machine learning model selection and cross-validation workflows.

**Examples:** Cross-validation is typically employed to select the optimal regularization parameter that minimizes validation set prediction error. → Kiểm định chéo thường được sử dụng để chọn tham số chuẩn hóa tối ưu nhằm giảm thiểu sai số dự đoán trên tập kiểm định.

**Liên kết tiếng Hàn:** `정규화 매개변수` (正規化媒介變數) — tham số chuẩn hóa.

---

## 22. integral operator /ˈɪntɪɡrəl ˈɑːpəreɪtər/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as subject or object in functional analysis and integral equation theory.

**Core meaning — English:** An operator that maps functions to functions via an integration process involving a kernel function over a measure space.

**Core meaning & mental image — Tiếng Việt:** Toán tử tích phân (Toán tử ánh xạ hàm này sang hàm khác thông qua quá trình tích phân liên quan đến hàm hạt nhân trên một không gian đo lường). Hình ảnh cỗ máy biến đổi một tín hiệu sóng đầu vào thành sóng đầu ra thông qua bộ lọc tích phân trượt trên toàn bộ miền xác định.

**Grammar & collocations:** `compact integral operator` — toán tử tích phân compact; `linear integral operator` — toán tử tích phân tuyến tính; `spectrum of an integral operator` — phổ của toán tử tích phân.

**Register & nuance:** Advanced mathematical physics and functional analysis concept underlying integral equations and kernel methods.

**Examples:** The integral operator defined by a continuous symmetric kernel possesses a countable set of orthonormal eigenfunctions and non-negative eigenvalues. → Toán tử tích phân được định nghĩa bởi một hạt nhân đối xứng liên tục sở hữu một tập hợp đếm được các hàm riêng trực chuẩn và các giá trị riêng không âm.

**Liên kết tiếng Hàn:** `적분 작용소` (積分作用素) — toán tử tích phân.

---

## 23. feature space /ˈfiːtʃər speɪs/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as subject or object in machine learning and pattern recognition.

**Core meaning — English:** The vector space in which multidimensional representations of observations are placed, where classification or regression models operate.

**Core meaning & mental image — Tiếng Việt:** Không gian đặc trưng (Không gian véctơ nơi đặt các biểu diễn đa chiều của các quan sát, là nơi các mô hình phân loại hoặc hồi quy hoạt động). Hình ảnh sân khấu đa chiều, nơi mỗi điểm dữ liệu được định vị bằng các tọa độ đặc trưng trích xuất từ thế giới thực.

**Grammar` & collocations:** `high-dimensional feature space` — không gian đặc trưng chiều cao; `map into feature space` — ánh xạ vào không gian đặc trưng; `feature space geometry` — hình học không gian đặc trưng.

**Register & nuance:** Standard machine learning terminology for data representation spaces, especially pertinent in kernel methods.

**Examples:** Kernel methods allow linear classifiers to operate effectively in an implicit high-dimensional feature space without computing coordinate transformations explicitly. → Các phương pháp hạt nhân cho phép các bộ phân loại tuyến tính hoạt động hiệu quả trong không gian đặc trưng chiều cao ngầm định mà không cần tính toán các phép biến đổi tọa độ một cách tường minh.

**Liên kết tiếng Hàn:** `특징 공간` (特征空間) — không gian đặc trưng.

---

## 24. quadratic form /kwəˈdrætɪk fɔːrm/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as subject or object in linear algebra and optimization.

**Core meaning — English:** A polynomial of degree two over a set of variables, represented mathematically in matrix notation as $x^T A x$.

**Core meaning & mental image — Tiếng Việt:** Dạng toàn phương (Đa thức bậc hai trên một tập hợp các biến, được biểu diễn toán học dưới ký hiệu ma trận $x^T A x$). Hình ảnh hàm số tạo ra bề mặt uốn lượn hình chảo hoặc yên ngựa trong không gian đa chiều tùy thuộc vào dấu của các giá trị riêng ma trận.

**Grammar & collocations:** `positive definite quadratic form` — dạng toàn phương xác định dương; `minimize a quadratic form` — cực tiểu hóa dạng toàn phương; `quadratic form matrix` — ma trận dạng toàn phương.

**Register & nuance:** Fundamental concept in linear algebra, optimization, statistics, and quadratic programming.

**Examples:** The optimization objective in support vector machines can be expressed as minimizing a convex quadratic form subject to linear constraints. → Mục tiêu tối ưu hóa trong máy véc-tơ hỗ trợ có thể được biểu diễn dưới dạng cực tiểu hóa một dạng toàn phương lồi thỏa mãn các ràng buộc tuyến tính.

**Liên kết tiếng Hàn:** `이차 형식` (二次形式) — dạng toàn phương.

---

## 25. representer theorem expansion /ˌrɛprɪˈzɛntər ˈθɪrəm ɪkˈspænʃən/

**Loại từ & vị trí trong câu:** `noun phrase`. Functions as subject or object in machine learning theory proofs.

**Core meaning — English:** The resulting mathematical expansion provided by the representer theorem, expressing optimal solutions as linear combinations of training kernel evaluations.

**Core meaning & mental image — Tiếng Việt:** Khai triển theo định lý người biểu diễn (Biểu thức toán học kết quả do định lý người biểu diễn cung cấp, diễn tả các nghiệm tối ưu dưới dạng tổ hợp tuyến tính của các đánh giá hạt nhân huấn luyện). Hình ảnh chuỗi tổng hữu hạn gói gọn toàn bộ sự phức tạp của không gian vô hạn chiều thành các trọng số nhân tại từng điểm mẫu.

**Grammar & collocations:** `derive the representer theorem expansion` — dẫn ra khai triển định lý người biểu diễn; `substitute the representer theorem expansion` — thay thế khai triển định lý người biểu diễn; `coefficients of the representer theorem expansion` — các hệ số của khai triển định lý người biểu diễn.

**Register & nuance:** Specialized theoretical machine learning nomenclature referring to the explicit functional form guaranteed by regularization theory.

**Examples:** By substituting the representer theorem expansion into the regularized empirical risk function, the infinite-dimensional optimization collapses to a finite-dimensional dual problem. → Bằng cách thay thế khai triển định lý người biểu diễn vào hàm rủi ro thực nghiệm có chuẩn hóa, bài toán tối ưu hóa vô hạn chiều sụp đổ thành bài toán đối ngẫu hữu hạn chiều.

**Liên kết tiếng Hàn:** `표현 정리 전개` — khai triển định lý biểu diễn.

---

## Review in context (Part 1: RKHS, Mercer Kernels, and Spectral Theory)
Advanced machine learning theory frequently operates within a reproducing **kernel Hilbert space (RKHS)**, where the foundational **reproducing property** bridges functional analysis and kernel methods. A valid **Mercer kernel** must be symmetric and **positive semi-definite**, enabling **spectral decomposition** into an infinite series of **eigenfunctions** and **eigenvalues**. Through this lens, the **infinite-dimensional feature map** is implicitly handled by evaluating continuous bivariate functions known as a **continuous kernel**, while the corresponding **integral operator** acts as a **positive definite operator** over the underlying **functional analysis** framework.

**Bản dịch tiếng Việt:**
Lý thuyết học máy nâng cao thường hoạt động trong một không gian Hilbert hạt nhân tái sinh (**reproducing kernel Hilbert space (RKHS)**), nơi **tính chất tái sinh** nền tảng bắc cầu giữa giải tích hàm và các phương pháp kernel. Một **hạt nhân Mercer** hợp lệ phải đối xứng và **bán xác định dương**, cho phép **phân rã phổ** thành chuỗi vô hạn các **hàm riêng** và **giá trị riêng**. Qua lăng kính này, **ánh xạ đặc trưng vô hạn chiều** được xử lý ngầm định bằng cách đánh giá các hàm hai biến liên tục được gọi là **hạt nhân liên tục**, trong khi **toán tử tích phân** tương ứng đóng vai trò là một **toán tử xác định dương** trên nền tảng **giải tích hàm** cơ sở.

---

## Review in context (Part 2: Regularization, Optimization, and the Representer Theorem)
To prevent overfitting in **ill-posed problem** settings, models apply **Tikhonov regularization** or **smoothing regularization**, governed by a tuned **regularization parameter** to control **generalization error bounds**. Leveraging the **representer theorem**, the **representer theorem expansion** proves that optimal solutions can be expressed in a **dual formulation** as finite linear combinations of training point evaluations, yielding the symmetric **Gram matrix**. This elegant framework connects **empirical risk minimization**, **kernel trick** computations, and **quadratic form** optimization within a rich multi-dimensional **feature space**.

**Bản dịch tiếng Việt:**
Để ngăn chặn hiện tượng quá khớp trong các thiết lập **bài toán không chỉnh định**, các mô hình áp dụng **phương pháp chuẩn hóa Tikhonov** hoặc **chuẩn hóa làm mượt**, được chi phối bởi một **tham số chuẩn hóa** được tinh chỉnh nhằm kiểm soát **cận sai số tổng quát hóa**. Tận dụng **định lý người biểu diễn**, **khai triển định lý người biểu diễn** chứng minh rằng các nghiệm tối ưu có thể được biểu diễn trong một **biểu thức đối ngẫu** dưới dạng tổ hợp tuyến tính hữu hạn của các đánh giá điểm huấn luyện, tạo ra **ma trận Gram** đối xứng. Khung công tác thanh lịch này kết nối **cực tiểu hóa rủi ro thực nghiệm**, các phép tính **thủ thuật hạt nhân**, và tối ưu hóa **dạng toàn phương** trong một **không gian đặc trưng** đa chiều phong phú.
