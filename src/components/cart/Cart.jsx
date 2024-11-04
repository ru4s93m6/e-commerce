import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { initializeCart } from "../../features/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart.reduce(
    (total, item) => item.price * item.quantity + total,
    0,
  );
  useEffect(
    function () {
      const data = JSON.parse(localStorage.getItem("cart"));
      if (data) {
        dispatch(initializeCart(data));
      }
    },
    [dispatch],
  );

  // If there is no item in the cart yet
  if (cart.length === 0)
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl">
          There is no Item in the cart yet.
        </h2>
        <NavLink
          to="/items"
          className="rounded-full bg-stone-800 px-4 py-3 uppercase tracking-wider text-stone-50 duration-500 hover:scale-105 md:px-6 md:py-4"
        >
          Browse Items
        </NavLink>
      </div>
    );
  // map cart items
  return (
    <div className="px-8 py-5 sm:px-12 sm:py-10 md:px-20">
      <h2 className="mb-10 text-3xl font-light">Shopping Cart</h2>
      {cart.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}

      <div className="border-t border-gray-100 pt-4">
        <div className="flex justify-between">
          <p className="text-lg font-medium md:text-xl lg:text-2xl">Total</p>
          <p className="text-xl font-medium">${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      <button
        className="mt-8 w-full rounded-md bg-black px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-gray-900"
        aria-label="checkout button"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
