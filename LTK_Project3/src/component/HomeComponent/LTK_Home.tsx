import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import "/Project 3/LTK_Project3/src/LTK_App.css";
import instance from "../../Api/LTK_Api";
import LTK_Register from "./LTK_Register";
import LTK_Login from "./LTK_Login";
import LTK_Admin from "../AdminComponent/LTK_Admin";
function LTK_Home() {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get("/ltkKhachhang");
        console.log("API Response:", response.data.content);
        setDataApi(response.data.content);
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    }

    fetchData();
  }, []);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsRegisterOpen(true)}
        className="open-register-button"
      >
        Mở đăng ký
      </button>
      <LTK_Register
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      <button
        className="open-register-button"
        onClick={() => setIsLoginOpen(true)}
      >
        Đăng nhập
      </button>
      <LTK_Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <Link to="/admin">Go to admin</Link>
      <Routes>
        <Route path="/admin" element={<LTK_Admin />} />
      </Routes>
    </div>
  );
}

export default LTK_Home;
