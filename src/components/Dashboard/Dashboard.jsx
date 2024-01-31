import { Route, Routes } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
import Topbar from "../Topbar/Topbar";
import { useState } from "react";
import Myaccount from "../MyAccount/Myaccount";
import Membership from "../Membership/Membership";

function Dashboard() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <div className="wrapper">
        <div
          className="sidebar-wrapper"
          style={{ width: sideBar ? "0%" : "15%" }}
        >
          <Sidebar />
        </div>
        <div className="main-panel" style={{ width: sideBar ? "100%" : "85%" }}>
          <div className="topbar">
            <Topbar setSideBar={setSideBar} sideBar={sideBar} />
          </div>
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                Component={() => {
                  return <>basit</>;
                }}
              />
              <Route exact path="/myaccount" element={<Myaccount />} />
              <Route exact path="/membership" element={<Membership />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
