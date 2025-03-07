import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import instance from "../../../Api/LTK_Api";

interface AddNewProps {
  show: boolean;
  handleClose: () => void;
  endpoint: string;
  fields: {
    name: string;
    label: string;
    type: string;
    options?: { value: any; label: string }[];
  }[];
  onSuccess: () => void;
}

const LTK_AddNew: React.FC<AddNewProps> = ({
  show,
  handleClose,
  endpoint,
  fields,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Xử lý thay đổi input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gửi dữ liệu lên API để thêm mới
  const handleSubmit = async () => {
    console.log("📤 Dữ liệu gửi lên BE:", formData);

    // Kiểm tra xem có trường nào bị thiếu không
    const missingFields = fields.filter(
      (field) => !formData[field.name] || formData[field.name].trim() === ""
    );

    if (missingFields.length > 0) {
      const missingFieldNames = missingFields
        .map((field) => field.label)
        .join(", ");
      console.error("❌ Lỗi: Thiếu dữ liệu:", missingFieldNames);
      alert(`Vui lòng nhập đầy đủ thông tin: ${missingFieldNames}`);
      return;
    }

    try {
      const response = await instance.post(endpoint, formData);
      console.log("✅ Kết quả trả về từ BE:", response.data);
      alert("Thêm mới thành công!");
      onSuccess(); // Gọi callback để reload dữ liệu
      handleClose(); // Đóng modal
    } catch (error) {
      console.error(
        "❌ Lỗi khi thêm mới:",
        error.response?.data || error.message
      );
      alert("Thêm mới thất bại!");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>➕ Thêm mới</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {fields.map((field) => (
            <Form.Group key={field.name} className="mb-3">
              <Form.Label>{field.label}</Form.Label>

              {/* ✅ Nếu type là "select" thì hiển thị dropdown */}
              {field.type === "select" && field.options ? (
                <Form.Select
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                >
                  <option value="">-- Chọn {field.label} --</option>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              ) : (
                <Form.Control
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
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
        <Button variant="success" onClick={handleSubmit}>
          Lưu
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LTK_AddNew;
