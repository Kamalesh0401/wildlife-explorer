// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import wildlifeReducer from './wildlifeSlice';
import forestReducer from './forestSlice';

export const store = configureStore({
    reducer: {
        forest: forestReducer,
        wildlife: wildlifeReducer,
    },
});