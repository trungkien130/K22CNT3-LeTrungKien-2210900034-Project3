import { useState } from "react";
import instance from "../../Api/LTK_Api";
import { useNavigate } from "react-router-dom";
import "/Project 3/LTK_Project3/src/css/ltkStyle.css";

function LTK_Login({ isOpen, onClose }) {
  const [loginData, setLoginData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isRegister, setIsRegister] = useState(false); // Toggle between login and register
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      const requestBody = {
        ltkEmail: loginData,
        ltkMatkhau: passwordData,
      };

      if (isRegister) {
        // Registration
        const response = await instance.post(
          "/ltkKhachhang",
          JSON.stringify({
            ...requestBody,
            ltkHoten: "Default Name", // Add required fields or make them optional in VO
            ltkRole: false, // Default to user
          }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        if (response.data) {
          alert("Đăng ký thành công!");
          setIsRegister(false); // Switch to login after registration
        }
      } else {
        // Login
        const response = await instance.post(
          "/ltkKhachhang/login",
          JSON.stringify(requestBody),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        if (response.data.success) {
          console.log("Đăng nhập thành công:", response.data);
          if (response.data.role === "ADMIN") {
            alert("Bạn là Admin! Chuyển đến trang quản lý.");
            navigate("/admin-dashboard");
          } else {
            alert("Đăng nhập thành công với vai trò người dùng!");
            navigate("/user-dashboard");
          }
          onClose();
        } else {
          setErrorMessage("Tài khoản hoặc mật khẩu không đúng!");
        }
      }
    } catch (error) {
      console.error("Lỗi:", error);
      setErrorMessage("Lỗi hệ thống. Vui lòng thử lại!");
    }
  }

  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="login-popup" onClick={(e) => e.stopPropagation()}>
        <h2 className="popup-title">{isRegister ? "Đăng ký" : "Đăng nhập"}</h2>
        <input
          type="text"
          placeholder="Email"
          value={loginData}
          onChange={(e) => setLoginData(e.target.value)}
          required
          className="popup-input"
        />
        <br />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={passwordData}
          onChange={(p) => setPasswordData(p.target.value)}
          required
          className="popup-input"
        />
        <br />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className="btnLogin" type="submit" onClick={handleSubmit}>
          {isRegister ? "Đăng ký" : "Đăng nhập"}
        </button>
        <button
          className="btnToggle"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Chuyển sang Đăng nhập" : "Chuyển sang Đăng ký"}
        </button>
        <button className="btnClose" onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  );
}

export default LTK_Login;
