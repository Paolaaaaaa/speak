import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/login";
import { Login_View } from "./Views/Loginview";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Login_View />} />
          <Route path="/auth/login" element={<Login_View />} />

      </Routes>
    </>
  );
}

export default App;
