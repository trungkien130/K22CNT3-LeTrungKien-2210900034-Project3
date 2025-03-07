import { useEffect, useState } from "react";
import instance from "../../Api/LTK_Api";
import EditModal from "./LTK_ActionAdmin.tsx/LTK_AdminEdit";
import LTK_AddNew from "./LTK_ActionAdmin.tsx/LTK_AdminAddNew";

export default function LTK_SanPham() {
  const [dataProducts, setDataProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const fields = [
    { name: "tenSP", label: "Tên sản phẩm", type: "text" },
    { name: "moTa", label: "Mô tả", type: "text" },
    { name: "gia", label: "Giá", type: "number" },
    { name: "soLuongTon", label: "Số lượng", type: "number" },
    { name: "maKho", label: "Mã kho", type: "number" },
    { name: "maNCC", label: "Mã nhà cung cấp", type: "number" },
    { name: "maKM", label: "Khuyến mãi", type: "number" },
    { name: "hinhAnh", label: "Hình ảnh (URL)", type: "text" },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await instance.get("/ltkSanpham");
      setDataProducts(response.data);
      console.log("Dữ liệu sản phẩm:", response.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const handleDelete = async (maSP) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?"))
      return;

    try {
      await instance.delete(`/ltkSanpham/${maSP}`);
      alert("Xóa sản phẩm thành công!");
      fetchData();
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
      alert("Xóa sản phẩm thất bại!");
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Danh sách sản phẩm</h1>
        <button
          className="btn btn-success"
          onClick={() => setShowAddModal(true)}
        >
          ➕ Thêm sản phẩm
        </button>
      </div>

      <table className="table table-striped table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Mã SP</th>
            <th>Tên sản phẩm</th>
            <th>Mô tả</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Mã kho</th>
            <th>Mã NCC</th>
            <th>Khuyến mãi</th>
            <th>Hình ảnh</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {dataProducts.map((product) => (
            <tr key={product.maSP}>
              <td>{product.maSP}</td>
              <td>{product.tenSP}</td>
              <td>{product.moTa}</td>
              <td>{product.gia.toLocaleString()} VND</td>
              <td>{product.soLuongTon}</td>
              <td>{product.maKho}</td>
              <td>{product.maNCC}</td>
              <td>{product.maKM}</td>
              <td>
                <img
                  src={product.hinhAnh}
                  alt={product.tenSP}
                  width="50"
                  height="50"
                />
              </td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleEdit(product)}
                >
                  ✏️ Sửa
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(product.maSP)}
                >
                  ❌ Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditModal && (
        <EditModal
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          data={selectedProduct}
          endpoint="/ltkSanpham"
          fields={fields} // Truyền fields vào EditModal
          onSuccess={fetchData}
        />
      )}

      {showAddModal && (
        <LTK_AddNew
          show={showAddModal}
          handleClose={() => setShowAddModal(false)}
          endpoint="/ltkSanpham"
          onSuccess={fetchData}
          fields={fields}
        />
      )}
    </div>
  );
}
