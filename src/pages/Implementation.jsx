import SectionTitle from "../components/SectionTitle.jsx";
import { implementationSteps } from "../data/siteData.js";

export default function Implementation({ onNavigate }) {
  return (
    <section className="page-shell">
      <SectionTitle eyebrow="Quy trình làm việc" title="Từ tiếp nhận yêu cầu đến bàn giao và hỗ trợ" level={1}>
        Quy trình 6 bước giúp khách hàng theo dõi rõ mục tiêu, hồ sơ, phương án, tiến độ và kết quả bàn giao.
      </SectionTitle>
      <div className="process-panel">
        <ol className="process-list">
          {implementationSteps.map((step, index) => (
            <li key={step}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              {step}
            </li>
          ))}
        </ol>
      </div>
      <img className="wide-profile" src="/assets/adong-process.png" alt="Quy trình làm việc Á Đông" />
      <div className="cta-band">
        <div>
          <h2>Cần tư vấn cho dự án mới?</h2>
          <p>Liên hệ Á Đông để trao đổi phạm vi tư vấn đầu tư, thiết kế, môi trường, xây dựng hoặc đấu thầu.</p>
        </div>
        <button className="button primary" type="button" onClick={() => onNavigate("contact")}>
          Liên hệ tư vấn
        </button>
      </div>
    </section>
  );
}
