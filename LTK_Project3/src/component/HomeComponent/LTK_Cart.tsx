import React, { useState, useEffect } from "react";
import instance from "../../Api/LTK_Api";
import Footer from "./LTK_Footer";
import Header from "./LTK_Header";
import { NavLink } from "react-router-dom";

interface CartItem {
  maGioHang: number;
  maKhachHang?: number;
  maSanPham: number;
  soLuong: number;
  ngayThem: string;
}

interface Product {
  maSanPham: number;
  tenSanPham: string;
  gia: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const setModalType = (type: string) => {
    console.log("Modal type set to:", type);
  };

  const fetchCartData = async () => {
    try {
      const cartResponse = await instance.get("/ltkGioHang");
      setCartItems(cartResponse.data);
      const productResponse = await instance.get("/ltkSanPham"); // Changed from /api/san-pham
      setProducts(productResponse.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const increaseQuantity = async (maGioHang: number) => {
    const updatedItems = cartItems.map((item) =>
      item.maGioHang === maGioHang
        ? { ...item, soLuong: item.soLuong + 1 }
        : item
    );
    setCartItems(updatedItems);
    try {
      await instance.put(`/ltkGioHang/${maGioHang}`, {
        soLuong: updatedItems.find((item) => item.maGioHang === maGioHang)
          ?.soLuong,
      });
      fetchCartData(); // Refresh cart after update
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const decreaseQuantity = async (maGioHang: number) => {
    const updatedItems = cartItems.map((item) =>
      item.maGioHang === maGioHang && item.soLuong > 1
        ? { ...item, soLuong: item.soLuong - 1 }
        : item
    );
    setCartItems(updatedItems);
    try {
      await instance.put(`/ltkGioHang/${maGioHang}`, {
        soLuong: updatedItems.find((item) => item.maGioHang === maGioHang)
          ?.soLuong,
      });
      fetchCartData(); // Refresh cart after update
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const removeItem = async (maGioHang: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.maGioHang !== maGioHang)
    );
    try {
      await instance.delete(`/ltkGioHang/${maGioHang}`);
      fetchCartData(); // Refresh cart after removal
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const product = products.find((p) => p.maSanPham === item.maSanPham);
      return total + (product ? product.gia * item.soLuong : 0);
    }, 0);
  };

  if (loading) {
    return (
      <>
        <Header setModalType={setModalType} />
        <div>Đang tải giỏ hàng...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header setModalType={setModalType} />
      <div
        className="cart-container"
        style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
      >
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Giỏ hàng của bạn
        </h2>
        {cartItems.length === 0 ? (
          <div
            style={{
              backgroundColor: "#fff3cd",
              border: "1px solid #ffeeba",
              color: "#856404",
              padding: "10px",
              borderRadius: "4px",
            }}
          >
            <span>
              Giỏ hàng trống. Quay lại{" "}
              <NavLink
                to="/products"
                style={{ color: "#007bff", textDecoration: "underline" }}
              >
                cửa hàng
              </NavLink>{" "}
              để mua sắm.
            </span>
          </div>
        ) : (
          <div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                border: "1px solid #ddd",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f5f5f5" }}>
                  <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                    Sản phẩm
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                    Số lượng
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                    Giá
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                    Thành tiền
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  const product = products.find(
                    (p) => p.maSanPham === item.maSanPham
                  );
                  return (
                    <tr
                      key={item.maGioHang}
                      style={{ backgroundColor: "#fff" }}
                    >
                      <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                        {product ? product.tenSanPham : `SP ${item.maSanPham}`}
                      </td>
                      <td
                        style={{
                          border: "1px solid #ddd",
                          padding: "10px",
                          textAlign: "center",
                        }}
                      >
                        <button
                          onClick={() => decreaseQuantity(item.maGioHang)}
                          style={{
                            backgroundColor: "#ddd",
                            border: "1px solid #ccc",
                            padding: "5px 10px",
                            borderRadius: "4px 0 0 4px",
                            cursor: "pointer",
                          }}
                        >
                          -
                        </button>
                        {item.soLuong}
                        <button
                          onClick={() => increaseQuantity(item.maGioHang)}
                          style={{
                            backgroundColor: "#ddd",
                            border: "1px solid #ccc",
                            padding: "5px 10px",
                            borderRadius: "0 4px 4px 0",
                            cursor: "pointer",
                          }}
                        >
                          +
                        </button>
                      </td>
                      <td
                        style={{
                          border: "1px solid #ddd",
                          padding: "10px",
                          textAlign: "center",
                        }}
                      >
                        {product ? product.gia : "N/A"} VNĐ
                      </td>
                      <td
                        style={{
                          border: "1px solid #ddd",
                          padding: "10px",
                          textAlign: "center",
                        }}
                      >
                        {product ? product.gia * item.soLuong : "N/A"} VNĐ
                      </td>
                      <td
                        style={{
                          border: "1px solid #ddd",
                          padding: "10px",
                          textAlign: "center",
                        }}
                      >
                        <button
                          onClick={() => removeItem(item.maGioHang)}
                          style={{
                            backgroundColor: "#dc3545",
                            color: "#fff",
                            padding: "5px 10px",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Tổng tiền: {getTotalPrice()} VNĐ
            </h3>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Thanh toán
            </button>
            <button
              onClick={fetchCartData}
              style={{
                backgroundColor: "#6c757d",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            >
              Làm mới giỏ hàng
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
