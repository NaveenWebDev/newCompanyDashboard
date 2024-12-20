import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from './../components/Navbar';

const Dashboard = ({children}) => {
  const [menu, setMenu] = useState(null)

  const setNavbarMenuValue = (value)=>{
    setMenu(value)
  }

  return (
    <div className="overflow-x-hidden" >
      <div className="row overflow-hidden" style={{ height: "100vh" }}>

        <div
          className={` ${menu? "col-2": "col-1"} border top-0 transition`}
        >
          <Sidebar menu={menu} />
        </div>

        <div className={` ${menu?"col-10":"col-11"} transition black-40`} style={{background:"#F1F1F1"}} >
          <Navbar setNavbarMenuValue={setNavbarMenuValue}/>

          <main className="p-3" style={{height:"100vh"}}>
              <div className=" h-100 rounded-3 p-2 overflow-auto">
                {children}
              </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
