import SectionTitle from "./SectionTitle.jsx";
import SmartImage from "./common/SmartImage.jsx";
import { businessFields, company } from "../data/siteData.js";

export default function Services({ onNavigate, compact = false }) {
  return (
    <section className="section services-section">
      <SectionTitle eyebrow="Dịch vụ của chúng tôi" title="Hệ sinh thái dịch vụ tích hợp của Á Đông Group">
        Á Đông Group cung cấp các nhóm dịch vụ chuyên sâu, hỗ trợ nhà đầu tư từ giai đoạn chuẩn bị dự án đến triển khai và vận hành.
      </SectionTitle>
      <div className={compact ? "service-showcase compact" : "service-showcase"}>
        {businessFields.map((field, index) => (
          <article className="service-block" key={field.id}>
            <div className="service-image">
              <SmartImage src={field.image} alt={field.title} />
              <span>{field.icon}</span>
            </div>
            <div className="service-body">
              <p className="english-title">{field.englishTitle}</p>
              <h3>{field.title}</h3>
              <p>{field.summary}</p>
              {!compact && (
                <ul className="service-points">
                  {field.items.map((point) => <li key={point}>{point}</li>)}
                </ul>
              )}
              <div className="service-footer">
                <a href={`tel:${company.phone.replaceAll(".", "")}`}>Hotline tư vấn: {company.phone}</a>
                <button className="button secondary" type="button" onClick={() => onNavigate("fields")}>
                  Xem chi tiết
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
