import { useEffect, useState } from "react";
import { businessFields, company, navigation } from "../data/siteData.js";

const quickLinks = [
  { id: "fields", label: "Lĩnh vực hoạt động", icon: "LV" },
  { id: "projects", label: "Dự án tiêu biểu", icon: "DA" },
  { id: "capabilities", label: "Hồ sơ năng lực", icon: "NL" },
];

export default function Header({ activePage, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        <div className="header-container top-bar-inner">
          <span>{company.name.toUpperCase()}</span>
          <a href={`tel:${company.phone.replaceAll(".", "")}`}>Hotline: {company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>

      <div className="main-header">
        <div className="header-container main-header-inner">
          <button className="brand" type="button" onClick={() => handleNavigate("home")} aria-label="A Dong Group">
            <span className="brand-mark">AD</span>
            <span>
              <span className="brand-name">{company.brandName}</span>
              <span className="brand-line">{company.tagline}</span>
            </span>
          </button>

          <form className="header-search" onSubmit={(event) => event.preventDefault()}>
            <input type="search" placeholder="Tìm kiếm dịch vụ, dự án, hồ sơ..." aria-label="Tìm kiếm" />
            <button type="submit" aria-label="Tìm kiếm">⌕</button>
          </form>

          <div className="quick-links">
            {quickLinks.map((item) => (
              <button key={item.id} type="button" onClick={() => handleNavigate(item.id)}>
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          <button className="profile-button" type="button" onClick={() => handleNavigate("capabilities")}>
            E-PROFILE
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
      </div>

      <nav className={`nav-bar ${open ? "is-open" : ""}`} aria-label="Điều hướng chính">
        <div className="header-container nav-inner">
          {navigation.map((item) => (
            item.id === "fields" ? (
              <div className="nav-dropdown" key={item.id}>
                <button
                  className={activePage === item.id ? "active" : ""}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                >
                  {item.label}
                </button>
                <div className="dropdown-menu">
                  {businessFields.map((field) => (
                    <button key={field.id} type="button" onClick={() => handleNavigate("fields")}>
                      {field.title}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                className={`${activePage === item.id ? "active" : ""} ${item.id === "contact" ? "contact-pill" : ""}`}
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
              >
                {item.label}
              </button>
            )
          ))}
        </div>
      </nav>
    </header>
  );
}
