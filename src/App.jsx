import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DashboardData from './components/DashboardData';

import "./assets/icons.css"

const App = () => {
  return (
      <Routes>
        {
          data.map((val, ind)=>(
        <Route key={val?.id} path={val?.path} element={<Dashboard> {val?.value} </Dashboard>} />
          ))
        }
        <Route path='/department-mgmt/1' element={<Dashboard> submenu 1</Dashboard> } /> 
        <Route path='/department-mgmt/2' element={<Dashboard> submenu 2 </Dashboard> } /> 
        <Route path='/department-mgmt/3' element={<Dashboard> submenu 3 </Dashboard> } /> 
        <Route path='/department-mgmt/4' element={<Dashboard> submenu 4</Dashboard> } /> 
        <Route path="*" element={<h2>page not fount</h2>} />
      </Routes>
  );
};

export default App;

const data = [
  {
    id: 1,
    value: "Dashboard",
    path:"/"
  },
  {
    id: 2,
    value: "Department Mgmt",
    path:"/department-mgmt"
  },
  {
    id: 3,
    value: "User Mgmt",
    path:"/user-mgmt"
  },
  {
    id: 4,
    value: "Budget Mgmt",
    path:"/budget-mgmt"
  },
  {
    id: 5,
    value: "Approval & payments",
    path:"/approval-payments"
  },
  {
    id: 6,
    value: "Vendor Services mgmt",
    path:"/vendor-services-mgmt"
  },
  {
    id: 7,
    value: "DBT/BULK?Nach Managment",
    path:"/dbt"
  },
  {
    id: 8,
    value: "Payroll/Salary Mgmt",
    path:"/payroll-salary"
  },
  {
    id: 9,
    value: "Reconcilliation",
    path:"/reconciliation"
  },
  {
    id: 10,
    value: "Depository",
    path:"/depository"
  },
  {
    id: 11,
    value: "Print/payment/Advice",
    path:"/print-payment"
  },
  {
    id: 12,
    value: "Reports",
    path:"/reports"
  },
];
