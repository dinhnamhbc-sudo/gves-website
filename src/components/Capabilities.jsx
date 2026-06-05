import SectionTitle from "./SectionTitle.jsx";
import SmartImage from "./common/SmartImage.jsx";
import { capabilities, stats } from "../data/siteData.js";

export default function Capabilities() {
  return (
    <section className="section capabilities-section">
      <div className="capability-head">
        <SectionTitle eyebrow="Năng lực" title="Năng lực tích hợp cho dự án đa lĩnh vực">
          Á Đông Group kết hợp năng lực tư vấn, pháp lý, kỹ thuật, môi trường, xây dựng, đấu thầu và quản lý dự án trong một hệ sinh thái dịch vụ thống nhất.
        </SectionTitle>
        <SmartImage src="/images/adong/capabilities/project-management.jpg" alt="Năng lực tích hợp Á Đông Group" />
      </div>
      <div className="stats-strip">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="capability-grid">
        {capabilities.map((item) => (
          <article key={item.title}>
            <span className="field-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
