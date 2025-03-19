import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import "../../css/ltkStyle.css";
import LTK_Header from "./LTK_Header"; // Ensure LTK_Header is imported
import LTK_Footer from "./LTK_Footer"; // Ensure LTK_Footer is imported
import instance from "../../Api/LTK_Api";
import { useAuth } from "../../Api/LTK_AuthContext";

interface CartItem {
  maGioHang: number;
  maSanPham: number;
  soLuong: number;
}

interface Product {
  maSP: number;
  tenSP: string;
  gia: number;
}

const LTK_Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { setModalType } = useAuth();
  const fetchCartData = async () => {
    try {
      setLoading(true);
      const [cartRes, productRes] = await Promise.all([
        instance.get("/ltkGiohang"),
        instance.get("/ltkSanpham"),
      ]);

      console.log("Cart data:", cartRes.data);
      console.log("Product data:", productRes.data);

      // Handle cart data
      const cartData = cartRes.data.content || cartRes.data;
      setCartItems(Array.isArray(cartData) ? cartData : []);

      // Handle product data
      const productData = productRes.data.content || productRes.data;
      setProducts(Array.isArray(productData) ? productData : []);
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setCartItems([]);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const updateQuantity = async (
    maGioHang: number,
    newQuantity: number,
    maSanPham: number
  ) => {
    try {
      // Optimistically update the local state
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.maGioHang === maGioHang
            ? { ...item, soLuong: newQuantity }
            : item
        )
      );

      await instance.put(`/ltkGiohang/${maGioHang}`, {
        soLuong: newQuantity,
        maSanPham,
      });

      await fetchCartData();
    } catch (error) {
      console.error("Lỗi khi cập nhật số lượng:", error);
      await fetchCartData();
      alert("Cập nhật số lượng thất bại. Vui lòng thử lại!");
    }
  };

  const increaseQuantity = (maGioHang: number, maSanPham: number) => {
    const item = cartItems.find((item) => item.maGioHang === maGioHang);
    if (item) {
      const newQuantity = item.soLuong + 1;
      updateQuantity(maGioHang, newQuantity, maSanPham);
    }
  };

  const decreaseQuantity = (maGioHang: number, maSanPham: number) => {
    const item = cartItems.find((item) => item.maGioHang === maGioHang);
    if (item && item.soLuong > 1) {
      const newQuantity = item.soLuong - 1;
      updateQuantity(maGioHang, newQuantity, maSanPham);
    }
  };

  const removeItem = async (maGioHang: number) => {
    try {
      await instance.delete(`/ltkGiohang/${maGioHang}`);
      await fetchCartData();
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
      alert("Xóa sản phẩm thất bại. Vui lòng thử lại!");
    }
  };

  const getProductById = (maSanPham: number) => {
    return products.find((product) => product.maSP === maSanPham);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const product = getProductById(item.maSanPham);
      return total + (product ? product.gia * item.soLuong : 0);
    }, 0);
  };

  return (
    <>
      <LTK_Header setModalType={setModalType} />
      <div className="cart-container">
        <h2>Giỏ Hàng Của Bạn</h2>
        {loading ? (
          <p>Đang tải...</p>
        ) : cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>
              Giỏ hàng của bạn đang trống. Quay lại{" "}
              <NavLink to="/products">trang sản phẩm</NavLink> để tiếp tục mua
              sắm!
            </p>
          </div>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá</th>
                  <th>Thành tiền</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  const product = getProductById(item.maSanPham);
                  return (
                    <tr key={item.maGioHang}>
                      <td>
                        {product ? product.tenSP : "Sản phẩm không xác định"}
                      </td>
                      <td>
                        <button
                          className="quantity-btn"
                          onClick={() =>
                            decreaseQuantity(item.maGioHang, item.maSanPham)
                          }
                        >
                          -
                        </button>
                        <span>{item.soLuong}</span>
                        <button
                          className="quantity-btn"
                          onClick={() =>
                            increaseQuantity(item.maGioHang, item.maSanPham)
                          }
                        >
                          +
                        </button>
                      </td>
                      <td>
                        {product
                          ? product.gia.toLocaleString() + " VNĐ"
                          : "N/A"}
                      </td>
                      <td>
                        {product
                          ? (product.gia * item.soLuong).toLocaleString() +
                            " VNĐ"
                          : "N/A"}
                      </td>
                      <td>
                        <button
                          className="remove-button"
                          onClick={() => removeItem(item.maGioHang)}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h3>Tổng tiền: {getTotalPrice().toLocaleString()} VNĐ</h3>
          </>
        )}
      </div>
      <LTK_Footer />
    </>
  );
};

export default LTK_Cart;
