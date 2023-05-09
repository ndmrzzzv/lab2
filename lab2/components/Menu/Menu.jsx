import React from "react";
import "./Menu.css";

const Menu = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <nav className="menu">
      <ul className="menuList">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`menuItem menuButton${
              category === selectedCategory ? " selected" : ""
            }`}
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
