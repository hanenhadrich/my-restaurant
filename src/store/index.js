import { configureStore } from '@reduxjs/toolkit';
import produitsSucreesSliceReducer from './produitsSucreesSlice';
import produitsGourmetSliceReducer from './produitsGourmetSlice';
import cartReducer from './cartSlice';
import produitsTraditionnelSliceReducer from './produitsTraditionnelSlice'; 
import notesReducer from './notesSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    produitsGourmet: produitsGourmetSliceReducer,
    produitsTraditionnel: produitsTraditionnelSliceReducer,
    produitsSucrees: produitsSucreesSliceReducer,
    notes: notesReducer,
  }
});
