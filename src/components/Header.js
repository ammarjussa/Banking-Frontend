import React from "react";

const Header = ({ handleLogout }) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white font-medium">Bank App</div>
      <div className="text-white font-medium">
        <a href="/">Home</a>
        <a href="/logout" className="ml-4" onClick={handleLogout}>
          Logout
        </a>
      </div>
    </nav>
  );
};

export default Header;
