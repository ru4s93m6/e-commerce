import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeCart } from "./cartSlice";

export function useInitializeCart() {
  const dispatch = useDispatch();

  useEffect(
    function () {
      const cartItem = JSON.parse(localStorage.getItem("cart"));
      if (cartItem) {
        dispatch(initializeCart(cartItem));
      }
    },
    [dispatch],
  );
}
