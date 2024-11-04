import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

function setStorageItem(item) {
  localStorage.setItem("cart", JSON.stringify(item));
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart(state, action) {
      state.cart = action.payload;
    },
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
      setStorageItem(state.cart);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      setStorageItem(state.cart);
    },
    increateQuantity(state, action) {
      const itemFound = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (itemFound) {
        itemFound.quantity += 1;
      }
      setStorageItem(state.cart);
    },
    decreaseQuantity(state, action) {
      const itemFound = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (itemFound && itemFound?.quantity != 1) {
        itemFound.quantity -= 1;
      }
      setStorageItem(state.cart);
    },
  },
});

export const {
  initializeCart,
  addItem,
  deleteItem,
  increateQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
