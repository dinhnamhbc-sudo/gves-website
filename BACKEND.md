# Backend Node.js + Express + SQLite

Backend chạy độc lập với frontend React/Vite, không cần dịch vụ database ngoài. Dữ liệu được lưu trong file SQLite:

```text
backend/data/xanhviet.sqlite
```

Lần đầu chạy backend, database sẽ tự tạo bảng và seed dữ liệu từ:

```text
src/data/siteContent.json
```

## Chạy dự án

Cài thư viện:

```bash
npm install
```

Chạy frontend:

```bash
npm run dev
```

Chạy backend:

```bash
npm run backend
```

Chạy backend chế độ tự reload khi sửa code:

```bash
npm run backend:dev
```

Mặc định:

```text
Frontend: http://127.0.0.1:5173
Backend:  http://127.0.0.1:3001
```

## Nhóm dữ liệu

API hỗ trợ các nhóm:

```text
solutions
categories
documents
articles
projects
implementation
```

## API

Kiểm tra server:

```http
GET /api/health
```

Danh sách nhóm dữ liệu:

```http
GET /api/content-types
```

Lấy danh sách:

```http
GET /api/:type
```

Tìm kiếm:

```http
GET /api/:type?q=quan trắc
```

Lấy chi tiết:

```http
GET /api/:type/:id
```

Thêm mới:

```http
POST /api/:type
Content-Type: application/json

{
  "title": "Tên dữ liệu",
  "summary": "Mô tả ngắn",
  "body": "Nội dung chi tiết",
  "note": "Ghi chú",
  "scope": "Phạm vi thực hiện",
  "items": ["Ý 1", "Ý 2"],
  "sort_order": 1
}
```

Sửa:

```http
PUT /api/:type/:id
Content-Type: application/json

{
  "title": "Tên đã sửa",
  "summary": "Mô tả mới"
}
```

Xóa:

```http
DELETE /api/:type/:id
```

## Ví dụ nhanh bằng PowerShell

```powershell
Invoke-RestMethod http://127.0.0.1:3001/api/solutions
Invoke-RestMethod "http://127.0.0.1:3001/api/solutions?q=nước"
```
