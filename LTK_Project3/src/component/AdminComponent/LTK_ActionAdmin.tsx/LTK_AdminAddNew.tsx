import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import instance from "../../../Api/LTK_Api";

const LTK_AddNew = ({ show, handleClose, endpoint, fields, onSuccess }) => {
  // Lọc bỏ các trường không mong muốn
  const filteredFields = fields.filter(
    (field) => !["maKho", "maNhaCungCap", "maKhuyenMai"].includes(field.name)
  );

  const [formData, setFormData] = useState(() =>
    filteredFields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  useEffect(() => {
    if (!show) {
      // Reset form when modal closes
      setFormData(
        filteredFields.reduce((acc, field) => {
          acc[field.name] = "";
          return acc;
        }, {})
      );
    }
  }, [show, filteredFields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate required fields
      const requiredFields = filteredFields.filter(
        (field) => field.type !== "date"
      );
      const missingFields = requiredFields.filter(
        (field) => !formData[field.name].trim()
      );
      if (missingFields.length > 0) {
        alert(
          `Vui lòng điền đầy đủ các trường bắt buộc: ${missingFields
            .map((f) => f.label)
            .join(", ")}`
        );
        return;
      }

      // Ensure email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (formData.ltkEmail && !emailRegex.test(formData.ltkEmail)) {
        alert("Email không hợp lệ!");
        return;
      }

      // Send POST request
      const response = await instance.post(endpoint, formData);
      console.log("Thêm mới thành công:", response.data);
      alert("Thêm mới thành công!");
      onSuccess();
      handleClose();
    } catch (error) {
      console.error(
        "❌ Lỗi khi thêm mới:",
        error.response?.data || error.message
      );
      alert(
        "Thêm mới thất bại: " +
          (error.response?.data?.message ||
            "Vui lòng kiểm tra dữ liệu và thử lại!")
      );
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>➕ Thêm khách hàng mới</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {filteredFields.map(({ name, label, type, options }) => (
            <Form.Group key={name} className="mb-3">
              <Form.Label>{label}</Form.Label>
              {type === "select" ? (
                <Form.Select
                  name={name}
                  value={formData[name] || ""}
                  onChange={handleChange}
                >
                  <option value="">Chọn {label}</option>
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
                  value={formData[name] || ""}
                  onChange={handleChange}
                  required={type !== "date"} // Optional for date fields
                  placeholder={`Nhập ${label}`}
                />
              )}
            </Form.Group>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Thêm mới
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LTK_AddNew;
