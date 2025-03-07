import React from "react";
import { FaSearch, FaEnvelope, FaBell, FaLayerGroup } from "react-icons/fa";
import "/Project 3/LTK_Project3/src/css/LTK_AdminCss.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light text-white bg-dark px-3 d-flex justify-content-between w-100 flex-wrap">
      {/* Ô tìm kiếm */}
      <div
        className="input-group flex-grow-1 me-3"
        style={{ maxWidth: "300px" }}
      >
        <span className="input-group-text bg-white">
          <FaSearch />
        </span>
        <input type="text" className="form-control" placeholder="Search..." />
      </div>

      {/* Biểu tượng & avatar */}
      <div className="d-flex align-items-center flex-wrap">
        <FaEnvelope className="me-3" size={20} />
        <div className="position-relative me-3">
          <FaBell size={20} />
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
            style={{ fontSize: "12px" }}
          >
            4
          </span>
        </div>
        <FaLayerGroup className="me-3" size={20} />
        <img
          src="https://via.placeholder.com/40"
          className="rounded-circle me-2"
          alt="Profile"
        />
        <span className="d-none d-sm-inline">
          Hi, <strong>Hizrian</strong>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
