import { useState, useEffect } from "react";

const Interface = {
  name: "",
  email: "",
  password: "",
  dateBirth: "",
  PhoneNum: "",
  gender: "",
  createDay: "", // Ngày tạo tự động
};

export default function LTK_App() {
  const [RegisterData, SetRegisterData] = useState(Interface);

  // ✅ Tự động lấy ngày giờ hiện tại khi load trang
  useEffect(() => {
    SetRegisterData((prevData) => ({
      ...prevData,
      createDay: getCurrentTimeVN(), // Cập nhật ngày tạo
    }));
  }, []);

  // ✅ Hàm lấy thời gian hiện tại (định dạng dd/MM/yyyy HH:mm)
  const getCurrentTimeVN = () => {
    return new Intl.DateTimeFormat("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date());
  };
  // @ts-ignore
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    SetRegisterData((prevData) => ({
      ...prevData,
      [name]: name === "PhoneNum" ? Number(value) : value,
    }));
  };

  return (
    <div className="RegisterForm">
      <input
        type="text"
        name="name"
        value={RegisterData.name}
        onChange={handleInputChange}
        placeholder="Nhập họ và tên"
      />
      <input
        type="email"
        name="email"
        value={RegisterData.email}
        onChange={handleInputChange}
        placeholder="Nhập email"
      />
      <input
        type="date"
        name="dateBirth"
        value={RegisterData.dateBirth}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="PhoneNum"
        value={RegisterData.PhoneNum}
        onChange={handleInputChange}
        placeholder="Nhập số điện thoại"
      />
      <select
        name="gender"
        value={RegisterData.gender}
        onChange={handleInputChange}
      >
        <option value="">Chọn giới tính</option>
        <option value="male">Nam</option>
        <option value="female">Nữ</option>
        <option value="other">Khác</option>
      </select>

      <input type="hidden" name="createDay" value={RegisterData.createDay} />

      <button onClick={() => console.log(RegisterData)}>Đăng ký</button>
    </div>
  );
}
