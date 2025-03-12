import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBox, FaUsers } from "react-icons/fa"; // Thêm icon cho sản phẩm và khách hàng
import instance from "../../Api/LTK_Api";

const Sidebar = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    instance
      .get("/ltkKhachhang")
      .then((response) => {
        console.log("Data fetched:", response.data);
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customers:", error);
      });
  }, []);

  return (
    <div
      className="d-flex flex-column p-3 text-white bg-dark"
      style={{ width: "250px" }}
    >
      <h4>Admin Page</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              isActive ? "nav-link text-white active" : "nav-link text-white"
            }
          >
            Trang chủ
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin/adminProducts"
            className={({ isActive }) =>
              isActive ? "nav-link text-white active" : "nav-link text-white"
            }
          >
            <FaBox className="me-2" /> Danh Sách Sản Phẩm
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin/adminKhachHang"
            className={({ isActive }) =>
              isActive ? "nav-link text-white active" : "nav-link text-white"
            }
          >
            <FaUsers className="me-2" />
            Danh Sách Khách Hàng
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink
            to="/admin/widgets"
            className={({ isActive }) =>
              isActive ? "nav-link text-white active" : "nav-link text-white"
            }
          >
            📌 Widgets
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
