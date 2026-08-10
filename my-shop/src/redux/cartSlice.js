import { createSlice } from "@reduxjs/toolkit";

// Get cart items from localStorage
const savedCart = localStorage.getItem("cartItems");

const initialState = {
  items: savedCart ? JSON.parse(savedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

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

      // Save cart to localStorage
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items)
      );
    },

    // Remove product from cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      // Save cart to localStorage
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items)
      );
    },

    // Increase quantity
    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      // Maximum quantity = 20
      if (item && item.quantity < 20) {
        item.quantity += 1;
      }

      // Save cart to localStorage
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items)
      );
    },

    // Decrease quantity
    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      // Minimum quantity = 1
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      // Save cart to localStorage
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items)
      );
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