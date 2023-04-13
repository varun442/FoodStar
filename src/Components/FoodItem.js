import React from "react";
import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ cloudinaryImageId, name, description, price }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{description}</h5>
      <h4>Price :{price}</h4>
    </div>
  );
};

export default FoodItem;
