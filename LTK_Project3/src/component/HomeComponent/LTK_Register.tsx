import { useState } from "react";
import instance from "../../Api/LTK_Api";
import "/Project 3/LTK_Project3/src/css/ltkStyle.css";

function getCurrentTimeVN() {
  return new Date().toISOString().split("T")[0];
}

const initialData = {
  name: "",
  email: "",
  password: "",
  dateBirth: "",
  PhoneNum: "",
  gender: "",
  createDay: getCurrentTimeVN(),
};

function LTK_Register({ isOpen, onClose }) {
  const [RegisterData, SetRegisterData] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    SetRegisterData((prevData) => ({
      ...prevData,
      [name]: name === "PhoneNum" && value ? Number(value) : value,
    }));
  };

  async function Register() {
    const requestData = {
      ltkHoten: RegisterData.name,
      ltkEmail: RegisterData.email,
      ltkGioitinh: RegisterData.gender === "male",
      ltkNgaysinh: RegisterData.dateBirth,
      ltkSodienthoai: RegisterData.PhoneNum,
      ltkTrangthai: true,
      ltkNgaytao: new Date().toISOString().split("T")[0],
      ltkMatkhau: RegisterData.password,
    };

    try {
      console.log("Dữ liệu gửi đi:", requestData);
      const response = await instance.post("/ltkKhachhang", requestData);

      console.log("Đăng ký thành công:", response.data);
      onClose();
    } catch (error) {
      console.error("API Fetch Error:", error);
      if (error.response) {
        console.log("Lỗi từ server:", error.response.data);
      }
    }
  }

  if (!isOpen) return null;
  function Login_swichPagebtn() {}
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          ❌
        </button>
        <h2 className="popup-title">Đăng ký tài khoản</h2>
        <div className="popup-content">
          <input
            type="text"
            name="name"
            value={RegisterData.name}
            onChange={handleInputChange}
            placeholder="Nhập họ và tên"
            className="popup-input"
          />
          <input
            type="password"
            name="password"
            value={RegisterData.password}
            onChange={handleInputChange}
            placeholder="Nhập mật khẩu"
            className="popup-input"
          />
          <input
            type="email"
            name="email"
            value={RegisterData.email}
            onChange={handleInputChange}
            placeholder="Nhập email"
            className="popup-input"
          />
          <input
            type="date"
            name="dateBirth"
            value={RegisterData.dateBirth}
            onChange={handleInputChange}
            className="popup-input"
          />
          <input
            type="text"
            name="PhoneNum"
            value={RegisterData.PhoneNum}
            onChange={handleInputChange}
            placeholder="Nhập số điện thoại"
            className="popup-input"
          />
          <select
            name="gender"
            value={RegisterData.gender}
            onChange={handleInputChange}
            className="popup-input"
          >
            <option value="">Chọn giới tính</option>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
          <button onClick={Register} className="popup-button">
            Đăng ký
          </button>
          <span className="title_swichPage">
            Bạn đã có tài khoản{" "}
            <a onClick={Login_swichPagebtn} className="swichpage-btn">
              Đăng nhập
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LTK_Register;
