import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import instance from "../../Api/LTK_Api";
import LTK_Header from "./LTK_Header";
import LTK_Footer from "./LTK_Footer";
import { useAuth } from "../../Api/LTK_AuthContext";

const LTK_DetailProducts = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { setModalType } = useAuth();

  const addToCart = async (maSanPham) => {
    console.log("maSanPham:", maSanPham);
    if (!maSanPham) {
      alert("Mã sản phẩm không hợp lệ!");
      return;
    }
    try {
      await instance.post("/ltkGiohang", {
        maSanPham: id,
        soLuong: quantity,
      });
      alert("Thêm vào giỏ hàng thành công!");
      setQuantity(1);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Vui lòng thử lại!";
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
      alert(`Thêm vào giỏ hàng thất bại: ${errorMessage}`);
    }
  };
  const param = useParams();
  useEffect(() => {
    const fetchProductDetail = async () => {
      setIsLoading(true);
      try {
        const response = await instance.get(`/ltkSanpham/${id}`);
        setProduct(response.data);
        setError(null);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
        setError("Không thể tải thông tin sản phẩm");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProductDetail();
  }, [id]);

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

  if (!product) {
    return <p className="text-center my-5">Không tìm thấy sản phẩm</p>;
  }

  return (
    <>
      <LTK_Header setModalType={setModalType} />
      <main className="container my-5" aria-label="Chi tiết sản phẩm">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card">
              <img
                src={product.hinhAnh || "https://via.placeholder.com/400"}
                alt={product.tenSP}
                className="card-img-top object-fit-cover"
                style={{ maxHeight: "400px" }}
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3">
              <h2 className="fw-bold mb-3">{product.tenSP}</h2>
              <p className="text-muted mb-2">
                Giá:{" "}
                <strong className="text-danger">
                  {product.gia.toLocaleString()} VND
                </strong>
              </p>
              <p className="text-break">{product.moTa}</p>
              <div className="mb-3">
                <label htmlFor="quantity" className="me-2">
                  Số lượng:
                </label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value)))
                  }
                  className="form-control w-25 d-inline-block"
                  aria-label="Số lượng sản phẩm"
                />
              </div>
              <button
                className="btn btn-primary btn-lg mt-3"
                onClick={() => addToCart(id)}
                disabled={isLoading}
                aria-label={`Thêm ${product.tenSP} vào giỏ hàng`}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </main>
      <LTK_Footer />
    </>
  );
};

LTK_DetailProducts.propTypes = {
  setModalType: PropTypes.func,
};

export default LTK_DetailProducts;
