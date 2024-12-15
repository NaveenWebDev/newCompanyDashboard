import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from './../components/Navbar';

const Dashboard = ({children}) => {
  return (
    <div className="overflow-x-hidden">
      <div className="row overflow-hidden" style={{ height: "100vh" }}>

        <div
          className="col-2 border top-0"
          // style={{ height: "100vh" }}
        >
          <Sidebar />
        </div>

        <div className=" col-10" style={{background:"#f1f1f1"}}>
          <Navbar/>

          <main className="p-3" style={{height:"92%"}}>
              <div className="bg-white h-100 rounded-3">
                main content <br />
                {children}
              </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
