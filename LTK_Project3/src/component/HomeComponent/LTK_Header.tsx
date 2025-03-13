import React, { useState, useEffect } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";
import logo from "../../Img/logo.png";
import instance from "../../Api/LTK_Api";

const Header = ({ setModalType }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartCount, setCartCount] = useState(0);

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
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Logo" style={{ height: "50px" }} />
        </NavLink>
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
                  className="dropdown-item btn w-100"
                  onClick={() => setModalType("register")}
                >
                  Đăng ký
                </button>
              </div>
            )}
          </div>
          <NavLink
            to="/cart"
            className="nav-link me-3 position-relative"
            style={{ color: "black" }}
          >
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "12px", padding: "2px 6px" }}
              >
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
