import SectionTitle from "./SectionTitle.jsx";
import { news } from "../data/siteData.js";

export default function News() {
  return (
    <section className="section news-section">
      <SectionTitle eyebrow="Tin tức" title="Tin tức - Cập nhật pháp lý">
        Các nội dung cập nhật phục vụ nhà đầu tư trong quá trình chuẩn bị và triển khai dự án.
      </SectionTitle>
      <div className="news-grid">
        {news.map((item) => (
          <article className="news-card" key={item.title}>
            <span>{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button className="text-link" type="button">Xem thêm</button>
          </article>
        ))}
      </div>
    </section>
  );
}
