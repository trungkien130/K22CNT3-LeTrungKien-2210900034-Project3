import { useState } from "react";
import instance from "../../Api/LTK_Api";
import "/Project 3/LTK_Project3/src/css/ltkStyle.css";

function LTK_Register({ onClose, onSwitchToLogin }) {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNum: "",
    createDay: new Date().toISOString().split("T")[0],
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: name === "phoneNum" && value ? Number(value) : value,
    }));
  };

  async function handleRegister() {
    if (registerData.password !== registerData.confirmPassword) {
      setErrorMessage("Mật khẩu không khớp!");
      return;
    }

    const requestData = {
      ltkHoten: registerData.name,
      ltkEmail: registerData.email,
      ltkSodienthoai: registerData.phoneNum,
      ltkTrangthai: true,
      ltkNgaytao: new Date().toISOString().split("T")[0],
      ltkMatkhau: registerData.password,
    };

    try {
      console.log("Dữ liệu gửi đi:", requestData);
      const response = await instance.post("/ltkKhachhang", requestData);
      console.log("Đăng ký thành công:", response.data);
      onClose();
    } catch (error) {
      console.error("API Fetch Error:", error);
      setErrorMessage("Lỗi hệ thống. Vui lòng thử lại!");
    }
  }

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
            value={registerData.name}
            onChange={handleInputChange}
            placeholder="Nhập họ và tên"
            className="popup-input"
          />
          <input
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleInputChange}
            placeholder="Nhập mật khẩu"
            className="popup-input"
          />
          <input
            type="password"
            name="confirmPassword"
            value={registerData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Nhập lại mật khẩu"
            className="popup-input"
          />
          <input
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleInputChange}
            placeholder="Nhập email"
            className="popup-input"
          />
          <input
            type="text"
            name="phoneNum"
            value={registerData.phoneNum}
            onChange={handleInputChange}
            placeholder="Nhập số điện thoại"
            className="popup-input"
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button onClick={handleRegister} className="popup-button">
            Đăng ký
          </button>
          <span className="title_switchPage">
            Bạn đã có tài khoản?{" "}
            <a onClick={onSwitchToLogin} className="switchpage-btn">
              Đăng nhập
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LTK_Register;
