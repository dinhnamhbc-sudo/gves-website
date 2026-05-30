# Deploy Frontend

Website frontend dùng React + Vite, dữ liệu tạm nằm trong `src/data/siteContent.json`. Backend Express + SQLite chạy riêng, không deploy chung lên Vercel/Netlify dạng static.

## Kiểm tra trước khi deploy

```bash
npm install
npm run build
```

Thư mục build:

```text
dist
```

## Deploy lên Vercel

1. Đưa project lên GitHub/GitLab.
2. Vào Vercel, chọn `Add New Project`.
3. Chọn repository của website.
4. Vercel sẽ đọc `vercel.json`.
5. Kiểm tra cấu hình:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

6. Bấm `Deploy`.

## Deploy lên Netlify

1. Đưa project lên GitHub/GitLab.
2. Vào Netlify, chọn `Add new site` > `Import an existing project`.
3. Chọn repository.
4. Netlify sẽ đọc `netlify.toml`.
5. Kiểm tra cấu hình:

```text
Build command: npm run build
Publish directory: dist
```

6. Bấm `Deploy`.

## Backend

Backend hiện dùng Node.js + Express + SQLite trong thư mục `backend`. Vì SQLite là file local, không nên deploy backend này lên Vercel/Netlify static.

Chạy backend local:

```bash
npm install
npm --prefix backend install
npm run backend
```

Backend local:

```text
http://127.0.0.1:3001
```

Khi cần đưa backend lên production, nên dùng VPS, Render, Railway, Fly.io hoặc đổi database sang PostgreSQL/MySQL hosted.
