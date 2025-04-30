// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import wildlifeReducer from './wildlifeSlice';
import forestReducer from './forestSlice';
import parkReducer from './parkSlice';
import generalReducer from './generalSlice';

export const store = configureStore({
    reducer: {
        park: parkReducer,
        forest: forestReducer,
        wildlife: wildlifeReducer,
        general: generalReducer
    },
});