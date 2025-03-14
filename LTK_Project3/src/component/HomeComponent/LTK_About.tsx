import LTK_Footer from "./LTK_Footer";
import LTK_Header from "./LTK_Header";
import "../../css/ltkStyle.css";
import { useAuth } from "../../Api/LTK_AuthContext";

const LTK_About = () => {
  const { setModalType } = useAuth();
  return (
    <>
      <LTK_Header setModalType={setModalType} />
      <div className="about-container">
        <section className="about-header">
          <h1>Giới Thiệu Về Của Tôi</h1>
        </section>

        <section className="about-team">
          <h2>Đội Ngũ Sáng Tạo</h2>
          <p>
            Đội ngũ của tôi gồm các nhân viên tài năng, làm việc tại các bộ phận
            như thiết kế, marketing, và kiểm soát chất lượng. Chúng tôi chú
            trọng sáng tạo và chất lượng, mang đến sản phẩm an toàn cho trẻ.
          </p>
          <ul>
            <li>
              <strong>Thiết Kế:</strong> Tạo ra các mẫu thời trang phong cách và
              tiện lợi cho trẻ.
            </li>
            <li>
              <strong>Marketing:</strong> Nghiên cứu thị trường và đáp ứng nhu
              cầu khách hàng.
            </li>
            <li>
              <strong>Chất Lượng:</strong> Đảm bảo vải an toàn, không chứa chất
              độc hại.
            </li>
          </ul>
        </section>

        <section className="about-distribution">
          <h2>Hệ Thống Phân Phối</h2>
          <p>
            Của tôi có mặt tại các cửa hàng toàn quốc và các kênh trực tuyến như
            website, Shopee, và Facebook, mang lại sự tiện lợi cho khách hàng.
          </p>
        </section>

        <section className="about-vision">
          <h2>Tầm Nhìn và Giá Trị</h2>
          <p>Của tôi hướng tới việc trở thành lựa chọn hàng đầu với cam kết:</p>
          <ul>
            <li>
              <strong>Uy Tín và Chất Lượng:</strong> Sản phẩm an toàn cho trẻ.
            </li>
            <li>
              <strong>Tiết Kiệm:</strong> Giá cả hợp lý cho phụ huynh.
            </li>
            <li>
              <strong>Sáng Tạo:</strong> Đổi mới thiết kế và dịch vụ.
            </li>
          </ul>
        </section>

        <section className="about-closing">
          <h2>Đồng Hành Cùng Bạn</h2>
          <p>
            Với sứ mệnh mang đến trang phục đẹp và an toàn, của tôi mong muốn là
            người bạn đồng hành đáng tin cậy của mọi gia đình.
          </p>
        </section>
      </div>
      <LTK_Footer />
    </>
  );
};

export default LTK_About;
