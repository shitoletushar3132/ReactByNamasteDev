import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartData = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  if (cartData.length == 0) {
    return <h1>Add Something...</h1>;
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <h3>Cart</h3>

      <button
        style={{
          border: "1px solid black",
          backgroundColor: "purple",
          padding: "10px",
        }}
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      <div>
        <ItemList items={cartData} />
      </div>
    </div>
  );
};

export default Cart;
