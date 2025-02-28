import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./component/LTK_Login";
import Register from "./component/LTK_Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login/> */}
      <Register />
    </>
  );
}

export default App;
