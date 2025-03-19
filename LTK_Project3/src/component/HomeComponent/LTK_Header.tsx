import React, { useState, useEffect } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../Img/logo.png";

const Ltk_Header = ({
  setModalType,
}: {
  setModalType: (type: string) => void;
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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
            <NavLink to="#" className="nav-link">
              Liên Hệ: 0913088169
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
                {user ? (
                  <>
                    <div className="dropdown-item text-center fw-bold">
                      <NavLink
                        style={{ textDecoration: "none", color: "black" }}
                        to="/userDetail"
                      >
                        Xin chào, {user.email}
                      </NavLink>
                    </div>

                    <button
                      className="dropdown-item btn btn-outline-danger w-100 mt-2"
                      onClick={handleLogout}
                    >
                      Đăng xuất
                    </button>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            )}
          </div>
          <NavLink
            to="/cart"
            className="nav-link me-3"
            style={{ color: "black" }}
          >
            <FaShoppingCart size={20} />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Ltk_Header;
