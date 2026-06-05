import ContactForm from "./ContactForm.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { company } from "../data/siteData.js";

export default function Contact() {
  return (
    <section className="section contact-page">
      <div>
        <SectionTitle eyebrow="Liên hệ" title="Đồng hành cùng nhà đầu tư từ ý tưởng đến vận hành dự án">
          Gửi thông tin để Á Đông Group tư vấn phạm vi phù hợp cho hồ sơ, thiết kế, môi trường, xây dựng hoặc đấu thầu.
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
