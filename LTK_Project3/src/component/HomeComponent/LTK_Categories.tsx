import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import instance from "../../Api/LTK_Api";
import Header from "./LTK_Header";
import Footer from "./LTK_Footer";

const LTK_Categories = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("none");
  const location = useLocation();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await instance.get("/ltkSanpham");
        setProducts(response.data);
        console.log(response);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    }
    fetchProducts();
  }, []);

  const filteredAndSortedProducts = products
    .filter((product) =>
      product.tenSP.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.gia - b.gia;
      if (sortOrder === "desc") return b.gia - a.gia;
      return 0;
    });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const addToCart = async (maSanPham) => {
    try {
      await instance.post("/ltkGioHang", {
        maSanPham,
        soLuong: 1,
      });
      alert("Thêm vào giỏ hàng thành công!");
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
      alert(
        "Thêm vào giỏ hàng thất bại: " +
          (error.response?.data?.message || "Vui lòng thử lại!")
      );
    }
  };

  return (
    <>
      {location.pathname === "/products" && <Header />}
      <div className="container my-5">
        <h2 className="text-center mb-4">Danh Sách Sản Phẩm</h2>
        <div className="row mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="none">Sắp xếp theo giá</option>
              <option value="asc">Giá: Thấp đến Cao</option>
              <option value="desc">Giá: Cao đến Thấp</option>
            </select>
          </div>
        </div>
        <div className="row">
          {filteredAndSortedProducts.length > 0 ? (
            filteredAndSortedProducts.map((product, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card text-center p-3 shadow-sm product-card">
                  <NavLink
                    to={`/productDetail/${product.maSP}`}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={product.hinhAnh}
                      alt={product.tenSP}
                      className="img-fluid mb-2 img-Products"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <h5 className="card-title">{product.tenSP}</h5>
                    <p className="card-text text-muted">
                      {product.gia.toLocaleString()} VND
                    </p>
                  </NavLink>
                  <div className="hover-buttons">
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => addToCart(product.maSP)}
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <NavLink
                      to={`/productDetail/${product.maSP}`}
                      className="btn btn-secondary"
                    >
                      View Detail
                    </NavLink>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Không có sản phẩm nào!</p>
          )}
        </div>
      </div>
      {location.pathname === "/products" && <Footer />}
    </>
  );
};

export default LTK_Categories;
