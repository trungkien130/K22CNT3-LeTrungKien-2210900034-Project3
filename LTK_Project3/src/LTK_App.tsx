import { BrowserRouter, Routes, Route } from "react-router-dom";
import LTK_Admin from "./component/AdminComponent/LTK_Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LTK_App.css";
import LTK_Home from "./component/HomeComponent/LTK_Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LTK_Home />} />
      <Route path="/home" element={<LTK_Home />} />
      <Route path="/admin/*" element={<LTK_Admin />} />
    </Routes>
  );
}

export default App;
