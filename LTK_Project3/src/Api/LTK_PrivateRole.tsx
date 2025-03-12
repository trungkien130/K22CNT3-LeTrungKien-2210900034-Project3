import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;

  const isAuthenticated = user && user.email; // Kiểm tra dựa trên email
  const isAdmin = user && user.role === "ADMIN"; // Kiểm tra role là "ADMIN"

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default PrivateRoute;
