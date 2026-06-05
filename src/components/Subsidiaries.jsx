import SectionTitle from "./SectionTitle.jsx";
import { subsidiaries } from "../data/siteData.js";

export default function Subsidiaries() {
  return (
    <section className="section subsidiaries-section">
      <SectionTitle eyebrow="Công ty thành viên" title="Đơn vị chuyên trách trong hệ sinh thái Á Đông Group">
        GVES được giới thiệu đúng vai trò là công ty thành viên phụ trách lĩnh vực môi trường, không phải thương hiệu chính của website.
      </SectionTitle>
      <div className="subsidiary-grid">
        {subsidiaries.map((company) => (
          <article className="subsidiary-card" key={company.shortName}>
            <div className="subsidiary-mark">{company.shortName}</div>
            <div>
              <p className="service-tag">Công ty thành viên</p>
              <h3>{company.name}</h3>
              <p className="english-title">{company.englishName}</p>
              <p>{company.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
