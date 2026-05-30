import ContactForm from "../components/ContactForm.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { company } from "../data/siteData.js";

export default function Contact() {
  return (
    <section className="page-shell contact-page">
      <div>
        <SectionTitle eyebrow="Liên hệ" title="Gửi thông tin cần tư vấn" level={1}>
          Cung cấp thông tin sơ bộ về doanh nghiệp, nhà máy hoặc hồ sơ cần xử lý để nhận tư vấn phù hợp.
        </SectionTitle>
        <div className="contact-cards">
          <div className="contact-card">
            <h3>Điện thoại</h3>
            <p>{company.phone}</p>
          </div>
          <div className="contact-card">
            <h3>Email</h3>
            <p>{company.email}</p>
          </div>
          <div className="contact-card">
            <h3>Địa chỉ</h3>
            <p>{company.address}</p>
          </div>
          <div className="contact-card">
            <h3>Mã số thuế</h3>
            <p>{company.taxCode}</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
