import SectionTitle from "../components/SectionTitle.jsx";
import { projects } from "../data/siteData.js";

export default function Projects() {
  return (
    <section className="page-shell">
      <SectionTitle eyebrow="Công trình" title="Công trình và dự án tiêu biểu" level={1}>
        Khu vực này dùng để cập nhật các dự án đã thực hiện sau khi có thông tin được phép công bố.
      </SectionTitle>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-item" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.scope}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
