import React from "react";
import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div>Cart - {cartItems.length}</div>
      {cartItems.map((item) => (
        <FoodItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default Cart;
