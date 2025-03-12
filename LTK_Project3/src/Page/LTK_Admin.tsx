import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../component/AdminComponent/LTK_Sidebar";
import Navbar from "../component/AdminComponent/LTK_NavAdmin";
import Dashboard from "../component/AdminComponent/LTK_Dashboard";
import LTK_AdminProducts from "../component/AdminComponent/LTK_Products";
import LTK_AdminCustomers from "../component/AdminComponent/LTK_KhachHang";

function LTK_Admin() {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3 vh-100">
        <Sidebar />
      </div>

      {/* Nội dung chính */}
      <div className="d-flex flex-column flex-grow-1">
        {/* Navbar */}
        <Navbar />

        {/* Outlet để render route con */}
        <div className="flex-grow-1 p-3 overflow-auto">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="adminProducts" element={<LTK_AdminProducts />} />
            <Route path="adminKhachhang" element={<LTK_AdminCustomers />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default LTK_Admin;
