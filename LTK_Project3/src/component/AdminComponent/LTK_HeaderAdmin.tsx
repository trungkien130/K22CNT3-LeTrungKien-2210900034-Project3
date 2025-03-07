import React from "react";
import "../css/LTK_AdminCss.css";

export default function LTK_HeaderAdmin() {
  return (
    <header className="header">
      {/* Ô tìm kiếm */}
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search ..." className="search-input" />
      </div>

      {/* Các icon + Avatar */}
      <div className="header-icons">
        <span className="icon">📩</span> {/* Mail */}
        <span className="icon notification">
          🔔 <span className="badge">4</span>
        </span>{" "}
        {/* Notification */}
        <span className="icon">📚</span> {/* Stack */}
        {/* Avatar + Tên */}
        <div className="user-info">
          <img
            src="https://via.placeholder.com/30"
            alt="User Avatar"
            className="avatar"
          />
          <span>
            Hi, <strong>Hizrian</strong>
          </span>
        </div>
      </div>
    </header>
  );
}
