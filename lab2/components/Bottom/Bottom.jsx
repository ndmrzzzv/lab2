import React from "react";
import "./Bottom.css";

const Bottom = ({ items }) => {
  return (
    <div className="bottom">
      <p>Cart items: {items.length}</p>
      <div className="cart-item">
        {items.map((item) => (
          <li key={item.name}>
            {item.name} ({item.price}):{` ${item.quantity}`}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Bottom;
