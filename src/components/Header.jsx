import { useEffect, useState } from "react";
import { company, navigation } from "../data/siteData.js";

export default function Header({ activePage, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="top-bar">
        <div className="top-bar-inner">
          <span>{company.name.toUpperCase()}</span>
          <a href={`tel:${company.phone.replaceAll(".", "")}`}>Hotline: {company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>
      <div className="header-inner">
        <button className="brand" type="button" onClick={() => handleNavigate("home")}>
          <span className="brand-mark">AD</span>
          <span>
            <span className="brand-name">{company.brandName}</span>
            <span className="brand-line">{company.tagline}</span>
          </span>
        </button>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Điều hướng chính">
          {navigation.map((item) => (
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

        <div className="header-actions">
          <button className="header-action ghost" type="button" onClick={() => handleNavigate("capabilities")}>
            Hồ sơ năng lực
          </button>
          <button className="header-action" type="button" onClick={() => handleNavigate("contact")}>
            Liên hệ tư vấn
          </button>
        </div>
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
