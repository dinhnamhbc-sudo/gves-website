import SectionTitle from "./SectionTitle.jsx";
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
        <img className="collage-main" src="/assets/adong-company-info.png" alt="Thông tin Á Đông Group" />
        <img src="/assets/adong-team.png" alt="Đội ngũ Á Đông Group" />
        <img src="/assets/adong-values.png" alt="Giá trị Á Đông Group" />
      </div>
    </section>
  );
}
