import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../LTK_App.css";
import instance from "../Api/LTK_Api";
import LTK_Register from "../component/HomeComponent/LTK_Register";
import LTK_Login from "../component/HomeComponent/LTK_Login";
import Header from "../component/HomeComponent/LTK_Header";
import Footer from "../component/HomeComponent/LTK_Footer";
import Banner from "../component/HomeComponent/LTK_Banner";
import Categories from "../component/HomeComponent/LTK_Categories";

function LTK_Home() {
  const [dataApi, setDataApi] = useState([]);
  const [modalType, setModalType] = useState(null); // "login" | "register" | null

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

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header setModalType={setModalType} />

      {/* Modal hiển thị khi cần */}
      {modalType === "register" && (
        <LTK_Register
          isOpen={true}
          onClose={() => setModalType(null)}
          onSwitchToLogin={() => setModalType("login")}
        />
      )}
      {modalType === "login" && (
        <LTK_Login
          isOpen={true}
          onClose={() => setModalType(null)}
          onSwitchToRegister={() => setModalType("register")}
        />
      )}

      <Banner />
      <Categories />
      <Footer />
    </div>
  );
}

export default LTK_Home;
