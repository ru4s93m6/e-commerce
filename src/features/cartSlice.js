import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const itemFound = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (!itemFound) {
        state.cart.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      } else {
        itemFound.quantity += action.payload.quantity || 1;
      }
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increateQuantity(state, action) {
      const itemFound = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (itemFound) {
        itemFound.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const itemFound = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (itemFound && itemFound?.quantity != 1) {
        itemFound.quantity -= 1;
      }
    },
  },
});

export const { addItem, deleteItem, increateQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
