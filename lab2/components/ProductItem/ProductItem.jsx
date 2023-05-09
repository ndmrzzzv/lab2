import React from "react";
import "./ProductItem.css";

const ProductItem = ({item, addToCart}) => {
    return (
        <div className="product-item">
            <div
                style={{
                    backgroundImage: `url('${item.imgURL}')`,
                    height: "250px",
                    backgroundSize: "cover",
                    borderRadius: "15px",
                    width: "50%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    marginTop: 10
                }}
                className="product-img"
            ></div>
            <h4>{item.name}</h4>
            <div className="info">
                Price: {item.price} UAH
                <br/>
                Memory: {item.memory} GB
            </div>

            <button className="button" onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;
