import React, { useState, useEffect } from "react";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import "/Project 3/LTK_Project3/src/css/LTK_AdminCss.css";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const [username, setUsername] = useState(
    user.name || user.email?.split("@")[0] || "Guest"
  );

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser && loggedInUser.username) {
      setUsername(loggedInUser.username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUsername("Guest");
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-light text-white bg-dark px-3 d-flex justify-content-between w-100 flex-wrap">
      {/* Search Input */}
      <div
        className="input-group flex-grow-1 me-3"
        style={{ maxWidth: "300px" }}
      >
        <span className="input-group-text bg-white">
          <FaSearch />
        </span>
        <input type="text" className="form-control" placeholder="Search..." />
      </div>

      {/* Icons & Avatar */}
      <div className="d-flex align-items-center flex-wrap">
        <span className="d-none d-sm-inline me-3">
          Hi, <strong>{username}</strong>
        </span>
        <button
          className="btn btn-logout"
          style={{ color: "white" }}
          onClick={handleLogout}
        >
          <FaSignOutAlt className="me-1" /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
