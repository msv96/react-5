import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <div className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </div>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Interface</div>
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/user">
          <i className="fas fa-fw fa-cog"></i>
          <span>Users</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/product">
          <i className="fas fa-fw fa-wrench"></i>
          <span>Products</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
