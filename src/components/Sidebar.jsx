import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createTransitions } from "@mui/material/styles";

const Sidebar = ({ menu }) => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const submenuRefs = useRef({});
  const navigate = useNavigate();
  const handleSubmenuToggle = (id) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  useEffect(() => {
    if (menu === false) {
      setOpenSubmenu(null);
    }
  }, [menu]);

  useEffect(() => {
    Object.keys(submenuRefs.current).forEach((key) => {
      const submenu = submenuRefs.current[key];
      if (submenu) {
        submenu.style.maxHeight =
          openSubmenu === Number(key) ? `${submenu.scrollHeight}px` : "0";
        submenu.style.opacity = openSubmenu === Number(key) ? "1" : "0";
      }
    });
  }, [openSubmenu]);

  return (
    <div style={{ height: "100vh" }} className={` ${openSubmenu? "overflow-auto": null} `} >
      {/* Header */}
      <div className="d-flex h-60px justify-content-center align-items-center gap-8px pxy border-bottom">
        <img src="/logo.svg" alt="" height="36px" width="35px" />
        {menu && (
          <span className="fw-600 fs-12px text-black">
            Uttarakhand Rural Road Development Authority
          </span>
        )}
      </div>

      {/* Menu Items */}
      <div
        className="menu position-relative"
        style={{ height: "calc(100% - 60px)" }}
      >
        {data.map((item) => (
          <div key={item?.id}>
            {/* Main Menu */}
            <Link
              to={item.path}
              className={`d-flex gap-8px justify-content-center align-items-center pxy cursor-pointer text-decoration-none menuhover position-relative ${
                ("/" + location.pathname.split("/")[1]) === (item?.path) 
                  ? "active text-white"
                  : "text-black hover-link"
              }`}
              onClick={
                !menu
                  ? null
                  : () => item?.submenu && handleSubmenuToggle(item?.id)
              }
            >
              <span>{item?.icon}</span>
              {menu && (
                <span className="flex-grow-1 fs-14px">{item?.value}</span>
              )}

              {item?.submenu && (
                <span
                  className={`${!menu ? "position-absolute end-0 pe-2" : null}`}
                >
                  {openSubmenu === item?.id ? (
                    <i className="icon-arrow_drop_down fs-5"></i>
                  ) : (
                    <i className="icon-arrow_right fs-5"></i>
                  )}
                </span>
              )}

              {/* ===================================collapse-menu================================= */}

              {item?.submenu && !menu && (
                <ul className="collapse-menu list-unstyled">
                  {item.submenu.map((sub) => (
                    <li
                      key={sub?.id}
                      className={`fs-14px text-black border-bottom
                        ${
                          location.pathname.includes(`${item?.path}/${sub?.id}`)
                            ? "text-black border-l-3px"
                            : "text-black hover-link"
                        }
                      `}
                      
                    >
                      <Link
                        to={`${item?.path}/${sub.id}`}
                        className={`p-3rem text-decoration-none d-block fs-14px ${location.pathname.includes(`${item?.path}/${sub?.id}`)
                        ? "text-black border-l-3px" : "text-black"}
                         } `}
                      >
                        {sub?.value}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </Link>

            {/*============================================= Submenu==================================== */}
            {item.submenu && (
              <ul
                className={`submenu list-unstyled pb-2 ${
                  openSubmenu !== item.id ? "d-none" : null
                }`}
                ref={(el) => (submenuRefs.current[item?.id] = el)}
              >
                {item.submenu &&
                  item.submenu.map((sub) => (
                    <li key={sub?.id}>
                      <Link
                        to={`${item?.path}/${sub.id}`}
                        className={`text-decoration-none fs-14px pxy ${
                          location.pathname.includes(`${item?.path}/${sub?.id}`)
                            ? "border-l-3px text-black"
                            : "text-black hover-link"
                        }`}
                      >
                        {sub?.value}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

const data = [
  {
    id: 1,
    icon: <i className="icon-dashboard fs-5"></i>,
    value: "Dashboard",
    path: "/",
  },
  {
    id: 2,
    icon: <i className="icon-category fs-5"></i>,
    value: "Department",
    path: "/department-mgmt",
    submenu: [
      { id: 1, value: "Department", path: "department-mgmt/1" },
      { id: 2, value: "Child Band Account", path: "department-mgmt/2" },
      {
        id: 3,
        value: "Child Schema Band Account mapping",
        path: "department-mgmt/3",
      },
    ],
  },
  {
    id: 3,
    icon: <i className="icon-supervised_user_circle fs-5"></i>,
    value: "User",
    path: "/user-mgmt",
  },
  {
    id: 4,
    icon: <i className="icon-work_outline fs-5"></i>,
    value: "Budget",
    path: "/budget-mgmt",
    submenu: [
      { id: 1, value: "Schemes" },
      { id: 2, value: "Budgets" },
      { id: 3, value: "Revision Budgets & Limit Allocatoin" },
      { id: 4, value: "Child budget Limit Allocation" },
      { id: 5, value: "Budget Activity" },
      { id: 6, value: "Budget Sub Activity" },
    ],
  },
  {
    id: 5,
    icon: <i className="icon-playlist_add_check fs-5"></i>,
    value: "Approval & Payments",
    path: "/approval-payments",
    submenu: [
      { id: 1, value: "Invoices" },
      { id: 2, value: "DBT Bulk Nach" },
      { id: 3, value: "Payroll Salary" },
      { id: 4, value: "Child budget Limit Allocatoin" },
      { id: 5, value: "Royality & Labour Cess" },
    ],
  },
  {
    id: 6,
    icon: <i className="icon-store fs-5"></i>,
    value: "Vendor Services",
    path: "/vendor-services-mgmt",
    submenu: [
      { id: 1, value: "Vendor Contract Service Provider" },
      { id: 2, value: "Vendor Contract Service Payments" },
      { id: 3, value: "Payments Deduction" },
    ],
  },
  {
    id: 7,
    icon: <i className="icon-nature_people fs-5"></i>,
    value: "DBT BULK Nach",
    path: "/dbt",
  },
  {
    id: 8,
    icon: <i className="icon-assignment_turned_in fs-5"></i>,
    value: "Payroll Salary",
    path: "/payroll-salary",
  },
  {
    id: 9,
    icon: <i className="icon-emoji_flags fs-5"></i>,
    value: "Reconciliation",
    path: "/reconciliation",
    submenu: [
      { id: 1, value: "OTHER-DEDUCTIONS" },
      { id: 2, value: "IFMS Intrest Challans" },
      { id: 3, value: "Royality" },
    ],
  },
  {
    id: 10,
    icon: <i className="icon-save_alt fs-5"></i>,
    value: "Depository",
    path: "/depository",
    submenu: [
      { id: 1, value: "Add depository" },
      { id: 2, value: "Depository" },
    ],
  },
  {
    id: 11,
    icon: <i className="icon-local_printshop fs-5"></i>,
    value: "Print Payment Advice",
    path: "/print-payment",
    submenu: [{ id: 1, value: "List Print Payment Advice" }],
  },
  {
    id: 12,
    icon: <i className="icon-assignment fs-5"></i>,
    value: "Reports",
    path: "/reports",
    submenu: [
      { id: 1, value: "Scheme Balance" },
      { id: 2, value: "Budgets" },
      { id: 3, value: "Revised Budgets" },
      { id: 4, value: "Scheme Subheads" },
      { id: 4, value: "Scheme Activity & Sub Activity" },
      { id: 4, value: "Child budget Limit Allocation" },
      { id: 4, value: "Utilization Certificate" },
      { id: 4, value: "MPR-Monthly Progree Report" },
      { id: 4, value: "Vendor Conract Service Providor" },
      { id: 4, value: "Payment DBT Bulk NACH" },
      { id: 4, value: "Payment Payroll Salary" },
      { id: 4, value: "Payment Invoices" },
      { id: 4, value: "Payment Ryality" },
      { id: 4, value: "Payment Payment Labour Cess" },
      { id: 4, value: "Payment Withheld amount" },
      { id: 4, value: "TDS-IT" },
      { id: 4, value: "TDS-GST" },
      { id: 4, value: "GIS" },
      { id: 4, value: "NPS" },
      { id: 4, value: "Royality" },
      { id: 4, value: "Labour Cess" },
      { id: 4, value: "Other deductions" },
      { id: 4, value: "Penality" },
      { id: 4, value: "Withheld amount" },
      { id: 4, value: "Bank Account Intrest" },
    ],
  },
];
