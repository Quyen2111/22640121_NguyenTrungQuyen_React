import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/todoSlice';
import themeReducer from '../features/theme/themeSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
  },
});