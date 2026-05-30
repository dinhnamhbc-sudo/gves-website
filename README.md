# Green Viet Environmental Website

## 1. Giới Thiệu

Đây là website giới thiệu công ty môi trường, tập trung vào các nhóm nội dung: giải pháp, danh mục thiết bị, hồ sơ môi trường, bài viết, công trình, quy trình triển khai và liên hệ.

Website được xây dựng theo hướng doanh nghiệp kỹ thuật: giao diện gọn, dễ đọc, responsive và dễ thay đổi nội dung.

## 2. Công Nghệ Sử Dụng

- Frontend: React + Vite
- Styling: CSS thuần trong `src/styles.css`
- Dữ liệu nội dung: JSON trong `src/data/siteContent.json`
- Backend nội bộ: Node.js + Express
- Database backend nội bộ: SQLite qua `node:sqlite`
- Deploy frontend: Vercel hoặc Netlify

Lưu ý: frontend có thể deploy dạng static site. Backend SQLite nên chạy nội bộ hoặc deploy riêng trên VPS/Render/Railway nếu cần dùng thật.

## 3. Cấu Trúc Thư Mục

```text
.
├── backend/
│   ├── database.js
│   ├── server.js
│   └── package.json
├── public/
│   ├── assets/
│   │   └── environment-equipment-hero.png
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── SectionTitle.jsx
│   ├── data/
│   │   ├── siteContent.json
│   │   └── siteData.js
│   ├── pages/
│   │   ├── Articles.jsx
│   │   ├── Catalog.jsx
│   │   ├── Contact.jsx
│   │   ├── Documents.jsx
│   │   ├── Home.jsx
│   │   ├── Implementation.jsx
│   │   ├── Projects.jsx
│   │   └── Solutions.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── netlify.toml
├── package.json
├── vercel.json
└── vite.config.js
```

## 4. Cách Cài Đặt

Yêu cầu Node.js từ phiên bản `22.5.0` trở lên.

Cài dependencies frontend:

```bash
npm install
```

Cài dependencies backend nếu cần chạy API nội bộ:

```bash
npm --prefix backend install
```

## 5. Cách Chạy Local

Chạy frontend:

```bash
npm run dev
```

Mở URL Vite hiển thị trong terminal, thường là:

```text
http://127.0.0.1:5173/
```

Chạy backend nội bộ:

```bash
npm run backend
```

API backend mặc định chạy tại:

```text
http://127.0.0.1:3001/api
```

Một số endpoint:

```text
GET    /api/health
GET    /api/content-types
GET    /api/articles
GET    /api/articles?q=quan
POST   /api/articles
PUT    /api/articles/:id
DELETE /api/articles/:id
```

## 6. Cách Build

Build frontend production:

```bash
npm run build
```

Sau khi build, thư mục production được tạo tại:

```text
dist
```

Chạy thử bản production local:

```bash
npm run preview
```

## 7. Cách Deploy

### Deploy Lên Vercel

1. Đưa code lên GitHub.
2. Đăng nhập https://vercel.com.
3. Chọn `Add New Project`.
4. Import repository GitHub.
5. Cấu hình:
   - Root Directory: để trống hoặc chọn thư mục gốc của repository
   - Framework Preset: `Vite`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Bấm `Deploy`.

File `vercel.json` đã cấu hình sẵn:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

### Deploy Lên Netlify

1. Đưa code lên GitHub.
2. Đăng nhập https://app.netlify.com.
3. Chọn `Add new site` -> `Import an existing project`.
4. Chọn repository GitHub.
5. Cấu hình:
   - Base directory: để trống hoặc chọn thư mục gốc của repository
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Bấm `Deploy site`.

File `netlify.toml` đã cấu hình sẵn:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Biến Môi Trường

Hiện frontend chưa bắt buộc dùng biến môi trường.

Nếu sau này có API thật, thêm biến theo chuẩn Vite với tiền tố `VITE_`, ví dụ:

```text
VITE_API_BASE_URL=https://api.tenmiencuaban.com
```

Thêm biến tại:

- Vercel: `Project` -> `Settings` -> `Environment Variables`
- Netlify: `Site configuration` -> `Environment variables`

Sau khi thêm biến môi trường, cần deploy lại.

## 8. Cách Sửa Nội Dung Website

Nội dung chính nằm trong:

```text
src/data/siteContent.json
```

Các nhóm dữ liệu chính:

