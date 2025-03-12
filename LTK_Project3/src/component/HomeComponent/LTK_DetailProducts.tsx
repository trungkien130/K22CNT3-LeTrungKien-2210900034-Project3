import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../../Api/LTK_Api";
import Header from "./LTK_Header";
import Footer from "./LTK_Footer";

const LTK_DetailProducts = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductDetail() {
      try {
        const response = await instance.get(`/ltkSanpham/${id}`);
        console.log("API Response:", response.data); // Log để kiểm tra
        setProduct(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
      }
    }
    fetchProductDetail();
  }, [id]);

  if (!product) return <p>Đang tải...</p>;

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.hinhAnh || "https://via.placeholder.com/400"}
              alt={product.tenSP}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">{product.tenSP}</h2>
            <p className="text-muted">
              Giá: <strong>{product.gia.toLocaleString()} VND</strong>
            </p>
            <p>{product.moTa}</p>
            <button className="btn btn-primary">Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LTK_DetailProducts;
