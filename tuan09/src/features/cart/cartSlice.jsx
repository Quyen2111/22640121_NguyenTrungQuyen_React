import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cartItems: [], 
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((product) => product.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity; 
      } else {
        state.cartItems.push(item); 
      }
    },
   
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((product) => product.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;