import { useState } from "react";
import { company } from "../data/siteData.js";

const navItems = [
  { id: "solutions", label: "Giải pháp" },
  { id: "catalog", label: "Danh mục" },
  { id: "documents", label: "Hồ sơ" },
  { id: "articles", label: "Bài viết" },
  { id: "projects", label: "Công trình" },
  { id: "implementation", label: "Triển khai" },
  { id: "contact", label: "Liên hệ" },
];

export default function Header({ activePage, onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleNavigate = (page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="brand" type="button" onClick={() => handleNavigate("home")}>
          <span className="brand-mark">GV</span>
          <span>
            <span className="brand-name">{company.shortName}</span>
            <span className="brand-line">Tư vấn môi trường cho doanh nghiệp</span>
          </span>
        </button>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <button
              className={activePage === item.id ? "active" : ""}
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="header-action" type="button" onClick={() => handleNavigate("contact")}>
          Nhận tư vấn
        </button>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Mở menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
