import { useState } from "react";
import { company } from "../data/siteData.js";

const navItems = [
  { id: "solutions", label: "Dịch vụ" },
  { id: "catalog", label: "Vì sao chọn" },
  { id: "documents", label: "Hồ sơ pháp lý" },
  { id: "articles", label: "Tầm nhìn" },
  { id: "projects", label: "Dự án" },
  { id: "implementation", label: "Quy trình" },
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
          <span className="brand-mark">AD</span>
          <span>
            <span className="brand-name">{company.shortName}</span>
            <span className="brand-line">{company.tagline}</span>
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
