import SectionTitle from "../components/SectionTitle.jsx";
import { capabilities, commitments, company, solutions } from "../data/siteData.js";

export default function Home({ onNavigate }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{company.name}</p>
          <h1>Company Profile</h1>
          <p>
            Hồ sơ năng lực được xây dựng theo định hướng {company.tagline.toLowerCase()},
            tập trung vào các mảng tư vấn đầu tư, thiết kế, môi trường, xây dựng và đấu thầu.
          </p>
          <div className="hero-actions">
            <button className="button primary" type="button" onClick={() => onNavigate("solutions")}>
              Xem dịch vụ
            </button>
            <button className="button secondary" type="button" onClick={() => onNavigate("contact")}>
              Liên hệ Á Đông
            </button>
          </div>
          <div className="hero-stats">
            <div><strong>{company.founded}</strong><span>Ngày thành lập</span></div>
            <div><strong>{company.capital}</strong><span>Vốn điều lệ</span></div>
            <div><strong>{company.taxCode}</strong><span>Mã số thuế</span></div>
          </div>
        </div>
        <div className="hero-media">
          <img src="/assets/adong-cover.png" alt="Hồ sơ năng lực Á Đông" />
        </div>
      </section>

      <section className="trust-strip">
        <div className="trust-inner">
          <span>Tư vấn đầu tư</span>
          <span>Tư vấn thiết kế</span>
          <span>Tư vấn môi trường</span>
          <span>Đầu tư xây dựng</span>
          <span>Tư vấn đấu thầu</span>
        </div>
      </section>

      <section className="section split-section">
        <div>
          <SectionTitle eyebrow="Thông tin công ty" title="Đơn vị tư vấn và triển khai dự án đa ngành">
            Á Đông cung cấp hệ sinh thái dịch vụ tích hợp, đồng bộ và chuyên sâu cho nhà đầu tư, doanh nghiệp và đối tác.
          </SectionTitle>
          <div className="info-grid">
            <div><span>Tên doanh nghiệp</span><strong>{company.name}</strong></div>
            <div><span>Đại diện pháp luật</span><strong>{company.legalRepresentative}</strong></div>
            <div><span>Lĩnh vực hoạt động</span><strong>{company.field}</strong></div>
          </div>
        </div>
        <img className="profile-shot" src="/assets/adong-company-info.png" alt="Thông tin công ty Á Đông" />
      </section>

      <section className="section">
        <SectionTitle eyebrow="Dịch vụ" title="Năm lĩnh vực trọng tâm">
          Các mảng dịch vụ được tổ chức để hỗ trợ khách hàng từ giai đoạn ý tưởng, pháp lý, thiết kế đến triển khai và bàn giao.
        </SectionTitle>
        <div className="service-grid">
          {solutions.map((item) => (
            <article className="service-card" key={item.title}>
              <p className="service-tag">Dịch vụ</p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className="service-points">
                {item.items.slice(0, 4).map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section alt">
        <img className="profile-shot" src="/assets/adong-team.png" alt="Năng lực nhân sự chủ chốt Á Đông" />
        <div>
          <SectionTitle eyebrow="Năng lực" title="Đội ngũ đa ngành, phối hợp trọn gói">
            Nhân sự chủ chốt có chuyên môn ở các lĩnh vực quản lý, đầu tư, thiết kế kỹ thuật, môi trường và đấu thầu.
          </SectionTitle>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="Cam kết dịch vụ" title="Chuyên nghiệp, minh bạch và hiệu quả">
          Á Đông cam kết mang đến dịch vụ có trách nhiệm, bảo mật thông tin và đồng hành cùng khách hàng trong quá trình hoàn thiện hồ sơ.
        </SectionTitle>
        <div className="commitment-grid">
          {commitments.map((item) => <div key={item}>{item}</div>)}
        </div>
      </section>
    </>
  );
}
