import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../LTK_App.css";
import instance from "../Api/LTK_Api";
import LTK_Header from "../component/HomeComponent/LTK_Header";
import LTK_Footer from "../component/HomeComponent/LTK_Footer";
import Categories from "../component/HomeComponent/LTK_Categories";
import { useAuth } from "../Api/LTK_AuthContext";
import LTK_Banner from "../component/HomeComponent/LTK_Banner";

function LTK_Home() {
  const [dataApi, setDataApi] = useState([]);
  const { setModalType } = useAuth();

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
      <LTK_Header setModalType={setModalType} />
      <LTK_Banner />
      <Categories />
      <LTK_Footer />
    </div>
  );
}

export default LTK_Home;
