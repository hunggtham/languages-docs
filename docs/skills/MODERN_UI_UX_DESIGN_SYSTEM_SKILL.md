# Modern UI/UX Design System & Engineering Skill (Superdesign + Better-Design + UI-Layouts)

> **Tài liệu hướng dẫn & Prompt Template chuẩn mực để thiết kế và tối ưu giao diện (Web / Dashboard / Mobile / Dark-Light Mode)**
> *Tổng hợp tinh hoa từ 3 thư viện hàng đầu: [ui-layouts/uilayouts](https://github.com/ui-layouts/uilayouts), [superdesigndev/superdesign](https://github.com/superdesigndev/superdesign) và [marvkr/better-design](https://github.com/marvkr/better-design).*

---

## 1. Triết lý Thiết kế Cốt lõi (The 3 Pillars of Modern UI/UX)

1. **Subtractive Design & Anti-Slop (Superdesign):**
   - Loại bỏ "border noise" (viền dày đặc, ngột ngạt) và các dải gradient vô nghĩa.
   - **Quy tắc Single Accent:** Chỉ dùng 1 màu nhấn chủ đạo cho hành động chính (`Primary Action`), phần còn lại dựa vào hệ thang màu trung tính (Neutrals).
   - **State Completeness:** Mọi component đều phải có đủ 4 trạng thái: Default, Hover/Focus, Active, Disabled, và Empty State / Loading State.

2. **Design Tokens as Source of Truth & Contrast Strictness (Better-Design):**
   - Không hardcode màu sắc kiểu `color: #fff` hay `color: #000` trên các phần tử có `background` động.
   - **Semantic Color Pairs:** Luôn đi theo cặp đối ứng: `var(--bg)` đi với `var(--fg)`, `var(--paper)` đi với `var(--ink)`, `var(--primary)` đi với `var(--primary-fg)`.
   - **Chuẩn tương phản WCAG 2.1 AA (tối thiểu 4.5:1):** Đảm bảo ở cả Light Mode và Dark Mode chữ không bao giờ bị chìm vào nền (ví dụ: chữ trắng trên nền be sáng, hoặc chữ xám tối trên nền đen).

3. **Responsive Primitives & Natural Flow (UI-Layouts):**
   - **Nói KHÔNG với Swipe Right / Horizontal Overflow cụt lủn:** Tránh dùng thanh cuộn ngang `overflow-x: auto; white-space: nowrap` ép người dùng phải vuốt ngang trên desktop/mobile để tìm nút. Thay vào đó, dùng `flex-wrap: wrap` hoặc Grid tự co giãn theo breakpoint.
   - **Mobile-First Breakpoint Hierarchy:**
     - `< 640px (Mobile):` 1 cột duy nhất, kích thước chạm ngón tay tối thiểu 44x44px, nút bấm trải rộng full-width hoặc bottom bar.
     - `640px - 1024px (Tablet):` 2 cột, bảng dữ liệu co giãn hoặc chuyển sang dạng thẻ.
     - `> 1024px (Desktop):` Multi-column grid, sidebar navigation, data table đầy đủ.
   - **Progressive Disclosure:** Mặc định mở rộng (`Default: Expanded`) để người dùng thấy thông tin tổng thể, nhưng có nút **Collapse All / Expand All theo từng tầng (Depth 1, 2, 3)** để dọn dẹp không gian khi cần.

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
  --muted: #77736c;
  --line: #dedad1;
  --primary: #52684e;
  --primary-fg: #ffffff;
  --accent: #c96e40;
  --accent-fg: #ffffff;

  /* Status Colors */
  --status-needs-work: #b85a48;
  --status-developing: #c96e40;
  --status-proficient: #52684e;
  --status-mastery: #1f683e;
}

/* Dark Mode Overrides (Deep Emerald / Slate) */
html.dark {
  --bg: #181b18;
  --paper: #222622;
  --paper-deep: #2e332e;
  --ink: #f0ede6;
  --muted: #a3a199;
  --line: #383d37;
  --primary: #7ea377;
  --primary-fg: #141714;
  --accent: #e28a5f;
  --accent-fg: #141714;
}
```

---

## 3. Các Nguyên Tắc Xử Lý Lỗi Phổ Biến (Bug Prevention Checklist)

### ❌ Lỗi 1: Chữ bị chìm khi đổi Dark / Light Mode (Color Inversion Trap)
- **Nguyên nhân:** Đặt `background: var(--ink)` nhưng lại hardcode `color: #fff`. Ở Dark Mode, `--ink` đổi thành màu trắng/kem sáng `#f0ede6`, dẫn tới chữ trắng trên nền trắng!
- **Khắc phục:** Luôn dùng token đối ứng hoặc khai báo rõ ràng trong dark mode:
  ```css
  .primary-button {
    background: var(--ink);
    color: var(--paper); /* Tự động đổi màu chữ theo theme */
  }
  ```

