import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DashboardData from './components/DashboardData';

const App = () => {
  return (
      <Routes>
        {
          data.map((val, ind)=>(
        <Route key={val?.id} path={val?.path} element={<Dashboard> {val?.value} </Dashboard>} />
          ))
        }
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
    path:"/reconcilliatoin"
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
