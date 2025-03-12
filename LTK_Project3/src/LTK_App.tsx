import { Routes, Route } from "react-router-dom";
import LTK_Admin from "./Page/LTK_Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LTK_App.css";
import LTK_Home from "./Page/LTK_Home";
import LTK_DetailProducts from "./component/HomeComponent/LTK_DetailProducts";
import LTK_Categories from "./component/HomeComponent/LTK_Categories";
import PrivateRoute from "./Api/LTK_PrivateRole"; // Đường dẫn đến PrivateRoute.js

function App() {
  return (
    <Routes>
      <Route path="/" element={<LTK_Home />} />
      <Route path="/home" element={<LTK_Home />} />
      <Route
        path="/admin/*"
        element={
          <PrivateRoute>
            <LTK_Admin />
          </PrivateRoute>
        }
      />
      <Route path="/products" element={<LTK_Categories />} />
      <Route path="/productDetail/:id" element={<LTK_DetailProducts />} />
    </Routes>
  );
}

export default App;
