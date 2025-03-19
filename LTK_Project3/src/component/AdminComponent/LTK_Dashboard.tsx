import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import instance from "../../Api/LTK_Api";

const LTK_Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    customers: 0,
    products: 0,
    carts: 0, // Thêm giỏ hàng
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);

        const [customersRes, productsRes, cartsRes] = await Promise.all([
          instance.get("/ltkKhachhang"),
          instance.get("/ltkSanpham"),
          instance.get("/ltkGiohang"), // API lấy giỏ hàng
        ]);

        setDashboardData({
          customers: customersRes.data.content.length || 0,
          products: productsRes.data.length || 0,
          carts: cartsRes.data.content.length || 0, // Lấy số lượng giỏ hàng
        });
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu Dashboard:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const displayData = [
    {
      title: "Tổng số khách hàng",
      value: dashboardData.customers.toLocaleString(),
      link: "/admin/adminKhachHang",
    },
    {
      title: "Tổng số sản phẩm",
      value: dashboardData.products.toLocaleString(),
      link: "/admin/adminProducts",
    },
    {
      title: "Tổng số giỏ hàng", // Thêm giỏ hàng vào danh sách
      value: dashboardData.carts.toLocaleString(),
      link: "/admin/adminCarts",
    },
  ];

  if (isLoading) {
    return (
      <div className="container mt-3">
        <h2>Trang chủ</h2>
        <div className="text-center">Đang tải dữ liệu...</div>
      </div>
    );
  }

  return (
    <div className="container mt-3">
      <h2>Trang chủ</h2>
      <div className="row gap-3 justify-content-center">
        {displayData.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3">
            <Link to={item.link} className="text-decoration-none">
              <div className="card text-center p-3 shadow-sm rounded">
                <h4>{item.title}</h4>
                <p className="fw-bold">{item.value}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LTK_Dashboard;
