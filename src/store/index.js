// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import wildlifeReducer from './wildlifeSlice';
import forestReducer from './forestSlice';
import parkReducer from './parkSlice';

export const store = configureStore({
    reducer: {
        park: parkReducer,
        forest: forestReducer,
        wildlife: wildlifeReducer,
    },
});