import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ handleLogout }) => {
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-500 p-4 flex justify-between items-center">
      <div
        className="text-white font-medium cursor-pointer ml-5"
        onClick={() => navigate("/")}
      >
        Bank App
      </div>
      <div className="text-white font-medium">
        <Link to="/">Home</Link>
        <Link to="/transactions" className="ml-10">
          Transactions
        </Link>
        <Link to="/logout" className="ml-10 mr-5" onClick={handleLogout}>
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Header;
