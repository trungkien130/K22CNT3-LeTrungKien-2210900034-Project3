import { useState } from "react";
import instance from "../../Api/LTK_Api";
import { useNavigate } from "react-router-dom";
import "/Project 3/LTK_Project3/src/css/ltkStyle.css";

function LTK_Login({ onClose, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const requestBody = { ltkEmail: email, ltkMatkhau: password };
      const response = await instance.post(
        "/ltkKhachhang/login",
        JSON.stringify(requestBody),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.data.success) {
        console.log("Đăng nhập thành công:", response.data);
        // Store login data in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: email,
            role: response.data.role,
            name: response.data.name,
            token: response.data.token,
          })
        );
        window.location.reload();
        alert(
          response.data.role === "ADMIN"
            ? "Bạn là Admin!"
            : "Đăng nhập thành công!"
        );
        navigate(response.data.role === "ADMIN" ? "/admin" : "/");
        onClose();
      } else {
        setErrorMessage("Tài khoản hoặc mật khẩu không đúng!");
      }
    } catch (error) {
      console.error("Lỗi:", error);
      setErrorMessage(error.response.data.message || "Có lỗi xảy ra");
    }
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="login-popup" onClick={(e) => e.stopPropagation()}>
        <h2 className="popup-title">Đăng nhập</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="popup-input"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="popup-input"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className="btnLogin" onClick={handleLogin}>
          Đăng nhập
        </button>

        <button className="btnClose" onClick={onClose}>
          Đóng
        </button>
        <div className="switchpage-container">
          <span className="switchpage-text">Bạn chưa có tài khoản?</span>
          <span className="switchpage-btn" onClick={onSwitchToRegister}>
            Đăng ký
          </span>
        </div>
      </div>
    </div>
  );
}

export default LTK_Login;
