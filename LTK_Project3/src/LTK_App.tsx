import { Routes, Route } from "react-router-dom";
import LTK_Admin from "./Page/LTK_Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LTK_App.css";
import LTK_Home from "./Page/LTK_Home";
import LTK_DetailProducts from "./component/HomeComponent/LTK_DetailProducts";
import LTK_Categories from "./component/HomeComponent/LTK_Categories";
import PrivateRoute from "./Api/LTK_PrivateRole";
import LTK_About from "./component/HomeComponent/LTK_About";
import { AuthProvider } from "./Api/LTK_AuthContext";
import LTK_Cart from "./component/HomeComponent/LTK_Cart";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LTK_Home />} />
        <Route path="/home" element={<LTK_Home />} />
        <Route
          path="/admin/*"
          element={
            <PrivateRoute requireAdmin={true}>
              <LTK_Admin />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<LTK_About />} />
        <Route path="/cart" element={<LTK_Cart />} />
        <Route path="/products" element={<LTK_Categories />} />
        <Route path="/productDetail/:id" element={<LTK_DetailProducts />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
