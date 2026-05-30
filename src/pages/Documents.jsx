import SectionTitle from "../components/SectionTitle.jsx";
import { documentServices } from "../data/siteData.js";

const descriptions = {
  "Giấy phép môi trường": "Tư vấn chuẩn bị hồ sơ, rà soát công trình bảo vệ môi trường và hỗ trợ doanh nghiệp theo dõi quá trình xử lý hồ sơ.",
  "Đánh giá tác động môi trường (ĐTM)": "Tư vấn lập báo cáo cho dự án đầu tư mới, mở rộng công suất hoặc thay đổi công nghệ có yêu cầu đánh giá tác động môi trường.",
  "Đăng ký môi trường": "Hỗ trợ xác định đối tượng, chuẩn bị thông tin và hoàn thiện nội dung đăng ký môi trường theo quy định.",
  "Báo cáo công tác bảo vệ môi trường": "Tổng hợp dữ liệu vận hành, kết quả quan trắc, tình trạng công trình xử lý và các nội dung báo cáo định kỳ.",
  "Hồ sơ vận hành thử nghiệm công trình xử lý chất thải": "Hỗ trợ kế hoạch vận hành thử nghiệm, theo dõi kết quả và chuẩn bị hồ sơ liên quan đến công trình xử lý.",
  "Kế hoạch quan trắc môi trường định kỳ": "Tư vấn thông số, vị trí, tần suất và phương án quản lý kết quả quan trắc phục vụ tuân thủ pháp luật.",
};

export default function Documents() {
  return (
    <section className="page-shell">
      <SectionTitle eyebrow="Hồ sơ" title="Tư vấn lập hồ sơ môi trường" level={1}>
        Hỗ trợ doanh nghiệp chuẩn bị hồ sơ pháp lý môi trường rõ phạm vi, đúng đối tượng và phù hợp hoạt động thực tế.
      </SectionTitle>
      <div className="document-list">
        {documentServices.map((item) => (
          <article className="document-item" key={item}>
            <h3>{item}</h3>
            <p>{descriptions[item]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
