import { createSlice } from "@reduxjs/toolkit";

// Get wishlist items from localStorage
const savedWishlist = localStorage.getItem("wishlistItems");

const initialState = {
  items: savedWishlist ? JSON.parse(savedWishlist) : [],
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    // Add product to wishlist
    addToWishlist: (state, action) => {
      const exists = state.items.some(
        (item) => item.id === action.payload.id
      );

      if (!exists) {
        state.items.push(action.payload);
      }

      // Save wishlist to localStorage
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.items)
      );
    },

    // Remove product from wishlist
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      // Save wishlist to localStorage
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.items)
      );
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;