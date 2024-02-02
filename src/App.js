import "./assets/_main.scss";
import "./App.css";
import Login from "./components/authentication/login/login";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "./components/TermAndCondition/TermsAndConditions";
import Forgetpassword from "./components/authentication/Forget/forgetpassword";
import Resetpassword from "./components/authentication/Reset/Resetpassword";
import Signup from "./components/authentication/SignUp/Signup";
import Checkmail from "./components/authentication/checkmail/Checkmail";
import Verification from "./components/authentication/verification/Verification";
import ContactUs from "./components/ContactUs/Contactus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgetpassword />} />
        <Route path="/mail" element={<Checkmail />} />
        <Route path="/reset" element={<Resetpassword />} />
        <Route path="/Verification" element={<Verification />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />} />
        <Route path="/termscondition" element={<TermsAndCondition />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
