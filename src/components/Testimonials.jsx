import SectionTitle from "./SectionTitle.jsx";
import { testimonials } from "../data/siteData.js";

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <SectionTitle eyebrow="Khách hàng" title="Khách hàng nói gì về Á Đông?">
        Sự tin cậy của khách hàng là thước đo quan trọng cho chất lượng dịch vụ và tinh thần đồng hành của Á Đông Group.
      </SectionTitle>
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <article className="testimonial-card" key={index}>
            <p>“{item.content}”</p>
            <strong>Khách hàng: {item.customer}</strong>
            <span>Lĩnh vực: {item.field}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
