import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {
    // Add product to cart
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // Maximum quantity = 20
        if (existingItem.quantity < 20) {
          existingItem.quantity += 1;
        }
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // Remove product
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // Increase quantity
    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      // Maximum = 20
      if (item && item.quantity < 20) {
        item.quantity += 1;
      }
    },

    // Decrease quantity
    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      // Minimum = 1
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;