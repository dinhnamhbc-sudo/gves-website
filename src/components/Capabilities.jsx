import SectionTitle from "./SectionTitle.jsx";
import SmartImage from "./common/SmartImage.jsx";
import { capabilities, stats } from "../data/siteData.js";

export default function Capabilities() {
  return (
    <section className="section capabilities-section">
      <div className="capability-head">
        <SectionTitle eyebrow="Năng lực tổng thể" title="Năng lực tích hợp cho toàn bộ vòng đời dự án">
          Á Đông Group kết nối pháp lý đầu tư, thiết kế kỹ thuật, môi trường, đấu thầu, xây dựng và quản lý dự án trong một hệ sinh thái dịch vụ đồng bộ, giúp nhà đầu tư tối ưu quá trình chuẩn bị, triển khai và vận hành dự án.
        </SectionTitle>
        <SmartImage src="/images/adong/capabilities/capability-integrated.jpg" alt="Năng lực tích hợp Á Đông Group" />
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