- `company`: tên công ty, tên viết tắt, lĩnh vực, điện thoại, email, địa chỉ, mã số thuế.
- `solutions`: các nhóm giải pháp.
- `productCategories`: danh mục thiết bị hoặc hạng mục cung cấp.
- `documentServices`: các loại hồ sơ môi trường.
- `articles`: danh sách bài viết tư vấn.
- `projects`: công trình đã thực hiện.
- `implementationSteps`: quy trình triển khai.

Sau khi sửa file JSON:

```bash
npm run dev
```

hoặc build lại:

```bash
npm run build
```

Lưu ý khi sửa JSON:

- Giữ đúng dấu ngoặc `{}`, `[]`.
- Mỗi dòng dữ liệu dùng dấu phẩy đúng vị trí.
- Không để dấu phẩy cuối phần tử cuối cùng.
- Nếu thiếu thông tin thật, dùng placeholder rõ ràng như `[Cập nhật số điện thoại]`.

## 9. Cách Thay Logo, Hình Ảnh, Màu Sắc

### Thay Logo / Favicon

Favicon hiện tại:

```text
public/favicon.svg
```

Có thể thay bằng file SVG khác nhưng nên giữ cùng tên `favicon.svg` để không cần sửa code.

Logo chữ trên header đang nằm trong component:

```text
src/components/Header.jsx
```

Phần ký hiệu logo hiện là:

```jsx
<span className="brand-mark">XV</span>
```

Có thể đổi chữ hoặc thay bằng ảnh logo thật.

### Thay Hình Ảnh Banner

Ảnh banner hiện tại:

```text
public/assets/environment-equipment-hero.png
```

Cách thay:

1. Chuẩn bị ảnh mới.
2. Đặt vào `public/assets/`.
3. Giữ tên file cũ hoặc sửa đường dẫn trong:

```text
src/pages/Home.jsx
```

Dòng cần sửa:

```jsx
<img src="/assets/environment-equipment-hero.png" />
```

### Thay Màu Sắc

Màu chủ đạo nằm trong:

```text
src/styles.css
```

Các biến màu ở đầu file:

```css
:root {
  --green: #1f8a5c;
  --green-dark: #126241;
  --teal: #0f766e;
  --amber: #e6ad3f;
}
```

Đổi các mã màu này để thay màu toàn website.

## 10. Lỗi Thường Gặp Và Cách Xử Lý

### Lỗi `npm` không nhận lệnh

Nguyên nhân: Node.js chưa cài hoặc chưa có trong PATH.

Cách xử lý:

1. Cài Node.js bản mới.
2. Đóng terminal và mở lại.
3. Kiểm tra:

```bash
node -v
npm -v
```

### Lỗi build do sai JSON

Dấu hiệu: `npm run build` báo lỗi parse JSON.

Cách xử lý:

1. Kiểm tra file `src/data/siteContent.json`.
2. Kiểm tra dấu phẩy, dấu ngoặc kép và dấu ngoặc vuông.
3. Không dùng dấu phẩy sau phần tử cuối cùng.

### Website deploy bị trắng trang

Nguyên nhân thường gặp:

- Build chưa thành công.
- Output folder cấu hình sai.
- File JS/CSS không tải được.

Cách xử lý:

1. Chạy lại local:

```bash
npm run build
npm run preview
```

2. Trên Vercel/Netlify kiểm tra:
   - Build command: `npm run build`
   - Output folder: `dist`

### Ảnh không hiển thị sau deploy

Nguyên nhân thường gặp:

- Đường dẫn ảnh sai.
- File ảnh không nằm trong `public/assets/`.
- Tên file khác chữ hoa/thường.

Cách xử lý:

1. Đặt ảnh trong `public/assets/`.
2. Dùng đường dẫn dạng:

```text
/assets/ten-file-anh.png
```

3. Kiểm tra đúng tên file.

### Route không mở đúng trang

Website dùng hash route, ví dụ:

```text
/#solutions
/#contact
```

Nếu route không đúng, kiểm tra:

- `src/App.jsx`
- ID page trong menu `src/components/Header.jsx`
- Cấu hình fallback trong `vercel.json` hoặc `netlify.toml`

### Form liên hệ chưa gửi email thật

Form hiện mới hiển thị thông báo sau khi submit. Để gửi email thật cần kết nối thêm:

- Backend API
- Email service
- CRM
- Zalo OA hoặc webhook

Khi có dịch vụ thật, cập nhật logic trong:

```text
src/components/ContactForm.jsx
```
