import SectionTitle from "./SectionTitle.jsx";
import { workflow } from "../data/siteData.js";

export default function Workflow() {
  return (
    <section className="section workflow-section">
      <SectionTitle eyebrow="Quy trình thực hiện" title="Từ tiếp nhận yêu cầu đến bàn giao kết quả">
        Quy trình làm việc được chia thành từng bước rõ ràng để khách hàng dễ theo dõi phạm vi, tiến độ và kết quả.
      </SectionTitle>
      <ol className="timeline">
        {workflow.map((step) => (
          <li key={step.title}>
            <span>{step.icon}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
