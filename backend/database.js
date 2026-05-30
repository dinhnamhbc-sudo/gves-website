import { existsSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { DatabaseSync } from "node:sqlite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, "data");
const dbPath = path.join(dataDir, "xanhviet.sqlite");
const contentPath = path.join(__dirname, "..", "src", "data", "siteContent.json");

export const allowedTypes = new Map([
  ["solutions", "Giải pháp"],
  ["categories", "Danh mục"],
  ["documents", "Hồ sơ"],
  ["articles", "Bài viết"],
  ["projects", "Công trình"],
  ["implementation", "Triển khai"],
]);

if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true });
}

export const db = new DatabaseSync(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS content_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    title TEXT NOT NULL,
    summary TEXT DEFAULT '',
    body TEXT DEFAULT '',
    note TEXT DEFAULT '',
    scope TEXT DEFAULT '',
    items TEXT DEFAULT '[]',
    sort_order INTEGER DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_content_items_type ON content_items(type);
  CREATE INDEX IF NOT EXISTS idx_content_items_title ON content_items(title);
`);

function normalizeRow(row) {
  if (!row) return null;

  return {
    ...row,
    items: JSON.parse(row.items || "[]"),
  };
}

export function normalizeRows(rows) {
  return rows.map(normalizeRow);
}

export function validateType(type) {
  if (!allowedTypes.has(type)) {
    const accepted = [...allowedTypes.keys()].join(", ");
    const error = new Error(`Loại dữ liệu không hợp lệ. Dùng một trong các loại: ${accepted}.`);
    error.status = 400;
    throw error;
  }
}

export function getItemById(type, id) {
  validateType(type);
  return normalizeRow(
    db.prepare("SELECT * FROM content_items WHERE type = ? AND id = ?").get(type, Number(id)),
  );
}

export function seedDatabaseIfEmpty() {
  const current = db.prepare("SELECT COUNT(*) AS total FROM content_items").get();
  if (current.total > 0) return;

  const content = JSON.parse(readFileSync(contentPath, "utf8"));
  const insert = db.prepare(`
    INSERT INTO content_items (type, title, summary, body, note, scope, items, sort_order)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const add = (type, rows) => {
    rows.forEach((row, index) => {
      insert.run(
        type,
        row.title,
        row.summary || row.desc || "",
        row.body || "",
        row.note || "",
        row.scope || "",
        JSON.stringify(row.items || []),
        index,
      );
    });
  };

  add("solutions", content.solutions || []);
  add("categories", content.productCategories || []);
  add("articles", content.articles || []);
  add("projects", content.projects || []);
  add(
    "documents",
    (content.documentServices || []).map((title) => ({
      title,
      body: "Tư vấn phạm vi hồ sơ, tài liệu cần chuẩn bị và quy trình thực hiện theo yêu cầu pháp lý.",
    })),
  );
  add(
    "implementation",
    (content.implementationSteps || []).map((title) => ({
      title,
      body: "Nội dung triển khai được cập nhật theo từng dự án và phạm vi công việc cụ thể.",
    })),
  );
}
