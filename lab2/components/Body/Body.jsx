import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./Body.css";

const Body = ({items, addToCart}) => (
    <div className="product-container">
        <h2 className="productTitle">Goods List</h2>
        <div className="goods-container">
            {items.map((item) => (
                <ProductItem key={item.name} item={item} addToCart={addToCart}/>
            ))}
        </div>
    </div>
);

export default Body;
