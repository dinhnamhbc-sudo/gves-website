import SectionTitle from "../components/SectionTitle.jsx";
import { productCategories } from "../data/siteData.js";

export default function Catalog() {
  return (
    <section className="page-shell">
      <SectionTitle eyebrow="Danh mục" title="Danh mục thiết bị và hạng mục kỹ thuật" level={1}>
        Các nhóm thiết bị phục vụ quan trắc, truyền dữ liệu, vận hành và bảo trì hệ thống môi trường.
      </SectionTitle>
      <div className="service-grid expanded">
        {productCategories.map((item) => (
          <article className="service-card" key={item.title}>
            <p className="service-tag">Danh mục</p>
            <h3>{item.title}</h3>
            <p>{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
