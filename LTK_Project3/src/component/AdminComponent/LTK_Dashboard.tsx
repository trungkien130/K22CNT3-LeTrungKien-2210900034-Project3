import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import instance from "../../Api/LTK_Api";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    customers: 0,
    products: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        // Chỉ fetch từ ltkKhachhang và ltkSanpham
        const [customersRes, productsRes] = await Promise.all([
          instance.get("/ltkKhachhang"),
          instance.get("/ltkSanpham"),
        ]);

        // Đếm số lượng từ dữ liệu nhận được
        const customersCount = customersRes.data.content.length || 0;
        const productsCount = productsRes.data.length || 0;
        console.log(customersRes);
        setDashboardData({
          customers: customersCount,
          products: productsCount,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
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
  ];

  if (isLoading) {
    return (
      <div className="container mt-3">
        <h2>Trang chủ </h2>
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

export default Dashboard;
