import { company } from "../data/siteData.js";

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <h2>{company.name}</h2>
          <p>
            Đơn vị tư vấn môi trường, hồ sơ pháp lý môi trường, quan trắc và giải pháp xử lý nước thải,
            khí thải cho doanh nghiệp.
          </p>
        </div>
        <div className="footer-links">
          <h3>Hạng mục</h3>
          <button type="button" onClick={() => onNavigate("solutions")}>Giải pháp</button>
          <button type="button" onClick={() => onNavigate("catalog")}>Danh mục</button>
          <button type="button" onClick={() => onNavigate("documents")}>Hồ sơ</button>
          <button type="button" onClick={() => onNavigate("projects")}>Công trình</button>
        </div>
        <div className="footer-contact">
          <h3>Liên hệ</h3>
          <span>{company.phone}</span>
          <span>{company.email}</span>
          <span>{company.address}</span>
        </div>
        <p className="copyright">© 2026 {company.shortName}. Environmental consulting and engineering.</p>
      </div>
    </footer>
  );
}
