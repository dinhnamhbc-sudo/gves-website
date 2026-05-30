import SectionTitle from "../components/SectionTitle.jsx";
import { implementationSteps } from "../data/siteData.js";

export default function Implementation({ onNavigate }) {
  return (
    <section className="page-shell">
      <SectionTitle eyebrow="Triển khai" title="Quy trình triển khai dự án" level={1}>
        Quy trình làm việc được tổ chức theo từng bước để doanh nghiệp dễ theo dõi phạm vi, tiến độ và kết quả bàn giao.
      </SectionTitle>
      <div className="process-panel">
        <h2>Các bước làm việc</h2>
        <ol className="process-list">
          {implementationSteps.map((step, index) => (
            <li key={step}>
              <strong>Bước {index + 1}</strong>
              {step}
            </li>
          ))}
        </ol>
      </div>
      <div className="cta-band">
        <div>
          <h2>Cần rà soát hồ sơ hoặc hệ thống môi trường?</h2>
          <p>Gửi thông tin dự án để GVES Co., Ltd. xác định phạm vi tư vấn phù hợp.</p>
        </div>
        <button className="button primary" type="button" onClick={() => onNavigate("contact")}>
          Liên hệ tư vấn
        </button>
      </div>
    </section>
  );
}
