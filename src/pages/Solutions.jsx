import SectionTitle from "../components/SectionTitle.jsx";
import { solutions } from "../data/siteData.js";

export default function Solutions() {
  return (
    <section className="page-shell">
      <SectionTitle eyebrow="Giải pháp" title="Giải pháp môi trường cho doanh nghiệp" level={1}>
        GVES Co., Ltd. cung cấp dịch vụ tư vấn và kỹ thuật cho nhà máy, cơ sở sản xuất và cụm công nghiệp.
      </SectionTitle>
      <div className="service-grid expanded">
        {solutions.map((item) => (
          <article className="service-card" key={item.title}>
            <p className="service-tag">Giải pháp</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <ul className="service-points">
              {item.items.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
