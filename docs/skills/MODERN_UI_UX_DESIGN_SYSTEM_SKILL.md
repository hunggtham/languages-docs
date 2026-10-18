# Modern UI/UX Design System & Engineering Skill (Superdesign + Better-Design + UI-Layouts)

> **Tài liệu hướng dẫn chuyên sâu & Prompt Template chuẩn mực để thiết kế, refactor và kiểm thử giao diện (Web / Dashboard / Mobile / Dark-Light Mode)**
> *Tổng hợp tinh hoa thực chiến từ 3 thư viện hàng đầu: [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts), [superdesigndev/superdesign](https://github.com/superdesigndev/superdesign) và [marvkr/better-design](https://github.com/marvkr/better-design).*

---

## 1. Triết lý Thiết kế Cốt lõi (The 3 Pillars of Modern UI/UX)

1. **Subtractive Design & Anti-Slop (Superdesign):**
   - **Loại bỏ Border Noise:** Hạn chế các đường viền dày đặc, ngột ngạt bao quanh mọi khối nhỏ. Sử dụng khoảng trắng âm (whitespace) và chênh lệch tông nền (background elevation) để phân cấp khối thay vì kẻ khung viền cứng nhắc khắp nơi.
   - **Quy tắc Single Accent:** Chỉ dùng 1 màu nhấn chủ đạo cho hành động chính (`Primary Action`), phần còn lại dựa vào hệ thang màu trung tính (Neutrals). Tránh biến giao diện thành "hộp bút màu sặc sỡ".
   - **State Completeness:** Mọi component tương tác (Button, Pill, Input, Tab) đều phải có đủ 5 trạng thái trực quan: *Default*, *Hover*, *Active / Selected*, *Focus-Visible*, và *Disabled*.

2. **Design Tokens as Source of Truth & Contrast Strictness (Better-Design):**
   - **Không bao giờ hardcode màu tĩnh:** Tuyệt đối không dùng `color: #fff` hay `color: #000` trên các bề mặt có token biến đổi theo chế độ Dark/Light.
   - **Semantic Color Pairs (Cặp màu ngữ nghĩa):** Luôn đi theo cặp đối ứng: `var(--bg)` đi với `var(--fg)`, `var(--paper)` đi với `var(--ink)`, `var(--primary)` đi với `var(--primary-fg)`.
   - **Chuẩn tương phản nghiêm ngặt WCAG 2.1 AA:** Đảm bảo tỉ lệ tương phản tối thiểu:
     - Văn bản thường (Body text / Labels): **$\ge 4.5:1$**
     - Tiêu đề lớn (Headings $\ge 18pt$ hoặc $\ge 14pt$ bold): **$\ge 3.0:1$**
     - Thành phần giao diện & Trạng thái tương tác (Borders / Icons / Focus rings): **$\ge 3.0:1$**

3. **Responsive Primitives & Natural Flow (UI-Layouts):**
   - **Nói KHÔNG với Swipe Right / Horizontal Overflow cụt lủn:** Tránh dùng thanh cuộn ngang `overflow-x: auto; white-space: nowrap` ép người dùng phải vuốt ngang trên desktop/mobile để tìm nút. Thay vào đó, dùng `flex-wrap: wrap; gap: 8px` hoặc CSS Grid tự co giãn theo container query / breakpoint.
   - **Mobile-First Breakpoint Hierarchy:**
     - `< 640px (Mobile):` 1 cột duy nhất, kích thước chạm ngón tay tối thiểu $44 \times 44\text{px}$, các nút điều hướng phụ bọc trong popover/drawer hoặc co giãn full-width.
     - `640px - 1024px (Tablet):` 2 cột, bảng dữ liệu co giãn hoặc chuyển sang dạng danh thiếp (Card view).
     - `> 1024px (Desktop):` Multi-column grid, sidebar navigation, data table đầy đủ.
   - **Progressive Disclosure & Depth Collapse:** Mặc định ở trạng thái MỞ RỘNG (`Default: Expanded`) để người dùng nắm bắt thông tin toàn cảnh, nhưng cung cấp nút **Collapse All / Expand All theo từng tầng (Depth 1, 2, 3)** để dọn dẹp không gian tức thì.

---

## 2. Hệ Thống Design Tokens Chuẩn (CSS Custom Properties)

```css
:root {
  /* Spacing Scale (8px Grid System) */
  --space-1: 4px;   /* micro gap, tag padding */
  --space-2: 8px;   /* compact spacing, button gap */
  --space-3: 12px;  /* card inner spacing */
  --space-4: 16px;  /* standard padding */
  --space-5: 20px;  /* section gap */
  --space-6: 24px;  /* container padding */
  --space-8: 32px;  /* block separation */
  --space-12: 48px; /* hero spacing */

  /* Typography Scale */
  --font-xs: 11px;
  --font-sm: 12px;
  --font-base: 14px;
  --font-md: 16px;
  --font-lg: 18px;
  --font-xl: 22px;
  --font-2xl: 28px;
  --font-3xl: 36px;

  /* Radius Scale */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Semantic Theme: Light Mode (Warm Editorial) */
  --bg: #f6f3ed;
  --paper: #fffdf9;
  --paper-deep: #eeeae1;
  --ink: #242321;
  --ink-secondary: #57534e;
  --muted: #77736c;
  --line: #dedad1;
  --line-focus: #1f683e;

  /* Semantic Interactive Tokens (Light) */
  --interactive-active-bg: #1f683e;
  --interactive-active-fg: #ffffff;
  --interactive-active-border: #1f683e;
  --interactive-active-badge: #d6f2dc;

  /* Primary Accent & Status (Light) */
  --primary: #52684e;
  --primary-fg: #ffffff;
  --accent: #c96e40;
  --accent-fg: #ffffff;

  --status-needs-work: #b85a48;
  --status-developing: #c96e40;
  --status-proficient: #52684e;
  --status-mastery: #1f683e;
}

/* Dark Mode Overrides (Deep Editorial / Night Slate) */
html.dark {
  --bg: #181b18;
  --paper: #222622;
  --paper-deep: #2e332e;
  --ink: #f0ede6;
  --ink-secondary: #c5c2ba;
  --muted: #a3a199;
  --line: #383d37;
  --line-focus: #3e8858;

  /* Semantic Interactive Tokens (Dark) */
  --interactive-active-bg: #235436;
  --interactive-active-fg: #ffffff;
  --interactive-active-border: #3e8858;
  --interactive-active-badge: #c8ebd0;

  /* Primary Accent & Status (Dark) */
  --primary: #7ea377;
  --primary-fg: #141714;
  --accent: #e28a5f;
  --accent-fg: #141714;

  --status-needs-work: #d66d58;
  --status-developing: #e28a5f;
  --status-proficient: #7ea377;
  --status-mastery: #8fd29f;
}
```

---

## 3. Kiến Trúc Dark/Light Mode & Ma Trận Tương Phản (WCAG 2.1 AA)

### 3.1 Bảng Phân Tầng Độ Cao (Elevation Hierarchy)
Trong Dark mode, độ nổi của các khối không sử dụng bóng đổ mờ đen (`drop-shadow: rgba(0,0,0,0.5)`) vì nền đã tối đen. Thay vào đó, ta tăng dần độ sáng của màu nền (surface luminance):

| Cấp độ | Tên gọi | Màu Light Mode | Màu Dark Mode | Mục đích sử dụng |
| :--- | :--- | :--- | :--- | :--- |
| **L0** | Canvas Base (`--bg`) | `#f6f3ed` | `#181b18` | Nền trang toàn màn hình |
| **L1** | Card Surface (`--paper`) | `#fffdf9` | `#222622` | Thẻ dữ liệu, bảng, danh sách |
| **L2** | Raised Surface (`--paper-deep`) | `#eeeae1` | `#2e332e` | Switcher bar, header bảng, thanh tìm kiếm |
| **L3** | Floating Overlay (`modal-sheet`) | `#ffffff` | `#262c26` | Popup modal, dialog, dropdown menu |

### 3.2 Ma Trận Độ Tương Phản Cho Nút & Điều Khiển Tương Tác
Khi thiết kế nút bấm ở trạng thái Active (được chọn), cần tuân thủ ma trận tương phản sau:

| Thành phần | Light Mode Fills | Dark Mode Fills | Contrast Ratio (WCAG) | Ghi chú thiết kế |
| :--- | :--- | :--- | :--- | :--- |
| **Active Pill / Switcher** | Nền `#1f683e`<br>Chữ `#ffffff` | Nền `#235436`<br>Chữ `#ffffff` | Light: **7.8:1** (AAA)<br>Dark: **6.2:1** (AAA) | Viền `#3e8858` ở Dark mode giúp tách biệt khối khỏi nền `#181b18` |
| **Active Pill Badge (Số lượng)** | Nền trong suốt<br>Chữ `#d6f2dc` | Nền trong suốt<br>Chữ `#c8ebd0` | Light: **6.5:1** (AA)<br>Dark: **6.8:1** (AA) | Không dùng màu xám tối khiến số đếm bị chìm |
| **Inactive / Default Pill** | Nền `#eeeae1`<br>Chữ `#242321` | Nền `#232724`<br>Chữ `#b2bcb4` | Light: **11.2:1** (AAA)<br>Dark: **5.1:1** (AA) | Hover ở Dark mode làm sáng nền lên `#2a312c` |
| **Main Heading (`h1`)** | Chữ `#242321` | Chữ `#eeeae1` | Light: **14.1:1** (AAA)<br>Dark: **13.5:1** (AAA) | Luôn gán explicit `color: var(--ink)` để tránh trình duyệt mặc định về `#000` |
| **Focus Ring (`:focus-visible`)** | Viền `#1f683e`<br>Offset `2px` | Viền `#3e8858`<br>Offset `2px` | Light: **3.8:1** (AA)<br>Dark: **4.6:1** (AA) | Xóa bỏ viền xanh dương mặc định của Webkit (`#005fcc`) |

---

## 4. Danh Sách 6 Lỗi Trực Quan Thực Chiến & Cách Khắc Phục (Anti-Pattern Prevention)

### ❌ Lỗi 1: Dùng Inverted Text Token Làm Nền Nút Bấm (The `--ink` Background Trap)
- **Triệu chứng:** Ở Light mode nút bấm trông rất đẹp (nền đen chữ trắng). Nhưng khi bấm chuyển Dark mode, nút bấm biến thành **chữ trắng trên nền be sáng / kem**, hoàn toàn không đọc được chữ!
- **Nguyên nhân gốc rễ:** Đặt `background: var(--ink); color: #fff;`. Ở Light mode `--ink` là `#242321` (đen), nhưng sang Dark mode `--ink` đảo thành `#eeeae1` (trắng kem). Dẫn đến `color: #fff` nằm đè lên nền gần trắng!
- **Khắc phục chuẩn:** Dùng token tương tác chuyên biệt (`--interactive-active-bg`) hoặc đảo màu chữ tương ứng:
  ```css
  /* SAI */
  .pill.active { background: var(--ink); color: #fff; }

  /* ĐÚNG */
  .pill.active {
    background: #1f683e;
    color: #ffffff;
    border-color: #1f683e;
  }
  html.dark .pill.active {
    background: #235436 !important;
    border-color: #3e8858 !important;
    color: #ffffff !important;
  }
  ```

### ❌ Lỗi 2: Quên Khai Báo Màu Sắc Cho Tiêu Đề (The Unspecified Heading Color Bug)
- **Triệu chứng:** Trong Dark mode, từ khóa nhấn mạnh (`<em>`) có màu cam đọc được, nhưng tiêu đề chính (`h1`) lại tàng hình, biến mất trên nền tối!
- **Nguyên nhân:** CSS chỉ đặt font-family, font-size mà không có thuộc tính `color: var(--ink);`. Một số trình duyệt áp đặt User-Agent stylesheet `color: #000000;`, khiến chữ đen chìm hoàn toàn vào nền canvas tối `#191c19`.
- **Khắc phục:** Luôn gán màu rõ ràng cho mọi thẻ heading:
  ```css
  .hero h1 {
    color: var(--ink);
  }
  html.dark .hero h1 {
    color: #eeeae1 !important;
  }
  ```

### ❌ Lỗi 3: Dùng Token Pastel Sáng Cho Nút Bấm Ở Dark Mode (The Pastel Token Collision)
- **Triệu chứng:** Nút active ("Biểu đồ") có màu xanh lá cây nhạt (sage pastel `#a7c59c`) nhưng chữ bên trong là màu trắng `#ffffff`. Độ tương phản đo được chỉ đạt **1.8:1**, vi phạm nghiêm trọng chuẩn WCAG AA (cần $\ge 4.5:1$).
- **Nguyên nhân:** Token `--green` ở Dark mode được tinh chỉnh sáng hơn để dùng làm viền hoặc chữ trên nền tối. Khi lấy nguyên token này làm nền nút bấm và để chữ trắng, 2 màu sáng va chạm vào nhau.
- **Khắc phục:** Ở Dark mode, nền nút bấm active phải dùng sắc độ ngọc lục bảo sâu (`#235436`) kết hợp viền `#3e8858`, giữ trọn vẹn chữ trắng tương phản $6.2:1$.

### ❌ Lỗi 4: Thanh Cuộn Ngang Cắt Chữ (Horizontal Swipe-Right Anti-Pattern)
- **Triệu chứng:** Hàng nút chọn chuyên đề hoặc danh mục bị ép trên một dòng duy nhất với `overflow-x: auto; white-space: nowrap;`. Người dùng phải dùng chuột kéo ngang hoặc vuốt màn hình, nửa nút bên phải bị cắt mất chữ.
- **Khắc phục:** Chuyển sang bố cục Flex-wrap tự nhiên:
  ```css
  .category-nav-list {
    display: flex;
    flex-wrap: wrap; /* Tự động xuống dòng êm ái khi hết không gian */
    gap: 8px;
    overflow-x: visible;
  }
  ```

### ❌ Lỗi 5: Modal / Popup Bị Lệch Tọa Độ Hoặc Trôi Khỏi Màn Hình Khi Cuộn
- **Triệu chứng:** Mở Learning OS modal trên màn hình nhỏ thì phần tiêu đề bị đẩy lên tọa độ âm ngoài đỉnh màn hình, hoặc nền modal trong suốt khiến chữ của trang web bên dưới xuyên thủng lên trên.
- **Nguyên nhân:** Dùng `display: grid; place-items: center;` khiến modal dài hơn viewport bị cắt cụt hai đầu; quên gán `background: var(--paper)` đục 100%.
- **Khắc phục:**
  ```css
  .modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(8px);
  }
  .modal-sheet {
    position: relative;
    width: min(760px, 100%);
    max-height: calc(100vh - 48px);
    overflow-y: auto;
    background: var(--paper); /* Nền đục tuyệt đối */
    border: 1px solid var(--line);
    border-radius: 14px;
    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.25);
  }
  ```

### ❌ Lỗi 6: Vòng Tròn Tiêu Điểm Xanh Dương Mặc Định (Unstyled Browser Focus Ring)
- **Triệu chứng:** Khi bấm chuột hoặc nhấn Tab vào nút bấm trong Dark mode, một viền màu xanh dương sáng lóa (`#005fcc`) xuất hiện xung quanh nút, phá vỡ toàn bộ phong cách thẩm mỹ tối giản.
- **Khắc phục:** Thiết lập `:focus-visible` tùy chỉnh ăn khớp với màu thương hiệu:
  ```css
  :focus-visible {
    outline: 2px solid var(--green) !important;
    outline-offset: 2px;
  }
  html.dark :focus-visible {
    outline-color: #3e8858 !important;
  }
  ```

---

## 5. Quy Chuẩn Responsive Cho Thiết Bị Di Động & Tablet

```css
/* Tablet Breakpoint (<= 1024px) */
@media (max-width: 1024px) {
  .ep-hero {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .ep-actions {
    max-width: 100%;
    justify-content: flex-start;
  }
  .ep-competency-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

/* Mobile Breakpoint (<= 640px) */
@media (max-width: 640px) {
  .ep-page {
    padding: 24px 0 64px;
  }
  .ep-hero h1 {
    font-size: 32px;
  }
  .ep-domain-pills,
  .ep-lang-pills,
  .ep-category-quicknav {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .ep-domain-pill,
  .ep-lang-pill {
    padding: 6px 10px;
    font-size: 12px;
  }
  .ep-competency-grid {
    grid-template-columns: 1fr; /* 1 cột duy nhất */
  }
  .ep-table-wrap {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .ep-table-wrap th,
  .ep-table-wrap td {
    padding: 10px 12px;
    font-size: 12px;
  }
}
```

---

## 6. Prompt Mẫu Chuẩn Cho AI (AI Prompt Template for Next Projects)

Khi bắt đầu một dự án mới hoặc yêu cầu trợ lý AI thiết kế/tối ưu hóa giao diện, hãy dán prompt sau:

```markdown
Bạn là chuyên gia Senior Design Engineer kết hợp triết lý từ Superdesign, Better-Design và UI-Layouts.
Hãy thiết kế / tái cấu trúc giao diện cho module [TÊN MODULE] tuân thủ nghiêm ngặt các nguyên tắc kỹ thuật sau:

1. Hệ Thống Token & Độ Tương Phản Màu Sắc (WCAG 2.1 AA):
   - Tuyệt đối không hardcode màu tĩnh (#fff hoặc #000) trên các bề mặt có nền biến đổi theo theme.
   - Cấm dùng inverted text token (như `background: var(--ink)` kèm `color: #fff`) vì khi sang Dark mode sẽ gây lỗi chữ trắng trên nền trắng kem!
   - Sử dụng các cặp màu ngữ nghĩa độc lập cho nút active: Light mode dùng sắc ngọc sẫm (`#1f683e`), Dark mode dùng nền sâu (`#235436`) kèm viền (`#3e8858`) và chữ trắng (`#ffffff`), đảm bảo tương phản đạt $\ge 6:1$.
   - Mọi tiêu đề (`h1`, `h2`) phải có màu chỉ định rõ ràng (`color: var(--ink)`) để không bị trình duyệt đẩy về đen tuyền trong Dark mode.

2. Trải nghiệm Di Động & Responsive Tự Nhiên (Mobile-First):
   - Nghiêm cấm dùng cuộn ngang `overflow-x: auto; white-space: nowrap;` làm cụt chữ ở các nhóm nút chọn chuyên đề. Phải dùng `flex-wrap: wrap; gap: 8px`.
   - Grid cards: 1 cột trên Mobile (< 640px), 2 cột trên Tablet (640-1024px), 3-4 cột trên Desktop (> 1024px).
   - Bảng dữ liệu (Table View) phải hỗ trợ gom nhóm (Grouping) theo danh mục, có thanh đo điểm số trực quan.

3. Điều Khiển Đóng / Mở (Progressive Disclosure):
   - Mặc định ở trạng thái MỞ RỘNG (Default: Expanded) để người dùng xem được toàn cảnh.
   - Luôn cung cấp bộ nút thao tác nhanh: "▾ Mở rộng tất cả" và "▴ Thu gọn tất cả" theo từng phân cấp (Depth 1, Depth 2, Depth 3) cho cả Grid View, Table View và Chart View.

4. Modal & Overlay Bền Vững:
   - Overlay có `backdrop-filter: blur(8px)`, z-index $\ge 1000$.
   - Khung modal luôn nằm căn giữa tự nhiên, có `max-height: calc(100vh - 48px)`, hỗ trợ cuộn nội bộ `overflow-y: auto`, nền đục tuyệt đối 100% không để lộ chữ nền web.

Hãy rà soát kỹ lưỡng toàn bộ mã nguồn CSS/TSX và đảm bảo kiểm thử chạy qua 100% không có bất kỳ lỗi type hay lỗi build nào.
```
