import { company } from "../data/siteData.js";

export default function CTASection({ onNavigate }) {
  return (
    <section className="section cta-section">
      <div>
        <p className="eyebrow">Tư vấn dự án</p>
        <h2>Cần tư vấn hồ sơ, thiết kế, môi trường hoặc đấu thầu cho dự án?</h2>
        <p>Á Đông Group sẵn sàng đồng hành cùng nhà đầu tư từ bước chuẩn bị hồ sơ đến triển khai thực tế.</p>
      </div>
      <div className="cta-actions">
        <a className="button primary gold" href={`tel:${company.phone.replaceAll(".", "")}`}>Gọi ngay {company.phone}</a>
        <button className="button secondary light" type="button" onClick={() => onNavigate("contact")}>
          Gửi yêu cầu tư vấn
        </button>
      </div>
    </section>
  );
}
