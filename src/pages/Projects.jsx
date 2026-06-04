import SectionTitle from "../components/SectionTitle.jsx";
import { projects } from "../data/siteData.js";

export default function Projects() {
  return (
    <section className="page-shell">
      <SectionTitle eyebrow="Công trình và dự án" title="Khu vực cập nhật dự án tiêu biểu" level={1}>
        Một số trang trong profile là mẫu để điền tên dự án, địa điểm, lĩnh vực và phạm vi thực hiện. Website giữ đúng cấu trúc đó và tránh tự thêm dữ liệu chưa có trong PDF.
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
