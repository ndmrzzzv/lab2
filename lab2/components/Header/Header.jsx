import React from "react";
import Login from "../UI/Login";
import Logout from "../UI/Logout";
import "./Header.css";

const Header = ({ storeName, isLoggedIn, onLogin, onLogout }) => {
  return (
    <header className="header">
      <h1 className="headerTitle">{storeName}</h1>
      <div className="headerActions">
        {isLoggedIn ? (
          <Logout onLogout={onLogout} />
        ) : (
          <Login onLogin={onLogin} />
        )}
      </div>
    </header>
  );
};

export default Header;
