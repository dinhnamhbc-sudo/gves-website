import ContactForm from "../components/ContactForm.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { company } from "../data/siteData.js";

export default function Contact() {
  return (
    <section className="page-shell contact-page">
      <div>
        <SectionTitle eyebrow="Liên hệ" title="Đồng hành cùng nhà đầu tư từ ý tưởng đến vận hành dự án" level={1}>
          Thông tin liên hệ được lấy từ trang cuối của profile Á Đông.
        </SectionTitle>
        <div className="contact-cards">
          <div className="contact-card"><h3>Địa chỉ</h3><p>{company.address}</p></div>
          <div className="contact-card"><h3>Điện thoại</h3><p>{company.phone}</p></div>
          <div className="contact-card"><h3>Email</h3><p>{company.email}</p></div>
          <div className="contact-card"><h3>Mã số thuế</h3><p>{company.taxCode}</p></div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
