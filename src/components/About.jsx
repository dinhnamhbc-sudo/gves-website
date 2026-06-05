import SectionTitle from "./SectionTitle.jsx";
import SmartImage from "./common/SmartImage.jsx";
import { company, stats } from "../data/siteData.js";

export default function About() {
  return (
    <section className="section about-section">
      <div className="about-copy">
        <SectionTitle eyebrow="Giới thiệu" title="A Dong Group - Kiến tạo giá trị bền vững">
          {company.aboutText}
        </SectionTitle>
        <div className="stats-grid">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="about-collage">
        <SmartImage className="collage-main" fallbackClassName="collage-main" src="/images/adong/gallery/office.jpg" alt="Văn phòng Á Đông Group" />
        <SmartImage src="/images/adong/gallery/team-working.jpg" alt="Đội ngũ Á Đông Group" />
        <SmartImage src="/images/adong/gallery/legal-documents.jpg" alt="Hồ sơ năng lực Á Đông Group" />
      </div>
    </section>
  );
}
