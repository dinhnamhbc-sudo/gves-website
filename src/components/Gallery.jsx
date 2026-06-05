import SectionTitle from "./SectionTitle.jsx";
import SmartImage from "./common/SmartImage.jsx";
import { gallery } from "../data/siteData.js";

export default function Gallery() {
  return (
    <section className="section gallery-section">
      <SectionTitle eyebrow="Hình ảnh hoạt động" title="Hình ảnh hoạt động và hồ sơ năng lực">
        Khu vực hình ảnh giúp website thể hiện rõ hơn văn phòng, đội ngũ, hồ sơ pháp lý và hoạt động triển khai.
      </SectionTitle>
      <div className="gallery-grid">
        {gallery.map((item) => (
          <article className="gallery-item" key={item.title}>
            <SmartImage src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
