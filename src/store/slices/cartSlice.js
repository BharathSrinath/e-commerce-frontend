import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    updateCartQuantity: (state, action) => {
      const item = state.items.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity });
      }
    },
  },
});

export const { updateCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;
