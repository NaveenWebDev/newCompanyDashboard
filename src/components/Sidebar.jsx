import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ReportIcon from "@mui/icons-material/Report";
import PaymentIcon from "@mui/icons-material/Payment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RoomServiceIcon from "@mui/icons-material/RoomService";
MeetingRoomIcon;
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AddToHomeScreenIcon from "@mui/icons-material/AddToHomeScreen";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ menu }) => {
  const data = [
    {
      id: 1,
      icon: <DashboardIcon style={{ height: "20px", width: "20px" }} />,
      value: "Dashboard",
      path: "/",
    },
    {
      id: 2,
      icon: <CategoryIcon style={{ height: "20px", width: "20px" }} />,
      value: "Department Mgmt",
      path: "/department-mgmt",
    },
    {
      id: 3,
      icon: <PeopleAltIcon style={{ height: "20px", width: "20px" }} />,
      value: "User Mgmt",
      path: "/user-mgmt",
    },
    {
      id: 4,
      icon: <CurrencyRupeeIcon style={{ height: "20px", width: "20px" }} />,
      value: "Budget Mgmt",
      path: "/budget-mgmt",
    },
    {
      id: 5,
      icon: <CheckCircleIcon style={{ height: "20px", width: "20px" }} />,
      value: "Approval & payments",
      path: "/approval-payments",
    },
    {
      id: 6,
      icon: <RoomServiceIcon style={{ height: "20px", width: "20px" }} />,
      value: "Vendor Services mgmt",
      path: "/vendor-services-mgmt",
    },
    {
      id: 7,
      icon: <AddToHomeScreenIcon style={{ height: "20px", width: "20px" }} />,
      value: "DBT/BULK?Nach Managment",
      path: "/dbt",
    },
    {
      id: 8,
      icon: <MonetizationOnIcon style={{ height: "20px", width: "20px" }} />,
      value: "Payroll/Salary Mgmt",
      path: "/payroll-salary",
    },
    {
      id: 9,
      icon: <WhatshotIcon style={{ height: "20px", width: "20px" }} />,
      value: "Reconcilliation",
      path: "/reconcilliatoin",
    },
    {
      id: 10,
      icon: <MeetingRoomIcon style={{ height: "20px", width: "20px" }} />,
      value: "Depository",
      path: "/depository",
    },
    {
      id: 11,
      icon: <PaymentIcon style={{ height: "20px", width: "20px" }} />,
      value: "Print/payment/Advice",
      path: "/print-payment",
    },
    {
      id: 12,
      icon: <ReportIcon style={{ height: "20px", width: "20px" }} />,
      value: "Reports",
      path: "/reports",
    },
  ];

  const location = useLocation();

  return (
    <>
      <div className="border">
        <div className="d-flex gap-8px justify-content-center px-3 border-bottom fs-12px fw-600 h-60px overflow-hidden">
          <div
            className={`d-flex justify-content-center align-items-center`}
          >
            <AcUnitIcon sx={{ width: "35.1px", height: "36px" }} />
          </div>
          {menu && (
            <div
              className={`${
                menu ? "opacity-1" : "opacity-0"
              } col-10 fw-600 fw-bold d-flex align-items-center`}
            >
              Uttarakhand Rural Road Development Authority
            </div>
          ) }
        </div>
      </div>

      <div
        className="overflow-auto"
        style={{ height: "92vh" }}
      >
        <div className="overflow-auto w-100">
          {data.map((val, ind) => (
            <Link
              to={val?.path}
              key={val?.id}
              className={`d-flex gap-8px justify-content-center px-2 py-3 cursor-pointer hover-bg text-black text-decoration-none ${
                location.pathname === val?.path ? "active" : null
              }`}
            >
              <span
                className={`d-flex justify-content-end align-items-center`}
              >
                {val?.icon}
              </span>
              {menu && <span className="col-9 fs-14px"> {val?.value} </span>}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
