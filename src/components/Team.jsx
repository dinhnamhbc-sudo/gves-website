import SectionTitle from "./SectionTitle.jsx";
import { leaders } from "../data/siteData.js";

export default function Team() {
  return (
    <section className="section team-section">
      <SectionTitle eyebrow="Đội ngũ nhân sự" title="Chuyên môn đa ngành - Kinh nghiệm thực tiễn">
        Đội ngũ nhân sự chủ chốt của Á Đông Group có chuyên môn trong quản lý điều hành, tư vấn đầu tư, thiết kế kỹ thuật, môi trường, xây dựng và đấu thầu.
      </SectionTitle>
      <div className="team-grid">
        {leaders.map((leader) => (
          <article className="team-card" key={leader.name}>
            <div className="avatar-placeholder">{leader.name.split(" ").slice(-1)[0][0]}</div>
            <h3>{leader.name}</h3>
            <p>{leader.role}</p>
            <span>{leader.specialty}</span>
            <small>{leader.experience}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
