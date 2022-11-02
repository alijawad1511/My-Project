import React from "react";
import { Outlet } from "react-router-dom";
import CSVReader from "../../CSVReader";

const Dashboard = () => {
  return (
    <div className="content px-5 pt-4">
      {/* <CSVReader /> */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
