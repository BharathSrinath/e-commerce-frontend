import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch products from the backend
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://e-commerce-backend-c7k5.onrender.com/api/products');
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default productsSlice.reducer;
