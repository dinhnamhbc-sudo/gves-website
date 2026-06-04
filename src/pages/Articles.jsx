import SectionTitle from "../components/SectionTitle.jsx";
import { articles } from "../data/siteData.js";

export default function Articles() {
  return (
    <section className="page-shell">
      <SectionTitle eyebrow="Định hướng" title="Tầm nhìn, sứ mệnh và giá trị cốt lõi" level={1}>
        Nội dung định hướng trong profile làm rõ cách Á Đông tạo giá trị và đồng hành với khách hàng, đối tác, cộng đồng.
      </SectionTitle>
      <div className="article-grid">
        {articles.map((article) => (
          <article className="article-card" key={article.title}>
            <p className="service-tag">Á Đông</p>
            <h3>{article.title}</h3>
            <p>{article.desc}</p>
          </article>
        ))}
      </div>
      <img className="wide-profile" src="/assets/adong-values.png" alt="Tầm nhìn sứ mệnh giá trị cốt lõi Á Đông" />
    </section>
  );
}
