import React, { createContext, useState, useContext, useEffect } from "react";
import LTK_Login from "../component/HomeComponent/LTK_Login";
import LTK_Register from "../component/HomeComponent/LTK_Register";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [modalType, setModalType] = useState(null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const navigate = useNavigate();

  useEffect(() => {
    // Chỉ chuyển hướng khi user là ADMIN và không ở khu vực /admin/*
    if (
      user?.role === "ADMIN" &&
      !window.location.pathname.startsWith("/admin")
    ) {
      navigate("/admin");
    }
  }, [user, navigate]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setModalType(null);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  const isAuthenticated = () => !!user && !!user.email;
  const isAdmin = () => isAuthenticated() && user.role === "ADMIN";

  return (
    <AuthContext.Provider
      value={{
        modalType,
        setModalType,
        user,
        login,
        logout,
        isAuthenticated,
        isAdmin,
      }}
    >
      {children}
      {modalType === "login" && (
        <LTK_Login
          isOpen={true}
          onClose={() => setModalType(null)}
          onSwitchToRegister={() => setModalType("register")}
        />
      )}
      {modalType === "register" && (
        <LTK_Register
          isOpen={true}
          onClose={() => setModalType(null)}
          onSwitchToLogin={() => setModalType("login")}
        />
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
