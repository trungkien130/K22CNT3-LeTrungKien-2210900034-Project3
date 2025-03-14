import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "./LTK_AuthContext";

const PrivateRoute = ({ children, requireAdmin = false }) => {
  const { isAuthenticated, isAdmin, modalType, setModalType } = useAuth();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated() && modalType !== "login") {
      setModalType("login");
    }
    setLoading(false);
  }, [isAuthenticated, modalType, setModalType]);

  if (loading) return null; // Chờ xác thực trước khi hiển thị

  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  if (requireAdmin && !isAdmin()) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
