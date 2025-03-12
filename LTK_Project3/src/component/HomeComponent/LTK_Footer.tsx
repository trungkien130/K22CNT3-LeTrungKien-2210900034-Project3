import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <p>© 2025 LITIBABY - Thời trang trẻ em Việt Nam</p>
      <p>Trụ sở chính: 149 Vương Thừa Vũ, Thanh Xuân, Hà Nội</p>
      <p>
        <a href="/contact" className="text-white text-decoration-none me-2">
          Liên Hệ
        </a>
        |{" "}
        <a href="/policy" className="text-white text-decoration-none ms-2">
          Chính Sách
        </a>
      </p>
    </footer>
  );
};

export default Footer;
