import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import instance from "../../../Api/LTK_Api";

const EditModal = ({
  show,
  handleClose,
  data,
  endpoint,
  fields,
  onSuccess,
  idField = "ltkMakh", // Thêm prop idField với giá trị mặc định
}) => {
  const [formData, setFormData] = useState(() =>
    fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  useEffect(() => {
    if (data) {
      const updatedFormData = fields.reduce((acc, field) => {
        const key = field.name;
        acc[key] = data[key] !== undefined ? data[key] : "";
        if (field.type === "password") {
          acc[key] = ""; // Không điền trước mật khẩu
        }
        return acc;
      }, {});
      setFormData(updatedFormData);
      console.log("formData sau khi set:", updatedFormData);
    }
  }, [data, fields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      // Kiểm tra mật khẩu nếu có trường mật khẩu trong fields
      const passwordField = fields.find((field) => field.type === "password");
      if (
        passwordField &&
        formData[passwordField.name] &&
        formData[passwordField.name].length < 6
      ) {
        alert("Mật khẩu phải có ít nhất 6 ký tự!");
        return;
      }

      // Sử dụng idField động thay vì cứng ltkMakh
      await instance.put(`${endpoint}/${data[idField]}`, formData);
      alert("Cập nhật thành công!");
      onSuccess();
      handleClose();
    } catch (error) {
      console.error(
        "❌ Lỗi khi cập nhật:",
        error.response?.data || error.message
      );
      alert(
        "Cập nhật thất bại: " +
          (error.response?.data?.message || "Vui lòng thử lại!")
      );
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>✏️ Chỉnh sửa thông tin</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {fields.map(({ name, label, type, options }) => (
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
                  required={
                    type !== "date" && type !== "select" && type !== "password" // Mật khẩu không bắt buộc
                  }
                  minLength={type === "password" ? 6 : undefined}
                  placeholder={
                    type === "password"
                      ? "Nhập mật khẩu mới (tùy chọn)"
                      : `Nhập ${label}`
                  }
                />
              )}
              {type === "password" && (
                <Form.Text className="text-muted">
                  Để trống nếu không muốn thay đổi mật khẩu.
                </Form.Text>
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
          Lưu thay đổi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
