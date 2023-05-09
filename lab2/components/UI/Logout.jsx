import React from "react";
import "./UI.css";

const Logout = ({ onLogout }) => {
  return (
    <div>
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
