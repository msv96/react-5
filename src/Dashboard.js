import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <button className="d-none d-sm-inline-block btn btn-primary shadow-sm">
          <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
        </button>
      </div>
      <div className="d-md-flex justify-content-center">
        <Link to="/user" className="btn btn-lg btn-outline-primary p-3 m-5">
          <i className="fas fa-fw fa-cog"></i>
          <span>Users</span>
        </Link>
        <Link to="/product" className="btn btn-lg btn-outline-primary p-3 m-5">
          <i className="fas fa-fw fa-wrench"></i>
          <span>Products</span>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
