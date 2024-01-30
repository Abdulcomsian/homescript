import Sidebar from "../SideBar/Sidebar";
import Topbar from "../Topbar/Topbar";

function Dashboard() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="topbar">
          <Topbar />
        </div>
      </div>
    </>
  );
}
export default Dashboard;
