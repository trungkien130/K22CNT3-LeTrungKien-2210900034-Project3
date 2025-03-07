import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import instance from "../../../Api/LTK_Api";

const EditModal = ({
  show,
  handleClose,
  data,
  endpoint,
  fields = [],
  onSuccess,
}) => {
  const [formData, setFormData] = useState({});

  console.log("📌 Fields:", fields);
  console.log("📌 Data:", data);

  // Cập nhật formData dựa trên data và fields
  useEffect(() => {
    if (!data || Object.keys(data).length === 0) {
      console.warn("🚨 Không có dữ liệu để hiển thị!");
      return;
    }

    const formatDate = (date) => {
      if (!date || date === "Chưa cập nhật") return "";
      const parsedDate = new Date(date);
      return isNaN(parsedDate.getTime())
        ? ""
        : parsedDate.toISOString().split("T")[0];
    };

    // Ánh xạ dữ liệu từ `data` sang `formData` dựa trên `fields`, loại bỏ ID
    const formattedData = {};
    fields.forEach((field) => {
      const fieldName = field.name;
      let value =
        data[fieldName] ?? data[fieldName.replace("ltk", "").toLowerCase()];

      // Không bao gồm ID trong formData nếu nó là 'maSP' hoặc 'ltkMakh'
      if (fieldName === "maSP" || fieldName === "ltkMakh") {
        return; // Bỏ qua ID
      }

      // Format giá trị theo loại trường
      if (field.type === "date") {
        value = formatDate(value);
      } else if (field.type === "select") {
        if (fieldName === "ltkGioitinh") {
          value = data.gioiTinh === "Nam" ? "True" : "false";
        } else if (fieldName === "ltkTrangthai") {
          value = data.trangThai === "Hoạt động" ? "True" : "false";
        } else if (fieldName === "ltkRole") {
          value = data.role === "Admin" ? "True" : "false";
        }
      } else if (field.type === "number") {
        value = value != null ? Number(value) : 0; // Chuyển thành số
      } else {
        value = value ?? "";
      }

      formattedData[fieldName] = value;
    });

    console.log("🔄 Dữ liệu đã format:", formattedData);
    setFormData(formattedData);
  }, [data, fields]);

  // Xử lý thay đổi dữ liệu
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Nếu là trường số, chuyển đổi giá trị thành số
    const updatedValue =
      fields.find((field) => field.name === name)?.type === "number"
        ? Number(value)
        : value;
    setFormData((prev) => ({ ...prev, [name]: updatedValue }));
  };

  // Xử lý gửi dữ liệu lên server
  const handleSubmit = async () => {
    // Tạo payload mới, đảm bảo không có maSP hoặc ltkMakh
    const payload = { ...formData };
    delete payload.maSP;
    delete payload.ltkMakh;

    console.log("📤 Dữ liệu gửi lên BE:", JSON.stringify(payload, null, 2));

    const id = data.maSP || data.maKH || data.ltkMakh; // Lấy ID từ data ban đầu
    if (!id) {
      alert("Lỗi: Không tìm thấy ID!");
      return;
    }

    try {
      const response = await instance.put(`${endpoint}/${id}`, payload);
      console.log("✅ Cập nhật thành công:", response.data);
      alert("Cập nhật thành công!");
      handleClose();
      if (onSuccess) onSuccess(); // Gọi hàm làm mới danh sách
    } catch (error) {
      console.error("❌ Lỗi khi cập nhật:", error.response?.data || error);
      alert("Cập nhật thất bại!");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>✏️ Chỉnh sửa thông tin</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {fields.length > 0 ? (
            fields.map(({ name, label, type, options }, index) => {
              // Không hiển thị trường ID trong form
              if (name === "maSP" || name === "ltkMakh") return null;

              return (
                <Form.Group key={name || `field-${index}`} className="mb-3">
                  <Form.Label>{label}</Form.Label>
                  {type === "select" ? (
                    <Form.Select
                      name={name}
                      value={formData[name] ?? ""}
                      onChange={handleChange}
                    >
                      {options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </Form.Select>
                  ) : (
                    <Form.Control
                      type={type}
                      name={name}
                      value={formData[name] ?? ""}
                      onChange={handleChange}
                    />
                  )}
                </Form.Group>
              );
            })
          ) : (
            <p className="text-danger">⚠️ Không có dữ liệu để hiển thị!</p>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Lưu thay đổi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
