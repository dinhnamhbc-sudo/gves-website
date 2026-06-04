import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Thông tin đã được ghi nhận. Vui lòng cấu hình email, CRM hoặc backend để nhận yêu cầu tư vấn thực tế.");
    event.currentTarget.reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Họ và tên
        <input type="text" name="name" placeholder="Nhập họ tên người liên hệ" maxLength="80" required />
      </label>
      <label>
        Số điện thoại
        <input type="tel" name="phone" placeholder="Nhập số điện thoại" maxLength="20" required />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="Nhập email doanh nghiệp" maxLength="120" />
      </label>
      <label>
        Nội dung cần tư vấn
        <textarea
          name="message"
          rows="5"
          placeholder="Ví dụ: tư vấn đầu tư, thiết kế, môi trường, xây dựng hoặc đấu thầu"
          maxLength="1000"
          required
        />
      </label>
      <button className="button primary" type="submit">Gửi thông tin</button>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
