import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ReportIcon from '@mui/icons-material/Report';
import PaymentIcon from '@mui/icons-material/Payment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RoomServiceIcon from '@mui/icons-material/RoomService';
MeetingRoomIcon
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({menu}) => {
  const data = [
    {
      id: 1,
      icon: <DashboardIcon/>,
      value: "Dashboard",
      path:"/"
    },
    {
      id: 2,
      icon: <CategoryIcon/>,
      value: "Department Mgmt",
      path:"/department-mgmt"
    },
    {
      id: 3,
      icon: <PeopleAltIcon/>,
      value: "User Mgmt",
      path:"/user-mgmt"
    },
    {
      id: 4,
      icon: <CurrencyRupeeIcon/>,
      value: "Budget Mgmt",
      path:"/budget-mgmt"
    },
    {
      id: 5,
      icon: <CheckCircleIcon/>,
      value: "Approval & payments",
      path:"/approval-payments"
    },
    {
      id: 6,
      icon: <RoomServiceIcon/>,
      value: "Vendor Services mgmt",
      path:"/vendor-services-mgmt"
    },
    {
      id: 7,
      icon: <AddToHomeScreenIcon/>,
      value: "DBT/BULK?Nach Managment",
      path:"/dbt"
    },
    {
      id: 8,
      icon: <MonetizationOnIcon/>,
      value: "Payroll/Salary Mgmt",
      path:"/payroll-salary"
    },
    {
      id: 9,
      icon: <WhatshotIcon/>,
      value: "Reconcilliation",
      path:"/reconcilliatoin"
    },
    {
      id: 10,
      icon: <MeetingRoomIcon/>,
      value: "Depository",
      path:"/depository"
    },
    {
      id: 11,
      icon: <PaymentIcon/>,
      value: "Print/payment/Advice",
      path:"/print-payment"
    },
    {
      id: 12,
      icon: <ReportIcon/>,
      value: "Reports",
      path:"/reports"
    },
  ];

  const location = useLocation();

  return (
    <>
      <div className="row">

        <div className="row border-bottom fs-12px fw-600 py-2 ps-4 h-60px overflow-hidden">

            <div className={` ${menu?"col-2":"col-6 rotate"} d-flex justify-content-center align-items-center transition`}>
                <AcUnitIcon sx={{width:"35px", height:"35px"}} />
            </div>
          {
            menu ?
          <div className={`${menu?"opacity-1":"opacity-0"} col-10 fw-600 fw-bold ps-2 d-flex align-items-center`}>
            Uttarakhand Rural Road Development Authority
          </div> :
          null
          }

        </div>

      </div>
      <div className="row overflow-auto" style={{height:"92vh"}}>
        <div className="col-12 overflow-auto"  >
          {
            data.map((val, ind)=>(
              <Link to={val?.path} key={val?.id} className={`row px-2 py-3 cursor-pointer hover-bg text-black text-decoration-none ${location.pathname === val?.path ? "active" : null}`}>
              <span className={` ${menu? "col-3": " col-9"} d-flex justify-content-end pe-3 align-items-center`}> {val?.icon} </span>
              {
              menu && <span className="col-9"> {val?.value} </span>
              } 
                
              </Link>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Sidebar;
