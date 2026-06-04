import SectionTitle from "../components/SectionTitle.jsx";
import { solutions } from "../data/siteData.js";

export default function Solutions() {
  return (
    <section className="page-shell">
      <SectionTitle eyebrow="Dịch vụ của chúng tôi" title="Giải pháp tích hợp cho nhà đầu tư và dự án" level={1}>
        Á Đông tổ chức dịch vụ theo 5 nhóm trọng tâm, hỗ trợ khách hàng từ pháp lý đầu tư, thiết kế, môi trường đến xây dựng và đấu thầu.
      </SectionTitle>
      <div className="solution-list">
        {solutions.map((item) => (
          <article className="solution-panel" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div>
              <p className="service-tag">Dịch vụ</p>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <ul className="service-points">
                {item.items.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
