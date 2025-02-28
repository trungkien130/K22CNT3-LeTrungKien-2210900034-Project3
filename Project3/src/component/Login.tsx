import { useState } from "react";

function Login() {
  const [loginData, SetLoginData] = useState(String);
  const [passwordData, SetPasswordData] = useState(String);

  function btnLogin() {
    console.log(loginData);
    console.log(passwordData);
  }

  return (
    <div>
      <h2>Đăng nhập</h2>
      <input
        type="text"
        onChange={(e) => SetLoginData(e.target.value)}
        required
      />
      <br />
      <input
        type="password"
        onChange={(p) => SetPasswordData(p.target.value)}
        required
      />
      <br />
      <button className="btnLogin" type="submit" onClick={btnLogin}>
        Đăng nhập
      </button>
    </div>
  );
}
export default Login;
