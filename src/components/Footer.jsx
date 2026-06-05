import { businessFields, company, navigation, subsidiaries } from "../data/siteData.js";

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2>{company.brandName}</h2>
          <p>{company.name}</p>
          <p>{company.heroText}</p>
          <p className="footer-tagline">{company.tagline}</p>
        </div>
        <div className="footer-links">
          <h3>Menu nhanh</h3>
          {navigation.map((item) => (
            <button key={item.id} type="button" onClick={() => onNavigate(item.id)}>{item.label}</button>
          ))}
        </div>
        <div className="footer-links">
          <h3>Lĩnh vực hoạt động</h3>
          {businessFields.map((field) => (
            <button key={field.id} type="button" onClick={() => onNavigate("fields")}>{field.title}</button>
          ))}
        </div>
        <div className="footer-contact">
          <h3>Thông tin liên hệ</h3>
          <span>Địa chỉ: {company.address}</span>
          <span>Điện thoại: {company.phone}</span>
          <span>Email: {company.email}</span>
          <span>Website: {company.website}</span>
          <strong>Công ty thành viên</strong>
          <span>{subsidiaries[0].shortName}</span>
        </div>
        <p className="copyright">© 2026 {company.brandName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
