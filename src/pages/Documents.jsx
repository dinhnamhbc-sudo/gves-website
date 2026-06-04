import SectionTitle from "../components/SectionTitle.jsx";
import { documentServices, leaders } from "../data/siteData.js";

export default function Documents() {
  return (
    <section className="page-shell">
      <SectionTitle eyebrow="Hồ sơ pháp lý" title="Minh bạch, đầy đủ, đáp ứng năng lực triển khai" level={1}>
        Hồ sơ năng lực thể hiện các nhóm pháp lý và chứng chỉ phục vụ hoạt động tư vấn, thiết kế, xây dựng và đấu thầu.
      </SectionTitle>
      <div className="document-list">
        {documentServices.map((item) => (
          <article className="document-item" key={item}>
            <h3>{item}</h3>
            <p>Thông tin được trình bày trong profile và có thể cập nhật bản scan/chứng từ khi công bố chính thức.</p>
          </article>
        ))}
      </div>
      <div className="section-inline">
        <img className="profile-shot" src="/assets/adong-legal.png" alt="Hồ sơ pháp lý Á Đông" />
        <div>
          <h2>Nhân sự chủ chốt</h2>
          <div className="leader-list">
            {leaders.map((leader) => (
              <article key={leader.name}>
                <h3>{leader.name}</h3>
                <p>{leader.role}</p>
                <span>{leader.specialty}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
