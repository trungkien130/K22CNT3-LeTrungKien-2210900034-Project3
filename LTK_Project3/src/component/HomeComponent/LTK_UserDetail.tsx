import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../Api/LTK_Api";
import LTK_Header from "./LTK_Header";
import LTK_Footer from "./LTK_Footer";

const LTK_UserDetail = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Lấy email từ localStorage và mã hóa
  const LocalData = localStorage.getItem("user");
  const userEmail = LocalData ? JSON.parse(LocalData).email : null;

  useEffect(() => {
    if (!userEmail) {
      setError("Không tìm thấy email trong localStorage.");
      setIsLoading(false);
      return;
    }

    const fetchUserDetail = async () => {
      try {
        const response = await instance.get(
          `/ltkKhachhang/ltk_email/${userEmail}`
        );
        console.log(response.data);
        setUser(response.data);
        setError(null);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết người dùng:", error);
        setError("Không thể tải thông tin người dùng.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDetail();
  }, [userEmail]);
  if (isLoading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center my-5">
        <p className="text-danger">{error}</p>
        <button
          className="btn btn-secondary"
          onClick={() => window.location.reload()}
        >
          Thử lại
        </button>
      </div>
    );
  }

  if (!user) {
    return <p className="text-center my-5">Không tìm thấy người dùng</p>;
  }

  return (
    <>
      <LTK_Header />
      <main className="container my-5">
        <div className="card p-4 shadow-lg">
          <h2 className="fw-bold text-center mb-3">Chi tiết người dùng</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Tên:</strong> {user.ltkHoten}
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> {user.ltkEmail}
            </li>
            <li className="list-group-item">
              <strong>Số điện thoại:</strong>{" "}
              {user.ltkSodienthoai || "Không có"}
            </li>
            <li className="list-group-item">
              <strong>Ngày sinh:</strong> {user.ltkNgaysinh || "Không có"}
            </li>
            <li className="list-group-item">
              <strong>Địa chỉ:</strong> {user.ltkDiachi || "Không có"}
            </li>
            <li className="list-group-item">
              <strong>Giới tính:</strong> {user.ltkGioitinh ? "Nam" : "Nữ"}
            </li>
          </ul>
          <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
            Quay lại
          </button>
        </div>
      </main>
      <LTK_Footer />
    </>
  );
};

export default LTK_UserDetail;
