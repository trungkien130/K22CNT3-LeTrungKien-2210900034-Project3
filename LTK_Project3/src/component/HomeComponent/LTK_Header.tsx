import React, { useState, useEffect } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../Img/logo.png";
const Header = ({ setModalType }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".user-dropdown")) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <div className="container d-flex justify-content-between align-items-center py-3">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Logo" style={{ height: "50px" }} />
        </NavLink>

        {/* Menu */}
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Trang Chủ
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link">
              Sản Phẩm
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              Về Chúng Tôi
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Liên Hệ
            </NavLink>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <FaSearch className="me-3" size={20} />

          <div className="position-relative user-dropdown">
            <FaUser
              className="me-3 ms-2 cursor-pointer"
              size={20}
              onClick={() => setShowDropdown(!showDropdown)}
            />

            {showDropdown && (
              <div className="dropdown-menu show position-absolute end-0 mt-2 p-2 shadow bg-white rounded">
                <button
                  className="dropdown-item btn btn-outline-primary w-100 mb-2"
                  onClick={() => setModalType("login")}
                >
                  Đăng nhập
                </button>
                <button
                  className="dropdown-item btn  w-100"
                  onClick={() => setModalType("register")}
                >
                  Đăng ký
                </button>
              </div>
            )}
          </div>

          <FaShoppingCart size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
