import { useEffect, useState } from "react";
import instance from "../../Api/LTK_Api";
import EditModal from "./LTK_ActionAdmin.tsx/LTK_AdminEdit";
import LTK_AddNew from "./LTK_ActionAdmin.tsx/LTK_AdminAddNew";

export default function LTK_AdminCustomers() {
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
    { name: "ltkHoten", label: "Họ tên", type: "text" }, // ✅ Đổi từ "hoTen" thành "ltkHoten"
    { name: "ltkEmail", label: "Email", type: "email" },
    { name: "ltkSodienthoai", label: "Số điện thoại", type: "text" },
    { name: "ltkDiachi", label: "Địa chỉ", type: "text" },
    { name: "ltkNgaysinh", label: "Ngày sinh", type: "date" },
    { name: "ltkNgaytao", label: "Ngày tạo", type: "date" },
    {
      name: "ltkGioitinh",
      label: "Giới tính",
      type: "select",
      options: [
        { value: "True", label: "Nam" },
        { value: "false", label: "Nữ" },
      ],
    },
    {
      name: "ltkTrangthai",
      label: "Trạng thái",
      type: "select",
      options: [
        { value: "True", label: "Hoạt động" },
        { value: "false", label: "Bị khóa" },
      ],
    },
    {
      name: "ltkRole",
      label: "Vai trò",
      type: "select",
      options: [
        { value: "True", label: "Admin" },
        { value: "false", label: "Khách hàng" },
      ],
    },
  ];

  // Lấy danh sách khách hàng
  const fetchData = async () => {
    try {
      const response = await instance.get("/ltkKhachhang");
      console.log("Dữ liệu API trả về:", response.data);

      let rawData = response.data;
      let customers = [];

      // Nếu dữ liệu trả về có "content" (danh sách khách hàng)
      if (Array.isArray(rawData.content)) {
        customers = rawData.content;
      }
      // Nếu API trả về 1 object duy nhất (sau khi thêm mới)
      else if (rawData.ltkMakh) {
        customers = [rawData];
      } else {
        console.error("Dữ liệu API không hợp lệ:", rawData);
      }

      const formattedData = customers.map((item) => ({
        maKH: item.ltkMakh,
        hoTen: item.ltkHoten?.trim() || "Chưa cập nhật",
        email: item.ltkEmail,
        soDienThoai: item.ltkSodienthoai,
        diaChi: item.ltkDiachi,
        ngaySinh: item.ltkNgaysinh
          ? new Date(item.ltkNgaysinh).toISOString().split("T")[0]
          : "Chưa cập nhật",
        ngayTao: item.ltkNgaytao
          ? new Date(item.ltkNgaytao).toISOString().split("T")[0]
          : "Chưa cập nhật",
        gioiTinh: item.ltkGioitinh ? "Nam" : "Nữ",
        trangThai: item.ltkTrangthai ? "Hoạt động" : "Bị khóa",
        role: item.ltkRole ? "Admin" : "Khách hàng",
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
    if (!customer || !customer.maKH) {
      console.error("❌ Lỗi: Khách hàng không có mã hợp lệ!", customer);
      alert("Lỗi: Không tìm thấy mã khách hàng!");
      return;
    }
    setSelectedCustomer(customer);
    setShowEditModal(true);
  };

  const handleDelete = async (maKH) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa khách hàng này?")) {
      try {
        await instance.delete(`/ltkKhachhang/${maKH}`);
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
              <tr key={customer.maKH}>
                <td>{customer.maKH}</td>
                <td>{customer.hoTen}</td>
                <td>{customer.email}</td>
                <td>{customer.soDienThoai}</td>
                <td>{customer.diaChi}</td>
                <td>{customer.ngaySinh || "Chưa cập nhật"}</td>
                <td>{customer.ngayTao || "Chưa cập nhật"}</td>
                <td>{customer.gioiTinh}</td>
                <td>{customer.trangThai}</td>
                <td>{customer.role}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEdit(customer)}
                  >
                    ✏️ Sửa
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(customer.maKH)}
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
