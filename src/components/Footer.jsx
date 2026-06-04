import { company } from "../data/siteData.js";

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <h2>{company.name}</h2>
          <p>{company.field}</p>
          <p className="footer-tagline">{company.tagline}</p>
        </div>
        <div className="footer-links">
          <h3>Hạng mục</h3>
          <button type="button" onClick={() => onNavigate("solutions")}>Dịch vụ</button>
          <button type="button" onClick={() => onNavigate("documents")}>Hồ sơ pháp lý</button>
          <button type="button" onClick={() => onNavigate("projects")}>Dự án</button>
          <button type="button" onClick={() => onNavigate("implementation")}>Quy trình</button>
        </div>
        <div className="footer-contact">
          <h3>Liên hệ</h3>
          <span>{company.phone}</span>
          <span>{company.email}</span>
          <span>{company.address}</span>
        </div>
        <p className="copyright">© 2026 {company.shortName}. Company profile website.</p>
      </div>
    </footer>
  );
}
