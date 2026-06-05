import cors from "cors";
import express from "express";
import {
  allowedTypes,
  db,
  getItemById,
  normalizeRows,
  seedDatabaseIfEmpty,
  validateType,
} from "./database.js";

const app = express();
const port = Number(process.env.PORT || 3001);

seedDatabaseIfEmpty();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "adong-group-api",
    database: "SQLite",
    types: [...allowedTypes.keys()],
  });
});

app.get("/api/content-types", (req, res) => {
  res.json(
    [...allowedTypes.entries()].map(([value, label]) => ({
      value,
      label,
    })),
  );
});

app.get("/api/:type", (req, res, next) => {
  try {
    const { type } = req.params;
    const q = String(req.query.q || "").trim();
    validateType(type);

    if (q) {
      const keyword = `%${q}%`;
      const rows = db
        .prepare(`
          SELECT *
          FROM content_items
          WHERE type = ?
            AND (
              title LIKE ?
              OR summary LIKE ?
              OR body LIKE ?
              OR note LIKE ?
              OR scope LIKE ?
            )
          ORDER BY sort_order ASC, id ASC
        `)
        .all(type, keyword, keyword, keyword, keyword, keyword);

      res.json(normalizeRows(rows));
      return;
    }

    const rows = db
      .prepare("SELECT * FROM content_items WHERE type = ? ORDER BY sort_order ASC, id ASC")
      .all(type);
    res.json(normalizeRows(rows));
  } catch (error) {
    next(error);
  }
});

app.get("/api/:type/:id", (req, res, next) => {
  try {
    const item = getItemById(req.params.type, req.params.id);
    if (!item) {
      res.status(404).json({ error: "Không tìm thấy dữ liệu." });
      return;
    }

    res.json(item);
  } catch (error) {
    next(error);
  }
});

app.post("/api/:type", (req, res, next) => {
  try {
    const { type } = req.params;
    validateType(type);
    const payload = normalizePayload(req.body);

    if (!payload.title) {
      res.status(400).json({ error: "Trường title là bắt buộc." });
      return;
    }

    const result = db
      .prepare(`
        INSERT INTO content_items (type, title, summary, body, note, scope, items, sort_order)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `)
      .run(
        type,
        payload.title,
        payload.summary,
        payload.body,
        payload.note,
        payload.scope,
        JSON.stringify(payload.items),
        payload.sort_order,
      );

    res.status(201).json(getItemById(type, result.lastInsertRowid));
  } catch (error) {
    next(error);
  }
});

app.put("/api/:type/:id", (req, res, next) => {
  try {
    const { type, id } = req.params;
    const existing = getItemById(type, id);
    if (!existing) {
      res.status(404).json({ error: "Không tìm thấy dữ liệu để sửa." });
      return;
    }

    const payload = normalizePayload({ ...existing, ...req.body });
    if (!payload.title) {
      res.status(400).json({ error: "Trường title là bắt buộc." });
      return;
    }

    db.prepare(`
      UPDATE content_items
      SET title = ?,
          summary = ?,
          body = ?,
          note = ?,
          scope = ?,
          items = ?,
          sort_order = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE type = ? AND id = ?
    `).run(
      payload.title,
      payload.summary,
      payload.body,
      payload.note,
      payload.scope,
      JSON.stringify(payload.items),
      payload.sort_order,
      type,
      Number(id),
    );

    res.json(getItemById(type, id));
  } catch (error) {
    next(error);
  }
});

app.delete("/api/:type/:id", (req, res, next) => {
  try {
    const { type, id } = req.params;
    const existing = getItemById(type, id);
    if (!existing) {
      res.status(404).json({ error: "Không tìm thấy dữ liệu để xóa." });
      return;
    }

    db.prepare("DELETE FROM content_items WHERE type = ? AND id = ?").run(type, Number(id));
    res.json({ ok: true, deleted: existing });
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  res.status(status).json({
    error: error.message || "Lỗi máy chủ.",
  });
});

app.listen(port);

function normalizePayload(body) {
  return {
    title: String(body.title || "").trim(),
    summary: String(body.summary || body.desc || "").trim(),
    body: String(body.body || "").trim(),
    note: String(body.note || "").trim(),
    scope: String(body.scope || "").trim(),
    items: Array.isArray(body.items) ? body.items.map(String) : [],
    sort_order: Number.isFinite(Number(body.sort_order)) ? Number(body.sort_order) : 0,
  };
}
