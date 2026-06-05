import { useMemo, useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import SmartImage from "./common/SmartImage.jsx";
import { businessFields, projects } from "../data/siteData.js";

const allCategory = "Tất cả";

export default function FeaturedProjects({ onNavigate }) {
  const [category, setCategory] = useState(allCategory);
  const categories = [allCategory, ...businessFields.map((field) => field.title)];
  const visibleProjects = useMemo(
    () => category === allCategory ? projects : projects.filter((project) => project.category === category),
    [category],
  );

  return (
    <section className="section featured-projects">
      <SectionTitle eyebrow="Dự án tiêu biểu" title="Những hồ sơ, công trình và gói dịch vụ Á Đông đã triển khai">
        Á Đông Group đồng hành cùng nhà đầu tư trong nhiều nhóm công việc từ tư vấn pháp lý, thiết kế, môi trường, xây dựng đến đấu thầu.
      </SectionTitle>
      <div className="filter-bar">
        {categories.map((item) => (
          <button
            className={item === category ? "active" : ""}
            key={item}
            type="button"
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <article className="project-card" key={`${project.category}-${index}`}>
            <SmartImage src={project.image} alt={`${project.category} - ${project.title}`} />
            <div className="project-overlay">
              <p>{project.category}</p>
              <h3>{project.title}</h3>
              <span>Địa điểm: {project.location}</span>
              <span>Phạm vi: {project.scope}</span>
              <button className="text-link" type="button">Xem chi tiết</button>
            </div>
          </article>
        ))}
      </div>
      <button className="button secondary center-button" type="button" onClick={() => onNavigate("projects")}>
        Xem tất cả dự án
      </button>
    </section>
  );
}
