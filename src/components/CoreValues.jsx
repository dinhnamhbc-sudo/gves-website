import SectionTitle from "./SectionTitle.jsx";
import { coreValues } from "../data/siteData.js";

export default function CoreValues() {
  return (
    <section className="section core-values">
      <SectionTitle eyebrow="Giá trị cốt lõi" title="Nền tảng đồng hành cùng khách hàng">
        Các giá trị này định hướng cách Á Đông Group tổ chức công việc, phối hợp với khách hàng và bàn giao kết quả.
      </SectionTitle>
      <div className="value-grid">
        {coreValues.map((value) => (
          <article className="value-card" key={value.title}>
            <span>{value.icon}</span>
            <h3>{value.title}</h3>
            <p>{value.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
