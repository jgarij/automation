import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar flex gap-4 p-4 bg-gray-100 shadow-md">
      <NavLink
        to="/upload-docs"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Upload Report
      </NavLink>

      <NavLink
        to="/"
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
      >
        Dashboard
      </NavLink>
    </div>
  );
}
