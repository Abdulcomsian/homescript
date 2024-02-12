import { Route, Routes } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
import Topbar from "../Topbar/Topbar";
import { useState } from "react";
import Myaccount from "../MyAccount/Myaccount";
import Membership from "../Membership/Membership";
import Contactus from "../SendMessage/SendMessage";
import NewListing from "../NewListings/NewListing";
import Details from "../Details/Details";
import SendMessage from "../SendMessage/SendMessage";
import AllListing from "../AllListing/AllListing";

function Dashboard() {
  const [sideBar, setSideBar] = useState(true);

  const sideBarWidth = sideBar ? 250 : 0;
 
  // console.log("Rendered", sideBarWidth);
  return (
    <>
      <div className="wrapper clearfix">
        <div className={`sidebar-wrapper ${sideBar ? "isOpen" : ""}`}>
          <Sidebar />
        </div>
        <div
          className="main-panel"
          style={{ width: `calc(100% - ${sideBarWidth}px)` }}
        >
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
              <Route exact path="/newlisting" element={<NewListing />} />
              <Route exact path="/membership" element={<Membership />} />
              <Route exact path="/contact" element={<Contactus />} />
              <Route exact path="/all-listing" element={<AllListing />} />
              <Route exact path="/chat" element={<SendMessage />} />
              <Route exact path="/details" element={<Details />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
