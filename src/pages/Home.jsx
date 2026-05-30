import SectionTitle from "../components/SectionTitle.jsx";
import { company, productCategories, projects, solutions } from "../data/siteData.js";

export default function Home({ onNavigate }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Environmental consulting & engineering</p>
          <h1>{company.name}</h1>
          <p>
            {company.field}. GVES Co., Ltd. hỗ trợ doanh nghiệp kiểm soát rủi ro pháp lý môi trường,
            hoàn thiện hồ sơ và triển khai giải pháp kỹ thuật phù hợp với hoạt động sản xuất.
          </p>
          <div className="hero-actions">
            <button className="button primary" type="button" onClick={() => onNavigate("solutions")}>
              Xem giải pháp
            </button>
            <button className="button secondary" type="button" onClick={() => onNavigate("contact")}>
              Gửi yêu cầu tư vấn
            </button>
          </div>
          <div className="hero-stats">
            <div><strong>01</strong><span>Tư vấn môi trường</span></div>
            <div><strong>02</strong><span>Hồ sơ pháp lý</span></div>
            <div><strong>03</strong><span>Giải pháp kỹ thuật</span></div>
          </div>
        </div>
        <div className="hero-media">
          <img src="/assets/environment-equipment-hero.png" alt="Hệ thống quan trắc và xử lý môi trường công nghiệp" />
          <div className="media-note">
            <strong>Giải pháp cho doanh nghiệp sản xuất</strong>
            <span>Hỗ trợ hồ sơ môi trường, quan trắc, thiết kế hệ thống xử lý nước thải và khí thải.</span>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="trust-inner">
          <span>Giấy phép môi trường</span>
          <span>Đánh giá tác động môi trường</span>
          <span>Quan trắc môi trường</span>
          <span>Xử lý nước thải, khí thải</span>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="Giải pháp" title="Dịch vụ môi trường trọng tâm">
          Các hạng mục được thiết kế cho doanh nghiệp cần tuân thủ pháp luật môi trường và vận hành hệ thống xử lý ổn định.
        </SectionTitle>
        <div className="service-grid">
          {solutions.slice(0, 3).map((item) => (
            <article className="service-card" key={item.title}>
              <p className="service-tag">Dịch vụ</p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="service-points">
                {item.items.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-preview">
        <SectionTitle eyebrow="Năng lực" title="Hồ sơ, thiết bị và công trình">
          Website đã sẵn cấu trúc để cập nhật danh mục thiết bị, dự án đã thực hiện và thông tin liên hệ chính thức.
        </SectionTitle>
        <div className="project-list">
          <article className="project-item">
            <h3>{productCategories[0].title}</h3>
            <p>{productCategories[0].note}</p>
          </article>
          <article className="project-item">
            <h3>{projects[0].title}</h3>
            <p>{projects[0].scope}</p>
          </article>
        </div>
      </section>
    </>
  );
}
