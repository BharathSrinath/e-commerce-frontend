import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        qty: 0,
        totalPrice: 0,
    },
    reducers: {
        increment: (state, action) => {
            
        },
        decrement: (state, action) => {
           
        },
    },
});

export const { increment, decrement, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
