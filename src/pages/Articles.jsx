import SectionTitle from "../components/SectionTitle.jsx";
import { articles } from "../data/siteData.js";

export default function Articles() {
  return (
    <section className="page-shell">
      <SectionTitle eyebrow="Bài viết" title="Bài viết tư vấn môi trường cho doanh nghiệp" level={1}>
        Nội dung tập trung vào các vấn đề thực tế: giấy phép môi trường, ĐTM, quan trắc và vận hành công trình xử lý.
      </SectionTitle>
      <div className="article-grid">
        {articles.map((article) => (
          <article className="article-card" key={article.title}>
            <p className="service-tag">Tư vấn</p>
            <h3>{article.title}</h3>
            <p>{article.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
