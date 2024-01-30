import "./App.css";
import "./assets/_main.scss";
import Login from "./components/authentication/login/login";
import "./assets/_main.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/authentication/SignUp/Signup";
import Forgetpassword from "./components/authentication/Forget/forgetpassword";
import Checkmail from "./components/authentication/checkmail/Checkmail";
import Resetpassword from "./components/authentication/Reset/Resetpassword";
import Verification from "./components/authentication/verification/Verification";
import Sidebar from "./components/SideBar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgetpassword />} />
        <Route path="/mail" element={<Checkmail />} />
        <Route path="/reset" element={<Resetpassword />} />
        <Route path="/Verification" element={<Verification />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
