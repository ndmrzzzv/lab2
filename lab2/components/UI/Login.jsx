import React from "react";
import "./UI.css";

const Login = ({ onLogin }) => {
  return (
    <div>
      <button className="login-button" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
