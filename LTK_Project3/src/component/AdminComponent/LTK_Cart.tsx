import React, { useEffect, useState } from "react";
import instance from "../../Api/LTK_Api";
import { useNavigate } from "react-router-dom";

interface CartItem {
  maGioHang: string;
  maSanPham: string;
  tenSP?: string; // Sẽ được cập nhật sau khi fetch sản phẩm
  gia?: number;
  soLuong: number;
}

const LTK_Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await instance.get("/ltkGiohang");
      const cartData = response.data.content; // API trả về danh sách giỏ hàng

      if (!Array.isArray(cartData)) {
        setCartItems([]);
        return;
      }

      // Gọi API để lấy thông tin chi tiết của từng sản phẩm
      const updatedCart = await Promise.all(
        cartData.map(async (item) => {
          try {
            const productResponse = await instance.get(
              `/ltkSanpham/${item.maSanPham}`
            );
            return {
              ...item,
              tenSP: productResponse.data.tenSP, // Cập nhật tên sản phẩm
              gia: productResponse.data.gia, // Cập nhật giá sản phẩm
            };
          } catch (error) {
            console.error(`Lỗi khi lấy sản phẩm ${item.maSanPham}:`, error);
            return { ...item, tenSP: "Không tìm thấy", gia: 0 };
          }
        })
      );

      setCartItems(updatedCart);
    } catch (error) {
      console.error("Lỗi khi lấy giỏ hàng:", error);
      setCartItems([]);
    }
  };

  const handleRemoveItem = async (maSanPham: string) => {
    if (
      !window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")
    )
      return;

    try {
      await instance.delete(`/ltkCart/${maSanPham}`);
      alert("Đã xóa sản phẩm khỏi giỏ hàng!");
      fetchCart(); // Cập nhật lại giỏ hàng sau khi xóa
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
      alert("Xóa sản phẩm thất bại!");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">🛒 Giỏ hàng của bạn</h1>

      <div className="d-flex justify-content-start mb-3">
        <button className="btn btn-primary" onClick={() => navigate("/admin")}>
          Trở về Dashboard
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Giỏ hàng trống!</p>
      ) : (
        <table className="table table-striped text-center">
          <thead className="table-dark">
            <tr>
              <th>Mã SP</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.maGioHang}>
                <td>{item.maSanPham}</td>
                <td>{item.tenSP || "Đang tải..."}</td>
                <td>{item.gia ? `${item.gia.toLocaleString()} VND` : "N/A"}</td>
                <td>{item.soLuong}</td>
                <td>
                  {item.gia
                    ? (item.gia * item.soLuong).toLocaleString()
                    : "N/A"}{" "}
                  VND
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveItem(item.maSanPham)}
                  >
                    ❌ Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LTK_Cart;
