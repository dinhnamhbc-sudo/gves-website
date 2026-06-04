import SectionTitle from "../components/SectionTitle.jsx";
import { productCategories } from "../data/siteData.js";

export default function Catalog() {
  return (
    <section className="page-shell">
      <SectionTitle eyebrow="Vì sao chọn Á Đông" title="Năm lợi thế trong triển khai dự án" level={1}>
        Profile nhấn mạnh năng lực đồng bộ, am hiểu pháp lý, đội ngũ đa ngành, kinh nghiệm thực tế và trách nhiệm đồng hành.
      </SectionTitle>
      <div className="why-grid">
        {productCategories.map((item, index) => (
          <article className="why-card" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.note}</p>
          </article>
        ))}
      </div>
      <img className="wide-profile" src="/assets/adong-capabilities.png" alt="Năng lực tổng thể Á Đông" />
    </section>
  );
}
