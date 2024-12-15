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

const Sidebar = () => {
  const data = [
    {
      id: 1,
      icon: <DashboardIcon/>,
      value: "Dashboard",
      route:"/dashboard"
    },
    {
      id: 2,
      icon: <CategoryIcon/>,
      value: "Department Mgmt",
      route:"/department-mgmt"
    },
    {
      id: 3,
      icon: <PeopleAltIcon/>,
      value: "User Mgmt",
      route:"/user-mgmt"
    },
    {
      id: 4,
      icon: <CurrencyRupeeIcon/>,
      value: "Budget Mgmt",
      route:"/budget-mgmt"
    },
    {
      id: 5,
      icon: <CheckCircleIcon/>,
      value: "Approval & payments",
      route:"/approval-payments"
    },
    {
      id: 6,
      icon: <RoomServiceIcon/>,
      value: "Vendor Services mgmt",
      route:"/vendor-services-mgmt"
    },
    {
      id: 7,
      icon: <AddToHomeScreenIcon/>,
      value: "DBT/BULK?Nach Managment",
      route:"/dbt"
    },
    {
      id: 8,
      icon: <MonetizationOnIcon/>,
      value: "Payroll/Salary Mgmt",
      route:"/payroll-salary"
    },
    {
      id: 9,
      icon: <WhatshotIcon/>,
      value: "Reconcilliation",
      route:"/reconcilliatoin"
    },
    {
      id: 10,
      icon: <MeetingRoomIcon/>,
      value: "Depository",
      route:"/depository"
    },
    {
      id: 11,
      icon: <PaymentIcon/>,
      value: "Print/payment/Advice",
      route:"/print-payment"
    },
    {
      id: 12,
      icon: <ReportIcon/>,
      value: "Reports",
      route:"/reports"
    },
  

  ];

  

  return (
    <>
      <div className="row">

        <div className="row border-bottom fs-12px fw-600 py-2 ps-4 h-60px">

            <div className="col-2 d-flex justify-content-center align-items-center " >
                <AcUnitIcon sx={{width:"35px", height:"35px"}} />
            </div>

          <div className="col-10 fw-600 fw-bold ps-2 d-flex align-items-center">
            Uttarakhand Rural Road Development Authority
          </div>

        </div>

      </div>
      <div className="row overflow-auto" style={{height:"92vh"}}>
        <div className="col-12 overflow-auto"  >
          {
            data.map((val, ind)=>(
              <div key={val?.id} className="row p-2 my-2">
              <span className="col-3 d-flex justify-content-end pe-3 align-items-center"> {val?.icon} </span>
              <span className="col-9"> {val?.value} </span>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Sidebar;