### ❌ Lỗi 2: Thanh cuộn ngang cắt chữ (Swipe Right Anti-pattern)
- **Nguyên nhân:** Dùng `display: flex; overflow-x: auto; white-space: nowrap;` cho danh sách thẻ hay danh mục. Người dùng phải kéo chuột hoặc vuốt tay sang phải, chữ ở góc bị cắt nham nhở.
- **Khắc phục:**
  ```css
  .category-nav-list {
    display: flex;
    flex-wrap: wrap; /* Cho phép rớt dòng tự nhiên */
    gap: 8px;
    overflow-x: visible; /* Không cuộn ngang */
  }
  ```

### ❌ Lỗi 3: Modal / Popup bị đẩy lệch khỏi màn hình hoặc chữ nền đè lên nhau
- **Nguyên nhân:** Dùng `display: grid; place-items: center;` cho modal khi nội dung dài hoặc màn hình nhỏ, khiến phần đầu modal bị đẩy lên tọa độ âm ngoài viewport; thiếu `background` đục hoặc `z-index` thấp.
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
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(6px);
  }
  .modal-sheet {
    position: relative;
    width: min(720px, 100%);
    max-height: calc(100vh - 48px);
    overflow-y: auto;
    background: var(--paper); /* Nền đục 100% */
    border: 1px solid var(--line);
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
  ```

### ❌ Lỗi 4: Thang đo điểm số / Badges dính chùm không cách quãng
- **Nguyên nhân:** Inline `<span>` không có `display: inline-flex`, không có `gap`, viền cứng dính sát vào nhau.
- **Khắc phục:**
  ```css
  .scale-legend-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin: 12px 0;
  }
  .scale-capsule {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: 9999px;
    font-size: 11px;
    font-weight: 600;
    border: 1px solid var(--line);
  }
  ```

---

## 4. Prompt Mẫu Chuẩn Cho AI (AI Prompt Template for Next Projects)

Khi bắt đầu một dự án mới hoặc yêu cầu AI thiết kế lại giao diện, hãy dán prompt sau:

```markdown
Bạn là chuyên gia Design Engineer hàng đầu kết hợp triết lý từ Superdesign, Better-Design và UI-Layouts.
Hãy thiết kế / tối ưu hóa giao diện cho module [TÊN MODULE] tuân thủ nghiêm ngặt các nguyên tắc sau:

1. Kiến trúc Token & Màu sắc:
   - Áp dụng hệ thống Design Tokens ngữ nghĩa (Semantic Pairs: ink/paper, primary/primary-fg).
   - Kiểm tra độ tương phản WCAG 2.1 AA (tối thiểu 4.5:1) ở CẢ HAI CHẾ ĐỘ Light Mode và Dark Mode.
   - Không hardcode màu trắng (#fff) hay đen (#000) tĩnh trên các nút bấm có nền biến đổi.

2. Trải nghiệm Di động & Responsive (Mobile-First):
   - Tuyệt đối không dùng thanh cuộn ngang `overflow-x: auto` làm cụt chữ cho các nhóm nút chọn hay chuyên đề. Sử dụng `flex-wrap: wrap; gap: 8px`.
   - Grid cards co giãn: 1 cột trên Mobile (< 640px), 2 cột trên Tablet (640-1024px), 3-4 cột trên Desktop (> 1024px).
   - Các bảng dữ liệu (Table View) phải hỗ trợ Grouping theo danh mục với khả năng đóng/mở mượt mà.

3. Điều khiển Đóng / Mở (Progressive Disclosure):
   - Mặc định ở trạng thái MỞ RỘNG (Default: Expanded).
   - Cung cấp nút thao tác nhanh: "▾ Mở rộng tất cả" và "▴ Thu gọn tất cả" theo từng tầng (Depth 1, Depth 2, Depth 3) cho cả Grid View, Table View và Chart View.

4. Modal & Overlay:
   - Đảm bảo Modal luôn nằm ở vị trí trung tâm, z-index cao (1000+), backdrop làm mờ (backdrop-filter: blur), nền đục 100% không để lộ chữ phía sau, và hỗ trợ cuộn độc lập nếu nội dung dài.

Hãy rà soát kỹ lưỡng toàn bộ mã nguồn CSS/TSX và đảm bảo kiểm thử chạy qua 100% không có lỗi type hay build.
```
