import { useEffect, useState } from "react";
import instance from "../../Api/LTK_Api";
import EditModal from "./LTK_ActionAdmin.tsx/LTK_AdminEdit";
import LTK_AddNew from "./LTK_ActionAdmin.tsx/LTK_AdminAddNew";

export default function LTK_KhachHang() {
  const [dataCustomers, setDataCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  type FieldType = {
    name: string;
    label: string;
    type: "text" | "email" | "date" | "select";
    options?: { value: string; label: string }[];
  };

  const fields: FieldType[] = [
    { name: "ltkHoten", label: "Họ tên", type: "text" },
    { name: "ltkEmail", label: "Email", type: "email" },
    { name: "ltkMatkhau", label: "Mật khẩu", type: "password" },
    { name: "ltkSodienthoai", label: "Số điện thoại", type: "text" },
    { name: "ltkDiachi", label: "Địa chỉ", type: "text" },
    { name: "ltkNgaysinh", label: "Ngày sinh", type: "date" },
    { name: "ltkNgaytao", label: "Ngày tạo", type: "date" },

    {
      name: "ltkGioitinh",
      label: "Giới tính",
      type: "select",
      options: [
        { value: "true", label: "Nam" },
        { value: "false", label: "Nữ" },
      ],
    },
    {
      name: "ltkTrangthai",
      label: "Trạng thái",
      type: "select",
      options: [
        { value: "true", label: "Hoạt động" },
        { value: "false", label: "Bị khóa" },
      ],
    },
    {
      name: "ltkRole",
      label: "Vai trò",
      type: "select",
      options: [
        { value: "true", label: "Admin" },
        { value: "false", label: "Khách hàng" },
      ],
    },
  ];

  const fetchData = async () => {
    try {
      const response = await instance.get("/ltkKhachhang");
      console.log("Dữ liệu API trả về:", response.data.content);

      let rawData = response.data;
      let customers = [];

      if (Array.isArray(rawData.content)) {
        customers = rawData.content;
      } else if (rawData.ltkMakh) {
        customers = [rawData];
      } else {
        console.error("Dữ liệu API không hợp lệ:", rawData);
        return;
      }

      const formattedData = customers.map((item) => ({
        ltkMakh: item.ltkMakh,
        ltkHoten: item.ltkHoten?.trim() || "Chưa cập nhật",
        ltkEmail: item.ltkEmail || "",
        ltkSodienthoai: item.ltkSodienthoai || "",
        ltkDiachi: item.ltkDiachi || "",
        ltkNgaysinh: item.ltkNgaysinh
          ? new Date(item.ltkNgaysinh).toISOString().split("T")[0]
          : "",
        ltkNgaytao: item.ltkNgaytao
          ? new Date(item.ltkNgaytao).toISOString().split("T")[0]
          : "",
        ltkGioitinh: item.ltkGioitinh?.toString() || "false",
        ltkTrangthai: item.ltkTrangthai?.toString() || "false",
        ltkRole: item.ltkRole?.toString() || "false",
      }));

      setDataCustomers(formattedData);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu khách hàng:", error);
      setDataCustomers([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (customer) => {
    if (!customer || !customer.ltkMakh) {
      console.error("❌ Lỗi: Khách hàng không có mã hợp lệ!", customer);
      alert("Lỗi: Không tìm thấy mã khách hàng!");
      return;
    }
    setSelectedCustomer(customer);
    setShowEditModal(true);
  };

  const handleDelete = async (ltkMakh) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa khách hàng này?")) {
      try {
        await instance.delete(`/ltkKhachhang/${ltkMakh}`);
        alert("Xóa thành công!");
        fetchData();
      } catch (error) {
        console.error("Lỗi khi xóa khách hàng:", error);
        alert("Xóa thất bại, vui lòng thử lại!");
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Danh sách khách hàng</h1>
        <button
          className="btn btn-success"
          onClick={() => setShowAddModal(true)}
        >
          ➕ Thêm khách hàng
        </button>
      </div>

      <table className="table table-striped table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Mã KH</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Ngày sinh</th>
            <th>Ngày tạo</th>
            <th>Giới tính</th>
            <th>Trạng thái</th>
            <th>Vai trò</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {dataCustomers.length > 0 ? (
            dataCustomers.map((customer) => (
              <tr key={customer.ltkMakh}>
                <td>{customer.ltkMakh}</td>
                <td>{customer.ltkHoten}</td>
                <td>{customer.ltkEmail}</td>
                <td>{customer.ltkSodienthoai}</td>
                <td>{customer.ltkDiachi}</td>
                <td>{customer.ltkNgaysinh || "Chưa cập nhật"}</td>
                <td>{customer.ltkNgaytao || "Chưa cập nhật"}</td>
                <td>{customer.ltkGioitinh === "true" ? "Nam" : "Nữ"}</td>
                <td>
                  {customer.ltkTrangthai === "true" ? "Hoạt động" : "Bị khóa"}
                </td>
                <td>{customer.ltkRole === "true" ? "Admin" : "Khách hàng"}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEdit(customer)}
                  >
                    ✏️ Sửa
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(customer.ltkMakh)}
                  >
                    ❌ Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={11} className="text-center text-danger fw-bold">
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showEditModal && (
        <EditModal
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          data={selectedCustomer}
          endpoint="/ltkKhachhang"
          fields={fields}
          onSuccess={fetchData}
          idField="ltkMakh"
        />
      )}
      {showAddModal && (
        <LTK_AddNew
          show={showAddModal}
          handleClose={() => setShowAddModal(false)}
          endpoint="/ltkKhachhang"
          onSuccess={fetchData}
          fields={fields}
        />
      )}
    </div>
  );
}
