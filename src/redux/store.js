import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products.js';

export default configureStore({
  reducer: {
    products: productsReducer
  },
});