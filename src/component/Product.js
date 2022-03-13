import React, { useEffect, useState } from "react";

export const Product = ({ Data ,dat}) => {
    
  return (
    <div className="product_wrap">
      {Data.map((val) => (
        <div className="product">
          <img className="product_image" src={val.image} />
          <h3 style={{ textAlign: "center" }}>{val.title.slice(0, 30)}</h3>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h5>{val.rating.rate} ⭐ </h5>
            <h4>{val.price}$ </h4>
          </div>
          <button className="button">
            <span>Buy Now</span>
          </button>
        </div>
      ))}
    </div>
  );
};
