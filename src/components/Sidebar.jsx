import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styling/Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <nav className="sidebar">
      <h4 className="py-3 font-weight-bold text-secondary text-center">
        <i className="fa-solid fa-briefcase text-danger mr-2"></i> Zambeel
      </h4>
      <Link
        className={`nav-link sidebar_item font-weight-bolder py-2 my-1 ${
          location.pathname === "/" ? "active" : ""
        }`}
        to="/"
      >
        Dashboard
      </Link>
      <Link
        className={`nav-link sidebar_item font-weight-bolder py-2 my-1 ${
          location.pathname.includes("user-management") ? "active" : ""
        }`}
        to="/user-management"
      >
        User Management
      </Link>
      <Link
        className={`nav-link sidebar_item font-weight-bolder py-2 my-1 ${
          location.pathname.includes("role-management") ? "active" : ""
        }`}
        to="/role-management"
      >
        Role Management
      </Link>
      <Link
        className={`nav-link sidebar_item font-weight-bolder py-2 my-1 ${
          location.pathname.includes("wiki-management") ? "active" : ""
        }`}
        to="/wiki-management"
      >
        Wiki Management
      </Link>
      <Link
        className={`nav-link sidebar_item font-weight-bolder py-2 my-1 ${
          location.pathname.includes("search-summarization") ? "active" : ""
        }`}
        to="/search-summarization"
      >
        Search Summarize
      </Link>
    </nav>
  );
};

export default Sidebar;
