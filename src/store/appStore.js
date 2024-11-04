import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';
import productsReducer from './slices/productsSlice';

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
    }
})

export default appStore;